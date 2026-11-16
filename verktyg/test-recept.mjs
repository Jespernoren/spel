// BP + DL: inom en linje ska varje nytt recept tjäna minst ca 15 % mer kr/s än det förra.
// DL: varje linjes sämsta recept ska ge mer än förra linjens bästa – både kr/s (printtid) och kr/g. Recepten ska betala sig efter högst ca 6 sålda.
// Kör: node verktyg/test-recept.mjs   (läser spel/printa-hem/balans.js) – testet blir rött om en ändring bryter mot reglerna.
import { VARA_SIFFROR as V } from '../spel/printa-hem/balans.js';
const LINJER = [
  ['🔵 blå', ['nyckelring', 'mobilstall', 'kruka', 'pall', 'fagelholk', 'lampskarm', 'dronare', 'skateboard', 'gitarr', 'cykelram']],
  ['🔴 röd', ['n2_vas', 'n2_hjalm', 'n2_neon', 'n2_paddel']],
  ['⚫ kolfiber', ['n3_stol', 'pkajak']],
  ['🟡 guld', ['n4_staty']],
  ['✨ tippium', ['n5_drake']],
];
let fel = 0, forra = null;
for (const [namn, ids] of LINJER) {
  let forraKrs = 0; const krsL = [], krgL = [];
  console.log(namn);
  for (const id of ids) {
    const v = V[id]; if (!v) { console.log('  ✗ saknas:', id); fel++; continue; }
    const krs = v.pris / v.tid, krg = v.pris / v.gram, varn = [];
    if (forraKrs && krs < forraKrs * 1.15) varn.push(`tjänar för lite mer än förra (${forraKrs.toFixed(1)} kr/s)`);
    if (v.recept && v.recept / v.pris > 6) varn.push('tar för lång tid att betala sig');
    console.log(`  ${varn.length ? '✗' : '✓'} ${id.padEnd(11)} ${krs.toFixed(1).padStart(6)} kr/s ${krg.toFixed(2).padStart(5)} kr/g${v.recept ? `  betalar sig efter ${(v.recept / v.pris).toFixed(1)} st` : ''} ${varn.join(' · ')}`);
    fel += varn.length ? 1 : 0; forraKrs = krs; krsL.push(krs); krgL.push(krg);
  }
  const lag = { krs: Math.min(...krsL), krg: Math.min(...krgL) }, hog = { krs: Math.max(...krsL), krg: Math.max(...krgL) };
  if (forra) {
    const ok = lag.krs > forra.hog.krs && lag.krg > forra.hog.krg;
    console.log(`  ${ok ? '✓' : '✗'} sämsta ${lag.krs.toFixed(1)} kr/s · ${lag.krg.toFixed(2)} kr/g mot ${forra.namn}s bästa ${forra.hog.krs.toFixed(1)} kr/s · ${forra.hog.krg.toFixed(2)} kr/g`);
    if (!ok) fel++;
  }
  forra = { namn, hog };
}
process.exit(fel ? 1 : 0);
