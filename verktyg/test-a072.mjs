// A-072: målrutan med bild + symbol, bilden ovanför pilen, händerna bär 3. Kör: node verktyg/test-a072.mjs [url]
// (Att nästa steg sägs inom 1 s och att kameran nickar mäts i test-dag1-ordning.mjs.)
import fs from 'node:fs';
import { chromium } from '/home/claude/verktyg/node_modules/playwright-core/index.mjs';
const url = process.argv[2] || 'http://127.0.0.1:8765/ax.html';
const dir = new URL('./a072/', import.meta.url).pathname; fs.mkdirSync(dir, { recursive: true });
const b = await chromium.launch({ executablePath: '/usr/bin/google-chrome', args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader'] });
const p = await (await b.newContext({ viewport: { width: 1280, height: 720 } })).newPage(); const fel = [];
p.on('pageerror', (e) => fel.push('sidfel: ' + e.message));
await p.addInitScript(() => { if (!sessionStorage.getItem('a072')) { sessionStorage.setItem('a072', 1); localStorage.clear(); localStorage.setItem('spar:printahem2:v1', JSON.stringify({ introSett: true, spelarNamn: 'Test', dag1Sida: true, skyltUppe: true })); } });
await p.goto(url); await p.waitForTimeout(5000);
for (let i = 0; i < 25 && !(await p.evaluate(() => !!window.__printahem?.ui?.igang).catch(() => false)); i++) {
  await p.evaluate(() => { for (const k of document.querySelectorAll('button')) { const r = k.getBoundingClientRect(); if (r.width && /Börja|BÖRJA|Fortsätt|Starta|Hoppa/i.test(k.textContent)) { k.click(); return; } } });
  await p.waitForTimeout(1000);
}
const ut = [];
const H = (f, a) => p.evaluate(f, a);
const mal = [['stall', 'stall'], ['bygg', 'tva-delar'], ['flaska', 'mata'], ['trampa', 'printa'], ['salj', 'salj'], ['sov1', 'sov']];
for (const [id, namn] of mal) {
  const r = await H((id) => { const h = window.__printahem, S = h.S; if (id !== 'stall') { S.skrivareLastad = true; S.skrivareStar = true; } if (id === 'bygg') { S.generatorTagen = true; S.cykelStar = true; } if (id === 'trampa' || id === 'salj' || id === 'flaska' || id === 'sov1') { S.cykelStar = true; S.generatorStar = true; S.cykelOmbyggd = true; }
    S.steg = h.STEG.findIndex((x) => x.id === id); h.ritaStart(); return S.steg; }, id);
  await p.waitForTimeout(2500);
  const info = await H(() => { const m = document.querySelector('.dn-uppg .bild'); const r = m?.closest('[class*="mal"], .ph-mal, div')?.getBoundingClientRect(); return { bild: !!m && !!(m.querySelector('img, svg') || m.textContent.trim()), verb: m?.querySelector('.nasta-verb')?.textContent || '', bilder: m ? m.querySelectorAll('img').length : 0 }; });
  await p.screenshot({ path: dir + `malrutan-${namn}.png`, clip: { x: 260, y: 0, width: 760, height: 130 } });
  ut.push([`målrutan ${namn}: bild ${info.bild ? 'ja' : 'nej'}, symbol ${info.verb || '–'}${info.bilder > 1 ? `, ${info.bilder} bilder` : ''}`, info.bild && !!info.verb && (namn !== 'tva-delar' || info.bilder >= 2)]);
}
// bilden ovanför pilen i världen
await H(() => { const h = window.__printahem, S = h.S; S.steg = h.STEG.findIndex((x) => x.id === 'stall'); S.skrivareStar = false; h.ritaStart(); });
await p.waitForTimeout(4000);
const pil = await H(() => { const h = window.__printahem, m = h.malPil; const sp = m.children.find((c) => c.isSprite); const pp = m.position; h.spelare.pos.set(pp.x + 5, 0, pp.z + 4); h.tittaMot(pp.x, pp.z, 1.2, { tvang: true, y: pp.y + 0.8 }); return { sprite: !!sp?.visible, synlig: m.visible }; });
await p.waitForTimeout(2500); await p.screenshot({ path: dir + 'bild-over-pilen.png' });
ut.push([`bilden ovanför pilen (pil ${pil.synlig ? 'syns' : 'syns inte'}, bild ${pil.sprite ? 'ja' : 'nej'})`, pil.sprite]);
// händerna bär 3
const bar = await H(() => { const h = window.__printahem; return h.BARA_SKRAP?.[0] ?? null; });
ut.push([`händerna bär ${bar} skräp från start`, bar === 3]);
for (const [t, ok] of ut) console.log(ok ? '✓' : '✗', t);
console.log(fel.length ? fel.join('\n') : 'inga sidfel'); await b.close(); process.exit(ut.every((x) => x[1]) && !fel.length ? 0 : 1);
