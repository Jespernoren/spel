# Simulering kapitel 1 – körning 1

*Gjord 2026-11-21 18:21 med `verktyg/sim-kapitel1.mjs` + `verktyg/sim-bot.js` (punkt AX). Boten går 4,5 m/s, läser 15 tecken/s, trampar, vevar, plockar, printar, köper och säljer via spelets egna funktioner. Tiderna är speltid.*

## Sammanfattning

| Dag | Minuter | Väntan | Prints (totalt) | Kr vid sömn | Bär | Trivsel |
|---|---|---|---|---|---|---|
| 1 | 9.9 | 2 % | 22 | 220 | 6 | 19 |
| 2 | 9.3 | 3 % | 32 | 760 | 10 | 38 |
| 3 | 0.0 | 0 % | 32 | 760 | 10 | 38 |

## Flaskhalskartan (EE)

| Dag | bara | mala | trampa | strom | skrivare | inkomst | Upplåst |
|---|---|---|---|---|---|---|---|
| 1 | 6 | 10 | 21 | 7 | 113 | 20 | grip (bara, 6:58), kruka (inkomst, 8:06) |
| 2 | 3 | 3 | 8 | 26 | 259 | 0 | kvarnmotor (mala, 3:10, reserv), rullstall (skrivare, 5:23), trim_skrivare (skrivare, 6:29), vindsnurra (trampa, 7:28) |
| 3 | 0 | 0 | 0 | 0 | 0 | 0 |  |

TIDIG: 0 · FAST: 0 · upplåst av reserven (målet väntade 3 min): 1

**SKRATT:** 23 roliga ögonblick på 19 min (12.0 per 10 min, mål minst 5)

**Köp:**

- dag 1 2:34 – gammalkvarn (30 kr)
- dag 1 7:33 – grip (50 kr)
- dag 1 8:15 – kruka (40 kr)
- dag 1 9:06 – sang (60 kr)
- dag 2 3:40 – kvarnmotor (50 kr)
- dag 2 7:43 – vindsnurra (133 kr)
- dag 2 8:15 – dorr (120 kr)

## Storykedjan (kvittens → varför → nytt mål)

| Dag | Tid | Id | Kvittens | Varför | Nytt mål | Tid till målet |
|---|---|---|---|---|---|---|
| 1 | 0:29 | lasta | Tung. Den har storebror aldrig burit så långt. |  | Skrivaren ställer jag mot skräpberget. Min första verkstad. | 0.7 s |
| 1 | 1:39 | valjModell | Den piper. Den GÖR något. |  | En nyckelring till, så länge storebrors rulle räcker. | 3.4 s |
| 1 | 1:44 | trampa | Klar! Ta ut den innan den ändrar sig. |  | En nyckelring till, så länge storebrors rulle räcker. | 0.5 s |
| 1 | 3:05 | flaska | Det blir tråd! Riktig plasttråd. |  | Min egen tråd. Nu printar jag en nyckelring av den. | 0.8 s |
| 1 | 8:26 | krukaD1 | En kruka. Mamma skulle bli så stolt. Hon får inte veta. |  | Ali gillar krukor. Han sa det själv. | 0.9 s |
| 1 | 9:43 | printSang | En säng. Jag printade en SÄNG. |  | Sängen ska in i skjulet. Sen sover jag. | 0.3 s |
| 2 | 8:05 | vindsnurra | Den snurrar! Långsamt. Men den snurrar. |  | Det drar från dörrhålet. En dörr kan jag printa. | 3.0 s |

## Hur länge nya mål väntade (från att förra målet blev klart till att det nya syntes i målrutan)

Snitt 1.9 s · max 12.7 s · över 4 s: 2 · över 8 s: 1 av 30

## Flaggor (20)

- **LUGN** dag 2 0:08: 0.0 s efter BÖRJA DAGEN: [lapp] "Första natten i en riktig säng. Jag printade den själv."
- **KROCK** dag 1 3:09: 0.7 s mellan [notis] "Kvarnen funkar. Soptippen är en gruva." och [notis] "💭 Min egen tråd. Nu printar jag en nyckelring av den."
- **SEN** dag 1 2:01: 15.3 s efter händelsen: bror: "VA FAN?! Fick du igång den?? Jag försökte i typ ett år. Den bara pep. "
- **SEN** dag 1 8:25: 18.8 s efter händelsen: ali: "Ali här. Jag såg Skräpgrip på avstånd. Ett streck blev lite snett. Mit"
- **SEN** dag 1 9:39: 15.2 s efter händelsen: notis:Storebrors skrivare: Slut på tråd – mal : "Storebrors skrivare: Slut på tråd – mal mer så fortsätter den"
- **SEN** dag 2 0:26: 17.4 s efter händelsen: notis:Första natten i en riktig säng. Jag prin: "Första natten i en riktig säng. Jag printade den själv."
- **SEN** dag 2 4:53: 52.6 s efter händelsen: ali: "Ali här. Ännu en ritning som blev på riktigt: Kvarnmotor. Semesterkass"
- **SEN** dag 2 6:46: 18.6 s efter händelsen: du: "Den blev… spagetti. Ali kallar det modern konst."
- **PAUS** dag 1 0:30: 0.0 s paus före "Tung. Den har storebror aldrig burit så långt."
- **PAUS** dag 1 1:42: 0.0 s paus före "Den piper. Den GÖR något."
- **PAUS** dag 1 1:45: 0.0 s paus före "Klar! Ta ut den innan den ändrar sig."
- **PAUS** dag 1 3:05: 0.0 s paus före "Det blir tråd! Riktig plasttråd."
- **PAUS** dag 1 3:08: 0.0 s paus före "Kvarnen funkar. Soptippen är en gruva."
- **PAUS** dag 1 8:33: 0.0 s paus före "En kruka. Mamma skulle bli så stolt. Hon får inte "
- **PAUS** dag 1 9:43: 1.4 s paus före "En säng. Jag printade en SÄNG."
- **PAUS** dag 2 4:30: 0.0 s paus före "Gården är STÄDAD, av mig, frivilligt. Mamma skulle"
- **TOM RUTA** dag 1 3:49: 4.6 s innan "Gå till Ali" syntes
- **TEMPO** dag 1 9:56: dag 1 tog 9.9 min (mål 10–12)
- **TEMPO** dag 2 9:17: dag 2 tog 9.3 min (mål 10–15)
- **TEMPO** dag 3 0:00: dag 3 tog 0.0 min (mål 10–15)

Sidfel: inga

## Dag 1

