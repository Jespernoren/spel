// Inkorg 12 (Jesper 18:06): bildrutan i introt står alltid still – bara bilden inuti skakar och zoomar. Kör: node verktyg/test-a078d.mjs [url]
// Mäter ramen (.ph-ram) och texten under (.ph-intro-ord) varje bildruta genom hela introt. Skärmdumpar mitt i dörrsmällen i verktyg/a078/ramen-*.png
import fs from 'node:fs';
import { chromium } from '/home/claude/verktyg/node_modules/playwright-core/index.mjs';
const url = process.argv[2] || 'http://127.0.0.1:8765/printa-hem.html';
const dir = new URL('./a078/', import.meta.url).pathname; fs.mkdirSync(dir, { recursive: true });
const ut = [], fel = [];
const b = await chromium.launch({ executablePath: '/usr/bin/google-chrome', args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--autoplay-policy=no-user-gesture-required'] });
const p = await (await b.newContext({ viewport: { width: 1280, height: 800 } })).newPage();
p.on('pageerror', (e) => fel.push(e.message));
await p.addInitScript(() => {
  window.__brott = []; window.__textLogg = (k, v, t) => { if (k === 'brott') window.__brott.push(v + ' ' + t); };
  window.__ram = { rutor: 0, max: { x: 0, y: 0, b: 0, h: 0, tx: 0, ty: 0 }, forsta: null, skak: 0, bildRor: 0 };
  const mat = () => {
    const ram = document.querySelector('.ph-intro3 .ph-ram'), ord = document.querySelector('.ph-intro3 .ph-intro-ord'), is = document.querySelector('.ph-intro3 .ph-is');
    if (ram) {
      const r = ram.getBoundingClientRect(), o = ord.getBoundingClientRect(), R = window.__ram; R.rutor++;
      const nu = { x: r.left, y: r.top, b: r.width, h: r.height, tx: o.left, ty: o.top };
      if (!R.forsta) R.forsta = nu; else for (const k of Object.keys(nu)) R.max[k] = Math.max(R.max[k], Math.abs(nu[k] - R.forsta[k]));
      if (document.querySelector('.ph-intro3 .ph-intro-kort.skak')) R.skak++;
      if (is && getComputedStyle(is).transform !== 'none') R.bildRor++;
    }
    requestAnimationFrame(mat);
  };
  requestAnimationFrame(mat);
});
await p.goto(url);
await p.waitForFunction(() => document.querySelector('.br-starta'), null, { timeout: 15000 }); await p.click('.br-starta'); await p.waitForTimeout(1200);
const namn = await p.$('.ph-namn-falt'); if (namn) { await namn.fill('Testaren'); await p.keyboard.press('Enter'); }
let sett = false, dump = false;
for (let i = 0; i < 300; i++) {
  await p.waitForTimeout(250);
  const s = await p.evaluate(() => ({ intro: !!document.querySelector('.ph-intro3'), skak: !!document.querySelector('.ph-intro3 .ph-intro-kort.skak') }));
  if (s.intro) sett = true;
  if (s.skak && !dump) { dump = true; await p.waitForTimeout(650); await p.screenshot({ path: dir + 'ramen-dorrsmallen.png' }); }
  if (sett && !s.intro) break;
}
const R = await p.evaluate(() => window.__ram);
ut.push([`introt mättes i ${R.rutor} bildrutor (dörrsmällen ${R.skak}, bilden inuti rör sig i ${R.bildRor})`, R.rutor > 50 && R.skak > 0]);
ut.push([`ramen står still: största ändring x ${R.max.x.toFixed(1)} · y ${R.max.y.toFixed(1)} · bredd ${R.max.b.toFixed(1)} · höjd ${R.max.h.toFixed(1)} px`, R.max.x <= 1 && R.max.y <= 1 && R.max.b <= 1 && R.max.h <= 1]);
ut.push([`texten under bilden står still: x ${R.max.tx.toFixed(1)} · y ${R.max.ty.toFixed(1)} px`, R.max.tx <= 1 && R.max.ty <= 1]);
const brott = await p.evaluate(() => window.__brott.filter((x) => x.startsWith('RAMEN RÖR SIG')));
ut.push([`0 RAMEN RÖR SIG (${brott.slice(0, 2).join(' · ') || 'inga'})`, !brott.length]);
ut.push([`0 sidfel (${fel.join(' · ') || 'inga'})`, !fel.length]);
for (const [t, ok] of ut) console.log(`${ok ? '✓' : '✗'} ${t}`);
await b.close();
process.exit(ut.every(([, ok]) => ok) ? 0 : 1);
