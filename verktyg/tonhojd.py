# Soptippsvägen 1 – tonhöjdskontroll av röstklipp (punkt BJ).
# Mäter medianen av grundtonen (F0) i varje klipp och flaggar klipp som ligger utanför figurens band.
# Kör: ksvenv/bin/python verktyg/tonhojd.py <manus.json> <klippmapp> [figur ...]
#   manus.json: [[vem, text], ...] (samma som roster_kokoro.py använder), klippmapp: <vem>-<hash>.mp3
# Avslutar med kod 1 om något klipp ligger utanför bandet, så att röstkontrollen kan stoppa en dålig körning.
import json, subprocess, sys, os
import numpy as np

BAND = {   # median-F0 i Hz som figurens klipp ska ligga inom
    'ali': (105, 120),
}

def rost_nyckel(t):
    import re
    ren = re.sub(r'<[^>]+>', ' ', str(t)).lower()
    ren = ''.join(c for c in ren if c.isalnum())
    h = 0x811c9dc5
    for c in ren:
        for enhet in (c.encode('utf-16-le')[i:i + 2] for i in range(0, len(c.encode('utf-16-le')), 2)):
            h ^= int.from_bytes(enhet, 'little'); h = (h * 0x01000193) & 0xffffffff
    return f'{h:08x}'

def las(fil, sr=16000):
    ut = subprocess.run(['ffmpeg', '-v', 'quiet', '-i', fil, '-ac', '1', '-ar', str(sr), '-f', 'f32le', '-'], capture_output=True).stdout
    return np.frombuffer(ut, dtype=np.float32), sr

def median_f0(x, sr, fmin=60, fmax=300):
    ram, hopp = int(sr * 0.04), int(sr * 0.01)
    if len(x) < ram: return None
    tröskel = max(0.01, np.percentile(np.abs(x), 90) * 0.15)
    lmin, lmax = int(sr / fmax), int(sr / fmin)
    f0 = []
    for i in range(0, len(x) - ram, hopp):
        r = x[i:i + ram]
        if np.sqrt(np.mean(r * r)) < tröskel: continue
        r = r - r.mean()
        ac = np.correlate(r, r, 'full')[ram - 1:]
        if ac[0] <= 0: continue
        ac = ac / ac[0]
        lag = lmin + int(np.argmax(ac[lmin:lmax]))
        if ac[lag] > 0.5: f0.append(sr / lag)
    return float(np.median(f0)) if len(f0) >= 5 else None

def main():
    manus, mapp, *figurer = sys.argv[1:]
    figurer = figurer or list(BAND)
    rader = json.load(open(manus))
    fel = 0
    for f in figurer:
        lo, hi = BAND.get(f, (0, 1e9)); varden = []
        for vem, text in rader:
            if vem != f: continue
            fil = os.path.join(mapp, f'{vem}-{rost_nyckel(text)}.mp3')
            if not os.path.exists(fil): continue
            m = median_f0(*las(fil))
            if m is None: continue
            varden.append(m)
            if not (lo <= m <= hi): fel += 1; print(f'UTANFÖR {f} {m:.0f} Hz  {os.path.basename(fil)}  {text[:70]}')
        if varden: print(f'{f}: {len(varden)} klipp, median {np.median(varden):.0f} Hz, band {lo}–{hi} Hz')
    sys.exit(1 if fel else 0)

if __name__ == '__main__':
    main()
