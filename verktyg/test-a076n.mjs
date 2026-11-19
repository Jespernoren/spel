// Inkorg 10b (Jesper 18:28): en enda hammare, och den går att svinga. Kör: node verktyg/test-a076n.mjs [url] → verktyg/a076/n-*.png
// ta hammaren från brädorna → rulla till den → klick i luften (ett slag, damm, exakt en hammare) → klick på brädorna (skylten spikas, exakt en hammare mitt i slaget)
import fs from 'node:fs';
import { chromium } from '/home/claude/verktyg/node_modules/playwright-core/index.mjs';
const url = process.argv[2] || 'http://127.0.0.1:8765/printa-hem.html';
const dir = new URL('./a076/', import.meta.url).pathname; fs.mkdirSync(dir, { recursive: true });
const ut = [], fel = [];
const b = await chromium.launch({ executablePath: '/usr/bin/google-chrome', args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--autoplay-policy=no-user-gesture-required'] });
const p = await (await b.newContext({ viewport: { width: 1280, height: 720 } })).newPage();
p.on('pageerror', (e) => fel.push(e.message));
await p.addInitScript(() => { window.__brott = []; window.__textLogg = (k, v, t) => { if (k === 'brott') window.__brott.push(v + ' ' + t); }; if (!sessionStorage.getItem('a076n')) { sessionStorage.setItem('a076n', 1); localStorage.clear(); localStorage.setItem('spar:printahem2:v1', JSON.stringify({ spelarNamn: 'Test', introSett: true })); } });
await p.goto(url);
await p.waitForFunction(() => window.__startaSpel && document.querySelector('.br-starta'), null, { timeout: 15000 }); await p.evaluate(() => window.__startaSpel()); await p.waitForTimeout(2500);
const H = (f, a) => p.evaluate(f, a);
for (let i = 0; i < 20; i++) { if (await H(() => !!document.querySelector('.ph-med:not([hidden]) .ph-dagbokkort'))) await p.keyboard.press('Enter'); await p.waitForTimeout(400); }
const hammareIBild = () => H(() => { const P = window.__printahem; let n = 0; P.kamera.traverse((o) => { if (o.userData?.iHanden === 'hammare') { let syns = true; for (let x = o; x; x = x.parent) if (!x.visible) syns = false; if (syns) n++; } }); return n; });
// ta hammaren och rulla till den
await H(() => { const P = window.__printahem; P.hammarPaBrador.userData.interaktion.aktivera(); });
await p.waitForTimeout(600);
await H(() => { const P = window.__printahem; P.byt(P.S.hotbar.findIndex((x) => x?.typ === 'hammare')); });
await p.waitForTimeout(600);
const i0 = await H(() => window.__printahem.valdTyp());
ut.push([`hammaren tagen och vald (${i0})`, i0 === 'hammare']);
// klick i luften
await H(() => { const P = window.__printahem; P.spelare.pitch = 0.9; });
await p.waitForTimeout(400);
const l0 = await H(() => window.__printahem.textLogg().length);
await H(() => { window.__maxV = 0; const t0 = performance.now(); const f = () => { window.__maxV = Math.max(window.__maxV, Math.abs(window.__printahem.foremal.rotation.x)); if (performance.now() - t0 < 1200) requestAnimationFrame(f); }; f(); window.__printahem.ui.o.onAnvand(true); window.__printahem.ui.o.onAnvand(false); });
await p.waitForTimeout(170);
const n1 = await hammareIBild();
await p.screenshot({ path: dir + 'n-slag-i-luften.png' });
await p.waitForTimeout(1200); const vinkel1 = await H(() => window.__maxV);
const s1 = await H((l0) => window.__printahem.textLogg().slice(l0).some((e) => /slag i luften|slag för skojs skull/.test(e.text)), l0);
ut.push([`klick i luften: ett slag (${s1}), hammaren rör sig (största vinkel ${vinkel1.toFixed(2)}), ${n1} hammare i bild`, s1 && vinkel1 > 0.3 && n1 === 1]);
// klick på brädorna: skylten spikas
await H(() => { const P = window.__printahem, v = P.bradhog.getWorldPosition(P.spelare.pos.clone()); P.spelare.pos.set(v.x + 1.6, P.spelare.pos.y, v.z + 1.6); P.spelare.yaw = Math.atan2(1.6, 1.6); P.spelare.pitch = -0.45; });
await p.waitForTimeout(600);
await H(() => window.__printahem.bradhog.userData.interaktion.aktivera());
await p.waitForTimeout(250);
const n2 = await hammareIBild(); const vinkel2 = await H(() => window.__printahem.foremal.rotation.x);
await H(() => { const f = performance.now(); window.__nu0 = performance.now.bind(performance); performance.now = () => f; });   /* fryser slaget (spikningen räknas i performance.now) så att skärmdumpen hinner tas mitt i */
await p.screenshot({ path: dir + 'n-mitt-i-spikningen.png' });
await H(() => { const d = window.__nu0() - performance.now(); performance.now = () => window.__nu0() - d; });
let skylt = false; for (let i = 0; i < 20 && !skylt; i++) { await p.waitForTimeout(400); skylt = await H(() => !!window.__printahem.S.skyltUppe); }
const efter = await H(() => ({ vald: window.__printahem.valdTyp(), vinkel: window.__printahem.foremal.rotation.x }));
ut.push([`klick på brädorna: ${n2} hammare mitt i slaget (vinkel ${vinkel2.toFixed(2)}), skylten spikad (${skylt}), hammaren kvar i handen efteråt (${efter.vald}, vinkel ${efter.vinkel.toFixed(2)})`, n2 === 1 && skylt && efter.vald === 'hammare' && Math.abs(efter.vinkel) < 0.01]);
const brott = await H(() => window.__brott.filter((x) => x.startsWith('DUBBLETT I HANDEN')));
ut.push([`0 DUBBLETT I HANDEN (${brott.join(' · ') || 'inga'})`, !brott.length]);
ut.push([`0 sidfel (${fel.join(' · ') || 'inga'})`, !fel.length]);
for (const [t, ok] of ut) console.log(`${ok ? '✓' : '✗'} ${t}`);
await b.close();
process.exit(ut.every(([, ok]) => ok) ? 0 : 1);
