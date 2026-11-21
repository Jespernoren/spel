# Simulering kapitel 1 – körning 1

*Gjord 2026-11-21 09:17 med `verktyg/sim-kapitel1.mjs` + `verktyg/sim-bot.js` (punkt AX). Boten går 4,5 m/s, läser 15 tecken/s, trampar, vevar, plockar, printar, köper och säljer via spelets egna funktioner. Tiderna är speltid.*

## Sammanfattning

| Dag | Minuter | Väntan | Prints (totalt) | Kr vid sömn | Bär | Trivsel |
|---|---|---|---|---|---|---|
| 18 | 2.5 | 7 % | 196 | 48987 | 16 | 349 |
| 19 | 11.6 | 9 % | 203 | 95058 | 16 | 516 |
| 20 | 1.7 | 13 % | 204 | 86051 | 16 | 541 |
| 21 | 0.4 | 0 % | 204 | 78851 | 16 | 541 |
| 22 | 14.8 | 0 % | 216 | 74128 | 16 | 541 |
| 23 | 0.0 | 0 % | 216 | 76636 | 16 | 541 |

## Flaskhalskartan (EE)

| Dag | bara | mala | trampa | strom | skrivare | inkomst | Upplåst |
|---|---|---|---|---|---|---|---|
| 18 | 1 | 1 | 0 | 0 | 108 | 0 |  |
| 19 | 3 | 5 | 0 | 0 | 521 | 0 | vindkraft (strom, 4:05, reserv), guldskrivare (skrivare, 9:59) |
| 20 | 1 | 5 | 0 | 0 | 48 | 0 |  |
| 21 | 0 | 0 | 0 | 0 | 20 | 0 |  |
| 22 | 1 | 455 | 0 | 0 | 679 | 0 |  |
| 23 | 0 | 0 | 0 | 0 | 0 | 0 |  |

TIDIG: 0 · FAST: 0 · upplåst av reserven (målet väntade 3 min): 1

**SKRATT:** 34 roliga ögonblick på 31 min (11.0 per 10 min, mål minst 5)

**Köp:**

- dag 18 0:31 – diamantkniv (12000 kr)
- dag 19 7:57 – vindkraft (6050 kr)
- dag 19 10:16 – guldskrivare (4200 kr)
- dag 20 0:41 – kamin (9750 kr)

## Storykedjan (kvittens → varför → nytt mål)

| Dag | Tid | Id | Kvittens | Varför | Nytt mål | Tid till målet |
|---|---|---|---|---|---|---|


## Hur länge nya mål väntade (från att förra målet blev klart till att det nya syntes i målrutan)

Snitt 5.9 s · max 14.8 s · över 4 s: 6 · över 8 s: 5 av 16

## Flaggor (15)

- **LUGN** dag 19 0:08: 0.0 s efter BÖRJA DAGEN: [notis] "Ali vill ha idag: Designvas i röd PETG – +50 % hela dagen (1"
- **SEN** dag 18 1:28: 14.5 s efter händelsen: ali: "Ali här. Jag såg Diamantkvarn på avstånd. Ett streck blev lite snett. "
- **SEN** dag 19 9:27: 13.3 s efter händelsen: värld:Mjau.: "Mjau."
- **SEN** dag 22 6:24: 51.5 s efter händelsen: kjelle: "Kjelle här, direkt från julfesten! Gunnar, du är här. Säg något till l"
- **SEN** dag 22 7:05: 58.5 s efter händelsen: notis:📔 Prestation: Jul på tippen · +3 respek: "📔 Prestation: Jul på tippen · +3 respekt"
- **PAUS** dag 18 0:03: 0.0 s paus före "Göran lämnade en blank skruv på säljlådan."
- **PAUS** dag 18 1:47: 0.0 s paus före "✨ Guld! (1.9 s)"
- **PAUS** dag 19 1:23: 0.0 s paus före "📦 Paketet till Någon som bara skrev "hej" ligger "
- **PAUS** dag 21 0:17: 0.0 s paus före "📮 Du är folkbokförd! Soptippsvägen 1 är din adres"
- **PAUS** dag 22 7:14: 0.0 s paus före "📦 Paketet till Lasse på bussdepån ligger i postlå"
- **UPPREPNING** dag 20 0:17: info:guld: "Göran lämnade en blank skruv på säljlådan." (förra gången dag 18)
- **TEMPO** dag 18 2:28: dag 18 tog 2.5 min (mål 10–15)
- **TEMPO** dag 20 1:40: dag 20 tog 1.7 min (mål 10–15)
- **TEMPO** dag 21 0:26: dag 21 tog 0.4 min (mål 10–15)
- **TEMPO** dag 23 0:01: dag 23 tog 0.0 min (mål 10–15)

Sidfel: inga

## Dag 18

| Tid | Källa | Vem | Text |
|---|---|---|---|
| 0:00 | MÅL |  | Bygg diamantkvarnen |
| 0:00 | MÅL |  | Bygg diamantkvarnen |
| 0:01 | sak | du | Bygg diamantkvarnen. |
| 0:01 | pil |  | Bygg diamantkvarnen |
| 0:01 | röst | du | Bygg diamantkvarnen. · MÅL |
| 0:01 | nick |  | nick:116 |
| 0:03 | klar | du | Bygg diamantkvarnen. |
| 0:03 | sak | info:guld | Göran lämnade en blank skruv på säljlådan. |
| 0:03 | kvitto-visas | info:guld | Göran lämnade en blank skruv på säljlådan. |
| 0:03 | toast | guld | Göran lämnade en blank skruv på säljlådan. |
| 0:05 | klar | info:guld | Göran lämnade en blank skruv på säljlådan. |
| 0:22 | sak | gunbritt | Hej igen. Gun-Britt. Tyvärr kunde jag inte hitta något fel. Bygglovet är godkänt. Jag har stämplat det. Med stjärnor. Tyvärr hade jag bara guldstjärnor. /Gun-Britt |
| 0:22 | lapp | Brev från byggnadsnämnden | Hej igen. Gun-Britt. Tyvärr kunde jag inte hitta något fel. Bygglovet är godkänt. Jag har stämplat det. Med stjärnor. Tyvärr hade jag bara guldstjärnor. /Gun-Britt |
| 0:22 | röst | gunbritt | Hej igen. Gun-Britt. Tyvärr kunde jag inte hitta något fel. Bygglovet är godkänt. Jag har stämplat det. Med stjärnor. Tyvärr hade jag bara guldstjärnor. /Gun-Britt · STORY |
| 0:22 | scenInfo | rolf | Rolf på kaffe |
| 0:28 | poolTom | ali | 4 repliker använda |
| 0:30 | skratt | du | Alis dyr-pling |
| 0:30 | toast | guld | 3D-modell köpt – printa diamantkvarn på skrivaren |
| 0:30 | händelse | kopt | sak=diamantkniv |
| 0:35 | klar | gunbritt | Hej igen. Gun-Britt. Tyvärr kunde jag inte hitta något fel. Bygglovet är godkänt. Jag har stämplat det. Med stjärnor. Tyvärr hade jag bara guldstjärnor. /Gun-Britt |
| 0:38 | händelse | printStart | sak=byggsats:diamantkniv |
| 0:40 | toast | bra | Del 1 av 3 klar |
| 0:43 | toast | bra | Del 2 av 3 klar |
| 0:43 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 0:44 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 0:44 | skratt | du | falsk tuta |
| 0:55 | väntar | värld:Mjau. | Mjau. |
| 0:59 | sak | värld:Mjau. | Mjau. |
| 0:59 | bubbla |  | Mjau. |
| 1:00 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 1:00 | väntar | notis:Skrivare L: Tornet är tomt – mal mer så  | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 1:01 | klar | värld:Mjau. | Mjau. |
| 1:02 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 1:03 | händelse | printKlar | sak=byggsats:diamantkniv n=1 |
| 1:03 | toast | guld | ✅ |
| 1:06 | väntar | värld:TUUT! Tjena! | TUUT! Tjena! |
| 1:06 | skratt | du | kvarnen spottar |
| 1:09 | sak | notis:Skrivare L: Tornet är tomt – mal mer så  | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 1:09 | notis | fel | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 1:11 | nej | du | Ta ut diamantkvarn |
| 1:11 | toast | fickskylt | Fulla fickor |
| 1:11 | fullaFickor | du | byggsats:diamantkniv |
| 1:12 | händelse | tagitUrPrint | sak=byggsats:diamantkniv n=1 |
| 1:12 | paket |  | sms |
| 1:12 | väntar | ali | Ali här. Jag såg Diamantkvarn på avstånd. Ett streck blev lite snett. Mitt fel. Vackert ändå. |
| 1:12 | klar | notis:Skrivare L: Tornet är tomt – mal mer så  | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 1:13 | väntar | info:guld | Diamantkvarnen sitter! Guldet – kom an. |
| 1:13 | sak | info:guld | Diamantkvarnen sitter! Guldet – kom an. |
| 1:13 | kvitto-visas | info:guld | Diamantkvarnen sitter! Guldet – kom an. |
| 1:13 | toast | guld | Diamantkvarnen sitter! Guldet – kom an. |
| 1:13 | händelse | malKlart | id=m18-bygg-diamantkvarnen del=Dag 18 – Diamantkvarnen och grunden nasta=m18-mal-rulle-guld |
| 1:13 | väntar | du | Mal en rulle guld. |
| 1:14 | MÅL |  | Mal en rulle guld |
| 1:15 | klar | info:guld | Diamantkvarnen sitter! Guldet – kom an. |
| 1:17 | målruta |  | Mal en rulle guld |
| 1:17 | kvittens-bock |  | ✓ Bygg diamantkvarnen |
| 1:17 | sak | du | Mal en rulle guld. |
| 1:17 | pil |  | Mal en rulle guld |
| 1:17 | röst | du | Mal en rulle guld. · MÅL |
| 1:20 | klar | du | Mal en rulle guld. |
| 1:22 | struken | värld:TUUT! Tjena! | TUUT! Tjena! |
| 1:28 | sak | ali | Ali här. Jag såg Diamantkvarn på avstånd. Ett streck blev lite snett. Mitt fel. Vackert ändå. |
| 1:28 | sms | ali | Ali här. Jag såg Diamantkvarn på avstånd. Ett streck blev lite snett. Mitt fel. Vackert ändå. |
| 1:28 | sms-bubbla | ali | Ali här. Jag såg Diamantkvarn på avstånd. Ett streck blev lite snett. Mitt fel. Vackert ändå. |
| 1:28 | röst | ali | Ali här. Jag såg Diamantkvarn på avstånd. Ett streck blev lite snett. Mitt fel. Vackert ändå. · REAKTION |
| 1:30 | paket |  | tanke |
| 1:30 | tanke | du | Det står Rolf & Birgitta 1979 på insidan. |
| 1:30 | väntar | du | Det står Rolf & Birgitta 1979 på insidan. |
| 1:33 | paket |  | tanke |
| 1:33 | tanke | du | En tand. Jag tänker inte fråga. |
| 1:33 | väntar | du | En tand. Jag tänker inte fråga. |
| 1:33 | skratt | du | vaskmiss |
| 1:35 | paket |  | tanke |
| 1:35 | tanke | du | Grus. Väldigt fint grus. |
| 1:35 | struken | du | En tand. Jag tänker inte fråga. |
| 1:35 | väntar | du | Grus. Väldigt fint grus. |
| 1:35 | skratt | du | vaskmiss |
| 1:35 | klar | ali | Ali här. Jag såg Diamantkvarn på avstånd. Ett streck blev lite snett. Mitt fel. Vackert ändå. |
| 1:37 | paket |  | tanke |
| 1:37 | tanke | du | Grus. Väldigt fint grus. |
| 1:37 | struken | du | Grus. Väldigt fint grus. |
| 1:37 | skratt | du | vaskmiss |
| 1:39 | paket |  | tanke |
| 1:39 | tanke | du | Grus. Väldigt fint grus. |
| 1:39 | struken | du | Grus. Väldigt fint grus. |
| 1:39 | skratt | du | vaskmiss |
| 1:41 | paket |  | tanke |
| 1:41 | tanke | du | Grus. Väldigt fint grus. |
| 1:41 | struken | du | Grus. Väldigt fint grus. |
| 1:41 | skratt | du | vaskmiss |
| 1:43 | paket |  | tanke |
| 1:43 | tanke | du | Grus. Väldigt fint grus. |
| 1:43 | struken | du | Grus. Väldigt fint grus. |
| 1:43 | skratt | du | vaskmiss |
| 1:43 | sak | du | Det står Rolf & Birgitta 1979 på insidan. |
| 1:43 | notis | tanke | 💭 Det står Rolf & Birgitta 1979 på insidan. |
| 1:43 | röst | du | Det står Rolf & Birgitta 1979 på insidan. · STORY |
| 1:45 | väntar | info:guld | ✨ Guld! (1.9 s) |
| 1:45 | skratt | du | första guldet |
| 1:47 | klar | du | Det står Rolf & Birgitta 1979 på insidan. |
| 1:47 | sak | info:guld | ✨ Guld! (1.9 s) |
| 1:47 | kvitto-visas | info:guld | ✨ Guld! (1.9 s) |
| 1:47 | toast | guld | ✨ Guld! (1.9 s) |
| 1:49 | klar | info:guld | ✨ Guld! (1.9 s) |
| 1:55 | poolTom | du | 4 repliker använda |
| 1:57 | sak | du | Grus. Väldigt fint grus. |
| 1:57 | notis | tanke | 💭 Grus. Väldigt fint grus. |
| 1:57 | röst | du | Grus. Väldigt fint grus. · REAKTION |
| 2:00 | klar | du | Grus. Väldigt fint grus. |
| 2:00 | paket |  | toast → tanke |
| 2:00 | väntar | notis:Kvarnen gav en rulle filament nivå 4 – g | Kvarnen gav en rulle filament nivå 4 – guldkomposit! Den behövs för de finare recepten. |
| 2:00 | tanke | du | guldkomposit. Starkare än vanlig plast – Ali har recept som kräver den. Rolf hittar mer ju mer folk respekterar mig. |
| 2:00 | väntar | du | guldkomposit. Starkare än vanlig plast – Ali har recept som kräver den. Rolf hittar mer ju mer folk respekterar mig. |
| 2:00 | händelse | malKlart | id=m18-mal-rulle-guld del=Dag 18 – Diamantkvarnen och grunden nasta=m18-gjut-grunden-huset |
| 2:00 | väntar | du | tillbakablick hem |
| 2:00 | MÅL |  | Gjut grunden till huset |
| 2:02 | sak | du | guldkomposit. Starkare än vanlig plast – Ali har recept som kräver den. Rolf hittar mer ju mer folk respekterar mig. |
| 2:02 | notis | tanke | 💭 guldkomposit. Starkare än vanlig plast – Ali har recept som kräver den. Rolf hittar mer ju mer folk respekterar mig. |
| 2:02 | röst | du | guldkomposit. Starkare än vanlig plast – Ali har recept som kräver den. Rolf hittar mer ju mer folk respekterar mig. · REAKTION |
| 2:03 | tillbakablick | du | hem |
| 2:04 | kvittens-bock |  | ✓ Mal en rulle guld |
| 2:05 | väntar | notis:📔 Prestation: Röd tråd · +3 respekt | 📔 Prestation: Röd tråd · +3 respekt |
| 2:07 | väntar | du | Gjut grunden till huset. |
| 2:07 | målruta |  | Gjut grunden till huset |
| 2:11 | klar | du | guldkomposit. Starkare än vanlig plast – Ali har recept som kräver den. Rolf hittar mer ju mer folk respekterar mig. |
| 2:13 | sak | du | Gjut grunden till huset. |
| 2:13 | pil |  | Gjut grunden till huset |
| 2:13 | röst | du | Gjut grunden till huset. · MÅL |
| 2:15 | klar | du | Gjut grunden till huset. |
| 2:17 | struken | notis:📔 Prestation: Röd tråd · +3 respekt | 📔 Prestation: Röd tråd · +3 respekt |
| 2:18 | väntar | info:guld | 🌲 Grunden till huset på ängen är din! Gärdesgården har flyttats – där får du ställa saker nu. |
| 2:18 | paket |  | sms |
| 2:18 | väntar | rolf | Grunden ä gjuten. Ja sto å tittade i en timme. Betong ä vackert när den torkar. Säg inte de till nån. /R |
| 2:18 | sak | info:guld | 🌲 Grunden till huset på ängen är din! Gärdesgården har flyttats – där får du ställa saker nu. |
| 2:18 | kvitto-visas | info:guld | 🌲 Grunden till huset på ängen är din! Gärdesgården har flyttats – där får du ställa saker nu. |
| 2:18 | toast | guld | 🌲 Grunden till huset på ängen är din! Gärdesgården har flyttats – där får du ställa saker nu. |
| 2:18 | händelse | malKlart | id=m18-gjut-grunden-huset del=Dag 18 – Diamantkvarnen och grunden nasta=sov18 |
| 2:18 | paket |  | lapp |
| 2:18 | väntar | du | Dag 18 är slut. Jag vill bo i ett riktigt hus. I morgon. |
| 2:18 | MÅL |  | Klart för idag – sov när du vill |
| 2:20 | klar | info:guld | 🌲 Grunden till huset på ängen är din! Gärdesgården har flyttats – där får du ställa saker nu. |
| 2:22 | målruta |  | Klart för idag – sov när du vill |
| 2:22 | kvittens-bock |  | ✓ Gjut grunden till huset |
| 2:22 | sak | du | (nytt mål i rutan) |
| 2:22 | pil |  | Klart för idag – sov när du vill |
| 2:22 | klar | du | (nytt mål i rutan) |
| 2:25 | väntar | notis:🌇 Klockan är 21. Ali slår igen luckan.  | 🌇 Klockan är 21. Ali slår igen luckan. Dagens jobb är klart – gå in i skjulet och sov i sängen. |

