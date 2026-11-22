# Simulering kapitel 1 – körning 1

*Gjord 2026-11-22 02:02 med `verktyg/sim-kapitel1.mjs` + `verktyg/sim-bot.js` (punkt AX). Boten går 4,5 m/s, läser 15 tecken/s, trampar, vevar, plockar, printar, köper och säljer via spelets egna funktioner. Tiderna är speltid.*

## Sammanfattning

| Dag | Minuter | Väntan | Prints (totalt) | Kr vid sömn | Bär | Trivsel |
|---|---|---|---|---|---|---|
| 1 | 9.1 | 2 % | 13 | 70 | 6 | 19 |
| 2 | 7.4 | 2 % | 24 | 715 | 10 | 36 |
| 3 | 9.5 | 2 % | 32 | 490 | 16 | 78 |
| 4 | 15.2 | 2 % | 54 | 2286 | 16 | 96 |
| 5 | 10.8 | 2 % | 65 | 4234 | 16 | 136 |
| 6 | 0.0 | 0 % | 65 | 4454 | 16 | 136 |

## Flaskhalskartan (EE)

| Dag | bara | mala | trampa | strom | skrivare | inkomst | Upplåst |
|---|---|---|---|---|---|---|---|
| 1 | 5 | 8 | 20 | 31 | 95 | 11 | grip (bara, 5:41), kruka (inkomst, 6:42) |
| 2 | 1 | 7 | 8 | 9 | 198 | 0 | kvarnmotor (mala, 2:22), rullstall (skrivare, 4:15), trim_skrivare (skrivare, 5:48), vindsnurra (trampa, 5:53) |
| 3 | 1 | 10 | 16 | 43 | 373 | 0 | cykelbatteri (strom, 4:44), ryggkorg (bara, 5:22), skrivare2 (skrivare, 7:03) |
| 4 | 1 | 5 | 7 | 45 | 518 | 0 | trim_skrivare2 (skrivare, 2:31), matarband (bara, 7:47, reserv), vindsnurra2 (strom, 10:06) |
| 5 | 4 | 22 | 21 | 40 | 278 | 0 | trim_skrivare3 (skrivare, 1:58), vindsnurra3 (strom, 8:19) |
| 6 | 0 | 0 | 0 | 0 | 0 | 0 |  |

TIDIG: 0 · FAST: 0 · upplåst av reserven (målet väntade 3 min): 1

**SKRATT:** 51 roliga ögonblick på 52 min (9.8 per 10 min, mål minst 5)

**Köp:**

- dag 1 2:38 – gammalkvarn (30 kr)
- dag 1 6:13 – grip (50 kr)
- dag 1 6:51 – kruka (40 kr)
- dag 1 8:05 – sang (60 kr)
- dag 2 2:48 – kvarnmotor (50 kr)
- dag 2 6:08 – vindsnurra (133 kr)
- dag 2 6:53 – dorr (120 kr)
- dag 3 5:15 – cykelbatteri (30 kr)
- dag 3 5:43 – ryggkorg (120 kr)
- dag 3 6:15 – bord (120 kr)
- dag 3 7:24 – skrivare2 (500 kr)
- dag 3 8:48 – tak (250 kr)
- dag 4 8:02 – matarband (120 kr)
- dag 4 9:20 – pall (80 kr)
- dag 4 10:52 – vindsnurra (133 kr)
- dag 4 12:06 – vaggar (130 kr)
- dag 5 4:20 – webbdator (300 kr)
- dag 5 5:18 – fonster (90 kr)
- dag 5 5:44 – golv (140 kr)
- dag 5 7:12 – taklampa (90 kr)
- dag 5 9:43 – vindsnurra (133 kr)

## Storykedjan (kvittens → varför → nytt mål)

| Dag | Tid | Id | Kvittens | Varför | Nytt mål | Tid till målet |
|---|---|---|---|---|---|---|
| 1 | 0:29 | lasta | Tung. Den har storebror aldrig burit så långt. |  | Skrivaren ställer jag mot skräpberget. Min första verkstad. | 0.7 s |
| 1 | 1:29 | valjModell | Den piper. Den GÖR något. |  | En nyckelring till, så länge storebrors rulle räcker. | 3.4 s |
| 1 | 1:34 | trampa | Klar! Ta ut den innan den ändrar sig. |  | En nyckelring till, så länge storebrors rulle räcker. | 0.5 s |
| 1 | 3:10 | flaska | Det blir tråd! Riktig plasttråd. |  | Min egen tråd. Nu printar jag en nyckelring av den. | 0.8 s |
| 1 | 7:32 | krukaD1 | En kruka. Mamma skulle bli så stolt. Hon får inte veta. |  | Ali gillar krukor. Han sa det själv. | 0.9 s |
| 1 | 8:50 | printSang | En säng. Jag printade en SÄNG. |  | Sängen ska in i skjulet. Sen sover jag. | 0.3 s |
| 2 | 6:35 | vindsnurra | Den snurrar! Långsamt. Men den snurrar. |  | Det drar från dörrhålet. En dörr kan jag printa. | 0.6 s |
| 3 | 5:22 | kopBatteri | Nu printar den klart även när jag vilar benen. |  | Jag springer för mycket. Med en ryggkorg bär jag tio saker. | 0.7 s |
| 4 | 8:40 | sophallare | Nu kan jag tömma hela kärran på en gång. |  | Jag behöver något att sitta på. En pall. Lagom ambitiöst. | 0.6 s |
| 5 | 4:03 | n4-isolera-de-sista | Det är tätt, det är varmt. |  | Alis pappas dator. Med den kan jag sälja på nätet. | 0.4 s |

## Hur länge nya mål väntade (från att förra målet blev klart till att det nya syntes i målrutan)

Snitt 2.1 s · max 12.7 s · över 4 s: 4 · över 8 s: 4 av 58

## Flaggor (34)

- **UPPREPNING** dag 4 9:20: Bra val. Folk köper sånt. Jag vet inte varför. (CT)
- **LUGN** dag 2 0:08: 0.0 s efter BÖRJA DAGEN: [lapp] "Första natten i en riktig säng. Jag printade den själv."
- **KROCK** dag 1 3:14: 0.7 s mellan [notis] "Kvarnen funkar. Soptippen är en gruva." och [notis] "💭 Min egen tråd. Nu printar jag en nyckelring av den."
- **KROCK** dag 2 1:05: 0.1 s mellan [lapp] "Sopbilen tippade en ny last. Allt det skräpet – och grinden " och [notis] "En stor bil tippade en ny last. Allt det skräpet – och grind"
- **KROCK** dag 4 4:26: 2.2 s mellan [bubbla] "Mjau." och [notis] "💭 En sophållare bakom kvarnen. Då matar den sig själv."
- **KROCK** dag 4 11:10: 0.2 s mellan [lapp] "Slut på trampandet. Nästan." och [notis] "💭 Det drar genom väggarna. Isolering, och sen blir det varm"
- **KROCK** dag 5 7:46: 1.5 s mellan [lapp] "Lampan lyser. Pappa ska visst komma förbi i morgon." och [notis] "💭 En tredje vindsnurra på taket. Skrivare M drar mycket."
- **SEN** dag 1 7:50: 65.1 s efter händelsen: ali: "Ali här. Jag såg Skräpgrip på avstånd. Ett streck blev lite snett. Mit"
- **SEN** dag 2 0:29: 19.2 s efter händelsen: notis:Första natten i en riktig säng. Jag prin: "Första natten i en riktig säng. Jag printade den själv."
- **SEN** dag 3 0:56: 20.6 s efter händelsen: du: "En hel kanot. Kvarnen skulle äta upp sig själv."
- **SEN** dag 3 7:27: 76.6 s efter händelsen: ali: "Ali här. Du printade Ryggkorg från min ritning. Och det FUNKAR? Jag ha"
- **SEN** dag 5 1:14: 15.0 s efter händelsen: värld:Mjau.: "Mjau."
- **SEN** dag 5 3:00: 16.8 s efter händelsen: du: "En tandborste. Den har varit på fel ställe."
- **SEN** dag 5 5:18: 12.1 s efter händelsen: värld:TUUT TUUT!: "TUUT TUUT!"
- **SEN** dag 5 6:32: 53.9 s efter händelsen: ali: "Ali här. Fönster – printad. På riktigt. Jag har visat bilden för min f"
- **PAUS** dag 1 0:30: 0.0 s paus före "Tung. Den har storebror aldrig burit så långt."
- **PAUS** dag 1 1:33: 0.0 s paus före "Den piper. Den GÖR något."
- **PAUS** dag 1 1:35: 0.0 s paus före "Klar! Ta ut den innan den ändrar sig."
- **PAUS** dag 1 3:11: 0.0 s paus före "Det blir tråd! Riktig plasttråd."
- **PAUS** dag 1 3:13: 0.0 s paus före "Kvarnen funkar. Soptippen är en gruva."
- **PAUS** dag 2 3:39: 0.0 s paus före "Gården är STÄDAD, av mig, frivilligt. Mamma skulle"
- **PAUS** dag 2 6:37: 0.0 s paus före "Den snurrar! Långsamt. Men den snurrar."
- **PAUS** dag 3 5:24: 0.0 s paus före "Nu printar den klart även när jag vilar benen."
- **PAUS** dag 4 4:26: 0.0 s paus före "En sophållare bakom kvarnen. Då matar den sig själ"
- **PAUS** dag 4 4:31: 0.0 s paus före "Det får inte plats. Jag behöver något att tippa i."
- **PAUS** dag 4 8:42: 0.0 s paus före "Nu kan jag tömma hela kärran på en gång."
- **PAUS** dag 5 4:05: 0.0 s paus före "Det är tätt, det är varmt."
- **PAUS** dag 5 5:06: 0.0 s paus före "Göran snodde en lampskärm."
- **TORRT** dag 5 2:51: 248 s utan roligt ögonblick
- **TEMPO** dag 1 9:03: dag 1 tog 9.1 min (mål 10–12)
- **TEMPO** dag 2 7:24: dag 2 tog 7.4 min (mål 10–15)
- **TEMPO** dag 3 9:30: dag 3 tog 9.5 min (mål 10–15)
- **TEMPO** dag 4 15:10: dag 4 tog 15.2 min (mål 10–15)
- **TEMPO** dag 6 0:00: dag 6 tog 0.0 min (mål 10–15)

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
| 0:15 | bekräftelse | du | Group |
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
| 0:48 | nick |  | nick:2 |
| 0:52 | klar | du | Skrivaren behöver ström. Hur fixar jag det här ute? |
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
| 2:24 | struken | du | Ali har en gammal kvarn. Den gör tråd av skräp. |
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
| 2:55 | hjälp | kontroll | Klicka och håll: Veva kvarnen |
| 2:57 | kvittens-bock |  | ✓ Ställ kvarnen |
| 2:58 | klar | du | Skräp i kvarnen, sen vevar jag. Då blir det tråd. |
| 3:09 | väntar | info:bra | 3 st i tratten – veva nu! |
| 3:09 | sak | info:bra | 3 st i tratten – veva nu! |
| 3:09 | kvitto-visas | info:bra | 3 st i tratten – veva nu! |
| 3:09 | toast | bra | 3 st i tratten – veva nu! |
| 3:10 | händelse | malKlart | id=flaska del=Dag 1 – Kom igång nasta=egenPrint |
| 3:10 | bekräftelse | du | plats |
| 3:10 | kvittens | du | Det blir tråd! Riktig plasttråd. |
| 3:10 | väntar | du | Det blir tråd! Riktig plasttråd. |
| 3:10 | väntar | du | Kvarnen funkar. Soptippen är en gruva. |
| 3:10 | väntar | du | Min egen tråd. Nu printar jag en nyckelring av den. |
| 3:10 | MÅL |  | Printa med egen tråd |
| 3:11 | klar | info:bra | 3 st i tratten – veva nu! |
| 3:11 | sak | du | Det blir tråd! Riktig plasttråd. |
| 3:11 | röst | du | Det blir tråd! Riktig plasttråd. · STORY |
| 3:13 | målruta |  | Printa med egen tråd |
| 3:13 | klar | du | Det blir tråd! Riktig plasttråd. |
| 3:13 | sak | du | Kvarnen funkar. Soptippen är en gruva. |
| 3:13 | kvitto-visas | du | Kvarnen funkar. Soptippen är en gruva. |
| 3:13 | lapp | 📔 Dagbok | Kvarnen funkar. Soptippen är en gruva. |
| 3:13 | dagbokrad | du | Kvarnen funkar. Soptippen är en gruva. |
| 3:13 | notis | dagbok | Kvarnen funkar. Soptippen är en gruva. |
| 3:14 | klar | du | Kvarnen funkar. Soptippen är en gruva. |
| 3:14 | sak | du | Min egen tråd. Nu printar jag en nyckelring av den. |
| 3:14 | pil |  | Printa med egen tråd |
| 3:14 | notis | tanke | 💭 Min egen tråd. Nu printar jag en nyckelring av den. |
| 3:14 | röst | du | Min egen tråd. Nu printar jag en nyckelring av den. · MÅL |
| 3:14 | nick |  | nick:11 |
| 3:18 | klar | du | Min egen tråd. Nu printar jag en nyckelring av den. |
| 3:23 | händelse | printStart | sak=nyckelring |
| 3:23 | toast | bra | 🔗 Slangen kopplad |
| 3:27 | sak | mamma | Hur kunde du bara gå? Är du ok? Svara när jag ringer! |
| 3:27 | sms | mamma | Hur kunde du bara gå? Är du ok? Svara när jag ringer! |
| 3:27 | sms-bubbla | mamma | Hur kunde du bara gå? Är du ok? Svara när jag ringer! |
| 3:27 | röst | mamma | Hur kunde du bara gå? Är du ok? Svara när jag ringer! · STORY |
| 3:28 | toast | guld | ✅ |
| 3:28 | händelse | printKlar | sak=nyckelring n=3 |
| 3:28 | paket |  | tanke |
| 3:28 | tanke | du | En nyckelring av en gammal schampoflaska. Den luktar fortfarande päron. |
| 3:28 | väntar | du | En nyckelring av en gammal schampoflaska. Den luktar fortfarande päron. |
| 3:28 | skratt | du | egen tråd |
| 3:28 | händelse | malKlart | id=egenPrint del=Dag 1 – Kom igång nasta=salj |
| 3:28 | bekräftelse | du | plats |
| 3:28 | struken | du | En nyckelring av en gammal schampoflaska. Den luktar fortfarande päron. |
| 3:28 | väntar | du | Ali köper nog den här också. |
| 3:28 | MÅL |  | Sälj hos Ali |
| 3:28 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 3:31 | målruta |  | Sälj hos Ali |
| 3:32 | klar | mamma | Hur kunde du bara gå? Är du ok? Svara när jag ringer! |
| 3:32 | kvittens-bock |  | ✓ Printa med egen tråd |
| 3:34 | sak | du | Ali köper nog den här också. |
| 3:34 | pil |  | Sälj hos Ali |
| 3:34 | notis | tanke | 💭 Ali köper nog den här också. |
| 3:34 | röst | du | Ali köper nog den här också. · MÅL |
| 3:34 | nick |  | nick:12 |
| 3:36 | klar | du | Ali köper nog den här också. |
| 3:40 | händelse | printStart | sak=nyckelring |
| 3:41 | toast | guld | ✅ |
| 3:41 | händelse | printKlar | sak=nyckelring n=4 |
| 3:41 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 3:44 | händelse | printStart | sak=nyckelring |
| 3:45 | toast | guld | ✅ |
| 3:45 | händelse | printKlar | sak=nyckelring n=5 |
| 3:45 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 3:49 | väntar | kjelle | God morgon, det är Kjelle på Radio Tippen! Det har flyttat in någon i det gamla skjulet. Med en cykel och en skrivare. Spännande, Gunnar. |
| 3:49 | radio | kjelle | God morgon, det är Kjelle på Radio Tippen! Det har flyttat in någon i det gamla skjulet. Med en cykel och en skrivare. Spännande, Gunnar. |
| 3:49 | skratt | du | Radio-Kjelle |
| 3:49 | sak | kjelle | God morgon, det är Kjelle på Radio Tippen! Det har flyttat in någon i det gamla skjulet. Med en cykel och en skrivare. Spännande, Gunnar. |
| 3:49 | notis |  | 📻 Radio Tippen: God morgon, det är Kjelle på Radio Tippen! Det har flyttat in någon i det gamla skjulet. Med en cykel och en skrivare. Spännande, Gunnar. |
| 3:49 | röst | kjelle | God morgon, det är Kjelle på Radio Tippen! Det har flyttat in någon i det gamla skjulet. Med en cykel och en skrivare. Spännande, Gunnar. · REAKTION |
| 3:52 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 3:54 | händelse | salt | sak=nyckelring n=3 |
| 3:54 | aliSalt | ali | 45 |
| 3:54 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 3:54 | händelse | dialog | id=aliNyckelIgen |
| 3:54 | butiksbubbla | ali | Nyckelringar igen? Folk tappar sina nycklar hela tiden. |
| 3:55 | väntar | ali | Nyckelringar igen? Folk tappar sina nycklar hela tiden. |
| 3:55 | händelse | malKlart | id=salj del=Dag 1 – Kom igång nasta=powerbank |
| 3:55 | bekräftelse | du | plats |
| 3:55 | paket |  | sms → ge |
| 3:55 | väntar | ali | Ali här. Glömde en sak. Kom tillbaka, jag har nåt åt dig. |
| 3:55 | väntar |  | (läget ändras) |
| 3:55 | MÅL |  | Gå till Ali |
| 3:57 | väntar | du | Gå till Ali. |
| 3:58 | målruta |  | Gå till Ali |
| 3:59 | kvittens-bock |  | ✓ Sälj hos Ali |
| 4:00 | tanke | du | Vem är Gunnar? |
| 4:00 | väntar | du | Vem är Gunnar? |
| 4:01 | klar | kjelle | God morgon, det är Kjelle på Radio Tippen! Det har flyttat in någon i det gamla skjulet. Med en cykel och en skrivare. Spännande, Gunnar. |
| 4:01 | hjälp | kontroll | Tab: Dina sms och dagboken |
| 4:03 | sak | du | Gå till Ali. |
| 4:03 | pil |  | Gå till Ali |
| 4:03 | röst | du | Gå till Ali. · MÅL |
| 4:05 | klar | du | Gå till Ali. |
| 4:07 | sak | ali | Nyckelringar igen? Folk tappar sina nycklar hela tiden. |
| 4:07 | röst | ali | Nyckelringar igen? Folk tappar sina nycklar hela tiden. · STORY |
| 4:09 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 4:11 | klar | ali | Nyckelringar igen? Folk tappar sina nycklar hela tiden. |
| 4:13 | sak | ali | Ali här. Glömde en sak. Kom tillbaka, jag har nåt åt dig. |
| 4:13 | sms | ali | Ali här. Glömde en sak. Kom tillbaka, jag har nåt åt dig. |
| 4:13 | händelse | dialog | id=aliPbKom |
| 4:13 | sms-bubbla | ali | Ali här. Glömde en sak. Kom tillbaka, jag har nåt åt dig. |
| 4:13 | röst | ali | Ali här. Glömde en sak. Kom tillbaka, jag har nåt åt dig. · STORY |
| 4:18 | klar | ali | Ali här. Glömde en sak. Kom tillbaka, jag har nåt åt dig. |
| 4:18 | väntar | du | Ali har något åt mig. Jag går över vägen till affären. |
| 4:20 | sak |  | (läget ändras) |
| 4:20 | klar |  | (läget ändras) |
| 4:20 | paket | ali | ali → ge |
| 4:20 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 4:20 | händelse | dialog | id=aliPowerbank |
| 4:20 | röst | ali | Jag såg dig cykla. Det ser jobbigt ut. Ta den här. Bra kunder får bonus. · STORY |
| 4:20 | butiksbubbla | ali | Jag såg dig cykla. Det ser jobbigt ut. Ta den här. Bra kunder får bonus. |
| 4:31 | paket |  | tanke |
| 4:31 | tanke | du | Powerbanken ska sitta på cykeln. |
| 4:31 | väntar | du | Powerbanken ska sitta på cykeln. |
| 4:32 | skratt | du | powerbanken monterad |
| 4:32 | paket |  | tanke |
| 4:32 | tanke | du | Nu sparas lite ström. En nyckelring, typ. Framtiden är här, och den sitter fast med eltejp. |
| 4:32 | väntar | du | Nu sparas lite ström. En nyckelring, typ. Framtiden är här, och den sitter fast med eltejp. |
| 4:32 | monterat | du | byggsats:powerbank |
| 4:32 | händelse | monterat | sak=powerbank |
| 4:32 | sak | du | Nu sparas lite ström. En nyckelring, typ. Framtiden är här, och den sitter fast med eltejp. |
| 4:32 | kvitto-visas | du | Nu sparas lite ström. En nyckelring, typ. Framtiden är här, och den sitter fast med eltejp. |
| 4:32 | notis | tanke | 💭 Nu sparas lite ström. En nyckelring, typ. Framtiden är här, och den sitter fast med eltejp. |
| 4:32 | röst | du | Nu sparas lite ström. En nyckelring, typ. Framtiden är här, och den sitter fast med eltejp. · REAKTION |
| 4:32 | händelse | malKlart | id=powerbank del=Dag 1 – Kom igång nasta=kopGrip |
| 4:32 | bekräftelse | du | plats |
| 4:32 | paket |  | lapp |
| 4:32 | lapp-kö | 🧺 Ali | Ali här. Nyckelringen sålde direkt. Jag ville bli ingenjör en gång. Nu har jag låtit en AI rita en skräpgrip. Kom och titta. |
| 4:32 | väntar | ali | Ali här. Nyckelringen sålde direkt. Jag ville bli ingenjör en gång. Nu har jag låtit en AI rita en skräpgrip. Kom och titta. |
| 4:33 | MÅL |  | Plocka skräp och mal det |
| 4:35 | struken | du | Vem är Gunnar? |
| 4:35 | väntar | du | Köp en skräpgrip hos Ali. Den kostar femtio kronor. |
| 4:35 | målruta |  | Plocka skräp och mal det |
| 4:36 | kvittens-bock |  | ✓ Gå till Ali |
| 4:40 | klar | du | Nu sparas lite ström. En nyckelring, typ. Framtiden är här, och den sitter fast med eltejp. |
| 4:40 | sak | du | Köp en skräpgrip hos Ali. Den kostar femtio kronor. |
| 4:40 | pil |  | Plocka skräp och mal det |
| 4:40 | röst | du | Köp en skräpgrip hos Ali. Den kostar femtio kronor. · MÅL |
| 4:41 | nick |  | nick:14 |
| 4:45 | klar | du | Köp en skräpgrip hos Ali. Den kostar femtio kronor. |
| 4:47 | struken | du | Ali har något åt mig. Jag går över vägen till affären. |
| 4:47 | struken | du | Powerbanken ska sitta på cykeln. |
| 4:47 | sak | ali | Ali här. Nyckelringen sålde direkt. Jag ville bli ingenjör en gång. Nu har jag låtit en AI rita en skräpgrip. Kom och titta. |
| 4:47 | sms | ali | Ali här. Nyckelringen sålde direkt. Jag ville bli ingenjör en gång. Nu har jag låtit en AI rita en skräpgrip. Kom och titta. |
| 4:47 | händelse | dialog | id=aliGripSms |
| 4:47 | sms-bubbla | ali | Ali här. Nyckelringen sålde direkt. Jag ville bli ingenjör en gång. Nu har jag låtit en AI rita en skräpgrip. Kom och titta. |
| 4:47 | röst | ali | Ali här. Nyckelringen sålde direkt. Jag ville bli ingenjör en gång. Nu har jag låtit en AI rita en skräpgrip. Kom och titta. · STORY |
| 4:48 | händelse | printStart | sak=nyckelring |
| 4:49 | toast | fel | Ingen ström – trampa cykeln |
| 4:49 | väntar | notis:Storebrors skrivare: Ingen ström – tramp | Storebrors skrivare: Ingen ström – trampa cykeln |
| 4:50 | toast | guld | ✅ |
| 4:50 | händelse | printKlar | sak=nyckelring n=6 |
| 4:51 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 4:53 | händelse | printStart | sak=nyckelring |
| 4:54 | toast | guld | ✅ |
| 4:54 | händelse | printKlar | sak=nyckelring n=7 |
| 4:57 | klar | ali | Ali här. Nyckelringen sålde direkt. Jag ville bli ingenjör en gång. Nu har jag låtit en AI rita en skräpgrip. Kom och titta. |
| 4:57 | väntar | du | Med en skräpgrip slipper jag böja mig. Ali har en ritning. |
| 4:59 | sak | du | Med en skräpgrip slipper jag böja mig. Ali har en ritning. |
| 4:59 | röst | du | Med en skräpgrip slipper jag böja mig. Ali har en ritning. · STORY |
| 5:02 | paket |  | tanke |
| 5:02 | tanke | du | Femtio kronor. Nu har jag råd med gripen. |
| 5:02 | väntar | du | Femtio kronor. Nu har jag råd med gripen. |
| 5:03 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 5:04 | klar | du | Med en skräpgrip slipper jag böja mig. Ali har en ritning. |
| 5:05 | händelse | printStart | sak=nyckelring |
| 5:06 | sak | du | Femtio kronor. Nu har jag råd med gripen. |
| 5:06 | notis | tanke | 💭 Femtio kronor. Nu har jag råd med gripen. |
| 5:06 | röst | du | Femtio kronor. Nu har jag råd med gripen. · REAKTION |
| 5:06 | toast | guld | ✅ |
| 5:06 | händelse | printKlar | sak=nyckelring n=8 |
| 5:07 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 5:10 | klar | du | Femtio kronor. Nu har jag råd med gripen. |
| 5:12 | struken | notis:Storebrors skrivare: Ingen ström – tramp | Storebrors skrivare: Ingen ström – trampa cykeln |
| 5:13 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 5:15 | händelse | salt | sak=nyckelring n=1 |
| 5:15 | paket |  | ali → ge |
| 5:15 | väntar | ali | Du får bonus! 10 kr extra. Du ser hungrig ut. |
| 5:15 | väntar |  | (läget ändras) |
| 5:15 | aliSalt | ali | 15 |
| 5:15 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 5:15 | händelse | salt | sak=nyckelring n=1 |
| 5:15 | aliSalt | ali | 15 |
| 5:15 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 5:15 | händelse | salt | sak=nyckelring n=1 |
| 5:15 | aliSalt | ali | 15 |
| 5:15 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 5:16 | sak | ali | Du får bonus! 10 kr extra. Du ser hungrig ut. |
| 5:16 | notis |  | Ali: ”Du får bonus! 10 kr extra. Du ser hungrig ut.” |
| 5:16 | röst | ali | Du får bonus! 10 kr extra. Du ser hungrig ut. · REAKTION |
| 5:20 | klar | ali | Du får bonus! 10 kr extra. Du ser hungrig ut. |
| 5:22 | sak |  | (läget ändras) |
| 5:22 | klar |  | (läget ändras) |
| 5:29 | händelse | printStart | sak=nyckelring |
| 5:30 | toast | guld | ✅ |
| 5:30 | händelse | printKlar | sak=nyckelring n=9 |
| 5:41 | upplåst | bara | grip |
| 5:41 | brott | UPPLÅST | grip (bara 3 av 3) |
| 5:41 | händelse | upplast | id=grip flask=bara |
| 5:41 | paket |  | tanke |
| 5:41 | tanke | du | Ett skräp i taget. Jag springer ihjäl mig. |
| 5:41 | väntar | du | Ett skräp i taget. Jag springer ihjäl mig. |
| 5:41 | sak | du | Ett skräp i taget. Jag springer ihjäl mig. |
| 5:41 | notis | tanke | 💭 Ett skräp i taget. Jag springer ihjäl mig. |
| 5:41 | röst | du | Ett skräp i taget. Jag springer ihjäl mig. · STORY |
| 5:44 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 5:45 | klar | du | Ett skräp i taget. Jag springer ihjäl mig. |
| 5:46 | händelse | printStart | sak=nyckelring |
| 5:47 | toast | guld | ✅ |
| 5:47 | händelse | printKlar | sak=nyckelring n=10 |
| 5:48 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 5:50 | händelse | printStart | sak=nyckelring |
| 5:51 | toast | fel | Ingen ström – trampa cykeln |
| 5:53 | toast | guld | ✅ |
| 5:53 | händelse | printKlar | sak=nyckelring n=11 |
| 5:53 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 5:55 | tanke | du | Gripen hos Ali. |
| 5:55 | väntar | du | Gripen hos Ali. |
| 5:55 | nick |  | paminn:14 |
| 5:56 | väntar | bud | (tips) |
| 5:56 | sak | bud | (tips) |
| 5:57 | struken | du | Gripen hos Ali. |
| 5:57 | väntar | du | Jag har pengar nu. Hos Ali kan jag köpa uppgraderingar – bära mer eller printa snabbare. |
| 5:58 | klar | bud | (tips) |
| 5:59 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 6:00 | händelse | salt | sak=nyckelring n=1 |
| 6:00 | aliSalt | ali | 15 |
| 6:00 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 6:00 | händelse | salt | sak=nyckelring n=1 |
| 6:00 | aliSalt | ali | 15 |
| 6:00 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 6:01 | händelse | salt | sak=nyckelring n=1 |
| 6:01 | aliSalt | ali | 15 |
| 6:01 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 6:01 | sak | du | Jag har pengar nu. Hos Ali kan jag köpa uppgraderingar – bära mer eller printa snabbare. |
| 6:01 | röst | du | Jag har pengar nu. Hos Ali kan jag köpa uppgraderingar – bära mer eller printa snabbare. · MÅL |
| 6:09 | klar | du | Jag har pengar nu. Hos Ali kan jag köpa uppgraderingar – bära mer eller printa snabbare. |
| 6:11 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 6:12 | struken | info:guld | 3D-modell köpt – printa skräpgrip |
| 6:12 | händelse | kopt | sak=grip |
| 6:12 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 6:12 | händelse | dialog | id=aliForstaRitning |
| 6:12 | röst | ali | Bra val. Ritningen räcker till en skräpgrip. · STORY |
| 6:12 | butiksbubbla | ali | Bra val. Ritningen räcker till en skräpgrip. |
| 6:14 | händelse | malKlart | id=kopGrip del=Dag 1 – Kom igång nasta=printGrip |
| 6:14 | bekräftelse | du | plats |
| 6:14 | väntar | du | Min första 3D-modell! Jag printar inte bara saker – jag printar maskiner. |
| 6:14 | MÅL |  | Printa skräpgripen |
| 6:14 | sak | du | Min första 3D-modell! Jag printar inte bara saker – jag printar maskiner. |
| 6:14 | kvitto-visas | du | Min första 3D-modell! Jag printar inte bara saker – jag printar maskiner. |
| 6:14 | lapp | 📔 Dagbok | Min första 3D-modell! Jag printar inte bara saker – jag printar maskiner. |
| 6:14 | dagbokrad | du | Min första 3D-modell! Jag printar inte bara saker – jag printar maskiner. |
| 6:14 | notis | dagbok | Min första 3D-modell! Jag printar inte bara saker – jag printar maskiner. |
| 6:15 | klar | du | Min första 3D-modell! Jag printar inte bara saker – jag printar maskiner. |
| 6:15 | målruta |  | Printa skräpgripen |
| 6:15 | sak | du | (nytt mål i rutan) |
| 6:15 | pil |  | Printa skräpgripen |
| 6:15 | klar | du | (nytt mål i rutan) |
| 6:15 | nick |  | nick:15 |
| 6:24 | händelse | printStart | sak=byggsats:grip |
| 6:26 | händelse | printKlar | sak=byggsats:grip n=1 |
| 6:26 | toast | guld | ✅ |
| 6:38 | väntar | info:guld | Skräpgrip ska jag ha på mig. |
| 6:38 | händelse | tagitUrPrint | sak=byggsats:grip n=1 |
| 6:38 | paket |  | sms |
| 6:38 | väntar | ali | Ali här. Jag såg Skräpgrip på avstånd. Ett streck blev lite snett. Mitt fel. Vackert ändå. |
| 6:38 | sak | info:guld | Skräpgrip ska jag ha på mig. |
| 6:38 | kvitto-visas | info:guld | Skräpgrip ska jag ha på mig. |
| 6:38 | toast | guld | Skräpgrip ska jag ha på mig. |
| 6:40 | hjälp | kontroll | Klick: Klicka för att ta på dig den |
| 6:40 | klar | info:guld | Skräpgrip ska jag ha på mig. |
| 6:42 | väntar | info:guld | 🦾 Skräpgripen sitter! Jag bär 6, siktar lättare och plockar när jag går nära. |
| 6:42 | tog på | du | byggsats:grip |
| 6:42 | händelse | monterat | sak=grip |
| 6:42 | sak | info:guld | 🦾 Skräpgripen sitter! Jag bär 6, siktar lättare och plockar när jag går nära. |
| 6:42 | kvitto-visas | info:guld | 🦾 Skräpgripen sitter! Jag bär 6, siktar lättare och plockar när jag går nära. |
| 6:42 | toast | guld | 🦾 Skräpgripen sitter! Jag bär 6, siktar lättare och plockar när jag går nära. |
| 6:42 | händelse | malKlart | id=printGrip del=Dag 1 – Kom igång nasta=krukaD1 |
| 6:42 | bekräftelse | du | plats |
| 6:42 | MÅL |  | Printa och sälj nyckelringar |
| 6:42 | upplåst | inkomst | kruka |
| 6:42 | brott | UPPLÅST | kruka (inkomst 11 av 6) |
| 6:42 | händelse | upplast | id=kruka flask=inkomst |
| 6:42 | paket |  | tanke → sms |
| 6:42 | tanke | du | Nyckelringar, nyckelringar. Ali kan inte vilja ha fler. |
| 6:42 | väntar | du | Nyckelringar, nyckelringar. Ali kan inte vilja ha fler. |
| 6:42 | väntar | ali | Prova en kruka. Folk köper krukor. Ingen vet varför. |
| 6:42 | skratt | ali | Prova en kruka. Folk köper krukor. Ingen |
| 6:44 | klar | info:guld | 🦾 Skräpgripen sitter! Jag bär 6, siktar lättare och plockar när jag går nära. |
| 6:44 | väntar | du | Köp krukreceptet. |
| 6:45 | målruta |  | Köp krukreceptet |
| 6:46 | kvittens-bock |  | ✓ Printa skräpgripen |
| 6:46 | sak | du | Köp krukreceptet. |
| 6:46 | pil |  | Köp krukreceptet |
| 6:46 | röst | du | Köp krukreceptet. · MÅL |
| 6:47 | nick |  | nick:16 |
| 6:48 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 6:48 | klar | du | Köp krukreceptet. |
| 6:50 | händelse | kopt | sak=kruka |
| 6:50 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 6:50 | händelse | dialog | id=aliKrukaRecept |
| 6:50 | röst | ali | Bra val. Folk köper sånt. Jag vet inte varför. · STORY |
| 6:50 | butiksbubbla | ali | Blomkruka? Bra val. Folk köper sånt. Jag vet inte varför. |
| 6:52 | sak | du | Nyckelringar, nyckelringar. Ali kan inte vilja ha fler. |
| 6:52 | notis | tanke | 💭 Nyckelringar, nyckelringar. Ali kan inte vilja ha fler. |
| 6:52 | röst | du | Nyckelringar, nyckelringar. Ali kan inte vilja ha fler. · STORY |
| 6:56 | klar | du | Nyckelringar, nyckelringar. Ali kan inte vilja ha fler. |
| 6:58 | sak | ali | Prova en kruka. Folk köper krukor. Ingen vet varför. |
| 6:58 | skratt | ali | Prova en kruka. Folk köper krukor. Ingen |
| 6:58 | sms | ali | Prova en kruka. Folk köper krukor. Ingen vet varför. |
| 6:58 | skratt | ali | Prova en kruka. Folk köper krukor. Ingen |
| 6:58 | händelse | dialog | id=aliKrukaSms |
| 6:58 | sms-bubbla | ali | Prova en kruka. Folk köper krukor. Ingen vet varför. |
| 6:58 | skratt | ali | Prova en kruka. Folk köper krukor. Ingen |
| 6:58 | röst | ali | Prova en kruka. Folk köper krukor. Ingen vet varför. · STORY |
| 7:03 | klar | ali | Prova en kruka. Folk köper krukor. Ingen vet varför. |
| 7:03 | skratt | ali | Prova en kruka. Folk köper krukor. Ingen |
| 7:03 | väntar | du | Ali vill ha krukor. Jag printar en blomkruka. |
| 7:11 | sak | du | Ali vill ha krukor. Jag printar en blomkruka. |
| 7:11 | röst | du | Ali vill ha krukor. Jag printar en blomkruka. · STORY |
| 7:11 | händelse | printStart | sak=kruka |
| 7:14 | toast | fel | Ingen ström – trampa cykeln |
| 7:15 | klar | du | Ali vill ha krukor. Jag printar en blomkruka. |
| 7:32 | toast | guld | ✅ |
| 7:32 | händelse | printKlar | sak=kruka n=1 |
| 7:32 | händelse | malKlart | id=krukaD1 del=Dag 1 – Kom igång nasta=saljKruka |
| 7:32 | bekräftelse | du | plats |
| 7:32 | kvittens | du | En kruka. Mamma skulle bli så stolt. Hon får inte veta. |
| 7:32 | väntar | du | En kruka. Mamma skulle bli så stolt. Hon får inte veta. |
| 7:32 | väntar | du | Ali gillar krukor. Han sa det själv. |
| 7:32 | MÅL |  | Sälj blomkrukan |
| 7:32 | sak | du | En kruka. Mamma skulle bli så stolt. Hon får inte veta. |
| 7:32 | röst | du | En kruka. Mamma skulle bli så stolt. Hon får inte veta. · STORY |
| 7:32 | målruta |  | Sälj blomkrukan |
| 7:32 | händelse | tagitUrPrint | sak=kruka n=1 |
| 7:36 | klar | du | En kruka. Mamma skulle bli så stolt. Hon får inte veta. |
| 7:37 | sak | du | Ali gillar krukor. Han sa det själv. |
| 7:37 | pil |  | Sälj blomkrukan |
| 7:37 | notis | tanke | 💭 Ali gillar krukor. Han sa det själv. |
| 7:37 | röst | du | Ali gillar krukor. Han sa det själv. · MÅL |
| 7:40 | klar | du | Ali gillar krukor. Han sa det själv. |
| 7:47 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 7:49 | händelse | salt | sak=kruka n=1 |
| 7:49 | aliSalt | ali | 70 |
| 7:49 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 7:50 | sak | ali | Ali här. Jag såg Skräpgrip på avstånd. Ett streck blev lite snett. Mitt fel. Vackert ändå. |
| 7:50 | sms | ali | Ali här. Jag såg Skräpgrip på avstånd. Ett streck blev lite snett. Mitt fel. Vackert ändå. |
| 7:50 | sms-bubbla | ali | Ali här. Jag såg Skräpgrip på avstånd. Ett streck blev lite snett. Mitt fel. Vackert ändå. |
| 7:50 | röst | ali | Ali här. Jag såg Skräpgrip på avstånd. Ett streck blev lite snett. Mitt fel. Vackert ändå. · REAKTION |
| 7:50 | händelse | malKlart | id=saljKruka del=Dag 1 – Kom igång nasta=kopSang |
| 7:50 | bekräftelse | du | plats |
| 7:50 | väntar | du | Jag tänker inte sova på betongen i natt. Ali har en säng. Typ. |
| 7:50 | målruta |  | Köp sängen |
| 7:50 | MÅL |  | Köp sängen |
| 7:54 | paket |  | tanke |
| 7:54 | tanke | du | Det börjar bli mörkt. Jag kan inte sova på jorden. |
| 7:54 | väntar | du | Det börjar bli mörkt. Jag kan inte sova på jorden. |
| 7:54 | kvittens-bock |  | ✓ Sälj blomkrukan |
| 7:57 | klar | ali | Ali här. Jag såg Skräpgrip på avstånd. Ett streck blev lite snett. Mitt fel. Vackert ändå. |
| 7:59 | sak | du | Jag tänker inte sova på betongen i natt. Ali har en säng. Typ. |
| 7:59 | pil |  | Köp sängen |
| 7:59 | notis | tanke | 💭 Jag tänker inte sova på betongen i natt. Ali har en säng. Typ. |
| 7:59 | röst | du | Jag tänker inte sova på betongen i natt. Ali har en säng. Typ. · MÅL |
| 8:02 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 8:04 | händelse | kopt | sak=sang |
| 8:04 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 8:04 | händelse | dialog | id=aliSang |
| 8:04 | röst | ali | Sov gott, min vän. · STORY |
| 8:04 | butiksbubbla | ali | Sov gott, min vän. |
| 8:05 | klar | du | Jag tänker inte sova på betongen i natt. Ali har en säng. Typ. |
| 8:05 | händelse | malKlart | id=kopSang del=Dag 1 – Kom igång nasta=printSang |
| 8:05 | bekräftelse | du | plats |
| 8:05 | struken | du | Det börjar bli mörkt. Jag kan inte sova på jorden. |
| 8:05 | väntar | du | En säng tar lång tid. Den är värd det. |
| 8:05 | målruta |  | Printa sängen |
| 8:05 | MÅL |  | Printa sängen |
| 8:07 | sak | du | En säng tar lång tid. Den är värd det. |
| 8:07 | pil |  | Printa sängen |
| 8:07 | notis | tanke | 💭 En säng tar lång tid. Den är värd det. |
| 8:07 | röst | du | En säng tar lång tid. Den är värd det. · MÅL |
| 8:07 | nick |  | nick:19 |
| 8:09 | kvittens-bock |  | ✓ Köp sängen |
| 8:10 | klar | du | En säng tar lång tid. Den är värd det. |
| 8:19 | händelse | printStart | sak=sang |
| 8:23 | toast | fel | Slut på tråd – mal mer så fortsätter den |
| 8:23 | väntar | notis:Storebrors skrivare: Slut på tråd – mal  | Storebrors skrivare: Slut på tråd – mal mer så fortsätter den |
| 8:24 | sak | notis:Storebrors skrivare: Slut på tråd – mal  | Storebrors skrivare: Slut på tråd – mal mer så fortsätter den |
| 8:24 | notis | fel | Storebrors skrivare: Slut på tråd – mal mer så fortsätter den |
| 8:26 | klar | notis:Storebrors skrivare: Slut på tråd – mal  | Storebrors skrivare: Slut på tråd – mal mer så fortsätter den |
| 8:45 | toast | fel | Ingen ström – trampa cykeln |
| 8:49 | toast | guld | ✅ |
| 8:49 | händelse | printKlar | sak=sang n=1 |
| 8:50 | händelse | tagitUrPrint | sak=sang n=1 |
| 8:50 | händelse | malKlart | id=printSang del=Dag 1 – Kom igång nasta=sov1 |
| 8:50 | bekräftelse | du | plats |
| 8:50 | kvittens | du | En säng. Jag printade en SÄNG. |
| 8:50 | väntar | du | En säng. Jag printade en SÄNG. |
| 8:50 | paket |  | lapp |
| 8:50 | kvallsrad | du | Nitton år. Inget mer tjat. Gården är full av skräp. I morgon. |
| 8:50 | väntar | du | Sängen ska in i skjulet. Sen sover jag. |
| 8:50 | MÅL |  | Sängen i skjulet |
| 8:50 | sak | du | En säng. Jag printade en SÄNG. |
| 8:50 | röst | du | En säng. Jag printade en SÄNG. · STORY |
| 8:50 | målruta |  | Sängen i skjulet |
| 8:52 | klar | du | En säng. Jag printade en SÄNG. |
| 8:52 | sak | du | Sängen ska in i skjulet. Sen sover jag. |
| 8:52 | pil |  | Sängen i skjulet |
| 8:52 | notis | tanke | 💭 Sängen ska in i skjulet. Sen sover jag. |
| 8:52 | röst | du | Sängen ska in i skjulet. Sen sover jag. · MÅL |
| 8:53 | nick |  | nick:20 |
| 8:56 | klar | du | Sängen ska in i skjulet. Sen sover jag. |
| 9:05 | nattkort | du | 🌙 21 dagar kvar. God natt. zzz… i en riktig säng Nitton år. Inget mer tjat. Gården är full av skräp. I morgon. DAGENS PRINTAR Nyckelring × 11 Blomkruka × 1 Sän |

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
- 3:06 plockar 3 skräp på gården (bär max 3) (5 kr)
- 3:09 gå till kvarnen (12 m) (5 kr)
- 3:21 gå till cykeln (3 m) (5 kr)
- 3:22 gå till skrivaren (1 m) (5 kr)
- 3:23 printar Nyckelring (5 kr)
- 3:29 tar ut 1 st ur skrivaren (5 kr)
- 3:40 printar Nyckelring (5 kr)
- 3:42 tar ut 1 st ur skrivaren (5 kr)
- 3:44 printar Nyckelring (5 kr)
- 3:46 tar ut 1 st ur skrivaren (5 kr)
- 3:52 gå till Ali (27 m) (5 kr)
- 3:52 öppnar Alis butik – sälja nyckelringar (5 kr)
- 3:55 säljer hos Ali: +45 kr (50 kr)
- 4:09 öppnar Alis butik – Ali (powerbanken) (50 kr)
- 4:20 öppnar Alis butik – Ali (powerbanken) (50 kr)
- 4:32 gå till koppla powerbanken till cykeln (24 m) (50 kr)
- 4:46 tjänar pengar till väntar på flaskhalsen för grip: 50/90 kr → printar nyckelring (15 kr) (50 kr)
- 4:47 gå till skrivaren (2 m) (50 kr)
- 4:48 printar Nyckelring (50 kr)
- 4:51 tar ut 1 st ur skrivaren (50 kr)
- 4:53 printar Nyckelring (50 kr)
- 4:57 plockar 3 skräp på gården (bär max 3) (50 kr)
- 5:00 gå till kvarnen (13 m) (50 kr)
- 5:03 gå till skrivaren (1 m) (50 kr)
- 5:04 tar ut 1 st ur skrivaren (50 kr)
- 5:05 printar Nyckelring (50 kr)
- 5:08 tar ut 1 st ur skrivaren (50 kr)
- 5:13 gå till Ali (28 m) (50 kr)
- 5:13 öppnar Alis butik – sälja (50 kr)
- 5:15 säljer hos Ali: +45 kr (95 kr)
- 5:22 tjänar pengar till väntar på flaskhalsen för grip: 105/145 kr → printar nyckelring (15 kr) (105 kr)
- 5:27 gå till skrivaren (25 m) (105 kr)
- 5:29 printar Nyckelring (105 kr)
- 5:37 plockar 3 skräp på gården (bär max 3) (105 kr)
- 5:41 gå till kvarnen (21 m) (105 kr)
- 5:44 gå till skrivaren (3 m) (105 kr)
- 5:44 tar ut 1 st ur skrivaren (105 kr)
- 5:46 printar Nyckelring (105 kr)
- 5:48 tar ut 1 st ur skrivaren (105 kr)
- 5:50 printar Nyckelring (105 kr)
- 5:51 gå till cykeln (1 m) (105 kr)
- 5:53 tar ut 1 st ur skrivaren (105 kr)
- 5:59 gå till Ali (27 m) (105 kr)
- 5:59 öppnar Alis butik – sälja (105 kr)
- 6:01 säljer hos Ali: +45 kr (150 kr)
- 6:11 öppnar Alis butik – köpa skräpgrip (150 kr)
- 6:13 köper grip för 50 kr (100 kr)
- 6:22 gå till skrivaren (25 m) (100 kr)
- 6:24 printar Skräpgrip (100 kr)
- 6:31 plockar 3 skräp på gården (bär max 3) (100 kr)
- 6:35 gå till kvarnen (20 m) (100 kr)
- 6:38 gå till skrivaren (1 m) (100 kr)
- 6:39 tar ut 1 st ur skrivaren (100 kr)
- 6:42 tar på grip (100 kr)
- 6:48 gå till Ali (28 m) (100 kr)
- 6:48 öppnar Alis butik – köpa receptet blomkruka (100 kr)
- 6:51 köper kruka för 40 kr (60 kr)
- 7:10 gå till skrivaren (25 m) (60 kr)
- 7:11 printar Blomkruka (60 kr)
- 7:22 plockar 6 skräp på gården (bär max 6) (60 kr)
- 7:28 gå till kvarnen (25 m) (60 kr)
- 7:31 gå till cykeln (3 m) (60 kr)
- 7:32 gå till skrivaren (1 m) (60 kr)
- 7:33 tar ut 1 st ur skrivaren (60 kr)
- 7:47 gå till Ali (27 m) (60 kr)
- 7:47 öppnar Alis butik – sälja krukan (60 kr)
- 7:49 säljer hos Ali: +70 kr (130 kr)
- 8:02 öppnar Alis butik – köpa sängen (130 kr)
- 8:05 köper sang för 60 kr (70 kr)
- 8:17 gå till skrivaren (25 m) (70 kr)
- 8:19 printar Säng (70 kr)
- 8:36 plockar 6 skräp på gården (bär max 6) (70 kr)
- 8:43 gå till kvarnen (32 m) (70 kr)
- 8:48 gå till cykeln (3 m) (70 kr)
- 8:50 gå till skrivaren (1 m) (70 kr)
- 8:50 tar ut 1 st ur skrivaren (70 kr)
- 9:02 gå till sängplatsen i skjulet (21 m) (70 kr)

