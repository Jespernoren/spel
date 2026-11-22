// inkorg 63 p.2 (A-118): FORTSÄTT på morgonsidan svarar på första klicket – var som helst på knappen, direkt när sidan visas och efter 3 s,
// och med Enter och mellanslag. Riktig mus (page.mouse), ingen testkrok för klicket.
import fs from 'node:fs';
import { chromium } from '/home/claude/verktyg/node_modules/playwright-core/index.mjs';
const url = process.argv[2] || 'http://127.0.0.1:8765/ax2.html';
const b = await chromium.launch({ executablePath: '/usr/bin/google-chrome', args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader'] });
const ut = []; const ok = (v, t) => ut.push(`${v ? '✓' : '✗'} ${t}`);
const fel = [];

async function nySida() {   /* nytt spel som en spelare: STARTA → namn → introt (Enter hoppar över) → dag 1:s morgonsida */
  const ctx = await b.newContext({ viewport: { width: 1280, height: 720 } }); const p = await ctx.newPage(); p.on('pageerror', (e) => fel.push(e.message));
  await p.goto(url); await p.waitForSelector('.br-starta', { timeout: 20000 }); await p.waitForTimeout(1500);
  await p.click('.br-starta'); await p.waitForTimeout(1200);
  const namn = await p.$('input[placeholder*="namn"]'); if (namn) { await namn.fill('Testaren'); await p.keyboard.press('Enter'); } await p.waitForTimeout(2500);
  let syns = false; for (let i = 0; i < 10 && !syns; i++) { syns = await p.evaluate(() => !!document.querySelector('.ph-med:not([hidden]) .ph-dk-a4 .ph-fortsatt')); if (!syns) { await p.keyboard.press('Enter'); await p.waitForTimeout(1500); syns = await p.evaluate(() => !!document.querySelector('.ph-med:not([hidden]) .ph-dk-a4 .ph-fortsatt')); } }
  return { p, syns };
}
const oppet = (p) => p.evaluate(() => !!document.querySelector('.ph-med:not([hidden]) .ph-dk-a4 .ph-fortsatt'));
const punkter = async (p) => p.evaluate(() => { const r = document.querySelector('.ph-dk-a4 .ph-fortsatt').getBoundingClientRect(); const m = 4;
  return { mitt: [r.x + r.width / 2, r.y + r.height / 2], vanster: [r.x + m, r.y + r.height / 2], hoger: [r.right - m, r.y + r.height / 2], uppe: [r.x + r.width / 2, r.y + m], nere: [r.x + r.width / 2, r.bottom - m], hornUV: [r.x + m + 2, r.y + m] }; });

// 1. vad ligger under pekaren på knappen (mitt och kanter) direkt när sidan visas
{ const { p, syns } = await nySida(); ok(syns, 'morgonsidan med FORTSÄTT visas');
  const pt = await punkter(p);
  const traff = await p.evaluate((pt) => Object.fromEntries(Object.entries(pt).map(([k, [x, y]]) => { const e = document.elementFromPoint(x, y); return [k, !!e?.closest('.ph-fortsatt') ? 'knappen' : (e?.className || e?.tagName || 'inget')]; })), pt);
  const miss = Object.entries(traff).filter(([, v]) => v !== 'knappen');
  ok(!miss.length, `pekaren träffar knappen i mitten och vid kanterna${miss.length ? ' – inte: ' + miss.map(([k, v]) => `${k} → ${v}`).join(', ') : ''}`);
  // klick nära vänsterkanten direkt
  await p.mouse.click(...pt.vanster); await p.waitForTimeout(600);
  ok(!(await oppet(p)), 'ett klick nära kanten direkt när sidan visas stänger sidan');
  await p.close(); }
// 2. klick i mitten efter 3 s
{ const { p } = await nySida(); await p.waitForTimeout(3000); const pt = await punkter(p);
  await p.mouse.click(...pt.mitt); await p.waitForTimeout(600); ok(!(await oppet(p)), 'ett klick i mitten efter 3 s stänger sidan'); await p.close(); }
// 3. klick i övre hörnet
{ const { p } = await nySida(); const pt = await punkter(p);
  await p.mouse.click(...pt.hornUV); await p.waitForTimeout(600); ok(!(await oppet(p)), 'ett klick i knappens övre hörn stänger sidan'); await p.close(); }
// 4. Enter och mellanslag
for (const tang of ['Enter', 'Space']) { const { p } = await nySida(); await p.waitForTimeout(400); await p.keyboard.press(tang); await p.waitForTimeout(600);
  ok(!(await oppet(p)), `${tang === 'Space' ? 'mellanslag' : 'Enter'} stänger sidan`); await p.close(); }
ok(!fel.length, `0 sidfel (${fel.join(' · ') || 'inga'})`);
console.log(ut.join('\n')); await b.close(); process.exit(ut.some((x) => x.startsWith('✗')) ? 1 : 0);
