/* Banana Arcade — Viewer Controller (file/html/url loader + dock + plays bump) */
(function () {
  const qs = new URLSearchParams(location.search);
  const id = qs.get('id');

  const $frame       = document.getElementById('gFrame');
  const $skeleton    = document.querySelector('.viewer__frame-skeleton');
  const $dockTitle   = document.getElementById('dockTitle');
  const $dockCreator = document.getElementById('dockCreator');
  const $dockThumb   = document.getElementById('dockThumb');
  const $dockPlays   = document.getElementById('dockPlays');
  const $related     = document.getElementById('gRelated');

  const DB = Array.isArray(window.GAMES) ? window.GAMES : [];
  const game = DB.find(g => g.id === id);

  function setSkeleton(show, msg) {
    if (!$skeleton) return;
    $skeleton.style.display = show ? 'grid' : 'none';
    if (msg) $skeleton.textContent = msg;
  }

  function wrapHtml(inner) {
    return `<!doctype html><html><head>
      <meta charset="utf-8">
      <base href="${location.origin}/">
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <style>html,body{height:100%;margin:0;background:#0e1118}</style>
    </head><body>${inner}</body></html>`;
  }

  function loadIntoIframe(g) {
    if (!g) return;

    if (g.file) {                // local file → go through wrapper (for mute hooks etc.)
      loadGameWrapped(g.file);
      return;
    }
    if (g.html) {                // inline HTML
      const htmlDoc = wrapHtml(g.html);
      try { $frame.srcdoc = htmlDoc; }
      catch {
        const blob = new Blob([htmlDoc], { type: 'text/html' });
        const url = URL.createObjectURL(blob);
        $frame.src = url;
        $frame.addEventListener('load', () => URL.revokeObjectURL(url), { once: true });
      }
      return;
    }
    if (g.url) {                 // external URL → also wrap
      loadGameWrapped(g.url);
      return;
    }
    setSkeleton(true, 'No source found for this game.');
  }

  function miniCard(g) {
    const a = document.createElement('a');
    a.href = `game.html?id=${g.id}`;
    a.className = 'card';
    const total = window.PlayCounter ? PlayCounter.total(g) : (g.plays || 0);
    const formatted = window.PlayCounter ? PlayCounter.format(total) : String(total);
    a.innerHTML = `
      <img class="card__thumb" src="${g.img}" alt="">
      <div class="card__body">
        <h3 class="card__title" style="font-size:.92rem">${g.name}</h3>
        <div class="muted" style="font-size:.78rem">
          <span class="play-badge" data-plays-for="${g.id}" data-seed="${g.plays || 0}">${formatted}</span> plays
        </div>
      </div>`;
    return a;
  }

  // Boot
  if (!game) {
    document.title = 'Game not found — Banana Arcade';
    if ($dockTitle)   $dockTitle.textContent = 'Game not found';
    if ($dockCreator) $dockCreator.textContent = 'Return and pick another game.';
    setSkeleton(true, 'Not found');
    return;
  }

  // Dock meta
  document.title = `${game.name} — Banana Arcade`;
  if ($dockTitle)   $dockTitle.textContent = game.name;
  if ($dockCreator) $dockCreator.textContent = game.creator
      ? `By: ${game.creator}`
      : (game.tags && game.tags.length ? game.tags.join(' · ') : '');
  if ($dockThumb)   $dockThumb.src = game.img || '';

  // Pre-fill plays in dock
  if ($dockPlays && window.PlayCounter) {
    const total = PlayCounter.total(game);
    $dockPlays.textContent = PlayCounter.format(total);
    $dockPlays.title = total.toLocaleString() + ' plays';
  }

  // Load game
  setSkeleton(true, 'Loading…');
  loadIntoIframe(game);

  // Once main frame loads first time → bump plays once per tab session
  if ($frame) {
    let firstLoaded = false;
    $frame.addEventListener('load', () => {
      setSkeleton(false);
      if (!firstLoaded) {
        firstLoaded = true;
        if (window.PlayCounter && game?.id) {
          PlayCounter.bumpOncePerSession(game.id);
          // refresh dock count after bump
          if ($dockPlays) {
            const total = PlayCounter.total(game);
            $dockPlays.textContent = PlayCounter.format(total);
            $dockPlays.title = total.toLocaleString() + ' plays';
          }
        }
      }
    }, { once: false });
  }

  // Controls
  const $btnBack   = document.getElementById('btnBack');
  const $btnReload = document.getElementById('btnReload');
  const $btnFull   = document.getElementById('btnFull');

  if ($btnBack)   $btnBack.addEventListener('click', () => history.back());
  if ($btnReload) $btnReload.addEventListener('click', () => {
    setSkeleton(true, 'Loading…');
    if (game.file)       loadGameWrapped(game.file);
    else if (game.html)  loadIntoIframe(game);
    else if (game.url)   loadGameWrapped(game.url);
  });
  if ($btnFull)   $btnFull.addEventListener('click', () => {
    if ($frame.requestFullscreen) $frame.requestFullscreen();
  });

  // Related
  if ($related) {
    const rel = DB
      .filter(x => x.id !== game.id && x.categories?.some(c => (game.categories || []).includes(c)))
      .slice(0, 8);
    rel.forEach(x => $related.appendChild(miniCard(x)));
  }
})();

