# Simulering kapitel 1 – körning 1

*Gjord 2026-11-21 22:35 med `verktyg/sim-kapitel1.mjs` + `verktyg/sim-bot.js` (punkt AX). Boten går 4,5 m/s, läser 15 tecken/s, trampar, vevar, plockar, printar, köper och säljer via spelets egna funktioner. Tiderna är speltid.*

## Sammanfattning

| Dag | Minuter | Väntan | Prints (totalt) | Kr vid sömn | Bär | Trivsel |
|---|---|---|---|---|---|---|
| 1 | 10.9 | 2 % | 25 | 260 | 6 | 19 |
| 2 | 8.2 | 2 % | 37 | 1010 | 10 | 43 |
| 3 | 10.8 | 4 % | 46 | 788 | 16 | 78 |
| 4 | 11.2 | 2 % | 64 | 2200 | 16 | 96 |
| 5 | 0.0 | 0 % | 64 | 2200 | 16 | 96 |

## Flaskhalskartan (EE)

| Dag | bara | mala | trampa | strom | skrivare | inkomst | Upplåst |
|---|---|---|---|---|---|---|---|
| 1 | 5 | 10 | 22 | 14 | 104 | 23 | grip (bara, 7:32), kruka (inkomst, 8:47) |
| 2 | 1 | 7 | 8 | 31 | 190 | 0 | kvarnmotor (mala, 2:38), rullstall (skrivare, 4:20), vindsnurra (trampa, 5:54), trim_skrivare (skrivare, 6:52) |
| 3 | 1 | 3 | 14 | 43 | 266 | 0 | cykelbatteri (strom, 4:07), ryggkorg (bara, 5:16), skrivare2 (skrivare, 6:53) |
| 4 | 1 | 7 | 0 | 15 | 244 | 0 | trim_skrivare2 (skrivare, 4:23), matarband (bara, 6:58, reserv), vindsnurra2 (strom, 8:39) |
| 5 | 0 | 0 | 0 | 0 | 0 | 0 |  |

TIDIG: 0 · FAST: 0 · upplåst av reserven (målet väntade 3 min): 1

**SKRATT:** 45 roliga ögonblick på 41 min (11.0 per 10 min, mål minst 5)

**Köp:**

- dag 1 2:38 – gammalkvarn (30 kr)
- dag 1 8:29 – grip (50 kr)
- dag 1 8:55 – kruka (40 kr)
- dag 1 9:43 – sang (60 kr)
- dag 2 3:07 – kvarnmotor (50 kr)
- dag 2 6:35 – vindsnurra (133 kr)
- dag 2 7:08 – dorr (120 kr)
- dag 3 5:08 – cykelbatteri (30 kr)
- dag 3 5:37 – ryggkorg (120 kr)
- dag 3 6:09 – bord (120 kr)
- dag 3 7:07 – skrivare2 (500 kr)
- dag 3 8:30 – tak (250 kr)
- dag 4 7:15 – matarband (120 kr)
- dag 4 8:08 – pall (80 kr)
- dag 4 8:57 – vindsnurra (133 kr)
- dag 4 10:11 – vaggar (130 kr)

## Storykedjan (kvittens → varför → nytt mål)

| Dag | Tid | Id | Kvittens | Varför | Nytt mål | Tid till målet |
|---|---|---|---|---|---|---|
| 1 | 0:29 | lasta | Tung. Den har storebror aldrig burit så långt. |  | Skrivaren ställer jag mot skräpberget. Min första verkstad. | 0.7 s |
| 1 | 1:29 | valjModell | Den piper. Den GÖR något. |  | En nyckelring till, så länge storebrors rulle räcker. | 3.4 s |
| 1 | 1:34 | trampa | Klar! Ta ut den innan den ändrar sig. |  | En nyckelring till, så länge storebrors rulle räcker. | 0.5 s |
| 1 | 3:06 | flaska | Det blir tråd! Riktig plasttråd. |  | Min egen tråd. Nu printar jag en nyckelring av den. | 0.8 s |
| 1 | 9:15 | krukaD1 | En kruka. Mamma skulle bli så stolt. Hon får inte veta. |  | Ali gillar krukor. Han sa det själv. | 0.9 s |
| 1 | 10:40 | printSang | En säng. Jag printade en SÄNG. |  | Sängen ska in i skjulet. Sen sover jag. | 0.3 s |
| 2 | 6:58 | vindsnurra | Den snurrar! Långsamt. Men den snurrar. |  | Det drar från dörrhålet. En dörr kan jag printa. | 3.0 s |
| 4 | 7:55 | sophallare | Nu kan jag tömma hela kärran på en gång. |  | Jag behöver något att sitta på. En pall. Lagom ambitiöst. | 2.9 s |

## Hur länge nya mål väntade (från att förra målet blev klart till att det nya syntes i målrutan)

Snitt 2.2 s · max 13.3 s · över 4 s: 3 · över 8 s: 3 av 49

## Flaggor (27)

- **UPPREPNING** dag 4 8:07: Bra val. Folk köper sånt. Jag vet inte varför. (CT)
- **LUGN** dag 2 0:08: 0.0 s efter BÖRJA DAGEN: [lapp] "Första natten i en riktig säng. Jag printade den själv."
- **KROCK** dag 1 3:10: 0.7 s mellan [notis] "Kvarnen funkar. Soptippen är en gruva." och [notis] "💭 Min egen tråd. Nu printar jag en nyckelring av den."
- **KROCK** dag 3 10:36: 1.4 s mellan [notis] "💭 Den här måste stå i linjen vid kvarnen, annars når inte s" och [lapp] "Tre dagar. Tänk om tre veckor."
- **KROCK** dag 4 9:15: 0.2 s mellan [lapp] "Slut på trampandet. Nästan." och [notis] "💭 Det drar genom väggarna. Isolering, och sen blir det varm"
- **RÖST AVBRUTEN** dag 1 4:27: ali: 4.3 s kvar ← du: Ali har något åt mig. Jag går över vägen
- **RÖST AVBRUTEN** dag 1 8:53: ali: 3.9 s kvar ← du: Ali vill ha krukor. Jag printar en blomk
- **SEN** dag 1 5:48: 12.8 s efter händelsen: du: "Femtio kronor. Nu har jag råd med gripen."
- **SEN** dag 1 10:09: 76.4 s efter händelsen: ali: "Ali här. Jag såg Skräpgrip på avstånd. Ett streck blev lite snett. Mit"
- **SEN** dag 2 0:29: 18.2 s efter händelsen: notis:Första natten i en riktig säng. Jag prin: "Första natten i en riktig säng. Jag printade den själv."
- **SEN** dag 3 2:49: 18.0 s efter händelsen: du: "Den blev… spagetti. Ali kallar det modern konst."
- **SEN** dag 3 6:24: 23.2 s efter händelsen: ali: "Ali här. Du printade Ryggkorg från min ritning. Och det FUNKAR? Jag ha"
- **SEN** dag 4 10:05: 120.9 s efter händelsen: ali: "Ali här. Jag såg Sophållare på avstånd. Ett streck blev lite snett. Mi"
- **PAUS** dag 1 0:30: 0.0 s paus före "Tung. Den har storebror aldrig burit så långt."
- **PAUS** dag 1 1:33: 0.0 s paus före "Den piper. Den GÖR något."
- **PAUS** dag 1 1:35: 0.0 s paus före "Klar! Ta ut den innan den ändrar sig."
- **PAUS** dag 1 3:07: 0.0 s paus före "Det blir tråd! Riktig plasttråd."
- **PAUS** dag 1 3:09: 0.0 s paus före "Kvarnen funkar. Soptippen är en gruva."
- **PAUS** dag 1 9:16: 0.0 s paus före "En kruka. Mamma skulle bli så stolt. Hon får inte "
- **PAUS** dag 2 1:09: 0.0 s paus före "Sopbilen tippade en ny last. Allt det skräpet – oc"
- **PAUS** dag 2 3:57: 0.0 s paus före "Gården är STÄDAD, av mig, frivilligt. Mamma skulle"
- **PAUS** dag 2 6:50: 0.0 s paus före "🌬️ Vindsnurran ska upp på skjulets tak."
- **KLICK SOM INTE GÅR** dag 2 4:01: "Klicka för att ta på dig den" syns men ett klick gör inte det just nu
- **SMS-FORM ANSIKTE MOT ANSIKTE** dag 3 5:08: Ali här. Batteriet ur min gamla Volvo. Bilen dog 2
- **TORRT** dag 1 4:46: 241 s utan roligt ögonblick
- **TEMPO** dag 2 8:11: dag 2 tog 8.2 min (mål 10–15)
- **TEMPO** dag 5 0:00: dag 5 tog 0.0 min (mål 10–15)

Sidfel: inga

## Dag 1

