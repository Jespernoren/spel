# Simulering kapitel 1 – körning 1

*Gjord 2026-11-21 19:34 med `verktyg/sim-kapitel1.mjs` + `verktyg/sim-bot.js` (punkt AX). Boten går 4,5 m/s, läser 15 tecken/s, trampar, vevar, plockar, printar, köper och säljer via spelets egna funktioner. Tiderna är speltid.*

## Sammanfattning

| Dag | Minuter | Väntan | Prints (totalt) | Kr vid sömn | Bär | Trivsel |
|---|---|---|---|---|---|---|
| 1 | 8.8 | 2 % | 16 | 120 | 6 | 18 |
| 2 | 7.1 | 2 % | 26 | 762 | 10 | 36 |
| 3 | 9.1 | 0 % | 34 | 537 | 16 | 78 |
| 4 | 11.9 | 1 % | 53 | 1952 | 16 | 96 |
| 5 | 0.0 | 0 % | 53 | 1952 | 16 | 96 |

## Flaskhalskartan (EE)

| Dag | bara | mala | trampa | strom | skrivare | inkomst | Upplåst |
|---|---|---|---|---|---|---|---|
| 1 | 4 | 8 | 20 | 6 | 79 | 14 | grip (bara, 5:47), kruka (inkomst, 6:31) |
| 2 | 1 | 9 | 7 | 16 | 170 | 0 | kvarnmotor (mala, 3:01), rullstall (skrivare, 4:38), vindsnurra (trampa, 5:27), trim_skrivare (skrivare, 5:45) |
| 3 | 1 | 9 | 16 | 44 | 368 | 0 | cykelbatteri (strom, 4:03), ryggkorg (bara, 5:07), skrivare2 (skrivare, 6:37) |
| 4 | 1 | 61 | 25 | 57 | 380 | 0 | trim_skrivare2 (skrivare, 3:06), matarband (bara, 7:12, reserv), vindsnurra2 (strom, 8:53) |
| 5 | 0 | 0 | 0 | 0 | 0 | 0 |  |

TIDIG: 0 · FAST: 0 · upplåst av reserven (målet väntade 3 min): 1

**SKRATT:** 45 roliga ögonblick på 37 min (12.2 per 10 min, mål minst 5)

**Köp:**

- dag 1 2:30 – gammalkvarn (30 kr)
- dag 1 6:11 – grip (50 kr)
- dag 1 6:39 – kruka (40 kr)
- dag 1 7:32 – sang (60 kr)
- dag 2 3:31 – kvarnmotor (50 kr)
- dag 2 5:50 – vindsnurra (133 kr)
- dag 2 6:19 – dorr (120 kr)
- dag 3 5:00 – cykelbatteri (30 kr)
- dag 3 5:28 – ryggkorg (120 kr)
- dag 3 6:01 – bord (120 kr)
- dag 3 6:51 – skrivare2 (500 kr)
- dag 3 8:17 – tak (250 kr)
- dag 4 7:24 – matarband (120 kr)
- dag 4 8:19 – pall (80 kr)
- dag 4 9:51 – vindsnurra (133 kr)
- dag 4 11:12 – vaggar (130 kr)

## Storykedjan (kvittens → varför → nytt mål)

| Dag | Tid | Id | Kvittens | Varför | Nytt mål | Tid till målet |
|---|---|---|---|---|---|---|
| 1 | 0:29 | lasta | Tung. Den har storebror aldrig burit så långt. |  | Skrivaren ställer jag mot skräpberget. Min första verkstad. | 0.7 s |
| 1 | 1:35 | valjModell | Den piper. Den GÖR något. |  | En nyckelring till, så länge storebrors rulle räcker. | 3.4 s |
| 1 | 1:40 | trampa | Klar! Ta ut den innan den ändrar sig. |  | En nyckelring till, så länge storebrors rulle räcker. | 0.5 s |
| 1 | 3:03 | flaska | Det blir tråd! Riktig plasttråd. |  | Min egen tråd. Nu printar jag en nyckelring av den. | 0.8 s |
| 1 | 7:02 | krukaD1 | En kruka. Mamma skulle bli så stolt. Hon får inte veta. |  | Ali gillar krukor. Han sa det själv. | 0.9 s |
| 1 | 8:32 | printSang | En säng. Jag printade en SÄNG. |  | Sängen ska in i skjulet. Sen sover jag. | 0.3 s |
| 2 | 6:09 | vindsnurra | Den snurrar! Långsamt. Men den snurrar. |  | Det drar från dörrhålet. En dörr kan jag printa. | 3.0 s |
| 4 | 8:07 | sophallare | Nu kan jag tömma hela kärran på en gång. |  | Jag behöver något att sitta på. En pall. Lagom ambitiöst. | 2.9 s |

## Hur länge nya mål väntade (från att förra målet blev klart till att det nya syntes i målrutan)

Snitt 2.3 s · max 13.3 s · över 4 s: 4 · över 8 s: 3 av 49

## Flaggor (26)

- **UPPREPNING** dag 4 8:18: Bra val. Folk köper sånt. Jag vet inte varför. (CT)
- **LUGN** dag 2 0:08: 0.0 s efter BÖRJA DAGEN: [lapp] "Första natten i en riktig säng. Jag printade den själv."
- **KROCK** dag 1 3:07: 0.7 s mellan [notis] "Kvarnen funkar. Soptippen är en gruva." och [notis] "💭 Min egen tråd. Nu printar jag en nyckelring av den."
- **KROCK** dag 4 10:17: 0.2 s mellan [lapp] "Slut på trampandet. Nästan." och [notis] "💭 Det drar genom väggarna. Isolering, och sen blir det varm"
- **SEN** dag 1 1:57: 15.3 s efter händelsen: bror: "VA FAN?! Fick du igång den?? Jag försökte i typ ett år. Den bara pep. "
- **SEN** dag 1 6:59: 28.5 s efter händelsen: ali: "Ali här. Jag såg Skräpgrip på avstånd. Ett streck blev lite snett. Mit"
- **SEN** dag 2 0:26: 17.4 s efter händelsen: notis:Första natten i en riktig säng. Jag prin: "Första natten i en riktig säng. Jag printade den själv."
- **SEN** dag 3 7:55: 119.2 s efter händelsen: ali: "Ali här. Du printade Ryggkorg från min ritning. Och det FUNKAR? Jag ha"
- **SEN** dag 4 1:58: 14.7 s efter händelsen: kjelle: "Radio Tippen, Kjelle här. Skjulet vid tippen har fått TAK. Och arbetsb"
- **SEN** dag 4 9:06: 55.8 s efter händelsen: ali: "Ali här. Jag såg Sophållare på avstånd. Ett streck blev lite snett. Mi"
- **SEN** dag 4 9:38: 10.7 s efter händelsen: du: "Kajsa. Ut ur skrivaren. Nu."
- **PAUS** dag 1 0:30: 0.0 s paus före "Tung. Den har storebror aldrig burit så långt."
- **PAUS** dag 1 1:38: 0.0 s paus före "Den piper. Den GÖR något."
- **PAUS** dag 1 1:41: 0.0 s paus före "Klar! Ta ut den innan den ändrar sig."
- **PAUS** dag 1 3:04: 0.0 s paus före "Det blir tråd! Riktig plasttråd."
- **PAUS** dag 1 3:07: 0.0 s paus före "Kvarnen funkar. Soptippen är en gruva."
- **PAUS** dag 1 7:07: 0.0 s paus före "En kruka. Mamma skulle bli så stolt. Hon får inte "
- **PAUS** dag 2 1:09: 0.0 s paus före "Sopbilen tippade en ny last. Allt det skräpet – oc"
- **PAUS** dag 2 4:21: 0.0 s paus före "Gården är STÄDAD, av mig, frivilligt. Mamma skulle"
- **PAUS** dag 3 5:48: 0.0 s paus före "Ryggkorg ska jag ha på mig."
- **TOM RUTA** dag 1 3:48: 4.6 s innan "Gå till Ali" syntes
- **DUBBEL UPPMANING** dag 1 8:28: "veva" på 3 ställen: pekrutan, skylten Storebrors skrivare står still, skylten Tratten är full
- **TEMPO** dag 1 8:45: dag 1 tog 8.8 min (mål 10–12)
- **TEMPO** dag 2 7:07: dag 2 tog 7.1 min (mål 10–15)
- **TEMPO** dag 3 9:08: dag 3 tog 9.1 min (mål 10–15)
- **TEMPO** dag 5 0:00: dag 5 tog 0.0 min (mål 10–15)

Sidfel: inga

## Dag 1

