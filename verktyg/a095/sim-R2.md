# Simulering kapitel 1 – körning 1

*Gjord 2026-11-21 09:17 med `verktyg/sim-kapitel1.mjs` + `verktyg/sim-bot.js` (punkt AX). Boten går 4,5 m/s, läser 15 tecken/s, trampar, vevar, plockar, printar, köper och säljer via spelets egna funktioner. Tiderna är speltid.*

## Sammanfattning

| Dag | Minuter | Väntan | Prints (totalt) | Kr vid sömn | Bär | Trivsel |
|---|---|---|---|---|---|---|
| 7 | 5.0 | 7 % | 115 | 5601 | 16 | 132 |
| 8 | 8.7 | 6 % | 129 | 11361 | 16 | 160 |
| 9 | 10.7 | 5 % | 143 | 17143 | 16 | 164 |
| 10 | 2.7 | 2 % | 143 | 19410 | 16 | 184 |
| 11 | 4.2 | 0 % | 147 | 7095 | 16 | 179 |
| 12 | 0.0 | 0 % | 147 | 9202 | 16 | 179 |

## Flaskhalskartan (EE)

| Dag | bara | mala | trampa | strom | skrivare | inkomst | Upplåst |
|---|---|---|---|---|---|---|---|
| 7 | 2 | 6 | 0 | 0 | 103 | 0 |  |
| 8 | 2 | 2 | 0 | 0 | 332 | 0 | skrivare3 (skrivare, 1:59), magnet (bara, 3:24), bank (strom, 7:22, reserv) |
| 9 | 3 | 6 | 0 | 0 | 117 | 0 | solpark (strom, 4:08, reserv) |
| 10 | 1 | 3 | 0 | 0 | 76 | 0 |  |
| 11 | 0 | 0 | 0 | 0 | 182 | 0 |  |
| 12 | 0 | 0 | 0 | 0 | 0 | 0 |  |

TIDIG: 0 · FAST: 0 · upplåst av reserven (målet väntade 3 min): 2

**SKRATT:** 47 roliga ögonblick på 31 min (15.0 per 10 min, mål minst 5)

**Köp:**

- dag 7 0:31 – skrivarepetg (1500 kr)
- dag 7 1:38 – n2_vas (600 kr)
- dag 7 2:17 – saljlada (400 kr)
- dag 8 2:08 – skrivare3 (3500 kr)
- dag 8 3:37 – magnet (2400 kr)
- dag 8 7:43 – bank (800 kr)
- dag 8 8:17 – hylla (150 kr)
- dag 9 0:26 – n2_hjalm (2300 kr)
- dag 9 6:42 – solpark (2400 kr)
- dag 9 9:41 – petgtorn (600 kr)
- dag 10 0:43 – tapeter (800 kr)
- dag 10 2:22 – spis (360 kr)
- dag 11 0:48 – kolfkvarn (6000 kr)
- dag 11 1:41 – kolfband (10500 kr)

## Storykedjan (kvittens → varför → nytt mål)

| Dag | Tid | Id | Kvittens | Varför | Nytt mål | Tid till målet |
|---|---|---|---|---|---|---|
| 7 | 2:54 | saljlada | Jag hämtar varje morgon. Du lägger i, jag betalar. |  | Vaserna i lådan. Ali hämtar själv. | 0.8 s |

## Hur länge nya mål väntade (från att förra målet blev klart till att det nya syntes i målrutan)

Snitt 3.8 s · max 14.0 s · över 4 s: 4 · över 8 s: 4 av 25

## Flaggor (16)

- **SEN** dag 7 1:35: 16.2 s efter händelsen: ali: "Ali här. Ännu en ritning som blev på riktigt: PETG-skrivare. Semesterk"
- **SEN** dag 7 4:15: 37.5 s efter händelsen: info:bra: "📦 1 saker i lådan · Ali hämtar i morgon bitti"
- **PAUS** dag 8 1:20: 0.0 s paus före "📦 Paketet till Två syskon i Lund ligger i postlåd"
- **PAUS** dag 8 4:08: 0.0 s paus före "🧲 Magnetpistolen är klar! Den ligger i verktygsra"
- **PAUS** dag 8 8:25: 0.0 s paus före "En hylla. Jag har en hylla. Saker har en plats nu."
- **PAUS** dag 9 1:47: 0.0 s paus före "📦 Paketet till En lärare i Sundsvall ligger i pos"
- **PAUS** dag 9 10:18: 0.0 s paus före "Rulltorn XL – 12 rullar röd PETG får plats"
- **PAUS** dag 10 0:59: 0.0 s paus före "🧻 Bakväggen tapetserad. 3 kvar."
- **PAUS** dag 10 2:33: 0.0 s paus före "Varm mat. I skjulet. Mamma skulle inte tro det."
- **PAUS** dag 11 3:48: 0.0 s paus före "📦 Paketet till Någon som bara skrev "hej" ligger "
- **UPPREPNING** dag 7 4:52: info:bra: "📦 1 saker i lådan · Ali hämtar i morgon bitti" (förra gången dag 7)
- **TEMPO** dag 7 5:02: dag 7 tog 5.0 min (mål 10–15)
- **TEMPO** dag 8 8:42: dag 8 tog 8.7 min (mål 10–15)
- **TEMPO** dag 10 2:41: dag 10 tog 2.7 min (mål 10–15)
- **TEMPO** dag 11 4:11: dag 11 tog 4.2 min (mål 10–15)
- **TEMPO** dag 12 0:00: dag 12 tog 0.0 min (mål 10–15)

Sidfel: inga

## Dag 7

| Tid | Källa | Vem | Text |
|---|---|---|---|
| 0:00 | MÅL |  | Bygg PETG-skrivaren |
| 0:00 | MÅL |  | Bygg PETG-skrivaren |
| 0:01 | sak | du | Röd plast kräver en egen skrivare. Den vanliga vill inte. |
| 0:01 | pil |  | Bygg PETG-skrivaren |
| 0:01 | notis | tanke | 💭 Röd plast kräver en egen skrivare. Den vanliga vill inte. |
| 0:01 | röst | du | Röd plast kräver en egen skrivare. Den vanliga vill inte. · MÅL |
| 0:01 | nick |  | nick:65 |
| 0:06 | klar | du | Röd plast kräver en egen skrivare. Den vanliga vill inte. |
| 0:28 | väntar | ali | AI:n säger hej. Jag säger hej. Det räcker. |
| 0:28 | sak | ali | AI:n säger hej. Jag säger hej. Det räcker. |
| 0:28 | röst | ali | AI:n säger hej. Jag säger hej. Det räcker. · SMÅPRAT |
| 0:29 | bubbla |  | AI:n säger hej. Jag säger hej. Det räcker. |
| 0:29 | butiksbubbla | ali | Ledig? Vad är det? Har aldrig hört talas om det. |
| 0:30 | röst | ali | Ledig? Vad är det? Har aldrig hört talas om det. · STORY |
| 0:30 | skratt | du | Alis dyr-pling |
| 0:30 | toast | guld | 3D-modell köpt – printa petg-skrivare på skrivaren |
| 0:30 | händelse | kopt | sak=skrivarepetg |
| 0:32 | klar | ali | AI:n säger hej. Jag säger hej. Det räcker. |
| 0:39 | händelse | printStart | sak=byggsats:skrivarepetg |
| 0:40 | skratt | du | kvarnen spottar |
| 0:43 | toast | bra | Del 1 av 5 klar |
| 0:45 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 0:54 | väntar | värld:Mjau. | Mjau. |
| 0:58 | sak | värld:Mjau. | Mjau. |
| 0:58 | bubbla |  | Mjau. |
| 1:00 | klar | värld:Mjau. | Mjau. |
| 1:01 | toast | bra | Del 2 av 5 klar |
| 1:06 | väntar | värld:TUUT! Tjena! | TUUT! Tjena! |
| 1:06 | toast | bra | Del 3 av 5 klar |
| 1:08 | sak | värld:TUUT! Tjena! | TUUT! Tjena! |
| 1:08 | bubbla |  | TUUT! Tjena! |
| 1:11 | toast | bra | Del 4 av 5 klar |
| 1:11 | klar | värld:TUUT! Tjena! | TUUT! Tjena! |
| 1:15 | händelse | printKlar | sak=byggsats:skrivarepetg n=1 |
| 1:15 | toast | guld | ✅ |
| 1:17 | händelse | tagitUrPrint | sak=byggsats:skrivarepetg n=1 |
| 1:17 | paket |  | sms |
| 1:17 | väntar | ali | Ali här. Ännu en ritning som blev på riktigt: PETG-skrivare. Semesterkassan växer. Livet växer. |
| 1:20 | händelse | placerat | sak=skrivarepetg |
| 1:20 | händelse | malKlart | id=r7-bygg-petg-skrivaren del=Dag 7 – PETG-skrivaren nasta=r7-printa-designvas-rod |
| 1:20 | väntar | du | En vas. Röd. Design. Ali kommer att låtsas att han förstår den. |
| 1:20 | MÅL |  | Printa en designvas i röd PETG |
| 1:22 | sak | du | En vas. Röd. Design. Ali kommer att låtsas att han förstår den. |
| 1:22 | målruta |  | Printa en designvas i röd PETG |
| 1:22 | pil |  | Printa en designvas i röd PETG |
| 1:22 | notis | tanke | 💭 En vas. Röd. Design. Ali kommer att låtsas att han förstår den. |
| 1:22 | röst | du | En vas. Röd. Design. Ali kommer att låtsas att han förstår den. · MÅL |
| 1:24 | kvittens-bock |  | ✓ Bygg PETG-skrivaren |
| 1:27 | klar | du | En vas. Röd. Design. Ali kommer att låtsas att han förstår den. |
| 1:35 | sak | ali | Ali här. Ännu en ritning som blev på riktigt: PETG-skrivare. Semesterkassan växer. Livet växer. |
| 1:35 | sms | ali | Ali här. Ännu en ritning som blev på riktigt: PETG-skrivare. Semesterkassan växer. Livet växer. |
| 1:35 | sms-bubbla | ali | Ali här. Ännu en ritning som blev på riktigt: PETG-skrivare. Semesterkassan växer. Livet växer. |
| 1:35 | röst | ali | Ali här. Ännu en ritning som blev på riktigt: PETG-skrivare. Semesterkassan växer. Livet växer. · REAKTION |
| 1:37 | skratt | du | Alis dyr-pling |
| 1:37 | händelse | kopt | sak=n2_vas |
| 1:37 | butiksbubbla | ali | Designvas i röd PETG. Röd. AI:n sa att röd säljer. AI:n har aldrig sålt något. Men okej. |
| 1:38 | väntar | ali | Röd. AI:n sa att röd säljer. AI:n har aldrig sålt något. Men okej. |
| 1:43 | klar | ali | Ali här. Ännu en ritning som blev på riktigt: PETG-skrivare. Semesterkassan växer. Livet växer. |
| 1:45 | sak | ali | Röd. AI:n sa att röd säljer. AI:n har aldrig sålt något. Men okej. |
| 1:45 | röst | ali | Röd. AI:n sa att röd säljer. AI:n har aldrig sålt något. Men okej. · STORY |
| 1:46 | händelse | printStart | sak=n2_vas |
| 1:46 | toast | bra | 🔗 Slangen kopplad |
| 1:49 | toast | guld | ✅ |
| 1:49 | händelse | printKlar | sak=n2_vas n=1 |
| 1:49 | händelse | malKlart | id=r7-printa-designvas-rod del=Dag 7 – PETG-skrivaren nasta=r7-salj-designvasen |
| 1:49 | väntar | du | Vasen till Ali. Han betalar mer för röd. |
| 1:50 | MÅL |  | Sälj designvasen |
| 1:50 | händelse | tagitUrPrint | sak=n2_vas n=1 |
| 1:51 | klar | ali | Röd. AI:n sa att röd säljer. AI:n har aldrig sålt något. Men okej. |
| 1:51 | målruta |  | Sälj designvasen |
| 1:53 | sak | du | Vasen till Ali. Han betalar mer för röd. |
| 1:53 | pil |  | Sälj designvasen |
| 1:53 | notis | tanke | 💭 Vasen till Ali. Han betalar mer för röd. |
| 1:53 | röst | du | Vasen till Ali. Han betalar mer för röd. · MÅL |
| 1:53 | kvittens-bock |  | ✓ Printa en designvas i röd PETG |
| 1:56 | klar | du | Vasen till Ali. Han betalar mer för röd. |
| 2:06 | aliSalt | ali | 790 |
| 2:07 | händelse | malKlart | id=r7-salj-designvasen del=Dag 7 – PETG-skrivaren nasta=saljlada |
| 2:07 | struken | kedja | vasSald |
| 2:07 | väntar | du | En säljlåda. Då slipper jag springa till Ali med varje vas. |
| 2:07 | målruta |  | Bygg säljlådan vid samlingsplatsen |
| 2:07 | MÅL |  | Bygg säljlådan vid samlingsplatsen |
| 2:07 | sak | du | En säljlåda. Då slipper jag springa till Ali med varje vas. |
| 2:07 | pil |  | Bygg säljlådan vid samlingsplatsen |
| 2:07 | notis | tanke | 💭 En säljlåda. Då slipper jag springa till Ali med varje vas. |
| 2:07 | röst | du | En säljlåda. Då slipper jag springa till Ali med varje vas. · MÅL |
| 2:09 | väntar | bror | Mamma har gått med i en Facebookgrupp: "Föräldrar till barn som flyttat till konstiga ställen". Hon är admin nu. |
| 2:11 | kvittens-bock |  | ✓ Sälj designvasen |
| 2:12 | klar | du | En säljlåda. Då slipper jag springa till Ali med varje vas. |
| 2:16 | toast | guld | 3D-modell köpt – printa säljlåda på skrivaren |
| 2:16 | händelse | kopt | sak=saljlada |
| 2:31 | väntar | info:fel | Fullt i händerna. |
| 2:31 | sak | info:fel | Fullt i händerna. |
| 2:31 | kvitto-visas | info:fel | Fullt i händerna. |
| 2:31 | toast | fel | Fullt i händerna. |
| 2:33 | klar | info:fel | Fullt i händerna. |
| 2:39 | skratt | du | falsk tuta |
| 2:43 | händelse | printStart | sak=byggsats:saljlada |
| 2:46 | toast | bra | Del 1 av 2 klar |
| 2:49 | händelse | printKlar | sak=byggsats:saljlada n=1 |
| 2:49 | toast | guld | ✅ |
| 2:50 | händelse | tagitUrPrint | sak=byggsats:saljlada n=1 |
| 2:54 | händelse | placerat | sak=saljlada |
| 2:54 | kvittens | ali | Jag hämtar varje morgon. Du lägger i, jag betalar. |
| 2:54 | väntar | ali | Jag hämtar varje morgon. Du lägger i, jag betalar. |
| 2:54 | paket |  | sms |
| 2:54 | väntar | rolf | Lådan vid fabriken! Ali kommer mä sin lilla bil varje morron. Ja vinkar. Han vinkar int. /R |
| 2:54 | händelse | malKlart | id=saljlada del=Dag 7 – PETG-skrivaren nasta=saljlada3 |
| 2:54 | skratt | du | däcket rullar iväg |
| 2:54 | väntar | du | Vaserna i lådan. Ali hämtar själv. |
| 2:54 | MÅL |  | Lägg 3 vaser i säljlådan · 0/3 |
| 2:55 | sak | ali | Jag hämtar varje morgon. Du lägger i, jag betalar. |
| 2:55 | notis |  | Jag hämtar varje morgon. Du lägger i, jag betalar. |
| 2:55 | röst | ali | Jag hämtar varje morgon. Du lägger i, jag betalar. · STORY |
| 2:55 | målruta |  | Lägg 3 vaser i säljlådan · 0/3 |
| 3:00 | klar | ali | Jag hämtar varje morgon. Du lägger i, jag betalar. |
| 3:00 | sak | du | Vaserna i lådan. Ali hämtar själv. |
| 3:00 | pil |  | Lägg 3 vaser i säljlådan · 0/3 |
| 3:00 | notis | tanke | 💭 Vaserna i lådan. Ali hämtar själv. |
| 3:00 | röst | du | Vaserna i lådan. Ali hämtar själv. · MÅL |
| 3:00 | nick |  | nick:69 |
| 3:03 | klar | du | Vaserna i lådan. Ali hämtar själv. |
| 3:09 | händelse | printStart | sak=n2_vas |
| 3:12 | toast | guld | ✅ |
| 3:12 | händelse | printKlar | sak=n2_vas n=2 |
| 3:13 | händelse | tagitUrPrint | sak=n2_vas n=1 |
| 3:30 | sak | bror | Mamma har gått med i en Facebookgrupp: "Föräldrar till barn som flyttat till konstiga ställen". Hon är admin nu. |
| 3:30 | sms | bror | Mamma har gått med i en Facebookgrupp: "Föräldrar till barn som flyttat till konstiga ställen". Hon är admin nu. |
| 3:30 | sms-bubbla | bror | Mamma har gått med i en Facebookgrupp: "Föräldrar till barn som flyttat till konstiga ställen". Hon är admin nu. |
| 3:30 | röst | bror | Mamma har gått med i en Facebookgrupp: "Föräldrar till barn som flyttat till konstiga ställen". Hon är admin nu. · SMÅPRAT |
| 3:31 | väntar | info:bra | 📦 1 saker i lådan · Ali hämtar i morgon bitti |
| 3:37 | kvitto-visas | info:bra | 📦 1 saker i lådan · Ali hämtar i morgon bitti |
| 3:37 | toast | bra | 📦 1 saker i lådan · Ali hämtar i morgon bitti |
| 3:38 | väntar | mamma | Jag sa till pappa att du bor på en soptipp. Han sa "aha, vad lugnt då" och satte på Formel 1. Lugnt? |
| 3:40 | klar | bror | Mamma har gått med i en Facebookgrupp: "Föräldrar till barn som flyttat till konstiga ställen". Hon är admin nu. |
| 3:46 | händelse | printStart | sak=n2_vas |
| 3:49 | toast | guld | ✅ |
| 3:49 | händelse | printKlar | sak=n2_vas n=3 |
| 3:49 | händelse | tagitUrPrint | sak=n2_vas n=1 |
| 4:08 | väntar | info:bra | 📦 1 saker i lådan · Ali hämtar i morgon bitti |
| 4:15 | sak | info:bra | 📦 1 saker i lådan · Ali hämtar i morgon bitti |
| 4:15 | kvitto-visas | info:bra | 📦 1 saker i lådan · Ali hämtar i morgon bitti |
| 4:15 | toast | bra | 📦 1 saker i lådan · Ali hämtar i morgon bitti |
| 4:17 | klar | info:bra | 📦 1 saker i lådan · Ali hämtar i morgon bitti |
| 4:23 | händelse | printStart | sak=n2_vas |
| 4:26 | toast | guld | ✅ |
| 4:26 | händelse | printKlar | sak=n2_vas n=4 |
| 4:27 | händelse | tagitUrPrint | sak=n2_vas n=1 |
| 4:46 | väntar | info:bra | 📦 1 saker i lådan · Ali hämtar i morgon bitti |
| 4:52 | sak | info:bra | 📦 1 saker i lådan · Ali hämtar i morgon bitti |
| 4:52 | kvitto-visas | info:bra | 📦 1 saker i lådan · Ali hämtar i morgon bitti |
| 4:52 | toast | bra | 📦 1 saker i lådan · Ali hämtar i morgon bitti |
| 4:52 | händelse | malKlart | id=saljlada3 del=Dag 7 – PETG-skrivaren nasta=sov7 |
| 4:52 | paket |  | lapp |
| 4:52 | väntar | du | Dag 7 är slut. Nu vet pappa att jag bor HÄR. Ryggen värker av allt bärande. |
| 4:52 | MÅL |  | Klart för idag – sov när du vill |
| 4:54 | klar | info:bra | 📦 1 saker i lådan · Ali hämtar i morgon bitti |
| 4:56 | skratt | du | falsk tuta |
| 4:56 | målruta |  | Klart för idag – sov när du vill |
| 4:56 | kvittens-bock |  | ✓ Lägg 3 vaser i säljlådan · 3/3 |
| 4:56 | sak | du | (nytt mål i rutan) |
| 4:56 | pil |  | Klart för idag – sov när du vill |
| 4:56 | klar | du | (nytt mål i rutan) |
| 4:59 | väntar | notis:🌇 Klockan är 21. Ali slår igen luckan.  | 🌇 Klockan är 21. Ali slår igen luckan. Dagens jobb är klart – gå in i skjulet och sov i sängen. |
| 5:01 | struken | mamma | Jag sa till pappa att du bor på en soptipp. Han sa "aha, vad lugnt då" och satte på Formel 1. Lugnt? |
| 5:04 | väntar | bror | Pappa kom hem och sa att Rolf var "en riktig räv bakom örat". Sen satte han på hockeyn. Det var allt. |
| 5:04 | aliSalt | ali | 2141 |

