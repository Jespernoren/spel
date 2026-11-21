# Simulering kapitel 1 – körning 1

*Gjord 2026-11-21 15:24 med `verktyg/sim-kapitel1.mjs` + `verktyg/sim-bot.js` (punkt AX). Boten går 4,5 m/s, läser 15 tecken/s, trampar, vevar, plockar, printar, köper och säljer via spelets egna funktioner. Tiderna är speltid.*

## Sammanfattning

| Dag | Minuter | Väntan | Prints (totalt) | Kr vid sömn | Bär | Trivsel |
|---|---|---|---|---|---|---|
| 1 | 8.1 | 2 % | 13 | 80 | 6 | 18 |
| 2 | 7.6 | 2 % | 24 | 827 | 10 | 38 |
| 3 | 9.3 | 3 % | 32 | 602 | 16 | 78 |
| 4 | 14.3 | 1 % | 55 | 727 | 16 | 96 |
| 5 | 0.0 | 0 % | 55 | 727 | 16 | 96 |

## Flaskhalskartan (EE)

| Dag | bara | mala | trampa | strom | skrivare | inkomst | Upplåst |
|---|---|---|---|---|---|---|---|
| 1 | 5 | 8 | 19 | 13 | 68 | 11 | grip (bara, 5:31), kruka (inkomst, 6:12) |
| 2 | 2 | 7 | 8 | 7 | 209 | 0 | kvarnmotor (mala, 2:46), rullstall (skrivare, 4:14), trim_skrivare (skrivare, 5:47), vindsnurra (trampa, 6:12) |
| 3 | 0 | 11 | 23 | 46 | 372 | 0 | cykelbatteri (strom, 4:41), ryggkorg (bara, 5:29), skrivare2 (skrivare, 7:07) |
| 4 | 1 | 34 | 22 | 58 | 451 | 19 | trim_skrivare2 (skrivare, 4:43), matarband (bara, 7:45, reserv), vindsnurra2 (strom, 9:18) |
| 5 | 0 | 0 | 0 | 0 | 0 | 0 |  |

TIDIG: 0 · FAST: 0 · upplåst av reserven (målet väntade 3 min): 1

**SKRATT:** 43 roliga ögonblick på 39 min (10.9 per 10 min, mål minst 5)

**Köp:**

- dag 1 2:37 – gammalkvarn (30 kr)
- dag 1 5:54 – grip (50 kr)
- dag 1 6:20 – kruka (40 kr)
- dag 1 7:01 – sang (60 kr)
- dag 2 3:14 – kvarnmotor (50 kr)
- dag 2 6:27 – vindsnurra (133 kr)
- dag 2 7:04 – dorr (120 kr)
- dag 3 5:22 – cykelbatteri (30 kr)
- dag 3 5:50 – ryggkorg (120 kr)
- dag 3 6:23 – bord (120 kr)
- dag 3 7:21 – skrivare2 (500 kr)
- dag 3 8:38 – tak (250 kr)
- dag 4 8:02 – matarband (120 kr)
- dag 4 8:45 – pall (80 kr)
- dag 4 10:17 – vindsnurra (133 kr)
- dag 4 11:38 – vaggar (130 kr)

## Storykedjan (kvittens → varför → nytt mål)

| Dag | Tid | Id | Kvittens | Varför | Nytt mål | Tid till målet |
|---|---|---|---|---|---|---|
| 1 | 0:28 | lastat | Tung. Den har storebror aldrig burit så långt. |  | Skrivaren ställer jag där borta, mot skräpberget. Min första | 2.5 s |
| 1 | 1:40 | printStart | Den piper. Den GÖR något. |  | En nyckelring till, så länge storebrors rulle räcker. | 3.8 s |
| 1 | 1:46 | printKlar | Klar! Ta ut den innan den ändrar sig. |  | En nyckelring till, så länge storebrors rulle räcker. | – |
| 1 | 6:33 | krukaD1 | En kruka. Mamma skulle bli så stolt. Hon får inte veta. |  | Ali gillar krukor. Han sa det själv. | 2.0 s |
| 2 | 6:54 | vindsnurra | Den snurrar! Långsamt. Men den snurrar. |  | Det drar från dörrhålet. En dörr kan jag printa. | 3.0 s |
| 4 | 8:33 | sophallare | Nu kan jag tömma hela kärran på en gång. |  | Jag behöver något att sitta på. En pall. Lagom ambitiöst. | 2.9 s |

## Hur länge nya mål väntade (från att förra målet blev klart till att det nya syntes i målrutan)

Snitt 2.5 s · max 13.6 s · över 4 s: 4 · över 8 s: 3 av 49

## Flaggor (27)

