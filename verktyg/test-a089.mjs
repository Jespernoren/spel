// A-089 (inkorg 26 p.1): dagnumret står en gång på dagbokskortet – i nedräkningsraden, inte i rubriken.
// Kör: node verktyg/test-a089.mjs [url]   Skärmdumpar i verktyg/a089/.
import fs from 'node:fs';
import { chromium } from '/home/claude/verktyg/node_modules/playwright-core/index.mjs';
const url = process.argv[2] || 'http://127.0.0.1:8765/ax.html';
const dir = new URL('./a089/', import.meta.url).pathname; fs.mkdirSync(dir, { recursive: true });
const b = await chromium.launch({ executablePath: '/usr/bin/google-chrome', args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--autoplay-policy=no-user-gesture-required'] });
const ut = [];
const p = await b.newPage({ viewport: { width: 1280, height: 720 } }); const fel = []; p.on('pageerror', (e) => fel.push(e.message));
const spar = fs.readFileSync(new URL('./sparfiler/start-dag2.json', import.meta.url), 'utf8');
await p.addInitScript((spar) => { if (!sessionStorage.getItem('t')) { sessionStorage.setItem('t', 1); localStorage.clear(); localStorage.setItem('spar:printahem2:v1', spar); } }, spar);
await p.goto(url); await p.waitForTimeout(4000);
await p.waitForFunction(() => window.__startaSpel && document.querySelector('.br-starta'), null, { timeout: 8000 }).then(() => p.evaluate(() => window.__startaSpel())).catch(() => {});
await p.waitForTimeout(3000); for (let i = 0; i < 20 && await p.evaluate(() => !!document.querySelector('.ph-dagbokkort')); i++) { await p.keyboard.press('Enter'); await p.waitForTimeout(400); }
const kort = async () => p.evaluate(() => { const k = document.querySelector('.ph-dagbokkort'); if (!k) return null; return { rubrik: (k.querySelector('.ph-dk-rub')?.innerText || '').trim(), text: (k.querySelector('.ph-pap-text')?.innerText || '').replace(/\s+/g, ' ').trim(), allt: k.innerText.replace(/\s+/g, ' ') }; });
const dagN = (x) => (String(x).match(/\bDag \d+\b/g) || []).length;
/* dag 1: morgonkortet */
await p.evaluate(() => { const P = window.__printahem; P.S.dag = 1; P.S.dag1Sida = false; P.visaDagNotis(); });
let k1 = null; for (let i = 0; i < 40 && !k1; i++) { await p.waitForTimeout(250); k1 = await kort(); }
await p.screenshot({ path: dir + 'dag1.png' });
ut.push([`dag 1: rubrik "${k1?.rubrik}" · text "${k1?.text}"`, !!k1 && k1.rubrik === 'Äntligen fri från tjat' && dagN(k1.allt) === 1 && /^Dag 1\. 21 dagar till jul\./.test(k1.text)]);
for (let i = 0; i < 10 && await p.evaluate(() => !!document.querySelector('.ph-dagbokkort')); i++) { await p.keyboard.press('Enter'); await p.waitForTimeout(400); }
/* dag 2 → sov → morgonen dag 3 */
await p.evaluate(() => { const P = window.__printahem, S = P.S; S.dag = 2; const i = P.STEG.findIndex((x) => x.id === 'sov2'); if (i >= 0) S.steg = i; P.sov(); });
let k3 = null; for (let i = 0; i < 180 && !(k3 && /till jul/.test(k3.text)); i++) { await p.waitForTimeout(500); k3 = await kort(); if (!(k3 && /till jul/.test(k3.text))) await p.evaluate(() => { const k = [...document.querySelectorAll('button')].find((b) => /^Hoppa över$/.test(b.textContent.trim()) && b.offsetParent); if (k) k.click(); const s2 = [...document.querySelectorAll('button')].find((b) => /BÖRJA|Börja dagen|Fortsätt/i.test(b.textContent) && b.offsetParent && !b.closest('.ph-dagbokkort')); if (s2) s2.click(); }); }
await p.screenshot({ path: dir + 'dag3.png' });
ut.push([`dag 3: rubrik "${k3?.rubrik}" · text "${k3?.text}"`, !!k3 && !/\bDag \d/.test(k3.rubrik) && dagN(k3.allt) === 1 && /^Dag 3\. 19 dagar till jul\./.test(k3.text)]);
const brott = await p.evaluate(() => window.__printahem.textLogg().filter((e) => e.kalla === 'brott' && (e.vem === 'LÅNG DAGBOK' || (e.vem === 'SAMMA MENING TVÅ GÅNGER' && /rubriken/.test(e.text)))).map((e) => e.vem + ': ' + e.text));
ut.push([`0 SAMMA MENING TVÅ GÅNGER (rubrik + text) och 0 LÅNG DAGBOK (${brott.join(' · ') || 'inga'})`, !brott.length]);
ut.push([`${fel.length} sidfel ${fel.slice(0, 2).join(' · ')}`, !fel.length]);
await b.close();
for (const [t, ok] of ut) console.log(`${ok ? '✓' : '✗'} ${t}`);
process.exit(ut.every(([, ok]) => ok) ? 0 : 1);
