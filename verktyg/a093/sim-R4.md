# Simulering kapitel 1 – körning 1

*Gjord 2026-11-21 07:58 med `verktyg/sim-kapitel1.mjs` + `verktyg/sim-bot.js` (punkt AX). Boten går 4,5 m/s, läser 15 tecken/s, trampar, vevar, plockar, printar, köper och säljer via spelets egna funktioner. Tiderna är speltid.*

## Sammanfattning

| Dag | Minuter | Väntan | Prints (totalt) | Kr vid sömn | Bär | Trivsel |
|---|---|---|---|---|---|---|
| 18 | 1.9 | 10 % | 513 | 63357 | 16 | 349 |
| 19 | 7.7 | 12 % | 522 | 95514 | 16 | 516 |
| 20 | 1.9 | 9 % | 523 | 86303 | 16 | 539 |
| 21 | 0.7 | 0 % | 523 | 79103 | 16 | 538 |
| 22 | 13.6 | 0 % | 532 | 74380 | 16 | 536 |
| 23 | 0.0 | 0 % | 532 | 74418 | 16 | 535 |

## Flaskhalskartan (EE)

| Dag | bara | mala | trampa | strom | skrivare | inkomst | Upplåst |
|---|---|---|---|---|---|---|---|
| 18 | 1 | 1 | 0 | 0 | 113 | 0 |  |
| 19 | 4 | 151 | 0 | 0 | 219 | 0 | vindkraft (strom, 4:02, reserv), guldskrivare (skrivare, 6:03) |
| 20 | 2 | 2 | 0 | 0 | 17 | 0 |  |
| 21 | 0 | 0 | 0 | 0 | 23 | 0 |  |
| 22 | 0 | 0 | 0 | 0 | 640 | 0 |  |
| 23 | 0 | 0 | 0 | 0 | 0 | 0 |  |

TIDIG: 0 · FAST: 0 · upplåst av reserven (målet väntade 3 min): 1

**SKRATT:** 28 roliga ögonblick på 26 min (10.8 per 10 min, mål minst 5)

**Köp:**

- dag 19 4:24 – vindkraft (6050 kr)
- dag 19 6:20 – guldskrivare (4200 kr)
- dag 20 0:49 – kamin (9750 kr)

## Storykedjan (kvittens → varför → nytt mål)

| Dag | Tid | Id | Kvittens | Varför | Nytt mål | Tid till målet |
|---|---|---|---|---|---|---|


## Hur länge nya mål väntade (från att förra målet blev klart till att det nya syntes i målrutan)

Snitt 9.7 s · max 25.0 s · över 4 s: 9 · över 8 s: 8 av 16

## Flaggor (21)

- **UPPREPNING** dag 18 0:02: Bygg diamantkvarnen. (CT)
- **SEN** dag 18 0:58: 14.0 s efter händelsen: ali: "Ali här. Jag såg Diamantkvarn på avstånd. Ett streck blev lite snett. "
- **SEN** dag 19 1:04: 15.7 s efter händelsen: värld:Mjau.: "Mjau."
- **SEN** dag 19 4:59: 14.6 s efter händelsen: värld:TUUT! Vinka då!: "TUUT! Vinka då!"
- **SEN** dag 22 6:10: 52.8 s efter händelsen: notis:📔 Prestation: Jul på tippen · +3 respek: "📔 Prestation: Jul på tippen · +3 respekt"
- **SEN** dag 22 7:25: 100.1 s efter händelsen: kjelle: "Kjelle här, direkt från julfesten! Gunnar, du är här. Säg något till l"
- **SEN** dag 22 7:40: 16.4 s efter händelsen: värld:TUUT! Grann skylt!: "TUUT! Grann skylt!"
- **PAUS** dag 18 1:40: 0.0 s paus före "Dag 18 är slut. Nu vet Helen att jag bor HÄR. Jag "
- **PAUS** dag 19 2:11: 0.0 s paus före "📦 Paketet till Ett kafé i Ystad ligger i postlåda"
- **PAUS** dag 19 7:30: 0.0 s paus före "Dag 19 är slut. Det blir kallare för varje natt."
- **PAUS** dag 20 1:05: 0.0 s paus före "Fullt i händerna."
- **PAUS** dag 21 0:30: 0.0 s paus före "Dag 21 är slut. Nu vet Skatteverket att jag bor HÄ"
- **PAUS** dag 22 0:47: 0.0 s paus före "Göran lämnade en blank skruv på säljlådan."
- **PAUS** dag 22 5:56: 0.0 s paus före "📦 Paketet till Agneta på biblioteket ligger i pos"
- **PAUS** dag 22 6:23: 0.0 s paus före "Skylten vid vägen är uppgraderad."
- **TORRT** dag 20 0:48: 418 s utan roligt ögonblick
- **TEMPO** dag 18 1:55: dag 18 tog 1.9 min (mål 10–15)
- **TEMPO** dag 19 7:44: dag 19 tog 7.7 min (mål 10–15)
- **TEMPO** dag 20 1:53: dag 20 tog 1.9 min (mål 10–15)
- **TEMPO** dag 21 0:44: dag 21 tog 0.7 min (mål 10–15)
- **TEMPO** dag 23 0:01: dag 23 tog 0.0 min (mål 10–15)

Sidfel: inga

## Dag 18

| Tid | Källa | Vem | Text |
|---|---|---|---|
| 0:00 | MÅL |  | Bygg diamantkvarnen |
| 0:00 | MÅL |  | Bygg diamantkvarnen |
| 0:02 | sak | du | Bygg diamantkvarnen. |
| 0:02 | pil |  | Bygg diamantkvarnen |
| 0:02 | röst | du | Bygg diamantkvarnen. · MÅL |
| 0:02 | upprepning | du | Bygg diamantkvarnen. |
| 0:04 | klar | du | Bygg diamantkvarnen. |
| 0:06 | struken | notis:Skrivare L: Tornet är tomt – mal mer så  | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 0:12 | väntar | värld:Mjau. | Mjau. |
| 0:16 | sak | värld:Mjau. | Mjau. |
| 0:16 | bubbla |  | Mjau. |
| 0:18 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 0:18 | struken | notis | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 0:18 | klar | värld:Mjau. | Mjau. |
| 0:19 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 0:20 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 0:22 | händelse | printKlar | sak=byggsats:diamantkniv n=1 |
| 0:22 | toast | guld | ✅ |
| 0:30 | händelse | printStart | sak=byggsats:diamantkniv |
| 0:34 | toast | bra | Del 1 av 3 klar |
| 0:38 | toast | bra | Del 2 av 3 klar |
| 0:42 | händelse | printKlar | sak=byggsats:diamantkniv n=1 |
| 0:42 | toast | guld | ✅ |
| 0:42 | nej | du | Ta ut diamantkvarn |
| 0:42 | toast | fickskylt | Fulla fickor |
| 0:42 | fullaFickor | du | byggsats:diamantkniv |
| 0:42 | händelse | tagitUrPrint | sak=byggsats:diamantkniv n=1 |
| 0:42 | paket |  | sms |
| 0:42 | väntar | ali | Ali här. Jag såg Diamantkvarn på avstånd. Ett streck blev lite snett. Mitt fel. Vackert ändå. |
| 0:44 | väntar | info:guld | Diamantkvarnen sitter! Guldet – kom an. |
| 0:44 | sak | info:guld | Diamantkvarnen sitter! Guldet – kom an. |
| 0:44 | kvitto-visas | info:guld | Diamantkvarnen sitter! Guldet – kom an. |
| 0:44 | toast | guld | Diamantkvarnen sitter! Guldet – kom an. |
| 0:44 | händelse | malKlart | id=m18-bygg-diamantkvarnen del=Dag 18 – Diamantkvarnen och grunden nasta=m18-mal-rulle-guld |
| 0:44 | väntar | du | Mal en rulle guld. |
| 0:44 | MÅL |  | Mal en rulle guld |
| 0:46 | klar | info:guld | Diamantkvarnen sitter! Guldet – kom an. |
| 0:47 | målruta |  | Mal en rulle guld |
| 0:48 | kvittens-bock |  | ✓ Bygg diamantkvarnen |
| 0:48 | sak | du | Mal en rulle guld. |
| 0:48 | pil |  | Mal en rulle guld |
| 0:48 | röst | du | Mal en rulle guld. · MÅL |
| 0:50 | klar | du | Mal en rulle guld. |
| 0:53 | händelse | tagitUrPrint | sak=byggsats:diamantkniv n=1 |
| 0:58 | väntar | mamma | Jag hämtar dig på julafton kl 15. Var redo. |
| 0:58 | sak | ali | Ali här. Jag såg Diamantkvarn på avstånd. Ett streck blev lite snett. Mitt fel. Vackert ändå. |
| 0:58 | sms | ali | Ali här. Jag såg Diamantkvarn på avstånd. Ett streck blev lite snett. Mitt fel. Vackert ändå. |
| 0:58 | sms-bubbla | ali | Ali här. Jag såg Diamantkvarn på avstånd. Ett streck blev lite snett. Mitt fel. Vackert ändå. |
| 0:58 | röst | ali | Ali här. Jag såg Diamantkvarn på avstånd. Ett streck blev lite snett. Mitt fel. Vackert ändå. · REAKTION |
| 1:02 | väntar | info:guld | ✨ Guld! (1.9 s) |
| 1:02 | skratt | du | första guldet |
| 1:04 | kvitto-visas | info:guld | ✨ Guld! (1.9 s) |
| 1:04 | toast | guld | ✨ Guld! (1.9 s) |
| 1:05 | paket |  | tanke |
| 1:05 | tanke | du | Grus. Väldigt fint grus. |
| 1:05 | väntar | du | Grus. Väldigt fint grus. |
| 1:05 | skratt | du | vaskmiss |
| 1:06 | klar | ali | Ali här. Jag såg Diamantkvarn på avstånd. Ett streck blev lite snett. Mitt fel. Vackert ändå. |
| 1:07 | paket |  | tanke |
| 1:07 | tanke | du | Det står Rolf & Birgitta 1979 på insidan. |
| 1:07 | väntar | du | Det står Rolf & Birgitta 1979 på insidan. |
| 1:09 | paket |  | tanke |
| 1:09 | tanke | du | Grus. Väldigt fint grus. |
| 1:09 | struken | du | Grus. Väldigt fint grus. |
| 1:09 | skratt | du | vaskmiss |
| 1:15 | sak | du | Grus. Väldigt fint grus. |
| 1:15 | notis | tanke | 💭 Grus. Väldigt fint grus. |
| 1:15 | röst | du | Grus. Väldigt fint grus. · REAKTION |
| 1:17 | klar | du | Grus. Väldigt fint grus. |
| 1:20 | paket |  | toast → tanke |
| 1:20 | väntar | notis:Kvarnen gav en rulle filament nivå 4 – g | Kvarnen gav en rulle filament nivå 4 – guldkomposit! Den behövs för de finare recepten. |
| 1:20 | tanke | du | guldkomposit. Starkare än vanlig plast – Ali har recept som kräver den. Rolf hittar mer ju mer folk respekterar mig. |
| 1:20 | väntar | du | guldkomposit. Starkare än vanlig plast – Ali har recept som kräver den. Rolf hittar mer ju mer folk respekterar mig. |
| 1:20 | händelse | malKlart | id=m18-mal-rulle-guld del=Dag 18 – Diamantkvarnen och grunden nasta=m18-gjut-grunden-huset |
| 1:20 | väntar | du | tillbakablick hem |
| 1:20 | MÅL |  | Gjut grunden till huset |
| 1:20 | sak | du | guldkomposit. Starkare än vanlig plast – Ali har recept som kräver den. Rolf hittar mer ju mer folk respekterar mig. |
| 1:20 | notis | tanke | 💭 guldkomposit. Starkare än vanlig plast – Ali har recept som kräver den. Rolf hittar mer ju mer folk respekterar mig. |
| 1:20 | röst | du | guldkomposit. Starkare än vanlig plast – Ali har recept som kräver den. Rolf hittar mer ju mer folk respekterar mig. · REAKTION |
| 1:23 | tillbakablick | du | hem |
| 1:24 | kvittens-bock |  | ✓ Mal en rulle guld |
| 1:25 | väntar | notis:📔 Prestation: Röd tråd · +3 respekt | 📔 Prestation: Röd tråd · +3 respekt |
| 1:27 | väntar | du | Gjut grunden till huset. |
| 1:27 | målruta |  | Gjut grunden till huset |
| 1:27 | väntar | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått solcellspark. Mer säger jag inte. Gunnar vet. |
| 1:27 | radio | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått solcellspark. Mer säger jag inte. Gunnar vet. |
| 1:27 | skratt | du | Radio-Kjelle |
| 1:30 | klar | du | guldkomposit. Starkare än vanlig plast – Ali har recept som kräver den. Rolf hittar mer ju mer folk respekterar mig. |
| 1:32 | sak | du | Gjut grunden till huset. |
| 1:32 | pil |  | Gjut grunden till huset |
| 1:32 | röst | du | Gjut grunden till huset. · MÅL |
| 1:34 | klar | du | Gjut grunden till huset. |
| 1:36 | struken | notis:📔 Prestation: Röd tråd · +3 respekt | 📔 Prestation: Röd tråd · +3 respekt |
| 1:38 | väntar | info:guld | 🌲 Grunden till huset på ängen är din! Gärdesgården har flyttats – där får du ställa saker nu. |
| 1:38 | paket |  | sms |
| 1:38 | väntar | rolf | Grunden ä gjuten. Ja sto å tittade i en timme. Betong ä vackert när den torkar. Säg inte de till nån. /R |
| 1:38 | sak | info:guld | 🌲 Grunden till huset på ängen är din! Gärdesgården har flyttats – där får du ställa saker nu. |
| 1:38 | kvitto-visas | info:guld | 🌲 Grunden till huset på ängen är din! Gärdesgården har flyttats – där får du ställa saker nu. |
| 1:38 | toast | guld | 🌲 Grunden till huset på ängen är din! Gärdesgården har flyttats – där får du ställa saker nu. |
| 1:38 | händelse | malKlart | id=m18-gjut-grunden-huset del=Dag 18 – Diamantkvarnen och grunden nasta=sov18 |
| 1:38 | paket |  | lapp |
| 1:38 | väntar | du | Dag 18 är slut. Nu vet Helen att jag bor HÄR. Jag vill bo i ett riktigt hus. I morgon. |
| 1:38 | MÅL |  | Klart för idag – sov när du vill |
| 1:39 | väntar | info:info | Pappa kommer gående. Han bär på en kasse … |
| 1:39 | scenInfo | pappa | Pappa kommer |
| 1:40 | klar | info:guld | 🌲 Grunden till huset på ängen är din! Gärdesgården har flyttats – där får du ställa saker nu. |
| 1:40 | sak | du | Dag 18 är slut. Nu vet Helen att jag bor HÄR. Jag vill bo i ett riktigt hus. I morgon. |
| 1:40 | kvitto-visas | du | Dag 18 är slut. Nu vet Helen att jag bor HÄR. Jag vill bo i ett riktigt hus. I morgon. |
| 1:40 | lapp | 📔 Dagbok | Dag 18 är slut. Nu vet Helen att jag bor HÄR. Jag vill bo i ett riktigt hus. I morgon. |
| 1:40 | meddelande | du | Dag 18 är slut. Nu vet Helen att jag bor HÄR. Jag vill bo i ett riktigt hus. I morgon. |
| 1:40 | dagbokkort | du | Dag 18 är slut. Nu vet Helen att jag bor HÄR. Jag vill bo i ett riktigt hus. I morgon. |
| 1:40 | röst | du | Dag 18 är slut. Nu vet Helen att jag bor HÄR. Jag vill bo i ett riktigt hus. I morgon. · STORY |
| 1:49 | händelse | brevLast | id=kvall18 |
| 1:49 | klar | du | Dag 18 är slut. Nu vet Helen att jag bor HÄR. Jag vill bo i ett riktigt hus. I morgon. |
| 1:49 | väntar | notis:🌇 Klockan är 21. Ali slår igen luckan.  | 🌇 Klockan är 21. Ali slår igen luckan. Dagens jobb är klart – gå in i skjulet och sov i sängen. |
| 1:49 | målruta |  | Klart för idag – sov när du vill |
| 1:49 | sak | du | (nytt mål i rutan) |
| 1:49 | pil |  | Klart för idag – sov när du vill |
| 1:49 | klar | du | (nytt mål i rutan) |
| 1:51 | struken | info:info | Pappa kommer gående. Han bär på en kasse … |

