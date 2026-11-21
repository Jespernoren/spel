# Simulering kapitel 1 – körning 1

*Gjord 2026-11-21 22:12 med `verktyg/sim-kapitel1.mjs` + `verktyg/sim-bot.js` (punkt AX). Boten går 4,5 m/s, läser 15 tecken/s, trampar, vevar, plockar, printar, köper och säljer via spelets egna funktioner. Tiderna är speltid.*

## Sammanfattning

| Dag | Minuter | Väntan | Prints (totalt) | Kr vid sömn | Bär | Trivsel |
|---|---|---|---|---|---|---|
| 1 | 8.6 | 2 % | 13 | 85 | 6 | 18 |
| 2 | 7.5 | 2 % | 24 | 832 | 10 | 39 |
| 3 | 0.0 | 0 % | 24 | 832 | 10 | 39 |

## Flaskhalskartan (EE)

| Dag | bara | mala | trampa | strom | skrivare | inkomst | Upplåst |
|---|---|---|---|---|---|---|---|
| 1 | 5 | 8 | 20 | 15 | 60 | 11 | grip (bara, 5:46), kruka (inkomst, 6:29) |
| 2 | 1 | 9 | 8 | 9 | 174 | 0 | kvarnmotor (mala, 3:11), rullstall (skrivare, 4:50), vindsnurra (trampa, 5:51), trim_skrivare (skrivare, 6:22) |
| 3 | 0 | 0 | 0 | 0 | 0 | 0 |  |

TIDIG: 0 · FAST: 0 · upplåst av reserven (målet väntade 3 min): 0

**SKRATT:** 18 roliga ögonblick på 16 min (11.2 per 10 min, mål minst 5)

**Köp:**

- dag 1 2:36 – gammalkvarn (30 kr)
- dag 1 6:11 – grip (50 kr)
- dag 1 6:37 – kruka (40 kr)
- dag 1 7:26 – sang (60 kr)
- dag 2 3:40 – kvarnmotor (50 kr)
- dag 2 6:30 – vindsnurra (133 kr)
- dag 2 7:04 – dorr (120 kr)

## Storykedjan (kvittens → varför → nytt mål)

| Dag | Tid | Id | Kvittens | Varför | Nytt mål | Tid till målet |
|---|---|---|---|---|---|---|
| 1 | 0:29 | lasta | Tung. Den har storebror aldrig burit så långt. |  | Skrivaren ställer jag mot skräpberget. Min första verkstad. | 0.7 s |
| 1 | 1:27 | valjModell | Den piper. Den GÖR något. |  | En nyckelring till, så länge storebrors rulle räcker. | 3.4 s |
| 1 | 1:32 | trampa | Klar! Ta ut den innan den ändrar sig. |  | En nyckelring till, så länge storebrors rulle räcker. | 0.5 s |
| 1 | 3:08 | flaska | Det blir tråd! Riktig plasttråd. |  | Min egen tråd. Nu printar jag en nyckelring av den. | 0.8 s |
| 1 | 6:58 | krukaD1 | En kruka. Mamma skulle bli så stolt. Hon får inte veta. |  | Ali gillar krukor. Han sa det själv. | 0.9 s |
| 1 | 8:20 | printSang | En säng. Jag printade en SÄNG. |  | Sängen ska in i skjulet. Sen sover jag. | 0.3 s |
| 2 | 6:54 | vindsnurra | Den snurrar! Långsamt. Men den snurrar. |  | Det drar från dörrhålet. En dörr kan jag printa. | 3.0 s |

## Hur länge nya mål väntade (från att förra målet blev klart till att det nya syntes i målrutan)

Snitt 1.8 s · max 12.7 s · över 4 s: 1 · över 8 s: 1 av 30

## Flaggor (24)

- **LUGN** dag 2 0:08: 0.0 s efter BÖRJA DAGEN: [lapp] "Första natten i en riktig säng. Jag printade den själv."
- **KROCK** dag 1 0:17: 1.7 s mellan [lapp] "Spikade ihop en skylt av bräder från skräpberget: Soptippsvä" och [notis] "💭 Storebrors skrivare står kvar på cykeln vid vägen. Den sk"
- **KROCK** dag 1 3:12: 0.7 s mellan [notis] "Kvarnen funkar. Soptippen är en gruva." och [notis] "💭 Min egen tråd. Nu printar jag en nyckelring av den."
- **KROCK** dag 2 1:06: 1.5 s mellan [lapp] "Sopbilen tippade en ny last. Allt det skräpet – och grinden " och [notis] "En stor bil tippade en ny last. Allt det skräpet – och grind"
- **RÖST AVBRUTEN** dag 1 4:26: ali: 4.3 s kvar ← du: Ali har något åt mig. Jag går över vägen
- **RÖST AVBRUTEN** dag 1 6:35: ali: 3.9 s kvar ← du: Ali vill ha krukor. Jag printar en blomk
- **SEN** dag 1 7:49: 75.3 s efter händelsen: ali: "Ali här. Jag såg Skräpgrip på avstånd. Ett streck blev lite snett. Mit"
- **SEN** dag 1 8:14: 17.7 s efter händelsen: notis:Storebrors skrivare: Slut på tråd – mal : "Storebrors skrivare: Slut på tråd – mal mer så fortsätter den"
- **SEN** dag 2 0:28: 18.1 s efter händelsen: notis:Första natten i en riktig säng. Jag prin: "Första natten i en riktig säng. Jag printade den själv."
- **SEN** dag 2 0:44: 41.7 s efter händelsen: kjelle: "Radio Tippen, Kjelle här. Skjulet vid tippen har fått generator. Vi ta"
- **SEN** dag 2 5:54: 110.9 s efter händelsen: ali: "Ali här. Ännu en ritning som blev på riktigt: Kvarnmotor. Semesterkass"
- **PAUS** dag 1 1:31: 0.0 s paus före "Den piper. Den GÖR något."
- **PAUS** dag 1 1:33: 0.0 s paus före "Klar! Ta ut den innan den ändrar sig."
- **PAUS** dag 1 3:09: 0.0 s paus före "Det blir tråd! Riktig plasttråd."
- **PAUS** dag 1 3:11: 0.0 s paus före "Kvarnen funkar. Soptippen är en gruva."
- **PAUS** dag 1 6:58: 0.6 s paus före "En kruka. Mamma skulle bli så stolt. Hon får inte "
- **PAUS** dag 2 4:30: 0.0 s paus före "Gården är STÄDAD, av mig, frivilligt. Mamma skulle"
- **PAUS** dag 2 6:46: 0.0 s paus före "🌬️ Vindsnurran ska upp på skjulets tak."
- **PAUS** dag 2 7:24: 0.0 s paus före "Klart för idag – sov när du vill."
- **PAUS** dag 2 7:27: 0.0 s paus före "Dörr på plats! Trivsel +8"
- **KLICK SOM INTE GÅR** dag 2 7:00: "Klicka för att montera" syns men ett klick gör inte det just nu
- **TEMPO** dag 1 8:33: dag 1 tog 8.6 min (mål 10–12)
- **TEMPO** dag 2 7:32: dag 2 tog 7.5 min (mål 10–15)
- **TEMPO** dag 3 0:00: dag 3 tog 0.0 min (mål 10–15)

Sidfel: inga

## Dag 1

