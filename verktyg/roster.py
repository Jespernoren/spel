# Förgenererar figurernas röster till Printa Hem med Piper (neural svensk talsyntes, körs lokalt).
# Varje figur får egen grundröst, tempo, tonhöjd och klang. Filerna heter <vem>-<nyckel>.mp3 där
# nyckeln räknas fram likadant som rostNyckel() i spel.js.
# Körs: python3 roster.py manus.json modellmapp utmapp
import json, os, re, subprocess, sys, wave, io
from concurrent.futures import ThreadPoolExecutor
from piper import PiperVoice, SynthesisConfig

manus_fil, modeller, ut = sys.argv[1:4]
os.makedirs(ut, exist_ok=True)

# vem: (grundröst, längd/tempo, uttrycksfullhet, halvtoner, ffmpeg-klang)
ROSTER = {
    # samma recept som Ali: ingen grov tonhöjdsförskjutning (den gav robotklang) – i stället en mjuk formantbevarande
    # förskjutning med rubberband, lite långsammare tempo och mer variation i rytmen
    'rolf':      ('nst',    1.12, 0.75, -2.0, 'bass=g=4:f=140,lowpass=f=6000'),
    'ali':       ('accent', 1.00, 0.55,  0.0, 'equalizer=f=1300:t=q:w=1.2:g=3,highpass=f=110'),
    'pappa':     ('nst',    1.18, 0.55, -3.0, 'lowpass=f=6500'),
    'bror':      ('nst',    1.00, 0.80,  1.5, 'highpass=f=100'),
    'chefen':    ('nst',    1.05, 0.55, -1.0, 'highpass=f=280,lowpass=f=3600,equalizer=f=1800:t=q:w=1:g=3'),
    'du':        ('nst',    1.02, 0.75,  3.0, 'highpass=f=110'),
    'mamma':     ('alma',   1.02, 0.80,  0.0, 'equalizer=f=2500:t=q:w=1:g=1.5'),
    'berattare': ('lisa',   1.10, 0.70,  0.0, 'aecho=0.8:0.5:30:0.08'),
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
    t = re.sub(r'[\U0001F000-\U0001FAFF☀-➿️‍⬀-⯿]', '', t)
    t = re.sub(r'\s/\s*(R|Rolf|Rolf \(sopbilen\)|Rolf \(chefen\))\s*$', '', t)
    t = t.replace('AI:n', 'A-in').replace(' AI', ' A-I').replace('3D', 'tre-dé').replace('%', ' procent')
    # uttal: sop-tipp med långt o (inte sopptipp), fillament (inte fiilament)
    t = re.sub(r'\b([Ss])op(?=[a-zåäö])(?!p)', r'\1op-', t)
    t = re.sub(r'\b([Ff])ilament', r'\1illa-ment', t)
    t = re.sub(r'\b([Cc])hef', lambda m: 'Sjef' if m.group(1) == 'C' else 'sjef', t)
    t = re.sub(r'(\d) (\d{3})', r'\1\2', t)
    t = re.sub(r'(\d+) kr\b', r'\1 kronor', t)
    t = re.sub(r'\b([A-ZÅÄÖ]{3,})\b', lambda m: m.group(1).capitalize(), t)   # VERSALER läses som ord, inte bokstaverat
    t = t.replace('…', ', ').replace('–', ', ').replace('”', '').replace('"', '')
    t = re.sub(r'\?\?+', '?', t); t = re.sub(r'!!+', '!', t)
    return re.sub(r'\s+', ' ', t).strip()

manus = json.load(open(manus_fil))
roster = {k: PiperVoice.load(os.path.join(modeller, f'sv_SE-{k}-medium.onnx')) for k in {v[0] for v in ROSTER.values()} - {'accent'}}
# Alis brytning: svensk text → svenska ljud (fonem) → uttalas av en arabisktalande röstmodell.
# Ljud som inte finns i arabiskan byts mot närmaste (y→i, ö→e, sje-ljud→sh …) – som när man lärt sig svenska som vuxen.
ACCENT = PiperVoice.load(os.path.join(modeller, 'ar_JO-kareem-medium.onnx'))
MILD = {'ø': 'e', 'œ': 'e', 'y': 'i', 'ʏ': 'i', 'ʉ': 'u', 'ɵ': 'u', 'ɳ': 'n', 'ʈ': 't', 'ɖ': 'd', 'ʂ': 'ʃ', 'ɭ': 'l', 'ɧ': 'ʃ', 'ɕ': 'ʃ'}
STARK = dict(MILD, **{'ɪ': 'i', 'ʊ': 'u', 'ɛ': 'e', 'ə': 'e', 'ɑ': 'a', 'ʲ': '', 'ŋ': 'n'})
import numpy as np, difflib
try:
    from faster_whisper import WhisperModel
    LYSSNA = WhisperModel('small', device='cpu', compute_type='int8')
except Exception:
    LYSSNA = None
def accent_wav(text, langd, uttryck, w, modell, karta):
    ids = []
    for s in roster['nst'].phonemize(text):
        ids += modell.phonemes_to_ids([c for c in (karta.get(x, x) for x in s) if c])
    a = modell.phoneme_ids_to_audio(ids, SynthesisConfig(length_scale=langd, noise_scale=uttryck, noise_w_scale=0.8))
    a = (np.clip(a, -1, 1) * 32767).astype(np.int16)
    w.setnchannels(1); w.setsampwidth(2); w.setframerate(modell.config.sample_rate); w.writeframes(a.tobytes())
    return a
def betyg(a, sr, text):
    # hur väl en taligenkänning hör vad som sägs (0–1)
    if LYSSNA is None: return 1.0
    x = a.astype(np.float32) / 32767; x = np.interp(np.arange(0, len(x), sr / 16000), np.arange(len(x)), x).astype(np.float32)
    hort = ' '.join(s.text for s in LYSSNA.transcribe(x, language='sv')[0])
    ren = lambda t: ''.join(c for c in t.lower() if c.isalnum())
    return difflib.SequenceMatcher(None, ren(hort), ren(re.sub(r'[\U0001F000-\U0001FAFF]', '', text))).ratio()
def begriplig(a, sr, text): return betyg(a, sr, text) >= 0.6
klart, jobb = {}, []
for vem, text in manus:
    if vem not in ROSTER: vem = 'berattare'
    k = f'{vem}-{nyckel(text)}'
    if k in klart or not re.search(r'\w', tal(text)): continue
    klart[k] = text; jobb.append((vem, text, k))

def gor(arg):
    vem, text, k = arg
    fil = os.path.join(ut, k + '.mp3')
    if os.path.exists(fil): return
    bas, langd, uttryck, st, klang = ROSTER[vem]
    buf = io.BytesIO()
    if bas == 'accent':
        with wave.open(buf, 'wb') as w: a = accent_wav(tal(text), langd, uttryck, w, ACCENT, STARK)
        if not begriplig(a, ACCENT.config.sample_rate, tal(text)):   # för svårt att höra → mildare brytning
            buf = io.BytesIO()
            with wave.open(buf, 'wb') as w: accent_wav(tal(text), 1.1, uttryck, w, roster['nst'], MILD)
    else:
        # prova några varianter (lite långsammare / lugnare) och behåll den som hörs tydligast
        bast = None
        for dl, du in [(0, 0), (0.1, -0.15), (0.2, -0.3)]:
            b = io.BytesIO()
            with wave.open(b, 'wb') as w:
                roster[bas].synthesize_wav(tal(text), w, syn_config=SynthesisConfig(length_scale=langd + dl, noise_scale=max(0.3, uttryck + du), noise_w_scale=0.95))
            w2 = wave.open(io.BytesIO(b.getvalue())); a = np.frombuffer(w2.readframes(w2.getnframes()), dtype=np.int16)
            p = betyg(a, w2.getframerate(), tal(text))
            if not bast or p > bast[0]: bast = (p, b)
            if p >= 0.85: break
        buf = bast[1]
    f = 2 ** (st / 12)
    tonhojd = f'rubberband=pitch={f:.4f}:formant=preserved,' if st else ''
    filt = f'{tonhojd}{klang},loudnorm=I=-17:TP=-2'
    subprocess.run(['ffmpeg', '-loglevel', 'error', '-y', '-i', 'pipe:0', '-af', filt, '-ac', '1', '-ar', '22050', '-b:a', '24k', fil], input=buf.getvalue(), check=True)

with ThreadPoolExecutor(2) as ex: list(ex.map(gor, jobb))
index = sorted(klart)
json.dump(index, open(os.path.join(ut, 'index.json'), 'w'))
print(len(index), 'röstklipp')

# packa ihop klippen: en fil per figur, stora figurer delas i flera (hämtas första gången de behövs)
pack, karta = {}, {}
storlek = {}
for k in index: storlek[k.split('-')[0]] = storlek.get(k.split('-')[0], 0) + os.path.getsize(os.path.join(ut, k + '.mp3'))
for k in index:
    vem, h = k.split('-')
    delar = max(1, round(storlek[vem] / 1_500_000))
    namn = vem if delar == 1 else f'{vem}{int(h[0], 16) % delar}'
    data = open(os.path.join(ut, k + '.mp3'), 'rb').read()
    buf = pack.setdefault(namn, bytearray())
    karta[k] = [namn, len(buf), len(data)]; buf += data
os.makedirs(os.path.join(ut, 'pack'), exist_ok=True)
for namn, buf in pack.items(): open(os.path.join(ut, 'pack', namn + '.mp3'), 'wb').write(buf)
json.dump(karta, open(os.path.join(ut, 'pack', 'index.json'), 'w'))
print('packat', {v: f'{len(b) // 1024} kB' for v, b in pack.items()})
