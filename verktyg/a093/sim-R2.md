# Simulering kapitel 1 – körning 1

*Gjord 2026-11-21 07:48 med `verktyg/sim-kapitel1.mjs` + `verktyg/sim-bot.js` (punkt AX). Boten går 4,5 m/s, läser 15 tecken/s, trampar, vevar, plockar, printar, köper och säljer via spelets egna funktioner. Tiderna är speltid.*

## Sammanfattning

| Dag | Minuter | Väntan | Prints (totalt) | Kr vid sömn | Bär | Trivsel |
|---|---|---|---|---|---|---|
| 7 | 3.4 | 0 % | 113 | 5584 | 16 | 142 |
| 8 | 11.3 | 6 % | 132 | 14667 | 16 | 170 |
| 9 | 10.8 | 5 % | 146 | 21260 | 16 | 174 |
| 10 | 2.5 | 3 % | 146 | 20400 | 16 | 194 |
| 11 | 4.9 | 0 % | 152 | 8085 | 16 | 189 |
| 12 | 0.0 | 0 % | 152 | 10680 | 16 | 189 |

## Flaskhalskartan (EE)

| Dag | bara | mala | trampa | strom | skrivare | inkomst | Upplåst |
|---|---|---|---|---|---|---|---|
| 7 | 2 | 2 | 0 | 0 | 129 | 0 |  |
| 8 | 2 | 3 | 0 | 0 | 266 | 0 | skrivare3 (skrivare, 3:42, reserv), magnet (bara, 5:41), bank (strom, 10:08, reserv) |
| 9 | 2 | 7 | 0 | 0 | 4 | 0 | solpark (strom, 4:45, reserv) |
| 10 | 1 | 4 | 0 | 0 | 73 | 0 |  |
| 11 | 1 | 8 | 0 | 0 | 223 | 0 |  |
| 12 | 0 | 0 | 0 | 0 | 0 | 0 |  |

TIDIG: 0 · FAST: 0 · upplåst av reserven (målet väntade 3 min): 3

**SKRATT:** 48 roliga ögonblick på 33 min (14.6 per 10 min, mål minst 5)

**Köp:**

- dag 7 0:12 – n2_vas (600 kr)
- dag 7 0:48 – saljlada (400 kr)
- dag 8 3:58 – skrivare3 (3500 kr)
- dag 8 6:23 – magnet (2400 kr)
- dag 8 10:25 – bank (800 kr)
- dag 8 11:00 – hylla (150 kr)
- dag 9 0:49 – n2_hjalm (2300 kr)
- dag 9 7:36 – solpark (2400 kr)
- dag 9 10:05 – petgtorn (600 kr)
- dag 10 0:33 – tapeter (800 kr)
- dag 10 2:07 – spis (360 kr)
- dag 11 0:43 – kolfkvarn (6000 kr)
- dag 11 1:59 – kolfband (10500 kr)

## Storykedjan (kvittens → varför → nytt mål)

| Dag | Tid | Id | Kvittens | Varför | Nytt mål | Tid till målet |
|---|---|---|---|---|---|---|
| 7 | 1:06 | saljlada | Jag hämtar varje morgon. Du lägger i, jag betalar. |  | Vaserna i lådan. Ali hämtar själv. | 0.8 s |

## Hur länge nya mål väntade (från att förra målet blev klart till att det nya syntes i målrutan)

Snitt 4.5 s · max 17.6 s · över 4 s: 6 · över 8 s: 6 av 24

## Flaggor (19)

- **SEN** dag 11 2:18: 12.5 s efter händelsen: kjelle: "Radio Tippen, Kjelle här. Skjulet vid tippen har TAPETER. Gunnar, du h"
- **PAUS** dag 7 3:06: 0.0 s paus före "Dag 7 är slut. Nu vet pappa att jag bor HÄR. Rygge"
- **PAUS** dag 8 11:07: 0.0 s paus före "En hylla. Jag har en hylla. Saker har en plats nu."
- **PAUS** dag 8 11:12: 0.0 s paus före "(nytt mål i rutan)"
- **PAUS** dag 8 11:12: 0.0 s paus före "Dag 8 är slut. Strömmen räcker inte till alla skri"
- **PAUS** dag 9 10:35: 0.0 s paus före "Dag 9 är slut. Det drar kallt genom väggarna."
- **PAUS** dag 10 2:18: 0.0 s paus före "Varm mat. I skjulet. Mamma skulle inte tro det."
- **PAUS** dag 10 2:22: 0.0 s paus före "(nytt mål i rutan)"
- **PAUS** dag 10 2:22: 0.0 s paus före "Dag 10 är slut. I natt frös jag. Tolv dagar kvar."
- **PAUS** dag 11 0:18: 0.0 s paus före "Skylten vid vägen är uppgraderad."
- **PAUS** dag 11 4:32: 0.0 s paus före "📦 Paketet till Ett kafé i Ystad ligger i postlåda"
- **UPPREPNING** dag 7 2:27: info:bra: "📦 1 saker i lådan · Ali hämtar i morgon bitti" (förra gången dag 7)
- **UPPREPNING** dag 7 3:04: info:bra: "📦 1 saker i lådan · Ali hämtar i morgon bitti" (förra gången dag 7)
- **SEN KVITTENS** dag 8 11:18: 2.3 s sen: ”Dag 8 är slut. Strömmen räcker inte till alla skr” (dagbok kvall8)
- **SEN KVITTENS** dag 11 0:34: 2.1 s sen: ”Dag 10 är slut. I natt frös jag. Tolv dagar kvar.” (dagbok kvall10)
- **TEMPO** dag 7 3:21: dag 7 tog 3.4 min (mål 10–15)
- **TEMPO** dag 10 2:30: dag 10 tog 2.5 min (mål 10–15)
- **TEMPO** dag 11 4:54: dag 11 tog 4.9 min (mål 10–15)
- **TEMPO** dag 12 0:00: dag 12 tog 0.0 min (mål 10–15)

Sidfel: inga

## Dag 7

| Tid | Källa | Vem | Text |
|---|---|---|---|
| 0:00 | MÅL |  | Printa en designvas i röd PETG |
| 0:00 | MÅL |  | Printa en designvas i röd PETG |
| 0:02 | sak | du | (nytt mål i rutan) |
| 0:02 | pil |  | Printa en designvas i röd PETG |
| 0:02 | klar | du | (nytt mål i rutan) |
| 0:09 | väntar | ali | Akta pölen. Den har varit där sedan 2014. |
| 0:09 | sak | ali | Akta pölen. Den har varit där sedan 2014. |
| 0:09 | röst | ali | Akta pölen. Den har varit där sedan 2014. · SMÅPRAT |
| 0:10 | bubbla |  | Akta pölen. Den har varit där sedan 2014. |
| 0:11 | skratt | du | Alis dyr-pling |
| 0:11 | händelse | kopt | sak=n2_vas |
| 0:11 | röst | ali | Röd. AI:n sa att röd säljer. AI:n har aldrig sålt något. Men okej. · STORY |
| 0:11 | butiksbubbla | ali | Designvas i röd PETG. Röd. AI:n sa att röd säljer. AI:n har aldrig sålt något. Men okej. |
| 0:14 | klar | ali | Akta pölen. Den har varit där sedan 2014. |
| 0:21 | händelse | printStart | sak=n2_vas |
| 0:21 | toast | bra | 🔗 Slangen kopplad |
| 0:24 | toast | guld | ✅ |
| 0:24 | händelse | printKlar | sak=n2_vas n=1 |
| 0:24 | händelse | malKlart | id=r7-printa-designvas-rod del=Dag 7 – PETG-skrivaren nasta=r7-salj-designvasen |
| 0:24 | väntar | du | Vasen till Ali. Han betalar mer för röd. |
| 0:24 | målruta |  | Sälj designvasen |
| 0:24 | MÅL |  | Sälj designvasen |
| 0:24 | sak | du | Vasen till Ali. Han betalar mer för röd. |
| 0:24 | pil |  | Sälj designvasen |
| 0:24 | notis | tanke | 💭 Vasen till Ali. Han betalar mer för röd. |
| 0:24 | röst | du | Vasen till Ali. Han betalar mer för röd. · MÅL |
| 0:25 | händelse | tagitUrPrint | sak=n2_vas n=1 |
| 0:28 | klar | du | Vasen till Ali. Han betalar mer för röd. |
| 0:28 | kvittens-bock |  | ✓ Printa en designvas i röd PETG |
| 0:37 | aliSalt | ali | 790 |
| 0:38 | händelse | malKlart | id=r7-salj-designvasen del=Dag 7 – PETG-skrivaren nasta=saljlada |
| 0:38 | struken | kedja | vasSald |
| 0:38 | väntar | du | En säljlåda. Då slipper jag springa till Ali med varje vas. |
| 0:38 | målruta |  | Bygg säljlådan vid samlingsplatsen |
| 0:38 | MÅL |  | Bygg säljlådan vid samlingsplatsen |
| 0:39 | sak | du | En säljlåda. Då slipper jag springa till Ali med varje vas. |
| 0:39 | pil |  | Bygg säljlådan vid samlingsplatsen |
| 0:39 | notis | tanke | 💭 En säljlåda. Då slipper jag springa till Ali med varje vas. |
| 0:39 | röst | du | En säljlåda. Då slipper jag springa till Ali med varje vas. · MÅL |
| 0:42 | kvittens-bock |  | ✓ Sälj designvasen |
| 0:44 | klar | du | En säljlåda. Då slipper jag springa till Ali med varje vas. |
| 0:47 | toast | guld | 3D-modell köpt – printa säljlåda på skrivaren |
| 0:47 | händelse | kopt | sak=saljlada |
| 0:55 | händelse | printStart | sak=byggsats:saljlada |
| 0:58 | toast | bra | Del 1 av 2 klar |
| 0:59 | skratt | du | däcket rullar iväg |
| 1:02 | händelse | printKlar | sak=byggsats:saljlada n=1 |
| 1:02 | toast | guld | ✅ |
| 1:02 | händelse | tagitUrPrint | sak=byggsats:saljlada n=1 |
| 1:06 | väntar | värld:TUUT! Tjena! | TUUT! Tjena! |
| 1:06 | händelse | placerat | sak=saljlada |
| 1:06 | kvittens | ali | Jag hämtar varje morgon. Du lägger i, jag betalar. |
| 1:06 | väntar | ali | Jag hämtar varje morgon. Du lägger i, jag betalar. |
| 1:06 | paket |  | sms |
| 1:06 | väntar | rolf | Lådan vid fabriken! Ali kommer mä sin lilla bil varje morron. Ja vinkar. Han vinkar int. /R |
| 1:06 | händelse | malKlart | id=saljlada del=Dag 7 – PETG-skrivaren nasta=saljlada3 |
| 1:06 | väntar | du | Vaserna i lådan. Ali hämtar själv. |
| 1:06 | MÅL |  | Lägg 3 vaser i säljlådan · 0/3 |
| 1:08 | sak | ali | Jag hämtar varje morgon. Du lägger i, jag betalar. |
| 1:08 | notis |  | Jag hämtar varje morgon. Du lägger i, jag betalar. |
| 1:08 | röst | ali | Jag hämtar varje morgon. Du lägger i, jag betalar. · STORY |
| 1:10 | målruta |  | Lägg 3 vaser i säljlådan · 0/3 |
| 1:12 | väntar | mamma | Var pappa där? Han sa att han skulle köpa mjölk! Han kom hem och sa "aha, vad lugnt dom har det". Lugnt? |
| 1:12 | klar | ali | Jag hämtar varje morgon. Du lägger i, jag betalar. |
| 1:12 | sak | du | Vaserna i lådan. Ali hämtar själv. |
| 1:12 | pil |  | Lägg 3 vaser i säljlådan · 0/3 |
| 1:12 | notis | tanke | 💭 Vaserna i lådan. Ali hämtar själv. |
| 1:12 | röst | du | Vaserna i lådan. Ali hämtar själv. · MÅL |
| 1:15 | klar | du | Vaserna i lådan. Ali hämtar själv. |
| 1:17 | struken | värld:TUUT! Tjena! | TUUT! Tjena! |
| 1:21 | händelse | printStart | sak=n2_vas |
| 1:21 | skratt | du | Kajsa i skrivaren |
| 1:24 | toast | guld | ✅ |
| 1:24 | händelse | printKlar | sak=n2_vas n=2 |
| 1:25 | händelse | tagitUrPrint | sak=n2_vas n=1 |
| 1:43 | väntar | info:bra | 📦 1 saker i lådan · Ali hämtar i morgon bitti |
| 1:49 | sak | info:bra | 📦 1 saker i lådan · Ali hämtar i morgon bitti |
| 1:49 | kvitto-visas | info:bra | 📦 1 saker i lådan · Ali hämtar i morgon bitti |
| 1:49 | toast | bra | 📦 1 saker i lådan · Ali hämtar i morgon bitti |
| 1:51 | klar | info:bra | 📦 1 saker i lådan · Ali hämtar i morgon bitti |
| 1:58 | händelse | printStart | sak=n2_vas |
| 2:01 | toast | guld | ✅ |
| 2:01 | händelse | printKlar | sak=n2_vas n=3 |
| 2:01 | händelse | tagitUrPrint | sak=n2_vas n=1 |
| 2:20 | väntar | info:bra | 📦 1 saker i lådan · Ali hämtar i morgon bitti |
| 2:27 | sak | info:bra | 📦 1 saker i lådan · Ali hämtar i morgon bitti |
| 2:27 | kvitto-visas | info:bra | 📦 1 saker i lådan · Ali hämtar i morgon bitti |
| 2:27 | toast | bra | 📦 1 saker i lådan · Ali hämtar i morgon bitti |
| 2:29 | klar | info:bra | 📦 1 saker i lådan · Ali hämtar i morgon bitti |
| 2:35 | händelse | printStart | sak=n2_vas |
| 2:38 | toast | guld | ✅ |
| 2:38 | händelse | printKlar | sak=n2_vas n=4 |
| 2:38 | händelse | tagitUrPrint | sak=n2_vas n=1 |
| 2:39 | skratt | du | falsk tuta |
| 2:58 | väntar | info:bra | 📦 1 saker i lådan · Ali hämtar i morgon bitti |
| 3:01 | väntar | värld:TUUT! Hej grannen! | TUUT! Hej grannen! |
| 3:04 | sak | info:bra | 📦 1 saker i lådan · Ali hämtar i morgon bitti |
| 3:04 | kvitto-visas | info:bra | 📦 1 saker i lådan · Ali hämtar i morgon bitti |
| 3:04 | toast | bra | 📦 1 saker i lådan · Ali hämtar i morgon bitti |
| 3:04 | händelse | malKlart | id=saljlada3 del=Dag 7 – PETG-skrivaren nasta=sov7 |
| 3:04 | paket |  | lapp |
| 3:04 | väntar | du | Dag 7 är slut. Nu vet pappa att jag bor HÄR. Ryggen värker av allt bärande. |
| 3:05 | MÅL |  | Klart för idag – sov när du vill |
| 3:06 | klar | info:bra | 📦 1 saker i lådan · Ali hämtar i morgon bitti |
| 3:06 | sak | du | Dag 7 är slut. Nu vet pappa att jag bor HÄR. Ryggen värker av allt bärande. |
| 3:06 | kvitto-visas | du | Dag 7 är slut. Nu vet pappa att jag bor HÄR. Ryggen värker av allt bärande. |
| 3:06 | lapp | 📔 Dagbok | Dag 7 är slut. Nu vet pappa att jag bor HÄR. Ryggen värker av allt bärande. |
| 3:06 | meddelande | du | Dag 7 är slut. Nu vet pappa att jag bor HÄR. Ryggen värker av allt bärande. |
| 3:06 | dagbokkort | du | Dag 7 är slut. Nu vet pappa att jag bor HÄR. Ryggen värker av allt bärande. |
| 3:07 | röst | du | Dag 7 är slut. Nu vet pappa att jag bor HÄR. Ryggen värker av allt bärande. · STORY |
| 3:15 | händelse | brevLast | id=kvall7 |
| 3:15 | klar | du | Dag 7 är slut. Nu vet pappa att jag bor HÄR. Ryggen värker av allt bärande. |
| 3:15 | väntar | notis:🌇 Klockan är 21. Ali slår igen luckan.  | 🌇 Klockan är 21. Ali slår igen luckan. Dagens jobb är klart – gå in i skjulet och sov i sängen. |
| 3:15 | målruta |  | Klart för idag – sov när du vill |
| 3:15 | sak | du | (nytt mål i rutan) |
| 3:15 | pil |  | Klart för idag – sov när du vill |
| 3:15 | klar | du | (nytt mål i rutan) |
| 3:17 | struken | värld:TUUT! Hej grannen! | TUUT! Hej grannen! |
| 3:23 | aliSalt | ali | 2141 |

<details><summary>Botens handlingar dag 7</summary>

