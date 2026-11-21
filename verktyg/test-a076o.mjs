// Inkorg 10d (Jesper 18:28) + inkorg 35 (A-094, A4-sidan): dagbokskortet – samma överallt, en ljudknapp, korta rader. Kör: node verktyg/test-a076o.mjs [url]
// → verktyg/a076/dagbok-alla.png (rutnät med alla varianter) + mått per variant. Klick på texten eller på dagraden läser upp igen.
import fs from 'node:fs';
import { execFileSync } from 'node:child_process';
import { chromium } from '/home/claude/verktyg/node_modules/playwright-core/index.mjs';
const url = process.argv[2] || 'http://127.0.0.1:8765/printa-hem.html';
const dir = new URL('./a076/', import.meta.url).pathname; fs.mkdirSync(dir + 'dagbok/', { recursive: true });
const ut = [], fel = [];
const b = await chromium.launch({ executablePath: '/usr/bin/google-chrome', args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--autoplay-policy=no-user-gesture-required'] });
const p = await (await b.newContext({ viewport: { width: 1280, height: 720 } })).newPage();
p.on('pageerror', (e) => fel.push(e.message));
await p.addInitScript(() => { window.__brott = []; window.__textLogg = (k, v, t) => { if (k === 'brott') window.__brott.push(v + ' ' + t); }; if (!sessionStorage.getItem('a076o')) { sessionStorage.setItem('a076o', 1); localStorage.clear(); localStorage.setItem('spar:printahem2:v1', JSON.stringify({ spelarNamn: 'Test' })); } });
await p.goto(url);
await p.waitForFunction(() => window.__startaSpel && document.querySelector('.br-starta'), null, { timeout: 15000 }); await p.evaluate(() => window.__startaSpel()); await p.waitForTimeout(2500);
await p.keyboard.press('Enter');   // hoppa över introt
const H = (f, a) => p.evaluate(f, a);
const kort = () => H(() => !!document.querySelector('.ph-med:not([hidden]) .ph-dagbokkort'));
const matt = () => H(() => { const k = document.querySelector('.ph-med:not([hidden]) .ph-dagbokkort'); if (!k) return null; const cs = getComputedStyle(k), tx = k.querySelector('.ph-pap-text'), ti = k.querySelector('.ph-dk-dag'), kn = k.querySelector('.ph-fortsatt'); const rader = (tx.innerHTML.match(/<br>/g) || []).length + (tx.innerHTML.match(/ph-dk-luft/g) || []).length + 1; return { bredd: k.offsetWidth, marginal: Math.round(parseFloat(cs.paddingLeft)), text: parseFloat(getComputedStyle(tx).fontSize), titel: ti?.offsetHeight || 0, hojd: k.offsetHeight, a4: k.classList.contains('ph-dk-a4'), knapp: `${kn.offsetWidth}×${kn.offsetHeight}`, hogtalare: k.querySelectorAll('.ph-lasupp, .ph-lasigen').length, rostknapp: k.querySelectorAll('.ph-rostknapp').length, rader }; });
const stang = async () => { for (let i = 0; i < 10 && (await kort()); i++) { await p.keyboard.press('Enter'); await p.waitForTimeout(500); } };
const varianter = [];
const fanga = async (namn, f) => {
  if (f) { await stang(); await H(f); }
  for (let i = 0; i < 60 && !(await kort()); i++) await p.waitForTimeout(300);
  await p.waitForTimeout(1500);
  const m = await matt(); if (!m) { varianter.push([namn, null]); return; }
  const el = await p.$('.ph-med:not([hidden]) .ph-dagbokkort'); await el.screenshot({ path: `${dir}dagbok/${String(varianter.length + 1).padStart(2, '0')}-${namn}.png` });
  varianter.push([namn, m]);
};
await fanga('morgon-dag1', null);
// läs upp igen: klick på texten
const l0 = await H(() => window.__printahem.textLogg().length);
await p.click('.ph-med:not([hidden]) .ph-dagbokkort .ph-pap-text'); await p.waitForTimeout(800);
const las1 = await H((l0) => window.__printahem.textLogg().slice(l0).some((e) => e.kalla === 'läs upp'), l0);
await p.click('.ph-med:not([hidden]) .ph-dagbokkort .ph-dk-dag'); await p.waitForTimeout(400); await p.click('.ph-med:not([hidden]) .ph-dagbokkort .ph-dk-dag'); await p.waitForTimeout(400);
const las2 = await H((l0) => window.__printahem.textLogg().slice(l0).filter((e) => e.kalla === 'läs upp').length >= 2, l0);
ut.push([`klick på texten läser upp sidan igen (${las1}), klick på dagraden likaså (${las2})`, las1 && las2]);
await fanga('kvittens-skylten', () => window.__printahem.visaLapp('skylt'));
await fanga('kvittens-kvarnen', () => window.__printahem.visaLapp('malt'));
await fanga('kapitelsida-petg', () => window.__printahem.visaLapp('petg'));
await fanga('morgon-dag3', () => window.__printahem.dagbokKort('Fick en ny idé i natt.\n\nBära mer och få tak över huvudet.', { rubrik: 'Dag 3 – Ett tak', morgon: true }));
await fanga('las-igen', () => window.__printahem.dagbokKort('Kvarnen funkar.\n\nSoptippen är en gruva.', { lasIgen: true }));
await stang();
// rutnät
const bilder = fs.readdirSync(dir + 'dagbok/').filter((f) => f.endsWith('.png')).sort().map((f) => dir + 'dagbok/' + f);
execFileSync('python3', ['-c', `
import sys
from PIL import Image, ImageDraw
fs = sys.argv[1:-1]; ut = sys.argv[-1]
ims = [Image.open(f).convert('RGB') for f in fs]
w = max(i.width for i in ims) + 40; h = max(i.height for i in ims) + 70; kol = 3; rad = (len(ims) + kol - 1) // kol
g = Image.new('RGB', (w * kol, h * rad), (40, 46, 60)); d = ImageDraw.Draw(g)
for n, (im, f) in enumerate(zip(ims, fs)):
    x, y = (n % kol) * w, (n // kol) * h
    g.paste(im, (x + 20, y + 50)); d.text((x + 20, y + 18), f.split('/')[-1][:-4], fill=(255, 255, 255))
g.save(ut)
`, ...bilder, dir + 'dagbok-alla.png']);
const ok = varianter.filter(([, m]) => m);
const nyckel = (m) => `${m.a4}|${m.bredd}|${m.marginal}|${m.knapp}`;   /* inkorg 35: textstorleken får krympa 23 → 20 px, så den jämförs för sig */
const lika = ok.every(([, m]) => nyckel(m) === nyckel(ok[0][1]));
for (const [n, m] of varianter) console.log(`  ${n}: ${m ? `bredd ${m.bredd}, marginal ${m.marginal}, text ${m.text}px, rubrikrad ${m.titel}, knapp ${m.knapp}, 🔊 ${m.hogtalare}, röstknapp ${m.rostknapp}, rader ${m.rader}` : 'syntes inte'}`);
ut.push([`${ok.length} av ${varianter.length} varianter visades, alla med samma mått (${lika}) – verktyg/a076/dagbok-alla.png`, ok.length === varianter.length && lika]);
ut.push([`A4-sidan ca 360 × 509 px (växer bara när texten nått 20 px) och text 20–23 px på alla (${ok.map(([, m]) => `${m.bredd}×${m.hojd} ${m.text}px`).join(', ')})`, ok.every(([, m]) => m.a4 && Math.abs(m.bredd - 360) <= 4 && (Math.abs(m.hojd - 509) <= 4 || m.hojd > 509 && m.text === 20) && m.text >= 20 && m.text <= 23)]);
ut.push([`varje kort har exakt en ljudknapp (Röst på/av) och ingen extra 🔊`, ok.every(([, m]) => m.rostknapp === 1 && m.hogtalare === 0)]);
ut.push([`radbrytningar: varje kort har flera rader (${ok.map(([, m]) => m.rader).join(', ')})`, ok.every(([, m]) => m.rader >= 2)]);
const brott = await H(() => window.__brott.filter((x) => /^(ANNAN DAGBOKSLAYOUT|LÅNG DAGBOK|DÖD KNAPP|TEXT UTAN HÖGTALARE) /.test(x)));
ut.push([`0 ANNAN DAGBOKSLAYOUT, LÅNG DAGBOK, DÖD KNAPP, TEXT UTAN HÖGTALARE (${brott.join(' · ') || 'inga'})`, !brott.length]);
ut.push([`0 sidfel (${fel.join(' · ') || 'inga'})`, !fel.length]);
for (const [t, ok2] of ut) console.log(`${ok2 ? '✓' : '✗'} ${t}`);
await b.close();
process.exit(ut.every(([, o]) => o) ? 0 : 1);
