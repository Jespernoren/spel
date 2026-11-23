# Nybörjarboten – körning 1

*A-081: samma händer som AX, men boten vet bara det som syns (målrutan, pilen, det som sägs). Går 3 m/s, läser 60 ms per tecken, följer pilen, tittar runt när målet är otydligt och går fel ibland.*

| Dag | Minuter | FÖRVIRRAD | FAST | TRÄNGSEL | HANN INTE LÄSA | DOLT | NY SAK UTAN FÖRKLARING | OKÄNT ORD |
|---|---|---|---|---|---|---|---|---|
| 1 | 11.9 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 2 | 9.0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |

## Flaggor (0)

inga

## Friktionskurvan (sekunder per mål: nybörjaren mot AX)

| Dag | Mål | Nybörjaren | AX | × |
|---|---|---|---|---|
| 1 | Lasta av skrivaren | 0 | – | – |
| 1 | Lasta av skrivaren | 36 | – | – |
| 1 | Ställ upp skrivaren | 22 | – | – |
| 1 | Skrivaren behöver ström | 28 | – | – |
| 1 | Ställ cykel och generator | 31 | – | – |
| 1 | Välj vad skrivaren ska printa | 13 | – | – |
| 1 | Trampa cykeln | 5 | – | – |
| 1 | En nyckelring till | 41 | – | – |
| 1 | Visa nyckelringarna i affären mitt emot | 41 | – | – |
| 1 | Köp kvarnen | 22 | – | – |
| 1 | Ställ kvarnen | 29 | – | – |
| 1 | Gör egen tråd | 30 | – | – |
| 1 | Printa med egen tråd | 24 | – | – |
| 1 | Sälj hos Ali | 31 | – | – |
| 1 | Koppla in powerbanken | 34 | – | – |
| 1 | Köp skräpgripen | 33 | – | – |
| 1 | Printa skräpgripen | 50 | – | – |
| 1 | Spara till krukreceptet · 0 / 40 kr | 99 | – | – |
| 1 | Sälj blomkrukan | 31 | – | – |
| 1 | Köp sängen | 21 | – | – |
| 1 | Printa sängen | 70 | – | – |
| 2 | Spara till kvarnmotorn · 40 / 50 kr | -579 | – | – |
| 2 | Printa kvarnmotorn till kvarnen | 76 | – | – |
| 2 | Städa gården | 31 | – | – |
| 2 | Gå till bilen vid skjulet | 95 | – | – |
| 2 | Printa ölhållare med kylklamp | 5 | – | – |
| 2 | Ge Rolf ölhållare med kylklamp | 29 | – | – |
| 2 | Spara till vindsnurran · 101 / 133 kr | 89 | – | – |
| 2 | Bygg en dörr till skjulet | 66 | – | – |

---

# Simulering kapitel 1 – körning 1

*Gjord 2026-11-23 06:40 med `verktyg/sim-kapitel1.mjs` + `verktyg/sim-bot.js` (punkt AX). Boten går 4,5 m/s, läser 15 tecken/s, trampar, vevar, plockar, printar, köper och säljer via spelets egna funktioner. Tiderna är speltid.*

## Sammanfattning

| Dag | Minuter | Väntan | Prints (totalt) | Kr vid sömn | Bär | Trivsel |
|---|---|---|---|---|---|---|
| 1 | 11.9 | 1 % | 10 | 40 | 6 | 16 |
| 2 | 9.0 | 1 % | 16 | 58 | 10 | 30 |

## Flaskhalskartan (EE)

| Dag | bara | mala | trampa | strom | skrivare | inkomst | Upplåst |
|---|---|---|---|---|---|---|---|
| 1 | 4 | 5 | 20 | 14 | 26 | 8 | grip (bara, 8:22), kruka (inkomst, 8:44) |
| 2 | 0 | 96 | 4 | 7 | 308 | 0 | kvarnmotor (mala, 2:10), rullstall (skrivare, 4:28), trim_skrivare (skrivare, 5:28), vindsnurra (trampa, 6:57) |

TIDIG: 0 · FAST: 0 · upplåst av reserven (målet väntade 3 min): 0

**SKRATT:** 31 roliga ögonblick på 21 min (14.8 per 10 min, mål minst 5)

**Köp:**

- dag 1 3:58 – gammalkvarn (30 kr)
- dag 1 6:59 – grip (50 kr)
- dag 1 9:06 – kruka (40 kr)
- dag 1 10:20 – sang (60 kr)
- dag 2 2:17 – kvarnmotor (50 kr)
- dag 2 7:11 – vindsnurra (133 kr)
- dag 2 8:21 – dorr (120 kr)

## Storykedjan (kvittens → varför → nytt mål)

| Dag | Tid | Id | Kvittens | Varför | Nytt mål | Tid till målet |
|---|---|---|---|---|---|---|
| 1 | 0:35 | lasta | Tung. Den har storebror aldrig burit så långt. |  | Skrivaren ställer jag mot skräpberget. Min första verkstad. | 0.2 s |
| 1 | 2:09 | valjModell | Den piper. Den GÖR något. |  | Nu behöver den ström. Trampa. | 1.6 s |
| 1 | 2:15 | trampa | Klar! Ta ut den innan den ändrar sig. |  | En nyckelring till, så länge storebrors rulle räcker. | 16.1 s |
| 1 | 4:57 | flaska | Det blir tråd! Riktig plasttråd. |  | Min egen tråd. Nu printar jag en nyckelring av den. | 0.7 s |
| 1 | 9:28 | krukaD1 | En kruka. Mamma skulle bli så stolt. Hon får inte veta. |  | Ali gillar krukor. Han sa det själv. | 0.8 s |
| 1 | 11:31 | printSang | En säng. Jag printade en SÄNG. |  | Sängen ska in i skjulet. Sen sover jag. | 0.1 s |
| 2 | 7:42 | vindsnurra | Den snurrar! Långsamt. Men den snurrar. |  | Det drar från dörrhålet. En dörr kan jag printa. | 1.0 s |

## Hur länge nya mål väntade (från att förra målet blev klart till att det nya syntes i målrutan)

Snitt 2.1 s · max 15.4 s · över 4 s: 3 · över 8 s: 2 av 31

## Flaggor (56)

- **UPPREPNING** dag 1 5:49: Den köper jag. Ge hit. (CT)
- **UPPREPNING** dag 1 8:41: Den köper jag. Ge hit. (CT)
- **UPPREPNING** dag 2 7:14: Den köper jag. Ge hit. (CT)
- **UPPREPNING** dag 2 8:16: Den köper jag. Ge hit. (CT)
- **KROCK** dag 2 5:38: 3.9 s mellan [notis] "💭 Flaggan är uppe. Rolf har lämnat något." och [lapp] "Såg att du printar grejer. Kan du göra en sån hä? Kall öl ä "
- **PAUS** dag 1 0:39: 0.0 s paus före "Skrivaren ställer jag mot skräpberget. Min första "
- **PAUS** dag 1 2:13: 0.1 s paus före "Nu behöver den ström. Trampa."
- **PAUS** dag 1 2:16: 0.2 s paus före "Hallå där, nya grannen! Vad är det där du gör?"
- **PAUS** dag 1 2:21: 0.0 s paus före "Klar! Ta ut den innan den ändrar sig."
- **PAUS** dag 1 2:24: 0.0 s paus före "Jag gjorde den här. Av skräp. Det här kan funka."
- **PAUS** dag 1 2:30: 1.9 s paus före "VA FAN?! Fick du igång den?? Jag försökte i typ et"
- **PAUS** dag 1 2:40: 0.0 s paus före "En nyckelring till, så länge storebrors rulle räck"
- **PAUS** dag 1 3:05: 0.0 s paus före "Affären mitt emot. Han verkar nyfiken. Jag visar h"
- **PAUS** dag 1 3:37: 0.0 s paus före "Pappas gamla köttkvarn. Den har malt allt utom köt"
- **PAUS** dag 1 3:45: 0.0 s paus före "Ali har en gammal kvarn. Den gör tråd av skräp."
- **PAUS** dag 1 5:00: 0.0 s paus före "Min egen tråd. Nu printar jag en nyckelring av den"
- **PAUS** dag 1 6:32: 0.1 s paus före "Ali här. Nyckelringen sålde direkt. Jag ville bli "
- **PAUS** dag 1 6:44: 0.1 s paus före "Femtio kronor. Nu har jag råd med gripen."
- **PAUS** dag 1 7:56: 0.0 s paus före "Ali här. Jag såg Skräpgrip på avstånd. Ett streck "
- **PAUS** dag 1 8:06: 0.0 s paus före "Spara till krukreceptet."
- **PAUS** dag 1 8:44: 0.6 s paus före "Du får bonus! 25 kr extra. Kvalitet. Nästan."
- **PAUS** dag 1 9:33: 0.0 s paus före "Ali gillar krukor. Han sa det själv."
- **PAUS** dag 1 10:06: 0.1 s paus före "Jag har pengar nu. Hos Ali kan jag köpa uppgraderi"
- **PAUS** dag 1 11:33: 0.0 s paus före "Sängen ska in i skjulet. Sen sover jag."
- **PAUS** dag 2 0:21: 0.0 s paus före "Ali vill ha idag: Blomkruka · +50 %"
- **SAMTIDIGT** dag 2 1:08: "Sopbilen tippade en ny last på soptippen" och "En stor bil tippade en ny last. Allt det"
- **PAUS** dag 2 3:41: 0.0 s paus före "Gården är full av skräp. Jag börjar vid skjulet."
- **PAUS** dag 2 4:28: 0.0 s paus före "Kvarnen står och väntar för att hållaren är full. "
- **PAUS** dag 2 4:34: 0.1 s paus före "Du har städat hela gården. Ingen gör så nuförtin."
- **PAUS** dag 2 4:41: 0.1 s paus före "Öj… ä dä du som printar grejer? Dom där nyckelring"
- **PAUS** dag 2 4:46: 0.1 s paus före "Ja. Av skräp."
- **PAUS** dag 2 4:51: 0.1 s paus före "Hm. Ja kanske har nåt åt dej. Kolla postlådan vid "
- **PAUS** dag 2 5:07: 0.0 s paus före "Tornet är fullt. Skrivaren får jobba ikapp."
- **PAUS** dag 2 5:38: 0.2 s paus före "Såg att du printar grejer. Kan du göra en sån hä? "
- **PAUS** dag 2 5:51: 0.0 s paus före "Ölhållaren är klar. Den lägger jag i Rolfs postlåd"
- **PAUS** dag 2 6:18: 0.0 s paus före "En vindsnurra på skjulets tak. Då blir det ström n"
- **PAUS** dag 2 6:58: 0.1 s paus före "Rolf gav mig en kanna. Som min farmors. Jag ritade"
- **PAUS** dag 2 7:42: 0.2 s paus före "Den snurrar! Långsamt. Men den snurrar."
- **PAUS** dag 2 8:51: 0.0 s paus före "Nu vet Ali att jag bor HÄR. Taket läcker. I morgon"
- **PAUS** dag 2 8:51: 0.0 s paus före "Sov när du vill."
- **PAUS** dag 3 0:18: 0.1 s paus före "Ali vill ha idag: Blomkruka · +50 %"
- **UPPREPNING** dag 1 5:49: ali: "Den köper jag. Ge hit." (förra gången dag 1)
- **UPPREPNING** dag 1 8:41: ali: "Den köper jag. Ge hit." (förra gången dag 1)
- **UPPREPNING** dag 2 5:07: du: "Tornet är fullt. Skrivaren får jobba ikapp." (förra gången dag 2)
- **UPPREPNING** dag 2 7:14: ali: "Den köper jag. Ge hit." (förra gången dag 1)
- **UPPREPNING** dag 2 8:16: ali: "Den köper jag. Ge hit." (förra gången dag 2)
- **TRÄNGSEL 2** dag 1 2:47: "Sälj grejerna i affären mitt emot, han köper allt." 2.0 s efter förra meddelandet, 32.7 s efter en klar uppgift
- **RADBRYTNING** dag 1 3:00: för lång rad (39): "Visa nyckelringarna i affären mitt emot"
- **TRÄNGSEL 2** dag 1 3:13: "Hur kunde du bara gå? Är du ok? Svara när jag ring" 2.0 s efter förra meddelandet, 17.1 s efter en klar uppgift
- **DUBBEL UPPMANING** dag 1 7:21: "trampa" på 2 ställen: pekrutan, notisen
- **DUBBEL UPPMANING** dag 2 0:55: "veva" på 2 ställen: pekrutan, skylten Tratten är full
- **DOLD SKYLT** dag 2 4:31: ALIS MARKNAD från 7 m: skymd av BoxGeometry 1.2 m bort (9.1, 1.8, 23.0)
- **DOLD SKYLT** dag 2 5:05: ALIS MARKNAD från 7 m: skymd av PlaneGeometry 1.2 m bort (9.1, 1.8, 22.9)
- **DUBBEL** dag 2 5:39: du upprepar rolf: "Rolf har ritat själv. Den är… ungefär. Jag fattar "
- **KLICK SOM INTE GÅR** dag 3 0:47: "Klicka för att montera" syns men ett klick gör inte det just nu
- **TEMPO** dag 2 9:01: dag 2 tog 9.0 min (mål 10–15)

Sidfel: inga

## Dag 1