<details><summary>Botens handlingar dag 7</summary>

- 0:14 gå till Rolfs postlåda (29 m) (7311 kr)
- 0:22 panel: "En lapp från Rolf
Lite olaglig" (7311 kr)
- 0:29 gå till Ali (31 m) (7311 kr)
- 0:29 öppnar Alis butik – köpa petg-skrivare (7311 kr)
- 0:31 köper skrivarepetg för 1500 kr (5811 kr)
- 0:37 gå till skrivaren (24 m) (5811 kr)
- 0:39 printar PETG-skrivare (5 delar) (5811 kr)
- 0:55 plockar 7 skräp på tippen (bär max 16) (5811 kr)
- 0:58 gå till kvarnen (14 m) (5811 kr)
- 1:17 gå till skrivaren (5 m) (5811 kr)
- 1:18 tar ut 1 st ur skrivaren (5811 kr)
- 1:19 gå till platsen för petg-skrivare (4 m) (5811 kr)
- 1:20 ställer ut petg-skrivare (5811 kr)
- 1:35 gå till Ali (29 m) (5811 kr)
- 1:35 öppnar Alis butik – köpa receptet designvas i röd petg (5811 kr)
- 1:38 köper n2_vas för 600 kr (5211 kr)
- 1:45 gå till skrivaren (29 m) (5211 kr)
- 1:46 printar Designvas i röd PETG (5211 kr)
- 1:50 tar ut 1 st ur skrivaren (5211 kr)
- 2:04 gå till Ali (29 m) (5211 kr)
- 2:04 öppnar Alis butik – sälja vasen (5211 kr)
- 2:06 säljer hos Ali: +790 kr (6001 kr)
- 2:14 öppnar Alis butik – köpa säljlåda (6001 kr)
- 2:17 köper saljlada för 400 kr (5601 kr)
- 2:32 plockar 6 skräp på tippen (bär max 16) (5601 kr)
- 2:35 gå till kvarnen (16 m) (5601 kr)
- 2:42 gå till skrivaren (5 m) (5601 kr)
- 2:43 printar Säljlåda (2 delar) (5601 kr)
- 2:50 tar ut 1 st ur skrivaren (5601 kr)
- 2:53 gå till platsen för säljlåda (11 m) (5601 kr)
- 2:54 ställer ut säljlåda (5601 kr)
- 3:08 gå till skrivaren (13 m) (5601 kr)
- 3:09 printar Designvas i röd PETG (5601 kr)
- 3:13 tar ut 1 st ur skrivaren (5601 kr)
- 3:16 gå till säljlådan (10 m) (5601 kr)
- 3:22 panel: "Säljlådan
0 saker i lådan
Lägg" (5601 kr)
- 3:30 panel: "Säljlådan
0 saker i lådan
Lägg" (5601 kr)
- 3:37 panel: "Säljlådan
1 saker i lådan
Lägg" (5601 kr)
- 3:38 lägger vaserna i säljlådan (DA) (5601 kr)
- 3:44 gå till skrivaren (10 m) (5601 kr)
- 3:46 printar Designvas i röd PETG (5601 kr)
- 3:50 tar ut 1 st ur skrivaren (5601 kr)
- 3:53 gå till säljlådan (10 m) (5601 kr)
- 4:00 panel: "Säljlådan
1 saker i lådan
Lägg" (5601 kr)
- 4:08 panel: "Säljlådan
1 saker i lådan
Lägg" (5601 kr)
- 4:15 panel: "Säljlådan
2 saker i lådan
Lägg" (5601 kr)
- 4:15 lägger vaserna i säljlådan (DA) (5601 kr)
- 4:21 gå till skrivaren (10 m) (5601 kr)
- 4:23 printar Designvas i röd PETG (5601 kr)
- 4:27 tar ut 1 st ur skrivaren (5601 kr)
- 4:31 gå till säljlådan (10 m) (5601 kr)
- 4:37 panel: "Säljlådan
2 saker i lådan
Lägg" (5601 kr)
- 4:45 panel: "Säljlådan
2 saker i lådan
Lägg" (5601 kr)
- 4:52 panel: "Säljlådan
3 saker i lådan
Lägg" (5601 kr)
- 4:53 lägger vaserna i säljlådan (DA) (5601 kr)
- 5:01 gå till sängen (13 m) (5601 kr)

</details>

## Dag 8

