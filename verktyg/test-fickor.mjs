// DD: fulla fickor – en sak plockas inte upp när verktygsraden är full, skräp går som vanligt. Kör: node verktyg/test-fickor.mjs [url]
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
const H = (f, a) => p.evaluate(f, a);
const ut = [];
// fyll plats 1–8 med olika saker och lägg en burk på marken
await H(() => { const h = window.__printahem, S = h.S; S.hotbar = S.hotbar.map((x, i) => i === 0 ? x : { typ: ['nyckelring', 'kruka', 'pall', 'mobilstall', 'fagelholk', 'lampskarm', 'dronare', 'skateboard', 'gitarr'][i - 1], n: 1 }); S.ryggsack = S.ryggsack.map(() => null);
  const pp = { id: 'ptest', typ: 'burk_lingon', x: h.spelare.pos.x + 1, z: h.spelare.pos.z + 1, r: 0, r8: 0, hog: true }; h.placera(pp); });
await H(() => window.__printahem.plockaUppPlacerad(window.__printahem.placerade.find((x) => x.id === 'ptest')));
await p.waitForTimeout(300);
ut.push(['1. burken ligger kvar med fulla fickor', await H(() => window.__printahem.placerade.some((x) => x.id === 'ptest'))]);
ut.push(['   skylten syns', await H(() => /Fulla fickor/.test(document.querySelector('.ph-fickskylt.in')?.textContent || ''))]);
ut.push(['   tanken kommer', await H(() => window.__printahem.textLogg().some((r) => JSON.stringify(r).includes('Fickorna är fulla')))]);
// flytta en sak till ryggsäcken med ett klick
await H(() => window.__printahem.oppnaInv?.() ?? document.querySelector('[data-inv]')?.click());
await p.waitForTimeout(400);
await H(() => document.querySelector('[data-s="h:3"]')?.click());
await p.waitForTimeout(300);
ut.push(['2. ett klick flyttar pallen till ryggsäcken', await H(() => !window.__printahem.S.hotbar[3] && window.__printahem.S.ryggsack.some((x) => x?.typ === 'pall'))]);
await H(() => window.__printahem.ui.stangButik());
await H(() => window.__printahem.plockaUppPlacerad(window.__printahem.placerade.find((x) => x.id === 'ptest')));
ut.push(['   nu går burken att plocka', await H(() => !window.__printahem.placerade.some((x) => x.id === 'ptest') && window.__printahem.S.hotbar.some((x) => x?.typ === 'burk_lingon'))]);
// fyll igen och plocka skräp
await H(() => { const S = window.__printahem.S; S.hotbar[3] = { typ: 'pall', n: 1 }; });
const fore = await H(() => window.__printahem.hand.saker.length);
await H(() => { const h = window.__printahem; h.byt(0); const s = h.skrapLista.find((x) => !x.userData.tung && x.visible !== false); h.spelare.pos.set(s.position.x + 0.5, 0, s.position.z + 0.5); h.plockaSkrap(s); });
ut.push(['3. skräp går att plocka med fulla fickor', await H((f) => window.__printahem.hand.saker.length > f, fore)]);
for (const [t, ok] of ut) console.log(ok ? '✓' : '✗', t);
console.log(fel.length ? fel.join('\n') : 'inga sidfel'); await b.close(); process.exit(ut.every((x) => x[1]) && !fel.length ? 0 : 1);