| Tid | Källa | Vem | Text |
|---|---|---|---|
| 0:00 | MÅL |  | Lasta av skrivaren |
| 0:00 | MÅL |  | Lasta av skrivaren |
| 0:02 | sak | bud | (tips) |
| 0:03 | väntar | du | Se så mycket skräp här är. Det är ju en guldgruva! |
| 0:04 | klar | bud | (tips) |
| 0:05 | sak | du | Se så mycket skräp här är. Det är ju en guldgruva! |
| 0:05 | röst | du | Se så mycket skräp här är. Det är ju en guldgruva! · STORY |
| 0:06 | väntar | info:info | ⏎ Enter – hoppa över |
| 0:11 | sak-del | du | Först borde jag spika upp en skylt, så att alla ser att jag bor HÄR. |
| 0:11 | röst | du | Först borde jag spika upp en skylt, så att alla ser att jag bor HÄR. · STORY |
| 0:15 | väntar | du | Spikade ihop en skylt av bräder från skräpberget: Soptippsvägen 1. Inte mycket för världen, men det är MITT. |
| 0:15 | bekräftelse | du | Group |
| 0:15 | väntar | du | Storebrors skrivare står kvar på cykeln vid vägen. Den ska av. |
| 0:16 | klar | du | Se så mycket skräp här är. Det är ju en guldgruva! |
| 0:20 | sak | du | Spikade ihop en skylt av bräder från skräpberget: Soptippsvägen 1. Inte mycket för världen, men det är MITT. |
| 0:20 | kvitto-visas | du | Spikade ihop en skylt av bräder från skräpberget: Soptippsvägen 1. Inte mycket för världen, men det är MITT. |
| 0:20 | lapp | 📔 Dagbok | Spikade ihop en skylt av bräder från skräpberget: Soptippsvägen 1. Inte mycket för världen, men det är MITT. |
| 0:20 | dagbokrad | du | Spikade ihop en skylt av bräder från skräpberget: Soptippsvägen 1. Inte mycket för världen, men det är MITT. |
| 0:20 | notis | dagbok | Spikade ihop en skylt av bräder från skräpberget: Soptippsvägen 1. Inte mycket för världen, men det är MITT. |
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
| 0:29 | bekräftelse | du | plats |
| 0:29 | kvittens | du | Tung. Den har storebror aldrig burit så långt. |
| 0:29 | väntar | du | Tung. Den har storebror aldrig burit så långt. |
| 0:29 | väntar | du | Skrivaren ställer jag mot skräpberget. Min första verkstad. |
| 0:29 | MÅL |  | Ställ upp skrivaren |
| 0:30 | klar | du | Storebrors skrivare står kvar på cykeln vid vägen. Den ska av. |
| 0:30 | sak | du | Tung. Den har storebror aldrig burit så långt. |
| 0:30 | röst | du | Tung. Den har storebror aldrig burit så långt. · STORY |
| 0:30 | målruta |  | Ställ upp skrivaren |
| 0:32 | hjälp | kontroll | E: Ryggsäcken och kistan |
| 0:34 | klar | du | Tung. Den har storebror aldrig burit så långt. |
| 0:34 | sak | du | Skrivaren ställer jag mot skräpberget. Min första verkstad. |
| 0:34 | pil |  | Ställ upp skrivaren |
| 0:34 | notis | tanke | 💭 Skrivaren ställer jag mot skräpberget. Min första verkstad. |
| 0:34 | röst | du | Skrivaren ställer jag mot skräpberget. Min första verkstad. · MÅL |
| 0:35 | nick |  | nick:1 |
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
| 0:44 | bekräftelse | du | plats |
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
| 0:49 | nick |  | nick:2 |
| 0:53 | klar | du | Skrivaren behöver ström. Hur fixar jag det här ute? |
| 1:10 | paket |  | tanke |
| 1:10 | tanke | du | Cykeln… och storebrors generator? |
| 1:10 | väntar | du | Cykeln… och storebrors generator? |
| 1:10 | sak | du | Cykeln… och storebrors generator? |
| 1:10 | kvitto-visas | du | Cykeln… och storebrors generator? |
| 1:10 | notis | tanke | 💭 Cykeln… och storebrors generator? |
| 1:10 | röst | du | Cykeln… och storebrors generator? · STORY |
| 1:10 | händelse | malKlart | id=strom del=Dag 1 – Kom igång nasta=bygg |
| 1:10 | bekräftelse | du | plats |
| 1:10 | väntar | du | Nu generatorn på cykeln. Den gör el när hjulet snurrar. |
| 1:10 | MÅL |  | Ställ cykel och generator |
| 1:12 | målruta |  | Ställ cykel och generator |
| 1:12 | klar | du | Cykeln… och storebrors generator? |
| 1:14 | kvittens-bock |  | ✓ Skrivaren behöver ström |
| 1:14 | händelse | placerat | sak=generator |
| 1:14 | duns | du | ställs ner |
| 1:15 | sak | du | Nu generatorn på cykeln. Den gör el när hjulet snurrar. |
| 1:15 | pil |  | Ställ cykel och generator |
| 1:15 | notis | tanke | 💭 Nu generatorn på cykeln. Den gör el när hjulet snurrar. |
| 1:15 | röst | du | Nu generatorn på cykeln. Den gör el när hjulet snurrar. · MÅL |
| 1:16 | nick |  | nick:3 |
| 1:17 | ljud | utrustning | Cykeln i famnen |
| 1:17 | händelse | lyft | sak=cykel |
| 1:20 | klar | du | Nu generatorn på cykeln. Den gör el när hjulet snurrar. |
| 1:25 | händelse | placerat | sak=cykel |
| 1:25 | duns | du | ställs ner |
| 1:27 | händelse | ombyggd | sak=cykel |
| 1:27 | händelse | malKlart | id=bygg del=Dag 1 – Kom igång nasta=valjModell |
| 1:27 | bekräftelse | du | plats |
| 1:27 | väntar | du | Strömmen finns. Nu ska skrivaren veta vad den ska göra, sen trampar jag. |
| 1:27 | målruta |  | Välj vad skrivaren ska printa |
| 1:27 | MÅL |  | Välj vad skrivaren ska printa |
| 1:27 | sak | du | Strömmen finns. Nu ska skrivaren veta vad den ska göra, sen trampar jag. |
| 1:27 | pil |  | Välj vad skrivaren ska printa |
| 1:27 | notis | tanke | 💭 Strömmen finns. Nu ska skrivaren veta vad den ska göra, sen trampar jag. |
| 1:27 | röst | du | Strömmen finns. Nu ska skrivaren veta vad den ska göra, sen trampar jag. · MÅL |
| 1:29 | händelse | printStart | sak=nyckelring |
| 1:29 | händelse | malKlart | id=valjModell del=Dag 1 – Kom igång nasta=trampa |
| 1:29 | bekräftelse | du | plats |
| 1:29 | kvittens | du | Den piper. Den GÖR något. |
| 1:29 | väntar | du | Den piper. Den GÖR något. |
| 1:29 | väntar | du | Nu behöver den ström. Trampa. |
| 1:29 | MÅL |  | Trampa cykeln |
| 1:32 | målruta |  | Trampa cykeln |
| 1:33 | klar | du | Strömmen finns. Nu ska skrivaren veta vad den ska göra, sen trampar jag. |
| 1:33 | sak | du | Den piper. Den GÖR något. |
| 1:33 | röst | du | Den piper. Den GÖR något. · STORY |
| 1:34 | händelse | printKlar | sak=nyckelring n=1 |
| 1:34 | händelse | malKlart | id=trampa del=Dag 1 – Kom igång nasta=rullSlut |
| 1:34 | bekräftelse | du | plats |
| 1:34 | kvittens | du | Klar! Ta ut den innan den ändrar sig. |
| 1:34 | väntar | du | Klar! Ta ut den innan den ändrar sig. |
| 1:34 | väntar | du | En nyckelring till, så länge storebrors rulle räcker. |
| 1:35 | MÅL |  | En nyckelring till |
| 1:35 | klar | du | Den piper. Den GÖR något. |
| 1:35 | sak | du | Klar! Ta ut den innan den ändrar sig. |
| 1:35 | röst | du | Klar! Ta ut den innan den ändrar sig. · STORY |
| 1:35 | målruta |  | En nyckelring till |
| 1:36 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 1:36 | paket |  | sms |
| 1:36 | väntar | bror | VA FAN?! Fick du igång den?? Jag försökte i typ ett år. Den bara pep. 😳 |
| 1:36 | skratt | bror | VA FAN?! Fick du igång den?? Jag försökt |
| 1:36 | paket |  | sms → ge |
| 1:36 | väntar | bror | Sälj den till Ali, han med affären mitt emot. Han köper gamla grejer. Han köpte min gamla mopedhjälm för 20 spänn. |
| 1:36 | väntar |  | (läget ändras) |
| 1:36 | väntar | foto | Första nyckelringen |
| 1:36 | paket |  | tanke |
| 1:36 | tanke | du | Jag gjorde den här. Av skräp. Det här kan funka. |
| 1:36 | väntar | du | Jag gjorde den här. Av skräp. Det här kan funka. |
| 1:38 | klar | du | Klar! Ta ut den innan den ändrar sig. |
| 1:38 | struken | du | Nu behöver den ström. Trampa. |
| 1:38 | sak | du | En nyckelring till, så länge storebrors rulle räcker. |
| 1:38 | pil |  | En nyckelring till |
| 1:38 | notis | tanke | 💭 En nyckelring till, så länge storebrors rulle räcker. |
| 1:38 | röst | du | En nyckelring till, så länge storebrors rulle räcker. · MÅL |
| 1:43 | klar | du | En nyckelring till, så länge storebrors rulle räcker. |
| 1:45 | sak | foto | Första nyckelringen |
| 1:45 | foto | du | Första nyckelringen |
| 1:48 | klar | foto | Första nyckelringen |
| 1:50 | sak |  | (läget ändras) |
| 1:50 | klar |  | (läget ändras) |
| 1:50 | händelse | printStart | sak=nyckelring |
| 1:54 | sak | du | Jag gjorde den här. Av skräp. Det här kan funka. |
| 1:54 | notis | tanke | 💭 Jag gjorde den här. Av skräp. Det här kan funka. |
| 1:54 | röst | du | Jag gjorde den här. Av skräp. Det här kan funka. · STORY |
| 1:58 | klar | du | Jag gjorde den här. Av skräp. Det här kan funka. |
| 2:01 | toast | guld | Nyckelring är klar – ta ut den |
| 2:01 | väntar | notis:Storebrors skrivare: Nyckelring är klar  | Storebrors skrivare: Nyckelring är klar – ta ut den |
| 2:01 | händelse | printKlar | sak=nyckelring n=2 |
| 2:01 | paket |  | tanke |
| 2:01 | tanke | du | Slut på storebrors rulle. Och här ligger ju plast överallt. Om jag bara kunde göra tråd av skräpet… Affären mitt emot kanske har något. |
| 2:01 | väntar | du | Slut på storebrors rulle. Och här ligger ju plast överallt. Om jag bara kunde göra tråd av skräpet… Affären mitt emot kanske har något. |
| 2:01 | händelse | malKlart | id=rullSlut del=Dag 1 – Kom igång nasta=saljTva |
| 2:01 | bekräftelse | du | plats |
| 2:01 | MÅL |  | Sälj nyckelringarna |
| 2:01 | sak | du | Slut på storebrors rulle. Och här ligger ju plast överallt. Om jag bara kunde göra tråd av skräpet… Affären mitt emot kanske har något. |
| 2:01 | kvitto-visas | du | Slut på storebrors rulle. Och här ligger ju plast överallt. Om jag bara kunde göra tråd av skräpet… Affären mitt emot kanske har något. |
| 2:01 | notis | tanke | 💭 Slut på storebrors rulle. Och här ligger ju plast överallt. Om jag bara kunde göra tråd av skräpet… Affären mitt emot kanske har något. |
| 2:01 | röst | du | Slut på storebrors rulle. Och här ligger ju plast överallt. Om jag bara kunde göra tråd av skräpet… Affären mitt emot kanske har något. · STORY |
| 2:04 | målruta |  | Sälj nyckelringarna |
| 2:05 | kvittens-bock |  | ✓ En nyckelring till |
| 2:13 | klar | du | Slut på storebrors rulle. Och här ligger ju plast överallt. Om jag bara kunde göra tråd av skräpet… Affären mitt emot kanske har något. |
| 2:13 | sak | du | (nytt mål i rutan) |
| 2:13 | pil |  | Sälj nyckelringarna |
| 2:13 | klar | du | (nytt mål i rutan) |
| 2:14 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 2:20 | struken | ali | Pappas gamla köttkvarn. Den har malt allt utom kött. Trettio kronor, så är den din. |
| 2:20 | händelse | dialog | id=aliForsta |
| 2:20 | röst | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. · STORY |
| 2:20 | butiksbubbla | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 2:22 | händelse | salt | sak=nyckelring n=2 |
| 2:22 | aliSalt | ali | 30 |
| 2:22 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 2:22 | händelse | dialog | id=aliKvarnErbjud |
| 2:22 | butiksbubbla | ali | Pappas gamla köttkvarn. Den har malt allt utom kött. Trettio kronor, så är den din. |
| 2:23 | väntar | ali | Pappas gamla köttkvarn. Den har malt allt utom kött. Trettio kronor, så är den din. |
| 2:23 | händelse | malKlart | id=saljTva del=Dag 1 – Kom igång nasta=aliKvarn |
| 2:23 | bekräftelse | du | plats |
| 2:23 | väntar | du | Ali har en gammal kvarn. Den gör tråd av skräp. |
| 2:23 | MÅL |  | Köp kvarnen |
| 2:24 | sak | du | Ali har en gammal kvarn. Den gör tråd av skräp. |
| 2:24 | målruta |  | Köp kvarnen |
| 2:24 | pil |  | Köp kvarnen |
| 2:24 | notis | tanke | 💭 Ali har en gammal kvarn. Den gör tråd av skräp. |
| 2:24 | röst | du | Ali har en gammal kvarn. Den gör tråd av skräp. · MÅL |
| 2:27 | kvittens-bock |  | ✓ Sälj nyckelringarna |
| 2:28 | klar | du | Ali har en gammal kvarn. Den gör tråd av skräp. |
| 2:30 | struken | bror | Sälj den till Ali, han med affären mitt emot. Han köper gamla grejer. Han köpte min gamla mopedhjälm för 20 spänn. |
| 2:30 | struken | notis:Storebrors skrivare: Nyckelring är klar  | Storebrors skrivare: Nyckelring är klar – ta ut den |
| 2:30 | sak | ali | Pappas gamla köttkvarn. Den har malt allt utom kött. Trettio kronor, så är den din. |
| 2:30 | röst | ali | Pappas gamla köttkvarn. Den har malt allt utom kött. Trettio kronor, så är den din. · STORY |
| 2:36 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 2:36 | struken | ali | Pappas gamla köttkvarn. Den har malt allt utom kött. Trettio kronor, så är den din. |
| 2:37 | klar | ali | Pappas gamla köttkvarn. Den har malt allt utom kött. Trettio kronor, så är den din. |
| 2:37 | händelse | kopt | sak=gammalkvarn |
| 2:37 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 2:37 | händelse | dialog | id=aliKvarnKopt |
| 2:37 | röst | ali | Den är din. Pappa hade blivit glad. Han trodde aldrig att nån skulle vilja ha den. · STORY |
| 2:37 | butiksbubbla | ali | Den är din. Pappa hade blivit glad. Han trodde aldrig att nån skulle vilja ha den. |
| 2:39 | händelse | malKlart | id=aliKvarn del=Dag 1 – Kom igång nasta=kvarn |
| 2:39 | bekräftelse | du | plats |
| 2:39 | väntar | du | Kvarnen ska stå vid skrivaren, närmast skräpberget. |
| 2:39 | målruta |  | Ställ kvarnen |
| 2:39 | MÅL |  | Ställ kvarnen |
| 2:41 | sak | du | Kvarnen ska stå vid skrivaren, närmast skräpberget. |
| 2:41 | pil |  | Ställ kvarnen |
| 2:41 | notis | tanke | 💭 Kvarnen ska stå vid skrivaren, närmast skräpberget. |
| 2:41 | röst | du | Kvarnen ska stå vid skrivaren, närmast skräpberget. · MÅL |
| 2:41 | nick |  | nick:9 |
| 2:43 | kvittens-bock |  | ✓ Köp kvarnen |
| 2:45 | klar | du | Kvarnen ska stå vid skrivaren, närmast skräpberget. |
| 2:47 | struken | bror | VA FAN?! Fick du igång den?? Jag försökte i typ ett år. Den bara pep. 😳 |
| 2:47 | skratt | bror | VA FAN?! Fick du igång den?? Jag försökt |
| 2:53 | händelse | placerat | sak=kvarnen |
| 2:53 | duns | du | ställs ner |
| 2:53 | händelse | malKlart | id=kvarn del=Dag 1 – Kom igång nasta=flaska |
| 2:53 | bekräftelse | du | plats |
| 2:53 | väntar | du | Skräp i kvarnen, sen vevar jag. Då blir det tråd. |
| 2:53 | målruta |  | Gör egen tråd |
| 2:53 | MÅL |  | Gör egen tråd |
| 2:53 | sak | du | Skräp i kvarnen, sen vevar jag. Då blir det tråd. |
| 2:53 | pil |  | Gör egen tråd |
| 2:53 | notis | tanke | 💭 Skräp i kvarnen, sen vevar jag. Då blir det tråd. |
| 2:53 | röst | du | Skräp i kvarnen, sen vevar jag. Då blir det tråd. · MÅL |
| 2:54 | nick |  | nick:10 |
| 2:57 | kvittens-bock |  | ✓ Ställ kvarnen |
| 2:57 | hjälp | kontroll | Klicka och håll: Veva kvarnen |
| 2:58 | klar | du | Skräp i kvarnen, sen vevar jag. Då blir det tråd. |
| 3:05 | väntar | info:bra | 3 st i tratten – veva nu! |
| 3:05 | sak | info:bra | 3 st i tratten – veva nu! |
| 3:05 | kvitto-visas | info:bra | 3 st i tratten – veva nu! |
| 3:05 | toast | bra | 3 st i tratten – veva nu! |
| 3:06 | händelse | malKlart | id=flaska del=Dag 1 – Kom igång nasta=egenPrint |
| 3:06 | bekräftelse | du | plats |
| 3:06 | kvittens | du | Det blir tråd! Riktig plasttråd. |
| 3:06 | väntar | du | Det blir tråd! Riktig plasttråd. |
| 3:06 | väntar | du | Kvarnen funkar. Soptippen är en gruva. |
| 3:06 | väntar | du | Min egen tråd. Nu printar jag en nyckelring av den. |
| 3:06 | MÅL |  | Printa med egen tråd |
| 3:07 | klar | info:bra | 3 st i tratten – veva nu! |
| 3:07 | sak | du | Det blir tråd! Riktig plasttråd. |
| 3:07 | röst | du | Det blir tråd! Riktig plasttråd. · STORY |
| 3:09 | målruta |  | Printa med egen tråd |
| 3:09 | klar | du | Det blir tråd! Riktig plasttråd. |
| 3:09 | sak | du | Kvarnen funkar. Soptippen är en gruva. |
| 3:09 | kvitto-visas | du | Kvarnen funkar. Soptippen är en gruva. |
| 3:09 | lapp | 📔 Dagbok | Kvarnen funkar. Soptippen är en gruva. |
| 3:09 | dagbokrad | du | Kvarnen funkar. Soptippen är en gruva. |
| 3:09 | notis | dagbok | Kvarnen funkar. Soptippen är en gruva. |
| 3:10 | klar | du | Kvarnen funkar. Soptippen är en gruva. |
| 3:10 | sak | du | Min egen tråd. Nu printar jag en nyckelring av den. |
| 3:10 | pil |  | Printa med egen tråd |
| 3:10 | notis | tanke | 💭 Min egen tråd. Nu printar jag en nyckelring av den. |
| 3:10 | röst | du | Min egen tråd. Nu printar jag en nyckelring av den. · MÅL |
| 3:10 | nick |  | nick:11 |
| 3:14 | klar | du | Min egen tråd. Nu printar jag en nyckelring av den. |
| 3:19 | händelse | printStart | sak=nyckelring |
| 3:19 | toast | bra | 🔗 Slangen kopplad |
| 3:24 | toast | guld | ✅ |
| 3:24 | händelse | printKlar | sak=nyckelring n=3 |
| 3:24 | paket |  | tanke |
| 3:24 | tanke | du | En nyckelring av en gammal schampoflaska. Den luktar fortfarande päron. |
| 3:24 | väntar | du | En nyckelring av en gammal schampoflaska. Den luktar fortfarande päron. |
| 3:24 | skratt | du | egen tråd |
| 3:24 | händelse | malKlart | id=egenPrint del=Dag 1 – Kom igång nasta=salj |
| 3:24 | bekräftelse | du | plats |
| 3:24 | struken | du | En nyckelring av en gammal schampoflaska. Den luktar fortfarande päron. |
| 3:24 | väntar | du | Ali köper nog den här också. |
| 3:24 | MÅL |  | Sälj hos Ali |
| 3:24 | målruta |  | Sälj hos Ali |
| 3:24 | sak | du | Ali köper nog den här också. |
| 3:24 | pil |  | Sälj hos Ali |
| 3:24 | notis | tanke | 💭 Ali köper nog den här också. |
| 3:24 | röst | du | Ali köper nog den här också. · MÅL |
| 3:24 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 3:25 | nick |  | nick:12 |
| 3:27 | klar | du | Ali köper nog den här också. |
| 3:28 | kvittens-bock |  | ✓ Printa med egen tråd |
| 3:31 | händelse | printStart | sak=nyckelring |
| 3:32 | toast | guld | ✅ |
| 3:32 | händelse | printKlar | sak=nyckelring n=4 |
| 3:32 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 3:34 | händelse | printStart | sak=nyckelring |
| 3:35 | toast | guld | ✅ |
| 3:35 | händelse | printKlar | sak=nyckelring n=5 |
| 3:36 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 3:39 | sak | mamma | Hur kunde du bara gå? Är du ok? Svara när jag ringer! |
| 3:39 | sms | mamma | Hur kunde du bara gå? Är du ok? Svara när jag ringer! |
| 3:39 | sms-bubbla | mamma | Hur kunde du bara gå? Är du ok? Svara när jag ringer! |
| 3:39 | röst | mamma | Hur kunde du bara gå? Är du ok? Svara när jag ringer! · STORY |
| 3:43 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 3:43 | hjälp | kontroll | Tab: Dina sms och dagboken |
| 3:43 | klar | mamma | Hur kunde du bara gå? Är du ok? Svara när jag ringer! |
| 3:45 | händelse | salt | sak=nyckelring n=3 |
| 3:45 | aliSalt | ali | 45 |
| 3:45 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 3:45 | händelse | dialog | id=aliNyckelIgen |
| 3:45 | röst | ali | Nyckelringar igen? Folk tappar sina nycklar hela tiden. · STORY |
| 3:45 | butiksbubbla | ali | Nyckelringar igen? Folk tappar sina nycklar hela tiden. |
| 3:46 | händelse | malKlart | id=salj del=Dag 1 – Kom igång nasta=powerbank |
| 3:46 | bekräftelse | du | plats |
| 3:46 | paket |  | sms → ge |
| 3:46 | väntar | ali | Ali här. Glömde en sak. Kom tillbaka, jag har nåt åt dig. |
| 3:46 | väntar |  | (läget ändras) |
| 3:46 | MÅL |  | Gå till Ali |
| 3:47 | sak |  | (läget ändras) |
| 3:47 | klar |  | (läget ändras) |
| 3:48 | målruta |  | Gå till Ali |
| 3:48 | sak | du | (nytt mål i rutan) |
| 3:48 | pil |  | Gå till Ali |
| 3:48 | klar | du | (nytt mål i rutan) |
| 3:49 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 3:49 | väntar | kjelle | God morgon, det är Kjelle på Radio Tippen! Det har flyttat in någon i det gamla skjulet. Med en cykel och en skrivare. Spännande, Gunnar. |
| 3:49 | radio | kjelle | God morgon, det är Kjelle på Radio Tippen! Det har flyttat in någon i det gamla skjulet. Med en cykel och en skrivare. Spännande, Gunnar. |
| 3:49 | skratt | du | Radio-Kjelle |
| 3:50 | kvittens-bock |  | ✓ Sälj hos Ali |
| 3:55 | sak | kjelle | God morgon, det är Kjelle på Radio Tippen! Det har flyttat in någon i det gamla skjulet. Med en cykel och en skrivare. Spännande, Gunnar. |
| 3:55 | notis |  | 📻 Radio Tippen: God morgon, det är Kjelle på Radio Tippen! Det har flyttat in någon i det gamla skjulet. Med en cykel och en skrivare. Spännande, Gunnar. |
| 3:55 | röst | kjelle | God morgon, det är Kjelle på Radio Tippen! Det har flyttat in någon i det gamla skjulet. Med en cykel och en skrivare. Spännande, Gunnar. · REAKTION |
| 4:06 | tanke | du | Vem är Gunnar? |
| 4:06 | väntar | du | Vem är Gunnar? |
| 4:06 | klar | kjelle | God morgon, det är Kjelle på Radio Tippen! Det har flyttat in någon i det gamla skjulet. Med en cykel och en skrivare. Spännande, Gunnar. |
| 4:07 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 4:14 | sak | du | Vem är Gunnar? |
| 4:14 | notis | tanke | 💭 Vem är Gunnar? |
| 4:14 | röst | du | Vem är Gunnar? · REAKTION |
| 4:17 | klar | du | Vem är Gunnar? |
| 4:19 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 4:26 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 4:26 | sak | ali | Ali här. Glömde en sak. Kom tillbaka, jag har nåt åt dig. |
| 4:26 | sms | ali | Ali här. Glömde en sak. Kom tillbaka, jag har nåt åt dig. |
| 4:26 | händelse | dialog | id=aliPbKom |
| 4:26 | sms-bubbla | ali | Ali här. Glömde en sak. Kom tillbaka, jag har nåt åt dig. |
| 4:26 | röst | ali | Ali här. Glömde en sak. Kom tillbaka, jag har nåt åt dig. · STORY |
| 4:27 | röst | du | Ali har något åt mig. Jag går över vägen till affären. · STORY |
| 4:27 | röst-avbruten | ali | 4.3 s kvar ← du: Ali har något åt mig. Jag går över vägen |
| 4:31 | klar | ali | Ali här. Glömde en sak. Kom tillbaka, jag har nåt åt dig. |
| 4:33 | paket | ali | ali → ge |
| 4:33 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 4:33 | händelse | dialog | id=aliPowerbank |
| 4:33 | röst | ali | Jag såg dig cykla. Det ser jobbigt ut. Ta den här. Bra kunder får bonus. · STORY |
| 4:33 | butiksbubbla | ali | Jag såg dig cykla. Det ser jobbigt ut. Ta den här. Bra kunder får bonus. |
| 4:45 | paket |  | tanke |
| 4:45 | tanke | du | Powerbanken ska sitta på cykeln. |
| 4:45 | väntar | du | Powerbanken ska sitta på cykeln. |
| 4:46 | skratt | du | powerbanken monterad |
| 4:46 | paket |  | tanke |
| 4:46 | tanke | du | Nu sparas lite ström. En nyckelring, typ. Framtiden är här, och den sitter fast med eltejp. |
| 4:46 | väntar | du | Nu sparas lite ström. En nyckelring, typ. Framtiden är här, och den sitter fast med eltejp. |
| 4:46 | monterat | du | byggsats:powerbank |
| 4:46 | händelse | monterat | sak=powerbank |
| 4:46 | sak | du | Nu sparas lite ström. En nyckelring, typ. Framtiden är här, och den sitter fast med eltejp. |
| 4:46 | kvitto-visas | du | Nu sparas lite ström. En nyckelring, typ. Framtiden är här, och den sitter fast med eltejp. |
| 4:46 | notis | tanke | 💭 Nu sparas lite ström. En nyckelring, typ. Framtiden är här, och den sitter fast med eltejp. |
| 4:46 | röst | du | Nu sparas lite ström. En nyckelring, typ. Framtiden är här, och den sitter fast med eltejp. · REAKTION |
| 4:46 | händelse | malKlart | id=powerbank del=Dag 1 – Kom igång nasta=kopGrip |
| 4:46 | bekräftelse | du | plats |
| 4:46 | paket |  | lapp |
| 4:46 | lapp-kö | 🧺 Ali | Ali här. Nyckelringen sålde direkt. Jag ville bli ingenjör en gång. Nu har jag låtit en AI rita en skräpgrip. Kom och titta. |
| 4:46 | väntar | ali | Ali här. Nyckelringen sålde direkt. Jag ville bli ingenjör en gång. Nu har jag låtit en AI rita en skräpgrip. Kom och titta. |
| 4:46 | MÅL |  | Plocka skräp och mal det |
| 4:48 | struken | du | Powerbanken ska sitta på cykeln. |
| 4:48 | målruta |  | Plocka skräp och mal det |
| 4:50 | kvittens-bock |  | ✓ Gå till Ali |
| 4:53 | klar | du | Nu sparas lite ström. En nyckelring, typ. Framtiden är här, och den sitter fast med eltejp. |
| 4:53 | sak | du | (nytt mål i rutan) |
| 4:53 | pil |  | Plocka skräp och mal det |
| 4:54 | klar | du | (nytt mål i rutan) |
| 4:54 | nick |  | nick:14 |
| 4:58 | händelse | printStart | sak=nyckelring |
| 4:59 | toast | fel | Ingen ström – trampa cykeln |
| 4:59 | väntar | notis:Storebrors skrivare: Ingen ström – tramp | Storebrors skrivare: Ingen ström – trampa cykeln |
| 5:00 | toast | guld | ✅ |
| 5:00 | händelse | printKlar | sak=nyckelring n=6 |
| 5:00 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 5:01 | sak | notis:Storebrors skrivare: Ingen ström – tramp | Storebrors skrivare: Ingen ström – trampa cykeln |
| 5:01 | notis | fel | Storebrors skrivare: Ingen ström – trampa cykeln |
| 5:02 | händelse | printStart | sak=nyckelring |
| 5:03 | toast | guld | ✅ |
| 5:03 | händelse | printKlar | sak=nyckelring n=7 |
| 5:04 | klar | notis:Storebrors skrivare: Ingen ström – tramp | Storebrors skrivare: Ingen ström – trampa cykeln |
| 5:14 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 5:16 | händelse | printStart | sak=nyckelring |
| 5:17 | toast | guld | ✅ |
| 5:17 | händelse | printKlar | sak=nyckelring n=8 |
| 5:17 | sak | ali | Ali här. Nyckelringen sålde direkt. Jag ville bli ingenjör en gång. Nu har jag låtit en AI rita en skräpgrip. Kom och titta. |
| 5:17 | sms | ali | Ali här. Nyckelringen sålde direkt. Jag ville bli ingenjör en gång. Nu har jag låtit en AI rita en skräpgrip. Kom och titta. |
| 5:17 | händelse | dialog | id=aliGripSms |
| 5:17 | sms-bubbla | ali | Ali här. Nyckelringen sålde direkt. Jag ville bli ingenjör en gång. Nu har jag låtit en AI rita en skräpgrip. Kom och titta. |
| 5:17 | röst | ali | Ali här. Nyckelringen sålde direkt. Jag ville bli ingenjör en gång. Nu har jag låtit en AI rita en skräpgrip. Kom och titta. · STORY |
| 5:17 | väntar | du | Med en skräpgrip slipper jag böja mig. Ali har en ritning. |
| 5:18 | händelse | tagitUrPrint | sak=nyckelring n=1 |
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
| 5:27 | klar | ali | Ali här. Nyckelringen sålde direkt. Jag ville bli ingenjör en gång. Nu har jag låtit en AI rita en skräpgrip. Kom och titta. |
| 5:35 | sak | du | Med en skräpgrip slipper jag böja mig. Ali har en ritning. |
| 5:35 | röst | du | Med en skräpgrip slipper jag böja mig. Ali har en ritning. · STORY |
| 5:36 | paket |  | tanke |
| 5:36 | tanke | du | Femtio kronor. Nu har jag råd med gripen. |
| 5:36 | väntar | du | Femtio kronor. Nu har jag råd med gripen. |
| 5:36 | händelse | printStart | sak=nyckelring |
| 5:37 | toast | guld | ✅ |
| 5:37 | händelse | printKlar | sak=nyckelring n=9 |
| 5:38 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 5:40 | händelse | printStart | sak=nyckelring |
| 5:40 | klar | du | Med en skräpgrip slipper jag böja mig. Ali har en ritning. |
| 5:41 | toast | guld | ✅ |
| 5:41 | händelse | printKlar | sak=nyckelring n=10 |
| 5:42 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 5:44 | händelse | printStart | sak=nyckelring |
| 5:47 | toast | guld | ✅ |
| 5:47 | händelse | printKlar | sak=nyckelring n=11 |
| 5:47 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 5:48 | sak | du | Femtio kronor. Nu har jag råd med gripen. |
| 5:48 | notis | tanke | 💭 Femtio kronor. Nu har jag råd med gripen. |
| 5:48 | röst | du | Femtio kronor. Nu har jag råd med gripen. · REAKTION |
| 5:52 | klar | du | Femtio kronor. Nu har jag råd med gripen. |
| 5:53 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 5:54 | händelse | salt | sak=nyckelring n=1 |
| 5:54 | aliSalt | ali | 15 |
| 5:54 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 5:54 | händelse | salt | sak=nyckelring n=1 |
| 5:54 | paket |  | ali → ge |
| 5:54 | väntar | ali | Du får bonus! 20 kr extra. Säg inget till min fru. |
| 5:54 | väntar |  | (läget ändras) |
| 5:54 | aliSalt | ali | 15 |
| 5:54 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 5:54 | händelse | salt | sak=nyckelring n=1 |
| 5:54 | aliSalt | ali | 15 |
| 5:54 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 5:55 | sak | ali | Du får bonus! 20 kr extra. Säg inget till min fru. |
| 5:55 | notis |  | Ali: ”Du får bonus! 20 kr extra. Säg inget till min fru.” |
| 5:55 | röst | ali | Du får bonus! 20 kr extra. Säg inget till min fru. · REAKTION |
| 5:59 | klar | ali | Du får bonus! 20 kr extra. Säg inget till min fru. |
| 6:01 | sak |  | (läget ändras) |
| 6:01 | klar |  | (läget ändras) |
| 6:08 | händelse | printStart | sak=nyckelring |
| 6:09 | toast | guld | ✅ |
| 6:09 | händelse | printKlar | sak=nyckelring n=12 |
| 6:10 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 6:12 | händelse | printStart | sak=nyckelring |
| 6:13 | toast | guld | ✅ |
| 6:13 | händelse | printKlar | sak=nyckelring n=13 |
| 6:14 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 6:16 | händelse | printStart | sak=nyckelring |
| 6:17 | toast | guld | ✅ |
| 6:17 | händelse | printKlar | sak=nyckelring n=14 |
| 6:18 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 6:19 | tanke | du | Gripen hos Ali. |
| 6:19 | väntar | du | Gripen hos Ali. |
| 6:19 | nick |  | paminn:14 |
| 6:20 | sak | du | Gripen hos Ali. |
| 6:20 | notis | tanke | 💭 Gripen hos Ali. |
| 6:20 | röst | du | Gripen hos Ali. · REAKTION |
| 6:22 | klar | du | Gripen hos Ali. |
| 6:24 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 6:25 | händelse | salt | sak=nyckelring n=1 |
| 6:25 | aliSalt | ali | 15 |
| 6:25 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 6:26 | händelse | salt | sak=nyckelring n=1 |
| 6:26 | aliSalt | ali | 15 |
| 6:26 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 6:26 | händelse | salt | sak=nyckelring n=1 |
| 6:26 | aliSalt | ali | 15 |
| 6:26 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 6:35 | händelse | printStart | sak=nyckelring |
| 6:36 | toast | guld | ✅ |
| 6:36 | händelse | printKlar | sak=nyckelring n=15 |
| 6:37 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 6:39 | händelse | printStart | sak=nyckelring |
| 6:39 | toast | fel | Ingen ström – trampa cykeln |
| 6:41 | toast | guld | ✅ |
| 6:41 | händelse | printKlar | sak=nyckelring n=16 |
| 6:41 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 6:43 | händelse | printStart | sak=nyckelring |
| 6:44 | toast | guld | ✅ |
| 6:44 | händelse | printKlar | sak=nyckelring n=17 |
| 6:45 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 6:51 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 6:52 | händelse | salt | sak=nyckelring n=1 |
| 6:52 | aliSalt | ali | 15 |
| 6:52 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 6:53 | händelse | salt | sak=nyckelring n=1 |
| 6:53 | aliSalt | ali | 15 |
| 6:53 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 6:53 | händelse | salt | sak=nyckelring n=1 |
| 6:53 | aliSalt | ali | 15 |
| 6:53 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 7:01 | händelse | printStart | sak=nyckelring |
| 7:02 | toast | guld | ✅ |
| 7:02 | händelse | printKlar | sak=nyckelring n=18 |
| 7:03 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 7:05 | händelse | printStart | sak=nyckelring |
| 7:06 | toast | guld | ✅ |
| 7:06 | händelse | printKlar | sak=nyckelring n=19 |
| 7:07 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 7:09 | händelse | printStart | sak=nyckelring |
| 7:10 | toast | guld | ✅ |
| 7:10 | händelse | printKlar | sak=nyckelring n=20 |
| 7:11 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 7:17 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 7:19 | händelse | salt | sak=nyckelring n=1 |
| 7:19 | aliSalt | ali | 15 |
| 7:19 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 7:19 | händelse | salt | sak=nyckelring n=1 |
| 7:19 | aliSalt | ali | 15 |
| 7:19 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 7:19 | händelse | salt | sak=nyckelring n=1 |
| 7:19 | aliSalt | ali | 15 |
| 7:19 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 7:32 | upplåst | bara | grip |
| 7:32 | brott | UPPLÅST | grip (bara 3 av 3) |
| 7:32 | händelse | upplast | id=grip flask=bara |
| 7:32 | paket |  | tanke |
| 7:32 | tanke | du | Ett skräp i taget. Jag springer ihjäl mig. |
| 7:32 | väntar | du | Ett skräp i taget. Jag springer ihjäl mig. |
| 7:33 | sak | du | Ett skräp i taget. Jag springer ihjäl mig. |
| 7:33 | notis | tanke | 💭 Ett skräp i taget. Jag springer ihjäl mig. |
| 7:33 | röst | du | Ett skräp i taget. Jag springer ihjäl mig. · STORY |
| 7:36 | klar | du | Ett skräp i taget. Jag springer ihjäl mig. |
| 7:38 | händelse | printStart | sak=nyckelring |
| 7:41 | toast | guld | ✅ |
| 7:41 | händelse | printKlar | sak=nyckelring n=21 |
| 7:41 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 7:47 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 7:49 | händelse | salt | sak=nyckelring n=1 |
| 7:49 | aliSalt | ali | 15 |
| 7:49 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 7:56 | väntar | bud | (tips) |
| 7:56 | sak | bud | (tips) |
| 7:56 | väntar | du | Jag har pengar nu. Hos Ali kan jag köpa uppgraderingar – bära mer eller printa snabbare. |
| 7:56 | händelse | printStart | sak=nyckelring |
| 7:57 | klar | bud | (tips) |
| 7:57 | toast | guld | ✅ |
| 7:57 | händelse | printKlar | sak=nyckelring n=22 |
| 7:58 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 7:59 | sak | du | Jag har pengar nu. Hos Ali kan jag köpa uppgraderingar – bära mer eller printa snabbare. |
| 7:59 | röst | du | Jag har pengar nu. Hos Ali kan jag köpa uppgraderingar – bära mer eller printa snabbare. · MÅL |
| 8:00 | händelse | printStart | sak=nyckelring |
| 8:01 | toast | guld | ✅ |
| 8:01 | händelse | printKlar | sak=nyckelring n=23 |
| 8:06 | klar | du | Jag har pengar nu. Hos Ali kan jag köpa uppgraderingar – bära mer eller printa snabbare. |
| 8:17 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 8:23 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 8:24 | händelse | salt | sak=nyckelring n=1 |
| 8:24 | aliSalt | ali | 15 |
| 8:24 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 8:25 | händelse | salt | sak=nyckelring n=1 |
| 8:25 | aliSalt | ali | 15 |
| 8:25 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 8:27 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 8:28 | struken | info:guld | 3D-modell köpt – printa skräpgrip |
| 8:28 | händelse | kopt | sak=grip |
| 8:28 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 8:28 | händelse | dialog | id=aliForstaRitning |
| 8:28 | röst | ali | Bra val. Ritningen räcker till en skräpgrip. · STORY |
| 8:28 | butiksbubbla | ali | Bra val. Ritningen räcker till en skräpgrip. |
| 8:29 | händelse | malKlart | id=kopGrip del=Dag 1 – Kom igång nasta=printGrip |
| 8:29 | bekräftelse | du | plats |
| 8:29 | väntar | du | Min första 3D-modell! Jag printar inte bara saker – jag printar maskiner. |
| 8:29 | MÅL |  | Printa skräpgripen |
| 8:30 | sak | du | Min första 3D-modell! Jag printar inte bara saker – jag printar maskiner. |
| 8:30 | kvitto-visas | du | Min första 3D-modell! Jag printar inte bara saker – jag printar maskiner. |
| 8:30 | lapp | 📔 Dagbok | Min första 3D-modell! Jag printar inte bara saker – jag printar maskiner. |
| 8:30 | dagbokrad | du | Min första 3D-modell! Jag printar inte bara saker – jag printar maskiner. |
| 8:30 | notis | dagbok | Min första 3D-modell! Jag printar inte bara saker – jag printar maskiner. |
| 8:30 | klar | du | Min första 3D-modell! Jag printar inte bara saker – jag printar maskiner. |
| 8:30 | målruta |  | Printa skräpgripen |
| 8:31 | sak | du | (nytt mål i rutan) |
| 8:31 | pil |  | Printa skräpgripen |
| 8:31 | klar | du | (nytt mål i rutan) |
| 8:31 | nick |  | nick:15 |
| 8:40 | händelse | printStart | sak=byggsats:grip |
| 8:42 | händelse | printKlar | sak=byggsats:grip n=1 |
| 8:42 | toast | guld | ✅ |
| 8:43 | väntar | info:guld | Skräpgrip ska jag ha på mig. |
| 8:43 | händelse | tagitUrPrint | sak=byggsats:grip n=1 |
| 8:43 | paket |  | sms |
| 8:43 | väntar | ali | Ali här. Jag såg Skräpgrip på avstånd. Ett streck blev lite snett. Mitt fel. Vackert ändå. |
| 8:43 | sak | info:guld | Skräpgrip ska jag ha på mig. |
| 8:43 | kvitto-visas | info:guld | Skräpgrip ska jag ha på mig. |
| 8:43 | toast | guld | Skräpgrip ska jag ha på mig. |
| 8:45 | klar | info:guld | Skräpgrip ska jag ha på mig. |
| 8:47 | väntar | info:guld | 🦾 Skräpgripen sitter! Jag bär 6, siktar lättare och plockar när jag går nära. |
| 8:47 | tog på | du | byggsats:grip |
| 8:47 | händelse | monterat | sak=grip |
| 8:47 | sak | info:guld | 🦾 Skräpgripen sitter! Jag bär 6, siktar lättare och plockar när jag går nära. |
| 8:47 | kvitto-visas | info:guld | 🦾 Skräpgripen sitter! Jag bär 6, siktar lättare och plockar när jag går nära. |
| 8:47 | toast | guld | 🦾 Skräpgripen sitter! Jag bär 6, siktar lättare och plockar när jag går nära. |
| 8:47 | händelse | malKlart | id=printGrip del=Dag 1 – Kom igång nasta=krukaD1 |
| 8:47 | bekräftelse | du | plats |
| 8:47 | MÅL |  | Printa och sälj nyckelringar |
| 8:47 | upplåst | inkomst | kruka |
| 8:47 | brott | UPPLÅST | kruka (inkomst 23 av 6) |
| 8:47 | händelse | upplast | id=kruka flask=inkomst |
| 8:47 | paket |  | tanke → sms |
| 8:47 | tanke | du | Nyckelringar, nyckelringar. Ali kan inte vilja ha fler. |
| 8:47 | väntar | du | Nyckelringar, nyckelringar. Ali kan inte vilja ha fler. |
| 8:47 | väntar | ali | Prova en kruka. Folk köper krukor. Ingen vet varför. |
| 8:47 | skratt | ali | Prova en kruka. Folk köper krukor. Ingen |
| 8:49 | klar | info:guld | 🦾 Skräpgripen sitter! Jag bär 6, siktar lättare och plockar när jag går nära. |
| 8:49 | målruta |  | Köp krukreceptet |
| 8:51 | kvittens-bock |  | ✓ Printa skräpgripen |
| 8:51 | sak | du | (nytt mål i rutan) |
| 8:51 | pil |  | Köp krukreceptet |
| 8:51 | klar | du | (nytt mål i rutan) |
| 8:51 | nick |  | nick:16 |
| 8:52 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 8:53 | sak | ali | Prova en kruka. Folk köper krukor. Ingen vet varför. |
| 8:53 | skratt | ali | Prova en kruka. Folk köper krukor. Ingen |
| 8:53 | sms | ali | Prova en kruka. Folk köper krukor. Ingen vet varför. |
| 8:53 | skratt | ali | Prova en kruka. Folk köper krukor. Ingen |
| 8:53 | händelse | dialog | id=aliKrukaSms |
| 8:53 | sms-bubbla | ali | Prova en kruka. Folk köper krukor. Ingen vet varför. |
| 8:53 | skratt | ali | Prova en kruka. Folk köper krukor. Ingen |
| 8:53 | röst | ali | Prova en kruka. Folk köper krukor. Ingen vet varför. · STORY |
| 8:53 | röst | du | Ali vill ha krukor. Jag printar en blomkruka. · STORY |
| 8:53 | röst-avbruten | ali | 3.9 s kvar ← du: Ali vill ha krukor. Jag printar en blomk |
| 8:54 | händelse | kopt | sak=kruka |
| 8:54 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 8:54 | händelse | dialog | id=aliKrukaRecept |
| 8:54 | butiksbubbla | ali | Blomkruka? Bra val. Folk köper sånt. Jag vet inte varför. |
| 8:55 | väntar | ali | Bra val. Folk köper sånt. Jag vet inte varför. |
| 8:57 | klar | ali | Prova en kruka. Folk köper krukor. Ingen vet varför. |
| 8:57 | skratt | ali | Prova en kruka. Folk köper krukor. Ingen |
| 8:59 | sak | ali | Bra val. Folk köper sånt. Jag vet inte varför. |
| 8:59 | röst | ali | Bra val. Folk köper sånt. Jag vet inte varför. · STORY |
| 9:03 | klar | ali | Bra val. Folk köper sånt. Jag vet inte varför. |
| 9:11 | sak | du | Nyckelringar, nyckelringar. Ali kan inte vilja ha fler. |
| 9:11 | notis | tanke | 💭 Nyckelringar, nyckelringar. Ali kan inte vilja ha fler. |
| 9:11 | röst | du | Nyckelringar, nyckelringar. Ali kan inte vilja ha fler. · STORY |
| 9:12 | händelse | printStart | sak=kruka |
| 9:12 | toast | fel | Ingen ström – trampa cykeln |
| 9:15 | toast | guld | ✅ |
| 9:15 | händelse | printKlar | sak=kruka n=1 |
| 9:15 | händelse | malKlart | id=krukaD1 del=Dag 1 – Kom igång nasta=saljKruka |
| 9:15 | bekräftelse | du | plats |
| 9:15 | kvittens | du | En kruka. Mamma skulle bli så stolt. Hon får inte veta. |
| 9:15 | väntar | du | En kruka. Mamma skulle bli så stolt. Hon får inte veta. |
| 9:15 | väntar | du | Ali gillar krukor. Han sa det själv. |
| 9:16 | MÅL |  | Sälj blomkrukan |
| 9:16 | händelse | tagitUrPrint | sak=kruka n=1 |
| 9:16 | klar | du | Nyckelringar, nyckelringar. Ali kan inte vilja ha fler. |
| 9:16 | sak | du | En kruka. Mamma skulle bli så stolt. Hon får inte veta. |
| 9:16 | röst | du | En kruka. Mamma skulle bli så stolt. Hon får inte veta. · STORY |
| 9:16 | målruta |  | Sälj blomkrukan |
| 9:20 | klar | du | En kruka. Mamma skulle bli så stolt. Hon får inte veta. |
| 9:21 | sak | du | Ali gillar krukor. Han sa det själv. |
| 9:21 | pil |  | Sälj blomkrukan |
| 9:21 | notis | tanke | 💭 Ali gillar krukor. Han sa det själv. |
| 9:21 | röst | du | Ali gillar krukor. Han sa det själv. · MÅL |
| 9:24 | klar | du | Ali gillar krukor. Han sa det själv. |
| 9:31 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 9:32 | händelse | salt | sak=kruka n=1 |
| 9:32 | aliSalt | ali | 70 |
| 9:32 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 9:34 | händelse | malKlart | id=saljKruka del=Dag 1 – Kom igång nasta=kopSang |
| 9:34 | bekräftelse | du | plats |
| 9:34 | väntar | du | Jag tänker inte sova på betongen i natt. Ali har en säng. Typ. |
| 9:34 | målruta |  | Köp sängen |
| 9:34 | MÅL |  | Köp sängen |
| 9:34 | sak | du | Jag tänker inte sova på betongen i natt. Ali har en säng. Typ. |
| 9:34 | pil |  | Köp sängen |
| 9:34 | notis | tanke | 💭 Jag tänker inte sova på betongen i natt. Ali har en säng. Typ. |
| 9:34 | röst | du | Jag tänker inte sova på betongen i natt. Ali har en säng. Typ. · MÅL |
| 9:38 | kvittens-bock |  | ✓ Sälj blomkrukan |
| 9:39 | klar | du | Jag tänker inte sova på betongen i natt. Ali har en säng. Typ. |
| 9:40 | paket |  | tanke |
| 9:40 | tanke | du | Det börjar bli mörkt. Jag kan inte sova på jorden. |
| 9:40 | väntar | du | Det börjar bli mörkt. Jag kan inte sova på jorden. |
| 9:41 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 9:43 | händelse | kopt | sak=sang |
| 9:43 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 9:43 | händelse | dialog | id=aliSang |
| 9:43 | röst | ali | Sov gott, min vän. · STORY |
| 9:43 | butiksbubbla | ali | Sov gott, min vän. |
| 9:44 | struken | du | Det börjar bli mörkt. Jag kan inte sova på jorden. |
| 9:44 | händelse | malKlart | id=kopSang del=Dag 1 – Kom igång nasta=printSang |
| 9:44 | bekräftelse | du | plats |
| 9:44 | väntar | du | En säng tar lång tid. Den är värd det. |
| 9:44 | målruta |  | Printa sängen |
| 9:44 | MÅL |  | Printa sängen |
| 9:44 | sak | du | En säng tar lång tid. Den är värd det. |
| 9:44 | pil |  | Printa sängen |
| 9:44 | notis | tanke | 💭 En säng tar lång tid. Den är värd det. |
| 9:44 | röst | du | En säng tar lång tid. Den är värd det. · MÅL |
| 9:44 | nick |  | nick:19 |
| 9:47 | klar | du | En säng tar lång tid. Den är värd det. |
| 9:48 | kvittens-bock |  | ✓ Köp sängen |
| 10:09 | sak | ali | Ali här. Jag såg Skräpgrip på avstånd. Ett streck blev lite snett. Mitt fel. Vackert ändå. |
| 10:09 | sms | ali | Ali här. Jag såg Skräpgrip på avstånd. Ett streck blev lite snett. Mitt fel. Vackert ändå. |
| 10:09 | sms-bubbla | ali | Ali här. Jag såg Skräpgrip på avstånd. Ett streck blev lite snett. Mitt fel. Vackert ändå. |
| 10:09 | röst | ali | Ali här. Jag såg Skräpgrip på avstånd. Ett streck blev lite snett. Mitt fel. Vackert ändå. · REAKTION |
| 10:11 | händelse | printStart | sak=sang |
| 10:14 | toast | fel | Ingen ström – trampa cykeln |
| 10:16 | klar | ali | Ali här. Jag såg Skräpgrip på avstånd. Ett streck blev lite snett. Mitt fel. Vackert ändå. |
| 10:16 | toast | fel | Slut på tråd – mal mer så fortsätter den |
| 10:16 | väntar | notis:Storebrors skrivare: Slut på tråd – mal  | Storebrors skrivare: Slut på tråd – mal mer så fortsätter den |
| 10:36 | struken | notis:Storebrors skrivare: Slut på tråd – mal  | Storebrors skrivare: Slut på tråd – mal mer så fortsätter den |
| 10:37 | toast | guld | ✅ |
| 10:37 | händelse | printKlar | sak=sang n=1 |
| 10:40 | händelse | tagitUrPrint | sak=sang n=1 |
| 10:40 | händelse | malKlart | id=printSang del=Dag 1 – Kom igång nasta=sov1 |
| 10:40 | bekräftelse | du | plats |
| 10:40 | kvittens | du | En säng. Jag printade en SÄNG. |
| 10:40 | väntar | du | En säng. Jag printade en SÄNG. |
| 10:40 | paket |  | lapp |
| 10:40 | kvallsrad | du | Nitton år. Inget mer tjat. Gården är full av skräp. I morgon. |
| 10:40 | väntar | du | Sängen ska in i skjulet. Sen sover jag. |
| 10:40 | MÅL |  | Sängen i skjulet |
| 10:40 | sak | du | En säng. Jag printade en SÄNG. |
| 10:40 | röst | du | En säng. Jag printade en SÄNG. · STORY |
| 10:40 | målruta |  | Sängen i skjulet |
| 10:42 | klar | du | En säng. Jag printade en SÄNG. |
| 10:43 | sak | du | Sängen ska in i skjulet. Sen sover jag. |
| 10:43 | pil |  | Sängen i skjulet |
| 10:43 | notis | tanke | 💭 Sängen ska in i skjulet. Sen sover jag. |
| 10:43 | röst | du | Sängen ska in i skjulet. Sen sover jag. · MÅL |
| 10:43 | nick |  | nick:20 |
| 10:46 | klar | du | Sängen ska in i skjulet. Sen sover jag. |
| 10:55 | nattkort | du | 🌙 Dag 1 är slut. God natt. zzz… i en riktig säng Nitton år. Inget mer tjat. Gården är full av skräp. I morgon. DAGENS PRINTAR Nyckelring × 23 Blomkruka × 1 Sän |

