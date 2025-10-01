/* Banana Arcade — UI Components */

const fmt = {
  num(n){ try { return Intl.NumberFormat().format(n); } catch { return n; } },
  rating(r){ const v = Number.isFinite(r) ? Math.max(0, Math.min(5, r)) : 0; return (Math.round(v*10)/10).toFixed(1); }
};

function openGame(g){
  if(!g || !g.id) return;
  const url = new URL('game.html', location.href);
  url.searchParams.set('id', g.id);
  location.href = url.toString();
}

function chip(label){
  const span = document.createElement('span');
  span.className = 'badge';
  span.textContent = label;
  return span;
}


function imgFallback(imgEl){ if(!imgEl) return; imgEl.addEventListener('error', ()=>{ imgEl.removeAttribute('src'); }, {once:true}); }

function gameCard(g){
  const el = document.createElement('article');
  el.className = 'card'; el.tabIndex = 0; el.setAttribute('role','button');
  el.innerHTML = `
    <img class="card__thumb" src="${g.img}" alt="" loading="lazy" referrerpolicy="no-referrer">
    <div class="card__body">
      <h3 class="card__title">${g.name}</h3>
      <div class="card__meta">
        <span class="badge">★ ${fmt.rating(g.rating)}</span>
        ${Number.isFinite(g.plays) ? `<span class="badge">${fmt.num(g.plays)} plays</span>` : ''}
        ${g.new ? '<span class="badge" style="color:#9ee6ff">New</span>' : ''}
      </div>
      <button class="card__play" aria-label="Play ${g.name}">Play</button>
    </div>`;
  imgFallback(el.querySelector('.card__thumb'));
  const go = (e)=>{ e && e.stopPropagation(); openGame(g); };
  el.addEventListener('click', go);
  el.addEventListener('keydown', e=>{ if(e.key==='Enter'||e.key===' '){ e.preventDefault(); go(e);} });
  el.querySelector('.card__play').addEventListener('click', go);
  return el;
}

function section(title, rightHTML=''){
  const s = document.createElement('section'); s.className='section';
  s.innerHTML = `<div class="section__head"><h2 class="section__title">${title}</h2><div class="section__actions">${rightHTML}</div></div>`;
  return s;
}

function rail(list){
  const wrap = document.createElement('div'); wrap.className='rail__wrap';
  wrap.innerHTML = `
    <button class="rail__btn rail__btn--prev" aria-label="Scroll left">◄</button>
    <div class="rail" tabindex="0"></div>
    <button class="rail__btn rail__btn--next" aria-label="Scroll right">►</button>`;
  const scroller = wrap.querySelector('.rail');
  list.forEach(g => scroller.appendChild(gameCard(g)));
  const prev = wrap.querySelector('.rail__btn--prev');
  const next = wrap.querySelector('.rail__btn--next');
  const amt = ()=> Math.max(scroller.clientWidth*0.85, 320);
  prev.addEventListener('click', ()=> scroller.scrollBy({left:-amt(), behavior:'smooth'}));
  next.addEventListener('click', ()=> scroller.scrollBy({left: amt(), behavior:'smooth'}));
  scroller.addEventListener('keydown', e=>{
    if(e.key==='ArrowRight'){ e.preventDefault(); scroller.scrollBy({left: amt(),  behavior:'smooth'}); }
    if(e.key==='ArrowLeft' ){ e.preventDefault(); scroller.scrollBy({left:-amt(),  behavior:'smooth'}); }
  });
  return wrap;
}

function grid(list){ const g=document.createElement('div'); g.className='grid'; list.forEach(i=>g.appendChild(gameCard(i))); return g; }

function buildHeroFeatured(g){
  const card = document.createElement('div'); card.className='card'; card.style.cursor='pointer'; card.tabIndex=0; card.setAttribute('role','button');
  card.innerHTML = `
    <img class="card__thumb" src="${g.img}" alt="" loading="lazy" referrerpolicy="no-referrer" />
    <div class="card__body">
      <h3 class="card__title">${g.name}</h3>
      <div class="card__meta">
        <span class="badge">★ ${fmt.rating(g.rating)}</span>
        ${Number.isFinite(g.plays) ? `<span class="badge">${fmt.num(g.plays)} plays</span>` : ''}
        ${g.new ? '<span class="badge" style="color:#9ee6ff">New</span>' : ''}
      </div>
      <button class="card__play" aria-label="Play ${g.name}">Play</button>
    </div>`;
  imgFallback(card.querySelector('.card__thumb'));
  const go = (e)=>{ e && e.stopPropagation(); openGame(g); };
  card.addEventListener('click', go);
  card.addEventListener('keydown', e=>{ if(e.key==='Enter'||e.key===' '){ e.preventDefault(); go(e);} });
  card.querySelector('.card__play').addEventListener('click', go);
  return card;
}

function creditsCard(person){
  const card = document.createElement('article'); card.className='card';
  card.innerHTML = `<div class="card__body"><h3 class="card__title">${person.name}</h3><div class="card__meta"><span class="badge">${person.role}</span></div></div>`;
  return card;
}

function externalCard(item){
  const a = document.createElement('a'); a.href=item.link; a.target='_blank'; a.rel='noopener';
  const card = document.createElement('article'); card.className='card';
  card.innerHTML = `<div class="card__body"><h3 class="card__title">${item.title}</h3><div class="card__meta"><span class="badge">External</span></div></div>`;
  a.appendChild(card); return a;
}

window.BAComponents = { fmt, openGame, chip, gameCard, section, rail, grid, buildHeroFeatured, creditsCard, externalCard };
