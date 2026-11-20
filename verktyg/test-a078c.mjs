// A-078 tillägg 12:25 + inkorg 12b: introt – varje replik läses (även andra gången), ingen klipps, total tid ca 55–60 s, armen upp på soptipp, ingen "DU:", tavlan en rad.
// Kör: node verktyg/test-a078c.mjs [url] → verktyg/a078/introtabell.md
import fs from 'node:fs';
import { chromium } from '/home/claude/verktyg/node_modules/playwright-core/index.mjs';
const url = process.argv[2] || 'http://127.0.0.1:8765/printa-hem.html';
const UT = new URL('./a078/', import.meta.url).pathname;
const b = await chromium.launch({ executablePath: '/usr/bin/google-chrome', args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--autoplay-policy=no-user-gesture-required'] });
const p = await (await b.newContext({ viewport: { width: 1280, height: 720 } })).newPage(); const fel = [];
p.on('pageerror', (e) => fel.push(e.message));
await p.addInitScript(() => { if (!sessionStorage.getItem('c')) { sessionStorage.setItem('c', 1); localStorage.clear(); localStorage.setItem('spar:printahem2:v1', JSON.stringify({ spelarNamn: 'Test' })); } });
await p.goto(url); await p.waitForTimeout(5000);
const ut = []; let md = '# Introtabellen (A-078 tillägg 12:25)\n\n';
const kor = async (gang) => {
  await p.evaluate(() => { window.__introRepliker = []; window.__introLogg = []; });
  if (gang === 1) await p.waitForFunction(() => window.__startaSpel && document.querySelector('.br-starta'), null, { timeout: 8000 }).then(() => p.evaluate(() => window.__startaSpel())); else await p.evaluate(() => window.__printahem.visaIntroDirekt());
  const t0 = Date.now(); let du = 0, tavla = 0;
  for (let i = 0; i < 400; i++) { await p.waitForTimeout(400); const s = await p.evaluate(() => ({ kvar: !!document.querySelector('.ph-intro3'), du: !!document.querySelector('.ph-intro3 .ph-vem'), tavla: document.querySelectorAll('.ph-tavla g.rita').length })); if (s.du) du++; tavla = Math.max(tavla, s.tavla); if (!s.kvar && i > 3) break; }
  const tid = await p.evaluate(() => { const L = window.__introLogg || [], f = L.find((x) => x.h === 'visas'), sl = L.find((x) => x.h === 'slut'); return f && sl ? (sl.t - f.t) / 1000 : 999; });   // från första bilden till spelet
  const R = await p.evaluate(() => window.__introRepliker || []);
  const tysta = R.filter((r) => r.kalla === 'tyst' || r.start == null), klippta = R.filter((r) => r.reserv);
  md += `## ${gang === 1 ? 'Första gången' : 'Andra gången (samma sparfil)'} · ${tid.toFixed(1)} s · ${R.length} repliker · ${tysta.length} tysta · ${klippta.length} på reservtimern\n\n| Ruta | Vem | Replik | Källa | Start | Längd | Väntan före |\n|---|---|---|---|---|---|---|\n`;
  let forra = R[0]?.t0 || 0;
  for (const r of R) { md += `| ${r.ruta} | ${r.vem} | ${r.text} | ${r.kalla}${r.reserv ? ' (reserv)' : ''} | ${((r.start ?? r.t0) - R[0].t0) / 1000} s | ${r.slut && r.start ? ((r.slut - r.start) / 1000).toFixed(1) + ' s' : '–'} | ${((r.t0 - forra) / 1000).toFixed(1)} s |\n`; forra = r.slut || r.t0; }
  md += '\n';
  const pek = await p.evaluate(() => (window.__introLogg || []).some((x) => x.h === 'visa' && x.x === 'pek'));
  const [min, max] = gang === 1 ? [54, 69] : [54, 63];   /* inkorg 19: lugnt tempo mamma→råtta ger ca +2 s. inkorg 12b: ca 55–60 s; första gången renderar headless 6 världsbilder i programvara (ca 6 s) */
  ut.push([`${gang}:a gången: ${tid.toFixed(1)} s (${min}–${max}), ${R.length} repliker, ${tysta.length} tysta, ${klippta.length} på reservtimern, "DU:" syntes ${du} gånger, tavlan ritade ${tavla} delar, armen upp på soptipp: ${pek ? 'ja' : 'NEJ'}`, tid >= min && tid <= max && R.length >= 20 && pek && !tysta.length && !klippta.length && !du && tavla <= 9]);
};
await kor(1);
await p.waitForTimeout(3000);
await kor(2);
fs.writeFileSync(UT + 'introtabell.md', md);
for (const [t, ok] of ut) console.log(ok ? '✓' : '✗', t);
console.log(fel.length ? 'sidfel: ' + fel.slice(0, 3).join(' · ') : 'inga sidfel'); await b.close(); process.exit(ut.every((x) => x[1]) && !fel.length ? 0 : 1);
