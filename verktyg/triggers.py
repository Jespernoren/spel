#!/usr/bin/env python3
"""Soptippsvägen 1 – punkt BD: tabell över VARJE text som visas eller läses upp, med vad som startar den i dag
och ett förslag på händelse, fördröjning, villkor, "stryks om" och vikt.

Användning: python3 verktyg/triggers.py <detalj.json> <spel.js> <ut.md>
  detalj.json: __printahem.rostManusDetalj() (alla röstrader med figur och var de kommer ifrån) – verktyg/triggers.mjs tar fram den.
Toasts, notiser och dagsmål läses direkt ur spel.js.
"""
import json, re, sys, collections

detalj = json.load(open(sys.argv[1]))
src = open(sys.argv[2]).read()
ut = sys.argv[3]
rader = src.split('\n')

def kort(t, n=70):
    t = re.sub(r'\s+', ' ', str(t)).replace('|', '/').strip()
    return t if len(t) <= n else t[:n - 1] + '…'

# kategori → (startar i dag, styrs av, förslag på händelse, fördröjning, villkor, stryks om, vikt)
KAT = {
    'Introt': ('introkortet visas', '—', 'introKort:<n> (rösten styr, punkt BC)', '0', '—', '—', 'STORY'),
    'Berättaren läser målen': ('när målet blir aktivt (STEG_TAL, via bud-kön)', '📋 steg', 'malBorjar:<id>', '1 s', 'ingen meny öppen', 'målet redan klart', 'MÅL'),
    'Brorsans sms dag 1 (punkt AS)': ('tagitUrPrint:nyckelring (punkt BC)', 'händelse', 'tagitUrPrint:nyckelring', '2 s / 6 s', 'dag 1', 'sms 2: salt', 'STORY'),
    'Ali om det begagnade (punkt AS)': ('köp hos Ali', 'händelse', 'kopt:gammalkvarn / kopt:cykelbatteri', '0', 'vid Ali', '—', 'REAKTION'),
    'Ali i butiken': ('butiken öppnas / köp / sälj (aliRepl)', 'händelse', 'oppnatButik · kopt:<sak> · salt:<sak>', '0', 'vid Ali', '—', 'REAKTION (välkomsten STORY)'),
    'Ali när du printat hans modell': ('första gången en Ali-modell printas (sms)', 'händelse', 'tagitUrPrint:<sak> (första gången)', '3 s', '—', 'saken redan såld', 'REAKTION'),
    'Alis sms om nya 3D-modeller': ('morgonen när en ny modell blir synlig hos Ali', '📅 dag ≥ N / syns()', 'vaknat + nyModell:<sak>', '5 s efter morgonkortet', '—', 'redan köpt', 'REAKTION'),
    'Rolfs brev och tack i postlådan (kapitel 1)': ('brevet: målet blir aktivt (startPost) · tacket: morgonen efter (rolfMorgonTack)', '📋 steg', 'brev: malKlart:<förra> → lapp i postlådan · tack: vaknat efter lagtIPostlada:<sak>', '0', 'vid postlådan', '—', 'STORY'),
    'Rolfs tack för presenter, jobblappar och fynd': ('morgonen efter att en present lagts i lådan', '📅 morgon', 'vaknat efter lagtIPostlada:<sak>', '0', '—', '—', 'STORY'),
    'Rolfs skumma jobb: brev och tack': ('morgonkortet stängs dag ≥ 7, varannan dag', '📅 dag ≥ 7', 'morgonkortStangt (dag ≥ 7, varannan dag)', '3,5 s', 'inget annat Rolf-ärende', '—', 'STORY'),
    'Rolfs sms om marken och säljlådan': ('köp av mark / saker', 'händelse', 'kopt:mark:<id> · placerat:saljlada', '3 s', '—', '—', 'STORY'),
    'Rolfs sms ibland': ('sms-poolen, udda dagar efter Rolfs nummer', '⏱ tid', 'stillaStaende eller dagKlar (lugn stund)', '0', 'ingen meny öppen', '—', 'REAKTION (småprat)'),
    'Sms med svarsalternativ och småprat': ('sms-poolen: 2–3 per dag med 50–120 s mellanrum', '⏱ tid + 📅 dag ≥ N', 'stillaStaende (30 s) eller somnat → nästa morgon', '0', 'ingen meny öppen', '—', 'REAKTION (småprat)'),
    'Sms ibland (storebror och mamma)': ('sms-poolen', '⏱ tid + 📅 dag ≥ N', 'stillaStaende', '0', 'ingen meny öppen', '—', 'REAKTION (småprat)'),
    'Familjens sms dag för dag': ('morgonkön dag N (FAMILJ[dag]) + 60–180 s', '⏱ tid + 📅 dag N', 'morgonkortStangt dag N', '20 s', '—', '—', 'STORY'),
    'Mammas svar om burkarna': ('svar på mammas sms med svarsalternativ', 'händelse', 'smsSvar:<id>', '1,5 s', '—', '—', 'STORY'),
    'Pappas besök (med Rolf första gången)': ('besöksscenen (startaPappaBesok)', '📅 dag N', 'pappaKommer', '0', '—', '—', 'STORY'),
    'Telefonsamtal': ('telefonscenen (kapitel 2 m.fl.)', '📋 steg', 'kapitelKlart:<n>', '6 s', 'ingen meny öppen', '—', 'STORY'),
    'Sopbilsresan med Rolf': ('resan (dag 10+)', '📅 dag ≥ 10', 'gattIn:sopbilen', '0', '—', '—', 'STORY'),
    'Sopbilsresan: konditoriet': ('resan, val i konditoriet', 'händelse', 'resaVal:<n>', '0', '—', '—', 'STORY'),
    'Chefen (också Rolf): böter': ('morgonen efter ett ja-jobb', '📅 morgon', 'morgonkortStangt efter jobbJa', '4 s', '—', '—', 'STORY'),
    'Haggan Helen i efterspelet (punkt AN)': ('efterspelet, morgon / gå förbi / ge saker', 'händelse + 📅 morgon', 'helen:<steg> · gattIn:helen', '0', 'efterspelet', '—', 'STORY'),
    'Lappar, brev och dagbok': ('när ett mål klaras (st.lapp) eller en milstolpe nås', '📋 steg', 'malKlart:<id>', '0,8 s', '—', '—', 'STORY'),
    'Dina tankar, tips och varningar': ('fel handling (varna) eller fast på ett mål (PUFFAR efter N s)', '⏱ tid / handling', 'fel:<typ> · fast:<målId>', '0 / 2 min', 'ingen meny öppen', 'målet klart / felet åtgärdat', 'REAKTION'),
    'Repliker ute i världen och när Ali säger nej': ('klick på en figur / Ali stängt', 'händelse', 'klickat:<figur>', '0', 'nära figuren', '—', 'REAKTION'),
}

