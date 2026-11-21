// Inkorg 52 (A-107): veven och cykeln med riktig mus (ingen testkrok), och generatorn som inte får försvinna.
// Kör: node verktyg/test-a107.mjs [url]
import fs from 'node:fs';
import { chromium } from '/home/claude/verktyg/node_modules/playwright-core/index.mjs';
const url = process.argv[2] || 'http://127.0.0.1:8765/ax2.html';
const b = await chromium.launch({ executablePath: '/usr/bin/google-chrome', args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader'] });
const ut = [], fel = [];
const spar = fs.readFileSync(new URL('./sparfiler/start-dag2.json', import.meta.url), 'utf8');
const p = await b.newPage({ viewport: { width: 1280, height: 720 } }); p.on('pageerror', (e) => fel.push(e.message));
await p.addInitScript((spar) => { if (!sessionStorage.getItem('t')) { sessionStorage.setItem('t', 1); localStorage.clear(); localStorage.setItem('spar:printahem2:v1', spar); } }, spar);
await p.goto(url); await p.waitForTimeout(5000);
await p.waitForFunction(() => window.__startaSpel && document.querySelector('.br-starta'), null, { timeout: 8000 }).then(() => p.evaluate(() => window.__startaSpel())).catch(() => {});
await p.waitForTimeout(3000); for (let i = 0; i < 20 && await p.evaluate(() => !!document.querySelector('.ph-med:not([hidden]), .ph-kapkort')); i++) { await p.keyboard.press('Enter'); await p.waitForTimeout(400); }
await p.waitForTimeout(1500);
// ställ spelaren framför saken och låt spelets egen sikte-kod (strålen från mitten) välja – inget hovrad sätts av testet
const stall = (namn) => p.evaluate((namn) => {
  const P = window.__printahem, sp = P.spelare, o = namn === 'vev' ? P.vevYtaObj() : P.cykelObj(); const V = sp.pos.constructor, c = new V(); o.getWorldPosition(c);
  const I = P.interaktorObj(); let bast = null;
  for (let i = 0; i < 24; i++) { const v = i * Math.PI / 12, d = 1.6, x = c.x + Math.sin(v) * d, z = c.z + Math.cos(v) * d;
    sp.pos.set(x, sp.pos.y, z); sp.yaw = Math.atan2(-(c.x - x), -(c.z - z)); sp.pitch = Math.atan2(c.y - 1.6, d);
    P.kameraObj().position.set(x, 1.6, z); P.kameraObj().rotation.set(sp.pitch, sp.yaw, 0, 'YXZ'); P.kameraObj().updateMatrixWorld(true); P.uppdateraSikte?.();
    if (I.hovrad === o || (namn === 'cykel' && I.hovrad && (I.hovrad === o || o.children?.includes?.(I.hovrad)))) { bast = i; break; } }
  return { hittad: bast != null, hovrad: I.hovrad?.name || I.hovrad?.userData?.typ || String(I.hovrad?.uuid || 'inget').slice(0, 8), text: (() => { try { const t = I.hovrad?.userData.interaktion.text; return typeof t === 'function' ? t(I.hovrad) : t; } catch { return ''; } })() };
}, namn);
// 1. veven
await p.evaluate(() => { const S = window.__printahem.S; S.kvarnKopt = true; S.kvarnStar = true; S.kvarn.motor = false; S.kvarn.tratt = 4; S.kvarn.ut = 0; });
await p.waitForTimeout(500);
const v = await stall('vev'); const t0 = await p.evaluate(() => [window.__printahem.S.kvarn.tratt, window.__printahem.S.stat.malt || 0, window.__printahem.S.kvarn.prog || 0]);
await p.mouse.move(640, 360); await p.mouse.down(); await p.waitForTimeout(4000); await p.mouse.up();
const t1 = await p.evaluate(() => [window.__printahem.S.kvarn.tratt, window.__printahem.S.stat.malt || 0, window.__printahem.S.kvarn.prog || 0]);
ut.push([`siktet står på veven med riktig mus (${v.hovrad}: "${v.text}")`, v.hittad && /veva/i.test(v.text || '')]);
ut.push([`hålla musen vevar: tratt ${t0[0]} → ${t1[0]}, malt ${t0[1]} → ${t1[1]}, prog ${(+t0[2]).toFixed(2)} → ${(+t1[2]).toFixed(2)}`, t1[0] < t0[0] || t1[1] > t0[1] || t1[2] > t0[2]]);
// 2. cykeln (trampa)
await p.evaluate(() => { const S = window.__printahem.S; S.strom = 0; });
const c = await stall('cykel'); const s0 = await p.evaluate(() => window.__printahem.S.strom);
await p.mouse.down(); await p.waitForTimeout(3000); await p.mouse.up();
const s1 = await p.evaluate(() => window.__printahem.S.strom);
ut.push([`siktet står på cykeln (${c.hovrad}: "${c.text}")`, c.hittad]);
ut.push([`hålla musen trampar: ström ${(+s0).toFixed(1)} → ${(+s1).toFixed(1)}`, s1 > s0]);
// 3. generatorn försvinner inte
const gen = async (hur) => { await p.evaluate((hur) => { const P = window.__printahem, S = P.S; S.skrivareStar = true; S.cykelOmbyggd = false; S.generatorStar = false; S.cykelStar = false;
    for (const a of [S.hotbar, S.ryggsack, S.kistan]) a.forEach((x, i) => { if (x?.typ === 'byggsats:generator') a[i] = null; });
    if (hur === 'kistan') { const i = S.kistan.findIndex((x) => !x); S.kistan[i >= 0 ? i : 0] = { typ: 'byggsats:generator', n: 1 }; }
    if (hur === 'ryggsack') { const i = S.ryggsack.findIndex((x) => !x); S.ryggsack[i >= 0 ? i : 0] = { typ: 'byggsats:generator', n: 1 }; } }, hur);
  await p.waitForTimeout(3000);
  return p.evaluate(() => { const S = window.__printahem.S; return [S.hotbar.some((x) => x?.typ === 'byggsats:generator'), S.ryggsack.some((x) => x?.typ === 'byggsats:generator'), S.kistan.some((x) => x?.typ === 'byggsats:generator')]; }); };
for (const hur of ['kistan', 'ryggsack', 'borta']) { const [rad, ry, ki] = await gen(hur); ut.push([`generatorn ${hur === 'borta' ? 'borttagen helt' : 'i ' + hur}: tillbaka i verktygsraden inom 3 s (rad ${rad}, ryggsäck ${ry}, kista ${ki})`, rad && !ry && !ki]); }
{ const pris = await p.evaluate(() => { const P = window.__printahem; return P.saljPris('byggsats:generator'); });
  ut.push([`generatorn går inte att sälja till Ali medan den behövs (pris ${pris}) – så försvann den för sonen`, pris === 0]); }
const brott = await p.evaluate(() => window.__printahem.textLogg().filter((e) => e.kalla === 'brott' && /SAK FÖR UPPGIFT/.test(e.vem)).length);
ut.push([`SAK FÖR UPPGIFT SAKNAS flaggas när generatorn var borta helt (${brott})`, brott >= 1]);
ut.push([`0 sidfel (${fel.join(' | ') || 'inga'})`, !fel.length]);
for (const [t, ok] of ut) console.log(`${ok ? '✓' : '✗'} ${t}`);
await b.close(); process.exit(ut.every(([, ok]) => ok) ? 0 : 1);