- 0:10 gå till Ali (29 m) (5794 kr)
- 0:10 öppnar Alis butik – köpa receptet designvas i röd petg (5794 kr)
- 0:12 köper n2_vas för 600 kr (5194 kr)
- 0:19 gå till skrivaren (29 m) (5194 kr)
- 0:21 printar Designvas i röd PETG (5194 kr)
- 0:25 tar ut 1 st ur skrivaren (5194 kr)
- 0:36 gå till Ali (29 m) (5194 kr)
- 0:36 öppnar Alis butik – sälja vasen (5194 kr)
- 0:38 säljer hos Ali: +790 kr (5984 kr)
- 0:46 öppnar Alis butik – köpa säljlåda (5984 kr)
- 0:48 köper saljlada för 400 kr (5584 kr)
- 0:54 gå till skrivaren (24 m) (5584 kr)
- 0:55 printar Säljlåda (2 delar) (5584 kr)
- 1:03 tar ut 1 st ur skrivaren (5584 kr)
- 1:05 gå till platsen för säljlåda (9 m) (5584 kr)
- 1:06 ställer ut säljlåda (5584 kr)
- 1:20 gå till skrivaren (13 m) (5584 kr)
- 1:21 printar Designvas i röd PETG (5584 kr)
- 1:25 tar ut 1 st ur skrivaren (5584 kr)
- 1:28 gå till säljlådan (10 m) (5584 kr)
- 1:34 panel: "Säljlådan
0 saker i lådan
Lägg" (5584 kr)
- 1:42 panel: "Säljlådan
0 saker i lådan
Lägg" (5584 kr)
- 1:49 panel: "Säljlådan
1 saker i lådan
Lägg" (5584 kr)
- 1:50 lägger vaserna i säljlådan (DA) (5584 kr)
- 1:56 gå till skrivaren (10 m) (5584 kr)
- 1:58 printar Designvas i röd PETG (5584 kr)
- 2:01 tar ut 1 st ur skrivaren (5584 kr)
- 2:05 gå till säljlådan (10 m) (5584 kr)
- 2:12 panel: "Säljlådan
1 saker i lådan
Lägg" (5584 kr)
- 2:20 panel: "Säljlådan
1 saker i lådan
Lägg" (5584 kr)
- 2:27 panel: "Säljlådan
2 saker i lådan
Lägg" (5584 kr)
- 2:27 lägger vaserna i säljlådan (DA) (5584 kr)
- 2:33 gå till skrivaren (10 m) (5584 kr)
- 2:35 printar Designvas i röd PETG (5584 kr)
- 2:39 tar ut 1 st ur skrivaren (5584 kr)
- 2:42 gå till säljlådan (10 m) (5584 kr)
- 2:49 panel: "Säljlådan
2 saker i lådan
Lägg" (5584 kr)
- 2:57 panel: "Säljlådan
2 saker i lådan
Lägg" (5584 kr)
- 3:04 panel: "Säljlådan
3 saker i lådan
Lägg" (5584 kr)
- 3:05 lägger vaserna i säljlådan (DA) (5584 kr)
- 3:15 popup: "FORTSÄTT" (5584 kr)
- 3:20 gå till sängen (13 m) (5584 kr)

</details>

## Dag 8

