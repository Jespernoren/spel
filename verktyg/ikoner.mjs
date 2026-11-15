// punkt BC: renderar en bild av varje sak (spelets egen 3D-modell) till spel/printa-hem/ikoner/<typ>.webp, 160×160 med genomskinlig bakgrund.
// Kör igen när en ny sak läggs till: node verktyg/ikoner.mjs [url]
// Skriver ikoner/index.json { filer: { typ: fil }, saknas: [typer utan riktig modell] }. Konverteringen till webp görs med Python (PIL).
import fs from 'fs'; import path from 'path'; import { execFileSync } from 'child_process';
import { chromium } from '/home/claude/verktyg/node_modules/playwright-core/index.mjs';
const url = process.argv[2] || 'http://127.0.0.1:8765/printa-hem.html';
const UT = new URL('../spel/printa-hem/ikoner/', import.meta.url).pathname, TMP = '/tmp/ikoner-png';
fs.rmSync(TMP, { recursive: true, force: true }); fs.mkdirSync(TMP, { recursive: true }); fs.mkdirSync(UT, { recursive: true });
const b = await chromium.launch({ executablePath: '/usr/bin/google-chrome', args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader'] });
const p = await b.newPage({ viewport: { width: 800, height: 600 } }); const fel = []; p.on('pageerror', (e) => fel.push(e.message));
await p.addInitScript(() => { if (sessionStorage.getItem('k')) return; sessionStorage.setItem('k', 1); localStorage.clear(); localStorage.setItem('spar:printahem2:v1', JSON.stringify({ introSett: true })); });
await p.goto(url); await p.waitForTimeout(5000);
const lista = await p.evaluate(() => window.__printahem.ikonLista());
const filer = {}, saknas = [];
for (const typ of lista) {
  const r = await p.evaluate((t) => { try { return window.__printahem.renderaIkon(t, 160); } catch (e) { return { fel: e.message }; } }, typ);
  if (!r?.url) { console.log('FEL', typ, r?.fel); continue; }
  const fil = typ.replace(/[^\w-]/g, '_');
  fs.writeFileSync(path.join(TMP, fil + '.png'), Buffer.from(r.url.split(',')[1], 'base64'));
  filer[typ] = fil + '.webp'; if (r.saknas) saknas.push(typ);
}
await b.close();
execFileSync('python3', ['-c', `
import os,sys
from PIL import Image
t,u=sys.argv[1],sys.argv[2]; tot=0
for f in os.listdir(t):
  im=Image.open(os.path.join(t,f)); d=os.path.join(u,f[:-4]+'.webp'); im.save(d,'WEBP',quality=82,method=6); tot+=os.path.getsize(d)
print('webp totalt', tot//1024, 'kB')`, TMP, UT], { stdio: 'inherit' });
fs.writeFileSync(path.join(UT, 'index.json'), JSON.stringify({ filer, saknas }, null, 0));
console.log(`${Object.keys(filer).length} ikoner, ${saknas.length} utan riktig modell:`, saknas.join(', '));
console.log('sidfel', fel.slice(0, 3));