| Tid | Källa | Vem | Text |
|---|---|---|---|
| 0:00 | MÅL |  | Lasta av skrivaren |
| 0:00 | MÅL |  | Lasta av skrivaren |
| 0:01 | sak | bud | (tips) |
| 0:02 | väntar | du | Se så mycket skräp här är. Det är ju en guldgruva! |
| 0:03 | klar | bud | (tips) |
| 0:05 | sak | du | Se så mycket skräp här är. Det är ju en guldgruva! |
| 0:05 | röst | du | Se så mycket skräp här är. Det är ju en guldgruva! · STORY |
| 0:10 | sak-del | du | Först borde jag spika upp en skylt, så att alla ser att jag bor HÄR. |
| 0:10 | röst | du | Först borde jag spika upp en skylt, så att alla ser att jag bor HÄR. · STORY |
| 0:15 | väntar | du | Spikade ihop en skylt av bräder från skräpberget: Soptippsvägen 1. Inte mycket för världen, men det är MITT. |
| 0:15 | väntar | du | Storebrors skrivare står kvar på cykeln vid vägen. Den ska av. |
| 0:16 | klar | du | Se så mycket skräp här är. Det är ju en guldgruva! |
| 0:19 | sak | du | Spikade ihop en skylt av bräder från skräpberget: Soptippsvägen 1. Inte mycket för världen, men det är MITT. |
| 0:19 | kvitto-visas | du | Spikade ihop en skylt av bräder från skräpberget: Soptippsvägen 1. Inte mycket för världen, men det är MITT. |
| 0:19 | lapp | 📔 Dagbok | Spikade ihop en skylt av bräder från skräpberget: Soptippsvägen 1. Inte mycket för världen, men det är MITT. |
| 0:19 | dagbokrad | du | Spikade ihop en skylt av bräder från skräpberget: Soptippsvägen 1. Inte mycket för världen, men det är MITT. |
| 0:19 | notis | dagbok | Spikade ihop en skylt av bräder från skräpberget: Soptippsvägen 1. Inte mycket för världen, men det är MITT. |
| 0:19 | klar | du | Spikade ihop en skylt av bräder från skräpberget: Soptippsvägen 1. Inte mycket för världen, men det är MITT. |
| 0:19 | målruta |  | Lasta av skrivaren |
| 0:24 | sak | du | Storebrors skrivare står kvar på cykeln vid vägen. Den ska av. |
| 0:24 | pil |  | Lasta av skrivaren |
| 0:24 | notis | tanke | 💭 Storebrors skrivare står kvar på cykeln vid vägen. Den ska av. |
| 0:24 | röst | du | Storebrors skrivare står kvar på cykeln vid vägen. Den ska av. · MÅL |
| 0:29 | händelse | lastatAv | sak=skrivare |
| 0:29 | paket |  | sms |
| 0:29 | väntar | mamma | Hur kunde du bara gå? Är du ok? Svara när jag ringer! |
| 0:29 | händelse | malKlart | id=lasta del=Dag 1 – Kom igång nasta=stall |
| 0:29 | kvittens | du | Tung. Den har storebror aldrig burit så långt. |
| 0:29 | väntar | du | Tung. Den har storebror aldrig burit så långt. |
| 0:29 | väntar | du | Skrivaren ställer jag mot skräpberget. Min första verkstad. |
| 0:29 | MÅL |  | Ställ upp skrivaren |
| 0:30 | klar | du | Storebrors skrivare står kvar på cykeln vid vägen. Den ska av. |
| 0:30 | sak | du | Tung. Den har storebror aldrig burit så långt. |
| 0:30 | röst | du | Tung. Den har storebror aldrig burit så långt. · STORY |
| 0:30 | målruta |  | Ställ upp skrivaren |
| 0:32 | hjälp | kontroll | E: Ryggsäcken och kistan |
| 0:33 | klar | du | Tung. Den har storebror aldrig burit så långt. |
| 0:34 | sak | du | Skrivaren ställer jag mot skräpberget. Min första verkstad. |
| 0:34 | pil |  | Ställ upp skrivaren |
| 0:34 | notis | tanke | 💭 Skrivaren ställer jag mot skräpberget. Min första verkstad. |
| 0:34 | röst | du | Skrivaren ställer jag mot skräpberget. Min första verkstad. · MÅL |
| 0:34 | nick |  | nick:1 |
| 0:39 | klar | du | Skrivaren ställer jag mot skräpberget. Min första verkstad. |
| 0:41 | struken | info:info | ⏎ Enter – hoppa över |
| 0:44 | väntar | info:bra | 🖨️ Storebrors skrivare står på sin plats |
| 0:44 | händelse | placerat | sak=skrivareS |
| 0:44 | paket |  | tanke |
| 0:44 | tanke | du | Storebrors rulle. Den räcker inte länge. |
| 0:44 | väntar | du | Storebrors rulle. Den räcker inte länge. |
| 0:44 | duns | du | ställs ner |
| 0:44 | sak | info:bra | 🖨️ Storebrors skrivare står på sin plats |
| 0:44 | kvitto-visas | info:bra | 🖨️ Storebrors skrivare står på sin plats |
| 0:44 | toast | bra | 🖨️ Storebrors skrivare står på sin plats |
| 0:44 | händelse | malKlart | id=stall del=Dag 1 – Kom igång nasta=strom |
| 0:44 | struken | du | Storebrors rulle. Den räcker inte länge. |
| 0:44 | väntar | du | Skrivaren behöver ström. Hur fixar jag det här ute? |
| 0:44 | MÅL |  | Skrivaren behöver ström |
| 0:46 | klar | info:bra | 🖨️ Storebrors skrivare står på sin plats |
| 0:46 | målruta |  | Skrivaren behöver ström |
| 0:48 | kvittens-bock |  | ✓ Ställ upp skrivaren |
| 0:48 | sak | du | Skrivaren behöver ström. Hur fixar jag det här ute? |
| 0:48 | pil |  | Skrivaren behöver ström |
| 0:48 | notis | tanke | 💭 Skrivaren behöver ström. Hur fixar jag det här ute? |
| 0:48 | röst | du | Skrivaren behöver ström. Hur fixar jag det här ute? · MÅL |
| 0:48 | nick |  | nick:2 |
| 0:52 | klar | du | Skrivaren behöver ström. Hur fixar jag det här ute? |
| 1:21 | paket |  | tanke |
| 1:21 | tanke | du | Cykeln… och storebrors generator? |
| 1:21 | väntar | du | Cykeln… och storebrors generator? |
| 1:21 | sak | du | Cykeln… och storebrors generator? |
| 1:21 | kvitto-visas | du | Cykeln… och storebrors generator? |
| 1:21 | notis | tanke | 💭 Cykeln… och storebrors generator? |
| 1:21 | röst | du | Cykeln… och storebrors generator? · STORY |
| 1:21 | händelse | malKlart | id=strom del=Dag 1 – Kom igång nasta=bygg |
| 1:21 | väntar | du | Nu generatorn på cykeln. |
| 1:22 | MÅL |  | Ställ cykel och generator |
| 1:24 | målruta |  | Ställ cykel och generator |
| 1:24 | klar | du | Cykeln… och storebrors generator? |
| 1:25 | paket |  | tanke |
| 1:25 | tanke | du | Storebrors generator. Den gör el när cykeln snurrar. |
| 1:25 | väntar | du | Storebrors generator. Den gör el när cykeln snurrar. |
| 1:25 | händelse | placerat | sak=generator |
| 1:25 | duns | du | ställs ner |
| 1:25 | kvittens-bock |  | ✓ Skrivaren behöver ström |
| 1:27 | sak | du | Nu generatorn på cykeln. |
| 1:27 | pil |  | Ställ cykel och generator |
| 1:27 | notis | tanke | 💭 Nu generatorn på cykeln. |
| 1:27 | röst | du | Nu generatorn på cykeln. · MÅL |
| 1:28 | ljud | utrustning | Cykeln i famnen |
| 1:28 | händelse | lyft | sak=cykel |
| 1:30 | klar | du | Nu generatorn på cykeln. |
| 1:31 | paket |  | tanke |
| 1:31 | tanke | du | Cykeln ska stå vid skrivaren. Generatorn sätter jag på sen. |
| 1:31 | struken | du | Storebrors generator. Den gör el när cykeln snurrar. |
| 1:31 | väntar | du | Cykeln ska stå vid skrivaren. Generatorn sätter jag på sen. |
| 1:34 | händelse | placerat | sak=cykel |
| 1:34 | duns | du | ställs ner |
| 1:34 | struken | du | Cykeln ska stå vid skrivaren. Generatorn sätter jag på sen. |
| 1:36 | händelse | ombyggd | sak=cykel |
| 1:36 | händelse | malKlart | id=bygg del=Dag 1 – Kom igång nasta=valjModell |
| 1:36 | väntar | du | Strömmen finns. Nu ska skrivaren veta vad den ska göra, sen trampar jag. |
| 1:36 | målruta |  | Välj vad skrivaren ska printa |
| 1:36 | MÅL |  | Välj vad skrivaren ska printa |
| 1:36 | sak | du | Strömmen finns. Nu ska skrivaren veta vad den ska göra, sen trampar jag. |
| 1:36 | pil |  | Välj vad skrivaren ska printa |
| 1:36 | notis | tanke | 💭 Strömmen finns. Nu ska skrivaren veta vad den ska göra, sen trampar jag. |
| 1:36 | röst | du | Strömmen finns. Nu ska skrivaren veta vad den ska göra, sen trampar jag. · MÅL |
| 1:39 | händelse | printStart | sak=nyckelring |
| 1:39 | tanke | du | Den stannar när jag slutar trampa. Ström som sparas hade varit nåt. |
| 1:39 | väntar | du | Den stannar när jag slutar trampa. Ström som sparas hade varit nåt. |
| 1:39 | händelse | malKlart | id=valjModell del=Dag 1 – Kom igång nasta=trampa |
| 1:39 | kvittens | du | Den piper. Den GÖR något. |
| 1:39 | väntar | du | Den piper. Den GÖR något. |
| 1:39 | struken | du | Den stannar när jag slutar trampa. Ström som sparas hade varit nåt. |
| 1:39 | väntar | du | Nu behöver den ström. Trampa. |
| 1:39 | MÅL |  | Trampa cykeln |
| 1:41 | målruta |  | Trampa cykeln |
| 1:42 | klar | du | Strömmen finns. Nu ska skrivaren veta vad den ska göra, sen trampar jag. |
| 1:42 | sak | du | Den piper. Den GÖR något. |
| 1:42 | röst | du | Den piper. Den GÖR något. · STORY |
| 1:44 | händelse | printKlar | sak=nyckelring n=1 |
| 1:44 | händelse | malKlart | id=trampa del=Dag 1 – Kom igång nasta=rullSlut |
| 1:44 | kvittens | du | Klar! Ta ut den innan den ändrar sig. |
| 1:44 | väntar | du | Klar! Ta ut den innan den ändrar sig. |
| 1:44 | väntar | du | En nyckelring till, så länge storebrors rulle räcker. |
| 1:44 | MÅL |  | En nyckelring till |
| 1:45 | klar | du | Den piper. Den GÖR något. |
| 1:45 | sak | du | Klar! Ta ut den innan den ändrar sig. |
| 1:45 | röst | du | Klar! Ta ut den innan den ändrar sig. · STORY |
| 1:45 | målruta |  | En nyckelring till |
| 1:45 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 1:45 | paket |  | sms |
| 1:45 | väntar | bror | VA FAN?! Fick du igång den?? Jag försökte i typ ett år. Den bara pep. 😳 |
| 1:45 | skratt | bror | VA FAN?! Fick du igång den?? Jag försökt |
| 1:45 | paket |  | sms → ge |
| 1:45 | väntar | bror | Sälj den till Ali, han med affären vid skräpberget. Han köper gamla grejer. Han köpte min gamla mopedhjälm för 20 spänn. |
| 1:45 | väntar |  | (läget ändras) |
| 1:48 | klar | du | Klar! Ta ut den innan den ändrar sig. |
| 1:48 | struken | du | Nu behöver den ström. Trampa. |
| 1:48 | sak | du | En nyckelring till, så länge storebrors rulle räcker. |
| 1:48 | pil |  | En nyckelring till |
| 1:48 | notis | tanke | 💭 En nyckelring till, så länge storebrors rulle räcker. |
| 1:48 | röst | du | En nyckelring till, så länge storebrors rulle räcker. · MÅL |
| 1:53 | klar | du | En nyckelring till, så länge storebrors rulle räcker. |
| 1:55 | sak |  | (läget ändras) |
| 1:55 | klar |  | (läget ändras) |
| 1:56 | händelse | printStart | sak=nyckelring |
| 2:01 | sak | bror | VA FAN?! Fick du igång den?? Jag försökte i typ ett år. Den bara pep. 😳 |
| 2:01 | skratt | bror | VA FAN?! Fick du igång den?? Jag försökt |
| 2:01 | sms | bror | VA FAN?! Fick du igång den?? Jag försökte i typ ett år. Den bara pep. 😳 |
| 2:01 | skratt | bror | VA FAN?! Fick du igång den?? Jag försökt |
| 2:01 | sms-bubbla | bror | VA FAN?! Fick du igång den?? Jag försökte i typ ett år. Den bara pep. 😳 |
| 2:01 | skratt | bror | VA FAN?! Fick du igång den?? Jag försökt |
| 2:01 | röst | bror | VA FAN?! Fick du igång den?? Jag försökte i typ ett år. Den bara pep. 😳 · REAKTION |
| 2:01 | hjälp | kontroll | Tab: Dina sms och dagboken |
| 2:02 | toast | guld | Nyckelring är klar – ta ut den |
| 2:02 | väntar | notis:Storebrors skrivare: Nyckelring är klar  | Storebrors skrivare: Nyckelring är klar – ta ut den |
| 2:02 | händelse | printKlar | sak=nyckelring n=2 |
| 2:02 | paket |  | tanke |
| 2:02 | tanke | du | Slut på storebrors rulle. Och här ligger ju plast överallt. Om jag bara kunde göra tråd av skräpet… Affären mitt emot kanske har något. |
| 2:02 | väntar | du | Slut på storebrors rulle. Och här ligger ju plast överallt. Om jag bara kunde göra tråd av skräpet… Affären mitt emot kanske har något. |
| 2:02 | händelse | malKlart | id=rullSlut del=Dag 1 – Kom igång nasta=saljTva |
| 2:02 | MÅL |  | Sälj nyckelringarna |
| 2:03 | kvitto-visas | du | Slut på storebrors rulle. Och här ligger ju plast överallt. Om jag bara kunde göra tråd av skräpet… Affären mitt emot kanske har något. |
| 2:03 | notis | tanke | 💭 Slut på storebrors rulle. Och här ligger ju plast överallt. Om jag bara kunde göra tråd av skräpet… Affären mitt emot kanske har något. |
| 2:04 | målruta |  | Sälj nyckelringarna |
| 2:06 | kvittens-bock |  | ✓ En nyckelring till |
| 2:07 | klar | bror | VA FAN?! Fick du igång den?? Jag försökte i typ ett år. Den bara pep. 😳 |
| 2:07 | skratt | bror | VA FAN?! Fick du igång den?? Jag försökt |
| 2:09 | sak | du | (nytt mål i rutan) |
| 2:09 | pil |  | Sälj nyckelringarna |
| 2:09 | klar | du | (nytt mål i rutan) |
| 2:11 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 2:17 | röst | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. · STORY |
| 2:17 | butiksbubbla | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 2:18 | aliSalt | ali | 30 |
| 2:18 | butiksbubbla | ali | Pappas gamla köttkvarn. Den har malt allt utom kött. Trettio kronor, så är den din. |
| 2:19 | väntar | ali | Pappas gamla köttkvarn. Den har malt allt utom kött. Trettio kronor, så är den din. |
| 2:19 | händelse | malKlart | id=saljTva del=Dag 1 – Kom igång nasta=aliKvarn |
| 2:19 | väntar | du | Ali har en gammal kvarn. Den gör tråd av skräp. |
| 2:20 | MÅL |  | Köp kvarnen |
| 2:20 | sak | du | Ali har en gammal kvarn. Den gör tråd av skräp. |
| 2:20 | målruta |  | Köp kvarnen |
| 2:20 | pil |  | Köp kvarnen |
| 2:20 | notis | tanke | 💭 Ali har en gammal kvarn. Den gör tråd av skräp. |
| 2:20 | röst | du | Ali har en gammal kvarn. Den gör tråd av skräp. · MÅL |
| 2:23 | kvittens-bock |  | ✓ Sälj nyckelringarna |
| 2:24 | klar | du | Ali har en gammal kvarn. Den gör tråd av skräp. |
| 2:26 | struken | bror | Sälj den till Ali, han med affären vid skräpberget. Han köper gamla grejer. Han köpte min gamla mopedhjälm för 20 spänn. |
| 2:26 | struken | notis:Storebrors skrivare: Nyckelring är klar  | Storebrors skrivare: Nyckelring är klar – ta ut den |
| 2:26 | sak | ali | Pappas gamla köttkvarn. Den har malt allt utom kött. Trettio kronor, så är den din. |
| 2:26 | röst | ali | Pappas gamla köttkvarn. Den har malt allt utom kött. Trettio kronor, så är den din. · STORY |
| 2:33 | klar | ali | Pappas gamla köttkvarn. Den har malt allt utom kött. Trettio kronor, så är den din. |
| 2:33 | händelse | kopt | sak=gammalkvarn |
| 2:33 | röst | ali | Och kommer du på nåt smart, så vet du var jag bor. · STORY |
| 2:33 | butiksbubbla | ali | Och kommer du på nåt smart, så vet du var jag bor. |
| 2:35 | händelse | malKlart | id=aliKvarn del=Dag 1 – Kom igång nasta=kvarn |
| 2:35 | väntar | du | Kvarnen ska stå vid skrivaren, närmast skräpberget. |
| 2:35 | målruta |  | Ställ kvarnen |
| 2:35 | MÅL |  | Ställ kvarnen |
| 2:36 | sak | du | Kvarnen ska stå vid skrivaren, närmast skräpberget. |
| 2:36 | pil |  | Ställ kvarnen |
| 2:36 | notis | tanke | 💭 Kvarnen ska stå vid skrivaren, närmast skräpberget. |
| 2:36 | röst | du | Kvarnen ska stå vid skrivaren, närmast skräpberget. · MÅL |
| 2:36 | nick |  | nick:9 |
| 2:39 | kvittens-bock |  | ✓ Köp kvarnen |
| 2:40 | klar | du | Kvarnen ska stå vid skrivaren, närmast skräpberget. |
| 2:47 | väntar | foto | Första nyckelringen |
| 2:47 | paket |  | tanke |
| 2:47 | tanke | du | Någon köpte nåt jag gjort. Det här kan funka. |
| 2:47 | väntar | du | Någon köpte nåt jag gjort. Det här kan funka. |
| 2:48 | händelse | placerat | sak=kvarnen |
| 2:48 | duns | du | ställs ner |
| 2:48 | händelse | malKlart | id=kvarn del=Dag 1 – Kom igång nasta=flaska |
| 2:48 | väntar | du | Skräp i kvarnen, sen vevar jag. Då blir det tråd. |
| 2:48 | MÅL |  | Gör egen tråd |
| 2:48 | målruta |  | Gör egen tråd |
| 2:48 | sak | du | Skräp i kvarnen, sen vevar jag. Då blir det tråd. |
| 2:48 | pil |  | Gör egen tråd |
| 2:48 | notis | tanke | 💭 Skräp i kvarnen, sen vevar jag. Då blir det tråd. |
| 2:48 | röst | du | Skräp i kvarnen, sen vevar jag. Då blir det tråd. · MÅL |
| 2:49 | nick |  | nick:10 |
| 2:52 | kvittens-bock |  | ✓ Ställ kvarnen |
| 2:52 | klar | du | Skräp i kvarnen, sen vevar jag. Då blir det tråd. |
| 3:03 | väntar | info:bra | 3 st i tratten – veva nu! |
| 3:03 | sak | info:bra | 3 st i tratten – veva nu! |
| 3:03 | kvitto-visas | info:bra | 3 st i tratten – veva nu! |
| 3:03 | toast | bra | 3 st i tratten – veva nu! |
| 3:05 | händelse | malKlart | id=flaska del=Dag 1 – Kom igång nasta=egenPrint |
| 3:05 | kvittens | du | Det blir tråd! Riktig plasttråd. |
| 3:05 | väntar | du | Det blir tråd! Riktig plasttråd. |
| 3:05 | väntar | du | Kvarnen funkar. Soptippen är en gruva. |
| 3:05 | väntar | du | Min egen tråd. Nu printar jag en nyckelring av den. |
| 3:05 | MÅL |  | Printa med egen tråd |
| 3:05 | klar | info:bra | 3 st i tratten – veva nu! |
| 3:05 | sak | du | Det blir tråd! Riktig plasttråd. |
| 3:05 | röst | du | Det blir tråd! Riktig plasttråd. · STORY |
| 3:08 | målruta |  | Printa med egen tråd |
| 3:08 | klar | du | Det blir tråd! Riktig plasttråd. |
| 3:08 | sak | du | Kvarnen funkar. Soptippen är en gruva. |
| 3:08 | kvitto-visas | du | Kvarnen funkar. Soptippen är en gruva. |
| 3:08 | lapp | 📔 Dagbok | Kvarnen funkar. Soptippen är en gruva. |
| 3:08 | dagbokrad | du | Kvarnen funkar. Soptippen är en gruva. |
| 3:08 | notis | dagbok | Kvarnen funkar. Soptippen är en gruva. |
| 3:09 | klar | du | Kvarnen funkar. Soptippen är en gruva. |
| 3:09 | sak | du | Min egen tråd. Nu printar jag en nyckelring av den. |
| 3:09 | pil |  | Printa med egen tråd |
| 3:09 | notis | tanke | 💭 Min egen tråd. Nu printar jag en nyckelring av den. |
| 3:09 | röst | du | Min egen tråd. Nu printar jag en nyckelring av den. · MÅL |
| 3:13 | klar | du | Min egen tråd. Nu printar jag en nyckelring av den. |
| 3:17 | händelse | printStart | sak=nyckelring |
| 3:17 | toast | bra | 🔗 Slangen kopplad |
| 3:22 | toast | guld | ✅ |
| 3:22 | händelse | printKlar | sak=nyckelring n=3 |
| 3:22 | paket |  | tanke |
| 3:22 | tanke | du | En nyckelring av en gammal schampoflaska. Den luktar fortfarande päron. |
| 3:22 | väntar | du | En nyckelring av en gammal schampoflaska. Den luktar fortfarande päron. |
| 3:22 | skratt | du | egen tråd |
| 3:22 | händelse | malKlart | id=egenPrint del=Dag 1 – Kom igång nasta=salj |
| 3:22 | struken | du | En nyckelring av en gammal schampoflaska. Den luktar fortfarande päron. |
| 3:22 | väntar | du | Affären på andra sidan vägen kanske köper sånt här. |
| 3:22 | MÅL |  | Sälj hos Ali |
| 3:22 | målruta |  | Sälj hos Ali |
| 3:23 | sak | du | Affären på andra sidan vägen kanske köper sånt här. |
| 3:23 | pil |  | Sälj hos Ali |
| 3:23 | notis | tanke | 💭 Affären på andra sidan vägen kanske köper sånt här. |
| 3:23 | röst | du | Affären på andra sidan vägen kanske köper sånt här. · MÅL |
| 3:23 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 3:23 | nick |  | nick:12 |
| 3:26 | kvittens-bock |  | ✓ Printa med egen tråd |
| 3:27 | klar | du | Affären på andra sidan vägen kanske köper sånt här. |
| 3:31 | händelse | printStart | sak=nyckelring |
| 3:32 | toast | guld | ✅ |
| 3:32 | händelse | printKlar | sak=nyckelring n=4 |
| 3:32 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 3:34 | händelse | printStart | sak=nyckelring |
| 3:35 | toast | guld | ✅ |
| 3:35 | händelse | printKlar | sak=nyckelring n=5 |
| 3:36 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 3:36 | sak | foto | Första nyckelringen |
| 3:36 | foto | du | Första nyckelringen |
| 3:39 | klar | foto | Första nyckelringen |
| 3:48 | aliSalt | ali | 45 |
| 3:48 | röst | ali | Nyckelringar igen? Folk tappar sina nycklar hela tiden. Bra affär för oss. · STORY |
| 3:48 | butiksbubbla | ali | Nyckelringar igen? Folk tappar sina nycklar hela tiden. Bra affär för oss. |
| 3:49 | väntar | kjelle | God morgon, det är Kjelle på Radio Tippen! Det har flyttat in någon i det gamla skjulet. Med en cykel och en skrivare. Spännande, Gunnar. |
| 3:49 | radio | kjelle | God morgon, det är Kjelle på Radio Tippen! Det har flyttat in någon i det gamla skjulet. Med en cykel och en skrivare. Spännande, Gunnar. |
| 3:49 | skratt | du | Radio-Kjelle |
| 3:49 | händelse | malKlart | id=salj del=Dag 1 – Kom igång nasta=powerbank |
| 3:49 | paket |  | sms → ge |
| 3:49 | väntar | ali | Ali här. Glömde en sak. Kom tillbaka, jag har nåt åt dig. |
| 3:49 | väntar |  | (läget ändras) |
| 3:50 | MÅL |  | Gå till Ali |
| 3:52 | sak | kjelle | God morgon, det är Kjelle på Radio Tippen! Det har flyttat in någon i det gamla skjulet. Med en cykel och en skrivare. Spännande, Gunnar. |
| 3:52 | notis |  | 📻 Radio Tippen: God morgon, det är Kjelle på Radio Tippen! Det har flyttat in någon i det gamla skjulet. Med en cykel och en skrivare. Spännande, Gunnar. |
| 3:52 | röst | kjelle | God morgon, det är Kjelle på Radio Tippen! Det har flyttat in någon i det gamla skjulet. Med en cykel och en skrivare. Spännande, Gunnar. · REAKTION |
| 3:52 | väntar | du | Ali har något åt mig. Jag går över vägen till affären. |
| 3:53 | tanke | du | Vem är Gunnar? |
| 3:53 | väntar | du | Vem är Gunnar? |
| 3:53 | kvittens-bock |  | ✓ Sälj hos Ali |
| 3:54 | målruta |  | Gå till Ali |
| 4:03 | paket | ali | ali → ge |
| 4:03 | röst | ali | Ali här. Jag såg dig cykla. Det ser jobbigt ut. Testa koppla på den här. Bra kunder får bonus. · STORY |
| 4:03 | butiksbubbla | ali | Ali här. Jag såg dig cykla. Det ser jobbigt ut. Testa koppla på den här. Bra kunder får bonus. |
| 4:03 | klar | kjelle | God morgon, det är Kjelle på Radio Tippen! Det har flyttat in någon i det gamla skjulet. Med en cykel och en skrivare. Spännande, Gunnar. |
| 4:07 | sak | ali | Ali här. Glömde en sak. Kom tillbaka, jag har nåt åt dig. |
| 4:07 | sms | ali | Ali här. Glömde en sak. Kom tillbaka, jag har nåt åt dig. |
| 4:07 | sms-bubbla | ali | Ali här. Glömde en sak. Kom tillbaka, jag har nåt åt dig. |
| 4:07 | röst | ali | Ali här. Glömde en sak. Kom tillbaka, jag har nåt åt dig. · STORY |
| 4:12 | klar | ali | Ali här. Glömde en sak. Kom tillbaka, jag har nåt åt dig. |
| 4:14 | sak | du | Ali har något åt mig. Jag går över vägen till affären. |
| 4:14 | pil |  | Koppla in powerbanken |
| 4:14 | röst | du | Koppla in powerbanken. · MÅL |
| 4:15 | paket |  | tanke |
| 4:15 | tanke | du | Powerbanken ska sitta på cykeln. |
| 4:15 | struken | du | Vem är Gunnar? |
| 4:15 | väntar | du | Powerbanken ska sitta på cykeln. |
| 4:16 | klar | du | Koppla in powerbanken. |
| 4:18 | sak |  | (läget ändras) |
| 4:18 | klar |  | (läget ändras) |
| 4:23 | skratt | du | powerbanken på cykeln |
| 4:23 | paket |  | tanke |
| 4:23 | tanke | du | Nu sparas lite ström. En nyckelring, typ. Framtiden är här, och den sitter fast med eltejp. |
| 4:23 | väntar | du | Nu sparas lite ström. En nyckelring, typ. Framtiden är här, och den sitter fast med eltejp. |
| 4:23 | monterat | du | byggsats:powerbank |
| 4:23 | händelse | monterat | sak=powerbank |
| 4:23 | sak | du | Nu sparas lite ström. En nyckelring, typ. Framtiden är här, och den sitter fast med eltejp. |
| 4:23 | kvitto-visas | du | Nu sparas lite ström. En nyckelring, typ. Framtiden är här, och den sitter fast med eltejp. |
| 4:23 | notis | tanke | 💭 Nu sparas lite ström. En nyckelring, typ. Framtiden är här, och den sitter fast med eltejp. |
| 4:23 | röst | du | Nu sparas lite ström. En nyckelring, typ. Framtiden är här, och den sitter fast med eltejp. · REAKTION |
| 4:23 | händelse | malKlart | id=powerbank del=Dag 1 – Kom igång nasta=kopGrip |
| 4:23 | paket |  | lapp |
| 4:23 | lapp-kö | 🧺 Ali | Ali här. Nyckelringen sålde. Jag ville bli ingenjör, men fick ta över pappas butik. I natt lät jag en AI rita en skräpgrip åt mig. Kom och titta. |
| 4:23 | väntar | ali | Ali här. Nyckelringen sålde. Jag ville bli ingenjör, men fick ta över pappas butik. I natt lät jag en AI rita en skräpgrip åt mig. Kom och titta. |
| 4:23 | struken | du | Powerbanken ska sitta på cykeln. |
| 4:23 | väntar | du | Med en skräpgrip slipper jag böja mig. Ali har en ritning. |
| 4:23 | MÅL |  | Plocka skräp och mal det |
| 4:26 | målruta |  | Plocka skräp och mal det |
| 4:27 | kvittens-bock |  | ✓ Gå till Ali |
| 4:29 | paket |  | tanke |
| 4:29 | tanke | du | Femtio kronor. Nu har jag råd med gripen. |
| 4:29 | väntar | du | Femtio kronor. Nu har jag råd med gripen. |
| 4:31 | klar | du | Nu sparas lite ström. En nyckelring, typ. Framtiden är här, och den sitter fast med eltejp. |
| 4:31 | sak | du | Med en skräpgrip slipper jag böja mig. Ali har en ritning. |
| 4:31 | pil |  | Plocka skräp och mal det |
| 4:31 | notis | tanke | 💭 Med en skräpgrip slipper jag böja mig. Ali har en ritning. |
| 4:31 | röst | du | Med en skräpgrip slipper jag böja mig. Ali har en ritning. · MÅL |
| 4:32 | nick |  | nick:14 |
| 4:36 | klar | du | Med en skräpgrip slipper jag böja mig. Ali har en ritning. |
| 4:39 | händelse | printStart | sak=nyckelring |
| 4:40 | toast | fel | Ingen ström – trampa cykeln |
| 4:40 | väntar | notis:Storebrors skrivare: Ingen ström – tramp | Storebrors skrivare: Ingen ström – trampa cykeln |
| 4:41 | toast | guld | ✅ |
| 4:41 | händelse | printKlar | sak=nyckelring n=6 |
| 4:41 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 4:43 | händelse | printStart | sak=nyckelring |
| 4:44 | sak | du | Någon köpte nåt jag gjort. Det här kan funka. |
| 4:44 | notis | tanke | 💭 Någon köpte nåt jag gjort. Det här kan funka. |
| 4:44 | röst | du | Någon köpte nåt jag gjort. Det här kan funka. · STORY |
| 4:44 | toast | guld | ✅ |
| 4:44 | händelse | printKlar | sak=nyckelring n=7 |
| 4:48 | klar | du | Någon köpte nåt jag gjort. Det här kan funka. |
| 4:50 | struken | du | Femtio kronor. Nu har jag råd med gripen. |
| 4:56 | sak | mamma | Hur kunde du bara gå? Är du ok? Svara när jag ringer! |
| 4:56 | sms | mamma | Hur kunde du bara gå? Är du ok? Svara när jag ringer! |
| 4:56 | sms-bubbla | mamma | Hur kunde du bara gå? Är du ok? Svara när jag ringer! |
| 4:56 | röst | mamma | Hur kunde du bara gå? Är du ok? Svara när jag ringer! · STORY |
| 4:57 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 4:59 | händelse | printStart | sak=nyckelring |
| 5:00 | toast | guld | ✅ |
| 5:00 | händelse | printKlar | sak=nyckelring n=8 |
| 5:01 | klar | mamma | Hur kunde du bara gå? Är du ok? Svara när jag ringer! |
| 5:01 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 5:03 | struken | notis:Storebrors skrivare: Ingen ström – tramp | Storebrors skrivare: Ingen ström – trampa cykeln |
| 5:09 | paket |  | ali → ge |
| 5:09 | väntar | ali | Du får bonus! 25 kr extra. Kvalitet. Nästan. |
| 5:09 | väntar |  | (läget ändras) |
| 5:09 | aliSalt | ali | 15 |
| 5:09 | aliSalt | ali | 15 |
| 5:09 | aliSalt | ali | 15 |
| 5:10 | sak | ali | Du får bonus! 25 kr extra. Kvalitet. Nästan. |
| 5:10 | notis |  | Ali: ”Du får bonus! 25 kr extra. Kvalitet. Nästan.” |
| 5:10 | röst | ali | Du får bonus! 25 kr extra. Kvalitet. Nästan. · REAKTION |
| 5:14 | klar | ali | Du får bonus! 25 kr extra. Kvalitet. Nästan. |
| 5:16 | sak |  | (läget ändras) |
| 5:16 | klar |  | (läget ändras) |
| 5:23 | händelse | printStart | sak=nyckelring |
| 5:24 | toast | guld | ✅ |
| 5:24 | händelse | printKlar | sak=nyckelring n=9 |
| 5:25 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 5:27 | händelse | printStart | sak=nyckelring |
| 5:28 | toast | guld | ✅ |
| 5:28 | händelse | printKlar | sak=nyckelring n=10 |
| 5:29 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 5:31 | händelse | printStart | sak=nyckelring |
| 5:31 | tanke | du | Gripen hos Ali. Femtio kronor. |
| 5:31 | väntar | du | Gripen hos Ali. Femtio kronor. |
| 5:31 | nick |  | paminn:14 |
| 5:33 | toast | guld | ✅ |
| 5:33 | händelse | printKlar | sak=nyckelring n=11 |
| 5:33 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 5:34 | sak | du | Gripen hos Ali. Femtio kronor. |
| 5:34 | notis | tanke | 💭 Gripen hos Ali. Femtio kronor. |
| 5:34 | röst | du | Gripen hos Ali. Femtio kronor. · REAKTION |
| 5:36 | klar | du | Gripen hos Ali. Femtio kronor. |
| 5:40 | aliSalt | ali | 15 |
| 5:41 | aliSalt | ali | 15 |
| 5:41 | aliSalt | ali | 15 |
| 5:46 | sak | ali | Ali här. Nyckelringen sålde. Jag ville bli ingenjör, men fick ta över pappas butik. I natt lät jag en AI rita en skräpgrip åt mig. Kom och titta. |
| 5:46 | sms | ali | Ali här. Nyckelringen sålde. Jag ville bli ingenjör, men fick ta över pappas butik. I natt lät jag en AI rita en skräpgrip åt mig. Kom och titta. |
| 5:46 | sms-bubbla | ali | Ali här. Nyckelringen sålde. Jag ville bli ingenjör, men fick ta över pappas butik. I natt lät jag en AI rita en skräpgrip åt mig. Kom och titta. |
| 5:46 | röst | ali | Ali här. Nyckelringen sålde. Jag ville bli ingenjör, men fick ta över pappas butik. I natt lät jag en AI rita en skräpgrip åt mig. Kom och titta. · STORY |
| 5:49 | händelse | printStart | sak=nyckelring |
| 5:50 | toast | guld | ✅ |
| 5:50 | händelse | printKlar | sak=nyckelring n=12 |
| 5:51 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 5:53 | händelse | printStart | sak=nyckelring |
| 5:54 | toast | guld | ✅ |
| 5:54 | händelse | printKlar | sak=nyckelring n=13 |
| 5:55 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 5:57 | händelse | printStart | sak=nyckelring |
| 5:58 | klar | ali | Ali här. Nyckelringen sålde. Jag ville bli ingenjör, men fick ta över pappas butik. I natt lät jag en AI rita en skräpgrip åt mig. Kom och titta. |
| 5:58 | toast | guld | ✅ |
| 5:58 | händelse | printKlar | sak=nyckelring n=14 |
| 5:59 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 6:07 | aliSalt | ali | 15 |
| 6:07 | aliSalt | ali | 15 |
| 6:07 | aliSalt | ali | 15 |
| 6:16 | händelse | printStart | sak=nyckelring |
| 6:17 | toast | guld | ✅ |
| 6:17 | händelse | printKlar | sak=nyckelring n=15 |
| 6:18 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 6:20 | händelse | printStart | sak=nyckelring |
| 6:20 | toast | fel | Ingen ström – trampa cykeln |
| 6:22 | toast | guld | ✅ |
| 6:22 | händelse | printKlar | sak=nyckelring n=16 |
| 6:22 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 6:24 | händelse | printStart | sak=nyckelring |
| 6:25 | toast | guld | ✅ |
| 6:25 | händelse | printKlar | sak=nyckelring n=17 |
| 6:26 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 6:34 | aliSalt | ali | 15 |
| 6:34 | aliSalt | ali | 15 |
| 6:34 | aliSalt | ali | 15 |
| 6:43 | händelse | printStart | sak=nyckelring |
| 6:44 | toast | guld | ✅ |
| 6:44 | händelse | printKlar | sak=nyckelring n=18 |
| 6:45 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 6:47 | händelse | printStart | sak=nyckelring |
| 6:48 | toast | guld | ✅ |
| 6:48 | händelse | printKlar | sak=nyckelring n=19 |
| 6:58 | upplåst | bara | grip |
| 6:58 | brott | UPPLÅST | grip (bara 3 av 3) |
| 6:58 | händelse | upplast | id=grip flask=bara |
| 6:58 | paket |  | tanke |
| 6:58 | tanke | du | Ett skräp i taget. Jag springer ihjäl mig. |
| 6:58 | väntar | du | Ett skräp i taget. Jag springer ihjäl mig. |
| 6:58 | sak | du | Ett skräp i taget. Jag springer ihjäl mig. |
| 6:58 | notis | tanke | 💭 Ett skräp i taget. Jag springer ihjäl mig. |
| 6:58 | röst | du | Ett skräp i taget. Jag springer ihjäl mig. · STORY |
| 7:02 | klar | du | Ett skräp i taget. Jag springer ihjäl mig. |
| 7:04 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 7:11 | aliSalt | ali | 15 |
| 7:11 | aliSalt | ali | 15 |
| 7:16 | väntar | bud | (tips) |
| 7:16 | sak | bud | (tips) |
| 7:16 | väntar | du | Jag har pengar nu. Hos Ali kan jag köpa uppgraderingar – bära mer eller printa snabbare. |
| 7:17 | klar | bud | (tips) |
| 7:19 | händelse | printStart | sak=nyckelring |
| 7:19 | sak | du | Jag har pengar nu. Hos Ali kan jag köpa uppgraderingar – bära mer eller printa snabbare. |
| 7:19 | röst | du | Jag har pengar nu. Hos Ali kan jag köpa uppgraderingar – bära mer eller printa snabbare. · MÅL |
| 7:20 | toast | guld | ✅ |
| 7:20 | händelse | printKlar | sak=nyckelring n=20 |
| 7:21 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 7:26 | klar | du | Jag har pengar nu. Hos Ali kan jag köpa uppgraderingar – bära mer eller printa snabbare. |
| 7:28 | aliSalt | ali | 15 |
| 7:32 | struken | info:guld | 3D-modell köpt – printa skräpgrip |
| 7:32 | händelse | kopt | sak=grip |
| 7:32 | röst | ali | Bra val. 3D-modellen är din. Den räcker till en. · STORY |
| 7:32 | butiksbubbla | ali | Bra val. 3D-modellen är din. Den räcker till en. |
| 7:33 | händelse | malKlart | id=kopGrip del=Dag 1 – Kom igång nasta=printGrip |
| 7:33 | väntar | du | Min första 3D-modell! Jag printar inte bara saker – jag printar maskiner. |
| 7:33 | MÅL |  | Printa skräpgripen |
| 7:34 | sak | du | Min första 3D-modell! Jag printar inte bara saker – jag printar maskiner. |
| 7:34 | kvitto-visas | du | Min första 3D-modell! Jag printar inte bara saker – jag printar maskiner. |
| 7:34 | lapp | 📔 Dagbok | Min första 3D-modell! Jag printar inte bara saker – jag printar maskiner. |
| 7:34 | dagbokrad | du | Min första 3D-modell! Jag printar inte bara saker – jag printar maskiner. |
| 7:34 | notis | dagbok | Min första 3D-modell! Jag printar inte bara saker – jag printar maskiner. |
| 7:34 | klar | du | Min första 3D-modell! Jag printar inte bara saker – jag printar maskiner. |
| 7:34 | målruta |  | Printa skräpgripen |
| 7:35 | sak | du | (nytt mål i rutan) |
| 7:35 | pil |  | Printa skräpgripen |
| 7:35 | klar | du | (nytt mål i rutan) |
| 7:35 | nick |  | nick:15 |
| 7:44 | händelse | printStart | sak=byggsats:grip |
| 7:44 | toast | fel | Ingen ström – trampa cykeln |
| 7:47 | händelse | printKlar | sak=byggsats:grip n=1 |
| 7:47 | toast | guld | ✅ |
| 8:02 | väntar | info:guld | Skräpgrip ska jag ha på mig. |
| 8:02 | händelse | tagitUrPrint | sak=byggsats:grip n=1 |
| 8:02 | paket |  | sms |
| 8:02 | väntar | ali | Ali här. Jag såg Skräpgrip på avstånd. Ett streck blev lite snett. Mitt fel. Vackert ändå. |
| 8:02 | sak | info:guld | Skräpgrip ska jag ha på mig. |
| 8:02 | kvitto-visas | info:guld | Skräpgrip ska jag ha på mig. |
| 8:02 | toast | guld | Skräpgrip ska jag ha på mig. |
| 8:04 | klar | info:guld | Skräpgrip ska jag ha på mig. |
| 8:06 | väntar | info:guld | 🦾 Skräpgripen sitter! Jag bär 6, siktar lättare och plockar när jag går nära. |
| 8:06 | tog på | du | byggsats:grip |
| 8:06 | händelse | monterat | sak=grip |
| 8:06 | sak | info:guld | 🦾 Skräpgripen sitter! Jag bär 6, siktar lättare och plockar när jag går nära. |
| 8:06 | kvitto-visas | info:guld | 🦾 Skräpgripen sitter! Jag bär 6, siktar lättare och plockar när jag går nära. |
| 8:06 | toast | guld | 🦾 Skräpgripen sitter! Jag bär 6, siktar lättare och plockar när jag går nära. |
| 8:06 | händelse | malKlart | id=printGrip del=Dag 1 – Kom igång nasta=krukaD1 |
| 8:06 | väntar | du | Ali vill ha krukor. Jag printar en blomkruka. |
| 8:06 | MÅL |  | Printa och sälj nyckelringar |
| 8:06 | upplåst | inkomst | kruka |
| 8:06 | brott | UPPLÅST | kruka (inkomst 20 av 6) |
| 8:06 | händelse | upplast | id=kruka flask=inkomst |
| 8:06 | paket |  | tanke → sms |
| 8:06 | tanke | du | Nyckelringar, nyckelringar. Ali kan inte vilja ha fler. |
| 8:06 | väntar | du | Nyckelringar, nyckelringar. Ali kan inte vilja ha fler. |
| 8:06 | väntar | ali | Prova en kruka. Folk köper krukor. Ingen vet varför. |
| 8:06 | skratt | ali | Prova en kruka. Folk köper krukor. Ingen |
| 8:08 | klar | info:guld | 🦾 Skräpgripen sitter! Jag bär 6, siktar lättare och plockar när jag går nära. |
| 8:09 | målruta |  | Köp krukreceptet |
| 8:10 | kvittens-bock |  | ✓ Printa skräpgripen |
| 8:10 | sak | du | Ali vill ha krukor. Jag printar en blomkruka. |
| 8:10 | pil |  | Köp krukreceptet |
| 8:10 | notis | tanke | 💭 Ali vill ha krukor. Jag printar en blomkruka. |
| 8:10 | röst | du | Ali vill ha krukor. Jag printar en blomkruka. · MÅL |
| 8:11 | nick |  | nick:16 |
| 8:14 | händelse | kopt | sak=kruka |
| 8:14 | röst | ali | Bra val. Folk köper sånt. Jag vet inte varför. · STORY |
| 8:14 | butiksbubbla | ali | Blomkruka? Bra val. Folk köper sånt. Jag vet inte varför. |
| 8:14 | klar | du | Ali vill ha krukor. Jag printar en blomkruka. |
| 8:23 | händelse | printStart | sak=kruka |
| 8:25 | sak | ali | Ali här. Jag såg Skräpgrip på avstånd. Ett streck blev lite snett. Mitt fel. Vackert ändå. |
| 8:25 | sms | ali | Ali här. Jag såg Skräpgrip på avstånd. Ett streck blev lite snett. Mitt fel. Vackert ändå. |
| 8:25 | sms-bubbla | ali | Ali här. Jag såg Skräpgrip på avstånd. Ett streck blev lite snett. Mitt fel. Vackert ändå. |
| 8:25 | röst | ali | Ali här. Jag såg Skräpgrip på avstånd. Ett streck blev lite snett. Mitt fel. Vackert ändå. · REAKTION |
| 8:26 | toast | guld | ✅ |
| 8:26 | händelse | printKlar | sak=kruka n=1 |
| 8:26 | händelse | malKlart | id=krukaD1 del=Dag 1 – Kom igång nasta=saljKruka |
| 8:26 | kvittens | du | En kruka. Mamma skulle bli så stolt. Hon får inte veta. |
| 8:26 | väntar | du | En kruka. Mamma skulle bli så stolt. Hon får inte veta. |
| 8:26 | väntar | du | Ali gillar krukor. Han sa det själv. |
| 8:26 | MÅL |  | Sälj blomkrukan |
| 8:28 | målruta |  | Sälj blomkrukan |
| 8:33 | klar | ali | Ali här. Jag såg Skräpgrip på avstånd. Ett streck blev lite snett. Mitt fel. Vackert ändå. |
| 8:33 | sak | du | En kruka. Mamma skulle bli så stolt. Hon får inte veta. |
| 8:33 | röst | du | En kruka. Mamma skulle bli så stolt. Hon får inte veta. · STORY |
| 8:37 | klar | du | En kruka. Mamma skulle bli så stolt. Hon får inte veta. |
| 8:38 | sak | du | Ali gillar krukor. Han sa det själv. |
| 8:38 | pil |  | Sälj blomkrukan |
| 8:38 | notis | tanke | 💭 Ali gillar krukor. Han sa det själv. |
| 8:38 | röst | du | Ali gillar krukor. Han sa det själv. · MÅL |
| 8:41 | klar | du | Ali gillar krukor. Han sa det själv. |
| 8:44 | händelse | tagitUrPrint | sak=kruka n=1 |
| 8:50 | sak | du | Nyckelringar, nyckelringar. Ali kan inte vilja ha fler. |
| 8:50 | notis | tanke | 💭 Nyckelringar, nyckelringar. Ali kan inte vilja ha fler. |
| 8:50 | röst | du | Nyckelringar, nyckelringar. Ali kan inte vilja ha fler. · STORY |
| 8:52 | aliSalt | ali | 70 |
| 8:53 | händelse | malKlart | id=saljKruka del=Dag 1 – Kom igång nasta=kopSang |
| 8:53 | väntar | du | Jag tänker inte sova på betongen i natt. Ali har en säng. Typ. |
| 8:53 | MÅL |  | Köp sängen |
| 8:54 | klar | du | Nyckelringar, nyckelringar. Ali kan inte vilja ha fler. |
| 8:54 | målruta |  | Köp sängen |
| 8:56 | paket |  | tanke |
| 8:56 | tanke | du | Det börjar bli mörkt. Jag kan inte sova på jorden. |
| 8:56 | väntar | du | Det börjar bli mörkt. Jag kan inte sova på jorden. |
| 8:56 | sak | du | Jag tänker inte sova på betongen i natt. Ali har en säng. Typ. |
| 8:56 | pil |  | Köp sängen |
| 8:56 | notis | tanke | 💭 Jag tänker inte sova på betongen i natt. Ali har en säng. Typ. |
| 8:56 | röst | du | Jag tänker inte sova på betongen i natt. Ali har en säng. Typ. · MÅL |
| 8:57 | kvittens-bock |  | ✓ Sälj blomkrukan |
| 9:01 | klar | du | Jag tänker inte sova på betongen i natt. Ali har en säng. Typ. |
| 9:05 | händelse | kopt | sak=sang |
| 9:05 | röst | ali | Sov gott, min vän. · STORY |
| 9:05 | butiksbubbla | ali | Sov gott, min vän. |
| 9:06 | struken | du | Det börjar bli mörkt. Jag kan inte sova på jorden. |
| 9:06 | händelse | malKlart | id=kopSang del=Dag 1 – Kom igång nasta=printSang |
| 9:06 | väntar | du | En säng tar lång tid. Den är värd det. |
| 9:06 | målruta |  | Printa sängen |
| 9:06 | MÅL |  | Printa sängen |
| 9:06 | sak | du | En säng tar lång tid. Den är värd det. |
| 9:06 | pil |  | Printa sängen |
| 9:06 | notis | tanke | 💭 En säng tar lång tid. Den är värd det. |
| 9:06 | röst | du | En säng tar lång tid. Den är värd det. · MÅL |
| 9:07 | nick |  | nick:19 |
| 9:10 | klar | du | En säng tar lång tid. Den är värd det. |
| 9:10 | kvittens-bock |  | ✓ Köp sängen |
| 9:18 | händelse | printStart | sak=sang |
| 9:18 | sak | ali | Prova en kruka. Folk köper krukor. Ingen vet varför. |
| 9:18 | skratt | ali | Prova en kruka. Folk köper krukor. Ingen |
| 9:18 | sms | ali | Prova en kruka. Folk köper krukor. Ingen vet varför. |
| 9:18 | skratt | ali | Prova en kruka. Folk köper krukor. Ingen |
| 9:18 | sms-bubbla | ali | Prova en kruka. Folk köper krukor. Ingen vet varför. |
| 9:18 | skratt | ali | Prova en kruka. Folk köper krukor. Ingen |
| 9:18 | röst | ali | Prova en kruka. Folk köper krukor. Ingen vet varför. · STORY |
| 9:19 | toast | fel | Ingen ström – trampa cykeln |
| 9:23 | klar | ali | Prova en kruka. Folk köper krukor. Ingen vet varför. |
| 9:23 | skratt | ali | Prova en kruka. Folk köper krukor. Ingen |
| 9:24 | toast | fel | Slut på tråd – mal mer så fortsätter den |
| 9:24 | väntar | notis:Storebrors skrivare: Slut på tråd – mal  | Storebrors skrivare: Slut på tråd – mal mer så fortsätter den |
| 9:39 | sak | notis:Storebrors skrivare: Slut på tråd – mal  | Storebrors skrivare: Slut på tråd – mal mer så fortsätter den |
| 9:39 | notis | fel | Storebrors skrivare: Slut på tråd – mal mer så fortsätter den |
| 9:41 | toast | guld | ✅ |
| 9:41 | händelse | printKlar | sak=sang n=1 |
| 9:42 | klar | notis:Storebrors skrivare: Slut på tråd – mal  | Storebrors skrivare: Slut på tråd – mal mer så fortsätter den |
| 9:43 | händelse | tagitUrPrint | sak=sang n=1 |
| 9:43 | händelse | malKlart | id=printSang del=Dag 1 – Kom igång nasta=sov1 |
| 9:43 | kvittens | du | En säng. Jag printade en SÄNG. |
| 9:43 | väntar | du | En säng. Jag printade en SÄNG. |
| 9:43 | paket |  | lapp |
| 9:43 | kvallsrad | du | Nitton år. Inget mer tjat. Gården är full av skräp. I morgon. |
| 9:43 | väntar | du | Sängen ska in i skjulet. Sen sover jag. |
| 9:43 | MÅL |  | Sängen i skjulet |
| 9:43 | sak | du | En säng. Jag printade en SÄNG. |
| 9:43 | röst | du | En säng. Jag printade en SÄNG. · STORY |
| 9:43 | målruta |  | Sängen i skjulet |
| 9:46 | klar | du | En säng. Jag printade en SÄNG. |
| 9:46 | sak | du | Sängen ska in i skjulet. Sen sover jag. |
| 9:46 | pil |  | Sängen i skjulet |
| 9:46 | notis | tanke | 💭 Sängen ska in i skjulet. Sen sover jag. |
| 9:46 | röst | du | Sängen ska in i skjulet. Sen sover jag. · MÅL |
| 9:46 | nick |  | nick:20 |
| 9:49 | klar | du | Sängen ska in i skjulet. Sen sover jag. |
| 9:58 | nattkort | du | 🌙 Dag 1 är slut. God natt. zzz… i en riktig säng Nitton år. Inget mer tjat. Gården är full av skräp. I morgon. DAGENS PRINTAR Nyckelring × 20 Blomkruka × 1 Sän |

