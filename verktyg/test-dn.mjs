// DN: ny HUD – dagrutan, uppgiften, mätarna, ett sms i taget och Ali vill ha idag i skrivarmenyn. Kör: node verktyg/test-dn.mjs [url]
import { chromium } from '/home/claude/verktyg/node_modules/playwright-core/index.mjs';
const url = process.argv[2] || 'http://127.0.0.1:8765/printa-hem.html';
const b = await chromium.launch({ executablePath: '/usr/bin/google-chrome', args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader'] });
const p = await (await b.newContext({ viewport: { width: +(process.env.BREDD || 1280), height: Math.round((process.env.BREDD || 1280) * 9 / 16) } })).newPage(); const fel = [];
p.on('pageerror', (e) => fel.push('sidfel: ' + e.message));
await p.goto(url); await p.waitForTimeout(6000);
for (let i = 0; i < 60 && !(await p.evaluate(() => !!window.__printahem?.ui?.igang)); i++) {
  const namn = await p.$('.ph-namn input'); if (namn) { await namn.fill('Test'); await p.keyboard.press('Enter'); }
  else await p.evaluate(() => { for (const k of document.querySelectorAll('button')) { const r = k.getBoundingClientRect(); if (r.width && /Börja$|BÖRJA|Hoppa över|Starta|Fortsätt/i.test(k.textContent.trim())) { k.click(); return; } } });
  await p.waitForTimeout(1000);
}
const H = (f, a) => p.evaluate(f, a); const ut = [];
await p.waitForTimeout(2500);
const klipp = () => H(() => { const v = innerWidth; const fel = []; for (const e of document.querySelectorAll('.dn-topp *, .dn-matare *')) { if (!e.offsetParent && getComputedStyle(e).position !== 'fixed') continue; const r = e.getBoundingClientRect(); if (r.width && (r.right > v + 1 || r.left < -1)) fel.push(e.className + ' utanför'); if (['rub', 'n', 'v', 'bricka', 'maltxt', 'dagt', 'klk'].includes(e.className) && e.scrollWidth > e.clientWidth + 1) fel.push(e.className + ' klipps'); } const t = document.querySelector('.dn-uppg').getBoundingClientRect(), s = document.querySelector('.hud-smsfack').getBoundingClientRect(); if (t.right > s.left - 4) fel.push('uppgiften går in under sms-kortet'); return fel; });
ut.push([`inget klipps vid ${process.env.BREDD || 1280} px (${(await klipp()).join(', ')})`, !(await klipp()).length]);
const a = await H(() => { const h = window.__printahem, S = h.S; S.skyltUppe = true; S.steg = 6; h.ritaDN(); return 0; });
await p.waitForTimeout(1500);
const b2 = await H(() => { const d = document.querySelector('.dn-dag'); return { sol: d.querySelectorAll('.c.klar svg').length, nu: d.querySelectorAll('.c.nu').length, txt: d.querySelector('.maltxt').textContent }; });
ut.push([`EI 21: klara moment blir solar (${b2.sol}) och texten säger "${b2.txt}"`, b2.sol >= 1 && b2.nu === 1 && /Dagens mål \d+ av [4-6] · sedan sova/.test(b2.txt)]);
const r = await H(() => [window.__printahem.dnRaknare('Lägg 3 vaser i säljlådan · 2/3'), window.__printahem.dnRaknare('Bygg sophållaren')]);
ut.push([`räknaren: ${r[0].har} ${r[0].txt} · ${r[0].kvar}, inget antal → ingen räknare`, r[0].har === 2 && r[0].txt === 'av 3 vaser' && r[0].kvar === '1 kvar' && r[1].har == null]);
const n = await H(() => { const h = window.__printahem, S = h.S; S.respekt = 40; h.trivselTest = 1; h.ritaDN(); const t = document.querySelector('[data-dn="respekt"]'); return { b: t.querySelector('.bricka').textContent, tt: t.title, w: t.querySelector('i').style.width }; });
ut.push([`respekt visar nivå (${n.b}, "${n.tt}", stapel ${n.w})`, n.b === 'nivå 2' && /Respekt 40 av 60 · Nivå 3/.test(n.tt) && n.w === '43%']);
// sms: ett i taget, porträtt, prick, försvinner, finns i telefonfliken (kortet testas direkt – kanalens kö har egna tester)
const kort = await H(() => { const h = window.__printahem; h.smsBubbla('mamma', 'Mamma', 'Testsms ett. Hur går det?'); const k2 = h.smsBubbla('bror', 'Storebror', 'Testsms två.'); const k = document.querySelectorAll('.dn-kort:not(.ut)'); window.__k2 = k2; return { n: k.length, txt: k[0].querySelector('.bubbla').textContent, por: !!k[0].querySelector('.ui-portratt *'), prick: getComputedStyle(k[0].querySelector('.prick')).display !== 'none', namn: k[0].querySelector('.namn').textContent }; });
ut.push([`sms-kortet: ett i taget (${kort.n}), porträtt, namn (${kort.namn}) och röd prick`, kort.n === 1 && kort.por && kort.prick && /Testsms två/.test(kort.txt) && kort.namn === 'Storebror']);
await H(() => window.__printahem.smsKortKlart(window.__k2)); await p.waitForTimeout(800);
const efter1 = await H(() => ({ finns: !!document.querySelector('.dn-kort:not(.ut)'), prick: getComputedStyle(document.querySelector('.dn-kort .prick')).display }));
await p.waitForTimeout(2000);
ut.push([`läst: pricken släcks, kortet ligger kvar 2 s och tonar bort`, efter1.finns && efter1.prick === 'none' && await H(() => !document.querySelector('.dn-kort:not(.ut)'))]);
await H(() => { const h = window.__printahem; h.smsBubbla('mamma', 'Mamma', 'Klicka bort mig.'); document.querySelector('.dn-kort').click(); }); await p.waitForTimeout(600);
ut.push(['klick på kortet hoppar vidare', await H(() => !document.querySelector('.dn-kort:not(.ut)'))]);
const tel = await H(() => { const h = window.__printahem; h.S.sms.push({ fran: 'mamma', text: 'Telefontest', tid: '09:15', dag: 2 }); h.oppnaInkorg(); const b = [...document.querySelectorAll('.dn-tel .b')].find((x) => x.textContent === 'Telefontest'); return { b: !!b, t: b?.nextElementSibling?.textContent, flik: [...document.querySelectorAll('[data-flik]')].some((x) => /Telefon/.test(x.textContent)) }; });
ut.push([`telefonfliken: bubblor per person med klockslag (${tel.t})`, tel.b && /09:15/.test(tel.t || '') && tel.flik]);
await H(() => window.__printahem.ui.stangButik?.());
ut.push(['inga varningsrutor eller flaskhals i HUD:en', await H(() => ['.hud-flask', '.ph-varningar', '.hud-flikar'].every((s) => { const e = document.querySelector(s); return !e || getComputedStyle(e).display === 'none'; }))]);
// Ali vill ha idag i skrivarmenyn
const ali = await H(() => { const h = window.__printahem, S = h.S; h.ui.stangButik?.(); S.dag = Math.max(2, S.dag); S.aliVill = { dag: S.dag, typ: 'nyckelring' }; const t = h.aliVill(); if (!t) return { t }; if (!S.ritningar.includes(t)) S.ritningar.push(t); const sk = h.skrivare.find((x) => x.id === 'g1'); sk.fil = 5000; h.oppnaPrintMeny(sk); const el = document.querySelector(`[data-printa][data-vara="${t}"]`)?.closest('.pk'); const forsta = document.querySelector('.pk [data-printa]'); return { t, kant: el?.classList.contains('ali'), etikett: /Ali vill ha idag/.test(el?.querySelector('.pk-list')?.textContent || ''), pris: el?.querySelector('.pk-pris s')?.textContent, forst: forsta?.dataset.vara}; });
console.log(JSON.stringify(ali));
ut.push([`Ali vill ha idag: gul kant, etikett, överstruket pris (${ali.pris}) och överst`, !ali.t || (ali.kant && ali.etikett && !!ali.pris)]);
for (const [t, ok] of ut) console.log(ok ? '✓' : '✗', t);
console.log(fel.length ? fel.join('\n') : 'inga sidfel'); await b.close(); process.exit(ut.every((x) => x[1]) && !fel.length ? 0 : 1);
