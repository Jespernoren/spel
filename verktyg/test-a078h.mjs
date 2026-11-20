// Inkorg 19.2: ruta 10 har två klipp. "Jag packar ryggan …" visar v5pack10g (generatorn och hammaren ner i ryggsäcken),
// "Och surrar fast …" visar v5pack10a–c som förut. Kör: node verktyg/test-a078h.mjs <url>
import { chromium } from '/home/claude/verktyg/node_modules/playwright-core/index.mjs';
const url = process.argv[2] || 'http://127.0.0.1:8765/printa-hem.html';
const dir = new URL('./a078/', import.meta.url).pathname;
const b = await chromium.launch({ executablePath: '/usr/bin/google-chrome', args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--autoplay-policy=no-user-gesture-required'] });
const p = await (await b.newContext({ viewport: { width: 1280, height: 800 } })).newPage(); const fel = [];
p.on('pageerror', (e) => fel.push(e.message));
await p.addInitScript(() => localStorage.setItem('spar:printahem2:v1', JSON.stringify({ spelarNamn: 'Test' })));
await p.goto(url); await p.waitForTimeout(4000); await p.evaluate(() => window.__printahem.visaIntroDirekt());
const synliga = () => p.evaluate(() => [...document.querySelectorAll('img.ph-il')].filter((e) => /v5pack10/.test(e.src) && +getComputedStyle(e).opacity > 0.5).map((e) => e.src.match(/v5pack10\w/)[0]));
const ut = [];
await p.waitForFunction(() => /Jag packar ryggan/.test(document.querySelector('.ph-intro-ord')?.textContent || ''), null, { timeout: 300000, polling: 30 });
await p.waitForTimeout(900); const f1 = await synliga(); await p.screenshot({ path: `${dir}ruta10-klipp1.png` });
ut.push(['"Jag packar ryggan …" → bara v5pack10g', f1.join(',') === 'v5pack10g', f1.join(',')]);
await p.waitForFunction(() => /Och surrar fast/.test(document.querySelector('.ph-intro-ord')?.textContent || ''), null, { timeout: 30000, polling: 30 });
const t0 = Date.now(), steg = [];
for (const [ms, n] of [[300, 'a'], [1300, 'b'], [2600, 'c']]) { while (Date.now() - t0 < ms) await p.waitForTimeout(20); const s = await synliga(); steg.push(s.filter((x) => x !== 'v5pack10g').pop() || '-'); await p.screenshot({ path: `${dir}ruta10-klipp2${n}.png` }); }
ut.push(['"Och surrar fast …" → v5pack10a, b, c i tur och ordning', steg.join(',') === 'v5pack10a,v5pack10b,v5pack10c', steg.join(',')]);
ut.push(['0 sidfel', fel.length === 0, fel.slice(0, 2).join(' | ')]);
for (const [t, ok, x] of ut) console.log(`${ok ? '✓' : '✗'} ${t} ${x || ''}`);
await b.close();
