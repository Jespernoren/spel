# Simulering kapitel 1 – körning 1

*Gjord 2026-11-21 01:26 med `verktyg/sim-kapitel1.mjs` + `verktyg/sim-bot.js` (punkt AX). Boten går 4,5 m/s, läser 15 tecken/s, trampar, vevar, plockar, printar, köper och säljer via spelets egna funktioner. Tiderna är speltid.*

## Sammanfattning

| Dag | Minuter | Väntan | Prints (totalt) | Kr vid sömn | Bär | Trivsel |
|---|---|---|---|---|---|---|
| 17 | 4.1 | 19 % | 513 | 79055 | 16 | 349 |
| 18 | 2.7 | 7 % | 513 | 63357 | 16 | 349 |
| 19 | 12.4 | 8 % | 523 | 122143 | 16 | 515 |
| 20 | 1.9 | 9 % | 524 | 115221 | 16 | 540 |
| 21 | 0.8 | 0 % | 524 | 108021 | 16 | 538 |
| 22 | 13.5 | 0 % | 532 | 90918 | 16 | 537 |
| 23 | 0.0 | 0 % | 532 | 90936 | 16 | 535 |

## Flaskhalskartan (EE)

| Dag | bara | mala | trampa | strom | skrivare | inkomst | Upplåst |
|---|---|---|---|---|---|---|---|
| 17 | 17 | 25 | 0 | 0 | 231 | 0 |  |
| 18 | 1 | 1 | 0 | 0 | 102 | 0 |  |
| 19 | 3 | 3 | 0 | 0 | 588 | 0 | vindkraft (strom, 3:57, reserv), guldskrivare (skrivare, 10:29) |
| 20 | 2 | 16 | 0 | 0 | 51 | 0 |  |
| 21 | 0 | 26 | 0 | 0 | 26 | 0 |  |
| 22 | 0 | 618 | 0 | 0 | 620 | 0 |  |
| 23 | 0 | 0 | 0 | 0 | 0 | 0 |  |

TIDIG: 0 · FAST: 0 · upplåst av reserven (målet väntade 3 min): 1

**SKRATT:** 38 roliga ögonblick på 35 min (10.7 per 10 min, mål minst 5)

**Köp:**

- dag 18 0:43 – diamantkniv (12000 kr)
- dag 19 8:42 – vindkraft (6050 kr)
- dag 19 10:46 – guldskrivare (4200 kr)
- dag 20 0:50 – kamin (9750 kr)

## Storykedjan (kvittens → varför → nytt mål)

| Dag | Tid | Id | Kvittens | Varför | Nytt mål | Tid till målet |
|---|---|---|---|---|---|---|


## Hur länge nya mål väntade (från att förra målet blev klart till att det nya syntes i målrutan)

Snitt 10.6 s · max 30.5 s · över 4 s: 10 · över 8 s: 10 av 18

## Flaggor (26)

- **KROCK** dag 21 0:01: 2.9 s mellan [notis] "💭 Det drar. Från överallt." och [meddelande] "Dag 21. 1 dag till jul. Utan adress finns jag inte, hur fint"
- **SEN** dag 17 0:23: 17.3 s efter händelsen: värld:Mjau.: "Mjau."
- **SEN** dag 17 0:33: 12.5 s efter händelsen: notis:☀️ Skrivaren går på solkraft – du behöve: "☀️ Skrivaren går på solkraft – du behöver inte trampa!"
- **SEN** dag 18 1:24: 14.6 s efter händelsen: värld:Mjau.: "Mjau."
- **SEN** dag 18 1:42: 14.4 s efter händelsen: ali: "Ali här. Jag såg Diamantkvarn på avstånd. Ett streck blev lite snett. "
- **SEN** dag 20 1:30: 26.5 s efter händelsen: helen: "Det där var mitt arkiv."
- **SEN** dag 21 1:54: 46.0 s efter händelsen: du: "Det drar. Från överallt."
- **SEN** dag 22 6:51: 63.3 s efter händelsen: notis:📔 Prestation: Jul på tippen · +3 respek: "📔 Prestation: Jul på tippen · +3 respekt"
- **SEN** dag 22 7:32: 81.2 s efter händelsen: kjelle: "Kjelle här, direkt från julfesten! Gunnar, du är här. Säg något till l"
- **PAUS** dag 18 1:49: 0.0 s paus före "✨ Guld! (1.9 s)"
- **PAUS** dag 18 2:29: 0.0 s paus före "Dag 18 är slut. Nu vet Helen att jag bor HÄR. Jag "
- **PAUS** dag 19 1:24: 0.0 s paus före "📦 Paketet till Ett kafé i Ystad ligger i postlåda"
- **PAUS** dag 19 12:12: 0.0 s paus före "Dag 19 är slut. Det blir kallare för varje natt."
- **PAUS** dag 20 0:23: 0.0 s paus före "Göran lämnade en blank skruv på säljlådan."
- **PAUS** dag 21 0:32: 0.0 s paus före "📮 Du är folkbokförd! Soptippsvägen 1 är din adres"
- **PAUS** dag 21 0:34: 0.0 s paus före "Dag 21 är slut. Nu vet Skatteverket att jag bor HÄ"
- **PAUS** dag 22 0:54: 0.0 s paus före "Göran lämnade en blank skruv på säljlådan."
- **PAUS** dag 22 1:15: 0.0 s paus före "🚗 En bil svänger in vid grinden."
- **TOM RUTA** dag 18 2:02: 19.8 s innan "Gjut grunden till huset" syntes
- **UPPREPNING** dag 20 0:23: info:guld: "Göran lämnade en blank skruv på säljlådan." (förra gången dag 18)
- **UPPREPNING** dag 22 0:54: info:guld: "Göran lämnade en blank skruv på säljlådan." (förra gången dag 20)
- **TEMPO** dag 17 4:08: dag 17 tog 4.1 min (mål 10–15)
- **TEMPO** dag 18 2:44: dag 18 tog 2.7 min (mål 10–15)
- **TEMPO** dag 20 1:52: dag 20 tog 1.9 min (mål 10–15)
- **TEMPO** dag 21 0:48: dag 21 tog 0.8 min (mål 10–15)
- **TEMPO** dag 23 0:01: dag 23 tog 0.0 min (mål 10–15)

Sidfel: inga

## Dag 17

| Tid | Källa | Vem | Text |
|---|---|---|---|
| 0:00 | MÅL |  | Bygg en solcellspark på ängen |
| 0:00 | MÅL |  | Bygg en solcellspark på ängen |
| 0:00 | sak | du | Bygg en solcellspark på ängen. |
| 0:00 | pil |  | Bygg en solcellspark på ängen |
| 0:00 | röst | du | Bygg en solcellspark på ängen. · MÅL |
| 0:00 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 0:00 | väntar | notis:Skrivare L: Tornet är tomt – mal mer så  | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 0:01 | nick |  | nick:114 |
| 0:03 | klar | du | Bygg en solcellspark på ängen. |
| 0:06 | väntar | värld:Mjau. | Mjau. |
| 0:11 | sak | notis:Skrivare L: Tornet är tomt – mal mer så  | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 0:11 | notis | fel | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 0:12 | händelse | printStart | sak=kruka |
| 0:13 | klar | notis:Skrivare L: Tornet är tomt – mal mer så  | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 0:14 | toast | guld | ✅ |
| 0:14 | händelse | printKlar | sak=kruka n=381 |
| 0:20 | scenInfo | rolf | Rolf på kaffe |
| 0:21 | händelse | printStart | sak=byggsats:solpark |
| 0:21 | väntar | notis:☀️ Skrivaren går på solkraft – du behöve | ☀️ Skrivaren går på solkraft – du behöver inte trampa! |
| 0:23 | sak | värld:Mjau. | Mjau. |
| 0:23 | bubbla |  | Mjau. |
| 0:25 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 0:25 | klar | värld:Mjau. | Mjau. |
| 0:26 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 0:27 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 0:33 | sak | notis:☀️ Skrivaren går på solkraft – du behöve | ☀️ Skrivaren går på solkraft – du behöver inte trampa! |
| 0:33 | notis | guld | ☀️ Skrivaren går på solkraft – du behöver inte trampa! |
| 0:36 | klar | notis:☀️ Skrivaren går på solkraft – du behöve | ☀️ Skrivaren går på solkraft – du behöver inte trampa! |
| 0:44 | skratt | du | falsk tuta |
| 0:59 | skratt | du | däcket rullar iväg |
| 1:06 | väntar | värld:TUUT! Tjena! | TUUT! Tjena! |
| 1:06 | sak | värld:TUUT! Tjena! | TUUT! Tjena! |
| 1:06 | bubbla |  | TUUT! Tjena! |
| 1:09 | klar | värld:TUUT! Tjena! | TUUT! Tjena! |
| 1:26 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 1:26 | toast | bra | Del 1 av 4 klar |
| 1:27 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 1:29 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 1:30 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 1:31 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 1:32 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 1:34 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 1:35 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 1:36 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 1:37 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 1:38 | toast | bra | Del 2 av 4 klar |
| 1:38 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 1:40 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 1:41 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 1:42 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 1:43 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 1:44 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 1:46 | väntar | värld:Mjau. | Mjau. |
| 1:53 | sak | värld:Mjau. | Mjau. |
| 1:53 | bubbla |  | Mjau. |
| 1:55 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 1:55 | poolTom | du | 4 repliker använda |
| 1:55 | klar | värld:Mjau. | Mjau. |
| 1:56 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 1:58 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 1:59 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 2:00 | toast | bra | Del 3 av 4 klar |
| 2:00 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 2:02 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 2:03 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 2:54 | skratt | du | däcket rullar iväg |
| 3:01 | skratt | du | falsk tuta |
| 3:01 | väntar | värld:TUUT TUUT! | TUUT TUUT! |
| 3:01 | sak | värld:TUUT TUUT! | TUUT TUUT! |
| 3:01 | bubbla |  | TUUT TUUT! |
| 3:04 | klar | värld:TUUT TUUT! | TUUT TUUT! |
| 3:09 | väntar | värld:Mjau. | Mjau. |
| 3:18 | sak | värld:Mjau. | Mjau. |
| 3:18 | bubbla |  | Mjau. |
| 3:20 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 3:20 | klar | värld:Mjau. | Mjau. |
| 3:21 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 3:22 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 3:24 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 3:25 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 3:26 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 3:27 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 3:28 | händelse | printKlar | sak=byggsats:solpark n=1 |
| 3:28 | toast | guld | ✅ |
| 3:34 | händelse | tagitUrPrint | sak=byggsats:solpark n=1 |
| 3:45 | händelse | placerat | sak=solpark |
| 3:45 | händelse | malKlart | id=m17-solpark2 del=Dag 17 – Ängen nasta=sov17 |
| 3:45 | paket |  | lapp |
| 3:45 | lapp | 📔 Dagbok | Dag 17 är slut. Fem dagar kvar. Inget tak. |
| 3:45 | meddelande | du | Dag 17 är slut. Fem dagar kvar. Inget tak. |
| 3:45 | dagbokkort | du | Dag 17 är slut. Fem dagar kvar. Inget tak. |
| 3:45 | målruta |  | Klart för idag – sov när du vill |
| 3:45 | MÅL |  | Klart för idag – sov när du vill |
| 3:45 | röst | du | Dag 17 är slut. Fem dagar kvar. Inget tak. · STORY |
| 3:51 | händelse | brevLast | id=kvall17 |
| 3:52 | väntar | notis:🌇 Klockan är 21. Ali slår igen luckan.  | 🌇 Klockan är 21. Ali slår igen luckan. Dagens jobb är klart – gå in i skjulet och sov i sängen. |
| 3:53 | sak | du | (nytt mål i rutan) |
| 3:53 | pil |  | Klart för idag – sov när du vill |
| 3:53 | klar | du | (nytt mål i rutan) |
| 3:55 | poolTom | du | 4 repliker använda |
| 3:57 | sak | notis:🌇 Klockan är 21. Ali slår igen luckan.  | 🌇 Klockan är 21. Ali slår igen luckan. Dagens jobb är klart – gå in i skjulet och sov i sängen. |
| 3:57 | notis | guld | 🌇 Klockan är 21. Ali slår igen luckan. Dagens jobb är klart – gå in i skjulet och sov i sängen. |
| 4:00 | klar | notis:🌇 Klockan är 21. Ali slår igen luckan.  | 🌇 Klockan är 21. Ali slår igen luckan. Dagens jobb är klart – gå in i skjulet och sov i sängen. |
| 4:04 | händelse | tagitUrPrint | sak=kruka n=1 |
| 4:10 | paket |  | sms |
| 4:10 | väntar | ali | Ali här. Hämtade lådan klockan sex. 148 saker, 7 252 kr på ditt konto. Grossistpris. Jag har också en hyra. |
| 4:10 | webbBetalt | du | 1050 |

<details><summary>Botens handlingar dag 17</summary>

- 0:05 plockar 1 skräp på tippen (bär max 16) (79055 kr)
- 0:09 gå till kvarnen (17 m) (79055 kr)
- 0:19 gå till skrivaren (5 m) (79055 kr)
- 0:21 printar Solcellspark (4 delar) (79055 kr)
- 0:28 inget skräp kvar att mala – väntar på sopbilen [skräp 14: lätta 0, osynliga 0, utan interaktion 0, tippen 14, ej lyftbara 0, sorter ] (79055 kr)
- 0:48 inget skräp kvar att mala – väntar på sopbilen (79055 kr)
- 1:20 plockar 8 skräp på tippen (bär max 16) (79055 kr)
- 1:24 gå till kvarnen (16 m) (79055 kr)
- 1:53 gå till kvarnen (12 m) (79055 kr)
- 2:03 inget skräp kvar att mala – väntar på sopbilen (79055 kr)
- 2:03 inget skräp kvar att mala – väntar på sopbilen [skräp 14: lätta 0, osynliga 0, utan interaktion 0, tippen 14, ej lyftbara 0, sorter ] (79055 kr)
- 2:23 inget skräp kvar att mala – väntar på sopbilen (79055 kr)
- 2:43 inget skräp kvar att mala – väntar på sopbilen (79055 kr)
- 3:15 plockar 5 skräp på tippen (bär max 16) (79055 kr)
- 3:18 gå till kvarnen (13 m) (79055 kr)
- 3:34 gå till skrivaren (5 m) (79055 kr)
- 3:34 tar ut 1 st ur skrivaren (79055 kr)
- 3:44 gå till platsen för solcellspark (47 m) (79055 kr)
- 3:45 ställer ut solcellspark (79055 kr)
- 3:51 popup: "FORTSÄTT" (79055 kr)
- 4:04 gå till skrivaren (42 m) (79055 kr)
- 4:05 tar ut 1 st ur skrivaren (79055 kr)
- 4:08 gå till sängen (16 m) (79055 kr)

