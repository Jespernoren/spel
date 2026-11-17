// A-042 tillägg 15:05: sparfilerna dag 3, 8, 14 och 18 laddas i den nya versionen utan sidfel.
// Dag 14 får en sak i svackan (som om den stod där före A-066) – den ska flyttas till närmaste mark, med tanken en gång.
// Kör: node verktyg/test-a042-sparfiler.mjs [url]
import fs from 'node:fs';
import { chromium } from '/home/claude/verktyg/node_modules/playwright-core/index.mjs';
const url = process.argv[2] || 'http://127.0.0.1:8765/printa-hem.html';
const ut = [];
const b = await chromium.launch({ executablePath: '/usr/bin/google-chrome', args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader'] });
for (const namn of ['dag3', 'dag8', 'dag14', 'dag18']) {
  const spar = JSON.parse(fs.readFileSync(`verktyg/sparfiler/${namn}.json`, 'utf8')); delete spar.trappaV1; delete spar.flyttadVarnad;
  if (namn === 'dag14') spar.placerade.push({ id: 'pflytt', typ: 'fagelholk', x: 4, z: -27, r: 0, r8: 0, pa: null });
  const p = await (await b.newContext({ viewport: { width: 1280, height: 720 } })).newPage(); const fel = [];
  p.on('pageerror', (e) => fel.push(e.message));
  await p.addInitScript((s) => { if (!sessionStorage.getItem('a042')) { sessionStorage.setItem('a042', 1); localStorage.clear(); localStorage.setItem('spar:printahem2:v1', s); } }, JSON.stringify(spar));
  await p.goto(url); await p.waitForTimeout(5000);
  for (let i = 0; i < 25 && !(await p.evaluate(() => !!window.__printahem?.ui?.igang).catch(() => false)); i++) { await p.evaluate(() => { for (const k of document.querySelectorAll('button')) { const r = k.getBoundingClientRect(); if (r.width && /Börja|BÖRJA|Fortsätt|Starta|Hoppa|Vakna|Ny dag/i.test(k.textContent)) { k.click(); return; } } }); await p.waitForTimeout(1000); }
  await p.waitForTimeout(4000);
  const r = await p.evaluate(() => { const P = window.__printahem, S = P.S; const f = P.placerade.find((x) => x.id === 'pflytt');
    const igen = P.flyttaFelPlacerade(); const tankar = P.textLogg().filter((e) => e.kalla === 'tanke' && /Någon har flyttat på saker/.test(e.text)).length;
    return { dag: S.dag, mynt: S.mynt, trappa: !!S.trappaV1, steg: P.stegId(), flytt: f && [+f.x.toFixed(1), +f.z.toFixed(1)], igen, tankar };
  });
  const ok = !fel.length && r.dag === spar.dag && (r.dag < 11 || (r.trappa && r.mynt >= spar.mynt)) && (namn !== 'dag14' || (r.flytt && r.flytt[1] > -23 && r.igen === 0 && r.tankar === 1));
  ut.push([`${namn}: dag ${r.dag}, mål ${r.steg}, ${spar.mynt} → ${r.mynt} kr${r.dag >= 11 ? ` (trappaV1 ${r.trappa})` : ''}${r.flytt ? `, saken i svackan flyttad till ${r.flytt.join(', ')} (tanken ${r.tankar} gång)` : ''}${fel.length ? ' · sidfel: ' + fel[0] : ''}`, ok]);
  await p.close();
}
for (const [t, ok] of ut) console.log(ok ? '✓' : '✗', t);
await b.close(); process.exit(ut.every((x) => x[1]) ? 0 : 1);
