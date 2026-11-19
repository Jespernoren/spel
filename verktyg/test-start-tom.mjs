// A-076 18:05: röktestet före varje push. Tom localStorage → 0 sidfel → STARTA → intro → dagbokskort → spelvyn.
// Kör: node verktyg/test-start-tom.mjs [url]  → skärmdumpar i verktyg/start-tom/
import fs from 'node:fs';
import { chromium } from '/home/claude/verktyg/node_modules/playwright-core/index.mjs';
const url = process.argv[2] || 'http://127.0.0.1:8765/printa-hem.html';
const dir = new URL('./start-tom/', import.meta.url).pathname; fs.mkdirSync(dir, { recursive: true });
const ut = [];
const b = await chromium.launch({ executablePath: '/usr/bin/google-chrome', args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--autoplay-policy=no-user-gesture-required'] });
const ctx = await b.newContext({ viewport: { width: 1280, height: 720 } });   /* ny profil: localStorage och IndexedDB är tomma */
const p = await ctx.newPage(); const fel = [];
p.on('pageerror', (e) => fel.push(e.message));
await p.goto(url); await p.waitForTimeout(5000);
const H = (f, a) => p.evaluate(f, a);
const s0 = await H(() => ({ tom: localStorage.length, sidfel: window.__sidfel || [], knapp: !!document.querySelector('.br-starta') }));
await p.screenshot({ path: dir + '1-menyn.png' });
ut.push([`tom localStorage (${s0.tom} nycklar vid laddning): 0 sidfel vid start (${[...fel, ...s0.sidfel].join(' · ') || 'inga'}), STARTA syns ${s0.knapp}`, !fel.length && !s0.sidfel.length && s0.knapp]);
let intro = false;
if (s0.knapp) {
  await p.click('.br-starta'); await p.waitForTimeout(1200);
  const namn = await p.$('input[placeholder*="namn"]'); if (namn) { await namn.fill('Testaren'); await p.keyboard.press('Enter'); } await p.waitForTimeout(2500);   /* första gången frågar spelet vad man heter */
  intro = await H(() => !!document.querySelector('.ph-intro3, .ph-intro'));
  await p.screenshot({ path: dir + '2-introt.png' });
}
ut.push([`STARTA → introt (${intro})`, intro]);
let kort = false;
for (let i = 0; i < 8 && !kort; i++) { await p.keyboard.press('Enter'); await p.waitForTimeout(1500); kort = await H(() => !!document.querySelector('.ph-med:not([hidden]) .ph-dagbokkort')); }
await p.screenshot({ path: dir + '3-dagbokskortet.png' });
ut.push([`introt → dagbokskortet (${kort})`, kort]);
await p.keyboard.press('Enter'); await p.waitForTimeout(3000);
const s3 = await H(() => ({ spel: window.__printahem?.ui?.overlay?.hidden === true, kort: !!document.querySelector('.ph-med:not([hidden]) .ph-dagbokkort'), duk: !!document.querySelector('canvas'), brott: (window.__textLogg || []).filter((e) => e.typ === 'brott' && e.vem === 'SIDFEL VID START').length }));
await p.screenshot({ path: dir + '4-spelvyn.png' });
ut.push([`dagbokskortet → spelvyn (meny dold ${s3.spel}, kortet stängt ${!s3.kort}, canvas ${s3.duk})`, s3.spel && !s3.kort && s3.duk]);
ut.push([`0 SIDFEL VID START och 0 sidfel under hela vägen (${fel.join(' · ') || 'inga'})`, !fel.length && !s3.brott]);
for (const [t, ok] of ut) console.log(`${ok ? '✓' : '✗'} ${t}`);
await b.close();
process.exit(ut.every(([, ok]) => ok) ? 0 : 1);
