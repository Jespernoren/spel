# Simulering kapitel 1 – körning 1

*Gjord 2026-11-22 00:22 med `verktyg/sim-kapitel1.mjs` + `verktyg/sim-bot.js` (punkt AX). Boten går 4,5 m/s, läser 15 tecken/s, trampar, vevar, plockar, printar, köper och säljer via spelets egna funktioner. Tiderna är speltid.*

## Sammanfattning

| Dag | Minuter | Väntan | Prints (totalt) | Kr vid sömn | Bär | Trivsel |
|---|---|---|---|---|---|---|
| 1 | 8.7 | 2 % | 13 | 80 | 6 | 18 |
| 2 | 10.2 | 2 % | 24 | 827 | 10 | 42 |
| 3 | 9.5 | 3 % | 34 | 812 | 16 | 78 |
| 4 | 13.2 | 2 % | 55 | 2539 | 16 | 96 |
| 5 | 12.3 | 3 % | 65 | 4258 | 16 | 136 |
| 6 | 0.0 | 0 % | 65 | 4258 | 16 | 136 |

## Flaskhalskartan (EE)

| Dag | bara | mala | trampa | strom | skrivare | inkomst | Upplåst |
|---|---|---|---|---|---|---|---|
| 1 | 5 | 8 | 20 | 15 | 60 | 11 | grip (bara, 5:51), kruka (inkomst, 6:33) |
| 2 | 4 | 3 | 8 | 10 | 252 | 0 | kvarnmotor (mala, 3:09, reserv), rullstall (skrivare, 5:50), trim_skrivare (skrivare, 7:35), vindsnurra (trampa, 7:59) |
| 3 | 1 | 3 | 14 | 43 | 320 | 0 | cykelbatteri (strom, 4:48), ryggkorg (bara, 5:26), skrivare2 (skrivare, 6:52) |
| 4 | 1 | 49 | 24 | 45 | 352 | 0 | trim_skrivare2 (skrivare, 2:22), matarband (bara, 8:24, reserv), vindsnurra2 (strom, 10:24) |
| 5 | 5 | 16 | 25 | 38 | 360 | 0 | trim_skrivare3 (skrivare, 3:03), vindsnurra3 (strom, 9:08) |
| 6 | 0 | 0 | 0 | 0 | 0 | 0 |  |

TIDIG: 0 · FAST: 0 · upplåst av reserven (målet väntade 3 min): 2

**SKRATT:** 49 roliga ögonblick på 54 min (9.1 per 10 min, mål minst 5)

**Köp:**

- dag 1 2:45 – gammalkvarn (30 kr)
- dag 1 6:15 – grip (50 kr)
- dag 1 6:41 – kruka (40 kr)
- dag 1 7:33 – sang (60 kr)
- dag 2 3:38 – kvarnmotor (50 kr)
- dag 2 8:21 – vindsnurra (133 kr)
- dag 2 9:03 – dorr (120 kr)
- dag 3 5:19 – cykelbatteri (30 kr)
- dag 3 5:47 – ryggkorg (120 kr)
- dag 3 6:20 – bord (120 kr)
- dag 3 7:13 – skrivare2 (500 kr)
- dag 3 8:49 – tak (250 kr)
- dag 4 8:41 – matarband (120 kr)
- dag 4 9:38 – pall (80 kr)
- dag 4 11:09 – vindsnurra (133 kr)
- dag 4 12:25 – vaggar (130 kr)
- dag 5 5:04 – webbdator (300 kr)
- dag 5 6:28 – fonster (90 kr)
- dag 5 7:11 – golv (140 kr)
- dag 5 8:01 – taklampa (90 kr)
- dag 5 9:45 – vindsnurra (133 kr)

## Storykedjan (kvittens → varför → nytt mål)

| Dag | Tid | Id | Kvittens | Varför | Nytt mål | Tid till målet |
|---|---|---|---|---|---|---|
| 1 | 0:29 | lasta | Tung. Den har storebror aldrig burit så långt. |  | Skrivaren ställer jag mot skräpberget. Min första verkstad. | 0.7 s |
| 1 | 1:36 | valjModell | Den piper. Den GÖR något. |  | En nyckelring till, så länge storebrors rulle räcker. | 3.4 s |
| 1 | 1:41 | trampa | Klar! Ta ut den innan den ändrar sig. |  | En nyckelring till, så länge storebrors rulle räcker. | 0.5 s |
| 1 | 3:20 | flaska | Det blir tråd! Riktig plasttråd. |  | Min egen tråd. Nu printar jag en nyckelring av den. | 0.8 s |
| 1 | 7:06 | krukaD1 | En kruka. Mamma skulle bli så stolt. Hon får inte veta. |  | Ali gillar krukor. Han sa det själv. | 0.9 s |
| 1 | 8:27 | printSang | En säng. Jag printade en SÄNG. |  | Sängen ska in i skjulet. Sen sover jag. | 0.3 s |
| 2 | 8:45 | vindsnurra | Den snurrar! Långsamt. Men den snurrar. |  | Det drar från dörrhålet. En dörr kan jag printa. | 0.6 s |
| 3 | 5:26 | kopBatteri | Nu printar den klart även när jag vilar benen. |  | Jag springer för mycket. Med en ryggkorg bär jag tio saker. | 0.7 s |
| 4 | 9:17 | sophallare | Nu kan jag tömma hela kärran på en gång. |  | Jag behöver något att sitta på. En pall. Lagom ambitiöst. | 0.6 s |
| 5 | 4:43 | n4-isolera-de-sista | Det är tätt, det är varmt. |  | Alis pappas dator. Med den kan jag sälja på nätet. | 0.4 s |

## Hur länge nya mål väntade (från att förra målet blev klart till att det nya syntes i målrutan)

Snitt 2.2 s · max 13.0 s · över 4 s: 4 · över 8 s: 4 av 58

## Flaggor (31)

- **UPPREPNING** dag 4 9:37: Bra val. Folk köper sånt. Jag vet inte varför. (CT)
- **LUGN** dag 2 0:08: 0.0 s efter BÖRJA DAGEN: [lapp] "Första natten i en riktig säng. Jag printade den själv."
- **KROCK** dag 1 0:18: 3.1 s mellan [lapp] "Spikade ihop en skylt av bräder från skräpberget: Soptippsvä" och [notis] "💭 Storebrors skrivare står kvar på cykeln vid vägen. Den sk"
- **KROCK** dag 1 3:23: 0.7 s mellan [notis] "Kvarnen funkar. Soptippen är en gruva." och [notis] "💭 Min egen tråd. Nu printar jag en nyckelring av den."
- **KROCK** dag 2 1:04: 0.1 s mellan [lapp] "Sopbilen tippade en ny last. Allt det skräpet – och grinden " och [notis] "En stor bil tippade en ny last. Allt det skräpet – och grind"
- **KROCK** dag 4 11:27: 0.2 s mellan [lapp] "Slut på trampandet. Nästan." och [notis] "💭 Det drar genom väggarna. Isolering, och sen blir det varm"
- **KROCK** dag 5 8:36: 2.2 s mellan [lapp] "Lampan lyser. Pappa ska visst komma förbi i morgon." och [notis] "💭 En tredje vindsnurra på taket. Skrivare M drar mycket."
- **SEN** dag 1 7:59: 80.5 s efter händelsen: ali: "Ali här. Jag såg Skräpgrip på avstånd. Ett streck blev lite snett. Mit"
- **SEN** dag 1 8:20: 14.7 s efter händelsen: notis:Storebrors skrivare: Slut på tråd – mal : "Storebrors skrivare: Slut på tråd – mal mer så fortsätter den"
- **SEN** dag 2 0:28: 18.6 s efter händelsen: notis:Första natten i en riktig säng. Jag prin: "Första natten i en riktig säng. Jag printade den själv."
- **SEN** dag 2 5:01: 63.5 s efter händelsen: ali: "Ali här. Ännu en ritning som blev på riktigt: Kvarnmotor. Semesterkass"
- **SEN** dag 3 3:57: 15.4 s efter händelsen: du: "En hel kanot. Kvarnen skulle äta upp sig själv."
- **SEN** dag 3 6:01: 19.1 s efter händelsen: värld:TUUT! Hej grannen!: "TUUT! Hej grannen!"
- **SEN** dag 3 6:31: 19.2 s efter händelsen: ali: "Ali här. Du printade Ryggkorg från min ritning. Och det FUNKAR? Jag ha"
- **SEN** dag 5 10:57: 18.3 s efter händelsen: du: "Inte en enda frusen tå. Rekord."
- **PAUS** dag 1 0:29: 1.4 s paus före "Tung. Den har storebror aldrig burit så långt."
- **PAUS** dag 1 1:39: 0.0 s paus före "Den piper. Den GÖR något."
- **PAUS** dag 1 1:42: 0.0 s paus före "Klar! Ta ut den innan den ändrar sig."
- **PAUS** dag 1 3:20: 0.0 s paus före "Det blir tråd! Riktig plasttråd."
- **PAUS** dag 1 3:23: 0.0 s paus före "Kvarnen funkar. Soptippen är en gruva."
- **PAUS** dag 1 7:06: 0.8 s paus före "En kruka. Mamma skulle bli så stolt. Hon får inte "
- **PAUS** dag 2 4:29: 0.0 s paus före "Gården är STÄDAD, av mig, frivilligt. Mamma skulle"
- **PAUS** dag 2 8:36: 0.0 s paus före "🌬️ Vindsnurran ska upp på skjulets tak."
- **PAUS** dag 2 8:47: 0.0 s paus före "Den snurrar! Långsamt. Men den snurrar."
- **PAUS** dag 3 5:28: 0.0 s paus före "Nu printar den klart även när jag vilar benen."
- **PAUS** dag 4 9:19: 0.0 s paus före "Nu kan jag tömma hela kärran på en gång."
- **PAUS** dag 5 4:45: 0.0 s paus före "Det är tätt, det är varmt."
- **DUBBEL UPPMANING** dag 3 4:54: "trampa" på 2 ställen: pekrutan, notisen
- **TEMPO** dag 1 8:40: dag 1 tog 8.7 min (mål 10–12)
- **TEMPO** dag 3 9:30: dag 3 tog 9.5 min (mål 10–15)
- **TEMPO** dag 6 0:01: dag 6 tog 0.0 min (mål 10–15)

Sidfel: inga

## Dag 1