</details>

## Dag 2

| Tid | Källa | Vem | Text |
|---|---|---|---|
| 9:05 | vara | ali | kruka |
| 9:05 | händelse | malKlart | id=sov1 del=Dag 1 – Kom igång nasta=kopMotor |
| 9:05 | bekräftelse | du | plats |
| 9:05 | MÅL |  | Mal skräp, printa och sälj |
| 0:01 | händelse | dagenBorjar | dag=2 |
| 0:01 | meddelande | du | 20 dagar till jul. Utan dörr blåser natten rakt in. |
| 0:01 | dagbokkort | du | Tippen bredvid · 20 dagar till jul. Utan dörr blåser natten rakt in. |
| 0:01 | röst | du | 20 dagar till jul. Tippen bredvid. Utan dörr blåser natten rakt in. · STORY |
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
| 0:10 | målruta |  | Mal skräp, printa och sälj |
| 0:13 | sak | du | Vevandet tar på armarna. Ali har en motor till kvarnen. |
| 0:13 | pil |  | Mal skräp, printa och sälj |
| 0:13 | notis | tanke | 💭 Vevandet tar på armarna. Ali har en motor till kvarnen. |
| 0:13 | röst | du | Vevandet tar på armarna. Ali har en motor till kvarnen. · MÅL |
| 0:16 | händelse | printStart | sak=kruka |
| 0:18 | klar | du | Vevandet tar på armarna. Ali har en motor till kvarnen. |
| 0:19 | toast | guld | ✅ |
| 0:19 | händelse | printKlar | sak=kruka n=2 |
| 0:19 | händelse | tagitUrPrint | sak=kruka n=1 |
| 0:20 | sak | notis:morgon | Ali vill ha idag: Blomkruka · +50 % |
| 0:20 | notis |  | Blomkruka · +50 % |
| 0:21 | väntar | ali | Ali här. Såg skylten. Stavningen är rätt. Det är mer än många. |
| 0:23 | hjälp | kontroll | R: Vrid innan du ställer ner |
| 0:23 | klar | notis:morgon | Ali vill ha idag: Blomkruka · +50 % |
| 0:25 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 0:25 | röst | ali | Jag ser 3D-skrivarvideor på YouTube i lagret. Inte för att jag har tid. Jag har aldrig tid. · STORY |
| 0:25 | butiksbubbla | ali | Jag ser 3D-skrivarvideor på YouTube i lagret. Inte för att jag har tid. Jag har aldrig tid. |
| 0:27 | händelse | salt | sak=kruka n=1 |
| 0:27 | aliSalt | ali | 105 |
| 0:27 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 0:27 | butiksbubbla | ali | Precis vad jag ville ha idag. 105 kr – med extra. |
| 0:27 | väntar | ali | Precis det jag ville ha idag, min vän. |
| 0:29 | sak | notis:Första natten i en riktig säng. Jag prin | Första natten i en riktig säng. Jag printade den själv. |
| 0:29 | notis | dagbok | Första natten i en riktig säng. Jag printade den själv. |
| 0:32 | klar | notis:Första natten i en riktig säng. Jag prin | Första natten i en riktig säng. Jag printade den själv. |
| 0:34 | sak | ali | Precis det jag ville ha idag, min vän. |
| 0:34 | röst | ali | Precis det jag ville ha idag, min vän. · STORY |
| 0:37 | klar | ali | Precis det jag ville ha idag, min vän. |
| 0:41 | väntar | foto | Egen säng |
| 0:41 | paket |  | tanke |
| 0:41 | tanke | du | Tänk att jag ska få sova i min egen säng. |
| 0:41 | väntar | du | Tänk att jag ska få sova i min egen säng. |
| 0:46 | händelse | printStart | sak=kruka |
| 0:48 | toast | fel | Ingen ström – trampa cykeln |
| 0:49 | toast | guld | ✅ |
| 0:49 | händelse | printKlar | sak=kruka n=3 |
| 0:50 | händelse | tagitUrPrint | sak=kruka n=1 |
| 0:56 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 0:58 | händelse | salt | sak=kruka n=1 |
| 0:58 | aliSalt | ali | 105 |
| 0:58 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 1:04 | lapp | 📔 Dagbok | Sopbilen tippade en ny last. Allt det skräpet – och grinden är låst. |
| 1:04 | okänt ord bytt | du | Sopbilen tippade en ny last. Allt det skräpet – och grinden är låst. |
| 1:04 | dagbokrad | du | En stor bil tippade en ny last. Allt det skräpet – och grinden är låst. |
| 1:04 | väntar | notis:En stor bil tippade en ny last. Allt det | En stor bil tippade en ny last. Allt det skräpet – och grinden är låst. |
| 1:04 | skratt | du | däcket rullar iväg |
| 1:05 | sak | notis:En stor bil tippade en ny last. Allt det | En stor bil tippade en ny last. Allt det skräpet – och grinden är låst. |
| 1:05 | notis | dagbok | En stor bil tippade en ny last. Allt det skräpet – och grinden är låst. |
| 1:05 | skratt | du | falsk tuta |
| 1:06 | sopsack | rolf | Sopsäckarna landade på gården |
| 1:06 | paket |  | tanke → ge |
| 1:06 | tanke | du | Hmm, vad kastade gubben ut ur sopbilen? Jag går och kollar. |
| 1:06 | väntar | du | Hmm, vad kastade gubben ut ur sopbilen? Jag går och kollar. |
| 1:06 | väntar |  | (läget ändras) |
| 1:07 | klar | notis:En stor bil tippade en ny last. Allt det | En stor bil tippade en ny last. Allt det skräpet – och grinden är låst. |
| 1:09 | sak | du | Hmm, vad kastade gubben ut ur sopbilen? Jag går och kollar. |
| 1:09 | notis | tanke | 💭 Hmm, vad kastade gubben ut ur sopbilen? Jag går och kollar. |
| 1:09 | röst | du | Hmm, vad kastade gubben ut ur sopbilen? Jag går och kollar. · STORY |
| 1:14 | klar | du | Hmm, vad kastade gubben ut ur sopbilen? Jag går och kollar. |
| 1:16 | sak |  | (läget ändras) |
| 1:16 | klar |  | (läget ändras) |
| 1:19 | paket |  | tanke |
| 1:19 | tanke | du | Jaha. En kalsong. Använd. |
| 1:19 | väntar | du | Jaha. En kalsong. Använd. |
| 1:19 | skratt | du | kvarnen spottar |
| 1:24 | händelse | printStart | sak=kruka |
| 1:27 | toast | guld | ✅ |
| 1:27 | händelse | printKlar | sak=kruka n=4 |
| 1:27 | händelse | tagitUrPrint | sak=kruka n=1 |
| 1:31 | hjälp | kontroll | R: Vrid innan du ställer ner |
| 1:33 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 1:35 | händelse | salt | sak=kruka n=1 |
| 1:35 | aliSalt | ali | 105 |
| 1:35 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 1:42 | struken | du | Jaha. En kalsong. Använd. |
| 1:43 | händelse | printStart | sak=kruka |
| 1:45 | sak | foto | Egen säng |
| 1:45 | foto | du | Egen säng |
| 1:47 | toast | guld | ✅ |
| 1:47 | händelse | printKlar | sak=kruka n=5 |
| 1:48 | händelse | tagitUrPrint | sak=kruka n=1 |
| 1:48 | klar | foto | Egen säng |
| 1:50 | struken | ali | Ali här. Såg skylten. Stavningen är rätt. Det är mer än många. |
| 1:53 | väntar | mamma | Har du frusit än? |
| 1:54 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 1:55 | händelse | salt | sak=kruka n=1 |
| 1:55 | aliSalt | ali | 105 |
| 1:55 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 1:56 | sak | du | Tänk att jag ska få sova i min egen säng. |
| 1:56 | notis | tanke | 💭 Tänk att jag ska få sova i min egen säng. |
| 1:56 | röst | du | Tänk att jag ska få sova i min egen säng. · STORY |
| 1:59 | klar | du | Tänk att jag ska få sova i min egen säng. |
| 2:22 | upplåst | mala | kvarnmotor |
| 2:22 | brott | UPPLÅST | kvarnmotor (mala 14 av 6) |
| 2:22 | händelse | upplast | id=kvarnmotor flask=mala |
| 2:22 | paket |  | tanke → sms |
| 2:22 | tanke | du | Mina armar… Kvarnen borde veva själv. |
| 2:22 | väntar | du | Mina armar… Kvarnen borde veva själv. |
| 2:22 | väntar | ali | Ali här. En motor? Jag har en. Från en gammal tvättmaskin. Den centrifugerar fortfarande om man ber snällt. |
| 2:22 | sak | du | Mina armar… Kvarnen borde veva själv. |
| 2:22 | notis | tanke | 💭 Mina armar… Kvarnen borde veva själv. |
| 2:22 | röst | du | Mina armar… Kvarnen borde veva själv. · STORY |
| 2:25 | klar | du | Mina armar… Kvarnen borde veva själv. |
| 2:25 | händelse | printStart | sak=kruka |
| 2:28 | toast | guld | ✅ |
| 2:28 | händelse | printKlar | sak=kruka n=6 |
| 2:28 | händelse | tagitUrPrint | sak=kruka n=1 |
| 2:31 | väntar | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått generator. Vi tar en låt på det. Den här är till dig, Gunnar. |
| 2:31 | radio | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått generator. Vi tar en låt på det. Den här är till dig, Gunnar. |
| 2:31 | skratt | du | Radio-Kjelle |
| 2:34 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 2:35 | sak | ali | Ali här. En motor? Jag har en. Från en gammal tvättmaskin. Den centrifugerar fortfarande om man ber snällt. |
| 2:35 | sms | ali | Ali här. En motor? Jag har en. Från en gammal tvättmaskin. Den centrifugerar fortfarande om man ber snällt. |
| 2:35 | sms-bubbla | ali | Ali här. En motor? Jag har en. Från en gammal tvättmaskin. Den centrifugerar fortfarande om man ber snällt. |
| 2:35 | röst | ali | Ali här. En motor? Jag har en. Från en gammal tvättmaskin. Den centrifugerar fortfarande om man ber snällt. · STORY |
| 2:36 | händelse | salt | sak=kruka n=1 |
| 2:36 | aliSalt | ali | 105 |
| 2:36 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 2:44 | klar | ali | Ali här. En motor? Jag har en. Från en gammal tvättmaskin. Den centrifugerar fortfarande om man ber snällt. |
| 2:46 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 2:47 | struken | info:guld | 3D-modell köpt – printa kvarnmotor |
| 2:47 | händelse | kopt | sak=kvarnmotor |
| 2:47 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 2:48 | händelse | malKlart | id=kopMotor del=Dag 2 – Tippen bredvid nasta=monteraMotor |
| 2:48 | bekräftelse | du | plats |
| 2:48 | väntar | du | Motorn ska sitta där veven sitter. Jag printar den först. |
| 2:48 | målruta |  | Printa kvarnmotorn till kvarnen |
| 2:49 | MÅL |  | Printa kvarnmotorn till kvarnen |
| 2:49 | sak | du | Motorn ska sitta där veven sitter. Jag printar den först. |
| 2:49 | pil |  | Printa kvarnmotorn till kvarnen |
| 2:49 | notis | tanke | 💭 Motorn ska sitta där veven sitter. Jag printar den först. |
| 2:49 | röst | du | Motorn ska sitta där veven sitter. Jag printar den först. · MÅL |
| 2:49 | nick |  | nick:22 |
| 2:52 | kvittens-bock |  | ✓ Köp kvarnmotorn hos Ali (50 kr) |
| 2:53 | klar | du | Motorn ska sitta där veven sitter. Jag printar den först. |
| 2:59 | väntar | info:guld | 🚛 Sopbilen tippade en ny last på soptippen! |
| 2:59 | sak | info:guld | 🚛 Sopbilen tippade en ny last på soptippen! |
| 2:59 | kvitto-visas | info:guld | 🚛 Sopbilen tippade en ny last på soptippen! |
| 2:59 | toast | guld | 🚛 Sopbilen tippade en ny last på soptippen! |
| 3:01 | klar | info:guld | 🚛 Sopbilen tippade en ny last på soptippen! |
| 3:02 | händelse | printStart | sak=byggsats:kvarnmotor |
| 3:04 | toast | fel | Ingen ström – trampa cykeln |
| 3:06 | händelse | printKlar | sak=byggsats:kvarnmotor n=1 |
| 3:06 | toast | guld | ✅ |
| 3:06 | väntar | info:guld | ⚙️ Kvarnmotorn ska skruvas fast på kvarnen. |
| 3:06 | händelse | tagitUrPrint | sak=byggsats:kvarnmotor n=1 |
| 3:06 | paket |  | sms |
| 3:06 | väntar | ali | Ali här. Ännu en ritning som blev på riktigt: Kvarnmotor. Semesterkassan växer. Livet växer. |
| 3:06 | sak | info:guld | ⚙️ Kvarnmotorn ska skruvas fast på kvarnen. |
| 3:06 | kvitto-visas | info:guld | ⚙️ Kvarnmotorn ska skruvas fast på kvarnen. |
| 3:06 | toast | guld | ⚙️ Kvarnmotorn ska skruvas fast på kvarnen. |
| 3:06 | skratt | du | falsk tuta |
| 3:08 | klar | info:guld | ⚙️ Kvarnmotorn ska skruvas fast på kvarnen. |
| 3:11 | väntar | info:guld | ⚙️ Motorn sitter där veven satt – nu mal kvarnen själv. |
| 3:11 | händelse | monterat | sak=kvarnmotor |
| 3:11 | paket |  | tanke |
| 3:11 | tanke | du | Motorn sitter där veven satt. Mina armar tackar. |
| 3:11 | väntar | du | Motorn sitter där veven satt. Mina armar tackar. |
| 3:11 | monterat | du | byggsats:kvarnmotor |
| 3:11 | händelse | monterat | sak=kvarnmotor |
| 3:11 | sak | info:guld | ⚙️ Motorn sitter där veven satt – nu mal kvarnen själv. |
| 3:11 | kvitto-visas | info:guld | ⚙️ Motorn sitter där veven satt – nu mal kvarnen själv. |
| 3:11 | toast | guld | ⚙️ Motorn sitter där veven satt – nu mal kvarnen själv. |
| 3:11 | händelse | malKlart | id=monteraMotor del=Dag 2 – Tippen bredvid nasta=kopSack |
| 3:11 | bekräftelse | du | plats |
| 3:11 | struken | du | Motorn sitter där veven satt. Mina armar tackar. |
| 3:11 | väntar | du | Gården är full av skräp. Jag börjar vid skjulet. |
| 3:11 | MÅL |  | Kolla vad som flög ut från sopbilen |
| 3:13 | klar | info:guld | ⚙️ Motorn sitter där veven satt – nu mal kvarnen själv. |
| 3:13 | målruta |  | Kolla vad som flög ut från sopbilen |
| 3:15 | kvittens-bock |  | ✓ Printa kvarnmotorn till kvarnen |
| 3:15 | sak | du | Gården är full av skräp. Jag börjar vid skjulet. |
| 3:15 | pil |  | Kolla vad som flög ut från sopbilen |
| 3:15 | notis | tanke | 💭 Gården är full av skräp. Jag börjar vid skjulet. |
| 3:15 | röst | du | Gården är full av skräp. Jag börjar vid skjulet. · MÅL |
| 3:19 | klar | du | Gården är full av skräp. Jag börjar vid skjulet. |
| 3:24 | paket |  | brev → ge → tanke |
| 3:24 | väntar | rolf | Du sliter ju. Ingen gör så nuförtin. Ta dessa så går dä lättare. / grannen – ja kör sopbilen å har hand om tippen bredvid. MVH ROLF​ |
| 3:24 | väntar |  | (läget ändras) |
| 3:24 | tanke | du | Rolf… gubben i sopbilen. Han har tippen bredvid. Han verkar schysst. |
| 3:24 | okänt ord bytt | du | Rolf… gubben i sopbilen. Han har tippen bredvid. Han verkar schysst. |
| 3:24 | väntar | du | Rolf… gubben i sopbilen. Han har tippen bredvid. Han verkar schysst. |
| 3:24 | sak | rolf | Du sliter ju. Ingen gör så nuförtin. Ta dessa så går dä lättare. / grannen – ja kör sopbilen å har hand om tippen bredvid. MVH ROLF​ |
| 3:24 | lapp | Lapp från Rolf | Du sliter ju. Ingen gör så nuförtin. Ta dessa så går dä lättare. / grannen – ja kör sopbilen å har hand om tippen bredvid. MVH ROLF​ |
| 3:24 | röst | rolf | Du sliter ju. Ingen gör så nuförtin. Ta dessa så går dä lättare. / grannen – ja kör sopbilen å har hand om tippen bredvid. MVH ROLF​ · STORY |
| 3:33 | hjälp | kontroll | Klick: Klicka för att ta på dig den |
| 3:35 | klar | rolf | Du sliter ju. Ingen gör så nuförtin. Ta dessa så går dä lättare. / grannen – ja kör sopbilen å har hand om tippen bredvid. MVH ROLF​ |
| 3:37 | väntar | info:guld | 🗑️ Sopsäcken är över axeln! Nu bär jag 10 skräp. |
| 3:37 | tog på | du | byggsats:korg |
| 3:37 | händelse | monterat | sak=korg |
| 3:37 | sak | info:guld | 🗑️ Sopsäcken är över axeln! Nu bär jag 10 skräp. |
| 3:37 | kvitto-visas | info:guld | 🗑️ Sopsäcken är över axeln! Nu bär jag 10 skräp. |
| 3:37 | toast | guld | 🗑️ Sopsäcken är över axeln! Nu bär jag 10 skräp. |
| 3:37 | händelse | malKlart | id=kopSack del=Dag 2 – Tippen bredvid nasta=n1-stada-klart-garden |
| 3:37 | bekräftelse | du | plats |
| 3:37 | händelse | malKlart | id=n1-stada-klart-garden del=Dag 2 – Tippen bredvid nasta=rolf0-brev |
| 3:37 | bekräftelse | du | plats |
| 3:37 | väntar | du | Gården är STÄDAD, av mig, frivilligt. Mamma skulle aldrig tro det. |
| 3:37 | väntar | du | Vänta på sopbilen. Den lämnar något. |
| 3:37 | MÅL |  | Vänta på sopbilen. Den lämnar något. |
| 3:39 | klar | info:guld | 🗑️ Sopsäcken är över axeln! Nu bär jag 10 skräp. |
| 3:39 | sak | du | Gården är STÄDAD, av mig, frivilligt. Mamma skulle aldrig tro det. |
| 3:39 | kvitto-visas | du | Gården är STÄDAD, av mig, frivilligt. Mamma skulle aldrig tro det. |
| 3:39 | lapp | 📔 Dagbok | Gården är STÄDAD, av mig, frivilligt. Mamma skulle aldrig tro det. |
| 3:39 | dagbokrad | du | Gården är STÄDAD, av mig, frivilligt. Mamma skulle aldrig tro det. |
| 3:39 | notis | dagbok | Gården är STÄDAD, av mig, frivilligt. Mamma skulle aldrig tro det. |
| 3:39 | klar | du | Gården är STÄDAD, av mig, frivilligt. Mamma skulle aldrig tro det. |
| 3:39 | målruta |  | Vänta på sopbilen. Den lämnar något. |
| 3:39 | sak | du | Vänta på sopbilen. Den lämnar något. |
| 3:39 | pil |  | Vänta på sopbilen. Den lämnar något. |
| 3:39 | röst | du | Vänta på sopbilen. Den lämnar något. · MÅL |
| 3:41 | händelse | printStart | sak=kruka |
| 3:42 | klar | du | Vänta på sopbilen. Den lämnar något. |
| 3:44 | paket |  | tanke |
| 3:44 | tanke | du | Den blev… spagetti. Ali kallar det modern konst. |
| 3:44 | väntar | du | Den blev… spagetti. Ali kallar det modern konst. |
| 3:44 | skratt | du | plastspagetti |
| 3:44 | toast | guld | ✅ |
| 3:44 | händelse | printKlar | sak=kruka n=7 |
| 3:44 | struken | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått generator. Vi tar en låt på det. Den här är till dig, Gunnar. |
| 3:44 | sak |  | (läget ändras) |
| 3:44 | händelse | tagitUrPrint | sak=spagetti n=1 |
| 3:44 | klar |  | (läget ändras) |
| 3:48 | sak | du | Rolf… gubben i sopbilen. Han har tippen bredvid. Han verkar schysst. |
| 3:48 | notis | tanke | 💭 Rolf… gubben i sopbilen. Han har tippen bredvid. Han verkar schysst. |
| 3:48 | röst | du | Rolf… gubben i sopbilen. Han har tippen bredvid. Han verkar schysst. · STORY |
| 3:50 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 3:52 | händelse | salt | sak=spagetti n=1 |
| 3:52 | skratt | du | Ali köper konst |
| 3:52 | aliSalt | ali | 3 |
| 3:52 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 3:54 | klar | du | Rolf… gubben i sopbilen. Han har tippen bredvid. Han verkar schysst. |
| 3:59 | händelse | printStart | sak=kruka |
| 4:03 | toast | guld | ✅ |
| 4:03 | händelse | printKlar | sak=kruka n=8 |
| 4:04 | händelse | tagitUrPrint | sak=kruka n=1 |
| 4:06 | struken | du | Den blev… spagetti. Ali kallar det modern konst. |
| 4:07 | hjälp | kontroll | R: Vrid innan du ställer ner |
| 4:10 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 4:11 | händelse | salt | sak=kruka n=1 |
| 4:11 | aliSalt | ali | 105 |
| 4:11 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 4:15 | upplåst | skrivare | rullstall |
| 4:15 | brott | UPPLÅST | rullstall (skrivare 155 av 60) |
| 4:15 | händelse | upplast | id=rullstall flask=skrivare |
| 4:15 | paket |  | tanke → sms |
| 4:15 | tanke | du | Kvarnen står och väntar för att hållaren är full. Om den rymde fler rullar kunde den mala hela tiden. |
| 4:15 | väntar | du | Kvarnen står och väntar för att hållaren är full. Om den rymde fler rullar kunde den mala hela tiden. |
| 4:15 | väntar | ali | Ali här. Rullställ. Fyra rullar i stället för en. Har ett på hyllan. |
| 4:15 | sak | du | Kvarnen står och väntar för att hållaren är full. Om den rymde fler rullar kunde den mala hela tiden. |
| 4:15 | notis | tanke | 💭 Kvarnen står och väntar för att hållaren är full. Om den rymde fler rullar kunde den mala hela tiden. |
| 4:15 | röst | du | Kvarnen står och väntar för att hållaren är full. Om den rymde fler rullar kunde den mala hela tiden. · STORY |
| 4:21 | händelse | printStart | sak=kruka |
| 4:23 | toast | guld | ✅ |
| 4:23 | händelse | printKlar | sak=kruka n=9 |
| 4:24 | klar | du | Kvarnen står och väntar för att hållaren är full. Om den rymde fler rullar kunde den mala hela tiden. |
| 4:24 | händelse | tagitUrPrint | sak=kruka n=1 |
| 4:26 | struken | ali | Ali här. Ännu en ritning som blev på riktigt: Kvarnmotor. Semesterkassan växer. Livet växer. |
| 4:29 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 4:31 | händelse | salt | sak=kruka n=1 |
| 4:31 | aliSalt | ali | 105 |
| 4:31 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 4:32 | sak | ali | Ali här. Rullställ. Fyra rullar i stället för en. Har ett på hyllan. |
| 4:32 | sms | ali | Ali här. Rullställ. Fyra rullar i stället för en. Har ett på hyllan. |
| 4:32 | sms-bubbla | ali | Ali här. Rullställ. Fyra rullar i stället för en. Har ett på hyllan. |
| 4:32 | röst | ali | Ali här. Rullställ. Fyra rullar i stället för en. Har ett på hyllan. · STORY |
| 4:35 | väntar | mamma | Har du frusit än? |
| 4:37 | klar | ali | Ali här. Rullställ. Fyra rullar i stället för en. Har ett på hyllan. |
| 4:46 | händelse | printStart | sak=kruka |
| 4:47 | toast | fel | Ingen ström – trampa cykeln |
| 4:47 | väntar | notis:Storebrors skrivare: Ingen ström – tramp | Storebrors skrivare: Ingen ström – trampa cykeln |
| 4:48 | väntar | värld:TUUT! Tjena! | TUUT! Tjena! |
| 4:48 | paket |  | tanke → ge |
| 4:48 | tanke | du | Flaggan är uppe. Rolf har lämnat något. |
| 4:48 | väntar | du | Flaggan är uppe. Rolf har lämnat något. |
| 4:48 | väntar |  | (läget ändras) |
| 4:48 | skratt | du | falsk tuta |
| 4:50 | toast | guld | ✅ |
| 4:50 | händelse | printKlar | sak=kruka n=10 |
| 4:50 | händelse | tagitUrPrint | sak=kruka n=1 |
| 4:55 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 4:57 | händelse | salt | sak=kruka n=1 |
| 4:57 | aliSalt | ali | 105 |
| 4:57 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 5:06 | väntar | rolf | Såg att du printar grejer. Kan du göra en sån hä? Kall öl ä viktigt. /Rolf​ |
| 5:06 | paket |  | ge |
| 5:06 | väntar |  | (läget ändras) |
| 5:06 | sak | rolf | Såg att du printar grejer. Kan du göra en sån hä? Kall öl ä viktigt. /Rolf​ |
| 5:06 | lapp | Brev från Rolf | Såg att du printar grejer. Kan du göra en sån hä? Kall öl ä viktigt. /Rolf​ |
| 5:06 | röst | rolf | Såg att du printar grejer. Kan du göra en sån hä? Kall öl ä viktigt. /Rolf​ · STORY |
| 5:06 | händelse | malKlart | id=rolf0-brev del=Dag 2 – Tippen bredvid nasta=rolf0-printa |
| 5:06 | bekräftelse | du | plats |
| 5:06 | väntar | du | Printa ölhållare med kylklamp. |
| 5:06 | MÅL |  | Printa ölhållare med kylklamp |
| 5:09 | målruta |  | Printa ölhållare med kylklamp |
| 5:10 | händelse | printStart | sak=olhallare |
| 5:10 | händelse | malKlart | id=rolf0-printa del=Dag 2 – Tippen bredvid nasta=rolf0-ge |
| 5:10 | bekräftelse | du | plats |
| 5:10 | väntar | du | Ge Rolf ölhållare med kylklamp. |
| 5:10 | MÅL |  | Ge Rolf ölhållare med kylklamp |
| 5:12 | målruta |  | Ge Rolf ölhållare med kylklamp |
| 5:13 | klar | rolf | Såg att du printar grejer. Kan du göra en sån hä? Kall öl ä viktigt. /Rolf​ |
| 5:13 | händelse | brevLast | id=rolf:0 |
| 5:13 | toast | guld | ✅ |
| 5:13 | händelse | printKlar | sak=olhallare n=1 |
| 5:14 | kvittens-bock |  | ✓ Printa ölhållare med kylklamp |
| 5:15 | struken | du | Printa ölhållare med kylklamp. |
| 5:15 | sak | du | Ge Rolf ölhållare med kylklamp. |
| 5:15 | pil |  | Ge Rolf ölhållare med kylklamp |
| 5:15 | röst | du | Ge Rolf ölhållare med kylklamp. · MÅL |
| 5:17 | klar | du | Ge Rolf ölhållare med kylklamp. |
| 5:19 | struken | värld:TUUT! Tjena! | TUUT! Tjena! |
| 5:19 | struken | notis:Storebrors skrivare: Ingen ström – tramp | Storebrors skrivare: Ingen ström – trampa cykeln |
| 5:19 | sak |  | (läget ändras) |
| 5:19 | klar |  | (läget ändras) |
| 5:36 | sak | du | Flaggan är uppe. Rolf har lämnat något. |
| 5:36 | notis | tanke | 💭 Flaggan är uppe. Rolf har lämnat något. |
| 5:36 | röst | du | Flaggan är uppe. Rolf har lämnat något. · STORY |
| 5:36 | händelse | tagitUrPrint | sak=olhallare n=1 |
| 5:37 | hjälp | kontroll | E: Ryggsäcken och kistan |
| 5:39 | klar | du | Flaggan är uppe. Rolf har lämnat något. |
| 5:43 | händelse | lagtIPostlada | sak=olhallare rolf=0 jobb=false |
| 5:43 | paket |  | tanke |
| 5:43 | tanke | du | Flaggan uppe. Nu får Rolf hämta den. |
| 5:43 | väntar | du | Flaggan uppe. Nu får Rolf hämta den. |
| 5:43 | sak | du | Flaggan uppe. Nu får Rolf hämta den. |
| 5:43 | notis | tanke | 💭 Flaggan uppe. Nu får Rolf hämta den. |
| 5:43 | röst | du | Flaggan uppe. Nu får Rolf hämta den. · REAKTION |
| 5:43 | händelse | malKlart | id=rolf0-ge del=Dag 2 – Tippen bredvid nasta=vindsnurra |
| 5:43 | bekräftelse | du | plats |
| 5:43 | väntar | du | En vindsnurra på skjulets tak. Då blir det ström när det blåser. |
| 5:43 | MÅL |  | Trampa, printa och sälj |
| 5:45 | målruta |  | Trampa, printa och sälj |
| 5:46 | klar | du | Flaggan uppe. Nu får Rolf hämta den. |
| 5:47 | kvittens-bock |  | ✓ Ge Rolf ölhållare med kylklamp |
| 5:48 | upplåst | skrivare | trim_skrivare |
| 5:48 | brott | UPPLÅST | trim_skrivare (skrivare 60 av 60) |
| 5:48 | händelse | upplast | id=trim_skrivare flask=skrivare |
| 5:48 | paket |  | sms |
| 5:48 | väntar | ali | Ali här. Skrivartrim. Jag skruvade på min egen skrivare i natt. Den går fortare nu. Nästan för fort. |
| 5:49 | sak | du | En vindsnurra på skjulets tak. Då blir det ström när det blåser. |
| 5:49 | pil |  | Trampa, printa och sälj |
| 5:49 | notis | tanke | 💭 En vindsnurra på skjulets tak. Då blir det ström när det blåser. |
| 5:49 | röst | du | En vindsnurra på skjulets tak. Då blir det ström när det blåser. · MÅL |
| 5:51 | händelse | printStart | sak=kruka |
| 5:52 | toast | fel | Ingen ström – trampa cykeln |
| 5:53 | upplåst | trampa | vindsnurra |
| 5:53 | brott | UPPLÅST | vindsnurra (trampa 26 av 6) |
| 5:53 | händelse | upplast | id=vindsnurra flask=trampa |
| 5:53 | paket |  | tanke → sms |
| 5:53 | tanke | du | Mina ben är slut. Det blåser hela tiden här ute. Tänk om vinden kunde trampa åt mig. |
| 5:53 | väntar | du | Mina ben är slut. Det blåser hela tiden här ute. Tänk om vinden kunde trampa åt mig. |
| 5:53 | väntar | ali | Ali här. Vindsnurra till cykeln. Vinden trampar åt dig. Den är lat, men den jobbar gratis. |
| 5:54 | klar | du | En vindsnurra på skjulets tak. Då blir det ström när det blåser. |
| 5:55 | toast | guld | ✅ |
| 5:55 | händelse | printKlar | sak=kruka n=11 |
| 5:56 | händelse | tagitUrPrint | sak=kruka n=1 |
| 5:56 | sak | du | Mina ben är slut. Det blåser hela tiden här ute. Tänk om vinden kunde trampa åt mig. |
| 5:56 | notis | tanke | 💭 Mina ben är slut. Det blåser hela tiden här ute. Tänk om vinden kunde trampa åt mig. |
| 5:56 | röst | du | Mina ben är slut. Det blåser hela tiden här ute. Tänk om vinden kunde trampa åt mig. · STORY |
| 6:02 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 6:02 | röst | ali | Rolf gav mig en kanna. Som min farmors. Jag ritade en sak åt honom. Säg inget, han gråter lätt. · STORY |
| 6:02 | butiksbubbla | ali | Rolf gav mig en kanna. Som min farmors. Jag ritade en sak åt honom. Säg inget, han gråter lätt. |
| 6:03 | klar | du | Mina ben är slut. Det blåser hela tiden här ute. Tänk om vinden kunde trampa åt mig. |
| 6:03 | händelse | salt | sak=kruka n=1 |
| 6:03 | aliSalt | ali | 105 |
| 6:03 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 6:06 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 6:08 | struken | info:guld | 3D-modell köpt – printa vindsnurra till skjultaket |
| 6:08 | händelse | kopt | sak=vindsnurra |
| 6:08 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 6:08 | struken | ali | Ali här. Vindsnurra till cykeln. Vinden trampar åt dig. Den är lat, men den jobbar gratis. |
| 6:16 | händelse | printStart | sak=byggsats:vindsnurra |
| 6:16 | sak |  | (läget ändras) |
| 6:16 | brev | rolf | rolf:0 |
| 6:16 | klar |  | (läget ändras) |
| 6:20 | sak | ali | Ali här. Skrivartrim. Jag skruvade på min egen skrivare i natt. Den går fortare nu. Nästan för fort. |
| 6:20 | sms | ali | Ali här. Skrivartrim. Jag skruvade på min egen skrivare i natt. Den går fortare nu. Nästan för fort. |
| 6:20 | sms-bubbla | ali | Ali här. Skrivartrim. Jag skruvade på min egen skrivare i natt. Den går fortare nu. Nästan för fort. |
| 6:20 | röst | ali | Ali här. Skrivartrim. Jag skruvade på min egen skrivare i natt. Den går fortare nu. Nästan för fort. · STORY |
| 6:21 | händelse | printKlar | sak=byggsats:vindsnurra n=1 |
| 6:21 | toast | guld | ✅ |
| 6:21 | väntar | info:guld | 🌬️ Vindsnurran ska upp på skjulets tak. |
| 6:21 | händelse | tagitUrPrint | sak=byggsats:vindsnurra n=1 |
| 6:23 | kvitto-visas | info:guld | 🌬️ Vindsnurran ska upp på skjulets tak. |
| 6:23 | toast | guld | 🌬️ Vindsnurran ska upp på skjulets tak. |
| 6:29 | klar | ali | Ali här. Skrivartrim. Jag skruvade på min egen skrivare i natt. Den går fortare nu. Nästan för fort. |
| 6:35 | händelse | placerat | sak=vindsnurra |
| 6:35 | väntar | info:guld | 🌬️ Vindsnurran sitter på taket – den trampar cykeln åt mig när det blåser |
| 6:35 | monterat | du | byggsats:vindsnurra |
| 6:35 | händelse | monterat | sak=vindsnurra |
| 6:35 | sak | info:guld | 🌬️ Vindsnurran sitter på taket – den trampar cykeln åt mig när det blåser |
| 6:35 | kvitto-visas | info:guld | 🌬️ Vindsnurran sitter på taket – den trampar cykeln åt mig när det blåser |
| 6:35 | toast | guld | 🌬️ Vindsnurran sitter på taket – den trampar cykeln åt mig när det blåser |
| 6:35 | händelse | malKlart | id=vindsnurra del=Dag 2 – Tippen bredvid nasta=n1-bygg-dorr-skjulet |
| 6:35 | bekräftelse | du | plats |
| 6:35 | kvittens | du | Den snurrar! Långsamt. Men den snurrar. |
| 6:35 | väntar | du | Den snurrar! Långsamt. Men den snurrar. |
| 6:35 | väntar | du | Det drar från dörrhålet. En dörr kan jag printa. |
| 6:35 | MÅL |  | Bygg en dörr till skjulet |
| 6:37 | klar | info:guld | 🌬️ Vindsnurran sitter på taket – den trampar cykeln åt mig när det blåser |
| 6:37 | sak | du | Den snurrar! Långsamt. Men den snurrar. |
| 6:37 | röst | du | Den snurrar! Långsamt. Men den snurrar. · STORY |
| 6:37 | målruta |  | Bygg en dörr till skjulet |
| 6:40 | klar | du | Den snurrar! Långsamt. Men den snurrar. |
| 6:41 | sak | du | Det drar från dörrhålet. En dörr kan jag printa. |
| 6:41 | pil |  | Bygg en dörr till skjulet |
| 6:41 | notis | tanke | 💭 Det drar från dörrhålet. En dörr kan jag printa. |
| 6:41 | röst | du | Det drar från dörrhålet. En dörr kan jag printa. · MÅL |
| 6:41 | nick |  | nick:29 |
| 6:45 | klar | du | Det drar från dörrhålet. En dörr kan jag printa. |
| 6:51 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 6:51 | paket |  | tanke |
| 6:51 | tanke | du | Jaha, Rolf har hämtat en ölhållare med kylklamp. |
| 6:51 | väntar | du | Jaha, Rolf har hämtat en ölhållare med kylklamp. |
| 6:52 | struken | info:guld | 3D-modell köpt – printa dörr |
| 6:52 | händelse | kopt | sak=dorr |
| 6:52 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 6:54 | sak | du | Jaha, Rolf har hämtat en ölhållare med kylklamp. |
| 6:54 | notis | tanke | 💭 Jaha, Rolf har hämtat en ölhållare med kylklamp. |
| 6:54 | röst | du | Jaha, Rolf har hämtat en ölhållare med kylklamp. · REAKTION |
| 6:58 | klar | du | Jaha, Rolf har hämtat en ölhållare med kylklamp. |
| 7:01 | händelse | printStart | sak=byggsats:dorr |
| 7:04 | toast | bra | Del 1 av 2 klar |
| 7:04 | väntar | notis:Storebrors skrivare: Del 1 av 2 klar | Storebrors skrivare: Del 1 av 2 klar |
| 7:07 | skratt | du | däcket rullar iväg |
| 7:07 | paket |  | tanke |
| 7:07 | tanke | du | Däcket ville inte stanna. Jag förstår det. |
| 7:07 | väntar | du | Däcket ville inte stanna. Jag förstår det. |
| 7:07 | sak | notis:Storebrors skrivare: Del 1 av 2 klar | Storebrors skrivare: Del 1 av 2 klar |
| 7:07 | notis | bra | Storebrors skrivare: Del 1 av 2 klar |
| 7:08 | händelse | printKlar | sak=byggsats:dorr n=1 |
| 7:08 | toast | guld | ✅ |
| 7:08 | händelse | tagitUrPrint | sak=byggsats:dorr n=1 |
| 7:08 | paket |  | sms |
| 7:08 | väntar | ali | Ali här. Jag har inte sovit. Inte på grund av AI:n. På grund av dig. Du bygger saker av sopor. Jag har en hel butik och bygger ingenting. Det ska ändras. Kanske. Troligen. |
| 7:09 | klar | notis:Storebrors skrivare: Del 1 av 2 klar | Storebrors skrivare: Del 1 av 2 klar |
| 7:12 | väntar | info:guld | Dörr på plats! Trivsel +8 |
| 7:12 | sak | info:guld | Dörr på plats! Trivsel +8 |
| 7:12 | kvitto-visas | info:guld | Dörr på plats! Trivsel +8 |
| 7:12 | toast | guld | Dörr på plats! Trivsel +8 |
| 7:12 | händelse | malKlart | id=n1-bygg-dorr-skjulet del=Dag 2 – Tippen bredvid nasta=sov2 |
| 7:12 | paket |  | lapp |
| 7:12 | väntar | du | Nu vet Ali att jag bor HÄR. Taket läcker. I morgon. |
| 7:12 | paket |  | sms |
| 7:12 | väntar | bror | Mamma ringde mig fyra gånger förresten. Snyggt jobbat 😂 |
| 7:12 | skratt | bror | Mamma ringde mig fyra gånger förresten. |
| 7:12 | bekräftelse | du | plats |
| 7:12 | struken | du | Däcket ville inte stanna. Jag förstår det. |
| 7:12 | väntar | du | Klart för idag – sov när du vill. |
| 7:12 | MÅL |  | Klart för idag – sov när du vill |
| 7:14 | skratt | du | falsk tuta |
| 7:14 | klar | info:guld | Dörr på plats! Trivsel +8 |
| 7:15 | målruta |  | Klart för idag – sov när du vill |
| 7:16 | kvittens-bock |  | ✓ Bygg en dörr till skjulet |
| 7:16 | sak | du | Klart för idag – sov när du vill. |
| 7:16 | pil |  | Klart för idag – sov när du vill |
| 7:16 | röst | du | Klart för idag – sov när du vill. · MÅL |
| 7:19 | klar | du | Klart för idag – sov när du vill. |
| 7:19 | väntar | notis:🌇 Klockan är 21. Ali slår igen luckan.  | 🌇 Klockan är 21. Ali slår igen luckan. Dagens jobb är klart – gå in i skjulet och sov i sängen. |
| 7:21 | sak | du | Nu vet Ali att jag bor HÄR. Taket läcker. I morgon. |
| 7:21 | kvallsrad | du | Nu vet Ali att jag bor HÄR. Taket läcker. I morgon. |
| 7:21 | klar | du | Nu vet Ali att jag bor HÄR. Taket läcker. I morgon. |
| 7:26 | nattkort | du | 🌙 20 dagar kvar. God natt. zzz… Nu vet Ali att jag bor HÄR. Taket läcker. I morgon. DAGENS PRINTAR Blomkruka × 10 Ölhållare med kylklamp × 1 Totalt 11 printar |