| Tid | Källa | Vem | Text |
|---|---|---|---|
| 0:00 | MÅL |  | Lasta av skrivaren |
| 0:00 | MÅL |  | Lasta av skrivaren |
| 0:02 | sak | bud | (tips) |
| 0:03 | väntar | du | Se så mycket skräp här är. Det är ju en guldgruva! |
| 0:03 | klar | bud | (tips) |
| 0:05 | sak | du | Se så mycket skräp här är. Det är ju en guldgruva! |
| 0:05 | röst | du | Se så mycket skräp här är. Det är ju en guldgruva! · STORY |
| 0:06 | väntar | info:info | ⏎ Enter – hoppa över |
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
| 0:20 | klar | du | Spikade ihop en skylt av bräder från skräpberget: Soptippsvägen 1. Inte mycket för världen, men det är MITT. |
| 0:20 | målruta |  | Lasta av skrivaren |
| 0:25 | sak | du | Storebrors skrivare står kvar på cykeln vid vägen. Den ska av. |
| 0:25 | pil |  | Lasta av skrivaren |
| 0:25 | notis | tanke | 💭 Storebrors skrivare står kvar på cykeln vid vägen. Den ska av. |
| 0:25 | röst | du | Storebrors skrivare står kvar på cykeln vid vägen. Den ska av. · MÅL |
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
| 0:34 | klar | du | Tung. Den har storebror aldrig burit så långt. |
| 0:34 | sak | du | Skrivaren ställer jag mot skräpberget. Min första verkstad. |
| 0:34 | pil |  | Ställ upp skrivaren |
| 0:34 | notis | tanke | 💭 Skrivaren ställer jag mot skräpberget. Min första verkstad. |
| 0:34 | röst | du | Skrivaren ställer jag mot skräpberget. Min första verkstad. · MÅL |
| 0:35 | nick |  | nick:1 |
| 0:36 | hjälp | kontroll | E: Ryggsäcken och kistan |
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
| 1:17 | paket |  | tanke |
| 1:17 | tanke | du | Cykeln… och storebrors generator? |
| 1:17 | väntar | du | Cykeln… och storebrors generator? |
| 1:17 | sak | du | Cykeln… och storebrors generator? |
| 1:17 | kvitto-visas | du | Cykeln… och storebrors generator? |
| 1:17 | notis | tanke | 💭 Cykeln… och storebrors generator? |
| 1:17 | röst | du | Cykeln… och storebrors generator? · STORY |
| 1:17 | händelse | malKlart | id=strom del=Dag 1 – Kom igång nasta=bygg |
| 1:17 | väntar | du | Nu generatorn på cykeln. |
| 1:18 | MÅL |  | Ställ cykel och generator |
| 1:20 | målruta |  | Ställ cykel och generator |
| 1:20 | klar | du | Cykeln… och storebrors generator? |
| 1:21 | paket |  | tanke |
| 1:21 | tanke | du | Storebrors generator. Den gör el när cykeln snurrar. |
| 1:21 | väntar | du | Storebrors generator. Den gör el när cykeln snurrar. |
| 1:21 | händelse | placerat | sak=generator |
| 1:21 | duns | du | ställs ner |
| 1:21 | kvittens-bock |  | ✓ Skrivaren behöver ström |
| 1:23 | sak | du | Nu generatorn på cykeln. |
| 1:23 | pil |  | Ställ cykel och generator |
| 1:23 | notis | tanke | 💭 Nu generatorn på cykeln. |
| 1:23 | röst | du | Nu generatorn på cykeln. · MÅL |
| 1:24 | ljud | utrustning | Cykeln i famnen |
| 1:24 | händelse | lyft | sak=cykel |
| 1:26 | klar | du | Nu generatorn på cykeln. |
| 1:29 | paket |  | tanke |
| 1:29 | tanke | du | Cykeln ska stå vid skrivaren. Generatorn sätter jag på sen. |
| 1:29 | väntar | du | Cykeln ska stå vid skrivaren. Generatorn sätter jag på sen. |
| 1:30 | händelse | placerat | sak=cykel |
| 1:30 | duns | du | ställs ner |
| 1:30 | struken | du | Cykeln ska stå vid skrivaren. Generatorn sätter jag på sen. |
| 1:32 | händelse | ombyggd | sak=cykel |
| 1:32 | händelse | malKlart | id=bygg del=Dag 1 – Kom igång nasta=valjModell |
| 1:32 | väntar | du | Strömmen finns. Nu ska skrivaren veta vad den ska göra, sen trampar jag. |
| 1:32 | målruta |  | Välj vad skrivaren ska printa |
| 1:32 | MÅL |  | Välj vad skrivaren ska printa |
| 1:32 | sak | du | Strömmen finns. Nu ska skrivaren veta vad den ska göra, sen trampar jag. |
| 1:32 | pil |  | Välj vad skrivaren ska printa |
| 1:32 | notis | tanke | 💭 Strömmen finns. Nu ska skrivaren veta vad den ska göra, sen trampar jag. |
| 1:32 | röst | du | Strömmen finns. Nu ska skrivaren veta vad den ska göra, sen trampar jag. · MÅL |
| 1:35 | händelse | printStart | sak=nyckelring |
| 1:35 | tanke | du | Den stannar när jag slutar trampa. Ström som sparas hade varit nåt. |
| 1:35 | struken | du | Storebrors generator. Den gör el när cykeln snurrar. |
| 1:35 | väntar | du | Den stannar när jag slutar trampa. Ström som sparas hade varit nåt. |
| 1:35 | händelse | malKlart | id=valjModell del=Dag 1 – Kom igång nasta=trampa |
| 1:35 | kvittens | du | Den piper. Den GÖR något. |
| 1:35 | väntar | du | Den piper. Den GÖR något. |
| 1:35 | struken | du | Den stannar när jag slutar trampa. Ström som sparas hade varit nåt. |
| 1:35 | väntar | du | Nu behöver den ström. Trampa. |
| 1:35 | MÅL |  | Trampa cykeln |
| 1:37 | målruta |  | Trampa cykeln |
| 1:38 | klar | du | Strömmen finns. Nu ska skrivaren veta vad den ska göra, sen trampar jag. |
| 1:38 | sak | du | Den piper. Den GÖR något. |
| 1:38 | röst | du | Den piper. Den GÖR något. · STORY |
| 1:40 | händelse | printKlar | sak=nyckelring n=1 |
| 1:40 | händelse | malKlart | id=trampa del=Dag 1 – Kom igång nasta=rullSlut |
| 1:40 | kvittens | du | Klar! Ta ut den innan den ändrar sig. |
| 1:40 | väntar | du | Klar! Ta ut den innan den ändrar sig. |
| 1:40 | väntar | du | En nyckelring till, så länge storebrors rulle räcker. |
| 1:40 | MÅL |  | En nyckelring till |
| 1:41 | klar | du | Den piper. Den GÖR något. |
| 1:41 | sak | du | Klar! Ta ut den innan den ändrar sig. |
| 1:41 | röst | du | Klar! Ta ut den innan den ändrar sig. · STORY |
| 1:41 | målruta |  | En nyckelring till |
| 1:41 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 1:41 | paket |  | sms |
| 1:41 | väntar | bror | VA FAN?! Fick du igång den?? Jag försökte i typ ett år. Den bara pep. 😳 |
| 1:41 | skratt | bror | VA FAN?! Fick du igång den?? Jag försökt |
| 1:41 | paket |  | sms → ge |
| 1:41 | väntar | bror | Sälj den till Ali, han med affären vid skräpberget. Han köper gamla grejer. Han köpte min gamla mopedhjälm för 20 spänn. |
| 1:41 | väntar |  | (läget ändras) |
| 1:44 | klar | du | Klar! Ta ut den innan den ändrar sig. |
| 1:44 | struken | du | Nu behöver den ström. Trampa. |
| 1:44 | sak | du | En nyckelring till, så länge storebrors rulle räcker. |
| 1:44 | pil |  | En nyckelring till |
| 1:44 | notis | tanke | 💭 En nyckelring till, så länge storebrors rulle räcker. |
| 1:44 | röst | du | En nyckelring till, så länge storebrors rulle räcker. · MÅL |
| 1:49 | klar | du | En nyckelring till, så länge storebrors rulle räcker. |
| 1:51 | sak |  | (läget ändras) |
| 1:51 | klar |  | (läget ändras) |
| 1:52 | händelse | printStart | sak=nyckelring |
| 1:57 | sak | bror | VA FAN?! Fick du igång den?? Jag försökte i typ ett år. Den bara pep. 😳 |
| 1:57 | skratt | bror | VA FAN?! Fick du igång den?? Jag försökt |
| 1:57 | sms | bror | VA FAN?! Fick du igång den?? Jag försökte i typ ett år. Den bara pep. 😳 |
| 1:57 | skratt | bror | VA FAN?! Fick du igång den?? Jag försökt |
| 1:57 | sms-bubbla | bror | VA FAN?! Fick du igång den?? Jag försökte i typ ett år. Den bara pep. 😳 |
| 1:57 | skratt | bror | VA FAN?! Fick du igång den?? Jag försökt |
| 1:57 | röst | bror | VA FAN?! Fick du igång den?? Jag försökte i typ ett år. Den bara pep. 😳 · REAKTION |
| 1:58 | toast | guld | Nyckelring är klar – ta ut den |
| 1:58 | väntar | notis:Storebrors skrivare: Nyckelring är klar  | Storebrors skrivare: Nyckelring är klar – ta ut den |
| 1:58 | händelse | printKlar | sak=nyckelring n=2 |
| 1:58 | paket |  | tanke |
| 1:58 | tanke | du | Slut på storebrors rulle. Och här ligger ju plast överallt. Om jag bara kunde göra tråd av skräpet… Affären mitt emot kanske har något. |
| 1:58 | väntar | du | Slut på storebrors rulle. Och här ligger ju plast överallt. Om jag bara kunde göra tråd av skräpet… Affären mitt emot kanske har något. |
| 1:58 | händelse | malKlart | id=rullSlut del=Dag 1 – Kom igång nasta=saljTva |
| 1:58 | MÅL |  | Sälj nyckelringarna |
| 1:59 | kvitto-visas | du | Slut på storebrors rulle. Och här ligger ju plast överallt. Om jag bara kunde göra tråd av skräpet… Affären mitt emot kanske har något. |
| 1:59 | notis | tanke | 💭 Slut på storebrors rulle. Och här ligger ju plast överallt. Om jag bara kunde göra tråd av skräpet… Affären mitt emot kanske har något. |
| 2:00 | målruta |  | Sälj nyckelringarna |
| 2:01 | hjälp | kontroll | Tab: Dina sms och dagboken |
| 2:02 | kvittens-bock |  | ✓ En nyckelring till |
| 2:03 | klar | bror | VA FAN?! Fick du igång den?? Jag försökte i typ ett år. Den bara pep. 😳 |
| 2:03 | skratt | bror | VA FAN?! Fick du igång den?? Jag försökt |
| 2:05 | sak | du | (nytt mål i rutan) |
| 2:05 | pil |  | Sälj nyckelringarna |
| 2:05 | klar | du | (nytt mål i rutan) |
| 2:07 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 2:13 | röst | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. · STORY |
| 2:13 | butiksbubbla | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 2:14 | aliSalt | ali | 30 |
| 2:14 | butiksbubbla | ali | Pappas gamla köttkvarn. Den har malt allt utom kött. Trettio kronor, så är den din. |
| 2:15 | väntar | ali | Pappas gamla köttkvarn. Den har malt allt utom kött. Trettio kronor, så är den din. |
| 2:15 | händelse | malKlart | id=saljTva del=Dag 1 – Kom igång nasta=aliKvarn |
| 2:15 | väntar | du | Ali har en gammal kvarn. Den gör tråd av skräp. |
| 2:16 | MÅL |  | Köp kvarnen |
| 2:16 | sak | du | Ali har en gammal kvarn. Den gör tråd av skräp. |
| 2:16 | målruta |  | Köp kvarnen |
| 2:16 | pil |  | Köp kvarnen |
| 2:16 | notis | tanke | 💭 Ali har en gammal kvarn. Den gör tråd av skräp. |
| 2:16 | röst | du | Ali har en gammal kvarn. Den gör tråd av skräp. · MÅL |
| 2:19 | kvittens-bock |  | ✓ Sälj nyckelringarna |
| 2:20 | klar | du | Ali har en gammal kvarn. Den gör tråd av skräp. |
| 2:22 | struken | bror | Sälj den till Ali, han med affären vid skräpberget. Han köper gamla grejer. Han köpte min gamla mopedhjälm för 20 spänn. |
| 2:22 | struken | notis:Storebrors skrivare: Nyckelring är klar  | Storebrors skrivare: Nyckelring är klar – ta ut den |
| 2:22 | sak | ali | Pappas gamla köttkvarn. Den har malt allt utom kött. Trettio kronor, så är den din. |
| 2:22 | röst | ali | Pappas gamla köttkvarn. Den har malt allt utom kött. Trettio kronor, så är den din. · STORY |
| 2:29 | klar | ali | Pappas gamla köttkvarn. Den har malt allt utom kött. Trettio kronor, så är den din. |
| 2:29 | händelse | kopt | sak=gammalkvarn |
| 2:29 | röst | ali | Och kommer du på nåt smart, så vet du var jag bor. · STORY |
| 2:29 | butiksbubbla | ali | Och kommer du på nåt smart, så vet du var jag bor. |
| 2:31 | händelse | malKlart | id=aliKvarn del=Dag 1 – Kom igång nasta=kvarn |
| 2:31 | väntar | du | Kvarnen ska stå vid skrivaren, närmast skräpberget. |
| 2:31 | målruta |  | Ställ kvarnen |
| 2:31 | MÅL |  | Ställ kvarnen |
| 2:32 | sak | du | Kvarnen ska stå vid skrivaren, närmast skräpberget. |
| 2:32 | pil |  | Ställ kvarnen |
| 2:32 | notis | tanke | 💭 Kvarnen ska stå vid skrivaren, närmast skräpberget. |
| 2:32 | röst | du | Kvarnen ska stå vid skrivaren, närmast skräpberget. · MÅL |
| 2:32 | nick |  | nick:9 |
| 2:35 | kvittens-bock |  | ✓ Köp kvarnen |
| 2:36 | klar | du | Kvarnen ska stå vid skrivaren, närmast skräpberget. |
| 2:44 | händelse | placerat | sak=kvarnen |
| 2:44 | duns | du | ställs ner |
| 2:44 | händelse | malKlart | id=kvarn del=Dag 1 – Kom igång nasta=flaska |
| 2:44 | väntar | du | Skräp i kvarnen, sen vevar jag. Då blir det tråd. |
| 2:44 | målruta |  | Gör egen tråd |
| 2:44 | MÅL |  | Gör egen tråd |
| 2:44 | sak | du | Skräp i kvarnen, sen vevar jag. Då blir det tråd. |
| 2:44 | pil |  | Gör egen tråd |
| 2:44 | notis | tanke | 💭 Skräp i kvarnen, sen vevar jag. Då blir det tråd. |
| 2:44 | röst | du | Skräp i kvarnen, sen vevar jag. Då blir det tråd. · MÅL |
| 2:45 | nick |  | nick:10 |
| 2:48 | kvittens-bock |  | ✓ Ställ kvarnen |
| 2:48 | klar | du | Skräp i kvarnen, sen vevar jag. Då blir det tråd. |
| 3:02 | väntar | info:bra | 3 st i tratten – veva nu! |
| 3:02 | sak | info:bra | 3 st i tratten – veva nu! |
| 3:02 | kvitto-visas | info:bra | 3 st i tratten – veva nu! |
| 3:02 | toast | bra | 3 st i tratten – veva nu! |
| 3:03 | händelse | malKlart | id=flaska del=Dag 1 – Kom igång nasta=egenPrint |
| 3:03 | kvittens | du | Det blir tråd! Riktig plasttråd. |
| 3:03 | väntar | du | Det blir tråd! Riktig plasttråd. |
| 3:03 | väntar | du | Kvarnen funkar. Soptippen är en gruva. |
| 3:03 | väntar | du | Min egen tråd. Nu printar jag en nyckelring av den. |
| 3:03 | MÅL |  | Printa med egen tråd |
| 3:04 | klar | info:bra | 3 st i tratten – veva nu! |
| 3:04 | sak | du | Det blir tråd! Riktig plasttråd. |
| 3:04 | röst | du | Det blir tråd! Riktig plasttråd. · STORY |
| 3:05 | målruta |  | Printa med egen tråd |
| 3:07 | klar | du | Det blir tråd! Riktig plasttråd. |
| 3:07 | sak | du | Kvarnen funkar. Soptippen är en gruva. |
| 3:07 | kvitto-visas | du | Kvarnen funkar. Soptippen är en gruva. |
| 3:07 | lapp | 📔 Dagbok | Kvarnen funkar. Soptippen är en gruva. |
| 3:07 | dagbokrad | du | Kvarnen funkar. Soptippen är en gruva. |
| 3:07 | notis | dagbok | Kvarnen funkar. Soptippen är en gruva. |
| 3:07 | klar | du | Kvarnen funkar. Soptippen är en gruva. |
| 3:07 | sak | du | Min egen tråd. Nu printar jag en nyckelring av den. |
| 3:07 | pil |  | Printa med egen tråd |
| 3:07 | notis | tanke | 💭 Min egen tråd. Nu printar jag en nyckelring av den. |
| 3:07 | röst | du | Min egen tråd. Nu printar jag en nyckelring av den. · MÅL |
| 3:11 | väntar | foto | Första nyckelringen |
| 3:11 | paket |  | tanke |
| 3:11 | tanke | du | Någon köpte nåt jag gjort. Det här kan funka. |
| 3:11 | väntar | du | Någon köpte nåt jag gjort. Det här kan funka. |
| 3:12 | klar | du | Min egen tråd. Nu printar jag en nyckelring av den. |
| 3:16 | händelse | printStart | sak=nyckelring |
| 3:16 | toast | bra | 🔗 Slangen kopplad |
| 3:21 | toast | guld | ✅ |
| 3:21 | händelse | printKlar | sak=nyckelring n=3 |
| 3:21 | paket |  | tanke |
| 3:21 | tanke | du | En nyckelring av en gammal schampoflaska. Den luktar fortfarande päron. |
| 3:21 | väntar | du | En nyckelring av en gammal schampoflaska. Den luktar fortfarande päron. |
| 3:21 | skratt | du | egen tråd |
| 3:21 | händelse | malKlart | id=egenPrint del=Dag 1 – Kom igång nasta=salj |
| 3:21 | struken | du | En nyckelring av en gammal schampoflaska. Den luktar fortfarande päron. |
| 3:21 | väntar | du | Affären på andra sidan vägen kanske köper sånt här. |
| 3:21 | MÅL |  | Sälj hos Ali |
| 3:21 | målruta |  | Sälj hos Ali |
| 3:21 | sak | du | Affären på andra sidan vägen kanske köper sånt här. |
| 3:21 | pil |  | Sälj hos Ali |
| 3:21 | notis | tanke | 💭 Affären på andra sidan vägen kanske köper sånt här. |
| 3:21 | röst | du | Affären på andra sidan vägen kanske köper sånt här. · MÅL |
| 3:21 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 3:21 | nick |  | nick:12 |
| 3:25 | kvittens-bock |  | ✓ Printa med egen tråd |
| 3:25 | klar | du | Affären på andra sidan vägen kanske köper sånt här. |
| 3:29 | händelse | printStart | sak=nyckelring |
| 3:30 | toast | guld | ✅ |
| 3:30 | händelse | printKlar | sak=nyckelring n=4 |
| 3:30 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 3:33 | händelse | printStart | sak=nyckelring |
| 3:34 | toast | guld | ✅ |
| 3:34 | händelse | printKlar | sak=nyckelring n=5 |
| 3:34 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 3:35 | sak | foto | Första nyckelringen |
| 3:35 | foto | du | Första nyckelringen |
| 3:37 | klar | foto | Första nyckelringen |
| 3:47 | paket |  | ali → ge |
| 3:47 | väntar | ali | Du får bonus! 15 kr extra. Pappa hade gillat dig. |
| 3:47 | väntar |  | (läget ändras) |
| 3:47 | aliSalt | ali | 45 |
| 3:47 | röst | ali | Nyckelringar igen? Folk tappar sina nycklar hela tiden. Bra affär för oss. · STORY |
| 3:47 | butiksbubbla | ali | Nyckelringar igen? Folk tappar sina nycklar hela tiden. Bra affär för oss. |
| 3:48 | händelse | malKlart | id=salj del=Dag 1 – Kom igång nasta=powerbank |
| 3:48 | paket |  | sms → ge |
| 3:48 | väntar | ali | Ali här. Glömde en sak. Kom tillbaka, jag har nåt åt dig. |
| 3:48 | väntar |  | (läget ändras) |
| 3:48 | MÅL |  | Gå till Ali |
| 3:49 | väntar | kjelle | God morgon, det är Kjelle på Radio Tippen! Det har flyttat in någon i det gamla skjulet. Med en cykel och en skrivare. Spännande, Gunnar. |
| 3:49 | radio | kjelle | God morgon, det är Kjelle på Radio Tippen! Det har flyttat in någon i det gamla skjulet. Med en cykel och en skrivare. Spännande, Gunnar. |
| 3:49 | skratt | du | Radio-Kjelle |
| 3:50 | sak | ali | Du får bonus! 15 kr extra. Pappa hade gillat dig. |
| 3:50 | notis |  | Ali: ”Du får bonus! 15 kr extra. Pappa hade gillat dig.” |
| 3:50 | röst | ali | Du får bonus! 15 kr extra. Pappa hade gillat dig. · REAKTION |
| 3:50 | väntar | du | Ali har något åt mig. Jag går över vägen till affären. |
| 3:52 | kvittens-bock |  | ✓ Sälj hos Ali |
| 3:52 | målruta |  | Gå till Ali |
| 3:53 | tanke | du | Vem är Gunnar? |
| 3:53 | väntar | du | Vem är Gunnar? |
| 3:54 | klar | ali | Du får bonus! 15 kr extra. Pappa hade gillat dig. |
| 3:56 | sak | du | Ali har något åt mig. Jag går över vägen till affären. |
| 3:56 | pil |  | Gå till Ali |
| 3:56 | notis | tanke | 💭 Ali har något åt mig. Jag går över vägen till affären. |
| 3:56 | röst | du | Ali har något åt mig. Jag går över vägen till affären. · MÅL |
| 4:01 | klar | du | Ali har något åt mig. Jag går över vägen till affären. |
| 4:01 | paket | ali | ali → ge |
| 4:01 | röst | ali | Ali här. Jag såg dig cykla. Det ser jobbigt ut. Testa koppla på den här. Bra kunder får bonus. · STORY |
| 4:01 | butiksbubbla | ali | Ali här. Jag såg dig cykla. Det ser jobbigt ut. Testa koppla på den här. Bra kunder får bonus. |
| 4:06 | sak | ali | Ali här. Glömde en sak. Kom tillbaka, jag har nåt åt dig. |
| 4:06 | sms | ali | Ali här. Glömde en sak. Kom tillbaka, jag har nåt åt dig. |
| 4:06 | sms-bubbla | ali | Ali här. Glömde en sak. Kom tillbaka, jag har nåt åt dig. |
| 4:06 | röst | ali | Ali här. Glömde en sak. Kom tillbaka, jag har nåt åt dig. · STORY |
| 4:10 | klar | ali | Ali här. Glömde en sak. Kom tillbaka, jag har nåt åt dig. |
| 4:12 | sak |  | (läget ändras) |
| 4:13 | klar |  | (läget ändras) |
| 4:17 | sak |  | (läget ändras) |
| 4:17 | klar |  | (läget ändras) |
| 4:17 | skratt | du | powerbanken på cykeln |
| 4:17 | paket |  | tanke |
| 4:17 | tanke | du | Nu sparas lite ström. En nyckelring, typ. Framtiden är här, och den sitter fast med eltejp. |
| 4:17 | väntar | du | Nu sparas lite ström. En nyckelring, typ. Framtiden är här, och den sitter fast med eltejp. |
| 4:17 | monterat | du | byggsats:powerbank |
| 4:17 | händelse | monterat | sak=powerbank |
| 4:17 | händelse | malKlart | id=powerbank del=Dag 1 – Kom igång nasta=kopGrip |
| 4:17 | paket |  | lapp |
| 4:17 | lapp-kö | 🧺 Ali | Ali här. Nyckelringen sålde. Jag ville bli ingenjör, men fick ta över pappas butik. I natt lät jag en AI rita en skräpgrip åt mig. Kom och titta. |
| 4:17 | väntar | ali | Ali här. Nyckelringen sålde. Jag ville bli ingenjör, men fick ta över pappas butik. I natt lät jag en AI rita en skräpgrip åt mig. Kom och titta. |
| 4:17 | väntar | du | Med en skräpgrip slipper jag böja mig. Ali har en ritning. |
| 4:18 | MÅL |  | Plocka skräp och mal det |
| 4:19 | sak | du | Nu sparas lite ström. En nyckelring, typ. Framtiden är här, och den sitter fast med eltejp. |
| 4:19 | kvitto-visas | du | Nu sparas lite ström. En nyckelring, typ. Framtiden är här, och den sitter fast med eltejp. |
| 4:19 | notis | tanke | 💭 Nu sparas lite ström. En nyckelring, typ. Framtiden är här, och den sitter fast med eltejp. |
| 4:19 | röst | du | Nu sparas lite ström. En nyckelring, typ. Framtiden är här, och den sitter fast med eltejp. · REAKTION |
| 4:19 | paket |  | tanke |
| 4:19 | tanke | du | Femtio kronor. Nu har jag råd med gripen. |
| 4:19 | struken | du | Vem är Gunnar? |
| 4:19 | väntar | du | Femtio kronor. Nu har jag råd med gripen. |
| 4:20 | målruta |  | Plocka skräp och mal det |
| 4:21 | kvittens-bock |  | ✓ Gå till Ali |
| 4:26 | klar | du | Nu sparas lite ström. En nyckelring, typ. Framtiden är här, och den sitter fast med eltejp. |
| 4:27 | sak | du | Med en skräpgrip slipper jag böja mig. Ali har en ritning. |
| 4:27 | pil |  | Plocka skräp och mal det |
| 4:27 | notis | tanke | 💭 Med en skräpgrip slipper jag böja mig. Ali har en ritning. |
| 4:27 | röst | du | Med en skräpgrip slipper jag böja mig. Ali har en ritning. · MÅL |
| 4:27 | nick |  | nick:14 |
| 4:31 | klar | du | Med en skräpgrip slipper jag böja mig. Ali har en ritning. |
| 4:33 | händelse | printStart | sak=nyckelring |
| 4:34 | toast | fel | Ingen ström – trampa cykeln |
| 4:34 | väntar | notis:Storebrors skrivare: Ingen ström – tramp | Storebrors skrivare: Ingen ström – trampa cykeln |
| 4:35 | toast | guld | ✅ |
| 4:35 | händelse | printKlar | sak=nyckelring n=6 |
| 4:36 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 4:38 | händelse | printStart | sak=nyckelring |
| 4:39 | toast | guld | ✅ |
| 4:39 | händelse | printKlar | sak=nyckelring n=7 |
| 4:39 | sak | du | Någon köpte nåt jag gjort. Det här kan funka. |
| 4:39 | notis | tanke | 💭 Någon köpte nåt jag gjort. Det här kan funka. |
| 4:39 | röst | du | Någon köpte nåt jag gjort. Det här kan funka. · STORY |
| 4:43 | klar | du | Någon köpte nåt jag gjort. Det här kan funka. |
| 4:45 | struken | du | Femtio kronor. Nu har jag råd med gripen. |
| 4:50 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 4:52 | händelse | printStart | sak=nyckelring |
| 4:52 | sak | mamma | Hur kunde du bara gå? Är du ok? Svara när jag ringer! |
| 4:52 | sms | mamma | Hur kunde du bara gå? Är du ok? Svara när jag ringer! |
| 4:52 | sms-bubbla | mamma | Hur kunde du bara gå? Är du ok? Svara när jag ringer! |
| 4:52 | röst | mamma | Hur kunde du bara gå? Är du ok? Svara när jag ringer! · STORY |
| 4:53 | toast | guld | ✅ |
| 4:53 | händelse | printKlar | sak=nyckelring n=8 |
| 4:54 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 4:56 | klar | mamma | Hur kunde du bara gå? Är du ok? Svara när jag ringer! |
| 4:58 | struken | kjelle | God morgon, det är Kjelle på Radio Tippen! Det har flyttat in någon i det gamla skjulet. Med en cykel och en skrivare. Spännande, Gunnar. |
| 4:58 | struken | notis:Storebrors skrivare: Ingen ström – tramp | Storebrors skrivare: Ingen ström – trampa cykeln |
| 5:01 | aliSalt | ali | 15 |
| 5:01 | aliSalt | ali | 15 |
| 5:02 | aliSalt | ali | 15 |
| 5:09 | händelse | printStart | sak=nyckelring |
| 5:10 | toast | guld | ✅ |
| 5:10 | händelse | printKlar | sak=nyckelring n=9 |
| 5:11 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 5:13 | händelse | printStart | sak=nyckelring |
| 5:14 | toast | guld | ✅ |
| 5:14 | händelse | printKlar | sak=nyckelring n=10 |
| 5:15 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 5:17 | händelse | printStart | sak=nyckelring |
| 5:20 | toast | guld | ✅ |
| 5:20 | händelse | printKlar | sak=nyckelring n=11 |
| 5:20 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 5:27 | aliSalt | ali | 15 |
| 5:27 | aliSalt | ali | 15 |
| 5:28 | aliSalt | ali | 15 |
| 5:36 | händelse | printStart | sak=nyckelring |
| 5:37 | sak | ali | Ali här. Nyckelringen sålde. Jag ville bli ingenjör, men fick ta över pappas butik. I natt lät jag en AI rita en skräpgrip åt mig. Kom och titta. |
| 5:37 | sms | ali | Ali här. Nyckelringen sålde. Jag ville bli ingenjör, men fick ta över pappas butik. I natt lät jag en AI rita en skräpgrip åt mig. Kom och titta. |
| 5:37 | sms-bubbla | ali | Ali här. Nyckelringen sålde. Jag ville bli ingenjör, men fick ta över pappas butik. I natt lät jag en AI rita en skräpgrip åt mig. Kom och titta. |
| 5:37 | röst | ali | Ali här. Nyckelringen sålde. Jag ville bli ingenjör, men fick ta över pappas butik. I natt lät jag en AI rita en skräpgrip åt mig. Kom och titta. · STORY |
| 5:37 | toast | guld | ✅ |
| 5:37 | händelse | printKlar | sak=nyckelring n=12 |
| 5:47 | upplåst | bara | grip |
| 5:47 | brott | UPPLÅST | grip (bara 3 av 3) |
| 5:47 | händelse | upplast | id=grip flask=bara |
| 5:47 | paket |  | tanke |
| 5:47 | tanke | du | Ett skräp i taget. Jag springer ihjäl mig. |
| 5:47 | väntar | du | Ett skräp i taget. Jag springer ihjäl mig. |
| 5:49 | klar | ali | Ali här. Nyckelringen sålde. Jag ville bli ingenjör, men fick ta över pappas butik. I natt lät jag en AI rita en skräpgrip åt mig. Kom och titta. |
| 5:51 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 5:51 | sak | du | Ett skräp i taget. Jag springer ihjäl mig. |
| 5:51 | notis | tanke | 💭 Ett skräp i taget. Jag springer ihjäl mig. |
| 5:51 | röst | du | Ett skräp i taget. Jag springer ihjäl mig. · STORY |
| 5:53 | händelse | printStart | sak=nyckelring |
| 5:54 | toast | guld | ✅ |
| 5:54 | händelse | printKlar | sak=nyckelring n=13 |
| 5:54 | klar | du | Ett skräp i taget. Jag springer ihjäl mig. |
| 5:55 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 5:57 | händelse | printStart | sak=nyckelring |
| 5:58 | toast | guld | ✅ |
| 5:58 | händelse | printKlar | sak=nyckelring n=14 |
| 5:59 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 6:06 | aliSalt | ali | 15 |
| 6:06 | aliSalt | ali | 15 |
| 6:07 | aliSalt | ali | 15 |
| 6:10 | struken | info:guld | 3D-modell köpt – printa skräpgrip |
| 6:10 | händelse | kopt | sak=grip |
| 6:10 | röst | ali | Bra val. 3D-modellen är din. Den räcker till en. · STORY |
| 6:10 | butiksbubbla | ali | Bra val. 3D-modellen är din. Den räcker till en. |
| 6:11 | händelse | malKlart | id=kopGrip del=Dag 1 – Kom igång nasta=printGrip |
| 6:11 | väntar | du | Min första 3D-modell! Jag printar inte bara saker – jag printar maskiner. |
| 6:11 | MÅL |  | Printa skräpgripen |
| 6:12 | sak | du | Min första 3D-modell! Jag printar inte bara saker – jag printar maskiner. |
| 6:12 | kvitto-visas | du | Min första 3D-modell! Jag printar inte bara saker – jag printar maskiner. |
| 6:12 | lapp | 📔 Dagbok | Min första 3D-modell! Jag printar inte bara saker – jag printar maskiner. |
| 6:12 | dagbokrad | du | Min första 3D-modell! Jag printar inte bara saker – jag printar maskiner. |
| 6:12 | notis | dagbok | Min första 3D-modell! Jag printar inte bara saker – jag printar maskiner. |
| 6:13 | klar | du | Min första 3D-modell! Jag printar inte bara saker – jag printar maskiner. |
| 6:13 | målruta |  | Printa skräpgripen |
| 6:13 | sak | du | (nytt mål i rutan) |
| 6:13 | pil |  | Printa skräpgripen |
| 6:13 | klar | du | (nytt mål i rutan) |
| 6:13 | nick |  | nick:15 |
| 6:22 | händelse | printStart | sak=byggsats:grip |
| 6:24 | toast | fel | Ingen ström – trampa cykeln |
| 6:26 | händelse | printKlar | sak=byggsats:grip n=1 |
| 6:26 | toast | guld | ✅ |
| 6:26 | väntar | info:guld | Skräpgrip ska jag ha på mig. |
| 6:26 | händelse | tagitUrPrint | sak=byggsats:grip n=1 |
| 6:26 | paket |  | sms |
| 6:26 | väntar | ali | Ali här. Jag såg Skräpgrip på avstånd. Ett streck blev lite snett. Mitt fel. Vackert ändå. |
| 6:26 | sak | info:guld | Skräpgrip ska jag ha på mig. |
| 6:26 | kvitto-visas | info:guld | Skräpgrip ska jag ha på mig. |
| 6:26 | toast | guld | Skräpgrip ska jag ha på mig. |
| 6:28 | klar | info:guld | Skräpgrip ska jag ha på mig. |
| 6:30 | hjälp | kontroll | Klick: Klicka för att ta på dig den |
| 6:31 | väntar | info:guld | 🦾 Skräpgripen sitter! Jag bär 6, siktar lättare och plockar när jag går nära. |
| 6:31 | tog på | du | byggsats:grip |
| 6:31 | händelse | monterat | sak=grip |
| 6:31 | sak | info:guld | 🦾 Skräpgripen sitter! Jag bär 6, siktar lättare och plockar när jag går nära. |
| 6:31 | kvitto-visas | info:guld | 🦾 Skräpgripen sitter! Jag bär 6, siktar lättare och plockar när jag går nära. |
| 6:31 | toast | guld | 🦾 Skräpgripen sitter! Jag bär 6, siktar lättare och plockar när jag går nära. |
| 6:31 | händelse | malKlart | id=printGrip del=Dag 1 – Kom igång nasta=krukaD1 |
| 6:31 | väntar | du | Ali vill ha krukor. Jag printar en blomkruka. |
| 6:31 | MÅL |  | Printa och sälj nyckelringar |
| 6:31 | upplåst | inkomst | kruka |
| 6:31 | brott | UPPLÅST | kruka (inkomst 14 av 6) |
| 6:31 | händelse | upplast | id=kruka flask=inkomst |
| 6:31 | paket |  | tanke → sms |
| 6:31 | tanke | du | Nyckelringar, nyckelringar. Ali kan inte vilja ha fler. |
| 6:31 | väntar | du | Nyckelringar, nyckelringar. Ali kan inte vilja ha fler. |
| 6:31 | väntar | ali | Prova en kruka. Folk köper krukor. Ingen vet varför. |
| 6:31 | skratt | ali | Prova en kruka. Folk köper krukor. Ingen |
| 6:33 | klar | info:guld | 🦾 Skräpgripen sitter! Jag bär 6, siktar lättare och plockar när jag går nära. |
| 6:33 | målruta |  | Köp krukreceptet |
| 6:34 | väntar | bud | (tips) |
| 6:35 | kvittens-bock |  | ✓ Printa skräpgripen |
| 6:35 | sak | du | Ali vill ha krukor. Jag printar en blomkruka. |
| 6:35 | pil |  | Köp krukreceptet |
| 6:35 | notis | tanke | 💭 Ali vill ha krukor. Jag printar en blomkruka. |
| 6:35 | röst | du | Ali vill ha krukor. Jag printar en blomkruka. · MÅL |
| 6:35 | nick |  | nick:16 |
| 6:38 | händelse | kopt | sak=kruka |
| 6:38 | röst | ali | Bra val. Folk köper sånt. Jag vet inte varför. · STORY |
| 6:38 | butiksbubbla | ali | Blomkruka? Bra val. Folk köper sånt. Jag vet inte varför. |
| 6:38 | klar | du | Ali vill ha krukor. Jag printar en blomkruka. |
| 6:40 | sak | bud | (tips) |
| 6:41 | väntar | du | Jag har pengar nu. Hos Ali kan jag köpa uppgraderingar – bära mer eller printa snabbare. |
| 6:42 | klar | bud | (tips) |
| 6:44 | sak | du | Jag har pengar nu. Hos Ali kan jag köpa uppgraderingar – bära mer eller printa snabbare. |
| 6:44 | röst | du | Jag har pengar nu. Hos Ali kan jag köpa uppgraderingar – bära mer eller printa snabbare. · MÅL |
| 6:51 | klar | du | Jag har pengar nu. Hos Ali kan jag köpa uppgraderingar – bära mer eller printa snabbare. |
| 6:59 | händelse | printStart | sak=kruka |
| 6:59 | sak | ali | Ali här. Jag såg Skräpgrip på avstånd. Ett streck blev lite snett. Mitt fel. Vackert ändå. |
| 6:59 | sms | ali | Ali här. Jag såg Skräpgrip på avstånd. Ett streck blev lite snett. Mitt fel. Vackert ändå. |
| 6:59 | sms-bubbla | ali | Ali här. Jag såg Skräpgrip på avstånd. Ett streck blev lite snett. Mitt fel. Vackert ändå. |
| 6:59 | röst | ali | Ali här. Jag såg Skräpgrip på avstånd. Ett streck blev lite snett. Mitt fel. Vackert ändå. · REAKTION |
| 7:02 | toast | guld | ✅ |
| 7:02 | händelse | printKlar | sak=kruka n=1 |
| 7:02 | händelse | malKlart | id=krukaD1 del=Dag 1 – Kom igång nasta=saljKruka |
| 7:02 | kvittens | du | En kruka. Mamma skulle bli så stolt. Hon får inte veta. |
| 7:02 | väntar | du | En kruka. Mamma skulle bli så stolt. Hon får inte veta. |
| 7:02 | väntar | du | Ali gillar krukor. Han sa det själv. |
| 7:02 | MÅL |  | Sälj blomkrukan |
| 7:02 | händelse | tagitUrPrint | sak=kruka n=1 |
| 7:04 | målruta |  | Sälj blomkrukan |
| 7:07 | klar | ali | Ali här. Jag såg Skräpgrip på avstånd. Ett streck blev lite snett. Mitt fel. Vackert ändå. |
| 7:07 | sak | du | En kruka. Mamma skulle bli så stolt. Hon får inte veta. |
| 7:07 | röst | du | En kruka. Mamma skulle bli så stolt. Hon får inte veta. · STORY |
| 7:11 | klar | du | En kruka. Mamma skulle bli så stolt. Hon får inte veta. |
| 7:12 | sak | du | Ali gillar krukor. Han sa det själv. |
| 7:12 | pil |  | Sälj blomkrukan |
| 7:12 | notis | tanke | 💭 Ali gillar krukor. Han sa det själv. |
| 7:12 | röst | du | Ali gillar krukor. Han sa det själv. · MÅL |
| 7:15 | klar | du | Ali gillar krukor. Han sa det själv. |
| 7:21 | aliSalt | ali | 70 |
| 7:22 | händelse | malKlart | id=saljKruka del=Dag 1 – Kom igång nasta=kopSang |
| 7:22 | väntar | du | Jag tänker inte sova på betongen i natt. Ali har en säng. Typ. |
| 7:22 | MÅL |  | Köp sängen |
| 7:22 | målruta |  | Köp sängen |
| 7:23 | sak | du | Jag tänker inte sova på betongen i natt. Ali har en säng. Typ. |
| 7:23 | pil |  | Köp sängen |
| 7:23 | notis | tanke | 💭 Jag tänker inte sova på betongen i natt. Ali har en säng. Typ. |
| 7:23 | röst | du | Jag tänker inte sova på betongen i natt. Ali har en säng. Typ. · MÅL |
| 7:26 | kvittens-bock |  | ✓ Sälj blomkrukan |
| 7:28 | klar | du | Jag tänker inte sova på betongen i natt. Ali har en säng. Typ. |
| 7:31 | händelse | kopt | sak=sang |
| 7:31 | röst | ali | Sov gott, min vän. · STORY |
| 7:31 | butiksbubbla | ali | Sov gott, min vän. |
| 7:33 | händelse | malKlart | id=kopSang del=Dag 1 – Kom igång nasta=printSang |
| 7:33 | väntar | du | En säng tar lång tid. Den är värd det. |
| 7:33 | målruta |  | Printa sängen |
| 7:33 | MÅL |  | Printa sängen |
| 7:33 | sak | du | En säng tar lång tid. Den är värd det. |
| 7:33 | pil |  | Printa sängen |
| 7:33 | notis | tanke | 💭 En säng tar lång tid. Den är värd det. |
| 7:33 | röst | du | En säng tar lång tid. Den är värd det. · MÅL |
| 7:33 | nick |  | nick:19 |
| 7:36 | klar | du | En säng tar lång tid. Den är värd det. |
| 7:37 | kvittens-bock |  | ✓ Köp sängen |
| 7:55 | sak | du | Nyckelringar, nyckelringar. Ali kan inte vilja ha fler. |
| 7:55 | notis | tanke | 💭 Nyckelringar, nyckelringar. Ali kan inte vilja ha fler. |
| 7:55 | röst | du | Nyckelringar, nyckelringar. Ali kan inte vilja ha fler. · STORY |
| 7:59 | händelse | printStart | sak=sang |
| 8:00 | klar | du | Nyckelringar, nyckelringar. Ali kan inte vilja ha fler. |
| 8:01 | toast | fel | Ingen ström – trampa cykeln |
| 8:05 | toast | fel | Slut på tråd – mal mer så fortsätter den |
| 8:05 | väntar | notis:Storebrors skrivare: Slut på tråd – mal  | Storebrors skrivare: Slut på tråd – mal mer så fortsätter den |
| 8:08 | sak | ali | Prova en kruka. Folk köper krukor. Ingen vet varför. |
| 8:08 | skratt | ali | Prova en kruka. Folk köper krukor. Ingen |
| 8:08 | sms | ali | Prova en kruka. Folk köper krukor. Ingen vet varför. |
| 8:08 | skratt | ali | Prova en kruka. Folk köper krukor. Ingen |
| 8:08 | sms-bubbla | ali | Prova en kruka. Folk köper krukor. Ingen vet varför. |
| 8:08 | skratt | ali | Prova en kruka. Folk köper krukor. Ingen |
| 8:08 | röst | ali | Prova en kruka. Folk köper krukor. Ingen vet varför. · STORY |
| 8:12 | klar | ali | Prova en kruka. Folk köper krukor. Ingen vet varför. |
| 8:12 | skratt | ali | Prova en kruka. Folk köper krukor. Ingen |
| 8:25 | struken | notis:Storebrors skrivare: Slut på tråd – mal  | Storebrors skrivare: Slut på tråd – mal mer så fortsätter den |
| 8:28 | brott | DUBBEL UPPMANING | "veva" på 3 ställen: pekrutan, skylten Storebrors skrivare står still, skylten Tratten är full |
| 8:29 | toast | guld | ✅ |
| 8:29 | händelse | printKlar | sak=sang n=1 |
| 8:32 | händelse | tagitUrPrint | sak=sang n=1 |
| 8:32 | händelse | malKlart | id=printSang del=Dag 1 – Kom igång nasta=sov1 |
| 8:32 | kvittens | du | En säng. Jag printade en SÄNG. |
| 8:32 | väntar | du | En säng. Jag printade en SÄNG. |
| 8:32 | paket |  | lapp |
| 8:32 | kvallsrad | du | Nitton år. Inget mer tjat. Gården är full av skräp. I morgon. |
| 8:32 | väntar | du | Sängen ska in i skjulet. Sen sover jag. |
| 8:32 | MÅL |  | Sängen i skjulet |
| 8:32 | sak | du | En säng. Jag printade en SÄNG. |
| 8:32 | röst | du | En säng. Jag printade en SÄNG. · STORY |
| 8:32 | målruta |  | Sängen i skjulet |
| 8:34 | klar | du | En säng. Jag printade en SÄNG. |
| 8:35 | sak | du | Sängen ska in i skjulet. Sen sover jag. |
| 8:35 | pil |  | Sängen i skjulet |
| 8:35 | notis | tanke | 💭 Sängen ska in i skjulet. Sen sover jag. |
| 8:35 | röst | du | Sängen ska in i skjulet. Sen sover jag. · MÅL |
| 8:35 | nick |  | nick:20 |
| 8:38 | klar | du | Sängen ska in i skjulet. Sen sover jag. |
| 8:47 | nattkort | du | 🌙 Dag 1 är slut. God natt. zzz… i en riktig säng Nitton år. Inget mer tjat. Gården är full av skräp. I morgon. DAGENS PRINTAR Nyckelring × 14 Blomkruka × 1 Sän |