| Tid | Källa | Vem | Text |
|---|---|---|---|
| 0:00 | MÅL |  | Lasta av skrivaren |
| 0:00 | MÅL |  | Lasta av skrivaren |
| 0:00 | väntar | du | Se så mycket skräp här är. Det är ju en guldgruva! |
| 0:01 | klar | bud | (tips) |
| 0:03 | sak | du | Se så mycket skräp här är. Det är ju en guldgruva! |
| 0:03 | röst | du | Se så mycket skräp här är. Det är ju en guldgruva! · STORY |
| 0:04 | väntar | info:info | ⏎ Enter – hoppa över |
| 0:08 | sak-del | du | Först borde jag spika upp en skylt, så att alla ser att jag bor HÄR. |
| 0:08 | röst | du | Först borde jag spika upp en skylt, så att alla ser att jag bor HÄR. · STORY |
| 0:14 | klar | du | Se så mycket skräp här är. Det är ju en guldgruva! |
| 0:15 | lapp | 📔 Dagbok | Spikade ihop en skylt av bräder från skräpberget: Soptippsvägen 1. Inte mycket för världen, men det är MITT. |
| 0:15 | dagbokrad | du | Spikade ihop en skylt av bräder från skräpberget: Soptippsvägen 1. Inte mycket för världen, men det är MITT. |
| 0:15 | väntar | notis:Spikade ihop en skylt av bräder från skr | Spikade ihop en skylt av bräder från skräpberget: Soptippsvägen 1. Inte mycket för världen, men det är MITT. |
| 0:15 | bekräftelse | du | Group |
| 0:15 | väntar | du | Storebrors skrivare står kvar på cykeln vid vägen. Den ska av. |
| 0:17 | sak | du | Storebrors skrivare står kvar på cykeln vid vägen. Den ska av. |
| 0:17 | målruta |  | Lasta av skrivaren |
| 0:17 | pil |  | Lasta av skrivaren |
| 0:17 | notis | tanke | 💭 Storebrors skrivare står kvar på cykeln vid vägen. Den ska av. |
| 0:17 | röst | du | Storebrors skrivare står kvar på cykeln vid vägen. Den ska av. · MÅL |
| 0:22 | klar | du | Storebrors skrivare står kvar på cykeln vid vägen. Den ska av. |
| 0:24 | sak | notis:Spikade ihop en skylt av bräder från skr | Spikade ihop en skylt av bräder från skräpberget: Soptippsvägen 1. Inte mycket för världen, men det är MITT. |
| 0:24 | notis | dagbok | Spikade ihop en skylt av bräder från skräpberget: Soptippsvägen 1. Inte mycket för världen, men det är MITT. |
| 0:27 | klar | notis:Spikade ihop en skylt av bräder från skr | Spikade ihop en skylt av bräder från skräpberget: Soptippsvägen 1. Inte mycket för världen, men det är MITT. |
| 0:29 | struken | info:info | ⏎ Enter – hoppa över |
| 0:29 | händelse | lastatAv | sak=skrivare |
| 0:29 | paket |  | sms |
| 0:29 | väntar | mamma | Hur kunde du bara gå? Är du ok? Svara när jag ringer! |
| 0:29 | händelse | malKlart | id=lasta del=Dag 1 – Kom igång nasta=stall |
| 0:29 | bekräftelse | du | plats |
| 0:29 | kvittens | du | Tung. Den har storebror aldrig burit så långt. |
| 0:29 | väntar | du | Tung. Den har storebror aldrig burit så långt. |
| 0:29 | väntar | du | Skrivaren ställer jag mot skräpberget. Min första verkstad. |
| 0:29 | MÅL |  | Ställ upp skrivaren |
| 0:29 | sak | du | Tung. Den har storebror aldrig burit så långt. |
| 0:29 | röst | du | Tung. Den har storebror aldrig burit så långt. · STORY |
| 0:29 | målruta |  | Ställ upp skrivaren |
| 0:32 | hjälp | kontroll | E: Ryggsäcken och kistan |
| 0:33 | klar | du | Tung. Den har storebror aldrig burit så långt. |
| 0:33 | sak | du | Skrivaren ställer jag mot skräpberget. Min första verkstad. |
| 0:33 | pil |  | Ställ upp skrivaren |
| 0:33 | notis | tanke | 💭 Skrivaren ställer jag mot skräpberget. Min första verkstad. |
| 0:33 | röst | du | Skrivaren ställer jag mot skräpberget. Min första verkstad. · MÅL |
| 0:34 | nick |  | nick:1 |
| 0:38 | klar | du | Skrivaren ställer jag mot skräpberget. Min första verkstad. |
| 0:43 | väntar | info:bra | 🖨️ Storebrors skrivare står på sin plats |
| 0:43 | händelse | placerat | sak=skrivareS |
| 0:43 | paket |  | tanke |
| 0:43 | tanke | du | Storebrors rulle. Den räcker inte länge. |
| 0:43 | väntar | du | Storebrors rulle. Den räcker inte länge. |
| 0:43 | duns | du | ställs ner |
| 0:43 | sak | info:bra | 🖨️ Storebrors skrivare står på sin plats |
| 0:43 | kvitto-visas | info:bra | 🖨️ Storebrors skrivare står på sin plats |
| 0:43 | toast | bra | 🖨️ Storebrors skrivare står på sin plats |
| 0:43 | händelse | malKlart | id=stall del=Dag 1 – Kom igång nasta=strom |
| 0:43 | bekräftelse | du | plats |
| 0:43 | struken | du | Storebrors rulle. Den räcker inte länge. |
| 0:43 | väntar | du | Skrivaren behöver ström. Hur fixar jag det här ute? |
| 0:43 | MÅL |  | Skrivaren behöver ström |
| 0:45 | klar | info:bra | 🖨️ Storebrors skrivare står på sin plats |
| 0:45 | målruta |  | Skrivaren behöver ström |
| 0:47 | kvittens-bock |  | ✓ Ställ upp skrivaren |
| 0:47 | sak | du | Skrivaren behöver ström. Hur fixar jag det här ute? |
| 0:47 | pil |  | Skrivaren behöver ström |
| 0:47 | notis | tanke | 💭 Skrivaren behöver ström. Hur fixar jag det här ute? |
| 0:47 | röst | du | Skrivaren behöver ström. Hur fixar jag det här ute? · MÅL |
| 0:48 | nick |  | nick:2 |
| 0:52 | klar | du | Skrivaren behöver ström. Hur fixar jag det här ute? |
| 1:08 | paket |  | tanke |
| 1:08 | tanke | du | Cykeln… och storebrors generator? |
| 1:08 | väntar | du | Cykeln… och storebrors generator? |
| 1:08 | sak | du | Cykeln… och storebrors generator? |
| 1:08 | kvitto-visas | du | Cykeln… och storebrors generator? |
| 1:08 | notis | tanke | 💭 Cykeln… och storebrors generator? |
| 1:08 | röst | du | Cykeln… och storebrors generator? · STORY |
| 1:08 | händelse | malKlart | id=strom del=Dag 1 – Kom igång nasta=bygg |
| 1:08 | bekräftelse | du | plats |
| 1:08 | väntar | du | Nu generatorn på cykeln. Den gör el när hjulet snurrar. |
| 1:08 | MÅL |  | Ställ cykel och generator |
| 1:10 | målruta |  | Ställ cykel och generator |
| 1:10 | klar | du | Cykeln… och storebrors generator? |
| 1:11 | händelse | placerat | sak=generator |
| 1:11 | duns | du | ställs ner |
| 1:12 | kvittens-bock |  | ✓ Skrivaren behöver ström |
| 1:14 | sak | du | Nu generatorn på cykeln. Den gör el när hjulet snurrar. |
| 1:14 | pil |  | Ställ cykel och generator |
| 1:14 | notis | tanke | 💭 Nu generatorn på cykeln. Den gör el när hjulet snurrar. |
| 1:14 | röst | du | Nu generatorn på cykeln. Den gör el när hjulet snurrar. · MÅL |
| 1:14 | ljud | utrustning | Cykeln i famnen |
| 1:14 | händelse | lyft | sak=cykel |
| 1:18 | klar | du | Nu generatorn på cykeln. Den gör el när hjulet snurrar. |
| 1:19 | paket |  | tanke |
| 1:19 | tanke | du | Cykeln ska stå vid skrivaren. |
| 1:19 | väntar | du | Cykeln ska stå vid skrivaren. |
| 1:23 | händelse | placerat | sak=cykel |
| 1:23 | duns | du | ställs ner |
| 1:23 | struken | du | Cykeln ska stå vid skrivaren. |
| 1:25 | händelse | ombyggd | sak=cykel |
| 1:25 | händelse | malKlart | id=bygg del=Dag 1 – Kom igång nasta=valjModell |
| 1:25 | bekräftelse | du | plats |
| 1:25 | väntar | du | Strömmen finns. Nu ska skrivaren veta vad den ska göra, sen trampar jag. |
| 1:25 | målruta |  | Välj vad skrivaren ska printa |
| 1:25 | MÅL |  | Välj vad skrivaren ska printa |
| 1:25 | sak | du | Strömmen finns. Nu ska skrivaren veta vad den ska göra, sen trampar jag. |
| 1:25 | pil |  | Välj vad skrivaren ska printa |
| 1:25 | notis | tanke | 💭 Strömmen finns. Nu ska skrivaren veta vad den ska göra, sen trampar jag. |
| 1:25 | röst | du | Strömmen finns. Nu ska skrivaren veta vad den ska göra, sen trampar jag. · MÅL |
| 1:27 | händelse | printStart | sak=nyckelring |
| 1:27 | händelse | malKlart | id=valjModell del=Dag 1 – Kom igång nasta=trampa |
| 1:27 | bekräftelse | du | plats |
| 1:27 | kvittens | du | Den piper. Den GÖR något. |
| 1:27 | väntar | du | Den piper. Den GÖR något. |
| 1:27 | väntar | du | Nu behöver den ström. Trampa. |
| 1:27 | MÅL |  | Trampa cykeln |
| 1:30 | målruta |  | Trampa cykeln |
| 1:31 | klar | du | Strömmen finns. Nu ska skrivaren veta vad den ska göra, sen trampar jag. |
| 1:31 | sak | du | Den piper. Den GÖR något. |
| 1:31 | röst | du | Den piper. Den GÖR något. · STORY |
| 1:32 | händelse | printKlar | sak=nyckelring n=1 |
| 1:32 | händelse | malKlart | id=trampa del=Dag 1 – Kom igång nasta=rullSlut |
| 1:32 | bekräftelse | du | plats |
| 1:32 | kvittens | du | Klar! Ta ut den innan den ändrar sig. |
| 1:32 | väntar | du | Klar! Ta ut den innan den ändrar sig. |
| 1:32 | väntar | du | En nyckelring till, så länge storebrors rulle räcker. |
| 1:33 | MÅL |  | En nyckelring till |
| 1:33 | klar | du | Den piper. Den GÖR något. |
| 1:33 | sak | du | Klar! Ta ut den innan den ändrar sig. |
| 1:33 | röst | du | Klar! Ta ut den innan den ändrar sig. · STORY |
| 1:33 | målruta |  | En nyckelring till |
| 1:34 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 1:34 | paket |  | sms |
| 1:34 | väntar | bror | VA FAN?! Fick du igång den?? Jag försökte i typ ett år. Den bara pep. 😳 |
| 1:34 | skratt | bror | VA FAN?! Fick du igång den?? Jag försökt |
| 1:34 | paket |  | sms → ge |
| 1:34 | väntar | bror | Sälj den till Ali, han med affären mitt emot. Han köper gamla grejer. Han köpte min gamla mopedhjälm för 20 spänn. |
| 1:34 | väntar |  | (läget ändras) |
| 1:34 | väntar | foto | Första nyckelringen |
| 1:34 | paket |  | tanke |
| 1:34 | tanke | du | Jag gjorde den här. Av skräp. Det här kan funka. |
| 1:34 | väntar | du | Jag gjorde den här. Av skräp. Det här kan funka. |
| 1:36 | klar | du | Klar! Ta ut den innan den ändrar sig. |
| 1:36 | struken | du | Nu behöver den ström. Trampa. |
| 1:36 | sak | du | En nyckelring till, så länge storebrors rulle räcker. |
| 1:36 | pil |  | En nyckelring till |
| 1:36 | notis | tanke | 💭 En nyckelring till, så länge storebrors rulle räcker. |
| 1:36 | röst | du | En nyckelring till, så länge storebrors rulle räcker. · MÅL |
| 1:41 | klar | du | En nyckelring till, så länge storebrors rulle räcker. |
| 1:43 | sak | foto | Första nyckelringen |
| 1:43 | foto | du | Första nyckelringen |
| 1:46 | klar | foto | Första nyckelringen |
| 1:48 | sak |  | (läget ändras) |
| 1:48 | klar |  | (läget ändras) |
| 1:48 | händelse | printStart | sak=nyckelring |
| 1:52 | sak | du | Jag gjorde den här. Av skräp. Det här kan funka. |
| 1:52 | notis | tanke | 💭 Jag gjorde den här. Av skräp. Det här kan funka. |
| 1:52 | röst | du | Jag gjorde den här. Av skräp. Det här kan funka. · STORY |
| 1:56 | klar | du | Jag gjorde den här. Av skräp. Det här kan funka. |
| 1:59 | toast | guld | Nyckelring är klar – ta ut den |
| 1:59 | väntar | notis:Storebrors skrivare: Nyckelring är klar  | Storebrors skrivare: Nyckelring är klar – ta ut den |
| 1:59 | händelse | printKlar | sak=nyckelring n=2 |
| 1:59 | paket |  | tanke |
| 1:59 | tanke | du | Slut på storebrors rulle. Och här ligger ju plast överallt. Om jag bara kunde göra tråd av skräpet… Affären mitt emot kanske har något. |
| 1:59 | väntar | du | Slut på storebrors rulle. Och här ligger ju plast överallt. Om jag bara kunde göra tråd av skräpet… Affären mitt emot kanske har något. |
| 1:59 | händelse | malKlart | id=rullSlut del=Dag 1 – Kom igång nasta=saljTva |
| 1:59 | bekräftelse | du | plats |
| 1:59 | MÅL |  | Sälj nyckelringarna |
| 1:59 | sak | du | Slut på storebrors rulle. Och här ligger ju plast överallt. Om jag bara kunde göra tråd av skräpet… Affären mitt emot kanske har något. |
| 1:59 | kvitto-visas | du | Slut på storebrors rulle. Och här ligger ju plast överallt. Om jag bara kunde göra tråd av skräpet… Affären mitt emot kanske har något. |
| 1:59 | notis | tanke | 💭 Slut på storebrors rulle. Och här ligger ju plast överallt. Om jag bara kunde göra tråd av skräpet… Affären mitt emot kanske har något. |
| 1:59 | röst | du | Slut på storebrors rulle. Och här ligger ju plast överallt. Om jag bara kunde göra tråd av skräpet… Affären mitt emot kanske har något. · STORY |
| 2:02 | målruta |  | Sälj nyckelringarna |
| 2:03 | kvittens-bock |  | ✓ En nyckelring till |
| 2:11 | klar | du | Slut på storebrors rulle. Och här ligger ju plast överallt. Om jag bara kunde göra tråd av skräpet… Affären mitt emot kanske har något. |
| 2:11 | sak | du | (nytt mål i rutan) |
| 2:11 | pil |  | Sälj nyckelringarna |
| 2:11 | klar | du | (nytt mål i rutan) |
| 2:12 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 2:18 | struken | ali | Pappas gamla köttkvarn. Den har malt allt utom kött. Trettio kronor, så är den din. |
| 2:18 | händelse | dialog | id=aliForsta |
| 2:18 | röst | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. · STORY |
| 2:18 | butiksbubbla | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 2:20 | händelse | salt | sak=nyckelring n=2 |
| 2:20 | aliSalt | ali | 30 |
| 2:20 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 2:20 | händelse | dialog | id=aliKvarnErbjud |
| 2:20 | butiksbubbla | ali | Pappas gamla köttkvarn. Den har malt allt utom kött. Trettio kronor, så är den din. |
| 2:21 | väntar | ali | Pappas gamla köttkvarn. Den har malt allt utom kött. Trettio kronor, så är den din. |
| 2:21 | händelse | malKlart | id=saljTva del=Dag 1 – Kom igång nasta=aliKvarn |
| 2:21 | bekräftelse | du | plats |
| 2:21 | väntar | du | Ali har en gammal kvarn. Den gör tråd av skräp. |
| 2:21 | MÅL |  | Köp kvarnen |
| 2:22 | sak | du | Ali har en gammal kvarn. Den gör tråd av skräp. |
| 2:22 | målruta |  | Köp kvarnen |
| 2:22 | pil |  | Köp kvarnen |
| 2:22 | notis | tanke | 💭 Ali har en gammal kvarn. Den gör tråd av skräp. |
| 2:22 | röst | du | Ali har en gammal kvarn. Den gör tråd av skräp. · MÅL |
| 2:25 | kvittens-bock |  | ✓ Sälj nyckelringarna |
| 2:26 | klar | du | Ali har en gammal kvarn. Den gör tråd av skräp. |
| 2:28 | struken | bror | Sälj den till Ali, han med affären mitt emot. Han köper gamla grejer. Han köpte min gamla mopedhjälm för 20 spänn. |
| 2:28 | struken | notis:Storebrors skrivare: Nyckelring är klar  | Storebrors skrivare: Nyckelring är klar – ta ut den |
| 2:28 | sak | ali | Pappas gamla köttkvarn. Den har malt allt utom kött. Trettio kronor, så är den din. |
| 2:28 | röst | ali | Pappas gamla köttkvarn. Den har malt allt utom kött. Trettio kronor, så är den din. · STORY |
| 2:34 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 2:34 | struken | ali | Pappas gamla köttkvarn. Den har malt allt utom kött. Trettio kronor, så är den din. |
| 2:35 | klar | ali | Pappas gamla köttkvarn. Den har malt allt utom kött. Trettio kronor, så är den din. |
| 2:35 | händelse | kopt | sak=gammalkvarn |
| 2:35 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 2:35 | händelse | dialog | id=aliKvarnKopt |
| 2:35 | röst | ali | Den är din. Pappa hade blivit glad. Han trodde aldrig att nån skulle vilja ha den. · STORY |
| 2:35 | butiksbubbla | ali | Den är din. Pappa hade blivit glad. Han trodde aldrig att nån skulle vilja ha den. |
| 2:37 | händelse | malKlart | id=aliKvarn del=Dag 1 – Kom igång nasta=kvarn |
| 2:37 | bekräftelse | du | plats |
| 2:37 | väntar | du | Kvarnen ska stå vid skrivaren, närmast skräpberget. |
| 2:37 | målruta |  | Ställ kvarnen |
| 2:37 | MÅL |  | Ställ kvarnen |
| 2:39 | sak | du | Kvarnen ska stå vid skrivaren, närmast skräpberget. |
| 2:39 | pil |  | Ställ kvarnen |
| 2:39 | notis | tanke | 💭 Kvarnen ska stå vid skrivaren, närmast skräpberget. |
| 2:39 | röst | du | Kvarnen ska stå vid skrivaren, närmast skräpberget. · MÅL |
| 2:39 | nick |  | nick:9 |
| 2:41 | kvittens-bock |  | ✓ Köp kvarnen |
| 2:43 | klar | du | Kvarnen ska stå vid skrivaren, närmast skräpberget. |
| 2:45 | struken | bror | VA FAN?! Fick du igång den?? Jag försökte i typ ett år. Den bara pep. 😳 |
| 2:45 | skratt | bror | VA FAN?! Fick du igång den?? Jag försökt |
| 2:51 | händelse | placerat | sak=kvarnen |
| 2:51 | duns | du | ställs ner |
| 2:51 | händelse | malKlart | id=kvarn del=Dag 1 – Kom igång nasta=flaska |
| 2:51 | bekräftelse | du | plats |
| 2:51 | väntar | du | Skräp i kvarnen, sen vevar jag. Då blir det tråd. |
| 2:51 | målruta |  | Gör egen tråd |
| 2:51 | MÅL |  | Gör egen tråd |
| 2:51 | hjälp | kontroll | Klicka och håll: Veva kvarnen |
| 2:51 | sak | du | Skräp i kvarnen, sen vevar jag. Då blir det tråd. |
| 2:51 | pil |  | Gör egen tråd |
| 2:51 | notis | tanke | 💭 Skräp i kvarnen, sen vevar jag. Då blir det tråd. |
| 2:51 | röst | du | Skräp i kvarnen, sen vevar jag. Då blir det tråd. · MÅL |
| 2:52 | nick |  | nick:10 |
| 2:55 | kvittens-bock |  | ✓ Ställ kvarnen |
| 2:56 | klar | du | Skräp i kvarnen, sen vevar jag. Då blir det tråd. |
| 3:07 | väntar | info:bra | 3 st i tratten – veva nu! |
| 3:07 | sak | info:bra | 3 st i tratten – veva nu! |
| 3:07 | kvitto-visas | info:bra | 3 st i tratten – veva nu! |
| 3:07 | toast | bra | 3 st i tratten – veva nu! |
| 3:08 | händelse | malKlart | id=flaska del=Dag 1 – Kom igång nasta=egenPrint |
| 3:08 | bekräftelse | du | plats |
| 3:08 | kvittens | du | Det blir tråd! Riktig plasttråd. |
| 3:08 | väntar | du | Det blir tråd! Riktig plasttråd. |
| 3:08 | väntar | du | Kvarnen funkar. Soptippen är en gruva. |
| 3:08 | väntar | du | Min egen tråd. Nu printar jag en nyckelring av den. |
| 3:08 | MÅL |  | Printa med egen tråd |
| 3:09 | klar | info:bra | 3 st i tratten – veva nu! |
| 3:09 | sak | du | Det blir tråd! Riktig plasttråd. |
| 3:09 | röst | du | Det blir tråd! Riktig plasttråd. · STORY |
| 3:10 | målruta |  | Printa med egen tråd |
| 3:11 | klar | du | Det blir tråd! Riktig plasttråd. |
| 3:11 | sak | du | Kvarnen funkar. Soptippen är en gruva. |
| 3:11 | kvitto-visas | du | Kvarnen funkar. Soptippen är en gruva. |
| 3:11 | lapp | 📔 Dagbok | Kvarnen funkar. Soptippen är en gruva. |
| 3:11 | dagbokrad | du | Kvarnen funkar. Soptippen är en gruva. |
| 3:11 | notis | dagbok | Kvarnen funkar. Soptippen är en gruva. |
| 3:12 | klar | du | Kvarnen funkar. Soptippen är en gruva. |
| 3:12 | sak | du | Min egen tråd. Nu printar jag en nyckelring av den. |
| 3:12 | pil |  | Printa med egen tråd |
| 3:12 | notis | tanke | 💭 Min egen tråd. Nu printar jag en nyckelring av den. |
| 3:12 | röst | du | Min egen tråd. Nu printar jag en nyckelring av den. · MÅL |
| 3:16 | klar | du | Min egen tråd. Nu printar jag en nyckelring av den. |
| 3:21 | händelse | printStart | sak=nyckelring |
| 3:21 | toast | bra | 🔗 Slangen kopplad |
| 3:26 | toast | guld | ✅ |
| 3:26 | händelse | printKlar | sak=nyckelring n=3 |
| 3:26 | paket |  | tanke |
| 3:26 | tanke | du | En nyckelring av en gammal schampoflaska. Den luktar fortfarande päron. |
| 3:26 | väntar | du | En nyckelring av en gammal schampoflaska. Den luktar fortfarande päron. |
| 3:26 | skratt | du | egen tråd |
| 3:26 | händelse | malKlart | id=egenPrint del=Dag 1 – Kom igång nasta=salj |
| 3:26 | bekräftelse | du | plats |
| 3:26 | struken | du | En nyckelring av en gammal schampoflaska. Den luktar fortfarande päron. |
| 3:26 | väntar | du | Ali köper nog den här också. |
| 3:26 | MÅL |  | Sälj hos Ali |
| 3:26 | målruta |  | Sälj hos Ali |
| 3:26 | sak | du | Ali köper nog den här också. |
| 3:26 | pil |  | Sälj hos Ali |
| 3:26 | notis | tanke | 💭 Ali köper nog den här också. |
| 3:26 | röst | du | Ali köper nog den här också. · MÅL |
| 3:26 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 3:26 | nick |  | nick:12 |
| 3:28 | klar | du | Ali köper nog den här också. |
| 3:30 | kvittens-bock |  | ✓ Printa med egen tråd |
| 3:32 | händelse | printStart | sak=nyckelring |
| 3:33 | toast | guld | ✅ |
| 3:33 | händelse | printKlar | sak=nyckelring n=4 |
| 3:34 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 3:36 | händelse | printStart | sak=nyckelring |
| 3:37 | toast | guld | ✅ |
| 3:37 | händelse | printKlar | sak=nyckelring n=5 |
| 3:37 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 3:41 | sak | mamma | Hur kunde du bara gå? Är du ok? Svara när jag ringer! |
| 3:41 | sms | mamma | Hur kunde du bara gå? Är du ok? Svara när jag ringer! |
| 3:41 | sms-bubbla | mamma | Hur kunde du bara gå? Är du ok? Svara när jag ringer! |
| 3:41 | röst | mamma | Hur kunde du bara gå? Är du ok? Svara när jag ringer! · STORY |
| 3:45 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 3:45 | klar | mamma | Hur kunde du bara gå? Är du ok? Svara när jag ringer! |
| 3:46 | händelse | salt | sak=nyckelring n=3 |
| 3:46 | paket |  | ali → ge |
| 3:46 | väntar | ali | Du får bonus! 25 kr extra. Kvalitet. Nästan. |
| 3:46 | väntar |  | (läget ändras) |
| 3:46 | aliSalt | ali | 45 |
| 3:46 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 3:46 | händelse | dialog | id=aliNyckelIgen |
| 3:46 | röst | ali | Nyckelringar igen? Folk tappar sina nycklar hela tiden. · STORY |
| 3:46 | butiksbubbla | ali | Nyckelringar igen? Folk tappar sina nycklar hela tiden. |
| 3:48 | händelse | malKlart | id=salj del=Dag 1 – Kom igång nasta=powerbank |
| 3:48 | bekräftelse | du | plats |
| 3:48 | paket |  | sms → ge |
| 3:48 | väntar | ali | Ali här. Glömde en sak. Kom tillbaka, jag har nåt åt dig. |
| 3:48 | väntar |  | (läget ändras) |
| 3:48 | MÅL |  | Gå till Ali |
| 3:49 | sak | ali | Du får bonus! 25 kr extra. Kvalitet. Nästan. |
| 3:49 | notis |  | Ali: ”Du får bonus! 25 kr extra. Kvalitet. Nästan.” |
| 3:49 | röst | ali | Du får bonus! 25 kr extra. Kvalitet. Nästan. · REAKTION |
| 3:49 | väntar | kjelle | God morgon, det är Kjelle på Radio Tippen! Det har flyttat in någon i det gamla skjulet. Med en cykel och en skrivare. Spännande, Gunnar. |
| 3:49 | radio | kjelle | God morgon, det är Kjelle på Radio Tippen! Det har flyttat in någon i det gamla skjulet. Med en cykel och en skrivare. Spännande, Gunnar. |
| 3:49 | skratt | du | Radio-Kjelle |
| 3:51 | målruta |  | Gå till Ali |
| 3:51 | hjälp | kontroll | Tab: Dina sms och dagboken |
| 3:52 | kvittens-bock |  | ✓ Sälj hos Ali |
| 3:52 | klar | ali | Du får bonus! 25 kr extra. Kvalitet. Nästan. |
| 3:54 | sak | du | (nytt mål i rutan) |
| 3:54 | pil |  | Gå till Ali |
| 3:55 | klar | du | (nytt mål i rutan) |
| 3:57 | sak |  | (läget ändras) |
| 3:57 | klar |  | (läget ändras) |
| 3:57 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 4:03 | sak | kjelle | God morgon, det är Kjelle på Radio Tippen! Det har flyttat in någon i det gamla skjulet. Med en cykel och en skrivare. Spännande, Gunnar. |
| 4:03 | notis |  | 📻 Radio Tippen: God morgon, det är Kjelle på Radio Tippen! Det har flyttat in någon i det gamla skjulet. Med en cykel och en skrivare. Spännande, Gunnar. |
| 4:03 | röst | kjelle | God morgon, det är Kjelle på Radio Tippen! Det har flyttat in någon i det gamla skjulet. Med en cykel och en skrivare. Spännande, Gunnar. · REAKTION |
| 4:14 | tanke | du | Vem är Gunnar? |
| 4:14 | väntar | du | Vem är Gunnar? |
| 4:14 | klar | kjelle | God morgon, det är Kjelle på Radio Tippen! Det har flyttat in någon i det gamla skjulet. Med en cykel och en skrivare. Spännande, Gunnar. |
| 4:15 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 4:21 | sak |  | (läget ändras) |
| 4:22 | klar |  | (läget ändras) |
| 4:23 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 4:26 | sak | ali | Ali här. Glömde en sak. Kom tillbaka, jag har nåt åt dig. |
| 4:26 | sms | ali | Ali här. Glömde en sak. Kom tillbaka, jag har nåt åt dig. |
| 4:26 | händelse | dialog | id=aliPbKom |
| 4:26 | sms-bubbla | ali | Ali här. Glömde en sak. Kom tillbaka, jag har nåt åt dig. |
| 4:26 | röst | ali | Ali här. Glömde en sak. Kom tillbaka, jag har nåt åt dig. · STORY |
| 4:26 | röst | du | Ali har något åt mig. Jag går över vägen till affären. · STORY |
| 4:26 | röst-avbruten | ali | 4.3 s kvar ← du: Ali har något åt mig. Jag går över vägen |
| 4:30 | klar | ali | Ali här. Glömde en sak. Kom tillbaka, jag har nåt åt dig. |
| 4:33 | paket | ali | ali → ge |
| 4:33 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 4:33 | händelse | dialog | id=aliPowerbank |
| 4:33 | röst | ali | Jag såg dig cykla. Det ser jobbigt ut. Ta den här. Bra kunder får bonus. · STORY |
| 4:33 | butiksbubbla | ali | Jag såg dig cykla. Det ser jobbigt ut. Ta den här. Bra kunder får bonus. |
| 4:43 | paket |  | tanke |
| 4:43 | tanke | du | Powerbanken ska sitta på cykeln. |
| 4:43 | väntar | du | Powerbanken ska sitta på cykeln. |
| 4:45 | skratt | du | powerbanken monterad |
| 4:45 | paket |  | tanke |
| 4:45 | tanke | du | Nu sparas lite ström. En nyckelring, typ. Framtiden är här, och den sitter fast med eltejp. |
| 4:45 | väntar | du | Nu sparas lite ström. En nyckelring, typ. Framtiden är här, och den sitter fast med eltejp. |
| 4:45 | monterat | du | byggsats:powerbank |
| 4:45 | händelse | monterat | sak=powerbank |
| 4:45 | sak | du | Nu sparas lite ström. En nyckelring, typ. Framtiden är här, och den sitter fast med eltejp. |
| 4:45 | kvitto-visas | du | Nu sparas lite ström. En nyckelring, typ. Framtiden är här, och den sitter fast med eltejp. |
| 4:45 | notis | tanke | 💭 Nu sparas lite ström. En nyckelring, typ. Framtiden är här, och den sitter fast med eltejp. |
| 4:45 | röst | du | Nu sparas lite ström. En nyckelring, typ. Framtiden är här, och den sitter fast med eltejp. · REAKTION |
| 4:45 | händelse | malKlart | id=powerbank del=Dag 1 – Kom igång nasta=kopGrip |
| 4:45 | bekräftelse | du | plats |
| 4:45 | paket |  | lapp |
| 4:45 | lapp-kö | 🧺 Ali | Ali här. Nyckelringen sålde direkt. Jag ville bli ingenjör en gång. Nu har jag låtit en AI rita en skräpgrip. Kom och titta. |
| 4:45 | väntar | ali | Ali här. Nyckelringen sålde direkt. Jag ville bli ingenjör en gång. Nu har jag låtit en AI rita en skräpgrip. Kom och titta. |
| 4:45 | MÅL |  | Plocka skräp och mal det |
| 4:47 | struken | du | Vem är Gunnar? |
| 4:47 | målruta |  | Plocka skräp och mal det |
| 4:49 | kvittens-bock |  | ✓ Gå till Ali |
| 4:52 | klar | du | Nu sparas lite ström. En nyckelring, typ. Framtiden är här, och den sitter fast med eltejp. |
| 4:53 | sak | du | (nytt mål i rutan) |
| 4:53 | pil |  | Plocka skräp och mal det |
| 4:53 | klar | du | (nytt mål i rutan) |
| 4:53 | nick |  | nick:14 |
| 4:55 | struken | du | Powerbanken ska sitta på cykeln. |
| 4:57 | händelse | printStart | sak=nyckelring |
| 4:58 | toast | fel | Ingen ström – trampa cykeln |
| 4:58 | väntar | notis:Storebrors skrivare: Ingen ström – tramp | Storebrors skrivare: Ingen ström – trampa cykeln |
| 4:59 | toast | guld | ✅ |
| 4:59 | händelse | printKlar | sak=nyckelring n=6 |
| 4:59 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 5:00 | sak | notis:Storebrors skrivare: Ingen ström – tramp | Storebrors skrivare: Ingen ström – trampa cykeln |
| 5:00 | notis | fel | Storebrors skrivare: Ingen ström – trampa cykeln |
| 5:02 | händelse | printStart | sak=nyckelring |
| 5:03 | toast | guld | ✅ |
| 5:03 | händelse | printKlar | sak=nyckelring n=7 |
| 5:03 | klar | notis:Storebrors skrivare: Ingen ström – tramp | Storebrors skrivare: Ingen ström – trampa cykeln |
| 5:13 | sak | ali | Ali här. Nyckelringen sålde direkt. Jag ville bli ingenjör en gång. Nu har jag låtit en AI rita en skräpgrip. Kom och titta. |
| 5:13 | sms | ali | Ali här. Nyckelringen sålde direkt. Jag ville bli ingenjör en gång. Nu har jag låtit en AI rita en skräpgrip. Kom och titta. |
| 5:13 | händelse | dialog | id=aliGripSms |
| 5:13 | sms-bubbla | ali | Ali här. Nyckelringen sålde direkt. Jag ville bli ingenjör en gång. Nu har jag låtit en AI rita en skräpgrip. Kom och titta. |
| 5:13 | röst | ali | Ali här. Nyckelringen sålde direkt. Jag ville bli ingenjör en gång. Nu har jag låtit en AI rita en skräpgrip. Kom och titta. · STORY |
| 5:13 | väntar | du | Med en skräpgrip slipper jag böja mig. Ali har en ritning. |
| 5:14 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 5:16 | händelse | printStart | sak=nyckelring |
| 5:17 | toast | guld | ✅ |
| 5:17 | händelse | printKlar | sak=nyckelring n=8 |
| 5:18 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 5:20 | paket |  | tanke |
| 5:20 | tanke | du | Femtio kronor. Nu har jag råd med gripen. |
| 5:20 | väntar | du | Femtio kronor. Nu har jag råd med gripen. |
| 5:23 | klar | ali | Ali här. Nyckelringen sålde direkt. Jag ville bli ingenjör en gång. Nu har jag låtit en AI rita en skräpgrip. Kom och titta. |
| 5:24 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 5:25 | händelse | salt | sak=nyckelring n=1 |
| 5:25 | aliSalt | ali | 15 |
| 5:25 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 5:26 | händelse | salt | sak=nyckelring n=1 |
| 5:26 | aliSalt | ali | 15 |
| 5:26 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 5:26 | händelse | salt | sak=nyckelring n=1 |
| 5:26 | aliSalt | ali | 15 |
| 5:26 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 5:31 | sak | du | Med en skräpgrip slipper jag böja mig. Ali har en ritning. |
| 5:31 | röst | du | Med en skräpgrip slipper jag böja mig. Ali har en ritning. · STORY |
| 5:33 | händelse | printStart | sak=nyckelring |
| 5:34 | toast | guld | ✅ |
| 5:34 | händelse | printKlar | sak=nyckelring n=9 |
| 5:36 | klar | du | Med en skräpgrip slipper jag böja mig. Ali har en ritning. |
| 5:42 | struken | du | Femtio kronor. Nu har jag råd med gripen. |
| 5:46 | upplåst | bara | grip |
| 5:46 | brott | UPPLÅST | grip (bara 3 av 3) |
| 5:46 | händelse | upplast | id=grip flask=bara |
| 5:46 | paket |  | tanke |
| 5:46 | tanke | du | Ett skräp i taget. Jag springer ihjäl mig. |
| 5:46 | väntar | du | Ett skräp i taget. Jag springer ihjäl mig. |
| 5:46 | sak | du | Ett skräp i taget. Jag springer ihjäl mig. |
| 5:46 | notis | tanke | 💭 Ett skräp i taget. Jag springer ihjäl mig. |
| 5:46 | röst | du | Ett skräp i taget. Jag springer ihjäl mig. · STORY |
| 5:49 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 5:50 | klar | du | Ett skräp i taget. Jag springer ihjäl mig. |
| 5:51 | händelse | printStart | sak=nyckelring |
| 5:52 | toast | guld | ✅ |
| 5:52 | händelse | printKlar | sak=nyckelring n=10 |
| 5:53 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 5:55 | händelse | printStart | sak=nyckelring |
| 5:58 | toast | guld | ✅ |
| 5:58 | händelse | printKlar | sak=nyckelring n=11 |
| 5:58 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 6:04 | väntar | bud | (tips) |
| 6:04 | sak | bud | (tips) |
| 6:04 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 6:04 | röst | du | Jag har pengar nu. Hos Ali kan jag köpa uppgraderingar – bära mer eller printa snabbare. · MÅL |
| 6:05 | klar | bud | (tips) |
| 6:05 | händelse | salt | sak=nyckelring n=1 |
| 6:05 | aliSalt | ali | 15 |
| 6:05 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 6:05 | händelse | salt | sak=nyckelring n=1 |
| 6:05 | aliSalt | ali | 15 |
| 6:05 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 6:06 | händelse | salt | sak=nyckelring n=1 |
| 6:06 | aliSalt | ali | 15 |
| 6:06 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 6:08 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 6:10 | struken | info:guld | 3D-modell köpt – printa skräpgrip |
| 6:10 | händelse | kopt | sak=grip |
| 6:10 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 6:10 | händelse | dialog | id=aliForstaRitning |
| 6:10 | röst | ali | Bra val. Ritningen räcker till en skräpgrip. · STORY |
| 6:10 | butiksbubbla | ali | Bra val. Ritningen räcker till en skräpgrip. |
| 6:11 | händelse | malKlart | id=kopGrip del=Dag 1 – Kom igång nasta=printGrip |
| 6:11 | bekräftelse | du | plats |
| 6:11 | väntar | du | Min första 3D-modell! Jag printar inte bara saker – jag printar maskiner. |
| 6:11 | MÅL |  | Printa skräpgripen |
| 6:12 | sak | du | Min första 3D-modell! Jag printar inte bara saker – jag printar maskiner. |
| 6:12 | kvitto-visas | du | Min första 3D-modell! Jag printar inte bara saker – jag printar maskiner. |
| 6:12 | lapp | 📔 Dagbok | Min första 3D-modell! Jag printar inte bara saker – jag printar maskiner. |
| 6:12 | dagbokrad | du | Min första 3D-modell! Jag printar inte bara saker – jag printar maskiner. |
| 6:12 | notis | dagbok | Min första 3D-modell! Jag printar inte bara saker – jag printar maskiner. |
| 6:12 | klar | du | Min första 3D-modell! Jag printar inte bara saker – jag printar maskiner. |
| 6:12 | målruta |  | Printa skräpgripen |
| 6:13 | sak | du | (nytt mål i rutan) |
| 6:13 | pil |  | Printa skräpgripen |
| 6:13 | klar | du | (nytt mål i rutan) |
| 6:13 | nick |  | nick:15 |
| 6:21 | händelse | printStart | sak=byggsats:grip |
| 6:24 | händelse | printKlar | sak=byggsats:grip n=1 |
| 6:24 | toast | guld | ✅ |
| 6:24 | väntar | info:guld | Skräpgrip ska jag ha på mig. |
| 6:24 | händelse | tagitUrPrint | sak=byggsats:grip n=1 |
| 6:24 | paket |  | sms |
| 6:24 | väntar | ali | Ali här. Jag såg Skräpgrip på avstånd. Ett streck blev lite snett. Mitt fel. Vackert ändå. |
| 6:24 | sak | info:guld | Skräpgrip ska jag ha på mig. |
| 6:24 | kvitto-visas | info:guld | Skräpgrip ska jag ha på mig. |
| 6:24 | toast | guld | Skräpgrip ska jag ha på mig. |
| 6:26 | klar | info:guld | Skräpgrip ska jag ha på mig. |
| 6:28 | hjälp | kontroll | Klick: Klicka för att ta på dig den |
| 6:29 | väntar | info:guld | 🦾 Skräpgripen sitter! Jag bär 6, siktar lättare och plockar när jag går nära. |
| 6:29 | tog på | du | byggsats:grip |
| 6:29 | händelse | monterat | sak=grip |
| 6:29 | sak | info:guld | 🦾 Skräpgripen sitter! Jag bär 6, siktar lättare och plockar när jag går nära. |
| 6:29 | kvitto-visas | info:guld | 🦾 Skräpgripen sitter! Jag bär 6, siktar lättare och plockar när jag går nära. |
| 6:29 | toast | guld | 🦾 Skräpgripen sitter! Jag bär 6, siktar lättare och plockar när jag går nära. |
| 6:29 | händelse | malKlart | id=printGrip del=Dag 1 – Kom igång nasta=krukaD1 |
| 6:29 | bekräftelse | du | plats |
| 6:29 | MÅL |  | Printa och sälj nyckelringar |
| 6:29 | upplåst | inkomst | kruka |
| 6:29 | brott | UPPLÅST | kruka (inkomst 11 av 6) |
| 6:29 | händelse | upplast | id=kruka flask=inkomst |
| 6:29 | paket |  | tanke → sms |
| 6:29 | tanke | du | Nyckelringar, nyckelringar. Ali kan inte vilja ha fler. |
| 6:29 | väntar | du | Nyckelringar, nyckelringar. Ali kan inte vilja ha fler. |
| 6:29 | väntar | ali | Prova en kruka. Folk köper krukor. Ingen vet varför. |
| 6:29 | skratt | ali | Prova en kruka. Folk köper krukor. Ingen |
| 6:31 | klar | info:guld | 🦾 Skräpgripen sitter! Jag bär 6, siktar lättare och plockar när jag går nära. |
| 6:31 | målruta |  | Köp krukreceptet |
| 6:33 | kvittens-bock |  | ✓ Printa skräpgripen |
| 6:33 | sak | du | (nytt mål i rutan) |
| 6:33 | pil |  | Köp krukreceptet |
| 6:33 | klar | du | (nytt mål i rutan) |
| 6:33 | nick |  | nick:16 |
| 6:34 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 6:35 | sak | ali | Prova en kruka. Folk köper krukor. Ingen vet varför. |
| 6:35 | skratt | ali | Prova en kruka. Folk köper krukor. Ingen |
| 6:35 | sms | ali | Prova en kruka. Folk köper krukor. Ingen vet varför. |
| 6:35 | skratt | ali | Prova en kruka. Folk köper krukor. Ingen |
| 6:35 | händelse | dialog | id=aliKrukaSms |
| 6:35 | sms-bubbla | ali | Prova en kruka. Folk köper krukor. Ingen vet varför. |
| 6:35 | skratt | ali | Prova en kruka. Folk köper krukor. Ingen |
| 6:35 | röst | ali | Prova en kruka. Folk köper krukor. Ingen vet varför. · STORY |
| 6:35 | röst | du | Ali vill ha krukor. Jag printar en blomkruka. · STORY |
| 6:35 | röst-avbruten | ali | 3.9 s kvar ← du: Ali vill ha krukor. Jag printar en blomk |
| 6:36 | händelse | kopt | sak=kruka |
| 6:36 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 6:36 | händelse | dialog | id=aliKrukaRecept |
| 6:36 | butiksbubbla | ali | Blomkruka? Bra val. Folk köper sånt. Jag vet inte varför. |
| 6:37 | väntar | ali | Bra val. Folk köper sånt. Jag vet inte varför. |
| 6:39 | klar | ali | Prova en kruka. Folk köper krukor. Ingen vet varför. |
| 6:39 | skratt | ali | Prova en kruka. Folk köper krukor. Ingen |
| 6:41 | sak | ali | Bra val. Folk köper sånt. Jag vet inte varför. |
| 6:41 | röst | ali | Bra val. Folk köper sånt. Jag vet inte varför. · STORY |
| 6:45 | klar | ali | Bra val. Folk köper sånt. Jag vet inte varför. |
| 6:53 | sak | du | Nyckelringar, nyckelringar. Ali kan inte vilja ha fler. |
| 6:53 | notis | tanke | 💭 Nyckelringar, nyckelringar. Ali kan inte vilja ha fler. |
| 6:53 | röst | du | Nyckelringar, nyckelringar. Ali kan inte vilja ha fler. · STORY |
| 6:54 | händelse | printStart | sak=kruka |
| 6:56 | toast | fel | Ingen ström – trampa cykeln |
| 6:58 | klar | du | Nyckelringar, nyckelringar. Ali kan inte vilja ha fler. |
| 6:58 | toast | guld | ✅ |
| 6:58 | händelse | printKlar | sak=kruka n=1 |
| 6:58 | händelse | malKlart | id=krukaD1 del=Dag 1 – Kom igång nasta=saljKruka |
| 6:58 | bekräftelse | du | plats |
| 6:58 | kvittens | du | En kruka. Mamma skulle bli så stolt. Hon får inte veta. |
| 6:58 | väntar | du | En kruka. Mamma skulle bli så stolt. Hon får inte veta. |
| 6:58 | väntar | du | Ali gillar krukor. Han sa det själv. |
| 6:58 | MÅL |  | Sälj blomkrukan |
| 6:58 | sak | du | En kruka. Mamma skulle bli så stolt. Hon får inte veta. |
| 6:58 | röst | du | En kruka. Mamma skulle bli så stolt. Hon får inte veta. · STORY |
| 6:58 | målruta |  | Sälj blomkrukan |
| 6:58 | händelse | tagitUrPrint | sak=kruka n=1 |
| 7:03 | klar | du | En kruka. Mamma skulle bli så stolt. Hon får inte veta. |
| 7:03 | sak | du | Ali gillar krukor. Han sa det själv. |
| 7:03 | pil |  | Sälj blomkrukan |
| 7:03 | notis | tanke | 💭 Ali gillar krukor. Han sa det själv. |
| 7:03 | röst | du | Ali gillar krukor. Han sa det själv. · MÅL |
| 7:06 | klar | du | Ali gillar krukor. Han sa det själv. |
| 7:13 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 7:15 | händelse | salt | sak=kruka n=1 |
| 7:15 | aliSalt | ali | 70 |
| 7:15 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 7:16 | händelse | malKlart | id=saljKruka del=Dag 1 – Kom igång nasta=kopSang |
| 7:16 | bekräftelse | du | plats |
| 7:16 | väntar | du | Jag tänker inte sova på betongen i natt. Ali har en säng. Typ. |
| 7:16 | målruta |  | Köp sängen |
| 7:16 | MÅL |  | Köp sängen |
| 7:16 | sak | du | Jag tänker inte sova på betongen i natt. Ali har en säng. Typ. |
| 7:16 | pil |  | Köp sängen |
| 7:16 | notis | tanke | 💭 Jag tänker inte sova på betongen i natt. Ali har en säng. Typ. |
| 7:16 | röst | du | Jag tänker inte sova på betongen i natt. Ali har en säng. Typ. · MÅL |
| 7:20 | kvittens-bock |  | ✓ Sälj blomkrukan |
| 7:21 | klar | du | Jag tänker inte sova på betongen i natt. Ali har en säng. Typ. |
| 7:23 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 7:25 | händelse | kopt | sak=sang |
| 7:25 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 7:25 | händelse | dialog | id=aliSang |
| 7:25 | röst | ali | Sov gott, min vän. · STORY |
| 7:25 | butiksbubbla | ali | Sov gott, min vän. |
| 7:26 | händelse | malKlart | id=kopSang del=Dag 1 – Kom igång nasta=printSang |
| 7:26 | bekräftelse | du | plats |
| 7:26 | väntar | du | En säng tar lång tid. Den är värd det. |
| 7:26 | målruta |  | Printa sängen |
| 7:26 | MÅL |  | Printa sängen |
| 7:26 | sak | du | En säng tar lång tid. Den är värd det. |
| 7:26 | pil |  | Printa sängen |
| 7:26 | notis | tanke | 💭 En säng tar lång tid. Den är värd det. |
| 7:26 | röst | du | En säng tar lång tid. Den är värd det. · MÅL |
| 7:27 | nick |  | nick:19 |
| 7:30 | klar | du | En säng tar lång tid. Den är värd det. |
| 7:30 | kvittens-bock |  | ✓ Köp sängen |
| 7:49 | sak | ali | Ali här. Jag såg Skräpgrip på avstånd. Ett streck blev lite snett. Mitt fel. Vackert ändå. |
| 7:49 | sms | ali | Ali här. Jag såg Skräpgrip på avstånd. Ett streck blev lite snett. Mitt fel. Vackert ändå. |
| 7:49 | sms-bubbla | ali | Ali här. Jag såg Skräpgrip på avstånd. Ett streck blev lite snett. Mitt fel. Vackert ändå. |
| 7:49 | röst | ali | Ali här. Jag såg Skräpgrip på avstånd. Ett streck blev lite snett. Mitt fel. Vackert ändå. · REAKTION |
| 7:51 | händelse | printStart | sak=sang |
| 7:56 | toast | fel | Slut på tråd – mal mer så fortsätter den |
| 7:56 | väntar | notis:Storebrors skrivare: Slut på tråd – mal  | Storebrors skrivare: Slut på tråd – mal mer så fortsätter den |
| 7:57 | klar | ali | Ali här. Jag såg Skräpgrip på avstånd. Ett streck blev lite snett. Mitt fel. Vackert ändå. |
| 8:14 | sak | notis:Storebrors skrivare: Slut på tråd – mal  | Storebrors skrivare: Slut på tråd – mal mer så fortsätter den |
| 8:14 | notis | fel | Storebrors skrivare: Slut på tråd – mal mer så fortsätter den |
| 8:15 | toast | fel | Ingen ström – trampa cykeln |
| 8:16 | klar | notis:Storebrors skrivare: Slut på tråd – mal  | Storebrors skrivare: Slut på tråd – mal mer så fortsätter den |
| 8:19 | toast | guld | ✅ |
| 8:19 | händelse | printKlar | sak=sang n=1 |
| 8:20 | händelse | tagitUrPrint | sak=sang n=1 |
| 8:20 | händelse | malKlart | id=printSang del=Dag 1 – Kom igång nasta=sov1 |
| 8:20 | bekräftelse | du | plats |
| 8:20 | kvittens | du | En säng. Jag printade en SÄNG. |
| 8:20 | väntar | du | En säng. Jag printade en SÄNG. |
| 8:20 | paket |  | lapp |
| 8:20 | kvallsrad | du | Nitton år. Inget mer tjat. Gården är full av skräp. I morgon. |
| 8:20 | väntar | du | Sängen ska in i skjulet. Sen sover jag. |
| 8:20 | MÅL |  | Sängen i skjulet |
| 8:20 | sak | du | En säng. Jag printade en SÄNG. |
| 8:20 | röst | du | En säng. Jag printade en SÄNG. · STORY |
| 8:20 | målruta |  | Sängen i skjulet |
| 8:23 | klar | du | En säng. Jag printade en SÄNG. |
| 8:23 | sak | du | Sängen ska in i skjulet. Sen sover jag. |
| 8:23 | pil |  | Sängen i skjulet |
| 8:23 | notis | tanke | 💭 Sängen ska in i skjulet. Sen sover jag. |
| 8:23 | röst | du | Sängen ska in i skjulet. Sen sover jag. · MÅL |
| 8:23 | nick |  | nick:20 |
| 8:26 | klar | du | Sängen ska in i skjulet. Sen sover jag. |
| 8:35 | nattkort | du | 🌙 Dag 1 är slut. God natt. zzz… i en riktig säng Nitton år. Inget mer tjat. Gården är full av skräp. I morgon. DAGENS PRINTAR Nyckelring × 11 Blomkruka × 1 Sän |