| Tid | Källa | Vem | Text |
|---|---|---|---|
| 3:23 | vara | ali | n2_vas |
| 3:23 | händelse | malKlart | id=sov7 del=Dag 7 – PETG-skrivaren nasta=r8-bygg-skrivare-l |
| 3:23 | MÅL |  | Printa och sälj |
| 0:01 | händelse | dagenBorjar | dag=8 |
| 0:01 | meddelande | du | Dag 8. 14 dagar till jul. Utan mer ström står allt still i kylan. |
| 0:01 | dagbokkort | du | Magnetpistolen · Dag 8. 14 dagar till jul. Utan mer ström står allt still i kylan. |
| 0:01 | röst | du | Magnetpistolen. Dag 8. 14 dagar till jul. Utan mer ström står allt still i kylan. · STORY |
| 0:15 | händelse | morgonkortStangt | dag=8 |
| 0:15 | paket |  | sms |
| 0:15 | väntar | ali | Ali här. 🔥 TURBOMOTOR. Jag skrev ”turbo, röda ränder, snabbare än min pappa” till AI:n. Den förstod. Ingen annan förstår. Röda ränder. För farten. Det är vetenskap. |
| 0:15 | struken | kedja | d8 |
| 0:15 | målruta |  | Printa och sälj |
| 0:21 | paket |  | sms |
| 0:21 | väntar | rolf | Grannen står me kikare i fönstret igen. Bry dej int. /R |
| 0:21 | paket |  | sms |
| 0:21 | väntar | ali | Ali här. Kolfiber. Dyrt. Lätt. Jag har ingen kvarn för det. |
| 0:21 | sak | du | (nytt mål i rutan) |
| 0:21 | pil |  | Printa och sälj |
| 0:21 | klar | du | (nytt mål i rutan) |
| 0:23 | struken | notis:🌇 Klockan är 21. Ali slår igen luckan.  | 🌇 Klockan är 21. Ali slår igen luckan. Dagens jobb är klart – gå in i skjulet och sov i sängen. |
| 0:23 | struken | mamma | Var pappa där? Han sa att han skulle köpa mjölk! Han kom hem och sa "aha, vad lugnt dom har det". Lugnt? |
| 0:28 | händelse | printStart | sak=kruka |
| 0:31 | toast | guld | ✅ |
| 0:31 | händelse | printKlar | sak=kruka n=55 |
| 0:31 | händelse | tagitUrPrint | sak=kruka n=1 |
| 0:34 | händelse | printStart | sak=kruka |
| 0:35 | väntar | mamma | Jag sa till pappa att du bor på en soptipp. Han sa "aha, vad lugnt då" och satte på Formel 1. Lugnt? |
| 0:36 | toast | guld | ✅ |
| 0:36 | händelse | printKlar | sak=kruka n=56 |
| 0:37 | händelse | tagitUrPrint | sak=kruka n=1 |
| 0:37 | väntar | info:fel | Göran snodde blomkruka. |
| 0:37 | sak | info:fel | Göran snodde blomkruka. |
| 0:37 | kvitto-visas | info:fel | Göran snodde blomkruka. |
| 0:37 | toast | fel | Göran snodde blomkruka. |
| 0:39 | händelse | printStart | sak=kruka |
| 0:39 | klar | info:fel | Göran snodde blomkruka. |
| 0:42 | toast | guld | ✅ |
| 0:42 | händelse | printKlar | sak=kruka n=57 |
| 0:42 | händelse | tagitUrPrint | sak=kruka n=1 |
| 0:55 | sak | ali | Ali här. Kolfiber. Dyrt. Lätt. Jag har ingen kvarn för det. |
| 0:55 | sms | ali | Ali här. Kolfiber. Dyrt. Lätt. Jag har ingen kvarn för det. |
| 0:55 | sms-bubbla | ali | Ali här. Kolfiber. Dyrt. Lätt. Jag har ingen kvarn för det. |
| 0:55 | röst | ali | Ali här. Kolfiber. Dyrt. Lätt. Jag har ingen kvarn för det. · REAKTION |
| 0:56 | webb | du | packade 1 kruka |
| 1:00 | klar | ali | Ali här. Kolfiber. Dyrt. Lätt. Jag har ingen kvarn för det. |
| 1:11 | väntar | info:bra | 📦 Paketet till En pensionär i Kiruna ligger i postlådan – Rolf tar det till posten |
| 1:11 | sak | info:bra | 📦 Paketet till En pensionär i Kiruna ligger i postlådan – Rolf tar det till posten |
| 1:11 | kvitto-visas | info:bra | 📦 Paketet till En pensionär i Kiruna ligger i postlådan – Rolf tar det till posten |
| 1:11 | toast | bra | 📦 Paketet till En pensionär i Kiruna ligger i postlådan – Rolf tar det till posten |
| 1:13 | klar | info:bra | 📦 Paketet till En pensionär i Kiruna ligger i postlådan – Rolf tar det till posten |
| 1:15 | händelse | printStart | sak=n2_vas |
| 1:18 | toast | guld | ✅ |
| 1:18 | händelse | printKlar | sak=n2_vas n=5 |
| 1:19 | händelse | tagitUrPrint | sak=n2_vas n=1 |
| 1:26 | röst | ali | Ledig? Vad är det? Har aldrig hört talas om det. · STORY |
| 1:26 | butiksbubbla | ali | Ledig? Vad är det? Har aldrig hört talas om det. |
| 1:27 | aliSalt | ali | 1185 |
| 1:36 | skratt | du | kvarnen rapar |
| 1:40 | toast | guld | 🧵 |
| 1:42 | händelse | printStart | sak=n2_vas |
| 1:45 | toast | guld | ✅ |
| 1:45 | händelse | printKlar | sak=n2_vas n=6 |
| 1:46 | händelse | tagitUrPrint | sak=n2_vas n=1 |
| 1:47 | väntar | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått petg-skrivare. Och säljlåda. Mer säger jag inte. Gunnar vet. |
| 1:47 | radio | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått petg-skrivare. Och säljlåda. Mer säger jag inte. Gunnar vet. |
| 1:47 | skratt | du | Radio-Kjelle |
| 1:47 | sak | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått petg-skrivare. Och säljlåda. Mer säger jag inte. Gunnar vet. |
| 1:47 | notis |  | 📻 Radio Tippen: Radio Tippen, Kjelle här. Skjulet vid tippen har fått petg-skrivare. Och säljlåda. Mer säger jag inte. Gunnar vet. |
| 1:47 | röst | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått petg-skrivare. Och säljlåda. Mer säger jag inte. Gunnar vet. · REAKTION |
| 1:48 | toast | guld | 🧵 |
| 1:54 | skratt | du | falsk tuta |
| 1:54 | aliSalt | ali | 1126 |
| 1:56 | klar | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått petg-skrivare. Och säljlåda. Mer säger jag inte. Gunnar vet. |
| 2:06 | händelse | printStart | sak=n2_vas |
| 2:09 | väntar | mamma | Sover du ordentligt? Du ser trött ut. Jag vet att jag inte kan se dig. Men jag vet. |
| 2:09 | toast | guld | ✅ |
| 2:09 | händelse | printKlar | sak=n2_vas n=7 |
| 2:10 | händelse | tagitUrPrint | sak=n2_vas n=1 |
| 2:18 | aliSalt | ali | 1069 |
| 2:27 | händelse | printStart | sak=n2_vas |
| 2:30 | toast | guld | ✅ |
| 2:30 | händelse | printKlar | sak=n2_vas n=8 |
| 2:31 | händelse | tagitUrPrint | sak=n2_vas n=1 |
| 2:39 | aliSalt | ali | 1016 |
| 2:41 | väntar | rolf | Hittade Birgittas gamla kaffekopp under sängen i husvagnen. Ja dricker inte ur den. Ja bara tittar på den. /R |
| 2:49 | händelse | printStart | sak=n2_vas |
| 2:49 | skratt | du | Kajsa i skrivaren |
| 2:52 | toast | guld | ✅ |
| 2:52 | händelse | printKlar | sak=n2_vas n=9 |
| 2:53 | händelse | tagitUrPrint | sak=n2_vas n=1 |
| 3:01 | aliSalt | ali | 965 |
| 3:10 | händelse | printStart | sak=n2_vas |
| 3:13 | toast | guld | ✅ |
| 3:13 | händelse | printKlar | sak=n2_vas n=10 |
| 3:14 | händelse | tagitUrPrint | sak=n2_vas n=1 |
| 3:22 | aliSalt | ali | 917 |
| 3:35 | skratt | du | kvarnen rapar |
| 3:39 | toast | guld | 🧵 |
| 3:41 | händelse | printStart | sak=n2_vas |
| 3:42 | upplåst | skrivare | skrivare3 |
| 3:42 | brott | RESERV | skrivare3 (skrivare 560 av 75) |
| 3:42 | händelse | upplast | id=skrivare3 flask=skrivare |
| 3:42 | paket |  | sms |
| 3:42 | väntar | ali | Ali här. Skrivare L. En meter byggvolym. Jag bad AI:n om något stort. Den gjorde något ENORMT. Den är större än min butik. Nästan. |
| 3:42 | sak | ali | Ali här. Skrivare L. En meter byggvolym. Jag bad AI:n om något stort. Den gjorde något ENORMT. Den är större än min butik. Nästan. |
| 3:42 | sms | ali | Ali här. Skrivare L. En meter byggvolym. Jag bad AI:n om något stort. Den gjorde något ENORMT. Den är större än min butik. Nästan. |
| 3:42 | sms-bubbla | ali | Ali här. Skrivare L. En meter byggvolym. Jag bad AI:n om något stort. Den gjorde något ENORMT. Den är större än min butik. Nästan. |
| 3:42 | röst | ali | Ali här. Skrivare L. En meter byggvolym. Jag bad AI:n om något stort. Den gjorde något ENORMT. Den är större än min butik. Nästan. · STORY |
| 3:44 | toast | guld | ✅ |
| 3:44 | händelse | printKlar | sak=n2_vas n=11 |
| 3:45 | händelse | tagitUrPrint | sak=n2_vas n=1 |
| 3:47 | toast | guld | 🧵 |
| 3:49 | väntar | värld:TUUT! Tjena! | TUUT! Tjena! |
| 3:53 | klar | ali | Ali här. Skrivare L. En meter byggvolym. Jag bad AI:n om något stort. Den gjorde något ENORMT. Den är större än min butik. Nästan. |
| 3:54 | aliSalt | ali | 871 |
| 3:57 | skratt | du | Alis dyr-pling |
| 3:57 | toast | guld | 3D-modell köpt – printa skrivare l på skrivaren |
| 3:57 | händelse | kopt | sak=skrivare3 |
| 4:03 | väntar | bud | (tips) |
| 4:03 | sak | bud | (tips) |
| 4:04 | klar | bud | (tips) |
| 4:05 | händelse | printStart | sak=byggsats:skrivare3 |
| 4:06 | meddelande | mamma | Kommer du hem på jul? Pappa har redan köpt skinkan. I augusti. Den ligger i frysen och tittar på mig. |
| 4:07 | röst | mamma | Kommer du hem på jul? Pappa har redan köpt skinkan. I augusti. Den ligger i frysen och tittar på mig. · STORY |
| 4:19 | paket |  | sms |
| 4:19 | väntar | mamma | Det säger du nu. |
| 4:30 | händelse | brevLast | id=m_jul |
| 4:32 | struken | värld:TUUT! Tjena! | TUUT! Tjena! |
| 4:32 | sak | mamma | Det säger du nu. |
| 4:32 | sms | mamma | Det säger du nu. |
| 4:32 | sms-bubbla | mamma | Det säger du nu. |
| 4:32 | röst | mamma | Det säger du nu. · STORY |
| 4:33 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 4:35 | klar | mamma | Det säger du nu. |
| 4:48 | toast | bra | Del 1 av 6 klar |
| 4:48 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 4:50 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 4:51 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 4:52 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 4:53 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 4:54 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 4:54 | toast | bra | Del 2 av 6 klar |
| 4:55 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 4:57 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 4:58 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 5:00 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 5:01 | toast | bra | Del 3 av 6 klar |
| 5:02 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 5:03 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 5:04 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 5:06 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 5:07 | toast | bra | Del 4 av 6 klar |
| 5:08 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 5:09 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 5:09 | väntar | notis:Skrivare M: Tornet är tomt – mal mer så  | Skrivare M: Tornet är tomt – mal mer så fortsätter den |
| 5:09 | sak | notis:Skrivare M: Tornet är tomt – mal mer så  | Skrivare M: Tornet är tomt – mal mer så fortsätter den |
| 5:09 | notis | fel | Skrivare M: Tornet är tomt – mal mer så fortsätter den |
| 5:12 | klar | notis:Skrivare M: Tornet är tomt – mal mer så  | Skrivare M: Tornet är tomt – mal mer så fortsätter den |
| 5:16 | väntar | info:fel | Fullt i händerna. |
| 5:16 | sak | info:fel | Fullt i händerna. |
| 5:16 | kvitto-visas | info:fel | Fullt i händerna. |
| 5:16 | toast | fel | Fullt i händerna. |
| 5:18 | klar | info:fel | Fullt i händerna. |
| 5:22 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 5:22 | struken | notis | Skrivare M: Tornet är tomt – mal mer så fortsätter den |
| 5:24 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 5:24 | skratt | du | kvarnen spottar |
| 5:25 | toast | bra | Del 5 av 6 klar |
| 5:25 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 5:27 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 5:28 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 5:29 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 5:31 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 5:31 | händelse | printKlar | sak=byggsats:skrivare3 n=1 |
| 5:31 | toast | guld | ✅ |
| 5:38 | händelse | tagitUrPrint | sak=byggsats:skrivare3 n=1 |
| 5:39 | väntar | bud | (tips) |
| 5:39 | sak | bud | (tips) |
| 5:40 | klar | bud | (tips) |
| 5:41 | händelse | placerat | sak=skrivare3 |
| 5:41 | händelse | malKlart | id=r8-bygg-skrivare-l del=Dag 8 – Magnetpistolen nasta=r8-bygg-magnetpistolen |
| 5:41 | väntar | du | Plocka skräp och mal det. |
| 5:41 | målruta |  | Plocka skräp och mal det |
| 5:41 | MÅL |  | Plocka skräp och mal det |
| 5:41 | upplåst | bara | magnet |
| 5:41 | brott | UPPLÅST | magnet (bara 13 av 6) |
| 5:41 | händelse | upplast | id=magnet flask=bara |
| 5:41 | paket |  | tanke → sms |
| 5:41 | tanke | du | En tunna i taget på säckkärran. Det måste gå fortare. |
| 5:41 | väntar | du | En tunna i taget på säckkärran. Det måste gå fortare. |
| 5:41 | väntar | ali | Ali här. Jag har inte sovit på tre dygn. 🧲 MAGNETPISTOL. Den drog åt sig min nyckelknippa, min klocka och nästan en tand. Det här är framtiden, min vän. Du kommer gilla den. Jag gillar den. Säg inte till nån att jag gillar nåt. |
| 5:42 | sak | du | Plocka skräp och mal det. |
| 5:42 | pil |  | Bygg magnetpistolen |
| 5:42 | röst | du | Bygg magnetpistolen. · MÅL |
| 5:44 | klar | du | Bygg magnetpistolen. |
| 5:45 | kvittens-bock |  | ✓ Bygg Skrivare L |
| 5:45 | skratt | du | falsk tuta |
| 5:46 | meddelande | mamma | Fick du kompotten? Det är rotfruktsgratäng. Potatisen var slut så jag tog kålrot, palsternacka och lite selleri. Värm i ugnen! Har du ugn? |
| 5:48 | röst | mamma | Fick du kompotten? Det är rotfruktsgratäng. Potatisen var slut så jag tog kålrot, palsternacka och lite selleri. Värm i ugnen! Har du ugn? · STORY |
| 6:02 | paket |  | sms |
| 6:02 | väntar | mamma | Ingen ugn. Jag skickar en ugn med pappa. … Pappa säger att den inte får plats i bilen. Ät den kall då. |
| 6:15 | händelse | brevLast | id=m_kompott |
| 6:17 | sak | du | En tunna i taget på säckkärran. Det måste gå fortare. |
| 6:17 | notis | tanke | 💭 En tunna i taget på säckkärran. Det måste gå fortare. |
| 6:17 | röst | du | En tunna i taget på säckkärran. Det måste gå fortare. · STORY |
| 6:22 | klar | du | En tunna i taget på säckkärran. Det måste gå fortare. |
| 6:22 | skratt | du | Alis dyr-pling |
| 6:22 | toast | guld | 3D-modell köpt – printa magnetpistol på skrivaren |
| 6:22 | händelse | kopt | sak=magnet |
| 6:24 | struken | ali | Ali här. Jag har inte sovit på tre dygn. 🧲 MAGNETPISTOL. Den drog åt sig min nyckelknippa, min klocka och nästan en tand. Det här är framtiden, min vän. Du kommer gilla den. Jag gillar den. Säg inte till nån att jag gillar nåt. |
| 6:24 | struken | ali | Ali här. 🔥 TURBOMOTOR. Jag skrev ”turbo, röda ränder, snabbare än min pappa” till AI:n. Den förstod. Ingen annan förstår. Röda ränder. För farten. Det är vetenskap. |
| 6:31 | händelse | printStart | sak=byggsats:magnet |
| 6:33 | toast | bra | Del 1 av 3 klar |
| 6:34 | sak | mamma | Ingen ugn. Jag skickar en ugn med pappa. … Pappa säger att den inte får plats i bilen. Ät den kall då. |
| 6:34 | sms | mamma | Ingen ugn. Jag skickar en ugn med pappa. … Pappa säger att den inte får plats i bilen. Ät den kall då. |
| 6:34 | sms-bubbla | mamma | Ingen ugn. Jag skickar en ugn med pappa. … Pappa säger att den inte får plats i bilen. Ät den kall då. |
| 6:34 | röst | mamma | Ingen ugn. Jag skickar en ugn med pappa. … Pappa säger att den inte får plats i bilen. Ät den kall då. · STORY |
| 6:36 | toast | bra | Del 2 av 3 klar |
| 6:36 | väntar | värld:TUUT TUUT! | TUUT TUUT! |
| 6:37 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 6:42 | skratt | du | kvarnen rapar |
| 6:43 | klar | mamma | Ingen ugn. Jag skickar en ugn med pappa. … Pappa säger att den inte får plats i bilen. Ät den kall då. |
| 6:45 | händelse | printKlar | sak=byggsats:magnet n=1 |
| 6:45 | toast | guld | ✅ |
| 6:50 | toast | guld | 🧵 |
| 6:50 | väntar | info:guld | 🧲 Magnetpistolen är klar! Den ligger i verktygsraden – gripen har du kvar på plats 1. |
| 6:50 | händelse | tagitUrPrint | sak=byggsats:magnet n=1 |
| 6:50 | struken | kedja | magnet |
| 6:50 | sak | info:guld | 🧲 Magnetpistolen är klar! Den ligger i verktygsraden – gripen har du kvar på plats 1. |
| 6:50 | kvitto-visas | info:guld | 🧲 Magnetpistolen är klar! Den ligger i verktygsraden – gripen har du kvar på plats 1. |
| 6:50 | toast | guld | 🧲 Magnetpistolen är klar! Den ligger i verktygsraden – gripen har du kvar på plats 1. |
| 6:50 | händelse | malKlart | id=r8-bygg-magnetpistolen del=Dag 8 – Magnetpistolen nasta=r8-mal-tunga-saker |
| 6:50 | händelse | malKlart | id=r8-mal-tunga-saker del=Dag 8 – Magnetpistolen nasta=r8-bygg-batteribank |
| 6:50 | MÅL |  | Printa och sälj |
| 6:52 | klar | info:guld | 🧲 Magnetpistolen är klar! Den ligger i verktygsraden – gripen har du kvar på plats 1. |
| 6:52 | målruta |  | Printa och sälj |
| 6:54 | kvittens-bock |  | ✓ Bygg magnetpistolen |
| 6:54 | kvittens-bock |  | ✓ Mal tunga saker i PETG-kvarnen · 3/3 |
| 6:54 | sak | du | (nytt mål i rutan) |
| 6:54 | pil |  | Printa och sälj |
| 6:54 | toast | guld | 🧵 |
| 6:54 | klar | du | (nytt mål i rutan) |
| 6:56 | struken | värld:TUUT TUUT! | TUUT TUUT! |
| 6:58 | händelse | printStart | sak=n2_vas |
| 7:01 | skratt | du | plastspagetti |
| 7:01 | toast | guld | ✅ |
| 7:01 | händelse | printKlar | sak=n2_vas n=12 |
| 7:02 | händelse | tagitUrPrint | sak=spagetti n=1 |
| 7:03 | väntar | foto | Magneten |
| 7:03 | paket |  | tanke |
| 7:03 | tanke | du | Nu kommer allt till mig i stället. |
| 7:03 | väntar | du | Nu kommer allt till mig i stället. |
| 7:03 | sak | foto | Magneten |
| 7:03 | foto | du | Magneten |
| 7:05 | klar | foto | Magneten |
| 7:07 | sak | du | Nu kommer allt till mig i stället. |
| 7:07 | notis | tanke | 💭 Nu kommer allt till mig i stället. |
| 7:07 | röst | du | Nu kommer allt till mig i stället. · STORY |
| 7:10 | klar | du | Nu kommer allt till mig i stället. |
| 7:10 | skratt | du | Ali köper konst |
| 7:10 | aliSalt | ali | 3 |
| 7:19 | händelse | printStart | sak=n2_vas |
| 7:22 | toast | guld | ✅ |
| 7:22 | händelse | printKlar | sak=n2_vas n=13 |
| 7:23 | händelse | tagitUrPrint | sak=n2_vas n=1 |
| 7:31 | aliSalt | ali | 830 |
| 7:39 | händelse | printStart | sak=n2_vas |
| 7:42 | toast | guld | ✅ |
| 7:42 | händelse | printKlar | sak=n2_vas n=14 |
| 7:43 | händelse | tagitUrPrint | sak=n2_vas n=1 |
| 7:51 | aliSalt | ali | 830 |
| 8:01 | händelse | printStart | sak=n2_vas |
| 8:04 | toast | guld | ✅ |
| 8:04 | händelse | printKlar | sak=n2_vas n=15 |
| 8:05 | händelse | tagitUrPrint | sak=n2_vas n=1 |
| 8:09 | struken | mamma | Sover du ordentligt? Du ser trött ut. Jag vet att jag inte kan se dig. Men jag vet. |
| 8:13 | aliSalt | ali | 830 |
| 8:26 | skratt | du | kvarnen rapar |
| 8:31 | toast | guld | 🧵 |
| 8:31 | skratt | du | falsk tuta |
| 8:31 | väntar | värld:TUUT TUUT! | TUUT TUUT! |
| 8:31 | sak | värld:TUUT TUUT! | TUUT TUUT! |
| 8:31 | bubbla |  | TUUT TUUT! |
| 8:33 | händelse | printStart | sak=n2_vas |
| 8:34 | klar | värld:TUUT TUUT! | TUUT TUUT! |
| 8:36 | toast | guld | ✅ |
| 8:36 | händelse | printKlar | sak=n2_vas n=16 |
| 8:37 | händelse | tagitUrPrint | sak=n2_vas n=1 |
| 8:45 | aliSalt | ali | 830 |
| 8:54 | händelse | printStart | sak=n2_vas |
| 8:58 | toast | guld | ✅ |
| 8:58 | händelse | printKlar | sak=n2_vas n=17 |
| 8:58 | händelse | tagitUrPrint | sak=n2_vas n=1 |
| 9:06 | aliSalt | ali | 830 |
| 9:11 | väntar | mamma | Jag sa till pappa att du bor på en soptipp. Han sa "aha, vad lugnt då" och satte på Formel 1. Lugnt? |
| 9:19 | skratt | du | kvarnen rapar |
| 9:23 | toast | guld | 🧵 |
| 9:26 | händelse | printStart | sak=n2_vas |
| 9:29 | toast | guld | ✅ |
| 9:29 | händelse | printKlar | sak=n2_vas n=18 |
| 9:30 | händelse | tagitUrPrint | sak=n2_vas n=1 |
| 9:30 | toast | guld | 🧵 |
| 9:38 | aliSalt | ali | 830 |
| 9:48 | händelse | printStart | sak=n2_vas |
| 9:51 | toast | guld | ✅ |
| 9:51 | händelse | printKlar | sak=n2_vas n=19 |
| 9:52 | händelse | tagitUrPrint | sak=n2_vas n=1 |
| 10:00 | aliSalt | ali | 830 |
| 10:08 | upplåst | strom | bank |
| 10:08 | brott | RESERV | bank (strom 0 av 15) |
| 10:08 | händelse | upplast | id=bank flask=strom |
| 10:08 | paket |  | sms |
| 10:08 | väntar | ali | Ali här. Batteribank. Sparar solen till kvällen. Som en kyl, fast för ström. |
| 10:08 | sak | ali | Ali här. Batteribank. Sparar solen till kvällen. Som en kyl, fast för ström. |
| 10:08 | sms | ali | Ali här. Batteribank. Sparar solen till kvällen. Som en kyl, fast för ström. |
| 10:08 | sms-bubbla | ali | Ali här. Batteribank. Sparar solen till kvällen. Som en kyl, fast för ström. |
| 10:08 | röst | ali | Ali här. Batteribank. Sparar solen till kvällen. Som en kyl, fast för ström. · STORY |
| 10:09 | händelse | printStart | sak=n2_vas |
| 10:12 | toast | guld | ✅ |
| 10:12 | händelse | printKlar | sak=n2_vas n=20 |
| 10:13 | händelse | tagitUrPrint | sak=n2_vas n=1 |
| 10:14 | klar | ali | Ali här. Batteribank. Sparar solen till kvällen. Som en kyl, fast för ström. |
| 10:21 | aliSalt | ali | 830 |
| 10:25 | skratt | du | Alis dyr-pling |
| 10:25 | toast | guld | 3D-modell köpt – printa batteribank på skrivaren |
| 10:25 | händelse | kopt | sak=bank |
| 10:33 | händelse | printStart | sak=byggsats:bank |
| 10:33 | toast | bra | 🔗 Slangen kopplad |
| 10:34 | toast | bra | Del 1 av 2 klar |
| 10:36 | händelse | printKlar | sak=byggsats:bank n=1 |
| 10:36 | toast | guld | ✅ |
| 10:37 | händelse | tagitUrPrint | sak=byggsats:bank n=1 |
| 10:43 | händelse | placerat | sak=bank |
| 10:43 | händelse | malKlart | id=r8-bygg-batteribank del=Dag 8 – Magnetpistolen nasta=hylla8 |
| 10:43 | väntar | du | Bygg hyllan. |
| 10:43 | målruta |  | Bygg hyllan |
| 10:43 | MÅL |  | Bygg hyllan |
| 10:45 | sak | du | Bygg hyllan. |
| 10:45 | pil |  | Bygg hyllan |
| 10:45 | röst | du | Bygg hyllan. · MÅL |
| 10:45 | nick |  | nick:75 |
| 10:47 | klar | du | Bygg hyllan. |
| 10:47 | kvittens-bock |  | ✓ Bygg en batteribank |
| 10:59 | toast | guld | 🗄️ Hyllan ligger i handen – klicka på skjulet för att sätta upp den |
| 10:59 | händelse | kopt | sak=hylla |
| 10:59 | röst | ali | En hylla. Den lutar lite. Det är karaktär. · STORY |
| 10:59 | butiksbubbla | ali | En hylla. Den lutar lite. Det är karaktär. |
| 11:04 | väntar | info:info | Pappa kommer gående. Han bär på en kasse … |
| 11:04 | scenInfo | pappa | Pappa kommer |
| 11:05 | väntar | info:guld | 🗄️ Hyllan sitter i skjulet – 8 platser till i förrådet |
| 11:05 | monterat | du | byggsats:hylla |
| 11:05 | händelse | monterat | sak=hylla |
| 11:05 | sak | info:guld | 🗄️ Hyllan sitter i skjulet – 8 platser till i förrådet |
| 11:05 | kvitto-visas | info:guld | 🗄️ Hyllan sitter i skjulet – 8 platser till i förrådet |
| 11:05 | toast | guld | 🗄️ Hyllan sitter i skjulet – 8 platser till i förrådet |
| 11:05 | paket |  | tanke |
| 11:05 | tanke | du | En hylla. Jag har en hylla. Saker har en plats nu. |
| 11:05 | väntar | du | En hylla. Jag har en hylla. Saker har en plats nu. |
| 11:05 | händelse | malKlart | id=hylla8 del=Dag 8 – Magnetpistolen nasta=sov8 |
| 11:05 | paket |  | lapp |
| 11:05 | väntar | du | Dag 8 är slut. Strömmen räcker inte till alla skrivare. |
| 11:05 | MÅL |  | Klart för idag – sov när du vill |
| 11:07 | klar | info:guld | 🗄️ Hyllan sitter i skjulet – 8 platser till i förrådet |
| 11:07 | sak | du | En hylla. Jag har en hylla. Saker har en plats nu. |
| 11:07 | kvitto-visas | du | En hylla. Jag har en hylla. Saker har en plats nu. |
| 11:07 | notis | tanke | 💭 En hylla. Jag har en hylla. Saker har en plats nu. |
| 11:07 | röst | du | En hylla. Jag har en hylla. Saker har en plats nu. · REAKTION |
| 11:09 | målruta |  | Klart för idag – sov när du vill |
| 11:09 | kvittens-bock |  | ✓ Bygg hyllan |
| 11:12 | klar | du | En hylla. Jag har en hylla. Saker har en plats nu. |
| 11:12 | sak | du | (nytt mål i rutan) |
| 11:12 | pil |  | Klart för idag – sov när du vill |
| 11:12 | klar | du | (nytt mål i rutan) |
| 11:12 | sak | du | Dag 8 är slut. Strömmen räcker inte till alla skrivare. |
| 11:12 | kvitto-visas | du | Dag 8 är slut. Strömmen räcker inte till alla skrivare. |
| 11:12 | lapp | 📔 Dagbok | Dag 8 är slut. Strömmen räcker inte till alla skrivare. |
| 11:12 | meddelande | du | Dag 8 är slut. Strömmen räcker inte till alla skrivare. |
| 11:12 | dagbokkort | du | Dag 8 är slut. Strömmen räcker inte till alla skrivare. |
| 11:12 | röst | du | Dag 8 är slut. Strömmen räcker inte till alla skrivare. · STORY |
| 11:18 | brott | SEN KVITTENS | 2.3 s sen: ”Dag 8 är slut. Strömmen räcker inte till alla skr” (dagbok kvall8) |
| 11:18 | händelse | brevLast | id=kvall8 |
| 11:18 | klar | du | Dag 8 är slut. Strömmen räcker inte till alla skrivare. |
| 11:18 | väntar | notis:🌇 Klockan är 21. Ali slår igen luckan.  | 🌇 Klockan är 21. Ali slår igen luckan. Dagens jobb är klart – gå in i skjulet och sov i sängen. |
| 11:19 | struken | info:info | Pappa kommer gående. Han bär på en kasse … |
| 11:21 | webbBetalt | du | 90 |

<details><summary>Botens handlingar dag 8</summary>