<details><summary>Botens handlingar dag 1</summary>

- 0:12 gå till brädhögen (3 m) (5 kr)
- 0:29 gå till cykeln vid vägen (2 m) (5 kr)
- 0:44 gå till rutan i linje 1 (13 m) (5 kr)
- 1:24 gå till cykeln (lyfter den) (13 m) (5 kr)
- 1:30 gå till cykelns plats (11 m) (5 kr)
- 1:33 gå till skrivaren (2 m) (5 kr)
- 1:35 printar Nyckelring (5 kr)
- 1:42 tar ut 1 st ur skrivaren (5 kr)
- 1:52 printar Nyckelring (sista av storebrors rulle) (5 kr)
- 2:07 tar ut 1 st ur skrivaren (5 kr)
- 2:13 gå till Ali (26 m) (5 kr)
- 2:13 öppnar Alis butik – sälja de två nyckelringarna (5 kr)
- 2:15 säljer hos Ali: +30 kr (35 kr)
- 2:28 öppnar Alis butik – köpa kvarnen (35 kr)
- 2:30 köper gammalkvarn för 30 kr (5 kr)
- 2:31 köpte kvarnen (5 kr)
- 2:44 gå till kvarnens ruta (28 m) (5 kr)
- 2:58 plockar 3 skräp på gården (bär max 3) (5 kr)
- 3:02 gå till kvarnen (18 m) (5 kr)
- 3:14 gå till cykeln (2 m) (5 kr)
- 3:16 printar Nyckelring (5 kr)
- 3:22 tar ut 1 st ur skrivaren (5 kr)
- 3:29 printar Nyckelring (5 kr)
- 3:31 tar ut 1 st ur skrivaren (5 kr)
- 3:33 printar Nyckelring (5 kr)
- 3:35 tar ut 1 st ur skrivaren (5 kr)
- 3:45 gå till Ali (27 m) (5 kr)
- 3:45 öppnar Alis butik – sälja nyckelringar (5 kr)
- 3:47 säljer hos Ali: +45 kr (50 kr)
- 4:01 öppnar Alis butik – Ali (powerbanken) (50 kr)
- 4:17 gå till koppla powerbanken till cykeln (24 m) (65 kr)
- 4:31 tjänar pengar till väntar på flaskhalsen för grip: 65/105 kr → printar nyckelring (15 kr) (65 kr)
- 4:32 gå till skrivaren (2 m) (65 kr)
- 4:33 printar Nyckelring (65 kr)
- 4:36 tar ut 1 st ur skrivaren (65 kr)
- 4:38 printar Nyckelring (65 kr)
- 4:43 plockar 3 skräp på gården (bär max 3) (65 kr)
- 4:45 gå till kvarnen (12 m) (65 kr)
- 4:50 gå till skrivaren (3 m) (65 kr)
- 4:50 tar ut 1 st ur skrivaren (65 kr)
- 4:52 printar Nyckelring (65 kr)
- 4:54 tar ut 1 st ur skrivaren (65 kr)
- 5:00 gå till Ali (28 m) (65 kr)
- 5:00 öppnar Alis butik – sälja (65 kr)
- 5:02 säljer hos Ali: +45 kr (110 kr)
- 5:03 tjänar pengar till väntar på flaskhalsen för grip: 110/150 kr → printar nyckelring (15 kr) (110 kr)
- 5:08 gå till skrivaren (25 m) (110 kr)
- 5:09 printar Nyckelring (110 kr)
- 5:12 tar ut 1 st ur skrivaren (110 kr)
- 5:13 printar Nyckelring (110 kr)
- 5:16 tar ut 1 st ur skrivaren (110 kr)
- 5:17 printar Nyckelring (110 kr)
- 5:19 gå till cykeln (1 m) (110 kr)
- 5:20 tar ut 1 st ur skrivaren (110 kr)
- 5:26 gå till Ali (25 m) (110 kr)
- 5:26 öppnar Alis butik – sälja (110 kr)
- 5:28 säljer hos Ali: +45 kr (155 kr)
- 5:30 tjänar pengar till väntar på flaskhalsen för grip: 155/195 kr → printar nyckelring (15 kr) (155 kr)
- 5:35 gå till skrivaren (25 m) (155 kr)
- 5:36 printar Nyckelring (155 kr)
- 5:43 plockar 3 skräp på gården (bär max 3) (155 kr)
- 5:47 gå till kvarnen (18 m) (155 kr)
- 5:51 gå till skrivaren (3 m) (155 kr)
- 5:51 tar ut 1 st ur skrivaren (155 kr)
- 5:53 printar Nyckelring (155 kr)
- 5:55 tar ut 1 st ur skrivaren (155 kr)
- 5:57 printar Nyckelring (155 kr)
- 5:59 tar ut 1 st ur skrivaren (155 kr)
- 6:05 gå till Ali (28 m) (155 kr)
- 6:05 öppnar Alis butik – sälja (155 kr)
- 6:07 säljer hos Ali: +45 kr (200 kr)
- 6:09 öppnar Alis butik – köpa skräpgrip (200 kr)
- 6:11 köper grip för 50 kr (150 kr)
- 6:20 gå till skrivaren (25 m) (150 kr)
- 6:22 printar Skräpgrip (150 kr)
- 6:24 gå till cykeln (1 m) (150 kr)
- 6:27 tar ut 1 st ur skrivaren (150 kr)
- 6:31 tar på grip (150 kr)
- 6:36 gå till Ali (25 m) (150 kr)
- 6:36 öppnar Alis butik – köpa receptet blomkruka (150 kr)
- 6:39 köper kruka för 40 kr (110 kr)
- 6:58 gå till skrivaren (25 m) (110 kr)
- 6:59 printar Blomkruka (110 kr)
- 7:03 tar ut 1 st ur skrivaren (110 kr)
- 7:20 gå till Ali (25 m) (110 kr)
- 7:20 öppnar Alis butik – sälja krukan (110 kr)
- 7:22 säljer hos Ali: +70 kr (180 kr)
- 7:30 öppnar Alis butik – köpa sängen (180 kr)
- 7:32 köper sang för 60 kr (120 kr)
- 7:48 plockar 6 skräp på gården (bär max 6) (120 kr)
- 7:54 gå till kvarnen (33 m) (120 kr)
- 7:58 gå till skrivaren (1 m) (120 kr)
- 7:59 printar Säng (120 kr)
- 8:01 gå till cykeln (2 m) (120 kr)
- 8:19 plockar 6 skräp på gården (bär max 6) (120 kr)
- 8:26 gå till kvarnen (34 m) (120 kr)
- 8:32 gå till skrivaren (3 m) (120 kr)
- 8:32 tar ut 1 st ur skrivaren (120 kr)
- 8:44 gå till sängplatsen i skjulet (21 m) (120 kr)

</details>

## Dag 2

