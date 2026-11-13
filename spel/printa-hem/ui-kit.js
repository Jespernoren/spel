// =============================================================
//  ui-kit.js – Printa Hems gemensamma UI: ikoner, porträtt och
//  komponenter (panel, flikar, 1x1-rutor, detaljruta, knappar).
//  Se stilguiden: claude/printa-hem-stilguide.md
//  Regler: inga emojis i UI · grönt = du får · rött = det kostar.
// =============================================================

// ---------- Ikoner: 24×24, linje 2 px, rundade ändar, currentColor ----------
const S = (inre, fyll = 'none') => `<svg viewBox="0 0 24 24" fill="${fyll}" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${inre}</svg>`;
export const IKON = {
  mynt: `<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" fill="#ffb84d" stroke="#b8781a" stroke-width="2"/><circle cx="12" cy="12" r="5" fill="none" stroke="#b8781a" stroke-width="1.6"/></svg>`,
  rulle: `<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" fill="#1d2230" stroke="#4cc9f0" stroke-width="2"/><circle cx="12" cy="12" r="6" fill="#4cc9f0" opacity=".55"/><circle cx="12" cy="12" r="2.2" fill="#1d2230"/></svg>`,
  blixt: `<svg viewBox="0 0 24 24"><path d="M13 2 4 14h7l-1 8 9-12h-7z" fill="#ffd43b" stroke="#b39012" stroke-width="1.5" stroke-linejoin="round"/></svg>`,
  klocka: S('<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>'),
  hjarta: `<svg viewBox="0 0 24 24"><path d="M12 20s-7-4.4-9-9a5 5 0 0 1 9-3 5 5 0 0 1 9 3c-2 4.6-9 9-9 9z" fill="#ff6b8a" stroke="#c43d5c" stroke-width="1.6" stroke-linejoin="round"/></svg>`,
  kista: S('<rect x="3" y="9" width="18" height="11" rx="1.5"/><path d="M3 9a9 4 0 0 1 18 0"/><path d="M3 13h18"/><rect x="10.5" y="11.5" width="3" height="4" rx=".5"/>'),
  hand: S('<path d="M8 13V6a1.5 1.5 0 0 1 3 0v6M11 11V4.5a1.5 1.5 0 0 1 3 0V11M14 11V6a1.5 1.5 0 0 1 3 0v8a7 7 0 0 1-7 7h-.5a6 6 0 0 1-4.6-2.2L3.5 15.5a1.6 1.6 0 0 1 2.4-2.1L8 15"/>'),
  kop: S('<path d="M3 4h2l2.2 10.2a2 2 0 0 0 2 1.6h7.6a2 2 0 0 0 2-1.5L21 8H6.3"/><circle cx="9.5" cy="20" r="1.4"/><circle cx="17" cy="20" r="1.4"/>'),
  salj: S('<path d="M20.6 13.4 13.4 20.6a2 2 0 0 1-2.8 0L3 13V3h10l7.6 7.6a2 2 0 0 1 0 2.8z"/><circle cx="7.5" cy="7.5" r="1.5"/>'),
  skrivare: S('<path d="M5 20V5h14v15"/><path d="M3 20h18"/><path d="M5 9h14"/><rect x="10" y="9" width="4" height="3"/><path d="M8 17h8"/>'),
  kugghjul: S('<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z"/>'),
  hus: S('<path d="M3 11 12 4l9 7"/><path d="M5 10v10h14V10"/><path d="M10 20v-6h4v6"/>'),
  gava: S('<rect x="3" y="8" width="18" height="4" rx="1"/><path d="M5 12v8h14v-8M12 8v12"/><path d="M12 8C10 4 6 5 7.5 7.5 8.2 8.5 12 8 12 8zM12 8c2-4 6-3 4.5-.5C15.8 8.5 12 8 12 8z"/>'),
  recept: S('<path d="M14 3H6a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V8z"/><path d="M14 3v5h5M8 13h8M8 17h6"/>'),
  oandlig: S('<path d="M7 8.5c-2 0-3.5 1.6-3.5 3.5S5 15.5 7 15.5c3.5 0 6.5-7 10-7 2 0 3.5 1.6 3.5 3.5S19 15.5 17 15.5c-3.5 0-6.5-7-10-7z"/>'),
  soffa: S('<path d="M4 11V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v3"/><path d="M2 13a2 2 0 0 1 4 0v2h12v-2a2 2 0 0 1 4 0v5H2z"/><path d="M5 18v2M19 18v2"/>'),
  brev: S('<rect x="3" y="5" width="18" height="14" rx="1.5"/><path d="m3.5 6 8.5 7 8.5-7"/>'),
  telefon: S('<rect x="7" y="2.5" width="10" height="19" rx="2"/><path d="M11 18.5h2"/>'),
  bok: S('<path d="M4 4.5A1.5 1.5 0 0 1 5.5 3H20v15H5.5A1.5 1.5 0 0 0 4 19.5z"/><path d="M4 19.5A1.5 1.5 0 0 0 5.5 21H20v-3"/><path d="M9 7h7"/>'),
  spara: S('<path d="M5 3h11l3 3v13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"/><path d="M7 3v5h8V3M7 21v-7h10v7"/>'),
  omstart: S('<path d="M20 12a8 8 0 1 1-2.34-5.66"/><path d="M20 4v5h-5"/>'),
  stang: S('<path d="M6 6l12 12M18 6 6 18"/>'),
  las: S('<rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/>'),
  varning: S('<path d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z"/><path d="M12 9v4M12 17h.01"/>'),
  bock: S('<path d="M20 6 9 17l-5-5"/>'),
  pil: S('<path d="M5 12h14M13 6l6 6-6 6"/>'),
  lada: S('<path d="M21 8 12 3 3 8v8l9 5 9-5z"/><path d="m3 8 9 5 9-5M12 13v8"/>'),
  pokal: S('<path d="M8 21h8M12 17v4M7 4h10v5a5 5 0 0 1-10 0z"/><path d="M17 5h3v2a3 3 0 0 1-3 3M7 5H4v2a3 3 0 0 0 3 3"/>'),
  stjarna: S('<path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2L12 17.3 6.4 20.2l1.1-6.2L3 9.6l6.2-.9z"/>'),
  info: S('<circle cx="12" cy="12" r="9"/><path d="M12 11v6M12 7.5h.01"/>'),
  film: S('<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m10 9 5 3-5 3z"/>'),
  rost: S('<path d="M11 5 6 9H3v6h3l5 4z"/><path d="M15.5 8.5a5 5 0 0 1 0 7M18.5 5.5a9 9 0 0 1 0 13"/>'),
  tyst: '<svg viewBox="0 0 24 24"><path d="M4 9h4l5-4v14l-5-4H4z" fill="currentColor"/><path d="M16 9l5 6M21 9l-5 6" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/></svg>',
  mal: S('<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.5"/>'),
  ny: S('<path d="M12 5v14M5 12h14"/>'),
  trim: S('<path d="M4 20 14 10M14 10l3-7 4 4-7 3M7 17l-3 3"/>'),
  kvarn: S('<path d="M6 3h12l-3 6H9z"/><rect x="7" y="9" width="10" height="9" rx="1"/><path d="M17 13h3v3"/><path d="M7 21h10"/>'),
};
export const ik = (namn, klass = '') => `<span class="ui-ik ${klass}">${IKON[namn] || IKON.info}</span>`;

