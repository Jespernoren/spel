// DE: pirran – en pirra i handen, rätt etikett, ringen i tunnans träffyta, tunnan står på pirran. Kör: node verktyg/test-pirra.mjs [url]
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
await p.waitForTimeout(6000);
await H(() => { const h = window.__printahem; h.S.sackkarra = true; h.laggTill('sackkarra'); h.valjTyp('sackkarra'); h.spelare.granser = { minX: -200, maxX: 200, minZ: -200, maxZ: 200 };
  const x = h.spelare.pos.x, z = h.spelare.pos.z - 2.2; h.laggSkrap(x, z, h.variantFor('tunna'), 0.7); h.spelare.yaw = 0; h.spelare.pitch = -0.45; });
await p.waitForTimeout(800);
ut.push(['1. bara en pirra (ingen i famnen)', await H(() => window.__printahem.foremal.children.length === 0)]);
const info = await H(() => { const h = window.__printahem, t = h.skrapLista[h.skrapLista.length - 1], m = h.karraMal(), c = t.userData.traff.getWorldPosition(new t.position.constructor()), r = h.karraRing.position;
  return { mal: m === t, d: Math.hypot(r.x - c.x, r.z - c.z), syns: h.karraRing.visible, text: t.userData.interaktion?.text?.() || '' }; });
ut.push(['2. etiketten säger "Lasta regntunnan på pirran"', /^Lasta regntunnan på pirran$/.test(info.text)]);
ut.push(['3. ringen ligger i tunnans träffyta (' + info.d.toFixed(3) + ' m)', info.syns && info.mal && info.d < 0.05]);
await p.screenshot({ path: '/tmp/pirra-fore.png' });
await H(() => { const h = window.__printahem; h.plockaSkrap(h.skrapLista[h.skrapLista.length - 1]); });
await p.waitForTimeout(800);
ut.push(['4. tunnan står på pirran', await H(() => window.__printahem.S.karraLast.length === 1)]);
await p.addStyleTag({ content: 'body > *:not(canvas){visibility:hidden!important}' }); await p.waitForTimeout(400); await p.screenshot({ path: '/tmp/pirra-last.png' });
for (const [t, ok] of ut) console.log(ok ? '✓' : '✗', t); console.log('etikett:', info.text);
console.log(fel.length ? fel.join('\n') : 'inga sidfel'); await b.close(); process.exit(ut.every((x) => x[1]) && !fel.length ? 0 : 1);
