// A-057: frö-tankarna kommer en gång när man går nära, och SPOILER flaggar ett avslöjande utan frö ett kapitel innan. Kör: node verktyg/test-a057.mjs [url]
import { chromium } from '/home/claude/verktyg/node_modules/playwright-core/index.mjs';
const url = process.argv[2] || 'http://127.0.0.1:8765/a062.html';
const b = await chromium.launch({ executablePath: '/usr/bin/google-chrome', args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader'] });
const p = await (await b.newContext({ viewport: { width: 1000, height: 600 } })).newPage(); const fel = [];
p.on('pageerror', (e) => fel.push('sidfel: ' + e.message));
await p.goto(url); await p.waitForTimeout(6000);
for (let i = 0; i < 25; i++) {
  const namn = await p.$('.ph-namn input'); if (namn) { await namn.fill('Test'); await p.keyboard.press('Enter'); }
  else await p.evaluate(() => { for (const k of document.querySelectorAll('button')) { const r = k.getBoundingClientRect(); const top = document.elementFromPoint(r.x + r.width / 2, r.y + r.height / 2); if (r.width && top && (top === k || k.contains(top)) && /Börja$|BÖRJA|Hoppa över|Starta|Fortsätt/i.test(k.textContent.trim())) { k.click(); break; } } });
  await p.waitForTimeout(1000);
}
const ut = [];
const ga = async (x, z, extra) => { await p.evaluate(({ x, z, extra }) => { const h = window.__printahem; if (extra) Object.assign(h.S, extra); h.spelare.pos.x = x; h.spelare.pos.z = z; }, { x, z, extra }); await p.waitForTimeout(2600); return p.evaluate(() => ({ ...(window.__printahem.S.fro || {}) })); };
const tunna = await p.evaluate(() => { const h = window.__printahem; const t = h.skrapLista.find((s) => s.userData.sort === 'tunna'); return t ? [t.position.x, t.position.z] : null; });
let f = await ga(tunna[0] + 1, tunna[1], { kapitel: 1, dag: 1 });
ut.push([`tunnan: fröet när man går nära (kapitel ${f.tunna})`, f.tunna === 1]);
const g = await p.evaluate(() => [window.__printahem.GRIND.x, window.__printahem.GRIND.z]);
f = await ga(g[0] + 2, g[1], { dag: 2 }); ut.push([`grustagets grind dag 2 (${f.grind})`, f.grind === 1]);
f = await ga(g[0] + 1.5, g[1], { dag: 3 }); ut.push([`bäcken: "Det porlar där nere" efter grinden (${f.baeck})`, f.baeck === 1]);
const n = await p.evaluate(() => window.__printahem.textLogg().filter((x) => /Tratten är stor som en kaffekopp|Igensvetsad/.test(x.text || x[2] || JSON.stringify(x))).length);
f = await ga(g[0] + 2, g[1]);
const n2 = await p.evaluate(() => window.__printahem.textLogg().filter((x) => /Tratten är stor som en kaffekopp|Igensvetsad/.test(x.text || x[2] || JSON.stringify(x))).length);
ut.push([`varje frö-tanke kommer en gång (${n} → ${n2})`, n2 === n]);
// SPOILER: tunnan avslöjas i kapitel 2 med frö i kapitel 1 = ok; grinden kapas i samma kapitel som fröet = SPOILER
const sp = await p.evaluate(async () => { const h = window.__printahem, S = h.S; S.kapitel = 2; S.stat.tungMalt = 1; S.grindKapad = true; await new Promise((r) => setTimeout(r, 2500)); return [...h.froSpoiler]; });
ut.push([`SPOILER: tunnan och grinden är ok (frö i K1, avslöjade i K2): ${JSON.stringify(sp)}`, !sp.some((x) => /^tunna/.test(x)) && !sp.some((x) => /^grind/.test(x))]);
const sp2 = await p.evaluate(async () => { const h = window.__printahem, S = h.S; S.bengtAvslojad = 15; delete (S.fro || {}).kikare; S.bengtKikare = false; await new Promise((r) => setTimeout(r, 2500)); return [...h.froSpoiler]; });
ut.push([`SPOILER flaggar kikaren när fröet aldrig syntes: ${JSON.stringify(sp2)}`, sp2.some((x) => /^kikare/.test(x))]);
for (const [t, ok] of ut) console.log(ok ? '✓' : '✗', t);
console.log(fel.length ? fel.join('\n') : 'inga sidfel'); await b.close(); process.exit(ut.every((x) => x[1]) && !fel.length ? 0 : 1);