<details><summary>Botens handlingar dag 1</summary>

- 0:12 gå till brädhögen (3 m) (5 kr)
- 0:29 gå till cykeln vid vägen (2 m) (5 kr)
- 0:44 gå till rutan i linje 1 (13 m) (5 kr)
- 1:28 gå till cykeln (lyfter den) (13 m) (5 kr)
- 1:34 gå till cykelns plats (11 m) (5 kr)
- 1:37 gå till skrivaren (2 m) (5 kr)
- 1:39 printar Nyckelring (5 kr)
- 1:46 tar ut 1 st ur skrivaren (5 kr)
- 1:56 printar Nyckelring (sista av storebrors rulle) (5 kr)
- 2:11 tar ut 1 st ur skrivaren (5 kr)
- 2:17 gå till Ali (26 m) (5 kr)
- 2:17 öppnar Alis butik – sälja de två nyckelringarna (5 kr)
- 2:19 säljer hos Ali: +30 kr (35 kr)
- 2:32 öppnar Alis butik – köpa kvarnen (35 kr)
- 2:34 köper gammalkvarn för 30 kr (5 kr)
- 2:35 köpte kvarnen (5 kr)
- 2:48 gå till kvarnens ruta (28 m) (5 kr)
- 3:00 plockar 3 skräp på gården (bär max 3) (5 kr)
- 3:03 gå till kvarnen (15 m) (5 kr)
- 3:16 gå till cykeln (2 m) (5 kr)
- 3:17 printar Nyckelring (5 kr)
- 3:23 tar ut 1 st ur skrivaren (5 kr)
- 3:31 printar Nyckelring (5 kr)
- 3:33 tar ut 1 st ur skrivaren (5 kr)
- 3:34 printar Nyckelring (5 kr)
- 3:36 tar ut 1 st ur skrivaren (5 kr)
- 3:47 gå till Ali (27 m) (5 kr)
- 3:47 öppnar Alis butik – sälja nyckelringar (5 kr)
- 3:49 säljer hos Ali: +45 kr (50 kr)
- 4:03 öppnar Alis butik – Ali (powerbanken) (50 kr)
- 4:23 gå till koppla powerbanken till cykeln (24 m) (50 kr)
- 4:37 tjänar pengar till väntar på flaskhalsen för grip: 50/90 kr → printar nyckelring (15 kr) (50 kr)
- 4:38 gå till skrivaren (2 m) (50 kr)
- 4:39 printar Nyckelring (50 kr)
- 4:42 tar ut 1 st ur skrivaren (50 kr)
- 4:43 printar Nyckelring (50 kr)
- 4:50 plockar 3 skräp på gården (bär max 3) (50 kr)
- 4:53 gå till kvarnen (18 m) (50 kr)
- 4:57 gå till skrivaren (3 m) (50 kr)
- 4:58 tar ut 1 st ur skrivaren (50 kr)
- 4:59 printar Nyckelring (50 kr)
- 5:02 tar ut 1 st ur skrivaren (50 kr)
- 5:07 gå till Ali (28 m) (50 kr)
- 5:07 öppnar Alis butik – sälja (50 kr)
- 5:09 säljer hos Ali: +45 kr (95 kr)
- 5:16 tjänar pengar till väntar på flaskhalsen för grip: 120/160 kr → printar nyckelring (15 kr) (120 kr)
- 5:21 gå till skrivaren (25 m) (120 kr)
- 5:23 printar Nyckelring (120 kr)
- 5:25 tar ut 1 st ur skrivaren (120 kr)
- 5:27 printar Nyckelring (120 kr)
- 5:29 tar ut 1 st ur skrivaren (120 kr)
- 5:31 printar Nyckelring (120 kr)
- 5:32 gå till cykeln (1 m) (120 kr)
- 5:34 tar ut 1 st ur skrivaren (120 kr)
- 5:39 gå till Ali (25 m) (120 kr)
- 5:39 öppnar Alis butik – sälja (120 kr)
- 5:41 säljer hos Ali: +45 kr (165 kr)
- 5:43 tjänar pengar till väntar på flaskhalsen för grip: 165/205 kr → printar nyckelring (15 kr) (165 kr)
- 5:48 gå till skrivaren (25 m) (165 kr)
- 5:49 printar Nyckelring (165 kr)
- 5:52 tar ut 1 st ur skrivaren (165 kr)
- 5:53 printar Nyckelring (165 kr)
- 5:56 tar ut 1 st ur skrivaren (165 kr)
- 5:57 printar Nyckelring (165 kr)
- 6:00 tar ut 1 st ur skrivaren (165 kr)
- 6:05 gå till Ali (25 m) (165 kr)
- 6:05 öppnar Alis butik – sälja (165 kr)
- 6:07 säljer hos Ali: +45 kr (210 kr)
- 6:09 tjänar pengar till väntar på flaskhalsen för grip: 210/250 kr → printar nyckelring (15 kr) (210 kr)
- 6:14 gå till skrivaren (25 m) (210 kr)
- 6:16 printar Nyckelring (210 kr)
- 6:18 tar ut 1 st ur skrivaren (210 kr)
- 6:20 printar Nyckelring (210 kr)
- 6:21 gå till cykeln (1 m) (210 kr)
- 6:23 tar ut 1 st ur skrivaren (210 kr)
- 6:24 printar Nyckelring (210 kr)
- 6:27 tar ut 1 st ur skrivaren (210 kr)
- 6:32 gå till Ali (25 m) (210 kr)
- 6:32 öppnar Alis butik – sälja (210 kr)
- 6:34 säljer hos Ali: +45 kr (255 kr)
- 6:36 tjänar pengar till väntar på flaskhalsen för grip: 255/295 kr → printar nyckelring (15 kr) (255 kr)
- 6:41 gå till skrivaren (25 m) (255 kr)
- 6:43 printar Nyckelring (255 kr)
- 6:45 tar ut 1 st ur skrivaren (255 kr)
- 6:47 printar Nyckelring (255 kr)
- 6:54 plockar 3 skräp på gården (bär max 3) (255 kr)
- 6:58 gå till kvarnen (18 m) (255 kr)
- 7:04 gå till skrivaren (3 m) (255 kr)
- 7:04 tar ut 1 st ur skrivaren (255 kr)
- 7:10 gå till Ali (28 m) (255 kr)
- 7:10 öppnar Alis butik – sälja (255 kr)
- 7:12 säljer hos Ali: +30 kr (285 kr)
- 7:12 tjänar pengar till väntar på flaskhalsen för grip: 285/295 kr → printar nyckelring (15 kr) (285 kr)
- 7:18 gå till skrivaren (25 m) (285 kr)
- 7:19 printar Nyckelring (285 kr)
- 7:22 tar ut 1 st ur skrivaren (285 kr)
- 7:27 gå till Ali (25 m) (285 kr)
- 7:27 öppnar Alis butik – sälja (285 kr)
- 7:28 säljer hos Ali: +15 kr (300 kr)
- 7:30 öppnar Alis butik – köpa skräpgrip (300 kr)
- 7:33 köper grip för 50 kr (250 kr)
- 7:42 gå till skrivaren (25 m) (250 kr)
- 7:44 printar Skräpgrip (250 kr)
- 7:45 gå till cykeln (1 m) (250 kr)
- 7:53 plockar 3 skräp på gården (bär max 3) (250 kr)
- 7:58 gå till kvarnen (23 m) (250 kr)
- 8:02 gå till skrivaren (3 m) (250 kr)
- 8:03 tar ut 1 st ur skrivaren (250 kr)
- 8:06 tar på grip (250 kr)
- 8:12 gå till Ali (28 m) (250 kr)
- 8:12 öppnar Alis butik – köpa receptet blomkruka (250 kr)
- 8:15 köper kruka för 40 kr (210 kr)
- 8:22 gå till skrivaren (25 m) (210 kr)
- 8:23 printar Blomkruka (210 kr)
- 8:35 plockar 6 skräp på gården (bär max 6) (210 kr)
- 8:41 gå till kvarnen (28 m) (210 kr)
- 8:44 gå till skrivaren (3 m) (210 kr)
- 8:45 tar ut 1 st ur skrivaren (210 kr)
- 8:50 gå till Ali (28 m) (210 kr)
- 8:50 öppnar Alis butik – sälja krukan (210 kr)
- 8:52 säljer hos Ali: +70 kr (280 kr)
- 9:03 öppnar Alis butik – köpa sängen (280 kr)
- 9:06 köper sang för 60 kr (220 kr)
- 9:17 gå till skrivaren (25 m) (220 kr)
- 9:18 printar Säng (220 kr)
- 9:20 gå till cykeln (1 m) (220 kr)
- 9:33 plockar 6 skräp på gården (bär max 6) (220 kr)
- 9:39 gå till kvarnen (26 m) (220 kr)
- 9:43 gå till skrivaren (1 m) (220 kr)
- 9:44 tar ut 1 st ur skrivaren (220 kr)
- 9:56 gå till sängplatsen i skjulet (21 m) (220 kr)