<details><summary>Botens handlingar dag 18</summary>

- 0:12 plockar 5 skräp på tippen (bär max 16) (75357 kr)
- 0:16 gå till kvarnen (15 m) (75357 kr)
- 0:28 gå till skrivaren (5 m) (75357 kr)
- 0:30 printar Diamantkvarn (3 delar) (75357 kr)
- 0:42 tar ut 1 st ur skrivaren (75357 kr)
- 0:42 fulla fickor – lägger g_skruv i kistan (75357 kr)
- 0:44 gå till kvarnen (3 m) (75357 kr)
- 0:53 gå till skrivaren (4 m) (75357 kr)
- 0:54 tar ut 1 st ur skrivaren (75357 kr)
- 1:02 gå till ådern (42 m) (75357 kr)
- 1:11 vaskar guld i ådern (75357 kr)
- 1:20 gå till kvarnen (guld) (43 m) (75357 kr)
- 1:38 gå till tavlan vid vägen (22 m) (75357 kr)
- 1:38 köper grunden till huset på ängen (12000 kr) (63357 kr)
- 1:49 popup: "FORTSÄTT" (63357 kr)
- 1:54 gå till sängen (12 m) (63357 kr)

</details>

## Dag 19

| Tid | Källa | Vem | Text |
|---|---|---|---|
| 1:57 | vara | ali | n2_vas |
| 1:57 | händelse | malKlart | id=sov18 del=Dag 18 – Diamantkvarnen och grunden nasta=m19-bygg-huset-grunden |
| 1:57 | poolTom | du | 4 repliker använda |
| 1:57 | MÅL |  | Bygg huset på grunden |
| 0:01 | händelse | dagenBorjar | dag=19 |
| 0:01 | meddelande | du | Dag 19. 3 dagar till jul. Utan hus kommer mamma och hämtar mig. |
| 0:01 | dagbokkort | du | Ett riktigt hus · Dag 19. 3 dagar till jul. Utan hus kommer mamma och hämtar mig. |
| 0:01 | röst | du | Ett riktigt hus. Dag 19. 3 dagar till jul. Utan hus kommer mamma och hämtar mig. · STORY |
| 0:15 | händelse | morgonkortStangt | dag=19 |
| 0:15 | struken | kedja | d19 |
| 0:15 | väntar | du | Bygg huset på grunden. |
| 0:19 | målruta |  | Bygg huset på grunden |
| 0:20 | sak | du | Bygg huset på grunden. |
| 0:20 | pil |  | Bygg huset på grunden |
| 0:20 | röst | du | Bygg huset på grunden. · MÅL |
| 0:23 | klar | du | Bygg huset på grunden. |
| 0:25 | struken | notis:Kvarnen gav en rulle filament nivå 4 – g | Kvarnen gav en rulle filament nivå 4 – guldkomposit! Den behövs för de finare recepten. |
| 0:25 | struken | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått solcellspark. Mer säger jag inte. Gunnar vet. |
| 0:25 | struken | notis:🌇 Klockan är 21. Ali slår igen luckan.  | 🌇 Klockan är 21. Ali slår igen luckan. Dagens jobb är klart – gå in i skjulet och sov i sängen. |
| 0:25 | struken | mamma | Jag hämtar dig på julafton kl 15. Var redo. |
| 0:27 | paket |  | sms |
| 0:27 | väntar | mamma | Pappa säger att du har byggt ett hus. Med trappa. Är det säkert? Har du räcke? Jag skickar en brandvarnare. Och sylt. |
| 0:27 | väntar | info:guld | 🏡 Huset står klart på ängen! Två rum och en trappa upp till sovloftet. |
| 0:27 | paket |  | sms |
| 0:27 | väntar | rolf | Du har byggt ett HUS. Me trappa. Ja har aldrig gått i en trappa i ett hus som ja känner nån som äger. Ja kommer på inflyttningsfest. Ja tar me Kajsa. /R |
| 0:27 | sak | info:guld | 🏡 Huset står klart på ängen! Två rum och en trappa upp till sovloftet. |
| 0:27 | kvitto-visas | info:guld | 🏡 Huset står klart på ängen! Två rum och en trappa upp till sovloftet. |
| 0:27 | toast | guld | 🏡 Huset står klart på ängen! Två rum och en trappa upp till sovloftet. |
| 0:27 | händelse | malKlart | id=m19-bygg-huset-grunden del=Dag 19 – Ett riktigt hus nasta=m19-vindkraft |
| 0:27 | MÅL |  | Printa och sälj |
| 0:29 | klar | info:guld | 🏡 Huset står klart på ängen! Två rum och en trappa upp till sovloftet. |
| 0:31 | målruta |  | Printa och sälj |
| 0:31 | kvittens-bock |  | ✓ Bygg huset på grunden |
| 0:31 | sak | du | (nytt mål i rutan) |
| 0:31 | pil |  | Printa och sälj |
| 0:31 | klar | du | (nytt mål i rutan) |
| 0:48 | väntar | värld:Mjau. | Mjau. |
| 0:52 | sak | du | Det står Rolf & Birgitta 1979 på insidan. |
| 0:52 | notis | tanke | 💭 Det står Rolf & Birgitta 1979 på insidan. |
| 0:52 | röst | du | Det står Rolf & Birgitta 1979 på insidan. · STORY |
| 0:55 | klar | du | Det står Rolf & Birgitta 1979 på insidan. |
| 1:01 | händelse | printStart | sak=nyckelring |
| 1:01 | toast | guld | ✅ |
| 1:01 | händelse | printKlar | sak=nyckelring n=29 |
| 1:02 | nej | du | Ta ut nyckelring |
| 1:02 | toast | fickskylt | Fulla fickor |
| 1:02 | fullaFickor | du | nyckelring |
| 1:02 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 1:03 | skratt | du | falsk tuta |
| 1:04 | sak | värld:Mjau. | Mjau. |
| 1:04 | bubbla |  | Mjau. |
| 1:05 | händelse | printStart | sak=nyckelring |
| 1:05 | toast | guld | ✅ |
| 1:05 | händelse | printKlar | sak=nyckelring n=30 |
| 1:06 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 1:06 | klar | värld:Mjau. | Mjau. |
| 1:08 | händelse | printStart | sak=pall |
| 1:11 | toast | guld | ✅ |
| 1:11 | händelse | printKlar | sak=pall n=24 |
| 1:12 | nej | du | Ta ut pall |
| 1:12 | toast | fickskylt | Fulla fickor |
| 1:12 | fullaFickor | du | pall |
| 1:13 | händelse | tagitUrPrint | sak=pall n=1 |
| 1:16 | sak | mamma | Pappa säger att du har byggt ett hus. Med trappa. Är det säkert? Har du räcke? Jag skickar en brandvarnare. Och sylt. |
| 1:16 | sms | mamma | Pappa säger att du har byggt ett hus. Med trappa. Är det säkert? Har du räcke? Jag skickar en brandvarnare. Och sylt. |
| 1:16 | sms-bubbla | mamma | Pappa säger att du har byggt ett hus. Med trappa. Är det säkert? Har du räcke? Jag skickar en brandvarnare. Och sylt. |
| 1:16 | röst | mamma | Pappa säger att du har byggt ett hus. Med trappa. Är det säkert? Har du räcke? Jag skickar en brandvarnare. Och sylt. · STORY |
| 1:25 | väntar | värld:TUUT TUUT! | TUUT TUUT! |
| 1:26 | klar | mamma | Pappa säger att du har byggt ett hus. Med trappa. Är det säkert? Har du räcke? Jag skickar en brandvarnare. Och sylt. |
| 1:26 | händelse | printStart | sak=pall |
| 1:29 | toast | guld | ✅ |
| 1:29 | händelse | printKlar | sak=pall n=25 |
| 1:30 | händelse | tagitUrPrint | sak=pall n=1 |
| 1:34 | sak | värld:TUUT TUUT! | TUUT TUUT! |
| 1:34 | bubbla |  | TUUT TUUT! |
| 1:37 | klar | värld:TUUT TUUT! | TUUT TUUT! |
| 1:45 | webb | du | packade 2 nyckelring |
| 1:53 | webb | du | packade 2 pall |
| 2:09 | väntar | info:bra | 📦 Paketet till En lärare i Sundsvall ligger i postlådan – Rolf tar det till posten |
| 2:09 | sak | info:bra | 📦 Paketet till En lärare i Sundsvall ligger i postlådan – Rolf tar det till posten |
| 2:09 | kvitto-visas | info:bra | 📦 Paketet till En lärare i Sundsvall ligger i postlådan – Rolf tar det till posten |
| 2:09 | toast | bra | 📦 Paketet till En lärare i Sundsvall ligger i postlådan – Rolf tar det till posten |
| 2:10 | väntar | info:bra | 📦 Paketet till Ett kafé i Ystad ligger i postlådan – Rolf tar det till posten |
| 2:11 | klar | info:bra | 📦 Paketet till En lärare i Sundsvall ligger i postlådan – Rolf tar det till posten |
| 2:11 | sak | info:bra | 📦 Paketet till Ett kafé i Ystad ligger i postlådan – Rolf tar det till posten |
| 2:11 | kvitto-visas | info:bra | 📦 Paketet till Ett kafé i Ystad ligger i postlådan – Rolf tar det till posten |
| 2:11 | toast | bra | 📦 Paketet till Ett kafé i Ystad ligger i postlådan – Rolf tar det till posten |
| 2:13 | klar | info:bra | 📦 Paketet till Ett kafé i Ystad ligger i postlådan – Rolf tar det till posten |
| 2:15 | händelse | printStart | sak=n3_stol |
| 2:22 | toast | guld | ✅ |
| 2:22 | händelse | printKlar | sak=n3_stol n=18 |
| 2:22 | händelse | tagitUrPrint | sak=n3_stol n=1 |
| 2:25 | poolTom | du | 4 repliker använda |
| 2:29 | poolTom | ali | 4 repliker använda |
| 2:31 | aliSalt | ali | 16000 |
| 2:31 | aliSalt | ali | 6 |
| 2:31 | aliSalt | ali | 300 |
| 2:31 | aliSalt | ali | 240 |
| 2:32 | väntar | ali | Ditt skjul syns från kassan. Det ser bättre ut nu. |
| 2:32 | sak | ali | Ditt skjul syns från kassan. Det ser bättre ut nu. |
| 2:32 | röst | ali | Ditt skjul syns från kassan. Det ser bättre ut nu. · SMÅPRAT |
| 2:33 | bubbla |  | Ditt skjul syns från kassan. Det ser bättre ut nu. |
| 2:36 | klar | ali | Ditt skjul syns från kassan. Det ser bättre ut nu. |
| 2:47 | händelse | printStart | sak=n3_stol |
| 2:54 | toast | guld | ✅ |
| 2:54 | händelse | printKlar | sak=n3_stol n=19 |
| 2:54 | händelse | tagitUrPrint | sak=n3_stol n=1 |
| 3:03 | aliSalt | ali | 15200 |
| 3:05 | väntar | rolf | Ja kände lukten från sopbilen. FRÅN SOPBILEN. Vad har du där borta? /R |
| 3:13 | händelse | printStart | sak=n3_stol |
| 3:20 | skratt | du | plastspagetti |
| 3:20 | toast | guld | ✅ |
| 3:20 | händelse | printKlar | sak=n3_stol n=20 |
| 3:20 | händelse | tagitUrPrint | sak=spagetti n=1 |
| 3:20 | skratt | du | falsk tuta |
| 3:20 | väntar | värld:TUUT! Hej grannen! | TUUT! Hej grannen! |
| 3:20 | sak | värld:TUUT! Hej grannen! | TUUT! Hej grannen! |
| 3:20 | bubbla |  | TUUT! Hej grannen! |
| 3:23 | klar | värld:TUUT! Hej grannen! | TUUT! Hej grannen! |
| 3:29 | skratt | du | Ali köper konst |
| 3:29 | aliSalt | ali | 3 |
| 3:38 | händelse | printStart | sak=n3_stol |
| 3:45 | toast | guld | ✅ |
| 3:45 | händelse | printKlar | sak=n3_stol n=21 |
| 3:45 | händelse | tagitUrPrint | sak=n3_stol n=1 |
| 3:54 | aliSalt | ali | 14440 |
| 4:02 | upplåst | strom | vindkraft |
| 4:02 | brott | RESERV | vindkraft (strom 0 av 15) |
| 4:02 | händelse | upplast | id=vindkraft flask=strom |
| 4:02 | paket |  | sms |
| 4:02 | väntar | ali | Ali här. Ett vindkraftverk. Begagnat, från en gård i Hälsingland. Vingarna är hela. Nästan. |
| 4:02 | sak | ali | Ali här. Ett vindkraftverk. Begagnat, från en gård i Hälsingland. Vingarna är hela. Nästan. |
| 4:02 | sms | ali | Ali här. Ett vindkraftverk. Begagnat, från en gård i Hälsingland. Vingarna är hela. Nästan. |
| 4:02 | sms-bubbla | ali | Ali här. Ett vindkraftverk. Begagnat, från en gård i Hälsingland. Vingarna är hela. Nästan. |
| 4:02 | röst | ali | Ali här. Ett vindkraftverk. Begagnat, från en gård i Hälsingland. Vingarna är hela. Nästan. · STORY |
| 4:04 | händelse | printStart | sak=n3_stol |
| 4:10 | klar | ali | Ali här. Ett vindkraftverk. Begagnat, från en gård i Hälsingland. Vingarna är hela. Nästan. |
| 4:11 | toast | guld | ✅ |
| 4:11 | händelse | printKlar | sak=n3_stol n=22 |
| 4:11 | händelse | tagitUrPrint | sak=n3_stol n=1 |
| 4:20 | aliSalt | ali | 13718 |
| 4:24 | skratt | du | Alis dyr-pling |
| 4:24 | toast | guld | 3D-modell köpt – printa vindkraftverk på skrivaren |
| 4:24 | händelse | kopt | sak=vindkraft |
| 4:25 | poolTom | du | 4 repliker använda |
| 4:31 | händelse | printStart | sak=byggsats:vindkraft |
| 4:34 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 4:35 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 4:36 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 4:36 | väntar | notis:Skrivare L: Tornet är tomt – mal mer så  | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 4:36 | sak | notis:Skrivare L: Tornet är tomt – mal mer så  | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 4:36 | notis | fel | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 4:38 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 4:38 | struken | notis | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 4:39 | klar | notis:Skrivare L: Tornet är tomt – mal mer så  | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 4:39 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 4:39 | struken | notis | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 4:40 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 4:40 | struken | notis | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 4:42 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 4:42 | struken | notis | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 4:42 | väntar | värld:Mjau. | Mjau. |
| 4:43 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 4:43 | struken | notis | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 4:44 | toast | bra | Del 1 av 4 klar |
| 4:44 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 4:44 | struken | notis | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 4:45 | väntar | värld:TUUT! Vinka då! | TUUT! Vinka då! |
| 4:45 | skratt | du | Rolf vinkar |
| 4:46 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 4:46 | struken | notis | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 4:46 | skratt | du | kvarnen spottar |
| 4:47 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 4:47 | struken | notis | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 4:48 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 4:49 | sak | värld:Mjau. | Mjau. |
| 4:49 | bubbla |  | Mjau. |
| 4:50 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 4:51 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 4:51 | klar | värld:Mjau. | Mjau. |
| 4:52 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 4:53 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 4:53 | skratt | du | falsk tuta |
| 4:54 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 4:56 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 4:57 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 4:58 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 4:59 | sak | värld:TUUT! Vinka då! | TUUT! Vinka då! |
| 4:59 | bubbla |  | TUUT! Vinka då! |
| 4:59 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 5:00 | toast | bra | Del 2 av 4 klar |
| 5:01 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 5:02 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 5:02 | klar | värld:TUUT! Vinka då! | TUUT! Vinka då! |
| 5:03 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 5:05 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 5:06 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 5:08 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 5:08 | skratt | du | däcket rullar iväg |
| 5:09 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 5:11 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 5:12 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 5:14 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 5:15 | väntar | värld:TUUT TUUT! | TUUT TUUT! |
| 5:15 | sak | värld:TUUT TUUT! | TUUT TUUT! |
| 5:15 | bubbla |  | TUUT TUUT! |
| 5:15 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 5:17 | toast | bra | Del 3 av 4 klar |
| 5:17 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 5:18 | klar | värld:TUUT TUUT! | TUUT TUUT! |
| 5:18 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 5:20 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 5:21 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 5:27 | väntar | värld:Mjau. | Mjau. |
| 5:35 | sak | värld:Mjau. | Mjau. |
| 5:35 | bubbla |  | Mjau. |
| 5:36 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 5:36 | struken | notis | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 5:37 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 5:37 | klar | värld:Mjau. | Mjau. |
| 5:38 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 5:39 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 5:40 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 5:41 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 5:42 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 5:44 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 5:45 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 5:46 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 5:47 | händelse | printKlar | sak=byggsats:vindkraft n=1 |
| 5:47 | toast | guld | ✅ |
| 5:54 | händelse | tagitUrPrint | sak=byggsats:vindkraft n=1 |
| 5:54 | paket |  | sms |
| 5:54 | väntar | ali | Ali här. Vindkraftverk – printad. På riktigt. Jag har visat bilden för min fru tre gånger. |
| 5:57 | sak | ali | Ali här. Vindkraftverk – printad. På riktigt. Jag har visat bilden för min fru tre gånger. |
| 5:57 | sms | ali | Ali här. Vindkraftverk – printad. På riktigt. Jag har visat bilden för min fru tre gånger. |
| 5:57 | sms-bubbla | ali | Ali här. Vindkraftverk – printad. På riktigt. Jag har visat bilden för min fru tre gånger. |
| 5:57 | röst | ali | Ali här. Vindkraftverk – printad. På riktigt. Jag har visat bilden för min fru tre gånger. · REAKTION |
| 6:03 | händelse | placerat | sak=vindkraft |
| 6:03 | händelse | malKlart | id=m19-vindkraft del=Dag 19 – Ett riktigt hus nasta=m19-guldskrivare |
| 6:03 | målruta |  | Printa och sälj |
| 6:03 | upplåst | skrivare | guldskrivare |
| 6:03 | brott | UPPLÅST | guldskrivare (skrivare 2498 av 75) |
| 6:03 | händelse | upplast | id=guldskrivare flask=skrivare |
| 6:03 | paket |  | tanke → sms |
| 6:03 | tanke | du | Guldrullarna ligger där och glänser. Ingen av skrivarna klarar dem. |
| 6:03 | väntar | du | Guldrullarna ligger där och glänser. Ingen av skrivarna klarar dem. |
| 6:03 | väntar | ali | Ali här. Guldskrivaren. Munstycket är av diamant. Tappa den inte. Den är dyrare än min bil. |
| 6:04 | klar | ali | Ali här. Vindkraftverk – printad. På riktigt. Jag har visat bilden för min fru tre gånger. |
| 6:06 | sak | du | (nytt mål i rutan) |
| 6:06 | pil |  | Bygg guldskrivaren i linje 4 |
| 6:06 | klar | du | Bygg guldskrivaren i linje 4. |
| 6:07 | nick |  | nick:122 |
| 6:07 | kvittens-bock |  | ✓ Bygg vindkraftverket på backen |
| 6:15 | sak | du | Guldrullarna ligger där och glänser. Ingen av skrivarna klarar dem. |
| 6:15 | notis | tanke | 💭 Guldrullarna ligger där och glänser. Ingen av skrivarna klarar dem. |
| 6:15 | röst | du | Guldrullarna ligger där och glänser. Ingen av skrivarna klarar dem. · STORY |
| 6:19 | skratt | du | Alis dyr-pling |
| 6:19 | toast | guld | 3D-modell köpt – printa guldskrivaren på skrivaren |
| 6:19 | händelse | kopt | sak=guldskrivare |
| 6:21 | klar | du | Guldrullarna ligger där och glänser. Ingen av skrivarna klarar dem. |
| 6:23 | struken | ali | Ali här. Guldskrivaren. Munstycket är av diamant. Tappa den inte. Den är dyrare än min bil. |
| 6:25 | poolTom | du | 4 repliker använda |
| 6:28 | händelse | printStart | sak=byggsats:guldskrivare |
| 6:31 | toast | bra | Del 1 av 5 klar |
| 6:34 | toast | bra | Del 2 av 5 klar |
| 6:35 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 6:42 | skratt | du | kvarnen rapar |
| 6:46 | toast | bra | Del 3 av 5 klar |
| 6:51 | toast | bra | Del 4 av 5 klar |
| 6:56 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 7:05 | skratt | du | kvarnen rapar |
| 7:06 | händelse | printKlar | sak=byggsats:guldskrivare n=1 |
| 7:06 | toast | guld | ✅ |
| 7:10 | händelse | tagitUrPrint | sak=byggsats:guldskrivare n=1 |
| 7:10 | skratt | du | falsk tuta |
| 7:10 | väntar | värld:TUUT! Hej grannen! | TUUT! Hej grannen! |
| 7:10 | sak | värld:TUUT! Hej grannen! | TUUT! Hej grannen! |
| 7:10 | bubbla |  | TUUT! Hej grannen! |
| 7:10 | toast | guld | 🧵 |
| 7:13 | klar | värld:TUUT! Hej grannen! | TUUT! Hej grannen! |
| 7:14 | händelse | placerat | sak=guldskrivare |
| 7:14 | händelse | malKlart | id=m19-guldskrivare del=Dag 19 – Ett riktigt hus nasta=m19-flytta-in-huset |
| 7:14 | väntar | du | Flytta in i huset. |
| 7:14 | målruta |  | Flytta in i huset |
| 7:14 | MÅL |  | Flytta in i huset |
| 7:15 | sak | du | Flytta in i huset. |
| 7:15 | pil |  | Flytta in i huset |
| 7:15 | röst | du | Flytta in i huset. · MÅL |
| 7:17 | klar | du | Flytta in i huset. |
| 7:18 | kvittens-bock |  | ✓ Bygg guldskrivaren i linje 4 |
| 7:28 | väntar | info:guld | 🏡 Du har flyttat in! Skjulet blir verkstad – du bor i ett riktigt hus nu. |
| 7:28 | paket |  | sms |
| 7:28 | väntar | mamma | Du har flyttat in i ett hus. Med trappa. Jag har köpt en dörrmatta. Det står "Välkommen" på den. Pappa ville att det skulle stå "Gå hem". Jag sa nej. |
| 7:28 | sak | info:guld | 🏡 Du har flyttat in! Skjulet blir verkstad – du bor i ett riktigt hus nu. |
| 7:28 | kvitto-visas | info:guld | 🏡 Du har flyttat in! Skjulet blir verkstad – du bor i ett riktigt hus nu. |
| 7:28 | toast | guld | 🏡 Du har flyttat in! Skjulet blir verkstad – du bor i ett riktigt hus nu. |
| 7:28 | händelse | malKlart | id=m19-flytta-in-huset del=Dag 19 – Ett riktigt hus nasta=sov19 |
| 7:28 | paket |  | lapp |
| 7:28 | väntar | du | Dag 19 är slut. Det blir kallare för varje natt. |
| 7:28 | MÅL |  | Klart för idag – sov när du vill |
| 7:30 | klar | info:guld | 🏡 Du har flyttat in! Skjulet blir verkstad – du bor i ett riktigt hus nu. |
| 7:30 | sak | du | Dag 19 är slut. Det blir kallare för varje natt. |
| 7:30 | kvitto-visas | du | Dag 19 är slut. Det blir kallare för varje natt. |
| 7:30 | lapp | 📔 Dagbok | Dag 19 är slut. Det blir kallare för varje natt. |
| 7:30 | meddelande | du | Dag 19 är slut. Det blir kallare för varje natt. |
| 7:30 | dagbokkort | du | Dag 19 är slut. Det blir kallare för varje natt. |
| 7:30 | röst | du | Dag 19 är slut. Det blir kallare för varje natt. · STORY |
| 7:36 | händelse | brevLast | id=kvall19 |
| 7:36 | klar | du | Dag 19 är slut. Det blir kallare för varje natt. |
| 7:36 | väntar | notis:🌇 Klockan är 21. Ali slår igen luckan.  | 🌇 Klockan är 21. Ali slår igen luckan. Dagens jobb är klart – gå in i skjulet och sov i sängen. |
| 7:36 | målruta |  | Klart för idag – sov när du vill |
| 7:36 | sak | du | (nytt mål i rutan) |
| 7:36 | pil |  | Klart för idag – sov när du vill |
| 7:36 | klar | du | (nytt mål i rutan) |
| 7:46 | webbBetalt | du | 539 |