<details><summary>Botens handlingar dag 2</summary>

- 0:00 — dag 2 börjar — (70 kr)
- 0:08 popup: "FORTSÄTT" (70 kr)
- 0:11 tjänar pengar till väntar på flaskhalsen för kvarnmotor: 70/110 kr → printar blomkruka (105 kr) (70 kr)
- 0:15 gå till skrivaren (19 m) (70 kr)
- 0:16 printar Blomkruka (70 kr)
- 0:20 tar ut 1 st ur skrivaren (70 kr)
- 0:25 gå till Ali (26 m) (70 kr)
- 0:25 öppnar Alis butik – sälja (70 kr)
- 0:27 säljer hos Ali: +105 kr (175 kr)
- 0:39 tjänar pengar till väntar på flaskhalsen för kvarnmotor: 175/215 kr → printar blomkruka (105 kr) (175 kr)
- 0:44 gå till skrivaren (25 m) (175 kr)
- 0:46 printar Blomkruka (175 kr)
- 0:48 gå till cykeln (1 m) (175 kr)
- 0:51 tar ut 1 st ur skrivaren (175 kr)
- 0:56 gå till Ali (25 m) (175 kr)
- 0:56 öppnar Alis butik – sälja (175 kr)
- 0:58 säljer hos Ali: +105 kr (280 kr)
- 1:00 tjänar pengar till väntar på flaskhalsen för kvarnmotor: 280/320 kr → printar blomkruka (105 kr) (280 kr)
- 1:10 plockar 5 skräp på gården (bär max 6) (280 kr)
- 1:16 gå till kvarnen (31 m) (280 kr)
- 1:22 gå till skrivaren (3 m) (280 kr)
- 1:24 printar Blomkruka (280 kr)
- 1:27 tar ut 1 st ur skrivaren (280 kr)
- 1:33 gå till Ali (28 m) (280 kr)
- 1:33 öppnar Alis butik – sälja (280 kr)
- 1:35 säljer hos Ali: +105 kr (385 kr)
- 1:37 tjänar pengar till väntar på flaskhalsen för kvarnmotor: 385/425 kr → printar blomkruka (105 kr) (385 kr)
- 1:42 gå till skrivaren (25 m) (385 kr)
- 1:43 printar Blomkruka (385 kr)
- 1:45 gå till cykeln (1 m) (385 kr)
- 1:48 tar ut 1 st ur skrivaren (385 kr)
- 1:54 gå till Ali (25 m) (385 kr)
- 1:54 öppnar Alis butik – sälja (385 kr)
- 1:55 säljer hos Ali: +105 kr (490 kr)
- 2:02 tjänar pengar till väntar på flaskhalsen för kvarnmotor: 490/530 kr → printar blomkruka (105 kr) (490 kr)
- 2:12 plockar 3 skräp på gården (bär max 6) (490 kr)
- 2:19 gå till kvarnen (33 m) (490 kr)
- 2:24 gå till skrivaren (3 m) (490 kr)
- 2:25 printar Blomkruka (490 kr)
- 2:29 tar ut 1 st ur skrivaren (490 kr)
- 2:34 gå till Ali (28 m) (490 kr)
- 2:34 öppnar Alis butik – sälja (490 kr)
- 2:36 säljer hos Ali: +105 kr (595 kr)
- 2:46 öppnar Alis butik – köpa kvarnmotor (595 kr)
- 2:48 köper kvarnmotor för 50 kr (545 kr)
- 3:01 gå till skrivaren (25 m) (545 kr)
- 3:02 printar Kvarnmotor (545 kr)
- 3:04 gå till cykeln (1 m) (545 kr)
- 3:06 tar ut 1 st ur skrivaren (545 kr)
- 3:11 gå till skruva fast kvarnmotorn (3 m) (545 kr)
- 3:24 gå till Rolfs sopsäck (16 m) (545 kr)
- 3:37 tar på korg (545 kr)
- 3:37 tjänar pengar till väntar på sopbilen (BO): 545/605 kr → printar blomkruka (105 kr) (545 kr)
- 3:40 gå till skrivaren (12 m) (545 kr)
- 3:41 printar Blomkruka (545 kr)
- 3:45 tar ut 1 st ur skrivaren (545 kr)
- 3:50 gå till Ali (26 m) (545 kr)
- 3:50 öppnar Alis butik – sälja (545 kr)
- 3:52 säljer hos Ali: +3 kr (548 kr)
- 3:53 tjänar pengar till väntar på sopbilen (BO): 548/605 kr → printar blomkruka (105 kr) (548 kr)
- 3:58 gå till skrivaren (25 m) (548 kr)
- 3:59 printar Blomkruka (548 kr)
- 4:01 gå till cykeln (1 m) (548 kr)
- 4:04 tar ut 1 st ur skrivaren (548 kr)
- 4:10 gå till Ali (25 m) (548 kr)
- 4:10 öppnar Alis butik – sälja (548 kr)
- 4:11 säljer hos Ali: +105 kr (653 kr)
- 4:14 tjänar pengar till väntar på sopbilen (BO): 653/713 kr → printar blomkruka (105 kr) (653 kr)
- 4:19 gå till skrivaren (25 m) (653 kr)
- 4:21 printar Blomkruka (653 kr)
- 4:24 tar ut 1 st ur skrivaren (653 kr)
- 4:29 gå till Ali (25 m) (653 kr)
- 4:29 öppnar Alis butik – sälja (653 kr)
- 4:31 säljer hos Ali: +105 kr (758 kr)
- 4:39 tjänar pengar till väntar på sopbilen (BO): 758/818 kr → printar blomkruka (105 kr) (758 kr)
- 4:45 gå till skrivaren (25 m) (758 kr)
- 4:46 printar Blomkruka (758 kr)
- 4:47 gå till cykeln (1 m) (758 kr)
- 4:50 tar ut 1 st ur skrivaren (758 kr)
- 4:55 gå till Ali (25 m) (758 kr)
- 4:55 öppnar Alis butik – sälja (758 kr)
- 4:57 säljer hos Ali: +105 kr (863 kr)
- 5:06 gå till Rolfs postlåda (31 m) (863 kr)
- 5:08 gå till skrivaren (7 m) (863 kr)
- 5:10 printar Ölhållare med kylklamp (863 kr)
- 5:28 plockar 7 skräp på gården (bär max 10) (863 kr)
- 5:35 gå till kvarnen (35 m) (863 kr)
- 5:36 gå till skrivaren (2 m) (863 kr)
- 5:36 tar ut 1 st ur skrivaren (863 kr)
- 5:41 valj olhallare: true, vald olhallare, post {"l":null,"tr":null,"tm":[]}, nummer false (863 kr)
- 5:43 gå till Rolfs postlåda (7 m) (863 kr)
- 5:48 tjänar pengar till väntar på flaskhalsen för vindsnurra: 863/903 kr → printar blomkruka (105 kr) (863 kr)
- 5:49 gå till skrivaren (6 m) (863 kr)
- 5:51 printar Blomkruka (863 kr)
- 5:52 gå till cykeln (1 m) (863 kr)
- 5:56 tar ut 1 st ur skrivaren (863 kr)
- 6:02 gå till Ali (26 m) (863 kr)
- 6:02 öppnar Alis butik – sälja (863 kr)
- 6:03 säljer hos Ali: +105 kr (968 kr)
- 6:06 öppnar Alis butik – köpa vindsnurra till skjultaket (968 kr)
- 6:08 köper vindsnurra för 133 kr (835 kr)
- 6:14 gå till skrivaren (25 m) (835 kr)
- 6:16 printar Vindsnurra till skjultaket (835 kr)
- 6:20 gå till cykeln (1 m) (835 kr)
- 6:22 tar ut 1 st ur skrivaren (835 kr)
- 6:35 gå till sätt vindsnurran på taket (20 m) (835 kr)
- 6:51 gå till Ali (20 m) (835 kr)
- 6:51 öppnar Alis butik – köpa dörr (835 kr)
- 6:53 köper dorr för 120 kr (715 kr)
- 6:59 gå till skrivaren (25 m) (715 kr)
- 7:01 printar Dörr (2 delar) (715 kr)
- 7:08 tar ut 1 st ur skrivaren (715 kr)
- 7:12 gå till skjulet (19 m) (715 kr)
- 7:24 gå till sängen (1 m) (715 kr)