| Tid | Källa | Vem | Text |
|---|---|---|---|
| 0:00 | MÅL |  | Lasta av skrivaren |
| 0:00 | MÅL |  | Lasta av skrivaren |
| 0:01 | sak | bud | (tips) |
| 0:02 | väntar | du | Se så mycket skräp här är. Det är ju en guldgruva! |
| 0:03 | klar | bud | (tips) |
| 0:03 | sak | du | Se så mycket skräp här är. Det är ju en guldgruva! |
| 0:03 | röst | du | Se så mycket skräp här är. Det är ju en guldgruva! · STORY |
| 0:03 | tanke | du | ⏎ Enter – hoppa över |
| 0:03 | struken | du | Hammaren ligger i raden. Hjulet eller 2. |
| 0:03 | väntar | du | ⏎ Enter – hoppa över |
| 0:09 | sak-del | du | Först borde jag spika upp en skylt, så att alla ser att jag bor HÄR. |
| 0:09 | röst | du | Först borde jag spika upp en skylt, så att alla ser att jag bor HÄR. · STORY |
| 0:14 | klar | du | Se så mycket skräp här är. Det är ju en guldgruva! |
| 0:22 | lapp | 📔 Dagbok | Spikade ihop en skylt av bräder från skräpberget: Soptippsvägen 1. Inte mycket för världen, men det är MITT. |
| 0:22 | dagbokrad | du | Spikade ihop en skylt av bräder från skräpberget: Soptippsvägen 1. Inte mycket för världen, men det är MITT. |
| 0:22 | väntar | notis:Spikade ihop en skylt av bräder från skr | Spikade ihop en skylt av bräder från skräpberget: Soptippsvägen 1. Inte mycket för världen, men det är MITT. |
| 0:22 | bekräftelse | du | Group |
| 0:22 | struken | du | ⏎ Enter – hoppa över |
| 0:22 | väntar | du | Storebrors skrivare står kvar på cykeln vid vägen. Den ska av. |
| 0:23 | sak | notis:Spikade ihop en skylt av bräder från skr | Spikade ihop en skylt av bräder från skräpberget: Soptippsvägen 1. Inte mycket för världen, men det är MITT. |
| 0:23 | notis | dagbok | Spikade ihop en skylt av bräder från skräpberget: Soptippsvägen 1. Inte mycket för världen, men det är MITT. |
| 0:25 | klar | notis:Spikade ihop en skylt av bräder från skr | Spikade ihop en skylt av bräder från skräpberget: Soptippsvägen 1. Inte mycket för världen, men det är MITT. |
| 0:25 | målruta |  | Lasta av skrivaren |
| 0:27 | sak | du | Storebrors skrivare står kvar på cykeln vid vägen. Den ska av. |
| 0:27 | pil |  | Lasta av skrivaren |
| 0:27 | notis | tanke | 💭 Storebrors skrivare står kvar på cykeln vid vägen. Den ska av. |
| 0:27 | röst | du | Storebrors skrivare står kvar på cykeln vid vägen. Den ska av. · MÅL |
| 0:33 | klar | du | Storebrors skrivare står kvar på cykeln vid vägen. Den ska av. |
| 0:35 | händelse | lastatAv | sak=skrivare |
| 0:35 | paket |  | sms |
| 0:35 | väntar | mamma | Hur kunde du bara gå? Är du ok? Svara när jag ringer! |
| 0:35 | händelse | malKlart | id=lasta del=Dag 1 – Kom igång nasta=stall |
| 0:35 | bekräftelse | du | plats |
| 0:35 | kvittens | du | Tung. Den har storebror aldrig burit så långt. |
| 0:35 | väntar | du | Tung. Den har storebror aldrig burit så långt. |
| 0:35 | väntar | du | Skrivaren ställer jag mot skräpberget. Min första verkstad. |
| 0:35 | MÅL |  | Ställ upp skrivaren |
| 0:35 | hjälp | kontroll | E: Ryggsäcken och kistan |
| 0:35 | sak | du | Tung. Den har storebror aldrig burit så långt. |
| 0:35 | röst | du | Tung. Den har storebror aldrig burit så långt. · STORY |
| 0:35 | målruta |  | Ställ upp skrivaren |
| 0:39 | klar | du | Tung. Den har storebror aldrig burit så långt. |
| 0:39 | sak | du | Skrivaren ställer jag mot skräpberget. Min första verkstad. |
| 0:39 | pil |  | Ställ upp skrivaren |
| 0:39 | notis | tanke | 💭 Skrivaren ställer jag mot skräpberget. Min första verkstad. |
| 0:39 | röst | du | Skrivaren ställer jag mot skräpberget. Min första verkstad. · MÅL |
| 0:39 | nick |  | nick:1 |
| 0:44 | klar | du | Skrivaren ställer jag mot skräpberget. Min första verkstad. |
| 0:57 | struken | info:bra | 🖨️ Storebrors skrivare står på sin plats |
| 0:57 | händelse | placerat | sak=skrivareS |
| 0:57 | paket |  | tanke |
| 0:57 | tanke | du | Storebrors rulle. Den räcker inte länge. |
| 0:57 | väntar | du | Storebrors rulle. Den räcker inte länge. |
| 0:57 | duns | du | ställs ner |
| 0:57 | händelse | malKlart | id=stall del=Dag 1 – Kom igång nasta=strom |
| 0:57 | bekräftelse | du | plats |
| 0:57 | väntar | du | Den har ingen ström. Cykeln vid vägen kanske kan ge ström. |
| 0:57 | MÅL |  | Skrivaren behöver ström |
| 0:57 | sak | du | Storebrors rulle. Den räcker inte länge. |
| 0:57 | notis | tanke | 💭 Storebrors rulle. Den räcker inte länge. |
| 0:57 | röst | du | Storebrors rulle. Den räcker inte länge. · REAKTION |
| 0:59 | målruta |  | Skrivaren behöver ström |
| 1:01 | klar | du | Storebrors rulle. Den räcker inte länge. |
| 1:01 | kvittens-bock |  | ✓ Ställ upp skrivaren |
| 1:03 | sak | du | Den har ingen ström. Cykeln vid vägen kanske kan ge ström. |
| 1:03 | pil |  | Skrivaren behöver ström |
| 1:03 | notis | tanke | 💭 Den har ingen ström. Cykeln vid vägen kanske kan ge ström. |
| 1:03 | röst | du | Den har ingen ström. Cykeln vid vägen kanske kan ge ström. · MÅL |
| 1:04 | nick |  | nick:2 |
| 1:10 | klar | du | Den har ingen ström. Cykeln vid vägen kanske kan ge ström. |
| 1:25 | paket |  | tanke |
| 1:25 | tanke | du | Cykeln… och storebrors generator? |
| 1:25 | väntar | du | Cykeln… och storebrors generator? |
| 1:25 | sak | du | Cykeln… och storebrors generator? |
| 1:25 | kvitto-visas | du | Cykeln… och storebrors generator? |
| 1:25 | notis | tanke | 💭 Cykeln… och storebrors generator? |
| 1:25 | röst | du | Cykeln… och storebrors generator? · STORY |
| 1:25 | händelse | malKlart | id=strom del=Dag 1 – Kom igång nasta=bygg |
| 1:25 | bekräftelse | du | plats |
| 1:25 | väntar | du | Nu borde jag koppla på generatorn, så att cykeln gör el. |
| 1:25 | MÅL |  | Ställ cykel och generator |
| 1:28 | målruta |  | Ställ cykel och generator |
| 1:28 | klar | du | Cykeln… och storebrors generator? |
| 1:29 | kvittens-bock |  | ✓ Skrivaren behöver ström |
| 1:31 | sak | du | Nu borde jag koppla på generatorn, så att cykeln gör el. |
| 1:31 | pil |  | Ställ cykel och generator |
| 1:31 | notis | tanke | 💭 Nu borde jag koppla på generatorn, så att cykeln gör el. |
| 1:31 | röst | du | Nu borde jag koppla på generatorn, så att cykeln gör el. · MÅL |
| 1:34 | klar | du | Nu borde jag koppla på generatorn, så att cykeln gör el. |
| 1:35 | händelse | placerat | sak=generator |
| 1:35 | duns | du | ställs ner |
| 1:43 | ljud | utrustning | Cykeln i famnen |
| 1:43 | händelse | lyft | sak=cykel |
| 1:44 | paket |  | tanke |
| 1:44 | tanke | du | Cykeln ska stå vid skrivaren. |
| 1:44 | väntar | du | Cykeln ska stå vid skrivaren. |
| 1:44 | sak | du | Cykeln ska stå vid skrivaren. |
| 1:44 | notis | tanke | 💭 Cykeln ska stå vid skrivaren. |
| 1:44 | röst | du | Cykeln ska stå vid skrivaren. · REAKTION |
| 1:48 | klar | du | Cykeln ska stå vid skrivaren. |
| 1:54 | händelse | placerat | sak=cykel |
| 1:54 | duns | du | ställs ner |
| 1:56 | händelse | ombyggd | sak=cykel |
| 1:56 | händelse | malKlart | id=bygg del=Dag 1 – Kom igång nasta=valjModell |
| 1:56 | bekräftelse | du | plats |
| 1:56 | väntar | du | Strömmen finns. Nu ska skrivaren veta vad den ska göra, sen trampar jag. |
| 1:56 | målruta |  | Välj vad skrivaren ska printa |
| 1:56 | MÅL |  | Välj vad skrivaren ska printa |
| 1:56 | sak | du | Strömmen finns. Nu ska skrivaren veta vad den ska göra, sen trampar jag. |
| 1:56 | pil |  | Välj vad skrivaren ska printa |
| 1:56 | notis | tanke | 💭 Strömmen finns. Nu ska skrivaren veta vad den ska göra, sen trampar jag. |
| 1:56 | röst | du | Strömmen finns. Nu ska skrivaren veta vad den ska göra, sen trampar jag. · MÅL |
| 2:00 | kvittens-bock |  | ✓ Montera generatorn |
| 2:00 | klar | du | Strömmen finns. Nu ska skrivaren veta vad den ska göra, sen trampar jag. |
| 2:09 | händelse | printStart | sak=nyckelring |
| 2:09 | tanke | du | Den stannar när jag slutar trampa. Ström som sparas hade varit nåt. |
| 2:09 | väntar | du | Den stannar när jag slutar trampa. Ström som sparas hade varit nåt. |
| 2:09 | händelse | malKlart | id=valjModell del=Dag 1 – Kom igång nasta=trampa |
| 2:09 | bekräftelse | du | plats |
| 2:09 | kvittens | du | Den piper. Den GÖR något. |
| 2:09 | väntar | du | Den piper. Den GÖR något. |
| 2:09 | struken | du | Den stannar när jag slutar trampa. Ström som sparas hade varit nåt. |
| 2:09 | väntar | du | Nu behöver den ström. Trampa. |
| 2:10 | MÅL |  | Trampa cykeln |
| 2:10 | hjälp | kontroll | Klick: Sätt dig och trampa (klick igen eller gå för att resa dig) |
| 2:10 | sak | du | Den piper. Den GÖR något. |
| 2:10 | röst | du | Den piper. Den GÖR något. · STORY |
| 2:10 | målruta |  | Trampa cykeln |
| 2:13 | klar | du | Den piper. Den GÖR något. |
| 2:13 | sak | du | Nu behöver den ström. Trampa. |
| 2:13 | pil |  | Trampa cykeln |
| 2:13 | notis | tanke | 💭 Nu behöver den ström. Trampa. |
| 2:13 | röst | du | Nu behöver den ström. Trampa. · MÅL |
| 2:15 | händelse | printKlar | sak=nyckelring n=1 |
| 2:15 | händelse | malKlart | id=trampa del=Dag 1 – Kom igång nasta=rullSlut |
| 2:15 | bekräftelse | du | plats |
| 2:15 | kvittens | du | Klar! Ta ut den innan den ändrar sig. |
| 2:15 | väntar | du | Klar! Ta ut den innan den ändrar sig. |
| 2:15 | väntar | du | En nyckelring till, så länge storebrors rulle räcker. |
| 2:15 | MÅL |  | En nyckelring till |
| 2:16 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 2:16 | paket |  | sms |
| 2:16 | väntar | bror | VA FAN?! Fick du igång den?? Jag försökte i typ ett år. Den bara pep. 😳 |
| 2:16 | skratt | bror | VA FAN?! Fick du igång den?? Jag försökt |
| 2:16 | paket |  | sms |
| 2:16 | väntar | bror | Sälj grejerna i affären mitt emot, han köper allt. |
| 2:16 | foto | du | Första nyckelringen |
| 2:16 | paket |  | tanke |
| 2:16 | tanke | du | Jag gjorde den här. Av skräp. Det här kan funka. |
| 2:16 | väntar | du | Jag gjorde den här. Av skräp. Det här kan funka. |
| 2:16 | väntar | ali | Hallå där, nya grannen! Vad är det där du gör? |
| 2:16 | klar | du | Nu behöver den ström. Trampa. |
| 2:16 | sak | ali | Hallå där, nya grannen! Vad är det där du gör? |
| 2:16 | händelse | dialog | id=aliRop |
| 2:16 | röst | ali | Hallå där, nya grannen! Vad är det där du gör? · REAKTION |
| 2:17 | målruta |  | En nyckelring till |
| 2:17 | bubbla |  | Hallå där, nya grannen! Vad är det där du gör? |
| 2:21 | klar | ali | Hallå där, nya grannen! Vad är det där du gör? |
| 2:21 | sak | du | Klar! Ta ut den innan den ändrar sig. |
| 2:21 | röst | du | Klar! Ta ut den innan den ändrar sig. · STORY |
| 2:24 | klar | du | Klar! Ta ut den innan den ändrar sig. |
| 2:24 | sak | du | Jag gjorde den här. Av skräp. Det här kan funka. |
| 2:24 | notis | tanke | 💭 Jag gjorde den här. Av skräp. Det här kan funka. |
| 2:24 | röst | du | Jag gjorde den här. Av skräp. Det här kan funka. · STORY |
| 2:28 | klar | du | Jag gjorde den här. Av skräp. Det här kan funka. |
| 2:30 | sak | bror | VA FAN?! Fick du igång den?? Jag försökte i typ ett år. Den bara pep. 😳 |
| 2:30 | skratt | bror | VA FAN?! Fick du igång den?? Jag försökt |
| 2:30 | sms | bror | VA FAN?! Fick du igång den?? Jag försökte i typ ett år. Den bara pep. 😳 |
| 2:30 | skratt | bror | VA FAN?! Fick du igång den?? Jag försökt |
| 2:30 | händelse | dialog | id=brorSms1 |
| 2:30 | sms-bubbla | bror | VA FAN?! Fick du igång den?? Jag försökte i typ ett år. Den bara pep. 😳 |
| 2:30 | skratt | bror | VA FAN?! Fick du igång den?? Jag försökt |
| 2:30 | röst | bror | VA FAN?! Fick du igång den?? Jag försökte i typ ett år. Den bara pep. 😳 · REAKTION |
| 2:37 | tanke | du | Högar bakom staketet. Där inne ligger mer än på hela gården. |
| 2:37 | väntar | du | Högar bakom staketet. Där inne ligger mer än på hela gården. |
| 2:40 | klar | bror | VA FAN?! Fick du igång den?? Jag försökte i typ ett år. Den bara pep. 😳 |
| 2:40 | skratt | bror | VA FAN?! Fick du igång den?? Jag försökt |
| 2:40 | sak | du | En nyckelring till, så länge storebrors rulle räcker. |
| 2:40 | pil |  | En nyckelring till |
| 2:40 | notis | tanke | 💭 En nyckelring till, så länge storebrors rulle räcker. |
| 2:40 | röst | du | En nyckelring till, så länge storebrors rulle räcker. · MÅL |
| 2:41 | händelse | printStart | sak=nyckelring |
| 2:45 | klar | du | En nyckelring till, så länge storebrors rulle räcker. |
| 2:47 | brott | TRÄNGSEL 2 | "Sälj grejerna i affären mitt emot, han köper allt." 2.0 s efter förra meddelandet, 32.7 s efter en klar uppgift |
| 2:47 | sak | bror | Sälj grejerna i affären mitt emot, han köper allt. |
| 2:47 | sms | bror | Sälj grejerna i affären mitt emot, han köper allt. |
| 2:47 | händelse | dialog | id=brorSms2 |
| 2:47 | sms-bubbla | bror | Sälj grejerna i affären mitt emot, han köper allt. |
| 2:47 | röst | bror | Sälj grejerna i affären mitt emot, han köper allt. · STORY |
| 2:53 | klar | bror | Sälj grejerna i affären mitt emot, han köper allt. |
| 2:56 | händelse | printKlar | sak=nyckelring n=2 |
| 2:56 | paket |  | tanke |
| 2:56 | tanke | du | Slut på storebrors rulle. Och här ligger ju plast överallt. Om jag bara kunde göra tråd av skräpet… |
| 2:56 | väntar | du | Slut på storebrors rulle. Och här ligger ju plast överallt. Om jag bara kunde göra tråd av skräpet… |
| 2:56 | händelse | malKlart | id=rullSlut del=Dag 1 – Kom igång nasta=saljTva |
| 2:56 | bekräftelse | du | plats |
| 2:56 | väntar | du | Affären mitt emot. Han verkar nyfiken. Jag visar honom. |
| 2:56 | MÅL |  | Visa nyckelringarna i affären mitt emot |
| 2:56 | sak | du | Slut på storebrors rulle. Och här ligger ju plast överallt. Om jag bara kunde göra tråd av skräpet… |
| 2:56 | kvitto-visas | du | Slut på storebrors rulle. Och här ligger ju plast överallt. Om jag bara kunde göra tråd av skräpet… |
| 2:56 | notis | tanke | 💭 Slut på storebrors rulle. Och här ligger ju plast överallt. Om jag bara kunde göra tråd av skräpet… |
| 2:56 | röst | du | Slut på storebrors rulle. Och här ligger ju plast överallt. Om jag bara kunde göra tråd av skräpet… · STORY |
| 2:58 | hjälp | kontroll | Tab: Dina sms och dagboken |
| 2:58 | målruta |  | Visa nyckelringarna i affären mitt emot |
| 3:00 | brott | RADBRYTNING | för lång rad (39): "Visa nyckelringarna i affären mitt emot" |
| 3:00 | kvittens-bock |  | ✓ En nyckelring till |
| 3:05 | klar | du | Slut på storebrors rulle. Och här ligger ju plast överallt. Om jag bara kunde göra tråd av skräpet… |
| 3:05 | sak | du | Affären mitt emot. Han verkar nyfiken. Jag visar honom. |
| 3:05 | pil |  | Visa nyckelringarna i affären mitt emot |
| 3:05 | notis | tanke | 💭 Affären mitt emot. Han verkar nyfiken. Jag visar honom. |
| 3:05 | röst | du | Affären mitt emot. Han verkar nyfiken. Jag visar honom. · MÅL |
| 3:11 | klar | du | Affären mitt emot. Han verkar nyfiken. Jag visar honom. |
| 3:13 | struken | du | Högar bakom staketet. Där inne ligger mer än på hela gården. |
| 3:13 | brott | TRÄNGSEL 2 | "Hur kunde du bara gå? Är du ok? Svara när jag ring" 2.0 s efter förra meddelandet, 17.1 s efter en klar uppgift |
| 3:13 | sak | mamma | Hur kunde du bara gå? Är du ok? Svara när jag ringer! |
| 3:13 | sms | mamma | Hur kunde du bara gå? Är du ok? Svara när jag ringer! |
| 3:13 | sms-bubbla | mamma | Hur kunde du bara gå? Är du ok? Svara när jag ringer! |
| 3:13 | röst | mamma | Hur kunde du bara gå? Är du ok? Svara när jag ringer! · STORY |
| 3:20 | klar | mamma | Hur kunde du bara gå? Är du ok? Svara när jag ringer! |
| 3:21 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 3:21 | struken | ali | Hallå där, nya grannen! Vad är det där du gör? |
| 3:33 | väntar | ali | Den köper jag. Ge hit. |
| 3:33 | sak | ali | Den köper jag. Ge hit. |
| 3:33 | röst | ali | Den köper jag. Ge hit. · REAKTION |
| 3:34 | struken | ali | Pappas gamla köttkvarn. Den har malt allt utom kött. Trettio kronor, så är den din. |
| 3:34 | händelse | dialog | id=aliForsta |
| 3:34 | butiksbubbla | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 3:35 | händelse | salt | sak=nyckelring n=2 |
| 3:35 | aliSalt | ali | 30 |
| 3:35 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 3:35 | händelse | dialog | id=aliKvarnErbjud |
| 3:35 | butiksbubbla | ali | Pappas gamla köttkvarn. Den har malt allt utom kött. Trettio kronor, så är den din. |
| 3:36 | röst | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. · STORY |
| 3:37 | väntar | ali | Pappas gamla köttkvarn. Den har malt allt utom kött. Trettio kronor, så är den din. |
| 3:37 | klipps | ali | Den köper jag. Ge hit. |
| 3:37 | händelse | malKlart | id=saljTva del=Dag 1 – Kom igång nasta=aliKvarn |
| 3:37 | bekräftelse | du | plats |
| 3:37 | väntar | du | Ali har en gammal kvarn. Den gör tråd av skräp. |
| 3:37 | MÅL |  | Köp kvarnen |
| 3:37 | klar | ali | Den köper jag. Ge hit. |
| 3:37 | sak | ali | Pappas gamla köttkvarn. Den har malt allt utom kött. Trettio kronor, så är den din. |
| 3:37 | röst | ali | Pappas gamla köttkvarn. Den har malt allt utom kött. Trettio kronor, så är den din. · STORY |
| 3:39 | målruta |  | Köp kvarnen |
| 3:41 | kvittens-bock |  | ✓ Visa nyckelringarna i affären mitt emot |
| 3:45 | klar | ali | Pappas gamla köttkvarn. Den har malt allt utom kött. Trettio kronor, så är den din. |
| 3:45 | sak | du | Ali har en gammal kvarn. Den gör tråd av skräp. |
| 3:45 | pil |  | Köp kvarnen |
| 3:45 | notis | tanke | 💭 Ali har en gammal kvarn. Den gör tråd av skräp. |
| 3:45 | röst | du | Ali har en gammal kvarn. Den gör tråd av skräp. · MÅL |
| 3:50 | klar | du | Ali har en gammal kvarn. Den gör tråd av skräp. |
| 3:55 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 3:55 | struken | ali | Pappas gamla köttkvarn. Den har malt allt utom kött. Trettio kronor, så är den din. |
| 3:55 | väntar | kjelle | God morgon, det är Kjelle på Radio Tippen! Det har flyttat in någon i det gamla skjulet. Med en cykel och en skrivare. Spännande, Gunnar. |
| 3:55 | radio | kjelle | God morgon, det är Kjelle på Radio Tippen! Det har flyttat in någon i det gamla skjulet. Med en cykel och en skrivare. Spännande, Gunnar. |
| 3:55 | skratt | du | Radio-Kjelle |
| 3:57 | händelse | kopt | sak=gammalkvarn |
| 3:57 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 3:57 | händelse | dialog | id=aliKvarnKopt |
| 3:57 | röst | ali | Den är din. Pappa hade blivit glad. Han trodde aldrig att nån skulle vilja ha den. · STORY |
| 3:57 | butiksbubbla | ali | Den är din. Pappa hade blivit glad. Han trodde aldrig att nån skulle vilja ha den. |
| 3:58 | händelse | malKlart | id=aliKvarn del=Dag 1 – Kom igång nasta=kvarn |
| 3:58 | bekräftelse | du | plats |
| 3:58 | väntar | du | Kvarnen ska stå vid skrivaren, närmast skräpberget. |
| 3:58 | målruta |  | Ställ kvarnen |
| 3:58 | MÅL |  | Ställ kvarnen |
| 3:58 | pil |  | Ställ kvarnen |
| 3:59 | nick |  | nick:9 |
| 4:02 | kvittens-bock |  | ✓ Köp kvarnen |
| 4:04 | sak | du | Kvarnen ska stå vid skrivaren, närmast skräpberget. |
| 4:04 | notis | tanke | 💭 Kvarnen ska stå vid skrivaren, närmast skräpberget. |
| 4:04 | röst | du | Kvarnen ska stå vid skrivaren, närmast skräpberget. · MÅL |
| 4:08 | klar | du | Kvarnen ska stå vid skrivaren, närmast skräpberget. |
| 4:10 | sak | kjelle | God morgon, det är Kjelle på Radio Tippen! Det har flyttat in någon i det gamla skjulet. Med en cykel och en skrivare. Spännande, Gunnar. |
| 4:10 | notis |  | 📻 Radio Tippen: God morgon, det är Kjelle på Radio Tippen! Det har flyttat in någon i det gamla skjulet. Med en cykel och en skrivare. Spännande, Gunnar. |
| 4:10 | röst | kjelle | God morgon, det är Kjelle på Radio Tippen! Det har flyttat in någon i det gamla skjulet. Med en cykel och en skrivare. Spännande, Gunnar. · REAKTION |
| 4:21 | tanke | du | Vem är Gunnar? |
| 4:21 | väntar | du | Vem är Gunnar? |
| 4:21 | klar | kjelle | God morgon, det är Kjelle på Radio Tippen! Det har flyttat in någon i det gamla skjulet. Med en cykel och en skrivare. Spännande, Gunnar. |
| 4:27 | händelse | placerat | sak=kvarnen |
| 4:27 | duns | du | ställs ner |
| 4:27 | händelse | malKlart | id=kvarn del=Dag 1 – Kom igång nasta=flaska |
| 4:27 | bekräftelse | du | plats |
| 4:27 | väntar | du | Skräp i kvarnen, sen vevar jag. Då blir det tråd. |
| 4:27 | målruta |  | Gör egen tråd |
| 4:27 | MÅL |  | Gör egen tråd |
| 4:27 | hjälp | kontroll | Klick: Veva kvarnen tills tratten är tom |
| 4:27 | sak | du | Skräp i kvarnen, sen vevar jag. Då blir det tråd. |
| 4:27 | pil |  | Gör egen tråd |
| 4:27 | notis | tanke | 💭 Skräp i kvarnen, sen vevar jag. Då blir det tråd. |
| 4:27 | röst | du | Skräp i kvarnen, sen vevar jag. Då blir det tråd. · MÅL |
| 4:28 | nick |  | nick:10 |
| 4:31 | kvittens-bock |  | ✓ Ställ kvarnen |
| 4:33 | klar | du | Skräp i kvarnen, sen vevar jag. Då blir det tråd. |
| 4:41 | sak | du | Vem är Gunnar? |
| 4:41 | notis | tanke | 💭 Vem är Gunnar? |
| 4:41 | röst | du | Vem är Gunnar? · REAKTION |
| 4:43 | klar | du | Vem är Gunnar? |
| 4:56 | struken | info:bra | 3 st i tratten – veva nu! |
| 4:57 | händelse | malKlart | id=flaska del=Dag 1 – Kom igång nasta=egenPrint |
| 4:57 | bekräftelse | du | plats |
| 4:57 | kvittens | du | Det blir tråd! Riktig plasttråd. |
| 4:57 | väntar | du | Det blir tråd! Riktig plasttråd. |
| 4:57 | dagbok-tyst | du | Kvarnen funkar. Soptippen är en gruva. |
| 4:57 | väntar | du | Min egen tråd. Nu printar jag en nyckelring av den. |
| 4:57 | MÅL |  | Printa med egen tråd |
| 4:57 | sak | du | Det blir tråd! Riktig plasttråd. |
| 4:57 | röst | du | Det blir tråd! Riktig plasttråd. · STORY |
| 4:57 | målruta |  | Printa med egen tråd |
| 5:00 | klar | du | Det blir tråd! Riktig plasttråd. |
| 5:00 | sak | du | Min egen tråd. Nu printar jag en nyckelring av den. |
| 5:00 | pil |  | Printa med egen tråd |
| 5:00 | notis | tanke | 💭 Min egen tråd. Nu printar jag en nyckelring av den. |
| 5:00 | röst | du | Min egen tråd. Nu printar jag en nyckelring av den. · MÅL |
| 5:05 | klar | du | Min egen tråd. Nu printar jag en nyckelring av den. |
| 5:16 | händelse | printStart | sak=nyckelring |
| 5:16 | toast | bra | 🔗 Slangen kopplad |
| 5:21 | händelse | printKlar | sak=nyckelring n=3 |
| 5:21 | paket |  | tanke |
| 5:21 | tanke | du | En nyckelring av en gammal schampoflaska. Den luktar fortfarande päron. |
| 5:21 | väntar | du | En nyckelring av en gammal schampoflaska. Den luktar fortfarande päron. |
| 5:21 | skratt | du | egen tråd |
| 5:21 | händelse | malKlart | id=egenPrint del=Dag 1 – Kom igång nasta=salj |
| 5:21 | bekräftelse | du | plats |
| 5:21 | struken | du | En nyckelring av en gammal schampoflaska. Den luktar fortfarande päron. |
| 5:21 | väntar | du | Ali köper nog den här också. |
| 5:21 | målruta |  | Sälj hos Ali |
| 5:21 | MÅL |  | Sälj hos Ali |
| 5:21 | sak | du | Ali köper nog den här också. |
| 5:21 | pil |  | Sälj hos Ali |
| 5:21 | notis | tanke | 💭 Ali köper nog den här också. |
| 5:21 | röst | du | Ali köper nog den här också. · MÅL |
| 5:21 | nick |  | nick:12 |
| 5:22 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 5:24 | klar | du | Ali köper nog den här också. |
| 5:25 | kvittens-bock |  | ✓ Printa med egen tråd |
| 5:34 | händelse | printStart | sak=nyckelring |
| 5:35 | händelse | printKlar | sak=nyckelring n=4 |
| 5:35 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 5:37 | händelse | printStart | sak=nyckelring |
| 5:38 | händelse | printKlar | sak=nyckelring n=5 |
| 5:38 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 5:49 | väntar | ali | Den köper jag. Ge hit. |
| 5:49 | sak | ali | Den köper jag. Ge hit. |
| 5:49 | röst | ali | Den köper jag. Ge hit. · REAKTION |
| 5:49 | upprepning | ali | Den köper jag. Ge hit. |
| 5:50 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 5:51 | händelse | salt | sak=nyckelring n=3 |
| 5:51 | aliSalt | ali | 45 |
| 5:51 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 5:51 | händelse | dialog | id=aliNyckelIgen |
| 5:51 | butiksbubbla | ali | Nyckelringar igen? Folk tappar sina nycklar hela tiden. |
| 5:52 | röst | ali | Nyckelringar igen? Folk tappar sina nycklar hela tiden. · STORY |
| 5:52 | händelse | malKlart | id=salj del=Dag 1 – Kom igång nasta=powerbank |
| 5:52 | bekräftelse | du | plats |
| 5:52 | paket | ali | ali → ge |
| 5:52 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 5:52 | händelse | dialog | id=aliPowerbank |
| 5:52 | butiksbubbla | ali | Jag såg dig cykla. Det ser jobbigt ut. Ta den här. Bra kunder får bonus. |
| 5:52 | väntar | du | Koppla in powerbanken. |
| 5:52 | målruta |  | Koppla in powerbanken |
| 5:52 | MÅL |  | Koppla in powerbanken |
| 5:56 | kvittens-bock |  | ✓ Sälj hos Ali |
| 5:57 | klar | ali | Den köper jag. Ge hit. |
| 5:57 | röst | ali | Jag såg dig cykla. Det ser jobbigt ut. Ta den här. Bra kunder får bonus. · STORY |
| 6:07 | sak | du | Koppla in powerbanken. |
| 6:07 | pil |  | Koppla in powerbanken |
| 6:07 | röst | du | Koppla in powerbanken. · MÅL |
| 6:08 | nick |  | nick:13 |
| 6:09 | klar | du | Koppla in powerbanken. |
| 6:26 | skratt | du | powerbanken monterad |
| 6:26 | paket |  | tanke |
| 6:26 | tanke | du | Nu sparas lite ström. En nyckelring, typ. Framtiden är här, och den sitter fast med eltejp. |
| 6:26 | väntar | du | Nu sparas lite ström. En nyckelring, typ. Framtiden är här, och den sitter fast med eltejp. |
| 6:26 | monterat | du | byggsats:powerbank |
| 6:26 | händelse | monterat | sak=powerbank |
| 6:26 | sak | du | Nu sparas lite ström. En nyckelring, typ. Framtiden är här, och den sitter fast med eltejp. |
| 6:26 | kvitto-visas | du | Nu sparas lite ström. En nyckelring, typ. Framtiden är här, och den sitter fast med eltejp. |
| 6:26 | notis | tanke | 💭 Nu sparas lite ström. En nyckelring, typ. Framtiden är här, och den sitter fast med eltejp. |
| 6:26 | röst | du | Nu sparas lite ström. En nyckelring, typ. Framtiden är här, och den sitter fast med eltejp. · REAKTION |
| 6:26 | händelse | malKlart | id=powerbank del=Dag 1 – Kom igång nasta=kopGrip |
| 6:26 | bekräftelse | du | plats |
| 6:26 | paket |  | lapp → ge |
| 6:26 | lapp-kö | 🧺 Ali | Ali här. Nyckelringen sålde direkt. Jag ville bli ingenjör en gång. Nu har jag låtit en AI rita en skräpgrip. Kom och titta. |
| 6:26 | väntar | ali | Ali här. Nyckelringen sålde direkt. Jag ville bli ingenjör en gång. Nu har jag låtit en AI rita en skräpgrip. Kom och titta. |
| 6:26 | väntar |  | (läget ändras) |
| 6:26 | MÅL |  | Köp skräpgripen |
| 6:30 | kvittens-bock |  | ✓ Gå till Ali |
| 6:32 | klar | du | Nu sparas lite ström. En nyckelring, typ. Framtiden är här, och den sitter fast med eltejp. |
| 6:32 | sak | ali | Ali här. Nyckelringen sålde direkt. Jag ville bli ingenjör en gång. Nu har jag låtit en AI rita en skräpgrip. Kom och titta. |
| 6:32 | sms | ali | Ali här. Nyckelringen sålde direkt. Jag ville bli ingenjör en gång. Nu har jag låtit en AI rita en skräpgrip. Kom och titta. |
| 6:32 | händelse | dialog | id=aliGripSms |
| 6:32 | sms-bubbla | ali | Ali här. Nyckelringen sålde direkt. Jag ville bli ingenjör en gång. Nu har jag låtit en AI rita en skräpgrip. Kom och titta. |
| 6:32 | röst | ali | Ali här. Nyckelringen sålde direkt. Jag ville bli ingenjör en gång. Nu har jag låtit en AI rita en skräpgrip. Kom och titta. · STORY |
| 6:32 | orsak-väntan |  | dialog:aliGripSms |
| 6:32 | väntar | du | Med en skräpgrip slipper jag böja mig. Ali har en ritning. |
| 6:32 | målruta |  | Köp skräpgripen |
| 6:32 | kvitto-visas |  | (läget ändras) |
| 6:32 | sak |  | (läget ändras) |
| 6:33 | paket |  | tanke |
| 6:33 | tanke | du | Femtio kronor. Nu har jag råd med gripen. |
| 6:33 | väntar | du | Femtio kronor. Nu har jag råd med gripen. |
| 6:44 | klar | ali | Ali här. Nyckelringen sålde direkt. Jag ville bli ingenjör en gång. Nu har jag låtit en AI rita en skräpgrip. Kom och titta. |
| 6:44 | struken | du | Med en skräpgrip slipper jag böja mig. Ali har en ritning. |
| 6:44 | sak | du | Femtio kronor. Nu har jag råd med gripen. |
| 6:44 | notis | tanke | 💭 Femtio kronor. Nu har jag råd med gripen. |
| 6:44 | röst | du | Femtio kronor. Nu har jag råd med gripen. · REAKTION |
| 6:47 | klar | du | Femtio kronor. Nu har jag råd med gripen. |
| 6:50 | sak | du | Med en skräpgrip slipper jag böja mig. Ali har en ritning. |
| 6:50 | pil |  | Köp skräpgripen |
| 6:50 | notis | tanke | 💭 Med en skräpgrip slipper jag böja mig. Ali har en ritning. |
| 6:50 | röst | du | Med en skräpgrip slipper jag böja mig. Ali har en ritning. · MÅL |
| 6:51 | nick |  | nick:14 |
| 6:56 | klar | du | Med en skräpgrip slipper jag böja mig. Ali har en ritning. |
| 6:57 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 6:58 | struken | info:guld | 3D-modell köpt – printa skräpgrip |
| 6:58 | händelse | kopt | sak=grip |
| 6:58 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 6:58 | händelse | dialog | id=aliForstaRitning |
| 6:58 | röst | ali | Bra val. Ritningen räcker till en skräpgrip. · STORY |
| 6:58 | butiksbubbla | ali | Bra val. Ritningen räcker till en skräpgrip. |
| 7:00 | händelse | malKlart | id=kopGrip del=Dag 1 – Kom igång nasta=printGrip |
| 7:00 | bekräftelse | du | plats |
| 7:00 | väntar | du | Min första 3D-modell! Jag printar inte bara saker – jag printar maskiner. |
| 7:00 | väntar | du | Ritningen är min. Nu printar jag skräpgripen. |
| 7:00 | MÅL |  | Printa skräpgripen |
| 7:03 | sak | du | Min första 3D-modell! Jag printar inte bara saker – jag printar maskiner. |
| 7:03 | kvitto-visas | du | Min första 3D-modell! Jag printar inte bara saker – jag printar maskiner. |
| 7:03 | lapp | 📔 Dagbok | Min första 3D-modell! Jag printar inte bara saker – jag printar maskiner. |
| 7:03 | dagbokrad | du | Min första 3D-modell! Jag printar inte bara saker – jag printar maskiner. |
| 7:03 | notis | dagbok | Min första 3D-modell! Jag printar inte bara saker – jag printar maskiner. |
| 7:03 | klar | du | Min första 3D-modell! Jag printar inte bara saker – jag printar maskiner. |
| 7:03 | målruta |  | Printa skräpgripen |
| 7:03 | pil |  | Printa skräpgripen |
| 7:04 | nick |  | nick:15 |
| 7:07 | sak | du | Ritningen är min. Nu printar jag skräpgripen. |
| 7:07 | notis | tanke | 💭 Ritningen är min. Nu printar jag skräpgripen. |
| 7:07 | röst | du | Ritningen är min. Nu printar jag skräpgripen. · MÅL |
| 7:12 | klar | du | Ritningen är min. Nu printar jag skräpgripen. |
| 7:19 | händelse | printStart | sak=byggsats:grip |
| 7:20 | toast | fel | Ingen ström – trampa cykeln |
| 7:20 | väntar | notis:Storebrors skrivare: Ingen ström – tramp | Storebrors skrivare: Ingen ström – trampa cykeln |
| 7:20 | sak | notis:Storebrors skrivare: Ingen ström – tramp | Storebrors skrivare: Ingen ström – trampa cykeln |
| 7:20 | notis | fel | Storebrors skrivare: Ingen ström – trampa cykeln |
| 7:21 | brott | DUBBEL UPPMANING | "trampa" på 2 ställen: pekrutan, notisen |
| 7:23 | klar | notis:Storebrors skrivare: Ingen ström – tramp | Storebrors skrivare: Ingen ström – trampa cykeln |
| 7:23 | händelse | printKlar | sak=byggsats:grip n=1 |
| 7:44 | tanke | du | Skräpgrip ska jag ha på mig. |
| 7:44 | väntar | du | Skräpgrip ska jag ha på mig. |
| 7:44 | händelse | tagitUrPrint | sak=byggsats:grip n=1 |
| 7:44 | paket |  | sms |
| 7:44 | väntar | ali | Ali här. Jag såg Skräpgrip på avstånd. Ett streck blev lite snett. Mitt fel. Vackert ändå. |
| 7:44 | sak | du | Skräpgrip ska jag ha på mig. |
| 7:44 | notis | tanke | 💭 Skräpgrip ska jag ha på mig. |
| 7:44 | röst | du | Skräpgrip ska jag ha på mig. · REAKTION |
| 7:45 | hjälp | kontroll | Klick: Klicka för att ta på dig den |
| 7:47 | klar | du | Skräpgrip ska jag ha på mig. |
| 7:49 | tanke | du | Skräpgripen sitter! Jag bär 6, siktar lättare och plockar när jag går nära. |
| 7:49 | väntar | du | Skräpgripen sitter! Jag bär 6, siktar lättare och plockar när jag går nära. |
| 7:49 | tog på | du | byggsats:grip |
| 7:49 | händelse | monterat | sak=grip |
| 7:49 | sak | du | Skräpgripen sitter! Jag bär 6, siktar lättare och plockar när jag går nära. |
| 7:49 | notis | tanke | 💭 Skräpgripen sitter! Jag bär 6, siktar lättare och plockar när jag går nära. |
| 7:49 | röst | du | Skräpgripen sitter! Jag bär 6, siktar lättare och plockar när jag går nära. · REAKTION |
| 7:49 | händelse | malKlart | id=printGrip del=Dag 1 – Kom igång nasta=krukaD1 |
| 7:49 | bekräftelse | du | plats |
| 7:49 | väntar | du | Spara till krukreceptet. |
| 7:49 | MÅL |  | Spara till krukreceptet · 0 / 40 kr |
| 7:51 | händelse | printStart | sak=nyckelring |
| 7:52 | målruta |  | Spara till krukreceptet · 0 / 40 kr |
| 7:52 | händelse | printKlar | sak=nyckelring n=6 |
| 7:53 | kvittens-bock |  | ✓ Printa skräpgripen |
| 7:56 | klar | du | Skräpgripen sitter! Jag bär 6, siktar lättare och plockar när jag går nära. |
| 7:56 | sak | ali | Ali här. Jag såg Skräpgrip på avstånd. Ett streck blev lite snett. Mitt fel. Vackert ändå. |
| 7:56 | sms | ali | Ali här. Jag såg Skräpgrip på avstånd. Ett streck blev lite snett. Mitt fel. Vackert ändå. |
| 7:56 | sms-bubbla | ali | Ali här. Jag såg Skräpgrip på avstånd. Ett streck blev lite snett. Mitt fel. Vackert ändå. |
| 7:56 | röst | ali | Ali här. Jag såg Skräpgrip på avstånd. Ett streck blev lite snett. Mitt fel. Vackert ändå. · REAKTION |
| 8:06 | klar | ali | Ali här. Jag såg Skräpgrip på avstånd. Ett streck blev lite snett. Mitt fel. Vackert ändå. |
| 8:06 | sak | du | Spara till krukreceptet. |
| 8:06 | pil |  | Spara till krukreceptet · 0 / 40 kr |
| 8:06 | röst | du | Spara till krukreceptet. · MÅL |
| 8:09 | klar | du | Spara till krukreceptet. |
| 8:22 | upplåst | bara | grip |
| 8:22 | brott | UPPLÅST | grip (bara 3 av 3) |
| 8:22 | händelse | upplast | id=grip flask=bara |
| 8:22 | paket |  | tanke |
| 8:22 | tanke | du | Ett skräp i taget. Jag springer ihjäl mig. |
| 8:22 | väntar | du | Ett skräp i taget. Jag springer ihjäl mig. |
| 8:22 | sak | du | Ett skräp i taget. Jag springer ihjäl mig. |
| 8:22 | notis | tanke | 💭 Ett skräp i taget. Jag springer ihjäl mig. |
| 8:22 | röst | du | Ett skräp i taget. Jag springer ihjäl mig. · STORY |
| 8:24 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 8:26 | händelse | printStart | sak=nyckelring |
| 8:26 | klar | du | Ett skräp i taget. Jag springer ihjäl mig. |
| 8:27 | händelse | printKlar | sak=nyckelring n=7 |
| 8:28 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 8:30 | händelse | printStart | sak=nyckelring |
| 8:31 | händelse | printKlar | sak=nyckelring n=8 |
| 8:32 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 8:41 | väntar | ali | Den köper jag. Ge hit. |
| 8:41 | sak | ali | Den köper jag. Ge hit. |
| 8:41 | röst | ali | Den köper jag. Ge hit. · REAKTION |
| 8:41 | upprepning | ali | Den köper jag. Ge hit. |
| 8:42 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 8:43 | händelse | salt | sak=nyckelring n=1 |
| 8:43 | aliSalt | ali | 15 |
| 8:43 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 8:44 | händelse | salt | sak=nyckelring n=1 |
| 8:44 | paket |  | ali → ge |
| 8:44 | väntar | ali | Du får bonus! 25 kr extra. Kvalitet. Nästan. |
| 8:44 | väntar |  | (läget ändras) |
| 8:44 | aliSalt | ali | 15 |
| 8:44 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 8:44 | händelse | salt | sak=nyckelring n=1 |
| 8:44 | aliSalt | ali | 15 |
| 8:44 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 8:44 | klar | ali | Den köper jag. Ge hit. |
| 8:44 | sak | ali | Du får bonus! 25 kr extra. Kvalitet. Nästan. |
| 8:44 | notis |  | Ali: ”Du får bonus! 25 kr extra. Kvalitet. Nästan.” |
| 8:44 | röst | ali | Du får bonus! 25 kr extra. Kvalitet. Nästan. · REAKTION |
| 8:44 | upplåst | inkomst | kruka |
| 8:44 | brott | UPPLÅST | kruka (inkomst 8 av 6) |
| 8:44 | händelse | upplast | id=kruka flask=inkomst |
| 8:44 | paket |  | sms |
| 8:44 | väntar | ali | Prova en kruka. Folk köper krukor. Ingen vet varför. |
| 8:44 | skratt | ali | Prova en kruka. Folk köper krukor. Ingen |
| 8:45 | kvitto-visas |  | (läget ändras) |
| 8:45 | sak |  | (läget ändras) |
| 8:50 | klar | ali | Du får bonus! 25 kr extra. Kvalitet. Nästan. |
| 8:52 | sak | ali | Prova en kruka. Folk köper krukor. Ingen vet varför. |
| 8:52 | skratt | ali | Prova en kruka. Folk köper krukor. Ingen |
| 8:52 | sms | ali | Prova en kruka. Folk köper krukor. Ingen vet varför. |
| 8:52 | skratt | ali | Prova en kruka. Folk köper krukor. Ingen |
| 8:52 | händelse | dialog | id=aliKrukaSms |
| 8:52 | sms-bubbla | ali | Prova en kruka. Folk köper krukor. Ingen vet varför. |
| 8:52 | skratt | ali | Prova en kruka. Folk köper krukor. Ingen |
| 8:52 | röst | ali | Prova en kruka. Folk köper krukor. Ingen vet varför. · STORY |
| 8:58 | klar | ali | Prova en kruka. Folk köper krukor. Ingen vet varför. |
| 8:58 | skratt | ali | Prova en kruka. Folk köper krukor. Ingen |
| 8:58 | väntar | du | Ali vill ha krukor. Jag printar en blomkruka. |
| 9:04 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 9:06 | händelse | kopt | sak=kruka |
| 9:06 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 9:06 | händelse | dialog | id=aliKrukaRecept |
| 9:06 | röst | ali | Blomkruka? Bra val. Folk köper sånt. Jag vet inte varför. · STORY |
| 9:06 | butiksbubbla | ali | Blomkruka? Bra val. Folk köper sånt. Jag vet inte varför. |
| 9:13 | struken | du | Ali vill ha krukor. Jag printar en blomkruka. |
| 9:18 | sak | du | Ali vill ha krukor. Jag printar en blomkruka. |
| 9:18 | röst | du | Ali vill ha krukor. Jag printar en blomkruka. · STORY |
| 9:23 | klar | du | Ali vill ha krukor. Jag printar en blomkruka. |
| 9:24 | händelse | printStart | sak=kruka |
| 9:25 | toast | fel | Ingen ström – trampa cykeln |
| 9:28 | händelse | printKlar | sak=kruka n=1 |
| 9:28 | händelse | malKlart | id=krukaD1 del=Dag 1 – Kom igång nasta=saljKruka |
| 9:28 | bekräftelse | du | plats |
| 9:28 | kvittens | du | En kruka. Mamma skulle bli så stolt. Hon får inte veta. |
| 9:28 | väntar | du | En kruka. Mamma skulle bli så stolt. Hon får inte veta. |
| 9:28 | väntar | du | Ali gillar krukor. Han sa det själv. |
| 9:28 | MÅL |  | Sälj blomkrukan |
| 9:28 | sak | du | En kruka. Mamma skulle bli så stolt. Hon får inte veta. |
| 9:28 | röst | du | En kruka. Mamma skulle bli så stolt. Hon får inte veta. · STORY |
| 9:28 | målruta |  | Sälj blomkrukan |
| 9:29 | händelse | tagitUrPrint | sak=kruka n=1 |
| 9:33 | klar | du | En kruka. Mamma skulle bli så stolt. Hon får inte veta. |
| 9:33 | sak | du | Ali gillar krukor. Han sa det själv. |
| 9:33 | pil |  | Sälj blomkrukan |
| 9:33 | notis | tanke | 💭 Ali gillar krukor. Han sa det själv. |
| 9:33 | röst | du | Ali gillar krukor. Han sa det själv. · MÅL |
| 9:36 | klar | du | Ali gillar krukor. Han sa det själv. |
| 9:45 | hjälp | kontroll | R: Vrid innan du ställer ner |
| 9:57 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 9:58 | händelse | salt | sak=kruka n=1 |
| 9:58 | aliSalt | ali | 70 |
| 9:58 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 9:59 | händelse | malKlart | id=saljKruka del=Dag 1 – Kom igång nasta=kopSang |
| 9:59 | bekräftelse | du | plats |
| 9:59 | väntar | du | Jag tänker inte sova på betongen i natt. Ali har en säng. Typ. |
| 9:59 | målruta |  | Köp sängen |
| 9:59 | MÅL |  | Köp sängen |
| 9:59 | väntar | bud | (tips) |
| 9:59 | paket |  | tanke |
| 9:59 | tanke | du | Det börjar bli mörkt. Jag kan inte sova på jorden. |
| 9:59 | väntar | du | Det börjar bli mörkt. Jag kan inte sova på jorden. |
| 9:59 | sak | bud | (tips) |
| 10:00 | struken | du | Det börjar bli mörkt. Jag kan inte sova på jorden. |
| 10:00 | väntar | du | Jag har pengar nu. Hos Ali kan jag köpa uppgraderingar – bära mer eller printa snabbare. |
| 10:01 | klar | bud | (tips) |
| 10:01 | sak | du | Jag tänker inte sova på betongen i natt. Ali har en säng. Typ. |
| 10:01 | pil |  | Köp sängen |
| 10:01 | notis | tanke | 💭 Jag tänker inte sova på betongen i natt. Ali har en säng. Typ. |
| 10:01 | röst | du | Jag tänker inte sova på betongen i natt. Ali har en säng. Typ. · MÅL |
| 10:03 | kvittens-bock |  | ✓ Sälj blomkrukan |
| 10:06 | klar | du | Jag tänker inte sova på betongen i natt. Ali har en säng. Typ. |
| 10:06 | sak | du | Jag har pengar nu. Hos Ali kan jag köpa uppgraderingar – bära mer eller printa snabbare. |
| 10:06 | röst | du | Jag har pengar nu. Hos Ali kan jag köpa uppgraderingar – bära mer eller printa snabbare. · MÅL |
| 10:12 | klar | du | Jag har pengar nu. Hos Ali kan jag köpa uppgraderingar – bära mer eller printa snabbare. |
| 10:17 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 10:19 | händelse | kopt | sak=sang |
| 10:19 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 10:19 | händelse | dialog | id=aliSang |
| 10:19 | röst | ali | Sov gott, min vän. · STORY |
| 10:19 | butiksbubbla | ali | Sov gott, min vän. |
| 10:20 | händelse | malKlart | id=kopSang del=Dag 1 – Kom igång nasta=printSang |
| 10:20 | bekräftelse | du | plats |
| 10:20 | väntar | du | En säng tar lång tid. Den är värd det. |
| 10:20 | målruta |  | Printa sängen |
| 10:20 | MÅL |  | Printa sängen |
| 10:20 | pil |  | Printa sängen |
| 10:21 | nick |  | nick:19 |
| 10:22 | sak | du | En säng tar lång tid. Den är värd det. |
| 10:22 | notis | tanke | 💭 En säng tar lång tid. Den är värd det. |
| 10:22 | röst | du | En säng tar lång tid. Den är värd det. · MÅL |
| 10:24 | kvittens-bock |  | ✓ Köp sängen |
| 10:27 | klar | du | En säng tar lång tid. Den är värd det. |
| 11:24 | händelse | printStart | sak=sang |
| 11:27 | toast | fel | Ingen ström – trampa cykeln |
| 11:30 | händelse | printKlar | sak=sang n=1 |
| 11:31 | händelse | tagitUrPrint | sak=sang n=1 |
| 11:31 | händelse | malKlart | id=printSang del=Dag 1 – Kom igång nasta=sov1 |
| 11:31 | bekräftelse | du | plats |
| 11:31 | kvittens | du | En säng. Jag printade en SÄNG. |
| 11:31 | väntar | du | En säng. Jag printade en SÄNG. |
| 11:31 | paket |  | lapp |
| 11:31 | kvallsrad | du | Nitton år. Inget mer tjat. Gården är full av skräp. I morgon. |
| 11:31 | väntar | du | Sängen ska in i skjulet. Sen sover jag. |
| 11:31 | MÅL |  | Sängen i skjulet |
| 11:31 | sak | du | En säng. Jag printade en SÄNG. |
| 11:31 | röst | du | En säng. Jag printade en SÄNG. · STORY |
| 11:31 | målruta |  | Sängen i skjulet |
| 11:33 | klar | du | En säng. Jag printade en SÄNG. |
| 11:33 | sak | du | Sängen ska in i skjulet. Sen sover jag. |
| 11:33 | pil |  | Sängen i skjulet |
| 11:33 | notis | tanke | 💭 Sängen ska in i skjulet. Sen sover jag. |
| 11:33 | röst | du | Sängen ska in i skjulet. Sen sover jag. · MÅL |
| 11:34 | nick |  | nick:20 |
| 11:38 | klar | du | Sängen ska in i skjulet. Sen sover jag. |
| 11:56 | nattkort | du | 🌙 21 dagar kvar. God natt. zzz… i en riktig säng Nitton år. Inget mer tjat. Gården är full av skräp. I morgon. DAGENS PRINTAR Nyckelring × 8 Blomkruka × 1 Säng |

