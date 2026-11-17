/* ============================================================================
   LINEUP-BUCH · GEMEINSAMER CODE
   ----------------------------------------------------------------------------
   Von index.html (Ansicht) und editor.html (Vorschau) genutzt, damit beide
   eine Lineup-Karte identisch darstellen. Braucht data/maps.js davor.
============================================================================ */

const esc = s => String(s).replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));

// result kann ein Objekt {img,note} ODER ein Array [{img,note},…] sein → immer als Array.
const asResults = l => Array.isArray(l.result) ? l.result.filter(Boolean) : (l.result ? [l.result] : []);

// stance wird als fester Wert gespeichert und erst hier übersetzt; Unbekanntes bleibt wie es ist.
const STANCES = { stand: 'Stehen', crouch: 'Ducken', jump: 'Springen', run: 'Laufen', walk: 'Gehen' };
const stanceLabel = s => STANCES[s] || s;

// Bricht ein Bild, wird das Element zur "fehlt"-Kachel (kein kaputtes Icon).
const onErr = "this.style.display='none';this.parentNode.classList.add('missing')";

// Zoombares Bild (Detailansicht)
function shot(src, cap) {
  if (!src) return `<div class="shot missing"></div>`;
  return `<div class="shot" data-src="${esc(src)}"><img src="${esc(src)}" alt="${esc(cap)}" loading="lazy" onerror="${onErr}"><div class="lens"></div></div>`;
}

// Komplette Lineup-Karte: Position | Würfe | Result
function lineupCard(l) {
  return `
    <article class="card">
      <div class="card-head">
        <h2>${esc(l.title)}</h2>
        <div class="meta">
          <span class="tag map">${esc(l.map)}</span>
          <span class="tag side-${esc(l.side)}">${esc(l.side)}-Seite</span>
          <span class="tag">${esc(l.type)}</span>
        </div>
      </div>
      <div class="body">
        <section class="col">
          <p class="col-label">Position — ${esc(l.from)}</p>
          ${shot(l.position && l.position.img, 'Position: ' + l.from)}
          <p class="hint">Hover zum Zoomen · Klick für groß</p>
          ${l.position && l.position.note ? `<p class="note">${esc(l.position.note)}</p>` : ''}
        </section>
        <section class="col">
          <p class="col-label">Fadenkreuz &amp; Wurf</p>
          ${(l.lineups || []).map((s, i) => `
            <div class="step">
              <div class="step-head"><span class="step-num">${i + 1}</span><h3>${esc(s.label || ('Wurf ' + (i + 1)))}</h3></div>
              ${shot(s.img, s.label || ('Wurf ' + (i + 1)))}
              ${(s.stance || (s.input && s.input.length)) ? `<div class="inputs">
                ${s.stance ? `<span class="key stance">${esc(stanceLabel(s.stance))}</span>${s.input && s.input.length ? '<span class="plus">+</span>' : ''}` : ''}
                ${(s.input || []).map(k => `<span class="key">${esc(k)}</span>`).join('<span class="plus">+</span>')}
              </div>` : ''}
              ${s.note ? `<p class="note">${esc(s.note)}</p>` : ''}
            </div>`).join('')}
        </section>
        <section class="col">
          <p class="col-label">Result</p>
          ${asResults(l).length
            ? asResults(l).map((r, i) => `
            <div class="step">
              ${asResults(l).length > 1 ? `<div class="step-head"><span class="step-num">${i + 1}</span><h3>Result ${i + 1}</h3></div>` : ''}
              ${shot(r.img, 'Result ' + (i + 1) + ': ' + l.title)}
              ${r.note ? `<p class="note">${esc(r.note)}</p>` : ''}
            </div>`).join('')
            : shot(null, 'Result')}
        </section>
      </div>
    </article>`;
}

// Lupe auf allen .shot-Bildern innerhalb von root
function attachLens(root) {
  root.addEventListener('mousemove', e => {
    const el = e.target.closest('.shot'); if (!el || el.classList.contains('missing')) return;
    const img = el.querySelector('img'), lens = el.querySelector('.lens');
    if (!img || !lens) return;
    const r = el.getBoundingClientRect(), z = 2.6, size = 190;
    const x = e.clientX - r.left, y = e.clientY - r.top;
    lens.style.backgroundImage = `url("${img.src}")`;
    lens.style.backgroundSize = (r.width * z) + 'px ' + (r.height * z) + 'px';
    lens.style.backgroundPosition = `${-x * z + size / 2}px ${-y * z + size / 2}px`;
    lens.style.left = (x - size / 2) + 'px';
    lens.style.top = (y - size / 2) + 'px';
  });
}

// Pro Map die Datei data/<slug>.js laden; fehlt eine (Map noch ohne Lineups), wird sie übersprungen.
function loadLineups(done) {
  let pending = MAPS.length;
  if (!pending) { done(); return; }
  MAPS.forEach(m => {
    const s = document.createElement('script');
    s.src = 'data/' + mapSlug(m.name) + '.js';
    s.onload = s.onerror = () => { if (--pending === 0) done(); };
    document.head.appendChild(s);
  });
}