</details>

## Dag 18

| Tid | Källa | Vem | Text |
|---|---|---|---|
| 4:10 | vara | ali | n2_hjalm |
| 4:10 | händelse | malKlart | id=sov17 del=Dag 17 – Ängen nasta=m18-bygg-diamantkvarnen |
| 4:10 | MÅL |  | Bygg diamantkvarnen |
| 4:11 | väntar | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått solcellspark. Mer säger jag inte. Gunnar vet. |
| 4:11 | radio | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått solcellspark. Mer säger jag inte. Gunnar vet. |
| 4:11 | skratt | du | Radio-Kjelle |
| 4:11 | paket |  | brev |
| 4:11 | väntar | gunbritt | Hej igen. Gun-Britt. Tyvärr kunde jag inte hitta något fel. Bygglovet är godkänt. Jag har stämplat det. Med stjärnor. Tyvärr hade jag bara guldstjärnor. /Gun-Britt |
| 4:11 | skratt | du | Gun-Britts stjärnor |
| 0:01 | händelse | dagenBorjar | dag=18 |
| 0:01 | meddelande | du | Dag 18. 4 dagar till jul. Utan grund blir det inget hus före jul. |
| 0:01 | dagbokkort | du | Diamantkvarnen och grunden · Dag 18. 4 dagar till jul. Utan grund blir det inget hus före jul. |
| 0:01 | röst | du | Diamantkvarnen och grunden. Dag 18. 4 dagar till jul. Utan grund blir det inget hus före jul. · STORY |
| 0:03 | paket |  | sms |
| 0:03 | väntar | rolf | Kajsa satt på lappen hela natten. Den e lite varm. Lådan. /R |
| 0:15 | händelse | morgonkortStangt | dag=18 |
| 0:15 | struken | kedja | d18 |
| 0:15 | väntar | du | Bygg diamantkvarnen. |
| 0:18 | paket |  | tanke |
| 0:18 | tanke | du | Grinden. Det är Helen, hör jag på stegen. |
| 0:18 | väntar | du | Grinden. Det är Helen, hör jag på stegen. |
| 0:18 | väntar | rolf | Helen ä tillbaka. Hon va hä före mej. Före alla. Var snäll mot henne. Hon biter int. Inte längre. /R |
| 0:19 | målruta |  | Bygg diamantkvarnen |
| 0:21 | sak | du | Bygg diamantkvarnen. |
| 0:21 | pil |  | Bygg diamantkvarnen |
| 0:21 | röst | du | Bygg diamantkvarnen. · MÅL |
| 0:21 | nick |  | nick:116 |
| 0:23 | klar | du | Bygg diamantkvarnen. |
| 0:23 | väntar | info:guld | Göran lämnade en blank skruv på säljlådan. |
| 0:23 | sak | info:guld | Göran lämnade en blank skruv på säljlådan. |
| 0:23 | kvitto-visas | info:guld | Göran lämnade en blank skruv på säljlådan. |
| 0:23 | toast | guld | Göran lämnade en blank skruv på säljlådan. |
| 0:25 | klar | info:guld | Göran lämnade en blank skruv på säljlådan. |
| 0:34 | struken | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått solcellspark. Mer säger jag inte. Gunnar vet. |
| 0:35 | sak | gunbritt | Hej igen. Gun-Britt. Tyvärr kunde jag inte hitta något fel. Bygglovet är godkänt. Jag har stämplat det. Med stjärnor. Tyvärr hade jag bara guldstjärnor. /Gun-Britt |
| 0:35 | lapp | Brev från byggnadsnämnden | Hej igen. Gun-Britt. Tyvärr kunde jag inte hitta något fel. Bygglovet är godkänt. Jag har stämplat det. Med stjärnor. Tyvärr hade jag bara guldstjärnor. /Gun-Britt |
| 0:35 | röst | gunbritt | Hej igen. Gun-Britt. Tyvärr kunde jag inte hitta något fel. Bygglovet är godkänt. Jag har stämplat det. Med stjärnor. Tyvärr hade jag bara guldstjärnor. /Gun-Britt · STORY |
| 0:40 | poolTom | ali | 4 repliker använda |
| 0:42 | skratt | du | Alis dyr-pling |
| 0:42 | toast | guld | 3D-modell köpt – printa diamantkvarn på skrivaren |
| 0:42 | händelse | kopt | sak=diamantkniv |
| 0:48 | klar | gunbritt | Hej igen. Gun-Britt. Tyvärr kunde jag inte hitta något fel. Bygglovet är godkänt. Jag har stämplat det. Med stjärnor. Tyvärr hade jag bara guldstjärnor. /Gun-Britt |
| 0:50 | händelse | printStart | sak=byggsats:diamantkniv |
| 0:52 | toast | bra | Del 1 av 3 klar |
| 0:53 | skratt | du | kvarnen spottar |
| 0:54 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 0:55 | toast | bra | Del 2 av 3 klar |
| 0:55 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 0:56 | sak | du | Grinden. Det är Helen, hör jag på stegen. |
| 0:56 | notis | tanke | 💭 Grinden. Det är Helen, hör jag på stegen. |
| 0:56 | röst | du | Grinden. Det är Helen, hör jag på stegen. · STORY |
| 1:00 | klar | du | Grinden. Det är Helen, hör jag på stegen. |
| 1:03 | väntar | värld:TUUT! Tjena! | TUUT! Tjena! |
| 1:09 | väntar | värld:Mjau. | Mjau. |
| 1:13 | sak | värld:TUUT! Tjena! | TUUT! Tjena! |
| 1:13 | bubbla |  | TUUT! Tjena! |
| 1:14 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 1:14 | väntar | notis:Skrivare L: Tornet är tomt – mal mer så  | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 1:15 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 1:16 | klar | värld:TUUT! Tjena! | TUUT! Tjena! |
| 1:16 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 1:18 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 1:18 | händelse | printKlar | sak=byggsats:diamantkniv n=1 |
| 1:18 | toast | guld | ✅ |
| 1:24 | sak | värld:Mjau. | Mjau. |
| 1:24 | bubbla |  | Mjau. |
| 1:25 | nej | du | Ta ut diamantkvarn |
| 1:25 | toast | fickskylt | Fulla fickor |
| 1:25 | fullaFickor | du | byggsats:diamantkniv |
| 1:26 | händelse | tagitUrPrint | sak=byggsats:diamantkniv n=1 |
| 1:26 | paket |  | sms |
| 1:26 | väntar | ali | Ali här. Jag såg Diamantkvarn på avstånd. Ett streck blev lite snett. Mitt fel. Vackert ändå. |
| 1:26 | klar | värld:Mjau. | Mjau. |
| 1:27 | väntar | info:guld | Diamantkvarnen sitter! Guldet – kom an. |
| 1:27 | sak | info:guld | Diamantkvarnen sitter! Guldet – kom an. |
| 1:27 | kvitto-visas | info:guld | Diamantkvarnen sitter! Guldet – kom an. |
| 1:27 | toast | guld | Diamantkvarnen sitter! Guldet – kom an. |
| 1:27 | händelse | malKlart | id=m18-bygg-diamantkvarnen del=Dag 18 – Diamantkvarnen och grunden nasta=m18-mal-rulle-guld |
| 1:27 | väntar | du | Mal en rulle guld. |
| 1:28 | MÅL |  | Mal en rulle guld |
| 1:29 | klar | info:guld | Diamantkvarnen sitter! Guldet – kom an. |
| 1:31 | målruta |  | Mal en rulle guld |
| 1:31 | kvittens-bock |  | ✓ Bygg diamantkvarnen |
| 1:31 | sak | du | Mal en rulle guld. |
| 1:31 | pil |  | Mal en rulle guld |
| 1:31 | röst | du | Mal en rulle guld. · MÅL |
| 1:34 | klar | du | Mal en rulle guld. |
| 1:36 | struken | notis:Skrivare L: Tornet är tomt – mal mer så  | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 1:42 | sak | ali | Ali här. Jag såg Diamantkvarn på avstånd. Ett streck blev lite snett. Mitt fel. Vackert ändå. |
| 1:42 | sms | ali | Ali här. Jag såg Diamantkvarn på avstånd. Ett streck blev lite snett. Mitt fel. Vackert ändå. |
| 1:42 | sms-bubbla | ali | Ali här. Jag såg Diamantkvarn på avstånd. Ett streck blev lite snett. Mitt fel. Vackert ändå. |
| 1:42 | röst | ali | Ali här. Jag såg Diamantkvarn på avstånd. Ett streck blev lite snett. Mitt fel. Vackert ändå. · REAKTION |
| 1:42 | poolTom | du | 4 repliker använda |
| 1:45 | väntar | info:guld | ✨ Guld! (1.9 s) |
| 1:45 | skratt | du | första guldet |
| 1:47 | struken | info:guld | ✨ Guld! (1.9 s) |
| 1:47 | skratt | du | första guldet |
| 1:49 | paket |  | tanke |
| 1:49 | tanke | du | Det står Rolf & Birgitta 1979 på insidan. |
| 1:49 | väntar | du | Det står Rolf & Birgitta 1979 på insidan. |
| 1:49 | klar | ali | Ali här. Jag såg Diamantkvarn på avstånd. Ett streck blev lite snett. Mitt fel. Vackert ändå. |
| 1:49 | sak | info:guld | ✨ Guld! (1.9 s) |
| 1:49 | kvitto-visas | info:guld | ✨ Guld! (1.9 s) |
| 1:49 | toast | guld | ✨ Guld! (1.9 s) |
| 1:51 | struken | info:guld | ✨ Guld! (1.9 s) |
| 1:51 | skratt | du | första guldet |
| 1:51 | klar | info:guld | ✨ Guld! (1.9 s) |
| 2:00 | sak | du | Det står Rolf & Birgitta 1979 på insidan. |
| 2:00 | notis | tanke | 💭 Det står Rolf & Birgitta 1979 på insidan. |
| 2:00 | röst | du | Det står Rolf & Birgitta 1979 på insidan. · STORY |
| 2:02 | paket |  | toast → tanke |
| 2:02 | väntar | notis:Kvarnen gav en rulle filament nivå 4 – g | Kvarnen gav en rulle filament nivå 4 – guldkomposit! Den behövs för de finare recepten. |
| 2:02 | tanke | du | guldkomposit. Starkare än vanlig plast – Ali har recept som kräver den. Rolf hittar mer ju mer folk respekterar mig. |
| 2:02 | väntar | du | guldkomposit. Starkare än vanlig plast – Ali har recept som kräver den. Rolf hittar mer ju mer folk respekterar mig. |
| 2:02 | händelse | malKlart | id=m18-mal-rulle-guld del=Dag 18 – Diamantkvarnen och grunden nasta=m18-gjut-grunden-huset |
| 2:02 | väntar | du | tillbakablick hem |
| 2:02 | MÅL |  | Gjut grunden till huset |
| 2:03 | klar | du | Det står Rolf & Birgitta 1979 på insidan. |
| 2:05 | sak | du | guldkomposit. Starkare än vanlig plast – Ali har recept som kräver den. Rolf hittar mer ju mer folk respekterar mig. |
| 2:05 | notis | tanke | 💭 guldkomposit. Starkare än vanlig plast – Ali har recept som kräver den. Rolf hittar mer ju mer folk respekterar mig. |
| 2:05 | röst | du | guldkomposit. Starkare än vanlig plast – Ali har recept som kräver den. Rolf hittar mer ju mer folk respekterar mig. · REAKTION |
| 2:06 | kvittens-bock |  | ✓ Mal en rulle guld |
| 2:15 | klar | du | guldkomposit. Starkare än vanlig plast – Ali har recept som kräver den. Rolf hittar mer ju mer folk respekterar mig. |
| 2:19 | väntar | notis:📔 Prestation: Röd tråd · +3 respekt | 📔 Prestation: Röd tråd · +3 respekt |
| 2:19 | tillbakablick | du | hem |
| 2:21 | väntar | mamma | Jag hämtar dig på julafton kl 15. Var redo. |
| 2:22 | väntar | du | Gjut grunden till huset. |
| 2:22 | målruta |  | Gjut grunden till huset |
| 2:23 | sak | du | Gjut grunden till huset. |
| 2:23 | pil |  | Gjut grunden till huset |
| 2:23 | röst | du | Gjut grunden till huset. · MÅL |
| 2:25 | klar | du | Gjut grunden till huset. |
| 2:27 | väntar | info:guld | 🌲 Grunden till huset på ängen är din! Gärdesgården har flyttats – där får du ställa saker nu. |
| 2:27 | paket |  | sms |
| 2:27 | väntar | rolf | Grunden ä gjuten. Ja sto å tittade i en timme. Betong ä vackert när den torkar. Säg inte de till nån. /R |
| 2:27 | sak | info:guld | 🌲 Grunden till huset på ängen är din! Gärdesgården har flyttats – där får du ställa saker nu. |
| 2:27 | kvitto-visas | info:guld | 🌲 Grunden till huset på ängen är din! Gärdesgården har flyttats – där får du ställa saker nu. |
| 2:27 | toast | guld | 🌲 Grunden till huset på ängen är din! Gärdesgården har flyttats – där får du ställa saker nu. |
| 2:27 | händelse | malKlart | id=m18-gjut-grunden-huset del=Dag 18 – Diamantkvarnen och grunden nasta=sov18 |
| 2:27 | paket |  | lapp |
| 2:27 | väntar | du | Dag 18 är slut. Nu vet Helen att jag bor HÄR. Jag vill bo i ett riktigt hus. I morgon. |
| 2:27 | MÅL |  | Klart för idag – sov när du vill |
| 2:29 | klar | info:guld | 🌲 Grunden till huset på ängen är din! Gärdesgården har flyttats – där får du ställa saker nu. |
| 2:29 | sak | du | Dag 18 är slut. Nu vet Helen att jag bor HÄR. Jag vill bo i ett riktigt hus. I morgon. |
| 2:29 | kvitto-visas | du | Dag 18 är slut. Nu vet Helen att jag bor HÄR. Jag vill bo i ett riktigt hus. I morgon. |
| 2:29 | lapp | 📔 Dagbok | Dag 18 är slut. Nu vet Helen att jag bor HÄR. Jag vill bo i ett riktigt hus. I morgon. |
| 2:29 | meddelande | du | Dag 18 är slut. Nu vet Helen att jag bor HÄR. Jag vill bo i ett riktigt hus. I morgon. |
| 2:29 | dagbokkort | du | Dag 18 är slut. Nu vet Helen att jag bor HÄR. Jag vill bo i ett riktigt hus. I morgon. |
| 2:29 | röst | du | Dag 18 är slut. Nu vet Helen att jag bor HÄR. Jag vill bo i ett riktigt hus. I morgon. · STORY |
| 2:38 | händelse | brevLast | id=kvall18 |
| 2:38 | klar | du | Dag 18 är slut. Nu vet Helen att jag bor HÄR. Jag vill bo i ett riktigt hus. I morgon. |
| 2:38 | väntar | notis:🌇 Klockan är 21. Ali slår igen luckan.  | 🌇 Klockan är 21. Ali slår igen luckan. Dagens jobb är klart – gå in i skjulet och sov i sängen. |
| 2:38 | målruta |  | Klart för idag – sov när du vill |
| 2:38 | sak | du | (nytt mål i rutan) |
| 2:38 | pil |  | Klart för idag – sov när du vill |
| 2:39 | klar | du | (nytt mål i rutan) |
| 2:40 | väntar | info:info | Pappa kommer gående. Han bär på en kasse … |
| 2:40 | scenInfo | pappa | Pappa kommer |
| 2:46 | skratt | du | falsk tuta |