| Tid | Källa | Vem | Text |
|---|---|---|---|
| 5:04 | vara | ali | n2_vas |
| 5:04 | händelse | malKlart | id=sov7 del=Dag 7 – PETG-skrivaren nasta=r8-bygg-skrivare-l |
| 5:04 | MÅL |  | Printa och sälj |
| 0:00 | paket |  | sms |
| 0:00 | väntar | rolf | Grannen står me kikare i fönstret igen. Bry dej int. /R |
| 0:00 | paket |  | sms |
| 0:00 | väntar | ali | Ali här. Kolfiber. Dyrt. Lätt. Jag har ingen kvarn för det. |
| 0:00 | väntar | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått petg-skrivare. Och säljlåda. Mer säger jag inte. Gunnar vet. |
| 0:00 | radio | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått petg-skrivare. Och säljlåda. Mer säger jag inte. Gunnar vet. |
| 0:00 | skratt | du | Radio-Kjelle |
| 0:01 | händelse | dagenBorjar | dag=8 |
| 0:01 | meddelande | du | Dag 8. 14 dagar till jul. Utan mer ström står allt still i kylan. |
| 0:01 | dagbokkort | du | Magnetpistolen · Dag 8. 14 dagar till jul. Utan mer ström står allt still i kylan. |
| 0:01 | röst | du | Dag 8. 14 dagar till jul. Magnetpistolen. Utan mer ström står allt still i kylan. · STORY |
| 0:08 | notis | nytt | Ali vill ha idag: Designvas i röd PETG – +50 % hela dagen (1185 kr just nu)📦 Ali hämtade säljlådan i natt: 3 st · +2 141 kr📈 Igår: 4 printat · 1 sålt |
| 0:08 | händelse | morgonkortStangt | dag=8 |
| 0:08 | struken | kedja | d8 |
| 0:12 | målruta |  | Printa och sälj |
| 0:14 | sak | du | (nytt mål i rutan) |
| 0:14 | pil |  | Printa och sälj |
| 0:14 | klar | du | (nytt mål i rutan) |
| 0:16 | struken | notis:🌇 Klockan är 21. Ali slår igen luckan.  | 🌇 Klockan är 21. Ali slår igen luckan. Dagens jobb är klart – gå in i skjulet och sov i sängen. |
| 0:16 | struken | ali | Ali här. Kolfiber. Dyrt. Lätt. Jag har ingen kvarn för det. |
| 0:16 | struken | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått petg-skrivare. Och säljlåda. Mer säger jag inte. Gunnar vet. |
| 0:21 | händelse | printStart | sak=nyckelring |
| 0:22 | toast | guld | ✅ |
| 0:22 | händelse | printKlar | sak=nyckelring n=26 |
| 0:23 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 0:25 | händelse | printStart | sak=nyckelring |
| 0:26 | toast | guld | ✅ |
| 0:26 | händelse | printKlar | sak=nyckelring n=27 |
| 0:27 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 0:29 | händelse | printStart | sak=kruka |
| 0:30 | sak | du | Dag 7 är slut. Nu vet pappa att jag bor HÄR. Ryggen värker av allt bärande. |
| 0:30 | lapp | 📔 Dagbok | Dag 7 är slut. Nu vet pappa att jag bor HÄR. Ryggen värker av allt bärande. |
| 0:30 | meddelande | du | Dag 7 är slut. Nu vet pappa att jag bor HÄR. Ryggen värker av allt bärande. |
| 0:30 | dagbokkort | du | Dag 7 är slut. Nu vet pappa att jag bor HÄR. Ryggen värker av allt bärande. |
| 0:31 | röst | du | Dag 8. 14 dagar till jul. Dag 7 är slut. Nu vet pappa att jag bor HÄR. Ryggen värker av allt bärande. · STORY |
| 0:39 | händelse | brevLast | id=kvall7 |
| 0:39 | klar | du | Dag 7 är slut. Nu vet pappa att jag bor HÄR. Ryggen värker av allt bärande. |
| 0:41 | toast | guld | ✅ |
| 0:41 | händelse | printKlar | sak=kruka n=60 |
| 0:41 | väntar | info:fel | Göran snodde en nyckelring. |
| 0:41 | sak | info:fel | Göran snodde en nyckelring. |
| 0:41 | kvitto-visas | info:fel | Göran snodde en nyckelring. |
| 0:41 | toast | fel | Göran snodde en nyckelring. |
| 0:42 | händelse | tagitUrPrint | sak=kruka n=1 |
| 0:43 | klar | info:fel | Göran snodde en nyckelring. |
| 0:55 | webb | du | packade 1 kruka |
| 1:03 | webb | du | packade 1 nyckelring |
| 1:18 | väntar | info:bra | 📦 Paketet till Kenneth på bilskroten ligger i postlådan – Rolf tar det till posten |
| 1:18 | sak | info:bra | 📦 Paketet till Kenneth på bilskroten ligger i postlådan – Rolf tar det till posten |
| 1:18 | kvitto-visas | info:bra | 📦 Paketet till Kenneth på bilskroten ligger i postlådan – Rolf tar det till posten |
| 1:18 | toast | bra | 📦 Paketet till Kenneth på bilskroten ligger i postlådan – Rolf tar det till posten |
| 1:18 | väntar | info:bra | 📦 Paketet till Två syskon i Lund ligger i postlådan – Rolf tar det till posten |
| 1:20 | klar | info:bra | 📦 Paketet till Kenneth på bilskroten ligger i postlådan – Rolf tar det till posten |
| 1:20 | sak | info:bra | 📦 Paketet till Två syskon i Lund ligger i postlådan – Rolf tar det till posten |
| 1:20 | kvitto-visas | info:bra | 📦 Paketet till Två syskon i Lund ligger i postlådan – Rolf tar det till posten |
| 1:20 | toast | bra | 📦 Paketet till Två syskon i Lund ligger i postlådan – Rolf tar det till posten |
| 1:22 | klar | info:bra | 📦 Paketet till Två syskon i Lund ligger i postlådan – Rolf tar det till posten |
| 1:22 | händelse | printStart | sak=n2_vas |
| 1:26 | toast | guld | ✅ |
| 1:26 | händelse | printKlar | sak=n2_vas n=5 |
| 1:26 | händelse | tagitUrPrint | sak=n2_vas n=1 |
| 1:33 | röst | ali | Satt med AI:n hela natten igen. Fråga inte vad. Okej, en soffa. Fråga inte. · STORY |
| 1:33 | butiksbubbla | ali | Satt med AI:n hela natten igen. Fråga inte vad. Okej, en soffa. Fråga inte. |
| 1:35 | aliSalt | ali | 1185 |
| 1:44 | skratt | du | kvarnen rapar |
| 1:49 | toast | guld | 🧵 |
| 1:50 | händelse | printStart | sak=n2_vas |
| 1:53 | toast | guld | ✅ |
| 1:53 | händelse | printKlar | sak=n2_vas n=6 |
| 1:54 | händelse | tagitUrPrint | sak=n2_vas n=1 |
| 1:56 | toast | guld | 🧵 |
| 1:59 | upplåst | skrivare | skrivare3 |
| 1:59 | brott | UPPLÅST | skrivare3 (skrivare 730 av 75) |
| 1:59 | händelse | upplast | id=skrivare3 flask=skrivare |
| 1:59 | paket |  | tanke → sms |
| 1:59 | tanke | du | Skrivarna står aldrig still. Jag behöver en större. |
| 1:59 | väntar | du | Skrivarna står aldrig still. Jag behöver en större. |
| 1:59 | väntar | ali | Ali här. Skrivare L. En meter byggvolym. Jag bad AI:n om något stort. Den gjorde något ENORMT. Den är större än min butik. Nästan. |
| 1:59 | sak | du | Skrivarna står aldrig still. Jag behöver en större. |
| 1:59 | notis | tanke | 💭 Skrivarna står aldrig still. Jag behöver en större. |
| 1:59 | röst | du | Skrivarna står aldrig still. Jag behöver en större. · STORY |
| 2:02 | aliSalt | ali | 1126 |
| 2:03 | klar | du | Skrivarna står aldrig still. Jag behöver en större. |
| 2:07 | skratt | du | Alis dyr-pling |
| 2:07 | toast | guld | 3D-modell köpt – printa skrivare l på skrivaren |
| 2:07 | händelse | kopt | sak=skrivare3 |
| 2:07 | struken | ali | Ali här. Skrivare L. En meter byggvolym. Jag bad AI:n om något stort. Den gjorde något ENORMT. Den är större än min butik. Nästan. |
| 2:15 | händelse | printStart | sak=byggsats:skrivare3 |
| 2:20 | toast | bra | Del 1 av 6 klar |
| 2:25 | toast | bra | Del 2 av 6 klar |
| 2:27 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 2:32 | väntar | rolf | Hittade Birgittas gamla kaffekopp under sängen i husvagnen. Ja dricker inte ur den. Ja bara tittar på den. /R |
| 2:32 | väntar | bror | Pappa kom hem och sa att Rolf var "en riktig räv bakom örat". Sen satte han på hockeyn. Det var allt. |
| 2:33 | väntar | värld:Mjau. | Mjau. |
| 2:41 | sak | värld:Mjau. | Mjau. |
| 2:41 | bubbla |  | Mjau. |
| 2:42 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 2:42 | väntar | notis:Skrivare M: Tornet är tomt – mal mer så  | Skrivare M: Tornet är tomt – mal mer så fortsätter den |
| 2:43 | klar | värld:Mjau. | Mjau. |
| 2:43 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 2:44 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 2:45 | toast | bra | Del 3 av 6 klar |
| 2:46 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 2:46 | skratt | du | kvarnen spottar |
| 2:47 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 2:48 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 2:49 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 2:50 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 2:50 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 2:51 | toast | bra | Del 4 av 6 klar |
| 2:51 | sak | notis:Skrivare M: Tornet är tomt – mal mer så  | Skrivare M: Tornet är tomt – mal mer så fortsätter den |
| 2:51 | notis | fel | Skrivare M: Tornet är tomt – mal mer så fortsätter den |
| 2:52 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 2:53 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 2:53 | klar | notis:Skrivare M: Tornet är tomt – mal mer så  | Skrivare M: Tornet är tomt – mal mer så fortsätter den |
| 2:54 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 2:55 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 2:56 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 3:08 | toast | bra | Del 5 av 6 klar |
| 3:08 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 3:10 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 3:11 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 3:12 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 3:13 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 3:14 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 3:14 | händelse | printKlar | sak=byggsats:skrivare3 n=1 |
| 3:14 | toast | guld | ✅ |
| 3:22 | händelse | tagitUrPrint | sak=byggsats:skrivare3 n=1 |
| 3:22 | paket |  | sms |
| 3:22 | väntar | ali | Ali här. Jag såg Skrivare L på avstånd. Ett streck blev lite snett. Mitt fel. Vackert ändå. |
| 3:24 | händelse | placerat | sak=skrivare3 |
| 3:24 | händelse | malKlart | id=r8-bygg-skrivare-l del=Dag 8 – Magnetpistolen nasta=r8-bygg-magnetpistolen |
| 3:24 | väntar | du | Plocka skräp och mal det. |
| 3:24 | MÅL |  | Plocka skräp och mal det |
| 3:24 | upplåst | bara | magnet |
| 3:24 | brott | UPPLÅST | magnet (bara 13 av 6) |
| 3:24 | händelse | upplast | id=magnet flask=bara |
| 3:24 | paket |  | tanke → sms |
| 3:24 | tanke | du | En tunna i taget på säckkärran. Det måste gå fortare. |
| 3:24 | väntar | du | En tunna i taget på säckkärran. Det måste gå fortare. |
| 3:24 | väntar | ali | Ali här. Jag har inte sovit på tre dygn. 🧲 MAGNETPISTOL. Den drog åt sig min nyckelknippa, min klocka och nästan en tand. Det här är framtiden, min vän. Du kommer gilla den. Jag gillar den. Säg inte till nån att jag gillar nåt. |
| 3:26 | sak | du | Plocka skräp och mal det. |
| 3:26 | målruta |  | Bygg magnetpistolen |
| 3:26 | pil |  | Bygg magnetpistolen |
| 3:26 | röst | du | Bygg magnetpistolen. · MÅL |
| 3:28 | klar | du | Bygg magnetpistolen. |
| 3:28 | kvittens-bock |  | ✓ Bygg Skrivare L |
| 3:34 | skratt | du | falsk tuta |
| 3:36 | sak | ali | Ali här. Jag har inte sovit på tre dygn. 🧲 MAGNETPISTOL. Den drog åt sig min nyckelknippa, min klocka och nästan en tand. Det här är framtiden, min vän. Du kommer gilla den. Jag gillar den. Säg inte till nån att jag gillar nåt. |
| 3:36 | sms | ali | Ali här. Jag har inte sovit på tre dygn. 🧲 MAGNETPISTOL. Den drog åt sig min nyckelknippa, min klocka och nästan en tand. Det här är framtiden, min vän. Du kommer gilla den. Jag gillar den. Säg inte till nån att jag gillar nåt. |
| 3:36 | sms-bubbla | ali | Ali här. Jag har inte sovit på tre dygn. 🧲 MAGNETPISTOL. Den drog åt sig min nyckelknippa, min klocka och nästan en tand. Det här är framtiden, min vän. Du kommer gilla den. Jag gillar den. Säg inte till nån att jag gillar nåt. |
| 3:36 | röst | ali | Ali här. Jag har inte sovit på tre dygn. 🧲 MAGNETPISTOL. Den drog åt sig min nyckelknippa, min klocka och nästan en tand. Det här är framtiden, min vän. Du kommer gilla den. Jag gillar den. Säg inte till nån att jag gillar nåt. · STORY |
| 3:36 | skratt | du | Alis dyr-pling |
| 3:36 | toast | guld | 3D-modell köpt – printa magnetpistol på skrivaren |
| 3:36 | händelse | kopt | sak=magnet |
| 3:42 | väntar | mamma | Sover du ordentligt? Du ser trött ut. Jag vet att jag inte kan se dig. Men jag vet. |
| 3:46 | händelse | printStart | sak=byggsats:magnet |
| 3:48 | toast | bra | Del 1 av 3 klar |
| 3:50 | toast | bra | Del 2 av 3 klar |
| 3:51 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 3:55 | klar | ali | Ali här. Jag har inte sovit på tre dygn. 🧲 MAGNETPISTOL. Den drog åt sig min nyckelknippa, min klocka och nästan en tand. Det här är framtiden, min vän. Du kommer gilla den. Jag gillar den. Säg inte till nån att jag gillar nåt. |
| 3:56 | väntar | värld:TUUT TUUT! | TUUT TUUT! |
| 3:57 | skratt | du | kvarnen rapar |
| 3:57 | struken | ali | Ali här. Jag såg Skrivare L på avstånd. Ett streck blev lite snett. Mitt fel. Vackert ändå. |
| 4:00 | händelse | printKlar | sak=byggsats:magnet n=1 |
| 4:00 | toast | guld | ✅ |
| 4:03 | sak | du | En tunna i taget på säckkärran. Det måste gå fortare. |
| 4:03 | notis | tanke | 💭 En tunna i taget på säckkärran. Det måste gå fortare. |
| 4:03 | röst | du | En tunna i taget på säckkärran. Det måste gå fortare. · STORY |
| 4:04 | toast | guld | 🧵 |
| 4:05 | väntar | info:guld | 🧲 Magnetpistolen är klar! Den ligger i verktygsraden – gripen har du kvar på plats 1. |
| 4:05 | händelse | tagitUrPrint | sak=byggsats:magnet n=1 |
| 4:05 | struken | kedja | magnet |
| 4:05 | händelse | malKlart | id=r8-bygg-magnetpistolen del=Dag 8 – Magnetpistolen nasta=r8-mal-tunga-saker |
| 4:05 | händelse | malKlart | id=r8-mal-tunga-saker del=Dag 8 – Magnetpistolen nasta=r8-bygg-batteribank |
| 4:05 | MÅL |  | Printa och sälj |
| 4:08 | klar | du | En tunna i taget på säckkärran. Det måste gå fortare. |
| 4:08 | sak | info:guld | 🧲 Magnetpistolen är klar! Den ligger i verktygsraden – gripen har du kvar på plats 1. |
| 4:08 | kvitto-visas | info:guld | 🧲 Magnetpistolen är klar! Den ligger i verktygsraden – gripen har du kvar på plats 1. |
| 4:08 | toast | guld | 🧲 Magnetpistolen är klar! Den ligger i verktygsraden – gripen har du kvar på plats 1. |
| 4:08 | målruta |  | Printa och sälj |
| 4:09 | kvittens-bock |  | ✓ Bygg magnetpistolen |
| 4:09 | kvittens-bock |  | ✓ Mal tunga saker i PETG-kvarnen · 3/3 |
| 4:09 | toast | guld | 🧵 |
| 4:10 | klar | info:guld | 🧲 Magnetpistolen är klar! Den ligger i verktygsraden – gripen har du kvar på plats 1. |
| 4:12 | sak | du | (nytt mål i rutan) |
| 4:12 | pil |  | Printa och sälj |
| 4:12 | klar | du | (nytt mål i rutan) |
| 4:14 | struken | värld:TUUT TUUT! | TUUT TUUT! |
| 4:15 | händelse | printStart | sak=n2_vas |
| 4:18 | toast | guld | ✅ |
| 4:18 | händelse | printKlar | sak=n2_vas n=7 |
| 4:19 | händelse | tagitUrPrint | sak=n2_vas n=1 |
| 4:28 | aliSalt | ali | 1069 |
| 4:30 | väntar | mamma | Mormor frågar om du har träffat någon på soptippen. Jag sa att du har en sopgubbe och en katt. Hon blev jätteglad. |
| 4:36 | händelse | printStart | sak=n2_vas |
| 4:39 | toast | guld | ✅ |
| 4:39 | händelse | printKlar | sak=n2_vas n=8 |
| 4:40 | händelse | tagitUrPrint | sak=n2_vas n=1 |
| 4:44 | skratt | du | tummen på fotot |
| 4:44 | väntar | foto | Magneten (och min tumme) |
| 4:44 | paket |  | tanke |
| 4:44 | tanke | du | Nu kommer allt till mig i stället. |
| 4:44 | väntar | du | Nu kommer allt till mig i stället. |
| 4:44 | sak | foto | Magneten (och min tumme) |
| 4:44 | foto | du | Magneten (och min tumme) |
| 4:46 | klar | foto | Magneten (och min tumme) |
| 4:48 | aliSalt | ali | 1016 |
| 4:54 | sak | du | Nu kommer allt till mig i stället. |
| 4:54 | notis | tanke | 💭 Nu kommer allt till mig i stället. |
| 4:54 | röst | du | Nu kommer allt till mig i stället. · STORY |
| 4:57 | klar | du | Nu kommer allt till mig i stället. |
| 4:58 | händelse | printStart | sak=n2_vas |
| 5:01 | toast | guld | ✅ |
| 5:01 | händelse | printKlar | sak=n2_vas n=9 |
| 5:02 | händelse | tagitUrPrint | sak=n2_vas n=1 |
| 5:10 | aliSalt | ali | 965 |
| 5:19 | händelse | printStart | sak=n2_vas |
| 5:22 | toast | guld | ✅ |
| 5:22 | händelse | printKlar | sak=n2_vas n=10 |
| 5:23 | händelse | tagitUrPrint | sak=n2_vas n=1 |
| 5:31 | aliSalt | ali | 917 |
| 5:44 | skratt | du | kvarnen rapar |
| 5:44 | skratt | du | däcket rullar iväg |
| 5:48 | toast | guld | 🧵 |
| 5:50 | händelse | printStart | sak=n2_vas |
| 5:51 | skratt | du | falsk tuta |
| 5:51 | väntar | värld:TUUT! Hej grannen! | TUUT! Hej grannen! |
| 5:51 | sak | värld:TUUT! Hej grannen! | TUUT! Hej grannen! |
| 5:51 | bubbla |  | TUUT! Hej grannen! |
| 5:53 | toast | guld | ✅ |
| 5:53 | händelse | printKlar | sak=n2_vas n=11 |
| 5:54 | klar | värld:TUUT! Hej grannen! | TUUT! Hej grannen! |
| 5:54 | händelse | tagitUrPrint | sak=n2_vas n=1 |
| 6:03 | aliSalt | ali | 871 |
| 6:12 | händelse | printStart | sak=n2_vas |
| 6:12 | skratt | du | Kajsa i skrivaren |
| 6:14 | väntar | mamma | Sover du ordentligt? Du ser trött ut. Jag vet att jag inte kan se dig. Men jag vet. |
| 6:15 | toast | guld | ✅ |
| 6:15 | händelse | printKlar | sak=n2_vas n=12 |
| 6:16 | händelse | tagitUrPrint | sak=n2_vas n=1 |
| 6:24 | aliSalt | ali | 830 |
| 6:37 | skratt | du | kvarnen rapar |
| 6:40 | toast | guld | 🧵 |
| 6:43 | händelse | printStart | sak=n2_vas |
| 6:46 | toast | guld | ✅ |
| 6:46 | händelse | printKlar | sak=n2_vas n=13 |
| 6:47 | händelse | tagitUrPrint | sak=n2_vas n=1 |
| 6:47 | toast | guld | 🧵 |
| 6:55 | aliSalt | ali | 830 |
| 7:05 | händelse | printStart | sak=n2_vas |
| 7:08 | toast | guld | ✅ |
| 7:08 | händelse | printKlar | sak=n2_vas n=14 |
| 7:09 | händelse | tagitUrPrint | sak=n2_vas n=1 |
| 7:17 | aliSalt | ali | 830 |
| 7:22 | upplåst | strom | bank |
| 7:22 | brott | RESERV | bank (strom 0 av 15) |
| 7:22 | händelse | upplast | id=bank flask=strom |
| 7:22 | paket |  | sms |
| 7:22 | väntar | ali | Ali här. Batteribank. Sparar solen till kvällen. Som en kyl, fast för ström. |
| 7:23 | sak | ali | Ali här. Batteribank. Sparar solen till kvällen. Som en kyl, fast för ström. |
| 7:23 | sms | ali | Ali här. Batteribank. Sparar solen till kvällen. Som en kyl, fast för ström. |
| 7:23 | sms-bubbla | ali | Ali här. Batteribank. Sparar solen till kvällen. Som en kyl, fast för ström. |
| 7:23 | röst | ali | Ali här. Batteribank. Sparar solen till kvällen. Som en kyl, fast för ström. · STORY |
| 7:26 | händelse | printStart | sak=n2_vas |
| 7:29 | klar | ali | Ali här. Batteribank. Sparar solen till kvällen. Som en kyl, fast för ström. |
| 7:29 | toast | guld | ✅ |
| 7:29 | händelse | printKlar | sak=n2_vas n=15 |
| 7:30 | händelse | tagitUrPrint | sak=n2_vas n=1 |
| 7:38 | aliSalt | ali | 830 |
| 7:42 | skratt | du | Alis dyr-pling |
| 7:42 | toast | guld | 3D-modell köpt – printa batteribank på skrivaren |
| 7:42 | händelse | kopt | sak=bank |
| 7:50 | händelse | printStart | sak=byggsats:bank |
| 7:50 | toast | bra | 🔗 Slangen kopplad |
| 7:52 | toast | bra | Del 1 av 2 klar |
| 7:54 | händelse | printKlar | sak=byggsats:bank n=1 |
| 7:54 | toast | guld | ✅ |
| 7:54 | händelse | tagitUrPrint | sak=byggsats:bank n=1 |
| 8:00 | händelse | placerat | sak=bank |
| 8:00 | händelse | malKlart | id=r8-bygg-batteribank del=Dag 8 – Magnetpistolen nasta=hylla8 |
| 8:00 | väntar | du | Bygg hyllan. |
| 8:00 | målruta |  | Bygg hyllan |
| 8:01 | MÅL |  | Bygg hyllan |
| 8:02 | sak | du | Bygg hyllan. |
| 8:02 | pil |  | Bygg hyllan |
| 8:02 | röst | du | Bygg hyllan. · MÅL |
| 8:02 | nick |  | nick:75 |
| 8:04 | klar | du | Bygg hyllan. |
| 8:04 | kvittens-bock |  | ✓ Bygg en batteribank |
| 8:17 | toast | guld | 🗄️ Hyllan ligger i handen – klicka på skjulet för att sätta upp den |
| 8:17 | händelse | kopt | sak=hylla |
| 8:17 | röst | ali | En hylla. Den lutar lite. Det är karaktär. · STORY |
| 8:17 | butiksbubbla | ali | En hylla. Den lutar lite. Det är karaktär. |
| 8:23 | väntar | info:guld | 🗄️ Hyllan sitter i skjulet – 8 platser till i förrådet |
| 8:23 | monterat | du | byggsats:hylla |
| 8:23 | händelse | monterat | sak=hylla |
| 8:23 | sak | info:guld | 🗄️ Hyllan sitter i skjulet – 8 platser till i förrådet |
| 8:23 | kvitto-visas | info:guld | 🗄️ Hyllan sitter i skjulet – 8 platser till i förrådet |
| 8:23 | toast | guld | 🗄️ Hyllan sitter i skjulet – 8 platser till i förrådet |
| 8:23 | paket |  | tanke |
| 8:23 | tanke | du | En hylla. Jag har en hylla. Saker har en plats nu. |
| 8:23 | väntar | du | En hylla. Jag har en hylla. Saker har en plats nu. |
| 8:23 | händelse | malKlart | id=hylla8 del=Dag 8 – Magnetpistolen nasta=sov8 |
| 8:23 | paket |  | lapp |
| 8:23 | väntar | du | Dag 8 är slut. Strömmen räcker inte till alla skrivare. |
| 8:23 | MÅL |  | Klart för idag – sov när du vill |
| 8:25 | klar | info:guld | 🗄️ Hyllan sitter i skjulet – 8 platser till i förrådet |
| 8:25 | sak | du | En hylla. Jag har en hylla. Saker har en plats nu. |
| 8:25 | kvitto-visas | du | En hylla. Jag har en hylla. Saker har en plats nu. |
| 8:25 | notis | tanke | 💭 En hylla. Jag har en hylla. Saker har en plats nu. |
| 8:25 | röst | du | En hylla. Jag har en hylla. Saker har en plats nu. · REAKTION |
| 8:26 | målruta |  | Klart för idag – sov när du vill |
| 8:27 | kvittens-bock |  | ✓ Bygg hyllan |
| 8:29 | klar | du | En hylla. Jag har en hylla. Saker har en plats nu. |
| 8:29 | sak | du | (nytt mål i rutan) |
| 8:29 | pil |  | Klart för idag – sov när du vill |
| 8:29 | klar | du | (nytt mål i rutan) |
| 8:30 | väntar | notis:🌇 Klockan är 21. Ali slår igen luckan.  | 🌇 Klockan är 21. Ali slår igen luckan. Dagens jobb är klart – gå in i skjulet och sov i sängen. |
| 8:31 | sak | du | Dag 8 är slut. Strömmen räcker inte till alla skrivare. |
| 8:31 | lapp | 📔 Dagbok | Dag 8 är slut. Strömmen räcker inte till alla skrivare. |
| 8:31 | meddelande | du | Dag 8 är slut. Strömmen räcker inte till alla skrivare. |
| 8:31 | dagbokkort | du | Dag 8 är slut. Strömmen räcker inte till alla skrivare. |
| 8:31 | röst | du | Dag 8. 14 dagar till jul. Dag 8 är slut. Strömmen räcker inte till alla skrivare. · STORY |
| 8:39 | händelse | brevLast | id=kvall8 |
| 8:39 | klar | du | Dag 8 är slut. Strömmen räcker inte till alla skrivare. |
| 8:41 | struken | notis:🌇 Klockan är 21. Ali slår igen luckan.  | 🌇 Klockan är 21. Ali slår igen luckan. Dagens jobb är klart – gå in i skjulet och sov i sängen. |
| 8:41 | struken | bror | Pappa kom hem och sa att Rolf var "en riktig räv bakom örat". Sen satte han på hockeyn. Det var allt. |
| 8:41 | struken | mamma | Mormor frågar om du har träffat någon på soptippen. Jag sa att du har en sopgubbe och en katt. Hon blev jätteglad. |
| 8:44 | webbBetalt | du | 109 |