<details><summary>Botens handlingar dag 18</summary>

- 0:13 gå till Rolfs postlåda (31 m) (72987 kr)
- 0:22 panel: "En lapp från Rolf
Lite olaglig" (72987 kr)
- 0:28 gå till Ali (31 m) (72987 kr)
- 0:28 öppnar Alis butik – köpa diamantkvarn (72987 kr)
- 0:31 köper diamantkniv för 12000 kr (60987 kr)
- 0:36 gå till skrivaren (23 m) (60987 kr)
- 0:38 printar Diamantkvarn (3 delar) (60987 kr)
- 0:55 plockar 7 skräp på tippen (bär max 16) (60987 kr)
- 0:58 gå till kvarnen (14 m) (60987 kr)
- 1:11 gå till skrivaren (7 m) (60987 kr)
- 1:12 tar ut 1 st ur skrivaren (60987 kr)
- 1:12 fulla fickor – lägger g_skruv i kistan (60987 kr)
- 1:13 gå till kvarnen (4 m) (60987 kr)
- 1:30 gå till ådern (43 m) (60987 kr)
- 1:39 vaskar guld i ådern (60987 kr)
- 1:47 vaskar guld i ådern (60987 kr)
- 2:00 gå till kvarnen (guld) (43 m) (60987 kr)
- 2:18 gå till tavlan vid vägen (22 m) (60987 kr)
- 2:18 köper grunden till huset på ängen (12000 kr) (48987 kr)
- 2:27 gå till sängen (12 m) (48987 kr)

</details>

## Dag 19

