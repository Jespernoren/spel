// inkorg 50 (A-105) p.3 och p.6: en replik visas på ett ställe (bubblan när figuren syns, annars notisen),
// och en ruta med text står minst 2 s + 60 ms per tecken – en ny notis knuffar inte bort en som inte hunnit läsas (FÖR KORT).
import fs from 'node:fs';
import { chromium } from '/home/claude/verktyg/node_modules/playwright-core/index.mjs';
const url = process.argv[2] || 'http://127.0.0.1:8765/ax2.html';
const b = await chromium.launch({ executablePath: '/usr/bin/google-chrome', args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader'] });
const p = await b.newPage({ viewport: { width: 1280, height: 720 } }); const fel = []; p.on('pageerror', (e) => fel.push(e.message));
const spar = fs.readFileSync(new URL('./sparfiler/bot-dag14.json', import.meta.url), 'utf8');
await p.addInitScript((spar) => { if (!sessionStorage.getItem('t')) { sessionStorage.setItem('t', 1); localStorage.clear(); localStorage.setItem('spar:printahem2:v1', spar); } }, spar);
await p.goto(url); await p.waitForTimeout(4000);
await p.waitForFunction(() => window.__startaSpel && document.querySelector('.br-starta'), null, { timeout: 8000 }).then(() => p.evaluate(() => window.__startaSpel())).catch(() => {});
await p.waitForTimeout(2500); for (let i = 0; i < 6; i++) { await p.keyboard.press('Enter'); await p.waitForTimeout(250); } await p.waitForTimeout(2000);
const ut = []; const ok = (v, t) => ut.push(`${v ? '✓' : '✗'} ${t}`);

// p.3: figuren i bild → bara bubblan; utom bild → bara notisen
const replik = async (iBild, text) => p.evaluate(async ([iBild, text]) => {
  const P = window.__printahem, f = P.bengtFig, k = P.kamera, w = (ms) => new Promise((r) => setTimeout(r, ms));
  const fram = new k.position.constructor(); k.getWorldDirection(fram);
  f.visible = true; f.position.set(k.position.x + fram.x * (iBild ? 4 : -6), 0, k.position.z + fram.z * (iBild ? 4 : -6)); f.updateMatrixWorld(true);
  P.paket([{ replik: ['bengt', text, 'Bengt-Åke: ' + text], fore: () => P.varldsBubbla(f, text, 4, 2.3, 'arg') }], { vikt: 'STORY', varfor: 'test-a105' });
  for (let i = 0; i < 40; i++) { await w(250); const bub = [...document.querySelectorAll('.ph-vbubbla')].some((e) => e.textContent.includes(text)), no = [...document.querySelectorAll('.ph-notis')].some((e) => e.textContent.includes(text)); if (bub || no) { await w(600); return { bub: [...document.querySelectorAll('.ph-vbubbla')].some((e) => e.textContent.includes(text)), no: [...document.querySelectorAll('.ph-notis')].some((e) => e.textContent.includes(text)) }; } }
  return { bub: false, no: false };
}, [iBild, text]);
const r1 = await replik(true, 'Pappas. Han hade velat att nån använde den.');
ok(r1.bub && !r1.no, `Bengt-Åke i bild: bubblan ${r1.bub}, notisen ${r1.no}`);
await p.waitForTimeout(6000);
const r2 = await replik(false, 'Gruvan är min. Pappas gruva. Rör den inte.');
ok(!r2.bub && r2.no, `Bengt-Åke utom bild: bubblan ${r2.bub}, notisen ${r2.no}`);
await p.waitForTimeout(9000);

// p.6: två notiser direkt efter varandra – den första står kvar sin läsbara tid
const r3 = await p.evaluate(async () => {
  const P = window.__printahem, w = (ms) => new Promise((r) => setTimeout(r, ms)), t1 = 'Marken runt tippen är min nu. Gärdesgården har flyttats ut mot vägen.', t2 = 'Skylten vid vägen fick en ny färg.';
  const brott0 = (P.textLogg?.() || []).length;
  P.regi.info(t1, 'guld', { alltid: true }); await w(400); P.regi.info(t2, 'guld', { alltid: true }); const t0 = performance.now();
  let forsta = -1; for (let i = 0; i < 60; i++) { await w(200); const syns = [...document.querySelectorAll('.ph-notis:not(.ut), .fp-toast.syns')].some((e) => e.textContent.includes(t1.slice(0, 30))); if (!syns && forsta < 0) { forsta = performance.now() - t0 + 400; break; } }
  const kort = (P.textLogg?.() || []).slice(brott0).filter((x) => /FÖR KORT/.test(JSON.stringify(x))).length;
  return { stod: Math.round(forsta), behov: 2000 + 60 * t1.length, kort };
});
ok(r3.stod >= r3.behov - 300, `första notisen stod ${(r3.stod / 1000).toFixed(1)} s (behöver ${(r3.behov / 1000).toFixed(1)} s)`);
ok(r3.kort === 0, `0 FÖR KORT (${r3.kort})`);
ok(!fel.length, `0 sidfel (${fel.join(' · ') || 'inga'})`);
console.log(ut.join('\n')); await b.close(); process.exit(ut.some((x) => x.startsWith('✗')) ? 1 : 0);
