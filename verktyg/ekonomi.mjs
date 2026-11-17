// A-067: ekonomin dag för dag – förväntad inkomst per minut, dagens mål med pris, och hur lång dagen blir.
// Kör: node verktyg/ekonomi.mjs [--md]   → tabell + verktyg/ekonomi-facit.json. Exit 1 vid DYR DAG, BILLIG DAG eller PLATT STEG.
// Modellen: mätningen AX g53/g54 (b3544ff) ger dagens längd och inkomsten med de gamla priserna. Med trappan blir varje pris
// gammalt × (ny inkomst / gammal inkomst) × längdfaktor, så dagens nya längd ≈ gammal längd × (andel som inte är köp + andel köp × längdfaktor).
import fs from 'node:fs';
const B = await import(new URL('../spel/printa-hem/balans.js', import.meta.url));
const ANDEL_KOP = 0.7;   // andel av en dag som går åt till att tjäna ihop dagens köp (resten: gå, bygga, prata)
const ali = (r) => r >= 150 ? Math.round(r * B.PRIS_SKALA / 10) * 10 : r;
const M = B.MASKIN_SIFFROR, V = B.VARA_SIFFROR, MK = B.MARK_PRIS;
const MAL = {
  11: [['Kolfiberkvarnen', ali(M.kolfkvarn.ritning)], ['Rullbandet', ali(M.kolfband.ritning)]],
  12: [['Kolfiberskrivaren', ali(M.kolfskrivare.ritning)], ['Slangfördelaren', ali(M.kolfslang.ritning)]],
  13: [['Gamingboden', ali(M.gamingbod.ritning)], ['En gamersak', ali(B.LYX_RECEPT.gamingstol)]],
  14: [['Jetmotorn', ali(M.jetmotor.ritning)], ['Leveranslådan', ali(M.utlada.ritning)]],
  15: [['Inred boden (3)', 3 * ali(B.LYX_RECEPT.projektor)], ['Jacuzzin', ali(B.LYX_RECEPT.jacuzzi)]],
  16: [['Tomten', MK.egen.pris]],
  17: [['Ängen', MK.oster.pris]],
  18: [['Diamantkvarnen', ali(M.diamantkniv.ritning)], ['Grunden', MK.husgrund.pris]],
  19: [['Huset', MK.huset.pris]],
  20: [['Vedkaminen', ali(B.LYX_RECEPT.kamin)]],
  21: [['Lagfarten (folkbokföringen)', B.LAGFART]],
  22: [['Julbordet', 0]],
  23: [['Svackan', MK.norr.pris], ['Marken runt tippen', MK.tippkant.pris], ['Rolfs soptipp', MK.tippen.pris], ['Rolfs hus', MK.rolfhus.pris]],
};
const rader = [], flaggor = [];
for (let dag = 1; dag <= 23; dag++) {
  const ink = B.inkomstPerMin(dag), mal = MAL[dag] || [], summa = mal.reduce((a, [, p]) => a + p, 0);
  const langd = dag >= 11 ? Math.min(7, Math.max(0.6, B.DAG_MAL_MIN / (B.DAG_MIN_AX[dag] || B.DAG_MAL_MIN))) : 1;
  const ax = B.DAG_MIN_AX[dag] ?? 10;   // dag 1–10 har mätts till 8–15 min (A-042)
  const min = dag === 23 ? summa / ink / mal.length : dag === 21 ? ax + B.LAGFART / ink : ax * (1 - ANDEL_KOP + ANDEL_KOP * langd);
  rader.push({ dag, inkomst: ink, mal: mal.map(([n, p]) => `${n} ${p.toLocaleString('sv-SE')} kr`).join(' · '), summa, minuter: +min.toFixed(1) });
  if (dag >= 11 && min > 20) flaggor.push(`DYR DAG: dag ${dag} ≈ ${min.toFixed(1)} min`);
  if (dag >= 11 && dag !== 23 && min < 6) flaggor.push(`BILLIG DAG: dag ${dag} ≈ ${min.toFixed(1)} min`);
}
const L = ['bla', 'rod', 'kolf', 'guld', 'tippium']; for (let i = 2; i < L.length; i++) { const k = B.VARDE_PER_GRAM[L[i]] / B.VARDE_PER_GRAM[L[i - 1]]; if (k < 4) flaggor.push(`PLATT STEG: ${L[i - 1]} → ${L[i]} ×${k.toFixed(1)}`); }
const stg = L.slice(1).map((l, i) => `${L[i]} → ${l} ×${(B.VARDE_PER_GRAM[l] / B.VARDE_PER_GRAM[L[i]]).toFixed(1)}`).join(', ');
fs.writeFileSync(new URL('./ekonomi-facit.json', import.meta.url), JSON.stringify({ trappan: B.VARDE_PER_GRAM, rader, flaggor }, null, 1));
const md = [`| Dag | Inkomst kr/min | Dagens köp | Summa | Minuter |`, `|---|---|---|---|---|`, ...rader.map((r) => `| ${r.dag === 23 ? 'efterspelet (per mark)' : r.dag} | ${r.inkomst.toLocaleString('sv-SE')} | ${r.mal || '–'} | ${r.summa.toLocaleString('sv-SE')} | ${r.minuter} |`)].join('\n');
console.log(md); console.log(`\nTrappan (kr per gram): ${JSON.stringify(B.VARDE_PER_GRAM)} · steg: ${stg}`);
console.log(flaggor.length ? flaggor.map((f) => '✗ ' + f).join('\n') : '✓ 0 DYR DAG, 0 BILLIG DAG, 0 PLATT STEG');
process.exit(flaggor.length ? 1 : 0);
