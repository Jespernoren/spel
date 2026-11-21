// story-koll (inkorg 58 §4 p.1, A-113): kollar masterfilen spel/printa-hem/story.js utan att spela.
// Stoppar committen om ordningen inte går ihop. Kör: node verktyg/story-koll.mjs
import fs from 'node:fs';
import { STORY_STEG, FRAN_START, HANDLINGAR, LAGEN } from '../spel/printa-hem/story.js';

const fel = [];
const PIL_NAMN = ['bradhog', 'vagCykel', 'startYta', 'skrivare', 'cykel', 'ali', 'vevYta', 'skjul'];   // samma namn som PIL_MAL i spel.js
const givet = new Set(FRAN_START), sett = new Set();
STORY_STEG.forEach((p, i) => {
  const vid = `steg ${i} (${p.id || '?'})`;
  if (!p.id) fel.push(`${vid}: saknar id`);
  if (sett.has(p.id)) fel.push(`${vid}: id finns två gånger`); sett.add(p.id);
  if (!p.mal) fel.push(`${vid}: saknar mal`);
  if (typeof p.klar !== 'function') fel.push(`${vid}: saknar klar()`);
  if (p.pil && !PIL_NAMN.includes(p.pil)) fel.push(`${vid}: pilen "${p.pil}" finns inte i världen`);
  if (!p.pil) fel.push(`${vid}: saknar pil`);
  if (p.handling && !HANDLINGAR.includes(p.handling)) fel.push(`${vid}: okänd handling "${p.handling}"`);
  for (const l of Object.keys(p.lagen || {})) if (!LAGEN.includes(l)) fel.push(`${vid}: okänt läge "${l}"`);
  for (const k of p.kraver || []) if (!givet.has(k)) fel.push(`${vid}: kräver "${k}" men inget tidigare steg ger det`);
  // bilden får inte vara en sak som ett tidigare, klart steg gällde (PIL PÅ GJORD SAK, i filen)
  if (typeof p.bild === 'string' && p.bild !== p.sak) {
    const fore = STORY_STEG.slice(0, i).find((x) => x.sak === p.bild);
    const igen = STORY_STEG.slice(i).some((x) => x.sak === p.bild);
    if (fore && !igen) fel.push(`${vid}: bilden ${p.bild} hör till det klara steget ${fore.id}`);
  }
  for (const g of p.ger || []) givet.add(g);
});
// de gamla tabellerna får inte ha kvar poster för stegen i story.js
const spel = fs.readFileSync(new URL('../spel/printa-hem/spel.js', import.meta.url), 'utf8');
const tabell = (namn) => { const i = spel.indexOf(`const ${namn} = {`); if (i < 0) return ''; return spel.slice(i, spel.indexOf('\n};', i)); };
for (const namn of ['STEG_TAL', 'STEG_TAL_SPARA', 'JAG_TAL', 'PAMINN_T', 'KEDJA_TEXT', 'KEDJA_MAL', 'FOR_DU']) {
  const t = tabell(namn);
  for (const p of STORY_STEG) if (new RegExp(`^\\s+'?${p.id}'?:`, 'm').test(t)) fel.push(`${namn} har kvar en post för ${p.id} (den ska bara stå i story.js)`);
}
for (const p of STORY_STEG) if (new RegExp(`x\\.id === '${p.id}'`).test(tabell('KNUFF_T') || spel.slice(spel.indexOf('const KNUFF_T'), spel.indexOf('];', spel.indexOf('const KNUFF_T'))))) fel.push(`KNUFF_T har kvar en post för ${p.id}`);
for (const gammal of ['DAG1_FORST', 'DU_BYGG']) if (new RegExp(`const ${gammal}\\b`).test(spel)) fel.push(`${gammal} finns kvar (står som start i story.js)`);

if (fel.length) { console.log(`story-koll: ${fel.length} fel`); fel.forEach((f) => console.log('  ✗ ' + f)); process.exit(1); }
console.log(`story-koll: ${STORY_STEG.length} steg i ordning, kraver/ger går ihop, 0 fel`);