<details><summary>Botens handlingar dag 19</summary>

- 0:00 — dag 19 börjar — (63357 kr)
- 0:15 popup: "FORTSÄTT" (63357 kr)
- 0:27 gå till tavlan vid vägen (11 m) (63357 kr)
- 0:27 köper ett riktigt hus på ängen (17500 kr) (45857 kr)
- 0:48 plockar 6 skräp på tippen (bär max 16) (45857 kr)
- 0:51 gå till kvarnen (16 m) (45857 kr)
- 0:59 gå till skrivaren (7 m) (45857 kr)
- 1:01 printar Nyckelring (45857 kr)
- 1:02 tar ut 1 st ur skrivaren (45857 kr)
- 1:02 fulla fickor – lägger rulle4 i kistan (45857 kr)
- 1:05 printar Nyckelring (45857 kr)
- 1:06 tar ut 1 st ur skrivaren (45857 kr)
- 1:08 printar Pall (45857 kr)
- 1:13 tar ut 1 st ur skrivaren (45857 kr)
- 1:13 fulla fickor – lägger nyckelring i kistan (45857 kr)
- 1:20 plockar 2 skräp på tippen (bär max 16) (45857 kr)
- 1:22 gå till kvarnen (11 m) (45857 kr)
- 1:24 gå till skrivaren (7 m) (45857 kr)
- 1:26 printar Pall (45857 kr)
- 1:31 tar ut 1 st ur skrivaren (45857 kr)
- 1:35 gå till datorn (19 m) (45857 kr)
- 1:44 panel: "Webbshopen · Soptippsvägen 1
B" (45857 kr)
- 1:53 panel: "Webbshopen · Soptippsvägen 1
B" (45857 kr)
- 2:02 panel: "Webbshopen · Soptippsvägen 1
B" (45857 kr)
- 2:09 gå till Rolfs postlåda (paket) (29 m) (45857 kr)
- 2:10 webbshop: 2 paket i postlådan (45857 kr)
- 2:10 tjänar pengar till väntar på flaskhalsen för vindkraft: 45857/45897 kr → printar kolfiberstol (16000 kr) (45857 kr)
- 2:13 gå till skrivaren (15 m) (45857 kr)
- 2:15 printar Kolfiberstol (45857 kr)
- 2:23 tar ut 1 st ur skrivaren (45857 kr)
- 2:29 gå till Ali (34 m) (45857 kr)
- 2:29 öppnar Alis butik – sälja (45857 kr)
- 2:32 säljer hos Ali: +16546 kr (62403 kr)
- 2:39 tjänar pengar till väntar på flaskhalsen för vindkraft: 62403/62443 kr → printar kolfiberstol (15200 kr) (62403 kr)
- 2:45 gå till skrivaren (33 m) (62403 kr)
- 2:47 printar Kolfiberstol (62403 kr)
- 2:54 tar ut 1 st ur skrivaren (62403 kr)
- 3:01 gå till Ali (33 m) (62403 kr)
- 3:01 öppnar Alis butik – sälja (62403 kr)
- 3:03 säljer hos Ali: +15200 kr (77603 kr)
- 3:05 tjänar pengar till väntar på flaskhalsen för vindkraft: 77603/77643 kr → printar kolfiberstol (14440 kr) (77603 kr)
- 3:12 gå till skrivaren (33 m) (77603 kr)
- 3:13 printar Kolfiberstol (77603 kr)
- 3:21 tar ut 1 st ur skrivaren (77603 kr)
- 3:27 gå till Ali (33 m) (77603 kr)
- 3:27 öppnar Alis butik – sälja (77603 kr)
- 3:29 säljer hos Ali: +3 kr (77606 kr)
- 3:30 tjänar pengar till väntar på flaskhalsen för vindkraft: 77606/77643 kr → printar kolfiberstol (14440 kr) (77606 kr)
- 3:37 gå till skrivaren (33 m) (77606 kr)
- 3:38 printar Kolfiberstol (77606 kr)
- 3:46 tar ut 1 st ur skrivaren (77606 kr)
- 3:52 gå till Ali (33 m) (77606 kr)
- 3:52 öppnar Alis butik – sälja (77606 kr)
- 3:54 säljer hos Ali: +14440 kr (92046 kr)
- 3:56 tjänar pengar till väntar på flaskhalsen för vindkraft: 92046/92086 kr → printar kolfiberstol (13718 kr) (92046 kr)
- 4:03 gå till skrivaren (33 m) (92046 kr)
- 4:04 printar Kolfiberstol (92046 kr)
- 4:12 tar ut 1 st ur skrivaren (92046 kr)
- 4:19 gå till Ali (33 m) (92046 kr)
- 4:19 öppnar Alis butik – sälja (92046 kr)
- 4:20 säljer hos Ali: +13718 kr (105764 kr)
- 4:22 öppnar Alis butik – köpa vindkraftverk (105764 kr)
- 4:24 köper vindkraft för 6050 kr (99714 kr)
- 4:30 gå till skrivaren (23 m) (99714 kr)
- 4:31 printar Vindkraftverk (4 delar) (99714 kr)
- 4:45 plockar 6 skräp på tippen (bär max 16) (99714 kr)
- 4:48 gå till kvarnen (14 m) (99714 kr)
- 5:31 plockar 7 skräp på tippen (bär max 16) (99714 kr)
- 5:34 gå till kvarnen (17 m) (99714 kr)
- 5:54 gå till skrivaren (7 m) (99714 kr)
- 5:54 tar ut 1 st ur skrivaren (99714 kr)
- 6:02 gå till platsen för vindkraftverk (40 m) (99714 kr)
- 6:03 ställer ut vindkraftverk (99714 kr)
- 6:18 gå till Ali (45 m) (99714 kr)
- 6:18 öppnar Alis butik – köpa guldskrivaren (99714 kr)
- 6:20 köper guldskrivare för 4200 kr (95514 kr)
- 6:27 gå till skrivaren (29 m) (95514 kr)
- 6:28 printar Guldskrivaren (5 delar) (95514 kr)
- 6:39 gå till en tunna (16 m) (95514 kr)
- 6:42 gå till PETG-kvarnen (10 m) (95514 kr)
- 6:42 tömmer det tunga i PETG-kvarnen (95514 kr)
- 7:01 gå till en tunna (12 m) (95514 kr)
- 7:05 gå till PETG-kvarnen (12 m) (95514 kr)
- 7:05 tömmer det tunga i PETG-kvarnen (95514 kr)
- 7:10 gå till skrivaren (4 m) (95514 kr)
- 7:10 tar ut 1 st ur skrivaren (95514 kr)
- 7:13 gå till platsen för guldskrivaren (10 m) (95514 kr)
- 7:14 ställer ut guldskrivaren (95514 kr)
- 7:28 gå till huset (41 m) (95514 kr)
- 7:36 popup: "FORTSÄTT" (95514 kr)
- 7:43 gå till sängen (22 m) (95514 kr)

