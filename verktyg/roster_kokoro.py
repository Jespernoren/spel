# Printa Hem: figurernas röster med Kokoro Svenska (riktiga svenska röster, körs lokalt på CPU).
# Gör klipp i samma format och med samma filnamn som roster.py (<vem>-<nyckel>.mp3), så att roster.py
# sedan bara packar ihop dem. Ali behåller sin brytning från roster.py (Piper) och görs inte här.
# Körs (Python 3.12 med kokoro-sv):  python roster_kokoro.py manus.json utmapp [del] [antal delar]
import json, os, re, subprocess, sys
from kokoro_sv import SwedishKokoro


from dialekt import DIALEKT
# vem: (Kokoro-röst, tempo, ffmpeg-klang, halvtoner (djupare = minus), dialekt)
ROSTER = {
    'rolf':      ('Björn',  0.90, 'bass=g=4:f=130', -3.0, 'varmland'),     # värmlänning/dalmas, djup och långsam
    'mamma':     ('Stina',  1.18, 'highpass=f=220,equalizer=f=1150:t=q:w=1.4:g=8,equalizer=f=2700:t=q:w=1:g=4,lowpass=f=6500', 0.5, 'narke'),   # närkingska – nasal och gnällig
    'pappa':     ('Lars',   1.0,  'bass=g=3:f=150', -2.0, 'stockholm'),    # stockholmare, glad och obrydd
    'bror':      ('Anton',  1.03, 'equalizer=f=3000:t=q:w=1:g=2.5', 1.0, 'stockholm'),   # yngre och ljusare än pappa
    'du':        ('Viktor', 1.0,  'bass=g=1:f=150', -1.0, None),
    'chefen':    ('Björn+Lars:0.6', 1.06, 'acompressor=threshold=-24dB:ratio=6:attack=5:release=80:makeup=4,asoftclip=type=atan:param=1.6,highpass=f=220,lowpass=f=3800', -4.0, None),   # bastant, arg kommunchef – i telefon
    'berattare': ('Alice',  0.95, 'bass=g=2:f=180', -1.0, None),
}
# ren ton: bort med sus och brus (brusreducering + brusspärr i pauserna)
REN = 'highpass=f=70,afftdn=nf=-28,agate=threshold=0.008:ratio=6:attack=3:release=150'

def lasipa(tts, text, rost, tempo, dialekt):
    """Som SwedishKokoro.synthesize – men talljuden (IPA) går genom dialekten först."""
    import numpy as np
    from kokoro_sv.core import _notch
    torch = tts._torch
    if '+' in rost:   # blandad röst: 'Björn+Lars:0.6'
        par, mix = rost.split(':'); a1, a2 = par.split('+')
        vp = tts.blend(a1, a2, float(mix)); model = tts.model
    else:
        vp = tts._load_voice(rost); model = tts._model_for(rost)
    ipa = tts.g2p(text).replace('ʏ', 'y')
    if dialekt: ipa = DIALEKT[dialekt](ipa)
    ids = [i for i in (model.vocab.get(p) for p in ipa) if i is not None][:500]
    with torch.no_grad():
        a = model.forward_with_tokens(torch.LongTensor([[0] + ids + [0]]).to(tts.device), vp[len(ids) - 1].to(tts.device), speed=tempo)[0].squeeze().cpu().numpy()
    return _notch(a)

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
        rost, tempo, klang, st, dialekt = ROSTER[vem]
        wav = os.path.join(ut, f'_tmp{del_nr}.wav')
        import soundfile as sf
        sf.write(wav, lasipa(tts, tal(text), rost, tempo, dialekt), 24000)
        djup = f'rubberband=pitch={2 ** (st / 12):.4f},' if st else ''
        subprocess.run(['ffmpeg', '-loglevel', 'error', '-y', '-i', wav, '-af', f'{REN},{djup}{klang},loudnorm=I=-17:TP=-2,silenceremove=start_periods=1:start_silence=0.05:start_threshold=-45dB,areverse,silenceremove=start_periods=1:start_silence=0.15:start_threshold=-45dB,areverse', '-ac', '1', '-ar', '24000', '-b:a', '64k', fil], check=True)
        klara += 1
        if klara % 20 == 0: print(del_nr, klara, '/', len(jobb), flush=True)
    print('klar', del_nr, klara)

if __name__ == '__main__':
    main()