<details><summary>Botens handlingar dag 1</summary>

- 0:12 gå till brädhögen (3 m) (5 kr)
- 0:29 gå till cykeln vid vägen (2 m) (5 kr)
- 0:44 gå till rutan i linje 1 (13 m) (5 kr)
- 1:17 gå till cykeln (lyfter den) (13 m) (5 kr)
- 1:25 gå till cykelns plats (11 m) (5 kr)
- 1:28 gå till skrivaren (2 m) (5 kr)
- 1:29 printar Nyckelring (5 kr)
- 1:36 tar ut 1 st ur skrivaren (5 kr)
- 1:50 printar Nyckelring (sista av storebrors rulle) (5 kr)
- 2:15 tar ut 1 st ur skrivaren (5 kr)
- 2:20 gå till Ali (26 m) (5 kr)
- 2:20 öppnar Alis butik – sälja de två nyckelringarna (5 kr)
- 2:23 säljer hos Ali: +30 kr (35 kr)
- 2:36 öppnar Alis butik – köpa kvarnen (35 kr)
- 2:38 köper gammalkvarn för 30 kr (5 kr)
- 2:39 köpte kvarnen (5 kr)
- 2:53 gå till kvarnens ruta (28 m) (5 kr)
- 3:03 plockar 3 skräp på gården (bär max 3) (5 kr)
- 3:05 gå till kvarnen (5 m) (5 kr)
- 3:17 gå till cykeln (3 m) (5 kr)
- 3:18 gå till skrivaren (1 m) (5 kr)
- 3:19 printar Nyckelring (5 kr)
- 3:25 tar ut 1 st ur skrivaren (5 kr)
- 3:31 printar Nyckelring (5 kr)
- 3:33 tar ut 1 st ur skrivaren (5 kr)
- 3:34 printar Nyckelring (5 kr)
- 3:36 tar ut 1 st ur skrivaren (5 kr)
- 3:43 gå till Ali (27 m) (5 kr)
- 3:43 öppnar Alis butik – sälja nyckelringar (5 kr)
- 3:45 säljer hos Ali: +45 kr (50 kr)
- 3:49 öppnar Alis butik – Ali (powerbanken) (50 kr)
- 4:07 öppnar Alis butik – Ali (powerbanken) (50 kr)
- 4:19 öppnar Alis butik – Ali (powerbanken) (50 kr)
- 4:26 öppnar Alis butik – Ali (powerbanken) (50 kr)
- 4:33 öppnar Alis butik – Ali (powerbanken) (50 kr)
- 4:46 gå till koppla powerbanken till cykeln (24 m) (50 kr)
- 4:56 tjänar pengar till väntar på flaskhalsen för grip: 50/90 kr → printar nyckelring (15 kr) (50 kr)
- 4:56 gå till skrivaren (2 m) (50 kr)
- 4:58 printar Nyckelring (50 kr)
- 5:01 tar ut 1 st ur skrivaren (50 kr)
- 5:02 printar Nyckelring (50 kr)
- 5:08 plockar 3 skräp på gården (bär max 3) (50 kr)
- 5:11 gå till kvarnen (13 m) (50 kr)
- 5:14 gå till skrivaren (1 m) (50 kr)
- 5:14 tar ut 1 st ur skrivaren (50 kr)
- 5:16 printar Nyckelring (50 kr)
- 5:18 tar ut 1 st ur skrivaren (50 kr)
- 5:24 gå till Ali (28 m) (50 kr)
- 5:24 öppnar Alis butik – sälja (50 kr)
- 5:26 säljer hos Ali: +45 kr (95 kr)
- 5:30 tjänar pengar till väntar på flaskhalsen för grip: 95/135 kr → printar nyckelring (15 kr) (95 kr)
- 5:35 gå till skrivaren (25 m) (95 kr)
- 5:36 printar Nyckelring (95 kr)
- 5:39 tar ut 1 st ur skrivaren (95 kr)
- 5:40 printar Nyckelring (95 kr)
- 5:43 tar ut 1 st ur skrivaren (95 kr)
- 5:44 printar Nyckelring (95 kr)
- 5:45 gå till cykeln (1 m) (95 kr)
- 5:47 tar ut 1 st ur skrivaren (95 kr)
- 5:53 gå till Ali (25 m) (95 kr)
- 5:53 öppnar Alis butik – sälja (95 kr)
- 5:55 säljer hos Ali: +45 kr (140 kr)
- 6:02 tjänar pengar till väntar på flaskhalsen för grip: 160/200 kr → printar nyckelring (15 kr) (160 kr)
- 6:07 gå till skrivaren (25 m) (160 kr)
- 6:08 printar Nyckelring (160 kr)
- 6:11 tar ut 1 st ur skrivaren (160 kr)
- 6:12 printar Nyckelring (160 kr)
- 6:15 tar ut 1 st ur skrivaren (160 kr)
- 6:16 printar Nyckelring (160 kr)
- 6:19 tar ut 1 st ur skrivaren (160 kr)
- 6:24 gå till Ali (25 m) (160 kr)
- 6:24 öppnar Alis butik – sälja (160 kr)
- 6:26 säljer hos Ali: +45 kr (205 kr)
- 6:28 tjänar pengar till väntar på flaskhalsen för grip: 205/245 kr → printar nyckelring (15 kr) (205 kr)
- 6:33 gå till skrivaren (25 m) (205 kr)
- 6:35 printar Nyckelring (205 kr)
- 6:37 tar ut 1 st ur skrivaren (205 kr)
- 6:39 printar Nyckelring (205 kr)
- 6:40 gå till cykeln (1 m) (205 kr)
- 6:42 tar ut 1 st ur skrivaren (205 kr)
- 6:43 printar Nyckelring (205 kr)
- 6:46 tar ut 1 st ur skrivaren (205 kr)
- 6:51 gå till Ali (25 m) (205 kr)
- 6:51 öppnar Alis butik – sälja (205 kr)
- 6:53 säljer hos Ali: +45 kr (250 kr)
- 6:55 tjänar pengar till väntar på flaskhalsen för grip: 250/290 kr → printar nyckelring (15 kr) (250 kr)
- 7:00 gå till skrivaren (25 m) (250 kr)
- 7:01 printar Nyckelring (250 kr)
- 7:04 tar ut 1 st ur skrivaren (250 kr)
- 7:05 printar Nyckelring (250 kr)
- 7:08 tar ut 1 st ur skrivaren (250 kr)
- 7:09 printar Nyckelring (250 kr)
- 7:12 tar ut 1 st ur skrivaren (250 kr)
- 7:17 gå till Ali (25 m) (250 kr)
- 7:17 öppnar Alis butik – sälja (250 kr)
- 7:19 säljer hos Ali: +45 kr (295 kr)
- 7:21 tjänar pengar till väntar på flaskhalsen för grip: 295/335 kr → printar nyckelring (15 kr) (295 kr)
- 7:26 plockar 3 skräp på gården (bär max 3) (295 kr)
- 7:32 gå till kvarnen (29 m) (295 kr)
- 7:37 gå till skrivaren (1 m) (295 kr)
- 7:38 printar Nyckelring (295 kr)
- 7:40 gå till cykeln (2 m) (295 kr)
- 7:41 tar ut 1 st ur skrivaren (295 kr)
- 7:47 gå till Ali (26 m) (295 kr)
- 7:47 öppnar Alis butik – sälja (295 kr)
- 7:49 säljer hos Ali: +15 kr (310 kr)
- 7:50 tjänar pengar till väntar på flaskhalsen för grip: 310/335 kr → printar nyckelring (15 kr) (310 kr)
- 7:55 gå till skrivaren (25 m) (310 kr)
- 7:56 printar Nyckelring (310 kr)
- 7:59 tar ut 1 st ur skrivaren (310 kr)
- 8:00 printar Nyckelring (310 kr)
- 8:10 plockar 3 skräp på gården (bär max 3) (310 kr)
- 8:14 gå till kvarnen (16 m) (310 kr)
- 8:17 gå till skrivaren (3 m) (310 kr)
- 8:17 tar ut 1 st ur skrivaren (310 kr)
- 8:23 gå till Ali (28 m) (310 kr)
- 8:23 öppnar Alis butik – sälja (310 kr)
- 8:25 säljer hos Ali: +30 kr (340 kr)
- 8:27 öppnar Alis butik – köpa skräpgrip (340 kr)
- 8:29 köper grip för 50 kr (290 kr)
- 8:38 gå till skrivaren (25 m) (290 kr)
- 8:40 printar Skräpgrip (290 kr)
- 8:43 tar ut 1 st ur skrivaren (290 kr)
- 8:47 tar på grip (290 kr)
- 8:52 gå till Ali (25 m) (290 kr)
- 8:52 öppnar Alis butik – köpa receptet blomkruka (290 kr)
- 8:55 köper kruka för 40 kr (250 kr)
- 9:10 gå till skrivaren (25 m) (250 kr)
- 9:12 printar Blomkruka (250 kr)
- 9:12 gå till cykeln (1 m) (250 kr)
- 9:16 tar ut 1 st ur skrivaren (250 kr)
- 9:31 gå till Ali (25 m) (250 kr)
- 9:31 öppnar Alis butik – sälja krukan (250 kr)
- 9:33 säljer hos Ali: +70 kr (320 kr)
- 9:41 öppnar Alis butik – köpa sängen (320 kr)
- 9:43 köper sang för 60 kr (260 kr)
- 10:00 plockar 6 skräp på gården (bär max 6) (260 kr)
- 10:05 gå till kvarnen (22 m) (260 kr)
- 10:09 gå till skrivaren (3 m) (260 kr)
- 10:11 printar Säng (260 kr)
- 10:14 gå till cykeln (1 m) (260 kr)
- 10:29 plockar 6 skräp på gården (bär max 6) (260 kr)
- 10:34 gå till kvarnen (26 m) (260 kr)
- 10:40 gå till skrivaren (3 m) (260 kr)
- 10:40 tar ut 1 st ur skrivaren (260 kr)
- 10:52 gå till sängplatsen i skjulet (21 m) (260 kr)

</details>

## Dag 2