- **UPPREPNING** dag 4 8:44: Bra val. Folk köper sånt. Jag vet inte varför. (CT)
- **LUGN** dag 2 0:08: 0.0 s efter BÖRJA DAGEN: [lapp] "Första natten i en riktig säng. Jag printade den själv."
- **KROCK** dag 1 3:13: 0.7 s mellan [notis] "Kvarnen funkar. Soptippen är en gruva." och [notis] "💭 Min egen tråd. Nu printar jag en nyckelring av den."
- **KROCK** dag 2 1:05: 0.1 s mellan [lapp] "Sopbilen tippade en ny last. Allt det skräpet – och grinden " och [notis] "En stor bil tippade en ny last. Allt det skräpet – och grind"
- **KROCK** dag 4 10:43: 0.2 s mellan [lapp] "Slut på trampandet. Nästan." och [notis] "💭 Det drar genom väggarna. Isolering, och sen blir det varm"
- **KROCK** dag 4 14:06: 1.4 s mellan [notis] "💭 Däcket ville inte stanna. Jag förstår det." och [lapp] "Fyra dagar. Tänk om tre veckor."
- **KEDJA** dag 1 1:46: printKlar: kvittensen lästes aldrig upp
- **SEN** dag 1 4:47: 49.7 s efter händelsen: kjelle: "God morgon, det är Kjelle på Radio Tippen! Det har flyttat in någon i "
- **SEN** dag 1 6:31: 18.4 s efter händelsen: ali: "Ali här. Jag såg Skräpgrip på avstånd. Ett streck blev lite snett. Mit"
- **SEN** dag 1 7:47: 17.3 s efter händelsen: notis:Storebrors skrivare: Slut på tråd – mal : "Storebrors skrivare: Slut på tråd – mal mer så fortsätter den"
- **SEN** dag 2 0:25: 17.4 s efter händelsen: notis:Första natten i en riktig säng. Jag prin: "Första natten i en riktig säng. Jag printade den själv."
- **SEN** dag 3 8:05: 107.3 s efter händelsen: ali: "Ali här. Du printade Ryggkorg från min ritning. Och det FUNKAR? Jag ha"
- **SEN** dag 4 8:55: 19.6 s efter händelsen: ali: "Ali här. Jag såg Sophållare på avstånd. Ett streck blev lite snett. Mi"
- **SEN** dag 4 14:05: 53.6 s efter händelsen: du: "Däcket ville inte stanna. Jag förstår det."
- **PAUS** dag 1 0:40: 0.2 s paus före "Skrivaren behöver ström. Hur fixar jag det här ute"
- **PAUS** dag 1 1:44: 0.0 s paus före "Den piper. Den GÖR något."
- **PAUS** dag 1 3:13: 0.0 s paus före "Kvarnen funkar. Soptippen är en gruva."
- **PAUS** dag 1 6:38: 0.0 s paus före "En kruka. Mamma skulle bli så stolt. Hon får inte "
- **PAUS** dag 2 4:04: 0.0 s paus före "Gården är STÄDAD, av mig, frivilligt. Mamma skulle"
- **PAUS** dag 3 6:10: 0.0 s paus före "Ryggkorg ska jag ha på mig."
- **PAUS** dag 4 4:21: 0.1 s paus före "12 st i tratten · 9 st på marken bredvid"
- **TOM RUTA** dag 1 3:55: 4.6 s innan "Gå till Ali" syntes
- **TORRT** dag 4 7:49: 246 s utan roligt ögonblick
- **TEMPO** dag 1 8:04: dag 1 tog 8.1 min (mål 10–12)
- **TEMPO** dag 2 7:35: dag 2 tog 7.6 min (mål 10–15)
- **TEMPO** dag 3 9:19: dag 3 tog 9.3 min (mål 10–15)
- **TEMPO** dag 5 0:01: dag 5 tog 0.0 min (mål 10–15)

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
| 0:10 | sak-del | du | Men först en skylt, så att alla vet var jag bor. Hammaren har jag i verktygsraden. |
| 0:10 | röst | du | Men först en skylt, så att alla vet var jag bor. Hammaren har jag i verktygsraden. · STORY |
| 0:15 | väntar | du | Spikade ihop en skylt av bräder från skräpberget: Soptippsvägen 1. Inte mycket för världen, men det är MITT. |
| 0:15 | varför-köad | du | Skrivaren står kvar på cykeln. Den ska av. |
| 0:15 | väntar | du | Skrivaren står kvar på cykeln. Den ska av. |
| 0:17 | klar | du | Se så mycket skräp här är. Det är ju en guldgruva! |
| 0:20 | sak | du | Spikade ihop en skylt av bräder från skräpberget: Soptippsvägen 1. Inte mycket för världen, men det är MITT. |
| 0:20 | kvitto-visas | du | Spikade ihop en skylt av bräder från skräpberget: Soptippsvägen 1. Inte mycket för världen, men det är MITT. |
| 0:20 | lapp | 📔 Dagbok | Spikade ihop en skylt av bräder från skräpberget: Soptippsvägen 1. Inte mycket för världen, men det är MITT. |
| 0:20 | dagbokrad | du | Spikade ihop en skylt av bräder från skräpberget: Soptippsvägen 1. Inte mycket för världen, men det är MITT. |
| 0:20 | notis | dagbok | Spikade ihop en skylt av bräder från skräpberget: Soptippsvägen 1. Inte mycket för världen, men det är MITT. |
| 0:20 | klar | du | Spikade ihop en skylt av bräder från skräpberget: Soptippsvägen 1. Inte mycket för världen, men det är MITT. |
| 0:25 | struken | du | Skrivaren står kvar på cykeln. Den ska av. |
| 0:25 | sak | du | (nytt mål i rutan) |
| 0:26 | klar | du | (nytt mål i rutan) |
| 0:28 | struken | info:info | ⏎ Enter – hoppa över |
| 0:28 | händelse | lastatAv | sak=skrivare |
| 0:28 | paket |  | sms |
| 0:28 | väntar | mamma | Hur kunde du bara gå? Är du ok? Svara när jag ringer! |
| 0:28 | kvittens | du | Tung. Den har storebror aldrig burit så långt. |
| 0:28 | väntar | du | Tung. Den har storebror aldrig burit så långt. |
| 0:28 | väntar | info:bra | 🖨️ Storebrors skrivare. Den ska stå där borta, mot skräpberget. |
| 0:28 | sak | du | Tung. Den har storebror aldrig burit så långt. |
| 0:28 | notis | tanke | 💭 Tung. Den har storebror aldrig burit så långt. |
| 0:28 | röst | du | Tung. Den har storebror aldrig burit så långt. · STORY |
| 0:28 | händelse | malKlart | id=lasta del=Dag 1 – Kom igång nasta=stall |
| 0:28 | väntar | du | Skrivaren ställer jag där borta, mot skräpberget. Min första verkstad. |
| 0:28 | MÅL |  | Ställ upp skrivaren |
| 0:31 | målruta |  | Ställ upp skrivaren |
| 0:32 | hjälp | kontroll | E: Ryggsäcken och kistan |
| 0:32 | klar | du | Tung. Den har storebror aldrig burit så långt. |
| 0:34 | sak | du | Skrivaren ställer jag där borta, mot skräpberget. Min första verkstad. |
| 0:34 | pil |  | Ställ upp skrivaren |
| 0:34 | notis | tanke | 💭 Skrivaren ställer jag där borta, mot skräpberget. Min första verkstad. |
| 0:34 | röst | du | Skrivaren ställer jag där borta, mot skräpberget. Min första verkstad. · MÅL |
| 0:34 | nick |  | nick:1 |
| 0:35 | struken | info:bra | 🖨️ Storebrors skrivare. Den ska stå där borta, mot skräpberget. |
| 0:35 | väntar | info:bra | 🖨️ Storebrors skrivare står på sin plats |
| 0:35 | händelse | placerat | sak=skrivareS |
| 0:35 | paket |  | tanke |
| 0:35 | tanke | du | Storebrors rulle. Den räcker inte länge. |
| 0:35 | väntar | du | Storebrors rulle. Den räcker inte länge. |
| 0:35 | duns | du | ställs ner |
| 0:35 | händelse | malKlart | id=stall del=Dag 1 – Kom igång nasta=strom |
| 0:35 | struken | du | Storebrors rulle. Den räcker inte länge. |
| 0:35 | väntar | du | Skrivaren behöver ström. Hur fixar jag det här ute? |
| 0:35 | MÅL |  | Skrivaren behöver ström |
| 0:38 | målruta |  | Skrivaren behöver ström |
| 0:39 | kvittens-bock |  | ✓ Ställ upp skrivaren |
| 0:40 | klar | du | Skrivaren ställer jag där borta, mot skräpberget. Min första verkstad. |
| 0:40 | sak | du | Skrivaren behöver ström. Hur fixar jag det här ute? |
| 0:40 | pil |  | Skrivaren behöver ström |
| 0:40 | notis | tanke | 💭 Skrivaren behöver ström. Hur fixar jag det här ute? |
| 0:40 | röst | du | Skrivaren behöver ström. Hur fixar jag det här ute? · MÅL |
| 0:41 | nick |  | nick:2 |
| 0:44 | klar | du | Skrivaren behöver ström. Hur fixar jag det här ute? |
| 0:44 | struken | info:bra | 🖨️ Storebrors skrivare står på sin plats |
| 1:17 | paket |  | tanke |
| 1:17 | tanke | du | Cykeln… och storebrors generator? |
| 1:17 | väntar | du | Cykeln… och storebrors generator? |
| 1:17 | sak | du | Cykeln… och storebrors generator? |
| 1:17 | kvitto-visas | du | Cykeln… och storebrors generator? |
| 1:17 | notis | tanke | 💭 Cykeln… och storebrors generator? |
| 1:17 | röst | du | Cykeln… och storebrors generator? · STORY |
| 1:17 | händelse | malKlart | id=strom del=Dag 1 – Kom igång nasta=bygg |
| 1:17 | väntar | du | Cykeln där borta vid vägen kan ge ström, om generatorn sitter på. Båda ska stå vid skrivaren. |
| 1:18 | MÅL |  | Ställ cykel och generator |
| 1:20 | målruta |  | Ställ cykel och generator |
| 1:20 | klar | du | Cykeln… och storebrors generator? |
| 1:21 | paket |  | tanke |
| 1:21 | tanke | du | Storebrors generator. Den gör el när cykeln snurrar. |
| 1:21 | väntar | du | Storebrors generator. Den gör el när cykeln snurrar. |
| 1:21 | händelse | placerat | sak=generator |
| 1:21 | duns | du | ställs ner |
| 1:21 | kvittens-bock |  | ✓ Skrivaren behöver ström |
| 1:23 | sak | du | Cykeln där borta vid vägen kan ge ström, om generatorn sitter på. Båda ska stå vid skrivaren. |
| 1:23 | pil |  | Ställ cykel och generator |
| 1:23 | notis | tanke | 💭 Cykeln där borta vid vägen kan ge ström, om generatorn sitter på. Båda ska stå vid skrivaren. |
| 1:23 | röst | du | Cykeln där borta vid vägen kan ge ström, om generatorn sitter på. Båda ska stå vid skrivaren. · MÅL |
| 1:24 | nick |  | nick:3 |
| 1:25 | ljud | utrustning | Cykeln i famnen |
| 1:25 | händelse | lyft | sak=cykel |
| 1:31 | klar | du | Cykeln där borta vid vägen kan ge ström, om generatorn sitter på. Båda ska stå vid skrivaren. |
| 1:36 | händelse | placerat | sak=cykel |
| 1:36 | duns | du | ställs ner |
| 1:38 | händelse | ombyggd | sak=cykel |
| 1:38 | varför-köad | du | Okej. Välj nåt litet att printa. |
| 1:38 | väntar | du | Okej. Välj nåt litet att printa. |
| 1:38 | struken | du | Okej. Välj nåt litet att printa. |
| 1:38 | händelse | malKlart | id=bygg del=Dag 1 – Kom igång nasta=valjModell |
| 1:38 | struken | du | Storebrors generator. Den gör el när cykeln snurrar. |
| 1:38 | väntar | du | Strömmen finns. Nu ska skrivaren veta vad den ska göra, sen trampar jag. |
| 1:38 | målruta |  | Välj vad skrivaren ska printa |
| 1:38 | MÅL |  | Välj vad skrivaren ska printa |
| 1:38 | sak | du | Strömmen finns. Nu ska skrivaren veta vad den ska göra, sen trampar jag. |
| 1:38 | pil |  | Välj vad skrivaren ska printa |
| 1:38 | notis | tanke | 💭 Strömmen finns. Nu ska skrivaren veta vad den ska göra, sen trampar jag. |
| 1:38 | röst | du | Strömmen finns. Nu ska skrivaren veta vad den ska göra, sen trampar jag. · MÅL |
| 1:40 | händelse | printStart | sak=nyckelring |
| 1:40 | kvittens | du | Den piper. Den GÖR något. |
| 1:40 | väntar | du | Den piper. Den GÖR något. |
| 1:40 | tanke | du | Den stannar när jag slutar trampa. Ström som sparas hade varit nåt. |
| 1:40 | väntar | du | Den stannar när jag slutar trampa. Ström som sparas hade varit nåt. |
| 1:40 | händelse | malKlart | id=valjModell del=Dag 1 – Kom igång nasta=trampa |
| 1:40 | struken | du | Den stannar när jag slutar trampa. Ström som sparas hade varit nåt. |
| 1:40 | väntar | du | Nu behöver den ström. Trampa. |
| 1:41 | MÅL |  | Trampa cykeln |
| 1:43 | målruta |  | Trampa cykeln |
| 1:44 | klar | du | Strömmen finns. Nu ska skrivaren veta vad den ska göra, sen trampar jag. |
| 1:44 | sak | du | Den piper. Den GÖR något. |
| 1:44 | notis | tanke | 💭 Den piper. Den GÖR något. |
| 1:44 | röst | du | Den piper. Den GÖR något. · STORY |
| 1:46 | händelse | printKlar | sak=nyckelring n=1 |
| 1:46 | kvittens | du | Klar! Ta ut den innan den ändrar sig. |
| 1:46 | väntar | du | Klar! Ta ut den innan den ändrar sig. |
| 1:46 | händelse | malKlart | id=trampa del=Dag 1 – Kom igång nasta=rullSlut |
| 1:46 | väntar | du | En nyckelring till, så länge storebrors rulle räcker. |
| 1:46 | MÅL |  | En nyckelring till |
| 1:46 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 1:46 | paket |  | sms |
| 1:46 | väntar | bror | VA FAN?! Fick du igång den?? Jag försökte i typ ett år. Den bara pep. 😳 |
| 1:46 | skratt | bror | VA FAN?! Fick du igång den?? Jag försökt |
| 1:46 | paket |  | sms → ge |
| 1:46 | väntar | bror | Sälj den till Ali, han med affären vid skräpberget. Han köper gamla grejer. Han köpte min gamla mopedhjälm för 20 spänn. |
| 1:46 | väntar |  | (läget ändras) |
| 1:46 | klar | du | Den piper. Den GÖR något. |
| 1:46 | struken | du | Klar! Ta ut den innan den ändrar sig. |
| 1:46 | struken | du | Nu behöver den ström. Trampa. |
| 1:48 | målruta |  | En nyckelring till |
| 1:50 | händelse | printStart | sak=nyckelring |
| 1:50 | sak | du | En nyckelring till, så länge storebrors rulle räcker. |
| 1:50 | pil |  | En nyckelring till |
| 1:50 | notis | tanke | 💭 En nyckelring till, så länge storebrors rulle räcker. |
| 1:50 | röst | du | En nyckelring till, så länge storebrors rulle räcker. · MÅL |
| 1:55 | klar | du | En nyckelring till, så länge storebrors rulle räcker. |
| 1:57 | sak |  | (läget ändras) |
| 1:57 | klar |  | (läget ändras) |
| 2:00 | toast | guld | Nyckelring är klar – ta ut den |
| 2:00 | väntar | notis:Storebrors skrivare: Nyckelring är klar  | Storebrors skrivare: Nyckelring är klar – ta ut den |
| 2:00 | händelse | printKlar | sak=nyckelring n=2 |
| 2:00 | paket |  | tanke |
| 2:00 | tanke | du | Slut på storebrors rulle. Och här ligger ju plast överallt. Om jag bara kunde göra tråd av skräpet… Affären mitt emot kanske har något. |
| 2:00 | väntar | du | Slut på storebrors rulle. Och här ligger ju plast överallt. Om jag bara kunde göra tråd av skräpet… Affären mitt emot kanske har något. |
| 2:00 | händelse | malKlart | id=rullSlut del=Dag 1 – Kom igång nasta=saljTva |
| 2:00 | MÅL |  | Sälj nyckelringarna |
| 2:00 | sak | du | Slut på storebrors rulle. Och här ligger ju plast överallt. Om jag bara kunde göra tråd av skräpet… Affären mitt emot kanske har något. |
| 2:00 | kvitto-visas | du | Slut på storebrors rulle. Och här ligger ju plast överallt. Om jag bara kunde göra tråd av skräpet… Affären mitt emot kanske har något. |
| 2:00 | notis | tanke | 💭 Slut på storebrors rulle. Och här ligger ju plast överallt. Om jag bara kunde göra tråd av skräpet… Affären mitt emot kanske har något. |
| 2:00 | röst | du | Slut på storebrors rulle. Och här ligger ju plast överallt. Om jag bara kunde göra tråd av skräpet… Affären mitt emot kanske har något. · STORY |
| 2:03 | målruta |  | Sälj nyckelringarna |
| 2:04 | kvittens-bock |  | ✓ En nyckelring till |
| 2:12 | klar | du | Slut på storebrors rulle. Och här ligger ju plast överallt. Om jag bara kunde göra tråd av skräpet… Affären mitt emot kanske har något. |
| 2:12 | sak | du | (nytt mål i rutan) |
| 2:12 | pil |  | Sälj nyckelringarna |
| 2:12 | klar | du | (nytt mål i rutan) |
| 2:14 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 2:20 | röst | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. · STORY |
| 2:20 | butiksbubbla | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 2:21 | aliSalt | ali | 30 |
| 2:21 | butiksbubbla | ali | Pappas gamla köttkvarn. Den har malt allt utom kött. Trettio kronor, så är den din. |
| 2:22 | väntar | ali | Pappas gamla köttkvarn. Den har malt allt utom kött. Trettio kronor, så är den din. |
| 2:22 | händelse | malKlart | id=saljTva del=Dag 1 – Kom igång nasta=aliKvarn |
| 2:22 | väntar | du | Ali har en gammal kvarn. Den gör tråd av skräp. |
| 2:23 | MÅL |  | Köp kvarnen |
| 2:23 | sak | du | Ali har en gammal kvarn. Den gör tråd av skräp. |
| 2:23 | målruta |  | Köp kvarnen |
| 2:23 | pil |  | Köp kvarnen |
| 2:23 | notis | tanke | 💭 Ali har en gammal kvarn. Den gör tråd av skräp. |
| 2:23 | röst | du | Ali har en gammal kvarn. Den gör tråd av skräp. · MÅL |
| 2:26 | kvittens-bock |  | ✓ Sälj nyckelringarna |
| 2:27 | klar | du | Ali har en gammal kvarn. Den gör tråd av skräp. |
| 2:29 | struken | bror | Sälj den till Ali, han med affären vid skräpberget. Han köper gamla grejer. Han köpte min gamla mopedhjälm för 20 spänn. |
| 2:29 | struken | notis:Storebrors skrivare: Nyckelring är klar  | Storebrors skrivare: Nyckelring är klar – ta ut den |
| 2:29 | sak | ali | Pappas gamla köttkvarn. Den har malt allt utom kött. Trettio kronor, så är den din. |
| 2:29 | röst | ali | Pappas gamla köttkvarn. Den har malt allt utom kött. Trettio kronor, så är den din. · STORY |
| 2:36 | klar | ali | Pappas gamla köttkvarn. Den har malt allt utom kött. Trettio kronor, så är den din. |
| 2:36 | händelse | kopt | sak=gammalkvarn |
| 2:36 | röst | ali | Och kommer du på nåt smart, så vet du var jag bor. · STORY |
| 2:36 | butiksbubbla | ali | Och kommer du på nåt smart, så vet du var jag bor. |
| 2:38 | händelse | malKlart | id=aliKvarn del=Dag 1 – Kom igång nasta=kvarn |
| 2:38 | väntar | du | Kvarnen ställer jag bredvid skrivaren, närmast skräpberget. Där finns skräpet. |
| 2:38 | målruta |  | Ställ kvarnen |
| 2:38 | MÅL |  | Ställ kvarnen |
| 2:39 | sak | du | Kvarnen ställer jag bredvid skrivaren, närmast skräpberget. Där finns skräpet. |
| 2:39 | pil |  | Ställ kvarnen |
| 2:39 | notis | tanke | 💭 Kvarnen ställer jag bredvid skrivaren, närmast skräpberget. Där finns skräpet. |
| 2:39 | röst | du | Kvarnen ställer jag bredvid skrivaren, närmast skräpberget. Där finns skräpet. · MÅL |
| 2:39 | nick |  | nick:9 |
| 2:42 | kvittens-bock |  | ✓ Köp kvarnen |
| 2:45 | klar | du | Kvarnen ställer jag bredvid skrivaren, närmast skräpberget. Där finns skräpet. |
| 2:47 | väntar | foto | Första nyckelringen |
| 2:47 | paket |  | tanke |
| 2:47 | tanke | du | Någon köpte nåt jag gjort. Det här kan funka. |
| 2:47 | väntar | du | Någon köpte nåt jag gjort. Det här kan funka. |
| 2:53 | struken | bror | VA FAN?! Fick du igång den?? Jag försökte i typ ett år. Den bara pep. 😳 |
| 2:53 | skratt | bror | VA FAN?! Fick du igång den?? Jag försökt |
| 2:53 | sak | foto | Första nyckelringen |
| 2:53 | foto | du | Första nyckelringen |
| 2:53 | händelse | placerat | sak=kvarnen |
| 2:53 | struken | kedja | kvarnStar |
| 2:53 | duns | du | ställs ner |
| 2:53 | händelse | malKlart | id=kvarn del=Dag 1 – Kom igång nasta=flaska |
| 2:53 | väntar | du | Skräp i kvarnen, sen vevar jag. Då blir det tråd. |
| 2:53 | MÅL |  | Gör egen tråd |
| 2:56 | klar | foto | Första nyckelringen |
| 2:56 | målruta |  | Gör egen tråd |
| 2:57 | kvittens-bock |  | ✓ Ställ kvarnen |
| 2:58 | sak | du | Skräp i kvarnen, sen vevar jag. Då blir det tråd. |
| 2:58 | pil |  | Gör egen tråd |
| 2:58 | notis | tanke | 💭 Skräp i kvarnen, sen vevar jag. Då blir det tråd. |
| 2:58 | röst | du | Skräp i kvarnen, sen vevar jag. Då blir det tråd. · MÅL |
| 2:58 | nick |  | nick:10 |
| 3:02 | klar | du | Skräp i kvarnen, sen vevar jag. Då blir det tråd. |
| 3:11 | väntar | info:bra | 3 st i tratten – veva nu! |
| 3:11 | sak | info:bra | 3 st i tratten – veva nu! |
| 3:11 | kvitto-visas | info:bra | 3 st i tratten – veva nu! |
| 3:11 | toast | bra | 3 st i tratten – veva nu! |
| 3:12 | händelse | malKlart | id=flaska del=Dag 1 – Kom igång nasta=egenPrint |
| 3:12 | struken | kedja | trad |
| 3:12 | väntar | du | Kvarnen funkar. Soptippen är en gruva. |
| 3:12 | väntar | du | Min egen tråd. Nu printar jag en nyckelring av den. |
| 3:12 | MÅL |  | Printa med egen tråd |
| 3:13 | klar | info:bra | 3 st i tratten – veva nu! |
| 3:13 | sak | du | Kvarnen funkar. Soptippen är en gruva. |
| 3:13 | kvitto-visas | du | Kvarnen funkar. Soptippen är en gruva. |
| 3:13 | lapp | 📔 Dagbok | Kvarnen funkar. Soptippen är en gruva. |
| 3:13 | dagbokrad | du | Kvarnen funkar. Soptippen är en gruva. |
| 3:13 | notis | dagbok | Kvarnen funkar. Soptippen är en gruva. |
| 3:13 | klar | du | Kvarnen funkar. Soptippen är en gruva. |
| 3:13 | sak | du | Min egen tråd. Nu printar jag en nyckelring av den. |
| 3:13 | målruta |  | Printa med egen tråd |
| 3:13 | pil |  | Printa med egen tråd |
| 3:13 | notis | tanke | 💭 Min egen tråd. Nu printar jag en nyckelring av den. |
| 3:13 | röst | du | Min egen tråd. Nu printar jag en nyckelring av den. · MÅL |
| 3:18 | klar | du | Min egen tråd. Nu printar jag en nyckelring av den. |
| 3:22 | händelse | printStart | sak=nyckelring |
| 3:22 | toast | bra | 🔗 Slangen kopplad |
| 3:27 | toast | guld | ✅ |
| 3:27 | händelse | printKlar | sak=nyckelring n=3 |
| 3:27 | paket |  | tanke |
| 3:27 | tanke | du | En nyckelring av en gammal schampoflaska. Den luktar fortfarande päron. |
| 3:27 | väntar | du | En nyckelring av en gammal schampoflaska. Den luktar fortfarande päron. |
| 3:27 | skratt | du | egen tråd |
| 3:27 | händelse | malKlart | id=egenPrint del=Dag 1 – Kom igång nasta=salj |
| 3:27 | struken | du | En nyckelring av en gammal schampoflaska. Den luktar fortfarande päron. |
| 3:27 | väntar | du | Affären på andra sidan vägen kanske köper sånt här. |
| 3:27 | MÅL |  | Sälj hos Ali |
| 3:27 | målruta |  | Sälj hos Ali |
| 3:27 | sak | du | Affären på andra sidan vägen kanske köper sånt här. |
| 3:27 | pil |  | Sälj hos Ali |
| 3:27 | notis | tanke | 💭 Affären på andra sidan vägen kanske köper sånt här. |
| 3:27 | röst | du | Affären på andra sidan vägen kanske köper sånt här. · MÅL |
| 3:27 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 3:27 | nick |  | nick:12 |
| 3:31 | kvittens-bock |  | ✓ Printa med egen tråd |
| 3:31 | klar | du | Affären på andra sidan vägen kanske köper sånt här. |
| 3:35 | händelse | printStart | sak=nyckelring |
| 3:36 | toast | guld | ✅ |
| 3:36 | händelse | printKlar | sak=nyckelring n=4 |
| 3:36 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 3:39 | händelse | printStart | sak=nyckelring |
| 3:40 | toast | guld | ✅ |
| 3:40 | händelse | printKlar | sak=nyckelring n=5 |
| 3:40 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 3:41 | sak | du | Någon köpte nåt jag gjort. Det här kan funka. |
| 3:41 | notis | tanke | 💭 Någon köpte nåt jag gjort. Det här kan funka. |
| 3:41 | röst | du | Någon köpte nåt jag gjort. Det här kan funka. · STORY |
| 3:44 | klar | du | Någon köpte nåt jag gjort. Det här kan funka. |
| 3:48 | väntar | kjelle | God morgon, det är Kjelle på Radio Tippen! Det har flyttat in någon i det gamla skjulet. Med en cykel och en skrivare. Spännande, Gunnar. |
| 3:48 | radio | kjelle | God morgon, det är Kjelle på Radio Tippen! Det har flyttat in någon i det gamla skjulet. Med en cykel och en skrivare. Spännande, Gunnar. |
| 3:48 | skratt | du | Radio-Kjelle |
| 3:52 | tanke | du | Vem är Gunnar? |
| 3:52 | väntar | du | Vem är Gunnar? |
| 3:54 | paket |  | ali → ge |
| 3:54 | väntar | ali | Du får bonus! 20 kr extra. Säg inget till min fru. |
| 3:54 | väntar |  | (läget ändras) |
| 3:54 | aliSalt | ali | 45 |
| 3:54 | röst | ali | Nyckelringar igen? Folk tappar sina nycklar hela tiden. Bra affär för oss. · STORY |
| 3:54 | butiksbubbla | ali | Nyckelringar igen? Folk tappar sina nycklar hela tiden. Bra affär för oss. |
| 3:55 | händelse | malKlart | id=salj del=Dag 1 – Kom igång nasta=powerbank |
| 3:55 | paket |  | sms → ge |
| 3:55 | väntar | ali | Ali här. Glömde en sak. Kom tillbaka, jag har nåt åt dig. |
| 3:55 | väntar |  | (läget ändras) |
| 3:55 | MÅL |  | Gå till Ali |
| 3:57 | sak | ali | Du får bonus! 20 kr extra. Säg inget till min fru. |
| 3:57 | notis |  | Ali: ”Du får bonus! 20 kr extra. Säg inget till min fru.” |
| 3:57 | röst | ali | Du får bonus! 20 kr extra. Säg inget till min fru. · REAKTION |
| 3:57 | väntar | du | Ali har något åt mig. Jag går över vägen till affären. |
| 3:59 | kvittens-bock |  | ✓ Sälj hos Ali |
| 4:00 | målruta |  | Gå till Ali |
| 4:01 | klar | ali | Du får bonus! 20 kr extra. Säg inget till min fru. |
| 4:03 | sak | du | Ali har något åt mig. Jag går över vägen till affären. |
| 4:03 | pil |  | Gå till Ali |
| 4:03 | notis | tanke | 💭 Ali har något åt mig. Jag går över vägen till affären. |
| 4:03 | röst | du | Ali har något åt mig. Jag går över vägen till affären. · MÅL |
| 4:08 | klar | du | Ali har något åt mig. Jag går över vägen till affären. |
| 4:09 | paket | ali | ali → ge |
| 4:09 | röst | ali | Ali här. Jag såg dig cykla. Det ser jobbigt ut. Testa koppla på den här. Bra kunder får bonus. · STORY |
| 4:09 | butiksbubbla | ali | Ali här. Jag såg dig cykla. Det ser jobbigt ut. Testa koppla på den här. Bra kunder får bonus. |
| 4:13 | sak | ali | Ali här. Glömde en sak. Kom tillbaka, jag har nåt åt dig. |
| 4:13 | sms | ali | Ali här. Glömde en sak. Kom tillbaka, jag har nåt åt dig. |
| 4:13 | sms-bubbla | ali | Ali här. Glömde en sak. Kom tillbaka, jag har nåt åt dig. |
| 4:13 | röst | ali | Ali här. Glömde en sak. Kom tillbaka, jag har nåt åt dig. · STORY |
| 4:18 | klar | ali | Ali här. Glömde en sak. Kom tillbaka, jag har nåt åt dig. |
| 4:20 | sak |  | (läget ändras) |
| 4:20 | klar |  | (läget ändras) |
| 4:21 | struken | du | Vem är Gunnar? |
| 4:24 | sak |  | (läget ändras) |
| 4:24 | klar |  | (läget ändras) |
| 4:25 | skratt | du | powerbanken på cykeln |
| 4:25 | paket |  | tanke |
| 4:25 | tanke | du | Nu sparas lite ström. En nyckelring, typ. Framtiden är här, och den sitter fast med eltejp. |
| 4:25 | väntar | du | Nu sparas lite ström. En nyckelring, typ. Framtiden är här, och den sitter fast med eltejp. |
| 4:25 | monterat | du | byggsats:powerbank |
| 4:25 | händelse | monterat | sak=powerbank |
| 4:25 | händelse | malKlart | id=powerbank del=Dag 1 – Kom igång nasta=kopGrip |
| 4:25 | paket |  | lapp |
| 4:25 | lapp-kö | 🧺 Ali | Ali här. Nyckelringen sålde. Jag ville bli ingenjör, men fick ta över pappas butik. I natt lät jag en AI rita en skräpgrip åt mig. Kom och titta. |
| 4:25 | väntar | ali | Ali här. Nyckelringen sålde. Jag ville bli ingenjör, men fick ta över pappas butik. I natt lät jag en AI rita en skräpgrip åt mig. Kom och titta. |
| 4:25 | struken | kedja | harRadGrip |
| 4:25 | väntar | du | Med en skräpgrip slipper jag böja mig. Ali har en ritning. |
| 4:25 | MÅL |  | Plocka skräp och mal det |
| 4:26 | sak | du | Nu sparas lite ström. En nyckelring, typ. Framtiden är här, och den sitter fast med eltejp. |
| 4:26 | kvitto-visas | du | Nu sparas lite ström. En nyckelring, typ. Framtiden är här, och den sitter fast med eltejp. |
| 4:26 | notis | tanke | 💭 Nu sparas lite ström. En nyckelring, typ. Framtiden är här, och den sitter fast med eltejp. |
| 4:26 | röst | du | Nu sparas lite ström. En nyckelring, typ. Framtiden är här, och den sitter fast med eltejp. · REAKTION |
| 4:27 | målruta |  | Plocka skräp och mal det |
| 4:29 | kvittens-bock |  | ✓ Gå till Ali |
| 4:33 | klar | du | Nu sparas lite ström. En nyckelring, typ. Framtiden är här, och den sitter fast med eltejp. |
| 4:34 | sak | du | Med en skräpgrip slipper jag böja mig. Ali har en ritning. |
| 4:34 | pil |  | Plocka skräp och mal det |
| 4:34 | notis | tanke | 💭 Med en skräpgrip slipper jag böja mig. Ali har en ritning. |
| 4:34 | röst | du | Med en skräpgrip slipper jag böja mig. Ali har en ritning. · MÅL |
| 4:34 | nick |  | nick:14 |
| 4:39 | klar | du | Med en skräpgrip slipper jag böja mig. Ali har en ritning. |
| 4:40 | händelse | printStart | sak=nyckelring |
| 4:41 | toast | fel | Ingen ström – trampa cykeln |
| 4:41 | väntar | notis:Storebrors skrivare: Ingen ström – tramp | Storebrors skrivare: Ingen ström – trampa cykeln |
| 4:42 | toast | guld | ✅ |
| 4:42 | händelse | printKlar | sak=nyckelring n=6 |
| 4:43 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 4:45 | händelse | printStart | sak=nyckelring |
| 4:46 | toast | guld | ✅ |
| 4:46 | händelse | printKlar | sak=nyckelring n=7 |
| 4:47 | sak | kjelle | God morgon, det är Kjelle på Radio Tippen! Det har flyttat in någon i det gamla skjulet. Med en cykel och en skrivare. Spännande, Gunnar. |
| 4:47 | notis |  | 📻 Radio Tippen: God morgon, det är Kjelle på Radio Tippen! Det har flyttat in någon i det gamla skjulet. Med en cykel och en skrivare. Spännande, Gunnar. |
| 4:47 | röst | kjelle | God morgon, det är Kjelle på Radio Tippen! Det har flyttat in någon i det gamla skjulet. Med en cykel och en skrivare. Spännande, Gunnar. · REAKTION |
| 4:58 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 4:58 | klar | kjelle | God morgon, det är Kjelle på Radio Tippen! Det har flyttat in någon i det gamla skjulet. Med en cykel och en skrivare. Spännande, Gunnar. |
| 5:00 | händelse | printStart | sak=nyckelring |
| 5:01 | toast | guld | ✅ |
| 5:01 | händelse | printKlar | sak=nyckelring n=8 |
| 5:02 | struken | notis:Storebrors skrivare: Ingen ström – tramp | Storebrors skrivare: Ingen ström – trampa cykeln |
| 5:02 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 5:06 | sak | mamma | Hur kunde du bara gå? Är du ok? Svara när jag ringer! |
| 5:06 | sms | mamma | Hur kunde du bara gå? Är du ok? Svara när jag ringer! |
| 5:06 | sms-bubbla | mamma | Hur kunde du bara gå? Är du ok? Svara när jag ringer! |
| 5:06 | röst | mamma | Hur kunde du bara gå? Är du ok? Svara när jag ringer! · STORY |
| 5:09 | aliSalt | ali | 15 |
| 5:10 | aliSalt | ali | 15 |
| 5:10 | aliSalt | ali | 15 |
| 5:11 | klar | mamma | Hur kunde du bara gå? Är du ok? Svara när jag ringer! |
| 5:19 | händelse | printStart | sak=nyckelring |
| 5:20 | toast | guld | ✅ |
| 5:20 | händelse | printKlar | sak=nyckelring n=9 |
| 5:31 | upplåst | bara | grip |
| 5:31 | brott | UPPLÅST | grip (bara 3 av 3) |
| 5:31 | händelse | upplast | id=grip flask=bara |
| 5:31 | paket |  | tanke |
| 5:31 | tanke | du | Ett skräp i taget. Jag springer ihjäl mig. |
| 5:31 | väntar | du | Ett skräp i taget. Jag springer ihjäl mig. |
| 5:31 | sak | du | Ett skräp i taget. Jag springer ihjäl mig. |
| 5:31 | notis | tanke | 💭 Ett skräp i taget. Jag springer ihjäl mig. |
| 5:31 | röst | du | Ett skräp i taget. Jag springer ihjäl mig. · STORY |
| 5:32 | väntar | bud | (tips) |
| 5:33 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 5:34 | klar | du | Ett skräp i taget. Jag springer ihjäl mig. |
| 5:35 | händelse | printStart | sak=nyckelring |
| 5:36 | sak | bud | (tips) |
| 5:36 | toast | guld | ✅ |
| 5:36 | händelse | printKlar | sak=nyckelring n=10 |
| 5:37 | väntar | du | Jag har pengar nu. Hos Ali kan jag köpa uppgraderingar – bära mer eller printa snabbare. |
| 5:37 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 5:38 | klar | bud | (tips) |
| 5:39 | händelse | printStart | sak=nyckelring |
| 5:40 | sak | du | Jag har pengar nu. Hos Ali kan jag köpa uppgraderingar – bära mer eller printa snabbare. |
| 5:40 | röst | du | Jag har pengar nu. Hos Ali kan jag köpa uppgraderingar – bära mer eller printa snabbare. · MÅL |
| 5:42 | toast | guld | ✅ |
| 5:42 | händelse | printKlar | sak=nyckelring n=11 |
| 5:42 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 5:47 | klar | du | Jag har pengar nu. Hos Ali kan jag köpa uppgraderingar – bära mer eller printa snabbare. |
| 5:49 | aliSalt | ali | 15 |
| 5:50 | aliSalt | ali | 15 |
| 5:50 | aliSalt | ali | 15 |
| 5:53 | struken | info:guld | 3D-modell köpt – printa skräpgrip |
| 5:53 | händelse | kopt | sak=grip |
| 5:53 | röst | ali | Bra val. 3D-modellen är din. Den räcker till en. · STORY |
| 5:53 | butiksbubbla | ali | Bra val. 3D-modellen är din. Den räcker till en. |
| 5:55 | händelse | malKlart | id=kopGrip del=Dag 1 – Kom igång nasta=printGrip |
| 5:55 | väntar | du | Min första 3D-modell! Jag printar inte bara saker – jag printar maskiner. |
| 5:55 | MÅL |  | Printa skräpgripen |
| 5:56 | sak | du | Min första 3D-modell! Jag printar inte bara saker – jag printar maskiner. |
| 5:56 | kvitto-visas | du | Min första 3D-modell! Jag printar inte bara saker – jag printar maskiner. |
| 5:56 | lapp | 📔 Dagbok | Min första 3D-modell! Jag printar inte bara saker – jag printar maskiner. |
| 5:56 | dagbokrad | du | Min första 3D-modell! Jag printar inte bara saker – jag printar maskiner. |
| 5:56 | notis | dagbok | Min första 3D-modell! Jag printar inte bara saker – jag printar maskiner. |
| 5:56 | klar | du | Min första 3D-modell! Jag printar inte bara saker – jag printar maskiner. |
| 5:56 | sak | du | (nytt mål i rutan) |
| 5:56 | målruta |  | Printa skräpgripen |
| 5:56 | pil |  | Printa skräpgripen |
| 5:56 | klar | du | (nytt mål i rutan) |
| 5:57 | nick |  | nick:15 |
| 5:58 | struken | ali | Ali här. Nyckelringen sålde. Jag ville bli ingenjör, men fick ta över pappas butik. I natt lät jag en AI rita en skräpgrip åt mig. Kom och titta. |
| 6:05 | händelse | printStart | sak=byggsats:grip |
| 6:08 | händelse | printKlar | sak=byggsats:grip n=1 |
| 6:08 | toast | guld | ✅ |
| 6:08 | väntar | info:guld | Skräpgrip ska jag ha på mig. |
| 6:08 | händelse | tagitUrPrint | sak=byggsats:grip n=1 |
| 6:08 | paket |  | sms |
| 6:08 | väntar | ali | Ali här. Jag såg Skräpgrip på avstånd. Ett streck blev lite snett. Mitt fel. Vackert ändå. |
| 6:08 | struken | kedja | grip |
| 6:08 | sak | info:guld | Skräpgrip ska jag ha på mig. |
| 6:08 | kvitto-visas | info:guld | Skräpgrip ska jag ha på mig. |
| 6:08 | toast | guld | Skräpgrip ska jag ha på mig. |
| 6:10 | hjälp | kontroll | Klick: Klicka för att ta på dig den |
| 6:10 | klar | info:guld | Skräpgrip ska jag ha på mig. |
| 6:12 | väntar | info:guld | 🦾 Skräpgripen sitter! Jag bär 6, siktar lättare och plockar när jag går nära. |
| 6:12 | tog på | du | byggsats:grip |
| 6:12 | händelse | monterat | sak=grip |
| 6:12 | sak | info:guld | 🦾 Skräpgripen sitter! Jag bär 6, siktar lättare och plockar när jag går nära. |
| 6:12 | kvitto-visas | info:guld | 🦾 Skräpgripen sitter! Jag bär 6, siktar lättare och plockar när jag går nära. |
| 6:12 | toast | guld | 🦾 Skräpgripen sitter! Jag bär 6, siktar lättare och plockar när jag går nära. |
| 6:12 | händelse | malKlart | id=printGrip del=Dag 1 – Kom igång nasta=krukaD1 |
| 6:12 | väntar | du | Ali vill ha krukor. Jag printar en blomkruka. |
| 6:12 | MÅL |  | Printa och sälj nyckelringar |
| 6:12 | upplåst | inkomst | kruka |
| 6:12 | brott | UPPLÅST | kruka (inkomst 11 av 6) |
| 6:12 | händelse | upplast | id=kruka flask=inkomst |
| 6:12 | paket |  | tanke → sms |
| 6:12 | tanke | du | Nyckelringar, nyckelringar. Ali kan inte vilja ha fler. |
| 6:12 | väntar | du | Nyckelringar, nyckelringar. Ali kan inte vilja ha fler. |
| 6:12 | väntar | ali | Prova en kruka. Folk köper krukor. Ingen vet varför. |
| 6:12 | skratt | ali | Prova en kruka. Folk köper krukor. Ingen |
| 6:14 | klar | info:guld | 🦾 Skräpgripen sitter! Jag bär 6, siktar lättare och plockar när jag går nära. |
| 6:15 | målruta |  | Köp krukreceptet |
| 6:16 | kvittens-bock |  | ✓ Printa skräpgripen |
| 6:16 | sak | du | Ali vill ha krukor. Jag printar en blomkruka. |
| 6:16 | pil |  | Köp krukreceptet |
| 6:16 | notis | tanke | 💭 Ali vill ha krukor. Jag printar en blomkruka. |
| 6:16 | röst | du | Ali vill ha krukor. Jag printar en blomkruka. · MÅL |
| 6:17 | nick |  | nick:16 |
| 6:19 | händelse | kopt | sak=kruka |
| 6:19 | röst | ali | Bra val. Folk köper sånt. Jag vet inte varför. · STORY |
| 6:19 | butiksbubbla | ali | Blomkruka? Bra val. Folk köper sånt. Jag vet inte varför. |
| 6:20 | klar | du | Ali vill ha krukor. Jag printar en blomkruka. |
| 6:26 | hjälp | kontroll | Tab: Dina sms och dagboken |
| 6:29 | händelse | printStart | sak=kruka |
| 6:31 | sak | ali | Ali här. Jag såg Skräpgrip på avstånd. Ett streck blev lite snett. Mitt fel. Vackert ändå. |
| 6:31 | sms | ali | Ali här. Jag såg Skräpgrip på avstånd. Ett streck blev lite snett. Mitt fel. Vackert ändå. |
| 6:31 | sms-bubbla | ali | Ali här. Jag såg Skräpgrip på avstånd. Ett streck blev lite snett. Mitt fel. Vackert ändå. |
| 6:31 | röst | ali | Ali här. Jag såg Skräpgrip på avstånd. Ett streck blev lite snett. Mitt fel. Vackert ändå. · REAKTION |
| 6:31 | toast | fel | Ingen ström – trampa cykeln |
| 6:33 | toast | guld | ✅ |
| 6:33 | händelse | printKlar | sak=kruka n=1 |
| 6:33 | kvittens | du | En kruka. Mamma skulle bli så stolt. Hon får inte veta. |
| 6:33 | väntar | du | En kruka. Mamma skulle bli så stolt. Hon får inte veta. |
| 6:33 | händelse | malKlart | id=krukaD1 del=Dag 1 – Kom igång nasta=saljKruka |
| 6:33 | väntar | du | Ali gillar krukor. Han sa det själv. |
| 6:33 | MÅL |  | Sälj blomkrukan |
| 6:33 | händelse | tagitUrPrint | sak=kruka n=1 |
| 6:36 | målruta |  | Sälj blomkrukan |
| 6:38 | klar | ali | Ali här. Jag såg Skräpgrip på avstånd. Ett streck blev lite snett. Mitt fel. Vackert ändå. |
| 6:38 | sak | du | En kruka. Mamma skulle bli så stolt. Hon får inte veta. |
| 6:38 | notis | tanke | 💭 En kruka. Mamma skulle bli så stolt. Hon får inte veta. |
| 6:38 | röst | du | En kruka. Mamma skulle bli så stolt. Hon får inte veta. · STORY |
| 6:43 | klar | du | En kruka. Mamma skulle bli så stolt. Hon får inte veta. |
| 6:44 | sak | du | Ali gillar krukor. Han sa det själv. |
| 6:44 | pil |  | Sälj blomkrukan |
| 6:44 | notis | tanke | 💭 Ali gillar krukor. Han sa det själv. |
| 6:44 | röst | du | Ali gillar krukor. Han sa det själv. · MÅL |
| 6:47 | klar | du | Ali gillar krukor. Han sa det själv. |
| 6:50 | aliSalt | ali | 70 |
| 6:51 | händelse | malKlart | id=saljKruka del=Dag 1 – Kom igång nasta=kopSang |
| 6:51 | struken | kedja | morkt |
| 6:51 | väntar | du | Jag tänker inte sova på betongen i natt. Ali har en säng. Typ. |
| 6:51 | målruta |  | Köp sängen |
| 6:51 | MÅL |  | Köp sängen |
| 6:51 | sak | du | Jag tänker inte sova på betongen i natt. Ali har en säng. Typ. |
| 6:51 | pil |  | Köp sängen |
| 6:51 | notis | tanke | 💭 Jag tänker inte sova på betongen i natt. Ali har en säng. Typ. |
| 6:51 | röst | du | Jag tänker inte sova på betongen i natt. Ali har en säng. Typ. · MÅL |
| 6:55 | kvittens-bock |  | ✓ Sälj blomkrukan |
| 6:57 | klar | du | Jag tänker inte sova på betongen i natt. Ali har en säng. Typ. |
| 7:00 | händelse | kopt | sak=sang |
| 7:00 | röst | ali | Sov gott, min vän. · STORY |
| 7:00 | butiksbubbla | ali | Sov gott, min vän. |
| 7:01 | händelse | malKlart | id=kopSang del=Dag 1 – Kom igång nasta=printSang |
| 7:01 | väntar | du | Sängen tar lång tid. Den är värd det. |
| 7:01 | målruta |  | Printa sängen |
| 7:02 | MÅL |  | Printa sängen |
| 7:02 | sak | du | Sängen tar lång tid. Den är värd det. |
| 7:02 | pil |  | Printa sängen |
| 7:02 | notis | tanke | 💭 Sängen tar lång tid. Den är värd det. |
| 7:02 | röst | du | Sängen tar lång tid. Den är värd det. · MÅL |
| 7:02 | nick |  | nick:19 |
| 7:05 | klar | du | Sängen tar lång tid. Den är värd det. |
| 7:05 | kvittens-bock |  | ✓ Köp sängen |
| 7:21 | sak | du | Nyckelringar, nyckelringar. Ali kan inte vilja ha fler. |
| 7:21 | notis | tanke | 💭 Nyckelringar, nyckelringar. Ali kan inte vilja ha fler. |
| 7:21 | röst | du | Nyckelringar, nyckelringar. Ali kan inte vilja ha fler. · STORY |
| 7:25 | händelse | printStart | sak=sang |
| 7:26 | klar | du | Nyckelringar, nyckelringar. Ali kan inte vilja ha fler. |
| 7:30 | toast | fel | Slut på tråd – mal mer så fortsätter den |
| 7:30 | väntar | notis:Storebrors skrivare: Slut på tråd – mal  | Storebrors skrivare: Slut på tråd – mal mer så fortsätter den |
| 7:47 | sak | notis:Storebrors skrivare: Slut på tråd – mal  | Storebrors skrivare: Slut på tråd – mal mer så fortsätter den |
| 7:47 | notis | fel | Storebrors skrivare: Slut på tråd – mal mer så fortsätter den |
| 7:49 | toast | fel | Ingen ström – trampa cykeln |
| 7:49 | klar | notis:Storebrors skrivare: Slut på tråd – mal  | Storebrors skrivare: Slut på tråd – mal mer så fortsätter den |
| 7:52 | toast | guld | ✅ |
| 7:52 | händelse | printKlar | sak=sang n=1 |
| 7:53 | händelse | tagitUrPrint | sak=sang n=1 |
| 7:53 | struken | kedja | sang |
| 7:53 | händelse | malKlart | id=printSang del=Dag 1 – Kom igång nasta=sov1 |
| 7:53 | paket |  | lapp |
| 7:53 | kvallsrad | du | Nitton år. Inget mer tjat. Gården är full av skräp. I morgon. |
| 7:53 | väntar | du | Sängen ska in i skjulet. Sen sover jag. |
| 7:53 | målruta |  | Sängen i skjulet |
| 7:53 | MÅL |  | Sängen i skjulet |
| 7:53 | sak | du | Sängen ska in i skjulet. Sen sover jag. |
| 7:53 | pil |  | Sängen i skjulet |
| 7:53 | notis | tanke | 💭 Sängen ska in i skjulet. Sen sover jag. |
| 7:53 | röst | du | Sängen ska in i skjulet. Sen sover jag. · MÅL |
| 7:54 | nick |  | nick:20 |
| 7:57 | klar | du | Sängen ska in i skjulet. Sen sover jag. |
| 7:57 | kvittens-bock |  | ✓ Printa sängen |
| 8:06 | nattkort | du | 🌙 Dag 1 är slut. God natt. zzz… i en riktig säng Nitton år. Inget mer tjat. Gården är full av skräp. I morgon. DAGENS PRINTAR Nyckelring × 11 Blomkruka × 1 Sän |