<details><summary>Botens handlingar dag 1</summary>

- 0:12 gå till brädhögen (3 m) (5 kr)
- 0:29 gå till cykeln vid vägen (2 m) (5 kr)
- 0:43 gå till rutan i linje 1 (13 m) (5 kr)
- 1:14 gå till cykeln (lyfter den) (13 m) (5 kr)
- 1:23 gå till cykelns plats (11 m) (5 kr)
- 1:26 gå till skrivaren (2 m) (5 kr)
- 1:27 printar Nyckelring (5 kr)
- 1:34 tar ut 1 st ur skrivaren (5 kr)
- 1:48 printar Nyckelring (sista av storebrors rulle) (5 kr)
- 2:13 tar ut 1 st ur skrivaren (5 kr)
- 2:18 gå till Ali (26 m) (5 kr)
- 2:18 öppnar Alis butik – sälja de två nyckelringarna (5 kr)
- 2:21 säljer hos Ali: +30 kr (35 kr)
- 2:34 öppnar Alis butik – köpa kvarnen (35 kr)
- 2:36 köper gammalkvarn för 30 kr (5 kr)
- 2:37 köpte kvarnen (5 kr)
- 2:51 gå till kvarnens ruta (28 m) (5 kr)
- 3:04 plockar 3 skräp på gården (bär max 3) (5 kr)
- 3:07 gå till kvarnen (13 m) (5 kr)
- 3:19 gå till cykeln (2 m) (5 kr)
- 3:21 printar Nyckelring (5 kr)
- 3:27 tar ut 1 st ur skrivaren (5 kr)
- 3:32 printar Nyckelring (5 kr)
- 3:34 tar ut 1 st ur skrivaren (5 kr)
- 3:36 printar Nyckelring (5 kr)
- 3:38 tar ut 1 st ur skrivaren (5 kr)
- 3:45 gå till Ali (27 m) (5 kr)
- 3:45 öppnar Alis butik – sälja nyckelringar (5 kr)
- 3:47 säljer hos Ali: +45 kr (50 kr)
- 3:57 öppnar Alis butik – Ali (powerbanken) (75 kr)
- 4:15 öppnar Alis butik – Ali (powerbanken) (75 kr)
- 4:23 öppnar Alis butik – Ali (powerbanken) (75 kr)
- 4:33 öppnar Alis butik – Ali (powerbanken) (75 kr)
- 4:45 gå till koppla powerbanken till cykeln (24 m) (75 kr)
- 4:55 tjänar pengar till väntar på flaskhalsen för grip: 75/115 kr → printar nyckelring (15 kr) (75 kr)
- 4:56 gå till skrivaren (2 m) (75 kr)
- 4:57 printar Nyckelring (75 kr)
- 5:00 tar ut 1 st ur skrivaren (75 kr)
- 5:02 printar Nyckelring (75 kr)
- 5:07 plockar 3 skräp på gården (bär max 3) (75 kr)
- 5:10 gå till kvarnen (13 m) (75 kr)
- 5:14 gå till skrivaren (3 m) (75 kr)
- 5:14 tar ut 1 st ur skrivaren (75 kr)
- 5:16 printar Nyckelring (75 kr)
- 5:18 tar ut 1 st ur skrivaren (75 kr)
- 5:24 gå till Ali (28 m) (75 kr)
- 5:24 öppnar Alis butik – sälja (75 kr)
- 5:26 säljer hos Ali: +45 kr (120 kr)
- 5:27 tjänar pengar till väntar på flaskhalsen för grip: 120/160 kr → printar nyckelring (15 kr) (120 kr)
- 5:32 gå till skrivaren (25 m) (120 kr)
- 5:33 printar Nyckelring (120 kr)
- 5:42 plockar 3 skräp på gården (bär max 3) (120 kr)
- 5:46 gå till kvarnen (20 m) (120 kr)
- 5:49 gå till skrivaren (3 m) (120 kr)
- 5:49 tar ut 1 st ur skrivaren (120 kr)
- 5:51 printar Nyckelring (120 kr)
- 5:53 tar ut 1 st ur skrivaren (120 kr)
- 5:55 printar Nyckelring (120 kr)
- 5:56 gå till cykeln (1 m) (120 kr)
- 5:58 tar ut 1 st ur skrivaren (120 kr)
- 6:04 gå till Ali (27 m) (120 kr)
- 6:04 öppnar Alis butik – sälja (120 kr)
- 6:06 säljer hos Ali: +45 kr (165 kr)
- 6:08 öppnar Alis butik – köpa skräpgrip (165 kr)
- 6:11 köper grip för 50 kr (115 kr)
- 6:20 gå till skrivaren (25 m) (115 kr)
- 6:21 printar Skräpgrip (115 kr)
- 6:25 tar ut 1 st ur skrivaren (115 kr)
- 6:29 tar på grip (115 kr)
- 6:34 gå till Ali (25 m) (115 kr)
- 6:34 öppnar Alis butik – köpa receptet blomkruka (115 kr)
- 6:37 köper kruka för 40 kr (75 kr)
- 6:52 gå till skrivaren (25 m) (75 kr)
- 6:54 printar Blomkruka (75 kr)
- 6:57 gå till cykeln (1 m) (75 kr)
- 6:59 tar ut 1 st ur skrivaren (75 kr)
- 7:13 gå till Ali (25 m) (75 kr)
- 7:13 öppnar Alis butik – sälja krukan (75 kr)
- 7:15 säljer hos Ali: +70 kr (145 kr)
- 7:23 öppnar Alis butik – köpa sängen (145 kr)
- 7:26 köper sang för 60 kr (85 kr)
- 7:39 plockar 6 skräp på gården (bär max 6) (85 kr)
- 7:46 gå till kvarnen (31 m) (85 kr)
- 7:50 gå till skrivaren (1 m) (85 kr)
- 7:51 printar Säng (85 kr)
- 8:08 plockar 6 skräp på gården (bär max 6) (85 kr)
- 8:13 gå till kvarnen (24 m) (85 kr)
- 8:19 gå till cykeln (3 m) (85 kr)
- 8:20 gå till skrivaren (1 m) (85 kr)
- 8:21 tar ut 1 st ur skrivaren (85 kr)
- 8:33 gå till sängplatsen i skjulet (21 m) (85 kr)