<details><summary>Botens handlingar dag 8</summary>

- 0:00 — dag 8 börjar — (7742 kr)
- 0:08 popup: "FORTSÄTT" (7742 kr)
- 0:20 gå till skrivaren (17 m) (7742 kr)
- 0:21 printar Nyckelring (7742 kr)
- 0:24 tar ut 1 st ur skrivaren (7742 kr)
- 0:25 printar Nyckelring (7742 kr)
- 0:28 tar ut 1 st ur skrivaren (7742 kr)
- 0:29 printar Blomkruka (7742 kr)
- 0:39 popup: "FORTSÄTT" (7742 kr)
- 0:42 tar ut 1 st ur skrivaren (7742 kr)
- 0:46 gå till datorn (18 m) (7742 kr)
- 0:54 panel: "Webbshopen · Soptippsvägen 1
B" (7742 kr)
- 1:03 panel: "Webbshopen · Soptippsvägen 1
B" (7742 kr)
- 1:12 panel: "Webbshopen · Soptippsvägen 1
B" (7742 kr)
- 1:18 gå till Rolfs postlåda (paket) (29 m) (7742 kr)
- 1:19 webbshop: 2 paket i postlådan (7742 kr)
- 1:19 tjänar pengar till väntar på flaskhalsen för skrivare3: 7742/7782 kr → printar designvas i röd petg (1185 kr) (7742 kr)
- 1:21 gå till skrivaren (10 m) (7742 kr)
- 1:22 printar Designvas i röd PETG (7742 kr)
- 1:27 tar ut 1 st ur skrivaren (7742 kr)
- 1:33 gå till Ali (30 m) (7742 kr)
- 1:33 öppnar Alis butik – sälja (7742 kr)
- 1:35 säljer hos Ali: +1185 kr (8927 kr)
- 1:37 tjänar pengar till väntar på flaskhalsen för skrivare3: 8927/8967 kr → printar designvas i röd petg (1126 kr) (8927 kr)
- 1:39 gå till en tunna (12 m) (8927 kr)
- 1:44 gå till PETG-kvarnen (20 m) (8927 kr)
- 1:44 tömmer det tunga i PETG-kvarnen (8927 kr)
- 1:49 gå till skrivaren (1 m) (8927 kr)
- 1:50 printar Designvas i röd PETG (8927 kr)
- 1:55 tar ut 1 st ur skrivaren (8927 kr)
- 2:01 gå till Ali (31 m) (8927 kr)
- 2:01 öppnar Alis butik – sälja (8927 kr)
- 2:03 säljer hos Ali: +1126 kr (10053 kr)
- 2:05 öppnar Alis butik – köpa skrivare l (10053 kr)
- 2:08 köper skrivare3 för 3500 kr (6553 kr)
- 2:14 gå till skrivaren (24 m) (6553 kr)
- 2:15 printar Skrivare L (6 delar) (6553 kr)
- 2:37 plockar 7 skräp på tippen (bär max 16) (6553 kr)
- 2:40 gå till kvarnen (13 m) (6553 kr)
- 3:03 plockar 7 skräp på tippen (bär max 16) (6553 kr)
- 3:06 gå till kvarnen (13 m) (6553 kr)
- 3:22 gå till skrivaren (5 m) (6553 kr)
- 3:22 tar ut 1 st ur skrivaren (6553 kr)
- 3:23 gå till platsen för skrivare l (5 m) (6553 kr)
- 3:24 ställer ut skrivare l (6553 kr)
- 3:35 gå till Ali (22 m) (6553 kr)
- 3:35 öppnar Alis butik – köpa magnetpistol (6553 kr)
- 3:37 köper magnet för 2400 kr (4153 kr)
- 3:44 gå till skrivaren (29 m) (4153 kr)
- 3:46 printar Magnetpistol (3 delar) (4153 kr)
- 3:54 gå till en tunna (13 m) (4153 kr)
- 3:57 gå till PETG-kvarnen (7 m) (4153 kr)
- 3:57 tömmer det tunga i PETG-kvarnen (4153 kr)
- 4:05 gå till skrivaren (4 m) (4153 kr)
- 4:05 tar ut 1 st ur skrivaren (4153 kr)
- 4:14 tjänar pengar till väntar på flaskhalsen för bank: 4153/4193 kr → printar designvas i röd petg (1069 kr) (4153 kr)
- 4:15 printar Designvas i röd PETG (4153 kr)
- 4:20 tar ut 1 st ur skrivaren (4153 kr)
- 4:26 gå till Ali (31 m) (4153 kr)
- 4:26 öppnar Alis butik – sälja (4153 kr)
- 4:28 säljer hos Ali: +1069 kr (5222 kr)
- 4:29 tjänar pengar till väntar på flaskhalsen för bank: 5222/5262 kr → printar designvas i röd petg (1016 kr) (5222 kr)
- 4:35 gå till skrivaren (29 m) (5222 kr)
- 4:36 printar Designvas i röd PETG (5222 kr)
- 4:41 tar ut 1 st ur skrivaren (5222 kr)
- 4:47 gå till Ali (29 m) (5222 kr)
- 4:47 öppnar Alis butik – sälja (5222 kr)
- 4:48 säljer hos Ali: +1016 kr (6238 kr)
- 4:50 tjänar pengar till väntar på flaskhalsen för bank: 6238/6278 kr → printar designvas i röd petg (965 kr) (6238 kr)
- 4:56 gå till skrivaren (29 m) (6238 kr)
- 4:58 printar Designvas i röd PETG (6238 kr)
- 5:02 tar ut 1 st ur skrivaren (6238 kr)
- 5:08 gå till Ali (29 m) (6238 kr)
- 5:08 öppnar Alis butik – sälja (6238 kr)
- 5:10 säljer hos Ali: +965 kr (7203 kr)
- 5:12 tjänar pengar till väntar på flaskhalsen för bank: 7203/7243 kr → printar designvas i röd petg (917 kr) (7203 kr)
- 5:18 gå till skrivaren (29 m) (7203 kr)
- 5:19 printar Designvas i röd PETG (7203 kr)
- 5:24 tar ut 1 st ur skrivaren (7203 kr)
- 5:30 gå till Ali (29 m) (7203 kr)
- 5:30 öppnar Alis butik – sälja (7203 kr)
- 5:31 säljer hos Ali: +917 kr (8120 kr)
- 5:33 tjänar pengar till väntar på flaskhalsen för bank: 8120/8160 kr → printar designvas i röd petg (871 kr) (8120 kr)
- 5:40 gå till en tunna (35 m) (8120 kr)
- 5:44 gå till PETG-kvarnen (10 m) (8120 kr)
- 5:44 tömmer det tunga i PETG-kvarnen (8120 kr)
- 5:49 gå till skrivaren (3 m) (8120 kr)
- 5:50 printar Designvas i röd PETG (8120 kr)
- 5:55 tar ut 1 st ur skrivaren (8120 kr)
- 6:01 gå till Ali (31 m) (8120 kr)
- 6:01 öppnar Alis butik – sälja (8120 kr)
- 6:03 säljer hos Ali: +871 kr (8991 kr)
- 6:05 tjänar pengar till väntar på flaskhalsen för bank: 8991/9031 kr → printar designvas i röd petg (830 kr) (8991 kr)
- 6:11 gå till skrivaren (29 m) (8991 kr)
- 6:12 printar Designvas i röd PETG (8991 kr)
- 6:17 tar ut 1 st ur skrivaren (8991 kr)
- 6:23 gå till Ali (29 m) (8991 kr)
- 6:23 öppnar Alis butik – sälja (8991 kr)
- 6:24 säljer hos Ali: +830 kr (9821 kr)
- 6:26 tjänar pengar till väntar på flaskhalsen för bank: 9821/9861 kr → printar designvas i röd petg (830 kr) (9821 kr)
- 6:33 gå till en tunna (36 m) (9821 kr)
- 6:37 gå till PETG-kvarnen (11 m) (9821 kr)
- 6:37 tömmer det tunga i PETG-kvarnen (9821 kr)
- 6:41 gå till skrivaren (3 m) (9821 kr)
- 6:43 printar Designvas i röd PETG (9821 kr)
- 6:47 tar ut 1 st ur skrivaren (9821 kr)
- 6:54 gå till Ali (31 m) (9821 kr)
- 6:54 öppnar Alis butik – sälja (9821 kr)
- 6:56 säljer hos Ali: +830 kr (10651 kr)
- 6:57 tjänar pengar till väntar på flaskhalsen för bank: 10651/10691 kr → printar designvas i röd petg (830 kr) (10651 kr)
- 7:03 gå till skrivaren (29 m) (10651 kr)
- 7:05 printar Designvas i röd PETG (10651 kr)
- 7:09 tar ut 1 st ur skrivaren (10651 kr)
- 7:15 gå till Ali (29 m) (10651 kr)
- 7:15 öppnar Alis butik – sälja (10651 kr)
- 7:17 säljer hos Ali: +830 kr (11481 kr)
- 7:19 tjänar pengar till väntar på flaskhalsen för bank: 11481/11521 kr → printar designvas i röd petg (830 kr) (11481 kr)
- 7:25 gå till skrivaren (29 m) (11481 kr)
- 7:26 printar Designvas i röd PETG (11481 kr)
- 7:31 tar ut 1 st ur skrivaren (11481 kr)
- 7:37 gå till Ali (29 m) (11481 kr)
- 7:37 öppnar Alis butik – sälja (11481 kr)
- 7:39 säljer hos Ali: +830 kr (12311 kr)
- 7:40 öppnar Alis butik – köpa batteribank (12311 kr)
- 7:43 köper bank för 800 kr (11511 kr)
- 7:48 gå till skrivaren (23 m) (11511 kr)
- 7:50 printar Batteribank (2 delar) (11511 kr)
- 7:54 tar ut 1 st ur skrivaren (11511 kr)
- 7:59 gå till platsen för batteribank (26 m) (11511 kr)
- 8:00 ställer ut batteribank (11511 kr)
- 8:15 gå till Ali (43 m) (11511 kr)
- 8:15 öppnar Alis butik – köpa hylla (11511 kr)
- 8:17 köper hylla för 150 kr (11361 kr)
- 8:23 gå till sätt upp hyllan i skjulet (19 m) (11361 kr)
- 8:39 popup: "FORTSÄTT" (11361 kr)
- 8:41 gå till sängen (1 m) (11361 kr)

</details>

## Dag 9

