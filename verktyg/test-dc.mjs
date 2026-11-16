// DC: Alis butik på en sida – köpa (rutnät, infokort, Köp), sälja (rad, markera alla av sorten, −/+), säljlådan med samma rad. Kör: node verktyg/test-dc.mjs [url]
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
await p.waitForTimeout(2500);
await H(() => { document.querySelectorAll('.ph-kap').forEach((x) => x.remove()); const h = window.__printahem, S = h.S; S.dag = 4; S.kapitel = 1; S.skyltUppe = true; S.mynt = 40; S.aliVill = { dag: 4, typ: 'pall' }; h.laggTill('kruka', 4); h.laggTill('nyckelring', 3); h.laggTill('pall', 2); h.oppnaMarknad(); });
await p.waitForTimeout(500);
const a = await H(() => ({ kort: document.querySelectorAll('.dc-k2 [data-kopnu]').length, ny: document.querySelectorAll('.dc-k2-lapp.ny').length, salj: [...document.querySelectorAll('[data-saljen]')].map((x) => x.dataset.saljen), vill: document.querySelector('.dc-s2.ali [data-saljen]')?.dataset.saljen, allt: !!document.querySelector('[data-saljallt]'), bubbla: (document.querySelector('.dc-bubbla')?.textContent || '').length }));
ut.push([`EM 33: varje köpkort har en egen knapp (${a.kort}) och Ny-lappar (${a.ny})`, a.kort >= 2 && a.ny > 0]);
ut.push([`dagens vara först med Alis gula list (${a.salj.join(', ')}), och ett Sälj allt-kort`, a.vill === 'pall' && a.salj[0] === 'pall' && a.allt]);
ut.push(['Ali har en pratbubbla', a.bubbla > 3]);
const c = await H(() => { const h = window.__printahem, S = h.S, fore = S.mynt, f0 = h.antalInv('kruka'); document.querySelector('[data-saljen="kruka"]').click(); return { kvar: f0 - h.antalInv('kruka'), mer: S.mynt - fore }; });
ut.push([`Sälj en säljer en kruka (+${c.mer} kr)`, c.kvar === 1 && c.mer > 0]);
await p.waitForTimeout(300);
const d = await H(() => { const h = window.__printahem, S = h.S; S.mynt = 1; h.oppnaMarknad(); const k = [...document.querySelectorAll('.dc-k2:not(.last) [data-kopnu]')][0]; const txt = k.textContent; k.click(); return { txt, bubbla: document.querySelector('.dc-bubbla').textContent, mynt: S.mynt }; });
ut.push([`har man inte råd heter knappen "${d.txt}" och Ali säger vad som saknas`, /^Saknar/.test(d.txt) && /Du saknar/.test(d.bubbla) && d.mynt === 1]);
const e = await H(() => { const h = window.__printahem, S = h.S; S.mynt = 5000; h.oppnaMarknad(); const fore = S.mynt; document.querySelector('.dc-k2:not(.last) [data-kopnu]').click(); return { betalt: fore - S.mynt, bubbla: document.querySelector('.dc-bubbla').textContent }; });
ut.push([`Köp-knappen köper just det kortet (${e.betalt} kr)`, e.betalt > 0 && !/Du saknar/.test(e.bubbla)]);
// säljlådan: samma rad
const f = await H(() => { const h = window.__printahem; h.ui.stangButik(); h.laggTill('nyckelring', 2); window.__printahem.oppnaSaljlada?.() ; return !!document.querySelector('.dc-rad .dc-skort'); });
ut.push(['säljlådan använder samma säljrad', f]);
for (const [t, ok] of ut) console.log(ok ? '✓' : '✗', t);
console.log(fel.length ? fel.join('\n') : 'inga sidfel'); await b.close(); process.exit(ut.every((x) => x[1]) && !fel.length ? 0 : 1);