</details>

## Dag 20

| Tid | Källa | Vem | Text |
|---|---|---|---|
| 7:46 | vara | ali | n2_hjalm |
| 7:46 | väntar | info:guld | Nu blir det riktigt kallt. Utan vedkamin och hela väggar fryser du. |
| 7:46 | händelse | malKlart | id=sov19 del=Dag 19 – Ett riktigt hus nasta=m20-printa-stall-ut |
| 7:46 | MÅL |  | Printa och ställ ut en vedkamin |
| 7:47 | skratt | du | tummen på fotot |
| 7:47 | väntar | foto | Ett hus (och min tumme) |
| 7:47 | paket |  | tanke |
| 7:47 | tanke | du | Ett riktigt hus. Vänta bara tills mamma ser det. |
| 7:47 | väntar | du | Ett riktigt hus. Vänta bara tills mamma ser det. |
| 0:01 | struken | info:guld | Nu blir det riktigt kallt. Utan vedkamin och hela väggar fryser du. |
| 0:01 | väntar | info:guld | Göran lämnade en blank skruv på säljlådan. |
| 0:01 | väntar | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått vindkraftverk. Och guldskrivaren. Det är stort, Gunnar. |
| 0:01 | radio | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått vindkraftverk. Och guldskrivaren. Det är stort, Gunnar. |
| 0:01 | skratt | du | Radio-Kjelle |
| 0:01 | händelse | dagenBorjar | dag=20 |
| 0:01 | meddelande | du | Dag 20. 2 dagar till jul. Utan kamin får mamma rätt. |
| 0:01 | dagbokkort | du | Kylan · Dag 20. 2 dagar till jul. Utan kamin får mamma rätt. |
| 0:01 | röst | du | Kylan. Dag 20. 2 dagar till jul. Utan kamin får mamma rätt. · STORY |
| 0:03 | paket |  | sms |
| 0:03 | väntar | rolf | Ett litet uppdrag. Inget farligt. Nästan inget farligt. Lådan. /R |
| 0:15 | händelse | morgonkortStangt | dag=20 |
| 0:15 | struken | kedja | d20 |
| 0:15 | väntar | du | Printa och ställ ut en vedkamin. |
| 0:19 | målruta |  | Printa och ställ ut en vedkamin |
| 0:21 | sak | du | Printa och ställ ut en vedkamin. |
| 0:21 | pil |  | Printa och ställ ut en vedkamin |
| 0:21 | röst | du | Printa och ställ ut en vedkamin. · MÅL |
| 0:21 | nick |  | nick:125 |
| 0:23 | klar | du | Printa och ställ ut en vedkamin. |
| 0:23 | struken | info:guld | Göran lämnade en blank skruv på säljlådan. |
| 0:23 | struken | notis:🌇 Klockan är 21. Ali slår igen luckan.  | 🌇 Klockan är 21. Ali slår igen luckan. Dagens jobb är klart – gå in i skjulet och sov i sängen. |
| 0:23 | struken | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått vindkraftverk. Och guldskrivaren. Det är stort, Gunnar. |
| 0:31 | sak | foto | Ett hus (och min tumme) |
| 0:31 | foto | du | Ett hus (och min tumme) |
| 0:34 | klar | foto | Ett hus (och min tumme) |
| 0:37 | tanke | du | Jag ser min andedräkt. Inomhus. |
| 0:37 | väntar | du | Jag ser min andedräkt. Inomhus. |
| 0:40 | sak | du | Jag ser min andedräkt. Inomhus. |
| 0:40 | notis | tanke | 💭 Jag ser min andedräkt. Inomhus. |
| 0:40 | röst | du | Jag ser min andedräkt. Inomhus. · REAKTION |
| 0:43 | klar | du | Jag ser min andedräkt. Inomhus. |
| 0:47 | poolTom | ali | 4 repliker använda |
| 0:48 | skratt | du | Alis dyr-pling |
| 0:48 | händelse | kopt | sak=kamin |
| 0:52 | sak | mamma | Du har flyttat in i ett hus. Med trappa. Jag har köpt en dörrmatta. Det står "Välkommen" på den. Pappa ville att det skulle stå "Gå hem". Jag sa nej. |
| 0:52 | sms | mamma | Du har flyttat in i ett hus. Med trappa. Jag har köpt en dörrmatta. Det står "Välkommen" på den. Pappa ville att det skulle stå "Gå hem". Jag sa nej. |
| 0:52 | sms-bubbla | mamma | Du har flyttat in i ett hus. Med trappa. Jag har köpt en dörrmatta. Det står "Välkommen" på den. Pappa ville att det skulle stå "Gå hem". Jag sa nej. |
| 0:52 | röst | mamma | Du har flyttat in i ett hus. Med trappa. Jag har köpt en dörrmatta. Det står "Välkommen" på den. Pappa ville att det skulle stå "Gå hem". Jag sa nej. · STORY |
| 0:56 | händelse | printStart | sak=kamin |
| 0:59 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 1:02 | ljud | kajsa | Mjau |
| 1:04 | väntar | info:fel | Fullt i händerna. |
| 1:05 | klar | mamma | Du har flyttat in i ett hus. Med trappa. Jag har köpt en dörrmatta. Det står "Välkommen" på den. Pappa ville att det skulle stå "Gå hem". Jag sa nej. |
| 1:05 | sak | info:fel | Fullt i händerna. |
| 1:05 | kvitto-visas | info:fel | Fullt i händerna. |
| 1:05 | toast | fel | Fullt i händerna. |
| 1:07 | klar | info:fel | Fullt i händerna. |
| 1:10 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 1:10 | väntar | notis:Skrivare L: Tornet är tomt – mal mer så  | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 1:11 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 1:11 | struken | notis | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 1:12 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 1:12 | struken | notis | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 1:12 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 1:12 | struken | notis | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 1:13 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 1:13 | struken | notis | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 1:14 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 1:14 | struken | notis | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 1:15 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 1:15 | struken | notis | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 1:16 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 1:16 | struken | notis | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 1:17 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 1:17 | struken | notis | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 1:18 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 1:18 | struken | notis | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 1:19 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 1:19 | sak | du | Ett riktigt hus. Vänta bara tills mamma ser det. |
| 1:19 | notis | tanke | 💭 Ett riktigt hus. Vänta bara tills mamma ser det. |
| 1:19 | röst | du | Ett riktigt hus. Vänta bara tills mamma ser det. · STORY |
| 1:20 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 1:21 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 1:22 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 1:23 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 1:23 | klar | du | Ett riktigt hus. Vänta bara tills mamma ser det. |
| 1:24 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 1:25 | toast | guld | ✅ |
| 1:25 | händelse | printKlar | sak=kamin n=1 |
| 1:31 | nej | du | Ta ut vedkamin |
| 1:31 | toast | fickskylt | Fulla fickor |
| 1:31 | fullaFickor | du | kamin |
| 1:31 | händelse | tagitUrPrint | sak=kamin n=1 |
| 1:32 | sak | notis:Skrivare L: Tornet är tomt – mal mer så  | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 1:32 | notis | fel | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 1:34 | klar | notis:Skrivare L: Tornet är tomt – mal mer så  | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 1:42 | händelse | placerat | sak=kamin |
| 1:42 | händelse | malKlart | id=m20-printa-stall-ut del=Dag 20 – Kylan nasta=m20-stall-in-kamin |
| 1:42 | händelse | malKlart | id=m20-stall-in-kamin del=Dag 20 – Kylan nasta=sov20 |
| 1:42 | paket |  | lapp |
| 1:42 | lapp | 📔 Dagbok | Dag 20 är slut. Jag finns inte på riktigt här än. |
| 1:42 | meddelande | du | Dag 20 är slut. Jag finns inte på riktigt här än. |
| 1:42 | dagbokkort | du | Dag 20 är slut. Jag finns inte på riktigt här än. |
| 1:42 | målruta |  | Klart för idag – sov när du vill |
| 1:42 | MÅL |  | Klart för idag – sov när du vill |
| 1:42 | röst | du | Dag 20 är slut. Jag finns inte på riktigt här än. · STORY |
| 1:48 | händelse | brevLast | id=kvall20 |
| 1:49 | väntar | notis:🌇 Klockan är 21. Ali slår igen luckan.  | 🌇 Klockan är 21. Ali slår igen luckan. Dagens jobb är klart – gå in i skjulet och sov i sängen. |
| 1:50 | sak | du | (nytt mål i rutan) |
| 1:50 | pil |  | Klart för idag – sov när du vill |
| 1:50 | klar | du | (nytt mål i rutan) |

