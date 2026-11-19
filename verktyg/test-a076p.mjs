// Inkorg 10e (Jesper 18:30): en statusetikett per sak – utan ström syns bara INGEN STRÖM. Kör: node verktyg/test-a076p.mjs [url] → verktyg/a076/p-*.png
import fs from 'node:fs';
import { chromium } from '/home/claude/verktyg/node_modules/playwright-core/index.mjs';
const url = process.argv[2] || 'http://127.0.0.1:8765/printa-hem.html';
const dir = new URL('./a076/', import.meta.url).pathname; fs.mkdirSync(dir, { recursive: true });
const ut = [], fel = [];
const b = await chromium.launch({ executablePath: '/usr/bin/google-chrome', args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader'] });
const p = await (await b.newContext({ viewport: { width: 1280, height: 800 } })).newPage();
p.on('pageerror', (e) => fel.push(e.message));
await p.addInitScript(() => { window.__brott = []; window.__textLogg = (k, v, t) => { if (k === 'brott') window.__brott.push(v + ' ' + t); }; if (!sessionStorage.getItem('a076p')) { sessionStorage.setItem('a076p', 1); localStorage.clear(); localStorage.setItem('printa-hem:vridKamera', 'av'); localStorage.setItem('spar:printahem2:v1', JSON.stringify({ spelarNamn: 'Test', introSett: true, skyltUppe: true })); } });
await p.goto(url);
await p.waitForFunction(() => window.__startaSpel, null, { timeout: 15000 }); await p.evaluate(() => window.__startaSpel()); await p.waitForTimeout(2500);
const H = (f, a) => p.evaluate(f, a);
for (let i = 0; i < 12; i++) { if (await H(() => !!document.querySelector('.ph-med:not([hidden]) .ph-dagbokkort'))) await p.keyboard.press('Enter'); await p.waitForTimeout(400); }
await H(() => { const P = window.__printahem, S = P.S; S.skrivareLastad = S.skrivareStar = S.cykelStar = S.generatorStar = S.cykelOmbyggd = true; S.stat.printat = 1; S.steg = P.STEG.findIndex((x) => x.id === 'trampa'); P.ritaStart(); });
await p.waitForTimeout(1500);
const sikta = () => H(() => { const P = window.__printahem, g1 = P.skrivare.find((x) => x.id === 'g1'); const v = g1.mesh.getWorldPosition(P.spelare.pos.clone()); P.spelare.pos.set(v.x + 2.2, P.spelare.pos.y, v.z + 2.2); P.spelare.yaw = Math.atan2(2.2, 2.2); P.spelare.pitch = -0.2; });
const etiketter = () => H(() => ({ skyltar: [...document.querySelectorAll('.hud-stopp')].filter((e) => e.style.display !== 'none' && e.getBoundingClientRect().width).map((e) => e.textContent.trim()), matare: [...document.querySelectorAll('.hud-skrivbar')].filter((e) => e.style.display !== 'none' && e.getBoundingClientRect().width).map((e) => e.textContent.trim()), pil: window.__printahem.malPil?.visible }));
// utan ström
await H(() => { const P = window.__printahem, g1 = P.skrivare.find((x) => x.id === 'g1'); g1.fil = 100; P.S.strom = 0; P.startaDirekt(g1, { typ: 'nyckelring' }); });
await sikta(); await p.waitForTimeout(3000); await sikta(); await p.waitForTimeout(800);
const e1 = await etiketter();
await p.screenshot({ path: dir + 'p-ingen-strom.png' });
const vidSkrivaren = e1.skyltar.filter((t) => /Ingen ström/i.test(t));
ut.push([`utan ström: skylten "${vidSkrivaren.join(' | ')}", ingen skrivarmätare (${e1.matare.length}), ingen pil över skrivaren (${!e1.pil})`, vidSkrivaren.length === 1 && e1.matare.length === 0 && !e1.pil]);
// med ström: skylten borta, mätaren tillbaka
await H(() => { const P = window.__printahem; P.S.strom = 100; });
for (let i = 0; i < 10; i++) { await H(() => { window.__printahem.S.strom = 100; }); await p.waitForTimeout(400); }
await sikta(); await p.waitForTimeout(800);
const e2 = await etiketter();
await p.screenshot({ path: dir + 'p-med-strom.png' });
ut.push([`med ström: ingen skylt om ström (${!e2.skyltar.some((t) => /ström/i.test(t))}), ingen "x s kvar"-etikett medan den printar (${e2.matare.length === 0})`, !e2.skyltar.some((t) => /ström/i.test(t)) && e2.matare.length === 0]);
const brott = await H(() => window.__brott.filter((x) => x.startsWith('ETIKETT PÅ ETIKETT')));
ut.push([`0 ETIKETT PÅ ETIKETT (${brott.join(' · ') || 'inga'})`, !brott.length]);
ut.push([`0 sidfel (${fel.join(' · ') || 'inga'})`, !fel.length]);
for (const [t, ok] of ut) console.log(`${ok ? '✓' : '✗'} ${t}`);
await b.close();
process.exit(ut.every(([, ok]) => ok) ? 0 : 1);