| Tid | Källa | Vem | Text |
|---|---|---|---|
| 2:30 | vara | ali | n2_vas |
| 2:30 | händelse | malKlart | id=sov18 del=Dag 18 – Diamantkvarnen och grunden nasta=m19-bygg-huset-grunden |
| 2:30 | MÅL |  | Bygg huset på grunden |
| 0:00 | väntar | info:info | Pappa kommer gående. Han bär på en kasse … |
| 0:00 | scenInfo | pappa | Pappa kommer |
| 0:01 | händelse | dagenBorjar | dag=19 |
| 0:01 | meddelande | du | Dag 19. 3 dagar till jul. Utan hus kommer mamma och hämtar mig. |
| 0:01 | dagbokkort | du | Ett riktigt hus · Dag 19. 3 dagar till jul. Utan hus kommer mamma och hämtar mig. |
| 0:01 | röst | du | Dag 19. 3 dagar till jul. Ett riktigt hus. Utan hus kommer mamma och hämtar mig. · STORY |
| 0:08 | notis | nytt | Ali vill ha idag: Designvas i röd PETG – +50 % hela dagen (1185 kr just nu)📈 Igår: 0 printat · 0 sålt |
| 0:08 | händelse | morgonkortStangt | dag=19 |
| 0:08 | struken | kedja | d19 |
| 0:08 | väntar | du | Bygg huset på grunden. |
| 0:12 | målruta |  | Bygg huset på grunden |
| 0:14 | sak | du | Bygg huset på grunden. |
| 0:14 | pil |  | Bygg huset på grunden |
| 0:14 | röst | du | Bygg huset på grunden. · MÅL |
| 0:16 | klar | du | Bygg huset på grunden. |
| 0:18 | struken | notis:Kvarnen gav en rulle filament nivå 4 – g | Kvarnen gav en rulle filament nivå 4 – guldkomposit! Den behövs för de finare recepten. |
| 0:18 | struken | notis:🌇 Klockan är 21. Ali slår igen luckan.  | 🌇 Klockan är 21. Ali slår igen luckan. Dagens jobb är klart – gå in i skjulet och sov i sängen. |
| 0:18 | struken | info:info | Pappa kommer gående. Han bär på en kasse … |
| 0:20 | paket |  | sms |
| 0:20 | väntar | mamma | Pappa säger att du har byggt ett hus. Med trappa. Är det säkert? Har du räcke? Jag skickar en brandvarnare. Och sylt. |
| 0:20 | väntar | info:guld | 🏡 Huset står klart på ängen! Två rum och en trappa upp till sovloftet. |
| 0:20 | paket |  | sms |
| 0:20 | väntar | rolf | Du har byggt ett HUS. Me trappa. Ja har aldrig gått i en trappa i ett hus som ja känner nån som äger. Ja kommer på inflyttningsfest. Ja tar me Kajsa. /R |
| 0:20 | sak | info:guld | 🏡 Huset står klart på ängen! Två rum och en trappa upp till sovloftet. |
| 0:20 | kvitto-visas | info:guld | 🏡 Huset står klart på ängen! Två rum och en trappa upp till sovloftet. |
| 0:20 | toast | guld | 🏡 Huset står klart på ängen! Två rum och en trappa upp till sovloftet. |
| 0:20 | händelse | malKlart | id=m19-bygg-huset-grunden del=Dag 19 – Ett riktigt hus nasta=m19-vindkraft |
| 0:20 | MÅL |  | Printa och sälj |
| 0:22 | klar | info:guld | 🏡 Huset står klart på ängen! Två rum och en trappa upp till sovloftet. |
| 0:22 | målruta |  | Printa och sälj |
| 0:24 | kvittens-bock |  | ✓ Bygg huset på grunden |
| 0:24 | sak | du | (nytt mål i rutan) |
| 0:24 | pil |  | Printa och sälj |
| 0:24 | klar | du | (nytt mål i rutan) |
| 0:26 | väntar | mamma | Jag hämtar dig på julafton kl 15. Var redo. |
| 0:29 | skratt | du | däcket rullar iväg |
| 0:31 | händelse | printStart | sak=pall |
| 0:34 | sak | du | Dag 18 är slut. Jag vill bo i ett riktigt hus. I morgon. |
| 0:34 | lapp | 📔 Dagbok | Dag 18 är slut. Jag vill bo i ett riktigt hus. I morgon. |
| 0:34 | meddelande | du | Dag 18 är slut. Jag vill bo i ett riktigt hus. I morgon. |
| 0:34 | dagbokkort | du | Dag 18 är slut. Jag vill bo i ett riktigt hus. I morgon. |
| 0:34 | röst | du | Dag 19. 3 dagar till jul. Dag 18 är slut. Jag vill bo i ett riktigt hus. I morgon. · STORY |
| 0:41 | händelse | brevLast | id=kvall18 |
| 0:41 | klar | du | Dag 18 är slut. Jag vill bo i ett riktigt hus. I morgon. |
| 0:42 | skratt | du | kvarnen spottar |
| 0:42 | toast | guld | ✅ |
| 0:42 | händelse | printKlar | sak=pall n=27 |
| 0:43 | händelse | tagitUrPrint | sak=pall n=1 |
| 0:44 | skratt | du | falsk tuta |
| 0:44 | väntar | värld:TUUT TUUT! | TUUT TUUT! |
| 0:56 | sak | mamma | Pappa säger att du har byggt ett hus. Med trappa. Är det säkert? Har du räcke? Jag skickar en brandvarnare. Och sylt. |
| 0:56 | sms | mamma | Pappa säger att du har byggt ett hus. Med trappa. Är det säkert? Har du räcke? Jag skickar en brandvarnare. Och sylt. |
| 0:56 | sms-bubbla | mamma | Pappa säger att du har byggt ett hus. Med trappa. Är det säkert? Har du räcke? Jag skickar en brandvarnare. Och sylt. |
| 0:56 | röst | mamma | Pappa säger att du har byggt ett hus. Med trappa. Är det säkert? Har du räcke? Jag skickar en brandvarnare. Och sylt. · STORY |
| 0:57 | webb | du | packade 2 kruka |
| 1:05 | klar | mamma | Pappa säger att du har byggt ett hus. Med trappa. Är det säkert? Har du räcke? Jag skickar en brandvarnare. Och sylt. |
| 1:06 | webb | du | packade 2 pall |
| 1:15 | sak | värld:TUUT TUUT! | TUUT TUUT! |
| 1:15 | bubbla |  | TUUT TUUT! |
| 1:18 | klar | värld:TUUT TUUT! | TUUT TUUT! |
| 1:21 | väntar | info:bra | 📦 Paketet till Ett kafé i Ystad ligger i postlådan – Rolf tar det till posten |
| 1:21 | sak | info:bra | 📦 Paketet till Ett kafé i Ystad ligger i postlådan – Rolf tar det till posten |
| 1:21 | kvitto-visas | info:bra | 📦 Paketet till Ett kafé i Ystad ligger i postlådan – Rolf tar det till posten |
| 1:21 | toast | bra | 📦 Paketet till Ett kafé i Ystad ligger i postlådan – Rolf tar det till posten |
| 1:22 | väntar | info:bra | 📦 Paketet till Någon som bara skrev "hej" ligger i postlådan – Rolf tar det till posten |
| 1:23 | klar | info:bra | 📦 Paketet till Ett kafé i Ystad ligger i postlådan – Rolf tar det till posten |
| 1:23 | sak | info:bra | 📦 Paketet till Någon som bara skrev "hej" ligger i postlådan – Rolf tar det till posten |
| 1:23 | kvitto-visas | info:bra | 📦 Paketet till Någon som bara skrev "hej" ligger i postlådan – Rolf tar det till posten |
| 1:23 | toast | bra | 📦 Paketet till Någon som bara skrev "hej" ligger i postlådan – Rolf tar det till posten |
| 1:25 | klar | info:bra | 📦 Paketet till Någon som bara skrev "hej" ligger i postlådan – Rolf tar det till posten |
| 1:27 | händelse | printStart | sak=n3_stol |
| 1:27 | väntar | notis:☀️ Skrivaren går på solkraft – du behöve | ☀️ Skrivaren går på solkraft – du behöver inte trampa! |
| 1:34 | toast | guld | ✅ |
| 1:34 | händelse | printKlar | sak=n3_stol n=17 |
| 1:35 | händelse | tagitUrPrint | sak=n3_stol n=1 |
| 1:38 | sak | notis:☀️ Skrivaren går på solkraft – du behöve | ☀️ Skrivaren går på solkraft – du behöver inte trampa! |
| 1:38 | notis | guld | ☀️ Skrivaren går på solkraft – du behöver inte trampa! |
| 1:38 | poolTom | du | 4 repliker använda |
| 1:40 | klar | notis:☀️ Skrivaren går på solkraft – du behöve | ☀️ Skrivaren går på solkraft – du behöver inte trampa! |
| 1:42 | poolTom | ali | 4 repliker använda |
| 1:44 | aliSalt | ali | 240 |
| 1:44 | aliSalt | ali | 16000 |
| 1:44 | aliSalt | ali | 6 |
| 1:46 | väntar | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått solcellspark. Skriv in, Gunnar. Du skriver aldrig in. |
| 1:46 | radio | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått solcellspark. Skriv in, Gunnar. Du skriver aldrig in. |
| 1:46 | skratt | du | Radio-Kjelle |
| 1:50 | sak | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått solcellspark. Skriv in, Gunnar. Du skriver aldrig in. |
| 1:50 | notis |  | 📻 Radio Tippen: Radio Tippen, Kjelle här. Skjulet vid tippen har fått solcellspark. Skriv in, Gunnar. Du skriver aldrig in. |
| 1:50 | röst | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått solcellspark. Skriv in, Gunnar. Du skriver aldrig in. · REAKTION |
| 1:53 | händelse | printStart | sak=n3_stol |
| 1:59 | klar | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått solcellspark. Skriv in, Gunnar. Du skriver aldrig in. |
| 2:00 | toast | guld | ✅ |
| 2:00 | händelse | printKlar | sak=n3_stol n=18 |
| 2:00 | händelse | tagitUrPrint | sak=n3_stol n=1 |
| 2:09 | aliSalt | ali | 15200 |
| 2:20 | händelse | printStart | sak=n3_stol |
| 2:26 | toast | guld | ✅ |
| 2:26 | händelse | printKlar | sak=n3_stol n=19 |
| 2:27 | händelse | tagitUrPrint | sak=n3_stol n=1 |
| 2:35 | aliSalt | ali | 14440 |
| 2:46 | händelse | printStart | sak=n3_stol |
| 2:46 | skratt | du | Kajsa i skrivaren |
| 2:52 | toast | guld | ✅ |
| 2:52 | händelse | printKlar | sak=n3_stol n=20 |
| 2:53 | händelse | tagitUrPrint | sak=n3_stol n=1 |
| 2:58 | väntar | rolf | Ja kände lukten från sopbilen. FRÅN SOPBILEN. Vad har du där borta? /R |
| 3:02 | aliSalt | ali | 13718 |
| 3:12 | händelse | printStart | sak=n3_stol |
| 3:18 | toast | guld | ✅ |
| 3:18 | händelse | printKlar | sak=n3_stol n=21 |
| 3:19 | händelse | tagitUrPrint | sak=n3_stol n=1 |
| 3:28 | aliSalt | ali | 13032 |
| 3:38 | poolTom | du | 4 repliker använda |
| 4:05 | upplåst | strom | vindkraft |
| 4:05 | brott | RESERV | vindkraft (strom 0 av 15) |
| 4:05 | händelse | upplast | id=vindkraft flask=strom |
| 4:05 | paket |  | sms |
| 4:05 | väntar | ali | Ali här. Ett vindkraftverk. Begagnat, från en gård i Hälsingland. Vingarna är hela. Nästan. |
| 4:05 | sak | ali | Ali här. Ett vindkraftverk. Begagnat, från en gård i Hälsingland. Vingarna är hela. Nästan. |
| 4:05 | sms | ali | Ali här. Ett vindkraftverk. Begagnat, från en gård i Hälsingland. Vingarna är hela. Nästan. |
| 4:05 | sms-bubbla | ali | Ali här. Ett vindkraftverk. Begagnat, från en gård i Hälsingland. Vingarna är hela. Nästan. |
| 4:05 | röst | ali | Ali här. Ett vindkraftverk. Begagnat, från en gård i Hälsingland. Vingarna är hela. Nästan. · STORY |
| 4:12 | skratt | du | falsk tuta |
| 4:13 | klar | ali | Ali här. Ett vindkraftverk. Begagnat, från en gård i Hälsingland. Vingarna är hela. Nästan. |
| 5:38 | poolTom | du | 4 repliker använda |
| 6:26 | struken | mamma | Jag hämtar dig på julafton kl 15. Var redo. |
| 6:29 | skratt | du | falsk tuta |
| 7:38 | poolTom | du | 4 repliker använda |
| 7:39 | händelse | printStart | sak=n2_vas |
| 7:43 | toast | guld | ✅ |
| 7:43 | händelse | printKlar | sak=n2_vas n=36 |
| 7:43 | händelse | tagitUrPrint | sak=n2_vas n=1 |
| 7:49 | väntar | ali | Jag har kaffe. Det är inte gott. Men det finns. |
| 7:49 | sak | ali | Jag har kaffe. Det är inte gott. Men det finns. |
| 7:49 | röst | ali | Jag har kaffe. Det är inte gott. Men det finns. · SMÅPRAT |
| 7:50 | bubbla |  | Jag har kaffe. Det är inte gott. Men det finns. |
| 7:51 | aliSalt | ali | 1185 |
| 7:53 | klar | ali | Jag har kaffe. Det är inte gott. Men det finns. |
| 7:56 | skratt | du | Alis dyr-pling |
| 7:56 | toast | guld | 3D-modell köpt – printa vindkraftverk på skrivaren |
| 7:56 | händelse | kopt | sak=vindkraft |
| 8:04 | händelse | printStart | sak=byggsats:vindkraft |
| 8:07 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 8:07 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 8:08 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 8:08 | väntar | notis:Skrivare L: Tornet är tomt – mal mer så  | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 8:09 | sak | notis:Skrivare L: Tornet är tomt – mal mer så  | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 8:09 | notis | fel | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 8:10 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 8:10 | struken | notis | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 8:11 | klar | notis:Skrivare L: Tornet är tomt – mal mer så  | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 8:16 | väntar | värld:Mjau. | Mjau. |
| 8:17 | skratt | du | däcket rullar iväg |
| 8:20 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 8:20 | struken | notis | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 8:21 | sak | värld:Mjau. | Mjau. |
| 8:21 | bubbla |  | Mjau. |
| 8:21 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 8:23 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 8:23 | klar | värld:Mjau. | Mjau. |
| 8:24 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 8:25 | toast | bra | Del 1 av 4 klar |
| 8:25 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 8:26 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 8:28 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 8:29 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 8:30 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 8:31 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 8:32 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 8:34 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 8:35 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 8:36 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 8:37 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 8:38 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 8:47 | väntar | info:fel | Fullt i händerna. |
| 8:47 | sak | info:fel | Fullt i händerna. |
| 8:47 | kvitto-visas | info:fel | Fullt i händerna. |
| 8:47 | toast | fel | Fullt i händerna. |
| 8:49 | klar | info:fel | Fullt i händerna. |
| 8:52 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 8:52 | struken | notis | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 8:53 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 8:53 | toast | bra | Del 2 av 4 klar |
| 8:54 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 8:55 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 8:56 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 8:57 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 8:58 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 9:00 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 9:01 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 9:03 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 9:04 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 9:06 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 9:07 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 9:09 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 9:10 | toast | bra | Del 3 av 4 klar |
| 9:10 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 9:12 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 9:14 | väntar | värld:Mjau. | Mjau. |
| 9:27 | sak | värld:Mjau. | Mjau. |
| 9:27 | bubbla |  | Mjau. |
| 9:29 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 9:29 | struken | notis | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 9:29 | klar | värld:Mjau. | Mjau. |
| 9:31 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 9:32 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 9:34 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 9:36 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 9:38 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 9:38 | poolTom | du | 4 repliker använda |
| 9:39 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 9:41 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 9:42 | händelse | printKlar | sak=byggsats:vindkraft n=1 |
| 9:42 | toast | guld | ✅ |
| 9:50 | händelse | tagitUrPrint | sak=byggsats:vindkraft n=1 |
| 9:50 | paket |  | sms |
| 9:50 | väntar | ali | Ali här. Vindkraftverk – printad. På riktigt. Jag har visat bilden för min fru tre gånger. |
| 9:53 | sak | ali | Ali här. Vindkraftverk – printad. På riktigt. Jag har visat bilden för min fru tre gånger. |
| 9:53 | sms | ali | Ali här. Vindkraftverk – printad. På riktigt. Jag har visat bilden för min fru tre gånger. |
| 9:53 | sms-bubbla | ali | Ali här. Vindkraftverk – printad. På riktigt. Jag har visat bilden för min fru tre gånger. |
| 9:53 | röst | ali | Ali här. Vindkraftverk – printad. På riktigt. Jag har visat bilden för min fru tre gånger. · REAKTION |
| 9:57 | skratt | du | falsk tuta |
| 9:59 | händelse | placerat | sak=vindkraft |
| 9:59 | händelse | malKlart | id=m19-vindkraft del=Dag 19 – Ett riktigt hus nasta=m19-guldskrivare |
| 9:59 | målruta |  | Printa och sälj |
| 9:59 | upplåst | skrivare | guldskrivare |
| 9:59 | brott | UPPLÅST | guldskrivare (skrivare 2003 av 75) |
| 9:59 | händelse | upplast | id=guldskrivare flask=skrivare |
| 9:59 | paket |  | tanke → sms |
| 9:59 | tanke | du | Guldrullarna ligger där och glänser. Ingen av skrivarna klarar dem. |
| 9:59 | väntar | du | Guldrullarna ligger där och glänser. Ingen av skrivarna klarar dem. |
| 9:59 | väntar | ali | Ali här. Guldskrivaren. Munstycket är av diamant. Tappa den inte. Den är dyrare än min bil. |
| 10:00 | klar | ali | Ali här. Vindkraftverk – printad. På riktigt. Jag har visat bilden för min fru tre gånger. |
| 10:02 | sak | du | (nytt mål i rutan) |
| 10:02 | pil |  | Bygg guldskrivaren i linje 4 |
| 10:02 | klar | du | Bygg guldskrivaren i linje 4. |
| 10:03 | nick |  | nick:122 |
| 10:03 | kvittens-bock |  | ✓ Bygg vindkraftverket på backen |
| 10:11 | sak | du | Guldrullarna ligger där och glänser. Ingen av skrivarna klarar dem. |
| 10:11 | notis | tanke | 💭 Guldrullarna ligger där och glänser. Ingen av skrivarna klarar dem. |
| 10:11 | röst | du | Guldrullarna ligger där och glänser. Ingen av skrivarna klarar dem. · STORY |
| 10:15 | skratt | du | Alis dyr-pling |
| 10:15 | toast | guld | 3D-modell köpt – printa guldskrivaren på skrivaren |
| 10:15 | händelse | kopt | sak=guldskrivare |
| 10:17 | klar | du | Guldrullarna ligger där och glänser. Ingen av skrivarna klarar dem. |
| 10:19 | struken | ali | Ali här. Guldskrivaren. Munstycket är av diamant. Tappa den inte. Den är dyrare än min bil. |
| 10:29 | skratt | du | kvarnen rapar |
| 10:29 | toast | guld | 🧵 |
| 10:32 | händelse | printStart | sak=byggsats:guldskrivare |
| 10:35 | toast | bra | Del 1 av 5 klar |
| 10:35 | toast | guld | 🧵 |
| 10:38 | toast | bra | Del 2 av 5 klar |
| 10:40 | toast | guld | 🧵 |
| 10:41 | toast | bra | Del 3 av 5 klar |
| 10:43 | toast | bra | Del 4 av 5 klar |
| 10:44 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 10:50 | skratt | du | kvarnen rapar |
| 10:55 | händelse | printKlar | sak=byggsats:guldskrivare n=1 |
| 10:55 | toast | guld | ✅ |
| 10:58 | händelse | tagitUrPrint | sak=byggsats:guldskrivare n=1 |
| 10:59 | toast | guld | 🧵 |
| 11:01 | händelse | placerat | sak=guldskrivare |
| 11:01 | händelse | malKlart | id=m19-guldskrivare del=Dag 19 – Ett riktigt hus nasta=m19-flytta-in-huset |
| 11:01 | väntar | du | Flytta in i huset. |
| 11:01 | målruta |  | Flytta in i huset |
| 11:02 | MÅL |  | Flytta in i huset |
| 11:03 | sak | du | Flytta in i huset. |
| 11:03 | pil |  | Flytta in i huset |
| 11:03 | röst | du | Flytta in i huset. · MÅL |
| 11:05 | klar | du | Flytta in i huset. |
| 11:05 | kvittens-bock |  | ✓ Bygg guldskrivaren i linje 4 |
| 11:16 | väntar | info:guld | 🏡 Du har flyttat in! Skjulet blir verkstad – du bor i ett riktigt hus nu. |
| 11:16 | paket |  | sms |
| 11:16 | väntar | mamma | Du har flyttat in i ett hus. Med trappa. Jag har köpt en dörrmatta. Det står "Välkommen" på den. Pappa ville att det skulle stå "Gå hem". Jag sa nej. |
| 11:16 | sak | info:guld | 🏡 Du har flyttat in! Skjulet blir verkstad – du bor i ett riktigt hus nu. |
| 11:16 | kvitto-visas | info:guld | 🏡 Du har flyttat in! Skjulet blir verkstad – du bor i ett riktigt hus nu. |
| 11:16 | toast | guld | 🏡 Du har flyttat in! Skjulet blir verkstad – du bor i ett riktigt hus nu. |
| 11:16 | händelse | malKlart | id=m19-flytta-in-huset del=Dag 19 – Ett riktigt hus nasta=sov19 |
| 11:16 | paket |  | lapp |
| 11:16 | väntar | du | Dag 19 är slut. Det blir kallare för varje natt. |
| 11:16 | MÅL |  | Klart för idag – sov när du vill |
| 11:18 | klar | info:guld | 🏡 Du har flyttat in! Skjulet blir verkstad – du bor i ett riktigt hus nu. |
| 11:19 | målruta |  | Klart för idag – sov när du vill |
| 11:20 | kvittens-bock |  | ✓ Flytta in i huset |
| 11:20 | sak | du | (nytt mål i rutan) |
| 11:20 | pil |  | Klart för idag – sov när du vill |
| 11:20 | klar | du | (nytt mål i rutan) |
| 11:22 | sak | du | Dag 19 är slut. Det blir kallare för varje natt. |
| 11:22 | lapp | 📔 Dagbok | Dag 19 är slut. Det blir kallare för varje natt. |
| 11:22 | meddelande | du | Dag 19 är slut. Det blir kallare för varje natt. |
| 11:22 | dagbokkort | du | Dag 19 är slut. Det blir kallare för varje natt. |
| 11:22 | röst | du | Dag 19. 3 dagar till jul. Dag 19 är slut. Det blir kallare för varje natt. · STORY |
| 11:29 | händelse | brevLast | id=kvall19 |
| 11:29 | klar | du | Dag 19 är slut. Det blir kallare för varje natt. |
| 11:29 | väntar | notis:🌇 Klockan är 21. Ali slår igen luckan.  | 🌇 Klockan är 21. Ali slår igen luckan. Dagens jobb är klart – gå in i skjulet och sov i sängen. |
| 11:38 | webbBetalt | du | 743 |

