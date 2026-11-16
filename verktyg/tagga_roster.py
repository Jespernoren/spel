#!/usr/bin/env python3
# Taggar alla ElevenLabs-repliker för Soptippsvägen 1 (planeringschatten).
# Läser verktyg/roster-manus.json och skriver verktyg/roster-taggar.json.
# Regler: claude/soptippsvagen-roster.md i projektet (hela ord, grundtagg + 2–5 taggar, figurens regi).
# Ali hoppas över – han behåller den gamla rösten.
import json, re, sys, os

HAR = os.path.dirname(os.path.abspath(__file__))
MANUS = os.path.join(HAR, 'roster-manus.json')
UT = os.path.join(HAR, 'roster-taggar.json')
HANDTAGG = os.path.join(HAR, 'roster-taggar-hand.json')   # handskrivna taggar för viktiga repliker går före reglerna

GRUND = {
    'rolf': '[old, tired, thick Värmland accent, calm]',
    'pappa': '[thick old Stockholm accent, flat, indifferent, low energy]',
    'mamma': '[thick Småland accent, fast, shrill, worried]',
    'du': '[dry, deadpan]',
    'bror': '[relaxed, cool, mumbling]',
    'berattare': '[warm storyteller, calm]',
    'chefen': '[curt, cold, bored]',
}

# ---------- tal till ord ----------
ENTAL = ['noll', 'ett', 'två', 'tre', 'fyra', 'fem', 'sex', 'sju', 'åtta', 'nio', 'tio', 'elva', 'tolv', 'tretton',
         'fjorton', 'femton', 'sexton', 'sjutton', 'arton', 'nitton']
TIOTAL = ['', '', 'tjugo', 'trettio', 'fyrtio', 'femtio', 'sextio', 'sjuttio', 'åttio', 'nittio']