<details><summary>Botens handlingar dag 18</summary>

- 0:00 — dag 18 börjar — (87357 kr)
- 0:15 popup: "FORTSÄTT" (87357 kr)
- 0:25 gå till Rolfs postlåda (28 m) (87357 kr)
- 0:34 panel: "En lapp från Rolf
Lite olaglig" (87357 kr)
- 0:40 gå till Ali (31 m) (87357 kr)
- 0:40 öppnar Alis butik – köpa diamantkvarn (87357 kr)
- 0:43 köper diamantkniv för 12000 kr (75357 kr)
- 0:48 gå till skrivaren (23 m) (75357 kr)
- 0:50 printar Diamantkvarn (3 delar) (75357 kr)
- 1:09 plockar 9 skräp på tippen (bär max 16) (75357 kr)
- 1:12 gå till kvarnen (16 m) (75357 kr)
- 1:25 gå till skrivaren (7 m) (75357 kr)
- 1:26 tar ut 1 st ur skrivaren (75357 kr)
- 1:26 fulla fickor – lägger kruka i kistan (75357 kr)
- 1:27 gå till kvarnen (4 m) (75357 kr)
- 1:45 gå till ådern (43 m) (75357 kr)
- 1:53 vaskar guld i ådern (75357 kr)
- 2:02 gå till kvarnen (guld) (43 m) (75357 kr)
- 2:27 gå till tavlan vid vägen (22 m) (75357 kr)
- 2:27 köper grunden till huset på ängen (12000 kr) (63357 kr)
- 2:38 popup: "FORTSÄTT" (63357 kr)
- 2:43 gå till sängen (12 m) (63357 kr)

</details>

## Dag 19

| Tid | Källa | Vem | Text |
|---|---|---|---|
| 2:46 | vara | ali | n2_vas |
| 2:46 | händelse | malKlart | id=sov18 del=Dag 18 – Diamantkvarnen och grunden nasta=m19-bygg-huset-grunden |
| 2:46 | MÅL |  | Bygg huset på grunden |
| 0:01 | händelse | dagenBorjar | dag=19 |
| 0:01 | meddelande | du | Dag 19. 3 dagar till jul. Utan hus kommer mamma och hämtar mig. |
| 0:01 | dagbokkort | du | Ett riktigt hus · Dag 19. 3 dagar till jul. Utan hus kommer mamma och hämtar mig. |
| 0:01 | röst | du | Ett riktigt hus. Dag 19. 3 dagar till jul. Utan hus kommer mamma och hämtar mig. · STORY |
| 0:15 | händelse | morgonkortStangt | dag=19 |
| 0:15 | struken | kedja | d19 |
| 0:15 | väntar | du | Bygg huset på grunden. |
| 0:15 | målruta |  | Bygg huset på grunden |
| 0:18 | paket |  | sms |
| 0:18 | väntar | mamma | Pappa säger att du har byggt ett hus. Med trappa. Är det säkert? Har du räcke? Jag skickar en brandvarnare. Och sylt. |
| 0:18 | väntar | info:guld | 🏡 Huset står klart på ängen! Två rum och en trappa upp till sovloftet. |
| 0:18 | paket |  | sms |
| 0:18 | väntar | rolf | Du har byggt ett HUS. Me trappa. Ja har aldrig gått i en trappa i ett hus som ja känner nån som äger. Ja kommer på inflyttningsfest. Ja tar me Kajsa. /R |
| 0:18 | händelse | malKlart | id=m19-bygg-huset-grunden del=Dag 19 – Ett riktigt hus nasta=m19-vindkraft |
| 0:18 | MÅL |  | Printa och sälj |
| 0:21 | struken | du | Bygg huset på grunden. |
| 0:21 | sak | info:guld | 🏡 Huset står klart på ängen! Två rum och en trappa upp till sovloftet. |
| 0:21 | kvitto-visas | info:guld | 🏡 Huset står klart på ängen! Två rum och en trappa upp till sovloftet. |
| 0:21 | toast | guld | 🏡 Huset står klart på ängen! Två rum och en trappa upp till sovloftet. |
| 0:21 | målruta |  | Printa och sälj |
| 0:22 | kvittens-bock |  | ✓ Bygg huset på grunden |
| 0:23 | klar | info:guld | 🏡 Huset står klart på ängen! Två rum och en trappa upp till sovloftet. |
| 0:25 | sak | du | (nytt mål i rutan) |
| 0:25 | pil |  | Printa och sälj |
| 0:25 | klar | du | (nytt mål i rutan) |
| 0:27 | struken | notis:Kvarnen gav en rulle filament nivå 4 – g | Kvarnen gav en rulle filament nivå 4 – guldkomposit! Den behövs för de finare recepten. |
| 0:27 | struken | notis:📔 Prestation: Röd tråd · +3 respekt | 📔 Prestation: Röd tråd · +3 respekt |
| 0:27 | struken | notis:🌇 Klockan är 21. Ali slår igen luckan.  | 🌇 Klockan är 21. Ali slår igen luckan. Dagens jobb är klart – gå in i skjulet och sov i sängen. |
| 0:27 | struken | info:info | Pappa kommer gående. Han bär på en kasse … |
| 0:33 | händelse | printStart | sak=n2_vas |
| 0:34 | väntar | värld:TUUT! Tjena! | TUUT! Tjena! |
| 0:34 | sak | värld:TUUT! Tjena! | TUUT! Tjena! |
| 0:34 | bubbla |  | TUUT! Tjena! |
| 0:36 | toast | guld | ✅ |
| 0:36 | händelse | printKlar | sak=n2_vas n=36 |
| 0:37 | nej | du | Ta ut designvas i röd petg |
| 0:37 | toast | fickskylt | Fulla fickor |
| 0:37 | fullaFickor | du | n2_vas |
| 0:37 | klar | värld:TUUT! Tjena! | TUUT! Tjena! |
| 0:37 | händelse | tagitUrPrint | sak=n2_vas n=1 |
| 0:39 | händelse | printStart | sak=n2_hjalm |
| 0:44 | toast | guld | ✅ |
| 0:44 | händelse | printKlar | sak=n2_hjalm n=16 |
| 0:44 | nej | du | Ta ut cykelhjälm i petg |
| 0:44 | toast | fickskylt | Fulla fickor |
| 0:44 | fullaFickor | du | n2_hjalm |
| 0:45 | händelse | tagitUrPrint | sak=n2_hjalm n=1 |
| 0:48 | sak | mamma | Pappa säger att du har byggt ett hus. Med trappa. Är det säkert? Har du räcke? Jag skickar en brandvarnare. Och sylt. |
| 0:48 | sms | mamma | Pappa säger att du har byggt ett hus. Med trappa. Är det säkert? Har du räcke? Jag skickar en brandvarnare. Och sylt. |
| 0:48 | sms-bubbla | mamma | Pappa säger att du har byggt ett hus. Med trappa. Är det säkert? Har du räcke? Jag skickar en brandvarnare. Och sylt. |
| 0:48 | röst | mamma | Pappa säger att du har byggt ett hus. Med trappa. Är det säkert? Har du räcke? Jag skickar en brandvarnare. Och sylt. · STORY |
| 0:58 | klar | mamma | Pappa säger att du har byggt ett hus. Med trappa. Är det säkert? Har du räcke? Jag skickar en brandvarnare. Och sylt. |
| 0:59 | webb | du | packade 1 n2_vas |
| 1:07 | webb | du | packade 1 n2_hjalm |
| 1:21 | väntar | rolf | Ja kände lukten från sopbilen. FRÅN SOPBILEN. Vad har du där borta? /R |
| 1:22 | väntar | info:bra | 📦 Paketet till En lärare i Sundsvall ligger i postlådan – Rolf tar det till posten |
| 1:22 | sak | info:bra | 📦 Paketet till En lärare i Sundsvall ligger i postlådan – Rolf tar det till posten |
| 1:22 | kvitto-visas | info:bra | 📦 Paketet till En lärare i Sundsvall ligger i postlådan – Rolf tar det till posten |
| 1:22 | toast | bra | 📦 Paketet till En lärare i Sundsvall ligger i postlådan – Rolf tar det till posten |
| 1:22 | väntar | info:bra | 📦 Paketet till Ett kafé i Ystad ligger i postlådan – Rolf tar det till posten |
| 1:24 | klar | info:bra | 📦 Paketet till En lärare i Sundsvall ligger i postlådan – Rolf tar det till posten |
| 1:24 | sak | info:bra | 📦 Paketet till Ett kafé i Ystad ligger i postlådan – Rolf tar det till posten |
| 1:24 | kvitto-visas | info:bra | 📦 Paketet till Ett kafé i Ystad ligger i postlådan – Rolf tar det till posten |
| 1:24 | toast | bra | 📦 Paketet till Ett kafé i Ystad ligger i postlådan – Rolf tar det till posten |
| 1:26 | klar | info:bra | 📦 Paketet till Ett kafé i Ystad ligger i postlådan – Rolf tar det till posten |
| 1:28 | händelse | printStart | sak=n3_stol |
| 1:34 | toast | guld | ✅ |
| 1:34 | händelse | printKlar | sak=n3_stol n=18 |
| 1:35 | händelse | tagitUrPrint | sak=n3_stol n=1 |
| 1:38 | poolTom | du | 4 repliker använda |
| 1:42 | poolTom | ali | 4 repliker använda |
| 1:43 | aliSalt | ali | 16000 |
| 1:44 | aliSalt | ali | 6 |
| 1:44 | aliSalt | ali | 240 |
| 1:44 | aliSalt | ali | 170 |
| 1:44 | aliSalt | ali | 162 |
| 1:54 | händelse | printStart | sak=n3_stol |
| 2:00 | toast | guld | ✅ |
| 2:00 | händelse | printKlar | sak=n3_stol n=19 |
| 2:01 | händelse | tagitUrPrint | sak=n3_stol n=1 |
| 2:09 | aliSalt | ali | 15200 |
| 2:20 | händelse | printStart | sak=n3_stol |
| 2:26 | toast | guld | ✅ |
| 2:26 | händelse | printKlar | sak=n3_stol n=20 |
| 2:27 | händelse | tagitUrPrint | sak=n3_stol n=1 |
| 2:28 | skratt | du | falsk tuta |
| 2:28 | väntar | värld:TUUT TUUT! | TUUT TUUT! |
| 2:29 | sak | värld:TUUT TUUT! | TUUT TUUT! |
| 2:29 | bubbla |  | TUUT TUUT! |
| 2:32 | klar | värld:TUUT TUUT! | TUUT TUUT! |
| 2:35 | aliSalt | ali | 14440 |
| 2:46 | händelse | printStart | sak=n3_stol |
| 2:52 | toast | guld | ✅ |
| 2:52 | händelse | printKlar | sak=n3_stol n=21 |
| 2:53 | händelse | tagitUrPrint | sak=n3_stol n=1 |
| 3:02 | aliSalt | ali | 13718 |
| 3:12 | händelse | printStart | sak=n3_stol |
| 3:13 | struken | ali | Ali här. Hämtade lådan klockan sex. 148 saker, 7 252 kr på ditt konto. Grossistpris. Jag har också en hyra. |
| 3:18 | toast | guld | ✅ |
| 3:18 | händelse | printKlar | sak=n3_stol n=22 |
| 3:19 | händelse | tagitUrPrint | sak=n3_stol n=1 |
| 3:28 | aliSalt | ali | 13032 |
| 3:38 | poolTom | du | 4 repliker använda |
| 3:38 | händelse | printStart | sak=n3_stol |
| 3:45 | toast | guld | ✅ |
| 3:45 | händelse | printKlar | sak=n3_stol n=23 |
| 3:45 | händelse | tagitUrPrint | sak=n3_stol n=1 |
| 3:54 | aliSalt | ali | 12380 |
| 3:57 | upplåst | strom | vindkraft |
| 3:57 | brott | RESERV | vindkraft (strom 0 av 15) |
| 3:57 | händelse | upplast | id=vindkraft flask=strom |
| 3:57 | paket |  | sms |
| 3:57 | väntar | ali | Ali här. Ett vindkraftverk. Begagnat, från en gård i Hälsingland. Vingarna är hela. Nästan. |
| 3:57 | sak | ali | Ali här. Ett vindkraftverk. Begagnat, från en gård i Hälsingland. Vingarna är hela. Nästan. |
| 3:57 | sms | ali | Ali här. Ett vindkraftverk. Begagnat, från en gård i Hälsingland. Vingarna är hela. Nästan. |
| 3:57 | sms-bubbla | ali | Ali här. Ett vindkraftverk. Begagnat, från en gård i Hälsingland. Vingarna är hela. Nästan. |
| 3:57 | röst | ali | Ali här. Ett vindkraftverk. Begagnat, från en gård i Hälsingland. Vingarna är hela. Nästan. · STORY |
| 4:05 | klar | ali | Ali här. Ett vindkraftverk. Begagnat, från en gård i Hälsingland. Vingarna är hela. Nästan. |
| 5:33 | struken | mamma | Jag hämtar dig på julafton kl 15. Var redo. |
| 5:38 | poolTom | du | 4 repliker använda |
| 5:57 | skratt | du | falsk tuta |
| 7:38 | poolTom | du | 4 repliker använda |
| 7:58 | väntar | ali | Jag har kaffe. Det är inte gott. Men det finns. |
| 7:58 | sak | ali | Jag har kaffe. Det är inte gott. Men det finns. |
| 7:58 | röst | ali | Jag har kaffe. Det är inte gott. Men det finns. · SMÅPRAT |
| 7:59 | bubbla |  | Jag har kaffe. Det är inte gott. Men det finns. |
| 8:02 | klar | ali | Jag har kaffe. Det är inte gott. Men det finns. |
| 8:06 | händelse | printStart | sak=n2_vas |
| 8:09 | skratt | du | plastspagetti |
| 8:09 | toast | guld | ✅ |
| 8:09 | händelse | printKlar | sak=n2_vas n=37 |
| 8:10 | händelse | tagitUrPrint | sak=spagetti n=1 |
| 8:13 | skratt | du | falsk tuta |
| 8:13 | väntar | värld:TUUT! Tjena! | TUUT! Tjena! |
| 8:13 | sak | värld:TUUT! Tjena! | TUUT! Tjena! |
| 8:13 | bubbla |  | TUUT! Tjena! |
| 8:16 | klar | värld:TUUT! Tjena! | TUUT! Tjena! |
| 8:18 | skratt | du | Ali köper konst |
| 8:18 | aliSalt | ali | 3 |
| 8:26 | händelse | printStart | sak=n2_vas |
| 8:29 | toast | guld | ✅ |
| 8:29 | händelse | printKlar | sak=n2_vas n=38 |
| 8:30 | händelse | tagitUrPrint | sak=n2_vas n=1 |
| 8:38 | aliSalt | ali | 1185 |
| 8:42 | skratt | du | Alis dyr-pling |
| 8:42 | toast | guld | 3D-modell köpt – printa vindkraftverk på skrivaren |
| 8:42 | händelse | kopt | sak=vindkraft |
| 8:49 | händelse | printStart | sak=byggsats:vindkraft |
| 8:52 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 8:53 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 8:54 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 8:54 | väntar | notis:Skrivare L: Tornet är tomt – mal mer så  | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 8:54 | sak | notis:Skrivare L: Tornet är tomt – mal mer så  | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 8:54 | notis | fel | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 8:55 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 8:55 | struken | notis | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 8:57 | klar | notis:Skrivare L: Tornet är tomt – mal mer så  | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 8:57 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 8:57 | struken | notis | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 8:58 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 8:58 | struken | notis | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 8:59 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 8:59 | struken | notis | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 9:01 | väntar | värld:TUUT! Vinka då! | TUUT! Vinka då! |
| 9:01 | skratt | du | Rolf vinkar |
| 9:04 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 9:04 | struken | notis | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 9:05 | skratt | du | kvarnen spottar |
| 9:05 | toast | bra | Del 1 av 4 klar |
| 9:05 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 9:06 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 9:07 | sak | värld:TUUT! Vinka då! | TUUT! Vinka då! |
| 9:07 | bubbla |  | TUUT! Vinka då! |
| 9:08 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 9:09 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 9:10 | klar | värld:TUUT! Vinka då! | TUUT! Vinka då! |
| 9:10 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 9:11 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 9:13 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 9:14 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 9:15 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 9:17 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 9:18 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 9:19 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 9:20 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 9:22 | toast | bra | Del 2 av 4 klar |
| 9:22 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 9:23 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 9:32 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 9:32 | struken | notis | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 9:33 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 9:34 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 9:35 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 9:36 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 9:37 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 9:38 | poolTom | du | 4 repliker använda |
| 9:39 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 9:40 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 9:41 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 9:43 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 9:44 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 9:46 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 9:46 | skratt | du | falsk tuta |
| 9:46 | toast | bra | Del 3 av 4 klar |
| 9:47 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 9:48 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 9:50 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 9:51 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 10:02 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 10:02 | struken | notis | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 10:03 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 10:04 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 10:05 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 10:07 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 10:08 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 10:08 | väntar | värld:TUUT! Tjena! | TUUT! Tjena! |
| 10:08 | sak | värld:TUUT! Tjena! | TUUT! Tjena! |
| 10:08 | bubbla |  | TUUT! Tjena! |
| 10:09 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 10:10 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 10:11 | klar | värld:TUUT! Tjena! | TUUT! Tjena! |
| 10:11 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 10:12 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 10:13 | händelse | printKlar | sak=byggsats:vindkraft n=1 |
| 10:13 | toast | guld | ✅ |
| 10:19 | händelse | tagitUrPrint | sak=byggsats:vindkraft n=1 |
| 10:19 | paket |  | sms |
| 10:19 | väntar | ali | Ali här. Vindkraftverk – printad. På riktigt. Jag har visat bilden för min fru tre gånger. |
| 10:23 | sak | ali | Ali här. Vindkraftverk – printad. På riktigt. Jag har visat bilden för min fru tre gånger. |
| 10:23 | sms | ali | Ali här. Vindkraftverk – printad. På riktigt. Jag har visat bilden för min fru tre gånger. |
| 10:23 | sms-bubbla | ali | Ali här. Vindkraftverk – printad. På riktigt. Jag har visat bilden för min fru tre gånger. |
| 10:23 | röst | ali | Ali här. Vindkraftverk – printad. På riktigt. Jag har visat bilden för min fru tre gånger. · REAKTION |
| 10:29 | händelse | placerat | sak=vindkraft |
| 10:29 | händelse | malKlart | id=m19-vindkraft del=Dag 19 – Ett riktigt hus nasta=m19-guldskrivare |
| 10:29 | målruta |  | Printa och sälj |
| 10:29 | upplåst | skrivare | guldskrivare |
| 10:29 | brott | UPPLÅST | guldskrivare (skrivare 2736 av 75) |
| 10:29 | händelse | upplast | id=guldskrivare flask=skrivare |
| 10:29 | paket |  | tanke → sms |
| 10:29 | tanke | du | Guldrullarna ligger där och glänser. Ingen av skrivarna klarar dem. |
| 10:29 | väntar | du | Guldrullarna ligger där och glänser. Ingen av skrivarna klarar dem. |
| 10:29 | väntar | ali | Ali här. Guldskrivaren. Munstycket är av diamant. Tappa den inte. Den är dyrare än min bil. |
| 10:30 | klar | ali | Ali här. Vindkraftverk – printad. På riktigt. Jag har visat bilden för min fru tre gånger. |
| 10:32 | sak | du | (nytt mål i rutan) |
| 10:32 | pil |  | Bygg guldskrivaren i linje 4 |
| 10:32 | klar | du | Bygg guldskrivaren i linje 4. |
| 10:32 | nick |  | nick:122 |
| 10:33 | kvittens-bock |  | ✓ Bygg vindkraftverket på backen |
| 10:41 | sak | du | Guldrullarna ligger där och glänser. Ingen av skrivarna klarar dem. |
| 10:41 | notis | tanke | 💭 Guldrullarna ligger där och glänser. Ingen av skrivarna klarar dem. |
| 10:41 | röst | du | Guldrullarna ligger där och glänser. Ingen av skrivarna klarar dem. · STORY |
| 10:45 | skratt | du | Alis dyr-pling |
| 10:45 | toast | guld | 3D-modell köpt – printa guldskrivaren på skrivaren |
| 10:45 | händelse | kopt | sak=guldskrivare |
| 10:47 | klar | du | Guldrullarna ligger där och glänser. Ingen av skrivarna klarar dem. |
| 10:49 | struken | ali | Ali här. Guldskrivaren. Munstycket är av diamant. Tappa den inte. Den är dyrare än min bil. |
| 10:55 | väntar | värld:Mjau. | Mjau. |
| 10:57 | sak | värld:Mjau. | Mjau. |
| 10:57 | bubbla |  | Mjau. |
| 10:59 | skratt | du | kvarnen rapar |
| 10:59 | klar | värld:Mjau. | Mjau. |
| 11:03 | toast | guld | 🧵 |
| 11:07 | toast | guld | 🧵 |
| 11:12 | händelse | printStart | sak=byggsats:guldskrivare |
| 11:14 | toast | bra | Del 1 av 5 klar |
| 11:17 | toast | bra | Del 2 av 5 klar |
| 11:19 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 11:26 | skratt | du | kvarnen rapar |
| 11:28 | toast | bra | Del 3 av 5 klar |
| 11:34 | toast | bra | Del 4 av 5 klar |
| 11:38 | poolTom | du | 4 repliker använda |
| 11:39 | händelse | printKlar | sak=byggsats:guldskrivare n=1 |
| 11:39 | toast | guld | ✅ |
| 11:49 | skratt | du | kvarnen rapar |
| 11:51 | händelse | tagitUrPrint | sak=byggsats:guldskrivare n=1 |
| 11:53 | toast | guld | 🧵 |
| 11:55 | händelse | placerat | sak=guldskrivare |
| 11:55 | händelse | malKlart | id=m19-guldskrivare del=Dag 19 – Ett riktigt hus nasta=m19-flytta-in-huset |
| 11:55 | väntar | du | Flytta in i huset. |
| 11:55 | målruta |  | Flytta in i huset |
| 11:55 | MÅL |  | Flytta in i huset |
| 11:56 | skratt | du | däcket rullar iväg |
| 11:57 | sak | du | Flytta in i huset. |
| 11:57 | pil |  | Flytta in i huset |
| 11:57 | röst | du | Flytta in i huset. · MÅL |
| 11:59 | klar | du | Flytta in i huset. |
| 11:59 | kvittens-bock |  | ✓ Bygg guldskrivaren i linje 4 |
| 12:03 | skratt | du | falsk tuta |
| 12:10 | väntar | info:guld | 🏡 Du har flyttat in! Skjulet blir verkstad – du bor i ett riktigt hus nu. |
| 12:10 | paket |  | sms |
| 12:10 | väntar | mamma | Du har flyttat in i ett hus. Med trappa. Jag har köpt en dörrmatta. Det står "Välkommen" på den. Pappa ville att det skulle stå "Gå hem". Jag sa nej. |
| 12:10 | sak | info:guld | 🏡 Du har flyttat in! Skjulet blir verkstad – du bor i ett riktigt hus nu. |
| 12:10 | kvitto-visas | info:guld | 🏡 Du har flyttat in! Skjulet blir verkstad – du bor i ett riktigt hus nu. |
| 12:10 | toast | guld | 🏡 Du har flyttat in! Skjulet blir verkstad – du bor i ett riktigt hus nu. |
| 12:10 | händelse | malKlart | id=m19-flytta-in-huset del=Dag 19 – Ett riktigt hus nasta=sov19 |
| 12:10 | paket |  | lapp |
| 12:10 | väntar | du | Dag 19 är slut. Det blir kallare för varje natt. |
| 12:10 | MÅL |  | Klart för idag – sov när du vill |
| 12:12 | klar | info:guld | 🏡 Du har flyttat in! Skjulet blir verkstad – du bor i ett riktigt hus nu. |
| 12:12 | sak | du | Dag 19 är slut. Det blir kallare för varje natt. |
| 12:12 | kvitto-visas | du | Dag 19 är slut. Det blir kallare för varje natt. |
| 12:12 | lapp | 📔 Dagbok | Dag 19 är slut. Det blir kallare för varje natt. |
| 12:12 | meddelande | du | Dag 19 är slut. Det blir kallare för varje natt. |
| 12:12 | dagbokkort | du | Dag 19 är slut. Det blir kallare för varje natt. |
| 12:12 | röst | du | Dag 19 är slut. Det blir kallare för varje natt. · STORY |
| 12:18 | händelse | brevLast | id=kvall19 |
| 12:18 | klar | du | Dag 19 är slut. Det blir kallare för varje natt. |
| 12:18 | väntar | notis:🌇 Klockan är 21. Ali slår igen luckan.  | 🌇 Klockan är 21. Ali slår igen luckan. Dagens jobb är klart – gå in i skjulet och sov i sängen. |
| 12:18 | målruta |  | Klart för idag – sov när du vill |
| 12:18 | sak | du | (nytt mål i rutan) |
| 12:18 | pil |  | Klart för idag – sov när du vill |
| 12:18 | klar | du | (nytt mål i rutan) |
| 12:28 | webbBetalt | du | 2828 |