- 0:00 — dag 8 börjar — (7725 kr)
- 0:15 popup: "FORTSÄTT" (7725 kr)
- 0:27 gå till skrivaren (17 m) (7725 kr)
- 0:28 printar Blomkruka (7725 kr)
- 0:32 tar ut 1 st ur skrivaren (7725 kr)
- 0:34 printar Blomkruka (7725 kr)
- 0:38 tar ut 1 st ur skrivaren (7725 kr)
- 0:39 printar Blomkruka (7725 kr)
- 0:43 tar ut 1 st ur skrivaren (7725 kr)
- 0:47 gå till datorn (18 m) (7725 kr)
- 0:55 panel: "Webbshopen · Soptippsvägen 1
B" (7725 kr)
- 1:04 panel: "Webbshopen · Soptippsvägen 1
B" (7725 kr)
- 1:11 gå till Rolfs postlåda (paket) (29 m) (7725 kr)
- 1:11 webbshop: 1 paket i postlådan (7725 kr)
- 1:11 tjänar pengar till väntar på flaskhalsen för skrivare3: 7725/7765 kr → printar designvas i röd petg (1185 kr) (7725 kr)
- 1:13 gå till skrivaren (10 m) (7725 kr)
- 1:15 printar Designvas i röd PETG (7725 kr)
- 1:19 tar ut 1 st ur skrivaren (7725 kr)
- 1:26 gå till Ali (30 m) (7725 kr)
- 1:26 öppnar Alis butik – sälja (7725 kr)
- 1:28 säljer hos Ali: +1185 kr (8910 kr)
- 1:28 tjänar pengar till väntar på flaskhalsen för skrivare3: 8910/8950 kr → printar designvas i röd petg (1126 kr) (8910 kr)
- 1:31 gå till en tunna (12 m) (8910 kr)
- 1:36 gå till PETG-kvarnen (20 m) (8910 kr)
- 1:36 tömmer det tunga i PETG-kvarnen (8910 kr)
- 1:40 gå till skrivaren (1 m) (8910 kr)
- 1:42 printar Designvas i röd PETG (8910 kr)
- 1:46 tar ut 1 st ur skrivaren (8910 kr)
- 1:52 gå till Ali (31 m) (8910 kr)
- 1:52 öppnar Alis butik – sälja (8910 kr)
- 1:54 säljer hos Ali: +1126 kr (10036 kr)
- 1:58 tjänar pengar till väntar på flaskhalsen för skrivare3: 10036/10076 kr → printar designvas i röd petg (1069 kr) (10036 kr)
- 2:04 gå till skrivaren (29 m) (10036 kr)
- 2:06 printar Designvas i röd PETG (10036 kr)
- 2:10 tar ut 1 st ur skrivaren (10036 kr)
- 2:16 gå till Ali (29 m) (10036 kr)
- 2:16 öppnar Alis butik – sälja (10036 kr)
- 2:18 säljer hos Ali: +1069 kr (11105 kr)
- 2:20 tjänar pengar till väntar på flaskhalsen för skrivare3: 11105/11145 kr → printar designvas i röd petg (1016 kr) (11105 kr)
- 2:26 gå till skrivaren (29 m) (11105 kr)
- 2:27 printar Designvas i röd PETG (11105 kr)
- 2:32 tar ut 1 st ur skrivaren (11105 kr)
- 2:38 gå till Ali (29 m) (11105 kr)
- 2:38 öppnar Alis butik – sälja (11105 kr)
- 2:40 säljer hos Ali: +1016 kr (12121 kr)
- 2:41 tjänar pengar till väntar på flaskhalsen för skrivare3: 12121/12161 kr → printar designvas i röd petg (965 kr) (12121 kr)
- 2:47 gå till skrivaren (29 m) (12121 kr)
- 2:49 printar Designvas i röd PETG (12121 kr)
- 2:53 tar ut 1 st ur skrivaren (12121 kr)
- 2:59 gå till Ali (29 m) (12121 kr)
- 2:59 öppnar Alis butik – sälja (12121 kr)
- 3:01 säljer hos Ali: +965 kr (13086 kr)
- 3:03 tjänar pengar till väntar på flaskhalsen för skrivare3: 13086/13126 kr → printar designvas i röd petg (917 kr) (13086 kr)
- 3:09 gå till skrivaren (29 m) (13086 kr)
- 3:10 printar Designvas i röd PETG (13086 kr)
- 3:15 tar ut 1 st ur skrivaren (13086 kr)
- 3:21 gå till Ali (29 m) (13086 kr)
- 3:21 öppnar Alis butik – sälja (13086 kr)
- 3:23 säljer hos Ali: +917 kr (14003 kr)
- 3:24 tjänar pengar till väntar på flaskhalsen för skrivare3: 14003/14043 kr → printar designvas i röd petg (871 kr) (14003 kr)
- 3:32 gå till en tunna (36 m) (14003 kr)
- 3:35 gå till PETG-kvarnen (11 m) (14003 kr)
- 3:35 tömmer det tunga i PETG-kvarnen (14003 kr)
- 3:40 gå till skrivaren (3 m) (14003 kr)
- 3:41 printar Designvas i röd PETG (14003 kr)
- 3:46 tar ut 1 st ur skrivaren (14003 kr)
- 3:52 gå till Ali (31 m) (14003 kr)
- 3:52 öppnar Alis butik – sälja (14003 kr)
- 3:54 säljer hos Ali: +871 kr (14874 kr)
- 3:56 öppnar Alis butik – köpa skrivare l (14874 kr)
- 3:58 köper skrivare3 för 3500 kr (11374 kr)
- 4:04 gå till skrivaren (24 m) (11374 kr)
- 4:05 printar Skrivare L (6 delar) (11374 kr)
- 4:19 popup: "Nej. Jag firar här." (11374 kr)
- 4:30 popup: "Läst" (11374 kr)
- 4:43 plockar 5 skräp på tippen (bär max 16) (11374 kr)
- 4:46 gå till kvarnen (14 m) (11374 kr)
- 5:16 plockar 8 skräp på tippen (bär max 16) (11374 kr)
- 5:19 gå till kvarnen (13 m) (11374 kr)
- 5:38 gå till skrivaren (5 m) (11374 kr)
- 5:38 tar ut 1 st ur skrivaren (11374 kr)
- 5:40 gå till platsen för skrivare l (5 m) (11374 kr)
- 5:41 ställer ut skrivare l (11374 kr)
- 6:02 popup: "Jag har ingen ugn." (11374 kr)
- 6:15 popup: "Läst" (11374 kr)
- 6:20 gå till Ali (22 m) (11374 kr)
- 6:20 öppnar Alis butik – köpa magnetpistol (11374 kr)
- 6:23 köper magnet för 2400 kr (8974 kr)
- 6:30 gå till skrivaren (29 m) (8974 kr)
- 6:31 printar Magnetpistol (3 delar) (8974 kr)
- 6:40 gå till en tunna (13 m) (8974 kr)
- 6:42 gå till PETG-kvarnen (7 m) (8974 kr)
- 6:42 tömmer det tunga i PETG-kvarnen (8974 kr)
- 6:50 gå till skrivaren (4 m) (8974 kr)
- 6:51 tar ut 1 st ur skrivaren (8974 kr)
- 6:56 tjänar pengar till väntar på flaskhalsen för bank: 8974/9014 kr → printar designvas i röd petg (830 kr) (8974 kr)
- 6:58 printar Designvas i röd PETG (8974 kr)
- 7:02 tar ut 1 st ur skrivaren (8974 kr)
- 7:09 gå till Ali (31 m) (8974 kr)
- 7:09 öppnar Alis butik – sälja (8974 kr)
- 7:11 säljer hos Ali: +3 kr (8977 kr)
- 7:11 tjänar pengar till väntar på flaskhalsen för bank: 8977/9014 kr → printar designvas i röd petg (830 kr) (8977 kr)
- 7:17 gå till skrivaren (29 m) (8977 kr)
- 7:19 printar Designvas i röd PETG (8977 kr)
- 7:23 tar ut 1 st ur skrivaren (8977 kr)
- 7:29 gå till Ali (29 m) (8977 kr)
- 7:29 öppnar Alis butik – sälja (8977 kr)
- 7:31 säljer hos Ali: +830 kr (9807 kr)
- 7:32 tjänar pengar till väntar på flaskhalsen för bank: 9807/9847 kr → printar designvas i röd petg (830 kr) (9807 kr)
- 7:38 gå till skrivaren (29 m) (9807 kr)
- 7:39 printar Designvas i röd PETG (9807 kr)
- 7:44 tar ut 1 st ur skrivaren (9807 kr)
- 7:50 gå till Ali (29 m) (9807 kr)
- 7:50 öppnar Alis butik – sälja (9807 kr)
- 7:52 säljer hos Ali: +830 kr (10637 kr)
- 7:53 tjänar pengar till väntar på flaskhalsen för bank: 10637/10677 kr → printar designvas i röd petg (830 kr) (10637 kr)
- 7:59 gå till skrivaren (29 m) (10637 kr)
- 8:01 printar Designvas i röd PETG (10637 kr)
- 8:05 tar ut 1 st ur skrivaren (10637 kr)
- 8:11 gå till Ali (29 m) (10637 kr)
- 8:11 öppnar Alis butik – sälja (10637 kr)
- 8:13 säljer hos Ali: +830 kr (11467 kr)
- 8:15 tjänar pengar till väntar på flaskhalsen för bank: 11467/11507 kr → printar designvas i röd petg (830 kr) (11467 kr)
- 8:22 gå till en tunna (36 m) (11467 kr)
- 8:26 gå till PETG-kvarnen (12 m) (11467 kr)
- 8:26 tömmer det tunga i PETG-kvarnen (11467 kr)
- 8:31 gå till skrivaren (3 m) (11467 kr)
- 8:33 printar Designvas i röd PETG (11467 kr)
- 8:37 tar ut 1 st ur skrivaren (11467 kr)
- 8:43 gå till Ali (31 m) (11467 kr)
- 8:43 öppnar Alis butik – sälja (11467 kr)
- 8:45 säljer hos Ali: +830 kr (12297 kr)
- 8:47 tjänar pengar till väntar på flaskhalsen för bank: 12297/12337 kr → printar designvas i röd petg (830 kr) (12297 kr)
- 8:53 gå till skrivaren (29 m) (12297 kr)
- 8:54 printar Designvas i röd PETG (12297 kr)
- 8:59 tar ut 1 st ur skrivaren (12297 kr)
- 9:05 gå till Ali (29 m) (12297 kr)
- 9:05 öppnar Alis butik – sälja (12297 kr)
- 9:07 säljer hos Ali: +830 kr (13127 kr)
- 9:08 tjänar pengar till väntar på flaskhalsen för bank: 13127/13167 kr → printar designvas i röd petg (830 kr) (13127 kr)
- 9:16 gå till en tunna (36 m) (13127 kr)
- 9:19 gå till PETG-kvarnen (10 m) (13127 kr)
- 9:19 tömmer det tunga i PETG-kvarnen (13127 kr)
- 9:24 gå till skrivaren (3 m) (13127 kr)
- 9:26 printar Designvas i röd PETG (13127 kr)
- 9:30 tar ut 1 st ur skrivaren (13127 kr)
- 9:37 gå till Ali (31 m) (13127 kr)
- 9:37 öppnar Alis butik – sälja (13127 kr)
- 9:38 säljer hos Ali: +830 kr (13957 kr)
- 9:40 tjänar pengar till väntar på flaskhalsen för bank: 13957/13997 kr → printar designvas i röd petg (830 kr) (13957 kr)
- 9:46 gå till skrivaren (29 m) (13957 kr)
- 9:48 printar Designvas i röd PETG (13957 kr)
- 9:52 tar ut 1 st ur skrivaren (13957 kr)
- 9:58 gå till Ali (29 m) (13957 kr)
- 9:58 öppnar Alis butik – sälja (13957 kr)
- 10:00 säljer hos Ali: +830 kr (14787 kr)
- 10:02 tjänar pengar till väntar på flaskhalsen för bank: 14787/14827 kr → printar designvas i röd petg (830 kr) (14787 kr)
- 10:08 gå till skrivaren (29 m) (14787 kr)
- 10:09 printar Designvas i röd PETG (14787 kr)
- 10:14 tar ut 1 st ur skrivaren (14787 kr)
- 10:20 gå till Ali (29 m) (14787 kr)
- 10:20 öppnar Alis butik – sälja (14787 kr)
- 10:21 säljer hos Ali: +830 kr (15617 kr)
- 10:23 öppnar Alis butik – köpa batteribank (15617 kr)
- 10:25 köper bank för 800 kr (14817 kr)
- 10:31 gå till skrivaren (23 m) (14817 kr)
- 10:33 printar Batteribank (2 delar) (14817 kr)
- 10:37 tar ut 1 st ur skrivaren (14817 kr)
- 10:42 gå till platsen för batteribank (26 m) (14817 kr)
- 10:43 ställer ut batteribank (14817 kr)
- 10:58 gå till Ali (43 m) (14817 kr)
- 10:58 öppnar Alis butik – köpa hylla (14817 kr)
- 11:00 köper hylla för 150 kr (14667 kr)
- 11:05 gå till sätt upp hyllan i skjulet (19 m) (14667 kr)
- 11:18 popup: "FORTSÄTT" (14667 kr)
- 11:19 gå till sängen (1 m) (14667 kr)

</details>

## Dag 9

