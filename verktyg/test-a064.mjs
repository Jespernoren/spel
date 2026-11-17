// A-064: tippen som sedimentlager i marken. Kör: node verktyg/test-a064.mjs [url]
// Skärmdumpar i verktyg/a064/: tippen från grinden (dag 2, K2, K3, K4), kanten som visar lagren, tvärsnittet (testbild).
import fs from 'node:fs';
import { chromium } from '/home/claude/verktyg/node_modules/playwright-core/index.mjs';
const url = process.argv[2] || 'http://127.0.0.1:8765/printa-hem.html';
const dir = new URL('./a064/', import.meta.url).pathname; fs.mkdirSync(dir, { recursive: true });
const b = await chromium.launch({ executablePath: '/usr/bin/google-chrome', args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader'] });
const p = await (await b.newContext({ viewport: { width: 1280, height: 720 } })).newPage(); const fel = [];
p.on('pageerror', (e) => fel.push('sidfel: ' + e.message + ' @ ' + (e.stack || '').split('\n').slice(1, 3).join(' | ')));
await p.addInitScript(() => { if (!sessionStorage.getItem('a064')) { sessionStorage.setItem('a064', 1); localStorage.clear(); localStorage.setItem('spar:printahem2:v1', JSON.stringify({ introSett: true, spelarNamn: 'Test', dag1Sida: true })); } });
await p.goto(url); await p.waitForTimeout(5000);
for (let i = 0; i < 25 && !(await p.evaluate(() => !!window.__printahem?.ui?.igang).catch(() => false)); i++) {
  const namn = await p.$('.ph-namn input'); if (namn) { await namn.fill('Test'); await p.keyboard.press('Enter'); }
  else await p.evaluate(() => { for (const k of document.querySelectorAll('button')) { const r = k.getBoundingClientRect(); if (r.width && /Börja|BÖRJA|Fortsätt|Starta|Hoppa/i.test(k.textContent)) { k.click(); return; } } });
  await p.waitForTimeout(1000);
}
await p.evaluate(() => { const h = window.__printahem, S = h.S; S.skyltUppe = true; S.dag = 2; S.tippNyckel = true; S.kapitel = 2; });
const ut = [];
const bild = async (namn, fran, mot) => {
  await p.evaluate(([f, m]) => { const h = window.__printahem; h.spelare.pos.x = f[0]; h.spelare.pos.z = f[1]; h.tittaMot(m[0], m[1], m[2], { tvang: true }); }, [fran, mot]);
  await p.waitForTimeout(3500); await p.screenshot({ path: dir + namn + '.png' });
};
const T = await p.evaluate(() => ({ x: window.__printahem.TIPP.x, z: window.__printahem.TIPP.z, r: window.__printahem.TIPP.r }));
const grind = [T.x + T.r + 3.2, T.z + 1.5], mitt = [T.x, T.z, 0.2];
const kontroll = async (namn) => p.evaluate(() => {
  const h = window.__printahem, S = h.S, fel = [];
  for (const k of h.skrapLista) { if (!h.paTippen(k.position.x, k.position.z) || k.userData.helen) continue; const y = h.tippHojd(k.position.x, k.position.z); if (Math.abs(k.position.y - y) > 0.35) fel.push(`${k.userData.sort || '?'} y=${k.position.y.toFixed(2)} mark=${y.toFixed(2)}`); }
  return { lager: S.tippLager, yta: h.tippHojd(h.TIPP.x + 3, h.TIPP.z + 3), fel: fel.slice(0, 5), antal: fel.length };
});
const ga = async (fran, till) => p.evaluate(async ([f, t]) => {   // gå på riktigt (tangenten W) från f mot t tills man är framme eller står still
  const h = window.__printahem, sp = h.spelare; sp.pos.set(f[0], h.tippHojd(f[0], f[1]), f[1]); sp.yaw = Math.atan2(-(t[0] - f[0]), -(t[1] - f[1]));
  let senast = [sp.pos.x, sp.pos.z], still = 0;
  for (let i = 0; i < 160; i++) { sp.aktiv = true; sp.tangenter.KeyW = true; sp.yaw = Math.atan2(-(t[0] - sp.pos.x), -(t[1] - sp.pos.z)); await new Promise((r) => setTimeout(r, 250));
    if (Math.hypot(sp.pos.x - t[0], sp.pos.z - t[1]) < 0.5) break;
    if (Math.hypot(sp.pos.x - senast[0], sp.pos.z - senast[1]) < 0.01) { if (++still > 8) break; } else still = 0; senast = [sp.pos.x, sp.pos.z]; }
  sp.tangenter.KeyW = false;
  return { x: sp.pos.x, z: sp.pos.z, y: sp.pos.y, mark: h.tippHojd(sp.pos.x, sp.pos.z) };
}, [fran, till]);

await bild('dag2-fran-grinden', grind, mitt);
let k = await kontroll(); ut.push([`dag 2: lager ${k.lager}, ytan ${k.yta.toFixed(2)} m, ${k.antal} lösa saker på fel höjd`, k.antal === 0]);
// gå in via rampen och ut igen
let g = await ga([T.x + T.r + 0.75, T.z], [T.x, T.z]); ut.push([`in via grindrampen: står på ${g.y.toFixed(2)} (marken ${g.mark.toFixed(2)}), ${Math.hypot(g.x - T.x, g.z - T.z).toFixed(1)} m från mitten`, Math.hypot(g.x - T.x, g.z - T.z) < T.r && Math.abs(g.y - g.mark) < 0.05]);
for (const [n, verktyg] of [[2, (S) => { S.magnet = true; }], [3, (S) => { S.kolf = { ...(S.kolf || {}), band: true }; }], [4, null]]) {
  await p.evaluate(async (n) => { const h = window.__printahem, S = h.S; S.kapitel = n; if (n === 2) S.magnet = true; if (n === 3) S.kolf = { ...(S.kolf || {}), band: true }; if (n === 4) h.laggTill('hacka'); h.lager(n); await new Promise((r) => setTimeout(r, 2600)); }, n);
  await bild(`k${n}-fran-grinden`, grind, mitt);
  await bild(`k${n}-kanten`, [T.x + 1.5, T.z + 1], [T.x - T.r, T.z - 1.5, 0.1]);
  k = await kontroll(); ut.push([`K${n}: lager ${k.lager}, ytan ${k.yta.toFixed(2)} m, ${k.antal} lösa saker svävar eller är begravda${k.fel.length ? ' – ' + k.fel.join(', ') : ''}`, k.lager === n && k.antal === 0]);
  g = await ga([T.x + T.r + 0.75, T.z], [T.x, T.z]); const ner = g; g = await ga([T.x, T.z], [T.x + T.r + 0.9, T.z]);
  ut.push([`K${n}: ner via rampen (${ner.y.toFixed(2)}) och upp igen (${g.y.toFixed(2)}, ${Math.hypot(g.x - T.x, g.z - T.z).toFixed(1)} m ut)`, Math.hypot(ner.x - T.x, ner.z - T.z) < T.r && Math.hypot(g.x - T.x, g.z - T.z) > T.r + 0.2 && Math.abs(g.y) < 0.05]);
}
// tvärsnitt: ytans höjd längs en linje genom mitten, per lager
const prof = await p.evaluate(() => { const h = window.__printahem, ut = {}; const fore = h.S.tippLager;
  for (let n = 1; n <= 4; n++) { h.sattTippYta(n); ut[n] = []; for (let i = -100; i <= 100; i++) { const x = h.TIPP.x + i / 100 * (h.TIPP.r + 2), z = h.TIPP.z - 0.01; ut[n].push([x - h.TIPP.x, h.tippHojd(x, z)]); } }
  h.sattTippYta(fore); return ut; });
const W = 1000, H = 420, sx = (x) => W / 2 + x / 9.5 * (W / 2 - 20), sy = (y) => 260 - y * 220;
const band = [[-0.6, -0.3, '#8a7458', 'botten (lera)'], [-0.3, 0, '#3e3328', '1962'], [0, 0.3, '#7a5a3c', '1987'], [0.3, 0.6, '#8a8680', '90-talet']];
let svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" style="background:#f4efe6;font:14px sans-serif">`;
for (const [a, c, f, t] of band) svg += `<rect x="${sx(-7.6)}" y="${sy(c)}" width="${sx(7.6) - sx(-7.6)}" height="${sy(a) - sy(c)}" fill="${f}" opacity="0.35"/><text x="${sx(7.9)}" y="${(sy(a) + sy(c)) / 2 + 5}">${t} ${a}…${c} m</text>`;
svg += `<line x1="0" x2="${W}" y1="${sy(0)}" y2="${sy(0)}" stroke="#4a7a3a" stroke-dasharray="6 4"/><text x="8" y="${sy(0) - 6}" fill="#4a7a3a">marknivå 0</text>`;
const farg = ['', '#555', '#a0522d', '#222', '#c08a30'];
for (let n = 1; n <= 4; n++) svg += `<polyline fill="none" stroke="${farg[n]}" stroke-width="3" points="${prof[n].map(([x, y]) => `${sx(x).toFixed(1)},${sy(y).toFixed(1)}`).join(' ')}"/><text x="20" y="${30 + n * 20}" fill="${farg[n]}">yta på lager ${n}: ${prof[n][100][1].toFixed(2)} m i mitten (kullen +0,3)</text>`;
svg += `<text x="20" y="25" font-weight="bold">A-064 tvärsnitt genom tippen (väst → öst, grindrampen till höger)</text></svg>`;
{ const p2 = await p.context().newPage(); await p2.setContent(svg); await p2.screenshot({ path: dir + 'tvarsnitt.png', clip: { x: 0, y: 0, width: W, height: H } }); await p2.close(); }
ut.push(['tvärsnitt: ytan +0,6 / +0,3 / 0 / −0,3 (+ kullen) per lager', Math.abs(prof[1][60][1] - 0.6) < 0.31 && Math.abs(prof[4][60][1] + 0.3) < 0.31 && prof[1][100][1] > prof[4][100][1] + 0.8]);
for (const [t, ok] of ut) console.log(ok ? '✓' : '✗', t);
console.log(fel.length ? fel.join('\n') : 'inga sidfel'); await b.close(); process.exit(ut.every((x) => x[1]) && !fel.length ? 0 : 1);