<details><summary>Botens handlingar dag 19</summary>

- 0:00 — dag 19 börjar — (63357 kr)
- 0:15 popup: "FORTSÄTT" (63357 kr)
- 0:18 gå till tavlan vid vägen (11 m) (63357 kr)
- 0:18 köper ett riktigt hus på ängen (17500 kr) (45857 kr)
- 0:31 gå till skrivaren (21 m) (45857 kr)
- 0:33 printar Designvas i röd PETG (45857 kr)
- 0:37 tar ut 1 st ur skrivaren (45857 kr)
- 0:37 fulla fickor – lägger fynd4 i kistan (45857 kr)
- 0:39 printar Cykelhjälm i PETG (45857 kr)
- 0:45 tar ut 1 st ur skrivaren (45857 kr)
- 0:45 fulla fickor – lägger n2_vas i kistan (45857 kr)
- 0:50 gå till datorn (21 m) (45857 kr)
- 0:58 panel: "Webbshopen · Soptippsvägen 1
B" (45857 kr)
- 1:07 panel: "Webbshopen · Soptippsvägen 1
B" (45857 kr)
- 1:16 panel: "Webbshopen · Soptippsvägen 1
B" (45857 kr)
- 1:22 gå till Rolfs postlåda (paket) (29 m) (45857 kr)
- 1:23 webbshop: 2 paket i postlådan (45857 kr)
- 1:23 tjänar pengar till väntar på flaskhalsen för vindkraft: 45857/45897 kr → printar kolfiberstol (16000 kr) (45857 kr)
- 1:26 gå till skrivaren (15 m) (45857 kr)
- 1:28 printar Kolfiberstol (45857 kr)
- 1:35 tar ut 1 st ur skrivaren (45857 kr)
- 1:42 gå till Ali (34 m) (45857 kr)
- 1:42 öppnar Alis butik – sälja (45857 kr)
- 1:44 säljer hos Ali: +16578 kr (62435 kr)
- 1:45 tjänar pengar till väntar på flaskhalsen för vindkraft: 62435/62475 kr → printar kolfiberstol (15200 kr) (62435 kr)
- 1:52 gå till skrivaren (33 m) (62435 kr)
- 1:54 printar Kolfiberstol (62435 kr)
- 2:01 tar ut 1 st ur skrivaren (62435 kr)
- 2:08 gå till Ali (33 m) (62435 kr)
- 2:08 öppnar Alis butik – sälja (62435 kr)
- 2:10 säljer hos Ali: +15200 kr (77635 kr)
- 2:11 tjänar pengar till väntar på flaskhalsen för vindkraft: 77635/77675 kr → printar kolfiberstol (14440 kr) (77635 kr)
- 2:18 gå till skrivaren (33 m) (77635 kr)
- 2:20 printar Kolfiberstol (77635 kr)
- 2:27 tar ut 1 st ur skrivaren (77635 kr)
- 2:34 gå till Ali (33 m) (77635 kr)
- 2:34 öppnar Alis butik – sälja (77635 kr)
- 2:36 säljer hos Ali: +14440 kr (92075 kr)
- 2:37 tjänar pengar till väntar på flaskhalsen för vindkraft: 92075/92115 kr → printar kolfiberstol (13718 kr) (92075 kr)
- 2:44 gå till skrivaren (33 m) (92075 kr)
- 2:46 printar Kolfiberstol (92075 kr)
- 2:53 tar ut 1 st ur skrivaren (92075 kr)
- 3:00 gå till Ali (33 m) (92075 kr)
- 3:00 öppnar Alis butik – sälja (92075 kr)
- 3:02 säljer hos Ali: +13718 kr (105793 kr)
- 3:04 tjänar pengar till väntar på flaskhalsen för vindkraft: 105793/105833 kr → printar kolfiberstol (13032 kr) (105793 kr)
- 3:10 gå till skrivaren (33 m) (105793 kr)
- 3:12 printar Kolfiberstol (105793 kr)
- 3:19 tar ut 1 st ur skrivaren (105793 kr)
- 3:26 gå till Ali (33 m) (105793 kr)
- 3:26 öppnar Alis butik – sälja (105793 kr)
- 3:28 säljer hos Ali: +13032 kr (118825 kr)
- 3:30 tjänar pengar till väntar på flaskhalsen för vindkraft: 118825/118865 kr → printar kolfiberstol (12380 kr) (118825 kr)
- 3:36 gå till skrivaren (33 m) (118825 kr)
- 3:38 printar Kolfiberstol (118825 kr)
- 3:45 tar ut 1 st ur skrivaren (118825 kr)
- 3:52 gå till Ali (33 m) (118825 kr)
- 3:52 öppnar Alis butik – sälja (118825 kr)
- 3:54 säljer hos Ali: +12380 kr (131205 kr)
- 3:56 tjänar pengar till väntar på flaskhalsen för vindkraft: 131205/131245 kr → printar kolfiberstol (11761 kr) (131205 kr)
- 3:56 väntar på kolfiber från bandet (131205 kr)
- 4:04 väntar på kolfiber från bandet (131205 kr)
- 4:12 väntar på kolfiber från bandet (131205 kr)
- 4:20 väntar på kolfiber från bandet (131205 kr)
- 4:28 väntar på kolfiber från bandet (131205 kr)
- 4:36 väntar på kolfiber från bandet (131205 kr)
- 4:44 väntar på kolfiber från bandet (131205 kr)
- 4:52 väntar på kolfiber från bandet (131205 kr)
- 5:00 väntar på kolfiber från bandet (131205 kr)
- 5:08 väntar på kolfiber från bandet (131205 kr)
- 5:16 väntar på kolfiber från bandet (131205 kr)
- 5:24 väntar på kolfiber från bandet (131205 kr)
- 5:32 väntar på kolfiber från bandet (131205 kr)
- 5:40 väntar på kolfiber från bandet (131205 kr)
- 5:48 väntar på kolfiber från bandet (131205 kr)
- 5:56 väntar på kolfiber från bandet (131205 kr)
- 6:04 väntar på kolfiber från bandet (131205 kr)
- 6:12 väntar på kolfiber från bandet (131205 kr)
- 6:20 väntar på kolfiber från bandet (131205 kr)
- 6:28 väntar på kolfiber från bandet (131205 kr)
- 6:36 väntar på kolfiber från bandet (131205 kr)
- 6:44 väntar på kolfiber från bandet (131205 kr)
- 6:52 väntar på kolfiber från bandet (131205 kr)
- 7:00 väntar på kolfiber från bandet (131205 kr)
- 7:08 väntar på kolfiber från bandet (131205 kr)
- 7:16 väntar på kolfiber från bandet (131205 kr)
- 7:24 väntar på kolfiber från bandet (131205 kr)
- 7:32 väntar på kolfiber från bandet (131205 kr)
- 7:40 väntar på kolfiber från bandet (131205 kr)
- 7:48 väntar på kolfiber från bandet (131205 kr)
- 7:56 väntar på kolfiber från bandet (131205 kr)
- 7:56 kolfiberstol gick inte att printa – tar nästa (131205 kr)
- 7:56 öppnar Alis butik – sälja (131205 kr)
- 7:58 tjänar pengar till väntar på flaskhalsen för vindkraft: 131205/131245 kr → printar designvas i röd petg (1185 kr) (131205 kr)
- 8:04 gå till skrivaren (29 m) (131205 kr)
- 8:06 printar Designvas i röd PETG (131205 kr)
- 8:10 tar ut 1 st ur skrivaren (131205 kr)
- 8:16 gå till Ali (29 m) (131205 kr)
- 8:16 öppnar Alis butik – sälja (131205 kr)
- 8:18 säljer hos Ali: +3 kr (131208 kr)
- 8:19 tjänar pengar till väntar på flaskhalsen för vindkraft: 131208/131245 kr → printar designvas i röd petg (1185 kr) (131208 kr)
- 8:25 gå till skrivaren (29 m) (131208 kr)
- 8:26 printar Designvas i röd PETG (131208 kr)
- 8:31 tar ut 1 st ur skrivaren (131208 kr)
- 8:37 gå till Ali (29 m) (131208 kr)
- 8:37 öppnar Alis butik – sälja (131208 kr)
- 8:38 säljer hos Ali: +1185 kr (132393 kr)
- 8:40 öppnar Alis butik – köpa vindkraftverk (132393 kr)
- 8:42 köper vindkraft för 6050 kr (126343 kr)
- 8:48 gå till skrivaren (23 m) (126343 kr)
- 8:49 printar Vindkraftverk (4 delar) (126343 kr)
- 9:00 plockar 4 skräp på tippen (bär max 16) (126343 kr)
- 9:02 gå till kvarnen (8 m) (126343 kr)
- 9:28 plockar 4 skräp på tippen (bär max 16) (126343 kr)
- 9:30 gå till kvarnen (10 m) (126343 kr)
- 9:58 plockar 5 skräp på tippen (bär max 16) (126343 kr)
- 10:01 gå till kvarnen (13 m) (126343 kr)
- 10:19 gå till skrivaren (7 m) (126343 kr)
- 10:20 tar ut 1 st ur skrivaren (126343 kr)
- 10:28 gå till platsen för vindkraftverk (40 m) (126343 kr)
- 10:29 ställer ut vindkraftverk (126343 kr)
- 10:43 gå till Ali (45 m) (126343 kr)
- 10:43 öppnar Alis butik – köpa guldskrivaren (126343 kr)
- 10:46 köper guldskrivare för 4200 kr (122143 kr)
- 10:55 gå till en tunna (40 m) (122143 kr)
- 10:59 gå till PETG-kvarnen (14 m) (122143 kr)
- 10:59 tömmer det tunga i PETG-kvarnen (122143 kr)
- 11:10 gå till skrivaren (3 m) (122143 kr)
- 11:12 printar Guldskrivaren (5 delar) (122143 kr)
- 11:23 gå till en tunna (14 m) (122143 kr)
- 11:26 gå till PETG-kvarnen (10 m) (122143 kr)
- 11:26 tömmer det tunga i PETG-kvarnen (122143 kr)
- 11:45 gå till en tunna (12 m) (122143 kr)
- 11:49 gå till PETG-kvarnen (12 m) (122143 kr)
- 11:49 tömmer det tunga i PETG-kvarnen (122143 kr)
- 11:51 gå till skrivaren (4 m) (122143 kr)
- 11:52 tar ut 1 st ur skrivaren (122143 kr)
- 11:54 gå till platsen för guldskrivaren (10 m) (122143 kr)
- 11:55 ställer ut guldskrivaren (122143 kr)
- 12:10 gå till huset (41 m) (122143 kr)
- 12:18 popup: "FORTSÄTT" (122143 kr)
- 12:25 gå till sängen (22 m) (122143 kr)

