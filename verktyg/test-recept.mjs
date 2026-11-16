// BP: varje nytt recept ska tjäna mer – minst ca 20 % mer kr/s än det förra och minst lika mycket kr per rulle (inom samma plast).
// Kör: node verktyg/test-recept.mjs   (läser spel/printa-hem/balans.js)
import { VARA_SIFFROR as V } from '../spel/printa-hem/balans.js';
const ORDNING = ['nyckelring', 'mobilstall', 'kruka', 'pall', 'fagelholk', 'lampskarm', 'dronare', 'n2_vas', 'n2_hjalm', 'skateboard', 'n2_neon', 'gitarr', 'n2_paddel', 'cykelram', 'pkajak'];
const MAL = [3.8, 5, 6, 8.5, 10.5, 12.5, 15, 18, 22, 26, 31, 37, 46, 55, 75];
let fel = 0, forraKrs = 0; const forraKrG = {};
for (const [i, id] of ORDNING.entries()) {
  const v = V[id]; if (!v) { console.log('✗ saknas:', id); fel++; continue; }
  const krs = v.pris / v.tid, krg = v.pris / v.gram, plast = id.startsWith('n2_') ? 'PETG' : 'PLA';
  const rad = `${id.padEnd(11)} ${krs.toFixed(1).padStart(5)} kr/s (mål ${MAL[i]})  ${(krg * 1000).toFixed(0).padStart(5)} kr/kg ${plast}  betalar sig efter ${v.recept ? (v.recept / v.pris).toFixed(1) : 0} st`;
  const varn = [];
  if (forraKrs && krs < forraKrs * 1.15) varn.push(`tjänar för lite mer än förra (${forraKrs.toFixed(1)} kr/s)`);
  if (forraKrG[plast] && krg < forraKrG[plast]) varn.push('mindre per rulle än förra receptet i samma plast');
  if (krs < MAL[i] * 0.97) varn.push('under målet');
  if (v.recept && v.recept / v.pris > 6) varn.push('tar för lång tid att betala sig');
  console.log(varn.length ? '✗' : '✓', rad, varn.join(' · ')); fel += varn.length ? 1 : 0;
  forraKrs = krs; forraKrG[plast] = krg;
}
process.exit(fel ? 1 : 0);
