// CV: ett besök (Rolf på kaffe) – förvarning, väntar, klick, samtal, gåva och respekt. Kör: node verktyg/test-besok.mjs [url]
import { chromium } from '/home/claude/verktyg/node_modules/playwright-core/index.mjs';
const url = process.argv[2] || 'http://127.0.0.1:8765/printa-hem.html';
const b = await chromium.launch({ executablePath: '/usr/bin/google-chrome', args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader'] });
const p = await (await b.newContext({ viewport: { width: 1280, height: 720 } })).newPage(); const fel = [];
p.on('pageerror', (e) => fel.push('sidfel: ' + e.message));
await p.goto(url); await p.waitForTimeout(6000);
const H = (f, a) => p.evaluate(f, a); const ut = [];
await H(() => { const h = window.__printahem; h.S.kapitelKlart = true; h.S.kapitel = 2; h.ui.overlay.hidden = true; });
const r0 = await H(() => window.__printahem.S.respekt || 0);
await H(() => { const h = window.__printahem; h.startaBesok(h.BESOK[0]); });
for (let i = 0; i < 30 && (await H(() => window.__printahem.besok.fas)) === 'kommer'; i++) await p.waitForTimeout(500);
ut.push(['Rolf väntar vid grinden', await H(() => window.__printahem.besok.fas === 'vantar')]);
await H(() => { const h = window.__printahem, g = h.besok.fig.position; h.spelare.pos.set(g.x + 1, 0, g.z - 1); h.besok.fig.userData.interaktion.aktivera(); });
ut.push(['samtalet startar vid klick', await H(() => window.__printahem.besok.fas === 'pratar')]);
for (let i = 0; i < 150 && (await H(() => window.__printahem.besok.fas)) === 'pratar'; i++) { await H(() => { const h = window.__printahem, g = h.besok.fig.position; h.spelare.pos.set(g.x + 1, 0, g.z - 1); }); await p.waitForTimeout(1000); }
console.log('läge', await H(() => { const h = window.__printahem; return h.besok.fas + ' ' + h.besok.steg + ' ' + h.besok.t.toFixed(1) + ' ov ' + h.ui.overlay.hidden + h.ui.butiksOverlay.hidden; }));
ut.push(['gåva: kylen', await H(() => !!window.__printahem.S.kyl)]);
ut.push(['respekt ökade', (await H(() => window.__printahem.S.respekt || 0)) > r0]);
ut.push(['besöket sparat', await H(() => (window.__printahem.S.besok || []).includes('rolfKaffe'))]);
await H(() => { const h = window.__printahem; h.S.matt = 50; h.laggTill('burk_lingon'); h.ata('burk_lingon'); });
ut.push(['äta höjer magen', (await H(() => window.__printahem.S.matt)) > 50]);
for (const [t, ok] of ut) console.log(ok ? '✓' : '✗', t);
console.log(fel.length ? fel.join('\n') : 'inga sidfel'); await b.close(); process.exit(ut.every((x) => x[1]) && !fel.length ? 0 : 1);