| Tid | Källa | Vem | Text |
|---|---|---|---|
| 10:55 | vara | ali | kruka |
| 10:55 | händelse | malKlart | id=sov1 del=Dag 1 – Kom igång nasta=kopMotor |
| 10:55 | bekräftelse | du | plats |
| 10:55 | MÅL |  | Mal skräp, printa och sälj |
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
| 0:16 | händelse | printStart | sak=kruka |
| 0:18 | klar | du | Vevandet tar på armarna. Ali har en motor till kvarnen. |
| 0:19 | toast | guld | ✅ |
| 0:19 | händelse | printKlar | sak=kruka n=2 |
| 0:19 | händelse | tagitUrPrint | sak=kruka n=1 |
| 0:19 | struken | kedja | kruka |
| 0:20 | sak | notis:morgon | Ali vill ha idag: Blomkruka · +50 % |
| 0:20 | notis |  | Blomkruka · +50 % |
| 0:21 | väntar | ali | Ali här. Såg skylten. Stavningen är rätt. Det är mer än många. |
| 0:24 | klar | notis:morgon | Ali vill ha idag: Blomkruka · +50 % |
| 0:25 | hjälp | kontroll | R: Vrid innan du ställer ner |
| 0:25 | väntar | foto | Egen säng |
| 0:25 | paket |  | tanke |
| 0:25 | tanke | du | Tänk att jag ska få sova i min egen säng. |
| 0:25 | väntar | du | Tänk att jag ska få sova i min egen säng. |
| 0:25 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 0:25 | röst | ali | Du är den enda här som vet vad en tolerans är. Det värmer. Lite. Inte mycket. · STORY |
| 0:25 | butiksbubbla | ali | Du är den enda här som vet vad en tolerans är. Det värmer. Lite. Inte mycket. |
| 0:27 | händelse | salt | sak=kruka n=1 |
| 0:27 | aliSalt | ali | 105 |
| 0:27 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 0:27 | butiksbubbla | ali | Precis vad jag ville ha idag. 105 kr – med extra. |
| 0:27 | väntar | ali | Precis det jag ville ha idag, min vän. |
| 0:29 | sak | notis:Första natten i en riktig säng. Jag prin | Första natten i en riktig säng. Jag printade den själv. |
| 0:29 | notis | dagbok | Första natten i en riktig säng. Jag printade den själv. |
| 0:31 | klar | notis:Första natten i en riktig säng. Jag prin | Första natten i en riktig säng. Jag printade den själv. |
| 0:33 | sak | ali | Precis det jag ville ha idag, min vän. |
| 0:33 | röst | ali | Precis det jag ville ha idag, min vän. · STORY |
| 0:36 | klar | ali | Precis det jag ville ha idag, min vän. |
| 0:45 | händelse | printStart | sak=kruka |
| 0:46 | toast | fel | Ingen ström – trampa cykeln |
| 0:49 | toast | guld | ✅ |
| 0:49 | händelse | printKlar | sak=kruka n=3 |
| 0:50 | händelse | tagitUrPrint | sak=kruka n=1 |
| 0:55 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 0:57 | händelse | salt | sak=kruka n=1 |
| 0:57 | aliSalt | ali | 105 |
| 0:57 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
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
| 1:10 | klar | du | Sopbilen tippade en ny last. Allt det skräpet – och grinden är låst. |
| 1:13 | sak |  | (läget ändras) |
| 1:14 | klar |  | (läget ändras) |
| 1:24 | händelse | printStart | sak=kruka |
| 1:26 | toast | guld | ✅ |
| 1:26 | händelse | printKlar | sak=kruka n=4 |
| 1:27 | händelse | tagitUrPrint | sak=kruka n=1 |
| 1:31 | hjälp | kontroll | R: Vrid innan du ställer ner |
| 1:33 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 1:34 | händelse | salt | sak=kruka n=1 |
| 1:34 | aliSalt | ali | 105 |
| 1:34 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 1:43 | händelse | printStart | sak=kruka |
| 1:45 | sak | foto | Egen säng |
| 1:45 | foto | du | Egen säng |
| 1:47 | toast | guld | ✅ |
| 1:47 | händelse | printKlar | sak=kruka n=5 |
| 1:47 | klar | foto | Egen säng |
| 1:48 | händelse | tagitUrPrint | sak=kruka n=1 |
| 1:49 | väntar | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått generator. Vi tar en låt på det. Den här är till dig, Gunnar. |
| 1:49 | radio | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått generator. Vi tar en låt på det. Den här är till dig, Gunnar. |
| 1:49 | skratt | du | Radio-Kjelle |
| 1:49 | sak | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått generator. Vi tar en låt på det. Den här är till dig, Gunnar. |
| 1:49 | notis |  | 📻 Radio Tippen: Radio Tippen, Kjelle här. Skjulet vid tippen har fått generator. Vi tar en låt på det. Den här är till dig, Gunnar. |
| 1:49 | röst | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått generator. Vi tar en låt på det. Den här är till dig, Gunnar. · REAKTION |
| 1:53 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 1:55 | händelse | salt | sak=kruka n=1 |
| 1:55 | aliSalt | ali | 105 |
| 1:55 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 1:59 | klar | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått generator. Vi tar en låt på det. Den här är till dig, Gunnar. |
| 2:01 | struken | ali | Ali här. Såg skylten. Stavningen är rätt. Det är mer än många. |
| 2:07 | sak | du | Tänk att jag ska få sova i min egen säng. |
| 2:07 | notis | tanke | 💭 Tänk att jag ska få sova i min egen säng. |
| 2:07 | röst | du | Tänk att jag ska få sova i min egen säng. · STORY |
| 2:08 | händelse | printStart | sak=kruka |
| 2:10 | klar | du | Tänk att jag ska få sova i min egen säng. |
| 2:10 | toast | guld | ✅ |
| 2:10 | händelse | printKlar | sak=kruka n=6 |
| 2:11 | händelse | tagitUrPrint | sak=kruka n=1 |
| 2:16 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 2:18 | händelse | salt | sak=kruka n=1 |
| 2:18 | aliSalt | ali | 105 |
| 2:18 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 2:38 | upplåst | mala | kvarnmotor |
| 2:38 | brott | UPPLÅST | kvarnmotor (mala 16 av 6) |
| 2:38 | händelse | upplast | id=kvarnmotor flask=mala |
| 2:38 | paket |  | tanke → sms |
| 2:38 | tanke | du | Mina armar… Kvarnen borde veva själv. |
| 2:38 | väntar | du | Mina armar… Kvarnen borde veva själv. |
| 2:38 | väntar | ali | Ali här. En motor? Jag har en. Från en gammal tvättmaskin. Den centrifugerar fortfarande om man ber snällt. |
| 2:43 | händelse | printStart | sak=kruka |
| 2:43 | toast | fel | Ingen ström – trampa cykeln |
| 2:47 | toast | guld | ✅ |
| 2:47 | händelse | printKlar | sak=kruka n=7 |
| 2:47 | händelse | tagitUrPrint | sak=kruka n=1 |
| 2:49 | hjälp | kontroll | R: Vrid innan du ställer ner |
| 2:53 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 2:54 | sak | ali | Ali här. En motor? Jag har en. Från en gammal tvättmaskin. Den centrifugerar fortfarande om man ber snällt. |
| 2:54 | sms | ali | Ali här. En motor? Jag har en. Från en gammal tvättmaskin. Den centrifugerar fortfarande om man ber snällt. |
| 2:54 | sms-bubbla | ali | Ali här. En motor? Jag har en. Från en gammal tvättmaskin. Den centrifugerar fortfarande om man ber snällt. |
| 2:54 | röst | ali | Ali här. En motor? Jag har en. Från en gammal tvättmaskin. Den centrifugerar fortfarande om man ber snällt. · STORY |
| 2:55 | händelse | salt | sak=kruka n=1 |
| 2:55 | aliSalt | ali | 105 |
| 2:55 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 3:03 | klar | ali | Ali här. En motor? Jag har en. Från en gammal tvättmaskin. Den centrifugerar fortfarande om man ber snällt. |
| 3:05 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 3:06 | struken | info:guld | 3D-modell köpt – printa kvarnmotor |
| 3:06 | händelse | kopt | sak=kvarnmotor |
| 3:06 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 3:07 | skratt | du | falsk tuta |
| 3:08 | händelse | malKlart | id=kopMotor del=Dag 2 – Tippen bredvid nasta=monteraMotor |
| 3:08 | bekräftelse | du | plats |
| 3:08 | struken | kedja | motorKopt |
| 3:08 | väntar | du | Motorn ska sitta där veven sitter. Jag printar den först. |
| 3:08 | målruta |  | Printa kvarnmotorn till kvarnen |
| 3:08 | MÅL |  | Printa kvarnmotorn till kvarnen |
| 3:08 | sak | du | Motorn ska sitta där veven sitter. Jag printar den först. |
| 3:08 | pil |  | Printa kvarnmotorn till kvarnen |
| 3:08 | notis | tanke | 💭 Motorn ska sitta där veven sitter. Jag printar den först. |
| 3:08 | röst | du | Motorn ska sitta där veven sitter. Jag printar den först. · MÅL |
| 3:08 | nick |  | nick:22 |
| 3:12 | kvittens-bock |  | ✓ Köp kvarnmotorn hos Ali (50 kr) |
| 3:13 | klar | du | Motorn ska sitta där veven sitter. Jag printar den först. |
| 3:22 | händelse | printStart | sak=byggsats:kvarnmotor |
| 3:24 | händelse | printKlar | sak=byggsats:kvarnmotor n=1 |
| 3:24 | toast | guld | ✅ |
| 3:25 | väntar | info:guld | ⚙️ Kvarnmotorn ska skruvas fast på kvarnen. |
| 3:25 | händelse | tagitUrPrint | sak=byggsats:kvarnmotor n=1 |
| 3:25 | paket |  | sms |
| 3:25 | väntar | ali | Ali här. Ännu en ritning som blev på riktigt: Kvarnmotor. Semesterkassan växer. Livet växer. |
| 3:25 | sak | info:guld | ⚙️ Kvarnmotorn ska skruvas fast på kvarnen. |
| 3:25 | kvitto-visas | info:guld | ⚙️ Kvarnmotorn ska skruvas fast på kvarnen. |
| 3:25 | toast | guld | ⚙️ Kvarnmotorn ska skruvas fast på kvarnen. |
| 3:27 | klar | info:guld | ⚙️ Kvarnmotorn ska skruvas fast på kvarnen. |
| 3:29 | väntar | info:guld | ⚙️ Motorn sitter där veven satt – nu mal kvarnen själv. |
| 3:29 | händelse | monterat | sak=kvarnmotor |
| 3:29 | paket |  | tanke |
| 3:29 | tanke | du | Motorn sitter där veven satt. Mina armar tackar. |
| 3:29 | väntar | du | Motorn sitter där veven satt. Mina armar tackar. |
| 3:29 | monterat | du | byggsats:kvarnmotor |
| 3:29 | händelse | monterat | sak=kvarnmotor |
| 3:29 | sak | info:guld | ⚙️ Motorn sitter där veven satt – nu mal kvarnen själv. |
| 3:29 | kvitto-visas | info:guld | ⚙️ Motorn sitter där veven satt – nu mal kvarnen själv. |
| 3:29 | toast | guld | ⚙️ Motorn sitter där veven satt – nu mal kvarnen själv. |
| 3:29 | händelse | malKlart | id=monteraMotor del=Dag 2 – Tippen bredvid nasta=kopSack |
| 3:29 | bekräftelse | du | plats |
| 3:29 | struken | du | Motorn sitter där veven satt. Mina armar tackar. |
| 3:29 | väntar | du | Gården är full av skräp. Jag börjar vid skjulet. |
| 3:30 | MÅL |  | Kolla vad som flög ut från sopbilen |
| 3:31 | klar | info:guld | ⚙️ Motorn sitter där veven satt – nu mal kvarnen själv. |
| 3:31 | målruta |  | Kolla vad som flög ut från sopbilen |
| 3:33 | kvittens-bock |  | ✓ Printa kvarnmotorn till kvarnen |
| 3:33 | sak | du | Gården är full av skräp. Jag börjar vid skjulet. |
| 3:33 | pil |  | Kolla vad som flög ut från sopbilen |
| 3:33 | notis | tanke | 💭 Gården är full av skräp. Jag börjar vid skjulet. |
| 3:33 | röst | du | Gården är full av skräp. Jag börjar vid skjulet. · MÅL |
| 3:37 | klar | du | Gården är full av skräp. Jag börjar vid skjulet. |
| 3:39 | väntar | mamma | Har du frusit än? |
| 3:43 | paket |  | brev → ge → tanke |
| 3:43 | väntar | rolf | Du sliter ju. Ingen gör så nuförtin. Ta dessa så går dä lättare. / grannen – ja kör sopbilen å har hand om tippen bredvid. MVH ROLF​ |
| 3:43 | väntar |  | (läget ändras) |
| 3:43 | tanke | du | Rolf… gubben i sopbilen. Han har tippen bredvid. Han verkar schysst. |
| 3:43 | okänt ord bytt | du | Rolf… gubben i sopbilen. Han har tippen bredvid. Han verkar schysst. |
| 3:43 | väntar | du | Rolf… gubben i sopbilen. Han har tippen bredvid. Han verkar schysst. |
| 3:43 | sak | rolf | Du sliter ju. Ingen gör så nuförtin. Ta dessa så går dä lättare. / grannen – ja kör sopbilen å har hand om tippen bredvid. MVH ROLF​ |
| 3:43 | lapp | Lapp från Rolf | Du sliter ju. Ingen gör så nuförtin. Ta dessa så går dä lättare. / grannen – ja kör sopbilen å har hand om tippen bredvid. MVH ROLF​ |
| 3:43 | röst | rolf | Du sliter ju. Ingen gör så nuförtin. Ta dessa så går dä lättare. / grannen – ja kör sopbilen å har hand om tippen bredvid. MVH ROLF​ · STORY |
| 3:47 | hjälp | kontroll | Klick: Klicka för att ta på dig den |
| 3:54 | klar | rolf | Du sliter ju. Ingen gör så nuförtin. Ta dessa så går dä lättare. / grannen – ja kör sopbilen å har hand om tippen bredvid. MVH ROLF​ |
| 3:55 | väntar | info:guld | 🗑️ Sopsäcken är över axeln! Nu bär jag 10 skräp. |
| 3:55 | tog på | du | byggsats:korg |
| 3:55 | händelse | monterat | sak=korg |
| 3:55 | sak | info:guld | 🗑️ Sopsäcken är över axeln! Nu bär jag 10 skräp. |
| 3:55 | kvitto-visas | info:guld | 🗑️ Sopsäcken är över axeln! Nu bär jag 10 skräp. |
| 3:55 | toast | guld | 🗑️ Sopsäcken är över axeln! Nu bär jag 10 skräp. |
| 3:55 | händelse | malKlart | id=kopSack del=Dag 2 – Tippen bredvid nasta=n1-stada-klart-garden |
| 3:55 | bekräftelse | du | plats |
| 3:55 | händelse | malKlart | id=n1-stada-klart-garden del=Dag 2 – Tippen bredvid nasta=rolf0-brev |
| 3:55 | bekräftelse | du | plats |
| 3:55 | väntar | du | Gården är STÄDAD, av mig, frivilligt. Mamma skulle aldrig tro det. |
| 3:55 | väntar | du | Vänta på sopbilen. Den lämnar något. |
| 3:55 | MÅL |  | Vänta på sopbilen. Den lämnar något. |
| 3:57 | klar | info:guld | 🗑️ Sopsäcken är över axeln! Nu bär jag 10 skräp. |
| 3:57 | sak | du | Gården är STÄDAD, av mig, frivilligt. Mamma skulle aldrig tro det. |
| 3:57 | kvitto-visas | du | Gården är STÄDAD, av mig, frivilligt. Mamma skulle aldrig tro det. |
| 3:57 | lapp | 📔 Dagbok | Gården är STÄDAD, av mig, frivilligt. Mamma skulle aldrig tro det. |
| 3:57 | dagbokrad | du | Gården är STÄDAD, av mig, frivilligt. Mamma skulle aldrig tro det. |
| 3:57 | notis | dagbok | Gården är STÄDAD, av mig, frivilligt. Mamma skulle aldrig tro det. |
| 3:58 | klar | du | Gården är STÄDAD, av mig, frivilligt. Mamma skulle aldrig tro det. |
| 3:58 | målruta |  | Vänta på sopbilen. Den lämnar något. |
| 3:58 | sak | du | Vänta på sopbilen. Den lämnar något. |
| 3:58 | pil |  | Vänta på sopbilen. Den lämnar något. |
| 3:58 | röst | du | Vänta på sopbilen. Den lämnar något. · MÅL |
| 4:00 | händelse | printStart | sak=kruka |
| 4:01 | brott | KLICK SOM INTE GÅR | "Klicka för att ta på dig den" syns men ett klick gör inte det just nu |
| 4:01 | toast | fel | Ingen ström – trampa cykeln |
| 4:01 | klar | du | Vänta på sopbilen. Den lämnar något. |
| 4:03 | sak |  | (läget ändras) |
| 4:03 | klar |  | (läget ändras) |
| 4:04 | toast | guld | ✅ |
| 4:04 | händelse | printKlar | sak=kruka n=8 |
| 4:05 | händelse | tagitUrPrint | sak=kruka n=1 |
| 4:07 | sak | du | Rolf… gubben i sopbilen. Han har tippen bredvid. Han verkar schysst. |
| 4:07 | notis | tanke | 💭 Rolf… gubben i sopbilen. Han har tippen bredvid. Han verkar schysst. |
| 4:07 | röst | du | Rolf… gubben i sopbilen. Han har tippen bredvid. Han verkar schysst. · STORY |
| 4:10 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 4:12 | händelse | salt | sak=kruka n=1 |
| 4:12 | aliSalt | ali | 105 |
| 4:12 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 4:13 | klar | du | Rolf… gubben i sopbilen. Han har tippen bredvid. Han verkar schysst. |
| 4:20 | upplåst | skrivare | rullstall |
| 4:20 | brott | UPPLÅST | rullstall (skrivare 164 av 60) |
| 4:20 | händelse | upplast | id=rullstall flask=skrivare |
| 4:20 | paket |  | tanke → sms |
| 4:20 | tanke | du | Kvarnen står och väntar för att hållaren är full. Om den rymde fler rullar kunde den mala hela tiden. |
| 4:20 | väntar | du | Kvarnen står och väntar för att hållaren är full. Om den rymde fler rullar kunde den mala hela tiden. |
| 4:20 | väntar | ali | Ali här. Rullställ. Fyra rullar i stället för en. Har ett på hyllan. |
| 4:21 | sak | du | Mina armar… Kvarnen borde veva själv. |
| 4:21 | notis | tanke | 💭 Mina armar… Kvarnen borde veva själv. |
| 4:21 | röst | du | Mina armar… Kvarnen borde veva själv. · STORY |
| 4:22 | händelse | printStart | sak=kruka |
| 4:24 | klar | du | Mina armar… Kvarnen borde veva själv. |
| 4:24 | toast | guld | ✅ |
| 4:24 | händelse | printKlar | sak=kruka n=9 |
| 4:25 | händelse | tagitUrPrint | sak=kruka n=1 |
| 4:30 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 4:32 | händelse | salt | sak=kruka n=1 |
| 4:32 | aliSalt | ali | 105 |
| 4:32 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 4:41 | händelse | printStart | sak=kruka |
| 4:43 | struken | ali | Ali här. Ännu en ritning som blev på riktigt: Kvarnmotor. Semesterkassan växer. Livet växer. |
| 4:43 | struken | mamma | Har du frusit än? |
| 4:45 | toast | guld | ✅ |
| 4:45 | händelse | printKlar | sak=kruka n=10 |
| 4:45 | händelse | tagitUrPrint | sak=kruka n=1 |
| 4:48 | väntar | värld:TUUT! Hej grannen! | TUUT! Hej grannen! |
| 4:48 | paket |  | tanke → ge |
| 4:48 | tanke | du | Flaggan är uppe. Rolf har lämnat något. |
| 4:48 | väntar | du | Flaggan är uppe. Rolf har lämnat något. |
| 4:48 | väntar |  | (läget ändras) |
| 4:49 | skratt | du | falsk tuta |
| 4:51 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 4:51 | sak | ali | Ali här. Rullställ. Fyra rullar i stället för en. Har ett på hyllan. |
| 4:51 | sms | ali | Ali här. Rullställ. Fyra rullar i stället för en. Har ett på hyllan. |
| 4:51 | sms-bubbla | ali | Ali här. Rullställ. Fyra rullar i stället för en. Har ett på hyllan. |
| 4:51 | röst | ali | Ali här. Rullställ. Fyra rullar i stället för en. Har ett på hyllan. · STORY |
| 4:52 | händelse | salt | sak=kruka n=1 |
| 4:52 | aliSalt | ali | 105 |
| 4:52 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 4:57 | klar | ali | Ali här. Rullställ. Fyra rullar i stället för en. Har ett på hyllan. |
| 5:05 | väntar | rolf | Såg att du printar grejer. Kan du göra en sån hä? Kall öl ä viktigt. /Rolf​ |
| 5:05 | paket |  | ge |
| 5:05 | väntar |  | (läget ändras) |
| 5:05 | sak | rolf | Såg att du printar grejer. Kan du göra en sån hä? Kall öl ä viktigt. /Rolf​ |
| 5:05 | lapp | Brev från Rolf | Såg att du printar grejer. Kan du göra en sån hä? Kall öl ä viktigt. /Rolf​ |
| 5:05 | röst | rolf | Såg att du printar grejer. Kan du göra en sån hä? Kall öl ä viktigt. /Rolf​ · STORY |
| 5:05 | händelse | malKlart | id=rolf0-brev del=Dag 2 – Tippen bredvid nasta=rolf0-printa |
| 5:05 | bekräftelse | du | plats |
| 5:05 | väntar | du | Printa ölhållare med kylklamp. |
| 5:06 | MÅL |  | Printa ölhållare med kylklamp |
| 5:08 | målruta |  | Printa ölhållare med kylklamp |
| 5:09 | händelse | printStart | sak=olhallare |
| 5:09 | händelse | malKlart | id=rolf0-printa del=Dag 2 – Tippen bredvid nasta=rolf0-ge |
| 5:09 | bekräftelse | du | plats |
| 5:09 | väntar | du | Ge Rolf ölhållare med kylklamp. |
| 5:09 | MÅL |  | Ge Rolf ölhållare med kylklamp |
| 5:12 | målruta |  | Ge Rolf ölhållare med kylklamp |
| 5:12 | klar | rolf | Såg att du printar grejer. Kan du göra en sån hä? Kall öl ä viktigt. /Rolf​ |
| 5:12 | händelse | brevLast | id=rolf:0 |
| 5:12 | toast | guld | ✅ |
| 5:12 | händelse | printKlar | sak=olhallare n=1 |
| 5:13 | kvittens-bock |  | ✓ Printa ölhållare med kylklamp |
| 5:14 | struken | du | Printa ölhållare med kylklamp. |
| 5:14 | sak | du | Ge Rolf ölhållare med kylklamp. |
| 5:14 | pil |  | Ge Rolf ölhållare med kylklamp |
| 5:14 | röst | du | Ge Rolf ölhållare med kylklamp. · MÅL |
| 5:16 | klar | du | Ge Rolf ölhållare med kylklamp. |
| 5:18 | struken | värld:TUUT! Hej grannen! | TUUT! Hej grannen! |
| 5:18 | sak |  | (läget ändras) |
| 5:18 | klar |  | (läget ändras) |
| 5:32 | sak | du | Kvarnen står och väntar för att hållaren är full. Om den rymde fler rullar kunde den mala hela tiden. |
| 5:32 | notis | tanke | 💭 Kvarnen står och väntar för att hållaren är full. Om den rymde fler rullar kunde den mala hela tiden. |
| 5:32 | röst | du | Kvarnen står och väntar för att hållaren är full. Om den rymde fler rullar kunde den mala hela tiden. · STORY |
| 5:33 | händelse | tagitUrPrint | sak=olhallare n=1 |
| 5:41 | klar | du | Kvarnen står och väntar för att hållaren är full. Om den rymde fler rullar kunde den mala hela tiden. |
| 5:43 | hjälp | kontroll | E: Ryggsäcken och kistan |
| 5:45 | händelse | lagtIPostlada | sak=olhallare rolf=0 jobb=false |
| 5:45 | struken | kedja | rolf0 |
| 5:45 | paket |  | tanke |
| 5:45 | tanke | du | Flaggan uppe. Nu får Rolf hämta den. |
| 5:45 | väntar | du | Flaggan uppe. Nu får Rolf hämta den. |
| 5:45 | sak | du | Flaggan uppe. Nu får Rolf hämta den. |
| 5:45 | notis | tanke | 💭 Flaggan uppe. Nu får Rolf hämta den. |
| 5:45 | röst | du | Flaggan uppe. Nu får Rolf hämta den. · REAKTION |
| 5:45 | händelse | malKlart | id=rolf0-ge del=Dag 2 – Tippen bredvid nasta=vindsnurra |
| 5:45 | bekräftelse | du | plats |
| 5:45 | väntar | du | En vindsnurra på skjulets tak. Då blir det ström när det blåser. |
| 5:45 | MÅL |  | Trampa, printa och sälj |
| 5:47 | målruta |  | Trampa, printa och sälj |
| 5:48 | klar | du | Flaggan uppe. Nu får Rolf hämta den. |
| 5:49 | kvittens-bock |  | ✓ Ge Rolf ölhållare med kylklamp |
| 5:51 | sak | du | En vindsnurra på skjulets tak. Då blir det ström när det blåser. |
| 5:51 | pil |  | Trampa, printa och sälj |
| 5:51 | notis | tanke | 💭 En vindsnurra på skjulets tak. Då blir det ström när det blåser. |
| 5:51 | röst | du | En vindsnurra på skjulets tak. Då blir det ström när det blåser. · MÅL |
| 5:53 | händelse | printStart | sak=kruka |
| 5:53 | toast | fel | Ingen ström – trampa cykeln |
| 5:54 | upplåst | trampa | vindsnurra |
| 5:54 | brott | UPPLÅST | vindsnurra (trampa 28 av 6) |
| 5:54 | händelse | upplast | id=vindsnurra flask=trampa |
| 5:54 | paket |  | tanke → sms |
| 5:54 | tanke | du | Mina ben är slut. Det blåser hela tiden här ute. Tänk om vinden kunde trampa åt mig. |
| 5:54 | väntar | du | Mina ben är slut. Det blåser hela tiden här ute. Tänk om vinden kunde trampa åt mig. |
| 5:54 | väntar | ali | Ali här. Vindsnurra till cykeln. Vinden trampar åt dig. Den är lat, men den jobbar gratis. |
| 5:56 | klar | du | En vindsnurra på skjulets tak. Då blir det ström när det blåser. |
| 5:57 | paket |  | tanke |
| 5:57 | tanke | du | Den blev… spagetti. Ali kallar det modern konst. |
| 5:57 | väntar | du | Den blev… spagetti. Ali kallar det modern konst. |
| 5:57 | skratt | du | plastspagetti |
| 5:57 | toast | guld | ✅ |
| 5:57 | händelse | printKlar | sak=kruka n=11 |
| 5:57 | händelse | tagitUrPrint | sak=spagetti n=1 |
| 6:04 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 6:04 | röst | ali | Rolf gav mig en kanna. Som min farmors. Jag ritade en sak åt honom. Säg inget, han gråter lätt. · STORY |
| 6:04 | butiksbubbla | ali | Rolf gav mig en kanna. Som min farmors. Jag ritade en sak åt honom. Säg inget, han gråter lätt. |
| 6:05 | händelse | salt | sak=spagetti n=1 |
| 6:05 | skratt | du | Ali köper konst |
| 6:05 | aliSalt | ali | 3 |
| 6:05 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 6:13 | händelse | printStart | sak=kruka |
| 6:16 | toast | guld | ✅ |
| 6:16 | händelse | printKlar | sak=kruka n=12 |
| 6:17 | händelse | tagitUrPrint | sak=kruka n=1 |
| 6:18 | sak | du | Flaggan är uppe. Rolf har lämnat något. |
| 6:18 | notis | tanke | 💭 Flaggan är uppe. Rolf har lämnat något. |
| 6:18 | röst | du | Flaggan är uppe. Rolf har lämnat något. · STORY |
| 6:21 | klar | du | Flaggan är uppe. Rolf har lämnat något. |
| 6:23 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 6:23 | sak | ali | Ali här. Vindsnurra till cykeln. Vinden trampar åt dig. Den är lat, men den jobbar gratis. |
| 6:23 | sms | ali | Ali här. Vindsnurra till cykeln. Vinden trampar åt dig. Den är lat, men den jobbar gratis. |
| 6:23 | sms-bubbla | ali | Ali här. Vindsnurra till cykeln. Vinden trampar åt dig. Den är lat, men den jobbar gratis. |
| 6:23 | röst | ali | Ali här. Vindsnurra till cykeln. Vinden trampar åt dig. Den är lat, men den jobbar gratis. · STORY |
| 6:24 | händelse | salt | sak=kruka n=1 |
| 6:24 | aliSalt | ali | 105 |
| 6:24 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 6:31 | klar | ali | Ali här. Vindsnurra till cykeln. Vinden trampar åt dig. Den är lat, men den jobbar gratis. |
| 6:33 | struken | du | Den blev… spagetti. Ali kallar det modern konst. |
| 6:33 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 6:34 | struken | info:guld | 3D-modell köpt – printa vindsnurra till skjultaket |
| 6:34 | händelse | kopt | sak=vindsnurra |
| 6:34 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 6:39 | sak |  | (läget ändras) |
| 6:39 | brev | rolf | rolf:0 |
| 6:39 | klar |  | (läget ändras) |
| 6:43 | sak | du | Mina ben är slut. Det blåser hela tiden här ute. Tänk om vinden kunde trampa åt mig. |
| 6:43 | notis | tanke | 💭 Mina ben är slut. Det blåser hela tiden här ute. Tänk om vinden kunde trampa åt mig. |
| 6:43 | röst | du | Mina ben är slut. Det blåser hela tiden här ute. Tänk om vinden kunde trampa åt mig. · STORY |
| 6:43 | händelse | printStart | sak=byggsats:vindsnurra |
| 6:47 | händelse | printKlar | sak=byggsats:vindsnurra n=1 |
| 6:47 | toast | guld | ✅ |
| 6:48 | väntar | info:guld | 🌬️ Vindsnurran ska upp på skjulets tak. |
| 6:48 | händelse | tagitUrPrint | sak=byggsats:vindsnurra n=1 |
| 6:50 | klar | du | Mina ben är slut. Det blåser hela tiden här ute. Tänk om vinden kunde trampa åt mig. |
| 6:50 | sak | info:guld | 🌬️ Vindsnurran ska upp på skjulets tak. |
| 6:50 | kvitto-visas | info:guld | 🌬️ Vindsnurran ska upp på skjulets tak. |
| 6:50 | toast | guld | 🌬️ Vindsnurran ska upp på skjulets tak. |
| 6:52 | paket |  | tanke |
| 6:52 | tanke | du | Jaha, Rolf har hämtat en ölhållare med kylklamp. |
| 6:52 | väntar | du | Jaha, Rolf har hämtat en ölhållare med kylklamp. |
| 6:52 | klar | info:guld | 🌬️ Vindsnurran ska upp på skjulets tak. |
| 6:52 | upplåst | skrivare | trim_skrivare |
| 6:52 | brott | UPPLÅST | trim_skrivare (skrivare 60 av 60) |
| 6:52 | händelse | upplast | id=trim_skrivare flask=skrivare |
| 6:52 | paket |  | sms |
| 6:52 | väntar | ali | Ali här. Skrivartrim. Jag skruvade på min egen skrivare i natt. Den går fortare nu. Nästan för fort. |
| 6:58 | händelse | placerat | sak=vindsnurra |
| 6:58 | kvittens | du | Den snurrar! Långsamt. Men den snurrar. |
| 6:58 | varför-köad | du | Om det regnar i natt drunknar jag. Ett tak. |
| 6:58 | väntar | du | Den snurrar! Långsamt. Men den snurrar. |
| 6:58 | väntar | info:guld | 🌬️ Vindsnurran sitter på taket – den trampar cykeln åt mig när det blåser |
| 6:58 | monterat | du | byggsats:vindsnurra |
| 6:58 | händelse | monterat | sak=vindsnurra |
| 6:58 | sak | du | Den snurrar! Långsamt. Men den snurrar. |
| 6:58 | notis | tanke | 💭 Den snurrar! Långsamt. Men den snurrar. |
| 6:58 | röst | du | Den snurrar! Långsamt. Men den snurrar. · STORY |
| 6:58 | händelse | malKlart | id=vindsnurra del=Dag 2 – Tippen bredvid nasta=n1-bygg-dorr-skjulet |
| 6:58 | bekräftelse | du | plats |
| 6:58 | struken | du | Jaha, Rolf har hämtat en ölhållare med kylklamp. |
| 6:58 | väntar | du | Det drar från dörrhålet. En dörr kan jag printa. |
| 6:58 | MÅL |  | Bygg en dörr till skjulet |
| 7:01 | målruta |  | Bygg en dörr till skjulet |
| 7:01 | klar | du | Den snurrar! Långsamt. Men den snurrar. |
| 7:04 | sak | du | Det drar från dörrhålet. En dörr kan jag printa. |
| 7:04 | pil |  | Bygg en dörr till skjulet |
| 7:04 | notis | tanke | 💭 Det drar från dörrhålet. En dörr kan jag printa. |
| 7:04 | röst | du | Det drar från dörrhålet. En dörr kan jag printa. · MÅL |
| 7:04 | nick |  | nick:29 |
| 7:06 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 7:07 | struken | info:guld | 3D-modell köpt – printa dörr |
| 7:07 | händelse | kopt | sak=dorr |
| 7:07 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 7:08 | klar | du | Det drar från dörrhålet. En dörr kan jag printa. |
| 7:09 | struken | info:guld | 🌬️ Vindsnurran sitter på taket – den trampar cykeln åt mig när det blåser |
| 7:14 | skratt | du | falsk tuta |
| 7:14 | väntar | värld:TUUT TUUT! | TUUT TUUT! |
| 7:16 | händelse | printStart | sak=byggsats:dorr |
| 7:16 | sak | ali | Ali här. Skrivartrim. Jag skruvade på min egen skrivare i natt. Den går fortare nu. Nästan för fort. |
| 7:16 | sms | ali | Ali här. Skrivartrim. Jag skruvade på min egen skrivare i natt. Den går fortare nu. Nästan för fort. |
| 7:16 | sms-bubbla | ali | Ali här. Skrivartrim. Jag skruvade på min egen skrivare i natt. Den går fortare nu. Nästan för fort. |
| 7:16 | röst | ali | Ali här. Skrivartrim. Jag skruvade på min egen skrivare i natt. Den går fortare nu. Nästan för fort. · STORY |
| 7:19 | toast | bra | Del 1 av 2 klar |
| 7:19 | väntar | notis:Storebrors skrivare: Del 1 av 2 klar | Storebrors skrivare: Del 1 av 2 klar |
| 7:23 | händelse | printKlar | sak=byggsats:dorr n=1 |
| 7:23 | toast | guld | ✅ |
| 7:25 | klar | ali | Ali här. Skrivartrim. Jag skruvade på min egen skrivare i natt. Den går fortare nu. Nästan för fort. |
| 7:34 | struken | värld:TUUT TUUT! | TUUT TUUT! |
| 7:39 | struken | notis:Storebrors skrivare: Del 1 av 2 klar | Storebrors skrivare: Del 1 av 2 klar |
| 7:54 | händelse | tagitUrPrint | sak=byggsats:dorr n=1 |
| 7:54 | paket |  | sms |
| 7:54 | väntar | ali | Ali här. Jag har inte sovit. Inte på grund av AI:n. På grund av dig. Du bygger saker av sopor. Jag har en hel butik och bygger ingenting. Det ska ändras. Kanske. Troligen. |
| 7:59 | väntar | info:guld | Dörr på plats! Trivsel +8 |
| 7:59 | sak | info:guld | Dörr på plats! Trivsel +8 |
| 7:59 | kvitto-visas | info:guld | Dörr på plats! Trivsel +8 |
| 7:59 | toast | guld | Dörr på plats! Trivsel +8 |
| 7:59 | händelse | malKlart | id=n1-bygg-dorr-skjulet del=Dag 2 – Tippen bredvid nasta=sov2 |
| 7:59 | paket |  | lapp |
| 7:59 | väntar | du | Nu vet Ali att jag bor HÄR. Taket läcker. I morgon. |
| 7:59 | paket |  | sms |
| 7:59 | väntar | bror | Mamma ringde mig fyra gånger förresten. Snyggt jobbat 😂 |
| 7:59 | skratt | bror | Mamma ringde mig fyra gånger förresten. |
| 7:59 | bekräftelse | du | plats |
| 7:59 | väntar | du | Klart för idag – sov när du vill. |
| 7:59 | MÅL |  | Klart för idag – sov när du vill |
| 8:01 | klar | info:guld | Dörr på plats! Trivsel +8 |
| 8:02 | målruta |  | Klart för idag – sov när du vill |
| 8:03 | kvittens-bock |  | ✓ Bygg en dörr till skjulet |
| 8:03 | sak | du | Klart för idag – sov när du vill. |
| 8:03 | pil |  | Klart för idag – sov när du vill |
| 8:03 | röst | du | Klart för idag – sov när du vill. · MÅL |
| 8:06 | klar | du | Klart för idag – sov när du vill. |
| 8:06 | väntar | notis:🌇 Klockan är 21. Ali slår igen luckan.  | 🌇 Klockan är 21. Ali slår igen luckan. Dagens jobb är klart – gå in i skjulet och sov i sängen. |
| 8:08 | sak | du | Nu vet Ali att jag bor HÄR. Taket läcker. I morgon. |
| 8:08 | kvallsrad | du | Nu vet Ali att jag bor HÄR. Taket läcker. I morgon. |
| 8:08 | klar | du | Nu vet Ali att jag bor HÄR. Taket läcker. I morgon. |
| 8:13 | nattkort | du | 🌙 Dag 2 är slut. God natt. zzz… Nu vet Ali att jag bor HÄR. Taket läcker. I morgon. DAGENS PRINTAR Blomkruka × 11 Ölhållare med kylklamp × 1 Totalt 12 printar |

<details><summary>Botens handlingar dag 2</summary>

