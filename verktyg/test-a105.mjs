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
  f.visible = true; for (let o = f; o; o = o.parent) o.visible = true; const wp = k.position.clone().add(fram.clone().multiplyScalar(iBild ? 5 : -6)); wp.y = Math.max(0, Math.min(wp.y, k.position.y - 1.6)); f.parent?.updateMatrixWorld(true); if (f.parent) f.parent.worldToLocal(wp); f.position.copy(wp); f.updateMatrixWorld(true);   /* positionen i förälderns koordinater */
  P.paket([{ replik: ['bengt', text, 'Bengt-Åke: ' + text], fore: () => P.varldsBubbla(f, text, 4, 2.3, 'arg') }], { vikt: 'STORY', varfor: 'test-a105' });
  for (let i = 0; i < 40; i++) { await w(250); const bub = [...document.querySelectorAll('.ph-vbubbla')].some((e) => e.textContent.includes(text)), no = [...document.querySelectorAll('.ph-notis')].some((e) => e.textContent.includes(text)); if (bub || no) { await w(600); return { bub: [...document.querySelectorAll('.ph-vbubbla')].some((e) => e.textContent.includes(text)), no: [...document.querySelectorAll('.ph-notis')].some((e) => e.textContent.includes(text)) }; } }
  return { bub: false, no: false };
}, [iBild, text]);
await p.waitForTimeout(3000);
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

// p.2: pilen pekar dit klicket görs – källan när saken saknas, rätt brevlåda när du har saken
const r4 = await p.evaluate(() => {
  const P = window.__printahem, S = P.S, i18 = P.STEG.findIndex((x) => x.id === 'm18-mal-rulle-guld'), i16 = P.STEG.findIndex((x) => x.id === 'm16-lagg-flagan-bengt');
  const avst = (a, o) => a && o ? Math.hypot(a.x - o.getWorldPosition(a.clone()).x, a.z - o.getWorldPosition(a.clone()).z) : 999;
  const steg0 = S.steg, hb = JSON.stringify(S.hotbar), rs = JSON.stringify(S.ryggsack), ki = JSON.stringify(S.kistan); const ut = {};
  const tom = (typ) => { for (const L of [S.hotbar, S.ryggsack, S.kistan]) for (let i = 0; i < L.length; i++) if (L[i] && L[i].typ === typ) L[i] = null; };
  S.steg = i18; tom('fynd4'); P.ader.visible = true; ut.guld = avst(P.malPunkt(), P.ader);
  S.steg = i16; S.hotbar[8] = { typ: 'guldflaga', n: 1 }; ut.bengt = avst(P.malPunkt(), P.bengtLada); ut.rolf = avst(P.malPunkt(), P.postlada);
  const i14 = P.STEG.findIndex((x) => x.id === 'jet14'); S.steg = i14; tom('byggsats:jetmotor'); const rit0 = S.ritningar.slice();
  S.ritningar = S.ritningar.filter((x) => x !== 'jetmotor'); const m0 = S.mynt; S.mynt = 1e7; const pa = P.malPunkt(); ut.aliJet = pa ? Math.hypot(pa.x - P.ALI.x, pa.z - (P.ALI.z - 1.2)) : 999;
  S.mynt = 0; const pf = P.malPunkt(); ut.fattigAli = pf ? Math.hypot(pf.x - P.ALI.x, pf.z - (P.ALI.z - 1.2)) : 999; S.mynt = m0;
  S.ritningar = [...S.ritningar, 'jetmotor']; const pj = P.malPunkt(); S.ritningar = rit0; const kand = P.skrivare.filter((x) => x.gen === P.printLinje?.('jetmotor') + 2 || true);
  ut.jet = pj ? Math.min(...P.skrivare.filter((x) => x.mesh?.visible !== false).map((x) => avst(pj, x.mesh) + (x.gen === 5 ? 0 : 1000))) : 999;
  S.steg = steg0; S.hotbar = JSON.parse(hb); S.ryggsack = JSON.parse(rs); S.kistan = JSON.parse(ki);
  return ut;
});
ok(r4.guld < 1.5, `Mal en rulle guld utan guld: pilen ${r4.guld.toFixed(1)} m från ådern`);
ok(r4.fattigAli > 3, `utan pengar till ritningen: pilen pekar inte på Ali (${r4.fattigAli.toFixed(1)} m)`);
ok(r4.aliJet < 1.5, `Montera jetmotorn utan ritning: pilen ${r4.aliJet.toFixed(1)} m från Ali`);
ok(r4.jet < 1.5, `Montera jetmotorn med ritning, utan jetmotor: pilen ${r4.jet.toFixed(1)} m från kolfiberskrivaren`);
ok(r4.bengt < 1.5 && r4.rolf > 3, `flagan i handen: pilen ${r4.bengt.toFixed(1)} m från Bengt-Åkes brevlåda (${r4.rolf.toFixed(1)} m från Rolfs)`);
ok(!fel.length, `0 sidfel (${fel.join(' · ') || 'inga'})`);
console.log(ut.join('\n')); await b.close(); process.exit(ut.some((x) => x.startsWith('✗')) ? 1 : 0);