| Tid | Källa | Vem | Text |
|---|---|---|---|
| 8:44 | vara | ali | ingen |
| 8:44 | händelse | malKlart | id=sov8 del=Dag 8 – Magnetpistolen nasta=r9-kop-receptet-cykelhjalmen |
| 8:44 | MÅL |  | Köp receptet på cykelhjälmen hos Ali |
| 0:01 | vara | ali | n2_vas |
| 0:01 | händelse | dagenBorjar | dag=9 |
| 0:01 | meddelande | du | Dag 9. 13 dagar till jul. Utan fler skrivare hinner jag inte till jul. |
| 0:01 | dagbokkort | du | Solcellsparken · Dag 9. 13 dagar till jul. Utan fler skrivare hinner jag inte till jul. |
| 0:01 | röst | du | Dag 9. 13 dagar till jul. Solcellsparken. Utan fler skrivare hinner jag inte till jul. · STORY |
| 0:09 | notis | nytt | Ali vill ha idag: Designvas i röd PETG – +50 % hela dagen (1185 kr just nu)🖥️ Webbshopen: 2 paket levererade · +109 kr📈 Igår: 14 printat · 11 sålt |
| 0:09 | händelse | morgonkortStangt | dag=9 |
| 0:09 | paket |  | sms |
| 0:09 | väntar | ali | Ali här. Större ryggsäck. Min son hade den i lumpen. Han kom hem med fler grejer än han åkte iväg med. |
| 0:09 | struken | kedja | d9 |
| 0:09 | väntar | du | Cykelhjälmar i röd plast. Säljer bra, säger Ali. |
| 0:09 | målruta |  | Köp receptet på cykelhjälmen hos Ali |
| 0:14 | sak | du | Cykelhjälmar i röd plast. Säljer bra, säger Ali. |
| 0:14 | pil |  | Köp receptet på cykelhjälmen hos Ali |
| 0:14 | notis | tanke | 💭 Cykelhjälmar i röd plast. Säljer bra, säger Ali. |
| 0:14 | röst | du | Cykelhjälmar i röd plast. Säljer bra, säger Ali. · MÅL |
| 0:14 | nick |  | nick:77 |
| 0:18 | klar | du | Cykelhjälmar i röd plast. Säljer bra, säger Ali. |
| 0:20 | struken | mamma | Sover du ordentligt? Du ser trött ut. Jag vet att jag inte kan se dig. Men jag vet. |
| 0:23 | röst | ali | Salam. Ja, ja, jag har nya grejer. Som vanligt. Varje dag. · STORY |
| 0:23 | butiksbubbla | ali | Salam. Ja, ja, jag har nya grejer. Som vanligt. Varje dag. |
| 0:25 | skratt | du | Alis dyr-pling |
| 0:25 | händelse | kopt | sak=n2_hjalm |
| 0:26 | händelse | malKlart | id=r9-kop-receptet-cykelhjalmen del=Dag 9 – Solcellsparken nasta=r9-bygg-solcellspark |
| 0:26 | målruta |  | Printa och sälj |
| 0:26 | MÅL |  | Printa och sälj |
| 0:26 | sak | du | (nytt mål i rutan) |
| 0:26 | pil |  | Printa och sälj |
| 0:27 | klar | du | (nytt mål i rutan) |
| 0:30 | kvittens-bock |  | ✓ Köp receptet på cykelhjälmen hos Ali |
| 0:36 | händelse | printStart | sak=n2_vas |
| 0:39 | skratt | du | plastspagetti |
| 0:39 | toast | guld | ✅ |
| 0:39 | händelse | printKlar | sak=n2_vas n=16 |
| 0:40 | händelse | tagitUrPrint | sak=spagetti n=1 |
| 0:42 | händelse | printStart | sak=n2_vas |
| 0:45 | toast | guld | ✅ |
| 0:45 | händelse | printKlar | sak=n2_vas n=17 |
| 0:46 | händelse | tagitUrPrint | sak=n2_vas n=1 |
| 0:49 | skratt | du | falsk tuta |
| 0:54 | skratt | du | kvarnen rapar |
| 0:56 | väntar | info:fel | Göran snodde plastspagetti (modern konst). |
| 0:56 | sak | info:fel | Göran snodde plastspagetti (modern konst). |
| 0:56 | kvitto-visas | info:fel | Göran snodde plastspagetti (modern konst). |
| 0:56 | toast | fel | Göran snodde plastspagetti (modern konst). |
| 0:57 | toast | guld | 🧵 |
| 0:58 | klar | info:fel | Göran snodde plastspagetti (modern konst). |
| 1:00 | händelse | printStart | sak=n2_vas |
| 1:03 | toast | guld | ✅ |
| 1:03 | händelse | printKlar | sak=n2_vas n=18 |
| 1:04 | händelse | tagitUrPrint | sak=n2_vas n=1 |
| 1:18 | väntar | bud | (tips) |
| 1:18 | sak | bud | (tips) |
| 1:18 | webb | du | packade 1 n2_vas |
| 1:19 | klar | bud | (tips) |
| 1:27 | meddelande | mamma | Har du varma strumpor? Det ska bli kallt! |
| 1:28 | röst | mamma | Har du varma strumpor? Det ska bli kallt! · STORY |
| 1:34 | paket |  | sms |
| 1:34 | väntar | mamma | Bra. Vilka då? De bruna? De bruna har hål. Jag vet att de har hål. |
| 1:40 | händelse | brevLast | id=m_strumpor |
| 1:42 | sak | mamma | Bra. Vilka då? De bruna? De bruna har hål. Jag vet att de har hål. |
| 1:42 | sms | mamma | Bra. Vilka då? De bruna? De bruna har hål. Jag vet att de har hål. |
| 1:42 | sms-bubbla | mamma | Bra. Vilka då? De bruna? De bruna har hål. Jag vet att de har hål. |
| 1:42 | röst | mamma | Bra. Vilka då? De bruna? De bruna har hål. Jag vet att de har hål. · STORY |
| 1:47 | väntar | info:bra | 📦 Paketet till En lärare i Sundsvall ligger i postlådan – Rolf tar det till posten |
| 1:47 | klar | mamma | Bra. Vilka då? De bruna? De bruna har hål. Jag vet att de har hål. |
| 1:47 | sak | info:bra | 📦 Paketet till En lärare i Sundsvall ligger i postlådan – Rolf tar det till posten |
| 1:47 | kvitto-visas | info:bra | 📦 Paketet till En lärare i Sundsvall ligger i postlådan – Rolf tar det till posten |
| 1:47 | toast | bra | 📦 Paketet till En lärare i Sundsvall ligger i postlådan – Rolf tar det till posten |
| 1:49 | klar | info:bra | 📦 Paketet till En lärare i Sundsvall ligger i postlådan – Rolf tar det till posten |
| 1:51 | händelse | printStart | sak=n2_vas |
| 1:54 | toast | guld | ✅ |
| 1:54 | händelse | printKlar | sak=n2_vas n=19 |
| 1:55 | händelse | tagitUrPrint | sak=n2_vas n=1 |
| 2:02 | väntar | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått skrivare l. Och batteribank. Skriv in, Gunnar. Du skriver aldrig in. |
| 2:02 | radio | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått skrivare l. Och batteribank. Skriv in, Gunnar. Du skriver aldrig in. |
| 2:02 | skratt | du | Radio-Kjelle |
| 2:03 | aliSalt | ali | 1185 |
| 2:03 | aliSalt | ali | 1126 |
| 2:04 | sak | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått skrivare l. Och batteribank. Skriv in, Gunnar. Du skriver aldrig in. |
| 2:04 | notis |  | 📻 Radio Tippen: Radio Tippen, Kjelle här. Skjulet vid tippen har fått skrivare l. Och batteribank. Skriv in, Gunnar. Du skriver aldrig in. |
| 2:04 | röst | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått skrivare l. Och batteribank. Skriv in, Gunnar. Du skriver aldrig in. · REAKTION |
| 2:14 | klar | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått skrivare l. Och batteribank. Skriv in, Gunnar. Du skriver aldrig in. |
| 2:24 | händelse | printStart | sak=n2_vas |
| 2:27 | toast | guld | ✅ |
| 2:27 | händelse | printKlar | sak=n2_vas n=20 |
| 2:28 | händelse | tagitUrPrint | sak=n2_vas n=1 |
| 2:36 | aliSalt | ali | 1069 |
| 2:49 | skratt | du | kvarnen rapar |
| 2:54 | toast | guld | 🧵 |
| 2:55 | händelse | printStart | sak=n2_vas |
| 2:59 | toast | guld | ✅ |
| 2:59 | händelse | printKlar | sak=n2_vas n=21 |
| 2:59 | händelse | tagitUrPrint | sak=n2_vas n=1 |
| 3:01 | toast | guld | 🧵 |
| 3:08 | aliSalt | ali | 1016 |
| 3:17 | händelse | printStart | sak=n2_vas |
| 3:19 | skratt | du | falsk tuta |
| 3:19 | väntar | värld:TUUT! Hej grannen! | TUUT! Hej grannen! |
| 3:19 | sak | värld:TUUT! Hej grannen! | TUUT! Hej grannen! |
| 3:19 | bubbla |  | TUUT! Hej grannen! |
| 3:21 | toast | guld | ✅ |
| 3:21 | händelse | printKlar | sak=n2_vas n=22 |
| 3:21 | händelse | tagitUrPrint | sak=n2_vas n=1 |
| 3:22 | klar | värld:TUUT! Hej grannen! | TUUT! Hej grannen! |
| 3:29 | aliSalt | ali | 965 |
| 3:39 | händelse | printStart | sak=n2_hjalm |
| 3:43 | toast | guld | ✅ |
| 3:43 | händelse | printKlar | sak=n2_hjalm n=1 |
| 3:44 | händelse | tagitUrPrint | sak=n2_hjalm n=1 |
| 3:53 | aliSalt | ali | 1330 |
| 4:03 | händelse | printStart | sak=n2_vas |
| 4:06 | toast | guld | ✅ |
| 4:06 | händelse | printKlar | sak=n2_vas n=23 |
| 4:06 | händelse | tagitUrPrint | sak=n2_vas n=1 |
| 4:08 | upplåst | strom | solpark |
| 4:08 | brott | RESERV | solpark (strom 0 av 15) |
| 4:08 | händelse | upplast | id=solpark flask=strom |
| 4:08 | paket |  | sms |
| 4:08 | väntar | ali | Ali här. Solcellspark. Sex paneler på rad. Solen jobbar dubbelt nu. |
| 4:09 | sak | ali | Ali här. Solcellspark. Sex paneler på rad. Solen jobbar dubbelt nu. |
| 4:09 | sms | ali | Ali här. Solcellspark. Sex paneler på rad. Solen jobbar dubbelt nu. |
| 4:09 | sms-bubbla | ali | Ali här. Solcellspark. Sex paneler på rad. Solen jobbar dubbelt nu. |
| 4:09 | röst | ali | Ali här. Solcellspark. Sex paneler på rad. Solen jobbar dubbelt nu. · STORY |
| 4:14 | aliSalt | ali | 917 |
| 4:15 | klar | ali | Ali här. Solcellspark. Sex paneler på rad. Solen jobbar dubbelt nu. |
| 4:20 | väntar | bud | (tips) |
| 4:20 | sak | bud | (tips) |
| 4:21 | klar | bud | (tips) |
| 4:23 | meddelande | mamma | Kommer du hem på jul? Pappa har redan köpt skinkan. I augusti. Den ligger i frysen och tittar på mig. |
| 4:25 | röst | mamma | Kommer du hem på jul? Pappa har redan köpt skinkan. I augusti. Den ligger i frysen och tittar på mig. · STORY |
| 4:36 | paket |  | sms |
| 4:36 | väntar | mamma | Det säger du nu. |
| 4:47 | händelse | brevLast | id=m_jul |
| 4:54 | sak | mamma | Det säger du nu. |
| 4:54 | sms | mamma | Det säger du nu. |
| 4:54 | sms-bubbla | mamma | Det säger du nu. |
| 4:54 | röst | mamma | Det säger du nu. · STORY |
| 4:56 | tanke | du | Om man bara hade en… motorsåg. |
| 4:56 | väntar | du | Om man bara hade en… motorsåg. |
| 4:57 | klar | mamma | Det säger du nu. |
| 5:05 | sak | du | Om man bara hade en… motorsåg. |
| 5:05 | notis | tanke | 💭 Om man bara hade en… motorsåg. |
| 5:05 | röst | du | Om man bara hade en… motorsåg. · STORY |
| 5:06 | skratt | du | kvarnen rapar |
| 5:08 | klar | du | Om man bara hade en… motorsåg. |
| 5:09 | toast | guld | 🧵 |
| 5:13 | händelse | printStart | sak=n2_hjalm |
| 5:17 | toast | guld | ✅ |
| 5:17 | händelse | printKlar | sak=n2_hjalm n=2 |
| 5:18 | toast | guld | 🧵 |
| 5:18 | händelse | tagitUrPrint | sak=n2_hjalm n=1 |
| 5:20 | väntar | rolf | Konditoriet på Storgatan har slutat me mazariner. Ja har skrivit ett klagomål. På papper. Me frimärke. /R |
| 5:27 | aliSalt | ali | 1264 |
| 5:37 | händelse | printStart | sak=n2_vas |
| 5:37 | väntar | värld:TUUT! Hej grannen! | TUUT! Hej grannen! |
| 5:37 | sak | värld:TUUT! Hej grannen! | TUUT! Hej grannen! |
| 5:37 | bubbla |  | TUUT! Hej grannen! |
| 5:40 | toast | guld | ✅ |
| 5:40 | händelse | printKlar | sak=n2_vas n=24 |
| 5:40 | händelse | tagitUrPrint | sak=n2_vas n=1 |
| 5:40 | klar | värld:TUUT! Hej grannen! | TUUT! Hej grannen! |
| 5:42 | paket |  | ge → brev |
| 5:42 | väntar |  | (läget ändras) |
| 5:42 | väntar | pappa | Äntligen träd. /Pappa |
| 5:48 | aliSalt | ali | 871 |
| 5:49 | sak |  | (läget ändras) |
| 5:49 | klar |  | (läget ändras) |
| 5:53 | sak | pappa | Äntligen träd. /Pappa |
| 5:53 | lapp | Lapp från pappa | Äntligen träd. /Pappa |
| 5:53 | röst | pappa | Äntligen träd. /Pappa · STORY |
| 5:56 | klar | pappa | Äntligen träd. /Pappa |
| 6:02 | ljud | motorsag | Slyet faller |
| 6:07 | ljud | motorsag | Slyet faller |
| 6:12 | ljud | motorsag | Slyet faller |
| 6:14 | struken | ali | Ali här. Större ryggsäck. Min son hade den i lumpen. Han kom hem med fler grejer än han åkte iväg med. |
| 6:18 | ljud | motorsag | Slyet faller |
| 6:22 | ljud | motorsag | Slyet faller |
| 6:27 | ljud | motorsag | Slyet faller |
| 6:27 | paket |  | tanke |
| 6:27 | tanke | du | Där. Perfekt plats för solen. |
| 6:27 | väntar | du | Där. Perfekt plats för solen. |
| 6:27 | sak | du | Där. Perfekt plats för solen. |
| 6:27 | kvitto-visas | du | Där. Perfekt plats för solen. |
| 6:27 | notis | tanke | 💭 Där. Perfekt plats för solen. |
| 6:27 | röst | du | Där. Perfekt plats för solen. · STORY |
| 6:30 | klar | du | Där. Perfekt plats för solen. |
| 6:41 | skratt | du | Alis dyr-pling |
| 6:41 | toast | guld | 3D-modell köpt – printa solcellspark på skrivaren |
| 6:41 | händelse | kopt | sak=solpark |
| 6:54 | väntar | värld:Mjau. | Mjau. |
| 7:03 | sak | värld:Mjau. | Mjau. |
| 7:03 | bubbla |  | Mjau. |
| 7:05 | klar | värld:Mjau. | Mjau. |
| 7:07 | händelse | printStart | sak=byggsats:solpark |
| 7:10 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 7:10 | skratt | du | falsk tuta |
| 7:11 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 7:12 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 7:13 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 7:14 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 7:14 | väntar | notis:Skrivare L: Tornet är tomt – mal mer så  | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 7:14 | sak | notis:Skrivare L: Tornet är tomt – mal mer så  | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 7:14 | notis | fel | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 7:15 | toast | bra | Del 1 av 4 klar |
| 7:15 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 7:15 | struken | notis | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 7:16 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 7:16 | struken | notis | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 7:16 | klar | notis:Skrivare L: Tornet är tomt – mal mer så  | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 7:17 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 7:17 | struken | notis | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 7:17 | skratt | du | kvarnen spottar |
| 7:18 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 7:18 | struken | notis | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 7:18 | toast | skak | handen skakar: fullt |
| 7:19 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 7:19 | struken | notis | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 7:20 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 7:20 | struken | notis | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 7:21 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 7:21 | struken | notis | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 7:22 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 7:23 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 7:25 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 7:26 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 7:27 | toast | bra | Del 2 av 4 klar |
| 7:28 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 7:29 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 7:30 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 7:32 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 7:32 | väntar | värld:TUUT! Hej grannen! | TUUT! Hej grannen! |
| 7:32 | sak | värld:TUUT! Hej grannen! | TUUT! Hej grannen! |
| 7:32 | bubbla |  | TUUT! Hej grannen! |
| 7:33 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 7:34 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 7:35 | klar | värld:TUUT! Hej grannen! | TUUT! Hej grannen! |
| 7:36 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 7:37 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 7:38 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 7:39 | toast | bra | Del 3 av 4 klar |
| 7:40 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 7:41 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 7:42 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 7:43 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 7:45 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 7:45 | struken | notis | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 7:57 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 7:57 | struken | notis | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 7:58 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 7:59 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 8:00 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 8:01 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 8:02 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 8:03 | händelse | printKlar | sak=byggsats:solpark n=1 |
| 8:03 | toast | guld | ✅ |
| 8:10 | händelse | tagitUrPrint | sak=byggsats:solpark n=1 |
| 8:16 | händelse | placerat | sak=solpark |
| 8:16 | struken | kedja | solpark |
| 8:16 | händelse | malKlart | id=r9-bygg-solcellspark del=Dag 9 – Solcellsparken nasta=paket9 |
| 8:16 | väntar | du | Det har kommit beställningar. Paketen ska iväg från datorn. |
| 8:16 | målruta |  | Skicka två paket från datorn · 1/2 |
| 8:16 | MÅL |  | Skicka två paket från datorn · 1/2 |
| 8:17 | sak | du | Det har kommit beställningar. Paketen ska iväg från datorn. |
| 8:17 | pil |  | Skicka två paket från datorn · 1/2 |
| 8:17 | notis | tanke | 💭 Det har kommit beställningar. Paketen ska iväg från datorn. |
| 8:17 | röst | du | Det har kommit beställningar. Paketen ska iväg från datorn. · MÅL |
| 8:20 | kvittens-bock |  | ✓ Bygg en solcellspark |
| 8:22 | klar | du | Det har kommit beställningar. Paketen ska iväg från datorn. |
| 8:29 | händelse | printStart | sak=n2_vas |
| 8:32 | toast | guld | ✅ |
| 8:32 | händelse | printKlar | sak=n2_vas n=25 |
| 8:32 | händelse | tagitUrPrint | sak=n2_vas n=1 |
| 8:35 | händelse | printStart | sak=n2_vas |
| 8:38 | toast | guld | ✅ |
| 8:38 | händelse | printKlar | sak=n2_vas n=26 |
| 8:38 | händelse | tagitUrPrint | sak=n2_vas n=1 |
| 8:53 | webb | du | packade 2 n2_vas |
| 9:07 | väntar | info:bra | 📦 Paketet till Ett kafé i Ystad ligger i postlådan – Rolf tar det till posten |
| 9:07 | sak | info:bra | 📦 Paketet till Ett kafé i Ystad ligger i postlådan – Rolf tar det till posten |
| 9:07 | kvitto-visas | info:bra | 📦 Paketet till Ett kafé i Ystad ligger i postlådan – Rolf tar det till posten |
| 9:07 | toast | bra | 📦 Paketet till Ett kafé i Ystad ligger i postlådan – Rolf tar det till posten |
| 9:07 | händelse | malKlart | id=paket9 del=Dag 9 – Solcellsparken nasta=petgtorn9 |
| 9:07 | väntar | du | Den röda kvarnen står och väntar på plats för rullarna. Ett större torn. |
| 9:08 | MÅL |  | Bygg Rulltorn XL vid röda kvarnen |
| 9:09 | klar | info:bra | 📦 Paketet till Ett kafé i Ystad ligger i postlådan – Rolf tar det till posten |
| 9:09 | målruta |  | Bygg Rulltorn XL vid röda kvarnen |
| 9:10 | ljud | kajsa | Mjau |
| 9:11 | kvittens-bock |  | ✓ Skicka två paket från datorn · 2/2 |
| 9:11 | sak | du | Den röda kvarnen står och väntar på plats för rullarna. Ett större torn. |
| 9:11 | pil |  | Bygg Rulltorn XL vid röda kvarnen |
| 9:11 | notis | tanke | 💭 Den röda kvarnen står och väntar på plats för rullarna. Ett större torn. |
| 9:11 | röst | du | Den röda kvarnen står och väntar på plats för rullarna. Ett större torn. · MÅL |
| 9:12 | nick |  | nick:80 |
| 9:14 | skratt | du | kvarnen rapar |
| 9:16 | toast | guld | 🧵 |
| 9:16 | paket |  | tanke |
| 9:16 | tanke | du | Den bränns. |
| 9:16 | väntar | du | Den bränns. |
| 9:16 | paket |  | tanke |
| 9:16 | tanke | du | Mamma hade rätt. Säg inget. |
| 9:16 | struken | du | Den bränns. |
| 9:16 | väntar | du | Mamma hade rätt. Säg inget. |
| 9:16 | skratt | du | grytvantarna |
| 9:17 | klar | du | Den röda kvarnen står och väntar på plats för rullarna. Ett större torn. |
| 9:20 | toast | guld | 🧵 |
| 9:21 | händelse | printStart | sak=n2_hjalm |
| 9:25 | toast | guld | ✅ |
| 9:25 | händelse | printKlar | sak=n2_hjalm n=3 |
| 9:25 | sak | du | Mamma hade rätt. Säg inget. |
| 9:25 | notis | tanke | 💭 Mamma hade rätt. Säg inget. |
| 9:25 | röst | du | Mamma hade rätt. Säg inget. · REAKTION |
| 9:26 | händelse | tagitUrPrint | sak=n2_hjalm n=1 |
| 9:27 | skratt | du | falsk tuta |
| 9:28 | klar | du | Mamma hade rätt. Säg inget. |
| 9:35 | aliSalt | ali | 30 |
| 9:35 | aliSalt | ali | 1200 |
| 9:40 | skratt | du | Alis dyr-pling |
| 9:40 | toast | guld | 3D-modell köpt – printa rulltorn xl på skrivaren |
| 9:40 | händelse | kopt | sak=petgtorn |
| 9:42 | morgonkort | ⏸️ Pausad | ⏸️ Pausad · Klicka för att fortsätta. |
| 9:57 | väntar | värld:Mjau. | Mjau. |
| 9:57 | sak | värld:Mjau. | Mjau. |
| 9:57 | bubbla |  | Mjau. |
| 9:59 | klar | värld:Mjau. | Mjau. |
| 10:02 | skratt | du | kvarnen rapar |
| 10:05 | toast | guld | 🧵 |
| 10:08 | händelse | printStart | sak=byggsats:petgtorn |
| 10:11 | toast | bra | Del 1 av 3 klar |
| 10:11 | toast | guld | 🧵 |
| 10:13 | toast | bra | Del 2 av 3 klar |
| 10:15 | händelse | printKlar | sak=byggsats:petgtorn n=1 |
| 10:15 | toast | guld | ✅ |
| 10:16 | väntar | notis:📔 Prestation: Kajakmalaren · +3 respekt | 📔 Prestation: Kajakmalaren · +3 respekt |
| 10:16 | sak | notis:📔 Prestation: Kajakmalaren · +3 respekt | 📔 Prestation: Kajakmalaren · +3 respekt |
| 10:16 | notis |  | 📔 Prestation: Kajakmalaren · +3 respekt |
| 10:16 | händelse | tagitUrPrint | sak=byggsats:petgtorn n=1 |
| 10:17 | händelse | placerat | sak=petgtorn |
| 10:17 | väntar | info:guld | Rulltorn XL – 12 rullar röd PETG får plats |
| 10:17 | händelse | malKlart | id=petgtorn9 del=Dag 9 – Solcellsparken nasta=sov9 |
| 10:17 | paket |  | lapp |
| 10:17 | väntar | du | Dag 9 är slut. Det drar kallt genom väggarna. |
| 10:17 | MÅL |  | Klart för idag – sov när du vill |
| 10:18 | klar | notis:📔 Prestation: Kajakmalaren · +3 respekt | 📔 Prestation: Kajakmalaren · +3 respekt |
| 10:18 | sak | info:guld | Rulltorn XL – 12 rullar röd PETG får plats |
| 10:18 | kvitto-visas | info:guld | Rulltorn XL – 12 rullar röd PETG får plats |
| 10:18 | toast | guld | Rulltorn XL – 12 rullar röd PETG får plats |
| 10:20 | klar | info:guld | Rulltorn XL – 12 rullar röd PETG får plats |
| 10:21 | målruta |  | Klart för idag – sov när du vill |
| 10:21 | kvittens-bock |  | ✓ Bygg Rulltorn XL vid röda kvarnen |
| 10:22 | sak | du | (nytt mål i rutan) |
| 10:22 | pil |  | Klart för idag – sov när du vill |
| 10:23 | klar | du | (nytt mål i rutan) |
| 10:24 | väntar | notis:🌇 Klockan är 21. Ali slår igen luckan.  | 🌇 Klockan är 21. Ali slår igen luckan. Dagens jobb är klart – gå in i skjulet och sov i sängen. |
| 10:25 | sak | du | Dag 9 är slut. Det drar kallt genom väggarna. |
| 10:25 | lapp | 📔 Dagbok | Dag 9 är slut. Det drar kallt genom väggarna. |
| 10:25 | meddelande | du | Dag 9 är slut. Det drar kallt genom väggarna. |
| 10:25 | dagbokkort | du | Dag 9 är slut. Det drar kallt genom väggarna. |
| 10:25 | röst | du | Dag 9. 13 dagar till jul. Dag 9 är slut. Det drar kallt genom väggarna. · STORY |
| 10:32 | händelse | brevLast | id=kvall9 |
| 10:32 | klar | du | Dag 9 är slut. Det drar kallt genom väggarna. |
| 10:37 | väntar | info:info | Pappa kommer gående. Han bär på en kasse … |
| 10:37 | scenInfo | pappa | Pappa kommer |
| 10:41 | webbBetalt | du | 3427 |
| 10:41 | paket |  | sms |
| 10:41 | väntar | rolf | Kajsa har fått lax tre dar i rad. Tack vare dina paket. Hon e otrevlig mot mej nu. /R |