- 0:00 — dag 2 börjar — (260 kr)
- 0:08 popup: "FORTSÄTT" (260 kr)
- 0:11 tjänar pengar till väntar på flaskhalsen för kvarnmotor: 260/300 kr → printar blomkruka (105 kr) (260 kr)
- 0:15 gå till skrivaren (19 m) (260 kr)
- 0:16 printar Blomkruka (260 kr)
- 0:20 tar ut 1 st ur skrivaren (260 kr)
- 0:25 gå till Ali (26 m) (260 kr)
- 0:25 öppnar Alis butik – sälja (260 kr)
- 0:27 säljer hos Ali: +105 kr (365 kr)
- 0:38 tjänar pengar till väntar på flaskhalsen för kvarnmotor: 365/405 kr → printar blomkruka (105 kr) (365 kr)
- 0:44 gå till skrivaren (25 m) (365 kr)
- 0:45 printar Blomkruka (365 kr)
- 0:46 gå till cykeln (1 m) (365 kr)
- 0:50 tar ut 1 st ur skrivaren (365 kr)
- 0:55 gå till Ali (25 m) (365 kr)
- 0:55 öppnar Alis butik – sälja (365 kr)
- 0:57 säljer hos Ali: +105 kr (470 kr)
- 0:59 tjänar pengar till väntar på flaskhalsen för kvarnmotor: 470/510 kr → printar blomkruka (105 kr) (470 kr)
- 1:09 plockar 5 skräp på gården (bär max 6) (470 kr)
- 1:16 gå till kvarnen (34 m) (470 kr)
- 1:22 gå till skrivaren (3 m) (470 kr)
- 1:24 printar Blomkruka (470 kr)
- 1:27 tar ut 1 st ur skrivaren (470 kr)
- 1:33 gå till Ali (28 m) (470 kr)
- 1:33 öppnar Alis butik – sälja (470 kr)
- 1:34 säljer hos Ali: +105 kr (575 kr)
- 1:36 tjänar pengar till väntar på flaskhalsen för kvarnmotor: 575/615 kr → printar blomkruka (105 kr) (575 kr)
- 1:41 gå till skrivaren (25 m) (575 kr)
- 1:43 printar Blomkruka (575 kr)
- 1:44 gå till cykeln (1 m) (575 kr)
- 1:48 tar ut 1 st ur skrivaren (575 kr)
- 1:53 gå till Ali (25 m) (575 kr)
- 1:53 öppnar Alis butik – sälja (575 kr)
- 1:55 säljer hos Ali: +105 kr (680 kr)
- 2:01 tjänar pengar till väntar på flaskhalsen för kvarnmotor: 680/720 kr → printar blomkruka (105 kr) (680 kr)
- 2:06 gå till skrivaren (25 m) (680 kr)
- 2:08 printar Blomkruka (680 kr)
- 2:11 tar ut 1 st ur skrivaren (680 kr)
- 2:16 gå till Ali (25 m) (680 kr)
- 2:16 öppnar Alis butik – sälja (680 kr)
- 2:18 säljer hos Ali: +105 kr (785 kr)
- 2:20 tjänar pengar till väntar på flaskhalsen för kvarnmotor: 785/825 kr → printar blomkruka (105 kr) (785 kr)
- 2:29 plockar 4 skräp på gården (bär max 6) (785 kr)
- 2:35 gå till kvarnen (25 m) (785 kr)
- 2:41 gå till skrivaren (3 m) (785 kr)
- 2:43 printar Blomkruka (785 kr)
- 2:44 gå till cykeln (1 m) (785 kr)
- 2:48 tar ut 1 st ur skrivaren (785 kr)
- 2:53 gå till Ali (27 m) (785 kr)
- 2:53 öppnar Alis butik – sälja (785 kr)
- 2:55 säljer hos Ali: +105 kr (890 kr)
- 3:05 öppnar Alis butik – köpa kvarnmotor (890 kr)
- 3:07 köper kvarnmotor för 50 kr (840 kr)
- 3:20 gå till skrivaren (25 m) (840 kr)
- 3:22 printar Kvarnmotor (840 kr)
- 3:25 tar ut 1 st ur skrivaren (840 kr)
- 3:29 gå till skruva fast kvarnmotorn (3 m) (840 kr)
- 3:43 gå till Rolfs sopsäck (16 m) (840 kr)
- 3:55 tar på korg (840 kr)
- 3:56 tjänar pengar till väntar på sopbilen (BO): 840/900 kr → printar blomkruka (105 kr) (840 kr)
- 3:59 gå till skrivaren (12 m) (840 kr)
- 4:00 printar Blomkruka (840 kr)
- 4:01 gå till cykeln (1 m) (840 kr)
- 4:05 tar ut 1 st ur skrivaren (840 kr)
- 4:10 gå till Ali (25 m) (840 kr)
- 4:10 öppnar Alis butik – sälja (840 kr)
- 4:12 säljer hos Ali: +105 kr (945 kr)
- 4:15 tjänar pengar till väntar på sopbilen (BO): 945/1005 kr → printar blomkruka (105 kr) (945 kr)
- 4:20 gå till skrivaren (25 m) (945 kr)
- 4:22 printar Blomkruka (945 kr)
- 4:25 tar ut 1 st ur skrivaren (945 kr)
- 4:30 gå till Ali (25 m) (945 kr)
- 4:30 öppnar Alis butik – sälja (945 kr)
- 4:32 säljer hos Ali: +105 kr (1050 kr)
- 4:34 tjänar pengar till väntar på sopbilen (BO): 1050/1110 kr → printar blomkruka (105 kr) (1050 kr)
- 4:39 gå till skrivaren (25 m) (1050 kr)
- 4:41 printar Blomkruka (1050 kr)
- 4:42 gå till cykeln (1 m) (1050 kr)
- 4:46 tar ut 1 st ur skrivaren (1050 kr)
- 4:51 gå till Ali (25 m) (1050 kr)
- 4:51 öppnar Alis butik – sälja (1050 kr)
- 4:53 säljer hos Ali: +105 kr (1155 kr)
- 5:05 gå till Rolfs postlåda (31 m) (1155 kr)
- 5:08 gå till skrivaren (7 m) (1155 kr)
- 5:09 printar Ölhållare med kylklamp (1155 kr)
- 5:25 plockar 8 skräp på gården (bär max 10) (1155 kr)
- 5:32 gå till kvarnen (33 m) (1155 kr)
- 5:33 gå till skrivaren (1 m) (1155 kr)
- 5:33 tar ut 1 st ur skrivaren (1155 kr)
- 5:43 valj olhallare: true, vald olhallare, post {"l":null,"tr":null,"tm":[]}, nummer false (1155 kr)
- 5:45 gå till Rolfs postlåda (7 m) (1155 kr)
- 5:50 tjänar pengar till väntar på flaskhalsen för vindsnurra: 1155/1195 kr → printar blomkruka (105 kr) (1155 kr)
- 5:51 gå till skrivaren (6 m) (1155 kr)
- 5:53 printar Blomkruka (1155 kr)
- 5:53 gå till cykeln (1 m) (1155 kr)
- 5:58 tar ut 1 st ur skrivaren (1155 kr)
- 6:04 gå till Ali (26 m) (1155 kr)
- 6:04 öppnar Alis butik – sälja (1155 kr)
- 6:05 säljer hos Ali: +3 kr (1158 kr)
- 6:06 tjänar pengar till väntar på flaskhalsen för vindsnurra: 1158/1195 kr → printar blomkruka (105 kr) (1158 kr)
- 6:11 gå till skrivaren (25 m) (1158 kr)
- 6:13 printar Blomkruka (1158 kr)
- 6:15 gå till cykeln (1 m) (1158 kr)
- 6:17 tar ut 1 st ur skrivaren (1158 kr)
- 6:23 gå till Ali (25 m) (1158 kr)
- 6:23 öppnar Alis butik – sälja (1158 kr)
- 6:24 säljer hos Ali: +105 kr (1263 kr)
- 6:33 öppnar Alis butik – köpa vindsnurra till skjultaket (1263 kr)
- 6:35 köper vindsnurra för 133 kr (1130 kr)
- 6:42 gå till skrivaren (25 m) (1130 kr)
- 6:43 printar Vindsnurra till skjultaket (1130 kr)
- 6:48 tar ut 1 st ur skrivaren (1130 kr)
- 6:58 gå till sätt vindsnurran på taket (20 m) (1130 kr)
- 7:06 gå till Ali (20 m) (1130 kr)
- 7:06 öppnar Alis butik – köpa dörr (1130 kr)
- 7:08 köper dorr för 120 kr (1010 kr)
- 7:14 gå till skrivaren (25 m) (1010 kr)
- 7:16 printar Dörr (2 delar) (1010 kr)
- 7:46 plockar 9 skräp på gården (bär max 10) (1010 kr)
- 7:53 gå till kvarnen (34 m) (1010 kr)
- 7:54 gå till skrivaren (1 m) (1010 kr)
- 7:55 tar ut 1 st ur skrivaren (1010 kr)
- 7:59 gå till skjulet (21 m) (1010 kr)
- 8:10 gå till sängen (1 m) (1010 kr)

</details>

## Dag 3