// ---------- Porträtt (40×40) ----------
const P = (inre, bg) => `<svg viewBox="0 0 40 40"><circle cx="20" cy="20" r="20" fill="${bg}"/>${inre}</svg>`;
export const PORTRATT = {
  ali: P(`<path d="M7 40c1-8 6-11 13-11s12 3 13 11z" fill="#2f6b4f"/><ellipse cx="20" cy="19" rx="9" ry="10" fill="#b07a4e"/><path d="M11 15c0-6 4-9 9-9s9 3 9 9c-2-3-5-4-9-4s-7 1-9 4z" fill="#1a1410"/><path d="M13 13.5l4 1.2M27 13.5l-4 1.2" stroke="#1a1410" stroke-width="1.8" stroke-linecap="round"/><circle cx="16.5" cy="17" r="1.2" fill="#111"/><circle cx="23.5" cy="17" r="1.2" fill="#111"/><path d="M13 23.5c2-2.5 5-2.5 7-1 2-1.5 5-1.5 7 1-2.5 1-4.5.5-7-.5-2.5 1-4.5 1.5-7 .5z" fill="#1a1410"/><path d="M17.5 27h5" stroke="#5a2a20" stroke-width="1.3" stroke-linecap="round"/>`, '#3d5a80'),
  rolf: P(`<path d="M6 40c1-8 7-11 14-11s13 3 14 11z" fill="#ff7a1a"/><path d="M12 32l1 8M28 32l-1 8" stroke="#f5f5f5" stroke-width="2"/><ellipse cx="20" cy="20" rx="9" ry="9.5" fill="#d9a07a"/><path d="M11.5 22c1 5 4 7.5 8.5 7.5s7.5-2.5 8.5-7.5c-2 2-5 3-8.5 3s-6.5-1-8.5-3z" fill="#6e6a64" opacity=".8"/><path d="M10 14c0-5 4.5-7 10-7s10 2 10 7z" fill="#2e8b57"/><path d="M8 14h16" stroke="#2e8b57" stroke-width="3" stroke-linecap="round"/><circle cx="16.5" cy="18" r="1.2" fill="#111"/><circle cx="23.5" cy="18" r="1.2" fill="#111"/><circle cx="20" cy="22" r="2.6" fill="#e0605a"/><path d="M17.5 26c1.5 1 3.5 1 5 0" stroke="#5a2a20" stroke-width="1.2" fill="none" stroke-linecap="round"/>`, '#4a5d3a'),
  mamma: P(`<path d="M7 40c1-8 6-11 13-11s12 3 13 11z" fill="#e0567a"/><circle cx="20" cy="8" r="4.5" fill="#7a4a2a"/><ellipse cx="20" cy="19" rx="8.5" ry="9.5" fill="#f2c9a5"/><path d="M11.5 18c0-6 3.5-9 8.5-9s8.5 3 8.5 9c-1.5-3-4-5-8.5-5s-7 2-8.5 5z" fill="#7a4a2a"/><path d="M14.5 15l3 .8M25.5 15l-3 .8" stroke="#5a3a20" stroke-width="1.5" stroke-linecap="round"/><circle cx="16.5" cy="18" r="1.1" fill="#111"/><circle cx="23.5" cy="18" r="1.1" fill="#111"/><path d="M17 24.5h6" stroke="#b03a50" stroke-width="1.6" stroke-linecap="round"/><circle cx="11.3" cy="21" r="1" fill="#ffd43b"/><circle cx="28.7" cy="21" r="1" fill="#ffd43b"/>`, '#7a3b5a'),
  pappa: P(`<path d="M7 40c1-8 6-11 13-11s12 3 13 11z" fill="#5f6b7a"/><ellipse cx="20" cy="19.5" rx="8.5" ry="9.5" fill="#efc4a0"/><path d="M11.5 16c0-5 4-7.5 8.5-7.5s8.5 2.5 8.5 7.5c-1-2-3-3-8.5-3s-7.5 1-8.5 3z" fill="#9aa0a8"/><circle cx="16.5" cy="18.5" r="3" fill="none" stroke="#333" stroke-width="1.3"/><circle cx="23.5" cy="18.5" r="3" fill="none" stroke="#333" stroke-width="1.3"/><path d="M19.5 18.5h1" stroke="#333" stroke-width="1.3"/><circle cx="16.5" cy="18.5" r=".9" fill="#111"/><circle cx="23.5" cy="18.5" r=".9" fill="#111"/><path d="M17 25h6" stroke="#6a3a2a" stroke-width="1.4" stroke-linecap="round"/>`, '#3a4250'),
  bror: P(`<path d="M7 40c1-8 6-11 13-11s12 3 13 11z" fill="#8e44ad"/><ellipse cx="20" cy="19.5" rx="8.5" ry="9.5" fill="#f0c6a2"/><path d="M11 16c0-6 4-8.5 9-8.5s9 2.5 9 8.5h-6l-3-2-3 2z" fill="#222"/><path d="M27 14h5" stroke="#222" stroke-width="2.5" stroke-linecap="round"/><circle cx="16.5" cy="18.5" r="1.1" fill="#111"/><circle cx="23.5" cy="18.5" r="1.1" fill="#111"/><path d="M16 23.5c2 2.5 6 2.5 8 0" stroke="#6a3a2a" stroke-width="1.4" fill="none" stroke-linecap="round"/>`, '#4a2a5e'),
  du: P(`<path d="M6 40c1-9 6-12 14-12s13 3 14 12z" fill="#2d6cdf"/><path d="M10 18c0-7 4.5-10 10-10s10 3 10 10v4c-1-3-3-8-10-8s-9 5-10 8z" fill="#2d6cdf"/><ellipse cx="20" cy="20" rx="7.5" ry="8" fill="#f0c6a2"/><circle cx="17" cy="19" r="1" fill="#111"/><circle cx="23" cy="19" r="1" fill="#111"/><path d="M17.5 24c1.5 1 3.5 1 5 0" stroke="#6a3a2a" stroke-width="1.2" fill="none" stroke-linecap="round"/>`, '#24304a'),
};
export const portratt = (vem, storlek = 40) => `<span class="ui-portratt" style="width:${storlek}px;height:${storlek}px">${PORTRATT[vem] || PORTRATT.du}</span>`;