</details>

## Dag 3

| Tid | Källa | Vem | Text |
|---|---|---|---|
| 7:26 | vara | ali | ingen |
| 7:26 | händelse | malKlart | id=sov2 del=Dag 2 – Tippen bredvid nasta=rolf1-brev |
| 7:26 | bekräftelse | du | plats |
| 7:26 | vara | ali | kruka |
| 7:26 | MÅL |  | Vänta på sopbilen. Den lämnar något. |
| 0:01 | händelse | dagenBorjar | dag=3 |
| 0:01 | meddelande | du | 19 dagar till jul. Utan tak regnar det in i natt. |
| 0:01 | dagbokkort | du | En skrivare till och taket · 19 dagar till jul. Utan tak regnar det in i natt. |
| 0:01 | röst | du | 19 dagar till jul. En skrivare till och taket. Utan tak regnar det in i natt. · STORY |
| 0:08 | väntar | notis:morgon | Ali vill ha idag: Blomkruka · +50 % |
| 0:08 | händelse | morgonkortStangt | dag=3 |
| 0:08 | målruta |  | Vänta på sopbilen. Den lämnar något. |
| 0:13 | sak | du | (nytt mål i rutan) |
| 0:13 | pil |  | Vänta på sopbilen. Den lämnar något. |
| 0:14 | klar | du | (nytt mål i rutan) |
| 0:16 | struken | notis:🌇 Klockan är 21. Ali slår igen luckan.  | 🌇 Klockan är 21. Ali slår igen luckan. Dagens jobb är klart – gå in i skjulet och sov i sängen. |
| 0:16 | struken | mamma | Har du frusit än? |
| 0:16 | struken | ali | Ali här. Jag har inte sovit. Inte på grund av AI:n. På grund av dig. Du bygger saker av sopor. Jag har en hel butik och bygger ingenting. Det ska ändras. Kanske. Troligen. |
| 0:16 | struken | bror | Mamma ringde mig fyra gånger förresten. Snyggt jobbat 😂 |
| 0:16 | skratt | bror | Mamma ringde mig fyra gånger förresten. |
| 0:16 | sak | notis:morgon | Ali vill ha idag: Blomkruka · +50 % |
| 0:16 | notis |  | Blomkruka · +50 % |
| 0:20 | klar | notis:morgon | Ali vill ha idag: Blomkruka · +50 % |
| 0:27 | väntar | rolf | Den funkar! Hä. Ta så mycke skräp du vill. /Rolf​ |
| 0:27 | tanke | du | En hel kanot. Kvarnen skulle äta upp sig själv. |
| 0:27 | väntar | du | En hel kanot. Kvarnen skulle äta upp sig själv. |
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
| 0:31 | morgonkort | ⏸️ Pausad | ⏸️ Pausad · Klicka för att fortsätta. |
| 0:31 | klar | du | Rolfs tipp. Hela högen. |
| 0:33 | tanke | du | …Det här räcker i hundra år. |
| 0:33 | väntar | du | …Det här räcker i hundra år. |
| 0:44 | sak | rolf | Den funkar! Hä. Ta så mycke skräp du vill. /Rolf​ |
| 0:44 | lapp | Brev från Rolf | Den funkar! Hä. Ta så mycke skräp du vill. /Rolf​ |
| 0:44 | röst | rolf | Den funkar! Hä. Ta så mycke skräp du vill. /Rolf​ · STORY |
| 0:48 | klar | rolf | Den funkar! Hä. Ta så mycke skräp du vill. /Rolf​ |
| 0:48 | händelse | brevLast | id=rolftack:0 |
| 0:52 | händelse | printStart | sak=kruka |
| 0:56 | sak | du | En hel kanot. Kvarnen skulle äta upp sig själv. |
| 0:56 | notis | tanke | 💭 En hel kanot. Kvarnen skulle äta upp sig själv. |
| 0:56 | röst | du | En hel kanot. Kvarnen skulle äta upp sig själv. · REAKTION |
| 0:57 | toast | guld | ✅ |
| 0:57 | händelse | printKlar | sak=kruka n=12 |
| 1:00 | klar | du | En hel kanot. Kvarnen skulle äta upp sig själv. |
| 1:21 | sak | du | …Det här räcker i hundra år. |
| 1:21 | notis | tanke | 💭 …Det här räcker i hundra år. |
| 1:21 | röst | du | …Det här räcker i hundra år. · STORY |
| 1:22 | händelse | tagitUrPrint | sak=kruka n=1 |
| 1:24 | klar | du | …Det här räcker i hundra år. |
| 1:28 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 1:28 | röst | ali | Satt med AI:n hela natten igen. Fråga inte vad. Okej, en soffa. Fråga inte. · STORY |
| 1:28 | butiksbubbla | ali | Satt med AI:n hela natten igen. Fråga inte vad. Okej, en soffa. Fråga inte. |
| 1:30 | händelse | salt | sak=kruka n=1 |
| 1:30 | aliSalt | ali | 105 |
| 1:30 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 1:34 | skratt | du | falsk tuta |
| 1:40 | händelse | printStart | sak=kruka |
| 1:46 | toast | guld | ✅ |
| 1:46 | händelse | printKlar | sak=kruka n=13 |
| 1:46 | händelse | tagitUrPrint | sak=kruka n=1 |
| 1:50 | väntar | ali | Rolf var här. Köpte korv. Samma korv. |
| 1:51 | sak | ali | Rolf var här. Köpte korv. Samma korv. |
| 1:51 | röst | ali | Rolf var här. Köpte korv. Samma korv. · SMÅPRAT |
| 1:52 | bubbla |  | Rolf var här. Köpte korv. Samma korv. |
| 1:52 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 1:53 | händelse | salt | sak=kruka n=1 |
| 1:53 | aliSalt | ali | 105 |
| 1:53 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 1:53 | röst | ali | Dina krukor säljer. Tanterna i kvarteret älskar dem. · STORY |
| 1:53 | butiksbubbla | ali | Dina krukor säljer. Tanterna i kvarteret älskar dem. |
| 1:56 | klar | ali | Rolf var här. Köpte korv. Samma korv. |
| 2:04 | händelse | printStart | sak=kruka |
| 2:10 | toast | guld | ✅ |
| 2:10 | händelse | printKlar | sak=kruka n=14 |
| 2:10 | händelse | tagitUrPrint | sak=kruka n=1 |
| 2:16 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 2:17 | väntar | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått en DÖRR. Och vindsnurra till skjultaket. Mer säger jag inte. Gunnar vet. |
| 2:17 | radio | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått en DÖRR. Och vindsnurra till skjultaket. Mer säger jag inte. Gunnar vet. |
| 2:17 | skratt | du | Radio-Kjelle |
| 2:17 | händelse | salt | sak=kruka n=1 |
| 2:17 | aliSalt | ali | 105 |
| 2:17 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 2:18 | sak | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått en DÖRR. Och vindsnurra till skjultaket. Mer säger jag inte. Gunnar vet. |
| 2:18 | notis |  | 📻 Radio Tippen: Radio Tippen, Kjelle här. Skjulet vid tippen har fått en DÖRR. Och vindsnurra till skjultaket. Mer säger jag inte. Gunnar vet. |
| 2:18 | röst | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått en DÖRR. Och vindsnurra till skjultaket. Mer säger jag inte. Gunnar vet. · REAKTION |
| 2:29 | klar | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått en DÖRR. Och vindsnurra till skjultaket. Mer säger jag inte. Gunnar vet. |
| 2:38 | händelse | printStart | sak=kruka |
| 2:43 | toast | guld | ✅ |
| 2:43 | händelse | printKlar | sak=kruka n=15 |
| 2:43 | händelse | tagitUrPrint | sak=kruka n=1 |
| 2:49 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 2:51 | händelse | salt | sak=kruka n=1 |
| 2:51 | aliSalt | ali | 105 |
| 2:51 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 3:01 | händelse | printStart | sak=kruka |
| 3:02 | skratt | du | falsk tuta |
| 3:02 | väntar | värld:TUUT! Tjena! | TUUT! Tjena! |
| 3:02 | paket |  | ge |
| 3:02 | väntar |  | (läget ändras) |
| 3:02 | sak | värld:TUUT! Tjena! | TUUT! Tjena! |
| 3:02 | bubbla |  | TUUT! Tjena! |
| 3:05 | klar | värld:TUUT! Tjena! | TUUT! Tjena! |
| 3:06 | toast | guld | ✅ |
| 3:06 | händelse | printKlar | sak=kruka n=16 |
| 3:06 | händelse | tagitUrPrint | sak=kruka n=1 |
| 3:12 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 3:14 | händelse | salt | sak=kruka n=1 |
| 3:14 | aliSalt | ali | 105 |
| 3:14 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 3:15 | sak |  | (läget ändras) |
| 3:15 | brev | rolf | rolf:1 |
| 3:15 | klar |  | (läget ändras) |
| 3:24 | väntar | rolf | Nämen. Kajsa knuffa ner min flasköppnare i tippen. Kan du göra en ny, mä magnet? /Rolf​ |
| 3:24 | paket |  | ge |
| 3:24 | väntar |  | (läget ändras) |
| 3:24 | sak | rolf | Nämen. Kajsa knuffa ner min flasköppnare i tippen. Kan du göra en ny, mä magnet? /Rolf​ |
| 3:24 | lapp | Brev från Rolf | Nämen. Kajsa knuffa ner min flasköppnare i tippen. Kan du göra en ny, mä magnet? /Rolf​ |
| 3:24 | röst | rolf | Nämen. Kajsa knuffa ner min flasköppnare i tippen. Kan du göra en ny, mä magnet? /Rolf​ · STORY |
| 3:24 | händelse | malKlart | id=rolf1-brev del=Dag 3 – En skrivare till och taket nasta=n2-hamta-skrap |
| 3:24 | bekräftelse | du | plats |
| 3:24 | väntar | du | Nyckeln till tippen. Där ligger skräpet i högar. |
| 3:24 | MÅL |  | Hämta 5 skräp på soptippen |
| 3:26 | målruta |  | Hämta 5 skräp på soptippen |
| 3:28 | händelse | malKlart | id=n2-hamta-skrap del=Dag 3 – En skrivare till och taket nasta=rolf1-printa |
| 3:28 | bekräftelse | du | plats |
| 3:28 | väntar | du | Printa flasköppnare med magnet. |
| 3:28 | MÅL |  | Printa flasköppnare med magnet |
| 3:31 | målruta |  | Printa flasköppnare med magnet |
| 3:31 | klar | rolf | Nämen. Kajsa knuffa ner min flasköppnare i tippen. Kan du göra en ny, mä magnet? /Rolf​ |
| 3:31 | händelse | brevLast | id=rolf:1 |
| 3:32 | kvittens-bock |  | ✓ Hämta 5 skräp på soptippen |
| 3:33 | struken | du | Nyckeln till tippen. Där ligger skräpet i högar. |
| 3:33 | sak | du | Printa flasköppnare med magnet. |
| 3:33 | pil |  | Printa flasköppnare med magnet |
| 3:33 | röst | du | Printa flasköppnare med magnet. · MÅL |
| 3:33 | nick |  | nick:33 |
| 3:36 | klar | du | Printa flasköppnare med magnet. |
| 3:38 | sak |  | (läget ändras) |
| 3:38 | klar |  | (läget ändras) |
| 3:39 | väntar | bud | (tips) |
| 3:39 | sak | bud | (tips) |
| 3:40 | klar | bud | (tips) |
| 3:40 | händelse | printStart | sak=flaskoppnare |
| 3:40 | händelse | malKlart | id=rolf1-printa del=Dag 3 – En skrivare till och taket nasta=rolf1-ge |
| 3:40 | bekräftelse | du | plats |
| 3:40 | väntar | du | Ge Rolf flasköppnare med magnet. |
| 3:40 | målruta |  | Ge Rolf flasköppnare med magnet |
| 3:40 | MÅL |  | Ge Rolf flasköppnare med magnet |
| 3:42 | sak | du | Ge Rolf flasköppnare med magnet. |
| 3:42 | pil |  | Ge Rolf flasköppnare med magnet |
| 3:42 | röst | du | Ge Rolf flasköppnare med magnet. · MÅL |
| 3:44 | toast | guld | ✅ |
| 3:44 | händelse | printKlar | sak=flaskoppnare n=1 |
| 3:44 | kvittens-bock |  | ✓ Printa flasköppnare med magnet |
| 3:45 | händelse | tagitUrPrint | sak=flaskoppnare n=1 |
| 3:45 | klar | du | Ge Rolf flasköppnare med magnet. |
| 3:47 | meddelande | mamma | Har du borstat tänderna idag? Ljug inte. Jag hör om du ljuger. Även på sms. |
| 3:48 | röst | mamma | Har du borstat tänderna idag? Ljug inte. Jag hör om du ljuger. Även på sms. · STORY |
| 3:56 | paket |  | sms |
| 3:56 | väntar | mamma | Bra. Jag tror dig. Nästan. |
| 4:04 | händelse | brevLast | id=m_tandborste |
| 4:06 | händelse | lagtIPostlada | sak=flaskoppnare rolf=1 jobb=false |
| 4:06 | händelse | malKlart | id=rolf1-ge del=Dag 3 – En skrivare till och taket nasta=kopBatteri |
| 4:06 | bekräftelse | du | plats |
| 4:06 | väntar | du | Ali har ett gammalt bilbatteri. Då sparar jag strömmen. |
| 4:06 | MÅL |  | Printa och sälj |
| 4:06 | målruta |  | Printa och sälj |
| 4:06 | sak | du | Ali har ett gammalt bilbatteri. Då sparar jag strömmen. |
| 4:06 | pil |  | Printa och sälj |
| 4:06 | notis | tanke | 💭 Ali har ett gammalt bilbatteri. Då sparar jag strömmen. |
| 4:06 | röst | du | Ali har ett gammalt bilbatteri. Då sparar jag strömmen. · MÅL |
| 4:10 | kvittens-bock |  | ✓ Ge Rolf flasköppnare med magnet |
| 4:11 | klar | du | Ali har ett gammalt bilbatteri. Då sparar jag strömmen. |
| 4:16 | händelse | printStart | sak=kruka |
| 4:16 | paket |  | tanke |
| 4:16 | tanke | du | Kajsa. Ut ur skrivaren. Nu. |
| 4:16 | väntar | du | Kajsa. Ut ur skrivaren. Nu. |
| 4:16 | skratt | du | Kajsa i skrivaren |
| 4:22 | toast | guld | ✅ |
| 4:22 | händelse | printKlar | sak=kruka n=17 |
| 4:22 | händelse | tagitUrPrint | sak=kruka n=1 |
| 4:26 | strömdipp | du | cykelbatteri |
| 4:26 | paket |  | tanke |
| 4:26 | tanke | du | Den stannar. Strömmen räcker inte till alla maskiner. |
| 4:26 | väntar | du | Den stannar. Strömmen räcker inte till alla maskiner. |
| 4:27 | hjälp | kontroll | E: Ryggsäcken och kistan |
| 4:28 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 4:29 | händelse | salt | sak=kruka n=1 |
| 4:29 | aliSalt | ali | 105 |
| 4:29 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 4:38 | händelse | printStart | sak=kruka |
| 4:38 | toast | fel | Ingen ström – maskinerna drar mer än du får in. Bygg en solpanel |
| 4:40 | struken | du | Kajsa. Ut ur skrivaren. Nu. |
| 4:44 | upplåst | strom | cykelbatteri |
| 4:44 | brott | UPPLÅST | cykelbatteri (strom 55 av 15) |
| 4:44 | händelse | upplast | id=cykelbatteri flask=strom |
| 4:44 | paket |  | tanke → sms |
| 4:44 | tanke | du | Powerbanken räcker till en nyckelring. Sen är det trampa igen. |
| 4:44 | väntar | du | Powerbanken räcker till en nyckelring. Sen är det trampa igen. |
| 4:44 | väntar | ali | Ali här. Bilbatteriet ur min gamla Volvo står i lagret. Det sparar mer ström än powerbanken. |
| 4:44 | sak | du | Powerbanken räcker till en nyckelring. Sen är det trampa igen. |
| 4:44 | notis | tanke | 💭 Powerbanken räcker till en nyckelring. Sen är det trampa igen. |
| 4:44 | röst | du | Powerbanken räcker till en nyckelring. Sen är det trampa igen. · STORY |
| 4:49 | klar | du | Powerbanken räcker till en nyckelring. Sen är det trampa igen. |
| 5:02 | toast | guld | ✅ |
| 5:02 | händelse | printKlar | sak=kruka n=18 |
| 5:03 | händelse | tagitUrPrint | sak=kruka n=1 |
| 5:06 | skratt | du | falsk tuta |
| 5:06 | sak | mamma | Bra. Jag tror dig. Nästan. |
| 5:06 | sms | mamma | Bra. Jag tror dig. Nästan. |
| 5:06 | sms-bubbla | mamma | Bra. Jag tror dig. Nästan. |
| 5:06 | röst | mamma | Bra. Jag tror dig. Nästan. · STORY |
| 5:09 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 5:09 | klar | mamma | Bra. Jag tror dig. Nästan. |
| 5:10 | händelse | salt | sak=kruka n=1 |
| 5:10 | aliSalt | ali | 105 |
| 5:10 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 5:13 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 5:14 | toast | guld | 🔋 Bilbatteriet ska kopplas in på cykeln. |
| 5:14 | händelse | kopt | sak=cykelbatteri |
| 5:14 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 5:14 | röst | ali | Batteriet ur min gamla Volvo. Bilen dog 2016. Batteriet vägrade. · STORY |
| 5:14 | butiksbubbla | ali | Batteriet ur min gamla Volvo. Bilen dog 2016. Batteriet vägrade. |
| 5:17 | struken | ali | Ali här. Bilbatteriet ur min gamla Volvo står i lagret. Det sparar mer ström än powerbanken. |
| 5:22 | väntar | info:guld | 🔋 Bilbatteriet är inkopplat – skrivaren printar klart även när du slutar trampa |
| 5:22 | monterat | du | byggsats:cykelbatteri |
| 5:22 | händelse | monterat | sak=cykelbatteri |
| 5:22 | sak | info:guld | 🔋 Bilbatteriet är inkopplat – skrivaren printar klart även när du slutar trampa |
| 5:22 | kvitto-visas | info:guld | 🔋 Bilbatteriet är inkopplat – skrivaren printar klart även när du slutar trampa |
| 5:22 | toast | guld | 🔋 Bilbatteriet är inkopplat – skrivaren printar klart även när du slutar trampa |
| 5:22 | händelse | malKlart | id=kopBatteri del=Dag 3 – En skrivare till och taket nasta=ryggkorg |
| 5:22 | bekräftelse | du | plats |
| 5:22 | kvittens | du | Nu printar den klart även när jag vilar benen. |
| 5:22 | väntar | du | Nu printar den klart även när jag vilar benen. |
| 5:22 | väntar | du | Jag springer för mycket. Med en ryggkorg bär jag tio saker. |
| 5:22 | MÅL |  | Plocka skräp och mal det |
| 5:22 | upplåst | bara | ryggkorg |
| 5:22 | brott | UPPLÅST | ryggkorg (bara 4 av 3) |
| 5:22 | händelse | upplast | id=ryggkorg flask=bara |
| 5:22 | paket |  | tanke → sms |
| 5:22 | tanke | du | Säcken är full igen. Jag behöver något att bära mer i. |
| 5:22 | väntar | du | Säcken är full igen. Jag behöver något att bära mer i. |
| 5:22 | väntar | ali | Ali här. En ryggkorg. AI:n ritade den efter en bild på min mormor. Den rymmer tio. |
| 5:23 | paket |  | tanke |
| 5:23 | tanke | du | Jaha, Rolf har hämtat en flasköppnare med magnet. |
| 5:23 | väntar | du | Jaha, Rolf har hämtat en flasköppnare med magnet. |
| 5:24 | klar | info:guld | 🔋 Bilbatteriet är inkopplat – skrivaren printar klart även när du slutar trampa |
| 5:24 | sak | du | Nu printar den klart även när jag vilar benen. |
| 5:24 | röst | du | Nu printar den klart även när jag vilar benen. · STORY |
| 5:25 | målruta |  | Bygg ryggkorgen – bär 10 skräp |
| 5:28 | klar | du | Nu printar den klart även när jag vilar benen. |
| 5:28 | sak | du | Jag springer för mycket. Med en ryggkorg bär jag tio saker. |
| 5:28 | pil |  | Bygg ryggkorgen – bär 10 skräp |
| 5:28 | notis | tanke | 💭 Jag springer för mycket. Med en ryggkorg bär jag tio saker. |
| 5:28 | röst | du | Jag springer för mycket. Med en ryggkorg bär jag tio saker. · MÅL |
| 5:29 | nick |  | nick:36 |
| 5:33 | klar | du | Jag springer för mycket. Med en ryggkorg bär jag tio saker. |
| 5:35 | sak | du | Säcken är full igen. Jag behöver något att bära mer i. |
| 5:35 | notis | tanke | 💭 Säcken är full igen. Jag behöver något att bära mer i. |
| 5:35 | röst | du | Säcken är full igen. Jag behöver något att bära mer i. · STORY |
| 5:40 | klar | du | Säcken är full igen. Jag behöver något att bära mer i. |
| 5:41 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 5:42 | sak | ali | Ali här. En ryggkorg. AI:n ritade den efter en bild på min mormor. Den rymmer tio. |
| 5:42 | sms | ali | Ali här. En ryggkorg. AI:n ritade den efter en bild på min mormor. Den rymmer tio. |
| 5:42 | sms-bubbla | ali | Ali här. En ryggkorg. AI:n ritade den efter en bild på min mormor. Den rymmer tio. |
| 5:42 | röst | ali | Ali här. En ryggkorg. AI:n ritade den efter en bild på min mormor. Den rymmer tio. · STORY |
| 5:42 | struken | info:guld | 3D-modell köpt – printa ryggkorg |
| 5:42 | händelse | kopt | sak=ryggkorg |
| 5:42 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 5:49 | klar | ali | Ali här. En ryggkorg. AI:n ritade den efter en bild på min mormor. Den rymmer tio. |
| 5:51 | struken | du | Jaha, Rolf har hämtat en flasköppnare med magnet. |
| 5:51 | händelse | printStart | sak=byggsats:ryggkorg |
| 5:57 | sak | du | Den stannar. Strömmen räcker inte till alla maskiner. |
| 5:57 | notis | tanke | 💭 Den stannar. Strömmen räcker inte till alla maskiner. |
| 5:57 | röst | du | Den stannar. Strömmen räcker inte till alla maskiner. · STORY |
| 5:57 | toast | bra | Del 1 av 2 klar |
| 6:01 | klar | du | Den stannar. Strömmen räcker inte till alla maskiner. |
| 6:02 | paket |  | tanke |
| 6:02 | tanke | du | En toffla. Bara en. |
| 6:02 | väntar | du | En toffla. Bara en. |
| 6:02 | skratt | du | kvarnen spottar |
| 6:03 | händelse | printKlar | sak=byggsats:ryggkorg n=1 |
| 6:03 | toast | guld | ✅ |
| 6:03 | väntar | info:guld | Ryggkorg ska jag ha på mig. |
| 6:03 | händelse | tagitUrPrint | sak=byggsats:ryggkorg n=1 |
| 6:03 | paket |  | sms |
| 6:03 | väntar | ali | Ali här. Du printade Ryggkorg från min ritning. Och det FUNKAR? Jag har bara sett sånt på YouTube. |
| 6:03 | sak | info:guld | Ryggkorg ska jag ha på mig. |
| 6:03 | kvitto-visas | info:guld | Ryggkorg ska jag ha på mig. |
| 6:03 | toast | guld | Ryggkorg ska jag ha på mig. |
| 6:05 | klar | info:guld | Ryggkorg ska jag ha på mig. |
| 6:07 | väntar | info:guld | 🧺 Ryggkorgen sitter på! Nu bär jag 16 skräp. |
| 6:07 | tog på | du | byggsats:ryggkorg |
| 6:07 | händelse | monterat | sak=ryggkorg |
| 6:07 | sak | info:guld | 🧺 Ryggkorgen sitter på! Nu bär jag 16 skräp. |
| 6:07 | kvitto-visas | info:guld | 🧺 Ryggkorgen sitter på! Nu bär jag 16 skräp. |
| 6:07 | toast | guld | 🧺 Ryggkorgen sitter på! Nu bär jag 16 skräp. |
| 6:07 | händelse | malKlart | id=ryggkorg del=Dag 3 – En skrivare till och taket nasta=n2-bygg-arbetsbord |
| 6:07 | bekräftelse | du | plats |
| 6:07 | struken | du | En toffla. Bara en. |
| 6:07 | väntar | du | Ett arbetsbord bredvid skrivaren. Skrivare M ska stå på det. |
| 6:07 | MÅL |  | Bygg ett arbetsbord |
| 6:09 | klar | info:guld | 🧺 Ryggkorgen sitter på! Nu bär jag 16 skräp. |
| 6:09 | målruta |  | Bygg ett arbetsbord |
| 6:11 | kvittens-bock |  | ✓ Bygg ryggkorgen – bär 10 skräp |
| 6:11 | sak | du | Ett arbetsbord bredvid skrivaren. Skrivare M ska stå på det. |
| 6:11 | pil |  | Bygg ett arbetsbord |
| 6:11 | notis | tanke | 💭 Ett arbetsbord bredvid skrivaren. Skrivare M ska stå på det. |
| 6:11 | röst | du | Ett arbetsbord bredvid skrivaren. Skrivare M ska stå på det. · MÅL |
| 6:12 | nick |  | nick:37 |
| 6:13 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 6:15 | struken | info:guld | 3D-modell köpt – printa arbetsbord |
| 6:15 | händelse | kopt | sak=bord |
| 6:15 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 6:16 | klar | du | Ett arbetsbord bredvid skrivaren. Skrivare M ska stå på det. |
| 6:23 | händelse | printStart | sak=byggsats:bord |
| 6:30 | toast | bra | Del 1 av 3 klar |
| 6:37 | toast | bra | Del 2 av 3 klar |
| 6:41 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 6:41 | väntar | notis:Storebrors skrivare: Tornet är tomt – ma | Storebrors skrivare: Tornet är tomt – mal mer så fortsätter den |
| 6:45 | väntar | mamma | Jag har städat ditt rum. Det tog tre dagar. Jag hittade en macka från i somras. En macka. |
| 6:45 | sak | notis:Storebrors skrivare: Tornet är tomt – ma | Storebrors skrivare: Tornet är tomt – mal mer så fortsätter den |
| 6:45 | notis | fel | Storebrors skrivare: Tornet är tomt – mal mer så fortsätter den |
| 6:47 | klar | notis:Storebrors skrivare: Tornet är tomt – ma | Storebrors skrivare: Tornet är tomt – mal mer så fortsätter den |
| 6:48 | händelse | printKlar | sak=byggsats:bord n=1 |
| 6:48 | toast | guld | ✅ |
| 7:00 | händelse | tagitUrPrint | sak=byggsats:bord n=1 |
| 7:03 | händelse | placerat | sak=bord |
| 7:03 | händelse | malKlart | id=n2-bygg-arbetsbord del=Dag 3 – En skrivare till och taket nasta=n2-bygg-skrivare-m |
| 7:03 | bekräftelse | du | plats |
| 7:03 | väntar | du | Skrivare M på bordet. Två skrivare, dubbelt så mycket. |
| 7:03 | målruta |  | Printa och sälj |
| 7:03 | MÅL |  | Printa och sälj |
| 7:03 | upplåst | skrivare | skrivare2 |
| 7:03 | brott | UPPLÅST | skrivare2 (skrivare 360 av 60) |
| 7:03 | händelse | upplast | id=skrivare2 flask=skrivare |
| 7:03 | paket |  | tanke → sms |
| 7:03 | tanke | du | Kvarnen hinner mer än skrivaren. Jag behöver en skrivare till. |
| 7:03 | väntar | du | Kvarnen hinner mer än skrivaren. Jag behöver en skrivare till. |
| 7:03 | väntar | ali | Ali här. Skrivare M har kommit. Två och en halv gånger snabbare. Snabbare än jag. Jag har inte varit snabb sedan 1998. |
| 7:03 | sak | du | Skrivare M på bordet. Två skrivare, dubbelt så mycket. |
| 7:03 | pil |  | Bygg Skrivare M på bordet |
| 7:03 | notis | tanke | 💭 Skrivare M på bordet. Två skrivare, dubbelt så mycket. |
| 7:03 | röst | du | Skrivare M på bordet. Två skrivare, dubbelt så mycket. · MÅL |
| 7:03 | nick |  | nick:38 |
| 7:07 | kvittens-bock |  | ✓ Bygg ett arbetsbord |
| 7:07 | klar | du | Skrivare M på bordet. Två skrivare, dubbelt så mycket. |
| 7:09 | sak | du | Kvarnen hinner mer än skrivaren. Jag behöver en skrivare till. |
| 7:09 | notis | tanke | 💭 Kvarnen hinner mer än skrivaren. Jag behöver en skrivare till. |
| 7:09 | röst | du | Kvarnen hinner mer än skrivaren. Jag behöver en skrivare till. · STORY |
| 7:14 | klar | du | Kvarnen hinner mer än skrivaren. Jag behöver en skrivare till. |
| 7:21 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 7:23 | skratt | du | Alis dyr-pling |
| 7:23 | struken | info:guld | 3D-modell köpt – printa skrivare M |
| 7:23 | händelse | kopt | sak=skrivare2 |
| 7:23 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 7:23 | struken | ali | Ali här. Skrivare M har kommit. Två och en halv gånger snabbare. Snabbare än jag. Jag har inte varit snabb sedan 1998. |
| 7:27 | sak | ali | Ali här. Du printade Ryggkorg från min ritning. Och det FUNKAR? Jag har bara sett sånt på YouTube. |
| 7:27 | sms | ali | Ali här. Du printade Ryggkorg från min ritning. Och det FUNKAR? Jag har bara sett sånt på YouTube. |
| 7:27 | sms-bubbla | ali | Ali här. Du printade Ryggkorg från min ritning. Och det FUNKAR? Jag har bara sett sånt på YouTube. |
| 7:27 | röst | ali | Ali här. Du printade Ryggkorg från min ritning. Och det FUNKAR? Jag har bara sett sånt på YouTube. · REAKTION |
| 7:31 | händelse | printStart | sak=byggsats:skrivare2 |
| 7:35 | klar | ali | Ali här. Du printade Ryggkorg från min ritning. Och det FUNKAR? Jag har bara sett sånt på YouTube. |
| 7:40 | skratt | du | falsk tuta |
| 7:40 | väntar | värld:TUUT! Tjena! | TUUT! Tjena! |
| 7:40 | toast | bra | Del 1 av 5 klar |
| 7:49 | toast | bra | Del 2 av 5 klar |
| 7:59 | toast | bra | Del 3 av 5 klar |
| 8:00 | struken | värld:TUUT! Tjena! | TUUT! Tjena! |
| 8:08 | toast | bra | Del 4 av 5 klar |
| 8:14 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 8:25 | händelse | printKlar | sak=byggsats:skrivare2 n=1 |
| 8:25 | toast | guld | ✅ |
| 8:30 | händelse | tagitUrPrint | sak=byggsats:skrivare2 n=1 |
| 8:33 | händelse | placerat | sak=skrivare2 |
| 8:33 | paket |  | tanke |
| 8:33 | tanke | du | Den här måste stå i linjen vid kvarnen, annars når inte slangen. |
| 8:33 | väntar | du | Den här måste stå i linjen vid kvarnen, annars når inte slangen. |
| 8:33 | händelse | malKlart | id=n2-bygg-skrivare-m del=Dag 3 – En skrivare till och taket nasta=n2-lagg-plattak-skjulet |
| 8:33 | bekräftelse | du | plats |
| 8:33 | lapp-kö | 📱 Storebror | VA?! Du har byggt en skrivare TILL?? Du har typ en printfarm nu. Okej. Det är faktiskt ganska ballt. 🔥 |
| 8:33 | väntar | bror | VA?! Du har byggt en skrivare TILL?? Du har typ en printfarm nu. Okej. Det är faktiskt ganska ballt. 🔥 |
| 8:33 | väntar | du | Det regnar in. Plåt på taket, så slipper jag sova i en pöl. |
| 8:33 | MÅL |  | Lägg plåttak på skjulet |
| 8:33 | målruta |  | Lägg plåttak på skjulet |
| 8:33 | sak | du | Det regnar in. Plåt på taket, så slipper jag sova i en pöl. |
| 8:33 | pil |  | Lägg plåttak på skjulet |
| 8:33 | notis | tanke | 💭 Det regnar in. Plåt på taket, så slipper jag sova i en pöl. |
| 8:33 | röst | du | Det regnar in. Plåt på taket, så slipper jag sova i en pöl. · MÅL |
| 8:34 | nick |  | nick:39 |
| 8:37 | kvittens-bock |  | ✓ Bygg Skrivare M på bordet |
| 8:38 | klar | du | Det regnar in. Plåt på taket, så slipper jag sova i en pöl. |
| 8:43 | väntar | rolf | Morgonbulle på kontoret me polarna. Bengt har ny keps. Vi pratade om den i en timme. Den e grön. /R |
| 8:43 | väntar | mamma | Jag har städat ditt rum. Det tog tre dagar. Jag hittade en macka från i somras. En macka. |
| 8:45 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 8:47 | struken | info:guld | 3D-modell köpt – printa plåttak |
| 8:47 | händelse | kopt | sak=tak |
| 8:47 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 8:55 | händelse | printStart | sak=byggsats:tak |
| 8:55 | toast | bra | 🔗 Slangen kopplad |
| 8:59 | toast | bra | Del 1 av 3 klar |
| 9:03 | toast | bra | Del 2 av 3 klar |
| 9:05 | toast | fel | Ingen ström – trampa cykeln |
| 9:15 | händelse | printKlar | sak=byggsats:tak n=1 |
| 9:15 | toast | guld | ✅ |
| 9:16 | händelse | tagitUrPrint | sak=byggsats:tak n=1 |
| 9:21 | väntar | info:guld | Plåttak på plats! Trivsel +12 |
| 9:21 | sak | info:guld | Plåttak på plats! Trivsel +12 |
| 9:21 | kvitto-visas | info:guld | Plåttak på plats! Trivsel +12 |
| 9:21 | toast | guld | Plåttak på plats! Trivsel +12 |
| 9:21 | händelse | malKlart | id=n2-lagg-plattak-skjulet del=Dag 3 – En skrivare till och taket nasta=sov3 |
| 9:21 | paket |  | lapp |
| 9:21 | väntar | du | Nu vet Rolf att jag bor HÄR. Benen orkar inte trampa mer. |
| 9:21 | bekräftelse | du | plats |
| 9:21 | MÅL |  | Klart för idag – sov när du vill |
| 9:23 | klar | info:guld | Plåttak på plats! Trivsel +12 |
| 9:23 | målruta |  | Klart för idag – sov när du vill |
| 9:25 | kvittens-bock |  | ✓ Lägg plåttak på skjulet |
| 9:25 | sak | du | (nytt mål i rutan) |
| 9:25 | pil |  | Klart för idag – sov när du vill |
| 9:25 | klar | du | (nytt mål i rutan) |
| 9:27 | sak | du | Nu vet Rolf att jag bor HÄR. Benen orkar inte trampa mer. |
| 9:27 | kvallsrad | du | Nu vet Rolf att jag bor HÄR. Benen orkar inte trampa mer. |
| 9:27 | klar | du | Nu vet Rolf att jag bor HÄR. Benen orkar inte trampa mer. |
| 9:28 | väntar | notis:🌇 Klockan är 21. Ali slår igen luckan.  | 🌇 Klockan är 21. Ali slår igen luckan. Dagens jobb är klart – gå in i skjulet och sov i sängen. |
| 9:32 | nattkort | du | 🌙 19 dagar kvar. God natt. zzz… Nu vet Rolf att jag bor HÄR. Benen orkar inte trampa mer. DAGENS PRINTAR Blomkruka × 7 Flasköppnare med magnet × 1 Totalt 8 pri |

