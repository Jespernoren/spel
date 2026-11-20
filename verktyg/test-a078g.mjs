// Inkorg 19.1: mamma → råtta i lugnt tempo (som i d16c583), sedan "Ett hem?". Tre ögonblick från repliken "Ingen mamma som tjatar.":
// mamma-ritningen (+0,3 s), poffet (+1,6 s) och råttan ensam (+2,8 s). Kör: node verktyg/test-a078g.mjs <url> <namn>
import { chromium } from '/home/claude/verktyg/node_modules/playwright-core/index.mjs';
const url = process.argv[2] || 'http://127.0.0.1:8765/printa-hem.html', namn = process.argv[3] || 'nu';
const dir = new URL('./a078/', import.meta.url).pathname;
const b = await chromium.launch({ executablePath: '/usr/bin/google-chrome', args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--autoplay-policy=no-user-gesture-required'] });
const p = await (await b.newContext({ viewport: { width: 1280, height: 800 } })).newPage(); const fel = [];
p.on('pageerror', (e) => fel.push(e.message));
await p.addInitScript(() => localStorage.setItem('spar:printahem2:v1', JSON.stringify({ spelarNamn: 'Test' })));
await p.goto(url); await p.waitForTimeout(4000);
if (await p.evaluate(() => typeof window.__printahem?.visaIntroDirekt === 'function')) await p.evaluate(() => window.__printahem.visaIntroDirekt());
else { await p.evaluate(() => localStorage.clear()); await p.reload(); await p.waitForTimeout(4000); await p.click('text=Starta'); await p.waitForTimeout(800); await p.fill('input', 'Test'); await p.click('text=Kör!'); await p.waitForTimeout(1500); await p.mouse.click(640, 400); }   // äldre bygge: introt startas från startrutan
await p.waitForFunction(() => !!document.querySelector('.ph-il.poff'), null, { timeout: 420000, polling: 30 });   // mamma-ritningen dyker upp på "Ingen mamma som tjatar." (samma i båda byggena)
const t0 = Date.now(), ut = [];
for (const [ms, vad] of [[300, 'mamma'], [1600, 'poff'], [2800, 'ratta']]) { while (Date.now() - t0 < ms) await p.waitForTimeout(20); await p.screenshot({ path: `${dir}ratta-${namn}-${vad}.png` }); ut.push(vad); }
// hur länge råttan syns ensam innan "Tänk om det här …"
await p.waitForFunction(() => !!document.querySelector('.ph-il.hemsteg, .ph-il.zoomut, .ph-krita'), null, { timeout: 20000, polling: 30 });   // nästa bild ("Tänk om det här …")
console.log(`${namn}: mamma-ritningen → nästa bild ${((Date.now() - t0) / 1000).toFixed(1)} s · ${fel.length} sidfel`);
await b.close();
