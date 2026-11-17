// A-058: N. är struken, Bengt-Åkes hus vid vägen, avslöjandet dag 15 och kartan som öppnas. Kör: node verktyg/test-a058.mjs [url]
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
const html = await p.evaluate(() => document.documentElement.innerHTML.length);
const n = await p.evaluate(async () => { const r = await fetch(location.href); const t = await r.text(); return { nPunkt: /lådan märkt N\.|Lapp från N\.|Nabon/.test(t) }; });
ut.push([`N. finns inte kvar i spelet (${!n.nPunkt})`, !n.nPunkt]);
// huset från vägen
await p.evaluate(() => { const h = window.__printahem; h.spelare.pos.x = h.BENGT_LADA.x - 3; h.spelare.pos.z = h.BENGT_LADA.z - 4.5; h.tittaMot(h.BENGT_HUS.x, h.BENGT_HUS.z - 1, 0.6); });
await p.waitForTimeout(2500); await p.screenshot({ path: 'verktyg/test-a058-huset.png' });
const fore = await p.evaluate(() => { const h = window.__printahem; h.uppdateraMark(); return { g: { ...h.spelare.granser }, tips: !!h.S.mark.tips }; });
// avslöjandet dag 15
await p.evaluate(() => { const h = window.__printahem, S = h.S; S.dag = 15; S.kapitel = 3; S.respekt = 60; h.spelare.pos.x = -1; h.spelare.pos.z = 16; window.__printahem.dagStartTid = 0; });
const r = await p.evaluate(async () => { const h = window.__printahem, S = h.S; for (let i = 0; i < 40 && !S.bengtAvslojad; i++) { await new Promise((x) => setTimeout(x, 1000)); } return { avs: S.bengtAvslojad }; });
await p.waitForTimeout(3500); await p.screenshot({ path: 'verktyg/test-a058-avslojande.png' });
ut.push([`avslöjandet vid skylten dag ${r.avs}`, r.avs === 15]);
const efter = await p.evaluate(() => { const h = window.__printahem, S = h.S; const tidig = (h.kollaMarkTips(), !!S.mark.tips); S.dag = 16; h.kollaMarkTips(); h.uppdateraMark(); return { tidig, tips: !!S.mark.tips, g: { ...h.spelare.granser } }; });
ut.push([`kartan är stängd dag 15 (tips ${efter.tidig}) och öppen dag 16: maxX ${fore.g.maxX} → ${efter.g.maxX}, minZ ${fore.g.minZ} → ${efter.g.minZ}`, !fore.tips && !efter.tidig && efter.tips && efter.g.maxX > fore.g.maxX]);
for (const [t, ok] of ut) console.log(ok ? '✓' : '✗', t);
console.log(fel.length ? fel.join('\n') : 'inga sidfel'); await b.close(); process.exit(ut.every((x) => x[1]) && !fel.length ? 0 : 1);