<details><summary>Botens handlingar dag 3</summary>

- 0:00 — dag 3 börjar — (715 kr)
- 0:08 popup: "FORTSÄTT" (715 kr)
- 0:22 gå till Rolfs postlåda (28 m) (715 kr)
- 0:27 panel: "Rolfs postlåda
Det här låg i l" (775 kr)
- 0:28 gå till sätt nyckeln i låset (3 m) (775 kr)
- 0:39 kort: "FORTSÄTTeller tryck Esc" (775 kr)
- 0:49 tjänar pengar till väntar på sopbilen (BO): 775/835 kr → printar blomkruka (105 kr) (775 kr)
- 0:50 gå till skrivaren (7 m) (775 kr)
- 0:52 printar Blomkruka (775 kr)
- 1:13 plockar 10 skräp på gården (bär max 10) (775 kr)
- 1:21 gå till kvarnen (39 m) (775 kr)
- 1:22 gå till skrivaren (1 m) (775 kr)
- 1:22 tar ut 1 st ur skrivaren (775 kr)
- 1:28 gå till Ali (28 m) (775 kr)
- 1:28 öppnar Alis butik – sälja (775 kr)
- 1:30 säljer hos Ali: +105 kr (880 kr)
- 1:34 tjänar pengar till väntar på sopbilen (BO): 880/940 kr → printar blomkruka (105 kr) (880 kr)
- 1:39 gå till skrivaren (25 m) (880 kr)
- 1:40 printar Blomkruka (880 kr)
- 1:46 tar ut 1 st ur skrivaren (880 kr)
- 1:52 gå till Ali (25 m) (880 kr)
- 1:52 öppnar Alis butik – sälja (880 kr)
- 1:54 säljer hos Ali: +105 kr (985 kr)
- 1:58 tjänar pengar till väntar på sopbilen (BO): 985/1045 kr → printar blomkruka (105 kr) (985 kr)
- 2:03 gå till skrivaren (25 m) (985 kr)
- 2:04 printar Blomkruka (985 kr)
- 2:11 tar ut 1 st ur skrivaren (985 kr)
- 2:16 gå till Ali (25 m) (985 kr)
- 2:16 öppnar Alis butik – sälja (985 kr)
- 2:18 säljer hos Ali: +105 kr (1090 kr)
- 2:31 tjänar pengar till väntar på sopbilen (BO): 1090/1150 kr → printar blomkruka (105 kr) (1090 kr)
- 2:36 gå till skrivaren (25 m) (1090 kr)
- 2:38 printar Blomkruka (1090 kr)
- 2:44 tar ut 1 st ur skrivaren (1090 kr)
- 2:49 gå till Ali (25 m) (1090 kr)
- 2:49 öppnar Alis butik – sälja (1090 kr)
- 2:51 säljer hos Ali: +105 kr (1195 kr)
- 2:54 tjänar pengar till väntar på sopbilen (BO): 1195/1255 kr → printar blomkruka (105 kr) (1195 kr)
- 2:59 gå till skrivaren (25 m) (1195 kr)
- 3:01 printar Blomkruka (1195 kr)
- 3:07 tar ut 1 st ur skrivaren (1195 kr)
- 3:12 gå till Ali (25 m) (1195 kr)
- 3:12 öppnar Alis butik – sälja (1195 kr)
- 3:14 säljer hos Ali: +105 kr (1300 kr)
- 3:24 gå till Rolfs postlåda (31 m) (1300 kr)
- 3:33 plockar 10 skräp på tippen (bär max 10) (1300 kr)
- 3:35 gå till kvarnen (8 m) (1300 kr)
- 3:39 gå till skrivaren (3 m) (1300 kr)
- 3:40 printar Flasköppnare med magnet (1300 kr)
- 3:45 tar ut 1 st ur skrivaren (1300 kr)
- 3:56 popup: "Ja." (1300 kr)
- 4:04 popup: "Läst" (1300 kr)
- 4:04 valj flaskoppnare: true, vald flaskoppnare, post {"l":null,"tr":null,"tm":[]}, nummer false (1300 kr)
- 4:06 gå till Rolfs postlåda (6 m) (1300 kr)
- 4:13 tjänar pengar till väntar på flaskhalsen för cykelbatteri: 1300/1340 kr → printar blomkruka (105 kr) (1300 kr)
- 4:15 gå till skrivaren (6 m) (1300 kr)
- 4:16 printar Blomkruka (1300 kr)
- 4:22 tar ut 1 st ur skrivaren (1300 kr)
- 4:28 gå till Ali (28 m) (1300 kr)
- 4:28 öppnar Alis butik – sälja (1300 kr)
- 4:30 säljer hos Ali: +105 kr (1405 kr)
- 4:31 tjänar pengar till väntar på flaskhalsen för cykelbatteri: 1405/1445 kr → printar blomkruka (105 kr) (1405 kr)
- 4:36 gå till skrivaren (25 m) (1405 kr)
- 4:38 printar Blomkruka (1405 kr)
- 4:38 gå till cykeln (1 m) (1405 kr)
- 5:04 tar ut 1 st ur skrivaren (1405 kr)
- 5:09 gå till Ali (25 m) (1405 kr)
- 5:09 öppnar Alis butik – sälja (1405 kr)
- 5:11 säljer hos Ali: +105 kr (1510 kr)
- 5:13 öppnar Alis butik – bilbatteriet (1510 kr)
- 5:15 köper cykelbatteri för 30 kr (1480 kr)
- 5:22 gå till koppla in bilbatteriet vid cykeln (24 m) (1480 kr)
- 5:41 gå till Ali (24 m) (1480 kr)
- 5:41 öppnar Alis butik – köpa ryggkorg (1480 kr)
- 5:43 köper ryggkorg för 120 kr (1360 kr)
- 5:49 gå till skrivaren (25 m) (1360 kr)
- 5:51 printar Ryggkorg (2 delar) (1360 kr)
- 6:04 tar ut 1 st ur skrivaren (1360 kr)
- 6:07 tar på ryggkorg (1360 kr)
- 6:13 gå till Ali (25 m) (1360 kr)
- 6:13 öppnar Alis butik – köpa arbetsbord (1360 kr)
- 6:15 köper bord för 120 kr (1240 kr)
- 6:22 gå till skrivaren (25 m) (1240 kr)
- 6:23 printar Arbetsbord (3 delar) (1240 kr)
- 6:44 gå till kvarnen (40 m) (1240 kr)
- 6:51 plockar 5 skräp på tippen (bär max 16) (1240 kr)
- 6:53 gå till kvarnen (8 m) (1240 kr)
- 7:00 gå till skrivaren (3 m) (1240 kr)
- 7:00 tar ut 1 st ur skrivaren (1240 kr)
- 7:01 gå till platsen för arbetsbord (5 m) (1240 kr)
- 7:03 ställer ut arbetsbord (1240 kr)
- 7:21 gå till Ali (24 m) (1240 kr)
- 7:21 öppnar Alis butik – köpa skrivare m (1240 kr)
- 7:24 köper skrivare2 för 500 kr (740 kr)
- 7:30 gå till skrivaren (25 m) (740 kr)
- 7:31 printar Skrivare M (5 delar) (740 kr)
- 8:19 plockar 2 skräp på tippen (bär max 16) (740 kr)
- 8:21 gå till kvarnen (9 m) (740 kr)
- 8:30 gå till skrivaren (3 m) (740 kr)
- 8:31 tar ut 1 st ur skrivaren (740 kr)
- 8:32 gå till platsen för skrivare m (5 m) (740 kr)
- 8:33 ställer ut skrivare m (740 kr)
- 8:45 gå till Ali (24 m) (740 kr)
- 8:45 öppnar Alis butik – köpa plåttak (740 kr)
- 8:48 köper tak för 250 kr (490 kr)
- 8:54 gå till skrivaren (24 m) (490 kr)
- 8:55 printar Plåttak (3 delar) (490 kr)
- 9:17 tar ut 1 st ur skrivaren (490 kr)
- 9:21 gå till skjulet (17 m) (490 kr)
- 9:29 gå till sängen (1 m) (490 kr)

</details>

## Dag 4

