// inkorg 38 (A-097): Inställningar → Ljud och röst har fyra PÅ/AV-rader i stället för reglage. Valet sparas, och en gammal volym över 0 blir PÅ.
// Kör: node verktyg/test-a097.mjs [url] → verktyg/a097/
import fs from 'node:fs';
import { chromium } from '/home/claude/verktyg/node_modules/playwright-core/index.mjs';
const url = process.argv[2] || 'http://127.0.0.1:8765/printa-hem.html';
const dir = new URL('./a097/', import.meta.url).pathname; fs.mkdirSync(dir, { recursive: true });
const b = await chromium.launch({ executablePath: '/usr/bin/google-chrome', args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--autoplay-policy=no-user-gesture-required'] });
const p = await (await b.newContext({ viewport: { width: 1280, height: 800 } })).newPage(); const fel = []; p.on('pageerror', (e) => fel.push(e.message));
await p.addInitScript(() => { if (!sessionStorage.getItem('f')) { sessionStorage.setItem('f', 1); localStorage.clear(); localStorage.setItem('spar:printahem2:v1', JSON.stringify({ introSett: true, vol: { musik: 0.4, rost: 0, berattare: 0.2, effekt: 1 } })); } });
await p.goto(url); await p.waitForTimeout(5000);
const H = (f, a) => p.evaluate(f, a); const ut = [];
const oppna = async () => { await H(() => document.querySelector('[data-sida="installningar"]').click()); await p.waitForTimeout(400); };
const lage = () => H(() => Object.fromEntries([...document.querySelectorAll('[data-volbryt]')].map((k) => [k.dataset.volbryt, k.querySelector('em').textContent])));
await oppna();
const l0 = await lage(); await p.screenshot({ path: dir + 'ljud-och-rost.png' });
ut.push([`gammal sparfil: 0,4 → PÅ, 0 → AV, 0,2 → PÅ (${JSON.stringify(l0)})`, l0.musik === 'PÅ' && l0.rost === 'AV' && l0.berattare === 'PÅ' && l0.effekt === 'PÅ']);
ut.push(['inga reglage kvar', await H(() => !document.querySelector('.br3-kropp input[type=range], .br-ljudpop input[type=range]'))]);
const ryms = await H(() => { const r = document.querySelector('.br3-kropp').getBoundingClientRect(); return r.bottom <= innerHeight && document.querySelectorAll('[data-volbryt]').length === 4 && document.querySelectorAll('[data-bryt]').length === 2 && !!document.querySelector('[data-talfart]'); });
ut.push(['fyra ljud + två brytare + talhastigheten ryms i rutan', ryms]);
await p.click('[data-volbryt="musik"]'); await p.click('[data-volbryt="rost"]'); await p.waitForTimeout(300);
const l1 = await lage(); ut.push([`klick: musiken AV, rösterna PÅ (${JSON.stringify(l1)})`, l1.musik === 'AV' && l1.rost === 'PÅ']);
await H(() => window.__printahem.spar.spara(true)); await p.reload(); await p.waitForTimeout(5000); await oppna();
const l2 = await lage(); const v = await H(() => ['musik', 'rost', 'berattare', 'effekt'].map((k) => window.__printahem.volym(k)));
ut.push([`efter omladdning: ${JSON.stringify(l2)} · volym ${v}`, l2.musik === 'AV' && l2.rost === 'PÅ' && v.join() === '0,1,1,1']);
ut.push(['0 sidfel', fel.length === 0, fel.slice(0, 2).join(' | ')]);
for (const [t, ok, x] of ut) console.log(`${ok ? '✓' : '✗'} ${t} ${x || ''}`);
await b.close(); process.exit(ut.every((x) => x[1]) ? 0 : 1);
