// A-061: kamerasvepet över tippen, Rolfs bänk med utsikten, före och efter, Guldstatyn vid bänken. Kör: node verktyg/test-a061.mjs [url]
import { chromium } from '/home/claude/verktyg/node_modules/playwright-core/index.mjs';
const url = process.argv[2] || 'http://127.0.0.1:8765/a062.html';
const b = await chromium.launch({ executablePath: '/usr/bin/google-chrome', args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader'] });
const p = await (await b.newContext({ viewport: { width: 1280, height: 720 } })).newPage(); const fel = [];
p.on('pageerror', (e) => fel.push('sidfel: ' + e.message));
await p.goto(url); await p.waitForTimeout(6000);
for (let i = 0; i < 25; i++) {
  const namn = await p.$('.ph-namn input'); if (namn) { await namn.fill('Test'); await p.keyboard.press('Enter'); }
  else await p.evaluate(() => { for (const k of document.querySelectorAll('button')) { const r = k.getBoundingClientRect(); const top = document.elementFromPoint(r.x + r.width / 2, r.y + r.height / 2); if (r.width && top && (top === k || k.contains(top)) && /Börja$|BÖRJA|Hoppa över|Starta|Fortsätt/i.test(k.textContent.trim())) { k.click(); break; } } });
  await p.waitForTimeout(1000);
}
const ut = [], steg = async (t, namn) => { await p.evaluate(({ t, f }) => window.__printahem.kameraAkSteg(t, f), { t, f: !!namn }); await p.waitForTimeout(namn ? 2500 : 300); if (namn) { await p.screenshot({ path: `verktyg/test-a061-${namn}.png` }); await p.evaluate((t) => window.__printahem.kameraAkSteg(t, false), t); } };
// 1. svepet
const fore1 = await p.evaluate(() => { const h = window.__printahem; h.S.dag = 2; h.tippSvep(); return !!h.kameraAk(); });
await steg(2, 'svep'); await steg(5);
ut.push([`dag 2: kameran sveper över tippen (${fore1}) och lämnar tillbaka styrningen`, fore1 && !(await p.evaluate(() => !!window.__printahem.kameraAk()))]);
// 2. utsikten
await p.evaluate(() => { const h = window.__printahem, S = h.S; S.dag = 3; S.hem = { ...(S.hem || {}), tak: true }; S.utsikt = 'bjuden'; h.startaUtsikt(); });
await steg(14, 'utsikt-garden'); await steg(31, 'utsikt-bengt'); await steg(41, 'utsikt-staden'); await steg(55); await steg(61);
const u = await p.evaluate(() => { const h = window.__printahem, S = h.S; return { utsikt: S.utsikt, foto: (S.polaroid || []).some((f) => f.id === 'bank'), bengt: !!S.bengtNamnd }; });
ut.push([`dag 3: Rolfs bänk klar (${u.utsikt}), polaroiden "Rolfs bänk" (${u.foto}), Bengt-Åke utpekad (${u.bengt})`, u.utsikt === 'klar' && u.foto && u.bengt]);
await p.waitForTimeout(2500); await p.evaluate(() => { const h = window.__printahem; if (!h.S.foreEfterVisad) h.visaForeEfter(); });
await p.waitForTimeout(800); await p.screenshot({ path: 'verktyg/test-a061-fore-efter.png' });
const fe = await p.evaluate(() => [...document.querySelectorAll('.ph-pol img')].length);
ut.push([`före och efter: två polaroider i dagboken (${fe})`, fe >= 2]);
await p.evaluate(() => { document.querySelectorAll('[data-stang], .fp-stang').forEach((k) => k.click()); });
// 4. statyn
await p.evaluate(() => { const h = window.__printahem, S = h.S; S.statyBank = 'bjuden'; h.startaUtsikt(); });
await steg(9, 'staty-bank'); await steg(27); await steg(31);
const st = await p.evaluate(() => { const h = window.__printahem; h.spelare.pos.x = 2; h.spelare.pos.z = 4; h.tittaMot(-12, -54, 0.3, { tvang: true }); return { klar: h.S.statyBank, syns: h.kulle.userData.staty.visible, foto: (h.S.polaroid || []).some((f) => f.id === 'staty') }; });
await p.waitForTimeout(3500); await p.screenshot({ path: 'verktyg/test-a061-kullen.png' });
ut.push([`Guldstatyn står vid bänken (${st.klar}, syns ${st.syns}) och polaroiden "En värdig plats" (${st.foto})`, st.klar === 'klar' && st.syns && st.foto]);
for (const [t, ok] of ut) console.log(ok ? '✓' : '✗', t);
console.log(fel.length ? fel.join('\n') : 'inga sidfel'); await b.close(); process.exit(ut.every((x) => x[1]) && !fel.length ? 0 : 1);
