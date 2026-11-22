// Inkorg 65 (A-120): powerbankens laddvisare ovanpå generatorn (0/50/100 %), Alis hylla har alltid något att köpa,
// Ali säger aldrig låstexten, och Ali ger powerbanken direkt när du står i butiken.
// Kör: node verktyg/test-a120.mjs [url]
import fs from 'node:fs';
import { chromium } from '/home/claude/verktyg/node_modules/playwright-core/index.mjs';
const url = process.argv[2] || 'http://127.0.0.1:8765/ax2.html';
const b = await chromium.launch({ executablePath: '/usr/bin/google-chrome', args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader'] });
const ut = [], fel = [];
fs.mkdirSync(new URL('./a120/', import.meta.url), { recursive: true });
const spar = fs.readFileSync(new URL('./sparfiler/start-dag2.json', import.meta.url), 'utf8');
const p = await b.newPage({ viewport: { width: 1280, height: 720 } }); p.on('pageerror', (e) => fel.push(e.message));
await p.addInitScript((spar) => { if (!sessionStorage.getItem('t')) { sessionStorage.setItem('t', 1); localStorage.clear(); localStorage.setItem('spar:printahem2:v1', spar); } }, spar);
await p.goto(url); await p.waitForTimeout(5000);
await p.waitForFunction(() => window.__startaSpel && document.querySelector('.br-starta'), null, { timeout: 8000 }).then(() => p.evaluate(() => window.__startaSpel())).catch(() => {});
await p.waitForTimeout(3000); for (let i = 0; i < 20 && await p.evaluate(() => !!document.querySelector('.ph-med:not([hidden]), .ph-kapkort')); i++) { await p.keyboard.press('Enter'); await p.waitForTimeout(400); }
await p.waitForTimeout(1500);
// 1. powerbanken sitter ovanpå generatorn, och visaren följer strömmen
const lage = await p.evaluate(() => { const P = window.__printahem, S = P.S, T = P.THREE; S.powerbank = true; S.batteriKopt = false; P.ritaMonterat?.(); const pb = P.pbMesh(); pb.visible = true;
  const gen = P.generatorSynlig(); if (gen) gen.updateMatrixWorld(true); pb.updateMatrixWorld(true);
  const gb = gen ? new T.Box3().setFromObject(gen) : null, pbb = new T.Box3().setFromObject(pb.children[0]);
  return { gen: !!gen, over: gb ? pbb.min.y - gb.max.y : null, mitt: gb ? Math.hypot((pbb.min.x + pbb.max.x) / 2 - (gb.min.x + gb.max.x) / 2, (pbb.min.z + pbb.max.z) / 2 - (gb.min.z + gb.max.z) / 2) : null }; });
ut.push([`powerbanken sitter ovanpå generatorn (${lage.over?.toFixed(3)} m över, ${lage.mitt?.toFixed(3)} m från mitten)`, lage.gen && Math.abs(lage.over) < 0.03 && lage.mitt < 0.12]);
const visa = () => p.evaluate(() => { const P = window.__printahem, T = P.THREE, sp = P.spelare, pb = P.pbMesh(); const c = pb.getWorldPosition(new T.Vector3());
  const k = P.kameraObj(), x = c.x + 0.9, z = c.z + 0.9; sp.pos.set(x, sp.pos.y, z); sp.yaw = Math.atan2(-(c.x - x), -(c.z - z)); sp.pitch = Math.atan2(c.y + 0.05 - 1.6, Math.hypot(0.9, 0.9)); });
for (const pct of [0, 50, 100]) {
  const v = await p.evaluate((pct) => { const P = window.__printahem, S = P.S; S.strom = P.stromMaxNu() * pct / 100; return new Promise((ok) => setTimeout(() => ok(P.laddProcent()), 900)); }, pct);
  await visa(); await p.waitForTimeout(500);
  await p.screenshot({ path: new URL(`./a120/powerbank-${pct}.png`, import.meta.url).pathname });
  ut.push([`visaren säger ${v} % när strömmen är ${pct} % (bild verktyg/a120/powerbank-${pct}.png)`, Math.abs(v - pct) <= 1]);
}
await p.evaluate(() => window.__printahem.resUpp?.('test'));
// 2. Alis hylla dag 1 mellan kvarnen och powerbanken: minst ett köp går att göra, och Ali säger aldrig låstexten
const hylla = await p.evaluate(async () => { const P = window.__printahem, S = P.S; const i = P.STEGLISTA().findIndex((x) => x.id === 'powerbank');
  S.dag = 1; S.steg = i; S.kvarnKopt = true; S.kvarnStar = true; S.powerbank = false; S.powerbankGiven = false; S.pbSms = false; S.mynt = 125; S.ritningar = S.ritningar.filter((x) => x !== 'grip' && x !== 'sang');
  P.oppnaMarknad(); await new Promise((r) => setTimeout(r, 800));
  const kort = [...document.querySelectorAll('.dc-kort, .dc-k2')].map((e) => ({ t: e.textContent.trim().replace(/\s+/g, ' ').slice(0, 70), last: e.classList.contains('last') }));
  const bubbla = document.querySelector('.dc-bubbla, .dc-ali-text, .ali-bubbla')?.textContent?.trim() || '';
  const pb = P.antalInvNu('byggsats:powerbank');
  return { kort, bubbla, pb, given: S.powerbankGiven }; });
await p.screenshot({ path: new URL('./a120/ali-hylla-powerbank.png', import.meta.url).pathname });
const kopbara = hylla.kort.filter((k) => !k.last);
ut.push([`hyllan har något att köpa (${kopbara.length} av ${hylla.kort.length}: ${kopbara.map((k) => k.t.slice(0, 30)).join(' | ')})`, kopbara.length >= 1]);
ut.push([`Ali gav powerbanken direkt när butiken öppnades (i handen ${hylla.pb}, bubblan "${hylla.bubbla.slice(0, 60)}")`, hylla.given && hylla.pb >= 1]);
ut.push([`Alis bubbla visar ingen låstext ("${hylla.bubbla.slice(0, 60)}")`, !/Låst|Kommer när/.test(hylla.bubbla)]);
const br = await p.evaluate(() => window.__printahem.textLogg().filter((e) => e.kalla === 'brott' && ['TOM HYLLA', 'TEXT UTAN RÖST'].includes(e.vem)).map((e) => e.vem + ': ' + e.text));
ut.push([`0 TOM HYLLA, 0 TEXT UTAN RÖST (${br.join(' · ') || 'inga'})`, !br.length]);
ut.push([`0 sidfel (${fel.slice(0, 3).join(' · ') || 'inga'})`, !fel.length]);
await b.close();
for (const [t, ok] of ut) console.log(ok ? '✓' : '✗', t);
process.exit(ut.every((x) => x[1]) ? 0 : 1);