<details><summary>Botens handlingar dag 19</summary>

- 0:00 — dag 19 börjar — (48987 kr)
- 0:08 popup: "FORTSÄTT" (48987 kr)
- 0:20 gå till tavlan vid vägen (11 m) (48987 kr)
- 0:20 köper ett riktigt hus på ängen (17500 kr) (31487 kr)
- 0:30 gå till skrivaren (15 m) (31487 kr)
- 0:31 printar Pall (31487 kr)
- 0:41 popup: "FORTSÄTT" (31487 kr)
- 0:43 tar ut 1 st ur skrivaren (31487 kr)
- 0:47 gå till datorn (17 m) (31487 kr)
- 0:56 panel: "Webbshopen · Soptippsvägen 1
B" (31487 kr)
- 1:05 panel: "Webbshopen · Soptippsvägen 1
B" (31487 kr)
- 1:15 panel: "Webbshopen · Soptippsvägen 1
B" (31487 kr)
- 1:21 gå till Rolfs postlåda (paket) (29 m) (31487 kr)
- 1:22 webbshop: 2 paket i postlådan (31487 kr)
- 1:22 tjänar pengar till väntar på flaskhalsen för vindkraft: 31487/31527 kr → printar kolfiberstol (16000 kr) (31487 kr)
- 1:25 gå till skrivaren (15 m) (31487 kr)
- 1:27 printar Kolfiberstol (31487 kr)
- 1:35 tar ut 1 st ur skrivaren (31487 kr)
- 1:42 gå till Ali (34 m) (31487 kr)
- 1:42 öppnar Alis butik – sälja (31487 kr)
- 1:44 säljer hos Ali: +16246 kr (47733 kr)
- 1:45 tjänar pengar till väntar på flaskhalsen för vindkraft: 47733/47773 kr → printar kolfiberstol (15200 kr) (47733 kr)
- 1:52 gå till skrivaren (33 m) (47733 kr)
- 1:53 printar Kolfiberstol (47733 kr)
- 2:01 tar ut 1 st ur skrivaren (47733 kr)
- 2:08 gå till Ali (33 m) (47733 kr)
- 2:08 öppnar Alis butik – sälja (47733 kr)
- 2:09 säljer hos Ali: +15200 kr (62933 kr)
- 2:11 tjänar pengar till väntar på flaskhalsen för vindkraft: 62933/62973 kr → printar kolfiberstol (14440 kr) (62933 kr)
- 2:18 gå till skrivaren (33 m) (62933 kr)
- 2:20 printar Kolfiberstol (62933 kr)
- 2:27 tar ut 1 st ur skrivaren (62933 kr)
- 2:34 gå till Ali (33 m) (62933 kr)
- 2:34 öppnar Alis butik – sälja (62933 kr)
- 2:36 säljer hos Ali: +14440 kr (77373 kr)
- 2:37 tjänar pengar till väntar på flaskhalsen för vindkraft: 77373/77413 kr → printar kolfiberstol (13718 kr) (77373 kr)
- 2:44 gå till skrivaren (33 m) (77373 kr)
- 2:46 printar Kolfiberstol (77373 kr)
- 2:53 tar ut 1 st ur skrivaren (77373 kr)
- 3:00 gå till Ali (33 m) (77373 kr)
- 3:00 öppnar Alis butik – sälja (77373 kr)
- 3:02 säljer hos Ali: +13718 kr (91091 kr)
- 3:04 tjänar pengar till väntar på flaskhalsen för vindkraft: 91091/91131 kr → printar kolfiberstol (13032 kr) (91091 kr)
- 3:10 gå till skrivaren (33 m) (91091 kr)
- 3:12 printar Kolfiberstol (91091 kr)
- 3:19 tar ut 1 st ur skrivaren (91091 kr)
- 3:26 gå till Ali (33 m) (91091 kr)
- 3:26 öppnar Alis butik – sälja (91091 kr)
- 3:28 säljer hos Ali: +13032 kr (104123 kr)
- 3:30 tjänar pengar till väntar på flaskhalsen för vindkraft: 104123/104163 kr → printar kolfiberstol (12380 kr) (104123 kr)
- 3:30 väntar på kolfiber från bandet (104123 kr)
- 3:38 väntar på kolfiber från bandet (104123 kr)
- 3:46 väntar på kolfiber från bandet (104123 kr)
- 3:54 väntar på kolfiber från bandet (104123 kr)
- 4:02 väntar på kolfiber från bandet (104123 kr)
- 4:10 väntar på kolfiber från bandet (104123 kr)
- 4:18 väntar på kolfiber från bandet (104123 kr)
- 4:26 väntar på kolfiber från bandet (104123 kr)
- 4:34 väntar på kolfiber från bandet (104123 kr)
- 4:42 väntar på kolfiber från bandet (104123 kr)
- 4:50 väntar på kolfiber från bandet (104123 kr)
- 4:58 väntar på kolfiber från bandet (104123 kr)
- 5:06 väntar på kolfiber från bandet (104123 kr)
- 5:14 väntar på kolfiber från bandet (104123 kr)
- 5:22 väntar på kolfiber från bandet (104123 kr)
- 5:30 väntar på kolfiber från bandet (104123 kr)
- 5:38 väntar på kolfiber från bandet (104123 kr)
- 5:46 väntar på kolfiber från bandet (104123 kr)
- 5:54 väntar på kolfiber från bandet (104123 kr)
- 6:02 väntar på kolfiber från bandet (104123 kr)
- 6:10 väntar på kolfiber från bandet (104123 kr)
- 6:18 väntar på kolfiber från bandet (104123 kr)
- 6:26 väntar på kolfiber från bandet (104123 kr)
- 6:34 väntar på kolfiber från bandet (104123 kr)
- 6:42 väntar på kolfiber från bandet (104123 kr)
- 6:50 väntar på kolfiber från bandet (104123 kr)
- 6:58 väntar på kolfiber från bandet (104123 kr)
- 7:06 väntar på kolfiber från bandet (104123 kr)
- 7:14 väntar på kolfiber från bandet (104123 kr)
- 7:22 väntar på kolfiber från bandet (104123 kr)
- 7:30 väntar på kolfiber från bandet (104123 kr)
- 7:30 kolfiberstol gick inte att printa – tar nästa (104123 kr)
- 7:30 öppnar Alis butik – sälja (104123 kr)
- 7:32 tjänar pengar till väntar på flaskhalsen för vindkraft: 104123/104163 kr → printar designvas i röd petg (1185 kr) (104123 kr)
- 7:38 gå till skrivaren (29 m) (104123 kr)
- 7:39 printar Designvas i röd PETG (104123 kr)
- 7:44 tar ut 1 st ur skrivaren (104123 kr)
- 7:50 gå till Ali (29 m) (104123 kr)
- 7:50 öppnar Alis butik – sälja (104123 kr)
- 7:52 säljer hos Ali: +1185 kr (105308 kr)
- 7:55 öppnar Alis butik – köpa vindkraftverk (105308 kr)
- 7:57 köper vindkraft för 6050 kr (99258 kr)
- 8:03 gå till skrivaren (23 m) (99258 kr)
- 8:04 printar Vindkraftverk (4 delar) (99258 kr)
- 8:16 plockar 4 skräp på tippen (bär max 16) (99258 kr)
- 8:18 gå till kvarnen (11 m) (99258 kr)
- 8:47 plockar 7 skräp på tippen (bär max 16) (99258 kr)
- 8:50 gå till kvarnen (13 m) (99258 kr)
- 9:23 plockar 12 skräp på tippen (bär max 16) (99258 kr)
- 9:26 gå till kvarnen (16 m) (99258 kr)
- 9:50 gå till skrivaren (7 m) (99258 kr)
- 9:50 tar ut 1 st ur skrivaren (99258 kr)
- 9:58 gå till platsen för vindkraftverk (40 m) (99258 kr)
- 9:59 ställer ut vindkraftverk (99258 kr)
- 10:14 gå till Ali (45 m) (99258 kr)
- 10:14 öppnar Alis butik – köpa guldskrivaren (99258 kr)
- 10:16 köper guldskrivare för 4200 kr (95058 kr)
- 10:24 gå till en tunna (37 m) (95058 kr)
- 10:29 gå till PETG-kvarnen (15 m) (95058 kr)
- 10:29 tömmer det tunga i PETG-kvarnen (95058 kr)
- 10:30 gå till skrivaren (3 m) (95058 kr)
- 10:32 printar Guldskrivaren (5 delar) (95058 kr)
- 10:47 gå till en tunna (14 m) (95058 kr)
- 10:50 gå till PETG-kvarnen (10 m) (95058 kr)
- 10:50 tömmer det tunga i PETG-kvarnen (95058 kr)
- 10:58 gå till skrivaren (4 m) (95058 kr)
- 10:58 tar ut 1 st ur skrivaren (95058 kr)
- 11:00 gå till platsen för guldskrivaren (10 m) (95058 kr)
- 11:01 ställer ut guldskrivaren (95058 kr)
- 11:16 gå till huset (41 m) (95058 kr)
- 11:29 popup: "FORTSÄTT" (95058 kr)
- 11:36 gå till sängen (22 m) (95058 kr)

</details>

## Dag 20

