// Inkorg 12c: "filament" läses FILLAment. Uttalslistan i delat/rost.js byter ord bara i det som läses upp, aldrig på skärmen.
// Kör: node verktyg/test-uttal.mjs [url]
import { chromium } from '/home/claude/verktyg/node_modules/playwright-core/index.mjs';
const url = process.argv[2] || 'http://127.0.0.1:8765/printa-hem.html';
const b = await chromium.launch({ executablePath: '/usr/bin/google-chrome', args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--autoplay-policy=no-user-gesture-required'] });
const p = await (await b.newContext({ viewport: { width: 1280, height: 720 } })).newPage(); const fel = [];
p.on('pageerror', (e) => fel.push(e.message));
await p.addInitScript(() => {
  window.__brott = []; window.__textLogg = (k, v, t) => { if (k === 'brott') window.__brott.push(v + ' ' + t); };
  window.__sagt = [];
  const s = window.speechSynthesis; if (s) { const orig = s.speak.bind(s); s.speak = (u) => { window.__sagt.push(u.text); return orig(u); }; }
  localStorage.setItem('spar:printahem2:v1', JSON.stringify({ spelarNamn: 'Test', introSett: true }));
});
await p.goto(url); await p.waitForTimeout(4000);
const ut = [];
const r = await p.evaluate(() => { const u = new SpeechSynthesisUtterance('Filament och filamentet. En filamentrulle. Tippium-filament!'); return u.text; });
ut.push([`uppläst: "${r}"`, r === 'Fillament och fillamentet. En fillamentrulle. Tippium-fillament!']);
const orort = await p.evaluate(() => ['filamenten?', 'filamentlåda', 'Profilament'].map((t) => new SpeechSynthesisUtterance(t).text));
ut.push([`andra ord orörda: ${orort.join(' · ')}`, orort.join('|') === 'filamenten?|filamentlåda|Profilament']);
await p.evaluate(() => window.__printahem.prataNu('berattare', 'En kvarn gör det till filament.', 'STORY', { direkt: true }));
await p.waitForTimeout(1500);
const sagt = await p.evaluate(() => window.__sagt.filter((t) => /fil+ament/i.test(t)));
ut.push([`spelet läser: ${JSON.stringify(sagt)}`, sagt.length > 0 && sagt.every((t) => /fillament/i.test(t) && !/\bfilament/i.test(t))]);
const skarm = await p.evaluate(() => document.body.innerText);
ut.push(['skärmen visar aldrig "fillament"', !/fillament/i.test(skarm)]);
await p.waitForTimeout(1200);
const brott = await p.evaluate(() => window.__brott.filter((x) => x.startsWith('UTTAL SAKNAS')));
ut.push([`${brott.length} UTTAL SAKNAS ${brott.slice(0, 2).join(' · ')}`, brott.length === 0]);
ut.push([`${fel.length} sidfel ${fel.slice(0, 2).join(' · ')}`, fel.length === 0]);
for (const [t, ok] of ut) console.log(ok ? '✓' : '✗', t);
await b.close(); process.exit(ut.every((x) => x[1]) ? 0 : 1);
