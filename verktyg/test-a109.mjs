// A-109 (inkorg 54): bara nedräkningen, inget dagnummer. Morgonsidan dag 1, 10 och 22, nattskärmen dag 1 och dagboken (Tab).
// Kör: node verktyg/test-a109.mjs [url]   Bilder i verktyg/a109/.
import fs from 'node:fs';
import { chromium } from '/home/claude/verktyg/node_modules/playwright-core/index.mjs';
const url = process.argv[2] || 'http://127.0.0.1:8765/ax.html';
const dir = new URL('./a109/', import.meta.url).pathname; fs.mkdirSync(dir, { recursive: true });
const b = await chromium.launch({ executablePath: '/usr/bin/google-chrome', args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--autoplay-policy=no-user-gesture-required'] });
const ut = [], p = await b.newPage({ viewport: { width: 1280, height: 720 } }); const fel = []; p.on('pageerror', (e) => fel.push(e.message));
const spar = fs.readFileSync(new URL('./sparfiler/start-dag2.json', import.meta.url), 'utf8');
await p.addInitScript((spar) => { if (!sessionStorage.getItem('t')) { sessionStorage.setItem('t', 1); localStorage.clear(); localStorage.setItem('spar:printahem2:v1', spar); } }, spar);
await p.goto(url); await p.waitForTimeout(4000);
await p.waitForFunction(() => window.__startaSpel && document.querySelector('.br-starta'), null, { timeout: 8000 }).then(() => p.evaluate(() => window.__startaSpel())).catch(() => {});
await p.waitForTimeout(3000);
const stang = async () => { for (let i = 0; i < 20 && await p.evaluate(() => !!document.querySelector('.ph-dagbokkort')); i++) { await p.keyboard.press('Enter'); await p.waitForTimeout(400); } };
await stang();
const dagN = (x) => (String(x).match(/\bDag \d+\b/g) || []).length;
for (const [dag, vant] of [[1, '21 dagar till jul.'], [10, '12 dagar till jul.'], [22, 'Julafton.']]) {
  if (dag === 1) await p.evaluate(() => { const P = window.__printahem; P.S.dag = 1; P.S.dag1Sida = false; P.visaDagNotis(); });
  else await p.evaluate((d) => { const P = window.__printahem, S = P.S; S.dag = d - 1; const i = P.STEG.findIndex((x) => x.id === 'sov' + (d - 1)); if (i >= 0) S.steg = i; P.sov(); }, dag);   // somna kvällen före – morgonsidan kommer när dagen börjar
  let k = null; for (let i = 0; i < 200 && !(k && k.forst); i++) { if (i % 4 === 3) await p.evaluate(() => { const b = [...document.querySelectorAll('button')].find((x) => /^(Fortsätt|Kör!|Fortsätt bygga|Hoppa över)$/i.test(x.innerText.trim()) && !x.closest('.ph-dagbokkort')); b?.click(); }); await p.waitForTimeout(250); k = await p.evaluate(() => { const e = document.querySelector('.ph-dagbokkort'); return e ? { forst: (e.querySelector('.ph-dk-dag')?.innerText || '').trim(), allt: e.innerText.replace(/\s+/g, ' ') } : null; }); }
  await p.screenshot({ path: `${dir}morgon-dag${dag}.png` });
  ut.push([`morgonsidan dag ${dag}: första raden "${k?.forst}"`, !!k && k.forst === vant && dagN(k.allt) === 0]);
  await stang();
}
// nattskärmen dag 1
await p.evaluate(() => { const P = window.__printahem, S = P.S; S.dag = 1; const i = P.STEG.findIndex((x) => x.id === 'sov1'); if (i >= 0) S.steg = i; P.sov(); });
let natt = ''; for (let i = 0; i < 40 && !/God natt/.test(natt); i++) { await p.waitForTimeout(250); natt = await p.evaluate(() => document.querySelector('.ph-natt')?.innerText.replace(/\s+/g, ' ') || ''); }
await p.screenshot({ path: `${dir}natt-dag1.png` });
ut.push([`nattskärmen dag 1: "${natt.slice(0, 40)}"`, /^🌙? ?21 dagar kvar\. God natt\./.test(natt.trim()) && !dagN(natt)]);
for (let i = 0; i < 80 && await p.evaluate(() => !!document.querySelector('.ph-natt')); i++) await p.waitForTimeout(250);
await stang();
// dagboken (Tab → Min dagbok)
await p.evaluate(() => window.__printahem.oppnaDagbok?.());
await p.waitForTimeout(700); await p.evaluate(() => document.querySelector('[data-flik="dagbok"]')?.click()); await p.waitForTimeout(900);
const db = await p.evaluate(() => { const o = document.querySelector('.fp-overlay:not([hidden])') || document.body; return { upp: [...o.querySelectorAll('.ph-upp-dag b')].map((x) => x.innerText.trim()).slice(0, 4), allt: o.innerText.replace(/\s+/g, ' ') }; });
await p.screenshot({ path: `${dir}dagboken.png` });
ut.push([`dagboken: uppslagen heter ${db.upp.join(', ') || '(inga)'}`, db.upp.length > 0 && db.upp.every((t) => /^\d+ december$/.test(t)) && !dagN(db.allt)]);
const brott = await p.evaluate(() => window.__printahem.textLogg().filter((e) => e.kalla === 'brott' && e.vem === 'DAGNUMMER I TEXT').map((e) => e.text));
ut.push([`0 DAGNUMMER I TEXT (${brott.slice(0, 2).join(' · ') || 'inga'})`, !brott.length]);
ut.push([`${fel.length} sidfel ${fel.slice(0, 2).join(' · ')}`, !fel.length]);
await b.close();
for (const [t, ok] of ut) console.log(`${ok ? '✓' : '✗'} ${t}`);
process.exit(ut.every(([, ok]) => ok) ? 0 : 1);
