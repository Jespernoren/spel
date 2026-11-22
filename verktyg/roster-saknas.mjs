// inkorg 71/65: vilka repliker saknar Piper-klipp? Skriver en manusfil för verktyg/roster.py med bara det som saknas.
// Tar med (1) röstmanuset i spelet (rostManus) och (2) alla fasta info-texter i spel.js (regi.info('…')), som sedan inkorg 65 p.1
// läses upp med din röst. Kör sedan roster.py och roster-lagg-till.py:
//   node verktyg/roster-saknas.mjs <url> /tmp/saknas.json
//   python3 verktyg/roster.py /tmp/saknas.json /home/claude/roster/modell /home/claude/roster/ny
//   python3 verktyg/roster-lagg-till.py /home/claude/roster/ny/pack <namn> spel/printa-hem/roster /home/claude/ut/roster
import fs from 'node:fs';
import { chromium } from '/home/claude/verktyg/node_modules/playwright-core/index.mjs';
const [url = 'http://127.0.0.1:8765/printa-hem.html', ut = '/tmp/saknas.json'] = process.argv.slice(2);
const src = fs.readFileSync(new URL('../spel/printa-hem/spel.js', import.meta.url), 'utf8');
const info = [];
for (const m of src.matchAll(/regi\.info\((['"])((?:\\.|(?!\1)[^\\])*)\1\s*,\s*'(\w*)'/g)) if (m[3] !== 'fel' || true) info.push(m[2].replace(/\\(['"])/g, '$1'));
const b = await chromium.launch({ executablePath: '/usr/bin/google-chrome', args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader'] });
const p = await b.newPage(); await p.goto(url); await p.waitForTimeout(6000);
const rader = await p.evaluate((info) => {
  const h = window.__printahem, F = ['rolf', 'ali', 'pappa', 'bror', 'chefen', 'du', 'mamma', 'berattare', 'helen', 'bengt'], sett = new Set(), ut = [];
  const ren = (t) => String(t).replace(/^[\p{Extended_Pictographic}️‍\s]+/u, '').trim();
  const lista = [...h.rostManus(), ...info.map((t) => ['du', ren(t)])];
  for (const [v, t] of lista) { if (!/[\p{L}]/u.test(t)) continue; const f = F.includes(v) ? v : 'berattare', k = f + '-' + h.rostNyckel(t); if (sett.has(k)) continue; sett.add(k); if (!h.rostKlippFinns(f, t)) ut.push([f, t]); }
  return ut;
}, info);
await b.close();
fs.writeFileSync(ut, JSON.stringify(rader));
const per = {}; for (const [f] of rader) per[f] = (per[f] || 0) + 1;
console.log(`${rader.length} repliker utan klipp`, JSON.stringify(per), '→', ut);