<details><summary>Botens handlingar dag 20</summary>

- 0:00 — dag 20 börjar — (96053 kr)
- 0:15 popup: "FORTSÄTT" (96053 kr)
- 0:32 gå till Rolfs postlåda (31 m) (96053 kr)
- 0:40 panel: "En lapp från Rolf
Lite olaglig" (96053 kr)
- 0:47 gå till Ali (31 m) (96053 kr)
- 0:47 öppnar Alis butik – köpa receptet vedkamin (96053 kr)
- 0:49 köper kamin för 9750 kr (86303 kr)
- 0:55 gå till skrivaren (23 m) (86303 kr)
- 0:56 printar Vedkamin (86303 kr)
- 1:09 gå till kvarnen (21 m) (86303 kr)
- 1:16 plockar 2 skräp på tippen (bär max 16) (86303 kr)
- 1:19 gå till kvarnen (16 m) (86303 kr)
- 1:31 gå till skrivaren (7 m) (86303 kr)
- 1:31 tar ut 1 st ur skrivaren (86303 kr)
- 1:31 fulla fickor – lägger g_skruv i kistan (86303 kr)
- 1:41 gå till platsen för vedkamin (22 m) (86303 kr)
- 1:42 ställer ut vedkamin (86303 kr)
- 1:48 popup: "FORTSÄTT" (86303 kr)
- 1:52 gå till sängen (2 m) (86303 kr)

</details>

## Dag 21

| Tid | Källa | Vem | Text |
|---|---|---|---|
| 1:55 | vara | ali | n2_vas |
| 1:55 | händelse | malKlart | id=sov20 del=Dag 20 – Kylan nasta=m21-bli-folkbokford |
| 1:55 | MÅL |  | Bli folkbokförd – tavlan vid vägen |
| 0:01 | händelse | dagenBorjar | dag=21 |
| 0:01 | meddelande | du | Dag 21. 1 dag till jul. Utan adress finns jag inte, hur fint huset än är. |
| 0:01 | dagbokkort | du | Folkbokförd · Dag 21. 1 dag till jul. Utan adress finns jag inte, hur fint huset än är. |
| 0:01 | röst | du | Folkbokförd. Dag 21. 1 dag till jul. Utan adress finns jag inte, hur fint huset än är. · STORY |
| 0:16 | händelse | morgonkortStangt | dag=21 |
| 0:16 | paket |  | toast |
| 0:16 | väntar | notis:🔥 Varmt och skönt i skjulet trots kylan | 🔥 Varmt och skönt i skjulet trots kylan. |
| 0:16 | struken | kedja | d21 |
| 0:16 | väntar | du | tillbakablick paketet |
| 0:20 | tillbakablick | du | paketet |
| 0:23 | väntar | du | Bli folkbokförd – tavlan vid vägen. |
| 0:23 | målruta |  | Bli folkbokförd – tavlan vid vägen |
| 0:23 | sak | du | Bli folkbokförd – tavlan vid vägen. |
| 0:23 | pil |  | Bli folkbokförd – tavlan vid vägen |
| 0:23 | röst | du | Bli folkbokförd – tavlan vid vägen. · MÅL |
| 0:26 | klar | du | Bli folkbokförd – tavlan vid vägen. |
| 0:28 | väntar | info:guld | 📮 Du är folkbokförd! Soptippsvägen 1 är din adress. |
| 0:28 | paket |  | sms |
| 0:28 | väntar | rolf | Grattis granne. Nu e du på riktigt. Ja tar me grillen på lördag. Kajsa oxå. /R |
| 0:28 | paket |  | sms |
| 0:28 | väntar | bror | Pappa sa "fint jobbat". Två gånger. Han har aldrig sagt det två gånger. Grattis lillebror. Eller vad du nu är. Du vet. |
| 0:28 | sak | info:guld | 📮 Du är folkbokförd! Soptippsvägen 1 är din adress. |
| 0:28 | kvitto-visas | info:guld | 📮 Du är folkbokförd! Soptippsvägen 1 är din adress. |
| 0:28 | toast | guld | 📮 Du är folkbokförd! Soptippsvägen 1 är din adress. |
| 0:28 | händelse | malKlart | id=m21-bli-folkbokford del=Dag 21 – Folkbokförd nasta=sov21 |
| 0:28 | paket |  | lapp |
| 0:28 | väntar | du | Dag 21 är slut. Nu vet Skatteverket att jag bor HÄR. I morgon är det julafton. |
| 0:28 | MÅL |  | Klart för idag – sov när du vill |
| 0:30 | klar | info:guld | 📮 Du är folkbokförd! Soptippsvägen 1 är din adress. |
| 0:30 | sak | du | Dag 21 är slut. Nu vet Skatteverket att jag bor HÄR. I morgon är det julafton. |
| 0:30 | kvitto-visas | du | Dag 21 är slut. Nu vet Skatteverket att jag bor HÄR. I morgon är det julafton. |
| 0:30 | lapp | 📔 Dagbok | Dag 21 är slut. Nu vet Skatteverket att jag bor HÄR. I morgon är det julafton. |
| 0:30 | meddelande | du | Dag 21 är slut. Nu vet Skatteverket att jag bor HÄR. I morgon är det julafton. |
| 0:30 | dagbokkort | du | Dag 21 är slut. Nu vet Skatteverket att jag bor HÄR. I morgon är det julafton. |
| 0:30 | röst | du | Dag 21 är slut. Nu vet Skatteverket att jag bor HÄR. I morgon är det julafton. · STORY |
| 0:38 | händelse | brevLast | id=kvall21 |
| 0:38 | klar | du | Dag 21 är slut. Nu vet Skatteverket att jag bor HÄR. I morgon är det julafton. |
| 0:38 | struken | notis | 🌇 Klockan är 21. Ali slår igen luckan. Dagens jobb är klart – gå in i skjulet och sov i sängen. |
| 0:38 | målruta |  | Klart för idag – sov när du vill |
| 0:39 | sak | du | (nytt mål i rutan) |
| 0:39 | pil |  | Klart för idag – sov när du vill |
| 0:39 | klar | du | (nytt mål i rutan) |
| 0:40 | väntar | notis:📔 Prestation: Posten hittar hit · +3 re | 📔 Prestation: Posten hittar hit · +3 respekt |
| 0:41 | tanke | du | Fingrarna vill inte riktigt. |
| 0:41 | väntar | du | Fingrarna vill inte riktigt. |
| 0:41 | struken | notis:🌇 Klockan är 21. Ali slår igen luckan.  | 🌇 Klockan är 21. Ali slår igen luckan. Dagens jobb är klart – gå in i skjulet och sov i sängen. |
| 0:41 | struken | notis:🔥 Varmt och skönt i skjulet trots kylan | 🔥 Varmt och skönt i skjulet trots kylan. |

