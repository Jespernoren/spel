// =============================================================
//  Familjen – gemensamt för appen Familjens Spel och familjespelen.
//  Profilbilder: mobil/bilder/<id>.jpg
//
//  import { FAMILJ, inloggad, loggaIn, sparaRekord } from '../../delat/familj.js';
// =============================================================
export const FAMILJ = [
  { id: 'mamma',   namn: 'Mamma',   emoji: '👩', farg: '#ff6fae', filter: null,      vuxen: true },
  { id: 'pappa',   namn: 'Pappa',   emoji: '👨', farg: '#3de3ff', filter: null,      vuxen: true },
  { id: 'beppe',   namn: 'Beppe',   emoji: '🧙', farg: '#ffc83d', filter: 'Beppe',   vuxen: false },
  { id: 'charlie', namn: 'Charlie', emoji: '🦄', farg: '#c08cff', filter: 'Charlie', vuxen: false },
];

export const person = (id) => FAMILJ.find((p) => p.id === id) || null;

// Vem är inloggad i appen på den här telefonen?
export function inloggad() {
  try { return person(JSON.parse(localStorage.getItem('familj:jag'))); } catch { return null; }
}
export function loggaIn(id) {
  try { localStorage.setItem('familj:jag', JSON.stringify(id)); } catch {}
}

// Sökväg till profilbilden, räknat från en sida två mappar ner (spel/<mapp>/)
export const bildSokvag = (id, bas = '../../') => `${bas}mobil/bilder/${id}.jpg`;

// Sparar rekord både per person och totalt. Appen läser 'rekord:<mapp>:<id>' först.
// Returnerar true om det blev nytt personligt rekord.
export function sparaRekord(mapp, id, poang) {
  try {
    const egen = `rekord:${mapp}:${id}`;
    const nytt = poang > (Number(localStorage.getItem(egen)) || 0);
    if (nytt) localStorage.setItem(egen, poang);
    if (poang > (Number(localStorage.getItem(`rekord:${mapp}`)) || 0)) localStorage.setItem(`rekord:${mapp}`, poang);
    return nytt;
  } catch { return false; }
}
export function hamtaRekord(mapp, id) {
  try { return Number(localStorage.getItem(`rekord:${mapp}:${id}`)) || 0; } catch { return 0; }
}

// Familjens bästa i ett spel enligt appens topplista (lokal kopia, inkl. molnet om det är kopplat)
export function familjensTopp(mapp) {
  try {
    const alla = JSON.parse(localStorage.getItem('familj:poang') || '{}')[mapp] || {};
    return FAMILJ.map((p) => ({ ...p, poang: Math.max(alla[p.id]?.poang || 0, hamtaRekord(mapp, p.id)) }))
      .filter((p) => p.poang > 0).sort((a, b) => b.poang - a.poang);
  } catch { return []; }
}