<details><summary>Botens handlingar dag 1</summary>

- 0:20 gå till brädhögen (3 m) (5 kr)
- 0:35 gå till cykeln vid vägen (2 m) (5 kr)
- 0:57 gå till rutan i linje 1 (13 m) (5 kr)
- 1:43 gå till cykeln (lyfter den) (13 m) (5 kr)
- 1:54 gå till cykelns plats (11 m) (5 kr)
- 2:05 gå till fel håll en bit (4 m) (5 kr)
- 2:08 gå till skrivaren (2 m) (5 kr)
- 2:09 printar Nyckelring (5 kr)
- 2:17 tar ut 1 st ur skrivaren (5 kr)
- 2:35 nybörjaren ser ingen pil – tittar runt (5 kr)
- 2:41 printar Nyckelring (sista av storebrors rulle) (5 kr)
- 3:17 nybörjaren ser ingen pil – tittar runt (5 kr)
- 3:22 tar ut 1 st ur skrivaren (5 kr)
- 3:23 gå till fel håll en bit (4 m) (5 kr)
- 3:34 gå till Ali (26 m) (5 kr)
- 3:34 öppnar Alis butik – sälja de två nyckelringarna (5 kr)
- 3:36 säljer hos Ali: +30 kr (35 kr)
- 3:55 öppnar Alis butik – köpa kvarnen (35 kr)
- 3:58 köper gammalkvarn för 30 kr (5 kr)
- 3:59 köpte kvarnen (5 kr)
- 4:27 gå till kvarnens ruta (28 m) (5 kr)
- 4:52 plockar 3 skräp på gården (bär max 3) (5 kr)
- 4:56 gå till kvarnen (11 m) (5 kr)
- 5:14 gå till cykeln (2 m) (5 kr)
- 5:16 printar Nyckelring (5 kr)
- 5:22 tar ut 1 st ur skrivaren (5 kr)
- 5:34 printar Nyckelring (5 kr)
- 5:35 tar ut 1 st ur skrivaren (5 kr)
- 5:37 printar Nyckelring (5 kr)
- 5:39 tar ut 1 st ur skrivaren (5 kr)
- 5:50 gå till Ali (27 m) (5 kr)
- 5:50 öppnar Alis butik – sälja nyckelringar (5 kr)
- 5:52 säljer hos Ali: +45 kr (50 kr)
- 6:01 panel: "Alis butik
50 kr
0 rullar
Jag " (50 kr)
- 6:26 gå till koppla powerbanken till cykeln (24 m) (50 kr)
- 6:44 nybörjaren ser ingen pil – tittar runt (50 kr)
- 6:57 gå till Ali (24 m) (50 kr)
- 6:57 öppnar Alis butik – köpa skräpgrip (50 kr)
- 6:59 köper grip för 50 kr (0 kr)
- 7:18 gå till skrivaren (25 m) (0 kr)
- 7:19 printar Skräpgrip (0 kr)
- 7:20 gå till cykeln (1 m) (0 kr)
- 7:32 plockar 3 skräp på gården (bär max 3) (0 kr)
- 7:39 gå till kvarnen (19 m) (0 kr)
- 7:44 gå till skrivaren (3 m) (0 kr)
- 7:45 tar ut 1 st ur skrivaren (0 kr)
- 7:49 tar på grip (0 kr)
- 7:50 tjänar pengar till väntar på flaskhalsen för kruka: 0/40 kr → printar nyckelring (15 kr) (0 kr)
- 7:51 printar Nyckelring (0 kr)
- 8:10 plockar 6 skräp på gården (bär max 6) (0 kr)
- 8:22 gå till kvarnen (33 m) (0 kr)
- 8:24 gå till skrivaren (1 m) (0 kr)
- 8:24 tar ut 1 st ur skrivaren (0 kr)
- 8:26 printar Nyckelring (0 kr)
- 8:28 tar ut 1 st ur skrivaren (0 kr)
- 8:30 printar Nyckelring (0 kr)
- 8:32 tar ut 1 st ur skrivaren (0 kr)
- 8:42 gå till Ali (28 m) (0 kr)
- 8:42 öppnar Alis butik – sälja (0 kr)
- 8:44 säljer hos Ali: +45 kr (45 kr)
- 9:04 öppnar Alis butik – köpa receptet blomkruka (70 kr)
- 9:06 köper kruka för 40 kr (30 kr)
- 9:22 gå till skrivaren (25 m) (30 kr)
- 9:24 printar Blomkruka (30 kr)
- 9:25 gå till cykeln (1 m) (30 kr)
- 9:29 tar ut 1 st ur skrivaren (30 kr)
- 9:44 nybörjaren ser ingen pil – tittar runt (30 kr)
- 9:57 gå till Ali (25 m) (30 kr)
- 9:57 öppnar Alis butik – sälja krukan (30 kr)
- 9:59 säljer hos Ali: +70 kr (100 kr)
- 10:17 öppnar Alis butik – köpa sängen (100 kr)
- 10:20 köper sang för 60 kr (40 kr)
- 10:47 gå till dit pilen pekar (30 m) (40 kr)
- 11:07 plockar 6 skräp på gården (bär max 6) (40 kr)
- 11:18 gå till kvarnen (32 m) (40 kr)
- 11:22 gå till skrivaren (3 m) (40 kr)
- 11:24 printar Säng (40 kr)
- 11:28 gå till cykeln (1 m) (40 kr)
- 11:31 tar ut 1 st ur skrivaren (40 kr)
- 11:54 gå till sängplatsen i skjulet (21 m) (40 kr)

