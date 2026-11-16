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
const a = await H(() => ({ kort: document.querySelectorAll('.dc-kort').length, ny: document.querySelectorAll('.dc-ny').length, salj: [...document.querySelectorAll('.dc-skort')].map((x) => x.dataset.dcs), vill: document.querySelector('.dc-skort.vill')?.dataset.dcs, info: !!document.querySelector('.dc-info h3'), bubbla: document.querySelector('.dc-bubbla')?.textContent.length }));
ut.push([`köpdelen har kort (${a.kort}) med Ny-etiketter (${a.ny}) och ett infokort`, a.kort > 2 && a.ny > 0 && a.info]);
ut.push([`dagens vara först i säljraden med +50 % (${a.salj.join(', ')})`, a.vill === 'pall' && a.salj[0] === 'pall']);
ut.push(['Ali har en pratbubbla', a.bubbla > 3]);
// sälja: klick markerar alla av sorten, − ändrar antalet, Sälj säljer
await H(() => document.querySelector('[data-dcs="kruka"]').click()); await p.waitForTimeout(200);
await H(() => document.querySelector('[data-dcminus="kruka"]').click()); await p.waitForTimeout(200);
const b2 = await H(() => ({ antal: document.querySelector('[data-dcs="kruka"] .dc-antal b')?.textContent, sum: document.querySelectorAll('.dc-sum')[1]?.textContent }));
ut.push([`klick markerar alla krukor, − ger 3 (${b2.antal}, "${b2.sum}")`, b2.antal === '3' && /3 markerade/.test(b2.sum)]);
const c = await H(() => { const h = window.__printahem, S = h.S, fore = S.mynt; document.querySelector('[data-dcsalj]').click(); return { kvar: h.antalInv('kruka'), mer: S.mynt - fore }; });
ut.push([`Sälj säljer 3 krukor (1 kvar, +${c.mer} kr)`, c.kvar === 1 && c.mer > 0]);
// köpa: välj två, för lite pengar → Ali säger vad som saknas, en replik
await p.waitForTimeout(300);
const d = await H(() => { const h = window.__printahem, S = h.S; S.mynt = 10; h.oppnaMarknad(); const ks = [...document.querySelectorAll('.dc-kort:not(.last)')].slice(0, 2); ks[0].click(); document.querySelectorAll('.dc-kort:not(.last)')[1].click(); const sum = document.querySelector('.dc-sum').textContent; document.querySelector('[data-dckopa]').click(); return { sum, bubbla: document.querySelector('.dc-bubbla').textContent, saknar: !!document.querySelector('.dc-saknar') }; });
ut.push([`två valda (${d.sum}) och Ali säger vad som saknas`, /2 valda/.test(d.sum) && /Du saknar/.test(d.bubbla)]);
const e = await H(() => { const h = window.__printahem, S = h.S; S.mynt = 5000; h.oppnaMarknad(); const fore = S.mynt; document.querySelector('[data-dckopa]').click(); return { betalt: fore - S.mynt, bubbla: document.querySelector('.dc-bubbla').textContent }; });
ut.push([`Köp köper de valda (${e.betalt} kr), högst en köpreplik per besök`, e.betalt > 0 && !/Du saknar/.test(e.bubbla)]);
// säljlådan: samma rad
const f = await H(() => { const h = window.__printahem; h.ui.stangButik(); h.laggTill('nyckelring', 2); window.__printahem.oppnaSaljlada?.() ; return !!document.querySelector('.dc-rad .dc-skort'); });
ut.push(['säljlådan använder samma säljrad', f]);
for (const [t, ok] of ut) console.log(ok ? '✓' : '✗', t);
console.log(fel.length ? fel.join('\n') : 'inga sidfel'); await b.close(); process.exit(ut.every((x) => x[1]) && !fel.length ? 0 : 1);
