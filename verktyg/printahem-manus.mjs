// hela röstmanuset: rostManus() + alla sms('x', '...')-literaler i koden (Rolfs med dialekt)
import { chromium } from '/home/claude/verktyg/node_modules/playwright-core/index.mjs';
import fs from 'fs';
const src = fs.readFileSync('/home/claude/jespernoren/spel/spel/printa-hem/spel.js', 'utf8');
const lit = [];
for (const m of src.matchAll(/sms\('(\w+)',\s*'((?:[^'\\]|\\.)*)'/g)) lit.push([m[1], m[2].replace(/\\'/g, "'")]);
for (const m of src.matchAll(/aliSenare\('((?:[^'\\]|\\.)*)'/g)) lit.push(['ali', m[1].replace(/\\'/g, "'")]);
for (const name of ['MAMMA_BURK_ARG', 'LADAN_SMS']) {
  const i = src.indexOf('const ' + name), j = src.indexOf('];', i);
  for (const m of src.slice(i, j).matchAll(/'((?:[^'\\]|\\.)*)'/g)) lit.push([name === 'LADAN_SMS' ? 'rolf' : 'mamma', m[1]]);
}
{ const i = src.indexOf('const ROLF_MARK'), j = src.indexOf('};', i); for (const m of src.slice(i, j).matchAll(/: '((?:[^'\\]|\\.)*)'/g)) lit.push(['rolf', m[1]]); }
const b = await chromium.launch({ executablePath: '/usr/bin/google-chrome', args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader'] });
const p = await b.newPage();
await p.goto('http://127.0.0.1:8765/printa-hem.html'); await p.waitForTimeout(2000);
const L = await p.evaluate((lit) => {
  const h = window.__printahem, ut = h.rostManus(), har = new Set(ut.map((x) => x.join('|')));
  for (const [v, t] of lit) {
    if (!['mamma', 'bror', 'rolf', 'ali', 'chefen'].includes(v)) continue;
    const varianter = v === 'rolf' ? [h.rolfDialekt(t, true), h.rolfDialekt(t, false)].map((x) => x.replace('​', '')) : [t];
    for (const x of varianter) if (!har.has(v + '|' + x)) { har.add(v + '|' + x); ut.push([v, x]); }
  }
  return ut;
}, lit);
fs.writeFileSync('/home/claude/roster/manus.json', JSON.stringify(L));
console.log(L.length); await b.close();
