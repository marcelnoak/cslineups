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

// type ist ein String ("Smoke") oder bei Kombi-Lineups eine Liste (["Smoke", "HE"]).
// Ein einzelner Wurf (Eintrag in lineups) kann zusätzlich eine eigene Utility (type) und einen eigenen
// Landepunkt (landAt) haben, z. B. drei Smokes von einer Position. Würfe ohne beides sind Zusatzbilder ("Zoomed").
const stepsOf = l => l.lineups || [];
const baseType = l => [].concat(l.type || [])[0] || '';
const typesOf = l => [...new Set([].concat(l.type || [], stepsOf(l).map(s => s.type).filter(Boolean)))];

// "3× Smoke", "2× Smoke + HE" – zählt eigene Würfe; ohne die einfach alle Typen
function typeLabel(l) {
  const own = stepsOf(l).filter(s => s.type || s.landAt);
  if (own.length < 2) return typesOf(l).join(' + ');
  const counts = new Map();
  for (const s of own) { const t = s.type || baseType(l); counts.set(t, (counts.get(t) || 0) + 1); }
  return [...counts].map(([t, n]) => (n > 1 ? n + '× ' : '') + t).join(' + ');
}

// Kurzzeichen für Radar-Marker: Anfangsbuchstaben der Typen, z. B. "SHM"
const typeLetters = types => types.map(t => t.charAt(0)).join('');

// Punkte eines Lineups auf dem Radar: je Wurf mit eigenem Landepunkt, sonst der Landepunkt des Lineups
function radarPoints(l) {
  const own = stepsOf(l).map((s, i) => ({ s, i })).filter(x => x.s.landAt);
  if (own.length) return own.map(({ s, i }) => ({
    l, step: i, label: s.label || 'Wurf ' + (i + 1), types: [s.type || baseType(l)], landAt: s.landAt, throwAt: s.throwAt || l.throwAt,
  }));
  return l.landAt ? [{ l, step: -1, label: '', types: typesOf(l), landAt: l.landAt, throwAt: l.throwAt }] : [];
}

// Radar: Punkte (landAt/throwAt) sind relative Koordinaten 0–1 auf dem Radarbild der Map.
const TYPE_COLORS = { Smoke: '#D0D7DE', Flash: '#F5D547', Molotov: '#F0883E', HE: '#F85149', Decoy: '#8B949E' };
const typeColor = t => TYPE_COLORS[t] || '#9BA3AE';
const radarOf = name => (MAPS.find(m => m.name === name) || {}).radar || null;
const pct = v => (v * 100).toFixed(2) + '%';

// Gestrichelte Linie Wurfposition → Landepunkt (SVG mit viewBox 0 0 100 100)
function throwLines(items) {
  return items.filter(l => l.landAt && l.throwAt).map(l => `
    <line x1="${l.throwAt.x * 100}" y1="${l.throwAt.y * 100}" x2="${l.landAt.x * 100}" y2="${l.landAt.y * 100}"/>
    <circle class="from" cx="${l.throwAt.x * 100}" cy="${l.throwAt.y * 100}" r="1"/>`).join('');
}

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
          <span class="tag">${esc(typeLabel(l))}</span>
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
            <div class="step" data-step="${i}">
              <div class="step-head"><span class="step-num">${i + 1}</span><h3>${esc(s.label || ('Wurf ' + (i + 1)))}</h3>${s.type ? `<span class="tag">${esc(s.type)}</span>` : ''}</div>
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