<details><summary>Botens handlingar dag 1</summary>

- 0:12 gå till brädhögen (3 m) (5 kr)
- 0:28 gå till cykeln vid vägen (2 m) (5 kr)
- 0:35 gå till rutan i linje 1 (13 m) (5 kr)
- 1:25 gå till cykeln (lyfter den) (13 m) (5 kr)
- 1:36 gå till cykelns plats (11 m) (5 kr)
- 1:39 gå till skrivaren (2 m) (5 kr)
- 1:40 printar Nyckelring (5 kr)
- 1:47 tar ut 1 st ur skrivaren (5 kr)
- 1:50 printar Nyckelring (sista av storebrors rulle) (5 kr)
- 2:14 tar ut 1 st ur skrivaren (5 kr)
- 2:20 gå till Ali (26 m) (5 kr)
- 2:20 öppnar Alis butik – sälja de två nyckelringarna (5 kr)
- 2:22 säljer hos Ali: +30 kr (35 kr)
- 2:35 öppnar Alis butik – köpa kvarnen (35 kr)
- 2:37 köper gammalkvarn för 30 kr (5 kr)
- 2:38 köpte kvarnen (5 kr)
- 2:53 gå till kvarnens ruta (28 m) (5 kr)
- 3:09 plockar 3 skräp på gården (bär max 3) (5 kr)
- 3:11 gå till kvarnen (9 m) (5 kr)
- 3:20 gå till cykeln (2 m) (5 kr)
- 3:22 printar Nyckelring (5 kr)
- 3:28 tar ut 1 st ur skrivaren (5 kr)
- 3:35 printar Nyckelring (5 kr)
- 3:37 tar ut 1 st ur skrivaren (5 kr)
- 3:39 printar Nyckelring (5 kr)
- 3:41 tar ut 1 st ur skrivaren (5 kr)
- 3:52 gå till Ali (27 m) (5 kr)
- 3:52 öppnar Alis butik – sälja nyckelringar (5 kr)
- 3:54 säljer hos Ali: +45 kr (50 kr)
- 4:09 öppnar Alis butik – Ali (powerbanken) (50 kr)
- 4:25 gå till koppla powerbanken till cykeln (24 m) (70 kr)
- 4:38 tjänar pengar till väntar på flaskhalsen för grip: 70/110 kr → printar nyckelring (15 kr) (70 kr)
- 4:39 gå till skrivaren (2 m) (70 kr)
- 4:40 printar Nyckelring (70 kr)
- 4:43 tar ut 1 st ur skrivaren (70 kr)
- 4:45 printar Nyckelring (70 kr)
- 4:51 plockar 3 skräp på gården (bär max 3) (70 kr)
- 4:54 gå till kvarnen (11 m) (70 kr)
- 4:58 gå till skrivaren (3 m) (70 kr)
- 4:58 tar ut 1 st ur skrivaren (70 kr)
- 5:00 printar Nyckelring (70 kr)
- 5:02 tar ut 1 st ur skrivaren (70 kr)
- 5:08 gå till Ali (28 m) (70 kr)
- 5:08 öppnar Alis butik – sälja (70 kr)
- 5:10 säljer hos Ali: +45 kr (115 kr)
- 5:13 tjänar pengar till väntar på flaskhalsen för grip: 115/155 kr → printar nyckelring (15 kr) (115 kr)
- 5:18 gå till skrivaren (25 m) (115 kr)
- 5:19 printar Nyckelring (115 kr)
- 5:27 plockar 3 skräp på gården (bär max 3) (115 kr)
- 5:31 gå till kvarnen (20 m) (115 kr)
- 5:33 gå till skrivaren (3 m) (115 kr)
- 5:34 tar ut 1 st ur skrivaren (115 kr)
- 5:35 printar Nyckelring (115 kr)
- 5:38 tar ut 1 st ur skrivaren (115 kr)
- 5:39 printar Nyckelring (115 kr)
- 5:41 gå till cykeln (1 m) (115 kr)
- 5:42 tar ut 1 st ur skrivaren (115 kr)
- 5:48 gå till Ali (27 m) (115 kr)
- 5:48 öppnar Alis butik – sälja (115 kr)
- 5:50 säljer hos Ali: +45 kr (160 kr)
- 5:52 öppnar Alis butik – köpa skräpgrip (160 kr)
- 5:54 köper grip för 50 kr (110 kr)
- 6:04 gå till skrivaren (25 m) (110 kr)
- 6:05 printar Skräpgrip (110 kr)
- 6:09 tar ut 1 st ur skrivaren (110 kr)
- 6:12 tar på grip (110 kr)
- 6:18 gå till Ali (25 m) (110 kr)
- 6:18 öppnar Alis butik – köpa receptet blomkruka (110 kr)
- 6:20 köper kruka för 40 kr (70 kr)
- 6:27 gå till skrivaren (25 m) (70 kr)
- 6:29 printar Blomkruka (70 kr)
- 6:32 gå till cykeln (1 m) (70 kr)
- 6:34 tar ut 1 st ur skrivaren (70 kr)
- 6:49 gå till Ali (25 m) (70 kr)
- 6:49 öppnar Alis butik – sälja krukan (70 kr)
- 6:51 säljer hos Ali: +70 kr (140 kr)
- 6:59 öppnar Alis butik – köpa sängen (140 kr)
- 7:01 köper sang för 60 kr (80 kr)
- 7:16 plockar 6 skräp på gården (bär max 6) (80 kr)
- 7:20 gå till kvarnen (19 m) (80 kr)
- 7:24 gå till skrivaren (1 m) (80 kr)
- 7:25 printar Säng (80 kr)
- 7:41 plockar 6 skräp på gården (bär max 6) (80 kr)
- 7:46 gå till kvarnen (27 m) (80 kr)
- 7:52 gå till cykeln (3 m) (80 kr)
- 7:53 gå till skrivaren (1 m) (80 kr)
- 7:54 tar ut 1 st ur skrivaren (80 kr)
- 8:03 gå till sängplatsen i skjulet (21 m) (80 kr)

</details>

## Dag 2

