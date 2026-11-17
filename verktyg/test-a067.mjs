// A-067: värdetrappan. Kör: node verktyg/test-a067.mjs [url]  → skärmdumpar i verktyg/a067/
import fs from 'node:fs';
import { execSync } from 'node:child_process';
import { chromium } from '/home/claude/verktyg/node_modules/playwright-core/index.mjs';
const url = process.argv[2] || 'http://127.0.0.1:8765/ax.html';
const dir = new URL('./a067/', import.meta.url).pathname; fs.mkdirSync(dir, { recursive: true });
const ut = [];
// ekonomin och priserna i koden
{ let ok = true, txt = ''; try { txt = execSync('node verktyg/ekonomi.mjs', { encoding: 'utf8' }); } catch (e) { ok = false; txt = e.stdout; } ut.push([`ekonomi.mjs: ${txt.trim().split('\n').pop()}`, ok]); }
{ const n = execSync(`grep -cE "(recept|pris|ritning|present|protoPris|bas|vaxt): [0-9]{3,}" spel/printa-hem/spel.js || true`, { encoding: 'utf8' }).trim(); ut.push([`priser som står direkt i spel.js: ${n}`, n === '0']); }
const b = await chromium.launch({ executablePath: '/usr/bin/google-chrome', args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader'] });
const p = await (await b.newContext({ viewport: { width: 1280, height: 720 } })).newPage(); const fel = [];
p.on('pageerror', (e) => fel.push('sidfel: ' + e.message));
const spar = JSON.parse(fs.readFileSync('verktyg/sparfiler/dag14.json', 'utf8')), mynt0 = spar.mynt; delete spar.trappaV1;
await p.addInitScript((s) => { if (!sessionStorage.getItem('a067')) { sessionStorage.setItem('a067', 1); localStorage.clear(); localStorage.setItem('spar:printahem2:v1', s); } }, JSON.stringify(spar));
await p.goto(url); await p.waitForTimeout(5000);
for (let i = 0; i < 25 && !(await p.evaluate(() => !!window.__printahem?.ui?.igang).catch(() => false)); i++) { await p.evaluate(() => { for (const k of document.querySelectorAll('button')) { const r = k.getBoundingClientRect(); if (r.width && /Börja|BÖRJA|Fortsätt|Starta|Hoppa|Vakna|Ny dag/i.test(k.textContent)) { k.click(); return; } } }); await p.waitForTimeout(1000); }
await p.waitForTimeout(1500);
const H = (f, a) => p.evaluate(f, a);
const mig = await H(() => ({ v: window.__printahem.S.trappaV1, mynt: window.__printahem.S.mynt, dag: window.__printahem.S.dag }));
ut.push([`gammal sparfil dag ${mig.dag}: pengarna uppräknade en gång (${mynt0} → ${mig.mynt} kr, trappaV1 ${mig.v})`, mig.v === true && mig.mynt > mynt0 * 2]);
const butik = async (namn) => { await H(() => window.__printahem.oppnaMarknad()); await p.waitForTimeout(1200);
  await p.screenshot({ path: dir + namn + '.png' });
  await H(() => { document.querySelectorAll('.ui-stang, [data-stang]').forEach((k) => k.click()); window.__printahem.ui?.stangButik?.(); }); await p.waitForTimeout(500); };
await H(() => { const P = window.__printahem; P.S.mynt = 150000; });
await butik('butik-kapitel3');
await H(() => { const P = window.__printahem, S = P.S; S.dag = 18; S.kapitel = 4; S.mynt = 600000; });
await butik('butik-kapitel4');
// HUD över en miljon och prestationen Miljonär
await p.keyboard.press('Escape'); await p.waitForTimeout(500);
const hud = await H(async () => { const P = window.__printahem; P.ui?.stangButik?.(); P.S.mynt = 1234567; for (let i = 0; i < 10 && !(P.S.prest || []).includes('miljonar'); i++) { P.kollaPrestationer(); await new Promise((r) => setTimeout(r, 400)); } const dbg = { igang: P.ui?.igang, sover: P.sover }; return { dbg, txt: P.krT(1234567), t2: P.krT(150000), t3: P.krT(12400), prest: (P.S.prest || []).includes('miljonar') }; });
await p.waitForTimeout(1500); await p.screenshot({ path: dir + 'hud-miljon.png' });
ut.push([`stora tal: ${hud.t3} kr · ${hud.t2} kr · ${hud.txt} kr`, hud.txt === '1,2 milj.' && hud.t2 === '150 000' && hud.t3 === '12 400']);
ut.push([`prestationen Miljonär (${hud.prest} ${JSON.stringify(hud.dbg)})`, hud.prest]);
await H(() => { const P = window.__printahem; P.oppnaDagbok?.('prest'); });
// råguldet hos Ali dag 17
const rg = await H(() => { const P = window.__printahem, S = P.S; S.dag = 16; const f16 = P.saljPris('fynd4'); S.dag = 17; S.raguldSalt = 0; P.laggTill('fynd4', 3); const fore = S.mynt; const s = P.saljTillAli('fynd4', 3); return { f16, pris: P.saljPris('fynd4'), fick: S.mynt - fore, repl: P.aliReplNu() }; });
ut.push([`råguldet: inte dag 16 (${rg.f16}), dag 17 ${rg.pris} kr per fynd, 3 st gav ${rg.fick} kr, Ali: "${rg.repl}"`, rg.f16 === 0 && rg.pris > 0 && rg.fick > 0 && /Riktigt guld/.test(rg.repl)]);
// böterna följer kapitlets inkomst
const bt = await H(() => { const P = window.__printahem, S = P.S; S.dag = 3; const a = P.boterFor(100000); S.dag = 13; const c = P.boterFor(1000000); return { a, c }; });
ut.push([`böter: dag 3 ${bt.a} kr (taket 2 500), dag 13 ${bt.c} kr (10 min av inkomsten)`, bt.a === 2500 && bt.c > 20000]);
for (const [t, ok] of ut) console.log(ok ? '✓' : '✗', t);
console.log(fel.length ? fel.join('\n') : 'inga sidfel'); await b.close(); process.exit(ut.every((x) => x[1]) && !fel.length ? 0 : 1);
