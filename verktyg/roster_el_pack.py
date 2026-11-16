#!/usr/bin/env python3
"""Soptippsvägen 1 – punkt AZ: ElevenLabs-klippen börjar direkt.

1. Klipper bort tystnaden i början och slutet av varje klipp i spel/printa-hem/roster-el/
   (ffmpeg silenceremove, tröskel -45 dB, 30 ms kvar före första ljudet, 120 ms efter sista).
   Varje fil klipps bara en gång: roster-el/trimmat.json minns vilka (annars kodas mp3:n om varje körning).
2. Packar klippen per figur till roster-el/pack/<figur>.mp3 med roster-el/pack/index.json
   { 'figur-hash': ['pack', från, längd] } – samma format som roster/. Introts klipp (intro-*.mp3) får eget paket 'intro'.

Körs för hand och som fast steg i .github/workflows/roster-elevenlabs.yml.
Användning: python3 verktyg/roster_el_pack.py [roster-el-mappen]
"""
import hashlib, json, os, subprocess, sys

MAPP = sys.argv[1] if len(sys.argv) > 1 else 'spel/printa-hem/roster-el'
TROSKEL = '-45dB'
FORE, EFTER = 0.03, 0.12
MAX_PACK = 12 * 1024 * 1024

def sha(p):
    return hashlib.sha1(open(p, 'rb').read()).hexdigest()[:12]

def trimma(p):
    tmp = p + '.tmp.mp3'
    af = (f'silenceremove=start_periods=1:start_silence={FORE}:start_threshold={TROSKEL},'
          f'areverse,silenceremove=start_periods=1:start_silence={EFTER}:start_threshold={TROSKEL},areverse')
    subprocess.run(['ffmpeg', '-loglevel', 'error', '-y', '-i', p, '-af', af, '-ac', '1', '-ar', '44100', '-b:a', '128k', tmp], check=True)
    os.replace(tmp, p)

def main():
    trimfil = os.path.join(MAPP, 'trimmat.json')
    trimmat = json.load(open(trimfil)) if os.path.exists(trimfil) else {}
    filer = sorted(f for f in os.listdir(MAPP) if f.endswith('.mp3'))
    nya = 0
    for f in filer:
        p = os.path.join(MAPP, f)
        if trimmat.get(f) == sha(p):
            continue
        trimma(p); trimmat[f] = sha(p); nya += 1
    json.dump(trimmat, open(trimfil, 'w'), indent=0, sort_keys=True)
    print(f'klippta nu: {nya} av {len(filer)}')

    index = json.load(open(os.path.join(MAPP, 'index.json')))
    packmapp = os.path.join(MAPP, 'pack'); os.makedirs(packmapp, exist_ok=True)
    packnamn = lambda fil: 'intro' if fil.startswith('intro-') else fil.split('-')[0]
    placering, data = {}, {}
    for fil in sorted(set(index.values())):
        if not os.path.exists(os.path.join(MAPP, fil)):
            continue
        b = open(os.path.join(MAPP, fil), 'rb').read()
        bas = packnamn(fil); n = 1; pk = bas
        while len(data.get(pk, b'')) + len(b) > MAX_PACK:   # stora paket delas (artifacts tar högst 20 MiB per fil)
            n += 1; pk = f'{bas}{n}'
        buf = data.setdefault(pk, bytearray())
        placering[fil] = [pk, len(buf), len(b)]; buf.extend(b)
    for f in os.listdir(packmapp):
        if f.endswith('.mp3') and f[:-4] not in data:
            os.remove(os.path.join(packmapp, f))
    for pk, buf in data.items():
        open(os.path.join(packmapp, pk + '.mp3'), 'wb').write(buf)
    pindex = {k: placering[v] for k, v in sorted(index.items()) if v in placering}
    json.dump(pindex, open(os.path.join(packmapp, 'index.json'), 'w'), separators=(',', ':'))
    print('paket:', ', '.join(f'{pk} {len(b) // 1024} kB' for pk, b in sorted(data.items())), f'– {len(pindex)} nycklar')

main()