/* ------ Viewer Page Search (self-contained) ------ */
(function initViewerSearch() {
  const input = document.getElementById('searchInput');
  const drop  = document.getElementById('searchResults');
  if (!input || !drop || !Array.isArray(window.GAMES)) return;
  if (input._wired) return; input._wired = true;

  const go = (g) => { location.href = `game.html?id=${g.id}`; };

  let results = [];
  let active  = -1;
  let debounce;

  const close = () => { drop.classList.remove('is-open'); drop.innerHTML=''; active=-1; };
  const open  = () => { if (drop.children.length) drop.classList.add('is-open'); };

  const norm = (s) => s.normalize('NFD').replace(/\p{Diacritic}/gu,'').toLowerCase();

  function score(g, q) {
    const n = norm(g.name);
    const t = norm((g.tags||[]).join(' '));
    const c = norm((g.categories||[]).join(' '));
    let s = 0;
    if (n === q) s+=100;
    if (n.startsWith(q)) s+=60;
    if (n.includes(q)) s+=40;
    if (t.includes(q)) s+=25;
    if (c.includes(q)) s+=15;
    if (g.plays)  s += Math.min(20, Math.log10(g.plays+10));
    if (g.rating) s += g.rating;
    return s;
  }

  function render(list) {
    drop.innerHTML = '';
    if (!list.length) { close(); return; }
    list.slice(0,8).forEach((g,i)=>{
      const total = window.PlayCounter ? PlayCounter.total(g) : (g.plays || 0);
      const formatted = window.PlayCounter ? PlayCounter.format(total) : String(total);

      const row = document.createElement('div');
      row.className = 'suggest';
      row.dataset.index = i;
      row.innerHTML = `
        <img class="suggest__thumb" src="${g.img}" alt="">
        <div>
          <div style="font-weight:700">${g.name}</div>
          <div class="muted" style="font-size:.78rem">
            <span class="play-badge" data-plays-for="${g.id}" data-seed="${g.plays || 0}">${formatted}</span> plays
          </div>
        </div>`;
      row.addEventListener('mousedown', e => e.preventDefault());
      row.addEventListener('mouseenter', () => setActive(i));
      row.addEventListener('click', () => { close(); input.blur(); go(g); });
      drop.appendChild(row);
    });
    open();
    setActive(0);
  }

  function setActive(i) {
    const rows = [...drop.children];
    rows.forEach(r=>r.classList.remove('is-active'));
    if (!rows.length) { active=-1; return; }
    active = (i + rows.length) % rows.length;
    rows[active].classList.add('is-active');
    rows[active].scrollIntoView({ block:'nearest' });
  }

  function search(q) {
    const v = norm(q.trim());
    if (!v) { close(); return; }
    results = GAMES
      .map(g => ({ g, s: score(g, v) }))
      .filter(x => x.s > 0)
      .sort((a,b)=> b.s - a.s)
      .map(x => x.g);
    render(results);
  }

  input.addEventListener('input', () => {
    clearTimeout(debounce);
    debounce = setTimeout(() => search(input.value), 120);
  });

  input.addEventListener('keydown', (e) => {
    const rows = drop.children.length;
    if (e.key === 'Escape') { e.preventDefault(); input.value=''; close(); input.blur(); return; }
    if (!rows) {
      if (e.key === 'Enter') { e.preventDefault();
        const q = input.value.trim();
        if (q) location.href = `index.html?q=${encodeURIComponent(q)}#home`;
      }
      return;
    }
    if (e.key === 'ArrowDown') { e.preventDefault(); setActive(active+1); }
    else if (e.key === 'ArrowUp') { e.preventDefault(); setActive(active-1); }
    else if (e.key === 'Enter') {
      e.preventDefault();
      if (active > -1) { close(); input.blur(); go(results[active]); }
    }
  });

  input.addEventListener('focus', () => { if (input.value.trim()) search(input.value); });
  document.addEventListener('click', (e) => { if (!e.target.closest('.nav__search')) close(); });
})();

// Load a game into #gFrame through a same-origin wrapper (allows extra hooks)
async function loadGameWrapped(src) {
  const frame = document.getElementById('gFrame');
  const abs = new URL(src, location.href).href;

  const wrapper = `
<!DOCTYPE html><html><head><meta charset="utf-8">
  <base href="${abs}">
  <style>html,body,iframe{height:100%;width:100%;margin:0;border:0}</style>
</head>
<body>
  <iframe id="inner" src="${abs}" allow="autoplay; fullscreen"></iframe>
</body></html>`;

  frame.srcdoc = wrapper;
}
