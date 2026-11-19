// A-078: introgalleriet – introt som en ny spelare ser det, en bild var 3,5 s (som planeringschattens galleri), numrerade.
// Kör: node verktyg/galleri-intro.mjs [url] [ut-mapp]  → bild-NN.jpg + galleri.jpg (kontaktark) + galleri.md (tid och text per bild)
// Flaggar svarta bilder (medelljus < 4 %).
import fs from 'node:fs';
import { execFileSync } from 'node:child_process';
import { chromium } from '/home/claude/verktyg/node_modules/playwright-core/index.mjs';
const url = process.argv[2] || 'http://127.0.0.1:8765/printa-hem.html';
const UT = process.argv[3] || new URL('./a078/galleri/', import.meta.url).pathname;
fs.rmSync(UT, { recursive: true, force: true }); fs.mkdirSync(UT, { recursive: true });
const STEG = +(process.env.STEG_MS || 3500);
const b = await chromium.launch({ executablePath: '/usr/bin/google-chrome', args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--autoplay-policy=no-user-gesture-required'] });
const p = await (await b.newContext({ viewport: { width: 1280, height: 720 } })).newPage(); const fel = [];
p.on('pageerror', (e) => fel.push(e.message));
await p.addInitScript(() => { if (!sessionStorage.getItem('g')) { sessionStorage.setItem('g', 1); localStorage.clear(); localStorage.setItem('spar:printahem2:v1', JSON.stringify({ spelarNamn: 'Test' })); } });
await p.goto(url); await p.waitForTimeout(5000);
await p.click('.br-starta');
const rader = []; let n = 0; const t0 = Date.now();
for (let i = 0; i < 70; i++) {
  await p.waitForTimeout(i ? STEG : 1500);
  const info = await p.evaluate(() => ({ igang: !document.querySelector('.ph-intro3'), text: document.querySelector('.ph-intro3 .ph-intro-ord')?.textContent || '', bubbla: [...document.querySelectorAll('.ph-intro3 .ph-bub')].map((x) => x.textContent).join(' / '), kort: (window.__introLogg || []).filter((x) => x.h === 'visas').length }));
  const fil = `${UT}bild-${String(++n).padStart(2, '0')}.jpg`;
  await p.screenshot({ path: fil, type: 'jpeg', quality: 80 });
  rader.push({ n, s: ((Date.now() - t0) / 1000).toFixed(1), ruta: info.kort, text: info.text, bubbla: info.bubbla });
  if (info.igang) break;
}
const svart = execFileSync('python3', ['-c', `
import sys,os
from PIL import Image, ImageStat
U=sys.argv[1]; ut=[]
fs=sorted(f for f in os.listdir(U) if f.startswith('bild-'))
for f in fs:
    im=Image.open(os.path.join(U,f)).convert('L'); m=ImageStat.Stat(im).mean[0]/255*100
    if m<4: ut.append(f)
ims=[Image.open(os.path.join(U,f)).convert('RGB').resize((320,180)) for f in fs]
k=5; r=(len(ims)+k-1)//k
c=Image.new('RGB',(k*324,r*204),'white')
from PIL import ImageDraw
d=ImageDraw.Draw(c)
for i,im in enumerate(ims):
    x,y=(i%k)*324,(i//k)*204; c.paste(im,(x,y+20)); d.text((x+4,y+4),'bild %d'%(i+1),fill='black')
c.save(os.path.join(U,'galleri.jpg'),quality=82)
print(','.join(ut))
`, UT]).toString().trim();
let md = `# Introgalleriet\n\n*En bild var ${STEG / 1000} s från Starta. Kontaktark: galleri.jpg.*\n\n| Bild | Tid | Ruta | Undertext | Bubbla |\n|---|---|---|---|---|\n`;
for (const r of rader) md += `| ${r.n} | ${r.s} s | ${r.ruta} | ${r.text.replace(/\|/g, '/')} | ${r.bubbla} |\n`;
md += `\nSvarta bilder: ${svart || 'inga'}\n`;
fs.writeFileSync(UT + 'galleri.md', md);
console.log(`${rader.length} bilder → ${UT} · svarta: ${svart || 'inga'} · sidfel: ${fel.length ? fel.slice(0, 2).join(' · ') : 'inga'}`);
await b.close();