def under100(n):
    if n < 20: return ENTAL[n]
    return TIOTAL[n // 10] + (ENTAL[n % 10] if n % 10 else '')

def under1000(n):
    if n < 100: return under100(n)
    h, r = divmod(n, 100)
    return ('ett' if h == 1 else ENTAL[h]) + 'hundra' + (under100(r) if r else '')

def tal(n, ar=False):
    if ar and 1100 <= n <= 1999:
        h, r = divmod(n, 100)
        return under100(h) + 'hundra' + (under100(r) if r else '')
    if n < 1000: return under1000(n)
    if n < 1_000_000:
        t, r = divmod(n, 1000)
        return ('ettusen' if t == 1 else under1000(t) + 'tusen') + (under1000(r) if r else '')
    m, r = divmod(n, 1_000_000)
    return ('en miljon' if m == 1 else under1000(m) + ' miljoner') + ((' ' + tal(r)) if r else '')

def tal_till_ord(t):
    def ers(m):
        s = m.group(0).replace(' ', '').replace(' ', '')
        n = int(s)
        ar = len(s) == 4 and 1900 <= n <= 2030 and ' ' not in m.group(0)
        return tal(n, ar)
    t = re.sub(r'(\d+),(\d+)', lambda m: tal(int(m.group(1))) + ' komma ' + tal(int(m.group(2))), t)
    t = re.sub(r'\d{1,3}(?:[  ]\d{3})+|\d+', ers, t)
    t = re.sub(r'\bkr\b\.?', 'kronor', t)
    t = re.sub(r'(\S)\s*%', r'\1 procent', t)
    t = re.sub(r'-(\d)', r'\1', t)
    return t

# ---------- hela ord ----------
ORD = [
    (r'\bä\b', 'är'), (r'\bÄ\b', 'Är'), (r'\be\b', 'är'), (r'\bE\b', 'Är'),
    (r'\bdä\b', 'det'), (r'\bDä\b', 'Det'), (r'\bhä\b', 'här'), (r'\bHä\b', 'Här'),
    (r'\bde\b(?= (?:e|är|va|var|blir|går|kommer|funkar|gör|ska|finns|låter|kostar|lugnt|bra)\b)', 'det'),
    (r'\bDe\b(?= (?:e|är|va|var|blir|går|kommer|funkar|gör|ska|finns|låter|kostar|lugnt|bra)\b)', 'Det'),
    (r'\bint\b', 'inte'), (r'\bInt\b', 'Inte'), (r'\bme\b', 'med'), (r'\bmä\b', 'med'), (r'\bMe\b', 'Med'),
    (r'\boxå\b', 'också'), (r'\bOxå\b', 'Också'), (r'\bmycke\b', 'mycket'), (r'\bva\b(?=\?)', 'va'),
    (r'\bnåt\b', 'nåt'), (r'\bdôm\b', 'dom'), (r'\bkôrv\b', 'korv'), (r'\bfôlk\b', 'folk'), (r'\bnôga\b', 'noga'),
    (r'\b(Ja|ja|Det|det|Han|han|Hon|hon|Vi|vi|Dom|dom|Den|den|Du|du)\s+va\b(?!\?)', r'\1 var'),
    (r'\bva (ja|du|ett|man|de|det)\b', r'vad \1'), (r'\bEller va\b', 'Eller var'),
    (r'\bå\b', 'och'), (r'\bskrivr\b', 'skriver'), (r'\bfingr\b', 'finger'), (r'\bnummret\b', 'numret'),
    (r'\btie\b', 'tio'), (r'\bO\b', 'Och'), (r'\bo\b', 'och'), (r'\b3D\b', 'tre-D'), (r'(\d)\)', r'\1,'), (r'\bsäja\b', 'säga'), (r'\bV8\b', 'V åtta'),
    (r'\bpôjk\b', 'pojk'), (r'\bvanlit\b', 'vanligt'), (r'\bhitta\b(?= (?:tre|en|ett|två|den|det))', 'hittade'),
]

EMOJI = re.compile('[\U0001F000-\U0001FAFF☀-➿⬀-⯿️‍​]')

def hela_ord(t, figur):
    t = t.split('\n*')[0]                                  # Rolfs rättelser (*ord) läses inte upp
    t = re.sub(r'\s*/\s*(Rolf[^\n]*|R|Chefen[^\n]*)\s*$', '', t.strip())   # signaturer
    t = re.sub(r'\bMVH ROLF\b', 'Med vänlig hälsning, Rolf.', t)
    t = EMOJI.sub('', t)
    for a, b in ORD: t = re.sub(a, b, t)
    if figur in ('rolf', 'pappa'):
        t = re.sub(r'\bde\b(?! finaste)', 'det', t); t = re.sub(r'\bDe\b', 'Det', t)
    t = re.sub(r'\s*/\s*Mamma\s*$', ' Mamma.', t)
    t = tal_till_ord(t)
    t = re.sub(r'[ \t]+', ' ', t).replace('\n\n', '\n').strip()
    t = re.sub(r'(^|[.!?…]\s+)([a-zåäö])', lambda m: m.group(1) + m.group(2).upper(), t)
    if figur == 'pappa':                                   # pappa är matt: inga glada utrop
        t = re.sub(r'\bHa ha!\s*', '', t)
        t = re.sub(r'(?<![A-ZÅÄÖ]{2})!(?!\?)', '.', t)
        t = t.replace('..', '.')
    return t.strip()

# ---------- taggning per figur ----------
SORG = re.compile(r'Birgitta|ensam|saknar|dog|död|sjuk|minns|husvagn|rosor|gråt', re.I)
TACK = re.compile(r'\btack\b|bra människa|snäll', re.I)
SKAMT = re.compile(r'tand\. Inte min|Kajsa räknas|sover|som vanligt|Fråga inte|Bra snöre|korv', re.I)
CAPS = re.compile(r'\b[A-ZÅÄÖ]{3,}\b')

def meningar(t):
    delar = re.split(r'(?<=[.!?…])\s+', t)
    return [d for d in delar if d.strip()]

def tagga(figur, t, var):
    m = meningar(t)
    if not m: return GRUND[figur] + ' ' + t
    ut = []
    if figur == 'rolf':
        sorg = bool(SORG.search(t))
        for i, s in enumerate(m):
            tag = ''
            if i == 0: tag = '[sighs] ' if sorg and not s.endswith('!') else ''
            if SORG.search(s) and i > 0: tag = '[softly] '
            elif TACK.search(s): tag = '[softly] '
            elif s.startswith(('ÖJ', 'Hörru', 'Nämen')): tag = ''
            if SKAMT.search(s) or (i == len(m) - 1 and len(s.split()) <= 4 and not sorg and len(m) > 2):
                s = s + ' [chuckles]'
            if i == 1 and len(m) > 3: tag = tag + '[short pause] '
            ut.append(tag + s)
        if sorg and '[sorrowful]' not in ' '.join(ut):
            ut[-1] = '[sorrowful] ' + ut[-1]
    elif figur == 'mamma':
        for i, s in enumerate(m):
            tag = '[rushed] ' if i == 0 else ''
            if s.endswith('?'): tag += '[panicking] ' if CAPS.search(s) else '[worried] '
            elif CAPS.search(s): tag += '[upset] '
            elif re.search(r'Puss|saknar|älskar|fina|imponerad|❤', s): tag += '[softly] '
            elif re.search(r'VISSTE|Svara|ringde', s): tag += '[annoyed] '
            if re.search(r'sylt|saft|honung|burk', s, re.I) and i > 0 and not tag: tag = '[sniffs] '
            ut.append(tag + s)
    elif figur == 'pappa':
        for i, s in enumerate(m):
            tag = ''
            if re.search(r'Aha, vad lugnt', s): tag = '[dismissive] '
            elif s.endswith('?'): tag = '[quietly] '
            elif re.search(r'Mamma|mamma', s) and i > 0: tag = '[sighs] '
            if re.search(r'Scania|Djurgår|rea\b|Verstappen|V8|hockey', s): s = s + ' [chuckles]'
            if i == 0 and re.match(r'(Tjena|Tjenare|Hallå|Jaha)', s): tag = '[clears throat] ' + tag
            ut.append(tag + s)
    elif figur == 'du':
        for i, s in enumerate(m):
            tag = ''
            if s.startswith(('Hmm', 'Hm')): tag = '[cautiously] '
            elif CAPS.search(s): tag = '[proudly] '
            elif s.endswith('!') and i == 0: tag = '[pleased] '
            elif re.search(r'mamma|hem\b|hemma|saknar', s, re.I): tag = '[softly] '
            elif i == 0 and len(m) > 1: tag = '[sighs] '
            ut.append(tag + s)
    elif figur == 'bror':
        for i, s in enumerate(m):
            tag = ''
            if CAPS.search(s): tag = '[excited] ' if '?' in s or '!' in s else '[surprised] '
            elif re.search(r'Mamma|Pappa', s): tag = '[dismissive] '
            elif re.search(r'Typ|typ|Säg inget|vet inte', s): tag = '[mumbles] '
            if i == len(m) - 1 and len(m) > 1 and not CAPS.search(s): s = s + ' [laughs]'
            ut.append(tag + s)
    elif figur == 'berattare':
        brev = 'Kära du' in t
        for i, s in enumerate(m):
            tag = ''
            if brev:
                if re.search(r'grät|imponerad|log|älskar|Puss|kram', s, re.I): tag = '[softly] '
                elif i == 0: tag = '[warmly] '
            elif re.search(r'…', s): tag = '[pause] ' if i > 0 else ''
            ut.append(tag + s)
    elif figur == 'chefen':
        for i, s in enumerate(m):
            if s.startswith('Böter'): s = '[pause] [annoyed] ' + s
            ut.append(s)
    taggad = GRUND[figur] + ' ' + ' '.join(ut)
    taggad = re.sub(r'\s+', ' ', taggad).replace(' [chuckles] [', ' [chuckles] [')
    return taggad.strip()

def antal_taggar(t): return len(re.findall(r'\[[^\]]+\]', t)) - 1

def main():
    manus = json.load(open(MANUS))
    hand = json.load(open(HANDTAGG)) if os.path.exists(HANDTAGG) else {}
    ut = []
    for e in manus:
        f = e['figur']
        if f == 'ali' or f not in GRUND: continue   # Ali behåller gamla rösten; figurer utan grundtagg (Helen, Bengt) får egna profiler senare (BR+BS)
        kalla = e.get('kalla') or e['text']
        if not re.search(r'[A-Za-zÅÄÖåäö]', EMOJI.sub('', kalla)): continue   # bara emoji (pappas 👍) – inget att läsa
        if e['id'] in hand:
            skickas = hand[e['id']]
        else:
            ren = hela_ord(kalla, f)
            skickas = tagga(f, ren, e.get('var', ''))
            # minst 2 taggar utöver grundtaggen
            if antal_taggar(skickas) < 2 and f in ('rolf', 'mamma', 'pappa', 'bror', 'du'):
                extra = {'rolf': '[sighs]', 'mamma': '[rushed]', 'pappa': '[sighs]', 'bror': '[mumbles]', 'du': '[sighs]'}[f]
                if extra not in skickas: skickas = skickas.replace(GRUND[f], GRUND[f] + ' ' + extra, 1)
                if antal_taggar(skickas) < 2:
                    slut = {'rolf': ' [chuckles]', 'mamma': ' [softly]', 'pappa': ' [quietly]', 'bror': ' [laughs]', 'du': ' [quietly]'}[f]
                    skickas = skickas.rstrip() + slut if f not in ('mamma', 'pappa', 'du') else skickas.replace(GRUND[f] + ' ', GRUND[f] + ' ' + slut.strip() + ' ', 1)
        rost = 'mamma' if e['id'] == 'berattare-a2e65783' else f   # mammas julbrev läses med mammas röst
        ut.append({'id': e['id'], 'figur': f, 'rost': rost, 'var': e.get('var', ''), 'visad': e['text'], 'skickas': skickas,
                   'hand': e['id'] in hand})
    VISAD_NY = {'NY-rolf-konditori-1': 'Vi sålde huset 2009. Hon behövde vård. Ja behövde int ett hus. Ja behövde henne.',
                'NY-rolf-konditori-2': 'Hon dog för sju år sen. Hon hade gillat dej. Hon gillade fôlk som fixar saker.',
                'NY-rolf-konditori-3': 'Den e bäst i länet. Birgitta tyckte de oxå.'}
    for k, v in hand.items():
        if k.startswith('NY-'):
            ut.append({'id': k, 'figur': 'rolf', 'rost': 'rolf', 'var': 'Sopbilsresan: konditoriet (valet "Fråga om Birgitta" / "Säg att tårtan är god") – NY röstrad, saknas i manus', 'visad': VISAD_NY[k], 'skickas': v, 'hand': True})
    json.dump(ut, open(UT, 'w'), ensure_ascii=False, indent=1)
    from collections import Counter
    print(len(ut), dict(Counter(x['figur'] for x in ut)), 'tecken:', sum(len(x['skickas']) for x in ut))

if __name__ == '__main__':
    main()
