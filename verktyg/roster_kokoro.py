# Printa Hem: figurernas röster med Kokoro Svenska (riktiga svenska röster, körs lokalt på CPU).
# Gör klipp i samma format och med samma filnamn som roster.py (<vem>-<nyckel>.mp3), så att roster.py
# sedan bara packar ihop dem. Ali behåller sin brytning från roster.py (Piper) och görs inte här.
# Körs (Python 3.12 med kokoro-sv):  python roster_kokoro.py manus.json utmapp [del] [antal delar]
import json, os, re, subprocess, sys
from kokoro_sv import SwedishKokoro


# vem: (Kokoro-röst, tempo, ffmpeg-klang)
ROSTER = {
    'rolf':      ('Björn',  0.92, 'bass=g=3:f=140'),          # djup, långsam bonnröst
    'mamma':     ('Stina',  1.05, 'equalizer=f=2500:t=q:w=1:g=1'),
    'pappa':     ('Viktor', 1.0,  'anull'),                   # glad och obrydd
    'bror':      ('Anton',  1.0,  'anull'),
    'du':        ('Oskar',  1.0,  'anull'),
    'chefen':    ('Lars',   0.97, 'highpass=f=250,lowpass=f=3800'),   # låter som i telefon
    'berattare': ('Alice',  0.95, 'anull'),
}

def nyckel(t):
    t = re.sub(r'<[^>]+>', ' ', t).lower()
    t = ''.join(c for c in t if c.isalnum())
    h = 0x811c9dc5
    for c in t:
        h ^= ord(c); h = (h * 0x01000193) & 0xffffffff
    return format(h, '08x')

def tal(t):
    t = re.sub(r'<[^>]+>', ' ', t)
    t = re.sub(r'[\U0001F000-\U0001FAFF☀-➿️‍⬀-⯿​]', '', t)
    t = re.sub(r'\s/\s*(R|Rolf|Rolf \(sopbilen\)|Rolf \(chefen\))\s*$', '', t)
    t = re.sub(r'\n\*\S+', '', t)                      # Rolfs rättelse (*ord) läses inte upp
    t = t.replace('MVH ROLF', '')
    t = t.replace('AI:n', 'A-I:n').replace(' AI', ' A-I').replace('3D', 'tre-dé').replace('%', ' procent')
    t = re.sub(r'(\d) (\d{3})', r'\1\2', t)
    t = re.sub(r'(\d+) kr\b', r'\1 kronor', t)
    t = re.sub(r'\b([A-ZÅÄÖ]{3,})\b', lambda m: m.group(1).capitalize(), t)   # VERSALER läses som ord
    t = t.replace('…', ', ').replace('–', ', ').replace('”', '').replace('"', '')
    t = re.sub(r'\?\?+', '?', t); t = re.sub(r'!!+', '!', t)
    return re.sub(r'\s+', ' ', t).strip()

def main():
    manus_fil, ut = sys.argv[1:3]
    del_nr, delar = (int(sys.argv[3]), int(sys.argv[4])) if len(sys.argv) > 4 else (0, 1)
    os.makedirs(ut, exist_ok=True)
    manus = json.load(open(manus_fil))
    jobb, sett = [], set()
    for vem, text in manus:
        if vem not in ROSTER: continue
        k = f'{vem}-{nyckel(text)}'
        if k in sett or not re.search(r'\w', tal(text)): continue
        sett.add(k); jobb.append((vem, text, k))
    jobb = [j for i, j in enumerate(jobb) if i % delar == del_nr]

    tts = SwedishKokoro()
    klara = 0
    for vem, text, k in jobb:
        fil = os.path.join(ut, k + '.mp3')
        if os.path.exists(fil): continue
        rost, tempo, klang = ROSTER[vem]
        wav = os.path.join(ut, f'_tmp{del_nr}.wav')
        tts.speak(tal(text), voice=rost, out=wav, speed=tempo)
        subprocess.run(['ffmpeg', '-loglevel', 'error', '-y', '-i', wav, '-af', f'{klang},loudnorm=I=-17:TP=-2', '-ac', '1', '-ar', '22050', '-b:a', '32k', fil], check=True)
        klara += 1
        if klara % 20 == 0: print(del_nr, klara, '/', len(jobb), flush=True)
    print('klar', del_nr, klara)

if __name__ == '__main__':
    main()