| Tid | Källa | Vem | Text |
|---|---|---|---|
| 8:06 | vara | ali | kruka |
| 8:06 | händelse | malKlart | id=sov1 del=Dag 1 – Kom igång nasta=kopMotor |
| 8:06 | MÅL |  | Mal skräp, printa och sälj |
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
| 0:10 | målruta |  | Mal skräp, printa och sälj |
| 0:13 | sak | du | Vevandet tar på armarna. Ali har en motor till kvarnen. |
| 0:13 | pil |  | Mal skräp, printa och sälj |
| 0:13 | notis | tanke | 💭 Vevandet tar på armarna. Ali har en motor till kvarnen. |
| 0:13 | röst | du | Vevandet tar på armarna. Ali har en motor till kvarnen. · MÅL |
| 0:18 | klar | du | Vevandet tar på armarna. Ali har en motor till kvarnen. |
| 0:20 | sak | notis:morgon | Ali vill ha idag: Blomkruka · +50 % |
| 0:20 | notis |  | Blomkruka · +50 % |
| 0:23 | klar | notis:morgon | Ali vill ha idag: Blomkruka · +50 % |
| 0:24 | händelse | printStart | sak=kruka |
| 0:25 | sak | notis:Första natten i en riktig säng. Jag prin | Första natten i en riktig säng. Jag printade den själv. |
| 0:25 | notis | dagbok | Första natten i en riktig säng. Jag printade den själv. |
| 0:27 | toast | guld | ✅ |
| 0:27 | händelse | printKlar | sak=kruka n=2 |
| 0:27 | händelse | tagitUrPrint | sak=kruka n=1 |
| 0:28 | klar | notis:Första natten i en riktig säng. Jag prin | Första natten i en riktig säng. Jag printade den själv. |
| 0:30 | hjälp | kontroll | R: Vrid innan du ställer ner |
| 0:32 | väntar | ali | Jag har räknat kassan två gånger. Samma summa. Tråkigt. |
| 0:33 | röst | ali | Salam. Ja, ja, jag har nya grejer. Som vanligt. Varje dag. · STORY |
| 0:33 | butiksbubbla | ali | Salam. Ja, ja, jag har nya grejer. Som vanligt. Varje dag. |
| 0:34 | aliSalt | ali | 105 |
| 0:34 | butiksbubbla | ali | Precis vad jag ville ha idag. 105 kr – med extra. |
| 0:35 | väntar | ali | Precis det jag ville ha idag, min vän. |
| 0:35 | sak | ali | Precis det jag ville ha idag, min vän. |
| 0:35 | röst | ali | Precis det jag ville ha idag, min vän. · STORY |
| 0:39 | klar | ali | Precis det jag ville ha idag, min vän. |
| 0:40 | väntar | foto | Egen säng |
| 0:40 | paket |  | tanke |
| 0:40 | tanke | du | Tänk att jag ska få sova i min egen säng. |
| 0:40 | väntar | du | Tänk att jag ska få sova i min egen säng. |
| 0:40 | struken | ali | Jag har räknat kassan två gånger. Samma summa. Tråkigt. |
| 0:40 | väntar | ali | Ali här. Såg skylten. Stavningen är rätt. Det är mer än många. |
| 0:47 | sak | ali | Prova en kruka. Folk köper krukor. Ingen vet varför. |
| 0:47 | skratt | ali | Prova en kruka. Folk köper krukor. Ingen |
| 0:47 | sms | ali | Prova en kruka. Folk köper krukor. Ingen vet varför. |
| 0:47 | skratt | ali | Prova en kruka. Folk köper krukor. Ingen |
| 0:47 | sms-bubbla | ali | Prova en kruka. Folk köper krukor. Ingen vet varför. |
| 0:47 | skratt | ali | Prova en kruka. Folk köper krukor. Ingen |
| 0:47 | röst | ali | Prova en kruka. Folk köper krukor. Ingen vet varför. · STORY |
| 0:47 | händelse | printStart | sak=kruka |
| 0:50 | toast | fel | Ingen ström – trampa cykeln |
| 0:50 | väntar | notis:Storebrors skrivare: Ingen ström – tramp | Storebrors skrivare: Ingen ström – trampa cykeln |
| 0:51 | toast | guld | ✅ |
| 0:51 | händelse | printKlar | sak=kruka n=3 |
| 0:51 | klar | ali | Prova en kruka. Folk köper krukor. Ingen vet varför. |
| 0:51 | skratt | ali | Prova en kruka. Folk köper krukor. Ingen |
| 0:52 | händelse | tagitUrPrint | sak=kruka n=1 |
| 0:59 | aliSalt | ali | 105 |
| 1:00 | sak | foto | Egen säng |
| 1:00 | foto | du | Egen säng |
| 1:02 | klar | foto | Egen säng |
| 1:05 | lapp | 📔 Dagbok | Sopbilen tippade en ny last. Allt det skräpet – och grinden är låst. |
| 1:05 | okänt ord bytt | du | Sopbilen tippade en ny last. Allt det skräpet – och grinden är låst. |
| 1:05 | dagbokrad | du | En stor bil tippade en ny last. Allt det skräpet – och grinden är låst. |
| 1:05 | väntar | notis:En stor bil tippade en ny last. Allt det | En stor bil tippade en ny last. Allt det skräpet – och grinden är låst. |
| 1:05 | sak | notis:En stor bil tippade en ny last. Allt det | En stor bil tippade en ny last. Allt det skräpet – och grinden är låst. |
| 1:05 | notis | dagbok | En stor bil tippade en ny last. Allt det skräpet – och grinden är låst. |
| 1:07 | klar | notis:En stor bil tippade en ny last. Allt det | En stor bil tippade en ny last. Allt det skräpet – och grinden är låst. |
| 1:11 | händelse | printStart | sak=kruka |
| 1:12 | väntar | värld:TUUT TUUT! | TUUT TUUT! |
| 1:12 | struken | notis:Storebrors skrivare: Ingen ström – tramp | Storebrors skrivare: Ingen ström – trampa cykeln |
| 1:14 | toast | guld | ✅ |
| 1:14 | händelse | printKlar | sak=kruka n=4 |
| 1:14 | händelse | tagitUrPrint | sak=kruka n=1 |
| 1:18 | sak | du | Tänk att jag ska få sova i min egen säng. |
| 1:18 | notis | tanke | 💭 Tänk att jag ska få sova i min egen säng. |
| 1:18 | röst | du | Tänk att jag ska få sova i min egen säng. · STORY |
| 1:21 | aliSalt | ali | 105 |
| 1:22 | klar | du | Tänk att jag ska få sova i min egen säng. |
| 1:31 | skratt | du | falsk tuta |
| 1:32 | sopsack | rolf | Sopsäckarna landade på gården |
| 1:32 | paket |  | tanke → ge |
| 1:32 | tanke | du | Hmm, vad kastade gubben ut ur sopbilen? Jag går och kollar. |
| 1:32 | väntar | du | Hmm, vad kastade gubben ut ur sopbilen? Jag går och kollar. |
| 1:32 | väntar |  | (läget ändras) |
| 1:32 | sak | du | Hmm, vad kastade gubben ut ur sopbilen? Jag går och kollar. |
| 1:32 | notis | tanke | 💭 Hmm, vad kastade gubben ut ur sopbilen? Jag går och kollar. |
| 1:32 | röst | du | Hmm, vad kastade gubben ut ur sopbilen? Jag går och kollar. · STORY |
| 1:37 | klar | du | Hmm, vad kastade gubben ut ur sopbilen? Jag går och kollar. |
| 1:39 | struken | värld:TUUT TUUT! | TUUT TUUT! |
| 1:39 | sak |  | (läget ändras) |
| 1:40 | klar |  | (läget ändras) |
| 1:44 | paket |  | tanke |
| 1:44 | tanke | du | Jaha. En kalsong. Använd. |
| 1:44 | väntar | du | Jaha. En kalsong. Använd. |
| 1:44 | skratt | du | kvarnen spottar |
| 1:48 | sak | du | Jaha. En kalsong. Använd. |
| 1:48 | notis | tanke | 💭 Jaha. En kalsong. Använd. |
| 1:48 | röst | du | Jaha. En kalsong. Använd. · REAKTION |
| 1:50 | händelse | printStart | sak=kruka |
| 1:51 | klar | du | Jaha. En kalsong. Använd. |
| 1:53 | toast | fel | Ingen ström – trampa cykeln |
| 1:54 | toast | guld | ✅ |
| 1:54 | händelse | printKlar | sak=kruka n=5 |
| 1:55 | händelse | tagitUrPrint | sak=kruka n=1 |
| 2:03 | aliSalt | ali | 105 |
| 2:10 | väntar | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått generator. Vi tar en låt på det. Den här är till dig, Gunnar. |
| 2:10 | radio | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått generator. Vi tar en låt på det. Den här är till dig, Gunnar. |
| 2:10 | skratt | du | Radio-Kjelle |
| 2:10 | sak | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått generator. Vi tar en låt på det. Den här är till dig, Gunnar. |
| 2:10 | notis |  | 📻 Radio Tippen: Radio Tippen, Kjelle här. Skjulet vid tippen har fått generator. Vi tar en låt på det. Den här är till dig, Gunnar. |
| 2:10 | röst | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått generator. Vi tar en låt på det. Den här är till dig, Gunnar. · REAKTION |
| 2:11 | händelse | printStart | sak=kruka |
| 2:14 | toast | guld | ✅ |
| 2:14 | händelse | printKlar | sak=kruka n=6 |
| 2:14 | händelse | tagitUrPrint | sak=kruka n=1 |
| 2:20 | klar | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått generator. Vi tar en låt på det. Den här är till dig, Gunnar. |
| 2:21 | aliSalt | ali | 105 |
| 2:41 | struken | ali | Ali här. Såg skylten. Stavningen är rätt. Det är mer än många. |
| 2:46 | upplåst | mala | kvarnmotor |
| 2:46 | brott | UPPLÅST | kvarnmotor (mala 14 av 6) |
| 2:46 | händelse | upplast | id=kvarnmotor flask=mala |
| 2:46 | paket |  | tanke → sms |
| 2:46 | tanke | du | Mina armar… Kvarnen borde veva själv. |
| 2:46 | väntar | du | Mina armar… Kvarnen borde veva själv. |
| 2:46 | väntar | ali | Ali här. En motor? Jag har en. Från en gammal tvättmaskin. Den centrifugerar fortfarande om man ber snällt. |
| 2:49 | händelse | printStart | sak=kruka |
| 2:53 | toast | guld | ✅ |
| 2:53 | händelse | printKlar | sak=kruka n=7 |
| 2:54 | händelse | tagitUrPrint | sak=kruka n=1 |
| 2:54 | väntar | mamma | Har du frusit än? |
| 3:00 | sak | ali | Ali här. En motor? Jag har en. Från en gammal tvättmaskin. Den centrifugerar fortfarande om man ber snällt. |
| 3:00 | sms | ali | Ali här. En motor? Jag har en. Från en gammal tvättmaskin. Den centrifugerar fortfarande om man ber snällt. |
| 3:00 | sms-bubbla | ali | Ali här. En motor? Jag har en. Från en gammal tvättmaskin. Den centrifugerar fortfarande om man ber snällt. |
| 3:00 | röst | ali | Ali här. En motor? Jag har en. Från en gammal tvättmaskin. Den centrifugerar fortfarande om man ber snällt. · STORY |
| 3:01 | aliSalt | ali | 105 |
| 3:06 | skratt | du | falsk tuta |
| 3:09 | klar | ali | Ali här. En motor? Jag har en. Från en gammal tvättmaskin. Den centrifugerar fortfarande om man ber snällt. |
| 3:13 | struken | info:guld | 3D-modell köpt – printa kvarnmotor |
| 3:13 | händelse | kopt | sak=kvarnmotor |
| 3:14 | händelse | malKlart | id=kopMotor del=Dag 2 – Tippen bredvid nasta=monteraMotor |
| 3:14 | struken | kedja | motorKopt |
| 3:14 | väntar | du | Motorn ska sitta där veven sitter. Jag printar den först. |
| 3:14 | målruta |  | Printa kvarnmotorn till kvarnen |
| 3:14 | MÅL |  | Printa kvarnmotorn till kvarnen |
| 3:14 | sak | du | Motorn ska sitta där veven sitter. Jag printar den först. |
| 3:14 | pil |  | Printa kvarnmotorn till kvarnen |
| 3:14 | notis | tanke | 💭 Motorn ska sitta där veven sitter. Jag printar den först. |
| 3:14 | röst | du | Motorn ska sitta där veven sitter. Jag printar den först. · MÅL |
| 3:15 | nick |  | nick:22 |
| 3:18 | kvittens-bock |  | ✓ Köp kvarnmotorn hos Ali (50 kr) |
| 3:19 | klar | du | Motorn ska sitta där veven sitter. Jag printar den först. |
| 3:28 | händelse | printStart | sak=byggsats:kvarnmotor |
| 3:30 | händelse | printKlar | sak=byggsats:kvarnmotor n=1 |
| 3:30 | toast | guld | ✅ |
| 3:31 | väntar | info:guld | ⚙️ Kvarnmotorn ska skruvas fast på kvarnen. |
| 3:31 | händelse | tagitUrPrint | sak=byggsats:kvarnmotor n=1 |
| 3:31 | paket |  | sms |
| 3:31 | väntar | ali | Ali här. Ännu en ritning som blev på riktigt: Kvarnmotor. Semesterkassan växer. Livet växer. |
| 3:31 | sak | info:guld | ⚙️ Kvarnmotorn ska skruvas fast på kvarnen. |
| 3:31 | kvitto-visas | info:guld | ⚙️ Kvarnmotorn ska skruvas fast på kvarnen. |
| 3:31 | toast | guld | ⚙️ Kvarnmotorn ska skruvas fast på kvarnen. |
| 3:33 | klar | info:guld | ⚙️ Kvarnmotorn ska skruvas fast på kvarnen. |
| 3:36 | väntar | info:guld | ⚙️ Motorn sitter där veven satt – nu mal kvarnen själv. |
| 3:36 | händelse | monterat | sak=kvarnmotor |
| 3:36 | paket |  | tanke |
| 3:36 | tanke | du | Motorn sitter där veven satt. Mina armar tackar. |
| 3:36 | väntar | du | Motorn sitter där veven satt. Mina armar tackar. |
| 3:36 | monterat | du | byggsats:kvarnmotor |
| 3:36 | händelse | monterat | sak=kvarnmotor |
| 3:36 | sak | info:guld | ⚙️ Motorn sitter där veven satt – nu mal kvarnen själv. |
| 3:36 | kvitto-visas | info:guld | ⚙️ Motorn sitter där veven satt – nu mal kvarnen själv. |
| 3:36 | toast | guld | ⚙️ Motorn sitter där veven satt – nu mal kvarnen själv. |
| 3:36 | händelse | malKlart | id=monteraMotor del=Dag 2 – Tippen bredvid nasta=kopSack |
| 3:36 | struken | du | Motorn sitter där veven satt. Mina armar tackar. |
| 3:36 | väntar | du | Gården är full av skräp. Jag börjar vid skjulet. |
| 3:36 | MÅL |  | Kolla vad som flög ut från sopbilen |
| 3:38 | klar | info:guld | ⚙️ Motorn sitter där veven satt – nu mal kvarnen själv. |
| 3:38 | målruta |  | Kolla vad som flög ut från sopbilen |
| 3:40 | kvittens-bock |  | ✓ Printa kvarnmotorn till kvarnen |
| 3:40 | sak | du | Gården är full av skräp. Jag börjar vid skjulet. |
| 3:40 | pil |  | Kolla vad som flög ut från sopbilen |
| 3:40 | notis | tanke | 💭 Gården är full av skräp. Jag börjar vid skjulet. |
| 3:40 | röst | du | Gården är full av skräp. Jag börjar vid skjulet. · MÅL |
| 3:44 | klar | du | Gården är full av skräp. Jag börjar vid skjulet. |
| 3:49 | paket |  | brev → ge → tanke |
| 3:49 | väntar | rolf | Du sliter ju. Ingen gör så nuförtin. Ta dessa så går dä lättare. / grannen – ja kör sopbilen å har hand om tippen bredvid. MVH ROLF​ |
| 3:49 | väntar |  | (läget ändras) |
| 3:49 | tanke | du | Rolf… gubben i sopbilen. Han har tippen bredvid. Han verkar schysst. |
| 3:49 | okänt ord bytt | du | Rolf… gubben i sopbilen. Han har tippen bredvid. Han verkar schysst. |
| 3:49 | väntar | du | Rolf… gubben i sopbilen. Han har tippen bredvid. Han verkar schysst. |
| 3:49 | sak | rolf | Du sliter ju. Ingen gör så nuförtin. Ta dessa så går dä lättare. / grannen – ja kör sopbilen å har hand om tippen bredvid. MVH ROLF​ |
| 3:49 | lapp | Lapp från Rolf | Du sliter ju. Ingen gör så nuförtin. Ta dessa så går dä lättare. / grannen – ja kör sopbilen å har hand om tippen bredvid. MVH ROLF​ |
| 3:49 | röst | rolf | Du sliter ju. Ingen gör så nuförtin. Ta dessa så går dä lättare. / grannen – ja kör sopbilen å har hand om tippen bredvid. MVH ROLF​ · STORY |
| 3:54 | hjälp | kontroll | Klick: Klicka för att ta på dig den |
| 3:58 | väntar | mamma | Har du frusit än? |
| 4:00 | klar | rolf | Du sliter ju. Ingen gör så nuförtin. Ta dessa så går dä lättare. / grannen – ja kör sopbilen å har hand om tippen bredvid. MVH ROLF​ |
| 4:02 | väntar | info:guld | 🗑️ Sopsäcken är över axeln! Nu bär jag 10 skräp. |
| 4:02 | tog på | du | byggsats:korg |
| 4:02 | händelse | monterat | sak=korg |
| 4:02 | sak | info:guld | 🗑️ Sopsäcken är över axeln! Nu bär jag 10 skräp. |
| 4:02 | kvitto-visas | info:guld | 🗑️ Sopsäcken är över axeln! Nu bär jag 10 skräp. |
| 4:02 | toast | guld | 🗑️ Sopsäcken är över axeln! Nu bär jag 10 skräp. |
| 4:02 | händelse | malKlart | id=kopSack del=Dag 2 – Tippen bredvid nasta=n1-stada-klart-garden |
| 4:02 | händelse | malKlart | id=n1-stada-klart-garden del=Dag 2 – Tippen bredvid nasta=rolf0-brev |
| 4:02 | väntar | du | Gården är STÄDAD, av mig, frivilligt. Mamma skulle aldrig tro det. |
| 4:02 | väntar | du | Vänta på sopbilen. Den lämnar något. |
| 4:02 | MÅL |  | Vänta på sopbilen. Den lämnar något. |
| 4:04 | klar | info:guld | 🗑️ Sopsäcken är över axeln! Nu bär jag 10 skräp. |
| 4:04 | sak | du | Gården är STÄDAD, av mig, frivilligt. Mamma skulle aldrig tro det. |
| 4:04 | kvitto-visas | du | Gården är STÄDAD, av mig, frivilligt. Mamma skulle aldrig tro det. |
| 4:04 | lapp | 📔 Dagbok | Gården är STÄDAD, av mig, frivilligt. Mamma skulle aldrig tro det. |
| 4:04 | dagbokrad | du | Gården är STÄDAD, av mig, frivilligt. Mamma skulle aldrig tro det. |
| 4:04 | notis | dagbok | Gården är STÄDAD, av mig, frivilligt. Mamma skulle aldrig tro det. |
| 4:04 | klar | du | Gården är STÄDAD, av mig, frivilligt. Mamma skulle aldrig tro det. |
| 4:04 | målruta |  | Vänta på sopbilen. Den lämnar något. |
| 4:04 | sak | du | Vänta på sopbilen. Den lämnar något. |
| 4:04 | pil |  | Vänta på sopbilen. Den lämnar något. |
| 4:04 | röst | du | Vänta på sopbilen. Den lämnar något. · MÅL |
| 4:07 | händelse | printStart | sak=kruka |
| 4:07 | klar | du | Vänta på sopbilen. Den lämnar något. |
| 4:09 | toast | fel | Ingen ström – trampa cykeln |
| 4:09 | sak |  | (läget ändras) |
| 4:10 | klar |  | (läget ändras) |
| 4:10 | toast | guld | ✅ |
| 4:10 | händelse | printKlar | sak=kruka n=8 |
| 4:11 | händelse | tagitUrPrint | sak=kruka n=1 |
| 4:12 | hjälp | kontroll | R: Vrid innan du ställer ner |
| 4:14 | sak | du | Rolf… gubben i sopbilen. Han har tippen bredvid. Han verkar schysst. |
| 4:14 | notis | tanke | 💭 Rolf… gubben i sopbilen. Han har tippen bredvid. Han verkar schysst. |
| 4:14 | röst | du | Rolf… gubben i sopbilen. Han har tippen bredvid. Han verkar schysst. · STORY |
| 4:14 | upplåst | skrivare | rullstall |
| 4:14 | brott | UPPLÅST | rullstall (skrivare 128 av 60) |
| 4:14 | händelse | upplast | id=rullstall flask=skrivare |
| 4:14 | paket |  | tanke → sms |
| 4:14 | tanke | du | Kvarnen står och väntar för att hållaren är full. Om den rymde fler rullar kunde den mala hela tiden. |
| 4:14 | väntar | du | Kvarnen står och väntar för att hållaren är full. Om den rymde fler rullar kunde den mala hela tiden. |
| 4:14 | väntar | ali | Ali här. Rullställ. Fyra rullar i stället för en. Har ett på hyllan. |
| 4:18 | aliSalt | ali | 105 |
| 4:19 | klar | du | Rolf… gubben i sopbilen. Han har tippen bredvid. Han verkar schysst. |
| 4:27 | sak | du | Mina armar… Kvarnen borde veva själv. |
| 4:27 | notis | tanke | 💭 Mina armar… Kvarnen borde veva själv. |
| 4:27 | röst | du | Mina armar… Kvarnen borde veva själv. · STORY |
| 4:28 | händelse | printStart | sak=kruka |
| 4:30 | klar | du | Mina armar… Kvarnen borde veva själv. |
| 4:31 | toast | guld | ✅ |
| 4:31 | händelse | printKlar | sak=kruka n=9 |
| 4:31 | händelse | tagitUrPrint | sak=kruka n=1 |
| 4:38 | aliSalt | ali | 105 |
| 4:47 | händelse | printStart | sak=kruka |
| 4:48 | väntar | värld:TUUT TUUT! | TUUT TUUT! |
| 4:48 | paket |  | tanke → ge |
| 4:48 | tanke | du | Flaggan är uppe. Rolf har lämnat något. |
| 4:48 | väntar | du | Flaggan är uppe. Rolf har lämnat något. |
| 4:48 | väntar |  | (läget ändras) |
| 4:49 | skratt | du | falsk tuta |
| 4:50 | struken | ali | Ali här. Ännu en ritning som blev på riktigt: Kvarnmotor. Semesterkassan växer. Livet växer. |
| 4:51 | toast | guld | ✅ |
| 4:51 | händelse | printKlar | sak=kruka n=10 |
| 4:51 | händelse | tagitUrPrint | sak=kruka n=1 |
| 4:54 | skratt | du | däcket rullar iväg |
| 4:58 | sak | ali | Ali här. Rullställ. Fyra rullar i stället för en. Har ett på hyllan. |
| 4:58 | sms | ali | Ali här. Rullställ. Fyra rullar i stället för en. Har ett på hyllan. |
| 4:58 | sms-bubbla | ali | Ali här. Rullställ. Fyra rullar i stället för en. Har ett på hyllan. |
| 4:58 | röst | ali | Ali här. Rullställ. Fyra rullar i stället för en. Har ett på hyllan. · STORY |
| 4:59 | aliSalt | ali | 105 |
| 5:03 | klar | ali | Ali här. Rullställ. Fyra rullar i stället för en. Har ett på hyllan. |
| 5:10 | struken | värld:TUUT TUUT! | TUUT TUUT! |
| 5:12 | väntar | rolf | Såg att du printar grejer. Kan du göra en sån hä? Kall öl ä viktigt. /Rolf​ |
| 5:12 | paket |  | ge |
| 5:12 | väntar |  | (läget ändras) |
| 5:12 | sak | rolf | Såg att du printar grejer. Kan du göra en sån hä? Kall öl ä viktigt. /Rolf​ |
| 5:12 | lapp | Brev från Rolf | Såg att du printar grejer. Kan du göra en sån hä? Kall öl ä viktigt. /Rolf​ |
| 5:12 | röst | rolf | Såg att du printar grejer. Kan du göra en sån hä? Kall öl ä viktigt. /Rolf​ · STORY |
| 5:12 | händelse | malKlart | id=rolf0-brev del=Dag 2 – Tippen bredvid nasta=rolf0-printa |
| 5:12 | väntar | du | Printa ölhållare med kylklamp. |
| 5:12 | MÅL |  | Printa ölhållare med kylklamp |
| 5:14 | målruta |  | Printa ölhållare med kylklamp |
| 5:15 | händelse | printStart | sak=olhallare |
| 5:15 | händelse | malKlart | id=rolf0-printa del=Dag 2 – Tippen bredvid nasta=rolf0-ge |
| 5:15 | väntar | du | Ge Rolf ölhållare med kylklamp. |
| 5:15 | MÅL |  | Ge Rolf ölhållare med kylklamp |
| 5:18 | målruta |  | Ge Rolf ölhållare med kylklamp |
| 5:18 | klar | rolf | Såg att du printar grejer. Kan du göra en sån hä? Kall öl ä viktigt. /Rolf​ |
| 5:18 | händelse | brevLast | id=rolf:0 |
| 5:18 | toast | guld | ✅ |
| 5:18 | händelse | printKlar | sak=olhallare n=1 |
| 5:19 | kvittens-bock |  | ✓ Printa ölhållare med kylklamp |
| 5:20 | struken | du | Printa ölhållare med kylklamp. |
| 5:20 | sak | du | Ge Rolf ölhållare med kylklamp. |
| 5:20 | pil |  | Ge Rolf ölhållare med kylklamp |
| 5:20 | röst | du | Ge Rolf ölhållare med kylklamp. · MÅL |
| 5:23 | klar | du | Ge Rolf ölhållare med kylklamp. |
| 5:25 | sak |  | (läget ändras) |
| 5:25 | klar |  | (läget ändras) |
| 5:39 | sak | du | Kvarnen står och väntar för att hållaren är full. Om den rymde fler rullar kunde den mala hela tiden. |
| 5:39 | notis | tanke | 💭 Kvarnen står och väntar för att hållaren är full. Om den rymde fler rullar kunde den mala hela tiden. |
| 5:39 | röst | du | Kvarnen står och väntar för att hållaren är full. Om den rymde fler rullar kunde den mala hela tiden. · STORY |
| 5:39 | händelse | tagitUrPrint | sak=olhallare n=1 |
| 5:44 | väntar | bud | (tips) |
| 5:47 | upplåst | skrivare | trim_skrivare |
| 5:47 | brott | UPPLÅST | trim_skrivare (skrivare 60 av 60) |
| 5:47 | händelse | upplast | id=trim_skrivare flask=skrivare |
| 5:47 | paket |  | sms |
| 5:47 | väntar | ali | Ali här. Skrivartrim. Jag skruvade på min egen skrivare i natt. Den går fortare nu. Nästan för fort. |
| 5:47 | klar | du | Kvarnen står och väntar för att hållaren är full. Om den rymde fler rullar kunde den mala hela tiden. |
| 5:49 | sak | bud | (tips) |
| 5:50 | väntar | du | Klart! Nu lägger jag den i Rolfs brevlåda vid grinden. |
| 5:51 | klar | bud | (tips) |
| 5:53 | sak | du | Klart! Nu lägger jag den i Rolfs brevlåda vid grinden. |
| 5:53 | röst | du | Klart! Nu lägger jag den i Rolfs brevlåda vid grinden. · MÅL |
| 5:54 | händelse | lagtIPostlada | sak=olhallare rolf=0 jobb=false |
| 5:54 | struken | kedja | rolf0 |
| 5:54 | paket |  | tanke |
| 5:54 | tanke | du | Flaggan uppe. Nu får Rolf hämta den. |
| 5:54 | väntar | du | Flaggan uppe. Nu får Rolf hämta den. |
| 5:54 | händelse | malKlart | id=rolf0-ge del=Dag 2 – Tippen bredvid nasta=vindsnurra |
| 5:54 | struken | du | Flaggan uppe. Nu får Rolf hämta den. |
| 5:54 | väntar | du | En vindsnurra på skjulets tak. Då blir det ström när det blåser. |
| 5:54 | MÅL |  | Trampa, printa och sälj |
| 5:57 | målruta |  | Trampa, printa och sälj |
| 5:57 | klar | du | Klart! Nu lägger jag den i Rolfs brevlåda vid grinden. |
| 5:58 | kvittens-bock |  | ✓ Ge Rolf ölhållare med kylklamp |
| 5:59 | sak | du | En vindsnurra på skjulets tak. Då blir det ström när det blåser. |
| 5:59 | pil |  | Trampa, printa och sälj |
| 5:59 | notis | tanke | 💭 En vindsnurra på skjulets tak. Då blir det ström när det blåser. |
| 5:59 | röst | du | En vindsnurra på skjulets tak. Då blir det ström när det blåser. · MÅL |
| 6:05 | klar | du | En vindsnurra på skjulets tak. Då blir det ström när det blåser. |
| 6:10 | händelse | printStart | sak=kruka |
| 6:11 | toast | fel | Ingen ström – trampa cykeln |
| 6:12 | upplåst | trampa | vindsnurra |
| 6:12 | brott | UPPLÅST | vindsnurra (trampa 25 av 6) |
| 6:12 | händelse | upplast | id=vindsnurra flask=trampa |
| 6:12 | paket |  | tanke → sms |
| 6:12 | tanke | du | Mina ben är slut. Det blåser hela tiden här ute. Tänk om vinden kunde trampa åt mig. |
| 6:12 | väntar | du | Mina ben är slut. Det blåser hela tiden här ute. Tänk om vinden kunde trampa åt mig. |
| 6:12 | väntar | ali | Ali här. Vindsnurra till cykeln. Vinden trampar åt dig. Den är lat, men den jobbar gratis. |
| 6:13 | sak | du | Flaggan är uppe. Rolf har lämnat något. |
| 6:13 | notis | tanke | 💭 Flaggan är uppe. Rolf har lämnat något. |
| 6:13 | röst | du | Flaggan är uppe. Rolf har lämnat något. · STORY |
| 6:13 | toast | guld | ✅ |
| 6:13 | händelse | printKlar | sak=kruka n=11 |
| 6:14 | händelse | tagitUrPrint | sak=kruka n=1 |
| 6:16 | klar | du | Flaggan är uppe. Rolf har lämnat något. |
| 6:20 | röst | ali | Rolf gav mig en kanna. Som min farmors. Jag ritade en sak åt honom. Säg inget, han gråter lätt. · STORY |
| 6:20 | butiksbubbla | ali | Rolf gav mig en kanna. Som min farmors. Jag ritade en sak åt honom. Säg inget, han gråter lätt. |
| 6:22 | aliSalt | ali | 105 |
| 6:26 | struken | info:guld | 3D-modell köpt – printa vindsnurra till skjultaket |
| 6:26 | händelse | kopt | sak=vindsnurra |
| 6:26 | struken | ali | Ali här. Vindsnurra till cykeln. Vinden trampar åt dig. Den är lat, men den jobbar gratis. |
| 6:35 | händelse | printStart | sak=byggsats:vindsnurra |
| 6:35 | sak |  | (läget ändras) |
| 6:35 | brev | rolf | rolf:0 |
| 6:35 | klar |  | (läget ändras) |
| 6:39 | sak | ali | Ali här. Skrivartrim. Jag skruvade på min egen skrivare i natt. Den går fortare nu. Nästan för fort. |
| 6:39 | sms | ali | Ali här. Skrivartrim. Jag skruvade på min egen skrivare i natt. Den går fortare nu. Nästan för fort. |
| 6:39 | sms-bubbla | ali | Ali här. Skrivartrim. Jag skruvade på min egen skrivare i natt. Den går fortare nu. Nästan för fort. |
| 6:39 | röst | ali | Ali här. Skrivartrim. Jag skruvade på min egen skrivare i natt. Den går fortare nu. Nästan för fort. · STORY |
| 6:40 | händelse | printKlar | sak=byggsats:vindsnurra n=1 |
| 6:40 | toast | guld | ✅ |
| 6:40 | väntar | info:guld | 🌬️ Vindsnurran ska upp på skjulets tak. |
| 6:40 | händelse | tagitUrPrint | sak=byggsats:vindsnurra n=1 |
| 6:42 | kvitto-visas | info:guld | 🌬️ Vindsnurran ska upp på skjulets tak. |
| 6:42 | toast | guld | 🌬️ Vindsnurran ska upp på skjulets tak. |
| 6:47 | klar | ali | Ali här. Skrivartrim. Jag skruvade på min egen skrivare i natt. Den går fortare nu. Nästan för fort. |
| 6:52 | paket |  | tanke |
| 6:52 | tanke | du | Jaha, Rolf har hämtat en ölhållare med kylklamp. |
| 6:52 | väntar | du | Jaha, Rolf har hämtat en ölhållare med kylklamp. |
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
| 6:54 | struken | du | Jaha, Rolf har hämtat en ölhållare med kylklamp. |
| 6:54 | väntar | du | Det drar från dörrhålet. En dörr kan jag printa. |
| 6:54 | MÅL |  | Bygg en dörr till skjulet |
| 6:57 | målruta |  | Bygg en dörr till skjulet |
| 6:57 | klar | du | Den snurrar! Långsamt. Men den snurrar. |
| 7:00 | sak | du | Det drar från dörrhålet. En dörr kan jag printa. |
| 7:00 | pil |  | Bygg en dörr till skjulet |
| 7:00 | notis | tanke | 💭 Det drar från dörrhålet. En dörr kan jag printa. |
| 7:00 | röst | du | Det drar från dörrhålet. En dörr kan jag printa. · MÅL |
| 7:00 | nick |  | nick:29 |
| 7:03 | struken | info:guld | 3D-modell köpt – printa dörr |
| 7:03 | händelse | kopt | sak=dorr |
| 7:04 | klar | du | Det drar från dörrhålet. En dörr kan jag printa. |
| 7:04 | struken | info:guld | 🌬️ Vindsnurran sitter på taket – den trampar cykeln åt mig när det blåser |
| 7:11 | händelse | printStart | sak=byggsats:dorr |
| 7:12 | sak | du | Mina ben är slut. Det blåser hela tiden här ute. Tänk om vinden kunde trampa åt mig. |
| 7:12 | notis | tanke | 💭 Mina ben är slut. Det blåser hela tiden här ute. Tänk om vinden kunde trampa åt mig. |
| 7:12 | röst | du | Mina ben är slut. Det blåser hela tiden här ute. Tänk om vinden kunde trampa åt mig. · STORY |
| 7:14 | skratt | du | falsk tuta |
| 7:15 | toast | bra | Del 1 av 2 klar |
| 7:15 | väntar | notis:Storebrors skrivare: Del 1 av 2 klar | Storebrors skrivare: Del 1 av 2 klar |
| 7:18 | händelse | printKlar | sak=byggsats:dorr n=1 |
| 7:18 | toast | guld | ✅ |
| 7:18 | händelse | tagitUrPrint | sak=byggsats:dorr n=1 |
| 7:18 | paket |  | sms |
| 7:18 | väntar | ali | Ali här. Jag har inte sovit. Inte på grund av AI:n. På grund av dig. Du bygger saker av sopor. Jag har en hel butik och bygger ingenting. Det ska ändras. Kanske. Troligen. |
| 7:19 | klar | du | Mina ben är slut. Det blåser hela tiden här ute. Tänk om vinden kunde trampa åt mig. |
| 7:23 | väntar | info:guld | Dörr på plats! Trivsel +8 |
| 7:23 | sak | info:guld | Dörr på plats! Trivsel +8 |
| 7:23 | kvitto-visas | info:guld | Dörr på plats! Trivsel +8 |
| 7:23 | toast | guld | Dörr på plats! Trivsel +8 |
| 7:23 | händelse | malKlart | id=n1-bygg-dorr-skjulet del=Dag 2 – Tippen bredvid nasta=sov2 |
| 7:23 | paket |  | lapp |
| 7:23 | väntar | du | Nu vet Ali att jag bor HÄR. Taket läcker. I morgon. |
| 7:23 | paket |  | sms |
| 7:23 | väntar | bror | Mamma ringde mig fyra gånger förresten. Snyggt jobbat 😂 |
| 7:23 | skratt | bror | Mamma ringde mig fyra gånger förresten. |
| 7:23 | väntar | du | Klart för idag – sov när du vill. |
| 7:23 | MÅL |  | Klart för idag – sov när du vill |
| 7:25 | klar | info:guld | Dörr på plats! Trivsel +8 |
| 7:26 | målruta |  | Klart för idag – sov när du vill |
| 7:27 | kvittens-bock |  | ✓ Bygg en dörr till skjulet |
| 7:27 | sak | du | Klart för idag – sov när du vill. |
| 7:27 | pil |  | Klart för idag – sov när du vill |
| 7:27 | röst | du | Klart för idag – sov när du vill. · MÅL |
| 7:30 | klar | du | Klart för idag – sov när du vill. |
| 7:30 | väntar | notis:🌇 Klockan är 21. Ali slår igen luckan.  | 🌇 Klockan är 21. Ali slår igen luckan. Dagens jobb är klart – gå in i skjulet och sov i sängen. |
| 7:32 | sak | du | Nu vet Ali att jag bor HÄR. Taket läcker. I morgon. |
| 7:32 | kvallsrad | du | Nu vet Ali att jag bor HÄR. Taket läcker. I morgon. |
| 7:32 | klar | du | Nu vet Ali att jag bor HÄR. Taket läcker. I morgon. |
| 7:37 | nattkort | du | 🌙 Dag 2 är slut. God natt. zzz… Nu vet Ali att jag bor HÄR. Taket läcker. I morgon. DAGENS PRINTAR Blomkruka × 10 Ölhållare med kylklamp × 1 Totalt 11 printar |

<details><summary>Botens handlingar dag 2</summary>

- 0:00 — dag 2 börjar — (80 kr)
- 0:08 popup: "FORTSÄTT" (80 kr)
- 0:19 tjänar pengar till väntar på flaskhalsen för kvarnmotor: 80/120 kr → printar blomkruka (105 kr) (80 kr)
- 0:23 gå till skrivaren (19 m) (80 kr)
- 0:24 printar Blomkruka (80 kr)
- 0:28 tar ut 1 st ur skrivaren (80 kr)
- 0:33 gå till Ali (26 m) (80 kr)
- 0:33 öppnar Alis butik – sälja (80 kr)
- 0:35 säljer hos Ali: +105 kr (185 kr)
- 0:41 tjänar pengar till väntar på flaskhalsen för kvarnmotor: 185/225 kr → printar blomkruka (105 kr) (185 kr)
- 0:46 gå till skrivaren (25 m) (185 kr)
- 0:47 printar Blomkruka (185 kr)
- 0:50 gå till cykeln (1 m) (185 kr)
- 0:52 tar ut 1 st ur skrivaren (185 kr)
- 0:58 gå till Ali (25 m) (185 kr)
- 0:58 öppnar Alis butik – sälja (185 kr)
- 0:59 säljer hos Ali: +105 kr (290 kr)
- 1:04 tjänar pengar till väntar på flaskhalsen för kvarnmotor: 290/330 kr → printar blomkruka (105 kr) (290 kr)
- 1:10 gå till skrivaren (25 m) (290 kr)
- 1:11 printar Blomkruka (290 kr)
- 1:15 tar ut 1 st ur skrivaren (290 kr)
- 1:20 gå till Ali (25 m) (290 kr)
- 1:20 öppnar Alis butik – sälja (290 kr)
- 1:22 säljer hos Ali: +105 kr (395 kr)
- 1:24 tjänar pengar till väntar på flaskhalsen för kvarnmotor: 395/435 kr → printar blomkruka (105 kr) (395 kr)
- 1:35 plockar 6 skräp på gården (bär max 6) (395 kr)
- 1:42 gå till kvarnen (36 m) (395 kr)
- 1:49 gå till skrivaren (3 m) (395 kr)
- 1:50 printar Blomkruka (395 kr)
- 1:53 gå till cykeln (1 m) (395 kr)
- 1:55 tar ut 1 st ur skrivaren (395 kr)
- 2:01 gå till Ali (27 m) (395 kr)
- 2:01 öppnar Alis butik – sälja (395 kr)
- 2:03 säljer hos Ali: +105 kr (500 kr)
- 2:05 tjänar pengar till väntar på flaskhalsen för kvarnmotor: 500/540 kr → printar blomkruka (105 kr) (500 kr)
- 2:10 gå till skrivaren (25 m) (500 kr)
- 2:11 printar Blomkruka (500 kr)
- 2:15 tar ut 1 st ur skrivaren (500 kr)
- 2:20 gå till Ali (25 m) (500 kr)
- 2:20 öppnar Alis butik – sälja (500 kr)
- 2:22 säljer hos Ali: +105 kr (605 kr)
- 2:23 tjänar pengar till väntar på flaskhalsen för kvarnmotor: 605/645 kr → printar blomkruka (105 kr) (605 kr)
- 2:36 plockar 6 skräp på gården (bär max 6) (605 kr)
- 2:43 gå till kvarnen (31 m) (605 kr)
- 2:48 gå till skrivaren (3 m) (605 kr)
- 2:49 printar Blomkruka (605 kr)
- 2:52 gå till cykeln (1 m) (605 kr)
- 2:54 tar ut 1 st ur skrivaren (605 kr)
- 3:00 gå till Ali (27 m) (605 kr)
- 3:00 öppnar Alis butik – sälja (605 kr)
- 3:02 säljer hos Ali: +105 kr (710 kr)
- 3:11 öppnar Alis butik – köpa kvarnmotor (710 kr)
- 3:14 köper kvarnmotor för 50 kr (660 kr)
- 3:27 gå till skrivaren (25 m) (660 kr)
- 3:28 printar Kvarnmotor (660 kr)
- 3:32 tar ut 1 st ur skrivaren (660 kr)
- 3:36 gå till skruva fast kvarnmotorn (3 m) (660 kr)
- 3:49 gå till Rolfs sopsäck (16 m) (660 kr)
- 4:02 tar på korg (660 kr)
- 4:02 tjänar pengar till väntar på sopbilen (BO): 660/720 kr → printar blomkruka (105 kr) (660 kr)
- 4:05 gå till skrivaren (12 m) (660 kr)
- 4:07 printar Blomkruka (660 kr)
- 4:09 gå till cykeln (1 m) (660 kr)
- 4:11 tar ut 1 st ur skrivaren (660 kr)
- 4:17 gå till Ali (25 m) (660 kr)
- 4:17 öppnar Alis butik – sälja (660 kr)
- 4:18 säljer hos Ali: +105 kr (765 kr)
- 4:21 tjänar pengar till väntar på sopbilen (BO): 765/825 kr → printar blomkruka (105 kr) (765 kr)
- 4:27 gå till skrivaren (25 m) (765 kr)
- 4:28 printar Blomkruka (765 kr)
- 4:32 tar ut 1 st ur skrivaren (765 kr)
- 4:37 gå till Ali (25 m) (765 kr)
- 4:37 öppnar Alis butik – sälja (765 kr)
- 4:39 säljer hos Ali: +105 kr (870 kr)
- 4:40 tjänar pengar till väntar på sopbilen (BO): 870/930 kr → printar blomkruka (105 kr) (870 kr)
- 4:46 gå till skrivaren (25 m) (870 kr)
- 4:47 printar Blomkruka (870 kr)
- 4:49 gå till cykeln (1 m) (870 kr)
- 4:52 tar ut 1 st ur skrivaren (870 kr)
- 4:57 gå till Ali (25 m) (870 kr)
- 4:57 öppnar Alis butik – sälja (870 kr)
- 4:59 säljer hos Ali: +105 kr (975 kr)
- 5:12 gå till Rolfs postlåda (31 m) (975 kr)
- 5:14 gå till skrivaren (7 m) (975 kr)
- 5:15 printar Ölhållare med kylklamp (975 kr)
- 5:32 plockar 8 skräp på gården (bär max 10) (975 kr)
- 5:38 gå till kvarnen (31 m) (975 kr)
- 5:39 gå till skrivaren (1 m) (975 kr)
- 5:40 tar ut 1 st ur skrivaren (975 kr)
- 5:53 valj olhallare: true, vald olhallare, post {"l":null,"tr":null,"tm":[]}, nummer false (975 kr)
- 5:54 gå till Rolfs postlåda (7 m) (975 kr)
- 6:07 tjänar pengar till väntar på flaskhalsen för vindsnurra: 975/1015 kr → printar blomkruka (105 kr) (975 kr)
- 6:08 gå till skrivaren (6 m) (975 kr)
- 6:10 printar Blomkruka (975 kr)
- 6:11 gå till cykeln (1 m) (975 kr)
- 6:15 tar ut 1 st ur skrivaren (975 kr)
- 6:20 gå till Ali (26 m) (975 kr)
- 6:20 öppnar Alis butik – sälja (975 kr)
- 6:22 säljer hos Ali: +105 kr (1080 kr)
- 6:25 öppnar Alis butik – köpa vindsnurra till skjultaket (1080 kr)
- 6:27 köper vindsnurra för 133 kr (947 kr)
- 6:33 gå till skrivaren (25 m) (947 kr)
- 6:35 printar Vindsnurra till skjultaket (947 kr)
- 6:39 gå till cykeln (1 m) (947 kr)
- 6:41 tar ut 1 st ur skrivaren (947 kr)
- 6:54 gå till sätt vindsnurran på taket (20 m) (947 kr)
- 7:02 gå till Ali (20 m) (947 kr)
- 7:02 öppnar Alis butik – köpa dörr (947 kr)
- 7:04 köper dorr för 120 kr (827 kr)
- 7:10 gå till skrivaren (25 m) (827 kr)
- 7:11 printar Dörr (2 delar) (827 kr)
- 7:19 tar ut 1 st ur skrivaren (827 kr)
- 7:23 gå till skjulet (19 m) (827 kr)
- 7:35 gå till sängen (1 m) (827 kr)