| Tid | Källa | Vem | Text |
|---|---|---|---|
| 9:32 | vara | ali | ingen |
| 9:32 | händelse | malKlart | id=sov3 del=Dag 3 – En skrivare till och taket nasta=rolf2-brev |
| 9:32 | bekräftelse | du | plats |
| 9:32 | vara | ali | kruka |
| 9:32 | MÅL |  | Vänta på sopbilen. Den lämnar något. |
| 0:01 | händelse | dagenBorjar | dag=4 |
| 0:01 | meddelande | du | 18 dagar till jul. Drar det i skjulet blir natten lång. |
| 0:01 | dagbokkort | du | Kärran och mer vind · 18 dagar till jul. Drar det i skjulet blir natten lång. |
| 0:01 | röst | du | 18 dagar till jul. Kärran och mer vind. Drar det i skjulet blir natten lång. · STORY |
| 0:08 | väntar | notis:morgon | Ali vill ha idag: Blomkruka · +50 % |
| 0:08 | händelse | morgonkortStangt | dag=4 |
| 0:11 | målruta |  | Vänta på sopbilen. Den lämnar något. |
| 0:13 | sak | du | (nytt mål i rutan) |
| 0:13 | pil |  | Vänta på sopbilen. Den lämnar något. |
| 0:13 | klar | du | (nytt mål i rutan) |
| 0:15 | sak | du | Den här måste stå i linjen vid kvarnen, annars når inte slangen. |
| 0:15 | notis | tanke | 💭 Den här måste stå i linjen vid kvarnen, annars når inte slangen. |
| 0:15 | röst | du | Den här måste stå i linjen vid kvarnen, annars når inte slangen. · STORY |
| 0:21 | klar | du | Den här måste stå i linjen vid kvarnen, annars når inte slangen. |
| 0:23 | struken | notis:🌇 Klockan är 21. Ali slår igen luckan.  | 🌇 Klockan är 21. Ali slår igen luckan. Dagens jobb är klart – gå in i skjulet och sov i sängen. |
| 0:23 | sak | notis:morgon | Ali vill ha idag: Blomkruka · +50 % |
| 0:23 | notis |  | Blomkruka · +50 % |
| 0:25 | väntar | info:bra | 🛒 4 skräp från famnen i skottkärran – kärran tar mer än famnen |
| 0:26 | klar | notis:morgon | Ali vill ha idag: Blomkruka · +50 % |
| 0:33 | väntar | rolf | PERFEKT öppnare! Kärran vid lådan ä din. Den gnisslar. Precis som ja. Skriv ditt nummer på en lapp, så slipper ja skriva brev. /Rolf |
| 0:33 | sak | info:bra | 🛒 4 skräp från famnen i skottkärran – kärran tar mer än famnen |
| 0:33 | kvitto-visas | info:bra | 🛒 4 skräp från famnen i skottkärran – kärran tar mer än famnen |
| 0:33 | toast | bra | 🛒 4 skräp från famnen i skottkärran – kärran tar mer än famnen |
| 0:33 | väntar | foto | Tak över huvudet |
| 0:33 | paket |  | tanke |
| 0:33 | tanke | du | I natt somnar jag torr. Det börjar bli ett hem. |
| 0:33 | väntar | du | I natt somnar jag torr. Det börjar bli ett hem. |
| 0:35 | klar | info:bra | 🛒 4 skräp från famnen i skottkärran – kärran tar mer än famnen |
| 0:36 | händelse | printStart | sak=kruka |
| 0:36 | väntar | bud | (tips) |
| 0:37 | sak | bud | (tips) |
| 0:37 | väntar | du | En skottkärra! Jag väljer den med hjulet och kör den full med skräp. |
| 0:38 | klar | bud | (tips) |
| 0:39 | paket |  | tanke |
| 0:39 | tanke | du | Den blev… spagetti. Ali kallar det modern konst. |
| 0:39 | väntar | du | Den blev… spagetti. Ali kallar det modern konst. |
| 0:39 | skratt | du | plastspagetti |
| 0:39 | toast | guld | ✅ |
| 0:39 | händelse | printKlar | sak=kruka n=19 |
| 0:39 | händelse | tagitUrPrint | sak=spagetti n=1 |
| 0:40 | sak | du | En skottkärra! Jag väljer den med hjulet och kör den full med skräp. |
| 0:40 | röst | du | En skottkärra! Jag väljer den med hjulet och kör den full med skräp. · MÅL |
| 0:46 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 0:46 | röst | ali | Ledig? Vad är det? Har aldrig hört talas om det. · STORY |
| 0:46 | butiksbubbla | ali | Ledig? Vad är det? Har aldrig hört talas om det. |
| 0:46 | klar | du | En skottkärra! Jag väljer den med hjulet och kör den full med skräp. |
| 0:47 | händelse | salt | sak=spagetti n=1 |
| 0:47 | skratt | du | Ali köper konst |
| 0:47 | aliSalt | ali | 3 |
| 0:47 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 0:48 | struken | mamma | Jag har städat ditt rum. Det tog tre dagar. Jag hittade en macka från i somras. En macka. |
| 0:55 | händelse | printStart | sak=kruka |
| 0:57 | sak | bror | VA?! Du har byggt en skrivare TILL?? Du har typ en printfarm nu. Okej. Det är faktiskt ganska ballt. 🔥 |
| 0:57 | sms | bror | VA?! Du har byggt en skrivare TILL?? Du har typ en printfarm nu. Okej. Det är faktiskt ganska ballt. 🔥 |
| 0:57 | sms-bubbla | bror | VA?! Du har byggt en skrivare TILL?? Du har typ en printfarm nu. Okej. Det är faktiskt ganska ballt. 🔥 |
| 0:57 | röst | bror | VA?! Du har byggt en skrivare TILL?? Du har typ en printfarm nu. Okej. Det är faktiskt ganska ballt. 🔥 · STORY |
| 0:58 | toast | guld | ✅ |
| 0:58 | händelse | printKlar | sak=kruka n=20 |
| 0:59 | händelse | tagitUrPrint | sak=kruka n=1 |
| 1:04 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 1:06 | klar | bror | VA?! Du har byggt en skrivare TILL?? Du har typ en printfarm nu. Okej. Det är faktiskt ganska ballt. 🔥 |
| 1:06 | händelse | salt | sak=kruka n=1 |
| 1:06 | aliSalt | ali | 105 |
| 1:06 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 1:08 | struken | du | Den blev… spagetti. Ali kallar det modern konst. |
| 1:14 | sak | foto | Tak över huvudet |
| 1:14 | foto | du | Tak över huvudet |
| 1:15 | händelse | printStart | sak=kruka |
| 1:16 | klar | foto | Tak över huvudet |
| 1:18 | toast | guld | ✅ |
| 1:18 | händelse | printKlar | sak=kruka n=21 |
| 1:19 | händelse | tagitUrPrint | sak=kruka n=1 |
| 1:24 | sak | du | I natt somnar jag torr. Det börjar bli ett hem. |
| 1:24 | notis | tanke | 💭 I natt somnar jag torr. Det börjar bli ett hem. |
| 1:24 | röst | du | I natt somnar jag torr. Det börjar bli ett hem. · STORY |
| 1:24 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 1:26 | händelse | salt | sak=kruka n=1 |
| 1:26 | aliSalt | ali | 105 |
| 1:26 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 1:28 | klar | du | I natt somnar jag torr. Det börjar bli ett hem. |
| 1:41 | väntar | info:fel | Fullt i händerna. |
| 1:41 | sak | info:fel | Fullt i händerna. |
| 1:41 | kvitto-visas | info:fel | Fullt i händerna. |
| 1:41 | toast | fel | Fullt i händerna. |
| 1:41 | skratt | du | falsk tuta |
| 1:42 | tanke | du | Fastpressad. Den sitter som i betong. |
| 1:42 | väntar | du | Fastpressad. Den sitter som i betong. |
| 1:42 | tanke | du | Tratten är stor som en kaffekopp. Tunnan är stor som jag. |
| 1:42 | struken | du | Fastpressad. Den sitter som i betong. |
| 1:42 | väntar | du | Tratten är stor som en kaffekopp. Tunnan är stor som jag. |
| 1:43 | klar | info:fel | Fullt i händerna. |
| 1:53 | händelse | printStart | sak=kruka |
| 1:55 | toast | guld | ✅ |
| 1:55 | händelse | printKlar | sak=kruka n=22 |
| 1:56 | händelse | tagitUrPrint | sak=kruka n=1 |
| 2:02 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 2:04 | händelse | salt | sak=kruka n=1 |
| 2:04 | aliSalt | ali | 105 |
| 2:04 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 2:04 | väntar | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått TAK. Och arbetsbord. Skriv in, Gunnar. Du skriver aldrig in. |
| 2:04 | radio | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått TAK. Och arbetsbord. Skriv in, Gunnar. Du skriver aldrig in. |
| 2:04 | skratt | du | Radio-Kjelle |
| 2:05 | sak | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått TAK. Och arbetsbord. Skriv in, Gunnar. Du skriver aldrig in. |
| 2:05 | notis |  | 📻 Radio Tippen: Radio Tippen, Kjelle här. Skjulet vid tippen har fått TAK. Och arbetsbord. Skriv in, Gunnar. Du skriver aldrig in. |
| 2:05 | röst | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått TAK. Och arbetsbord. Skriv in, Gunnar. Du skriver aldrig in. · REAKTION |
| 2:14 | klar | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått TAK. Och arbetsbord. Skriv in, Gunnar. Du skriver aldrig in. |
| 2:16 | struken | du | Tratten är stor som en kaffekopp. Tunnan är stor som jag. |
| 2:23 | händelse | printStart | sak=kruka |
| 2:26 | toast | guld | ✅ |
| 2:26 | händelse | printKlar | sak=kruka n=23 |
| 2:26 | händelse | tagitUrPrint | sak=kruka n=1 |
| 2:31 | upplåst | skrivare | trim_skrivare2 |
| 2:31 | brott | UPPLÅST | trim_skrivare2 (skrivare 151 av 60) |
| 2:31 | händelse | upplast | id=trim_skrivare2 flask=skrivare |
| 2:31 | paket |  | tanke → sms |
| 2:31 | tanke | du | Skrivare M hinner inte heller. Den kunde gå fortare. |
| 2:31 | väntar | du | Skrivare M hinner inte heller. Den kunde gå fortare. |
| 2:31 | väntar | ali | Ali här. Skrivartrim igen. Nästa nivå. Den här gången skruvade jag åt rätt håll. |
| 2:31 | sak | du | Skrivare M hinner inte heller. Den kunde gå fortare. |
| 2:31 | notis | tanke | 💭 Skrivare M hinner inte heller. Den kunde gå fortare. |
| 2:31 | röst | du | Skrivare M hinner inte heller. Den kunde gå fortare. · STORY |
| 2:32 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 2:34 | händelse | salt | sak=kruka n=1 |
| 2:34 | aliSalt | ali | 105 |
| 2:34 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 2:35 | klar | du | Skrivare M hinner inte heller. Den kunde gå fortare. |
| 2:44 | händelse | printStart | sak=kruka |
| 2:47 | toast | guld | ✅ |
| 2:47 | händelse | printKlar | sak=kruka n=24 |
| 2:47 | händelse | tagitUrPrint | sak=kruka n=1 |
| 2:52 | väntar | ali | Älgen var här i morse. Han köpte inget heller. |
| 2:53 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 2:54 | sak | ali | Ali här. Skrivartrim igen. Nästa nivå. Den här gången skruvade jag åt rätt håll. |
| 2:54 | sms | ali | Ali här. Skrivartrim igen. Nästa nivå. Den här gången skruvade jag åt rätt håll. |
| 2:54 | sms-bubbla | ali | Ali här. Skrivartrim igen. Nästa nivå. Den här gången skruvade jag åt rätt håll. |
| 2:54 | röst | ali | Ali här. Skrivartrim igen. Nästa nivå. Den här gången skruvade jag åt rätt håll. · STORY |
| 2:55 | händelse | salt | sak=kruka n=1 |
| 2:55 | aliSalt | ali | 105 |
| 2:55 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 3:00 | klar | ali | Ali här. Skrivartrim igen. Nästa nivå. Den här gången skruvade jag åt rätt håll. |
| 3:09 | händelse | printStart | sak=kruka |
| 3:12 | toast | guld | ✅ |
| 3:12 | händelse | printKlar | sak=kruka n=25 |
| 3:13 | händelse | tagitUrPrint | sak=kruka n=1 |
| 3:15 | struken | ali | Älgen var här i morse. Han köpte inget heller. |
| 3:18 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 3:20 | händelse | salt | sak=kruka n=1 |
| 3:20 | aliSalt | ali | 105 |
| 3:20 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 3:30 | händelse | printStart | sak=kruka |
| 3:30 | paket |  | tanke |
| 3:30 | tanke | du | Kajsa. Ut ur skrivaren. Nu. |
| 3:30 | väntar | du | Kajsa. Ut ur skrivaren. Nu. |
| 3:30 | skratt | du | Kajsa i skrivaren |
| 3:33 | toast | guld | ✅ |
| 3:33 | händelse | printKlar | sak=kruka n=26 |
| 3:34 | händelse | tagitUrPrint | sak=kruka n=1 |
| 3:38 | väntar | bror | Tomt här hemma. Ingen som snor mina laddare. Inte för att jag saknar det eller nåt. |
| 3:39 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 3:41 | händelse | salt | sak=kruka n=1 |
| 3:41 | aliSalt | ali | 105 |
| 3:41 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 3:44 | skratt | du | falsk tuta |
| 3:44 | paket |  | ge |
| 3:44 | väntar |  | (läget ändras) |
| 3:51 | väntar | rolf | Tjo. Ska grilla på lördag. Min grillspade smälte. Kan du göra en sån hä? /Rolf 🍖​ |
| 3:51 | paket |  | ge |
| 3:51 | väntar |  | (läget ändras) |
| 3:51 | sak | rolf | Tjo. Ska grilla på lördag. Min grillspade smälte. Kan du göra en sån hä? /Rolf 🍖​ |
| 3:51 | lapp | Brev från Rolf | Tjo. Ska grilla på lördag. Min grillspade smälte. Kan du göra en sån hä? /Rolf 🍖​ |
| 3:51 | röst | rolf | Tjo. Ska grilla på lördag. Min grillspade smälte. Kan du göra en sån hä? /Rolf 🍖​ · STORY |
| 3:51 | händelse | malKlart | id=rolf2-brev del=Dag 4 – Kärran och mer vind nasta=rolf2-printa |
| 3:51 | bekräftelse | du | plats |
| 3:51 | väntar | du | Printa grillspade. |
| 3:51 | MÅL |  | Printa grillspade |
| 3:53 | målruta |  | Printa grillspade |
| 3:55 | händelse | printStart | sak=grillspade |
| 3:55 | händelse | malKlart | id=rolf2-printa del=Dag 4 – Kärran och mer vind nasta=rolf2-ge |
| 3:55 | bekräftelse | du | plats |
| 3:55 | struken | du | Kajsa. Ut ur skrivaren. Nu. |
| 3:55 | väntar | du | Ge Rolf grillspade. |
| 3:55 | MÅL |  | Ge Rolf grillspade |
| 3:57 | väntar | värld:TUUT TUUT! | TUUT TUUT! |
| 3:58 | klar | rolf | Tjo. Ska grilla på lördag. Min grillspade smälte. Kan du göra en sån hä? /Rolf 🍖​ |
| 3:58 | händelse | brevLast | id=rolf:2 |
| 3:58 | målruta |  | Ge Rolf grillspade |
| 3:59 | toast | guld | ✅ |
| 3:59 | händelse | printKlar | sak=grillspade n=1 |
| 3:59 | kvittens-bock |  | ✓ Printa grillspade |
| 3:59 | händelse | tagitUrPrint | sak=grillspade n=1 |
| 4:00 | struken | du | Printa grillspade. |
| 4:00 | sak | du | Ge Rolf grillspade. |
| 4:00 | pil |  | Ge Rolf grillspade |
| 4:00 | röst | du | Ge Rolf grillspade. · MÅL |
| 4:02 | klar | du | Ge Rolf grillspade. |
| 4:04 | sak |  | (läget ändras) |
| 4:04 | klar |  | (läget ändras) |
| 4:06 | händelse | lagtIPostlada | sak=grillspade rolf=2 jobb=false |
| 4:06 | händelse | malKlart | id=rolf2-ge del=Dag 4 – Kärran och mer vind nasta=n3-tom-full-karra |
| 4:06 | bekräftelse | du | plats |
| 4:06 | väntar | du | Kärran rymmer massor. Jag fyller den och tippar allt i kvarnen. |
| 4:06 | målruta |  | Töm en full kärra i kvarnen |
| 4:06 | MÅL |  | Töm en full kärra i kvarnen |
| 4:06 | sak | du | Kärran rymmer massor. Jag fyller den och tippar allt i kvarnen. |
| 4:06 | pil |  | Töm en full kärra i kvarnen |
| 4:06 | notis | tanke | 💭 Kärran rymmer massor. Jag fyller den och tippar allt i kvarnen. |
| 4:06 | röst | du | Kärran rymmer massor. Jag fyller den och tippar allt i kvarnen. · MÅL |
| 4:10 | kvittens-bock |  | ✓ Ge Rolf grillspade |
| 4:11 | klar | du | Kärran rymmer massor. Jag fyller den och tippar allt i kvarnen. |
| 4:14 | karraKlick | du | träff |
| 4:16 | karraKlick | du | träff |
| 4:16 | väntar | värld:Mjau. | Mjau. |
| 4:17 | karraKlick | du | träff |
| 4:18 | struken | värld:TUUT TUUT! | TUUT TUUT! |
| 4:18 | karraKlick | du | träff |
| 4:19 | karraKlick | du | träff |
| 4:20 | sak |  | (läget ändras) |
| 4:20 | brev | rolf | rolf:2 |
| 4:20 | klar |  | (läget ändras) |
| 4:20 | karraKlick | du | träff |
| 4:21 | karraKlick | du | träff |
| 4:22 | karraKlick | du | träff |
| 4:24 | sak | värld:Mjau. | Mjau. |
| 4:24 | bubbla |  | Mjau. |
| 4:24 | tanke | du | Det får inte plats. Jag behöver något att tippa i. |
| 4:24 | väntar | du | Det får inte plats. Jag behöver något att tippa i. |
| 4:24 | väntar | info:bra | 12 st i tratten · 4 st på marken bredvid |
| 4:24 | händelse | malKlart | id=n3-tom-full-karra del=Dag 4 – Kärran och mer vind nasta=sophallare |
| 4:24 | bekräftelse | du | plats |
| 4:24 | väntar | du | En sophållare bakom kvarnen. Då matar den sig själv. |
| 4:25 | MÅL |  | Plocka skräp och mal det |
| 4:26 | klar | värld:Mjau. | Mjau. |
| 4:26 | sak | du | En sophållare bakom kvarnen. Då matar den sig själv. |
| 4:26 | målruta |  | Plocka skräp och mal det |
| 4:26 | pil |  | Plocka skräp och mal det |
| 4:26 | notis | tanke | 💭 En sophållare bakom kvarnen. Då matar den sig själv. |
| 4:26 | röst | du | En sophållare bakom kvarnen. Då matar den sig själv. · MÅL |
| 4:28 | kvittens-bock |  | ✓ Töm en full kärra i kvarnen |
| 4:31 | klar | du | En sophållare bakom kvarnen. Då matar den sig själv. |
| 4:31 | struken | info:bra | 12 st i tratten · 4 st på marken bredvid |
| 4:31 | sak | du | Det får inte plats. Jag behöver något att tippa i. |
| 4:31 | notis | tanke | 💭 Det får inte plats. Jag behöver något att tippa i. |
| 4:31 | röst | du | Det får inte plats. Jag behöver något att tippa i. · STORY |
| 4:35 | klar | du | Det får inte plats. Jag behöver något att tippa i. |
| 4:40 | händelse | printStart | sak=kruka |
| 4:41 | struken | bror | Tomt här hemma. Ingen som snor mina laddare. Inte för att jag saknar det eller nåt. |
| 4:42 | toast | guld | ✅ |
| 4:42 | händelse | printKlar | sak=kruka n=27 |
| 4:43 | händelse | tagitUrPrint | sak=kruka n=1 |
| 4:49 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 4:51 | händelse | salt | sak=kruka n=1 |
| 4:51 | aliSalt | ali | 105 |
| 4:51 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 4:58 | väntar | mamma | Det har ringt en karl som heter Rolf och frågat om du gillar korv. Vem är det? Varför har han mitt nummer? |
| 4:59 | händelse | printStart | sak=kruka |
| 5:02 | toast | guld | ✅ |
| 5:02 | händelse | printKlar | sak=kruka n=28 |
| 5:02 | händelse | tagitUrPrint | sak=kruka n=1 |
| 5:08 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 5:10 | händelse | salt | sak=kruka n=1 |
| 5:10 | aliSalt | ali | 105 |
| 5:10 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 5:19 | händelse | printStart | sak=kruka |
| 5:21 | toast | guld | ✅ |
| 5:21 | händelse | printKlar | sak=kruka n=29 |
| 5:22 | händelse | tagitUrPrint | sak=kruka n=1 |
| 5:28 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 5:29 | händelse | salt | sak=kruka n=1 |
| 5:29 | aliSalt | ali | 105 |
| 5:29 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 5:31 | skratt | du | falsk tuta |
| 5:39 | händelse | printStart | sak=kruka |
| 5:41 | toast | guld | ✅ |
| 5:41 | händelse | printKlar | sak=kruka n=30 |
| 5:42 | händelse | tagitUrPrint | sak=kruka n=1 |
| 5:48 | paket |  | tanke |
| 5:48 | tanke | du | Jaha, Rolf har hämtat en grillspade. |
| 5:48 | väntar | du | Jaha, Rolf har hämtat en grillspade. |
| 5:48 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 5:49 | händelse | salt | sak=kruka n=1 |
| 5:49 | aliSalt | ali | 105 |
| 5:49 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 5:50 | sak | du | Jaha, Rolf har hämtat en grillspade. |
| 5:50 | notis | tanke | 💭 Jaha, Rolf har hämtat en grillspade. |
| 5:50 | röst | du | Jaha, Rolf har hämtat en grillspade. · REAKTION |
| 5:53 | klar | du | Jaha, Rolf har hämtat en grillspade. |
| 6:02 | händelse | printStart | sak=kruka |
| 6:05 | toast | guld | ✅ |
| 6:05 | händelse | printKlar | sak=kruka n=31 |
| 6:05 | händelse | tagitUrPrint | sak=kruka n=1 |
| 6:11 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 6:13 | händelse | salt | sak=kruka n=1 |
| 6:13 | aliSalt | ali | 105 |
| 6:13 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 6:22 | händelse | printStart | sak=kruka |
| 6:25 | toast | guld | ✅ |
| 6:25 | händelse | printKlar | sak=kruka n=32 |
| 6:28 | händelse | tagitUrPrint | sak=kruka n=1 |
| 6:34 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 6:36 | händelse | salt | sak=kruka n=1 |
| 6:36 | aliSalt | ali | 105 |
| 6:36 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 6:45 | händelse | printStart | sak=kruka |
| 6:48 | toast | guld | ✅ |
| 6:48 | händelse | printKlar | sak=kruka n=33 |
| 6:48 | händelse | tagitUrPrint | sak=kruka n=1 |
| 6:54 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 6:56 | händelse | salt | sak=kruka n=1 |
| 6:56 | aliSalt | ali | 105 |
| 6:56 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 7:05 | händelse | printStart | sak=kruka |
| 7:07 | toast | guld | ✅ |
| 7:07 | händelse | printKlar | sak=kruka n=34 |
| 7:08 | händelse | tagitUrPrint | sak=kruka n=1 |
| 7:14 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 7:15 | händelse | salt | sak=kruka n=1 |
| 7:15 | aliSalt | ali | 105 |
| 7:15 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 7:25 | händelse | printStart | sak=kruka |
| 7:27 | toast | guld | ✅ |
| 7:27 | händelse | printKlar | sak=kruka n=35 |
| 7:28 | händelse | tagitUrPrint | sak=kruka n=1 |
| 7:34 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 7:35 | händelse | salt | sak=kruka n=1 |
| 7:35 | aliSalt | ali | 105 |
| 7:35 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 7:45 | händelse | printStart | sak=kruka |
| 7:47 | upplåst | bara | matarband |
| 7:47 | brott | RESERV | matarband (bara 0 av 3) |
| 7:47 | händelse | upplast | id=matarband flask=bara |
| 7:47 | paket |  | sms |
| 7:47 | väntar | ali | Ali här. 🗑️ Sophållaren. Jag frågade AI:n hur man slipper bära skräp. Den gjorde det här. Den har mer fritid än jag. Suck. |
| 7:47 | sak | ali | Ali här. 🗑️ Sophållaren. Jag frågade AI:n hur man slipper bära skräp. Den gjorde det här. Den har mer fritid än jag. Suck. |
| 7:47 | sms | ali | Ali här. 🗑️ Sophållaren. Jag frågade AI:n hur man slipper bära skräp. Den gjorde det här. Den har mer fritid än jag. Suck. |
| 7:47 | sms-bubbla | ali | Ali här. 🗑️ Sophållaren. Jag frågade AI:n hur man slipper bära skräp. Den gjorde det här. Den har mer fritid än jag. Suck. |
| 7:47 | röst | ali | Ali här. 🗑️ Sophållaren. Jag frågade AI:n hur man slipper bära skräp. Den gjorde det här. Den har mer fritid än jag. Suck. · STORY |
| 7:47 | toast | guld | ✅ |
| 7:47 | händelse | printKlar | sak=kruka n=36 |
| 7:48 | händelse | tagitUrPrint | sak=kruka n=1 |
| 7:54 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 7:55 | händelse | salt | sak=kruka n=1 |
| 7:55 | aliSalt | ali | 105 |
| 7:55 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 7:57 | klar | ali | Ali här. 🗑️ Sophållaren. Jag frågade AI:n hur man slipper bära skräp. Den gjorde det här. Den har mer fritid än jag. Suck. |
| 7:59 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 8:01 | struken | info:guld | 3D-modell köpt – printa sophållare |
| 8:01 | händelse | kopt | sak=matarband |
| 8:01 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 8:05 | skratt | du | falsk tuta |
| 8:10 | händelse | printStart | sak=byggsats:matarband |
| 8:13 | toast | bra | Del 1 av 3 klar |
| 8:16 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 8:28 | toast | bra | Del 2 av 3 klar |
| 8:32 | händelse | printKlar | sak=byggsats:matarband n=1 |
| 8:32 | toast | guld | ✅ |
| 8:33 | paket |  | tanke |
| 8:33 | tanke | du | En badanka. Den överlevde kvarnen. |
| 8:33 | väntar | du | En badanka. Den överlevde kvarnen. |
| 8:33 | skratt | du | kvarnen spottar |
| 8:39 | händelse | tagitUrPrint | sak=byggsats:matarband n=1 |
| 8:39 | paket |  | sms |
| 8:39 | väntar | ali | Ali här. Jag såg Sophållare på avstånd. Ett streck blev lite snett. Mitt fel. Vackert ändå. |
| 8:39 | paket |  | sms |
| 8:39 | väntar | ali | Ali igen. Jag har sagt till min bror att jag inte går i pension. Jag startar något. Han skrattade. Jag skrattade också. Men jag menar det. Tack. Säg inget. |
| 8:40 | händelse | placerat | sak=sophallare |
| 8:40 | väntar | info:guld | 🗑️ Sophållaren står bakom kvarnen! Töm allt skräp i den – den matar kvarnen själv. |
| 8:40 | sak | info:guld | 🗑️ Sophållaren står bakom kvarnen! Töm allt skräp i den – den matar kvarnen själv. |
| 8:40 | kvitto-visas | info:guld | 🗑️ Sophållaren står bakom kvarnen! Töm allt skräp i den – den matar kvarnen själv. |
| 8:40 | toast | guld | 🗑️ Sophållaren står bakom kvarnen! Töm allt skräp i den – den matar kvarnen själv. |
| 8:40 | händelse | malKlart | id=sophallare del=Dag 4 – Kärran och mer vind nasta=pall |
| 8:40 | bekräftelse | du | plats |
| 8:40 | kvittens | du | Nu kan jag tömma hela kärran på en gång. |
| 8:40 | väntar | du | Nu kan jag tömma hela kärran på en gång. |
| 8:40 | struken | du | En badanka. Den överlevde kvarnen. |
| 8:40 | väntar | du | Jag behöver något att sitta på. En pall. Lagom ambitiöst. |
| 8:40 | MÅL |  | Printa en pall |
| 8:42 | klar | info:guld | 🗑️ Sophållaren står bakom kvarnen! Töm allt skräp i den – den matar kvarnen själv. |
| 8:42 | sak | du | Nu kan jag tömma hela kärran på en gång. |
| 8:42 | röst | du | Nu kan jag tömma hela kärran på en gång. · STORY |
| 8:43 | målruta |  | Printa en pall |
| 8:45 | klar | du | Nu kan jag tömma hela kärran på en gång. |
| 8:46 | sak | du | Jag behöver något att sitta på. En pall. Lagom ambitiöst. |
| 8:46 | pil |  | Printa en pall |
| 8:46 | notis | tanke | 💭 Jag behöver något att sitta på. En pall. Lagom ambitiöst. |
| 8:46 | röst | du | Jag behöver något att sitta på. En pall. Lagom ambitiöst. · MÅL |
| 8:46 | nick |  | nick:46 |
| 8:50 | klar | du | Jag behöver något att sitta på. En pall. Lagom ambitiöst. |
| 8:54 | väntar | bud | (tips) |
| 8:54 | sak | bud | (tips) |
| 8:56 | klar | bud | (tips) |
| 8:58 | meddelande | bror | Jag har gjort om ditt rum till gym. Mamma vet inte. Säg inget. |
| 8:59 | röst | bror | Jag har gjort om ditt rum till gym. Mamma vet inte. Säg inget. · STORY |
| 9:09 | paket |  | sms |
| 9:09 | väntar | bror | Bra. Jag har satt upp en räcka i din garderob. Den håller. Typ. |
| 9:18 | händelse | brevLast | id=b_gym |
| 9:18 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 9:20 | händelse | kopt | sak=pall |
| 9:20 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 9:20 | röst | ali | Bra val. Folk köper sånt. Jag vet inte varför. · STORY |
| 9:20 | upprepning | ali | Bra val. Folk köper sånt. Jag vet inte varför. |
| 9:20 | butiksbubbla | ali | Pall? Bra val. Folk köper sånt. Jag vet inte varför. |
| 9:28 | händelse | printStart | sak=pall |
| 9:33 | toast | guld | ✅ |
| 9:33 | händelse | printKlar | sak=pall n=1 |
| 9:33 | händelse | malKlart | id=pall del=Dag 4 – Kärran och mer vind nasta=vind4 |
| 9:33 | bekräftelse | du | plats |
| 9:33 | väntar | du | En vindsnurra till på skjulets tak. Skrivarna vill ha mer ström. |
| 9:34 | MÅL |  | Printa och sälj |
| 9:34 | målruta |  | Printa och sälj |
| 9:34 | sak | du | En vindsnurra till på skjulets tak. Skrivarna vill ha mer ström. |
| 9:34 | pil |  | Printa och sälj |
| 9:34 | notis | tanke | 💭 En vindsnurra till på skjulets tak. Skrivarna vill ha mer ström. |
| 9:34 | röst | du | En vindsnurra till på skjulets tak. Skrivarna vill ha mer ström. · MÅL |
| 9:34 | händelse | tagitUrPrint | sak=pall n=1 |
| 9:37 | kvittens-bock |  | ✓ Printa en pall |
| 9:39 | klar | du | En vindsnurra till på skjulets tak. Skrivarna vill ha mer ström. |
| 9:40 | händelse | placerat | sak=pall |
| 9:43 | struken | ali | Ali igen. Jag har sagt till min bror att jag inte går i pension. Jag startar något. Han skrattade. Jag skrattade också. Men jag menar det. Tack. Säg inget. |
| 9:44 | struken | ali | Ali här. Jag såg Sophållare på avstånd. Ett streck blev lite snett. Mitt fel. Vackert ändå. |
| 9:47 | händelse | printStart | sak=pall |
| 9:52 | toast | guld | ✅ |
| 9:52 | händelse | printKlar | sak=pall n=2 |
| 9:53 | händelse | tagitUrPrint | sak=pall n=1 |
| 9:53 | strömdipp | du | vindsnurra2 |
| 9:53 | paket |  | tanke |
| 9:53 | tanke | du | Allt stannar. Maskinerna drar mer än jag får in. |
| 9:53 | väntar | du | Allt stannar. Maskinerna drar mer än jag får in. |
| 9:54 | sak | du | Allt stannar. Maskinerna drar mer än jag får in. |
| 9:54 | notis | tanke | 💭 Allt stannar. Maskinerna drar mer än jag får in. |
| 9:54 | röst | du | Allt stannar. Maskinerna drar mer än jag får in. · STORY |
| 9:58 | klar | du | Allt stannar. Maskinerna drar mer än jag får in. |
| 9:58 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 10:00 | händelse | salt | sak=pall n=1 |
| 10:00 | aliSalt | ali | 180 |
| 10:00 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 10:06 | upplåst | strom | vindsnurra2 |
| 10:06 | brott | UPPLÅST | vindsnurra2 (strom 43 av 15) |
| 10:06 | händelse | upplast | id=vindsnurra2 flask=strom |
| 10:06 | paket |  | tanke → sms |
| 10:06 | tanke | du | En snurra räcker inte. Skrivarna står still så fort det blir stilla. |
| 10:06 | väntar | du | En snurra räcker inte. Skrivarna står still så fort det blir stilla. |
| 10:06 | väntar | ali | Ali här. En snurra till? Taket har plats för två. Vinden har inget emot det. |
| 10:06 | sak | du | En snurra räcker inte. Skrivarna står still så fort det blir stilla. |
| 10:06 | notis | tanke | 💭 En snurra räcker inte. Skrivarna står still så fort det blir stilla. |
| 10:06 | röst | du | En snurra räcker inte. Skrivarna står still så fort det blir stilla. · STORY |
| 10:12 | klar | du | En snurra räcker inte. Skrivarna står still så fort det blir stilla. |
| 10:12 | tanke | du | Hård plast. Lilla kvarnen skulle explodera. Eller jag. |
| 10:12 | väntar | du | Hård plast. Lilla kvarnen skulle explodera. Eller jag. |
| 10:12 | tanke | du | En husvagn mitt i tippen. Och grinden är låst. |
| 10:12 | struken | du | Hård plast. Lilla kvarnen skulle explodera. Eller jag. |
| 10:12 | väntar | du | En husvagn mitt i tippen. Och grinden är låst. |
| 10:14 | sak | du | En husvagn mitt i tippen. Och grinden är låst. |
| 10:14 | notis | tanke | 💭 En husvagn mitt i tippen. Och grinden är låst. |
| 10:14 | röst | du | En husvagn mitt i tippen. Och grinden är låst. · REAKTION |
| 10:18 | klar | du | En husvagn mitt i tippen. Och grinden är låst. |
| 10:27 | händelse | printStart | sak=pall |
| 10:27 | sak | bror | Bra. Jag har satt upp en räcka i din garderob. Den håller. Typ. |
| 10:27 | sms | bror | Bra. Jag har satt upp en räcka i din garderob. Den håller. Typ. |
| 10:27 | sms-bubbla | bror | Bra. Jag har satt upp en räcka i din garderob. Den håller. Typ. |
| 10:27 | röst | bror | Bra. Jag har satt upp en räcka i din garderob. Den håller. Typ. · STORY |
| 10:29 | toast | fel | Ingen ström – trampa cykeln |
| 10:32 | klar | bror | Bra. Jag har satt upp en räcka i din garderob. Den håller. Typ. |
| 10:40 | toast | guld | ✅ |
| 10:40 | händelse | printKlar | sak=pall n=3 |
| 10:40 | händelse | tagitUrPrint | sak=pall n=1 |
| 10:46 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 10:47 | händelse | salt | sak=pall n=1 |
| 10:47 | aliSalt | ali | 171 |
| 10:47 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 10:50 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 10:51 | struken | info:guld | 3D-modell köpt – printa vindsnurra till skjultaket |
| 10:51 | händelse | kopt | sak=vindsnurra |
| 10:51 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 11:00 | händelse | printStart | sak=byggsats:vindsnurra |
| 11:04 | händelse | printKlar | sak=byggsats:vindsnurra n=1 |
| 11:04 | toast | guld | ✅ |
| 11:04 | struken | info:guld | 🌬️ Vindsnurran ska upp på skjulets tak. |
| 11:04 | händelse | tagitUrPrint | sak=byggsats:vindsnurra n=1 |
| 11:10 | händelse | placerat | sak=vindsnurra |
| 11:10 | struken | info:guld | 🌬️ Vindsnurran sitter på taket – den trampar cykeln åt mig när det blåser |
| 11:10 | monterat | du | byggsats:vindsnurra |
| 11:10 | händelse | monterat | sak=vindsnurra |
| 11:10 | händelse | malKlart | id=vind4 del=Dag 4 – Kärran och mer vind nasta=n3-isolera-tva-vaggar |
| 11:10 | bekräftelse | du | plats |
| 11:10 | lapp | 📔 Dagbok | Slut på trampandet. Nästan. |
| 11:10 | dagbokrad | du | Slut på trampandet. Nästan. |
| 11:10 | väntar | notis:Slut på trampandet. Nästan. | Slut på trampandet. Nästan. |
| 11:10 | väntar | du | Det drar genom väggarna. Isolering, och sen blir det varmt. |
| 11:10 | MÅL |  | Isolera två väggar · 0/2 |
| 11:10 | sak | du | Det drar genom väggarna. Isolering, och sen blir det varmt. |
| 11:10 | målruta |  | Isolera två väggar · 0/2 |
| 11:10 | pil |  | Isolera två väggar · 0/2 |
| 11:10 | notis | tanke | 💭 Det drar genom väggarna. Isolering, och sen blir det varmt. |
| 11:10 | röst | du | Det drar genom väggarna. Isolering, och sen blir det varmt. · MÅL |
| 11:11 | nick |  | nick:48 |
| 11:15 | klar | du | Det drar genom väggarna. Isolering, och sen blir det varmt. |
| 11:17 | sak | notis:Slut på trampandet. Nästan. | Slut på trampandet. Nästan. |
| 11:17 | notis | dagbok | Slut på trampandet. Nästan. |
| 11:20 | klar | notis:Slut på trampandet. Nästan. | Slut på trampandet. Nästan. |
| 11:20 | händelse | pappa | Pappa ringer |
| 11:24 | röst | pappa | Hej. Det är pappa. · STORY |
| 11:27 | röst | du | Hej pappa. · STORY |
| 11:29 | röst | pappa | Mamma står bredvid. Hon säger att jag ska fråga om du äter. · STORY |
| 11:34 | röst | du | Jag äter. Och jag har en egen kvarn nu. Och en 3D-skrivare. · STORY |
| 11:40 | röst | pappa | Jaha. En kvarn. Vad lugnt då. · STORY |
| 11:43 | röst | pappa | Jag kanske kommer förbi nån dag. Om det passar. · STORY |
| 11:48 | röst | du | Det passar. · STORY |
| 11:51 | röst | pappa | Bra. Hej då då. · STORY |
| 11:59 | händelse | samtalSlut | id=pappa4 |
| 12:00 | sak | ali | Ali här. En snurra till? Taket har plats för två. Vinden har inget emot det. |
| 12:00 | sms | ali | Ali här. En snurra till? Taket har plats för två. Vinden har inget emot det. |
| 12:00 | sms-bubbla | ali | Ali här. En snurra till? Taket har plats för två. Vinden har inget emot det. |
| 12:00 | röst | ali | Ali här. En snurra till? Taket har plats för två. Vinden har inget emot det. · STORY |
| 12:04 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 12:05 | struken | info:guld | 3D-modell köpt – printa isolerskiva (vägg) |
| 12:05 | händelse | kopt | sak=vaggar |
| 12:05 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 12:07 | klar | ali | Ali här. En snurra till? Taket har plats för två. Vinden har inget emot det. |
| 12:14 | händelse | printStart | sak=byggsats:vaggar |
| 12:18 | händelse | printKlar | sak=byggsats:vaggar n=1 |
| 12:18 | toast | guld | ✅ |
| 12:19 | händelse | tagitUrPrint | sak=byggsats:vaggar n=1 |
| 12:23 | väntar | info:guld | 🧱 Bakväggen klar. 3 kvar. |
| 12:23 | sak | info:guld | 🧱 Bakväggen klar. 3 kvar. |
| 12:23 | kvitto-visas | info:guld | 🧱 Bakväggen klar. 3 kvar. |
| 12:23 | toast | guld | 🧱 Bakväggen klar. 3 kvar. |
| 12:25 | klar | info:guld | 🧱 Bakväggen klar. 3 kvar. |
| 12:30 | skratt | du | falsk tuta |
| 12:32 | händelse | printStart | sak=byggsats:vaggar |
| 12:36 | händelse | printKlar | sak=byggsats:vaggar n=1 |
| 12:36 | toast | guld | ✅ |
| 12:36 | händelse | tagitUrPrint | sak=byggsats:vaggar n=1 |
| 12:41 | väntar | info:guld | 🧱 Vänster vägg klar. 2 kvar. |
| 12:41 | sak | info:guld | 🧱 Vänster vägg klar. 2 kvar. |
| 12:41 | kvitto-visas | info:guld | 🧱 Vänster vägg klar. 2 kvar. |
| 12:41 | toast | guld | 🧱 Vänster vägg klar. 2 kvar. |
| 12:41 | händelse | malKlart | id=n3-isolera-tva-vaggar del=Dag 4 – Kärran och mer vind nasta=sov4 |
| 12:41 | paket |  | lapp |
| 12:41 | väntar | du | En skrivare räcker inte. |
| 12:41 | bekräftelse | du | plats |
| 12:41 | MÅL |  | Klart för idag – sov när du vill |
| 12:43 | klar | info:guld | 🧱 Vänster vägg klar. 2 kvar. |
| 12:43 | målruta |  | Klart för idag – sov när du vill |
| 12:44 | paket |  | replik |
| 12:44 | väntar | rolf | Hoppa in. Ja ska visa dej en grej. |
| 12:45 | kvittens-bock |  | ✓ Isolera två väggar · 2/2 |
| 12:45 | sak | du | (nytt mål i rutan) |
| 12:45 | pil |  | Klart för idag – sov när du vill |
| 12:45 | klar | du | (nytt mål i rutan) |
| 12:45 | skratt | du | däcket rullar iväg |
| 12:47 | sak | du | En skrivare räcker inte. |
| 12:47 | kvallsrad | du | En skrivare räcker inte. |
| 12:47 | klar | du | En skrivare räcker inte. |
| 12:48 | väntar | notis:🌇 Klockan är 21. Ali slår igen luckan.  | 🌇 Klockan är 21. Ali slår igen luckan. Dagens jobb är klart – gå in i skjulet och sov i sängen. |
| 12:55 | sak | rolf | Hoppa in. Ja ska visa dej en grej. |
| 12:55 | notis |  | Rolf: ”Hoppa in. Ja ska visa dej en grej.” |
| 12:55 | röst | rolf | Hoppa in. Ja ska visa dej en grej. · STORY |
| 12:58 | klar | rolf | Hoppa in. Ja ska visa dej en grej. |
| 13:16 | väntar | mamma | Det har ringt en karl som heter Rolf och frågat om du gillar korv. Vem är det? Varför har han mitt nummer? |
| 13:47 | skratt | du | falsk tuta |
| 13:55 | scenInfo | rolf | Rolf kör upp till sin bänk |
| 13:59 | röst | rolf | Kall öl ä viktigt. · STORY |
| 13:59 | bubbla | rolf | Kall öl ä viktigt. |
| 14:07 | röst | rolf | Ja kommer hit varje kväll. Förr va vi två på bänken. · STORY |
| 14:07 | bubbla | rolf | Ja kommer hit varje kväll. Förr va vi två på bänken. |
| 14:25 | röst | rolf | Dä där ä Bengt-Åke. Vinka int. · STORY |
| 14:25 | bubbla | rolf | Dä där ä Bengt-Åke. Vinka int. |
| 14:39 | skratt | du | falsk tuta |
| 14:40 | röst | rolf | Den ä skyldig mej pengar. · STORY |
| 14:40 | bubbla | rolf | Den ä skyldig mej pengar. |
| 14:49 | väntar | foto | Rolfs bänk |
| 14:49 | paket |  | tanke |
| 14:49 | tanke | du | Han kommer hit varje kväll. Nu vet jag var. |
| 14:49 | väntar | du | Han kommer hit varje kväll. Nu vet jag var. |
| 14:49 | skratt | du | Rolfs bänk |
| 14:55 | sak | foto | Rolfs bänk |
| 14:55 | foto | du | Rolfs bänk |
| 14:57 | lapp | Dagbok | Fyra dagar. Tänk om tre veckor. |
| 14:57 | röst | du | Fyra dagar. Tänk om tre veckor. · REAKTION |
| 14:58 | klar | foto | Rolfs bänk |
| 15:07 | sak | du | Han kommer hit varje kväll. Nu vet jag var. |
| 15:07 | notis | tanke | 💭 Han kommer hit varje kväll. Nu vet jag var. |
| 15:07 | röst | du | Han kommer hit varje kväll. Nu vet jag var. · STORY |
| 15:11 | klar | du | Han kommer hit varje kväll. Nu vet jag var. |
| 15:12 | nattkort | du | 🌙 18 dagar kvar. God natt. zzz… En skrivare räcker inte. DAGENS PRINTAR Blomkruka × 18 Pall × 3 Grillspade × 1 Totalt 22 printar 💰 Tjänat i dag +2 259 kr |

<details><summary>Botens handlingar dag 4</summary>