| Tid | Källa | Vem | Text |
|---|---|---|---|
| 11:38 | vara | ali | n2_hjalm |
| 11:38 | väntar | info:guld | Nu blir det riktigt kallt. Utan vedkamin och hela väggar fryser du. |
| 11:38 | händelse | malKlart | id=sov19 del=Dag 19 – Ett riktigt hus nasta=m20-printa-stall-ut |
| 11:38 | poolTom | du | 4 repliker använda |
| 11:38 | MÅL |  | Printa och ställ ut en vedkamin |
| 0:01 | händelse | dagenBorjar | dag=20 |
| 0:01 | meddelande | du | Dag 20. 2 dagar till jul. Utan kamin får mamma rätt. |
| 0:01 | dagbokkort | du | Kylan · Dag 20. 2 dagar till jul. Utan kamin får mamma rätt. |
| 0:01 | röst | du | Dag 20. 2 dagar till jul. Kylan. Utan kamin får mamma rätt. · STORY |
| 0:03 | paket |  | sms |
| 0:03 | väntar | rolf | Ett litet uppdrag. Inget farligt. Nästan inget farligt. Lådan. /R |
| 0:07 | notis | nytt | Ali vill ha idag: Cykelhjälm i PETG – +50 % hela dagen (1995 kr just nu)🖥️ Webbshopen: 2 paket levererade · +743 kr📈 Igår: 7 printat · 8 sålt |
| 0:07 | händelse | morgonkortStangt | dag=20 |
| 0:07 | struken | kedja | d20 |
| 0:07 | väntar | du | Printa och ställ ut en vedkamin. |
| 0:11 | målruta |  | Printa och ställ ut en vedkamin |
| 0:13 | sak | du | Printa och ställ ut en vedkamin. |
| 0:13 | pil |  | Printa och ställ ut en vedkamin |
| 0:13 | röst | du | Printa och ställ ut en vedkamin. · MÅL |
| 0:13 | nick |  | nick:125 |
| 0:15 | klar | du | Printa och ställ ut en vedkamin. |
| 0:15 | struken | info:guld | Nu blir det riktigt kallt. Utan vedkamin och hela väggar fryser du. |
| 0:15 | struken | notis:🌇 Klockan är 21. Ali slår igen luckan.  | 🌇 Klockan är 21. Ali slår igen luckan. Dagens jobb är klart – gå in i skjulet och sov i sängen. |
| 0:15 | väntar | foto | Ett hus |
| 0:15 | paket |  | tanke |
| 0:15 | tanke | du | Ett riktigt hus. Vänta bara tills mamma ser det. |
| 0:15 | väntar | du | Ett riktigt hus. Vänta bara tills mamma ser det. |
| 0:17 | väntar | info:guld | Göran lämnade en blank skruv på säljlådan. |
| 0:17 | sak | info:guld | Göran lämnade en blank skruv på säljlådan. |
| 0:17 | kvitto-visas | info:guld | Göran lämnade en blank skruv på säljlådan. |
| 0:17 | toast | guld | Göran lämnade en blank skruv på säljlådan. |
| 0:19 | klar | info:guld | Göran lämnade en blank skruv på säljlådan. |
| 0:32 | sak | foto | Ett hus |
| 0:32 | foto | du | Ett hus |
| 0:35 | klar | foto | Ett hus |
| 0:39 | poolTom | ali | 4 repliker använda |
| 0:40 | skratt | du | däcket rullar iväg |
| 0:41 | skratt | du | Alis dyr-pling |
| 0:41 | händelse | kopt | sak=kamin |
| 0:43 | sak | mamma | Du har flyttat in i ett hus. Med trappa. Jag har köpt en dörrmatta. Det står "Välkommen" på den. Pappa ville att det skulle stå "Gå hem". Jag sa nej. |
| 0:43 | sms | mamma | Du har flyttat in i ett hus. Med trappa. Jag har köpt en dörrmatta. Det står "Välkommen" på den. Pappa ville att det skulle stå "Gå hem". Jag sa nej. |
| 0:43 | sms-bubbla | mamma | Du har flyttat in i ett hus. Med trappa. Jag har köpt en dörrmatta. Det står "Välkommen" på den. Pappa ville att det skulle stå "Gå hem". Jag sa nej. |
| 0:43 | röst | mamma | Du har flyttat in i ett hus. Med trappa. Jag har köpt en dörrmatta. Det står "Välkommen" på den. Pappa ville att det skulle stå "Gå hem". Jag sa nej. · STORY |
| 0:47 | skratt | du | falsk tuta |
| 0:48 | händelse | printStart | sak=kamin |
| 0:53 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 0:55 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 0:55 | väntar | notis:Skrivare L: Tornet är tomt – mal mer så  | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 0:56 | klar | mamma | Du har flyttat in i ett hus. Med trappa. Jag har köpt en dörrmatta. Det står "Välkommen" på den. Pappa ville att det skulle stå "Gå hem". Jag sa nej. |
| 0:57 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 0:57 | struken | notis | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 1:00 | väntar | värld:Mjau. | Mjau. |
| 1:05 | sak | du | Ett riktigt hus. Vänta bara tills mamma ser det. |
| 1:05 | notis | tanke | 💭 Ett riktigt hus. Vänta bara tills mamma ser det. |
| 1:05 | röst | du | Ett riktigt hus. Vänta bara tills mamma ser det. · STORY |
| 1:08 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 1:08 | struken | notis | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 1:09 | klar | du | Ett riktigt hus. Vänta bara tills mamma ser det. |
| 1:10 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 1:13 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 1:14 | toast | guld | ✅ |
| 1:14 | händelse | printKlar | sak=kamin n=1 |
| 1:16 | skratt | du | kvarnen spottar |
| 1:18 | sak | notis:Skrivare L: Tornet är tomt – mal mer så  | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 1:18 | notis | fel | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 1:20 | händelse | tagitUrPrint | sak=kamin n=1 |
| 1:20 | klar | notis:Skrivare L: Tornet är tomt – mal mer så  | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 1:22 | struken | värld:Mjau. | Mjau. |
| 1:28 | händelse | placerat | sak=kamin |
| 1:28 | händelse | malKlart | id=m20-printa-stall-ut del=Dag 20 – Kylan nasta=m20-stall-in-kamin |
| 1:28 | händelse | malKlart | id=m20-stall-in-kamin del=Dag 20 – Kylan nasta=sov20 |
| 1:28 | paket |  | lapp |
| 1:28 | lapp | 📔 Dagbok | Dag 20 är slut. Jag finns inte på riktigt här än. |
| 1:28 | meddelande | du | Dag 20 är slut. Jag finns inte på riktigt här än. |
| 1:28 | dagbokkort | du | Dag 20 är slut. Jag finns inte på riktigt här än. |
| 1:28 | målruta |  | Klart för idag – sov när du vill |
| 1:28 | MÅL |  | Klart för idag – sov när du vill |
| 1:28 | röst | du | Dag 20. 2 dagar till jul. Dag 20 är slut. Jag finns inte på riktigt här än. · STORY |
| 1:35 | händelse | brevLast | id=kvall20 |
| 1:35 | struken | notis | 🌇 Klockan är 21. Ali slår igen luckan. Dagens jobb är klart – gå in i skjulet och sov i sängen. |
| 1:37 | sak | du | (nytt mål i rutan) |
| 1:37 | pil |  | Klart för idag – sov när du vill |
| 1:37 | klar | du | (nytt mål i rutan) |

<details><summary>Botens handlingar dag 20</summary>

- 0:00 — dag 20 börjar — (95801 kr)
- 0:07 popup: "FORTSÄTT" (95801 kr)
- 0:24 gå till Rolfs postlåda (31 m) (95801 kr)
- 0:32 panel: "En lapp från Rolf
Lite olaglig" (95801 kr)
- 0:39 gå till Ali (31 m) (95801 kr)
- 0:39 öppnar Alis butik – köpa receptet vedkamin (95801 kr)
- 0:41 köper kamin för 9750 kr (86051 kr)
- 0:47 gå till skrivaren (23 m) (86051 kr)
- 0:48 printar Vedkamin (86051 kr)
- 1:02 plockar 4 skräp på tippen (bär max 16) (86051 kr)
- 1:05 gå till kvarnen (12 m) (86051 kr)
- 1:20 gå till skrivaren (7 m) (86051 kr)
- 1:20 tar ut 1 st ur skrivaren (86051 kr)
- 1:27 gå till platsen för vedkamin (22 m) (86051 kr)
- 1:28 ställer ut vedkamin (86051 kr)
- 1:35 popup: "FORTSÄTT" (86051 kr)
- 1:39 gå till sängen (2 m) (86051 kr)

</details>

## Dag 21

| Tid | Källa | Vem | Text |
|---|---|---|---|
| 1:42 | vara | ali | n2_vas |
| 1:42 | händelse | malKlart | id=sov20 del=Dag 20 – Kylan nasta=m21-bli-folkbokford |
| 1:42 | MÅL |  | Bli folkbokförd – tavlan vid vägen |
| 0:01 | händelse | dagenBorjar | dag=21 |
| 0:01 | meddelande | du | Dag 21. 1 dag till jul. Utan adress finns jag inte, hur fint huset än är. |
| 0:01 | dagbokkort | du | Folkbokförd · Dag 21. 1 dag till jul. Utan adress finns jag inte, hur fint huset än är. |
| 0:01 | röst | du | Dag 21. 1 dag till jul. Folkbokförd. Utan adress finns jag inte, hur fint huset än är. · STORY |
| 0:09 | notis | nytt | Ali vill ha idag: Designvas i röd PETG – +50 % hela dagen (1185 kr just nu)📈 Igår: 1 printat · 0 sålt |
| 0:09 | händelse | morgonkortStangt | dag=21 |
| 0:09 | paket |  | toast |
| 0:09 | väntar | notis:🔥 Varmt och skönt i skjulet trots kylan | 🔥 Varmt och skönt i skjulet trots kylan. |
| 0:09 | struken | kedja | d21 |
| 0:09 | väntar | du | tillbakablick paketet |
| 0:10 | tillbakablick | du | paketet |
| 0:13 | väntar | du | Bli folkbokförd – tavlan vid vägen. |
| 0:13 | målruta |  | Bli folkbokförd – tavlan vid vägen |
| 0:14 | sak | du | Bli folkbokförd – tavlan vid vägen. |
| 0:14 | pil |  | Bli folkbokförd – tavlan vid vägen |
| 0:14 | röst | du | Bli folkbokförd – tavlan vid vägen. · MÅL |
| 0:14 | tanke | du | Det drar. Från överallt. |
| 0:14 | väntar | du | Det drar. Från överallt. |
| 0:16 | väntar | info:guld | 📮 Du är folkbokförd! Soptippsvägen 1 är din adress. |
| 0:16 | paket |  | sms |
| 0:16 | väntar | rolf | Grattis granne. Nu e du på riktigt. Ja tar me grillen på lördag. Kajsa oxå. /R |
| 0:16 | paket |  | sms |
| 0:16 | väntar | bror | Pappa sa "fint jobbat". Två gånger. Han har aldrig sagt det två gånger. Grattis lillebror. Eller vad du nu är. Du vet. |
| 0:16 | händelse | malKlart | id=m21-bli-folkbokford del=Dag 21 – Folkbokförd nasta=sov21 |
| 0:16 | paket |  | lapp |
| 0:16 | väntar | du | Dag 21 är slut. Nu vet Skatteverket att jag bor HÄR. I morgon är det julafton. |
| 0:16 | struken | du | Det drar. Från överallt. |
| 0:16 | MÅL |  | Klart för idag – sov när du vill |
| 0:17 | klar | du | Bli folkbokförd – tavlan vid vägen. |
| 0:17 | sak | info:guld | 📮 Du är folkbokförd! Soptippsvägen 1 är din adress. |
| 0:17 | kvitto-visas | info:guld | 📮 Du är folkbokförd! Soptippsvägen 1 är din adress. |
| 0:17 | toast | guld | 📮 Du är folkbokförd! Soptippsvägen 1 är din adress. |
| 0:19 | målruta |  | Klart för idag – sov när du vill |
| 0:19 | klar | info:guld | 📮 Du är folkbokförd! Soptippsvägen 1 är din adress. |
| 0:20 | kvittens-bock |  | ✓ Bli folkbokförd – tavlan vid vägen |
| 0:20 | väntar | notis:📔 Prestation: Posten hittar hit · +3 re | 📔 Prestation: Posten hittar hit · +3 respekt |
| 0:21 | sak | du | (nytt mål i rutan) |
| 0:21 | pil |  | Klart för idag – sov när du vill |
| 0:21 | klar | du | (nytt mål i rutan) |
| 0:23 | väntar | notis:🌇 Klockan är 21. Ali slår igen luckan.  | 🌇 Klockan är 21. Ali slår igen luckan. Dagens jobb är klart – gå in i skjulet och sov i sängen. |
| 0:23 | struken | notis:🔥 Varmt och skönt i skjulet trots kylan | 🔥 Varmt och skönt i skjulet trots kylan. |

<details><summary>Botens handlingar dag 21</summary>

- 0:00 — dag 21 börjar — (86051 kr)
- 0:09 popup: "FORTSÄTT" (86051 kr)
- 0:16 gå till tavlan vid vägen (12 m) (86051 kr)
- 0:16 blir folkbokförd (78851 kr)
- 0:26 gå till sängen (11 m) (78851 kr)

</details>

## Dag 22

