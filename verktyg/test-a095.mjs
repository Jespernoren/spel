// Inkorg 36 (A-095): ingen figur nämns innan man träffat den. Dag 1, före sopbilen: gå till bommen vid vägen (vänster)
// och få tanken utan namn. Sedan samma sak när Rolf är känd. Kör: node verktyg/test-a095.mjs [url]
import { chromium } from '/home/claude/verktyg/node_modules/playwright-core/index.mjs';
const url = process.argv[2] || 'http://127.0.0.1:8765/ax2.html';
const b = await chromium.launch({ executablePath: '/usr/bin/google-chrome', args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader'] });
const ut = [], fel = [];
async function bommen(rolfKand) {
  const p = await b.newPage({ viewport: { width: 1280, height: 720 } }); p.on('pageerror', (e) => fel.push(e.message));
  await p.addInitScript(() => { if (!sessionStorage.getItem('t')) { sessionStorage.setItem('t', 1); localStorage.clear(); localStorage.setItem('spar:printahem2:v1', JSON.stringify({ spelarNamn: 'Test' })); } });
  await p.goto(url);
  await p.waitForFunction(() => window.__startaSpel && document.querySelector('.br-starta'), null, { timeout: 20000 }); await p.evaluate(() => window.__startaSpel());
  await p.waitForTimeout(2500); await p.keyboard.press('Enter');
  for (let i = 0; i < 8; i++) { if (await p.evaluate(() => !!document.querySelector('.ph-med:not([hidden])'))) await p.keyboard.press('Enter'); await p.waitForTimeout(700); }
  const fore = await p.evaluate((rk) => { const H = window.__printahem, S = H.S; if (rk) S.rolfKand = true;
    const bom = H.BOMMAR.vanster, v = bom.arm.getWorldPosition(new H.THREE.Vector3());
    H.spelare.pos.set(bom.x + 0.5, H.spelare.pos.y, v.z + 0.5);
    return { dag: S.dag, rolf: H.kand('rolf'), sopbil: !!S.sopbilSett }; }, rolfKand);
  await p.waitForTimeout(9000);
  const r = await p.evaluate(() => { const L = window.__printahem.textLogg();
    return { tanke: L.filter((e) => e.kalla === 'tanke' && /^Avstängt\. /.test(e.text)).map((e) => e.text), okant: L.filter((e) => e.kalla === 'brott' && e.vem === 'OKÄNT ORD').map((e) => e.text) }; });
  await p.close(); return { ...fore, ...r };
}
const a = await bommen(false);
ut.push([`dag ${a.dag}, före sopbilen (Rolf känd: ${a.rolf}, sopbilen sedd: ${a.sopbil}): "${a.tanke[0] || '–'}"`, a.dag === 1 && !a.rolf && a.tanke[0] === 'Avstängt. Någon kör ju förbi här varje dag.']);
ut.push([`0 OKÄNT ORD dag 1 (${a.okant.join(' · ') || 'inga'})`, !a.okant.length]);
const c = await bommen(true);
ut.push([`när Rolf är känd: "${c.tanke[0] || '–'}"`, c.tanke[0] === 'Avstängt. Rolf kör ju förbi här varje dag.']);
ut.push([`0 sidfel (${fel.slice(0, 2).join(' · ') || 'inga'})`, !fel.length]);
await b.close();
for (const [t, o] of ut) console.log(`${o ? '✓' : '✗'} ${t}`);
process.exit(ut.every(([, o]) => o) ? 0 : 1);