</details>

## Dag 2

| Tid | Källa | Vem | Text |
|---|---|---|---|
| 8:35 | vara | ali | kruka |
| 8:35 | händelse | malKlart | id=sov1 del=Dag 1 – Kom igång nasta=kopMotor |
| 8:35 | bekräftelse | du | plats |
| 8:35 | MÅL |  | Mal skräp, printa och sälj |
| 0:00 | väntar | ali | Ali här. Såg skylten. Stavningen är rätt. Det är mer än många. |
| 0:00 | väntar | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått generator. Vi tar en låt på det. Den här är till dig, Gunnar. |
| 0:00 | radio | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått generator. Vi tar en låt på det. Den här är till dig, Gunnar. |
| 0:00 | skratt | du | Radio-Kjelle |
| 0:01 | händelse | dagenBorjar | dag=2 |
| 0:01 | meddelande | du | Dag 2. 20 dagar till jul. Utan dörr blåser natten rakt in. |
| 0:01 | dagbokkort | du | Tippen bredvid · Dag 2. 20 dagar till jul. Utan dörr blåser natten rakt in. |
| 0:01 | röst | du | Dag 2. 20 dagar till jul. Tippen bredvid. Utan dörr blåser natten rakt in. · STORY |
| 0:08 | väntar | notis:morgon | Ali vill ha idag: Blomkruka · +50 % |
| 0:08 | händelse | morgonkortStangt | dag=2 |
| 0:08 | paket |  | lapp |
| 0:08 | lapp | 📔 Dagbok | Första natten i en riktig säng. Jag printade den själv. |
| 0:08 | dagbokrad | du | Första natten i en riktig säng. Jag printade den själv. |
| 0:08 | väntar | notis:Första natten i en riktig säng. Jag prin | Första natten i en riktig säng. Jag printade den själv. |
| 0:08 | paket |  | tanke |
| 0:08 | tanke | du | Grön jul igen. Typiskt. |
| 0:08 | väntar | du | Grön jul igen. Typiskt. |
| 0:08 | struken | du | Grön jul igen. Typiskt. |
| 0:08 | väntar | du | Vevandet tar på armarna. Ali har en motor till kvarnen. |
| 0:11 | målruta |  | Mal skräp, printa och sälj |
| 0:12 | väntar | foto | Egen säng |
| 0:12 | paket |  | tanke |
| 0:12 | tanke | du | Tänk att jag ska få sova i min egen säng. |
| 0:12 | väntar | du | Tänk att jag ska få sova i min egen säng. |
| 0:13 | sak | du | Vevandet tar på armarna. Ali har en motor till kvarnen. |
| 0:13 | pil |  | Mal skräp, printa och sälj |
| 0:13 | notis | tanke | 💭 Vevandet tar på armarna. Ali har en motor till kvarnen. |
| 0:13 | röst | du | Vevandet tar på armarna. Ali har en motor till kvarnen. · MÅL |
| 0:16 | händelse | printStart | sak=kruka |
| 0:18 | klar | du | Vevandet tar på armarna. Ali har en motor till kvarnen. |
| 0:19 | toast | guld | ✅ |
| 0:19 | händelse | printKlar | sak=kruka n=2 |
| 0:19 | händelse | tagitUrPrint | sak=kruka n=1 |
| 0:19 | struken | kedja | kruka |
| 0:20 | sak | notis:morgon | Ali vill ha idag: Blomkruka · +50 % |
| 0:20 | notis |  | Blomkruka · +50 % |
| 0:20 | hjälp | kontroll | R: Vrid innan du ställer ner |
| 0:24 | klar | notis:morgon | Ali vill ha idag: Blomkruka · +50 % |
| 0:25 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 0:25 | röst | ali | Satt med AI:n hela natten igen. Fråga inte vad. Okej, en soffa. Fråga inte. · STORY |
| 0:25 | butiksbubbla | ali | Satt med AI:n hela natten igen. Fråga inte vad. Okej, en soffa. Fråga inte. |
| 0:27 | händelse | salt | sak=kruka n=1 |
| 0:27 | aliSalt | ali | 105 |
| 0:27 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 0:27 | butiksbubbla | ali | Precis vad jag ville ha idag. 105 kr – med extra. |
| 0:27 | väntar | ali | Precis det jag ville ha idag, min vän. |
| 0:28 | sak | notis:Första natten i en riktig säng. Jag prin | Första natten i en riktig säng. Jag printade den själv. |
| 0:28 | notis | dagbok | Första natten i en riktig säng. Jag printade den själv. |
| 0:31 | klar | notis:Första natten i en riktig säng. Jag prin | Första natten i en riktig säng. Jag printade den själv. |
| 0:33 | sak | ali | Precis det jag ville ha idag, min vän. |
| 0:33 | röst | ali | Precis det jag ville ha idag, min vän. · STORY |
| 0:36 | klar | ali | Precis det jag ville ha idag, min vän. |
| 0:44 | sak | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått generator. Vi tar en låt på det. Den här är till dig, Gunnar. |
| 0:44 | notis |  | 📻 Radio Tippen: Radio Tippen, Kjelle här. Skjulet vid tippen har fått generator. Vi tar en låt på det. Den här är till dig, Gunnar. |
| 0:44 | röst | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått generator. Vi tar en låt på det. Den här är till dig, Gunnar. · REAKTION |
| 0:45 | händelse | printStart | sak=kruka |
| 0:47 | toast | fel | Ingen ström – trampa cykeln |
| 0:49 | toast | guld | ✅ |
| 0:49 | händelse | printKlar | sak=kruka n=3 |
| 0:50 | händelse | tagitUrPrint | sak=kruka n=1 |
| 0:54 | klar | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått generator. Vi tar en låt på det. Den här är till dig, Gunnar. |
| 0:55 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 0:57 | händelse | salt | sak=kruka n=1 |
| 0:57 | aliSalt | ali | 105 |
| 0:57 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 1:02 | sak | foto | Egen säng |
| 1:02 | foto | du | Egen säng |
| 1:04 | klar | foto | Egen säng |
| 1:05 | lapp | 📔 Dagbok | Sopbilen tippade en ny last. Allt det skräpet – och grinden är låst. |
| 1:05 | okänt ord bytt | du | Sopbilen tippade en ny last. Allt det skräpet – och grinden är låst. |
| 1:05 | dagbokrad | du | En stor bil tippade en ny last. Allt det skräpet – och grinden är låst. |
| 1:05 | väntar | notis:En stor bil tippade en ny last. Allt det | En stor bil tippade en ny last. Allt det skräpet – och grinden är låst. |
| 1:06 | sak | notis:En stor bil tippade en ny last. Allt det | En stor bil tippade en ny last. Allt det skräpet – och grinden är låst. |
| 1:06 | notis | dagbok | En stor bil tippade en ny last. Allt det skräpet – och grinden är låst. |
| 1:08 | skratt | du | falsk tuta |
| 1:09 | sopsack | rolf | Sopsäckarna landade på gården |
| 1:09 | paket |  | tanke → ge |
| 1:09 | tanke | du | Hmm, vad kastade gubben ut ur sopbilen? Jag går och kollar. |
| 1:09 | väntar | du | Hmm, vad kastade gubben ut ur sopbilen? Jag går och kollar. |
| 1:09 | väntar |  | (läget ändras) |
| 1:09 | klar | notis:En stor bil tippade en ny last. Allt det | En stor bil tippade en ny last. Allt det skräpet – och grinden är låst. |
| 1:11 | sak | du | Hmm, vad kastade gubben ut ur sopbilen? Jag går och kollar. |
| 1:11 | notis | tanke | 💭 Hmm, vad kastade gubben ut ur sopbilen? Jag går och kollar. |
| 1:11 | röst | du | Hmm, vad kastade gubben ut ur sopbilen? Jag går och kollar. · STORY |
| 1:16 | klar | du | Hmm, vad kastade gubben ut ur sopbilen? Jag går och kollar. |
| 1:18 | sak |  | (läget ändras) |
| 1:18 | klar |  | (läget ändras) |
| 1:18 | struken | ali | Ali här. Såg skylten. Stavningen är rätt. Det är mer än många. |
| 1:23 | händelse | printStart | sak=kruka |
| 1:26 | toast | guld | ✅ |
| 1:26 | händelse | printKlar | sak=kruka n=4 |
| 1:26 | händelse | tagitUrPrint | sak=kruka n=1 |
| 1:30 | hjälp | kontroll | R: Vrid innan du ställer ner |
| 1:31 | väntar | ali | Tjugofem år bakom disken. Du är det roligaste som hänt. |
| 1:32 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 1:34 | händelse | salt | sak=kruka n=1 |
| 1:34 | aliSalt | ali | 105 |
| 1:34 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 1:43 | händelse | printStart | sak=kruka |
| 1:46 | toast | guld | ✅ |
| 1:46 | händelse | printKlar | sak=kruka n=5 |
| 1:47 | händelse | tagitUrPrint | sak=kruka n=1 |
| 1:53 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 1:54 | händelse | salt | sak=kruka n=1 |
| 1:54 | aliSalt | ali | 105 |
| 1:54 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 1:56 | struken | ali | Tjugofem år bakom disken. Du är det roligaste som hänt. |
| 2:19 | händelse | printStart | sak=kruka |
| 2:22 | toast | guld | ✅ |
| 2:22 | händelse | printKlar | sak=kruka n=6 |
| 2:22 | väntar | mamma | Har du frusit än? |
| 2:22 | händelse | tagitUrPrint | sak=kruka n=1 |
| 2:24 | sak | du | Tänk att jag ska få sova i min egen säng. |
| 2:24 | notis | tanke | 💭 Tänk att jag ska få sova i min egen säng. |
| 2:24 | röst | du | Tänk att jag ska få sova i min egen säng. · STORY |
| 2:28 | klar | du | Tänk att jag ska få sova i min egen säng. |
| 2:28 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 2:30 | händelse | salt | sak=kruka n=1 |
| 2:30 | aliSalt | ali | 105 |
| 2:30 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 2:30 | hjälp | kontroll | R: Vrid innan du ställer ner |
| 2:39 | händelse | printStart | sak=kruka |
| 2:41 | toast | fel | Ingen ström – trampa cykeln |
| 2:42 | toast | guld | ✅ |
| 2:42 | händelse | printKlar | sak=kruka n=7 |
| 2:43 | händelse | tagitUrPrint | sak=kruka n=1 |
| 2:49 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 2:50 | händelse | salt | sak=kruka n=1 |
| 2:50 | aliSalt | ali | 105 |
| 2:50 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 3:07 | skratt | du | falsk tuta |
| 3:11 | upplåst | mala | kvarnmotor |
| 3:11 | brott | UPPLÅST | kvarnmotor (mala 14 av 6) |
| 3:11 | händelse | upplast | id=kvarnmotor flask=mala |
| 3:11 | paket |  | tanke → sms |
| 3:11 | tanke | du | Mina armar… Kvarnen borde veva själv. |
| 3:11 | väntar | du | Mina armar… Kvarnen borde veva själv. |
| 3:11 | väntar | ali | Ali här. En motor? Jag har en. Från en gammal tvättmaskin. Den centrifugerar fortfarande om man ber snällt. |
| 3:11 | sak | du | Mina armar… Kvarnen borde veva själv. |
| 3:11 | notis | tanke | 💭 Mina armar… Kvarnen borde veva själv. |
| 3:11 | röst | du | Mina armar… Kvarnen borde veva själv. · STORY |
| 3:14 | klar | du | Mina armar… Kvarnen borde veva själv. |
| 3:16 | väntar | mamma | Har du frusit än? |
| 3:17 | händelse | printStart | sak=kruka |
| 3:19 | toast | guld | ✅ |
| 3:19 | händelse | printKlar | sak=kruka n=8 |
| 3:20 | händelse | tagitUrPrint | sak=kruka n=1 |
| 3:26 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 3:26 | sak | ali | Ali här. En motor? Jag har en. Från en gammal tvättmaskin. Den centrifugerar fortfarande om man ber snällt. |
| 3:26 | sms | ali | Ali här. En motor? Jag har en. Från en gammal tvättmaskin. Den centrifugerar fortfarande om man ber snällt. |
| 3:26 | sms-bubbla | ali | Ali här. En motor? Jag har en. Från en gammal tvättmaskin. Den centrifugerar fortfarande om man ber snällt. |
| 3:26 | röst | ali | Ali här. En motor? Jag har en. Från en gammal tvättmaskin. Den centrifugerar fortfarande om man ber snällt. · STORY |
| 3:27 | händelse | salt | sak=kruka n=1 |
| 3:27 | aliSalt | ali | 105 |
| 3:27 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 3:35 | klar | ali | Ali här. En motor? Jag har en. Från en gammal tvättmaskin. Den centrifugerar fortfarande om man ber snällt. |
| 3:37 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 3:39 | struken | info:guld | 3D-modell köpt – printa kvarnmotor |
| 3:39 | händelse | kopt | sak=kvarnmotor |
| 3:39 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 3:40 | händelse | malKlart | id=kopMotor del=Dag 2 – Tippen bredvid nasta=monteraMotor |
| 3:40 | bekräftelse | du | plats |
| 3:40 | struken | kedja | motorKopt |
| 3:40 | väntar | du | Motorn ska sitta där veven sitter. Jag printar den först. |
| 3:40 | målruta |  | Printa kvarnmotorn till kvarnen |
| 3:40 | MÅL |  | Printa kvarnmotorn till kvarnen |
| 3:40 | sak | du | Motorn ska sitta där veven sitter. Jag printar den först. |
| 3:40 | pil |  | Printa kvarnmotorn till kvarnen |
| 3:40 | notis | tanke | 💭 Motorn ska sitta där veven sitter. Jag printar den först. |
| 3:40 | röst | du | Motorn ska sitta där veven sitter. Jag printar den först. · MÅL |
| 3:41 | nick |  | nick:22 |
| 3:44 | kvittens-bock |  | ✓ Köp kvarnmotorn hos Ali (50 kr) |
| 3:45 | klar | du | Motorn ska sitta där veven sitter. Jag printar den först. |
| 3:54 | händelse | printStart | sak=byggsats:kvarnmotor |
| 3:56 | toast | fel | Ingen ström – trampa cykeln |
| 3:57 | händelse | printKlar | sak=byggsats:kvarnmotor n=1 |
| 3:57 | toast | guld | ✅ |
| 3:58 | väntar | info:guld | ⚙️ Kvarnmotorn ska skruvas fast på kvarnen. |
| 3:58 | händelse | tagitUrPrint | sak=byggsats:kvarnmotor n=1 |
| 3:58 | paket |  | sms |
| 3:58 | väntar | ali | Ali här. Ännu en ritning som blev på riktigt: Kvarnmotor. Semesterkassan växer. Livet växer. |
| 3:58 | sak | info:guld | ⚙️ Kvarnmotorn ska skruvas fast på kvarnen. |
| 3:58 | kvitto-visas | info:guld | ⚙️ Kvarnmotorn ska skruvas fast på kvarnen. |
| 3:58 | toast | guld | ⚙️ Kvarnmotorn ska skruvas fast på kvarnen. |
| 4:00 | klar | info:guld | ⚙️ Kvarnmotorn ska skruvas fast på kvarnen. |
| 4:02 | väntar | info:guld | ⚙️ Motorn sitter där veven satt – nu mal kvarnen själv. |
| 4:02 | händelse | monterat | sak=kvarnmotor |
| 4:02 | paket |  | tanke |
| 4:02 | tanke | du | Motorn sitter där veven satt. Mina armar tackar. |
| 4:02 | väntar | du | Motorn sitter där veven satt. Mina armar tackar. |
| 4:02 | monterat | du | byggsats:kvarnmotor |
| 4:02 | händelse | monterat | sak=kvarnmotor |
| 4:02 | sak | info:guld | ⚙️ Motorn sitter där veven satt – nu mal kvarnen själv. |
| 4:02 | kvitto-visas | info:guld | ⚙️ Motorn sitter där veven satt – nu mal kvarnen själv. |
| 4:02 | toast | guld | ⚙️ Motorn sitter där veven satt – nu mal kvarnen själv. |
| 4:02 | händelse | malKlart | id=monteraMotor del=Dag 2 – Tippen bredvid nasta=kopSack |
| 4:02 | bekräftelse | du | plats |
| 4:02 | struken | du | Motorn sitter där veven satt. Mina armar tackar. |
| 4:02 | väntar | du | Gården är full av skräp. Jag börjar vid skjulet. |
| 4:03 | MÅL |  | Kolla vad som flög ut från sopbilen |
| 4:04 | klar | info:guld | ⚙️ Motorn sitter där veven satt – nu mal kvarnen själv. |
| 4:04 | målruta |  | Kolla vad som flög ut från sopbilen |
| 4:06 | kvittens-bock |  | ✓ Printa kvarnmotorn till kvarnen |
| 4:06 | sak | du | Gården är full av skräp. Jag börjar vid skjulet. |
| 4:06 | pil |  | Kolla vad som flög ut från sopbilen |
| 4:06 | notis | tanke | 💭 Gården är full av skräp. Jag börjar vid skjulet. |
| 4:06 | röst | du | Gården är full av skräp. Jag börjar vid skjulet. · MÅL |
| 4:10 | klar | du | Gården är full av skräp. Jag börjar vid skjulet. |
| 4:16 | paket |  | brev → ge → tanke |
| 4:16 | väntar | rolf | Du sliter ju. Ingen gör så nuförtin. Ta dessa så går dä lättare. / grannen – ja kör sopbilen å har hand om tippen bredvid. MVH ROLF​ |
| 4:16 | väntar |  | (läget ändras) |
| 4:16 | tanke | du | Rolf… gubben i sopbilen. Han har tippen bredvid. Han verkar schysst. |
| 4:16 | okänt ord bytt | du | Rolf… gubben i sopbilen. Han har tippen bredvid. Han verkar schysst. |
| 4:16 | väntar | du | Rolf… gubben i sopbilen. Han har tippen bredvid. Han verkar schysst. |
| 4:16 | sak | rolf | Du sliter ju. Ingen gör så nuförtin. Ta dessa så går dä lättare. / grannen – ja kör sopbilen å har hand om tippen bredvid. MVH ROLF​ |
| 4:16 | lapp | Lapp från Rolf | Du sliter ju. Ingen gör så nuförtin. Ta dessa så går dä lättare. / grannen – ja kör sopbilen å har hand om tippen bredvid. MVH ROLF​ |
| 4:16 | röst | rolf | Du sliter ju. Ingen gör så nuförtin. Ta dessa så går dä lättare. / grannen – ja kör sopbilen å har hand om tippen bredvid. MVH ROLF​ · STORY |
| 4:16 | hjälp | kontroll | Klick: Klicka för att ta på dig den |
| 4:27 | klar | rolf | Du sliter ju. Ingen gör så nuförtin. Ta dessa så går dä lättare. / grannen – ja kör sopbilen å har hand om tippen bredvid. MVH ROLF​ |
| 4:28 | väntar | info:guld | 🗑️ Sopsäcken är över axeln! Nu bär jag 10 skräp. |
| 4:28 | tog på | du | byggsats:korg |
| 4:28 | händelse | monterat | sak=korg |
| 4:28 | sak | info:guld | 🗑️ Sopsäcken är över axeln! Nu bär jag 10 skräp. |
| 4:28 | kvitto-visas | info:guld | 🗑️ Sopsäcken är över axeln! Nu bär jag 10 skräp. |
| 4:28 | toast | guld | 🗑️ Sopsäcken är över axeln! Nu bär jag 10 skräp. |
| 4:28 | händelse | malKlart | id=kopSack del=Dag 2 – Tippen bredvid nasta=n1-stada-klart-garden |
| 4:28 | bekräftelse | du | plats |
| 4:28 | händelse | malKlart | id=n1-stada-klart-garden del=Dag 2 – Tippen bredvid nasta=rolf0-brev |
| 4:28 | bekräftelse | du | plats |
| 4:28 | väntar | du | Gården är STÄDAD, av mig, frivilligt. Mamma skulle aldrig tro det. |
| 4:28 | väntar | du | Vänta på sopbilen. Den lämnar något. |
| 4:28 | MÅL |  | Vänta på sopbilen. Den lämnar något. |
| 4:30 | klar | info:guld | 🗑️ Sopsäcken är över axeln! Nu bär jag 10 skräp. |
| 4:30 | sak | du | Gården är STÄDAD, av mig, frivilligt. Mamma skulle aldrig tro det. |
| 4:30 | kvitto-visas | du | Gården är STÄDAD, av mig, frivilligt. Mamma skulle aldrig tro det. |
| 4:30 | lapp | 📔 Dagbok | Gården är STÄDAD, av mig, frivilligt. Mamma skulle aldrig tro det. |
| 4:30 | dagbokrad | du | Gården är STÄDAD, av mig, frivilligt. Mamma skulle aldrig tro det. |
| 4:30 | notis | dagbok | Gården är STÄDAD, av mig, frivilligt. Mamma skulle aldrig tro det. |
| 4:31 | klar | du | Gården är STÄDAD, av mig, frivilligt. Mamma skulle aldrig tro det. |
| 4:31 | målruta |  | Vänta på sopbilen. Den lämnar något. |
| 4:31 | sak | du | Vänta på sopbilen. Den lämnar något. |
| 4:31 | pil |  | Vänta på sopbilen. Den lämnar något. |
| 4:31 | röst | du | Vänta på sopbilen. Den lämnar något. · MÅL |
| 4:33 | händelse | printStart | sak=kruka |
| 4:34 | klar | du | Vänta på sopbilen. Den lämnar något. |
| 4:36 | toast | guld | ✅ |
| 4:36 | händelse | printKlar | sak=kruka n=9 |
| 4:36 | sak |  | (läget ändras) |
| 4:36 | händelse | tagitUrPrint | sak=kruka n=1 |
| 4:36 | klar |  | (läget ändras) |
| 4:40 | sak | du | Rolf… gubben i sopbilen. Han har tippen bredvid. Han verkar schysst. |
| 4:40 | notis | tanke | 💭 Rolf… gubben i sopbilen. Han har tippen bredvid. Han verkar schysst. |
| 4:40 | röst | du | Rolf… gubben i sopbilen. Han har tippen bredvid. Han verkar schysst. · STORY |
| 4:42 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 4:43 | händelse | salt | sak=kruka n=1 |
| 4:43 | aliSalt | ali | 105 |
| 4:43 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 4:46 | klar | du | Rolf… gubben i sopbilen. Han har tippen bredvid. Han verkar schysst. |
| 4:48 | paket |  | tanke → ge |
| 4:48 | tanke | du | Flaggan är uppe. Rolf har lämnat något. |
| 4:48 | väntar | du | Flaggan är uppe. Rolf har lämnat något. |
| 4:48 | väntar |  | (läget ändras) |
| 4:49 | skratt | du | falsk tuta |
| 4:50 | upplåst | skrivare | rullstall |
| 4:50 | brott | UPPLÅST | rullstall (skrivare 120 av 60) |
| 4:50 | händelse | upplast | id=rullstall flask=skrivare |
| 4:50 | paket |  | tanke → sms |
| 4:50 | tanke | du | Kvarnen står och väntar för att hållaren är full. Om den rymde fler rullar kunde den mala hela tiden. |
| 4:50 | väntar | du | Kvarnen står och väntar för att hållaren är full. Om den rymde fler rullar kunde den mala hela tiden. |
| 4:50 | väntar | ali | Ali här. Rullställ. Fyra rullar i stället för en. Har ett på hyllan. |
| 4:55 | händelse | printStart | sak=kruka |
| 4:55 | väntar | info:guld | 🚛 Sopbilen tippade en ny last på soptippen! |
| 4:55 | skratt | du | däcket rullar iväg |
| 4:55 | paket |  | tanke |
| 4:55 | tanke | du | Däcket ville inte stanna. Jag förstår det. |
| 4:55 | väntar | du | Däcket ville inte stanna. Jag förstår det. |
| 4:55 | sak | info:guld | 🚛 Sopbilen tippade en ny last på soptippen! |
| 4:55 | kvitto-visas | info:guld | 🚛 Sopbilen tippade en ny last på soptippen! |
| 4:55 | toast | guld | 🚛 Sopbilen tippade en ny last på soptippen! |
| 4:56 | toast | fel | Ingen ström – trampa cykeln |
| 4:57 | klar | info:guld | 🚛 Sopbilen tippade en ny last på soptippen! |
| 4:59 | toast | guld | ✅ |
| 4:59 | händelse | printKlar | sak=kruka n=10 |
| 4:59 | händelse | tagitUrPrint | sak=kruka n=1 |
| 5:02 | väntar | värld:TUUT! Tjena! | TUUT! Tjena! |
| 5:05 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 5:06 | händelse | salt | sak=kruka n=1 |
| 5:06 | aliSalt | ali | 105 |
| 5:06 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 5:07 | sak | ali | Ali här. Rullställ. Fyra rullar i stället för en. Har ett på hyllan. |
| 5:07 | sms | ali | Ali här. Rullställ. Fyra rullar i stället för en. Har ett på hyllan. |
| 5:07 | sms-bubbla | ali | Ali här. Rullställ. Fyra rullar i stället för en. Har ett på hyllan. |
| 5:07 | röst | ali | Ali här. Rullställ. Fyra rullar i stället för en. Har ett på hyllan. · STORY |
| 5:12 | klar | ali | Ali här. Rullställ. Fyra rullar i stället för en. Har ett på hyllan. |
| 5:17 | struken | du | Däcket ville inte stanna. Jag förstår det. |
| 5:21 | väntar | rolf | Såg att du printar grejer. Kan du göra en sån hä? Kall öl ä viktigt. /Rolf​ |
| 5:21 | paket |  | ge |
| 5:21 | väntar |  | (läget ändras) |
| 5:21 | sak | rolf | Såg att du printar grejer. Kan du göra en sån hä? Kall öl ä viktigt. /Rolf​ |
| 5:21 | lapp | Brev från Rolf | Såg att du printar grejer. Kan du göra en sån hä? Kall öl ä viktigt. /Rolf​ |
| 5:21 | röst | rolf | Såg att du printar grejer. Kan du göra en sån hä? Kall öl ä viktigt. /Rolf​ · STORY |
| 5:21 | händelse | malKlart | id=rolf0-brev del=Dag 2 – Tippen bredvid nasta=rolf0-printa |
| 5:21 | bekräftelse | du | plats |
| 5:21 | väntar | du | Printa ölhållare med kylklamp. |
| 5:21 | MÅL |  | Printa ölhållare med kylklamp |
| 5:23 | målruta |  | Printa ölhållare med kylklamp |
| 5:24 | händelse | printStart | sak=olhallare |
| 5:24 | händelse | malKlart | id=rolf0-printa del=Dag 2 – Tippen bredvid nasta=rolf0-ge |
| 5:24 | bekräftelse | du | plats |
| 5:24 | väntar | du | Ge Rolf ölhållare med kylklamp. |
| 5:25 | MÅL |  | Ge Rolf ölhållare med kylklamp |
| 5:27 | målruta |  | Ge Rolf ölhållare med kylklamp |
| 5:27 | klar | rolf | Såg att du printar grejer. Kan du göra en sån hä? Kall öl ä viktigt. /Rolf​ |
| 5:27 | händelse | brevLast | id=rolf:0 |
| 5:27 | toast | guld | ✅ |
| 5:27 | händelse | printKlar | sak=olhallare n=1 |
| 5:28 | händelse | tagitUrPrint | sak=olhallare n=1 |
| 5:28 | kvittens-bock |  | ✓ Printa ölhållare med kylklamp |
| 5:29 | struken | du | Printa ölhållare med kylklamp. |
| 5:29 | sak | du | Ge Rolf ölhållare med kylklamp. |
| 5:29 | pil |  | Ge Rolf ölhållare med kylklamp |
| 5:29 | röst | du | Ge Rolf ölhållare med kylklamp. · MÅL |
| 5:32 | klar | du | Ge Rolf ölhållare med kylklamp. |
| 5:34 | struken | värld:TUUT! Tjena! | TUUT! Tjena! |
| 5:34 | sak |  | (läget ändras) |
| 5:34 | klar |  | (läget ändras) |
| 5:34 | väntar | bud | (tips) |
| 5:34 | sak | bud | (tips) |
| 5:35 | väntar | du | Klart! Nu lägger jag den i Rolfs brevlåda vid grinden. |
| 5:36 | händelse | lagtIPostlada | sak=olhallare rolf=0 jobb=false |
| 5:36 | struken | kedja | rolf0 |
| 5:36 | paket |  | tanke |
| 5:36 | tanke | du | Flaggan uppe. Nu får Rolf hämta den. |
| 5:36 | väntar | du | Flaggan uppe. Nu får Rolf hämta den. |
| 5:36 | händelse | malKlart | id=rolf0-ge del=Dag 2 – Tippen bredvid nasta=vindsnurra |
| 5:36 | bekräftelse | du | plats |
| 5:36 | struken | du | Flaggan uppe. Nu får Rolf hämta den. |
| 5:36 | väntar | du | En vindsnurra på skjulets tak. Då blir det ström när det blåser. |
| 5:36 | målruta |  | Trampa, printa och sälj |
| 5:36 | MÅL |  | Trampa, printa och sälj |
| 5:36 | klar | bud | (tips) |
| 5:38 | struken | du | Klart! Nu lägger jag den i Rolfs brevlåda vid grinden. |
| 5:38 | sak | du | En vindsnurra på skjulets tak. Då blir det ström när det blåser. |
| 5:38 | pil |  | Trampa, printa och sälj |
| 5:38 | notis | tanke | 💭 En vindsnurra på skjulets tak. Då blir det ström när det blåser. |
| 5:38 | röst | du | En vindsnurra på skjulets tak. Då blir det ström när det blåser. · MÅL |
| 5:40 | kvittens-bock |  | ✓ Ge Rolf ölhållare med kylklamp |
| 5:43 | klar | du | En vindsnurra på skjulets tak. Då blir det ström när det blåser. |
| 5:48 | händelse | printStart | sak=kruka |
| 5:51 | upplåst | trampa | vindsnurra |
| 5:51 | brott | UPPLÅST | vindsnurra (trampa 26 av 6) |
| 5:51 | händelse | upplast | id=vindsnurra flask=trampa |
| 5:51 | paket |  | tanke → sms |
| 5:51 | tanke | du | Mina ben är slut. Det blåser hela tiden här ute. Tänk om vinden kunde trampa åt mig. |
| 5:51 | väntar | du | Mina ben är slut. Det blåser hela tiden här ute. Tänk om vinden kunde trampa åt mig. |
| 5:51 | väntar | ali | Ali här. Vindsnurra till cykeln. Vinden trampar åt dig. Den är lat, men den jobbar gratis. |
| 5:52 | toast | guld | ✅ |
| 5:52 | händelse | printKlar | sak=kruka n=11 |
| 5:54 | sak | ali | Ali här. Ännu en ritning som blev på riktigt: Kvarnmotor. Semesterkassan växer. Livet växer. |
| 5:54 | sms | ali | Ali här. Ännu en ritning som blev på riktigt: Kvarnmotor. Semesterkassan växer. Livet växer. |
| 5:54 | sms-bubbla | ali | Ali här. Ännu en ritning som blev på riktigt: Kvarnmotor. Semesterkassan växer. Livet växer. |
| 5:54 | röst | ali | Ali här. Ännu en ritning som blev på riktigt: Kvarnmotor. Semesterkassan växer. Livet växer. · REAKTION |
| 6:02 | klar | ali | Ali här. Ännu en ritning som blev på riktigt: Kvarnmotor. Semesterkassan växer. Livet växer. |
| 6:10 | sak | du | Flaggan är uppe. Rolf har lämnat något. |
| 6:10 | notis | tanke | 💭 Flaggan är uppe. Rolf har lämnat något. |
| 6:10 | röst | du | Flaggan är uppe. Rolf har lämnat något. · STORY |
| 6:13 | klar | du | Flaggan är uppe. Rolf har lämnat något. |
| 6:16 | händelse | tagitUrPrint | sak=kruka n=1 |
| 6:18 | hjälp | kontroll | E: Ryggsäcken och kistan |
| 6:22 | upplåst | skrivare | trim_skrivare |
| 6:22 | brott | UPPLÅST | trim_skrivare (skrivare 60 av 60) |
| 6:22 | händelse | upplast | id=trim_skrivare flask=skrivare |
| 6:22 | paket |  | sms |
| 6:22 | väntar | ali | Ali här. Skrivartrim. Jag skruvade på min egen skrivare i natt. Den går fortare nu. Nästan för fort. |
| 6:22 | sak |  | (läget ändras) |
| 6:22 | brev | rolf | rolf:0 |
| 6:22 | klar |  | (läget ändras) |
| 6:23 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 6:23 | röst | ali | Rolf gav mig en kanna. Som min farmors. Jag ritade en sak åt honom. Säg inget, han gråter lätt. · STORY |
| 6:23 | butiksbubbla | ali | Rolf gav mig en kanna. Som min farmors. Jag ritade en sak åt honom. Säg inget, han gråter lätt. |
| 6:24 | händelse | salt | sak=kruka n=1 |
| 6:24 | aliSalt | ali | 105 |
| 6:24 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 6:27 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 6:29 | struken | info:guld | 3D-modell köpt – printa vindsnurra till skjultaket |
| 6:29 | händelse | kopt | sak=vindsnurra |
| 6:29 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 6:29 | struken | ali | Ali här. Vindsnurra till cykeln. Vinden trampar åt dig. Den är lat, men den jobbar gratis. |
| 6:37 | händelse | printStart | sak=byggsats:vindsnurra |
| 6:37 | sak | du | Kvarnen står och väntar för att hållaren är full. Om den rymde fler rullar kunde den mala hela tiden. |
| 6:37 | notis | tanke | 💭 Kvarnen står och väntar för att hållaren är full. Om den rymde fler rullar kunde den mala hela tiden. |
| 6:37 | röst | du | Kvarnen står och väntar för att hållaren är full. Om den rymde fler rullar kunde den mala hela tiden. · STORY |
| 6:41 | toast | fel | Ingen ström – trampa cykeln |
| 6:42 | händelse | printKlar | sak=byggsats:vindsnurra n=1 |
| 6:42 | toast | guld | ✅ |
| 6:43 | väntar | info:guld | 🌬️ Vindsnurran ska upp på skjulets tak. |
| 6:43 | händelse | tagitUrPrint | sak=byggsats:vindsnurra n=1 |
| 6:46 | klar | du | Kvarnen står och väntar för att hållaren är full. Om den rymde fler rullar kunde den mala hela tiden. |
| 6:46 | sak | info:guld | 🌬️ Vindsnurran ska upp på skjulets tak. |
| 6:46 | kvitto-visas | info:guld | 🌬️ Vindsnurran ska upp på skjulets tak. |
| 6:46 | toast | guld | 🌬️ Vindsnurran ska upp på skjulets tak. |
| 6:48 | klar | info:guld | 🌬️ Vindsnurran ska upp på skjulets tak. |
| 6:52 | paket |  | tanke |
| 6:52 | tanke | du | Jaha, Rolf har hämtat en ölhållare med kylklamp. |
| 6:52 | väntar | du | Jaha, Rolf har hämtat en ölhållare med kylklamp. |
| 6:54 | hjälp | kontroll | Klick: Klicka för att montera |
| 6:54 | händelse | placerat | sak=vindsnurra |
| 6:54 | kvittens | du | Den snurrar! Långsamt. Men den snurrar. |
| 6:54 | varför-köad | du | Om det regnar i natt drunknar jag. Ett tak. |
| 6:54 | väntar | du | Den snurrar! Långsamt. Men den snurrar. |
| 6:54 | väntar | info:guld | 🌬️ Vindsnurran sitter på taket – den trampar cykeln åt mig när det blåser |
| 6:54 | monterat | du | byggsats:vindsnurra |
| 6:54 | händelse | monterat | sak=vindsnurra |
| 6:54 | sak | du | Den snurrar! Långsamt. Men den snurrar. |
| 6:54 | notis | tanke | 💭 Den snurrar! Långsamt. Men den snurrar. |
| 6:54 | röst | du | Den snurrar! Långsamt. Men den snurrar. · STORY |
| 6:54 | händelse | malKlart | id=vindsnurra del=Dag 2 – Tippen bredvid nasta=n1-bygg-dorr-skjulet |
| 6:54 | bekräftelse | du | plats |
| 6:54 | struken | du | Jaha, Rolf har hämtat en ölhållare med kylklamp. |
| 6:54 | väntar | du | Det drar från dörrhålet. En dörr kan jag printa. |
| 6:54 | MÅL |  | Bygg en dörr till skjulet |
| 6:57 | målruta |  | Bygg en dörr till skjulet |
| 6:58 | klar | du | Den snurrar! Långsamt. Men den snurrar. |
| 7:00 | brott | KLICK SOM INTE GÅR | "Klicka för att montera" syns men ett klick gör inte det just nu |
| 7:00 | sak | du | Det drar från dörrhålet. En dörr kan jag printa. |
| 7:00 | pil |  | Bygg en dörr till skjulet |
| 7:00 | notis | tanke | 💭 Det drar från dörrhålet. En dörr kan jag printa. |
| 7:00 | röst | du | Det drar från dörrhålet. En dörr kan jag printa. · MÅL |
| 7:01 | nick |  | nick:29 |
| 7:02 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 7:03 | struken | info:guld | 3D-modell köpt – printa dörr |
| 7:03 | händelse | kopt | sak=dorr |
| 7:03 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 7:04 | klar | du | Det drar från dörrhålet. En dörr kan jag printa. |
| 7:05 | struken | info:guld | 🌬️ Vindsnurran sitter på taket – den trampar cykeln åt mig när det blåser |
| 7:12 | händelse | printStart | sak=byggsats:dorr |
| 7:13 | sak | du | Mina ben är slut. Det blåser hela tiden här ute. Tänk om vinden kunde trampa åt mig. |
| 7:13 | notis | tanke | 💭 Mina ben är slut. Det blåser hela tiden här ute. Tänk om vinden kunde trampa åt mig. |
| 7:13 | röst | du | Mina ben är slut. Det blåser hela tiden här ute. Tänk om vinden kunde trampa åt mig. · STORY |
| 7:14 | skratt | du | falsk tuta |
| 7:15 | toast | bra | Del 1 av 2 klar |
| 7:15 | väntar | notis:Storebrors skrivare: Del 1 av 2 klar | Storebrors skrivare: Del 1 av 2 klar |
| 7:19 | händelse | printKlar | sak=byggsats:dorr n=1 |
| 7:19 | toast | guld | ✅ |
| 7:19 | händelse | tagitUrPrint | sak=byggsats:dorr n=1 |
| 7:19 | paket |  | sms |
| 7:19 | väntar | ali | Ali här. Jag har inte sovit. Inte på grund av AI:n. På grund av dig. Du bygger saker av sopor. Jag har en hel butik och bygger ingenting. Det ska ändras. Kanske. Troligen. |
| 7:19 | paket |  | tanke |
| 7:19 | tanke | du | Jaha. En kalsong. Använd. |
| 7:19 | väntar | du | Jaha. En kalsong. Använd. |
| 7:19 | skratt | du | kvarnen spottar |
| 7:20 | klar | du | Mina ben är slut. Det blåser hela tiden här ute. Tänk om vinden kunde trampa åt mig. |
| 7:22 | sak | du | Jaha. En kalsong. Använd. |
| 7:22 | notis | tanke | 💭 Jaha. En kalsong. Använd. |
| 7:22 | röst | du | Jaha. En kalsong. Använd. · REAKTION |
| 7:23 | väntar | info:guld | Dörr på plats! Trivsel +8 |
| 7:23 | händelse | malKlart | id=n1-bygg-dorr-skjulet del=Dag 2 – Tippen bredvid nasta=sov2 |
| 7:23 | paket |  | lapp |
| 7:23 | väntar | du | Nu vet Ali att jag bor HÄR. Taket läcker. I morgon. |
| 7:23 | paket |  | sms |
| 7:23 | väntar | bror | Mamma ringde mig fyra gånger förresten. Snyggt jobbat 😂 |
| 7:23 | skratt | bror | Mamma ringde mig fyra gånger förresten. |
| 7:23 | bekräftelse | du | plats |
| 7:23 | väntar | du | Klart för idag – sov när du vill. |
| 7:23 | MÅL |  | Klart för idag – sov när du vill |
| 7:24 | klar | du | Jaha. En kalsong. Använd. |
| 7:24 | sak | du | Klart för idag – sov när du vill. |
| 7:24 | målruta |  | Klart för idag – sov när du vill |
| 7:24 | pil |  | Klart för idag – sov när du vill |
| 7:24 | röst | du | Klart för idag – sov när du vill. · MÅL |
| 7:27 | klar | du | Klart för idag – sov när du vill. |
| 7:27 | sak | info:guld | Dörr på plats! Trivsel +8 |
| 7:27 | kvitto-visas | info:guld | Dörr på plats! Trivsel +8 |
| 7:27 | toast | guld | Dörr på plats! Trivsel +8 |
| 7:27 | kvittens-bock |  | ✓ Bygg en dörr till skjulet |
| 7:29 | klar | info:guld | Dörr på plats! Trivsel +8 |
| 7:30 | väntar | notis:🌇 Klockan är 21. Ali slår igen luckan.  | 🌇 Klockan är 21. Ali slår igen luckan. Dagens jobb är klart – gå in i skjulet och sov i sängen. |
| 7:31 | sak | du | Nu vet Ali att jag bor HÄR. Taket läcker. I morgon. |
| 7:31 | kvallsrad | du | Nu vet Ali att jag bor HÄR. Taket läcker. I morgon. |
| 7:31 | klar | du | Nu vet Ali att jag bor HÄR. Taket läcker. I morgon. |
| 7:34 | nattkort | du | 🌙 Dag 2 är slut. God natt. zzz… Nu vet Ali att jag bor HÄR. Taket läcker. I morgon. DAGENS PRINTAR Blomkruka × 10 Ölhållare med kylklamp × 1 Totalt 11 printar |

