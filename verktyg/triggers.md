# Soptippsvägen 1 – alla texter och vad som startar dem (punkt BD)

*Framtagen av spelchatten med `verktyg/triggers.py` (läser spel.js och röstmanuset). Varje rad: id, källa/figur, texten (förkortad), vad som startar den i dag, förslag på händelse, fördröjning, villkor, stryks om och vikt. **Styrs av** visar vad som i dag bestämmer tidpunkten: ⏱ tid, 📋 steg (dagsmålet), 📅 dag ≥ N. Planeringschatten går igenom raderna och skriver rätt trigger i kolumnen *Beslut* (eller "ok").*

**Händelser som redan finns i koden (punkt BC):** `tagitUrPrint`, `oppnatButik`, `placerat`. Resten av listan i `soptippsvagen-triggers.md` läggs in när tabellen är godkänd.

**Vikter:** STORY avbryts aldrig · MÅL väntar på STORY · REAKTION väntar och stryks efter 4 s. "Småprat" = REAKTION som också väntar tills menyn är stängd.


## 1. Dagsmål (det som står i rutan uppe till höger)

| id | del | text | startar i dag | styrs av | förslag på händelse | stryks om | vikt | Beslut |
|---|---|---|---|---|---|---|---|---|
| M001 | D1 | Lasta av skrivaren från cykeln | förra målet klart (STEG-listan) | 📋 steg | malKlart:<förra> → malBorjar:lasta | — (målet visas tills det är klart) | MÅL | |
| M002 | D1 | Ställ skrivaren på sin plats i linje 1 | förra målet klart (STEG-listan) | 📋 steg | malKlart:<förra> → malBorjar:stall | — (målet visas tills det är klart) | MÅL | |
| M003 | D1 | Gör om cykeln så att den ger ström | förra målet klart (STEG-listan) | 📋 steg | malKlart:<förra> → malBorjar:bygg | — (målet visas tills det är klart) | MÅL | |
| M004 | D1 | Trampa cykeln för ström och printa en nyckelring | förra målet klart (STEG-listan) | 📋 steg | malKlart:<förra> → malBorjar:trampa | — (målet visas tills det är klart) | MÅL | |
| M005 | D1 | Sälj den hos Ali, över vägen (eller printa två till först) | förra målet klart (STEG-listan) | 📋 steg | malKlart:<förra> → malBorjar:salj | — (målet visas tills det är klart) | MÅL | |
| M006 | D1 | Köp kvarnen hos Ali (50 kr)${S.batteriKopt ? '' : ' – och c… | förra målet klart (STEG-listan) | 📋 steg | malKlart:<förra> → malBorjar:kop | — (målet visas tills det är klart) | MÅL | |
| M007 | D1 | Ställ kvarnen på sin ruta i linje 1 | förra målet klart (STEG-listan) | 📋 steg | malKlart:<förra> → malBorjar:kvarn | — (målet visas tills det är klart) | MÅL | |
| M008 | D1 | Veva kvarnen · ${Math.round(Math.min(S.kvarn.ut, RULLE) / R… | förra målet klart (STEG-listan) | 📋 steg | malKlart:<förra> → malBorjar:flaska | — (målet visas tills det är klart) | MÅL | |
| M009 | D1 | Köp skräpgripen hos Ali (50 kr) | förra målet klart (STEG-listan) | 📋 steg | malKlart:<förra> → malBorjar:kopGrip | — (målet visas tills det är klart) | MÅL | |
| M010 | D1 | Ta skräpgripen ur skrivaren | förra målet klart (STEG-listan) | 📋 steg | malKlart:<förra> → malBorjar:printGrip | — (målet visas tills det är klart) | MÅL | |
| M011 | D1 | Köp kvarnmotorn hos Ali (50 kr) | förra målet klart (STEG-listan) | 📋 steg | malKlart:<förra> → malBorjar:kopMotor | — (målet visas tills det är klart) | MÅL | |
| M012 | D1 | Köp sängens 3D-modell hos Ali (${SANG_INSTRUKTION} kr) | förra målet klart (STEG-listan) | 📋 steg | malKlart:<förra> → malBorjar:kopSang | — (målet visas tills det är klart) | MÅL | |
| M013 | D1 | Printa sängen | förra målet klart (STEG-listan) | 📋 steg | malKlart:<förra> → malBorjar:printSang | — (målet visas tills det är klart) | MÅL | |
| M014 | D1 | Ställ sängen i skjulet och sov | förra målet klart (STEG-listan) | 📋 steg | malKlart:<förra> → malBorjar:sov1 | — (målet visas tills det är klart) | MÅL | |
| M015 | N1 | Skaffa sopsäcken – bär 6 skräp | förra målet klart (STEG-listan) | 📋 steg | malKlart:<förra> → malBorjar:kopSack | — (målet visas tills det är klart) | MÅL | |
| M016 | N1 | Printa en blomkruka | förra målet klart (STEG-listan) | 📋 steg | malKlart:<förra> → malBorjar:kruka | — (målet visas tills det är klart) | MÅL | |
| M017 | N1 | Städa gården · ${Math.max(0, gardSkrap() - gardMal())} kvar | förra målet klart (STEG-listan) | 📋 steg | malKlart:<förra> → malBorjar:17 | — (målet visas tills det är klart) | MÅL | |
| M018 | N1 | Läs brevet i Rolfs postlåda | förra målet klart (STEG-listan) | 📋 steg | malKlart:<förra> → malBorjar:rolf0 | — (målet visas tills det är klart) | MÅL | |
| M019 | N1 | Printa <Rolfs önskan> | förra målet klart (STEG-listan) | 📋 steg | malKlart:<förra> → malBorjar:rolf0 | — (målet visas tills det är klart) | MÅL | |
| M020 | N1 | Lägg <Rolfs önskan> i Rolfs postlåda | förra målet klart (STEG-listan) | 📋 steg | malKlart:<förra> → malBorjar:rolf0 | — (målet visas tills det är klart) | MÅL | |
| M021 | N1 | Hämta 5 skräp på soptippen | förra målet klart (STEG-listan) | 📋 steg | malKlart:<förra> → malBorjar:21 | — (målet visas tills det är klart) | MÅL | |
| M022 | N1 | Bygg en dörr till skjulet | förra målet klart (STEG-listan) | 📋 steg | malKlart:<förra> → malBorjar:22 | — (målet visas tills det är klart) | MÅL | |
| M023 | N1 | Klart för idag – sov i skjulet | förra målet klart (STEG-listan) | 📋 steg | malKlart:<förra> → malBorjar:sov2 | — (målet visas tills det är klart) | MÅL | |
| M024 | N2 | Läs brevet i Rolfs postlåda | förra målet klart (STEG-listan) | 📋 steg | malKlart:<förra> → malBorjar:rolf1 | — (målet visas tills det är klart) | MÅL | |
| M025 | N2 | Printa <Rolfs önskan> | förra målet klart (STEG-listan) | 📋 steg | malKlart:<förra> → malBorjar:rolf1 | — (målet visas tills det är klart) | MÅL | |
| M026 | N2 | Lägg <Rolfs önskan> i Rolfs postlåda | förra målet klart (STEG-listan) | 📋 steg | malKlart:<förra> → malBorjar:rolf1 | — (målet visas tills det är klart) | MÅL | |
| M027 | N2 | Bygg ryggkorgen – bär 10 skräp | förra målet klart (STEG-listan) | 📋 steg | malKlart:<förra> → malBorjar:ryggkorg | — (målet visas tills det är klart) | MÅL | |
| M028 | N2 | Fyll kärran med skräp och töm den i kvarnen | förra målet klart (STEG-listan) | 📋 steg | malKlart:<förra> → malBorjar:28 | — (målet visas tills det är klart) | MÅL | |
| M029 | N2 | Bygg säljlådan vid lägret | förra målet klart (STEG-listan) | 📋 steg | malKlart:<förra> → malBorjar:29 | — (målet visas tills det är klart) | MÅL | |
| M030 | N2 | Printa en pall | förra målet klart (STEG-listan) | 📋 steg | malKlart:<förra> → malBorjar:pall | — (målet visas tills det är klart) | MÅL | |
| M031 | N2 | Lägg plåttak på skjulet | förra målet klart (STEG-listan) | 📋 steg | malKlart:<förra> → malBorjar:31 | — (målet visas tills det är klart) | MÅL | |
| M032 | N2 | Klart för idag – sov i skjulet | förra målet klart (STEG-listan) | 📋 steg | malKlart:<förra> → malBorjar:sov3 | — (målet visas tills det är klart) | MÅL | |
| M033 | N3 | Läs brevet i Rolfs postlåda | förra målet klart (STEG-listan) | 📋 steg | malKlart:<förra> → malBorjar:rolf2 | — (målet visas tills det är klart) | MÅL | |
| M034 | N3 | Printa <Rolfs önskan> | förra målet klart (STEG-listan) | 📋 steg | malKlart:<förra> → malBorjar:rolf2 | — (målet visas tills det är klart) | MÅL | |
| M035 | N3 | Lägg <Rolfs önskan> i Rolfs postlåda | förra målet klart (STEG-listan) | 📋 steg | malKlart:<förra> → malBorjar:rolf2 | — (målet visas tills det är klart) | MÅL | |
| M036 | N3 | Bygg ett arbetsbord | förra målet klart (STEG-listan) | 📋 steg | malKlart:<förra> → malBorjar:36 | — (målet visas tills det är klart) | MÅL | |
| M037 | N3 | Bygg en solpanel | förra målet klart (STEG-listan) | 📋 steg | malKlart:<förra> → malBorjar:37 | — (målet visas tills det är klart) | MÅL | |
| M038 | N3 | Isolera två väggar · ${Math.min(2, S.hem?.vagg // 0)}/2 | förra målet klart (STEG-listan) | 📋 steg | malKlart:<förra> → malBorjar:38 | — (målet visas tills det är klart) | MÅL | |
| M039 | N3 | Klart för idag – sov i skjulet | förra målet klart (STEG-listan) | 📋 steg | malKlart:<förra> → malBorjar:sov4 | — (målet visas tills det är klart) | MÅL | |
| M040 | N4 | Läs brevet i Rolfs postlåda | förra målet klart (STEG-listan) | 📋 steg | malKlart:<förra> → malBorjar:rolf3 | — (målet visas tills det är klart) | MÅL | |
| M041 | N4 | Printa <Rolfs önskan> | förra målet klart (STEG-listan) | 📋 steg | malKlart:<förra> → malBorjar:rolf3 | — (målet visas tills det är klart) | MÅL | |
| M042 | N4 | Lägg <Rolfs önskan> i Rolfs postlåda | förra målet klart (STEG-listan) | 📋 steg | malKlart:<förra> → malBorjar:rolf3 | — (målet visas tills det är klart) | MÅL | |
| M043 | N4 | Isolera de sista väggarna · ${S.hem?.vagg // 0}/4 | förra målet klart (STEG-listan) | 📋 steg | malKlart:<förra> → malBorjar:43 | — (målet visas tills det är klart) | MÅL | |
| M044 | N4 | Bygg Skrivare M på bordet | förra målet klart (STEG-listan) | 📋 steg | malKlart:<förra> → malBorjar:44 | — (målet visas tills det är klart) | MÅL | |
| M045 | N4 | Gör det mysigt · trivsel ${trivsel()}/${TRIVSEL_MAL} | förra målet klart (STEG-listan) | 📋 steg | malKlart:<förra> → malBorjar:45 | — (målet visas tills det är klart) | MÅL | |
| M046 | R6 | Lyft en tunna med skottkärran | förra målet klart (STEG-listan) | 📋 steg | malKlart:<förra> → malBorjar:46 | — (målet visas tills det är klart) | MÅL | |
| M047 | R6 | Bygg den röda PETG-kvarnen | förra målet klart (STEG-listan) | 📋 steg | malKlart:<förra> → malBorjar:47 | — (målet visas tills det är klart) | MÅL | |
| M048 | R6 | Mal tunnan i PETG-kvarnen | förra målet klart (STEG-listan) | 📋 steg | malKlart:<förra> → malBorjar:48 | — (målet visas tills det är klart) | MÅL | |
| M049 | R6 | Klart för idag – sov i skjulet | förra målet klart (STEG-listan) | 📋 steg | malKlart:<förra> → malBorjar:sov6 | — (målet visas tills det är klart) | MÅL | |
| M050 | R7 | Bygg PETG-skrivaren | förra målet klart (STEG-listan) | 📋 steg | malKlart:<förra> → malBorjar:50 | — (målet visas tills det är klart) | MÅL | |
| M051 | R7 | Printa en designvas i röd PETG | förra målet klart (STEG-listan) | 📋 steg | malKlart:<förra> → malBorjar:51 | — (målet visas tills det är klart) | MÅL | |
| M052 | R7 | Sälj designvasen | förra målet klart (STEG-listan) | 📋 steg | malKlart:<förra> → malBorjar:52 | — (målet visas tills det är klart) | MÅL | |
| M053 | R7 | Klart för idag – sov i skjulet | förra målet klart (STEG-listan) | 📋 steg | malKlart:<förra> → malBorjar:sov7 | — (målet visas tills det är klart) | MÅL | |
| M054 | R8 | Bygg magnetpistolen | förra målet klart (STEG-listan) | 📋 steg | malKlart:<förra> → malBorjar:54 | — (målet visas tills det är klart) | MÅL | |
| M055 | R8 | Mal tunga saker i PETG-kvarnen · ${Math.min(3, S.stat.tungM… | förra målet klart (STEG-listan) | 📋 steg | malKlart:<förra> → malBorjar:55 | — (målet visas tills det är klart) | MÅL | |
| M056 | R8 | Bygg en batteribank | förra målet klart (STEG-listan) | 📋 steg | malKlart:<förra> → malBorjar:56 | — (målet visas tills det är klart) | MÅL | |
| M057 | R8 | Klart för idag – sov i skjulet | förra målet klart (STEG-listan) | 📋 steg | malKlart:<förra> → malBorjar:sov8 | — (målet visas tills det är klart) | MÅL | |
| M058 | R9 | Köp receptet på cykelhjälmen hos Ali | förra målet klart (STEG-listan) | 📋 steg | malKlart:<förra> → malBorjar:58 | — (målet visas tills det är klart) | MÅL | |
| M059 | R9 | Bygg en solcellspark | förra målet klart (STEG-listan) | 📋 steg | malKlart:<förra> → malBorjar:59 | — (målet visas tills det är klart) | MÅL | |
| M060 | R9 | Montera en spolhållare XL på en skrivare | förra målet klart (STEG-listan) | 📋 steg | malKlart:<förra> → malBorjar:60 | — (målet visas tills det är klart) | MÅL | |
| M061 | R9 | Klart för idag – sov i skjulet | förra målet klart (STEG-listan) | 📋 steg | malKlart:<förra> → malBorjar:sov9 | — (målet visas tills det är klart) | MÅL | |
| M062 | R10 | Bygg Skrivare L | förra målet klart (STEG-listan) | 📋 steg | malKlart:<förra> → malBorjar:62 | — (målet visas tills det är klart) | MÅL | |
| M063 | R10 | Tapetsera skjulet | förra målet klart (STEG-listan) | 📋 steg | malKlart:<förra> → malBorjar:63 | — (målet visas tills det är klart) | MÅL | |
| M064 | R10 | Klara hösten: värme ${Math.min(4, varme())}/4 | förra målet klart (STEG-listan) | 📋 steg | malKlart:<förra> → malBorjar:64 | — (målet visas tills det är klart) | MÅL | |
| M065 | R10 | Klart för idag – sov i skjulet | förra målet klart (STEG-listan) | 📋 steg | malKlart:<förra> → malBorjar:sov10 | — (målet visas tills det är klart) | MÅL | |
| M066 | F11 | Bygg rullbandet från tippen | förra målet klart (STEG-listan) | 📋 steg | malKlart:<förra> → malBorjar:66 | — (målet visas tills det är klart) | MÅL | |
| M067 | F11 | Mata in skräp med bandet · ${Math.min(20, S.stat.bandSkrap … | förra målet klart (STEG-listan) | 📋 steg | malKlart:<förra> → malBorjar:67 | — (målet visas tills det är klart) | MÅL | |
| M068 | F11 | Klart för idag – sov i skjulet | förra målet klart (STEG-listan) | 📋 steg | malKlart:<förra> → malBorjar:sov11 | — (målet visas tills det är klart) | MÅL | |
| M069 | F12 | Bygg lastarmen vid tippen | förra målet klart (STEG-listan) | 📋 steg | malKlart:<förra> → malBorjar:69 | — (målet visas tills det är klart) | MÅL | |
| M070 | F12 | Bygg rulladdaren vid kvarnen | förra målet klart (STEG-listan) | 📋 steg | malKlart:<förra> → malBorjar:70 | — (målet visas tills det är klart) | MÅL | |
| M071 | F12 | Trimma lastarmen hos Ali (Fabriken · Trimma) | förra målet klart (STEG-listan) | 📋 steg | malKlart:<förra> → malBorjar:71 | — (målet visas tills det är klart) | MÅL | |
| M072 | F12 | Klart för idag – sov i skjulet | förra målet klart (STEG-listan) | 📋 steg | malKlart:<förra> → malBorjar:sov12 | — (målet visas tills det är klart) | MÅL | |
| M073 | F13 | Bygg gamingboden | förra målet klart (STEG-listan) | 📋 steg | malKlart:<förra> → malBorjar:73 | — (målet visas tills det är klart) | MÅL | |
| M074 | F13 | Inred boden · ${Math.min(1, gamerSaker())}/1 gamersak | förra målet klart (STEG-listan) | 📋 steg | malKlart:<förra> → malBorjar:74 | — (målet visas tills det är klart) | MÅL | |
| M075 | F13 | Klart för idag – sov i skjulet | förra målet klart (STEG-listan) | 📋 steg | malKlart:<förra> → malBorjar:sov13 | — (målet visas tills det är klart) | MÅL | |
| M076 | F14 | Bygg leveranslådan | förra målet klart (STEG-listan) | 📋 steg | malKlart:<förra> → malBorjar:76 | — (målet visas tills det är klart) | MÅL | |
| M077 | F14 | Montera jetmotorn på kvarnen | förra målet klart (STEG-listan) | 📋 steg | malKlart:<förra> → malBorjar:77 | — (målet visas tills det är klart) | MÅL | |
| M078 | F14 | Trimma sopbilen hos Ali (Mutor till Rolf) | förra målet klart (STEG-listan) | 📋 steg | malKlart:<förra> → malBorjar:78 | — (målet visas tills det är klart) | MÅL | |
| M079 | F14 | Klart för idag – sov i skjulet | förra målet klart (STEG-listan) | 📋 steg | malKlart:<förra> → malBorjar:sov14 | — (målet visas tills det är klart) | MÅL | |
| M080 | F15 | Inred boden · ${Math.min(3, gamerSaker())}/3 gamersaker | förra målet klart (STEG-listan) | 📋 steg | malKlart:<förra> → malBorjar:80 | — (målet visas tills det är klart) | MÅL | |
| M081 | F15 | Printa och ställ ut en jacuzzi | förra målet klart (STEG-listan) | 📋 steg | malKlart:<förra> → malBorjar:81 | — (målet visas tills det är klart) | MÅL | |
| M082 | F15 | Världens bästa fristad · trivsel ${trivsel()}/300 | förra målet klart (STEG-listan) | 📋 steg | malKlart:<förra> → malBorjar:82 | — (målet visas tills det är klart) | MÅL | |
| M083 | F15 | Klart för idag – sov i skjulet | förra målet klart (STEG-listan) | 📋 steg | malKlart:<förra> → malBorjar:sov15 | — (målet visas tills det är klart) | MÅL | |
| M084 | M16 | Köp tomten du bor på – tavlan vid vägen | förra målet klart (STEG-listan) | 📋 steg | malKlart:<förra> → malBorjar:84 | — (målet visas tills det är klart) | MÅL | |
| M085 | M16 | Sätt härdade knivar i kvarnen | förra målet klart (STEG-listan) | 📋 steg | malKlart:<förra> → malBorjar:85 | — (målet visas tills det är klart) | MÅL | |
| M086 | M16 | Klart för idag – sov i skjulet | förra målet klart (STEG-listan) | 📋 steg | malKlart:<förra> → malBorjar:sov16 | — (målet visas tills det är klart) | MÅL | |
| M087 | M17 | Mal Rolfs kolfiberrester till filament | förra målet klart (STEG-listan) | 📋 steg | malKlart:<förra> → malBorjar:87 | — (målet visas tills det är klart) | MÅL | |
| M088 | M17 | Printa en kolfiberstol | förra målet klart (STEG-listan) | 📋 steg | malKlart:<förra> → malBorjar:88 | — (målet visas tills det är klart) | MÅL | |
| M089 | M17 | Köp ängen i öster – tavlan vid vägen | förra målet klart (STEG-listan) | 📋 steg | malKlart:<förra> → malBorjar:89 | — (målet visas tills det är klart) | MÅL | |
| M090 | M17 | Klart för idag – sov i skjulet | förra målet klart (STEG-listan) | 📋 steg | malKlart:<förra> → malBorjar:sov17 | — (målet visas tills det är klart) | MÅL | |
| M091 | M18 | Bygg ett riktigt hus på ängen – tavlan vid vägen | förra målet klart (STEG-listan) | 📋 steg | malKlart:<förra> → malBorjar:91 | — (målet visas tills det är klart) | MÅL | |
| M092 | M18 | Flytta in i huset | förra målet klart (STEG-listan) | 📋 steg | malKlart:<förra> → malBorjar:92 | — (målet visas tills det är klart) | MÅL | |
| M093 | M18 | Klart för idag – sov i skjulet | förra målet klart (STEG-listan) | 📋 steg | malKlart:<förra> → malBorjar:sov18 | — (målet visas tills det är klart) | MÅL | |
| M094 | M19 | Bygg diamantkvarnen | förra målet klart (STEG-listan) | 📋 steg | malKlart:<förra> → malBorjar:94 | — (målet visas tills det är klart) | MÅL | |
| M095 | M19 | Mal en rulle guld eller titan | förra målet klart (STEG-listan) | 📋 steg | malKlart:<förra> → malBorjar:95 | — (målet visas tills det är klart) | MÅL | |
| M096 | M19 | Klart för idag – sov i skjulet | förra målet klart (STEG-listan) | 📋 steg | malKlart:<förra> → malBorjar:sov19 | — (målet visas tills det är klart) | MÅL | |
| M097 | M20 | Printa och ställ ut en vedkamin | förra målet klart (STEG-listan) | 📋 steg | malKlart:<förra> → malBorjar:97 | — (målet visas tills det är klart) | MÅL | |
| M098 | M20 | Klara vintern: värme ${Math.min(9, varme())}/9 | förra målet klart (STEG-listan) | 📋 steg | malKlart:<förra> → malBorjar:98 | — (målet visas tills det är klart) | MÅL | |
| M099 | M20 | Klart för idag – sov i skjulet | förra målet klart (STEG-listan) | 📋 steg | malKlart:<förra> → malBorjar:sov20 | — (målet visas tills det är klart) | MÅL | |
| M100 | M21 | Bli folkbokförd – tavlan vid vägen | förra målet klart (STEG-listan) | 📋 steg | malKlart:<förra> → malBorjar:100 | — (målet visas tills det är klart) | MÅL | |
| M101 | M21 | Klart för idag – sov i skjulet | förra målet klart (STEG-listan) | 📋 steg | malKlart:<förra> → malBorjar:sov21 | — (målet visas tills det är klart) | MÅL | |
| M102 | M22 | Printa julbordet | förra målet klart (STEG-listan) | 📋 steg | malKlart:<förra> → malBorjar:102 | — (målet visas tills det är klart) | MÅL | |
| M103 | M22 | Tänd skylten vid vägen | förra målet klart (STEG-listan) | 📋 steg | malKlart:<förra> → malBorjar:103 | — (målet visas tills det är klart) | MÅL | |
| M104 | M22 | Öppna dörren – gästerna kommer | förra målet klart (STEG-listan) | 📋 steg | malKlart:<förra> → malBorjar:104 | — (målet visas tills det är klart) | MÅL | |

## 2. Repliker, sms, brev och berättaren (allt som läses upp)

Grupperat efter var de kommer ifrån. Grupper med mallar (samma replik för många saker) visas som en rad med antal och exempel.


### Ali när du printat hans modell (312 st)

**I dag:** första gången en Ali-modell printas (sms) · **styrs av:** händelse · **förslag:** `tagitUrPrint:<sak> (första gången)`, fördröjning 3 s, villkor —, stryks om saken redan såld, vikt **REAKTION**

| id | figur | mönster (exempel) | antal | Beslut |
|---|---|---|---|---|
| T0001 | ali | Ali här. Ännu en ritning som blev på riktigt: skräpcontainer – extra kapacitet. Semesterk… | 4 | |
| T0002 | ali | Ali här. Ännu en ritning som blev på riktigt: gamingbod (tillbyggnad). Semesterkassan väx… | 4 | |
| T0003 | ali | Ali här. Ännu en ritning som blev på riktigt: cykelbatteri. Semesterkassan växer. Livet v… | 3 | |
| T0004 | ali | Ali här. Ännu en ritning som blev på riktigt: rullställ vid kvarnen. Semesterkassan växer… | 3 | |
| T0005 | ali | Ali här. Ännu en ritning som blev på riktigt: fågelholk. Semesterkassan växer. Livet växe… | 3 | |
| T0006 | ali | Ali här. Ännu en ritning som blev på riktigt: kvarnmotor. Semesterkassan växer. Livet väx… | 2 | |
| T0007 | ali | Ali här. Ännu en ritning som blev på riktigt: solcellspark. Semesterkassan växer. Livet v… | 2 | |
| T0008 | ali | Ali här. Ännu en ritning som blev på riktigt: petg-kvarn. Semesterkassan växer. Livet väx… | 2 | |
| T0009 | ali | Ali här. Ännu en ritning som blev på riktigt: stor spolhållare. Semesterkassan växer. Liv… | 2 | |
| T0010 | ali | Ali här. Ännu en ritning som blev på riktigt: spolhållare xl. Semesterkassan växer. Livet… | 2 | |
| T0011 | ali | Ali här. Ännu en ritning som blev på riktigt: neonskylt i röd petg. Semesterkassan växer.… | 2 | |
| T0012 | ali | Ali här. Du printade min kvarnmotor. Den… FUNKAR? Jag har bara sett såna på YouTube. Okej… | 1 | |
| T0013 | ali | kvarnmotor – printad. På riktigt. Jag har visat bilden för min fru tre gånger. Hon säger … | 1 | |
| T0014 | ali | Jag såg din kvarnmotor på avstånd. Strecket på sidan blev lite snett. Mitt fel. Den är va… | 1 | |
| T0015 | ali | Ali här. Du printade min kvarnen. Den… FUNKAR? Jag har bara sett såna på YouTube. Okej. J… | 1 | |
| T0016 | ali | kvarnen – printad. På riktigt. Jag har visat bilden för min fru tre gånger. Hon säger "ja… | 1 | |
| T0017 | ali | Jag såg din kvarnen på avstånd. Strecket på sidan blev lite snett. Mitt fel. Den är vacke… | 1 | |
| T0018 | ali | Ali här. Du printade min cykelbatteri. Den… FUNKAR? Jag har bara sett såna på YouTube. Ok… | 1 | |
| T0019 | ali | cykelbatteri – printad. På riktigt. Jag har visat bilden för min fru tre gånger. Hon säge… | 1 | |
| T0020 | ali | Jag såg din cykelbatteri på avstånd. Strecket på sidan blev lite snett. Mitt fel. Den är … | 1 | |
| T0021 | ali | Ali här. Du printade min solcellspark. Den… FUNKAR? Jag har bara sett såna på YouTube. Ok… | 1 | |
| T0022 | ali | solcellspark – printad. På riktigt. Jag har visat bilden för min fru tre gånger. Hon säge… | 1 | |
| T0023 | ali | Jag såg din solcellspark på avstånd. Strecket på sidan blev lite snett. Mitt fel. Den är … | 1 | |
| T0024 | ali | Ali här. Du printade min batteribank. Den… FUNKAR? Jag har bara sett såna på YouTube. Oke… | 1 | |
| T0025 | ali | batteribank – printad. På riktigt. Jag har visat bilden för min fru tre gånger. Hon säger… | 1 | |
| T0026 | ali | Jag såg din batteribank på avstånd. Strecket på sidan blev lite snett. Mitt fel. Den är v… | 1 | |
| T0027 | ali | Ali här. Ännu en ritning som blev på riktigt: batteribank. Semesterkassan växer. Livet vä… | 1 | |
| T0028 | ali | Ali här. Du printade min sopsäck. Den… FUNKAR? Jag har bara sett såna på YouTube. Okej. J… | 1 | |
| T0029 | ali | sopsäck – printad. På riktigt. Jag har visat bilden för min fru tre gånger. Hon säger "ja… | 1 | |
| T0030 | ali | Jag såg din sopsäck på avstånd. Strecket på sidan blev lite snett. Mitt fel. Den är vacke… | 1 | |
| T0031 | ali | Ali här. Ännu en ritning som blev på riktigt: sopsäck. Semesterkassan växer. Livet växer. | 1 | |
| T0032 | ali | Ali här. Du printade min större ryggsäck. Den… FUNKAR? Jag har bara sett såna på YouTube.… | 1 | |
| T0033 | ali | större ryggsäck – printad. På riktigt. Jag har visat bilden för min fru tre gånger. Hon s… | 1 | |
| T0034 | ali | Jag såg din större ryggsäck på avstånd. Strecket på sidan blev lite snett. Mitt fel. Den … | 1 | |
| T0035 | ali | Ali här. Ännu en ritning som blev på riktigt: större ryggsäck. Semesterkassan växer. Live… | 1 | |
| T0036 | ali | Ali här. Du printade min skottkärra. Den… FUNKAR? Jag har bara sett såna på YouTube. Okej… | 1 | |
| T0037 | ali | skottkärra – printad. På riktigt. Jag har visat bilden för min fru tre gånger. Hon säger … | 1 | |
| T0038 | ali | Jag såg din skottkärra på avstånd. Strecket på sidan blev lite snett. Mitt fel. Den är va… | 1 | |
| T0039 | ali | Ali här. Ännu en ritning som blev på riktigt: skottkärra. Semesterkassan växer. Livet väx… | 1 | |
| T0040 | ali | Ali här. Du printade min petg-kvarn. Den… FUNKAR? Jag har bara sett såna på YouTube. Okej… | 1 | |
| T0041 | ali | petg-kvarn – printad. På riktigt. Jag har visat bilden för min fru tre gånger. Hon säger … | 1 | |
| T0042 | ali | Jag såg din petg-kvarn på avstånd. Strecket på sidan blev lite snett. Mitt fel. Den är va… | 1 | |
| T0043 | ali | Ali här. Du printade min petg-skrivare. Den… FUNKAR? Jag har bara sett såna på YouTube. O… | 1 | |
| T0044 | ali | petg-skrivare – printad. På riktigt. Jag har visat bilden för min fru tre gånger. Hon säg… | 1 | |
| T0045 | ali | Jag såg din petg-skrivare på avstånd. Strecket på sidan blev lite snett. Mitt fel. Den är… | 1 | |
| T0046 | ali | Ali här. Du printade min tungt rullband. Den… FUNKAR? Jag har bara sett såna på YouTube. … | 1 | |
| T0047 | ali | tungt rullband – printad. På riktigt. Jag har visat bilden för min fru tre gånger. Hon sä… | 1 | |
| T0048 | ali | Jag såg din tungt rullband på avstånd. Strecket på sidan blev lite snett. Mitt fel. Den ä… | 1 | |
| T0049 | ali | Ali här. Ännu en ritning som blev på riktigt: tungt rullband. Semesterkassan växer. Livet… | 1 | |
| T0050 | ali | Ali här. Du printade min magnetpistol. Den… FUNKAR? Jag har bara sett såna på YouTube. Ok… | 1 | |
| T0051 | ali | magnetpistol – printad. På riktigt. Jag har visat bilden för min fru tre gånger. Hon säge… | 1 | |
| T0052 | ali | Jag såg din magnetpistol på avstånd. Strecket på sidan blev lite snett. Mitt fel. Den är … | 1 | |
| T0053 | ali | Ali här. Ännu en ritning som blev på riktigt: magnetpistol. Semesterkassan växer. Livet v… | 1 | |
| T0054 | ali | Ali här. Du printade min ryggkorg. Den… FUNKAR? Jag har bara sett såna på YouTube. Okej. … | 1 | |
| T0055 | ali | ryggkorg – printad. På riktigt. Jag har visat bilden för min fru tre gånger. Hon säger "j… | 1 | |
| T0056 | ali | Jag såg din ryggkorg på avstånd. Strecket på sidan blev lite snett. Mitt fel. Den är vack… | 1 | |
| T0057 | ali | Ali här. Ännu en ritning som blev på riktigt: ryggkorg. Semesterkassan växer. Livet växer. | 1 | |
| T0058 | ali | Ali här. Du printade min turbomotor. Den… FUNKAR? Jag har bara sett såna på YouTube. Okej… | 1 | |
| T0059 | ali | turbomotor – printad. På riktigt. Jag har visat bilden för min fru tre gånger. Hon säger … | 1 | |
| T0060 | ali | Jag såg din turbomotor på avstånd. Strecket på sidan blev lite snett. Mitt fel. Den är va… | 1 | |
| T0061 | ali | Ali här. Ännu en ritning som blev på riktigt: turbomotor. Semesterkassan växer. Livet väx… | 1 | |
| T0062 | ali | Ali här. Du printade min jetmotor med efterbrännare. Den… FUNKAR? Jag har bara sett såna … | 1 | |
| T0063 | ali | jetmotor med efterbrännare – printad. På riktigt. Jag har visat bilden för min fru tre gå… | 1 | |
| T0064 | ali | Jag såg din jetmotor med efterbrännare på avstånd. Strecket på sidan blev lite snett. Mit… | 1 | |
| T0065 | ali | Ali här. Ännu en ritning som blev på riktigt: jetmotor med efterbrännare. Semesterkassan … | 1 | |
| T0066 | ali | Ali här. Du printade min stor spolhållare. Den… FUNKAR? Jag har bara sett såna på YouTube… | 1 | |
| T0067 | ali | stor spolhållare – printad. På riktigt. Jag har visat bilden för min fru tre gånger. Hon … | 1 | |
| T0068 | ali | Jag såg din stor spolhållare på avstånd. Strecket på sidan blev lite snett. Mitt fel. Den… | 1 | |
| T0069 | ali | Ali här. Du printade min spolhållare xl. Den… FUNKAR? Jag har bara sett såna på YouTube. … | 1 | |
| T0070 | ali | spolhållare xl – printad. På riktigt. Jag har visat bilden för min fru tre gånger. Hon sä… | 1 | |
| T0071 | ali | Jag såg din spolhållare xl på avstånd. Strecket på sidan blev lite snett. Mitt fel. Den ä… | 1 | |
| T0072 | ali | Ali här. Du printade min spoltorn. Den… FUNKAR? Jag har bara sett såna på YouTube. Okej. … | 1 | |
| T0073 | ali | spoltorn – printad. På riktigt. Jag har visat bilden för min fru tre gånger. Hon säger "j… | 1 | |
| T0074 | ali | Jag såg din spoltorn på avstånd. Strecket på sidan blev lite snett. Mitt fel. Den är vack… | 1 | |
| T0075 | ali | Ali här. Du printade min skräpcontainer – extra kapacitet. Den… FUNKAR? Jag har bara sett… | 1 | |
| T0076 | ali | skräpcontainer – extra kapacitet – printad. På riktigt. Jag har visat bilden för min fru … | 1 | |
| T0077 | ali | Jag såg din skräpcontainer – extra kapacitet på avstånd. Strecket på sidan blev lite snet… | 1 | |
| T0078 | ali | Ali här. Du printade min rullställ vid kvarnen. Den… FUNKAR? Jag har bara sett såna på Yo… | 1 | |
| T0079 | ali | rullställ vid kvarnen – printad. På riktigt. Jag har visat bilden för min fru tre gånger.… | 1 | |
| T0080 | ali | Jag såg din rullställ vid kvarnen på avstånd. Strecket på sidan blev lite snett. Mitt fel… | 1 | |
| T0081 | ali | Ali här. Du printade min härdade kvarnknivar. Den… FUNKAR? Jag har bara sett såna på YouT… | 1 | |
| T0082 | ali | härdade kvarnknivar – printad. På riktigt. Jag har visat bilden för min fru tre gånger. H… | 1 | |
| T0083 | ali | Jag såg din härdade kvarnknivar på avstånd. Strecket på sidan blev lite snett. Mitt fel. … | 1 | |
| T0084 | ali | Ali här. Ännu en ritning som blev på riktigt: härdade kvarnknivar. Semesterkassan växer. … | 1 | |
| T0085 | ali | Ali här. Du printade min diamantkvarn. Den… FUNKAR? Jag har bara sett såna på YouTube. Ok… | 1 | |
| T0086 | ali | diamantkvarn – printad. På riktigt. Jag har visat bilden för min fru tre gånger. Hon säge… | 1 | |
| T0087 | ali | Jag såg din diamantkvarn på avstånd. Strecket på sidan blev lite snett. Mitt fel. Den är … | 1 | |
| T0088 | ali | Ali här. Ännu en ritning som blev på riktigt: diamantkvarn. Semesterkassan växer. Livet v… | 1 | |
| T0089 | ali | Ali här. Du printade min stor kvarntratt. Den… FUNKAR? Jag har bara sett såna på YouTube.… | 1 | |
| T0090 | ali | stor kvarntratt – printad. På riktigt. Jag har visat bilden för min fru tre gånger. Hon s… | 1 | |
| T0091 | ali | Jag såg din stor kvarntratt på avstånd. Strecket på sidan blev lite snett. Mitt fel. Den … | 1 | |
| T0092 | ali | Ali här. Du printade min dörr. Den… FUNKAR? Jag har bara sett såna på YouTube. Okej. Jag … | 1 | |
| T0093 | ali | dörr – printad. På riktigt. Jag har visat bilden för min fru tre gånger. Hon säger "ja ja… | 1 | |
| T0094 | ali | Jag såg din dörr på avstånd. Strecket på sidan blev lite snett. Mitt fel. Den är vacker ä… | 1 | |
| T0095 | ali | Ali här. Ännu en ritning som blev på riktigt: dörr. Semesterkassan växer. Livet växer. | 1 | |
| T0096 | ali | Ali här. Du printade min isolerskiva (vägg). Den… FUNKAR? Jag har bara sett såna på YouTu… | 1 | |
| T0097 | ali | isolerskiva (vägg) – printad. På riktigt. Jag har visat bilden för min fru tre gånger. Ho… | 1 | |
| T0098 | ali | Jag såg din isolerskiva (vägg) på avstånd. Strecket på sidan blev lite snett. Mitt fel. D… | 1 | |
| T0099 | ali | Ali här. Ännu en ritning som blev på riktigt: isolerskiva (vägg). Semesterkassan växer. L… | 1 | |
| T0100 | ali | Ali här. Du printade min plåttak. Den… FUNKAR? Jag har bara sett såna på YouTube. Okej. J… | 1 | |
| T0101 | ali | plåttak – printad. På riktigt. Jag har visat bilden för min fru tre gånger. Hon säger "ja… | 1 | |
| T0102 | ali | Jag såg din plåttak på avstånd. Strecket på sidan blev lite snett. Mitt fel. Den är vacke… | 1 | |
| T0103 | ali | Ali här. Ännu en ritning som blev på riktigt: plåttak. Semesterkassan växer. Livet växer. | 1 | |
| T0104 | ali | Ali här. Du printade min fönster. Den… FUNKAR? Jag har bara sett såna på YouTube. Okej. J… | 1 | |
| T0105 | ali | fönster – printad. På riktigt. Jag har visat bilden för min fru tre gånger. Hon säger "ja… | 1 | |
| T0106 | ali | Jag såg din fönster på avstånd. Strecket på sidan blev lite snett. Mitt fel. Den är vacke… | 1 | |
| T0107 | ali | Ali här. Ännu en ritning som blev på riktigt: fönster. Semesterkassan växer. Livet växer. | 1 | |
| T0108 | ali | Ali här. Du printade min trägolv. Den… FUNKAR? Jag har bara sett såna på YouTube. Okej. J… | 1 | |
| T0109 | ali | trägolv – printad. På riktigt. Jag har visat bilden för min fru tre gånger. Hon säger "ja… | 1 | |
| T0110 | ali | Jag såg din trägolv på avstånd. Strecket på sidan blev lite snett. Mitt fel. Den är vacke… | 1 | |
| T0111 | ali | Ali här. Ännu en ritning som blev på riktigt: trägolv. Semesterkassan växer. Livet växer. | 1 | |
| T0112 | ali | Ali här. Du printade min taklampa. Den… FUNKAR? Jag har bara sett såna på YouTube. Okej. … | 1 | |
| T0113 | ali | taklampa – printad. På riktigt. Jag har visat bilden för min fru tre gånger. Hon säger "j… | 1 | |
| T0114 | ali | Jag såg din taklampa på avstånd. Strecket på sidan blev lite snett. Mitt fel. Den är vack… | 1 | |
| T0115 | ali | Ali här. Ännu en ritning som blev på riktigt: taklampa. Semesterkassan växer. Livet växer. | 1 | |
| T0116 | ali | Ali här. Du printade min tapeter. Den… FUNKAR? Jag har bara sett såna på YouTube. Okej. J… | 1 | |
| T0117 | ali | tapeter – printad. På riktigt. Jag har visat bilden för min fru tre gånger. Hon säger "ja… | 1 | |
| T0118 | ali | Jag såg din tapeter på avstånd. Strecket på sidan blev lite snett. Mitt fel. Den är vacke… | 1 | |
| T0119 | ali | Ali här. Ännu en ritning som blev på riktigt: tapeter. Semesterkassan växer. Livet växer. | 1 | |
| T0120 | ali | Ali här. Du printade min gamingbod (tillbyggnad). Den… FUNKAR? Jag har bara sett såna på … | 1 | |
| T0121 | ali | gamingbod (tillbyggnad) – printad. På riktigt. Jag har visat bilden för min fru tre gånge… | 1 | |
| T0122 | ali | Jag såg din gamingbod (tillbyggnad) på avstånd. Strecket på sidan blev lite snett. Mitt f… | 1 | |
| T0123 | ali | Ali här. Du printade min skräpgrip. Den… FUNKAR? Jag har bara sett såna på YouTube. Okej.… | 1 | |
| T0124 | ali | skräpgrip – printad. På riktigt. Jag har visat bilden för min fru tre gånger. Hon säger "… | 1 | |
| T0125 | ali | Jag såg din skräpgrip på avstånd. Strecket på sidan blev lite snett. Mitt fel. Den är vac… | 1 | |
| T0126 | ali | Ali här. Du printade min arbetsbord. Den… FUNKAR? Jag har bara sett såna på YouTube. Okej… | 1 | |
| T0127 | ali | arbetsbord – printad. På riktigt. Jag har visat bilden för min fru tre gånger. Hon säger … | 1 | |
| T0128 | ali | Jag såg din arbetsbord på avstånd. Strecket på sidan blev lite snett. Mitt fel. Den är va… | 1 | |
| T0129 | ali | Ali här. Ännu en ritning som blev på riktigt: arbetsbord. Semesterkassan växer. Livet väx… | 1 | |
| T0130 | ali | Ali här. Du printade min solpanel. Den… FUNKAR? Jag har bara sett såna på YouTube. Okej. … | 1 | |
| T0131 | ali | solpanel – printad. På riktigt. Jag har visat bilden för min fru tre gånger. Hon säger "j… | 1 | |
| T0132 | ali | Jag såg din solpanel på avstånd. Strecket på sidan blev lite snett. Mitt fel. Den är vack… | 1 | |
| T0133 | ali | Ali här. Du printade min rullband från tippen. Den… FUNKAR? Jag har bara sett såna på You… | 1 | |
| T0134 | ali | rullband från tippen – printad. På riktigt. Jag har visat bilden för min fru tre gånger. … | 1 | |
| T0135 | ali | Jag såg din rullband från tippen på avstånd. Strecket på sidan blev lite snett. Mitt fel.… | 1 | |
| T0136 | ali | Ali här. Du printade min lastarm vid tippen. Den… FUNKAR? Jag har bara sett såna på YouTu… | 1 | |
| T0137 | ali | lastarm vid tippen – printad. På riktigt. Jag har visat bilden för min fru tre gånger. Ho… | 1 | |
| T0138 | ali | Jag såg din lastarm vid tippen på avstånd. Strecket på sidan blev lite snett. Mitt fel. D… | 1 | |
| T0139 | ali | Ali här. Ännu en ritning som blev på riktigt: lastarm vid tippen. Semesterkassan växer. L… | 1 | |
| T0140 | ali | Ali här. Du printade min rulladdare (robotarm). Den… FUNKAR? Jag har bara sett såna på Yo… | 1 | |
| T0141 | ali | rulladdare (robotarm) – printad. På riktigt. Jag har visat bilden för min fru tre gånger.… | 1 | |
| T0142 | ali | Jag såg din rulladdare (robotarm) på avstånd. Strecket på sidan blev lite snett. Mitt fel… | 1 | |
| T0143 | ali | Ali här. Du printade min säljlåda. Den… FUNKAR? Jag har bara sett såna på YouTube. Okej. … | 1 | |
| T0144 | ali | säljlåda – printad. På riktigt. Jag har visat bilden för min fru tre gånger. Hon säger "j… | 1 | |
| T0145 | ali | Jag såg din säljlåda på avstånd. Strecket på sidan blev lite snett. Mitt fel. Den är vack… | 1 | |
| T0146 | ali | Ali här. Ännu en ritning som blev på riktigt: säljlåda. Semesterkassan växer. Livet växer. | 1 | |
| T0147 | ali | Ali här. Du printade min leveranslåda + autoprint. Den… FUNKAR? Jag har bara sett såna på… | 1 | |
| T0148 | ali | leveranslåda + autoprint – printad. På riktigt. Jag har visat bilden för min fru tre gång… | 1 | |
| T0149 | ali | Jag såg din leveranslåda + autoprint på avstånd. Strecket på sidan blev lite snett. Mitt … | 1 | |
| T0150 | ali | Ali här. Ännu en ritning som blev på riktigt: leveranslåda + autoprint. Semesterkassan vä… | 1 | |
| T0151 | ali | Ali här. Du printade min skrivare l. Den… FUNKAR? Jag har bara sett såna på YouTube. Okej… | 1 | |
| T0152 | ali | skrivare l – printad. På riktigt. Jag har visat bilden för min fru tre gånger. Hon säger … | 1 | |
| T0153 | ali | Jag såg din skrivare l på avstånd. Strecket på sidan blev lite snett. Mitt fel. Den är va… | 1 | |
| T0154 | ali | Ali här. Du printade min helens skjul. Den… FUNKAR? Jag har bara sett såna på YouTube. Ok… | 1 | |
| T0155 | ali | helens skjul – printad. På riktigt. Jag har visat bilden för min fru tre gånger. Hon säge… | 1 | |
| T0156 | ali | Jag såg din helens skjul på avstånd. Strecket på sidan blev lite snett. Mitt fel. Den är … | 1 | |
| T0157 | ali | Ali här. Ännu en ritning som blev på riktigt: helens skjul. Semesterkassan växer. Livet v… | 1 | |
| T0158 | ali | Ali här. Du printade min skrivare m. Den… FUNKAR? Jag har bara sett såna på YouTube. Okej… | 1 | |
| T0159 | ali | skrivare m – printad. På riktigt. Jag har visat bilden för min fru tre gånger. Hon säger … | 1 | |
| T0160 | ali | Jag såg din skrivare m på avstånd. Strecket på sidan blev lite snett. Mitt fel. Den är va… | 1 | |
| T0161 | ali | Ali här. Du printade min designvas i röd petg. Den… FUNKAR? Jag har bara sett såna på You… | 1 | |
| T0162 | ali | designvas i röd petg – printad. På riktigt. Jag har visat bilden för min fru tre gånger. … | 1 | |
| T0163 | ali | Jag såg din designvas i röd petg på avstånd. Strecket på sidan blev lite snett. Mitt fel.… | 1 | |
| T0164 | ali | Ali här. Ännu en ritning som blev på riktigt: designvas i röd petg. Semesterkassan växer.… | 1 | |
| T0165 | ali | Ali här. Du printade min cykelhjälm i petg. Den… FUNKAR? Jag har bara sett såna på YouTub… | 1 | |
| T0166 | ali | cykelhjälm i petg – printad. På riktigt. Jag har visat bilden för min fru tre gånger. Hon… | 1 | |
| T0167 | ali | Jag såg din cykelhjälm i petg på avstånd. Strecket på sidan blev lite snett. Mitt fel. De… | 1 | |
| T0168 | ali | Ali här. Du printade min neonskylt i röd petg. Den… FUNKAR? Jag har bara sett såna på You… | 1 | |
| T0169 | ali | neonskylt i röd petg – printad. På riktigt. Jag har visat bilden för min fru tre gånger. … | 1 | |
| T0170 | ali | Jag såg din neonskylt i röd petg på avstånd. Strecket på sidan blev lite snett. Mitt fel.… | 1 | |
| T0171 | ali | Ali här. Du printade min kajakpaddel i petg. Den… FUNKAR? Jag har bara sett såna på YouTu… | 1 | |
| T0172 | ali | kajakpaddel i petg – printad. På riktigt. Jag har visat bilden för min fru tre gånger. Ho… | 1 | |
| T0173 | ali | Jag såg din kajakpaddel i petg på avstånd. Strecket på sidan blev lite snett. Mitt fel. D… | 1 | |
| T0174 | ali | Ali här. Ännu en ritning som blev på riktigt: kajakpaddel i petg. Semesterkassan växer. L… | 1 | |
| T0175 | ali | Ali här. Du printade min blomkruka. Den… FUNKAR? Jag har bara sett såna på YouTube. Okej.… | 1 | |
| T0176 | ali | blomkruka – printad. På riktigt. Jag har visat bilden för min fru tre gånger. Hon säger "… | 1 | |
| T0177 | ali | Jag såg din blomkruka på avstånd. Strecket på sidan blev lite snett. Mitt fel. Den är vac… | 1 | |
| T0178 | ali | Ali här. Ännu en ritning som blev på riktigt: blomkruka. Semesterkassan växer. Livet växe… | 1 | |
| T0179 | ali | Ali här. Du printade min pall. Den… FUNKAR? Jag har bara sett såna på YouTube. Okej. Jag … | 1 | |
| T0180 | ali | pall – printad. På riktigt. Jag har visat bilden för min fru tre gånger. Hon säger "ja ja… | 1 | |
| T0181 | ali | Jag såg din pall på avstånd. Strecket på sidan blev lite snett. Mitt fel. Den är vacker ä… | 1 | |
| T0182 | ali | Ali här. Ännu en ritning som blev på riktigt: pall. Semesterkassan växer. Livet växer. | 1 | |
| T0183 | ali | Ali här. Du printade min mobilställ. Den… FUNKAR? Jag har bara sett såna på YouTube. Okej… | 1 | |
| T0184 | ali | mobilställ – printad. På riktigt. Jag har visat bilden för min fru tre gånger. Hon säger … | 1 | |
| T0185 | ali | Jag såg din mobilställ på avstånd. Strecket på sidan blev lite snett. Mitt fel. Den är va… | 1 | |
| T0186 | ali | Ali här. Ännu en ritning som blev på riktigt: mobilställ. Semesterkassan växer. Livet väx… | 1 | |
| T0187 | ali | Ali här. Du printade min fågelholk. Den… FUNKAR? Jag har bara sett såna på YouTube. Okej.… | 1 | |
| T0188 | ali | fågelholk – printad. På riktigt. Jag har visat bilden för min fru tre gånger. Hon säger "… | 1 | |
| T0189 | ali | Jag såg din fågelholk på avstånd. Strecket på sidan blev lite snett. Mitt fel. Den är vac… | 1 | |
| T0190 | ali | Ali här. Du printade min kaffekopp: bengt-åke. Den… FUNKAR? Jag har bara sett såna på You… | 1 | |
| T0191 | ali | kaffekopp: bengt-åke – printad. På riktigt. Jag har visat bilden för min fru tre gånger. … | 1 | |
| T0192 | ali | Jag såg din kaffekopp: bengt-åke på avstånd. Strecket på sidan blev lite snett. Mitt fel.… | 1 | |
| T0193 | ali | Ali här. Ännu en ritning som blev på riktigt: kaffekopp: bengt-åke. Semesterkassan växer.… | 1 | |
| T0194 | ali | Ali här. Du printade min spaljé till birgittas trädgård. Den… FUNKAR? Jag har bara sett s… | 1 | |
| T0195 | ali | spaljé till birgittas trädgård – printad. På riktigt. Jag har visat bilden för min fru tr… | 1 | |
| T0196 | ali | Jag såg din spaljé till birgittas trädgård på avstånd. Strecket på sidan blev lite snett.… | 1 | |
| T0197 | ali | Ali här. Ännu en ritning som blev på riktigt: spaljé till birgittas trädgård. Semesterkas… | 1 | |
| T0198 | ali | Ali här. Du printade min droppslang till trädgården. Den… FUNKAR? Jag har bara sett såna … | 1 | |
| T0199 | ali | droppslang till trädgården – printad. På riktigt. Jag har visat bilden för min fru tre gå… | 1 | |
| T0200 | ali | Jag såg din droppslang till trädgården på avstånd. Strecket på sidan blev lite snett. Mit… | 1 | |
| T0201 | ali | Ali här. Ännu en ritning som blev på riktigt: droppslang till trädgården. Semesterkassan … | 1 | |
| T0202 | ali | Ali här. Du printade min växthus till birgittas rosor. Den… FUNKAR? Jag har bara sett sån… | 1 | |
| T0203 | ali | växthus till birgittas rosor – printad. På riktigt. Jag har visat bilden för min fru tre … | 1 | |
| T0204 | ali | Jag såg din växthus till birgittas rosor på avstånd. Strecket på sidan blev lite snett. M… | 1 | |
| T0205 | ali | Ali här. Ännu en ritning som blev på riktigt: växthus till birgittas rosor. Semesterkassa… | 1 | |
| T0206 | ali | Ali här. Du printade min fågelskrämma. Den… FUNKAR? Jag har bara sett såna på YouTube. Ok… | 1 | |
| T0207 | ali | fågelskrämma – printad. På riktigt. Jag har visat bilden för min fru tre gånger. Hon säge… | 1 | |
| T0208 | ali | Jag såg din fågelskrämma på avstånd. Strecket på sidan blev lite snett. Mitt fel. Den är … | 1 | |
| T0209 | ali | Ali här. Du printade min fågelbad. Den… FUNKAR? Jag har bara sett såna på YouTube. Okej. … | 1 | |
| T0210 | ali | fågelbad – printad. På riktigt. Jag har visat bilden för min fru tre gånger. Hon säger "j… | 1 | |
| T0211 | ali | Jag såg din fågelbad på avstånd. Strecket på sidan blev lite snett. Mitt fel. Den är vack… | 1 | |
| T0212 | ali | Ali här. Du printade min lampskärm. Den… FUNKAR? Jag har bara sett såna på YouTube. Okej.… | 1 | |
| T0213 | ali | lampskärm – printad. På riktigt. Jag har visat bilden för min fru tre gånger. Hon säger "… | 1 | |
| T0214 | ali | Jag såg din lampskärm på avstånd. Strecket på sidan blev lite snett. Mitt fel. Den är vac… | 1 | |
| T0215 | ali | Ali här. Ännu en ritning som blev på riktigt: lampskärm. Semesterkassan växer. Livet växe… | 1 | |
| T0216 | ali | Ali här. Du printade min drönarram. Den… FUNKAR? Jag har bara sett såna på YouTube. Okej.… | 1 | |
| T0217 | ali | drönarram – printad. På riktigt. Jag har visat bilden för min fru tre gånger. Hon säger "… | 1 | |
| T0218 | ali | Jag såg din drönarram på avstånd. Strecket på sidan blev lite snett. Mitt fel. Den är vac… | 1 | |
| T0219 | ali | Ali här. Ännu en ritning som blev på riktigt: drönarram. Semesterkassan växer. Livet växe… | 1 | |
| T0220 | ali | Ali här. Du printade min skateboard. Den… FUNKAR? Jag har bara sett såna på YouTube. Okej… | 1 | |
| T0221 | ali | skateboard – printad. På riktigt. Jag har visat bilden för min fru tre gånger. Hon säger … | 1 | |
| T0222 | ali | Jag såg din skateboard på avstånd. Strecket på sidan blev lite snett. Mitt fel. Den är va… | 1 | |
| T0223 | ali | Ali här. Ännu en ritning som blev på riktigt: skateboard. Semesterkassan växer. Livet väx… | 1 | |
| T0224 | ali | Ali här. Du printade min elgitarr. Den… FUNKAR? Jag har bara sett såna på YouTube. Okej. … | 1 | |
| T0225 | ali | elgitarr – printad. På riktigt. Jag har visat bilden för min fru tre gånger. Hon säger "j… | 1 | |
| T0226 | ali | Jag såg din elgitarr på avstånd. Strecket på sidan blev lite snett. Mitt fel. Den är vack… | 1 | |
| T0227 | ali | Ali här. Ännu en ritning som blev på riktigt: elgitarr. Semesterkassan växer. Livet växer. | 1 | |
| T0228 | ali | Ali här. Du printade min cykelram. Den… FUNKAR? Jag har bara sett såna på YouTube. Okej. … | 1 | |
| T0229 | ali | cykelram – printad. På riktigt. Jag har visat bilden för min fru tre gånger. Hon säger "j… | 1 | |
| T0230 | ali | Jag såg din cykelram på avstånd. Strecket på sidan blev lite snett. Mitt fel. Den är vack… | 1 | |
| T0231 | ali | Ali här. Du printade min printad kajak. Den… FUNKAR? Jag har bara sett såna på YouTube. O… | 1 | |
| T0232 | ali | printad kajak – printad. På riktigt. Jag har visat bilden för min fru tre gånger. Hon säg… | 1 | |
| T0233 | ali | Jag såg din printad kajak på avstånd. Strecket på sidan blev lite snett. Mitt fel. Den är… | 1 | |
| T0234 | ali | Ali här. Ännu en ritning som blev på riktigt: printad kajak. Semesterkassan växer. Livet … | 1 | |
| T0235 | ali | Ali här. Du printade min gamingstol. Den… FUNKAR? Jag har bara sett såna på YouTube. Okej… | 1 | |
| T0236 | ali | gamingstol – printad. På riktigt. Jag har visat bilden för min fru tre gånger. Hon säger … | 1 | |
| T0237 | ali | Jag såg din gamingstol på avstånd. Strecket på sidan blev lite snett. Mitt fel. Den är va… | 1 | |
| T0238 | ali | Ali här. Du printade min högtalare. Den… FUNKAR? Jag har bara sett såna på YouTube. Okej.… | 1 | |
| T0239 | ali | högtalare – printad. På riktigt. Jag har visat bilden för min fru tre gånger. Hon säger "… | 1 | |
| T0240 | ali | Jag såg din högtalare på avstånd. Strecket på sidan blev lite snett. Mitt fel. Den är vac… | 1 | |
| T0241 | ali | Ali här. Ännu en ritning som blev på riktigt: högtalare. Semesterkassan växer. Livet växe… | 1 | |
| T0242 | ali | Ali här. Du printade min vedkamin. Den… FUNKAR? Jag har bara sett såna på YouTube. Okej. … | 1 | |
| T0243 | ali | vedkamin – printad. På riktigt. Jag har visat bilden för min fru tre gånger. Hon säger "j… | 1 | |
| T0244 | ali | Jag såg din vedkamin på avstånd. Strecket på sidan blev lite snett. Mitt fel. Den är vack… | 1 | |
| T0245 | ali | Ali här. Ännu en ritning som blev på riktigt: vedkamin. Semesterkassan växer. Livet växer. | 1 | |
| T0246 | ali | Ali här. Du printade min minikylskåp. Den… FUNKAR? Jag har bara sett såna på YouTube. Oke… | 1 | |
| T0247 | ali | minikylskåp – printad. På riktigt. Jag har visat bilden för min fru tre gånger. Hon säger… | 1 | |
| T0248 | ali | Jag såg din minikylskåp på avstånd. Strecket på sidan blev lite snett. Mitt fel. Den är v… | 1 | |
| T0249 | ali | Ali här. Ännu en ritning som blev på riktigt: minikylskåp. Semesterkassan växer. Livet vä… | 1 | |
| T0250 | ali | Ali här. Du printade min gamingbord med skärm. Den… FUNKAR? Jag har bara sett såna på You… | 1 | |
| T0251 | ali | gamingbord med skärm – printad. På riktigt. Jag har visat bilden för min fru tre gånger. … | 1 | |
| T0252 | ali | Jag såg din gamingbord med skärm på avstånd. Strecket på sidan blev lite snett. Mitt fel.… | 1 | |
| T0253 | ali | Ali här. Du printade min soffa. Den… FUNKAR? Jag har bara sett såna på YouTube. Okej. Jag… | 1 | |
| T0254 | ali | soffa – printad. På riktigt. Jag har visat bilden för min fru tre gånger. Hon säger "ja j… | 1 | |
| T0255 | ali | Jag såg din soffa på avstånd. Strecket på sidan blev lite snett. Mitt fel. Den är vacker … | 1 | |
| T0256 | ali | Ali här. Ännu en ritning som blev på riktigt: soffa. Semesterkassan växer. Livet växer. | 1 | |
| T0257 | ali | Ali här. Du printade min rgb-ljuspinne. Den… FUNKAR? Jag har bara sett såna på YouTube. O… | 1 | |
| T0258 | ali | rgb-ljuspinne – printad. På riktigt. Jag har visat bilden för min fru tre gånger. Hon säg… | 1 | |
| T0259 | ali | Jag såg din rgb-ljuspinne på avstånd. Strecket på sidan blev lite snett. Mitt fel. Den är… | 1 | |
| T0260 | ali | Ali här. Ännu en ritning som blev på riktigt: rgb-ljuspinne. Semesterkassan växer. Livet … | 1 | |
| T0261 | ali | Ali här. Du printade min akustikpaneler. Den… FUNKAR? Jag har bara sett såna på YouTube. … | 1 | |
| T0262 | ali | akustikpaneler – printad. På riktigt. Jag har visat bilden för min fru tre gånger. Hon sä… | 1 | |
| T0263 | ali | Jag såg din akustikpaneler på avstånd. Strecket på sidan blev lite snett. Mitt fel. Den ä… | 1 | |
| T0264 | ali | Ali här. Ännu en ritning som blev på riktigt: akustikpaneler. Semesterkassan växer. Livet… | 1 | |
| T0265 | ali | Ali här. Du printade min neonskylt game on. Den… FUNKAR? Jag har bara sett såna på YouTub… | 1 | |
| T0266 | ali | neonskylt game on – printad. På riktigt. Jag har visat bilden för min fru tre gånger. Hon… | 1 | |
| T0267 | ali | Jag såg din neonskylt game on på avstånd. Strecket på sidan blev lite snett. Mitt fel. De… | 1 | |
| T0268 | ali | Ali här. Du printade min hylla med figurer. Den… FUNKAR? Jag har bara sett såna på YouTub… | 1 | |
| T0269 | ali | hylla med figurer – printad. På riktigt. Jag har visat bilden för min fru tre gånger. Hon… | 1 | |
| T0270 | ali | Jag såg din hylla med figurer på avstånd. Strecket på sidan blev lite snett. Mitt fel. De… | 1 | |
| T0271 | ali | Ali här. Ännu en ritning som blev på riktigt: hylla med figurer. Semesterkassan växer. Li… | 1 | |
| T0272 | ali | Ali här. Du printade min projektor + duk. Den… FUNKAR? Jag har bara sett såna på YouTube.… | 1 | |
| T0273 | ali | projektor + duk – printad. På riktigt. Jag har visat bilden för min fru tre gånger. Hon s… | 1 | |
| T0274 | ali | Jag såg din projektor + duk på avstånd. Strecket på sidan blev lite snett. Mitt fel. Den … | 1 | |
| T0275 | ali | Ali här. Ännu en ritning som blev på riktigt: projektor + duk. Semesterkassan växer. Live… | 1 | |
| T0276 | ali | Ali här. Du printade min arkadmaskin. Den… FUNKAR? Jag har bara sett såna på YouTube. Oke… | 1 | |
| T0277 | ali | arkadmaskin – printad. På riktigt. Jag har visat bilden för min fru tre gånger. Hon säger… | 1 | |
| T0278 | ali | Jag såg din arkadmaskin på avstånd. Strecket på sidan blev lite snett. Mitt fel. Den är v… | 1 | |
| T0279 | ali | Ali här. Ännu en ritning som blev på riktigt: arkadmaskin. Semesterkassan växer. Livet vä… | 1 | |
| T0280 | ali | Ali här. Du printade min racingsimulator. Den… FUNKAR? Jag har bara sett såna på YouTube.… | 1 | |
| T0281 | ali | racingsimulator – printad. På riktigt. Jag har visat bilden för min fru tre gånger. Hon s… | 1 | |
| T0282 | ali | Jag såg din racingsimulator på avstånd. Strecket på sidan blev lite snett. Mitt fel. Den … | 1 | |
| T0283 | ali | Ali här. Ännu en ritning som blev på riktigt: racingsimulator. Semesterkassan växer. Live… | 1 | |
| T0284 | ali | Ali här. Du printade min biljardbord. Den… FUNKAR? Jag har bara sett såna på YouTube. Oke… | 1 | |
| T0285 | ali | biljardbord – printad. På riktigt. Jag har visat bilden för min fru tre gånger. Hon säger… | 1 | |
| T0286 | ali | Jag såg din biljardbord på avstånd. Strecket på sidan blev lite snett. Mitt fel. Den är v… | 1 | |
| T0287 | ali | Ali här. Ännu en ritning som blev på riktigt: biljardbord. Semesterkassan växer. Livet vä… | 1 | |
| T0288 | ali | Ali här. Du printade min jacuzzi. Den… FUNKAR? Jag har bara sett såna på YouTube. Okej. J… | 1 | |
| T0289 | ali | jacuzzi – printad. På riktigt. Jag har visat bilden för min fru tre gånger. Hon säger "ja… | 1 | |
| T0290 | ali | Jag såg din jacuzzi på avstånd. Strecket på sidan blev lite snett. Mitt fel. Den är vacke… | 1 | |
| T0291 | ali | Ali här. Ännu en ritning som blev på riktigt: jacuzzi. Semesterkassan växer. Livet växer. | 1 | |
| T0292 | ali | Ali här. Du printade min gamingdator med rgb. Den… FUNKAR? Jag har bara sett såna på YouT… | 1 | |
| T0293 | ali | gamingdator med rgb – printad. På riktigt. Jag har visat bilden för min fru tre gånger. H… | 1 | |
| T0294 | ali | Jag såg din gamingdator med rgb på avstånd. Strecket på sidan blev lite snett. Mitt fel. … | 1 | |

### Alis sms om nya 3D-modeller (136 st)

**I dag:** morgonen när en ny modell blir synlig hos Ali · **styrs av:** 📅 dag ≥ N / syns() · **förslag:** `vaknat + nyModell:<sak>`, fördröjning 5 s efter morgonkortet, villkor —, stryks om redan köpt, vikt **REAKTION**

| id | figur | mönster (exempel) | antal | Beslut |
|---|---|---|---|---|
| T0295 | ali | Ali här. Satt uppe med AI:n hela natten. Kvarnmotor är klar. Kom innan nio, då stänger ja… | 1 | |
| T0296 | ali | Ali här. Ny instruktion inne: Kvarnmotor. Kom innan nio. Jag stänger nio. Inte en minut s… | 1 | |
| T0297 | ali | Kvarnmotor har kommit. Jag bar in lådan själv. Ingen hjälpte mig. Som vanligt. | 1 | |
| T0298 | ali | Ny grej: Kvarnmotor. Köp den så jag slipper titta på den. | 1 | |
| T0299 | ali | Ali här. Satt uppe med AI:n hela natten. Kvarnen är klar. Kom innan nio, då stänger jag o… | 1 | |
| T0300 | ali | Ali här. Ny instruktion inne: Kvarnen. Kom innan nio. Jag stänger nio. Inte en minut sena… | 1 | |
| T0301 | ali | Kvarnen har kommit. Jag bar in lådan själv. Ingen hjälpte mig. Som vanligt. | 1 | |
| T0302 | ali | Ny grej: Kvarnen. Köp den så jag slipper titta på den. | 1 | |
| T0303 | ali | Ali här. Satt uppe med AI:n hela natten. Cykelbatteri är klar. Kom innan nio, då stänger … | 1 | |
| T0304 | ali | Ali här. Ny instruktion inne: Cykelbatteri. Kom innan nio. Jag stänger nio. Inte en minut… | 1 | |
| T0305 | ali | Cykelbatteri har kommit. Jag bar in lådan själv. Ingen hjälpte mig. Som vanligt. | 1 | |
| T0306 | ali | Ny grej: Cykelbatteri. Köp den så jag slipper titta på den. | 1 | |
| T0307 | ali | Ali här. Satt uppe med AI:n hela natten. Solcellspark är klar. Kom innan nio, då stänger … | 1 | |
| T0308 | ali | Ali här. Ny instruktion inne: Solcellspark. Kom innan nio. Jag stänger nio. Inte en minut… | 1 | |
| T0309 | ali | Solcellspark har kommit. Jag bar in lådan själv. Ingen hjälpte mig. Som vanligt. | 1 | |
| T0310 | ali | Ny grej: Solcellspark. Köp den så jag slipper titta på den. | 1 | |
| T0311 | ali | Ali här. Satt uppe med AI:n hela natten. Batteribank är klar. Kom innan nio, då stänger j… | 1 | |
| T0312 | ali | Ali här. Ny instruktion inne: Batteribank. Kom innan nio. Jag stänger nio. Inte en minut … | 1 | |
| T0313 | ali | Batteribank har kommit. Jag bar in lådan själv. Ingen hjälpte mig. Som vanligt. | 1 | |
| T0314 | ali | Ny grej: Batteribank. Köp den så jag slipper titta på den. | 1 | |
| T0315 | ali | Ali här. Satt uppe med AI:n hela natten. Skottkärra är klar. Kom innan nio, då stänger ja… | 1 | |
| T0316 | ali | Ali här. Ny instruktion inne: Skottkärra. Kom innan nio. Jag stänger nio. Inte en minut s… | 1 | |
| T0317 | ali | Skottkärra har kommit. Jag bar in lådan själv. Ingen hjälpte mig. Som vanligt. | 1 | |
| T0318 | ali | Ny grej: Skottkärra. Köp den så jag slipper titta på den. | 1 | |
| T0319 | ali | Ali här. Satt uppe med AI:n hela natten. PETG-kvarn är klar. Kom innan nio, då stänger ja… | 1 | |
| T0320 | ali | Ali här. Ny instruktion inne: PETG-kvarn. Kom innan nio. Jag stänger nio. Inte en minut s… | 1 | |
| T0321 | ali | PETG-kvarn har kommit. Jag bar in lådan själv. Ingen hjälpte mig. Som vanligt. | 1 | |
| T0322 | ali | Ny grej: PETG-kvarn. Köp den så jag slipper titta på den. | 1 | |
| T0323 | ali | Ali här. Satt uppe med AI:n hela natten. PETG-skrivare är klar. Kom innan nio, då stänger… | 1 | |
| T0324 | ali | Ali här. Ny instruktion inne: PETG-skrivare. Kom innan nio. Jag stänger nio. Inte en minu… | 1 | |
| T0325 | ali | PETG-skrivare har kommit. Jag bar in lådan själv. Ingen hjälpte mig. Som vanligt. | 1 | |
| T0326 | ali | Ny grej: PETG-skrivare. Köp den så jag slipper titta på den. | 1 | |
| T0327 | ali | Ali här. Satt uppe med AI:n hela natten. Tungt rullband är klar. Kom innan nio, då stänge… | 1 | |
| T0328 | ali | Ali här. Ny instruktion inne: Tungt rullband. Kom innan nio. Jag stänger nio. Inte en min… | 1 | |
| T0329 | ali | Tungt rullband har kommit. Jag bar in lådan själv. Ingen hjälpte mig. Som vanligt. | 1 | |
| T0330 | ali | Ny grej: Tungt rullband. Köp den så jag slipper titta på den. | 1 | |
| T0331 | ali | Ali här. Satt uppe med AI:n hela natten. Ryggkorg är klar. Kom innan nio, då stänger jag … | 1 | |
| T0332 | ali | Ali här. Ny instruktion inne: Ryggkorg. Kom innan nio. Jag stänger nio. Inte en minut sen… | 1 | |
| T0333 | ali | Ryggkorg har kommit. Jag bar in lådan själv. Ingen hjälpte mig. Som vanligt. | 1 | |
| T0334 | ali | Ny grej: Ryggkorg. Köp den så jag slipper titta på den. | 1 | |
| T0335 | ali | Ali här. Satt uppe med AI:n hela natten. Stor spolhållare är klar. Kom innan nio, då stän… | 1 | |
| T0336 | ali | Ali här. Ny instruktion inne: Stor spolhållare. Kom innan nio. Jag stänger nio. Inte en m… | 1 | |
| T0337 | ali | Stor spolhållare har kommit. Jag bar in lådan själv. Ingen hjälpte mig. Som vanligt. | 1 | |
| T0338 | ali | Ny grej: Stor spolhållare. Köp den så jag slipper titta på den. | 1 | |
| T0339 | ali | Ali här. Satt uppe med AI:n hela natten. Spolhållare XL är klar. Kom innan nio, då stänge… | 1 | |
| T0340 | ali | Ali här. Ny instruktion inne: Spolhållare XL. Kom innan nio. Jag stänger nio. Inte en min… | 1 | |
| T0341 | ali | Spolhållare XL har kommit. Jag bar in lådan själv. Ingen hjälpte mig. Som vanligt. | 1 | |
| T0342 | ali | Ny grej: Spolhållare XL. Köp den så jag slipper titta på den. | 1 | |
| T0343 | ali | Ali här. Satt uppe med AI:n hela natten. Spoltorn är klar. Kom innan nio, då stänger jag … | 1 | |
| T0344 | ali | Ali här. Ny instruktion inne: Spoltorn. Kom innan nio. Jag stänger nio. Inte en minut sen… | 1 | |
| T0345 | ali | Spoltorn har kommit. Jag bar in lådan själv. Ingen hjälpte mig. Som vanligt. | 1 | |
| T0346 | ali | Ny grej: Spoltorn. Köp den så jag slipper titta på den. | 1 | |
| T0347 | ali | Ali här. Satt uppe med AI:n hela natten. Rullställ vid kvarnen är klar. Kom innan nio, då… | 1 | |
| T0348 | ali | Ali här. Ny instruktion inne: Rullställ vid kvarnen. Kom innan nio. Jag stänger nio. Inte… | 1 | |
| T0349 | ali | Rullställ vid kvarnen har kommit. Jag bar in lådan själv. Ingen hjälpte mig. Som vanligt. | 1 | |
| T0350 | ali | Ny grej: Rullställ vid kvarnen. Köp den så jag slipper titta på den. | 1 | |
| T0351 | ali | Ali här. Satt uppe med AI:n hela natten. Härdade kvarnknivar är klar. Kom innan nio, då s… | 1 | |
| T0352 | ali | Ali här. Ny instruktion inne: Härdade kvarnknivar. Kom innan nio. Jag stänger nio. Inte e… | 1 | |
| T0353 | ali | Härdade kvarnknivar har kommit. Jag bar in lådan själv. Ingen hjälpte mig. Som vanligt. | 1 | |
| T0354 | ali | Ny grej: Härdade kvarnknivar. Köp den så jag slipper titta på den. | 1 | |
| T0355 | ali | Ali här. Satt uppe med AI:n hela natten. Diamantkvarn är klar. Kom innan nio, då stänger … | 1 | |
| T0356 | ali | Ali här. Ny instruktion inne: Diamantkvarn. Kom innan nio. Jag stänger nio. Inte en minut… | 1 | |
| T0357 | ali | Diamantkvarn har kommit. Jag bar in lådan själv. Ingen hjälpte mig. Som vanligt. | 1 | |
| T0358 | ali | Ny grej: Diamantkvarn. Köp den så jag slipper titta på den. | 1 | |
| T0359 | ali | Ali här. Satt uppe med AI:n hela natten. Stor kvarntratt är klar. Kom innan nio, då stäng… | 1 | |
| T0360 | ali | Ali här. Ny instruktion inne: Stor kvarntratt. Kom innan nio. Jag stänger nio. Inte en mi… | 1 | |
| T0361 | ali | Stor kvarntratt har kommit. Jag bar in lådan själv. Ingen hjälpte mig. Som vanligt. | 1 | |
| T0362 | ali | Ny grej: Stor kvarntratt. Köp den så jag slipper titta på den. | 1 | |
| T0363 | ali | Ali här. Satt uppe med AI:n hela natten. Dörr är klar. Kom innan nio, då stänger jag och … | 1 | |
| T0364 | ali | Ali här. Ny instruktion inne: Dörr. Kom innan nio. Jag stänger nio. Inte en minut senare. | 1 | |
| T0365 | ali | Dörr har kommit. Jag bar in lådan själv. Ingen hjälpte mig. Som vanligt. | 1 | |
| T0366 | ali | Ny grej: Dörr. Köp den så jag slipper titta på den. | 1 | |
| T0367 | ali | Ali här. Satt uppe med AI:n hela natten. Isolerskiva (vägg) är klar. Kom innan nio, då st… | 1 | |
| T0368 | ali | Ali här. Ny instruktion inne: Isolerskiva (vägg). Kom innan nio. Jag stänger nio. Inte en… | 1 | |
| T0369 | ali | Isolerskiva (vägg) har kommit. Jag bar in lådan själv. Ingen hjälpte mig. Som vanligt. | 1 | |
| T0370 | ali | Ny grej: Isolerskiva (vägg). Köp den så jag slipper titta på den. | 1 | |
| T0371 | ali | Ali här. Satt uppe med AI:n hela natten. Plåttak är klar. Kom innan nio, då stänger jag o… | 1 | |
| T0372 | ali | Ali här. Ny instruktion inne: Plåttak. Kom innan nio. Jag stänger nio. Inte en minut sena… | 1 | |
| T0373 | ali | Plåttak har kommit. Jag bar in lådan själv. Ingen hjälpte mig. Som vanligt. | 1 | |
| T0374 | ali | Ny grej: Plåttak. Köp den så jag slipper titta på den. | 1 | |
| T0375 | ali | Ali här. Satt uppe med AI:n hela natten. Fönster är klar. Kom innan nio, då stänger jag o… | 1 | |
| T0376 | ali | Ali här. Ny instruktion inne: Fönster. Kom innan nio. Jag stänger nio. Inte en minut sena… | 1 | |
| T0377 | ali | Fönster har kommit. Jag bar in lådan själv. Ingen hjälpte mig. Som vanligt. | 1 | |
| T0378 | ali | Ny grej: Fönster. Köp den så jag slipper titta på den. | 1 | |
| T0379 | ali | Ali här. Satt uppe med AI:n hela natten. Trägolv är klar. Kom innan nio, då stänger jag o… | 1 | |
| T0380 | ali | Ali här. Ny instruktion inne: Trägolv. Kom innan nio. Jag stänger nio. Inte en minut sena… | 1 | |
| T0381 | ali | Trägolv har kommit. Jag bar in lådan själv. Ingen hjälpte mig. Som vanligt. | 1 | |
| T0382 | ali | Ny grej: Trägolv. Köp den så jag slipper titta på den. | 1 | |
| T0383 | ali | Ali här. Satt uppe med AI:n hela natten. Taklampa är klar. Kom innan nio, då stänger jag … | 1 | |
| T0384 | ali | Ali här. Ny instruktion inne: Taklampa. Kom innan nio. Jag stänger nio. Inte en minut sen… | 1 | |
| T0385 | ali | Taklampa har kommit. Jag bar in lådan själv. Ingen hjälpte mig. Som vanligt. | 1 | |
| T0386 | ali | Ny grej: Taklampa. Köp den så jag slipper titta på den. | 1 | |
| T0387 | ali | Ali här. Satt uppe med AI:n hela natten. Tapeter är klar. Kom innan nio, då stänger jag o… | 1 | |
| T0388 | ali | Ali här. Ny instruktion inne: Tapeter. Kom innan nio. Jag stänger nio. Inte en minut sena… | 1 | |
| T0389 | ali | Tapeter har kommit. Jag bar in lådan själv. Ingen hjälpte mig. Som vanligt. | 1 | |
| T0390 | ali | Ny grej: Tapeter. Köp den så jag slipper titta på den. | 1 | |
| T0391 | ali | Ali här. Satt uppe med AI:n hela natten. Gamingbod (tillbyggnad) är klar. Kom innan nio, … | 1 | |
| T0392 | ali | Ali här. Ny instruktion inne: Gamingbod (tillbyggnad). Kom innan nio. Jag stänger nio. In… | 1 | |
| T0393 | ali | Gamingbod (tillbyggnad) har kommit. Jag bar in lådan själv. Ingen hjälpte mig. Som vanlig… | 1 | |
| T0394 | ali | Ny grej: Gamingbod (tillbyggnad). Köp den så jag slipper titta på den. | 1 | |
| T0395 | ali | Ali här. Satt uppe med AI:n hela natten. Skräpgrip är klar. Kom innan nio, då stänger jag… | 1 | |
| T0396 | ali | Ali här. Ny instruktion inne: Skräpgrip. Kom innan nio. Jag stänger nio. Inte en minut se… | 1 | |
| T0397 | ali | Skräpgrip har kommit. Jag bar in lådan själv. Ingen hjälpte mig. Som vanligt. | 1 | |
| T0398 | ali | Ny grej: Skräpgrip. Köp den så jag slipper titta på den. | 1 | |
| T0399 | ali | Ali här. Satt uppe med AI:n hela natten. Arbetsbord är klar. Kom innan nio, då stänger ja… | 1 | |
| T0400 | ali | Ali här. Ny instruktion inne: Arbetsbord. Kom innan nio. Jag stänger nio. Inte en minut s… | 1 | |
| T0401 | ali | Arbetsbord har kommit. Jag bar in lådan själv. Ingen hjälpte mig. Som vanligt. | 1 | |
| T0402 | ali | Ny grej: Arbetsbord. Köp den så jag slipper titta på den. | 1 | |
| T0403 | ali | Ali här. Satt uppe med AI:n hela natten. Rullband från tippen är klar. Kom innan nio, då … | 1 | |
| T0404 | ali | Ali här. Ny instruktion inne: Rullband från tippen. Kom innan nio. Jag stänger nio. Inte … | 1 | |
| T0405 | ali | Rullband från tippen har kommit. Jag bar in lådan själv. Ingen hjälpte mig. Som vanligt. | 1 | |
| T0406 | ali | Ny grej: Rullband från tippen. Köp den så jag slipper titta på den. | 1 | |
| T0407 | ali | Ali här. Satt uppe med AI:n hela natten. Lastarm vid tippen är klar. Kom innan nio, då st… | 1 | |
| T0408 | ali | Ali här. Ny instruktion inne: Lastarm vid tippen. Kom innan nio. Jag stänger nio. Inte en… | 1 | |
| T0409 | ali | Lastarm vid tippen har kommit. Jag bar in lådan själv. Ingen hjälpte mig. Som vanligt. | 1 | |
| T0410 | ali | Ny grej: Lastarm vid tippen. Köp den så jag slipper titta på den. | 1 | |
| T0411 | ali | Ali här. Satt uppe med AI:n hela natten. Rulladdare (robotarm) är klar. Kom innan nio, då… | 1 | |
| T0412 | ali | Ali här. Ny instruktion inne: Rulladdare (robotarm). Kom innan nio. Jag stänger nio. Inte… | 1 | |
| T0413 | ali | Rulladdare (robotarm) har kommit. Jag bar in lådan själv. Ingen hjälpte mig. Som vanligt. | 1 | |
| T0414 | ali | Ny grej: Rulladdare (robotarm). Köp den så jag slipper titta på den. | 1 | |
| T0415 | ali | Ali här. Satt uppe med AI:n hela natten. Säljlåda är klar. Kom innan nio, då stänger jag … | 1 | |
| T0416 | ali | Ali här. Ny instruktion inne: Säljlåda. Kom innan nio. Jag stänger nio. Inte en minut sen… | 1 | |
| T0417 | ali | Säljlåda har kommit. Jag bar in lådan själv. Ingen hjälpte mig. Som vanligt. | 1 | |
| T0418 | ali | Ny grej: Säljlåda. Köp den så jag slipper titta på den. | 1 | |
| T0419 | ali | Ali här. Satt uppe med AI:n hela natten. Leveranslåda + autoprint är klar. Kom innan nio,… | 1 | |
| T0420 | ali | Ali här. Ny instruktion inne: Leveranslåda + autoprint. Kom innan nio. Jag stänger nio. I… | 1 | |
| T0421 | ali | Leveranslåda + autoprint har kommit. Jag bar in lådan själv. Ingen hjälpte mig. Som vanli… | 1 | |
| T0422 | ali | Ny grej: Leveranslåda + autoprint. Köp den så jag slipper titta på den. | 1 | |
| T0423 | ali | Ali här. Satt uppe med AI:n hela natten. Helens skjul är klar. Kom innan nio, då stänger … | 1 | |
| T0424 | ali | Ali här. Ny instruktion inne: Helens skjul. Kom innan nio. Jag stänger nio. Inte en minut… | 1 | |
| T0425 | ali | Helens skjul har kommit. Jag bar in lådan själv. Ingen hjälpte mig. Som vanligt. | 1 | |
| T0426 | ali | Ny grej: Helens skjul. Köp den så jag slipper titta på den. | 1 | |
| T0427 | ali | Ali här. Satt uppe med AI:n hela natten. Säng är klar. Kom innan nio, då stänger jag och … | 1 | |
| T0428 | ali | Ali här. Ny instruktion inne: Säng. Kom innan nio. Jag stänger nio. Inte en minut senare. | 1 | |
| T0429 | ali | Säng har kommit. Jag bar in lådan själv. Ingen hjälpte mig. Som vanligt. | 1 | |
| T0430 | ali | Ny grej: Säng. Köp den så jag slipper titta på den. | 1 | |

### Sms med svarsalternativ och småprat (100 st)

**I dag:** sms-poolen: 2–3 per dag med 50–120 s mellanrum · **styrs av:** ⏱ tid + 📅 dag ≥ N · **förslag:** `stillaStaende (30 s) eller somnat → nästa morgon`, fördröjning 0, villkor ingen meny öppen, stryks om —, vikt **REAKTION (småprat)**

| id | figur | text | villkor i dag | styrs av | Beslut |
|---|---|---|---|---|---|
| T0431 | pappa | Mamma undrar om du lever. Ja sa ja. Stämmer de? | S.dag >= 6 | 📅 dag ≥ N | |
| T0432 | pappa | Mamma sa att ja skulle skriva. Nu har ja skrivit. | S.dag >= 9 | 📅 dag ≥ N | |
| T0433 | pappa | OK. | S.dag >= 11 | 📅 dag ≥ N | |
| T0434 | pappa | Hur skriver man å på denna | S.dag >= 13 | 📅 dag ≥ N | |
| T0435 | pappa | 👍 | S.dag >= 16 | 📅 dag ≥ N | |
| T0436 | pappa | Varför har du inte kommit längre? /mamma sa att ja inte fick skriva så. Sorry. | S.dag >= 18 | 📅 dag ≥ N | |
| T0437 | mamma | Jag har städat ditt rum. Det tog TRE DAGAR. Jag hittade en macka från i somras.… | S.dag >= 3 | 📅 dag ≥ N | |
| T0438 | mamma | Har du VARMA STRUMPOR?? Det ska bli kallt!! | S.dag >= 3 | 📅 dag ≥ N | |
| T0439 | mamma | Bra. Vilka då? De bruna? De bruna har hål. Jag VET att de har hål. | — | ⏱ tid + 📅 dag ≥ N | |
| T0440 | mamma | Jag skickar ett paket. Med strumpor. Och en mössa. Och sju mackor. | — | ⏱ tid + 📅 dag ≥ N | |
| T0441 | mamma | Jag läste om en man som bodde på en soptipp. Han blev attackerad av måsar. Finn… | S.dag >= 4 | 📅 dag ≥ N | |
| T0442 | mamma | En KATT?! Är den vaccinerad? Rör den inte. Eller jo. Ge den en macka. | — | ⏱ tid + 📅 dag ≥ N | |
| T0443 | mamma | JAG KOMMER OCH HÄMTAR DIG. … Pappa vill inte köra. Pappa säger att måsar är ok. | — | ⏱ tid + 📅 dag ≥ N | |
| T0444 | mamma | Vem är den där Ali? Är han snäll? Betalar han dig ORDENTLIGT? | S.stat.salt >= 3 | ⏱ tid + 📅 dag ≥ N | |
| T0445 | mamma | Typ?? Jag ringer honom. Vad heter butiken? Jag hittar den. | — | ⏱ tid + 📅 dag ≥ N | |
| T0446 | mamma | Sur men ärlig? Det är bra. Pappa är sur men ärlig. Fast mest tyst. | — | ⏱ tid + 📅 dag ≥ N | |
| T0447 | mamma | Det har ringt en karl som heter Rolf och frågat om du gillar korv. Vem ÄR det??… | S.rolf.i >= 1 | ⏱ tid + 📅 dag ≥ N | |
| T0448 | mamma | Din bror säger att du har TVÅ skrivare nu. Är du med i en sekt? Du kan berätta … | skrivare.length >= 2 | ⏱ tid + 📅 dag ≥ N | |
| T0449 | mamma | Din bror säger att du har PENGAR. Du har aldrig haft pengar. Har du sålt en nju… | S.mynt >= 3000 | ⏱ tid + 📅 dag ≥ N | |
| T0450 | mamma | Printar. Vad är printar. Är det lagligt? Säg att det är lagligt. | — | ⏱ tid + 📅 dag ≥ N | |
| T0451 | mamma | DET ÄR INTE ROLIGT. … Pappa skrattade. Första gången sen 1998. | — | ⏱ tid + 📅 dag ≥ N | |
| T0452 | mamma | Sover du ordentligt? Du ser trött ut. Jag vet att jag inte kan se dig. Men jag … | S.dag >= 5 | 📅 dag ≥ N | |
| T0453 | mamma | Kommer du hem på jul? Pappa har redan köpt skinkan. I augusti. Den ligger i fry… | S.dag >= 7 | 📅 dag ≥ N | |
| T0454 | mamma | Jag gråter. Pappa har gått ut i garaget. Det betyder att han också gråter. | — | ⏱ tid + 📅 dag ≥ N | |
| T0455 | mamma | KANSKE. Jag har skrivit upp det. Det står "kanske" i kalendern nu. Med röd penn… | — | ⏱ tid + 📅 dag ≥ N | |
| T0456 | mamma | Mormor frågar om du har träffat någon på soptippen. Jag sa att du har en sopgub… | S.dag >= 6 | 📅 dag ≥ N | |
| T0457 | mamma | Bygger du ett HUS TILL?! Du har inte ens dammsugit ditt rum här hemma på fyra å… | !!S.bod | ⏱ tid + 📅 dag ≥ N | |
| T0458 | mamma | Jag har lagt upp en bild på ditt skjul på Facebook. 47 gilla. Faster Inger skre… | S.dag >= 9 | 📅 dag ≥ N | |
| T0459 | mamma | Har du borstat tänderna idag? Ljug inte. Jag hör om du ljuger. Även på sms. | S.dag >= 2 | 📅 dag ≥ N | |
| T0460 | mamma | Bra. Jag tror dig. Nästan. | — | ⏱ tid + 📅 dag ≥ N | |
| T0461 | mamma | Jag VISSTE det. Ali säljer väl tandborstar? Köp en. Köp tre. | — | ⏱ tid + 📅 dag ≥ N | |
| T0462 | mamma | Jag sa till pappa att du bor på en SOPTIPP. Han sa "aha, vad lugnt då" och satt… | S.dag >= 4 | 📅 dag ≥ N | |
| T0463 | bror | Pappa har tvättat bilen tre gånger den här veckan. Jag sa att du bor på tippen.… | S.dag >= 3 | 📅 dag ≥ N | |
| T0464 | bror | Jag har gjort om ditt rum till gym. Mamma vet inte. Säg inget. | S.dag >= 4 | 📅 dag ≥ N | |
| T0465 | bror | Bra. Jag har satt upp en räcka i din garderob. Den håller. Typ. | — | ⏱ tid + 📅 dag ≥ N | |
| T0466 | bror | Då säger jag att din bästa kompis är en sopgubbe. Vi är kvitt. | — | ⏱ tid + 📅 dag ≥ N | |
| T0467 | bror | Pappa har en spellista på Youtube som heter "Sopbilar". 34 videor. Han säger at… | S.dag >= 5 | 📅 dag ≥ N | |
| T0468 | bror | Tips: håll munstycket rent. Och prata med skrivaren ibland. Inte för att den hö… | skrivare.length >= 2 | ⏱ tid + 📅 dag ≥ N | |
| T0469 | bror | Visade bilder på ditt skjul för polarna. Dom trodde det var en Airbnb. Jag sa i… | trivsel() >= 150 | ⏱ tid + 📅 dag ≥ N | |
| T0470 | bror | En GAMINGBOD?! Jag bor i en etta med mögel. Kan jag flytta in? Skämtar. Typ. | !!S.bod | ⏱ tid + 📅 dag ≥ N | |
| T0471 | bror | Seriöst? … Nej. Mamma skulle aldrig sluta prata om det. Men tack. | — | ⏱ tid + 📅 dag ≥ N | |
| T0472 | bror | Hårt. Rättvist. Men hårt. | — | ⏱ tid + 📅 dag ≥ N | |
| T0473 | bror | Mamma har gått med i en Facebookgrupp: "Föräldrar till barn som flyttat till ko… | S.dag >= 7 | 📅 dag ≥ N | |
| T0474 | bror | Tomt här hemma. Ingen som snor mina laddare. Inte för att jag saknar det eller … | S.dag >= 4 | 📅 dag ≥ N | |
| T0475 | bror | Pappa gick för att tjacka mjölk och kom hem med en motorsåg. "Den var på rea." … | S.dag >= 6 | 📅 dag ≥ N | |
| T0476 | bror | Berättade för polarna att min lillebrorsa bygger sitt eget hus. Dom tror jag lj… | S.dag >= 8 | 📅 dag ≥ N | |
| T0477 | rolf | Hörru. Morgonbulle på kontoret mä polarna. Bengt har ny keps. Vi pratade om den… | — | ⏱ tid + 📅 dag ≥ N | |
| T0478 | rolf | Hörru. Morgonbulle på kontoret mä polarna. Bengt har ny keps. Vi pratade om den… | — | ⏱ tid + 📅 dag ≥ N | |
| T0479 | rolf | Kajsa la en död mus på min kudde. Dä ä kärlek. Hon får lax ikväll. /R | — | ⏱ tid + 📅 dag ≥ N | |
| T0480 | rolf | Kajsa la en död mus på min kudde. Dä ä kärlek. Hon får lax ikväll. /R | — | ⏱ tid + 📅 dag ≥ N | |
| T0481 | rolf | Jo jo. Hittade Birgittas gamla kaffekopp under sängen i husvagnen. Ja dricker i… | — | ⏱ tid + 📅 dag ≥ N | |
| T0482 | rolf | Jo jo. Hittade Birgittas gamla kaffekopp under sängen i husvagnen. Ja dricker i… | — | ⏱ tid + 📅 dag ≥ N | |
| T0483 | rolf | Hörru.. Konditoriet på Storgatan har slutat mä mazariner. Ja har skrivit ett kl… | — | ⏱ tid + 📅 dag ≥ N | |
| T0484 | rolf | Hörru. Konditoriet på Storgatan har slutat mä mazariner. Ja har skrivit ett kla… | — | ⏱ tid + 📅 dag ≥ N | |
| T0485 | rolf | Rolfs Rockers spelaed en gång i Folkets park i Hudiksvall. 14 pers. 3 dansade. … | — | ⏱ tid + 📅 dag ≥ N | |
| T0486 | rolf | Rolfs Rockers spelade en gång i Folkets park i Hudiksvall. 14 pers. 3 dansade. … | S.rolf.i >= 3 | ⏱ tid + 📅 dag ≥ N | |
| T0487 | rolf | Jo jo. Chefen har köpt en kaffemaskin som pratar. Den sa "god morgon Rolf". Ja … | — | ⏱ tid + 📅 dag ≥ N | |
| T0488 | rolf | Jo jo. Chefen har köpt en kaffemaskin som pratar. Den sa "god morgon Rolf". Ja … | — | ⏱ tid + 📅 dag ≥ N | |
| T0489 | rolf | ÖJ! 31 år på bilen och ja har aldrig backat in i nåt. Utom en gång. En brevlåda… | — | ⏱ tid + 📅 dag ≥ N | |
| T0490 | rolf | ÖJ! 31 år på bilen och ja har aldrig backat in i nåt. Utom en gång. En brevlåda… | — | ⏱ tid + 📅 dag ≥ N | |
| T0491 | mamma | Fick du burkarna?? Honungen är från Gunnars bigårdar och lingonen plockade jag … | (S.burkar // 0) >= 2 | ⏱ tid + 📅 dag ≥ N | |
| T0492 | mamma | Bra! Pappa tar med fler på torsdag. Jag har 40 burkar kvar i källaren. | — | ⏱ tid + 📅 dag ≥ N | |
| T0493 | mamma | Ställ dem i kylen. Har du ingen KYL?? Jag skickar fler så du har något att äta. | — | ⏱ tid + 📅 dag ≥ N | |
| T0494 | mamma | Har du ätit upp honungen? Pappa säger att han såg den på golvet. Den ska stå SV… | (S.burkar // 0) >= 8 | ⏱ tid + 📅 dag ≥ N | |
| T0495 | mamma | Fick du kompotten? Det är rotfruktsgratäng. Potatisen var slut så jag tog kålro… | (S.burkar // 0) >= 4 | ⏱ tid + 📅 dag ≥ N | |
| T0496 | mamma | INGEN UGN. Jag skickar en ugn med pappa. … Pappa säger att den inte får plats i… | — | ⏱ tid + 📅 dag ≥ N | |
| T0497 | mamma | Jag VISSTE det! Pappa sa att ingen äter kålrot frivilligt. Jag skickar två till. | — | ⏱ tid + 📅 dag ≥ N | |
| T0498 | rolf | Ja kände lukten från sopbilen. FRÅN SOPBILEN. Va har du dä borta? /R | — | ⏱ tid + 📅 dag ≥ N | |
| T0499 | rolf | Ja kände lukten från sopbilen. FRÅN SOPBILEN. Va har du dä borta? /R | — | ⏱ tid + 📅 dag ≥ N | |
| T0500 | bror | Mamma har gjort lingonsylt i tre dagar. Hela köket är rött. Hon säger att det ä… | (S.burkar // 0) >= 6 | ⏱ tid + 📅 dag ≥ N | |
| T0501 | rolf | Nämen. Såg alla brukar vid ditt skjul. Försökte ge Kajsa honung. Hon vill int h… | — | ⏱ tid + 📅 dag ≥ N | |
| T0502 | rolf | Nämen. Såg alla burkar vid ditt skjul. Försökte ge Kajsa honung. Hon vill int h… | — | ⏱ tid + 📅 dag ≥ N | |
| T0503 | bror | Mamma pratar bara om sylten. Pappa har slutat säga "aha, vad lugnt då". Han säg… | (S.burkMalda // 0) >= 2 | ⏱ tid + 📅 dag ≥ N | |
| T0504 | bror | Pappa sover i garaget. Han säger att det är för att lyssna på motorn. Bilen är … | (S.burkMalda // 0) >= 5 | ⏱ tid + 📅 dag ≥ N | |
| T0505 | bror | Jag sa det. Han sa "aha". Sen gick han ut i garaget igen. | — | ⏱ tid + 📅 dag ≥ N | |
| T0506 | bror | Okej. Säg det till mamma då. Lycka till. | — | ⏱ tid + 📅 dag ≥ N | |
| T0507 | mamma | Pappa är så trött. Han säger att han inte orkar köra fler burkar. Men du har ju… | (S.burkMalda // 0) >= 3 | ⏱ tid + 📅 dag ≥ N | |
| T0508 | rolf | Tjo. Kömmer direkt från morgonkontoret. Lasse har köpt en ny termos. Dä va daeg… | — | ⏱ tid + 📅 dag ≥ N | |
| T0509 | rolf | Tjo. Kömmer direkt från morgonkontoret. Lasse har köpt en ny termos. Dä va dage… | — | ⏱ tid + 📅 dag ≥ N | |
| T0510 | rolf | Gunnar sa ett helt ord på morgonkontoret idag.. "Regn." Lasse tappa kaffet. His… | — | ⏱ tid + 📅 dag ≥ N | |
| T0511 | rolf | Gunnar sa ett helt ord på morgonkontoret idag. "Regn." Lasse tappa kaffet. Hist… | S.dag >= 8 && S.rolfNummer | 📅 dag ≥ N | |
| T0512 | rolf | ÖJ! Tryckte i mej en HEL prinsesstårta i ett svagt ögonblick. Ont i magen nu. B… | — | ⏱ tid + 📅 dag ≥ N | |
| T0513 | rolf | ÖJ! Tryckte i mej en HEL prinsesstårta i ett svagt ögonblick. Ont i magen nu. B… | — | ⏱ tid + 📅 dag ≥ N | |
| T0514 | rolf | Nämen. Magen ä dålig. Resten ä ok. Tack för att du fråga. Dä gör int så många. … | — | ⏱ tid + 📅 dag ≥ N | |
| T0515 | rolf | Nämen. Magen ä dålig. Resten ä ok. Tack för att du fråga. Dä gör int så många. … | — | ⏱ tid + 📅 dag ≥ N | |
| T0516 | rolf | En hel. Mä marsipanrosen. Ja ångrar inget. Jo. Lite. /R | — | ⏱ tid + 📅 dag ≥ N | |
| T0517 | rolf | En hel. Mä marsipanrosen. Ja ångrar inget. Jo. Lite. /R | — | ⏱ tid + 📅 dag ≥ N | |
| T0518 | rolf | Hörru. Akta dej för Bengt-Åke. Han äger all mark runt hä. Han sköt mot en älg s… | — | ⏱ tid + 📅 dag ≥ N | |
| T0519 | rolf | Hörru. Akta dej för Bengt-Åke. Han äger all mark runt hä. Han sköt mot en älg s… | — | ⏱ tid + 📅 dag ≥ N | |
| T0520 | rolf | Nämen.. Bengt-Åke ringde mej. Han sa att nån "smyger vid staketet". Ja sa att d… | — | ⏱ tid + 📅 dag ≥ N | |
| T0521 | rolf | Nämen. Bengt-Åke ringde mej. Han sa att nån "smyger vid staketet". Ja sa att dä… | — | ⏱ tid + 📅 dag ≥ N | |
| T0522 | rolf | Bengt-Åke frgåade om dej. Ja sa att du ä en bra unge som städar. Han sa "HMPF".… | — | ⏱ tid + 📅 dag ≥ N | |
| T0523 | rolf | Bengt-Åke frågade om dej. Ja sa att du ä en bra unge som städar. Han sa "HMPF".… | — | ⏱ tid + 📅 dag ≥ N | |
| T0524 | bror | Mamma såg på Facebook att en gubbe vid soptippen jagat bort en hemtjänstbil med… | (S.bengtSkrik // 0) >= 2 | ⏱ tid + 📅 dag ≥ N | |
| T0525 | bror | Okej. Mamma har bokat ett pepparsprej på nätet. Till dig. | — | ⏱ tid + 📅 dag ≥ N | |
| T0526 | bror | Bra. Jag säger till mamma att det var en annan soptipp. | — | ⏱ tid + 📅 dag ≥ N | |
| T0527 | rolf | Nämen. Din farsa ä en bra karl. Vi prata Scania o hockey. Han säjer "drar" istä… | — | ⏱ tid + 📅 dag ≥ N | |
| T0528 | rolf | Nämen. Din farsa ä en bra karl. Vi prata Scania o hockey. Han säjer "drar" istä… | — | ⏱ tid + 📅 dag ≥ N | |
| T0529 | mamma | Var pappa DÄR?! Han sa att han skulle köpa mjölk! Han kom hem och sa "aha, vad … | !!S.pappaBesok | ⏱ tid + 📅 dag ≥ N | |
| T0530 | bror | Pappa kom hem och sa att Rolf var "en riktig räv bakom örat". Sen satte han på … | !!S.pappaBesok | ⏱ tid + 📅 dag ≥ N | |

### Pappas besök (med Rolf första gången) (85 st)

**I dag:** besöksscenen (startaPappaBesok) · **styrs av:** 📅 dag N · **förslag:** `pappaKommer`, fördröjning 0, villkor —, stryks om —, vikt **STORY**

| id | figur | text | villkor i dag | styrs av | Beslut |
|---|---|---|---|---|---|
| T0531 | pappa | Tjenare. Tjena, Rolf. | — | 📅 dag N | |
| T0532 | rolf | Goddag … ja. | — | 📅 dag N | |
| T0533 | rolf | Goddag … ja. | — | 📅 dag N | |
| T0534 | pappa | Scania va? Vilken årsmodell? | — | 📅 dag N | |
| T0535 | rolf | ÖJ! Nittioåtta.. V8. | — | 📅 dag N | |
| T0536 | rolf | ÖJ! Nittioåtta. V8. | — | 📅 dag N | |
| T0537 | pappa | Mm. Fin kärra. | — | 📅 dag N | |
| T0538 | rolf | Hörru. Hon går som en klocka. | — | 📅 dag N | |
| T0539 | rolf | Hörru. Hon går som en klocka. | — | 📅 dag N | |
| T0540 | pappa | Såg du hockeyn igår? Värsta sömnpillret. | — | 📅 dag N | |
| T0541 | rolf | Ja somna i andra perioden.. Som vanlit. | — | 📅 dag N | |
| T0542 | rolf | Ja somna i andra perioden. Som vanlit. | — | 📅 dag N | |
| T0543 | pappa | Smart karl. | — | 📅 dag N | |
| T0544 | pappa | Tjenare. Jaha. Här bor du alltså. | — | 📅 dag N | |
| T0545 | du | Pappa … jag bor på en soptipp. | — | 📅 dag N | |
| T0546 | pappa | Aha, vad lugnt då. | — | 📅 dag N | |
| T0547 | du | Mamma är jätteorolig. | — | 📅 dag N | |
| T0548 | pappa | Jaha. Hon har alltid nåt. | — | 📅 dag N | |
| T0549 | pappa | Mamma skicka med lite grejer. | — | 📅 dag N | |
| T0550 | pappa | Ja gör bara som hon säger. Då blir de lugnt hemma. | — | 📅 dag N | |
| T0551 | pappa | Och va du än gör: mal dom inte. Då tror hon att du ätit upp allt. Då gör hon me… | — | 📅 dag N | |
| T0552 | pappa | Fint jobbat. | — | 📅 dag N | |
| T0553 | pappa | Nä, nu drar ja. Ska käka korv på macken. | — | 📅 dag N | |
| T0554 | pappa | Mamma hälsar. | — | 📅 dag N | |
| T0555 | pappa | Tjenare. Bara åkte förbi. | — | 📅 dag N | |
| T0556 | pappa | Hört att Djurgår'n köpt en ny back. Bra grej. | — | 📅 dag N | |
| T0557 | du | Jag har inte sovit på två dagar. | — | 📅 dag N | |
| T0558 | pappa | Jaha. Ta en tupplur. De gör ja. | — | 📅 dag N | |
| T0559 | pappa | Tjena. Nya dojor. | — | 📅 dag N | |
| T0560 | pappa | Fick dom på rea. Sköna som tofflor. | — | 📅 dag N | |
| T0561 | du | Jag saknar er ibland. | — | 📅 dag N | |
| T0562 | pappa | Mm. Mamma har ditt foto på kylen. | — | 📅 dag N | |
| T0563 | pappa | Ja har cyklat hit. Mamma tycker ja ska röra på mej. | — | 📅 dag N | |
| T0564 | pappa | Ingen motor. Trist. Men nyttigt, säger hon. | — | 📅 dag N | |
| T0565 | du | Jag är lite ledsen idag. | — | 📅 dag N | |
| T0566 | pappa | Aha, vad lugnt då. Käka en korv, så går de över. | — | 📅 dag N | |
| T0567 | pappa | Tjenare. Mamma sa att ja skulle kolla läget. | — | 📅 dag N | |
| T0568 | pappa | Läget e bra. Nu har ja kollat. | — | 📅 dag N | |
| T0569 | du | Har du saknat mig? | — | 📅 dag N | |
| T0570 | pappa | Aha, vad lugnt då. Fin väg hit förresten. Nyasfalterad. | — | 📅 dag N | |
| T0571 | pappa | Tjena. Såg Formel 1 i natt. Långt race. | — | 📅 dag N | |
| T0572 | pappa | Verstappen vann. Igen. | — | 📅 dag N | |
| T0573 | du | Jag har ingen säng, pappa. | — | 📅 dag N | |
| T0574 | pappa | Jaha. Golvet e bra för ryggen. Ja sov på golvet i lumpen. | — | 📅 dag N | |
| T0575 | pappa | Ja har badat i sjön. Kallt. | — | 📅 dag N | |
| T0576 | du | Mamma grät i telefon. | — | 📅 dag N | |
| T0577 | pappa | Aha, vad lugnt då. Hon gråter på Bingolotto också. | — | 📅 dag N | |
| T0578 | pappa | Tjenare. Bara åkte förbi. | — | 📅 dag N | |
| T0579 | pappa | Du, en sak. Varför har du inte kommit längre? | — | 📅 dag N | |
| T0580 | du | Va? Jag har byggt allt det här själv. | — | 📅 dag N | |
| T0581 | pappa | Jaså. Grannens grabb har två lägenheter. | — | 📅 dag N | |
| T0582 | pappa | Skjulet lutar lite, va. | — | 📅 dag N | |
| T0583 | pappa | Hade du inte tänkt ha ett riktigt hus vid det här laget? | — | 📅 dag N | |
| T0584 | du | Jag gör så gott jag kan. | — | 📅 dag N | |
| T0585 | pappa | Aha, vad lugnt då. Ja hade körkort och Volvo när ja var i din ålder. | — | 📅 dag N | |
| T0586 | pappa | Tjena. Ska du bo här i vinter också? | — | 📅 dag N | |
| T0587 | du | Jag vet inte, pappa. | — | 📅 dag N | |
| T0588 | pappa | Långkalsonger. De e grejen. Mamma köper. | — | 📅 dag N | |
| T0589 | pappa | Tjena. Tar du de lugnt idag, eller. | — | 📅 dag N | |
| T0590 | du | Ibland. | — | 📅 dag N | |
| T0591 | pappa | Okej. | — | 📅 dag N | |
| T0592 | pappa | Ny mössa. AIK-färger, fast ja e Djurgårdare. Den var på rea. | — | 📅 dag N | |
| T0593 | pappa | Mamma skicka med lite grejer. | — | 📅 dag N | |
| T0594 | pappa | Ja gör bara som hon säger. Då blir de lugnt hemma. | — | 📅 dag N | |
| T0595 | pappa | Och va du än gör: mal dom inte. Då tror hon att du ätit upp allt. Då gör hon me… | — | 📅 dag N | |
| T0596 | pappa | Fint jobbat. | — | 📅 dag N | |
| T0597 | pappa | Nä. Ja drar nu. | — | 📅 dag N | |
| T0598 | pappa | Mamma hälsar. | — | 📅 dag N | |
| T0599 | pappa | Tjena. | — | 📅 dag N | |
| T0600 | pappa | Mamma har kokat sylt i tre dagar. Hon tror att du äter upp allt. | — | 📅 dag N | |
| T0601 | du | Förlåt, pappa. | — | 📅 dag N | |
| T0602 | pappa | Ja sa ju de. Mal dom inte. Aha, vad lugnt då. För dig. | — | 📅 dag N | |
| T0603 | pappa | Jaha. Här står du. | — | 📅 dag N | |
| T0604 | pappa | Ja har inte sett hockeyn på en vecka. Mamma pratar över den. | — | 📅 dag N | |
| T0605 | pappa | Om grytvantar. | — | 📅 dag N | |
| T0606 | pappa | Tjena. | — | 📅 dag N | |
| T0607 | pappa | Ja sover i garaget nu. De e lugnare där. | — | 📅 dag N | |
| T0608 | du | Är det så illa? | — | 📅 dag N | |
| T0609 | pappa | Jaha. Säger du. Som maler sylt. | — | 📅 dag N | |
| T0610 | pappa | Hej. | — | 📅 dag N | |
| T0611 | pappa | Hon har köpt en egen frys. Till sylten. | — | 📅 dag N | |
| T0612 | pappa | Ja varnade dig. Men vad vet ja. Ja e bara pappa. | — | 📅 dag N | |
| T0613 | pappa | Mamma skicka med lite grejer. Mal inte dom. | — | 📅 dag N | |
| T0614 | pappa | Nä. Ja drar nu. | — | 📅 dag N | |
| T0615 | pappa | Mamma hälsar. Typ. | — | 📅 dag N | |

### Haggan Helen i efterspelet (punkt AN) (57 st)

**I dag:** efterspelet, morgon / gå förbi / ge saker · **styrs av:** händelse + 📅 morgon · **förslag:** `helen:<steg> · gattIn:helen`, fördröjning 0, villkor efterspelet, stryks om —, vikt **STORY**

| id | figur | text | villkor i dag | styrs av | Beslut |
|---|---|---|---|---|---|
| T0616 | helen | Jaha. Där kommer Städdiktatorn. | — | händelse + 📅 morgon | |
| T0617 | helen | God morgon, Kvastgeneralen. | — | händelse + 📅 morgon | |
| T0618 | helen | Jaha. Där kommer Rabattmördaren. | — | händelse + 📅 morgon | |
| T0619 | helen | God morgon, Plastpolisen. | — | händelse + 📅 morgon | |
| T0620 | helen | Jaha. Där kommer Sopsnobben. | — | händelse + 📅 morgon | |
| T0621 | helen | God morgon, Fröken Fin. | — | händelse + 📅 morgon | |
| T0622 | helen | Jaha. Där kommer Moppkungen. | — | händelse + 📅 morgon | |
| T0623 | helen | God morgon, Prydnadsbusken. | — | händelse + 📅 morgon | |
| T0624 | helen | Jaha. Där kommer Sopsorteraren. | — | händelse + 📅 morgon | |
| T0625 | helen | God morgon, Dammsugarsäljaren. | — | händelse + 📅 morgon | |
| T0626 | helen | Jaha. Där kommer Tippförstöraren. | — | händelse + 📅 morgon | |
| T0627 | helen | Nämen. Lilla Kommunen. Har du med dig en blankett? | — | händelse + 📅 morgon | |
| T0628 | helen | Vill du ha en Blend? Gula. De riktiga. | — | händelse + 📅 morgon | |
| T0629 | helen | Klokt. Jag började 1971. Det var inte klokt. | — | händelse + 📅 morgon | |
| T0630 | helen | En slurk? Château Tetra. Årgång i tisdags. | — | händelse + 📅 morgon | |
| T0631 | helen | Saft. Då är du sån. Okej. | — | händelse + 📅 morgon | |
| T0632 | helen | Halv macka? Den har bara legat i fickan sen i morse. | — | händelse + 📅 morgon | |
| T0633 | helen | Mer till mig. | — | händelse + 📅 morgon | |
| T0634 | helen | Vill du köpa en tändare? Den tänder nästan. | — | händelse + 📅 morgon | |
| T0635 | helen | För dig: en kruka. Nej. Den är inte till salu. | — | händelse + 📅 morgon | |
| T0636 | helen | Vill du ha en karamell? Den är bara lite ludden. | — | händelse + 📅 morgon | |
| T0637 | helen | Ficka. | — | händelse + 📅 morgon | |
| T0638 | helen | Ska du ha lite vin i saften? Det blir rosé. | — | händelse + 📅 morgon | |
| T0639 | helen | Din mamma har rätt. Det är en dålig rosé. | — | händelse + 📅 morgon | |
| T0640 | helen | Äntligen nån som förstår sig på lingon. | — | händelse + 📅 morgon | |
| T0641 | helen | Sill. I november. Din mamma är ett geni. | — | händelse + 📅 morgon | |
| T0642 | helen | Lite mögel. Det är bara penicillin. | — | händelse + 📅 morgon | |
| T0643 | helen | Hembakat. Jag har inte ätit hembakat sen 1998. Det var också din mammas. Nej. S… | — | händelse + 📅 morgon | |
| T0644 | helen | Här stod ett piano 1994. Ostämt. Jag spelade på det varje jul. | — | händelse + 📅 morgon | |
| T0645 | helen | Här låg en soffa i elva år. Nu ligger här en RABATT. | — | händelse + 📅 morgon | |
| T0646 | helen | 1987 hittade jag en kristallkrona här. Jag hängde den i ett träd. Den hängde dä… | — | händelse + 📅 morgon | |
| T0647 | helen | Här sov jag sommaren 2003. Bästa sommaren. Myggen var snälla. | — | händelse + 📅 morgon | |
| T0648 | helen | Här låg en kyl. Den var min. Jag hade inte ström, men den var min. | — | händelse + 📅 morgon | |
| T0649 | helen | Där borta stod Rolfs husvagn innan den blev Rolfs husvagn. | — | händelse + 📅 morgon | |
| T0650 | helen | Nä, Bettan. Han ser inte ut som en som delar. | — | händelse + 📅 morgon | |
| T0651 | helen | GÖRAN! DU ÄR EN RÅTTA MED VINGAR! | — | händelse + 📅 morgon | |
| T0652 | helen | Knät säger regn i morgon. | — | händelse + 📅 morgon | |
| T0653 | helen | Nej. Polisen har redan nog. | — | händelse + 📅 morgon | |
| T0654 | helen | Jag minns ingenting. Det var 'Sopbilsblues'. Andra versen. Jag minns ingenting. | — | händelse + 📅 morgon | |
| T0655 | helen | Det är inte min katt. Den bara bor här. Som jag. | — | händelse + 📅 morgon | |
| T0656 | helen | Bettan tycker du är okej. Bettan har dålig smak. | — | händelse + 📅 morgon | |
| T0657 | helen | Den här är från förr. Förr var bättre. Inte mycket, men lite. | — | händelse + 📅 morgon | |
| T0658 | helen | Det där var mitt arkiv. | — | händelse + 📅 morgon | |
| T0659 | helen | Väggar. Fina. För fina. Gör dem lite sneda. | — | händelse + 📅 morgon | |
| T0660 | helen | Det drar lite. Bra. Det ska dra. | — | händelse + 📅 morgon | |
| T0661 | helen | Tack. | — | händelse + 📅 morgon | |
| T0662 | helen | Bettan sov inne i natt. Första gången sen 2009. | — | händelse + 📅 morgon | |
| T0663 | helen | BENGT-ÅKE! JAG SER DIN KIKARE! | — | händelse + 📅 morgon | |
| T0664 | helen | Jag har ingen plats. Det är för fint här nu. | — | händelse + 📅 morgon | |
| T0665 | helen | En om dagen. Jag är inte girig. | — | händelse + 📅 morgon | |
| T0666 | helen | Bettan. Rör inte. | — | händelse + 📅 morgon | |
| T0667 | rolf | Jo jo.. Helen ä tillbaka. Hon va hä före mej. Före alla. Var snäll mot henne. H… | — | händelse + 📅 morgon | |
| T0668 | rolf | Jo jo. Helen ä tillbaka. Hon va hä före mej. Före alla. Var snäll mot henne. Ho… | — | händelse + 📅 morgon | |
| T0669 | rolf | Hörru.. Helen behöver ett ställe. Ja ha ritat nåt. Dä ä som dit första skjul fa… | — | händelse + 📅 morgon | |
| T0670 | rolf | Hörru. Helen behöver ett ställe. Ja ha ritat nåt. Dä ä som dit första skjul fas… | — | händelse + 📅 morgon | |
| T0671 | rolf | ÖJ! Hon dansa som en tvättmaskin.. Hela kvälln. /R | — | händelse + 📅 morgon | |
| T0672 | rolf | ÖJ! Hon dansa som en tvättmaskin. Hela kvälln. /R | — | händelse + 📅 morgon | |

### Ali i butiken (36 st)

**I dag:** butiken öppnas / köp / sälj (aliRepl) · **styrs av:** händelse · **förslag:** `oppnatButik · kopt:<sak> · salt:<sak>`, fördröjning 0, villkor vid Ali, stryks om —, vikt **REAKTION (välkomsten STORY)**

| id | figur | mönster (exempel) | antal | Beslut |
|---|---|---|---|---|
| T0673 | ali | Pappa stod bakom den här disken i trettio år. Jag har stått här i tjugofem. Varje morgon … | 1 | |
| T0674 | ali | Satt med AI:n hela natten igen. Fråga inte vad. Okej, en soffa. Fråga inte. | 1 | |
| T0675 | ali | Pappa sa: driv butiken, Ali. Så jag driver butiken. På nätterna promptar jag. Det är mitt… | 1 | |
| T0676 | ali | Jag ser 3D-skrivarvideor på YouTube i lagret. Inte för att jag har tid. Jag har aldrig ti… | 1 | |
| T0677 | ali | Du är den enda här som vet vad en tolerans är. Det värmer. Lite. Inte mycket. | 1 | |
| T0678 | ali | Kunder, kunder. Ingen ingenjör. Förutom du kanske. | 1 | |
| T0679 | ali | Semesterkassan: 340 kr. Köp nåt, min vän. | 1 | |
| T0680 | ali | Du printar mina ritningar. Ingen har gjort det förut. Jag är inte rörd. Det är dammet. | 1 | |
| T0681 | ali | Jag har stått här sedan sex i morse. Vad vill du? | 1 | |
| T0682 | ali | Ledig? Vad är det? Har aldrig hört talas om det. | 1 | |
| T0683 | ali | Köp nåt eller gå, min vän. Mina fötter värker. | 1 | |
| T0684 | ali | Min fru säger att jag bor här. Hon har rätt. | 1 | |
| T0685 | ali | Salam. Ja, ja, jag har nya grejer. Som vanligt. Varje dag. | 1 | |
| T0686 | ali | Semester? Jag hade semester 2009. Det regnade. | 1 | |
| T0687 | ali | Du igen. Bra. Du är den enda som köper nåt. | 1 | |
| T0688 | ali | Du vet vad? Jag har pratat om att göra något i trettio år. Du bara gör. Det är irriterand… | 1 | |
| T0689 | ali | Jag visade AI:n din skrivare. Den sa: bygg något eget, Ali. Jag sa: jag är femtioåtta. De… | 1 | |
| T0690 | ali | Jag gick upp en timme tidigare idag. Inte för butiken. För mig. Jag ritade en lampa. | 1 | |
| T0691 | ali | Min fru säger att jag pratar annorlunda. Snabbare. Hon är orolig. Jag är inte orolig. Jag… | 1 | |
| T0692 | ali | Pension? Glöm det. Jag har en kanal nu. Fyrtiotvå följare. Fyrtiotvå, habibi! | 1 | |
| T0693 | ali | Jag har sålt min första egna ritning. Till en man i Örebro. Han skrev bra lampa. Jag har … | 1 | |
| T0694 | ali | Förut drev jag butiken. Nu bygger jag något. Det är skillnad. Du lärde mig det. Säg inget… | 1 | |
| T0695 | ali | Jag ska lära ut AI på pensionärsföreningen. Tisdagar. De är rädda. Jag var också rädd. | 1 | |
| T0696 | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. | 1 | |
| T0697 | ali | STÄNGT. Jag har jobbat i femton timmar. Gå hem och sov! | 1 | |
| T0698 | ali | Klockan är nio. Jag är inte här. Kom tillbaka i morgon. | 1 | |
| T0699 | ali | Nej. Nej nej nej. Stängt. Godnatt. | 1 | |
| T0700 | ali | Ali här. Jag har inte sovit på tre dygn. 🧲 MAGNETPISTOL. Den drog åt sig min nyckelknippa… | 1 | |
| T0701 | ali | Ali här. 🔥 TURBOMOTOR. Jag skrev ”turbo, röda ränder, snabbare än min pappa” till AI:n. D… | 1 | |
| T0702 | ali | Ali här. 🚀 Jetmotor. Med efterbrännare. Till en KVARN. Jag vet inte varför. Jag kunde int… | 1 | |
| T0703 | ali | Ali här. 🗑️ Skräpcontainer med matarband. Jag frågade AI:n hur man slipper bära skräp. De… | 1 | |
| T0704 | ali | Ali här. Rulle med 40 sopsäckar. Jag använder dem som regnställ. | 1 | |
| T0705 | ali | Ali här. Större ryggsäck. Min son hade den i lumpen. Han kom hem med fler grejer än han å… | 1 | |
| T0706 | ali | Ali här. Skrivare M har kommit. Två och en halv gånger snabbare. Snabbare än jag. Jag har… | 1 | |
| T0707 | ali | Ali här. Skrivare L. En meter byggvolym. Jag bad AI:n om något stort. Den gjorde något EN… | 1 | |
| T0708 | ali | Ali här. ☀️ Solpaneler inne. Gratis ström från solen. Solen jobbar också hela dagen och k… | 1 | |

### Lappar, brev och dagbok (34 st)

**I dag:** när ett mål klaras (st.lapp) eller en milstolpe nås · **styrs av:** 📋 steg · **förslag:** `malKlart:<id>`, fördröjning 0,8 s, villkor —, stryks om —, vikt **STORY**

| id | figur | text | villkor i dag | styrs av | Beslut |
|---|---|---|---|---|---|
| T0709 | rolf | ÖJ.. Ja va int mä mej själv på konditoriet. Förlåt att ja prata så mycke. Bakom… | — | 📋 steg | |
| T0710 | rolf | ÖJ. Ja va int mä mej själv på konditoriet. Förlåt att ja prata så mycke. Bakom … | — | 📋 steg | |
| T0711 | rolf | Hon hade gillat dä. Ja plantreade rosorna i natt. Kajsa höll ficklampan. Hon ä … | — | 📋 steg | |
| T0712 | rolf | Hon hade gillat dä. Ja planterade rosorna i natt. Kajsa höll ficklampan. Hon ä … | — | 📋 steg | |
| T0713 | berattare | Undertecknad önskar beställa en fågelholk. Fåglarna i trakten har ingenstans at… | — | 📋 steg | |
| T0714 | berattare | Tack för holken. Den är bebodd. Undertecknad önskar nu en lampskärm, helst i en… | — | 📋 steg | |
| T0715 | berattare | Undertecknad önskar en vas. Röd. Till en blomma som undertecknad tänker köpa si… | — | 📋 steg | |
| T0716 | berattare | Undertecknad har sett era maskiner genom kikaren. Det är imponerande. Underteck… | — | 📋 steg | |
| T0717 | berattare | Undertecknad önskar en kaffekopp med namnet BENGT-ÅKE. Diskret paketerad. Med v… | — | 📋 steg | |
| T0718 | berattare | Undertecknad önskar ingenting. Undertecknad ville bara skriva. B-Å N. | — | 📋 steg | |
| T0719 | berattare | HMPF. … Ja. Det var jag. N. som i Nabon. … Undertecknad ville bara skriva till … | — | 📋 steg | |
| T0720 | berattare | HMPF. … Ja. Det var jag. N. som i Nabon. … Ingen har gjort nåt åt mig sen nitto… | — | 📋 steg | |
| T0721 | du | Spikade ihop en skylt av lösa bräder från tippen och målade på den. Soptippsväg… | — | 📋 steg | |
| T0722 | du | Dag 1. Inget mer tjat. Här står jag, vid soptippen, med storebrors gamla 3D-skr… | — | 📋 steg | |
| T0723 | du | Första natten i en riktig säng. Jag printade den själv. | — | 📋 steg | |
| T0724 | berattare | Kära du! Grattis till nya huset!! Pappa och jag åkte förbi i söndags. Oj vad ST… | — | 📋 steg | |
| T0725 | mamma | Grattis till nya huset. Oj vad städat och fint det är. Imponerad. Pappa också, … | — | 📋 steg | |
| T0726 | du | Dag 14. Mammas paket kom tillbaka: "Okänd mottagare". Jag bor ju här. Det här ä… | — | 📋 steg | |
| T0727 | du | Fabriken har kommit igång. Nu vill jag sova i en riktig säng i skjulet i ställe… | — | 📋 steg | |
| T0728 | du | Sopbilen tippade en ny last. All den plasten – och grinden är låst. | — | 📋 steg | |
| T0729 | rolf | ÖJ! Ä dä du som printar grejer?? Ja önskar mej en ölhållare mä kylklamp.. Lägg … | — | 📋 steg | |
| T0730 | rolf | ÖJ! Ä dä du som printar grejer?? Ja önskar mej en ölhållare mä kylklamp. Lägg d… | — | 📋 steg | |
| T0731 | rolf | Jo jo.. TACK för hållarn!! Ölen ä iskall. Nyckeln ä din. La mä en gammal lur ox… | — | 📋 steg | |
| T0732 | rolf | Jo jo. TACK för hållarn!! Ölen ä iskall. Nyckeln ä din. La mä en gammal lur oxå… | — | 📋 steg | |
| T0733 | du | Kvarnen funkar. Soptippen är en gruva. | — | 📋 steg | |
| T0734 | du | Grip OCH motor. Nu går det undan. | — | 📋 steg | |
| T0735 | bror | VA?! SERIÖST?! Fick du den att FUNKA?? Jag gav upp efter två veckor, det var al… | — | 📋 steg | |
| T0736 | ali | Ali här. Nyckelringen sålde. Jag ville bli ingenjör, men fick ta över pappas bu… | — | 📋 steg | |
| T0737 | du | Min första 3D-modell! Nu ska den bara printas. Jag printar inte bara saker – ja… | — | 📋 steg | |
| T0738 | du | Slut på trampandet. Nästan. | — | 📋 steg | |
| T0739 | du | Tunnorna och kajakerna är för tunga för min lilla kvarn. Men Ali har en röd kva… | — | 📋 steg | |
| T0740 | bror | VA?! Du har byggt en skrivare TILL?? Du har typ en printfarm nu. Okej. Det är f… | — | 📋 steg | |
| T0741 | du | Det börjar kännas som ett hem. På riktigt. Mamma kommer på söndag… | — | 📋 steg | |
| T0742 | du | Gården är STÄDAD. Av mig. Frivilligt. Mamma skulle aldrig tro det. | — | 📋 steg | |

### Dina tankar, tips och varningar (31 st)

**I dag:** fel handling (varna) eller fast på ett mål (PUFFAR efter N s) · **styrs av:** ⏱ tid / handling · **förslag:** `fel:<typ> · fast:<målId>`, fördröjning 0 / 2 min, villkor ingen meny öppen, stryks om målet klart / felet åtgärdat, vikt **REAKTION**

| id | figur | text | villkor i dag | styrs av | Beslut |
|---|---|---|---|---|---|
| T0743 | du | Okej. Först en skylt vid vägen, så att alla vet vem som bor här. | — | ⏱ tid / handling | |
| T0744 | du | Klart! Nu lägger jag den i Rolfs brevlåda vid grinden. | — | ⏱ tid / handling | |
| T0745 | du | Flaggan är uppe på postlådan vid tippens grind. Där har Rolf lagt något till mi… | — | ⏱ tid / handling | |
| T0746 | du | Rolf har lagt något i brevlådan. Jag går och hämtar det. | — | ⏱ tid / handling | |
| T0747 | du | Jag har pengar nu. Hos Ali kan jag köpa uppgraderingar – bära mer eller printa … | — | ⏱ tid / handling | |
| T0748 | du | En skottkärra! Jag väljer den med hjulet och kör fram till en tunna. | — | ⏱ tid / handling | |
| T0749 | du | Klicka på en sak för att köpa den. Bocka i det du vill sälja och klicka Sälj ma… | — | ⏱ tid / handling | |
| T0750 | du | Välj vad du vill printa och klicka på det. | — | ⏱ tid / handling | |
| T0751 | du | Klicka på en sak för att lyfta den och klicka där den ska ligga. Högerklick tar… | — | ⏱ tid / handling | |
| T0752 | du | Shift-klick flyttar en hel hög mellan kistan och ryggsäcken. | — | ⏱ tid / handling | |
| T0753 | du | 3D-modellen till sängen kostar 60 spänn hos Ali. Okej – dags att starta printfa… | — | ⏱ tid / handling | |
| T0754 | du | Ryggsäcken. Tryck E så öppnar jag den. | — | ⏱ tid / handling | |
| T0755 | du | Tryck R för att vrida. | — | ⏱ tid / handling | |
| T0756 | du | Fullt i händerna. | — | ⏱ tid / handling | |
| T0757 | du | För tung för kvarnen. Än. | — | ⏱ tid / handling | |
| T0758 | du | Du har en hand ledig. Den andra håller i allt du äger. | — | ⏱ tid / handling | |
| T0759 | du | Kärran är full. | — | ⏱ tid / handling | |
| T0760 | du | Tratten är full. Veva först. | — | ⏱ tid / handling | |
| T0761 | du | Rullen är full. Ta den först. | — | ⏱ tid / handling | |
| T0762 | du | Tunga saker får inte plats här. De ska till den röda PETG-kvarnen. | — | ⏱ tid / handling | |
| T0763 | du | Skrivaren är full. Printa något först. | — | ⏱ tid / handling | |
| T0764 | du | Jag orkar bara bära en rulle. Ladda skrivaren först. | — | ⏱ tid / handling | |
| T0765 | du | Allt är fullt. Dags att printa och sälja! | — | ⏱ tid / handling | |
| T0766 | ali | Hallå! Du där borta med skrivaren! Kom över vägen, jag köper sånt där! | — | ⏱ tid / handling | |
| T0767 | ali | Du får bonus! Första kunden som printar själv på 25 år. 40 kr extra. | — | ⏱ tid / handling | |
| T0768 | ali | Du får bonus! 10 kr extra. Du ser hungrig ut. | — | ⏱ tid / handling | |
| T0769 | ali | Du får bonus! 15 kr extra. Pappa hade gillat dig. | — | ⏱ tid / handling | |
| T0770 | ali | Du får bonus! 20 kr extra. Säg inget till min fru. | — | ⏱ tid / handling | |
| T0771 | ali | Du får bonus! 25 kr extra. Kvalitet. Nästan. | — | ⏱ tid / handling | |
| T0772 | du | Hmm… flaggan är uppe på Rolfs brevlåda vid grinden. Har det kommit ett brev? | — | ⏱ tid / handling | |
| T0773 | du | Rullhållaren vid kvarnen är full. Jag borde ta rullarna innan kvarnen stannar. | — | ⏱ tid / handling | |

### Rolfs skumma jobb: brev och tack (30 st)

**I dag:** morgonkortet stängs dag ≥ 7, varannan dag · **styrs av:** 📅 dag ≥ 7 · **förslag:** `morgonkortStangt (dag ≥ 7, varannan dag)`, fördröjning 3,5 s, villkor inget annat Rolf-ärende, stryks om —, vikt **STORY**

| id | figur | text | villkor i dag | styrs av | Beslut |
|---|---|---|---|---|---|
| T0774 | rolf | Chefen (oxå Rolf) har en espressomaskin på kontoret. Vi andra får automatkaffe … | — | 📅 dag ≥ 7 | |
| T0775 | rolf | Chefen (oxå Rolf) har en espressomaskin på kontoret. Vi andra får automatkaffe … | — | 📅 dag ≥ 7 | |
| T0776 | rolf | Tjo.. ESPRESSO. Ja grät lite. Pengarna ligger i lådan. Du har aldrig sett mej. … | — | 📅 dag ≥ 7 | |
| T0777 | rolf | Tjo. ESPRESSO. Ja grät lite. Pengarna ligger i lådan. Du har aldrig sett mej. /R | — | 📅 dag ≥ 7 | |
| T0778 | rolf | Nej?? …Okej.. Du har rätt. Däckkaffe en dag till. Hä ä en slant för ärligheten.… | — | 📅 dag ≥ 7 | |
| T0779 | rolf | Nej?? …Okej. Du har rätt. Däckkaffe en dag till. Hä ä en slant för ärligheten. … | — | 📅 dag ≥ 7 | |
| T0780 | rolf | Gäddorna nappar i morgon.. Om dä sitter en skylt på grinden – TIPPEN STÄNGD PGA… | — | 📅 dag ≥ 7 | |
| T0781 | rolf | Gäddorna nappar i morgon. Om dä sitter en skylt på grinden – TIPPEN STÄNGD PGA … | — | 📅 dag ≥ 7 | |
| T0782 | rolf | Fyra gäddor! Kajsa åt en hel. Skylten sitter. Pengarna ligger i lådan. MVH ROLF | — | 📅 dag ≥ 7 | |
| T0783 | rolf | Fyra gäddor! Kajsa åt en hel. Skylten sitter. Pengarna ligger i lådan. /R | — | 📅 dag ≥ 7 | |
| T0784 | rolf | Ja jobbar då. Gäddorna får vänta. Du ä för snäll för den hä världen. Ta en slan… | — | 📅 dag ≥ 7 | |
| T0785 | rolf | Ja jobbar då. Gäddorna får vänta. Du ä för snäll för den hä världen. Ta en slan… | — | 📅 dag ≥ 7 | |
| T0786 | rolf | Hörru. Chefen har en burk mä finkakor. Han RÄKNAR dôm. Ja behöver ett termosloc… | — | 📅 dag ≥ 7 | |
| T0787 | rolf | Hörru. Chefen har en burk mä finkakor. Han RÄKNAR dôm. Ja behöver ett termosloc… | — | 📅 dag ≥ 7 | |
| T0788 | rolf | Tjo. Lönnfacket funkar. Kakorna har mandel. Livet ä gott. Pengar i lådan. /R | — | 📅 dag ≥ 7 | |
| T0789 | rolf | Tjo. Lönnfacket funkar. Kakorna har mandel. Livet ä gott. Pengar i lådan. /R | — | 📅 dag ≥ 7 | |
| T0790 | rolf | Tjo.. Okej, okej. Ja köper egna kakor. Dôm ä sämre. Du ä en bra människa. Hä. M… | — | 📅 dag ≥ 7 | |
| T0791 | rolf | Tjo. Okej, okej. Ja köper egna kakor. Dôm ä sämre. Du ä en bra människa. Hä. /R | — | 📅 dag ≥ 7 | |
| T0792 | rolf | Chefens stämpel: GODKÄNT.. Mä en kopia kan ja godkänna min egen övertid. 31 år … | — | 📅 dag ≥ 7 | |
| T0793 | rolf | Chefens stämpel: GODKÄNT. Mä en kopia kan ja godkänna min egen övertid. 31 år u… | — | 📅 dag ≥ 7 | |
| T0794 | rolf | Nämen. GODKÄNT. GODKÄNT. GODKÄNT. Ja stäpmlade en servett oxå. Pengar i lådan. … | — | 📅 dag ≥ 7 | |
| T0795 | rolf | Nämen. GODKÄNT. GODKÄNT. GODKÄNT. Ja stämplade en servett oxå. Pengar i lådan. … | — | 📅 dag ≥ 7 | |
| T0796 | rolf | Nämen. Du har rätt. Ja ska prata mä facket istället. Har vi ett fack? Ja kollar… | — | 📅 dag ≥ 7 | |
| T0797 | rolf | Nämen. Du har rätt. Ja ska prata mä facket istället. Har vi ett fack? Ja kollar… | — | 📅 dag ≥ 7 | |
| T0798 | rolf | Husvagnen står på tippens mark.. Utan tillstånd. Sen 2009. Kommunen har börjat … | — | 📅 dag ≥ 7 | |
| T0799 | rolf | Husvagnen står på tippens mark. Utan tillstånd. Sen 2009. Kommunen har börjat f… | — | 📅 dag ≥ 7 | |
| T0800 | rolf | Tillståndet sitter i rutan. Kommunen gick därifrån. Kajsa o ja bor kvar. Tack. … | — | 📅 dag ≥ 7 | |
| T0801 | rolf | Tillståndet sitter i rutan. Kommunen gick därifrån. Kajsa o ja bor kvar. Tack. … | — | 📅 dag ≥ 7 | |
| T0802 | rolf | Ja rnigde kommunen själv. Dôm va snälla. Ja får söka på riktigt. Ingen hade frå… | — | 📅 dag ≥ 7 | |
| T0803 | rolf | Ja ringde kommunen själv. Dôm va snälla. Ja får söka på riktigt. Ingen hade frå… | — | 📅 dag ≥ 7 | |

### Rolfs tack för presenter, jobblappar och fynd (26 st)

**I dag:** morgonen efter att en present lagts i lådan · **styrs av:** 📅 morgon · **förslag:** `vaknat efter lagtIPostlada:<sak>`, fördröjning 0, villkor —, stryks om —, vikt **STORY**

| id | figur | text | villkor i dag | styrs av | Beslut |
|---|---|---|---|---|---|
| T0804 | rolf | Ett sexpack. Till MEJ. Ingen har gett mej nåt sen 2009. Ja la en TV i lådan. Fr… | — | 📅 morgon | |
| T0805 | rolf | Ett sexpack. Till MEJ. Ingen har gett mej nåt sen 2009. Ja la en TV i lådan. Fr… | — | 📅 morgon | |
| T0806 | rolf | Kôrv! Ja grillade, Kajsa åt tre.. Hä – min gamla affisch från Rolfs Rockers 198… | — | 📅 morgon | |
| T0807 | rolf | Kôrv! Ja grillade, Kajsa åt tre. Hä – min gamla affisch från Rolfs Rockers 1987… | — | 📅 morgon | |
| T0808 | rolf | Nämen.. Kajsa spinner som en motor. Ja la Birgittas gardiner i lådan. Hon stick… | — | 📅 morgon | |
| T0809 | rolf | Nämen. Kajsa spinner som en motor. Ja la Birgittas gardiner i lådan. Hon sticka… | — | 📅 morgon | |
| T0810 | rolf | Tjo. Ett riktigt fiskespö. Ja … ja vet int va ja ska säja. Ta min guldklocka. F… | — | 📅 morgon | |
| T0811 | rolf | Tjo. Ett riktigt fiskespö. Ja … ja vet int va ja ska säja. Ta min guldklocka. F… | — | 📅 morgon | |
| T0812 | rolf | Nämen. Ja spelade i två timmar i går. Grannen ringde polisen. VÄRT DÄ. Hä, fåtö… | — | 📅 morgon | |
| T0813 | rolf | Nämen. Ja spelade i två timmar i går. Grannen ringde polisen. VÄRT DÄ. Hä, fåtö… | — | 📅 morgon | |
| T0814 | rolf | Tjo. Ja dansade. Mä en tant som heter Gun. Ja ä skyldig dej för resten av livet… | — | 📅 morgon | |
| T0815 | rolf | Tjo. Ja dansade. Mä en tant som heter Gun. Ja ä skyldig dej för resten av livet… | — | 📅 morgon | |
| T0816 | rolf | KANARIEÖARNA?! Ja har alrdig varit utomlands. Ja grät på flygplatsen. Ta jukebo… | — | 📅 morgon | |
| T0817 | rolf | KANARIEÖARNA?! Ja har aldrig varit utomlands. Ja grät på flygplatsen. Ta jukebo… | — | 📅 morgon | |
| T0818 | rolf | Rolf hä.. Ja har en grej. Lite känslig. Ja la en lapp i postlådan. Läs den o br… | — | 📅 morgon | |
| T0819 | rolf | Rolf hä. Ja har en grej. Lite känslig. Ja la en lapp i postlådan. Läs den o brä… | — | 📅 morgon | |
| T0820 | rolf | ÖJ! Ny lapp i lådan. Du vet va dä betyder. /R | — | 📅 morgon | |
| T0821 | rolf | ÖJ! Ny lapp i lådan. Du vet va dä betyder. /R | — | 📅 morgon | |
| T0822 | rolf | Tjo. Fôlk prtaar gott om dej. Ja hitta tre röda backar av riktigt bra plast på … | — | 📅 morgon | |
| T0823 | rolf | Tjo. Fôlk pratar gott om dej. Ja hitta tre röda backar av riktigt bra plast på … | — | 📅 morgon | |
| T0824 | rolf | Fôlk pratra gott om dej. Ja hitta tre fynd nivå 3: kolfiberrester på tippen. Så… | — | 📅 morgon | |
| T0825 | rolf | Fôlk pratar gott om dej. Ja hitta tre fynd nivå 3: kolfiberrester på tippen. Så… | — | 📅 morgon | |
| T0826 | rolf | Fôlk pratar gott om dej. Ja hitta tre fynd nivå 4: guldglittrig dunk på tippen.… | — | 📅 morgon | |
| T0827 | rolf | Fôlk pratar gott om dej. Ja hitta tre fynd nivå 4: guldglittrig dunk på tippen.… | — | 📅 morgon | |
| T0828 | rolf | Nämen. Fôlk pratar gott om dej. Ja hitta tre fynd nivå 5: titanspån på tippen. … | — | 📅 morgon | |
| T0829 | rolf | Nämen. Fôlk pratar gott om dej. Ja hitta tre fynd nivå 5: titanspån på tippen. … | — | 📅 morgon | |

### Rolfs sms om marken och säljlådan (24 st)

**I dag:** köp av mark / saker · **styrs av:** händelse · **förslag:** `kopt:mark:<id> · placerat:saljlada`, fördröjning 3 s, villkor —, stryks om —, vikt **STORY**

| id | figur | text | villkor i dag | styrs av | Beslut |
|---|---|---|---|---|---|
| T0830 | rolf | ÖJ! Bengt-Åke sa ja! Han ville först ha 12 000 men ja sa att du städat hela han… | — | händelse | |
| T0831 | rolf | ÖJ! Bengt-Åke sa ja! Han ville först ha 12 000 men ja sa att du städat hela han… | — | händelse | |
| T0832 | rolf | Nämen. Ängen ä din. Bengt-Åke frågaed va du ska ha den till. Ja sa solpaneler. … | — | händelse | |
| T0833 | rolf | Nämen. Ängen ä din. Bengt-Åke frågade va du ska ha den till. Ja sa solpaneler. … | — | händelse | |
| T0834 | rolf | Tjo.. Marken runt tippen ä din. Bengt-Åke sa att han ä glad att bli av mä den. … | — | händelse | |
| T0835 | rolf | Tjo. Marken runt tippen ä din. Bengt-Åke sa att han ä glad att bli av mä den. H… | — | händelse | |
| T0836 | rolf | Tjo. Du äger tippen nu. Ja kör fortfarnade sopbilen. Men nu ä du chefen. Dä kän… | — | händelse | |
| T0837 | rolf | Tjo. Du äger tippen nu. Ja kör fortfarande sopbilen. Men nu ä du chefen. Dä kän… | — | händelse | |
| T0838 | rolf | Nämen.. Du har byggt ett HUS. Mä trappa. Ja har aldrig gått i en trappa i ett h… | — | händelse | |
| T0839 | rolf | Nämen. Du har byggt ett HUS. Mä trappa. Ja har aldrig gått i en trappa i ett hu… | — | händelse | |
| T0840 | rolf | Ja vet int va ja ska säja. Ja har bott i husvagnen sen 2009. Nu har ja en VERAN… | — | händelse | |
| T0841 | rolf | Ja vet int va ja ska säja. Ja har bott i husvagnen sen 2009. Nu har ja en VERAN… | — | händelse | |
| T0842 | rolf | ÖJ! Backen ä din.. Bengt-Åke sa att dä finns en gammal Volvo begravd dä nånstan… | — | händelse | |
| T0843 | rolf | ÖJ! Backen ä din. Bengt-Åke sa att dä finns en gammal Volvo begravd dä nånstans… | — | händelse | |
| T0844 | rolf | Jo jo. Ja la nåt i lådan. /R | — | händelse | |
| T0845 | rolf | Jo jo. Ja la nåt i lådan. /R | — | händelse | |
| T0846 | rolf | Tjo. Kolla lådan. /R | — | händelse | |
| T0847 | rolf | Tjo. Kolla lådan. /R | — | händelse | |
| T0848 | rolf | Jo jo. Lådan. Nu. Innan Kajsa hittar dä. /R | — | händelse | |
| T0849 | rolf | Jo jo. Lådan. Nu. Innan Kajsa hittar dä. /R | — | händelse | |
| T0850 | rolf | Dä ligger nåt i postlådan.. Ja säjer int va. Jo. Pengar. /R | — | händelse | |
| T0851 | rolf | Dä ligger nåt i postlådan. Ja säjer int va. Jo. Pengar. /R | — | händelse | |
| T0852 | rolf | Jo jo.. Lådan! Ja va dä mä bilen nyss. MVH ROLF | — | händelse | |
| T0853 | rolf | Jo jo. Lådan! Ja va dä mä bilen nyss. /R | — | händelse | |

### Repliker ute i världen och när Ali säger nej (24 st)

**I dag:** klick på en figur / Ali stängt · **styrs av:** händelse · **förslag:** `klickat:<figur>`, fördröjning 0, villkor nära figuren, stryks om —, vikt **REAKTION**

| id | figur | text | villkor i dag | styrs av | Beslut |
|---|---|---|---|---|---|
| T0854 | ali | Hej granne! | — | händelse | |
| T0855 | ali | Sålt nåt idag? Jag köper. | — | händelse | |
| T0856 | ali | Kom in, kom in. Eller inte. Jag står här ändå. | — | händelse | |
| T0857 | ali | Har du printat nåt nytt? Visa! | — | händelse | |
| T0858 | ali | Tjugofem år bakom disken. Du är det roligaste som hänt. | — | händelse | |
| T0859 | ali | Akta bilarna. Det kommer en i timmen. | — | händelse | |
| T0860 | ali | Snart stänger jag. Nio. Inte en minut senare. | — | händelse | |
| T0861 | rolf | Såg att du har DÖRR nu. Grann. Kajsa ä sur, hon brukade sova i ditt skjul. /R | — | händelse | |
| T0862 | rolf | Såg att du har DÖRR nu. Grann. Kajsa ä sur, hon brukade sova i ditt skjul. /R | — | händelse | |
| T0863 | rolf | Nämen. Plåttak! Nu rgenar dä int in. Ja har bott i husvagn sen 2009, ja vet va … | — | händelse | |
| T0864 | rolf | Nämen. Plåttak! Nu regnar dä int in. Ja har bott i husvagn sen 2009, ja vet va … | — | händelse | |
| T0865 | ali | Nyckelringar igen? Folk tappar sina nycklar hela tiden. Bra affär för oss. | — | händelse | |
| T0866 | ali | Dina krukor säljer. Tanterna i kvarteret älskar dem. | — | händelse | |
| T0867 | ali | Pallarna! En kund satt på en hela förmiddagen. Han köpte inget. Men han satt br… | — | händelse | |
| T0868 | ali | Mobilställen tar slut direkt. Ungdomar. De vet inte var de ska lägga telefonen … | — | händelse | |
| T0869 | ali | Fågelholkarna! En talgoxe flyttade in innan jag ens hann sälja den. | — | händelse | |
| T0870 | ali | Lampskärmarna gör butiken mysig. Jag behöll en. Säg inget. | — | händelse | |
| T0871 | ali | Mammas sylt? Sånt köper jag inte. Ät upp den. | — | händelse | |
| T0872 | ali | Den där har mögel. Ut ur min butik med den. | — | händelse | |
| T0873 | ali | Det där fick du av Rolf. Sånt säljer man inte. Har du inget hjärta? | — | händelse | |
| T0874 | ali | Det där är sällsynt. Behåll det. Jag har inte råd ändå. | — | händelse | |
| T0875 | ali | Rolfs trumstockar? Aldrig. Han skulle gråta. | — | händelse | |
| T0876 | ali | Rullar köper jag inte än. Printa nåt av den i stället. | — | händelse | |
| T0877 | ali | Den där är till Rolf. Lägg den i hans brevlåda vid grinden. | — | händelse | |

### Rolfs sms ibland (20 st)

**I dag:** sms-poolen, udda dagar efter Rolfs nummer · **styrs av:** ⏱ tid · **förslag:** `stillaStaende eller dagKlar (lugn stund)`, fördröjning 0, villkor ingen meny öppen, stryks om —, vikt **REAKTION (småprat)**

| id | figur | text | villkor i dag | styrs av | Beslut |
|---|---|---|---|---|---|
| T0878 | rolf | Rolf hä. Kajsa (katten) fångade en råtta i husvagnen. Hon ä bättre på sitt jobb… | — | ⏱ tid | |
| T0879 | rolf | Rolf hä. Kajsa (katten) fångade en råtta i husvagnen. Hon ä bättre på sitt jobb… | — | ⏱ tid | |
| T0880 | rolf | Hittade ett trumset i lasset idag.. Spela lite på rasten. Rolfs Rockers 1987. V… | — | ⏱ tid | |
| T0881 | rolf | Hittade ett trumset i lasset idag. Spela lite på rasten. Rolfs Rockers 1987. Vi… | — | ⏱ tid | |
| T0882 | rolf | 31 år i sopbilen idag.. Ingen tårta. Köpte en själv. Den va god. /R | — | ⏱ tid | |
| T0883 | rolf | 31 år i sopbilen idag. Ingen tårta. Köpte en själv. Den va god. /R | — | ⏱ tid | |
| T0884 | rolf | Jo jo. Drömde om Birgitta i natt. Hon skällde på mej för att ja int klippt gräs… | — | ⏱ tid | |
| T0885 | rolf | Jo jo. Drömde om Birgitta i natt. Hon skällde på mej för att ja int klippt gräs… | — | ⏱ tid | |
| T0886 | rolf | ÖJ! Ja har en låda mä skattre i husvagnen. Mest skruvar. En tand. Int min. /R *… | — | ⏱ tid | |
| T0887 | rolf | ÖJ! Ja har en låda mä skatter i husvagnen. Mest skruvar. En tand. Int min. /R | — | ⏱ tid | |
| T0888 | rolf | ÖJ. Rolf hä. Hittade en hel soffa i lasset idag. Ingen plast i den tyvärr. Satt… | — | ⏱ tid | |
| T0889 | rolf | ÖJ. Rolf hä. Hittade en hel soffa i lasset idag. Ingen plast i den tyvärr. Satt… | — | ⏱ tid | |
| T0890 | rolf | Tippar extra plast i eftermiddag. Säg int till chefen. Han heter oxå Rolf. Förv… | — | ⏱ tid | |
| T0891 | rolf | Tippar extra plast i eftermiddag. Säg int till chefen. Han heter oxå Rolf. Förv… | — | ⏱ tid | |
| T0892 | rolf | Hörru.. Ölhållarn funkar fortfarande. Den ä min bästa vän. Ni ä delad etta. /R | — | ⏱ tid | |
| T0893 | rolf | Hörru. Ölhållarn funkar fortfarande. Den ä min bästa vän. Ni ä delad etta. /R | — | ⏱ tid | |
| T0894 | rolf | Såg din skorsten ryka.. Eller va dä grillen? Hoppas dä va grillen. /R | — | ⏱ tid | |
| T0895 | rolf | Såg din skorsten ryka. Eller va dä grillen? Hoppas dä va grillen. /R | — | ⏱ tid | |
| T0896 | rolf | ÖJ! Fick en kajak i lasset.. Ingen paddel. Typiskt. Ja la den vid grinden åt de… | — | ⏱ tid | |
| T0897 | rolf | ÖJ! Fick en kajak i lasset. Ingen paddel. Typiskt. Ja la den vid grinden åt dej… | — | ⏱ tid | |

### Introt (20 st)

**I dag:** introkortet visas · **styrs av:** — · **förslag:** `introKort:<n> (rösten styr, punkt BC)`, fördröjning 0, villkor —, stryks om —, vikt **STORY**

| id | figur | text | villkor i dag | styrs av | Beslut |
|---|---|---|---|---|---|
| T0898 | berattare | Ditt rum. Ungefär som vanligt. | — | — | |
| T0899 | mamma | Städa ditt rum! | — | — | |
| T0900 | mamma | Har du städat? Jag sa ju STÄDA! | — | — | |
| T0901 | mamma | Det LUKTAR härifrån! Jag säger det inte igen! | — | — | |
| T0902 | berattare | Hon sa det igen. Och igen. Och igen. | — | — | |
| T0903 | mamma | Det ser ut som en SOPTIPP här inne! | — | — | |
| T0904 | mamma | Vet du vad? Du kan lika gärna BO på en soptipp! | — | — | |
| T0905 | du | Okej då. Då gör jag det. | — | — | |
| T0906 | berattare | Du packar det viktigaste: en ryggsäck och storebrors gamla 3D-skrivare. Den är … | — | — | |
| T0907 | berattare | Du cyklar. Förbi skolan. Förbi affären. Förbi där husen tar slut. | — | — | |
| T0908 | berattare | I utkanten av stan ligger soptippen. Bredvid den: ett gammalt, tomt skjul och e… | — | — | |
| T0909 | berattare | Cykeln har tagit dig hit. Nu får den jobba. Trampar du på cykeln, får skrivaren… | — | — | |
| T0910 | berattare | Runt omkring: skräp. | — | — | |
| T0911 | berattare | Och skräp är plast. | — | — | |
| T0912 | berattare | Med en kvarn kan plast bli filament. | — | — | |
| T0913 | berattare | Och med filament kan man printa… allt. | — | — | |
| T0914 | berattare | Tänk om man kunde bygga det här till ett riktigt hem? | — | — | |
| T0915 | berattare | Täta väggar. En riktig dörr. Plåttak. | — | — | |
| T0916 | berattare | Och en gamingsetup. | — | — | |
| T0917 | berattare | En lugn fristad. Utan mammas tjat. | — | — | |

### Berättaren läser målen (18 st)

**I dag:** när målet blir aktivt (STEG_TAL, via bud-kön) · **styrs av:** 📋 steg · **förslag:** `malBorjar:<id>`, fördröjning 1 s, villkor ingen meny öppen, stryks om målet redan klart, vikt **MÅL**

| id | figur | text | villkor i dag | styrs av | Beslut |
|---|---|---|---|---|---|
| T0918 | berattare | Klicka på cykeln och lasta av storebrors skrivare. | — | 📋 steg | |
| T0919 | berattare | Ställ skrivaren på den lysande platsen i linje ett. | — | 📋 steg | |
| T0920 | berattare | Klicka på cykeln igen och gör om den så att den ger ström. | — | 📋 steg | |
| T0921 | berattare | Trampa cykeln för ström och printa en nyckelring på skrivaren. | — | 📋 steg | |
| T0922 | berattare | Gå över vägen till Ali och sälj nyckelringen. Eller printa två till först – fil… | — | 📋 steg | |
| T0923 | berattare | Köp kvarnen hos Ali. Och cykelbatteriet, om pengarna räcker. | — | 📋 steg | |
| T0924 | berattare | Ställ kvarnen på den lysande rutan i linje ett. | — | 📋 steg | |
| T0925 | berattare | Plocka en flaska, lägg den i kvarnen och veva. Då blir det en hel rulle. | — | 📋 steg | |
| T0926 | berattare | Köp en skräpgrip hos Ali. Den kostar femtio kronor. | — | 📋 steg | |
| T0927 | berattare | Printa skräpgripen på skrivaren. | — | 📋 steg | |
| T0928 | berattare | Köp sopsäcken hos Ali och printa den. Då bär du sex saker. | — | 📋 steg | |
| T0929 | berattare | Ali har ett recept åt dig. Printa en blomkruka. | — | 📋 steg | |
| T0930 | berattare | Bygg ryggkorgen. Då bär du tio saker. | — | 📋 steg | |
| T0931 | berattare | Köp receptet till pallen hos Ali och printa en. | — | 📋 steg | |
| T0932 | berattare | Köp kvarnmotorn hos Ali. | — | 📋 steg | |
| T0933 | berattare | Köp 3D-modellen till en säng hos Ali. | — | 📋 steg | |
| T0934 | berattare | Printa sängen på skrivaren. | — | 📋 steg | |
| T0935 | berattare | Ställ sängen i skjulet och sov. | — | 📋 steg | |

### Rolfs brev och tack i postlådan (kapitel 1) (16 st)

**I dag:** brevet: målet blir aktivt (startPost) · tacket: morgonen efter (rolfMorgonTack) · **styrs av:** 📋 steg · **förslag:** `brev: malKlart:<förra> → lapp i postlådan · tack: vaknat efter lagtIPostlada:<sak>`, fördröjning 0, villkor vid postlådan, stryks om —, vikt **STORY**

| id | figur | text | villkor i dag | styrs av | Beslut |
|---|---|---|---|---|---|
| T0936 | rolf | ÖJ! Ja såg att du börja städa gården. Respekt. Ingen städar hä. Ä dä du som pri… | — | 📋 steg | |
| T0937 | rolf | ÖJ! Ja såg att du börja städa gården. Respekt. Ingen städar hä. Ä dä du som pri… | — | 📋 steg | |
| T0938 | rolf | TACK för hållarn!! Ölen ä iskall.. Lite pengar i lådan. En sak. Mina fingrar ä … | — | 📋 steg | |
| T0939 | rolf | TACK för hållarn!! Ölen ä iskall. Lite pengar i lådan. En sak. Mina fingrar ä s… | — | 📋 steg | |
| T0940 | rolf | Jo jo.. Gomorron! Rolf hä. Kajsa (katten) knuffa ner min flasköppnare i tippen … | — | 📋 steg | |
| T0941 | rolf | Jo jo. Gomorron! Rolf hä. Kajsa (katten) knuffa ner min flasköppnare i tippen 😩… | — | 📋 steg | |
| T0942 | rolf | PERFEKT öppnare!!! Lite pengar i lådan. Hoppas kärran gör nytta. /Rolf | — | 📋 steg | |
| T0943 | rolf | PERFEKT öppnare!!! Lite pengar i lådan. Hoppas kärran gör nytta. /Rolf | — | 📋 steg | |
| T0944 | rolf | Hörru. Ska grilla på lördag. Ensam som vanligt, Kajsa äter int kôrv. Ingen gril… | — | 📋 steg | |
| T0945 | rolf | Hörru. Ska grilla på lördag. Ensam som vanligt, Kajsa äter int kôrv. Ingen gril… | — | 📋 steg | |
| T0946 | rolf | Tjo. Grillspaden ä ju KONST. Pengar i lådan. Ses på lördag. Eller int. Vi får s… | — | 📋 steg | |
| T0947 | rolf | Tjo. Grillspaden ä ju KONST. Pengar i lådan. Ses på lördag. Eller int. Vi får s… | — | 📋 steg | |
| T0948 | rolf | Jo jo. Flaket ä så trist. Fôlk vinkar aldrig åt sopbilen. Mä en tomte på flaket… | — | 📋 steg | |
| T0949 | rolf | Jo jo. Flaket ä så trist. Fôlk vinkar aldrig åt sopbilen. Mä en tomte på flaket… | — | 📋 steg | |
| T0950 | rolf | Tjo.. Tomten sitter på flaket nu. Vi vinkar åt alla. ALLA. Pengar + dubbel last… | — | 📋 steg | |
| T0951 | rolf | Tjo. Tomten sitter på flaket nu. Vi vinkar åt alla. ALLA. Pengar + dubbel last.… | — | 📋 steg | |

### Mammas svar om burkarna (11 st)

**I dag:** svar på mammas sms med svarsalternativ · **styrs av:** händelse · **förslag:** `smsSvar:<id>`, fördröjning 1,5 s, villkor —, stryks om —, vikt **STORY**

| id | figur | text | villkor i dag | styrs av | Beslut |
|---|---|---|---|---|---|
| T0952 | mamma | HAHA träplankor?! | — | händelse | |
| T0953 | mamma | Vad är det där för nåt? Du har ju inte ens TAPETER på väggarna. | — | händelse | |
| T0954 | mamma | Och var är badrummet?? Du duschar väl?? | — | händelse | |
| T0955 | mamma | Pappa säger "aha, vad lugnt då". Pappa säger det om allt. | — | händelse | |
| T0956 | mamma | …men gardinerna i fönstret var fina. Har du gjort dem själv? ❤️ | — | händelse | |
| T0957 | mamma | …men fönstret var fint. Det kommer in ljus i alla fall. ❤️ | — | händelse | |
| T0958 | mamma | …men du har en säng. Det är en början. Jag är stolt. Säg inte det till pappa. ❤️ | — | händelse | |
| T0959 | mamma | Mamma här. Du skickade en bild på en JACUZZI?! | — | händelse | |
| T0960 | mamma | …och tapeter. Och en gamingbod med lampor i alla färger. | — | händelse | |
| T0961 | mamma | Okej. Jag erkänner. Det är finare än hemma. | — | händelse | |
| T0962 | mamma | Kan jag komma och bada på söndag? Pappa tar med korv. | — | händelse | |

### Telefonsamtal (8 st)

**I dag:** telefonscenen (kapitel 2 m.fl.) · **styrs av:** 📋 steg · **förslag:** `kapitelKlart:<n>`, fördröjning 6 s, villkor ingen meny öppen, stryks om —, vikt **STORY**

| id | figur | text | villkor i dag | styrs av | Beslut |
|---|---|---|---|---|---|
| T0963 | pappa | Hej. Det är pappa. | — | 📋 steg | |
| T0964 | du | Hej pappa. | — | 📋 steg | |
| T0965 | pappa | Mamma står bredvid. Hon säger att jag ska fråga om du äter. | — | 📋 steg | |
| T0966 | du | Jag äter. Och jag har en egen kvarn nu. Och en 3D-skrivare. | — | 📋 steg | |
| T0967 | pappa | Jaha. En kvarn. Vad lugnt då. | — | 📋 steg | |
| T0968 | pappa | Jag kanske kommer förbi nån dag. Om det passar. | — | 📋 steg | |
| T0969 | du | Det passar. | — | 📋 steg | |
| T0970 | pappa | Bra. Hej då då. | — | 📋 steg | |

### Sms ibland (storebror och mamma) (8 st)

**I dag:** sms-poolen · **styrs av:** ⏱ tid + 📅 dag ≥ N · **förslag:** `stillaStaende`, fördröjning 0, villkor ingen meny öppen, stryks om —, vikt **REAKTION (småprat)**

| id | figur | text | villkor i dag | styrs av | Beslut |
|---|---|---|---|---|---|
| T0971 | bror | Allt lugnt? Bara undrar. Inte för att jag bryr mig. | — | ⏱ tid + 📅 dag ≥ N | |
| T0972 | bror | Mamma gråter inte längre när hon går förbi ditt rum. Framsteg. | — | ⏱ tid + 📅 dag ≥ N | |
| T0973 | bror | Om du behöver nåt så… ja. Du vet. | — | ⏱ tid + 📅 dag ≥ N | |
| T0974 | bror | Kolla mig, jag skriver till dig. Känn dig speciell. | — | ⏱ tid + 📅 dag ≥ N | |
| T0975 | mamma | Äter du ordentligt?? Inte bara nudlar!! | — | ⏱ tid + 📅 dag ≥ N | |
| T0976 | mamma | Jag ringde tre gånger. TRE. Svara! | — | ⏱ tid + 📅 dag ≥ N | |
| T0977 | mamma | Pappa saknar dig. Han säger det inte men jag vet. | — | ⏱ tid + 📅 dag ≥ N | |
| T0978 | mamma | Har du borstat tänderna idag? Ljug inte. | — | ⏱ tid + 📅 dag ≥ N | |

### Sopbilsresan med Rolf (6 st)

**I dag:** resan (dag 10+) · **styrs av:** 📅 dag ≥ 10 · **förslag:** `gattIn:sopbilen`, fördröjning 0, villkor —, stryks om —, vikt **STORY**

| id | figur | text | villkor i dag | styrs av | Beslut |
|---|---|---|---|---|---|
| T0979 | rolf | Hä sitter vi varje morron. Lasse, Gunnar o ja. Lasse har kört buss i 38 år. Gun… | — | 📅 dag ≥ 10 | |
| T0980 | rolf | Hä sitter vi varje morron. Lasse, Gunnar o ja. Lasse har kört buss i 38 år. Gun… | — | 📅 dag ≥ 10 | |
| T0981 | rolf | Nämen.. Ja tar alltid en bit prinsesstårta hä. Birgitta o ja gick hit. Varje fr… | — | 📅 dag ≥ 10 | |
| T0982 | rolf | Nämen. Ja tar alltid en bit prinsesstårta hä. Birgitta o ja gick hit. Varje fre… | — | 📅 dag ≥ 10 | |
| T0983 | rolf | Nämen. Hä har ja samlat grejer i trettio år. Fôlk slänger dä finaste sakerna. V… | — | 📅 dag ≥ 10 | |
| T0984 | rolf | Nämen. Hä har ja samlat grejer i trettio år. Fôlk slänger dä finaste sakerna. V… | — | 📅 dag ≥ 10 | |

### Familjens sms dag för dag (6 st)

**I dag:** morgonkön dag N (FAMILJ[dag]) + 60–180 s · **styrs av:** ⏱ tid + 📅 dag N · **förslag:** `morgonkortStangt dag N`, fördröjning 20 s, villkor —, stryks om —, vikt **STORY**

| id | figur | text | villkor i dag | styrs av | Beslut |
|---|---|---|---|---|---|
| T0985 | mamma | HUR KUNDE DU BARA GÅ?!?! Är du ok?? SVARA NÄR JAG RINGER!! | — | ⏱ tid + 📅 dag N | |
| T0986 | mamma | Var är du?? | — | ⏱ tid + 📅 dag N | |
| T0987 | mamma | Pappa hälsar. Han sa inte det, men jag såg på honom att han ville. | — | ⏱ tid + 📅 dag N | |
| T0988 | pappa | Hej. Mamma sa att jag skulle skriva. Så. Hej. Allt bra? /Pappa | — | ⏱ tid + 📅 dag N | |
| T0989 | bror | Hörde att du tog min gamla skrivare. Bra. Den har varit med om mycket. Säg till… | — | ⏱ tid + 📅 dag N | |
| T0990 | bror | Mamma ringde mig fyra gånger förresten. Snyggt jobbat 😂 | — | ⏱ tid + 📅 dag N | |

### Chefen (också Rolf): böter (3 st)

**I dag:** morgonen efter ett ja-jobb · **styrs av:** 📅 morgon · **förslag:** `morgonkortStangt efter jobbJa`, fördröjning 4 s, villkor —, stryks om —, vikt **STORY**

| id | figur | text | villkor i dag | styrs av | Beslut |
|---|---|---|---|---|---|
| T0991 | chefen | Hej. Rolf här – chefen. Någon har druckit min espresso. Rolf säger att det var … | — | 📅 morgon | |
| T0992 | chefen | Chefen igen. Det har varit en skylt på grinden. Och mina kakor är färre. Jag ve… | — | 📅 morgon | |
| T0993 | chefen | Chefen. Jag har hittat en servett stämplad GODKÄNT. Den var inte godkänd. Böter. | — | 📅 morgon | |

### Sopbilsresan: konditoriet (3 st)

**I dag:** resan, val i konditoriet · **styrs av:** händelse · **förslag:** `resaVal:<n>`, fördröjning 0, villkor —, stryks om —, vikt **STORY**

| id | figur | text | villkor i dag | styrs av | Beslut |
|---|---|---|---|---|---|
| T0994 | rolf | Vi sålde huset 2009. Hon behövde vård. Ja behövde int ett hus. Ja behövde henne. | — | händelse | |
| T0995 | rolf | Hon dog för sju år sen. Hon hade gillat dej. Hon gillade fôlk som fixar saker. | — | händelse | |
| T0996 | rolf | Den e bäst i länet. Birgitta tyckte de oxå. | — | händelse | |

### Brorsans sms dag 1 (punkt AS) (2 st)

**I dag:** tagitUrPrint:nyckelring (punkt BC) · **styrs av:** händelse · **förslag:** `tagitUrPrint:nyckelring`, fördröjning 2 s / 6 s, villkor dag 1, stryks om sms 2: salt, vikt **STORY**

| id | figur | text | villkor i dag | styrs av | Beslut |
|---|---|---|---|---|---|
| T0997 | bror | VA?! Fick du igång den?? Jag försökte i typ ett år. Den bara pep. 😳 | — | händelse | |
| T0998 | bror | Sälj den till Ali, han med affären vid tippen. Han köper gamla grejer. Han köpt… | — | händelse | |

### Ali om det begagnade (punkt AS) (2 st)

**I dag:** köp hos Ali · **styrs av:** händelse · **förslag:** `kopt:gammalkvarn / kopt:cykelbatteri`, fördröjning 0, villkor vid Ali, stryks om —, vikt **REAKTION**

| id | figur | text | villkor i dag | styrs av | Beslut |
|---|---|---|---|---|---|
| T0999 | ali | Pappas gamla köttkvarn. Han byggde om den. Den gör korv av plast. Jag vet inte … | — | händelse | |
| T1000 | ali | Elcykelbatteri. Från en elcykel. Som inte finns längre. | — | händelse | |

## 3. Toasts och notiser (korta texter på skärmen)

De flesta är direkta svar på ett klick (vikt REAKTION, ingen ändring behövs). **Fördröjda** visas först – de styrs i dag av tid.

| id | rad i spel.js | funktion | typ | text | fördröjning i dag | förslag | Beslut |
|---|---|---|---|---|---|---|---|
| U001 | 2921 | startaDirekt | toast | Kräver en rulle ${VAROR['rulle' + v.niva].namn.toLowerCase()} i verkt… | ⏱ fördröjd | koppla till händelsen som startar fördröjningen | |
| U002 | 3036 | monteraAuto | toast | Leveranslådan är på – skrivarna printar vidare av sig själva. | ⏱ fördröjd | koppla till händelsen som startar fördröjningen | |
| U003 | 4716 | rolfBrevLast | toast | 📐 3D-modellen till ${VAROR[o.vara].namn.toLowerCase()} låg med i brev… | ⏱ fördröjd | koppla till händelsen som startar fördröjningen | |
| U004 | 4772 | efterBeloning | toast | Rolf kommer nu oftare med lass – var ${Math.round(sopbilVar())} s och… | ⏱ fördröjd | koppla till händelsen som startar fördröjningen | |
| U005 | 5037 | ruttnaOverNatten | toast | 🤢 Något luktar … Mammas mat har möglat och blommorna har vissnat. Tri… | ⏱ fördröjd | koppla till händelsen som startar fördröjningen | |
| U006 | 5380 | kollaKyla | toast | 🔥 Varmt och skönt i skjulet trots ${a === 'host' ? 'hösten' : 'vinter… | ⏱ fördröjd | koppla till händelsen som startar fördröjningen | |
| U007 | 5383 | kollaKyla | toast | 🥶 Du frös i natt! Trivsel −40 idag. Skjulet behöver: ${vad.join(', ')… | ⏱ fördröjd | koppla till händelsen som startar fördröjningen | |
| U008 | 6081 | oppnaMarknad | toast | Ali gav dig receptet till blomkrukan – gratis | ⏱ fördröjd | koppla till händelsen som startar fördröjningen | |
| U009 | 8594 | kollaBengt | notis | Helen: ”${HELEN_BENGT}” | ⏱ 2200 ms | koppla till händelsen som startar fördröjningen | |
| U010 | 8594 | kollaBengt | toast | Det blir tyst i skogen. | ⏱ 2200 ms | koppla till händelsen som startar fördröjningen | |
| U011 | 8692 | kollaPolett | toast | 💡 Poletten trillar ner: du bor faktiskt här. Nytt mål: bli folkbokför… | ⏱ fördröjd | koppla till händelsen som startar fördröjningen | |
| U012 | 9215 | julScen | toast | Gästerna har gått. Flaggan på postlådan är uppe. | ⏱ 9000 ms | koppla till händelsen som startar fördröjningen | |
| U013 | 9427 | nLappLast | toast | N. vill ha: ${VAROR[b.id].namn.toLowerCase()} – lådan märkt N. står v… | ⏱ fördröjd | koppla till händelsen som startar fördröjningen | |
| U014 | 1179 | kollaSkylt | toast | Skylten vid vägen är uppgraderad. | 0 | direkt efter klicket – ok | |
| U015 | 2305 | startaTidtipp | toast | ⏱️ Tippen på tid! ${TIDTIPP_N} skräp på gården – plocka upp allt så f… | 0 | direkt efter klicket – ok | |
| U016 | 2382 | plockaSkrap | toast | 🛒 Skottkärran ligger i kistan i skjulet – lägg den i verktygsraden | 0 | direkt efter klicket – ok | |
| U017 | 2467 | byt | toast | 🛒 ${n} skräp från famnen i kärran | 0 | direkt efter klicket – ok | |
| U018 | 2687 | plockaUppPlacerad | toast | 📦 Ingen plats – verktygsraden och kistan är fulla | 0 | direkt efter klicket – ok | |
| U019 | 2688 | plockaUppPlacerad | toast | Ta bort det som står ovanpå först | 0 | direkt efter klicket – ok | |
| U020 | 2692 | plockaUppPlacerad | toast | Skrivaren jobbar – vänta tills den är tom | 0 | direkt efter klicket – ok | |
| U021 | 2828 | laddaSkrivare | toast | Rullhållaren är full – printa något först | 0 | direkt efter klicket – ok | |
| U022 | 2830 | laddaSkrivare | toast | ${n > 1 ? n + ' rullar' : 'En rulle'} laddad – skrivare ${GEN[sk.gen]… | 0 | direkt efter klicket – ok | |
| U023 | 2839 | anvandSkrivare | toast | Den här skrivaren har redan ${VAROR[sk.mod].namn.replace('Prototyp: '… | 0 | direkt efter klicket – ok | |
| U024 | 2841 | anvandSkrivare | toast | ${VAROR[id].namn.replace('Prototyp: ', '')} monterad på skrivare ${GE… | 0 | direkt efter klicket – ok | |
| U025 | 2845 | anvandSkrivare | toast | Den här skrivaren har redan den spolhållaren | 0 | direkt efter klicket – ok | |
| U026 | 2846 | anvandSkrivare | toast | ${MASKINER[id].namn} byggs på ${MASKINER[Object.keys(SPOL_NIVA)[ny - … | 0 | direkt efter klicket – ok | |
| U027 | 2848 | anvandSkrivare | toast | ${MASKINER[id].namn} monterad – skrivaren rymmer nu ${maxFil(sk) / RU… | 0 | direkt efter klicket – ok | |
| U028 | 2851 | anvandSkrivare | toast | 🎒 Ryggsäcken är full – lägg något i kistan eller sälj först. Det prin… | 0 | direkt efter klicket – ok | |
| U029 | 2856 | anvandSkrivare | toast | Tog ut ${lista.map(([t, n]) => | 0 | direkt efter klicket – ok | |
| U030 | 2865 | taUt | toast | 🦾 Skräpgripen sitter! Bär ${BARA_SKRAP[1]}, lättare att sikta, plocka… | 0 | direkt efter klicket – ok | |
| U031 | 2867 | taUt | toast | 🗑️ Sopsäcken är över axeln! Du bär ${BARA_SKRAP[2]} skräp nu. | 0 | direkt efter klicket – ok | |
| U032 | 2869 | taUt | toast | 🧺 Ryggkorgen sitter på! Du bär ${BARA_SKRAP[3]} skräp nu. | 0 | direkt efter klicket – ok | |
| U033 | 2871 | taUt | toast | 🎒 Större ryggsäck – ${RYGG_STOR} platser! | 0 | direkt efter klicket – ok | |
| U034 | 2873 | taUt | toast | 🛒 Skottkärran är klar! Nu kan du lyfta regntunnor och kajaker. | 0 | direkt efter klicket – ok | |
| U035 | 2875 | taUt | toast | 🧲 Magnetpistolen är klar! Den ligger i verktygsraden – gripen har du … | 0 | direkt efter klicket – ok | |
| U036 | 2882 | taUt | toast | Rullställ ${S.rullstall} står vid kvarnen – rullhållaren rymmer nu ${… | 0 | direkt efter klicket – ok | |
| U037 | 2888 | taUt | toast | 📦 ${namnFor(typ)} → kistan i skjulet (raden är full) | 0 | direkt efter klicket – ok | |
| U038 | 2939 | avbrytJobb | toast | Avbrutet – ${rullar(tillbaka)} filament tillbaka i skrivaren | 0 | direkt efter klicket – ok | |
| U039 | 3122 | lastaPaBand | toast | ${n} st på bandet | 0 | direkt efter klicket – ok | |
| U040 | 3392 | ritaStart | toast | 🖨️ Storebrors skrivare står på sin plats i linje 1 | 0 | direkt efter klicket – ok | |
| U041 | 3393 | ritaStart | toast | ⚙️ Kvarnen står i linje 1. Den är redan 80 % full – en flaska till så… | 0 | direkt efter klicket – ok | |
| U042 | 3404 | ritaStart | toast | Verktygsraden är full | 0 | direkt efter klicket – ok | |
| U043 | 3406 | ritaStart | toast | 🖨️ Du har skrivaren. Ställ den på den lysande rutan i linje 1. | 0 | direkt efter klicket – ok | |
| U044 | 3443 | byggOmCykeln | toast | 🚲⚡ Cykeln är kopplad till skrivaren. Trampa så får skrivaren ström! | 0 | direkt efter klicket – ok | |
| U045 | 3463 | autoRulle | notis | 🧵 Rullen gled själv genom slangen in i skrivaren – nu kan du printa | 0 | direkt efter klicket – ok | |
| U046 | 3514 | petgAktivera | toast | Rullbandet sitter redan | 0 | direkt efter klicket – ok | |
| U047 | 3515 | petgAktivera | toast | Det tunga rullbandet går! Det hämtar tunnor och kajaker från tippen o… | 0 | direkt efter klicket – ok | |
| U048 | 3525 | petgAktivera | toast | ${n} tunga i PETG-kvarnen – de blir röd PETG | 0 | direkt efter klicket – ok | |
| U049 | 3526 | petgAktivera | toast | PETG-kvarnen tar bara tunga saker. Smått skräp går i den vanliga kvar… | 0 | direkt efter klicket – ok | |
| U050 | 3528 | petgAktivera | toast | Den röda backen åker ner i PETG-kvarnen – en rulle röd PETG på väg | 0 | direkt efter klicket – ok | |
| U051 | 3529 | petgAktivera | toast | PETG-kvarnen tar bara röda fynd (nivå 2). Grönt och finare mals i den… | 0 | direkt efter klicket – ok | |
| U052 | 3532 | petgAktivera | toast | ${n === 1 ? 'En rulle' : n + ' rullar'} röd PETG${vart === 'kista' ? … | 0 | direkt efter klicket – ok | |
| U053 | 3554 | uppdateraPetg | notis | PETG-kvarnen: ${S.petg.rullar === 1 ? 'en rulle' : S.petg.rullar + ' … | 0 | direkt efter klicket – ok | |
| U054 | 3640 | uppdateraFlygSkrap | toast | 🔥 TURBO! Kvarnen mal 2,5× snabbare. | 0 | direkt efter klicket – ok | |
| U055 | 3641 | uppdateraFlygSkrap | toast | 🚀 JETMOTOR MED EFTERBRÄNNARE! Kvarnen mal 6× snabbare. | 0 | direkt efter klicket – ok | |
| U056 | 3645 | uppdateraFlygSkrap | toast | De knivarna sitter redan i kvarnen | 0 | direkt efter klicket – ok | |
| U057 | 3646 | uppdateraFlygSkrap | toast | Sätt i de härdade knivarna först | 0 | direkt efter klicket – ok | |
| U058 | 3651 | uppdateraFlygSkrap | toast | 🗑️ Skräpcontainern står bakom kvarnen! Töm allt skräp i den – bandet … | 0 | direkt efter klicket – ok | |
| U059 | 3667 | uppdateraFlygSkrap | toast | ${n} st från kärran i tratten | 0 | direkt efter klicket – ok | |
| U060 | 3678 | uppdateraFlygSkrap | toast | Bär hit plastskräp från tomten | 0 | direkt efter klicket – ok | |
| U061 | 3689 | uppdateraFlygSkrap | toast | Lägg plastskräp i tratten först | 0 | direkt efter klicket – ok | |
| U062 | 3700 | rullePlats | toast | Rullen är ${Math.round(S.kvarn.ut / RULLE * 100)} % full – den måste … | 0 | direkt efter klicket – ok | |
| U063 | 3702 | rullePlats | toast | 📦 Ingen plats för rullarna – töm verktygsraden eller kistan | 0 | direkt efter klicket – ok | |
| U064 | 3705 | rullePlats | toast | 🧵 ${n > 1 ? n + ' rullar' : 'En rulle'} filament i verktygsraden – bä… | 0 | direkt efter klicket – ok | |
| U065 | 3715 | monteraTratt | toast | 🪣 Stora tratten sitter! Nu får tunnor och kajaker plats. | 0 | direkt efter klicket – ok | |
| U066 | 3720 | monteraMotor | toast | ⚙️ Motorn sitter på kvarnen! Nu mal den själv. | 0 | direkt efter klicket – ok | |
| U067 | 3866 | flaskaMald | toast | 🧔🏽 Ali (bakom luckan): ”${t}” | 0 | direkt efter klicket – ok | |
| U068 | 3965 | valdHemDel | toast | 💡 Lampskärmen sitter på taklampan – så mysigt! Trivsel +6 | 0 | direkt efter klicket – ok | |
| U069 | 3972 | valdHemDel | toast | 🪟 | 0 | direkt efter klicket – ok | |
| U070 | 3974 | valdHemDel | toast | Täta väggarna först – tapeter fastnar inte på springor | 0 | direkt efter klicket – ok | |
| U071 | 4014 | tapetsera | toast | Skjulet behöver tapeter först (3D-modell hos Ali) | 0 | direkt efter klicket – ok | |
| U072 | 4015 | tapetsera | toast | Gå in i skjulet eller gamingboden och klicka där | 0 | direkt efter klicket – ok | |
| U073 | 4016 | tapetsera | toast | Ny tapet: ${TAPETER[i].namn.toLowerCase()}! | 0 | direkt efter klicket – ok | |
| U074 | 4080 | startaBodFlytt | toast | Sikta dit boden ska stå · R vrider · klicka för att ställa ner | 0 | direkt efter klicket – ok | |
| U075 | 4102 | byggBodHar | toast | Gamingboden får inte plats där | 0 | direkt efter klicket – ok | |
| U076 | 4113 | byggBodHar | toast | Gamingboden är flyttad – med allt som stod i den. | 0 | direkt efter klicket – ok | |
| U077 | 4116 | byggBodHar | toast | Gamingboden står klar! Det är ett tomt skal – inred den, flytta in gr… | 0 | direkt efter klicket – ok | |
| U078 | 4194 | uppdateraSkymning | notis | 🌇 Klockan är 21. Ali slår igen luckan. Dagens jobb är klart – gå in i… | 0 | direkt efter klicket – ok | |
| U079 | 4477 | stallNer | toast | Flytten avbruten | 0 | direkt efter klicket – ok | |
| U080 | 4506 | stallNer | toast | 💥 Du släppte allt – ${n} skräp utspritt runt dig | 0 | direkt efter klicket – ok | |
| U081 | 4611 | oppnaJobbVal | toast | Printa ${VAROR[j.vara].namn.toLowerCase()} (fliken Gåvor på skrivaren… | 0 | direkt efter klicket – ok | |
| U082 | 4684 | flygIn | toast | Stickningen ligger i Rolfs postlåda. | 0 | direkt efter klicket – ok | |
| U083 | 4690 | flygIn | toast | Presenten ligger i lådan. Rolf hämtar den när sopbilen kommer. | 0 | direkt efter klicket – ok | |
| U084 | 4696 | flygIn | toast | Printa ${VAROR[v].namn.toLowerCase()} först | 0 | direkt efter klicket – ok | |
| U085 | 4698 | flygIn | toast | ${VAROR[v].ikon} Du tar fram ${VAROR[v].namn.toLowerCase()} – tryck i… | 0 | direkt efter klicket – ok | |
| U086 | 4699 | flygIn | toast | ${VAROR[v].namn} ligger i kistan i skjulet – lägg den i verktygsraden | 0 | direkt efter klicket – ok | |
| U087 | 4737 | hamtaBeloning | toast | 🎒 Ryggsäcken är full – sakerna ligger kvar i postlådan tills du gjort… | 0 | direkt efter klicket – ok | |
| U088 | 4797 | geRolfNummer | toast | 📝 Lappen med ditt nummer ligger i Rolfs postlåda. | 0 | direkt efter klicket – ok | |
| U089 | 4854 | kopDirekt | toast | ⚙️ Kvarnen är din – ställ den på den lysande rutan i linje 1 | 0 | direkt efter klicket – ok | |
| U090 | 4856 | kopDirekt | toast | 🔋 Cykelbatteriet är inkopplat – skrivaren printar klart även när du s… | 0 | direkt efter klicket – ok | |
| U091 | 5045 | stallIKyl | toast | Kylen är full. Mamma har överträffat kylen. | 0 | direkt efter klicket – ok | |
| U092 | 5047 | stallIKyl | toast | 🧊 ${info(t).namn} står i kylen (${kylAntal()}/${KYL_MAX}). Den möglar… | 0 | direkt efter klicket – ok | |
| U093 | 5061 | kompostera | toast | 🌱 Du komposterade ${info(typ).namn.toLowerCase().replace(/ \(.*\)/, '… | 0 | direkt efter klicket – ok | |
| U094 | 5078 | stallBurkar | toast | 🍯 Pappa ställde ner ${n} saker från mamma. Totalt ${S.burkar}. Ingen … | 0 | direkt efter klicket – ok | |
| U095 | 5115 | uppdateraPappa | toast | Du: | 0 | direkt efter klicket – ok | |
| U096 | 5390 | varnaKyla | toast | 🌡️ Det blir kallt i natt. Värmen i skjulet: ${varme()}/${VARME_KRAV[a… | 0 | direkt efter klicket – ok | |
| U097 | 5415 | tungtFilament | toast | ✨ Det tunga skräpet gav en rulle ${VAROR['rulle' + n].namn.toLowerCas… | 0 | direkt efter klicket – ok | |
| U098 | 5533 | malFynd | toast | Röd PETG mals i den röda PETG-kvarnen – inte här | 0 | direkt efter klicket – ok | |
| U099 | 5535 | malFynd | toast | Knivarna biter inte på ${VAROR[t].namn.replace(' (från Rolf)', '').to… | 0 | direkt efter klicket – ok | |
| U100 | 5543 | malFynd | toast | Kvarnen gav en rulle ${VAROR['rulle' + n].namn.toLowerCase()}! Den be… | 0 | direkt efter klicket – ok | |
| U101 | 5698 | oppnaPrintMeny | toast | Ingen plats i verktygsraden eller kistan | 0 | direkt efter klicket – ok | |
| U102 | 5705 | oppnaPrintMeny | toast | Skrivaren stannar när den här är klar | 0 | direkt efter klicket – ok | |
| U103 | 5821 | saljladaAktivera | toast | Det där är Rolfs gåva – lägg den i hans postlåda | 0 | direkt efter klicket – ok | |
| U104 | 5827 | saljladaAktivera | notis | 📱 Swish från Ali: +${summa} kr · ${n > 1 ? n + ' st ' : ''}${nm}${vil… | 0 | direkt efter klicket – ok | |
| U105 | 5973 | aliKopLista | toast | Välj prototypen och klicka på en skrivare för att montera den | 0 | direkt efter klicket – ok | |
| U106 | 5985 | aliKopLista | toast | 3D-modell köpt – printa ${m.namn.toLowerCase()} på skrivaren | 0 | direkt efter klicket – ok | |
| U107 | 6004 | aliKopLista | toast | ${t.namn} nivå ${trimNiva(k)}: ${t.beskr(trimNiva(k))} | 0 | direkt efter klicket – ok | |
| U108 | 6198 | oppnaMarknad | toast | 🗑️ ${n} skräp i containern – bandet sköter resten | 0 | direkt efter klicket – ok | |
| U109 | 6217 | invFlytta | toast | Det finns ingen plats där | 0 | direkt efter klicket – ok | |
| U110 | 6223 | invKlick | toast | Gå till kistan i skjulet för att ta saker ur den | 0 | direkt efter klicket – ok | |
| U111 | 6255 | invAvsluta | notis | 📱 Swish från Ali: +${summa} kr · ${st} saker ur säljlådan | 0 | direkt efter klicket – ok | |
| U112 | 6438 | sparaPaLedigPlats | toast | Ditt spel sparades på plats ${plats} | 0 | direkt efter klicket – ok | |
| U113 | 6460 | oppnaSparplatser | toast | Sparat: ${nm // 'plats ' + platsVald} | 0 | direkt efter klicket – ok | |
| U114 | 6467 | oppnaSparplatser | toast | Sparningen döptes om | 0 | direkt efter klicket – ok | |
| U115 | 7200 | kollaRaddning | toast | Sopbilen tippade lite extra plast innanför staketet vid grinden | 0 | direkt efter klicket – ok | |
| U116 | 7375 | kollaPrestationer | notis | 📔 Prestation: ${p.namn}${rp ? | 0 | direkt efter klicket – ok | |
| U117 | 7535 | skrivarNotis | notis | Skrivare ${GEN[sk.gen].namn}: ${text} | 0 | direkt efter klicket – ok | |
| U118 | 7712 | familjSms | toast | Böter: −${b} kr | 0 | direkt efter klicket – ok | |
| U119 | 8091 | samlaOchSpara | toast | Sparar… | 0 | direkt efter klicket – ok | |
| U120 | 8121 | uppdatera | notis | ☀️ Skrivaren går på solkraft – du behöver inte trampa! | 0 | direkt efter klicket – ok | |
| U121 | 8136 | uppdatera | toast | 🔋 Batteriet är fullt! (${stromMax()}) | 0 | direkt efter klicket – ok | |
| U122 | 8191 | uppdatera | toast | ✉️ Något har hamnat i postlådan vid soptippen… | 0 | direkt efter klicket – ok | |
| U123 | 8554 | slutaResa | toast | 🚛 Hemma igen! Tolv rullar kolfiber och tre saker från Rolfs hemliga s… | 0 | direkt efter klicket – ok | |
| U124 | 8593 | kollaBengt | toast | 😡 Bengt-Åke skriker från skogen: "${t}" | 0 | direkt efter klicket – ok | |
| U125 | 8608 | kollaTillgang | toast | 🚧 Gärdesgården har flyttats ut! Du får utforska ny mark – men bara st… | 0 | direkt efter klicket – ok | |
| U126 | 8660 | kollaTillgang | toast | Hemma. | 0 | direkt efter klicket – ok | |
| U127 | 8662 | kollaTillgang | toast | 🏡 Du har flyttat in! Skjulet blir verkstad – du bor i ett riktigt hus… | 0 | direkt efter klicket – ok | |
| U128 | 8700 | folkbokfor | toast | 📮 Du är folkbokförd! Soptippsvägen 1 är din adress. | 0 | direkt efter klicket – ok | |
| U129 | 9084 | kapitelBorjar | toast | 🏆 KAPITEL 2 KLART! Röda fabriken går – och skjulet klarar hösten. | 0 | direkt efter klicket – ok | |
| U130 | 9150 | efterspelTest | toast | Skylten lyser. Soptippsvägen 1. Folkbokförd. | 0 | direkt efter klicket – ok | |
| U131 | 9247 | kapitel2Slut | toast | 🏆 KAPITEL 3 KLART! Fabriken sköter sig själv. | 0 | direkt efter klicket – ok | |
| U132 | 9317 | uppdateraGoran | toast | Göran snodde ${by === 'nyckelring' ? 'en nyckelring' : VAROR[by].namn… | 0 | direkt efter klicket – ok | |
| U133 | 9338 | kollaGoran | toast | Göran tycker om fågelskrämman. Han sitter på den. | 0 | direkt efter klicket – ok | |
| U134 | 9339 | kollaGoran | toast | Göran har flyttat in. Han sitter på skylten nu. | 0 | direkt efter klicket – ok | |
| U135 | 9381 | grav | toast | Ännu en ${VAROR[f.id].namn.toLowerCase()}. Ali köper den för 300 kr –… | 0 | direkt efter klicket – ok | |
| U136 | 9382 | grav | toast | Du hittade: ${VAROR[f.id].namn}! | 0 | direkt efter klicket – ok | |
| U137 | 9389 | oppnaLager | toast | Tippen har ett nytt lager. Äldre skräp. | 0 | direkt efter klicket – ok | |
| U138 | 9439 | nLappLast | toast | +${n.betalt} kr från N. Prydligt vikta sedlar. Kuvertet luktar kaffe. | 0 | direkt efter klicket – ok | |
| U139 | 9442 | nLappLast | toast | Det ligger i lådan. N. hämtar i natt. | 0 | direkt efter klicket – ok | |
| U140 | 9451 | kollaN | toast | Det ligger ett kuvert i lådan märkt N. | 0 | direkt efter klicket – ok | |
| U141 | 9462 | kollaN | toast | Det ligger en prydlig lapp i postlådan… | 0 | direkt efter klicket – ok | |
| U142 | 9543 | ritaTradgard | toast | ${VAROR[id].namn} på plats. | 0 | direkt efter klicket – ok | |
| U143 | 9563 | kollaTradgard | toast | Täppan är rensad. Ali har spaljé och droppslang i röd PETG. | 0 | direkt efter klicket – ok | |
| U144 | 10042 | geHelen | notis | Helen stoppar ${namnFor(typ).toLowerCase()} i Bettan utan att säga nå… | 0 | direkt efter klicket – ok | |
| U145 | 10045 | geHelen | notis | ${namnFor(f)} – från Helens hemliga förråd | 0 | direkt efter klicket – ok | |
| U146 | 10072 | helenSkjulKlart | notis | Helen: ”${t}” | 0 | direkt efter klicket – ok | |
| U147 | 10084 | kollaHelen | notis | Helen ropar: ”${t}” | 0 | direkt efter klicket – ok | |

## Summering

- Dagsmål: 104
- Röstrader: 1018 i 25 grupper
- Toasts och notiser: 147 (13 fördröjda)
- Grupper som i dag styrs av tid: Rolfs sms ibland, Sms med svarsalternativ och småprat, Sms ibland (storebror och mamma), Familjens sms dag för dag, Dina tankar, tips och varningar