| Tid | Källa | Vem | Text |
|---|---|---|---|
| 0:28 | vara | ali | n2_hjalm |
| 0:28 | händelse | malKlart | id=sov21 del=Dag 21 – Folkbokförd nasta=m22-printa-julbordet |
| 0:28 | händelse | malKlart | id=m22-printa-julbordet del=Dag 22 – Jul på Soptippsvägen 1 nasta=m22-tand-skylten |
| 0:29 | MÅL |  | Skylten med mitt namn på dörren |
| 0:30 | väntar | info:guld | Göran lämnade en blank skruv på säljlådan. |
| 0:01 | händelse | dagenBorjar | dag=22 |
| 0:01 | meddelande | du | Julafton. Utan skylt på dörren kör mamma hem med mig. |
| 0:01 | dagbokkort | du | Jul på Soptippsvägen 1 · Julafton. Utan skylt på dörren kör mamma hem med mig. |
| 0:01 | röst | du | Julafton. Jul på Soptippsvägen 1. Utan skylt på dörren kör mamma hem med mig. · STORY |
| 0:08 | notis | nytt | Ali vill ha idag: Cykelhjälm i PETG – +50 % hela dagen (1995 kr just nu)📈 Igår: 0 printat · 0 sålt |
| 0:08 | händelse | morgonkortStangt | dag=22 |
| 0:08 | struken | kedja | d22 |
| 0:08 | väntar | du | Skylten med mitt namn på dörren. |
| 0:12 | målruta |  | Skylten med mitt namn på dörren |
| 0:13 | väntar | mamma | Jag kommer kl 15 och hämtar dig. Pappa kör. Var redo. |
| 0:14 | sak | du | Skylten med mitt namn på dörren. |
| 0:14 | pil |  | Skylten med mitt namn på dörren |
| 0:14 | röst | du | Skylten med mitt namn på dörren. · MÅL |
| 0:16 | klar | du | Skylten med mitt namn på dörren. |
| 0:16 | struken | info:guld | Göran lämnade en blank skruv på säljlådan. |
| 0:16 | struken | notis:📔 Prestation: Posten hittar hit · +3 re | 📔 Prestation: Posten hittar hit · +3 respekt |
| 0:16 | struken | notis:🌇 Klockan är 21. Ali slår igen luckan.  | 🌇 Klockan är 21. Ali slår igen luckan. Dagens jobb är klart – gå in i skjulet och sov i sängen. |
| 0:23 | väntar | info:guld | Skylten sitter på dörren. Simulering, Soptippsvägen 1. |
| 0:23 | sak | info:guld | Skylten sitter på dörren. Simulering, Soptippsvägen 1. |
| 0:23 | kvitto-visas | info:guld | Skylten sitter på dörren. Simulering, Soptippsvägen 1. |
| 0:23 | toast | guld | Skylten sitter på dörren. Simulering, Soptippsvägen 1. |
| 0:23 | händelse | malKlart | id=m22-tand-skylten del=Dag 22 – Jul på Soptippsvägen 1 nasta=m22-oppna-dorren-gasterna |
| 0:23 | väntar | du | Ta emot mamma. |
| 0:23 | MÅL |  | Ta emot mamma |
| 0:25 | klar | info:guld | Skylten sitter på dörren. Simulering, Soptippsvägen 1. |
| 0:25 | målruta |  | Ta emot mamma |
| 0:27 | kvittens-bock |  | ✓ Skylten med mitt namn på dörren |
| 0:27 | sak | du | Ta emot mamma. |
| 0:27 | pil |  | Ta emot mamma |
| 0:27 | röst | du | Ta emot mamma. · MÅL |
| 0:30 | klar | du | Ta emot mamma. |
| 0:30 | morgonkort | 🏆 Du är hemma | 🏆 Du är hemma · Du klarade det på dag 22. Från hobo dweller vid en soptipp till godsägare och folkbokförd. Mamma är imponerad. Pappa log. Spelet fortsätter – bygg vidare så länge du vill. |
| 0:39 | väntar | du | tillbakablick vadet |
| 0:44 | sak | du | Dag 21 är slut. Nu vet Skatteverket att jag bor HÄR. I morgon är det julafton. |
| 0:44 | lapp | 📔 Dagbok | Dag 21 är slut. Nu vet Skatteverket att jag bor HÄR. I morgon är det julafton. |
| 0:44 | meddelande | du | Dag 21 är slut. Nu vet Skatteverket att jag bor HÄR. I morgon är det julafton. |
| 0:44 | dagbokkort | du | Dag 21 är slut. Nu vet Skatteverket att jag bor HÄR. I morgon är det julafton. |
| 0:44 | röst | du | Julafton. Dag 21 är slut. Nu vet Skatteverket att jag bor HÄR. I morgon är det julafton. · STORY |
| 0:51 | händelse | brevLast | id=kvall21 |
| 0:51 | klar | du | Dag 21 är slut. Nu vet Skatteverket att jag bor HÄR. I morgon är det julafton. |
| 0:57 | tillbakablick | du | vadet |
| 0:58 | väntar | mamma | Det är du alltid. |
| 1:00 | väntar | info:bra | 🚗 En bil svänger in vid grinden. |
| 1:01 | sak | info:bra | 🚗 En bil svänger in vid grinden. |
| 1:01 | kvitto-visas | info:bra | 🚗 En bil svänger in vid grinden. |
| 1:01 | toast | bra | 🚗 En bil svänger in vid grinden. |
| 1:03 | klar | info:bra | 🚗 En bil svänger in vid grinden. |
| 1:12 | sak | mamma | Jag kommer kl 15 och hämtar dig. Pappa kör. Var redo. |
| 1:12 | sms | mamma | Jag kommer kl 15 och hämtar dig. Pappa kör. Var redo. |
| 1:12 | sms-bubbla | mamma | Jag kommer kl 15 och hämtar dig. Pappa kör. Var redo. |
| 1:12 | röst | mamma | Jag kommer kl 15 och hämtar dig. Pappa kör. Var redo. · STORY |
| 1:16 | klar | mamma | Jag kommer kl 15 och hämtar dig. Pappa kör. Var redo. |
| 1:24 | sak | mamma | Det är du alltid. |
| 1:24 | röst | mamma | Det är du alltid. · STORY |
| 1:27 | klar | mamma | Det är du alltid. |
| 1:44 | tanke | du | Jag ser min andedräkt. Inomhus. |
| 1:44 | väntar | du | Jag ser min andedräkt. Inomhus. |
| 1:44 | sak | du | Jag ser min andedräkt. Inomhus. |
| 1:44 | notis | tanke | 💭 Jag ser min andedräkt. Inomhus. |
| 1:44 | röst | du | Jag ser min andedräkt. Inomhus. · REAKTION |
| 1:47 | klar | du | Jag ser min andedräkt. Inomhus. |
| 1:57 | sak | bror | Pappa sa "fint jobbat". Två gånger. Han har aldrig sagt det två gånger. Grattis lillebror. Eller vad du nu är. Du vet. |
| 1:57 | sms | bror | Pappa sa "fint jobbat". Två gånger. Han har aldrig sagt det två gånger. Grattis lillebror. Eller vad du nu är. Du vet. |
| 1:57 | sms-bubbla | bror | Pappa sa "fint jobbat". Två gånger. Han har aldrig sagt det två gånger. Grattis lillebror. Eller vad du nu är. Du vet. |
| 1:57 | röst | bror | Pappa sa "fint jobbat". Två gånger. Han har aldrig sagt det två gånger. Grattis lillebror. Eller vad du nu är. Du vet. · STORY |
| 2:07 | klar | bror | Pappa sa "fint jobbat". Två gånger. Han har aldrig sagt det två gånger. Grattis lillebror. Eller vad du nu är. Du vet. |
| 2:39 | skratt | du | falsk tuta |
| 3:08 | röst | rolf | Goddag … ja. Ja har kavaj. Fråga int. · STORY |
| 3:12 | röst | ali | Habibi. Roboten säger god jul. Jag lärde den. Säg inget till min fru – hon är här. · STORY |
| 3:22 | röst | berattare | Lasse har en ny termos. Den håller värmen i nitton timmar. Han har testat. Gunnar säger: "Vanilj." · STORY |
| 3:33 | röst | berattare | Bengt-Åke ställer en gran från egen skog i hörnet. Han går inte. · STORY |
| 3:38 | röst | berattare | HMPF. God jul. · STORY |
| 3:44 | röst | bror | Den är inte från mig. Den låg utanför. Typ. · STORY |
| 3:50 | röst | mamma | Jag skulle hämta dig. · STORY |
| 3:55 | röst | mamma | Det är så STÄDAT! · STORY |
| 3:59 | röst | mamma | Vi stannar. Pappa, hämta granen. · STORY |
| 4:03 | röst | pappa | Jaha. · STORY |
| 4:07 | röst | pappa | Taket håller i alla fall. · STORY |
| 4:11 | röst | pappa | Ja ja. Det här kunde varit värre. · STORY |
| 4:15 | röst | berattare | Skinkan från augusti. Granris i en vas. · STORY |
| 4:19 | röst | berattare | Göran sitter på fönsterblecket och tittar på skinkan. · STORY |
| 4:24 | röst | berattare | Rolf på trummor med två kastruller. Lasse och Gunnar på printade elgitarrer. Det är högt. Det är bra. · STORY |
| 4:31 | röst | berattare | Mamma har med sig en prinsesstårta i stället för skinkan från augusti. · STORY |
| 4:36 | röst | rolf | …Dä ä fredag nånstans. · STORY |
| 4:39 | röst | pappa | Ja ska fatta mej kort. · STORY |
| 4:44 | röst | pappa | Scania byggde sin första lastbil nittonhundraelva. · STORY |
| 4:49 | röst | pappa | Djurgården har vunnit SM tolv gånger. · STORY |
| 4:54 | röst | pappa | Skinkan har legat i frysen sen augusti. · STORY |
| 4:59 | röst | pappa | Ja … är stolt över dej. Aha. Vad lugnt då. · STORY |
| 5:04 | röst | berattare | Mamma gråter. · STORY |
| 5:09 | paket |  | replik → lapp → ge |
| 5:09 | väntar | mamma | Den här är till dig. Öppna den nu. |
| 5:09 | väntar | mamma | Du sa att du skulle fira jul ensam. Jag är glad att du ljög. Kram, Mamma |
| 5:09 | väntar |  | (läget ändras) |
| 5:09 | händelse | malKlart | id=m22-oppna-dorren-gasterna del=Dag 22 – Jul på Soptippsvägen 1 nasta=steg133 |
| 5:09 | tanke | du | Jag fryser om tårna. |
| 5:09 | väntar | du | Jag fryser om tårna. |
| 5:09 | struken | du | Jag fryser om tårna. |
| 5:09 | väntar | du | . |
| 5:09 | MÅL |  | (inga mål) |
| 5:09 | sak | du | . |
| 5:09 | röst | du | . · MÅL |
| 5:11 | klar | du | . |
| 5:13 | kvittens-bock |  | ✓ Ta emot mamma |
| 5:14 | väntar | info:guld | 🌲 Marken runt tippen är din! Gärdesgården har flyttats – där får du ställa saker nu. |
| 5:14 | paket |  | sms |
| 5:14 | väntar | rolf | Marken runt tippen e din. Bengt-Åke sa att han e glad att bli av me den. Han kalla den "stenåkern". Ja kallar den "framtiden". /R |
| 5:14 | sak | info:guld | 🌲 Marken runt tippen är din! Gärdesgården har flyttats – där får du ställa saker nu. |
| 5:14 | kvitto-visas | info:guld | 🌲 Marken runt tippen är din! Gärdesgården har flyttats – där får du ställa saker nu. |
| 5:14 | toast | guld | 🌲 Marken runt tippen är din! Gärdesgården har flyttats – där får du ställa saker nu. |
| 5:16 | klar | info:guld | 🌲 Marken runt tippen är din! Gärdesgården har flyttats – där får du ställa saker nu. |
| 5:18 | väntar | info:guld | 🗑️ Tippen är din. Rolf kör åt dig nu. |
| 5:18 | paket |  | sms |
| 5:18 | väntar | rolf | Du äger tippen nu. Ja kör fortfarande sopbilen. Men nu e du chefen. Rudolf ä sur. Hä hä. Kajsa bryr sej int. /R |
| 5:18 | sak | info:guld | 🗑️ Tippen är din. Rolf kör åt dig nu. |
| 5:18 | kvitto-visas | info:guld | 🗑️ Tippen är din. Rolf kör åt dig nu. |
| 5:18 | toast | guld | 🗑️ Tippen är din. Rolf kör åt dig nu. |
| 5:20 | klar | info:guld | 🗑️ Tippen är din. Rolf kör åt dig nu. |
| 5:22 | väntar | info:guld | 🌲 Backen i norr är din! Gärdesgården har flyttats – där får du ställa saker nu. |
| 5:22 | sak | info:guld | 🌲 Backen i norr är din! Gärdesgården har flyttats – där får du ställa saker nu. |
| 5:22 | kvitto-visas | info:guld | 🌲 Backen i norr är din! Gärdesgården har flyttats – där får du ställa saker nu. |
| 5:22 | toast | guld | 🌲 Backen i norr är din! Gärdesgården har flyttats – där får du ställa saker nu. |
| 5:23 | väntar | foto | Alla |
| 5:23 | paket |  | tanke |
| 5:23 | tanke | du | Alla är här. Hos mig. |
| 5:23 | väntar | du | Alla är här. Hos mig. |
| 5:23 | väntar | värld:HMPF. Backen. Den är brant. De | HMPF. Backen. Den är brant. Den passar er. |
| 5:24 | klar | info:guld | 🌲 Backen i norr är din! Gärdesgården har flyttats – där får du ställa saker nu. |
| 5:25 | väntar | notis:📔 Prestation: Jul på tippen · +3 respek | 📔 Prestation: Jul på tippen · +3 respekt |
| 5:25 | paket |  | sms |
| 5:25 | väntar | chefen | Rudolf. Jag går i pension. Espressomaskinen står på din bänk. Inga böter. |
| 5:25 | väntar | kjelle | Kjelle här, direkt från julfesten! Gunnar, du är här. Säg något till lyssnarna! |
| 5:25 | radio | kjelle | Kjelle här, direkt från julfesten! Gunnar, du är här. Säg något till lyssnarna! |
| 5:25 | skratt | du | Radio-Kjelle |
| 5:31 | väntar | gunnar | Vanilj. |
| 5:31 | radio | gunnar | Vanilj. |
| 5:31 | skratt | du | Gunnar svarar |
| 5:32 | händelse | printStart | sak=n2_hjalm |
| 5:36 | sak | mamma | Den här är till dig. Öppna den nu. |
| 5:36 | notis |  | Mamma: ”Den här är till dig. Öppna den nu.” |
| 5:36 | röst | mamma | Den här är till dig. Öppna den nu. · STORY |
| 5:36 | toast | guld | ✅ |
| 5:36 | händelse | printKlar | sak=n2_hjalm n=18 |
| 5:37 | händelse | tagitUrPrint | sak=n2_hjalm n=1 |
| 5:39 | klar | mamma | Den här är till dig. Öppna den nu. |
| 5:40 | händelse | printStart | sak=nyckelring |
| 5:41 | toast | guld | ✅ |
| 5:41 | händelse | printKlar | sak=nyckelring n=30 |
| 5:42 | nej | du | Ta ut nyckelring |
| 5:42 | toast | fickskylt | Fulla fickor |
| 5:42 | fullaFickor | du | nyckelring |
| 5:42 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 5:43 | struken | värld:HMPF. Backen. Den är brant. De | HMPF. Backen. Den är brant. Den passar er. |
| 5:44 | händelse | printStart | sak=nyckelring |
| 5:45 | toast | guld | ✅ |
| 5:45 | händelse | printKlar | sak=nyckelring n=31 |
| 5:45 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 5:48 | sak | mamma | Du sa att du skulle fira jul ensam. Jag är glad att du ljög. Kram, Mamma |
| 5:48 | lapp | Brev från Mamma | Du sa att du skulle fira jul ensam. Jag är glad att du ljög. Kram, Mamma |
| 5:48 | röst | mamma | Du sa att du skulle fira jul ensam. Jag är glad att du ljög. Kram, Mamma · STORY |
| 5:51 | ljud | kajsa | Mjau |
| 5:54 | klar | mamma | Du sa att du skulle fira jul ensam. Jag är glad att du ljög. Kram, Mamma |
| 5:54 | händelse | brevLast | id=mammajul |
| 6:03 | sak |  | (läget ändras) |
| 6:03 | paket |  | sms |
| 6:03 | väntar | pappa | 👍 ❤️ |
| 6:03 | klar |  | (läget ändras) |
| 6:06 | händelse | printStart | sak=pall |
| 6:07 | sak | foto | Alla |
| 6:07 | foto | du | Alla |
| 6:09 | toast | guld | ✅ |
| 6:09 | händelse | printKlar | sak=pall n=28 |
| 6:09 | klar | foto | Alla |
| 6:10 | nej | du | Ta ut pall |
| 6:10 | toast | fickskylt | Fulla fickor |
| 6:10 | fullaFickor | du | pall |
| 6:11 | händelse | tagitUrPrint | sak=pall n=1 |
| 6:13 | händelse | printStart | sak=pall |
| 6:17 | toast | guld | ✅ |
| 6:17 | händelse | printKlar | sak=pall n=29 |
| 6:24 | sak | kjelle | Kjelle här, direkt från julfesten! Gunnar, du är här. Säg något till lyssnarna! |
| 6:24 | notis |  | 📻 Radio Tippen: Kjelle här, direkt från julfesten! Gunnar, du är här. Säg något till lyssnarna! |
| 6:24 | röst | kjelle | Kjelle här, direkt från julfesten! Gunnar, du är här. Säg något till lyssnarna! · REAKTION |
| 6:25 | händelse | tagitUrPrint | sak=pall n=1 |
| 6:31 | klar | kjelle | Kjelle här, direkt från julfesten! Gunnar, du är här. Säg något till lyssnarna! |
| 6:39 | webb | du | packade 1 n2_hjalm |
| 6:47 | sak | du | Alla är här. Hos mig. |
| 6:47 | notis | tanke | 💭 Alla är här. Hos mig. |
| 6:47 | röst | du | Alla är här. Hos mig. · STORY |
| 6:48 | webb | du | packade 2 nyckelring |
| 6:50 | klar | du | Alla är här. Hos mig. |
| 6:50 | skratt | du | däcket rullar iväg |
| 6:57 | webb | du | packade 2 pall |
| 6:57 | skratt | du | falsk tuta |
| 7:05 | sak | notis:📔 Prestation: Jul på tippen · +3 respek | 📔 Prestation: Jul på tippen · +3 respekt |
| 7:05 | notis |  | 📔 Prestation: Jul på tippen · +3 respekt |
| 7:08 | klar | notis:📔 Prestation: Jul på tippen · +3 respek | 📔 Prestation: Jul på tippen · +3 respekt |
| 7:12 | väntar | info:bra | 📦 Paketet till Agneta på biblioteket ligger i postlådan – Rolf tar det till posten |
| 7:12 | sak | info:bra | 📦 Paketet till Agneta på biblioteket ligger i postlådan – Rolf tar det till posten |
| 7:12 | kvitto-visas | info:bra | 📦 Paketet till Agneta på biblioteket ligger i postlådan – Rolf tar det till posten |
| 7:12 | toast | bra | 📦 Paketet till Agneta på biblioteket ligger i postlådan – Rolf tar det till posten |
| 7:12 | väntar | info:bra | 📦 Paketet till Majvor i Nässjö ligger i postlådan – Rolf tar det till posten |
| 7:13 | struken | info:bra | 📦 Paketet till Majvor i Nässjö ligger i postlådan – Rolf tar det till posten |
| 7:13 | väntar | info:bra | 📦 Paketet till Lasse på bussdepån ligger i postlådan – Rolf tar det till posten |
| 7:13 | tanke | du | Strumpor. Jag borde ha lyssnat på mamma. |
| 7:13 | väntar | du | Strumpor. Jag borde ha lyssnat på mamma. |
| 7:14 | klar | info:bra | 📦 Paketet till Agneta på biblioteket ligger i postlådan – Rolf tar det till posten |
| 7:14 | sak | info:bra | 📦 Paketet till Lasse på bussdepån ligger i postlådan – Rolf tar det till posten |
| 7:14 | kvitto-visas | info:bra | 📦 Paketet till Lasse på bussdepån ligger i postlådan – Rolf tar det till posten |
| 7:14 | toast | bra | 📦 Paketet till Lasse på bussdepån ligger i postlådan – Rolf tar det till posten |
| 7:16 | klar | info:bra | 📦 Paketet till Lasse på bussdepån ligger i postlådan – Rolf tar det till posten |
| 7:18 | sak | du | Strumpor. Jag borde ha lyssnat på mamma. |
| 7:18 | notis | tanke | 💭 Strumpor. Jag borde ha lyssnat på mamma. |
| 7:18 | röst | du | Strumpor. Jag borde ha lyssnat på mamma. · REAKTION |
| 7:18 | händelse | printStart | sak=n3_stol |
| 7:21 | klar | du | Strumpor. Jag borde ha lyssnat på mamma. |
| 7:25 | toast | guld | ✅ |
| 7:25 | händelse | printKlar | sak=n3_stol n=22 |
| 7:26 | händelse | tagitUrPrint | sak=n3_stol n=1 |
| 7:30 | sak | chefen | Rudolf. Jag går i pension. Espressomaskinen står på din bänk. Inga böter. |
| 7:30 | sms | chefen | Rudolf. Jag går i pension. Espressomaskinen står på din bänk. Inga böter. |
| 7:30 | sms-bubbla | chefen | Rudolf. Jag går i pension. Espressomaskinen står på din bänk. Inga böter. |
| 7:30 | röst | chefen | Rudolf. Jag går i pension. Espressomaskinen står på din bänk. Inga böter. · STORY |
| 7:33 | poolTom | ali | 4 repliker använda |
| 7:35 | aliSalt | ali | 16000 |
| 7:35 | aliSalt | ali | 6 |
| 7:36 | aliSalt | ali | 6 |
| 7:36 | klar | chefen | Rudolf. Jag går i pension. Espressomaskinen står på din bänk. Inga böter. |
| 7:40 | väntar | info:guld | 🏠 Rolf har ett riktigt hus! Garaget står vid tippen. |
| 7:40 | paket |  | sms |
| 7:40 | väntar | rolf | Ja vet int va ja ska säja. Ja har bott i husvagnen sen 2009. Nu har ja en VERANDA. Kajsa har redan pinkat i hörnet. De betyder att hon gillar de. Tack. /R |
| 7:40 | sak | info:guld | 🏠 Rolf har ett riktigt hus! Garaget står vid tippen. |
| 7:40 | kvitto-visas | info:guld | 🏠 Rolf har ett riktigt hus! Garaget står vid tippen. |
| 7:40 | toast | guld | 🏠 Rolf har ett riktigt hus! Garaget står vid tippen. |
| 7:42 | klar | info:guld | 🏠 Rolf har ett riktigt hus! Garaget står vid tippen. |
| 7:43 | väntar | info:guld | Skylten vid vägen är uppgraderad. |
| 7:43 | paket |  | sms |
| 7:43 | väntar | rolf | Kommunen satt upp en RIKTI skylt. Ja grät int. Kajsa grät. MVH ROLF |
| 7:43 | sak | info:guld | Skylten vid vägen är uppgraderad. |
| 7:43 | kvitto-visas | info:guld | Skylten vid vägen är uppgraderad. |
| 7:43 | toast | guld | Skylten vid vägen är uppgraderad. |
| 7:45 | klar | info:guld | Skylten vid vägen är uppgraderad. |
| 7:54 | sak | gunnar | Vanilj. |
| 7:54 | notis |  | 📻 Gunnar: Vanilj. |
| 7:54 | röst | gunnar | Vanilj. · STORY |
| 7:54 | händelse | printStart | sak=n3_stol |
| 7:56 | klar | gunnar | Vanilj. |
| 8:01 | toast | guld | ✅ |
| 8:01 | händelse | printKlar | sak=n3_stol n=23 |
| 8:02 | händelse | tagitUrPrint | sak=n3_stol n=1 |
| 8:05 | paket |  | sms |
| 8:05 | väntar | mamma | Pappa och Rolf bygger verandan. De har pratat Scania i tre timmar. Ingen av dem har sagt något annat. Jag tror de är lyckliga. |
| 8:11 | aliSalt | ali | 15200 |
| 8:15 | sak | pappa | 👍 ❤️ |
| 8:15 | sms | pappa | 👍 ❤️ |
| 8:15 | sms-bubbla | pappa | 👍 ❤️ |
| 8:15 | röst | pappa | 👍 ❤️ · STORY |
| 8:18 | klar | pappa | 👍 ❤️ |
| 8:22 | händelse | printStart | sak=n3_stol |
| 8:28 | toast | guld | ✅ |
| 8:28 | händelse | printKlar | sak=n3_stol n=24 |
| 8:29 | händelse | tagitUrPrint | sak=n3_stol n=1 |
| 8:35 | väntar | ali | Akta pölen. Den har varit där sedan 2014. |
| 8:36 | sak | ali | Akta pölen. Den har varit där sedan 2014. |
| 8:36 | röst | ali | Akta pölen. Den har varit där sedan 2014. · SMÅPRAT |
| 8:37 | bubbla |  | Akta pölen. Den har varit där sedan 2014. |
| 8:38 | aliSalt | ali | 14440 |
| 8:39 | klar | ali | Akta pölen. Den har varit där sedan 2014. |
| 8:50 | händelse | printStart | sak=n3_stol |
| 8:52 | väntar | värld:TUUT! Grann skylt! | TUUT! Grann skylt! |
| 8:52 | sak | värld:TUUT! Grann skylt! | TUUT! Grann skylt! |
| 8:52 | bubbla |  | TUUT! Grann skylt! |
| 8:55 | klar | värld:TUUT! Grann skylt! | TUUT! Grann skylt! |
| 8:56 | toast | guld | ✅ |
| 8:56 | händelse | printKlar | sak=n3_stol n=25 |
| 8:57 | händelse | tagitUrPrint | sak=n3_stol n=1 |
| 9:03 | sak | mamma | Pappa och Rolf bygger verandan. De har pratat Scania i tre timmar. Ingen av dem har sagt något annat. Jag tror de är lyckliga. |
| 9:03 | sms | mamma | Pappa och Rolf bygger verandan. De har pratat Scania i tre timmar. Ingen av dem har sagt något annat. Jag tror de är lyckliga. |
| 9:03 | sms-bubbla | mamma | Pappa och Rolf bygger verandan. De har pratat Scania i tre timmar. Ingen av dem har sagt något annat. Jag tror de är lyckliga. |
| 9:03 | röst | mamma | Pappa och Rolf bygger verandan. De har pratat Scania i tre timmar. Ingen av dem har sagt något annat. Jag tror de är lyckliga. · STORY |
| 9:06 | aliSalt | ali | 13718 |
| 9:13 | tanke | du | Fingrarna vill inte riktigt. |
| 9:13 | väntar | du | Fingrarna vill inte riktigt. |
| 9:14 | klar | mamma | Pappa och Rolf bygger verandan. De har pratat Scania i tre timmar. Ingen av dem har sagt något annat. Jag tror de är lyckliga. |
| 9:22 | sak | du | Fingrarna vill inte riktigt. |
| 9:22 | notis | tanke | 💭 Fingrarna vill inte riktigt. |
| 9:22 | röst | du | Fingrarna vill inte riktigt. · REAKTION |
| 9:24 | händelse | printStart | sak=n3_stol |
| 9:24 | klar | du | Fingrarna vill inte riktigt. |
| 9:31 | toast | guld | ✅ |
| 9:31 | händelse | printKlar | sak=n3_stol n=26 |
| 9:32 | händelse | tagitUrPrint | sak=n3_stol n=1 |
| 9:41 | aliSalt | ali | 13032 |
| 9:52 | händelse | printStart | sak=n3_stol |
| 9:58 | toast | guld | ✅ |
| 9:58 | händelse | printKlar | sak=n3_stol n=27 |
| 9:59 | händelse | tagitUrPrint | sak=n3_stol n=1 |
| 10:08 | aliSalt | ali | 12380 |
| 10:25 | skratt | du | falsk tuta |
| 11:13 | poolTom | du | 5 repliker använda |
| 12:42 | skratt | du | falsk tuta |
| 13:09 | väntar | notis:🌇 Klockan är 21. Ali slår igen luckan.  | 🌇 Klockan är 21. Ali slår igen luckan. Dagens jobb är klart – gå in i skjulet och sov i sängen. |
| 13:10 | sak | notis:🌇 Klockan är 21. Ali slår igen luckan.  | 🌇 Klockan är 21. Ali slår igen luckan. Dagens jobb är klart – gå in i skjulet och sov i sängen. |
| 13:10 | notis | guld | 🌇 Klockan är 21. Ali slår igen luckan. Dagens jobb är klart – gå in i skjulet och sov i sängen. |
| 13:12 | klar | notis:🌇 Klockan är 21. Ali slår igen luckan.  | 🌇 Klockan är 21. Ali slår igen luckan. Dagens jobb är klart – gå in i skjulet och sov i sängen. |
| 13:13 | poolTom | du | 5 repliker använda |
| 14:24 | händelse | printStart | sak=n2_hjalm |
| 14:28 | toast | guld | ✅ |
| 14:28 | händelse | printKlar | sak=n2_hjalm n=19 |
| 14:29 | händelse | tagitUrPrint | sak=n2_hjalm n=1 |
| 14:38 | aliSalt | ali | 1995 |
| 14:47 | webbBetalt | du | 2508 |

