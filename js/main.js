// js/main.js — Banana Arcade routing + pages

const $content = document.getElementById("content");
const $hero = document.querySelector(".hero");
const navLinks = [...document.querySelectorAll(".nav__menu a")];

// guards for optional footer year
const y = document.getElementById("year");
if (y) y.textContent = new Date().getFullYear();

// helpers
function setActive(tab) {
  navLinks.forEach(a => a.classList.toggle("is-active", a.dataset.tab === tab));
}
function showHero(show) { if ($hero) $hero.style.display = show ? "" : "none"; }
function mount(node) { $content.replaceChildren(node); window.scrollTo({ top: 0, behavior: "smooth" }); }

// ========== PAGE RENDERERS ==========
function pageHome() {
  const frag = document.createDocumentFragment();

  // Example sections using your components (if loaded)
  const C = window.BAComponents;
  if (C && window.GAMES) {
    // Hero featured button wiring (safe if present)
    const featured = (GAMES.find(g => g.featured) ?? GAMES[0]);
    const heroCard = document.getElementById("heroFeaturedCard");
    const playFeatured = document.getElementById("playFeatured");
    if (heroCard && !heroCard.firstChild) heroCard.appendChild(C.buildHeroFeatured(featured));
    if (playFeatured && !playFeatured._wired) {
      playFeatured._wired = true;
      playFeatured.addEventListener("click", e => { e.preventDefault(); C.openGame(featured); });
    }

    const s1 = C.section("New This Week", `<a href="#games" class="btn btn--ghost" data-tab-jump="games">See All</a>`);
    s1.appendChild(C.rail(GAMES.filter(g => g.new)));
    frag.appendChild(s1);

    const s2 = C.section("Featured");
    s2.appendChild(C.rail(GAMES.filter(g => g.featured)));
    frag.appendChild(s2);

    const top = [...GAMES].sort((a,b)=> b.plays - a.plays).slice(0,10);
    const s3 = C.section("Top 10");
    s3.appendChild(C.rail(top));
    frag.appendChild(s3);
  } else {
    // Minimal fallback if components aren’t loaded
    const div = document.createElement("div");
    div.textContent = "Welcome to Banana Arcade";
    frag.appendChild(div);
  }

  mount(frag);
}

function pageBananaBread() {
  const C = window.BAComponents;
  const frag = document.createDocumentFragment();

  // Intro panel
  const intro = document.createElement('section');
  intro.className = 'section';
  intro.innerHTML = `
    <div class="panel">
      <h2>Banana Bread</h2>
      <p class="muted">
        Banana Bread is a variety of handmade games customly coded by Banana Arcade. These games are HTML based, meaning they can't be blocked! So if your favorite games are blocked on our site, Banana Bread might just have it!
      </p>
    </div>`;
  frag.appendChild(intro);

  // Grid of our in-house games (origin === 'bread')
  const list = (window.GAMES || []).filter(g => g.origin === 'bread');
  if (C && C.section && C.grid) {
    const s = C.section('Play Banana Bread');
    s.appendChild(C.grid(list));
    frag.appendChild(s);
  } else {
    // Minimal fallback
    const d = document.createElement('div');
    d.textContent = `${list.length} Banana Bread games`;
    frag.appendChild(d);
  }

  mount(frag);
}


function pageAll() {
  const C = window.BAComponents;
  if (C && window.GAMES) {
    const s = C.section("All Games", `<span class="muted">${GAMES.length} games</span>`);
    s.appendChild(C.grid(GAMES));
    mount(s);
  } else {
    const d = document.createElement("div"); d.textContent = "All games (loading…)"; mount(d);
  }
}

function pagePopular() {
  const C = window.BAComponents;
  if (C && window.GAMES) {
    const sorted = [...GAMES].sort((a,b)=> (b.rating*1000 + b.plays*0.001) - (a.rating*1000 + a.plays*0.001)).slice(0,24);
    const s = C.section("Popular Right Now");
    s.appendChild(C.grid(sorted));
    mount(s);
  } else {
    const d = document.createElement("div"); d.textContent = "Popular (loading…)"; mount(d);
  }
}

function pageCats() {
  const C = window.BAComponents;
  if (C && window.GAMES && window.CATEGORIES) {
    const frag = document.createDocumentFragment();
    CATEGORIES.forEach(cat => {
      const list = GAMES.filter(g => g.categories?.includes(cat));
      if (!list.length) return;
      const s = C.section(cat, `<a href="#" class="btn btn--ghost" data-more="${cat}">See All</a>`);
      s.appendChild(C.rail(list));
      frag.appendChild(s);
    });
    mount(frag);
  } else {
    const d = document.createElement("div"); d.textContent = "Categories (loading…)"; mount(d);
  }
}

function pageCredits() {
  const C = window.BAComponents;
  if (C && window.CREDITS) {
    const s = C.section("Credits");
    const box = document.createElement("div"); box.className = "grid";
    CREDITS.forEach(p => box.appendChild(C.creditsCard(p)));
    s.appendChild(box); mount(s);
  } else {
    const d = document.createElement("div"); d.textContent = "Credits (loading…)"; mount(d);
  }
}

