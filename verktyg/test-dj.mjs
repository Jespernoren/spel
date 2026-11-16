// DJ: stora saker ligger isär och etiketten utgår från verktyget – en pirra i handen, rätt etikett, ringen i tunnans träffyta, tunnan står på pirran. Kör: node verktyg/test-pirra.mjs [url]
import { chromium } from '/home/claude/verktyg/node_modules/playwright-core/index.mjs';
const url = process.argv[2] || 'http://127.0.0.1:8765/printa-hem.html';
const b = await chromium.launch({ executablePath: '/usr/bin/google-chrome', args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader'] });
const p = await (await b.newContext({ viewport: { width: 1280, height: 720 } })).newPage(); const fel = [];
p.on('pageerror', (e) => fel.push('sidfel: ' + e.message));
await p.goto(url); await p.waitForTimeout(6000);
for (let i = 0; i < 60 && !(await p.evaluate(() => !!window.__printahem?.ui?.igang)); i++) {
  const namn = await p.$('.ph-namn input'); if (namn) { await namn.fill('Test'); await p.keyboard.press('Enter'); }
  else await p.evaluate(() => { for (const k of document.querySelectorAll('button')) { const r = k.getBoundingClientRect(); if (r.width && /Börja$|BÖRJA|Hoppa över|Starta|Fortsätt/i.test(k.textContent.trim())) { k.click(); return; } } });
  await p.waitForTimeout(1000);
}
const H = (f, a) => p.evaluate(f, a); const ut = [];
await p.waitForTimeout(2000);
const r = await H(() => { const h = window.__printahem, S = h.S; S.sackkarra = true; S.karra = true; h.laggTill('sackkarra'); h.laggTill('karra');
  const x = h.spelare.pos.x + 3, z = h.spelare.pos.z + 3;
  for (let i = 0; i < 3; i++) h.laggSkrap(x, z, h.variantFor('kajak'), 0);
  const k = h.skrapLista.slice(-3), isar = Math.min(Math.hypot(k[0].position.x - k[1].position.x, k[0].position.z - k[1].position.z), Math.hypot(k[0].position.x - k[2].position.x, k[0].position.z - k[2].position.z), Math.hypot(k[1].position.x - k[2].position.x, k[1].position.z - k[2].position.z));
  const t = h.skrapLista.find((o) => o.userData.sort === 'tunna'), l = h.skrapLista.find((o) => !o.userData.tung), kj = k[0];
  const et = (o) => (o.userData.interaktion.text() || '').replace('\u2060', '·');
  const ut = {};
  h.byt(0); ut.hand = [et(t), et(kj), et(l)];
  h.valjTyp('karra'); ut.karra = [et(t), et(kj), et(l)];
  h.valjTyp('sackkarra'); ut.pirra = [et(t), et(kj), et(l)];
  h.byt(0); h.plockaSkrap(t); h.plockaSkrap(kj); h.valjTyp('karra'); h.plockaSkrap(t);
  return { isar, ut, kvar: h.skrapLista.includes(t) && h.skrapLista.includes(kj) };
});
await p.waitForTimeout(1500);
const logg = await H(() => JSON.stringify(window.__printahem.textLogg()));
console.log(JSON.stringify(r.ut));
ut.push([`kajakerna ligger isär (${r.isar.toFixed(2)} m)`, r.isar > 2.5]);
ut.push(['hand/grip: tunna "För tung att lyfta", kajak "För stor att lyfta"', r.ut.hand[0] === '·För tung att lyfta' && r.ut.hand[1] === '·För stor att lyfta']);
ut.push(['kärran: tunna "För tung för kärran"', r.ut.karra[0] === '·För tung för kärran' && r.ut.karra[1] === '·För stor att lyfta']);
ut.push(['pirran: tunna lastas, kajak "För stor att lyfta", småskräp "För liten för pirran"', /^Lasta regntunnan på pirran/.test(r.ut.pirra[0]) && r.ut.pirra[1] === '·För stor att lyfta' && r.ut.pirra[2] === '·För liten för pirran']);
ut.push(['tunnan och kajaken ligger kvar', r.kvar]);
ut.push(['tankarna (tung, stor, kärran)', logg.includes('köra den på') && logg.includes('Jag får komma på något annat sätt') && logg.includes('för mycket för kärran')]);
for (const [t, ok] of ut) console.log(ok ? '✓' : '✗', t);
console.log(fel.length ? fel.join('\n') : 'inga sidfel'); await b.close(); process.exit(ut.every((x) => x[1]) && !fel.length ? 0 : 1);