<details><summary>Botens handlingar dag 22</summary>

- 0:00 — dag 22 börjar — (78851 kr)
- 0:08 popup: "FORTSÄTT" (78851 kr)
- 0:23 gå till dörren (namnskylten) (22 m) (78851 kr)
- 0:39 kort: "Fortsätt bygga" (78851 kr)
- 0:51 popup: "FORTSÄTT" (78851 kr)
- 3:08 gå till mamma vid grinden (35 m) (78851 kr)
- 5:14 gå till tavlan vid vägen (3 m) (78851 kr)
- 5:14 efterspelet: köper marken runt tippen (18500 kr) (60351 kr)
- 5:18 efterspelet: köper rolfs soptipp (37000 kr) (23351 kr)
- 5:22 efterspelet: köper backen i norr (11000 kr) (12351 kr)
- 5:26 efterspelet: dag 22, 17 s (12351 kr)
- 5:30 gå till skrivaren (20 m) (12351 kr)
- 5:32 printar Cykelhjälm i PETG (12351 kr)
- 5:38 tar ut 1 st ur skrivaren (12351 kr)
- 5:39 gå till skrivaren (4 m) (12351 kr)
- 5:40 printar Nyckelring (12351 kr)
- 5:42 tar ut 1 st ur skrivaren (12351 kr)
- 5:42 fulla fickor – lägger g_skruv i kistan (12351 kr)
- 5:44 printar Nyckelring (12351 kr)
- 5:46 tar ut 1 st ur skrivaren (12351 kr)
- 5:59 plockar 8 skräp på tippen (bär max 16) (12351 kr)
- 6:02 gå till kvarnen (17 m) (12351 kr)
- 6:04 gå till skrivaren (7 m) (12351 kr)
- 6:06 printar Pall (12351 kr)
- 6:11 tar ut 1 st ur skrivaren (12351 kr)
- 6:11 fulla fickor – lägger nyckelring i kistan (12351 kr)
- 6:13 printar Pall (12351 kr)
- 6:24 panel: "Slut på berättelsen
Efterspele" (12351 kr)
- 6:25 tar ut 1 st ur skrivaren (12351 kr)
- 6:29 gå till datorn (19 m) (12351 kr)
- 6:38 panel: "Webbshopen · Soptippsvägen 1
B" (12351 kr)
- 6:47 panel: "Webbshopen · Soptippsvägen 1
B" (12351 kr)
- 6:56 panel: "Webbshopen · Soptippsvägen 1
B" (12351 kr)
- 7:05 panel: "Webbshopen · Soptippsvägen 1
B" (12351 kr)
- 7:12 gå till Rolfs postlåda (paket) (29 m) (12351 kr)
- 7:14 webbshop: 3 paket i postlådan (12351 kr)
- 7:14 tjänar pengar till efterspelet: 12351/12851 kr → printar kolfiberstol (16000 kr) (12351 kr)
- 7:17 gå till skrivaren (15 m) (12351 kr)
- 7:18 printar Kolfiberstol (12351 kr)
- 7:27 tar ut 1 st ur skrivaren (12351 kr)
- 7:33 gå till Ali (34 m) (12351 kr)
- 7:33 öppnar Alis butik – sälja (12351 kr)
- 7:36 säljer hos Ali: +16012 kr (28363 kr)
- 7:40 gå till tavlan vid vägen (6 m) (28363 kr)
- 7:40 efterspelet: köper garage och hus åt rolf (25000 kr) (3363 kr)
- 7:47 efterspelet: dag 22, 158 s (3363 kr)
- 7:47 tjänar pengar till efterspelet: 3363/3863 kr → printar kolfiberstol (15200 kr) (3363 kr)
- 7:52 gå till skrivaren (27 m) (3363 kr)
- 7:54 printar Kolfiberstol (3363 kr)
- 8:02 tar ut 1 st ur skrivaren (3363 kr)
- 8:09 gå till Ali (33 m) (3363 kr)
- 8:09 öppnar Alis butik – sälja (3363 kr)
- 8:11 säljer hos Ali: +15200 kr (18563 kr)
- 8:13 efterspelet: dag 22, 184 s (18563 kr)
- 8:13 tjänar pengar till efterspelet: 18563/19063 kr → printar kolfiberstol (14440 kr) (18563 kr)
- 8:20 gå till skrivaren (33 m) (18563 kr)
- 8:22 printar Kolfiberstol (18563 kr)
- 8:30 tar ut 1 st ur skrivaren (18563 kr)
- 8:37 gå till Ali (33 m) (18563 kr)
- 8:37 öppnar Alis butik – sälja (18563 kr)
- 8:39 säljer hos Ali: +14440 kr (33003 kr)
- 8:41 efterspelet: dag 22, 212 s (33003 kr)
- 8:41 tjänar pengar till efterspelet: 33003/33503 kr → printar kolfiberstol (13718 kr) (33003 kr)
- 8:48 gå till skrivaren (33 m) (33003 kr)
- 8:50 printar Kolfiberstol (33003 kr)
- 8:58 tar ut 1 st ur skrivaren (33003 kr)
- 9:05 gå till Ali (33 m) (33003 kr)
- 9:05 öppnar Alis butik – sälja (33003 kr)
- 9:07 säljer hos Ali: +13718 kr (46721 kr)
- 9:16 efterspelet: dag 22, 247 s (46721 kr)
- 9:16 tjänar pengar till efterspelet: 46721/47221 kr → printar kolfiberstol (13032 kr) (46721 kr)
- 9:23 gå till skrivaren (33 m) (46721 kr)
- 9:24 printar Kolfiberstol (46721 kr)
- 9:32 tar ut 1 st ur skrivaren (46721 kr)
- 9:39 gå till Ali (33 m) (46721 kr)
- 9:39 öppnar Alis butik – sälja (46721 kr)
- 9:41 säljer hos Ali: +13032 kr (59753 kr)
- 9:43 efterspelet: dag 22, 274 s (59753 kr)
- 9:43 tjänar pengar till efterspelet: 59753/60253 kr → printar kolfiberstol (12380 kr) (59753 kr)
- 9:50 gå till skrivaren (33 m) (59753 kr)
- 9:52 printar Kolfiberstol (59753 kr)
- 10:00 tar ut 1 st ur skrivaren (59753 kr)
- 10:07 gå till Ali (33 m) (59753 kr)
- 10:07 öppnar Alis butik – sälja (59753 kr)
- 10:09 säljer hos Ali: +12380 kr (72133 kr)
- 10:11 efterspelet: dag 22, 302 s (72133 kr)
- 10:11 tjänar pengar till efterspelet: 72133/72633 kr → printar kolfiberstol (11761 kr) (72133 kr)
- 10:11 väntar på kolfiber från bandet (72133 kr)
- 10:19 väntar på kolfiber från bandet (72133 kr)
- 10:27 väntar på kolfiber från bandet (72133 kr)
- 10:35 väntar på kolfiber från bandet (72133 kr)
- 10:43 väntar på kolfiber från bandet (72133 kr)
- 10:51 väntar på kolfiber från bandet (72133 kr)
- 10:59 väntar på kolfiber från bandet (72133 kr)
- 11:07 väntar på kolfiber från bandet (72133 kr)
- 11:16 väntar på kolfiber från bandet (72133 kr)
- 11:24 väntar på kolfiber från bandet (72133 kr)
- 11:32 väntar på kolfiber från bandet (72133 kr)
- 11:40 väntar på kolfiber från bandet (72133 kr)
- 11:48 väntar på kolfiber från bandet (72133 kr)
- 11:56 väntar på kolfiber från bandet (72133 kr)
- 12:04 väntar på kolfiber från bandet (72133 kr)
- 12:12 väntar på kolfiber från bandet (72133 kr)
- 12:20 väntar på kolfiber från bandet (72133 kr)
- 12:28 väntar på kolfiber från bandet (72133 kr)
- 12:37 väntar på kolfiber från bandet (72133 kr)
- 12:45 väntar på kolfiber från bandet (72133 kr)
- 12:53 väntar på kolfiber från bandet (72133 kr)
- 13:01 väntar på kolfiber från bandet (72133 kr)
- 13:09 väntar på kolfiber från bandet (72133 kr)
- 13:17 väntar på kolfiber från bandet (72133 kr)
- 13:25 väntar på kolfiber från bandet (72133 kr)
- 13:33 väntar på kolfiber från bandet (72133 kr)
- 13:41 väntar på kolfiber från bandet (72133 kr)
- 13:49 väntar på kolfiber från bandet (72133 kr)
- 13:58 väntar på kolfiber från bandet (72133 kr)
- 14:06 väntar på kolfiber från bandet (72133 kr)
- 14:14 väntar på kolfiber från bandet (72133 kr)
- 14:14 kolfiberstol gick inte att printa – tar nästa (72133 kr)
- 14:14 öppnar Alis butik – sälja (72133 kr)
- 14:16 tjänar pengar till efterspelet: 72133/72633 kr → printar cykelhjälm i petg (1995 kr) (72133 kr)
- 14:22 gå till skrivaren (29 m) (72133 kr)
- 14:24 printar Cykelhjälm i PETG (72133 kr)
- 14:30 tar ut 1 st ur skrivaren (72133 kr)
- 14:36 gå till Ali (29 m) (72133 kr)
- 14:36 öppnar Alis butik – sälja (72133 kr)
- 14:38 säljer hos Ali: +1995 kr (74128 kr)
- 14:44 gå till sängen (20 m) (74128 kr)

</details>

## Dag 23

| Tid | Källa | Vem | Text |
|---|---|---|---|
| 14:47 | vara | ali | n2_vas |

<details><summary>Botens handlingar dag 23</summary>

- 0:00 — dag 23 börjar — (76636 kr)

</details>