// ---------- Tar bort emojis ur text (UI ska vara emojifritt) ----------
const EMOJI = /[\u{1F000}-\u{1FAFF}\u{2600}-\u{27BF}\u{2B00}-\u{2BFF}\u{1F1E6}-\u{1F1FF}\u{FE0F}\u{200D}\u{20E3}\u{2300}-\u{23FF}\u{2934}\u{2935}\u{3030}\u{303D}\u{3297}\u{3299}]/gu;
export const rens = (t) => String(t ?? '').replace(EMOJI, '').replace(/ {2,}/g, ' ').replace(/(^|>)\s+/g, '$1').replace(/^[\s·–—:-]+/, '');

// ---------- Komponenter ----------
const esc = (t) => String(t ?? '').replace(/"/g, '&quot;');
export function knapp({ text, typ = 'neutral', attr = '', av = false, ikon = '' }) {
  return `<button class="ui-knapp ${typ}" ${attr} ${av ? 'disabled' : ''}>${ikon ? ik(ikon) : ''}<span>${text}</span></button>`;
}
// 1×1-ruta: miniatyr, pris uppe till vänster, antal nere till höger
export function ruta({ bild = '', attr = '', vald = false, last = false, dyr = false, tom = false, antal = '', pris = '', prisTyp = '', titel = '', liten = false, storlek = 0 }) {
  if (tom) return `<div class="ui-ruta tom ${liten ? 'liten' : ''}" ${attr}></div>`;
  return `<button class="ui-ruta ${vald ? 'vald' : ''} ${last ? 'last' : ''} ${dyr ? 'dyr' : ''} ${liten ? 'liten' : ''}" ${attr} title="${esc(titel)}">
    <span class="bild">${bild}</span>${pris !== '' ? `<span class="pris ${prisTyp}">${pris}</span>` : ''}${antal !== '' && antal !== 1 ? `<span class="antal">${antal}</span>` : ''}${last ? `<span class="lasikon">${IKON.las}</span>` : ''}${storlek ? `<span class="stl s${storlek}">${'SML'[storlek - 1]}</span>` : ''}</button>`;
}
export const grid = (rutor) => `<div class="ui-grid">${rutor.join('')}</div>`;
export const sektion = (titel, hjalp = '') => `<div class="ui-sektion"><span>${titel}</span>${hjalp ? `<small>${hjalp}</small>` : ''}</div>`;
export const fakta = (lista) => `<div class="ui-fakta">${lista.filter(Boolean).map(([i, t, k = '']) => `<span class="${k}">${ik(i)}${t}</span>`).join('')}</div>`;
export function detalj({ bild = '', titel = '', text = '', faktaLista = [], knappar = [], tom = '' }) {
  if (!titel) return `<div class="ui-detalj tom">${tom || 'Välj något i rutnätet för att se mer.'}</div>`;
  return `<div class="ui-detalj"><div class="bild">${bild}</div><div class="tx"><b>${titel}</b>${text ? `<p>${text}</p>` : ''}${faktaLista.length ? fakta(faktaLista) : ''}</div>
    <div class="knappar">${knappar.map(knapp).join('')}</div></div>`;
}
export const resurs = (ikon, varde, klass = '') => `<span class="ui-resurs ${klass}">${ik(ikon)}<b>${varde}</b></span>`;
export function panel({ ikon = '', portrattVem = '', titel, sub = '', resurser = '', flikar = [], aktivFlik = '', kropp = '', fot = '', klass = '' }) {
  return `<div class="ui-panel ${klass}">
    <div class="ui-head">${portrattVem ? portratt(portrattVem, 46) : ikon ? `<span class="ui-headik">${IKON[ikon] || ''}</span>` : ''}
      <div class="ui-titel"><b>${titel}</b>${sub ? `<small>${sub}</small>` : ''}</div>
      <div class="ui-resurser">${resurser}</div>
      <button class="ui-stang" data-stang title="Stäng (Esc)">${IKON.stang}</button></div>
    ${flikar.length ? `<div class="ui-flikar">${flikar.map(([id, i, t, extra = '']) => `<button data-flik="${id}" class="${id === aktivFlik ? 'pa' : ''}">${ik(i)}<span>${t}</span>${extra ? `<em>${extra}</em>` : ''}</button>`).join('')}</div>` : ''}
    <div class="ui-kropp">${kropp}</div>
    ${fot ? `<div class="ui-fot">${fot}</div>` : ''}
  </div>`;
}
export const rad = ({ bild = '', titel = '', text = '', hoger = '', attr = '', ny = false }) =>
  `<div class="ui-rad ${ny ? 'ny' : ''}" ${attr}>${bild}<div class="tx"><b>${titel}</b>${text ? `<p>${text}</p>` : ''}</div>${hoger}</div>`;

// ---------- CSS ----------
export const UI_CSS = `
.ui-ik{display:inline-flex;width:18px;height:18px;flex:none;vertical-align:-3px}.ui-ik svg{width:100%;height:100%}
.ui-portratt{display:inline-block;flex:none;border-radius:50%;overflow:hidden;box-shadow:0 0 0 2px rgba(255,255,255,.15)}.ui-portratt svg{width:100%;height:100%;display:block}
.fp-overlay:has(.ui-panel){background:rgba(8,10,16,.62)}
.ui-panel{width:min(820px,95vw);max-height:90vh;display:flex;flex-direction:column;background:#191c24;border:1px solid #343a4a;border-radius:16px;box-shadow:0 24px 70px rgba(0,0,0,.55);color:#f2f2f2;text-align:left;overflow:hidden;animation:uiIn .18s cubic-bezier(.2,.9,.3,1.15);font:500 14px/1.45 system-ui,-apple-system,"Segoe UI",sans-serif}
@keyframes uiIn{from{transform:scale(.96);opacity:0}}
.ui-head{display:flex;align-items:center;gap:12px;padding:14px 16px;background:#232733;border-bottom:1px solid #343a4a}
.ui-headik{width:40px;height:40px;border-radius:10px;background:#2c3242;color:#ffb84d;display:grid;place-items:center;flex:none}.ui-headik svg{width:24px;height:24px}
.ui-titel{flex:1;min-width:0}.ui-titel b{display:block;font-size:20px;font-weight:800;line-height:1.2}.ui-titel small{display:block;color:#9aa3b5;font-size:13px;margin-top:2px}
.ui-resurser{display:flex;gap:8px;flex-wrap:wrap;justify-content:flex-end}
.ui-resurs{display:inline-flex;align-items:center;gap:6px;background:#191c24;border:1px solid #343a4a;border-radius:999px;padding:5px 11px;font-size:14px}.ui-resurs b{font-weight:800}
.ui-stang{width:36px;height:36px;border-radius:10px;border:0;background:#2c3242;color:#c5ccda;cursor:pointer;display:grid;place-items:center;flex:none}.ui-stang:hover{background:#3a4155;color:#fff}.ui-stang svg{width:18px;height:18px}
.ui-flikar{display:flex;gap:4px;padding:0 12px;background:#232733;border-bottom:1px solid #343a4a}
.ui-flikar button{display:flex;align-items:center;gap:8px;border:0;background:none;color:#9aa3b5;font:700 14px system-ui;padding:12px 14px 10px;cursor:pointer;border-bottom:3px solid transparent}
.ui-flikar button:hover{color:#fff}.ui-flikar button.pa{color:#ffb84d;border-bottom-color:#ffb84d}
.ui-flikar em{font-style:normal;background:#ef5350;color:#fff;border-radius:999px;padding:0 7px;font-size:12px}
.ui-kropp{padding:14px 16px;overflow:auto;flex:1;min-height:0}
.ui-fot{border-top:1px solid #343a4a;background:#1e222c}
.ui-sektion{display:flex;align-items:baseline;gap:10px;margin:14px 0 8px}.ui-sektion:first-child{margin-top:0}
.ui-sektion span{font-size:12px;font-weight:800;letter-spacing:.08em;text-transform:uppercase;color:#c5ccda}.ui-sektion small{color:#7d869a;font-size:12px}
.ui-grid{display:flex;flex-wrap:wrap;gap:6px}
.ui-ruta{position:relative;width:72px;height:72px;padding:0;background:#8b8b8b;border:3px solid;border-color:#5a5a5a #e6e6e6 #e6e6e6 #5a5a5a;display:grid;place-items:center;cursor:pointer;color:#222;transition:transform .08s}
.ui-ruta:hover{background:#a5a5a5}.ui-ruta:active{transform:scale(.96)}
.ui-ruta.vald{background:#ffd98a;border-color:#b07a00 #fff2c8 #fff2c8 #b07a00;box-shadow:0 0 0 2px #ffb84d}
.ui-ruta.dyr{background:#5a4a4a;border-color:#3a2a2a #7a6262 #7a6262 #3a2a2a}.ui-ruta.dyr .bild{opacity:.3;filter:grayscale(1)}.ui-ruta.dyr .pris{color:#ff8a85!important;font-size:12px}.ui-ruta.last{background:#6d6d6d}.ui-ruta.last .bild{opacity:.35;filter:grayscale(1)}
.ui-ruta.tom{background:#2a2f3c;border:2px dashed #3d4456;cursor:default}
.ui-ruta.liten{width:58px;height:58px}
.ui-ruta .bild{display:grid;place-items:center;width:100%;height:100%}.ui-ruta .bild img{width:54px;height:54px}.ui-ruta.liten .bild img{width:44px;height:44px}
.ui-ruta .bild .ui-ik{width:34px;height:34px}
.ui-ruta .antal{position:absolute;right:3px;bottom:1px;font:800 14px system-ui;color:#fff;text-shadow:0 1px 2px #000,0 0 3px #000}
.ui-ruta .pris{position:absolute;left:2px;top:1px;font:900 12px system-ui;color:#fff;text-shadow:0 1px 2px #000,0 0 2px #000}
.ui-ruta .stl{position:absolute;right:2px;top:2px;width:15px;height:15px;border-radius:4px;font:900 10px/15px system-ui;color:#fff;text-align:center;box-shadow:0 1px 2px rgba(0,0,0,.5)}.ui-ruta .stl.s1{background:#2d7fd6}.ui-ruta .stl.s2{background:#f28c28}.ui-ruta .stl.s3{background:#d63a2f}
.ui-ruta .pris.plus{color:#5dff9a}.ui-ruta .pris.minus{color:#ffb3b0}.ui-ruta .pris.fil{color:#9fe8ff}
.ui-ruta .lasikon{position:absolute;inset:0;display:grid;place-items:center;color:#fff}.ui-ruta .lasikon svg{width:24px;height:24px;fill:none;stroke:currentColor;stroke-width:2.2}
.ui-detalj{display:flex;gap:14px;align-items:center;padding:14px 16px;min-height:96px}
.ui-detalj.tom{color:#7d869a;justify-content:center}
.ui-detalj .bild{width:84px;height:84px;flex:none;background:#2a2f3c;border-radius:12px;display:grid;place-items:center}.ui-detalj .bild img{width:72px;height:72px}.ui-detalj .bild .ui-ik{width:40px;height:40px}
.ui-detalj .tx{flex:1;min-width:0}.ui-detalj b{font-size:17px;font-weight:800}.ui-detalj p{margin:3px 0 6px;color:#c5ccda;font-size:13.5px}
.ui-detalj .knappar{display:flex;flex-direction:column;gap:6px;flex:none}
.ui-fakta{display:flex;flex-wrap:wrap;gap:6px}.ui-fakta>span{display:inline-flex;align-items:center;gap:5px;background:#2a2f3c;border-radius:8px;padding:3px 8px;font-size:13px;font-weight:700}
.ui-fakta>.plus{color:#7dffb0}.ui-fakta>.minus{color:#ff9a96}.ui-fakta>.varn{color:#ffb84d}.ui-fakta .ui-ik{width:16px;height:16px}
.ui-knapp{display:inline-flex;align-items:center;justify-content:center;gap:7px;min-width:150px;border:0;border-radius:10px;padding:11px 16px;font:800 15px system-ui;cursor:pointer;color:#fff;background:#3a4155}
.ui-knapp:hover:not(:disabled){filter:brightness(1.12)}.ui-knapp:disabled{opacity:.45;cursor:default}
.ui-knapp.primar{background:#ffb84d;color:#2a1c05}.ui-knapp.plus{background:#2fa85d}.ui-knapp.minus{background:#d8433f}.ui-knapp.neutral{background:#3a4155}
.ui-knapp .ui-ik{width:18px;height:18px}
.ui-rad{display:flex;gap:12px;align-items:flex-start;padding:10px 12px;border-radius:12px;background:#232733;margin-bottom:8px}
.ui-rad.ny{box-shadow:inset 3px 0 0 #4cc9f0}.ui-rad .tx{flex:1}.ui-rad b{font-weight:800}.ui-rad p{margin:2px 0 0;color:#c5ccda}
.ui-tom{color:#7d869a;padding:10px 0}
.ui-titel small .ui-bubbla{display:inline-block;margin-top:4px;line-height:1.35;white-space:normal}.ui-bubbla{background:#fff;color:#222;border-radius:14px 14px 14px 4px;padding:8px 12px;font-weight:600;font-size:14px;max-width:440px}
`;