| Tid | Källa | Vem | Text |
|---|---|---|---|
| 8:47 | vara | ali | kruka |
| 8:47 | händelse | malKlart | id=sov1 del=Dag 1 – Kom igång nasta=kopMotor |
| 8:47 | MÅL |  | Mal skräp, printa och sälj |
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
| 0:17 | händelse | printStart | sak=kruka |
| 0:18 | klar | du | Vevandet tar på armarna. Ali har en motor till kvarnen. |
| 0:19 | toast | fel | Ingen ström – trampa cykeln |
| 0:20 | sak | notis:morgon | Ali vill ha idag: Blomkruka · +50 % |
| 0:20 | notis |  | Blomkruka · +50 % |
| 0:21 | toast | guld | ✅ |
| 0:21 | händelse | printKlar | sak=kruka n=2 |
| 0:22 | händelse | tagitUrPrint | sak=kruka n=1 |
| 0:22 | struken | kedja | kruka |
| 0:24 | klar | notis:morgon | Ali vill ha idag: Blomkruka · +50 % |
| 0:25 | hjälp | kontroll | R: Vrid innan du ställer ner |
| 0:26 | sak | notis:Första natten i en riktig säng. Jag prin | Första natten i en riktig säng. Jag printade den själv. |
| 0:26 | notis | dagbok | Första natten i en riktig säng. Jag printade den själv. |
| 0:27 | väntar | ali | Ali här. Såg skylten. Stavningen är rätt. Det är mer än många. |
| 0:27 | väntar | foto | Egen säng |
| 0:27 | paket |  | tanke |
| 0:27 | tanke | du | Tänk att jag ska få sova i min egen säng. |
| 0:27 | väntar | du | Tänk att jag ska få sova i min egen säng. |
| 0:27 | röst | ali | Kunder, kunder. Ingen ingenjör. Förutom du kanske. · STORY |
| 0:27 | butiksbubbla | ali | Kunder, kunder. Ingen ingenjör. Förutom du kanske. |
| 0:28 | klar | notis:Första natten i en riktig säng. Jag prin | Första natten i en riktig säng. Jag printade den själv. |
| 0:29 | aliSalt | ali | 105 |
| 0:29 | butiksbubbla | ali | Precis vad jag ville ha idag. 105 kr – med extra. |
| 0:29 | väntar | ali | Precis det jag ville ha idag, min vän. |
| 0:30 | sak | ali | Precis det jag ville ha idag, min vän. |
| 0:30 | röst | ali | Precis det jag ville ha idag, min vän. · STORY |
| 0:33 | klar | ali | Precis det jag ville ha idag, min vän. |
| 0:42 | händelse | printStart | sak=kruka |
| 0:45 | toast | guld | ✅ |
| 0:45 | händelse | printKlar | sak=kruka n=3 |
| 0:45 | händelse | tagitUrPrint | sak=kruka n=1 |
| 0:52 | aliSalt | ali | 105 |
| 1:03 | skratt | du | falsk tuta |
| 1:04 | sopsack | rolf | Sopsäckarna landade på gården |
| 1:04 | paket |  | tanke → ge |
| 1:04 | tanke | du | Hmm, vad kastade gubben ut ur sopbilen? Jag går och kollar. |
| 1:04 | väntar | du | Hmm, vad kastade gubben ut ur sopbilen? Jag går och kollar. |
| 1:04 | väntar |  | (läget ändras) |
| 1:04 | sak | du | Hmm, vad kastade gubben ut ur sopbilen? Jag går och kollar. |
| 1:04 | notis | tanke | 💭 Hmm, vad kastade gubben ut ur sopbilen? Jag går och kollar. |
| 1:04 | röst | du | Hmm, vad kastade gubben ut ur sopbilen? Jag går och kollar. · STORY |
| 1:05 | väntar | du | Sopbilen tippade en ny last. Allt det skräpet – och grinden är låst. |
| 1:05 | skratt | du | däcket rullar iväg |
| 1:09 | klar | du | Hmm, vad kastade gubben ut ur sopbilen? Jag går och kollar. |
| 1:09 | sak | du | Sopbilen tippade en ny last. Allt det skräpet – och grinden är låst. |
| 1:09 | kvitto-visas | du | Sopbilen tippade en ny last. Allt det skräpet – och grinden är låst. |
| 1:09 | lapp | 📔 Dagbok | Sopbilen tippade en ny last. Allt det skräpet – och grinden är låst. |
| 1:09 | dagbokrad | du | Sopbilen tippade en ny last. Allt det skräpet – och grinden är låst. |
| 1:09 | notis | dagbok | Sopbilen tippade en ny last. Allt det skräpet – och grinden är låst. |
| 1:09 | klar | du | Sopbilen tippade en ny last. Allt det skräpet – och grinden är låst. |
| 1:13 | sak |  | (läget ändras) |
| 1:13 | klar |  | (läget ändras) |
| 1:16 | händelse | printStart | sak=kruka |
| 1:20 | toast | guld | ✅ |
| 1:20 | händelse | printKlar | sak=kruka n=4 |
| 1:21 | händelse | tagitUrPrint | sak=kruka n=1 |
| 1:28 | aliSalt | ali | 105 |
| 1:37 | händelse | printStart | sak=kruka |
| 1:40 | toast | guld | ✅ |
| 1:40 | händelse | printKlar | sak=kruka n=5 |
| 1:40 | händelse | tagitUrPrint | sak=kruka n=1 |
| 1:42 | sak | foto | Egen säng |
| 1:42 | foto | du | Egen säng |
| 1:43 | hjälp | kontroll | R: Vrid innan du ställer ner |
| 1:44 | klar | foto | Egen säng |
| 1:47 | aliSalt | ali | 105 |
| 1:48 | struken | ali | Ali här. Såg skylten. Stavningen är rätt. Det är mer än många. |
| 1:52 | sak | du | Tänk att jag ska få sova i min egen säng. |
| 1:52 | notis | tanke | 💭 Tänk att jag ska få sova i min egen säng. |
| 1:52 | röst | du | Tänk att jag ska få sova i min egen säng. · STORY |
| 1:56 | klar | du | Tänk att jag ska få sova i min egen säng. |
| 1:57 | väntar | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått generator. Vi tar en låt på det. Den här är till dig, Gunnar. |
| 1:57 | radio | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått generator. Vi tar en låt på det. Den här är till dig, Gunnar. |
| 1:57 | skratt | du | Radio-Kjelle |
| 1:58 | sak | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått generator. Vi tar en låt på det. Den här är till dig, Gunnar. |
| 1:58 | notis |  | 📻 Radio Tippen: Radio Tippen, Kjelle här. Skjulet vid tippen har fått generator. Vi tar en låt på det. Den här är till dig, Gunnar. |
| 1:58 | röst | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått generator. Vi tar en låt på det. Den här är till dig, Gunnar. · REAKTION |
| 2:07 | klar | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått generator. Vi tar en låt på det. Den här är till dig, Gunnar. |
| 2:12 | händelse | printStart | sak=kruka |
| 2:14 | toast | fel | Ingen ström – trampa cykeln |
| 2:15 | toast | guld | ✅ |
| 2:15 | händelse | printKlar | sak=kruka n=6 |
| 2:16 | händelse | tagitUrPrint | sak=kruka n=1 |
| 2:24 | aliSalt | ali | 105 |
| 2:33 | händelse | printStart | sak=kruka |
| 2:35 | toast | guld | ✅ |
| 2:35 | händelse | printKlar | sak=kruka n=7 |
| 2:36 | händelse | tagitUrPrint | sak=kruka n=1 |
| 2:43 | aliSalt | ali | 105 |
| 3:00 | väntar | info:guld | 🚛 Sopbilen tippade en ny last på soptippen! |
| 3:00 | sak | info:guld | 🚛 Sopbilen tippade en ny last på soptippen! |
| 3:00 | kvitto-visas | info:guld | 🚛 Sopbilen tippade en ny last på soptippen! |
| 3:00 | toast | guld | 🚛 Sopbilen tippade en ny last på soptippen! |
| 3:01 | upplåst | mala | kvarnmotor |
| 3:01 | brott | UPPLÅST | kvarnmotor (mala 15 av 6) |
| 3:01 | händelse | upplast | id=kvarnmotor flask=mala |
| 3:01 | paket |  | tanke → sms |
| 3:01 | tanke | du | Mina armar… Kvarnen borde veva själv. |
| 3:01 | väntar | du | Mina armar… Kvarnen borde veva själv. |
| 3:01 | väntar | ali | Ali här. En motor? Jag har en. Från en gammal tvättmaskin. Den centrifugerar fortfarande om man ber snällt. |
| 3:02 | klar | info:guld | 🚛 Sopbilen tippade en ny last på soptippen! |
| 3:03 | paket |  | tanke |
| 3:03 | tanke | du | Jaha. En kalsong. Använd. |
| 3:03 | väntar | du | Jaha. En kalsong. Använd. |
| 3:03 | skratt | du | kvarnen spottar |
| 3:06 | händelse | printStart | sak=kruka |
| 3:07 | skratt | du | falsk tuta |
| 3:07 | väntar | värld:TUUT! Tjena! | TUUT! Tjena! |
| 3:10 | toast | guld | ✅ |
| 3:10 | händelse | printKlar | sak=kruka n=8 |
| 3:11 | händelse | tagitUrPrint | sak=kruka n=1 |
| 3:15 | hjälp | kontroll | R: Vrid innan du ställer ner |
| 3:17 | sak | ali | Ali här. En motor? Jag har en. Från en gammal tvättmaskin. Den centrifugerar fortfarande om man ber snällt. |
| 3:17 | sms | ali | Ali här. En motor? Jag har en. Från en gammal tvättmaskin. Den centrifugerar fortfarande om man ber snällt. |
| 3:17 | sms-bubbla | ali | Ali här. En motor? Jag har en. Från en gammal tvättmaskin. Den centrifugerar fortfarande om man ber snällt. |
| 3:17 | röst | ali | Ali här. En motor? Jag har en. Från en gammal tvättmaskin. Den centrifugerar fortfarande om man ber snällt. · STORY |
| 3:18 | aliSalt | ali | 105 |
| 3:23 | väntar | mamma | Har du frusit än? |
| 3:26 | klar | ali | Ali här. En motor? Jag har en. Från en gammal tvättmaskin. Den centrifugerar fortfarande om man ber snällt. |
| 3:28 | struken | du | Jaha. En kalsong. Använd. |
| 3:30 | struken | info:guld | 3D-modell köpt – printa kvarnmotor |
| 3:30 | händelse | kopt | sak=kvarnmotor |
| 3:31 | händelse | malKlart | id=kopMotor del=Dag 2 – Tippen bredvid nasta=monteraMotor |
| 3:31 | struken | kedja | motorKopt |
| 3:31 | väntar | du | Motorn ska sitta där veven sitter. Jag printar den först. |
| 3:31 | målruta |  | Printa kvarnmotorn till kvarnen |
| 3:31 | MÅL |  | Printa kvarnmotorn till kvarnen |
| 3:31 | sak | du | Motorn ska sitta där veven sitter. Jag printar den först. |
| 3:31 | pil |  | Printa kvarnmotorn till kvarnen |
| 3:31 | notis | tanke | 💭 Motorn ska sitta där veven sitter. Jag printar den först. |
| 3:31 | röst | du | Motorn ska sitta där veven sitter. Jag printar den först. · MÅL |
| 3:32 | nick |  | nick:22 |
| 3:35 | kvittens-bock |  | ✓ Köp kvarnmotorn hos Ali (50 kr) |
| 3:36 | klar | du | Motorn ska sitta där veven sitter. Jag printar den först. |
| 3:38 | struken | värld:TUUT! Tjena! | TUUT! Tjena! |
| 3:45 | händelse | printStart | sak=byggsats:kvarnmotor |
| 3:47 | händelse | printKlar | sak=byggsats:kvarnmotor n=1 |
| 3:47 | toast | guld | ✅ |
| 3:48 | väntar | info:guld | ⚙️ Kvarnmotorn ska skruvas fast på kvarnen. |
| 3:48 | händelse | tagitUrPrint | sak=byggsats:kvarnmotor n=1 |
| 3:48 | paket |  | sms |
| 3:48 | väntar | ali | Ali här. Ännu en ritning som blev på riktigt: Kvarnmotor. Semesterkassan växer. Livet växer. |
| 3:48 | sak | info:guld | ⚙️ Kvarnmotorn ska skruvas fast på kvarnen. |
| 3:48 | kvitto-visas | info:guld | ⚙️ Kvarnmotorn ska skruvas fast på kvarnen. |
| 3:48 | toast | guld | ⚙️ Kvarnmotorn ska skruvas fast på kvarnen. |
| 3:50 | klar | info:guld | ⚙️ Kvarnmotorn ska skruvas fast på kvarnen. |
| 3:53 | väntar | info:guld | ⚙️ Motorn sitter där veven satt – nu mal kvarnen själv. |
| 3:53 | händelse | monterat | sak=kvarnmotor |
| 3:53 | paket |  | tanke |
| 3:53 | tanke | du | Motorn sitter där veven satt. Mina armar tackar. |
| 3:53 | väntar | du | Motorn sitter där veven satt. Mina armar tackar. |
| 3:53 | monterat | du | byggsats:kvarnmotor |
| 3:53 | händelse | monterat | sak=kvarnmotor |
| 3:53 | sak | info:guld | ⚙️ Motorn sitter där veven satt – nu mal kvarnen själv. |
| 3:53 | kvitto-visas | info:guld | ⚙️ Motorn sitter där veven satt – nu mal kvarnen själv. |
| 3:53 | toast | guld | ⚙️ Motorn sitter där veven satt – nu mal kvarnen själv. |
| 3:53 | händelse | malKlart | id=monteraMotor del=Dag 2 – Tippen bredvid nasta=kopSack |
| 3:53 | struken | du | Motorn sitter där veven satt. Mina armar tackar. |
| 3:53 | väntar | du | Gården är full av skräp. Jag börjar vid skjulet. |
| 3:53 | MÅL |  | Kolla vad som flög ut från sopbilen |
| 3:55 | klar | info:guld | ⚙️ Motorn sitter där veven satt – nu mal kvarnen själv. |
| 3:55 | målruta |  | Kolla vad som flög ut från sopbilen |
| 3:57 | kvittens-bock |  | ✓ Printa kvarnmotorn till kvarnen |
| 3:57 | sak | du | Gården är full av skräp. Jag börjar vid skjulet. |
| 3:57 | pil |  | Kolla vad som flög ut från sopbilen |
| 3:57 | notis | tanke | 💭 Gården är full av skräp. Jag börjar vid skjulet. |
| 3:57 | röst | du | Gården är full av skräp. Jag börjar vid skjulet. · MÅL |
| 4:01 | klar | du | Gården är full av skräp. Jag börjar vid skjulet. |
| 4:06 | paket |  | brev → ge → tanke |
| 4:06 | väntar | rolf | Du sliter ju. Ingen gör så nuförtin. Ta dessa så går dä lättare. / grannen – ja kör sopbilen å har hand om tippen bredvid. MVH ROLF​ |
| 4:06 | väntar |  | (läget ändras) |
| 4:06 | tanke | du | Rolf… gubben i sopbilen. Han har tippen bredvid. Han verkar schysst. |
| 4:06 | okänt ord bytt | du | Rolf… gubben i sopbilen. Han har tippen bredvid. Han verkar schysst. |
| 4:06 | väntar | du | Rolf… gubben i sopbilen. Han har tippen bredvid. Han verkar schysst. |
| 4:06 | sak | rolf | Du sliter ju. Ingen gör så nuförtin. Ta dessa så går dä lättare. / grannen – ja kör sopbilen å har hand om tippen bredvid. MVH ROLF​ |
| 4:06 | lapp | Lapp från Rolf | Du sliter ju. Ingen gör så nuförtin. Ta dessa så går dä lättare. / grannen – ja kör sopbilen å har hand om tippen bredvid. MVH ROLF​ |
| 4:06 | röst | rolf | Du sliter ju. Ingen gör så nuförtin. Ta dessa så går dä lättare. / grannen – ja kör sopbilen å har hand om tippen bredvid. MVH ROLF​ · STORY |
| 4:07 | hjälp | kontroll | Klick: Klicka för att ta på dig den |
| 4:17 | klar | rolf | Du sliter ju. Ingen gör så nuförtin. Ta dessa så går dä lättare. / grannen – ja kör sopbilen å har hand om tippen bredvid. MVH ROLF​ |
| 4:19 | väntar | info:guld | 🗑️ Sopsäcken är över axeln! Nu bär jag 10 skräp. |
| 4:19 | tog på | du | byggsats:korg |
| 4:19 | händelse | monterat | sak=korg |
| 4:19 | sak | info:guld | 🗑️ Sopsäcken är över axeln! Nu bär jag 10 skräp. |
| 4:19 | kvitto-visas | info:guld | 🗑️ Sopsäcken är över axeln! Nu bär jag 10 skräp. |
| 4:19 | toast | guld | 🗑️ Sopsäcken är över axeln! Nu bär jag 10 skräp. |
| 4:19 | händelse | malKlart | id=kopSack del=Dag 2 – Tippen bredvid nasta=n1-stada-klart-garden |
| 4:19 | händelse | malKlart | id=n1-stada-klart-garden del=Dag 2 – Tippen bredvid nasta=rolf0-brev |
| 4:19 | väntar | du | Gården är STÄDAD, av mig, frivilligt. Mamma skulle aldrig tro det. |
| 4:19 | väntar | du | Vänta på sopbilen. Den lämnar något. |
| 4:19 | MÅL |  | Vänta på sopbilen. Den lämnar något. |
| 4:21 | klar | info:guld | 🗑️ Sopsäcken är över axeln! Nu bär jag 10 skräp. |
| 4:21 | sak | du | Gården är STÄDAD, av mig, frivilligt. Mamma skulle aldrig tro det. |
| 4:21 | kvitto-visas | du | Gården är STÄDAD, av mig, frivilligt. Mamma skulle aldrig tro det. |
| 4:21 | lapp | 📔 Dagbok | Gården är STÄDAD, av mig, frivilligt. Mamma skulle aldrig tro det. |
| 4:21 | dagbokrad | du | Gården är STÄDAD, av mig, frivilligt. Mamma skulle aldrig tro det. |
| 4:21 | notis | dagbok | Gården är STÄDAD, av mig, frivilligt. Mamma skulle aldrig tro det. |
| 4:21 | klar | du | Gården är STÄDAD, av mig, frivilligt. Mamma skulle aldrig tro det. |
| 4:21 | målruta |  | Vänta på sopbilen. Den lämnar något. |
| 4:21 | sak | du | Vänta på sopbilen. Den lämnar något. |
| 4:21 | pil |  | Vänta på sopbilen. Den lämnar något. |
| 4:21 | röst | du | Vänta på sopbilen. Den lämnar något. · MÅL |
| 4:23 | händelse | printStart | sak=kruka |
| 4:24 | klar | du | Vänta på sopbilen. Den lämnar något. |
| 4:25 | toast | fel | Ingen ström – trampa cykeln |
| 4:26 | sak |  | (läget ändras) |
| 4:26 | klar |  | (läget ändras) |
| 4:27 | toast | guld | ✅ |
| 4:27 | händelse | printKlar | sak=kruka n=9 |
| 4:28 | händelse | tagitUrPrint | sak=kruka n=1 |
| 4:30 | sak | du | Rolf… gubben i sopbilen. Han har tippen bredvid. Han verkar schysst. |
| 4:30 | notis | tanke | 💭 Rolf… gubben i sopbilen. Han har tippen bredvid. Han verkar schysst. |
| 4:30 | röst | du | Rolf… gubben i sopbilen. Han har tippen bredvid. Han verkar schysst. · STORY |
| 4:35 | aliSalt | ali | 105 |
| 4:36 | klar | du | Rolf… gubben i sopbilen. Han har tippen bredvid. Han verkar schysst. |
| 4:38 | upplåst | skrivare | rullstall |
| 4:38 | brott | UPPLÅST | rullstall (skrivare 139 av 60) |
| 4:38 | händelse | upplast | id=rullstall flask=skrivare |
| 4:38 | paket |  | tanke → sms |
| 4:38 | tanke | du | Kvarnen står och väntar för att hållaren är full. Om den rymde fler rullar kunde den mala hela tiden. |
| 4:38 | väntar | du | Kvarnen står och väntar för att hållaren är full. Om den rymde fler rullar kunde den mala hela tiden. |
| 4:38 | väntar | ali | Ali här. Rullställ. Fyra rullar i stället för en. Har ett på hyllan. |
| 4:44 | sak | du | Mina armar… Kvarnen borde veva själv. |
| 4:44 | notis | tanke | 💭 Mina armar… Kvarnen borde veva själv. |
| 4:44 | röst | du | Mina armar… Kvarnen borde veva själv. · STORY |
| 4:45 | händelse | printStart | sak=kruka |
| 4:47 | väntar | mamma | Har du frusit än? |
| 4:47 | klar | du | Mina armar… Kvarnen borde veva själv. |
| 4:48 | toast | guld | ✅ |
| 4:48 | händelse | printKlar | sak=kruka n=10 |
| 4:48 | händelse | tagitUrPrint | sak=kruka n=1 |
| 4:48 | paket |  | tanke → ge |
| 4:48 | tanke | du | Flaggan är uppe. Rolf har lämnat något. |
| 4:48 | väntar | du | Flaggan är uppe. Rolf har lämnat något. |
| 4:48 | väntar |  | (läget ändras) |
| 4:49 | skratt | du | falsk tuta |
| 4:49 | sak | du | Flaggan är uppe. Rolf har lämnat något. |
| 4:49 | notis | tanke | 💭 Flaggan är uppe. Rolf har lämnat något. |
| 4:49 | röst | du | Flaggan är uppe. Rolf har lämnat något. · STORY |
| 4:53 | klar | du | Flaggan är uppe. Rolf har lämnat något. |
| 4:55 | skratt | du | däcket rullar iväg |
| 4:55 | aliSalt | ali | 105 |
| 4:56 | sak |  | (läget ändras) |
| 4:56 | brev | rolf | rolf:0 |
| 4:56 | klar |  | (läget ändras) |
| 5:04 | väntar | rolf | Såg att du printar grejer. Kan du göra en sån hä? Kall öl ä viktigt. /Rolf​ |
| 5:04 | paket |  | ge |
| 5:04 | väntar |  | (läget ändras) |
| 5:04 | sak | rolf | Såg att du printar grejer. Kan du göra en sån hä? Kall öl ä viktigt. /Rolf​ |
| 5:04 | lapp | Brev från Rolf | Såg att du printar grejer. Kan du göra en sån hä? Kall öl ä viktigt. /Rolf​ |
| 5:04 | röst | rolf | Såg att du printar grejer. Kan du göra en sån hä? Kall öl ä viktigt. /Rolf​ · STORY |
| 5:04 | händelse | malKlart | id=rolf0-brev del=Dag 2 – Tippen bredvid nasta=rolf0-printa |
| 5:04 | väntar | du | Printa ölhållare med kylklamp. |
| 5:04 | MÅL |  | Printa ölhållare med kylklamp |
| 5:06 | målruta |  | Printa ölhållare med kylklamp |
| 5:07 | händelse | printStart | sak=olhallare |
| 5:07 | händelse | malKlart | id=rolf0-printa del=Dag 2 – Tippen bredvid nasta=rolf0-ge |
| 5:07 | väntar | du | Ge Rolf ölhållare med kylklamp. |
| 5:07 | MÅL |  | Ge Rolf ölhållare med kylklamp |
| 5:10 | målruta |  | Ge Rolf ölhållare med kylklamp |
| 5:10 | klar | rolf | Såg att du printar grejer. Kan du göra en sån hä? Kall öl ä viktigt. /Rolf​ |
| 5:10 | händelse | brevLast | id=rolf:0 |
| 5:11 | kvittens-bock |  | ✓ Printa ölhållare med kylklamp |
| 5:12 | toast | guld | ✅ |
| 5:12 | händelse | printKlar | sak=olhallare n=1 |
| 5:12 | händelse | tagitUrPrint | sak=olhallare n=1 |
| 5:12 | struken | du | Printa ölhållare med kylklamp. |
| 5:12 | sak | du | Ge Rolf ölhållare med kylklamp. |
| 5:12 | pil |  | Ge Rolf ölhållare med kylklamp |
| 5:12 | röst | du | Ge Rolf ölhållare med kylklamp. · MÅL |
| 5:13 | väntar | bud | (tips) |
| 5:14 | klar | du | Ge Rolf ölhållare med kylklamp. |
| 5:16 | sak | bud | (tips) |
| 5:17 | väntar | du | Klart! Nu lägger jag den i Rolfs brevlåda vid grinden. |
| 5:18 | klar | bud | (tips) |
| 5:20 | sak | du | Klart! Nu lägger jag den i Rolfs brevlåda vid grinden. |
| 5:20 | röst | du | Klart! Nu lägger jag den i Rolfs brevlåda vid grinden. · MÅL |
| 5:24 | klar | du | Klart! Nu lägger jag den i Rolfs brevlåda vid grinden. |
| 5:26 | struken | ali | Ali här. Ännu en ritning som blev på riktigt: Kvarnmotor. Semesterkassan växer. Livet växer. |
| 5:26 | sak |  | (läget ändras) |
| 5:27 | klar |  | (läget ändras) |
| 5:27 | väntar | info:info | 🍺 Jag tar fram ölhållare med kylklamp. Den ska i postlådan. |
| 5:27 | händelse | lagtIPostlada | sak=olhallare rolf=0 jobb=false |
| 5:27 | struken | kedja | rolf0 |
| 5:27 | paket |  | tanke |
| 5:27 | tanke | du | Flaggan uppe. Nu får Rolf hämta den. |
| 5:27 | väntar | du | Flaggan uppe. Nu får Rolf hämta den. |
| 5:27 | händelse | malKlart | id=rolf0-ge del=Dag 2 – Tippen bredvid nasta=vindsnurra |
| 5:27 | väntar | du | En vindsnurra på skjulets tak. Då blir det ström när det blåser. |
| 5:27 | målruta |  | Trampa, printa och sälj |
| 5:27 | MÅL |  | Trampa, printa och sälj |
| 5:27 | upplåst | trampa | vindsnurra |
| 5:27 | brott | UPPLÅST | vindsnurra (trampa 26 av 6) |
| 5:27 | händelse | upplast | id=vindsnurra flask=trampa |
| 5:27 | paket |  | tanke → sms |
| 5:27 | tanke | du | Mina ben är slut. Det blåser hela tiden här ute. Tänk om vinden kunde trampa åt mig. |
| 5:27 | väntar | du | Mina ben är slut. Det blåser hela tiden här ute. Tänk om vinden kunde trampa åt mig. |
| 5:27 | väntar | ali | Ali här. Vindsnurra till cykeln. Vinden trampar åt dig. Den är lat, men den jobbar gratis. |
| 5:28 | sak | du | En vindsnurra på skjulets tak. Då blir det ström när det blåser. |
| 5:28 | pil |  | Printa vindsnurran till taket |
| 5:28 | notis | tanke | 💭 En vindsnurra på skjulets tak. Då blir det ström när det blåser. |
| 5:28 | röst | du | En vindsnurra på skjulets tak. Då blir det ström när det blåser. · MÅL |
| 5:28 | nick |  | nick:28 |
| 5:31 | kvittens-bock |  | ✓ Ge Rolf ölhållare med kylklamp |
| 5:33 | klar | du | En vindsnurra på skjulets tak. Då blir det ström när det blåser. |
| 5:35 | sak | du | Flaggan uppe. Nu får Rolf hämta den. |
| 5:35 | notis | tanke | 💭 Flaggan uppe. Nu får Rolf hämta den. |
| 5:35 | röst | du | Flaggan uppe. Nu får Rolf hämta den. · REAKTION |
| 5:38 | klar | du | Flaggan uppe. Nu får Rolf hämta den. |
| 5:40 | sak | du | Mina ben är slut. Det blåser hela tiden här ute. Tänk om vinden kunde trampa åt mig. |
| 5:40 | notis | tanke | 💭 Mina ben är slut. Det blåser hela tiden här ute. Tänk om vinden kunde trampa åt mig. |
| 5:40 | röst | du | Mina ben är slut. Det blåser hela tiden här ute. Tänk om vinden kunde trampa åt mig. · STORY |
| 5:45 | upplåst | skrivare | trim_skrivare |
| 5:45 | brott | UPPLÅST | trim_skrivare (skrivare 60 av 60) |
| 5:45 | händelse | upplast | id=trim_skrivare flask=skrivare |
| 5:45 | paket |  | sms |
| 5:45 | väntar | ali | Ali här. Skrivartrim. Jag skruvade på min egen skrivare i natt. Den går fortare nu. Nästan för fort. |
| 5:47 | klar | du | Mina ben är slut. Det blåser hela tiden här ute. Tänk om vinden kunde trampa åt mig. |
| 5:47 | röst | ali | Rolf gav mig en kanna. Som min farmors. Jag ritade en sak åt honom. Säg inget, han gråter lätt. · STORY |
| 5:47 | butiksbubbla | ali | Rolf gav mig en kanna. Som min farmors. Jag ritade en sak åt honom. Säg inget, han gråter lätt. |
| 5:49 | struken | info:guld | 3D-modell köpt – printa vindsnurra till skjultaket |
| 5:49 | händelse | kopt | sak=vindsnurra |
| 5:52 | struken | ali | Ali här. Vindsnurra till cykeln. Vinden trampar åt dig. Den är lat, men den jobbar gratis. |
| 5:52 | struken | info:info | 🍺 Jag tar fram ölhållare med kylklamp. Den ska i postlådan. |
| 5:54 | struken | mamma | Har du frusit än? |
| 5:57 | händelse | printStart | sak=byggsats:vindsnurra |
| 6:01 | händelse | printKlar | sak=byggsats:vindsnurra n=1 |
| 6:01 | toast | guld | ✅ |
| 6:01 | väntar | info:guld | 🌬️ Vindsnurran ska upp på skjulets tak. |
| 6:01 | händelse | tagitUrPrint | sak=byggsats:vindsnurra n=1 |
| 6:01 | sak | info:guld | 🌬️ Vindsnurran ska upp på skjulets tak. |
| 6:01 | kvitto-visas | info:guld | 🌬️ Vindsnurran ska upp på skjulets tak. |
| 6:01 | toast | guld | 🌬️ Vindsnurran ska upp på skjulets tak. |
| 6:03 | klar | info:guld | 🌬️ Vindsnurran ska upp på skjulets tak. |
| 6:09 | händelse | placerat | sak=vindsnurra |
| 6:09 | kvittens | du | Den snurrar! Långsamt. Men den snurrar. |
| 6:09 | varför-köad | du | Om det regnar i natt drunknar jag. Ett tak. |
| 6:09 | väntar | du | Den snurrar! Långsamt. Men den snurrar. |
| 6:09 | väntar | info:guld | 🌬️ Vindsnurran sitter på taket – den trampar cykeln åt mig när det blåser |
| 6:09 | monterat | du | byggsats:vindsnurra |
| 6:09 | händelse | monterat | sak=vindsnurra |
| 6:09 | sak | du | Den snurrar! Långsamt. Men den snurrar. |
| 6:09 | notis | tanke | 💭 Den snurrar! Långsamt. Men den snurrar. |
| 6:09 | röst | du | Den snurrar! Långsamt. Men den snurrar. · STORY |
| 6:09 | händelse | malKlart | id=vindsnurra del=Dag 2 – Tippen bredvid nasta=n1-bygg-dorr-skjulet |
| 6:09 | väntar | du | Det drar från dörrhålet. En dörr kan jag printa. |
| 6:09 | MÅL |  | Bygg en dörr till skjulet |
| 6:12 | målruta |  | Bygg en dörr till skjulet |
| 6:12 | klar | du | Den snurrar! Långsamt. Men den snurrar. |
| 6:15 | sak | du | Det drar från dörrhålet. En dörr kan jag printa. |
| 6:15 | pil |  | Bygg en dörr till skjulet |
| 6:15 | notis | tanke | 💭 Det drar från dörrhålet. En dörr kan jag printa. |
| 6:15 | röst | du | Det drar från dörrhålet. En dörr kan jag printa. · MÅL |
| 6:16 | nick |  | nick:29 |
| 6:18 | struken | info:guld | 3D-modell köpt – printa dörr |
| 6:18 | händelse | kopt | sak=dorr |
| 6:19 | klar | du | Det drar från dörrhålet. En dörr kan jag printa. |
| 6:20 | struken | info:guld | 🌬️ Vindsnurran sitter på taket – den trampar cykeln åt mig när det blåser |
| 6:27 | händelse | printStart | sak=byggsats:dorr |
| 6:27 | sak | du | Kvarnen står och väntar för att hållaren är full. Om den rymde fler rullar kunde den mala hela tiden. |
| 6:27 | notis | tanke | 💭 Kvarnen står och väntar för att hållaren är full. Om den rymde fler rullar kunde den mala hela tiden. |
| 6:27 | röst | du | Kvarnen står och väntar för att hållaren är full. Om den rymde fler rullar kunde den mala hela tiden. · STORY |
| 6:30 | toast | bra | Del 1 av 2 klar |
| 6:30 | väntar | notis:Storebrors skrivare: Del 1 av 2 klar | Storebrors skrivare: Del 1 av 2 klar |
| 6:34 | händelse | printKlar | sak=byggsats:dorr n=1 |
| 6:34 | toast | guld | ✅ |
| 6:36 | klar | du | Kvarnen står och väntar för att hållaren är full. Om den rymde fler rullar kunde den mala hela tiden. |
| 6:44 | sak | ali | Ali här. Rullställ. Fyra rullar i stället för en. Har ett på hyllan. |
| 6:44 | sms | ali | Ali här. Rullställ. Fyra rullar i stället för en. Har ett på hyllan. |
| 6:44 | sms-bubbla | ali | Ali här. Rullställ. Fyra rullar i stället för en. Har ett på hyllan. |
| 6:44 | röst | ali | Ali här. Rullställ. Fyra rullar i stället för en. Har ett på hyllan. · STORY |
| 6:50 | klar | ali | Ali här. Rullställ. Fyra rullar i stället för en. Har ett på hyllan. |
| 6:50 | händelse | tagitUrPrint | sak=byggsats:dorr n=1 |
| 6:50 | paket |  | sms |
| 6:50 | väntar | ali | Ali här. Jag har inte sovit. Inte på grund av AI:n. På grund av dig. Du bygger saker av sopor. Jag har en hel butik och bygger ingenting. Det ska ändras. Kanske. Troligen. |
| 6:52 | struken | notis:Storebrors skrivare: Del 1 av 2 klar | Storebrors skrivare: Del 1 av 2 klar |
| 6:52 | paket |  | tanke |
| 6:52 | tanke | du | Jaha, Rolf har hämtat en ölhållare med kylklamp. |
| 6:52 | väntar | du | Jaha, Rolf har hämtat en ölhållare med kylklamp. |
| 6:55 | väntar | info:guld | Dörr på plats! Trivsel +8 |
| 6:55 | sak | info:guld | Dörr på plats! Trivsel +8 |
| 6:55 | kvitto-visas | info:guld | Dörr på plats! Trivsel +8 |
| 6:55 | toast | guld | Dörr på plats! Trivsel +8 |
| 6:55 | händelse | malKlart | id=n1-bygg-dorr-skjulet del=Dag 2 – Tippen bredvid nasta=sov2 |
| 6:55 | paket |  | lapp |
| 6:55 | väntar | du | Nu vet Ali att jag bor HÄR. Taket läcker. I morgon. |
| 6:55 | paket |  | sms |
| 6:55 | väntar | bror | Mamma ringde mig fyra gånger förresten. Snyggt jobbat 😂 |
| 6:55 | skratt | bror | Mamma ringde mig fyra gånger förresten. |
| 6:55 | struken | du | Jaha, Rolf har hämtat en ölhållare med kylklamp. |
| 6:55 | väntar | du | Klart för idag – sov när du vill. |
| 6:55 | MÅL |  | Klart för idag – sov när du vill |
| 6:57 | klar | info:guld | Dörr på plats! Trivsel +8 |
| 6:58 | målruta |  | Klart för idag – sov när du vill |
| 6:59 | kvittens-bock |  | ✓ Bygg en dörr till skjulet |
| 6:59 | sak | du | Klart för idag – sov när du vill. |
| 6:59 | pil |  | Klart för idag – sov när du vill |
| 6:59 | röst | du | Klart för idag – sov när du vill. · MÅL |
| 7:02 | klar | du | Klart för idag – sov när du vill. |
| 7:02 | väntar | notis:🌇 Klockan är 21. Ali slår igen luckan.  | 🌇 Klockan är 21. Ali slår igen luckan. Dagens jobb är klart – gå in i skjulet och sov i sängen. |
| 7:04 | sak | du | Nu vet Ali att jag bor HÄR. Taket läcker. I morgon. |
| 7:04 | kvallsrad | du | Nu vet Ali att jag bor HÄR. Taket läcker. I morgon. |
| 7:04 | klar | du | Nu vet Ali att jag bor HÄR. Taket läcker. I morgon. |
| 7:09 | nattkort | du | 🌙 Dag 2 är slut. God natt. zzz… Nu vet Ali att jag bor HÄR. Taket läcker. I morgon. DAGENS PRINTAR Blomkruka × 9 Ölhållare med kylklamp × 1 Totalt 10 printar � |

<details><summary>Botens handlingar dag 2</summary>

