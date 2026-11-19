// A-080: lint mot vägar runt Regissören. Allt som syns eller hörs ska gå genom kön (kanalLagg → korKanal) eller regi.*.
// De råa anropen till skärmen, rösten och kameran får bara finnas i Regissörens block (REGI:START … REGI:SLUT),
// i köns egna funktioner, eller i en visa-funktion som kön själv kör (`visa: () => …`).
// Kör: node verktyg/lint-regissor.mjs [fil]   (körs i pre-commit, som lint-sekvens)
import fs from 'fs';
const fil = process.argv[2] || new URL('../spel/printa-hem/spel.js', import.meta.url).pathname;
const rader = fs.readFileSync(fil, 'utf8').split('\n');

// primitiv → funktioner där det får anropas direkt
const REGLER = {
  'ui.toast(': [],
  'speechSynthesis.speak(': ['prataNu'],
  'prataNu(': ['prataNu', 'prata', 'korPratKo', 'startaDel', 'korKanal'],
  'notisVisa(': ['notis', 'notisVisa'],   // bara anrop med direkt: true räknas (utan det lägger notisVisa sig själv i kön)
  'blickMal = {': ['tittaMot'],
  'kameraAk = {': ['startaKameraAk'],
};
let iRegi = false, fn = '';
const fel = [];
rader.forEach((r, i) => {
  if (r.includes('REGI:START')) iRegi = true;
  if (r.includes('REGI:SLUT')) { iRegi = false; return; }
  const m = r.match(/^(?:async\s+)?function\s+([A-Za-z0-9_$]+)/) || r.match(/^(?:const|let)\s+([A-Za-z0-9_$]+)\s*=\s*(?:async\s*)?\(/);
  if (m) fn = m[1]; else if (/^\S/.test(r) && !/^[}\])]/.test(r)) fn = '';
  if (iRegi) return;
  const kod = r.replace(/\/\*.*?\*\//g, '').replace(/\/\/.*$/, '');
  for (const [prim, tillatna] of Object.entries(REGLER)) {
    let p = kod.indexOf(prim);
    while (p >= 0) {
      const fore = kod.slice(0, p);
      const def = /function\s+$/.test(fore);
      const iVisa = /visa:\s*(?:async\s*)?\(\)\s*=>/.test(fore);   // kön kör den här funktionen
      const sjalvKo = prim === 'notisVisa(' && !/direkt:\s*true/.test(kod.slice(p, p + 200));
      if (!def && !iVisa && !sjalvKo && !tillatna.includes(fn)) fel.push(`${i + 1}: ${prim} i ${fn || '(toppnivå)'} – ${r.trim().slice(0, 110)}`);
      p = kod.indexOf(prim, p + 1);
    }
  }
});
if (fel.length) { console.log(`lint-regissor: ${fel.length} direkta anrop förbi Regissören\n` + fel.join('\n')); process.exit(1); }
console.log('lint-regissor: 0 direkta anrop förbi Regissören');
