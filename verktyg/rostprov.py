# Gör röstprov: varje figur säger en typisk replik med alla Kokoro-röster, så att man kan välja.
# Körs (Python 3.12 med kokoro-sv):  python rostprov.py utmapp
import os, subprocess, sys, json
from kokoro_sv import SwedishKokoro
sys.path.insert(0, os.path.dirname(__file__))
from roster_kokoro import tal  # samma textrensning som i spelet

ut = sys.argv[1]; os.makedirs(ut, exist_ok=True)
del_nr, delar = (int(sys.argv[2]), int(sys.argv[3])) if len(sys.argv) > 3 else (0, 1)
REPLIK = {
    'rolf': ('Rolf', 'ÖJ! Ja såg att du städa HELA gården. Respekt. Ingen städar hä. E de du som printar grejer oxå??'),
    'mamma': ('Mamma', 'Har du ätit upp HONUNGEN också?? Jag ringde Gunnar. Han har tre kilo till. Pappa kör dit på lördag.'),
    'pappa': ('Pappa', 'Tjenare! Vilket ställe du har! Aha, vad lugnt då! Nä, nu ska ja blada.'),
    'bror': ('Storebror', 'Pappa sover i garaget. Han säger att det är för att lyssna på motorn. Bilen är avstängd.'),
    'du': ('Du (spelaren)', 'Pappa … jag bor på en soptipp.'),
    'ali': ('Ali', 'Satt med AI:n hela natten igen. Fråga inte vad. Okej, en soffa. Fråga inte.'),
    'chefen': ('Chefen (i telefon)', 'Det här är Rolfs chef. Det försvinner saker från tippen. Vet du något om det?'),
    'berattare': ('Berättaren', 'Dag fjorton. Mammas paket kom tillbaka. Okänd mottagare. Jag bor ju här.'),
}
tts = SwedishKokoro()
ROSTER = list(tts.voices)
n = -1
for vem, (_, text) in REPLIK.items():
    for r in ROSTER:
        n += 1
        if n % delar != del_nr: continue
        fil = os.path.join(ut, f'{vem}-{r}.mp3')
        if os.path.exists(fil): continue
        tts.speak(tal(text), voice=r, out=f'/tmp/prov{del_nr}.wav')
        subprocess.run(['ffmpeg', '-loglevel', 'error', '-y', '-i', f'/tmp/prov{del_nr}.wav', '-af', 'loudnorm=I=-17:TP=-2', '-ac', '1', '-ar', '22050', '-b:a', '40k', fil], check=True)
    print(vem, flush=True)
json.dump({'roster': ROSTER, 'replik': REPLIK}, open(os.path.join(ut, 'prov.json'), 'w'), ensure_ascii=False)