</details>

## Dag 3

| Tid | Källa | Vem | Text |
|---|---|---|---|
| 7:37 | vara | ali | ingen |
| 7:37 | händelse | malKlart | id=sov2 del=Dag 2 – Tippen bredvid nasta=rolf1-brev |
| 7:37 | vara | ali | kruka |
| 7:37 | MÅL |  | Vänta på sopbilen. Den lämnar något. |
| 0:01 | händelse | dagenBorjar | dag=3 |
| 0:01 | meddelande | du | Dag 3. 19 dagar till jul. Utan tak regnar det in i natt. |
| 0:01 | dagbokkort | du | En skrivare till och taket · Dag 3. 19 dagar till jul. Utan tak regnar det in i natt. |
| 0:01 | röst | du | Dag 3. 19 dagar till jul. En skrivare till och taket. Utan tak regnar det in i natt. · STORY |
| 0:08 | väntar | notis:morgon | Ali vill ha idag: Blomkruka · +50 % |
| 0:08 | händelse | morgonkortStangt | dag=3 |
| 0:08 | målruta |  | Vänta på sopbilen. Den lämnar något. |
| 0:14 | sak | du | (nytt mål i rutan) |
| 0:14 | pil |  | Vänta på sopbilen. Den lämnar något. |
| 0:14 | klar | du | (nytt mål i rutan) |
| 0:16 | struken | notis:Storebrors skrivare: Del 1 av 2 klar | Storebrors skrivare: Del 1 av 2 klar |
| 0:16 | struken | notis:🌇 Klockan är 21. Ali slår igen luckan.  | 🌇 Klockan är 21. Ali slår igen luckan. Dagens jobb är klart – gå in i skjulet och sov i sängen. |
| 0:16 | struken | mamma | Har du frusit än? |
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
| 0:40 | sak | rolf | Den funkar! Hä. Ta så mycke skräp du vill. /Rolf​ |
| 0:40 | lapp | Brev från Rolf | Den funkar! Hä. Ta så mycke skräp du vill. /Rolf​ |
| 0:40 | röst | rolf | Den funkar! Hä. Ta så mycke skräp du vill. /Rolf​ · STORY |
| 0:41 | toast | guld | ✅ |
| 0:41 | händelse | printKlar | sak=kruka n=12 |
| 0:42 | händelse | tagitUrPrint | sak=kruka n=1 |
| 0:44 | klar | rolf | Den funkar! Hä. Ta så mycke skräp du vill. /Rolf​ |
| 0:44 | händelse | brevLast | id=rolftack:0 |
| 0:48 | röst | ali | Satt med AI:n hela natten igen. Fråga inte vad. Okej, en soffa. Fråga inte. · STORY |
| 0:48 | butiksbubbla | ali | Satt med AI:n hela natten igen. Fråga inte vad. Okej, en soffa. Fråga inte. |
| 0:50 | aliSalt | ali | 105 |
| 0:50 | butiksbubbla | ali | Dina krukor säljer. Tanterna i kvarteret älskar dem. |
| 0:50 | väntar | ali | Dina krukor säljer. Tanterna i kvarteret älskar dem. |
| 0:52 | sak | ali | Dina krukor säljer. Tanterna i kvarteret älskar dem. |
| 0:52 | röst | ali | Dina krukor säljer. Tanterna i kvarteret älskar dem. · STORY |
| 0:56 | klar | ali | Dina krukor säljer. Tanterna i kvarteret älskar dem. |
| 1:04 | sak | du | …Det här räcker i hundra år. |
| 1:04 | notis | tanke | 💭 …Det här räcker i hundra år. |
| 1:04 | röst | du | …Det här räcker i hundra år. · STORY |
| 1:05 | händelse | printStart | sak=kruka |
| 1:06 | klar | du | …Det här räcker i hundra år. |
| 1:10 | toast | guld | ✅ |
| 1:10 | händelse | printKlar | sak=kruka n=13 |
| 1:15 | skratt | du | falsk tuta |
| 1:41 | händelse | tagitUrPrint | sak=kruka n=1 |
| 1:47 | väntar | ali | Jag har kaffe. Det är inte gott. Men det finns. |
| 1:47 | sak | ali | Jag har kaffe. Det är inte gott. Men det finns. |
| 1:47 | röst | ali | Jag har kaffe. Det är inte gott. Men det finns. · SMÅPRAT |
| 1:48 | bubbla |  | Jag har kaffe. Det är inte gott. Men det finns. |
| 1:50 | aliSalt | ali | 105 |
| 1:51 | klar | ali | Jag har kaffe. Det är inte gott. Men det finns. |
| 2:00 | händelse | printStart | sak=kruka |
| 2:05 | toast | guld | ✅ |
| 2:05 | händelse | printKlar | sak=kruka n=14 |
| 2:05 | händelse | tagitUrPrint | sak=kruka n=1 |
| 2:11 | väntar | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått en DÖRR. Och vindsnurra till skjultaket. Mer säger jag inte. Gunnar vet. |
| 2:11 | radio | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått en DÖRR. Och vindsnurra till skjultaket. Mer säger jag inte. Gunnar vet. |
| 2:11 | skratt | du | Radio-Kjelle |
| 2:11 | sak | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått en DÖRR. Och vindsnurra till skjultaket. Mer säger jag inte. Gunnar vet. |
| 2:11 | notis |  | 📻 Radio Tippen: Radio Tippen, Kjelle här. Skjulet vid tippen har fått en DÖRR. Och vindsnurra till skjultaket. Mer säger jag inte. Gunnar vet. |
| 2:11 | röst | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått en DÖRR. Och vindsnurra till skjultaket. Mer säger jag inte. Gunnar vet. · REAKTION |
| 2:13 | aliSalt | ali | 105 |
| 2:21 | klar | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått en DÖRR. Och vindsnurra till skjultaket. Mer säger jag inte. Gunnar vet. |
| 2:30 | händelse | printStart | sak=kruka |
| 2:36 | toast | guld | ✅ |
| 2:36 | händelse | printKlar | sak=kruka n=15 |
| 2:36 | händelse | tagitUrPrint | sak=kruka n=1 |
| 2:43 | aliSalt | ali | 105 |
| 2:51 | skratt | du | falsk tuta |
| 2:51 | väntar | värld:TUUT TUUT! | TUUT TUUT! |
| 2:51 | paket |  | ge |
| 2:51 | väntar |  | (läget ändras) |
| 2:51 | sak | värld:TUUT TUUT! | TUUT TUUT! |
| 2:51 | bubbla |  | TUUT TUUT! |
| 2:54 | händelse | printStart | sak=kruka |
| 2:54 | klar | värld:TUUT TUUT! | TUUT TUUT! |
| 2:58 | väntar | info:guld | 🚛 Sopbilen tippade en ny last på soptippen! |
| 2:58 | sak | info:guld | 🚛 Sopbilen tippade en ny last på soptippen! |
| 2:58 | kvitto-visas | info:guld | 🚛 Sopbilen tippade en ny last på soptippen! |
| 2:58 | toast | guld | 🚛 Sopbilen tippade en ny last på soptippen! |
| 2:59 | toast | guld | ✅ |
| 2:59 | händelse | printKlar | sak=kruka n=16 |
| 2:59 | händelse | tagitUrPrint | sak=kruka n=1 |
| 3:00 | klar | info:guld | 🚛 Sopbilen tippade en ny last på soptippen! |
| 3:06 | aliSalt | ali | 105 |
| 3:10 | sak |  | (läget ändras) |
| 3:10 | brev | rolf | rolf:1 |
| 3:10 | klar |  | (läget ändras) |
| 3:16 | väntar | rolf | Nämen. Kajsa knuffa ner min flasköppnare i tippen. Kan du göra en ny, mä magnet? /Rolf​ |
| 3:16 | paket |  | ge |
| 3:16 | väntar |  | (läget ändras) |
| 3:16 | sak | rolf | Nämen. Kajsa knuffa ner min flasköppnare i tippen. Kan du göra en ny, mä magnet? /Rolf​ |
| 3:16 | lapp | Brev från Rolf | Nämen. Kajsa knuffa ner min flasköppnare i tippen. Kan du göra en ny, mä magnet? /Rolf​ |
| 3:16 | röst | rolf | Nämen. Kajsa knuffa ner min flasköppnare i tippen. Kan du göra en ny, mä magnet? /Rolf​ · STORY |
| 3:16 | händelse | malKlart | id=rolf1-brev del=Dag 3 – En skrivare till och taket nasta=n2-hamta-skrap |
| 3:16 | väntar | du | Nyckeln till tippen. Där ligger skräpet i högar. |
| 3:16 | MÅL |  | Hämta 5 skräp på soptippen |
| 3:19 | målruta |  | Hämta 5 skräp på soptippen |
| 3:21 | händelse | malKlart | id=n2-hamta-skrap del=Dag 3 – En skrivare till och taket nasta=rolf1-printa |
| 3:21 | struken | kedja | tippen |
| 3:21 | väntar | du | Printa flasköppnare med magnet. |
| 3:21 | MÅL |  | Printa flasköppnare med magnet |
| 3:24 | målruta |  | Printa flasköppnare med magnet |
| 3:24 | klar | rolf | Nämen. Kajsa knuffa ner min flasköppnare i tippen. Kan du göra en ny, mä magnet? /Rolf​ |
| 3:24 | händelse | brevLast | id=rolf:1 |
| 3:25 | kvittens-bock |  | ✓ Hämta 5 skräp på soptippen |
| 3:26 | struken | du | Nyckeln till tippen. Där ligger skräpet i högar. |
| 3:26 | sak | du | Printa flasköppnare med magnet. |
| 3:26 | pil |  | Printa flasköppnare med magnet |
| 3:26 | röst | du | Printa flasköppnare med magnet. · MÅL |
| 3:26 | nick |  | nick:33 |
| 3:28 | klar | du | Printa flasköppnare med magnet. |
| 3:29 | tanke | du | En hel kanot. Kvarnen skulle äta upp sig själv. |
| 3:29 | väntar | du | En hel kanot. Kvarnen skulle äta upp sig själv. |
| 3:30 | sak |  | (läget ändras) |
| 3:30 | klar |  | (läget ändras) |
| 3:33 | händelse | printStart | sak=flaskoppnare |
| 3:33 | händelse | malKlart | id=rolf1-printa del=Dag 3 – En skrivare till och taket nasta=rolf1-ge |
| 3:33 | väntar | du | Ge Rolf flasköppnare med magnet. |
| 3:33 | målruta |  | Ge Rolf flasköppnare med magnet |
| 3:33 | MÅL |  | Ge Rolf flasköppnare med magnet |
| 3:33 | sak | du | Ge Rolf flasköppnare med magnet. |
| 3:33 | pil |  | Ge Rolf flasköppnare med magnet |
| 3:33 | röst | du | Ge Rolf flasköppnare med magnet. · MÅL |
| 3:36 | klar | du | Ge Rolf flasköppnare med magnet. |
| 3:37 | toast | guld | ✅ |
| 3:37 | händelse | printKlar | sak=flaskoppnare n=1 |
| 3:37 | kvittens-bock |  | ✓ Printa flasköppnare med magnet |
| 3:37 | händelse | tagitUrPrint | sak=flaskoppnare n=1 |
| 3:38 | sak | du | En hel kanot. Kvarnen skulle äta upp sig själv. |
| 3:38 | notis | tanke | 💭 En hel kanot. Kvarnen skulle äta upp sig själv. |
| 3:38 | röst | du | En hel kanot. Kvarnen skulle äta upp sig själv. · REAKTION |
| 3:42 | klar | du | En hel kanot. Kvarnen skulle äta upp sig själv. |
| 3:45 | händelse | lagtIPostlada | sak=flaskoppnare rolf=1 jobb=false |
| 3:45 | struken | kedja | rolf1 |
| 3:45 | paket |  | tanke |
| 3:45 | tanke | du | Flaggan uppe. Nu får Rolf hämta den. |
| 3:45 | väntar | du | Flaggan uppe. Nu får Rolf hämta den. |
| 3:45 | sak | du | Flaggan uppe. Nu får Rolf hämta den. |
| 3:45 | notis | tanke | 💭 Flaggan uppe. Nu får Rolf hämta den. |
| 3:45 | röst | du | Flaggan uppe. Nu får Rolf hämta den. · REAKTION |
| 3:45 | händelse | malKlart | id=rolf1-ge del=Dag 3 – En skrivare till och taket nasta=kopBatteri |
| 3:45 | väntar | du | Ali har ett gammalt bilbatteri. Då sparar jag strömmen. |
| 3:46 | MÅL |  | Printa och sälj |
| 3:48 | målruta |  | Printa och sälj |
| 3:48 | klar | du | Flaggan uppe. Nu får Rolf hämta den. |
| 3:49 | kvittens-bock |  | ✓ Ge Rolf flasköppnare med magnet |
| 3:51 | sak | du | Ali har ett gammalt bilbatteri. Då sparar jag strömmen. |
| 3:51 | pil |  | Printa och sälj |
| 3:51 | notis | tanke | 💭 Ali har ett gammalt bilbatteri. Då sparar jag strömmen. |
| 3:51 | röst | du | Ali har ett gammalt bilbatteri. Då sparar jag strömmen. · MÅL |
| 3:54 | händelse | printStart | sak=kruka |
| 3:56 | klar | du | Ali har ett gammalt bilbatteri. Då sparar jag strömmen. |
| 3:57 | väntar | bud | (tips) |
| 3:58 | sak | bud | (tips) |
| 3:59 | toast | guld | ✅ |
| 3:59 | händelse | printKlar | sak=kruka n=17 |
| 3:59 | händelse | tagitUrPrint | sak=kruka n=1 |
| 4:00 | klar | bud | (tips) |
| 4:02 | meddelande | mamma | Vem är den där Ali? Är han snäll? Betalar han dig ordentligt? |
| 4:03 | röst | mamma | Vem är den där Ali? Är han snäll? Betalar han dig ordentligt? · STORY |
| 4:11 | paket |  | sms |
| 4:11 | väntar | mamma | Typ? Jag ringer honom. Vad heter butiken? Jag hittar den. |
| 4:20 | händelse | brevLast | id=m_ali |
| 4:25 | aliSalt | ali | 105 |
| 4:26 | strömdipp | du | cykelbatteri |
| 4:26 | paket |  | tanke |
| 4:26 | tanke | du | Den stannar. Strömmen räcker inte till alla maskiner. |
| 4:26 | väntar | du | Den stannar. Strömmen räcker inte till alla maskiner. |
| 4:33 | händelse | printStart | sak=kruka |
| 4:33 | toast | fel | Ingen ström – maskinerna drar mer än du får in. Bygg en solpanel |
| 4:41 | upplåst | strom | cykelbatteri |
| 4:41 | brott | UPPLÅST | cykelbatteri (strom 35 av 15) |
| 4:41 | händelse | upplast | id=cykelbatteri flask=strom |
| 4:41 | paket |  | tanke → sms |
| 4:41 | tanke | du | Powerbanken räcker till en nyckelring. Sen är det trampa igen. |
| 4:41 | väntar | du | Powerbanken räcker till en nyckelring. Sen är det trampa igen. |
| 4:41 | väntar | ali | Ali här. Bilbatteriet ur min gamla Volvo står i lagret. Det sparar mer ström än powerbanken. |
| 4:56 | skratt | du | falsk tuta |
| 5:02 | toast | guld | ✅ |
| 5:02 | händelse | printKlar | sak=kruka n=18 |
| 5:03 | händelse | tagitUrPrint | sak=kruka n=1 |
| 5:07 | väntar | mamma | Var är du? |
| 5:09 | sak | ali | Ali här. Bilbatteriet ur min gamla Volvo står i lagret. Det sparar mer ström än powerbanken. |
| 5:09 | sms | ali | Ali här. Bilbatteriet ur min gamla Volvo står i lagret. Det sparar mer ström än powerbanken. |
| 5:09 | sms-bubbla | ali | Ali här. Bilbatteriet ur min gamla Volvo står i lagret. Det sparar mer ström än powerbanken. |
| 5:09 | röst | ali | Ali här. Bilbatteriet ur min gamla Volvo står i lagret. Det sparar mer ström än powerbanken. · STORY |
| 5:11 | aliSalt | ali | 105 |
| 5:13 | paket |  | tanke |
| 5:13 | tanke | du | Jaha, Rolf har hämtat en flasköppnare med magnet. |
| 5:13 | väntar | du | Jaha, Rolf har hämtat en flasköppnare med magnet. |
| 5:17 | klar | ali | Ali här. Bilbatteriet ur min gamla Volvo står i lagret. Det sparar mer ström än powerbanken. |
| 5:21 | toast | guld | 🔋 Bilbatteriet ska kopplas in på cykeln. |
| 5:21 | händelse | kopt | sak=cykelbatteri |
| 5:21 | röst | ali | Ali här. Batteriet ur min gamla Volvo. Bilen dog 2016. Batteriet vägrade. · STORY |
| 5:21 | butiksbubbla | ali | Ali här. Batteriet ur min gamla Volvo. Bilen dog 2016. Batteriet vägrade. |
| 5:29 | struken | kedja | dag2 |
| 5:29 | väntar | info:guld | 🔋 Bilbatteriet är inkopplat – skrivaren printar klart även när du slutar trampa |
| 5:29 | monterat | du | byggsats:cykelbatteri |
| 5:29 | händelse | monterat | sak=cykelbatteri |
| 5:29 | sak | info:guld | 🔋 Bilbatteriet är inkopplat – skrivaren printar klart även när du slutar trampa |
| 5:29 | kvitto-visas | info:guld | 🔋 Bilbatteriet är inkopplat – skrivaren printar klart även när du slutar trampa |
| 5:29 | toast | guld | 🔋 Bilbatteriet är inkopplat – skrivaren printar klart även när du slutar trampa |
| 5:29 | händelse | malKlart | id=kopBatteri del=Dag 3 – En skrivare till och taket nasta=ryggkorg |
| 5:29 | struken | du | Jaha, Rolf har hämtat en flasköppnare med magnet. |
| 5:29 | väntar | du | Jag springer för mycket. Med en ryggkorg bär jag tio saker. |
| 5:29 | MÅL |  | Plocka skräp och mal det |
| 5:29 | upplåst | bara | ryggkorg |
| 5:29 | brott | UPPLÅST | ryggkorg (bara 4 av 3) |
| 5:29 | händelse | upplast | id=ryggkorg flask=bara |
| 5:29 | paket |  | tanke → sms |
| 5:29 | tanke | du | Säcken är full igen. Jag behöver något att bära mer i. |
| 5:29 | väntar | du | Säcken är full igen. Jag behöver något att bära mer i. |
| 5:29 | väntar | ali | Ali här. En ryggkorg. AI:n ritade den efter en bild på min mormor. Den rymmer tio. |
| 5:31 | klar | info:guld | 🔋 Bilbatteriet är inkopplat – skrivaren printar klart även när du slutar trampa |
| 5:32 | målruta |  | Bygg ryggkorgen – bär 10 skräp |
| 5:33 | kvittens-bock |  | ✓ Köp Alis gamla bilbatteri |
| 5:33 | sak | du | Jag springer för mycket. Med en ryggkorg bär jag tio saker. |
| 5:33 | pil |  | Bygg ryggkorgen – bär 10 skräp |
| 5:33 | notis | tanke | 💭 Jag springer för mycket. Med en ryggkorg bär jag tio saker. |
| 5:33 | röst | du | Jag springer för mycket. Med en ryggkorg bär jag tio saker. · MÅL |
| 5:33 | nick |  | nick:36 |
| 5:38 | klar | du | Jag springer för mycket. Med en ryggkorg bär jag tio saker. |
| 5:40 | sak | du | Säcken är full igen. Jag behöver något att bära mer i. |
| 5:40 | notis | tanke | 💭 Säcken är full igen. Jag behöver något att bära mer i. |
| 5:40 | röst | du | Säcken är full igen. Jag behöver något att bära mer i. · STORY |
| 5:45 | klar | du | Säcken är full igen. Jag behöver något att bära mer i. |
| 5:49 | struken | info:guld | 3D-modell köpt – printa ryggkorg |
| 5:49 | händelse | kopt | sak=ryggkorg |
| 5:49 | struken | ali | Ali här. En ryggkorg. AI:n ritade den efter en bild på min mormor. Den rymmer tio. |
| 5:53 | sak | du | Den stannar. Strömmen räcker inte till alla maskiner. |
| 5:53 | notis | tanke | 💭 Den stannar. Strömmen räcker inte till alla maskiner. |
| 5:53 | röst | du | Den stannar. Strömmen räcker inte till alla maskiner. · STORY |
| 5:57 | klar | du | Den stannar. Strömmen räcker inte till alla maskiner. |
| 5:58 | händelse | printStart | sak=byggsats:ryggkorg |
| 5:58 | paket |  | tanke |
| 5:58 | tanke | du | Kajsa. Ut ur skrivaren. Nu. |
| 5:58 | väntar | du | Kajsa. Ut ur skrivaren. Nu. |
| 5:58 | skratt | du | Kajsa i skrivaren |
| 6:04 | toast | bra | Del 1 av 2 klar |
| 6:05 | väntar | rolf | Morgonbulle på kontoret me polarna. Bengt har ny keps. Vi pratade om den i en timme. Den e grön. /R |
| 6:05 | sak | mamma | Typ? Jag ringer honom. Vad heter butiken? Jag hittar den. |
| 6:05 | sms | mamma | Typ? Jag ringer honom. Vad heter butiken? Jag hittar den. |
| 6:05 | sms-bubbla | mamma | Typ? Jag ringer honom. Vad heter butiken? Jag hittar den. |
| 6:05 | röst | mamma | Typ? Jag ringer honom. Vad heter butiken? Jag hittar den. · STORY |
| 6:10 | händelse | printKlar | sak=byggsats:ryggkorg n=1 |
| 6:10 | toast | guld | ✅ |
| 6:10 | väntar | info:guld | Ryggkorg ska jag ha på mig. |
| 6:10 | händelse | tagitUrPrint | sak=byggsats:ryggkorg n=1 |
| 6:10 | paket |  | sms |
| 6:10 | väntar | ali | Ali här. Du printade Ryggkorg från min ritning. Och det FUNKAR? Jag har bara sett sånt på YouTube. |
| 6:10 | klar | mamma | Typ? Jag ringer honom. Vad heter butiken? Jag hittar den. |
| 6:10 | sak | info:guld | Ryggkorg ska jag ha på mig. |
| 6:10 | kvitto-visas | info:guld | Ryggkorg ska jag ha på mig. |
| 6:10 | toast | guld | Ryggkorg ska jag ha på mig. |
| 6:11 | hjälp | kontroll | Klick: Klicka för att ta på dig den |
| 6:12 | klar | info:guld | Ryggkorg ska jag ha på mig. |
| 6:14 | väntar | info:guld | 🧺 Ryggkorgen sitter på! Nu bär jag 16 skräp. |
| 6:14 | tog på | du | byggsats:ryggkorg |
| 6:14 | händelse | monterat | sak=ryggkorg |
| 6:14 | sak | info:guld | 🧺 Ryggkorgen sitter på! Nu bär jag 16 skräp. |
| 6:14 | kvitto-visas | info:guld | 🧺 Ryggkorgen sitter på! Nu bär jag 16 skräp. |
| 6:14 | toast | guld | 🧺 Ryggkorgen sitter på! Nu bär jag 16 skräp. |
| 6:14 | händelse | malKlart | id=ryggkorg del=Dag 3 – En skrivare till och taket nasta=n2-bygg-arbetsbord |
| 6:14 | struken | du | Kajsa. Ut ur skrivaren. Nu. |
| 6:14 | väntar | du | Ett arbetsbord bredvid skrivaren. Skrivare M ska stå på det. |
| 6:14 | MÅL |  | Bygg ett arbetsbord |
| 6:16 | klar | info:guld | 🧺 Ryggkorgen sitter på! Nu bär jag 16 skräp. |
| 6:16 | målruta |  | Bygg ett arbetsbord |
| 6:18 | kvittens-bock |  | ✓ Bygg ryggkorgen – bär 10 skräp |
| 6:18 | sak | du | Ett arbetsbord bredvid skrivaren. Skrivare M ska stå på det. |
| 6:18 | pil |  | Bygg ett arbetsbord |
| 6:18 | notis | tanke | 💭 Ett arbetsbord bredvid skrivaren. Skrivare M ska stå på det. |
| 6:18 | röst | du | Ett arbetsbord bredvid skrivaren. Skrivare M ska stå på det. · MÅL |
| 6:19 | nick |  | nick:37 |
| 6:22 | struken | info:guld | 3D-modell köpt – printa arbetsbord |
| 6:22 | händelse | kopt | sak=bord |
| 6:23 | klar | du | Ett arbetsbord bredvid skrivaren. Skrivare M ska stå på det. |
| 6:30 | händelse | printStart | sak=byggsats:bord |
| 6:31 | sak | du | Powerbanken räcker till en nyckelring. Sen är det trampa igen. |
| 6:31 | notis | tanke | 💭 Powerbanken räcker till en nyckelring. Sen är det trampa igen. |
| 6:31 | röst | du | Powerbanken räcker till en nyckelring. Sen är det trampa igen. · STORY |
| 6:36 | klar | du | Powerbanken räcker till en nyckelring. Sen är det trampa igen. |
| 6:37 | toast | bra | Del 1 av 3 klar |
| 6:44 | toast | bra | Del 2 av 3 klar |
| 6:47 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 6:51 | väntar | värld:Mjau. | Mjau. |
| 6:53 | tanke | du | Tratten är stor som en kaffekopp. Tunnan är stor som jag. |
| 6:53 | väntar | du | Tratten är stor som en kaffekopp. Tunnan är stor som jag. |
| 7:00 | händelse | printKlar | sak=byggsats:bord n=1 |
| 7:00 | toast | guld | ✅ |
| 7:02 | paket |  | tanke |
| 7:02 | tanke | du | En toffla. Bara en. |
| 7:02 | väntar | du | En toffla. Bara en. |
| 7:02 | skratt | du | kvarnen spottar |
| 7:04 | händelse | tagitUrPrint | sak=byggsats:bord n=1 |
| 7:07 | händelse | placerat | sak=bord |
| 7:07 | händelse | malKlart | id=n2-bygg-arbetsbord del=Dag 3 – En skrivare till och taket nasta=n2-bygg-skrivare-m |
| 7:07 | väntar | du | Skrivare M på bordet. Två skrivare, dubbelt så mycket. |
| 7:07 | målruta |  | Printa och sälj |
| 7:07 | MÅL |  | Printa och sälj |
| 7:07 | upplåst | skrivare | skrivare2 |
| 7:07 | brott | UPPLÅST | skrivare2 (skrivare 411 av 60) |
| 7:07 | händelse | upplast | id=skrivare2 flask=skrivare |
| 7:07 | paket |  | tanke → sms |
| 7:07 | tanke | du | Kvarnen hinner mer än skrivaren. Jag behöver en skrivare till. |
| 7:07 | väntar | du | Kvarnen hinner mer än skrivaren. Jag behöver en skrivare till. |
| 7:07 | väntar | ali | Ali här. Skrivare M har kommit. Två och en halv gånger snabbare. Snabbare än jag. Jag har inte varit snabb sedan 1998. |
| 7:07 | sak | du | Skrivare M på bordet. Två skrivare, dubbelt så mycket. |
| 7:07 | pil |  | Bygg Skrivare M på bordet |
| 7:07 | notis | tanke | 💭 Skrivare M på bordet. Två skrivare, dubbelt så mycket. |
| 7:07 | röst | du | Skrivare M på bordet. Två skrivare, dubbelt så mycket. · MÅL |
| 7:08 | nick |  | nick:38 |
| 7:11 | kvittens-bock |  | ✓ Bygg ett arbetsbord |
| 7:12 | klar | du | Skrivare M på bordet. Två skrivare, dubbelt så mycket. |
| 7:14 | struken | värld:Mjau. | Mjau. |
| 7:14 | struken | du | Tratten är stor som en kaffekopp. Tunnan är stor som jag. |
| 7:20 | sak | ali | Ali här. Skrivare M har kommit. Två och en halv gånger snabbare. Snabbare än jag. Jag har inte varit snabb sedan 1998. |
| 7:20 | sms | ali | Ali här. Skrivare M har kommit. Två och en halv gånger snabbare. Snabbare än jag. Jag har inte varit snabb sedan 1998. |
| 7:20 | sms-bubbla | ali | Ali här. Skrivare M har kommit. Två och en halv gånger snabbare. Snabbare än jag. Jag har inte varit snabb sedan 1998. |
| 7:20 | röst | ali | Ali här. Skrivare M har kommit. Två och en halv gånger snabbare. Snabbare än jag. Jag har inte varit snabb sedan 1998. · STORY |
| 7:20 | skratt | du | Alis dyr-pling |
| 7:20 | struken | info:guld | 3D-modell köpt – printa skrivare M |
| 7:20 | händelse | kopt | sak=skrivare2 |
| 7:29 | händelse | printStart | sak=byggsats:skrivare2 |
| 7:29 | paket |  | tanke |
| 7:29 | tanke | du | Kajsa. Ut ur skrivaren. Nu. |
| 7:29 | struken | du | En toffla. Bara en. |
| 7:29 | väntar | du | Kajsa. Ut ur skrivaren. Nu. |
| 7:29 | skratt | du | Kajsa i skrivaren |
| 7:30 | klar | ali | Ali här. Skrivare M har kommit. Två och en halv gånger snabbare. Snabbare än jag. Jag har inte varit snabb sedan 1998. |
| 7:30 | skratt | du | falsk tuta |
| 7:30 | väntar | värld:TUUT! Tjena! | TUUT! Tjena! |
| 7:38 | toast | bra | Del 1 av 5 klar |
| 7:47 | toast | bra | Del 2 av 5 klar |
| 7:50 | struken | värld:TUUT! Tjena! | TUUT! Tjena! |
| 7:50 | struken | du | Kajsa. Ut ur skrivaren. Nu. |
| 7:51 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 7:54 | väntar | värld:Mjau. | Mjau. |
| 8:05 | sak | ali | Ali här. Du printade Ryggkorg från min ritning. Och det FUNKAR? Jag har bara sett sånt på YouTube. |
| 8:05 | sms | ali | Ali här. Du printade Ryggkorg från min ritning. Och det FUNKAR? Jag har bara sett sånt på YouTube. |
| 8:05 | sms-bubbla | ali | Ali här. Du printade Ryggkorg från min ritning. Och det FUNKAR? Jag har bara sett sånt på YouTube. |
| 8:05 | röst | ali | Ali här. Du printade Ryggkorg från min ritning. Och det FUNKAR? Jag har bara sett sånt på YouTube. · REAKTION |
| 8:05 | toast | bra | Del 3 av 5 klar |
| 8:13 | klar | ali | Ali här. Du printade Ryggkorg från min ritning. Och det FUNKAR? Jag har bara sett sånt på YouTube. |
| 8:14 | toast | bra | Del 4 av 5 klar |
| 8:15 | struken | värld:Mjau. | Mjau. |
| 8:23 | händelse | printKlar | sak=byggsats:skrivare2 n=1 |
| 8:23 | toast | guld | ✅ |
| 8:25 | händelse | tagitUrPrint | sak=byggsats:skrivare2 n=1 |
| 8:26 | tanke | du | Slangen räcker inte ända hit. |
| 8:26 | väntar | du | Slangen räcker inte ända hit. |
| 8:26 | sak | du | Slangen räcker inte ända hit. |
| 8:26 | notis | tanke | 💭 Slangen räcker inte ända hit. |
| 8:26 | röst | du | Slangen räcker inte ända hit. · REAKTION |
| 8:28 | händelse | placerat | sak=skrivare2 |
| 8:28 | struken | kedja | skrivareM |
| 8:28 | paket |  | tanke |
| 8:28 | tanke | du | Den här måste stå i linjen vid kvarnen, annars når inte slangen. |
| 8:28 | väntar | du | Den här måste stå i linjen vid kvarnen, annars når inte slangen. |
| 8:28 | händelse | malKlart | id=n2-bygg-skrivare-m del=Dag 3 – En skrivare till och taket nasta=n2-lagg-plattak-skjulet |
| 8:28 | lapp-kö | 📱 Storebror | VA?! Du har byggt en skrivare TILL?? Du har typ en printfarm nu. Okej. Det är faktiskt ganska ballt. 🔥 |
| 8:28 | väntar | bror | VA?! Du har byggt en skrivare TILL?? Du har typ en printfarm nu. Okej. Det är faktiskt ganska ballt. 🔥 |
| 8:28 | väntar | du | Det regnar in. Plåt på taket, så slipper jag sova i en pöl. |
| 8:28 | MÅL |  | Lägg plåttak på skjulet |
| 8:28 | klar | du | Slangen räcker inte ända hit. |
| 8:30 | målruta |  | Lägg plåttak på skjulet |
| 8:32 | sak | du | Det regnar in. Plåt på taket, så slipper jag sova i en pöl. |
| 8:32 | pil |  | Lägg plåttak på skjulet |
| 8:32 | notis | tanke | 💭 Det regnar in. Plåt på taket, så slipper jag sova i en pöl. |
| 8:32 | röst | du | Det regnar in. Plåt på taket, så slipper jag sova i en pöl. · MÅL |
| 8:32 | kvittens-bock |  | ✓ Bygg Skrivare M på bordet |
| 8:32 | nick |  | nick:39 |
| 8:37 | struken | info:guld | 3D-modell köpt – printa plåttak |
| 8:37 | händelse | kopt | sak=tak |
| 8:37 | klar | du | Det regnar in. Plåt på taket, så slipper jag sova i en pöl. |
| 8:39 | väntar | mamma | Var är du? |
| 8:45 | sak | du | Kvarnen hinner mer än skrivaren. Jag behöver en skrivare till. |
| 8:45 | notis | tanke | 💭 Kvarnen hinner mer än skrivaren. Jag behöver en skrivare till. |
| 8:45 | röst | du | Kvarnen hinner mer än skrivaren. Jag behöver en skrivare till. · STORY |
| 8:46 | händelse | printStart | sak=byggsats:tak |
| 8:46 | toast | bra | 🔗 Slangen kopplad |
| 8:50 | toast | bra | Del 1 av 3 klar |
| 8:50 | klar | du | Kvarnen hinner mer än skrivaren. Jag behöver en skrivare till. |
| 8:54 | toast | bra | Del 2 av 3 klar |
| 8:55 | toast | fel | Ingen ström – trampa cykeln |
| 9:05 | händelse | printKlar | sak=byggsats:tak n=1 |
| 9:05 | toast | guld | ✅ |
| 9:05 | händelse | tagitUrPrint | sak=byggsats:tak n=1 |
| 9:10 | väntar | info:guld | Plåttak på plats! Trivsel +12 |
| 9:10 | sak | info:guld | Plåttak på plats! Trivsel +12 |
| 9:10 | kvitto-visas | info:guld | Plåttak på plats! Trivsel +12 |
| 9:10 | toast | guld | Plåttak på plats! Trivsel +12 |
| 9:10 | händelse | malKlart | id=n2-lagg-plattak-skjulet del=Dag 3 – En skrivare till och taket nasta=sov3 |
| 9:10 | paket |  | lapp |
| 9:10 | väntar | du | Nu vet Rolf att jag bor HÄR. Benen orkar inte trampa mer. |
| 9:10 | MÅL |  | Klart för idag – sov när du vill |
| 9:12 | klar | info:guld | Plåttak på plats! Trivsel +12 |
| 9:12 | målruta |  | Klart för idag – sov när du vill |
| 9:14 | kvittens-bock |  | ✓ Lägg plåttak på skjulet |
| 9:14 | sak | du | (nytt mål i rutan) |
| 9:14 | pil |  | Klart för idag – sov när du vill |
| 9:14 | klar | du | (nytt mål i rutan) |
| 9:16 | sak | du | Nu vet Rolf att jag bor HÄR. Benen orkar inte trampa mer. |
| 9:16 | kvallsrad | du | Nu vet Rolf att jag bor HÄR. Benen orkar inte trampa mer. |
| 9:16 | klar | du | Nu vet Rolf att jag bor HÄR. Benen orkar inte trampa mer. |
| 9:17 | väntar | notis:🌇 Klockan är 21. Ali slår igen luckan.  | 🌇 Klockan är 21. Ali slår igen luckan. Dagens jobb är klart – gå in i skjulet och sov i sängen. |
| 9:21 | nattkort | du | 🌙 Dag 3 är slut. God natt. zzz… Nu vet Rolf att jag bor HÄR. Benen orkar inte trampa mer. DAGENS PRINTAR Blomkruka × 7 Flasköppnare med magnet × 1 Totalt 8 pri |