| Tid | Källa | Vem | Text |
|---|---|---|---|
| 11:21 | vara | ali | ingen |
| 11:21 | händelse | malKlart | id=sov8 del=Dag 8 – Magnetpistolen nasta=r9-kop-receptet-cykelhjalmen |
| 11:21 | MÅL |  | Köp receptet på cykelhjälmen hos Ali |
| 0:01 | vara | ali | n2_vas |
| 0:01 | händelse | dagenBorjar | dag=9 |
| 0:01 | meddelande | du | Dag 9. 13 dagar till jul. Utan fler skrivare hinner jag inte till jul. |
| 0:01 | dagbokkort | du | Solcellsparken · Dag 9. 13 dagar till jul. Utan fler skrivare hinner jag inte till jul. |
| 0:01 | röst | du | Solcellsparken. Dag 9. 13 dagar till jul. Utan fler skrivare hinner jag inte till jul. · STORY |
| 0:03 | paket |  | sms |
| 0:03 | väntar | rolf | Ny lapp i lådan. Du vet vad de betyder. /R |
| 0:16 | händelse | morgonkortStangt | dag=9 |
| 0:16 | paket |  | sms |
| 0:16 | väntar | ali | Ali här. Större ryggsäck. Min son hade den i lumpen. Han kom hem med fler grejer än han åkte iväg med. |
| 0:16 | struken | kedja | d9 |
| 0:16 | väntar | du | Cykelhjälmar i röd plast. Säljer bra, säger Ali. |
| 0:16 | målruta |  | Köp receptet på cykelhjälmen hos Ali |
| 0:16 | väntar | info:fel | Göran snodde blomkruka. |
| 0:21 | sak | du | Cykelhjälmar i röd plast. Säljer bra, säger Ali. |
| 0:21 | pil |  | Köp receptet på cykelhjälmen hos Ali |
| 0:21 | notis | tanke | 💭 Cykelhjälmar i röd plast. Säljer bra, säger Ali. |
| 0:21 | röst | du | Cykelhjälmar i röd plast. Säljer bra, säger Ali. · MÅL |
| 0:21 | nick |  | nick:77 |
| 0:25 | klar | du | Cykelhjälmar i röd plast. Säljer bra, säger Ali. |
| 0:25 | struken | info:fel | Göran snodde blomkruka. |
| 0:25 | struken | notis:🌇 Klockan är 21. Ali slår igen luckan.  | 🌇 Klockan är 21. Ali slår igen luckan. Dagens jobb är klart – gå in i skjulet och sov i sängen. |
| 0:25 | struken | mamma | Jag sa till pappa att du bor på en soptipp. Han sa "aha, vad lugnt då" och satte på Formel 1. Lugnt? |
| 0:47 | röst | ali | Min fru säger att jag bor här. Hon har rätt. · STORY |
| 0:47 | butiksbubbla | ali | Min fru säger att jag bor här. Hon har rätt. |
| 0:48 | skratt | du | Alis dyr-pling |
| 0:48 | händelse | kopt | sak=n2_hjalm |
| 0:49 | händelse | malKlart | id=r9-kop-receptet-cykelhjalmen del=Dag 9 – Solcellsparken nasta=r9-bygg-solcellspark |
| 0:49 | målruta |  | Printa och sälj |
| 0:50 | MÅL |  | Printa och sälj |
| 0:50 | sak | du | (nytt mål i rutan) |
| 0:50 | pil |  | Printa och sälj |
| 0:50 | klar | du | (nytt mål i rutan) |
| 0:53 | kvittens-bock |  | ✓ Köp receptet på cykelhjälmen hos Ali |
| 0:57 | skratt | du | falsk tuta |
| 0:58 | händelse | printStart | sak=kruka |
| 1:00 | toast | guld | ✅ |
| 1:00 | händelse | printKlar | sak=kruka n=58 |
| 1:00 | händelse | tagitUrPrint | sak=kruka n=1 |
| 1:02 | händelse | printStart | sak=kruka |
| 1:04 | toast | guld | ✅ |
| 1:04 | händelse | printKlar | sak=kruka n=59 |
| 1:04 | händelse | tagitUrPrint | sak=kruka n=1 |
| 1:17 | webb | du | packade 2 kruka |
| 1:32 | väntar | info:bra | 📦 Paketet till Kenneth på bilskroten ligger i postlådan – Rolf tar det till posten |
| 1:32 | sak | info:bra | 📦 Paketet till Kenneth på bilskroten ligger i postlådan – Rolf tar det till posten |
| 1:32 | kvitto-visas | info:bra | 📦 Paketet till Kenneth på bilskroten ligger i postlådan – Rolf tar det till posten |
| 1:32 | toast | bra | 📦 Paketet till Kenneth på bilskroten ligger i postlådan – Rolf tar det till posten |
| 1:34 | klar | info:bra | 📦 Paketet till Kenneth på bilskroten ligger i postlådan – Rolf tar det till posten |
| 1:36 | händelse | printStart | sak=n2_vas |
| 1:39 | toast | guld | ✅ |
| 1:39 | händelse | printKlar | sak=n2_vas n=21 |
| 1:40 | händelse | tagitUrPrint | sak=n2_vas n=1 |
| 1:49 | aliSalt | ali | 1185 |
| 1:51 | väntar | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått skrivare l. Och batteribank. Skriv in, Gunnar. Du skriver aldrig in. |
| 1:51 | radio | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått skrivare l. Och batteribank. Skriv in, Gunnar. Du skriver aldrig in. |
| 1:51 | skratt | du | Radio-Kjelle |
| 1:51 | sak | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått skrivare l. Och batteribank. Skriv in, Gunnar. Du skriver aldrig in. |
| 1:51 | notis |  | 📻 Radio Tippen: Radio Tippen, Kjelle här. Skjulet vid tippen har fått skrivare l. Och batteribank. Skriv in, Gunnar. Du skriver aldrig in. |
| 1:51 | röst | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått skrivare l. Och batteribank. Skriv in, Gunnar. Du skriver aldrig in. · REAKTION |
| 1:57 | händelse | printStart | sak=n2_vas |
| 2:00 | toast | guld | ✅ |
| 2:00 | händelse | printKlar | sak=n2_vas n=22 |
| 2:01 | händelse | tagitUrPrint | sak=n2_vas n=1 |
| 2:02 | klar | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått skrivare l. Och batteribank. Skriv in, Gunnar. Du skriver aldrig in. |
| 2:09 | aliSalt | ali | 1126 |
| 2:23 | skratt | du | kvarnen rapar |
| 2:26 | toast | guld | 🧵 |
| 2:30 | händelse | printStart | sak=n2_vas |
| 2:33 | toast | guld | ✅ |
| 2:33 | händelse | printKlar | sak=n2_vas n=23 |
| 2:33 | händelse | tagitUrPrint | sak=n2_vas n=1 |
| 2:33 | toast | guld | 🧵 |
| 2:41 | aliSalt | ali | 1069 |
| 2:47 | väntar | bror | Berättade för polarna att min lillebrorsa bygger sitt eget hus. Dom tror jag ljuger. Fortsätt. |
| 2:51 | händelse | printStart | sak=n2_vas |
| 2:54 | toast | guld | ✅ |
| 2:54 | händelse | printKlar | sak=n2_vas n=24 |
| 2:55 | händelse | tagitUrPrint | sak=n2_vas n=1 |
| 3:03 | aliSalt | ali | 1016 |
| 3:13 | händelse | printStart | sak=n2_vas |
| 3:13 | skratt | du | falsk tuta |
| 3:13 | väntar | värld:TUUT TUUT! | TUUT TUUT! |
| 3:13 | sak | värld:TUUT TUUT! | TUUT TUUT! |
| 3:13 | bubbla |  | TUUT TUUT! |
| 3:16 | toast | guld | ✅ |
| 3:16 | händelse | printKlar | sak=n2_vas n=25 |
| 3:16 | händelse | tagitUrPrint | sak=n2_vas n=1 |
| 3:16 | klar | värld:TUUT TUUT! | TUUT TUUT! |
| 3:24 | aliSalt | ali | 965 |
| 3:34 | händelse | printStart | sak=n2_hjalm |
| 3:39 | toast | guld | ✅ |
| 3:39 | händelse | printKlar | sak=n2_hjalm n=1 |
| 3:40 | händelse | tagitUrPrint | sak=n2_hjalm n=1 |
| 3:48 | aliSalt | ali | 1330 |
| 3:53 | väntar | bud | (tips) |
| 3:53 | sak | bud | (tips) |
| 3:55 | klar | bud | (tips) |
| 3:57 | meddelande | mamma | Din bror säger att du har pengar. Du har aldrig haft pengar. Har du sålt en njure? |
| 3:58 | röst | mamma | Din bror säger att du har pengar. Du har aldrig haft pengar. Har du sålt en njure? · STORY |
| 4:09 | paket |  | sms |
| 4:09 | väntar | mamma | Printar. Vad är printar. Är det lagligt? Säg att det är lagligt. |
| 4:19 | händelse | brevLast | id=m_pengar |
| 4:20 | händelse | printStart | sak=n2_vas |
| 4:21 | sak | mamma | Printar. Vad är printar. Är det lagligt? Säg att det är lagligt. |
| 4:21 | sms | mamma | Printar. Vad är printar. Är det lagligt? Säg att det är lagligt. |
| 4:21 | sms-bubbla | mamma | Printar. Vad är printar. Är det lagligt? Säg att det är lagligt. |
| 4:21 | röst | mamma | Printar. Vad är printar. Är det lagligt? Säg att det är lagligt. · STORY |
| 4:23 | toast | guld | ✅ |
| 4:23 | händelse | printKlar | sak=n2_vas n=26 |
| 4:23 | händelse | tagitUrPrint | sak=n2_vas n=1 |
| 4:27 | klar | mamma | Printar. Vad är printar. Är det lagligt? Säg att det är lagligt. |
| 4:31 | aliSalt | ali | 917 |
| 4:45 | skratt | du | kvarnen rapar |
| 4:45 | upplåst | strom | solpark |
| 4:45 | brott | RESERV | solpark (strom 0 av 15) |
| 4:45 | händelse | upplast | id=solpark flask=strom |
| 4:45 | paket |  | sms |
| 4:45 | väntar | ali | Ali här. Solcellspark. Sex paneler på rad. Solen jobbar dubbelt nu. |
| 4:49 | toast | guld | 🧵 |
| 4:51 | händelse | printStart | sak=n2_hjalm |
| 4:56 | toast | guld | ✅ |
| 4:56 | händelse | printKlar | sak=n2_hjalm n=2 |
| 4:57 | händelse | tagitUrPrint | sak=n2_hjalm n=1 |
| 5:06 | aliSalt | ali | 1264 |
| 5:06 | sak | ali | Ali här. Solcellspark. Sex paneler på rad. Solen jobbar dubbelt nu. |
| 5:06 | sms | ali | Ali här. Solcellspark. Sex paneler på rad. Solen jobbar dubbelt nu. |
| 5:06 | sms-bubbla | ali | Ali här. Solcellspark. Sex paneler på rad. Solen jobbar dubbelt nu. |
| 5:06 | röst | ali | Ali här. Solcellspark. Sex paneler på rad. Solen jobbar dubbelt nu. · STORY |
| 5:12 | klar | ali | Ali här. Solcellspark. Sex paneler på rad. Solen jobbar dubbelt nu. |
| 5:31 | väntar | värld:TUUT! Hej grannen! | TUUT! Hej grannen! |
| 5:31 | sak | värld:TUUT! Hej grannen! | TUUT! Hej grannen! |
| 5:31 | bubbla |  | TUUT! Hej grannen! |
| 5:34 | klar | värld:TUUT! Hej grannen! | TUUT! Hej grannen! |
| 5:41 | tanke | du | Om man bara hade en… motorsåg. |
| 5:41 | väntar | du | Om man bara hade en… motorsåg. |
| 5:42 | sak | du | Om man bara hade en… motorsåg. |
| 5:42 | notis | tanke | 💭 Om man bara hade en… motorsåg. |
| 5:42 | röst | du | Om man bara hade en… motorsåg. · STORY |
| 5:44 | klar | du | Om man bara hade en… motorsåg. |
| 5:52 | händelse | printStart | sak=n2_vas |
| 5:55 | toast | guld | ✅ |
| 5:55 | händelse | printKlar | sak=n2_vas n=27 |
| 5:55 | händelse | tagitUrPrint | sak=n2_vas n=1 |
| 5:59 | väntar | rolf | Konditoriet på Storgatan har slutat me mazariner. Ja har skrivit ett klagomål. På papper. Me frimärke. /R |
| 6:04 | aliSalt | ali | 871 |
| 6:15 | tanke | du | En husvagn mitt i tippen. Och grinden är låst. |
| 6:15 | väntar | du | En husvagn mitt i tippen. Och grinden är låst. |
| 6:15 | sak | du | En husvagn mitt i tippen. Och grinden är låst. |
| 6:15 | notis | tanke | 💭 En husvagn mitt i tippen. Och grinden är låst. |
| 6:15 | röst | du | En husvagn mitt i tippen. Och grinden är låst. · REAKTION |
| 6:18 | skratt | du | kvarnen rapar |
| 6:19 | klar | du | En husvagn mitt i tippen. Och grinden är låst. |
| 6:21 | struken | ali | Ali här. Större ryggsäck. Min son hade den i lumpen. Han kom hem med fler grejer än han åkte iväg med. |
| 6:22 | toast | guld | 🧵 |
| 6:25 | händelse | printStart | sak=n2_hjalm |
| 6:29 | toast | guld | ✅ |
| 6:29 | händelse | printKlar | sak=n2_hjalm n=3 |
| 6:29 | paket |  | ge → brev |
| 6:29 | väntar |  | (läget ändras) |
| 6:29 | väntar | pappa | Äntligen träd. /Pappa |
| 6:30 | händelse | tagitUrPrint | sak=n2_hjalm n=1 |
| 6:31 | toast | guld | 🧵 |
| 6:35 | sak |  | (läget ändras) |
| 6:35 | klar |  | (läget ändras) |
| 6:39 | aliSalt | ali | 1200 |
| 6:40 | sak | pappa | Äntligen träd. /Pappa |
| 6:40 | lapp | Lapp från pappa | Äntligen träd. /Pappa |
| 6:40 | röst | pappa | Äntligen träd. /Pappa · STORY |
| 6:43 | klar | pappa | Äntligen träd. /Pappa |
| 6:56 | ljud | motorsag | Slyet faller |
| 7:01 | ljud | motorsag | Slyet faller |
| 7:04 | skratt | du | falsk tuta |
| 7:06 | ljud | motorsag | Slyet faller |
| 7:12 | ljud | motorsag | Slyet faller |
| 7:16 | ljud | motorsag | Slyet faller |
| 7:22 | ljud | motorsag | Slyet faller |
| 7:22 | paket |  | tanke |
| 7:22 | tanke | du | Där. Perfekt plats för solen. |
| 7:22 | väntar | du | Där. Perfekt plats för solen. |
| 7:22 | sak | du | Där. Perfekt plats för solen. |
| 7:22 | kvitto-visas | du | Där. Perfekt plats för solen. |
| 7:22 | notis | tanke | 💭 Där. Perfekt plats för solen. |
| 7:22 | röst | du | Där. Perfekt plats för solen. · STORY |
| 7:24 | klar | du | Där. Perfekt plats för solen. |
| 7:26 | väntar | värld:TUUT TUUT! | TUUT TUUT! |
| 7:35 | skratt | du | Alis dyr-pling |
| 7:35 | toast | guld | 3D-modell köpt – printa solcellspark på skrivaren |
| 7:35 | händelse | kopt | sak=solpark |
| 7:49 | struken | värld:TUUT TUUT! | TUUT TUUT! |
| 8:02 | händelse | printStart | sak=byggsats:solpark |
| 8:04 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 8:05 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 8:06 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 8:08 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 8:08 | väntar | notis:Skrivare L: Tornet är tomt – mal mer så  | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 8:09 | väntar | värld:Mjau. | Mjau. |
| 8:10 | toast | bra | Del 1 av 4 klar |
| 8:10 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 8:10 | struken | notis | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 8:12 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 8:12 | struken | notis | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 8:14 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 8:14 | struken | notis | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 8:16 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 8:16 | struken | notis | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 8:18 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 8:18 | struken | notis | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 8:19 | sak | värld:Mjau. | Mjau. |
| 8:19 | bubbla |  | Mjau. |
| 8:20 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 8:21 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 8:22 | klar | värld:Mjau. | Mjau. |
| 8:23 | toast | bra | Del 2 av 4 klar |
| 8:23 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 8:25 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 8:27 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 8:28 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 8:30 | sak | notis:Skrivare L: Tornet är tomt – mal mer så  | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 8:30 | notis | fel | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 8:30 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 8:31 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 8:32 | klar | notis:Skrivare L: Tornet är tomt – mal mer så  | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 8:33 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 8:34 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 8:35 | skratt | du | kvarnen spottar |
| 8:35 | toast | bra | Del 3 av 4 klar |
| 8:36 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 8:37 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 8:38 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 8:40 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 8:41 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 8:43 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 8:44 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 8:45 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 8:47 | händelse | printKlar | sak=byggsats:solpark n=1 |
| 8:47 | toast | guld | ✅ |
| 8:47 | struken | bror | Berättade för polarna att min lillebrorsa bygger sitt eget hus. Dom tror jag ljuger. Fortsätt. |
| 8:51 | händelse | tagitUrPrint | sak=byggsats:solpark n=1 |
| 8:57 | händelse | placerat | sak=solpark |
| 8:57 | struken | kedja | solpark |
| 8:57 | händelse | malKlart | id=r9-bygg-solcellspark del=Dag 9 – Solcellsparken nasta=paket9 |
| 8:57 | väntar | du | Det har kommit beställningar. Paketen ska iväg från datorn. |
| 8:57 | målruta |  | Skicka två paket från datorn · 1/2 |
| 8:57 | MÅL |  | Skicka två paket från datorn · 1/2 |
| 8:58 | sak | du | Det har kommit beställningar. Paketen ska iväg från datorn. |
| 8:58 | pil |  | Skicka två paket från datorn · 1/2 |
| 8:58 | notis | tanke | 💭 Det har kommit beställningar. Paketen ska iväg från datorn. |
| 8:58 | röst | du | Det har kommit beställningar. Paketen ska iväg från datorn. · MÅL |
| 9:01 | kvittens-bock |  | ✓ Bygg en solcellspark |
| 9:03 | klar | du | Det har kommit beställningar. Paketen ska iväg från datorn. |
| 9:11 | händelse | printStart | sak=kruka |
| 9:13 | toast | guld | ✅ |
| 9:13 | händelse | printKlar | sak=kruka n=60 |
| 9:14 | händelse | tagitUrPrint | sak=kruka n=1 |
| 9:21 | skratt | du | falsk tuta |
| 9:27 | webb | du | packade 1 kruka |
| 9:42 | väntar | info:bra | 📦 Paketet till Två syskon i Lund ligger i postlådan – Rolf tar det till posten |
| 9:42 | sak | info:bra | 📦 Paketet till Två syskon i Lund ligger i postlådan – Rolf tar det till posten |
| 9:42 | kvitto-visas | info:bra | 📦 Paketet till Två syskon i Lund ligger i postlådan – Rolf tar det till posten |
| 9:42 | toast | bra | 📦 Paketet till Två syskon i Lund ligger i postlådan – Rolf tar det till posten |
| 9:42 | händelse | malKlart | id=paket9 del=Dag 9 – Solcellsparken nasta=petgtorn9 |
| 9:42 | väntar | du | Den röda kvarnen står och väntar på plats för rullarna. Ett större torn. |
| 9:42 | MÅL |  | Bygg Rulltorn XL vid röda kvarnen |
| 9:44 | klar | info:bra | 📦 Paketet till Två syskon i Lund ligger i postlådan – Rolf tar det till posten |
| 9:44 | målruta |  | Bygg Rulltorn XL vid röda kvarnen |
| 9:46 | kvittens-bock |  | ✓ Skicka två paket från datorn · 2/2 |
| 9:46 | sak | du | Den röda kvarnen står och väntar på plats för rullarna. Ett större torn. |
| 9:46 | pil |  | Bygg Rulltorn XL vid röda kvarnen |
| 9:46 | notis | tanke | 💭 Den röda kvarnen står och väntar på plats för rullarna. Ett större torn. |
| 9:46 | röst | du | Den röda kvarnen står och väntar på plats för rullarna. Ett större torn. · MÅL |
| 9:47 | händelse | printStart | sak=n2_vas |
| 9:47 | nick |  | nick:80 |
| 9:50 | toast | guld | ✅ |
| 9:50 | händelse | printKlar | sak=n2_vas n=28 |
| 9:50 | händelse | tagitUrPrint | sak=n2_vas n=1 |
| 9:52 | klar | du | Den röda kvarnen står och väntar på plats för rullarna. Ett större torn. |
| 9:58 | aliSalt | ali | 830 |
| 9:59 | aliSalt | ali | 30 |
| 10:04 | skratt | du | Alis dyr-pling |
| 10:04 | toast | guld | 3D-modell köpt – printa rulltorn xl på skrivaren |
| 10:04 | händelse | kopt | sak=petgtorn |
| 10:18 | skratt | du | kvarnen rapar |
| 10:20 | toast | guld | 🧵 |
| 10:21 | väntar | notis:📔 Prestation: Kajakmalaren · +3 respekt | 📔 Prestation: Kajakmalaren · +3 respekt |
| 10:21 | sak | notis:📔 Prestation: Kajakmalaren · +3 respekt | 📔 Prestation: Kajakmalaren · +3 respekt |
| 10:21 | notis |  | 📔 Prestation: Kajakmalaren · +3 respekt |
| 10:24 | klar | notis:📔 Prestation: Kajakmalaren · +3 respekt | 📔 Prestation: Kajakmalaren · +3 respekt |
| 10:24 | händelse | printStart | sak=byggsats:petgtorn |
| 10:26 | toast | bra | Del 1 av 3 klar |
| 10:29 | toast | bra | Del 2 av 3 klar |
| 10:31 | händelse | printKlar | sak=byggsats:petgtorn n=1 |
| 10:31 | toast | guld | ✅ |
| 10:32 | händelse | tagitUrPrint | sak=byggsats:petgtorn n=1 |
| 10:33 | händelse | placerat | sak=petgtorn |
| 10:33 | väntar | info:guld | Rulltorn XL – 12 rullar röd PETG får plats |
| 10:33 | sak | info:guld | Rulltorn XL – 12 rullar röd PETG får plats |
| 10:33 | kvitto-visas | info:guld | Rulltorn XL – 12 rullar röd PETG får plats |
| 10:33 | toast | guld | Rulltorn XL – 12 rullar röd PETG får plats |
| 10:33 | händelse | malKlart | id=petgtorn9 del=Dag 9 – Solcellsparken nasta=sov9 |
| 10:33 | paket |  | lapp |
| 10:33 | väntar | du | Dag 9 är slut. Det drar kallt genom väggarna. |
| 10:33 | MÅL |  | Klart för idag – sov när du vill |
| 10:35 | klar | info:guld | Rulltorn XL – 12 rullar röd PETG får plats |
| 10:35 | sak | du | Dag 9 är slut. Det drar kallt genom väggarna. |
| 10:35 | kvitto-visas | du | Dag 9 är slut. Det drar kallt genom väggarna. |
| 10:35 | lapp | 📔 Dagbok | Dag 9 är slut. Det drar kallt genom väggarna. |
| 10:35 | meddelande | du | Dag 9 är slut. Det drar kallt genom väggarna. |
| 10:35 | dagbokkort | du | Dag 9 är slut. Det drar kallt genom väggarna. |
| 10:35 | röst | du | Dag 9 är slut. Det drar kallt genom väggarna. · STORY |
| 10:41 | händelse | brevLast | id=kvall9 |
| 10:41 | klar | du | Dag 9 är slut. Det drar kallt genom väggarna. |
| 10:41 | väntar | notis:🌇 Klockan är 21. Ali slår igen luckan.  | 🌇 Klockan är 21. Ali slår igen luckan. Dagens jobb är klart – gå in i skjulet och sov i sängen. |
| 10:41 | målruta |  | Klart för idag – sov när du vill |
| 10:41 | sak | du | (nytt mål i rutan) |
| 10:41 | pil |  | Klart för idag – sov när du vill |
| 10:41 | klar | du | (nytt mål i rutan) |
| 10:50 | webbBetalt | du | 300 |

