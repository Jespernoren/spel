// A-053 + A-054: Rudolfs böter (30 %, 100–2 500 kr) syns i HUD:en, Alis skylt, de nya texterna. Kör: node verktyg/test-a053.mjs [url]
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
const r = await p.evaluate(() => { const h = window.__printahem; return { b: [3000, 200, 50, 20000].map((m) => h.boterFor(m)), chefen: h.CHEFEN[0], spotta: h.HUMOR_T.spotta, mutor: h.TRIM.sopbil.beskr(1), kjelle: h.kjelleText(['har fått TAK', 'har fått en DÖRR']), kand: h.kand('rudolf') }; });
ut.push([`böterna: 3 000 → ${r.b[0]}, 200 → ${r.b[1]}, 50 → ${r.b[2]}, 20 000 → ${r.b[3]} kr`, r.b.join() === '900,100,50,2500']);
ut.push([`Rudolf är okänd före första fiffelbrevet (${r.kand})`, r.kand === false]);
ut.push([`nya texter: "${r.chefen}" · "${r.spotta[0]}" · "${r.spotta[3]}" · "${r.mutor}"`, /^Rudolf/.test(r.chefen) && /Använd\./.test(r.spotta[0]) && /fel ställe/.test(r.spotta[3]) && /kall bira/.test(r.mutor)]);
ut.push([`Kjelle: "${r.kjelle}"`, /har fått TAK\. Och en DÖRR\./.test(r.kjelle)]);
const varden = await p.evaluate(async () => { const h = window.__printahem; h.S.mynt = 3000; h.S.mynt -= 900; const v = []; const el = document.querySelector('[data-dn="kr"] .v'); new MutationObserver(() => v.push(el.textContent)).observe(el, { childList: true, characterData: true, subtree: true }); h.boterSyns(900); const fl = []; for (let i = 0; i < 16; i++) { await new Promise((r) => setTimeout(r, 100)); fl.push(!!document.querySelector('.boter-flyg')); } return { v, fl }; });
const unika = [...new Set(varden.v)];
ut.push([`HUD räknas ner: ${unika.join(' → ')}; röd "−900 kr" flyger ut: ${varden.fl.some(Boolean)}`, unika.length >= 2 && /3\s?000|2\s?[1-9]\d\d/.test(unika[0]) && /2\s?100/.test(unika[unika.length - 1]) && varden.fl.some(Boolean)]);
await p.evaluate(() => { const h = window.__printahem; h.S.mynt = 3000; h.boterSyns(900); h.S.mynt -= 900; });
await p.waitForTimeout(150); await p.screenshot({ path: 'verktyg/test-a053-boter.png' });
await p.evaluate(() => { const h = window.__printahem; h.S.humorN50 = true; h.ritaNyckelSkylt(); h.spelare.pos.x = h.ALI.x; h.spelare.pos.z = h.ALI.z - 3.2; h.tittaMot(h.ALI.x, h.ALI.z, 0.7); });
await p.waitForTimeout(1500); await p.screenshot({ path: 'verktyg/test-a055-disken.png' });
await p.evaluate(() => { const h = window.__printahem; h.spelare.pos.x = h.ALI.x + 0.6; h.spelare.pos.z = h.ALI.z - 4.5; h.tittaMot(h.ALI.x + 0.4, h.ALI.z, 0.7); });
await p.waitForTimeout(1500); await p.screenshot({ path: 'verktyg/test-a055-4m.png' });
for (const [t, ok] of ut) console.log(ok ? '✓' : '✗', t);
console.log(fel.length ? fel.join('\n') : 'inga sidfel'); await b.close(); process.exit(ut.every((x) => x[1]) && !fel.length ? 0 : 1);