</details>

## Dag 2

| Tid | Källa | Vem | Text |
|---|---|---|---|
| 11:56 | vara | ali | kruka |
| 11:56 | händelse | malKlart | id=sov1 del=Dag 1 – Kom igång nasta=kopMotor |
| 11:56 | bekräftelse | du | plats |
| 11:57 | MÅL |  | Spara till kvarnmotorn · 40 / 50 kr |
| 11:57 | väntar | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått generator. Vi tar en låt på det. Den här är till dig, Gunnar. |
| 11:57 | radio | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått generator. Vi tar en låt på det. Den här är till dig, Gunnar. |
| 11:57 | skratt | du | Radio-Kjelle |
| 11:57 | väntar | ali | Ali här. Såg skylten. Stavningen är rätt. Det är mer än många. |
| 0:01 | väntar | foto | Egen säng |
| 0:01 | paket |  | tanke |
| 0:01 | tanke | du | Tänk att jag ska få sova i min egen säng. |
| 0:01 | väntar | du | Tänk att jag ska få sova i min egen säng. |
| 0:01 | dagbok | du | Första natten i en riktig säng. Jag printade den själv. |
| 0:01 | händelse | dagenBorjar | dag=2 |
| 0:01 | meddelande | du | 20 dagar till jul. Vevar jag för hand hinner jag inget annat. |
| 0:01 | dagbokkort | du | Kvarnmotorn. · 20 dagar till jul. Vevar jag för hand hinner jag inget annat. |
| 0:01 | röst | du | 20 dagar till jul. Kvarnmotorn. Vevar jag för hand hinner jag inget annat. · STORY |
| 0:11 | väntar | notis:morgon | Ali vill ha idag: Blomkruka · +50 % |
| 0:11 | händelse | morgonkortStangt | dag=2 |
| 0:11 | väntar | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått generator. Vi tar en låt på det. Den här är till dig, Gunnar. |
| 0:11 | väntar | ali | Ali här. Såg skylten. Stavningen är rätt. Det är mer än många. |
| 0:11 | paket |  | tanke |
| 0:11 | tanke | du | Grön jul igen. Typiskt. |
| 0:11 | väntar | du | Grön jul igen. Typiskt. |
| 0:11 | struken | du | Grön jul igen. Typiskt. |
| 0:11 | väntar | du | Vevandet tar på armarna. Ali har en motor till kvarnen. |
| 0:13 | målruta |  | Spara till kvarnmotorn · 40 / 50 kr |
| 0:16 | sak | du | Vevandet tar på armarna. Ali har en motor till kvarnen. |
| 0:16 | pil |  | Spara till kvarnmotorn · 40 / 50 kr |
| 0:16 | notis | tanke | 💭 Vevandet tar på armarna. Ali har en motor till kvarnen. |
| 0:16 | röst | du | Vevandet tar på armarna. Ali har en motor till kvarnen. · MÅL |
| 0:21 | klar | du | Vevandet tar på armarna. Ali har en motor till kvarnen. |
| 0:21 | sak | notis:morgon | Ali vill ha idag: Blomkruka · +50 % |
| 0:21 | notis |  | Blomkruka · +50 % |
| 0:25 | klar | notis:morgon | Ali vill ha idag: Blomkruka · +50 % |
| 0:47 | sak | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått generator. Vi tar en låt på det. Den här är till dig, Gunnar. |
| 0:47 | notis |  | 📻 Radio Tippen: Radio Tippen, Kjelle här. Skjulet vid tippen har fått generator. Vi tar en låt på det. Den här är till dig, Gunnar. |
| 0:47 | röst | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått generator. Vi tar en låt på det. Den här är till dig, Gunnar. · REAKTION |
| 0:55 | brott | DUBBEL UPPMANING | "veva" på 2 ställen: pekrutan, skylten Tratten är full |
| 0:56 | klar | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått generator. Vi tar en låt på det. Den här är till dig, Gunnar. |
| 0:58 | paket |  | tanke |
| 0:58 | tanke | du | Jaha. En kalsong. Använd. |
| 0:58 | väntar | du | Jaha. En kalsong. Använd. |
| 0:58 | skratt | du | kvarnen spottar |
| 1:01 | struken | ali | Ali här. Såg skylten. Stavningen är rätt. Det är mer än många. |
| 1:02 | händelse | printStart | sak=kruka |
| 1:04 | paket |  | tanke |
| 1:04 | tanke | du | Den blev… spagetti. Ali kallar det modern konst. |
| 1:04 | väntar | du | Den blev… spagetti. Ali kallar det modern konst. |
| 1:04 | skratt | du | plastspagetti |
| 1:04 | händelse | printKlar | sak=kruka n=2 |
| 1:05 | händelse | tagitUrPrint | sak=spagetti n=1 |
| 1:08 | tanke | du | Sopbilen tippade en ny last på soptippen! |
| 1:08 | okänt ord bytt | du | Sopbilen tippade en ny last på soptippen! |
| 1:08 | väntar | du | Sopbilen tippade en ny last på soptippen! |
| 1:08 | lapp | 📔 Dagbok | En stor bil tippade en ny last. Allt det skräpet – och grinden är låst. |
| 1:08 | okänt ord bytt | du | Sopbilen tippade en ny last. Allt det skräpet – och grinden är låst. |
| 1:08 | dagbokrad | du | En stor bil tippade en ny last. Allt det skräpet – och grinden är låst. |
| 1:08 | väntar | notis:En stor bil tippade en ny last. Allt det | En stor bil tippade en ny last. Allt det skräpet – och grinden är låst. |
| 1:08 | sak | du | Sopbilen tippade en ny last på soptippen! |
| 1:08 | notis | tanke | 💭 En stor bil tippade en ny last på soptippen! |
| 1:08 | röst | du | En stor bil tippade en ny last på soptippen! · REAKTION |
| 1:08 | kvitto-visas | notis:En stor bil tippade en ny last. Allt det | En stor bil tippade en ny last. Allt det skräpet – och grinden är låst. |
| 1:08 | sak | notis:En stor bil tippade en ny last. Allt det | En stor bil tippade en ny last. Allt det skräpet – och grinden är låst. |
| 1:08 | notis | dagbok | En stor bil tippade en ny last. Allt det skräpet – och grinden är låst. |
| 1:11 | klar | du | Sopbilen tippade en ny last på soptippen! |
| 1:15 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 1:15 | röst | ali | Kunder, kunder. Ingen ingenjör. Förutom du kanske. · STORY |
| 1:15 | butiksbubbla | ali | Kunder, kunder. Ingen ingenjör. Förutom du kanske. |
| 1:16 | händelse | salt | sak=spagetti n=1 |
| 1:16 | skratt | du | Ali köper konst |
| 1:16 | aliSalt | ali | 3 |
| 1:16 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 1:23 | struken | du | Jaha. En kalsong. Använd. |
| 1:28 | händelse | printStart | sak=kruka |
| 1:29 | struken | du | Den blev… spagetti. Ali kallar det modern konst. |
| 1:29 | toast | fel | Ingen ström – trampa cykeln |
| 1:32 | paket |  | tanke |
| 1:32 | tanke | du | Den blev… spagetti. Ali kallar det modern konst. |
| 1:32 | väntar | du | Den blev… spagetti. Ali kallar det modern konst. |
| 1:32 | skratt | du | plastspagetti |
| 1:32 | händelse | printKlar | sak=kruka n=3 |
| 1:33 | händelse | tagitUrPrint | sak=spagetti n=1 |
| 1:33 | sak | foto | Egen säng |
| 1:33 | foto | du | Egen säng |
| 1:36 | klar | foto | Egen säng |
| 1:41 | väntar | ali | Den köper jag. Ge hit. |
| 1:42 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 1:44 | händelse | salt | sak=spagetti n=1 |
| 1:44 | skratt | du | Ali köper konst |
| 1:44 | aliSalt | ali | 3 |
| 1:44 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 1:44 | sak | du | Tänk att jag ska få sova i min egen säng. |
| 1:44 | notis | tanke | 💭 Tänk att jag ska få sova i min egen säng. |
| 1:44 | röst | du | Tänk att jag ska få sova i min egen säng. · STORY |
| 1:47 | klar | du | Tänk att jag ska få sova i min egen säng. |
| 1:55 | struken | du | Den blev… spagetti. Ali kallar det modern konst. |
| 1:55 | händelse | printStart | sak=kruka |
| 1:58 | händelse | printKlar | sak=kruka n=4 |
| 1:58 | händelse | tagitUrPrint | sak=kruka n=1 |
| 2:01 | hjälp | kontroll | R: Vrid innan du ställer ner |
| 2:03 | struken | ali | Den köper jag. Ge hit. |
| 2:08 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 2:09 | händelse | salt | sak=kruka n=1 |
| 2:09 | aliSalt | ali | 105 |
| 2:09 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 2:09 | röst | ali | Precis det jag ville ha idag, min vän. · STORY |
| 2:09 | butiksbubbla | ali | Precis vad jag ville ha idag. 105 kr – med extra. |
| 2:10 | upplåst | mala | kvarnmotor |
| 2:10 | brott | UPPLÅST | kvarnmotor (mala 9 av 6, sparat ihop) |
| 2:10 | händelse | upplast | id=kvarnmotor flask=mala |
| 2:10 | paket |  | sms |
| 2:10 | väntar | ali | Ali här. En motor? Jag har en. Från en gammal tvättmaskin. Den centrifugerar fortfarande om man ber snällt. |
| 2:14 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 2:16 | struken | info:guld | 3D-modell köpt – printa kvarnmotor |
| 2:16 | händelse | kopt | sak=kvarnmotor |
| 2:16 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 2:16 | struken | ali | Ali här. En motor? Jag har en. Från en gammal tvättmaskin. Den centrifugerar fortfarande om man ber snällt. |
| 2:17 | händelse | malKlart | id=kopMotor del=Dag 2 – Tippen bredvid nasta=monteraMotor |
| 2:17 | bekräftelse | du | plats |
| 2:17 | väntar | du | Motorn ska sitta där veven sitter. Jag printar den först. |
| 2:17 | målruta |  | Printa kvarnmotorn till kvarnen |
| 2:17 | MÅL |  | Printa kvarnmotorn till kvarnen |
| 2:17 | pil |  | Printa kvarnmotorn till kvarnen |
| 2:17 | sak | du | Motorn ska sitta där veven sitter. Jag printar den först. |
| 2:17 | notis | tanke | 💭 Motorn ska sitta där veven sitter. Jag printar den först. |
| 2:17 | röst | du | Motorn ska sitta där veven sitter. Jag printar den först. · MÅL |
| 2:18 | nick |  | nick:22 |
| 2:21 | kvittens-bock |  | ✓ Köp kvarnmotorn |
| 2:23 | klar | du | Motorn ska sitta där veven sitter. Jag printar den först. |
| 2:48 | skratt | du | falsk tuta |
| 2:59 | tanke | du | En hel äng bakom staketet. Någon vill verkligen inte ha besök. |
| 2:59 | väntar | du | En hel äng bakom staketet. Någon vill verkligen inte ha besök. |
| 3:05 | väntar | mamma | Har du frusit än? |
| 3:09 | väntar | värld:TUUT TUUT! | TUUT TUUT! |
| 3:13 | väntar | mamma | Har du frusit än? |
| 3:19 | struken | du | En hel äng bakom staketet. Någon vill verkligen inte ha besök. |
| 3:21 | händelse | printStart | sak=byggsats:kvarnmotor |
| 3:23 | toast | fel | Ingen ström – trampa cykeln |
| 3:26 | händelse | printKlar | sak=byggsats:kvarnmotor n=1 |
| 3:26 | tanke | du | Kvarnmotorn ska skruvas fast på kvarnen. |
| 3:26 | väntar | du | Kvarnmotorn ska skruvas fast på kvarnen. |
| 3:26 | händelse | tagitUrPrint | sak=byggsats:kvarnmotor n=1 |
| 3:26 | paket |  | sms |
| 3:26 | väntar | ali | Ali här. Ännu en ritning som blev på riktigt: Kvarnmotor. Semesterkassan växer. Livet växer. |
| 3:26 | sak | du | Kvarnmotorn ska skruvas fast på kvarnen. |
| 3:26 | notis | tanke | 💭 Kvarnmotorn ska skruvas fast på kvarnen. |
| 3:26 | röst | du | Kvarnmotorn ska skruvas fast på kvarnen. · REAKTION |
| 3:30 | klar | du | Kvarnmotorn ska skruvas fast på kvarnen. |
| 3:32 | struken | värld:TUUT TUUT! | TUUT TUUT! |
| 3:33 | sak | ali | Ali här. Ännu en ritning som blev på riktigt: Kvarnmotor. Semesterkassan växer. Livet växer. |
| 3:33 | sms | ali | Ali här. Ännu en ritning som blev på riktigt: Kvarnmotor. Semesterkassan växer. Livet växer. |
| 3:33 | sms-bubbla | ali | Ali här. Ännu en ritning som blev på riktigt: Kvarnmotor. Semesterkassan växer. Livet växer. |
| 3:33 | röst | ali | Ali här. Ännu en ritning som blev på riktigt: Kvarnmotor. Semesterkassan växer. Livet växer. · REAKTION |
| 3:33 | tanke | du | Motorn sitter där veven satt – nu mal kvarnen själv. |
| 3:33 | väntar | du | Motorn sitter där veven satt – nu mal kvarnen själv. |
| 3:33 | händelse | monterat | sak=kvarnmotor |
| 3:33 | paket |  | tanke |
| 3:33 | tanke | du | Motorn sitter där veven satt. Mina armar tackar. |
| 3:33 | struken | du | Motorn sitter där veven satt – nu mal kvarnen själv. |
| 3:33 | väntar | du | Motorn sitter där veven satt. Mina armar tackar. |
| 3:33 | monterat | du | byggsats:kvarnmotor |
| 3:33 | händelse | monterat | sak=kvarnmotor |
| 3:33 | händelse | malKlart | id=monteraMotor del=Dag 2 – Tippen bredvid nasta=n1-stada-klart-garden |
| 3:33 | bekräftelse | du | plats |
| 3:33 | struken | du | Motorn sitter där veven satt. Mina armar tackar. |
| 3:33 | väntar | du | Gården är full av skräp. Jag börjar vid skjulet. |
| 3:33 | målruta |  | Städa gården |
| 3:33 | MÅL |  | Städa gården |
| 3:37 | kvittens-bock |  | ✓ Printa kvarnmotorn till kvarnen |
| 3:41 | klar | ali | Ali här. Ännu en ritning som blev på riktigt: Kvarnmotor. Semesterkassan växer. Livet växer. |
| 3:41 | sak | du | Gården är full av skräp. Jag börjar vid skjulet. |
| 3:41 | pil |  | Städa gården |
| 3:41 | notis | tanke | 💭 Gården är full av skräp. Jag börjar vid skjulet. |
| 3:41 | röst | du | Gården är full av skräp. Jag börjar vid skjulet. · MÅL |
| 3:41 | nick |  | nick:23 |
| 3:47 | klar | du | Gården är full av skräp. Jag börjar vid skjulet. |
| 4:04 | händelse | malKlart | id=n1-stada-klart-garden del=Dag 2 – Tippen bredvid nasta=kopSack |
| 4:04 | bekräftelse | du | plats |
| 4:04 | lapp | 📔 Dagbok | Gården är STÄDAD, av mig, frivilligt. Mamma skulle aldrig tro det. |
| 4:04 | dagbokrad | du | Gården är STÄDAD, av mig, frivilligt. Mamma skulle aldrig tro det. |
| 4:04 | väntar | notis:Gården är STÄDAD, av mig, frivilligt. Ma | Gården är STÄDAD, av mig, frivilligt. Mamma skulle aldrig tro det. |
| 4:04 | scenInfo | rolf | inkorg 73: sopbilen kommer till skjulet |
| 4:04 | väntar | du | En stor bil saktar in vid skjulet. Jag går dit. |
| 4:04 | MÅL |  | Gå till bilen vid skjulet |
| 4:04 | sak | notis:Gården är STÄDAD, av mig, frivilligt. Ma | Gården är STÄDAD, av mig, frivilligt. Mamma skulle aldrig tro det. |
| 4:04 | notis | dagbok | Gården är STÄDAD, av mig, frivilligt. Mamma skulle aldrig tro det. |
| 4:07 | klar | notis:Gården är STÄDAD, av mig, frivilligt. Ma | Gården är STÄDAD, av mig, frivilligt. Mamma skulle aldrig tro det. |
| 4:07 | målruta |  | Gå till bilen vid skjulet |
| 4:09 | sak | du | En stor bil saktar in vid skjulet. Jag går dit. |
| 4:09 | pil |  | Gå till bilen vid skjulet |
| 4:09 | notis | tanke | 💭 En stor bil saktar in vid skjulet. Jag går dit. |
| 4:09 | röst | du | En stor bil saktar in vid skjulet. Jag går dit. · MÅL |
| 4:09 | tanke | du | Igensvetsad. Någon ville verkligen inte in här. |
| 4:09 | väntar | du | Igensvetsad. Någon ville verkligen inte in här. |
| 4:09 | tanke | du | En flod. Bakom tomten. Ingen sa nåt om en flod. |
| 4:09 | struken | du | Igensvetsad. Någon ville verkligen inte in här. |
| 4:09 | väntar | du | En flod. Bakom tomten. Ingen sa nåt om en flod. |
| 4:13 | klar | du | En stor bil saktar in vid skjulet. Jag går dit. |
| 4:14 | skratt | du | falsk tuta |
| 4:16 | väntar | rolf | Tjena. Rolf. Ja kör sopbilen. Tippen där borta ä min. Har vart min sen -87. |
| 4:16 | sak | rolf | Tjena. Rolf. Ja kör sopbilen. Tippen där borta ä min. Har vart min sen -87. |
| 4:16 | händelse | dialog | id=rolfHej |
| 4:16 | röst | rolf | Tjena. Rolf. Ja kör sopbilen. Tippen där borta ä min. Har vart min sen -87. · REAKTION |
| 4:17 | bubbla |  | Tjena. Rolf. Ja kör sopbilen. Tippen där borta ä min. Har vart min sen -87. |
| 4:28 | upplåst | skrivare | rullstall |
| 4:28 | brott | UPPLÅST | rullstall (skrivare 86 av 60) |
| 4:28 | händelse | upplast | id=rullstall flask=skrivare |
| 4:28 | paket |  | tanke → sms |
| 4:28 | tanke | du | Kvarnen står och väntar för att hållaren är full. Om den rymde fler rullar kunde den mala hela tiden. |
| 4:28 | väntar | du | Kvarnen står och väntar för att hållaren är full. Om den rymde fler rullar kunde den mala hela tiden. |
| 4:28 | väntar | ali | Ali här. Rullställ. Fyra rullar i stället för en. Har ett på hyllan. |
| 4:28 | klar | rolf | Tjena. Rolf. Ja kör sopbilen. Tippen där borta ä min. Har vart min sen -87. |
| 4:28 | sak | du | Kvarnen står och väntar för att hållaren är full. Om den rymde fler rullar kunde den mala hela tiden. |
| 4:28 | notis | tanke | 💭 Kvarnen står och väntar för att hållaren är full. Om den rymde fler rullar kunde den mala hela tiden. |
| 4:28 | röst | du | Kvarnen står och väntar för att hållaren är full. Om den rymde fler rullar kunde den mala hela tiden. · STORY |
| 4:31 | brott | DOLD SKYLT | ALIS MARKNAD från 7 m: skymd av BoxGeometry 1.2 m bort (9.1, 1.8, 23.0) |
| 4:34 | klar | du | Kvarnen står och väntar för att hållaren är full. Om den rymde fler rullar kunde den mala hela tiden. |
| 4:34 | väntar | rolf | Du har städat hela gården. Ingen gör så nuförtin. |
| 4:34 | sak | rolf | Du har städat hela gården. Ingen gör så nuförtin. |
| 4:34 | händelse | dialog | id=rolfGarden |
| 4:34 | röst | rolf | Du har städat hela gården. Ingen gör så nuförtin. · REAKTION |
| 4:35 | bubbla |  | Du har städat hela gården. Ingen gör så nuförtin. |
| 4:40 | klar | rolf | Du har städat hela gården. Ingen gör så nuförtin. |
| 4:40 | väntar | rolf | Öj… ä dä du som printar grejer? Dom där nyckelringarna? |
| 4:41 | sak | rolf | Öj… ä dä du som printar grejer? Dom där nyckelringarna? |
| 4:41 | bubbla |  | Öj… ä dä du som printar grejer? Dom där nyckelringarna? |
| 4:41 | händelse | dialog | id=rolfPrintar |
| 4:41 | röst | rolf | Öj… ä dä du som printar grejer? Dom där nyckelringarna? · REAKTION |
| 4:46 | klar | rolf | Öj… ä dä du som printar grejer? Dom där nyckelringarna? |
| 4:46 | struken | du | En flod. Bakom tomten. Ingen sa nåt om en flod. |
| 4:46 | väntar | du | Ja. Av skräp. |
| 4:46 | sak | du | Ja. Av skräp. |
| 4:46 | notis | tanke | Ja. Av skräp. |
| 4:46 | händelse | dialog | id=duAvSkrap |
| 4:46 | röst | du | Ja. Av skräp. · REAKTION |
| 4:49 | tanke | du | Det glittrar där inne. Eller så är det bara mörkt. Jag måste dit. |
| 4:49 | väntar | du | Det glittrar där inne. Eller så är det bara mörkt. Jag måste dit. |
| 4:51 | klar | du | Ja. Av skräp. |
| 4:51 | väntar | rolf | Hm. Ja kanske har nåt åt dej. Kolla postlådan vid grinden. |
| 4:51 | sak | rolf | Hm. Ja kanske har nåt åt dej. Kolla postlådan vid grinden. |
| 4:51 | händelse | dialog | id=rolfPostlada |
| 4:51 | röst | rolf | Hm. Ja kanske har nåt åt dej. Kolla postlådan vid grinden. · REAKTION |
| 4:52 | bubbla |  | Hm. Ja kanske har nåt åt dej. Kolla postlådan vid grinden. |
| 4:57 | klar | rolf | Hm. Ja kanske har nåt åt dej. Kolla postlådan vid grinden. |
| 4:59 | struken | mamma | Har du frusit än? |
| 5:02 | sopsack | rolf | Rolf kastade ut säckarna vid skjulet |
| 5:03 | paket |  | tanke |
| 5:03 | tanke | du | Rolf slängde av något åt mig. |
| 5:03 | väntar | du | Rolf slängde av något åt mig. |
| 5:05 | brott | DOLD SKYLT | ALIS MARKNAD från 7 m: skymd av PlaneGeometry 1.2 m bort (9.1, 1.8, 22.9) |
| 5:05 | väntar | du | Tornet är fullt. Skrivaren får jobba ikapp. |
| 5:05 | väntar | info:fel | Tornet är fullt. Skrivaren får jobba ikapp. |
| 5:05 | sak | info:fel | Tornet är fullt. Skrivaren får jobba ikapp. |
| 5:05 | kvitto-visas | info:fel | Tornet är fullt. Skrivaren får jobba ikapp. |
| 5:05 | toast | fel | Tornet är fullt. Skrivaren får jobba ikapp. |
| 5:07 | klar | info:fel | Tornet är fullt. Skrivaren får jobba ikapp. |
| 5:07 | sak | du | Tornet är fullt. Skrivaren får jobba ikapp. |
| 5:07 | röst | du | Tornet är fullt. Skrivaren får jobba ikapp. · REAKTION |
| 5:13 | klar | du | Tornet är fullt. Skrivaren får jobba ikapp. |
| 5:15 | struken | du | Det glittrar där inne. Eller så är det bara mörkt. Jag måste dit. |
| 5:21 | sak | ali | Ali här. Rullställ. Fyra rullar i stället för en. Har ett på hyllan. |
| 5:21 | sms | ali | Ali här. Rullställ. Fyra rullar i stället för en. Har ett på hyllan. |
| 5:21 | sms-bubbla | ali | Ali här. Rullställ. Fyra rullar i stället för en. Har ett på hyllan. |
| 5:21 | röst | ali | Ali här. Rullställ. Fyra rullar i stället för en. Har ett på hyllan. · STORY |
| 5:24 | hjälp | kontroll | Klick: Klicka för att ta på dig den |
| 5:26 | skratt | du | falsk tuta |
| 5:26 | paket |  | tanke → ge |
| 5:26 | tanke | du | Flaggan är uppe. Rolf har lämnat något. |
| 5:26 | väntar | du | Flaggan är uppe. Rolf har lämnat något. |
| 5:26 | väntar |  | (läget ändras) |
| 5:26 | klar | ali | Ali här. Rullställ. Fyra rullar i stället för en. Har ett på hyllan. |
| 5:28 | upplåst | skrivare | trim_skrivare |
| 5:28 | brott | UPPLÅST | trim_skrivare (skrivare 60 av 60) |
| 5:28 | händelse | upplast | id=trim_skrivare flask=skrivare |
| 5:28 | paket |  | sms |
| 5:28 | väntar | ali | Ali här. Skrivartrim. Jag skruvade på min egen skrivare i natt. Den går fortare nu. Nästan för fort. |
| 5:28 | struken | du | Rolf slängde av något åt mig. |
| 5:34 | sak | du | Flaggan är uppe. Rolf har lämnat något. |
| 5:34 | notis | tanke | 💭 Flaggan är uppe. Rolf har lämnat något. |
| 5:34 | röst | du | Flaggan är uppe. Rolf har lämnat något. · STORY |
| 5:38 | klar | du | Flaggan är uppe. Rolf har lämnat något. |
| 5:38 | väntar | rolf | Såg att du printar grejer. Kan du göra en sån hä? Kall öl ä viktigt. Ja ha ritat själv. Ungefär så hä. Ja ä int dum. /Rolf​ |
| 5:38 | paket |  | ge |
| 5:38 | väntar |  | (läget ändras) |
| 5:38 | paket |  | tanke |
| 5:38 | tanke | du | Rolf har ritat själv. Den är… ungefär. Jag fattar vad han menar. |
| 5:38 | väntar | du | Rolf har ritat själv. Den är… ungefär. Jag fattar vad han menar. |
| 5:38 | sak | rolf | Såg att du printar grejer. Kan du göra en sån hä? Kall öl ä viktigt. Ja ha ritat själv. Ungefär så hä. Ja ä int dum. /Rolf​ |
| 5:38 | lapp | Brev från Rolf | Såg att du printar grejer. Kan du göra en sån hä? Kall öl ä viktigt. Ja ha ritat själv. Ungefär så hä. Ja ä int dum. /Rolf​ |
| 5:38 | röst | rolf | Såg att du printar grejer. Kan du göra en sån hä? Kall öl ä viktigt. Ja ha ritat själv. Ungefär så hä. Ja ä int dum. /Rolf​ · STORY |
| 5:39 | tanke | du | Rolf har nyckeln… Jag undrar vad som finns där inne. |
| 5:39 | struken | du | Rolf har ritat själv. Den är… ungefär. Jag fattar vad han menar. |
| 5:39 | väntar | du | Rolf har nyckeln… Jag undrar vad som finns där inne. |
| 5:39 | brott | DUBBEL | du upprepar rolf: "Rolf har ritat själv. Den är… ungefär. Jag fattar " |
| 5:39 | kvitto-visas |  | (läget ändras) |
| 5:39 | sak |  | (läget ändras) |
| 5:39 | tanke | du | En sopsäck över axeln! Nu bär jag 10 skräp. |
| 5:39 | struken | du | Rolf har nyckeln… Jag undrar vad som finns där inne. |
| 5:39 | väntar | du | En sopsäck över axeln! Nu bär jag 10 skräp. |
| 5:39 | tog på | du | byggsats:korg |
| 5:39 | händelse | monterat | sak=korg |
| 5:39 | händelse | malKlart | id=kopSack del=Dag 2 – Tippen bredvid nasta=rolf0-brev |
| 5:39 | bekräftelse | du | plats |
| 5:39 | händelse | malKlart | id=rolf0-brev del=Dag 2 – Tippen bredvid nasta=rolf0-printa |
| 5:39 | bekräftelse | du | plats |
| 5:39 | struken | du | En sopsäck över axeln! Nu bär jag 10 skräp. |
| 5:39 | väntar | du | Rolf vill ha en ölhållare. Den printar jag. |
| 5:39 | MÅL |  | Printa ölhållare med kylklamp |
| 5:41 | målruta |  | Printa ölhållare med kylklamp |
| 5:44 | händelse | printStart | sak=olhallare |
| 5:44 | händelse | malKlart | id=rolf0-printa del=Dag 2 – Tippen bredvid nasta=rolf0-ge |
| 5:44 | bekräftelse | du | plats |
| 5:44 | väntar | du | Ölhållaren är klar. Den lägger jag i Rolfs postlåda. |
| 5:44 | MÅL |  | Ge Rolf ölhållare med kylklamp |
| 5:46 | målruta |  | Ge Rolf ölhållare med kylklamp |
| 5:47 | händelse | printKlar | sak=olhallare n=1 |
| 5:47 | händelse | tagitUrPrint | sak=olhallare n=1 |
| 5:48 | kvittens-bock |  | ✓ Printa ölhållare med kylklamp |
| 5:51 | klar | rolf | Såg att du printar grejer. Kan du göra en sån hä? Kall öl ä viktigt. Ja ha ritat själv. Ungefär så hä. Ja ä int dum. /Rolf​ |
| 5:51 | händelse | brevLast | id=rolf:0 |
| 5:51 | struken | du | Rolf vill ha en ölhållare. Den printar jag. |
| 5:51 | sak | du | Ölhållaren är klar. Den lägger jag i Rolfs postlåda. |
| 5:51 | pil |  | Ge Rolf ölhållare med kylklamp |
| 5:51 | notis | tanke | 💭 Ölhållaren är klar. Den lägger jag i Rolfs postlåda. |
| 5:51 | röst | du | Ölhållaren är klar. Den lägger jag i Rolfs postlåda. · MÅL |
| 5:55 | klar | du | Ölhållaren är klar. Den lägger jag i Rolfs postlåda. |
| 6:04 | sak |  | (läget ändras) |
| 6:04 | brev | rolf | rolf:0 |
| 6:04 | klar |  | (läget ändras) |
| 6:08 | sak | ali | Ali här. Skrivartrim. Jag skruvade på min egen skrivare i natt. Den går fortare nu. Nästan för fort. |
| 6:08 | sms | ali | Ali här. Skrivartrim. Jag skruvade på min egen skrivare i natt. Den går fortare nu. Nästan för fort. |
| 6:08 | sms-bubbla | ali | Ali här. Skrivartrim. Jag skruvade på min egen skrivare i natt. Den går fortare nu. Nästan för fort. |
| 6:08 | röst | ali | Ali här. Skrivartrim. Jag skruvade på min egen skrivare i natt. Den går fortare nu. Nästan för fort. · STORY |
| 6:13 | händelse | lagtIPostlada | sak=olhallare rolf=0 jobb=false |
| 6:13 | paket |  | tanke |
| 6:13 | tanke | du | Flaggan uppe. Nu får Rolf hämta den. |
| 6:13 | väntar | du | Flaggan uppe. Nu får Rolf hämta den. |
| 6:13 | händelse | malKlart | id=rolf0-ge del=Dag 2 – Tippen bredvid nasta=vindsnurra |
| 6:13 | bekräftelse | du | plats |
| 6:13 | struken | du | Flaggan uppe. Nu får Rolf hämta den. |
| 6:13 | väntar | du | En vindsnurra på skjulets tak. Då blir det ström när det blåser. |
| 6:13 | MÅL |  | Spara till vindsnurran · 101 / 133 kr |
| 6:15 | målruta |  | Spara till vindsnurran · 101 / 133 kr |
| 6:17 | kvittens-bock |  | ✓ Ge Rolf ölhållare med kylklamp |
| 6:18 | klar | ali | Ali här. Skrivartrim. Jag skruvade på min egen skrivare i natt. Den går fortare nu. Nästan för fort. |
| 6:18 | sak | du | En vindsnurra på skjulets tak. Då blir det ström när det blåser. |
| 6:18 | pil |  | Spara till vindsnurran · 101 / 133 kr |
| 6:18 | notis | tanke | 💭 En vindsnurra på skjulets tak. Då blir det ström när det blåser. |
| 6:18 | röst | du | En vindsnurra på skjulets tak. Då blir det ström när det blåser. · MÅL |
| 6:24 | klar | du | En vindsnurra på skjulets tak. Då blir det ström när det blåser. |
| 6:39 | händelse | printStart | sak=kruka |
| 6:40 | toast | fel | Ingen ström – trampa cykeln |
| 6:43 | händelse | printKlar | sak=kruka n=5 |
| 6:44 | händelse | tagitUrPrint | sak=kruka n=1 |
| 6:46 | hjälp | kontroll | R: Vrid innan du ställer ner |
| 6:53 | väntar | ali | Du ser trött ut. Det är bra. Det betyder jobb. |
| 6:53 | sak | ali | Du ser trött ut. Det är bra. Det betyder jobb. |
| 6:53 | röst | ali | Du ser trött ut. Det är bra. Det betyder jobb. · SMÅPRAT |
| 6:54 | bubbla |  | Du ser trött ut. Det är bra. Det betyder jobb. |
| 6:54 | väntar | ali | Den köper jag. Ge hit. |
| 6:55 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 6:55 | butiksbubbla | ali | Rolf gav mig en kanna. Som min farmors. Jag ritade en sak åt honom. Säg inget, han gråter lätt. |
| 6:56 | händelse | salt | sak=kruka n=1 |
| 6:56 | aliSalt | ali | 105 |
| 6:56 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 6:57 | väntar | ali | Rolf gav mig en kanna. Som min farmors. Jag ritade en sak åt honom. Säg inget, han gråter lätt. |
| 6:57 | upplåst | trampa | vindsnurra |
| 6:57 | brott | UPPLÅST | vindsnurra (trampa 23 av 6, sparat ihop) |
| 6:57 | händelse | upplast | id=vindsnurra flask=trampa |
| 6:57 | paket |  | sms |
| 6:57 | väntar | ali | Ali här. Vindsnurra till cykeln. Vinden trampar åt dig. Den är lat, men den jobbar gratis. |
| 6:58 | klar | ali | Du ser trött ut. Det är bra. Det betyder jobb. |
| 6:58 | sak | ali | Rolf gav mig en kanna. Som min farmors. Jag ritade en sak åt honom. Säg inget, han gråter lätt. |
| 6:58 | röst | ali | Rolf gav mig en kanna. Som min farmors. Jag ritade en sak åt honom. Säg inget, han gråter lätt. · STORY |
| 7:06 | klar | ali | Rolf gav mig en kanna. Som min farmors. Jag ritade en sak åt honom. Säg inget, han gråter lätt. |
| 7:09 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 7:10 | struken | info:guld | 3D-modell köpt – printa vindsnurra till skjultaket |
| 7:10 | händelse | kopt | sak=vindsnurra |
| 7:10 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 7:10 | struken | ali | Ali här. Vindsnurra till cykeln. Vinden trampar åt dig. Den är lat, men den jobbar gratis. |
| 7:12 | skratt | du | falsk tuta |
| 7:14 | sak | ali | Den köper jag. Ge hit. |
| 7:14 | röst | ali | Den köper jag. Ge hit. · REAKTION |
| 7:14 | upprepning | ali | Den köper jag. Ge hit. |
| 7:17 | klar | ali | Den köper jag. Ge hit. |
| 7:23 | händelse | printStart | sak=byggsats:vindsnurra |
| 7:27 | händelse | printKlar | sak=byggsats:vindsnurra n=1 |
| 7:28 | tanke | du | Vindsnurran ska upp på skjulets tak. |
| 7:28 | väntar | du | Vindsnurran ska upp på skjulets tak. |
| 7:28 | händelse | tagitUrPrint | sak=byggsats:vindsnurra n=1 |
| 7:28 | sak | du | Vindsnurran ska upp på skjulets tak. |
| 7:28 | notis | tanke | 💭 Vindsnurran ska upp på skjulets tak. |
| 7:28 | röst | du | Vindsnurran ska upp på skjulets tak. · REAKTION |
| 7:29 | paket |  | tanke |
| 7:29 | tanke | du | Jaha, Rolf har hämtat en ölhållare med kylklamp. |
| 7:29 | väntar | du | Jaha, Rolf har hämtat en ölhållare med kylklamp. |
| 7:32 | klar | du | Vindsnurran ska upp på skjulets tak. |
| 7:40 | sak | du | Jaha, Rolf har hämtat en ölhållare med kylklamp. |
| 7:40 | notis | tanke | 💭 Jaha, Rolf har hämtat en ölhållare med kylklamp. |
| 7:40 | röst | du | Jaha, Rolf har hämtat en ölhållare med kylklamp. · REAKTION |
| 7:42 | händelse | placerat | sak=vindsnurra |
| 7:42 | tanke | du | Vindsnurran sitter på taket – den trampar cykeln åt mig när det blåser |
| 7:42 | väntar | du | Vindsnurran sitter på taket – den trampar cykeln åt mig när det blåser |
| 7:42 | monterat | du | byggsats:vindsnurra |
| 7:42 | händelse | monterat | sak=vindsnurra |
| 7:42 | klipps | du | Jaha, Rolf har hämtat en ölhållare med kylklamp. |
| 7:42 | händelse | malKlart | id=vindsnurra del=Dag 2 – Tippen bredvid nasta=n1-bygg-dorr-skjulet |
| 7:42 | bekräftelse | du | plats |
| 7:42 | kvittens | du | Den snurrar! Långsamt. Men den snurrar. |
| 7:42 | väntar | du | Den snurrar! Långsamt. Men den snurrar. |
| 7:42 | struken | du | Vindsnurran sitter på taket – den trampar cykeln åt mig när det blåser |
| 7:42 | väntar | du | Det drar från dörrhålet. En dörr kan jag printa. |
| 7:42 | MÅL |  | Bygg en dörr till skjulet |
| 7:42 | klar | du | Jaha, Rolf har hämtat en ölhållare med kylklamp. |
| 7:42 | sak | du | Den snurrar! Långsamt. Men den snurrar. |
| 7:42 | röst | du | Den snurrar! Långsamt. Men den snurrar. · STORY |
| 7:42 | målruta |  | Bygg en dörr till skjulet |
| 7:45 | klar | du | Den snurrar! Långsamt. Men den snurrar. |
| 7:46 | sak | du | Det drar från dörrhålet. En dörr kan jag printa. |
| 7:46 | pil |  | Bygg en dörr till skjulet |
| 7:46 | notis | tanke | 💭 Det drar från dörrhålet. En dörr kan jag printa. |
| 7:46 | röst | du | Det drar från dörrhålet. En dörr kan jag printa. · MÅL |
| 7:47 | nick |  | nick:29 |
| 7:49 | klar | du | Det drar från dörrhålet. En dörr kan jag printa. |
| 8:03 | händelse | printStart | sak=kruka |
| 8:06 | händelse | printKlar | sak=kruka n=6 |
| 8:06 | händelse | tagitUrPrint | sak=kruka n=1 |
| 8:16 | väntar | ali | Den köper jag. Ge hit. |
| 8:16 | sak | ali | Den köper jag. Ge hit. |
| 8:16 | röst | ali | Den köper jag. Ge hit. · REAKTION |
| 8:16 | upprepning | ali | Den köper jag. Ge hit. |
| 8:16 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 8:18 | händelse | salt | sak=kruka n=1 |
| 8:18 | aliSalt | ali | 105 |
| 8:18 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 8:18 | klar | ali | Den köper jag. Ge hit. |
| 8:19 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 8:21 | struken | info:guld | 3D-modell köpt – printa dörr |
| 8:21 | händelse | kopt | sak=dorr |
| 8:21 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 8:33 | händelse | printStart | sak=byggsats:dorr |
| 8:37 | toast | bra | Del 1 av 2 klar |
| 8:37 | väntar | notis:Storebrors skrivare: Del 1 av 2 klar | Storebrors skrivare: Del 1 av 2 klar |
| 8:37 | sak | notis:Storebrors skrivare: Del 1 av 2 klar | Storebrors skrivare: Del 1 av 2 klar |
| 8:37 | notis | bra | Storebrors skrivare: Del 1 av 2 klar |
| 8:39 | klar | notis:Storebrors skrivare: Del 1 av 2 klar | Storebrors skrivare: Del 1 av 2 klar |
| 8:40 | händelse | printKlar | sak=byggsats:dorr n=1 |
| 8:41 | händelse | tagitUrPrint | sak=byggsats:dorr n=1 |
| 8:41 | paket |  | sms |
| 8:41 | väntar | ali | Ali här. Jag har inte sovit. Inte på grund av AI:n. På grund av dig. Du bygger saker av sopor. Jag har en hel butik och bygger ingenting. Det ska ändras. Kanske. Troligen. |
| 8:48 | tanke | du | Dörr på plats! Trivsel +8 |
| 8:48 | väntar | du | Dörr på plats! Trivsel +8 |
| 8:48 | sak | du | Dörr på plats! Trivsel +8 |
| 8:48 | notis | tanke | 💭 Dörr på plats! Trivsel +8 |
| 8:48 | röst | du | Dörr på plats! Trivsel +8 · REAKTION |
| 8:48 | händelse | malKlart | id=n1-bygg-dorr-skjulet del=Dag 2 – Tippen bredvid nasta=sov2 |
| 8:48 | paket |  | lapp |
| 8:48 | väntar | du | Nu vet Ali att jag bor HÄR. Taket läcker. I morgon. |
| 8:48 | paket |  | sms |
| 8:48 | väntar | bror | Mamma ringde mig fyra gånger förresten. Snyggt jobbat 😂 |
| 8:48 | skratt | bror | Mamma ringde mig fyra gånger förresten. |
| 8:48 | bekräftelse | du | plats |
| 8:48 | väntar | du | Sov när du vill. |
| 8:49 | MÅL |  | Sov när du vill |
| 8:51 | klar | du | Dörr på plats! Trivsel +8 |
| 8:51 | sak | du | Nu vet Ali att jag bor HÄR. Taket läcker. I morgon. |
| 8:51 | kvallsrad | du | Nu vet Ali att jag bor HÄR. Taket läcker. I morgon. |
| 8:51 | målruta |  | Sov när du vill |
| 8:51 | klar | du | Nu vet Ali att jag bor HÄR. Taket läcker. I morgon. |
| 8:51 | sak | du | Sov när du vill. |
| 8:51 | pil |  | Sov när du vill |
| 8:51 | röst | du | Sov när du vill. · MÅL |
| 8:52 | kvittens-bock |  | ✓ Bygg en dörr till skjulet |
| 8:53 | klar | du | Sov när du vill. |
| 8:56 | väntar | notis:🌇 Klockan är 21. Ali slår igen luckan.  | 🌇 Klockan är 21. Ali slår igen luckan. Dagens jobb är klart – gå in i skjulet och sov i sängen. |
| 9:03 | nattkort | du | 🌙 20 dagar kvar. God natt. zzz… Nu vet Ali att jag bor HÄR. Taket läcker. I morgon. DAGENS PRINTAR Blomkruka × 5 Ölhållare med kylklamp × 1 Totalt 6 printar 💰 |

