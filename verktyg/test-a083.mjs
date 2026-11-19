// A-083 Nybörjarresan: (1) varje kontroll visas när den behövs, en i taget, och försvinner när man har gjort det – skärmdump per kontroll
// i verktyg/a083/. (2) H fungerar på varje mål (målet sägs, kameran vänds, pilen blinkar). (3) Alla mål har en ledtråd (0 MÅL UTAN LEDTRÅD).
// Kör: node verktyg/test-a083.mjs [url]
import { chromium } from '/home/claude/verktyg/node_modules/playwright-core/index.mjs'; import fs from 'fs';
const url = process.argv[2] || 'http://127.0.0.1:8765/printa-hem.html';
const UT = new URL('./a083/', import.meta.url).pathname; fs.mkdirSync(UT, { recursive: true });
const ut = [];
const b = await chromium.launch({ executablePath: '/usr/bin/google-chrome', args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--autoplay-policy=no-user-gesture-required'] });
const p = await b.newPage({ viewport: { width: 1280, height: 800 } }); const fel = []; p.on('pageerror', (e) => fel.push(e.message));
await p.addInitScript(() => { localStorage.clear(); localStorage.setItem('spar:printahem2:v1', JSON.stringify({ introSett: true })); });
await p.goto(url); await p.waitForTimeout(5000);
await p.click('.br-starta'); await p.waitForTimeout(800);
await p.evaluate(() => { const f = document.querySelector('.ph-namn-falt'); if (f) { f.value = 'Test'; f.closest('.ph-namn')?.querySelector('.fp-knapp')?.click(); } });
for (let i = 0; i < 120 && !(await p.evaluate(() => !!window.__printahem.ui?.igang && !document.querySelector('.ph-intro'))); i++) await p.waitForTimeout(500);
const H = (f, a) => p.evaluate(f, a);
// 1. kontrollerna i ordning – varje steg: vänta på rutan, skärmdump, gör det, rutan försvinner
const GOR = {
  ga: () => { const P = window.__printahem; P.spelare.pos.x += 3; },
  titta: () => { const P = window.__printahem; P.spelare.yaw += 1; },
  klick: () => { window.__printahem.kStat.klick++; },
  stall: () => { const P = window.__printahem; P.kStat.stallt = (P.kStat.stallt || 0) + 1; P.S.hotbar[1] = null; P.byt(0); },
  byta: () => { const P = window.__printahem; P.byt(P.S.hotbar.findIndex((x) => x?.typ === 'hammare')); P.kStat.byt++; },
  vrid: () => { window.__printahem.kStat.r++; },
  trampa: () => { window.__printahem.S.stat.trampat = (window.__printahem.S.stat.trampat || 0) + 2; },
  veva: () => { window.__printahem.S.stat.malt = (window.__printahem.S.stat.malt || 0) + 1; },
  e: () => { window.__printahem.kStat.e++; },
  tab: () => { window.__printahem.kStat.tab++; },
  h: () => { window.__printahem.kStat.h++; },
};
const FORBERED = {
  stall: () => { const P = window.__printahem; P.S.hotbar[1] = { typ: 'skrivareS', n: 1 }; P.byt(1); },
  byta: () => { const P = window.__printahem; P.S.hotbar[1] = { typ: 'hammare', n: 1 }; P.byt(0); },
  klick: () => { const P = window.__printahem; P.byt(P.S.hotbar.findIndex((x) => x?.typ === 'hammare')); },
  vrid: () => { const P = window.__printahem; P.spoke.grupp = { visible: true }; P.spoke.ok = false; },
  trampa: () => { window.__printahem.S.cykelOmbyggd = true; },
  veva: () => { const P = window.__printahem; P.S.kvarnKopt = true; if (P.S.kvarn) P.S.kvarn.motor = false; },
  e: () => { const P = window.__printahem; P.S.hotbar[2] = { typ: 'nyckelring', n: 1 }; P.S.hotbar[3] = { typ: 'kruka', n: 1 }; P.S.hotbar[4] = { typ: 'hammare', n: 1 }; },
  tab: () => { const P = window.__printahem; P.S.sms = [...(P.S.sms || []), { fran: 'bror', text: 'Test' }]; },
  h: () => { window.__printahem.sattHjalpBehov(); },
};
const sett = [];
for (const id of ['byta', 'ga', 'titta', 'klick', 'stall', 'vrid', 'trampa', 'veva', 'e', 'tab', 'h']) {
  if (id === 'h') await H(() => { const P = window.__printahem; P.kStat.h = 0; P.S.kontrollKlar = (P.S.kontrollKlar || []).filter((x) => x !== 'h'); });
  await H(`(${FORBERED[id] || (() => {})})()`);
  let aktiv = null; for (let i = 0; i < 50 && aktiv !== id; i++) { await p.waitForTimeout(300); aktiv = await H(() => window.__printahem.kHjalpAktiv()); }
  const n = await H(() => document.querySelectorAll('.ph-kontroll').length);
  await p.waitForTimeout(400); await p.screenshot({ path: `${UT}kontroll-${id}.png` });
  await H(`(${GOR[id]})()`); await p.waitForTimeout(1200);
  const kvar = await H(() => window.__printahem.kHjalpAktiv());
  sett.push({ id, visades: aktiv === id, enIGangen: n <= 1, borta: kvar !== id });
  if (id === 'vrid') await H(() => { window.__printahem.spoke.grupp = null; });
  if (id === 'byta') sett[sett.length - 1].text = await H(() => window.__printahem.KONTROLL_HJALP.find((k) => k.id === 'byta').t);
}
ut.push([`kontrollerna visas när de behövs och försvinner när man gjort det: ${sett.map((x) => `${x.id} ${x.visades && x.borta ? '✓' : '✗'}`).join(' · ')}`, sett.every((x) => x.visades && x.borta)]);
ut.push([`aldrig två kontroller samtidigt`, sett.every((x) => x.enIGangen)]);
// 2. H på varje mål
const res = await H(() => {
  const P = window.__printahem, r = { tot: 0, ok: 0, miss: [] };
  for (let i = 0; i < P.STEG.length; i++) {
    const st = P.regiTestSteg(i); if (st.sov) continue; r.tot++;
    const fore = P.regiLogg().length; P.hjalpNu('test');
    const nya = P.regiLogg().slice(fore), sa = nya.find((e) => e.kanal === 'hjälp' && e.prio === 'H' && e.text.split(': ').slice(1).join(': ').trim().length > 3);
    const harPunkt = !!P.malPunkt(), kam = nya.some((e) => e.kanal === 'kamera');
    if (sa && (kam || !harPunkt)) r.ok++; else r.miss.push(`${st.id || i}: ${sa ? '' : 'inget sagt'}${harPunkt && !kam ? ' ingen nick' : ''}`);
  }
  return r;
});
ut.push([`H på varje mål: ${res.ok} av ${res.tot}${res.miss.length ? ' · ' + res.miss.slice(0, 5).join(' · ') : ''}`, res.ok === res.tot]);
// 3. ledtrådar
const lt = await H(() => { const P = window.__printahem; const utan = P.STEG.map((st, i) => [st, i]).filter(([st]) => !st.sov && !P.ledtradFor(st)).map(([st, i]) => st.id || i); return { utan, ex: P.ledtradFor(P.STEG[3]) }; });
ut.push([`0 MÅL UTAN LEDTRÅD (${lt.utan.length}${lt.utan.length ? ': ' + lt.utan.slice(0, 5).join(', ') : ''}) · t.ex. "${lt.ex}"`, lt.utan.length === 0]);
await p.screenshot({ path: `${UT}h-hjalp.png` });
for (const [t, o] of ut) console.log(`${o ? '✓' : '✗'} ${t}`);
console.log(fel.length ? 'SIDFEL: ' + fel.slice(0, 3).join(' | ') : 'inga sidfel');
await b.close(); process.exit(ut.every(([, o]) => o) && !fel.length ? 0 : 1);