def styrs(villkor):
    v = []
    if re.search(r'S\.dag\s*[>=]', villkor or ''): v.append('📅 dag ≥ N')
    return ' + '.join(v)

# ---------- sms-poolen: villkoret står i koden ----------
pool = {}
for m in re.finditer(r"\{ id: '([\w-]+)', vem: '(\w+)', nar: \(\) => ([^,]+(?:\([^)]*\))?[^,]*), (?:svar: [^}]+?, )?text: '((?:[^'\\]|\\.)*)'", src):
    pool[m.group(4).replace("\\'", "'")[:60]] = (m.group(1), m.group(2), m.group(3).strip())

# ---------- dagsmålen ----------
steg = []
i0 = src.index('const STEG = ['); i1 = src.index('\n];', i0)
for n, rad in enumerate(src[i0:i1].split('\n')):
    r2 = re.search(r"\.\.\.rolfSteg\((\d), (\w+)\)", rad)
    if r2:
        for t in ('Läs brevet i Rolfs postlåda', 'Printa <Rolfs önskan>', 'Lägg <Rolfs önskan> i Rolfs postlåda'): steg.append(('rolf' + r2.group(1), r2.group(2), t))
        continue
    s2 = re.search(r"sovSteg\((\d+), (\w+)\)", rad)
    if s2: steg.append(('sov' + s2.group(1), s2.group(2), 'Klart för idag – sov i skjulet')); continue
    m = re.search(r"\{ (?:id: '(\w+)', )?del: (\w+),", rad)
    if not m: continue
    t = re.search(r"text: (.*)", rad)
    qs = [x[1] for x in re.findall(r"([`'])((?:(?!\1).)+)\1", t.group(1))] if t else []
    q = next((x for x in qs if ' ' in x and not x.startswith('byggsats')), qs[0] if qs else '?')
    steg.append((m.group(1) or '', m.group(2), q))

# ---------- toasts och notiser ----------
toasts = []
funk = ''
for nr, rad in enumerate(rader, 1):
    f = re.match(r'(?:async )?function (\w+)|const (\w+) = (?:\([^)]*\)|\w+) =>', rad)
    if f: funk = f.group(1) or f.group(2)
    for m in re.finditer(r"(ui\.toast|notis)\((['`])(.*?)\2", rad):
        text = m.group(3)
        ford = re.search(r'setTimeout\([^;]*?' + re.escape(m.group(1)), rad)
        ms = re.search(r'\}, (\d+)\)', rad[m.end():m.end() + 400]) if ford else None
        toasts.append((nr, funk, m.group(1).replace('ui.', ''), text, (ms.group(1) + ' ms') if ms else ('fördröjd' if ford else '0')))

