#!/usr/bin/env python3
"""Sätter ?v=<hash> på alla lokala moduler i printa-hem/index.html via importmap,
så att GitHub Pages inte serverar gamla cachade filer efter en uppdatering."""
import hashlib, json, pathlib, re
rot = pathlib.Path(__file__).resolve().parent.parent
spel = rot / 'spel' / 'printa-hem'
filer = sorted(spel.glob('*.js')) + sorted((rot / 'delat' / 'fp').glob('*.js')) + [rot / 'delat' / 'motor.js']
h = hashlib.sha1(b''.join(f.read_bytes() for f in filer)).hexdigest()[:10]
imp = {'three': 'https://cdn.jsdelivr.net/npm/three@0.170.0/build/three.module.js'}
for f in filer:
    rel = './' + f.relative_to(spel).as_posix() if f.parent == spel else '../../' + f.relative_to(rot).as_posix()
    imp[rel] = rel + '?v=' + h
idx = spel / 'index.html'; s = idx.read_text()
s = re.sub(r'<script type="importmap">.*?</script>', '<script type="importmap">\n' + json.dumps({'imports': imp}, indent=1) + '\n  </script>', s, flags=re.S)
s = re.sub(r'<script type="module" src="spel\.js[^"]*"></script>', f'<script type="module" src="spel.js?v={h}"></script>', s)
idx.write_text(s); print('version', h)