<details><summary>Botens handlingar dag 2</summary>

- 0:00 — dag 2 börjar — (40 kr)
- 0:11 popup: "FORTSÄTT" (40 kr)
- 0:26 nybörjaren ser ingen pil – tittar runt (40 kr)
- 0:30 tjänar pengar till väntar på flaskhalsen för kvarnmotor: 40/80 kr → printar blomkruka (105 kr) (40 kr)
- 0:42 plockar 6 skräp på gården (bär max 6) (40 kr)
- 0:53 gå till kvarnen (29 m) (40 kr)
- 1:00 gå till skrivaren (3 m) (40 kr)
- 1:02 printar Blomkruka (40 kr)
- 1:05 tar ut 1 st ur skrivaren (40 kr)
- 1:15 gå till Ali (28 m) (40 kr)
- 1:15 öppnar Alis butik – sälja (40 kr)
- 1:17 säljer hos Ali: +3 kr (43 kr)
- 1:17 tjänar pengar till väntar på flaskhalsen för kvarnmotor: 43/80 kr → printar blomkruka (105 kr) (43 kr)
- 1:26 gå till skrivaren (25 m) (43 kr)
- 1:28 printar Blomkruka (43 kr)
- 1:30 gå till cykeln (1 m) (43 kr)
- 1:33 tar ut 1 st ur skrivaren (43 kr)
- 1:42 gå till Ali (25 m) (43 kr)
- 1:42 öppnar Alis butik – sälja (43 kr)
- 1:44 säljer hos Ali: +3 kr (46 kr)
- 1:45 tjänar pengar till väntar på flaskhalsen för kvarnmotor: 46/80 kr → printar blomkruka (105 kr) (46 kr)
- 1:54 gå till skrivaren (25 m) (46 kr)
- 1:55 printar Blomkruka (46 kr)
- 1:59 tar ut 1 st ur skrivaren (46 kr)
- 2:08 gå till Ali (25 m) (46 kr)
- 2:08 öppnar Alis butik – sälja (46 kr)
- 2:10 säljer hos Ali: +105 kr (151 kr)
- 2:14 öppnar Alis butik – köpa kvarnmotor (151 kr)
- 2:17 köper kvarnmotor för 50 kr (101 kr)
- 2:46 gå till dit pilen pekar (30 m) (101 kr)
- 3:02 plockar 3 skräp på gården (bär max 6) (101 kr)
- 3:13 gå till kvarnen (31 m) (101 kr)
- 3:20 gå till skrivaren (3 m) (101 kr)
- 3:21 printar Kvarnmotor (101 kr)
- 3:24 gå till cykeln (1 m) (101 kr)
- 3:27 tar ut 1 st ur skrivaren (101 kr)
- 3:33 gå till skruva fast kvarnmotorn (2 m) (101 kr)
- 3:56 gå till fel håll en bit (4 m) (101 kr)
- 4:10 plockar 3 skräp på gården (bär max 6) (101 kr)
- 4:19 gå till kvarnen (25 m) (101 kr)
- 4:36 nybörjaren ser ingen pil – tittar runt (101 kr)
- 4:55 plockar 5 skräp på gården (bär max 6) (101 kr)
- 5:05 gå till kvarnen (27 m) (101 kr)
- 5:24 gå till Rolfs sopsäck (26 m) (101 kr)
- 5:38 gå till Rolfs postlåda (28 m) (101 kr)
- 5:39 tar på korg (101 kr)
- 5:42 gå till skrivaren (7 m) (101 kr)
- 5:44 printar Ölhållare med kylklamp (101 kr)
- 5:48 tar ut 1 st ur skrivaren (101 kr)
- 6:05 nybörjaren ser ingen pil – tittar runt (101 kr)
- 6:10 valj olhallare: true, vald olhallare, post {"l":null,"tr":null,"tm":[]}, nummer false (101 kr)
- 6:13 gå till Rolfs postlåda (6 m) (101 kr)
- 6:30 nybörjaren ser ingen pil – tittar runt (101 kr)
- 6:35 tjänar pengar till väntar på flaskhalsen för vindsnurra: 101/141 kr → printar blomkruka (105 kr) (101 kr)
- 6:38 gå till skrivaren (6 m) (101 kr)
- 6:39 printar Blomkruka (101 kr)
- 6:41 gå till cykeln (1 m) (101 kr)
- 6:45 tar ut 1 st ur skrivaren (101 kr)
- 6:55 gå till Ali (27 m) (101 kr)
- 6:55 öppnar Alis butik – sälja (101 kr)
- 6:57 säljer hos Ali: +105 kr (206 kr)
- 7:09 öppnar Alis butik – köpa vindsnurra till skjultaket (206 kr)
- 7:11 köper vindsnurra för 133 kr (73 kr)
- 7:21 gå till skrivaren (25 m) (73 kr)
- 7:23 printar Vindsnurra till skjultaket (73 kr)
- 7:26 gå till cykeln (1 m) (73 kr)
- 7:28 tar ut 1 st ur skrivaren (73 kr)
- 7:42 gå till sätt vindsnurran på taket (20 m) (73 kr)
- 7:54 tjänar pengar till dörr: 73/120 kr → printar blomkruka (105 kr) (73 kr)
- 8:01 gå till skrivaren (19 m) (73 kr)
- 8:03 printar Blomkruka (73 kr)
- 8:07 tar ut 1 st ur skrivaren (73 kr)
- 8:16 gå till Ali (26 m) (73 kr)
- 8:16 öppnar Alis butik – sälja (73 kr)
- 8:18 säljer hos Ali: +105 kr (178 kr)
- 8:19 öppnar Alis butik – köpa dörr (178 kr)
- 8:21 köper dorr för 120 kr (58 kr)
- 8:32 gå till skrivaren (25 m) (58 kr)
- 8:33 printar Dörr (2 delar) (58 kr)
- 8:41 tar ut 1 st ur skrivaren (58 kr)
- 8:48 gå till skjulet (19 m) (58 kr)
- 9:01 gå till sängen (1 m) (58 kr)

