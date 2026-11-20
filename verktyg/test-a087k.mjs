// Inkorg 24b p.2: adventskalendern. Printas (här: tas ut ur skrivaren via händelsen), hänger på skjulets vägg,
// en lucka per klick upp till dagens datum (dag 1 = 3 december), luckorna som är kvar syns. Skärmdump i verktyg/a087/.
// Kör: node verktyg/test-a087k.mjs [url]
import fs from 'node:fs';
import { chromium } from '/home/claude/verktyg/node_modules/playwright-core/index.mjs';
const url = process.argv[2] || 'http://127.0.0.1:8765/ax.html';
const dir = new URL('./a087/', import.meta.url).pathname; fs.mkdirSync(dir, { recursive: true });
const spar = fs.readFileSync(new URL('./sparfiler/start-dag3.json', import.meta.url), 'utf8');
const b = await chromium.launch({ executablePath: '/usr/bin/google-chrome', args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--autoplay-policy=no-user-gesture-required'] });
const p = await b.newPage({ viewport: { width: 1280, height: 720 } });
const sidfel = []; p.on('pageerror', (e) => sidfel.push(e.message));
await p.addInitScript((spar) => { if (!sessionStorage.getItem('t')) { sessionStorage.setItem('t', 1); localStorage.clear(); localStorage.setItem('spar:printahem2:v1', spar); } }, spar);
await p.goto(url); await p.waitForTimeout(4000);
await p.waitForFunction(() => window.__startaSpel && document.querySelector('.br-starta'), null, { timeout: 8000 }).then(() => p.evaluate(() => window.__startaSpel())).catch(() => {});
await p.waitForTimeout(3000); for (let i = 0; i < 20 && await p.evaluate(() => !!document.querySelector('.ph-dagbokkort')); i++) { await p.keyboard.press('Enter'); await p.waitForTimeout(400); }
await p.waitForTimeout(1500);
const ut = [];
const r = await p.evaluate(() => {
  const P = window.__printahem, S = P.S;
  const fore = !!S.kalender;
  P.laggTill('adventskalender', 1); P.handelse('tagitUrPrint', { sak: 'adventskalender' });
  const efter = JSON.stringify(S.kalender);
  const mal = P.interaktor.mal.find((o) => o.geometry?.type === 'PlaneGeometry' && o.parent && o.material?.map && o.visible && /Öppna lucka/.test(String(o.userData.interaktion?.text?.() || '')));
  const text = mal ? mal.userData.interaktion.text() : '';
  if (mal) mal.userData.interaktion.aktivera();
  const efterKlick = S.kalender?.lucka, igen = mal ? mal.userData.interaktion.kanAktivera() : null;
  if (mal) { const v = mal.getWorldPosition(new P.THREE.Vector3()); const K = P.kameraObj(); K.position.set(v.x, 1.5, v.z + 1.1); K.lookAt(v.x, 1.45, v.z); }
  return { fore, efter, text, efterKlick, igen, dag: S.dag };
});
await p.waitForTimeout(600);
await p.evaluate(() => { try { window.__printahem.rendera(); } catch {} });
await p.screenshot({ path: dir + 'kalender-vaggen.png' });
ut.push([`kalendern hänger på väggen efter utskriften (${r.efter})`, !r.fore && /"lucka":2/.test(r.efter)]);
ut.push([`klickrutan dag ${r.dag}: "${r.text}"`, new RegExp('Öppna lucka ' + (r.dag + 2)).test(r.text)]);
ut.push([`ett klick öppnar fram till dagens lucka (${r.efterKlick} = dag ${r.dag} + 2), och sedan går det inte igen (${r.igen})`, r.efterKlick === r.dag + 2 && r.igen === false]);
ut.push([`${sidfel.length} sidfel ${sidfel.join(' · ')}`, !sidfel.length]);
for (const [t, ok] of ut) console.log(ok ? '✓' : '✗', t);
await b.close();