<details><summary>Botens handlingar dag 21</summary>

- 0:00 — dag 21 börjar — (86303 kr)
- 0:15 popup: "FORTSÄTT" (86303 kr)
- 0:28 gå till tavlan vid vägen (12 m) (86303 kr)
- 0:28 blir folkbokförd (79103 kr)
- 0:38 popup: "FORTSÄTT" (79103 kr)
- 0:43 gå till sängen (11 m) (79103 kr)

</details>

## Dag 22

| Tid | Källa | Vem | Text |
|---|---|---|---|
| 0:46 | vara | ali | n2_hjalm |
| 0:46 | händelse | malKlart | id=sov21 del=Dag 21 – Folkbokförd nasta=m22-printa-julbordet |
| 0:46 | händelse | malKlart | id=m22-printa-julbordet del=Dag 22 – Jul på Soptippsvägen 1 nasta=m22-tand-skylten |
| 0:46 | MÅL |  | Skylten med mitt namn på dörren |
| 0:01 | händelse | dagenBorjar | dag=22 |
| 0:01 | meddelande | du | Julafton. Utan skylt på dörren kör mamma hem med mig. |
| 0:01 | dagbokkort | du | Jul på Soptippsvägen 1 · Julafton. Utan skylt på dörren kör mamma hem med mig. |
| 0:01 | röst | du | Jul på Soptippsvägen 1. Julafton. Utan skylt på dörren kör mamma hem med mig. · STORY |
| 0:15 | händelse | morgonkortStangt | dag=22 |
| 0:15 | struken | kedja | d22 |
| 0:15 | struken | du | Fingrarna vill inte riktigt. |
| 0:15 | väntar | du | Skylten med mitt namn på dörren. |
| 0:19 | målruta |  | Skylten med mitt namn på dörren |
| 0:21 | sak | du | Skylten med mitt namn på dörren. |
| 0:21 | pil |  | Skylten med mitt namn på dörren |
| 0:21 | röst | du | Skylten med mitt namn på dörren. · MÅL |
| 0:23 | klar | du | Skylten med mitt namn på dörren. |
| 0:25 | morgonkort | 🏆 Du är hemma | 🏆 Du är hemma · Du klarade det på dag 22. Från hobo dweller vid en soptipp till godsägare och folkbokförd. Mamma är imponerad. Pappa log. Spelet fortsätter – bygg vidare så länge du vill. |
| 0:38 | väntar | mamma | Jag kommer kl 15 och hämtar dig. Pappa kör. Var redo. |
| 0:39 | struken | notis:📔 Prestation: Posten hittar hit · +3 re | 📔 Prestation: Posten hittar hit · +3 respekt |
| 0:45 | väntar | info:guld | Skylten sitter på dörren. Simulering, Soptippsvägen 1. |
| 0:45 | sak | info:guld | Skylten sitter på dörren. Simulering, Soptippsvägen 1. |
| 0:45 | kvitto-visas | info:guld | Skylten sitter på dörren. Simulering, Soptippsvägen 1. |
| 0:45 | toast | guld | Skylten sitter på dörren. Simulering, Soptippsvägen 1. |
| 0:45 | händelse | malKlart | id=m22-tand-skylten del=Dag 22 – Jul på Soptippsvägen 1 nasta=m22-oppna-dorren-gasterna |
| 0:45 | väntar | du | Ta emot mamma. |
| 0:45 | MÅL |  | Ta emot mamma |
| 0:46 | väntar | du | tillbakablick vadet |
| 0:46 | väntar | info:guld | Göran lämnade en blank skruv på säljlådan. |
| 0:47 | klar | info:guld | Skylten sitter på dörren. Simulering, Soptippsvägen 1. |
| 0:47 | sak | info:guld | Göran lämnade en blank skruv på säljlådan. |
| 0:47 | kvitto-visas | info:guld | Göran lämnade en blank skruv på säljlådan. |
| 0:47 | toast | guld | Göran lämnade en blank skruv på säljlådan. |
| 0:49 | målruta |  | Ta emot mamma |
| 0:49 | kvittens-bock |  | ✓ Skylten med mitt namn på dörren |
| 0:49 | klar | info:guld | Göran lämnade en blank skruv på säljlådan. |
| 0:51 | sak | du | Ta emot mamma. |
| 0:51 | pil |  | Ta emot mamma |
| 0:51 | röst | du | Ta emot mamma. · MÅL |
| 0:53 | klar | du | Ta emot mamma. |
| 0:56 | tillbakablick | du | vadet |
| 0:56 | väntar | mamma | Det är du alltid. |
| 0:59 | väntar | info:bra | 🚗 En bil svänger in vid grinden. |
| 1:00 | sak | info:bra | 🚗 En bil svänger in vid grinden. |
| 1:00 | kvitto-visas | info:bra | 🚗 En bil svänger in vid grinden. |
| 1:00 | toast | bra | 🚗 En bil svänger in vid grinden. |
| 1:02 | klar | info:bra | 🚗 En bil svänger in vid grinden. |
| 1:11 | sak | bror | Pappa sa "fint jobbat". Två gånger. Han har aldrig sagt det två gånger. Grattis lillebror. Eller vad du nu är. Du vet. |
| 1:11 | sms | bror | Pappa sa "fint jobbat". Två gånger. Han har aldrig sagt det två gånger. Grattis lillebror. Eller vad du nu är. Du vet. |
| 1:11 | sms-bubbla | bror | Pappa sa "fint jobbat". Två gånger. Han har aldrig sagt det två gånger. Grattis lillebror. Eller vad du nu är. Du vet. |
| 1:11 | röst | bror | Pappa sa "fint jobbat". Två gånger. Han har aldrig sagt det två gånger. Grattis lillebror. Eller vad du nu är. Du vet. · STORY |
| 1:18 | skratt | du | falsk tuta |
| 1:21 | klar | bror | Pappa sa "fint jobbat". Två gånger. Han har aldrig sagt det två gånger. Grattis lillebror. Eller vad du nu är. Du vet. |
| 1:29 | sak | mamma | Det är du alltid. |
| 1:29 | röst | mamma | Det är du alltid. · STORY |
| 1:31 | klar | mamma | Det är du alltid. |
| 1:53 | tanke | du | Det drar. Från överallt. |
| 1:53 | väntar | du | Det drar. Från överallt. |
| 1:53 | sak | du | Det drar. Från överallt. |
| 1:53 | notis | tanke | 💭 Det drar. Från överallt. |
| 1:53 | röst | du | Det drar. Från överallt. · REAKTION |
| 1:55 | klar | du | Det drar. Från överallt. |
| 2:05 | sak | mamma | Jag kommer kl 15 och hämtar dig. Pappa kör. Var redo. |
| 2:05 | sms | mamma | Jag kommer kl 15 och hämtar dig. Pappa kör. Var redo. |
| 2:05 | sms-bubbla | mamma | Jag kommer kl 15 och hämtar dig. Pappa kör. Var redo. |
| 2:05 | röst | mamma | Jag kommer kl 15 och hämtar dig. Pappa kör. Var redo. · STORY |
| 2:09 | klar | mamma | Jag kommer kl 15 och hämtar dig. Pappa kör. Var redo. |
| 2:14 | väntar | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått vedkamin. Vi tar en låt på det. Den här är till dig, Gunnar. |
| 2:14 | radio | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått vedkamin. Vi tar en låt på det. Den här är till dig, Gunnar. |
| 2:14 | skratt | du | Radio-Kjelle |
| 2:17 | sak | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått vedkamin. Vi tar en låt på det. Den här är till dig, Gunnar. |
| 2:17 | notis |  | 📻 Radio Tippen: Radio Tippen, Kjelle här. Skjulet vid tippen har fått vedkamin. Vi tar en låt på det. Den här är till dig, Gunnar. |
| 2:17 | röst | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått vedkamin. Vi tar en låt på det. Den här är till dig, Gunnar. · REAKTION |
| 2:27 | klar | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått vedkamin. Vi tar en låt på det. Den här är till dig, Gunnar. |
| 3:06 | röst | rolf | Goddag … ja. Ja har kavaj. Fråga int. · STORY |
| 3:09 | röst | ali | Habibi. Roboten säger god jul. Jag lärde den. Säg inget till min fru – hon är här. · STORY |
| 3:15 | röst | berattare | Lasse har en ny termos. Den håller värmen i nitton timmar. Han har testat. Gunnar säger: "Vanilj." · STORY |
| 3:22 | röst | berattare | Bengt-Åke ställer en gran från egen skog i hörnet. Han går inte. · STORY |
| 3:27 | röst | berattare | HMPF. God jul. · STORY |
| 3:30 | röst | bror | Den är inte från mig. Den låg utanför. Typ. · STORY |
| 3:35 | röst | mamma | Jag skulle hämta dig. · STORY |
| 3:38 | röst | mamma | Det är så STÄDAT! · STORY |
| 3:42 | röst | mamma | Vi stannar. Pappa, hämta granen. · STORY |
| 3:46 | röst | pappa | Jaha. · STORY |
| 3:50 | röst | pappa | Taket håller i alla fall. · STORY |
| 3:54 | röst | pappa | Ja ja. Det här kunde varit värre. · STORY |
| 3:58 | röst | berattare | Skinkan från augusti. Granris i en vas. · STORY |
| 4:02 | röst | berattare | Göran sitter på fönsterblecket och tittar på skinkan. · STORY |
| 4:07 | röst | berattare | Rolf på trummor med två kastruller. Lasse och Gunnar på printade elgitarrer. Det är högt. Det är bra. · STORY |
| 4:14 | röst | berattare | Helen dansar till kassetten. Som en tvättmaskin. · STORY |
| 4:18 | röst | rolf | Precis som 1987. · STORY |
| 4:22 | röst | berattare | Mamma har med sig en prinsesstårta i stället för skinkan från augusti. · STORY |
| 4:28 | röst | rolf | …Dä ä fredag nånstans. · STORY |
| 4:31 | röst | pappa | Ja ska fatta mej kort. · STORY |
| 4:35 | röst | pappa | Scania byggde sin första lastbil nittonhundraelva. · STORY |
| 4:40 | röst | pappa | Djurgården har vunnit SM tolv gånger. · STORY |
| 4:45 | röst | pappa | Skinkan har legat i frysen sen augusti. · STORY |
| 4:50 | röst | pappa | Ja … är stolt över dej. Aha. Vad lugnt då. · STORY |
| 4:55 | röst | berattare | Mamma gråter. · STORY |
| 4:58 | paket |  | replik → lapp → ge |
| 4:58 | väntar | mamma | Den här är till dig. Öppna den nu. |
| 4:58 | väntar | mamma | Du sa att du skulle fira jul ensam. Jag är glad att du ljög. Kram, Mamma |
| 4:58 | väntar |  | (läget ändras) |
| 4:58 | händelse | malKlart | id=m22-oppna-dorren-gasterna del=Dag 22 – Jul på Soptippsvägen 1 nasta=steg133 |
| 4:58 | tanke | du | Jag fryser om tårna. |
| 4:58 | väntar | du | Jag fryser om tårna. |
| 4:58 | struken | du | Jag fryser om tårna. |
| 4:58 | väntar | du | . |
| 4:58 | MÅL |  | (inga mål) |
| 4:58 | sak | du | . |
| 4:58 | röst | du | . · MÅL |
| 5:00 | klar | du | . |
| 5:00 | väntar | notis:📔 Prestation: Jul på tippen · +3 respek | 📔 Prestation: Jul på tippen · +3 respekt |
| 5:02 | kvittens-bock |  | ✓ Ta emot mamma |
| 5:03 | väntar | info:guld | 🌲 Marken runt tippen är din! Gärdesgården har flyttats – där får du ställa saker nu. |
| 5:03 | paket |  | sms |
| 5:03 | väntar | rolf | Marken runt tippen e din. Bengt-Åke sa att han e glad att bli av me den. Han kalla den "stenåkern". Ja kallar den "framtiden". /R |
| 5:03 | sak | info:guld | 🌲 Marken runt tippen är din! Gärdesgården har flyttats – där får du ställa saker nu. |
| 5:03 | kvitto-visas | info:guld | 🌲 Marken runt tippen är din! Gärdesgården har flyttats – där får du ställa saker nu. |
| 5:03 | toast | guld | 🌲 Marken runt tippen är din! Gärdesgården har flyttats – där får du ställa saker nu. |
| 5:05 | klar | info:guld | 🌲 Marken runt tippen är din! Gärdesgården har flyttats – där får du ställa saker nu. |
| 5:07 | väntar | info:guld | 🗑️ Tippen är din. Rolf kör åt dig nu. |
| 5:07 | paket |  | sms |
| 5:07 | väntar | rolf | Du äger tippen nu. Ja kör fortfarande sopbilen. Men nu e du chefen. Rudolf ä sur. Hä hä. Kajsa bryr sej int. /R |
| 5:07 | sak | info:guld | 🗑️ Tippen är din. Rolf kör åt dig nu. |
| 5:07 | kvitto-visas | info:guld | 🗑️ Tippen är din. Rolf kör åt dig nu. |
| 5:07 | toast | guld | 🗑️ Tippen är din. Rolf kör åt dig nu. |
| 5:09 | klar | info:guld | 🗑️ Tippen är din. Rolf kör åt dig nu. |
| 5:11 | väntar | info:guld | 🌲 Backen i norr är din! Gärdesgården har flyttats – där får du ställa saker nu. |
| 5:11 | sak | info:guld | 🌲 Backen i norr är din! Gärdesgården har flyttats – där får du ställa saker nu. |
| 5:11 | kvitto-visas | info:guld | 🌲 Backen i norr är din! Gärdesgården har flyttats – där får du ställa saker nu. |
| 5:11 | toast | guld | 🌲 Backen i norr är din! Gärdesgården har flyttats – där får du ställa saker nu. |
| 5:12 | väntar | värld:HMPF. Backen. Den är brant. De | HMPF. Backen. Den är brant. Den passar er. |
| 5:13 | klar | info:guld | 🌲 Backen i norr är din! Gärdesgården har flyttats – där får du ställa saker nu. |
| 5:14 | väntar | foto | Alla |
| 5:14 | paket |  | tanke |
| 5:14 | tanke | du | Alla är här. Hos mig. |
| 5:14 | väntar | du | Alla är här. Hos mig. |
| 5:16 | paket |  | sms |
| 5:16 | väntar | chefen | Rudolf. Jag går i pension. Espressomaskinen står på din bänk. Inga böter. |
| 5:16 | väntar | kjelle | Kjelle här, direkt från julfesten! Gunnar, du är här. Säg något till lyssnarna! |
| 5:16 | radio | kjelle | Kjelle här, direkt från julfesten! Gunnar, du är här. Säg något till lyssnarna! |
| 5:16 | skratt | du | Radio-Kjelle |
| 5:20 | händelse | printStart | sak=nyckelring |
| 5:21 | toast | guld | ✅ |
| 5:21 | händelse | printKlar | sak=nyckelring n=31 |
| 5:21 | nej | du | Ta ut nyckelring |
| 5:21 | toast | fickskylt | Fulla fickor |
| 5:21 | fullaFickor | du | nyckelring |
| 5:22 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 5:22 | väntar | gunnar | Vanilj. |
| 5:22 | radio | gunnar | Vanilj. |
| 5:22 | skratt | du | Gunnar svarar |
| 5:22 | sak | gunnar | Vanilj. |
| 5:22 | notis |  | 📻 Gunnar: Vanilj. |
| 5:22 | röst | gunnar | Vanilj. · STORY |
| 5:24 | händelse | printStart | sak=nyckelring |
| 5:24 | toast | guld | ✅ |
| 5:24 | händelse | printKlar | sak=nyckelring n=32 |
| 5:25 | klar | gunnar | Vanilj. |
| 5:25 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 5:27 | skratt | du | falsk tuta |
| 5:38 | sak | mamma | Den här är till dig. Öppna den nu. |
| 5:38 | notis |  | Mamma: ”Den här är till dig. Öppna den nu.” |
| 5:38 | röst | mamma | Den här är till dig. Öppna den nu. · STORY |
| 5:39 | webb | du | packade 2 nyckelring |
| 5:41 | klar | mamma | Den här är till dig. Öppna den nu. |
| 5:49 | struken | värld:HMPF. Backen. Den är brant. De | HMPF. Backen. Den är brant. Den passar er. |
| 5:50 | sak | mamma | Du sa att du skulle fira jul ensam. Jag är glad att du ljög. Kram, Mamma |
| 5:50 | lapp | Brev från Mamma | Du sa att du skulle fira jul ensam. Jag är glad att du ljög. Kram, Mamma |
| 5:50 | röst | mamma | Du sa att du skulle fira jul ensam. Jag är glad att du ljög. Kram, Mamma · STORY |
| 5:54 | väntar | info:bra | 📦 Paketet till Agneta på biblioteket ligger i postlådan – Rolf tar det till posten |
| 5:56 | klar | mamma | Du sa att du skulle fira jul ensam. Jag är glad att du ljög. Kram, Mamma |
| 5:56 | händelse | brevLast | id=mammajul |
| 5:56 | sak | info:bra | 📦 Paketet till Agneta på biblioteket ligger i postlådan – Rolf tar det till posten |
| 5:56 | kvitto-visas | info:bra | 📦 Paketet till Agneta på biblioteket ligger i postlådan – Rolf tar det till posten |
| 5:56 | toast | bra | 📦 Paketet till Agneta på biblioteket ligger i postlådan – Rolf tar det till posten |
| 5:58 | klar | info:bra | 📦 Paketet till Agneta på biblioteket ligger i postlådan – Rolf tar det till posten |
| 5:59 | händelse | printStart | sak=n3_stol |
| 6:06 | toast | guld | ✅ |
| 6:06 | händelse | printKlar | sak=n3_stol n=23 |
| 6:07 | händelse | tagitUrPrint | sak=n3_stol n=1 |
| 6:10 | sak | notis:📔 Prestation: Jul på tippen · +3 respek | 📔 Prestation: Jul på tippen · +3 respekt |
| 6:10 | notis |  | 📔 Prestation: Jul på tippen · +3 respekt |
| 6:12 | klar | notis:📔 Prestation: Jul på tippen · +3 respek | 📔 Prestation: Jul på tippen · +3 respekt |
| 6:15 | poolTom | ali | 4 repliker använda |
| 6:16 | aliSalt | ali | 16000 |
| 6:16 | aliSalt | ali | 6 |
| 6:17 | aliSalt | ali | 6 |
| 6:18 | väntar | ali | Kom in, kom in. Eller inte. Jag står här ändå. |
| 6:21 | väntar | info:guld | 🏠 Rolf har ett riktigt hus! Garaget står vid tippen. |
| 6:21 | paket |  | sms |
| 6:21 | väntar | rolf | Ja vet int va ja ska säja. Ja har bott i husvagnen sen 2009. Nu har ja en VERANDA. Kajsa har redan pinkat i hörnet. De betyder att hon gillar de. Tack. /R |
| 6:21 | sak | info:guld | 🏠 Rolf har ett riktigt hus! Garaget står vid tippen. |
| 6:21 | kvitto-visas | info:guld | 🏠 Rolf har ett riktigt hus! Garaget står vid tippen. |
| 6:21 | toast | guld | 🏠 Rolf har ett riktigt hus! Garaget står vid tippen. |
| 6:22 | väntar | info:guld | Skylten vid vägen är uppgraderad. |
| 6:22 | paket |  | sms |
| 6:22 | väntar | rolf | Kommunen satt upp en RIKTI skylt. Ja grät int. Kajsa grät. MVH ROLF |
| 6:23 | klar | info:guld | 🏠 Rolf har ett riktigt hus! Garaget står vid tippen. |
| 6:23 | sak | info:guld | Skylten vid vägen är uppgraderad. |
| 6:23 | kvitto-visas | info:guld | Skylten vid vägen är uppgraderad. |
| 6:23 | toast | guld | Skylten vid vägen är uppgraderad. |
| 6:25 | klar | info:guld | Skylten vid vägen är uppgraderad. |
| 6:32 | paket |  | sms |
| 6:32 | väntar | mamma | Pappa och Rolf bygger verandan. De har pratat Scania i tre timmar. Ingen av dem har sagt något annat. Jag tror de är lyckliga. |
| 6:34 | sak |  | (läget ändras) |
| 6:34 | paket |  | sms |
| 6:34 | väntar | pappa | 👍 ❤️ |
| 6:34 | händelse | printStart | sak=n3_stol |
| 6:34 | klar |  | (läget ändras) |
| 6:38 | sak | foto | Alla |
| 6:38 | foto | du | Alla |
| 6:41 | toast | guld | ✅ |
| 6:41 | händelse | printKlar | sak=n3_stol n=24 |
| 6:41 | klar | foto | Alla |
| 6:42 | händelse | tagitUrPrint | sak=n3_stol n=1 |
| 6:55 | sak | du | Alla är här. Hos mig. |
| 6:55 | notis | tanke | 💭 Alla är här. Hos mig. |
| 6:55 | röst | du | Alla är här. Hos mig. · STORY |
| 6:57 | klar | du | Alla är här. Hos mig. |
| 6:58 | aliSalt | ali | 15200 |
| 6:58 | tanke | du | Strumpor. Jag borde ha lyssnat på mamma. |
| 6:58 | väntar | du | Strumpor. Jag borde ha lyssnat på mamma. |
| 6:59 | sak | du | Strumpor. Jag borde ha lyssnat på mamma. |
| 6:59 | notis | tanke | 💭 Strumpor. Jag borde ha lyssnat på mamma. |
| 6:59 | röst | du | Strumpor. Jag borde ha lyssnat på mamma. · REAKTION |
| 7:03 | klar | du | Strumpor. Jag borde ha lyssnat på mamma. |
| 7:11 | sak | chefen | Rudolf. Jag går i pension. Espressomaskinen står på din bänk. Inga böter. |
| 7:11 | sms | chefen | Rudolf. Jag går i pension. Espressomaskinen står på din bänk. Inga böter. |
| 7:11 | sms-bubbla | chefen | Rudolf. Jag går i pension. Espressomaskinen står på din bänk. Inga böter. |
| 7:11 | röst | chefen | Rudolf. Jag går i pension. Espressomaskinen står på din bänk. Inga böter. · STORY |
| 7:13 | händelse | printStart | sak=n3_stol |
| 7:17 | klar | chefen | Rudolf. Jag går i pension. Espressomaskinen står på din bänk. Inga böter. |
| 7:20 | toast | guld | ✅ |
| 7:20 | händelse | printKlar | sak=n3_stol n=25 |
| 7:21 | händelse | tagitUrPrint | sak=n3_stol n=1 |
| 7:22 | väntar | värld:TUUT! Grann skylt! | TUUT! Grann skylt! |
| 7:25 | sak | kjelle | Kjelle här, direkt från julfesten! Gunnar, du är här. Säg något till lyssnarna! |
| 7:25 | notis |  | 📻 Radio Tippen: Kjelle här, direkt från julfesten! Gunnar, du är här. Säg något till lyssnarna! |
| 7:25 | röst | kjelle | Kjelle här, direkt från julfesten! Gunnar, du är här. Säg något till lyssnarna! · REAKTION |
| 7:30 | aliSalt | ali | 14440 |
| 7:32 | klar | kjelle | Kjelle här, direkt från julfesten! Gunnar, du är här. Säg något till lyssnarna! |
| 7:40 | sak | värld:TUUT! Grann skylt! | TUUT! Grann skylt! |
| 7:40 | bubbla |  | TUUT! Grann skylt! |
| 7:43 | händelse | printStart | sak=n3_stol |
| 7:43 | klar | värld:TUUT! Grann skylt! | TUUT! Grann skylt! |
| 7:49 | toast | guld | ✅ |
| 7:49 | händelse | printKlar | sak=n3_stol n=26 |
| 7:50 | händelse | tagitUrPrint | sak=n3_stol n=1 |
| 7:56 | sak | mamma | Pappa och Rolf bygger verandan. De har pratat Scania i tre timmar. Ingen av dem har sagt något annat. Jag tror de är lyckliga. |
| 7:56 | sms | mamma | Pappa och Rolf bygger verandan. De har pratat Scania i tre timmar. Ingen av dem har sagt något annat. Jag tror de är lyckliga. |
| 7:56 | sms-bubbla | mamma | Pappa och Rolf bygger verandan. De har pratat Scania i tre timmar. Ingen av dem har sagt något annat. Jag tror de är lyckliga. |
| 7:56 | röst | mamma | Pappa och Rolf bygger verandan. De har pratat Scania i tre timmar. Ingen av dem har sagt något annat. Jag tror de är lyckliga. · STORY |
| 7:59 | aliSalt | ali | 13718 |
| 8:07 | klar | mamma | Pappa och Rolf bygger verandan. De har pratat Scania i tre timmar. Ingen av dem har sagt något annat. Jag tror de är lyckliga. |
| 8:17 | händelse | printStart | sak=n3_stol |
| 8:24 | toast | guld | ✅ |
| 8:24 | händelse | printKlar | sak=n3_stol n=27 |
| 8:25 | händelse | tagitUrPrint | sak=n3_stol n=1 |
| 8:34 | aliSalt | ali | 13032 |
| 8:41 | sak | pappa | 👍 ❤️ |
| 8:41 | sms | pappa | 👍 ❤️ |
| 8:41 | sms-bubbla | pappa | 👍 ❤️ |
| 8:41 | röst | pappa | 👍 ❤️ · STORY |
| 8:44 | klar | pappa | 👍 ❤️ |
| 8:45 | händelse | printStart | sak=n3_stol |
| 8:51 | toast | guld | ✅ |
| 8:51 | händelse | printKlar | sak=n3_stol n=28 |
| 8:53 | händelse | tagitUrPrint | sak=n3_stol n=1 |
| 8:55 | skratt | du | falsk tuta |
| 8:58 | poolTom | du | 5 repliker använda |
| 9:02 | aliSalt | ali | 12380 |
| 9:10 | skratt | du | däcket rullar iväg |
| 10:58 | poolTom | du | 5 repliker använda |
| 11:11 | skratt | du | falsk tuta |
| 12:18 | struken | ali | Kom in, kom in. Eller inte. Jag står här ändå. |
| 12:58 | poolTom | du | 5 repliker använda |
| 12:58 | väntar | notis:🌇 Klockan är 21. Ali slår igen luckan.  | 🌇 Klockan är 21. Ali slår igen luckan. Dagens jobb är klart – gå in i skjulet och sov i sängen. |
| 12:58 | sak | notis:🌇 Klockan är 21. Ali slår igen luckan.  | 🌇 Klockan är 21. Ali slår igen luckan. Dagens jobb är klart – gå in i skjulet och sov i sängen. |
| 12:58 | notis | guld | 🌇 Klockan är 21. Ali slår igen luckan. Dagens jobb är klart – gå in i skjulet och sov i sängen. |
| 13:01 | klar | notis:🌇 Klockan är 21. Ali slår igen luckan.  | 🌇 Klockan är 21. Ali slår igen luckan. Dagens jobb är klart – gå in i skjulet och sov i sängen. |
| 13:17 | händelse | printStart | sak=n2_hjalm |
| 13:22 | toast | guld | ✅ |
| 13:22 | händelse | printKlar | sak=n2_hjalm n=16 |
| 13:23 | händelse | tagitUrPrint | sak=n2_hjalm n=1 |
| 13:31 | aliSalt | ali | 1995 |
| 13:40 | webbBetalt | du | 38 |

