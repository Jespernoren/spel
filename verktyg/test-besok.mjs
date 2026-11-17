// CV: ett besök (Rolf på kaffe) – förvarning, väntar, klick, samtal, gåva och respekt. Kör: node verktyg/test-besok.mjs [url]
import { chromium } from '/home/claude/verktyg/node_modules/playwright-core/index.mjs';
const url = process.argv[2] || 'http://127.0.0.1:8765/printa-hem.html';
const b = await chromium.launch({ executablePath: '/usr/bin/google-chrome', args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader'] });
const p = await (await b.newContext({ viewport: { width: 1280, height: 720 } })).newPage(); const fel = [];
p.on('pageerror', (e) => fel.push('sidfel: ' + e.message));
await p.goto(url); await p.waitForTimeout(6000);
for (let i = 0; i < 25; i++) {   // starta spelet som en spelare (förut startades det aldrig, så besöket stod still)
  const namn = await p.$('.ph-namn input'); if (namn) { await namn.fill('Test'); await p.keyboard.press('Enter'); }
  else await p.evaluate(() => { for (const k of document.querySelectorAll('button')) { const r = k.getBoundingClientRect(); const top = document.elementFromPoint(r.x + r.width / 2, r.y + r.height / 2); if (r.width && top && (top === k || k.contains(top)) && /Börja$|BÖRJA|Hoppa över|Starta|Fortsätt/i.test(k.textContent.trim())) { k.click(); break; } } });
  await p.waitForTimeout(1000);
}
const H = (f, a) => p.evaluate(f, a); const ut = [];
await H(() => { const h = window.__printahem; h.S.kapitelKlart = true; h.S.kapitel = 2; h.ui.overlay.hidden = true; });
const r0 = await H(() => window.__printahem.S.respekt || 0);
await H(() => { const h = window.__printahem; h.startaBesok(h.BESOK[0]); });
for (let i = 0; i < 60 && (await H(() => window.__printahem.besok.fas)) === 'kommer'; i++) await H(() => { for (let k = 0; k < 10; k++) window.__printahem.besokTick(0.1); });   // headless: loopen går sällan, så besöket stegas här
ut.push(['Rolf väntar vid grinden', await H(() => window.__printahem.besok.fas === 'vantar')]);
await H(() => { const h = window.__printahem, g = h.besok.fig.position; h.spelare.pos.set(g.x + 1, 0, g.z - 1); h.besok.fig.userData.interaktion.aktivera(); });
ut.push(['samtalet startar vid klick', await H(() => window.__printahem.besok.fas === 'pratar')]);
for (let i = 0; i < 300 && (await H(() => window.__printahem.besok.fas)) === 'pratar'; i++) { await H(() => { const h = window.__printahem, g = h.besok.fig.position; h.spelare.pos.set(g.x + 1, 0, g.z - 1); for (let k = 0; k < 10; k++) h.besokTick(0.1); }); await p.waitForTimeout(200); }
console.log('läge', await H(() => { const h = window.__printahem; return h.besok.fas + ' ' + h.besok.steg + ' ' + h.besok.t.toFixed(1) + ' ov ' + h.ui.overlay.hidden + h.ui.butiksOverlay.hidden; }));
ut.push(['gåva: kylen (i handen sedan ED 13)', await H(() => !!window.__printahem.S.kyl || !!window.__printahem.S.kylFranRolf)]);
ut.push(['respekt ökade', (await H(() => window.__printahem.S.respekt || 0)) > r0]);
ut.push(['besöket sparat', await H(() => (window.__printahem.S.besok || []).includes('rolfKaffe'))]);
await H(() => { const h = window.__printahem; h.S.matt = 50; h.laggTill('burk_lingon'); h.ata('burk_lingon'); });
ut.push(['äta höjer magen', (await H(() => window.__printahem.S.matt)) > 50]);
for (const [t, ok] of ut) console.log(ok ? '✓' : '✗', t);
console.log(fel.length ? fel.join('\n') : 'inga sidfel'); await b.close(); process.exit(ut.every((x) => x[1]) && !fel.length ? 0 : 1);