<details><summary>Botens handlingar dag 3</summary>

- 0:00 — dag 3 börjar — (827 kr)
- 0:08 popup: "FORTSÄTT" (827 kr)
- 0:22 gå till Rolfs postlåda (28 m) (827 kr)
- 0:27 panel: "Rolfs postlåda
Det här låg i l" (887 kr)
- 0:28 gå till sätt nyckeln i låset (3 m) (887 kr)
- 0:33 tjänar pengar till väntar på sopbilen (BO): 887/947 kr → printar blomkruka (105 kr) (887 kr)
- 0:35 gå till skrivaren (7 m) (887 kr)
- 0:36 printar Blomkruka (887 kr)
- 0:43 tar ut 1 st ur skrivaren (887 kr)
- 0:48 gå till Ali (28 m) (887 kr)
- 0:48 öppnar Alis butik – sälja (887 kr)
- 0:50 säljer hos Ali: +105 kr (992 kr)
- 0:58 tjänar pengar till väntar på sopbilen (BO): 992/1052 kr → printar blomkruka (105 kr) (992 kr)
- 1:03 gå till skrivaren (25 m) (992 kr)
- 1:05 printar Blomkruka (992 kr)
- 1:34 plockar 9 skräp på gården (bär max 10) (992 kr)
- 1:40 gå till kvarnen (30 m) (992 kr)
- 1:41 gå till skrivaren (2 m) (992 kr)
- 1:42 tar ut 1 st ur skrivaren (992 kr)
- 1:48 gå till Ali (28 m) (992 kr)
- 1:48 öppnar Alis butik – sälja (992 kr)
- 1:50 säljer hos Ali: +105 kr (1097 kr)
- 1:53 tjänar pengar till väntar på sopbilen (BO): 1097/1157 kr → printar blomkruka (105 kr) (1097 kr)
- 1:58 gå till skrivaren (25 m) (1097 kr)
- 2:00 printar Blomkruka (1097 kr)
- 2:06 tar ut 1 st ur skrivaren (1097 kr)
- 2:11 gå till Ali (25 m) (1097 kr)
- 2:11 öppnar Alis butik – sälja (1097 kr)
- 2:13 säljer hos Ali: +105 kr (1202 kr)
- 2:24 tjänar pengar till väntar på sopbilen (BO): 1202/1262 kr → printar blomkruka (105 kr) (1202 kr)
- 2:29 gå till skrivaren (25 m) (1202 kr)
- 2:30 printar Blomkruka (1202 kr)
- 2:36 tar ut 1 st ur skrivaren (1202 kr)
- 2:42 gå till Ali (25 m) (1202 kr)
- 2:42 öppnar Alis butik – sälja (1202 kr)
- 2:44 säljer hos Ali: +105 kr (1307 kr)
- 2:47 tjänar pengar till väntar på sopbilen (BO): 1307/1367 kr → printar blomkruka (105 kr) (1307 kr)
- 2:52 gå till skrivaren (25 m) (1307 kr)
- 2:54 printar Blomkruka (1307 kr)
- 3:00 tar ut 1 st ur skrivaren (1307 kr)
- 3:05 gå till Ali (25 m) (1307 kr)
- 3:05 öppnar Alis butik – sälja (1307 kr)
- 3:07 säljer hos Ali: +105 kr (1412 kr)
- 3:16 gå till Rolfs postlåda (31 m) (1412 kr)
- 3:26 plockar 10 skräp på tippen (bär max 10) (1412 kr)
- 3:28 gå till kvarnen (9 m) (1412 kr)
- 3:31 gå till skrivaren (3 m) (1412 kr)
- 3:33 printar Flasköppnare med magnet (1412 kr)
- 3:38 tar ut 1 st ur skrivaren (1412 kr)
- 3:44 valj flaskoppnare: true, vald flaskoppnare, post {"l":null,"tr":null,"tm":[]}, nummer false (1412 kr)
- 3:45 gå till Rolfs postlåda (6 m) (1412 kr)
- 3:51 tjänar pengar till väntar på flaskhalsen för cykelbatteri: 1412/1452 kr → printar blomkruka (105 kr) (1412 kr)
- 3:52 gå till skrivaren (6 m) (1412 kr)
- 3:54 printar Blomkruka (1412 kr)
- 4:00 tar ut 1 st ur skrivaren (1412 kr)
- 4:11 popup: "Han är snäll. Typ." (1412 kr)
- 4:20 popup: "Läst" (1412 kr)
- 4:23 gå till Ali (28 m) (1412 kr)
- 4:23 öppnar Alis butik – sälja (1412 kr)
- 4:25 säljer hos Ali: +105 kr (1517 kr)
- 4:26 tjänar pengar till väntar på flaskhalsen för cykelbatteri: 1517/1557 kr → printar blomkruka (105 kr) (1517 kr)
- 4:31 gå till skrivaren (25 m) (1517 kr)
- 4:33 printar Blomkruka (1517 kr)
- 4:33 gå till cykeln (1 m) (1517 kr)
- 5:04 tar ut 1 st ur skrivaren (1517 kr)
- 5:09 gå till Ali (25 m) (1517 kr)
- 5:09 öppnar Alis butik – sälja (1517 kr)
- 5:11 säljer hos Ali: +105 kr (1622 kr)
- 5:19 öppnar Alis butik – bilbatteriet (1622 kr)
- 5:22 köper cykelbatteri för 30 kr (1592 kr)
- 5:29 gå till koppla in bilbatteriet vid cykeln (24 m) (1592 kr)
- 5:48 gå till Ali (24 m) (1592 kr)
- 5:48 öppnar Alis butik – köpa ryggkorg (1592 kr)
- 5:50 köper ryggkorg för 120 kr (1472 kr)
- 5:56 gå till skrivaren (25 m) (1472 kr)
- 5:58 printar Ryggkorg (2 delar) (1472 kr)
- 6:11 tar ut 1 st ur skrivaren (1472 kr)
- 6:14 tar på ryggkorg (1472 kr)
- 6:20 gå till Ali (25 m) (1472 kr)
- 6:20 öppnar Alis butik – köpa arbetsbord (1472 kr)
- 6:23 köper bord för 120 kr (1352 kr)
- 6:29 gå till skrivaren (25 m) (1352 kr)
- 6:30 printar Arbetsbord (3 delar) (1352 kr)
- 6:52 plockar 2 skräp på tippen (bär max 16) (1352 kr)
- 6:54 gå till kvarnen (9 m) (1352 kr)
- 7:04 gå till skrivaren (3 m) (1352 kr)
- 7:05 tar ut 1 st ur skrivaren (1352 kr)
- 7:06 gå till platsen för arbetsbord (5 m) (1352 kr)
- 7:07 ställer ut arbetsbord (1352 kr)
- 7:19 gå till Ali (24 m) (1352 kr)
- 7:19 öppnar Alis butik – köpa skrivare m (1352 kr)
- 7:21 köper skrivare2 för 500 kr (852 kr)
- 7:27 gå till skrivaren (25 m) (852 kr)
- 7:29 printar Skrivare M (5 delar) (852 kr)
- 7:56 plockar 1 skräp på tippen (bär max 16) (852 kr)
- 7:58 gå till kvarnen (9 m) (852 kr)
- 8:25 gå till skrivaren (3 m) (852 kr)
- 8:26 tar ut 1 st ur skrivaren (852 kr)
- 8:27 gå till platsen för skrivare m (5 m) (852 kr)
- 8:28 ställer ut skrivare m (852 kr)
- 8:35 gå till Ali (24 m) (852 kr)
- 8:35 öppnar Alis butik – köpa plåttak (852 kr)
- 8:38 köper tak för 250 kr (602 kr)
- 8:44 gå till skrivaren (24 m) (602 kr)
- 8:46 printar Plåttak (3 delar) (602 kr)
- 9:06 tar ut 1 st ur skrivaren (602 kr)
- 9:10 gå till skjulet (17 m) (602 kr)
- 9:19 gå till sängen (1 m) (602 kr)

</details>

## Dag 4

