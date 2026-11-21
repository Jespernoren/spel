// Jesper 22:06: bekräftelsen när en uppgift blir klar – studs, gnistor, bock och ching på saken, mynten till pengaräknaren. Bilder i verktyg/bekrafta/.
import fs from 'node:fs';
import { chromium } from '/home/claude/verktyg/node_modules/playwright-core/index.mjs';
const url = process.argv[2] || 'http://127.0.0.1:8765/ax2.html';
fs.mkdirSync(new URL('./bekrafta/', import.meta.url), { recursive: true });
const b = await chromium.launch({ executablePath: '/usr/bin/google-chrome', args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader'] });
const p = await b.newPage({ viewport: { width: 1280, height: 720 } }); const fel = []; p.on('pageerror', (e) => fel.push(e.message));
const spar = fs.readFileSync(new URL('./sparfiler/start-dag2.json', import.meta.url), 'utf8');
await p.addInitScript((spar) => { if (!sessionStorage.getItem('t')) { sessionStorage.setItem('t', 1); localStorage.clear(); localStorage.setItem('spar:printahem2:v1', spar); } }, spar);
await p.goto(url); await p.waitForTimeout(4000);
await p.waitForFunction(() => window.__startaSpel && document.querySelector('.br-starta'), null, { timeout: 8000 }).then(() => p.evaluate(() => window.__startaSpel())).catch(() => {});
await p.waitForTimeout(2500); for (let i = 0; i < 6; i++) { await p.keyboard.press('Enter'); await p.waitForTimeout(250); } await p.waitForTimeout(1500);
// titta på cykeln från 2,5 m
await p.evaluate(() => { const P = window.__printahem, c = P.cykelObj(), sp = P.spelare, m = new P.THREE.Box3().setFromObject(c).getCenter(new P.THREE.Vector3()); const x = m.x + 2.0, z = m.z + 1.6; sp.pos.set(x, sp.pos.y, z); sp.yaw = Math.atan2(-(m.x - x), -(m.z - z)); sp.pitch = -0.15; });
await p.waitForTimeout(600);
// headless ritar ca 1 bild/s – för bilderna går effekten 10× långsammare och spelet ritas för hand
await p.evaluate(() => { const B = window.__printahem.BEKRAFTA; window.__bekr0 = { ...B }; B.studsMs *= 10; B.gnistMs *= 10; B.bockMs *= 10; window.__printahem.bekrafta(window.__printahem.cykelObj()); });
const bilder = [];
for (const ms of [600, 1800, 3800]) { await p.waitForFunction((ms) => true, ms); await p.waitForTimeout(ms - (bilder.length ? [600, 1800, 3800][bilder.length - 1] : 0)); await p.evaluate(() => window.__printahem.rendera()); const f = `cykeln-${ms / 10}ms.png`; await p.screenshot({ path: new URL('./bekrafta/' + f, import.meta.url).pathname }); bilder.push(f); }
await p.evaluate(() => Object.assign(window.__printahem.BEKRAFTA, window.__bekr0));
await p.waitForTimeout(1200);
await p.evaluate(() => { window.__printahem.myntRegn(60); for (const an of document.getAnimations()) { if (!an.effect?.target?.classList?.contains('hud-mynt')) continue; an.pause(); an.currentTime = an.effect.getTiming().duration * 0.55; } }); console.log('mynt i bild:', await p.evaluate(() => document.querySelectorAll('.hud-mynt').length)); await p.waitForTimeout(300);   // frys mitt i flygningen för bilden await p.screenshot({ path: new URL('./bekrafta/mynten.png', import.meta.url).pathname });
const ut = await p.evaluate(() => ({ logg: window.__printahem.textLogg().filter((e) => e.kalla === 'bekräftelse').length, klarad: document.querySelectorAll('.hud-klarad, .dn-klar-kopia').length }));
console.log(`${ut.logg >= 1 ? '✓' : '✗'} bekräftelsen ritades (${ut.logg}) · ${ut.klarad === 0 ? '✓' : '✗'} ingen grön KLART i toppen · ${fel.length ? '✗ sidfel ' + fel[0] : '✓ 0 sidfel'} · bilder: ${bilder.join(', ')}, mynten.png`);
await b.close();