</details>

## Dag 20

| Tid | Källa | Vem | Text |
|---|---|---|---|
| 12:28 | vara | ali | n2_hjalm |
| 12:28 | väntar | info:guld | Nu blir det riktigt kallt. Utan vedkamin och hela väggar fryser du. |
| 12:28 | sak | info:guld | Nu blir det riktigt kallt. Utan vedkamin och hela väggar fryser du. |
| 12:28 | kvitto-visas | info:guld | Nu blir det riktigt kallt. Utan vedkamin och hela väggar fryser du. |
| 12:28 | toast | guld | Nu blir det riktigt kallt. Utan vedkamin och hela väggar fryser du. |
| 12:28 | händelse | malKlart | id=sov19 del=Dag 19 – Ett riktigt hus nasta=m20-printa-stall-ut |
| 12:28 | MÅL |  | Printa och ställ ut en vedkamin |
| 0:00 | klar | info:guld | Nu blir det riktigt kallt. Utan vedkamin och hela väggar fryser du. |
| 0:01 | händelse | dagenBorjar | dag=20 |
| 0:01 | meddelande | du | Dag 20. 2 dagar till jul. Utan kamin får mamma rätt. |
| 0:01 | dagbokkort | du | Kylan · Dag 20. 2 dagar till jul. Utan kamin får mamma rätt. |
| 0:01 | röst | du | Kylan. Dag 20. 2 dagar till jul. Utan kamin får mamma rätt. · STORY |
| 0:03 | paket |  | sms |
| 0:03 | väntar | rolf | Ett litet uppdrag. Inget farligt. Nästan inget farligt. Lådan. /R |
| 0:15 | händelse | morgonkortStangt | dag=20 |
| 0:15 | struken | kedja | d20 |
| 0:15 | väntar | du | Printa och ställ ut en vedkamin. |
| 0:17 | väntar | foto | Ett hus |
| 0:17 | paket |  | tanke |
| 0:17 | tanke | du | Ett riktigt hus. Vänta bara tills mamma ser det. |
| 0:17 | väntar | du | Ett riktigt hus. Vänta bara tills mamma ser det. |
| 0:19 | målruta |  | Printa och ställ ut en vedkamin |
| 0:20 | sak | du | Printa och ställ ut en vedkamin. |
| 0:20 | pil |  | Printa och ställ ut en vedkamin |
| 0:20 | röst | du | Printa och ställ ut en vedkamin. · MÅL |
| 0:21 | nick |  | nick:125 |
| 0:21 | väntar | info:guld | Göran lämnade en blank skruv på säljlådan. |
| 0:23 | klar | du | Printa och ställ ut en vedkamin. |
| 0:23 | sak | info:guld | Göran lämnade en blank skruv på säljlådan. |
| 0:23 | kvitto-visas | info:guld | Göran lämnade en blank skruv på säljlådan. |
| 0:23 | toast | guld | Göran lämnade en blank skruv på säljlådan. |
| 0:25 | klar | info:guld | Göran lämnade en blank skruv på säljlådan. |
| 0:27 | struken | notis:🌇 Klockan är 21. Ali slår igen luckan.  | 🌇 Klockan är 21. Ali slår igen luckan. Dagens jobb är klart – gå in i skjulet och sov i sängen. |
| 0:41 | sak | foto | Ett hus |
| 0:41 | foto | du | Ett hus |
| 0:43 | klar | foto | Ett hus |
| 0:47 | poolTom | ali | 4 repliker använda |
| 0:49 | skratt | du | Alis dyr-pling |
| 0:49 | händelse | kopt | sak=kamin |
| 0:51 | sak | mamma | Du har flyttat in i ett hus. Med trappa. Jag har köpt en dörrmatta. Det står "Välkommen" på den. Pappa ville att det skulle stå "Gå hem". Jag sa nej. |
| 0:51 | sms | mamma | Du har flyttat in i ett hus. Med trappa. Jag har köpt en dörrmatta. Det står "Välkommen" på den. Pappa ville att det skulle stå "Gå hem". Jag sa nej. |
| 0:51 | sms-bubbla | mamma | Du har flyttat in i ett hus. Med trappa. Jag har köpt en dörrmatta. Det står "Välkommen" på den. Pappa ville att det skulle stå "Gå hem". Jag sa nej. |
| 0:51 | röst | mamma | Du har flyttat in i ett hus. Med trappa. Jag har köpt en dörrmatta. Det står "Välkommen" på den. Pappa ville att det skulle stå "Gå hem". Jag sa nej. · STORY |
| 0:57 | händelse | printStart | sak=kamin |
| 1:01 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 1:04 | klar | mamma | Du har flyttat in i ett hus. Med trappa. Jag har köpt en dörrmatta. Det står "Välkommen" på den. Pappa ville att det skulle stå "Gå hem". Jag sa nej. |
| 1:04 | väntar | helen | Det där var mitt arkiv. |
| 1:08 | tanke | du | Det drar. Från överallt. |
| 1:08 | väntar | du | Det drar. Från överallt. |
| 1:10 | skratt | du | kvarnen spottar |
| 1:11 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 1:11 | väntar | notis:Skrivare L: Tornet är tomt – mal mer så  | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 1:12 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 1:12 | struken | notis | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 1:13 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 1:13 | struken | notis | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 1:14 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 1:14 | struken | notis | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 1:16 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 1:16 | struken | notis | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 1:17 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 1:17 | struken | notis | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 1:18 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 1:18 | sak | du | Ett riktigt hus. Vänta bara tills mamma ser det. |
| 1:18 | notis | tanke | 💭 Ett riktigt hus. Vänta bara tills mamma ser det. |
| 1:18 | röst | du | Ett riktigt hus. Vänta bara tills mamma ser det. · STORY |
| 1:19 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 1:20 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 1:22 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 1:22 | klar | du | Ett riktigt hus. Vänta bara tills mamma ser det. |
| 1:24 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 1:24 | toast | guld | ✅ |
| 1:24 | händelse | printKlar | sak=kamin n=1 |
| 1:30 | sak | helen | Det där var mitt arkiv. |
| 1:30 | röst | helen | Det där var mitt arkiv. · REAKTION |
| 1:31 | händelse | tagitUrPrint | sak=kamin n=1 |
| 1:31 | bubbla |  | Det där var mitt arkiv. |
| 1:33 | klar | helen | Det där var mitt arkiv. |
| 1:41 | händelse | placerat | sak=kamin |
| 1:41 | händelse | malKlart | id=m20-printa-stall-ut del=Dag 20 – Kylan nasta=m20-stall-in-kamin |
| 1:41 | händelse | malKlart | id=m20-stall-in-kamin del=Dag 20 – Kylan nasta=sov20 |
| 1:41 | paket |  | lapp |
| 1:41 | lapp | 📔 Dagbok | Dag 20 är slut. Jag finns inte på riktigt här än. |
| 1:41 | meddelande | du | Dag 20 är slut. Jag finns inte på riktigt här än. |
| 1:41 | dagbokkort | du | Dag 20 är slut. Jag finns inte på riktigt här än. |
| 1:41 | målruta |  | Klart för idag – sov när du vill |
| 1:41 | MÅL |  | Klart för idag – sov när du vill |
| 1:41 | röst | du | Dag 20 är slut. Jag finns inte på riktigt här än. · STORY |
| 1:47 | händelse | brevLast | id=kvall20 |
| 1:48 | struken | notis | 🌇 Klockan är 21. Ali slår igen luckan. Dagens jobb är klart – gå in i skjulet och sov i sängen. |
| 1:48 | skratt | du | däcket rullar iväg |
| 1:49 | sak | du | (nytt mål i rutan) |
| 1:49 | pil |  | Klart för idag – sov när du vill |
| 1:49 | klar | du | (nytt mål i rutan) |