| Tid | Källa | Vem | Text |
|---|---|---|---|
| 9:21 | vara | ali | ingen |
| 9:21 | händelse | malKlart | id=sov3 del=Dag 3 – En skrivare till och taket nasta=rolf2-brev |
| 9:21 | vara | ali | kruka |
| 9:21 | MÅL |  | Vänta på sopbilen. Den lämnar något. |
| 0:01 | händelse | dagenBorjar | dag=4 |
| 0:01 | meddelande | du | Dag 4. 18 dagar till jul. Drar det i skjulet blir natten lång. |
| 0:01 | dagbokkort | du | Kärran och mer vind · Dag 4. 18 dagar till jul. Drar det i skjulet blir natten lång. |
| 0:01 | röst | du | Dag 4. 18 dagar till jul. Kärran och mer vind. Drar det i skjulet blir natten lång. · STORY |
| 0:09 | väntar | notis:morgon | Ali vill ha idag: Blomkruka · +50 % |
| 0:09 | händelse | morgonkortStangt | dag=4 |
| 0:11 | målruta |  | Vänta på sopbilen. Den lämnar något. |
| 0:14 | sak | du | (nytt mål i rutan) |
| 0:14 | pil |  | Vänta på sopbilen. Den lämnar något. |
| 0:14 | klar | du | (nytt mål i rutan) |
| 0:16 | struken | notis:🌇 Klockan är 21. Ali slår igen luckan.  | 🌇 Klockan är 21. Ali slår igen luckan. Dagens jobb är klart – gå in i skjulet och sov i sängen. |
| 0:16 | struken | mamma | Var är du? |
| 0:17 | sak | notis:morgon | Ali vill ha idag: Blomkruka · +50 % |
| 0:17 | notis |  | Blomkruka · +50 % |
| 0:20 | klar | notis:morgon | Ali vill ha idag: Blomkruka · +50 % |
| 0:22 | väntar | info:bra | 🛒 4 skräp från famnen i skottkärran – kärran tar mer än famnen |
| 0:30 | väntar | rolf | PERFEKT öppnare! Kärran vid lådan ä din. Den gnisslar. Precis som ja. Skriv ditt nummer på en lapp, så slipper ja skriva brev. /Rolf |
| 0:30 | sak | info:bra | 🛒 4 skräp från famnen i skottkärran – kärran tar mer än famnen |
| 0:30 | kvitto-visas | info:bra | 🛒 4 skräp från famnen i skottkärran – kärran tar mer än famnen |
| 0:30 | toast | bra | 🛒 4 skräp från famnen i skottkärran – kärran tar mer än famnen |
| 0:32 | klar | info:bra | 🛒 4 skräp från famnen i skottkärran – kärran tar mer än famnen |
| 0:40 | väntar | bud | (tips) |
| 0:40 | sak | bud | (tips) |
| 0:40 | väntar | du | En skottkärra! Jag väljer den med hjulet och kör den full med skräp. |
| 0:41 | klar | bud | (tips) |
| 0:42 | väntar | foto | Tak över huvudet |
| 0:42 | paket |  | tanke |
| 0:42 | tanke | du | I natt somnar jag torr. Det börjar bli ett hem. |
| 0:42 | väntar | du | I natt somnar jag torr. Det börjar bli ett hem. |
| 0:43 | sak | du | En skottkärra! Jag väljer den med hjulet och kör den full med skräp. |
| 0:43 | röst | du | En skottkärra! Jag väljer den med hjulet och kör den full med skräp. · MÅL |
| 0:44 | tanke | du | Fastpressad. Den sitter som i betong. |
| 0:44 | väntar | du | Fastpressad. Den sitter som i betong. |
| 0:44 | tanke | du | Hård plast. Lilla kvarnen skulle explodera. Eller jag. |
| 0:44 | struken | du | Fastpressad. Den sitter som i betong. |
| 0:44 | väntar | du | Hård plast. Lilla kvarnen skulle explodera. Eller jag. |
| 0:46 | ljud | kajsa | Mjau |
| 0:49 | klar | du | En skottkärra! Jag väljer den med hjulet och kör den full med skräp. |
| 0:57 | sak | bror | VA?! Du har byggt en skrivare TILL?? Du har typ en printfarm nu. Okej. Det är faktiskt ganska ballt. 🔥 |
| 0:57 | sms | bror | VA?! Du har byggt en skrivare TILL?? Du har typ en printfarm nu. Okej. Det är faktiskt ganska ballt. 🔥 |
| 0:57 | sms-bubbla | bror | VA?! Du har byggt en skrivare TILL?? Du har typ en printfarm nu. Okej. Det är faktiskt ganska ballt. 🔥 |
| 0:57 | röst | bror | VA?! Du har byggt en skrivare TILL?? Du har typ en printfarm nu. Okej. Det är faktiskt ganska ballt. 🔥 · STORY |
| 1:05 | klar | bror | VA?! Du har byggt en skrivare TILL?? Du har typ en printfarm nu. Okej. Det är faktiskt ganska ballt. 🔥 |
| 1:07 | struken | du | Hård plast. Lilla kvarnen skulle explodera. Eller jag. |
| 1:13 | sak | du | Den här måste stå i linjen vid kvarnen, annars når inte slangen. |
| 1:13 | notis | tanke | 💭 Den här måste stå i linjen vid kvarnen, annars når inte slangen. |
| 1:13 | röst | du | Den här måste stå i linjen vid kvarnen, annars når inte slangen. · STORY |
| 1:16 | ljud | kajsa | Mjau |
| 1:19 | klar | du | Den här måste stå i linjen vid kvarnen, annars når inte slangen. |
| 1:27 | sak | foto | Tak över huvudet |
| 1:27 | foto | du | Tak över huvudet |
| 1:29 | klar | foto | Tak över huvudet |
| 1:38 | sak | du | I natt somnar jag torr. Det börjar bli ett hem. |
| 1:38 | notis | tanke | 💭 I natt somnar jag torr. Det börjar bli ett hem. |
| 1:38 | röst | du | I natt somnar jag torr. Det börjar bli ett hem. · STORY |
| 1:42 | klar | du | I natt somnar jag torr. Det börjar bli ett hem. |
| 1:43 | skratt | du | falsk tuta |
| 2:04 | röst | ali | Du printar mina ritningar. Ingen har gjort det förut. Jag är inte rörd. Det är dammet. · STORY |
| 2:04 | butiksbubbla | ali | Du printar mina ritningar. Ingen har gjort det förut. Jag är inte rörd. Det är dammet. |
| 2:13 | händelse | printStart | sak=nyckelring |
| 2:14 | väntar | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått TAK. Och arbetsbord. Skriv in, Gunnar. Du skriver aldrig in. |
| 2:14 | radio | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått TAK. Och arbetsbord. Skriv in, Gunnar. Du skriver aldrig in. |
| 2:14 | skratt | du | Radio-Kjelle |
| 2:14 | toast | guld | ✅ |
| 2:14 | händelse | printKlar | sak=nyckelring n=12 |
| 2:15 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 2:18 | hjälp | kontroll | E: Ryggsäcken och kistan |
| 2:18 | sak | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått TAK. Och arbetsbord. Skriv in, Gunnar. Du skriver aldrig in. |
| 2:18 | notis |  | 📻 Radio Tippen: Radio Tippen, Kjelle här. Skjulet vid tippen har fått TAK. Och arbetsbord. Skriv in, Gunnar. Du skriver aldrig in. |
| 2:18 | röst | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått TAK. Och arbetsbord. Skriv in, Gunnar. Du skriver aldrig in. · REAKTION |
| 2:23 | aliSalt | ali | 15 |
| 2:27 | klar | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått TAK. Och arbetsbord. Skriv in, Gunnar. Du skriver aldrig in. |
| 2:42 | paket |  | tanke |
| 2:42 | tanke | du | En badanka. Den överlevde kvarnen. |
| 2:42 | väntar | du | En badanka. Den överlevde kvarnen. |
| 2:42 | skratt | du | kvarnen spottar |
| 2:47 | händelse | printStart | sak=nyckelring |
| 2:48 | toast | guld | ✅ |
| 2:48 | händelse | printKlar | sak=nyckelring n=13 |
| 2:48 | händelse | printStart | sak=nyckelring |
| 2:50 | toast | guld | ✅ |
| 2:50 | händelse | printKlar | sak=nyckelring n=14 |
| 2:50 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 2:51 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 2:56 | väntar | ali | Hej granne! |
| 2:59 | skratt | du | falsk tuta |
| 2:59 | paket |  | ge |
| 2:59 | väntar |  | (läget ändras) |
| 2:59 | aliSalt | ali | 15 |
| 2:59 | aliSalt | ali | 15 |
| 3:00 | sak |  | (läget ändras) |
| 3:00 | brev | rolf | rolf:2 |
| 3:00 | klar |  | (läget ändras) |
| 3:05 | struken | du | En badanka. Den överlevde kvarnen. |
| 3:06 | väntar | bud | (tips) |
| 3:06 | sak | bud | (tips) |
| 3:07 | händelse | printStart | sak=nyckelring |
| 3:07 | klar | bud | (tips) |
| 3:08 | toast | guld | ✅ |
| 3:08 | händelse | printKlar | sak=nyckelring n=15 |
| 3:08 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 3:09 | meddelande | mamma | Jag läste om en man som bodde på en soptipp. Han blev attackerad av måsar. Finns det måsar där? |
| 3:10 | röst | mamma | Jag läste om en man som bodde på en soptipp. Han blev attackerad av måsar. Finns det måsar där? · STORY |
| 3:21 | paket |  | sms |
| 3:21 | väntar | mamma | En katt? Är den vaccinerad? Rör den inte. Eller jo. Ge den en macka. |
| 3:32 | händelse | brevLast | id=m_masar |
| 3:34 | struken | ali | Hej granne! |
| 3:38 | aliSalt | ali | 15 |
| 3:47 | väntar | rolf | Tjo. Ska grilla på lördag. Min grillspade smälte. Kan du göra en sån hä? /Rolf 🍖​ |
| 3:47 | paket |  | ge |
| 3:47 | väntar |  | (läget ändras) |
| 3:47 | sak | rolf | Tjo. Ska grilla på lördag. Min grillspade smälte. Kan du göra en sån hä? /Rolf 🍖​ |
| 3:47 | lapp | Brev från Rolf | Tjo. Ska grilla på lördag. Min grillspade smälte. Kan du göra en sån hä? /Rolf 🍖​ |
| 3:47 | röst | rolf | Tjo. Ska grilla på lördag. Min grillspade smälte. Kan du göra en sån hä? /Rolf 🍖​ · STORY |
| 3:47 | händelse | malKlart | id=rolf2-brev del=Dag 4 – Kärran och mer vind nasta=rolf2-printa |
| 3:47 | väntar | du | Printa grillspade. |
| 3:47 | MÅL |  | Printa grillspade |
| 3:49 | målruta |  | Printa grillspade |
| 3:51 | händelse | printStart | sak=grillspade |
| 3:51 | händelse | malKlart | id=rolf2-printa del=Dag 4 – Kärran och mer vind nasta=rolf2-ge |
| 3:51 | väntar | du | Ge Rolf grillspade. |
| 3:51 | MÅL |  | Ge Rolf grillspade |
| 3:54 | klar | rolf | Tjo. Ska grilla på lördag. Min grillspade smälte. Kan du göra en sån hä? /Rolf 🍖​ |
| 3:54 | händelse | brevLast | id=rolf:2 |
| 3:54 | målruta |  | Ge Rolf grillspade |
| 3:55 | toast | guld | ✅ |
| 3:55 | händelse | printKlar | sak=grillspade n=1 |
| 3:55 | kvittens-bock |  | ✓ Printa grillspade |
| 3:55 | händelse | tagitUrPrint | sak=grillspade n=1 |
| 3:56 | struken | du | Printa grillspade. |
| 3:56 | sak | du | Ge Rolf grillspade. |
| 3:56 | pil |  | Ge Rolf grillspade |
| 3:56 | röst | du | Ge Rolf grillspade. · MÅL |
| 3:58 | klar | du | Ge Rolf grillspade. |
| 4:00 | sak |  | (läget ändras) |
| 4:00 | klar |  | (läget ändras) |
| 4:02 | händelse | lagtIPostlada | sak=grillspade rolf=2 jobb=false |
| 4:02 | struken | kedja | rolf2 |
| 4:02 | händelse | malKlart | id=rolf2-ge del=Dag 4 – Kärran och mer vind nasta=n3-tom-full-karra |
| 4:02 | väntar | du | Kärran rymmer massor. Jag fyller den och tippar allt i kvarnen. |
| 4:02 | målruta |  | Töm en full kärra i kvarnen |
| 4:02 | MÅL |  | Töm en full kärra i kvarnen |
| 4:02 | sak | du | Kärran rymmer massor. Jag fyller den och tippar allt i kvarnen. |
| 4:02 | pil |  | Töm en full kärra i kvarnen |
| 4:02 | notis | tanke | 💭 Kärran rymmer massor. Jag fyller den och tippar allt i kvarnen. |
| 4:02 | röst | du | Kärran rymmer massor. Jag fyller den och tippar allt i kvarnen. · MÅL |
| 4:06 | kvittens-bock |  | ✓ Ge Rolf grillspade |
| 4:07 | klar | du | Kärran rymmer massor. Jag fyller den och tippar allt i kvarnen. |
| 4:10 | karraKlick | du | träff |
| 4:12 | karraKlick | du | träff |
| 4:13 | karraKlick | du | träff |
| 4:14 | karraKlick | du | träff |
| 4:15 | karraKlick | du | träff |
| 4:15 | sak | mamma | En katt? Är den vaccinerad? Rör den inte. Eller jo. Ge den en macka. |
| 4:15 | sms | mamma | En katt? Är den vaccinerad? Rör den inte. Eller jo. Ge den en macka. |
| 4:15 | sms-bubbla | mamma | En katt? Är den vaccinerad? Rör den inte. Eller jo. Ge den en macka. |
| 4:15 | röst | mamma | En katt? Är den vaccinerad? Rör den inte. Eller jo. Ge den en macka. · STORY |
| 4:16 | karraKlick | du | träff |
| 4:17 | karraKlick | du | träff |
| 4:18 | karraKlick | du | träff |
| 4:21 | klar | mamma | En katt? Är den vaccinerad? Rör den inte. Eller jo. Ge den en macka. |
| 4:21 | tanke | du | Det får inte plats. Jag behöver något att tippa i. |
| 4:21 | väntar | du | Det får inte plats. Jag behöver något att tippa i. |
| 4:21 | väntar | info:bra | 12 st i tratten · 9 st på marken bredvid |
| 4:21 | sak | info:bra | 12 st i tratten · 9 st på marken bredvid |
| 4:21 | kvitto-visas | info:bra | 12 st i tratten · 9 st på marken bredvid |
| 4:21 | toast | bra | 12 st i tratten · 9 st på marken bredvid |
| 4:21 | händelse | malKlart | id=n3-tom-full-karra del=Dag 4 – Kärran och mer vind nasta=sophallare |
| 4:21 | väntar | du | En sophållare bakom kvarnen. Då matar den sig själv. |
| 4:21 | MÅL |  | Plocka skräp och mal det |
| 4:23 | klar | info:bra | 12 st i tratten · 9 st på marken bredvid |
| 4:23 | målruta |  | Plocka skräp och mal det |
| 4:25 | kvittens-bock |  | ✓ Töm en full kärra i kvarnen |
| 4:25 | sak | du | En sophållare bakom kvarnen. Då matar den sig själv. |
| 4:25 | pil |  | Plocka skräp och mal det |
| 4:25 | notis | tanke | 💭 En sophållare bakom kvarnen. Då matar den sig själv. |
| 4:25 | röst | du | En sophållare bakom kvarnen. Då matar den sig själv. · MÅL |
| 4:29 | klar | du | En sophållare bakom kvarnen. Då matar den sig själv. |
| 4:31 | sak | du | Det får inte plats. Jag behöver något att tippa i. |
| 4:31 | notis | tanke | 💭 Det får inte plats. Jag behöver något att tippa i. |
| 4:31 | röst | du | Det får inte plats. Jag behöver något att tippa i. · STORY |
| 4:35 | klar | du | Det får inte plats. Jag behöver något att tippa i. |
| 4:37 | händelse | printStart | sak=nyckelring |
| 4:38 | toast | guld | ✅ |
| 4:38 | händelse | printKlar | sak=nyckelring n=16 |
| 4:39 | händelse | printStart | sak=nyckelring |
| 4:41 | toast | guld | ✅ |
| 4:41 | händelse | printKlar | sak=nyckelring n=17 |
| 4:41 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 4:42 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 4:43 | upplåst | skrivare | trim_skrivare2 |
| 4:43 | brott | UPPLÅST | trim_skrivare2 (skrivare 110 av 60) |
| 4:43 | händelse | upplast | id=trim_skrivare2 flask=skrivare |
| 4:43 | paket |  | tanke → sms |
| 4:43 | tanke | du | Skrivare M hinner inte heller. Den kunde gå fortare. |
| 4:43 | väntar | du | Skrivare M hinner inte heller. Den kunde gå fortare. |
| 4:43 | väntar | ali | Ali här. Skrivartrim igen. Nästa nivå. Den här gången skruvade jag åt rätt håll. |
| 4:50 | aliSalt | ali | 15 |
| 4:50 | aliSalt | ali | 15 |
| 4:58 | händelse | printStart | sak=nyckelring |
| 4:59 | toast | guld | ✅ |
| 4:59 | händelse | printKlar | sak=nyckelring n=18 |
| 4:59 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 5:04 | väntar | mamma | Jag sa till pappa att du bor på en soptipp. Han sa "aha, vad lugnt då" och satte på Formel 1. Lugnt? |
| 5:05 | sak | ali | Ali här. Skrivartrim igen. Nästa nivå. Den här gången skruvade jag åt rätt håll. |
| 5:05 | sms | ali | Ali här. Skrivartrim igen. Nästa nivå. Den här gången skruvade jag åt rätt håll. |
| 5:05 | sms-bubbla | ali | Ali här. Skrivartrim igen. Nästa nivå. Den här gången skruvade jag åt rätt håll. |
| 5:05 | röst | ali | Ali här. Skrivartrim igen. Nästa nivå. Den här gången skruvade jag åt rätt håll. · STORY |
| 5:06 | aliSalt | ali | 15 |
| 5:08 | skratt | du | falsk tuta |
| 5:12 | klar | ali | Ali här. Skrivartrim igen. Nästa nivå. Den här gången skruvade jag åt rätt håll. |
| 5:21 | händelse | printStart | sak=nyckelring |
| 5:22 | toast | guld | ✅ |
| 5:22 | händelse | printKlar | sak=nyckelring n=19 |
| 5:23 | händelse | printStart | sak=nyckelring |
| 5:25 | paket |  | tanke |
| 5:25 | tanke | du | Jaha, Rolf har hämtat en grillspade. |
| 5:25 | väntar | du | Jaha, Rolf har hämtat en grillspade. |
| 5:25 | toast | guld | ✅ |
| 5:25 | händelse | printKlar | sak=nyckelring n=20 |
| 5:25 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 5:26 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 5:33 | aliSalt | ali | 15 |
| 5:33 | aliSalt | ali | 15 |
| 5:41 | händelse | printStart | sak=nyckelring |
| 5:42 | toast | guld | ✅ |
| 5:42 | händelse | printKlar | sak=nyckelring n=21 |
| 5:43 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 5:44 | sak | du | Skrivare M hinner inte heller. Den kunde gå fortare. |
| 5:44 | notis | tanke | 💭 Skrivare M hinner inte heller. Den kunde gå fortare. |
| 5:44 | röst | du | Skrivare M hinner inte heller. Den kunde gå fortare. · STORY |
| 5:48 | klar | du | Skrivare M hinner inte heller. Den kunde gå fortare. |
| 5:50 | aliSalt | ali | 15 |
| 5:51 | struken | du | Jaha, Rolf har hämtat en grillspade. |
| 5:59 | händelse | printStart | sak=nyckelring |
| 6:00 | toast | guld | ✅ |
| 6:00 | händelse | printKlar | sak=nyckelring n=22 |
| 6:01 | händelse | printStart | sak=nyckelring |
| 6:03 | paket |  | tanke |
| 6:03 | tanke | du | Den blev… spagetti. Ali kallar det modern konst. |
| 6:03 | väntar | du | Den blev… spagetti. Ali kallar det modern konst. |
| 6:03 | skratt | du | plastspagetti |
| 6:03 | toast | guld | ✅ |
| 6:03 | händelse | printKlar | sak=nyckelring n=23 |
| 6:03 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 6:04 | händelse | tagitUrPrint | sak=spagetti n=1 |
| 6:11 | aliSalt | ali | 15 |
| 6:12 | skratt | du | Ali köper konst |
| 6:12 | aliSalt | ali | 3 |
| 6:20 | händelse | printStart | sak=nyckelring |
| 6:21 | toast | guld | ✅ |
| 6:21 | händelse | printKlar | sak=nyckelring n=24 |
| 6:22 | händelse | printStart | sak=nyckelring |
| 6:24 | toast | guld | ✅ |
| 6:24 | händelse | printKlar | sak=nyckelring n=25 |
| 6:24 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 6:25 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 6:26 | struken | du | Den blev… spagetti. Ali kallar det modern konst. |
| 6:32 | aliSalt | ali | 15 |
| 6:32 | aliSalt | ali | 15 |
| 6:41 | händelse | printStart | sak=nyckelring |
| 6:42 | toast | guld | ✅ |
| 6:42 | händelse | printKlar | sak=nyckelring n=26 |
| 6:43 | händelse | printStart | sak=nyckelring |
| 6:45 | toast | guld | ✅ |
| 6:45 | händelse | printKlar | sak=nyckelring n=27 |
| 6:46 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 6:46 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 6:54 | aliSalt | ali | 15 |
| 6:54 | aliSalt | ali | 15 |
| 7:02 | händelse | printStart | sak=nyckelring |
| 7:03 | toast | guld | ✅ |
| 7:03 | händelse | printKlar | sak=nyckelring n=28 |
| 7:03 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 7:11 | aliSalt | ali | 15 |
| 7:20 | händelse | printStart | sak=nyckelring |
| 7:21 | toast | guld | ✅ |
| 7:21 | händelse | printKlar | sak=nyckelring n=29 |
| 7:22 | händelse | printStart | sak=nyckelring |
| 7:24 | toast | guld | ✅ |
| 7:24 | händelse | printKlar | sak=nyckelring n=30 |
| 7:24 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 7:25 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 7:32 | aliSalt | ali | 15 |
| 7:32 | aliSalt | ali | 15 |
| 7:35 | skratt | du | däcket rullar iväg |
| 7:40 | händelse | printStart | sak=nyckelring |
| 7:41 | toast | guld | ✅ |
| 7:41 | händelse | printKlar | sak=nyckelring n=31 |
| 7:41 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 7:42 | skratt | du | falsk tuta |
| 7:42 | väntar | värld:TUUT! Tjena! | TUUT! Tjena! |
| 7:45 | upplåst | bara | matarband |
| 7:45 | brott | RESERV | matarband (bara 0 av 3) |
| 7:45 | händelse | upplast | id=matarband flask=bara |
| 7:45 | paket |  | sms |
| 7:45 | väntar | ali | Ali här. 🗑️ Sophållaren. Jag frågade AI:n hur man slipper bära skräp. Den gjorde det här. Den har mer fritid än jag. Suck. |
| 7:48 | sak | ali | Ali här. 🗑️ Sophållaren. Jag frågade AI:n hur man slipper bära skräp. Den gjorde det här. Den har mer fritid än jag. Suck. |
| 7:48 | sms | ali | Ali här. 🗑️ Sophållaren. Jag frågade AI:n hur man slipper bära skräp. Den gjorde det här. Den har mer fritid än jag. Suck. |
| 7:48 | sms-bubbla | ali | Ali här. 🗑️ Sophållaren. Jag frågade AI:n hur man slipper bära skräp. Den gjorde det här. Den har mer fritid än jag. Suck. |
| 7:48 | röst | ali | Ali här. 🗑️ Sophållaren. Jag frågade AI:n hur man slipper bära skräp. Den gjorde det här. Den har mer fritid än jag. Suck. · STORY |
| 7:49 | skratt | du | Nyckelringsmannen |
| 7:49 | aliSalt | ali | 15 |
| 7:58 | klar | ali | Ali här. 🗑️ Sophållaren. Jag frågade AI:n hur man slipper bära skräp. Den gjorde det här. Den har mer fritid än jag. Suck. |
| 7:58 | väntar | mamma | Jag sa till pappa att du bor på en soptipp. Han sa "aha, vad lugnt då" och satte på Formel 1. Lugnt? |
| 8:01 | struken | info:guld | 3D-modell köpt – printa sophållare |
| 8:01 | händelse | kopt | sak=matarband |
| 8:07 | struken | värld:TUUT! Tjena! | TUUT! Tjena! |
| 8:10 | händelse | printStart | sak=byggsats:matarband |
| 8:13 | toast | bra | Del 1 av 3 klar |
| 8:17 | toast | bra | Del 2 av 3 klar |
| 8:19 | toast | fel | Ingen ström – trampa cykeln |
| 8:19 | väntar | notis:Skrivare M: Ingen ström – trampa cykeln | Skrivare M: Ingen ström – trampa cykeln |
| 8:19 | sak | notis:Skrivare M: Ingen ström – trampa cykeln | Skrivare M: Ingen ström – trampa cykeln |
| 8:19 | notis | fel | Skrivare M: Ingen ström – trampa cykeln |
| 8:22 | klar | notis:Skrivare M: Ingen ström – trampa cykeln | Skrivare M: Ingen ström – trampa cykeln |
| 8:29 | händelse | printKlar | sak=byggsats:matarband n=1 |
| 8:29 | toast | guld | ✅ |
| 8:31 | händelse | tagitUrPrint | sak=byggsats:matarband n=1 |
| 8:31 | paket |  | sms |
| 8:31 | väntar | ali | Ali här. Jag såg Sophållare på avstånd. Ett streck blev lite snett. Mitt fel. Vackert ändå. |
| 8:31 | paket |  | sms |
| 8:31 | väntar | ali | Ali igen. Jag har sagt till min bror att jag inte går i pension. Jag startar något. Han skrattade. Jag skrattade också. Men jag menar det. Tack. Säg inget. |
| 8:33 | händelse | placerat | sak=sophallare |
| 8:33 | kvittens | du | Nu kan jag tömma hela kärran på en gång. |
| 8:33 | varför-köad | du | Krukor är bra. Pallar är bättre. |
| 8:33 | väntar | du | Nu kan jag tömma hela kärran på en gång. |
| 8:33 | väntar | info:guld | 🗑️ Sophållaren står bakom kvarnen! Töm allt skräp i den – den matar kvarnen själv. |
| 8:33 | sak | du | Nu kan jag tömma hela kärran på en gång. |
| 8:33 | notis | tanke | 💭 Nu kan jag tömma hela kärran på en gång. |
| 8:33 | röst | du | Nu kan jag tömma hela kärran på en gång. · STORY |
| 8:33 | händelse | malKlart | id=sophallare del=Dag 4 – Kärran och mer vind nasta=pall |
| 8:33 | väntar | du | Jag behöver något att sitta på. En pall. Lagom ambitiöst. |
| 8:33 | MÅL |  | Printa en pall |
| 8:35 | målruta |  | Printa en pall |
| 8:36 | klar | du | Nu kan jag tömma hela kärran på en gång. |
| 8:39 | sak | du | Jag behöver något att sitta på. En pall. Lagom ambitiöst. |
| 8:39 | pil |  | Printa en pall |
| 8:39 | notis | tanke | 💭 Jag behöver något att sitta på. En pall. Lagom ambitiöst. |
| 8:39 | röst | du | Jag behöver något att sitta på. En pall. Lagom ambitiöst. · MÅL |
| 8:39 | nick |  | nick:46 |
| 8:43 | klar | du | Jag behöver något att sitta på. En pall. Lagom ambitiöst. |
| 8:44 | händelse | kopt | sak=pall |
| 8:44 | röst | ali | Bra val. Folk köper sånt. Jag vet inte varför. · STORY |
| 8:44 | upprepning | ali | Bra val. Folk köper sånt. Jag vet inte varför. |
| 8:44 | butiksbubbla | ali | Pall? Bra val. Folk köper sånt. Jag vet inte varför. |
| 8:46 | struken | info:guld | 🗑️ Sophållaren står bakom kvarnen! Töm allt skräp i den – den matar kvarnen själv. |
| 8:53 | händelse | printStart | sak=pall |
| 8:55 | sak | ali | Ali här. Jag såg Sophållare på avstånd. Ett streck blev lite snett. Mitt fel. Vackert ändå. |
| 8:55 | sms | ali | Ali här. Jag såg Sophållare på avstånd. Ett streck blev lite snett. Mitt fel. Vackert ändå. |
| 8:55 | sms-bubbla | ali | Ali här. Jag såg Sophållare på avstånd. Ett streck blev lite snett. Mitt fel. Vackert ändå. |
| 8:55 | röst | ali | Ali här. Jag såg Sophållare på avstånd. Ett streck blev lite snett. Mitt fel. Vackert ändå. · REAKTION |
| 8:58 | toast | guld | ✅ |
| 8:58 | händelse | printKlar | sak=pall n=1 |
| 8:58 | händelse | malKlart | id=pall del=Dag 4 – Kärran och mer vind nasta=vind4 |
| 8:58 | väntar | du | En vindsnurra till på skjulets tak. Skrivarna vill ha mer ström. |
| 8:58 | målruta |  | Printa och sälj |
| 8:58 | MÅL |  | Printa och sälj |
| 8:58 | händelse | tagitUrPrint | sak=pall n=1 |
| 9:02 | kvittens-bock |  | ✓ Printa en pall |
| 9:03 | klar | ali | Ali här. Jag såg Sophållare på avstånd. Ett streck blev lite snett. Mitt fel. Vackert ändå. |
| 9:04 | händelse | placerat | sak=pall |
| 9:05 | sak | du | En vindsnurra till på skjulets tak. Skrivarna vill ha mer ström. |
| 9:05 | pil |  | Printa och sälj |
| 9:05 | notis | tanke | 💭 En vindsnurra till på skjulets tak. Skrivarna vill ha mer ström. |
| 9:05 | röst | du | En vindsnurra till på skjulets tak. Skrivarna vill ha mer ström. · MÅL |
| 9:10 | klar | du | En vindsnurra till på skjulets tak. Skrivarna vill ha mer ström. |
| 9:18 | strömdipp | du | vindsnurra2 |
| 9:18 | paket |  | tanke |
| 9:18 | tanke | du | Allt stannar. Maskinerna drar mer än jag får in. |
| 9:18 | väntar | du | Allt stannar. Maskinerna drar mer än jag får in. |
| 9:18 | upplåst | strom | vindsnurra2 |
| 9:18 | brott | UPPLÅST | vindsnurra2 (strom 46 av 15) |
| 9:18 | händelse | upplast | id=vindsnurra2 flask=strom |
| 9:18 | paket |  | tanke → sms |
| 9:18 | tanke | du | En snurra räcker inte. Skrivarna står still så fort det blir stilla. |
| 9:18 | väntar | du | En snurra räcker inte. Skrivarna står still så fort det blir stilla. |
| 9:18 | väntar | ali | Ali här. En snurra till? Taket har plats för två. Vinden har inget emot det. |
| 9:18 | sak | du | Allt stannar. Maskinerna drar mer än jag får in. |
| 9:18 | notis | tanke | 💭 Allt stannar. Maskinerna drar mer än jag får in. |
| 9:18 | röst | du | Allt stannar. Maskinerna drar mer än jag får in. · STORY |
| 9:22 | klar | du | Allt stannar. Maskinerna drar mer än jag får in. |
| 9:37 | väntar | värld:TUUT! Hej grannen! | TUUT! Hej grannen! |
| 9:50 | sak | du | En snurra räcker inte. Skrivarna står still så fort det blir stilla. |
| 9:50 | notis | tanke | 💭 En snurra räcker inte. Skrivarna står still så fort det blir stilla. |
| 9:50 | röst | du | En snurra räcker inte. Skrivarna står still så fort det blir stilla. · STORY |
| 9:51 | händelse | printStart | sak=pall |
| 9:54 | toast | fel | Ingen ström – trampa cykeln |
| 9:56 | klar | du | En snurra räcker inte. Skrivarna står still så fort det blir stilla. |
| 9:58 | struken | värld:TUUT! Hej grannen! | TUUT! Hej grannen! |
| 10:04 | sak | ali | Ali här. En snurra till? Taket har plats för två. Vinden har inget emot det. |
| 10:04 | sms | ali | Ali här. En snurra till? Taket har plats för två. Vinden har inget emot det. |
| 10:04 | sms-bubbla | ali | Ali här. En snurra till? Taket har plats för två. Vinden har inget emot det. |
| 10:04 | röst | ali | Ali här. En snurra till? Taket har plats för två. Vinden har inget emot det. · STORY |
| 10:05 | toast | guld | ✅ |
| 10:05 | händelse | printKlar | sak=pall n=2 |
| 10:06 | händelse | tagitUrPrint | sak=pall n=1 |
| 10:10 | klar | ali | Ali här. En snurra till? Taket har plats för två. Vinden har inget emot det. |
| 10:13 | aliSalt | ali | 180 |
| 10:16 | struken | info:guld | 3D-modell köpt – printa vindsnurra till skjultaket |
| 10:16 | händelse | kopt | sak=vindsnurra |
| 10:18 | morgonkort | ⏸️ Pausad | ⏸️ Pausad · Klicka för att fortsätta. |
| 10:33 | händelse | printStart | sak=byggsats:vindsnurra |
| 10:36 | händelse | printKlar | sak=byggsats:vindsnurra n=1 |
| 10:36 | toast | guld | ✅ |
| 10:37 | struken | info:guld | 🌬️ Vindsnurran ska upp på skjulets tak. |
| 10:37 | händelse | tagitUrPrint | sak=byggsats:vindsnurra n=1 |
| 10:43 | händelse | placerat | sak=vindsnurra |
| 10:43 | struken | info:guld | 🌬️ Vindsnurran sitter på taket – den trampar cykeln åt mig när det blåser |
| 10:43 | monterat | du | byggsats:vindsnurra |
| 10:43 | händelse | monterat | sak=vindsnurra |
| 10:43 | händelse | malKlart | id=vind4 del=Dag 4 – Kärran och mer vind nasta=n3-isolera-tva-vaggar |
| 10:43 | lapp | 📔 Dagbok | Slut på trampandet. Nästan. |
| 10:43 | dagbokrad | du | Slut på trampandet. Nästan. |
| 10:43 | väntar | notis:Slut på trampandet. Nästan. | Slut på trampandet. Nästan. |
| 10:43 | väntar | du | Det drar genom väggarna. Isolering, och sen blir det varmt. |
| 10:43 | MÅL |  | Isolera två väggar · 0/2 |
| 10:43 | sak | du | Det drar genom väggarna. Isolering, och sen blir det varmt. |
| 10:43 | målruta |  | Isolera två väggar · 0/2 |
| 10:43 | pil |  | Isolera två väggar · 0/2 |
| 10:43 | notis | tanke | 💭 Det drar genom väggarna. Isolering, och sen blir det varmt. |
| 10:43 | röst | du | Det drar genom väggarna. Isolering, och sen blir det varmt. · MÅL |
| 10:43 | nick |  | nick:48 |
| 10:48 | klar | du | Det drar genom väggarna. Isolering, och sen blir det varmt. |
| 10:50 | sak | notis:Slut på trampandet. Nästan. | Slut på trampandet. Nästan. |
| 10:50 | notis | dagbok | Slut på trampandet. Nästan. |
| 10:52 | klar | notis:Slut på trampandet. Nästan. | Slut på trampandet. Nästan. |
| 10:53 | händelse | pappa | Pappa ringer |
| 10:57 | röst | pappa | Hej. Det är pappa. · STORY |
| 11:00 | röst | du | Hej pappa. · STORY |
| 11:02 | röst | pappa | Mamma står bredvid. Hon säger att jag ska fråga om du äter. · STORY |
| 11:07 | röst | du | Jag äter. Och jag har en egen kvarn nu. Och en 3D-skrivare. · STORY |
| 11:13 | röst | pappa | Jaha. En kvarn. Vad lugnt då. · STORY |
| 11:15 | röst | pappa | Jag kanske kommer förbi nån dag. Om det passar. · STORY |
| 11:20 | röst | du | Det passar. · STORY |
| 11:22 | röst | pappa | Bra. Hej då då. · STORY |
| 11:31 | händelse | samtalSlut | id=pappa4 |
| 11:31 | struken | kedja | samtal4 |
| 11:37 | struken | info:guld | 3D-modell köpt – printa isolerskiva (vägg) |
| 11:37 | händelse | kopt | sak=vaggar |
| 11:46 | händelse | printStart | sak=byggsats:vaggar |
| 11:50 | händelse | printKlar | sak=byggsats:vaggar n=1 |
| 11:50 | toast | guld | ✅ |
| 11:50 | händelse | tagitUrPrint | sak=byggsats:vaggar n=1 |
| 11:54 | väntar | info:guld | 🧱 Bakväggen klar. 3 kvar. |
| 11:54 | sak | info:guld | 🧱 Bakväggen klar. 3 kvar. |
| 11:54 | kvitto-visas | info:guld | 🧱 Bakväggen klar. 3 kvar. |
| 11:54 | toast | guld | 🧱 Bakväggen klar. 3 kvar. |
| 11:55 | skratt | du | falsk tuta |
| 11:56 | klar | info:guld | 🧱 Bakväggen klar. 3 kvar. |
| 12:04 | händelse | printStart | sak=byggsats:vaggar |
| 12:08 | händelse | printKlar | sak=byggsats:vaggar n=1 |
| 12:08 | toast | guld | ✅ |
| 12:08 | händelse | tagitUrPrint | sak=byggsats:vaggar n=1 |
| 12:10 | struken | ali | Ali igen. Jag har sagt till min bror att jag inte går i pension. Jag startar något. Han skrattade. Jag skrattade också. Men jag menar det. Tack. Säg inget. |
| 12:12 | väntar | info:guld | 🧱 Vänster vägg klar. 2 kvar. |
| 12:12 | sak | info:guld | 🧱 Vänster vägg klar. 2 kvar. |
| 12:12 | kvitto-visas | info:guld | 🧱 Vänster vägg klar. 2 kvar. |
| 12:12 | toast | guld | 🧱 Vänster vägg klar. 2 kvar. |
| 12:12 | händelse | malKlart | id=n3-isolera-tva-vaggar del=Dag 4 – Kärran och mer vind nasta=sov4 |
| 12:12 | paket |  | lapp |
| 12:12 | väntar | du | En skrivare räcker inte. |
| 12:12 | MÅL |  | Klart för idag – sov när du vill |
| 12:14 | paket |  | replik |
| 12:14 | väntar | rolf | Hoppa in. Ja ska visa dej en grej. |
| 12:14 | klar | info:guld | 🧱 Vänster vägg klar. 2 kvar. |
| 12:15 | målruta |  | Klart för idag – sov när du vill |
| 12:16 | kvittens-bock |  | ✓ Isolera två väggar · 2/2 |
| 12:16 | sak | du | (nytt mål i rutan) |
| 12:16 | pil |  | Klart för idag – sov när du vill |
| 12:16 | klar | du | (nytt mål i rutan) |
| 12:18 | sak | du | En skrivare räcker inte. |
| 12:18 | kvallsrad | du | En skrivare räcker inte. |
| 12:19 | klar | du | En skrivare räcker inte. |
| 12:19 | väntar | notis:🌇 Klockan är 21. Ali slår igen luckan.  | 🌇 Klockan är 21. Ali slår igen luckan. Dagens jobb är klart – gå in i skjulet och sov i sängen. |
| 12:27 | sak | rolf | Hoppa in. Ja ska visa dej en grej. |
| 12:27 | notis |  | Rolf: ”Hoppa in. Ja ska visa dej en grej.” |
| 12:27 | röst | rolf | Hoppa in. Ja ska visa dej en grej. · STORY |
| 12:30 | klar | rolf | Hoppa in. Ja ska visa dej en grej. |
| 12:56 | skratt | du | falsk tuta |
| 13:05 | scenInfo | rolf | Rolf kör upp till sin bänk |
| 13:09 | röst | rolf | Kall öl ä viktigt. · STORY |
| 13:09 | bubbla | rolf | Kall öl ä viktigt. |
| 13:11 | skratt | du | däcket rullar iväg |
| 13:11 | paket |  | tanke |
| 13:11 | tanke | du | Däcket ville inte stanna. Jag förstår det. |
| 13:11 | väntar | du | Däcket ville inte stanna. Jag förstår det. |
| 13:17 | röst | rolf | Ja kommer hit varje kväll. Förr va vi två på bänken. · STORY |
| 13:17 | bubbla | rolf | Ja kommer hit varje kväll. Förr va vi två på bänken. |
| 13:35 | röst | rolf | Dä där ä Bengt-Åke. Vinka int. · STORY |
| 13:35 | bubbla | rolf | Dä där ä Bengt-Åke. Vinka int. |
| 13:49 | skratt | du | falsk tuta |
| 13:50 | röst | rolf | Den ä skyldig mej pengar. · STORY |
| 13:50 | bubbla | rolf | Den ä skyldig mej pengar. |
| 13:59 | väntar | foto | Rolfs bänk |
| 13:59 | paket |  | tanke |
| 13:59 | tanke | du | Han kommer hit varje kväll. Nu vet jag var. |
| 13:59 | väntar | du | Han kommer hit varje kväll. Nu vet jag var. |
| 13:59 | skratt | du | Rolfs bänk |
| 14:05 | sak | du | Däcket ville inte stanna. Jag förstår det. |
| 14:05 | notis | tanke | 💭 Däcket ville inte stanna. Jag förstår det. |
| 14:05 | röst | du | Däcket ville inte stanna. Jag förstår det. · REAKTION |
| 14:06 | lapp | Dagbok | Fyra dagar. Tänk om tre veckor. |
| 14:07 | röst | du | Fyra dagar. Tänk om tre veckor. · REAKTION |
| 14:09 | klar | du | Däcket ville inte stanna. Jag förstår det. |
| 14:17 | sak | foto | Rolfs bänk |
| 14:17 | foto | du | Rolfs bänk |
| 14:20 | klar | foto | Rolfs bänk |
| 14:22 | nattkort | du | 🌙 Dag 4 är slut. God natt. zzz… En skrivare räcker inte. DAGENS PRINTAR Nyckelring × 20 Pall × 2 Grillspade × 1 Totalt 23 printar 💰 Tjänat i dag +588 kr |