<details><summary>Botens handlingar dag 9</summary>

- 0:00 — dag 9 börjar — (11470 kr)
- 0:09 popup: "FORTSÄTT" (11470 kr)
- 0:23 gå till Ali (20 m) (11470 kr)
- 0:23 öppnar Alis butik – köpa receptet cykelhjälm i petg (11470 kr)
- 0:26 köper n2_hjalm för 2300 kr (9170 kr)
- 0:35 gå till skrivaren (29 m) (9170 kr)
- 0:36 printar Designvas i röd PETG (9170 kr)
- 0:41 tar ut 1 st ur skrivaren (9170 kr)
- 0:42 printar Designvas i röd PETG (9170 kr)
- 0:47 tar ut 1 st ur skrivaren (9170 kr)
- 0:50 gå till en tunna (16 m) (9170 kr)
- 0:54 gå till PETG-kvarnen (12 m) (9170 kr)
- 0:54 tömmer det tunga i PETG-kvarnen (9170 kr)
- 0:58 gå till skrivaren (3 m) (9170 kr)
- 1:00 printar Designvas i röd PETG (9170 kr)
- 1:04 tar ut 1 st ur skrivaren (9170 kr)
- 1:09 gå till datorn (23 m) (9170 kr)
- 1:18 panel: "Webbshopen · Soptippsvägen 1
B" (9170 kr)
- 1:27 panel: "Webbshopen · Soptippsvägen 1
B" (9170 kr)
- 1:34 popup: "Ja mamma." (9170 kr)
- 1:40 popup: "Läst" (9170 kr)
- 1:47 gå till Rolfs postlåda (paket) (29 m) (9170 kr)
- 1:47 webbshop: 1 paket i postlådan (9170 kr)
- 1:47 tjänar pengar till väntar på flaskhalsen för solpark: 9170/9210 kr → printar designvas i röd petg (1185 kr) (9170 kr)
- 1:49 gå till skrivaren (10 m) (9170 kr)
- 1:51 printar Designvas i röd PETG (9170 kr)
- 1:55 tar ut 1 st ur skrivaren (9170 kr)
- 2:02 gå till Ali (30 m) (9170 kr)
- 2:02 öppnar Alis butik – sälja (9170 kr)
- 2:03 säljer hos Ali: +2311 kr (11481 kr)
- 2:16 tjänar pengar till väntar på flaskhalsen för solpark: 11481/11521 kr → printar designvas i röd petg (1069 kr) (11481 kr)
- 2:22 gå till skrivaren (29 m) (11481 kr)
- 2:24 printar Designvas i röd PETG (11481 kr)
- 2:28 tar ut 1 st ur skrivaren (11481 kr)
- 2:34 gå till Ali (29 m) (11481 kr)
- 2:34 öppnar Alis butik – sälja (11481 kr)
- 2:36 säljer hos Ali: +1069 kr (12550 kr)
- 2:38 tjänar pengar till väntar på flaskhalsen för solpark: 12550/12590 kr → printar designvas i röd petg (1016 kr) (12550 kr)
- 2:45 gå till en tunna (38 m) (12550 kr)
- 2:49 gå till PETG-kvarnen (14 m) (12550 kr)
- 2:49 tömmer det tunga i PETG-kvarnen (12550 kr)
- 2:54 gå till skrivaren (3 m) (12550 kr)
- 2:55 printar Designvas i röd PETG (12550 kr)
- 3:00 tar ut 1 st ur skrivaren (12550 kr)
- 3:06 gå till Ali (31 m) (12550 kr)
- 3:06 öppnar Alis butik – sälja (12550 kr)
- 3:08 säljer hos Ali: +1016 kr (13566 kr)
- 3:10 tjänar pengar till väntar på flaskhalsen för solpark: 13566/13606 kr → printar designvas i röd petg (965 kr) (13566 kr)
- 3:16 gå till skrivaren (29 m) (13566 kr)
- 3:17 printar Designvas i röd PETG (13566 kr)
- 3:21 tar ut 1 st ur skrivaren (13566 kr)
- 3:27 gå till Ali (29 m) (13566 kr)
- 3:27 öppnar Alis butik – sälja (13566 kr)
- 3:29 säljer hos Ali: +965 kr (14531 kr)
- 3:31 tjänar pengar till väntar på flaskhalsen för solpark: 14531/14571 kr → printar cykelhjälm i petg (1330 kr) (14531 kr)
- 3:37 gå till skrivaren (29 m) (14531 kr)
- 3:39 printar Cykelhjälm i PETG (14531 kr)
- 3:45 tar ut 1 st ur skrivaren (14531 kr)
- 3:51 gå till Ali (29 m) (14531 kr)
- 3:51 öppnar Alis butik – sälja (14531 kr)
- 3:53 säljer hos Ali: +1330 kr (15861 kr)
- 3:55 tjänar pengar till väntar på flaskhalsen för solpark: 15861/15901 kr → printar designvas i röd petg (917 kr) (15861 kr)
- 4:01 gå till skrivaren (29 m) (15861 kr)
- 4:03 printar Designvas i röd PETG (15861 kr)
- 4:06 tar ut 1 st ur skrivaren (15861 kr)
- 4:12 gå till Ali (29 m) (15861 kr)
- 4:12 öppnar Alis butik – sälja (15861 kr)
- 4:14 säljer hos Ali: +917 kr (16778 kr)
- 4:36 popup: "Nej. Jag firar här." (16778 kr)
- 4:47 popup: "Läst" (16778 kr)
- 4:51 gå till slyet bakom tippen (51 m) (16778 kr)
- 4:59 tjänar pengar till väntar på pappas motorsåg: 16778/16898 kr → printar cykelhjälm i petg (1264 kr) (16778 kr)
- 5:02 gå till en tunna (11 m) (16778 kr)
- 5:06 gå till PETG-kvarnen (15 m) (16778 kr)
- 5:06 tömmer det tunga i PETG-kvarnen (16778 kr)
- 5:11 gå till skrivaren (4 m) (16778 kr)
- 5:13 printar Cykelhjälm i PETG (16778 kr)
- 5:19 tar ut 1 st ur skrivaren (16778 kr)
- 5:25 gå till Ali (31 m) (16778 kr)
- 5:25 öppnar Alis butik – sälja (16778 kr)
- 5:27 säljer hos Ali: +1264 kr (18042 kr)
- 5:29 tjänar pengar till väntar på pappas motorsåg: 18042/18162 kr → printar designvas i röd petg (871 kr) (18042 kr)
- 5:35 gå till skrivaren (29 m) (18042 kr)
- 5:37 printar Designvas i röd PETG (18042 kr)
- 5:41 tar ut 1 st ur skrivaren (18042 kr)
- 5:47 gå till Ali (29 m) (18042 kr)
- 5:47 öppnar Alis butik – sälja (18042 kr)
- 5:48 säljer hos Ali: +871 kr (18913 kr)
- 6:01 gå till slyet (motorsåg) (51 m) (18913 kr)
- 6:11 gå till slyet (motorsåg) (4 m) (18913 kr)
- 6:16 gå till slyet (motorsåg) (5 m) (18913 kr)
- 6:26 gå till slyet (motorsåg) (4 m) (18913 kr)
- 6:40 gå till Ali (46 m) (18913 kr)
- 6:40 öppnar Alis butik – köpa solcellspark (18913 kr)
- 6:42 köper solpark för 2400 kr (16513 kr)
- 6:59 plockar 9 skräp på tippen (bär max 16) (16513 kr)
- 7:02 gå till kvarnen (14 m) (16513 kr)
- 7:06 gå till skrivaren (7 m) (16513 kr)
- 7:07 printar Solcellspark (4 delar) (16513 kr)
- 7:19 plockar 2 skräp på tippen (bär max 16) (16513 kr)
- 7:22 gå till kvarnen (14 m) (16513 kr)
- 7:53 plockar 7 skräp på tippen (bär max 16) (16513 kr)
- 7:55 gå till kvarnen (13 m) (16513 kr)
- 8:10 gå till skrivaren (7 m) (16513 kr)
- 8:10 tar ut 1 st ur skrivaren (16513 kr)
- 8:15 gå till platsen för solcellspark (21 m) (16513 kr)
- 8:16 ställer ut solcellspark (16513 kr)
- 8:28 gå till skrivaren (16 m) (16513 kr)
- 8:29 printar Designvas i röd PETG (16513 kr)
- 8:33 tar ut 1 st ur skrivaren (16513 kr)
- 8:35 printar Designvas i röd PETG (16513 kr)
- 8:39 tar ut 1 st ur skrivaren (16513 kr)
- 8:43 gå till datorn (23 m) (16513 kr)
- 8:52 panel: "Webbshopen · Soptippsvägen 1
B" (16513 kr)
- 9:01 panel: "Webbshopen · Soptippsvägen 1
B" (16513 kr)
- 9:07 gå till Rolfs postlåda (paket) (29 m) (16513 kr)
- 9:08 webbshop: 2 paket i postlådan (16513 kr)
- 9:08 tjänar pengar till väntar på fler beställningar: 16513/16573 kr → printar cykelhjälm i petg (1200 kr) (16513 kr)
- 9:10 gå till en tunna (8 m) (16513 kr)
- 9:14 gå till PETG-kvarnen (12 m) (16513 kr)
- 9:14 tömmer det tunga i PETG-kvarnen (16513 kr)
- 9:19 gå till skrivaren (4 m) (16513 kr)
- 9:21 printar Cykelhjälm i PETG (16513 kr)
- 9:27 tar ut 1 st ur skrivaren (16513 kr)
- 9:33 gå till Ali (31 m) (16513 kr)
- 9:33 öppnar Alis butik – sälja (16513 kr)
- 9:35 säljer hos Ali: +1230 kr (17743 kr)
- 9:38 öppnar Alis butik – köpa rulltorn xl (17743 kr)
- 9:41 köper petgtorn för 600 kr (17143 kr)
- 9:50 kort: "FORTSÄTTeller tryck Esc" (17143 kr)
- 9:58 gå till en tunna (39 m) (17143 kr)
- 10:02 gå till PETG-kvarnen (15 m) (17143 kr)
- 10:02 tömmer det tunga i PETG-kvarnen (17143 kr)
- 10:07 gå till skrivaren (3 m) (17143 kr)
- 10:08 printar Rulltorn XL (3 delar) (17143 kr)
- 10:17 tar ut 1 st ur skrivaren (17143 kr)
- 10:17 gå till röda kvarnen (1 m) (17143 kr)
- 10:32 popup: "FORTSÄTT" (17143 kr)
- 10:38 gå till sängen (22 m) (17143 kr)

</details>

## Dag 10

