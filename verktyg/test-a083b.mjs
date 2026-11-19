// A-083 tillägg 11:30: 🔊 överallt där text kan läsas upp. Tryck läser upp (pulserar), ett andra tryck stoppar. TEXT UTAN HÖGTALARE.
// Kör: node verktyg/test-a083b.mjs [url] → verktyg/a083/hogtalare-*.png
import fs from 'node:fs';
import { chromium } from '/home/claude/verktyg/node_modules/playwright-core/index.mjs';
const url = process.argv[2] || 'http://127.0.0.1:8765/printa-hem.html';
const dir = new URL('./a083/', import.meta.url).pathname; fs.mkdirSync(dir, { recursive: true });
const ut = [];
const b = await chromium.launch({ executablePath: '/usr/bin/google-chrome', args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--autoplay-policy=no-user-gesture-required'] });
const p = await (await b.newContext({ viewport: { width: 1280, height: 800 } })).newPage(); const fel = []; p.on('pageerror', (e) => fel.push(e.message));
await p.addInitScript(() => { if (!sessionStorage.getItem('f')) { sessionStorage.setItem('f', 1); localStorage.clear(); localStorage.setItem('spar:printahem2:v1', JSON.stringify({ spelarNamn: 'Test', introSett: true, lasUppForst: true })); } });
await p.goto(url); await p.waitForTimeout(5000); await p.click('.br-starta'); await p.waitForTimeout(2500);
const H = (f, a) => p.evaluate(f, a);
const finns = (sel) => H((s) => !!document.querySelector(s), sel);
// dagbokskortet
await p.waitForTimeout(800); const dk = await finns('.ph-dagbokkort .ph-lasupp'); await p.screenshot({ path: dir + 'hogtalare-dagbokskortet.png' });
await p.keyboard.press('Enter'); await p.waitForTimeout(2500);
// målrutan: tryck → pulserar, tryck igen → stoppar
const mr = await finns('.dn-uppg .ph-lasupp'); await p.screenshot({ path: dir + 'hogtalare-malrutan.png' });
await H(() => document.querySelector('.dn-uppg .ph-lasupp').click()); await p.waitForTimeout(300);
const p1 = await H(() => ({ puls: document.querySelector('.dn-uppg .ph-lasupp').classList.contains('pulsar'), last: window.__printahem.textLogg().filter((e) => e.kalla === 'läs upp').slice(-1)[0]?.text || '' }));
await H(() => document.querySelector('.dn-uppg .ph-lasupp').click()); await p.waitForTimeout(300);
const p2 = await H(() => document.querySelector('.dn-uppg .ph-lasupp').classList.contains('pulsar'));
ut.push([`målrutan har 🔊 (${mr}); tryck läser upp "${p1.last.slice(0, 50)}" och pulserar (${p1.puls}); andra trycket stoppar (${!p2})`, mr && p1.puls && !!p1.last && !p2]);
ut.push([`dagbokskortet har 🔊 (${dk})`, dk]);
// en notis (tanke)
await H(() => window.__printahem.visaNej?.({ skal: 'Jag behöver hammaren för att spika upp skylten.', bild: 'hammare' })); await p.waitForTimeout(1500);
const nt = await finns('.ph-notis .ph-lasupp'); await p.screenshot({ path: dir + 'hogtalare-notis.png' });
ut.push([`notisen/tanken har 🔊 (${nt})`, nt]);
// kontrollhjälpen
const kh = await finns('.ph-kontroll .ph-lasupp'); ut.push([`kontrollhjälpen har 🔊 (${kh})`, kh]);
// sms i telefonen
await H(() => { const P = window.__printahem; P.S.sms = [...(P.S.sms || []), { fran: 'bror', text: 'Mamma ringde mig fyra gånger förresten. Snyggt jobbat.', dag: 1 }]; P.oppnaInkorg?.(); }); await p.waitForTimeout(800);
const sm = await finns('.dn-tel .ph-lasupp'); await p.screenshot({ path: dir + 'hogtalare-sms.png' });
ut.push([`sms i telefonen har 🔊 (${sm})`, sm]);
const brott = await H(() => window.__printahem.textLogg().filter((e) => e.kalla === 'brott' && e.vem === 'TEXT UTAN HÖGTALARE').map((e) => e.text));
ut.push([`TEXT UTAN HÖGTALARE: ${brott.length} ${brott.slice(0, 2).join(' · ')}`, !brott.length]);
for (const [t, ok] of ut) console.log(ok ? '✓' : '✗', t);
console.log(fel.length ? 'sidfel: ' + fel.slice(0, 3).join(' · ') : 'inga sidfel'); await b.close(); process.exit(ut.every((x) => x[1]) && !fel.length ? 0 : 1);