<details><summary>Botens handlingar dag 9</summary>

- 0:00 — dag 9 börjar — (14757 kr)
- 0:15 popup: "FORTSÄTT" (14757 kr)
- 0:32 gå till Rolfs postlåda (29 m) (14757 kr)
- 0:40 panel: "En lapp från Rolf
Lite olaglig" (14757 kr)
- 0:47 gå till Ali (31 m) (14757 kr)
- 0:47 öppnar Alis butik – köpa receptet cykelhjälm i petg (14757 kr)
- 0:49 köper n2_hjalm för 2300 kr (12457 kr)
- 0:57 gå till skrivaren (23 m) (12457 kr)
- 0:58 printar Blomkruka (12457 kr)
- 1:01 tar ut 1 st ur skrivaren (12457 kr)
- 1:02 printar Blomkruka (12457 kr)
- 1:05 tar ut 1 st ur skrivaren (12457 kr)
- 1:08 gå till datorn (17 m) (12457 kr)
- 1:16 panel: "Webbshopen · Soptippsvägen 1
B" (12457 kr)
- 1:25 panel: "Webbshopen · Soptippsvägen 1
B" (12457 kr)
- 1:32 gå till Rolfs postlåda (paket) (29 m) (12457 kr)
- 1:33 webbshop: 1 paket i postlådan (12457 kr)
- 1:33 tjänar pengar till väntar på flaskhalsen för solpark: 12457/12497 kr → printar designvas i röd petg (1185 kr) (12457 kr)
- 1:35 gå till skrivaren (10 m) (12457 kr)
- 1:36 printar Designvas i röd PETG (12457 kr)
- 1:41 tar ut 1 st ur skrivaren (12457 kr)
- 1:47 gå till Ali (30 m) (12457 kr)
- 1:47 öppnar Alis butik – sälja (12457 kr)
- 1:49 säljer hos Ali: +1185 kr (13642 kr)
- 1:50 tjänar pengar till väntar på flaskhalsen för solpark: 13642/13682 kr → printar designvas i röd petg (1126 kr) (13642 kr)
- 1:56 gå till skrivaren (29 m) (13642 kr)
- 1:57 printar Designvas i röd PETG (13642 kr)
- 2:02 tar ut 1 st ur skrivaren (13642 kr)
- 2:08 gå till Ali (29 m) (13642 kr)
- 2:08 öppnar Alis butik – sälja (13642 kr)
- 2:09 säljer hos Ali: +1126 kr (14768 kr)
- 2:11 tjänar pengar till väntar på flaskhalsen för solpark: 14768/14808 kr → printar designvas i röd petg (1069 kr) (14768 kr)
- 2:19 gå till en tunna (38 m) (14768 kr)
- 2:23 gå till PETG-kvarnen (15 m) (14768 kr)
- 2:23 tömmer det tunga i PETG-kvarnen (14768 kr)
- 2:28 gå till skrivaren (3 m) (14768 kr)
- 2:30 printar Designvas i röd PETG (14768 kr)
- 2:33 tar ut 1 st ur skrivaren (14768 kr)
- 2:40 gå till Ali (31 m) (14768 kr)
- 2:40 öppnar Alis butik – sälja (14768 kr)
- 2:42 säljer hos Ali: +1069 kr (15837 kr)
- 2:44 tjänar pengar till väntar på flaskhalsen för solpark: 15837/15877 kr → printar designvas i röd petg (1016 kr) (15837 kr)
- 2:50 gå till skrivaren (29 m) (15837 kr)
- 2:51 printar Designvas i röd PETG (15837 kr)
- 2:55 tar ut 1 st ur skrivaren (15837 kr)
- 3:01 gå till Ali (29 m) (15837 kr)
- 3:01 öppnar Alis butik – sälja (15837 kr)
- 3:03 säljer hos Ali: +1016 kr (16853 kr)
- 3:05 tjänar pengar till väntar på flaskhalsen för solpark: 16853/16893 kr → printar designvas i röd petg (965 kr) (16853 kr)
- 3:11 gå till skrivaren (29 m) (16853 kr)
- 3:13 printar Designvas i röd PETG (16853 kr)
- 3:17 tar ut 1 st ur skrivaren (16853 kr)
- 3:23 gå till Ali (29 m) (16853 kr)
- 3:23 öppnar Alis butik – sälja (16853 kr)
- 3:25 säljer hos Ali: +965 kr (17818 kr)
- 3:27 tjänar pengar till väntar på flaskhalsen för solpark: 17818/17858 kr → printar cykelhjälm i petg (1330 kr) (17818 kr)
- 3:33 gå till skrivaren (29 m) (17818 kr)
- 3:34 printar Cykelhjälm i PETG (17818 kr)
- 3:40 tar ut 1 st ur skrivaren (17818 kr)
- 3:46 gå till Ali (29 m) (17818 kr)
- 3:46 öppnar Alis butik – sälja (17818 kr)
- 3:48 säljer hos Ali: +1330 kr (19148 kr)
- 3:50 tjänar pengar till väntar på flaskhalsen för solpark: 19148/19188 kr → printar designvas i röd petg (917 kr) (19148 kr)
- 3:56 gå till skrivaren (29 m) (19148 kr)
- 4:09 popup: "Jag säljer saker jag printar." (19148 kr)
- 4:19 popup: "Läst" (19148 kr)
- 4:20 printar Designvas i röd PETG (19148 kr)
- 4:24 tar ut 1 st ur skrivaren (19148 kr)
- 4:30 gå till Ali (29 m) (19148 kr)
- 4:30 öppnar Alis butik – sälja (19148 kr)
- 4:32 säljer hos Ali: +917 kr (20065 kr)
- 4:34 tjänar pengar till väntar på flaskhalsen för solpark: 20065/20105 kr → printar cykelhjälm i petg (1264 kr) (20065 kr)
- 4:41 gå till en tunna (38 m) (20065 kr)
- 4:45 gå till PETG-kvarnen (12 m) (20065 kr)
- 4:45 tömmer det tunga i PETG-kvarnen (20065 kr)
- 4:50 gå till skrivaren (3 m) (20065 kr)
- 4:51 printar Cykelhjälm i PETG (20065 kr)
- 4:58 tar ut 1 st ur skrivaren (20065 kr)
- 5:04 gå till Ali (31 m) (20065 kr)
- 5:04 öppnar Alis butik – sälja (20065 kr)
- 5:06 säljer hos Ali: +1264 kr (21329 kr)
- 5:24 gå till slyet bakom tippen (51 m) (21329 kr)
- 5:47 tjänar pengar till väntar på pappas motorsåg: 21329/21449 kr → printar designvas i röd petg (871 kr) (21329 kr)
- 5:51 gå till skrivaren (20 m) (21329 kr)
- 5:52 printar Designvas i röd PETG (21329 kr)
- 5:56 tar ut 1 st ur skrivaren (21329 kr)
- 6:02 gå till Ali (32 m) (21329 kr)
- 6:02 öppnar Alis butik – sälja (21329 kr)
- 6:04 säljer hos Ali: +871 kr (22200 kr)
- 6:06 tjänar pengar till väntar på pappas motorsåg: 22200/22320 kr → printar cykelhjälm i petg (1200 kr) (22200 kr)
- 6:14 gå till en tunna (38 m) (22200 kr)
- 6:18 gå till PETG-kvarnen (11 m) (22200 kr)
- 6:18 tömmer det tunga i PETG-kvarnen (22200 kr)
- 6:23 gå till skrivaren (4 m) (22200 kr)
- 6:25 printar Cykelhjälm i PETG (22200 kr)
- 6:31 tar ut 1 st ur skrivaren (22200 kr)
- 6:37 gå till Ali (31 m) (22200 kr)
- 6:37 öppnar Alis butik – sälja (22200 kr)
- 6:39 säljer hos Ali: +1200 kr (23400 kr)
- 6:55 gå till slyet (motorsåg) (51 m) (23400 kr)
- 7:05 gå till slyet (motorsåg) (4 m) (23400 kr)
- 7:10 gå till slyet (motorsåg) (5 m) (23400 kr)
- 7:20 gå till slyet (motorsåg) (4 m) (23400 kr)
- 7:34 gå till Ali (46 m) (23400 kr)
- 7:34 öppnar Alis butik – köpa solcellspark (23400 kr)
- 7:36 köper solpark för 2400 kr (21000 kr)
- 7:50 plockar 6 skräp på tippen (bär max 16) (21000 kr)
- 7:54 gå till kvarnen (14 m) (21000 kr)
- 8:00 gå till skrivaren (7 m) (21000 kr)
- 8:02 printar Solcellspark (4 delar) (21000 kr)
- 8:16 plockar 8 skräp på tippen (bär max 16) (21000 kr)
- 8:19 gå till kvarnen (14 m) (21000 kr)
- 8:51 gå till skrivaren (7 m) (21000 kr)
- 8:51 tar ut 1 st ur skrivaren (21000 kr)
- 8:56 gå till platsen för solcellspark (21 m) (21000 kr)
- 8:57 ställer ut solcellspark (21000 kr)
- 9:10 gå till skrivaren (21 m) (21000 kr)
- 9:11 printar Blomkruka (21000 kr)
- 9:14 tar ut 1 st ur skrivaren (21000 kr)
- 9:18 gå till datorn (19 m) (21000 kr)
- 9:26 panel: "Webbshopen · Soptippsvägen 1
B" (21000 kr)
- 9:36 panel: "Webbshopen · Soptippsvägen 1
B" (21000 kr)
- 9:42 gå till Rolfs postlåda (paket) (29 m) (21000 kr)
- 9:43 webbshop: 2 paket i postlådan (21000 kr)
- 9:43 tjänar pengar till väntar på fler beställningar: 21000/21060 kr → printar designvas i röd petg (830 kr) (21000 kr)
- 9:45 gå till skrivaren (10 m) (21000 kr)
- 9:47 printar Designvas i röd PETG (21000 kr)
- 9:50 tar ut 1 st ur skrivaren (21000 kr)
- 9:57 gå till Ali (30 m) (21000 kr)
- 9:57 öppnar Alis butik – sälja (21000 kr)
- 9:59 säljer hos Ali: +860 kr (21860 kr)
- 10:02 öppnar Alis butik – köpa rulltorn xl (21860 kr)
- 10:05 köper petgtorn för 600 kr (21260 kr)
- 10:14 gå till en tunna (39 m) (21260 kr)
- 10:18 gå till PETG-kvarnen (12 m) (21260 kr)
- 10:18 tömmer det tunga i PETG-kvarnen (21260 kr)
- 10:23 gå till skrivaren (4 m) (21260 kr)
- 10:24 printar Rulltorn XL (3 delar) (21260 kr)
- 10:32 tar ut 1 st ur skrivaren (21260 kr)
- 10:33 gå till röda kvarnen (1 m) (21260 kr)
- 10:41 popup: "FORTSÄTT" (21260 kr)
- 10:48 gå till sängen (22 m) (21260 kr)

</details>

## Dag 10

