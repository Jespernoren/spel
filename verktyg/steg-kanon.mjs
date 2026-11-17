// A-069 §5: skriver verktyg/steg-kanon.json – målens id och text som de stod när boten skrevs. AX-boten matchar på id via den här tabellen.
import { chromium } from '/home/claude/verktyg/node_modules/playwright-core/index.mjs';
import fs from 'node:fs';
const b = await chromium.launch({ executablePath: '/usr/bin/google-chrome', args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader'] }); const p = await b.newPage();
const fel = []; p.on('pageerror', (e) => fel.push(e.message));
await p.goto('http://127.0.0.1:8765/printa-hem.html'); await p.waitForFunction(() => window.__printahem?.STEG, null, { timeout: 60000 });
const r = await p.evaluate(() => { const H = window.__printahem; const k = {}, dub = []; H.STEG.forEach((st, i) => { if (!st.id) dub.push('UTAN ' + i); else if (k[st.id] !== undefined) dub.push('DUBBEL ' + st.id); let t = ''; try { t = typeof st.text === 'function' ? st.text() : st.text; } catch {} k[st.id] = t; }); return { k, dub }; });
fs.writeFileSync('verktyg/steg-kanon.json', JSON.stringify(r.k, null, 1)); console.log(Object.keys(r.k).length, r.dub, fel.slice(0, 3)); await b.close();
