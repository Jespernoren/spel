#!/usr/bin/env python3
"""
Skriver mobil/filer.json: alla filer som appen "Familjens Spel" sparar på
telefonen när man trycker "Spara alla spel".

Kör efter att du lagt till eller ändrat ett spel:
    python3 verktyg/mobil-filer.py

Spel med  mobil: false  i spel-lista.js tas inte med.
(Glömmer du att köra den sparas nya spel ändå första gången man spelar dem.)
"""
import json, os, re

ROT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
THREE = 'https://cdn.jsdelivr.net/npm/three@0.170.0/'

lista = open(os.path.join(ROT, 'spel-lista.js'), encoding='utf-8').read()
spel = []
for block in re.findall(r'\{[^{}]*?mapp:[^{}]*?\}', lista, re.S):
    mapp = re.search(r'mapp:\s*"([^"]+)"', block).group(1)
    klar = re.search(r'status:\s*"klar"', block)
    mobil_av = re.search(r'mobil:\s*false', block)
    if klar and not mobil_av:
        spel.append(mapp)

filer = ['./', 'index.html', 'app.js', 'moln.js', 'stil.css', 'manifest.webmanifest',
         'ikon-192.png', 'ikon-512.png', '../index.html', '../spel-lista.js']

def lagg_till_mapp(mapp):
    for dirpath, _, namn in os.walk(os.path.join(ROT, mapp)):
        for n in sorted(namn):
            if n.startswith('.') or n.endswith('.md'):
                continue
            rel = os.path.relpath(os.path.join(dirpath, n), ROT).replace(os.sep, '/')
            filer.append('../' + rel)

lagg_till_mapp('delat')
for m in spel:
    lagg_till_mapp('spel/' + m)

for n in sorted(os.listdir(os.path.join(ROT, 'mobil', 'bilder'))):
    if n.lower().endswith(('.jpg', '.jpeg', '.png', '.webp')):
        filer.append('bilder/' + n)

# Bibliotek från nätet som spelen laddar
texter = ''
for f in filer:
    if f.endswith(('.html', '.js')) and f.startswith('../'):
        try:
            texter += open(os.path.join(ROT, f[3:]), encoding='utf-8').read()
        except OSError:
            pass
cdn = {THREE + 'build/three.module.js'}
cdn |= set(re.findall(r'https://cdnjs\.cloudflare\.com/[^"\'\s)]+\.js', texter))
for tillagg in set(re.findall(r"three/addons/([\w/]+\.js)", texter)):
    cdn.add(THREE + 'examples/jsm/' + tillagg)
if 'GLTFLoader' in texter:
    cdn.add(THREE + 'examples/jsm/utils/BufferGeometryUtils.js')
filer += sorted(cdn)

with open(os.path.join(ROT, 'mobil', 'filer.json'), 'w', encoding='utf-8') as f:
    json.dump(filer, f, ensure_ascii=False, indent=0)
print(f'{len(spel)} spel, {len(filer)} filer → mobil/filer.json')