| Tid | Källa | Vem | Text |
|---|---|---|---|
| 10:50 | vara | ali | n2_hjalm |
| 10:50 | väntar | info:guld | Nätterna blir kallare nu – se till att skjulet håller värmen. |
| 10:50 | händelse | malKlart | id=sov9 del=Dag 9 – Solcellsparken nasta=tapeter |
| 10:50 | MÅL |  | Tapetsera skjulet · 0/4 |
| 0:01 | händelse | dagenBorjar | dag=10 |
| 0:01 | meddelande | du | Dag 10. 12 dagar till jul. Utan väggar fryser jag i natt. |
| 0:01 | dagbokkort | du | Skrivare L och kylan · Dag 10. 12 dagar till jul. Utan väggar fryser jag i natt. |
| 0:01 | röst | du | Skrivare L och kylan. Dag 10. 12 dagar till jul. Utan väggar fryser jag i natt. · STORY |
| 0:15 | händelse | morgonkortStangt | dag=10 |
| 0:15 | paket |  | sms |
| 0:15 | väntar | ali | Ali här. Satt uppe med AI:n hela natten. Ritningen till Tapeter är klar. Kom innan nio, då stänger jag. |
| 0:15 | struken | kedja | d10 |
| 0:15 | väntar | du | Skjulet ska kännas som ett rum. Tapeter. |
| 0:15 | målruta |  | Tapetsera skjulet · 0/4 |
| 0:20 | sak | du | Skjulet ska kännas som ett rum. Tapeter. |
| 0:20 | pil |  | Tapetsera skjulet · 0/4 |
| 0:20 | notis | tanke | 💭 Skjulet ska kännas som ett rum. Tapeter. |
| 0:20 | röst | du | Skjulet ska kännas som ett rum. Tapeter. · MÅL |
| 0:21 | nick |  | nick:82 |
| 0:24 | klar | du | Skjulet ska kännas som ett rum. Tapeter. |
| 0:24 | struken | info:guld | Nätterna blir kallare nu – se till att skjulet håller värmen. |
| 0:24 | struken | notis:🌇 Klockan är 21. Ali slår igen luckan.  | 🌇 Klockan är 21. Ali slår igen luckan. Dagens jobb är klart – gå in i skjulet och sov i sängen. |
| 0:30 | röst | ali | Semester? Jag hade semester 2009. Det regnade. · STORY |
| 0:30 | butiksbubbla | ali | Semester? Jag hade semester 2009. Det regnade. |
| 0:32 | skratt | du | Alis dyr-pling |
| 0:32 | toast | guld | 3D-modell köpt – printa tapeter på skrivaren |
| 0:32 | händelse | kopt | sak=tapeter |
| 0:33 | struken | ali | Ali här. Satt uppe med AI:n hela natten. Ritningen till Tapeter är klar. Kom innan nio, då stänger jag. |
| 0:37 | skratt | du | däcket rullar iväg |
| 0:44 | väntar | värld:TUUT TUUT! | TUUT TUUT! |
| 0:53 | sak | värld:TUUT TUUT! | TUUT TUUT! |
| 0:53 | bubbla |  | TUUT TUUT! |
| 0:54 | tanke | du | Magen låter som kvarnen. |
| 0:54 | väntar | du | Magen låter som kvarnen. |
| 0:56 | klar | värld:TUUT TUUT! | TUUT TUUT! |
| 1:00 | händelse | printStart | sak=byggsats:tapeter |
| 1:02 | händelse | printKlar | sak=byggsats:tapeter n=1 |
| 1:02 | toast | guld | ✅ |
| 1:03 | händelse | tagitUrPrint | sak=byggsats:tapeter n=1 |
| 1:04 | sak | du | Magen låter som kvarnen. |
| 1:04 | notis | tanke | 💭 Magen låter som kvarnen. |
| 1:04 | röst | du | Magen låter som kvarnen. · REAKTION |
| 1:06 | klar | du | Magen låter som kvarnen. |
| 1:07 | väntar | info:guld | 🧻 Bakväggen tapetserad. 3 kvar. |
| 1:07 | sak | info:guld | 🧻 Bakväggen tapetserad. 3 kvar. |
| 1:07 | kvitto-visas | info:guld | 🧻 Bakväggen tapetserad. 3 kvar. |
| 1:07 | toast | guld | 🧻 Bakväggen tapetserad. 3 kvar. |
| 1:09 | klar | info:guld | 🧻 Bakväggen tapetserad. 3 kvar. |
| 1:16 | händelse | printStart | sak=byggsats:tapeter |
| 1:18 | händelse | printKlar | sak=byggsats:tapeter n=1 |
| 1:18 | toast | guld | ✅ |
| 1:18 | händelse | tagitUrPrint | sak=byggsats:tapeter n=1 |
| 1:22 | väntar | info:guld | 🧻 Vänster vägg tapetserad. 2 kvar. |
| 1:22 | sak | info:guld | 🧻 Vänster vägg tapetserad. 2 kvar. |
| 1:22 | kvitto-visas | info:guld | 🧻 Vänster vägg tapetserad. 2 kvar. |
| 1:22 | toast | guld | 🧻 Vänster vägg tapetserad. 2 kvar. |
| 1:24 | klar | info:guld | 🧻 Vänster vägg tapetserad. 2 kvar. |
| 1:31 | händelse | printStart | sak=byggsats:tapeter |
| 1:33 | händelse | printKlar | sak=byggsats:tapeter n=1 |
| 1:33 | toast | guld | ✅ |
| 1:33 | händelse | tagitUrPrint | sak=byggsats:tapeter n=1 |
| 1:37 | väntar | info:guld | 🧻 Höger vägg tapetserad. 1 kvar. |
| 1:37 | sak | info:guld | 🧻 Höger vägg tapetserad. 1 kvar. |
| 1:37 | kvitto-visas | info:guld | 🧻 Höger vägg tapetserad. 1 kvar. |
| 1:37 | toast | guld | 🧻 Höger vägg tapetserad. 1 kvar. |
| 1:39 | klar | info:guld | 🧻 Höger vägg tapetserad. 1 kvar. |
| 1:46 | händelse | printStart | sak=byggsats:tapeter |
| 1:47 | händelse | printKlar | sak=byggsats:tapeter n=1 |
| 1:47 | toast | guld | ✅ |
| 1:48 | händelse | tagitUrPrint | sak=byggsats:tapeter n=1 |
| 1:52 | väntar | info:guld | Hela skjulet är tapetserat! Klassisk 70-talstapet … Ali säljer snyggare mönster. |
| 1:52 | sak | info:guld | Hela skjulet är tapetserat! Klassisk 70-talstapet … Ali säljer snyggare mönster. |
| 1:52 | kvitto-visas | info:guld | Hela skjulet är tapetserat! Klassisk 70-talstapet … Ali säljer snyggare mönster. |
| 1:52 | toast | guld | Hela skjulet är tapetserat! Klassisk 70-talstapet … Ali säljer snyggare mönster. |
| 1:52 | händelse | malKlart | id=tapeter del=Dag 10 – Skrivare L och kylan nasta=r10-gor-skjulet-varmt |
| 1:52 | händelse | malKlart | id=r10-gor-skjulet-varmt del=Dag 10 – Skrivare L och kylan nasta=spis10 |
| 1:52 | väntar | du | Bygg spisen och laga en varm måltid. |
| 1:52 | MÅL |  | Bygg spisen och laga en varm måltid |
| 1:54 | klar | info:guld | Hela skjulet är tapetserat! Klassisk 70-talstapet … Ali säljer snyggare mönster. |
| 1:54 | målruta |  | Bygg spisen och laga en varm måltid |
| 1:56 | kvittens-bock |  | ✓ Tapetsera skjulet · 4/4 |
| 1:56 | kvittens-bock |  | ✓ Gör skjulet varmt inför kylan |
| 1:56 | sak | du | Bygg spisen och laga en varm måltid. |
| 1:56 | pil |  | Bygg spisen och laga en varm måltid |
| 1:56 | röst | du | Bygg spisen och laga en varm måltid. · MÅL |
| 1:56 | nick |  | nick:84 |
| 1:59 | klar | du | Bygg spisen och laga en varm måltid. |
| 2:06 | toast | guld | 🍳 Spisen ligger i handen – klicka på skjulet för att ställa in den |
| 2:06 | händelse | kopt | sak=spis |
| 2:06 | röst | ali | Laga inget som luktar fisk. Rolf kommer då. · STORY |
| 2:06 | butiksbubbla | ali | Laga inget som luktar fisk. Rolf kommer då. |
| 2:12 | väntar | info:guld | 🍳 Spisen står i skjulet – maten mättar mer nu |
| 2:12 | monterat | du | byggsats:spis |
| 2:12 | händelse | monterat | sak=spis |
| 2:12 | sak | info:guld | 🍳 Spisen står i skjulet – maten mättar mer nu |
| 2:12 | kvitto-visas | info:guld | 🍳 Spisen står i skjulet – maten mättar mer nu |
| 2:12 | toast | guld | 🍳 Spisen står i skjulet – maten mättar mer nu |
| 2:13 | väntar | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått solcellspark. Och rulltorn xl. Det är stort, Gunnar. |
| 2:13 | radio | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått solcellspark. Och rulltorn xl. Det är stort, Gunnar. |
| 2:13 | skratt | du | Radio-Kjelle |
| 2:14 | klar | info:guld | 🍳 Spisen står i skjulet – maten mättar mer nu |
| 2:16 | väntar | info:bra | 😋 Raggmunksrester i folie – lagad på spisen |
| 2:16 | ata | du | burk_raggmunk |
| 2:16 | sak | info:bra | 😋 Raggmunksrester i folie – lagad på spisen |
| 2:16 | kvitto-visas | info:bra | 😋 Raggmunksrester i folie – lagad på spisen |
| 2:16 | toast | bra | 😋 Raggmunksrester i folie – lagad på spisen |
| 2:16 | paket |  | tanke |
| 2:16 | tanke | du | Varm mat. I skjulet. Mamma skulle inte tro det. |
| 2:16 | väntar | du | Varm mat. I skjulet. Mamma skulle inte tro det. |
| 2:16 | händelse | malKlart | id=spis10 del=Dag 10 – Skrivare L och kylan nasta=sov10 |
| 2:16 | paket |  | lapp |
| 2:16 | väntar | du | Dag 10 är slut. I natt frös jag. Tolv dagar kvar. |
| 2:16 | MÅL |  | Klart för idag – sov när du vill |
| 2:17 | skratt | du | falsk tuta |
| 2:18 | klar | info:bra | 😋 Raggmunksrester i folie – lagad på spisen |
| 2:18 | sak | du | Varm mat. I skjulet. Mamma skulle inte tro det. |
| 2:18 | kvitto-visas | du | Varm mat. I skjulet. Mamma skulle inte tro det. |
| 2:18 | notis | tanke | 💭 Varm mat. I skjulet. Mamma skulle inte tro det. |
| 2:18 | röst | du | Varm mat. I skjulet. Mamma skulle inte tro det. · REAKTION |
| 2:20 | målruta |  | Klart för idag – sov när du vill |
| 2:20 | kvittens-bock |  | ✓ Bygg spisen och laga en varm måltid |
| 2:22 | klar | du | Varm mat. I skjulet. Mamma skulle inte tro det. |
| 2:22 | sak | du | (nytt mål i rutan) |
| 2:22 | pil |  | Klart för idag – sov när du vill |
| 2:22 | klar | du | (nytt mål i rutan) |
| 2:22 | sak | du | Dag 10 är slut. I natt frös jag. Tolv dagar kvar. |
| 2:22 | kvitto-visas | du | Dag 10 är slut. I natt frös jag. Tolv dagar kvar. |
| 2:22 | lapp | 📔 Dagbok | Dag 10 är slut. I natt frös jag. Tolv dagar kvar. |
| 2:22 | meddelande | du | Dag 10 är slut. I natt frös jag. Tolv dagar kvar. |
| 2:22 | dagbokkort | du | Dag 10 är slut. I natt frös jag. Tolv dagar kvar. |
| 2:23 | röst | du | Dag 10 är slut. I natt frös jag. Tolv dagar kvar. · STORY |
| 2:29 | händelse | brevLast | id=kvall10 |
| 2:29 | klar | du | Dag 10 är slut. I natt frös jag. Tolv dagar kvar. |
| 2:29 | väntar | notis:🌇 Klockan är 21. Ali slår igen luckan.  | 🌇 Klockan är 21. Ali slår igen luckan. Dagens jobb är klart – gå in i skjulet och sov i sängen. |
| 2:29 | struken | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått solcellspark. Och rulltorn xl. Det är stort, Gunnar. |

<details><summary>Botens handlingar dag 10</summary>

- 0:00 — dag 10 börjar — (21560 kr)
- 0:15 popup: "FORTSÄTT" (21560 kr)
- 0:30 gå till Ali (21 m) (21560 kr)
- 0:30 öppnar Alis butik – köpa tapeter (21560 kr)
- 0:33 köper tapeter för 800 kr (20760 kr)
- 0:49 plockar 8 skräp på tippen (bär max 16) (20760 kr)
- 0:52 gå till kvarnen (13 m) (20760 kr)
- 0:59 gå till skrivaren (7 m) (20760 kr)
- 1:00 printar Tapeter (20760 kr)
- 1:03 tar ut 1 st ur skrivaren (20760 kr)
- 1:07 gå till skjulet (bak) (18 m) (20760 kr)
- 1:14 gå till skrivaren (15 m) (20760 kr)
- 1:16 printar Tapeter (20760 kr)
- 1:19 tar ut 1 st ur skrivaren (20760 kr)
- 1:22 gå till skjulet (vanster) (15 m) (20760 kr)
- 1:29 gå till skrivaren (15 m) (20760 kr)
- 1:31 printar Tapeter (20760 kr)
- 1:33 tar ut 1 st ur skrivaren (20760 kr)
- 1:37 gå till skjulet (hoger) (15 m) (20760 kr)
- 1:44 gå till skrivaren (15 m) (20760 kr)
- 1:46 printar Tapeter (20760 kr)
- 1:48 tar ut 1 st ur skrivaren (20760 kr)
- 1:52 gå till skjulet (fram) (15 m) (20760 kr)
- 2:05 gå till Ali (20 m) (20760 kr)
- 2:05 öppnar Alis butik – köpa spis (20760 kr)
- 2:07 köper spis för 360 kr (20400 kr)
- 2:12 gå till ställ in spisen i skjulet (19 m) (20400 kr)
- 2:16 lagar burk_raggmunk på spisen (20400 kr)
- 2:29 popup: "FORTSÄTT" (20400 kr)
- 2:29 gå till sängen (1 m) (20400 kr)

</details>

## Dag 11

