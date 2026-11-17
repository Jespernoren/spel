// ED 1–2: introt visar att tiden går (tisdag → fredag, mamma byts) och cykeln kör inte in två gånger. Kör: node verktyg/test-ed12.mjs [url]
import { chromium } from '/home/claude/verktyg/node_modules/playwright-core/index.mjs';
const url = process.argv[2] || 'http://127.0.0.1:8765/printa-hem.html';
const b = await chromium.launch({ executablePath: '/usr/bin/google-chrome', args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--autoplay-policy=no-user-gesture-required'] });
const p = await (await b.newContext({ viewport: { width: 1280, height: 720 } })).newPage(); const fel = [];
p.on('pageerror', (e) => fel.push('sidfel: ' + e.message));
await p.goto(url); await p.waitForTimeout(6000);
const ut = [];
// starta introt (inte hoppa över)
await p.evaluate(() => { for (const k of document.querySelectorAll('button')) { const r = k.getBoundingClientRect(); const t = document.elementFromPoint(r.x + r.width / 2, r.y + r.height / 2); if (r.width && t && (t === k || k.contains(t)) && /^(Börja|Starta|BÖRJA)/.test(k.textContent.trim())) { k.click(); break; } } });
await p.waitForTimeout(1500);
const kortNr = () => p.evaluate(() => (window.__introLogg || []).filter((x) => x.h === 'visas').slice(-1)[0]?.kort || 0);
const text = () => p.evaluate(() => document.querySelector('.ph-intro-ord')?.textContent.trim() || '');
let sett = {}, kalendrar = [];
for (let n = 0; n < 120; n++) {
  const t = await text(), k = await kortNr();
  if (/Hon sa det igen/.test(t) && !sett.igen) { sett.igen = k;
    for (let r = 0; r < 4; r++) { await p.waitForTimeout(1300); kalendrar.push(await p.evaluate(() => { const syns = (e) => !e.classList.contains('radlager') || e.classList.contains('rita'); const k = [...document.querySelectorAll('.ph-is svg.kal')].filter(syns).map((e) => (e.textContent.match(/[A-ZÅÄÖ]+DAG/g) || []).slice(-1)[0]); const m = [...document.querySelectorAll('.ph-is .radlager:not(.kal)')].filter(syns).length; return (k.slice(-1)[0] || '') + '/' + m + ' mamma'; })); }
    await p.screenshot({ path: 'verktyg/test-ed1-dagar.png' }); }
  if (/Vid soptippen står/.test(t) && !sett.gard) { sett.gard = k; await p.waitForTimeout(400); await p.evaluate(() => { const e = document.querySelector('.ph-is .in-fran-vanster'); if (e) e.dataset.markt = '1'; }); }
  if (/Lasta av skrivaren/.test(t) && !sett.lasta) { sett.lasta = k; await p.waitForTimeout(600); sett.sammaNod = await p.evaluate(() => document.querySelector('.ph-is .in-fran-vanster')?.dataset.markt === '1'); await p.screenshot({ path: 'verktyg/test-ed2-cykeln.png' }); break; }
  if (sett.gard && !sett.lasta) { await p.waitForTimeout(300); continue; }
  await p.keyboard.press('Space'); await p.waitForTimeout(700);
}
ut.push([`ED 1: kortet "Hon sa det igen" (kort ${sett.igen}) bläddrar kalendern: ${kalendrar.join(' → ')}`, !!sett.igen && new Set(kalendrar.map((x) => x.split('/')[0])).size >= 3 && kalendrar.every((x) => /\/[01] mamma/.test(x))]);
ut.push([`ED 2: cykeln på kort ${sett.lasta} är samma bild som på kort ${sett.gard} (startar inte om): ${sett.sammaNod}`, sett.sammaNod === true]);
for (const [t, ok] of ut) console.log(ok ? '✓' : '✗', t);
console.log(fel.length ? fel.join('\n') : 'inga sidfel'); await b.close(); process.exit(ut.every((x) => x[1]) && !fel.length ? 0 : 1);