- 0:00 — dag 2 börjar — (120 kr)
- 0:08 popup: "FORTSÄTT" (120 kr)
- 0:11 tjänar pengar till väntar på flaskhalsen för kvarnmotor: 120/160 kr → printar blomkruka (105 kr) (120 kr)
- 0:15 gå till skrivaren (19 m) (120 kr)
- 0:17 printar Blomkruka (120 kr)
- 0:20 gå till cykeln (2 m) (120 kr)
- 0:22 tar ut 1 st ur skrivaren (120 kr)
- 0:27 gå till Ali (26 m) (120 kr)
- 0:27 öppnar Alis butik – sälja (120 kr)
- 0:29 säljer hos Ali: +105 kr (225 kr)
- 0:35 tjänar pengar till väntar på flaskhalsen för kvarnmotor: 225/265 kr → printar blomkruka (105 kr) (225 kr)
- 0:41 gå till skrivaren (25 m) (225 kr)
- 0:42 printar Blomkruka (225 kr)
- 0:46 tar ut 1 st ur skrivaren (225 kr)
- 0:51 gå till Ali (25 m) (225 kr)
- 0:51 öppnar Alis butik – sälja (225 kr)
- 0:52 säljer hos Ali: +105 kr (330 kr)
- 0:54 tjänar pengar till väntar på flaskhalsen för kvarnmotor: 330/370 kr → printar blomkruka (105 kr) (330 kr)
- 1:03 plockar 4 skräp på gården (bär max 6) (330 kr)
- 1:09 gå till kvarnen (31 m) (330 kr)
- 1:14 gå till skrivaren (3 m) (330 kr)
- 1:16 printar Blomkruka (330 kr)
- 1:18 gå till cykeln (1 m) (330 kr)
- 1:21 tar ut 1 st ur skrivaren (330 kr)
- 1:27 gå till Ali (27 m) (330 kr)
- 1:27 öppnar Alis butik – sälja (330 kr)
- 1:28 säljer hos Ali: +105 kr (435 kr)
- 1:30 tjänar pengar till väntar på flaskhalsen för kvarnmotor: 435/475 kr → printar blomkruka (105 kr) (435 kr)
- 1:35 gå till skrivaren (25 m) (435 kr)
- 1:37 printar Blomkruka (435 kr)
- 1:40 tar ut 1 st ur skrivaren (435 kr)
- 1:46 gå till Ali (25 m) (435 kr)
- 1:46 öppnar Alis butik – sälja (435 kr)
- 1:47 säljer hos Ali: +105 kr (540 kr)
- 1:49 tjänar pengar till väntar på flaskhalsen för kvarnmotor: 540/580 kr → printar blomkruka (105 kr) (540 kr)
- 1:59 plockar 4 skräp på gården (bär max 6) (540 kr)
- 2:05 gå till kvarnen (31 m) (540 kr)
- 2:10 gå till skrivaren (3 m) (540 kr)
- 2:12 printar Blomkruka (540 kr)
- 2:14 gå till cykeln (1 m) (540 kr)
- 2:17 tar ut 1 st ur skrivaren (540 kr)
- 2:23 gå till Ali (27 m) (540 kr)
- 2:23 öppnar Alis butik – sälja (540 kr)
- 2:24 säljer hos Ali: +105 kr (645 kr)
- 2:26 tjänar pengar till väntar på flaskhalsen för kvarnmotor: 645/685 kr → printar blomkruka (105 kr) (645 kr)
- 2:31 gå till skrivaren (25 m) (645 kr)
- 2:33 printar Blomkruka (645 kr)
- 2:36 tar ut 1 st ur skrivaren (645 kr)
- 2:41 gå till Ali (25 m) (645 kr)
- 2:41 öppnar Alis butik – sälja (645 kr)
- 2:43 säljer hos Ali: +105 kr (750 kr)
- 2:45 tjänar pengar till väntar på flaskhalsen för kvarnmotor: 750/790 kr → printar blomkruka (105 kr) (750 kr)
- 2:54 plockar 3 skräp på gården (bär max 6) (750 kr)
- 2:59 gå till kvarnen (28 m) (750 kr)
- 3:04 gå till skrivaren (3 m) (750 kr)
- 3:06 printar Blomkruka (750 kr)
- 3:08 gå till cykeln (1 m) (750 kr)
- 3:11 tar ut 1 st ur skrivaren (750 kr)
- 3:17 gå till Ali (27 m) (750 kr)
- 3:17 öppnar Alis butik – sälja (750 kr)
- 3:18 säljer hos Ali: +105 kr (855 kr)
- 3:28 öppnar Alis butik – köpa kvarnmotor (855 kr)
- 3:31 köper kvarnmotor för 50 kr (805 kr)
- 3:43 gå till skrivaren (25 m) (805 kr)
- 3:45 printar Kvarnmotor (805 kr)
- 3:48 tar ut 1 st ur skrivaren (805 kr)
- 3:53 gå till skruva fast kvarnmotorn (3 m) (805 kr)
- 4:06 gå till Rolfs sopsäck (16 m) (805 kr)
- 4:19 tar på korg (805 kr)
- 4:19 tjänar pengar till väntar på sopbilen (BO): 805/865 kr → printar blomkruka (105 kr) (805 kr)
- 4:22 gå till skrivaren (12 m) (805 kr)
- 4:23 printar Blomkruka (805 kr)
- 4:26 gå till cykeln (1 m) (805 kr)
- 4:28 tar ut 1 st ur skrivaren (805 kr)
- 4:34 gå till Ali (25 m) (805 kr)
- 4:34 öppnar Alis butik – sälja (805 kr)
- 4:35 säljer hos Ali: +105 kr (910 kr)
- 4:38 tjänar pengar till väntar på sopbilen (BO): 910/970 kr → printar blomkruka (105 kr) (910 kr)
- 4:43 gå till skrivaren (25 m) (910 kr)
- 4:45 printar Blomkruka (910 kr)
- 4:48 tar ut 1 st ur skrivaren (910 kr)
- 4:54 gå till Ali (25 m) (910 kr)
- 4:54 öppnar Alis butik – sälja (910 kr)
- 4:55 säljer hos Ali: +105 kr (1015 kr)
- 5:04 gå till Rolfs postlåda (31 m) (1015 kr)
- 5:06 gå till skrivaren (7 m) (1015 kr)
- 5:07 printar Ölhållare med kylklamp (1015 kr)
- 5:09 gå till cykeln (1 m) (1015 kr)
- 5:12 tar ut 1 st ur skrivaren (1015 kr)
- 5:25 valj olhallare: true, vald olhallare, post {"l":null,"tr":null,"tm":[]}, nummer false (1015 kr)
- 5:27 gå till Rolfs postlåda (7 m) (1015 kr)
- 5:27 valj olhallare: true, vald olhallare, post {"l":null,"tr":null,"tm":[]}, nummer false (1015 kr)
- 5:47 gå till Ali (31 m) (1015 kr)
- 5:47 öppnar Alis butik – köpa vindsnurra till skjultaket (1015 kr)
- 5:50 köper vindsnurra för 133 kr (882 kr)
- 5:56 gå till skrivaren (25 m) (882 kr)
- 5:57 printar Vindsnurra till skjultaket (882 kr)
- 6:02 tar ut 1 st ur skrivaren (882 kr)
- 6:09 gå till sätt vindsnurran på taket (20 m) (882 kr)
- 6:17 gå till Ali (20 m) (882 kr)
- 6:17 öppnar Alis butik – köpa dörr (882 kr)
- 6:19 köper dorr för 120 kr (762 kr)
- 6:25 gå till skrivaren (25 m) (762 kr)
- 6:27 printar Dörr (2 delar) (762 kr)
- 6:41 plockar 7 skräp på gården (bär max 10) (762 kr)
- 6:49 gå till kvarnen (38 m) (762 kr)
- 6:50 gå till skrivaren (1 m) (762 kr)
- 6:51 tar ut 1 st ur skrivaren (762 kr)
- 6:55 gå till skjulet (21 m) (762 kr)
- 7:07 gå till sängen (1 m) (762 kr)

</details>

## Dag 3

| Tid | Källa | Vem | Text |
|---|---|---|---|
| 7:09 | vara | ali | ingen |
| 7:09 | händelse | malKlart | id=sov2 del=Dag 2 – Tippen bredvid nasta=rolf1-brev |
| 7:09 | vara | ali | kruka |
| 7:09 | MÅL |  | Vänta på sopbilen. Den lämnar något. |
| 0:01 | händelse | dagenBorjar | dag=3 |
| 0:01 | meddelande | du | Dag 3. 19 dagar till jul. Utan tak regnar det in i natt. |
| 0:01 | dagbokkort | du | En skrivare till och taket · Dag 3. 19 dagar till jul. Utan tak regnar det in i natt. |
| 0:01 | röst | du | Dag 3. 19 dagar till jul. En skrivare till och taket. Utan tak regnar det in i natt. · STORY |
| 0:08 | väntar | notis:morgon | Ali vill ha idag: Blomkruka · +50 % |
| 0:08 | händelse | morgonkortStangt | dag=3 |
| 0:08 | målruta |  | Vänta på sopbilen. Den lämnar något. |
| 0:10 | skratt | du | falsk tuta |
| 0:14 | sak | du | (nytt mål i rutan) |
| 0:14 | pil |  | Vänta på sopbilen. Den lämnar något. |
| 0:14 | klar | du | (nytt mål i rutan) |
| 0:16 | struken | notis:🌇 Klockan är 21. Ali slår igen luckan.  | 🌇 Klockan är 21. Ali slår igen luckan. Dagens jobb är klart – gå in i skjulet och sov i sängen. |
| 0:16 | struken | ali | Ali här. Jag har inte sovit. Inte på grund av AI:n. På grund av dig. Du bygger saker av sopor. Jag har en hel butik och bygger ingenting. Det ska ändras. Kanske. Troligen. |
| 0:16 | struken | bror | Mamma ringde mig fyra gånger förresten. Snyggt jobbat 😂 |
| 0:16 | skratt | bror | Mamma ringde mig fyra gånger förresten. |
| 0:16 | sak | notis:morgon | Ali vill ha idag: Blomkruka · +50 % |
| 0:16 | notis |  | Blomkruka · +50 % |
| 0:20 | klar | notis:morgon | Ali vill ha idag: Blomkruka · +50 % |
| 0:27 | väntar | rolf | Den funkar! Hä. Ta så mycke skräp du vill. /Rolf​ |
| 0:28 | paket |  | tanke |
| 0:28 | tanke | du | Rolfs tipp. Hela högen. |
| 0:28 | väntar | du | Rolfs tipp. Hela högen. |
| 0:28 | monterat | du | byggsats:tippnyckel |
| 0:28 | händelse | monterat | sak=tippnyckel |
| 0:28 | sak | du | Rolfs tipp. Hela högen. |
| 0:28 | kvitto-visas | du | Rolfs tipp. Hela högen. |
| 0:28 | notis | tanke | 💭 Rolfs tipp. Hela högen. |
| 0:28 | röst | du | Rolfs tipp. Hela högen. · REAKTION |
| 0:29 | scenInfo | du | Kameran sveper över tippen |
| 0:31 | klar | du | Rolfs tipp. Hela högen. |
| 0:33 | tanke | du | …Det här räcker i hundra år. |
| 0:33 | väntar | du | …Det här räcker i hundra år. |
| 0:36 | händelse | printStart | sak=kruka |
| 0:40 | sak | ali | Ali här. Skrivartrim. Jag skruvade på min egen skrivare i natt. Den går fortare nu. Nästan för fort. |
| 0:40 | sms | ali | Ali här. Skrivartrim. Jag skruvade på min egen skrivare i natt. Den går fortare nu. Nästan för fort. |
| 0:40 | sms-bubbla | ali | Ali här. Skrivartrim. Jag skruvade på min egen skrivare i natt. Den går fortare nu. Nästan för fort. |
| 0:40 | röst | ali | Ali här. Skrivartrim. Jag skruvade på min egen skrivare i natt. Den går fortare nu. Nästan för fort. · STORY |
| 0:41 | toast | guld | ✅ |
| 0:41 | händelse | printKlar | sak=kruka n=11 |
| 0:42 | händelse | tagitUrPrint | sak=kruka n=1 |
| 0:48 | röst | ali | Ledig? Vad är det? Har aldrig hört talas om det. · STORY |
| 0:48 | butiksbubbla | ali | Ledig? Vad är det? Har aldrig hört talas om det. |
| 0:50 | aliSalt | ali | 105 |
| 0:50 | klar | ali | Ali här. Skrivartrim. Jag skruvade på min egen skrivare i natt. Den går fortare nu. Nästan för fort. |
| 0:59 | händelse | printStart | sak=kruka |
| 1:00 | sak | rolf | Den funkar! Hä. Ta så mycke skräp du vill. /Rolf​ |
| 1:00 | lapp | Brev från Rolf | Den funkar! Hä. Ta så mycke skräp du vill. /Rolf​ |
| 1:00 | röst | rolf | Den funkar! Hä. Ta så mycke skräp du vill. /Rolf​ · STORY |
| 1:04 | klar | rolf | Den funkar! Hä. Ta så mycke skräp du vill. /Rolf​ |
| 1:04 | händelse | brevLast | id=rolftack:0 |
| 1:05 | toast | guld | ✅ |
| 1:05 | händelse | printKlar | sak=kruka n=12 |
| 1:06 | händelse | tagitUrPrint | sak=kruka n=1 |
| 1:13 | aliSalt | ali | 105 |
| 1:14 | sak | du | …Det här räcker i hundra år. |
| 1:14 | notis | tanke | 💭 …Det här räcker i hundra år. |
| 1:14 | röst | du | …Det här räcker i hundra år. · STORY |
| 1:16 | klar | du | …Det här räcker i hundra år. |
| 1:25 | händelse | printStart | sak=kruka |
| 1:31 | toast | guld | ✅ |
| 1:31 | händelse | printKlar | sak=kruka n=13 |
| 1:31 | händelse | tagitUrPrint | sak=kruka n=1 |
| 1:35 | väntar | ali | Jag har en ny hylla. Den lutar. Som jag. |
| 1:35 | sak | ali | Jag har en ny hylla. Den lutar. Som jag. |
| 1:35 | röst | ali | Jag har en ny hylla. Den lutar. Som jag. · SMÅPRAT |
| 1:36 | bubbla |  | Jag har en ny hylla. Den lutar. Som jag. |
| 1:38 | aliSalt | ali | 105 |
| 1:39 | klar | ali | Jag har en ny hylla. Den lutar. Som jag. |
| 1:43 | skratt | du | falsk tuta |
| 1:48 | händelse | printStart | sak=kruka |
| 1:54 | toast | guld | ✅ |
| 1:54 | händelse | printKlar | sak=kruka n=14 |
| 1:54 | händelse | tagitUrPrint | sak=kruka n=1 |
| 2:01 | aliSalt | ali | 105 |
| 2:12 | händelse | printStart | sak=kruka |
| 2:17 | toast | guld | ✅ |
| 2:17 | händelse | printKlar | sak=kruka n=15 |
| 2:31 | väntar | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått en DÖRR. Och vindsnurra till skjultaket. Mer säger jag inte. Gunnar vet. |
| 2:31 | radio | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått en DÖRR. Och vindsnurra till skjultaket. Mer säger jag inte. Gunnar vet. |
| 2:31 | skratt | du | Radio-Kjelle |
| 2:31 | sak | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått en DÖRR. Och vindsnurra till skjultaket. Mer säger jag inte. Gunnar vet. |
| 2:31 | notis |  | 📻 Radio Tippen: Radio Tippen, Kjelle här. Skjulet vid tippen har fått en DÖRR. Och vindsnurra till skjultaket. Mer säger jag inte. Gunnar vet. |
| 2:31 | röst | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått en DÖRR. Och vindsnurra till skjultaket. Mer säger jag inte. Gunnar vet. · REAKTION |
| 2:42 | klar | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått en DÖRR. Och vindsnurra till skjultaket. Mer säger jag inte. Gunnar vet. |
| 2:44 | händelse | tagitUrPrint | sak=kruka n=1 |
| 2:52 | aliSalt | ali | 105 |
| 2:52 | röst | ali | Dina krukor säljer. Tanterna i kvarteret älskar dem. · STORY |
| 2:52 | butiksbubbla | ali | Dina krukor säljer. Tanterna i kvarteret älskar dem. |
| 2:54 | skratt | du | falsk tuta |
| 2:54 | paket |  | ge |
| 2:54 | väntar |  | (läget ändras) |
| 3:02 | väntar | rolf | Nämen. Kajsa knuffa ner min flasköppnare i tippen. Kan du göra en ny, mä magnet? /Rolf​ |
| 3:02 | paket |  | ge |
| 3:02 | väntar |  | (läget ändras) |
| 3:02 | sak | rolf | Nämen. Kajsa knuffa ner min flasköppnare i tippen. Kan du göra en ny, mä magnet? /Rolf​ |
| 3:02 | lapp | Brev från Rolf | Nämen. Kajsa knuffa ner min flasköppnare i tippen. Kan du göra en ny, mä magnet? /Rolf​ |
| 3:02 | röst | rolf | Nämen. Kajsa knuffa ner min flasköppnare i tippen. Kan du göra en ny, mä magnet? /Rolf​ · STORY |
| 3:02 | händelse | malKlart | id=rolf1-brev del=Dag 3 – En skrivare till och taket nasta=n2-hamta-skrap |
| 3:02 | väntar | du | Nyckeln till tippen. Där ligger skräpet i högar. |
| 3:02 | MÅL |  | Hämta 5 skräp på soptippen |
| 3:05 | målruta |  | Hämta 5 skräp på soptippen |
| 3:07 | händelse | malKlart | id=n2-hamta-skrap del=Dag 3 – En skrivare till och taket nasta=rolf1-printa |
| 3:07 | struken | kedja | tippen |
| 3:07 | väntar | du | Printa flasköppnare med magnet. |
| 3:07 | MÅL |  | Printa flasköppnare med magnet |
| 3:09 | målruta |  | Printa flasköppnare med magnet |
| 3:09 | klar | rolf | Nämen. Kajsa knuffa ner min flasköppnare i tippen. Kan du göra en ny, mä magnet? /Rolf​ |
| 3:09 | händelse | brevLast | id=rolf:1 |
| 3:11 | kvittens-bock |  | ✓ Hämta 5 skräp på soptippen |
| 3:11 | struken | du | Nyckeln till tippen. Där ligger skräpet i högar. |
| 3:11 | sak | du | Printa flasköppnare med magnet. |
| 3:11 | pil |  | Printa flasköppnare med magnet |
| 3:11 | röst | du | Printa flasköppnare med magnet. · MÅL |
| 3:12 | nick |  | nick:33 |
| 3:14 | klar | du | Printa flasköppnare med magnet. |
| 3:16 | sak |  | (läget ändras) |
| 3:16 | klar |  | (läget ändras) |
| 3:19 | händelse | printStart | sak=flaskoppnare |
| 3:19 | händelse | malKlart | id=rolf1-printa del=Dag 3 – En skrivare till och taket nasta=rolf1-ge |
| 3:19 | väntar | du | Ge Rolf flasköppnare med magnet. |
| 3:19 | målruta |  | Ge Rolf flasköppnare med magnet |
| 3:19 | MÅL |  | Ge Rolf flasköppnare med magnet |
| 3:19 | sak | du | Ge Rolf flasköppnare med magnet. |
| 3:19 | pil |  | Ge Rolf flasköppnare med magnet |
| 3:19 | röst | du | Ge Rolf flasköppnare med magnet. · MÅL |
| 3:22 | klar | du | Ge Rolf flasköppnare med magnet. |
| 3:23 | toast | guld | ✅ |
| 3:23 | händelse | printKlar | sak=flaskoppnare n=1 |
| 3:23 | kvittens-bock |  | ✓ Printa flasköppnare med magnet |
| 3:23 | händelse | tagitUrPrint | sak=flaskoppnare n=1 |
| 3:25 | händelse | lagtIPostlada | sak=flaskoppnare rolf=1 jobb=false |
| 3:25 | struken | kedja | rolf1 |
| 3:25 | händelse | malKlart | id=rolf1-ge del=Dag 3 – En skrivare till och taket nasta=kopBatteri |
| 3:25 | väntar | du | Ali har ett gammalt bilbatteri. Då sparar jag strömmen. |
| 3:25 | målruta |  | Printa och sälj |
| 3:25 | MÅL |  | Printa och sälj |
| 3:25 | sak | du | Ali har ett gammalt bilbatteri. Då sparar jag strömmen. |
| 3:25 | pil |  | Printa och sälj |
| 3:25 | notis | tanke | 💭 Ali har ett gammalt bilbatteri. Då sparar jag strömmen. |
| 3:25 | röst | du | Ali har ett gammalt bilbatteri. Då sparar jag strömmen. · MÅL |
| 3:29 | kvittens-bock |  | ✓ Ge Rolf flasköppnare med magnet |
| 3:30 | klar | du | Ali har ett gammalt bilbatteri. Då sparar jag strömmen. |
| 3:35 | händelse | printStart | sak=kruka |
| 3:41 | toast | guld | ✅ |
| 3:41 | händelse | printKlar | sak=kruka n=16 |
| 3:41 | händelse | tagitUrPrint | sak=kruka n=1 |
| 3:45 | strömdipp | du | cykelbatteri |
| 3:45 | paket |  | tanke |
| 3:45 | tanke | du | Den stannar. Strömmen räcker inte till alla maskiner. |
| 3:45 | väntar | du | Den stannar. Strömmen räcker inte till alla maskiner. |
| 3:45 | hjälp | kontroll | E: Ryggsäcken och kistan |
| 3:49 | aliSalt | ali | 105 |
| 3:57 | händelse | printStart | sak=kruka |
| 3:57 | toast | fel | Ingen ström – maskinerna drar mer än du får in. Bygg en solpanel |
| 4:03 | upplåst | strom | cykelbatteri |
| 4:03 | brott | UPPLÅST | cykelbatteri (strom 37 av 15) |
| 4:03 | händelse | upplast | id=cykelbatteri flask=strom |
| 4:03 | paket |  | tanke → sms |
| 4:03 | tanke | du | Powerbanken räcker till en nyckelring. Sen är det trampa igen. |
| 4:03 | väntar | du | Powerbanken räcker till en nyckelring. Sen är det trampa igen. |
| 4:03 | väntar | ali | Ali här. Bilbatteriet ur min gamla Volvo står i lagret. Det sparar mer ström än powerbanken. |
| 4:19 | väntar | bud | (tips) |
| 4:19 | sak | bud | (tips) |
| 4:21 | klar | bud | (tips) |
| 4:22 | toast | guld | ✅ |
| 4:22 | händelse | printKlar | sak=kruka n=17 |
| 4:22 | händelse | tagitUrPrint | sak=kruka n=1 |
| 4:23 | meddelande | mamma | Vem är den där Ali? Är han snäll? Betalar han dig ordentligt? |
| 4:24 | röst | mamma | Vem är den där Ali? Är han snäll? Betalar han dig ordentligt? · STORY |
| 4:33 | paket |  | sms |
| 4:33 | väntar | mamma | Typ? Jag ringer honom. Vad heter butiken? Jag hittar den. |
| 4:41 | händelse | brevLast | id=m_ali |
| 4:43 | sak |  | (läget ändras) |
| 4:43 | brev | rolf | rolf:1 |
| 4:43 | klar |  | (läget ändras) |
| 4:47 | sak | ali | Ali här. Bilbatteriet ur min gamla Volvo står i lagret. Det sparar mer ström än powerbanken. |
| 4:47 | sms | ali | Ali här. Bilbatteriet ur min gamla Volvo står i lagret. Det sparar mer ström än powerbanken. |
| 4:47 | sms-bubbla | ali | Ali här. Bilbatteriet ur min gamla Volvo står i lagret. Det sparar mer ström än powerbanken. |
| 4:47 | röst | ali | Ali här. Bilbatteriet ur min gamla Volvo står i lagret. Det sparar mer ström än powerbanken. · STORY |
| 4:48 | aliSalt | ali | 105 |
| 4:55 | klar | ali | Ali här. Bilbatteriet ur min gamla Volvo står i lagret. Det sparar mer ström än powerbanken. |
| 4:59 | toast | guld | 🔋 Bilbatteriet ska kopplas in på cykeln. |
| 4:59 | händelse | kopt | sak=cykelbatteri |
| 4:59 | röst | ali | Ali här. Batteriet ur min gamla Volvo. Bilen dog 2016. Batteriet vägrade. · STORY |
| 4:59 | butiksbubbla | ali | Ali här. Batteriet ur min gamla Volvo. Bilen dog 2016. Batteriet vägrade. |
| 4:59 | skratt | du | falsk tuta |
| 5:07 | struken | kedja | dag2 |
| 5:07 | väntar | info:guld | 🔋 Bilbatteriet är inkopplat – skrivaren printar klart även när du slutar trampa |
| 5:07 | monterat | du | byggsats:cykelbatteri |
| 5:07 | händelse | monterat | sak=cykelbatteri |
| 5:07 | sak | info:guld | 🔋 Bilbatteriet är inkopplat – skrivaren printar klart även när du slutar trampa |
| 5:07 | kvitto-visas | info:guld | 🔋 Bilbatteriet är inkopplat – skrivaren printar klart även när du slutar trampa |
| 5:07 | toast | guld | 🔋 Bilbatteriet är inkopplat – skrivaren printar klart även när du slutar trampa |
| 5:07 | händelse | malKlart | id=kopBatteri del=Dag 3 – En skrivare till och taket nasta=ryggkorg |
| 5:07 | väntar | du | Jag springer för mycket. Med en ryggkorg bär jag tio saker. |
| 5:07 | MÅL |  | Plocka skräp och mal det |
| 5:07 | upplåst | bara | ryggkorg |
| 5:07 | brott | UPPLÅST | ryggkorg (bara 3 av 3) |
| 5:07 | händelse | upplast | id=ryggkorg flask=bara |
| 5:07 | paket |  | tanke → sms |
| 5:07 | tanke | du | Säcken är full igen. Jag behöver något att bära mer i. |
| 5:07 | väntar | du | Säcken är full igen. Jag behöver något att bära mer i. |
| 5:07 | väntar | ali | Ali här. En ryggkorg. AI:n ritade den efter en bild på min mormor. Den rymmer tio. |
| 5:09 | klar | info:guld | 🔋 Bilbatteriet är inkopplat – skrivaren printar klart även när du slutar trampa |
| 5:09 | målruta |  | Bygg ryggkorgen – bär 10 skräp |
| 5:11 | kvittens-bock |  | ✓ Köp Alis gamla bilbatteri |
| 5:11 | sak | du | Jag springer för mycket. Med en ryggkorg bär jag tio saker. |
| 5:11 | pil |  | Bygg ryggkorgen – bär 10 skräp |
| 5:11 | notis | tanke | 💭 Jag springer för mycket. Med en ryggkorg bär jag tio saker. |
| 5:11 | röst | du | Jag springer för mycket. Med en ryggkorg bär jag tio saker. · MÅL |
| 5:11 | nick |  | nick:36 |
| 5:16 | klar | du | Jag springer för mycket. Med en ryggkorg bär jag tio saker. |
| 5:16 | paket |  | tanke |
| 5:16 | tanke | du | Jaha, Rolf har hämtat en flasköppnare med magnet. |
| 5:16 | väntar | du | Jaha, Rolf har hämtat en flasköppnare med magnet. |
| 5:18 | sak | du | Säcken är full igen. Jag behöver något att bära mer i. |
| 5:18 | notis | tanke | 💭 Säcken är full igen. Jag behöver något att bära mer i. |
| 5:18 | röst | du | Säcken är full igen. Jag behöver något att bära mer i. · STORY |
| 5:22 | klar | du | Säcken är full igen. Jag behöver något att bära mer i. |
| 5:27 | struken | info:guld | 3D-modell köpt – printa ryggkorg |
| 5:27 | händelse | kopt | sak=ryggkorg |
| 5:27 | struken | ali | Ali här. En ryggkorg. AI:n ritade den efter en bild på min mormor. Den rymmer tio. |
| 5:31 | sak | du | Den stannar. Strömmen räcker inte till alla maskiner. |
| 5:31 | notis | tanke | 💭 Den stannar. Strömmen räcker inte till alla maskiner. |
| 5:31 | röst | du | Den stannar. Strömmen räcker inte till alla maskiner. · STORY |
| 5:35 | klar | du | Den stannar. Strömmen räcker inte till alla maskiner. |
| 5:36 | händelse | printStart | sak=byggsats:ryggkorg |
| 5:37 | väntar | mamma | Jag har städat ditt rum. Det tog tre dagar. Jag hittade en macka från i somras. En macka. |
| 5:38 | väntar | värld:TUUT TUUT! | TUUT TUUT! |
| 5:39 | struken | du | Jaha, Rolf har hämtat en flasköppnare med magnet. |
| 5:42 | toast | bra | Del 1 av 2 klar |
| 5:43 | sak | du | Powerbanken räcker till en nyckelring. Sen är det trampa igen. |
| 5:43 | notis | tanke | 💭 Powerbanken räcker till en nyckelring. Sen är det trampa igen. |
| 5:43 | röst | du | Powerbanken räcker till en nyckelring. Sen är det trampa igen. · STORY |
| 5:48 | händelse | printKlar | sak=byggsats:ryggkorg n=1 |
| 5:48 | toast | guld | ✅ |
| 5:48 | väntar | info:guld | Ryggkorg ska jag ha på mig. |
| 5:48 | händelse | tagitUrPrint | sak=byggsats:ryggkorg n=1 |
| 5:48 | paket |  | sms |
| 5:48 | väntar | ali | Ali här. Du printade Ryggkorg från min ritning. Och det FUNKAR? Jag har bara sett sånt på YouTube. |
| 5:48 | klar | du | Powerbanken räcker till en nyckelring. Sen är det trampa igen. |
| 5:48 | sak | info:guld | Ryggkorg ska jag ha på mig. |
| 5:48 | kvitto-visas | info:guld | Ryggkorg ska jag ha på mig. |
| 5:48 | toast | guld | Ryggkorg ska jag ha på mig. |
| 5:50 | klar | info:guld | Ryggkorg ska jag ha på mig. |
| 5:52 | väntar | info:guld | 🧺 Ryggkorgen sitter på! Nu bär jag 16 skräp. |
| 5:52 | tog på | du | byggsats:ryggkorg |
| 5:52 | händelse | monterat | sak=ryggkorg |
| 5:52 | sak | info:guld | 🧺 Ryggkorgen sitter på! Nu bär jag 16 skräp. |
| 5:52 | kvitto-visas | info:guld | 🧺 Ryggkorgen sitter på! Nu bär jag 16 skräp. |
| 5:52 | toast | guld | 🧺 Ryggkorgen sitter på! Nu bär jag 16 skräp. |
| 5:52 | händelse | malKlart | id=ryggkorg del=Dag 3 – En skrivare till och taket nasta=n2-bygg-arbetsbord |
| 5:52 | väntar | du | Ett arbetsbord bredvid skrivaren. Skrivare M ska stå på det. |
| 5:53 | MÅL |  | Bygg ett arbetsbord |
| 5:54 | klar | info:guld | 🧺 Ryggkorgen sitter på! Nu bär jag 16 skräp. |
| 5:54 | målruta |  | Bygg ett arbetsbord |
| 5:56 | kvittens-bock |  | ✓ Bygg ryggkorgen – bär 10 skräp |
| 5:56 | sak | du | Ett arbetsbord bredvid skrivaren. Skrivare M ska stå på det. |
| 5:56 | pil |  | Bygg ett arbetsbord |
| 5:56 | notis | tanke | 💭 Ett arbetsbord bredvid skrivaren. Skrivare M ska stå på det. |
| 5:56 | röst | du | Ett arbetsbord bredvid skrivaren. Skrivare M ska stå på det. · MÅL |
| 5:57 | nick |  | nick:37 |
| 6:00 | struken | info:guld | 3D-modell köpt – printa arbetsbord |
| 6:00 | händelse | kopt | sak=bord |
| 6:01 | klar | du | Ett arbetsbord bredvid skrivaren. Skrivare M ska stå på det. |
| 6:03 | struken | värld:TUUT TUUT! | TUUT TUUT! |
| 6:09 | händelse | printStart | sak=byggsats:bord |
| 6:09 | sak | mamma | Typ? Jag ringer honom. Vad heter butiken? Jag hittar den. |
| 6:09 | sms | mamma | Typ? Jag ringer honom. Vad heter butiken? Jag hittar den. |
| 6:09 | sms-bubbla | mamma | Typ? Jag ringer honom. Vad heter butiken? Jag hittar den. |
| 6:09 | röst | mamma | Typ? Jag ringer honom. Vad heter butiken? Jag hittar den. · STORY |
| 6:14 | klar | mamma | Typ? Jag ringer honom. Vad heter butiken? Jag hittar den. |
| 6:16 | toast | bra | Del 1 av 3 klar |
| 6:23 | toast | bra | Del 2 av 3 klar |
| 6:24 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 6:25 | tanke | du | En hel kanot. Kvarnen skulle äta upp sig själv. |
| 6:25 | väntar | du | En hel kanot. Kvarnen skulle äta upp sig själv. |
| 6:25 | sak | du | En hel kanot. Kvarnen skulle äta upp sig själv. |
| 6:25 | notis | tanke | 💭 En hel kanot. Kvarnen skulle äta upp sig själv. |
| 6:25 | röst | du | En hel kanot. Kvarnen skulle äta upp sig själv. · REAKTION |
| 6:29 | klar | du | En hel kanot. Kvarnen skulle äta upp sig själv. |
| 6:32 | händelse | printKlar | sak=byggsats:bord n=1 |
| 6:32 | toast | guld | ✅ |
| 6:34 | händelse | tagitUrPrint | sak=byggsats:bord n=1 |
| 6:37 | händelse | placerat | sak=bord |
| 6:37 | händelse | malKlart | id=n2-bygg-arbetsbord del=Dag 3 – En skrivare till och taket nasta=n2-bygg-skrivare-m |
| 6:37 | väntar | du | Skrivare M på bordet. Två skrivare, dubbelt så mycket. |
| 6:37 | målruta |  | Printa och sälj |
| 6:37 | MÅL |  | Printa och sälj |
| 6:37 | upplåst | skrivare | skrivare2 |
| 6:37 | brott | UPPLÅST | skrivare2 (skrivare 348 av 60) |
| 6:37 | händelse | upplast | id=skrivare2 flask=skrivare |
| 6:37 | paket |  | tanke → sms |
| 6:37 | tanke | du | Kvarnen hinner mer än skrivaren. Jag behöver en skrivare till. |
| 6:37 | väntar | du | Kvarnen hinner mer än skrivaren. Jag behöver en skrivare till. |
| 6:37 | väntar | ali | Ali här. Skrivare M har kommit. Två och en halv gånger snabbare. Snabbare än jag. Jag har inte varit snabb sedan 1998. |
| 6:37 | sak | du | Skrivare M på bordet. Två skrivare, dubbelt så mycket. |
| 6:37 | pil |  | Bygg Skrivare M på bordet |
| 6:37 | notis | tanke | 💭 Skrivare M på bordet. Två skrivare, dubbelt så mycket. |
| 6:37 | röst | du | Skrivare M på bordet. Två skrivare, dubbelt så mycket. · MÅL |
| 6:38 | nick |  | nick:38 |
| 6:41 | kvittens-bock |  | ✓ Bygg ett arbetsbord |
| 6:42 | klar | du | Skrivare M på bordet. Två skrivare, dubbelt så mycket. |
| 6:50 | skratt | du | Alis dyr-pling |
| 6:50 | struken | info:guld | 3D-modell köpt – printa skrivare M |
| 6:50 | händelse | kopt | sak=skrivare2 |
| 6:50 | struken | ali | Ali här. Skrivare M har kommit. Två och en halv gånger snabbare. Snabbare än jag. Jag har inte varit snabb sedan 1998. |
| 6:59 | händelse | printStart | sak=byggsats:skrivare2 |
| 7:08 | toast | bra | Del 1 av 5 klar |
| 7:17 | toast | bra | Del 2 av 5 klar |
| 7:21 | paket |  | tanke |
| 7:21 | tanke | du | En toffla. Bara en. |
| 7:21 | väntar | du | En toffla. Bara en. |
| 7:21 | skratt | du | kvarnen spottar |
| 7:26 | skratt | du | däcket rullar iväg |
| 7:26 | paket |  | tanke |
| 7:26 | tanke | du | Däcket ville inte stanna. Jag förstår det. |
| 7:26 | väntar | du | Däcket ville inte stanna. Jag förstår det. |
| 7:26 | toast | bra | Del 3 av 5 klar |
| 7:31 | väntar | bud | (tips) |
| 7:31 | sak | bud | (tips) |
| 7:33 | klar | bud | (tips) |
| 7:33 | skratt | du | falsk tuta |
| 7:33 | väntar | värld:TUUT! Hej grannen! | TUUT! Hej grannen! |
| 7:35 | meddelande | mamma | Har du borstat tänderna idag? Ljug inte. Jag hör om du ljuger. Även på sms. |
| 7:36 | röst | mamma | Har du borstat tänderna idag? Ljug inte. Jag hör om du ljuger. Även på sms. · STORY |
| 7:44 | paket |  | sms |
| 7:44 | väntar | mamma | Bra. Jag tror dig. Nästan. |
| 7:53 | händelse | brevLast | id=m_tandborste |
| 7:53 | toast | bra | Del 4 av 5 klar |
| 7:55 | sak | ali | Ali här. Du printade Ryggkorg från min ritning. Och det FUNKAR? Jag har bara sett sånt på YouTube. |
| 7:55 | sms | ali | Ali här. Du printade Ryggkorg från min ritning. Och det FUNKAR? Jag har bara sett sånt på YouTube. |
| 7:55 | sms-bubbla | ali | Ali här. Du printade Ryggkorg från min ritning. Och det FUNKAR? Jag har bara sett sånt på YouTube. |
| 7:55 | röst | ali | Ali här. Du printade Ryggkorg från min ritning. Och det FUNKAR? Jag har bara sett sånt på YouTube. · REAKTION |
| 8:02 | händelse | printKlar | sak=byggsats:skrivare2 n=1 |
| 8:02 | toast | guld | ✅ |
| 8:03 | klar | ali | Ali här. Du printade Ryggkorg från min ritning. Och det FUNKAR? Jag har bara sett sånt på YouTube. |
| 8:03 | händelse | tagitUrPrint | sak=byggsats:skrivare2 n=1 |
| 8:04 | tanke | du | Slangen räcker inte ända hit. |
| 8:04 | struken | du | En toffla. Bara en. |
| 8:04 | väntar | du | Slangen räcker inte ända hit. |
| 8:05 | struken | du | Däcket ville inte stanna. Jag förstår det. |
| 8:05 | struken | värld:TUUT! Hej grannen! | TUUT! Hej grannen! |
| 8:05 | sak | du | Slangen räcker inte ända hit. |
| 8:05 | notis | tanke | 💭 Slangen räcker inte ända hit. |
| 8:05 | röst | du | Slangen räcker inte ända hit. · REAKTION |
| 8:05 | händelse | placerat | sak=skrivare2 |
| 8:05 | struken | kedja | skrivareM |
| 8:05 | paket |  | tanke |
| 8:05 | tanke | du | Den här måste stå i linjen vid kvarnen, annars når inte slangen. |
| 8:05 | väntar | du | Den här måste stå i linjen vid kvarnen, annars når inte slangen. |
| 8:05 | händelse | malKlart | id=n2-bygg-skrivare-m del=Dag 3 – En skrivare till och taket nasta=n2-lagg-plattak-skjulet |
| 8:05 | lapp-kö | 📱 Storebror | VA?! Du har byggt en skrivare TILL?? Du har typ en printfarm nu. Okej. Det är faktiskt ganska ballt. 🔥 |
| 8:05 | väntar | bror | VA?! Du har byggt en skrivare TILL?? Du har typ en printfarm nu. Okej. Det är faktiskt ganska ballt. 🔥 |
| 8:05 | väntar | du | Det regnar in. Plåt på taket, så slipper jag sova i en pöl. |
| 8:05 | MÅL |  | Lägg plåttak på skjulet |
| 8:07 | klar | du | Slangen räcker inte ända hit. |
| 8:08 | målruta |  | Lägg plåttak på skjulet |
| 8:09 | kvittens-bock |  | ✓ Bygg Skrivare M på bordet |
| 8:11 | sak | du | Det regnar in. Plåt på taket, så slipper jag sova i en pöl. |
| 8:11 | pil |  | Lägg plåttak på skjulet |
| 8:11 | notis | tanke | 💭 Det regnar in. Plåt på taket, så slipper jag sova i en pöl. |
| 8:11 | röst | du | Det regnar in. Plåt på taket, så slipper jag sova i en pöl. · MÅL |
| 8:11 | nick |  | nick:39 |
| 8:16 | struken | info:guld | 3D-modell köpt – printa plåttak |
| 8:16 | händelse | kopt | sak=tak |
| 8:16 | klar | du | Det regnar in. Plåt på taket, så slipper jag sova i en pöl. |
| 8:24 | sak | du | Kvarnen hinner mer än skrivaren. Jag behöver en skrivare till. |
| 8:24 | notis | tanke | 💭 Kvarnen hinner mer än skrivaren. Jag behöver en skrivare till. |
| 8:24 | röst | du | Kvarnen hinner mer än skrivaren. Jag behöver en skrivare till. · STORY |
| 8:29 | klar | du | Kvarnen hinner mer än skrivaren. Jag behöver en skrivare till. |
| 8:33 | händelse | printStart | sak=byggsats:tak |
| 8:33 | toast | bra | 🔗 Slangen kopplad |
| 8:37 | toast | bra | Del 1 av 3 klar |
| 8:41 | toast | bra | Del 2 av 3 klar |
| 8:42 | toast | fel | Ingen ström – trampa cykeln |
| 8:53 | händelse | printKlar | sak=byggsats:tak n=1 |
| 8:53 | toast | guld | ✅ |
| 8:54 | händelse | tagitUrPrint | sak=byggsats:tak n=1 |
| 8:58 | väntar | info:guld | Plåttak på plats! Trivsel +12 |
| 8:58 | sak | info:guld | Plåttak på plats! Trivsel +12 |
| 8:58 | kvitto-visas | info:guld | Plåttak på plats! Trivsel +12 |
| 8:58 | toast | guld | Plåttak på plats! Trivsel +12 |
| 8:58 | händelse | malKlart | id=n2-lagg-plattak-skjulet del=Dag 3 – En skrivare till och taket nasta=sov3 |
| 8:58 | paket |  | lapp |
| 8:58 | väntar | du | Nu vet Rolf att jag bor HÄR. Benen orkar inte trampa mer. |
| 8:59 | MÅL |  | Klart för idag – sov när du vill |
| 9:00 | klar | info:guld | Plåttak på plats! Trivsel +12 |
| 9:01 | målruta |  | Klart för idag – sov när du vill |
| 9:02 | kvittens-bock |  | ✓ Lägg plåttak på skjulet |
| 9:02 | sak | du | (nytt mål i rutan) |
| 9:02 | pil |  | Klart för idag – sov när du vill |
| 9:03 | klar | du | (nytt mål i rutan) |
| 9:05 | sak | du | Nu vet Rolf att jag bor HÄR. Benen orkar inte trampa mer. |
| 9:05 | kvallsrad | du | Nu vet Rolf att jag bor HÄR. Benen orkar inte trampa mer. |
| 9:05 | klar | du | Nu vet Rolf att jag bor HÄR. Benen orkar inte trampa mer. |
| 9:06 | väntar | notis:🌇 Klockan är 21. Ali slår igen luckan.  | 🌇 Klockan är 21. Ali slår igen luckan. Dagens jobb är klart – gå in i skjulet och sov i sängen. |
| 9:07 | struken | mamma | Jag har städat ditt rum. Det tog tre dagar. Jag hittade en macka från i somras. En macka. |
| 9:10 | nattkort | du | 🌙 Dag 3 är slut. God natt. zzz… Nu vet Rolf att jag bor HÄR. Benen orkar inte trampa mer. DAGENS PRINTAR Blomkruka × 7 Flasköppnare med magnet × 1 Totalt 8 pri |