| Tid | Källa | Vem | Text |
|---|---|---|---|
| 2:32 | vara | ali | n2_vas |
| 2:32 | händelse | malKlart | id=sov10 del=Dag 10 – Skrivare L och kylan nasta=kolfkvarn |
| 2:32 | väntar | info:guld | 🏆 KAPITEL 2 KLART! Röda fabriken går – och skjulet klarar kylan. |
| 2:32 | paket |  | sms |
| 2:32 | väntar | rolf | Dä blir kallt nu o du fryser int. Respekt. Ja la jukeboxen från dödsbot i lådan. O lite pengar. Den spelar bara dansband. /R |
| 2:32 | MÅL |  | Bygg kolfiberkvarnen i linje 3 |
| 2:32 | struken | info:guld | 🏆 KAPITEL 2 KLART! Röda fabriken går – och skjulet klarar kylan. |
| 2:32 | väntar | info:guld | 🚧 Gärdesgården har flyttats ut! Du får utforska ny mark – men bara ställa saker på mark du äger. |
| 2:33 | paket |  | sms |
| 2:33 | väntar | rolf | Gå int genom gamla grinden bakom tippen. Där e floden. /R |
| 0:01 | händelse | dagenBorjar | dag=11 |
| 0:01 | meddelande | du | Nätterna blir kalla. Därför: värme. |
| 0:01 | dagbokkort | du | KAPITEL 3 · Dag 11. 11 dagar till jul · Nätterna blir kalla. Därför: värme. |
| 0:01 | röst | du | KAPITEL 3 · Dag 11. 11 dagar till jul. Nätterna blir kalla. Därför: värme. · STORY |
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
| 0:15 | struken | info:guld | 🚧 Gärdesgården har flyttats ut! Du får utforska ny mark – men bara ställa saker på mark du äger. |
| 0:15 | väntar | info:guld | Skylten vid vägen är uppgraderad. |
| 0:16 | ljud | bom | Bommen fälls upp (vanster) |
| 0:18 | klar | du | Kajakerna på tippen är kolfiber. Det behövs en kvarn som tål det. |
| 0:18 | sak | info:guld | Skylten vid vägen är uppgraderad. |
| 0:18 | kvitto-visas | info:guld | Skylten vid vägen är uppgraderad. |
| 0:18 | toast | guld | Skylten vid vägen är uppgraderad. |
| 0:20 | klar | info:guld | Skylten vid vägen är uppgraderad. |
| 0:21 | väntar | värld:HMPF. RÖD. | HMPF. RÖD. |
| 0:22 | struken | notis:🌇 Klockan är 21. Ali slår igen luckan.  | 🌇 Klockan är 21. Ali slår igen luckan. Dagens jobb är klart – gå in i skjulet och sov i sängen. |
| 0:22 | struken | notis:🔥 Varmt och skönt i skjulet trots kylan | 🔥 Varmt och skönt i skjulet trots kylan. |
| 0:34 | sak | värld:HMPF. RÖD. | HMPF. RÖD. |
| 0:34 | bubbla |  | HMPF. RÖD. |
| 0:34 | brott | SEN KVITTENS | 2.1 s sen: ”Dag 10 är slut. I natt frös jag. Tolv dagar kvar.” (dagbok kvall10) |
| 0:35 | väntar | rolf | Båtklubben skulle rensa förrådet. Ja hjälpte till. Fråga inte hur. /R |
| 0:37 | klar | värld:HMPF. RÖD. | HMPF. RÖD. |
| 0:37 | väntar | pappa | Scanian står i garaget. Den går inte. Den ska gå. |
| 0:41 | röst | ali | Jag gick upp en timme tidigare idag. Inte för butiken. För mig. Jag ritade en lampa. · STORY |
| 0:41 | butiksbubbla | ali | Jag gick upp en timme tidigare idag. Inte för butiken. För mig. Jag ritade en lampa. |
| 0:42 | skratt | du | Alis dyr-pling |
| 0:42 | toast | guld | 3D-modell köpt – printa kolfiberkvarnen på skrivaren |
| 0:42 | händelse | kopt | sak=kolfkvarn |
| 0:44 | struken | ali | Ali här. Satt uppe med AI:n hela natten. Ritningen till Kolfiberkvarnen är klar. Kom innan nio, då stänger jag. |
| 0:56 | skratt | du | kvarnen rapar |
| 1:00 | toast | guld | 🧵 |
| 1:07 | tanke | du | Byggnadsnämnden. Igentejpat. Mycket tejp. |
| 1:07 | väntar | du | Byggnadsnämnden. Igentejpat. Mycket tejp. |
| 1:07 | sak | du | Byggnadsnämnden. Igentejpat. Mycket tejp. |
| 1:07 | notis | tanke | 💭 Byggnadsnämnden. Igentejpat. Mycket tejp. |
| 1:07 | röst | du | Byggnadsnämnden. Igentejpat. Mycket tejp. · REAKTION |
| 1:08 | skratt | du | kvarnen rapar |
| 1:11 | toast | guld | 🧵 |
| 1:11 | klar | du | Byggnadsnämnden. Igentejpat. Mycket tejp. |
| 1:15 | händelse | printStart | sak=byggsats:kolfkvarn |
| 1:17 | toast | bra | Del 1 av 4 klar |
| 1:20 | toast | bra | Del 2 av 4 klar |
| 1:23 | toast | bra | Del 3 av 4 klar |
| 1:24 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 1:27 | väntar | du | Hmm… flaggan är uppe på Rolfs brevlåda vid grinden. Har det kommit ett brev? |
| 1:27 | sak | du | Hmm… flaggan är uppe på Rolfs brevlåda vid grinden. Har det kommit ett brev? |
| 1:27 | röst | du | Hmm… flaggan är uppe på Rolfs brevlåda vid grinden. Har det kommit ett brev? · REAKTION |
| 1:30 | skratt | du | kvarnen rapar |
| 1:33 | händelse | printKlar | sak=byggsats:kolfkvarn n=1 |
| 1:33 | toast | guld | ✅ |
| 1:33 | paket |  | tanke |
| 1:33 | tanke | du | Den bränns. |
| 1:33 | väntar | du | Den bränns. |
| 1:33 | paket |  | tanke |
| 1:33 | tanke | du | Mamma hade rätt. Säg inget. |
| 1:33 | struken | du | Den bränns. |
| 1:33 | väntar | du | Mamma hade rätt. Säg inget. |
| 1:33 | skratt | du | grytvantarna |
| 1:33 | klar | du | Hmm… flaggan är uppe på Rolfs brevlåda vid grinden. Har det kommit ett brev? |
| 1:35 | händelse | tagitUrPrint | sak=byggsats:kolfkvarn n=1 |
| 1:37 | toast | guld | 🧵 |
| 1:38 | händelse | placerat | sak=kolfkvarn |
| 1:38 | händelse | malKlart | id=kolfkvarn del=Dag 11 – Kolfiberlinjen nasta=kolfband |
| 1:38 | struken | du | Mamma hade rätt. Säg inget. |
| 1:38 | väntar | du | Kajakerna är för stora att bära. Ett band från tippen. |
| 1:38 | målruta |  | Bygg rullbandet från tippen |
| 1:38 | MÅL |  | Bygg rullbandet från tippen |
| 1:39 | sak | du | Kajakerna är för stora att bära. Ett band från tippen. |
| 1:39 | pil |  | Bygg rullbandet från tippen |
| 1:39 | notis | tanke | 💭 Kajakerna är för stora att bära. Ett band från tippen. |
| 1:39 | röst | du | Kajakerna är för stora att bära. Ett band från tippen. · MÅL |
| 1:40 | nick |  | nick:87 |
| 1:42 | toast | guld | 🧵 |
| 1:42 | kvittens-bock |  | ✓ Bygg kolfiberkvarnen i linje 3 |
| 1:44 | klar | du | Kajakerna är för stora att bära. Ett band från tippen. |
| 1:49 | väntar | rolf | ÖJ. Ja va int mä mej själv på konditoriet. Förlåt att ja prata så mycke. Bakom husvagnen fanns Birgittas trädgård. Nu ä dä bara nässlor. Ja har int rört den på sju år. Ja kan int. Men om nån annan började … Ja vet int. Du ä ju bra på skräp. MVH ROLF |
| 1:49 | sak | rolf | ÖJ. Ja va int mä mej själv på konditoriet. Förlåt att ja prata så mycke. Bakom husvagnen fanns Birgittas trädgård. Nu ä dä bara nässlor. Ja har int rört den på sju år. Ja kan int. Men om nån annan började … Ja vet int. Du ä ju bra på skräp. MVH ROLF |
| 1:49 | lapp | Brev från Rolf | ÖJ. Ja va int mä mej själv på konditoriet. Förlåt att ja prata så mycke. Bakom husvagnen fanns Birgittas trädgård. Nu ä dä bara nässlor. Ja har int rört den på sju år. Ja kan int. Men om nån annan började … Ja vet int. Du ä ju bra på skräp. MVH ROLF |
| 1:49 | röst | rolf | ÖJ. Ja va int mä mej själv på konditoriet. Förlåt att ja prata så mycke. Bakom husvagnen fanns Birgittas trädgård. Nu ä dä bara nässlor. Ja har int rört den på sju år. Ja kan int. Men om nån annan började … Ja vet int. Du ä ju bra på skräp. MVH ROLF · STORY |
| 1:58 | skratt | du | Alis dyr-pling |
| 1:58 | toast | guld | 3D-modell köpt – printa rött rullband från tippen på skrivaren |
| 1:58 | händelse | kopt | sak=kolfband |
| 2:05 | väntar | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har TAPETER. Gunnar, du hör väl? |
| 2:05 | radio | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har TAPETER. Gunnar, du hör väl? |
| 2:05 | skratt | du | Radio-Kjelle |
| 2:07 | struken | mamma | Har du varma strumpor? Det ska bli kallt! |
| 2:07 | händelse | printStart | sak=byggsats:kolfband |
| 2:10 | toast | bra | Del 1 av 4 klar |
| 2:10 | klar | rolf | ÖJ. Ja va int mä mej själv på konditoriet. Förlåt att ja prata så mycke. Bakom husvagnen fanns Birgittas trädgård. Nu ä dä bara nässlor. Ja har int rört den på sju år. Ja kan int. Men om nån annan började … Ja vet int. Du ä ju bra på skräp. MVH ROLF |
| 2:10 | händelse | brevLast | id=tr_brev |
| 2:12 | toast | bra | Del 2 av 4 klar |
| 2:12 | skratt | du | falsk tuta |
| 2:12 | väntar | värld:TUUT! Grann skylt! | TUUT! Grann skylt! |
| 2:14 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 2:17 | väntar | värld:Mjau. | Mjau. |
| 2:18 | sak | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har TAPETER. Gunnar, du hör väl? |
| 2:18 | notis |  | 📻 Radio Tippen: Radio Tippen, Kjelle här. Skjulet vid tippen har TAPETER. Gunnar, du hör väl? |
| 2:18 | röst | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har TAPETER. Gunnar, du hör väl? · REAKTION |
| 2:21 | skratt | du | kvarnen rapar |
| 2:22 | toast | bra | Del 3 av 4 klar |
| 2:24 | klar | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har TAPETER. Gunnar, du hör väl? |
| 2:27 | händelse | printKlar | sak=byggsats:kolfband n=1 |
| 2:27 | toast | guld | ✅ |
| 2:29 | händelse | tagitUrPrint | sak=byggsats:kolfband n=1 |
| 2:31 | händelse | placerat | sak=kolfband |
| 2:31 | väntar | info:guld | Rullbandet går – det hämtar kajaker och kanoter från tippen |
| 2:31 | sak | info:guld | Rullbandet går – det hämtar kajaker och kanoter från tippen |
| 2:31 | kvitto-visas | info:guld | Rullbandet går – det hämtar kajaker och kanoter från tippen |
| 2:31 | toast | guld | Rullbandet går – det hämtar kajaker och kanoter från tippen |
| 2:31 | händelse | malKlart | id=kolfband del=Dag 11 – Kolfiberlinjen nasta=kajak3 |
| 2:31 | väntar | du | Bandet går. Nu ska kajakerna upp på det. |
| 2:31 | MÅL |  | Mata in kajaker med bandet · 0/3 |
| 2:33 | klar | info:guld | Rullbandet går – det hämtar kajaker och kanoter från tippen |
| 2:33 | målruta |  | Mata in kajaker med bandet · 0/3 |
| 2:35 | kvittens-bock |  | ✓ Bygg rullbandet från tippen |
| 2:35 | sak | du | Bandet går. Nu ska kajakerna upp på det. |
| 2:35 | pil |  | Mata in kajaker med bandet · 0/3 |
| 2:35 | notis | tanke | 💭 Bandet går. Nu ska kajakerna upp på det. |
| 2:35 | röst | du | Bandet går. Nu ska kajakerna upp på det. · MÅL |
| 2:38 | klar | du | Bandet går. Nu ska kajakerna upp på det. |
| 2:40 | struken | värld:TUUT! Grann skylt! | TUUT! Grann skylt! |
| 2:40 | struken | värld:Mjau. | Mjau. |
| 2:45 | tanke | du | Den åker själv. Jag står bara och tittar. Det här är framtiden. |
| 2:45 | väntar | du | Den åker själv. Jag står bara och tittar. Det här är framtiden. |
| 2:45 | sak | du | Den åker själv. Jag står bara och tittar. Det här är framtiden. |
| 2:45 | notis | tanke | 💭 Den åker själv. Jag står bara och tittar. Det här är framtiden. |
| 2:45 | röst | du | Den åker själv. Jag står bara och tittar. Det här är framtiden. · STORY |
| 2:47 | skratt | du | kvarnen rapar |
| 2:50 | toast | guld | 🧵 |
| 2:50 | klar | du | Den åker själv. Jag står bara och tittar. Det här är framtiden. |
| 2:54 | händelse | printStart | sak=n2_hjalm |
| 2:58 | toast | guld | ✅ |
| 2:58 | händelse | printKlar | sak=n2_hjalm n=4 |
| 2:59 | toast | guld | 🧵 |
| 2:59 | händelse | tagitUrPrint | sak=n2_hjalm n=1 |
| 3:03 | händelse | printStart | sak=pall |
| 3:06 | skratt | du | kvarnen spottar |
| 3:06 | toast | guld | ✅ |
| 3:06 | händelse | printKlar | sak=pall n=22 |
| 3:09 | väntar | värld:Mjau. | Mjau. |
| 3:13 | toast | skak | handen skakar: fullt |
| 3:13 | händelse | malKlart | id=kajak3 del=Dag 11 – Kolfiberlinjen nasta=kolfrulle |
| 3:13 | händelse | malKlart | id=kolfrulle del=Dag 11 – Kolfiberlinjen nasta=sov11 |
| 3:13 | paket |  | lapp |
| 3:13 | lapp | 📔 Dagbok | Dag 11 är slut. Maskinerna står och väntar på mig. I morgon. |
| 3:13 | meddelande | du | Dag 11 är slut. Maskinerna står och väntar på mig. I morgon. |
| 3:13 | dagbokkort | du | Dag 11 är slut. Maskinerna står och väntar på mig. I morgon. |
| 3:13 | målruta |  | Klart för idag – sov när du vill |
| 3:13 | MÅL |  | Klart för idag – sov när du vill |
| 3:13 | röst | du | Dag 11 är slut. Maskinerna står och väntar på mig. I morgon. · STORY |
| 3:21 | händelse | brevLast | id=kvall11 |
| 3:21 | väntar | notis:🌇 Klockan är 21. Ali slår igen luckan.  | 🌇 Klockan är 21. Ali slår igen luckan. Dagens jobb är klart – gå in i skjulet och sov i sängen. |
| 3:22 | sak | du | (nytt mål i rutan) |
| 3:22 | pil |  | Klart för idag – sov när du vill |
| 3:23 | klar | du | (nytt mål i rutan) |
| 3:25 | struken | värld:Mjau. | Mjau. |
| 3:27 | sak | notis:🌇 Klockan är 21. Ali slår igen luckan.  | 🌇 Klockan är 21. Ali slår igen luckan. Dagens jobb är klart – gå in i skjulet och sov i sängen. |
| 3:27 | notis | guld | 🌇 Klockan är 21. Ali slår igen luckan. Dagens jobb är klart – gå in i skjulet och sov i sängen. |
| 3:29 | händelse | tagitUrPrint | sak=pall n=1 |
| 3:30 | klar | notis:🌇 Klockan är 21. Ali slår igen luckan.  | 🌇 Klockan är 21. Ali slår igen luckan. Dagens jobb är klart – gå in i skjulet och sov i sängen. |
| 3:30 | väntar | info:fel | Göran snodde pall. |
| 3:30 | sak | info:fel | Göran snodde pall. |
| 3:30 | kvitto-visas | info:fel | Göran snodde pall. |
| 3:30 | toast | fel | Göran snodde pall. |
| 3:31 | händelse | printStart | sak=pall |
| 3:32 | klar | info:fel | Göran snodde pall. |
| 3:34 | toast | guld | ✅ |
| 3:34 | händelse | printKlar | sak=pall n=23 |
| 3:35 | händelse | tagitUrPrint | sak=pall n=1 |
| 3:38 | händelse | printStart | sak=pall |
| 3:41 | toast | guld | ✅ |
| 3:41 | händelse | printKlar | sak=pall n=24 |
| 3:42 | händelse | tagitUrPrint | sak=pall n=1 |
| 3:45 | väntar | mamma | Jag har lagt upp en bild på ditt skjul på Facebook. 47 gilla. Faster Inger skrev "Va fint, är det en bastu?" |
| 3:45 | händelse | printStart | sak=n2_hjalm |
| 3:50 | toast | guld | ✅ |
| 3:50 | händelse | printKlar | sak=n2_hjalm n=5 |
| 3:51 | händelse | tagitUrPrint | sak=n2_hjalm n=1 |
| 4:05 | paket |  | replik |
| 4:05 | väntar | du | Ryggsäcken. Tryck E så öppnar jag den. |
| 4:05 | webb | du | packade 1 n2_hjalm |
| 4:14 | sak | du | Ryggsäcken. Tryck E så öppnar jag den. |
| 4:14 | notis |  | 🎒 Ryggsäcken är full – tryck E för att se vad du har |
| 4:14 | röst | du | Ryggsäcken. Tryck E så öppnar jag den. · REAKTION |
| 4:14 | webb | du | packade 2 pall |
| 4:17 | klar | du | Ryggsäcken. Tryck E så öppnar jag den. |
| 4:29 | väntar | mamma | Jag har köpt julskinka för två. |
| 4:30 | väntar | info:bra | 📦 Paketet till En lärare i Sundsvall ligger i postlådan – Rolf tar det till posten |
| 4:30 | sak | info:bra | 📦 Paketet till En lärare i Sundsvall ligger i postlådan – Rolf tar det till posten |
| 4:30 | kvitto-visas | info:bra | 📦 Paketet till En lärare i Sundsvall ligger i postlådan – Rolf tar det till posten |
| 4:30 | toast | bra | 📦 Paketet till En lärare i Sundsvall ligger i postlådan – Rolf tar det till posten |
| 4:30 | väntar | info:bra | 📦 Paketet till Ett kafé i Ystad ligger i postlådan – Rolf tar det till posten |
| 4:32 | klar | info:bra | 📦 Paketet till En lärare i Sundsvall ligger i postlådan – Rolf tar det till posten |
| 4:32 | sak | info:bra | 📦 Paketet till Ett kafé i Ystad ligger i postlådan – Rolf tar det till posten |
| 4:32 | kvitto-visas | info:bra | 📦 Paketet till Ett kafé i Ystad ligger i postlådan – Rolf tar det till posten |
| 4:32 | toast | bra | 📦 Paketet till Ett kafé i Ystad ligger i postlådan – Rolf tar det till posten |
| 4:34 | klar | info:bra | 📦 Paketet till Ett kafé i Ystad ligger i postlådan – Rolf tar det till posten |
| 4:34 | händelse | printStart | sak=n2_vas |
| 4:38 | toast | guld | ✅ |
| 4:38 | händelse | printKlar | sak=n2_vas n=29 |
| 4:38 | händelse | tagitUrPrint | sak=n2_vas n=1 |
| 4:46 | aliSalt | ali | 1185 |
| 4:54 | struken | mamma | Jag har köpt julskinka för två. |
| 4:56 | webbBetalt | du | 2595 |
| 4:56 | paket |  | sms |
| 4:56 | väntar | rolf | Kajsa har fått lax tre dar i rad. Tack vare dina paket. Hon e otrevlig mot mej nu. /R |

<details><summary>Botens handlingar dag 11</summary>

- 0:00 — dag 11 börjar — (20400 kr)
- 0:15 popup: "FORTSÄTT" (20400 kr)
- 0:28 gå till Rolfs postlåda (29 m) (20400 kr)
- 0:34 panel: "Rolfs postlåda
Det här låg i l" (23400 kr)
- 0:41 gå till Ali (31 m) (23400 kr)
- 0:41 öppnar Alis butik – köpa kolfiberkvarnen (23400 kr)
- 0:43 köper kolfkvarn för 6000 kr (17400 kr)
- 0:52 gå till en tunna (37 m) (17400 kr)
- 0:56 gå till PETG-kvarnen (14 m) (17400 kr)
- 0:56 tömmer det tunga i PETG-kvarnen (17400 kr)
- 1:05 gå till en tunna (9 m) (17400 kr)
- 1:08 gå till PETG-kvarnen (9 m) (17400 kr)
- 1:08 tömmer det tunga i PETG-kvarnen (17400 kr)
- 1:13 gå till skrivaren (4 m) (17400 kr)
- 1:15 printar Kolfiberkvarnen (4 delar) (17400 kr)
- 1:27 gå till en tunna (14 m) (17400 kr)
- 1:30 gå till PETG-kvarnen (10 m) (17400 kr)
- 1:30 tömmer det tunga i PETG-kvarnen (17400 kr)
- 1:35 gå till skrivaren (4 m) (17400 kr)
- 1:36 tar ut 1 st ur skrivaren (17400 kr)
- 1:37 gå till platsen för kolfiberkvarnen (4 m) (17400 kr)
- 1:38 ställer ut kolfiberkvarnen (17400 kr)
- 1:49 gå till Rolfs postlåda (13 m) (17400 kr)
- 1:56 gå till Ali (32 m) (17400 kr)
- 1:56 öppnar Alis butik – köpa rött rullband från tippen (17400 kr)
- 1:59 köper kolfband för 10500 kr (6900 kr)
- 2:06 gå till skrivaren (29 m) (6900 kr)
- 2:07 printar Rött rullband från tippen (4 delar) (6900 kr)
- 2:18 gå till en tunna (16 m) (6900 kr)
- 2:21 gå till PETG-kvarnen (11 m) (6900 kr)
- 2:21 tömmer det tunga i PETG-kvarnen (6900 kr)
- 2:29 gå till skrivaren (4 m) (6900 kr)
- 2:30 tar ut 1 st ur skrivaren (6900 kr)
- 2:31 gå till kolfiberkvarnen (5 m) (6900 kr)
- 2:44 gå till en tunna (15 m) (6900 kr)
- 2:47 gå till PETG-kvarnen (11 m) (6900 kr)
- 2:47 tömmer det tunga i PETG-kvarnen (6900 kr)
- 2:52 gå till skrivaren (4 m) (6900 kr)
- 2:54 printar Cykelhjälm i PETG (6900 kr)
- 3:00 tar ut 1 st ur skrivaren (6900 kr)
- 3:01 gå till skrivaren (6 m) (6900 kr)
- 3:03 printar Pall (6900 kr)
- 3:21 popup: "FORTSÄTT" (6900 kr)
- 3:27 gå till kvarnen (28 m) (6900 kr)
- 3:29 gå till skrivaren (7 m) (6900 kr)
- 3:29 tar ut 1 st ur skrivaren (6900 kr)
- 3:31 printar Pall (6900 kr)
- 3:36 tar ut 1 st ur skrivaren (6900 kr)
- 3:38 printar Pall (6900 kr)
- 3:43 tar ut 1 st ur skrivaren (6900 kr)
- 3:44 gå till skrivaren (5 m) (6900 kr)
- 3:45 printar Cykelhjälm i PETG (6900 kr)
- 3:51 tar ut 1 st ur skrivaren (6900 kr)
- 3:56 gå till datorn (21 m) (6900 kr)
- 4:04 panel: "Webbshopen · Soptippsvägen 1
B" (6900 kr)
- 4:14 panel: "Webbshopen · Soptippsvägen 1
B" (6900 kr)
- 4:23 panel: "Webbshopen · Soptippsvägen 1
B" (6900 kr)
- 4:30 gå till Rolfs postlåda (paket) (29 m) (6900 kr)
- 4:31 webbshop: 2 paket i postlådan (6900 kr)
- 4:31 tjänar pengar till bandet hämtar kajaker: 6900/7050 kr → printar designvas i röd petg (1185 kr) (6900 kr)
- 4:33 gå till skrivaren (10 m) (6900 kr)
- 4:34 printar Designvas i röd PETG (6900 kr)
- 4:38 tar ut 1 st ur skrivaren (6900 kr)
- 4:45 gå till Ali (30 m) (6900 kr)
- 4:45 öppnar Alis butik – sälja (6900 kr)
- 4:47 säljer hos Ali: +1185 kr (8085 kr)
- 4:54 gå till sängen (20 m) (8085 kr)

</details>

## Dag 12

| Tid | Källa | Vem | Text |
|---|---|---|---|
| 4:56 | vara | ali | n2_hjalm |
| 4:56 | händelse | malKlart | id=sov11 del=Dag 11 – Kolfiberlinjen nasta=kolfskrivare |
| 4:56 | MÅL |  | Printa och sälj |

<details><summary>Botens handlingar dag 12</summary>

- 0:00 — dag 12 börjar — (10680 kr)

</details>