| Tid | Källa | Vem | Text |
|---|---|---|---|
| 0:00 | MÅL |  | Lasta av skrivaren |
| 0:00 | MÅL |  | Lasta av skrivaren |
| 0:01 | sak | bud | (tips) |
| 0:02 | väntar | du | Se så mycket skräp här är. Det är ju en guldgruva! |
| 0:02 | klar | bud | (tips) |
| 0:04 | sak | du | Se så mycket skräp här är. Det är ju en guldgruva! |
| 0:04 | röst | du | Se så mycket skräp här är. Det är ju en guldgruva! · STORY |
| 0:05 | väntar | info:info | ⏎ Enter – hoppa över |
| 0:09 | sak-del | du | Först borde jag spika upp en skylt, så att alla ser att jag bor HÄR. |
| 0:09 | röst | du | Först borde jag spika upp en skylt, så att alla ser att jag bor HÄR. · STORY |
| 0:15 | klar | du | Se så mycket skräp här är. Det är ju en guldgruva! |
| 0:15 | lapp | 📔 Dagbok | Spikade ihop en skylt av bräder från skräpberget: Soptippsvägen 1. Inte mycket för världen, men det är MITT. |
| 0:15 | dagbokrad | du | Spikade ihop en skylt av bräder från skräpberget: Soptippsvägen 1. Inte mycket för världen, men det är MITT. |
| 0:15 | väntar | notis:Spikade ihop en skylt av bräder från skr | Spikade ihop en skylt av bräder från skräpberget: Soptippsvägen 1. Inte mycket för världen, men det är MITT. |
| 0:15 | bekräftelse | du | Group |
| 0:15 | väntar | du | Storebrors skrivare står kvar på cykeln vid vägen. Den ska av. |
| 0:18 | sak | du | Storebrors skrivare står kvar på cykeln vid vägen. Den ska av. |
| 0:18 | målruta |  | Lasta av skrivaren |
| 0:18 | pil |  | Lasta av skrivaren |
| 0:18 | notis | tanke | 💭 Storebrors skrivare står kvar på cykeln vid vägen. Den ska av. |
| 0:18 | röst | du | Storebrors skrivare står kvar på cykeln vid vägen. Den ska av. · MÅL |
| 0:24 | klar | du | Storebrors skrivare står kvar på cykeln vid vägen. Den ska av. |
| 0:26 | sak | notis:Spikade ihop en skylt av bräder från skr | Spikade ihop en skylt av bräder från skräpberget: Soptippsvägen 1. Inte mycket för världen, men det är MITT. |
| 0:26 | notis | dagbok | Spikade ihop en skylt av bräder från skräpberget: Soptippsvägen 1. Inte mycket för världen, men det är MITT. |
| 0:28 | klar | notis:Spikade ihop en skylt av bräder från skr | Spikade ihop en skylt av bräder från skräpberget: Soptippsvägen 1. Inte mycket för världen, men det är MITT. |
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
| 1:12 | paket |  | tanke |
| 1:12 | tanke | du | Cykeln… och storebrors generator? |
| 1:12 | väntar | du | Cykeln… och storebrors generator? |
| 1:12 | sak | du | Cykeln… och storebrors generator? |
| 1:12 | kvitto-visas | du | Cykeln… och storebrors generator? |
| 1:12 | notis | tanke | 💭 Cykeln… och storebrors generator? |
| 1:12 | röst | du | Cykeln… och storebrors generator? · STORY |
| 1:12 | händelse | malKlart | id=strom del=Dag 1 – Kom igång nasta=bygg |
| 1:12 | bekräftelse | du | plats |
| 1:12 | väntar | du | Nu generatorn på cykeln. Den gör el när hjulet snurrar. |
| 1:12 | MÅL |  | Ställ cykel och generator |
| 1:14 | målruta |  | Ställ cykel och generator |
| 1:14 | klar | du | Cykeln… och storebrors generator? |
| 1:15 | händelse | placerat | sak=generator |
| 1:15 | duns | du | ställs ner |
| 1:15 | kvittens-bock |  | ✓ Skrivaren behöver ström |
| 1:17 | sak | du | Nu generatorn på cykeln. Den gör el när hjulet snurrar. |
| 1:17 | pil |  | Ställ cykel och generator |
| 1:17 | notis | tanke | 💭 Nu generatorn på cykeln. Den gör el när hjulet snurrar. |
| 1:17 | röst | du | Nu generatorn på cykeln. Den gör el när hjulet snurrar. · MÅL |
| 1:18 | ljud | utrustning | Cykeln i famnen |
| 1:18 | händelse | lyft | sak=cykel |
| 1:19 | paket |  | tanke |
| 1:19 | tanke | du | Cykeln ska stå vid skrivaren. |
| 1:19 | väntar | du | Cykeln ska stå vid skrivaren. |
| 1:22 | klar | du | Nu generatorn på cykeln. Den gör el när hjulet snurrar. |
| 1:24 | sak | du | Cykeln ska stå vid skrivaren. |
| 1:24 | notis | tanke | 💭 Cykeln ska stå vid skrivaren. |
| 1:24 | röst | du | Cykeln ska stå vid skrivaren. · REAKTION |
| 1:27 | klar | du | Cykeln ska stå vid skrivaren. |
| 1:31 | händelse | placerat | sak=cykel |
| 1:31 | duns | du | ställs ner |
| 1:33 | händelse | ombyggd | sak=cykel |
| 1:33 | händelse | malKlart | id=bygg del=Dag 1 – Kom igång nasta=valjModell |
| 1:33 | bekräftelse | du | plats |
| 1:33 | väntar | du | Strömmen finns. Nu ska skrivaren veta vad den ska göra, sen trampar jag. |
| 1:33 | målruta |  | Välj vad skrivaren ska printa |
| 1:33 | MÅL |  | Välj vad skrivaren ska printa |
| 1:33 | sak | du | Strömmen finns. Nu ska skrivaren veta vad den ska göra, sen trampar jag. |
| 1:33 | pil |  | Välj vad skrivaren ska printa |
| 1:33 | notis | tanke | 💭 Strömmen finns. Nu ska skrivaren veta vad den ska göra, sen trampar jag. |
| 1:33 | röst | du | Strömmen finns. Nu ska skrivaren veta vad den ska göra, sen trampar jag. · MÅL |
| 1:36 | händelse | printStart | sak=nyckelring |
| 1:36 | händelse | malKlart | id=valjModell del=Dag 1 – Kom igång nasta=trampa |
| 1:36 | bekräftelse | du | plats |
| 1:36 | kvittens | du | Den piper. Den GÖR något. |
| 1:36 | väntar | du | Den piper. Den GÖR något. |
| 1:36 | väntar | du | Nu behöver den ström. Trampa. |
| 1:36 | MÅL |  | Trampa cykeln |
| 1:38 | målruta |  | Trampa cykeln |
| 1:39 | klar | du | Strömmen finns. Nu ska skrivaren veta vad den ska göra, sen trampar jag. |
| 1:39 | sak | du | Den piper. Den GÖR något. |
| 1:39 | röst | du | Den piper. Den GÖR något. · STORY |
| 1:41 | händelse | printKlar | sak=nyckelring n=1 |
| 1:41 | händelse | malKlart | id=trampa del=Dag 1 – Kom igång nasta=rullSlut |
| 1:41 | bekräftelse | du | plats |
| 1:41 | kvittens | du | Klar! Ta ut den innan den ändrar sig. |
| 1:41 | väntar | du | Klar! Ta ut den innan den ändrar sig. |
| 1:41 | väntar | du | En nyckelring till, så länge storebrors rulle räcker. |
| 1:41 | MÅL |  | En nyckelring till |
| 1:42 | klar | du | Den piper. Den GÖR något. |
| 1:42 | sak | du | Klar! Ta ut den innan den ändrar sig. |
| 1:42 | röst | du | Klar! Ta ut den innan den ändrar sig. · STORY |
| 1:42 | målruta |  | En nyckelring till |
| 1:42 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 1:42 | paket |  | sms |
| 1:42 | väntar | bror | VA FAN?! Fick du igång den?? Jag försökte i typ ett år. Den bara pep. 😳 |
| 1:42 | skratt | bror | VA FAN?! Fick du igång den?? Jag försökt |
| 1:42 | paket |  | sms → ge |
| 1:42 | väntar | bror | Sälj den till Ali, han med affären mitt emot. Han köper gamla grejer. Han köpte min gamla mopedhjälm för 20 spänn. |
| 1:42 | väntar |  | (läget ändras) |
| 1:43 | väntar | foto | Första nyckelringen |
| 1:43 | paket |  | tanke |
| 1:43 | tanke | du | Jag gjorde den här. Av skräp. Det här kan funka. |
| 1:43 | väntar | du | Jag gjorde den här. Av skräp. Det här kan funka. |
| 1:45 | klar | du | Klar! Ta ut den innan den ändrar sig. |
| 1:45 | struken | du | Nu behöver den ström. Trampa. |
| 1:45 | sak | du | En nyckelring till, så länge storebrors rulle räcker. |
| 1:45 | pil |  | En nyckelring till |
| 1:45 | notis | tanke | 💭 En nyckelring till, så länge storebrors rulle räcker. |
| 1:45 | röst | du | En nyckelring till, så länge storebrors rulle räcker. · MÅL |
| 1:49 | klar | du | En nyckelring till, så länge storebrors rulle räcker. |
| 1:51 | sak | foto | Första nyckelringen |
| 1:51 | foto | du | Första nyckelringen |
| 1:54 | klar | foto | Första nyckelringen |
| 1:56 | sak |  | (läget ändras) |
| 1:56 | klar |  | (läget ändras) |
| 1:56 | händelse | printStart | sak=nyckelring |
| 2:00 | sak | du | Jag gjorde den här. Av skräp. Det här kan funka. |
| 2:00 | notis | tanke | 💭 Jag gjorde den här. Av skräp. Det här kan funka. |
| 2:00 | röst | du | Jag gjorde den här. Av skräp. Det här kan funka. · STORY |
| 2:04 | klar | du | Jag gjorde den här. Av skräp. Det här kan funka. |
| 2:08 | toast | guld | Nyckelring är klar – ta ut den |
| 2:08 | väntar | notis:Storebrors skrivare: Nyckelring är klar  | Storebrors skrivare: Nyckelring är klar – ta ut den |
| 2:08 | händelse | printKlar | sak=nyckelring n=2 |
| 2:08 | paket |  | tanke |
| 2:08 | tanke | du | Slut på storebrors rulle. Och här ligger ju plast överallt. Om jag bara kunde göra tråd av skräpet… Affären mitt emot kanske har något. |
| 2:08 | väntar | du | Slut på storebrors rulle. Och här ligger ju plast överallt. Om jag bara kunde göra tråd av skräpet… Affären mitt emot kanske har något. |
| 2:08 | händelse | malKlart | id=rullSlut del=Dag 1 – Kom igång nasta=saljTva |
| 2:08 | bekräftelse | du | plats |
| 2:08 | MÅL |  | Sälj nyckelringarna |
| 2:08 | sak | du | Slut på storebrors rulle. Och här ligger ju plast överallt. Om jag bara kunde göra tråd av skräpet… Affären mitt emot kanske har något. |
| 2:08 | kvitto-visas | du | Slut på storebrors rulle. Och här ligger ju plast överallt. Om jag bara kunde göra tråd av skräpet… Affären mitt emot kanske har något. |
| 2:08 | notis | tanke | 💭 Slut på storebrors rulle. Och här ligger ju plast överallt. Om jag bara kunde göra tråd av skräpet… Affären mitt emot kanske har något. |
| 2:08 | röst | du | Slut på storebrors rulle. Och här ligger ju plast överallt. Om jag bara kunde göra tråd av skräpet… Affären mitt emot kanske har något. · STORY |
| 2:10 | målruta |  | Sälj nyckelringarna |
| 2:12 | kvittens-bock |  | ✓ En nyckelring till |
| 2:19 | klar | du | Slut på storebrors rulle. Och här ligger ju plast överallt. Om jag bara kunde göra tråd av skräpet… Affären mitt emot kanske har något. |
| 2:19 | sak | du | (nytt mål i rutan) |
| 2:19 | pil |  | Sälj nyckelringarna |
| 2:20 | klar | du | (nytt mål i rutan) |
| 2:21 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 2:27 | struken | ali | Pappas gamla köttkvarn. Den har malt allt utom kött. Trettio kronor, så är den din. |
| 2:27 | händelse | dialog | id=aliForsta |
| 2:27 | röst | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. · STORY |
| 2:27 | butiksbubbla | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 2:28 | händelse | salt | sak=nyckelring n=2 |
| 2:28 | aliSalt | ali | 30 |
| 2:28 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 2:28 | händelse | dialog | id=aliKvarnErbjud |
| 2:28 | butiksbubbla | ali | Pappas gamla köttkvarn. Den har malt allt utom kött. Trettio kronor, så är den din. |
| 2:30 | väntar | ali | Pappas gamla köttkvarn. Den har malt allt utom kött. Trettio kronor, så är den din. |
| 2:30 | händelse | malKlart | id=saljTva del=Dag 1 – Kom igång nasta=aliKvarn |
| 2:30 | bekräftelse | du | plats |
| 2:30 | väntar | du | Ali har en gammal kvarn. Den gör tråd av skräp. |
| 2:30 | MÅL |  | Köp kvarnen |
| 2:30 | struken | du | Ali har en gammal kvarn. Den gör tråd av skräp. |
| 2:30 | sak | du | Ali har en gammal kvarn. Den gör tråd av skräp. |
| 2:30 | målruta |  | Köp kvarnen |
| 2:30 | pil |  | Köp kvarnen |
| 2:30 | notis | tanke | 💭 Ali har en gammal kvarn. Den gör tråd av skräp. |
| 2:30 | röst | du | Ali har en gammal kvarn. Den gör tråd av skräp. · MÅL |
| 2:34 | kvittens-bock |  | ✓ Sälj nyckelringarna |
| 2:34 | klar | du | Ali har en gammal kvarn. Den gör tråd av skräp. |
| 2:36 | struken | bror | Sälj den till Ali, han med affären mitt emot. Han köper gamla grejer. Han köpte min gamla mopedhjälm för 20 spänn. |
| 2:36 | struken | notis:Storebrors skrivare: Nyckelring är klar  | Storebrors skrivare: Nyckelring är klar – ta ut den |
| 2:36 | sak | ali | Pappas gamla köttkvarn. Den har malt allt utom kött. Trettio kronor, så är den din. |
| 2:36 | röst | ali | Pappas gamla köttkvarn. Den har malt allt utom kött. Trettio kronor, så är den din. · STORY |
| 2:42 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 2:42 | struken | ali | Pappas gamla köttkvarn. Den har malt allt utom kött. Trettio kronor, så är den din. |
| 2:43 | klar | ali | Pappas gamla köttkvarn. Den har malt allt utom kött. Trettio kronor, så är den din. |
| 2:44 | händelse | kopt | sak=gammalkvarn |
| 2:44 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 2:44 | händelse | dialog | id=aliKvarnKopt |
| 2:44 | röst | ali | Den är din. Pappa hade blivit glad. Han trodde aldrig att nån skulle vilja ha den. · STORY |
| 2:44 | butiksbubbla | ali | Den är din. Pappa hade blivit glad. Han trodde aldrig att nån skulle vilja ha den. |
| 2:45 | händelse | malKlart | id=aliKvarn del=Dag 1 – Kom igång nasta=kvarn |
| 2:45 | bekräftelse | du | plats |
| 2:45 | väntar | du | Kvarnen ska stå vid skrivaren, närmast skräpberget. |
| 2:45 | målruta |  | Ställ kvarnen |
| 2:45 | MÅL |  | Ställ kvarnen |
| 2:47 | sak | du | Kvarnen ska stå vid skrivaren, närmast skräpberget. |
| 2:47 | pil |  | Ställ kvarnen |
| 2:47 | notis | tanke | 💭 Kvarnen ska stå vid skrivaren, närmast skräpberget. |
| 2:47 | röst | du | Kvarnen ska stå vid skrivaren, närmast skräpberget. · MÅL |
| 2:48 | nick |  | nick:9 |
| 2:49 | kvittens-bock |  | ✓ Köp kvarnen |
| 2:52 | klar | du | Kvarnen ska stå vid skrivaren, närmast skräpberget. |
| 2:54 | struken | bror | VA FAN?! Fick du igång den?? Jag försökte i typ ett år. Den bara pep. 😳 |
| 2:54 | skratt | bror | VA FAN?! Fick du igång den?? Jag försökt |
| 3:00 | händelse | placerat | sak=kvarnen |
| 3:00 | duns | du | ställs ner |
| 3:00 | händelse | malKlart | id=kvarn del=Dag 1 – Kom igång nasta=flaska |
| 3:00 | bekräftelse | du | plats |
| 3:00 | väntar | du | Skräp i kvarnen, sen vevar jag. Då blir det tråd. |
| 3:00 | MÅL |  | Gör egen tråd |
| 3:00 | målruta |  | Gör egen tråd |
| 3:00 | sak | du | Skräp i kvarnen, sen vevar jag. Då blir det tråd. |
| 3:00 | pil |  | Gör egen tråd |
| 3:00 | notis | tanke | 💭 Skräp i kvarnen, sen vevar jag. Då blir det tråd. |
| 3:00 | röst | du | Skräp i kvarnen, sen vevar jag. Då blir det tråd. · MÅL |
| 3:00 | nick |  | nick:10 |
| 3:01 | hjälp | kontroll | Klicka och håll: Veva kvarnen |
| 3:04 | kvittens-bock |  | ✓ Ställ kvarnen |
| 3:04 | klar | du | Skräp i kvarnen, sen vevar jag. Då blir det tråd. |
| 3:18 | väntar | info:bra | 3 st i tratten – veva nu! |
| 3:18 | sak | info:bra | 3 st i tratten – veva nu! |
| 3:18 | kvitto-visas | info:bra | 3 st i tratten – veva nu! |
| 3:18 | toast | bra | 3 st i tratten – veva nu! |
| 3:20 | händelse | malKlart | id=flaska del=Dag 1 – Kom igång nasta=egenPrint |
| 3:20 | bekräftelse | du | plats |
| 3:20 | kvittens | du | Det blir tråd! Riktig plasttråd. |
| 3:20 | väntar | du | Det blir tråd! Riktig plasttråd. |
| 3:20 | väntar | du | Kvarnen funkar. Soptippen är en gruva. |
| 3:20 | väntar | du | Min egen tråd. Nu printar jag en nyckelring av den. |
| 3:20 | MÅL |  | Printa med egen tråd |
| 3:20 | klar | info:bra | 3 st i tratten – veva nu! |
| 3:20 | sak | du | Det blir tråd! Riktig plasttråd. |
| 3:20 | röst | du | Det blir tråd! Riktig plasttråd. · STORY |
| 3:22 | målruta |  | Printa med egen tråd |
| 3:23 | klar | du | Det blir tråd! Riktig plasttråd. |
| 3:23 | sak | du | Kvarnen funkar. Soptippen är en gruva. |
| 3:23 | kvitto-visas | du | Kvarnen funkar. Soptippen är en gruva. |
| 3:23 | lapp | 📔 Dagbok | Kvarnen funkar. Soptippen är en gruva. |
| 3:23 | dagbokrad | du | Kvarnen funkar. Soptippen är en gruva. |
| 3:23 | notis | dagbok | Kvarnen funkar. Soptippen är en gruva. |
| 3:23 | klar | du | Kvarnen funkar. Soptippen är en gruva. |
| 3:23 | sak | du | Min egen tråd. Nu printar jag en nyckelring av den. |
| 3:23 | pil |  | Printa med egen tråd |
| 3:23 | notis | tanke | 💭 Min egen tråd. Nu printar jag en nyckelring av den. |
| 3:23 | röst | du | Min egen tråd. Nu printar jag en nyckelring av den. · MÅL |
| 3:24 | nick |  | nick:11 |
| 3:28 | klar | du | Min egen tråd. Nu printar jag en nyckelring av den. |
| 3:32 | händelse | printStart | sak=nyckelring |
| 3:32 | toast | bra | 🔗 Slangen kopplad |
| 3:37 | toast | guld | ✅ |
| 3:37 | händelse | printKlar | sak=nyckelring n=3 |
| 3:37 | paket |  | tanke |
| 3:37 | tanke | du | En nyckelring av en gammal schampoflaska. Den luktar fortfarande päron. |
| 3:37 | väntar | du | En nyckelring av en gammal schampoflaska. Den luktar fortfarande päron. |
| 3:37 | skratt | du | egen tråd |
| 3:37 | händelse | malKlart | id=egenPrint del=Dag 1 – Kom igång nasta=salj |
| 3:37 | bekräftelse | du | plats |
| 3:37 | struken | du | En nyckelring av en gammal schampoflaska. Den luktar fortfarande päron. |
| 3:37 | väntar | du | Ali köper nog den här också. |
| 3:37 | MÅL |  | Sälj hos Ali |
| 3:37 | målruta |  | Sälj hos Ali |
| 3:38 | sak | du | Ali köper nog den här också. |
| 3:38 | pil |  | Sälj hos Ali |
| 3:38 | notis | tanke | 💭 Ali köper nog den här också. |
| 3:38 | röst | du | Ali köper nog den här också. · MÅL |
| 3:38 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 3:38 | nick |  | nick:12 |
| 3:40 | klar | du | Ali köper nog den här också. |
| 3:41 | kvittens-bock |  | ✓ Printa med egen tråd |
| 3:44 | händelse | printStart | sak=nyckelring |
| 3:45 | toast | guld | ✅ |
| 3:45 | händelse | printKlar | sak=nyckelring n=4 |
| 3:45 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 3:48 | händelse | printStart | sak=nyckelring |
| 3:49 | toast | guld | ✅ |
| 3:49 | händelse | printKlar | sak=nyckelring n=5 |
| 3:49 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 3:49 | väntar | kjelle | God morgon, det är Kjelle på Radio Tippen! Det har flyttat in någon i det gamla skjulet. Med en cykel och en skrivare. Spännande, Gunnar. |
| 3:49 | radio | kjelle | God morgon, det är Kjelle på Radio Tippen! Det har flyttat in någon i det gamla skjulet. Med en cykel och en skrivare. Spännande, Gunnar. |
| 3:49 | skratt | du | Radio-Kjelle |
| 3:49 | sak | kjelle | God morgon, det är Kjelle på Radio Tippen! Det har flyttat in någon i det gamla skjulet. Med en cykel och en skrivare. Spännande, Gunnar. |
| 3:49 | notis |  | 📻 Radio Tippen: God morgon, det är Kjelle på Radio Tippen! Det har flyttat in någon i det gamla skjulet. Med en cykel och en skrivare. Spännande, Gunnar. |
| 3:49 | röst | kjelle | God morgon, det är Kjelle på Radio Tippen! Det har flyttat in någon i det gamla skjulet. Med en cykel och en skrivare. Spännande, Gunnar. · REAKTION |
| 4:00 | tanke | du | Vem är Gunnar? |
| 4:00 | väntar | du | Vem är Gunnar? |
| 4:01 | klar | kjelle | God morgon, det är Kjelle på Radio Tippen! Det har flyttat in någon i det gamla skjulet. Med en cykel och en skrivare. Spännande, Gunnar. |
| 4:08 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 4:10 | händelse | salt | sak=nyckelring n=3 |
| 4:10 | paket |  | ali → ge |
| 4:10 | väntar | ali | Du får bonus! 20 kr extra. Säg inget till min fru. |
| 4:10 | väntar |  | (läget ändras) |
| 4:10 | aliSalt | ali | 45 |
| 4:10 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 4:10 | händelse | dialog | id=aliNyckelIgen |
| 4:10 | röst | ali | Nyckelringar igen? Folk tappar sina nycklar hela tiden. · STORY |
| 4:10 | butiksbubbla | ali | Nyckelringar igen? Folk tappar sina nycklar hela tiden. |
| 4:11 | händelse | malKlart | id=salj del=Dag 1 – Kom igång nasta=powerbank |
| 4:11 | bekräftelse | du | plats |
| 4:11 | paket |  | sms → ge |
| 4:11 | väntar | ali | Ali här. Glömde en sak. Kom tillbaka, jag har nåt åt dig. |
| 4:11 | väntar |  | (läget ändras) |
| 4:11 | MÅL |  | Gå till Ali |
| 4:12 | sak | ali | Du får bonus! 20 kr extra. Säg inget till min fru. |
| 4:12 | notis |  | Ali: ”Du får bonus! 20 kr extra. Säg inget till min fru.” |
| 4:12 | röst | ali | Du får bonus! 20 kr extra. Säg inget till min fru. · REAKTION |
| 4:13 | struken | du | Vem är Gunnar? |
| 4:13 | väntar | du | Gå till Ali. |
| 4:15 | målruta |  | Gå till Ali |
| 4:15 | kvittens-bock |  | ✓ Sälj hos Ali |
| 4:16 | klar | ali | Du får bonus! 20 kr extra. Säg inget till min fru. |
| 4:18 | sak | du | Gå till Ali. |
| 4:18 | pil |  | Gå till Ali |
| 4:18 | röst | du | Gå till Ali. · MÅL |
| 4:21 | klar | du | Gå till Ali. |
| 4:23 | sak |  | (läget ändras) |
| 4:23 | klar |  | (läget ändras) |
| 4:23 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 4:27 | sak | ali | Ali här. Glömde en sak. Kom tillbaka, jag har nåt åt dig. |
| 4:27 | sms | ali | Ali här. Glömde en sak. Kom tillbaka, jag har nåt åt dig. |
| 4:27 | händelse | dialog | id=aliPbKom |
| 4:27 | sms-bubbla | ali | Ali här. Glömde en sak. Kom tillbaka, jag har nåt åt dig. |
| 4:27 | röst | ali | Ali här. Glömde en sak. Kom tillbaka, jag har nåt åt dig. · STORY |
| 4:27 | hjälp | kontroll | Tab: Dina sms och dagboken |
| 4:32 | klar | ali | Ali här. Glömde en sak. Kom tillbaka, jag har nåt åt dig. |
| 4:32 | väntar | du | Ali har något åt mig. Jag går över vägen till affären. |
| 4:34 | sak |  | (läget ändras) |
| 4:34 | klar |  | (läget ändras) |
| 4:34 | paket | ali | ali → ge |
| 4:34 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 4:34 | händelse | dialog | id=aliPowerbank |
| 4:34 | röst | ali | Jag såg dig cykla. Det ser jobbigt ut. Ta den här. Bra kunder får bonus. · STORY |
| 4:34 | butiksbubbla | ali | Jag såg dig cykla. Det ser jobbigt ut. Ta den här. Bra kunder får bonus. |
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
| 4:48 | väntar | du | Köp en skräpgrip hos Ali. Den kostar femtio kronor. |
| 4:49 | målruta |  | Plocka skräp och mal det |
| 4:50 | kvittens-bock |  | ✓ Gå till Ali |
| 4:54 | klar | du | Nu sparas lite ström. En nyckelring, typ. Framtiden är här, och den sitter fast med eltejp. |
| 4:54 | sak | du | Köp en skräpgrip hos Ali. Den kostar femtio kronor. |
| 4:54 | pil |  | Plocka skräp och mal det |
| 4:54 | röst | du | Köp en skräpgrip hos Ali. Den kostar femtio kronor. · MÅL |
| 4:54 | nick |  | nick:14 |
| 4:58 | klar | du | Köp en skräpgrip hos Ali. Den kostar femtio kronor. |
| 5:00 | struken | du | Ali har något åt mig. Jag går över vägen till affären. |
| 5:00 | sak | ali | Ali här. Nyckelringen sålde direkt. Jag ville bli ingenjör en gång. Nu har jag låtit en AI rita en skräpgrip. Kom och titta. |
| 5:00 | sms | ali | Ali här. Nyckelringen sålde direkt. Jag ville bli ingenjör en gång. Nu har jag låtit en AI rita en skräpgrip. Kom och titta. |
| 5:00 | händelse | dialog | id=aliGripSms |
| 5:00 | sms-bubbla | ali | Ali här. Nyckelringen sålde direkt. Jag ville bli ingenjör en gång. Nu har jag låtit en AI rita en skräpgrip. Kom och titta. |
| 5:00 | röst | ali | Ali här. Nyckelringen sålde direkt. Jag ville bli ingenjör en gång. Nu har jag låtit en AI rita en skräpgrip. Kom och titta. · STORY |
| 5:02 | händelse | printStart | sak=nyckelring |
| 5:03 | toast | fel | Ingen ström – trampa cykeln |
| 5:03 | väntar | notis:Storebrors skrivare: Ingen ström – tramp | Storebrors skrivare: Ingen ström – trampa cykeln |
| 5:04 | toast | guld | ✅ |
| 5:04 | händelse | printKlar | sak=nyckelring n=6 |
| 5:04 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 5:06 | paket |  | tanke |
| 5:06 | tanke | du | Femtio kronor. Nu har jag råd med gripen. |
| 5:06 | väntar | du | Femtio kronor. Nu har jag råd med gripen. |
| 5:06 | händelse | printStart | sak=nyckelring |
| 5:07 | toast | guld | ✅ |
| 5:07 | händelse | printKlar | sak=nyckelring n=7 |
| 5:11 | klar | ali | Ali här. Nyckelringen sålde direkt. Jag ville bli ingenjör en gång. Nu har jag låtit en AI rita en skräpgrip. Kom och titta. |
| 5:11 | väntar | du | Med en skräpgrip slipper jag böja mig. Ali har en ritning. |
| 5:13 | sak | du | Femtio kronor. Nu har jag råd med gripen. |
| 5:13 | notis | tanke | 💭 Femtio kronor. Nu har jag råd med gripen. |
| 5:13 | röst | du | Femtio kronor. Nu har jag råd med gripen. · REAKTION |
| 5:16 | klar | du | Femtio kronor. Nu har jag råd med gripen. |
| 5:19 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 5:21 | händelse | printStart | sak=nyckelring |
| 5:22 | toast | guld | ✅ |
| 5:22 | händelse | printKlar | sak=nyckelring n=8 |
| 5:23 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 5:23 | struken | notis:Storebrors skrivare: Ingen ström – tramp | Storebrors skrivare: Ingen ström – trampa cykeln |
| 5:25 | sak | du | Med en skräpgrip slipper jag böja mig. Ali har en ritning. |
| 5:25 | röst | du | Med en skräpgrip slipper jag böja mig. Ali har en ritning. · STORY |
| 5:29 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 5:30 | klar | du | Med en skräpgrip slipper jag böja mig. Ali har en ritning. |
| 5:30 | händelse | salt | sak=nyckelring n=1 |
| 5:30 | aliSalt | ali | 15 |
| 5:30 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 5:31 | händelse | salt | sak=nyckelring n=1 |
| 5:31 | aliSalt | ali | 15 |
| 5:31 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 5:31 | händelse | salt | sak=nyckelring n=1 |
| 5:31 | aliSalt | ali | 15 |
| 5:31 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 5:39 | händelse | printStart | sak=nyckelring |
| 5:40 | toast | guld | ✅ |
| 5:40 | händelse | printKlar | sak=nyckelring n=9 |
| 5:45 | sak | mamma | Hur kunde du bara gå? Är du ok? Svara när jag ringer! |
| 5:45 | sms | mamma | Hur kunde du bara gå? Är du ok? Svara när jag ringer! |
| 5:45 | sms-bubbla | mamma | Hur kunde du bara gå? Är du ok? Svara när jag ringer! |
| 5:45 | röst | mamma | Hur kunde du bara gå? Är du ok? Svara när jag ringer! · STORY |
| 5:50 | klar | mamma | Hur kunde du bara gå? Är du ok? Svara när jag ringer! |
| 5:51 | upplåst | bara | grip |
| 5:51 | brott | UPPLÅST | grip (bara 3 av 3) |
| 5:51 | händelse | upplast | id=grip flask=bara |
| 5:51 | paket |  | tanke |
| 5:51 | tanke | du | Ett skräp i taget. Jag springer ihjäl mig. |
| 5:51 | väntar | du | Ett skräp i taget. Jag springer ihjäl mig. |
| 5:52 | väntar | bud | (tips) |
| 5:52 | sak | bud | (tips) |
| 5:52 | väntar | du | Jag har pengar nu. Hos Ali kan jag köpa uppgraderingar – bära mer eller printa snabbare. |
| 5:53 | klar | bud | (tips) |
| 5:54 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 5:55 | sak | du | Jag har pengar nu. Hos Ali kan jag köpa uppgraderingar – bära mer eller printa snabbare. |
| 5:55 | röst | du | Jag har pengar nu. Hos Ali kan jag köpa uppgraderingar – bära mer eller printa snabbare. · MÅL |
| 5:56 | händelse | printStart | sak=nyckelring |
| 5:57 | toast | guld | ✅ |
| 5:57 | händelse | printKlar | sak=nyckelring n=10 |
| 5:58 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 6:00 | händelse | printStart | sak=nyckelring |
| 6:02 | toast | guld | ✅ |
| 6:02 | händelse | printKlar | sak=nyckelring n=11 |
| 6:03 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 6:03 | klar | du | Jag har pengar nu. Hos Ali kan jag köpa uppgraderingar – bära mer eller printa snabbare. |
| 6:05 | sak | du | Ett skräp i taget. Jag springer ihjäl mig. |
| 6:05 | notis | tanke | 💭 Ett skräp i taget. Jag springer ihjäl mig. |
| 6:05 | röst | du | Ett skräp i taget. Jag springer ihjäl mig. · STORY |
| 6:08 | klar | du | Ett skräp i taget. Jag springer ihjäl mig. |
| 6:09 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 6:10 | händelse | salt | sak=nyckelring n=1 |
| 6:10 | aliSalt | ali | 15 |
| 6:10 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 6:10 | händelse | salt | sak=nyckelring n=1 |
| 6:10 | aliSalt | ali | 15 |
| 6:10 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 6:11 | händelse | salt | sak=nyckelring n=1 |
| 6:11 | aliSalt | ali | 15 |
| 6:11 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 6:13 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 6:14 | struken | info:guld | 3D-modell köpt – printa skräpgrip |
| 6:14 | händelse | kopt | sak=grip |
| 6:14 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 6:14 | händelse | dialog | id=aliForstaRitning |
| 6:14 | röst | ali | Bra val. Ritningen räcker till en skräpgrip. · STORY |
| 6:14 | butiksbubbla | ali | Bra val. Ritningen räcker till en skräpgrip. |
| 6:15 | händelse | malKlart | id=kopGrip del=Dag 1 – Kom igång nasta=printGrip |
| 6:15 | bekräftelse | du | plats |
| 6:15 | väntar | du | Min första 3D-modell! Jag printar inte bara saker – jag printar maskiner. |
| 6:15 | MÅL |  | Printa skräpgripen |
| 6:16 | sak | du | Min första 3D-modell! Jag printar inte bara saker – jag printar maskiner. |
| 6:16 | kvitto-visas | du | Min första 3D-modell! Jag printar inte bara saker – jag printar maskiner. |
| 6:16 | lapp | 📔 Dagbok | Min första 3D-modell! Jag printar inte bara saker – jag printar maskiner. |
| 6:16 | dagbokrad | du | Min första 3D-modell! Jag printar inte bara saker – jag printar maskiner. |
| 6:16 | notis | dagbok | Min första 3D-modell! Jag printar inte bara saker – jag printar maskiner. |
| 6:16 | klar | du | Min första 3D-modell! Jag printar inte bara saker – jag printar maskiner. |
| 6:16 | målruta |  | Printa skräpgripen |
| 6:17 | sak | du | (nytt mål i rutan) |
| 6:17 | pil |  | Printa skräpgripen |
| 6:17 | klar | du | (nytt mål i rutan) |
| 6:17 | nick |  | nick:15 |
| 6:26 | händelse | printStart | sak=byggsats:grip |
| 6:28 | händelse | printKlar | sak=byggsats:grip n=1 |
| 6:28 | toast | guld | ✅ |
| 6:29 | väntar | info:guld | Skräpgrip ska jag ha på mig. |
| 6:29 | händelse | tagitUrPrint | sak=byggsats:grip n=1 |
| 6:29 | paket |  | sms |
| 6:29 | väntar | ali | Ali här. Jag såg Skräpgrip på avstånd. Ett streck blev lite snett. Mitt fel. Vackert ändå. |
| 6:29 | sak | info:guld | Skräpgrip ska jag ha på mig. |
| 6:29 | kvitto-visas | info:guld | Skräpgrip ska jag ha på mig. |
| 6:29 | toast | guld | Skräpgrip ska jag ha på mig. |
| 6:31 | klar | info:guld | Skräpgrip ska jag ha på mig. |
| 6:33 | väntar | info:guld | 🦾 Skräpgripen sitter! Jag bär 6, siktar lättare och plockar när jag går nära. |
| 6:33 | tog på | du | byggsats:grip |
| 6:33 | händelse | monterat | sak=grip |
| 6:33 | sak | info:guld | 🦾 Skräpgripen sitter! Jag bär 6, siktar lättare och plockar när jag går nära. |
| 6:33 | kvitto-visas | info:guld | 🦾 Skräpgripen sitter! Jag bär 6, siktar lättare och plockar när jag går nära. |
| 6:33 | toast | guld | 🦾 Skräpgripen sitter! Jag bär 6, siktar lättare och plockar när jag går nära. |
| 6:33 | händelse | malKlart | id=printGrip del=Dag 1 – Kom igång nasta=krukaD1 |
| 6:33 | bekräftelse | du | plats |
| 6:33 | MÅL |  | Printa och sälj nyckelringar |
| 6:33 | upplåst | inkomst | kruka |
| 6:33 | brott | UPPLÅST | kruka (inkomst 11 av 6) |
| 6:33 | händelse | upplast | id=kruka flask=inkomst |
| 6:33 | paket |  | tanke → sms |
| 6:33 | tanke | du | Nyckelringar, nyckelringar. Ali kan inte vilja ha fler. |
| 6:33 | väntar | du | Nyckelringar, nyckelringar. Ali kan inte vilja ha fler. |
| 6:33 | väntar | ali | Prova en kruka. Folk köper krukor. Ingen vet varför. |
| 6:33 | skratt | ali | Prova en kruka. Folk köper krukor. Ingen |
| 6:35 | klar | info:guld | 🦾 Skräpgripen sitter! Jag bär 6, siktar lättare och plockar när jag går nära. |
| 6:35 | väntar | du | Köp krukreceptet. |
| 6:35 | målruta |  | Köp krukreceptet |
| 6:37 | kvittens-bock |  | ✓ Printa skräpgripen |
| 6:37 | sak | du | Köp krukreceptet. |
| 6:37 | pil |  | Köp krukreceptet |
| 6:37 | röst | du | Köp krukreceptet. · MÅL |
| 6:37 | nick |  | nick:16 |
| 6:38 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 6:39 | klar | du | Köp krukreceptet. |
| 6:40 | händelse | kopt | sak=kruka |
| 6:40 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 6:40 | händelse | dialog | id=aliKrukaRecept |
| 6:40 | röst | ali | Bra val. Folk köper sånt. Jag vet inte varför. · STORY |
| 6:40 | butiksbubbla | ali | Blomkruka? Bra val. Folk köper sånt. Jag vet inte varför. |
| 6:42 | sak | du | Nyckelringar, nyckelringar. Ali kan inte vilja ha fler. |
| 6:42 | notis | tanke | 💭 Nyckelringar, nyckelringar. Ali kan inte vilja ha fler. |
| 6:42 | röst | du | Nyckelringar, nyckelringar. Ali kan inte vilja ha fler. · STORY |
| 6:47 | klar | du | Nyckelringar, nyckelringar. Ali kan inte vilja ha fler. |
| 6:49 | sak | ali | Prova en kruka. Folk köper krukor. Ingen vet varför. |
| 6:49 | skratt | ali | Prova en kruka. Folk köper krukor. Ingen |
| 6:49 | sms | ali | Prova en kruka. Folk köper krukor. Ingen vet varför. |
| 6:49 | skratt | ali | Prova en kruka. Folk köper krukor. Ingen |
| 6:49 | händelse | dialog | id=aliKrukaSms |
| 6:49 | sms-bubbla | ali | Prova en kruka. Folk köper krukor. Ingen vet varför. |
| 6:49 | skratt | ali | Prova en kruka. Folk köper krukor. Ingen |
| 6:49 | röst | ali | Prova en kruka. Folk köper krukor. Ingen vet varför. · STORY |
| 6:53 | klar | ali | Prova en kruka. Folk köper krukor. Ingen vet varför. |
| 6:53 | skratt | ali | Prova en kruka. Folk köper krukor. Ingen |
| 6:53 | väntar | du | Ali vill ha krukor. Jag printar en blomkruka. |
| 7:01 | sak | du | Ali vill ha krukor. Jag printar en blomkruka. |
| 7:01 | röst | du | Ali vill ha krukor. Jag printar en blomkruka. · STORY |
| 7:01 | händelse | printStart | sak=kruka |
| 7:04 | toast | fel | Ingen ström – trampa cykeln |
| 7:05 | klar | du | Ali vill ha krukor. Jag printar en blomkruka. |
| 7:06 | toast | guld | ✅ |
| 7:06 | händelse | printKlar | sak=kruka n=1 |
| 7:06 | händelse | malKlart | id=krukaD1 del=Dag 1 – Kom igång nasta=saljKruka |
| 7:06 | bekräftelse | du | plats |
| 7:06 | kvittens | du | En kruka. Mamma skulle bli så stolt. Hon får inte veta. |
| 7:06 | väntar | du | En kruka. Mamma skulle bli så stolt. Hon får inte veta. |
| 7:06 | väntar | du | Ali gillar krukor. Han sa det själv. |
| 7:06 | MÅL |  | Sälj blomkrukan |
| 7:06 | sak | du | En kruka. Mamma skulle bli så stolt. Hon får inte veta. |
| 7:06 | röst | du | En kruka. Mamma skulle bli så stolt. Hon får inte veta. · STORY |
| 7:06 | målruta |  | Sälj blomkrukan |
| 7:06 | händelse | tagitUrPrint | sak=kruka n=1 |
| 7:10 | klar | du | En kruka. Mamma skulle bli så stolt. Hon får inte veta. |
| 7:11 | sak | du | Ali gillar krukor. Han sa det själv. |
| 7:11 | pil |  | Sälj blomkrukan |
| 7:11 | notis | tanke | 💭 Ali gillar krukor. Han sa det själv. |
| 7:11 | röst | du | Ali gillar krukor. Han sa det själv. · MÅL |
| 7:14 | klar | du | Ali gillar krukor. Han sa det själv. |
| 7:21 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 7:22 | händelse | salt | sak=kruka n=1 |
| 7:22 | aliSalt | ali | 70 |
| 7:22 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 7:23 | händelse | malKlart | id=saljKruka del=Dag 1 – Kom igång nasta=kopSang |
| 7:23 | bekräftelse | du | plats |
| 7:23 | väntar | du | Jag tänker inte sova på betongen i natt. Ali har en säng. Typ. |
| 7:23 | målruta |  | Köp sängen |
| 7:24 | MÅL |  | Köp sängen |
| 7:24 | paket |  | tanke |
| 7:24 | tanke | du | Det börjar bli mörkt. Jag kan inte sova på jorden. |
| 7:24 | väntar | du | Det börjar bli mörkt. Jag kan inte sova på jorden. |
| 7:24 | sak | du | Jag tänker inte sova på betongen i natt. Ali har en säng. Typ. |
| 7:24 | pil |  | Köp sängen |
| 7:24 | notis | tanke | 💭 Jag tänker inte sova på betongen i natt. Ali har en säng. Typ. |
| 7:24 | röst | du | Jag tänker inte sova på betongen i natt. Ali har en säng. Typ. · MÅL |
| 7:27 | kvittens-bock |  | ✓ Sälj blomkrukan |
| 7:29 | klar | du | Jag tänker inte sova på betongen i natt. Ali har en säng. Typ. |
| 7:31 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 7:32 | händelse | kopt | sak=sang |
| 7:32 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 7:32 | händelse | dialog | id=aliSang |
| 7:32 | röst | ali | Sov gott, min vän. · STORY |
| 7:32 | butiksbubbla | ali | Sov gott, min vän. |
| 7:34 | struken | du | Det börjar bli mörkt. Jag kan inte sova på jorden. |
| 7:34 | händelse | malKlart | id=kopSang del=Dag 1 – Kom igång nasta=printSang |
| 7:34 | bekräftelse | du | plats |
| 7:34 | väntar | du | En säng tar lång tid. Den är värd det. |
| 7:34 | målruta |  | Printa sängen |
| 7:34 | MÅL |  | Printa sängen |
| 7:34 | sak | du | En säng tar lång tid. Den är värd det. |
| 7:34 | pil |  | Printa sängen |
| 7:34 | notis | tanke | 💭 En säng tar lång tid. Den är värd det. |
| 7:34 | röst | du | En säng tar lång tid. Den är värd det. · MÅL |
| 7:34 | nick |  | nick:19 |
| 7:37 | klar | du | En säng tar lång tid. Den är värd det. |
| 7:38 | kvittens-bock |  | ✓ Köp sängen |
| 7:59 | sak | ali | Ali här. Jag såg Skräpgrip på avstånd. Ett streck blev lite snett. Mitt fel. Vackert ändå. |
| 7:59 | sms | ali | Ali här. Jag såg Skräpgrip på avstånd. Ett streck blev lite snett. Mitt fel. Vackert ändå. |
| 7:59 | sms-bubbla | ali | Ali här. Jag såg Skräpgrip på avstånd. Ett streck blev lite snett. Mitt fel. Vackert ändå. |
| 7:59 | röst | ali | Ali här. Jag såg Skräpgrip på avstånd. Ett streck blev lite snett. Mitt fel. Vackert ändå. · REAKTION |
| 8:01 | händelse | printStart | sak=sang |
| 8:06 | toast | fel | Slut på tråd – mal mer så fortsätter den |
| 8:06 | väntar | notis:Storebrors skrivare: Slut på tråd – mal  | Storebrors skrivare: Slut på tråd – mal mer så fortsätter den |
| 8:06 | klar | ali | Ali här. Jag såg Skräpgrip på avstånd. Ett streck blev lite snett. Mitt fel. Vackert ändå. |
| 8:20 | sak | notis:Storebrors skrivare: Slut på tråd – mal  | Storebrors skrivare: Slut på tråd – mal mer så fortsätter den |
| 8:20 | notis | fel | Storebrors skrivare: Slut på tråd – mal mer så fortsätter den |
| 8:22 | toast | fel | Ingen ström – trampa cykeln |
| 8:23 | klar | notis:Storebrors skrivare: Slut på tråd – mal  | Storebrors skrivare: Slut på tråd – mal mer så fortsätter den |
| 8:26 | toast | guld | ✅ |
| 8:26 | händelse | printKlar | sak=sang n=1 |
| 8:27 | händelse | tagitUrPrint | sak=sang n=1 |
| 8:27 | händelse | malKlart | id=printSang del=Dag 1 – Kom igång nasta=sov1 |
| 8:27 | bekräftelse | du | plats |
| 8:27 | kvittens | du | En säng. Jag printade en SÄNG. |
| 8:27 | väntar | du | En säng. Jag printade en SÄNG. |
| 8:27 | paket |  | lapp |
| 8:27 | kvallsrad | du | Nitton år. Inget mer tjat. Gården är full av skräp. I morgon. |
| 8:27 | väntar | du | Sängen ska in i skjulet. Sen sover jag. |
| 8:27 | MÅL |  | Sängen i skjulet |
| 8:27 | sak | du | En säng. Jag printade en SÄNG. |
| 8:27 | röst | du | En säng. Jag printade en SÄNG. · STORY |
| 8:27 | målruta |  | Sängen i skjulet |
| 8:29 | klar | du | En säng. Jag printade en SÄNG. |
| 8:30 | sak | du | Sängen ska in i skjulet. Sen sover jag. |
| 8:30 | pil |  | Sängen i skjulet |
| 8:30 | notis | tanke | 💭 Sängen ska in i skjulet. Sen sover jag. |
| 8:30 | röst | du | Sängen ska in i skjulet. Sen sover jag. · MÅL |
| 8:30 | nick |  | nick:20 |
| 8:33 | klar | du | Sängen ska in i skjulet. Sen sover jag. |
| 8:42 | nattkort | du | 🌙 21 dagar kvar. God natt. zzz… i en riktig säng Nitton år. Inget mer tjat. Gården är full av skräp. I morgon. DAGENS PRINTAR Nyckelring × 11 Blomkruka × 1 Sän |

<details><summary>Botens handlingar dag 1</summary>

- 0:12 gå till brädhögen (3 m) (5 kr)
- 0:29 gå till cykeln vid vägen (2 m) (5 kr)
- 0:44 gå till rutan i linje 1 (13 m) (5 kr)
- 1:18 gå till cykeln (lyfter den) (13 m) (5 kr)
- 1:31 gå till cykelns plats (11 m) (5 kr)
- 1:34 gå till skrivaren (2 m) (5 kr)
- 1:36 printar Nyckelring (5 kr)
- 1:43 tar ut 1 st ur skrivaren (5 kr)
- 1:56 printar Nyckelring (sista av storebrors rulle) (5 kr)
- 2:22 tar ut 1 st ur skrivaren (5 kr)
- 2:27 gå till Ali (26 m) (5 kr)
- 2:27 öppnar Alis butik – sälja de två nyckelringarna (5 kr)
- 2:29 säljer hos Ali: +30 kr (35 kr)
- 2:42 öppnar Alis butik – köpa kvarnen (35 kr)
- 2:45 köper gammalkvarn för 30 kr (5 kr)
- 2:46 köpte kvarnen (5 kr)
- 3:00 gå till kvarnens ruta (28 m) (5 kr)
- 3:15 plockar 3 skräp på gården (bär max 3) (5 kr)
- 3:18 gå till kvarnen (14 m) (5 kr)
- 3:30 gå till cykeln (3 m) (5 kr)
- 3:31 gå till skrivaren (1 m) (5 kr)
- 3:32 printar Nyckelring (5 kr)
- 3:38 tar ut 1 st ur skrivaren (5 kr)
- 3:44 printar Nyckelring (5 kr)
- 3:46 tar ut 1 st ur skrivaren (5 kr)
- 3:48 printar Nyckelring (5 kr)
- 3:49 tar ut 1 st ur skrivaren (5 kr)
- 4:08 gå till Ali (27 m) (5 kr)
- 4:08 öppnar Alis butik – sälja nyckelringar (5 kr)
- 4:10 säljer hos Ali: +45 kr (50 kr)
- 4:23 öppnar Alis butik – Ali (powerbanken) (70 kr)
- 4:34 öppnar Alis butik – Ali (powerbanken) (70 kr)
- 4:46 gå till koppla powerbanken till cykeln (24 m) (70 kr)
- 4:59 tjänar pengar till väntar på flaskhalsen för grip: 70/110 kr → printar nyckelring (15 kr) (70 kr)
- 5:00 gå till skrivaren (2 m) (70 kr)
- 5:02 printar Nyckelring (70 kr)
- 5:05 tar ut 1 st ur skrivaren (70 kr)
- 5:06 printar Nyckelring (70 kr)
- 5:12 plockar 3 skräp på gården (bär max 3) (70 kr)
- 5:15 gå till kvarnen (12 m) (70 kr)
- 5:19 gå till skrivaren (3 m) (70 kr)
- 5:19 tar ut 1 st ur skrivaren (70 kr)
- 5:21 printar Nyckelring (70 kr)
- 5:23 tar ut 1 st ur skrivaren (70 kr)
- 5:29 gå till Ali (28 m) (70 kr)
- 5:29 öppnar Alis butik – sälja (70 kr)
- 5:31 säljer hos Ali: +45 kr (115 kr)
- 5:32 tjänar pengar till väntar på flaskhalsen för grip: 115/155 kr → printar nyckelring (15 kr) (115 kr)
- 5:37 gå till skrivaren (25 m) (115 kr)
- 5:39 printar Nyckelring (115 kr)
- 5:47 plockar 3 skräp på gården (bär max 3) (115 kr)
- 5:51 gå till kvarnen (20 m) (115 kr)
- 5:54 gå till skrivaren (3 m) (115 kr)
- 5:54 tar ut 1 st ur skrivaren (115 kr)
- 5:56 printar Nyckelring (115 kr)
- 5:58 tar ut 1 st ur skrivaren (115 kr)
- 6:00 printar Nyckelring (115 kr)
- 6:01 gå till cykeln (1 m) (115 kr)
- 6:03 tar ut 1 st ur skrivaren (115 kr)
- 6:09 gå till Ali (27 m) (115 kr)
- 6:09 öppnar Alis butik – sälja (115 kr)
- 6:11 säljer hos Ali: +45 kr (160 kr)
- 6:13 öppnar Alis butik – köpa skräpgrip (160 kr)
- 6:15 köper grip för 50 kr (110 kr)
- 6:24 gå till skrivaren (25 m) (110 kr)
- 6:26 printar Skräpgrip (110 kr)
- 6:29 tar ut 1 st ur skrivaren (110 kr)
- 6:33 tar på grip (110 kr)
- 6:38 gå till Ali (25 m) (110 kr)
- 6:38 öppnar Alis butik – köpa receptet blomkruka (110 kr)
- 6:41 köper kruka för 40 kr (70 kr)
- 7:00 gå till skrivaren (25 m) (70 kr)
- 7:01 printar Blomkruka (70 kr)
- 7:04 gå till cykeln (1 m) (70 kr)
- 7:06 tar ut 1 st ur skrivaren (70 kr)
- 7:21 gå till Ali (25 m) (70 kr)
- 7:21 öppnar Alis butik – sälja krukan (70 kr)
- 7:23 säljer hos Ali: +70 kr (140 kr)
- 7:31 öppnar Alis butik – köpa sängen (140 kr)
- 7:33 köper sang för 60 kr (80 kr)
- 7:48 plockar 6 skräp på gården (bär max 6) (80 kr)
- 7:55 gå till kvarnen (32 m) (80 kr)
- 7:59 gå till skrivaren (1 m) (80 kr)
- 8:01 printar Säng (80 kr)
- 8:15 plockar 6 skräp på gården (bär max 6) (80 kr)
- 8:20 gå till kvarnen (22 m) (80 kr)
- 8:25 gå till cykeln (3 m) (80 kr)
- 8:27 gå till skrivaren (1 m) (80 kr)
- 8:27 tar ut 1 st ur skrivaren (80 kr)
- 8:39 gå till sängplatsen i skjulet (21 m) (80 kr)

</details>

## Dag 2

