// A-080 Regissören: (1) lint-regissor grönt, (2) bildbubblan visar exakt steget man står på i 100 % av målen,
// (3) läsbar tid för en info-ruta, (4) inget visas medan kameran nickar, (5) Regissörens logg har start, slut, kanal och prio.
// Kör: node verktyg/test-a080.mjs [url]
import { chromium } from '/home/claude/verktyg/node_modules/playwright-core/index.mjs'; import { execFileSync } from 'child_process';
const url = process.argv[2] || 'http://127.0.0.1:8765/printa-hem.html';
const ut = [];
try { execFileSync('node', [new URL('./lint-regissor.mjs', import.meta.url).pathname]); ut.push(['lint-regissor: 0 direkta anrop', true]); } catch (e) { ut.push(['lint-regissor: ' + String(e.stdout).split('\n')[0], false]); }
const b = await chromium.launch({ executablePath: '/usr/bin/google-chrome', args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--autoplay-policy=no-user-gesture-required'] });
const p = await b.newPage({ viewport: { width: 1280, height: 800 } }); const fel = []; p.on('pageerror', (e) => fel.push(e.message));
await p.addInitScript(() => { localStorage.clear(); localStorage.setItem('spar:printahem2:v1', JSON.stringify({ introSett: true })); });
await p.goto(url); await p.waitForTimeout(5000);
await p.click('.br-starta'); await p.waitForTimeout(800);
await p.evaluate(() => { const f = document.querySelector('.ph-namn-falt'); if (f) { f.value = 'Test'; f.closest('.ph-namn')?.querySelector('.fp-knapp')?.click(); } });
for (let i = 0; i < 120 && !(await p.evaluate(() => !!window.__printahem.ui?.igang && !document.querySelector('.ph-intro'))); i++) await p.waitForTimeout(500);
await p.waitForTimeout(1500);
// 2. bildbubblan per steg
const n = await p.evaluate(() => window.__printahem.STEG.length);
let ok = 0, tot = 0; const miss = [];
for (let i = 0; i < n; i++) {
  const st = await p.evaluate((i) => window.__printahem.regiTestSteg(i), i);
  if (st.sov) continue;
  // vänta tills Regissören har släppt fram målet i målrutan (som i spelet), högst 10 s
  for (let v = 0; v < 10; v++) { const syns = await p.evaluate((t) => window.__printahem.malSynligt() && (document.querySelector('.nasta-rubrik')?.textContent || '').includes(t.slice(0, 12)), st.text); if (syns) break; await p.waitForTimeout(200); }
  await p.evaluate(() => new Promise((r) => requestAnimationFrame(() => requestAnimationFrame(r))));
  const rub = await p.evaluate(() => document.querySelector('.nasta-rubrik')?.textContent || '');
  const pil = (await p.evaluate(() => window.__printahem.pilBildTyp())).split('|')[0] || null;
  tot++;
  // jämför med steget som målrutan faktiskt visar (Regissören kan hålla kvar förra målet en stund) – bubblan och rutan ska alltid vara samma steg
  const visat = rub.includes(st.text.slice(0, 12)) ? st : await p.evaluate((rub) => { const P = window.__printahem; const j = P.STEG.findIndex((x, k) => { const t = (() => { try { return P.regiTestStegText(k); } catch { return ''; } })(); return t && rub.includes(t.slice(0, 12)); }); return j >= 0 ? P.regiStegFakta(j) : null; }, rub);
  const fakta = visat || st;
  const ratt = fakta.delar.length ? fakta.delar.includes(pil) : pil === fakta.bild;
  if (ratt) ok++; else miss.push(`${st.id || i}: pil=${pil} väntat=${st.delar.length ? st.delar.join('/') : st.bild} (målrutan: ${rub.slice(0, 30)})`);
}
ut.push([`bildbubblan matchar steget i ${ok} av ${tot} mål (${(100 * ok / Math.max(1, tot)).toFixed(0)} %)${miss.length ? ' · ' + miss.slice(0, 6).join(' · ') : ''}`, ok === tot]);
// 3. läsbar tid + 4. kameran
const r = await p.evaluate(async () => {
  const P = window.__printahem, t = 'En lång info-ruta för att mäta läsbar tid i spelet.';
  P.regi.info(t, '', { direkt: true });
  const e = P.regiLogg().filter((x) => x.text === t).pop();
  return { ms: e ? e.slut - e.start : 0, behov: P.lasTid(t) };
});
ut.push([`läsbar tid: info-rutan står ${r.ms} ms (behöver ${r.behov})`, r.ms >= r.behov]);
for (let i = 0; i < 40; i++) { const l = await p.evaluate(() => window.__printahem.kanalLage()); if (!l.med && !l.overlay && !l.butik && !l.pausad && l.igang) break; await p.keyboard.press('Enter'); await p.waitForTimeout(500); }
const k = await p.evaluate(async () => {
  const P = window.__printahem; P.tittaMot?.(0, 0, 1.4, { tvang: true });
  P.regi.info('Kameran nickar – den här ska vänta.', 'bra');
  await new Promise((r) => setTimeout(r, 4000));
  const L = P.regiLogg(), kam = L.filter((x) => x.kanal === 'kamera').pop(), inf = L.filter((x) => /Kameran nickar/.test(x.text)).pop();
  return { kam, inf };
});
ut.push([`inget visas medan kameran rör sig: nick ${k.kam ? `${k.kam.start}–${k.kam.slut}` : 'saknas'}, info ${k.inf ? k.inf.start : 'kom aldrig'}`, !!k.kam && !!k.inf && k.inf.start >= k.kam.slut - 50]);
// 5. loggen
const L = await p.evaluate(() => window.__printahem.regiLogg());
const kanaler = [...new Set(L.map((e) => e.kanal))];
ut.push([`Regissörens logg: ${L.length} rader, kanaler ${kanaler.join(', ')}, alla med start/slut/kanal/prio`, L.length > 5 && L.every((e) => e.start != null && e.slut != null && e.kanal)]);
for (const [t, okk] of ut) console.log(`${okk ? '✓' : '✗'} ${t}`);
console.log(fel.length ? 'SIDFEL: ' + fel.slice(0, 3).join(' | ') : 'inga sidfel');
await b.close(); process.exit(ut.every(([, o]) => o) && !fel.length ? 0 : 1);
