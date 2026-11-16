// DG: pirran tar bara tunnor, kanoten och tunnorna på tippen från dag 1 – en pirra i handen, rätt etikett, ringen i tunnans träffyta, tunnan står på pirran. Kör: node verktyg/test-pirra.mjs [url]
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
await p.waitForTimeout(3000);
const har = (t) => H((x) => window.__printahem.textLogg().filter((r) => JSON.stringify(r).includes(x)).length, t);
// 3. dag 1: kanoten och två tunnor på tippen
const d1 = await H(() => { const h = window.__printahem, T = h.skrapLista.filter((x) => Math.hypot(x.position.x + 30, x.position.z - 13) < 7.6); return { kanot: T.filter((x) => x.userData.sort === 'kajak').length, tunnor: T.filter((x) => x.userData.sort === 'tunna').length }; });
ut.push([`3. dag 1: kanoten (${d1.kanot}) och tunnorna (${d1.tunnor}) ligger på tippen`, d1.kanot >= 1 && d1.tunnor >= 2]);
await H(() => { const h = window.__printahem; const k = h.skrapLista.find((x) => x.userData.sort === 'kajak'), t = h.skrapLista.find((x) => x.userData.sort === 'tunna'); h.byt(0); h.plockaSkrap(k); h.plockaSkrap(k); h.plockaSkrap(t); h.plockaSkrap(t); });
await p.waitForTimeout(1500);
ut.push(['   kanoten: tanken "för stor" en gång (DJ, siktet ger kanottanken)', (await H(() => window.__printahem.textLogg().filter((r) => r[1] === 'tanke' && JSON.stringify(r).includes('Jag får komma på något annat sätt')).length)) === 1]);
ut.push(['   tunntanken en gång', (await har('Jag behöver något att köra den på')) >= 1]);
// 2. med pirran: småskräp, kanot och tunna
const r = await H(() => { const h = window.__printahem; h.S.sackkarra = true; h.laggTill('sackkarra'); h.valjTyp('sackkarra');
  const k = h.skrapLista.find((x) => x.userData.sort === 'kajak'), t = h.skrapLista.find((x) => x.userData.sort === 'tunna'), l = h.skrapLista.find((x) => !x.userData.tung);
  const etl = (l.userData.interaktion?.text?.() || '').replace('\u2060', ''), etk = (k.userData.interaktion?.text?.() || '').replace('\u2060', '');
  h.plockaSkrap(l); h.plockaSkrap(k); const fore = h.S.karraLast.length; h.plockaSkrap(t);
  return { l: h.skrapLista.includes(l), k: h.skrapLista.includes(k), t: !h.skrapLista.includes(t) && h.S.karraLast.length === fore + 1, etl, etk }; });
await p.waitForTimeout(1500);
ut.push(['2. småskräp ligger kvar ("' + r.etl + '")', r.l && r.etl === 'För liten för pirran']);
ut.push(['   kanoten ligger kvar ("' + r.etk + '")', r.k && r.etk === 'För stor att lyfta']);
ut.push(['   tunnan går', r.t]);
ut.push(['   tankarna för liten/för stor', (await har('för liten för pirran. Den tar jag med handen')) >= 1 && (await har('Jag får komma på något annat sätt')) >= 1]);
await p.addStyleTag({ content: 'body > *:not(canvas){visibility:hidden!important}' }); await p.waitForTimeout(400); await p.screenshot({ path: '/tmp/pirra-dg.png' });
for (const [t, ok] of ut) console.log(ok ? '✓' : '✗', t);
console.log(fel.length ? fel.join('\n') : 'inga sidfel'); await b.close(); process.exit(ut.every((x) => x[1]) && !fel.length ? 0 : 1);
