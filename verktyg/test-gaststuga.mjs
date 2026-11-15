// CS: husvagnen blir gäststuga – skåpet, Rolf väntar, samtalet, dragningen, tak/isolering/dörr. Kör: node verktyg/test-gaststuga.mjs [url]
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
const H = (f) => p.evaluate(f);
const ut = [];
ut.push(['husvagnen finns', await H(() => !!window.__printahem.husvagn())]);
await H(() => { const h = window.__printahem; h.spelare.granser = { minX: -200, maxX: 200, minZ: -200, maxZ: 200 }; h.S.h78 = true; h.husvagn().visible = true; h.husvagn().position.set(-8, 0, 16); h.husvagnKlick(); });
ut.push(['Rolf väntar', await H(() => window.__printahem.gastScen.fas === 'vantar')]);
await H(() => { const h = window.__printahem, r = h.rolfBesok.position; h.spelare.pos.set(r.x + 1, 0, r.z + 1); h.rolfBesok.userData.interaktion.aktivera(); });
ut.push(['samtalet startar', await H(() => window.__printahem.gastScen.fas === 'pratar')]);
for (let i = 0; i < 120 && (await H(() => window.__printahem.gastScen.fas)) !== ''; i++) { await H(() => { const h = window.__printahem, r = h.rolfBesok.position; h.spelare.pos.set(r.x + 1, 0, r.z + 1); }); await p.waitForTimeout(1000); }
console.log('d', await H(() => { const h = window.__printahem; return [h.spelare.pos.x.toFixed(1), h.rolfBesok.position.x.toFixed(1), JSON.stringify(h.spelare.granser)].join(' '); }));
console.log('fas', await H(() => window.__printahem.gastScen.fas + ' steg ' + window.__printahem.gastScen.steg + ' meny ' + !window.__printahem.ui.overlay.hidden + !window.__printahem.ui.butiksOverlay.hidden + ' gast ' + JSON.stringify(window.__printahem.S.gast) + ' pos ' + window.__printahem.husvagn().position.x.toFixed(1)));
ut.push(['husvagnen står hemma', await H(() => { const h = window.__printahem, g = h.husvagn(); return !!h.S.gast?.hemma && g.visible && Math.abs(g.position.x - 16.5) < 0.2; })]);
await H(() => { const h = window.__printahem; ['tak', 'isolering', 'dorr'].forEach((k) => h.gastDelKlar(k)); });
ut.push(['gäststugan klar', await H(() => !!window.__printahem.S.gast?.klar)]);
await p.screenshot({ path: '/tmp/gaststuga.png' });
for (const [t, ok] of ut) console.log(ok ? '✓' : '✗', t);
console.log(fel.length ? fel.join('\n') : 'inga sidfel'); await b.close(); process.exit(ut.every((x) => x[1]) && !fel.length ? 0 : 1);