</details>

## Dag 3

| Tid | Källa | Vem | Text |
|---|---|---|---|
| 9:03 | vara | ali | ingen |
| 9:03 | händelse | malKlart | id=sov2 del=Dag 2 – Tippen bredvid nasta=rolf1-brev |
| 9:03 | bekräftelse | du | plats |
| 9:03 | vara | ali | kruka |
| 9:03 | MÅL |  | Möt sopbilen vid grinden |
| 9:03 | väntar | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått en DÖRR. Och vindsnurra till skjultaket. Mer säger jag inte. Gunnar vet. |
| 9:03 | radio | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått en DÖRR. Och vindsnurra till skjultaket. Mer säger jag inte. Gunnar vet. |
| 9:03 | skratt | du | Radio-Kjelle |
| 0:01 | händelse | dagenBorjar | dag=3 |
| 0:01 | meddelande | du | 19 dagar till jul. Utan Rolf kommer jag aldrig in på tippen. |
| 0:01 | dagbokkort | du | Rolfs brev. · 19 dagar till jul. Utan Rolf kommer jag aldrig in på tippen. |
| 0:01 | röst | du | 19 dagar till jul. Rolfs brev. Utan Rolf kommer jag aldrig in på tippen. · STORY |
| 0:07 | väntar | notis:morgon | Ali vill ha idag: Blomkruka · +50 % |
| 0:07 | händelse | morgonkortStangt | dag=3 |
| 0:07 | väntar | ali | Ali här. Jag har inte sovit. Inte på grund av AI:n. På grund av dig. Du bygger saker av sopor. Jag har en hel butik och bygger ingenting. Det ska ändras. Kanske. Troligen. |
| 0:07 | väntar | bror | Mamma ringde mig fyra gånger förresten. Snyggt jobbat 😂 |
| 0:07 | skratt | bror | Mamma ringde mig fyra gånger förresten. |
| 0:07 | väntar | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått en DÖRR. Och vindsnurra till skjultaket. Mer säger jag inte. Gunnar vet. |
| 0:07 | paket |  | sms |
| 0:07 | väntar | ali | Ali här. Satt uppe med AI:n hela natten. Ritningen till Plåttak är klar. Kom innan nio, då stänger jag. |
| 0:07 | väntar | du | Ett nytt brev i Rolfs postlåda. Det läser jag. |
| 0:07 | målruta |  | Möt sopbilen vid grinden |
| 0:12 | sak | du | Ett nytt brev i Rolfs postlåda. Det läser jag. |
| 0:12 | pil |  | Möt sopbilen vid grinden |
| 0:12 | notis | tanke | 💭 Ett nytt brev i Rolfs postlåda. Det läser jag. |
| 0:12 | röst | du | Ett nytt brev i Rolfs postlåda. Det läser jag. · MÅL |
| 0:14 | skratt | du | falsk tuta |
| 0:14 | paket |  | ge |
| 0:14 | väntar |  | (läget ändras) |
| 0:17 | klar | du | Ett nytt brev i Rolfs postlåda. Det läser jag. |
| 0:18 | sak | notis:morgon | Ali vill ha idag: Blomkruka · +50 % |
| 0:18 | notis |  | Blomkruka · +50 % |
| 0:21 | skratt | du | däcket rullar iväg |
| 0:21 | klar | notis:morgon | Ali vill ha idag: Blomkruka · +50 % |
| 0:23 | struken | notis:🌇 Klockan är 21. Ali slår igen luckan.  | 🌇 Klockan är 21. Ali slår igen luckan. Dagens jobb är klart – gå in i skjulet och sov i sängen. |
| 0:23 | struken | ali | Ali här. Jag har inte sovit. Inte på grund av AI:n. På grund av dig. Du bygger saker av sopor. Jag har en hel butik och bygger ingenting. Det ska ändras. Kanske. Troligen. |
| 0:23 | struken | bror | Mamma ringde mig fyra gånger förresten. Snyggt jobbat 😂 |
| 0:23 | skratt | bror | Mamma ringde mig fyra gånger förresten. |
| 0:30 | sak |  | (läget ändras) |
| 0:30 | brev | rolf | rolf:1 |
| 0:30 | klar |  | (läget ändras) |
| 0:37 | tanke | du | En hel kanot. Kvarnen skulle äta upp sig själv. |
| 0:37 | väntar | du | En hel kanot. Kvarnen skulle äta upp sig själv. |
| 0:37 | sak | du | En hel kanot. Kvarnen skulle äta upp sig själv. |
| 0:37 | notis | tanke | 💭 En hel kanot. Kvarnen skulle äta upp sig själv. |
| 0:37 | röst | du | En hel kanot. Kvarnen skulle äta upp sig själv. · REAKTION |
| 0:37 | väntar | rolf | Den funkar! Hä. Ta så mycke skräp du vill. /Rolf​ |
| 0:40 | klar | du | En hel kanot. Kvarnen skulle äta upp sig själv. |
| 0:41 | skratt | du | falsk tuta |
| 0:42 | tanke | du | Nyckeln ska sitta i låset på grinden. |
| 0:42 | väntar | du | Nyckeln ska sitta i låset på grinden. |
| 0:42 | tanke | du | Tratten är stor som en kaffekopp. Tunnan är stor som jag. |
| 0:42 | struken | du | Nyckeln ska sitta i låset på grinden. |
| 0:42 | väntar | du | Tratten är stor som en kaffekopp. Tunnan är stor som jag. |
| 0:43 | hjälp | kontroll | Klick: Klicka för att montera |
| 0:43 | tanke | du | Hård plast. Lilla kvarnen skulle explodera. Eller jag. |
| 0:43 | struken | du | Tratten är stor som en kaffekopp. Tunnan är stor som jag. |
| 0:43 | väntar | du | Hård plast. Lilla kvarnen skulle explodera. Eller jag. |
| 0:44 | monterat | du | byggsats:tippnyckel |
| 0:44 | händelse | monterat | sak=tippnyckel |
| 0:44 | scenInfo | du | Kameran sveper över tippen |
| 0:47 | brott | KLICK SOM INTE GÅR | "Klicka för att montera" syns men ett klick gör inte det just nu |
| 0:48 | tanke | du | …Det här räcker i hundra år. |
| 0:48 | väntar | du | …Det här räcker i hundra år. |
| 0:49 | sak | rolf | Den funkar! Hä. Ta så mycke skräp du vill. /Rolf​ |
| 0:49 | lapp | Brev från Rolf | Den funkar! Hä. Ta så mycke skräp du vill. /Rolf​ |
| 0:49 | röst | rolf | Den funkar! Hä. Ta så mycke skräp du vill. /Rolf​ · STORY |
| 0:49 | paket |  | ge |
| 0:49 | väntar |  | (läget ändras) |
| 0:50 | skratt | du | falsk tuta |
| 0:53 | klar | rolf | Den funkar! Hä. Ta så mycke skräp du vill. /Rolf​ |
| 0:53 | händelse | brevLast | id=rolftack:0 |

<details><summary>Botens handlingar dag 3</summary>

- 0:00 — dag 3 börjar — (58 kr)
- 0:07 popup: "FORTSÄTT" (58 kr)
- 0:37 gå till Rolfs postlåda (28 m) (58 kr)
- 0:42 panel: "Rolfs postlåda
Det här låg i l" (118 kr)
- 0:44 gå till sätt nyckeln i låset (3 m) (118 kr)

</details>