<details><summary>Botens handlingar dag 4</summary>

- 0:00 — dag 4 börjar — (602 kr)
- 0:09 popup: "FORTSÄTT" (602 kr)
- 0:22 gå till Rolfs postlåda (28 m) (602 kr)
- 0:30 panel: "Rolfs postlåda
Det här låg i l" (722 kr)
- 0:31 tjänar pengar till väntar på sopbilen (BO): 722/782 kr → printar blomkruka (105 kr) (722 kr)
- 0:33 inget skräp kvar att mala – väntar på sopbilen [skräp 172: lätta 169, osynliga 0, utan interaktion 0, tippen 172, ej lyftbara 3, sorter ] (722 kr)
- 0:54 inget skräp kvar att mala – väntar på sopbilen (722 kr)
- 1:15 inget skräp kvar att mala – väntar på sopbilen (722 kr)
- 1:36 inget skräp kvar att mala – väntar på sopbilen (722 kr)
- 1:56 inget skräp kvar att mala – väntar på sopbilen (722 kr)
- 1:56 blomkruka gick inte att printa – tar nästa (722 kr)
- 2:04 gå till Ali (38 m) (722 kr)
- 2:04 öppnar Alis butik – sälja (722 kr)
- 2:07 tjänar pengar till väntar på sopbilen (BO): 722/782 kr → printar nyckelring (15 kr) (722 kr)
- 2:12 gå till skrivaren (24 m) (722 kr)
- 2:13 printar Nyckelring (722 kr)
- 2:14 gå till skrivaren (2 m) (722 kr)
- 2:15 kunde inte starta Nyckelring (722 kr)
- 2:16 tar ut 1 st ur skrivaren (722 kr)
- 2:21 gå till Ali (26 m) (722 kr)
- 2:21 öppnar Alis butik – sälja (722 kr)
- 2:23 säljer hos Ali: +15 kr (737 kr)
- 2:24 tjänar pengar till väntar på sopbilen (BO): 737/782 kr → printar nyckelring (15 kr) (737 kr)
- 2:35 plockar 4 skräp på tippen (bär max 16) (737 kr)
- 2:38 gå till kvarnen (11 m) (737 kr)
- 2:45 gå till skrivaren (5 m) (737 kr)
- 2:47 printar Nyckelring (737 kr)
- 2:48 printar Nyckelring (737 kr)
- 2:51 tar ut 1 st ur skrivaren (737 kr)
- 2:52 tar ut 1 st ur skrivaren (737 kr)
- 2:57 gå till Ali (26 m) (737 kr)
- 2:57 öppnar Alis butik – sälja (737 kr)
- 2:59 säljer hos Ali: +30 kr (767 kr)
- 3:00 tjänar pengar till väntar på sopbilen (BO): 767/782 kr → printar nyckelring (15 kr) (767 kr)
- 3:06 gå till skrivaren (24 m) (767 kr)
- 3:07 printar Nyckelring (767 kr)
- 3:09 tar ut 1 st ur skrivaren (767 kr)
- 3:21 popup: "Bara en katt." (767 kr)
- 3:32 popup: "Läst" (767 kr)
- 3:36 gå till Ali (24 m) (767 kr)
- 3:36 öppnar Alis butik – sälja (767 kr)
- 3:38 säljer hos Ali: +15 kr (782 kr)
- 3:47 gå till Rolfs postlåda (31 m) (782 kr)
- 3:49 gå till skrivaren (8 m) (782 kr)
- 3:51 printar Grillspade (782 kr)
- 3:56 tar ut 1 st ur skrivaren (782 kr)
- 4:00 valj grillspade: true, vald grillspade, post {"l":null,"tr":null,"tm":[]}, nummer false (782 kr)
- 4:02 gå till Rolfs postlåda (8 m) (782 kr)
- 4:19 fyller kärran med 8 skräp (782 kr)
- 4:21 gå till kvarnen (9 m) (782 kr)
- 4:35 tjänar pengar till väntar på flaskhalsen för matarband: 782/822 kr → printar nyckelring (15 kr) (782 kr)
- 4:36 gå till skrivaren (5 m) (782 kr)
- 4:37 printar Nyckelring (782 kr)
- 4:39 printar Nyckelring (782 kr)
- 4:42 tar ut 1 st ur skrivaren (782 kr)
- 4:42 tar ut 1 st ur skrivaren (782 kr)
- 4:48 gå till Ali (26 m) (782 kr)
- 4:48 öppnar Alis butik – sälja (782 kr)
- 4:50 säljer hos Ali: +30 kr (812 kr)
- 4:51 tjänar pengar till väntar på flaskhalsen för matarband: 812/822 kr → printar nyckelring (15 kr) (812 kr)
- 4:56 gå till skrivaren (24 m) (812 kr)
- 4:58 printar Nyckelring (812 kr)
- 5:00 tar ut 1 st ur skrivaren (812 kr)
- 5:05 gå till Ali (24 m) (812 kr)
- 5:05 öppnar Alis butik – sälja (812 kr)
- 5:07 säljer hos Ali: +15 kr (827 kr)
- 5:14 tjänar pengar till väntar på flaskhalsen för matarband: 827/867 kr → printar nyckelring (15 kr) (827 kr)
- 5:19 gå till skrivaren (24 m) (827 kr)
- 5:21 printar Nyckelring (827 kr)
- 5:21 gå till skrivaren (2 m) (827 kr)
- 5:23 printar Nyckelring (827 kr)
- 5:26 tar ut 1 st ur skrivaren (827 kr)
- 5:26 tar ut 1 st ur skrivaren (827 kr)
- 5:31 gå till Ali (26 m) (827 kr)
- 5:31 öppnar Alis butik – sälja (827 kr)
- 5:34 säljer hos Ali: +30 kr (857 kr)
- 5:35 tjänar pengar till väntar på flaskhalsen för matarband: 857/867 kr → printar nyckelring (15 kr) (857 kr)
- 5:40 gå till skrivaren (24 m) (857 kr)
- 5:41 printar Nyckelring (857 kr)
- 5:43 tar ut 1 st ur skrivaren (857 kr)
- 5:48 gå till Ali (24 m) (857 kr)
- 5:48 öppnar Alis butik – sälja (857 kr)
- 5:50 säljer hos Ali: +15 kr (872 kr)
- 5:52 tjänar pengar till väntar på flaskhalsen för matarband: 872/912 kr → printar nyckelring (15 kr) (872 kr)
- 5:58 gå till skrivaren (24 m) (872 kr)
- 5:59 printar Nyckelring (872 kr)
- 6:00 gå till skrivaren (2 m) (872 kr)
- 6:01 printar Nyckelring (872 kr)
- 6:04 tar ut 1 st ur skrivaren (872 kr)
- 6:05 tar ut 1 st ur skrivaren (872 kr)
- 6:10 gå till Ali (26 m) (872 kr)
- 6:10 öppnar Alis butik – sälja (872 kr)
- 6:12 säljer hos Ali: +18 kr (890 kr)
- 6:13 tjänar pengar till väntar på flaskhalsen för matarband: 890/912 kr → printar nyckelring (15 kr) (890 kr)
- 6:18 gå till skrivaren (24 m) (890 kr)
- 6:20 printar Nyckelring (890 kr)
- 6:20 gå till skrivaren (2 m) (890 kr)
- 6:22 printar Nyckelring (890 kr)
- 6:25 tar ut 1 st ur skrivaren (890 kr)
- 6:25 tar ut 1 st ur skrivaren (890 kr)
- 6:30 gå till Ali (26 m) (890 kr)
- 6:30 öppnar Alis butik – sälja (890 kr)
- 6:33 säljer hos Ali: +30 kr (920 kr)
- 6:35 tjänar pengar till väntar på flaskhalsen för matarband: 920/960 kr → printar nyckelring (15 kr) (920 kr)
- 6:40 gå till skrivaren (24 m) (920 kr)
- 6:41 printar Nyckelring (920 kr)
- 6:42 gå till skrivaren (2 m) (920 kr)
- 6:43 printar Nyckelring (920 kr)
- 6:46 tar ut 1 st ur skrivaren (920 kr)
- 6:47 tar ut 1 st ur skrivaren (920 kr)
- 6:52 gå till Ali (26 m) (920 kr)
- 6:52 öppnar Alis butik – sälja (920 kr)
- 6:54 säljer hos Ali: +30 kr (950 kr)
- 6:55 tjänar pengar till väntar på flaskhalsen för matarband: 950/960 kr → printar nyckelring (15 kr) (950 kr)
- 7:00 gå till skrivaren (24 m) (950 kr)
- 7:02 printar Nyckelring (950 kr)
- 7:04 tar ut 1 st ur skrivaren (950 kr)
- 7:09 gå till Ali (24 m) (950 kr)
- 7:09 öppnar Alis butik – sälja (950 kr)
- 7:11 säljer hos Ali: +15 kr (965 kr)
- 7:13 tjänar pengar till väntar på flaskhalsen för matarband: 965/1005 kr → printar nyckelring (15 kr) (965 kr)
- 7:18 gå till skrivaren (24 m) (965 kr)
- 7:20 printar Nyckelring (965 kr)
- 7:20 gå till skrivaren (2 m) (965 kr)
- 7:22 printar Nyckelring (965 kr)
- 7:25 tar ut 1 st ur skrivaren (965 kr)
- 7:25 tar ut 1 st ur skrivaren (965 kr)
- 7:30 gå till Ali (26 m) (965 kr)
- 7:30 öppnar Alis butik – sälja (965 kr)
- 7:33 säljer hos Ali: +30 kr (995 kr)
- 7:34 tjänar pengar till väntar på flaskhalsen för matarband: 995/1005 kr → printar nyckelring (15 kr) (995 kr)
- 7:39 gå till skrivaren (24 m) (995 kr)
- 7:40 printar Nyckelring (995 kr)
- 7:42 tar ut 1 st ur skrivaren (995 kr)
- 7:47 gå till Ali (24 m) (995 kr)
- 7:47 öppnar Alis butik – sälja (995 kr)
- 7:49 säljer hos Ali: +15 kr (1010 kr)
- 8:00 öppnar Alis butik – köpa sophållare (1010 kr)
- 8:02 köper matarband för 120 kr (890 kr)
- 8:08 gå till skrivaren (24 m) (890 kr)
- 8:10 printar Sophållare (3 delar) (890 kr)
- 8:31 gå till skrivaren (4 m) (890 kr)
- 8:32 tar ut 1 st ur skrivaren (890 kr)
- 8:33 gå till kvarnen (3 m) (890 kr)
- 8:42 gå till Ali (29 m) (890 kr)
- 8:42 öppnar Alis butik – köpa receptet pall (890 kr)
- 8:45 köper pall för 80 kr (810 kr)
- 8:51 gå till skrivaren (24 m) (810 kr)
- 8:53 printar Pall (810 kr)
- 8:59 tar ut 1 st ur skrivaren (810 kr)
- 9:03 gå till platsen för pall (20 m) (810 kr)
- 9:04 ställer ut pall (810 kr)
- 9:13 tjänar pengar till väntar på flaskhalsen för vindsnurra2: 810/850 kr → printar pall (180 kr) (810 kr)
- 9:23 plockar 3 skräp på tippen (bär max 16) (810 kr)
- 9:25 gå till kvarnen (11 m) (810 kr)
- 9:27 gå till cykeln (5 m) (810 kr)
- 9:50 gå till skrivaren (2 m) (810 kr)
- 9:51 printar Pall (810 kr)
- 10:06 tar ut 1 st ur skrivaren (810 kr)
- 10:12 gå till Ali (26 m) (810 kr)
- 10:12 öppnar Alis butik – sälja (810 kr)
- 10:13 säljer hos Ali: +180 kr (990 kr)
- 10:14 öppnar Alis butik – köpa vindsnurra till skjultaket (990 kr)
- 10:17 köper vindsnurra för 133 kr (857 kr)
- 10:26 kort: "FORTSÄTTeller tryck Esc" (857 kr)
- 10:31 gå till skrivaren (24 m) (857 kr)
- 10:33 printar Vindsnurra till skjultaket (857 kr)
- 10:38 tar ut 1 st ur skrivaren (857 kr)
- 10:43 gå till sätt vindsnurran på taket (18 m) (857 kr)
- 10:57 popup: "Svara E" (857 kr)
- 11:06 popup: "Nästa E" (857 kr)
- 11:13 popup: "Nästa E" (857 kr)
- 11:20 popup: "Nästa E" (857 kr)
- 11:26 popup: "Nästa E" (857 kr)
- 11:31 popup: "Lägg på E" (857 kr)
- 11:35 gå till Ali (20 m) (857 kr)
- 11:35 öppnar Alis butik – köpa isolerskiva (vägg) (857 kr)
- 11:38 köper vaggar för 130 kr (727 kr)
- 11:44 gå till skrivaren (24 m) (727 kr)
- 11:46 printar Isolerskiva (vägg) (727 kr)
- 11:51 tar ut 1 st ur skrivaren (727 kr)
- 11:54 gå till skjulet (bak) (17 m) (727 kr)
- 12:02 gå till skrivaren (17 m) (727 kr)
- 12:04 printar Isolerskiva (vägg) (727 kr)
- 12:09 tar ut 1 st ur skrivaren (727 kr)
- 12:12 gå till skjulet (vanster) (17 m) (727 kr)
- 13:05 gå till sopbilen (Rolfs bänk) (38 m) (727 kr)
- 14:05 tillbaka från Rolfs bänk (727 kr)
- 14:10 panel: "Dagbok
Före och efter
Dag 1
Da" (727 kr)
- 14:19 gå till sängen (39 m) (727 kr)

</details>

## Dag 5

| Tid | Källa | Vem | Text |
|---|---|---|---|
| 14:22 | vara | ali | pall |
| 14:22 | händelse | malKlart | id=sov4 del=Dag 4 – Kärran och mer vind nasta=rolf3-brev |
| 14:22 | MÅL |  | Vänta på sopbilen. Den lämnar något. |

<details><summary>Botens handlingar dag 5</summary>

- 0:00 — dag 5 börjar — (727 kr)

</details>