</details>

## Dag 2

| Tid | Källa | Vem | Text |
|---|---|---|---|
| 9:58 | vara | ali | kruka |
| 9:58 | händelse | malKlart | id=sov1 del=Dag 1 – Kom igång nasta=kopMotor |
| 9:58 | MÅL |  | Mal skräp, printa och sälj |
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
| 0:13 | sak | du | Vevandet tar på armarna. Ali har en motor till kvarnen. |
| 0:13 | pil |  | Mal skräp, printa och sälj |
| 0:13 | notis | tanke | 💭 Vevandet tar på armarna. Ali har en motor till kvarnen. |
| 0:13 | röst | du | Vevandet tar på armarna. Ali har en motor till kvarnen. · MÅL |
| 0:15 | väntar | ali | Ali här. Såg skylten. Stavningen är rätt. Det är mer än många. |
| 0:16 | händelse | printStart | sak=kruka |
| 0:18 | klar | du | Vevandet tar på armarna. Ali har en motor till kvarnen. |
| 0:20 | sak | notis:morgon | Ali vill ha idag: Blomkruka · +50 % |
| 0:20 | notis |  | Blomkruka · +50 % |
| 0:21 | toast | guld | ✅ |
| 0:21 | händelse | printKlar | sak=kruka n=2 |
| 0:21 | händelse | tagitUrPrint | sak=kruka n=1 |
| 0:21 | struken | kedja | kruka |
| 0:24 | klar | notis:morgon | Ali vill ha idag: Blomkruka · +50 % |
| 0:25 | väntar | foto | Egen säng |
| 0:25 | paket |  | tanke |
| 0:25 | tanke | du | Tänk att jag ska få sova i min egen säng. |
| 0:25 | väntar | du | Tänk att jag ska få sova i min egen säng. |
| 0:25 | hjälp | kontroll | R: Vrid innan du ställer ner |
| 0:26 | sak | notis:Första natten i en riktig säng. Jag prin | Första natten i en riktig säng. Jag printade den själv. |
| 0:26 | notis | dagbok | Första natten i en riktig säng. Jag printade den själv. |
| 0:27 | röst | ali | Min fru säger att jag bor här. Hon har rätt. · STORY |
| 0:27 | butiksbubbla | ali | Min fru säger att jag bor här. Hon har rätt. |
| 0:28 | klar | notis:Första natten i en riktig säng. Jag prin | Första natten i en riktig säng. Jag printade den själv. |
| 0:28 | aliSalt | ali | 105 |
| 0:28 | butiksbubbla | ali | Precis vad jag ville ha idag. 105 kr – med extra. |
| 0:29 | röst | ali | Precis det jag ville ha idag, min vän. · STORY |
| 0:38 | händelse | printStart | sak=kruka |
| 0:40 | sak | foto | Egen säng |
| 0:40 | foto | du | Egen säng |
| 0:40 | toast | guld | ✅ |
| 0:40 | händelse | printKlar | sak=kruka n=3 |
| 0:41 | händelse | tagitUrPrint | sak=kruka n=1 |
| 0:43 | klar | foto | Egen säng |
| 0:48 | aliSalt | ali | 105 |
| 0:51 | sak | du | Tänk att jag ska få sova i min egen säng. |
| 0:51 | notis | tanke | 💭 Tänk att jag ska få sova i min egen säng. |
| 0:51 | röst | du | Tänk att jag ska få sova i min egen säng. · STORY |
| 0:52 | skratt | du | falsk tuta |
| 0:53 | sopsack | rolf | Sopsäckarna landade på gården |
| 0:53 | paket |  | tanke → ge |
| 0:53 | tanke | du | Hmm, vad kastade gubben ut ur sopbilen? Jag går och kollar. |
| 0:53 | väntar | du | Hmm, vad kastade gubben ut ur sopbilen? Jag går och kollar. |
| 0:53 | väntar |  | (läget ändras) |
| 0:54 | klar | du | Tänk att jag ska få sova i min egen säng. |
| 0:56 | sak | du | Hmm, vad kastade gubben ut ur sopbilen? Jag går och kollar. |
| 0:56 | notis | tanke | 💭 Hmm, vad kastade gubben ut ur sopbilen? Jag går och kollar. |
| 0:56 | röst | du | Hmm, vad kastade gubben ut ur sopbilen? Jag går och kollar. · STORY |
| 1:01 | klar | du | Hmm, vad kastade gubben ut ur sopbilen? Jag går och kollar. |
| 1:03 | sak |  | (läget ändras) |
| 1:03 | klar |  | (läget ändras) |
| 1:05 | lapp | 📔 Dagbok | Sopbilen tippade en ny last. Allt det skräpet – och grinden är låst. |
| 1:05 | dagbokrad | du | Sopbilen tippade en ny last. Allt det skräpet – och grinden är låst. |
| 1:05 | väntar | notis:Sopbilen tippade en ny last. Allt det sk | Sopbilen tippade en ny last. Allt det skräpet – och grinden är låst. |
| 1:07 | sak | notis:Sopbilen tippade en ny last. Allt det sk | Sopbilen tippade en ny last. Allt det skräpet – och grinden är låst. |
| 1:07 | notis | dagbok | Sopbilen tippade en ny last. Allt det skräpet – och grinden är låst. |
| 1:10 | klar | notis:Sopbilen tippade en ny last. Allt det sk | Sopbilen tippade en ny last. Allt det skräpet – och grinden är låst. |
| 1:44 | struken | ali | Ali här. Såg skylten. Stavningen är rätt. Det är mer än många. |
| 2:13 | väntar | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått generator. Vi tar en låt på det. Den här är till dig, Gunnar. |
| 2:13 | radio | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått generator. Vi tar en låt på det. Den här är till dig, Gunnar. |
| 2:13 | skratt | du | Radio-Kjelle |
| 2:13 | sak | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått generator. Vi tar en låt på det. Den här är till dig, Gunnar. |
| 2:13 | notis |  | 📻 Radio Tippen: Radio Tippen, Kjelle här. Skjulet vid tippen har fått generator. Vi tar en låt på det. Den här är till dig, Gunnar. |
| 2:13 | röst | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått generator. Vi tar en låt på det. Den här är till dig, Gunnar. · REAKTION |
| 2:23 | klar | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått generator. Vi tar en låt på det. Den här är till dig, Gunnar. |
| 3:00 | väntar | info:guld | 🚛 Sopbilen tippade en ny last på soptippen! |
| 3:00 | sak | info:guld | 🚛 Sopbilen tippade en ny last på soptippen! |
| 3:00 | kvitto-visas | info:guld | 🚛 Sopbilen tippade en ny last på soptippen! |
| 3:00 | toast | guld | 🚛 Sopbilen tippade en ny last på soptippen! |
| 3:02 | klar | info:guld | 🚛 Sopbilen tippade en ny last på soptippen! |
| 3:07 | skratt | du | falsk tuta |
| 3:07 | väntar | värld:TUUT! Tjena! | TUUT! Tjena! |
| 3:10 | upplåst | mala | kvarnmotor |
| 3:10 | brott | RESERV | kvarnmotor (mala 10 av 6) |
| 3:10 | händelse | upplast | id=kvarnmotor flask=mala |
| 3:10 | paket |  | sms |
| 3:10 | väntar | ali | Ali här. En motor? Jag har en. Från en gammal tvättmaskin. Den centrifugerar fortfarande om man ber snällt. |
| 3:15 | väntar | mamma | Har du frusit än? |
| 3:15 | sak | värld:TUUT! Tjena! | TUUT! Tjena! |
| 3:15 | bubbla |  | TUUT! Tjena! |
| 3:17 | händelse | printStart | sak=kruka |
| 3:18 | klar | värld:TUUT! Tjena! | TUUT! Tjena! |
| 3:19 | toast | fel | Ingen ström – trampa cykeln |
| 3:22 | toast | guld | ✅ |
| 3:22 | händelse | printKlar | sak=kruka n=4 |
| 3:22 | händelse | tagitUrPrint | sak=kruka n=1 |
| 3:23 | hjälp | kontroll | R: Vrid innan du ställer ner |
| 3:26 | sak | ali | Ali här. En motor? Jag har en. Från en gammal tvättmaskin. Den centrifugerar fortfarande om man ber snällt. |
| 3:26 | sms | ali | Ali här. En motor? Jag har en. Från en gammal tvättmaskin. Den centrifugerar fortfarande om man ber snällt. |
| 3:26 | sms-bubbla | ali | Ali här. En motor? Jag har en. Från en gammal tvättmaskin. Den centrifugerar fortfarande om man ber snällt. |
| 3:26 | röst | ali | Ali här. En motor? Jag har en. Från en gammal tvättmaskin. Den centrifugerar fortfarande om man ber snällt. · STORY |
| 3:30 | aliSalt | ali | 105 |
| 3:35 | klar | ali | Ali här. En motor? Jag har en. Från en gammal tvättmaskin. Den centrifugerar fortfarande om man ber snällt. |
| 3:39 | struken | info:guld | 3D-modell köpt – printa kvarnmotor |
| 3:39 | händelse | kopt | sak=kvarnmotor |
| 3:40 | händelse | malKlart | id=kopMotor del=Dag 2 – Tippen bredvid nasta=monteraMotor |
| 3:40 | struken | kedja | motorKopt |
| 3:40 | väntar | du | Motorn ska sitta där veven sitter. Jag printar den först. |
| 3:40 | målruta |  | Printa kvarnmotorn till kvarnen |
| 3:40 | MÅL |  | Printa kvarnmotorn till kvarnen |
| 3:41 | sak | du | Motorn ska sitta där veven sitter. Jag printar den först. |
| 3:41 | pil |  | Printa kvarnmotorn till kvarnen |
| 3:41 | notis | tanke | 💭 Motorn ska sitta där veven sitter. Jag printar den först. |
| 3:41 | röst | du | Motorn ska sitta där veven sitter. Jag printar den först. · MÅL |
| 3:41 | nick |  | nick:22 |
| 3:44 | kvittens-bock |  | ✓ Köp kvarnmotorn hos Ali (50 kr) |
| 3:45 | klar | du | Motorn ska sitta där veven sitter. Jag printar den först. |
| 3:54 | händelse | printStart | sak=byggsats:kvarnmotor |
| 3:57 | händelse | printKlar | sak=byggsats:kvarnmotor n=1 |
| 3:57 | toast | guld | ✅ |
| 3:57 | väntar | info:guld | ⚙️ Kvarnmotorn ska skruvas fast på kvarnen. |
| 3:57 | händelse | tagitUrPrint | sak=byggsats:kvarnmotor n=1 |
| 3:57 | paket |  | sms |
| 3:57 | väntar | ali | Ali här. Ännu en ritning som blev på riktigt: Kvarnmotor. Semesterkassan växer. Livet växer. |
| 3:57 | sak | info:guld | ⚙️ Kvarnmotorn ska skruvas fast på kvarnen. |
| 3:57 | kvitto-visas | info:guld | ⚙️ Kvarnmotorn ska skruvas fast på kvarnen. |
| 3:57 | toast | guld | ⚙️ Kvarnmotorn ska skruvas fast på kvarnen. |
| 3:59 | klar | info:guld | ⚙️ Kvarnmotorn ska skruvas fast på kvarnen. |
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
| 4:02 | struken | du | Motorn sitter där veven satt. Mina armar tackar. |
| 4:02 | väntar | du | Gården är full av skräp. Jag börjar vid skjulet. |
| 4:02 | MÅL |  | Kolla vad som flög ut från sopbilen |
| 4:04 | klar | info:guld | ⚙️ Motorn sitter där veven satt – nu mal kvarnen själv. |
| 4:04 | målruta |  | Kolla vad som flög ut från sopbilen |
| 4:06 | kvittens-bock |  | ✓ Printa kvarnmotorn till kvarnen |
| 4:06 | sak | du | Gården är full av skräp. Jag börjar vid skjulet. |
| 4:06 | pil |  | Kolla vad som flög ut från sopbilen |
| 4:06 | notis | tanke | 💭 Gården är full av skräp. Jag börjar vid skjulet. |
| 4:06 | röst | du | Gården är full av skräp. Jag börjar vid skjulet. · MÅL |
| 4:10 | klar | du | Gården är full av skräp. Jag börjar vid skjulet. |
| 4:15 | paket |  | brev → ge → tanke |
| 4:15 | väntar | rolf | Du sliter ju. Ingen gör så nuförtin. Ta dessa så går dä lättare. / grannen – ja kör sopbilen å har hand om tippen bredvid. MVH ROLF​ |
| 4:15 | väntar |  | (läget ändras) |
| 4:15 | tanke | du | Rolf… gubben i sopbilen. Han har tippen bredvid. Han verkar schysst. |
| 4:15 | okänt ord bytt | du | Rolf… gubben i sopbilen. Han har tippen bredvid. Han verkar schysst. |
| 4:15 | väntar | du | Rolf… gubben i sopbilen. Han har tippen bredvid. Han verkar schysst. |
| 4:15 | sak | rolf | Du sliter ju. Ingen gör så nuförtin. Ta dessa så går dä lättare. / grannen – ja kör sopbilen å har hand om tippen bredvid. MVH ROLF​ |
| 4:15 | lapp | Lapp från Rolf | Du sliter ju. Ingen gör så nuförtin. Ta dessa så går dä lättare. / grannen – ja kör sopbilen å har hand om tippen bredvid. MVH ROLF​ |
| 4:15 | röst | rolf | Du sliter ju. Ingen gör så nuförtin. Ta dessa så går dä lättare. / grannen – ja kör sopbilen å har hand om tippen bredvid. MVH ROLF​ · STORY |
| 4:25 | hjälp | kontroll | Klick: Klicka för att ta på dig den |
| 4:26 | klar | rolf | Du sliter ju. Ingen gör så nuförtin. Ta dessa så går dä lättare. / grannen – ja kör sopbilen å har hand om tippen bredvid. MVH ROLF​ |
| 4:28 | väntar | info:guld | 🗑️ Sopsäcken är över axeln! Nu bär jag 10 skräp. |
| 4:28 | tog på | du | byggsats:korg |
| 4:28 | händelse | monterat | sak=korg |
| 4:28 | sak | info:guld | 🗑️ Sopsäcken är över axeln! Nu bär jag 10 skräp. |
| 4:28 | kvitto-visas | info:guld | 🗑️ Sopsäcken är över axeln! Nu bär jag 10 skräp. |
| 4:28 | toast | guld | 🗑️ Sopsäcken är över axeln! Nu bär jag 10 skräp. |
| 4:28 | händelse | malKlart | id=kopSack del=Dag 2 – Tippen bredvid nasta=n1-stada-klart-garden |
| 4:28 | händelse | malKlart | id=n1-stada-klart-garden del=Dag 2 – Tippen bredvid nasta=rolf0-brev |
| 4:28 | väntar | du | Gården är STÄDAD, av mig, frivilligt. Mamma skulle aldrig tro det. |
| 4:28 | väntar | du | Vänta på sopbilen. Den lämnar något. |
| 4:28 | MÅL |  | Vänta på sopbilen. Den lämnar något. |
| 4:30 | klar | info:guld | 🗑️ Sopsäcken är över axeln! Nu bär jag 10 skräp. |
| 4:30 | sak | du | Gården är STÄDAD, av mig, frivilligt. Mamma skulle aldrig tro det. |
| 4:30 | kvitto-visas | du | Gården är STÄDAD, av mig, frivilligt. Mamma skulle aldrig tro det. |
| 4:30 | lapp | 📔 Dagbok | Gården är STÄDAD, av mig, frivilligt. Mamma skulle aldrig tro det. |
| 4:30 | dagbokrad | du | Gården är STÄDAD, av mig, frivilligt. Mamma skulle aldrig tro det. |
| 4:30 | notis | dagbok | Gården är STÄDAD, av mig, frivilligt. Mamma skulle aldrig tro det. |
| 4:30 | klar | du | Gården är STÄDAD, av mig, frivilligt. Mamma skulle aldrig tro det. |
| 4:30 | målruta |  | Vänta på sopbilen. Den lämnar något. |
| 4:31 | sak | du | Vänta på sopbilen. Den lämnar något. |
| 4:31 | pil |  | Vänta på sopbilen. Den lämnar något. |
| 4:31 | röst | du | Vänta på sopbilen. Den lämnar något. · MÅL |
| 4:33 | händelse | printStart | sak=kruka |
| 4:34 | klar | du | Vänta på sopbilen. Den lämnar något. |
| 4:34 | toast | fel | Ingen ström – trampa cykeln |
| 4:34 | väntar | notis:Storebrors skrivare: Ingen ström – tramp | Storebrors skrivare: Ingen ström – trampa cykeln |
| 4:36 | sak |  | (läget ändras) |
| 4:36 | klar |  | (läget ändras) |
| 4:36 | toast | guld | ✅ |
| 4:36 | händelse | printKlar | sak=kruka n=5 |
| 4:36 | händelse | tagitUrPrint | sak=kruka n=1 |
| 4:40 | sak | du | Rolf… gubben i sopbilen. Han har tippen bredvid. Han verkar schysst. |
| 4:40 | notis | tanke | 💭 Rolf… gubben i sopbilen. Han har tippen bredvid. Han verkar schysst. |
| 4:40 | röst | du | Rolf… gubben i sopbilen. Han har tippen bredvid. Han verkar schysst. · STORY |
| 4:43 | hjälp | kontroll | R: Vrid innan du ställer ner |
| 4:43 | aliSalt | ali | 105 |
| 4:45 | klar | du | Rolf… gubben i sopbilen. Han har tippen bredvid. Han verkar schysst. |
| 4:48 | paket |  | tanke → ge |
| 4:48 | tanke | du | Flaggan är uppe. Rolf har lämnat något. |
| 4:48 | väntar | du | Flaggan är uppe. Rolf har lämnat något. |
| 4:48 | väntar |  | (läget ändras) |
| 4:49 | skratt | du | falsk tuta |
| 4:53 | sak | ali | Ali här. Ännu en ritning som blev på riktigt: Kvarnmotor. Semesterkassan växer. Livet växer. |
| 4:53 | sms | ali | Ali här. Ännu en ritning som blev på riktigt: Kvarnmotor. Semesterkassan växer. Livet växer. |
| 4:53 | sms-bubbla | ali | Ali här. Ännu en ritning som blev på riktigt: Kvarnmotor. Semesterkassan växer. Livet växer. |
| 4:53 | röst | ali | Ali här. Ännu en ritning som blev på riktigt: Kvarnmotor. Semesterkassan växer. Livet växer. · REAKTION |
| 4:54 | händelse | printStart | sak=kruka |
| 4:57 | toast | guld | ✅ |
| 4:57 | händelse | printKlar | sak=kruka n=6 |
| 5:01 | klar | ali | Ali här. Ännu en ritning som blev på riktigt: Kvarnmotor. Semesterkassan växer. Livet växer. |
| 5:03 | struken | notis:Storebrors skrivare: Ingen ström – tramp | Storebrors skrivare: Ingen ström – trampa cykeln |
| 5:22 | sak | du | Flaggan är uppe. Rolf har lämnat något. |
| 5:22 | notis | tanke | 💭 Flaggan är uppe. Rolf har lämnat något. |
| 5:22 | röst | du | Flaggan är uppe. Rolf har lämnat något. · STORY |
| 5:23 | händelse | tagitUrPrint | sak=kruka n=1 |
| 5:23 | upplåst | skrivare | rullstall |
| 5:23 | brott | UPPLÅST | rullstall (skrivare 173 av 60) |
| 5:23 | händelse | upplast | id=rullstall flask=skrivare |
| 5:23 | paket |  | tanke → sms |
| 5:23 | tanke | du | Kvarnen står och väntar för att hållaren är full. Om den rymde fler rullar kunde den mala hela tiden. |
| 5:23 | väntar | du | Kvarnen står och väntar för att hållaren är full. Om den rymde fler rullar kunde den mala hela tiden. |
| 5:23 | väntar | ali | Ali här. Rullställ. Fyra rullar i stället för en. Har ett på hyllan. |
| 5:26 | klar | du | Flaggan är uppe. Rolf har lämnat något. |
| 5:28 | sak | du | Kvarnen står och väntar för att hållaren är full. Om den rymde fler rullar kunde den mala hela tiden. |
| 5:28 | notis | tanke | 💭 Kvarnen står och väntar för att hållaren är full. Om den rymde fler rullar kunde den mala hela tiden. |
| 5:28 | röst | du | Kvarnen står och väntar för att hållaren är full. Om den rymde fler rullar kunde den mala hela tiden. · STORY |
| 5:31 | aliSalt | ali | 105 |
| 5:36 | klar | du | Kvarnen står och väntar för att hållaren är full. Om den rymde fler rullar kunde den mala hela tiden. |
| 5:44 | sak |  | (läget ändras) |
| 5:44 | brev | rolf | rolf:0 |
| 5:44 | klar |  | (läget ändras) |
| 5:45 | väntar | rolf | Såg att du printar grejer. Kan du göra en sån hä? Kall öl ä viktigt. /Rolf​ |
| 5:45 | paket |  | ge |
| 5:45 | väntar |  | (läget ändras) |
| 5:45 | händelse | malKlart | id=rolf0-brev del=Dag 2 – Tippen bredvid nasta=rolf0-printa |
| 5:45 | väntar | du | Printa ölhållare med kylklamp. |
| 5:45 | målruta |  | Printa ölhållare med kylklamp |
| 5:45 | MÅL |  | Printa ölhållare med kylklamp |
| 5:45 | sak | du | Printa ölhållare med kylklamp. |
| 5:45 | pil |  | Printa ölhållare med kylklamp |
| 5:45 | röst | du | Printa ölhållare med kylklamp. · MÅL |
| 5:45 | nick |  | nick:26 |
| 5:47 | klar | du | Printa ölhållare med kylklamp. |
| 5:48 | händelse | printStart | sak=olhallare |
| 5:48 | händelse | malKlart | id=rolf0-printa del=Dag 2 – Tippen bredvid nasta=rolf0-ge |
| 5:48 | väntar | du | Ge Rolf ölhållare med kylklamp. |
| 5:48 | MÅL |  | Ge Rolf ölhållare med kylklamp |
| 5:49 | kvittens-bock |  | ✓ Läs brevet i Rolfs postlåda |
| 5:49 | toast | fel | Ingen ström – trampa cykeln |
| 5:49 | sak | du | Ge Rolf ölhållare med kylklamp. |
| 5:49 | målruta |  | Ge Rolf ölhållare med kylklamp |
| 5:49 | pil |  | Ge Rolf ölhållare med kylklamp |
| 5:49 | röst | du | Ge Rolf ölhållare med kylklamp. · MÅL |
| 5:52 | klar | du | Ge Rolf ölhållare med kylklamp. |
| 5:52 | kvittens-bock |  | ✓ Printa ölhållare med kylklamp |
| 5:52 | toast | guld | ✅ |
| 5:52 | händelse | printKlar | sak=olhallare n=1 |
| 5:53 | händelse | tagitUrPrint | sak=olhallare n=1 |
| 5:53 | väntar | bud | (tips) |
| 5:54 | sak | bud | (tips) |
| 5:54 | väntar | du | Klart! Nu lägger jag den i Rolfs brevlåda vid grinden. |
| 5:55 | klar | bud | (tips) |
| 5:57 | sak | du | Klart! Nu lägger jag den i Rolfs brevlåda vid grinden. |
| 5:57 | röst | du | Klart! Nu lägger jag den i Rolfs brevlåda vid grinden. · MÅL |
| 6:02 | klar | du | Klart! Nu lägger jag den i Rolfs brevlåda vid grinden. |
| 6:04 | sak | rolf | Såg att du printar grejer. Kan du göra en sån hä? Kall öl ä viktigt. /Rolf​ |
| 6:04 | lapp | Brev från Rolf | Såg att du printar grejer. Kan du göra en sån hä? Kall öl ä viktigt. /Rolf​ |
| 6:04 | röst | rolf | Såg att du printar grejer. Kan du göra en sån hä? Kall öl ä viktigt. /Rolf​ · STORY |
| 6:08 | händelse | lagtIPostlada | sak=olhallare rolf=0 jobb=false |
| 6:08 | struken | kedja | rolf0 |
| 6:08 | paket |  | tanke |
| 6:08 | tanke | du | Flaggan uppe. Nu får Rolf hämta den. |
| 6:08 | väntar | du | Flaggan uppe. Nu får Rolf hämta den. |
| 6:08 | händelse | malKlart | id=rolf0-ge del=Dag 2 – Tippen bredvid nasta=vindsnurra |
| 6:08 | struken | du | Flaggan uppe. Nu får Rolf hämta den. |
| 6:08 | väntar | du | En vindsnurra på skjulets tak. Då blir det ström när det blåser. |
| 6:08 | MÅL |  | Trampa, printa och sälj |
| 6:10 | klar | rolf | Såg att du printar grejer. Kan du göra en sån hä? Kall öl ä viktigt. /Rolf​ |
| 6:10 | händelse | brevLast | id=rolf:0 |
| 6:10 | målruta |  | Trampa, printa och sälj |
| 6:12 | kvittens-bock |  | ✓ Ge Rolf ölhållare med kylklamp |
| 6:12 | sak | du | En vindsnurra på skjulets tak. Då blir det ström när det blåser. |
| 6:12 | pil |  | Trampa, printa och sälj |
| 6:12 | notis | tanke | 💭 En vindsnurra på skjulets tak. Då blir det ström när det blåser. |
| 6:12 | röst | du | En vindsnurra på skjulets tak. Då blir det ström när det blåser. · MÅL |
| 6:18 | klar | du | En vindsnurra på skjulets tak. Då blir det ström när det blåser. |
| 6:20 | sak |  | (läget ändras) |
| 6:20 | klar |  | (läget ändras) |
| 6:23 | händelse | printStart | sak=kruka |
| 6:26 | sak | ali | Ali här. Rullställ. Fyra rullar i stället för en. Har ett på hyllan. |
| 6:26 | sms | ali | Ali här. Rullställ. Fyra rullar i stället för en. Har ett på hyllan. |
| 6:26 | sms-bubbla | ali | Ali här. Rullställ. Fyra rullar i stället för en. Har ett på hyllan. |
| 6:26 | röst | ali | Ali här. Rullställ. Fyra rullar i stället för en. Har ett på hyllan. · STORY |
| 6:26 | paket |  | tanke |
| 6:26 | tanke | du | Den blev… spagetti. Ali kallar det modern konst. |
| 6:26 | väntar | du | Den blev… spagetti. Ali kallar det modern konst. |
| 6:26 | skratt | du | plastspagetti |
| 6:26 | toast | guld | ✅ |
| 6:26 | händelse | printKlar | sak=kruka n=7 |
| 6:26 | händelse | tagitUrPrint | sak=spagetti n=1 |
| 6:27 | hjälp | kontroll | E: Ryggsäcken och kistan |
| 6:29 | upplåst | skrivare | trim_skrivare |
| 6:29 | brott | UPPLÅST | trim_skrivare (skrivare 60 av 60) |
| 6:29 | händelse | upplast | id=trim_skrivare flask=skrivare |
| 6:29 | paket |  | sms |
| 6:29 | väntar | ali | Ali här. Skrivartrim. Jag skruvade på min egen skrivare i natt. Den går fortare nu. Nästan för fort. |
| 6:31 | klar | ali | Ali här. Rullställ. Fyra rullar i stället för en. Har ett på hyllan. |
| 6:32 | röst | ali | Rolf gav mig en kanna. Som min farmors. Jag ritade en sak åt honom. Säg inget, han gråter lätt. · STORY |
| 6:32 | butiksbubbla | ali | Rolf gav mig en kanna. Som min farmors. Jag ritade en sak åt honom. Säg inget, han gråter lätt. |
| 6:33 | skratt | du | Ali köper konst |
| 6:33 | aliSalt | ali | 3 |
| 6:41 | händelse | printStart | sak=kruka |
| 6:46 | toast | guld | ✅ |
| 6:46 | händelse | printKlar | sak=kruka n=8 |
| 6:46 | händelse | tagitUrPrint | sak=kruka n=1 |
| 6:46 | sak | du | Den blev… spagetti. Ali kallar det modern konst. |
| 6:46 | notis | tanke | 💭 Den blev… spagetti. Ali kallar det modern konst. |
| 6:46 | röst | du | Den blev… spagetti. Ali kallar det modern konst. · REAKTION |
| 6:50 | klar | du | Den blev… spagetti. Ali kallar det modern konst. |
| 6:52 | paket |  | tanke |
| 6:52 | tanke | du | Jaha, Rolf har hämtat en ölhållare med kylklamp. |
| 6:52 | väntar | du | Jaha, Rolf har hämtat en ölhållare med kylklamp. |
| 6:53 | aliSalt | ali | 105 |
| 6:54 | sak | du | Jaha, Rolf har hämtat en ölhållare med kylklamp. |
| 6:54 | notis | tanke | 💭 Jaha, Rolf har hämtat en ölhållare med kylklamp. |
| 6:54 | röst | du | Jaha, Rolf har hämtat en ölhållare med kylklamp. · REAKTION |
| 6:58 | klar | du | Jaha, Rolf har hämtat en ölhållare med kylklamp. |
| 7:07 | händelse | printStart | sak=kruka |
| 7:07 | skratt | du | däcket rullar iväg |
| 7:07 | paket |  | tanke |
| 7:07 | tanke | du | Däcket ville inte stanna. Jag förstår det. |
| 7:07 | väntar | du | Däcket ville inte stanna. Jag förstår det. |
| 7:07 | sak | du | Däcket ville inte stanna. Jag förstår det. |
| 7:07 | notis | tanke | 💭 Däcket ville inte stanna. Jag förstår det. |
| 7:07 | röst | du | Däcket ville inte stanna. Jag förstår det. · REAKTION |
| 7:09 | toast | guld | ✅ |
| 7:09 | händelse | printKlar | sak=kruka n=9 |
| 7:10 | händelse | tagitUrPrint | sak=kruka n=1 |
| 7:10 | paket |  | tanke |
| 7:10 | tanke | du | Jaha. En kalsong. Använd. |
| 7:10 | väntar | du | Jaha. En kalsong. Använd. |
| 7:10 | skratt | du | kvarnen spottar |
| 7:11 | klar | du | Däcket ville inte stanna. Jag förstår det. |
| 7:13 | sak | du | Jaha. En kalsong. Använd. |
| 7:13 | notis | tanke | 💭 Jaha. En kalsong. Använd. |
| 7:13 | röst | du | Jaha. En kalsong. Använd. · REAKTION |
| 7:14 | skratt | du | falsk tuta |
| 7:15 | klar | du | Jaha. En kalsong. Använd. |
| 7:17 | aliSalt | ali | 105 |
| 7:25 | sak | ali | Ali här. Skrivartrim. Jag skruvade på min egen skrivare i natt. Den går fortare nu. Nästan för fort. |
| 7:25 | sms | ali | Ali här. Skrivartrim. Jag skruvade på min egen skrivare i natt. Den går fortare nu. Nästan för fort. |
| 7:25 | sms-bubbla | ali | Ali här. Skrivartrim. Jag skruvade på min egen skrivare i natt. Den går fortare nu. Nästan för fort. |
| 7:25 | röst | ali | Ali här. Skrivartrim. Jag skruvade på min egen skrivare i natt. Den går fortare nu. Nästan för fort. · STORY |
| 7:26 | händelse | printStart | sak=kruka |
| 7:27 | toast | fel | Ingen ström – trampa cykeln |
| 7:28 | upplåst | trampa | vindsnurra |
| 7:28 | brott | UPPLÅST | vindsnurra (trampa 27 av 6) |
| 7:28 | händelse | upplast | id=vindsnurra flask=trampa |
| 7:28 | paket |  | tanke → sms |
| 7:28 | tanke | du | Mina ben är slut. Det blåser hela tiden här ute. Tänk om vinden kunde trampa åt mig. |
| 7:28 | väntar | du | Mina ben är slut. Det blåser hela tiden här ute. Tänk om vinden kunde trampa åt mig. |
| 7:28 | väntar | ali | Ali här. Vindsnurra till cykeln. Vinden trampar åt dig. Den är lat, men den jobbar gratis. |
| 7:30 | toast | guld | ✅ |
| 7:30 | händelse | printKlar | sak=kruka n=10 |
| 7:30 | händelse | tagitUrPrint | sak=kruka n=1 |
| 7:33 | klar | ali | Ali här. Skrivartrim. Jag skruvade på min egen skrivare i natt. Den går fortare nu. Nästan för fort. |
| 7:38 | aliSalt | ali | 105 |
| 7:42 | struken | info:guld | 3D-modell köpt – printa vindsnurra till skjultaket |
| 7:42 | händelse | kopt | sak=vindsnurra |
| 7:42 | struken | ali | Ali här. Vindsnurra till cykeln. Vinden trampar åt dig. Den är lat, men den jobbar gratis. |
| 7:43 | sak | du | Mina ben är slut. Det blåser hela tiden här ute. Tänk om vinden kunde trampa åt mig. |
| 7:43 | notis | tanke | 💭 Mina ben är slut. Det blåser hela tiden här ute. Tänk om vinden kunde trampa åt mig. |
| 7:43 | röst | du | Mina ben är slut. Det blåser hela tiden här ute. Tänk om vinden kunde trampa åt mig. · STORY |
| 7:50 | klar | du | Mina ben är slut. Det blåser hela tiden här ute. Tänk om vinden kunde trampa åt mig. |
| 7:50 | händelse | printStart | sak=byggsats:vindsnurra |
| 7:56 | händelse | printKlar | sak=byggsats:vindsnurra n=1 |
| 7:56 | toast | guld | ✅ |
| 7:57 | väntar | info:guld | 🌬️ Vindsnurran ska upp på skjulets tak. |
| 7:57 | händelse | tagitUrPrint | sak=byggsats:vindsnurra n=1 |
| 7:57 | sak | info:guld | 🌬️ Vindsnurran ska upp på skjulets tak. |
| 7:57 | kvitto-visas | info:guld | 🌬️ Vindsnurran ska upp på skjulets tak. |
| 7:57 | toast | guld | 🌬️ Vindsnurran ska upp på skjulets tak. |
| 7:59 | klar | info:guld | 🌬️ Vindsnurran ska upp på skjulets tak. |
| 8:05 | händelse | placerat | sak=vindsnurra |
| 8:05 | kvittens | du | Den snurrar! Långsamt. Men den snurrar. |
| 8:05 | varför-köad | du | Om det regnar i natt drunknar jag. Ett tak. |
| 8:05 | väntar | du | Den snurrar! Långsamt. Men den snurrar. |
| 8:05 | väntar | info:guld | 🌬️ Vindsnurran sitter på taket – den trampar cykeln åt mig när det blåser |
| 8:05 | monterat | du | byggsats:vindsnurra |
| 8:05 | händelse | monterat | sak=vindsnurra |
| 8:05 | sak | du | Den snurrar! Långsamt. Men den snurrar. |
| 8:05 | notis | tanke | 💭 Den snurrar! Långsamt. Men den snurrar. |
| 8:05 | röst | du | Den snurrar! Långsamt. Men den snurrar. · STORY |
| 8:05 | händelse | malKlart | id=vindsnurra del=Dag 2 – Tippen bredvid nasta=n1-bygg-dorr-skjulet |
| 8:05 | väntar | du | Det drar från dörrhålet. En dörr kan jag printa. |
| 8:05 | MÅL |  | Bygg en dörr till skjulet |
| 8:08 | målruta |  | Bygg en dörr till skjulet |
| 8:08 | klar | du | Den snurrar! Långsamt. Men den snurrar. |
| 8:11 | sak | du | Det drar från dörrhålet. En dörr kan jag printa. |
| 8:11 | pil |  | Bygg en dörr till skjulet |
| 8:11 | notis | tanke | 💭 Det drar från dörrhålet. En dörr kan jag printa. |
| 8:11 | röst | du | Det drar från dörrhålet. En dörr kan jag printa. · MÅL |
| 8:11 | nick |  | nick:29 |
| 8:14 | struken | info:guld | 3D-modell köpt – printa dörr |
| 8:14 | händelse | kopt | sak=dorr |
| 8:15 | klar | du | Det drar från dörrhålet. En dörr kan jag printa. |
| 8:16 | struken | info:guld | 🌬️ Vindsnurran sitter på taket – den trampar cykeln åt mig när det blåser |
| 8:23 | händelse | printStart | sak=byggsats:dorr |
| 8:26 | toast | bra | Del 1 av 2 klar |
| 8:26 | väntar | notis:Storebrors skrivare: Del 1 av 2 klar | Storebrors skrivare: Del 1 av 2 klar |
| 8:27 | sak | notis:Storebrors skrivare: Del 1 av 2 klar | Storebrors skrivare: Del 1 av 2 klar |
| 8:27 | notis | bra | Storebrors skrivare: Del 1 av 2 klar |
| 8:29 | klar | notis:Storebrors skrivare: Del 1 av 2 klar | Storebrors skrivare: Del 1 av 2 klar |
| 8:30 | händelse | printKlar | sak=byggsats:dorr n=1 |
| 8:30 | toast | guld | ✅ |
| 9:00 | händelse | tagitUrPrint | sak=byggsats:dorr n=1 |
| 9:00 | paket |  | sms |
| 9:00 | väntar | ali | Ali här. Jag har inte sovit. Inte på grund av AI:n. På grund av dig. Du bygger saker av sopor. Jag har en hel butik och bygger ingenting. Det ska ändras. Kanske. Troligen. |
| 9:02 | scenInfo | gard | Lite skräp ramlade av flaket på gården |
| 9:05 | väntar | info:guld | Dörr på plats! Trivsel +8 |
| 9:05 | sak | info:guld | Dörr på plats! Trivsel +8 |
| 9:05 | kvitto-visas | info:guld | Dörr på plats! Trivsel +8 |
| 9:05 | toast | guld | Dörr på plats! Trivsel +8 |
| 9:05 | händelse | malKlart | id=n1-bygg-dorr-skjulet del=Dag 2 – Tippen bredvid nasta=sov2 |
| 9:05 | paket |  | lapp |
| 9:05 | väntar | du | Nu vet Ali att jag bor HÄR. Taket läcker. I morgon. |
| 9:05 | paket |  | sms |
| 9:05 | väntar | bror | Mamma ringde mig fyra gånger förresten. Snyggt jobbat 😂 |
| 9:05 | skratt | bror | Mamma ringde mig fyra gånger förresten. |
| 9:05 | väntar | du | Klart för idag – sov när du vill. |
| 9:05 | MÅL |  | Klart för idag – sov när du vill |
| 9:07 | klar | info:guld | Dörr på plats! Trivsel +8 |
| 9:07 | målruta |  | Klart för idag – sov när du vill |
| 9:09 | kvittens-bock |  | ✓ Bygg en dörr till skjulet |
| 9:09 | sak | du | Klart för idag – sov när du vill. |
| 9:09 | pil |  | Klart för idag – sov när du vill |
| 9:09 | röst | du | Klart för idag – sov när du vill. · MÅL |
| 9:12 | klar | du | Klart för idag – sov när du vill. |
| 9:12 | väntar | notis:🌇 Klockan är 21. Ali slår igen luckan.  | 🌇 Klockan är 21. Ali slår igen luckan. Dagens jobb är klart – gå in i skjulet och sov i sängen. |
| 9:14 | sak | du | Nu vet Ali att jag bor HÄR. Taket läcker. I morgon. |
| 9:14 | kvallsrad | du | Nu vet Ali att jag bor HÄR. Taket läcker. I morgon. |
| 9:14 | klar | du | Nu vet Ali att jag bor HÄR. Taket läcker. I morgon. |
| 9:19 | nattkort | du | 🌙 Dag 2 är slut. God natt. zzz… Nu vet Ali att jag bor HÄR. Taket läcker. I morgon. DAGENS PRINTAR Blomkruka × 9 Ölhållare med kylklamp × 1 Totalt 10 printar � |