| Tid | Källa | Vem | Text |
|---|---|---|---|
| 8:42 | vara | ali | kruka |
| 8:42 | händelse | malKlart | id=sov1 del=Dag 1 – Kom igång nasta=kopMotor |
| 8:42 | bekräftelse | du | plats |
| 8:42 | MÅL |  | Mal skräp, printa och sälj |
| 0:01 | händelse | dagenBorjar | dag=2 |
| 0:01 | meddelande | du | 20 dagar till jul. Utan dörr blåser natten rakt in. |
| 0:01 | dagbokkort | du | Tippen bredvid · 20 dagar till jul. Utan dörr blåser natten rakt in. |
| 0:01 | röst | du | 20 dagar till jul. Tippen bredvid. Utan dörr blåser natten rakt in. · STORY |
| 0:07 | väntar | notis:morgon | Ali vill ha idag: Blomkruka · +50 % |
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
| 0:17 | klar | du | Vevandet tar på armarna. Ali har en motor till kvarnen. |
| 0:18 | toast | guld | ✅ |
| 0:18 | händelse | printKlar | sak=kruka n=2 |
| 0:19 | händelse | tagitUrPrint | sak=kruka n=1 |
| 0:19 | sak | notis:morgon | Ali vill ha idag: Blomkruka · +50 % |
| 0:19 | notis |  | Blomkruka · +50 % |
| 0:20 | väntar | ali | Ali här. Såg skylten. Stavningen är rätt. Det är mer än många. |
| 0:20 | väntar | foto | Egen säng |
| 0:20 | paket |  | tanke |
| 0:20 | tanke | du | Tänk att jag ska få sova i min egen säng. |
| 0:20 | väntar | du | Tänk att jag ska få sova i min egen säng. |
| 0:22 | hjälp | kontroll | R: Vrid innan du ställer ner |
| 0:23 | klar | notis:morgon | Ali vill ha idag: Blomkruka · +50 % |
| 0:24 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 0:24 | röst | ali | Du printar mina ritningar. Ingen har gjort det förut. Jag är inte rörd. Det är dammet. · STORY |
| 0:24 | butiksbubbla | ali | Du printar mina ritningar. Ingen har gjort det förut. Jag är inte rörd. Det är dammet. |
| 0:26 | händelse | salt | sak=kruka n=1 |
| 0:26 | aliSalt | ali | 105 |
| 0:26 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 0:26 | butiksbubbla | ali | Precis vad jag ville ha idag. 105 kr – med extra. |
| 0:27 | väntar | ali | Precis det jag ville ha idag, min vän. |
| 0:28 | sak | notis:Första natten i en riktig säng. Jag prin | Första natten i en riktig säng. Jag printade den själv. |
| 0:28 | notis | dagbok | Första natten i en riktig säng. Jag printade den själv. |
| 0:31 | klar | notis:Första natten i en riktig säng. Jag prin | Första natten i en riktig säng. Jag printade den själv. |
| 0:33 | sak | foto | Egen säng |
| 0:33 | foto | du | Egen säng |
| 0:35 | klar | foto | Egen säng |
| 0:37 | sak | du | Tänk att jag ska få sova i min egen säng. |
| 0:37 | notis | tanke | 💭 Tänk att jag ska få sova i min egen säng. |
| 0:37 | röst | du | Tänk att jag ska få sova i min egen säng. · STORY |
| 0:41 | klar | du | Tänk att jag ska få sova i min egen säng. |
| 0:43 | sak | ali | Precis det jag ville ha idag, min vän. |
| 0:43 | röst | ali | Precis det jag ville ha idag, min vän. · STORY |
| 0:46 | händelse | printStart | sak=kruka |
| 0:46 | klar | ali | Precis det jag ville ha idag, min vän. |
| 0:48 | toast | fel | Ingen ström – trampa cykeln |
| 0:49 | toast | guld | ✅ |
| 0:49 | händelse | printKlar | sak=kruka n=3 |
| 0:50 | händelse | tagitUrPrint | sak=kruka n=1 |
| 0:56 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 0:57 | händelse | salt | sak=kruka n=1 |
| 0:57 | aliSalt | ali | 105 |
| 0:57 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 1:04 | lapp | 📔 Dagbok | Sopbilen tippade en ny last. Allt det skräpet – och grinden är låst. |
| 1:04 | okänt ord bytt | du | Sopbilen tippade en ny last. Allt det skräpet – och grinden är låst. |
| 1:04 | dagbokrad | du | En stor bil tippade en ny last. Allt det skräpet – och grinden är låst. |
| 1:04 | väntar | notis:En stor bil tippade en ny last. Allt det | En stor bil tippade en ny last. Allt det skräpet – och grinden är låst. |
| 1:04 | sak | notis:En stor bil tippade en ny last. Allt det | En stor bil tippade en ny last. Allt det skräpet – och grinden är låst. |
| 1:04 | notis | dagbok | En stor bil tippade en ny last. Allt det skräpet – och grinden är låst. |
| 1:07 | klar | notis:En stor bil tippade en ny last. Allt det | En stor bil tippade en ny last. Allt det skräpet – och grinden är låst. |
| 1:07 | skratt | du | falsk tuta |
| 1:08 | sopsack | rolf | Sopsäckarna landade på gården |
| 1:08 | paket |  | tanke → ge |
| 1:08 | tanke | du | Hmm, vad kastade gubben ut ur sopbilen? Jag går och kollar. |
| 1:08 | väntar | du | Hmm, vad kastade gubben ut ur sopbilen? Jag går och kollar. |
| 1:08 | väntar |  | (läget ändras) |
| 1:09 | sak | du | Hmm, vad kastade gubben ut ur sopbilen? Jag går och kollar. |
| 1:09 | notis | tanke | 💭 Hmm, vad kastade gubben ut ur sopbilen? Jag går och kollar. |
| 1:09 | röst | du | Hmm, vad kastade gubben ut ur sopbilen? Jag går och kollar. · STORY |
| 1:14 | klar | du | Hmm, vad kastade gubben ut ur sopbilen? Jag går och kollar. |
| 1:16 | sak |  | (läget ändras) |
| 1:16 | klar |  | (läget ändras) |
| 1:43 | struken | ali | Ali här. Såg skylten. Stavningen är rätt. Det är mer än många. |
| 1:52 | väntar | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått generator. Vi tar en låt på det. Den här är till dig, Gunnar. |
| 1:52 | radio | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått generator. Vi tar en låt på det. Den här är till dig, Gunnar. |
| 1:52 | skratt | du | Radio-Kjelle |
| 1:52 | sak | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått generator. Vi tar en låt på det. Den här är till dig, Gunnar. |
| 1:52 | notis |  | 📻 Radio Tippen: Radio Tippen, Kjelle här. Skjulet vid tippen har fått generator. Vi tar en låt på det. Den här är till dig, Gunnar. |
| 1:52 | röst | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått generator. Vi tar en låt på det. Den här är till dig, Gunnar. · REAKTION |
| 2:01 | klar | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått generator. Vi tar en låt på det. Den här är till dig, Gunnar. |
| 2:59 | väntar | info:guld | 🚛 Sopbilen tippade en ny last på soptippen! |
| 2:59 | sak | info:guld | 🚛 Sopbilen tippade en ny last på soptippen! |
| 2:59 | kvitto-visas | info:guld | 🚛 Sopbilen tippade en ny last på soptippen! |
| 2:59 | toast | guld | 🚛 Sopbilen tippade en ny last på soptippen! |
| 3:01 | klar | info:guld | 🚛 Sopbilen tippade en ny last på soptippen! |
| 3:06 | skratt | du | falsk tuta |
| 3:06 | väntar | värld:TUUT TUUT! | TUUT TUUT! |
| 3:09 | upplåst | mala | kvarnmotor |
| 3:09 | brott | RESERV | kvarnmotor (mala 8 av 6) |
| 3:09 | händelse | upplast | id=kvarnmotor flask=mala |
| 3:09 | paket |  | sms |
| 3:09 | väntar | ali | Ali här. En motor? Jag har en. Från en gammal tvättmaskin. Den centrifugerar fortfarande om man ber snällt. |
| 3:14 | sak | värld:TUUT TUUT! | TUUT TUUT! |
| 3:14 | bubbla |  | TUUT TUUT! |
| 3:16 | händelse | printStart | sak=kruka |
| 3:17 | klar | värld:TUUT TUUT! | TUUT TUUT! |
| 3:18 | toast | guld | ✅ |
| 3:18 | händelse | printKlar | sak=kruka n=4 |
| 3:19 | händelse | tagitUrPrint | sak=kruka n=1 |
| 3:22 | hjälp | kontroll | R: Vrid innan du ställer ner |
| 3:25 | sak | ali | Ali här. En motor? Jag har en. Från en gammal tvättmaskin. Den centrifugerar fortfarande om man ber snällt. |
| 3:25 | sms | ali | Ali här. En motor? Jag har en. Från en gammal tvättmaskin. Den centrifugerar fortfarande om man ber snällt. |
| 3:25 | sms-bubbla | ali | Ali här. En motor? Jag har en. Från en gammal tvättmaskin. Den centrifugerar fortfarande om man ber snällt. |
| 3:25 | röst | ali | Ali här. En motor? Jag har en. Från en gammal tvättmaskin. Den centrifugerar fortfarande om man ber snällt. · STORY |
| 3:25 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 3:27 | händelse | salt | sak=kruka n=1 |
| 3:27 | aliSalt | ali | 105 |
| 3:27 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 3:34 | klar | ali | Ali här. En motor? Jag har en. Från en gammal tvättmaskin. Den centrifugerar fortfarande om man ber snällt. |
| 3:36 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 3:37 | struken | info:guld | 3D-modell köpt – printa kvarnmotor |
| 3:37 | händelse | kopt | sak=kvarnmotor |
| 3:37 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 3:39 | händelse | malKlart | id=kopMotor del=Dag 2 – Tippen bredvid nasta=monteraMotor |
| 3:39 | bekräftelse | du | plats |
| 3:39 | väntar | du | Motorn ska sitta där veven sitter. Jag printar den först. |
| 3:39 | målruta |  | Printa kvarnmotorn till kvarnen |
| 3:39 | MÅL |  | Printa kvarnmotorn till kvarnen |
| 3:39 | sak | du | Motorn ska sitta där veven sitter. Jag printar den först. |
| 3:39 | pil |  | Printa kvarnmotorn till kvarnen |
| 3:39 | notis | tanke | 💭 Motorn ska sitta där veven sitter. Jag printar den först. |
| 3:39 | röst | du | Motorn ska sitta där veven sitter. Jag printar den först. · MÅL |
| 3:39 | nick |  | nick:22 |
| 3:43 | kvittens-bock |  | ✓ Köp kvarnmotorn hos Ali (50 kr) |
| 3:44 | klar | du | Motorn ska sitta där veven sitter. Jag printar den först. |
| 3:52 | händelse | printStart | sak=byggsats:kvarnmotor |
| 3:55 | toast | fel | Ingen ström – trampa cykeln |
| 3:56 | händelse | printKlar | sak=byggsats:kvarnmotor n=1 |
| 3:56 | toast | guld | ✅ |
| 3:56 | väntar | info:guld | ⚙️ Kvarnmotorn ska skruvas fast på kvarnen. |
| 3:56 | händelse | tagitUrPrint | sak=byggsats:kvarnmotor n=1 |
| 3:56 | paket |  | sms |
| 3:56 | väntar | ali | Ali här. Ännu en ritning som blev på riktigt: Kvarnmotor. Semesterkassan växer. Livet växer. |
| 3:56 | sak | info:guld | ⚙️ Kvarnmotorn ska skruvas fast på kvarnen. |
| 3:56 | kvitto-visas | info:guld | ⚙️ Kvarnmotorn ska skruvas fast på kvarnen. |
| 3:56 | toast | guld | ⚙️ Kvarnmotorn ska skruvas fast på kvarnen. |
| 3:58 | klar | info:guld | ⚙️ Kvarnmotorn ska skruvas fast på kvarnen. |
| 4:01 | väntar | info:guld | ⚙️ Motorn sitter där veven satt – nu mal kvarnen själv. |
| 4:01 | händelse | monterat | sak=kvarnmotor |
| 4:01 | paket |  | tanke |
| 4:01 | tanke | du | Motorn sitter där veven satt. Mina armar tackar. |
| 4:01 | väntar | du | Motorn sitter där veven satt. Mina armar tackar. |
| 4:01 | monterat | du | byggsats:kvarnmotor |
| 4:01 | händelse | monterat | sak=kvarnmotor |
| 4:01 | sak | info:guld | ⚙️ Motorn sitter där veven satt – nu mal kvarnen själv. |
| 4:01 | kvitto-visas | info:guld | ⚙️ Motorn sitter där veven satt – nu mal kvarnen själv. |
| 4:01 | toast | guld | ⚙️ Motorn sitter där veven satt – nu mal kvarnen själv. |
| 4:01 | händelse | malKlart | id=monteraMotor del=Dag 2 – Tippen bredvid nasta=kopSack |
| 4:01 | bekräftelse | du | plats |
| 4:01 | struken | du | Motorn sitter där veven satt. Mina armar tackar. |
| 4:01 | väntar | du | Gården är full av skräp. Jag börjar vid skjulet. |
| 4:01 | MÅL |  | Kolla vad som flög ut från sopbilen |
| 4:03 | klar | info:guld | ⚙️ Motorn sitter där veven satt – nu mal kvarnen själv. |
| 4:03 | målruta |  | Kolla vad som flög ut från sopbilen |
| 4:05 | kvittens-bock |  | ✓ Printa kvarnmotorn till kvarnen |
| 4:05 | sak | du | Gården är full av skräp. Jag börjar vid skjulet. |
| 4:05 | pil |  | Kolla vad som flög ut från sopbilen |
| 4:05 | notis | tanke | 💭 Gården är full av skräp. Jag börjar vid skjulet. |
| 4:05 | röst | du | Gården är full av skräp. Jag börjar vid skjulet. · MÅL |
| 4:06 | väntar | mamma | Har du frusit än? |
| 4:09 | klar | du | Gården är full av skräp. Jag börjar vid skjulet. |
| 4:14 | paket |  | brev → ge → tanke |
| 4:14 | väntar | rolf | Du sliter ju. Ingen gör så nuförtin. Ta dessa så går dä lättare. / grannen – ja kör sopbilen å har hand om tippen bredvid. MVH ROLF​ |
| 4:14 | väntar |  | (läget ändras) |
| 4:14 | tanke | du | Rolf… gubben i sopbilen. Han har tippen bredvid. Han verkar schysst. |
| 4:14 | okänt ord bytt | du | Rolf… gubben i sopbilen. Han har tippen bredvid. Han verkar schysst. |
| 4:14 | väntar | du | Rolf… gubben i sopbilen. Han har tippen bredvid. Han verkar schysst. |
| 4:14 | sak | rolf | Du sliter ju. Ingen gör så nuförtin. Ta dessa så går dä lättare. / grannen – ja kör sopbilen å har hand om tippen bredvid. MVH ROLF​ |
| 4:14 | lapp | Lapp från Rolf | Du sliter ju. Ingen gör så nuförtin. Ta dessa så går dä lättare. / grannen – ja kör sopbilen å har hand om tippen bredvid. MVH ROLF​ |
| 4:14 | röst | rolf | Du sliter ju. Ingen gör så nuförtin. Ta dessa så går dä lättare. / grannen – ja kör sopbilen å har hand om tippen bredvid. MVH ROLF​ · STORY |
| 4:16 | hjälp | kontroll | Klick: Klicka för att ta på dig den |
| 4:25 | klar | rolf | Du sliter ju. Ingen gör så nuförtin. Ta dessa så går dä lättare. / grannen – ja kör sopbilen å har hand om tippen bredvid. MVH ROLF​ |
| 4:27 | väntar | info:guld | 🗑️ Sopsäcken är över axeln! Nu bär jag 10 skräp. |
| 4:27 | tog på | du | byggsats:korg |
| 4:27 | händelse | monterat | sak=korg |
| 4:27 | sak | info:guld | 🗑️ Sopsäcken är över axeln! Nu bär jag 10 skräp. |
| 4:27 | kvitto-visas | info:guld | 🗑️ Sopsäcken är över axeln! Nu bär jag 10 skräp. |
| 4:27 | toast | guld | 🗑️ Sopsäcken är över axeln! Nu bär jag 10 skräp. |
| 4:27 | händelse | malKlart | id=kopSack del=Dag 2 – Tippen bredvid nasta=n1-stada-klart-garden |
| 4:27 | bekräftelse | du | plats |
| 4:27 | händelse | malKlart | id=n1-stada-klart-garden del=Dag 2 – Tippen bredvid nasta=rolf0-brev |
| 4:27 | bekräftelse | du | plats |
| 4:27 | väntar | du | Gården är STÄDAD, av mig, frivilligt. Mamma skulle aldrig tro det. |
| 4:27 | väntar | du | Vänta på sopbilen. Den lämnar något. |
| 4:27 | MÅL |  | Vänta på sopbilen. Den lämnar något. |
| 4:29 | klar | info:guld | 🗑️ Sopsäcken är över axeln! Nu bär jag 10 skräp. |
| 4:29 | sak | du | Gården är STÄDAD, av mig, frivilligt. Mamma skulle aldrig tro det. |
| 4:29 | kvitto-visas | du | Gården är STÄDAD, av mig, frivilligt. Mamma skulle aldrig tro det. |
| 4:29 | lapp | 📔 Dagbok | Gården är STÄDAD, av mig, frivilligt. Mamma skulle aldrig tro det. |
| 4:29 | dagbokrad | du | Gården är STÄDAD, av mig, frivilligt. Mamma skulle aldrig tro det. |
| 4:29 | notis | dagbok | Gården är STÄDAD, av mig, frivilligt. Mamma skulle aldrig tro det. |
| 4:29 | klar | du | Gården är STÄDAD, av mig, frivilligt. Mamma skulle aldrig tro det. |
| 4:29 | målruta |  | Vänta på sopbilen. Den lämnar något. |
| 4:29 | sak | du | Vänta på sopbilen. Den lämnar något. |
| 4:29 | pil |  | Vänta på sopbilen. Den lämnar något. |
| 4:29 | röst | du | Vänta på sopbilen. Den lämnar något. · MÅL |
| 4:31 | händelse | printStart | sak=kruka |
| 4:32 | klar | du | Vänta på sopbilen. Den lämnar något. |
| 4:34 | toast | guld | ✅ |
| 4:34 | händelse | printKlar | sak=kruka n=5 |
| 4:34 | sak |  | (läget ändras) |
| 4:34 | klar |  | (läget ändras) |
| 4:39 | sak | du | Rolf… gubben i sopbilen. Han har tippen bredvid. Han verkar schysst. |
| 4:39 | notis | tanke | 💭 Rolf… gubben i sopbilen. Han har tippen bredvid. Han verkar schysst. |
| 4:39 | röst | du | Rolf… gubben i sopbilen. Han har tippen bredvid. Han verkar schysst. · STORY |
| 4:44 | klar | du | Rolf… gubben i sopbilen. Han har tippen bredvid. Han verkar schysst. |
| 4:48 | paket |  | tanke → ge |
| 4:48 | tanke | du | Flaggan är uppe. Rolf har lämnat något. |
| 4:48 | väntar | du | Flaggan är uppe. Rolf har lämnat något. |
| 4:48 | väntar |  | (läget ändras) |
| 4:48 | skratt | du | falsk tuta |
| 4:49 | sak | du | Flaggan är uppe. Rolf har lämnat något. |
| 4:49 | notis | tanke | 💭 Flaggan är uppe. Rolf har lämnat något. |
| 4:49 | röst | du | Flaggan är uppe. Rolf har lämnat något. · STORY |
| 4:52 | klar | du | Flaggan är uppe. Rolf har lämnat något. |
| 4:54 | sak |  | (läget ändras) |
| 4:54 | brev | rolf | rolf:0 |
| 4:54 | klar |  | (läget ändras) |
| 4:57 | händelse | tagitUrPrint | sak=kruka n=1 |
| 5:00 | hjälp | kontroll | R: Vrid innan du ställer ner |
| 5:01 | sak | ali | Ali här. Ännu en ritning som blev på riktigt: Kvarnmotor. Semesterkassan växer. Livet växer. |
| 5:01 | sms | ali | Ali här. Ännu en ritning som blev på riktigt: Kvarnmotor. Semesterkassan växer. Livet växer. |
| 5:01 | sms-bubbla | ali | Ali här. Ännu en ritning som blev på riktigt: Kvarnmotor. Semesterkassan växer. Livet växer. |
| 5:01 | röst | ali | Ali här. Ännu en ritning som blev på riktigt: Kvarnmotor. Semesterkassan växer. Livet växer. · REAKTION |
| 5:03 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 5:05 | händelse | salt | sak=kruka n=1 |
| 5:05 | aliSalt | ali | 105 |
| 5:05 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 5:09 | klar | ali | Ali här. Ännu en ritning som blev på riktigt: Kvarnmotor. Semesterkassan växer. Livet växer. |
| 5:17 | väntar | rolf | Såg att du printar grejer. Kan du göra en sån hä? Kall öl ä viktigt. /Rolf​ |
| 5:17 | paket |  | ge |
| 5:17 | väntar |  | (läget ändras) |
| 5:17 | sak | rolf | Såg att du printar grejer. Kan du göra en sån hä? Kall öl ä viktigt. /Rolf​ |
| 5:17 | lapp | Brev från Rolf | Såg att du printar grejer. Kan du göra en sån hä? Kall öl ä viktigt. /Rolf​ |
| 5:17 | röst | rolf | Såg att du printar grejer. Kan du göra en sån hä? Kall öl ä viktigt. /Rolf​ · STORY |
| 5:17 | händelse | malKlart | id=rolf0-brev del=Dag 2 – Tippen bredvid nasta=rolf0-printa |
| 5:17 | bekräftelse | du | plats |
| 5:17 | väntar | du | Printa ölhållare med kylklamp. |
| 5:17 | MÅL |  | Printa ölhållare med kylklamp |
| 5:20 | målruta |  | Printa ölhållare med kylklamp |
| 5:21 | händelse | printStart | sak=olhallare |
| 5:21 | händelse | malKlart | id=rolf0-printa del=Dag 2 – Tippen bredvid nasta=rolf0-ge |
| 5:21 | bekräftelse | du | plats |
| 5:21 | väntar | du | Ge Rolf ölhållare med kylklamp. |
| 5:21 | MÅL |  | Ge Rolf ölhållare med kylklamp |
| 5:22 | toast | fel | Ingen ström – trampa cykeln |
| 5:23 | målruta |  | Ge Rolf ölhållare med kylklamp |
| 5:23 | klar | rolf | Såg att du printar grejer. Kan du göra en sån hä? Kall öl ä viktigt. /Rolf​ |
| 5:23 | händelse | brevLast | id=rolf:0 |
| 5:25 | kvittens-bock |  | ✓ Printa ölhållare med kylklamp |
| 5:25 | toast | guld | ✅ |
| 5:25 | händelse | printKlar | sak=olhallare n=1 |
| 5:25 | händelse | tagitUrPrint | sak=olhallare n=1 |
| 5:25 | struken | du | Printa ölhållare med kylklamp. |
| 5:25 | sak | du | Ge Rolf ölhållare med kylklamp. |
| 5:25 | pil |  | Ge Rolf ölhållare med kylklamp |
| 5:25 | röst | du | Ge Rolf ölhållare med kylklamp. · MÅL |
| 5:28 | klar | du | Ge Rolf ölhållare med kylklamp. |
| 5:30 | sak |  | (läget ändras) |
| 5:30 | klar |  | (läget ändras) |
| 5:32 | händelse | lagtIPostlada | sak=olhallare rolf=0 jobb=false |
| 5:32 | paket |  | tanke |
| 5:32 | tanke | du | Flaggan uppe. Nu får Rolf hämta den. |
| 5:32 | väntar | du | Flaggan uppe. Nu får Rolf hämta den. |
| 5:32 | händelse | malKlart | id=rolf0-ge del=Dag 2 – Tippen bredvid nasta=vindsnurra |
| 5:32 | bekräftelse | du | plats |
| 5:32 | väntar | du | En vindsnurra på skjulets tak. Då blir det ström när det blåser. |
| 5:32 | MÅL |  | Trampa, printa och sälj |
| 5:32 | sak | du | En vindsnurra på skjulets tak. Då blir det ström när det blåser. |
| 5:32 | målruta |  | Trampa, printa och sälj |
| 5:32 | pil |  | Trampa, printa och sälj |
| 5:32 | notis | tanke | 💭 En vindsnurra på skjulets tak. Då blir det ström när det blåser. |
| 5:32 | röst | du | En vindsnurra på skjulets tak. Då blir det ström när det blåser. · MÅL |
| 5:36 | kvittens-bock |  | ✓ Ge Rolf ölhållare med kylklamp |
| 5:37 | klar | du | En vindsnurra på skjulets tak. Då blir det ström när det blåser. |
| 5:39 | sak | du | Flaggan uppe. Nu får Rolf hämta den. |
| 5:39 | notis | tanke | 💭 Flaggan uppe. Nu får Rolf hämta den. |
| 5:39 | röst | du | Flaggan uppe. Nu får Rolf hämta den. · REAKTION |
| 5:42 | klar | du | Flaggan uppe. Nu får Rolf hämta den. |
| 5:47 | händelse | printStart | sak=kruka |
| 5:50 | upplåst | skrivare | rullstall |
| 5:50 | brott | UPPLÅST | rullstall (skrivare 119 av 60) |
| 5:50 | händelse | upplast | id=rullstall flask=skrivare |
| 5:50 | paket |  | tanke → sms |
| 5:50 | tanke | du | Kvarnen står och väntar för att hållaren är full. Om den rymde fler rullar kunde den mala hela tiden. |
| 5:50 | väntar | du | Kvarnen står och väntar för att hållaren är full. Om den rymde fler rullar kunde den mala hela tiden. |
| 5:50 | väntar | ali | Ali här. Rullställ. Fyra rullar i stället för en. Har ett på hyllan. |
| 5:50 | sak | du | Kvarnen står och väntar för att hållaren är full. Om den rymde fler rullar kunde den mala hela tiden. |
| 5:50 | notis | tanke | 💭 Kvarnen står och väntar för att hållaren är full. Om den rymde fler rullar kunde den mala hela tiden. |
| 5:50 | röst | du | Kvarnen står och väntar för att hållaren är full. Om den rymde fler rullar kunde den mala hela tiden. · STORY |
| 5:50 | toast | guld | ✅ |
| 5:50 | händelse | printKlar | sak=kruka n=6 |
| 5:50 | händelse | tagitUrPrint | sak=kruka n=1 |
| 5:57 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 5:57 | röst | ali | Rolf gav mig en kanna. Som min farmors. Jag ritade en sak åt honom. Säg inget, han gråter lätt. · STORY |
| 5:57 | butiksbubbla | ali | Rolf gav mig en kanna. Som min farmors. Jag ritade en sak åt honom. Säg inget, han gråter lätt. |
| 5:58 | händelse | salt | sak=kruka n=1 |
| 5:58 | aliSalt | ali | 105 |
| 5:58 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 5:58 | klar | du | Kvarnen står och väntar för att hållaren är full. Om den rymde fler rullar kunde den mala hela tiden. |
| 6:08 | händelse | printStart | sak=kruka |
| 6:11 | sak | ali | Ali här. Rullställ. Fyra rullar i stället för en. Har ett på hyllan. |
| 6:11 | sms | ali | Ali här. Rullställ. Fyra rullar i stället för en. Har ett på hyllan. |
| 6:11 | sms-bubbla | ali | Ali här. Rullställ. Fyra rullar i stället för en. Har ett på hyllan. |
| 6:11 | röst | ali | Ali här. Rullställ. Fyra rullar i stället för en. Har ett på hyllan. · STORY |
| 6:11 | toast | guld | ✅ |
| 6:11 | händelse | printKlar | sak=kruka n=7 |
| 6:12 | händelse | tagitUrPrint | sak=kruka n=1 |
| 6:16 | hjälp | kontroll | E: Ryggsäcken och kistan |
| 6:17 | klar | ali | Ali här. Rullställ. Fyra rullar i stället för en. Har ett på hyllan. |
| 6:18 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 6:19 | händelse | salt | sak=kruka n=1 |
| 6:19 | aliSalt | ali | 105 |
| 6:19 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 6:28 | händelse | printStart | sak=kruka |
| 6:31 | toast | guld | ✅ |
| 6:31 | händelse | printKlar | sak=kruka n=8 |
| 6:31 | händelse | tagitUrPrint | sak=kruka n=1 |
| 6:37 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 6:38 | händelse | salt | sak=kruka n=1 |
| 6:38 | aliSalt | ali | 105 |
| 6:38 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 6:47 | händelse | printStart | sak=kruka |
| 6:48 | toast | fel | Ingen ström – trampa cykeln |
| 6:51 | toast | guld | ✅ |
| 6:51 | händelse | printKlar | sak=kruka n=9 |
| 6:51 | paket |  | tanke |
| 6:51 | tanke | du | Jaha, Rolf har hämtat en ölhållare med kylklamp. |
| 6:51 | väntar | du | Jaha, Rolf har hämtat en ölhållare med kylklamp. |
| 6:51 | sak | du | Jaha, Rolf har hämtat en ölhållare med kylklamp. |
| 6:51 | notis | tanke | 💭 Jaha, Rolf har hämtat en ölhållare med kylklamp. |
| 6:51 | röst | du | Jaha, Rolf har hämtat en ölhållare med kylklamp. · REAKTION |
| 6:55 | klar | du | Jaha, Rolf har hämtat en ölhållare med kylklamp. |
| 7:02 | tanke | du | Igensvetsad. Någon ville verkligen inte in här. |
| 7:02 | väntar | du | Igensvetsad. Någon ville verkligen inte in här. |
| 7:02 | sak | du | Igensvetsad. Någon ville verkligen inte in här. |
| 7:02 | notis | tanke | 💭 Igensvetsad. Någon ville verkligen inte in här. |
| 7:02 | röst | du | Igensvetsad. Någon ville verkligen inte in här. · REAKTION |
| 7:06 | klar | du | Igensvetsad. Någon ville verkligen inte in här. |
| 7:13 | skratt | du | falsk tuta |
| 7:22 | händelse | tagitUrPrint | sak=kruka n=1 |
| 7:28 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 7:30 | händelse | salt | sak=kruka n=1 |
| 7:30 | aliSalt | ali | 105 |
| 7:30 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 7:35 | upplåst | skrivare | trim_skrivare |
| 7:35 | brott | UPPLÅST | trim_skrivare (skrivare 60 av 60) |
| 7:35 | händelse | upplast | id=trim_skrivare flask=skrivare |
| 7:35 | paket |  | sms |
| 7:35 | väntar | ali | Ali här. Skrivartrim. Jag skruvade på min egen skrivare i natt. Den går fortare nu. Nästan för fort. |
| 7:35 | sak | ali | Ali här. Skrivartrim. Jag skruvade på min egen skrivare i natt. Den går fortare nu. Nästan för fort. |
| 7:35 | sms | ali | Ali här. Skrivartrim. Jag skruvade på min egen skrivare i natt. Den går fortare nu. Nästan för fort. |
| 7:35 | sms-bubbla | ali | Ali här. Skrivartrim. Jag skruvade på min egen skrivare i natt. Den går fortare nu. Nästan för fort. |
| 7:35 | röst | ali | Ali här. Skrivartrim. Jag skruvade på min egen skrivare i natt. Den går fortare nu. Nästan för fort. · STORY |
| 7:38 | händelse | printStart | sak=kruka |
| 7:41 | toast | guld | ✅ |
| 7:41 | händelse | printKlar | sak=kruka n=10 |
| 7:41 | händelse | tagitUrPrint | sak=kruka n=1 |
| 7:43 | klar | ali | Ali här. Skrivartrim. Jag skruvade på min egen skrivare i natt. Den går fortare nu. Nästan för fort. |
| 7:47 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 7:49 | händelse | salt | sak=kruka n=1 |
| 7:49 | aliSalt | ali | 105 |
| 7:49 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 7:57 | händelse | printStart | sak=kruka |
| 7:58 | toast | fel | Ingen ström – trampa cykeln |
| 7:59 | upplåst | trampa | vindsnurra |
| 7:59 | brott | UPPLÅST | vindsnurra (trampa 26 av 6) |
| 7:59 | händelse | upplast | id=vindsnurra flask=trampa |
| 7:59 | paket |  | tanke → sms |
| 7:59 | tanke | du | Mina ben är slut. Det blåser hela tiden här ute. Tänk om vinden kunde trampa åt mig. |
| 7:59 | väntar | du | Mina ben är slut. Det blåser hela tiden här ute. Tänk om vinden kunde trampa åt mig. |
| 7:59 | väntar | ali | Ali här. Vindsnurra till cykeln. Vinden trampar åt dig. Den är lat, men den jobbar gratis. |
| 8:00 | sak | du | Mina ben är slut. Det blåser hela tiden här ute. Tänk om vinden kunde trampa åt mig. |
| 8:00 | notis | tanke | 💭 Mina ben är slut. Det blåser hela tiden här ute. Tänk om vinden kunde trampa åt mig. |
| 8:00 | röst | du | Mina ben är slut. Det blåser hela tiden här ute. Tänk om vinden kunde trampa åt mig. · STORY |
| 8:02 | toast | guld | ✅ |
| 8:02 | händelse | printKlar | sak=kruka n=11 |
| 8:02 | händelse | tagitUrPrint | sak=kruka n=1 |
| 8:07 | klar | du | Mina ben är slut. Det blåser hela tiden här ute. Tänk om vinden kunde trampa åt mig. |
| 8:08 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 8:09 | sak | ali | Ali här. Vindsnurra till cykeln. Vinden trampar åt dig. Den är lat, men den jobbar gratis. |
| 8:09 | sms | ali | Ali här. Vindsnurra till cykeln. Vinden trampar åt dig. Den är lat, men den jobbar gratis. |
| 8:09 | sms-bubbla | ali | Ali här. Vindsnurra till cykeln. Vinden trampar åt dig. Den är lat, men den jobbar gratis. |
| 8:09 | röst | ali | Ali här. Vindsnurra till cykeln. Vinden trampar åt dig. Den är lat, men den jobbar gratis. · STORY |
| 8:09 | händelse | salt | sak=kruka n=1 |
| 8:09 | aliSalt | ali | 105 |
| 8:09 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 8:16 | klar | ali | Ali här. Vindsnurra till cykeln. Vinden trampar åt dig. Den är lat, men den jobbar gratis. |
| 8:18 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 8:20 | struken | info:guld | 3D-modell köpt – printa vindsnurra till skjultaket |
| 8:20 | händelse | kopt | sak=vindsnurra |
| 8:20 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 8:28 | händelse | printStart | sak=byggsats:vindsnurra |
| 8:32 | paket |  | tanke |
| 8:32 | tanke | du | Jaha. En kalsong. Använd. |
| 8:32 | väntar | du | Jaha. En kalsong. Använd. |
| 8:32 | skratt | du | kvarnen spottar |
| 8:34 | händelse | printKlar | sak=byggsats:vindsnurra n=1 |
| 8:34 | toast | guld | ✅ |
| 8:34 | sak | du | Jaha. En kalsong. Använd. |
| 8:34 | notis | tanke | 💭 Jaha. En kalsong. Använd. |
| 8:34 | röst | du | Jaha. En kalsong. Använd. · REAKTION |
| 8:34 | väntar | info:guld | 🌬️ Vindsnurran ska upp på skjulets tak. |
| 8:34 | händelse | tagitUrPrint | sak=byggsats:vindsnurra n=1 |
| 8:36 | klar | du | Jaha. En kalsong. Använd. |
| 8:36 | sak | info:guld | 🌬️ Vindsnurran ska upp på skjulets tak. |
| 8:36 | kvitto-visas | info:guld | 🌬️ Vindsnurran ska upp på skjulets tak. |
| 8:36 | toast | guld | 🌬️ Vindsnurran ska upp på skjulets tak. |
| 8:38 | klar | info:guld | 🌬️ Vindsnurran ska upp på skjulets tak. |
| 8:45 | händelse | placerat | sak=vindsnurra |
| 8:45 | väntar | info:guld | 🌬️ Vindsnurran sitter på taket – den trampar cykeln åt mig när det blåser |
| 8:45 | monterat | du | byggsats:vindsnurra |
| 8:45 | händelse | monterat | sak=vindsnurra |
| 8:45 | sak | info:guld | 🌬️ Vindsnurran sitter på taket – den trampar cykeln åt mig när det blåser |
| 8:45 | kvitto-visas | info:guld | 🌬️ Vindsnurran sitter på taket – den trampar cykeln åt mig när det blåser |
| 8:45 | toast | guld | 🌬️ Vindsnurran sitter på taket – den trampar cykeln åt mig när det blåser |
| 8:45 | händelse | malKlart | id=vindsnurra del=Dag 2 – Tippen bredvid nasta=n1-bygg-dorr-skjulet |
| 8:45 | bekräftelse | du | plats |
| 8:45 | kvittens | du | Den snurrar! Långsamt. Men den snurrar. |
| 8:45 | väntar | du | Den snurrar! Långsamt. Men den snurrar. |
| 8:45 | väntar | du | Det drar från dörrhålet. En dörr kan jag printa. |
| 8:45 | MÅL |  | Bygg en dörr till skjulet |
| 8:47 | klar | info:guld | 🌬️ Vindsnurran sitter på taket – den trampar cykeln åt mig när det blåser |
| 8:47 | sak | du | Den snurrar! Långsamt. Men den snurrar. |
| 8:47 | röst | du | Den snurrar! Långsamt. Men den snurrar. · STORY |
| 8:47 | målruta |  | Bygg en dörr till skjulet |
| 8:50 | klar | du | Den snurrar! Långsamt. Men den snurrar. |
| 8:50 | sak | du | Det drar från dörrhålet. En dörr kan jag printa. |
| 8:50 | pil |  | Bygg en dörr till skjulet |
| 8:50 | notis | tanke | 💭 Det drar från dörrhålet. En dörr kan jag printa. |
| 8:50 | röst | du | Det drar från dörrhålet. En dörr kan jag printa. · MÅL |
| 8:51 | nick |  | nick:29 |
| 8:54 | klar | du | Det drar från dörrhålet. En dörr kan jag printa. |
| 9:01 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 9:01 | scenInfo | gard | Lite skräp ramlade av flaket på gården |
| 9:02 | struken | info:guld | 3D-modell köpt – printa dörr |
| 9:02 | händelse | kopt | sak=dorr |
| 9:02 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 9:08 | väntar | värld:TUUT TUUT! | TUUT TUUT! |
| 9:08 | sak | värld:TUUT TUUT! | TUUT TUUT! |
| 9:08 | bubbla |  | TUUT TUUT! |
| 9:11 | händelse | printStart | sak=byggsats:dorr |
| 9:11 | klar | värld:TUUT TUUT! | TUUT TUUT! |
| 9:14 | toast | bra | Del 1 av 2 klar |
| 9:14 | väntar | notis:Storebrors skrivare: Del 1 av 2 klar | Storebrors skrivare: Del 1 av 2 klar |
| 9:18 | händelse | printKlar | sak=byggsats:dorr n=1 |
| 9:18 | toast | guld | ✅ |
| 9:19 | sak | notis:Storebrors skrivare: Del 1 av 2 klar | Storebrors skrivare: Del 1 av 2 klar |
| 9:19 | notis | bra | Storebrors skrivare: Del 1 av 2 klar |
| 9:22 | klar | notis:Storebrors skrivare: Del 1 av 2 klar | Storebrors skrivare: Del 1 av 2 klar |
| 9:53 | händelse | tagitUrPrint | sak=byggsats:dorr n=1 |
| 9:53 | paket |  | sms |
| 9:53 | väntar | ali | Ali här. Jag har inte sovit. Inte på grund av AI:n. På grund av dig. Du bygger saker av sopor. Jag har en hel butik och bygger ingenting. Det ska ändras. Kanske. Troligen. |
| 9:58 | väntar | info:guld | Dörr på plats! Trivsel +8 |
| 9:58 | sak | info:guld | Dörr på plats! Trivsel +8 |
| 9:58 | kvitto-visas | info:guld | Dörr på plats! Trivsel +8 |
| 9:58 | toast | guld | Dörr på plats! Trivsel +8 |
| 9:58 | händelse | malKlart | id=n1-bygg-dorr-skjulet del=Dag 2 – Tippen bredvid nasta=sov2 |
| 9:58 | paket |  | lapp |
| 9:58 | väntar | du | Nu vet Ali att jag bor HÄR. Taket läcker. I morgon. |
| 9:58 | paket |  | sms |
| 9:58 | väntar | bror | Mamma ringde mig fyra gånger förresten. Snyggt jobbat 😂 |
| 9:58 | skratt | bror | Mamma ringde mig fyra gånger förresten. |
| 9:58 | bekräftelse | du | plats |
| 9:58 | väntar | du | Klart för idag – sov när du vill. |
| 9:58 | MÅL |  | Klart för idag – sov när du vill |
| 10:00 | klar | info:guld | Dörr på plats! Trivsel +8 |
| 10:00 | målruta |  | Klart för idag – sov när du vill |
| 10:02 | kvittens-bock |  | ✓ Bygg en dörr till skjulet |
| 10:02 | sak | du | Klart för idag – sov när du vill. |
| 10:02 | pil |  | Klart för idag – sov när du vill |
| 10:02 | röst | du | Klart för idag – sov när du vill. · MÅL |
| 10:05 | klar | du | Klart för idag – sov när du vill. |
| 10:05 | väntar | notis:🌇 Klockan är 21. Ali slår igen luckan.  | 🌇 Klockan är 21. Ali slår igen luckan. Dagens jobb är klart – gå in i skjulet och sov i sängen. |
| 10:07 | sak | du | Nu vet Ali att jag bor HÄR. Taket läcker. I morgon. |
| 10:07 | kvallsrad | du | Nu vet Ali att jag bor HÄR. Taket läcker. I morgon. |
| 10:07 | klar | du | Nu vet Ali att jag bor HÄR. Taket läcker. I morgon. |
| 10:12 | nattkort | du | 🌙 20 dagar kvar. God natt. zzz… Nu vet Ali att jag bor HÄR. Taket läcker. I morgon. DAGENS PRINTAR Blomkruka × 10 Ölhållare med kylklamp × 1 Totalt 11 printar |