# ---------- skriv ----------
ut_md = []
w = ut_md.append
w('# Soptippsvägen 1 – alla texter och vad som startar dem (punkt BD)\n')
w('*Framtagen av spelchatten med `verktyg/triggers.py` (läser spel.js och röstmanuset). Varje rad: id, källa/figur, texten (förkortad), vad som startar den i dag, förslag på händelse, fördröjning, villkor, stryks om och vikt. **Styrs av** visar vad som i dag bestämmer tidpunkten: ⏱ tid, 📋 steg (dagsmålet), 📅 dag ≥ N. Planeringschatten går igenom raderna och skriver rätt trigger i kolumnen *Beslut* (eller "ok").*\n')
w('**Händelser som redan finns i koden (punkt BC):** `tagitUrPrint`, `oppnatButik`, `placerat`. Resten av listan i `soptippsvagen-triggers.md` läggs in när tabellen är godkänd.\n')
w('**Vikter:** STORY avbryts aldrig · MÅL väntar på STORY · REAKTION väntar och stryks efter 4 s. "Småprat" = REAKTION som också väntar tills menyn är stängd.\n')

# 1. dagsmålen
w('\n## 1. Dagsmål (det som står i rutan uppe till höger)\n')
w('| id | del | text | startar i dag | styrs av | förslag på händelse | stryks om | vikt | Beslut |\n|---|---|---|---|---|---|---|---|---|')
for k, (sid, dl, t) in enumerate(steg, 1):
    w(f'| M{k:03d} | {dl} | {kort(t, 60)} | förra målet klart (STEG-listan) | 📋 steg | malKlart:<förra> → malBorjar:{sid or k} | — (målet visas tills det är klart) | MÅL | |')

# 2. röstmanuset per kategori
per = collections.defaultdict(list)
for rad in detalj:
    vem, text = rad[0], rad[1]; kat = rad[3] if len(rad) > 3 else '?'
    per[kat].append((vem, text))
w('\n## 2. Repliker, sms, brev och berättaren (allt som läses upp)\n')
w('Grupperat efter var de kommer ifrån. Grupper med mallar (samma replik för många saker) visas som en rad med antal och exempel.\n')
nr = 0
for kat, lista in sorted(per.items(), key=lambda x: -len(x[1])):
    d = KAT.get(kat, ('?', '?', '?', '?', '?', '?', '?'))
    w(f'\n### {kat} ({len(lista)} st)\n')
    w(f'**I dag:** {d[0]} · **styrs av:** {d[1]} · **förslag:** `{d[2]}`, fördröjning {d[3]}, villkor {d[4]}, stryks om {d[5]}, vikt **{d[6]}**\n')
    mall = kat in ('Ali när du printat hans modell', 'Alis sms om nya 3D-modeller', 'Ali i butiken')
    if mall:
        # gruppera på mönstret (namn på saker bytt mot …)
        moster = collections.Counter()
        exempel = {}
        for vem, t in lista:
            k2 = re.sub(r'\d[\d\s]*', 'N', t)
            k2 = re.sub(r'^Ali här\. ', '', k2)[:40]
            moster[k2] += 1; exempel.setdefault(k2, t)
        w('| id | figur | mönster (exempel) | antal | Beslut |\n|---|---|---|---|---|')
        for k2, n in moster.most_common():
            nr += 1; w(f'| T{nr:04d} | {lista[0][0]} | {kort(exempel[k2], 90)} | {n} | |')
        continue
    w('| id | figur | text | villkor i dag | styrs av | Beslut |\n|---|---|---|---|---|---|')
    for vem, t in lista:
        nr += 1
        p = pool.get(t.replace('\n', ' ')[:60]) or pool.get(t[:60])
        vill = kort(p[2], 40) if p else ''
        sty = styrs(p[2]) if p else d[1]
        w(f'| T{nr:04d} | {vem} | {kort(t, 80)} | {vill or "—"} | {sty or d[1]} | |')

# 3. toasts och notiser
w('\n## 3. Toasts och notiser (korta texter på skärmen)\n')
w('De flesta är direkta svar på ett klick (vikt REAKTION, ingen ändring behövs). **Fördröjda** visas först – de styrs i dag av tid.\n')
w('| id | rad i spel.js | funktion | typ | text | fördröjning i dag | förslag | Beslut |\n|---|---|---|---|---|---|---|---|')
for k, (nr2, fn, typ, t, ford) in enumerate(sorted(toasts, key=lambda x: (x[4] == '0', x[0])), 1):
    forslag = 'direkt efter klicket – ok' if ford == '0' else 'koppla till händelsen som startar fördröjningen'
    w(f'| U{k:03d} | {nr2} | {fn} | {typ} | {kort(t, 70)} | {"⏱ " + ford if ford != "0" else "0"} | {forslag} | |')

# summering
w('\n## Summering\n')
w(f'- Dagsmål: {len(steg)}')
w(f'- Röstrader: {len(detalj)} i {len(per)} grupper')
w(f'- Toasts och notiser: {len(toasts)} ({sum(1 for t in toasts if t[4] != "0")} fördröjda)')
tid = [k for k, d in KAT.items() if '⏱' in d[1]]
w(f'- Grupper som i dag styrs av tid: {", ".join(tid)}')
open(ut, 'w').write('\n'.join(ut_md) + '\n')
print('skrev', ut, len(ut_md), 'rader')
