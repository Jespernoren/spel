// A-076 tillägg 11:35: kanNu – printmenyn öppnas inte utan ström eller filament, i stället skälet med bild och röst och vägen dit.
// Kör: node verktyg/test-a076c.mjs [url]  → skärmdumpar i verktyg/a076/kannu-*.png
import fs from 'node:fs';
import { chromium } from '/home/claude/verktyg/node_modules/playwright-core/index.mjs';
const url = process.argv[2] || 'http://127.0.0.1:8765/printa-hem.html';
const dir = new URL('./a076/', import.meta.url).pathname; fs.mkdirSync(dir, { recursive: true });
const ut = [];
const b = await chromium.launch({ executablePath: '/usr/bin/google-chrome', args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--autoplay-policy=no-user-gesture-required'] });
const p = await (await b.newContext({ viewport: { width: 1280, height: 720 } })).newPage(); const fel = [];
p.on('pageerror', (e) => fel.push(e.message));
await p.addInitScript(() => { if (!sessionStorage.getItem('a076c')) { sessionStorage.setItem('a076c', 1); localStorage.clear(); localStorage.setItem('spar:printahem2:v1', JSON.stringify({ spelarNamn: 'Test' })); } });
await p.goto(url); await p.waitForTimeout(5000);
const H = (f, a) => p.evaluate(f, a);
await p.waitForFunction(() => window.__startaSpel && document.querySelector('.br-starta'), null, { timeout: 8000 }).then(() => p.evaluate(() => window.__startaSpel())); await p.waitForTimeout(2500); await p.keyboard.press('Enter'); await p.waitForTimeout(12000);
for (let i = 0; i < 60 && (await p.evaluate(() => !!document.querySelector('.ph-dagnotis') || window.__printahem.pratar())); i++) await p.waitForTimeout(500);   // som en spelare: dagboksnotisen och första tanken är klara
await H(() => { const P = window.__printahem; P.S.skrivareLastad = P.S.skrivareStar = true; P.S.stromHjalp = false; P.S.strom = 0; P.S.steg = P.STEG.findIndex((x) => x.id === 'strom'); P.ritaStart(); });
await p.waitForTimeout(1500);
const meny = () => H(() => !window.__printahem.ui.butiksOverlay.hidden || !window.__printahem.ui.overlay.hidden);
const g1 = () => 'window.__printahem.skrivare.find((x) => x.id === "g1")';
// 1. utan ström
const t0 = await H(() => window.__printahem.textLogg().length);
await H(() => window.__printahem.oppnaPrintMeny(window.__printahem.skrivare.find((x) => x.id === 'g1')));
for (let i = 0; i < 100 && !(await H(() => [...document.querySelectorAll('.ph-notis')].some((n) => /ingen ström/.test(n.textContent) && n.querySelector('.ph-notis-bild img')))); i++) await p.waitForTimeout(250);
const r1 = await H((t0) => { const P = window.__printahem; return { meny: !P.ui.butiksOverlay.hidden, tanke: P.textLogg().slice(t0).some((e) => /ingen ström/.test(e.text)), hjalp: !!P.S.stromHjalp, kontur: P.konturMal()?.[0] || '', bild: !!document.querySelector('.ph-notis .ph-notis-bild img'), pek: P.skrivarText(P.skrivare.find((x) => x.id === 'g1')), dt: (() => { const L = P.textLogg().filter((e) => /ingen ström/.test(e.text)); const a = L.find((e) => e.kalla === 'tanke'), n = L.find((e) => e.kalla === 'notis'); return a && n ? (n.t - a.t) / 1000 : 99; })() }; }, t0);
await p.screenshot({ path: dir + 'kannu-ingen-strom.png' });
ut.push([`utan ström: ingen meny (${!r1.meny}), tanken "Den har ingen ström." (${r1.tanke}) med bild (${r1.bild}) efter ${r1.dt.toFixed(1)} s, konturerna (${r1.kontur}), pekrutan: "${r1.pek}"`, !r1.meny && r1.tanke && r1.hjalp && r1.bild && r1.dt <= 2 && /ingen ström/.test(r1.pek)]);
// 2. med ström
await H(() => { const P = window.__printahem; P.S.cykelOmbyggd = true; P.S.strom = 100; P.oppnaPrintMeny(P.skrivare.find((x) => x.id === 'g1')); });
await p.waitForTimeout(1500); const r2 = await meny();
await p.screenshot({ path: dir + 'kannu-med-strom.png' });
ut.push([`med ström: printmenyn öppnas (${r2})`, r2]);
await H(() => window.__printahem.ui.stangButik()); await p.waitForTimeout(800);
// 3. utan filament, kvarnen står
const t1 = await H(() => window.__printahem.textLogg().length);
await H(() => { const P = window.__printahem, g = P.skrivare.find((x) => x.id === 'g1'); g.fil = 0; P.S.kvarnKopt = P.S.kvarnStar = true; P.S.kvarn.ut = 0; P.ritaStart(); P.oppnaPrintMeny(g); });
await p.waitForTimeout(2500);
const r3 = await H((t1) => { const P = window.__printahem; return { meny: !P.ui.butiksOverlay.hidden, tanke: P.textLogg().slice(t1).filter((e) => e.vem === 'du').map((e) => e.text) }; }, t1);
await p.screenshot({ path: dir + 'kannu-ingen-trad.png' });
ut.push([`utan filament: ingen meny (${!r3.meny}), skälet: ${r3.tanke.join(' / ')}`, !r3.meny && r3.tanke.some((t) => /Tornet är tomt/.test(t))]);
// 4. säljlådan utan något att sälja
const r4 = await H(() => { const P = window.__printahem; P.oppnaSaljlada(); return !P.ui.butiksOverlay.hidden || !P.ui.overlay.hidden; });
ut.push([`säljlådan utan något att sälja öppnas inte (${!r4})`, !r4]);
// 5. regelvakten
const r5 = await H(() => window.__printahem.kanNu('printa', { sk: window.__printahem.skrivare.find((x) => x.id === 'g1') }));
ut.push([`kanNu svarar nej med skäl och väg: ${r5.skal}`, r5.ja === false && !!r5.skal]);
for (const [t, ok] of ut) console.log(ok ? '✓' : '✗', t);
console.log(fel.length ? 'sidfel: ' + fel.slice(0, 3).join(' · ') : 'inga sidfel'); await b.close(); process.exit(ut.every((x) => x[1]) && !fel.length ? 0 : 1);