<details><summary>Botens handlingar dag 2</summary>

- 0:00 — dag 2 börjar — (80 kr)
- 0:07 popup: "FORTSÄTT" (80 kr)
- 0:10 tjänar pengar till väntar på flaskhalsen för kvarnmotor: 80/120 kr → printar blomkruka (105 kr) (80 kr)
- 0:14 gå till skrivaren (19 m) (80 kr)
- 0:16 printar Blomkruka (80 kr)
- 0:19 tar ut 1 st ur skrivaren (80 kr)
- 0:24 gå till Ali (26 m) (80 kr)
- 0:24 öppnar Alis butik – sälja (80 kr)
- 0:26 säljer hos Ali: +105 kr (185 kr)
- 0:39 tjänar pengar till väntar på flaskhalsen för kvarnmotor: 185/225 kr → printar blomkruka (105 kr) (185 kr)
- 0:44 gå till skrivaren (25 m) (185 kr)
- 0:46 printar Blomkruka (185 kr)
- 0:48 gå till cykeln (1 m) (185 kr)
- 0:51 tar ut 1 st ur skrivaren (185 kr)
- 0:56 gå till Ali (25 m) (185 kr)
- 0:56 öppnar Alis butik – sälja (185 kr)
- 0:58 säljer hos Ali: +105 kr (290 kr)
- 0:59 tjänar pengar till väntar på flaskhalsen för kvarnmotor: 290/330 kr → printar blomkruka (105 kr) (290 kr)
- 1:09 plockar 6 skräp på gården (bär max 6) (290 kr)
- 1:15 gå till kvarnen (28 m) (290 kr)
- 3:14 gå till skrivaren (3 m) (290 kr)
- 3:16 printar Blomkruka (290 kr)
- 3:19 tar ut 1 st ur skrivaren (290 kr)
- 3:25 gå till Ali (28 m) (290 kr)
- 3:25 öppnar Alis butik – sälja (290 kr)
- 3:27 säljer hos Ali: +105 kr (395 kr)
- 3:36 öppnar Alis butik – köpa kvarnmotor (395 kr)
- 3:38 köper kvarnmotor för 50 kr (345 kr)
- 3:51 gå till skrivaren (25 m) (345 kr)
- 3:52 printar Kvarnmotor (345 kr)
- 3:55 gå till cykeln (1 m) (345 kr)
- 3:56 tar ut 1 st ur skrivaren (345 kr)
- 4:01 gå till skruva fast kvarnmotorn (3 m) (345 kr)
- 4:14 gå till Rolfs sopsäck (16 m) (345 kr)
- 4:27 tar på korg (345 kr)
- 4:27 tjänar pengar till väntar på sopbilen (BO): 345/405 kr → printar blomkruka (105 kr) (345 kr)
- 4:30 gå till skrivaren (12 m) (345 kr)
- 4:31 printar Blomkruka (345 kr)
- 4:49 plockar 10 skräp på gården (bär max 10) (345 kr)
- 4:56 gå till kvarnen (35 m) (345 kr)
- 4:57 gå till skrivaren (1 m) (345 kr)
- 4:57 tar ut 1 st ur skrivaren (345 kr)
- 5:03 gå till Ali (28 m) (345 kr)
- 5:03 öppnar Alis butik – sälja (345 kr)
- 5:05 säljer hos Ali: +105 kr (450 kr)
- 5:17 gå till Rolfs postlåda (31 m) (450 kr)
- 5:19 gå till skrivaren (7 m) (450 kr)
- 5:21 printar Ölhållare med kylklamp (450 kr)
- 5:23 gå till cykeln (1 m) (450 kr)
- 5:26 tar ut 1 st ur skrivaren (450 kr)
- 5:30 valj olhallare: true, vald olhallare, post {"l":null,"tr":null,"tm":[]}, nummer false (450 kr)
- 5:32 gå till Rolfs postlåda (7 m) (450 kr)
- 5:44 tjänar pengar till väntar på flaskhalsen för vindsnurra: 450/490 kr → printar blomkruka (105 kr) (450 kr)
- 5:46 gå till skrivaren (6 m) (450 kr)
- 5:47 printar Blomkruka (450 kr)
- 5:51 tar ut 1 st ur skrivaren (450 kr)
- 5:57 gå till Ali (28 m) (450 kr)
- 5:57 öppnar Alis butik – sälja (450 kr)
- 5:58 säljer hos Ali: +105 kr (555 kr)
- 6:01 tjänar pengar till väntar på flaskhalsen för vindsnurra: 555/595 kr → printar blomkruka (105 kr) (555 kr)
- 6:06 gå till skrivaren (25 m) (555 kr)
- 6:08 printar Blomkruka (555 kr)
- 6:09 gå till cykeln (1 m) (555 kr)
- 6:13 tar ut 1 st ur skrivaren (555 kr)
- 6:18 gå till Ali (25 m) (555 kr)
- 6:18 öppnar Alis butik – sälja (555 kr)
- 6:20 säljer hos Ali: +105 kr (660 kr)
- 6:21 tjänar pengar till väntar på flaskhalsen för vindsnurra: 660/700 kr → printar blomkruka (105 kr) (660 kr)
- 6:27 gå till skrivaren (25 m) (660 kr)
- 6:28 printar Blomkruka (660 kr)
- 6:32 tar ut 1 st ur skrivaren (660 kr)
- 6:37 gå till Ali (25 m) (660 kr)
- 6:37 öppnar Alis butik – sälja (660 kr)
- 6:39 säljer hos Ali: +105 kr (765 kr)
- 6:40 tjänar pengar till väntar på flaskhalsen för vindsnurra: 765/805 kr → printar blomkruka (105 kr) (765 kr)
- 6:46 gå till skrivaren (25 m) (765 kr)
- 6:47 printar Blomkruka (765 kr)
- 6:48 gå till cykeln (1 m) (765 kr)
- 7:13 plockar 10 skräp på gården (bär max 10) (765 kr)
- 7:21 gå till kvarnen (40 m) (765 kr)
- 7:22 gå till skrivaren (1 m) (765 kr)
- 7:22 tar ut 1 st ur skrivaren (765 kr)
- 7:28 gå till Ali (28 m) (765 kr)
- 7:28 öppnar Alis butik – sälja (765 kr)
- 7:30 säljer hos Ali: +105 kr (870 kr)
- 7:32 tjänar pengar till väntar på flaskhalsen för vindsnurra: 870/910 kr → printar blomkruka (105 kr) (870 kr)
- 7:37 gå till skrivaren (25 m) (870 kr)
- 7:38 printar Blomkruka (870 kr)
- 7:42 tar ut 1 st ur skrivaren (870 kr)
- 7:47 gå till Ali (25 m) (870 kr)
- 7:47 öppnar Alis butik – sälja (870 kr)
- 7:49 säljer hos Ali: +105 kr (975 kr)
- 7:51 tjänar pengar till väntar på flaskhalsen för vindsnurra: 975/1015 kr → printar blomkruka (105 kr) (975 kr)
- 7:56 gå till skrivaren (25 m) (975 kr)
- 7:57 printar Blomkruka (975 kr)
- 7:59 gå till cykeln (1 m) (975 kr)
- 8:02 tar ut 1 st ur skrivaren (975 kr)
- 8:08 gå till Ali (25 m) (975 kr)
- 8:08 öppnar Alis butik – sälja (975 kr)
- 8:09 säljer hos Ali: +105 kr (1080 kr)
- 8:18 öppnar Alis butik – köpa vindsnurra till skjultaket (1080 kr)
- 8:21 köper vindsnurra för 133 kr (947 kr)
- 8:27 gå till skrivaren (25 m) (947 kr)
- 8:28 printar Vindsnurra till skjultaket (947 kr)
- 8:32 gå till cykeln (1 m) (947 kr)
- 8:35 tar ut 1 st ur skrivaren (947 kr)
- 8:45 gå till sätt vindsnurran på taket (20 m) (947 kr)
- 9:01 gå till Ali (20 m) (947 kr)
- 9:01 öppnar Alis butik – köpa dörr (947 kr)
- 9:03 köper dorr för 120 kr (827 kr)
- 9:09 gå till skrivaren (25 m) (827 kr)
- 9:11 printar Dörr (2 delar) (827 kr)
- 9:45 plockar 10 skräp på gården (bär max 10) (827 kr)
- 9:52 gå till kvarnen (33 m) (827 kr)
- 9:53 gå till skrivaren (1 m) (827 kr)
- 9:53 tar ut 1 st ur skrivaren (827 kr)
- 9:58 gå till skjulet (21 m) (827 kr)
- 10:09 gå till sängen (1 m) (827 kr)

</details>

## Dag 3

