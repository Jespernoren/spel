// A-078: introts rutor 2–9 ur spelet, sida vid sida med facit (planeringschattens krok + vyer.json på 0ed11ca)
// Kör: node verktyg/test-a078.mjs [spel-url] [facit-url]  → verktyg/a078/<ruta>.png (vänster facit, höger spelet)
import { chromium } from '/home/claude/verktyg/node_modules/playwright-core/index.mjs'; import fs from 'fs'; import { execFileSync } from 'child_process';
const SPEL = process.argv[2] || 'http://127.0.0.1:8765/printa-hem.html', FACIT = process.argv[3] || 'http://127.0.0.1:8765/facit.html';
const UT = new URL('./a078/', import.meta.url).pathname, TMP = '/home/claude/test/a078';
const vyer = JSON.parse(fs.readFileSync(UT + 'vyer.json', 'utf8'));
const PAR = [['3-tisdag', 'v4dag3'], ['4-onsdag', 'v4dag4'], ['5-torsdag', 'v4dag5'], ['6a-fredag', 'v4dag6a'], ['6b-fredag-nara', 'v4dag6b'], ['7-argast', 'v4kort7'], ['8-reser-sig', 'v4kort8'], ['9-ut-forbi', 'v4kort9']];
const b = await chromium.launch({ executablePath: '/usr/bin/google-chrome', args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader'] });
const sida = async (url) => { const p = await b.newPage({ viewport: { width: 1000, height: 625 } }); p.fel = []; p.on('pageerror', (e) => p.fel.push(e.message));
  await p.addInitScript(() => { localStorage.clear(); localStorage.setItem('spar:printahem2:v1', JSON.stringify({ introSett: true })); }); await p.goto(url); await p.waitForTimeout(6000); return p; };
const f = await sida(FACIT), s = await sida(SPEL);
const spara = (namn, url) => fs.writeFileSync(namn, Buffer.from(url.split(',')[1], 'base64'));
for (const [vy, lager] of PAR) {
  spara(`${TMP}/f-${vy}.jpg`, await f.evaluate((o) => window.__introDev.rendera(o), vyer[vy]));
  spara(`${TMP}/s-${vy}.png`, (await s.evaluate((n) => window.__printahem.introLager(n, 1000, 625), lager)).url);
}
// mimiken: närbilder på mamma och dig (spelets egen poseFigur)
const mim = await s.evaluate(() => window.__printahem.mimikBilder?.());
if (mim) for (const [n, u] of Object.entries(mim)) spara(n === 'figurer' ? UT + 'figurer-i-spelet.jpg' : `${TMP}/s-${n}.png`, u);
for (const n of ['p0-snall', 'p1-arg1', 'p2-arg2', 'p3-rasande', 'p4-rasande+rok', 'p5-forvanad', 'p6-du-likgiltig']) spara(`${TMP}/f-${n}.jpg`, await f.evaluate((o) => window.__introDev.rendera(o), vyer[n]));
execFileSync('python3', ['-c', `
import sys,os
from PIL import Image, ImageDraw, ImageChops, ImageStat
T,U=sys.argv[1],sys.argv[2]
for f in sorted(os.listdir(T)):
    if not f.startswith('f-'): continue
    n=f[2:-4]; sp=[x for x in os.listdir(T) if x.startswith('s-'+n+'.')]
    if not sp: continue
    a=Image.open(os.path.join(T,f)).convert('RGB'); b=Image.open(os.path.join(T,sp[0])).convert('RGB').resize(a.size)
    d=sum(ImageStat.Stat(ImageChops.difference(a,b)).mean)/3/255*100
    c=Image.new('RGB',(a.width*2+10,a.height),'white'); c.paste(a,(0,0)); c.paste(b,(a.width+10,0))
    g=ImageDraw.Draw(c); g.text((10,10),'FACIT '+n,fill='yellow'); g.text((a.width+20,10),'SPELET  diff %.1f %%'%d,fill='yellow')
    c.save(os.path.join(U,n.replace('+','-')+'.png')); print(n,'diff %.2f %%'%d)
`, TMP, UT], { stdio: 'inherit' });
console.log('fel facit', f.fel.slice(0, 3), 'fel spel', s.fel.slice(0, 3)); await b.close();
