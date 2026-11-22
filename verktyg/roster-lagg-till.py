# inkorg 71: lägger nya Piper-klipp (ett pack från roster.py) till spelets röster utan att röra de gamla packen.
# De nya klippen hamnar i egna filer, <figur>-<namn>.mp3, så att en webbläsare som redan har de gamla packen i cache
# aldrig läser en förskjutning som inte finns i sin kopia.
# Kör: python3 verktyg/roster-lagg-till.py <packmapp> <namn> [<rostermapp> ...]
#   packmapp   = utmappen/pack från roster.py (index.json + <figur>.mp3)
#   namn       = t.ex. r71 – blir en del av filnamnet
#   rostermapp = spel/printa-hem/roster (standard) och fler kopior, t.ex. /home/claude/ut/roster
import json, os, sys

pack, namn = sys.argv[1], sys.argv[2]
mal = sys.argv[3:] or [os.path.join(os.path.dirname(__file__), '..', 'spel', 'printa-hem', 'roster')]
ny = json.load(open(os.path.join(pack, 'index.json')))
for rot in mal:
    idx_fil = os.path.join(rot, 'index.json')
    idx = json.load(open(idx_fil))
    filer, tillagda = {}, 0
    for k, (pk, fran, langd) in sorted(ny.items()):
        if k in idx: continue   # finns redan (samma figur och samma text)
        data = open(os.path.join(pack, pk + '.mp3'), 'rb').read()[fran:fran + langd]
        fil = f"{k.split('-')[0]}-{namn}"
        buf = filer.setdefault(fil, bytearray())
        idx[k] = [fil, len(buf), len(data)]; buf += data; tillagda += 1
    for fil, buf in filer.items():
        gammal = os.path.join(rot, fil + '.mp3')
        if os.path.exists(gammal):   # samma namn igen: lägg till sist, förskjutningarna i index pekar redan rätt för de gamla
            fore = os.path.getsize(gammal)
            for k, v in idx.items():
                if v[0] == fil and k in ny and v[1] < len(buf): v[1] += fore
            open(gammal, 'ab').write(buf)
        else:
            open(gammal, 'wb').write(buf)
    json.dump(idx, open(idx_fil, 'w'))
    print(rot, ':', tillagda, 'nya klipp i', ', '.join(f + '.mp3' for f in filer) or 'inga filer')