| Tid | Källa | Vem | Text |
|---|---|---|---|
| 10:12 | vara | ali | ingen |
| 10:12 | händelse | malKlart | id=sov2 del=Dag 2 – Tippen bredvid nasta=rolf1-brev |
| 10:12 | bekräftelse | du | plats |
| 10:12 | vara | ali | kruka |
| 10:12 | MÅL |  | Vänta på sopbilen. Den lämnar något. |
| 0:01 | händelse | dagenBorjar | dag=3 |
| 0:01 | meddelande | du | 19 dagar till jul. Utan tak regnar det in i natt. |
| 0:01 | dagbokkort | du | En skrivare till och taket · 19 dagar till jul. Utan tak regnar det in i natt. |
| 0:01 | röst | du | 19 dagar till jul. En skrivare till och taket. Utan tak regnar det in i natt. · STORY |
| 0:08 | väntar | notis:morgon | Ali vill ha idag: Blomkruka · +50 % |
| 0:08 | händelse | morgonkortStangt | dag=3 |
| 0:08 | målruta |  | Vänta på sopbilen. Den lämnar något. |
| 0:14 | sak | du | (nytt mål i rutan) |
| 0:14 | pil |  | Vänta på sopbilen. Den lämnar något. |
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
| 0:28 | sak | rolf | Den funkar! Hä. Ta så mycke skräp du vill. /Rolf​ |
| 0:28 | lapp | Brev från Rolf | Den funkar! Hä. Ta så mycke skräp du vill. /Rolf​ |
| 0:28 | röst | rolf | Den funkar! Hä. Ta så mycke skräp du vill. /Rolf​ · STORY |
| 0:28 | paket |  | tanke |
| 0:28 | tanke | du | Rolfs tipp. Hela högen. |
| 0:28 | väntar | du | Rolfs tipp. Hela högen. |
| 0:28 | monterat | du | byggsats:tippnyckel |
| 0:28 | händelse | monterat | sak=tippnyckel |
| 0:29 | scenInfo | du | Kameran sveper över tippen |
| 0:32 | klar | rolf | Den funkar! Hä. Ta så mycke skräp du vill. /Rolf​ |
| 0:32 | händelse | brevLast | id=rolftack:0 |
| 0:33 | tanke | du | …Det här räcker i hundra år. |
| 0:33 | väntar | du | …Det här räcker i hundra år. |
| 0:33 | sak | du | Rolfs tipp. Hela högen. |
| 0:33 | kvitto-visas | du | Rolfs tipp. Hela högen. |
| 0:33 | notis | tanke | 💭 Rolfs tipp. Hela högen. |
| 0:33 | röst | du | Rolfs tipp. Hela högen. · REAKTION |
| 0:33 | skratt | du | falsk tuta |
| 0:36 | klar | du | Rolfs tipp. Hela högen. |
| 0:39 | händelse | printStart | sak=kruka |
| 0:42 | paket |  | tanke |
| 0:42 | tanke | du | En toffla. Bara en. |
| 0:42 | väntar | du | En toffla. Bara en. |
| 0:42 | skratt | du | kvarnen spottar |
| 0:45 | toast | guld | ✅ |
| 0:45 | händelse | printKlar | sak=kruka n=12 |
| 0:45 | händelse | tagitUrPrint | sak=kruka n=1 |
| 0:45 | sak | du | …Det här räcker i hundra år. |
| 0:45 | notis | tanke | 💭 …Det här räcker i hundra år. |
| 0:45 | röst | du | …Det här räcker i hundra år. · STORY |
| 0:48 | klar | du | …Det här räcker i hundra år. |
| 0:51 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 0:51 | röst | ali | Jag har stått här sedan sex i morse. Vad vill du? · STORY |
| 0:51 | butiksbubbla | ali | Jag har stått här sedan sex i morse. Vad vill du? |
| 0:53 | händelse | salt | sak=kruka n=1 |
| 0:53 | aliSalt | ali | 105 |
| 0:53 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 0:53 | butiksbubbla | ali | Dina krukor säljer. Tanterna i kvarteret älskar dem. |
| 0:53 | röst | ali | Dina krukor säljer. Tanterna i kvarteret älskar dem. · STORY |
| 0:57 | skratt | du | falsk tuta |
| 1:03 | händelse | printStart | sak=kruka |
| 1:05 | struken | du | En toffla. Bara en. |
| 1:08 | toast | guld | ✅ |
| 1:08 | händelse | printKlar | sak=kruka n=13 |
| 1:08 | händelse | tagitUrPrint | sak=kruka n=1 |
| 1:13 | väntar | ali | Kaktusen hälsar. Han heter Ahmed. |
| 1:13 | sak | ali | Kaktusen hälsar. Han heter Ahmed. |
| 1:13 | röst | ali | Kaktusen hälsar. Han heter Ahmed. · SMÅPRAT |
| 1:14 | bubbla |  | Kaktusen hälsar. Han heter Ahmed. |
| 1:14 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 1:16 | händelse | salt | sak=kruka n=1 |
| 1:16 | aliSalt | ali | 105 |
| 1:16 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 1:16 | klar | ali | Kaktusen hälsar. Han heter Ahmed. |
| 1:26 | händelse | printStart | sak=kruka |
| 1:26 | paket |  | tanke |
| 1:26 | tanke | du | Kajsa. Ut ur skrivaren. Nu. |
| 1:26 | väntar | du | Kajsa. Ut ur skrivaren. Nu. |
| 1:26 | skratt | du | Kajsa i skrivaren |
| 1:27 | sak | du | Kajsa. Ut ur skrivaren. Nu. |
| 1:27 | notis | tanke | 💭 Kajsa. Ut ur skrivaren. Nu. |
| 1:27 | röst | du | Kajsa. Ut ur skrivaren. Nu. · REAKTION |
| 1:30 | klar | du | Kajsa. Ut ur skrivaren. Nu. |
| 1:31 | toast | guld | ✅ |
| 1:31 | händelse | printKlar | sak=kruka n=14 |
| 1:32 | händelse | tagitUrPrint | sak=kruka n=1 |
| 1:37 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 1:39 | händelse | salt | sak=kruka n=1 |
| 1:39 | aliSalt | ali | 105 |
| 1:39 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 1:48 | väntar | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått en DÖRR. Och vindsnurra till skjultaket. Mer säger jag inte. Gunnar vet. |
| 1:48 | radio | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått en DÖRR. Och vindsnurra till skjultaket. Mer säger jag inte. Gunnar vet. |
| 1:48 | skratt | du | Radio-Kjelle |
| 1:48 | sak | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått en DÖRR. Och vindsnurra till skjultaket. Mer säger jag inte. Gunnar vet. |
| 1:48 | notis |  | 📻 Radio Tippen: Radio Tippen, Kjelle här. Skjulet vid tippen har fått en DÖRR. Och vindsnurra till skjultaket. Mer säger jag inte. Gunnar vet. |
| 1:48 | röst | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått en DÖRR. Och vindsnurra till skjultaket. Mer säger jag inte. Gunnar vet. · REAKTION |
| 1:49 | händelse | printStart | sak=kruka |
| 1:55 | toast | guld | ✅ |
| 1:55 | händelse | printKlar | sak=kruka n=15 |
| 1:55 | händelse | tagitUrPrint | sak=kruka n=1 |
| 1:58 | klar | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått en DÖRR. Och vindsnurra till skjultaket. Mer säger jag inte. Gunnar vet. |
| 2:01 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 2:02 | händelse | salt | sak=kruka n=1 |
| 2:02 | aliSalt | ali | 105 |
| 2:02 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 2:12 | händelse | printStart | sak=kruka |
| 2:18 | toast | guld | ✅ |
| 2:18 | händelse | printKlar | sak=kruka n=16 |
| 2:31 | händelse | tagitUrPrint | sak=kruka n=1 |
| 2:37 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 2:39 | händelse | salt | sak=kruka n=1 |
| 2:39 | aliSalt | ali | 105 |
| 2:39 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 2:49 | händelse | printStart | sak=kruka |
| 2:51 | väntar | värld:TUUT TUUT! | TUUT TUUT! |
| 2:52 | sak | värld:TUUT TUUT! | TUUT TUUT! |
| 2:52 | bubbla |  | TUUT TUUT! |
| 2:55 | klar | värld:TUUT TUUT! | TUUT TUUT! |
| 2:55 | toast | guld | ✅ |
| 2:55 | händelse | printKlar | sak=kruka n=17 |
| 2:55 | händelse | tagitUrPrint | sak=kruka n=1 |
| 3:01 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 3:02 | händelse | salt | sak=kruka n=1 |
| 3:02 | aliSalt | ali | 105 |
| 3:02 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 3:05 | skratt | du | falsk tuta |
| 3:10 | väntar | mamma | Var är du? |
| 3:12 | händelse | printStart | sak=kruka |
| 3:13 | paket |  | ge |
| 3:13 | väntar |  | (läget ändras) |
| 3:14 | sak |  | (läget ändras) |
| 3:14 | brev | rolf | rolf:1 |
| 3:14 | klar |  | (läget ändras) |
| 3:18 | toast | guld | ✅ |
| 3:18 | händelse | printKlar | sak=kruka n=18 |
| 3:18 | händelse | tagitUrPrint | sak=kruka n=1 |
| 3:24 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 3:25 | händelse | salt | sak=kruka n=1 |
| 3:25 | aliSalt | ali | 105 |
| 3:25 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 3:26 | skratt | du | falsk tuta |
| 3:35 | väntar | rolf | Nämen. Kajsa knuffa ner min flasköppnare i tippen. Kan du göra en ny, mä magnet? /Rolf​ |
| 3:35 | paket |  | ge |
| 3:35 | väntar |  | (läget ändras) |
| 3:35 | sak | rolf | Nämen. Kajsa knuffa ner min flasköppnare i tippen. Kan du göra en ny, mä magnet? /Rolf​ |
| 3:35 | lapp | Brev från Rolf | Nämen. Kajsa knuffa ner min flasköppnare i tippen. Kan du göra en ny, mä magnet? /Rolf​ |
| 3:35 | röst | rolf | Nämen. Kajsa knuffa ner min flasköppnare i tippen. Kan du göra en ny, mä magnet? /Rolf​ · STORY |
| 3:35 | händelse | malKlart | id=rolf1-brev del=Dag 3 – En skrivare till och taket nasta=n2-hamta-skrap |
| 3:35 | bekräftelse | du | plats |
| 3:35 | väntar | du | Nyckeln till tippen. Där ligger skräpet i högar. |
| 3:35 | MÅL |  | Hämta 5 skräp på soptippen |
| 3:38 | målruta |  | Hämta 5 skräp på soptippen |
| 3:40 | händelse | malKlart | id=n2-hamta-skrap del=Dag 3 – En skrivare till och taket nasta=rolf1-printa |
| 3:40 | bekräftelse | du | plats |
| 3:40 | väntar | du | Printa flasköppnare med magnet. |
| 3:40 | MÅL |  | Printa flasköppnare med magnet |
| 3:42 | tanke | du | Fastpressad. Den sitter som i betong. |
| 3:42 | väntar | du | Fastpressad. Den sitter som i betong. |
| 3:42 | tanke | du | En hel kanot. Kvarnen skulle äta upp sig själv. |
| 3:42 | struken | du | Fastpressad. Den sitter som i betong. |
| 3:42 | väntar | du | En hel kanot. Kvarnen skulle äta upp sig själv. |
| 3:42 | målruta |  | Printa flasköppnare med magnet |
| 3:43 | klar | rolf | Nämen. Kajsa knuffa ner min flasköppnare i tippen. Kan du göra en ny, mä magnet? /Rolf​ |
| 3:43 | händelse | brevLast | id=rolf:1 |
| 3:44 | kvittens-bock |  | ✓ Hämta 5 skräp på soptippen |
| 3:45 | struken | du | Nyckeln till tippen. Där ligger skräpet i högar. |
| 3:45 | sak | du | Printa flasköppnare med magnet. |
| 3:45 | pil |  | Printa flasköppnare med magnet |
| 3:45 | röst | du | Printa flasköppnare med magnet. · MÅL |
| 3:45 | nick |  | nick:33 |
| 3:47 | klar | du | Printa flasköppnare med magnet. |
| 3:49 | sak |  | (läget ändras) |
| 3:49 | klar |  | (läget ändras) |
| 3:52 | händelse | printStart | sak=flaskoppnare |
| 3:52 | händelse | malKlart | id=rolf1-printa del=Dag 3 – En skrivare till och taket nasta=rolf1-ge |
| 3:52 | bekräftelse | du | plats |
| 3:52 | väntar | du | Ge Rolf flasköppnare med magnet. |
| 3:52 | målruta |  | Ge Rolf flasköppnare med magnet |
| 3:52 | MÅL |  | Ge Rolf flasköppnare med magnet |
| 3:52 | sak | du | Ge Rolf flasköppnare med magnet. |
| 3:52 | pil |  | Ge Rolf flasköppnare med magnet |
| 3:52 | röst | du | Ge Rolf flasköppnare med magnet. · MÅL |
| 3:55 | klar | du | Ge Rolf flasköppnare med magnet. |
| 3:56 | toast | guld | ✅ |
| 3:56 | händelse | printKlar | sak=flaskoppnare n=1 |
| 3:56 | kvittens-bock |  | ✓ Printa flasköppnare med magnet |
| 3:57 | händelse | tagitUrPrint | sak=flaskoppnare n=1 |
| 3:57 | sak | du | En hel kanot. Kvarnen skulle äta upp sig själv. |
| 3:57 | notis | tanke | 💭 En hel kanot. Kvarnen skulle äta upp sig själv. |
| 3:57 | röst | du | En hel kanot. Kvarnen skulle äta upp sig själv. · REAKTION |
| 3:58 | hjälp | kontroll | E: Ryggsäcken och kistan |
| 4:00 | väntar | mamma | Jag har städat ditt rum. Det tog tre dagar. Jag hittade en macka från i somras. En macka. |
| 4:00 | väntar | bud | (tips) |
| 4:01 | klar | du | En hel kanot. Kvarnen skulle äta upp sig själv. |
| 4:03 | sak | bud | (tips) |
| 4:04 | väntar | du | Klart! Nu lägger jag den i Rolfs brevlåda vid grinden. |
| 4:05 | klar | bud | (tips) |
| 4:07 | sak | du | Klart! Nu lägger jag den i Rolfs brevlåda vid grinden. |
| 4:07 | röst | du | Klart! Nu lägger jag den i Rolfs brevlåda vid grinden. · MÅL |
| 4:11 | händelse | lagtIPostlada | sak=flaskoppnare rolf=1 jobb=false |
| 4:11 | händelse | malKlart | id=rolf1-ge del=Dag 3 – En skrivare till och taket nasta=kopBatteri |
| 4:11 | bekräftelse | du | plats |
| 4:11 | väntar | du | Ali har ett gammalt bilbatteri. Då sparar jag strömmen. |
| 4:11 | målruta |  | Printa och sälj |
| 4:11 | MÅL |  | Printa och sälj |
| 4:11 | klar | du | Klart! Nu lägger jag den i Rolfs brevlåda vid grinden. |
| 4:13 | sak | du | Ali har ett gammalt bilbatteri. Då sparar jag strömmen. |
| 4:13 | pil |  | Printa och sälj |
| 4:13 | notis | tanke | 💭 Ali har ett gammalt bilbatteri. Då sparar jag strömmen. |
| 4:13 | röst | du | Ali har ett gammalt bilbatteri. Då sparar jag strömmen. · MÅL |
| 4:15 | kvittens-bock |  | ✓ Ge Rolf flasköppnare med magnet |
| 4:18 | klar | du | Ali har ett gammalt bilbatteri. Då sparar jag strömmen. |
| 4:20 | struken | mamma | Var är du? |
| 4:23 | händelse | printStart | sak=kruka |
| 4:28 | toast | guld | ✅ |
| 4:28 | händelse | printKlar | sak=kruka n=19 |
| 4:28 | händelse | tagitUrPrint | sak=kruka n=1 |
| 4:31 | strömdipp | du | cykelbatteri |
| 4:31 | paket |  | tanke |
| 4:31 | tanke | du | Den stannar. Strömmen räcker inte till alla maskiner. |
| 4:31 | väntar | du | Den stannar. Strömmen räcker inte till alla maskiner. |
| 4:31 | sak | du | Den stannar. Strömmen räcker inte till alla maskiner. |
| 4:31 | notis | tanke | 💭 Den stannar. Strömmen räcker inte till alla maskiner. |
| 4:31 | röst | du | Den stannar. Strömmen räcker inte till alla maskiner. · STORY |
| 4:35 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 4:35 | klar | du | Den stannar. Strömmen räcker inte till alla maskiner. |
| 4:36 | händelse | salt | sak=kruka n=1 |
| 4:36 | aliSalt | ali | 105 |
| 4:36 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 4:44 | händelse | printStart | sak=kruka |
| 4:44 | toast | fel | Ingen ström – maskinerna drar mer än du får in. Bygg en solpanel |
| 4:48 | upplåst | strom | cykelbatteri |
| 4:48 | brott | UPPLÅST | cykelbatteri (strom 41 av 15) |
| 4:48 | händelse | upplast | id=cykelbatteri flask=strom |
| 4:48 | paket |  | tanke → sms |
| 4:48 | tanke | du | Powerbanken räcker till en nyckelring. Sen är det trampa igen. |
| 4:48 | väntar | du | Powerbanken räcker till en nyckelring. Sen är det trampa igen. |
| 4:48 | väntar | ali | Ali här. Bilbatteriet ur min gamla Volvo står i lagret. Det sparar mer ström än powerbanken. |
| 4:48 | sak | du | Powerbanken räcker till en nyckelring. Sen är det trampa igen. |
| 4:48 | notis | tanke | 💭 Powerbanken räcker till en nyckelring. Sen är det trampa igen. |
| 4:48 | röst | du | Powerbanken räcker till en nyckelring. Sen är det trampa igen. · STORY |
| 4:54 | brott | DUBBEL UPPMANING | "trampa" på 2 ställen: pekrutan, notisen |
| 4:54 | klar | du | Powerbanken räcker till en nyckelring. Sen är det trampa igen. |
| 5:02 | sak | ali | Ali här. Bilbatteriet ur min gamla Volvo står i lagret. Det sparar mer ström än powerbanken. |
| 5:02 | sms | ali | Ali här. Bilbatteriet ur min gamla Volvo står i lagret. Det sparar mer ström än powerbanken. |
| 5:02 | sms-bubbla | ali | Ali här. Bilbatteriet ur min gamla Volvo står i lagret. Det sparar mer ström än powerbanken. |
| 5:02 | röst | ali | Ali här. Bilbatteriet ur min gamla Volvo står i lagret. Det sparar mer ström än powerbanken. · STORY |
| 5:07 | toast | guld | ✅ |
| 5:07 | händelse | printKlar | sak=kruka n=20 |
| 5:07 | händelse | tagitUrPrint | sak=kruka n=1 |
| 5:10 | klar | ali | Ali här. Bilbatteriet ur min gamla Volvo står i lagret. Det sparar mer ström än powerbanken. |
| 5:13 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 5:15 | händelse | salt | sak=kruka n=1 |
| 5:15 | aliSalt | ali | 105 |
| 5:15 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 5:16 | väntar | rolf | Morgonbulle på kontoret me polarna. Bengt har ny keps. Vi pratade om den i en timme. Den e grön. /R |
| 5:17 | paket |  | tanke |
| 5:17 | tanke | du | Jaha, Rolf har hämtat en flasköppnare med magnet. |
| 5:17 | väntar | du | Jaha, Rolf har hämtat en flasköppnare med magnet. |
| 5:17 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 5:19 | toast | guld | 🔋 Bilbatteriet ska kopplas in på cykeln. |
| 5:19 | händelse | kopt | sak=cykelbatteri |
| 5:19 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 5:19 | röst | ali | Batteriet ur min gamla Volvo. Bilen dog 2016. Batteriet vägrade. · STORY |
| 5:19 | butiksbubbla | ali | Batteriet ur min gamla Volvo. Bilen dog 2016. Batteriet vägrade. |
| 5:26 | väntar | info:guld | 🔋 Bilbatteriet är inkopplat – skrivaren printar klart även när du slutar trampa |
| 5:26 | monterat | du | byggsats:cykelbatteri |
| 5:26 | händelse | monterat | sak=cykelbatteri |
| 5:26 | sak | info:guld | 🔋 Bilbatteriet är inkopplat – skrivaren printar klart även när du slutar trampa |
| 5:26 | kvitto-visas | info:guld | 🔋 Bilbatteriet är inkopplat – skrivaren printar klart även när du slutar trampa |
| 5:26 | toast | guld | 🔋 Bilbatteriet är inkopplat – skrivaren printar klart även när du slutar trampa |
| 5:26 | händelse | malKlart | id=kopBatteri del=Dag 3 – En skrivare till och taket nasta=ryggkorg |
| 5:26 | bekräftelse | du | plats |
| 5:26 | kvittens | du | Nu printar den klart även när jag vilar benen. |
| 5:26 | väntar | du | Nu printar den klart även när jag vilar benen. |
| 5:26 | struken | du | Jaha, Rolf har hämtat en flasköppnare med magnet. |
| 5:26 | väntar | du | Jag springer för mycket. Med en ryggkorg bär jag tio saker. |
| 5:26 | MÅL |  | Plocka skräp och mal det |
| 5:26 | upplåst | bara | ryggkorg |
| 5:26 | brott | UPPLÅST | ryggkorg (bara 7 av 3) |
| 5:26 | händelse | upplast | id=ryggkorg flask=bara |
| 5:26 | paket |  | tanke → sms |
| 5:26 | tanke | du | Säcken är full igen. Jag behöver något att bära mer i. |
| 5:26 | väntar | du | Säcken är full igen. Jag behöver något att bära mer i. |
| 5:26 | väntar | ali | Ali här. En ryggkorg. AI:n ritade den efter en bild på min mormor. Den rymmer tio. |
| 5:28 | klar | info:guld | 🔋 Bilbatteriet är inkopplat – skrivaren printar klart även när du slutar trampa |
| 5:28 | sak | du | Nu printar den klart även när jag vilar benen. |
| 5:28 | röst | du | Nu printar den klart även när jag vilar benen. · STORY |
| 5:29 | målruta |  | Bygg ryggkorgen – bär 10 skräp |
| 5:32 | klar | du | Nu printar den klart även när jag vilar benen. |
| 5:33 | sak | du | Jag springer för mycket. Med en ryggkorg bär jag tio saker. |
| 5:33 | pil |  | Bygg ryggkorgen – bär 10 skräp |
| 5:33 | notis | tanke | 💭 Jag springer för mycket. Med en ryggkorg bär jag tio saker. |
| 5:33 | röst | du | Jag springer för mycket. Med en ryggkorg bär jag tio saker. · MÅL |
| 5:33 | nick |  | nick:36 |
| 5:38 | klar | du | Jag springer för mycket. Med en ryggkorg bär jag tio saker. |
| 5:39 | väntar | värld:TUUT! Hej grannen! | TUUT! Hej grannen! |
| 5:40 | sak | du | Säcken är full igen. Jag behöver något att bära mer i. |
| 5:40 | notis | tanke | 💭 Säcken är full igen. Jag behöver något att bära mer i. |
| 5:40 | röst | du | Säcken är full igen. Jag behöver något att bära mer i. · STORY |
| 5:44 | klar | du | Säcken är full igen. Jag behöver något att bära mer i. |
| 5:45 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 5:46 | sak | ali | Ali här. En ryggkorg. AI:n ritade den efter en bild på min mormor. Den rymmer tio. |
| 5:46 | sms | ali | Ali här. En ryggkorg. AI:n ritade den efter en bild på min mormor. Den rymmer tio. |
| 5:46 | sms-bubbla | ali | Ali här. En ryggkorg. AI:n ritade den efter en bild på min mormor. Den rymmer tio. |
| 5:46 | röst | ali | Ali här. En ryggkorg. AI:n ritade den efter en bild på min mormor. Den rymmer tio. · STORY |
| 5:46 | struken | info:guld | 3D-modell köpt – printa ryggkorg |
| 5:46 | händelse | kopt | sak=ryggkorg |
| 5:46 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 5:53 | klar | ali | Ali här. En ryggkorg. AI:n ritade den efter en bild på min mormor. Den rymmer tio. |
| 5:55 | händelse | printStart | sak=byggsats:ryggkorg |
| 6:01 | sak | värld:TUUT! Hej grannen! | TUUT! Hej grannen! |
| 6:01 | bubbla |  | TUUT! Hej grannen! |
| 6:01 | toast | bra | Del 1 av 2 klar |
| 6:04 | klar | värld:TUUT! Hej grannen! | TUUT! Hej grannen! |
| 6:07 | händelse | printKlar | sak=byggsats:ryggkorg n=1 |
| 6:07 | toast | guld | ✅ |
| 6:07 | väntar | info:guld | Ryggkorg ska jag ha på mig. |
| 6:07 | händelse | tagitUrPrint | sak=byggsats:ryggkorg n=1 |
| 6:07 | paket |  | sms |
| 6:07 | väntar | ali | Ali här. Du printade Ryggkorg från min ritning. Och det FUNKAR? Jag har bara sett sånt på YouTube. |
| 6:07 | sak | info:guld | Ryggkorg ska jag ha på mig. |
| 6:07 | kvitto-visas | info:guld | Ryggkorg ska jag ha på mig. |
| 6:07 | toast | guld | Ryggkorg ska jag ha på mig. |
| 6:09 | klar | info:guld | Ryggkorg ska jag ha på mig. |
| 6:11 | väntar | info:guld | 🧺 Ryggkorgen sitter på! Nu bär jag 16 skräp. |
| 6:11 | tog på | du | byggsats:ryggkorg |
| 6:11 | händelse | monterat | sak=ryggkorg |
| 6:11 | sak | info:guld | 🧺 Ryggkorgen sitter på! Nu bär jag 16 skräp. |
| 6:11 | kvitto-visas | info:guld | 🧺 Ryggkorgen sitter på! Nu bär jag 16 skräp. |
| 6:11 | toast | guld | 🧺 Ryggkorgen sitter på! Nu bär jag 16 skräp. |
| 6:11 | händelse | malKlart | id=ryggkorg del=Dag 3 – En skrivare till och taket nasta=n2-bygg-arbetsbord |
| 6:11 | bekräftelse | du | plats |
| 6:11 | väntar | du | Ett arbetsbord bredvid skrivaren. Skrivare M ska stå på det. |
| 6:11 | MÅL |  | Bygg ett arbetsbord |
| 6:13 | klar | info:guld | 🧺 Ryggkorgen sitter på! Nu bär jag 16 skräp. |
| 6:13 | målruta |  | Bygg ett arbetsbord |
| 6:15 | kvittens-bock |  | ✓ Bygg ryggkorgen – bär 10 skräp |
| 6:15 | sak | du | Ett arbetsbord bredvid skrivaren. Skrivare M ska stå på det. |
| 6:15 | pil |  | Bygg ett arbetsbord |
| 6:15 | notis | tanke | 💭 Ett arbetsbord bredvid skrivaren. Skrivare M ska stå på det. |
| 6:15 | röst | du | Ett arbetsbord bredvid skrivaren. Skrivare M ska stå på det. · MÅL |
| 6:16 | nick |  | nick:37 |
| 6:17 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 6:19 | struken | info:guld | 3D-modell köpt – printa arbetsbord |
| 6:19 | händelse | kopt | sak=bord |
| 6:19 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 6:20 | klar | du | Ett arbetsbord bredvid skrivaren. Skrivare M ska stå på det. |
| 6:27 | händelse | printStart | sak=byggsats:bord |
| 6:31 | sak | ali | Ali här. Du printade Ryggkorg från min ritning. Och det FUNKAR? Jag har bara sett sånt på YouTube. |
| 6:31 | sms | ali | Ali här. Du printade Ryggkorg från min ritning. Och det FUNKAR? Jag har bara sett sånt på YouTube. |
| 6:31 | sms-bubbla | ali | Ali här. Du printade Ryggkorg från min ritning. Och det FUNKAR? Jag har bara sett sånt på YouTube. |
| 6:31 | röst | ali | Ali här. Du printade Ryggkorg från min ritning. Och det FUNKAR? Jag har bara sett sånt på YouTube. · REAKTION |
| 6:34 | toast | bra | Del 1 av 3 klar |
| 6:39 | klar | ali | Ali här. Du printade Ryggkorg från min ritning. Och det FUNKAR? Jag har bara sett sånt på YouTube. |
| 6:42 | toast | bra | Del 2 av 3 klar |
| 6:49 | händelse | printKlar | sak=byggsats:bord n=1 |
| 6:49 | toast | guld | ✅ |
| 6:49 | händelse | tagitUrPrint | sak=byggsats:bord n=1 |
| 6:52 | händelse | placerat | sak=bord |
| 6:52 | händelse | malKlart | id=n2-bygg-arbetsbord del=Dag 3 – En skrivare till och taket nasta=n2-bygg-skrivare-m |
| 6:52 | bekräftelse | du | plats |
| 6:52 | väntar | du | Skrivare M på bordet. Två skrivare, dubbelt så mycket. |
| 6:52 | målruta |  | Printa och sälj |
| 6:52 | MÅL |  | Printa och sälj |
| 6:52 | upplåst | skrivare | skrivare2 |
| 6:52 | brott | UPPLÅST | skrivare2 (skrivare 411 av 60) |
| 6:52 | händelse | upplast | id=skrivare2 flask=skrivare |
| 6:52 | paket |  | tanke → sms |
| 6:52 | tanke | du | Kvarnen hinner mer än skrivaren. Jag behöver en skrivare till. |
| 6:52 | väntar | du | Kvarnen hinner mer än skrivaren. Jag behöver en skrivare till. |
| 6:52 | väntar | ali | Ali här. Skrivare M har kommit. Två och en halv gånger snabbare. Snabbare än jag. Jag har inte varit snabb sedan 1998. |
| 6:52 | sak | du | Skrivare M på bordet. Två skrivare, dubbelt så mycket. |
| 6:52 | pil |  | Bygg Skrivare M på bordet |
| 6:52 | notis | tanke | 💭 Skrivare M på bordet. Två skrivare, dubbelt så mycket. |
| 6:52 | röst | du | Skrivare M på bordet. Två skrivare, dubbelt så mycket. · MÅL |
| 6:52 | nick |  | nick:38 |
| 6:56 | kvittens-bock |  | ✓ Bygg ett arbetsbord |
| 6:56 | klar | du | Skrivare M på bordet. Två skrivare, dubbelt så mycket. |
| 6:58 | sak | du | Kvarnen hinner mer än skrivaren. Jag behöver en skrivare till. |
| 6:58 | notis | tanke | 💭 Kvarnen hinner mer än skrivaren. Jag behöver en skrivare till. |
| 6:58 | röst | du | Kvarnen hinner mer än skrivaren. Jag behöver en skrivare till. · STORY |
| 7:03 | klar | du | Kvarnen hinner mer än skrivaren. Jag behöver en skrivare till. |
| 7:10 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 7:12 | skratt | du | Alis dyr-pling |
| 7:12 | struken | info:guld | 3D-modell köpt – printa skrivare M |
| 7:12 | händelse | kopt | sak=skrivare2 |
| 7:12 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 7:12 | struken | ali | Ali här. Skrivare M har kommit. Två och en halv gånger snabbare. Snabbare än jag. Jag har inte varit snabb sedan 1998. |
| 7:12 | skratt | du | falsk tuta |
| 7:24 | väntar | mamma | Jag har städat ditt rum. Det tog tre dagar. Jag hittade en macka från i somras. En macka. |
| 7:24 | tanke | du | Tratten är stor som en kaffekopp. Tunnan är stor som jag. |
| 7:24 | väntar | du | Tratten är stor som en kaffekopp. Tunnan är stor som jag. |
| 7:24 | tanke | du | En husvagn mitt i tippen. Och grinden är låst. |
| 7:24 | struken | du | Tratten är stor som en kaffekopp. Tunnan är stor som jag. |
| 7:24 | väntar | du | En husvagn mitt i tippen. Och grinden är låst. |
| 7:24 | sak | du | En husvagn mitt i tippen. Och grinden är låst. |
| 7:24 | notis | tanke | 💭 En husvagn mitt i tippen. Och grinden är låst. |
| 7:24 | röst | du | En husvagn mitt i tippen. Och grinden är låst. · REAKTION |
| 7:28 | klar | du | En husvagn mitt i tippen. Och grinden är låst. |
| 7:34 | väntar | värld:TUUT! Tjena! | TUUT! Tjena! |
| 7:36 | händelse | printStart | sak=byggsats:skrivare2 |
| 7:45 | toast | bra | Del 1 av 5 klar |
| 7:54 | struken | värld:TUUT! Tjena! | TUUT! Tjena! |
| 7:54 | toast | bra | Del 2 av 5 klar |
| 8:03 | toast | bra | Del 3 av 5 klar |
| 8:11 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 8:18 | tanke | du | Hård plast. Lilla kvarnen skulle explodera. Eller jag. |
| 8:18 | väntar | du | Hård plast. Lilla kvarnen skulle explodera. Eller jag. |
| 8:18 | sak | du | Hård plast. Lilla kvarnen skulle explodera. Eller jag. |
| 8:18 | notis | tanke | 💭 Hård plast. Lilla kvarnen skulle explodera. Eller jag. |
| 8:18 | röst | du | Hård plast. Lilla kvarnen skulle explodera. Eller jag. · REAKTION |
| 8:21 | toast | bra | Del 4 av 5 klar |
| 8:22 | klar | du | Hård plast. Lilla kvarnen skulle explodera. Eller jag. |
| 8:24 | struken | mamma | Jag har städat ditt rum. Det tog tre dagar. Jag hittade en macka från i somras. En macka. |
| 8:30 | händelse | printKlar | sak=byggsats:skrivare2 n=1 |
| 8:30 | toast | guld | ✅ |
| 8:32 | händelse | tagitUrPrint | sak=byggsats:skrivare2 n=1 |
| 8:34 | händelse | placerat | sak=skrivare2 |
| 8:34 | paket |  | tanke |
| 8:34 | tanke | du | Den här måste stå i linjen vid kvarnen, annars når inte slangen. |
| 8:34 | väntar | du | Den här måste stå i linjen vid kvarnen, annars når inte slangen. |
| 8:34 | händelse | malKlart | id=n2-bygg-skrivare-m del=Dag 3 – En skrivare till och taket nasta=n2-lagg-plattak-skjulet |
| 8:34 | bekräftelse | du | plats |
| 8:34 | lapp-kö | 📱 Storebror | VA?! Du har byggt en skrivare TILL?? Du har typ en printfarm nu. Okej. Det är faktiskt ganska ballt. 🔥 |
| 8:34 | väntar | bror | VA?! Du har byggt en skrivare TILL?? Du har typ en printfarm nu. Okej. Det är faktiskt ganska ballt. 🔥 |
| 8:34 | väntar | du | Det regnar in. Plåt på taket, så slipper jag sova i en pöl. |
| 8:35 | MÅL |  | Lägg plåttak på skjulet |
| 8:35 | målruta |  | Lägg plåttak på skjulet |
| 8:35 | sak | du | Det regnar in. Plåt på taket, så slipper jag sova i en pöl. |
| 8:35 | pil |  | Lägg plåttak på skjulet |
| 8:35 | notis | tanke | 💭 Det regnar in. Plåt på taket, så slipper jag sova i en pöl. |
| 8:35 | röst | du | Det regnar in. Plåt på taket, så slipper jag sova i en pöl. · MÅL |
| 8:35 | nick |  | nick:39 |
| 8:38 | kvittens-bock |  | ✓ Bygg Skrivare M på bordet |
| 8:40 | klar | du | Det regnar in. Plåt på taket, så slipper jag sova i en pöl. |
| 8:47 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 8:48 | struken | info:guld | 3D-modell köpt – printa plåttak |
| 8:48 | händelse | kopt | sak=tak |
| 8:48 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 8:57 | händelse | printStart | sak=byggsats:tak |
| 8:57 | toast | bra | 🔗 Slangen kopplad |
| 9:01 | toast | bra | Del 1 av 3 klar |
| 9:05 | toast | bra | Del 2 av 3 klar |
| 9:06 | toast | fel | Ingen ström – trampa cykeln |
| 9:17 | händelse | printKlar | sak=byggsats:tak n=1 |
| 9:17 | toast | guld | ✅ |
| 9:17 | händelse | tagitUrPrint | sak=byggsats:tak n=1 |
| 9:21 | väntar | info:guld | Plåttak på plats! Trivsel +12 |
| 9:21 | sak | info:guld | Plåttak på plats! Trivsel +12 |
| 9:21 | kvitto-visas | info:guld | Plåttak på plats! Trivsel +12 |
| 9:21 | toast | guld | Plåttak på plats! Trivsel +12 |
| 9:21 | händelse | malKlart | id=n2-lagg-plattak-skjulet del=Dag 3 – En skrivare till och taket nasta=sov3 |
| 9:21 | paket |  | lapp |
| 9:21 | väntar | du | Nu vet Rolf att jag bor HÄR. Benen orkar inte trampa mer. |
| 9:21 | bekräftelse | du | plats |
| 9:21 | MÅL |  | Klart för idag – sov när du vill |
| 9:22 | skratt | du | däcket rullar iväg |
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
| 9:29 | skratt | du | falsk tuta |
| 9:32 | nattkort | du | 🌙 19 dagar kvar. God natt. zzz… Nu vet Rolf att jag bor HÄR. Benen orkar inte trampa mer. DAGENS PRINTAR Blomkruka × 9 Flasköppnare med magnet × 1 Totalt 10 pr |

<details><summary>Botens handlingar dag 3</summary>

