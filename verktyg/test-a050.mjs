// A-050-test. Kör: node verktyg/test-a050.mjs [url]
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
// A-050: storysaker kan inte säljas, stickningen går via Rolf och tillbaka, kärran är tacket för flasköppnaren
const ut = [];
const nej = await p.evaluate(() => window.__printahem.aliNejFor('burk_vante'));
ut.push([`Ali vägrar köpa grytvantarna ("${nej}")`, /din mammas/.test(nej)]);
await p.evaluate(() => { const S = window.__printahem.S; S.stickningHosRolf = S.dag; S.dag += 1; });
await p.waitForTimeout(26000);
const st = await p.evaluate(() => ({ tillbaka: !!window.__printahem.S.stickningTillbaka, ilada: window.__printahem.S.post.tillMig.includes('sak:h_stickning') }));
ut.push([`stickningen ligger i lådan nästa dag (${JSON.stringify(st)})`, st.tillbaka && st.ilada]);
const k = await p.evaluate(() => { const R = window.__printahem.ROLF_LISTA()[1]; return { vara: R.vara, forskott: R.forskott || [], belo: R.belo }; });
ut.push([`kärran är tacket för flasköppnaren (${JSON.stringify(k)})`, k.vara === 'flaskoppnare' && !k.forskott.includes('karra') && k.belo.includes('karra')]);
for (const [t, ok] of ut) console.log(ok ? '✓' : '✗', t);
console.log(fel.length ? fel.join('\n') : 'inga sidfel'); await b.close(); process.exit(ut.every((x) => x[1]) && !fel.length ? 0 : 1);