<details><summary>Botens handlingar dag 3</summary>

- 0:00 — dag 3 börjar — (762 kr)
- 0:08 popup: "FORTSÄTT" (762 kr)
- 0:22 gå till Rolfs postlåda (28 m) (762 kr)
- 0:27 panel: "Rolfs postlåda
Det här låg i l" (822 kr)
- 0:28 gå till sätt nyckeln i låset (3 m) (822 kr)
- 0:33 tjänar pengar till väntar på sopbilen (BO): 822/882 kr → printar blomkruka (105 kr) (822 kr)
- 0:35 gå till skrivaren (7 m) (822 kr)
- 0:36 printar Blomkruka (822 kr)
- 0:43 tar ut 1 st ur skrivaren (822 kr)
- 0:48 gå till Ali (28 m) (822 kr)
- 0:48 öppnar Alis butik – sälja (822 kr)
- 0:50 säljer hos Ali: +105 kr (927 kr)
- 0:53 tjänar pengar till väntar på sopbilen (BO): 927/987 kr → printar blomkruka (105 kr) (927 kr)
- 0:58 gå till skrivaren (25 m) (927 kr)
- 0:59 printar Blomkruka (927 kr)
- 1:06 tar ut 1 st ur skrivaren (927 kr)
- 1:11 gå till Ali (25 m) (927 kr)
- 1:11 öppnar Alis butik – sälja (927 kr)
- 1:13 säljer hos Ali: +105 kr (1032 kr)
- 1:18 tjänar pengar till väntar på sopbilen (BO): 1032/1092 kr → printar blomkruka (105 kr) (1032 kr)
- 1:24 gå till skrivaren (25 m) (1032 kr)
- 1:25 printar Blomkruka (1032 kr)
- 1:31 tar ut 1 st ur skrivaren (1032 kr)
- 1:36 gå till Ali (25 m) (1032 kr)
- 1:36 öppnar Alis butik – sälja (1032 kr)
- 1:38 säljer hos Ali: +105 kr (1137 kr)
- 1:42 tjänar pengar till väntar på sopbilen (BO): 1137/1197 kr → printar blomkruka (105 kr) (1137 kr)
- 1:47 gå till skrivaren (25 m) (1137 kr)
- 1:48 printar Blomkruka (1137 kr)
- 1:54 tar ut 1 st ur skrivaren (1137 kr)
- 2:00 gå till Ali (25 m) (1137 kr)
- 2:00 öppnar Alis butik – sälja (1137 kr)
- 2:02 säljer hos Ali: +105 kr (1242 kr)
- 2:05 tjänar pengar till väntar på sopbilen (BO): 1242/1302 kr → printar blomkruka (105 kr) (1242 kr)
- 2:10 gå till skrivaren (25 m) (1242 kr)
- 2:12 printar Blomkruka (1242 kr)
- 2:35 plockar 10 skräp på gården (bär max 10) (1242 kr)
- 2:43 gå till kvarnen (38 m) (1242 kr)
- 2:44 gå till skrivaren (1 m) (1242 kr)
- 2:45 tar ut 1 st ur skrivaren (1242 kr)
- 2:51 gå till Ali (28 m) (1242 kr)
- 2:51 öppnar Alis butik – sälja (1242 kr)
- 2:53 säljer hos Ali: +105 kr (1347 kr)
- 3:02 gå till Rolfs postlåda (31 m) (1347 kr)
- 3:11 plockar 10 skräp på tippen (bär max 10) (1347 kr)
- 3:13 gå till kvarnen (7 m) (1347 kr)
- 3:17 gå till skrivaren (3 m) (1347 kr)
- 3:19 printar Flasköppnare med magnet (1347 kr)
- 3:24 tar ut 1 st ur skrivaren (1347 kr)
- 3:24 valj flaskoppnare: true, vald flaskoppnare, post {"l":null,"tr":null,"tm":[]}, nummer false (1347 kr)
- 3:25 gå till Rolfs postlåda (6 m) (1347 kr)
- 3:32 tjänar pengar till väntar på flaskhalsen för cykelbatteri: 1347/1387 kr → printar blomkruka (105 kr) (1347 kr)
- 3:34 gå till skrivaren (6 m) (1347 kr)
- 3:35 printar Blomkruka (1347 kr)
- 3:41 tar ut 1 st ur skrivaren (1347 kr)
- 3:47 gå till Ali (28 m) (1347 kr)
- 3:47 öppnar Alis butik – sälja (1347 kr)
- 3:49 säljer hos Ali: +105 kr (1452 kr)
- 3:50 tjänar pengar till väntar på flaskhalsen för cykelbatteri: 1452/1492 kr → printar blomkruka (105 kr) (1452 kr)
- 3:55 gå till skrivaren (25 m) (1452 kr)
- 3:57 printar Blomkruka (1452 kr)
- 3:57 gå till cykeln (1 m) (1452 kr)
- 4:23 tar ut 1 st ur skrivaren (1452 kr)
- 4:33 popup: "Han är snäll. Typ." (1452 kr)
- 4:41 popup: "Läst" (1452 kr)
- 4:46 gå till Ali (25 m) (1452 kr)
- 4:46 öppnar Alis butik – sälja (1452 kr)
- 4:48 säljer hos Ali: +105 kr (1557 kr)
- 4:57 öppnar Alis butik – bilbatteriet (1557 kr)
- 5:00 köper cykelbatteri för 30 kr (1527 kr)
- 5:07 gå till koppla in bilbatteriet vid cykeln (24 m) (1527 kr)
- 5:25 gå till Ali (24 m) (1527 kr)
- 5:25 öppnar Alis butik – köpa ryggkorg (1527 kr)
- 5:28 köper ryggkorg för 120 kr (1407 kr)
- 5:34 gå till skrivaren (25 m) (1407 kr)
- 5:36 printar Ryggkorg (2 delar) (1407 kr)
- 5:48 tar ut 1 st ur skrivaren (1407 kr)
- 5:52 tar på ryggkorg (1407 kr)
- 5:58 gå till Ali (25 m) (1407 kr)
- 5:58 öppnar Alis butik – köpa arbetsbord (1407 kr)
- 6:01 köper bord för 120 kr (1287 kr)
- 6:07 gå till skrivaren (25 m) (1287 kr)
- 6:09 printar Arbetsbord (3 delar) (1287 kr)
- 6:24 gå till kvarnen (36 m) (1287 kr)
- 6:31 plockar 5 skräp på tippen (bär max 16) (1287 kr)
- 6:33 gå till kvarnen (8 m) (1287 kr)
- 6:34 gå till skrivaren (3 m) (1287 kr)
- 6:35 tar ut 1 st ur skrivaren (1287 kr)
- 6:36 gå till platsen för arbetsbord (5 m) (1287 kr)
- 6:37 ställer ut arbetsbord (1287 kr)
- 6:49 gå till Ali (24 m) (1287 kr)
- 6:49 öppnar Alis butik – köpa skrivare m (1287 kr)
- 6:51 köper skrivare2 för 500 kr (787 kr)
- 6:58 gå till skrivaren (25 m) (787 kr)
- 6:59 printar Skrivare M (5 delar) (787 kr)
- 7:44 popup: "Ja." (787 kr)
- 7:53 popup: "Läst" (787 kr)
- 8:04 tar ut 1 st ur skrivaren (787 kr)
- 8:04 gå till platsen för skrivare m (2 m) (787 kr)
- 8:05 ställer ut skrivare m (787 kr)
- 8:14 gå till Ali (24 m) (787 kr)
- 8:14 öppnar Alis butik – köpa plåttak (787 kr)
- 8:17 köper tak för 250 kr (537 kr)
- 8:26 plockar 1 skräp på tippen (bär max 16) (537 kr)
- 8:27 gå till kvarnen (8 m) (537 kr)
- 8:31 gå till skrivaren (5 m) (537 kr)
- 8:33 printar Plåttak (3 delar) (537 kr)
- 8:54 tar ut 1 st ur skrivaren (537 kr)
- 8:58 gå till skjulet (19 m) (537 kr)
- 9:07 gå till sängen (1 m) (537 kr)

</details>

## Dag 4

