// EB + EC: stoppskylten visar grundorsaken, maskinstatus går inte i kön (en gång, ingen procent, 2 min), poolen och EL-regeln. Kör: node verktyg/test-eb-ec.mjs [url]
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
// EB: skrivaren väntar på plast och kvarnen har inget skräp → skylten säger varför, och kvarnen får en egen skylt
const eb = await H(() => { const h = window.__printahem, S = h.S; S.skyltUppe = true; S.kvarnStar = true; S.kvarn.tratt = 0; S.kvarn.ut = 0; S.kvarn.binge = [];
  const sk = h.skrivare.find((x) => x.id === 'g1'); sk.jobb = { typ: 'nyckelring' }; sk.vantar = 'tornet är tomt – mal mer'; sk.fil = 0;
  const L = h.maskinStopp(); const s1 = L.find((x) => x.obj === sk.mesh), s2 = L.find((x) => x.obj === h.kvarn);
  S.kvarn.tratt = 3; S.kvarn.motor = false; const L2 = h.maskinStopp(); const s3 = L2.find((x) => x.obj === sk.mesh);
  sk.jobb = null; sk.vantar = ''; S.kvarn.tratt = 0;
  return { a: s1?.varfor, b: s2?.kort, c: s3?.varfor }; });
ut.push([`EB: skrivarens skylt visar grundorsaken ("${eb.a}")`, eb.a === 'Kvarnen har inget skräp']);
ut.push([`EB: kvarnen får en egen skylt där det ska lösas ("${eb.b}")`, eb.b === 'Mata kvarnen']);
ut.push([`EB: skräp i tratten men ingen motor → "${eb.c}"`, eb.c === 'Kvarnen väntar på dig']);
// EC#1: samma notis högst en gång per 2 min (siffror räknas inte), statusnotiser utan procent bara första gången
const ec = await H(() => { const h = window.__printahem, S = h.S; const fore = h.textLogg().length;
  h.notis('Testnotis 1 klar', 'guld'); h.notis('Testnotis 2 klar', 'guld');
  const L = h.textLogg().slice(fore).filter((e) => /Testnotis/.test(e.text));
  return { vant: L.filter((e) => e.kalla === 'väntar').length, struken: L.filter((e) => e.kalla === 'struken').length }; });
ut.push([`EC#1: samma notis två gånger inom 2 min → en visas, en stryks (${ec.vant}/${ec.struken})`, ec.vant === 1 && ec.struken === 1]);
const src = (await import('node:fs')).readFileSync(new URL('../spel/printa-hem/spel.js', import.meta.url), 'utf8');
ut.push(['EC#1: ingen procent i tornets notis', !/Tornet är tomt på \$\{/.test(src)]);
// EC#4: en pool-text väljs inte igen inom 5 dagar
const p4 = await H(() => { const h = window.__printahem, S = h.S; S.poolValt = {}; const pool = ['Pooltext A', 'Pooltext B']; const a = h.valjOsagd(pool), b = h.valjOsagd(pool), c = h.valjOsagd(pool); return [a, b, c]; });
ut.push([`EC#4: samma pool-text högst en gång per 5 dagar (${p4.join(' / ')})`, p4[0] && p4[1] && p4[0] !== p4[1] && p4[2] === null]);
// EC: ElevenLabs utan figurlista vägras, torrkörning skickar inget
const { execSync } = await import('node:child_process');
let vagrad = false; try { execSync('node verktyg/roster_eleven.mjs verktyg/roster-taggar.json nya', { stdio: 'pipe' }); } catch { vagrad = true; }
const torr = execSync('node verktyg/roster_eleven.mjs verktyg/roster-taggar.json nya rolf', { stdio: 'pipe', env: { PATH: process.env.PATH } }).toString();
ut.push(['EC: ElevenLabs utan figurlista vägras', vagrad]);
ut.push(['EC: torrkörning räknar men skickar inget (ingen nyckel behövs)', /TORRKÖRNING/.test(torr) && /inget skickat/.test(torr)]);
for (const [t, ok] of ut) console.log(`${ok ? '✓' : '✗'} ${t}`);
console.log(fel.length ? fel.join('\n') : 'inga sidfel');
await b.close();
