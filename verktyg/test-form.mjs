// Inkorg 12d: första gången en sak nämns står den i obestämd form med ett skäl. OKÄND SAK I BESTÄMD FORM larmar annars.
// Kör: node verktyg/test-form.mjs [url]
import { chromium } from '/home/claude/verktyg/node_modules/playwright-core/index.mjs';
const url = process.argv[2] || 'http://127.0.0.1:8765/printa-hem.html';
const b = await chromium.launch({ executablePath: '/usr/bin/google-chrome', args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader'] });
const p = await (await b.newContext({ viewport: { width: 1280, height: 720 } })).newPage(); const fel = [];
p.on('pageerror', (e) => fel.push(e.message));
await p.addInitScript(() => { window.__brott = []; window.__textLogg = (k, v, t) => { if (k === 'brott') window.__brott.push(v + ' ' + t); }; localStorage.setItem('spar:printahem2:v1', JSON.stringify({ spelarNamn: 'Test', introSett: true })); });
await p.goto(url); await p.waitForTimeout(4000);
const ut = [];
const brott = () => p.evaluate(() => window.__brott.filter((x) => x.startsWith('OKÄND SAK I BESTÄMD FORM')));
await p.evaluate(() => window.__printahem.prataNu('du', 'Vattna krukan sen.', 'STORY', { direkt: true })); await p.waitForTimeout(1500);
const b1 = await brott();
ut.push([`"krukan" före presentationen larmar: ${b1.length} (${b1[0] || ''})`, b1.length === 1]);
await p.evaluate(() => window.__printahem.prataNu('du', 'Jag borde printa en säng, så jag slipper sova på golvet. Sängen blir min.', 'STORY', { direkt: true })); await p.waitForTimeout(1500);
const b2 = await brott();
ut.push([`"en säng … Sängen" i samma replik larmar inte: ${b2.length - b1.length}`, b2.length === b1.length]);
await p.evaluate(() => window.__printahem.prataNu('du', 'Sängen står där.', 'STORY', { direkt: true })); await p.waitForTimeout(1500);
const b3 = await brott();
ut.push([`"Sängen" efteråt larmar inte: ${b3.length - b2.length}`, b3.length === b2.length]);
ut.push([`${fel.length} sidfel ${fel.slice(0, 2).join(' · ')}`, fel.length === 0]);
for (const [t, ok] of ut) console.log(ok ? '✓' : '✗', t);
await b.close(); process.exit(ut.every((x) => x[1]) ? 0 : 1);
