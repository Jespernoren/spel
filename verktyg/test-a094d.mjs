// Inkorg 35 (A-094): dagbokssidan som en egen stående A4-sida. Kör: node verktyg/test-a094d.mjs [url]
// → verktyg/a094/dagbok-dag1-morgon.png, dagbok-dag1-kvall.png, dagbok-dag10-morgon.png och dagbok-alla.png
import fs from 'node:fs';
import { execFileSync } from 'node:child_process';
import { chromium } from '/home/claude/verktyg/node_modules/playwright-core/index.mjs';
const url = process.argv[2] || 'http://127.0.0.1:8765/ax2.html';
const dir = new URL('./a094/', import.meta.url).pathname; fs.mkdirSync(dir, { recursive: true });
const dag8 = fs.readFileSync(new URL('./sparfiler/dag8.json', import.meta.url), 'utf8');
const b = await chromium.launch({ executablePath: '/usr/bin/google-chrome', args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader'] });
const ut = [], fel = [], matt = {};
const MATT = () => { const k = document.querySelector('.ph-med:not([hidden]) .ph-dk-a4'); if (!k) return null;
  const r = k.getBoundingClientRect(), s = k.querySelector('.ph-dk-sida'), d = k.querySelector('.ph-dk-dag'), kn = k.querySelector('.ph-fortsatt'), ro = k.querySelector('.ph-dk-rost'), tx = k.querySelector('.ph-pap-text');
  const px = parseFloat(getComputedStyle(tx).fontSize), lh = parseFloat(getComputedStyle(d || tx).lineHeight);
  const kr = kn.getBoundingClientRect(), rr = ro?.getBoundingClientRect();
  return { bredd: k.offsetWidth, hojd: k.offsetHeight, px, fyll: +(s.scrollHeight / k.offsetHeight).toFixed(2), dagRader: d ? Math.round(d.offsetHeight / lh) : 0, dagFet: d ? getComputedStyle(d.querySelector('b')).fontWeight : '',
    knappKant: Math.round(r.bottom - kr.bottom), knappMitt: Math.round(Math.abs((kr.left + kr.right) / 2 - (r.left + r.right) / 2)), rostUppeHoger: !!rr && rr.top - r.top < 40 && r.right - rr.right < 40, rostText: (ro?.textContent || '').trim(),
    avatar: k.querySelectorAll('.ph-pap-titel, .portratt, .ph-dk-sida > img, .ph-dk-sida > .ph-dk-dag img').length, dagbokOrd: /\bDagbok\b/.test(k.innerText), typsnitt: getComputedStyle(k).fontFamily.split(',')[0], text: k.innerText.split('\n').slice(0, 4).join(' / ') }; };
async function sida(namn, spar, gor, natt) {
  const p = await b.newPage({ viewport: { width: 1280, height: 720 } }); p.on('pageerror', (e) => fel.push(e.message));
  await p.addInitScript((spar) => { if (!sessionStorage.getItem('t')) { sessionStorage.setItem('t', 1); localStorage.clear(); localStorage.setItem('spar:printahem2:v1', spar || JSON.stringify({ spelarNamn: 'Test' })); } }, spar);
  await p.goto(url);
  await p.waitForFunction(() => window.__startaSpel && document.querySelector('.br-starta'), null, { timeout: 20000 }); await p.evaluate(() => window.__startaSpel());
  for (let i = 0; i < 30 && !(await p.evaluate(() => !!window.__printahem?.S).catch(() => false)); i++) await p.waitForTimeout(1000);
  await gor(p);
  for (let i = 0; i < 120 && !(await p.evaluate(() => !!document.querySelector('.ph-med:not([hidden]) .ph-dk-a4'))); i++) { if (await p.evaluate(() => !!document.querySelector('.ph-hurvar'))) await p.keyboard.press('Escape'); await p.waitForTimeout(500); }
  await p.waitForTimeout(1500);
  matt[namn] = await p.evaluate(MATT);
  if (matt[namn]) await p.screenshot({ path: `${dir}dagbok-${namn}.png` });
  matt[namn + ':nyheterPaSidan'] = await p.evaluate(() => !!document.querySelector('.ph-dk-a4 .ali-vill, .ph-dk-a4 .nytt-rad, .ph-dk-a4 .br-rapport'));
  if (/morgon/.test(namn)) { await p.keyboard.press('Enter'); const sett = new Map(); for (let i = 0; i < 40; i++) { for (const x of await p.evaluate(() => [...document.querySelectorAll('.ph-notis:not(.ut)')].map((n) => ({ text: n.innerText.replace(/\s+/g, ' ').trim(), hogtalare: !!n.querySelector('.ph-lasupp'), bild: !!n.querySelector('.ph-notis-bild') })))) sett.set(x.text, x); const nu = await p.evaluate(() => [...document.querySelectorAll('.ph-notis:not(.ut)')].map((n) => n.innerText)); if (nu.some((t) => /Ali vill ha idag/.test(t)) && nu.some((t) => /Webbshopen/.test(t))) { matt[namn + ':ordning'] = await p.evaluate(() => [...document.querySelectorAll('.ph-notis:not(.ut)')].map((n) => /Ali vill/.test(n.innerText) ? 'Ali' : /Webbshopen/.test(n.innerText) ? 'Webbshopen' : '?')); await p.evaluate((sel) => { const o = document.querySelector('.ph-notis:not(.ut)')?.parentElement; if (!o) return; const c = o.cloneNode(true); c.id = 'frys'; const r = o.getBoundingClientRect(); Object.assign(c.style, { position: 'fixed', left: r.left + 'px', top: r.top + 'px', width: r.width + 'px', height: r.height + 'px', zIndex: 2147483647, opacity: 1, transition: 'none' }); c.querySelectorAll('*').forEach((x) => { x.style.transition = 'none'; x.style.animation = 'none'; }); document.body.appendChild(c); }, '.ph-notiser, .ph-notis:not(.ut)'); await p.screenshot({ path: `${dir}notiser-${namn}.png`, clip: { x: 760, y: 0, width: 520, height: 420 } }); await p.evaluate(() => document.getElementById('frys')?.remove()); for (const x of await p.evaluate(() => [...document.querySelectorAll('.ph-notis:not(.ut)')].map((n) => ({ text: n.innerText.replace(/\s+/g, ' ').trim(), hogtalare: !!n.querySelector('.ph-lasupp'), bild: !!n.querySelector('.ph-notis-bild') })))) sett.set(x.text, x); break; } await p.waitForTimeout(500); } matt[namn + ':notiser'] = [...sett.values()]; }
  if (natt) { await p.evaluate((pr) => { const S = window.__printahem.S; S.printDag = { ...(S.printDag || {}), [S.dag]: pr.p }; S.inkDag = { ...(S.inkDag || {}), [S.dag]: pr.k }; for (const n of document.querySelectorAll('.ph-med:not([hidden]) .ph-fortsatt')) n.click(); window.__printahem.sov(); }, natt);
    for (let i = 0; i < 20 && !(await p.evaluate(() => !!document.querySelector('.ph-nattprint'))); i++) await p.waitForTimeout(300);
    matt[namn + ':natt'] = await p.evaluate(() => document.querySelector('.ph-nattprint')?.innerText.replace(/\s+/g, ' ').trim() || null); await p.evaluate((sel) => { const o = document.querySelector(sel); if (!o) return; const c = o.cloneNode(true); c.id = 'frys'; const r = o.getBoundingClientRect(); Object.assign(c.style, { position: 'fixed', left: r.left + 'px', top: r.top + 'px', width: r.width + 'px', height: r.height + 'px', zIndex: 2147483647, opacity: 1, transition: 'none' }); c.querySelectorAll('*').forEach((x) => { x.style.transition = 'none'; x.style.animation = 'none'; }); document.body.appendChild(c); }, '.ph-natt'); await p.screenshot({ path: `${dir}natt-${namn.replace('-morgon', '').replace('-kvall', '')}.png` }); await p.evaluate(() => document.getElementById('frys')?.remove()); }
  matt[namn + ':brott'] = await p.evaluate(() => window.__printahem.textLogg().filter((e) => e.kalla === 'brott' && /ANNAN DAGBOKSLAYOUT|LÅNG DAGBOK|DÖD KNAPP|TEXT UTAN HÖGTALARE/.test(e.vem)).map((e) => e.vem + ' ' + e.text));
  await p.close();
}
await sida('dag1-morgon', null, async (p) => { await p.waitForTimeout(2500); await p.keyboard.press('Enter'); });
await sida('dag1-kvall', null, async (p) => { await p.waitForTimeout(2500); await p.keyboard.press('Enter');
  for (let i = 0; i < 60 && !(await p.evaluate(() => !!document.querySelector('.ph-med:not([hidden]) .ph-dk-a4'))); i++) await p.waitForTimeout(500);
  for (let i = 0; i < 5 && (await p.evaluate(() => !!document.querySelector('.ph-med:not([hidden])'))); i++) { await p.keyboard.press('Enter'); await p.waitForTimeout(600); }
  await p.waitForTimeout(1000); await p.evaluate(() => window.__printahem.visaLapp('start')); }, { p: { nyckelring: 4, kruka: 2 }, k: { 'ali:nyckelring': 60, 'ali:kruka': 50 } });
await sida('dag10-morgon', dag8, async (p) => { await p.waitForTimeout(4000);
  for (let i = 0; i < 8 && (await p.evaluate(() => !!document.querySelector('.ph-med:not([hidden])'))); i++) { await p.keyboard.press('Enter'); await p.waitForTimeout(600); }
  await p.evaluate(() => { window.__printahem.S.dag = 9; window.__printahem.sov(); });
  await p.waitForFunction(() => window.__printahem.S.dag === 10, null, { timeout: 60000 }).catch(() => {}); }, { p: { n2_vas: 6, pall: 4, kruka: 3, nyckelring: 3, lampskarm: 2, fagelholk: 2, figurhylla: 1, h_mjolkpall: 1 }, k: { 'ali:n2_vas': 7110, webbshoppen: 1121, bonus: 400 } });
execFileSync('python3', ['-c', `
import sys
from PIL import Image
fs = sys.argv[1:-1]; ims = [Image.open(f).convert('RGB').crop((440, 80, 840, 640)) for f in fs]
g = Image.new('RGB', (400 * len(ims), 560), (40, 46, 60))
for n, im in enumerate(ims): g.paste(im, (n * 400, 0))
g.save(sys.argv[-1])
`, ...['dag1-morgon', 'dag1-kvall', 'dag10-morgon'].filter((n) => matt[n]).map((n) => `${dir}dagbok-${n}.png`), dir + 'dagbok-alla.png']);
const N = ['dag1-morgon', 'dag1-kvall', 'dag10-morgon'];
for (const n of N) console.log(`  ${n}: ${matt[n] ? JSON.stringify(matt[n]) : 'syntes inte'}`);
const ok = N.map((n) => matt[n]).filter(Boolean);
ut.push([`alla tre sidorna syns (${ok.length} av 3)`, ok.length === 3]);
ut.push([`A4 stående ca 360 × 509 px, samma mått på alla (${ok.map((m) => `${m.bredd}×${m.hojd}`).join(', ')})`, ok.every((m) => Math.abs(m.bredd - 360) <= 4 && Math.abs(m.hojd - 509) <= 4)]);
ut.push([`textstorlek 18–20 px, sans-serif (${ok.map((m) => `${m.px} px ${m.typsnitt}`).join(', ')})`, ok.every((m) => m.px >= 18 && m.px <= 20 && !/cursive|Bradley|Comic|Print/.test(m.typsnitt))]);
ut.push([`texten fyller högst 70 % av sidan (${ok.map((m) => Math.round(m.fyll * 100) + ' %').join(', ')})`, ok.every((m) => m.fyll <= 0.71)]);
ut.push([`"Dag N." i fetstil och nedräkningen på två rader utan radbrytning (${ok.map((m) => `${m.dagRader} rader, vikt ${m.dagFet}`).join(', ')})`, ok.every((m) => m.dagRader === 2 && +m.dagFet >= 700)]);
ut.push([`FORTSÄTT nere i mitten ca 24 px från kanten (${ok.map((m) => `${m.knappKant} px, ${m.knappMitt} px från mitten`).join(', ')})`, ok.every((m) => Math.abs(m.knappKant - 24) <= 3 && m.knappMitt <= 2)]);
ut.push([`högtalaren uppe till höger, utan text (${ok.map((m) => `${m.rostUppeHoger} "${m.rostText}"`).join(', ')})`, ok.every((m) => m.rostUppeHoger && !m.rostText)]);
ut.push([`ingen avatar och inget "Dagbok" (${ok.map((m) => `${m.avatar} ${m.dagbokOrd}`).join(', ')})`, ok.every((m) => !m.avatar && !m.dagbokOrd)]);
ut.push([`Ali, webbshopen och igår står inte på sidan (${N.map((n) => matt[n + ':nyheterPaSidan']).join(', ')})`, N.every((n) => matt[n + ':nyheterPaSidan'] === false)]);
const no = matt['dag10-morgon:notiser'] || [], ali = no.find((x) => /Ali vill ha idag/.test(x.text)), webb = no.find((x) => /Webbshopen/.test(x.text)), en = (t, ord) => (t.match(new RegExp(ord, 'g')) || []).length === 1;
ut.push([`dag 10: två små notiser efter FORTSÄTT, med 🔊 (${no.map((x) => x.text).join(' | ') || 'inga'})`, !!ali && !!webb && ali.hogtalare && webb.hogtalare && ali.bild && !no.some((x) => /Nytt i morse/.test(x.text)) && en(ali.text, 'Ali vill ha idag') && en(webb.text, 'Webbshopen')]);
ut.push([`båda notiserna syns samtidigt, Ali överst (${(matt['dag10-morgon:ordning'] || []).join(' över ') || 'aldrig samtidigt'})`, (matt['dag10-morgon:ordning'] || [])[0] === 'Ali' && (matt['dag10-morgon:ordning'] || []).includes('Webbshopen')]);
ut.push([`dag 1 morgon: ingen notis när det inte finns något att säga (${(matt['dag1-morgon:notiser'] || []).map((x) => x.text).join(' | ') || 'inga'})`, !(matt['dag1-morgon:notiser'] || []).some((x) => /Ali vill ha idag|Webbshopen/.test(x.text))]);
for (const n of ['dag1-kvall', 'dag10-morgon']) ut.push([`nattskärmen ${n.split('-')[0]}: ${matt[n + ':natt'] || 'syntes inte'}`, /DAGENS PRINTAR/.test(matt[n + ':natt'] || '') && /Totalt/.test(matt[n + ':natt']) && /Tjänat i dag/.test(matt[n + ':natt'])]);
const br = N.flatMap((n) => matt[n + ':brott'] || []);
ut.push([`0 ANNAN DAGBOKSLAYOUT, LÅNG DAGBOK, DÖD KNAPP, TEXT UTAN HÖGTALARE (${br.join(' · ') || 'inga'})`, !br.length]);
ut.push([`0 sidfel (${fel.slice(0, 2).join(' · ') || 'inga'})`, !fel.length]);
await b.close();
for (const [t, o] of ut) console.log(`${o ? '✓' : '✗'} ${t}`);
process.exit(ut.every(([, o]) => o) ? 0 : 1);