- 0:00 — dag 3 börjar — (827 kr)
- 0:08 popup: "FORTSÄTT" (827 kr)
- 0:22 gå till Rolfs postlåda (28 m) (827 kr)
- 0:27 panel: "Rolfs postlåda
Det här låg i l" (887 kr)
- 0:28 gå till sätt nyckeln i låset (3 m) (887 kr)
- 0:36 tjänar pengar till väntar på sopbilen (BO): 887/947 kr → printar blomkruka (105 kr) (887 kr)
- 0:38 gå till skrivaren (7 m) (887 kr)
- 0:39 printar Blomkruka (887 kr)
- 0:45 tar ut 1 st ur skrivaren (887 kr)
- 0:51 gå till Ali (28 m) (887 kr)
- 0:51 öppnar Alis butik – sälja (887 kr)
- 0:53 säljer hos Ali: +105 kr (992 kr)
- 0:56 tjänar pengar till väntar på sopbilen (BO): 992/1052 kr → printar blomkruka (105 kr) (992 kr)
- 1:01 gå till skrivaren (25 m) (992 kr)
- 1:03 printar Blomkruka (992 kr)
- 1:09 tar ut 1 st ur skrivaren (992 kr)
- 1:14 gå till Ali (25 m) (992 kr)
- 1:14 öppnar Alis butik – sälja (992 kr)
- 1:16 säljer hos Ali: +105 kr (1097 kr)
- 1:19 tjänar pengar till väntar på sopbilen (BO): 1097/1157 kr → printar blomkruka (105 kr) (1097 kr)
- 1:24 gå till skrivaren (25 m) (1097 kr)
- 1:26 printar Blomkruka (1097 kr)
- 1:32 tar ut 1 st ur skrivaren (1097 kr)
- 1:37 gå till Ali (25 m) (1097 kr)
- 1:37 öppnar Alis butik – sälja (1097 kr)
- 1:39 säljer hos Ali: +105 kr (1202 kr)
- 1:42 tjänar pengar till väntar på sopbilen (BO): 1202/1262 kr → printar blomkruka (105 kr) (1202 kr)
- 1:48 gå till skrivaren (25 m) (1202 kr)
- 1:49 printar Blomkruka (1202 kr)
- 1:55 tar ut 1 st ur skrivaren (1202 kr)
- 2:01 gå till Ali (25 m) (1202 kr)
- 2:01 öppnar Alis butik – sälja (1202 kr)
- 2:02 säljer hos Ali: +105 kr (1307 kr)
- 2:06 tjänar pengar till väntar på sopbilen (BO): 1307/1367 kr → printar blomkruka (105 kr) (1307 kr)
- 2:11 gå till skrivaren (25 m) (1307 kr)
- 2:12 printar Blomkruka (1307 kr)
- 2:24 plockar 1 skräp på gården (bär max 10) (1307 kr)
- 2:30 gå till kvarnen (32 m) (1307 kr)
- 2:31 gå till skrivaren (1 m) (1307 kr)
- 2:31 tar ut 1 st ur skrivaren (1307 kr)
- 2:37 gå till Ali (28 m) (1307 kr)
- 2:37 öppnar Alis butik – sälja (1307 kr)
- 2:39 säljer hos Ali: +105 kr (1412 kr)
- 2:42 tjänar pengar till väntar på sopbilen (BO): 1412/1472 kr → printar blomkruka (105 kr) (1412 kr)
- 2:48 gå till skrivaren (25 m) (1412 kr)
- 2:49 printar Blomkruka (1412 kr)
- 2:55 tar ut 1 st ur skrivaren (1412 kr)
- 3:01 gå till Ali (25 m) (1412 kr)
- 3:01 öppnar Alis butik – sälja (1412 kr)
- 3:02 säljer hos Ali: +105 kr (1517 kr)
- 3:06 tjänar pengar till väntar på sopbilen (BO): 1517/1577 kr → printar blomkruka (105 kr) (1517 kr)
- 3:11 gå till skrivaren (25 m) (1517 kr)
- 3:12 printar Blomkruka (1517 kr)
- 3:19 tar ut 1 st ur skrivaren (1517 kr)
- 3:24 gå till Ali (25 m) (1517 kr)
- 3:24 öppnar Alis butik – sälja (1517 kr)
- 3:26 säljer hos Ali: +105 kr (1622 kr)
- 3:35 gå till Rolfs postlåda (31 m) (1622 kr)
- 3:44 plockar 10 skräp på tippen (bär max 10) (1622 kr)
- 3:46 gå till kvarnen (8 m) (1622 kr)
- 3:51 gå till skrivaren (3 m) (1622 kr)
- 3:52 printar Flasköppnare med magnet (1622 kr)
- 3:57 tar ut 1 st ur skrivaren (1622 kr)
- 4:09 valj flaskoppnare: true, vald flaskoppnare, post {"l":null,"tr":null,"tm":[]}, nummer false (1622 kr)
- 4:11 gå till Rolfs postlåda (6 m) (1622 kr)
- 4:20 tjänar pengar till väntar på flaskhalsen för cykelbatteri: 1622/1662 kr → printar blomkruka (105 kr) (1622 kr)
- 4:21 gå till skrivaren (6 m) (1622 kr)
- 4:23 printar Blomkruka (1622 kr)
- 4:29 tar ut 1 st ur skrivaren (1622 kr)
- 4:35 gå till Ali (28 m) (1622 kr)
- 4:35 öppnar Alis butik – sälja (1622 kr)
- 4:37 säljer hos Ali: +105 kr (1727 kr)
- 4:38 tjänar pengar till väntar på flaskhalsen för cykelbatteri: 1727/1767 kr → printar blomkruka (105 kr) (1727 kr)
- 4:43 gå till skrivaren (25 m) (1727 kr)
- 4:44 printar Blomkruka (1727 kr)
- 4:45 gå till cykeln (1 m) (1727 kr)
- 5:08 tar ut 1 st ur skrivaren (1727 kr)
- 5:13 gå till Ali (25 m) (1727 kr)
- 5:13 öppnar Alis butik – sälja (1727 kr)
- 5:15 säljer hos Ali: +105 kr (1832 kr)
- 5:17 öppnar Alis butik – bilbatteriet (1832 kr)
- 5:19 köper cykelbatteri för 30 kr (1802 kr)
- 5:26 gå till koppla in bilbatteriet vid cykeln (24 m) (1802 kr)
- 5:45 gå till Ali (24 m) (1802 kr)
- 5:45 öppnar Alis butik – köpa ryggkorg (1802 kr)
- 5:47 köper ryggkorg för 120 kr (1682 kr)
- 5:54 gå till skrivaren (25 m) (1682 kr)
- 5:55 printar Ryggkorg (2 delar) (1682 kr)
- 6:08 tar ut 1 st ur skrivaren (1682 kr)
- 6:11 tar på ryggkorg (1682 kr)
- 6:17 gå till Ali (25 m) (1682 kr)
- 6:17 öppnar Alis butik – köpa arbetsbord (1682 kr)
- 6:20 köper bord för 120 kr (1562 kr)
- 6:26 gå till skrivaren (25 m) (1562 kr)
- 6:27 printar Arbetsbord (3 delar) (1562 kr)
- 6:50 tar ut 1 st ur skrivaren (1562 kr)
- 6:50 gå till platsen för arbetsbord (2 m) (1562 kr)
- 6:52 ställer ut arbetsbord (1562 kr)
- 7:10 gå till Ali (24 m) (1562 kr)
- 7:10 öppnar Alis butik – köpa skrivare m (1562 kr)
- 7:13 köper skrivare2 för 500 kr (1062 kr)
- 7:25 plockar 5 skräp på tippen (bär max 16) (1062 kr)
- 7:28 gå till kvarnen (10 m) (1062 kr)
- 7:35 gå till skrivaren (3 m) (1062 kr)
- 7:36 printar Skrivare M (5 delar) (1062 kr)
- 8:18 plockar 3 skräp på tippen (bär max 16) (1062 kr)
- 8:19 gå till kvarnen (8 m) (1062 kr)
- 8:32 gå till skrivaren (3 m) (1062 kr)
- 8:32 tar ut 1 st ur skrivaren (1062 kr)
- 8:33 gå till platsen för skrivare m (5 m) (1062 kr)
- 8:34 ställer ut skrivare m (1062 kr)
- 8:47 gå till Ali (24 m) (1062 kr)
- 8:47 öppnar Alis butik – köpa plåttak (1062 kr)
- 8:49 köper tak för 250 kr (812 kr)
- 8:55 gå till skrivaren (24 m) (812 kr)
- 8:57 printar Plåttak (3 delar) (812 kr)
- 9:17 tar ut 1 st ur skrivaren (812 kr)
- 9:21 gå till skjulet (17 m) (812 kr)
- 9:30 gå till sängen (1 m) (812 kr)

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
| 0:11 | väntar | foto | Tak över huvudet |
| 0:11 | paket |  | tanke |
| 0:11 | tanke | du | I natt somnar jag torr. Det börjar bli ett hem. |
| 0:11 | väntar | du | I natt somnar jag torr. Det börjar bli ett hem. |
| 0:14 | sak | du | (nytt mål i rutan) |
| 0:14 | pil |  | Vänta på sopbilen. Den lämnar något. |
| 0:14 | klar | du | (nytt mål i rutan) |
| 0:16 | sak | du | Den här måste stå i linjen vid kvarnen, annars når inte slangen. |
| 0:16 | notis | tanke | 💭 Den här måste stå i linjen vid kvarnen, annars når inte slangen. |
| 0:16 | röst | du | Den här måste stå i linjen vid kvarnen, annars når inte slangen. · STORY |
| 0:21 | klar | du | Den här måste stå i linjen vid kvarnen, annars når inte slangen. |
| 0:23 | struken | notis:🌇 Klockan är 21. Ali slår igen luckan.  | 🌇 Klockan är 21. Ali slår igen luckan. Dagens jobb är klart – gå in i skjulet och sov i sängen. |
| 0:23 | sak | notis:morgon | Ali vill ha idag: Blomkruka · +50 % |
| 0:23 | notis |  | Blomkruka · +50 % |
| 0:25 | väntar | info:bra | 🛒 4 skräp från famnen i skottkärran – kärran tar mer än famnen |
| 0:27 | klar | notis:morgon | Ali vill ha idag: Blomkruka · +50 % |
| 0:33 | väntar | rolf | PERFEKT öppnare! Kärran vid lådan ä din. Den gnisslar. Precis som ja. Skriv ditt nummer på en lapp, så slipper ja skriva brev. /Rolf |
| 0:33 | sak | info:bra | 🛒 4 skräp från famnen i skottkärran – kärran tar mer än famnen |
| 0:33 | kvitto-visas | info:bra | 🛒 4 skräp från famnen i skottkärran – kärran tar mer än famnen |
| 0:33 | toast | bra | 🛒 4 skräp från famnen i skottkärran – kärran tar mer än famnen |
| 0:35 | klar | info:bra | 🛒 4 skräp från famnen i skottkärran – kärran tar mer än famnen |
| 0:35 | väntar | bud | (tips) |
| 0:36 | händelse | printStart | sak=kruka |
| 0:37 | sak | bud | (tips) |
| 0:37 | väntar | du | En skottkärra! Jag väljer den med hjulet och kör den full med skräp. |
| 0:38 | klar | bud | (tips) |
| 0:39 | toast | guld | ✅ |
| 0:39 | händelse | printKlar | sak=kruka n=21 |
| 0:40 | händelse | tagitUrPrint | sak=kruka n=1 |
| 0:40 | sak | du | En skottkärra! Jag väljer den med hjulet och kör den full med skräp. |
| 0:40 | röst | du | En skottkärra! Jag väljer den med hjulet och kör den full med skräp. · MÅL |
| 0:46 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 0:46 | röst | ali | Kunder, kunder. Ingen ingenjör. Förutom du kanske. · STORY |
| 0:46 | butiksbubbla | ali | Kunder, kunder. Ingen ingenjör. Förutom du kanske. |
| 0:46 | klar | du | En skottkärra! Jag väljer den med hjulet och kör den full med skräp. |
| 0:48 | händelse | salt | sak=kruka n=1 |
| 0:48 | aliSalt | ali | 105 |
| 0:48 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 0:58 | sak | bror | VA?! Du har byggt en skrivare TILL?? Du har typ en printfarm nu. Okej. Det är faktiskt ganska ballt. 🔥 |
| 0:58 | sms | bror | VA?! Du har byggt en skrivare TILL?? Du har typ en printfarm nu. Okej. Det är faktiskt ganska ballt. 🔥 |
| 0:58 | sms-bubbla | bror | VA?! Du har byggt en skrivare TILL?? Du har typ en printfarm nu. Okej. Det är faktiskt ganska ballt. 🔥 |
| 0:58 | röst | bror | VA?! Du har byggt en skrivare TILL?? Du har typ en printfarm nu. Okej. Det är faktiskt ganska ballt. 🔥 · STORY |
| 1:05 | paket |  | tanke |
| 1:05 | tanke | du | En badanka. Den överlevde kvarnen. |
| 1:05 | väntar | du | En badanka. Den överlevde kvarnen. |
| 1:05 | skratt | du | kvarnen spottar |
| 1:06 | klar | bror | VA?! Du har byggt en skrivare TILL?? Du har typ en printfarm nu. Okej. Det är faktiskt ganska ballt. 🔥 |
| 1:11 | händelse | printStart | sak=kruka |
| 1:14 | toast | guld | ✅ |
| 1:14 | händelse | printKlar | sak=kruka n=22 |
| 1:14 | händelse | tagitUrPrint | sak=kruka n=1 |
| 1:19 | väntar | ali | AI:n säger hej. Jag säger hej. Det räcker. |
| 1:20 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 1:22 | händelse | salt | sak=kruka n=1 |
| 1:22 | aliSalt | ali | 105 |
| 1:22 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 1:28 | struken | du | En badanka. Den överlevde kvarnen. |
| 1:32 | händelse | printStart | sak=kruka |
| 1:35 | toast | guld | ✅ |
| 1:35 | händelse | printKlar | sak=kruka n=23 |
| 1:36 | händelse | tagitUrPrint | sak=kruka n=1 |
| 1:41 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 1:43 | händelse | salt | sak=kruka n=1 |
| 1:43 | aliSalt | ali | 105 |
| 1:43 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 1:43 | väntar | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått TAK. Och arbetsbord. Skriv in, Gunnar. Du skriver aldrig in. |
| 1:43 | radio | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått TAK. Och arbetsbord. Skriv in, Gunnar. Du skriver aldrig in. |
| 1:43 | skratt | du | Radio-Kjelle |
| 1:44 | sak | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått TAK. Och arbetsbord. Skriv in, Gunnar. Du skriver aldrig in. |
| 1:44 | notis |  | 📻 Radio Tippen: Radio Tippen, Kjelle här. Skjulet vid tippen har fått TAK. Och arbetsbord. Skriv in, Gunnar. Du skriver aldrig in. |
| 1:44 | röst | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått TAK. Och arbetsbord. Skriv in, Gunnar. Du skriver aldrig in. · REAKTION |
| 1:50 | skratt | du | däcket rullar iväg |
| 1:53 | klar | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått TAK. Och arbetsbord. Skriv in, Gunnar. Du skriver aldrig in. |
| 1:55 | struken | ali | AI:n säger hej. Jag säger hej. Det räcker. |
| 2:02 | händelse | printStart | sak=kruka |
| 2:05 | toast | guld | ✅ |
| 2:05 | händelse | printKlar | sak=kruka n=24 |
| 2:06 | händelse | tagitUrPrint | sak=kruka n=1 |
| 2:11 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 2:13 | händelse | salt | sak=kruka n=1 |
| 2:13 | aliSalt | ali | 105 |
| 2:13 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 2:15 | sak | foto | Tak över huvudet |
| 2:15 | foto | du | Tak över huvudet |
| 2:17 | klar | foto | Tak över huvudet |
| 2:22 | upplåst | skrivare | trim_skrivare2 |
| 2:22 | brott | UPPLÅST | trim_skrivare2 (skrivare 101 av 60) |
| 2:22 | händelse | upplast | id=trim_skrivare2 flask=skrivare |
| 2:22 | paket |  | tanke → sms |
| 2:22 | tanke | du | Skrivare M hinner inte heller. Den kunde gå fortare. |
| 2:22 | väntar | du | Skrivare M hinner inte heller. Den kunde gå fortare. |
| 2:22 | väntar | ali | Ali här. Skrivartrim igen. Nästa nivå. Den här gången skruvade jag åt rätt håll. |
| 2:22 | sak | du | Skrivare M hinner inte heller. Den kunde gå fortare. |
| 2:22 | notis | tanke | 💭 Skrivare M hinner inte heller. Den kunde gå fortare. |
| 2:22 | röst | du | Skrivare M hinner inte heller. Den kunde gå fortare. · STORY |
| 2:26 | händelse | printStart | sak=kruka |
| 2:26 | klar | du | Skrivare M hinner inte heller. Den kunde gå fortare. |
| 2:29 | toast | guld | ✅ |
| 2:29 | händelse | printKlar | sak=kruka n=25 |
| 2:29 | händelse | tagitUrPrint | sak=kruka n=1 |
| 2:34 | sak | du | I natt somnar jag torr. Det börjar bli ett hem. |
| 2:34 | notis | tanke | 💭 I natt somnar jag torr. Det börjar bli ett hem. |
| 2:34 | röst | du | I natt somnar jag torr. Det börjar bli ett hem. · STORY |
| 2:35 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 2:37 | händelse | salt | sak=kruka n=1 |
| 2:37 | aliSalt | ali | 105 |
| 2:37 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 2:38 | klar | du | I natt somnar jag torr. Det börjar bli ett hem. |
| 2:47 | händelse | printStart | sak=kruka |
| 2:50 | toast | guld | ✅ |
| 2:50 | händelse | printKlar | sak=kruka n=26 |
| 2:50 | händelse | tagitUrPrint | sak=kruka n=1 |
| 2:56 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 2:57 | sak | ali | Ali här. Skrivartrim igen. Nästa nivå. Den här gången skruvade jag åt rätt håll. |
| 2:57 | sms | ali | Ali här. Skrivartrim igen. Nästa nivå. Den här gången skruvade jag åt rätt håll. |
| 2:57 | sms-bubbla | ali | Ali här. Skrivartrim igen. Nästa nivå. Den här gången skruvade jag åt rätt håll. |
| 2:57 | röst | ali | Ali här. Skrivartrim igen. Nästa nivå. Den här gången skruvade jag åt rätt håll. · STORY |
| 2:58 | händelse | salt | sak=kruka n=1 |
| 2:58 | aliSalt | ali | 105 |
| 2:58 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 3:03 | klar | ali | Ali här. Skrivartrim igen. Nästa nivå. Den här gången skruvade jag åt rätt håll. |
| 3:12 | händelse | printStart | sak=kruka |
| 3:15 | toast | guld | ✅ |
| 3:15 | händelse | printKlar | sak=kruka n=27 |
| 3:16 | händelse | tagitUrPrint | sak=kruka n=1 |
| 3:21 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 3:23 | händelse | salt | sak=kruka n=1 |
| 3:23 | aliSalt | ali | 105 |
| 3:23 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 3:25 | väntar | bud | (tips) |
| 3:25 | sak | bud | (tips) |
| 3:27 | klar | bud | (tips) |
| 3:29 | meddelande | mamma | Har du borstat tänderna idag? Ljug inte. Jag hör om du ljuger. Även på sms. |
| 3:30 | röst | mamma | Har du borstat tänderna idag? Ljug inte. Jag hör om du ljuger. Även på sms. · STORY |
| 3:38 | paket |  | sms |
| 3:38 | väntar | mamma | Bra. Jag tror dig. Nästan. |
| 3:46 | händelse | brevLast | id=m_tandborste |
| 3:46 | skratt | du | falsk tuta |
| 3:54 | väntar | värld:TUUT! Hej grannen! | TUUT! Hej grannen! |
| 3:54 | paket |  | ge |
| 3:54 | väntar |  | (läget ändras) |
| 3:56 | sak |  | (läget ändras) |
| 3:56 | brev | rolf | rolf:2 |
| 3:56 | klar |  | (läget ändras) |
| 4:07 | händelse | printStart | sak=kruka |
| 4:08 | skratt | du | falsk tuta |
| 4:10 | toast | guld | ✅ |
| 4:10 | händelse | printKlar | sak=kruka n=28 |
| 4:10 | händelse | tagitUrPrint | sak=kruka n=1 |
| 4:15 | struken | värld:TUUT! Hej grannen! | TUUT! Hej grannen! |
| 4:17 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 4:18 | händelse | salt | sak=kruka n=1 |
| 4:18 | aliSalt | ali | 105 |
| 4:18 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 4:28 | väntar | rolf | Tjo. Ska grilla på lördag. Min grillspade smälte. Kan du göra en sån hä? /Rolf 🍖​ |
| 4:28 | paket |  | ge |
| 4:28 | väntar |  | (läget ändras) |
| 4:28 | sak | rolf | Tjo. Ska grilla på lördag. Min grillspade smälte. Kan du göra en sån hä? /Rolf 🍖​ |
| 4:28 | lapp | Brev från Rolf | Tjo. Ska grilla på lördag. Min grillspade smälte. Kan du göra en sån hä? /Rolf 🍖​ |
| 4:28 | röst | rolf | Tjo. Ska grilla på lördag. Min grillspade smälte. Kan du göra en sån hä? /Rolf 🍖​ · STORY |
| 4:28 | händelse | malKlart | id=rolf2-brev del=Dag 4 – Kärran och mer vind nasta=rolf2-printa |
| 4:28 | bekräftelse | du | plats |
| 4:28 | väntar | du | Printa grillspade. |
| 4:28 | MÅL |  | Printa grillspade |
| 4:31 | målruta |  | Printa grillspade |
| 4:32 | händelse | printStart | sak=grillspade |
| 4:32 | skratt | du | Kajsa i skrivaren |
| 4:32 | händelse | malKlart | id=rolf2-printa del=Dag 4 – Kärran och mer vind nasta=rolf2-ge |
| 4:32 | bekräftelse | du | plats |
| 4:32 | väntar | du | Ge Rolf grillspade. |
| 4:32 | MÅL |  | Ge Rolf grillspade |
| 4:35 | klar | rolf | Tjo. Ska grilla på lördag. Min grillspade smälte. Kan du göra en sån hä? /Rolf 🍖​ |
| 4:35 | händelse | brevLast | id=rolf:2 |
| 4:35 | målruta |  | Ge Rolf grillspade |
| 4:36 | toast | guld | ✅ |
| 4:36 | händelse | printKlar | sak=grillspade n=1 |
| 4:36 | kvittens-bock |  | ✓ Printa grillspade |
| 4:37 | händelse | tagitUrPrint | sak=grillspade n=1 |
| 4:37 | struken | du | Printa grillspade. |
| 4:37 | sak | du | Ge Rolf grillspade. |
| 4:37 | pil |  | Ge Rolf grillspade |
| 4:37 | röst | du | Ge Rolf grillspade. · MÅL |
| 4:39 | klar | du | Ge Rolf grillspade. |
| 4:41 | sak |  | (läget ändras) |
| 4:41 | klar |  | (läget ändras) |
| 4:43 | händelse | lagtIPostlada | sak=grillspade rolf=2 jobb=false |
| 4:43 | händelse | malKlart | id=rolf2-ge del=Dag 4 – Kärran och mer vind nasta=n3-tom-full-karra |
| 4:43 | bekräftelse | du | plats |
| 4:43 | väntar | du | Kärran rymmer massor. Jag fyller den och tippar allt i kvarnen. |
| 4:43 | målruta |  | Töm en full kärra i kvarnen |
| 4:43 | MÅL |  | Töm en full kärra i kvarnen |
| 4:43 | sak | du | Kärran rymmer massor. Jag fyller den och tippar allt i kvarnen. |
| 4:43 | pil |  | Töm en full kärra i kvarnen |
| 4:43 | notis | tanke | 💭 Kärran rymmer massor. Jag fyller den och tippar allt i kvarnen. |
| 4:43 | röst | du | Kärran rymmer massor. Jag fyller den och tippar allt i kvarnen. · MÅL |
| 4:47 | kvittens-bock |  | ✓ Ge Rolf grillspade |
| 4:48 | klar | du | Kärran rymmer massor. Jag fyller den och tippar allt i kvarnen. |
| 4:52 | karraKlick | du | träff |
| 4:53 | karraKlick | du | träff |
| 4:54 | karraKlick | du | träff |
| 4:55 | karraKlick | du | träff |
| 4:56 | karraKlick | du | träff |
| 4:56 | sak | mamma | Bra. Jag tror dig. Nästan. |
| 4:56 | sms | mamma | Bra. Jag tror dig. Nästan. |
| 4:56 | sms-bubbla | mamma | Bra. Jag tror dig. Nästan. |
| 4:56 | röst | mamma | Bra. Jag tror dig. Nästan. · STORY |
| 4:57 | karraKlick | du | träff |
| 4:58 | karraKlick | du | träff |
| 4:59 | karraKlick | du | träff |
| 4:59 | klar | mamma | Bra. Jag tror dig. Nästan. |
| 5:02 | tanke | du | Det får inte plats. Jag behöver något att tippa i. |
| 5:02 | väntar | du | Det får inte plats. Jag behöver något att tippa i. |
| 5:02 | väntar | info:bra | 8 st i tratten · 8 st på marken bredvid |
| 5:02 | sak | info:bra | 8 st i tratten · 8 st på marken bredvid |
| 5:02 | kvitto-visas | info:bra | 8 st i tratten · 8 st på marken bredvid |
| 5:02 | toast | bra | 8 st i tratten · 8 st på marken bredvid |
| 5:02 | händelse | malKlart | id=n3-tom-full-karra del=Dag 4 – Kärran och mer vind nasta=sophallare |
| 5:02 | bekräftelse | du | plats |
| 5:02 | väntar | du | En sophållare bakom kvarnen. Då matar den sig själv. |
| 5:02 | MÅL |  | Plocka skräp och mal det |
| 5:04 | klar | info:bra | 8 st i tratten · 8 st på marken bredvid |
| 5:05 | målruta |  | Plocka skräp och mal det |
| 5:05 | väntar | mamma | Jag sa till pappa att du bor på en soptipp. Han sa "aha, vad lugnt då" och satte på Formel 1. Lugnt? |
| 5:06 | kvittens-bock |  | ✓ Töm en full kärra i kvarnen |
| 5:06 | sak | du | En sophållare bakom kvarnen. Då matar den sig själv. |
| 5:06 | pil |  | Plocka skräp och mal det |
| 5:06 | notis | tanke | 💭 En sophållare bakom kvarnen. Då matar den sig själv. |
| 5:06 | röst | du | En sophållare bakom kvarnen. Då matar den sig själv. · MÅL |
| 5:10 | klar | du | En sophållare bakom kvarnen. Då matar den sig själv. |
| 5:12 | sak | du | Det får inte plats. Jag behöver något att tippa i. |
| 5:12 | notis | tanke | 💭 Det får inte plats. Jag behöver något att tippa i. |
| 5:12 | röst | du | Det får inte plats. Jag behöver något att tippa i. · STORY |
| 5:17 | klar | du | Det får inte plats. Jag behöver något att tippa i. |
| 5:17 | händelse | printStart | sak=kruka |
| 5:20 | toast | guld | ✅ |
| 5:20 | händelse | printKlar | sak=kruka n=29 |
| 5:21 | händelse | tagitUrPrint | sak=kruka n=1 |
| 5:27 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 5:29 | händelse | salt | sak=kruka n=1 |
| 5:29 | aliSalt | ali | 105 |
| 5:29 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 5:37 | händelse | printStart | sak=kruka |
| 5:39 | toast | guld | ✅ |
| 5:39 | händelse | printKlar | sak=kruka n=30 |
| 5:40 | händelse | tagitUrPrint | sak=kruka n=1 |
| 5:46 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 5:47 | händelse | salt | sak=kruka n=1 |
| 5:47 | aliSalt | ali | 105 |
| 5:47 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 5:56 | händelse | printStart | sak=kruka |
| 5:58 | paket |  | tanke |
| 5:58 | tanke | du | Jaha, Rolf har hämtat en grillspade. |
| 5:58 | väntar | du | Jaha, Rolf har hämtat en grillspade. |
| 5:59 | toast | guld | ✅ |
| 5:59 | händelse | printKlar | sak=kruka n=31 |
| 6:00 | händelse | tagitUrPrint | sak=kruka n=1 |
| 6:06 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 6:07 | händelse | salt | sak=kruka n=1 |
| 6:07 | aliSalt | ali | 105 |
| 6:07 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 6:16 | händelse | printStart | sak=kruka |
| 6:19 | toast | guld | ✅ |
| 6:19 | händelse | printKlar | sak=kruka n=32 |
| 6:20 | händelse | tagitUrPrint | sak=kruka n=1 |
| 6:20 | väntar | värld:TUUT TUUT! | TUUT TUUT! |
| 6:20 | struken | du | Jaha, Rolf har hämtat en grillspade. |
| 6:25 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 6:27 | händelse | salt | sak=kruka n=1 |
| 6:27 | aliSalt | ali | 105 |
| 6:27 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 6:36 | händelse | printStart | sak=kruka |
| 6:39 | toast | guld | ✅ |
| 6:39 | händelse | printKlar | sak=kruka n=33 |
| 6:39 | händelse | tagitUrPrint | sak=kruka n=1 |
| 6:43 | struken | värld:TUUT TUUT! | TUUT TUUT! |
| 6:45 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 6:47 | händelse | salt | sak=kruka n=1 |
| 6:47 | aliSalt | ali | 105 |
| 6:47 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 6:56 | händelse | printStart | sak=kruka |
| 6:59 | toast | guld | ✅ |
| 6:59 | händelse | printKlar | sak=kruka n=34 |
| 6:59 | händelse | tagitUrPrint | sak=kruka n=1 |
| 7:05 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 7:07 | händelse | salt | sak=kruka n=1 |
| 7:07 | aliSalt | ali | 105 |
| 7:07 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 7:16 | händelse | printStart | sak=kruka |
| 7:18 | toast | guld | ✅ |
| 7:18 | händelse | printKlar | sak=kruka n=35 |
| 7:21 | händelse | tagitUrPrint | sak=kruka n=1 |
| 7:27 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 7:29 | händelse | salt | sak=kruka n=1 |
| 7:29 | aliSalt | ali | 105 |
| 7:29 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 7:38 | händelse | printStart | sak=kruka |
| 7:41 | toast | guld | ✅ |
| 7:41 | händelse | printKlar | sak=kruka n=36 |
| 7:41 | väntar | mamma | Jag sa till pappa att du bor på en soptipp. Han sa "aha, vad lugnt då" och satte på Formel 1. Lugnt? |
| 7:41 | händelse | tagitUrPrint | sak=kruka n=1 |
| 7:47 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 7:49 | händelse | salt | sak=kruka n=1 |
| 7:49 | aliSalt | ali | 105 |
| 7:49 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 7:53 | skratt | du | falsk tuta |
| 7:58 | händelse | printStart | sak=kruka |
| 8:00 | toast | guld | ✅ |
| 8:00 | händelse | printKlar | sak=kruka n=37 |
| 8:01 | händelse | tagitUrPrint | sak=kruka n=1 |
| 8:07 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 8:08 | händelse | salt | sak=kruka n=1 |
| 8:08 | aliSalt | ali | 105 |
| 8:08 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 8:15 | väntar | värld:TUUT! Tjena! | TUUT! Tjena! |
| 8:15 | sak | värld:TUUT! Tjena! | TUUT! Tjena! |
| 8:15 | bubbla |  | TUUT! Tjena! |
| 8:18 | händelse | printStart | sak=kruka |
| 8:18 | klar | värld:TUUT! Tjena! | TUUT! Tjena! |
| 8:20 | toast | guld | ✅ |
| 8:20 | händelse | printKlar | sak=kruka n=38 |
| 8:21 | händelse | tagitUrPrint | sak=kruka n=1 |
| 8:24 | upplåst | bara | matarband |
| 8:24 | brott | RESERV | matarband (bara 0 av 3) |
| 8:24 | händelse | upplast | id=matarband flask=bara |
| 8:24 | paket |  | sms |
| 8:24 | väntar | ali | Ali här. 🗑️ Sophållaren. Jag frågade AI:n hur man slipper bära skräp. Den gjorde det här. Den har mer fritid än jag. Suck. |
| 8:26 | sak | ali | Ali här. 🗑️ Sophållaren. Jag frågade AI:n hur man slipper bära skräp. Den gjorde det här. Den har mer fritid än jag. Suck. |
| 8:26 | sms | ali | Ali här. 🗑️ Sophållaren. Jag frågade AI:n hur man slipper bära skräp. Den gjorde det här. Den har mer fritid än jag. Suck. |
| 8:26 | sms-bubbla | ali | Ali här. 🗑️ Sophållaren. Jag frågade AI:n hur man slipper bära skräp. Den gjorde det här. Den har mer fritid än jag. Suck. |
| 8:26 | röst | ali | Ali här. 🗑️ Sophållaren. Jag frågade AI:n hur man slipper bära skräp. Den gjorde det här. Den har mer fritid än jag. Suck. · STORY |
| 8:27 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 8:28 | händelse | salt | sak=kruka n=1 |
| 8:28 | aliSalt | ali | 105 |
| 8:28 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 8:36 | klar | ali | Ali här. 🗑️ Sophållaren. Jag frågade AI:n hur man slipper bära skräp. Den gjorde det här. Den har mer fritid än jag. Suck. |
| 8:38 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 8:40 | struken | info:guld | 3D-modell köpt – printa sophållare |
| 8:40 | händelse | kopt | sak=matarband |
| 8:40 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 8:49 | händelse | printStart | sak=byggsats:matarband |
| 8:52 | toast | bra | Del 1 av 3 klar |
| 8:54 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 9:05 | toast | bra | Del 2 av 3 klar |
| 9:09 | händelse | printKlar | sak=byggsats:matarband n=1 |
| 9:09 | toast | guld | ✅ |
| 9:15 | händelse | tagitUrPrint | sak=byggsats:matarband n=1 |
| 9:15 | paket |  | sms |
| 9:15 | väntar | ali | Ali här. Jag såg Sophållare på avstånd. Ett streck blev lite snett. Mitt fel. Vackert ändå. |
| 9:15 | paket |  | sms |
| 9:15 | väntar | ali | Ali igen. Jag har sagt till min bror att jag inte går i pension. Jag startar något. Han skrattade. Jag skrattade också. Men jag menar det. Tack. Säg inget. |
| 9:17 | händelse | placerat | sak=sophallare |
| 9:17 | väntar | info:guld | 🗑️ Sophållaren står bakom kvarnen! Töm allt skräp i den – den matar kvarnen själv. |
| 9:17 | sak | info:guld | 🗑️ Sophållaren står bakom kvarnen! Töm allt skräp i den – den matar kvarnen själv. |
| 9:17 | kvitto-visas | info:guld | 🗑️ Sophållaren står bakom kvarnen! Töm allt skräp i den – den matar kvarnen själv. |
| 9:17 | toast | guld | 🗑️ Sophållaren står bakom kvarnen! Töm allt skräp i den – den matar kvarnen själv. |
| 9:17 | händelse | malKlart | id=sophallare del=Dag 4 – Kärran och mer vind nasta=pall |
| 9:17 | bekräftelse | du | plats |
| 9:17 | kvittens | du | Nu kan jag tömma hela kärran på en gång. |
| 9:17 | väntar | du | Nu kan jag tömma hela kärran på en gång. |
| 9:17 | väntar | du | Jag behöver något att sitta på. En pall. Lagom ambitiöst. |
| 9:17 | MÅL |  | Printa en pall |
| 9:19 | klar | info:guld | 🗑️ Sophållaren står bakom kvarnen! Töm allt skräp i den – den matar kvarnen själv. |
| 9:19 | sak | du | Nu kan jag tömma hela kärran på en gång. |
| 9:19 | röst | du | Nu kan jag tömma hela kärran på en gång. · STORY |
| 9:19 | målruta |  | Printa en pall |
| 9:22 | klar | du | Nu kan jag tömma hela kärran på en gång. |
| 9:23 | sak | du | Jag behöver något att sitta på. En pall. Lagom ambitiöst. |
| 9:23 | pil |  | Printa en pall |
| 9:23 | notis | tanke | 💭 Jag behöver något att sitta på. En pall. Lagom ambitiöst. |
| 9:23 | röst | du | Jag behöver något att sitta på. En pall. Lagom ambitiöst. · MÅL |
| 9:23 | nick |  | nick:46 |
| 9:27 | klar | du | Jag behöver något att sitta på. En pall. Lagom ambitiöst. |
| 9:35 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 9:37 | händelse | kopt | sak=pall |
| 9:37 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 9:37 | röst | ali | Bra val. Folk köper sånt. Jag vet inte varför. · STORY |
| 9:37 | upprepning | ali | Bra val. Folk köper sånt. Jag vet inte varför. |
| 9:37 | butiksbubbla | ali | Pall? Bra val. Folk köper sånt. Jag vet inte varför. |
| 9:46 | händelse | printStart | sak=pall |
| 9:51 | toast | guld | ✅ |
| 9:51 | händelse | printKlar | sak=pall n=1 |
| 9:51 | händelse | malKlart | id=pall del=Dag 4 – Kärran och mer vind nasta=vind4 |
| 9:51 | bekräftelse | du | plats |
| 9:51 | väntar | du | En vindsnurra till på skjulets tak. Skrivarna vill ha mer ström. |
| 9:51 | målruta |  | Printa och sälj |
| 9:51 | MÅL |  | Printa och sälj |
| 9:51 | sak | du | En vindsnurra till på skjulets tak. Skrivarna vill ha mer ström. |
| 9:51 | pil |  | Printa och sälj |
| 9:51 | notis | tanke | 💭 En vindsnurra till på skjulets tak. Skrivarna vill ha mer ström. |
| 9:51 | röst | du | En vindsnurra till på skjulets tak. Skrivarna vill ha mer ström. · MÅL |
| 9:51 | händelse | tagitUrPrint | sak=pall n=1 |
| 9:55 | kvittens-bock |  | ✓ Printa en pall |
| 9:57 | klar | du | En vindsnurra till på skjulets tak. Skrivarna vill ha mer ström. |
| 9:57 | händelse | placerat | sak=pall |
| 10:10 | skratt | du | falsk tuta |
| 10:10 | väntar | värld:TUUT! Hej grannen! | TUUT! Hej grannen! |
| 10:11 | sak | värld:TUUT! Hej grannen! | TUUT! Hej grannen! |
| 10:11 | bubbla |  | TUUT! Hej grannen! |
| 10:11 | strömdipp | du | vindsnurra2 |
| 10:11 | paket |  | tanke |
| 10:11 | tanke | du | Allt stannar. Maskinerna drar mer än jag får in. |
| 10:11 | väntar | du | Allt stannar. Maskinerna drar mer än jag får in. |
| 10:14 | klar | värld:TUUT! Hej grannen! | TUUT! Hej grannen! |
| 10:16 | sak | du | Allt stannar. Maskinerna drar mer än jag får in. |
| 10:16 | notis | tanke | 💭 Allt stannar. Maskinerna drar mer än jag får in. |
| 10:16 | röst | du | Allt stannar. Maskinerna drar mer än jag får in. · STORY |
| 10:20 | klar | du | Allt stannar. Maskinerna drar mer än jag får in. |
| 10:22 | struken | ali | Ali här. Jag såg Sophållare på avstånd. Ett streck blev lite snett. Mitt fel. Vackert ändå. |
| 10:22 | struken | ali | Ali igen. Jag har sagt till min bror att jag inte går i pension. Jag startar något. Han skrattade. Jag skrattade också. Men jag menar det. Tack. Säg inget. |
| 10:24 | upplåst | strom | vindsnurra2 |
| 10:24 | brott | UPPLÅST | vindsnurra2 (strom 43 av 15) |
| 10:24 | händelse | upplast | id=vindsnurra2 flask=strom |
| 10:24 | paket |  | tanke → sms |
| 10:24 | tanke | du | En snurra räcker inte. Skrivarna står still så fort det blir stilla. |
| 10:24 | väntar | du | En snurra räcker inte. Skrivarna står still så fort det blir stilla. |
| 10:24 | väntar | ali | Ali här. En snurra till? Taket har plats för två. Vinden har inget emot det. |
| 10:24 | sak | du | En snurra räcker inte. Skrivarna står still så fort det blir stilla. |
| 10:24 | notis | tanke | 💭 En snurra räcker inte. Skrivarna står still så fort det blir stilla. |
| 10:24 | röst | du | En snurra räcker inte. Skrivarna står still så fort det blir stilla. · STORY |
| 10:30 | klar | du | En snurra räcker inte. Skrivarna står still så fort det blir stilla. |
| 10:32 | struken | mamma | Jag sa till pappa att du bor på en soptipp. Han sa "aha, vad lugnt då" och satte på Formel 1. Lugnt? |
| 10:42 | sak | ali | Ali här. En snurra till? Taket har plats för två. Vinden har inget emot det. |
| 10:42 | sms | ali | Ali här. En snurra till? Taket har plats för två. Vinden har inget emot det. |
| 10:42 | sms-bubbla | ali | Ali här. En snurra till? Taket har plats för två. Vinden har inget emot det. |
| 10:42 | röst | ali | Ali här. En snurra till? Taket har plats för två. Vinden har inget emot det. · STORY |
| 10:44 | händelse | printStart | sak=pall |
| 10:46 | toast | fel | Ingen ström – trampa cykeln |
| 10:49 | klar | ali | Ali här. En snurra till? Taket har plats för två. Vinden har inget emot det. |
| 10:57 | toast | guld | ✅ |
| 10:57 | händelse | printKlar | sak=pall n=2 |
| 10:58 | händelse | tagitUrPrint | sak=pall n=1 |
| 11:04 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 11:05 | händelse | salt | sak=pall n=1 |
| 11:05 | aliSalt | ali | 180 |
| 11:05 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 11:07 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 11:08 | struken | info:guld | 3D-modell köpt – printa vindsnurra till skjultaket |
| 11:08 | händelse | kopt | sak=vindsnurra |
| 11:08 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 11:17 | händelse | printStart | sak=byggsats:vindsnurra |
| 11:21 | händelse | printKlar | sak=byggsats:vindsnurra n=1 |
| 11:21 | toast | guld | ✅ |
| 11:21 | struken | info:guld | 🌬️ Vindsnurran ska upp på skjulets tak. |
| 11:21 | händelse | tagitUrPrint | sak=byggsats:vindsnurra n=1 |
| 11:27 | händelse | placerat | sak=vindsnurra |
| 11:27 | struken | info:guld | 🌬️ Vindsnurran sitter på taket – den trampar cykeln åt mig när det blåser |
| 11:27 | monterat | du | byggsats:vindsnurra |
| 11:27 | händelse | monterat | sak=vindsnurra |
| 11:27 | händelse | malKlart | id=vind4 del=Dag 4 – Kärran och mer vind nasta=n3-isolera-tva-vaggar |
| 11:27 | bekräftelse | du | plats |
| 11:27 | lapp | 📔 Dagbok | Slut på trampandet. Nästan. |
| 11:27 | dagbokrad | du | Slut på trampandet. Nästan. |
| 11:27 | väntar | notis:Slut på trampandet. Nästan. | Slut på trampandet. Nästan. |
| 11:27 | väntar | du | Det drar genom väggarna. Isolering, och sen blir det varmt. |
| 11:27 | MÅL |  | Isolera två väggar · 0/2 |
| 11:27 | sak | du | Det drar genom väggarna. Isolering, och sen blir det varmt. |
| 11:27 | målruta |  | Isolera två väggar · 0/2 |
| 11:27 | pil |  | Isolera två väggar · 0/2 |
| 11:27 | notis | tanke | 💭 Det drar genom väggarna. Isolering, och sen blir det varmt. |
| 11:27 | röst | du | Det drar genom väggarna. Isolering, och sen blir det varmt. · MÅL |
| 11:28 | nick |  | nick:48 |
| 11:32 | klar | du | Det drar genom väggarna. Isolering, och sen blir det varmt. |
| 11:34 | sak | notis:Slut på trampandet. Nästan. | Slut på trampandet. Nästan. |
| 11:34 | notis | dagbok | Slut på trampandet. Nästan. |
| 11:37 | klar | notis:Slut på trampandet. Nästan. | Slut på trampandet. Nästan. |
| 11:37 | händelse | pappa | Pappa ringer |
| 11:42 | röst | pappa | Hej. Det är pappa. · STORY |
| 11:44 | röst | du | Hej pappa. · STORY |
| 11:46 | röst | pappa | Mamma står bredvid. Hon säger att jag ska fråga om du äter. · STORY |
| 11:52 | röst | du | Jag äter. Och jag har en egen kvarn nu. Och en 3D-skrivare. · STORY |
| 11:58 | röst | pappa | Jaha. En kvarn. Vad lugnt då. · STORY |
| 12:01 | röst | pappa | Jag kanske kommer förbi nån dag. Om det passar. · STORY |
| 12:03 | röst | du | Det passar. · STORY |
| 12:06 | röst | pappa | Bra. Hej då då. · STORY |
| 12:18 | händelse | samtalSlut | id=pappa4 |
| 12:22 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 12:24 | struken | info:guld | 3D-modell köpt – printa isolerskiva (vägg) |
| 12:24 | händelse | kopt | sak=vaggar |
| 12:24 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 12:33 | händelse | printStart | sak=byggsats:vaggar |
| 12:33 | skratt | du | Kajsa i skrivaren |
| 12:37 | händelse | printKlar | sak=byggsats:vaggar n=1 |
| 12:37 | toast | guld | ✅ |
| 12:37 | händelse | tagitUrPrint | sak=byggsats:vaggar n=1 |
| 12:41 | väntar | info:guld | 🧱 Bakväggen klar. 3 kvar. |
| 12:41 | sak | info:guld | 🧱 Bakväggen klar. 3 kvar. |
| 12:41 | kvitto-visas | info:guld | 🧱 Bakväggen klar. 3 kvar. |
| 12:41 | toast | guld | 🧱 Bakväggen klar. 3 kvar. |
| 12:43 | klar | info:guld | 🧱 Bakväggen klar. 3 kvar. |
| 12:51 | händelse | printStart | sak=byggsats:vaggar |
| 12:55 | händelse | printKlar | sak=byggsats:vaggar n=1 |
| 12:55 | toast | guld | ✅ |
| 12:55 | händelse | tagitUrPrint | sak=byggsats:vaggar n=1 |
| 12:59 | väntar | info:guld | 🧱 Vänster vägg klar. 2 kvar. |
| 12:59 | sak | info:guld | 🧱 Vänster vägg klar. 2 kvar. |
| 12:59 | kvitto-visas | info:guld | 🧱 Vänster vägg klar. 2 kvar. |
| 12:59 | toast | guld | 🧱 Vänster vägg klar. 2 kvar. |
| 12:59 | händelse | malKlart | id=n3-isolera-tva-vaggar del=Dag 4 – Kärran och mer vind nasta=sov4 |
| 12:59 | paket |  | lapp |
| 12:59 | väntar | du | En skrivare räcker inte. |
| 12:59 | bekräftelse | du | plats |
| 12:59 | MÅL |  | Klart för idag – sov när du vill |
| 13:01 | klar | info:guld | 🧱 Vänster vägg klar. 2 kvar. |
| 13:02 | målruta |  | Klart för idag – sov när du vill |
| 13:03 | kvittens-bock |  | ✓ Isolera två väggar · 2/2 |
| 13:03 | sak | du | (nytt mål i rutan) |
| 13:03 | pil |  | Klart för idag – sov när du vill |
| 13:03 | klar | du | (nytt mål i rutan) |
| 13:05 | sak | du | En skrivare räcker inte. |
| 13:05 | kvallsrad | du | En skrivare räcker inte. |
| 13:06 | klar | du | En skrivare räcker inte. |
| 13:06 | väntar | notis:🌇 Klockan är 21. Ali slår igen luckan.  | 🌇 Klockan är 21. Ali slår igen luckan. Dagens jobb är klart – gå in i skjulet och sov i sängen. |
| 13:11 | nattkort | du | 🌙 18 dagar kvar. God natt. zzz… En skrivare räcker inte. DAGENS PRINTAR Blomkruka × 18 Pall × 2 Grillspade × 1 Totalt 21 printar 💰 Tjänat i dag +2 190 kr |