| Tid | Källa | Vem | Text |
|---|---|---|---|
| 8:13 | vara | ali | ingen |
| 8:13 | händelse | malKlart | id=sov2 del=Dag 2 – Tippen bredvid nasta=rolf1-brev |
| 8:13 | bekräftelse | du | plats |
| 8:13 | vara | ali | kruka |
| 8:13 | MÅL |  | Vänta på sopbilen. Den lämnar något. |
| 0:01 | händelse | dagenBorjar | dag=3 |
| 0:01 | meddelande | du | Dag 3. 19 dagar till jul. Utan tak regnar det in i natt. |
| 0:01 | dagbokkort | du | En skrivare till och taket · Dag 3. 19 dagar till jul. Utan tak regnar det in i natt. |
| 0:01 | röst | du | Dag 3. 19 dagar till jul. En skrivare till och taket. Utan tak regnar det in i natt. · STORY |
| 0:09 | väntar | notis:morgon | Ali vill ha idag: Blomkruka · +50 % |
| 0:09 | händelse | morgonkortStangt | dag=3 |
| 0:09 | målruta |  | Vänta på sopbilen. Den lämnar något. |
| 0:14 | sak | du | (nytt mål i rutan) |
| 0:14 | pil |  | Vänta på sopbilen. Den lämnar något. |
| 0:14 | klar | du | (nytt mål i rutan) |
| 0:16 | struken | notis:🌇 Klockan är 21. Ali slår igen luckan.  | 🌇 Klockan är 21. Ali slår igen luckan. Dagens jobb är klart – gå in i skjulet och sov i sängen. |
| 0:16 | struken | ali | Ali här. Jag har inte sovit. Inte på grund av AI:n. På grund av dig. Du bygger saker av sopor. Jag har en hel butik och bygger ingenting. Det ska ändras. Kanske. Troligen. |
| 0:16 | struken | bror | Mamma ringde mig fyra gånger förresten. Snyggt jobbat 😂 |
| 0:16 | skratt | bror | Mamma ringde mig fyra gånger förresten. |
| 0:17 | sak | notis:morgon | Ali vill ha idag: Blomkruka · +50 % |
| 0:17 | notis |  | Blomkruka · +50 % |
| 0:20 | klar | notis:morgon | Ali vill ha idag: Blomkruka · +50 % |
| 0:28 | väntar | rolf | Den funkar! Hä. Ta så mycke skräp du vill. /Rolf​ |
| 0:29 | sak | rolf | Den funkar! Hä. Ta så mycke skräp du vill. /Rolf​ |
| 0:29 | lapp | Brev från Rolf | Den funkar! Hä. Ta så mycke skräp du vill. /Rolf​ |
| 0:29 | röst | rolf | Den funkar! Hä. Ta så mycke skräp du vill. /Rolf​ · STORY |
| 0:29 | paket |  | tanke |
| 0:29 | tanke | du | Rolfs tipp. Hela högen. |
| 0:29 | väntar | du | Rolfs tipp. Hela högen. |
| 0:29 | monterat | du | byggsats:tippnyckel |
| 0:29 | händelse | monterat | sak=tippnyckel |
| 0:29 | scenInfo | du | Kameran sveper över tippen |
| 0:33 | klar | rolf | Den funkar! Hä. Ta så mycke skräp du vill. /Rolf​ |
| 0:33 | händelse | brevLast | id=rolftack:0 |
| 0:33 | tanke | du | …Det här räcker i hundra år. |
| 0:33 | väntar | du | …Det här räcker i hundra år. |
| 0:34 | sak | du | Rolfs tipp. Hela högen. |
| 0:34 | kvitto-visas | du | Rolfs tipp. Hela högen. |
| 0:34 | notis | tanke | 💭 Rolfs tipp. Hela högen. |
| 0:34 | röst | du | Rolfs tipp. Hela högen. · REAKTION |
| 0:36 | klar | du | Rolfs tipp. Hela högen. |
| 0:40 | händelse | printStart | sak=kruka |
| 0:40 | paket |  | tanke |
| 0:40 | tanke | du | Kajsa. Ut ur skrivaren. Nu. |
| 0:40 | väntar | du | Kajsa. Ut ur skrivaren. Nu. |
| 0:40 | skratt | du | Kajsa i skrivaren |
| 0:40 | skratt | du | falsk tuta |
| 0:45 | toast | guld | ✅ |
| 0:45 | händelse | printKlar | sak=kruka n=13 |
| 0:45 | händelse | tagitUrPrint | sak=kruka n=1 |
| 0:46 | sak | du | …Det här räcker i hundra år. |
| 0:46 | notis | tanke | 💭 …Det här räcker i hundra år. |
| 0:46 | röst | du | …Det här räcker i hundra år. · STORY |
| 0:48 | klar | du | …Det här räcker i hundra år. |
| 0:51 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 0:51 | röst | ali | Jag ser 3D-skrivarvideor på YouTube i lagret. Inte för att jag har tid. Jag har aldrig tid. · STORY |
| 0:51 | butiksbubbla | ali | Jag ser 3D-skrivarvideor på YouTube i lagret. Inte för att jag har tid. Jag har aldrig tid. |
| 0:53 | händelse | salt | sak=kruka n=1 |
| 0:53 | aliSalt | ali | 105 |
| 0:53 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 1:01 | väntar | värld:TUUT! Tjena! | TUUT! Tjena! |
| 1:03 | händelse | printStart | sak=kruka |
| 1:04 | struken | du | Kajsa. Ut ur skrivaren. Nu. |
| 1:06 | sak | värld:TUUT! Tjena! | TUUT! Tjena! |
| 1:06 | bubbla |  | TUUT! Tjena! |
| 1:09 | klar | värld:TUUT! Tjena! | TUUT! Tjena! |
| 1:09 | toast | guld | ✅ |
| 1:09 | händelse | printKlar | sak=kruka n=14 |
| 1:09 | händelse | tagitUrPrint | sak=kruka n=1 |
| 1:15 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 1:16 | händelse | salt | sak=kruka n=1 |
| 1:16 | aliSalt | ali | 105 |
| 1:16 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 1:26 | händelse | printStart | sak=kruka |
| 1:32 | toast | guld | ✅ |
| 1:32 | händelse | printKlar | sak=kruka n=15 |
| 1:32 | händelse | tagitUrPrint | sak=kruka n=1 |
| 1:38 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 1:39 | händelse | salt | sak=kruka n=1 |
| 1:39 | aliSalt | ali | 105 |
| 1:39 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 1:50 | händelse | printStart | sak=kruka |
| 1:55 | toast | guld | ✅ |
| 1:55 | händelse | printKlar | sak=kruka n=16 |
| 1:55 | händelse | tagitUrPrint | sak=kruka n=1 |
| 2:01 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 2:02 | väntar | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått en DÖRR. Och vindsnurra till skjultaket. Mer säger jag inte. Gunnar vet. |
| 2:02 | radio | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått en DÖRR. Och vindsnurra till skjultaket. Mer säger jag inte. Gunnar vet. |
| 2:02 | skratt | du | Radio-Kjelle |
| 2:03 | händelse | salt | sak=kruka n=1 |
| 2:03 | aliSalt | ali | 105 |
| 2:03 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 2:03 | sak | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått en DÖRR. Och vindsnurra till skjultaket. Mer säger jag inte. Gunnar vet. |
| 2:03 | notis |  | 📻 Radio Tippen: Radio Tippen, Kjelle här. Skjulet vid tippen har fått en DÖRR. Och vindsnurra till skjultaket. Mer säger jag inte. Gunnar vet. |
| 2:03 | röst | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått en DÖRR. Och vindsnurra till skjultaket. Mer säger jag inte. Gunnar vet. · REAKTION |
| 2:14 | klar | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått en DÖRR. Och vindsnurra till skjultaket. Mer säger jag inte. Gunnar vet. |
| 2:18 | skratt | du | falsk tuta |
| 2:18 | paket |  | ge |
| 2:18 | väntar |  | (läget ändras) |
| 2:22 | sak |  | (läget ändras) |
| 2:22 | brev | rolf | rolf:1 |
| 2:22 | klar |  | (läget ändras) |
| 2:23 | händelse | printStart | sak=kruka |
| 2:23 | paket |  | tanke |
| 2:23 | tanke | du | Kajsa. Ut ur skrivaren. Nu. |
| 2:23 | väntar | du | Kajsa. Ut ur skrivaren. Nu. |
| 2:23 | skratt | du | Kajsa i skrivaren |
| 2:25 | väntar | info:guld | 🚛 Sopbilen tippade en ny last på soptippen! |
| 2:25 | skratt | du | däcket rullar iväg |
| 2:25 | paket |  | tanke |
| 2:25 | tanke | du | Däcket ville inte stanna. Jag förstår det. |
| 2:25 | väntar | du | Däcket ville inte stanna. Jag förstår det. |
| 2:25 | sak | info:guld | 🚛 Sopbilen tippade en ny last på soptippen! |
| 2:25 | kvitto-visas | info:guld | 🚛 Sopbilen tippade en ny last på soptippen! |
| 2:25 | toast | guld | 🚛 Sopbilen tippade en ny last på soptippen! |
| 2:27 | klar | info:guld | 🚛 Sopbilen tippade en ny last på soptippen! |
| 2:28 | paket |  | tanke |
| 2:28 | tanke | du | Den blev… spagetti. Ali kallar det modern konst. |
| 2:28 | struken | du | Kajsa. Ut ur skrivaren. Nu. |
| 2:28 | väntar | du | Den blev… spagetti. Ali kallar det modern konst. |
| 2:28 | skratt | du | plastspagetti |
| 2:28 | toast | guld | ✅ |
| 2:28 | händelse | printKlar | sak=kruka n=17 |
| 2:28 | händelse | tagitUrPrint | sak=spagetti n=1 |
| 2:32 | väntar | värld:TUUT! Hej grannen! | TUUT! Hej grannen! |
| 2:34 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 2:36 | händelse | salt | sak=spagetti n=1 |
| 2:36 | skratt | du | Ali köper konst |
| 2:36 | aliSalt | ali | 3 |
| 2:36 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 2:37 | sak | du | Däcket ville inte stanna. Jag förstår det. |
| 2:37 | notis | tanke | 💭 Däcket ville inte stanna. Jag förstår det. |
| 2:37 | röst | du | Däcket ville inte stanna. Jag förstår det. · REAKTION |
| 2:40 | klar | du | Däcket ville inte stanna. Jag förstår det. |
| 2:44 | händelse | printStart | sak=kruka |
| 2:49 | sak | du | Den blev… spagetti. Ali kallar det modern konst. |
| 2:49 | notis | tanke | 💭 Den blev… spagetti. Ali kallar det modern konst. |
| 2:49 | röst | du | Den blev… spagetti. Ali kallar det modern konst. · REAKTION |
| 2:49 | toast | guld | ✅ |
| 2:49 | händelse | printKlar | sak=kruka n=18 |
| 2:49 | händelse | tagitUrPrint | sak=kruka n=1 |
| 2:53 | klar | du | Den blev… spagetti. Ali kallar det modern konst. |
| 2:55 | struken | värld:TUUT! Hej grannen! | TUUT! Hej grannen! |
| 2:55 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 2:57 | händelse | salt | sak=kruka n=1 |
| 2:57 | aliSalt | ali | 105 |
| 2:57 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 3:07 | väntar | rolf | Nämen. Kajsa knuffa ner min flasköppnare i tippen. Kan du göra en ny, mä magnet? /Rolf​ |
| 3:07 | paket |  | ge |
| 3:07 | väntar |  | (läget ändras) |
| 3:07 | sak | rolf | Nämen. Kajsa knuffa ner min flasköppnare i tippen. Kan du göra en ny, mä magnet? /Rolf​ |
| 3:07 | lapp | Brev från Rolf | Nämen. Kajsa knuffa ner min flasköppnare i tippen. Kan du göra en ny, mä magnet? /Rolf​ |
| 3:07 | röst | rolf | Nämen. Kajsa knuffa ner min flasköppnare i tippen. Kan du göra en ny, mä magnet? /Rolf​ · STORY |
| 3:07 | händelse | malKlart | id=rolf1-brev del=Dag 3 – En skrivare till och taket nasta=n2-hamta-skrap |
| 3:07 | bekräftelse | du | plats |
| 3:07 | väntar | du | Nyckeln till tippen. Där ligger skräpet i högar. |
| 3:07 | MÅL |  | Hämta 5 skräp på soptippen |
| 3:09 | målruta |  | Hämta 5 skräp på soptippen |
| 3:11 | händelse | malKlart | id=n2-hamta-skrap del=Dag 3 – En skrivare till och taket nasta=rolf1-printa |
| 3:11 | bekräftelse | du | plats |
| 3:11 | struken | kedja | tippen |
| 3:11 | väntar | du | Printa flasköppnare med magnet. |
| 3:11 | MÅL |  | Printa flasköppnare med magnet |
| 3:14 | målruta |  | Printa flasköppnare med magnet |
| 3:14 | klar | rolf | Nämen. Kajsa knuffa ner min flasköppnare i tippen. Kan du göra en ny, mä magnet? /Rolf​ |
| 3:14 | händelse | brevLast | id=rolf:1 |
| 3:15 | kvittens-bock |  | ✓ Hämta 5 skräp på soptippen |
| 3:16 | struken | du | Nyckeln till tippen. Där ligger skräpet i högar. |
| 3:16 | sak | du | Printa flasköppnare med magnet. |
| 3:16 | pil |  | Printa flasköppnare med magnet |
| 3:16 | röst | du | Printa flasköppnare med magnet. · MÅL |
| 3:16 | nick |  | nick:33 |
| 3:18 | tanke | du | En hel kanot. Kvarnen skulle äta upp sig själv. |
| 3:18 | väntar | du | En hel kanot. Kvarnen skulle äta upp sig själv. |
| 3:19 | klar | du | Printa flasköppnare med magnet. |
| 3:21 | sak |  | (läget ändras) |
| 3:21 | klar |  | (läget ändras) |
| 3:23 | händelse | printStart | sak=flaskoppnare |
| 3:23 | händelse | malKlart | id=rolf1-printa del=Dag 3 – En skrivare till och taket nasta=rolf1-ge |
| 3:23 | bekräftelse | du | plats |
| 3:23 | väntar | du | Ge Rolf flasköppnare med magnet. |
| 3:23 | målruta |  | Ge Rolf flasköppnare med magnet |
| 3:23 | MÅL |  | Ge Rolf flasköppnare med magnet |
| 3:23 | sak | du | Ge Rolf flasköppnare med magnet. |
| 3:23 | pil |  | Ge Rolf flasköppnare med magnet |
| 3:23 | röst | du | Ge Rolf flasköppnare med magnet. · MÅL |
| 3:26 | klar | du | Ge Rolf flasköppnare med magnet. |
| 3:27 | toast | guld | ✅ |
| 3:27 | händelse | printKlar | sak=flaskoppnare n=1 |
| 3:27 | kvittens-bock |  | ✓ Printa flasköppnare med magnet |
| 3:28 | händelse | tagitUrPrint | sak=flaskoppnare n=1 |
| 3:30 | händelse | lagtIPostlada | sak=flaskoppnare rolf=1 jobb=false |
| 3:30 | struken | kedja | rolf1 |
| 3:30 | händelse | malKlart | id=rolf1-ge del=Dag 3 – En skrivare till och taket nasta=kopBatteri |
| 3:30 | bekräftelse | du | plats |
| 3:30 | väntar | du | Ali har ett gammalt bilbatteri. Då sparar jag strömmen. |
| 3:30 | målruta |  | Printa och sälj |
| 3:30 | MÅL |  | Printa och sälj |
| 3:30 | sak | du | Ali har ett gammalt bilbatteri. Då sparar jag strömmen. |
| 3:30 | pil |  | Printa och sälj |
| 3:30 | notis | tanke | 💭 Ali har ett gammalt bilbatteri. Då sparar jag strömmen. |
| 3:30 | röst | du | Ali har ett gammalt bilbatteri. Då sparar jag strömmen. · MÅL |
| 3:32 | väntar | mamma | Jag har städat ditt rum. Det tog tre dagar. Jag hittade en macka från i somras. En macka. |
| 3:34 | kvittens-bock |  | ✓ Ge Rolf flasköppnare med magnet |
| 3:35 | klar | du | Ali har ett gammalt bilbatteri. Då sparar jag strömmen. |
| 3:38 | struken | du | En hel kanot. Kvarnen skulle äta upp sig själv. |
| 3:40 | händelse | printStart | sak=kruka |
| 3:45 | toast | guld | ✅ |
| 3:45 | händelse | printKlar | sak=kruka n=19 |
| 3:45 | händelse | tagitUrPrint | sak=kruka n=1 |
| 3:50 | hjälp | kontroll | E: Ryggsäcken och kistan |
| 3:50 | strömdipp | du | cykelbatteri |
| 3:50 | paket |  | tanke |
| 3:50 | tanke | du | Den stannar. Strömmen räcker inte till alla maskiner. |
| 3:50 | väntar | du | Den stannar. Strömmen räcker inte till alla maskiner. |
| 3:50 | sak | du | Den stannar. Strömmen räcker inte till alla maskiner. |
| 3:50 | notis | tanke | 💭 Den stannar. Strömmen räcker inte till alla maskiner. |
| 3:50 | röst | du | Den stannar. Strömmen räcker inte till alla maskiner. · STORY |
| 3:52 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 3:53 | händelse | salt | sak=kruka n=1 |
| 3:53 | aliSalt | ali | 105 |
| 3:53 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 3:54 | klar | du | Den stannar. Strömmen räcker inte till alla maskiner. |
| 4:03 | händelse | printStart | sak=kruka |
| 4:03 | toast | fel | Ingen ström – maskinerna drar mer än du får in. Bygg en solpanel |
| 4:05 | skratt | du | falsk tuta |
| 4:07 | upplåst | strom | cykelbatteri |
| 4:07 | brott | UPPLÅST | cykelbatteri (strom 60 av 15) |
| 4:07 | händelse | upplast | id=cykelbatteri flask=strom |
| 4:07 | paket |  | tanke → sms |
| 4:07 | tanke | du | Powerbanken räcker till en nyckelring. Sen är det trampa igen. |
| 4:07 | väntar | du | Powerbanken räcker till en nyckelring. Sen är det trampa igen. |
| 4:07 | väntar | ali | Ali här. Bilbatteriet ur min gamla Volvo står i lagret. Det sparar mer ström än powerbanken. |
| 4:21 | sak | du | Powerbanken räcker till en nyckelring. Sen är det trampa igen. |
| 4:21 | notis | tanke | 💭 Powerbanken räcker till en nyckelring. Sen är det trampa igen. |
| 4:21 | röst | du | Powerbanken räcker till en nyckelring. Sen är det trampa igen. · STORY |
| 4:22 | paket |  | tanke |
| 4:22 | tanke | du | Jaha, Rolf har hämtat en flasköppnare med magnet. |
| 4:22 | väntar | du | Jaha, Rolf har hämtat en flasköppnare med magnet. |
| 4:26 | toast | guld | ✅ |
| 4:26 | händelse | printKlar | sak=kruka n=20 |
| 4:26 | händelse | tagitUrPrint | sak=kruka n=1 |
| 4:26 | klar | du | Powerbanken räcker till en nyckelring. Sen är det trampa igen. |
| 4:32 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 4:33 | händelse | salt | sak=kruka n=1 |
| 4:33 | aliSalt | ali | 105 |
| 4:33 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 4:34 | sak | ali | Ali här. Bilbatteriet ur min gamla Volvo står i lagret. Det sparar mer ström än powerbanken. |
| 4:34 | sms | ali | Ali här. Bilbatteriet ur min gamla Volvo står i lagret. Det sparar mer ström än powerbanken. |
| 4:34 | sms-bubbla | ali | Ali här. Bilbatteriet ur min gamla Volvo står i lagret. Det sparar mer ström än powerbanken. |
| 4:34 | röst | ali | Ali här. Bilbatteriet ur min gamla Volvo står i lagret. Det sparar mer ström än powerbanken. · STORY |
| 4:36 | väntar | bud | (tips) |
| 4:42 | klar | ali | Ali här. Bilbatteriet ur min gamla Volvo står i lagret. Det sparar mer ström än powerbanken. |
| 4:44 | sak | bud | (tips) |
| 4:45 | klar | bud | (tips) |
| 4:47 | struken | du | Jaha, Rolf har hämtat en flasköppnare med magnet. |
| 4:47 | meddelande | mamma | Vem är den där Ali? Är han snäll? Betalar han dig ordentligt? |
| 4:49 | röst | mamma | Vem är den där Ali? Är han snäll? Betalar han dig ordentligt? · STORY |
| 4:57 | paket |  | sms |
| 4:57 | väntar | mamma | Typ? Jag ringer honom. Vad heter butiken? Jag hittar den. |
| 5:05 | händelse | brevLast | id=m_ali |
| 5:06 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 5:08 | toast | guld | 🔋 Bilbatteriet ska kopplas in på cykeln. |
| 5:08 | händelse | kopt | sak=cykelbatteri |
| 5:08 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 5:08 | brott | SMS-FORM ANSIKTE MOT ANSIKTE | Ali här. Batteriet ur min gamla Volvo. Bilen dog 2 |
| 5:08 | röst | ali | Ali här. Batteriet ur min gamla Volvo. Bilen dog 2016. Batteriet vägrade. · STORY |
| 5:08 | butiksbubbla | ali | Ali här. Batteriet ur min gamla Volvo. Bilen dog 2016. Batteriet vägrade. |
| 5:16 | struken | kedja | dag2 |
| 5:16 | väntar | info:guld | 🔋 Bilbatteriet är inkopplat – skrivaren printar klart även när du slutar trampa |
| 5:16 | monterat | du | byggsats:cykelbatteri |
| 5:16 | händelse | monterat | sak=cykelbatteri |
| 5:16 | sak | info:guld | 🔋 Bilbatteriet är inkopplat – skrivaren printar klart även när du slutar trampa |
| 5:16 | kvitto-visas | info:guld | 🔋 Bilbatteriet är inkopplat – skrivaren printar klart även när du slutar trampa |
| 5:16 | toast | guld | 🔋 Bilbatteriet är inkopplat – skrivaren printar klart även när du slutar trampa |
| 5:16 | händelse | malKlart | id=kopBatteri del=Dag 3 – En skrivare till och taket nasta=ryggkorg |
| 5:16 | bekräftelse | du | plats |
| 5:16 | väntar | du | Jag springer för mycket. Med en ryggkorg bär jag tio saker. |
| 5:16 | MÅL |  | Plocka skräp och mal det |
| 5:16 | upplåst | bara | ryggkorg |
| 5:16 | brott | UPPLÅST | ryggkorg (bara 4 av 3) |
| 5:16 | händelse | upplast | id=ryggkorg flask=bara |
| 5:16 | paket |  | tanke → sms |
| 5:16 | tanke | du | Säcken är full igen. Jag behöver något att bära mer i. |
| 5:16 | väntar | du | Säcken är full igen. Jag behöver något att bära mer i. |
| 5:16 | väntar | ali | Ali här. En ryggkorg. AI:n ritade den efter en bild på min mormor. Den rymmer tio. |
| 5:18 | klar | info:guld | 🔋 Bilbatteriet är inkopplat – skrivaren printar klart även när du slutar trampa |
| 5:18 | målruta |  | Bygg ryggkorgen – bär 10 skräp |
| 5:20 | kvittens-bock |  | ✓ Köp Alis gamla bilbatteri |
| 5:20 | sak | du | Jag springer för mycket. Med en ryggkorg bär jag tio saker. |
| 5:20 | pil |  | Bygg ryggkorgen – bär 10 skräp |
| 5:20 | notis | tanke | 💭 Jag springer för mycket. Med en ryggkorg bär jag tio saker. |
| 5:20 | röst | du | Jag springer för mycket. Med en ryggkorg bär jag tio saker. · MÅL |
| 5:20 | nick |  | nick:36 |
| 5:25 | klar | du | Jag springer för mycket. Med en ryggkorg bär jag tio saker. |
| 5:27 | sak | du | Säcken är full igen. Jag behöver något att bära mer i. |
| 5:27 | notis | tanke | 💭 Säcken är full igen. Jag behöver något att bära mer i. |
| 5:27 | röst | du | Säcken är full igen. Jag behöver något att bära mer i. · STORY |
| 5:31 | klar | du | Säcken är full igen. Jag behöver något att bära mer i. |
| 5:34 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 5:36 | struken | info:guld | 3D-modell köpt – printa ryggkorg |
| 5:36 | händelse | kopt | sak=ryggkorg |
| 5:36 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 5:36 | struken | ali | Ali här. En ryggkorg. AI:n ritade den efter en bild på min mormor. Den rymmer tio. |
| 5:39 | sak | mamma | Typ? Jag ringer honom. Vad heter butiken? Jag hittar den. |
| 5:39 | sms | mamma | Typ? Jag ringer honom. Vad heter butiken? Jag hittar den. |
| 5:39 | sms-bubbla | mamma | Typ? Jag ringer honom. Vad heter butiken? Jag hittar den. |
| 5:39 | röst | mamma | Typ? Jag ringer honom. Vad heter butiken? Jag hittar den. · STORY |
| 5:44 | klar | mamma | Typ? Jag ringer honom. Vad heter butiken? Jag hittar den. |
| 5:45 | händelse | printStart | sak=byggsats:ryggkorg |
| 5:50 | toast | bra | Del 1 av 2 klar |
| 5:56 | händelse | printKlar | sak=byggsats:ryggkorg n=1 |
| 5:56 | toast | guld | ✅ |
| 5:57 | väntar | info:guld | Ryggkorg ska jag ha på mig. |
| 5:57 | händelse | tagitUrPrint | sak=byggsats:ryggkorg n=1 |
| 5:57 | paket |  | sms |
| 5:57 | väntar | ali | Ali här. Du printade Ryggkorg från min ritning. Och det FUNKAR? Jag har bara sett sånt på YouTube. |
| 5:57 | sak | info:guld | Ryggkorg ska jag ha på mig. |
| 5:57 | kvitto-visas | info:guld | Ryggkorg ska jag ha på mig. |
| 5:57 | toast | guld | Ryggkorg ska jag ha på mig. |
| 5:59 | klar | info:guld | Ryggkorg ska jag ha på mig. |
| 6:01 | väntar | info:guld | 🧺 Ryggkorgen sitter på! Nu bär jag 16 skräp. |
| 6:01 | tog på | du | byggsats:ryggkorg |
| 6:01 | händelse | monterat | sak=ryggkorg |
| 6:01 | sak | info:guld | 🧺 Ryggkorgen sitter på! Nu bär jag 16 skräp. |
| 6:01 | kvitto-visas | info:guld | 🧺 Ryggkorgen sitter på! Nu bär jag 16 skräp. |
| 6:01 | toast | guld | 🧺 Ryggkorgen sitter på! Nu bär jag 16 skräp. |
| 6:01 | händelse | malKlart | id=ryggkorg del=Dag 3 – En skrivare till och taket nasta=n2-bygg-arbetsbord |
| 6:01 | bekräftelse | du | plats |
| 6:01 | väntar | du | Ett arbetsbord bredvid skrivaren. Skrivare M ska stå på det. |
| 6:01 | MÅL |  | Bygg ett arbetsbord |
| 6:03 | klar | info:guld | 🧺 Ryggkorgen sitter på! Nu bär jag 16 skräp. |
| 6:03 | målruta |  | Bygg ett arbetsbord |
| 6:05 | kvittens-bock |  | ✓ Bygg ryggkorgen – bär 10 skräp |
| 6:05 | sak | du | Ett arbetsbord bredvid skrivaren. Skrivare M ska stå på det. |
| 6:05 | pil |  | Bygg ett arbetsbord |
| 6:05 | notis | tanke | 💭 Ett arbetsbord bredvid skrivaren. Skrivare M ska stå på det. |
| 6:05 | röst | du | Ett arbetsbord bredvid skrivaren. Skrivare M ska stå på det. · MÅL |
| 6:05 | nick |  | nick:37 |
| 6:07 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 6:08 | struken | info:guld | 3D-modell köpt – printa arbetsbord |
| 6:08 | händelse | kopt | sak=bord |
| 6:08 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 6:10 | klar | du | Ett arbetsbord bredvid skrivaren. Skrivare M ska stå på det. |
| 6:17 | händelse | printStart | sak=byggsats:bord |
| 6:24 | toast | bra | Del 1 av 3 klar |
| 6:24 | sak | ali | Ali här. Du printade Ryggkorg från min ritning. Och det FUNKAR? Jag har bara sett sånt på YouTube. |
| 6:24 | sms | ali | Ali här. Du printade Ryggkorg från min ritning. Och det FUNKAR? Jag har bara sett sånt på YouTube. |
| 6:24 | sms-bubbla | ali | Ali här. Du printade Ryggkorg från min ritning. Och det FUNKAR? Jag har bara sett sånt på YouTube. |
| 6:24 | röst | ali | Ali här. Du printade Ryggkorg från min ritning. Och det FUNKAR? Jag har bara sett sånt på YouTube. · REAKTION |
| 6:28 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 6:33 | klar | ali | Ali här. Du printade Ryggkorg från min ritning. Och det FUNKAR? Jag har bara sett sånt på YouTube. |
| 6:35 | väntar | värld:Mjau. | Mjau. |
| 6:41 | toast | bra | Del 2 av 3 klar |
| 6:42 | paket |  | tanke |
| 6:42 | tanke | du | Jaha. En kalsong. Använd. |
| 6:42 | väntar | du | Jaha. En kalsong. Använd. |
| 6:42 | skratt | du | kvarnen spottar |
| 6:48 | händelse | printKlar | sak=byggsats:bord n=1 |
| 6:48 | toast | guld | ✅ |
| 6:50 | händelse | tagitUrPrint | sak=byggsats:bord n=1 |
| 6:53 | händelse | placerat | sak=bord |
| 6:53 | händelse | malKlart | id=n2-bygg-arbetsbord del=Dag 3 – En skrivare till och taket nasta=n2-bygg-skrivare-m |
| 6:53 | bekräftelse | du | plats |
| 6:53 | väntar | du | Skrivare M på bordet. Två skrivare, dubbelt så mycket. |
| 6:53 | målruta |  | Printa och sälj |
| 6:53 | MÅL |  | Printa och sälj |
| 6:53 | upplåst | skrivare | skrivare2 |
| 6:53 | brott | UPPLÅST | skrivare2 (skrivare 321 av 60) |
| 6:53 | händelse | upplast | id=skrivare2 flask=skrivare |
| 6:53 | paket |  | tanke → sms |
| 6:53 | tanke | du | Kvarnen hinner mer än skrivaren. Jag behöver en skrivare till. |
| 6:53 | väntar | du | Kvarnen hinner mer än skrivaren. Jag behöver en skrivare till. |
| 6:53 | väntar | ali | Ali här. Skrivare M har kommit. Två och en halv gånger snabbare. Snabbare än jag. Jag har inte varit snabb sedan 1998. |
| 6:53 | sak | du | Skrivare M på bordet. Två skrivare, dubbelt så mycket. |
| 6:53 | pil |  | Bygg Skrivare M på bordet |
| 6:53 | notis | tanke | 💭 Skrivare M på bordet. Två skrivare, dubbelt så mycket. |
| 6:53 | röst | du | Skrivare M på bordet. Två skrivare, dubbelt så mycket. · MÅL |
| 6:53 | nick |  | nick:38 |
| 6:57 | kvittens-bock |  | ✓ Bygg ett arbetsbord |
| 6:57 | skratt | du | falsk tuta |
| 6:57 | väntar | värld:TUUT! Tjena! | TUUT! Tjena! |
| 6:57 | klar | du | Skrivare M på bordet. Två skrivare, dubbelt så mycket. |
| 6:59 | struken | värld:Mjau. | Mjau. |
| 7:03 | struken | du | Jaha. En kalsong. Använd. |
| 7:04 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 7:06 | skratt | du | Alis dyr-pling |
| 7:06 | struken | info:guld | 3D-modell köpt – printa skrivare M |
| 7:06 | händelse | kopt | sak=skrivare2 |
| 7:06 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 7:06 | struken | ali | Ali här. Skrivare M har kommit. Två och en halv gånger snabbare. Snabbare än jag. Jag har inte varit snabb sedan 1998. |
| 7:10 | väntar | mamma | Var är du? |
| 7:14 | händelse | printStart | sak=byggsats:skrivare2 |
| 7:20 | struken | värld:TUUT! Tjena! | TUUT! Tjena! |
| 7:23 | toast | bra | Del 1 av 5 klar |
| 7:26 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 7:43 | toast | bra | Del 2 av 5 klar |
| 7:52 | toast | bra | Del 3 av 5 klar |
| 8:01 | toast | bra | Del 4 av 5 klar |
| 8:08 | sak | du | Kvarnen hinner mer än skrivaren. Jag behöver en skrivare till. |
| 8:08 | notis | tanke | 💭 Kvarnen hinner mer än skrivaren. Jag behöver en skrivare till. |
| 8:08 | röst | du | Kvarnen hinner mer än skrivaren. Jag behöver en skrivare till. · STORY |
| 8:10 | händelse | printKlar | sak=byggsats:skrivare2 n=1 |
| 8:10 | toast | guld | ✅ |
| 8:12 | händelse | tagitUrPrint | sak=byggsats:skrivare2 n=1 |
| 8:13 | klar | du | Kvarnen hinner mer än skrivaren. Jag behöver en skrivare till. |
| 8:15 | händelse | placerat | sak=skrivare2 |
| 8:15 | struken | kedja | skrivareM |
| 8:15 | paket |  | tanke |
| 8:15 | tanke | du | Den här måste stå i linjen vid kvarnen, annars når inte slangen. |
| 8:15 | väntar | du | Den här måste stå i linjen vid kvarnen, annars når inte slangen. |
| 8:15 | händelse | malKlart | id=n2-bygg-skrivare-m del=Dag 3 – En skrivare till och taket nasta=n2-lagg-plattak-skjulet |
| 8:15 | bekräftelse | du | plats |
| 8:15 | lapp-kö | 📱 Storebror | VA?! Du har byggt en skrivare TILL?? Du har typ en printfarm nu. Okej. Det är faktiskt ganska ballt. 🔥 |
| 8:15 | väntar | bror | VA?! Du har byggt en skrivare TILL?? Du har typ en printfarm nu. Okej. Det är faktiskt ganska ballt. 🔥 |
| 8:15 | väntar | du | Det regnar in. Plåt på taket, så slipper jag sova i en pöl. |
| 8:15 | MÅL |  | Lägg plåttak på skjulet |
| 8:15 | målruta |  | Lägg plåttak på skjulet |
| 8:15 | sak | du | Det regnar in. Plåt på taket, så slipper jag sova i en pöl. |
| 8:15 | pil |  | Lägg plåttak på skjulet |
| 8:15 | notis | tanke | 💭 Det regnar in. Plåt på taket, så slipper jag sova i en pöl. |
| 8:15 | röst | du | Det regnar in. Plåt på taket, så slipper jag sova i en pöl. · MÅL |
| 8:16 | nick |  | nick:39 |
| 8:19 | kvittens-bock |  | ✓ Bygg Skrivare M på bordet |
| 8:20 | klar | du | Det regnar in. Plåt på taket, så slipper jag sova i en pöl. |
| 8:27 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 8:29 | struken | info:guld | 3D-modell köpt – printa plåttak |
| 8:29 | händelse | kopt | sak=tak |
| 8:29 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 8:38 | väntar | rolf | Morgonbulle på kontoret me polarna. Bengt har ny keps. Vi pratade om den i en timme. Den e grön. /R |
| 8:38 | väntar | mamma | Var är du? |
| 8:40 | tanke | du | Fastpressad. Den sitter som i betong. |
| 8:40 | väntar | du | Fastpressad. Den sitter som i betong. |
| 8:40 | tanke | du | Tratten är stor som en kaffekopp. Tunnan är stor som jag. |
| 8:40 | struken | du | Fastpressad. Den sitter som i betong. |
| 8:40 | väntar | du | Tratten är stor som en kaffekopp. Tunnan är stor som jag. |
| 8:40 | tanke | du | En husvagn mitt i tippen. Och grinden är låst. |
| 8:40 | struken | du | Tratten är stor som en kaffekopp. Tunnan är stor som jag. |
| 8:40 | väntar | du | En husvagn mitt i tippen. Och grinden är låst. |
| 8:40 | sak | du | En husvagn mitt i tippen. Och grinden är låst. |
| 8:40 | notis | tanke | 💭 En husvagn mitt i tippen. Och grinden är låst. |
| 8:40 | röst | du | En husvagn mitt i tippen. Och grinden är låst. · REAKTION |
| 8:43 | klar | du | En husvagn mitt i tippen. Och grinden är låst. |
| 8:50 | händelse | printStart | sak=byggsats:tak |
| 8:50 | toast | bra | 🔗 Slangen kopplad |
| 8:52 | väntar | värld:TUUT TUUT! | TUUT TUUT! |
| 8:54 | toast | bra | Del 1 av 3 klar |
| 8:58 | toast | bra | Del 2 av 3 klar |
| 9:00 | toast | fel | Ingen ström – trampa cykeln |
| 9:04 | struken | mamma | Jag har städat ditt rum. Det tog tre dagar. Jag hittade en macka från i somras. En macka. |
| 9:10 | händelse | printKlar | sak=byggsats:tak n=1 |
| 9:10 | toast | guld | ✅ |
| 9:11 | händelse | tagitUrPrint | sak=byggsats:tak n=1 |
| 9:12 | struken | värld:TUUT TUUT! | TUUT TUUT! |
| 9:16 | väntar | info:guld | Plåttak på plats! Trivsel +12 |
| 9:16 | sak | info:guld | Plåttak på plats! Trivsel +12 |
| 9:16 | kvitto-visas | info:guld | Plåttak på plats! Trivsel +12 |
| 9:16 | toast | guld | Plåttak på plats! Trivsel +12 |
| 9:16 | händelse | malKlart | id=n2-lagg-plattak-skjulet del=Dag 3 – En skrivare till och taket nasta=sov3 |
| 9:16 | paket |  | lapp |
| 9:16 | väntar | du | Nu vet Rolf att jag bor HÄR. Benen orkar inte trampa mer. |
| 9:16 | bekräftelse | du | plats |
| 9:16 | MÅL |  | Klart för idag – sov när du vill |
| 9:18 | paket |  | replik |
| 9:18 | väntar | rolf | Hoppa in. Ja ska visa dej en grej. |
| 9:18 | skratt | du | falsk tuta |
| 9:18 | klar | info:guld | Plåttak på plats! Trivsel +12 |
| 9:18 | målruta |  | Klart för idag – sov när du vill |
| 9:20 | kvittens-bock |  | ✓ Lägg plåttak på skjulet |
| 9:20 | sak | du | (nytt mål i rutan) |
| 9:20 | pil |  | Klart för idag – sov när du vill |
| 9:20 | klar | du | (nytt mål i rutan) |
| 9:22 | sak | du | Nu vet Rolf att jag bor HÄR. Benen orkar inte trampa mer. |
| 9:22 | kvallsrad | du | Nu vet Rolf att jag bor HÄR. Benen orkar inte trampa mer. |
| 9:22 | klar | du | Nu vet Rolf att jag bor HÄR. Benen orkar inte trampa mer. |
| 9:23 | väntar | notis:🌇 Klockan är 21. Ali slår igen luckan.  | 🌇 Klockan är 21. Ali slår igen luckan. Dagens jobb är klart – gå in i skjulet och sov i sängen. |
| 9:30 | sak | bror | VA?! Du har byggt en skrivare TILL?? Du har typ en printfarm nu. Okej. Det är faktiskt ganska ballt. 🔥 |
| 9:30 | sms | bror | VA?! Du har byggt en skrivare TILL?? Du har typ en printfarm nu. Okej. Det är faktiskt ganska ballt. 🔥 |
| 9:30 | sms-bubbla | bror | VA?! Du har byggt en skrivare TILL?? Du har typ en printfarm nu. Okej. Det är faktiskt ganska ballt. 🔥 |
| 9:30 | röst | bror | VA?! Du har byggt en skrivare TILL?? Du har typ en printfarm nu. Okej. Det är faktiskt ganska ballt. 🔥 · STORY |
| 9:34 | scenInfo | rolf | Rolf kör upp till sin bänk |
| 9:38 | röst | rolf | Kall öl ä viktigt. · STORY |
| 9:38 | bubbla | rolf | Kall öl ä viktigt. |
| 9:39 | klar | bror | VA?! Du har byggt en skrivare TILL?? Du har typ en printfarm nu. Okej. Det är faktiskt ganska ballt. 🔥 |
| 9:46 | röst | rolf | Ja kommer hit varje kväll. Förr va vi två på bänken. · STORY |
| 9:46 | bubbla | rolf | Ja kommer hit varje kväll. Förr va vi två på bänken. |
| 9:47 | skratt | du | falsk tuta |
| 9:58 | skratt | du | tummen på fotot |
| 9:58 | väntar | foto | Tak över huvudet (och min tumme) |
| 9:58 | paket |  | tanke |
| 9:58 | tanke | du | I natt somnar jag torr. Det börjar bli ett hem. |
| 9:58 | väntar | du | I natt somnar jag torr. Det börjar bli ett hem. |
| 10:04 | röst | rolf | Dä där ä Bengt-Åke. Vinka int. · STORY |
| 10:04 | bubbla | rolf | Dä där ä Bengt-Åke. Vinka int. |
| 10:19 | röst | rolf | Den ä skyldig mej pengar. · STORY |
| 10:19 | bubbla | rolf | Den ä skyldig mej pengar. |
| 10:28 | skratt | du | tummen på fotot |
| 10:28 | väntar | foto | Rolfs bänk (och min tumme) |
| 10:28 | paket |  | tanke |
| 10:28 | tanke | du | Han kommer hit varje kväll. Nu vet jag var. |
| 10:28 | väntar | du | Han kommer hit varje kväll. Nu vet jag var. |
| 10:28 | skratt | du | Rolfs bänk |
| 10:34 | sak | du | Den här måste stå i linjen vid kvarnen, annars når inte slangen. |
| 10:34 | notis | tanke | 💭 Den här måste stå i linjen vid kvarnen, annars når inte slangen. |
| 10:34 | röst | du | Den här måste stå i linjen vid kvarnen, annars når inte slangen. · STORY |
| 10:36 | lapp | Dagbok | Tre dagar. Tänk om tre veckor. |
| 10:37 | röst | du | Tre dagar. Tänk om tre veckor. · REAKTION |
| 10:40 | klar | du | Den här måste stå i linjen vid kvarnen, annars når inte slangen. |
| 10:42 | tanke | du | Hård plast. Lilla kvarnen skulle explodera. Eller jag. |
| 10:42 | väntar | du | Hård plast. Lilla kvarnen skulle explodera. Eller jag. |
| 10:52 | nattkort | du | 🌙 Dag 3 är slut. God natt. zzz… Nu vet Rolf att jag bor HÄR. Benen orkar inte trampa mer. DAGENS PRINTAR Blomkruka × 8 Flasköppnare med magnet × 1 Totalt 9 pri |

<details><summary>Botens handlingar dag 3</summary>

- 0:00 — dag 3 börjar — (1010 kr)
- 0:09 popup: "FORTSÄTT" (1010 kr)
- 0:22 gå till Rolfs postlåda (28 m) (1010 kr)
- 0:28 panel: "Rolfs postlåda
Det här låg i l" (1070 kr)
- 0:29 gå till sätt nyckeln i låset (3 m) (1070 kr)
- 0:36 tjänar pengar till väntar på sopbilen (BO): 1070/1130 kr → printar blomkruka (105 kr) (1070 kr)
- 0:38 gå till skrivaren (7 m) (1070 kr)
- 0:40 printar Blomkruka (1070 kr)
- 0:46 tar ut 1 st ur skrivaren (1070 kr)
- 0:51 gå till Ali (28 m) (1070 kr)
- 0:51 öppnar Alis butik – sälja (1070 kr)
- 0:53 säljer hos Ali: +105 kr (1175 kr)
- 0:56 tjänar pengar till väntar på sopbilen (BO): 1175/1235 kr → printar blomkruka (105 kr) (1175 kr)
- 1:02 gå till skrivaren (25 m) (1175 kr)
- 1:03 printar Blomkruka (1175 kr)
- 1:09 tar ut 1 st ur skrivaren (1175 kr)
- 1:15 gå till Ali (25 m) (1175 kr)
- 1:15 öppnar Alis butik – sälja (1175 kr)
- 1:16 säljer hos Ali: +105 kr (1280 kr)
- 1:20 tjänar pengar till väntar på sopbilen (BO): 1280/1340 kr → printar blomkruka (105 kr) (1280 kr)
- 1:25 gå till skrivaren (25 m) (1280 kr)
- 1:26 printar Blomkruka (1280 kr)
- 1:33 tar ut 1 st ur skrivaren (1280 kr)
- 1:38 gå till Ali (25 m) (1280 kr)
- 1:38 öppnar Alis butik – sälja (1280 kr)
- 1:40 säljer hos Ali: +105 kr (1385 kr)
- 1:43 tjänar pengar till väntar på sopbilen (BO): 1385/1445 kr → printar blomkruka (105 kr) (1385 kr)
- 1:48 gå till skrivaren (25 m) (1385 kr)
- 1:50 printar Blomkruka (1385 kr)
- 1:56 tar ut 1 st ur skrivaren (1385 kr)
- 2:01 gå till Ali (25 m) (1385 kr)
- 2:01 öppnar Alis butik – sälja (1385 kr)
- 2:03 säljer hos Ali: +105 kr (1490 kr)
- 2:16 tjänar pengar till väntar på sopbilen (BO): 1490/1550 kr → printar blomkruka (105 kr) (1490 kr)
- 2:21 gå till skrivaren (25 m) (1490 kr)
- 2:23 printar Blomkruka (1490 kr)
- 2:29 tar ut 1 st ur skrivaren (1490 kr)
- 2:34 gå till Ali (25 m) (1490 kr)
- 2:34 öppnar Alis butik – sälja (1490 kr)
- 2:36 säljer hos Ali: +3 kr (1493 kr)
- 2:37 tjänar pengar till väntar på sopbilen (BO): 1493/1550 kr → printar blomkruka (105 kr) (1493 kr)
- 2:42 gå till skrivaren (25 m) (1493 kr)
- 2:44 printar Blomkruka (1493 kr)
- 2:50 tar ut 1 st ur skrivaren (1493 kr)
- 2:55 gå till Ali (25 m) (1493 kr)
- 2:55 öppnar Alis butik – sälja (1493 kr)
- 2:57 säljer hos Ali: +105 kr (1598 kr)
- 3:07 gå till Rolfs postlåda (31 m) (1598 kr)
- 3:16 plockar 10 skräp på tippen (bär max 10) (1598 kr)
- 3:18 gå till kvarnen (8 m) (1598 kr)
- 3:22 gå till skrivaren (3 m) (1598 kr)
- 3:23 printar Flasköppnare med magnet (1598 kr)
- 3:28 tar ut 1 st ur skrivaren (1598 kr)
- 3:28 valj flaskoppnare: true, vald flaskoppnare, post {"l":null,"tr":null,"tm":[]}, nummer false (1598 kr)
- 3:30 gå till Rolfs postlåda (6 m) (1598 kr)
- 3:37 tjänar pengar till väntar på flaskhalsen för cykelbatteri: 1598/1638 kr → printar blomkruka (105 kr) (1598 kr)
- 3:38 gå till skrivaren (6 m) (1598 kr)
- 3:40 printar Blomkruka (1598 kr)
- 3:46 tar ut 1 st ur skrivaren (1598 kr)
- 3:52 gå till Ali (28 m) (1598 kr)
- 3:52 öppnar Alis butik – sälja (1598 kr)
- 3:53 säljer hos Ali: +105 kr (1703 kr)
- 3:56 tjänar pengar till väntar på flaskhalsen för cykelbatteri: 1703/1743 kr → printar blomkruka (105 kr) (1703 kr)
- 4:02 gå till skrivaren (25 m) (1703 kr)
- 4:03 printar Blomkruka (1703 kr)
- 4:03 gå till cykeln (1 m) (1703 kr)
- 4:27 tar ut 1 st ur skrivaren (1703 kr)
- 4:32 gå till Ali (25 m) (1703 kr)
- 4:32 öppnar Alis butik – sälja (1703 kr)
- 4:34 säljer hos Ali: +105 kr (1808 kr)
- 4:57 popup: "Han är snäll. Typ." (1808 kr)
- 5:05 popup: "Läst" (1808 kr)
- 5:06 öppnar Alis butik – bilbatteriet (1808 kr)
- 5:08 köper cykelbatteri för 30 kr (1778 kr)
- 5:16 gå till koppla in bilbatteriet vid cykeln (24 m) (1778 kr)
- 5:34 gå till Ali (24 m) (1778 kr)
- 5:34 öppnar Alis butik – köpa ryggkorg (1778 kr)
- 5:37 köper ryggkorg för 120 kr (1658 kr)
- 5:43 gå till skrivaren (25 m) (1658 kr)
- 5:45 printar Ryggkorg (2 delar) (1658 kr)
- 5:57 tar ut 1 st ur skrivaren (1658 kr)
- 6:01 tar på ryggkorg (1658 kr)
- 6:07 gå till Ali (25 m) (1658 kr)
- 6:07 öppnar Alis butik – köpa arbetsbord (1658 kr)
- 6:09 köper bord för 120 kr (1538 kr)
- 6:15 gå till skrivaren (25 m) (1538 kr)
- 6:17 printar Arbetsbord (3 delar) (1538 kr)
- 6:35 plockar 4 skräp på tippen (bär max 16) (1538 kr)
- 6:37 gå till kvarnen (9 m) (1538 kr)
- 6:50 gå till skrivaren (3 m) (1538 kr)
- 6:50 tar ut 1 st ur skrivaren (1538 kr)
- 6:51 gå till platsen för arbetsbord (5 m) (1538 kr)
- 6:53 ställer ut arbetsbord (1538 kr)
- 7:04 gå till Ali (24 m) (1538 kr)
- 7:04 öppnar Alis butik – köpa skrivare m (1538 kr)
- 7:07 köper skrivare2 för 500 kr (1038 kr)
- 7:13 gå till skrivaren (25 m) (1038 kr)
- 7:14 printar Skrivare M (5 delar) (1038 kr)
- 7:32 plockar 3 skräp på tippen (bär max 16) (1038 kr)
- 7:34 gå till kvarnen (9 m) (1038 kr)
- 8:12 gå till skrivaren (3 m) (1038 kr)
- 8:13 tar ut 1 st ur skrivaren (1038 kr)
- 8:14 gå till platsen för skrivare m (5 m) (1038 kr)
- 8:15 ställer ut skrivare m (1038 kr)
- 8:27 gå till Ali (24 m) (1038 kr)
- 8:27 öppnar Alis butik – köpa plåttak (1038 kr)
- 8:30 köper tak för 250 kr (788 kr)
- 8:40 plockar 2 skräp på tippen (bär max 16) (788 kr)
- 8:42 gå till kvarnen (11 m) (788 kr)
- 8:49 gå till skrivaren (5 m) (788 kr)
- 8:50 printar Plåttak (3 delar) (788 kr)
- 9:12 tar ut 1 st ur skrivaren (788 kr)
- 9:16 gå till skjulet (19 m) (788 kr)
- 9:34 gå till sopbilen (Rolfs bänk) (38 m) (788 kr)
- 10:34 tillbaka från Rolfs bänk (788 kr)
- 10:40 panel: "Dagbok
Före och efter
Dag 1
Da" (788 kr)
- 10:50 gå till sängen (39 m) (788 kr)