| Tid | Källa | Vem | Text |
|---|---|---|---|
| 9:10 | vara | ali | ingen |
| 9:10 | händelse | malKlart | id=sov3 del=Dag 3 – En skrivare till och taket nasta=rolf2-brev |
| 9:10 | vara | ali | kruka |
| 9:10 | MÅL |  | Vänta på sopbilen. Den lämnar något. |
| 0:00 | väntar | rolf | Morgonbulle på kontoret me polarna. Bengt har ny keps. Vi pratade om den i en timme. Den e grön. /R |
| 0:00 | skratt | du | tummen på fotot |
| 0:00 | väntar | foto | Tak över huvudet (och min tumme) |
| 0:00 | paket |  | tanke |
| 0:00 | tanke | du | I natt somnar jag torr. Det börjar bli ett hem. |
| 0:00 | väntar | du | I natt somnar jag torr. Det börjar bli ett hem. |
| 0:01 | händelse | dagenBorjar | dag=4 |
| 0:01 | meddelande | du | Dag 4. 18 dagar till jul. Drar det i skjulet blir natten lång. |
| 0:01 | dagbokkort | du | Kärran och mer vind · Dag 4. 18 dagar till jul. Drar det i skjulet blir natten lång. |
| 0:01 | röst | du | Dag 4. 18 dagar till jul. Kärran och mer vind. Drar det i skjulet blir natten lång. · STORY |
| 0:08 | väntar | notis:morgon | Ali vill ha idag: Blomkruka · +50 % |
| 0:09 | händelse | morgonkortStangt | dag=4 |
| 0:11 | målruta |  | Vänta på sopbilen. Den lämnar något. |
| 0:14 | sak | du | (nytt mål i rutan) |
| 0:14 | pil |  | Vänta på sopbilen. Den lämnar något. |
| 0:14 | klar | du | (nytt mål i rutan) |
| 0:16 | struken | notis:🌇 Klockan är 21. Ali slår igen luckan.  | 🌇 Klockan är 21. Ali slår igen luckan. Dagens jobb är klart – gå in i skjulet och sov i sängen. |
| 0:16 | sak | notis:morgon | Ali vill ha idag: Blomkruka · +50 % |
| 0:16 | notis |  | Blomkruka · +50 % |
| 0:20 | klar | notis:morgon | Ali vill ha idag: Blomkruka · +50 % |
| 0:22 | väntar | info:bra | 🛒 4 skräp från famnen i skottkärran – kärran tar mer än famnen |
| 0:30 | väntar | rolf | PERFEKT öppnare! Kärran vid lådan ä din. Den gnisslar. Precis som ja. Skriv ditt nummer på en lapp, så slipper ja skriva brev. /Rolf |
| 0:30 | sak | info:bra | 🛒 4 skräp från famnen i skottkärran – kärran tar mer än famnen |
| 0:30 | kvitto-visas | info:bra | 🛒 4 skräp från famnen i skottkärran – kärran tar mer än famnen |
| 0:30 | toast | bra | 🛒 4 skräp från famnen i skottkärran – kärran tar mer än famnen |
| 0:32 | klar | info:bra | 🛒 4 skräp från famnen i skottkärran – kärran tar mer än famnen |
| 0:34 | händelse | printStart | sak=kruka |
| 0:34 | paket |  | tanke |
| 0:34 | tanke | du | Kajsa. Ut ur skrivaren. Nu. |
| 0:34 | väntar | du | Kajsa. Ut ur skrivaren. Nu. |
| 0:34 | skratt | du | Kajsa i skrivaren |
| 0:36 | toast | guld | ✅ |
| 0:36 | händelse | printKlar | sak=kruka n=18 |
| 0:37 | händelse | tagitUrPrint | sak=kruka n=1 |
| 0:43 | sak | mamma | Bra. Jag tror dig. Nästan. |
| 0:43 | sms | mamma | Bra. Jag tror dig. Nästan. |
| 0:43 | sms-bubbla | mamma | Bra. Jag tror dig. Nästan. |
| 0:43 | röst | mamma | Bra. Jag tror dig. Nästan. · STORY |
| 0:43 | butiksbubbla | ali | Du är den enda här som vet vad en tolerans är. Det värmer. Lite. Inte mycket. |
| 0:45 | röst | ali | Du är den enda här som vet vad en tolerans är. Det värmer. Lite. Inte mycket. · STORY |
| 0:45 | aliSalt | ali | 105 |
| 0:46 | klar | mamma | Bra. Jag tror dig. Nästan. |
| 0:48 | väntar | bud | (tips) |
| 0:48 | sak | bud | (tips) |
| 0:48 | struken | du | Kajsa. Ut ur skrivaren. Nu. |
| 0:48 | väntar | du | En skottkärra! Jag väljer den med hjulet och kör den full med skräp. |
| 0:50 | klar | bud | (tips) |
| 0:52 | sak | du | En skottkärra! Jag väljer den med hjulet och kör den full med skräp. |
| 0:52 | röst | du | En skottkärra! Jag väljer den med hjulet och kör den full med skräp. · MÅL |
| 0:57 | klar | du | En skottkärra! Jag väljer den med hjulet och kör den full med skräp. |
| 1:05 | sak | du | Den här måste stå i linjen vid kvarnen, annars når inte slangen. |
| 1:05 | notis | tanke | 💭 Den här måste stå i linjen vid kvarnen, annars når inte slangen. |
| 1:05 | röst | du | Den här måste stå i linjen vid kvarnen, annars når inte slangen. · STORY |
| 1:06 | händelse | printStart | sak=kruka |
| 1:09 | toast | guld | ✅ |
| 1:09 | händelse | printKlar | sak=kruka n=19 |
| 1:09 | händelse | tagitUrPrint | sak=kruka n=1 |
| 1:11 | klar | du | Den här måste stå i linjen vid kvarnen, annars når inte slangen. |
| 1:17 | aliSalt | ali | 105 |
| 1:19 | sak | foto | Tak över huvudet (och min tumme) |
| 1:19 | foto | du | Tak över huvudet (och min tumme) |
| 1:21 | klar | foto | Tak över huvudet (och min tumme) |
| 1:29 | sak | bror | VA?! Du har byggt en skrivare TILL?? Du har typ en printfarm nu. Okej. Det är faktiskt ganska ballt. 🔥 |
| 1:29 | sms | bror | VA?! Du har byggt en skrivare TILL?? Du har typ en printfarm nu. Okej. Det är faktiskt ganska ballt. 🔥 |
| 1:29 | sms-bubbla | bror | VA?! Du har byggt en skrivare TILL?? Du har typ en printfarm nu. Okej. Det är faktiskt ganska ballt. 🔥 |
| 1:29 | röst | bror | VA?! Du har byggt en skrivare TILL?? Du har typ en printfarm nu. Okej. Det är faktiskt ganska ballt. 🔥 · STORY |
| 1:30 | händelse | printStart | sak=kruka |
| 1:33 | toast | guld | ✅ |
| 1:33 | händelse | printKlar | sak=kruka n=20 |
| 1:34 | händelse | tagitUrPrint | sak=kruka n=1 |
| 1:38 | klar | bror | VA?! Du har byggt en skrivare TILL?? Du har typ en printfarm nu. Okej. Det är faktiskt ganska ballt. 🔥 |
| 1:41 | aliSalt | ali | 105 |
| 1:44 | väntar | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått TAK. Och arbetsbord. Skriv in, Gunnar. Du skriver aldrig in. |
| 1:44 | radio | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått TAK. Och arbetsbord. Skriv in, Gunnar. Du skriver aldrig in. |
| 1:44 | skratt | du | Radio-Kjelle |
| 1:46 | sak | du | I natt somnar jag torr. Det börjar bli ett hem. |
| 1:46 | notis | tanke | 💭 I natt somnar jag torr. Det börjar bli ett hem. |
| 1:46 | röst | du | I natt somnar jag torr. Det börjar bli ett hem. · STORY |
| 1:50 | klar | du | I natt somnar jag torr. Det börjar bli ett hem. |
| 1:51 | händelse | printStart | sak=kruka |
| 1:54 | toast | guld | ✅ |
| 1:54 | händelse | printKlar | sak=kruka n=21 |
| 1:55 | händelse | tagitUrPrint | sak=kruka n=1 |
| 1:58 | sak | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått TAK. Och arbetsbord. Skriv in, Gunnar. Du skriver aldrig in. |
| 1:58 | notis |  | 📻 Radio Tippen: Radio Tippen, Kjelle här. Skjulet vid tippen har fått TAK. Och arbetsbord. Skriv in, Gunnar. Du skriver aldrig in. |
| 1:58 | röst | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått TAK. Och arbetsbord. Skriv in, Gunnar. Du skriver aldrig in. · REAKTION |
| 2:02 | aliSalt | ali | 105 |
| 2:08 | klar | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått TAK. Och arbetsbord. Skriv in, Gunnar. Du skriver aldrig in. |
| 2:15 | skratt | du | falsk tuta |
| 2:17 | händelse | printStart | sak=kruka |
| 2:19 | toast | guld | ✅ |
| 2:19 | händelse | printKlar | sak=kruka n=22 |
| 2:20 | händelse | tagitUrPrint | sak=kruka n=1 |
| 2:25 | väntar | ali | Kaktusen hälsar. Han heter Ahmed. |
| 2:25 | sak | ali | Kaktusen hälsar. Han heter Ahmed. |
| 2:25 | röst | ali | Kaktusen hälsar. Han heter Ahmed. · SMÅPRAT |
| 2:26 | bubbla |  | Kaktusen hälsar. Han heter Ahmed. |
| 2:27 | aliSalt | ali | 105 |
| 2:27 | klar | ali | Kaktusen hälsar. Han heter Ahmed. |
| 2:36 | väntar | värld:TUUT! Tjena! | TUUT! Tjena! |
| 2:38 | sak | värld:TUUT! Tjena! | TUUT! Tjena! |
| 2:38 | bubbla |  | TUUT! Tjena! |
| 2:41 | klar | värld:TUUT! Tjena! | TUUT! Tjena! |
| 2:54 | händelse | printStart | sak=kruka |
| 2:57 | toast | guld | ✅ |
| 2:57 | händelse | printKlar | sak=kruka n=23 |
| 2:57 | händelse | tagitUrPrint | sak=kruka n=1 |
| 2:58 | skratt | du | falsk tuta |
| 2:58 | paket |  | ge |
| 2:58 | väntar |  | (läget ändras) |
| 2:59 | sak |  | (läget ändras) |
| 2:59 | brev | rolf | rolf:2 |
| 2:59 | klar |  | (läget ändras) |
| 3:02 | väntar | mamma | Jag sa till pappa att du bor på en soptipp. Han sa "aha, vad lugnt då" och satte på Formel 1. Lugnt? |
| 3:05 | aliSalt | ali | 105 |
| 3:06 | upplåst | skrivare | trim_skrivare2 |
| 3:06 | brott | UPPLÅST | trim_skrivare2 (skrivare 130 av 60) |
| 3:06 | händelse | upplast | id=trim_skrivare2 flask=skrivare |
| 3:06 | paket |  | tanke → sms |
| 3:06 | tanke | du | Skrivare M hinner inte heller. Den kunde gå fortare. |
| 3:06 | väntar | du | Skrivare M hinner inte heller. Den kunde gå fortare. |
| 3:06 | väntar | ali | Ali här. Skrivartrim igen. Nästa nivå. Den här gången skruvade jag åt rätt håll. |
| 3:15 | väntar | rolf | Tjo. Ska grilla på lördag. Min grillspade smälte. Kan du göra en sån hä? /Rolf 🍖​ |
| 3:15 | paket |  | ge |
| 3:15 | väntar |  | (läget ändras) |
| 3:15 | sak | rolf | Tjo. Ska grilla på lördag. Min grillspade smälte. Kan du göra en sån hä? /Rolf 🍖​ |
| 3:15 | lapp | Brev från Rolf | Tjo. Ska grilla på lördag. Min grillspade smälte. Kan du göra en sån hä? /Rolf 🍖​ |
| 3:15 | röst | rolf | Tjo. Ska grilla på lördag. Min grillspade smälte. Kan du göra en sån hä? /Rolf 🍖​ · STORY |
| 3:15 | händelse | malKlart | id=rolf2-brev del=Dag 4 – Kärran och mer vind nasta=rolf2-printa |
| 3:15 | väntar | du | Printa grillspade. |
| 3:15 | MÅL |  | Printa grillspade |
| 3:18 | målruta |  | Printa grillspade |
| 3:19 | händelse | printStart | sak=grillspade |
| 3:19 | händelse | malKlart | id=rolf2-printa del=Dag 4 – Kärran och mer vind nasta=rolf2-ge |
| 3:19 | väntar | du | Ge Rolf grillspade. |
| 3:19 | MÅL |  | Ge Rolf grillspade |
| 3:22 | klar | rolf | Tjo. Ska grilla på lördag. Min grillspade smälte. Kan du göra en sån hä? /Rolf 🍖​ |
| 3:22 | händelse | brevLast | id=rolf:2 |
| 3:22 | målruta |  | Ge Rolf grillspade |
| 3:23 | toast | guld | ✅ |
| 3:23 | händelse | printKlar | sak=grillspade n=1 |
| 3:23 | kvittens-bock |  | ✓ Printa grillspade |
| 3:24 | händelse | tagitUrPrint | sak=grillspade n=1 |
| 3:24 | struken | du | Printa grillspade. |
| 3:24 | sak | du | Ge Rolf grillspade. |
| 3:24 | pil |  | Ge Rolf grillspade |
| 3:24 | röst | du | Ge Rolf grillspade. · MÅL |
| 3:26 | klar | du | Ge Rolf grillspade. |
| 3:28 | sak |  | (läget ändras) |
| 3:28 | klar |  | (läget ändras) |
| 3:30 | händelse | lagtIPostlada | sak=grillspade rolf=2 jobb=false |
| 3:30 | struken | kedja | rolf2 |
| 3:30 | händelse | malKlart | id=rolf2-ge del=Dag 4 – Kärran och mer vind nasta=n3-tom-full-karra |
| 3:30 | väntar | du | Kärran rymmer massor. Jag fyller den och tippar allt i kvarnen. |
| 3:30 | målruta |  | Töm en full kärra i kvarnen |
| 3:30 | MÅL |  | Töm en full kärra i kvarnen |
| 3:30 | sak | du | Kärran rymmer massor. Jag fyller den och tippar allt i kvarnen. |
| 3:30 | pil |  | Töm en full kärra i kvarnen |
| 3:30 | notis | tanke | 💭 Kärran rymmer massor. Jag fyller den och tippar allt i kvarnen. |
| 3:30 | röst | du | Kärran rymmer massor. Jag fyller den och tippar allt i kvarnen. · MÅL |
| 3:32 | tanke | du | Tratten är stor som en kaffekopp. Tunnan är stor som jag. |
| 3:32 | väntar | du | Tratten är stor som en kaffekopp. Tunnan är stor som jag. |
| 3:34 | kvittens-bock |  | ✓ Ge Rolf grillspade |
| 3:35 | klar | du | Kärran rymmer massor. Jag fyller den och tippar allt i kvarnen. |
| 3:39 | karraKlick | du | träff |
| 3:40 | karraKlick | du | träff |
| 3:41 | karraKlick | du | träff |
| 3:42 | karraKlick | du | träff |
| 3:43 | sak | du | Skrivare M hinner inte heller. Den kunde gå fortare. |
| 3:43 | notis | tanke | 💭 Skrivare M hinner inte heller. Den kunde gå fortare. |
| 3:43 | röst | du | Skrivare M hinner inte heller. Den kunde gå fortare. · STORY |
| 3:44 | karraKlick | du | träff |
| 3:45 | karraKlick | du | träff |
| 3:46 | karraKlick | du | träff |
| 3:47 | karraKlick | du | träff |
| 3:48 | klar | du | Skrivare M hinner inte heller. Den kunde gå fortare. |
| 3:50 | väntar | mamma | Det har ringt en karl som heter Rolf och frågat om du gillar korv. Vem är det? Varför har han mitt nummer? |
| 3:50 | tanke | du | Det får inte plats. Jag behöver något att tippa i. |
| 3:50 | väntar | du | Det får inte plats. Jag behöver något att tippa i. |
| 3:50 | väntar | info:bra | 11 st i tratten · 5 st på marken bredvid |
| 3:50 | sak | info:bra | 11 st i tratten · 5 st på marken bredvid |
| 3:50 | kvitto-visas | info:bra | 11 st i tratten · 5 st på marken bredvid |
| 3:50 | toast | bra | 11 st i tratten · 5 st på marken bredvid |
| 3:50 | händelse | malKlart | id=n3-tom-full-karra del=Dag 4 – Kärran och mer vind nasta=sophallare |
| 3:50 | struken | du | Tratten är stor som en kaffekopp. Tunnan är stor som jag. |
| 3:50 | väntar | du | En sophållare bakom kvarnen. Då matar den sig själv. |
| 3:50 | MÅL |  | Plocka skräp och mal det |
| 3:52 | klar | info:bra | 11 st i tratten · 5 st på marken bredvid |
| 3:52 | målruta |  | Plocka skräp och mal det |
| 3:54 | kvittens-bock |  | ✓ Töm en full kärra i kvarnen |
| 3:54 | sak | du | En sophållare bakom kvarnen. Då matar den sig själv. |
| 3:54 | pil |  | Plocka skräp och mal det |
| 3:54 | notis | tanke | 💭 En sophållare bakom kvarnen. Då matar den sig själv. |
| 3:54 | röst | du | En sophållare bakom kvarnen. Då matar den sig själv. · MÅL |
| 3:58 | klar | du | En sophållare bakom kvarnen. Då matar den sig själv. |
| 4:00 | sak | du | Det får inte plats. Jag behöver något att tippa i. |
| 4:00 | notis | tanke | 💭 Det får inte plats. Jag behöver något att tippa i. |
| 4:00 | röst | du | Det får inte plats. Jag behöver något att tippa i. · STORY |
| 4:04 | klar | du | Det får inte plats. Jag behöver något att tippa i. |
| 4:05 | händelse | printStart | sak=kruka |
| 4:06 | struken | mamma | Jag sa till pappa att du bor på en soptipp. Han sa "aha, vad lugnt då" och satte på Formel 1. Lugnt? |
| 4:08 | toast | guld | ✅ |
| 4:08 | händelse | printKlar | sak=kruka n=24 |
| 4:09 | händelse | tagitUrPrint | sak=kruka n=1 |
| 4:13 | sak | ali | Ali här. Skrivartrim igen. Nästa nivå. Den här gången skruvade jag åt rätt håll. |
| 4:13 | sms | ali | Ali här. Skrivartrim igen. Nästa nivå. Den här gången skruvade jag åt rätt håll. |
| 4:13 | sms-bubbla | ali | Ali här. Skrivartrim igen. Nästa nivå. Den här gången skruvade jag åt rätt håll. |
| 4:13 | röst | ali | Ali här. Skrivartrim igen. Nästa nivå. Den här gången skruvade jag åt rätt håll. · STORY |
| 4:16 | aliSalt | ali | 105 |
| 4:19 | klar | ali | Ali här. Skrivartrim igen. Nästa nivå. Den här gången skruvade jag åt rätt håll. |
| 4:28 | händelse | printStart | sak=kruka |
| 4:31 | paket |  | tanke |
| 4:31 | tanke | du | Den blev… spagetti. Ali kallar det modern konst. |
| 4:31 | väntar | du | Den blev… spagetti. Ali kallar det modern konst. |
| 4:31 | skratt | du | plastspagetti |
| 4:31 | toast | guld | ✅ |
| 4:31 | händelse | printKlar | sak=kruka n=25 |
| 4:32 | händelse | tagitUrPrint | sak=spagetti n=1 |
| 4:39 | skratt | du | Ali köper konst |
| 4:39 | aliSalt | ali | 3 |
| 4:45 | skratt | du | falsk tuta |
| 4:47 | händelse | printStart | sak=kruka |
| 4:50 | toast | guld | ✅ |
| 4:50 | händelse | printKlar | sak=kruka n=26 |
| 4:50 | händelse | tagitUrPrint | sak=kruka n=1 |
| 4:54 | struken | du | Den blev… spagetti. Ali kallar det modern konst. |
| 4:58 | aliSalt | ali | 105 |
| 5:02 | paket |  | tanke |
| 5:02 | tanke | du | Jaha, Rolf har hämtat en grillspade. |
| 5:02 | väntar | du | Jaha, Rolf har hämtat en grillspade. |
| 5:07 | händelse | printStart | sak=kruka |
| 5:10 | toast | guld | ✅ |
| 5:10 | händelse | printKlar | sak=kruka n=27 |
| 5:10 | händelse | tagitUrPrint | sak=kruka n=1 |
| 5:18 | aliSalt | ali | 105 |
| 5:24 | väntar | värld:TUUT TUUT! | TUUT TUUT! |
| 5:24 | struken | du | Jaha, Rolf har hämtat en grillspade. |
| 5:27 | händelse | printStart | sak=kruka |
| 5:30 | toast | guld | ✅ |
| 5:30 | händelse | printKlar | sak=kruka n=28 |
| 5:30 | händelse | tagitUrPrint | sak=kruka n=1 |
| 5:38 | aliSalt | ali | 105 |
| 5:46 | struken | värld:TUUT TUUT! | TUUT TUUT! |
| 5:47 | händelse | printStart | sak=kruka |
| 5:49 | toast | guld | ✅ |
| 5:49 | händelse | printKlar | sak=kruka n=29 |
| 5:50 | händelse | tagitUrPrint | sak=kruka n=1 |
| 5:57 | aliSalt | ali | 105 |
| 6:07 | händelse | printStart | sak=kruka |
| 6:09 | toast | guld | ✅ |
| 6:09 | händelse | printKlar | sak=kruka n=30 |
| 6:12 | händelse | tagitUrPrint | sak=kruka n=1 |
| 6:20 | aliSalt | ali | 105 |
| 6:29 | händelse | printStart | sak=kruka |
| 6:32 | toast | guld | ✅ |
| 6:32 | händelse | printKlar | sak=kruka n=31 |
| 6:32 | händelse | tagitUrPrint | sak=kruka n=1 |
| 6:40 | aliSalt | ali | 105 |
| 6:49 | händelse | printStart | sak=kruka |
| 6:50 | väntar | mamma | Det har ringt en karl som heter Rolf och frågat om du gillar korv. Vem är det? Varför har han mitt nummer? |
| 6:50 | sak | mamma | Det har ringt en karl som heter Rolf och frågat om du gillar korv. Vem är det? Varför har han mitt nummer? |
| 6:50 | sms | mamma | Det har ringt en karl som heter Rolf och frågat om du gillar korv. Vem är det? Varför har han mitt nummer? |
| 6:50 | sms-bubbla | mamma | Det har ringt en karl som heter Rolf och frågat om du gillar korv. Vem är det? Varför har han mitt nummer? |
| 6:50 | röst | mamma | Det har ringt en karl som heter Rolf och frågat om du gillar korv. Vem är det? Varför har han mitt nummer? · SMÅPRAT |
| 6:52 | toast | guld | ✅ |
| 6:52 | händelse | printKlar | sak=kruka n=32 |
| 6:52 | händelse | tagitUrPrint | sak=kruka n=1 |
| 6:58 | klar | mamma | Det har ringt en karl som heter Rolf och frågat om du gillar korv. Vem är det? Varför har han mitt nummer? |
| 7:00 | aliSalt | ali | 105 |
| 7:09 | händelse | printStart | sak=kruka |
| 7:10 | paket |  | tanke |
| 7:10 | tanke | du | En badanka. Den överlevde kvarnen. |
| 7:10 | väntar | du | En badanka. Den överlevde kvarnen. |
| 7:10 | skratt | du | kvarnen spottar |
| 7:10 | sak | du | En badanka. Den överlevde kvarnen. |
| 7:10 | notis | tanke | 💭 En badanka. Den överlevde kvarnen. |
| 7:10 | röst | du | En badanka. Den överlevde kvarnen. · REAKTION |
| 7:12 | toast | guld | ✅ |
| 7:12 | händelse | printKlar | sak=kruka n=33 |
| 7:12 | händelse | tagitUrPrint | sak=kruka n=1 |
| 7:12 | upplåst | bara | matarband |
| 7:12 | brott | RESERV | matarband (bara 0 av 3) |
| 7:12 | händelse | upplast | id=matarband flask=bara |
| 7:12 | paket |  | sms |
| 7:12 | väntar | ali | Ali här. 🗑️ Sophållaren. Jag frågade AI:n hur man slipper bära skräp. Den gjorde det här. Den har mer fritid än jag. Suck. |
| 7:13 | klar | du | En badanka. Den överlevde kvarnen. |
| 7:19 | skratt | du | falsk tuta |
| 7:20 | aliSalt | ali | 105 |
| 7:24 | struken | info:guld | 3D-modell köpt – printa sophållare |
| 7:24 | händelse | kopt | sak=matarband |
| 7:24 | struken | ali | Ali här. 🗑️ Sophållaren. Jag frågade AI:n hur man slipper bära skräp. Den gjorde det här. Den har mer fritid än jag. Suck. |
| 7:47 | händelse | printStart | sak=byggsats:matarband |
| 7:50 | toast | bra | Del 1 av 3 klar |
| 7:54 | toast | bra | Del 2 av 3 klar |
| 7:56 | toast | fel | Ingen ström – trampa cykeln |
| 8:05 | händelse | printKlar | sak=byggsats:matarband n=1 |
| 8:05 | toast | guld | ✅ |
| 8:05 | händelse | tagitUrPrint | sak=byggsats:matarband n=1 |
| 8:05 | paket |  | sms |
| 8:05 | väntar | ali | Ali här. Jag såg Sophållare på avstånd. Ett streck blev lite snett. Mitt fel. Vackert ändå. |
| 8:05 | paket |  | sms |
| 8:05 | väntar | ali | Ali igen. Jag har sagt till min bror att jag inte går i pension. Jag startar något. Han skrattade. Jag skrattade också. Men jag menar det. Tack. Säg inget. |
| 8:07 | händelse | placerat | sak=sophallare |
| 8:07 | kvittens | du | Nu kan jag tömma hela kärran på en gång. |
| 8:07 | varför-köad | du | Krukor är bra. Pallar är bättre. |
| 8:07 | väntar | du | Nu kan jag tömma hela kärran på en gång. |
| 8:07 | väntar | info:guld | 🗑️ Sophållaren står bakom kvarnen! Töm allt skräp i den – den matar kvarnen själv. |
| 8:07 | sak | du | Nu kan jag tömma hela kärran på en gång. |
| 8:07 | notis | tanke | 💭 Nu kan jag tömma hela kärran på en gång. |
| 8:07 | röst | du | Nu kan jag tömma hela kärran på en gång. · STORY |
| 8:07 | händelse | malKlart | id=sophallare del=Dag 4 – Kärran och mer vind nasta=pall |
| 8:07 | väntar | du | Jag behöver något att sitta på. En pall. Lagom ambitiöst. |
| 8:07 | MÅL |  | Printa en pall |
| 8:09 | målruta |  | Printa en pall |
| 8:10 | klar | du | Nu kan jag tömma hela kärran på en gång. |
| 8:13 | sak | du | Jag behöver något att sitta på. En pall. Lagom ambitiöst. |
| 8:13 | pil |  | Printa en pall |
| 8:13 | notis | tanke | 💭 Jag behöver något att sitta på. En pall. Lagom ambitiöst. |
| 8:13 | röst | du | Jag behöver något att sitta på. En pall. Lagom ambitiöst. · MÅL |
| 8:13 | nick |  | nick:46 |
| 8:18 | klar | du | Jag behöver något att sitta på. En pall. Lagom ambitiöst. |
| 8:18 | händelse | kopt | sak=pall |
| 8:18 | röst | ali | Bra val. Folk köper sånt. Jag vet inte varför. · STORY |
| 8:18 | upprepning | ali | Bra val. Folk köper sånt. Jag vet inte varför. |
| 8:18 | butiksbubbla | ali | Pall? Bra val. Folk köper sånt. Jag vet inte varför. |
| 8:20 | struken | info:guld | 🗑️ Sophållaren står bakom kvarnen! Töm allt skräp i den – den matar kvarnen själv. |
| 8:27 | händelse | printStart | sak=pall |
| 8:32 | toast | guld | ✅ |
| 8:32 | händelse | printKlar | sak=pall n=1 |
| 8:32 | händelse | malKlart | id=pall del=Dag 4 – Kärran och mer vind nasta=vind4 |
| 8:32 | väntar | du | En vindsnurra till på skjulets tak. Skrivarna vill ha mer ström. |
| 8:32 | målruta |  | Printa och sälj |
| 8:32 | MÅL |  | Printa och sälj |
| 8:32 | sak | du | En vindsnurra till på skjulets tak. Skrivarna vill ha mer ström. |
| 8:32 | pil |  | Printa och sälj |
| 8:32 | notis | tanke | 💭 En vindsnurra till på skjulets tak. Skrivarna vill ha mer ström. |
| 8:32 | röst | du | En vindsnurra till på skjulets tak. Skrivarna vill ha mer ström. · MÅL |
| 8:32 | händelse | tagitUrPrint | sak=pall n=1 |
| 8:36 | kvittens-bock |  | ✓ Printa en pall |
| 8:38 | klar | du | En vindsnurra till på skjulets tak. Skrivarna vill ha mer ström. |
| 8:38 | händelse | placerat | sak=pall |
| 8:52 | strömdipp | du | vindsnurra2 |
| 8:52 | paket |  | tanke |
| 8:52 | tanke | du | Allt stannar. Maskinerna drar mer än jag får in. |
| 8:52 | väntar | du | Allt stannar. Maskinerna drar mer än jag får in. |
| 8:52 | sak | du | Allt stannar. Maskinerna drar mer än jag får in. |
| 8:52 | notis | tanke | 💭 Allt stannar. Maskinerna drar mer än jag får in. |
| 8:52 | röst | du | Allt stannar. Maskinerna drar mer än jag får in. · STORY |
| 8:53 | upplåst | strom | vindsnurra2 |
| 8:53 | brott | UPPLÅST | vindsnurra2 (strom 44 av 15) |
| 8:53 | händelse | upplast | id=vindsnurra2 flask=strom |
| 8:53 | paket |  | tanke → sms |
| 8:53 | tanke | du | En snurra räcker inte. Skrivarna står still så fort det blir stilla. |
| 8:53 | väntar | du | En snurra räcker inte. Skrivarna står still så fort det blir stilla. |
| 8:53 | väntar | ali | Ali här. En snurra till? Taket har plats för två. Vinden har inget emot det. |
| 8:56 | klar | du | Allt stannar. Maskinerna drar mer än jag får in. |
| 9:06 | sak | ali | Ali här. Jag såg Sophållare på avstånd. Ett streck blev lite snett. Mitt fel. Vackert ändå. |
| 9:06 | sms | ali | Ali här. Jag såg Sophållare på avstånd. Ett streck blev lite snett. Mitt fel. Vackert ändå. |
| 9:06 | sms-bubbla | ali | Ali här. Jag såg Sophållare på avstånd. Ett streck blev lite snett. Mitt fel. Vackert ändå. |
| 9:06 | röst | ali | Ali här. Jag såg Sophållare på avstånd. Ett streck blev lite snett. Mitt fel. Vackert ändå. · REAKTION |
| 9:07 | skratt | du | däcket rullar iväg |
| 9:07 | paket |  | tanke |
| 9:07 | tanke | du | Däcket ville inte stanna. Jag förstår det. |
| 9:07 | väntar | du | Däcket ville inte stanna. Jag förstår det. |
| 9:13 | klar | ali | Ali här. Jag såg Sophållare på avstånd. Ett streck blev lite snett. Mitt fel. Vackert ändå. |
| 9:14 | väntar | värld:TUUT! Hej grannen! | TUUT! Hej grannen! |
| 9:24 | sak | du | En snurra räcker inte. Skrivarna står still så fort det blir stilla. |
| 9:24 | notis | tanke | 💭 En snurra räcker inte. Skrivarna står still så fort det blir stilla. |
| 9:24 | röst | du | En snurra räcker inte. Skrivarna står still så fort det blir stilla. · STORY |
| 9:25 | händelse | printStart | sak=pall |
| 9:25 | paket |  | tanke |
| 9:25 | tanke | du | Kajsa. Ut ur skrivaren. Nu. |
| 9:25 | struken | du | Däcket ville inte stanna. Jag förstår det. |
| 9:25 | väntar | du | Kajsa. Ut ur skrivaren. Nu. |
| 9:25 | skratt | du | Kajsa i skrivaren |
| 9:28 | toast | fel | Ingen ström – trampa cykeln |
| 9:30 | klar | du | En snurra räcker inte. Skrivarna står still så fort det blir stilla. |
| 9:34 | struken | värld:TUUT! Hej grannen! | TUUT! Hej grannen! |
| 9:38 | sak | du | Kajsa. Ut ur skrivaren. Nu. |
| 9:38 | notis | tanke | 💭 Kajsa. Ut ur skrivaren. Nu. |
| 9:38 | röst | du | Kajsa. Ut ur skrivaren. Nu. · REAKTION |
| 9:39 | toast | guld | ✅ |
| 9:39 | händelse | printKlar | sak=pall n=2 |
| 9:40 | händelse | tagitUrPrint | sak=pall n=1 |
| 9:40 | klar | du | Kajsa. Ut ur skrivaren. Nu. |
| 9:47 | aliSalt | ali | 180 |
| 9:50 | struken | info:guld | 3D-modell köpt – printa vindsnurra till skjultaket |
| 9:50 | händelse | kopt | sak=vindsnurra |
| 9:51 | sak | ali | Ali här. En snurra till? Taket har plats för två. Vinden har inget emot det. |
| 9:51 | sms | ali | Ali här. En snurra till? Taket har plats för två. Vinden har inget emot det. |
| 9:51 | sms-bubbla | ali | Ali här. En snurra till? Taket har plats för två. Vinden har inget emot det. |
| 9:51 | röst | ali | Ali här. En snurra till? Taket har plats för två. Vinden har inget emot det. · STORY |
| 9:52 | morgonkort | ⏸️ Pausad | ⏸️ Pausad · Klicka för att fortsätta. |
| 9:57 | klar | ali | Ali här. En snurra till? Taket har plats för två. Vinden har inget emot det. |
| 10:06 | händelse | printStart | sak=byggsats:vindsnurra |
| 10:10 | händelse | printKlar | sak=byggsats:vindsnurra n=1 |
| 10:10 | toast | guld | ✅ |
| 10:11 | struken | info:guld | 🌬️ Vindsnurran ska upp på skjulets tak. |
| 10:11 | händelse | tagitUrPrint | sak=byggsats:vindsnurra n=1 |
| 10:16 | händelse | placerat | sak=vindsnurra |
| 10:16 | struken | info:guld | 🌬️ Vindsnurran sitter på taket – den trampar cykeln åt mig när det blåser |
| 10:16 | monterat | du | byggsats:vindsnurra |
| 10:16 | händelse | monterat | sak=vindsnurra |
| 10:16 | händelse | malKlart | id=vind4 del=Dag 4 – Kärran och mer vind nasta=n3-isolera-tva-vaggar |
| 10:16 | lapp | 📔 Dagbok | Slut på trampandet. Nästan. |
| 10:16 | dagbokrad | du | Slut på trampandet. Nästan. |
| 10:16 | väntar | notis:Slut på trampandet. Nästan. | Slut på trampandet. Nästan. |
| 10:16 | väntar | du | Det drar genom väggarna. Isolering, och sen blir det varmt. |
| 10:17 | MÅL |  | Isolera två väggar · 0/2 |
| 10:17 | sak | du | Det drar genom väggarna. Isolering, och sen blir det varmt. |
| 10:17 | målruta |  | Isolera två väggar · 0/2 |
| 10:17 | pil |  | Isolera två väggar · 0/2 |
| 10:17 | notis | tanke | 💭 Det drar genom väggarna. Isolering, och sen blir det varmt. |
| 10:17 | röst | du | Det drar genom väggarna. Isolering, och sen blir det varmt. · MÅL |
| 10:17 | nick |  | nick:48 |
| 10:22 | klar | du | Det drar genom väggarna. Isolering, och sen blir det varmt. |
| 10:24 | sak | notis:Slut på trampandet. Nästan. | Slut på trampandet. Nästan. |
| 10:24 | notis | dagbok | Slut på trampandet. Nästan. |
| 10:26 | klar | notis:Slut på trampandet. Nästan. | Slut på trampandet. Nästan. |
| 10:26 | händelse | pappa | Pappa ringer |
| 10:31 | röst | pappa | Hej. Det är pappa. · STORY |
| 10:33 | röst | du | Hej pappa. · STORY |
| 10:37 | röst | pappa | Mamma står bredvid. Hon säger att jag ska fråga om du äter. · STORY |
| 10:41 | röst | du | Jag äter. Och jag har en egen kvarn nu. Och en 3D-skrivare. · STORY |
| 10:47 | röst | pappa | Jaha. En kvarn. Vad lugnt då. · STORY |
| 10:49 | röst | pappa | Jag kanske kommer förbi nån dag. Om det passar. · STORY |
| 10:54 | röst | du | Det passar. · STORY |
| 10:56 | röst | pappa | Bra. Hej då då. · STORY |
| 11:05 | händelse | samtalSlut | id=pappa4 |
| 11:05 | struken | kedja | samtal4 |
| 11:11 | struken | info:guld | 3D-modell köpt – printa isolerskiva (vägg) |
| 11:11 | händelse | kopt | sak=vaggar |
| 11:20 | händelse | printStart | sak=byggsats:vaggar |
| 11:23 | händelse | printKlar | sak=byggsats:vaggar n=1 |
| 11:23 | toast | guld | ✅ |
| 11:24 | händelse | tagitUrPrint | sak=byggsats:vaggar n=1 |
| 11:28 | väntar | info:guld | 🧱 Bakväggen klar. 3 kvar. |
| 11:28 | sak | info:guld | 🧱 Bakväggen klar. 3 kvar. |
| 11:28 | kvitto-visas | info:guld | 🧱 Bakväggen klar. 3 kvar. |
| 11:28 | toast | guld | 🧱 Bakväggen klar. 3 kvar. |
| 11:30 | klar | info:guld | 🧱 Bakväggen klar. 3 kvar. |
| 11:31 | skratt | du | falsk tuta |
| 11:37 | händelse | printStart | sak=byggsats:vaggar |
| 11:41 | händelse | printKlar | sak=byggsats:vaggar n=1 |
| 11:41 | toast | guld | ✅ |
| 11:42 | händelse | tagitUrPrint | sak=byggsats:vaggar n=1 |
| 11:46 | väntar | info:guld | 🧱 Vänster vägg klar. 2 kvar. |
| 11:46 | sak | info:guld | 🧱 Vänster vägg klar. 2 kvar. |
| 11:46 | kvitto-visas | info:guld | 🧱 Vänster vägg klar. 2 kvar. |
| 11:46 | toast | guld | 🧱 Vänster vägg klar. 2 kvar. |
| 11:46 | händelse | malKlart | id=n3-isolera-tva-vaggar del=Dag 4 – Kärran och mer vind nasta=sov4 |
| 11:46 | paket |  | lapp |
| 11:46 | väntar | du | En skrivare räcker inte. |
| 11:46 | MÅL |  | Klart för idag – sov när du vill |
| 11:46 | skratt | du | däcket rullar iväg |
| 11:48 | klar | info:guld | 🧱 Vänster vägg klar. 2 kvar. |
| 11:49 | målruta |  | Klart för idag – sov när du vill |
| 11:50 | kvittens-bock |  | ✓ Isolera två väggar · 2/2 |
| 11:50 | sak | du | (nytt mål i rutan) |
| 11:50 | pil |  | Klart för idag – sov när du vill |
| 11:50 | klar | du | (nytt mål i rutan) |
| 11:52 | sak | du | En skrivare räcker inte. |
| 11:52 | kvallsrad | du | En skrivare räcker inte. |
| 11:53 | klar | du | En skrivare räcker inte. |
| 11:53 | väntar | notis:🌇 Klockan är 21. Ali slår igen luckan.  | 🌇 Klockan är 21. Ali slår igen luckan. Dagens jobb är klart – gå in i skjulet och sov i sängen. |
| 11:57 | nattkort | du | 🌙 Dag 4 är slut. God natt. zzz… En skrivare räcker inte. DAGENS PRINTAR Blomkruka × 16 Pall × 2 Grillspade × 1 Totalt 19 printar 💰 Tjänat i dag +1 878 kr |

