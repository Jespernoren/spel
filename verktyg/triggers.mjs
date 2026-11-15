// punkt BD: tar fram röstmanuset ur spelet och skriver verktyg/triggers.md (med verktyg/triggers.py)
import fs from 'fs'; import { execFileSync } from 'child_process';
import { chromium } from '/home/claude/verktyg/node_modules/playwright-core/index.mjs';
const url = process.argv[2] || 'http://127.0.0.1:8765/printa-hem.html';
const b = await chromium.launch({ executablePath: '/usr/bin/google-chrome', args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader'] });
const p = await b.newPage();
await p.addInitScript(() => { if (!sessionStorage.getItem('x')) { sessionStorage.setItem('x', 1); localStorage.clear(); localStorage.setItem('spar:printahem2:v1', JSON.stringify({ introSett: true })); } });
await p.goto(url); await p.waitForTimeout(4000);
fs.writeFileSync('/tmp/triggers-detalj.json', JSON.stringify(await p.evaluate(() => window.__printahem.rostManusDetalj())));
await b.close();
const rot = new URL('..', import.meta.url).pathname;
execFileSync('python3', [rot + 'verktyg/triggers.py', '/tmp/triggers-detalj.json', rot + 'spel/printa-hem/spel.js', rot + 'verktyg/triggers.md'], { stdio: 'inherit' });
