// EI 22: en trimsats hamnar i handen och monteras på maskinen med skruvdragaren. Kör: node verktyg/test-ei.mjs [url]
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
const r = await p.evaluate(() => { const h = window.__printahem, S = h.S; S.kvarnStar = true; h.ritaStart(); const fore = h.trimNiva('kvarn'); h.laggTill('byggsats:trim_kvarn'); const iHand = h.S.hotbar.some((x) => x?.typ === 'byggsats:trim_kvarn'); const m = h.MONTERA['byggsats:trim_kvarn']; const mal = m.mal(); m.gor(mal[0]); return { fore, iHand, efter: h.trimNiva('kvarn'), mal: mal.length }; });
ut.push([`trimsatsen i handen (${r.iHand}) och monterad: nivå ${r.fore} → ${r.efter}`, r.iHand && r.efter === r.fore + 1]);
for (const [t, ok] of ut) console.log(ok ? '✓' : '✗', t);
console.log(fel.length ? fel.join('\n') : 'inga sidfel'); await b.close(); process.exit(ut.every((x) => x[1]) && !fel.length ? 0 : 1);
