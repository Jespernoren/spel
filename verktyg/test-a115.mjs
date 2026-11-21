// inkorg 60 (A-115): ingen "Printar …" utan ström, hela kortet är knappen, Autoprint printar inte, och en klar uppgift låter inte.
import fs from 'node:fs';
import { chromium } from '/home/claude/verktyg/node_modules/playwright-core/index.mjs';
const url = process.argv[2] || 'http://127.0.0.1:8765/ax2.html';
const b = await chromium.launch({ executablePath: '/usr/bin/google-chrome', args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader'] });
const p = await b.newPage({ viewport: { width: 1280, height: 720 } }); const fel = []; p.on('pageerror', (e) => fel.push(e.message));
const spar = fs.readFileSync(new URL('./sparfiler/start-dag2.json', import.meta.url), 'utf8');
await p.addInitScript((spar) => { if (!sessionStorage.getItem('t')) { sessionStorage.setItem('t', 1); localStorage.clear(); localStorage.setItem('spar:printahem2:v1', spar); }
  window.__osc = 0; const AC = window.AudioContext || window.webkitAudioContext; if (AC) { const o = AC.prototype.createOscillator; AC.prototype.createOscillator = function (...a) { window.__osc++; return o.apply(this, a); }; } }, spar);
await p.goto(url); await p.waitForTimeout(4000);
await p.waitForFunction(() => window.__startaSpel && document.querySelector('.br-starta'), null, { timeout: 8000 }).then(() => p.evaluate(() => window.__startaSpel())).catch(() => {});
await p.waitForTimeout(2500); for (let i = 0; i < 6; i++) { await p.keyboard.press('Enter'); await p.waitForTimeout(250); } await p.waitForTimeout(1500);
const ut = [];
// (a)+(b): ingen ström, klick mitt på bilden i kortet
await p.evaluate(() => { const P = window.__printahem, S = P.S, sk = P.skrivare[0]; for (const x of P.skrivare) { x.jobb = null; x.ko = []; x.klar = null; } sk.fil = Math.max(sk.fil || 0, 2000); S.strom = 0; S.powerbank = false; S.batteriKopt = false; window.__sk = sk; window.__l0 = P.textLogg().length; P.oppnaPrintMeny(sk); });
await p.waitForTimeout(600);
const bild = await p.$('.pk:not(.ej) .pk-bild'); const bb = await bild.boundingBox();
await p.mouse.move(bb.x + bb.width / 2, bb.y + bb.height / 2); await p.waitForTimeout(250); await p.screenshot({ path: new URL('./a115/printmeny-hovring.png', import.meta.url).pathname });
await p.mouse.click(bb.x + bb.width / 2, bb.y + bb.height / 2); await p.waitForTimeout(1500);
const a = await p.evaluate(() => { const P = window.__printahem, ny = P.textLogg().slice(window.__l0); return { jobb: !!window.__sk.jobb, lage: (() => { try { return window.__sk.vantar; } catch { return '?'; } })(), printar: ny.filter((e) => /Printar/.test(e.text || '')).map((e) => e.text), osann: (P.regelvaktLogg?.() || []).filter?.((x) => /OSANN/.test(x)) || [] }; });
ut.push(`${a.jobb ? '✓' : '✗'} klick mitt på bilden startar printen`, `${a.printar.length ? '✗ "' + a.printar[0] + '"' : '✓ ingen "Printar …" utan ström'}`);
// (c): Autoprint printar inte
await p.evaluate(() => { const P = window.__printahem, S = P.S, sk = window.__sk; sk.jobb = null; sk.ko = []; S.auto = { ...(S.auto || {}), lada: true }; P.oppnaPrintMeny(sk); });
await p.waitForTimeout(600);
const auto = await p.$('.pk:not(.ej) .pk-auto');
if (auto) { await auto.click(); await p.waitForTimeout(800); const c = await p.evaluate(() => !!window.__sk.jobb); ut.push(`${!c ? '✓' : '✗'} Autoprint-knappen printar inte`); } else ut.push('✗ ingen Autoprint-knapp att klicka på');
await p.keyboard.press('Escape'); await p.waitForTimeout(400); await p.evaluate(() => { try { window.__printahem.ui.stangButik?.(); } catch {} document.querySelectorAll('.ui-ruta-bak, .ph-ruta').forEach(() => {}); });
// (d): en uppgift blir klar utan ljud
const d = await p.evaluate(() => { const P = window.__printahem, f = window.__osc; P.bekrafta(P.cykelObj()); return window.__osc - f; });   // ljudet (ching) startades i samma anrop – bakgrundsmusiken räknas inte
ut.push(`${d === 0 ? '✓' : '✗'} klar uppgift utan ljud (${d} toner)`);
// Alis butik med hovring
await p.evaluate(() => { const P = window.__printahem; P.S.mynt = Math.max(P.S.mynt, 500); P.oppnaMarknad(); });
await p.waitForTimeout(1200);
const ak = await p.$('.dc-k2:not(.last)');
if (ak) { const r = await ak.boundingBox(); await p.mouse.move(r.x + r.width / 2, r.y + 30); await p.waitForTimeout(300); await p.screenshot({ path: new URL('./a115/ali-hovring.png', import.meta.url).pathname });
  const m0 = await p.evaluate(() => window.__printahem.S.mynt); await p.mouse.click(r.x + r.width / 2, r.y + 30); await p.waitForTimeout(800); const m1 = await p.evaluate(() => window.__printahem.S.mynt); ut.push(`${m1 < m0 ? '✓' : '✗'} klick på bilden i Alis kort köper (${m0} → ${m1} kr)`); }
else ut.push('✗ inget köpbart kort hos Ali');
const flagg = await p.evaluate(() => (window.__printahem.textLogg().filter((e) => /OSANN STATUS|PLING UTAN HANDLING/.test(JSON.stringify(e)))).length);
ut.push(`${flagg === 0 ? '✓' : '✗'} 0 OSANN STATUS / PLING UTAN HANDLING i loggen`, fel.length ? '✗ sidfel ' + fel[0] : '✓ 0 sidfel');
console.log(ut.join('\n')); await b.close();