<details><summary>Botens handlingar dag 20</summary>

- 0:00 — dag 20 börjar — (124971 kr)
- 0:15 popup: "FORTSÄTT" (124971 kr)
- 0:32 gå till Rolfs postlåda (31 m) (124971 kr)
- 0:41 panel: "En lapp från Rolf
Lite olaglig" (124971 kr)
- 0:47 gå till Ali (31 m) (124971 kr)
- 0:47 öppnar Alis butik – köpa receptet vedkamin (124971 kr)
- 0:50 köper kamin för 9750 kr (115221 kr)
- 0:56 gå till skrivaren (23 m) (115221 kr)
- 0:57 printar Vedkamin (115221 kr)
- 1:09 gå till kvarnen (21 m) (115221 kr)
- 1:15 plockar 3 skräp på tippen (bär max 16) (115221 kr)
- 1:18 gå till kvarnen (12 m) (115221 kr)
- 1:31 gå till skrivaren (7 m) (115221 kr)
- 1:31 tar ut 1 st ur skrivaren (115221 kr)
- 1:39 gå till platsen för vedkamin (22 m) (115221 kr)
- 1:41 ställer ut vedkamin (115221 kr)
- 1:47 popup: "FORTSÄTT" (115221 kr)
- 1:52 gå till sängen (2 m) (115221 kr)

</details>

## Dag 21

| Tid | Källa | Vem | Text |
|---|---|---|---|
| 1:54 | vara | ali | n2_vas |
| 1:54 | sak | du | Det drar. Från överallt. |
| 1:54 | notis | tanke | 💭 Det drar. Från överallt. |
| 1:54 | röst | du | Det drar. Från överallt. · REAKTION |
| 1:54 | händelse | malKlart | id=sov20 del=Dag 20 – Kylan nasta=m21-bli-folkbokford |
| 1:54 | MÅL |  | Bli folkbokförd – tavlan vid vägen |
| 0:00 | klar | du | Det drar. Från överallt. |
| 0:01 | händelse | dagenBorjar | dag=21 |
| 0:01 | meddelande | du | Dag 21. 1 dag till jul. Utan adress finns jag inte, hur fint huset än är. |
| 0:01 | dagbokkort | du | Folkbokförd · Dag 21. 1 dag till jul. Utan adress finns jag inte, hur fint huset än är. |
| 0:01 | röst | du | Folkbokförd. Dag 21. 1 dag till jul. Utan adress finns jag inte, hur fint huset än är. · STORY |
| 0:15 | händelse | morgonkortStangt | dag=21 |
| 0:15 | paket |  | toast |
| 0:15 | väntar | notis:🔥 Varmt och skönt i skjulet trots kylan | 🔥 Varmt och skönt i skjulet trots kylan. |
| 0:15 | struken | kedja | d21 |
| 0:15 | väntar | du | tillbakablick paketet |
| 0:21 | struken | notis:Skrivare L: Tornet är tomt – mal mer så  | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 0:21 | sak | notis:🔥 Varmt och skönt i skjulet trots kylan | 🔥 Varmt och skönt i skjulet trots kylan. |
| 0:21 | toast | bra | 🔥 Varmt och skönt i skjulet trots kylan. |
| 0:21 | notis | bra | 🔥 Varmt och skönt i skjulet trots kylan. |
| 0:23 | klar | notis:🔥 Varmt och skönt i skjulet trots kylan | 🔥 Varmt och skönt i skjulet trots kylan. |
| 0:25 | tillbakablick | du | paketet |
| 0:28 | väntar | du | Bli folkbokförd – tavlan vid vägen. |
| 0:28 | målruta |  | Bli folkbokförd – tavlan vid vägen |
| 0:29 | sak | du | Bli folkbokförd – tavlan vid vägen. |
| 0:29 | pil |  | Bli folkbokförd – tavlan vid vägen |
| 0:29 | röst | du | Bli folkbokförd – tavlan vid vägen. · MÅL |
| 0:31 | väntar | info:guld | 📮 Du är folkbokförd! Soptippsvägen 1 är din adress. |
| 0:31 | paket |  | sms |
| 0:31 | väntar | rolf | Grattis granne. Nu e du på riktigt. Ja tar me grillen på lördag. Kajsa oxå. /R |
| 0:31 | paket |  | sms |
| 0:31 | väntar | bror | Pappa sa "fint jobbat". Två gånger. Han har aldrig sagt det två gånger. Grattis lillebror. Eller vad du nu är. Du vet. |
| 0:31 | händelse | malKlart | id=m21-bli-folkbokford del=Dag 21 – Folkbokförd nasta=sov21 |
| 0:31 | paket |  | lapp |
| 0:31 | väntar | du | Dag 21 är slut. Nu vet Skatteverket att jag bor HÄR. I morgon är det julafton. |
| 0:31 | MÅL |  | Klart för idag – sov när du vill |
| 0:32 | klar | du | Bli folkbokförd – tavlan vid vägen. |
| 0:32 | sak | info:guld | 📮 Du är folkbokförd! Soptippsvägen 1 är din adress. |
| 0:32 | kvitto-visas | info:guld | 📮 Du är folkbokförd! Soptippsvägen 1 är din adress. |
| 0:32 | toast | guld | 📮 Du är folkbokförd! Soptippsvägen 1 är din adress. |
| 0:34 | klar | info:guld | 📮 Du är folkbokförd! Soptippsvägen 1 är din adress. |
| 0:34 | sak | du | Dag 21 är slut. Nu vet Skatteverket att jag bor HÄR. I morgon är det julafton. |
| 0:34 | kvitto-visas | du | Dag 21 är slut. Nu vet Skatteverket att jag bor HÄR. I morgon är det julafton. |
| 0:34 | lapp | 📔 Dagbok | Dag 21 är slut. Nu vet Skatteverket att jag bor HÄR. I morgon är det julafton. |
| 0:34 | meddelande | du | Dag 21 är slut. Nu vet Skatteverket att jag bor HÄR. I morgon är det julafton. |
| 0:34 | dagbokkort | du | Dag 21 är slut. Nu vet Skatteverket att jag bor HÄR. I morgon är det julafton. |
| 0:34 | röst | du | Dag 21 är slut. Nu vet Skatteverket att jag bor HÄR. I morgon är det julafton. · STORY |
| 0:42 | händelse | brevLast | id=kvall21 |
| 0:42 | klar | du | Dag 21 är slut. Nu vet Skatteverket att jag bor HÄR. I morgon är det julafton. |
| 0:42 | väntar | notis:🌇 Klockan är 21. Ali slår igen luckan.  | 🌇 Klockan är 21. Ali slår igen luckan. Dagens jobb är klart – gå in i skjulet och sov i sängen. |
| 0:42 | målruta |  | Klart för idag – sov när du vill |
| 0:43 | sak | du | (nytt mål i rutan) |
| 0:43 | pil |  | Klart för idag – sov när du vill |
| 0:43 | klar | du | (nytt mål i rutan) |

<details><summary>Botens handlingar dag 21</summary>

- 0:00 — dag 21 börjar — (115221 kr)
- 0:15 popup: "FORTSÄTT" (115221 kr)
- 0:31 gå till tavlan vid vägen (12 m) (115221 kr)
- 0:31 blir folkbokförd (108021 kr)
- 0:42 popup: "FORTSÄTT" (108021 kr)
- 0:47 gå till sängen (11 m) (108021 kr)

</details>

## Dag 22