- 0:00 — dag 4 börjar — (490 kr)
- 0:08 popup: "FORTSÄTT" (490 kr)
- 0:25 gå till Rolfs postlåda (28 m) (490 kr)
- 0:33 panel: "Rolfs postlåda
Det här låg i l" (610 kr)
- 0:33 tjänar pengar till väntar på sopbilen (BO): 610/670 kr → printar blomkruka (105 kr) (610 kr)
- 0:35 gå till skrivaren (8 m) (610 kr)
- 0:36 printar Blomkruka (610 kr)
- 0:40 tar ut 1 st ur skrivaren (610 kr)
- 0:46 gå till Ali (26 m) (610 kr)
- 0:46 öppnar Alis butik – sälja (610 kr)
- 0:48 säljer hos Ali: +3 kr (613 kr)
- 0:49 tjänar pengar till väntar på sopbilen (BO): 613/670 kr → printar blomkruka (105 kr) (613 kr)
- 0:54 gå till skrivaren (24 m) (613 kr)
- 0:55 printar Blomkruka (613 kr)
- 0:59 tar ut 1 st ur skrivaren (613 kr)
- 1:04 gå till Ali (24 m) (613 kr)
- 1:04 öppnar Alis butik – sälja (613 kr)
- 1:06 säljer hos Ali: +105 kr (718 kr)
- 1:08 tjänar pengar till väntar på sopbilen (BO): 718/778 kr → printar blomkruka (105 kr) (718 kr)
- 1:14 gå till skrivaren (24 m) (718 kr)
- 1:15 printar Blomkruka (718 kr)
- 1:19 tar ut 1 st ur skrivaren (718 kr)
- 1:24 gå till Ali (24 m) (718 kr)
- 1:24 öppnar Alis butik – sälja (718 kr)
- 1:26 säljer hos Ali: +105 kr (823 kr)
- 1:30 tjänar pengar till väntar på sopbilen (BO): 823/883 kr → printar blomkruka (105 kr) (823 kr)
- 1:41 plockar 2 skräp på tippen (bär max 16) (823 kr)
- 1:44 gå till kvarnen (11 m) (823 kr)
- 1:51 gå till skrivaren (5 m) (823 kr)
- 1:53 printar Blomkruka (823 kr)
- 1:56 tar ut 1 st ur skrivaren (823 kr)
- 2:02 gå till Ali (26 m) (823 kr)
- 2:02 öppnar Alis butik – sälja (823 kr)
- 2:04 säljer hos Ali: +105 kr (928 kr)
- 2:16 tjänar pengar till väntar på sopbilen (BO): 928/988 kr → printar blomkruka (105 kr) (928 kr)
- 2:21 gå till skrivaren (24 m) (928 kr)
- 2:23 printar Blomkruka (928 kr)
- 2:27 tar ut 1 st ur skrivaren (928 kr)
- 2:32 gå till Ali (24 m) (928 kr)
- 2:32 öppnar Alis butik – sälja (928 kr)
- 2:34 säljer hos Ali: +105 kr (1033 kr)
- 2:37 tjänar pengar till väntar på sopbilen (BO): 1033/1093 kr → printar blomkruka (105 kr) (1033 kr)
- 2:43 gå till skrivaren (24 m) (1033 kr)
- 2:44 printar Blomkruka (1033 kr)
- 2:48 tar ut 1 st ur skrivaren (1033 kr)
- 2:53 gå till Ali (24 m) (1033 kr)
- 2:53 öppnar Alis butik – sälja (1033 kr)
- 2:55 säljer hos Ali: +105 kr (1138 kr)
- 3:02 tjänar pengar till väntar på sopbilen (BO): 1138/1198 kr → printar blomkruka (105 kr) (1138 kr)
- 3:08 gå till skrivaren (24 m) (1138 kr)
- 3:09 printar Blomkruka (1138 kr)
- 3:13 tar ut 1 st ur skrivaren (1138 kr)
- 3:18 gå till Ali (24 m) (1138 kr)
- 3:18 öppnar Alis butik – sälja (1138 kr)
- 3:20 säljer hos Ali: +105 kr (1243 kr)
- 3:23 tjänar pengar till väntar på sopbilen (BO): 1243/1303 kr → printar blomkruka (105 kr) (1243 kr)
- 3:29 gå till skrivaren (24 m) (1243 kr)
- 3:30 printar Blomkruka (1243 kr)
- 3:34 tar ut 1 st ur skrivaren (1243 kr)
- 3:39 gå till Ali (24 m) (1243 kr)
- 3:39 öppnar Alis butik – sälja (1243 kr)
- 3:41 säljer hos Ali: +105 kr (1348 kr)
- 3:51 gå till Rolfs postlåda (31 m) (1348 kr)
- 3:53 gå till skrivaren (8 m) (1348 kr)
- 3:55 printar Grillspade (1348 kr)
- 4:00 tar ut 1 st ur skrivaren (1348 kr)
- 4:04 valj grillspade: true, vald grillspade, post {"l":null,"tr":null,"tm":[]}, nummer false (1348 kr)
- 4:06 gå till Rolfs postlåda (8 m) (1348 kr)
- 4:23 fyller kärran med 8 skräp (1348 kr)
- 4:24 gå till kvarnen (8 m) (1348 kr)
- 4:37 tjänar pengar till väntar på flaskhalsen för matarband: 1348/1388 kr → printar blomkruka (105 kr) (1348 kr)
- 4:38 gå till skrivaren (5 m) (1348 kr)
- 4:40 printar Blomkruka (1348 kr)
- 4:44 tar ut 1 st ur skrivaren (1348 kr)
- 4:49 gå till Ali (27 m) (1348 kr)
- 4:49 öppnar Alis butik – sälja (1348 kr)
- 4:51 säljer hos Ali: +105 kr (1453 kr)
- 4:52 tjänar pengar till väntar på flaskhalsen för matarband: 1453/1493 kr → printar blomkruka (105 kr) (1453 kr)
- 4:57 gå till skrivaren (24 m) (1453 kr)
- 4:59 printar Blomkruka (1453 kr)
- 5:03 tar ut 1 st ur skrivaren (1453 kr)
- 5:08 gå till Ali (24 m) (1453 kr)
- 5:08 öppnar Alis butik – sälja (1453 kr)
- 5:10 säljer hos Ali: +105 kr (1558 kr)
- 5:12 tjänar pengar till väntar på flaskhalsen för matarband: 1558/1598 kr → printar blomkruka (105 kr) (1558 kr)
- 5:17 gå till skrivaren (24 m) (1558 kr)
- 5:19 printar Blomkruka (1558 kr)
- 5:23 tar ut 1 st ur skrivaren (1558 kr)
- 5:28 gå till Ali (24 m) (1558 kr)
- 5:28 öppnar Alis butik – sälja (1558 kr)
- 5:30 säljer hos Ali: +105 kr (1663 kr)
- 5:32 tjänar pengar till väntar på flaskhalsen för matarband: 1663/1703 kr → printar blomkruka (105 kr) (1663 kr)
- 5:37 gå till skrivaren (24 m) (1663 kr)
- 5:39 printar Blomkruka (1663 kr)
- 5:43 tar ut 1 st ur skrivaren (1663 kr)
- 5:48 gå till Ali (24 m) (1663 kr)
- 5:48 öppnar Alis butik – sälja (1663 kr)
- 5:50 säljer hos Ali: +105 kr (1768 kr)
- 5:55 tjänar pengar till väntar på flaskhalsen för matarband: 1768/1808 kr → printar blomkruka (105 kr) (1768 kr)
- 6:01 gå till skrivaren (24 m) (1768 kr)
- 6:02 printar Blomkruka (1768 kr)
- 6:06 tar ut 1 st ur skrivaren (1768 kr)
- 6:11 gå till Ali (24 m) (1768 kr)
- 6:11 öppnar Alis butik – sälja (1768 kr)
- 6:13 säljer hos Ali: +105 kr (1873 kr)
- 6:15 tjänar pengar till väntar på flaskhalsen för matarband: 1873/1913 kr → printar blomkruka (105 kr) (1873 kr)
- 6:20 gå till skrivaren (24 m) (1873 kr)
- 6:22 printar Blomkruka (1873 kr)
- 6:28 gå till skrivaren (4 m) (1873 kr)
- 6:28 tar ut 1 st ur skrivaren (1873 kr)
- 6:34 gå till Ali (26 m) (1873 kr)
- 6:34 öppnar Alis butik – sälja (1873 kr)
- 6:36 säljer hos Ali: +105 kr (1978 kr)
- 6:38 tjänar pengar till väntar på flaskhalsen för matarband: 1978/2018 kr → printar blomkruka (105 kr) (1978 kr)
- 6:43 gå till skrivaren (24 m) (1978 kr)
- 6:45 printar Blomkruka (1978 kr)
- 6:49 tar ut 1 st ur skrivaren (1978 kr)
- 6:54 gå till Ali (24 m) (1978 kr)
- 6:54 öppnar Alis butik – sälja (1978 kr)
- 6:56 säljer hos Ali: +105 kr (2083 kr)
- 6:58 tjänar pengar till väntar på flaskhalsen för matarband: 2083/2123 kr → printar blomkruka (105 kr) (2083 kr)
- 7:03 gå till skrivaren (24 m) (2083 kr)
- 7:05 printar Blomkruka (2083 kr)
- 7:09 tar ut 1 st ur skrivaren (2083 kr)
- 7:14 gå till Ali (24 m) (2083 kr)
- 7:14 öppnar Alis butik – sälja (2083 kr)
- 7:16 säljer hos Ali: +105 kr (2188 kr)
- 7:18 tjänar pengar till väntar på flaskhalsen för matarband: 2188/2228 kr → printar blomkruka (105 kr) (2188 kr)
- 7:23 gå till skrivaren (24 m) (2188 kr)
- 7:25 printar Blomkruka (2188 kr)
- 7:29 tar ut 1 st ur skrivaren (2188 kr)
- 7:34 gå till Ali (24 m) (2188 kr)
- 7:34 öppnar Alis butik – sälja (2188 kr)
- 7:36 säljer hos Ali: +105 kr (2293 kr)
- 7:38 tjänar pengar till väntar på flaskhalsen för matarband: 2293/2333 kr → printar blomkruka (105 kr) (2293 kr)
- 7:43 gå till skrivaren (24 m) (2293 kr)
- 7:45 printar Blomkruka (2293 kr)
- 7:48 tar ut 1 st ur skrivaren (2293 kr)
- 7:54 gå till Ali (24 m) (2293 kr)
- 7:54 öppnar Alis butik – sälja (2293 kr)
- 7:56 säljer hos Ali: +105 kr (2398 kr)
- 7:59 öppnar Alis butik – köpa sophållare (2398 kr)
- 8:02 köper matarband för 120 kr (2278 kr)
- 8:08 gå till skrivaren (24 m) (2278 kr)
- 8:10 printar Sophållare (3 delar) (2278 kr)
- 8:24 plockar 6 skräp på tippen (bär max 16) (2278 kr)
- 8:27 gå till kvarnen (11 m) (2278 kr)
- 8:39 gå till skrivaren (5 m) (2278 kr)
- 8:39 tar ut 1 st ur skrivaren (2278 kr)
- 8:40 gå till kvarnen (3 m) (2278 kr)
- 9:09 popup: "Okej, jag säger inget." (2278 kr)
- 9:18 popup: "Läst" (2278 kr)
- 9:18 gå till Ali (29 m) (2278 kr)
- 9:18 öppnar Alis butik – köpa receptet pall (2278 kr)
- 9:20 köper pall för 80 kr (2198 kr)
- 9:27 gå till skrivaren (24 m) (2198 kr)
- 9:28 printar Pall (2198 kr)
- 9:34 tar ut 1 st ur skrivaren (2198 kr)
- 9:39 gå till platsen för pall (20 m) (2198 kr)
- 9:40 ställer ut pall (2198 kr)
- 9:41 tjänar pengar till väntar på flaskhalsen för vindsnurra2: 2198/2238 kr → printar pall (180 kr) (2198 kr)
- 9:46 gå till skrivaren (20 m) (2198 kr)
- 9:47 printar Pall (2198 kr)
- 9:53 tar ut 1 st ur skrivaren (2198 kr)
- 9:58 gå till Ali (24 m) (2198 kr)
- 9:58 öppnar Alis butik – sälja (2198 kr)
- 10:00 säljer hos Ali: +180 kr (2378 kr)
- 10:01 tjänar pengar till väntar på flaskhalsen för vindsnurra2: 2378/2418 kr → printar pall (171 kr) (2378 kr)
- 10:12 plockar 4 skräp på tippen (bär max 16) (2378 kr)
- 10:15 gå till kvarnen (13 m) (2378 kr)
- 10:17 gå till cykeln (4 m) (2378 kr)
- 10:25 gå till skrivaren (2 m) (2378 kr)
- 10:27 printar Pall (2378 kr)
- 10:40 tar ut 1 st ur skrivaren (2378 kr)
- 10:46 gå till Ali (26 m) (2378 kr)
- 10:46 öppnar Alis butik – sälja (2378 kr)
- 10:47 säljer hos Ali: +171 kr (2549 kr)
- 10:50 öppnar Alis butik – köpa vindsnurra till skjultaket (2549 kr)
- 10:52 köper vindsnurra för 133 kr (2416 kr)
- 10:58 gå till skrivaren (24 m) (2416 kr)
- 11:00 printar Vindsnurra till skjultaket (2416 kr)
- 11:05 tar ut 1 st ur skrivaren (2416 kr)
- 11:10 gå till sätt vindsnurran på taket (18 m) (2416 kr)
- 11:24 popup: "Svara E" (2416 kr)
- 11:33 popup: "Nästa E" (2416 kr)
- 11:41 popup: "Nästa E" (2416 kr)
- 11:49 popup: "Nästa E" (2416 kr)
- 11:54 popup: "Nästa E" (2416 kr)
- 11:59 popup: "Lägg på E" (2416 kr)
- 12:04 gå till Ali (20 m) (2416 kr)
- 12:04 öppnar Alis butik – köpa isolerskiva (vägg) (2416 kr)
- 12:06 köper vaggar för 130 kr (2286 kr)
- 12:13 gå till skrivaren (24 m) (2286 kr)
- 12:14 printar Isolerskiva (vägg) (2286 kr)
- 12:19 tar ut 1 st ur skrivaren (2286 kr)
- 12:23 gå till skjulet (bak) (17 m) (2286 kr)
- 12:30 gå till skrivaren (17 m) (2286 kr)
- 12:32 printar Isolerskiva (vägg) (2286 kr)
- 12:37 tar ut 1 st ur skrivaren (2286 kr)
- 12:41 gå till skjulet (vanster) (17 m) (2286 kr)
- 13:55 gå till sopbilen (Rolfs bänk) (38 m) (2286 kr)
- 14:55 tillbaka från Rolfs bänk (2286 kr)
- 15:01 panel: "Dagbok
Före och efter
3 decemb" (2286 kr)
- 15:09 gå till sängen (39 m) (2286 kr)

</details>

## Dag 5