<details><summary>Botens handlingar dag 4</summary>

- 0:00 — dag 4 börjar — (812 kr)
- 0:08 popup: "FORTSÄTT" (812 kr)
- 0:25 gå till Rolfs postlåda (28 m) (812 kr)
- 0:33 panel: "Rolfs postlåda
Det här låg i l" (932 kr)
- 0:33 tjänar pengar till väntar på sopbilen (BO): 932/992 kr → printar blomkruka (105 kr) (932 kr)
- 0:35 gå till skrivaren (8 m) (932 kr)
- 0:36 printar Blomkruka (932 kr)
- 0:40 tar ut 1 st ur skrivaren (932 kr)
- 0:46 gå till Ali (26 m) (932 kr)
- 0:46 öppnar Alis butik – sälja (932 kr)
- 0:48 säljer hos Ali: +105 kr (1037 kr)
- 0:50 tjänar pengar till väntar på sopbilen (BO): 1037/1097 kr → printar blomkruka (105 kr) (1037 kr)
- 1:01 plockar 4 skräp på tippen (bär max 16) (1037 kr)
- 1:03 gå till kvarnen (9 m) (1037 kr)
- 1:09 gå till skrivaren (5 m) (1037 kr)
- 1:11 printar Blomkruka (1037 kr)
- 1:15 tar ut 1 st ur skrivaren (1037 kr)
- 1:20 gå till Ali (27 m) (1037 kr)
- 1:20 öppnar Alis butik – sälja (1037 kr)
- 1:22 säljer hos Ali: +105 kr (1142 kr)
- 1:26 tjänar pengar till väntar på sopbilen (BO): 1142/1202 kr → printar blomkruka (105 kr) (1142 kr)
- 1:31 gå till skrivaren (24 m) (1142 kr)
- 1:32 printar Blomkruka (1142 kr)
- 1:36 tar ut 1 st ur skrivaren (1142 kr)
- 1:41 gå till Ali (24 m) (1142 kr)
- 1:41 öppnar Alis butik – sälja (1142 kr)
- 1:43 säljer hos Ali: +105 kr (1247 kr)
- 1:56 tjänar pengar till väntar på sopbilen (BO): 1247/1307 kr → printar blomkruka (105 kr) (1247 kr)
- 2:01 gå till skrivaren (24 m) (1247 kr)
- 2:02 printar Blomkruka (1247 kr)
- 2:06 tar ut 1 st ur skrivaren (1247 kr)
- 2:11 gå till Ali (24 m) (1247 kr)
- 2:11 öppnar Alis butik – sälja (1247 kr)
- 2:13 säljer hos Ali: +105 kr (1352 kr)
- 2:19 tjänar pengar till väntar på sopbilen (BO): 1352/1412 kr → printar blomkruka (105 kr) (1352 kr)
- 2:24 gå till skrivaren (24 m) (1352 kr)
- 2:26 printar Blomkruka (1352 kr)
- 2:30 tar ut 1 st ur skrivaren (1352 kr)
- 2:35 gå till Ali (24 m) (1352 kr)
- 2:35 öppnar Alis butik – sälja (1352 kr)
- 2:37 säljer hos Ali: +105 kr (1457 kr)
- 2:40 tjänar pengar till väntar på sopbilen (BO): 1457/1517 kr → printar blomkruka (105 kr) (1457 kr)
- 2:46 gå till skrivaren (24 m) (1457 kr)
- 2:47 printar Blomkruka (1457 kr)
- 2:51 tar ut 1 st ur skrivaren (1457 kr)
- 2:56 gå till Ali (24 m) (1457 kr)
- 2:56 öppnar Alis butik – sälja (1457 kr)
- 2:58 säljer hos Ali: +105 kr (1562 kr)
- 3:05 tjänar pengar till väntar på sopbilen (BO): 1562/1622 kr → printar blomkruka (105 kr) (1562 kr)
- 3:11 gå till skrivaren (24 m) (1562 kr)
- 3:12 printar Blomkruka (1562 kr)
- 3:16 tar ut 1 st ur skrivaren (1562 kr)
- 3:21 gå till Ali (24 m) (1562 kr)
- 3:21 öppnar Alis butik – sälja (1562 kr)
- 3:23 säljer hos Ali: +105 kr (1667 kr)
- 3:38 popup: "Ja." (1667 kr)
- 3:46 popup: "Läst" (1667 kr)
- 3:46 tjänar pengar till väntar på sopbilen (BO): 1667/1727 kr → printar blomkruka (105 kr) (1667 kr)
- 3:57 plockar 3 skräp på tippen (bär max 16) (1667 kr)
- 3:59 gå till kvarnen (13 m) (1667 kr)
- 4:06 gå till skrivaren (5 m) (1667 kr)
- 4:07 printar Blomkruka (1667 kr)
- 4:11 tar ut 1 st ur skrivaren (1667 kr)
- 4:17 gå till Ali (26 m) (1667 kr)
- 4:17 öppnar Alis butik – sälja (1667 kr)
- 4:19 säljer hos Ali: +105 kr (1772 kr)
- 4:28 gå till Rolfs postlåda (31 m) (1772 kr)
- 4:31 gå till skrivaren (8 m) (1772 kr)
- 4:32 printar Grillspade (1772 kr)
- 4:37 tar ut 1 st ur skrivaren (1772 kr)
- 4:41 valj grillspade: true, vald grillspade, post {"l":null,"tr":null,"tm":[]}, nummer false (1772 kr)
- 4:43 gå till Rolfs postlåda (8 m) (1772 kr)
- 5:00 fyller kärran med 8 skräp (1772 kr)
- 5:02 gå till kvarnen (10 m) (1772 kr)
- 5:15 tjänar pengar till väntar på flaskhalsen för matarband: 1772/1812 kr → printar blomkruka (105 kr) (1772 kr)
- 5:16 gå till skrivaren (5 m) (1772 kr)
- 5:17 printar Blomkruka (1772 kr)
- 5:21 tar ut 1 st ur skrivaren (1772 kr)
- 5:27 gå till Ali (26 m) (1772 kr)
- 5:27 öppnar Alis butik – sälja (1772 kr)
- 5:29 säljer hos Ali: +105 kr (1877 kr)
- 5:30 tjänar pengar till väntar på flaskhalsen för matarband: 1877/1917 kr → printar blomkruka (105 kr) (1877 kr)
- 5:35 gå till skrivaren (24 m) (1877 kr)
- 5:37 printar Blomkruka (1877 kr)
- 5:41 tar ut 1 st ur skrivaren (1877 kr)
- 5:46 gå till Ali (24 m) (1877 kr)
- 5:46 öppnar Alis butik – sälja (1877 kr)
- 5:48 säljer hos Ali: +105 kr (1982 kr)
- 5:50 tjänar pengar till väntar på flaskhalsen för matarband: 1982/2022 kr → printar blomkruka (105 kr) (1982 kr)
- 5:55 gå till skrivaren (24 m) (1982 kr)
- 5:56 printar Blomkruka (1982 kr)
- 6:00 tar ut 1 st ur skrivaren (1982 kr)
- 6:06 gå till Ali (24 m) (1982 kr)
- 6:06 öppnar Alis butik – sälja (1982 kr)
- 6:07 säljer hos Ali: +105 kr (2087 kr)
- 6:09 tjänar pengar till väntar på flaskhalsen för matarband: 2087/2127 kr → printar blomkruka (105 kr) (2087 kr)
- 6:15 gå till skrivaren (24 m) (2087 kr)
- 6:16 printar Blomkruka (2087 kr)
- 6:20 tar ut 1 st ur skrivaren (2087 kr)
- 6:25 gå till Ali (24 m) (2087 kr)
- 6:25 öppnar Alis butik – sälja (2087 kr)
- 6:27 säljer hos Ali: +105 kr (2192 kr)
- 6:29 tjänar pengar till väntar på flaskhalsen för matarband: 2192/2232 kr → printar blomkruka (105 kr) (2192 kr)
- 6:34 gå till skrivaren (24 m) (2192 kr)
- 6:36 printar Blomkruka (2192 kr)
- 6:40 tar ut 1 st ur skrivaren (2192 kr)
- 6:45 gå till Ali (24 m) (2192 kr)
- 6:45 öppnar Alis butik – sälja (2192 kr)
- 6:47 säljer hos Ali: +105 kr (2297 kr)
- 6:49 tjänar pengar till väntar på flaskhalsen för matarband: 2297/2337 kr → printar blomkruka (105 kr) (2297 kr)
- 6:54 gå till skrivaren (24 m) (2297 kr)
- 6:56 printar Blomkruka (2297 kr)
- 7:00 tar ut 1 st ur skrivaren (2297 kr)
- 7:05 gå till Ali (24 m) (2297 kr)
- 7:05 öppnar Alis butik – sälja (2297 kr)
- 7:07 säljer hos Ali: +105 kr (2402 kr)
- 7:09 tjänar pengar till väntar på flaskhalsen för matarband: 2402/2442 kr → printar blomkruka (105 kr) (2402 kr)
- 7:14 gå till skrivaren (24 m) (2402 kr)
- 7:16 printar Blomkruka (2402 kr)
- 7:20 gå till kvarnen (1 m) (2402 kr)
- 7:21 gå till skrivaren (4 m) (2402 kr)
- 7:22 tar ut 1 st ur skrivaren (2402 kr)
- 7:27 gå till Ali (26 m) (2402 kr)
- 7:27 öppnar Alis butik – sälja (2402 kr)
- 7:29 säljer hos Ali: +105 kr (2507 kr)
- 7:31 tjänar pengar till väntar på flaskhalsen för matarband: 2507/2547 kr → printar blomkruka (105 kr) (2507 kr)
- 7:36 gå till skrivaren (24 m) (2507 kr)
- 7:38 printar Blomkruka (2507 kr)
- 7:42 tar ut 1 st ur skrivaren (2507 kr)
- 7:47 gå till Ali (24 m) (2507 kr)
- 7:47 öppnar Alis butik – sälja (2507 kr)
- 7:49 säljer hos Ali: +105 kr (2612 kr)
- 7:51 tjänar pengar till väntar på flaskhalsen för matarband: 2612/2652 kr → printar blomkruka (105 kr) (2612 kr)
- 7:56 gå till skrivaren (24 m) (2612 kr)
- 7:58 printar Blomkruka (2612 kr)
- 8:02 tar ut 1 st ur skrivaren (2612 kr)
- 8:07 gå till Ali (24 m) (2612 kr)
- 8:07 öppnar Alis butik – sälja (2612 kr)
- 8:09 säljer hos Ali: +105 kr (2717 kr)
- 8:11 tjänar pengar till väntar på flaskhalsen för matarband: 2717/2757 kr → printar blomkruka (105 kr) (2717 kr)
- 8:16 gå till skrivaren (24 m) (2717 kr)
- 8:18 printar Blomkruka (2717 kr)
- 8:21 tar ut 1 st ur skrivaren (2717 kr)
- 8:27 gå till Ali (24 m) (2717 kr)
- 8:27 öppnar Alis butik – sälja (2717 kr)
- 8:28 säljer hos Ali: +105 kr (2822 kr)
- 8:38 öppnar Alis butik – köpa sophållare (2822 kr)
- 8:41 köper matarband för 120 kr (2702 kr)
- 8:47 gå till skrivaren (24 m) (2702 kr)
- 8:49 printar Sophållare (3 delar) (2702 kr)
- 9:01 plockar 3 skräp på tippen (bär max 16) (2702 kr)
- 9:03 gå till kvarnen (10 m) (2702 kr)
- 9:15 gå till skrivaren (5 m) (2702 kr)
- 9:16 tar ut 1 st ur skrivaren (2702 kr)
- 9:17 gå till kvarnen (3 m) (2702 kr)
- 9:35 gå till Ali (29 m) (2702 kr)
- 9:35 öppnar Alis butik – köpa receptet pall (2702 kr)
- 9:38 köper pall för 80 kr (2622 kr)
- 9:44 gå till skrivaren (24 m) (2622 kr)
- 9:46 printar Pall (2622 kr)
- 9:52 tar ut 1 st ur skrivaren (2622 kr)
- 9:56 gå till platsen för pall (20 m) (2622 kr)
- 9:57 ställer ut pall (2622 kr)
- 9:59 tjänar pengar till väntar på flaskhalsen för vindsnurra2: 2622/2662 kr → printar pall (180 kr) (2622 kr)
- 10:08 plockar 2 skräp på tippen (bär max 16) (2622 kr)
- 10:10 gå till kvarnen (9 m) (2622 kr)
- 10:13 gå till cykeln (4 m) (2622 kr)
- 10:42 gå till skrivaren (2 m) (2622 kr)
- 10:44 printar Pall (2622 kr)
- 10:59 tar ut 1 st ur skrivaren (2622 kr)
- 11:04 gå till Ali (26 m) (2622 kr)
- 11:04 öppnar Alis butik – sälja (2622 kr)
- 11:06 säljer hos Ali: +180 kr (2802 kr)
- 11:07 öppnar Alis butik – köpa vindsnurra till skjultaket (2802 kr)
- 11:09 köper vindsnurra för 133 kr (2669 kr)
- 11:15 gå till skrivaren (24 m) (2669 kr)
- 11:17 printar Vindsnurra till skjultaket (2669 kr)
- 11:22 tar ut 1 st ur skrivaren (2669 kr)
- 11:27 gå till sätt vindsnurran på taket (18 m) (2669 kr)
- 11:42 popup: "Svara E" (2669 kr)
- 11:50 popup: "Nästa E" (2669 kr)
- 11:59 popup: "Nästa E" (2669 kr)
- 12:06 popup: "Nästa E" (2669 kr)
- 12:13 popup: "Nästa E" (2669 kr)
- 12:18 popup: "Lägg på E" (2669 kr)
- 12:22 gå till Ali (20 m) (2669 kr)
- 12:22 öppnar Alis butik – köpa isolerskiva (vägg) (2669 kr)
- 12:25 köper vaggar för 130 kr (2539 kr)
- 12:31 gå till skrivaren (24 m) (2539 kr)
- 12:33 printar Isolerskiva (vägg) (2539 kr)
- 12:38 tar ut 1 st ur skrivaren (2539 kr)
- 12:41 gå till skjulet (bak) (17 m) (2539 kr)
- 12:49 gå till skrivaren (17 m) (2539 kr)
- 12:51 printar Isolerskiva (vägg) (2539 kr)
- 12:56 tar ut 1 st ur skrivaren (2539 kr)
- 12:59 gå till skjulet (vanster) (17 m) (2539 kr)
- 13:08 gå till sängen (1 m) (2539 kr)

</details>

## Dag 5