</details>

## Dag 4

| Tid | Källa | Vem | Text |
|---|---|---|---|
| 10:52 | vara | ali | ingen |
| 10:52 | händelse | malKlart | id=sov3 del=Dag 3 – En skrivare till och taket nasta=rolf2-brev |
| 10:52 | bekräftelse | du | plats |
| 10:52 | vara | ali | kruka |
| 10:52 | MÅL |  | Vänta på sopbilen. Den lämnar något. |
| 0:01 | händelse | dagenBorjar | dag=4 |
| 0:01 | meddelande | du | Dag 4. 18 dagar till jul. Drar det i skjulet blir natten lång. |
| 0:01 | dagbokkort | du | Kärran och mer vind · Dag 4. 18 dagar till jul. Drar det i skjulet blir natten lång. |
| 0:01 | röst | du | Dag 4. 18 dagar till jul. Kärran och mer vind. Drar det i skjulet blir natten lång. · STORY |
| 0:08 | väntar | notis:morgon | Ali vill ha idag: Blomkruka · +50 % |
| 0:09 | händelse | morgonkortStangt | dag=4 |
| 0:09 | struken | du | Hård plast. Lilla kvarnen skulle explodera. Eller jag. |
| 0:11 | målruta |  | Vänta på sopbilen. Den lämnar något. |
| 0:14 | sak | du | (nytt mål i rutan) |
| 0:14 | pil |  | Vänta på sopbilen. Den lämnar något. |
| 0:14 | klar | du | (nytt mål i rutan) |
| 0:16 | struken | notis:🌇 Klockan är 21. Ali slår igen luckan.  | 🌇 Klockan är 21. Ali slår igen luckan. Dagens jobb är klart – gå in i skjulet och sov i sängen. |
| 0:16 | struken | mamma | Var är du? |
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
| 0:36 | toast | guld | ✅ |
| 0:36 | händelse | printKlar | sak=kruka n=21 |
| 0:37 | händelse | tagitUrPrint | sak=kruka n=1 |
| 0:39 | väntar | bud | (tips) |
| 0:39 | sak | bud | (tips) |
| 0:39 | väntar | du | En skottkärra! Jag väljer den med hjulet och kör den full med skräp. |
| 0:41 | klar | bud | (tips) |
| 0:43 | sak | du | En skottkärra! Jag väljer den med hjulet och kör den full med skräp. |
| 0:43 | röst | du | En skottkärra! Jag väljer den med hjulet och kör den full med skräp. · MÅL |
| 0:43 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 0:43 | butiksbubbla | ali | Pappa stod bakom den här disken i trettio år. Jag har stått här i tjugofem. Varje morgon när jag låser upp hälsar jag på honom. Tyst. |
| 0:45 | händelse | salt | sak=kruka n=1 |
| 0:45 | aliSalt | ali | 105 |
| 0:45 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 0:46 | väntar | ali | Pappa stod bakom den här disken i trettio år. Jag har stått här i tjugofem. Varje morgon när jag låser upp hälsar jag på honom. Tyst. |
| 0:48 | klar | du | En skottkärra! Jag väljer den med hjulet och kör den full med skräp. |
| 0:50 | sak | ali | Pappa stod bakom den här disken i trettio år. Jag har stått här i tjugofem. Varje morgon när jag låser upp hälsar jag på honom. Tyst. |
| 0:50 | röst | ali | Pappa stod bakom den här disken i trettio år. Jag har stått här i tjugofem. Varje morgon när jag låser upp hälsar jag på honom. Tyst. · STORY |
| 0:56 | skratt | du | falsk tuta |
| 1:01 | klar | ali | Pappa stod bakom den här disken i trettio år. Jag har stått här i tjugofem. Varje morgon när jag låser upp hälsar jag på honom. Tyst. |
| 1:06 | händelse | printStart | sak=kruka |
| 1:09 | toast | guld | ✅ |
| 1:09 | händelse | printKlar | sak=kruka n=22 |
| 1:09 | händelse | tagitUrPrint | sak=kruka n=1 |
| 1:09 | sak | rolf | Hoppa in. Ja ska visa dej en grej. |
| 1:09 | notis |  | Rolf: ”Hoppa in. Ja ska visa dej en grej.” |
| 1:09 | röst | rolf | Hoppa in. Ja ska visa dej en grej. · STORY |
| 1:12 | klar | rolf | Hoppa in. Ja ska visa dej en grej. |
| 1:15 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 1:17 | händelse | salt | sak=kruka n=1 |
| 1:17 | aliSalt | ali | 105 |
| 1:17 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 1:21 | sak | foto | Tak över huvudet (och min tumme) |
| 1:21 | foto | du | Tak över huvudet (och min tumme) |
| 1:24 | klar | foto | Tak över huvudet (och min tumme) |
| 1:29 | väntar | mamma | Rolf på sopbilen ringde. Han säger att du städar? Vem är du och vad har du gjort med mitt barn? ❤️ |
| 1:32 | sak | du | I natt somnar jag torr. Det börjar bli ett hem. |
| 1:32 | notis | tanke | 💭 I natt somnar jag torr. Det börjar bli ett hem. |
| 1:32 | röst | du | I natt somnar jag torr. Det börjar bli ett hem. · STORY |
| 1:36 | klar | du | I natt somnar jag torr. Det börjar bli ett hem. |
| 1:42 | händelse | printStart | sak=kruka |
| 1:44 | sak | foto | Rolfs bänk (och min tumme) |
| 1:44 | foto | du | Rolfs bänk (och min tumme) |
| 1:44 | toast | guld | ✅ |
| 1:44 | händelse | printKlar | sak=kruka n=23 |
| 1:45 | händelse | tagitUrPrint | sak=kruka n=1 |
| 1:47 | klar | foto | Rolfs bänk (och min tumme) |
| 1:49 | väntar | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått TAK. Och arbetsbord. Skriv in, Gunnar. Du skriver aldrig in. |
| 1:49 | radio | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått TAK. Och arbetsbord. Skriv in, Gunnar. Du skriver aldrig in. |
| 1:49 | skratt | du | Radio-Kjelle |
| 1:51 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 1:53 | händelse | salt | sak=kruka n=1 |
| 1:53 | aliSalt | ali | 105 |
| 1:53 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 1:55 | sak | du | Han kommer hit varje kväll. Nu vet jag var. |
| 1:55 | notis | tanke | 💭 Han kommer hit varje kväll. Nu vet jag var. |
| 1:55 | röst | du | Han kommer hit varje kväll. Nu vet jag var. · STORY |
| 1:58 | klar | du | Han kommer hit varje kväll. Nu vet jag var. |
| 2:07 | händelse | printStart | sak=kruka |
| 2:10 | toast | guld | ✅ |
| 2:10 | händelse | printKlar | sak=kruka n=24 |
| 2:11 | händelse | tagitUrPrint | sak=kruka n=1 |
| 2:16 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 2:18 | händelse | salt | sak=kruka n=1 |
| 2:18 | aliSalt | ali | 105 |
| 2:18 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 2:28 | händelse | printStart | sak=kruka |
| 2:31 | toast | guld | ✅ |
| 2:31 | händelse | printKlar | sak=kruka n=25 |
| 2:32 | händelse | tagitUrPrint | sak=kruka n=1 |
| 2:34 | struken | mamma | Rolf på sopbilen ringde. Han säger att du städar? Vem är du och vad har du gjort med mitt barn? ❤️ |
| 2:37 | paket |  | ge |
| 2:37 | väntar |  | (läget ändras) |
| 2:37 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 2:38 | skratt | du | falsk tuta |
| 2:39 | händelse | salt | sak=kruka n=1 |
| 2:39 | aliSalt | ali | 105 |
| 2:39 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 2:49 | väntar | rolf | Tjo. Ska grilla på lördag. Min grillspade smälte. Kan du göra en sån hä? /Rolf 🍖​ |
| 2:49 | paket |  | ge |
| 2:49 | väntar |  | (läget ändras) |
| 2:49 | sak | rolf | Tjo. Ska grilla på lördag. Min grillspade smälte. Kan du göra en sån hä? /Rolf 🍖​ |
| 2:49 | lapp | Brev från Rolf | Tjo. Ska grilla på lördag. Min grillspade smälte. Kan du göra en sån hä? /Rolf 🍖​ |
| 2:49 | röst | rolf | Tjo. Ska grilla på lördag. Min grillspade smälte. Kan du göra en sån hä? /Rolf 🍖​ · STORY |
| 2:49 | händelse | malKlart | id=rolf2-brev del=Dag 4 – Kärran och mer vind nasta=rolf2-printa |
| 2:49 | bekräftelse | du | plats |
| 2:49 | väntar | du | Printa grillspade. |
| 2:49 | MÅL |  | Printa grillspade |
| 2:51 | målruta |  | Printa grillspade |
| 2:53 | händelse | printStart | sak=grillspade |
| 2:53 | händelse | malKlart | id=rolf2-printa del=Dag 4 – Kärran och mer vind nasta=rolf2-ge |
| 2:53 | bekräftelse | du | plats |
| 2:53 | väntar | du | Ge Rolf grillspade. |
| 2:53 | MÅL |  | Ge Rolf grillspade |
| 2:56 | klar | rolf | Tjo. Ska grilla på lördag. Min grillspade smälte. Kan du göra en sån hä? /Rolf 🍖​ |
| 2:56 | händelse | brevLast | id=rolf:2 |
| 2:56 | målruta |  | Ge Rolf grillspade |
| 2:57 | toast | guld | ✅ |
| 2:57 | händelse | printKlar | sak=grillspade n=1 |
| 2:57 | kvittens-bock |  | ✓ Printa grillspade |
| 2:57 | händelse | tagitUrPrint | sak=grillspade n=1 |
| 2:58 | struken | du | Printa grillspade. |
| 2:58 | sak | du | Ge Rolf grillspade. |
| 2:58 | pil |  | Ge Rolf grillspade |
| 2:58 | röst | du | Ge Rolf grillspade. · MÅL |
| 2:59 | väntar | bud | (tips) |
| 3:00 | klar | du | Ge Rolf grillspade. |
| 3:02 | sak | bud | (tips) |
| 3:02 | väntar | du | Klart! Nu lägger jag den i Rolfs brevlåda vid grinden. |
| 3:03 | klar | bud | (tips) |
| 3:05 | sak | du | Klart! Nu lägger jag den i Rolfs brevlåda vid grinden. |
| 3:05 | röst | du | Klart! Nu lägger jag den i Rolfs brevlåda vid grinden. · MÅL |
| 3:10 | klar | du | Klart! Nu lägger jag den i Rolfs brevlåda vid grinden. |
| 3:12 | struken | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått TAK. Och arbetsbord. Skriv in, Gunnar. Du skriver aldrig in. |
| 3:12 | sak |  | (läget ändras) |
| 3:12 | klar |  | (läget ändras) |
| 3:13 | väntar | info:info | 🍖 Jag tar fram grillspade. Den ska i postlådan. |
| 3:13 | händelse | lagtIPostlada | sak=grillspade rolf=2 jobb=false |
| 3:13 | struken | kedja | rolf2 |
| 3:13 | händelse | malKlart | id=rolf2-ge del=Dag 4 – Kärran och mer vind nasta=n3-tom-full-karra |
| 3:13 | bekräftelse | du | plats |
| 3:13 | väntar | du | Kärran rymmer massor. Jag fyller den och tippar allt i kvarnen. |
| 3:13 | MÅL |  | Töm en full kärra i kvarnen |
| 3:14 | sak | du | Kärran rymmer massor. Jag fyller den och tippar allt i kvarnen. |
| 3:14 | målruta |  | Töm en full kärra i kvarnen |
| 3:14 | pil |  | Töm en full kärra i kvarnen |
| 3:14 | notis | tanke | 💭 Kärran rymmer massor. Jag fyller den och tippar allt i kvarnen. |
| 3:14 | röst | du | Kärran rymmer massor. Jag fyller den och tippar allt i kvarnen. · MÅL |
| 3:17 | kvittens-bock |  | ✓ Ge Rolf grillspade |
| 3:19 | klar | du | Kärran rymmer massor. Jag fyller den och tippar allt i kvarnen. |
| 3:21 | sak | info:info | 🍖 Jag tar fram grillspade. Den ska i postlådan. |
| 3:21 | toast |  | 🍖 Jag tar fram grillspade. Den ska i postlådan. |
| 3:23 | klar | info:info | 🍖 Jag tar fram grillspade. Den ska i postlådan. |
| 3:26 | karraKlick | du | träff |
| 3:27 | karraKlick | du | träff |
| 3:28 | karraKlick | du | träff |
| 3:30 | karraKlick | du | träff |
| 3:31 | karraKlick | du | träff |
| 3:32 | karraKlick | du | träff |
| 3:33 | karraKlick | du | träff |
| 3:33 | sak |  | (läget ändras) |
| 3:33 | brev | rolf | rolf:2 |
| 3:33 | klar |  | (läget ändras) |
| 3:34 | karraKlick | du | träff |
| 3:36 | tanke | du | Det får inte plats. Jag behöver något att tippa i. |
| 3:36 | väntar | du | Det får inte plats. Jag behöver något att tippa i. |
| 3:36 | väntar | info:bra | 12 st i tratten · 4 st på marken bredvid |
| 3:36 | sak | info:bra | 12 st i tratten · 4 st på marken bredvid |
| 3:36 | kvitto-visas | info:bra | 12 st i tratten · 4 st på marken bredvid |
| 3:36 | toast | bra | 12 st i tratten · 4 st på marken bredvid |
| 3:36 | händelse | malKlart | id=n3-tom-full-karra del=Dag 4 – Kärran och mer vind nasta=sophallare |
| 3:36 | bekräftelse | du | plats |
| 3:36 | väntar | du | En sophållare bakom kvarnen. Då matar den sig själv. |
| 3:36 | MÅL |  | Plocka skräp och mal det |
| 3:38 | klar | info:bra | 12 st i tratten · 4 st på marken bredvid |
| 3:39 | målruta |  | Plocka skräp och mal det |
| 3:40 | kvittens-bock |  | ✓ Töm en full kärra i kvarnen |
| 3:40 | sak | du | En sophållare bakom kvarnen. Då matar den sig själv. |
| 3:40 | pil |  | Plocka skräp och mal det |
| 3:40 | notis | tanke | 💭 En sophållare bakom kvarnen. Då matar den sig själv. |
| 3:40 | röst | du | En sophållare bakom kvarnen. Då matar den sig själv. · MÅL |
| 3:44 | klar | du | En sophållare bakom kvarnen. Då matar den sig själv. |
| 3:45 | väntar | mamma | Jag sa till pappa att du bor på en soptipp. Han sa "aha, vad lugnt då" och satte på Formel 1. Lugnt? |
| 3:46 | sak | du | Det får inte plats. Jag behöver något att tippa i. |
| 3:46 | notis | tanke | 💭 Det får inte plats. Jag behöver något att tippa i. |
| 3:46 | röst | du | Det får inte plats. Jag behöver något att tippa i. · STORY |
| 3:51 | klar | du | Det får inte plats. Jag behöver något att tippa i. |
| 3:55 | händelse | printStart | sak=kruka |
| 3:58 | toast | guld | ✅ |
| 3:58 | händelse | printKlar | sak=kruka n=26 |
| 3:59 | händelse | tagitUrPrint | sak=kruka n=1 |
| 4:05 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 4:07 | händelse | salt | sak=kruka n=1 |
| 4:07 | aliSalt | ali | 105 |
| 4:07 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 4:07 | röst | ali | Dina krukor säljer. Tanterna i kvarteret älskar dem. · STORY |
| 4:07 | butiksbubbla | ali | Dina krukor säljer. Tanterna i kvarteret älskar dem. |
| 4:16 | händelse | printStart | sak=kruka |
| 4:18 | toast | guld | ✅ |
| 4:18 | händelse | printKlar | sak=kruka n=27 |
| 4:19 | händelse | tagitUrPrint | sak=kruka n=1 |
| 4:23 | upplåst | skrivare | trim_skrivare2 |
| 4:23 | brott | UPPLÅST | trim_skrivare2 (skrivare 76 av 60) |
| 4:23 | händelse | upplast | id=trim_skrivare2 flask=skrivare |
| 4:23 | paket |  | tanke → sms |
| 4:23 | tanke | du | Skrivare M hinner inte heller. Den kunde gå fortare. |
| 4:23 | väntar | du | Skrivare M hinner inte heller. Den kunde gå fortare. |
| 4:23 | väntar | ali | Ali här. Skrivartrim igen. Nästa nivå. Den här gången skruvade jag åt rätt håll. |
| 4:23 | sak | du | Skrivare M hinner inte heller. Den kunde gå fortare. |
| 4:23 | notis | tanke | 💭 Skrivare M hinner inte heller. Den kunde gå fortare. |
| 4:23 | röst | du | Skrivare M hinner inte heller. Den kunde gå fortare. · STORY |
| 4:25 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 4:26 | händelse | salt | sak=kruka n=1 |
| 4:26 | aliSalt | ali | 105 |
| 4:26 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 4:28 | klar | du | Skrivare M hinner inte heller. Den kunde gå fortare. |
| 4:36 | sak | ali | Ali här. Skrivartrim igen. Nästa nivå. Den här gången skruvade jag åt rätt håll. |
| 4:36 | sms | ali | Ali här. Skrivartrim igen. Nästa nivå. Den här gången skruvade jag åt rätt håll. |
| 4:36 | sms-bubbla | ali | Ali här. Skrivartrim igen. Nästa nivå. Den här gången skruvade jag åt rätt håll. |
| 4:36 | röst | ali | Ali här. Skrivartrim igen. Nästa nivå. Den här gången skruvade jag åt rätt håll. · STORY |
| 4:37 | händelse | printStart | sak=kruka |
| 4:39 | toast | guld | ✅ |
| 4:39 | händelse | printKlar | sak=kruka n=28 |
| 4:40 | händelse | tagitUrPrint | sak=kruka n=1 |
| 4:41 | paket |  | tanke |
| 4:41 | tanke | du | Jaha, Rolf har hämtat en grillspade. |
| 4:41 | väntar | du | Jaha, Rolf har hämtat en grillspade. |
| 4:43 | klar | ali | Ali här. Skrivartrim igen. Nästa nivå. Den här gången skruvade jag åt rätt håll. |
| 4:45 | sak | du | Jaha, Rolf har hämtat en grillspade. |
| 4:45 | notis | tanke | 💭 Jaha, Rolf har hämtat en grillspade. |
| 4:45 | röst | du | Jaha, Rolf har hämtat en grillspade. · REAKTION |
| 4:46 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 4:47 | händelse | salt | sak=kruka n=1 |
| 4:47 | aliSalt | ali | 105 |
| 4:47 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 4:48 | klar | du | Jaha, Rolf har hämtat en grillspade. |
| 4:56 | händelse | printStart | sak=kruka |
| 4:59 | toast | guld | ✅ |
| 4:59 | händelse | printKlar | sak=kruka n=29 |
| 5:00 | händelse | tagitUrPrint | sak=kruka n=1 |
| 5:03 | skratt | du | falsk tuta |
| 5:06 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 5:07 | händelse | salt | sak=kruka n=1 |
| 5:07 | aliSalt | ali | 105 |
| 5:07 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 5:16 | händelse | printStart | sak=kruka |
| 5:19 | toast | guld | ✅ |
| 5:19 | händelse | printKlar | sak=kruka n=30 |
| 5:20 | händelse | tagitUrPrint | sak=kruka n=1 |
| 5:24 | väntar | ali | Älgen var här i morse. Han köpte inget heller. |
| 5:24 | sak | ali | Älgen var här i morse. Han köpte inget heller. |
| 5:24 | röst | ali | Älgen var här i morse. Han köpte inget heller. · SMÅPRAT |
| 5:25 | bubbla |  | Älgen var här i morse. Han köpte inget heller. |
| 5:25 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 5:27 | händelse | salt | sak=kruka n=1 |
| 5:27 | aliSalt | ali | 105 |
| 5:27 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 5:28 | klar | ali | Älgen var här i morse. Han köpte inget heller. |
| 5:37 | väntar | mamma | Jag sa till pappa att du bor på en soptipp. Han sa "aha, vad lugnt då" och satte på Formel 1. Lugnt? |
| 5:37 | händelse | printStart | sak=kruka |
| 5:40 | toast | guld | ✅ |
| 5:40 | händelse | printKlar | sak=kruka n=31 |
| 5:43 | händelse | tagitUrPrint | sak=kruka n=1 |
| 5:49 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 5:51 | händelse | salt | sak=kruka n=1 |
| 5:51 | aliSalt | ali | 105 |
| 5:51 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 6:00 | händelse | printStart | sak=kruka |
| 6:02 | toast | guld | ✅ |
| 6:02 | händelse | printKlar | sak=kruka n=32 |
| 6:03 | händelse | tagitUrPrint | sak=kruka n=1 |
| 6:09 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 6:10 | händelse | salt | sak=kruka n=1 |
| 6:10 | aliSalt | ali | 105 |
| 6:10 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 6:20 | händelse | printStart | sak=kruka |
| 6:22 | toast | guld | ✅ |
| 6:22 | händelse | printKlar | sak=kruka n=33 |
| 6:23 | händelse | tagitUrPrint | sak=kruka n=1 |
| 6:29 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 6:30 | händelse | salt | sak=kruka n=1 |
| 6:30 | aliSalt | ali | 105 |
| 6:30 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 6:39 | händelse | printStart | sak=kruka |
| 6:42 | toast | guld | ✅ |
| 6:42 | händelse | printKlar | sak=kruka n=34 |
| 6:43 | händelse | tagitUrPrint | sak=kruka n=1 |
| 6:44 | struken | mamma | Jag sa till pappa att du bor på en soptipp. Han sa "aha, vad lugnt då" och satte på Formel 1. Lugnt? |
| 6:48 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 6:50 | händelse | salt | sak=kruka n=1 |
| 6:50 | aliSalt | ali | 105 |
| 6:50 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 6:58 | upplåst | bara | matarband |
| 6:58 | brott | RESERV | matarband (bara 0 av 3) |
| 6:58 | händelse | upplast | id=matarband flask=bara |
| 6:58 | paket |  | sms |
| 6:58 | väntar | ali | Ali här. 🗑️ Sophållaren. Jag frågade AI:n hur man slipper bära skräp. Den gjorde det här. Den har mer fritid än jag. Suck. |
| 6:58 | sak | ali | Ali här. 🗑️ Sophållaren. Jag frågade AI:n hur man slipper bära skräp. Den gjorde det här. Den har mer fritid än jag. Suck. |
| 6:58 | sms | ali | Ali här. 🗑️ Sophållaren. Jag frågade AI:n hur man slipper bära skräp. Den gjorde det här. Den har mer fritid än jag. Suck. |
| 6:58 | sms-bubbla | ali | Ali här. 🗑️ Sophållaren. Jag frågade AI:n hur man slipper bära skräp. Den gjorde det här. Den har mer fritid än jag. Suck. |
| 6:58 | röst | ali | Ali här. 🗑️ Sophållaren. Jag frågade AI:n hur man slipper bära skräp. Den gjorde det här. Den har mer fritid än jag. Suck. · STORY |
| 6:59 | händelse | printStart | sak=kruka |
| 7:02 | toast | guld | ✅ |
| 7:02 | händelse | printKlar | sak=kruka n=35 |
| 7:02 | händelse | tagitUrPrint | sak=kruka n=1 |
| 7:08 | klar | ali | Ali här. 🗑️ Sophållaren. Jag frågade AI:n hur man slipper bära skräp. Den gjorde det här. Den har mer fritid än jag. Suck. |
| 7:08 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 7:10 | händelse | salt | sak=kruka n=1 |
| 7:10 | aliSalt | ali | 105 |
| 7:10 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 7:12 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 7:14 | struken | info:guld | 3D-modell köpt – printa sophållare |
| 7:14 | händelse | kopt | sak=matarband |
| 7:14 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 7:35 | händelse | printStart | sak=byggsats:matarband |
| 7:39 | toast | bra | Del 1 av 3 klar |
| 7:39 | paket |  | tanke |
| 7:39 | tanke | du | En toffla. Bara en. |
| 7:39 | väntar | du | En toffla. Bara en. |
| 7:39 | skratt | du | kvarnen spottar |
| 7:42 | toast | bra | Del 2 av 3 klar |
| 7:44 | toast | fel | Ingen ström – trampa cykeln |
| 7:54 | händelse | printKlar | sak=byggsats:matarband n=1 |
| 7:54 | toast | guld | ✅ |
| 7:54 | händelse | tagitUrPrint | sak=byggsats:matarband n=1 |
| 7:54 | paket |  | sms |
| 7:54 | väntar | ali | Ali här. Jag såg Sophållare på avstånd. Ett streck blev lite snett. Mitt fel. Vackert ändå. |
| 7:54 | paket |  | sms |
| 7:54 | väntar | ali | Ali igen. Jag har sagt till min bror att jag inte går i pension. Jag startar något. Han skrattade. Jag skrattade också. Men jag menar det. Tack. Säg inget. |
| 7:55 | händelse | placerat | sak=sophallare |
| 7:55 | kvittens | du | Nu kan jag tömma hela kärran på en gång. |
| 7:55 | varför-köad | du | Krukor är bra. Pallar är bättre. |
| 7:55 | väntar | du | Nu kan jag tömma hela kärran på en gång. |
| 7:55 | väntar | info:guld | 🗑️ Sophållaren står bakom kvarnen! Töm allt skräp i den – den matar kvarnen själv. |
| 7:55 | sak | du | Nu kan jag tömma hela kärran på en gång. |
| 7:55 | notis | tanke | 💭 Nu kan jag tömma hela kärran på en gång. |
| 7:55 | röst | du | Nu kan jag tömma hela kärran på en gång. · STORY |
| 7:55 | händelse | malKlart | id=sophallare del=Dag 4 – Kärran och mer vind nasta=pall |
| 7:55 | bekräftelse | du | plats |
| 7:55 | struken | du | En toffla. Bara en. |
| 7:55 | väntar | du | Jag behöver något att sitta på. En pall. Lagom ambitiöst. |
| 7:55 | MÅL |  | Printa en pall |
| 7:58 | målruta |  | Printa en pall |
| 7:59 | klar | du | Nu kan jag tömma hela kärran på en gång. |
| 8:01 | sak | du | Jag behöver något att sitta på. En pall. Lagom ambitiöst. |
| 8:01 | pil |  | Printa en pall |
| 8:01 | notis | tanke | 💭 Jag behöver något att sitta på. En pall. Lagom ambitiöst. |
| 8:01 | röst | du | Jag behöver något att sitta på. En pall. Lagom ambitiöst. · MÅL |
| 8:02 | nick |  | nick:46 |
| 8:05 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 8:06 | klar | du | Jag behöver något att sitta på. En pall. Lagom ambitiöst. |
| 8:07 | händelse | kopt | sak=pall |
| 8:07 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 8:07 | röst | ali | Bra val. Folk köper sånt. Jag vet inte varför. · STORY |
| 8:07 | upprepning | ali | Bra val. Folk köper sånt. Jag vet inte varför. |
| 8:07 | butiksbubbla | ali | Pall? Bra val. Folk köper sånt. Jag vet inte varför. |
| 8:09 | struken | info:guld | 🗑️ Sophållaren står bakom kvarnen! Töm allt skräp i den – den matar kvarnen själv. |
| 8:15 | händelse | printStart | sak=pall |
| 8:21 | toast | guld | ✅ |
| 8:21 | händelse | printKlar | sak=pall n=1 |
| 8:21 | händelse | malKlart | id=pall del=Dag 4 – Kärran och mer vind nasta=vind4 |
| 8:21 | bekräftelse | du | plats |
| 8:21 | väntar | du | En vindsnurra till på skjulets tak. Skrivarna vill ha mer ström. |
| 8:21 | målruta |  | Printa och sälj |
| 8:21 | MÅL |  | Printa och sälj |
| 8:21 | sak | du | En vindsnurra till på skjulets tak. Skrivarna vill ha mer ström. |
| 8:21 | pil |  | Printa och sälj |
| 8:21 | notis | tanke | 💭 En vindsnurra till på skjulets tak. Skrivarna vill ha mer ström. |
| 8:21 | röst | du | En vindsnurra till på skjulets tak. Skrivarna vill ha mer ström. · MÅL |
| 8:21 | händelse | tagitUrPrint | sak=pall n=1 |
| 8:25 | kvittens-bock |  | ✓ Printa en pall |
| 8:26 | klar | du | En vindsnurra till på skjulets tak. Skrivarna vill ha mer ström. |
| 8:27 | händelse | placerat | sak=pall |
| 8:31 | skratt | du | falsk tuta |
| 8:34 | händelse | printStart | sak=pall |
| 8:39 | upplåst | strom | vindsnurra2 |
| 8:39 | brott | UPPLÅST | vindsnurra2 (strom 43 av 15) |
| 8:39 | händelse | upplast | id=vindsnurra2 flask=strom |
| 8:39 | paket |  | tanke → sms |
| 8:39 | tanke | du | En snurra räcker inte. Skrivarna står still så fort det blir stilla. |
| 8:39 | väntar | du | En snurra räcker inte. Skrivarna står still så fort det blir stilla. |
| 8:39 | väntar | ali | Ali här. En snurra till? Taket har plats för två. Vinden har inget emot det. |
| 8:39 | toast | guld | ✅ |
| 8:39 | händelse | printKlar | sak=pall n=2 |
| 8:40 | händelse | tagitUrPrint | sak=pall n=1 |
| 8:46 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 8:46 | skratt | du | däcket rullar iväg |
| 8:46 | sak | ali | Ali här. En snurra till? Taket har plats för två. Vinden har inget emot det. |
| 8:46 | sms | ali | Ali här. En snurra till? Taket har plats för två. Vinden har inget emot det. |
| 8:46 | sms-bubbla | ali | Ali här. En snurra till? Taket har plats för två. Vinden har inget emot det. |
| 8:46 | röst | ali | Ali här. En snurra till? Taket har plats för två. Vinden har inget emot det. · STORY |
| 8:47 | händelse | salt | sak=pall n=1 |
| 8:47 | aliSalt | ali | 180 |
| 8:47 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 8:52 | klar | ali | Ali här. En snurra till? Taket har plats för två. Vinden har inget emot det. |
| 8:54 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 8:56 | struken | info:guld | 3D-modell köpt – printa vindsnurra till skjultaket |
| 8:56 | händelse | kopt | sak=vindsnurra |
| 8:56 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 9:05 | händelse | printStart | sak=byggsats:vindsnurra |
| 9:08 | händelse | printKlar | sak=byggsats:vindsnurra n=1 |
| 9:08 | toast | guld | ✅ |
| 9:09 | struken | info:guld | 🌬️ Vindsnurran ska upp på skjulets tak. |
| 9:09 | händelse | tagitUrPrint | sak=byggsats:vindsnurra n=1 |
| 9:15 | händelse | placerat | sak=vindsnurra |
| 9:15 | struken | info:guld | 🌬️ Vindsnurran sitter på taket – den trampar cykeln åt mig när det blåser |
| 9:15 | monterat | du | byggsats:vindsnurra |
| 9:15 | händelse | monterat | sak=vindsnurra |
| 9:15 | händelse | malKlart | id=vind4 del=Dag 4 – Kärran och mer vind nasta=n3-isolera-tva-vaggar |
| 9:15 | bekräftelse | du | plats |
| 9:15 | lapp | 📔 Dagbok | Slut på trampandet. Nästan. |
| 9:15 | dagbokrad | du | Slut på trampandet. Nästan. |
| 9:15 | väntar | notis:Slut på trampandet. Nästan. | Slut på trampandet. Nästan. |
| 9:15 | väntar | du | Det drar genom väggarna. Isolering, och sen blir det varmt. |
| 9:15 | MÅL |  | Isolera två väggar · 0/2 |
| 9:15 | sak | du | Det drar genom väggarna. Isolering, och sen blir det varmt. |
| 9:15 | målruta |  | Isolera två väggar · 0/2 |
| 9:15 | pil |  | Isolera två väggar · 0/2 |
| 9:15 | notis | tanke | 💭 Det drar genom väggarna. Isolering, och sen blir det varmt. |
| 9:15 | röst | du | Det drar genom väggarna. Isolering, och sen blir det varmt. · MÅL |
| 9:15 | nick |  | nick:48 |
| 9:20 | klar | du | Det drar genom väggarna. Isolering, och sen blir det varmt. |
| 9:22 | sak | notis:Slut på trampandet. Nästan. | Slut på trampandet. Nästan. |
| 9:22 | notis | dagbok | Slut på trampandet. Nästan. |
| 9:25 | klar | notis:Slut på trampandet. Nästan. | Slut på trampandet. Nästan. |
| 9:25 | händelse | pappa | Pappa ringer |
| 9:29 | röst | pappa | Hej. Det är pappa. · STORY |
| 9:31 | röst | du | Hej pappa. · STORY |
| 9:35 | röst | pappa | Mamma står bredvid. Hon säger att jag ska fråga om du äter. · STORY |
| 9:38 | röst | du | Jag äter. Och jag har en egen kvarn nu. Och en 3D-skrivare. · STORY |
| 9:44 | röst | pappa | Jaha. En kvarn. Vad lugnt då. · STORY |
| 9:47 | röst | pappa | Jag kanske kommer förbi nån dag. Om det passar. · STORY |
| 9:52 | röst | du | Det passar. · STORY |
| 9:55 | röst | pappa | Bra. Hej då då. · STORY |
| 10:04 | händelse | samtalSlut | id=pappa4 |
| 10:04 | struken | kedja | samtal4 |
| 10:05 | sak | ali | Ali här. Jag såg Sophållare på avstånd. Ett streck blev lite snett. Mitt fel. Vackert ändå. |
| 10:05 | sms | ali | Ali här. Jag såg Sophållare på avstånd. Ett streck blev lite snett. Mitt fel. Vackert ändå. |
| 10:05 | sms-bubbla | ali | Ali här. Jag såg Sophållare på avstånd. Ett streck blev lite snett. Mitt fel. Vackert ändå. |
| 10:05 | röst | ali | Ali här. Jag såg Sophållare på avstånd. Ett streck blev lite snett. Mitt fel. Vackert ändå. · REAKTION |
| 10:08 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 10:10 | struken | info:guld | 3D-modell köpt – printa isolerskiva (vägg) |
| 10:10 | händelse | kopt | sak=vaggar |
| 10:10 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 10:12 | klar | ali | Ali här. Jag såg Sophållare på avstånd. Ett streck blev lite snett. Mitt fel. Vackert ändå. |
| 10:20 | sak | du | En snurra räcker inte. Skrivarna står still så fort det blir stilla. |
| 10:20 | notis | tanke | 💭 En snurra räcker inte. Skrivarna står still så fort det blir stilla. |
| 10:20 | röst | du | En snurra räcker inte. Skrivarna står still så fort det blir stilla. · STORY |
| 10:26 | klar | du | En snurra räcker inte. Skrivarna står still så fort det blir stilla. |
| 10:32 | händelse | printStart | sak=byggsats:vaggar |
| 10:32 | paket |  | tanke |
| 10:32 | tanke | du | Kajsa. Ut ur skrivaren. Nu. |
| 10:32 | väntar | du | Kajsa. Ut ur skrivaren. Nu. |
| 10:32 | skratt | du | Kajsa i skrivaren |
| 10:34 | sak | du | Kajsa. Ut ur skrivaren. Nu. |
| 10:34 | notis | tanke | 💭 Kajsa. Ut ur skrivaren. Nu. |
| 10:34 | röst | du | Kajsa. Ut ur skrivaren. Nu. · REAKTION |
| 10:36 | händelse | printKlar | sak=byggsats:vaggar n=1 |
| 10:36 | toast | guld | ✅ |
| 10:36 | klar | du | Kajsa. Ut ur skrivaren. Nu. |
| 10:37 | händelse | tagitUrPrint | sak=byggsats:vaggar n=1 |
| 10:41 | väntar | info:guld | 🧱 Bakväggen klar. 3 kvar. |
| 10:41 | sak | info:guld | 🧱 Bakväggen klar. 3 kvar. |
| 10:41 | kvitto-visas | info:guld | 🧱 Bakväggen klar. 3 kvar. |
| 10:41 | toast | guld | 🧱 Bakväggen klar. 3 kvar. |
| 10:43 | klar | info:guld | 🧱 Bakväggen klar. 3 kvar. |
| 10:51 | händelse | printStart | sak=byggsats:vaggar |
| 10:54 | händelse | printKlar | sak=byggsats:vaggar n=1 |
| 10:54 | toast | guld | ✅ |
| 10:55 | händelse | tagitUrPrint | sak=byggsats:vaggar n=1 |
| 10:59 | väntar | info:guld | 🧱 Vänster vägg klar. 2 kvar. |
| 10:59 | sak | info:guld | 🧱 Vänster vägg klar. 2 kvar. |
| 10:59 | kvitto-visas | info:guld | 🧱 Vänster vägg klar. 2 kvar. |
| 10:59 | toast | guld | 🧱 Vänster vägg klar. 2 kvar. |
| 10:59 | händelse | malKlart | id=n3-isolera-tva-vaggar del=Dag 4 – Kärran och mer vind nasta=sov4 |
| 10:59 | paket |  | lapp |
| 10:59 | väntar | du | Nu vet grannen att jag bor HÄR. Han verkar inte glad. En skrivare räcker inte. |
| 10:59 | bekräftelse | du | plats |
| 10:59 | MÅL |  | Klart för idag – sov när du vill |
| 11:01 | klar | info:guld | 🧱 Vänster vägg klar. 2 kvar. |
| 11:02 | målruta |  | Klart för idag – sov när du vill |
| 11:03 | kvittens-bock |  | ✓ Isolera två väggar · 2/2 |
| 11:03 | sak | du | (nytt mål i rutan) |
| 11:03 | pil |  | Klart för idag – sov när du vill |
| 11:03 | klar | du | (nytt mål i rutan) |
| 11:05 | sak | du | Nu vet grannen att jag bor HÄR. Han verkar inte glad. En skrivare räcker inte. |
| 11:05 | kvallsrad | du | Nu vet grannen att jag bor HÄR. Han verkar inte glad. En skrivare räcker inte. |
| 11:06 | klar | du | Nu vet grannen att jag bor HÄR. Han verkar inte glad. En skrivare räcker inte. |
| 11:06 | väntar | notis:🌇 Klockan är 21. Ali slår igen luckan.  | 🌇 Klockan är 21. Ali slår igen luckan. Dagens jobb är klart – gå in i skjulet och sov i sängen. |
| 11:10 | nattkort | du | 🌙 Dag 4 är slut. God natt. zzz… Nu vet grannen att jag bor HÄR. Han verkar inte glad. En skrivare räcker inte. DAGENS PRINTAR Blomkruka × 15 Pall × 2 Grillspad |

