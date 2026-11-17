// EO 35 tillägg: trimsatser per linje, tornvåningar på röd och kolfiber, gamla sparfiler. Kör: node verktyg/test-eo35.mjs [url]
import { chromium } from '/home/claude/verktyg/node_modules/playwright-core/index.mjs';
const url = process.argv[2] || 'http://127.0.0.1:8765/printa-hem.html';
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
  const h = window.__printahem, S = h.S; S.kapitel = 3; S.dag = 12; S.mynt = 99999;
  h.placera({ id: 'e1', typ: 'petgkvarn', x: -16.3, z: 6, r: 0, r8: 0 }); h.placera({ id: 'e2', typ: 'skrivarepetg', x: -10.5, z: 6, r: 0, r8: 0 });
  h.placera({ id: 'e3', typ: 'kolfkvarn', x: -16.3, z: 14, r: 0, r8: 0 }); h.placera({ id: 'e4', typ: 'kolfskrivare', x: -10.5, z: 14, r: 0, r8: 0 });
  S.petg.turbo = true; S.petg.torn = true; S.kolf.jet = true; S.kolf.slang = true;
  const lista = h.aliKopLista().map((x) => x.key);
  const nycklar = ['t:kvarn_rod', 't:skrivare_rod', 't:torn_rod', 't:kvarn_kolf', 't:skrivare_kolf', 't:torn_kolf'];
  const iButik = nycklar.filter((k) => lista.includes(k));
  const mont = (k) => { const m = h.MONTERA['byggsats:trim_' + k]; const mal = m.mal(); if (!mal.length) return false; m.gor(mal[0]); return true; };
  const bla0 = h.trimNiva('kvarn'), platsRod0 = h.tornPlats('rod'), platsKolf0 = h.tornPlats('kolf');
  const ok = ['kvarn_rod', 'skrivare_rod', 'torn_rod', 'kvarn_kolf', 'skrivare_kolf', 'torn_kolf'].map((k) => [k, mont(k), h.trimNiva(k)]);
  const res = { iButik, ok, bla0, bla1: h.trimNiva('kvarn'), platsRod: [platsRod0, h.tornPlats('rod')], platsKolf: [platsKolf0, h.tornPlats('kolf')], max: Object.fromEntries(Object.entries(h.TRIM).map(([k, t]) => [k, t.max])) };
  S.trim = { ...S.trim, kvarn: 5, skrivare: 5 }; h.migreraDK(); res.migr = [h.trimNiva('kvarn'), h.trimNiva('skrivare'), h.trimNiva('kvarn_rod')];
  return res;
});
ut.push([`röd och kolfiber har egna trimsatser i butiken: ${r.iButik.join(', ')}`, r.iButik.length === 6]);
ut.push([`monterade på linjens egen maskin: ${r.ok.map((x) => x[0] + '=' + x[2]).join(', ')}`, r.ok.every((x) => x[1] && x[2] === 1)]);
ut.push([`blå kvarnens trim påverkas inte (${r.bla0} → ${r.bla1})`, r.bla0 === r.bla1]);
ut.push([`tornvåning röd ger plats för fler rullar (${r.platsRod[0]} → ${r.platsRod[1]}), kolfiber (${r.platsKolf[0]} → ${r.platsKolf[1]})`, r.platsRod[1] > r.platsRod[0] && r.platsKolf[1] > r.platsKolf[0]]);
ut.push([`tak: ${JSON.stringify(r.max)}`, r.max.kvarn === 2 && r.max.skrivare === 3 && r.max.kvarn_rod === 2 && r.max.skrivare_kolf === 4]);
ut.push([`gammal sparfil med gemensam trim 5/5 → blå ${r.migr[0]}/${r.migr[1]}, röd ${r.migr[2]}`, r.migr[0] === 2 && r.migr[1] === 3 && r.migr[2] === 1]);
for (const [t, ok] of ut) console.log(ok ? '✓' : '✗', t);
console.log(fel.length ? fel.join('\n') : 'inga sidfel'); await b.close(); process.exit(ut.every((x) => x[1]) && !fel.length ? 0 : 1);