| Tid | Källa | Vem | Text |
|---|---|---|---|
| 0:50 | vara | ali | n2_hjalm |
| 0:50 | händelse | malKlart | id=sov21 del=Dag 21 – Folkbokförd nasta=m22-printa-julbordet |
| 0:50 | händelse | malKlart | id=m22-printa-julbordet del=Dag 22 – Jul på Soptippsvägen 1 nasta=m22-tand-skylten |
| 0:50 | MÅL |  | Skylten med mitt namn på dörren |
| 0:01 | händelse | dagenBorjar | dag=22 |
| 0:01 | meddelande | du | Julafton. Utan skylt på dörren kör mamma hem med mig. |
| 0:01 | dagbokkort | du | Jul på Soptippsvägen 1 · Julafton. Utan skylt på dörren kör mamma hem med mig. |
| 0:01 | röst | du | Jul på Soptippsvägen 1. Julafton. Utan skylt på dörren kör mamma hem med mig. · STORY |
| 0:15 | händelse | morgonkortStangt | dag=22 |
| 0:15 | struken | kedja | d22 |
| 0:15 | väntar | du | Skylten med mitt namn på dörren. |
| 0:19 | målruta |  | Skylten med mitt namn på dörren |
| 0:19 | väntar | notis:📔 Prestation: Posten hittar hit · +3 re | 📔 Prestation: Posten hittar hit · +3 respekt |
| 0:20 | sak | du | Skylten med mitt namn på dörren. |
| 0:20 | pil |  | Skylten med mitt namn på dörren |
| 0:20 | röst | du | Skylten med mitt namn på dörren. · MÅL |
| 0:22 | tanke | du | Fingrarna vill inte riktigt. |
| 0:22 | väntar | du | Fingrarna vill inte riktigt. |
| 0:23 | klar | du | Skylten med mitt namn på dörren. |
| 0:23 | väntar | mamma | Jag kommer kl 15 och hämtar dig. Pappa kör. Var redo. |
| 0:24 | morgonkort | 🏆 Du är hemma | 🏆 Du är hemma · Du klarade det på dag 22. Från hobo dweller vid en soptipp till godsägare och folkbokförd. Mamma är imponerad. Pappa log. Spelet fortsätter – bygg vidare så länge du vill. |
| 0:38 | struken | notis:🌇 Klockan är 21. Ali slår igen luckan.  | 🌇 Klockan är 21. Ali slår igen luckan. Dagens jobb är klart – gå in i skjulet och sov i sängen. |
| 0:38 | struken | notis:📔 Prestation: Posten hittar hit · +3 re | 📔 Prestation: Posten hittar hit · +3 respekt |
| 0:38 | sak | du | Fingrarna vill inte riktigt. |
| 0:38 | notis | tanke | 💭 Fingrarna vill inte riktigt. |
| 0:38 | röst | du | Fingrarna vill inte riktigt. · REAKTION |
| 0:41 | klar | du | Fingrarna vill inte riktigt. |
| 0:48 | väntar | info:guld | Skylten sitter på dörren. Simulering, Soptippsvägen 1. |
| 0:48 | sak | info:guld | Skylten sitter på dörren. Simulering, Soptippsvägen 1. |
| 0:48 | kvitto-visas | info:guld | Skylten sitter på dörren. Simulering, Soptippsvägen 1. |
| 0:48 | toast | guld | Skylten sitter på dörren. Simulering, Soptippsvägen 1. |
| 0:48 | händelse | malKlart | id=m22-tand-skylten del=Dag 22 – Jul på Soptippsvägen 1 nasta=m22-oppna-dorren-gasterna |
| 0:48 | väntar | du | Ta emot mamma. |
| 0:49 | MÅL |  | Ta emot mamma |
| 0:50 | klar | info:guld | Skylten sitter på dörren. Simulering, Soptippsvägen 1. |
| 0:50 | målruta |  | Ta emot mamma |
| 0:51 | väntar | du | tillbakablick vadet |
| 0:51 | väntar | info:guld | Göran lämnade en blank skruv på säljlådan. |
| 0:51 | sak | du | Ta emot mamma. |
| 0:51 | pil |  | Ta emot mamma |
| 0:51 | röst | du | Ta emot mamma. · MÅL |
| 0:52 | kvittens-bock |  | ✓ Skylten med mitt namn på dörren |
| 0:54 | klar | du | Ta emot mamma. |
| 0:54 | sak | info:guld | Göran lämnade en blank skruv på säljlådan. |
| 0:54 | kvitto-visas | info:guld | Göran lämnade en blank skruv på säljlådan. |
| 0:54 | toast | guld | Göran lämnade en blank skruv på säljlådan. |
| 0:56 | klar | info:guld | Göran lämnade en blank skruv på säljlådan. |
| 1:05 | sak | bror | Pappa sa "fint jobbat". Två gånger. Han har aldrig sagt det två gånger. Grattis lillebror. Eller vad du nu är. Du vet. |
| 1:05 | sms | bror | Pappa sa "fint jobbat". Två gånger. Han har aldrig sagt det två gånger. Grattis lillebror. Eller vad du nu är. Du vet. |
| 1:05 | sms-bubbla | bror | Pappa sa "fint jobbat". Två gånger. Han har aldrig sagt det två gånger. Grattis lillebror. Eller vad du nu är. Du vet. |
| 1:05 | röst | bror | Pappa sa "fint jobbat". Två gånger. Han har aldrig sagt det två gånger. Grattis lillebror. Eller vad du nu är. Du vet. · STORY |
| 1:09 | tillbakablick | du | vadet |
| 1:10 | väntar | mamma | Det är du alltid. |
| 1:12 | väntar | info:bra | 🚗 En bil svänger in vid grinden. |
| 1:15 | klar | bror | Pappa sa "fint jobbat". Två gånger. Han har aldrig sagt det två gånger. Grattis lillebror. Eller vad du nu är. Du vet. |
| 1:15 | sak | info:bra | 🚗 En bil svänger in vid grinden. |
| 1:15 | kvitto-visas | info:bra | 🚗 En bil svänger in vid grinden. |
| 1:15 | toast | bra | 🚗 En bil svänger in vid grinden. |
| 1:17 | klar | info:bra | 🚗 En bil svänger in vid grinden. |
| 1:26 | skratt | du | falsk tuta |
| 1:26 | sak | mamma | Det är du alltid. |
| 1:26 | röst | mamma | Det är du alltid. · STORY |
| 1:29 | klar | mamma | Det är du alltid. |
| 1:50 | sak | mamma | Jag kommer kl 15 och hämtar dig. Pappa kör. Var redo. |
| 1:50 | sms | mamma | Jag kommer kl 15 och hämtar dig. Pappa kör. Var redo. |
| 1:50 | sms-bubbla | mamma | Jag kommer kl 15 och hämtar dig. Pappa kör. Var redo. |
| 1:50 | röst | mamma | Jag kommer kl 15 och hämtar dig. Pappa kör. Var redo. · STORY |
| 1:55 | klar | mamma | Jag kommer kl 15 och hämtar dig. Pappa kör. Var redo. |
| 2:22 | tanke | du | Jag fryser om tårna. |
| 2:22 | väntar | du | Jag fryser om tårna. |
| 2:22 | sak | du | Jag fryser om tårna. |
| 2:22 | notis | tanke | 💭 Jag fryser om tårna. |
| 2:22 | röst | du | Jag fryser om tårna. · REAKTION |
| 2:25 | klar | du | Jag fryser om tårna. |
| 2:29 | väntar | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått vedkamin. Vi tar en låt på det. Den här är till dig, Gunnar. |
| 2:29 | radio | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått vedkamin. Vi tar en låt på det. Den här är till dig, Gunnar. |
| 2:29 | skratt | du | Radio-Kjelle |
| 2:34 | sak | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått vedkamin. Vi tar en låt på det. Den här är till dig, Gunnar. |
| 2:34 | notis |  | 📻 Radio Tippen: Radio Tippen, Kjelle här. Skjulet vid tippen har fått vedkamin. Vi tar en låt på det. Den här är till dig, Gunnar. |
| 2:34 | röst | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått vedkamin. Vi tar en låt på det. Den här är till dig, Gunnar. · REAKTION |
| 2:44 | klar | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått vedkamin. Vi tar en låt på det. Den här är till dig, Gunnar. |
| 3:12 | röst | rolf | Goddag … ja. Ja har kavaj. Fråga int. · STORY |
| 3:16 | röst | ali | Habibi. Roboten säger god jul. Jag lärde den. Säg inget till min fru – hon är här. · STORY |
| 3:22 | röst | berattare | Lasse har en ny termos. Den håller värmen i nitton timmar. Han har testat. Gunnar säger: "Vanilj." · STORY |
| 3:29 | röst | berattare | Bengt-Åke ställer en gran från egen skog i hörnet. Han går inte. · STORY |
| 3:34 | röst | berattare | HMPF. God jul. · STORY |
| 3:38 | röst | bror | Den är inte från mig. Den låg utanför. Typ. · STORY |
| 3:42 | röst | mamma | Jag skulle hämta dig. · STORY |
| 3:45 | röst | mamma | Det är så STÄDAT! · STORY |
| 3:50 | röst | mamma | Vi stannar. Pappa, hämta granen. · STORY |
| 3:55 | röst | pappa | Jaha. · STORY |
| 3:59 | röst | pappa | Taket håller i alla fall. · STORY |
| 4:02 | röst | pappa | Ja ja. Det här kunde varit värre. · STORY |
| 4:05 | röst | berattare | Skinkan från augusti. Granris i en vas. · STORY |
| 4:12 | röst | berattare | Göran sitter på fönsterblecket och tittar på skinkan. · STORY |
| 4:17 | röst | berattare | Rolf på trummor med två kastruller. Lasse och Gunnar på printade elgitarrer. Det är högt. Det är bra. · STORY |
| 4:29 | röst | berattare | Helen dansar till kassetten. Som en tvättmaskin. · STORY |
| 4:32 | röst | rolf | Precis som 1987. · STORY |
| 4:37 | röst | berattare | Mamma har med sig en prinsesstårta i stället för skinkan från augusti. · STORY |
| 4:43 | röst | rolf | …Dä ä fredag nånstans. · STORY |
| 4:46 | röst | pappa | Ja ska fatta mej kort. · STORY |
| 4:50 | röst | pappa | Scania byggde sin första lastbil nittonhundraelva. · STORY |
| 4:58 | röst | pappa | Djurgården har vunnit SM tolv gånger. · STORY |
| 5:03 | röst | pappa | Skinkan har legat i frysen sen augusti. · STORY |
| 5:08 | röst | pappa | Ja … är stolt över dej. Aha. Vad lugnt då. · STORY |
| 5:13 | röst | berattare | Mamma gråter. · STORY |
| 5:16 | paket |  | replik → lapp → ge |
| 5:16 | väntar | mamma | Den här är till dig. Öppna den nu. |
| 5:16 | väntar | mamma | Du sa att du skulle fira jul ensam. Jag är glad att du ljög. Kram, Mamma |
| 5:16 | väntar |  | (läget ändras) |
| 5:16 | händelse | malKlart | id=m22-oppna-dorren-gasterna del=Dag 22 – Jul på Soptippsvägen 1 nasta=steg133 |
| 5:16 | tanke | du | Jag ser min andedräkt. Inomhus. |
| 5:16 | väntar | du | Jag ser min andedräkt. Inomhus. |
| 5:16 | struken | du | Jag ser min andedräkt. Inomhus. |
| 5:16 | väntar | du | . |
| 5:16 | MÅL |  | (inga mål) |
| 5:16 | sak | du | . |
| 5:16 | röst | du | . · MÅL |
| 5:18 | klar | du | . |
| 5:20 | kvittens-bock |  | ✓ Ta emot mamma |
| 5:20 | väntar | info:guld | 🌲 Marken runt tippen är din! Gärdesgården har flyttats – där får du ställa saker nu. |
| 5:20 | paket |  | sms |
| 5:20 | väntar | rolf | Marken runt tippen e din. Bengt-Åke sa att han e glad att bli av me den. Han kalla den "stenåkern". Ja kallar den "framtiden". /R |
| 5:20 | sak | info:guld | 🌲 Marken runt tippen är din! Gärdesgården har flyttats – där får du ställa saker nu. |
| 5:20 | kvitto-visas | info:guld | 🌲 Marken runt tippen är din! Gärdesgården har flyttats – där får du ställa saker nu. |
| 5:20 | toast | guld | 🌲 Marken runt tippen är din! Gärdesgården har flyttats – där får du ställa saker nu. |
| 5:22 | klar | info:guld | 🌲 Marken runt tippen är din! Gärdesgården har flyttats – där får du ställa saker nu. |
| 5:25 | väntar | info:guld | 🗑️ Tippen är din. Rolf kör åt dig nu. |
| 5:25 | paket |  | sms |
| 5:25 | väntar | rolf | Du äger tippen nu. Ja kör fortfarande sopbilen. Men nu e du chefen. Rudolf ä sur. Hä hä. Kajsa bryr sej int. /R |
| 5:25 | sak | info:guld | 🗑️ Tippen är din. Rolf kör åt dig nu. |
| 5:25 | kvitto-visas | info:guld | 🗑️ Tippen är din. Rolf kör åt dig nu. |
| 5:25 | toast | guld | 🗑️ Tippen är din. Rolf kör åt dig nu. |
| 5:27 | klar | info:guld | 🗑️ Tippen är din. Rolf kör åt dig nu. |
| 5:27 | väntar | notis:📔 Prestation: Jul på tippen · +3 respek | 📔 Prestation: Jul på tippen · +3 respekt |
| 5:29 | väntar | info:guld | 🏠 Rolf har ett riktigt hus! Garaget står vid tippen. |
| 5:29 | paket |  | sms |
| 5:29 | väntar | rolf | Ja vet int va ja ska säja. Ja har bott i husvagnen sen 2009. Nu har ja en VERANDA. Kajsa har redan pinkat i hörnet. De betyder att hon gillar de. Tack. /R |
| 5:29 | sak | info:guld | 🏠 Rolf har ett riktigt hus! Garaget står vid tippen. |
| 5:29 | kvitto-visas | info:guld | 🏠 Rolf har ett riktigt hus! Garaget står vid tippen. |
| 5:29 | toast | guld | 🏠 Rolf har ett riktigt hus! Garaget står vid tippen. |
| 5:31 | klar | info:guld | 🏠 Rolf har ett riktigt hus! Garaget står vid tippen. |
| 5:32 | väntar | info:guld | Skylten vid vägen är uppgraderad. |
| 5:32 | paket |  | sms |
| 5:32 | väntar | rolf | Kommunen satt upp en RIKTI skylt. Ja grät int. Kajsa grät. MVH ROLF |
| 5:32 | sak | info:guld | Skylten vid vägen är uppgraderad. |
| 5:32 | kvitto-visas | info:guld | Skylten vid vägen är uppgraderad. |
| 5:32 | toast | guld | Skylten vid vägen är uppgraderad. |
| 5:34 | klar | info:guld | Skylten vid vägen är uppgraderad. |
| 5:36 | väntar | info:guld | 🌲 Backen i norr är din! Gärdesgården har flyttats – där får du ställa saker nu. |
| 5:36 | sak | info:guld | 🌲 Backen i norr är din! Gärdesgården har flyttats – där får du ställa saker nu. |
| 5:36 | kvitto-visas | info:guld | 🌲 Backen i norr är din! Gärdesgården har flyttats – där får du ställa saker nu. |
| 5:36 | toast | guld | 🌲 Backen i norr är din! Gärdesgården har flyttats – där får du ställa saker nu. |
| 5:37 | väntar | värld:HMPF. Backen. Den är brant. De | HMPF. Backen. Den är brant. Den passar er. |
| 5:38 | klar | info:guld | 🌲 Backen i norr är din! Gärdesgården har flyttats – där får du ställa saker nu. |
| 5:41 | paket |  | sms |
| 5:41 | väntar | mamma | Pappa och Rolf bygger verandan. De har pratat Scania i tre timmar. Ingen av dem har sagt något annat. Jag tror de är lyckliga. |
| 5:41 | väntar | kjelle | Kjelle här, direkt från julfesten! Gunnar, du är här. Säg något till lyssnarna! |
| 5:41 | radio | kjelle | Kjelle här, direkt från julfesten! Gunnar, du är här. Säg något till lyssnarna! |
| 5:41 | skratt | du | Radio-Kjelle |
| 5:45 | händelse | printStart | sak=nyckelring |
| 5:45 | toast | guld | ✅ |
| 5:45 | händelse | printKlar | sak=nyckelring n=29 |
| 5:46 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 5:47 | skratt | du | falsk tuta |
| 5:47 | väntar | värld:TUUT! Grann skylt! | TUUT! Grann skylt! |
| 5:47 | väntar | gunnar | Vanilj. |
| 5:47 | radio | gunnar | Vanilj. |
| 5:47 | skratt | du | Gunnar svarar |
| 5:48 | händelse | printStart | sak=nyckelring |
| 5:48 | skratt | du | Kajsa i skrivaren |
| 5:48 | toast | guld | ✅ |
| 5:48 | händelse | printKlar | sak=nyckelring n=30 |
| 5:49 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 5:49 | väntar | foto | Alla |
| 5:49 | paket |  | tanke |
| 5:49 | tanke | du | Alla är här. Hos mig. |
| 5:49 | väntar | du | Alla är här. Hos mig. |
| 5:49 | sak | foto | Alla |
| 5:49 | foto | du | Alla |
| 5:52 | klar | foto | Alla |
| 6:01 | paket |  | sms |
| 6:01 | väntar | chefen | Rudolf. Jag går i pension. Espressomaskinen står på din bänk. Inga böter. |
| 6:01 | sak | mamma | Den här är till dig. Öppna den nu. |
| 6:01 | notis |  | Mamma: ”Den här är till dig. Öppna den nu.” |
| 6:01 | röst | mamma | Den här är till dig. Öppna den nu. · STORY |
| 6:02 | webb | du | packade 1 nyckelring |
| 6:04 | klar | mamma | Den här är till dig. Öppna den nu. |
| 6:11 | sak | du | Alla är här. Hos mig. |
| 6:11 | notis | tanke | 💭 Alla är här. Hos mig. |
| 6:11 | röst | du | Alla är här. Hos mig. · STORY |
| 6:13 | klar | du | Alla är här. Hos mig. |
| 6:15 | struken | värld:HMPF. Backen. Den är brant. De | HMPF. Backen. Den är brant. Den passar er. |
| 6:18 | väntar | info:bra | 📦 Paketet till Någon som bara skrev "hej" ligger i postlådan – Rolf tar det till posten |
| 6:18 | sak | info:bra | 📦 Paketet till Någon som bara skrev "hej" ligger i postlådan – Rolf tar det till posten |
| 6:18 | kvitto-visas | info:bra | 📦 Paketet till Någon som bara skrev "hej" ligger i postlådan – Rolf tar det till posten |
| 6:18 | toast | bra | 📦 Paketet till Någon som bara skrev "hej" ligger i postlådan – Rolf tar det till posten |
| 6:20 | klar | info:bra | 📦 Paketet till Någon som bara skrev "hej" ligger i postlådan – Rolf tar det till posten |
| 6:23 | händelse | printStart | sak=n3_stol |
| 6:24 | struken | värld:TUUT! Grann skylt! | TUUT! Grann skylt! |
| 6:30 | toast | guld | ✅ |
| 6:30 | händelse | printKlar | sak=n3_stol n=24 |
| 6:31 | händelse | tagitUrPrint | sak=n3_stol n=1 |
| 6:32 | sak | mamma | Du sa att du skulle fira jul ensam. Jag är glad att du ljög. Kram, Mamma |
| 6:32 | lapp | Brev från Mamma | Du sa att du skulle fira jul ensam. Jag är glad att du ljög. Kram, Mamma |
| 6:32 | röst | mamma | Du sa att du skulle fira jul ensam. Jag är glad att du ljög. Kram, Mamma · STORY |
| 6:38 | poolTom | ali | 4 repliker använda |
| 6:38 | klar | mamma | Du sa att du skulle fira jul ensam. Jag är glad att du ljög. Kram, Mamma |
| 6:38 | händelse | brevLast | id=mammajul |
| 6:40 | aliSalt | ali | 16000 |
| 6:40 | aliSalt | ali | 6 |
| 6:41 | aliSalt | ali | 6 |
| 6:46 | sak |  | (läget ändras) |
| 6:46 | paket |  | sms |
| 6:46 | väntar | pappa | 👍 ❤️ |
| 6:46 | klar |  | (läget ändras) |
| 6:51 | sak | notis:📔 Prestation: Jul på tippen · +3 respek | 📔 Prestation: Jul på tippen · +3 respekt |
| 6:51 | notis |  | 📔 Prestation: Jul på tippen · +3 respekt |
| 6:51 | händelse | printStart | sak=n3_stol |
| 6:53 | klar | notis:📔 Prestation: Jul på tippen · +3 respek | 📔 Prestation: Jul på tippen · +3 respekt |
| 6:58 | toast | guld | ✅ |
| 6:58 | händelse | printKlar | sak=n3_stol n=25 |
| 6:59 | händelse | tagitUrPrint | sak=n3_stol n=1 |
| 7:08 | sak | mamma | Pappa och Rolf bygger verandan. De har pratat Scania i tre timmar. Ingen av dem har sagt något annat. Jag tror de är lyckliga. |
| 7:08 | sms | mamma | Pappa och Rolf bygger verandan. De har pratat Scania i tre timmar. Ingen av dem har sagt något annat. Jag tror de är lyckliga. |
| 7:08 | sms-bubbla | mamma | Pappa och Rolf bygger verandan. De har pratat Scania i tre timmar. Ingen av dem har sagt något annat. Jag tror de är lyckliga. |
| 7:08 | röst | mamma | Pappa och Rolf bygger verandan. De har pratat Scania i tre timmar. Ingen av dem har sagt något annat. Jag tror de är lyckliga. · STORY |
| 7:15 | aliSalt | ali | 15200 |
| 7:16 | tanke | du | Strumpor. Jag borde ha lyssnat på mamma. |
| 7:16 | väntar | du | Strumpor. Jag borde ha lyssnat på mamma. |
| 7:18 | klar | mamma | Pappa och Rolf bygger verandan. De har pratat Scania i tre timmar. Ingen av dem har sagt något annat. Jag tror de är lyckliga. |
| 7:20 | sak | du | Strumpor. Jag borde ha lyssnat på mamma. |
| 7:20 | notis | tanke | 💭 Strumpor. Jag borde ha lyssnat på mamma. |
| 7:20 | röst | du | Strumpor. Jag borde ha lyssnat på mamma. · REAKTION |
| 7:24 | klar | du | Strumpor. Jag borde ha lyssnat på mamma. |
| 7:32 | sak | kjelle | Kjelle här, direkt från julfesten! Gunnar, du är här. Säg något till lyssnarna! |
| 7:32 | notis |  | 📻 Radio Tippen: Kjelle här, direkt från julfesten! Gunnar, du är här. Säg något till lyssnarna! |
| 7:32 | röst | kjelle | Kjelle här, direkt från julfesten! Gunnar, du är här. Säg något till lyssnarna! · REAKTION |
| 7:34 | händelse | printStart | sak=n3_stol |
| 7:39 | klar | kjelle | Kjelle här, direkt från julfesten! Gunnar, du är här. Säg något till lyssnarna! |
| 7:41 | toast | guld | ✅ |
| 7:41 | händelse | printKlar | sak=n3_stol n=26 |
| 7:42 | händelse | tagitUrPrint | sak=n3_stol n=1 |
| 7:42 | väntar | värld:TUUT! Hej grannen! | TUUT! Hej grannen! |
| 7:47 | sak | gunnar | Vanilj. |
| 7:47 | notis |  | 📻 Gunnar: Vanilj. |
| 7:47 | röst | gunnar | Vanilj. · STORY |
| 7:50 | klar | gunnar | Vanilj. |
| 7:51 | aliSalt | ali | 14440 |
| 7:59 | sak | chefen | Rudolf. Jag går i pension. Espressomaskinen står på din bänk. Inga böter. |
| 7:59 | sms | chefen | Rudolf. Jag går i pension. Espressomaskinen står på din bänk. Inga böter. |
| 7:59 | sms-bubbla | chefen | Rudolf. Jag går i pension. Espressomaskinen står på din bänk. Inga böter. |
| 7:59 | röst | chefen | Rudolf. Jag går i pension. Espressomaskinen står på din bänk. Inga böter. · STORY |
| 8:02 | händelse | printStart | sak=n3_stol |
| 8:05 | klar | chefen | Rudolf. Jag går i pension. Espressomaskinen står på din bänk. Inga böter. |
| 8:07 | struken | värld:TUUT! Hej grannen! | TUUT! Hej grannen! |
| 8:08 | toast | guld | ✅ |
| 8:08 | händelse | printKlar | sak=n3_stol n=27 |
| 8:09 | händelse | tagitUrPrint | sak=n3_stol n=1 |
| 8:18 | aliSalt | ali | 13718 |
| 8:19 | väntar | ali | Har du ätit? Jag frågar för att din mamma ringer. |
| 8:19 | sak | ali | Har du ätit? Jag frågar för att din mamma ringer. |
| 8:19 | röst | ali | Har du ätit? Jag frågar för att din mamma ringer. · SMÅPRAT |
| 8:20 | bubbla |  | Har du ätit? Jag frågar för att din mamma ringer. |
| 8:23 | klar | ali | Har du ätit? Jag frågar för att din mamma ringer. |
| 8:34 | händelse | printStart | sak=n3_stol |
| 8:40 | toast | guld | ✅ |
| 8:40 | händelse | printKlar | sak=n3_stol n=28 |
| 8:42 | händelse | tagitUrPrint | sak=n3_stol n=1 |
| 8:44 | sak | pappa | 👍 ❤️ |
| 8:44 | sms | pappa | 👍 ❤️ |
| 8:44 | sms-bubbla | pappa | 👍 ❤️ |
| 8:44 | röst | pappa | 👍 ❤️ · STORY |
| 8:47 | klar | pappa | 👍 ❤️ |
| 8:51 | aliSalt | ali | 13032 |
| 9:15 | skratt | du | falsk tuta |
| 9:16 | poolTom | du | 5 repliker använda |
| 11:16 | poolTom | du | 5 repliker använda |
| 11:32 | skratt | du | falsk tuta |
| 13:06 | händelse | printStart | sak=n2_hjalm |
| 13:11 | toast | guld | ✅ |
| 13:11 | händelse | printKlar | sak=n2_hjalm n=17 |
| 13:12 | händelse | tagitUrPrint | sak=n2_hjalm n=1 |
| 13:16 | poolTom | du | 5 repliker använda |
| 13:16 | väntar | notis:🌇 Klockan är 21. Ali slår igen luckan.  | 🌇 Klockan är 21. Ali slår igen luckan. Dagens jobb är klart – gå in i skjulet och sov i sängen. |
| 13:16 | sak | notis:🌇 Klockan är 21. Ali slår igen luckan.  | 🌇 Klockan är 21. Ali slår igen luckan. Dagens jobb är klart – gå in i skjulet och sov i sängen. |
| 13:16 | notis | guld | 🌇 Klockan är 21. Ali slår igen luckan. Dagens jobb är klart – gå in i skjulet och sov i sängen. |
| 13:19 | klar | notis:🌇 Klockan är 21. Ali slår igen luckan.  | 🌇 Klockan är 21. Ali slår igen luckan. Dagens jobb är klart – gå in i skjulet och sov i sängen. |
| 13:20 | aliSalt | ali | 1995 |
| 13:29 | webbBetalt | du | 18 |

