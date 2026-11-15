# punkt AI3/AI4: png → webp (lager med alfa), och total storlek
import sys, os
from PIL import Image
fran, till = sys.argv[1], sys.argv[2]
tot = 0
for f in sorted(os.listdir(fran)):
    if not f.endswith('.png'): continue
    im = Image.open(os.path.join(fran, f))
    alfa = im.mode == 'RGBA' and im.getextrema()[3][0] < 255
    if not alfa: im = im.convert('RGB')
    else:   # beskär tomma kanter? nej – lagren måste ligga exakt över bakgrunden
        pass
    q = 70 if alfa else 74
    dst = os.path.join(till, f[:-4] + '.webp'); im.save(dst, 'WEBP', quality=q, method=6)
    s = os.path.getsize(dst); tot += s; print(f'{f[:-4]:10s} {s//1024:4d} kB {"alfa" if alfa else ""}')
print('totalt', tot // 1024, 'kB')
