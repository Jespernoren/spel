// A-073: dag 1 – kvarnen först, sedan skrivaren och gåtan om strömmen. Kör: node verktyg/test-a073.mjs [url]
// (Hela ordningen spelas i test-dag1-ordning.mjs; STROM_DIREKT=1 tar generatorn direkt i stället för att vänta på hjälpen.)
import fs from 'node:fs';
import { chromium } from '/home/claude/verktyg/node_modules/playwright-core/index.mjs';
const url = process.argv[2] || 'http://127.0.0.1:8765/ax.html';
const dir = new URL('./a073/', import.meta.url).pathname; fs.mkdirSync(dir, { recursive: true });
const b = await chromium.launch({ executablePath: '/usr/bin/google-chrome', args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader'] });
const p = await (await b.newContext({ viewport: { width: 1280, height: 720 } })).newPage(); const fel = [];
p.on('pageerror', (e) => fel.push('sidfel: ' + e.message));
await p.addInitScript(() => { if (!sessionStorage.getItem('a073')) { sessionStorage.setItem('a073', 1); localStorage.clear(); localStorage.setItem('spar:printahem2:v1', JSON.stringify({ introSett: true, spelarNamn: 'Test', dag1Sida: true, skyltUppe: true, lappar: ['skylt'] })); } });
await p.goto(url); await p.waitForTimeout(5000);
for (let i = 0; i < 25 && !(await p.evaluate(() => !!window.__printahem?.ui?.igang).catch(() => false)); i++) {
  await p.evaluate(() => { for (const k of document.querySelectorAll('button')) { const r = k.getBoundingClientRect(); if (r.width && /Börja|BÖRJA|Fortsätt|Starta|Hoppa/i.test(k.textContent)) { k.click(); return; } } });
  await p.waitForTimeout(1000);
}
const ut = [], H = (f, a) => p.evaluate(f, a);
const titta = async (fran, mot, h = 1.0) => { await H(([f, m, h]) => { const P = window.__printahem; P.spelare.pos.x = f[0]; P.spelare.pos.z = f[1]; P.tittaMot(m[0], m[1], 1.2, { tvang: true, y: h }); }, [fran, mot, h]); await p.waitForTimeout(2600); };
// 1. första målet är Ali, och han ger kvarnen
const forsta = await H(() => window.__printahem.STEG[window.__printahem.S.steg]?.id);
ut.push([`första målet efter skylten: ${forsta}`, forsta === 'aliKvarn']);
await H(() => window.__printahem.oppnaMarknad());
await p.waitForTimeout(1500); await p.screenshot({ path: dir + 'ali-med-kvarnen.png' });
const k = await H(() => { const P = window.__printahem; return { kopt: !!P.S.kvarnKopt, skuld: P.S.kvarnSkuld, hand: P.valdTyp?.() }; });
ut.push([`Ali ger kvarnen (skuld ${k.skuld} kr, ingen betalning nu)`, k.kopt && k.skuld === 30]);
await H(() => { const P = window.__printahem; P.ui.butiksOverlay.hidden = true; document.querySelectorAll('.ph-overlay').forEach((e) => { e.hidden = true; }); });
// 2. ingen kontur för cykeln/generatorn före strömgåtan
const fore = await H(() => window.__printahem.konturMal()?.[0] || '');
ut.push([`ingen kontur för cykeln eller generatorn före gåtan (${fore || 'bara kvarnen'})`, !/cykel@|generator@/.test(fore)]);
// 3. tråden kommer ut
await H(() => { const P = window.__printahem, S = P.S; const i = S.hotbar.findIndex((x) => x?.typ === 'byggsats:gammalkvarn'); if (i >= 0) S.hotbar[i] = null; P.byt(0); S.kvarnStar = true; P.ritaStart(); S.kvarn.tratt = 3; S.kvarn.trattGram = 60; P.veva(6); });
const kv = await H(() => [window.__printahem.kvarn.position.x, window.__printahem.kvarn.position.z]);
await titta([kv[0] + 2.4, kv[1] + 2], kv, 0.8); await p.waitForTimeout(3000); await p.screenshot({ path: dir + 'traden-kommer-ut.png' });
ut.push(['tråden kommer ut (malt)', await H(() => !!window.__printahem.S.stat.maltNagot)]);
// 4. skrivaren står – målet är gåtan, inga konturer
await H(() => { const P = window.__printahem, S = P.S; S.skrivareLastad = true; S.skrivareStar = true; S.steg = P.STEG.findIndex((x) => x.id === 'strom'); P.ritaStart(); });
await p.waitForTimeout(1500);
const sk = await H(() => { const P = window.__printahem, g = P.skrivare.find((x) => x.id === 'g1'); const v = g.mesh.getWorldPosition(g.mesh.position.clone()); return [v.x, v.z]; });
await titta([sk[0] + 3, sk[1] + 2.5], sk, 0.6); await p.screenshot({ path: dir + 'skrivaren-utan-strom.png' });
const g0 = await H(() => ({ mal: window.__printahem.stegText(), kontur: window.__printahem.konturMal()?.[0] || '' }));
ut.push([`målet ”${g0.mal}” utan konturer`, /ström/.test(g0.mal) && !/cykel@|generator@/.test(g0.kontur)]);
// 5. hjälpen efter 20 s tänder konturerna
await p.waitForTimeout(22000);
const g1 = await H(() => ({ hjalp: !!window.__printahem.S.stromHjalp, kontur: window.__printahem.konturMal()?.[0] || '' }));
await titta([sk[0] + 3.5, sk[1] + 3], [sk[0] - 1, sk[1] + 1.5], 0.4); await p.screenshot({ path: dir + 'konturerna-tands.png' });
ut.push([`efter 20 s: hjälpen och konturerna (${g1.kontur})`, g1.hjalp && /cykel@/.test(g1.kontur) && /generator@/.test(g1.kontur)]);
// 6. första nyckelringen av egen tråd
await H(() => { const P = window.__printahem, S = P.S; S.cykelStar = true; S.generatorStar = true; S.cykelOmbyggd = true; P.ritaStart(); });
await titta([sk[0] + 2.2, sk[1] + 1.8], sk, 0.7); await p.screenshot({ path: dir + 'forsta-nyckelringen.png' });
ut.push(['tornet hade ingen storebrors rulle (egen tråd)', await H(() => !window.__printahem.STEG.some((x) => x.id === 'rullSlut' || x.id === 'kop'))]);
for (const [t, ok] of ut) console.log(ok ? '✓' : '✗', t);
console.log(fel.length ? fel.join('\n') : 'inga sidfel'); await b.close(); process.exit(ut.every((x) => x[1]) && !fel.length ? 0 : 1);
