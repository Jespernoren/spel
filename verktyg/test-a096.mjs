// A-096 (inkorg 37): introt v5 shot för shot. En bild per shot i verktyg/a096/ (samma numrering som manuset),
// alla shots i manusets ordning, de nya replikerna, vadet i samtalet och 0 sidfel. Kör: node verktyg/test-a096.mjs [url]
import fs from 'node:fs';
import { chromium } from '/home/claude/verktyg/node_modules/playwright-core/index.mjs';
const url = process.argv[2] || 'http://127.0.0.1:8765/printa-hem.html';
const UT = new URL('./a096/', import.meta.url).pathname; fs.mkdirSync(UT, { recursive: true });
const b = await chromium.launch({ executablePath: '/usr/bin/google-chrome', args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--autoplay-policy=no-user-gesture-required'] });
const p = await (await b.newContext({ viewport: { width: 1280, height: 800 } })).newPage(); const fel = [];
p.on('pageerror', (e) => fel.push(e.message));
await p.addInitScript(() => localStorage.setItem('spar:printahem2:v1', JSON.stringify({ spelarNamn: 'Test' })));
await p.goto(url); await p.waitForTimeout(4000);
await p.evaluate(() => { window.__introLogg = []; window.__introRepliker = []; window.__printahem.visaIntroDirekt(); });
const VANTA = { '1': 2200, '2': 1800, '3a': 1700, '3b': 1500, '3c': 1300, '4': 1800, '5': 2600, '6': 2300, '6b': 1700, '7': 1700, '8': 2200, '9': 4700, '10': 3000, '11': 2200, '12': 7000, '13': 2600, '14': 250, '15': 4300, '16': 2500, '16b': 1500 };
const sett = []; const t0 = Date.now();
while (Date.now() - t0 < 200000) {
  const s = await p.evaluate(() => ({ shots: (window.__introLogg || []).filter((x) => x.h === 'shot').map((x) => x.x), kvar: !!document.querySelector('.ph-intro3') }));
  const ny = s.shots[sett.length];
  if (ny != null) { sett.push(ny); await p.waitForTimeout(VANTA[ny] ?? 1200); await p.locator('.ph-intro3 .ph-intro-kort').screenshot({ path: `${UT}shot-${ny}.png` }).catch(() => {}); continue; }
  if (!s.kvar) break; await p.waitForTimeout(100);
}
const R = await p.evaluate(() => (window.__introRepliker || []).map((r) => r.text));
const tider = await p.evaluate(() => { const L = (window.__introLogg || []).filter((x) => x.h === 'shot'); return L.map((x, i) => [x.x, ((L[i + 1]?.t ?? (window.__introLogg.find((y) => y.h === 'slut')?.t || x.t)) - x.t) / 1000]); });
const rep = await p.evaluate(() => (window.__introRepliker || []).map((r) => [r.ruta, r.text.slice(0, 30), r.kalla, r.start && r.slut ? (r.slut - r.start) / 1000 : null, r.reserv]));
console.log(tider.map(([s, t]) => `${s}:${t.toFixed(1)}`).join(' ')); for (const r of rep) console.log(JSON.stringify(r));
const tid = await p.evaluate(() => { const L = window.__introLogg || [], f = L.find((x) => x.h === 'visas'), sl = L.find((x) => x.h === 'slut'); return f && sl ? (sl.t - f.t) / 1000 : 0; });
/* andra gången: världsbilderna är redan gjorda (headless ritar dem i programvara, 2–4 s styck) – det är introts riktiga längd */
await p.waitForTimeout(1500); await p.evaluate(() => { window.__introLogg = []; window.__printahem.visaIntroDirekt(); });
await p.waitForFunction(() => (window.__introLogg || []).some((x) => x.h === 'slut'), null, { timeout: 200000, polling: 200 });
const tid2 = await p.evaluate(() => { const L = window.__introLogg || [], f = L.find((x) => x.h === 'visas'), sl = L.find((x) => x.h === 'slut'); return f && sl ? (sl.t - f.t) / 1000 : 0; });
/* längden utan headless-väntan: varje shot = luften + replikerna (uppmätt röstlängd) + luft, eller shotens tid när bilden rör sig */
const nominell = await p.evaluate(() => { const R = window.__introRepliker || [], dur = {}; for (const r of R) if (r.start && r.slut) dur[r.text] = (r.slut - r.start) / 1000;
  return window.__intro3.INTRO3.reduce((sum, x) => { let t = 0.3; for (const [, txt, o = {}] of x.tal) t += Math.min(0.8, (o.fore || 0) / 1000) + (dur[txt] ?? 2) + 0.3 + (o.efter || 0) / 1000; if (x.rorelse) t = Math.max(t, x.tid / 1000); return sum + t + (x.ljudEfter ? 0.35 : 0) + (x.svartEfter || 0) / 1000; }, 0); });
const MANUS = ['1', '2', '3a', '3b', '3c', '4', '5', '6', '6b', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '16b'];
const ut = [];
ut.push([`alla shots i manusets ordning (${sett.join(' ')})`, sett.join(',') === MANUS.join(',')]);
for (const t of ['Hon sa det igen.', 'Och igen.', 'Okej.', 'Ryggan på…', '…och storebrors gamla 3D-skrivare.', 'Förbi skolan, förbi där husen tar slut.', 'Mm?', 'Var ÄR du?', 'Vid soptippen. Jag bor här nu.', 'Förra gången du drog höll du i två dagar.', 'Du kommer hem till jul. Det gör du alltid.', 'Inte den här gången. Då firar jag jul ensam.', 'Ingen mamma som tjatar.', 'Tänk om det här kunde bli ett riktigt hem? Till jul.', 'Jag behöver bara komma på hur.'])
  ut.push([`repliken "${t}"`, R.includes(t)]);
ut.push(['"Och igen." två gånger', R.filter((t) => t === 'Och igen.').length === 2]);
ut.push(['vadet sägs i samtalet, inte under packningen', R.indexOf('Du kommer hem till jul. Det gör du alltid.') > R.indexOf('Mm?') && !R.some((t) => /hemma igen till jul|förbi affären/.test(t))]);
ut.push([`längd ${nominell.toFixed(1)} s räknat på rösterna (72–88) · i headless ${tid2.toFixed(1)} s andra gången, ${tid.toFixed(1)} s första (världen ritas i programvara)`, nominell >= 72 && nominell <= 88]);
ut.push([`0 sidfel`, fel.length === 0, fel.slice(0, 2).join(' | ')]);
const md = `# Introt v5 (A-096)\n\n${nominell.toFixed(1)} s räknat på rösterna · headless ${tid2.toFixed(1)} s (första gången ${tid.toFixed(1)} s) · ${R.length} repliker\n\n| Shot | Bild |\n|---|---|\n${sett.map((s) => `| ${s} | shot-${s}.png |`).join('\n')}\n`;
fs.writeFileSync(UT + 'shots.md', md);
for (const [t, ok, x] of ut) console.log(`${ok ? '✓' : '✗'} ${t} ${x || ''}`);
await b.close(); process.exit(ut.every((x) => x[1]) ? 0 : 1);