<details><summary>Botens handlingar dag 2</summary>

- 0:00 — dag 2 börjar — (85 kr)
- 0:08 popup: "FORTSÄTT" (85 kr)
- 0:11 tjänar pengar till väntar på flaskhalsen för kvarnmotor: 85/125 kr → printar blomkruka (105 kr) (85 kr)
- 0:15 gå till skrivaren (19 m) (85 kr)
- 0:16 printar Blomkruka (85 kr)
- 0:20 tar ut 1 st ur skrivaren (85 kr)
- 0:25 gå till Ali (26 m) (85 kr)
- 0:25 öppnar Alis butik – sälja (85 kr)
- 0:27 säljer hos Ali: +105 kr (190 kr)
- 0:38 tjänar pengar till väntar på flaskhalsen för kvarnmotor: 190/230 kr → printar blomkruka (105 kr) (190 kr)
- 0:43 gå till skrivaren (25 m) (190 kr)
- 0:45 printar Blomkruka (190 kr)
- 0:47 gå till cykeln (1 m) (190 kr)
- 0:50 tar ut 1 st ur skrivaren (190 kr)
- 0:55 gå till Ali (25 m) (190 kr)
- 0:55 öppnar Alis butik – sälja (190 kr)
- 0:57 säljer hos Ali: +105 kr (295 kr)
- 0:59 tjänar pengar till väntar på flaskhalsen för kvarnmotor: 295/335 kr → printar blomkruka (105 kr) (295 kr)
- 1:11 plockar 6 skräp på gården (bär max 6) (295 kr)
- 1:17 gå till kvarnen (29 m) (295 kr)
- 1:22 gå till skrivaren (3 m) (295 kr)
- 1:23 printar Blomkruka (295 kr)
- 1:27 tar ut 1 st ur skrivaren (295 kr)
- 1:32 gå till Ali (28 m) (295 kr)
- 1:32 öppnar Alis butik – sälja (295 kr)
- 1:34 säljer hos Ali: +105 kr (400 kr)
- 1:36 tjänar pengar till väntar på flaskhalsen för kvarnmotor: 400/440 kr → printar blomkruka (105 kr) (400 kr)
- 1:41 gå till skrivaren (25 m) (400 kr)
- 1:43 printar Blomkruka (400 kr)
- 1:45 gå till cykeln (1 m) (400 kr)
- 1:48 tar ut 1 st ur skrivaren (400 kr)
- 1:53 gå till Ali (25 m) (400 kr)
- 1:53 öppnar Alis butik – sälja (400 kr)
- 1:55 säljer hos Ali: +105 kr (505 kr)
- 1:56 tjänar pengar till väntar på flaskhalsen för kvarnmotor: 505/545 kr → printar blomkruka (105 kr) (505 kr)
- 2:07 plockar 5 skräp på gården (bär max 6) (505 kr)
- 2:12 gå till kvarnen (28 m) (505 kr)
- 2:18 gå till skrivaren (3 m) (505 kr)
- 2:19 printar Blomkruka (505 kr)
- 2:23 tar ut 1 st ur skrivaren (505 kr)
- 2:28 gå till Ali (28 m) (505 kr)
- 2:28 öppnar Alis butik – sälja (505 kr)
- 2:30 säljer hos Ali: +105 kr (610 kr)
- 2:32 tjänar pengar till väntar på flaskhalsen för kvarnmotor: 610/650 kr → printar blomkruka (105 kr) (610 kr)
- 2:37 gå till skrivaren (25 m) (610 kr)
- 2:39 printar Blomkruka (610 kr)
- 2:41 gå till cykeln (1 m) (610 kr)
- 2:44 tar ut 1 st ur skrivaren (610 kr)
- 2:49 gå till Ali (25 m) (610 kr)
- 2:49 öppnar Alis butik – sälja (610 kr)
- 2:51 säljer hos Ali: +105 kr (715 kr)
- 2:52 tjänar pengar till väntar på flaskhalsen för kvarnmotor: 715/755 kr → printar blomkruka (105 kr) (715 kr)
- 3:03 plockar 4 skräp på gården (bär max 6) (715 kr)
- 3:10 gå till kvarnen (33 m) (715 kr)
- 3:15 gå till skrivaren (3 m) (715 kr)
- 3:17 printar Blomkruka (715 kr)
- 3:20 tar ut 1 st ur skrivaren (715 kr)
- 3:26 gå till Ali (28 m) (715 kr)
- 3:26 öppnar Alis butik – sälja (715 kr)
- 3:28 säljer hos Ali: +105 kr (820 kr)
- 3:37 öppnar Alis butik – köpa kvarnmotor (820 kr)
- 3:40 köper kvarnmotor för 50 kr (770 kr)
- 3:52 gå till skrivaren (25 m) (770 kr)
- 3:54 printar Kvarnmotor (770 kr)
- 3:56 gå till cykeln (1 m) (770 kr)
- 3:58 tar ut 1 st ur skrivaren (770 kr)
- 4:02 gå till skruva fast kvarnmotorn (3 m) (770 kr)
- 4:16 gå till Rolfs sopsäck (16 m) (770 kr)
- 4:28 tar på korg (770 kr)
- 4:29 tjänar pengar till väntar på sopbilen (BO): 770/830 kr → printar blomkruka (105 kr) (770 kr)
- 4:32 gå till skrivaren (12 m) (770 kr)
- 4:33 printar Blomkruka (770 kr)
- 4:37 tar ut 1 st ur skrivaren (770 kr)
- 4:42 gå till Ali (26 m) (770 kr)
- 4:42 öppnar Alis butik – sälja (770 kr)
- 4:43 säljer hos Ali: +105 kr (875 kr)
- 4:48 tjänar pengar till väntar på sopbilen (BO): 875/935 kr → printar blomkruka (105 kr) (875 kr)
- 4:53 gå till skrivaren (25 m) (875 kr)
- 4:55 printar Blomkruka (875 kr)
- 4:57 gå till cykeln (1 m) (875 kr)
- 5:00 tar ut 1 st ur skrivaren (875 kr)
- 5:05 gå till Ali (25 m) (875 kr)
- 5:05 öppnar Alis butik – sälja (875 kr)
- 5:07 säljer hos Ali: +105 kr (980 kr)
- 5:21 gå till Rolfs postlåda (31 m) (980 kr)
- 5:23 gå till skrivaren (7 m) (980 kr)
- 5:24 printar Ölhållare med kylklamp (980 kr)
- 5:29 tar ut 1 st ur skrivaren (980 kr)
- 5:34 valj olhallare: true, vald olhallare, post {"l":null,"tr":null,"tm":[]}, nummer false (980 kr)
- 5:36 gå till Rolfs postlåda (6 m) (980 kr)
- 5:45 tjänar pengar till väntar på flaskhalsen för vindsnurra: 980/1020 kr → printar blomkruka (105 kr) (980 kr)
- 5:47 gå till skrivaren (6 m) (980 kr)
- 5:48 printar Blomkruka (980 kr)
- 5:50 gå till cykeln (1 m) (980 kr)
- 6:08 plockar 8 skräp på gården (bär max 10) (980 kr)
- 6:16 gå till kvarnen (39 m) (980 kr)
- 6:16 gå till skrivaren (1 m) (980 kr)
- 6:17 tar ut 1 st ur skrivaren (980 kr)
- 6:23 gå till Ali (28 m) (980 kr)
- 6:23 öppnar Alis butik – sälja (980 kr)
- 6:25 säljer hos Ali: +105 kr (1085 kr)
- 6:27 öppnar Alis butik – köpa vindsnurra till skjultaket (1085 kr)
- 6:30 köper vindsnurra för 133 kr (952 kr)
- 6:36 gå till skrivaren (25 m) (952 kr)
- 6:37 printar Vindsnurra till skjultaket (952 kr)
- 6:41 gå till cykeln (1 m) (952 kr)
- 6:43 tar ut 1 st ur skrivaren (952 kr)
- 6:54 gå till sätt vindsnurran på taket (20 m) (952 kr)
- 7:02 gå till Ali (20 m) (952 kr)
- 7:02 öppnar Alis butik – köpa dörr (952 kr)
- 7:04 köper dorr för 120 kr (832 kr)
- 7:10 gå till skrivaren (25 m) (832 kr)
- 7:12 printar Dörr (2 delar) (832 kr)
- 7:19 tar ut 1 st ur skrivaren (832 kr)
- 7:23 gå till skjulet (19 m) (832 kr)
- 7:31 gå till sängen (1 m) (832 kr)

</details>

## Dag 3

| Tid | Källa | Vem | Text |
|---|---|---|---|
| 7:34 | vara | ali | ingen |
| 7:34 | händelse | malKlart | id=sov2 del=Dag 2 – Tippen bredvid nasta=rolf1-brev |
| 7:34 | bekräftelse | du | plats |
| 7:34 | vara | ali | kruka |
| 7:34 | MÅL |  | Vänta på sopbilen. Den lämnar något. |

<details><summary>Botens handlingar dag 3</summary>

- 0:00 — dag 3 börjar — (832 kr)

</details>