| Tid | Källa | Vem | Text |
|---|---|---|---|
| 10:41 | vara | ali | n2_hjalm |
| 10:41 | väntar | info:guld | Nätterna blir kallare nu – se till att skjulet håller värmen. |
| 10:41 | händelse | malKlart | id=sov9 del=Dag 9 – Solcellsparken nasta=tapeter |
| 10:41 | MÅL |  | Tapetsera skjulet · 0/4 |
| 0:01 | händelse | dagenBorjar | dag=10 |
| 0:01 | meddelande | du | Dag 10. 12 dagar till jul. Utan väggar fryser jag i natt. |
| 0:01 | dagbokkort | du | Skrivare L och kylan · Dag 10. 12 dagar till jul. Utan väggar fryser jag i natt. |
| 0:01 | röst | du | Dag 10. 12 dagar till jul. Skrivare L och kylan. Utan väggar fryser jag i natt. · STORY |
| 0:03 | paket |  | sms |
| 0:03 | väntar | rolf | Ny lapp i lådan. Du vet vad de betyder. /R |
| 0:08 | notis | nytt | Ali vill ha idag: Cykelhjälm i PETG – +50 % hela dagen (1995 kr just nu)🖥️ Webbshopen: 2 paket levererade · +3 427 kr📈 Igår: 14 printat · 11 sålt |
| 0:09 | händelse | morgonkortStangt | dag=10 |
| 0:09 | paket |  | sms |
| 0:09 | väntar | ali | Ali här. Satt uppe med AI:n hela natten. Ritningen till Tapeter är klar. Kom innan nio, då stänger jag. |
| 0:09 | struken | kedja | d10 |
| 0:09 | väntar | du | Skjulet ska kännas som ett rum. Tapeter. |
| 0:09 | målruta |  | Tapetsera skjulet · 0/4 |
| 0:14 | sak | du | Skjulet ska kännas som ett rum. Tapeter. |
| 0:14 | pil |  | Tapetsera skjulet · 0/4 |
| 0:14 | notis | tanke | 💭 Skjulet ska kännas som ett rum. Tapeter. |
| 0:14 | röst | du | Skjulet ska kännas som ett rum. Tapeter. · MÅL |
| 0:14 | nick |  | nick:82 |
| 0:17 | klar | du | Skjulet ska kännas som ett rum. Tapeter. |
| 0:17 | struken | info:guld | Nätterna blir kallare nu – se till att skjulet håller värmen. |
| 0:17 | struken | notis:🌇 Klockan är 21. Ali slår igen luckan.  | 🌇 Klockan är 21. Ali slår igen luckan. Dagens jobb är klart – gå in i skjulet och sov i sängen. |
| 0:17 | struken | info:info | Pappa kommer gående. Han bär på en kasse … |
| 0:40 | röst | ali | Du vet vad? Jag har pratat om att göra något i trettio år. Du bara gör. Det är irriterande. På ett bra sätt. · STORY |
| 0:40 | butiksbubbla | ali | Du vet vad? Jag har pratat om att göra något i trettio år. Du bara gör. Det är irriterande. På ett bra sätt. |
| 0:42 | skratt | du | Alis dyr-pling |
| 0:42 | toast | guld | 3D-modell köpt – printa tapeter på skrivaren |
| 0:42 | händelse | kopt | sak=tapeter |
| 0:45 | struken | ali | Ali här. Satt uppe med AI:n hela natten. Ritningen till Tapeter är klar. Kom innan nio, då stänger jag. |
| 0:46 | tanke | du | Jag skulle kunna äta en sopsäck. Nästan. |
| 0:46 | väntar | du | Jag skulle kunna äta en sopsäck. Nästan. |
| 0:50 | händelse | printStart | sak=byggsats:tapeter |
| 0:52 | händelse | printKlar | sak=byggsats:tapeter n=1 |
| 0:52 | toast | guld | ✅ |
| 0:52 | händelse | tagitUrPrint | sak=byggsats:tapeter n=1 |
| 0:55 | sak | du | Jag skulle kunna äta en sopsäck. Nästan. |
| 0:55 | notis | tanke | 💭 Jag skulle kunna äta en sopsäck. Nästan. |
| 0:55 | röst | du | Jag skulle kunna äta en sopsäck. Nästan. · REAKTION |
| 0:56 | väntar | info:guld | 🧻 Bakväggen tapetserad. 3 kvar. |
| 0:59 | klar | du | Jag skulle kunna äta en sopsäck. Nästan. |
| 0:59 | sak | info:guld | 🧻 Bakväggen tapetserad. 3 kvar. |
| 0:59 | kvitto-visas | info:guld | 🧻 Bakväggen tapetserad. 3 kvar. |
| 0:59 | toast | guld | 🧻 Bakväggen tapetserad. 3 kvar. |
| 1:01 | klar | info:guld | 🧻 Bakväggen tapetserad. 3 kvar. |
| 1:08 | händelse | printStart | sak=byggsats:tapeter |
| 1:10 | händelse | printKlar | sak=byggsats:tapeter n=1 |
| 1:10 | toast | guld | ✅ |
| 1:10 | händelse | tagitUrPrint | sak=byggsats:tapeter n=1 |
| 1:14 | väntar | info:guld | 🧻 Vänster vägg tapetserad. 2 kvar. |
| 1:14 | sak | info:guld | 🧻 Vänster vägg tapetserad. 2 kvar. |
| 1:14 | kvitto-visas | info:guld | 🧻 Vänster vägg tapetserad. 2 kvar. |
| 1:14 | toast | guld | 🧻 Vänster vägg tapetserad. 2 kvar. |
| 1:16 | klar | info:guld | 🧻 Vänster vägg tapetserad. 2 kvar. |
| 1:23 | händelse | printStart | sak=byggsats:tapeter |
| 1:24 | händelse | printKlar | sak=byggsats:tapeter n=1 |
| 1:24 | toast | guld | ✅ |
| 1:25 | händelse | tagitUrPrint | sak=byggsats:tapeter n=1 |
| 1:29 | väntar | info:guld | 🧻 Höger vägg tapetserad. 1 kvar. |
| 1:29 | sak | info:guld | 🧻 Höger vägg tapetserad. 1 kvar. |
| 1:29 | kvitto-visas | info:guld | 🧻 Höger vägg tapetserad. 1 kvar. |
| 1:29 | toast | guld | 🧻 Höger vägg tapetserad. 1 kvar. |
| 1:31 | klar | info:guld | 🧻 Höger vägg tapetserad. 1 kvar. |
| 1:41 | väntar | bror | Tips: håll munstycket rent. Och prata med skrivaren ibland. Inte för att den hör. Men ändå. |
| 1:55 | händelse | printStart | sak=byggsats:tapeter |
| 1:57 | händelse | printKlar | sak=byggsats:tapeter n=1 |
| 1:57 | toast | guld | ✅ |
| 1:58 | händelse | tagitUrPrint | sak=byggsats:tapeter n=1 |
| 2:02 | väntar | info:guld | Hela skjulet är tapetserat! Klassisk 70-talstapet … Ali säljer snyggare mönster. |
| 2:02 | sak | info:guld | Hela skjulet är tapetserat! Klassisk 70-talstapet … Ali säljer snyggare mönster. |
| 2:02 | kvitto-visas | info:guld | Hela skjulet är tapetserat! Klassisk 70-talstapet … Ali säljer snyggare mönster. |
| 2:02 | toast | guld | Hela skjulet är tapetserat! Klassisk 70-talstapet … Ali säljer snyggare mönster. |
| 2:02 | händelse | malKlart | id=tapeter del=Dag 10 – Skrivare L och kylan nasta=r10-gor-skjulet-varmt |
| 2:02 | händelse | malKlart | id=r10-gor-skjulet-varmt del=Dag 10 – Skrivare L och kylan nasta=spis10 |
| 2:02 | väntar | du | Bygg spisen och laga en varm måltid. |
| 2:02 | MÅL |  | Bygg spisen och laga en varm måltid |
| 2:03 | väntar | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått solcellspark. Och rulltorn xl. Det är stort, Gunnar. |
| 2:03 | radio | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått solcellspark. Och rulltorn xl. Det är stort, Gunnar. |
| 2:03 | skratt | du | Radio-Kjelle |
| 2:04 | klar | info:guld | Hela skjulet är tapetserat! Klassisk 70-talstapet … Ali säljer snyggare mönster. |
| 2:05 | målruta |  | Bygg spisen och laga en varm måltid |
| 2:06 | kvittens-bock |  | ✓ Tapetsera skjulet · 4/4 |
| 2:06 | kvittens-bock |  | ✓ Gör skjulet varmt inför kylan |
| 2:06 | sak | du | Bygg spisen och laga en varm måltid. |
| 2:06 | pil |  | Bygg spisen och laga en varm måltid |
| 2:06 | röst | du | Bygg spisen och laga en varm måltid. · MÅL |
| 2:06 | nick |  | nick:84 |
| 2:09 | klar | du | Bygg spisen och laga en varm måltid. |
| 2:11 | sak | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått solcellspark. Och rulltorn xl. Det är stort, Gunnar. |
| 2:11 | notis |  | 📻 Radio Tippen: Radio Tippen, Kjelle här. Skjulet vid tippen har fått solcellspark. Och rulltorn xl. Det är stort, Gunnar. |
| 2:11 | röst | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått solcellspark. Och rulltorn xl. Det är stort, Gunnar. · REAKTION |
| 2:20 | klar | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått solcellspark. Och rulltorn xl. Det är stort, Gunnar. |
| 2:21 | toast | guld | 🍳 Spisen ligger i handen – klicka på skjulet för att ställa in den |
| 2:21 | händelse | kopt | sak=spis |
| 2:21 | röst | ali | Laga inget som luktar fisk. Rolf kommer då. · STORY |
| 2:21 | butiksbubbla | ali | Laga inget som luktar fisk. Rolf kommer då. |
| 2:27 | väntar | info:guld | 🍳 Spisen står i skjulet – maten mättar mer nu |
| 2:27 | monterat | du | byggsats:spis |
| 2:27 | händelse | monterat | sak=spis |
| 2:27 | sak | info:guld | 🍳 Spisen står i skjulet – maten mättar mer nu |
| 2:27 | kvitto-visas | info:guld | 🍳 Spisen står i skjulet – maten mättar mer nu |
| 2:27 | toast | guld | 🍳 Spisen står i skjulet – maten mättar mer nu |
| 2:29 | klar | info:guld | 🍳 Spisen står i skjulet – maten mättar mer nu |
| 2:31 | väntar | info:bra | 😋 Raggmunksrester i folie – lagad på spisen |
| 2:31 | ata | du | burk_raggmunk |
| 2:31 | sak | info:bra | 😋 Raggmunksrester i folie – lagad på spisen |
| 2:31 | kvitto-visas | info:bra | 😋 Raggmunksrester i folie – lagad på spisen |
| 2:31 | toast | bra | 😋 Raggmunksrester i folie – lagad på spisen |
| 2:31 | paket |  | tanke |
| 2:31 | tanke | du | Varm mat. I skjulet. Mamma skulle inte tro det. |
| 2:31 | väntar | du | Varm mat. I skjulet. Mamma skulle inte tro det. |
| 2:31 | händelse | malKlart | id=spis10 del=Dag 10 – Skrivare L och kylan nasta=sov10 |
| 2:31 | paket |  | lapp |
| 2:31 | väntar | du | Dag 10 är slut. I natt frös jag. Tolv dagar kvar. |
| 2:31 | MÅL |  | Klart för idag – sov när du vill |
| 2:33 | klar | info:bra | 😋 Raggmunksrester i folie – lagad på spisen |
| 2:33 | sak | du | Varm mat. I skjulet. Mamma skulle inte tro det. |
| 2:33 | kvitto-visas | du | Varm mat. I skjulet. Mamma skulle inte tro det. |
| 2:33 | notis | tanke | 💭 Varm mat. I skjulet. Mamma skulle inte tro det. |
| 2:33 | röst | du | Varm mat. I skjulet. Mamma skulle inte tro det. · REAKTION |
| 2:35 | målruta |  | Klart för idag – sov när du vill |
| 2:35 | skratt | du | falsk tuta |
| 2:35 | kvittens-bock |  | ✓ Bygg spisen och laga en varm måltid |
| 2:37 | klar | du | Varm mat. I skjulet. Mamma skulle inte tro det. |
| 2:38 | sak | du | (nytt mål i rutan) |
| 2:38 | pil |  | Klart för idag – sov när du vill |
| 2:38 | klar | du | (nytt mål i rutan) |
| 2:38 | väntar | notis:🌇 Klockan är 21. Ali slår igen luckan.  | 🌇 Klockan är 21. Ali slår igen luckan. Dagens jobb är klart – gå in i skjulet och sov i sängen. |

<details><summary>Botens handlingar dag 10</summary>

- 0:00 — dag 10 börjar — (20570 kr)
- 0:08 popup: "FORTSÄTT" (20570 kr)
- 0:25 gå till Rolfs postlåda (28 m) (20570 kr)
- 0:33 panel: "En lapp från Rolf
Lite olaglig" (20570 kr)
- 0:40 gå till Ali (31 m) (20570 kr)
- 0:40 öppnar Alis butik – köpa tapeter (20570 kr)
- 0:43 köper tapeter för 800 kr (19770 kr)
- 0:48 gå till skrivaren (23 m) (19770 kr)
- 0:50 printar Tapeter (19770 kr)
- 0:53 tar ut 1 st ur skrivaren (19770 kr)
- 0:56 gå till skjulet (bak) (15 m) (19770 kr)
- 1:06 gå till skrivaren (15 m) (19770 kr)
- 1:08 printar Tapeter (19770 kr)
- 1:10 tar ut 1 st ur skrivaren (19770 kr)
- 1:14 gå till skjulet (vanster) (15 m) (19770 kr)
- 1:21 gå till skrivaren (15 m) (19770 kr)
- 1:23 printar Tapeter (19770 kr)
- 1:25 tar ut 1 st ur skrivaren (19770 kr)
- 1:29 gå till skjulet (hoger) (15 m) (19770 kr)
- 1:44 plockar 3 skräp på tippen (bär max 16) (19770 kr)
- 1:47 gå till kvarnen (15 m) (19770 kr)
- 1:54 gå till skrivaren (7 m) (19770 kr)
- 1:55 printar Tapeter (19770 kr)
- 1:58 tar ut 1 st ur skrivaren (19770 kr)
- 2:02 gå till skjulet (fram) (18 m) (19770 kr)
- 2:20 gå till Ali (20 m) (19770 kr)
- 2:20 öppnar Alis butik – köpa spis (19770 kr)
- 2:22 köper spis för 360 kr (19410 kr)
- 2:27 gå till ställ in spisen i skjulet (19 m) (19410 kr)
- 2:31 lagar burk_raggmunk på spisen (19410 kr)
- 2:40 gå till sängen (1 m) (19410 kr)

</details>

## Dag 11

