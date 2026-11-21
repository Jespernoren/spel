// Jesper 22:13: fotot av första nyckelringen tas när du håller den i handen direkt efter att du tagit ut den – och ringen syns på bilden.
import fs from 'node:fs';
import { chromium } from '/home/claude/verktyg/node_modules/playwright-core/index.mjs';
const url = process.argv[2] || 'http://127.0.0.1:8765/ax2.html';
fs.mkdirSync(new URL('./polaroid/', import.meta.url), { recursive: true });
const b = await chromium.launch({ executablePath: '/usr/bin/google-chrome', args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader'] });
const p = await b.newPage({ viewport: { width: 1280, height: 720 } }); const fel = []; p.on('pageerror', (e) => fel.push(e.message));
const spar = fs.readFileSync(new URL('./sparfiler/start-dag2.json', import.meta.url), 'utf8');
await p.addInitScript((spar) => { if (!sessionStorage.getItem('t')) { sessionStorage.setItem('t', 1); localStorage.clear(); localStorage.setItem('spar:printahem2:v1', spar); } }, spar);
await p.goto(url); await p.waitForTimeout(4000);
await p.waitForFunction(() => window.__startaSpel && document.querySelector('.br-starta'), null, { timeout: 8000 }).then(() => p.evaluate(() => window.__startaSpel())).catch(() => {});
await p.waitForTimeout(2500); for (let i = 0; i < 6; i++) { await p.keyboard.press('Enter'); await p.waitForTimeout(250); } await p.waitForTimeout(1500);
const fore = await p.evaluate(() => { const P = window.__printahem, S = P.S; S.polaroid = (S.polaroid || []).filter((f) => f.id !== 'nyckelring'); S.forstaRingIHand = false; S.stat.salt = 0;
  const sk = P.skrivare.find((x) => !x.jobb) || P.skrivare[0]; sk.jobb = null; sk.klar = 'nyckelring'; sk.klarL = { nyckelring: 1 }; window.__t0 = performance.now(); P.anvandSkrivare(sk); return { iHand: P.valdTyp() }; });
let foto = null; for (let i = 0; i < 40 && !foto; i++) { await p.waitForTimeout(250); foto = await p.evaluate(() => { const f = (window.__printahem.S.polaroid || []).find((x) => x.id === 'nyckelring'); return f ? { ms: Math.round(performance.now() - window.__t0), bild: f.bild } : null; }); }
if (foto?.bild) fs.writeFileSync(new URL('./polaroid/forsta-ringen.jpg', import.meta.url), Buffer.from(foto.bild.split(',')[1], 'base64'));
console.log(`${fore.iHand === 'nyckelring' ? '✓' : '✗'} ringen i handen (${fore.iHand}) · ${foto ? '✓' : '✗'} fotot togs ${foto ? foto.ms + ' ms efter uttaget' : 'aldrig'} · ${foto && foto.ms < 2500 ? '✓' : '✗'} direkt · ${fel.length ? '✗ sidfel ' + fel[0] : '✓ 0 sidfel'} · bild: verktyg/polaroid/forsta-ringen.jpg`);
await b.close();
