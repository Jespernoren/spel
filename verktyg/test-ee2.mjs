// EE tillägg 2: ett batteri för alla linjer, ny kapacitet på ny plats (taket, gården, ängen, backen), L efter PETG, kolfiberskrivaren av flaskhalsen. Kör: node verktyg/test-ee2.mjs [url]
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
const r = await p.evaluate(() => {
  const h = window.__printahem, S = h.S, F = h.FLASK_FORE, o = {};
  o.solFore = F.sol(); S.kapitel = 2; S.vindsnurra = 3; o.solUtanRod = F.sol();
  const pl = h.nastaPlats('sol'); o.solPlats = pl && [pl.id, pl.x, pl.y, pl.z];
  h.placera({ id: 'pt1', typ: 'petgkvarn', x: h.nastaPlats('petgkvarn').x, z: h.nastaPlats('petgkvarn').z, r: 0, r8: 0 });
  o.solMedRod = F.sol();
  h.placera({ id: 'pt2', typ: 'sol', x: pl.x, z: pl.z, r: 0, r8: 0, hy: pl.y });
  const sp = h.placerade.find((x) => x.id === 'pt2'); o.solY = +sp.mesh.position.y.toFixed(2);
  S.dag = 6; o.l6 = F.skrivare3(); S.dag = 8; o.l8utanPetg = F.skrivare3();
  o.bank7 = (S.dag = 7, F.bank()); S.dag = 8; o.bank8 = F.bank();
  const b0 = h.stromBehov(); S.kolf = { ...(S.kolf || {}), ko: 500, rullar: 0 }; o.kolfDrar = +(h.stromBehov() - b0).toFixed(1);
  const parkPl = h.nastaPlats('solpark'); o.park = parkPl && [parkPl.id, parkPl.x, parkPl.z];
  const vk = h.nastaPlats('vindkraft'); o.vk = vk && [vk.id, vk.x, vk.z];
  const e0 = h.solEffekt(); h.placera({ id: 'pt3', typ: 'vindkraft', x: vk.x, z: vk.z, r: 0, r8: 0 }); o.vkEffekt = h.solEffekt() - e0;
  return o;
});
console.log(JSON.stringify(r));
ut.push([`solpanelen väntar på röda kvarnen (utan: ${r.solUtanRod}, med: ${r.solMedRod})`, r.solUtanRod === false && r.solMedRod === true]);
ut.push([`solpanelen hamnar på skjulets tak: ${JSON.stringify(r.solPlats)}, y = ${r.solY}`, r.solPlats?.[0] === 'sol' && r.solY >= 2.3]);
ut.push([`Skrivare L inte dag 6 och inte utan PETG-skrivaren (${r.l6}, ${r.l8utanPetg})`, r.l6 === false && r.l8utanPetg === false]);
ut.push([`batteribanken från dag 8 (d7 ${r.bank7}, d8 ${r.bank8})`, r.bank7 === false && r.bank8 === true]);
ut.push([`kolfiberkvarnen drar ur samma batteri (+${r.kolfDrar}/s)`, r.kolfDrar > 0]);
ut.push([`solcellsparken på gården bakom skjulet ${JSON.stringify(r.park)}, vindkraftverket på backen ${JSON.stringify(r.vk)} ger +${r.vkEffekt}/s`, r.park?.[1] > 5 && r.vk?.[2] < -15 && r.vkEffekt > 0]);
await p.evaluate(() => { const h = window.__printahem; h.spelare.pos.x = 11.5; h.spelare.pos.z = 13; h.tittaMot(9, 7, 0.4, { tvang: true }); }); await p.waitForTimeout(4000); await p.screenshot({ path: 'verktyg/test-ee2-taket.png' });
await p.evaluate(() => { const h = window.__printahem; h.spelare.pos.x = 16; h.spelare.pos.z = -6; h.tittaMot(16, -18, 0.4, { tvang: true }); }); await p.waitForTimeout(4000); await p.screenshot({ path: 'verktyg/test-ee2-backen.png' });
for (const [t, ok] of ut) console.log(ok ? '✓' : '✗', t);
console.log(fel.length ? fel.join('\n') : 'inga sidfel'); await b.close(); process.exit(ut.every((x) => x[1]) && !fel.length ? 0 : 1);