<details><summary>Botens handlingar dag 22</summary>

- 0:00 — dag 22 börjar — (108021 kr)
- 0:15 popup: "FORTSÄTT" (108021 kr)
- 0:21 gå till dörren (namnskylten) (9 m) (108021 kr)
- 0:21 dörren (namnskylten) går inte att använda nu (108021 kr)
- 0:33 kort: "Fortsätt bygga" (108021 kr)
- 0:48 gå till dörren (namnskylten) (26 m) (108021 kr)
- 3:12 gå till mamma vid grinden (35 m) (108021 kr)
- 5:20 gå till tavlan vid vägen (3 m) (108021 kr)
- 5:20 efterspelet: köper marken runt tippen (18500 kr) (89521 kr)
- 5:25 efterspelet: köper rolfs soptipp (37000 kr) (52521 kr)
- 5:29 efterspelet: köper garage och hus åt rolf (25000 kr) (27521 kr)
- 5:36 efterspelet: köper backen i norr (11000 kr) (16521 kr)
- 5:40 efterspelet: dag 22, 24 s (16521 kr)
- 5:43 gå till skrivaren (14 m) (16521 kr)
- 5:45 printar Nyckelring (16521 kr)
- 5:46 tar ut 1 st ur skrivaren (16521 kr)
- 5:48 printar Nyckelring (16521 kr)
- 5:50 tar ut 1 st ur skrivaren (16521 kr)
- 5:53 gå till datorn (17 m) (16521 kr)
- 6:01 panel: "Webbshopen · Soptippsvägen 1
B" (16521 kr)
- 6:11 panel: "Webbshopen · Soptippsvägen 1
B" (16521 kr)
- 6:18 gå till Rolfs postlåda (paket) (29 m) (16521 kr)
- 6:18 webbshop: 1 paket i postlådan (16521 kr)
- 6:18 tjänar pengar till efterspelet: 16521/17021 kr → printar kolfiberstol (16000 kr) (16521 kr)
- 6:22 gå till skrivaren (15 m) (16521 kr)
- 6:23 printar Kolfiberstol (16521 kr)
- 6:32 tar ut 1 st ur skrivaren (16521 kr)
- 6:38 gå till Ali (34 m) (16521 kr)
- 6:38 öppnar Alis butik – sälja (16521 kr)
- 6:41 säljer hos Ali: +16012 kr (32533 kr)
- 6:43 efterspelet: dag 22, 87 s (32533 kr)
- 6:43 tjänar pengar till efterspelet: 32533/33033 kr → printar kolfiberstol (15200 kr) (32533 kr)
- 6:50 gå till skrivaren (33 m) (32533 kr)
- 6:51 printar Kolfiberstol (32533 kr)
- 7:00 tar ut 1 st ur skrivaren (32533 kr)
- 7:08 panel: "Slut på berättelsen
Efterspele" (32533 kr)
- 7:14 gå till Ali (33 m) (32533 kr)
- 7:14 öppnar Alis butik – sälja (32533 kr)
- 7:16 säljer hos Ali: +15200 kr (47733 kr)
- 7:26 efterspelet: dag 22, 130 s (47733 kr)
- 7:26 tjänar pengar till efterspelet: 47733/48233 kr → printar kolfiberstol (14440 kr) (47733 kr)
- 7:32 gå till skrivaren (33 m) (47733 kr)
- 7:34 printar Kolfiberstol (47733 kr)
- 7:42 tar ut 1 st ur skrivaren (47733 kr)
- 7:49 gå till Ali (33 m) (47733 kr)
- 7:49 öppnar Alis butik – sälja (47733 kr)
- 7:51 säljer hos Ali: +14440 kr (62173 kr)
- 7:53 efterspelet: dag 22, 157 s (62173 kr)
- 7:53 tjänar pengar till efterspelet: 62173/62673 kr → printar kolfiberstol (13718 kr) (62173 kr)
- 8:00 gå till skrivaren (33 m) (62173 kr)
- 8:02 printar Kolfiberstol (62173 kr)
- 8:10 tar ut 1 st ur skrivaren (62173 kr)
- 8:17 gå till Ali (33 m) (62173 kr)
- 8:17 öppnar Alis butik – sälja (62173 kr)
- 8:19 säljer hos Ali: +13718 kr (75891 kr)
- 8:25 efterspelet: dag 22, 190 s (75891 kr)
- 8:25 tjänar pengar till efterspelet: 75891/76391 kr → printar kolfiberstol (13032 kr) (75891 kr)
- 8:32 gå till skrivaren (33 m) (75891 kr)
- 8:34 printar Kolfiberstol (75891 kr)
- 8:42 tar ut 1 st ur skrivaren (75891 kr)
- 8:49 gå till Ali (33 m) (75891 kr)
- 8:49 öppnar Alis butik – sälja (75891 kr)
- 8:51 säljer hos Ali: +13032 kr (88923 kr)
- 8:53 efterspelet: dag 22, 217 s (88923 kr)
- 8:53 tjänar pengar till efterspelet: 88923/89423 kr → printar kolfiberstol (12380 kr) (88923 kr)
- 8:53 väntar på kolfiber från bandet (88923 kr)
- 9:01 väntar på kolfiber från bandet (88923 kr)
- 9:09 väntar på kolfiber från bandet (88923 kr)
- 9:17 väntar på kolfiber från bandet (88923 kr)
- 9:25 väntar på kolfiber från bandet (88923 kr)
- 9:33 väntar på kolfiber från bandet (88923 kr)
- 9:42 väntar på kolfiber från bandet (88923 kr)
- 9:50 väntar på kolfiber från bandet (88923 kr)
- 9:58 väntar på kolfiber från bandet (88923 kr)
- 10:06 väntar på kolfiber från bandet (88923 kr)
- 10:14 väntar på kolfiber från bandet (88923 kr)
- 10:22 väntar på kolfiber från bandet (88923 kr)
- 10:30 väntar på kolfiber från bandet (88923 kr)
- 10:38 väntar på kolfiber från bandet (88923 kr)
- 10:46 väntar på kolfiber från bandet (88923 kr)
- 10:54 väntar på kolfiber från bandet (88923 kr)
- 11:03 väntar på kolfiber från bandet (88923 kr)
- 11:11 väntar på kolfiber från bandet (88923 kr)
- 11:19 väntar på kolfiber från bandet (88923 kr)
- 11:27 väntar på kolfiber från bandet (88923 kr)
- 11:35 väntar på kolfiber från bandet (88923 kr)
- 11:43 väntar på kolfiber från bandet (88923 kr)
- 11:51 väntar på kolfiber från bandet (88923 kr)
- 11:59 väntar på kolfiber från bandet (88923 kr)
- 12:07 väntar på kolfiber från bandet (88923 kr)
- 12:15 väntar på kolfiber från bandet (88923 kr)
- 12:24 väntar på kolfiber från bandet (88923 kr)
- 12:32 väntar på kolfiber från bandet (88923 kr)
- 12:40 väntar på kolfiber från bandet (88923 kr)
- 12:48 väntar på kolfiber från bandet (88923 kr)
- 12:56 väntar på kolfiber från bandet (88923 kr)
- 12:56 kolfiberstol gick inte att printa – tar nästa (88923 kr)
- 12:56 öppnar Alis butik – sälja (88923 kr)
- 12:59 tjänar pengar till efterspelet: 88923/89423 kr → printar cykelhjälm i petg (1995 kr) (88923 kr)
- 13:05 gå till skrivaren (29 m) (88923 kr)
- 13:06 printar Cykelhjälm i PETG (88923 kr)
- 13:12 tar ut 1 st ur skrivaren (88923 kr)
- 13:18 gå till Ali (29 m) (88923 kr)
- 13:18 öppnar Alis butik – sälja (88923 kr)
- 13:20 säljer hos Ali: +1995 kr (90918 kr)
- 13:26 gå till sängen (20 m) (90918 kr)

</details>

## Dag 23

| Tid | Källa | Vem | Text |
|---|---|---|---|
| 13:29 | vara | ali | n2_vas |

<details><summary>Botens handlingar dag 23</summary>

- 0:00 — dag 23 börjar — (90936 kr)

</details>
