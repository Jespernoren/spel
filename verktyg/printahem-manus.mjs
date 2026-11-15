// hela röstmanuset: rostManus() + alla sms('x', '...')-literaler i koden (Rolfs med dialekt)
import { chromium } from '/home/claude/verktyg/node_modules/playwright-core/index.mjs';
import fs from 'fs';
const src = fs.readFileSync('/home/claude/jespernoren/spel/spel/printa-hem/spel.js', 'utf8');
const lit = [];
// var i koden ligger en replik: närmaste funktion eller konstant ovanför
const varFor = (idx) => { const fore = src.slice(0, idx), m = [...fore.matchAll(/^(?:function (\w+)|const (\w+) = )/gm)].pop(); return m ? (m[1] || m[2]) : '?'; };
for (const m of src.matchAll(/sms\('(\w+)',\s*'((?:[^'\\]|\\.)*)'/g)) lit.push([m[1], m[2].replace(/\\'/g, "'"), 'Sms i ' + varFor(m.index)]);
for (const m of src.matchAll(/aliSenare\('((?:[^'\\]|\\.)*)'/g)) lit.push(['ali', m[1].replace(/\\'/g, "'"), 'Ali i ' + varFor(m.index)]);
for (const name of ['MAMMA_BURK_ARG', 'LADAN_SMS']) {
  const i = src.indexOf('const ' + name), j = src.indexOf('];', i);
  for (const m of src.slice(i, j).matchAll(/'((?:[^'\\]|\\.)*)'/g)) lit.push([name === 'LADAN_SMS' ? 'rolf' : 'mamma', m[1], name === 'LADAN_SMS' ? 'Rolfs sms om säljlådan' : 'Mammas sms när du maler burkar']);
}
// tabeller som heter *_REPLIK: ['figur', 'text'] (fas 2: skylten, Göran, N. …)
for (const t of src.matchAll(/const (\w+_REPLIK) = [\[{]/g)) { const i = t.index, j = src.indexOf('\n};', i) > 0 && src.indexOf('\n};', i) < src.indexOf('\n];', i) || src.indexOf('\n];', i) < 0 ? src.indexOf('\n};', i) : src.indexOf('\n];', i); for (const m of src.slice(i, j).matchAll(/\['(\w+)',\s*'((?:[^'\\]|\\.)*)'/g)) lit.push([m[1], m[2].replace(/\\'/g, "'"), t[1]]); }
{ const i = src.indexOf('const ROLF_MARK'), j = src.indexOf('};', i); for (const m of src.slice(i, j).matchAll(/: '((?:[^'\\]|\\.)*)'/g)) lit.push(['rolf', m[1], 'Rolfs sms om marken']); }
const b = await chromium.launch({ executablePath: '/usr/bin/google-chrome', args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader'] });
const p = await b.newPage();
await p.goto('http://127.0.0.1:8765/printa-hem.html'); await p.waitForTimeout(2000);
const [L, D] = await p.evaluate((lit) => {
  const h = window.__printahem, ut = h.rostManus(), D = h.rostManusDetalj(), har = new Set(ut.map((x) => x.join('|')));
  for (const [v, t, var_] of lit) {
    if (!['mamma', 'bror', 'rolf', 'ali', 'chefen', 'pappa'].includes(v) || !/[\p{L}]/u.test(t)) continue;
    const varianter = v === 'rolf' ? [h.rolfDialekt(t, true), h.rolfDialekt(t, false)].map((x) => x.replace('\u200b', '')) : [t];
    for (const x of varianter) if (!har.has(v + '|' + x)) { har.add(v + '|' + x); ut.push([v, x]); D.push([v, x, t, var_]); }
  }
  // ett objekt per röstklipp: id = samma nyckel som spelet slår upp (figur-hash av den visade texten)
  const sedda = new Set(), rader = [];
  for (const [figur, text, kalla, var_] of D) {
    const f = ['rolf', 'ali', 'pappa', 'bror', 'chefen', 'du', 'mamma', 'berattare'].includes(figur) ? figur : 'berattare', id = f + '-' + h.rostNyckel(text);
    if (sedda.has(id) || !/[\p{L}]/u.test(text)) continue; sedda.add(id);
    rader.push({ id, figur: f, text, ...(kalla !== text ? { kalla } : {}), var: var_ });
  }
  return [ut, rader];
}, lit);
fs.writeFileSync('/home/claude/roster/manus.json', JSON.stringify(L));
// till planeringschatten: alla repliker (figur, visad text, källtext före rolfDialekt, var de hörs) – taggas i verktyg/roster-taggar.json
fs.writeFileSync('/home/claude/jespernoren/spel/verktyg/roster-manus.json', JSON.stringify(D, null, 1));
console.log(L.length, 'rader i manus,', D.length, 'röstklipp i roster-manus.json'); await b.close();