<details><summary>Botens handlingar dag 4</summary>

- 0:00 — dag 4 börjar — (537 kr)
- 0:08 popup: "FORTSÄTT" (537 kr)
- 0:22 gå till Rolfs postlåda (28 m) (537 kr)
- 0:30 panel: "Rolfs postlåda
Det här låg i l" (657 kr)
- 0:31 tjänar pengar till väntar på sopbilen (BO): 657/717 kr → printar blomkruka (105 kr) (657 kr)
- 0:32 gå till skrivaren (8 m) (657 kr)
- 0:34 printar Blomkruka (657 kr)
- 0:38 tar ut 1 st ur skrivaren (657 kr)
- 0:43 gå till Ali (26 m) (657 kr)
- 0:43 öppnar Alis butik – sälja (657 kr)
- 0:45 säljer hos Ali: +105 kr (762 kr)
- 0:59 tjänar pengar till väntar på sopbilen (BO): 762/822 kr → printar blomkruka (105 kr) (762 kr)
- 1:04 gå till skrivaren (24 m) (762 kr)
- 1:06 printar Blomkruka (762 kr)
- 1:10 tar ut 1 st ur skrivaren (762 kr)
- 1:15 gå till Ali (24 m) (762 kr)
- 1:15 öppnar Alis butik – sälja (762 kr)
- 1:17 säljer hos Ali: +105 kr (867 kr)
- 1:23 tjänar pengar till väntar på sopbilen (BO): 867/927 kr → printar blomkruka (105 kr) (867 kr)
- 1:29 gå till skrivaren (24 m) (867 kr)
- 1:30 printar Blomkruka (867 kr)
- 1:34 tar ut 1 st ur skrivaren (867 kr)
- 1:39 gå till Ali (24 m) (867 kr)
- 1:39 öppnar Alis butik – sälja (867 kr)
- 1:41 säljer hos Ali: +105 kr (972 kr)
- 1:44 tjänar pengar till väntar på sopbilen (BO): 972/1032 kr → printar blomkruka (105 kr) (972 kr)
- 1:50 gå till skrivaren (24 m) (972 kr)
- 1:51 printar Blomkruka (972 kr)
- 1:55 tar ut 1 st ur skrivaren (972 kr)
- 2:00 gå till Ali (24 m) (972 kr)
- 2:00 öppnar Alis butik – sälja (972 kr)
- 2:02 säljer hos Ali: +105 kr (1077 kr)
- 2:10 tjänar pengar till väntar på sopbilen (BO): 1077/1137 kr → printar blomkruka (105 kr) (1077 kr)
- 2:15 gå till skrivaren (24 m) (1077 kr)
- 2:17 printar Blomkruka (1077 kr)
- 2:21 tar ut 1 st ur skrivaren (1077 kr)
- 2:26 gå till Ali (24 m) (1077 kr)
- 2:26 öppnar Alis butik – sälja (1077 kr)
- 2:28 säljer hos Ali: +105 kr (1182 kr)
- 2:31 tjänar pengar till väntar på sopbilen (BO): 1182/1242 kr → printar blomkruka (105 kr) (1182 kr)
- 2:43 plockar 6 skräp på tippen (bär max 16) (1182 kr)
- 2:45 gå till kvarnen (10 m) (1182 kr)
- 2:53 gå till skrivaren (5 m) (1182 kr)
- 2:54 printar Blomkruka (1182 kr)
- 2:58 tar ut 1 st ur skrivaren (1182 kr)
- 3:04 gå till Ali (26 m) (1182 kr)
- 3:04 öppnar Alis butik – sälja (1182 kr)
- 3:06 säljer hos Ali: +105 kr (1287 kr)
- 3:15 gå till Rolfs postlåda (31 m) (1287 kr)
- 3:18 gå till skrivaren (8 m) (1287 kr)
- 3:19 printar Grillspade (1287 kr)
- 3:24 tar ut 1 st ur skrivaren (1287 kr)
- 3:28 valj grillspade: true, vald grillspade, post {"l":null,"tr":null,"tm":[]}, nummer false (1287 kr)
- 3:30 gå till Rolfs postlåda (8 m) (1287 kr)
- 3:47 fyller kärran med 8 skräp (1287 kr)
- 3:50 gå till kvarnen (10 m) (1287 kr)
- 4:02 tjänar pengar till väntar på flaskhalsen för matarband: 1287/1327 kr → printar blomkruka (105 kr) (1287 kr)
- 4:04 gå till skrivaren (5 m) (1287 kr)
- 4:05 printar Blomkruka (1287 kr)
- 4:09 tar ut 1 st ur skrivaren (1287 kr)
- 4:15 gå till Ali (26 m) (1287 kr)
- 4:15 öppnar Alis butik – sälja (1287 kr)
- 4:17 säljer hos Ali: +105 kr (1392 kr)
- 4:21 tjänar pengar till väntar på flaskhalsen för matarband: 1392/1432 kr → printar blomkruka (105 kr) (1392 kr)
- 4:27 gå till skrivaren (24 m) (1392 kr)
- 4:28 printar Blomkruka (1392 kr)
- 4:32 tar ut 1 st ur skrivaren (1392 kr)
- 4:37 gå till Ali (24 m) (1392 kr)
- 4:37 öppnar Alis butik – sälja (1392 kr)
- 4:39 säljer hos Ali: +3 kr (1395 kr)
- 4:40 tjänar pengar till väntar på flaskhalsen för matarband: 1395/1432 kr → printar blomkruka (105 kr) (1395 kr)
- 4:45 gå till skrivaren (24 m) (1395 kr)
- 4:47 printar Blomkruka (1395 kr)
- 4:51 tar ut 1 st ur skrivaren (1395 kr)
- 4:56 gå till Ali (24 m) (1395 kr)
- 4:56 öppnar Alis butik – sälja (1395 kr)
- 4:58 säljer hos Ali: +105 kr (1500 kr)
- 5:00 tjänar pengar till väntar på flaskhalsen för matarband: 1500/1540 kr → printar blomkruka (105 kr) (1500 kr)
- 5:05 gå till skrivaren (24 m) (1500 kr)
- 5:07 printar Blomkruka (1500 kr)
- 5:11 tar ut 1 st ur skrivaren (1500 kr)
- 5:16 gå till Ali (24 m) (1500 kr)
- 5:16 öppnar Alis butik – sälja (1500 kr)
- 5:18 säljer hos Ali: +105 kr (1605 kr)
- 5:20 tjänar pengar till väntar på flaskhalsen för matarband: 1605/1645 kr → printar blomkruka (105 kr) (1605 kr)
- 5:25 gå till skrivaren (24 m) (1605 kr)
- 5:27 printar Blomkruka (1605 kr)
- 5:31 tar ut 1 st ur skrivaren (1605 kr)
- 5:36 gå till Ali (24 m) (1605 kr)
- 5:36 öppnar Alis butik – sälja (1605 kr)
- 5:38 säljer hos Ali: +105 kr (1710 kr)
- 5:40 tjänar pengar till väntar på flaskhalsen för matarband: 1710/1750 kr → printar blomkruka (105 kr) (1710 kr)
- 5:45 gå till skrivaren (24 m) (1710 kr)
- 5:47 printar Blomkruka (1710 kr)
- 5:51 tar ut 1 st ur skrivaren (1710 kr)
- 5:56 gå till Ali (24 m) (1710 kr)
- 5:56 öppnar Alis butik – sälja (1710 kr)
- 5:58 säljer hos Ali: +105 kr (1815 kr)
- 6:00 tjänar pengar till väntar på flaskhalsen för matarband: 1815/1855 kr → printar blomkruka (105 kr) (1815 kr)
- 6:05 gå till skrivaren (24 m) (1815 kr)
- 6:07 printar Blomkruka (1815 kr)
- 6:11 gå till kvarnen (1 m) (1815 kr)
- 6:12 gå till skrivaren (4 m) (1815 kr)
- 6:13 tar ut 1 st ur skrivaren (1815 kr)
- 6:18 gå till Ali (26 m) (1815 kr)
- 6:18 öppnar Alis butik – sälja (1815 kr)
- 6:20 säljer hos Ali: +105 kr (1920 kr)
- 6:22 tjänar pengar till väntar på flaskhalsen för matarband: 1920/1960 kr → printar blomkruka (105 kr) (1920 kr)
- 6:27 gå till skrivaren (24 m) (1920 kr)
- 6:29 printar Blomkruka (1920 kr)
- 6:33 tar ut 1 st ur skrivaren (1920 kr)
- 6:38 gå till Ali (24 m) (1920 kr)
- 6:38 öppnar Alis butik – sälja (1920 kr)
- 6:40 säljer hos Ali: +105 kr (2025 kr)
- 6:42 tjänar pengar till väntar på flaskhalsen för matarband: 2025/2065 kr → printar blomkruka (105 kr) (2025 kr)
- 6:47 gå till skrivaren (24 m) (2025 kr)
- 6:49 printar Blomkruka (2025 kr)
- 6:53 tar ut 1 st ur skrivaren (2025 kr)
- 6:58 gå till Ali (24 m) (2025 kr)
- 6:58 öppnar Alis butik – sälja (2025 kr)
- 7:00 säljer hos Ali: +105 kr (2130 kr)
- 7:02 tjänar pengar till väntar på flaskhalsen för matarband: 2130/2170 kr → printar blomkruka (105 kr) (2130 kr)
- 7:07 gå till skrivaren (24 m) (2130 kr)
- 7:09 printar Blomkruka (2130 kr)
- 7:13 tar ut 1 st ur skrivaren (2130 kr)
- 7:18 gå till Ali (24 m) (2130 kr)
- 7:18 öppnar Alis butik – sälja (2130 kr)
- 7:20 säljer hos Ali: +105 kr (2235 kr)
- 7:22 öppnar Alis butik – köpa sophållare (2235 kr)
- 7:24 köper matarband för 120 kr (2115 kr)
- 7:38 plockar 6 skräp på tippen (bär max 16) (2115 kr)
- 7:41 gå till kvarnen (14 m) (2115 kr)
- 7:45 gå till skrivaren (5 m) (2115 kr)
- 7:47 printar Sophållare (3 delar) (2115 kr)
- 8:06 tar ut 1 st ur skrivaren (2115 kr)
- 8:07 gå till kvarnen (3 m) (2115 kr)
- 8:17 gå till Ali (29 m) (2115 kr)
- 8:17 öppnar Alis butik – köpa receptet pall (2115 kr)
- 8:19 köper pall för 80 kr (2035 kr)
- 8:25 gå till skrivaren (24 m) (2035 kr)
- 8:27 printar Pall (2035 kr)
- 8:33 tar ut 1 st ur skrivaren (2035 kr)
- 8:37 gå till platsen för pall (20 m) (2035 kr)
- 8:38 ställer ut pall (2035 kr)
- 8:40 tjänar pengar till väntar på flaskhalsen för vindsnurra2: 2035/2075 kr → printar pall (180 kr) (2035 kr)
- 8:50 plockar 3 skräp på tippen (bär max 16) (2035 kr)
- 8:52 gå till kvarnen (9 m) (2035 kr)
- 8:53 gå till cykeln (5 m) (2035 kr)
- 9:24 gå till skrivaren (2 m) (2035 kr)
- 9:25 printar Pall (2035 kr)
- 9:40 tar ut 1 st ur skrivaren (2035 kr)
- 9:46 gå till Ali (26 m) (2035 kr)
- 9:46 öppnar Alis butik – sälja (2035 kr)
- 9:47 säljer hos Ali: +180 kr (2215 kr)
- 9:48 öppnar Alis butik – köpa vindsnurra till skjultaket (2215 kr)
- 9:51 köper vindsnurra för 133 kr (2082 kr)
- 10:00 kort: "FORTSÄTTeller tryck Esc" (2082 kr)
- 10:05 gå till skrivaren (24 m) (2082 kr)
- 10:06 printar Vindsnurra till skjultaket (2082 kr)
- 10:11 tar ut 1 st ur skrivaren (2082 kr)
- 10:16 gå till sätt vindsnurran på taket (18 m) (2082 kr)
- 10:31 popup: "Svara E" (2082 kr)
- 10:40 popup: "Nästa E" (2082 kr)
- 10:47 popup: "Nästa E" (2082 kr)
- 10:54 popup: "Nästa E" (2082 kr)
- 10:59 popup: "Nästa E" (2082 kr)
- 11:05 popup: "Lägg på E" (2082 kr)
- 11:09 gå till Ali (20 m) (2082 kr)
- 11:09 öppnar Alis butik – köpa isolerskiva (vägg) (2082 kr)
- 11:12 köper vaggar för 130 kr (1952 kr)
- 11:18 gå till skrivaren (24 m) (1952 kr)
- 11:20 printar Isolerskiva (vägg) (1952 kr)
- 11:25 tar ut 1 st ur skrivaren (1952 kr)
- 11:28 gå till skjulet (bak) (17 m) (1952 kr)
- 11:36 gå till skrivaren (17 m) (1952 kr)
- 11:37 printar Isolerskiva (vägg) (1952 kr)
- 11:42 tar ut 1 st ur skrivaren (1952 kr)
- 11:46 gå till skjulet (vanster) (17 m) (1952 kr)
- 11:55 gå till sängen (1 m) (1952 kr)

</details>

## Dag 5

| Tid | Källa | Vem | Text |
|---|---|---|---|
| 11:57 | vara | ali | pall |
| 11:57 | händelse | malKlart | id=sov4 del=Dag 4 – Kärran och mer vind nasta=rolf3-brev |
| 11:57 | MÅL |  | Vänta på sopbilen. Den lämnar något. |

<details><summary>Botens handlingar dag 5</summary>

- 0:00 — dag 5 börjar — (1952 kr)

</details>