| Tid | Källa | Vem | Text |
|---|---|---|---|
| 15:12 | vara | ali | pall |
| 15:12 | händelse | malKlart | id=sov4 del=Dag 4 – Kärran och mer vind nasta=rolf3-brev |
| 15:12 | bekräftelse | du | plats |
| 15:12 | MÅL |  | Vänta på sopbilen. Den lämnar något. |
| 0:01 | händelse | dagenBorjar | dag=5 |
| 0:01 | meddelande | du | 17 dagar till jul. Utan pengar blir det ingen jul här. |
| 0:01 | dagbokkort | du | Tätt och mysigt · 17 dagar till jul. Utan pengar blir det ingen jul här. |
| 0:01 | röst | du | 17 dagar till jul. Tätt och mysigt. Utan pengar blir det ingen jul här. · STORY |
| 0:07 | väntar | notis:morgon | Ali vill ha idag: Pall · +50 % |
| 0:08 | händelse | morgonkortStangt | dag=5 |
| 0:08 | målruta |  | Vänta på sopbilen. Den lämnar något. |
| 0:13 | sak | du | (nytt mål i rutan) |
| 0:13 | pil |  | Vänta på sopbilen. Den lämnar något. |
| 0:13 | klar | du | (nytt mål i rutan) |
| 0:15 | struken | notis:🌇 Klockan är 21. Ali slår igen luckan.  | 🌇 Klockan är 21. Ali slår igen luckan. Dagens jobb är klart – gå in i skjulet och sov i sängen. |
| 0:15 | struken | mamma | Det har ringt en karl som heter Rolf och frågat om du gillar korv. Vem är det? Varför har han mitt nummer? |
| 0:15 | sak | notis:morgon | Ali vill ha idag: Pall · +50 % |
| 0:15 | notis |  | Pall · +50 % |
| 0:19 | klar | notis:morgon | Ali vill ha idag: Pall · +50 % |
| 0:27 | väntar | rolf | Grillspaden ä ju KONST. Pengar i lådan. /Rolf |
| 0:30 | händelse | printStart | sak=pall |
| 0:36 | toast | guld | ✅ |
| 0:36 | händelse | printKlar | sak=pall n=4 |
| 0:36 | händelse | tagitUrPrint | sak=pall n=1 |
| 0:41 | väntar | ali | Kom in, kom in. Eller inte. Jag står här ändå. |
| 0:41 | sak | ali | Kom in, kom in. Eller inte. Jag står här ändå. |
| 0:41 | röst | ali | Kom in, kom in. Eller inte. Jag står här ändå. · SMÅPRAT |
| 0:42 | bubbla |  | Kom in, kom in. Eller inte. Jag står här ändå. |
| 0:42 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 0:42 | butiksbubbla | ali | Kunder, kunder. Ingen ingenjör. Förutom du kanske. |
| 0:43 | röst | ali | Kunder, kunder. Ingen ingenjör. Förutom du kanske. · STORY |
| 0:44 | händelse | salt | sak=pall n=1 |
| 0:44 | aliSalt | ali | 270 |
| 0:44 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 0:46 | klar | ali | Kom in, kom in. Eller inte. Jag står här ändå. |
| 0:56 | väntar | värld:TUUT! Tjena! | TUUT! Tjena! |
| 0:59 | väntar | värld:Mjau. | Mjau. |
| 1:00 | toast | skak | handen skakar: fullt |
| 1:03 | sak | värld:TUUT! Tjena! | TUUT! Tjena! |
| 1:03 | bubbla |  | TUUT! Tjena! |
| 1:04 | väntar | mamma | Det finns måsar vid soptippar! Dom tar mat. Och små hundar. Du är inte en liten hund men ändå. |
| 1:06 | klar | värld:TUUT! Tjena! | TUUT! Tjena! |
| 1:07 | händelse | printStart | sak=pall |
| 1:12 | toast | guld | ✅ |
| 1:12 | händelse | printKlar | sak=pall n=5 |
| 1:13 | händelse | tagitUrPrint | sak=pall n=1 |
| 1:14 | sak | värld:Mjau. | Mjau. |
| 1:14 | bubbla |  | Mjau. |
| 1:16 | klar | värld:Mjau. | Mjau. |
| 1:19 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 1:20 | händelse | salt | sak=pall n=1 |
| 1:20 | aliSalt | ali | 257 |
| 1:20 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 1:24 | sak | mamma | Det finns måsar vid soptippar! Dom tar mat. Och små hundar. Du är inte en liten hund men ändå. |
| 1:24 | sms | mamma | Det finns måsar vid soptippar! Dom tar mat. Och små hundar. Du är inte en liten hund men ändå. |
| 1:24 | sms-bubbla | mamma | Det finns måsar vid soptippar! Dom tar mat. Och små hundar. Du är inte en liten hund men ändå. |
| 1:24 | röst | mamma | Det finns måsar vid soptippar! Dom tar mat. Och små hundar. Du är inte en liten hund men ändå. · STORY |
| 1:31 | händelse | printStart | sak=pall |
| 1:32 | klar | mamma | Det finns måsar vid soptippar! Dom tar mat. Och små hundar. Du är inte en liten hund men ändå. |
| 1:36 | toast | guld | ✅ |
| 1:36 | händelse | printKlar | sak=pall n=6 |
| 1:36 | händelse | tagitUrPrint | sak=pall n=1 |
| 1:42 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 1:44 | händelse | salt | sak=pall n=1 |
| 1:44 | aliSalt | ali | 244 |
| 1:44 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 1:46 | väntar | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har börjat isolera. Och pall. Det är stort, Gunnar. |
| 1:46 | radio | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har börjat isolera. Och pall. Det är stort, Gunnar. |
| 1:46 | skratt | du | Radio-Kjelle |
| 1:46 | sak | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har börjat isolera. Och pall. Det är stort, Gunnar. |
| 1:46 | notis |  | 📻 Radio Tippen: Radio Tippen, Kjelle här. Skjulet vid tippen har börjat isolera. Och pall. Det är stort, Gunnar. |
| 1:46 | röst | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har börjat isolera. Och pall. Det är stort, Gunnar. · REAKTION |
| 1:54 | klar | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har börjat isolera. Och pall. Det är stort, Gunnar. |
| 1:58 | upplåst | skrivare | trim_skrivare3 |
| 1:58 | brott | UPPLÅST | trim_skrivare3 (skrivare 518 av 60) |
| 1:58 | händelse | upplast | id=trim_skrivare3 flask=skrivare |
| 1:58 | paket |  | tanke → sms |
| 1:58 | tanke | du | Fortare. Den kan gå ännu fortare. Jag hör det på den. |
| 1:58 | väntar | du | Fortare. Den kan gå ännu fortare. Jag hör det på den. |
| 1:58 | väntar | ali | Ali här. Sista skrivartrimmen. Efter den går den inte att göra bättre. Då får du bygga en större. |
| 1:58 | sak | du | Fortare. Den kan gå ännu fortare. Jag hör det på den. |
| 1:58 | notis | tanke | 💭 Fortare. Den kan gå ännu fortare. Jag hör det på den. |
| 1:58 | röst | du | Fortare. Den kan gå ännu fortare. Jag hör det på den. · STORY |
| 2:02 | klar | du | Fortare. Den kan gå ännu fortare. Jag hör det på den. |
| 2:03 | händelse | printStart | sak=pall |
| 2:08 | toast | guld | ✅ |
| 2:08 | händelse | printKlar | sak=pall n=7 |
| 2:09 | händelse | tagitUrPrint | sak=pall n=1 |
| 2:12 | sak | ali | Ali här. Sista skrivartrimmen. Efter den går den inte att göra bättre. Då får du bygga en större. |
| 2:12 | sms | ali | Ali här. Sista skrivartrimmen. Efter den går den inte att göra bättre. Då får du bygga en större. |
| 2:12 | sms-bubbla | ali | Ali här. Sista skrivartrimmen. Efter den går den inte att göra bättre. Då får du bygga en större. |
| 2:12 | röst | ali | Ali här. Sista skrivartrimmen. Efter den går den inte att göra bättre. Då får du bygga en större. · STORY |
| 2:15 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 2:16 | händelse | salt | sak=pall n=1 |
| 2:16 | aliSalt | ali | 231 |
| 2:16 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 2:20 | klar | ali | Ali här. Sista skrivartrimmen. Efter den går den inte att göra bättre. Då får du bygga en större. |
| 2:29 | skratt | du | falsk tuta |
| 2:38 | väntar | värld:TUUT! Tjena! | TUUT! Tjena! |
| 2:38 | paket |  | ge |
| 2:38 | väntar |  | (läget ändras) |
| 2:38 | sak | värld:TUUT! Tjena! | TUUT! Tjena! |
| 2:38 | bubbla |  | TUUT! Tjena! |
| 2:40 | paket |  | tanke |
| 2:40 | tanke | du | En tandborste. Den har varit på fel ställe. |
| 2:40 | väntar | du | En tandborste. Den har varit på fel ställe. |
| 2:40 | skratt | du | kvarnen spottar |
| 2:41 | klar | värld:TUUT! Tjena! | TUUT! Tjena! |
| 2:43 | sak |  | (läget ändras) |
| 2:43 | brev | rolf | rolf:3 |
| 2:43 | klar |  | (läget ändras) |
| 2:44 | skratt | du | däcket rullar iväg |
| 2:44 | paket |  | tanke |
| 2:44 | tanke | du | Däcket ville inte stanna. Jag förstår det. |
| 2:44 | väntar | du | Däcket ville inte stanna. Jag förstår det. |
| 2:44 | händelse | printStart | sak=pall |
| 2:47 | sak | du | Däcket ville inte stanna. Jag förstår det. |
| 2:47 | notis | tanke | 💭 Däcket ville inte stanna. Jag förstår det. |
| 2:47 | röst | du | Däcket ville inte stanna. Jag förstår det. · REAKTION |
| 2:50 | toast | guld | ✅ |
| 2:50 | händelse | printKlar | sak=pall n=8 |
| 2:50 | händelse | tagitUrPrint | sak=pall n=1 |
| 2:50 | klar | du | Däcket ville inte stanna. Jag förstår det. |
| 2:51 | skratt | du | falsk tuta |
| 2:56 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 2:58 | händelse | salt | sak=pall n=1 |
| 2:58 | aliSalt | ali | 220 |
| 2:58 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 3:00 | sak | du | En tandborste. Den har varit på fel ställe. |
| 3:00 | notis | tanke | 💭 En tandborste. Den har varit på fel ställe. |
| 3:00 | röst | du | En tandborste. Den har varit på fel ställe. · REAKTION |
| 3:03 | klar | du | En tandborste. Den har varit på fel ställe. |
| 3:12 | väntar | rolf | Tjo. Flaket ä så trist. En tomte mä luva o skägg, kan du göra en sån? /Rolf 🎅​ |
| 3:12 | paket |  | ge |
| 3:12 | väntar |  | (läget ändras) |
| 3:12 | sak | rolf | Tjo. Flaket ä så trist. En tomte mä luva o skägg, kan du göra en sån? /Rolf 🎅​ |
| 3:12 | lapp | Brev från Rolf | Tjo. Flaket ä så trist. En tomte mä luva o skägg, kan du göra en sån? /Rolf 🎅​ |
| 3:12 | röst | rolf | Tjo. Flaket ä så trist. En tomte mä luva o skägg, kan du göra en sån? /Rolf 🎅​ · STORY |
| 3:12 | händelse | malKlart | id=rolf3-brev del=Dag 5 – Tätt och mysigt nasta=rolf3-printa |
| 3:12 | bekräftelse | du | plats |
| 3:12 | väntar | du | Printa trädgårdstomte till flaket. |
| 3:12 | MÅL |  | Printa trädgårdstomte till flaket |
| 3:14 | målruta |  | Printa trädgårdstomte till flaket |
| 3:16 | händelse | printStart | sak=tomte |
| 3:16 | händelse | malKlart | id=rolf3-printa del=Dag 5 – Tätt och mysigt nasta=rolf3-ge |
| 3:16 | bekräftelse | du | plats |
| 3:16 | väntar | du | Ge Rolf trädgårdstomte till flaket. |
| 3:16 | MÅL |  | Ge Rolf trädgårdstomte till flaket |
| 3:18 | klar | rolf | Tjo. Flaket ä så trist. En tomte mä luva o skägg, kan du göra en sån? /Rolf 🎅​ |
| 3:18 | händelse | brevLast | id=rolf:3 |
| 3:18 | målruta |  | Ge Rolf trädgårdstomte till flaket |
| 3:20 | kvittens-bock |  | ✓ Printa trädgårdstomte till flaket |
| 3:20 | struken | du | Printa trädgårdstomte till flaket. |
| 3:20 | sak | du | Ge Rolf trädgårdstomte till flaket. |
| 3:20 | pil |  | Ge Rolf trädgårdstomte till flaket |
| 3:20 | röst | du | Ge Rolf trädgårdstomte till flaket. · MÅL |
| 3:21 | toast | guld | ✅ |
| 3:21 | händelse | printKlar | sak=tomte n=1 |
| 3:21 | händelse | tagitUrPrint | sak=tomte n=1 |
| 3:23 | klar | du | Ge Rolf trädgårdstomte till flaket. |
| 3:25 | sak |  | (läget ändras) |
| 3:25 | klar |  | (läget ändras) |
| 3:27 | händelse | lagtIPostlada | sak=tomte rolf=3 jobb=false |
| 3:27 | händelse | malKlart | id=rolf3-ge del=Dag 5 – Tätt och mysigt nasta=n4-isolera-de-sista |
| 3:27 | bekräftelse | du | plats |
| 3:27 | väntar | du | Två väggar kvar i skjulet. Sen är det tätt. |
| 3:27 | målruta |  | Isolera de sista väggarna · 2/4 |
| 3:27 | MÅL |  | Isolera de sista väggarna · 2/4 |
| 3:27 | sak | du | Två väggar kvar i skjulet. Sen är det tätt. |
| 3:27 | pil |  | Isolera de sista väggarna · 2/4 |
| 3:27 | notis | tanke | 💭 Två väggar kvar i skjulet. Sen är det tätt. |
| 3:27 | röst | du | Två väggar kvar i skjulet. Sen är det tätt. · MÅL |
| 3:28 | nick |  | nick:53 |
| 3:31 | klar | du | Två väggar kvar i skjulet. Sen är det tätt. |
| 3:31 | kvittens-bock |  | ✓ Ge Rolf trädgårdstomte till flaket |
| 3:36 | händelse | printStart | sak=byggsats:vaggar |
| 3:40 | händelse | printKlar | sak=byggsats:vaggar n=1 |
| 3:40 | toast | guld | ✅ |
| 3:40 | händelse | tagitUrPrint | sak=byggsats:vaggar n=1 |
| 3:45 | väntar | info:guld | 🧱 Höger vägg klar. 1 kvar. |
| 3:45 | sak | info:guld | 🧱 Höger vägg klar. 1 kvar. |
| 3:45 | kvitto-visas | info:guld | 🧱 Höger vägg klar. 1 kvar. |
| 3:45 | toast | guld | 🧱 Höger vägg klar. 1 kvar. |
| 3:47 | klar | info:guld | 🧱 Höger vägg klar. 1 kvar. |
| 3:48 | väntar | bror | Pappa har en spellista på Youtube som heter "Sopbilar". 34 videor. Han säger att en Scania V8 är "ren musik". |
| 3:54 | händelse | printStart | sak=byggsats:vaggar |
| 3:58 | händelse | printKlar | sak=byggsats:vaggar n=1 |
| 3:58 | toast | guld | ✅ |
| 3:59 | händelse | tagitUrPrint | sak=byggsats:vaggar n=1 |
| 4:03 | väntar | info:guld | 🧱 Skjulet är tätt! |
| 4:03 | sak | info:guld | 🧱 Skjulet är tätt! |
| 4:03 | kvitto-visas | info:guld | 🧱 Skjulet är tätt! |
| 4:03 | toast | guld | 🧱 Skjulet är tätt! |
| 4:03 | händelse | malKlart | id=n4-isolera-de-sista del=Dag 5 – Tätt och mysigt nasta=dator |
| 4:03 | bekräftelse | du | plats |
| 4:03 | kvittens | du | Det är tätt, det är varmt. |
| 4:03 | väntar | du | Det är tätt, det är varmt. |
| 4:03 | väntar | du | Alis pappas dator. Med den kan jag sälja på nätet. |
| 4:03 | MÅL |  | Köp Alis pappas gamla dator |
| 4:05 | klar | info:guld | 🧱 Skjulet är tätt! |
| 4:05 | sak | du | Det är tätt, det är varmt. |
| 4:05 | röst | du | Det är tätt, det är varmt. · STORY |
| 4:05 | målruta |  | Köp Alis pappas gamla dator |
| 4:07 | klar | du | Det är tätt, det är varmt. |
| 4:08 | sak | du | Alis pappas dator. Med den kan jag sälja på nätet. |
| 4:08 | pil |  | Köp Alis pappas gamla dator |
| 4:08 | notis | tanke | 💭 Alis pappas dator. Med den kan jag sälja på nätet. |
| 4:08 | röst | du | Alis pappas dator. Med den kan jag sälja på nätet. · MÅL |
| 4:08 | nick |  | nick:54 |
| 4:12 | klar | du | Alis pappas dator. Med den kan jag sälja på nätet. |
| 4:18 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 4:19 | toast | guld | 🖥️ Datorn är min – den ska stå i skjulet |
| 4:19 | händelse | kopt | sak=webbdator |
| 4:19 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 4:19 | röst | ali | Pappas gamla dator. Den har ett modem. Det låter som en fax som gråter. Men du kommer ut på nätet. · STORY |
| 4:19 | butiksbubbla | ali | Pappas gamla dator. Den har ett modem. Det låter som en fax som gråter. Men du kommer ut på nätet. |
| 4:28 | händelse | printStart | sak=byggsats:webbdator |
| 4:28 | händelse | printKlar | sak=byggsats:webbdator n=1 |
| 4:28 | toast | guld | ✅ |
| 4:29 | händelse | tagitUrPrint | sak=byggsats:webbdator n=1 |
| 4:35 | händelse | placerat | sak=webbdator |
| 4:35 | paket |  | tanke |
| 4:35 | tanke | du | En webbshop. Från ett skjul. Med modem. Varför inte. |
| 4:35 | väntar | du | En webbshop. Från ett skjul. Med modem. Varför inte. |
| 4:35 | händelse | malKlart | id=dator del=Dag 5 – Tätt och mysigt nasta=lampskarm |
| 4:35 | bekräftelse | du | plats |
| 4:35 | väntar | du | En lampskärm. Folk betalar för ljus som ser fint ut. |
| 4:35 | MÅL |  | Printa en lampskärm att sälja |
| 4:35 | målruta |  | Printa en lampskärm att sälja |
| 4:36 | sak | du | En lampskärm. Folk betalar för ljus som ser fint ut. |
| 4:36 | pil |  | Printa en lampskärm att sälja |
| 4:36 | notis | tanke | 💭 En lampskärm. Folk betalar för ljus som ser fint ut. |
| 4:36 | röst | du | En lampskärm. Folk betalar för ljus som ser fint ut. · MÅL |
| 4:36 | nick |  | nick:55 |
| 4:39 | kvittens-bock |  | ✓ Ställ datorn i skjulet |
| 4:40 | klar | du | En lampskärm. Folk betalar för ljus som ser fint ut. |
| 4:41 | paket |  | tanke |
| 4:41 | tanke | du | Jaha, Rolf har hämtat en trädgårdstomte till flaket. |
| 4:41 | väntar | du | Jaha, Rolf har hämtat en trädgårdstomte till flaket. |
| 4:46 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 4:49 | sak | du | En webbshop. Från ett skjul. Med modem. Varför inte. |
| 4:49 | notis | tanke | 💭 En webbshop. Från ett skjul. Med modem. Varför inte. |
| 4:49 | röst | du | En webbshop. Från ett skjul. Med modem. Varför inte. · STORY |
| 4:53 | klar | du | En webbshop. Från ett skjul. Med modem. Varför inte. |
| 4:55 | händelse | printStart | sak=lampskarm |
| 5:01 | toast | guld | ✅ |
| 5:01 | händelse | printKlar | sak=lampskarm n=1 |
| 5:01 | händelse | malKlart | id=lampskarm del=Dag 5 – Tätt och mysigt nasta=mysigt |
| 5:01 | bekräftelse | du | plats |
| 5:01 | väntar | du | Skjulet ska bli mysigt på riktigt. Det är mitt hem nu. |
| 5:01 | målruta |  | Gör det mysigt · trivsel 104/130 |
| 5:01 | MÅL |  | Gör det mysigt · trivsel 104/130 |
| 5:01 | sak | du | Skjulet ska bli mysigt på riktigt. Det är mitt hem nu. |
| 5:01 | pil |  | Gör det mysigt · trivsel 104/130 |
| 5:01 | notis | tanke | 💭 Skjulet ska bli mysigt på riktigt. Det är mitt hem nu. |
| 5:01 | röst | du | Skjulet ska bli mysigt på riktigt. Det är mitt hem nu. · MÅL |
| 5:02 | händelse | tagitUrPrint | sak=lampskarm n=1 |
| 5:02 | nick |  | nick:56 |
| 5:03 | väntar | värld:TUUT TUUT! | TUUT TUUT! |
| 5:04 | väntar | info:fel | Göran snodde en lampskärm. |
| 5:04 | paket |  | tanke → tanke |
| 5:04 | tanke | du | HALLÅ! Den där måsen tog min grej! |
| 5:04 | väntar | du | HALLÅ! Den där måsen tog min grej! |
| 5:04 | tanke | du | Mamma hade rätt. Säg inget till henne. |
| 5:04 | väntar | du | Mamma hade rätt. Säg inget till henne. |
| 5:04 | paket |  | sms |
| 5:04 | väntar | rolf | Dä ä Göran. Han ä från 2014. Han tar int skräp, bara grejer som e fina. MVH ROLF |
| 5:05 | kvittens-bock |  | ✓ Printa en lampskärm att sälja |
| 5:06 | klar | du | Skjulet ska bli mysigt på riktigt. Det är mitt hem nu. |
| 5:06 | sak | info:fel | Göran snodde en lampskärm. |
| 5:06 | kvitto-visas | info:fel | Göran snodde en lampskärm. |
| 5:06 | toast | fel | Göran snodde en lampskärm. |
| 5:08 | klar | info:fel | Göran snodde en lampskärm. |
| 5:10 | struken | du | Jaha, Rolf har hämtat en trädgårdstomte till flaket. |
| 5:15 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 5:17 | struken | info:guld | 3D-modell köpt – printa fönster |
| 5:17 | händelse | kopt | sak=fonster |
| 5:17 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 5:18 | sak | värld:TUUT TUUT! | TUUT TUUT! |
| 5:18 | bubbla |  | TUUT TUUT! |
| 5:21 | klar | värld:TUUT TUUT! | TUUT TUUT! |
| 5:26 | händelse | printStart | sak=byggsats:fonster |
| 5:29 | toast | bra | Del 1 av 2 klar |
| 5:29 | sak | du | HALLÅ! Den där måsen tog min grej! |
| 5:29 | notis | tanke | 💭 HALLÅ! Den där måsen tog min grej! |
| 5:29 | röst | du | HALLÅ! Den där måsen tog min grej! · STORY |
| 5:32 | klar | du | HALLÅ! Den där måsen tog min grej! |
| 5:32 | händelse | printKlar | sak=byggsats:fonster n=1 |
| 5:32 | toast | guld | ✅ |
| 5:33 | händelse | tagitUrPrint | sak=byggsats:fonster n=1 |
| 5:33 | paket |  | sms |
| 5:33 | väntar | ali | Ali här. Fönster – printad. På riktigt. Jag har visat bilden för min fru tre gånger. |
| 5:41 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 5:43 | struken | info:guld | 3D-modell köpt – printa trägolv |
| 5:43 | händelse | kopt | sak=golv |
| 5:43 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 5:45 | sak | du | Mamma hade rätt. Säg inget till henne. |
| 5:45 | notis | tanke | 💭 Mamma hade rätt. Säg inget till henne. |
| 5:45 | röst | du | Mamma hade rätt. Säg inget till henne. · STORY |
| 5:48 | klar | du | Mamma hade rätt. Säg inget till henne. |
| 5:54 | väntar | foto | Göran. Tjuv. |
| 5:54 | paket |  | tanke |
| 5:54 | tanke | du | Okej, Göran. Nästa gång är jag beredd. |
| 5:54 | väntar | du | Okej, Göran. Nästa gång är jag beredd. |
| 5:54 | sak | foto | Göran. Tjuv. |
| 5:54 | foto | du | Göran. Tjuv. |
| 5:56 | väntar | bud | (tips) |
| 5:57 | klar | foto | Göran. Tjuv. |
| 5:59 | sak | bud | (tips) |
| 6:00 | klar | bud | (tips) |
| 6:02 | sak | du | Okej, Göran. Nästa gång är jag beredd. |
| 6:02 | notis | tanke | 💭 Okej, Göran. Nästa gång är jag beredd. |
| 6:02 | röst | du | Okej, Göran. Nästa gång är jag beredd. · STORY |
| 6:06 | klar | du | Okej, Göran. Nästa gång är jag beredd. |
| 6:07 | händelse | printStart | sak=byggsats:golv |
| 6:08 | meddelande | mamma | Jag läste om en man som bodde på en soptipp. Han blev attackerad av måsar. Finns det måsar där? |
| 6:09 | röst | mamma | Jag läste om en man som bodde på en soptipp. Han blev attackerad av måsar. Finns det måsar där? · STORY |
| 6:20 | paket |  | sms |
| 6:20 | väntar | mamma | En katt? Är den vaccinerad? Rör den inte. Eller jo. Ge den en macka. |
| 6:30 | händelse | brevLast | id=m_masar |
| 6:32 | sak | ali | Ali här. Fönster – printad. På riktigt. Jag har visat bilden för min fru tre gånger. |
| 6:32 | sms | ali | Ali här. Fönster – printad. På riktigt. Jag har visat bilden för min fru tre gånger. |
| 6:32 | sms-bubbla | ali | Ali här. Fönster – printad. På riktigt. Jag har visat bilden för min fru tre gånger. |
| 6:32 | röst | ali | Ali här. Fönster – printad. På riktigt. Jag har visat bilden för min fru tre gånger. · REAKTION |
| 6:32 | toast | bra | Del 1 av 3 klar |
| 6:36 | toast | bra | Del 2 av 3 klar |
| 6:39 | klar | ali | Ali här. Fönster – printad. På riktigt. Jag har visat bilden för min fru tre gånger. |
| 6:39 | händelse | printKlar | sak=byggsats:golv n=1 |
| 6:39 | toast | guld | ✅ |
| 6:40 | händelse | tagitUrPrint | sak=byggsats:golv n=1 |
| 6:45 | väntar | info:guld | Trägolv på plats! Trivsel +8 |
| 6:45 | sak | info:guld | Trägolv på plats! Trivsel +8 |
| 6:45 | kvitto-visas | info:guld | Trägolv på plats! Trivsel +8 |
| 6:45 | toast | guld | Trägolv på plats! Trivsel +8 |
| 6:47 | klar | info:guld | Trägolv på plats! Trivsel +8 |
| 6:52 | väntar | mamma | Sover du ordentligt? Du ser trött ut. Jag vet att jag inte kan se dig. Men jag vet. |
| 6:54 | händelse | printStart | sak=pall |
| 6:59 | skratt | du | falsk tuta |
| 6:59 | toast | guld | ✅ |
| 6:59 | händelse | printKlar | sak=pall n=9 |
| 6:59 | händelse | tagitUrPrint | sak=pall n=1 |
| 7:05 | händelse | placerat | sak=pall |
| 7:10 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 7:11 | struken | info:guld | 3D-modell köpt – printa taklampa med skärm |
| 7:11 | händelse | kopt | sak=taklampa |
| 7:11 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 7:17 | sak | mamma | En katt? Är den vaccinerad? Rör den inte. Eller jo. Ge den en macka. |
| 7:17 | sms | mamma | En katt? Är den vaccinerad? Rör den inte. Eller jo. Ge den en macka. |
| 7:17 | sms-bubbla | mamma | En katt? Är den vaccinerad? Rör den inte. Eller jo. Ge den en macka. |
| 7:17 | röst | mamma | En katt? Är den vaccinerad? Rör den inte. Eller jo. Ge den en macka. · STORY |
| 7:20 | händelse | printStart | sak=byggsats:taklampa |
| 7:22 | klar | mamma | En katt? Är den vaccinerad? Rör den inte. Eller jo. Ge den en macka. |
| 7:22 | händelse | printKlar | sak=byggsats:taklampa n=1 |
| 7:22 | toast | guld | ✅ |
| 7:23 | händelse | tagitUrPrint | sak=byggsats:taklampa n=1 |
| 7:27 | väntar | info:guld | Taklampa med skärm på plats! Trivsel +6 |
| 7:27 | sak | info:guld | Taklampa med skärm på plats! Trivsel +6 |
| 7:27 | kvitto-visas | info:guld | Taklampa med skärm på plats! Trivsel +6 |
| 7:27 | toast | guld | Taklampa med skärm på plats! Trivsel +6 |
| 7:29 | klar | info:guld | Taklampa med skärm på plats! Trivsel +6 |
| 7:31 | scenInfo | du | Lampan tänds |
| 7:40 | tanke | du | Det börjar kännas som ett hem. På riktigt. |
| 7:40 | notis | tanke | 💭 Det börjar kännas som ett hem. På riktigt. |
| 7:40 | röst | du | Det börjar kännas som ett hem. På riktigt. · REAKTION |
| 7:45 | händelse | malKlart | id=mysigt del=Dag 5 – Tätt och mysigt nasta=vind5 |
| 7:45 | bekräftelse | du | plats |
| 7:45 | lapp | 📔 Dagbok | Lampan lyser. Pappa ska visst komma förbi i morgon. |
| 7:45 | dagbokrad | du | Lampan lyser. Pappa ska visst komma förbi i morgon. |
| 7:45 | väntar | notis:Lampan lyser. Pappa ska visst komma förb | Lampan lyser. Pappa ska visst komma förbi i morgon. |
| 7:45 | väntar | du | En tredje vindsnurra på taket. Skrivare M drar mycket. |
| 7:45 | MÅL |  | Printa och sälj |
| 7:46 | sak | du | En tredje vindsnurra på taket. Skrivare M drar mycket. |
| 7:46 | målruta |  | Printa och sälj |
| 7:46 | pil |  | Printa och sälj |
| 7:46 | notis | tanke | 💭 En tredje vindsnurra på taket. Skrivare M drar mycket. |
| 7:46 | röst | du | En tredje vindsnurra på taket. Skrivare M drar mycket. · MÅL |
| 7:46 | väntar | rolf | Kajsa la en död mus på min kudde. De e kärlek. Hon får lax ikväll. /R |
| 7:51 | klar | du | En tredje vindsnurra på taket. Skrivare M drar mycket. |
| 7:52 | händelse | printStart | sak=pall |
| 7:53 | sak | notis:Lampan lyser. Pappa ska visst komma förb | Lampan lyser. Pappa ska visst komma förbi i morgon. |
| 7:53 | notis | dagbok | Lampan lyser. Pappa ska visst komma förbi i morgon. |
| 7:55 | klar | notis:Lampan lyser. Pappa ska visst komma förb | Lampan lyser. Pappa ska visst komma förbi i morgon. |
| 7:57 | toast | guld | ✅ |
| 7:57 | händelse | printKlar | sak=pall n=10 |
| 7:57 | händelse | tagitUrPrint | sak=pall n=1 |
| 8:03 | händelse | placerat | sak=pall |
| 8:05 | strömdipp | du | vindsnurra3 |
| 8:05 | paket |  | tanke |
| 8:05 | tanke | du | Tyst. Strömmen tog slut. Det behövs mer. |
| 8:05 | väntar | du | Tyst. Strömmen tog slut. Det behövs mer. |
| 8:06 | sak | du | Tyst. Strömmen tog slut. Det behövs mer. |
| 8:06 | notis | tanke | 💭 Tyst. Strömmen tog slut. Det behövs mer. |
| 8:06 | röst | du | Tyst. Strömmen tog slut. Det behövs mer. · STORY |
| 8:09 | klar | du | Tyst. Strömmen tog slut. Det behövs mer. |
| 8:11 | händelse | printStart | sak=pall |
| 8:11 | toast | fel | Ingen ström – maskinerna drar mer än du får in. Bygg en solpanel |
| 8:11 | väntar | notis:Skrivare M: Ingen ström – maskinerna dra | Skrivare M: Ingen ström – maskinerna drar mer än du får in. Bygg en solpanel |
| 8:18 | sak | notis:Skrivare M: Ingen ström – maskinerna dra | Skrivare M: Ingen ström – maskinerna drar mer än du får in. Bygg en solpanel |
| 8:18 | notis | fel | Skrivare M: Ingen ström – maskinerna drar mer än du får in. Bygg en solpanel |
| 8:19 | upplåst | strom | vindsnurra3 |
| 8:19 | brott | UPPLÅST | vindsnurra3 (strom 45 av 15) |
| 8:19 | händelse | upplast | id=vindsnurra3 flask=strom |
| 8:19 | paket |  | tanke → sms |
| 8:19 | tanke | du | Skrivare M drar mer än två snurror ger. Jag trampar igen. |
| 8:19 | väntar | du | Skrivare M drar mer än två snurror ger. Jag trampar igen. |
| 8:19 | väntar | ali | Ali här. En tredje snurra. Mitt på taket. Sen är taket fullt. Sen får solen ta över. |
| 8:21 | klar | notis:Skrivare M: Ingen ström – maskinerna dra | Skrivare M: Ingen ström – maskinerna drar mer än du får in. Bygg en solpanel |
| 8:23 | sak | du | Skrivare M drar mer än två snurror ger. Jag trampar igen. |
| 8:23 | notis | tanke | 💭 Skrivare M drar mer än två snurror ger. Jag trampar igen. |
| 8:23 | röst | du | Skrivare M drar mer än två snurror ger. Jag trampar igen. · STORY |
| 8:28 | klar | du | Skrivare M drar mer än två snurror ger. Jag trampar igen. |
| 8:37 | sak | ali | Ali här. En tredje snurra. Mitt på taket. Sen är taket fullt. Sen får solen ta över. |
| 8:37 | sms | ali | Ali här. En tredje snurra. Mitt på taket. Sen är taket fullt. Sen får solen ta över. |
| 8:37 | sms-bubbla | ali | Ali här. En tredje snurra. Mitt på taket. Sen är taket fullt. Sen får solen ta över. |
| 8:37 | röst | ali | Ali här. En tredje snurra. Mitt på taket. Sen är taket fullt. Sen får solen ta över. · STORY |
| 8:44 | toast | guld | ✅ |
| 8:44 | händelse | printKlar | sak=pall n=11 |
| 8:44 | klar | ali | Ali här. En tredje snurra. Mitt på taket. Sen är taket fullt. Sen får solen ta över. |
| 8:44 | händelse | tagitUrPrint | sak=pall n=1 |
| 8:58 | webb | du | packade 1 pall |
| 9:13 | väntar | info:bra | 📦 Paketet till Majvor i Nässjö ligger i postlådan – Rolf tar det till posten |
| 9:13 | sak | info:bra | 📦 Paketet till Majvor i Nässjö ligger i postlådan – Rolf tar det till posten |
| 9:13 | kvitto-visas | info:bra | 📦 Paketet till Majvor i Nässjö ligger i postlådan – Rolf tar det till posten |
| 9:13 | toast | bra | 📦 Paketet till Majvor i Nässjö ligger i postlådan – Rolf tar det till posten |
| 9:15 | väntar | rolf | ÖJ! Ja kör dina paket till posten. Ja ska ändå förbi. Ja tar en tia för bensinen. Eller för Kajsas lax. Mest för laxen. /Rolf​ |
| 9:15 | skratt | du | falsk tuta |
| 9:15 | klar | info:bra | 📦 Paketet till Majvor i Nässjö ligger i postlådan – Rolf tar det till posten |
| 9:17 | händelse | printStart | sak=pall |
| 9:22 | toast | guld | ✅ |
| 9:22 | händelse | printKlar | sak=pall n=12 |
| 9:23 | händelse | tagitUrPrint | sak=pall n=1 |
| 9:28 | sak | rolf | ÖJ! Ja kör dina paket till posten. Ja ska ändå förbi. Ja tar en tia för bensinen. Eller för Kajsas lax. Mest för laxen. /Rolf​ |
| 9:28 | notis |  | ✉️ ÖJ! Ja kör dina paket till posten. Ja ska ändå förbi. Ja tar en tia för bensinen. Eller för Kajsas lax. Mest för laxen. /Rolf​ |
| 9:28 | röst | rolf | ÖJ! Ja kör dina paket till posten. Ja ska ändå förbi. Ja tar en tia för bensinen. Eller för Kajsas lax. Mest för laxen. /Rolf​ · STORY |
| 9:29 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 9:30 | händelse | salt | sak=pall n=1 |
| 9:30 | aliSalt | ali | 209 |
| 9:30 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 9:31 | händelse | salt | sak=byggsats:webbdator n=1 |
| 9:31 | aliSalt | ali | 20 |
| 9:31 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 9:32 | väntar | bror | Pappa har en spellista på Youtube som heter "Sopbilar". 34 videor. Han säger att en Scania V8 är "ren musik". |
| 9:39 | klar | rolf | ÖJ! Ja kör dina paket till posten. Ja ska ändå förbi. Ja tar en tia för bensinen. Eller för Kajsas lax. Mest för laxen. /Rolf​ |
| 9:41 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 9:42 | struken | info:guld | 3D-modell köpt – printa vindsnurra till skjultaket |
| 9:42 | händelse | kopt | sak=vindsnurra |
| 9:42 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 9:51 | händelse | printStart | sak=byggsats:vindsnurra |
| 9:55 | händelse | printKlar | sak=byggsats:vindsnurra n=1 |
| 9:55 | toast | guld | ✅ |
| 9:55 | struken | info:guld | 🌬️ Vindsnurran ska upp på skjulets tak. |
| 9:55 | händelse | tagitUrPrint | sak=byggsats:vindsnurra n=1 |
| 10:01 | händelse | placerat | sak=vindsnurra |
| 10:01 | struken | info:guld | 🌬️ Vindsnurran sitter på taket – den trampar cykeln åt mig när det blåser |
| 10:01 | monterat | du | byggsats:vindsnurra |
| 10:01 | händelse | monterat | sak=vindsnurra |
| 10:01 | händelse | malKlart | id=vind5 del=Dag 5 – Tätt och mysigt nasta=sov5 |
| 10:01 | paket |  | lapp |
| 10:01 | kvallsrad | du | Nu vet en mås att jag bor HÄR. Pengarna är borta. Med en mås. |
| 10:01 | bekräftelse | du | plats |
| 10:01 | paket |  | sms |
| 10:01 | väntar | mamma | Pappa kommer förbi i morgon. Han säger inget men han vill. ❤️ |
| 10:01 | paket |  | sms |
| 10:01 | väntar | mamma | Pappa och jag har lagt undan lite. 1 000 kr. Till något fint i ditt hus. Inte till chips. ❤️ /Mamma |
| 10:01 | målruta |  | Klart för idag – sov när du vill |
| 10:01 | MÅL |  | Klart för idag – sov när du vill |
| 10:05 | kvittens-bock |  | ✓ Sätt en tredje vindsnurra på taket |
| 10:06 | röst | mamma | Haha, träplankor? · STORY |
| 10:09 | röst | mamma | Vad är det för skit? Du har ju inte ens tapeter på väggarna. · STORY |
| 10:13 | röst | mamma | Och var är badrummet? Du duschar väl? · STORY |
| 10:16 | röst | mamma | Pappa säger "aha, vad lugnt då". Pappa säger det om allt. · STORY |
| 10:19 | röst | mamma | …men fönstret var fint. Det kommer in ljus i alla fall. ❤️ · STORY |
| 10:25 | morgonkort | 📕 Kapitel 2: Ett riktigt hem | 📕 Kapitel 2: Ett riktigt hem · Mamma är inte imponerad. Än. Nästa mål: tapeter , en egen gamingbod med RGB, gamer-inredning – och en jacuzzi . Visa henne. Ali har nya ritningar – och ♾️ trimningar som aldrig tar slut. |
| 10:26 | väntar | notis:🌇 Klockan är 21. Ali slår igen luckan.  | 🌇 Klockan är 21. Ali slår igen luckan. Dagens jobb är klart – gå in i skjulet och sov i sängen. |
| 10:34 | tanke | du | Det här är nog vad folk kallar att må bra. Konstigt. |
| 10:34 | väntar | du | Det här är nog vad folk kallar att må bra. Konstigt. |
| 10:36 | väntar | notis:📔 Prestation: Ett hem att bo i · +3 res | 📔 Prestation: Ett hem att bo i · +3 respekt |
| 10:39 | sak | du | (nytt mål i rutan) |
| 10:39 | pil |  | Klart för idag – sov när du vill |
| 10:40 | klar | du | (nytt mål i rutan) |
| 10:42 | sak | du | Det här är nog vad folk kallar att må bra. Konstigt. |
| 10:42 | notis | tanke | 💭 Det här är nog vad folk kallar att må bra. Konstigt. |
| 10:42 | röst | du | Det här är nog vad folk kallar att må bra. Konstigt. · REAKTION |
| 10:46 | klar | du | Det här är nog vad folk kallar att må bra. Konstigt. |
| 10:47 | struken | mamma | Sover du ordentligt? Du ser trött ut. Jag vet att jag inte kan se dig. Men jag vet. |
| 10:49 | webbBetalt | du | 220 |
| 10:49 | nattkort | du | 🌙 17 dagar kvar. God natt. zzz… Nu vet en mås att jag bor HÄR. Pengarna är borta. Med en mås. DAGENS PRINTAR Pall × 9 Trädgårdstomte till flaket × 1 Lampskärm |

<details><summary>Botens handlingar dag 5</summary>

- 0:00 — dag 5 börjar — (2286 kr)
- 0:07 popup: "FORTSÄTT" (2286 kr)
- 0:21 gå till Rolfs postlåda (28 m) (2286 kr)
- 0:27 panel: "Rolfs postlåda
Det här låg i l" (2536 kr)
- 0:27 tjänar pengar till väntar på sopbilen (BO): 2536/2596 kr → printar pall (270 kr) (2536 kr)
- 0:29 gå till skrivaren (8 m) (2536 kr)
- 0:30 printar Pall (2536 kr)
- 0:37 tar ut 1 st ur skrivaren (2536 kr)
- 0:42 gå till Ali (26 m) (2536 kr)
- 0:42 öppnar Alis butik – sälja (2536 kr)
- 0:44 säljer hos Ali: +270 kr (2806 kr)
- 0:48 tjänar pengar till väntar på sopbilen (BO): 2806/2866 kr → printar pall (257 kr) (2806 kr)
- 1:00 plockar 3 skräp på tippen (bär max 16) (2806 kr)
- 1:03 gå till kvarnen (11 m) (2806 kr)
- 1:06 gå till skrivaren (5 m) (2806 kr)
- 1:07 printar Pall (2806 kr)
- 1:13 tar ut 1 st ur skrivaren (2806 kr)
- 1:19 gå till Ali (27 m) (2806 kr)
- 1:19 öppnar Alis butik – sälja (2806 kr)
- 1:21 säljer hos Ali: +257 kr (3063 kr)
- 1:24 tjänar pengar till väntar på sopbilen (BO): 3063/3123 kr → printar pall (244 kr) (3063 kr)
- 1:29 gå till skrivaren (24 m) (3063 kr)
- 1:31 printar Pall (3063 kr)
- 1:37 tar ut 1 st ur skrivaren (3063 kr)
- 1:42 gå till Ali (24 m) (3063 kr)
- 1:42 öppnar Alis butik – sälja (3063 kr)
- 1:44 säljer hos Ali: +244 kr (3307 kr)
- 1:56 tjänar pengar till väntar på sopbilen (BO): 3307/3367 kr → printar pall (231 kr) (3307 kr)
- 2:02 gå till skrivaren (24 m) (3307 kr)
- 2:03 printar Pall (3307 kr)
- 2:09 tar ut 1 st ur skrivaren (3307 kr)
- 2:15 gå till Ali (24 m) (3307 kr)
- 2:15 öppnar Alis butik – sälja (3307 kr)
- 2:16 säljer hos Ali: +231 kr (3538 kr)
- 2:22 tjänar pengar till väntar på sopbilen (BO): 3538/3598 kr → printar pall (220 kr) (3538 kr)
- 2:34 plockar 4 skräp på tippen (bär max 16) (3538 kr)
- 2:37 gå till kvarnen (13 m) (3538 kr)
- 2:43 gå till skrivaren (5 m) (3538 kr)
- 2:44 printar Pall (3538 kr)
- 2:50 tar ut 1 st ur skrivaren (3538 kr)
- 2:56 gå till Ali (26 m) (3538 kr)
- 2:56 öppnar Alis butik – sälja (3538 kr)
- 2:58 säljer hos Ali: +220 kr (3758 kr)
- 3:12 gå till Rolfs postlåda (31 m) (3758 kr)
- 3:14 gå till skrivaren (8 m) (3758 kr)
- 3:16 printar Trädgårdstomte till flaket (3758 kr)
- 3:22 tar ut 1 st ur skrivaren (3758 kr)
- 3:25 valj tomte: true, vald tomte, post {"l":null,"tr":null,"tm":[]}, nummer false (3758 kr)
- 3:27 gå till Rolfs postlåda (8 m) (3758 kr)
- 3:34 gå till skrivaren (8 m) (3758 kr)
- 3:36 printar Isolerskiva (vägg) (3758 kr)
- 3:41 tar ut 1 st ur skrivaren (3758 kr)
- 3:45 gå till skjulet (hoger) (19 m) (3758 kr)
- 3:53 gå till skrivaren (17 m) (3758 kr)
- 3:54 printar Isolerskiva (vägg) (3758 kr)
- 3:59 tar ut 1 st ur skrivaren (3758 kr)
- 4:03 gå till skjulet (fram) (17 m) (3758 kr)
- 4:18 gå till Ali (20 m) (3758 kr)
- 4:18 öppnar Alis butik – köpa alis pappas gamla dator (3758 kr)
- 4:20 köper webbdator för 300 kr (3458 kr)
- 4:27 gå till skrivaren (24 m) (3458 kr)
- 4:28 printar Alis pappas gamla dator (3458 kr)
- 4:30 tar ut 1 st ur skrivaren (3458 kr)
- 4:34 gå till platsen för alis pappas gamla dator (21 m) (3458 kr)
- 4:35 ställer ut alis pappas gamla dator (3458 kr)
- 4:46 gå till Ali (16 m) (3458 kr)
- 4:46 öppnar Alis butik – köpa receptet lampskärm (3458 kr)
- 4:47 Ali har inte lampskarm (3458 kr)
- 4:53 gå till skrivaren (24 m) (3458 kr)
- 4:55 printar Lampskärm (3458 kr)
- 5:02 tar ut 1 st ur skrivaren (3458 kr)
- 5:15 gå till Ali (24 m) (3458 kr)
- 5:15 öppnar Alis butik – köpa fönster (3458 kr)
- 5:18 köper fonster för 90 kr (3368 kr)
- 5:24 gå till skrivaren (24 m) (3368 kr)
- 5:26 printar Fönster (2 delar) (3368 kr)
- 5:34 tar ut 1 st ur skrivaren (3368 kr)
- 5:37 gå till skjulet (18 m) (3368 kr)
- 5:37 sätter ett fönster (3368 kr)
- 5:41 gå till Ali (20 m) (3368 kr)
- 5:41 öppnar Alis butik – köpa trägolv (3368 kr)
- 5:44 köper golv för 140 kr (3228 kr)
- 5:56 plockar 3 skräp på tippen (bär max 16) (3228 kr)
- 5:59 gå till kvarnen (11 m) (3228 kr)
- 6:05 gå till skrivaren (5 m) (3228 kr)
- 6:07 printar Trägolv (3 delar) (3228 kr)
- 6:20 popup: "Bara en katt." (3228 kr)
- 6:30 popup: "Läst" (3228 kr)
- 6:41 tar ut 1 st ur skrivaren (3228 kr)
- 6:45 gå till skjulet (19 m) (3228 kr)
- 6:52 gå till skrivaren (17 m) (3228 kr)
- 6:54 printar Pall (3228 kr)
- 7:00 tar ut 1 st ur skrivaren (3228 kr)
- 7:04 gå till platsen för pall (18 m) (3228 kr)
- 7:05 ställer ut pall (3228 kr)
- 7:10 gå till Ali (15 m) (3228 kr)
- 7:10 öppnar Alis butik – köpa taklampa med skärm (3228 kr)
- 7:12 köper taklampa för 90 kr (3138 kr)
- 7:18 gå till skrivaren (24 m) (3138 kr)
- 7:20 printar Taklampa med skärm (3138 kr)
- 7:24 tar ut 1 st ur skrivaren (3138 kr)
- 7:27 gå till skjulet (17 m) (3138 kr)
- 7:44 plockar 5 skräp på tippen (bär max 16) (3138 kr)
- 7:46 gå till kvarnen (10 m) (3138 kr)
- 7:50 gå till skrivaren (5 m) (3138 kr)
- 7:52 printar Pall (3138 kr)
- 7:58 tar ut 1 st ur skrivaren (3138 kr)
- 8:02 gå till platsen för pall (22 m) (3138 kr)
- 8:03 ställer ut pall (3138 kr)
- 8:09 gå till skrivaren (19 m) (3138 kr)
- 8:11 printar Pall (3138 kr)
- 8:11 gå till cykeln (3 m) (3138 kr)
- 8:45 tar ut 1 st ur skrivaren (3138 kr)
- 8:49 gå till datorn (21 m) (3138 kr)
- 8:57 panel: "Webbshopen · Soptippsvägen 1
B" (3138 kr)
- 9:07 panel: "Webbshopen · Soptippsvägen 1
B" (3138 kr)
- 9:13 gå till Rolfs postlåda (paket) (29 m) (3138 kr)
- 9:14 webbshop: 1 paket i postlådan (3138 kr)
- 9:14 tjänar pengar till väntar på flaskhalsen för vindsnurra3: 3138/3178 kr → printar pall (209 kr) (3138 kr)
- 9:16 gå till skrivaren (8 m) (3138 kr)
- 9:17 printar Pall (3138 kr)
- 9:23 tar ut 1 st ur skrivaren (3138 kr)
- 9:29 gå till Ali (26 m) (3138 kr)
- 9:29 öppnar Alis butik – sälja (3138 kr)
- 9:31 säljer hos Ali: +229 kr (3367 kr)
- 9:41 öppnar Alis butik – köpa vindsnurra till skjultaket (3367 kr)
- 9:43 köper vindsnurra för 133 kr (3234 kr)
- 9:49 gå till skrivaren (24 m) (3234 kr)
- 9:51 printar Vindsnurra till skjultaket (3234 kr)
- 9:56 tar ut 1 st ur skrivaren (3234 kr)
- 10:01 gå till sätt vindsnurran på taket (18 m) (3234 kr)
- 10:25 telefonscen: "Okej. Kapitel 2 då. 😤" (4234 kr)
- 10:34 kort: "Kör!" (4234 kr)

</details>

## Dag 6

| Tid | Källa | Vem | Text |
|---|---|---|---|
| 10:49 | vara | ali | kruka |
| 10:49 | händelse | malKlart | id=sov5 del=Dag 5 – Tätt och mysigt nasta=pappa6 |
| 10:49 | bekräftelse | du | plats |
| 10:49 | MÅL |  | Pappa kommer förbi idag |

<details><summary>Botens handlingar dag 6</summary>

- 0:00 — dag 6 börjar — (4454 kr)

</details>
