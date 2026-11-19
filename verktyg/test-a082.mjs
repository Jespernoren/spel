// A-082 Felknappen: F8 mitt i ett tal, under en kamerarörelse och i menyn → rutan "Vad kändes fel?" → OK → rapporten sparas.
// Exporten är en zip med rapporter.json + bilder, och den läses tillbaka här. Skärmdumpar i verktyg/a082/.
// Kör: node verktyg/test-a082.mjs [url]
import { chromium } from '/home/claude/verktyg/node_modules/playwright-core/index.mjs'; import fs from 'fs';
const url = process.argv[2] || 'http://127.0.0.1:8765/printa-hem.html';
const UT = new URL('./a082/', import.meta.url).pathname; fs.mkdirSync(UT, { recursive: true });
const ut = [];
const b = await chromium.launch({ executablePath: '/usr/bin/google-chrome', args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--autoplay-policy=no-user-gesture-required'] });
const p = await b.newPage({ viewport: { width: 1280, height: 800 } }); const fel = []; p.on('pageerror', (e) => fel.push(e.message));
await p.addInitScript(() => { localStorage.clear(); localStorage.setItem('spar:printahem2:v1', JSON.stringify({ introSett: true })); });
await p.goto(url); await p.waitForTimeout(5000);
await p.click('.br-starta'); await p.waitForTimeout(800);
await p.evaluate(() => { const f = document.querySelector('.ph-namn-falt'); if (f) { f.value = 'Test'; f.closest('.ph-namn')?.querySelector('.fp-knapp')?.click(); } });
for (let i = 0; i < 120 && !(await p.evaluate(() => !!window.__printahem.ui?.igang && !document.querySelector('.ph-intro'))); i++) await p.waitForTimeout(500);
await p.waitForTimeout(1500);
await p.evaluate(() => window.__printahem.felRensa());
const rapportera = async (namn, text) => {
  await p.keyboard.press('F8'); await p.waitForTimeout(700);
  const ruta = await p.evaluate(() => !!document.querySelector('.ph-fel'));
  await p.screenshot({ path: `${UT}${namn}.png` });
  if (ruta) { await p.fill('.ph-fel-text', text); await p.keyboard.press('Enter'); }
  await p.waitForTimeout(900);
  return ruta;
};
// 1. mitt i ett tal
await p.evaluate(() => window.__printahem.prata('du', 'Det här är en lång replik som pågår medan jag trycker på F8 för att rapportera.', 'STORY', { direkt: true }));
await p.waitForTimeout(400);
const r1 = await rapportera('f8-mitt-i-tal', 'mitt i ett tal');
// 2. under en kamerarörelse
await p.evaluate(() => window.__printahem.tittaMot(30, 30, 1.4, { tvang: true }));
await p.waitForTimeout(150);
const r2 = await rapportera('f8-kameran-ror-sig', 'under kameran');
// 3. i menyn (Esc-menyn) – och 🐞-knappen finns där
await p.evaluate(() => window.__printahem.startRuta?.());
await p.waitForTimeout(500);
const knapp = await p.evaluate(() => !!document.querySelector('[data-felrapp]'));
const r3 = await rapportera('f8-i-menyn', 'i menyn');
if (knapp) { await p.click('[data-felrapp]'); await p.waitForTimeout(700); await p.screenshot({ path: `${UT}felrapporter-listan.png` }); }
const alla = await p.evaluate(() => window.__printahem.felAlla());
const sparat = alla.map((r) => ({ text: r.text, pratar: r.pratar, kamera: r.kamera, meny: r.meny, bild: (r.bild || '').length, regi: r.regi?.length, dag: r.dag, steg: r.steg, plats: !!r.plats, bar: !!r.bar, fps: r.fps }));
ut.push([`F8 mitt i ett tal: rutan ${r1 ? 'kom' : 'kom inte'}, rapporten pratar=${sparat[0]?.pratar}`, r1 && sparat[0]?.text === 'mitt i ett tal' && sparat[0]?.pratar]);
ut.push([`F8 under en kamerarörelse: rutan ${r2 ? 'kom' : 'kom inte'}, kamera=${sparat[1]?.kamera}`, r2 && sparat[1]?.text === 'under kameran' && sparat[1]?.kamera]);
ut.push([`F8 i menyn: rutan ${r3 ? 'kom' : 'kom inte'}, meny=${sparat[2]?.meny} · 🐞-knappen i Esc-menyn: ${knapp}`, r3 && sparat[2]?.meny && knapp]);
ut.push([`varje rapport har skärmdump, Regissörens logg, dag, steg, plats, vad du bär och FPS: ${sparat.map((x) => `bild ${Math.round(x.bild / 1024)} kB, ${x.regi} loggrader, fps ${x.fps}`).join(' · ')}`, sparat.length === 3 && sparat.every((x) => x.bild > 5000 && x.regi > 0 && x.dag >= 1 && x.steg >= 0 && x.plats && x.bar && x.fps >= 0)]);
// 4. exporten
const zip = Buffer.from(await p.evaluate(() => window.__printahem.felExport()), 'base64');
fs.writeFileSync(`${UT}export-exempel.zip`, zip);
const filer = []; for (let i = 0; i + 30 < zip.length;) { if (zip.readUInt32LE(i) !== 0x04034b50) break; const n = zip.readUInt16LE(i + 26), sz = zip.readUInt32LE(i + 18); filer.push({ namn: zip.slice(i + 30, i + 30 + n).toString(), data: zip.slice(i + 30 + n, i + 30 + n + sz) }); i += 30 + n + sz; }
const json = JSON.parse(filer.find((f) => f.namn === 'rapporter.json')?.data.toString() || '{}');
const bilder = filer.filter((f) => f.namn.endsWith('.jpg'));
ut.push([`exporten: ${filer.length} filer (${filer.map((f) => f.namn).join(', ')}), ${json.rapporter?.length} rapporter i json, bilderna är jpg (${bilder.every((f) => f.data[0] === 0xff && f.data[1] === 0xd8)})`, json.rapporter?.length === 3 && bilder.length === 3 && bilder.every((f) => f.data[0] === 0xff && f.data[1] === 0xd8) && json.rapporter.every((r) => r.regi && r.mal !== undefined)]);
for (const [t, ok] of ut) console.log(`${ok ? '✓' : '✗'} ${t}`);
console.log(fel.length ? 'SIDFEL: ' + fel.slice(0, 3).join(' | ') : 'inga sidfel');
await b.close(); process.exit(ut.every(([, o]) => o) && !fel.length ? 0 : 1);