| Tid | Källa | Vem | Text |
|---|---|---|---|
| 2:42 | vara | ali | n2_vas |
| 2:42 | händelse | malKlart | id=sov10 del=Dag 10 – Skrivare L och kylan nasta=kolfkvarn |
| 2:42 | väntar | info:guld | 🏆 KAPITEL 2 KLART! Röda fabriken går – och skjulet klarar kylan. |
| 2:42 | paket |  | sms |
| 2:42 | väntar | rolf | Dä blir kallt nu o du fryser int. Respekt. Ja la jukeboxen från dödsbot i lådan. O lite pengar. Den spelar bara dansband. /R |
| 2:43 | MÅL |  | Bygg kolfiberkvarnen i linje 3 |
| 2:44 | struken | info:guld | 🏆 KAPITEL 2 KLART! Röda fabriken går – och skjulet klarar kylan. |
| 2:44 | väntar | info:guld | 🚧 Gärdesgården har flyttats ut! Du får utforska ny mark – men bara ställa saker på mark du äger. |
| 0:01 | väntar | bror | Visade bilder på ditt skjul för polarna. Dom trodde det var en Airbnb. Jag sa inte emot. |
| 0:01 | väntar | rolf | Båtklubben skulle rensa förrådet. Ja hjälpte till. Fråga inte hur. /R |
| 0:01 | ljud | bom | Bommen fälls upp (vanster) |
| 0:01 | paket |  | sms |
| 0:01 | väntar | rolf | Gå int genom gamla grinden bakom tippen. Där e floden. /R |
| 0:01 | väntar | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har TAPETER. Gunnar, du hör väl? |
| 0:01 | radio | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har TAPETER. Gunnar, du hör väl? |
| 0:01 | skratt | du | Radio-Kjelle |
| 0:01 | händelse | dagenBorjar | dag=11 |
| 0:01 | meddelande | du | Nätterna blir kalla. Därför: värme. |
| 0:01 | dagbokkort | du | KAPITEL 3 · Dag 11. 11 dagar till jul · Nätterna blir kalla. Därför: värme. |
| 0:01 | röst | du | KAPITEL 3 · Dag 11. 11 dagar till jul. Nätterna blir kalla. Därför: värme. · STORY |
| 0:07 | notis | nytt | Ali vill ha idag: Designvas i röd PETG – +50 % hela dagen (1185 kr just nu)📈 Igår: 0 printat · 0 sålt |
| 0:07 | händelse | morgonkortStangt | dag=11 |
| 0:07 | paket |  | sms |
| 0:07 | väntar | ali | Ali här. Satt uppe med AI:n hela natten. Ritningen till Kolfiberkvarnen är klar. Kom innan nio, då stänger jag. |
| 0:07 | paket |  | toast |
| 0:07 | väntar | notis:🔥 Varmt och skönt i skjulet trots kylan | 🔥 Varmt och skönt i skjulet trots kylan. |
| 0:07 | struken | kedja | d11 |
| 0:07 | väntar | du | Kajakerna på tippen är kolfiber. Det behövs en kvarn som tål det. |
| 0:11 | målruta |  | Bygg kolfiberkvarnen i linje 3 |
| 0:13 | sak | du | Kajakerna på tippen är kolfiber. Det behövs en kvarn som tål det. |
| 0:13 | pil |  | Bygg kolfiberkvarnen i linje 3 |
| 0:13 | notis | tanke | 💭 Kajakerna på tippen är kolfiber. Det behövs en kvarn som tål det. |
| 0:13 | röst | du | Kajakerna på tippen är kolfiber. Det behövs en kvarn som tål det. · MÅL |
| 0:13 | nick |  | nick:86 |
| 0:18 | klar | du | Kajakerna på tippen är kolfiber. Det behövs en kvarn som tål det. |
| 0:18 | struken | info:guld | 🚧 Gärdesgården har flyttats ut! Du får utforska ny mark – men bara ställa saker på mark du äger. |
| 0:18 | struken | notis:🌇 Klockan är 21. Ali slår igen luckan.  | 🌇 Klockan är 21. Ali slår igen luckan. Dagens jobb är klart – gå in i skjulet och sov i sängen. |
| 0:18 | struken | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har TAPETER. Gunnar, du hör väl? |
| 0:18 | struken | notis:🔥 Varmt och skönt i skjulet trots kylan | 🔥 Varmt och skönt i skjulet trots kylan. |
| 0:18 | struken | bror | Tips: håll munstycket rent. Och prata med skrivaren ibland. Inte för att den hör. Men ändå. |
| 0:21 | väntar | info:guld | Skylten vid vägen är uppgraderad. |
| 0:21 | sak | info:guld | Skylten vid vägen är uppgraderad. |
| 0:21 | kvitto-visas | info:guld | Skylten vid vägen är uppgraderad. |
| 0:21 | toast | guld | Skylten vid vägen är uppgraderad. |
| 0:23 | klar | info:guld | Skylten vid vägen är uppgraderad. |
| 0:27 | väntar | värld:HMPF. RÖD. | HMPF. RÖD. |
| 0:32 | sak | du | Dag 10 är slut. I natt frös jag. Tolv dagar kvar. |
| 0:32 | lapp | 📔 Dagbok | Dag 10 är slut. I natt frös jag. Tolv dagar kvar. |
| 0:32 | meddelande | du | Dag 10 är slut. I natt frös jag. Tolv dagar kvar. |
| 0:32 | dagbokkort | du | Dag 10 är slut. I natt frös jag. Tolv dagar kvar. |
| 0:32 | röst | du | Dag 11. 11 dagar till jul. Dag 10 är slut. I natt frös jag. Tolv dagar kvar. · STORY |
| 0:39 | händelse | brevLast | id=kvall10 |
| 0:39 | klar | du | Dag 10 är slut. I natt frös jag. Tolv dagar kvar. |
| 0:46 | röst | ali | Jag visade AI:n din skrivare. Den sa: bygg något eget, Ali. Jag sa: jag är femtioåtta. Den sa: och? · STORY |
| 0:46 | butiksbubbla | ali | Jag visade AI:n din skrivare. Den sa: bygg något eget, Ali. Jag sa: jag är femtioåtta. Den sa: och? |
| 0:47 | skratt | du | Alis dyr-pling |
| 0:47 | toast | guld | 3D-modell köpt – printa kolfiberkvarnen på skrivaren |
| 0:47 | händelse | kopt | sak=kolfkvarn |
| 0:50 | struken | ali | Ali här. Satt uppe med AI:n hela natten. Ritningen till Kolfiberkvarnen är klar. Kom innan nio, då stänger jag. |
| 0:55 | struken | värld:HMPF. RÖD. | HMPF. RÖD. |
| 1:00 | skratt | du | kvarnen rapar |
| 1:04 | toast | guld | 🧵 |
| 1:07 | händelse | printStart | sak=byggsats:kolfkvarn |
| 1:09 | toast | bra | Del 1 av 4 klar |
| 1:11 | paket |  | sms |
| 1:11 | väntar | mamma | Jag har skickat stickade raggsockor (för små) med Rolf. Den ligger i postlådan. |
| 1:11 | sak | mamma | Jag har skickat stickade raggsockor (för små) med Rolf. Den ligger i postlådan. |
| 1:11 | sms | mamma | Jag har skickat stickade raggsockor (för små) med Rolf. Den ligger i postlådan. |
| 1:11 | sms-bubbla | mamma | Jag har skickat stickade raggsockor (för små) med Rolf. Den ligger i postlådan. |
| 1:11 | röst | mamma | Jag har skickat stickade raggsockor (för små) med Rolf. Den ligger i postlådan. · STORY |
| 1:12 | toast | guld | 🧵 |
| 1:12 | toast | guld | 🧵 |
| 1:12 | toast | bra | Del 2 av 4 klar |
| 1:14 | toast | bra | Del 3 av 4 klar |
| 1:17 | händelse | printKlar | sak=byggsats:kolfkvarn n=1 |
| 1:17 | toast | guld | ✅ |
| 1:17 | klar | mamma | Jag har skickat stickade raggsockor (för små) med Rolf. Den ligger i postlådan. |
| 1:18 | händelse | tagitUrPrint | sak=byggsats:kolfkvarn n=1 |
| 1:21 | händelse | placerat | sak=kolfkvarn |
| 1:21 | händelse | malKlart | id=kolfkvarn del=Dag 11 – Kolfiberlinjen nasta=kolfband |
| 1:21 | väntar | du | Kajakerna är för stora att bära. Ett band från tippen. |
| 1:21 | målruta |  | Bygg rullbandet från tippen |
| 1:21 | MÅL |  | Bygg rullbandet från tippen |
| 1:22 | sak | du | Kajakerna är för stora att bära. Ett band från tippen. |
| 1:22 | pil |  | Bygg rullbandet från tippen |
| 1:22 | notis | tanke | 💭 Kajakerna är för stora att bära. Ett band från tippen. |
| 1:22 | röst | du | Kajakerna är för stora att bära. Ett band från tippen. · MÅL |
| 1:22 | nick |  | nick:87 |
| 1:25 | kvittens-bock |  | ✓ Bygg kolfiberkvarnen i linje 3 |
| 1:27 | klar | du | Kajakerna är för stora att bära. Ett band från tippen. |
| 1:31 | väntar | rolf | ÖJ. Ja va int mä mej själv på konditoriet. Förlåt att ja prata så mycke. Bakom husvagnen fanns Birgittas trädgård. Nu ä dä bara nässlor. Ja har int rört den på sju år. Ja kan int. Men om nån annan började … Ja vet int. Du ä ju bra på skräp. MVH ROLF |
| 1:31 | sak | rolf | ÖJ. Ja va int mä mej själv på konditoriet. Förlåt att ja prata så mycke. Bakom husvagnen fanns Birgittas trädgård. Nu ä dä bara nässlor. Ja har int rört den på sju år. Ja kan int. Men om nån annan började … Ja vet int. Du ä ju bra på skräp. MVH ROLF |
| 1:31 | lapp | Brev från Rolf | ÖJ. Ja va int mä mej själv på konditoriet. Förlåt att ja prata så mycke. Bakom husvagnen fanns Birgittas trädgård. Nu ä dä bara nässlor. Ja har int rört den på sju år. Ja kan int. Men om nån annan började … Ja vet int. Du ä ju bra på skräp. MVH ROLF |
| 1:31 | röst | rolf | ÖJ. Ja va int mä mej själv på konditoriet. Förlåt att ja prata så mycke. Bakom husvagnen fanns Birgittas trädgård. Nu ä dä bara nässlor. Ja har int rört den på sju år. Ja kan int. Men om nån annan började … Ja vet int. Du ä ju bra på skräp. MVH ROLF · STORY |
| 1:39 | väntar | mamma | Jag har lagt upp en bild på ditt skjul på Facebook. 47 gilla. Faster Inger skrev "Va fint, är det en bastu?" |
| 1:40 | skratt | du | Alis dyr-pling |
| 1:40 | toast | guld | 3D-modell köpt – printa rött rullband från tippen på skrivaren |
| 1:40 | händelse | kopt | sak=kolfband |
| 1:52 | klar | rolf | ÖJ. Ja va int mä mej själv på konditoriet. Förlåt att ja prata så mycke. Bakom husvagnen fanns Birgittas trädgård. Nu ä dä bara nässlor. Ja har int rört den på sju år. Ja kan int. Men om nån annan började … Ja vet int. Du ä ju bra på skräp. MVH ROLF |
| 1:52 | händelse | brevLast | id=tr_brev |
| 1:54 | skratt | du | kvarnen rapar |
| 1:56 | toast | guld | 🧵 |
| 2:01 | toast | guld | 🧵 |
| 2:04 | händelse | printStart | sak=byggsats:kolfband |
| 2:06 | toast | bra | Del 1 av 4 klar |
| 2:08 | toast | bra | Del 2 av 4 klar |
| 2:11 | toast | bra | Del 3 av 4 klar |
| 2:13 | händelse | printKlar | sak=byggsats:kolfband n=1 |
| 2:13 | toast | guld | ✅ |
| 2:14 | händelse | tagitUrPrint | sak=byggsats:kolfband n=1 |
| 2:16 | händelse | placerat | sak=kolfband |
| 2:16 | väntar | info:guld | Rullbandet går – det hämtar kajaker och kanoter från tippen |
| 2:16 | sak | info:guld | Rullbandet går – det hämtar kajaker och kanoter från tippen |
| 2:16 | kvitto-visas | info:guld | Rullbandet går – det hämtar kajaker och kanoter från tippen |
| 2:16 | toast | guld | Rullbandet går – det hämtar kajaker och kanoter från tippen |
| 2:16 | händelse | malKlart | id=kolfband del=Dag 11 – Kolfiberlinjen nasta=kajak3 |
| 2:16 | väntar | du | Bandet går. Nu ska kajakerna upp på det. |
| 2:16 | MÅL |  | Mata in kajaker med bandet · 0/3 |
| 2:18 | klar | info:guld | Rullbandet går – det hämtar kajaker och kanoter från tippen |
| 2:18 | målruta |  | Mata in kajaker med bandet · 0/3 |
| 2:20 | kvittens-bock |  | ✓ Bygg rullbandet från tippen |
| 2:20 | sak | du | Bandet går. Nu ska kajakerna upp på det. |
| 2:20 | pil |  | Mata in kajaker med bandet · 0/3 |
| 2:20 | notis | tanke | 💭 Bandet går. Nu ska kajakerna upp på det. |
| 2:20 | röst | du | Bandet går. Nu ska kajakerna upp på det. · MÅL |
| 2:20 | skratt | du | falsk tuta |
| 2:23 | klar | du | Bandet går. Nu ska kajakerna upp på det. |
| 2:25 | väntar | du | Hmm… flaggan är uppe på Rolfs brevlåda vid grinden. Har det kommit ett brev? |
| 2:30 | tanke | du | Den åker själv. Jag står bara och tittar. Det här är framtiden. |
| 2:30 | väntar | du | Den åker själv. Jag står bara och tittar. Det här är framtiden. |
| 2:32 | sak | du | Hmm… flaggan är uppe på Rolfs brevlåda vid grinden. Har det kommit ett brev? |
| 2:32 | röst | du | Hmm… flaggan är uppe på Rolfs brevlåda vid grinden. Har det kommit ett brev? · REAKTION |
| 2:37 | skratt | du | kvarnen rapar |
| 2:38 | klar | du | Hmm… flaggan är uppe på Rolfs brevlåda vid grinden. Har det kommit ett brev? |
| 2:40 | sak | du | Den åker själv. Jag står bara och tittar. Det här är framtiden. |
| 2:40 | notis | tanke | 💭 Den åker själv. Jag står bara och tittar. Det här är framtiden. |
| 2:40 | röst | du | Den åker själv. Jag står bara och tittar. Det här är framtiden. · STORY |
| 2:42 | toast | guld | 🧵 |
| 2:44 | händelse | printStart | sak=n2_hjalm |
| 2:46 | klar | du | Den åker själv. Jag står bara och tittar. Det här är framtiden. |
| 2:48 | toast | guld | ✅ |
| 2:48 | händelse | printKlar | sak=n2_hjalm n=4 |
| 2:50 | händelse | tagitUrPrint | sak=n2_hjalm n=1 |
| 2:51 | toast | guld | 🧵 |
| 2:53 | händelse | printStart | sak=kruka |
| 2:55 | väntar | mamma | Jag har köpt julskinka för två. |
| 2:55 | toast | guld | ✅ |
| 2:55 | händelse | printKlar | sak=kruka n=61 |
| 2:55 | nej | du | Ta ut blomkruka |
| 2:55 | tanke | du | Fickorna är fulla. Jag får lägga något i ryggsäcken först. |
| 2:55 | väntar | du | Fickorna är fulla. Jag får lägga något i ryggsäcken först. |
| 2:55 | toast | fickskylt | Fulla fickor |
| 2:55 | fullaFickor | du | kruka |
| 2:55 | sak | du | Fickorna är fulla. Jag får lägga något i ryggsäcken först. |
| 2:55 | notis | tanke | 💭 Fickorna är fulla. Jag får lägga något i ryggsäcken först. |
| 2:55 | röst | du | Fickorna är fulla. Jag får lägga något i ryggsäcken först. · REAKTION |
| 2:56 | händelse | tagitUrPrint | sak=kruka n=1 |
| 2:58 | händelse | malKlart | id=kajak3 del=Dag 11 – Kolfiberlinjen nasta=kolfrulle |
| 2:58 | händelse | malKlart | id=kolfrulle del=Dag 11 – Kolfiberlinjen nasta=sov11 |
| 2:58 | paket |  | lapp |
| 2:58 | väntar | du | Dag 11 är slut. Maskinerna står och väntar på mig. I morgon. |
| 2:58 | MÅL |  | Klart för idag – sov när du vill |
| 2:58 | händelse | printStart | sak=kruka |
| 2:59 | skratt | du | kvarnen spottar |
| 3:00 | toast | guld | ✅ |
| 3:00 | händelse | printKlar | sak=kruka n=62 |
| 3:00 | klar | du | Fickorna är fulla. Jag får lägga något i ryggsäcken först. |
| 3:00 | händelse | tagitUrPrint | sak=kruka n=1 |
| 3:01 | målruta |  | Klart för idag – sov när du vill |
| 3:02 | kvittens-bock |  | ✓ Mata in kajaker med bandet · 3/3 |
| 3:02 | kvittens-bock |  | ✓ Vänta på den första svartgrå rullen |
| 3:02 | sak | du | (nytt mål i rutan) |
| 3:02 | pil |  | Klart för idag – sov när du vill |
| 3:02 | klar | du | (nytt mål i rutan) |
| 3:05 | väntar | notis:🌇 Klockan är 21. Ali slår igen luckan.  | 🌇 Klockan är 21. Ali slår igen luckan. Dagens jobb är klart – gå in i skjulet och sov i sängen. |
| 3:13 | sak | du | Dag 11 är slut. Maskinerna står och väntar på mig. I morgon. |
| 3:13 | lapp | 📔 Dagbok | Dag 11 är slut. Maskinerna står och väntar på mig. I morgon. |
| 3:13 | meddelande | du | Dag 11 är slut. Maskinerna står och väntar på mig. I morgon. |
| 3:13 | dagbokkort | du | Dag 11 är slut. Maskinerna står och väntar på mig. I morgon. |
| 3:13 | röst | du | Dag 11. 11 dagar till jul. Dag 11 är slut. Maskinerna står och väntar på mig. I morgon. · STORY |
| 3:21 | händelse | brevLast | id=kvall11 |
| 3:21 | klar | du | Dag 11 är slut. Maskinerna står och väntar på mig. I morgon. |
| 3:22 | webb | du | packade 1 n2_hjalm |
| 3:31 | sak | notis:🌇 Klockan är 21. Ali slår igen luckan.  | 🌇 Klockan är 21. Ali slår igen luckan. Dagens jobb är klart – gå in i skjulet och sov i sängen. |
| 3:31 | notis | guld | 🌇 Klockan är 21. Ali slår igen luckan. Dagens jobb är klart – gå in i skjulet och sov i sängen. |
| 3:31 | webb | du | packade 2 kruka |
| 3:33 | klar | notis:🌇 Klockan är 21. Ali slår igen luckan.  | 🌇 Klockan är 21. Ali slår igen luckan. Dagens jobb är klart – gå in i skjulet och sov i sängen. |
| 3:46 | väntar | info:bra | 📦 Paketet till Majken, 91, i Skellefteå ligger i postlådan – Rolf tar det till posten |
| 3:46 | sak | info:bra | 📦 Paketet till Majken, 91, i Skellefteå ligger i postlådan – Rolf tar det till posten |
| 3:46 | kvitto-visas | info:bra | 📦 Paketet till Majken, 91, i Skellefteå ligger i postlådan – Rolf tar det till posten |
| 3:46 | toast | bra | 📦 Paketet till Majken, 91, i Skellefteå ligger i postlådan – Rolf tar det till posten |
| 3:47 | väntar | info:bra | 📦 Paketet till Någon som bara skrev "hej" ligger i postlådan – Rolf tar det till posten |
| 3:48 | klar | info:bra | 📦 Paketet till Majken, 91, i Skellefteå ligger i postlådan – Rolf tar det till posten |
| 3:48 | sak | info:bra | 📦 Paketet till Någon som bara skrev "hej" ligger i postlådan – Rolf tar det till posten |
| 3:48 | kvitto-visas | info:bra | 📦 Paketet till Någon som bara skrev "hej" ligger i postlådan – Rolf tar det till posten |
| 3:48 | toast | bra | 📦 Paketet till Någon som bara skrev "hej" ligger i postlådan – Rolf tar det till posten |
| 3:50 | klar | info:bra | 📦 Paketet till Någon som bara skrev "hej" ligger i postlådan – Rolf tar det till posten |
| 3:51 | händelse | printStart | sak=n2_vas |
| 3:54 | toast | guld | ✅ |
| 3:54 | händelse | printKlar | sak=n2_vas n=27 |
| 3:54 | händelse | tagitUrPrint | sak=n2_vas n=1 |
| 4:03 | aliSalt | ali | 1185 |
| 4:10 | struken | bror | Visade bilder på ditt skjul för polarna. Dom trodde det var en Airbnb. Jag sa inte emot. |
| 4:10 | struken | mamma | Jag har lagt upp en bild på ditt skjul på Facebook. 47 gilla. Faster Inger skrev "Va fint, är det en bastu?" |
| 4:13 | webbBetalt | du | 2107 |

<details><summary>Botens handlingar dag 11</summary>

- 0:00 — dag 11 börjar — (19410 kr)
- 0:12 popup: "FORTSÄTT" (19410 kr)
- 0:26 gå till Rolfs postlåda (29 m) (19410 kr)
- 0:32 panel: "Rolfs postlåda
Det här låg i l" (22410 kr)
- 0:39 popup: "FORTSÄTT" (22410 kr)
- 0:46 gå till Ali (31 m) (22410 kr)
- 0:46 öppnar Alis butik – köpa kolfiberkvarnen (22410 kr)
- 0:48 köper kolfkvarn för 6000 kr (16410 kr)
- 0:57 gå till en tunna (35 m) (16410 kr)
- 1:00 gå till PETG-kvarnen (11 m) (16410 kr)
- 1:00 tömmer det tunga i PETG-kvarnen (16410 kr)
- 1:05 gå till skrivaren (3 m) (16410 kr)
- 1:07 printar Kolfiberkvarnen (4 delar) (16410 kr)
- 1:18 tar ut 1 st ur skrivaren (16410 kr)
- 1:19 gå till platsen för kolfiberkvarnen (5 m) (16410 kr)
- 1:21 ställer ut kolfiberkvarnen (16410 kr)
- 1:31 gå till Rolfs postlåda (13 m) (16410 kr)
- 1:39 gå till Ali (32 m) (16410 kr)
- 1:39 öppnar Alis butik – köpa rött rullband från tippen (16410 kr)
- 1:41 köper kolfband för 10500 kr (5910 kr)
- 1:50 gå till en tunna (38 m) (5910 kr)
- 1:54 gå till PETG-kvarnen (13 m) (5910 kr)
- 1:54 tömmer det tunga i PETG-kvarnen (5910 kr)
- 2:02 gå till skrivaren (3 m) (5910 kr)
- 2:04 printar Rött rullband från tippen (4 delar) (5910 kr)
- 2:14 tar ut 1 st ur skrivaren (5910 kr)
- 2:16 gå till kolfiberkvarnen (5 m) (5910 kr)
- 2:28 gå till Rolfs postlåda (13 m) (5910 kr)
- 2:32 panel: "Rolfs postlåda
Det här låg i l" (5910 kr)
- 2:34 gå till en tunna (8 m) (5910 kr)
- 2:37 gå till PETG-kvarnen (12 m) (5910 kr)
- 2:37 tömmer det tunga i PETG-kvarnen (5910 kr)
- 2:42 gå till skrivaren (4 m) (5910 kr)
- 2:44 printar Cykelhjälm i PETG (5910 kr)
- 2:50 tar ut 1 st ur skrivaren (5910 kr)
- 2:51 gå till skrivaren (6 m) (5910 kr)
- 2:53 printar Blomkruka (5910 kr)
- 2:56 tar ut 1 st ur skrivaren (5910 kr)
- 2:56 fulla fickor – lägger hammare i kistan (5910 kr)
- 2:58 printar Blomkruka (5910 kr)
- 3:01 tar ut 1 st ur skrivaren (5910 kr)
- 3:05 gå till datorn (19 m) (5910 kr)
- 3:13 panel: "Webbshopen · Soptippsvägen 1
B" (5910 kr)
- 3:21 popup: "FORTSÄTT" (5910 kr)
- 3:31 panel: "Webbshopen · Soptippsvägen 1
B" (5910 kr)
- 3:40 panel: "Webbshopen · Soptippsvägen 1
B" (5910 kr)
- 3:46 gå till Rolfs postlåda (paket) (29 m) (5910 kr)
- 3:47 webbshop: 2 paket i postlådan (5910 kr)
- 3:47 tjänar pengar till bandet hämtar kajaker: 5910/6060 kr → printar designvas i röd petg (1185 kr) (5910 kr)
- 3:49 gå till skrivaren (10 m) (5910 kr)
- 3:51 printar Designvas i röd PETG (5910 kr)
- 3:55 tar ut 1 st ur skrivaren (5910 kr)
- 4:01 gå till Ali (30 m) (5910 kr)
- 4:01 öppnar Alis butik – sälja (5910 kr)
- 4:03 säljer hos Ali: +1185 kr (7095 kr)
- 4:10 gå till sängen (20 m) (7095 kr)

</details>

## Dag 12

| Tid | Källa | Vem | Text |
|---|---|---|---|
| 4:13 | vara | ali | n2_hjalm |
| 4:13 | händelse | malKlart | id=sov11 del=Dag 11 – Kolfiberlinjen nasta=kolfskrivare |
| 4:13 | MÅL |  | Printa och sälj |

<details><summary>Botens handlingar dag 12</summary>

- 0:00 — dag 12 börjar — (9202 kr)

</details>
