// A-068: generatorn i handen → cykeln i famnen → cykeln på rutan → montera generatorn. Fel ordning ger "Cykeln först" en gång.
import { chromium } from '/home/claude/verktyg/node_modules/playwright-core/index.mjs';
const url = process.argv[2] || 'http://127.0.0.1:8765/ax.html';
const b = await chromium.launch({ executablePath: '/usr/bin/google-chrome', args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader'] });
const ctx = await b.newContext({ viewport: { width: 1280, height: 800 } });
await ctx.addInitScript(() => { if (!sessionStorage.getItem('t')) { sessionStorage.setItem('t', 1); localStorage.clear(); localStorage.setItem('spar:printahem2:v1', JSON.stringify({ introSett: true, spelarNamn: 'Test', dag1Sida: true, skyltUppe: true, kap1Visad: true })); } });
const p = await ctx.newPage(); const fel = []; p.on('pageerror', (e) => fel.push('sidfel: ' + e.message));
await p.goto(url); await p.waitForTimeout(5000);
await p.click('.br-starta').catch(() => {}); await p.waitForTimeout(3000);
const H = (f, a) => p.evaluate(f, a);
await H(() => { const P = window.__printahem, S = P.S; S.skrivareLastad = true; S.skrivareStar = true; S.steg = P.STEG.findIndex((x) => x.id === 'taGen'); P.ritaStart(); P.tittaMot(P.vagCykel.position.x, P.vagCykel.position.z, 0.1); });
await p.waitForTimeout(1500);
const ut = [];
const tankar = () => H(() => window.__printahem.textLogg().filter((e) => e.kalla === 'tanke').map((e) => e.text));
await H(() => window.__printahem.vagCykel.userData.interaktion.aktivera()); await p.waitForTimeout(1200);
ut.push(['generatorn i handen', await H(() => window.__printahem.valdTyp() === 'byggsats:generator')]); await p.screenshot({ path: 'verktyg/a068/1-generatorn-i-handen.png' });
// fel ordning: montera innan cykeln står på rutan
await H(() => window.__printahem.vagCykel.userData.interaktion.aktivera()); await p.waitForTimeout(600);
await H(() => window.__printahem.vagCykel.userData.interaktion.aktivera()); await p.waitForTimeout(600);
{ const t = (await tankar()).filter((x) => /Cykeln först/.test(x)), S = await H(() => ({ o: !!window.__printahem.S.cykelOmbyggd, st: !!window.__printahem.S.cykelStar, gen: window.__printahem.antalInv('byggsats:generator') }));
  ut.push([`fel ordning: "Cykeln först" ${t.length} gång, inget annat händer`, t.length === 1 && !S.o && !S.st && S.gen === 1]); }
await H(() => { const P = window.__printahem; P.byt(0); P.vagCykel.userData.interaktion.aktivera(); }); await p.waitForTimeout(1200);
ut.push(['cykeln i famnen', await H(() => window.__printahem.valdTyp() === 'cykelS' && !window.__printahem.vagCykel.visible)]); await p.screenshot({ path: 'verktyg/a068/2-cykeln-i-famnen.png' });
await H(() => { const P = window.__printahem; P.tittaMot(-12.6, 13.9, 0.1); }); await p.waitForTimeout(1500);
ut.push(['den lysande rutan syns', await H(() => window.__printahem.startYta.visible)]); await p.screenshot({ path: 'verktyg/a068/3-lysande-rutan.png' });
await H(() => window.__printahem.startYta.userData.interaktion.aktivera()); await p.waitForTimeout(1200);
ut.push(['cykeln står på rutan med en duns', await H(() => { const P = window.__printahem; return P.S.cykelStar && P.vagCykel.visible && P.textLogg().some((e) => e.kalla === 'duns'); })]); await p.screenshot({ path: 'verktyg/a068/4-cykeln-pa-rutan.png' });
await H(() => { const P = window.__printahem, i = P.S.hotbar.findIndex((x) => x?.typ === 'byggsats:generator'); P.byt(i); P.vagCykel.userData.interaktion.aktivera(); }); await p.waitForTimeout(2600);
ut.push(['generatorn monterad, sladden dragen', await H(() => { const P = window.__printahem; return P.S.cykelOmbyggd && !P.antalInv('byggsats:generator'); })]); await p.screenshot({ path: 'verktyg/a068/5-monteringen.png' });
for (const [t, ok] of ut) console.log(ok ? '✓' : '✗', t);
console.log(fel.length ? fel.join('\n') : 'inga sidfel'); await b.close(); process.exit(ut.every((x) => x[1]) && !fel.length ? 0 : 1);