<details><summary>Botens handlingar dag 22</summary>

- 0:00 — dag 22 börjar — (79103 kr)
- 0:15 popup: "FORTSÄTT" (79103 kr)
- 0:34 kort: "Fortsätt bygga" (79103 kr)
- 0:36 gå till dörren (namnskylten) (9 m) (79103 kr)
- 0:36 dörren (namnskylten) går inte att använda nu (79103 kr)
- 0:45 gå till dörren (namnskylten) (26 m) (79103 kr)
- 3:05 gå till mamma vid grinden (35 m) (79103 kr)
- 5:03 gå till tavlan vid vägen (3 m) (79103 kr)
- 5:03 efterspelet: köper marken runt tippen (18500 kr) (60603 kr)
- 5:07 efterspelet: köper rolfs soptipp (37000 kr) (23603 kr)
- 5:11 efterspelet: köper backen i norr (11000 kr) (12603 kr)
- 5:15 efterspelet: dag 22, 17 s (12603 kr)
- 5:18 gå till skrivaren (14 m) (12603 kr)
- 5:20 printar Nyckelring (12603 kr)
- 5:22 tar ut 1 st ur skrivaren (12603 kr)
- 5:22 fulla fickor – lägger g_skruv i kistan (12603 kr)
- 5:24 printar Nyckelring (12603 kr)
- 5:26 tar ut 1 st ur skrivaren (12603 kr)
- 5:29 gå till datorn (17 m) (12603 kr)
- 5:38 panel: "Webbshopen · Soptippsvägen 1
B" (12603 kr)
- 5:47 panel: "Webbshopen · Soptippsvägen 1
B" (12603 kr)
- 5:54 gå till Rolfs postlåda (paket) (29 m) (12603 kr)
- 5:55 webbshop: 1 paket i postlådan (12603 kr)
- 5:55 tjänar pengar till efterspelet: 12603/13103 kr → printar kolfiberstol (16000 kr) (12603 kr)
- 5:58 gå till skrivaren (15 m) (12603 kr)
- 5:59 printar Kolfiberstol (12603 kr)
- 6:08 tar ut 1 st ur skrivaren (12603 kr)
- 6:15 gå till Ali (34 m) (12603 kr)
- 6:15 öppnar Alis butik – sälja (12603 kr)
- 6:17 säljer hos Ali: +16012 kr (28615 kr)
- 6:21 gå till tavlan vid vägen (6 m) (28615 kr)
- 6:21 efterspelet: köper garage och hus åt rolf (25000 kr) (3615 kr)
- 6:27 efterspelet: dag 22, 89 s (3615 kr)
- 6:27 tjänar pengar till efterspelet: 3615/4115 kr → printar kolfiberstol (15200 kr) (3615 kr)
- 6:32 gå till skrivaren (27 m) (3615 kr)
- 6:34 printar Kolfiberstol (3615 kr)
- 6:42 tar ut 1 st ur skrivaren (3615 kr)
- 6:55 panel: "Slut på berättelsen
Efterspele" (3615 kr)
- 6:56 gå till Ali (33 m) (3615 kr)
- 6:56 öppnar Alis butik – sälja (3615 kr)
- 6:58 säljer hos Ali: +15200 kr (18815 kr)
- 7:05 efterspelet: dag 22, 127 s (18815 kr)
- 7:05 tjänar pengar till efterspelet: 18815/19315 kr → printar kolfiberstol (14440 kr) (18815 kr)
- 7:12 gå till skrivaren (33 m) (18815 kr)
- 7:13 printar Kolfiberstol (18815 kr)
- 7:22 tar ut 1 st ur skrivaren (18815 kr)
- 7:28 gå till Ali (33 m) (18815 kr)
- 7:28 öppnar Alis butik – sälja (18815 kr)
- 7:30 säljer hos Ali: +14440 kr (33255 kr)
- 7:34 efterspelet: dag 22, 156 s (33255 kr)
- 7:34 tjänar pengar till efterspelet: 33255/33755 kr → printar kolfiberstol (13718 kr) (33255 kr)
- 7:41 gå till skrivaren (33 m) (33255 kr)
- 7:43 printar Kolfiberstol (33255 kr)
- 7:51 tar ut 1 st ur skrivaren (33255 kr)
- 7:58 gå till Ali (33 m) (33255 kr)
- 7:58 öppnar Alis butik – sälja (33255 kr)
- 8:00 säljer hos Ali: +13718 kr (46973 kr)
- 8:09 efterspelet: dag 22, 191 s (46973 kr)
- 8:09 tjänar pengar till efterspelet: 46973/47473 kr → printar kolfiberstol (13032 kr) (46973 kr)
- 8:16 gå till skrivaren (33 m) (46973 kr)
- 8:17 printar Kolfiberstol (46973 kr)
- 8:26 tar ut 1 st ur skrivaren (46973 kr)
- 8:32 gå till Ali (33 m) (46973 kr)
- 8:32 öppnar Alis butik – sälja (46973 kr)
- 8:34 säljer hos Ali: +13032 kr (60005 kr)
- 8:36 efterspelet: dag 22, 219 s (60005 kr)
- 8:36 tjänar pengar till efterspelet: 60005/60505 kr → printar kolfiberstol (12380 kr) (60005 kr)
- 8:43 gå till skrivaren (33 m) (60005 kr)
- 8:45 printar Kolfiberstol (60005 kr)
- 8:53 tar ut 1 st ur skrivaren (60005 kr)
- 9:00 gå till Ali (33 m) (60005 kr)
- 9:00 öppnar Alis butik – sälja (60005 kr)
- 9:02 säljer hos Ali: +12380 kr (72385 kr)
- 9:04 efterspelet: dag 22, 246 s (72385 kr)
- 9:04 tjänar pengar till efterspelet: 72385/72885 kr → printar kolfiberstol (11761 kr) (72385 kr)
- 9:04 väntar på kolfiber från bandet (72385 kr)
- 9:12 väntar på kolfiber från bandet (72385 kr)
- 9:20 väntar på kolfiber från bandet (72385 kr)
- 9:28 väntar på kolfiber från bandet (72385 kr)
- 9:36 väntar på kolfiber från bandet (72385 kr)
- 9:44 väntar på kolfiber från bandet (72385 kr)
- 9:53 väntar på kolfiber från bandet (72385 kr)
- 10:01 väntar på kolfiber från bandet (72385 kr)
- 10:09 väntar på kolfiber från bandet (72385 kr)
- 10:17 väntar på kolfiber från bandet (72385 kr)
- 10:25 väntar på kolfiber från bandet (72385 kr)
- 10:33 väntar på kolfiber från bandet (72385 kr)
- 10:41 väntar på kolfiber från bandet (72385 kr)
- 10:49 väntar på kolfiber från bandet (72385 kr)
- 10:57 väntar på kolfiber från bandet (72385 kr)
- 11:05 väntar på kolfiber från bandet (72385 kr)
- 11:14 väntar på kolfiber från bandet (72385 kr)
- 11:22 väntar på kolfiber från bandet (72385 kr)
- 11:30 väntar på kolfiber från bandet (72385 kr)
- 11:38 väntar på kolfiber från bandet (72385 kr)
- 11:46 väntar på kolfiber från bandet (72385 kr)
- 11:54 väntar på kolfiber från bandet (72385 kr)
- 12:02 väntar på kolfiber från bandet (72385 kr)
- 12:10 väntar på kolfiber från bandet (72385 kr)
- 12:18 väntar på kolfiber från bandet (72385 kr)
- 12:26 väntar på kolfiber från bandet (72385 kr)
- 12:35 väntar på kolfiber från bandet (72385 kr)
- 12:43 väntar på kolfiber från bandet (72385 kr)
- 12:51 väntar på kolfiber från bandet (72385 kr)
- 12:59 väntar på kolfiber från bandet (72385 kr)
- 13:07 väntar på kolfiber från bandet (72385 kr)
- 13:07 kolfiberstol gick inte att printa – tar nästa (72385 kr)
- 13:07 öppnar Alis butik – sälja (72385 kr)
- 13:10 tjänar pengar till efterspelet: 72385/72885 kr → printar cykelhjälm i petg (1995 kr) (72385 kr)
- 13:16 gå till skrivaren (29 m) (72385 kr)
- 13:17 printar Cykelhjälm i PETG (72385 kr)
- 13:23 tar ut 1 st ur skrivaren (72385 kr)
- 13:29 gå till Ali (29 m) (72385 kr)
- 13:29 öppnar Alis butik – sälja (72385 kr)
- 13:31 säljer hos Ali: +1995 kr (74380 kr)
- 13:37 gå till sängen (20 m) (74380 kr)

</details>

## Dag 23

| Tid | Källa | Vem | Text |
|---|---|---|---|
| 13:40 | vara | ali | n2_vas |

<details><summary>Botens handlingar dag 23</summary>

- 0:00 — dag 23 börjar — (74418 kr)

</details>
