// DF: linje 3 – kajaken på pirran, rullbandet, kolfiberkvarnen, slangfördelaren och kolfiberstolen. Kör: node verktyg/test-linje3.mjs
import { chromium } from '/home/claude/verktyg/node_modules/playwright-core/index.mjs';
const b = await chromium.launch({ executablePath: '/usr/bin/google-chrome', args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader'] });
const p = await (await b.newContext({ viewport: { width: 1280, height: 720 } })).newPage(); const fel = [];
p.on('pageerror', (e) => fel.push('sidfel: ' + e.message));
await p.goto('http://127.0.0.1:8765/printa-hem.html'); await p.waitForTimeout(6000);
for (let i = 0; i < 60 && !(await p.evaluate(() => !!window.__printahem?.ui?.igang)); i++) {
  const namn = await p.$('.ph-namn input'); if (namn) { await namn.fill('Test'); await p.keyboard.press('Enter'); }
  else await p.evaluate(() => { for (const k of document.querySelectorAll('button')) { const r = k.getBoundingClientRect(); if (r.width && /Börja$|BÖRJA|Hoppa över|Starta|Fortsätt/i.test(k.textContent.trim())) { k.click(); return; } } });
  await p.waitForTimeout(1000);
}
const H = (f, a) => p.evaluate(f, a); const ut = [];
await H(() => { const h = window.__printahem, S = h.S; S.kapitel = 3; S.dag = 11; S.strom = 500; h.placera({ id: 'pk1', typ: 'kolfkvarn', x: -16.3, z: 0.5, r: 0, r8: 0 }); h.placera({ id: 'pk2', typ: 'kolfskrivare', x: -10.5, z: 0.5, r: 0, r8: 0 });
  S.kolf.band = true; S.kolf.slang = true; S.kolf.jet = true; for (let i = 0; i < 3; i++) h.laggSkrap(-30 + i, 12, h.variantFor('kajak'), 0); });
// pirran och kajaken
const t = await H(() => { const h = window.__printahem; const k = h.skrapLista.find((x) => x.userData.sort === 'kajak'); h.S.sackkarra = true; h.laggTill('sackkarra'); h.valjTyp('sackkarra'); h.plockaSkrap(k); return { kvar: h.skrapLista.includes(k), last: h.S.karraLast.length }; });
ut.push(['kajaken går inte att lasta på pirran', t.kvar && t.last === 0]);
await p.waitForTimeout(1500);
ut.push(['tanken "för stor" (DJ)', await H(() => window.__printahem.textLogg().some((r) => JSON.stringify(r).includes('Jag får komma på något annat sätt')))]);
await H(() => { const h = window.__printahem; h.S.strom = 500; });
await H(() => { const h = window.__printahem; for (let i = 0; i < 300; i++) { h.S.strom = 12; h.uppdateraKolf(0.5); } });
await p.waitForTimeout(2500);
const st = await H(() => { const h = window.__printahem; return { kaj: h.S.stat.bandKajak || 0, rullar: h.S.stat.kolfRullar || 0, fil: h.filTillg(h.skrivare.find((x) => x.gen === 5)) || 0 }; });
ut.push([`bandet tog kajaker (${st.kaj}) och kvarnen gjorde rullar (${st.rullar})`, st.kaj >= 1 && st.rullar >= 1]);
ut.push([`kolfiberskrivaren når tornet genom slangen (${Math.round(st.fil)} g)`, st.fil > 0]);
ut.push(['tanken vid första kajaken', await H(() => window.__printahem.textLogg().some((r) => JSON.stringify(r).includes('Den åker själv')))]);
const r = await H(() => { const h = window.__printahem, sk = h.skrivare.find((x) => x.gen === 5); sk.fil = Math.max(sk.fil, 3000); return h.startaJobb(sk, { typ: 'n3_stol' }); });
ut.push(['kolfiberstolen startar på kolfiberskrivaren', !!r]);
const r2 = await H(() => { const h = window.__printahem, sk = h.skrivare.find((x) => x.gen !== 5); if (!sk) return 'ingen'; sk.fil = 3000; return h.startaJobb(sk, { typ: 'n3_stol' }); });
ut.push(['kolfiberstolen går inte på en vanlig skrivare', r2 !== true && r2 !== 'ko']);
for (const [x, ok] of ut) console.log(ok ? '✓' : '✗', x);
console.log(fel.length ? fel.join('\n') : 'inga sidfel'); await b.close();
