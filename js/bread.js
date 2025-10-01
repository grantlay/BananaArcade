// Banana Bread page controller — mirrors Home, but filters to origin:'bread'
(function () {
  const $content = document.getElementById('content');
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();

  const C = window.BAComponents;
  const ALL = Array.isArray(window.GAMES) ? window.GAMES : [];
  const BREAD = ALL.filter(g => g.origin === 'bread');

  function mount(node) {
    $content.replaceChildren(node);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // --- HERO featured (same behavior as index) ---
  (function wireHero() {
    if (!C || !BREAD.length) return;
    const featured = (BREAD.find(g => g.featured) ?? BREAD[0]);
    const heroCard = document.getElementById('heroFeaturedCard');
    const playFeatured = document.getElementById('playFeatured');
    if (heroCard && !heroCard.firstChild) heroCard.appendChild(C.buildHeroFeatured(featured));
    if (playFeatured && !playFeatured._wired) {
      playFeatured._wired = true;
      playFeatured.addEventListener('click', (e) => { e.preventDefault(); C.openGame(featured); });
    }
  })();

  // --- Sections: New This Week / Featured / Top 10 (BREAD only) ---
  const frag = document.createDocumentFragment();

  if (C && BREAD.length) {
    // All (anchor for Browse All)
    const sAll = C.section(`<span id="all"></span>All Banana Bread`, `<span class="muted">${BREAD.length} games</span>`);
    sAll.appendChild(C.grid(BREAD));
    frag.appendChild(sAll);
  } else {
    const empty = document.createElement('div');
    empty.className = 'panel';
    empty.innerHTML = `<h2>Banana Bread</h2><p class="muted">No Banana Bread games found. Add some with <code>origin: "bread"</code> in <code>data.js</code>.</p>`;
    frag.appendChild(empty);
  }

  mount(frag);

  // ----- Footer categories (same dynamic fill as we used before) -----
  (function initFooterCats() {
    const listEl = document.getElementById('footerCats');
    if (!listEl || !Array.isArray(window.CATEGORIES)) return;
    const cats = CATEGORIES.slice(0, 8);
    listEl.innerHTML = cats.map(c => `<li><a href="index.html#games" data-cat="${c}" class="footer__cat">${c}</a></li>`).join('');
  })();
})();