| Tid | Källa | Vem | Text |
|---|---|---|---|
| 13:11 | vara | ali | pall |
| 13:11 | händelse | malKlart | id=sov4 del=Dag 4 – Kärran och mer vind nasta=rolf3-brev |
| 13:11 | bekräftelse | du | plats |
| 13:11 | MÅL |  | Vänta på sopbilen. Den lämnar något. |
| 0:01 | händelse | dagenBorjar | dag=5 |
| 0:01 | meddelande | du | 17 dagar till jul. Utan pengar blir det ingen jul här. |
| 0:01 | dagbokkort | du | Tätt och mysigt · 17 dagar till jul. Utan pengar blir det ingen jul här. |
| 0:01 | röst | du | 17 dagar till jul. Tätt och mysigt. Utan pengar blir det ingen jul här. · STORY |
| 0:08 | väntar | notis:morgon | Ali vill ha idag: Pall · +50 % |
| 0:08 | händelse | morgonkortStangt | dag=5 |
| 0:08 | målruta |  | Vänta på sopbilen. Den lämnar något. |
| 0:13 | sak | du | (nytt mål i rutan) |
| 0:13 | pil |  | Vänta på sopbilen. Den lämnar något. |
| 0:13 | klar | du | (nytt mål i rutan) |
| 0:15 | struken | notis:🌇 Klockan är 21. Ali slår igen luckan.  | 🌇 Klockan är 21. Ali slår igen luckan. Dagens jobb är klart – gå in i skjulet och sov i sängen. |
| 0:16 | sak | notis:morgon | Ali vill ha idag: Pall · +50 % |
| 0:16 | notis |  | Pall · +50 % |
| 0:19 | klar | notis:morgon | Ali vill ha idag: Pall · +50 % |
| 0:27 | väntar | rolf | Grillspaden ä ju KONST. Pengar i lådan. /Rolf |
| 0:27 | väntar | mamma | Det finns måsar vid soptippar! Dom tar mat. Och små hundar. Du är inte en liten hund men ändå. |
| 0:31 | händelse | printStart | sak=pall |
| 0:36 | toast | guld | ✅ |
| 0:36 | händelse | printKlar | sak=pall n=3 |
| 0:36 | händelse | tagitUrPrint | sak=pall n=1 |
| 0:39 | sak | mamma | Det finns måsar vid soptippar! Dom tar mat. Och små hundar. Du är inte en liten hund men ändå. |
| 0:39 | sms | mamma | Det finns måsar vid soptippar! Dom tar mat. Och små hundar. Du är inte en liten hund men ändå. |
| 0:39 | sms-bubbla | mamma | Det finns måsar vid soptippar! Dom tar mat. Och små hundar. Du är inte en liten hund men ändå. |
| 0:39 | röst | mamma | Det finns måsar vid soptippar! Dom tar mat. Och små hundar. Du är inte en liten hund men ändå. · STORY |
| 0:42 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 0:42 | butiksbubbla | ali | Semester? Jag hade semester 2009. Det regnade. |
| 0:44 | röst | ali | Semester? Jag hade semester 2009. Det regnade. · STORY |
| 0:44 | händelse | salt | sak=pall n=1 |
| 0:44 | aliSalt | ali | 270 |
| 0:44 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 0:47 | klar | mamma | Det finns måsar vid soptippar! Dom tar mat. Och små hundar. Du är inte en liten hund men ändå. |
| 1:00 | väntar | värld:Mjau. | Mjau. |
| 1:03 | sak | värld:Mjau. | Mjau. |
| 1:03 | bubbla |  | Mjau. |
| 1:05 | klar | värld:Mjau. | Mjau. |
| 1:10 | händelse | printStart | sak=pall |
| 1:12 | skratt | du | falsk tuta |
| 1:15 | toast | guld | ✅ |
| 1:15 | händelse | printKlar | sak=pall n=4 |
| 1:16 | händelse | tagitUrPrint | sak=pall n=1 |
| 1:22 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 1:23 | händelse | salt | sak=pall n=1 |
| 1:23 | aliSalt | ali | 257 |
| 1:23 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 1:24 | väntar | ali | Gå inte förbi för fort. Jag hinner inte vinka. |
| 1:24 | sak | ali | Gå inte förbi för fort. Jag hinner inte vinka. |
| 1:24 | bubbla |  | Gå inte förbi för fort. Jag hinner inte vinka. |
| 1:24 | röst | ali | Gå inte förbi för fort. Jag hinner inte vinka. · SMÅPRAT |
| 1:28 | klar | ali | Gå inte förbi för fort. Jag hinner inte vinka. |
| 1:33 | väntar | värld:TUUT! Tjena! | TUUT! Tjena! |
| 1:36 | sak | värld:TUUT! Tjena! | TUUT! Tjena! |
| 1:36 | bubbla |  | TUUT! Tjena! |
| 1:37 | händelse | printStart | sak=pall |
| 1:39 | klar | värld:TUUT! Tjena! | TUUT! Tjena! |
| 1:42 | toast | guld | ✅ |
| 1:42 | händelse | printKlar | sak=pall n=5 |
| 1:43 | händelse | tagitUrPrint | sak=pall n=1 |
| 1:48 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 1:50 | händelse | salt | sak=pall n=1 |
| 1:50 | aliSalt | ali | 244 |
| 1:50 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 1:51 | väntar | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har börjat isolera. Och pall. Det är stort, Gunnar. |
| 1:51 | radio | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har börjat isolera. Och pall. Det är stort, Gunnar. |
| 1:51 | skratt | du | Radio-Kjelle |
| 1:51 | sak | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har börjat isolera. Och pall. Det är stort, Gunnar. |
| 1:51 | notis |  | 📻 Radio Tippen: Radio Tippen, Kjelle här. Skjulet vid tippen har börjat isolera. Och pall. Det är stort, Gunnar. |
| 1:51 | röst | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har börjat isolera. Och pall. Det är stort, Gunnar. · REAKTION |
| 1:59 | klar | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har börjat isolera. Och pall. Det är stort, Gunnar. |
| 2:08 | händelse | printStart | sak=pall |
| 2:13 | toast | guld | ✅ |
| 2:13 | händelse | printKlar | sak=pall n=6 |
| 2:13 | händelse | tagitUrPrint | sak=pall n=1 |
| 2:19 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 2:21 | händelse | salt | sak=pall n=1 |
| 2:21 | aliSalt | ali | 231 |
| 2:21 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 2:32 | väntar | värld:Mjau. | Mjau. |
| 2:39 | sak | värld:Mjau. | Mjau. |
| 2:39 | bubbla |  | Mjau. |
| 2:41 | skratt | du | falsk tuta |
| 2:41 | paket |  | ge |
| 2:41 | väntar |  | (läget ändras) |
| 2:41 | klar | värld:Mjau. | Mjau. |
| 2:45 | händelse | printStart | sak=pall |
| 2:49 | sak |  | (läget ändras) |
| 2:49 | brev | rolf | rolf:3 |
| 2:50 | klar |  | (läget ändras) |
| 2:51 | toast | guld | ✅ |
| 2:51 | händelse | printKlar | sak=pall n=7 |
| 2:51 | händelse | tagitUrPrint | sak=pall n=1 |
| 2:53 | väntar | info:fel | Göran snodde en pall. |
| 2:53 | paket |  | tanke → tanke |
| 2:53 | tanke | du | HALLÅ! Den där måsen tog min grej! |
| 2:53 | väntar | du | HALLÅ! Den där måsen tog min grej! |
| 2:53 | tanke | du | Mamma hade rätt. Säg inget till henne. |
| 2:53 | väntar | du | Mamma hade rätt. Säg inget till henne. |
| 2:53 | paket |  | sms |
| 2:53 | väntar | rolf | Dä ä Göran. Han ä från 2014. Han tar int skräp, bara grejer som e fina. MVH ROLF |
| 2:54 | sak | info:fel | Göran snodde en pall. |
| 2:54 | kvitto-visas | info:fel | Göran snodde en pall. |
| 2:54 | toast | fel | Göran snodde en pall. |
| 2:56 | klar | info:fel | Göran snodde en pall. |
| 2:57 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 3:01 | väntar | foto | Göran. Tjuv. |
| 3:01 | paket |  | tanke |
| 3:01 | tanke | du | Okej, Göran. Nästa gång är jag beredd. |
| 3:01 | väntar | du | Okej, Göran. Nästa gång är jag beredd. |
| 3:01 | väntar | bror | Tomt här hemma. Ingen som snor mina laddare. Inte för att jag saknar det eller nåt. |
| 3:03 | upplåst | skrivare | trim_skrivare3 |
| 3:03 | brott | UPPLÅST | trim_skrivare3 (skrivare 352 av 60) |
| 3:03 | händelse | upplast | id=trim_skrivare3 flask=skrivare |
| 3:03 | paket |  | tanke → sms |
| 3:03 | tanke | du | Fortare. Den kan gå ännu fortare. Jag hör det på den. |
| 3:03 | väntar | du | Fortare. Den kan gå ännu fortare. Jag hör det på den. |
| 3:03 | väntar | ali | Ali här. Sista skrivartrimmen. Efter den går den inte att göra bättre. Då får du bygga en större. |
| 3:03 | sak | du | Fortare. Den kan gå ännu fortare. Jag hör det på den. |
| 3:03 | notis | tanke | 💭 Fortare. Den kan gå ännu fortare. Jag hör det på den. |
| 3:03 | röst | du | Fortare. Den kan gå ännu fortare. Jag hör det på den. · STORY |
| 3:06 | händelse | printStart | sak=pall |
| 3:08 | klar | du | Fortare. Den kan gå ännu fortare. Jag hör det på den. |
| 3:11 | paket |  | tanke |
| 3:11 | tanke | du | En tandborste. Den har varit på fel ställe. |
| 3:11 | väntar | du | En tandborste. Den har varit på fel ställe. |
| 3:11 | skratt | du | kvarnen spottar |
| 3:12 | toast | guld | ✅ |
| 3:12 | händelse | printKlar | sak=pall n=8 |
| 3:12 | händelse | tagitUrPrint | sak=pall n=1 |
| 3:16 | sak | du | HALLÅ! Den där måsen tog min grej! |
| 3:16 | notis | tanke | 💭 HALLÅ! Den där måsen tog min grej! |
| 3:16 | röst | du | HALLÅ! Den där måsen tog min grej! · STORY |
| 3:18 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 3:19 | klar | du | HALLÅ! Den där måsen tog min grej! |
| 3:19 | händelse | salt | sak=pall n=1 |
| 3:19 | aliSalt | ali | 220 |
| 3:19 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 3:28 | sak | du | Mamma hade rätt. Säg inget till henne. |
| 3:28 | notis | tanke | 💭 Mamma hade rätt. Säg inget till henne. |
| 3:28 | röst | du | Mamma hade rätt. Säg inget till henne. · STORY |
| 3:29 | väntar | rolf | Tjo. Flaket ä så trist. En tomte mä luva o skägg, kan du göra en sån? /Rolf 🎅​ |
| 3:29 | paket |  | ge |
| 3:29 | väntar |  | (läget ändras) |
| 3:29 | händelse | malKlart | id=rolf3-brev del=Dag 5 – Tätt och mysigt nasta=rolf3-printa |
| 3:29 | bekräftelse | du | plats |
| 3:29 | struken | du | En tandborste. Den har varit på fel ställe. |
| 3:29 | väntar | du | Printa trädgårdstomte till flaket. |
| 3:29 | MÅL |  | Printa trädgårdstomte till flaket |
| 3:31 | klar | du | Mamma hade rätt. Säg inget till henne. |
| 3:32 | målruta |  | Printa trädgårdstomte till flaket |
| 3:33 | kvittens-bock |  | ✓ Läs brevet i Rolfs postlåda |
| 3:33 | sak | du | Printa trädgårdstomte till flaket. |
| 3:33 | pil |  | Printa trädgårdstomte till flaket |
| 3:33 | röst | du | Printa trädgårdstomte till flaket. · MÅL |
| 3:33 | händelse | printStart | sak=tomte |
| 3:33 | händelse | malKlart | id=rolf3-printa del=Dag 5 – Tätt och mysigt nasta=rolf3-ge |
| 3:33 | bekräftelse | du | plats |
| 3:33 | väntar | du | Ge Rolf trädgårdstomte till flaket. |
| 3:33 | MÅL |  | Ge Rolf trädgårdstomte till flaket |
| 3:36 | målruta |  | Ge Rolf trädgårdstomte till flaket |
| 3:36 | klar | du | Printa trädgårdstomte till flaket. |
| 3:37 | kvittens-bock |  | ✓ Printa trädgårdstomte till flaket |
| 3:38 | sak | du | Ge Rolf trädgårdstomte till flaket. |
| 3:38 | pil |  | Ge Rolf trädgårdstomte till flaket |
| 3:38 | röst | du | Ge Rolf trädgårdstomte till flaket. · MÅL |
| 3:39 | toast | guld | ✅ |
| 3:39 | händelse | printKlar | sak=tomte n=1 |
| 3:39 | händelse | tagitUrPrint | sak=tomte n=1 |
| 3:41 | klar | du | Ge Rolf trädgårdstomte till flaket. |
| 3:43 | sak | rolf | Tjo. Flaket ä så trist. En tomte mä luva o skägg, kan du göra en sån? /Rolf 🎅​ |
| 3:43 | lapp | Brev från Rolf | Tjo. Flaket ä så trist. En tomte mä luva o skägg, kan du göra en sån? /Rolf 🎅​ |
| 3:43 | röst | rolf | Tjo. Flaket ä så trist. En tomte mä luva o skägg, kan du göra en sån? /Rolf 🎅​ · STORY |
| 3:50 | klar | rolf | Tjo. Flaket ä så trist. En tomte mä luva o skägg, kan du göra en sån? /Rolf 🎅​ |
| 3:50 | händelse | brevLast | id=rolf:3 |
| 3:52 | sak |  | (läget ändras) |
| 3:52 | klar |  | (läget ändras) |
| 3:53 | händelse | lagtIPostlada | sak=tomte rolf=3 jobb=false |
| 3:53 | händelse | malKlart | id=rolf3-ge del=Dag 5 – Tätt och mysigt nasta=n4-isolera-de-sista |
| 3:53 | bekräftelse | du | plats |
| 3:53 | väntar | du | Två väggar kvar i skjulet. Sen är det tätt. |
| 3:53 | målruta |  | Isolera de sista väggarna · 2/4 |
| 3:54 | MÅL |  | Isolera de sista väggarna · 2/4 |
| 3:54 | sak | du | Två väggar kvar i skjulet. Sen är det tätt. |
| 3:54 | pil |  | Isolera de sista väggarna · 2/4 |
| 3:54 | notis | tanke | 💭 Två väggar kvar i skjulet. Sen är det tätt. |
| 3:54 | röst | du | Två väggar kvar i skjulet. Sen är det tätt. · MÅL |
| 3:54 | nick |  | nick:53 |
| 3:57 | klar | du | Två väggar kvar i skjulet. Sen är det tätt. |
| 3:57 | kvittens-bock |  | ✓ Ge Rolf trädgårdstomte till flaket |
| 4:03 | händelse | printStart | sak=byggsats:vaggar |
| 4:06 | sak | foto | Göran. Tjuv. |
| 4:06 | foto | du | Göran. Tjuv. |
| 4:06 | händelse | printKlar | sak=byggsats:vaggar n=1 |
| 4:06 | toast | guld | ✅ |
| 4:07 | händelse | tagitUrPrint | sak=byggsats:vaggar n=1 |
| 4:08 | klar | foto | Göran. Tjuv. |
| 4:12 | väntar | info:guld | 🧱 Höger vägg klar. 1 kvar. |
| 4:12 | sak | info:guld | 🧱 Höger vägg klar. 1 kvar. |
| 4:12 | kvitto-visas | info:guld | 🧱 Höger vägg klar. 1 kvar. |
| 4:12 | toast | guld | 🧱 Höger vägg klar. 1 kvar. |
| 4:14 | klar | info:guld | 🧱 Höger vägg klar. 1 kvar. |
| 4:19 | väntar | bror | Tomt här hemma. Ingen som snor mina laddare. Inte för att jag saknar det eller nåt. |
| 4:22 | väntar | värld:Mjau. | Mjau. |
| 4:26 | väntar | info:fel | Fullt i händerna. |
| 4:26 | sak | info:fel | Fullt i händerna. |
| 4:26 | kvitto-visas | info:fel | Fullt i händerna. |
| 4:26 | toast | fel | Fullt i händerna. |
| 4:27 | skratt | du | falsk tuta |
| 4:28 | klar | info:fel | Fullt i händerna. |
| 4:34 | händelse | printStart | sak=byggsats:vaggar |
| 4:36 | sak | du | Okej, Göran. Nästa gång är jag beredd. |
| 4:36 | notis | tanke | 💭 Okej, Göran. Nästa gång är jag beredd. |
| 4:36 | röst | du | Okej, Göran. Nästa gång är jag beredd. · STORY |
| 4:38 | händelse | printKlar | sak=byggsats:vaggar n=1 |
| 4:38 | toast | guld | ✅ |
| 4:39 | händelse | tagitUrPrint | sak=byggsats:vaggar n=1 |
| 4:39 | klar | du | Okej, Göran. Nästa gång är jag beredd. |
| 4:43 | struken | värld:Mjau. | Mjau. |
| 4:43 | väntar | info:guld | 🧱 Skjulet är tätt! |
| 4:43 | sak | info:guld | 🧱 Skjulet är tätt! |
| 4:43 | kvitto-visas | info:guld | 🧱 Skjulet är tätt! |
| 4:43 | toast | guld | 🧱 Skjulet är tätt! |
| 4:43 | händelse | malKlart | id=n4-isolera-de-sista del=Dag 5 – Tätt och mysigt nasta=dator |
| 4:43 | bekräftelse | du | plats |
| 4:43 | kvittens | du | Det är tätt, det är varmt. |
| 4:43 | väntar | du | Det är tätt, det är varmt. |
| 4:43 | väntar | du | Alis pappas dator. Med den kan jag sälja på nätet. |
| 4:44 | MÅL |  | Köp Alis pappas gamla dator |
| 4:44 | paket |  | tanke |
| 4:44 | tanke | du | Jaha, Rolf har hämtat en trädgårdstomte till flaket. |
| 4:44 | väntar | du | Jaha, Rolf har hämtat en trädgårdstomte till flaket. |
| 4:45 | klar | info:guld | 🧱 Skjulet är tätt! |
| 4:45 | sak | du | Det är tätt, det är varmt. |
| 4:45 | röst | du | Det är tätt, det är varmt. · STORY |
| 4:46 | målruta |  | Köp Alis pappas gamla dator |
| 4:48 | klar | du | Det är tätt, det är varmt. |
| 4:48 | sak | du | Alis pappas dator. Med den kan jag sälja på nätet. |
| 4:48 | pil |  | Köp Alis pappas gamla dator |
| 4:48 | notis | tanke | 💭 Alis pappas dator. Med den kan jag sälja på nätet. |
| 4:48 | röst | du | Alis pappas dator. Med den kan jag sälja på nätet. · MÅL |
| 4:48 | nick |  | nick:54 |
| 4:52 | klar | du | Alis pappas dator. Med den kan jag sälja på nätet. |
| 4:54 | sak | du | Jaha, Rolf har hämtat en trädgårdstomte till flaket. |
| 4:54 | notis | tanke | 💭 Jaha, Rolf har hämtat en trädgårdstomte till flaket. |
| 4:54 | röst | du | Jaha, Rolf har hämtat en trädgårdstomte till flaket. · REAKTION |
| 4:59 | klar | du | Jaha, Rolf har hämtat en trädgårdstomte till flaket. |
| 5:00 | skratt | du | däcket rullar iväg |
| 5:01 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 5:03 | toast | guld | 🖥️ Datorn är min – den ska stå i skjulet |
| 5:03 | händelse | kopt | sak=webbdator |
| 5:03 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 5:03 | röst | ali | Pappas gamla dator. Den har ett modem. Det låter som en fax som gråter. Men du kommer ut på nätet. · STORY |
| 5:03 | butiksbubbla | ali | Pappas gamla dator. Den har ett modem. Det låter som en fax som gråter. Men du kommer ut på nätet. |
| 5:09 | väntar | bror | Pappa har en spellista på Youtube som heter "Sopbilar". 34 videor. Han säger att en Scania V8 är "ren musik". |
| 5:11 | händelse | printStart | sak=byggsats:webbdator |
| 5:11 | händelse | printKlar | sak=byggsats:webbdator n=1 |
| 5:11 | toast | guld | ✅ |
| 5:13 | händelse | tagitUrPrint | sak=byggsats:webbdator n=1 |
| 5:17 | sak | ali | Ali här. Sista skrivartrimmen. Efter den går den inte att göra bättre. Då får du bygga en större. |
| 5:17 | sms | ali | Ali här. Sista skrivartrimmen. Efter den går den inte att göra bättre. Då får du bygga en större. |
| 5:17 | sms-bubbla | ali | Ali här. Sista skrivartrimmen. Efter den går den inte att göra bättre. Då får du bygga en större. |
| 5:17 | röst | ali | Ali här. Sista skrivartrimmen. Efter den går den inte att göra bättre. Då får du bygga en större. · STORY |
| 5:19 | händelse | placerat | sak=webbdator |
| 5:19 | paket |  | tanke |
| 5:19 | tanke | du | En webbshop. Från ett skjul. Med modem. Varför inte. |
| 5:19 | väntar | du | En webbshop. Från ett skjul. Med modem. Varför inte. |
| 5:19 | händelse | malKlart | id=dator del=Dag 5 – Tätt och mysigt nasta=lampskarm |
| 5:19 | bekräftelse | du | plats |
| 5:19 | väntar | du | En lampskärm. Folk betalar för ljus som ser fint ut. |
| 5:19 | MÅL |  | Printa en lampskärm att sälja |
| 5:21 | målruta |  | Printa en lampskärm att sälja |
| 5:23 | kvittens-bock |  | ✓ Ställ datorn i skjulet |
| 5:25 | klar | ali | Ali här. Sista skrivartrimmen. Efter den går den inte att göra bättre. Då får du bygga en större. |
| 5:27 | sak | du | En lampskärm. Folk betalar för ljus som ser fint ut. |
| 5:27 | pil |  | Printa en lampskärm att sälja |
| 5:27 | notis | tanke | 💭 En lampskärm. Folk betalar för ljus som ser fint ut. |
| 5:27 | röst | du | En lampskärm. Folk betalar för ljus som ser fint ut. · MÅL |
| 5:28 | nick |  | nick:55 |
| 5:32 | klar | du | En lampskärm. Folk betalar för ljus som ser fint ut. |
| 5:35 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 5:40 | sak | du | En webbshop. Från ett skjul. Med modem. Varför inte. |
| 5:40 | notis | tanke | 💭 En webbshop. Från ett skjul. Med modem. Varför inte. |
| 5:40 | röst | du | En webbshop. Från ett skjul. Med modem. Varför inte. · STORY |
| 5:44 | händelse | printStart | sak=lampskarm |
| 5:44 | klar | du | En webbshop. Från ett skjul. Med modem. Varför inte. |
| 5:45 | väntar | bud | (tips) |
| 5:46 | sak | bud | (tips) |
| 5:48 | klar | bud | (tips) |
| 5:50 | meddelande | mamma | Jag läste om en man som bodde på en soptipp. Han blev attackerad av måsar. Finns det måsar där? |
| 5:51 | röst | mamma | Jag läste om en man som bodde på en soptipp. Han blev attackerad av måsar. Finns det måsar där? · STORY |
| 6:02 | paket |  | sms |
| 6:02 | väntar | mamma | En katt? Är den vaccinerad? Rör den inte. Eller jo. Ge den en macka. |
| 6:12 | händelse | brevLast | id=m_masar |
| 6:12 | toast | guld | ✅ |
| 6:12 | händelse | printKlar | sak=lampskarm n=1 |
| 6:12 | händelse | malKlart | id=lampskarm del=Dag 5 – Tätt och mysigt nasta=mysigt |
| 6:12 | bekräftelse | du | plats |
| 6:12 | väntar | du | Skjulet ska bli mysigt på riktigt. Det är mitt hem nu. |
| 6:13 | MÅL |  | Gör det mysigt · trivsel 104/130 |
| 6:13 | händelse | tagitUrPrint | sak=lampskarm n=1 |
| 6:14 | sak | du | Skjulet ska bli mysigt på riktigt. Det är mitt hem nu. |
| 6:14 | målruta |  | Gör det mysigt · trivsel 104/130 |
| 6:14 | pil |  | Gör det mysigt · trivsel 104/130 |
| 6:14 | notis | tanke | 💭 Skjulet ska bli mysigt på riktigt. Det är mitt hem nu. |
| 6:14 | röst | du | Skjulet ska bli mysigt på riktigt. Det är mitt hem nu. · MÅL |
| 6:14 | nick |  | nick:56 |
| 6:16 | kvittens-bock |  | ✓ Printa en lampskärm att sälja |
| 6:18 | klar | du | Skjulet ska bli mysigt på riktigt. Det är mitt hem nu. |
| 6:26 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 6:27 | struken | info:guld | 3D-modell köpt – printa fönster |
| 6:27 | händelse | kopt | sak=fonster |
| 6:27 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 6:29 | sak | mamma | En katt? Är den vaccinerad? Rör den inte. Eller jo. Ge den en macka. |
| 6:29 | sms | mamma | En katt? Är den vaccinerad? Rör den inte. Eller jo. Ge den en macka. |
| 6:29 | sms-bubbla | mamma | En katt? Är den vaccinerad? Rör den inte. Eller jo. Ge den en macka. |
| 6:29 | röst | mamma | En katt? Är den vaccinerad? Rör den inte. Eller jo. Ge den en macka. · STORY |
| 6:34 | klar | mamma | En katt? Är den vaccinerad? Rör den inte. Eller jo. Ge den en macka. |
| 6:36 | händelse | printStart | sak=byggsats:fonster |
| 6:39 | toast | bra | Del 1 av 2 klar |
| 6:41 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 6:46 | väntar | värld:Mjau. | Mjau. |
| 6:51 | sak | värld:Mjau. | Mjau. |
| 6:51 | bubbla |  | Mjau. |
| 6:53 | klar | värld:Mjau. | Mjau. |
| 6:54 | händelse | printKlar | sak=byggsats:fonster n=1 |
| 6:54 | toast | guld | ✅ |
| 7:00 | händelse | tagitUrPrint | sak=byggsats:fonster n=1 |
| 7:00 | paket |  | sms |
| 7:00 | väntar | ali | Ali här. Fönster – printad. På riktigt. Jag har visat bilden för min fru tre gånger. |
| 7:08 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 7:10 | struken | info:guld | 3D-modell köpt – printa trägolv |
| 7:10 | händelse | kopt | sak=golv |
| 7:10 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 7:14 | sak | ali | Ali här. Fönster – printad. På riktigt. Jag har visat bilden för min fru tre gånger. |
| 7:14 | sms | ali | Ali här. Fönster – printad. På riktigt. Jag har visat bilden för min fru tre gånger. |
| 7:14 | sms-bubbla | ali | Ali här. Fönster – printad. På riktigt. Jag har visat bilden för min fru tre gånger. |
| 7:14 | röst | ali | Ali här. Fönster – printad. På riktigt. Jag har visat bilden för min fru tre gånger. · REAKTION |
| 7:19 | händelse | printStart | sak=byggsats:golv |
| 7:21 | klar | ali | Ali här. Fönster – printad. På riktigt. Jag har visat bilden för min fru tre gånger. |
| 7:22 | toast | bra | Del 1 av 3 klar |
| 7:24 | skratt | du | falsk tuta |
| 7:24 | väntar | värld:TUUT TUUT! | TUUT TUUT! |
| 7:25 | väntar | rolf | Kajsa la en död mus på min kudde. De e kärlek. Hon får lax ikväll. /R |
| 7:25 | toast | bra | Del 2 av 3 klar |
| 7:29 | sak | värld:TUUT TUUT! | TUUT TUUT! |
| 7:29 | bubbla |  | TUUT TUUT! |
| 7:29 | händelse | printKlar | sak=byggsats:golv n=1 |
| 7:29 | toast | guld | ✅ |
| 7:30 | händelse | tagitUrPrint | sak=byggsats:golv n=1 |
| 7:32 | klar | värld:TUUT TUUT! | TUUT TUUT! |
| 7:34 | väntar | info:guld | Trägolv på plats! Trivsel +8 |
| 7:34 | sak | info:guld | Trägolv på plats! Trivsel +8 |
| 7:34 | kvitto-visas | info:guld | Trägolv på plats! Trivsel +8 |
| 7:34 | toast | guld | Trägolv på plats! Trivsel +8 |
| 7:36 | klar | info:guld | Trägolv på plats! Trivsel +8 |
| 7:43 | händelse | printStart | sak=pall |
| 7:48 | toast | guld | ✅ |
| 7:48 | händelse | printKlar | sak=pall n=9 |
| 7:49 | händelse | tagitUrPrint | sak=pall n=1 |
| 7:54 | händelse | placerat | sak=pall |
| 7:59 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 8:00 | struken | info:guld | 3D-modell köpt – printa taklampa med skärm |
| 8:00 | händelse | kopt | sak=taklampa |
| 8:00 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 8:09 | händelse | printStart | sak=byggsats:taklampa |
| 8:11 | händelse | printKlar | sak=byggsats:taklampa n=1 |
| 8:11 | toast | guld | ✅ |
| 8:12 | händelse | tagitUrPrint | sak=byggsats:taklampa n=1 |
| 8:17 | väntar | info:guld | Taklampa med skärm på plats! Trivsel +6 |
| 8:17 | sak | info:guld | Taklampa med skärm på plats! Trivsel +6 |
| 8:17 | kvitto-visas | info:guld | Taklampa med skärm på plats! Trivsel +6 |
| 8:17 | toast | guld | Taklampa med skärm på plats! Trivsel +6 |
| 8:19 | klar | info:guld | Taklampa med skärm på plats! Trivsel +6 |
| 8:21 | scenInfo | du | Lampan tänds |
| 8:23 | morgonkort | ⏸️ Pausad | ⏸️ Pausad · Klicka för att fortsätta. |
| 8:29 | tanke | du | Det börjar kännas som ett hem. På riktigt. |
| 8:29 | notis | tanke | 💭 Det börjar kännas som ett hem. På riktigt. |
| 8:29 | röst | du | Det börjar kännas som ett hem. På riktigt. · REAKTION |
| 8:34 | händelse | malKlart | id=mysigt del=Dag 5 – Tätt och mysigt nasta=vind5 |
| 8:34 | bekräftelse | du | plats |
| 8:34 | lapp | 📔 Dagbok | Lampan lyser. Pappa ska visst komma förbi i morgon. |
| 8:34 | dagbokrad | du | Lampan lyser. Pappa ska visst komma förbi i morgon. |
| 8:34 | väntar | notis:Lampan lyser. Pappa ska visst komma förb | Lampan lyser. Pappa ska visst komma förbi i morgon. |
| 8:34 | väntar | du | En tredje vindsnurra på taket. Skrivare M drar mycket. |
| 8:34 | MÅL |  | Printa och sälj |
| 8:36 | sak | du | En tredje vindsnurra på taket. Skrivare M drar mycket. |
| 8:36 | målruta |  | Printa och sälj |
| 8:36 | pil |  | Printa och sälj |
| 8:36 | notis | tanke | 💭 En tredje vindsnurra på taket. Skrivare M drar mycket. |
| 8:36 | röst | du | En tredje vindsnurra på taket. Skrivare M drar mycket. · MÅL |
| 8:40 | toast | skak | handen skakar: fullt |
| 8:40 | klar | du | En tredje vindsnurra på taket. Skrivare M drar mycket. |
| 8:42 | sak | notis:Lampan lyser. Pappa ska visst komma förb | Lampan lyser. Pappa ska visst komma förbi i morgon. |
| 8:42 | notis | dagbok | Lampan lyser. Pappa ska visst komma förbi i morgon. |
| 8:45 | klar | notis:Lampan lyser. Pappa ska visst komma förb | Lampan lyser. Pappa ska visst komma förbi i morgon. |
| 8:52 | händelse | printStart | sak=pall |
| 8:54 | strömdipp | du | vindsnurra3 |
| 8:54 | paket |  | tanke |
| 8:54 | tanke | du | Tyst. Strömmen tog slut. Det behövs mer. |
| 8:54 | väntar | du | Tyst. Strömmen tog slut. Det behövs mer. |
| 8:54 | toast | fel | Ingen ström – maskinerna drar mer än du får in. Bygg en solpanel |
| 8:55 | sak | du | Tyst. Strömmen tog slut. Det behövs mer. |
| 8:55 | notis | tanke | 💭 Tyst. Strömmen tog slut. Det behövs mer. |
| 8:55 | röst | du | Tyst. Strömmen tog slut. Det behövs mer. · STORY |
| 8:58 | klar | du | Tyst. Strömmen tog slut. Det behövs mer. |
| 9:08 | upplåst | strom | vindsnurra3 |
| 9:08 | brott | UPPLÅST | vindsnurra3 (strom 45 av 15) |
| 9:08 | händelse | upplast | id=vindsnurra3 flask=strom |
| 9:08 | paket |  | tanke → sms |
| 9:08 | tanke | du | Skrivare M drar mer än två snurror ger. Jag trampar igen. |
| 9:08 | väntar | du | Skrivare M drar mer än två snurror ger. Jag trampar igen. |
| 9:08 | väntar | ali | Ali här. En tredje snurra. Mitt på taket. Sen är taket fullt. Sen får solen ta över. |
| 9:08 | sak | du | Skrivare M drar mer än två snurror ger. Jag trampar igen. |
| 9:08 | notis | tanke | 💭 Skrivare M drar mer än två snurror ger. Jag trampar igen. |
| 9:08 | röst | du | Skrivare M drar mer än två snurror ger. Jag trampar igen. · STORY |
| 9:13 | klar | du | Skrivare M drar mer än två snurror ger. Jag trampar igen. |
| 9:20 | skratt | du | däcket rullar iväg |
| 9:20 | paket |  | tanke |
| 9:20 | tanke | du | Däcket ville inte stanna. Jag förstår det. |
| 9:20 | väntar | du | Däcket ville inte stanna. Jag förstår det. |
| 9:25 | väntar | bror | Pappa har en spellista på Youtube som heter "Sopbilar". 34 videor. Han säger att en Scania V8 är "ren musik". |
| 9:25 | sak | ali | Ali här. En tredje snurra. Mitt på taket. Sen är taket fullt. Sen får solen ta över. |
| 9:25 | sms | ali | Ali här. En tredje snurra. Mitt på taket. Sen är taket fullt. Sen får solen ta över. |
| 9:25 | sms-bubbla | ali | Ali här. En tredje snurra. Mitt på taket. Sen är taket fullt. Sen får solen ta över. |
| 9:25 | röst | ali | Ali här. En tredje snurra. Mitt på taket. Sen är taket fullt. Sen får solen ta över. · STORY |
| 9:31 | toast | guld | ✅ |
| 9:31 | händelse | printKlar | sak=pall n=10 |
| 9:31 | händelse | tagitUrPrint | sak=pall n=1 |
| 9:32 | klar | ali | Ali här. En tredje snurra. Mitt på taket. Sen är taket fullt. Sen får solen ta över. |
| 9:37 | händelse | placerat | sak=pall |
| 9:40 | struken | du | Däcket ville inte stanna. Jag förstår det. |
| 9:42 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 9:44 | struken | info:guld | 3D-modell köpt – printa vindsnurra till skjultaket |
| 9:44 | händelse | kopt | sak=vindsnurra |
| 9:44 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 9:52 | händelse | printStart | sak=byggsats:vindsnurra |
| 9:56 | händelse | printKlar | sak=byggsats:vindsnurra n=1 |
| 9:56 | toast | guld | ✅ |
| 9:57 | struken | info:guld | 🌬️ Vindsnurran ska upp på skjulets tak. |
| 9:57 | händelse | tagitUrPrint | sak=byggsats:vindsnurra n=1 |
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
| 10:02 | MÅL |  | Klart för idag – sov när du vill |
| 10:05 | kvittens-bock |  | ✓ Sätt en tredje vindsnurra på taket |
| 10:07 | röst | mamma | Haha, träplankor? · STORY |
| 10:09 | röst | mamma | Vad är det för skit? Du har ju inte ens tapeter på väggarna. · STORY |
| 10:13 | röst | mamma | Och var är badrummet? Du duschar väl? · STORY |
| 10:16 | röst | mamma | Pappa säger "aha, vad lugnt då". Pappa säger det om allt. · STORY |
| 10:20 | röst | mamma | …men fönstret var fint. Det kommer in ljus i alla fall. ❤️ · STORY |
| 10:26 | morgonkort | 📕 Kapitel 2: Ett riktigt hem | 📕 Kapitel 2: Ett riktigt hem · Mamma är inte imponerad. Än. Nästa mål: tapeter , en egen gamingbod med RGB, gamer-inredning – och en jacuzzi . Visa henne. Ali har nya ritningar – och ♾️ trimningar som aldrig tar slut. |
| 10:26 | väntar | notis:🌇 Klockan är 21. Ali slår igen luckan.  | 🌇 Klockan är 21. Ali slår igen luckan. Dagens jobb är klart – gå in i skjulet och sov i sängen. |
| 10:34 | tanke | du | Inte en enda frusen tå. Rekord. |
| 10:34 | väntar | du | Inte en enda frusen tå. Rekord. |
| 10:35 | väntar | notis:📔 Prestation: Ett hem att bo i · +3 res | 📔 Prestation: Ett hem att bo i · +3 respekt |
| 10:39 | lapp | Dagbok | Fem dagar. Tänk om tre veckor. |
| 10:39 | röst | du | Fem dagar. Tänk om tre veckor. · REAKTION |
| 10:43 | paket |  | replik |
| 10:43 | väntar | rolf | Hoppa in. Ja ska visa dej en grej. |
| 10:43 | sak | du | (nytt mål i rutan) |
| 10:43 | pil |  | Klart för idag – sov när du vill |
| 10:43 | skratt | du | falsk tuta |
| 10:43 | klar | du | (nytt mål i rutan) |
| 10:45 | sak | rolf | Hoppa in. Ja ska visa dej en grej. |
| 10:45 | notis |  | Rolf: ”Hoppa in. Ja ska visa dej en grej.” |
| 10:45 | röst | rolf | Hoppa in. Ja ska visa dej en grej. · STORY |
| 10:48 | klar | rolf | Hoppa in. Ja ska visa dej en grej. |
| 10:57 | sak | du | Inte en enda frusen tå. Rekord. |
| 10:57 | notis | tanke | 💭 Inte en enda frusen tå. Rekord. |
| 10:57 | röst | du | Inte en enda frusen tå. Rekord. · REAKTION |
| 11:00 | klar | du | Inte en enda frusen tå. Rekord. |
| 11:00 | scenInfo | rolf | Rolf kör upp till sin bänk |
| 11:04 | röst | rolf | Kall öl ä viktigt. · STORY |
| 11:04 | bubbla | rolf | Kall öl ä viktigt. |
| 11:12 | röst | rolf | Ja kommer hit varje kväll. Förr va vi två på bänken. · STORY |
| 11:12 | bubbla | rolf | Ja kommer hit varje kväll. Förr va vi två på bänken. |
| 11:14 | skratt | du | falsk tuta |
| 11:30 | röst | rolf | Dä där ä Bengt-Åke. Vinka int. · STORY |
| 11:30 | bubbla | rolf | Dä där ä Bengt-Åke. Vinka int. |
| 11:45 | röst | rolf | Den ä skyldig mej pengar. · STORY |
| 11:45 | bubbla | rolf | Den ä skyldig mej pengar. |
| 11:54 | väntar | foto | Rolfs bänk |
| 11:54 | paket |  | tanke |
| 11:54 | tanke | du | Han kommer hit varje kväll. Nu vet jag var. |
| 11:54 | väntar | du | Han kommer hit varje kväll. Nu vet jag var. |
| 11:54 | skratt | du | Rolfs bänk |
| 12:00 | sak | mamma | Pappa kommer förbi i morgon. Han säger inget men han vill. ❤️ |
| 12:00 | sms | mamma | Pappa kommer förbi i morgon. Han säger inget men han vill. ❤️ |
| 12:00 | sms-bubbla | mamma | Pappa kommer förbi i morgon. Han säger inget men han vill. ❤️ |
| 12:00 | röst | mamma | Pappa kommer förbi i morgon. Han säger inget men han vill. ❤️ · STORY |
| 12:05 | klar | mamma | Pappa kommer förbi i morgon. Han säger inget men han vill. ❤️ |
| 12:13 | sak | foto | Rolfs bänk |
| 12:13 | foto | du | Rolfs bänk |
| 12:16 | klar | foto | Rolfs bänk |
| 12:18 | nattkort | du | 🌙 17 dagar kvar. God natt. zzz… Nu vet en mås att jag bor HÄR. Pengarna är borta. Med en mås. DAGENS PRINTAR Pall × 8 Trädgårdstomte till flaket × 1 Lampskärm |

<details><summary>Botens handlingar dag 5</summary>

- 0:00 — dag 5 börjar — (2539 kr)
- 0:08 popup: "FORTSÄTT" (2539 kr)
- 0:21 gå till Rolfs postlåda (28 m) (2539 kr)
- 0:27 panel: "Rolfs postlåda
Det här låg i l" (2789 kr)
- 0:27 tjänar pengar till väntar på sopbilen (BO): 2789/2849 kr → printar pall (270 kr) (2789 kr)
- 0:29 gå till skrivaren (8 m) (2789 kr)
- 0:31 printar Pall (2789 kr)
- 0:37 tar ut 1 st ur skrivaren (2789 kr)
- 0:42 gå till Ali (26 m) (2789 kr)
- 0:42 öppnar Alis butik – sälja (2789 kr)
- 0:44 säljer hos Ali: +270 kr (3059 kr)
- 0:49 tjänar pengar till väntar på sopbilen (BO): 3059/3119 kr → printar pall (257 kr) (3059 kr)
- 1:00 plockar 2 skräp på tippen (bär max 16) (3059 kr)
- 1:02 gå till kvarnen (13 m) (3059 kr)
- 1:09 gå till skrivaren (5 m) (3059 kr)
- 1:10 printar Pall (3059 kr)
- 1:16 tar ut 1 st ur skrivaren (3059 kr)
- 1:22 gå till Ali (26 m) (3059 kr)
- 1:22 öppnar Alis butik – sälja (3059 kr)
- 1:24 säljer hos Ali: +257 kr (3316 kr)
- 1:30 tjänar pengar till väntar på sopbilen (BO): 3316/3376 kr → printar pall (244 kr) (3316 kr)
- 1:36 gå till skrivaren (24 m) (3316 kr)
- 1:37 printar Pall (3316 kr)
- 1:43 tar ut 1 st ur skrivaren (3316 kr)
- 1:48 gå till Ali (24 m) (3316 kr)
- 1:48 öppnar Alis butik – sälja (3316 kr)
- 1:50 säljer hos Ali: +244 kr (3560 kr)
- 2:01 tjänar pengar till väntar på sopbilen (BO): 3560/3620 kr → printar pall (231 kr) (3560 kr)
- 2:06 gå till skrivaren (24 m) (3560 kr)
- 2:08 printar Pall (3560 kr)
- 2:14 tar ut 1 st ur skrivaren (3560 kr)
- 2:19 gå till Ali (24 m) (3560 kr)
- 2:19 öppnar Alis butik – sälja (3560 kr)
- 2:21 säljer hos Ali: +231 kr (3791 kr)
- 2:24 tjänar pengar till väntar på sopbilen (BO): 3791/3851 kr → printar pall (220 kr) (3791 kr)
- 2:36 plockar 4 skräp på tippen (bär max 16) (3791 kr)
- 2:39 gå till kvarnen (12 m) (3791 kr)
- 2:44 gå till skrivaren (5 m) (3791 kr)
- 2:45 printar Pall (3791 kr)
- 2:51 tar ut 1 st ur skrivaren (3791 kr)
- 2:57 gå till Ali (27 m) (3791 kr)
- 2:57 öppnar Alis butik – sälja (3791 kr)
- 3:00 tjänar pengar till väntar på sopbilen (BO): 3791/3851 kr → printar pall (220 kr) (3791 kr)
- 3:05 gå till skrivaren (24 m) (3791 kr)
- 3:06 printar Pall (3791 kr)
- 3:13 tar ut 1 st ur skrivaren (3791 kr)
- 3:18 gå till Ali (24 m) (3791 kr)
- 3:18 öppnar Alis butik – sälja (3791 kr)
- 3:20 säljer hos Ali: +220 kr (4011 kr)
- 3:29 gå till Rolfs postlåda (31 m) (4011 kr)
- 3:32 gå till skrivaren (8 m) (4011 kr)
- 3:33 printar Trädgårdstomte till flaket (4011 kr)
- 3:39 tar ut 1 st ur skrivaren (4011 kr)
- 3:52 valj tomte: true, vald tomte, post {"l":null,"tr":null,"tm":[]}, nummer false (4011 kr)
- 3:53 gå till Rolfs postlåda (8 m) (4011 kr)
- 4:01 gå till skrivaren (8 m) (4011 kr)
- 4:03 printar Isolerskiva (vägg) (4011 kr)
- 4:08 tar ut 1 st ur skrivaren (4011 kr)
- 4:12 gå till skjulet (hoger) (19 m) (4011 kr)
- 4:26 plockar 3 skräp på tippen (bär max 16) (4011 kr)
- 4:29 gå till kvarnen (11 m) (4011 kr)
- 4:33 gå till skrivaren (5 m) (4011 kr)
- 4:34 printar Isolerskiva (vägg) (4011 kr)
- 4:39 tar ut 1 st ur skrivaren (4011 kr)
- 4:43 gå till skjulet (fram) (19 m) (4011 kr)
- 5:01 gå till Ali (20 m) (4011 kr)
- 5:01 öppnar Alis butik – köpa alis pappas gamla dator (4011 kr)
- 5:04 köper webbdator för 300 kr (3711 kr)
- 5:10 gå till skrivaren (24 m) (3711 kr)
- 5:11 printar Alis pappas gamla dator (3711 kr)
- 5:13 tar ut 1 st ur skrivaren (3711 kr)
- 5:18 gå till platsen för alis pappas gamla dator (21 m) (3711 kr)
- 5:19 ställer ut alis pappas gamla dator (3711 kr)
- 5:35 gå till Ali (16 m) (3711 kr)
- 5:35 öppnar Alis butik – köpa receptet lampskärm (3711 kr)
- 5:36 Ali har inte lampskarm (3711 kr)
- 5:43 gå till skrivaren (24 m) (3711 kr)
- 5:44 printar Lampskärm (3711 kr)
- 6:02 popup: "Bara en katt." (3711 kr)
- 6:12 popup: "Läst" (3711 kr)
- 6:14 tar ut 1 st ur skrivaren (3711 kr)
- 6:26 gå till Ali (24 m) (3711 kr)
- 6:26 öppnar Alis butik – köpa fönster (3711 kr)
- 6:28 köper fonster för 90 kr (3621 kr)
- 6:34 gå till skrivaren (24 m) (3621 kr)
- 6:36 printar Fönster (2 delar) (3621 kr)
- 6:48 plockar 3 skräp på tippen (bär max 16) (3621 kr)
- 6:50 gå till kvarnen (11 m) (3621 kr)
- 7:00 gå till skrivaren (5 m) (3621 kr)
- 7:00 tar ut 1 st ur skrivaren (3621 kr)
- 7:04 gå till skjulet (20 m) (3621 kr)
- 7:04 sätter ett fönster (3621 kr)
- 7:08 gå till Ali (20 m) (3621 kr)
- 7:08 öppnar Alis butik – köpa trägolv (3621 kr)
- 7:11 köper golv för 140 kr (3481 kr)
- 7:17 gå till skrivaren (24 m) (3481 kr)
- 7:19 printar Trägolv (3 delar) (3481 kr)
- 7:30 tar ut 1 st ur skrivaren (3481 kr)
- 7:34 gå till skjulet (17 m) (3481 kr)
- 7:41 gå till skrivaren (17 m) (3481 kr)
- 7:43 printar Pall (3481 kr)
- 7:49 tar ut 1 st ur skrivaren (3481 kr)
- 7:53 gå till platsen för pall (18 m) (3481 kr)
- 7:54 ställer ut pall (3481 kr)
- 7:59 gå till Ali (15 m) (3481 kr)
- 7:59 öppnar Alis butik – köpa taklampa med skärm (3481 kr)
- 8:01 köper taklampa för 90 kr (3391 kr)
- 8:07 gå till skrivaren (24 m) (3391 kr)
- 8:09 printar Taklampa med skärm (3391 kr)
- 8:13 tar ut 1 st ur skrivaren (3391 kr)
- 8:17 gå till skjulet (17 m) (3391 kr)
- 8:31 kort: "FORTSÄTTeller tryck Esc" (3391 kr)
- 8:40 plockar 2 skräp på tippen (bär max 16) (3391 kr)
- 8:43 gå till kvarnen (14 m) (3391 kr)
- 8:50 gå till skrivaren (5 m) (3391 kr)
- 8:52 printar Pall (3391 kr)
- 8:54 gå till cykeln (1 m) (3391 kr)
- 9:32 tar ut 1 st ur skrivaren (3391 kr)
- 9:36 gå till platsen för pall (22 m) (3391 kr)
- 9:37 ställer ut pall (3391 kr)
- 9:42 gå till Ali (15 m) (3391 kr)
- 9:42 öppnar Alis butik – köpa vindsnurra till skjultaket (3391 kr)
- 9:45 köper vindsnurra för 133 kr (3258 kr)
- 9:51 gå till skrivaren (24 m) (3258 kr)
- 9:52 printar Vindsnurra till skjultaket (3258 kr)
- 9:57 tar ut 1 st ur skrivaren (3258 kr)
- 10:01 gå till sätt vindsnurran på taket (18 m) (3258 kr)
- 10:26 telefonscen: "Okej. Kapitel 2 då. 😤" (4258 kr)
- 10:34 kort: "Kör!" (4258 kr)
- 10:43 panel: "Dagbok
Före och efter
3 decemb" (4258 kr)
- 11:00 gå till sopbilen (Rolfs bänk) (39 m) (4258 kr)
- 12:00 tillbaka från Rolfs bänk (4258 kr)
- 12:15 gå till sängen (39 m) (4258 kr)

</details>

## Dag 6

| Tid | Källa | Vem | Text |
|---|---|---|---|
| 12:18 | vara | ali | kruka |
| 12:18 | händelse | malKlart | id=sov5 del=Dag 5 – Tätt och mysigt nasta=pappa6 |
| 12:18 | bekräftelse | du | plats |
| 12:18 | MÅL |  | Pappa kommer förbi idag |

<details><summary>Botens handlingar dag 6</summary>

- 0:00 — dag 6 börjar — (4258 kr)

</details>