function pageExtras() {
  const C = window.BAComponents;
  if (C && window.EXTRAS) {
    const s = C.section("Extras");
    const box = document.createElement("div"); box.className = "grid";
    EXTRAS.forEach(x => box.appendChild(C.externalCard(x)));
    s.appendChild(box); mount(s);
  } else {
    const d = document.createElement("div"); d.textContent = "Extras (loading…)"; mount(d);
  }
}

// ========== ROUTER ==========
function route() {
  const tab = (location.hash.slice(1) || "home");
  setActive(tab);

  if (tab === "home") { showHero(true);  pageHome();    return; }
  showHero(false);
  if (tab === "games")   return pageAll();
  if (tab === "bread")  return pageBananaBread();
  if (tab === "popular") return pagePopular();
  if (tab === "cats")    return pageCats();
  if (tab === "credits") return pageCredits();
  if (tab === "extras")  return pageExtras();

  showHero(true); pageHome();
}
window.addEventListener("hashchange", route);
route();

// “See all” in categories → jump to All Games for that category
document.body.addEventListener("click", (e) => {
  const more = e.target.closest("[data-more]");
  if (!more) return;
  e.preventDefault();
  location.hash = "#games";
});

// ==========================
// Search (index only)
// ==========================
(function initSearch() {
  const input = document.getElementById('searchInput');
  const drop  = document.getElementById('searchResults');

  // If we're not on index.html (e.g., game.html), bail silently
  if (!input || !drop || !Array.isArray(window.GAMES)) return;

  // If a query param ?q= exists, prefill and open results
  const qParam = new URLSearchParams(location.search).get('q');
  if (qParam) input.value = qParam;

  let active = -1;           // keyboard selection index
  let results = [];          // current results
  let debounceTimer = null;  // debouncer

  const close = () => { drop.classList.remove('is-open'); drop.innerHTML = ''; active = -1; };
  const open  = () => { if (drop.children.length) drop.classList.add('is-open'); };

  function score(g, q) {
    // simple relevancy scoring
    const n = g.name.toLowerCase();
    const t = (g.tags || []).join(' ').toLowerCase();
    const c = (g.categories || []).join(' ').toLowerCase();
    let s = 0;
    if (n === q) s += 100;
    if (n.startsWith(q)) s += 60;
    if (n.includes(q)) s += 40;
    if (t.includes(q)) s += 25;
    if (c.includes(q)) s += 15;
    if (g.plays) s += Math.log10(g.plays + 10); // light popularity boost
    if (g.rating) s += g.rating * 2;
    return s;
  }

  function search(q) {
    const v = q.trim().toLowerCase();
    if (!v) { close(); return; }
    const ranked = GAMES
      .map(g => ({ g, s: score(g, v) }))
      .filter(x => x.s > 0)
      .sort((a, b) => b.s - a.s)
      .slice(0, 8)
      .map(x => x.g);
    render(ranked, v);
  }

  function render(list, query) {
    results = list;
    drop.innerHTML = '';
    if (!list.length) { close(); return; }

    list.forEach((g, i) => {
      const row = document.createElement('div');
      row.className = 'suggest';
      row.role = 'option';
      row.dataset.index = i;

      row.innerHTML = `
        <img class="suggest__thumb" src="${g.img}" alt="">
        <div>
          <div style="font-weight:700">${g.name}</div>
          <div class="muted" style="font-size:.78rem">${(g.tags || []).join(' · ')}</div>
        </div>
      `;

      row.addEventListener('mouseenter', () => setActive(i));
      row.addEventListener('mousedown', (e) => e.preventDefault()); // keep focus on input
      row.addEventListener('click', () => openGame(g));

      drop.appendChild(row);
    });

    open();
    setActive(0);
  }

  function setActive(idx) {
    const rows = [...drop.children];
    rows.forEach(r => r.classList.remove('is-active'));
    if (!rows.length) { active = -1; return; }
    active = (idx + rows.length) % rows.length;
    rows[active].classList.add('is-active');
    rows[active].scrollIntoView({ block: 'nearest' });
  }

  function openActive() {
    if (active < 0 || active >= results.length) return;
    openGame(results[active]);
  }

  input.addEventListener('input', () => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => search(input.value), 120);
  });

  input.addEventListener('keydown', (e) => {
    const rows = drop.children.length;
    if (!rows) return;

    if (e.key === 'ArrowDown') { e.preventDefault(); setActive(active + 1); }
    if (e.key === 'ArrowUp')   { e.preventDefault(); setActive(active - 1); }
    if (e.key === 'Enter')     { e.preventDefault(); openActive(); }
    if (e.key === 'Escape')    { e.preventDefault(); close(); }
  });

  input.addEventListener('focus', () => {
    if (input.value.trim()) search(input.value); // show if there is text
  });

  document.addEventListener('click', (e) => {
    if (!e.target.closest('.nav__search')) close();
  });

  // kick off if ?q= was present
  if (qParam) search(qParam);
})();
