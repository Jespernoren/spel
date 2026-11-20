// A-090 (inkorg 28): byggsatser som monteras på en maskin är aldrig FAST I HANDEN, inga 404 vid start, ingen DUBBEL UPPMANING för "mata kvarnen".
// Kör: node verktyg/test-a090.mjs [url]
import fs from 'node:fs';
import { chromium } from '/home/claude/verktyg/node_modules/playwright-core/index.mjs';
const url = process.argv[2] || 'http://127.0.0.1:8765/ax.html';
const b = await chromium.launch({ executablePath: '/usr/bin/google-chrome', args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader'] });
const ut = [];
const p = await b.newPage({ viewport: { width: 1280, height: 720 } }); const fel = [], saknas = [];
p.on('pageerror', (e) => fel.push(e.message)); p.on('response', (r) => { if (r.status() === 404) saknas.push(r.url().replace(/^.*\/\/[^/]+/, '')); });
const spar = fs.readFileSync(new URL('./sparfiler/start-dag4.json', import.meta.url), 'utf8');
await p.addInitScript((spar) => { if (!sessionStorage.getItem('t')) { sessionStorage.setItem('t', 1); localStorage.clear(); localStorage.setItem('spar:printahem2:v1', spar); } }, spar);
await p.goto(url); await p.waitForTimeout(6000);
await p.waitForFunction(() => window.__startaSpel && document.querySelector('.br-starta'), null, { timeout: 8000 }).then(() => p.evaluate(() => window.__startaSpel())).catch(() => {});
await p.waitForTimeout(4000);
const mont = ['matarband', 'turbomotor', 'jetmotor', 'petgtorn', 'petgcontainer', 'hardkniv', 'diamantkniv', 'stortratt', 'kolfslang', 'kolfband', 'helenskjul', 'gamingbod', 'kvarnmotor', 'vindsnurra', 'rullstall'];
const fast = await p.evaluate((m) => m.filter((x) => window.__printahem.fastIHanden('byggsats:' + x)), mont);
ut.push([`byggsatser som monteras på en maskin är inte FAST I HANDEN (${fast.join(', ') || 'alla har en plats'})`, !fast.length]);
ut.push([`inga 404 vid start (${saknas.join(', ') || 'inga'})`, !saknas.length]);
const dubbel = await p.evaluate(() => window.__printahem.textLogg ? window.__printahem.textLogg().filter((e) => e.kalla === 'brott' && e.vem === 'DUBBEL UPPMANING').length : 0);
ut.push([`0 DUBBEL UPPMANING (${dubbel})`, !dubbel]);
ut.push([`${fel.length} sidfel ${fel.slice(0, 2).join(' · ')}`, !fel.length]);
await b.close();
for (const [t, ok] of ut) console.log(`${ok ? '✓' : '✗'} ${t}`);
process.exit(ut.every(([, ok]) => ok) ? 0 : 1);