<details><summary>Botens handlingar dag 4</summary>

- 0:00 — dag 4 börjar — (788 kr)
- 0:08 popup: "FORTSÄTT" (788 kr)
- 0:22 gå till Rolfs postlåda (28 m) (788 kr)
- 0:30 panel: "Rolfs postlåda
Det här låg i l" (908 kr)
- 0:31 tjänar pengar till väntar på sopbilen (BO): 908/968 kr → printar blomkruka (105 kr) (908 kr)
- 0:32 gå till skrivaren (8 m) (908 kr)
- 0:34 printar Blomkruka (908 kr)
- 0:38 tar ut 1 st ur skrivaren (908 kr)
- 0:43 gå till Ali (26 m) (908 kr)
- 0:43 öppnar Alis butik – sälja (908 kr)
- 0:45 säljer hos Ali: +105 kr (1013 kr)
- 0:59 tjänar pengar till väntar på sopbilen (BO): 1013/1073 kr → printar blomkruka (105 kr) (1013 kr)
- 1:04 gå till skrivaren (24 m) (1013 kr)
- 1:06 printar Blomkruka (1013 kr)
- 1:10 tar ut 1 st ur skrivaren (1013 kr)
- 1:15 gå till Ali (24 m) (1013 kr)
- 1:15 öppnar Alis butik – sälja (1013 kr)
- 1:17 säljer hos Ali: +105 kr (1118 kr)
- 1:20 tjänar pengar till väntar på sopbilen (BO): 1118/1178 kr → printar blomkruka (105 kr) (1118 kr)
- 1:31 plockar 3 skräp på tippen (bär max 16) (1118 kr)
- 1:34 gå till kvarnen (12 m) (1118 kr)
- 1:40 gå till skrivaren (5 m) (1118 kr)
- 1:42 printar Blomkruka (1118 kr)
- 1:45 tar ut 1 st ur skrivaren (1118 kr)
- 1:51 gå till Ali (26 m) (1118 kr)
- 1:51 öppnar Alis butik – sälja (1118 kr)
- 1:53 säljer hos Ali: +105 kr (1223 kr)
- 2:00 tjänar pengar till väntar på sopbilen (BO): 1223/1283 kr → printar blomkruka (105 kr) (1223 kr)
- 2:06 gå till skrivaren (24 m) (1223 kr)
- 2:07 printar Blomkruka (1223 kr)
- 2:11 tar ut 1 st ur skrivaren (1223 kr)
- 2:16 gå till Ali (24 m) (1223 kr)
- 2:16 öppnar Alis butik – sälja (1223 kr)
- 2:18 säljer hos Ali: +105 kr (1328 kr)
- 2:21 tjänar pengar till väntar på sopbilen (BO): 1328/1388 kr → printar blomkruka (105 kr) (1328 kr)
- 2:27 gå till skrivaren (24 m) (1328 kr)
- 2:28 printar Blomkruka (1328 kr)
- 2:32 tar ut 1 st ur skrivaren (1328 kr)
- 2:37 gå till Ali (24 m) (1328 kr)
- 2:37 öppnar Alis butik – sälja (1328 kr)
- 2:39 säljer hos Ali: +105 kr (1433 kr)
- 2:49 gå till Rolfs postlåda (31 m) (1433 kr)
- 2:51 gå till skrivaren (8 m) (1433 kr)
- 2:53 printar Grillspade (1433 kr)
- 2:58 tar ut 1 st ur skrivaren (1433 kr)
- 3:11 valj grillspade: true, vald grillspade, post {"l":null,"tr":null,"tm":[]}, nummer false (1433 kr)
- 3:13 gå till Rolfs postlåda (8 m) (1433 kr)
- 3:13 valj grillspade: true, vald grillspade, post {"l":null,"tr":null,"tm":[]}, nummer false (1433 kr)
- 3:34 fyller kärran med 8 skräp (1433 kr)
- 3:36 gå till kvarnen (8 m) (1433 kr)
- 3:53 tjänar pengar till väntar på flaskhalsen för matarband: 1433/1473 kr → printar blomkruka (105 kr) (1433 kr)
- 3:54 gå till skrivaren (5 m) (1433 kr)
- 3:55 printar Blomkruka (1433 kr)
- 3:59 tar ut 1 st ur skrivaren (1433 kr)
- 4:05 gå till Ali (27 m) (1433 kr)
- 4:05 öppnar Alis butik – sälja (1433 kr)
- 4:07 säljer hos Ali: +105 kr (1538 kr)
- 4:09 tjänar pengar till väntar på flaskhalsen för matarband: 1538/1578 kr → printar blomkruka (105 kr) (1538 kr)
- 4:14 gå till skrivaren (24 m) (1538 kr)
- 4:16 printar Blomkruka (1538 kr)
- 4:20 tar ut 1 st ur skrivaren (1538 kr)
- 4:25 gå till Ali (24 m) (1538 kr)
- 4:25 öppnar Alis butik – sälja (1538 kr)
- 4:27 säljer hos Ali: +105 kr (1643 kr)
- 4:30 tjänar pengar till väntar på flaskhalsen för matarband: 1643/1683 kr → printar blomkruka (105 kr) (1643 kr)
- 4:35 gå till skrivaren (24 m) (1643 kr)
- 4:37 printar Blomkruka (1643 kr)
- 4:41 tar ut 1 st ur skrivaren (1643 kr)
- 4:46 gå till Ali (24 m) (1643 kr)
- 4:46 öppnar Alis butik – sälja (1643 kr)
- 4:48 säljer hos Ali: +105 kr (1748 kr)
- 4:50 tjänar pengar till väntar på flaskhalsen för matarband: 1748/1788 kr → printar blomkruka (105 kr) (1748 kr)
- 4:55 gå till skrivaren (24 m) (1748 kr)
- 4:56 printar Blomkruka (1748 kr)
- 5:00 tar ut 1 st ur skrivaren (1748 kr)
- 5:06 gå till Ali (24 m) (1748 kr)
- 5:06 öppnar Alis butik – sälja (1748 kr)
- 5:07 säljer hos Ali: +105 kr (1853 kr)
- 5:09 tjänar pengar till väntar på flaskhalsen för matarband: 1853/1893 kr → printar blomkruka (105 kr) (1853 kr)
- 5:15 gå till skrivaren (24 m) (1853 kr)
- 5:16 printar Blomkruka (1853 kr)
- 5:20 tar ut 1 st ur skrivaren (1853 kr)
- 5:25 gå till Ali (24 m) (1853 kr)
- 5:25 öppnar Alis butik – sälja (1853 kr)
- 5:27 säljer hos Ali: +105 kr (1958 kr)
- 5:30 tjänar pengar till väntar på flaskhalsen för matarband: 1958/1998 kr → printar blomkruka (105 kr) (1958 kr)
- 5:35 gå till skrivaren (24 m) (1958 kr)
- 5:37 printar Blomkruka (1958 kr)
- 5:43 gå till skrivaren (4 m) (1958 kr)
- 5:43 tar ut 1 st ur skrivaren (1958 kr)
- 5:49 gå till Ali (26 m) (1958 kr)
- 5:49 öppnar Alis butik – sälja (1958 kr)
- 5:51 säljer hos Ali: +105 kr (2063 kr)
- 5:53 tjänar pengar till väntar på flaskhalsen för matarband: 2063/2103 kr → printar blomkruka (105 kr) (2063 kr)
- 5:58 gå till skrivaren (24 m) (2063 kr)
- 6:00 printar Blomkruka (2063 kr)
- 6:04 tar ut 1 st ur skrivaren (2063 kr)
- 6:09 gå till Ali (24 m) (2063 kr)
- 6:09 öppnar Alis butik – sälja (2063 kr)
- 6:11 säljer hos Ali: +105 kr (2168 kr)
- 6:13 tjänar pengar till väntar på flaskhalsen för matarband: 2168/2208 kr → printar blomkruka (105 kr) (2168 kr)
- 6:18 gå till skrivaren (24 m) (2168 kr)
- 6:20 printar Blomkruka (2168 kr)
- 6:23 tar ut 1 st ur skrivaren (2168 kr)
- 6:29 gå till Ali (24 m) (2168 kr)
- 6:29 öppnar Alis butik – sälja (2168 kr)
- 6:30 säljer hos Ali: +105 kr (2273 kr)
- 6:33 tjänar pengar till väntar på flaskhalsen för matarband: 2273/2313 kr → printar blomkruka (105 kr) (2273 kr)
- 6:38 gå till skrivaren (24 m) (2273 kr)
- 6:39 printar Blomkruka (2273 kr)
- 6:43 tar ut 1 st ur skrivaren (2273 kr)
- 6:48 gå till Ali (24 m) (2273 kr)
- 6:48 öppnar Alis butik – sälja (2273 kr)
- 6:50 säljer hos Ali: +105 kr (2378 kr)
- 6:52 tjänar pengar till väntar på flaskhalsen för matarband: 2378/2418 kr → printar blomkruka (105 kr) (2378 kr)
- 6:58 gå till skrivaren (24 m) (2378 kr)
- 6:59 printar Blomkruka (2378 kr)
- 7:03 tar ut 1 st ur skrivaren (2378 kr)
- 7:08 gå till Ali (24 m) (2378 kr)
- 7:08 öppnar Alis butik – sälja (2378 kr)
- 7:10 säljer hos Ali: +105 kr (2483 kr)
- 7:12 öppnar Alis butik – köpa sophållare (2483 kr)
- 7:15 köper matarband för 120 kr (2363 kr)
- 7:27 plockar 4 skräp på tippen (bär max 16) (2363 kr)
- 7:30 gå till kvarnen (11 m) (2363 kr)
- 7:34 gå till skrivaren (5 m) (2363 kr)
- 7:35 printar Sophållare (3 delar) (2363 kr)
- 7:54 tar ut 1 st ur skrivaren (2363 kr)
- 7:55 gå till kvarnen (3 m) (2363 kr)
- 8:05 gå till Ali (29 m) (2363 kr)
- 8:05 öppnar Alis butik – köpa receptet pall (2363 kr)
- 8:08 köper pall för 80 kr (2283 kr)
- 8:14 gå till skrivaren (24 m) (2283 kr)
- 8:15 printar Pall (2283 kr)
- 8:21 tar ut 1 st ur skrivaren (2283 kr)
- 8:26 gå till platsen för pall (20 m) (2283 kr)
- 8:27 ställer ut pall (2283 kr)
- 8:28 tjänar pengar till väntar på flaskhalsen för vindsnurra2: 2283/2323 kr → printar pall (180 kr) (2283 kr)
- 8:33 gå till skrivaren (20 m) (2283 kr)
- 8:34 printar Pall (2283 kr)
- 8:40 tar ut 1 st ur skrivaren (2283 kr)
- 8:46 gå till Ali (24 m) (2283 kr)
- 8:46 öppnar Alis butik – sälja (2283 kr)
- 8:47 säljer hos Ali: +180 kr (2463 kr)
- 8:54 öppnar Alis butik – köpa vindsnurra till skjultaket (2463 kr)
- 8:57 köper vindsnurra för 133 kr (2330 kr)
- 9:03 gå till skrivaren (24 m) (2330 kr)
- 9:05 printar Vindsnurra till skjultaket (2330 kr)
- 9:10 tar ut 1 st ur skrivaren (2330 kr)
- 9:15 gå till sätt vindsnurran på taket (18 m) (2330 kr)
- 9:29 popup: "Svara E" (2330 kr)
- 9:35 popup: "Nästa E" (2330 kr)
- 9:45 popup: "Nästa E" (2330 kr)
- 9:52 popup: "Nästa E" (2330 kr)
- 9:59 popup: "Nästa E" (2330 kr)
- 10:04 popup: "Lägg på E" (2330 kr)
- 10:08 gå till Ali (20 m) (2330 kr)
- 10:08 öppnar Alis butik – köpa isolerskiva (vägg) (2330 kr)
- 10:11 köper vaggar för 130 kr (2200 kr)
- 10:23 plockar 3 skräp på tippen (bär max 16) (2200 kr)
- 10:26 gå till kvarnen (13 m) (2200 kr)
- 10:31 gå till skrivaren (5 m) (2200 kr)
- 10:32 printar Isolerskiva (vägg) (2200 kr)
- 10:37 tar ut 1 st ur skrivaren (2200 kr)
- 10:41 gå till skjulet (bak) (19 m) (2200 kr)
- 10:49 gå till skrivaren (17 m) (2200 kr)
- 10:51 printar Isolerskiva (vägg) (2200 kr)
- 10:56 tar ut 1 st ur skrivaren (2200 kr)
- 10:59 gå till skjulet (vanster) (17 m) (2200 kr)
- 11:08 gå till sängen (1 m) (2200 kr)

</details>

## Dag 5

| Tid | Källa | Vem | Text |
|---|---|---|---|
| 11:10 | vara | ali | pall |
| 11:10 | händelse | malKlart | id=sov4 del=Dag 4 – Kärran och mer vind nasta=rolf3-brev |
| 11:10 | bekräftelse | du | plats |
| 11:11 | MÅL |  | Vänta på sopbilen. Den lämnar något. |

<details><summary>Botens handlingar dag 5</summary>

- 0:00 — dag 5 börjar — (2200 kr)

</details>
