// A-058 tillägg 08:38: Bengt-Åkes trappa – skyltar och kikare (K1 d1–2), bara rösten (K1 d3–5, två skrik), gubben (K2), tyst nick (K3). Kör: node verktyg/test-a058b.mjs [url]
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
const ut = [];
const steg = (kap, dag, resp) => p.evaluate(({ kap, dag, resp }) => { const h = window.__printahem, S = h.S; S.kapitel = kap; S.dag = dag; S.respekt = resp; h.bengtFig.visible = false; const g = h.spelare.granser; h.spelare.pos.x = 0; h.spelare.pos.z = g.minZ + 0.8; h.tittaMot(0, g.minZ - 5, 0.3, { tvang: true }); const f = S.bengtSkrik || 0; h.kollaBengt(100); return { skrik: (S.bengtSkrik || 0) - f, figur: h.bengtFig.visible, kikare: !!S.bengtKikare, nick: !!S.bengtNick, skyltar: h.privatSkyltar.visible }; }, { kap, dag, resp });
const a = await steg(1, 1, 0); await p.waitForTimeout(3000); await p.screenshot({ path: 'verktyg/test-a058b-k1.png' });
ut.push([`K1 dag 1: skyltar ${a.skyltar}, kikaren ${a.kikare}, inga skrik (${a.skrik}), ingen gubbe (${a.figur})`, a.skyltar && a.kikare && !a.skrik && !a.figur]);
const b1 = await steg(1, 3, 0), b2 = await steg(1, 4, 0), b3 = await steg(1, 5, 0);
ut.push([`K1 dag 3–5: bara rösten, två skrik (${b1.skrik + b2.skrik + b3.skrik}), ingen gubbe (${b1.figur || b2.figur || b3.figur})`, b1.skrik + b2.skrik + b3.skrik === 2 && !b1.figur && !b2.figur]);
const c = await steg(2, 7, 10); await p.waitForTimeout(2500); await p.screenshot({ path: 'verktyg/test-a058b-k2.png' });
ut.push([`K2: gubben syns vid staketet och skriker (${c.figur}, ${c.skrik})`, c.figur && c.skrik === 1]);
const d = await steg(3, 12, 35);
ut.push([`K3 respekt 35: han syns men skriker inte (${d.figur}, ${d.skrik}) och nickar en gång (${d.nick})`, d.figur && !d.skrik && d.nick]);
const e = await p.evaluate(() => { const h = window.__printahem; h.S.bengtAvslojad = 15; h.uppdateraMark?.(); return { skyltar: h.privatSkyltar.visible, hacka: h.bengtGrav.userData.hacka.visible }; });
ut.push([`efter avslöjandet är skyltarna borta (${!e.skyltar}), hackan står kvar vid graven tills Bengt-Åke ger den (${e.hacka})`, !e.skyltar && e.hacka]);
for (const [t, ok] of ut) console.log(ok ? '✓' : '✗', t);
console.log(fel.length ? fel.join('\n') : 'inga sidfel'); await b.close(); process.exit(ut.every((x) => x[1]) && !fel.length ? 0 : 1);