<details><summary>Botens handlingar dag 2</summary>

- 0:00 — dag 2 börjar — (220 kr)
- 0:08 popup: "FORTSÄTT" (220 kr)
- 0:11 tjänar pengar till väntar på flaskhalsen för kvarnmotor: 220/260 kr → printar blomkruka (105 kr) (220 kr)
- 0:15 gå till skrivaren (19 m) (220 kr)
- 0:16 printar Blomkruka (220 kr)
- 0:19 gå till cykeln (2 m) (220 kr)
- 0:22 tar ut 1 st ur skrivaren (220 kr)
- 0:27 gå till Ali (26 m) (220 kr)
- 0:27 öppnar Alis butik – sälja (220 kr)
- 0:29 säljer hos Ali: +105 kr (325 kr)
- 0:31 tjänar pengar till väntar på flaskhalsen för kvarnmotor: 325/365 kr → printar blomkruka (105 kr) (325 kr)
- 0:36 gå till skrivaren (25 m) (325 kr)
- 0:38 printar Blomkruka (325 kr)
- 0:41 tar ut 1 st ur skrivaren (325 kr)
- 0:46 gå till Ali (25 m) (325 kr)
- 0:46 öppnar Alis butik – sälja (325 kr)
- 0:48 säljer hos Ali: +105 kr (430 kr)
- 0:50 tjänar pengar till väntar på flaskhalsen för kvarnmotor: 430/470 kr → printar blomkruka (105 kr) (430 kr)
- 1:01 plockar 6 skräp på gården (bär max 6) (430 kr)
- 1:09 gå till kvarnen (34 m) (430 kr)
- 3:16 gå till skrivaren (3 m) (430 kr)
- 3:17 printar Blomkruka (430 kr)
- 3:20 gå till cykeln (1 m) (430 kr)
- 3:23 tar ut 1 st ur skrivaren (430 kr)
- 3:28 gå till Ali (27 m) (430 kr)
- 3:28 öppnar Alis butik – sälja (430 kr)
- 3:30 säljer hos Ali: +105 kr (535 kr)
- 3:38 öppnar Alis butik – köpa kvarnmotor (535 kr)
- 3:40 köper kvarnmotor för 50 kr (485 kr)
- 3:53 gå till skrivaren (25 m) (485 kr)
- 3:54 printar Kvarnmotor (485 kr)
- 3:58 tar ut 1 st ur skrivaren (485 kr)
- 4:02 gå till skruva fast kvarnmotorn (3 m) (485 kr)
- 4:15 gå till Rolfs sopsäck (16 m) (485 kr)
- 4:28 tar på korg (485 kr)
- 4:28 tjänar pengar till väntar på sopbilen (BO): 485/545 kr → printar blomkruka (105 kr) (485 kr)
- 4:31 gå till skrivaren (12 m) (485 kr)
- 4:33 printar Blomkruka (485 kr)
- 4:34 gå till cykeln (1 m) (485 kr)
- 4:37 tar ut 1 st ur skrivaren (485 kr)
- 4:42 gå till Ali (25 m) (485 kr)
- 4:42 öppnar Alis butik – sälja (485 kr)
- 4:44 säljer hos Ali: +105 kr (590 kr)
- 4:48 tjänar pengar till väntar på sopbilen (BO): 590/650 kr → printar blomkruka (105 kr) (590 kr)
- 4:53 gå till skrivaren (25 m) (590 kr)
- 4:54 printar Blomkruka (590 kr)
- 5:16 plockar 10 skräp på gården (bär max 10) (590 kr)
- 5:22 gå till kvarnen (28 m) (590 kr)
- 5:23 gå till skrivaren (1 m) (590 kr)
- 5:23 tar ut 1 st ur skrivaren (590 kr)
- 5:29 gå till Ali (28 m) (590 kr)
- 5:29 öppnar Alis butik – sälja (590 kr)
- 5:31 säljer hos Ali: +105 kr (695 kr)
- 5:45 gå till Rolfs postlåda (31 m) (695 kr)
- 5:47 gå till skrivaren (7 m) (695 kr)
- 5:48 printar Ölhållare med kylklamp (695 kr)
- 5:49 gå till cykeln (1 m) (695 kr)
- 5:53 tar ut 1 st ur skrivaren (695 kr)
- 6:06 valj olhallare: true, vald olhallare, post {"l":null,"tr":null,"tm":[]}, nummer false (695 kr)
- 6:08 gå till Rolfs postlåda (7 m) (695 kr)
- 6:20 tjänar pengar till väntar på flaskhalsen för vindsnurra: 695/735 kr → printar blomkruka (105 kr) (695 kr)
- 6:21 gå till skrivaren (6 m) (695 kr)
- 6:23 printar Blomkruka (695 kr)
- 6:26 tar ut 1 st ur skrivaren (695 kr)
- 6:32 gå till Ali (28 m) (695 kr)
- 6:32 öppnar Alis butik – sälja (695 kr)
- 6:34 säljer hos Ali: +3 kr (698 kr)
- 6:34 tjänar pengar till väntar på flaskhalsen för vindsnurra: 698/735 kr → printar blomkruka (105 kr) (698 kr)
- 6:40 gå till skrivaren (25 m) (698 kr)
- 6:41 printar Blomkruka (698 kr)
- 6:42 gå till cykeln (1 m) (698 kr)
- 6:46 tar ut 1 st ur skrivaren (698 kr)
- 6:51 gå till Ali (25 m) (698 kr)
- 6:51 öppnar Alis butik – sälja (698 kr)
- 6:53 säljer hos Ali: +105 kr (803 kr)
- 7:00 tjänar pengar till väntar på flaskhalsen för vindsnurra: 803/843 kr → printar blomkruka (105 kr) (803 kr)
- 7:05 gå till skrivaren (25 m) (803 kr)
- 7:07 printar Blomkruka (803 kr)
- 7:10 tar ut 1 st ur skrivaren (803 kr)
- 7:16 gå till Ali (25 m) (803 kr)
- 7:16 öppnar Alis butik – sälja (803 kr)
- 7:18 säljer hos Ali: +105 kr (908 kr)
- 7:20 tjänar pengar till väntar på flaskhalsen för vindsnurra: 908/948 kr → printar blomkruka (105 kr) (908 kr)
- 7:25 gå till skrivaren (25 m) (908 kr)
- 7:26 printar Blomkruka (908 kr)
- 7:27 gå till cykeln (1 m) (908 kr)
- 7:31 tar ut 1 st ur skrivaren (908 kr)
- 7:36 gå till Ali (25 m) (908 kr)
- 7:36 öppnar Alis butik – sälja (908 kr)
- 7:38 säljer hos Ali: +105 kr (1013 kr)
- 7:40 öppnar Alis butik – köpa vindsnurra till skjultaket (1013 kr)
- 7:43 köper vindsnurra för 133 kr (880 kr)
- 7:49 gå till skrivaren (25 m) (880 kr)
- 7:50 printar Vindsnurra till skjultaket (880 kr)
- 7:54 gå till cykeln (1 m) (880 kr)
- 7:57 tar ut 1 st ur skrivaren (880 kr)
- 8:05 gå till sätt vindsnurran på taket (20 m) (880 kr)
- 8:13 gå till Ali (20 m) (880 kr)
- 8:13 öppnar Alis butik – köpa dörr (880 kr)
- 8:15 köper dorr för 120 kr (760 kr)
- 8:21 gå till skrivaren (25 m) (760 kr)
- 8:23 printar Dörr (2 delar) (760 kr)
- 8:52 plockar 10 skräp på gården (bär max 10) (760 kr)
- 8:59 gå till kvarnen (33 m) (760 kr)
- 9:00 gå till skrivaren (1 m) (760 kr)
- 9:00 tar ut 1 st ur skrivaren (760 kr)
- 9:05 gå till skjulet (21 m) (760 kr)
- 9:16 gå till sängen (1 m) (760 kr)

</details>

## Dag 3

| Tid | Källa | Vem | Text |
|---|---|---|---|
| 9:19 | vara | ali | ingen |
| 9:19 | händelse | malKlart | id=sov2 del=Dag 2 – Tippen bredvid nasta=rolf1-brev |
| 9:19 | vara | ali | kruka |
| 9:19 | MÅL |  | Vänta på sopbilen. Den lämnar något. |

<details><summary>Botens handlingar dag 3</summary>

- 0:00 — dag 3 börjar — (760 kr)

</details>
