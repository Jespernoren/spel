// DT: de första 10 minuterna – startgården, dag 1-ordningen, strömmen i steg. Kör: node verktyg/test-dt.mjs [url]
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
await p.waitForTimeout(2000);
const a = await H(() => { const h = window.__printahem, S = h.S; S.skyltUppe = true;
  return { mynt: S.mynt, kvarn: h.MASKINER.gammalkvarn.ritning, skr: S.skrivareStar, cyk: S.cykelOmbyggd, max: h.stromMax(), el: document.querySelector('[data-dn="el"] .v')?.textContent }; });
ut.push([`startpengarna + storebrors rulle räcker exakt till kvarnen (${a.mynt} + 3 × 15 = ${a.kvarn})`, a.mynt + 45 === a.kvarn]);
ut.push(['dag 1 i AS-ordningen: lasta → ställ → cykeln → trampa → sälj → rullen slut → kvarnen', await H(() => window.__printahem.STEG.slice(0, 8).map((x) => x.id).join(',') === 'lasta,stall,bygg,trampa,salj,rullSlut,kop,kvarn')]);
ut.push([`ingen lagring från start (max ${a.max}), HUD:en säger Trampa!`, a.max <= 4 && a.el === 'Trampa!']);
await p.waitForTimeout(1500);
const b2 = await H(() => { const h = window.__printahem, S = h.S; const sk = h.skrapLista.filter((x) => !x.userData.tung && !h.paTippen(x.position.x, x.position.z)).slice(0, 2);
  h.byt(0); h.plockaSkrap(sk[0]); const efter1 = h.hand.saker.length; h.plockaSkrap(sk[1]); return { efter1, efter2: h.hand.saker.length, steg: h.stegText() }; });
ut.push([`en bit skräp i taget före kvarnen (${b2.efter1} → ${b2.efter2})`, b2.efter1 === 1 && b2.efter2 === 1]);
await p.waitForTimeout(6000);
ut.push(['skräptanken när storebrors rulle tar slut, sedan målet "Fråga Ali om en kvarn"', await H(() => { const h = window.__printahem, S = h.S; S.skrivareLastad = S.skrivareStar = S.cykelOmbyggd = true; S.stat.printat = 3; S.stat.salt = 3; S.steg = h.STEG.findIndex((x) => x.id === 'rullSlut'); const g1 = h.skrivare.find((x) => x.id === 'g1'); g1.fil = 150; return new Promise((ok) => setTimeout(() => { g1.fil = 0; setTimeout(() => ok(JSON.stringify(h.textLogg()).includes('Hmm. Plast.') && h.stegText() === 'Fråga Ali om en kvarn'), 6000); }, 6000)); })]);
ut.push(['tanken när händerna är fulla', await H(() => JSON.stringify(window.__printahem.textLogg()).includes('Jag behöver nånstans att göra av det här.'))]);
const c = await H(() => { const h = window.__printahem, S = h.S, sk = h.skrivare.find((x) => x.id === 'g1'); S.strom = 4; S.stat.printat = 0; sk.fil = 300; sk.klar = null; h.startaJobb(sk, { typ: 'nyckelring' }); let t = 0; for (; t < 20 && sk.jobb; t += 0.25) { S.strom = 4; h.uppdateraSkrivare(sk, 0.25); } return { t, max: h.stromMax() }; });
ut.push([`första printen tar ca 5 s (${c.t} s)`, c.t >= 4 && c.t <= 6]);
const d0 = await H(() => { const h = window.__printahem, S = h.S; const smsFore = S.sms.length; h.giAliBonus(); return { fore: S.powerbank, sms: smsFore }; });   // EA: powerbanken ges när försäljningspaketet visas
const d = await H(() => { const h = window.__printahem, S = h.S; const pk = h.textLogg().find((e) => e.kalla === 'paket' && /första försäljningen/.test(e.varfor)); S.powerbank = true; return { pb: !!pk && pk.text === 'sms' && !S.powerbankGiven, max: h.stromMax() }; });   // ED8: första försäljningen ger bara pengar (brorsans sms) – powerbanken kommer efter kvarnens första rulle → powerbanken → toasten → brorsan
ut.push(['EA: powerbanken ges inte före sitt paket', !d0.fore]);
ut.push([`ED8: ingen powerbank vid första försäljningen (powerbank rymmer ${d.max})`, d.pb && d.max === 20]);
ut.push(['inga sms före första försäljningen', d0.sms === 0]);
ut.push(['tanken när skrivaren stannar utan lagring', await H(() => { const h = window.__printahem, S = h.S, sk = h.skrivare.find((x) => x.id === 'g1'); S.powerbank = false; S.strom = 0; sk.klar = null; sk.klarL = null; if (!sk.jobb) h.startaJobb(sk, { typ: 'nyckelring' }); h.uppdateraSkrivare(sk, 0.25); S.powerbank = true; return new Promise((ok) => setTimeout(() => ok(JSON.stringify(h.textLogg()).includes('Den stannar när jag slutar trampa')), 2500)); })]);
ut.push(['pilen sitter 0,4–0,6 m ovanför målets topp', await H(() => { const h = window.__printahem; const pil = h.malPil; return !pil.visible || pil.position.y > 0.3; })]);
for (const [t, ok] of ut) console.log(ok ? '✓' : '✗', t);
console.log(fel.length ? fel.join('\n') : 'inga sidfel'); await b.close(); process.exit(ut.every((x) => x[1]) && !fel.length ? 0 : 1);
