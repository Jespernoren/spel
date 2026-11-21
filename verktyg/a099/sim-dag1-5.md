# Simulering kapitel 1 – körning 1

*Gjord 2026-11-21 11:13 med `verktyg/sim-kapitel1.mjs` + `verktyg/sim-bot.js` (punkt AX). Boten går 4,5 m/s, läser 15 tecken/s, trampar, vevar, plockar, printar, köper och säljer via spelets egna funktioner. Tiderna är speltid.*

## Sammanfattning

| Dag | Minuter | Väntan | Prints (totalt) | Kr vid sömn | Bär | Trivsel |
|---|---|---|---|---|---|---|
| 1 | 10.6 | 2 % | 22 | 215 | 6 | 21 |
| 2 | 10.9 | 2 % | 39 | 1592 | 10 | 38 |
| 3 | 16.7 | 4 % | 61 | 2837 | 16 | 78 |
| 4 | 13.4 | 2 % | 84 | 4988 | 16 | 96 |
| 5 | 14.1 | 3 % | 102 | 8079 | 16 | 136 |
| 6 | 0.0 | 0 % | 102 | 8337 | 16 | 136 |

## Flaskhalskartan (EE)

| Dag | bara | mala | trampa | strom | skrivare | inkomst | Upplåst |
|---|---|---|---|---|---|---|---|
| 1 | 6 | 10 | 22 | 12 | 90 | 20 | grip (bara, 7:44, reserv), kruka (inkomst, 8:40) |
| 2 | 1 | 11 | 11 | 28 | 286 | 0 | kvarnmotor (mala, 3:21, reserv), rullstall (skrivare, 5:27), trim_skrivare (skrivare, 7:25), vindsnurra (trampa, 8:35) |
| 3 | 2 | 18 | 0 | 15 | 573 | 0 | cykelbatteri (strom, 6:39, reserv), ryggkorg (bara, 10:31, reserv), skrivare2 (skrivare, 12:00) |
| 4 | 2 | 30 | 0 | 15 | 458 | 0 | trim_skrivare2 (skrivare, 2:54), matarband (bara, 7:20, reserv), vindsnurra2 (strom, 11:09) |
| 5 | 7 | 28 | 0 | 0 | 364 | 0 | trim_skrivare3 (skrivare, 2:21), vindsnurra3 (strom, 12:41, reserv) |
| 6 | 0 | 0 | 0 | 0 | 0 | 0 |  |

TIDIG: 0 · FAST: 0 · upplåst av reserven (målet väntade 3 min): 6

**SKRATT:** 55 roliga ögonblick på 66 min (8.3 per 10 min, mål minst 5)

**Köp:**

- dag 1 2:43 – gammalkvarn (30 kr)
- dag 1 8:08 – grip (50 kr)
- dag 1 8:49 – kruka (40 kr)
- dag 1 9:30 – sang (60 kr)
- dag 2 4:13 – kvarnmotor (50 kr)
- dag 2 8:56 – vindsnurra (133 kr)
- dag 2 10:22 – dorr (120 kr)
- dag 3 7:08 – cykelbatteri (30 kr)
- dag 3 10:42 – ryggkorg (120 kr)
- dag 3 11:15 – bord (120 kr)
- dag 3 12:14 – skrivare2 (500 kr)
- dag 3 13:44 – tak (250 kr)
- dag 4 7:40 – matarband (120 kr)
- dag 4 8:41 – pall (80 kr)
- dag 4 11:28 – vindsnurra (133 kr)
- dag 4 12:41 – vaggar (130 kr)
- dag 5 5:53 – webbdator (300 kr)
- dag 5 6:54 – fonster (90 kr)
- dag 5 7:29 – golv (140 kr)
- dag 5 8:39 – taklampa (90 kr)
- dag 5 13:01 – vindsnurra (133 kr)

## Storykedjan (kvittens → varför → nytt mål)

| Dag | Tid | Id | Kvittens | Varför | Nytt mål | Tid till målet |
|---|---|---|---|---|---|---|
| 1 | 0:29 | lastat | Tung. Den har storebror aldrig burit så långt. |  | Skrivaren ställer jag där borta, mot skräpberget. Min första | 4.4 s |
| 1 | 1:45 | printStart | Den piper. Den GÖR något. |  | En nyckelring till, så länge storebrors rulle räcker. | 6.7 s |
| 1 | 1:50 | printKlar | Klar! Ta ut den innan den ändrar sig. |  | En nyckelring till, så länge storebrors rulle räcker. | 3.1 s |
| 1 | 9:00 | krukaD1 | En kruka. Mamma skulle bli så stolt. Hon får inte veta. |  | Jag kan inte sova på betongen en natt till. Ali har en säng. | 6.9 s |
| 2 | 10:02 | vindsnurra | Den snurrar! Långsamt. Men den snurrar. | Om det regnar i natt drunknar jag. Ett tak. | Det drar från dörrhålet. En dörr kan jag printa. | 4.3 s |
| 4 | 8:19 | sophallare | Nu kan jag tömma hela kärran på en gång. | Krukor är bra. Pallar är bättre. | Jag behöver något att sitta på. En pall. Lagom ambitiöst. | 4.3 s |

## Hur länge nya mål väntade (från att förra målet blev klart till att det nya syntes i målrutan)

Snitt 3.0 s · max 14.6 s · över 4 s: 6 · över 8 s: 5 av 58

## Flaggor (46)

- **UPPREPNING** dag 4 8:40: Bra val. Folk köper sånt. Jag vet inte varför. (CT)
- **LUGN** dag 2 0:08: 0.0 s efter BÖRJA DAGEN: [lapp] "Första natten i en riktig säng. Jag printade den själv."
- **KROCK** dag 1 3:21: 0.7 s mellan [notis] "Kvarnen funkar. Soptippen är en gruva." och [notis] "💭 Min egen tråd. Nu printar jag en nyckelring av den."
- **KROCK** dag 1 10:28: 0.2 s mellan [lapp] "Dag 1. Nitton år. Inget mer tjat. Gården är full av skräp. I" och [notis] "💭 Sängen ska in i skjulet. Sen sover jag."
- **KROCK** dag 3 16:31: 1.4 s mellan [notis] "Rolf: ”Hoppa in. Ja ska visa dej en grej.”" och [lapp] "Tre dagar. Tänk om tre veckor."
- **KROCK** dag 4 11:51: 0.7 s mellan [notis] "Slut på trampandet. Nästan." och [notis] "💭 Det drar genom väggarna. Isolering, och sen blir det varm"
- **KEDJA** dag 1 0:29: lastat: nytt mål 4.4 s efter kedjan (max 2 s)
- **KEDJA** dag 1 1:45: printStart: nytt mål 6.7 s efter kedjan (max 2 s)
- **KEDJA** dag 1 9:00: krukaD1: nytt mål 6.9 s efter kedjan (max 2 s)
- **KEDJA** dag 2 10:02: vindsnurra: nytt mål 4.3 s efter kedjan (max 2 s)
- **KEDJA** dag 4 8:19: sophallare: nytt mål 4.3 s efter kedjan (max 2 s)
- **SEN** dag 1 5:15: 27.2 s efter händelsen: notis:Storebrors skrivare: Ingen ström – tramp: "Storebrors skrivare: Ingen ström – trampa cykeln"
- **SEN** dag 1 8:59: 19.2 s efter händelsen: ali: "Ali här. Jag såg Skräpgrip på avstånd. Ett streck blev lite snett. Mit"
- **SEN** dag 2 2:25: 56.2 s efter händelsen: du: "Jaha. En kalsong. Använd."
- **SEN** dag 2 2:46: 58.5 s efter händelsen: kjelle: "Radio Tippen, Kjelle här. Skjulet vid tippen har fått generator. Vi ta"
- **SEN** dag 3 1:40: 50.7 s efter händelsen: du: "En toffla. Bara en."
- **SEN** dag 3 4:33: 67.7 s efter händelsen: du: "Tratten är stor som en kaffekopp. Tunnan är stor som jag."
- **SEN** dag 3 5:25: 55.7 s efter händelsen: du: "Jaha, Rolf har hämtat flasköppnare med magnet."
- **SEN** dag 3 6:16: 51.6 s efter händelsen: du: "Kajsa. Ut ur skrivaren. Nu."
- **SEN** dag 3 11:26: 18.9 s efter händelsen: ali: "Ali här. Du printade Ryggkorg från min ritning. Och det FUNKAR? Jag ha"
- **SEN** dag 4 6:24: 53.5 s efter händelsen: du: "En badanka. Den överlevde kvarnen."
- **SEN** dag 5 5:32: 18.5 s efter händelsen: värld:Mjau.: "Mjau."
- **SEN** dag 5 8:04: 11.7 s efter händelsen: värld:TUUT TUUT!: "TUUT TUUT!"
- **SEN** dag 5 8:24: 28.7 s efter händelsen: notis:Skrivare M: Tornet är tomt – mal mer så : "Skrivare M: Tornet är tomt – mal mer så fortsätter den"
- **SAMTIDIGT** dag 1 0:23: "Skrivaren står kvar på cykeln. Den ska a" och "Spikade ihop en skylt av bräder från skr"
- **PAUS** dag 1 0:33: 0.0 s paus före "🖨️ Storebrors skrivare. Den ska stå där borta, mo"
- **SAMTIDIGT** dag 1 1:43: "Okej. Välj nåt litet att printa." och "Strömmen finns. Nu ska skrivaren veta va"
- **PAUS** dag 1 1:48: 0.0 s paus före "Den piper. Den GÖR något."
- **PAUS** dag 1 1:51: 0.7 s paus före "Klar! Ta ut den innan den ändrar sig."
- **PAUS** dag 1 3:21: 0.0 s paus före "Kvarnen funkar. Soptippen är en gruva."
- **PAUS** dag 1 9:07: 0.0 s paus före "Ali gillar krukor. Han sa det själv."
- **PAUS** dag 1 9:10: 0.0 s paus före "En kruka. Mamma skulle bli så stolt. Hon får inte "
- **PAUS** dag 2 5:04: 0.0 s paus före "Gården är STÄDAD, av mig, frivilligt. Mamma skulle"
- **PAUS** dag 2 10:05: 0.0 s paus före "🌬️ Vindsnurran sitter på taket – den trampar cyke"
- **PAUS** dag 3 2:28: 0.0 s paus före "🚛 Sopbilen tippade en ny last på soptippen!"
- **PAUS** dag 4 3:40: 0.0 s paus före "9 st i tratten · 7 st på marken bredvid"
- **PAUS** dag 4 8:23: 0.0 s paus före "🗑️ Sophållaren står bakom kvarnen! Töm allt skräp"
- **PAUS** dag 4 11:50: 0.0 s paus före "Slut på trampandet. Nästan."
- **UPPREPNING** dag 4 3:24: info:bra: "🛒 4 skräp från famnen i skottkärran" (förra gången dag 4)
- **UPPREPNING** dag 4 11:48: info:guld: "🌬️ Vindsnurran sitter på taket – den trampar cykeln åt dig när det bl" (förra gången dag 2)
- **UPPREPNING** dag 5 13:13: info:guld: "🌬️ Vindsnurran ligger i handen – klicka på skjulet för att sätta den " (förra gången dag 4)
- **UPPREPNING** dag 5 13:21: info:guld: "🌬️ Vindsnurran sitter på taket – den trampar cykeln åt dig när det bl" (förra gången dag 4)
- **FEL YTA** dag 4 8:32: blå kvarnen har bla2, ska vara bla3
- **TORRT** dag 1 4:31: 249 s utan roligt ögonblick
- **TEMPO** dag 3 16:44: dag 3 tog 16.7 min (mål 10–15)
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
| 0:10 | sak-del | du | Men först en skylt, så att alla vet var jag bor. |
| 0:10 | röst | du | Men först en skylt, så att alla vet var jag bor. · STORY |
| 0:14 | klar | du | Se så mycket skräp här är. Det är ju en guldgruva! |
| 0:15 | lapp | 📔 Dagbok | Spikade ihop en skylt av bräder från skräpberget: Soptippsvägen 1. Inte mycket för världen, men det är MITT. |
| 0:15 | dagbokrad | du | Spikade ihop en skylt av bräder från skräpberget: Soptippsvägen 1. Inte mycket för världen, men det är MITT. |
| 0:15 | väntar | notis:Spikade ihop en skylt av bräder från skr | Spikade ihop en skylt av bräder från skräpberget: Soptippsvägen 1. Inte mycket för världen, men det är MITT. |
| 0:15 | varför | du | Skrivaren står kvar på cykeln. Den ska av. |
| 0:15 | väntar | du | Skrivaren står kvar på cykeln. Den ska av. |
| 0:17 | sak | du | Skrivaren står kvar på cykeln. Den ska av. |
| 0:17 | struken | du | Skrivaren står kvar på cykeln. Den ska av. |
| 0:23 | sak | notis:Spikade ihop en skylt av bräder från skr | Spikade ihop en skylt av bräder från skräpberget: Soptippsvägen 1. Inte mycket för världen, men det är MITT. |
| 0:23 | notis | dagbok | Spikade ihop en skylt av bräder från skräpberget: Soptippsvägen 1. Inte mycket för världen, men det är MITT. |
| 0:25 | klar | notis:Spikade ihop en skylt av bräder från skr | Spikade ihop en skylt av bräder från skräpberget: Soptippsvägen 1. Inte mycket för världen, men det är MITT. |
| 0:27 | sak | du | (nytt mål i rutan) |
| 0:27 | klar | du | (nytt mål i rutan) |
| 0:29 | händelse | lastatAv | sak=skrivare |
| 0:29 | paket |  | sms |
| 0:29 | väntar | mamma | Hur kunde du bara gå? Är du ok? Svara när jag ringer! |
| 0:29 | kvittens | du | Tung. Den har storebror aldrig burit så långt. |
| 0:29 | väntar | du | Tung. Den har storebror aldrig burit så långt. |
| 0:29 | väntar | info:bra | 🖨️ Storebrors skrivare. Den ska stå där borta, mot skräpberget. |
| 0:29 | sak | du | Tung. Den har storebror aldrig burit så långt. |
| 0:29 | notis | tanke | 💭 Tung. Den har storebror aldrig burit så långt. |
| 0:29 | röst | du | Tung. Den har storebror aldrig burit så långt. · STORY |
| 0:29 | händelse | malKlart | id=lasta del=Dag 1 – Kom igång nasta=stall |
| 0:29 | väntar | du | Skrivaren ställer jag där borta, mot skräpberget. Min första verkstad. |
| 0:29 | MÅL |  | Ställ upp skrivaren |
| 0:32 | hjälp | kontroll | E: Ryggsäcken och kistan |
| 0:33 | målruta |  | Ställ upp skrivaren |
| 0:33 | klar | du | Tung. Den har storebror aldrig burit så långt. |
| 0:33 | sak | info:bra | 🖨️ Storebrors skrivare. Den ska stå där borta, mot skräpberget. |
| 0:33 | kvitto-visas | info:bra | 🖨️ Storebrors skrivare. Den ska stå där borta, mot skräpberget. |
| 0:33 | toast | bra | 🖨️ Storebrors skrivare. Den ska stå där borta, mot skräpberget. |
| 0:35 | klar | info:bra | 🖨️ Storebrors skrivare. Den ska stå där borta, mot skräpberget. |
| 0:37 | sak | du | Skrivaren ställer jag där borta, mot skräpberget. Min första verkstad. |
| 0:37 | pil |  | Ställ upp skrivaren |
| 0:37 | notis | tanke | 💭 Skrivaren ställer jag där borta, mot skräpberget. Min första verkstad. |
| 0:37 | röst | du | Skrivaren ställer jag där borta, mot skräpberget. Min första verkstad. · MÅL |
| 0:38 | nick |  | nick:1 |
| 0:43 | klar | du | Skrivaren ställer jag där borta, mot skräpberget. Min första verkstad. |
| 0:45 | struken | info:info | ⏎ Enter – hoppa över |
| 0:46 | väntar | info:bra | 🖨️ Storebrors skrivare står på sin plats |
| 0:46 | händelse | placerat | sak=skrivareS |
| 0:46 | paket |  | tanke |
| 0:46 | tanke | du | Storebrors rulle. Den räcker inte länge. |
| 0:46 | väntar | du | Storebrors rulle. Den räcker inte länge. |
| 0:46 | duns | du | ställs ner |
| 0:46 | sak | info:bra | 🖨️ Storebrors skrivare står på sin plats |
| 0:46 | kvitto-visas | info:bra | 🖨️ Storebrors skrivare står på sin plats |
| 0:46 | toast | bra | 🖨️ Storebrors skrivare står på sin plats |
| 0:46 | händelse | malKlart | id=stall del=Dag 1 – Kom igång nasta=strom |
| 0:46 | struken | du | Storebrors rulle. Den räcker inte länge. |
| 0:46 | väntar | du | Skrivaren behöver ström. Hur fixar jag det här ute? |
| 0:46 | MÅL |  | Skrivaren behöver ström |
| 0:48 | klar | info:bra | 🖨️ Storebrors skrivare står på sin plats |
| 0:48 | målruta |  | Skrivaren behöver ström |
| 0:50 | kvittens-bock |  | ✓ Ställ upp skrivaren |
| 0:50 | sak | du | Skrivaren behöver ström. Hur fixar jag det här ute? |
| 0:50 | pil |  | Skrivaren behöver ström |
| 0:50 | notis | tanke | 💭 Skrivaren behöver ström. Hur fixar jag det här ute? |
| 0:50 | röst | du | Skrivaren behöver ström. Hur fixar jag det här ute? · MÅL |
| 0:50 | nick |  | nick:2 |
| 0:54 | klar | du | Skrivaren behöver ström. Hur fixar jag det här ute? |
| 1:23 | paket |  | tanke |
| 1:23 | tanke | du | Cykeln… och storebrors generator? |
| 1:23 | väntar | du | Cykeln… och storebrors generator? |
| 1:23 | sak | du | Cykeln… och storebrors generator? |
| 1:23 | kvitto-visas | du | Cykeln… och storebrors generator? |
| 1:23 | notis | tanke | 💭 Cykeln… och storebrors generator? |
| 1:23 | röst | du | Cykeln… och storebrors generator? · STORY |
| 1:23 | händelse | malKlart | id=strom del=Dag 1 – Kom igång nasta=bygg |
| 1:23 | väntar | du | Om jag trampar ström med cykeln kan skrivaren gå. Cykeln där, generatorn bredvid. |
| 1:24 | MÅL |  | Ställ cykel och generator |
| 1:26 | klar | du | Cykeln… och storebrors generator? |
| 1:26 | målruta |  | Ställ cykel och generator |
| 1:27 | paket |  | tanke |
| 1:27 | tanke | du | Storebrors generator. Den gör el av trampandet. |
| 1:27 | väntar | du | Storebrors generator. Den gör el av trampandet. |
| 1:27 | händelse | placerat | sak=generator |
| 1:27 | duns | du | ställs ner |
| 1:27 | kvittens-bock |  | ✓ Skrivaren behöver ström |
| 1:29 | sak | du | Om jag trampar ström med cykeln kan skrivaren gå. Cykeln där, generatorn bredvid. |
| 1:29 | pil |  | Ställ cykel och generator |
| 1:29 | notis | tanke | 💭 Om jag trampar ström med cykeln kan skrivaren gå. Cykeln där, generatorn bredvid. |
| 1:29 | röst | du | Om jag trampar ström med cykeln kan skrivaren gå. Cykeln där, generatorn bredvid. · MÅL |
| 1:30 | ljud | utrustning | Cykeln i famnen |
| 1:30 | händelse | lyft | sak=cykel |
| 1:36 | klar | du | Om jag trampar ström med cykeln kan skrivaren gå. Cykeln där, generatorn bredvid. |
| 1:41 | händelse | placerat | sak=cykel |
| 1:41 | duns | du | ställs ner |
| 1:43 | händelse | ombyggd | sak=cykel |
| 1:43 | varför | du | Okej. Välj nåt litet att printa. |
| 1:43 | väntar | du | Okej. Välj nåt litet att printa. |
| 1:43 | sak | du | Okej. Välj nåt litet att printa. |
| 1:43 | struken | du | Okej. Välj nåt litet att printa. |
| 1:43 | händelse | malKlart | id=bygg del=Dag 1 – Kom igång nasta=valjModell |
| 1:43 | struken | du | Storebrors generator. Den gör el av trampandet. |
| 1:43 | väntar | du | Strömmen finns. Nu ska skrivaren veta vad den ska göra. |
| 1:43 | målruta |  | Välj vad skrivaren ska printa |
| 1:43 | MÅL |  | Välj vad skrivaren ska printa |
| 1:43 | sak | du | Strömmen finns. Nu ska skrivaren veta vad den ska göra. |
| 1:43 | pil |  | Välj vad skrivaren ska printa |
| 1:43 | notis | tanke | 💭 Strömmen finns. Nu ska skrivaren veta vad den ska göra. |
| 1:43 | röst | du | Strömmen finns. Nu ska skrivaren veta vad den ska göra. · MÅL |
| 1:45 | händelse | printStart | sak=nyckelring |
| 1:45 | kvittens | du | Den piper. Den GÖR något. |
| 1:45 | väntar | du | Den piper. Den GÖR något. |
| 1:45 | tanke | du | Den stannar när jag slutar trampa. Ström som sparas hade varit nåt. |
| 1:45 | väntar | du | Den stannar när jag slutar trampa. Ström som sparas hade varit nåt. |
| 1:45 | händelse | malKlart | id=valjModell del=Dag 1 – Kom igång nasta=trampa |
| 1:45 | struken | du | Den stannar när jag slutar trampa. Ström som sparas hade varit nåt. |
| 1:45 | väntar | du | Nu behöver den ström. Trampa. |
| 1:46 | MÅL |  | Trampa cykeln |
| 1:48 | klar | du | Strömmen finns. Nu ska skrivaren veta vad den ska göra. |
| 1:48 | sak | du | Den piper. Den GÖR något. |
| 1:48 | notis | tanke | 💭 Den piper. Den GÖR något. |
| 1:48 | röst | du | Den piper. Den GÖR något. · STORY |
| 1:48 | målruta |  | Trampa cykeln |
| 1:50 | klar | du | Den piper. Den GÖR något. |
| 1:50 | händelse | printKlar | sak=nyckelring n=1 |
| 1:50 | kvittens | du | Klar! Ta ut den innan den ändrar sig. |
| 1:50 | väntar | du | Klar! Ta ut den innan den ändrar sig. |
| 1:50 | händelse | malKlart | id=trampa del=Dag 1 – Kom igång nasta=rullSlut |
| 1:50 | väntar | du | En nyckelring till, så länge storebrors rulle räcker. |
| 1:51 | MÅL |  | En nyckelring till |
| 1:51 | struken | du | Nu behöver den ström. Trampa. |
| 1:51 | sak | du | Klar! Ta ut den innan den ändrar sig. |
| 1:51 | notis | tanke | 💭 Klar! Ta ut den innan den ändrar sig. |
| 1:51 | röst | du | Klar! Ta ut den innan den ändrar sig. · STORY |
| 1:51 | målruta |  | En nyckelring till |
| 1:51 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 1:51 | paket |  | sms |
| 1:51 | väntar | bror | VA FAN?! Fick du igång den?? Jag försökte i typ ett år. Den bara pep. 😳 |
| 1:51 | skratt | bror | VA FAN?! Fick du igång den?? Jag försökt |
| 1:51 | paket |  | sms → ge |
| 1:51 | väntar | bror | Sälj den till Ali, han med affären vid tippen. Han köper gamla grejer. Han köpte min gamla mopedhjälm för 20 spänn. |
| 1:51 | väntar |  | (läget ändras) |
| 1:54 | klar | du | Klar! Ta ut den innan den ändrar sig. |
| 1:55 | sak |  | (läget ändras) |
| 1:55 | klar |  | (läget ändras) |
| 1:56 | händelse | printStart | sak=nyckelring |
| 1:57 | sak | du | En nyckelring till, så länge storebrors rulle räcker. |
| 1:57 | pil |  | En nyckelring till |
| 1:57 | notis | tanke | 💭 En nyckelring till, så länge storebrors rulle räcker. |
| 1:57 | röst | du | En nyckelring till, så länge storebrors rulle räcker. · MÅL |
| 2:01 | klar | du | En nyckelring till, så länge storebrors rulle räcker. |
| 2:07 | toast | guld | Nyckelring är klar – ta ut den |
| 2:07 | väntar | notis:Storebrors skrivare: Nyckelring är klar  | Storebrors skrivare: Nyckelring är klar – ta ut den |
| 2:07 | händelse | printKlar | sak=nyckelring n=2 |
| 2:07 | paket |  | tanke |
| 2:07 | tanke | du | Slut på storebrors rulle. Och här ligger ju plast överallt. Om jag bara kunde göra tråd av skräpet… Affären mitt emot kanske har något. |
| 2:07 | väntar | du | Slut på storebrors rulle. Och här ligger ju plast överallt. Om jag bara kunde göra tråd av skräpet… Affären mitt emot kanske har något. |
| 2:07 | händelse | malKlart | id=rullSlut del=Dag 1 – Kom igång nasta=saljTva |
| 2:07 | MÅL |  | Sälj nyckelringarna |
| 2:07 | sak | du | Slut på storebrors rulle. Och här ligger ju plast överallt. Om jag bara kunde göra tråd av skräpet… Affären mitt emot kanske har något. |
| 2:07 | kvitto-visas | du | Slut på storebrors rulle. Och här ligger ju plast överallt. Om jag bara kunde göra tråd av skräpet… Affären mitt emot kanske har något. |
| 2:07 | notis | tanke | 💭 Slut på storebrors rulle. Och här ligger ju plast överallt. Om jag bara kunde göra tråd av skräpet… Affären mitt emot kanske har något. |
| 2:07 | röst | du | Slut på storebrors rulle. Och här ligger ju plast överallt. Om jag bara kunde göra tråd av skräpet… Affären mitt emot kanske har något. · STORY |
| 2:11 | målruta |  | Sälj nyckelringarna |
| 2:11 | kvittens-bock |  | ✓ En nyckelring till |
| 2:19 | klar | du | Slut på storebrors rulle. Och här ligger ju plast överallt. Om jag bara kunde göra tråd av skräpet… Affären mitt emot kanske har något. |
| 2:19 | sak | du | (nytt mål i rutan) |
| 2:19 | pil |  | Sälj nyckelringarna |
| 2:19 | klar | du | (nytt mål i rutan) |
| 2:20 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 2:21 | struken | bror | VA FAN?! Fick du igång den?? Jag försökte i typ ett år. Den bara pep. 😳 |
| 2:21 | skratt | bror | VA FAN?! Fick du igång den?? Jag försökt |
| 2:21 | struken | notis:Storebrors skrivare: Nyckelring är klar  | Storebrors skrivare: Nyckelring är klar – ta ut den |
| 2:25 | röst | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. · STORY |
| 2:25 | butiksbubbla | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 2:27 | aliSalt | ali | 30 |
| 2:27 | butiksbubbla | ali | Pappas gamla köttkvarn. Den har malt allt utom kött. Trettio kronor, så är den din. |
| 2:28 | väntar | ali | Pappas gamla köttkvarn. Den har malt allt utom kött. Trettio kronor, så är den din. |
| 2:28 | händelse | malKlart | id=saljTva del=Dag 1 – Kom igång nasta=aliKvarn |
| 2:28 | väntar | du | Ali har en gammal kvarn. Den gör tråd av skräp. |
| 2:28 | MÅL |  | Köp kvarnen |
| 2:29 | struken | bror | Sälj den till Ali, han med affären vid tippen. Han köper gamla grejer. Han köpte min gamla mopedhjälm för 20 spänn. |
| 2:29 | sak | ali | Pappas gamla köttkvarn. Den har malt allt utom kött. Trettio kronor, så är den din. |
| 2:29 | röst | ali | Pappas gamla köttkvarn. Den har malt allt utom kött. Trettio kronor, så är den din. · STORY |
| 2:32 | kvittens-bock |  | ✓ Sälj nyckelringarna |
| 2:32 | målruta |  | Köp kvarnen |
| 2:33 | väntar | foto | Första nyckelringen |
| 2:33 | paket |  | tanke |
| 2:33 | tanke | du | Någon köpte nåt jag gjort. Det här kan funka. |
| 2:33 | väntar | du | Någon köpte nåt jag gjort. Det här kan funka. |
| 2:36 | klar | ali | Pappas gamla köttkvarn. Den har malt allt utom kött. Trettio kronor, så är den din. |
| 2:38 | sak | du | Ali har en gammal kvarn. Den gör tråd av skräp. |
| 2:38 | pil |  | Köp kvarnen |
| 2:38 | notis | tanke | 💭 Ali har en gammal kvarn. Den gör tråd av skräp. |
| 2:38 | röst | du | Ali har en gammal kvarn. Den gör tråd av skräp. · MÅL |
| 2:42 | klar | du | Ali har en gammal kvarn. Den gör tråd av skräp. |
| 2:42 | händelse | kopt | sak=gammalkvarn |
| 2:42 | röst | ali | Och kommer du på nåt smart, så vet du var jag bor. · STORY |
| 2:42 | butiksbubbla | ali | Och kommer du på nåt smart, så vet du var jag bor. |
| 2:44 | händelse | malKlart | id=aliKvarn del=Dag 1 – Kom igång nasta=kvarn |
| 2:44 | väntar | du | Kvarnen ställer jag bredvid skrivaren, närmast skräpberget. Där finns skräpet. |
| 2:44 | MÅL |  | Ställ kvarnen |
| 2:45 | sak | du | Kvarnen ställer jag bredvid skrivaren, närmast skräpberget. Där finns skräpet. |
| 2:45 | målruta |  | Ställ kvarnen |
| 2:45 | pil |  | Ställ kvarnen |
| 2:45 | notis | tanke | 💭 Kvarnen ställer jag bredvid skrivaren, närmast skräpberget. Där finns skräpet. |
| 2:45 | röst | du | Kvarnen ställer jag bredvid skrivaren, närmast skräpberget. Där finns skräpet. · MÅL |
| 2:48 | kvittens-bock |  | ✓ Köp kvarnen |
| 2:51 | klar | du | Kvarnen ställer jag bredvid skrivaren, närmast skräpberget. Där finns skräpet. |
| 2:59 | sak | foto | Första nyckelringen |
| 2:59 | foto | du | Första nyckelringen |
| 2:59 | händelse | placerat | sak=kvarnen |
| 2:59 | struken | kedja | kvarnStar |
| 2:59 | duns | du | ställs ner |
| 2:59 | händelse | malKlart | id=kvarn del=Dag 1 – Kom igång nasta=flaska |
| 2:59 | väntar | du | Skräp i kvarnen, sen vevar jag. Då blir det tråd. |
| 2:59 | MÅL |  | Gör egen tråd |
| 3:02 | klar | foto | Första nyckelringen |
| 3:03 | målruta |  | Gör egen tråd |
| 3:03 | kvittens-bock |  | ✓ Ställ kvarnen |
| 3:04 | sak | du | Skräp i kvarnen, sen vevar jag. Då blir det tråd. |
| 3:04 | pil |  | Gör egen tråd |
| 3:04 | notis | tanke | 💭 Skräp i kvarnen, sen vevar jag. Då blir det tråd. |
| 3:04 | röst | du | Skräp i kvarnen, sen vevar jag. Då blir det tråd. · MÅL |
| 3:04 | nick |  | nick:10 |
| 3:08 | klar | du | Skräp i kvarnen, sen vevar jag. Då blir det tråd. |
| 3:19 | väntar | info:bra | 3 st i tratten – veva nu! |
| 3:19 | sak | info:bra | 3 st i tratten – veva nu! |
| 3:19 | kvitto-visas | info:bra | 3 st i tratten – veva nu! |
| 3:19 | toast | bra | 3 st i tratten – veva nu! |
| 3:20 | händelse | malKlart | id=flaska del=Dag 1 – Kom igång nasta=egenPrint |
| 3:20 | struken | kedja | trad |
| 3:20 | väntar | du | Kvarnen funkar. Soptippen är en gruva. |
| 3:20 | väntar | du | Min egen tråd. Nu printar jag en nyckelring av den. |
| 3:20 | MÅL |  | Printa med egen tråd |
| 3:21 | klar | info:bra | 3 st i tratten – veva nu! |
| 3:21 | sak | du | Kvarnen funkar. Soptippen är en gruva. |
| 3:21 | kvitto-visas | du | Kvarnen funkar. Soptippen är en gruva. |
| 3:21 | lapp | 📔 Dagbok | Kvarnen funkar. Soptippen är en gruva. |
| 3:21 | dagbokrad | du | Kvarnen funkar. Soptippen är en gruva. |
| 3:21 | notis | dagbok | Kvarnen funkar. Soptippen är en gruva. |
| 3:21 | klar | du | Kvarnen funkar. Soptippen är en gruva. |
| 3:21 | sak | du | Min egen tråd. Nu printar jag en nyckelring av den. |
| 3:21 | målruta |  | Printa med egen tråd |
| 3:21 | pil |  | Printa med egen tråd |
| 3:21 | notis | tanke | 💭 Min egen tråd. Nu printar jag en nyckelring av den. |
| 3:21 | röst | du | Min egen tråd. Nu printar jag en nyckelring av den. · MÅL |
| 3:26 | klar | du | Min egen tråd. Nu printar jag en nyckelring av den. |
| 3:31 | händelse | printStart | sak=nyckelring |
| 3:31 | toast | bra | 🔗 Slangen kopplad |
| 3:36 | toast | guld | ✅ |
| 3:36 | händelse | printKlar | sak=nyckelring n=3 |
| 3:36 | händelse | malKlart | id=egenPrint del=Dag 1 – Kom igång nasta=salj |
| 3:36 | väntar | du | Affären på andra sidan vägen kanske köper sånt här. |
| 3:36 | MÅL |  | Sälj hos Ali |
| 3:36 | målruta |  | Sälj hos Ali |
| 3:36 | sak | du | Affären på andra sidan vägen kanske köper sånt här. |
| 3:36 | pil |  | Sälj hos Ali |
| 3:36 | notis | tanke | 💭 Affären på andra sidan vägen kanske köper sånt här. |
| 3:36 | röst | du | Affären på andra sidan vägen kanske köper sånt här. · MÅL |
| 3:36 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 3:36 | nick |  | nick:12 |
| 3:40 | kvittens-bock |  | ✓ Printa med egen tråd |
| 3:40 | klar | du | Affären på andra sidan vägen kanske köper sånt här. |
| 3:44 | händelse | printStart | sak=nyckelring |
| 3:45 | toast | guld | ✅ |
| 3:45 | händelse | printKlar | sak=nyckelring n=4 |
| 3:45 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 3:47 | händelse | printStart | sak=nyckelring |
| 3:48 | toast | guld | ✅ |
| 3:48 | händelse | printKlar | sak=nyckelring n=5 |
| 3:48 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 3:49 | sak | du | Någon köpte nåt jag gjort. Det här kan funka. |
| 3:49 | notis | tanke | 💭 Någon köpte nåt jag gjort. Det här kan funka. |
| 3:49 | röst | du | Någon köpte nåt jag gjort. Det här kan funka. · STORY |
| 3:49 | väntar | kjelle | God morgon, det är Kjelle på Radio Tippen! Det har flyttat in någon i det gamla skjulet. Med en cykel och en skrivare. Spännande, Gunnar. |
| 3:49 | radio | kjelle | God morgon, det är Kjelle på Radio Tippen! Det har flyttat in någon i det gamla skjulet. Med en cykel och en skrivare. Spännande, Gunnar. |
| 3:49 | skratt | du | Radio-Kjelle |
| 3:52 | klar | du | Någon köpte nåt jag gjort. Det här kan funka. |
| 3:53 | tanke | du | Vem är Gunnar? |
| 3:53 | väntar | du | Vem är Gunnar? |
| 3:54 | sak | kjelle | God morgon, det är Kjelle på Radio Tippen! Det har flyttat in någon i det gamla skjulet. Med en cykel och en skrivare. Spännande, Gunnar. |
| 3:54 | notis |  | 📻 Radio Tippen: God morgon, det är Kjelle på Radio Tippen! Det har flyttat in någon i det gamla skjulet. Med en cykel och en skrivare. Spännande, Gunnar. |
| 3:54 | röst | kjelle | God morgon, det är Kjelle på Radio Tippen! Det har flyttat in någon i det gamla skjulet. Med en cykel och en skrivare. Spännande, Gunnar. · REAKTION |
| 4:06 | klar | kjelle | God morgon, det är Kjelle på Radio Tippen! Det har flyttat in någon i det gamla skjulet. Med en cykel och en skrivare. Spännande, Gunnar. |
| 4:09 | aliSalt | ali | 45 |
| 4:09 | röst | ali | Nyckelringar igen? Folk tappar sina nycklar hela tiden. Bra affär för oss. · STORY |
| 4:09 | butiksbubbla | ali | Nyckelringar igen? Folk tappar sina nycklar hela tiden. Bra affär för oss. |
| 4:11 | händelse | malKlart | id=salj del=Dag 1 – Kom igång nasta=powerbank |
| 4:11 | paket |  | sms → ge |
| 4:11 | väntar | ali | Ali här. Glömde en sak. Kom tillbaka, jag har nåt åt dig. |
| 4:11 | väntar |  | (läget ändras) |
| 4:11 | MÅL |  | Gå till Ali |
| 4:13 | struken | du | Vem är Gunnar? |
| 4:15 | kvittens-bock |  | ✓ Sälj hos Ali |
| 4:19 | väntar | du | Ali har något åt mig. Jag går över vägen till affären. |
| 4:19 | målruta |  | Gå till Ali |
| 4:19 | sak | du | Ali har något åt mig. Jag går över vägen till affären. |
| 4:19 | pil |  | Gå till Ali |
| 4:19 | notis | tanke | 💭 Ali har något åt mig. Jag går över vägen till affären. |
| 4:19 | röst | du | Ali har något åt mig. Jag går över vägen till affären. · MÅL |
| 4:19 | paket | ali | ali → ge |
| 4:19 | butiksbubbla | ali | Ali här. Jag såg dig cykla. Det ser jobbigt ut. Testa koppla på den här. Bra kunder får bonus. |
| 4:22 | röst | ali | Ali här. Jag såg dig cykla. Det ser jobbigt ut. Testa koppla på den här. Bra kunder får bonus. · STORY |
| 4:23 | klar | du | Ali har något åt mig. Jag går över vägen till affären. |
| 4:31 | skratt | du | powerbanken på cykeln |
| 4:31 | paket |  | tanke |
| 4:31 | tanke | du | Nu sparas lite ström. En nyckelring, typ. Framtiden är här, och den sitter fast med eltejp. |
| 4:31 | väntar | du | Nu sparas lite ström. En nyckelring, typ. Framtiden är här, och den sitter fast med eltejp. |
| 4:31 | monterat | du | byggsats:powerbank |
| 4:31 | händelse | monterat | sak=powerbank |
| 4:31 | sak | du | Nu sparas lite ström. En nyckelring, typ. Framtiden är här, och den sitter fast med eltejp. |
| 4:31 | kvitto-visas | du | Nu sparas lite ström. En nyckelring, typ. Framtiden är här, och den sitter fast med eltejp. |
| 4:31 | notis | tanke | 💭 Nu sparas lite ström. En nyckelring, typ. Framtiden är här, och den sitter fast med eltejp. |
| 4:31 | röst | du | Nu sparas lite ström. En nyckelring, typ. Framtiden är här, och den sitter fast med eltejp. · REAKTION |
| 4:31 | händelse | malKlart | id=powerbank del=Dag 1 – Kom igång nasta=kopGrip |
| 4:31 | paket |  | lapp |
| 4:31 | lapp-kö | 🧺 Ali | Ali här. Nyckelringen sålde. Jag ville bli ingenjör, men fick ta över pappas butik. I natt lät jag en AI rita en skräpgrip åt mig. Kom och titta. |
| 4:31 | väntar | ali | Ali här. Nyckelringen sålde. Jag ville bli ingenjör, men fick ta över pappas butik. I natt lät jag en AI rita en skräpgrip åt mig. Kom och titta. |
| 4:31 | struken | kedja | harRadGrip |
| 4:31 | väntar | du | Med en skräpgrip slipper jag böja mig. Ali har en ritning. |
| 4:31 | MÅL |  | Plocka skräp och mal det |
| 4:34 | målruta |  | Plocka skräp och mal det |
| 4:35 | kvittens-bock |  | ✓ Gå till Ali |
| 4:38 | klar | du | Nu sparas lite ström. En nyckelring, typ. Framtiden är här, och den sitter fast med eltejp. |
| 4:39 | sak | du | Med en skräpgrip slipper jag böja mig. Ali har en ritning. |
| 4:39 | pil |  | Plocka skräp och mal det |
| 4:39 | notis | tanke | 💭 Med en skräpgrip slipper jag böja mig. Ali har en ritning. |
| 4:39 | röst | du | Med en skräpgrip slipper jag böja mig. Ali har en ritning. · MÅL |
| 4:39 | nick |  | nick:14 |
| 4:44 | klar | du | Med en skräpgrip slipper jag böja mig. Ali har en ritning. |
| 4:47 | händelse | printStart | sak=nyckelring |
| 4:48 | toast | fel | Ingen ström – trampa cykeln |
| 4:48 | väntar | notis:Storebrors skrivare: Ingen ström – tramp | Storebrors skrivare: Ingen ström – trampa cykeln |
| 4:48 | toast | guld | ✅ |
| 4:48 | händelse | printKlar | sak=nyckelring n=6 |
| 4:49 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 4:51 | händelse | printStart | sak=nyckelring |
| 4:52 | sak | mamma | Hur kunde du bara gå? Är du ok? Svara när jag ringer! |
| 4:52 | sms | mamma | Hur kunde du bara gå? Är du ok? Svara när jag ringer! |
| 4:52 | sms-bubbla | mamma | Hur kunde du bara gå? Är du ok? Svara när jag ringer! |
| 4:52 | röst | mamma | Hur kunde du bara gå? Är du ok? Svara när jag ringer! · STORY |
| 4:52 | toast | guld | ✅ |
| 4:52 | händelse | printKlar | sak=nyckelring n=7 |
| 4:56 | klar | mamma | Hur kunde du bara gå? Är du ok? Svara när jag ringer! |
| 5:02 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 5:04 | händelse | printStart | sak=nyckelring |
| 5:04 | sak |  | (läget ändras) |
| 5:04 | klar |  | (läget ändras) |
| 5:05 | toast | guld | ✅ |
| 5:05 | händelse | printKlar | sak=nyckelring n=8 |
| 5:15 | sak | notis:Storebrors skrivare: Ingen ström – tramp | Storebrors skrivare: Ingen ström – trampa cykeln |
| 5:15 | notis | fel | Storebrors skrivare: Ingen ström – trampa cykeln |
| 5:17 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 5:17 | klar | notis:Storebrors skrivare: Ingen ström – tramp | Storebrors skrivare: Ingen ström – trampa cykeln |
| 5:25 | paket |  | ali → ge |
| 5:25 | väntar | ali | Du får bonus! 20 kr extra. Säg inget till min fru. |
| 5:25 | väntar |  | (läget ändras) |
| 5:25 | aliSalt | ali | 15 |
| 5:25 | aliSalt | ali | 15 |
| 5:25 | aliSalt | ali | 15 |
| 5:26 | sak | ali | Du får bonus! 20 kr extra. Säg inget till min fru. |
| 5:26 | notis |  | Ali: ”Du får bonus! 20 kr extra. Säg inget till min fru.” |
| 5:26 | röst | ali | Du får bonus! 20 kr extra. Säg inget till min fru. · REAKTION |
| 5:30 | klar | ali | Du får bonus! 20 kr extra. Säg inget till min fru. |
| 5:32 | sak |  | (läget ändras) |
| 5:32 | klar |  | (läget ändras) |
| 5:38 | sak | ali | Ali här. Glömde en sak. Kom tillbaka, jag har nåt åt dig. |
| 5:38 | sms | ali | Ali här. Glömde en sak. Kom tillbaka, jag har nåt åt dig. |
| 5:38 | sms-bubbla | ali | Ali här. Glömde en sak. Kom tillbaka, jag har nåt åt dig. |
| 5:38 | röst | ali | Ali här. Glömde en sak. Kom tillbaka, jag har nåt åt dig. · STORY |
| 5:39 | händelse | printStart | sak=nyckelring |
| 5:40 | toast | guld | ✅ |
| 5:40 | händelse | printKlar | sak=nyckelring n=9 |
| 5:41 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 5:43 | händelse | printStart | sak=nyckelring |
| 5:43 | klar | ali | Ali här. Glömde en sak. Kom tillbaka, jag har nåt åt dig. |
| 5:44 | toast | guld | ✅ |
| 5:44 | händelse | printKlar | sak=nyckelring n=10 |
| 5:45 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 5:47 | händelse | printStart | sak=nyckelring |
| 5:49 | toast | guld | ✅ |
| 5:49 | händelse | printKlar | sak=nyckelring n=11 |
| 5:49 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 5:56 | aliSalt | ali | 15 |
| 5:56 | aliSalt | ali | 15 |
| 5:57 | aliSalt | ali | 15 |
| 6:05 | händelse | printStart | sak=nyckelring |
| 6:06 | toast | guld | ✅ |
| 6:06 | händelse | printKlar | sak=nyckelring n=12 |
| 6:07 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 6:09 | händelse | printStart | sak=nyckelring |
| 6:10 | toast | guld | ✅ |
| 6:10 | händelse | printKlar | sak=nyckelring n=13 |
| 6:11 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 6:13 | händelse | printStart | sak=nyckelring |
| 6:14 | toast | guld | ✅ |
| 6:14 | händelse | printKlar | sak=nyckelring n=14 |
| 6:15 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 6:22 | aliSalt | ali | 15 |
| 6:23 | aliSalt | ali | 15 |
| 6:23 | aliSalt | ali | 15 |
| 6:23 | sak | ali | Ali här. Nyckelringen sålde. Jag ville bli ingenjör, men fick ta över pappas butik. I natt lät jag en AI rita en skräpgrip åt mig. Kom och titta. |
| 6:23 | sms | ali | Ali här. Nyckelringen sålde. Jag ville bli ingenjör, men fick ta över pappas butik. I natt lät jag en AI rita en skräpgrip åt mig. Kom och titta. |
| 6:23 | sms-bubbla | ali | Ali här. Nyckelringen sålde. Jag ville bli ingenjör, men fick ta över pappas butik. I natt lät jag en AI rita en skräpgrip åt mig. Kom och titta. |
| 6:23 | röst | ali | Ali här. Nyckelringen sålde. Jag ville bli ingenjör, men fick ta över pappas butik. I natt lät jag en AI rita en skräpgrip åt mig. Kom och titta. · STORY |
| 6:35 | klar | ali | Ali här. Nyckelringen sålde. Jag ville bli ingenjör, men fick ta över pappas butik. I natt lät jag en AI rita en skräpgrip åt mig. Kom och titta. |
| 6:44 | händelse | printStart | sak=nyckelring |
| 6:45 | toast | guld | ✅ |
| 6:45 | händelse | printKlar | sak=nyckelring n=15 |
| 6:46 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 6:48 | händelse | printStart | sak=nyckelring |
| 6:48 | toast | fel | Ingen ström – trampa cykeln |
| 6:50 | toast | guld | ✅ |
| 6:50 | händelse | printKlar | sak=nyckelring n=16 |
| 6:50 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 6:52 | händelse | printStart | sak=nyckelring |
| 6:53 | toast | guld | ✅ |
| 6:53 | händelse | printKlar | sak=nyckelring n=17 |
| 6:54 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 7:01 | aliSalt | ali | 15 |
| 7:01 | aliSalt | ali | 15 |
| 7:01 | aliSalt | ali | 15 |
| 7:10 | händelse | printStart | sak=nyckelring |
| 7:11 | toast | guld | ✅ |
| 7:11 | händelse | printKlar | sak=nyckelring n=18 |
| 7:12 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 7:19 | aliSalt | ali | 15 |
| 7:37 | händelse | printStart | sak=nyckelring |
| 7:38 | toast | guld | ✅ |
| 7:38 | händelse | printKlar | sak=nyckelring n=19 |
| 7:39 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 7:44 | upplåst | bara | grip |
| 7:44 | brott | RESERV | grip (bara 4 av 6) |
| 7:44 | händelse | upplast | id=grip flask=bara |
| 7:47 | aliSalt | ali | 15 |
| 7:52 | väntar | bud | (tips) |
| 7:52 | sak | bud | (tips) |
| 7:52 | väntar | du | Jag har pengar nu. Hos Ali kan jag köpa uppgraderingar – bära mer eller printa snabbare. |
| 7:53 | klar | bud | (tips) |
| 7:54 | händelse | printStart | sak=nyckelring |
| 7:55 | sak | du | Jag har pengar nu. Hos Ali kan jag köpa uppgraderingar – bära mer eller printa snabbare. |
| 7:55 | röst | du | Jag har pengar nu. Hos Ali kan jag köpa uppgraderingar – bära mer eller printa snabbare. · MÅL |
| 7:55 | toast | guld | ✅ |
| 7:55 | händelse | printKlar | sak=nyckelring n=20 |
| 7:56 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 8:02 | klar | du | Jag har pengar nu. Hos Ali kan jag köpa uppgraderingar – bära mer eller printa snabbare. |
| 8:04 | aliSalt | ali | 15 |
| 8:07 | toast | guld | 3D-modell köpt – printa skräpgrip på skrivaren |
| 8:07 | händelse | kopt | sak=grip |
| 8:07 | röst | ali | Bra val. 3D-modellen är din. Den räcker till en. · STORY |
| 8:07 | butiksbubbla | ali | Bra val. 3D-modellen är din. Den räcker till en. |
| 8:08 | händelse | malKlart | id=kopGrip del=Dag 1 – Kom igång nasta=printGrip |
| 8:08 | väntar | du | Min första 3D-modell! Jag printar inte bara saker – jag printar maskiner. |
| 8:09 | MÅL |  | Printa skräpgripen |
| 8:09 | sak | du | Min första 3D-modell! Jag printar inte bara saker – jag printar maskiner. |
| 8:09 | kvitto-visas | du | Min första 3D-modell! Jag printar inte bara saker – jag printar maskiner. |
| 8:09 | lapp | 📔 Dagbok | Min första 3D-modell! Jag printar inte bara saker – jag printar maskiner. |
| 8:09 | dagbokrad | du | Min första 3D-modell! Jag printar inte bara saker – jag printar maskiner. |
| 8:09 | notis | dagbok | Min första 3D-modell! Jag printar inte bara saker – jag printar maskiner. |
| 8:10 | klar | du | Min första 3D-modell! Jag printar inte bara saker – jag printar maskiner. |
| 8:10 | målruta |  | Printa skräpgripen |
| 8:10 | sak | du | (nytt mål i rutan) |
| 8:10 | pil |  | Printa skräpgripen |
| 8:10 | klar | du | (nytt mål i rutan) |
| 8:19 | händelse | printStart | sak=byggsats:grip |
| 8:20 | toast | fel | Ingen ström – trampa cykeln |
| 8:22 | händelse | printKlar | sak=byggsats:grip n=1 |
| 8:22 | toast | guld | ✅ |
| 8:36 | väntar | info:guld | Klicka för att ta på dig skräpgrip |
| 8:36 | händelse | tagitUrPrint | sak=byggsats:grip n=1 |
| 8:36 | paket |  | sms |
| 8:36 | väntar | ali | Ali här. Jag såg Skräpgrip på avstånd. Ett streck blev lite snett. Mitt fel. Vackert ändå. |
| 8:36 | struken | kedja | grip |
| 8:36 | sak | info:guld | Klicka för att ta på dig skräpgrip |
| 8:36 | kvitto-visas | info:guld | Klicka för att ta på dig skräpgrip |
| 8:36 | toast | guld | Klicka för att ta på dig skräpgrip |
| 8:38 | klar | info:guld | Klicka för att ta på dig skräpgrip |
| 8:40 | väntar | info:guld | 🦾 Skräpgripen sitter! Bär 6, lättare att sikta, plockar när du går nära. |
| 8:40 | tog på | du | byggsats:grip |
| 8:40 | händelse | monterat | sak=grip |
| 8:40 | sak | info:guld | 🦾 Skräpgripen sitter! Bär 6, lättare att sikta, plockar när du går nära. |
| 8:40 | kvitto-visas | info:guld | 🦾 Skräpgripen sitter! Bär 6, lättare att sikta, plockar när du går nära. |
| 8:40 | toast | guld | 🦾 Skräpgripen sitter! Bär 6, lättare att sikta, plockar när du går nära. |
| 8:40 | händelse | malKlart | id=printGrip del=Dag 1 – Kom igång nasta=krukaD1 |
| 8:40 | väntar | du | Ali vill ha krukor. Jag printar en blomkruka. |
| 8:40 | MÅL |  | Printa och sälj nyckelringar |
| 8:40 | upplåst | inkomst | kruka |
| 8:40 | brott | UPPLÅST | kruka (inkomst 20 av 6) |
| 8:40 | händelse | upplast | id=kruka flask=inkomst |
| 8:40 | paket |  | tanke → sms |
| 8:40 | tanke | du | Nyckelringar, nyckelringar. Ali kan inte vilja ha fler. |
| 8:40 | väntar | du | Nyckelringar, nyckelringar. Ali kan inte vilja ha fler. |
| 8:40 | väntar | ali | Prova en kruka. Folk köper krukor. Ingen vet varför. |
| 8:40 | skratt | ali | Prova en kruka. Folk köper krukor. Ingen |
| 8:42 | klar | info:guld | 🦾 Skräpgripen sitter! Bär 6, lättare att sikta, plockar när du går nära. |
| 8:43 | målruta |  | Köp krukreceptet |
| 8:44 | kvittens-bock |  | ✓ Printa skräpgripen |
| 8:44 | sak | du | Ali vill ha krukor. Jag printar en blomkruka. |
| 8:44 | pil |  | Köp krukreceptet |
| 8:44 | notis | tanke | 💭 Ali vill ha krukor. Jag printar en blomkruka. |
| 8:44 | röst | du | Ali vill ha krukor. Jag printar en blomkruka. · MÅL |
| 8:48 | klar | du | Ali vill ha krukor. Jag printar en blomkruka. |
| 8:48 | händelse | kopt | sak=kruka |
| 8:48 | röst | ali | Bra val. Folk köper sånt. Jag vet inte varför. · STORY |
| 8:48 | butiksbubbla | ali | Blomkruka? Bra val. Folk köper sånt. Jag vet inte varför. |
| 8:57 | händelse | printStart | sak=kruka |
| 8:59 | sak | ali | Ali här. Jag såg Skräpgrip på avstånd. Ett streck blev lite snett. Mitt fel. Vackert ändå. |
| 8:59 | sms | ali | Ali här. Jag såg Skräpgrip på avstånd. Ett streck blev lite snett. Mitt fel. Vackert ändå. |
| 8:59 | sms-bubbla | ali | Ali här. Jag såg Skräpgrip på avstånd. Ett streck blev lite snett. Mitt fel. Vackert ändå. |
| 8:59 | röst | ali | Ali här. Jag såg Skräpgrip på avstånd. Ett streck blev lite snett. Mitt fel. Vackert ändå. · REAKTION |
| 9:00 | toast | guld | ✅ |
| 9:00 | händelse | printKlar | sak=kruka n=1 |
| 9:00 | kvittens | du | En kruka. Mamma skulle bli så stolt. Hon får inte veta. |
| 9:00 | väntar | du | En kruka. Mamma skulle bli så stolt. Hon får inte veta. |
| 9:00 | händelse | malKlart | id=krukaD1 del=Dag 1 – Kom igång nasta=saljKruka |
| 9:00 | väntar | du | Ali gillar krukor. Han sa det själv. |
| 9:00 | MÅL |  | Sälj blomkrukan |
| 9:00 | händelse | tagitUrPrint | sak=kruka n=1 |
| 9:03 | målruta |  | Sälj blomkrukan |
| 9:07 | klar | ali | Ali här. Jag såg Skräpgrip på avstånd. Ett streck blev lite snett. Mitt fel. Vackert ändå. |
| 9:07 | sak | du | Ali gillar krukor. Han sa det själv. |
| 9:07 | pil |  | Sälj blomkrukan |
| 9:07 | notis | tanke | 💭 Ali gillar krukor. Han sa det själv. |
| 9:07 | röst | du | Ali gillar krukor. Han sa det själv. · MÅL |
| 9:10 | klar | du | Ali gillar krukor. Han sa det själv. |
| 9:10 | sak | du | En kruka. Mamma skulle bli så stolt. Hon får inte veta. |
| 9:10 | notis | tanke | 💭 En kruka. Mamma skulle bli så stolt. Hon får inte veta. |
| 9:10 | röst | du | En kruka. Mamma skulle bli så stolt. Hon får inte veta. · STORY |
| 9:14 | klar | du | En kruka. Mamma skulle bli så stolt. Hon får inte veta. |
| 9:19 | aliSalt | ali | 70 |
| 9:20 | struken | kedja | morkt |
| 9:20 | händelse | malKlart | id=saljKruka del=Dag 1 – Kom igång nasta=kopSang |
| 9:20 | väntar | du | Jag kan inte sova på betongen en natt till. Ali har en säng. Typ. |
| 9:20 | MÅL |  | Köp sängen |
| 9:20 | målruta |  | Köp sängen |
| 9:21 | sak | du | Jag kan inte sova på betongen en natt till. Ali har en säng. Typ. |
| 9:21 | pil |  | Köp sängen |
| 9:21 | notis | tanke | 💭 Jag kan inte sova på betongen en natt till. Ali har en säng. Typ. |
| 9:21 | röst | du | Jag kan inte sova på betongen en natt till. Ali har en säng. Typ. · MÅL |
| 9:24 | kvittens-bock |  | ✓ Sälj blomkrukan |
| 9:26 | klar | du | Jag kan inte sova på betongen en natt till. Ali har en säng. Typ. |
| 9:30 | händelse | kopt | sak=sang |
| 9:30 | röst | ali | Sov gott, min vän. · STORY |
| 9:30 | butiksbubbla | ali | Sov gott, min vän. |
| 9:31 | händelse | malKlart | id=kopSang del=Dag 1 – Kom igång nasta=printSang |
| 9:31 | väntar | du | Sängen tar lång tid. Den är värd det. |
| 9:31 | målruta |  | Printa sängen |
| 9:31 | MÅL |  | Printa sängen |
| 9:32 | sak | du | Sängen tar lång tid. Den är värd det. |
| 9:32 | pil |  | Printa sängen |
| 9:32 | notis | tanke | 💭 Sängen tar lång tid. Den är värd det. |
| 9:32 | röst | du | Sängen tar lång tid. Den är värd det. · MÅL |
| 9:35 | klar | du | Sängen tar lång tid. Den är värd det. |
| 9:35 | kvittens-bock |  | ✓ Köp sängen |
| 9:56 | sak | du | Nyckelringar, nyckelringar. Ali kan inte vilja ha fler. |
| 9:56 | notis | tanke | 💭 Nyckelringar, nyckelringar. Ali kan inte vilja ha fler. |
| 9:56 | röst | du | Nyckelringar, nyckelringar. Ali kan inte vilja ha fler. · STORY |
| 9:59 | händelse | printStart | sak=sang |
| 10:00 | toast | fel | Ingen ström – trampa cykeln |
| 10:01 | klar | du | Nyckelringar, nyckelringar. Ali kan inte vilja ha fler. |
| 10:05 | toast | fel | Slut på tråd – mal mer så fortsätter den |
| 10:05 | väntar | notis:Storebrors skrivare: Slut på tråd – mal  | Storebrors skrivare: Slut på tråd – mal mer så fortsätter den |
| 10:09 | sak | ali | Prova en kruka. Folk köper krukor. Ingen vet varför. |
| 10:09 | skratt | ali | Prova en kruka. Folk köper krukor. Ingen |
| 10:09 | sms | ali | Prova en kruka. Folk köper krukor. Ingen vet varför. |
| 10:09 | skratt | ali | Prova en kruka. Folk köper krukor. Ingen |
| 10:09 | sms-bubbla | ali | Prova en kruka. Folk köper krukor. Ingen vet varför. |
| 10:09 | skratt | ali | Prova en kruka. Folk köper krukor. Ingen |
| 10:09 | röst | ali | Prova en kruka. Folk köper krukor. Ingen vet varför. · STORY |
| 10:13 | klar | ali | Prova en kruka. Folk köper krukor. Ingen vet varför. |
| 10:13 | skratt | ali | Prova en kruka. Folk köper krukor. Ingen |
| 10:25 | toast | guld | ✅ |
| 10:25 | händelse | printKlar | sak=sang n=1 |
| 10:28 | händelse | tagitUrPrint | sak=sang n=1 |
| 10:28 | struken | kedja | sang |
| 10:28 | händelse | malKlart | id=printSang del=Dag 1 – Kom igång nasta=sov1 |
| 10:28 | paket |  | lapp |
| 10:28 | lapp | 📔 Dagbok | Dag 1. Nitton år. Inget mer tjat. Gården är full av skräp. I morgon. |
| 10:28 | kvallsrad | du | Nitton år. Inget mer tjat. Gården är full av skräp. I morgon. |
| 10:28 | väntar | du | Sängen ska in i skjulet. Sen sover jag. |
| 10:28 | målruta |  | Sängen i skjulet |
| 10:28 | MÅL |  | Sängen i skjulet |
| 10:28 | sak | du | Sängen ska in i skjulet. Sen sover jag. |
| 10:28 | pil |  | Sängen i skjulet |
| 10:28 | notis | tanke | 💭 Sängen ska in i skjulet. Sen sover jag. |
| 10:28 | röst | du | Sängen ska in i skjulet. Sen sover jag. · MÅL |
| 10:31 | klar | du | Sängen ska in i skjulet. Sen sover jag. |
| 10:40 | nattkort | du | 🌙 Dag 1 är slut. God natt. zzz… i en riktig säng Nitton år. Inget mer tjat. Gården är full av skräp. I morgon. DAGENS PRINTAR Nyckelring × 20 Blomkruka × 1 Sän |

<details><summary>Botens handlingar dag 1</summary>

- 0:12 gå till brädhögen (3 m) (5 kr)
- 0:29 gå till cykeln vid vägen (2 m) (5 kr)
- 0:46 gå till rutan i linje 1 (13 m) (5 kr)
- 1:30 gå till cykeln (lyfter den) (13 m) (5 kr)
- 1:41 gå till cykelns plats (11 m) (5 kr)
- 1:44 gå till skrivaren (2 m) (5 kr)
- 1:45 printar Nyckelring (5 kr)
- 1:52 tar ut 1 st ur skrivaren (5 kr)
- 1:56 printar Nyckelring (sista av storebrors rulle) (5 kr)
- 2:20 tar ut 1 st ur skrivaren (5 kr)
- 2:25 gå till Ali (26 m) (5 kr)
- 2:25 öppnar Alis butik – sälja de två nyckelringarna (5 kr)
- 2:28 säljer hos Ali: +30 kr (35 kr)
- 2:41 öppnar Alis butik – köpa kvarnen (35 kr)
- 2:43 köper gammalkvarn för 30 kr (5 kr)
- 2:44 köpte kvarnen (5 kr)
- 2:59 gå till kvarnens ruta (28 m) (5 kr)
- 3:16 plockar 3 skräp på gården (bär max 3) (5 kr)
- 3:19 gå till kvarnen (13 m) (5 kr)
- 3:28 gå till cykeln (2 m) (5 kr)
- 3:31 printar Nyckelring (5 kr)
- 3:37 tar ut 1 st ur skrivaren (5 kr)
- 3:44 printar Nyckelring (5 kr)
- 3:46 tar ut 1 st ur skrivaren (5 kr)
- 3:47 printar Nyckelring (5 kr)
- 3:49 tar ut 1 st ur skrivaren (5 kr)
- 4:08 gå till Ali (27 m) (5 kr)
- 4:08 öppnar Alis butik – sälja nyckelringar (5 kr)
- 4:10 säljer hos Ali: +45 kr (50 kr)
- 4:19 öppnar Alis butik – Ali (powerbanken) (50 kr)
- 4:31 gå till koppla powerbanken till cykeln (24 m) (50 kr)
- 4:44 tjänar pengar till väntar på flaskhalsen för grip: 50/90 kr → printar nyckelring (15 kr) (50 kr)
- 4:45 gå till skrivaren (2 m) (50 kr)
- 4:47 printar Nyckelring (50 kr)
- 4:49 tar ut 1 st ur skrivaren (50 kr)
- 4:51 printar Nyckelring (50 kr)
- 4:56 plockar 3 skräp på gården (bär max 3) (50 kr)
- 4:59 gå till kvarnen (13 m) (50 kr)
- 5:02 gå till skrivaren (1 m) (50 kr)
- 5:03 tar ut 1 st ur skrivaren (50 kr)
- 5:04 printar Nyckelring (50 kr)
- 5:12 plockar 3 skräp på gården (bär max 3) (50 kr)
- 5:14 gå till kvarnen (14 m) (50 kr)
- 5:17 gå till skrivaren (2 m) (50 kr)
- 5:17 tar ut 1 st ur skrivaren (50 kr)
- 5:23 gå till Ali (28 m) (50 kr)
- 5:23 öppnar Alis butik – sälja (50 kr)
- 5:25 säljer hos Ali: +45 kr (95 kr)
- 5:32 tjänar pengar till väntar på flaskhalsen för grip: 115/155 kr → printar nyckelring (15 kr) (115 kr)
- 5:37 gå till skrivaren (25 m) (115 kr)
- 5:39 printar Nyckelring (115 kr)
- 5:41 tar ut 1 st ur skrivaren (115 kr)
- 5:43 printar Nyckelring (115 kr)
- 5:45 tar ut 1 st ur skrivaren (115 kr)
- 5:47 printar Nyckelring (115 kr)
- 5:48 gå till cykeln (1 m) (115 kr)
- 5:49 tar ut 1 st ur skrivaren (115 kr)
- 5:55 gå till Ali (25 m) (115 kr)
- 5:55 öppnar Alis butik – sälja (115 kr)
- 5:57 säljer hos Ali: +45 kr (160 kr)
- 5:59 tjänar pengar till väntar på flaskhalsen för grip: 160/200 kr → printar nyckelring (15 kr) (160 kr)
- 6:04 gå till skrivaren (25 m) (160 kr)
- 6:05 printar Nyckelring (160 kr)
- 6:08 tar ut 1 st ur skrivaren (160 kr)
- 6:09 printar Nyckelring (160 kr)
- 6:12 tar ut 1 st ur skrivaren (160 kr)
- 6:13 printar Nyckelring (160 kr)
- 6:16 tar ut 1 st ur skrivaren (160 kr)
- 6:21 gå till Ali (25 m) (160 kr)
- 6:21 öppnar Alis butik – sälja (160 kr)
- 6:23 säljer hos Ali: +45 kr (205 kr)
- 6:37 tjänar pengar till väntar på flaskhalsen för grip: 205/245 kr → printar nyckelring (15 kr) (205 kr)
- 6:42 gå till skrivaren (25 m) (205 kr)
- 6:44 printar Nyckelring (205 kr)
- 6:46 tar ut 1 st ur skrivaren (205 kr)
- 6:48 printar Nyckelring (205 kr)
- 6:49 gå till cykeln (1 m) (205 kr)
- 6:50 tar ut 1 st ur skrivaren (205 kr)
- 6:52 printar Nyckelring (205 kr)
- 6:54 tar ut 1 st ur skrivaren (205 kr)
- 6:59 gå till Ali (25 m) (205 kr)
- 6:59 öppnar Alis butik – sälja (205 kr)
- 7:02 säljer hos Ali: +45 kr (250 kr)
- 7:03 tjänar pengar till väntar på flaskhalsen för grip: 250/290 kr → printar nyckelring (15 kr) (250 kr)
- 7:09 gå till skrivaren (25 m) (250 kr)
- 7:10 printar Nyckelring (250 kr)
- 7:13 tar ut 1 st ur skrivaren (250 kr)
- 7:18 gå till Ali (25 m) (250 kr)
- 7:18 öppnar Alis butik – sälja (250 kr)
- 7:19 säljer hos Ali: +15 kr (265 kr)
- 7:20 tjänar pengar till väntar på flaskhalsen för grip: 265/290 kr → printar nyckelring (15 kr) (265 kr)
- 7:26 plockar 3 skräp på gården (bär max 3) (265 kr)
- 7:32 gå till kvarnen (29 m) (265 kr)
- 7:36 gå till skrivaren (1 m) (265 kr)
- 7:37 printar Nyckelring (265 kr)
- 7:40 tar ut 1 st ur skrivaren (265 kr)
- 7:45 gå till Ali (28 m) (265 kr)
- 7:45 öppnar Alis butik – sälja (265 kr)
- 7:47 säljer hos Ali: +15 kr (280 kr)
- 7:48 tjänar pengar till väntar på flaskhalsen för grip: 280/290 kr → printar nyckelring (15 kr) (280 kr)
- 7:53 gå till skrivaren (25 m) (280 kr)
- 7:54 printar Nyckelring (280 kr)
- 7:57 tar ut 1 st ur skrivaren (280 kr)
- 8:02 gå till Ali (25 m) (280 kr)
- 8:02 öppnar Alis butik – sälja (280 kr)
- 8:04 säljer hos Ali: +15 kr (295 kr)
- 8:06 öppnar Alis butik – köpa skräpgrip (295 kr)
- 8:08 köper grip för 50 kr (245 kr)
- 8:17 gå till skrivaren (25 m) (245 kr)
- 8:19 printar Skräpgrip (245 kr)
- 8:20 gå till cykeln (1 m) (245 kr)
- 8:29 plockar 3 skräp på gården (bär max 3) (245 kr)
- 8:33 gå till kvarnen (19 m) (245 kr)
- 8:36 gå till skrivaren (2 m) (245 kr)
- 8:36 tar ut 1 st ur skrivaren (245 kr)
- 8:40 tar på grip (245 kr)
- 8:46 gå till Ali (28 m) (245 kr)
- 8:46 öppnar Alis butik – köpa receptet blomkruka (245 kr)
- 8:49 köper kruka för 40 kr (205 kr)
- 8:56 gå till skrivaren (25 m) (205 kr)
- 8:57 printar Blomkruka (205 kr)
- 9:01 tar ut 1 st ur skrivaren (205 kr)
- 9:18 gå till Ali (25 m) (205 kr)
- 9:18 öppnar Alis butik – sälja krukan (205 kr)
- 9:20 säljer hos Ali: +70 kr (275 kr)
- 9:28 öppnar Alis butik – köpa sängen (275 kr)
- 9:30 köper sang för 60 kr (215 kr)
- 9:48 plockar 6 skräp på gården (bär max 6) (215 kr)
- 9:56 gå till kvarnen (35 m) (215 kr)
- 9:57 gå till skrivaren (1 m) (215 kr)
- 9:59 printar Säng (215 kr)
- 10:00 gå till cykeln (2 m) (215 kr)
- 10:17 plockar 6 skräp på gården (bär max 6) (215 kr)
- 10:24 gå till kvarnen (33 m) (215 kr)
- 10:28 gå till skrivaren (1 m) (215 kr)
- 10:28 tar ut 1 st ur skrivaren (215 kr)
- 10:38 gå till sängplatsen i skjulet (21 m) (215 kr)

</details>

## Dag 2

| Tid | Källa | Vem | Text |
|---|---|---|---|
| 10:40 | vara | ali | kruka |
| 10:40 | händelse | malKlart | id=sov1 del=Dag 1 – Kom igång nasta=kopMotor |
| 10:40 | MÅL |  | Mal skräp, printa och sälj |
| 10:42 | sopsack | rolf | Sopsäckarna landade på gården |
| 10:42 | paket |  | tanke → ge |
| 10:42 | tanke | du | Hmm, vad kastade gubben ut ur sopbilen? Jag går och kollar. |
| 10:42 | väntar | du | Hmm, vad kastade gubben ut ur sopbilen? Jag går och kollar. |
| 10:42 | väntar |  | (läget ändras) |
| 0:01 | händelse | dagenBorjar | dag=2 |
| 0:01 | meddelande | du | Dag 2. 20 dagar till jul. Utan dörr blåser natten rakt in. |
| 0:01 | dagbokkort | du | Tippen bredvid · Dag 2. 20 dagar till jul. Utan dörr blåser natten rakt in. |
| 0:01 | röst | du | Dag 2. 20 dagar till jul. Tippen bredvid. Utan dörr blåser natten rakt in. · STORY |
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
| 0:09 | väntar | notis:Blomkruka · +50 % | Blomkruka · +50 % |
| 0:12 | målruta |  | Mal skräp, printa och sälj |
| 0:13 | sak | du | Vevandet tar på armarna. Ali har en motor till kvarnen. |
| 0:13 | pil |  | Mal skräp, printa och sälj |
| 0:13 | notis | tanke | 💭 Vevandet tar på armarna. Ali har en motor till kvarnen. |
| 0:13 | röst | du | Vevandet tar på armarna. Ali har en motor till kvarnen. · MÅL |
| 0:18 | klar | du | Vevandet tar på armarna. Ali har en motor till kvarnen. |
| 0:20 | struken | notis:Storebrors skrivare: Slut på tråd – mal  | Storebrors skrivare: Slut på tråd – mal mer så fortsätter den |
| 0:20 | struken | notis:Första natten i en riktig säng. Jag prin | Första natten i en riktig säng. Jag printade den själv. |
| 0:20 | sak | notis:Blomkruka · +50 % | Blomkruka · +50 % |
| 0:20 | notis |  | Blomkruka · +50 % |
| 0:23 | klar | notis:Blomkruka · +50 % | Blomkruka · +50 % |
| 0:24 | händelse | printStart | sak=kruka |
| 0:25 | väntar | foto | Egen säng |
| 0:25 | paket |  | tanke |
| 0:25 | tanke | du | Tänk att jag ska få sova i min egen säng. |
| 0:25 | väntar | du | Tänk att jag ska få sova i min egen säng. |
| 0:25 | väntar | ali | Ali här. Såg skylten. Stavningen är rätt. Det är mer än många. |
| 0:26 | toast | fel | Ingen ström – trampa cykeln |
| 0:28 | toast | guld | ✅ |
| 0:28 | händelse | printKlar | sak=kruka n=2 |
| 0:29 | händelse | tagitUrPrint | sak=kruka n=1 |
| 0:34 | röst | ali | Du är den enda här som vet vad en tolerans är. Det värmer. Lite. Inte mycket. · STORY |
| 0:34 | butiksbubbla | ali | Du är den enda här som vet vad en tolerans är. Det värmer. Lite. Inte mycket. |
| 0:36 | aliSalt | ali | 105 |
| 0:36 | butiksbubbla | ali | Precis vad jag ville ha idag. 105 kr – med extra. |
| 0:36 | väntar | ali | Precis det jag ville ha idag, min vän. |
| 0:38 | sak | ali | Precis det jag ville ha idag, min vän. |
| 0:38 | röst | ali | Precis det jag ville ha idag, min vän. · STORY |
| 0:41 | klar | ali | Precis det jag ville ha idag, min vän. |
| 0:50 | händelse | printStart | sak=kruka |
| 0:50 | skratt | du | falsk tuta |
| 0:52 | toast | guld | ✅ |
| 0:52 | händelse | printKlar | sak=kruka n=3 |
| 0:53 | händelse | tagitUrPrint | sak=kruka n=1 |
| 1:00 | aliSalt | ali | 105 |
| 1:05 | lapp | 📔 Dagbok | Sopbilen tippade en ny last. Allt det skräpet – och grinden är låst. |
| 1:05 | dagbokrad | du | Sopbilen tippade en ny last. Allt det skräpet – och grinden är låst. |
| 1:05 | väntar | notis:Sopbilen tippade en ny last. Allt det sk | Sopbilen tippade en ny last. Allt det skräpet – och grinden är låst. |
| 1:05 | sak | notis:Sopbilen tippade en ny last. Allt det sk | Sopbilen tippade en ny last. Allt det skräpet – och grinden är låst. |
| 1:05 | notis | dagbok | Sopbilen tippade en ny last. Allt det skräpet – och grinden är låst. |
| 1:08 | klar | notis:Sopbilen tippade en ny last. Allt det sk | Sopbilen tippade en ny last. Allt det skräpet – och grinden är låst. |
| 1:25 | paket |  | tanke |
| 1:25 | tanke | du | Jaha. En kalsong. Använd. |
| 1:25 | väntar | du | Jaha. En kalsong. Använd. |
| 1:25 | skratt | du | kvarnen spottar |
| 1:27 | händelse | printStart | sak=kruka |
| 1:29 | toast | fel | Ingen ström – trampa cykeln |
| 1:32 | toast | guld | ✅ |
| 1:32 | händelse | printKlar | sak=kruka n=4 |
| 1:32 | händelse | tagitUrPrint | sak=kruka n=1 |
| 1:33 | sak | du | Hmm, vad kastade gubben ut ur sopbilen? Jag går och kollar. |
| 1:33 | notis | tanke | 💭 Hmm, vad kastade gubben ut ur sopbilen? Jag går och kollar. |
| 1:33 | röst | du | Hmm, vad kastade gubben ut ur sopbilen? Jag går och kollar. · STORY |
| 1:38 | klar | du | Hmm, vad kastade gubben ut ur sopbilen? Jag går och kollar. |
| 1:39 | aliSalt | ali | 105 |
| 1:43 | väntar | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått generator. Vi tar en låt på det. Den här är till dig, Gunnar. |
| 1:43 | radio | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått generator. Vi tar en låt på det. Den här är till dig, Gunnar. |
| 1:43 | skratt | du | Radio-Kjelle |
| 1:46 | sak |  | (läget ändras) |
| 1:46 | klar |  | (läget ändras) |
| 1:48 | händelse | printStart | sak=kruka |
| 1:50 | sak | foto | Egen säng |
| 1:50 | foto | du | Egen säng |
| 1:51 | toast | guld | ✅ |
| 1:51 | händelse | printKlar | sak=kruka n=5 |
| 1:51 | händelse | tagitUrPrint | sak=kruka n=1 |
| 1:52 | klar | foto | Egen säng |
| 1:58 | aliSalt | ali | 105 |
| 2:00 | sak | du | Tänk att jag ska få sova i min egen säng. |
| 2:00 | notis | tanke | 💭 Tänk att jag ska få sova i min egen säng. |
| 2:00 | röst | du | Tänk att jag ska få sova i min egen säng. · STORY |
| 2:04 | klar | du | Tänk att jag ska få sova i min egen säng. |
| 2:25 | sak | du | Jaha. En kalsong. Använd. |
| 2:25 | notis | tanke | 💭 Jaha. En kalsong. Använd. |
| 2:25 | röst | du | Jaha. En kalsong. Använd. · REAKTION |
| 2:26 | händelse | printStart | sak=kruka |
| 2:28 | klar | du | Jaha. En kalsong. Använd. |
| 2:30 | toast | guld | ✅ |
| 2:30 | händelse | printKlar | sak=kruka n=6 |
| 2:31 | händelse | tagitUrPrint | sak=kruka n=1 |
| 2:38 | aliSalt | ali | 105 |
| 2:46 | sak | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått generator. Vi tar en låt på det. Den här är till dig, Gunnar. |
| 2:46 | notis |  | 📻 Radio Tippen: Radio Tippen, Kjelle här. Skjulet vid tippen har fått generator. Vi tar en låt på det. Den här är till dig, Gunnar. |
| 2:46 | röst | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått generator. Vi tar en låt på det. Den här är till dig, Gunnar. · REAKTION |
| 2:47 | händelse | printStart | sak=kruka |
| 2:50 | toast | guld | ✅ |
| 2:50 | händelse | printKlar | sak=kruka n=7 |
| 2:50 | händelse | tagitUrPrint | sak=kruka n=1 |
| 2:56 | klar | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått generator. Vi tar en låt på det. Den här är till dig, Gunnar. |
| 2:57 | aliSalt | ali | 105 |
| 3:03 | väntar | mamma | Har du frusit än? |
| 3:06 | händelse | printStart | sak=kruka |
| 3:07 | skratt | du | falsk tuta |
| 3:07 | väntar | värld:TUUT! Tjena! | TUUT! Tjena! |
| 3:07 | toast | fel | Ingen ström – trampa cykeln |
| 3:10 | toast | guld | ✅ |
| 3:10 | händelse | printKlar | sak=kruka n=8 |
| 3:10 | händelse | tagitUrPrint | sak=kruka n=1 |
| 3:17 | aliSalt | ali | 105 |
| 3:21 | upplåst | mala | kvarnmotor |
| 3:21 | brott | RESERV | kvarnmotor (mala 16 av 10) |
| 3:21 | händelse | upplast | id=kvarnmotor flask=mala |
| 3:21 | paket |  | sms |
| 3:21 | väntar | ali | Ali här. En motor? Jag har en. Från en gammal tvättmaskin. Den centrifugerar fortfarande om man ber snällt. |
| 3:29 | struken | värld:TUUT! Tjena! | TUUT! Tjena! |
| 3:31 | väntar | mamma | Har du frusit än? |
| 3:49 | händelse | printStart | sak=kruka |
| 3:52 | toast | guld | ✅ |
| 3:52 | händelse | printKlar | sak=kruka n=9 |
| 3:52 | händelse | tagitUrPrint | sak=kruka n=1 |
| 3:59 | sak | ali | Ali här. En motor? Jag har en. Från en gammal tvättmaskin. Den centrifugerar fortfarande om man ber snällt. |
| 3:59 | sms | ali | Ali här. En motor? Jag har en. Från en gammal tvättmaskin. Den centrifugerar fortfarande om man ber snällt. |
| 3:59 | sms-bubbla | ali | Ali här. En motor? Jag har en. Från en gammal tvättmaskin. Den centrifugerar fortfarande om man ber snällt. |
| 3:59 | röst | ali | Ali här. En motor? Jag har en. Från en gammal tvättmaskin. Den centrifugerar fortfarande om man ber snällt. · STORY |
| 4:00 | aliSalt | ali | 105 |
| 4:08 | klar | ali | Ali här. En motor? Jag har en. Från en gammal tvättmaskin. Den centrifugerar fortfarande om man ber snällt. |
| 4:12 | toast | guld | 3D-modell köpt – printa kvarnmotor på skrivaren |
| 4:12 | händelse | kopt | sak=kvarnmotor |
| 4:13 | händelse | malKlart | id=kopMotor del=Dag 2 – Tippen bredvid nasta=monteraMotor |
| 4:13 | struken | kedja | motorKopt |
| 4:13 | väntar | du | Motorn ska sitta där veven sitter. Jag printar den först. |
| 4:13 | målruta |  | Printa kvarnmotorn till kvarnen |
| 4:13 | MÅL |  | Printa kvarnmotorn till kvarnen |
| 4:13 | sak | du | Motorn ska sitta där veven sitter. Jag printar den först. |
| 4:13 | pil |  | Printa kvarnmotorn till kvarnen |
| 4:13 | notis | tanke | 💭 Motorn ska sitta där veven sitter. Jag printar den först. |
| 4:13 | röst | du | Motorn ska sitta där veven sitter. Jag printar den först. · MÅL |
| 4:14 | nick |  | nick:22 |
| 4:17 | kvittens-bock |  | ✓ Köp kvarnmotorn hos Ali (50 kr) |
| 4:18 | klar | du | Motorn ska sitta där veven sitter. Jag printar den först. |
| 4:27 | händelse | printStart | sak=byggsats:kvarnmotor |
| 4:28 | toast | fel | Ingen ström – trampa cykeln |
| 4:31 | händelse | printKlar | sak=byggsats:kvarnmotor n=1 |
| 4:31 | toast | guld | ✅ |
| 4:31 | väntar | info:guld | ⚙️ Kvarnmotorn ligger i handen – klicka på kvarnen för att skruva fast den |
| 4:31 | händelse | tagitUrPrint | sak=byggsats:kvarnmotor n=1 |
| 4:31 | paket |  | sms |
| 4:31 | väntar | ali | Ali här. Ännu en ritning som blev på riktigt: Kvarnmotor. Semesterkassan växer. Livet växer. |
| 4:31 | sak | info:guld | ⚙️ Kvarnmotorn ligger i handen – klicka på kvarnen för att skruva fast den |
| 4:31 | kvitto-visas | info:guld | ⚙️ Kvarnmotorn ligger i handen – klicka på kvarnen för att skruva fast den |
| 4:31 | toast | guld | ⚙️ Kvarnmotorn ligger i handen – klicka på kvarnen för att skruva fast den |
| 4:33 | klar | info:guld | ⚙️ Kvarnmotorn ligger i handen – klicka på kvarnen för att skruva fast den |
| 4:36 | väntar | info:guld | ⚙️ Motorn sitter där veven satt – nu mal kvarnen själv. |
| 4:36 | händelse | monterat | sak=kvarnmotor |
| 4:36 | paket |  | tanke |
| 4:36 | tanke | du | Motorn sitter där veven satt. Mina armar tackar. |
| 4:36 | väntar | du | Motorn sitter där veven satt. Mina armar tackar. |
| 4:36 | monterat | du | byggsats:kvarnmotor |
| 4:36 | händelse | monterat | sak=kvarnmotor |
| 4:36 | sak | info:guld | ⚙️ Motorn sitter där veven satt – nu mal kvarnen själv. |
| 4:36 | kvitto-visas | info:guld | ⚙️ Motorn sitter där veven satt – nu mal kvarnen själv. |
| 4:36 | toast | guld | ⚙️ Motorn sitter där veven satt – nu mal kvarnen själv. |
| 4:36 | händelse | malKlart | id=monteraMotor del=Dag 2 – Tippen bredvid nasta=kopSack |
| 4:36 | struken | du | Motorn sitter där veven satt. Mina armar tackar. |
| 4:36 | väntar | du | Gården är full av skräp. Jag börjar vid skjulet. |
| 4:36 | MÅL |  | Kolla vad som flög ut från sopbilen |
| 4:38 | klar | info:guld | ⚙️ Motorn sitter där veven satt – nu mal kvarnen själv. |
| 4:38 | målruta |  | Kolla vad som flög ut från sopbilen |
| 4:40 | kvittens-bock |  | ✓ Printa kvarnmotorn till kvarnen |
| 4:40 | sak | du | Gården är full av skräp. Jag börjar vid skjulet. |
| 4:40 | pil |  | Kolla vad som flög ut från sopbilen |
| 4:40 | notis | tanke | 💭 Gården är full av skräp. Jag börjar vid skjulet. |
| 4:40 | röst | du | Gården är full av skräp. Jag börjar vid skjulet. · MÅL |
| 4:44 | klar | du | Gården är full av skräp. Jag börjar vid skjulet. |
| 4:49 | paket |  | brev → ge → tanke |
| 4:49 | väntar | rolf | Du sliter ju. Ingen gör så nuförtin. Ta dessa så går dä lättare. / Rolf – ja kör sopbilen å har hand om tippen bredvid. MVH ROLF​ |
| 4:49 | väntar |  | (läget ändras) |
| 4:49 | tanke | du | Rolf… gubben i sopbilen. Han har tippen bredvid. Han verkar schysst. |
| 4:49 | väntar | du | Rolf… gubben i sopbilen. Han har tippen bredvid. Han verkar schysst. |
| 4:49 | sak | rolf | Du sliter ju. Ingen gör så nuförtin. Ta dessa så går dä lättare. / Rolf – ja kör sopbilen å har hand om tippen bredvid. MVH ROLF​ |
| 4:49 | lapp | Lapp från Rolf | Du sliter ju. Ingen gör så nuförtin. Ta dessa så går dä lättare. / Rolf – ja kör sopbilen å har hand om tippen bredvid. MVH ROLF​ |
| 4:49 | röst | rolf | Du sliter ju. Ingen gör så nuförtin. Ta dessa så går dä lättare. / Rolf – ja kör sopbilen å har hand om tippen bredvid. MVH ROLF​ · STORY |
| 5:00 | klar | rolf | Du sliter ju. Ingen gör så nuförtin. Ta dessa så går dä lättare. / Rolf – ja kör sopbilen å har hand om tippen bredvid. MVH ROLF​ |
| 5:02 | väntar | info:guld | 🗑️ Sopsäcken är över axeln! Du bär 10 skräp nu. |
| 5:02 | tog på | du | byggsats:korg |
| 5:02 | händelse | monterat | sak=korg |
| 5:02 | sak | info:guld | 🗑️ Sopsäcken är över axeln! Du bär 10 skräp nu. |
| 5:02 | kvitto-visas | info:guld | 🗑️ Sopsäcken är över axeln! Du bär 10 skräp nu. |
| 5:02 | toast | guld | 🗑️ Sopsäcken är över axeln! Du bär 10 skräp nu. |
| 5:02 | händelse | malKlart | id=kopSack del=Dag 2 – Tippen bredvid nasta=n1-stada-klart-garden |
| 5:02 | händelse | malKlart | id=n1-stada-klart-garden del=Dag 2 – Tippen bredvid nasta=rolf0-brev |
| 5:02 | väntar | du | Gården är STÄDAD, av mig, frivilligt. Mamma skulle aldrig tro det. |
| 5:02 | väntar | du | Vänta på sopbilen. Den lämnar något. |
| 5:02 | MÅL |  | Vänta på sopbilen. Den lämnar något. |
| 5:04 | klar | info:guld | 🗑️ Sopsäcken är över axeln! Du bär 10 skräp nu. |
| 5:04 | sak | du | Gården är STÄDAD, av mig, frivilligt. Mamma skulle aldrig tro det. |
| 5:04 | kvitto-visas | du | Gården är STÄDAD, av mig, frivilligt. Mamma skulle aldrig tro det. |
| 5:04 | lapp | 📔 Dagbok | Gården är STÄDAD, av mig, frivilligt. Mamma skulle aldrig tro det. |
| 5:04 | dagbokrad | du | Gården är STÄDAD, av mig, frivilligt. Mamma skulle aldrig tro det. |
| 5:04 | notis | dagbok | Gården är STÄDAD, av mig, frivilligt. Mamma skulle aldrig tro det. |
| 5:04 | klar | du | Gården är STÄDAD, av mig, frivilligt. Mamma skulle aldrig tro det. |
| 5:04 | struken | ali | Ali här. Ännu en ritning som blev på riktigt: Kvarnmotor. Semesterkassan växer. Livet växer. |
| 5:04 | sak | du | Vänta på sopbilen. Den lämnar något. |
| 5:04 | målruta |  | Vänta på sopbilen. Den lämnar något. |
| 5:04 | pil |  | Vänta på sopbilen. Den lämnar något. |
| 5:04 | röst | du | Vänta på sopbilen. Den lämnar något. · MÅL |
| 5:07 | händelse | printStart | sak=kruka |
| 5:07 | klar | du | Vänta på sopbilen. Den lämnar något. |
| 5:09 | toast | guld | ✅ |
| 5:09 | händelse | printKlar | sak=kruka n=10 |
| 5:09 | sak |  | (läget ändras) |
| 5:10 | händelse | tagitUrPrint | sak=kruka n=1 |
| 5:10 | klar |  | (läget ändras) |
| 5:14 | sak | du | Rolf… gubben i sopbilen. Han har tippen bredvid. Han verkar schysst. |
| 5:14 | notis | tanke | 💭 Rolf… gubben i sopbilen. Han har tippen bredvid. Han verkar schysst. |
| 5:14 | röst | du | Rolf… gubben i sopbilen. Han har tippen bredvid. Han verkar schysst. · STORY |
| 5:17 | aliSalt | ali | 105 |
| 5:19 | klar | du | Rolf… gubben i sopbilen. Han har tippen bredvid. Han verkar schysst. |
| 5:27 | upplåst | skrivare | rullstall |
| 5:27 | brott | UPPLÅST | rullstall (skrivare 165 av 75) |
| 5:27 | händelse | upplast | id=rullstall flask=skrivare |
| 5:27 | paket |  | tanke → sms |
| 5:27 | tanke | du | Kvarnen står och väntar för att hållaren är full. Om den rymde fler rullar kunde den mala hela tiden. |
| 5:27 | väntar | du | Kvarnen står och väntar för att hållaren är full. Om den rymde fler rullar kunde den mala hela tiden. |
| 5:27 | väntar | ali | Ali här. Rullställ. Fyra rullar i stället för en. Har ett på hyllan. |
| 5:28 | händelse | printStart | sak=kruka |
| 5:29 | toast | fel | Ingen ström – trampa cykeln |
| 5:31 | toast | guld | ✅ |
| 5:31 | händelse | printKlar | sak=kruka n=11 |
| 5:59 | skratt | du | falsk tuta |
| 6:00 | sak | du | Kvarnen står och väntar för att hållaren är full. Om den rymde fler rullar kunde den mala hela tiden. |
| 6:00 | notis | tanke | 💭 Kvarnen står och väntar för att hållaren är full. Om den rymde fler rullar kunde den mala hela tiden. |
| 6:00 | röst | du | Kvarnen står och väntar för att hållaren är full. Om den rymde fler rullar kunde den mala hela tiden. · STORY |
| 6:00 | händelse | tagitUrPrint | sak=kruka n=1 |
| 6:07 | paket |  | tanke → ge |
| 6:07 | tanke | du | Flaggan är uppe. Rolf har lämnat något. |
| 6:07 | väntar | du | Flaggan är uppe. Rolf har lämnat något. |
| 6:07 | väntar |  | (läget ändras) |
| 6:08 | aliSalt | ali | 105 |
| 6:08 | klar | du | Kvarnen står och väntar för att hållaren är full. Om den rymde fler rullar kunde den mala hela tiden. |
| 6:10 | sak | du | Flaggan är uppe. Rolf har lämnat något. |
| 6:10 | notis | tanke | 💭 Flaggan är uppe. Rolf har lämnat något. |
| 6:10 | röst | du | Flaggan är uppe. Rolf har lämnat något. · STORY |
| 6:14 | scenInfo | gard | Lite skräp ramlade av flaket på gården |
| 6:14 | klar | du | Flaggan är uppe. Rolf har lämnat något. |
| 6:16 | sak |  | (läget ändras) |
| 6:16 | brev | rolf | rolf:0 |
| 6:16 | klar |  | (läget ändras) |
| 6:20 | skratt | du | falsk tuta |
| 6:22 | väntar | rolf | Såg att du printar grejer. Kan du göra en sån hä? Kall öl ä viktigt. /Rolf​ |
| 6:22 | paket |  | ge |
| 6:22 | väntar |  | (läget ändras) |
| 6:22 | sak | rolf | Såg att du printar grejer. Kan du göra en sån hä? Kall öl ä viktigt. /Rolf​ |
| 6:22 | lapp | Brev från Rolf | Såg att du printar grejer. Kan du göra en sån hä? Kall öl ä viktigt. /Rolf​ |
| 6:22 | röst | rolf | Såg att du printar grejer. Kan du göra en sån hä? Kall öl ä viktigt. /Rolf​ · STORY |
| 6:22 | händelse | malKlart | id=rolf0-brev del=Dag 2 – Tippen bredvid nasta=rolf0-printa |
| 6:22 | väntar | du | Printa ölhållare med kylklamp. |
| 6:22 | MÅL |  | Printa ölhållare med kylklamp |
| 6:26 | målruta |  | Printa ölhållare med kylklamp |
| 6:26 | händelse | printStart | sak=olhallare |
| 6:26 | händelse | malKlart | id=rolf0-printa del=Dag 2 – Tippen bredvid nasta=rolf0-ge |
| 6:26 | väntar | du | Ge Rolf ölhållare med kylklamp. |
| 6:26 | MÅL |  | Ge Rolf ölhållare med kylklamp |
| 6:29 | klar | rolf | Såg att du printar grejer. Kan du göra en sån hä? Kall öl ä viktigt. /Rolf​ |
| 6:29 | händelse | brevLast | id=rolf:0 |
| 6:29 | toast | guld | ✅ |
| 6:29 | händelse | printKlar | sak=olhallare n=1 |
| 6:29 | händelse | tagitUrPrint | sak=olhallare n=1 |
| 6:30 | målruta |  | Ge Rolf ölhållare med kylklamp |
| 6:30 | kvittens-bock |  | ✓ Printa ölhållare med kylklamp |
| 6:31 | struken | du | Printa ölhållare med kylklamp. |
| 6:31 | sak |  | (läget ändras) |
| 6:31 | klar |  | (läget ändras) |
| 6:31 | sak | du | Ge Rolf ölhållare med kylklamp. |
| 6:31 | pil |  | Ge Rolf ölhållare med kylklamp |
| 6:31 | röst | du | Ge Rolf ölhållare med kylklamp. · MÅL |
| 6:33 | klar | du | Ge Rolf ölhållare med kylklamp. |
| 6:35 | struken | ali | Ali här. Såg skylten. Stavningen är rätt. Det är mer än många. |
| 6:37 | händelse | lagtIPostlada | sak=olhallare rolf=0 jobb=false |
| 6:37 | struken | kedja | rolf0 |
| 6:37 | paket |  | tanke |
| 6:37 | tanke | du | Flaggan uppe. Nu får Rolf hämta den. |
| 6:37 | väntar | du | Flaggan uppe. Nu får Rolf hämta den. |
| 6:37 | sak | du | Flaggan uppe. Nu får Rolf hämta den. |
| 6:37 | notis | tanke | 💭 Flaggan uppe. Nu får Rolf hämta den. |
| 6:37 | röst | du | Flaggan uppe. Nu får Rolf hämta den. · REAKTION |
| 6:37 | händelse | malKlart | id=rolf0-ge del=Dag 2 – Tippen bredvid nasta=vindsnurra |
| 6:37 | väntar | du | En vindsnurra på skjulets tak. Då blir det ström när det blåser. |
| 6:37 | MÅL |  | Trampa, printa och sälj |
| 6:40 | klar | du | Flaggan uppe. Nu får Rolf hämta den. |
| 6:41 | målruta |  | Trampa, printa och sälj |
| 6:41 | kvittens-bock |  | ✓ Ge Rolf ölhållare med kylklamp |
| 6:43 | sak | du | En vindsnurra på skjulets tak. Då blir det ström när det blåser. |
| 6:43 | pil |  | Trampa, printa och sälj |
| 6:43 | notis | tanke | 💭 En vindsnurra på skjulets tak. Då blir det ström när det blåser. |
| 6:43 | röst | du | En vindsnurra på skjulets tak. Då blir det ström när det blåser. · MÅL |
| 6:45 | händelse | printStart | sak=kruka |
| 6:46 | toast | fel | Ingen ström – trampa cykeln |
| 6:48 | klar | du | En vindsnurra på skjulets tak. Då blir det ström när det blåser. |
| 6:49 | toast | guld | ✅ |
| 6:49 | händelse | printKlar | sak=kruka n=12 |
| 6:50 | händelse | tagitUrPrint | sak=kruka n=1 |
| 6:56 | röst | ali | Rolf gav mig en kanna. Som min farmors. Jag ritade en sak åt honom. Säg inget, han gråter lätt. · STORY |
| 6:56 | butiksbubbla | ali | Rolf gav mig en kanna. Som min farmors. Jag ritade en sak åt honom. Säg inget, han gråter lätt. |
| 6:58 | aliSalt | ali | 105 |
| 7:07 | händelse | printStart | sak=kruka |
| 7:10 | toast | guld | ✅ |
| 7:10 | händelse | printKlar | sak=kruka n=13 |
| 7:11 | sak | ali | Ali här. Rullställ. Fyra rullar i stället för en. Har ett på hyllan. |
| 7:11 | sms | ali | Ali här. Rullställ. Fyra rullar i stället för en. Har ett på hyllan. |
| 7:11 | sms-bubbla | ali | Ali här. Rullställ. Fyra rullar i stället för en. Har ett på hyllan. |
| 7:11 | röst | ali | Ali här. Rullställ. Fyra rullar i stället för en. Har ett på hyllan. · STORY |
| 7:11 | händelse | tagitUrPrint | sak=kruka n=1 |
| 7:16 | klar | ali | Ali här. Rullställ. Fyra rullar i stället för en. Har ett på hyllan. |
| 7:18 | aliSalt | ali | 105 |
| 7:25 | upplåst | skrivare | trim_skrivare |
| 7:25 | brott | UPPLÅST | trim_skrivare (skrivare 75 av 75) |
| 7:25 | händelse | upplast | id=trim_skrivare flask=skrivare |
| 7:25 | paket |  | sms |
| 7:25 | väntar | ali | Ali här. Skrivartrim. Jag skruvade på min egen skrivare i natt. Den går fortare nu. Nästan för fort. |
| 7:27 | händelse | printStart | sak=kruka |
| 7:31 | toast | guld | ✅ |
| 7:31 | händelse | printKlar | sak=kruka n=14 |
| 7:31 | händelse | tagitUrPrint | sak=kruka n=1 |
| 7:38 | aliSalt | ali | 105 |
| 7:47 | händelse | printStart | sak=kruka |
| 7:50 | toast | fel | Ingen ström – trampa cykeln |
| 7:52 | toast | guld | ✅ |
| 7:52 | händelse | printKlar | sak=kruka n=15 |
| 7:52 | händelse | tagitUrPrint | sak=kruka n=1 |
| 7:56 | sak | ali | Ali här. Skrivartrim. Jag skruvade på min egen skrivare i natt. Den går fortare nu. Nästan för fort. |
| 7:56 | sms | ali | Ali här. Skrivartrim. Jag skruvade på min egen skrivare i natt. Den går fortare nu. Nästan för fort. |
| 7:56 | sms-bubbla | ali | Ali här. Skrivartrim. Jag skruvade på min egen skrivare i natt. Den går fortare nu. Nästan för fort. |
| 7:56 | röst | ali | Ali här. Skrivartrim. Jag skruvade på min egen skrivare i natt. Den går fortare nu. Nästan för fort. · STORY |
| 7:59 | aliSalt | ali | 105 |
| 8:04 | klar | ali | Ali här. Skrivartrim. Jag skruvade på min egen skrivare i natt. Den går fortare nu. Nästan för fort. |
| 8:11 | paket |  | tanke |
| 8:11 | tanke | du | Jaha, Rolf har hämtat ölhållare med kylklamp. |
| 8:11 | väntar | du | Jaha, Rolf har hämtat ölhållare med kylklamp. |
| 8:12 | sak | du | Jaha, Rolf har hämtat ölhållare med kylklamp. |
| 8:12 | notis | tanke | 💭 Jaha, Rolf har hämtat ölhållare med kylklamp. |
| 8:12 | röst | du | Jaha, Rolf har hämtat ölhållare med kylklamp. · REAKTION |
| 8:13 | händelse | printStart | sak=kruka |
| 8:16 | toast | guld | ✅ |
| 8:16 | händelse | printKlar | sak=kruka n=16 |
| 8:16 | klar | du | Jaha, Rolf har hämtat ölhållare med kylklamp. |
| 8:16 | händelse | tagitUrPrint | sak=kruka n=1 |
| 8:24 | aliSalt | ali | 105 |
| 8:33 | händelse | printStart | sak=kruka |
| 8:33 | väntar | värld:TUUT! Tjena! | TUUT! Tjena! |
| 8:33 | sak | värld:TUUT! Tjena! | TUUT! Tjena! |
| 8:33 | bubbla |  | TUUT! Tjena! |
| 8:35 | upplåst | trampa | vindsnurra |
| 8:35 | brott | UPPLÅST | vindsnurra (trampa 32 av 10) |
| 8:35 | händelse | upplast | id=vindsnurra flask=trampa |
| 8:35 | paket |  | tanke → sms |
| 8:35 | tanke | du | Mina ben är slut. Det blåser hela tiden här ute. Tänk om vinden kunde trampa åt mig. |
| 8:35 | väntar | du | Mina ben är slut. Det blåser hela tiden här ute. Tänk om vinden kunde trampa åt mig. |
| 8:35 | väntar | ali | Ali här. Vindsnurra till cykeln. Vinden trampar åt dig. Den är lat, men den jobbar gratis. |
| 8:36 | klar | värld:TUUT! Tjena! | TUUT! Tjena! |
| 8:36 | toast | guld | ✅ |
| 8:36 | händelse | printKlar | sak=kruka n=17 |
| 8:37 | händelse | tagitUrPrint | sak=kruka n=1 |
| 8:44 | sak | ali | Ali här. Vindsnurra till cykeln. Vinden trampar åt dig. Den är lat, men den jobbar gratis. |
| 8:44 | sms | ali | Ali här. Vindsnurra till cykeln. Vinden trampar åt dig. Den är lat, men den jobbar gratis. |
| 8:44 | sms-bubbla | ali | Ali här. Vindsnurra till cykeln. Vinden trampar åt dig. Den är lat, men den jobbar gratis. |
| 8:44 | röst | ali | Ali här. Vindsnurra till cykeln. Vinden trampar åt dig. Den är lat, men den jobbar gratis. · STORY |
| 8:45 | aliSalt | ali | 105 |
| 8:51 | klar | ali | Ali här. Vindsnurra till cykeln. Vinden trampar åt dig. Den är lat, men den jobbar gratis. |
| 8:55 | toast | guld | 3D-modell köpt – printa vindsnurra till skjultaket på skrivaren |
| 8:55 | händelse | kopt | sak=vindsnurra |
| 9:04 | händelse | printStart | sak=byggsats:vindsnurra |
| 9:08 | händelse | printKlar | sak=byggsats:vindsnurra n=1 |
| 9:08 | toast | guld | ✅ |
| 9:31 | struken | mamma | Har du frusit än? |
| 9:48 | sak | du | Mina ben är slut. Det blåser hela tiden här ute. Tänk om vinden kunde trampa åt mig. |
| 9:48 | notis | tanke | 💭 Mina ben är slut. Det blåser hela tiden här ute. Tänk om vinden kunde trampa åt mig. |
| 9:48 | röst | du | Mina ben är slut. Det blåser hela tiden här ute. Tänk om vinden kunde trampa åt mig. · STORY |
| 9:49 | väntar | info:guld | 🌬️ Vindsnurran ligger i handen – klicka på skjulet för att sätta den på taket |
| 9:49 | händelse | tagitUrPrint | sak=byggsats:vindsnurra n=1 |
| 9:55 | klar | du | Mina ben är slut. Det blåser hela tiden här ute. Tänk om vinden kunde trampa åt mig. |
| 9:55 | struken | info:guld | 🌬️ Vindsnurran ligger i handen – klicka på skjulet för att sätta den på taket |
| 10:02 | händelse | placerat | sak=vindsnurra |
| 10:02 | kvittens | du | Den snurrar! Långsamt. Men den snurrar. |
| 10:02 | varför | du | Om det regnar i natt drunknar jag. Ett tak. |
| 10:02 | väntar | du | Den snurrar! Långsamt. Men den snurrar. |
| 10:02 | väntar | info:guld | 🌬️ Vindsnurran sitter på taket – den trampar cykeln åt dig när det blåser |
| 10:02 | monterat | du | byggsats:vindsnurra |
| 10:02 | händelse | monterat | sak=vindsnurra |
| 10:02 | sak | du | Den snurrar! Långsamt. Men den snurrar. |
| 10:02 | notis | tanke | 💭 Den snurrar! Långsamt. Men den snurrar. |
| 10:02 | röst | du | Den snurrar! Långsamt. Men den snurrar. · STORY |
| 10:02 | händelse | malKlart | id=vindsnurra del=Dag 2 – Tippen bredvid nasta=n1-bygg-dorr-skjulet |
| 10:02 | väntar | du | Det drar från dörrhålet. En dörr kan jag printa. |
| 10:02 | MÅL |  | Bygg en dörr till skjulet |
| 10:05 | klar | du | Den snurrar! Långsamt. Men den snurrar. |
| 10:05 | sak | info:guld | 🌬️ Vindsnurran sitter på taket – den trampar cykeln åt dig när det blåser |
| 10:05 | kvitto-visas | info:guld | 🌬️ Vindsnurran sitter på taket – den trampar cykeln åt dig när det blåser |
| 10:05 | toast | guld | 🌬️ Vindsnurran sitter på taket – den trampar cykeln åt dig när det blåser |
| 10:06 | målruta |  | Bygg en dörr till skjulet |
| 10:06 | skratt | du | falsk tuta |
| 10:07 | klar | info:guld | 🌬️ Vindsnurran sitter på taket – den trampar cykeln åt dig när det blåser |
| 10:09 | sak | du | Det drar från dörrhålet. En dörr kan jag printa. |
| 10:09 | pil |  | Bygg en dörr till skjulet |
| 10:09 | notis | tanke | 💭 Det drar från dörrhålet. En dörr kan jag printa. |
| 10:09 | röst | du | Det drar från dörrhålet. En dörr kan jag printa. · MÅL |
| 10:10 | nick |  | nick:29 |
| 10:13 | klar | du | Det drar från dörrhålet. En dörr kan jag printa. |
| 10:21 | scenInfo | gard | Lite skräp ramlade av flaket på gården |
| 10:21 | toast | guld | 3D-modell köpt – printa dörr på skrivaren |
| 10:21 | händelse | kopt | sak=dorr |
| 10:28 | väntar | värld:TUUT! Hej grannen! | TUUT! Hej grannen! |
| 10:30 | händelse | printStart | sak=byggsats:dorr |
| 10:33 | sak | värld:TUUT! Hej grannen! | TUUT! Hej grannen! |
| 10:33 | bubbla |  | TUUT! Hej grannen! |
| 10:34 | toast | bra | Del 1 av 2 klar |
| 10:34 | väntar | notis:Storebrors skrivare: Del 1 av 2 klar | Storebrors skrivare: Del 1 av 2 klar |
| 10:36 | klar | värld:TUUT! Hej grannen! | TUUT! Hej grannen! |
| 10:37 | händelse | printKlar | sak=byggsats:dorr n=1 |
| 10:37 | toast | guld | ✅ |
| 10:38 | händelse | tagitUrPrint | sak=byggsats:dorr n=1 |
| 10:38 | paket |  | sms |
| 10:38 | väntar | ali | Ali här. Jag har inte sovit. Inte på grund av AI:n. På grund av dig. Du bygger saker av sopor. Jag har en hel butik och bygger ingenting. Det ska ändras. Kanske. Troligen. |
| 10:42 | väntar | info:guld | Dörr på plats! Trivsel +8 · Ali betalar nu +0 % |
| 10:42 | sak | info:guld | Dörr på plats! Trivsel +8 · Ali betalar nu +0 % |
| 10:42 | kvitto-visas | info:guld | Dörr på plats! Trivsel +8 · Ali betalar nu +0 % |
| 10:42 | toast | guld | Dörr på plats! Trivsel +8 · Ali betalar nu +0 % |
| 10:42 | händelse | malKlart | id=n1-bygg-dorr-skjulet del=Dag 2 – Tippen bredvid nasta=sov2 |
| 10:42 | paket |  | lapp |
| 10:42 | väntar | du | Dag 2 är slut. Nu vet Ali att jag bor HÄR. Taket läcker. I morgon. |
| 10:42 | paket |  | sms |
| 10:42 | väntar | bror | Mamma ringde mig fyra gånger förresten. Snyggt jobbat 😂 |
| 10:42 | skratt | bror | Mamma ringde mig fyra gånger förresten. |
| 10:42 | väntar | du | Klart för idag – sov när du vill. |
| 10:43 | MÅL |  | Klart för idag – sov när du vill |
| 10:44 | klar | info:guld | Dörr på plats! Trivsel +8 · Ali betalar nu +0 % |
| 10:46 | målruta |  | Klart för idag – sov när du vill |
| 10:46 | kvittens-bock |  | ✓ Bygg en dörr till skjulet |
| 10:46 | sak | du | Klart för idag – sov när du vill. |
| 10:46 | pil |  | Klart för idag – sov när du vill |
| 10:46 | röst | du | Klart för idag – sov när du vill. · MÅL |
| 10:49 | klar | du | Klart för idag – sov när du vill. |
| 10:50 | väntar | notis:🌇 Klockan är 21. Ali slår igen luckan.  | 🌇 Klockan är 21. Ali slår igen luckan. Dagens jobb är klart – gå in i skjulet och sov i sängen. |
| 10:51 | sak | du | Dag 2 är slut. Nu vet Ali att jag bor HÄR. Taket läcker. I morgon. |
| 10:51 | lapp | 📔 Dagbok | Dag 2 är slut. Nu vet Ali att jag bor HÄR. Taket läcker. I morgon. |
| 10:51 | kvallsrad | du | Nu vet Ali att jag bor HÄR. Taket läcker. I morgon. |
| 10:52 | klar | du | Dag 2 är slut. Nu vet Ali att jag bor HÄR. Taket läcker. I morgon. |
| 10:57 | nattkort | du | 🌙 Dag 2 är slut. God natt. zzz… Nu vet Ali att jag bor HÄR. Taket läcker. I morgon. DAGENS PRINTAR Blomkruka × 16 Ölhållare med kylklamp × 1 Totalt 17 printar |

<details><summary>Botens handlingar dag 2</summary>

- 0:00 — dag 2 börjar — (215 kr)
- 0:08 popup: "FORTSÄTT" (215 kr)
- 0:19 tjänar pengar till väntar på flaskhalsen för kvarnmotor: 215/255 kr → printar blomkruka (105 kr) (215 kr)
- 0:23 gå till skrivaren (19 m) (215 kr)
- 0:24 printar Blomkruka (215 kr)
- 0:27 gå till cykeln (2 m) (215 kr)
- 0:29 tar ut 1 st ur skrivaren (215 kr)
- 0:34 gå till Ali (26 m) (215 kr)
- 0:34 öppnar Alis butik – sälja (215 kr)
- 0:36 säljer hos Ali: +105 kr (320 kr)
- 0:43 tjänar pengar till väntar på flaskhalsen för kvarnmotor: 320/360 kr → printar blomkruka (105 kr) (320 kr)
- 0:48 gå till skrivaren (25 m) (320 kr)
- 0:50 printar Blomkruka (320 kr)
- 0:53 tar ut 1 st ur skrivaren (320 kr)
- 0:58 gå till Ali (25 m) (320 kr)
- 0:58 öppnar Alis butik – sälja (320 kr)
- 1:00 säljer hos Ali: +105 kr (425 kr)
- 1:02 tjänar pengar till väntar på flaskhalsen för kvarnmotor: 425/465 kr → printar blomkruka (105 kr) (425 kr)
- 1:14 plockar 5 skräp på gården (bär max 6) (425 kr)
- 1:21 gå till kvarnen (36 m) (425 kr)
- 1:26 gå till skrivaren (1 m) (425 kr)
- 1:27 printar Blomkruka (425 kr)
- 1:30 gå till cykeln (2 m) (425 kr)
- 1:32 tar ut 1 st ur skrivaren (425 kr)
- 1:38 gå till Ali (26 m) (425 kr)
- 1:38 öppnar Alis butik – sälja (425 kr)
- 1:40 säljer hos Ali: +105 kr (530 kr)
- 1:41 tjänar pengar till väntar på flaskhalsen för kvarnmotor: 530/570 kr → printar blomkruka (105 kr) (530 kr)
- 1:47 gå till skrivaren (25 m) (530 kr)
- 1:48 printar Blomkruka (530 kr)
- 1:52 tar ut 1 st ur skrivaren (530 kr)
- 1:57 gå till Ali (25 m) (530 kr)
- 1:57 öppnar Alis butik – sälja (530 kr)
- 1:59 säljer hos Ali: +105 kr (635 kr)
- 2:00 tjänar pengar till väntar på flaskhalsen för kvarnmotor: 635/675 kr → printar blomkruka (105 kr) (635 kr)
- 2:13 plockar 5 skräp på gården (bär max 6) (635 kr)
- 2:20 gå till kvarnen (33 m) (635 kr)
- 2:25 gå till skrivaren (2 m) (635 kr)
- 2:26 printar Blomkruka (635 kr)
- 2:29 gå till cykeln (2 m) (635 kr)
- 2:31 tar ut 1 st ur skrivaren (635 kr)
- 2:37 gå till Ali (26 m) (635 kr)
- 2:37 öppnar Alis butik – sälja (635 kr)
- 2:38 säljer hos Ali: +105 kr (740 kr)
- 2:40 tjänar pengar till väntar på flaskhalsen för kvarnmotor: 740/780 kr → printar blomkruka (105 kr) (740 kr)
- 2:45 gå till skrivaren (25 m) (740 kr)
- 2:47 printar Blomkruka (740 kr)
- 2:50 tar ut 1 st ur skrivaren (740 kr)
- 2:56 gå till Ali (25 m) (740 kr)
- 2:56 öppnar Alis butik – sälja (740 kr)
- 2:57 säljer hos Ali: +105 kr (845 kr)
- 2:59 tjänar pengar till väntar på flaskhalsen för kvarnmotor: 845/885 kr → printar blomkruka (105 kr) (845 kr)
- 3:04 gå till skrivaren (25 m) (845 kr)
- 3:06 printar Blomkruka (845 kr)
- 3:08 gå till cykeln (1 m) (845 kr)
- 3:11 tar ut 1 st ur skrivaren (845 kr)
- 3:16 gå till Ali (25 m) (845 kr)
- 3:16 öppnar Alis butik – sälja (845 kr)
- 3:17 säljer hos Ali: +105 kr (950 kr)
- 3:19 tjänar pengar till väntar på flaskhalsen för kvarnmotor: 950/990 kr → printar blomkruka (105 kr) (950 kr)
- 3:33 plockar 4 skräp på gården (bär max 6) (950 kr)
- 3:42 gå till kvarnen (40 m) (950 kr)
- 3:48 gå till skrivaren (2 m) (950 kr)
- 3:49 printar Blomkruka (950 kr)
- 3:53 tar ut 1 st ur skrivaren (950 kr)
- 3:59 gå till Ali (28 m) (950 kr)
- 3:59 öppnar Alis butik – sälja (950 kr)
- 4:00 säljer hos Ali: +105 kr (1055 kr)
- 4:10 öppnar Alis butik – köpa kvarnmotor (1055 kr)
- 4:13 köper kvarnmotor för 50 kr (1005 kr)
- 4:25 gå till skrivaren (25 m) (1005 kr)
- 4:27 printar Kvarnmotor (1005 kr)
- 4:29 gå till cykeln (1 m) (1005 kr)
- 4:32 tar ut 1 st ur skrivaren (1005 kr)
- 4:36 gå till skruva fast kvarnmotorn (3 m) (1005 kr)
- 4:49 gå till Rolfs sopsäck (16 m) (1005 kr)
- 5:02 tar på korg (1005 kr)
- 5:02 tjänar pengar till väntar på sopbilen (BO): 1005/1065 kr → printar blomkruka (105 kr) (1005 kr)
- 5:05 gå till skrivaren (12 m) (1005 kr)
- 5:07 printar Blomkruka (1005 kr)
- 5:10 tar ut 1 st ur skrivaren (1005 kr)
- 5:15 gå till Ali (26 m) (1005 kr)
- 5:15 öppnar Alis butik – sälja (1005 kr)
- 5:17 säljer hos Ali: +105 kr (1110 kr)
- 5:21 tjänar pengar till väntar på sopbilen (BO): 1110/1170 kr → printar blomkruka (105 kr) (1110 kr)
- 5:27 gå till skrivaren (25 m) (1110 kr)
- 5:28 printar Blomkruka (1110 kr)
- 5:29 gå till cykeln (1 m) (1110 kr)
- 5:51 plockar 8 skräp på gården (bär max 10) (1110 kr)
- 6:00 gå till kvarnen (41 m) (1110 kr)
- 6:00 gå till skrivaren (1 m) (1110 kr)
- 6:01 tar ut 1 st ur skrivaren (1110 kr)
- 6:07 gå till Ali (28 m) (1110 kr)
- 6:07 öppnar Alis butik – sälja (1110 kr)
- 6:09 säljer hos Ali: +105 kr (1215 kr)
- 6:22 gå till Rolfs postlåda (31 m) (1215 kr)
- 6:25 gå till skrivaren (7 m) (1215 kr)
- 6:26 printar Ölhållare med kylklamp (1215 kr)
- 6:30 tar ut 1 st ur skrivaren (1215 kr)
- 6:35 valj olhallare: true, vald olhallare, post {"l":null,"tr":null,"tm":[]}, nummer false (1215 kr)
- 6:37 gå till Rolfs postlåda (6 m) (1215 kr)
- 6:42 tjänar pengar till väntar på flaskhalsen för vindsnurra: 1215/1255 kr → printar blomkruka (105 kr) (1215 kr)
- 6:44 gå till skrivaren (6 m) (1215 kr)
- 6:45 printar Blomkruka (1215 kr)
- 6:47 gå till cykeln (1 m) (1215 kr)
- 6:51 tar ut 1 st ur skrivaren (1215 kr)
- 6:56 gå till Ali (27 m) (1215 kr)
- 6:56 öppnar Alis butik – sälja (1215 kr)
- 6:58 säljer hos Ali: +105 kr (1320 kr)
- 7:01 tjänar pengar till väntar på flaskhalsen för vindsnurra: 1320/1360 kr → printar blomkruka (105 kr) (1320 kr)
- 7:06 gå till skrivaren (25 m) (1320 kr)
- 7:07 printar Blomkruka (1320 kr)
- 7:11 tar ut 1 st ur skrivaren (1320 kr)
- 7:17 gå till Ali (25 m) (1320 kr)
- 7:17 öppnar Alis butik – sälja (1320 kr)
- 7:18 säljer hos Ali: +105 kr (1425 kr)
- 7:21 tjänar pengar till väntar på flaskhalsen för vindsnurra: 1425/1465 kr → printar blomkruka (105 kr) (1425 kr)
- 7:26 gå till skrivaren (25 m) (1425 kr)
- 7:27 printar Blomkruka (1425 kr)
- 7:28 gå till cykeln (1 m) (1425 kr)
- 7:31 tar ut 1 st ur skrivaren (1425 kr)
- 7:37 gå till Ali (25 m) (1425 kr)
- 7:37 öppnar Alis butik – sälja (1425 kr)
- 7:39 säljer hos Ali: +105 kr (1530 kr)
- 7:41 tjänar pengar till väntar på flaskhalsen för vindsnurra: 1530/1570 kr → printar blomkruka (105 kr) (1530 kr)
- 7:46 gå till skrivaren (25 m) (1530 kr)
- 7:47 printar Blomkruka (1530 kr)
- 7:51 gå till cykeln (1 m) (1530 kr)
- 7:53 tar ut 1 st ur skrivaren (1530 kr)
- 7:58 gå till Ali (25 m) (1530 kr)
- 7:58 öppnar Alis butik – sälja (1530 kr)
- 8:00 säljer hos Ali: +105 kr (1635 kr)
- 8:06 tjänar pengar till väntar på flaskhalsen för vindsnurra: 1635/1675 kr → printar blomkruka (105 kr) (1635 kr)
- 8:11 gå till skrivaren (25 m) (1635 kr)
- 8:13 printar Blomkruka (1635 kr)
- 8:17 tar ut 1 st ur skrivaren (1635 kr)
- 8:22 gå till Ali (25 m) (1635 kr)
- 8:22 öppnar Alis butik – sälja (1635 kr)
- 8:24 säljer hos Ali: +105 kr (1740 kr)
- 8:26 tjänar pengar till väntar på flaskhalsen för vindsnurra: 1740/1780 kr → printar blomkruka (105 kr) (1740 kr)
- 8:31 gå till skrivaren (25 m) (1740 kr)
- 8:33 printar Blomkruka (1740 kr)
- 8:35 gå till cykeln (1 m) (1740 kr)
- 8:38 tar ut 1 st ur skrivaren (1740 kr)
- 8:43 gå till Ali (25 m) (1740 kr)
- 8:43 öppnar Alis butik – sälja (1740 kr)
- 8:45 säljer hos Ali: +105 kr (1845 kr)
- 8:54 öppnar Alis butik – köpa vindsnurra till skjultaket (1845 kr)
- 8:56 köper vindsnurra för 133 kr (1712 kr)
- 9:02 gå till skrivaren (25 m) (1712 kr)
- 9:04 printar Vindsnurra till skjultaket (1712 kr)
- 9:39 plockar 9 skräp på gården (bär max 10) (1712 kr)
- 9:48 gå till kvarnen (44 m) (1712 kr)
- 9:49 gå till skrivaren (1 m) (1712 kr)
- 9:49 tar ut 1 st ur skrivaren (1712 kr)
- 10:02 gå till sätt vindsnurran på taket (22 m) (1712 kr)
- 10:20 gå till Ali (20 m) (1712 kr)
- 10:20 öppnar Alis butik – köpa dörr (1712 kr)
- 10:22 köper dorr för 120 kr (1592 kr)
- 10:29 gå till skrivaren (25 m) (1592 kr)
- 10:30 printar Dörr (2 delar) (1592 kr)
- 10:38 tar ut 1 st ur skrivaren (1592 kr)
- 10:42 gå till skjulet (19 m) (1592 kr)
- 10:54 gå till sängen (1 m) (1592 kr)

</details>

## Dag 3

| Tid | Källa | Vem | Text |
|---|---|---|---|
| 10:57 | vara | ali | ingen |
| 10:57 | händelse | malKlart | id=sov2 del=Dag 2 – Tippen bredvid nasta=rolf1-brev |
| 10:57 | vara | ali | kruka |
| 10:57 | MÅL |  | Vänta på sopbilen. Den lämnar något. |
| 0:01 | händelse | dagenBorjar | dag=3 |
| 0:01 | meddelande | du | Dag 3. 19 dagar till jul. Utan tak regnar det in i natt. |
| 0:01 | dagbokkort | du | En skrivare till och taket · Dag 3. 19 dagar till jul. Utan tak regnar det in i natt. |
| 0:01 | röst | du | Dag 3. 19 dagar till jul. En skrivare till och taket. Utan tak regnar det in i natt. · STORY |
| 0:09 | händelse | morgonkortStangt | dag=3 |
| 0:09 | målruta |  | Vänta på sopbilen. Den lämnar något. |
| 0:09 | väntar | notis:Blomkruka · +50 % | Blomkruka · +50 % |
| 0:14 | sak | du | (nytt mål i rutan) |
| 0:14 | pil |  | Vänta på sopbilen. Den lämnar något. |
| 0:14 | klar | du | (nytt mål i rutan) |
| 0:16 | struken | notis:Storebrors skrivare: Del 1 av 2 klar | Storebrors skrivare: Del 1 av 2 klar |
| 0:16 | struken | notis:🌇 Klockan är 21. Ali slår igen luckan.  | 🌇 Klockan är 21. Ali slår igen luckan. Dagens jobb är klart – gå in i skjulet och sov i sängen. |
| 0:16 | sak | notis:Blomkruka · +50 % | Blomkruka · +50 % |
| 0:16 | notis |  | Blomkruka · +50 % |
| 0:18 | klar | notis:Blomkruka · +50 % | Blomkruka · +50 % |
| 0:20 | struken | ali | Ali här. Jag har inte sovit. Inte på grund av AI:n. På grund av dig. Du bygger saker av sopor. Jag har en hel butik och bygger ingenting. Det ska ändras. Kanske. Troligen. |
| 0:20 | struken | bror | Mamma ringde mig fyra gånger förresten. Snyggt jobbat 😂 |
| 0:20 | skratt | bror | Mamma ringde mig fyra gånger förresten. |
| 0:31 | väntar | rolf | Den funkar! Hä. Ta så mycke skräp du vill. /Rolf​ |
| 0:31 | sak | rolf | Den funkar! Hä. Ta så mycke skräp du vill. /Rolf​ |
| 0:31 | lapp | Brev från Rolf | Den funkar! Hä. Ta så mycke skräp du vill. /Rolf​ |
| 0:31 | röst | rolf | Den funkar! Hä. Ta så mycke skräp du vill. /Rolf​ · STORY |
| 0:32 | paket |  | tanke |
| 0:32 | tanke | du | Rolfs tipp. Hela högen. |
| 0:32 | väntar | du | Rolfs tipp. Hela högen. |
| 0:32 | monterat | du | byggsats:tippnyckel |
| 0:32 | händelse | monterat | sak=tippnyckel |
| 0:32 | scenInfo | du | Kameran sveper över tippen |
| 0:35 | klar | rolf | Den funkar! Hä. Ta så mycke skräp du vill. /Rolf​ |
| 0:35 | händelse | brevLast | id=rolftack:0 |
| 0:36 | tanke | du | …Det här räcker i hundra år. |
| 0:36 | väntar | du | …Det här räcker i hundra år. |
| 0:37 | sak | du | Rolfs tipp. Hela högen. |
| 0:37 | kvitto-visas | du | Rolfs tipp. Hela högen. |
| 0:37 | notis | tanke | 💭 Rolfs tipp. Hela högen. |
| 0:37 | röst | du | Rolfs tipp. Hela högen. · REAKTION |
| 0:38 | skratt | du | falsk tuta |
| 0:39 | klar | du | Rolfs tipp. Hela högen. |
| 0:43 | händelse | printStart | sak=kruka |
| 0:47 | paket |  | tanke |
| 0:47 | tanke | du | En toffla. Bara en. |
| 0:47 | väntar | du | En toffla. Bara en. |
| 0:47 | skratt | du | kvarnen spottar |
| 0:48 | toast | guld | ✅ |
| 0:48 | händelse | printKlar | sak=kruka n=18 |
| 0:48 | händelse | tagitUrPrint | sak=kruka n=1 |
| 0:49 | sak | du | …Det här räcker i hundra år. |
| 0:49 | notis | tanke | 💭 …Det här räcker i hundra år. |
| 0:49 | röst | du | …Det här räcker i hundra år. · STORY |
| 0:51 | klar | du | …Det här räcker i hundra år. |
| 0:54 | röst | ali | Pappa stod bakom den här disken i trettio år. Jag har stått här i tjugofem. Varje morgon när jag låser upp hälsar jag på honom. Tyst. · STORY |
| 0:54 | butiksbubbla | ali | Pappa stod bakom den här disken i trettio år. Jag har stått här i tjugofem. Varje morgon när jag låser upp hälsar jag på honom. Tyst. |
| 0:56 | aliSalt | ali | 105 |
| 1:07 | händelse | printStart | sak=kruka |
| 1:13 | toast | guld | ✅ |
| 1:13 | händelse | printKlar | sak=kruka n=19 |
| 1:40 | sak | du | En toffla. Bara en. |
| 1:40 | notis | tanke | 💭 En toffla. Bara en. |
| 1:40 | röst | du | En toffla. Bara en. · REAKTION |
| 1:40 | händelse | tagitUrPrint | sak=kruka n=1 |
| 1:42 | klar | du | En toffla. Bara en. |
| 1:45 | väntar | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått en DÖRR. Och vindsnurra till skjultaket. Mer säger jag inte. Gunnar vet. |
| 1:45 | radio | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått en DÖRR. Och vindsnurra till skjultaket. Mer säger jag inte. Gunnar vet. |
| 1:45 | skratt | du | Radio-Kjelle |
| 1:48 | aliSalt | ali | 105 |
| 1:52 | sak | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått en DÖRR. Och vindsnurra till skjultaket. Mer säger jag inte. Gunnar vet. |
| 1:52 | notis |  | 📻 Radio Tippen: Radio Tippen, Kjelle här. Skjulet vid tippen har fått en DÖRR. Och vindsnurra till skjultaket. Mer säger jag inte. Gunnar vet. |
| 1:52 | röst | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått en DÖRR. Och vindsnurra till skjultaket. Mer säger jag inte. Gunnar vet. · REAKTION |
| 1:58 | händelse | printStart | sak=kruka |
| 2:02 | klar | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått en DÖRR. Och vindsnurra till skjultaket. Mer säger jag inte. Gunnar vet. |
| 2:04 | toast | guld | ✅ |
| 2:04 | händelse | printKlar | sak=kruka n=20 |
| 2:04 | händelse | tagitUrPrint | sak=kruka n=1 |
| 2:11 | aliSalt | ali | 105 |
| 2:12 | väntar | ali | Akta bilarna. Det kommer en i timmen. |
| 2:12 | sak | ali | Akta bilarna. Det kommer en i timmen. |
| 2:12 | röst | ali | Akta bilarna. Det kommer en i timmen. · SMÅPRAT |
| 2:12 | skratt | du | falsk tuta |
| 2:13 | bubbla |  | Akta bilarna. Det kommer en i timmen. |
| 2:15 | klar | ali | Akta bilarna. Det kommer en i timmen. |
| 2:21 | väntar | värld:TUUT TUUT! | TUUT TUUT! |
| 2:21 | paket |  | ge |
| 2:21 | väntar |  | (läget ändras) |
| 2:24 | händelse | printStart | sak=kruka |
| 2:25 | sak | värld:TUUT TUUT! | TUUT TUUT! |
| 2:25 | bubbla |  | TUUT TUUT! |
| 2:27 | väntar | info:guld | 🚛 Sopbilen tippade en ny last på soptippen! |
| 2:28 | klar | värld:TUUT TUUT! | TUUT TUUT! |
| 2:28 | sak | info:guld | 🚛 Sopbilen tippade en ny last på soptippen! |
| 2:28 | kvitto-visas | info:guld | 🚛 Sopbilen tippade en ny last på soptippen! |
| 2:28 | toast | guld | 🚛 Sopbilen tippade en ny last på soptippen! |
| 2:29 | toast | guld | ✅ |
| 2:29 | händelse | printKlar | sak=kruka n=21 |
| 2:30 | händelse | tagitUrPrint | sak=kruka n=1 |
| 2:30 | klar | info:guld | 🚛 Sopbilen tippade en ny last på soptippen! |
| 2:34 | skratt | du | falsk tuta |
| 2:35 | väntar | mamma | Var är du? |
| 2:37 | aliSalt | ali | 105 |
| 2:37 | röst | ali | Dina krukor säljer. Tanterna i kvarteret älskar dem. · STORY |
| 2:37 | butiksbubbla | ali | Dina krukor säljer. Tanterna i kvarteret älskar dem. |
| 2:47 | väntar | rolf | Nämen. Kajsa knuffa ner min flasköppnare i tippen. Kan du göra en ny, mä magnet? /Rolf​ |
| 2:47 | paket |  | ge |
| 2:47 | väntar |  | (läget ändras) |
| 2:47 | sak | rolf | Nämen. Kajsa knuffa ner min flasköppnare i tippen. Kan du göra en ny, mä magnet? /Rolf​ |
| 2:47 | lapp | Brev från Rolf | Nämen. Kajsa knuffa ner min flasköppnare i tippen. Kan du göra en ny, mä magnet? /Rolf​ |
| 2:47 | röst | rolf | Nämen. Kajsa knuffa ner min flasköppnare i tippen. Kan du göra en ny, mä magnet? /Rolf​ · STORY |
| 2:47 | händelse | malKlart | id=rolf1-brev del=Dag 3 – En skrivare till och taket nasta=n2-hamta-skrap |
| 2:47 | väntar | du | Nyckeln till tippen. Där ligger skräpet i högar. |
| 2:47 | MÅL |  | Hämta 5 skräp på soptippen |
| 2:50 | målruta |  | Hämta 5 skräp på soptippen |
| 2:51 | händelse | malKlart | id=n2-hamta-skrap del=Dag 3 – En skrivare till och taket nasta=rolf1-printa |
| 2:51 | struken | kedja | tippen |
| 2:51 | väntar | du | Printa flasköppnare med magnet. |
| 2:51 | MÅL |  | Printa flasköppnare med magnet |
| 2:52 | ljud | kajsa | Mjau |
| 2:54 | klar | rolf | Nämen. Kajsa knuffa ner min flasköppnare i tippen. Kan du göra en ny, mä magnet? /Rolf​ |
| 2:54 | händelse | brevLast | id=rolf:1 |
| 2:55 | målruta |  | Printa flasköppnare med magnet |
| 2:55 | kvittens-bock |  | ✓ Hämta 5 skräp på soptippen |
| 2:56 | struken | du | Nyckeln till tippen. Där ligger skräpet i högar. |
| 2:56 | sak |  | (läget ändras) |
| 2:56 | klar |  | (läget ändras) |
| 2:56 | sak | du | Printa flasköppnare med magnet. |
| 2:56 | pil |  | Printa flasköppnare med magnet |
| 2:56 | röst | du | Printa flasköppnare med magnet. · MÅL |
| 2:57 | tanke | du | Fastpressad. Den sitter som i betong. |
| 2:57 | väntar | du | Fastpressad. Den sitter som i betong. |
| 2:57 | tanke | du | En hel kanot. Kvarnen skulle äta upp sig själv. |
| 2:57 | struken | du | Fastpressad. Den sitter som i betong. |
| 2:57 | väntar | du | En hel kanot. Kvarnen skulle äta upp sig själv. |
| 2:57 | nick |  | nick:33 |
| 2:59 | klar | du | Printa flasköppnare med magnet. |
| 3:01 | sak | du | En hel kanot. Kvarnen skulle äta upp sig själv. |
| 3:01 | notis | tanke | 💭 En hel kanot. Kvarnen skulle äta upp sig själv. |
| 3:01 | röst | du | En hel kanot. Kvarnen skulle äta upp sig själv. · REAKTION |
| 3:05 | klar | du | En hel kanot. Kvarnen skulle äta upp sig själv. |
| 3:09 | händelse | printStart | sak=flaskoppnare |
| 3:09 | paket |  | tanke |
| 3:09 | tanke | du | Kajsa. Ut ur skrivaren. Nu. |
| 3:09 | väntar | du | Kajsa. Ut ur skrivaren. Nu. |
| 3:09 | skratt | du | Kajsa i skrivaren |
| 3:09 | händelse | malKlart | id=rolf1-printa del=Dag 3 – En skrivare till och taket nasta=rolf1-ge |
| 3:09 | väntar | du | Ge Rolf flasköppnare med magnet. |
| 3:09 | målruta |  | Ge Rolf flasköppnare med magnet |
| 3:09 | MÅL |  | Ge Rolf flasköppnare med magnet |
| 3:10 | sak | du | Ge Rolf flasköppnare med magnet. |
| 3:10 | pil |  | Ge Rolf flasköppnare med magnet |
| 3:10 | röst | du | Ge Rolf flasköppnare med magnet. · MÅL |
| 3:12 | klar | du | Ge Rolf flasköppnare med magnet. |
| 3:13 | toast | guld | ✅ |
| 3:13 | händelse | printKlar | sak=flaskoppnare n=1 |
| 3:13 | kvittens-bock |  | ✓ Printa flasköppnare med magnet |
| 3:14 | händelse | tagitUrPrint | sak=flaskoppnare n=1 |
| 3:16 | händelse | lagtIPostlada | sak=flaskoppnare rolf=1 jobb=false |
| 3:16 | struken | kedja | rolf1 |
| 3:16 | händelse | malKlart | id=rolf1-ge del=Dag 3 – En skrivare till och taket nasta=kopBatteri |
| 3:16 | väntar | du | Ali har ett gammalt bilbatteri. Då sparar jag strömmen. |
| 3:16 | målruta |  | Printa och sälj |
| 3:16 | MÅL |  | Printa och sälj |
| 3:16 | sak | du | Ali har ett gammalt bilbatteri. Då sparar jag strömmen. |
| 3:16 | pil |  | Printa och sälj |
| 3:16 | notis | tanke | 💭 Ali har ett gammalt bilbatteri. Då sparar jag strömmen. |
| 3:16 | röst | du | Ali har ett gammalt bilbatteri. Då sparar jag strömmen. · MÅL |
| 3:19 | tanke | du | Tratten är stor som en kaffekopp. Tunnan är stor som jag. |
| 3:19 | struken | du | Kajsa. Ut ur skrivaren. Nu. |
| 3:19 | väntar | du | Tratten är stor som en kaffekopp. Tunnan är stor som jag. |
| 3:20 | kvittens-bock |  | ✓ Ge Rolf flasköppnare med magnet |
| 3:21 | klar | du | Ali har ett gammalt bilbatteri. Då sparar jag strömmen. |
| 3:26 | händelse | printStart | sak=kruka |
| 3:31 | toast | guld | ✅ |
| 3:31 | händelse | printKlar | sak=kruka n=22 |
| 3:32 | händelse | tagitUrPrint | sak=kruka n=1 |
| 3:39 | aliSalt | ali | 105 |
| 3:47 | händelse | printStart | sak=kruka |
| 3:53 | toast | guld | ✅ |
| 3:53 | händelse | printKlar | sak=kruka n=23 |
| 3:53 | händelse | tagitUrPrint | sak=kruka n=1 |
| 4:00 | aliSalt | ali | 105 |
| 4:10 | händelse | printStart | sak=kruka |
| 4:15 | toast | guld | ✅ |
| 4:15 | händelse | printKlar | sak=kruka n=24 |
| 4:15 | händelse | tagitUrPrint | sak=kruka n=1 |
| 4:22 | aliSalt | ali | 105 |
| 4:24 | paket |  | tanke |
| 4:24 | tanke | du | Jaha, Rolf har hämtat flasköppnare med magnet. |
| 4:24 | väntar | du | Jaha, Rolf har hämtat flasköppnare med magnet. |
| 4:29 | sak |  | (läget ändras) |
| 4:29 | brev | rolf | rolf:1 |
| 4:29 | klar |  | (läget ändras) |
| 4:31 | väntar | bror | Pappa har tvättat bilen tre gånger den här veckan. Jag sa att du bor på tippen. Han frågade vilken modell sopbilen var. |
| 4:32 | händelse | printStart | sak=kruka |
| 4:33 | sak | du | Tratten är stor som en kaffekopp. Tunnan är stor som jag. |
| 4:33 | notis | tanke | 💭 Tratten är stor som en kaffekopp. Tunnan är stor som jag. |
| 4:33 | röst | du | Tratten är stor som en kaffekopp. Tunnan är stor som jag. · REAKTION |
| 4:37 | toast | guld | ✅ |
| 4:37 | händelse | printKlar | sak=kruka n=25 |
| 4:37 | händelse | tagitUrPrint | sak=kruka n=1 |
| 4:38 | klar | du | Tratten är stor som en kaffekopp. Tunnan är stor som jag. |
| 4:45 | aliSalt | ali | 105 |
| 4:54 | händelse | printStart | sak=kruka |
| 4:59 | toast | guld | ✅ |
| 4:59 | händelse | printKlar | sak=kruka n=26 |
| 4:59 | händelse | tagitUrPrint | sak=kruka n=1 |
| 5:07 | aliSalt | ali | 105 |
| 5:16 | händelse | printStart | sak=kruka |
| 5:16 | paket |  | tanke |
| 5:16 | tanke | du | Kajsa. Ut ur skrivaren. Nu. |
| 5:16 | väntar | du | Kajsa. Ut ur skrivaren. Nu. |
| 5:16 | skratt | du | Kajsa i skrivaren |
| 5:21 | toast | guld | ✅ |
| 5:21 | händelse | printKlar | sak=kruka n=27 |
| 5:21 | händelse | tagitUrPrint | sak=kruka n=1 |
| 5:25 | sak | du | Jaha, Rolf har hämtat flasköppnare med magnet. |
| 5:25 | notis | tanke | 💭 Jaha, Rolf har hämtat flasköppnare med magnet. |
| 5:25 | röst | du | Jaha, Rolf har hämtat flasköppnare med magnet. · REAKTION |
| 5:28 | klar | du | Jaha, Rolf har hämtat flasköppnare med magnet. |
| 5:29 | aliSalt | ali | 105 |
| 5:38 | händelse | printStart | sak=kruka |
| 5:43 | toast | guld | ✅ |
| 5:43 | händelse | printKlar | sak=kruka n=28 |
| 5:43 | händelse | tagitUrPrint | sak=kruka n=1 |
| 5:49 | väntar | rolf | Morgonbulle på kontoret me polarna. Bengt har ny keps. Vi pratade om den i en timme. Den e grön. /R |
| 5:49 | väntar | bror | Pappa har tvättat bilen tre gånger den här veckan. Jag sa att du bor på tippen. Han frågade vilken modell sopbilen var. |
| 5:51 | aliSalt | ali | 105 |
| 6:00 | händelse | printStart | sak=kruka |
| 6:05 | toast | guld | ✅ |
| 6:05 | händelse | printKlar | sak=kruka n=29 |
| 6:06 | händelse | tagitUrPrint | sak=kruka n=1 |
| 6:13 | aliSalt | ali | 105 |
| 6:16 | sak | du | Kajsa. Ut ur skrivaren. Nu. |
| 6:16 | notis | tanke | 💭 Kajsa. Ut ur skrivaren. Nu. |
| 6:16 | röst | du | Kajsa. Ut ur skrivaren. Nu. · REAKTION |
| 6:19 | klar | du | Kajsa. Ut ur skrivaren. Nu. |
| 6:19 | skratt | du | falsk tuta |
| 6:22 | händelse | printStart | sak=kruka |
| 6:28 | toast | guld | ✅ |
| 6:28 | händelse | printKlar | sak=kruka n=30 |
| 6:28 | händelse | tagitUrPrint | sak=kruka n=1 |
| 6:35 | aliSalt | ali | 105 |
| 6:39 | upplåst | strom | cykelbatteri |
| 6:39 | brott | RESERV | cykelbatteri (strom 39 av 15) |
| 6:39 | händelse | upplast | id=cykelbatteri flask=strom |
| 6:39 | paket |  | sms |
| 6:39 | väntar | ali | Ali här. Bilbatteriet ur min gamla Volvo står i lagret. Det sparar mer ström än powerbanken. |
| 6:41 | väntar | värld:TUUT! Hej grannen! | TUUT! Hej grannen! |
| 6:44 | händelse | printStart | sak=kruka |
| 6:50 | toast | guld | ✅ |
| 6:50 | händelse | printKlar | sak=kruka n=31 |
| 6:50 | händelse | tagitUrPrint | sak=kruka n=1 |
| 6:56 | sak | ali | Ali här. Bilbatteriet ur min gamla Volvo står i lagret. Det sparar mer ström än powerbanken. |
| 6:56 | sms | ali | Ali här. Bilbatteriet ur min gamla Volvo står i lagret. Det sparar mer ström än powerbanken. |
| 6:56 | sms-bubbla | ali | Ali här. Bilbatteriet ur min gamla Volvo står i lagret. Det sparar mer ström än powerbanken. |
| 6:56 | röst | ali | Ali här. Bilbatteriet ur min gamla Volvo står i lagret. Det sparar mer ström än powerbanken. · STORY |
| 6:57 | aliSalt | ali | 105 |
| 7:04 | klar | ali | Ali här. Bilbatteriet ur min gamla Volvo står i lagret. Det sparar mer ström än powerbanken. |
| 7:06 | struken | värld:TUUT! Hej grannen! | TUUT! Hej grannen! |
| 7:07 | toast | guld | 🔋 Bilbatteriet ligger i handen – klicka på cykeln för att koppla in det |
| 7:07 | händelse | kopt | sak=cykelbatteri |
| 7:07 | röst | ali | Ali här. Batteriet ur min gamla Volvo. Bilen dog 2016. Batteriet vägrade. · STORY |
| 7:07 | butiksbubbla | ali | Ali här. Batteriet ur min gamla Volvo. Bilen dog 2016. Batteriet vägrade. |
| 7:16 | struken | kedja | dag2 |
| 7:16 | väntar | info:guld | 🔋 Bilbatteriet är inkopplat – skrivaren printar klart även när du slutar trampa |
| 7:16 | monterat | du | byggsats:cykelbatteri |
| 7:16 | händelse | monterat | sak=cykelbatteri |
| 7:16 | sak | info:guld | 🔋 Bilbatteriet är inkopplat – skrivaren printar klart även när du slutar trampa |
| 7:16 | kvitto-visas | info:guld | 🔋 Bilbatteriet är inkopplat – skrivaren printar klart även när du slutar trampa |
| 7:16 | toast | guld | 🔋 Bilbatteriet är inkopplat – skrivaren printar klart även när du slutar trampa |
| 7:16 | händelse | malKlart | id=kopBatteri del=Dag 3 – En skrivare till och taket nasta=ryggkorg |
| 7:16 | väntar | du | Jag springer för mycket. Med en ryggkorg bär jag tio saker. |
| 7:16 | MÅL |  | Plocka skräp och mal det |
| 7:18 | klar | info:guld | 🔋 Bilbatteriet är inkopplat – skrivaren printar klart även när du slutar trampa |
| 7:18 | målruta |  | Plocka skräp och mal det |
| 7:20 | kvittens-bock |  | ✓ Köp Alis gamla bilbatteri |
| 7:20 | sak | du | Jag springer för mycket. Med en ryggkorg bär jag tio saker. |
| 7:20 | pil |  | Plocka skräp och mal det |
| 7:20 | notis | tanke | 💭 Jag springer för mycket. Med en ryggkorg bär jag tio saker. |
| 7:20 | röst | du | Jag springer för mycket. Med en ryggkorg bär jag tio saker. · MÅL |
| 7:25 | klar | du | Jag springer för mycket. Med en ryggkorg bär jag tio saker. |
| 7:45 | händelse | printStart | sak=kruka |
| 7:50 | toast | guld | ✅ |
| 7:50 | händelse | printKlar | sak=kruka n=32 |
| 7:50 | händelse | tagitUrPrint | sak=kruka n=1 |
| 7:58 | aliSalt | ali | 105 |
| 8:06 | händelse | printStart | sak=kruka |
| 8:12 | toast | guld | ✅ |
| 8:12 | händelse | printKlar | sak=kruka n=33 |
| 8:12 | händelse | tagitUrPrint | sak=kruka n=1 |
| 8:19 | aliSalt | ali | 105 |
| 8:28 | händelse | printStart | sak=kruka |
| 8:29 | skratt | du | däcket rullar iväg |
| 8:29 | paket |  | tanke |
| 8:29 | tanke | du | Däcket ville inte stanna. Jag förstår det. |
| 8:29 | väntar | du | Däcket ville inte stanna. Jag förstår det. |
| 8:29 | sak | du | Däcket ville inte stanna. Jag förstår det. |
| 8:29 | notis | tanke | 💭 Däcket ville inte stanna. Jag förstår det. |
| 8:29 | röst | du | Däcket ville inte stanna. Jag förstår det. · REAKTION |
| 8:33 | klar | du | Däcket ville inte stanna. Jag förstår det. |
| 8:34 | toast | guld | ✅ |
| 8:34 | händelse | printKlar | sak=kruka n=34 |
| 8:34 | händelse | tagitUrPrint | sak=kruka n=1 |
| 8:35 | struken | mamma | Var är du? |
| 8:36 | skratt | du | falsk tuta |
| 8:36 | väntar | värld:TUUT! Hej grannen! | TUUT! Hej grannen! |
| 8:41 | aliSalt | ali | 105 |
| 8:42 | sak | värld:TUUT! Hej grannen! | TUUT! Hej grannen! |
| 8:42 | bubbla |  | TUUT! Hej grannen! |
| 8:45 | klar | värld:TUUT! Hej grannen! | TUUT! Hej grannen! |
| 8:54 | händelse | printStart | sak=kruka |
| 9:00 | toast | guld | ✅ |
| 9:00 | händelse | printKlar | sak=kruka n=35 |
| 9:00 | händelse | tagitUrPrint | sak=kruka n=1 |
| 9:07 | aliSalt | ali | 105 |
| 9:16 | händelse | printStart | sak=kruka |
| 9:22 | toast | guld | ✅ |
| 9:22 | händelse | printKlar | sak=kruka n=36 |
| 9:22 | händelse | tagitUrPrint | sak=kruka n=1 |
| 9:29 | aliSalt | ali | 105 |
| 9:38 | händelse | printStart | sak=kruka |
| 9:44 | toast | guld | ✅ |
| 9:44 | händelse | printKlar | sak=kruka n=37 |
| 9:44 | händelse | tagitUrPrint | sak=kruka n=1 |
| 9:51 | aliSalt | ali | 105 |
| 10:05 | tanke | du | Hård plast. Lilla kvarnen skulle explodera. Eller jag. |
| 10:05 | väntar | du | Hård plast. Lilla kvarnen skulle explodera. Eller jag. |
| 10:05 | sak | du | Hård plast. Lilla kvarnen skulle explodera. Eller jag. |
| 10:05 | notis | tanke | 💭 Hård plast. Lilla kvarnen skulle explodera. Eller jag. |
| 10:05 | röst | du | Hård plast. Lilla kvarnen skulle explodera. Eller jag. · REAKTION |
| 10:09 | klar | du | Hård plast. Lilla kvarnen skulle explodera. Eller jag. |
| 10:19 | händelse | printStart | sak=kruka |
| 10:25 | toast | guld | ✅ |
| 10:25 | händelse | printKlar | sak=kruka n=38 |
| 10:25 | händelse | tagitUrPrint | sak=kruka n=1 |
| 10:31 | upplåst | bara | ryggkorg |
| 10:31 | brott | RESERV | ryggkorg (bara 5 av 6) |
| 10:31 | händelse | upplast | id=ryggkorg flask=bara |
| 10:31 | paket |  | sms |
| 10:31 | väntar | ali | Ali här. En ryggkorg. AI:n ritade den efter en bild på min mormor. Den rymmer tio. |
| 10:31 | sak | ali | Ali här. En ryggkorg. AI:n ritade den efter en bild på min mormor. Den rymmer tio. |
| 10:31 | sms | ali | Ali här. En ryggkorg. AI:n ritade den efter en bild på min mormor. Den rymmer tio. |
| 10:31 | sms-bubbla | ali | Ali här. En ryggkorg. AI:n ritade den efter en bild på min mormor. Den rymmer tio. |
| 10:31 | röst | ali | Ali här. En ryggkorg. AI:n ritade den efter en bild på min mormor. Den rymmer tio. · STORY |
| 10:32 | aliSalt | ali | 105 |
| 10:38 | klar | ali | Ali här. En ryggkorg. AI:n ritade den efter en bild på min mormor. Den rymmer tio. |
| 10:41 | toast | guld | 3D-modell köpt – printa ryggkorg på skrivaren |
| 10:41 | händelse | kopt | sak=ryggkorg |
| 10:50 | händelse | printStart | sak=byggsats:ryggkorg |
| 10:56 | toast | bra | Del 1 av 2 klar |
| 11:02 | händelse | printKlar | sak=byggsats:ryggkorg n=1 |
| 11:02 | toast | guld | ✅ |
| 11:02 | väntar | info:guld | Klicka för att ta på dig ryggkorg |
| 11:02 | händelse | tagitUrPrint | sak=byggsats:ryggkorg n=1 |
| 11:02 | paket |  | sms |
| 11:02 | väntar | ali | Ali här. Du printade Ryggkorg från min ritning. Och det FUNKAR? Jag har bara sett sånt på YouTube. |
| 11:02 | sak | info:guld | Klicka för att ta på dig ryggkorg |
| 11:02 | kvitto-visas | info:guld | Klicka för att ta på dig ryggkorg |
| 11:02 | toast | guld | Klicka för att ta på dig ryggkorg |
| 11:04 | klar | info:guld | Klicka för att ta på dig ryggkorg |
| 11:06 | väntar | info:guld | 🧺 Ryggkorgen sitter på! Du bär 16 skräp nu. |
| 11:06 | tog på | du | byggsats:ryggkorg |
| 11:06 | händelse | monterat | sak=ryggkorg |
| 11:06 | sak | info:guld | 🧺 Ryggkorgen sitter på! Du bär 16 skräp nu. |
| 11:06 | kvitto-visas | info:guld | 🧺 Ryggkorgen sitter på! Du bär 16 skräp nu. |
| 11:06 | toast | guld | 🧺 Ryggkorgen sitter på! Du bär 16 skräp nu. |
| 11:06 | händelse | malKlart | id=ryggkorg del=Dag 3 – En skrivare till och taket nasta=n2-bygg-arbetsbord |
| 11:06 | väntar | du | Ett arbetsbord bredvid skrivaren. Skrivare M ska stå på det. |
| 11:06 | MÅL |  | Bygg ett arbetsbord |
| 11:08 | klar | info:guld | 🧺 Ryggkorgen sitter på! Du bär 16 skräp nu. |
| 11:08 | målruta |  | Bygg ett arbetsbord |
| 11:10 | kvittens-bock |  | ✓ Bygg ryggkorgen – bär 10 skräp |
| 11:10 | sak | du | Ett arbetsbord bredvid skrivaren. Skrivare M ska stå på det. |
| 11:10 | pil |  | Bygg ett arbetsbord |
| 11:10 | notis | tanke | 💭 Ett arbetsbord bredvid skrivaren. Skrivare M ska stå på det. |
| 11:10 | röst | du | Ett arbetsbord bredvid skrivaren. Skrivare M ska stå på det. · MÅL |
| 11:11 | nick |  | nick:37 |
| 11:14 | toast | guld | 3D-modell köpt – printa arbetsbord på skrivaren |
| 11:14 | händelse | kopt | sak=bord |
| 11:15 | klar | du | Ett arbetsbord bredvid skrivaren. Skrivare M ska stå på det. |
| 11:22 | händelse | printStart | sak=byggsats:bord |
| 11:26 | sak | ali | Ali här. Du printade Ryggkorg från min ritning. Och det FUNKAR? Jag har bara sett sånt på YouTube. |
| 11:26 | sms | ali | Ali här. Du printade Ryggkorg från min ritning. Och det FUNKAR? Jag har bara sett sånt på YouTube. |
| 11:26 | sms-bubbla | ali | Ali här. Du printade Ryggkorg från min ritning. Och det FUNKAR? Jag har bara sett sånt på YouTube. |
| 11:26 | röst | ali | Ali här. Du printade Ryggkorg från min ritning. Och det FUNKAR? Jag har bara sett sånt på YouTube. · REAKTION |
| 11:29 | toast | bra | Del 1 av 3 klar |
| 11:34 | klar | ali | Ali här. Du printade Ryggkorg från min ritning. Och det FUNKAR? Jag har bara sett sånt på YouTube. |
| 11:36 | toast | bra | Del 2 av 3 klar |
| 11:37 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 11:49 | struken | bror | Pappa har tvättat bilen tre gånger den här veckan. Jag sa att du bor på tippen. Han frågade vilken modell sopbilen var. |
| 11:54 | händelse | printKlar | sak=byggsats:bord n=1 |
| 11:54 | toast | guld | ✅ |
| 11:57 | händelse | tagitUrPrint | sak=byggsats:bord n=1 |
| 12:00 | händelse | placerat | sak=bord |
| 12:00 | händelse | malKlart | id=n2-bygg-arbetsbord del=Dag 3 – En skrivare till och taket nasta=n2-bygg-skrivare-m |
| 12:00 | väntar | du | Skrivare M på bordet. Två skrivare, dubbelt så mycket. |
| 12:00 | målruta |  | Printa och sälj |
| 12:00 | MÅL |  | Printa och sälj |
| 12:00 | upplåst | skrivare | skrivare2 |
| 12:00 | brott | UPPLÅST | skrivare2 (skrivare 504 av 75) |
| 12:00 | händelse | upplast | id=skrivare2 flask=skrivare |
| 12:00 | paket |  | tanke → sms |
| 12:00 | tanke | du | Kvarnen hinner mer än skrivaren. Jag behöver en skrivare till. |
| 12:00 | väntar | du | Kvarnen hinner mer än skrivaren. Jag behöver en skrivare till. |
| 12:00 | väntar | ali | Ali här. Skrivare M har kommit. Två och en halv gånger snabbare. Snabbare än jag. Jag har inte varit snabb sedan 1998. |
| 12:00 | sak | du | Skrivare M på bordet. Två skrivare, dubbelt så mycket. |
| 12:00 | pil |  | Bygg Skrivare M på bordet |
| 12:00 | notis | tanke | 💭 Skrivare M på bordet. Två skrivare, dubbelt så mycket. |
| 12:00 | röst | du | Skrivare M på bordet. Två skrivare, dubbelt så mycket. · MÅL |
| 12:04 | kvittens-bock |  | ✓ Bygg ett arbetsbord |
| 12:04 | skratt | du | falsk tuta |
| 12:05 | klar | du | Skrivare M på bordet. Två skrivare, dubbelt så mycket. |
| 12:13 | sak | ali | Ali här. Skrivare M har kommit. Två och en halv gånger snabbare. Snabbare än jag. Jag har inte varit snabb sedan 1998. |
| 12:13 | sms | ali | Ali här. Skrivare M har kommit. Två och en halv gånger snabbare. Snabbare än jag. Jag har inte varit snabb sedan 1998. |
| 12:13 | sms-bubbla | ali | Ali här. Skrivare M har kommit. Två och en halv gånger snabbare. Snabbare än jag. Jag har inte varit snabb sedan 1998. |
| 12:13 | röst | ali | Ali här. Skrivare M har kommit. Två och en halv gånger snabbare. Snabbare än jag. Jag har inte varit snabb sedan 1998. · STORY |
| 12:13 | skratt | du | Alis dyr-pling |
| 12:13 | toast | guld | 3D-modell köpt – printa skrivare m på skrivaren |
| 12:13 | händelse | kopt | sak=skrivare2 |
| 12:22 | händelse | printStart | sak=byggsats:skrivare2 |
| 12:23 | klar | ali | Ali här. Skrivare M har kommit. Två och en halv gånger snabbare. Snabbare än jag. Jag har inte varit snabb sedan 1998. |
| 12:26 | väntar | värld:TUUT! Hej grannen! | TUUT! Hej grannen! |
| 12:31 | toast | bra | Del 1 av 5 klar |
| 12:35 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 12:38 | väntar | värld:Mjau. | Mjau. |
| 12:40 | väntar | info:fel | Fullt i händerna. |
| 12:40 | sak | info:fel | Fullt i händerna. |
| 12:40 | kvitto-visas | info:fel | Fullt i händerna. |
| 12:40 | toast | fel | Fullt i händerna. |
| 12:42 | klar | info:fel | Fullt i händerna. |
| 12:46 | struken | värld:TUUT! Hej grannen! | TUUT! Hej grannen! |
| 12:49 | toast | bra | Del 2 av 5 klar |
| 12:58 | struken | värld:Mjau. | Mjau. |
| 12:59 | toast | bra | Del 3 av 5 klar |
| 13:07 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 13:16 | toast | bra | Del 4 av 5 klar |
| 13:25 | händelse | printKlar | sak=byggsats:skrivare2 n=1 |
| 13:25 | toast | guld | ✅ |
| 13:27 | händelse | tagitUrPrint | sak=byggsats:skrivare2 n=1 |
| 13:30 | händelse | placerat | sak=skrivare2 |
| 13:30 | struken | kedja | skrivareM |
| 13:30 | paket |  | tanke |
| 13:30 | tanke | du | Den här måste stå i linjen vid kvarnen, annars når inte slangen. |
| 13:30 | väntar | du | Den här måste stå i linjen vid kvarnen, annars når inte slangen. |
| 13:30 | händelse | malKlart | id=n2-bygg-skrivare-m del=Dag 3 – En skrivare till och taket nasta=n2-lagg-plattak-skjulet |
| 13:30 | lapp-kö | 📱 Storebror | VA?! Du har byggt en skrivare TILL?? Du har typ en printfarm nu. Okej. Det är faktiskt ganska ballt. 🔥 |
| 13:30 | väntar | bror | VA?! Du har byggt en skrivare TILL?? Du har typ en printfarm nu. Okej. Det är faktiskt ganska ballt. 🔥 |
| 13:30 | väntar | du | Det regnar in. Plåt på taket, så slipper jag sova i en pöl. |
| 13:30 | MÅL |  | Lägg plåttak på skjulet |
| 13:30 | målruta |  | Lägg plåttak på skjulet |
| 13:30 | sak | du | Det regnar in. Plåt på taket, så slipper jag sova i en pöl. |
| 13:30 | pil |  | Lägg plåttak på skjulet |
| 13:30 | notis | tanke | 💭 Det regnar in. Plåt på taket, så slipper jag sova i en pöl. |
| 13:30 | röst | du | Det regnar in. Plåt på taket, så slipper jag sova i en pöl. · MÅL |
| 13:34 | kvittens-bock |  | ✓ Bygg Skrivare M på bordet |
| 13:35 | klar | du | Det regnar in. Plåt på taket, så slipper jag sova i en pöl. |
| 13:44 | toast | guld | 3D-modell köpt – printa plåttak på skrivaren |
| 13:44 | händelse | kopt | sak=tak |
| 13:52 | händelse | printStart | sak=byggsats:tak |
| 13:52 | toast | bra | 🔗 Slangen kopplad |
| 13:55 | sak | du | Kvarnen hinner mer än skrivaren. Jag behöver en skrivare till. |
| 13:55 | notis | tanke | 💭 Kvarnen hinner mer än skrivaren. Jag behöver en skrivare till. |
| 13:55 | röst | du | Kvarnen hinner mer än skrivaren. Jag behöver en skrivare till. · STORY |
| 13:56 | toast | bra | Del 1 av 3 klar |
| 14:00 | toast | bra | Del 2 av 3 klar |
| 14:01 | klar | du | Kvarnen hinner mer än skrivaren. Jag behöver en skrivare till. |
| 14:02 | toast | fel | Ingen ström – trampa cykeln |
| 14:12 | händelse | printKlar | sak=byggsats:tak n=1 |
| 14:12 | toast | guld | ✅ |
| 14:13 | händelse | tagitUrPrint | sak=byggsats:tak n=1 |
| 14:14 | skratt | du | däcket rullar iväg |
| 14:17 | väntar | info:guld | Plåttak på plats! Trivsel +12 · Ali betalar nu +0 % |
| 14:17 | sak | info:guld | Plåttak på plats! Trivsel +12 · Ali betalar nu +0 % |
| 14:17 | kvitto-visas | info:guld | Plåttak på plats! Trivsel +12 · Ali betalar nu +0 % |
| 14:17 | toast | guld | Plåttak på plats! Trivsel +12 · Ali betalar nu +0 % |
| 14:17 | händelse | malKlart | id=n2-lagg-plattak-skjulet del=Dag 3 – En skrivare till och taket nasta=sov3 |
| 14:17 | paket |  | lapp |
| 14:17 | väntar | du | Dag 3 är slut. Nu vet Rolf att jag bor HÄR. Benen orkar inte trampa mer. |
| 14:17 | MÅL |  | Klart för idag – sov när du vill |
| 14:19 | klar | info:guld | Plåttak på plats! Trivsel +12 · Ali betalar nu +0 % |
| 14:21 | paket |  | replik |
| 14:21 | väntar | rolf | Hoppa in. Ja ska visa dej en grej. |
| 14:21 | skratt | du | falsk tuta |
| 14:21 | målruta |  | Klart för idag – sov när du vill |
| 14:21 | kvittens-bock |  | ✓ Lägg plåttak på skjulet |
| 14:21 | sak | du | (nytt mål i rutan) |
| 14:21 | pil |  | Klart för idag – sov när du vill |
| 14:21 | klar | du | (nytt mål i rutan) |
| 14:23 | sak | du | Dag 3 är slut. Nu vet Rolf att jag bor HÄR. Benen orkar inte trampa mer. |
| 14:23 | lapp | 📔 Dagbok | Dag 3 är slut. Nu vet Rolf att jag bor HÄR. Benen orkar inte trampa mer. |
| 14:23 | kvallsrad | du | Nu vet Rolf att jag bor HÄR. Benen orkar inte trampa mer. |
| 14:24 | klar | du | Dag 3 är slut. Nu vet Rolf att jag bor HÄR. Benen orkar inte trampa mer. |
| 14:24 | väntar | notis:🌇 Klockan är 21. Ali slår igen luckan.  | 🌇 Klockan är 21. Ali slår igen luckan. Dagens jobb är klart – gå in i skjulet och sov i sängen. |
| 14:32 | sak | du | Den här måste stå i linjen vid kvarnen, annars når inte slangen. |
| 14:32 | notis | tanke | 💭 Den här måste stå i linjen vid kvarnen, annars når inte slangen. |
| 14:32 | röst | du | Den här måste stå i linjen vid kvarnen, annars når inte slangen. · STORY |
| 14:37 | klar | du | Den här måste stå i linjen vid kvarnen, annars når inte slangen. |
| 14:59 | väntar | foto | Tak över huvudet |
| 14:59 | paket |  | tanke |
| 14:59 | tanke | du | I natt somnar jag torr. Det börjar bli ett hem. |
| 14:59 | väntar | du | I natt somnar jag torr. Det börjar bli ett hem. |
| 15:09 | sak | bror | VA?! Du har byggt en skrivare TILL?? Du har typ en printfarm nu. Okej. Det är faktiskt ganska ballt. 🔥 |
| 15:09 | sms | bror | VA?! Du har byggt en skrivare TILL?? Du har typ en printfarm nu. Okej. Det är faktiskt ganska ballt. 🔥 |
| 15:09 | sms-bubbla | bror | VA?! Du har byggt en skrivare TILL?? Du har typ en printfarm nu. Okej. Det är faktiskt ganska ballt. 🔥 |
| 15:09 | röst | bror | VA?! Du har byggt en skrivare TILL?? Du har typ en printfarm nu. Okej. Det är faktiskt ganska ballt. 🔥 · STORY |
| 15:17 | klar | bror | VA?! Du har byggt en skrivare TILL?? Du har typ en printfarm nu. Okej. Det är faktiskt ganska ballt. 🔥 |
| 15:19 | struken | notis:🌇 Klockan är 21. Ali slår igen luckan.  | 🌇 Klockan är 21. Ali slår igen luckan. Dagens jobb är klart – gå in i skjulet och sov i sängen. |
| 15:22 | skratt | du | falsk tuta |
| 15:30 | scenInfo | rolf | Rolf kör upp till sin bänk |
| 15:34 | röst | rolf | Kall öl ä viktigt. · STORY |
| 15:34 | bubbla | rolf | Kall öl ä viktigt. |
| 15:42 | röst | rolf | Ja kommer hit varje kväll. Förr va vi två på bänken. · STORY |
| 15:42 | bubbla | rolf | Ja kommer hit varje kväll. Förr va vi två på bänken. |
| 16:00 | röst | rolf | Dä där ä Bengt-Åke. Vinka int. · STORY |
| 16:00 | bubbla | rolf | Dä där ä Bengt-Åke. Vinka int. |
| 16:14 | röst | rolf | Den ä skyldig mej pengar. · STORY |
| 16:14 | bubbla | rolf | Den ä skyldig mej pengar. |
| 16:24 | skratt | du | tummen på fotot |
| 16:24 | väntar | foto | Rolfs bänk (och min tumme) |
| 16:24 | paket |  | tanke |
| 16:24 | tanke | du | Han kommer hit varje kväll. Nu vet jag var. |
| 16:24 | väntar | du | Han kommer hit varje kväll. Nu vet jag var. |
| 16:24 | skratt | du | Rolfs bänk |
| 16:30 | sak | rolf | Hoppa in. Ja ska visa dej en grej. |
| 16:30 | notis |  | Rolf: ”Hoppa in. Ja ska visa dej en grej.” |
| 16:30 | röst | rolf | Hoppa in. Ja ska visa dej en grej. · STORY |
| 16:31 | lapp | Dagbok | Tre dagar. Tänk om tre veckor. |
| 16:31 | röst | du | Tre dagar. Tänk om tre veckor. · REAKTION |
| 16:33 | klar | rolf | Hoppa in. Ja ska visa dej en grej. |
| 16:42 | sak | foto | Tak över huvudet |
| 16:42 | foto | du | Tak över huvudet |
| 16:44 | klar | foto | Tak över huvudet |
| 16:46 | nattkort | du | 🌙 Dag 3 är slut. God natt. zzz… Nu vet Rolf att jag bor HÄR. Benen orkar inte trampa mer. DAGENS PRINTAR Blomkruka × 21 Flasköppnare med magnet × 1 Totalt 22 p |

<details><summary>Botens handlingar dag 3</summary>

- 0:00 — dag 3 börjar — (1592 kr)
- 0:09 popup: "FORTSÄTT" (1592 kr)
- 0:25 gå till Rolfs postlåda (28 m) (1592 kr)
- 0:31 panel: "Rolfs postlåda
Det här låg i l" (1652 kr)
- 0:32 gå till sätt nyckeln i låset (3 m) (1652 kr)
- 0:39 tjänar pengar till väntar på sopbilen (BO): 1652/1712 kr → printar blomkruka (105 kr) (1652 kr)
- 0:41 gå till skrivaren (7 m) (1652 kr)
- 0:43 printar Blomkruka (1652 kr)
- 0:49 tar ut 1 st ur skrivaren (1652 kr)
- 0:54 gå till Ali (28 m) (1652 kr)
- 0:54 öppnar Alis butik – sälja (1652 kr)
- 0:56 säljer hos Ali: +105 kr (1757 kr)
- 1:01 tjänar pengar till väntar på sopbilen (BO): 1757/1817 kr → printar blomkruka (105 kr) (1757 kr)
- 1:06 gå till skrivaren (25 m) (1757 kr)
- 1:07 printar Blomkruka (1757 kr)
- 1:33 plockar 8 skräp på gården (bär max 10) (1757 kr)
- 1:39 gå till kvarnen (30 m) (1757 kr)
- 1:40 gå till skrivaren (1 m) (1757 kr)
- 1:41 tar ut 1 st ur skrivaren (1757 kr)
- 1:46 gå till Ali (28 m) (1757 kr)
- 1:46 öppnar Alis butik – sälja (1757 kr)
- 1:48 säljer hos Ali: +105 kr (1862 kr)
- 1:51 tjänar pengar till väntar på sopbilen (BO): 1862/1922 kr → printar blomkruka (105 kr) (1862 kr)
- 1:57 gå till skrivaren (25 m) (1862 kr)
- 1:58 printar Blomkruka (1862 kr)
- 2:04 tar ut 1 st ur skrivaren (1862 kr)
- 2:09 gå till Ali (25 m) (1862 kr)
- 2:09 öppnar Alis butik – sälja (1862 kr)
- 2:11 säljer hos Ali: +105 kr (1967 kr)
- 2:17 tjänar pengar till väntar på sopbilen (BO): 1967/2027 kr → printar blomkruka (105 kr) (1967 kr)
- 2:22 gå till skrivaren (25 m) (1967 kr)
- 2:24 printar Blomkruka (1967 kr)
- 2:30 tar ut 1 st ur skrivaren (1967 kr)
- 2:35 gå till Ali (25 m) (1967 kr)
- 2:35 öppnar Alis butik – sälja (1967 kr)
- 2:37 säljer hos Ali: +105 kr (2072 kr)
- 2:47 gå till Rolfs postlåda (31 m) (2072 kr)
- 2:56 plockar 10 skräp på tippen (bär max 10) (2072 kr)
- 2:58 gå till kvarnen (9 m) (2072 kr)
- 3:08 gå till skrivaren (3 m) (2072 kr)
- 3:09 printar Flasköppnare med magnet (2072 kr)
- 3:14 tar ut 1 st ur skrivaren (2072 kr)
- 3:14 valj flaskoppnare: true, vald flaskoppnare, post {"l":null,"tr":null,"tm":[]}, nummer false (2072 kr)
- 3:16 gå till Rolfs postlåda (6 m) (2072 kr)
- 3:23 tjänar pengar till väntar på flaskhalsen för cykelbatteri: 2072/2112 kr → printar blomkruka (105 kr) (2072 kr)
- 3:24 gå till skrivaren (6 m) (2072 kr)
- 3:26 printar Blomkruka (2072 kr)
- 3:32 tar ut 1 st ur skrivaren (2072 kr)
- 3:38 gå till Ali (28 m) (2072 kr)
- 3:38 öppnar Alis butik – sälja (2072 kr)
- 3:40 säljer hos Ali: +105 kr (2177 kr)
- 3:41 tjänar pengar till väntar på flaskhalsen för cykelbatteri: 2177/2217 kr → printar blomkruka (105 kr) (2177 kr)
- 3:46 gå till skrivaren (25 m) (2177 kr)
- 3:47 printar Blomkruka (2177 kr)
- 3:54 tar ut 1 st ur skrivaren (2177 kr)
- 3:59 gå till Ali (25 m) (2177 kr)
- 3:59 öppnar Alis butik – sälja (2177 kr)
- 4:01 säljer hos Ali: +105 kr (2282 kr)
- 4:03 tjänar pengar till väntar på flaskhalsen för cykelbatteri: 2282/2322 kr → printar blomkruka (105 kr) (2282 kr)
- 4:08 gå till skrivaren (25 m) (2282 kr)
- 4:10 printar Blomkruka (2282 kr)
- 4:16 tar ut 1 st ur skrivaren (2282 kr)
- 4:21 gå till Ali (25 m) (2282 kr)
- 4:21 öppnar Alis butik – sälja (2282 kr)
- 4:23 säljer hos Ali: +105 kr (2387 kr)
- 4:25 tjänar pengar till väntar på flaskhalsen för cykelbatteri: 2387/2427 kr → printar blomkruka (105 kr) (2387 kr)
- 4:30 gå till skrivaren (25 m) (2387 kr)
- 4:32 printar Blomkruka (2387 kr)
- 4:38 tar ut 1 st ur skrivaren (2387 kr)
- 4:43 gå till Ali (25 m) (2387 kr)
- 4:43 öppnar Alis butik – sälja (2387 kr)
- 4:45 säljer hos Ali: +105 kr (2492 kr)
- 4:47 tjänar pengar till väntar på flaskhalsen för cykelbatteri: 2492/2532 kr → printar blomkruka (105 kr) (2492 kr)
- 4:52 gå till skrivaren (25 m) (2492 kr)
- 4:54 printar Blomkruka (2492 kr)
- 5:00 tar ut 1 st ur skrivaren (2492 kr)
- 5:05 gå till Ali (25 m) (2492 kr)
- 5:05 öppnar Alis butik – sälja (2492 kr)
- 5:07 säljer hos Ali: +105 kr (2597 kr)
- 5:09 tjänar pengar till väntar på flaskhalsen för cykelbatteri: 2597/2637 kr → printar blomkruka (105 kr) (2597 kr)
- 5:14 gå till skrivaren (25 m) (2597 kr)
- 5:16 printar Blomkruka (2597 kr)
- 5:22 tar ut 1 st ur skrivaren (2597 kr)
- 5:27 gå till Ali (25 m) (2597 kr)
- 5:27 öppnar Alis butik – sälja (2597 kr)
- 5:29 säljer hos Ali: +105 kr (2702 kr)
- 5:31 tjänar pengar till väntar på flaskhalsen för cykelbatteri: 2702/2742 kr → printar blomkruka (105 kr) (2702 kr)
- 5:36 gå till skrivaren (25 m) (2702 kr)
- 5:38 printar Blomkruka (2702 kr)
- 5:44 tar ut 1 st ur skrivaren (2702 kr)
- 5:49 gå till Ali (25 m) (2702 kr)
- 5:49 öppnar Alis butik – sälja (2702 kr)
- 5:51 säljer hos Ali: +105 kr (2807 kr)
- 5:53 tjänar pengar till väntar på flaskhalsen för cykelbatteri: 2807/2847 kr → printar blomkruka (105 kr) (2807 kr)
- 5:58 gå till skrivaren (25 m) (2807 kr)
- 6:00 printar Blomkruka (2807 kr)
- 6:06 tar ut 1 st ur skrivaren (2807 kr)
- 6:11 gå till Ali (25 m) (2807 kr)
- 6:11 öppnar Alis butik – sälja (2807 kr)
- 6:13 säljer hos Ali: +105 kr (2912 kr)
- 6:15 tjänar pengar till väntar på flaskhalsen för cykelbatteri: 2912/2952 kr → printar blomkruka (105 kr) (2912 kr)
- 6:21 gå till skrivaren (25 m) (2912 kr)
- 6:22 printar Blomkruka (2912 kr)
- 6:28 tar ut 1 st ur skrivaren (2912 kr)
- 6:33 gå till Ali (25 m) (2912 kr)
- 6:33 öppnar Alis butik – sälja (2912 kr)
- 6:35 säljer hos Ali: +105 kr (3017 kr)
- 6:37 tjänar pengar till väntar på flaskhalsen för cykelbatteri: 3017/3057 kr → printar blomkruka (105 kr) (3017 kr)
- 6:43 gå till skrivaren (25 m) (3017 kr)
- 6:44 printar Blomkruka (3017 kr)
- 6:50 tar ut 1 st ur skrivaren (3017 kr)
- 6:56 gå till Ali (25 m) (3017 kr)
- 6:56 öppnar Alis butik – sälja (3017 kr)
- 6:57 säljer hos Ali: +105 kr (3122 kr)
- 7:06 öppnar Alis butik – bilbatteriet (3122 kr)
- 7:08 köper cykelbatteri för 30 kr (3092 kr)
- 7:16 gå till koppla in bilbatteriet vid cykeln (24 m) (3092 kr)
- 7:27 tjänar pengar till väntar på flaskhalsen för ryggkorg: 3092/3132 kr → printar blomkruka (105 kr) (3092 kr)
- 7:36 plockar 9 skräp på tippen (bär max 10) (3092 kr)
- 7:38 gå till kvarnen (7 m) (3092 kr)
- 7:43 gå till skrivaren (3 m) (3092 kr)
- 7:45 printar Blomkruka (3092 kr)
- 7:51 tar ut 1 st ur skrivaren (3092 kr)
- 7:57 gå till Ali (28 m) (3092 kr)
- 7:57 öppnar Alis butik – sälja (3092 kr)
- 7:59 säljer hos Ali: +105 kr (3197 kr)
- 8:00 tjänar pengar till väntar på flaskhalsen för ryggkorg: 3197/3237 kr → printar blomkruka (105 kr) (3197 kr)
- 8:05 gå till skrivaren (25 m) (3197 kr)
- 8:06 printar Blomkruka (3197 kr)
- 8:12 tar ut 1 st ur skrivaren (3197 kr)
- 8:18 gå till Ali (25 m) (3197 kr)
- 8:18 öppnar Alis butik – sälja (3197 kr)
- 8:20 säljer hos Ali: +105 kr (3302 kr)
- 8:22 tjänar pengar till väntar på flaskhalsen för ryggkorg: 3302/3342 kr → printar blomkruka (105 kr) (3302 kr)
- 8:27 gå till skrivaren (25 m) (3302 kr)
- 8:28 printar Blomkruka (3302 kr)
- 8:35 tar ut 1 st ur skrivaren (3302 kr)
- 8:40 gå till Ali (25 m) (3302 kr)
- 8:40 öppnar Alis butik – sälja (3302 kr)
- 8:42 säljer hos Ali: +105 kr (3407 kr)
- 8:47 tjänar pengar till väntar på flaskhalsen för ryggkorg: 3407/3447 kr → printar blomkruka (105 kr) (3407 kr)
- 8:53 gå till skrivaren (25 m) (3407 kr)
- 8:54 printar Blomkruka (3407 kr)
- 9:00 tar ut 1 st ur skrivaren (3407 kr)
- 9:05 gå till Ali (25 m) (3407 kr)
- 9:05 öppnar Alis butik – sälja (3407 kr)
- 9:07 säljer hos Ali: +105 kr (3512 kr)
- 9:09 tjänar pengar till väntar på flaskhalsen för ryggkorg: 3512/3552 kr → printar blomkruka (105 kr) (3512 kr)
- 9:15 gå till skrivaren (25 m) (3512 kr)
- 9:16 printar Blomkruka (3512 kr)
- 9:22 tar ut 1 st ur skrivaren (3512 kr)
- 9:28 gå till Ali (25 m) (3512 kr)
- 9:28 öppnar Alis butik – sälja (3512 kr)
- 9:29 säljer hos Ali: +105 kr (3617 kr)
- 9:32 tjänar pengar till väntar på flaskhalsen för ryggkorg: 3617/3657 kr → printar blomkruka (105 kr) (3617 kr)
- 9:37 gå till skrivaren (25 m) (3617 kr)
- 9:38 printar Blomkruka (3617 kr)
- 9:44 tar ut 1 st ur skrivaren (3617 kr)
- 9:50 gå till Ali (25 m) (3617 kr)
- 9:50 öppnar Alis butik – sälja (3617 kr)
- 9:52 säljer hos Ali: +105 kr (3722 kr)
- 9:54 tjänar pengar till väntar på flaskhalsen för ryggkorg: 3722/3762 kr → printar blomkruka (105 kr) (3722 kr)
- 10:09 plockar 10 skräp på tippen (bär max 10) (3722 kr)
- 10:11 gå till kvarnen (9 m) (3722 kr)
- 10:18 gå till skrivaren (3 m) (3722 kr)
- 10:19 printar Blomkruka (3722 kr)
- 10:25 tar ut 1 st ur skrivaren (3722 kr)
- 10:31 gå till Ali (28 m) (3722 kr)
- 10:31 öppnar Alis butik – sälja (3722 kr)
- 10:33 säljer hos Ali: +105 kr (3827 kr)
- 10:40 öppnar Alis butik – köpa ryggkorg (3827 kr)
- 10:42 köper ryggkorg för 120 kr (3707 kr)
- 10:48 gå till skrivaren (25 m) (3707 kr)
- 10:50 printar Ryggkorg (2 delar) (3707 kr)
- 11:03 tar ut 1 st ur skrivaren (3707 kr)
- 11:06 tar på ryggkorg (3707 kr)
- 11:12 gå till Ali (25 m) (3707 kr)
- 11:12 öppnar Alis butik – köpa arbetsbord (3707 kr)
- 11:15 köper bord för 120 kr (3587 kr)
- 11:21 gå till skrivaren (25 m) (3587 kr)
- 11:22 printar Arbetsbord (3 delar) (3587 kr)
- 11:44 plockar 5 skräp på tippen (bär max 16) (3587 kr)
- 11:46 gå till kvarnen (9 m) (3587 kr)
- 11:57 gå till skrivaren (3 m) (3587 kr)
- 11:58 tar ut 1 st ur skrivaren (3587 kr)
- 11:59 gå till platsen för arbetsbord (5 m) (3587 kr)
- 12:00 ställer ut arbetsbord (3587 kr)
- 12:12 gå till Ali (24 m) (3587 kr)
- 12:12 öppnar Alis butik – köpa skrivare m (3587 kr)
- 12:14 köper skrivare2 för 500 kr (3087 kr)
- 12:20 gå till skrivaren (25 m) (3087 kr)
- 12:22 printar Skrivare M (5 delar) (3087 kr)
- 12:41 plockar 1 skräp på tippen (bär max 16) (3087 kr)
- 12:43 gå till kvarnen (11 m) (3087 kr)
- 13:11 plockar 3 skräp på tippen (bär max 16) (3087 kr)
- 13:13 gå till kvarnen (8 m) (3087 kr)
- 13:27 gå till skrivaren (3 m) (3087 kr)
- 13:28 tar ut 1 st ur skrivaren (3087 kr)
- 13:29 gå till platsen för skrivare m (5 m) (3087 kr)
- 13:30 ställer ut skrivare m (3087 kr)
- 13:42 gå till Ali (24 m) (3087 kr)
- 13:42 öppnar Alis butik – köpa plåttak (3087 kr)
- 13:44 köper tak för 250 kr (2837 kr)
- 13:51 gå till skrivaren (24 m) (2837 kr)
- 13:52 printar Plåttak (3 delar) (2837 kr)
- 14:14 tar ut 1 st ur skrivaren (2837 kr)
- 14:17 gå till skjulet (17 m) (2837 kr)
- 15:30 gå till sopbilen (Rolfs bänk) (38 m) (2837 kr)
- 16:30 tillbaka från Rolfs bänk (2837 kr)
- 16:35 panel: "Dagbok
Före och efter
Dag 1
Da" (2837 kr)
- 16:44 gå till sängen (39 m) (2837 kr)

</details>

## Dag 4

| Tid | Källa | Vem | Text |
|---|---|---|---|
| 16:46 | vara | ali | ingen |
| 16:46 | händelse | malKlart | id=sov3 del=Dag 3 – En skrivare till och taket nasta=rolf2-brev |
| 16:46 | vara | ali | kruka |
| 16:46 | MÅL |  | Vänta på sopbilen. Den lämnar något. |
| 0:01 | händelse | dagenBorjar | dag=4 |
| 0:01 | meddelande | du | Dag 4. 18 dagar till jul. Drar det i skjulet blir natten lång. |
| 0:01 | dagbokkort | du | Kärran och mer vind · Dag 4. 18 dagar till jul. Drar det i skjulet blir natten lång. |
| 0:01 | röst | du | Dag 4. 18 dagar till jul. Kärran och mer vind. Drar det i skjulet blir natten lång. · STORY |
| 0:09 | händelse | morgonkortStangt | dag=4 |
| 0:09 | väntar | notis:Blomkruka · +50 % | Blomkruka · +50 % |
| 0:12 | målruta |  | Vänta på sopbilen. Den lämnar något. |
| 0:14 | sak | du | (nytt mål i rutan) |
| 0:14 | pil |  | Vänta på sopbilen. Den lämnar något. |
| 0:14 | klar | du | (nytt mål i rutan) |
| 0:16 | sak | du | I natt somnar jag torr. Det börjar bli ett hem. |
| 0:16 | notis | tanke | 💭 I natt somnar jag torr. Det börjar bli ett hem. |
| 0:16 | röst | du | I natt somnar jag torr. Det börjar bli ett hem. · STORY |
| 0:20 | klar | du | I natt somnar jag torr. Det börjar bli ett hem. |
| 0:22 | sak | notis:Blomkruka · +50 % | Blomkruka · +50 % |
| 0:22 | notis |  | Blomkruka · +50 % |
| 0:25 | klar | notis:Blomkruka · +50 % | Blomkruka · +50 % |
| 0:26 | väntar | info:bra | 🛒 4 skräp från famnen i skottkärran |
| 0:34 | väntar | rolf | PERFEKT öppnare! Kärran vid lådan ä din. Den gnisslar. Precis som ja. Skriv ditt nummer på en lapp, så slipper ja skriva brev. /Rolf |
| 0:34 | sak | info:bra | 🛒 4 skräp från famnen i skottkärran |
| 0:34 | kvitto-visas | info:bra | 🛒 4 skräp från famnen i skottkärran |
| 0:34 | toast | bra | 🛒 4 skräp från famnen i skottkärran |
| 0:36 | skratt | du | falsk tuta |
| 0:36 | klar | info:bra | 🛒 4 skräp från famnen i skottkärran |
| 0:38 | händelse | printStart | sak=kruka |
| 0:40 | väntar | bud | (tips) |
| 0:40 | sak | bud | (tips) |
| 0:40 | väntar | du | En skottkärra! Jag väljer den med hjulet och kör den full med skräp. |
| 0:41 | toast | guld | ✅ |
| 0:41 | händelse | printKlar | sak=kruka n=39 |
| 0:41 | händelse | tagitUrPrint | sak=kruka n=1 |
| 0:42 | klar | bud | (tips) |
| 0:44 | sak | du | En skottkärra! Jag väljer den med hjulet och kör den full med skräp. |
| 0:44 | röst | du | En skottkärra! Jag väljer den med hjulet och kör den full med skräp. · MÅL |
| 0:47 | röst | ali | Du printar mina ritningar. Ingen har gjort det förut. Jag är inte rörd. Det är dammet. · STORY |
| 0:47 | butiksbubbla | ali | Du printar mina ritningar. Ingen har gjort det förut. Jag är inte rörd. Det är dammet. |
| 0:49 | aliSalt | ali | 105 |
| 0:49 | klar | du | En skottkärra! Jag väljer den med hjulet och kör den full med skräp. |
| 0:57 | väntar | värld:TUUT! Hej grannen! | TUUT! Hej grannen! |
| 0:58 | händelse | printStart | sak=kruka |
| 1:01 | toast | guld | ✅ |
| 1:01 | händelse | printKlar | sak=kruka n=40 |
| 1:01 | sak | foto | Rolfs bänk (och min tumme) |
| 1:01 | foto | du | Rolfs bänk (och min tumme) |
| 1:02 | händelse | tagitUrPrint | sak=kruka n=1 |
| 1:04 | klar | foto | Rolfs bänk (och min tumme) |
| 1:09 | aliSalt | ali | 105 |
| 1:12 | sak | du | Han kommer hit varje kväll. Nu vet jag var. |
| 1:12 | notis | tanke | 💭 Han kommer hit varje kväll. Nu vet jag var. |
| 1:12 | röst | du | Han kommer hit varje kväll. Nu vet jag var. · STORY |
| 1:16 | klar | du | Han kommer hit varje kväll. Nu vet jag var. |
| 1:20 | struken | värld:TUUT! Hej grannen! | TUUT! Hej grannen! |
| 1:25 | händelse | printStart | sak=kruka |
| 1:27 | toast | guld | ✅ |
| 1:27 | händelse | printKlar | sak=kruka n=41 |
| 1:28 | händelse | tagitUrPrint | sak=kruka n=1 |
| 1:32 | väntar | ali | Jag har ritat något i natt. Kanske en fågel. Kanske en stol. |
| 1:33 | sak | ali | Jag har ritat något i natt. Kanske en fågel. Kanske en stol. |
| 1:33 | röst | ali | Jag har ritat något i natt. Kanske en fågel. Kanske en stol. · SMÅPRAT |
| 1:34 | bubbla |  | Jag har ritat något i natt. Kanske en fågel. Kanske en stol. |
| 1:35 | aliSalt | ali | 105 |
| 1:38 | klar | ali | Jag har ritat något i natt. Kanske en fågel. Kanske en stol. |
| 1:46 | händelse | printStart | sak=kruka |
| 1:49 | toast | guld | ✅ |
| 1:49 | händelse | printKlar | sak=kruka n=42 |
| 1:50 | händelse | tagitUrPrint | sak=kruka n=1 |
| 1:57 | aliSalt | ali | 105 |
| 2:07 | händelse | printStart | sak=kruka |
| 2:08 | väntar | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått TAK. Och arbetsbord. Skriv in, Gunnar. Du skriver aldrig in. |
| 2:08 | radio | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått TAK. Och arbetsbord. Skriv in, Gunnar. Du skriver aldrig in. |
| 2:08 | skratt | du | Radio-Kjelle |
| 2:08 | sak | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått TAK. Och arbetsbord. Skriv in, Gunnar. Du skriver aldrig in. |
| 2:08 | notis |  | 📻 Radio Tippen: Radio Tippen, Kjelle här. Skjulet vid tippen har fått TAK. Och arbetsbord. Skriv in, Gunnar. Du skriver aldrig in. |
| 2:08 | röst | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått TAK. Och arbetsbord. Skriv in, Gunnar. Du skriver aldrig in. · REAKTION |
| 2:10 | toast | guld | ✅ |
| 2:10 | händelse | printKlar | sak=kruka n=43 |
| 2:11 | händelse | tagitUrPrint | sak=kruka n=1 |
| 2:18 | klar | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått TAK. Och arbetsbord. Skriv in, Gunnar. Du skriver aldrig in. |
| 2:18 | aliSalt | ali | 105 |
| 2:23 | skratt | du | falsk tuta |
| 2:23 | paket |  | ge |
| 2:23 | väntar |  | (läget ändras) |
| 2:26 | sak |  | (läget ändras) |
| 2:26 | brev | rolf | rolf:2 |
| 2:26 | klar |  | (läget ändras) |
| 2:29 | väntar | värld:Mjau. | Mjau. |
| 2:37 | väntar | värld:TUUT TUUT! | TUUT TUUT! |
| 2:41 | händelse | printStart | sak=kruka |
| 2:44 | toast | guld | ✅ |
| 2:44 | händelse | printKlar | sak=kruka n=44 |
| 2:44 | händelse | tagitUrPrint | sak=kruka n=1 |
| 2:49 | struken | värld:Mjau. | Mjau. |
| 2:52 | aliSalt | ali | 105 |
| 2:54 | upplåst | skrivare | trim_skrivare2 |
| 2:54 | brott | UPPLÅST | trim_skrivare2 (skrivare 281 av 75) |
| 2:54 | händelse | upplast | id=trim_skrivare2 flask=skrivare |
| 2:54 | paket |  | tanke → sms |
| 2:54 | tanke | du | Skrivare M hinner inte heller. Den kunde gå fortare. |
| 2:54 | väntar | du | Skrivare M hinner inte heller. Den kunde gå fortare. |
| 2:54 | väntar | ali | Ali här. Skrivartrim igen. Nästa nivå. Den här gången skruvade jag åt rätt håll. |
| 2:59 | struken | värld:TUUT TUUT! | TUUT TUUT! |
| 3:02 | väntar | rolf | Tjo. Ska grilla på lördag. Min grillspade smälte. Kan du göra en sån hä? /Rolf 🍖​ |
| 3:02 | paket |  | ge |
| 3:02 | väntar |  | (läget ändras) |
| 3:02 | sak | rolf | Tjo. Ska grilla på lördag. Min grillspade smälte. Kan du göra en sån hä? /Rolf 🍖​ |
| 3:02 | lapp | Brev från Rolf | Tjo. Ska grilla på lördag. Min grillspade smälte. Kan du göra en sån hä? /Rolf 🍖​ |
| 3:02 | röst | rolf | Tjo. Ska grilla på lördag. Min grillspade smälte. Kan du göra en sån hä? /Rolf 🍖​ · STORY |
| 3:02 | händelse | malKlart | id=rolf2-brev del=Dag 4 – Kärran och mer vind nasta=rolf2-printa |
| 3:02 | väntar | du | Printa grillspade. |
| 3:02 | MÅL |  | Printa grillspade |
| 3:06 | målruta |  | Printa grillspade |
| 3:06 | händelse | printStart | sak=grillspade |
| 3:06 | händelse | malKlart | id=rolf2-printa del=Dag 4 – Kärran och mer vind nasta=rolf2-ge |
| 3:06 | väntar | du | Ge Rolf grillspade. |
| 3:06 | MÅL |  | Ge Rolf grillspade |
| 3:09 | klar | rolf | Tjo. Ska grilla på lördag. Min grillspade smälte. Kan du göra en sån hä? /Rolf 🍖​ |
| 3:09 | händelse | brevLast | id=rolf:2 |
| 3:10 | målruta |  | Ge Rolf grillspade |
| 3:10 | toast | guld | ✅ |
| 3:10 | händelse | printKlar | sak=grillspade n=1 |
| 3:10 | kvittens-bock |  | ✓ Printa grillspade |
| 3:11 | händelse | tagitUrPrint | sak=grillspade n=1 |
| 3:11 | struken | du | Printa grillspade. |
| 3:11 | sak |  | (läget ändras) |
| 3:11 | klar |  | (läget ändras) |
| 3:11 | sak | du | Ge Rolf grillspade. |
| 3:11 | pil |  | Ge Rolf grillspade |
| 3:11 | röst | du | Ge Rolf grillspade. · MÅL |
| 3:13 | klar | du | Ge Rolf grillspade. |
| 3:17 | händelse | lagtIPostlada | sak=grillspade rolf=2 jobb=false |
| 3:17 | struken | kedja | rolf2 |
| 3:17 | händelse | malKlart | id=rolf2-ge del=Dag 4 – Kärran och mer vind nasta=n3-tom-full-karra |
| 3:17 | väntar | du | Kärran rymmer massor. Jag fyller den och tippar allt i kvarnen. |
| 3:17 | målruta |  | Töm en full kärra i kvarnen |
| 3:17 | MÅL |  | Töm en full kärra i kvarnen |
| 3:17 | sak | du | Kärran rymmer massor. Jag fyller den och tippar allt i kvarnen. |
| 3:17 | pil |  | Töm en full kärra i kvarnen |
| 3:17 | notis | tanke | 💭 Kärran rymmer massor. Jag fyller den och tippar allt i kvarnen. |
| 3:17 | röst | du | Kärran rymmer massor. Jag fyller den och tippar allt i kvarnen. · MÅL |
| 3:21 | kvittens-bock |  | ✓ Ge Rolf grillspade |
| 3:22 | klar | du | Kärran rymmer massor. Jag fyller den och tippar allt i kvarnen. |
| 3:24 | väntar | info:bra | 🛒 4 skräp från famnen i skottkärran |
| 3:24 | sak | info:bra | 🛒 4 skräp från famnen i skottkärran |
| 3:24 | kvitto-visas | info:bra | 🛒 4 skräp från famnen i skottkärran |
| 3:24 | toast | bra | 🛒 4 skräp från famnen i skottkärran |
| 3:26 | karraKlick | du | träff |
| 3:26 | klar | info:bra | 🛒 4 skräp från famnen i skottkärran |
| 3:27 | karraKlick | du | träff |
| 3:28 | karraKlick | du | träff |
| 3:29 | karraKlick | du | träff |
| 3:30 | karraKlick | du | träff |
| 3:31 | karraKlick | du | träff |
| 3:32 | karraKlick | du | träff |
| 3:32 | tanke | du | En husvagn mitt i tippen. Och grinden är låst. |
| 3:32 | väntar | du | En husvagn mitt i tippen. Och grinden är låst. |
| 3:33 | karraKlick | du | träff |
| 3:36 | sak | du | Skrivare M hinner inte heller. Den kunde gå fortare. |
| 3:36 | notis | tanke | 💭 Skrivare M hinner inte heller. Den kunde gå fortare. |
| 3:36 | röst | du | Skrivare M hinner inte heller. Den kunde gå fortare. · STORY |
| 3:36 | tanke | du | Det får inte plats. Jag behöver något att tippa i. |
| 3:36 | väntar | du | Det får inte plats. Jag behöver något att tippa i. |
| 3:36 | väntar | info:bra | 9 st i tratten · 7 st på marken bredvid |
| 3:36 | händelse | malKlart | id=n3-tom-full-karra del=Dag 4 – Kärran och mer vind nasta=sophallare |
| 3:36 | struken | du | En husvagn mitt i tippen. Och grinden är låst. |
| 3:36 | väntar | du | En sophållare bakom kvarnen. Då matar den sig själv. |
| 3:36 | MÅL |  | Plocka skräp och mal det |
| 3:40 | målruta |  | Plocka skräp och mal det |
| 3:40 | kvittens-bock |  | ✓ Töm en full kärra i kvarnen |
| 3:40 | klar | du | Skrivare M hinner inte heller. Den kunde gå fortare. |
| 3:40 | sak | info:bra | 9 st i tratten · 7 st på marken bredvid |
| 3:40 | kvitto-visas | info:bra | 9 st i tratten · 7 st på marken bredvid |
| 3:40 | toast | bra | 9 st i tratten · 7 st på marken bredvid |
| 3:42 | klar | info:bra | 9 st i tratten · 7 st på marken bredvid |
| 3:44 | sak | du | En sophållare bakom kvarnen. Då matar den sig själv. |
| 3:44 | pil |  | Plocka skräp och mal det |
| 3:44 | notis | tanke | 💭 En sophållare bakom kvarnen. Då matar den sig själv. |
| 3:44 | röst | du | En sophållare bakom kvarnen. Då matar den sig själv. · MÅL |
| 3:46 | väntar | bud | (tips) |
| 3:48 | klar | du | En sophållare bakom kvarnen. Då matar den sig själv. |
| 3:50 | sak | du | Det får inte plats. Jag behöver något att tippa i. |
| 3:50 | notis | tanke | 💭 Det får inte plats. Jag behöver något att tippa i. |
| 3:50 | röst | du | Det får inte plats. Jag behöver något att tippa i. · STORY |
| 3:51 | händelse | printStart | sak=kruka |
| 3:54 | toast | guld | ✅ |
| 3:54 | händelse | printKlar | sak=kruka n=45 |
| 3:55 | händelse | tagitUrPrint | sak=kruka n=1 |
| 3:55 | klar | du | Det får inte plats. Jag behöver något att tippa i. |
| 3:57 | sak | bud | (tips) |
| 3:58 | klar | bud | (tips) |
| 4:00 | meddelande | mamma | Jag läste om en man som bodde på en soptipp. Han blev attackerad av måsar. Finns det måsar där? |
| 4:01 | röst | mamma | Jag läste om en man som bodde på en soptipp. Han blev attackerad av måsar. Finns det måsar där? · STORY |
| 4:12 | paket |  | sms |
| 4:12 | väntar | mamma | En katt? Är den vaccinerad? Rör den inte. Eller jo. Ge den en macka. |
| 4:22 | händelse | brevLast | id=m_masar |
| 4:24 | sak | ali | Ali här. Skrivartrim igen. Nästa nivå. Den här gången skruvade jag åt rätt håll. |
| 4:24 | sms | ali | Ali här. Skrivartrim igen. Nästa nivå. Den här gången skruvade jag åt rätt håll. |
| 4:24 | sms-bubbla | ali | Ali här. Skrivartrim igen. Nästa nivå. Den här gången skruvade jag åt rätt håll. |
| 4:24 | röst | ali | Ali här. Skrivartrim igen. Nästa nivå. Den här gången skruvade jag åt rätt håll. · STORY |
| 4:25 | aliSalt | ali | 105 |
| 4:31 | klar | ali | Ali här. Skrivartrim igen. Nästa nivå. Den här gången skruvade jag åt rätt håll. |
| 4:32 | skratt | du | falsk tuta |
| 4:40 | händelse | printStart | sak=kruka |
| 4:42 | toast | guld | ✅ |
| 4:42 | händelse | printKlar | sak=kruka n=46 |
| 4:43 | händelse | tagitUrPrint | sak=kruka n=1 |
| 4:49 | paket |  | tanke |
| 4:49 | tanke | du | Jaha, Rolf har hämtat grillspade. |
| 4:49 | väntar | du | Jaha, Rolf har hämtat grillspade. |
| 4:50 | aliSalt | ali | 105 |
| 4:51 | sak | du | Jaha, Rolf har hämtat grillspade. |
| 4:51 | notis | tanke | 💭 Jaha, Rolf har hämtat grillspade. |
| 4:51 | röst | du | Jaha, Rolf har hämtat grillspade. · REAKTION |
| 4:54 | klar | du | Jaha, Rolf har hämtat grillspade. |
| 5:03 | händelse | printStart | sak=kruka |
| 5:06 | toast | guld | ✅ |
| 5:06 | händelse | printKlar | sak=kruka n=47 |
| 5:06 | händelse | tagitUrPrint | sak=kruka n=1 |
| 5:14 | aliSalt | ali | 105 |
| 5:23 | händelse | printStart | sak=kruka |
| 5:24 | paket |  | tanke |
| 5:24 | tanke | du | En badanka. Den överlevde kvarnen. |
| 5:24 | väntar | du | En badanka. Den överlevde kvarnen. |
| 5:24 | skratt | du | kvarnen spottar |
| 5:25 | toast | guld | ✅ |
| 5:25 | händelse | printKlar | sak=kruka n=48 |
| 5:26 | händelse | tagitUrPrint | sak=kruka n=1 |
| 5:33 | aliSalt | ali | 105 |
| 5:42 | händelse | printStart | sak=kruka |
| 5:45 | toast | guld | ✅ |
| 5:45 | händelse | printKlar | sak=kruka n=49 |
| 5:46 | händelse | tagitUrPrint | sak=kruka n=1 |
| 5:53 | aliSalt | ali | 105 |
| 6:02 | händelse | printStart | sak=kruka |
| 6:05 | toast | guld | ✅ |
| 6:05 | händelse | printKlar | sak=kruka n=50 |
| 6:06 | händelse | tagitUrPrint | sak=kruka n=1 |
| 6:09 | sak | mamma | En katt? Är den vaccinerad? Rör den inte. Eller jo. Ge den en macka. |
| 6:09 | sms | mamma | En katt? Är den vaccinerad? Rör den inte. Eller jo. Ge den en macka. |
| 6:09 | sms-bubbla | mamma | En katt? Är den vaccinerad? Rör den inte. Eller jo. Ge den en macka. |
| 6:09 | röst | mamma | En katt? Är den vaccinerad? Rör den inte. Eller jo. Ge den en macka. · STORY |
| 6:10 | väntar | mamma | Det har ringt en karl som heter Rolf och frågat om du gillar korv. Vem är det? Varför har han mitt nummer? |
| 6:13 | aliSalt | ali | 105 |
| 6:15 | klar | mamma | En katt? Är den vaccinerad? Rör den inte. Eller jo. Ge den en macka. |
| 6:24 | händelse | printStart | sak=kruka |
| 6:24 | sak | du | En badanka. Den överlevde kvarnen. |
| 6:24 | notis | tanke | 💭 En badanka. Den överlevde kvarnen. |
| 6:24 | röst | du | En badanka. Den överlevde kvarnen. · REAKTION |
| 6:27 | toast | guld | ✅ |
| 6:27 | händelse | printKlar | sak=kruka n=51 |
| 6:27 | klar | du | En badanka. Den överlevde kvarnen. |
| 6:28 | händelse | tagitUrPrint | sak=kruka n=1 |
| 6:36 | aliSalt | ali | 105 |
| 6:45 | händelse | printStart | sak=kruka |
| 6:48 | toast | guld | ✅ |
| 6:48 | händelse | printKlar | sak=kruka n=52 |
| 6:48 | händelse | tagitUrPrint | sak=kruka n=1 |
| 6:56 | aliSalt | ali | 105 |
| 7:05 | händelse | printStart | sak=kruka |
| 7:06 | skratt | du | falsk tuta |
| 7:06 | väntar | värld:TUUT TUUT! | TUUT TUUT! |
| 7:06 | sak | värld:TUUT TUUT! | TUUT TUUT! |
| 7:06 | bubbla |  | TUUT TUUT! |
| 7:08 | toast | guld | ✅ |
| 7:08 | händelse | printKlar | sak=kruka n=53 |
| 7:08 | händelse | tagitUrPrint | sak=kruka n=1 |
| 7:09 | klar | värld:TUUT TUUT! | TUUT TUUT! |
| 7:16 | aliSalt | ali | 105 |
| 7:20 | upplåst | bara | matarband |
| 7:20 | brott | RESERV | matarband (bara 0 av 6) |
| 7:20 | händelse | upplast | id=matarband flask=bara |
| 7:20 | paket |  | sms |
| 7:20 | väntar | ali | Ali här. 🗑️ Sophållaren. Jag frågade AI:n hur man slipper bära skräp. Den gjorde det här. Den har mer fritid än jag. Suck. |
| 7:20 | sak | ali | Ali här. 🗑️ Sophållaren. Jag frågade AI:n hur man slipper bära skräp. Den gjorde det här. Den har mer fritid än jag. Suck. |
| 7:20 | sms | ali | Ali här. 🗑️ Sophållaren. Jag frågade AI:n hur man slipper bära skräp. Den gjorde det här. Den har mer fritid än jag. Suck. |
| 7:20 | sms-bubbla | ali | Ali här. 🗑️ Sophållaren. Jag frågade AI:n hur man slipper bära skräp. Den gjorde det här. Den har mer fritid än jag. Suck. |
| 7:20 | röst | ali | Ali här. 🗑️ Sophållaren. Jag frågade AI:n hur man slipper bära skräp. Den gjorde det här. Den har mer fritid än jag. Suck. · STORY |
| 7:20 | väntar | mamma | Det har ringt en karl som heter Rolf och frågat om du gillar korv. Vem är det? Varför har han mitt nummer? |
| 7:25 | händelse | printStart | sak=kruka |
| 7:27 | toast | guld | ✅ |
| 7:27 | händelse | printKlar | sak=kruka n=54 |
| 7:28 | händelse | tagitUrPrint | sak=kruka n=1 |
| 7:30 | klar | ali | Ali här. 🗑️ Sophållaren. Jag frågade AI:n hur man slipper bära skräp. Den gjorde det här. Den har mer fritid än jag. Suck. |
| 7:35 | aliSalt | ali | 105 |
| 7:39 | toast | guld | 3D-modell köpt – printa sophållare på skrivaren |
| 7:39 | händelse | kopt | sak=matarband |
| 7:48 | händelse | printStart | sak=byggsats:matarband |
| 7:51 | toast | bra | Del 1 av 3 klar |
| 7:55 | toast | bra | Del 2 av 3 klar |
| 7:57 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 8:05 | toast | skak | handen skakar: fullt |
| 8:11 | händelse | printKlar | sak=byggsats:matarband n=1 |
| 8:11 | toast | guld | ✅ |
| 8:18 | händelse | tagitUrPrint | sak=byggsats:matarband n=1 |
| 8:18 | paket |  | sms |
| 8:18 | väntar | ali | Ali här. Jag såg Sophållare på avstånd. Ett streck blev lite snett. Mitt fel. Vackert ändå. |
| 8:18 | paket |  | sms |
| 8:18 | väntar | ali | Ali igen. Jag har sagt till min bror att jag inte går i pension. Jag startar något. Han skrattade. Jag skrattade också. Men jag menar det. Tack. Säg inget. |
| 8:19 | händelse | placerat | sak=sophallare |
| 8:19 | kvittens | du | Nu kan jag tömma hela kärran på en gång. |
| 8:19 | varför | du | Krukor är bra. Pallar är bättre. |
| 8:19 | väntar | du | Nu kan jag tömma hela kärran på en gång. |
| 8:19 | väntar | info:guld | 🗑️ Sophållaren står bakom kvarnen! Töm allt skräp i den – den matar kvarnen själv. |
| 8:19 | sak | du | Nu kan jag tömma hela kärran på en gång. |
| 8:19 | notis | tanke | 💭 Nu kan jag tömma hela kärran på en gång. |
| 8:19 | röst | du | Nu kan jag tömma hela kärran på en gång. · STORY |
| 8:19 | händelse | malKlart | id=sophallare del=Dag 4 – Kärran och mer vind nasta=pall |
| 8:19 | väntar | du | Jag behöver något att sitta på. En pall. Lagom ambitiöst. |
| 8:19 | MÅL |  | Printa en pall |
| 8:23 | klar | du | Nu kan jag tömma hela kärran på en gång. |
| 8:23 | sak | info:guld | 🗑️ Sophållaren står bakom kvarnen! Töm allt skräp i den – den matar kvarnen själv. |
| 8:23 | kvitto-visas | info:guld | 🗑️ Sophållaren står bakom kvarnen! Töm allt skräp i den – den matar kvarnen själv. |
| 8:23 | toast | guld | 🗑️ Sophållaren står bakom kvarnen! Töm allt skräp i den – den matar kvarnen själv. |
| 8:23 | målruta |  | Printa en pall |
| 8:25 | klar | info:guld | 🗑️ Sophållaren står bakom kvarnen! Töm allt skräp i den – den matar kvarnen själv. |
| 8:27 | sak | du | Jag behöver något att sitta på. En pall. Lagom ambitiöst. |
| 8:27 | pil |  | Printa en pall |
| 8:27 | notis | tanke | 💭 Jag behöver något att sitta på. En pall. Lagom ambitiöst. |
| 8:27 | röst | du | Jag behöver något att sitta på. En pall. Lagom ambitiöst. · MÅL |
| 8:27 | nick |  | nick:46 |
| 8:31 | klar | du | Jag behöver något att sitta på. En pall. Lagom ambitiöst. |
| 8:32 | brott | FEL YTA | blå kvarnen har bla2, ska vara bla3 |
| 8:33 | struken | ali | Ali här. Jag såg Sophållare på avstånd. Ett streck blev lite snett. Mitt fel. Vackert ändå. |
| 8:40 | händelse | kopt | sak=pall |
| 8:40 | röst | ali | Bra val. Folk köper sånt. Jag vet inte varför. · STORY |
| 8:40 | upprepning | ali | Bra val. Folk köper sånt. Jag vet inte varför. |
| 8:40 | butiksbubbla | ali | Pall? Bra val. Folk köper sånt. Jag vet inte varför. |
| 8:49 | händelse | printStart | sak=pall |
| 8:54 | toast | guld | ✅ |
| 8:54 | händelse | printKlar | sak=pall n=1 |
| 8:54 | händelse | malKlart | id=pall del=Dag 4 – Kärran och mer vind nasta=vind4 |
| 8:54 | väntar | du | En vindsnurra till på skjulets tak. Skrivarna vill ha mer ström. |
| 8:54 | målruta |  | Printa och sälj |
| 8:54 | MÅL |  | Printa och sälj |
| 8:55 | sak | du | En vindsnurra till på skjulets tak. Skrivarna vill ha mer ström. |
| 8:55 | pil |  | Printa och sälj |
| 8:55 | notis | tanke | 💭 En vindsnurra till på skjulets tak. Skrivarna vill ha mer ström. |
| 8:55 | röst | du | En vindsnurra till på skjulets tak. Skrivarna vill ha mer ström. · MÅL |
| 8:55 | händelse | tagitUrPrint | sak=pall n=1 |
| 8:58 | kvittens-bock |  | ✓ Printa en pall |
| 9:00 | klar | du | En vindsnurra till på skjulets tak. Skrivarna vill ha mer ström. |
| 9:01 | händelse | placerat | sak=pall |
| 9:19 | händelse | printStart | sak=pall |
| 9:24 | toast | guld | ✅ |
| 9:24 | händelse | printKlar | sak=pall n=2 |
| 9:24 | händelse | tagitUrPrint | sak=pall n=1 |
| 9:32 | aliSalt | ali | 180 |
| 9:40 | händelse | printStart | sak=pall |
| 9:45 | toast | guld | ✅ |
| 9:45 | händelse | printKlar | sak=pall n=3 |
| 9:45 | händelse | tagitUrPrint | sak=pall n=1 |
| 9:53 | aliSalt | ali | 171 |
| 10:02 | händelse | printStart | sak=pall |
| 10:07 | toast | guld | ✅ |
| 10:07 | händelse | printKlar | sak=pall n=4 |
| 10:07 | händelse | tagitUrPrint | sak=pall n=1 |
| 10:15 | aliSalt | ali | 162 |
| 10:30 | väntar | värld:Mjau. | Mjau. |
| 10:33 | sak | värld:Mjau. | Mjau. |
| 10:33 | bubbla |  | Mjau. |
| 10:34 | skratt | du | falsk tuta |
| 10:35 | klar | värld:Mjau. | Mjau. |
| 10:42 | händelse | printStart | sak=pall |
| 10:47 | toast | guld | ✅ |
| 10:47 | händelse | printKlar | sak=pall n=5 |
| 10:47 | händelse | tagitUrPrint | sak=pall n=1 |
| 10:55 | aliSalt | ali | 154 |
| 11:04 | händelse | printStart | sak=pall |
| 11:09 | upplåst | strom | vindsnurra2 |
| 11:09 | brott | UPPLÅST | vindsnurra2 (strom 30 av 15) |
| 11:09 | händelse | upplast | id=vindsnurra2 flask=strom |
| 11:09 | paket |  | tanke → sms |
| 11:09 | tanke | du | En snurra räcker inte. Skrivarna står still så fort det blir stilla. |
| 11:09 | väntar | du | En snurra räcker inte. Skrivarna står still så fort det blir stilla. |
| 11:09 | väntar | ali | Ali här. En snurra till? Taket har plats för två. Vinden har inget emot det. |
| 11:09 | sak | du | En snurra räcker inte. Skrivarna står still så fort det blir stilla. |
| 11:09 | notis | tanke | 💭 En snurra räcker inte. Skrivarna står still så fort det blir stilla. |
| 11:09 | röst | du | En snurra räcker inte. Skrivarna står still så fort det blir stilla. · STORY |
| 11:09 | toast | guld | ✅ |
| 11:09 | händelse | printKlar | sak=pall n=6 |
| 11:09 | händelse | tagitUrPrint | sak=pall n=1 |
| 11:15 | klar | du | En snurra räcker inte. Skrivarna står still så fort det blir stilla. |
| 11:17 | sak | ali | Ali här. En snurra till? Taket har plats för två. Vinden har inget emot det. |
| 11:17 | sms | ali | Ali här. En snurra till? Taket har plats för två. Vinden har inget emot det. |
| 11:17 | sms-bubbla | ali | Ali här. En snurra till? Taket har plats för två. Vinden har inget emot det. |
| 11:17 | röst | ali | Ali här. En snurra till? Taket har plats för två. Vinden har inget emot det. · STORY |
| 11:17 | aliSalt | ali | 147 |
| 11:23 | klar | ali | Ali här. En snurra till? Taket har plats för två. Vinden har inget emot det. |
| 11:27 | toast | guld | 3D-modell köpt – printa vindsnurra till skjultaket på skrivaren |
| 11:27 | händelse | kopt | sak=vindsnurra |
| 11:36 | händelse | printStart | sak=byggsats:vindsnurra |
| 11:39 | händelse | printKlar | sak=byggsats:vindsnurra n=1 |
| 11:39 | toast | guld | ✅ |
| 11:40 | väntar | info:guld | 🌬️ Vindsnurran ligger i handen – klicka på skjulet för att sätta den på taket |
| 11:40 | händelse | tagitUrPrint | sak=byggsats:vindsnurra n=1 |
| 11:40 | sak | info:guld | 🌬️ Vindsnurran ligger i handen – klicka på skjulet för att sätta den på taket |
| 11:40 | kvitto-visas | info:guld | 🌬️ Vindsnurran ligger i handen – klicka på skjulet för att sätta den på taket |
| 11:40 | toast | guld | 🌬️ Vindsnurran ligger i handen – klicka på skjulet för att sätta den på taket |
| 11:42 | klar | info:guld | 🌬️ Vindsnurran ligger i handen – klicka på skjulet för att sätta den på taket |
| 11:48 | händelse | placerat | sak=vindsnurra |
| 11:48 | väntar | info:guld | 🌬️ Vindsnurran sitter på taket – den trampar cykeln åt dig när det blåser |
| 11:48 | monterat | du | byggsats:vindsnurra |
| 11:48 | händelse | monterat | sak=vindsnurra |
| 11:48 | sak | info:guld | 🌬️ Vindsnurran sitter på taket – den trampar cykeln åt dig när det blåser |
| 11:48 | kvitto-visas | info:guld | 🌬️ Vindsnurran sitter på taket – den trampar cykeln åt dig när det blåser |
| 11:48 | toast | guld | 🌬️ Vindsnurran sitter på taket – den trampar cykeln åt dig när det blåser |
| 11:48 | händelse | malKlart | id=vind4 del=Dag 4 – Kärran och mer vind nasta=n3-isolera-tva-vaggar |
| 11:48 | väntar | du | Slut på trampandet. Nästan. |
| 11:48 | väntar | du | Det drar genom väggarna. Isolering, och sen blir det varmt. |
| 11:48 | MÅL |  | Isolera två väggar · 0/2 |
| 11:50 | klar | info:guld | 🌬️ Vindsnurran sitter på taket – den trampar cykeln åt dig när det blåser |
| 11:50 | sak | du | Slut på trampandet. Nästan. |
| 11:50 | kvitto-visas | du | Slut på trampandet. Nästan. |
| 11:50 | lapp | 📔 Dagbok | Slut på trampandet. Nästan. |
| 11:50 | dagbokrad | du | Slut på trampandet. Nästan. |
| 11:50 | notis | dagbok | Slut på trampandet. Nästan. |
| 11:50 | klar | du | Slut på trampandet. Nästan. |
| 11:50 | målruta |  | Isolera två väggar · 0/2 |
| 11:51 | sak | du | Det drar genom väggarna. Isolering, och sen blir det varmt. |
| 11:51 | pil |  | Isolera två väggar · 0/2 |
| 11:51 | notis | tanke | 💭 Det drar genom väggarna. Isolering, och sen blir det varmt. |
| 11:51 | röst | du | Det drar genom väggarna. Isolering, och sen blir det varmt. · MÅL |
| 11:51 | nick |  | nick:48 |
| 11:56 | klar | du | Det drar genom väggarna. Isolering, och sen blir det varmt. |
| 11:58 | händelse | pappa | Pappa ringer |
| 12:01 | röst | pappa | Hej. Det är pappa. · STORY |
| 12:03 | röst | du | Hej pappa. · STORY |
| 12:06 | röst | pappa | Mamma står bredvid. Hon säger att jag ska fråga om du äter. · STORY |
| 12:10 | röst | du | Jag äter. Och jag har en egen kvarn nu. Och en 3D-skrivare. · STORY |
| 12:16 | röst | pappa | Jaha. En kvarn. Vad lugnt då. · STORY |
| 12:18 | röst | pappa | Jag kanske kommer förbi nån dag. Om det passar. · STORY |
| 12:23 | röst | du | Det passar. · STORY |
| 12:26 | röst | pappa | Bra. Hej då då. · STORY |
| 12:34 | händelse | samtalSlut | id=pappa4 |
| 12:34 | struken | kedja | samtal4 |
| 12:40 | toast | guld | 3D-modell köpt – printa isolerskiva (vägg) på skrivaren |
| 12:40 | händelse | kopt | sak=vaggar |
| 12:49 | händelse | printStart | sak=byggsats:vaggar |
| 12:53 | händelse | printKlar | sak=byggsats:vaggar n=1 |
| 12:53 | toast | guld | ✅ |
| 12:53 | händelse | tagitUrPrint | sak=byggsats:vaggar n=1 |
| 12:57 | väntar | info:guld | 🧱 Bakväggen klar. 3 kvar. |
| 12:57 | sak | info:guld | 🧱 Bakväggen klar. 3 kvar. |
| 12:57 | kvitto-visas | info:guld | 🧱 Bakväggen klar. 3 kvar. |
| 12:57 | toast | guld | 🧱 Bakväggen klar. 3 kvar. |
| 12:59 | klar | info:guld | 🧱 Bakväggen klar. 3 kvar. |
| 13:07 | händelse | printStart | sak=byggsats:vaggar |
| 13:11 | händelse | printKlar | sak=byggsats:vaggar n=1 |
| 13:11 | toast | guld | ✅ |
| 13:11 | händelse | tagitUrPrint | sak=byggsats:vaggar n=1 |
| 13:15 | väntar | info:guld | 🧱 Vänster vägg klar. 2 kvar. |
| 13:15 | sak | info:guld | 🧱 Vänster vägg klar. 2 kvar. |
| 13:15 | kvitto-visas | info:guld | 🧱 Vänster vägg klar. 2 kvar. |
| 13:15 | toast | guld | 🧱 Vänster vägg klar. 2 kvar. |
| 13:15 | händelse | malKlart | id=n3-isolera-tva-vaggar del=Dag 4 – Kärran och mer vind nasta=sov4 |
| 13:15 | paket |  | lapp |
| 13:15 | väntar | du | Dag 4 är slut. Nu vet grannen att jag bor HÄR. Han verkar inte glad. En skrivare räcker inte. |
| 13:15 | MÅL |  | Klart för idag – sov när du vill |
| 13:17 | klar | info:guld | 🧱 Vänster vägg klar. 2 kvar. |
| 13:19 | målruta |  | Klart för idag – sov när du vill |
| 13:19 | kvittens-bock |  | ✓ Isolera två väggar · 2/2 |
| 13:19 | sak | du | (nytt mål i rutan) |
| 13:19 | pil |  | Klart för idag – sov när du vill |
| 13:19 | klar | du | (nytt mål i rutan) |
| 13:21 | sak | du | Dag 4 är slut. Nu vet grannen att jag bor HÄR. Han verkar inte glad. En skrivare räcker inte. |
| 13:21 | lapp | 📔 Dagbok | Dag 4 är slut. Nu vet grannen att jag bor HÄR. Han verkar inte glad. En skrivare räcker inte. |
| 13:21 | kvallsrad | du | Nu vet grannen att jag bor HÄR. Han verkar inte glad. En skrivare räcker inte. |
| 13:22 | klar | du | Dag 4 är slut. Nu vet grannen att jag bor HÄR. Han verkar inte glad. En skrivare räcker inte. |
| 13:22 | väntar | notis:🌇 Klockan är 21. Ali slår igen luckan.  | 🌇 Klockan är 21. Ali slår igen luckan. Dagens jobb är klart – gå in i skjulet och sov i sängen. |
| 13:24 | struken | mamma | Det har ringt en karl som heter Rolf och frågat om du gillar korv. Vem är det? Varför har han mitt nummer? |
| 13:27 | nattkort | du | 🌙 Dag 4 är slut. God natt. zzz… Nu vet grannen att jag bor HÄR. Han verkar inte glad. En skrivare räcker inte. DAGENS PRINTAR Blomkruka × 16 Pall × 6 Grillspad |

<details><summary>Botens handlingar dag 4</summary>

- 0:00 — dag 4 börjar — (2837 kr)
- 0:09 popup: "FORTSÄTT" (2837 kr)
- 0:26 gå till Rolfs postlåda (28 m) (2837 kr)
- 0:34 panel: "Rolfs postlåda
Det här låg i l" (2957 kr)
- 0:35 tjänar pengar till väntar på sopbilen (BO): 2957/3017 kr → printar blomkruka (105 kr) (2957 kr)
- 0:36 gå till skrivaren (8 m) (2957 kr)
- 0:38 printar Blomkruka (2957 kr)
- 0:42 tar ut 1 st ur skrivaren (2957 kr)
- 0:47 gå till Ali (26 m) (2957 kr)
- 0:47 öppnar Alis butik – sälja (2957 kr)
- 0:49 säljer hos Ali: +105 kr (3062 kr)
- 0:52 tjänar pengar till väntar på sopbilen (BO): 3062/3122 kr → printar blomkruka (105 kr) (3062 kr)
- 0:57 gå till skrivaren (24 m) (3062 kr)
- 0:58 printar Blomkruka (3062 kr)
- 1:02 tar ut 1 st ur skrivaren (3062 kr)
- 1:07 gå till Ali (24 m) (3062 kr)
- 1:07 öppnar Alis butik – sälja (3062 kr)
- 1:09 säljer hos Ali: +105 kr (3167 kr)
- 1:18 tjänar pengar till väntar på sopbilen (BO): 3167/3227 kr → printar blomkruka (105 kr) (3167 kr)
- 1:23 gå till skrivaren (24 m) (3167 kr)
- 1:25 printar Blomkruka (3167 kr)
- 1:28 tar ut 1 st ur skrivaren (3167 kr)
- 1:34 gå till Ali (24 m) (3167 kr)
- 1:34 öppnar Alis butik – sälja (3167 kr)
- 1:35 säljer hos Ali: +105 kr (3272 kr)
- 1:40 tjänar pengar till väntar på sopbilen (BO): 3272/3332 kr → printar blomkruka (105 kr) (3272 kr)
- 1:45 gå till skrivaren (24 m) (3272 kr)
- 1:46 printar Blomkruka (3272 kr)
- 1:50 tar ut 1 st ur skrivaren (3272 kr)
- 1:56 gå till Ali (24 m) (3272 kr)
- 1:56 öppnar Alis butik – sälja (3272 kr)
- 1:57 säljer hos Ali: +105 kr (3377 kr)
- 2:01 tjänar pengar till väntar på sopbilen (BO): 3377/3437 kr → printar blomkruka (105 kr) (3377 kr)
- 2:06 gå till skrivaren (24 m) (3377 kr)
- 2:07 printar Blomkruka (3377 kr)
- 2:11 tar ut 1 st ur skrivaren (3377 kr)
- 2:16 gå till Ali (24 m) (3377 kr)
- 2:16 öppnar Alis butik – sälja (3377 kr)
- 2:18 säljer hos Ali: +105 kr (3482 kr)
- 2:21 tjänar pengar till väntar på sopbilen (BO): 3482/3542 kr → printar blomkruka (105 kr) (3482 kr)
- 2:31 plockar 1 skräp på tippen (bär max 16) (3482 kr)
- 2:33 gå till kvarnen (11 m) (3482 kr)
- 2:39 gå till skrivaren (5 m) (3482 kr)
- 2:41 printar Blomkruka (3482 kr)
- 2:45 tar ut 1 st ur skrivaren (3482 kr)
- 2:51 gå till Ali (26 m) (3482 kr)
- 2:51 öppnar Alis butik – sälja (3482 kr)
- 2:52 säljer hos Ali: +105 kr (3587 kr)
- 3:02 gå till Rolfs postlåda (31 m) (3587 kr)
- 3:05 gå till skrivaren (8 m) (3587 kr)
- 3:06 printar Grillspade (3587 kr)
- 3:11 tar ut 1 st ur skrivaren (3587 kr)
- 3:15 valj grillspade: true, vald grillspade, post {"l":null,"tr":null,"tm":[]}, nummer false (3587 kr)
- 3:17 gå till Rolfs postlåda (8 m) (3587 kr)
- 3:34 fyller kärran med 8 skräp (3587 kr)
- 3:36 gå till kvarnen (12 m) (3587 kr)
- 3:49 tjänar pengar till väntar på flaskhalsen för matarband: 3587/3627 kr → printar blomkruka (105 kr) (3587 kr)
- 3:50 gå till skrivaren (5 m) (3587 kr)
- 3:51 printar Blomkruka (3587 kr)
- 3:55 tar ut 1 st ur skrivaren (3587 kr)
- 4:12 popup: "Bara en katt." (3587 kr)
- 4:22 popup: "Läst" (3587 kr)
- 4:23 gå till Ali (26 m) (3587 kr)
- 4:23 öppnar Alis butik – sälja (3587 kr)
- 4:25 säljer hos Ali: +105 kr (3692 kr)
- 4:33 tjänar pengar till väntar på flaskhalsen för matarband: 3692/3732 kr → printar blomkruka (105 kr) (3692 kr)
- 4:38 gå till skrivaren (24 m) (3692 kr)
- 4:40 printar Blomkruka (3692 kr)
- 4:44 tar ut 1 st ur skrivaren (3692 kr)
- 4:49 gå till Ali (24 m) (3692 kr)
- 4:49 öppnar Alis butik – sälja (3692 kr)
- 4:51 säljer hos Ali: +105 kr (3797 kr)
- 4:56 tjänar pengar till väntar på flaskhalsen för matarband: 3797/3837 kr → printar blomkruka (105 kr) (3797 kr)
- 5:01 gå till skrivaren (24 m) (3797 kr)
- 5:03 printar Blomkruka (3797 kr)
- 5:07 tar ut 1 st ur skrivaren (3797 kr)
- 5:12 gå till Ali (24 m) (3797 kr)
- 5:12 öppnar Alis butik – sälja (3797 kr)
- 5:14 säljer hos Ali: +105 kr (3902 kr)
- 5:16 tjänar pengar till väntar på flaskhalsen för matarband: 3902/3942 kr → printar blomkruka (105 kr) (3902 kr)
- 5:21 gå till skrivaren (24 m) (3902 kr)
- 5:23 printar Blomkruka (3902 kr)
- 5:27 tar ut 1 st ur skrivaren (3902 kr)
- 5:32 gå till Ali (24 m) (3902 kr)
- 5:32 öppnar Alis butik – sälja (3902 kr)
- 5:34 säljer hos Ali: +105 kr (4007 kr)
- 5:36 tjänar pengar till väntar på flaskhalsen för matarband: 4007/4047 kr → printar blomkruka (105 kr) (4007 kr)
- 5:41 gå till skrivaren (24 m) (4007 kr)
- 5:42 printar Blomkruka (4007 kr)
- 5:46 tar ut 1 st ur skrivaren (4007 kr)
- 5:52 gå till Ali (24 m) (4007 kr)
- 5:52 öppnar Alis butik – sälja (4007 kr)
- 5:53 säljer hos Ali: +105 kr (4112 kr)
- 5:55 tjänar pengar till väntar på flaskhalsen för matarband: 4112/4152 kr → printar blomkruka (105 kr) (4112 kr)
- 6:01 gå till skrivaren (24 m) (4112 kr)
- 6:02 printar Blomkruka (4112 kr)
- 6:06 tar ut 1 st ur skrivaren (4112 kr)
- 6:11 gå till Ali (24 m) (4112 kr)
- 6:11 öppnar Alis butik – sälja (4112 kr)
- 6:13 säljer hos Ali: +105 kr (4217 kr)
- 6:17 tjänar pengar till väntar på flaskhalsen för matarband: 4217/4257 kr → printar blomkruka (105 kr) (4217 kr)
- 6:22 gå till skrivaren (24 m) (4217 kr)
- 6:24 printar Blomkruka (4217 kr)
- 6:27 gå till kvarnen (1 m) (4217 kr)
- 6:28 gå till skrivaren (4 m) (4217 kr)
- 6:29 tar ut 1 st ur skrivaren (4217 kr)
- 6:34 gå till Ali (26 m) (4217 kr)
- 6:34 öppnar Alis butik – sälja (4217 kr)
- 6:36 säljer hos Ali: +105 kr (4322 kr)
- 6:38 tjänar pengar till väntar på flaskhalsen för matarband: 4322/4362 kr → printar blomkruka (105 kr) (4322 kr)
- 6:43 gå till skrivaren (24 m) (4322 kr)
- 6:45 printar Blomkruka (4322 kr)
- 6:49 tar ut 1 st ur skrivaren (4322 kr)
- 6:54 gå till Ali (24 m) (4322 kr)
- 6:54 öppnar Alis butik – sälja (4322 kr)
- 6:56 säljer hos Ali: +105 kr (4427 kr)
- 6:58 tjänar pengar till väntar på flaskhalsen för matarband: 4427/4467 kr → printar blomkruka (105 kr) (4427 kr)
- 7:03 gå till skrivaren (24 m) (4427 kr)
- 7:05 printar Blomkruka (4427 kr)
- 7:09 tar ut 1 st ur skrivaren (4427 kr)
- 7:14 gå till Ali (24 m) (4427 kr)
- 7:14 öppnar Alis butik – sälja (4427 kr)
- 7:16 säljer hos Ali: +105 kr (4532 kr)
- 7:18 tjänar pengar till väntar på flaskhalsen för matarband: 4532/4572 kr → printar blomkruka (105 kr) (4532 kr)
- 7:23 gå till skrivaren (24 m) (4532 kr)
- 7:25 printar Blomkruka (4532 kr)
- 7:29 tar ut 1 st ur skrivaren (4532 kr)
- 7:34 gå till Ali (24 m) (4532 kr)
- 7:34 öppnar Alis butik – sälja (4532 kr)
- 7:36 säljer hos Ali: +105 kr (4637 kr)
- 7:38 öppnar Alis butik – köpa sophållare (4637 kr)
- 7:40 köper matarband för 120 kr (4517 kr)
- 7:46 gå till skrivaren (24 m) (4517 kr)
- 7:48 printar Sophållare (3 delar) (4517 kr)
- 8:06 plockar 3 skräp på tippen (bär max 16) (4517 kr)
- 8:08 gå till kvarnen (11 m) (4517 kr)
- 8:18 gå till skrivaren (5 m) (4517 kr)
- 8:18 tar ut 1 st ur skrivaren (4517 kr)
- 8:19 gå till kvarnen (3 m) (4517 kr)
- 8:39 gå till Ali (29 m) (4517 kr)
- 8:39 öppnar Alis butik – köpa receptet pall (4517 kr)
- 8:41 köper pall för 80 kr (4437 kr)
- 8:48 gå till skrivaren (24 m) (4437 kr)
- 8:49 printar Pall (4437 kr)
- 8:55 tar ut 1 st ur skrivaren (4437 kr)
- 9:00 gå till platsen för pall (20 m) (4437 kr)
- 9:01 ställer ut pall (4437 kr)
- 9:02 tjänar pengar till väntar på flaskhalsen för vindsnurra2: 4437/4477 kr → printar pall (180 kr) (4437 kr)
- 9:12 plockar 1 skräp på tippen (bär max 16) (4437 kr)
- 9:14 gå till kvarnen (11 m) (4437 kr)
- 9:17 gå till skrivaren (5 m) (4437 kr)
- 9:19 printar Pall (4437 kr)
- 9:25 tar ut 1 st ur skrivaren (4437 kr)
- 9:30 gå till Ali (26 m) (4437 kr)
- 9:30 öppnar Alis butik – sälja (4437 kr)
- 9:32 säljer hos Ali: +180 kr (4617 kr)
- 9:33 tjänar pengar till väntar på flaskhalsen för vindsnurra2: 4617/4657 kr → printar pall (171 kr) (4617 kr)
- 9:38 gå till skrivaren (24 m) (4617 kr)
- 9:40 printar Pall (4617 kr)
- 9:46 tar ut 1 st ur skrivaren (4617 kr)
- 9:51 gå till Ali (24 m) (4617 kr)
- 9:51 öppnar Alis butik – sälja (4617 kr)
- 9:53 säljer hos Ali: +171 kr (4788 kr)
- 9:55 tjänar pengar till väntar på flaskhalsen för vindsnurra2: 4788/4828 kr → printar pall (162 kr) (4788 kr)
- 10:00 gå till skrivaren (24 m) (4788 kr)
- 10:02 printar Pall (4788 kr)
- 10:08 tar ut 1 st ur skrivaren (4788 kr)
- 10:13 gå till Ali (24 m) (4788 kr)
- 10:13 öppnar Alis butik – sälja (4788 kr)
- 10:15 säljer hos Ali: +162 kr (4950 kr)
- 10:17 tjänar pengar till väntar på flaskhalsen för vindsnurra2: 4950/4990 kr → printar pall (154 kr) (4950 kr)
- 10:29 plockar 5 skräp på tippen (bär max 16) (4950 kr)
- 10:33 gå till kvarnen (15 m) (4950 kr)
- 10:40 gå till skrivaren (5 m) (4950 kr)
- 10:42 printar Pall (4950 kr)
- 10:48 tar ut 1 st ur skrivaren (4950 kr)
- 10:53 gå till Ali (26 m) (4950 kr)
- 10:53 öppnar Alis butik – sälja (4950 kr)
- 10:55 säljer hos Ali: +154 kr (5104 kr)
- 10:57 tjänar pengar till väntar på flaskhalsen för vindsnurra2: 5104/5144 kr → printar pall (147 kr) (5104 kr)
- 11:02 gå till skrivaren (24 m) (5104 kr)
- 11:04 printar Pall (5104 kr)
- 11:10 tar ut 1 st ur skrivaren (5104 kr)
- 11:15 gå till Ali (24 m) (5104 kr)
- 11:15 öppnar Alis butik – sälja (5104 kr)
- 11:17 säljer hos Ali: +147 kr (5251 kr)
- 11:25 öppnar Alis butik – köpa vindsnurra till skjultaket (5251 kr)
- 11:28 köper vindsnurra för 133 kr (5118 kr)
- 11:34 gå till skrivaren (24 m) (5118 kr)
- 11:36 printar Vindsnurra till skjultaket (5118 kr)
- 11:41 tar ut 1 st ur skrivaren (5118 kr)
- 11:48 gå till sätt vindsnurran på taket (18 m) (5118 kr)
- 12:01 popup: "Svara E" (5118 kr)
- 12:07 popup: "Nästa E" (5118 kr)
- 12:17 popup: "Nästa E" (5118 kr)
- 12:24 popup: "Nästa E" (5118 kr)
- 12:29 popup: "Nästa E" (5118 kr)
- 12:34 popup: "Lägg på E" (5118 kr)
- 12:38 gå till Ali (20 m) (5118 kr)
- 12:38 öppnar Alis butik – köpa isolerskiva (vägg) (5118 kr)
- 12:41 köper vaggar för 130 kr (4988 kr)
- 12:47 gå till skrivaren (24 m) (4988 kr)
- 12:49 printar Isolerskiva (vägg) (4988 kr)
- 12:54 tar ut 1 st ur skrivaren (4988 kr)
- 12:57 gå till skjulet (bak) (17 m) (4988 kr)
- 13:05 gå till skrivaren (17 m) (4988 kr)
- 13:07 printar Isolerskiva (vägg) (4988 kr)
- 13:12 tar ut 1 st ur skrivaren (4988 kr)
- 13:15 gå till skjulet (vanster) (17 m) (4988 kr)
- 13:24 gå till sängen (1 m) (4988 kr)

</details>

## Dag 5

| Tid | Källa | Vem | Text |
|---|---|---|---|
| 13:27 | vara | ali | pall |
| 13:27 | händelse | malKlart | id=sov4 del=Dag 4 – Kärran och mer vind nasta=rolf3-brev |
| 13:27 | MÅL |  | Vänta på sopbilen. Den lämnar något. |
| 13:27 | skratt | du | falsk tuta |
| 0:01 | händelse | dagenBorjar | dag=5 |
| 0:01 | meddelande | du | Dag 5. 17 dagar till jul. Utan pengar blir det ingen jul här. |
| 0:01 | dagbokkort | du | Tätt och mysigt · Dag 5. 17 dagar till jul. Utan pengar blir det ingen jul här. |
| 0:01 | röst | du | Dag 5. 17 dagar till jul. Tätt och mysigt. Utan pengar blir det ingen jul här. · STORY |
| 0:08 | händelse | morgonkortStangt | dag=5 |
| 0:08 | målruta |  | Vänta på sopbilen. Den lämnar något. |
| 0:09 | väntar | notis:Pall · +50 % | Pall · +50 % |
| 0:14 | sak | du | (nytt mål i rutan) |
| 0:14 | pil |  | Vänta på sopbilen. Den lämnar något. |
| 0:14 | klar | du | (nytt mål i rutan) |
| 0:16 | struken | notis:🌇 Klockan är 21. Ali slår igen luckan.  | 🌇 Klockan är 21. Ali slår igen luckan. Dagens jobb är klart – gå in i skjulet och sov i sängen. |
| 0:16 | sak | notis:Pall · +50 % | Pall · +50 % |
| 0:16 | notis |  | Pall · +50 % |
| 0:18 | klar | notis:Pall · +50 % | Pall · +50 % |
| 0:20 | struken | ali | Ali igen. Jag har sagt till min bror att jag inte går i pension. Jag startar något. Han skrattade. Jag skrattade också. Men jag menar det. Tack. Säg inget. |
| 0:31 | väntar | rolf | Grillspaden ä ju KONST. Pengar i lådan. /Rolf |
| 0:34 | händelse | printStart | sak=pall |
| 0:39 | toast | guld | ✅ |
| 0:39 | händelse | printKlar | sak=pall n=7 |
| 0:40 | händelse | tagitUrPrint | sak=pall n=1 |
| 0:45 | väntar | ali | Kaktusen hälsar. Han heter Ahmed. |
| 0:45 | sak | ali | Kaktusen hälsar. Han heter Ahmed. |
| 0:45 | röst | ali | Kaktusen hälsar. Han heter Ahmed. · SMÅPRAT |
| 0:46 | väntar | mamma | Det finns måsar vid soptippar! Dom tar mat. Och små hundar. Du är inte en liten hund men ändå. |
| 0:46 | bubbla |  | Kaktusen hälsar. Han heter Ahmed. |
| 0:46 | butiksbubbla | ali | Köp nåt eller gå, min vän. Mina fötter värker. |
| 0:46 | röst | ali | Köp nåt eller gå, min vän. Mina fötter värker. · STORY |
| 0:47 | aliSalt | ali | 270 |
| 0:49 | klar | ali | Kaktusen hälsar. Han heter Ahmed. |
| 1:02 | toast | skak | handen skakar: fullt |
| 1:07 | paket |  | tanke |
| 1:07 | tanke | du | En tandborste. Den har varit på fel ställe. |
| 1:07 | väntar | du | En tandborste. Den har varit på fel ställe. |
| 1:07 | skratt | du | kvarnen spottar |
| 1:08 | sak | du | En tandborste. Den har varit på fel ställe. |
| 1:08 | notis | tanke | 💭 En tandborste. Den har varit på fel ställe. |
| 1:08 | röst | du | En tandborste. Den har varit på fel ställe. · REAKTION |
| 1:10 | händelse | printStart | sak=pall |
| 1:11 | klar | du | En tandborste. Den har varit på fel ställe. |
| 1:16 | toast | guld | ✅ |
| 1:16 | händelse | printKlar | sak=pall n=8 |
| 1:16 | händelse | tagitUrPrint | sak=pall n=1 |
| 1:20 | sak | mamma | Det finns måsar vid soptippar! Dom tar mat. Och små hundar. Du är inte en liten hund men ändå. |
| 1:20 | sms | mamma | Det finns måsar vid soptippar! Dom tar mat. Och små hundar. Du är inte en liten hund men ändå. |
| 1:20 | sms-bubbla | mamma | Det finns måsar vid soptippar! Dom tar mat. Och små hundar. Du är inte en liten hund men ändå. |
| 1:20 | röst | mamma | Det finns måsar vid soptippar! Dom tar mat. Och små hundar. Du är inte en liten hund men ändå. · STORY |
| 1:24 | aliSalt | ali | 257 |
| 1:28 | klar | mamma | Det finns måsar vid soptippar! Dom tar mat. Och små hundar. Du är inte en liten hund men ändå. |
| 1:36 | händelse | printStart | sak=pall |
| 1:40 | väntar | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har börjat isolera. Och pall. Det är stort, Gunnar. |
| 1:40 | radio | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har börjat isolera. Och pall. Det är stort, Gunnar. |
| 1:40 | skratt | du | Radio-Kjelle |
| 1:40 | sak | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har börjat isolera. Och pall. Det är stort, Gunnar. |
| 1:40 | notis |  | 📻 Radio Tippen: Radio Tippen, Kjelle här. Skjulet vid tippen har börjat isolera. Och pall. Det är stort, Gunnar. |
| 1:40 | röst | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har börjat isolera. Och pall. Det är stort, Gunnar. · REAKTION |
| 1:42 | toast | guld | ✅ |
| 1:42 | händelse | printKlar | sak=pall n=9 |
| 1:42 | händelse | tagitUrPrint | sak=pall n=1 |
| 1:48 | klar | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har börjat isolera. Och pall. Det är stort, Gunnar. |
| 1:49 | aliSalt | ali | 244 |
| 2:00 | händelse | printStart | sak=pall |
| 2:01 | väntar | värld:TUUT TUUT! | TUUT TUUT! |
| 2:01 | sak | värld:TUUT TUUT! | TUUT TUUT! |
| 2:01 | bubbla |  | TUUT TUUT! |
| 2:04 | klar | värld:TUUT TUUT! | TUUT TUUT! |
| 2:05 | toast | guld | ✅ |
| 2:05 | händelse | printKlar | sak=pall n=10 |
| 2:05 | händelse | tagitUrPrint | sak=pall n=1 |
| 2:12 | aliSalt | ali | 231 |
| 2:21 | upplåst | skrivare | trim_skrivare3 |
| 2:21 | brott | UPPLÅST | trim_skrivare3 (skrivare 458 av 75) |
| 2:21 | händelse | upplast | id=trim_skrivare3 flask=skrivare |
| 2:21 | paket |  | tanke → sms |
| 2:21 | tanke | du | Fortare. Den kan gå ännu fortare. Jag hör det på den. |
| 2:21 | väntar | du | Fortare. Den kan gå ännu fortare. Jag hör det på den. |
| 2:21 | väntar | ali | Ali här. Sista skrivartrimmen. Efter den går den inte att göra bättre. Då får du bygga en större. |
| 2:21 | sak | du | Fortare. Den kan gå ännu fortare. Jag hör det på den. |
| 2:21 | notis | tanke | 💭 Fortare. Den kan gå ännu fortare. Jag hör det på den. |
| 2:21 | röst | du | Fortare. Den kan gå ännu fortare. Jag hör det på den. · STORY |
| 2:23 | händelse | printStart | sak=pall |
| 2:26 | klar | du | Fortare. Den kan gå ännu fortare. Jag hör det på den. |
| 2:28 | toast | guld | ✅ |
| 2:28 | händelse | printKlar | sak=pall n=11 |
| 2:28 | händelse | tagitUrPrint | sak=pall n=1 |
| 2:34 | sak | ali | Ali här. Sista skrivartrimmen. Efter den går den inte att göra bättre. Då får du bygga en större. |
| 2:34 | sms | ali | Ali här. Sista skrivartrimmen. Efter den går den inte att göra bättre. Då får du bygga en större. |
| 2:34 | sms-bubbla | ali | Ali här. Sista skrivartrimmen. Efter den går den inte att göra bättre. Då får du bygga en större. |
| 2:34 | röst | ali | Ali här. Sista skrivartrimmen. Efter den går den inte att göra bättre. Då får du bygga en större. · STORY |
| 2:36 | aliSalt | ali | 220 |
| 2:40 | väntar | bud | (tips) |
| 2:42 | klar | ali | Ali här. Sista skrivartrimmen. Efter den går den inte att göra bättre. Då får du bygga en större. |
| 2:44 | sak | bud | (tips) |
| 2:46 | klar | bud | (tips) |
| 2:48 | meddelande | mamma | Din bror säger att du har pengar. Du har aldrig haft pengar. Har du sålt en njure? |
| 2:49 | röst | mamma | Din bror säger att du har pengar. Du har aldrig haft pengar. Har du sålt en njure? · STORY |
| 2:59 | paket |  | sms |
| 2:59 | väntar | mamma | Printar. Vad är printar. Är det lagligt? Säg att det är lagligt. |
| 3:10 | händelse | brevLast | id=m_pengar |
| 3:24 | skratt | du | falsk tuta |
| 3:28 | sak | mamma | Printar. Vad är printar. Är det lagligt? Säg att det är lagligt. |
| 3:28 | sms | mamma | Printar. Vad är printar. Är det lagligt? Säg att det är lagligt. |
| 3:28 | sms-bubbla | mamma | Printar. Vad är printar. Är det lagligt? Säg att det är lagligt. |
| 3:28 | röst | mamma | Printar. Vad är printar. Är det lagligt? Säg att det är lagligt. · STORY |
| 3:31 | händelse | printStart | sak=pall |
| 3:32 | paket |  | ge |
| 3:32 | väntar |  | (läget ändras) |
| 3:34 | klar | mamma | Printar. Vad är printar. Är det lagligt? Säg att det är lagligt. |
| 3:36 | toast | guld | ✅ |
| 3:36 | händelse | printKlar | sak=pall n=12 |
| 3:36 | händelse | tagitUrPrint | sak=pall n=1 |
| 3:39 | väntar | info:fel | Göran snodde pall. |
| 3:39 | paket |  | tanke → tanke |
| 3:39 | tanke | du | HALLÅ! Den där måsen tog min grej! |
| 3:39 | väntar | du | HALLÅ! Den där måsen tog min grej! |
| 3:39 | tanke | du | Mamma hade rätt. Säg inget till henne. |
| 3:39 | väntar | du | Mamma hade rätt. Säg inget till henne. |
| 3:39 | paket |  | sms |
| 3:39 | väntar | rolf | Dä ä Göran. Han ä från 2014. Han tar int skräp, bara grejer som e fina. MVH ROLF |
| 3:40 | väntar | mamma | Rolf på sopbilen ringde. Han säger att du städar? Vem är du och vad har du gjort med mitt barn? ❤️ |
| 3:40 | sak | info:fel | Göran snodde pall. |
| 3:40 | kvitto-visas | info:fel | Göran snodde pall. |
| 3:40 | toast | fel | Göran snodde pall. |
| 3:42 | klar | info:fel | Göran snodde pall. |
| 3:45 | skratt | du | falsk tuta |
| 3:50 | sak |  | (läget ändras) |
| 3:50 | brev | rolf | rolf:3 |
| 3:50 | klar |  | (läget ändras) |
| 3:52 | händelse | printStart | sak=pall |
| 3:52 | skratt | du | Kajsa i skrivaren |
| 3:54 | sak | du | HALLÅ! Den där måsen tog min grej! |
| 3:54 | notis | tanke | 💭 HALLÅ! Den där måsen tog min grej! |
| 3:54 | röst | du | HALLÅ! Den där måsen tog min grej! · STORY |
| 3:56 | väntar | foto | Göran. Tjuv. |
| 3:56 | paket |  | tanke |
| 3:56 | tanke | du | Okej, Göran. Nästa gång är jag beredd. |
| 3:56 | väntar | du | Okej, Göran. Nästa gång är jag beredd. |
| 3:57 | toast | guld | ✅ |
| 3:57 | händelse | printKlar | sak=pall n=13 |
| 3:57 | klar | du | HALLÅ! Den där måsen tog min grej! |
| 3:57 | händelse | tagitUrPrint | sak=pall n=1 |
| 4:05 | aliSalt | ali | 209 |
| 4:06 | sak | du | Mamma hade rätt. Säg inget till henne. |
| 4:06 | notis | tanke | 💭 Mamma hade rätt. Säg inget till henne. |
| 4:06 | röst | du | Mamma hade rätt. Säg inget till henne. · STORY |
| 4:09 | klar | du | Mamma hade rätt. Säg inget till henne. |
| 4:18 | väntar | rolf | Tjo. Flaket ä så trist. En tomte mä luva o skägg, kan du göra en sån? /Rolf 🎅​ |
| 4:18 | paket |  | ge |
| 4:18 | väntar |  | (läget ändras) |
| 4:18 | sak | rolf | Tjo. Flaket ä så trist. En tomte mä luva o skägg, kan du göra en sån? /Rolf 🎅​ |
| 4:18 | lapp | Brev från Rolf | Tjo. Flaket ä så trist. En tomte mä luva o skägg, kan du göra en sån? /Rolf 🎅​ |
| 4:18 | röst | rolf | Tjo. Flaket ä så trist. En tomte mä luva o skägg, kan du göra en sån? /Rolf 🎅​ · STORY |
| 4:18 | händelse | malKlart | id=rolf3-brev del=Dag 5 – Tätt och mysigt nasta=rolf3-printa |
| 4:18 | väntar | du | Printa trädgårdstomte till flaket. |
| 4:18 | MÅL |  | Printa trädgårdstomte till flaket |
| 4:21 | målruta |  | Printa trädgårdstomte till flaket |
| 4:22 | händelse | printStart | sak=tomte |
| 4:22 | händelse | malKlart | id=rolf3-printa del=Dag 5 – Tätt och mysigt nasta=rolf3-ge |
| 4:22 | väntar | du | Ge Rolf trädgårdstomte till flaket. |
| 4:22 | MÅL |  | Ge Rolf trädgårdstomte till flaket |
| 4:24 | klar | rolf | Tjo. Flaket ä så trist. En tomte mä luva o skägg, kan du göra en sån? /Rolf 🎅​ |
| 4:24 | händelse | brevLast | id=rolf:3 |
| 4:26 | målruta |  | Ge Rolf trädgårdstomte till flaket |
| 4:26 | kvittens-bock |  | ✓ Printa trädgårdstomte till flaket |
| 4:26 | struken | du | Printa trädgårdstomte till flaket. |
| 4:26 | sak |  | (läget ändras) |
| 4:26 | klar |  | (läget ändras) |
| 4:26 | sak | du | Ge Rolf trädgårdstomte till flaket. |
| 4:26 | pil |  | Ge Rolf trädgårdstomte till flaket |
| 4:26 | röst | du | Ge Rolf trädgårdstomte till flaket. · MÅL |
| 4:27 | toast | guld | ✅ |
| 4:27 | händelse | printKlar | sak=tomte n=1 |
| 4:28 | händelse | tagitUrPrint | sak=tomte n=1 |
| 4:29 | klar | du | Ge Rolf trädgårdstomte till flaket. |
| 4:30 | väntar | bud | (tips) |
| 4:31 | sak | bud | (tips) |
| 4:32 | väntar | du | Klart! Nu lägger jag den i Rolfs brevlåda vid grinden. |
| 4:33 | klar | bud | (tips) |
| 4:35 | sak | du | Klart! Nu lägger jag den i Rolfs brevlåda vid grinden. |
| 4:35 | röst | du | Klart! Nu lägger jag den i Rolfs brevlåda vid grinden. · MÅL |
| 4:39 | klar | du | Klart! Nu lägger jag den i Rolfs brevlåda vid grinden. |
| 4:43 | händelse | lagtIPostlada | sak=tomte rolf=3 jobb=false |
| 4:43 | struken | kedja | rolf3 |
| 4:43 | händelse | malKlart | id=rolf3-ge del=Dag 5 – Tätt och mysigt nasta=n4-isolera-de-sista |
| 4:43 | väntar | du | Två väggar kvar i skjulet. Sen är det tätt. |
| 4:43 | målruta |  | Isolera de sista väggarna · 2/4 |
| 4:43 | MÅL |  | Isolera de sista väggarna · 2/4 |
| 4:43 | sak | du | Två väggar kvar i skjulet. Sen är det tätt. |
| 4:43 | pil |  | Isolera de sista väggarna · 2/4 |
| 4:43 | notis | tanke | 💭 Två väggar kvar i skjulet. Sen är det tätt. |
| 4:43 | röst | du | Två väggar kvar i skjulet. Sen är det tätt. · MÅL |
| 4:43 | nick |  | nick:53 |
| 4:47 | klar | du | Två väggar kvar i skjulet. Sen är det tätt. |
| 4:47 | kvittens-bock |  | ✓ Ge Rolf trädgårdstomte till flaket |
| 4:50 | väntar | rolf | Kajsa la en död mus på min kudde. De e kärlek. Hon får lax ikväll. /R |
| 4:52 | händelse | printStart | sak=byggsats:vaggar |
| 4:55 | sak | foto | Göran. Tjuv. |
| 4:55 | foto | du | Göran. Tjuv. |
| 4:56 | händelse | printKlar | sak=byggsats:vaggar n=1 |
| 4:56 | toast | guld | ✅ |
| 4:56 | händelse | tagitUrPrint | sak=byggsats:vaggar n=1 |
| 4:58 | klar | foto | Göran. Tjuv. |
| 5:01 | väntar | info:guld | 🧱 Höger vägg klar. 1 kvar. |
| 5:01 | sak | info:guld | 🧱 Höger vägg klar. 1 kvar. |
| 5:01 | kvitto-visas | info:guld | 🧱 Höger vägg klar. 1 kvar. |
| 5:01 | toast | guld | 🧱 Höger vägg klar. 1 kvar. |
| 5:03 | klar | info:guld | 🧱 Höger vägg klar. 1 kvar. |
| 5:14 | väntar | värld:Mjau. | Mjau. |
| 5:16 | toast | skak | handen skakar: fullt |
| 5:20 | sak | du | Okej, Göran. Nästa gång är jag beredd. |
| 5:20 | notis | tanke | 💭 Okej, Göran. Nästa gång är jag beredd. |
| 5:20 | röst | du | Okej, Göran. Nästa gång är jag beredd. · STORY |
| 5:23 | klar | du | Okej, Göran. Nästa gång är jag beredd. |
| 5:27 | händelse | printStart | sak=byggsats:vaggar |
| 5:31 | händelse | printKlar | sak=byggsats:vaggar n=1 |
| 5:31 | toast | guld | ✅ |
| 5:32 | händelse | tagitUrPrint | sak=byggsats:vaggar n=1 |
| 5:32 | sak | värld:Mjau. | Mjau. |
| 5:32 | bubbla |  | Mjau. |
| 5:34 | klar | värld:Mjau. | Mjau. |
| 5:35 | paket |  | tanke |
| 5:35 | tanke | du | Jaha, Rolf har hämtat trädgårdstomte till flaket. |
| 5:35 | väntar | du | Jaha, Rolf har hämtat trädgårdstomte till flaket. |
| 5:36 | väntar | info:guld | 🧱 Skjulet är tätt! |
| 5:36 | sak | info:guld | 🧱 Skjulet är tätt! |
| 5:36 | kvitto-visas | info:guld | 🧱 Skjulet är tätt! |
| 5:36 | toast | guld | 🧱 Skjulet är tätt! |
| 5:36 | händelse | malKlart | id=n4-isolera-de-sista del=Dag 5 – Tätt och mysigt nasta=dator |
| 5:36 | struken | kedja | vaggar |
| 5:36 | struken | du | Jaha, Rolf har hämtat trädgårdstomte till flaket. |
| 5:36 | väntar | du | Alis pappas dator. Med den kan jag sälja på nätet. |
| 5:36 | MÅL |  | Köp Alis pappas gamla dator |
| 5:38 | klar | info:guld | 🧱 Skjulet är tätt! |
| 5:38 | målruta |  | Köp Alis pappas gamla dator |
| 5:40 | kvittens-bock |  | ✓ Isolera de sista väggarna · 4/4 |
| 5:40 | sak | du | Alis pappas dator. Med den kan jag sälja på nätet. |
| 5:40 | pil |  | Köp Alis pappas gamla dator |
| 5:40 | notis | tanke | 💭 Alis pappas dator. Med den kan jag sälja på nätet. |
| 5:40 | röst | du | Alis pappas dator. Med den kan jag sälja på nätet. · MÅL |
| 5:41 | nick |  | nick:54 |
| 5:45 | klar | du | Alis pappas dator. Med den kan jag sälja på nätet. |
| 5:52 | toast | guld | 🖥️ Datorn är din – ställ den i skjulet |
| 5:52 | händelse | kopt | sak=webbdator |
| 5:52 | röst | ali | Pappas gamla dator. Den har ett modem. Det låter som en fax som gråter. Men du kommer ut på nätet. · STORY |
| 5:52 | butiksbubbla | ali | Pappas gamla dator. Den har ett modem. Det låter som en fax som gråter. Men du kommer ut på nätet. |
| 6:01 | händelse | printStart | sak=byggsats:webbdator |
| 6:01 | skratt | du | Kajsa i skrivaren |
| 6:01 | händelse | printKlar | sak=byggsats:webbdator n=1 |
| 6:01 | toast | guld | ✅ |
| 6:02 | händelse | tagitUrPrint | sak=byggsats:webbdator n=1 |
| 6:08 | väntar | mamma | Rolf på sopbilen ringde. Han säger att du städar? Vem är du och vad har du gjort med mitt barn? ❤️ |
| 6:08 | sak | mamma | Rolf på sopbilen ringde. Han säger att du städar? Vem är du och vad har du gjort med mitt barn? ❤️ |
| 6:08 | sms | mamma | Rolf på sopbilen ringde. Han säger att du städar? Vem är du och vad har du gjort med mitt barn? ❤️ |
| 6:08 | sms-bubbla | mamma | Rolf på sopbilen ringde. Han säger att du städar? Vem är du och vad har du gjort med mitt barn? ❤️ |
| 6:08 | röst | mamma | Rolf på sopbilen ringde. Han säger att du städar? Vem är du och vad har du gjort med mitt barn? ❤️ · SMÅPRAT |
| 6:08 | händelse | placerat | sak=webbdator |
| 6:08 | paket |  | tanke |
| 6:08 | tanke | du | En webbshop. Från ett skjul. Med modem. Varför inte. |
| 6:08 | väntar | du | En webbshop. Från ett skjul. Med modem. Varför inte. |
| 6:08 | händelse | malKlart | id=dator del=Dag 5 – Tätt och mysigt nasta=lampskarm |
| 6:08 | väntar | du | En lampskärm. Folk betalar för ljus som ser fint ut. |
| 6:08 | MÅL |  | Printa en lampskärm att sälja |
| 6:12 | målruta |  | Printa en lampskärm att sälja |
| 6:12 | kvittens-bock |  | ✓ Ställ datorn i skjulet |
| 6:16 | klar | mamma | Rolf på sopbilen ringde. Han säger att du städar? Vem är du och vad har du gjort med mitt barn? ❤️ |
| 6:18 | sak | du | En lampskärm. Folk betalar för ljus som ser fint ut. |
| 6:18 | pil |  | Printa en lampskärm att sälja |
| 6:18 | notis | tanke | 💭 En lampskärm. Folk betalar för ljus som ser fint ut. |
| 6:18 | röst | du | En lampskärm. Folk betalar för ljus som ser fint ut. · MÅL |
| 6:18 | nick |  | nick:55 |
| 6:22 | klar | du | En lampskärm. Folk betalar för ljus som ser fint ut. |
| 6:30 | sak | du | En webbshop. Från ett skjul. Med modem. Varför inte. |
| 6:30 | notis | tanke | 💭 En webbshop. Från ett skjul. Med modem. Varför inte. |
| 6:30 | röst | du | En webbshop. Från ett skjul. Med modem. Varför inte. · STORY |
| 6:34 | händelse | printStart | sak=lampskarm |
| 6:35 | klar | du | En webbshop. Från ett skjul. Med modem. Varför inte. |
| 6:40 | toast | guld | ✅ |
| 6:40 | händelse | printKlar | sak=lampskarm n=1 |
| 6:40 | händelse | malKlart | id=lampskarm del=Dag 5 – Tätt och mysigt nasta=mysigt |
| 6:40 | väntar | du | Skjulet ska bli mysigt på riktigt. Det är mitt hem nu. |
| 6:40 | målruta |  | Gör det mysigt · trivsel 104/130 |
| 6:40 | MÅL |  | Gör det mysigt · trivsel 104/130 |
| 6:40 | sak | du | Skjulet ska bli mysigt på riktigt. Det är mitt hem nu. |
| 6:40 | pil |  | Gör det mysigt · trivsel 104/130 |
| 6:40 | notis | tanke | 💭 Skjulet ska bli mysigt på riktigt. Det är mitt hem nu. |
| 6:40 | röst | du | Skjulet ska bli mysigt på riktigt. Det är mitt hem nu. · MÅL |
| 6:40 | händelse | tagitUrPrint | sak=lampskarm n=1 |
| 6:41 | nick |  | nick:56 |
| 6:44 | kvittens-bock |  | ✓ Printa en lampskärm att sälja |
| 6:45 | klar | du | Skjulet ska bli mysigt på riktigt. Det är mitt hem nu. |
| 6:54 | toast | guld | 3D-modell köpt – printa fönster på skrivaren |
| 6:54 | händelse | kopt | sak=fonster |
| 7:02 | händelse | printStart | sak=byggsats:fonster |
| 7:06 | toast | bra | Del 1 av 2 klar |
| 7:09 | händelse | printKlar | sak=byggsats:fonster n=1 |
| 7:09 | toast | guld | ✅ |
| 7:10 | händelse | tagitUrPrint | sak=byggsats:fonster n=1 |
| 7:10 | paket |  | sms |
| 7:10 | väntar | ali | Ali här. Fönster – printad. På riktigt. Jag har visat bilden för min fru tre gånger. |
| 7:13 | sak | ali | Ali här. Fönster – printad. På riktigt. Jag har visat bilden för min fru tre gånger. |
| 7:13 | sms | ali | Ali här. Fönster – printad. På riktigt. Jag har visat bilden för min fru tre gånger. |
| 7:13 | sms-bubbla | ali | Ali här. Fönster – printad. På riktigt. Jag har visat bilden för min fru tre gånger. |
| 7:13 | röst | ali | Ali här. Fönster – printad. På riktigt. Jag har visat bilden för min fru tre gånger. · REAKTION |
| 7:20 | klar | ali | Ali här. Fönster – printad. På riktigt. Jag har visat bilden för min fru tre gånger. |
| 7:28 | toast | guld | 3D-modell köpt – printa trägolv på skrivaren |
| 7:28 | händelse | kopt | sak=golv |
| 7:31 | skratt | du | falsk tuta |
| 7:37 | händelse | printStart | sak=byggsats:golv |
| 7:37 | skratt | du | Kajsa i skrivaren |
| 7:40 | toast | bra | Del 1 av 3 klar |
| 7:42 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 7:47 | väntar | värld:Mjau. | Mjau. |
| 7:53 | väntar | värld:TUUT TUUT! | TUUT TUUT! |
| 7:54 | sak | värld:Mjau. | Mjau. |
| 7:54 | bubbla |  | Mjau. |
| 7:56 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 7:56 | väntar | notis:Skrivare M: Tornet är tomt – mal mer så  | Skrivare M: Tornet är tomt – mal mer så fortsätter den |
| 7:56 | toast | bra | Del 2 av 3 klar |
| 7:56 | klar | värld:Mjau. | Mjau. |
| 7:58 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 7:59 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 8:00 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 8:00 | händelse | printKlar | sak=byggsats:golv n=1 |
| 8:00 | toast | guld | ✅ |
| 8:04 | sak | värld:TUUT TUUT! | TUUT TUUT! |
| 8:04 | bubbla |  | TUUT TUUT! |
| 8:07 | klar | värld:TUUT TUUT! | TUUT TUUT! |
| 8:07 | händelse | tagitUrPrint | sak=byggsats:golv n=1 |
| 8:12 | väntar | info:guld | Trägolv på plats! Trivsel +8 · Ali betalar nu +0 % |
| 8:12 | sak | info:guld | Trägolv på plats! Trivsel +8 · Ali betalar nu +0 % |
| 8:12 | kvitto-visas | info:guld | Trägolv på plats! Trivsel +8 · Ali betalar nu +0 % |
| 8:12 | toast | guld | Trägolv på plats! Trivsel +8 · Ali betalar nu +0 % |
| 8:14 | klar | info:guld | Trägolv på plats! Trivsel +8 · Ali betalar nu +0 % |
| 8:21 | händelse | printStart | sak=pall |
| 8:24 | sak | notis:Skrivare M: Tornet är tomt – mal mer så  | Skrivare M: Tornet är tomt – mal mer så fortsätter den |
| 8:24 | notis | fel | Skrivare M: Tornet är tomt – mal mer så fortsätter den |
| 8:26 | toast | guld | ✅ |
| 8:26 | händelse | printKlar | sak=pall n=14 |
| 8:27 | händelse | tagitUrPrint | sak=pall n=1 |
| 8:27 | klar | notis:Skrivare M: Tornet är tomt – mal mer så  | Skrivare M: Tornet är tomt – mal mer så fortsätter den |
| 8:32 | händelse | placerat | sak=pall |
| 8:39 | toast | guld | 3D-modell köpt – printa taklampa med skärm på skrivaren |
| 8:39 | händelse | kopt | sak=taklampa |
| 8:47 | händelse | printStart | sak=byggsats:taklampa |
| 8:50 | händelse | printKlar | sak=byggsats:taklampa n=1 |
| 8:50 | toast | guld | ✅ |
| 8:51 | händelse | tagitUrPrint | sak=byggsats:taklampa n=1 |
| 8:55 | väntar | info:guld | Taklampa med skärm på plats! Trivsel +6 · Ali betalar nu +0 % |
| 8:55 | sak | info:guld | Taklampa med skärm på plats! Trivsel +6 · Ali betalar nu +0 % |
| 8:55 | kvitto-visas | info:guld | Taklampa med skärm på plats! Trivsel +6 · Ali betalar nu +0 % |
| 8:55 | toast | guld | Taklampa med skärm på plats! Trivsel +6 · Ali betalar nu +0 % |
| 8:57 | klar | info:guld | Taklampa med skärm på plats! Trivsel +6 · Ali betalar nu +0 % |
| 8:59 | scenInfo | du | Lampan tänds |
| 9:07 | tanke | du | Det börjar kännas som ett hem. På riktigt. |
| 9:07 | notis | tanke | 💭 Det börjar kännas som ett hem. På riktigt. |
| 9:07 | röst | du | Det börjar kännas som ett hem. På riktigt. · REAKTION |
| 9:12 | händelse | malKlart | id=mysigt del=Dag 5 – Tätt och mysigt nasta=vind5 |
| 9:12 | lapp | 📔 Dagbok | Lampan lyser. Pappa ska visst komma förbi i morgon. |
| 9:12 | dagbokrad | du | Lampan lyser. Pappa ska visst komma förbi i morgon. |
| 9:12 | väntar | notis:Lampan lyser. Pappa ska visst komma förb | Lampan lyser. Pappa ska visst komma förbi i morgon. |
| 9:12 | väntar | du | En tredje vindsnurra på taket. Skrivare M drar mycket. |
| 9:12 | MÅL |  | Printa och sälj |
| 9:12 | sak | notis:Lampan lyser. Pappa ska visst komma förb | Lampan lyser. Pappa ska visst komma förbi i morgon. |
| 9:12 | notis | dagbok | Lampan lyser. Pappa ska visst komma förbi i morgon. |
| 9:14 | klar | notis:Lampan lyser. Pappa ska visst komma förb | Lampan lyser. Pappa ska visst komma förbi i morgon. |
| 9:14 | målruta |  | Printa och sälj |
| 9:16 | sak | du | En tredje vindsnurra på taket. Skrivare M drar mycket. |
| 9:16 | pil |  | Printa och sälj |
| 9:16 | notis | tanke | 💭 En tredje vindsnurra på taket. Skrivare M drar mycket. |
| 9:16 | röst | du | En tredje vindsnurra på taket. Skrivare M drar mycket. · MÅL |
| 9:19 | händelse | printStart | sak=pall |
| 9:21 | klar | du | En tredje vindsnurra på taket. Skrivare M drar mycket. |
| 9:24 | toast | guld | ✅ |
| 9:24 | händelse | printKlar | sak=pall n=15 |
| 9:24 | händelse | tagitUrPrint | sak=pall n=1 |
| 9:30 | händelse | placerat | sak=pall |
| 9:38 | händelse | printStart | sak=pall |
| 9:43 | toast | guld | ✅ |
| 9:43 | händelse | printKlar | sak=pall n=16 |
| 9:43 | händelse | tagitUrPrint | sak=pall n=1 |
| 9:47 | skratt | du | falsk tuta |
| 9:57 | webb | du | packade 1 pall |
| 10:12 | väntar | info:bra | 📦 Paketet till Majvor i Nässjö ligger i postlådan – Rolf tar det till posten |
| 10:12 | sak | info:bra | 📦 Paketet till Majvor i Nässjö ligger i postlådan – Rolf tar det till posten |
| 10:12 | kvitto-visas | info:bra | 📦 Paketet till Majvor i Nässjö ligger i postlådan – Rolf tar det till posten |
| 10:12 | toast | bra | 📦 Paketet till Majvor i Nässjö ligger i postlådan – Rolf tar det till posten |
| 10:13 | väntar | rolf | ÖJ! Ja kör dina paket till posten. Ja ska ändå förbi. Ja tar en tia för bensinen. Eller för Kajsas lax. Mest för laxen. /Rolf​ |
| 10:14 | klar | info:bra | 📦 Paketet till Majvor i Nässjö ligger i postlådan – Rolf tar det till posten |
| 10:16 | händelse | printStart | sak=pall |
| 10:21 | toast | guld | ✅ |
| 10:21 | händelse | printKlar | sak=pall n=17 |
| 10:21 | händelse | tagitUrPrint | sak=pall n=1 |
| 10:26 | sak | rolf | ÖJ! Ja kör dina paket till posten. Ja ska ändå förbi. Ja tar en tia för bensinen. Eller för Kajsas lax. Mest för laxen. /Rolf​ |
| 10:26 | notis |  | ✉️ ÖJ! Ja kör dina paket till posten. Ja ska ändå förbi. Ja tar en tia för bensinen. Eller för Kajsas lax. Mest för laxen. /Rolf​ |
| 10:26 | röst | rolf | ÖJ! Ja kör dina paket till posten. Ja ska ändå förbi. Ja tar en tia för bensinen. Eller för Kajsas lax. Mest för laxen. /Rolf​ · STORY |
| 10:29 | aliSalt | ali | 198 |
| 10:29 | aliSalt | ali | 20 |
| 10:36 | klar | rolf | ÖJ! Ja kör dina paket till posten. Ja ska ändå förbi. Ja tar en tia för bensinen. Eller för Kajsas lax. Mest för laxen. /Rolf​ |
| 10:48 | väntar | värld:Mjau. | Mjau. |
| 10:54 | sak | värld:Mjau. | Mjau. |
| 10:54 | bubbla |  | Mjau. |
| 10:56 | klar | värld:Mjau. | Mjau. |
| 10:59 | händelse | printStart | sak=pall |
| 11:04 | toast | guld | ✅ |
| 11:04 | händelse | printKlar | sak=pall n=18 |
| 11:05 | händelse | tagitUrPrint | sak=pall n=1 |
| 11:12 | aliSalt | ali | 189 |
| 11:22 | händelse | printStart | sak=pall |
| 11:27 | toast | guld | ✅ |
| 11:27 | händelse | printKlar | sak=pall n=19 |
| 11:27 | händelse | tagitUrPrint | sak=pall n=1 |
| 11:34 | aliSalt | ali | 189 |
| 11:42 | väntar | värld:TUUT! Tjena! | TUUT! Tjena! |
| 11:42 | sak | värld:TUUT! Tjena! | TUUT! Tjena! |
| 11:42 | bubbla |  | TUUT! Tjena! |
| 11:44 | händelse | printStart | sak=pall |
| 11:44 | skratt | du | Kajsa i skrivaren |
| 11:45 | klar | värld:TUUT! Tjena! | TUUT! Tjena! |
| 11:49 | toast | guld | ✅ |
| 11:49 | händelse | printKlar | sak=pall n=20 |
| 11:49 | händelse | tagitUrPrint | sak=pall n=1 |
| 11:56 | aliSalt | ali | 189 |
| 12:10 | väntar | värld:Mjau. | Mjau. |
| 12:15 | sak | värld:Mjau. | Mjau. |
| 12:15 | bubbla |  | Mjau. |
| 12:17 | klar | värld:Mjau. | Mjau. |
| 12:21 | händelse | printStart | sak=pall |
| 12:26 | toast | guld | ✅ |
| 12:26 | händelse | printKlar | sak=pall n=21 |
| 12:26 | händelse | tagitUrPrint | sak=pall n=1 |
| 12:34 | aliSalt | ali | 189 |
| 12:41 | upplåst | strom | vindsnurra3 |
| 12:41 | brott | RESERV | vindsnurra3 (strom 0 av 15) |
| 12:41 | händelse | upplast | id=vindsnurra3 flask=strom |
| 12:41 | paket |  | sms |
| 12:41 | väntar | ali | Ali här. En tredje snurra. Mitt på taket. Sen är taket fullt. Sen får solen ta över. |
| 12:41 | sak | ali | Ali här. En tredje snurra. Mitt på taket. Sen är taket fullt. Sen får solen ta över. |
| 12:41 | sms | ali | Ali här. En tredje snurra. Mitt på taket. Sen är taket fullt. Sen får solen ta över. |
| 12:41 | sms-bubbla | ali | Ali här. En tredje snurra. Mitt på taket. Sen är taket fullt. Sen får solen ta över. |
| 12:41 | röst | ali | Ali här. En tredje snurra. Mitt på taket. Sen är taket fullt. Sen får solen ta över. · STORY |
| 12:43 | händelse | printStart | sak=pall |
| 12:48 | klar | ali | Ali här. En tredje snurra. Mitt på taket. Sen är taket fullt. Sen får solen ta över. |
| 12:48 | toast | guld | ✅ |
| 12:48 | händelse | printKlar | sak=pall n=22 |
| 12:49 | händelse | tagitUrPrint | sak=pall n=1 |
| 12:56 | aliSalt | ali | 189 |
| 13:00 | toast | guld | 3D-modell köpt – printa vindsnurra till skjultaket på skrivaren |
| 13:00 | händelse | kopt | sak=vindsnurra |
| 13:09 | händelse | printStart | sak=byggsats:vindsnurra |
| 13:12 | händelse | printKlar | sak=byggsats:vindsnurra n=1 |
| 13:12 | toast | guld | ✅ |
| 13:13 | väntar | info:guld | 🌬️ Vindsnurran ligger i handen – klicka på skjulet för att sätta den på taket |
| 13:13 | händelse | tagitUrPrint | sak=byggsats:vindsnurra n=1 |
| 13:13 | sak | info:guld | 🌬️ Vindsnurran ligger i handen – klicka på skjulet för att sätta den på taket |
| 13:13 | kvitto-visas | info:guld | 🌬️ Vindsnurran ligger i handen – klicka på skjulet för att sätta den på taket |
| 13:13 | toast | guld | 🌬️ Vindsnurran ligger i handen – klicka på skjulet för att sätta den på taket |
| 13:15 | klar | info:guld | 🌬️ Vindsnurran ligger i handen – klicka på skjulet för att sätta den på taket |
| 13:16 | skratt | du | falsk tuta |
| 13:21 | händelse | placerat | sak=vindsnurra |
| 13:21 | väntar | info:guld | 🌬️ Vindsnurran sitter på taket – den trampar cykeln åt dig när det blåser |
| 13:21 | monterat | du | byggsats:vindsnurra |
| 13:21 | händelse | monterat | sak=vindsnurra |
| 13:21 | sak | info:guld | 🌬️ Vindsnurran sitter på taket – den trampar cykeln åt dig när det blåser |
| 13:21 | kvitto-visas | info:guld | 🌬️ Vindsnurran sitter på taket – den trampar cykeln åt dig när det blåser |
| 13:21 | toast | guld | 🌬️ Vindsnurran sitter på taket – den trampar cykeln åt dig när det blåser |
| 13:21 | händelse | malKlart | id=vind5 del=Dag 5 – Tätt och mysigt nasta=sov5 |
| 13:21 | paket |  | lapp |
| 13:21 | väntar | du | Dag 5 är slut. Nu vet en mås att jag bor HÄR. Pengarna är borta. Med en mås. |
| 13:21 | paket |  | sms |
| 13:21 | väntar | mamma | Pappa kommer förbi i morgon. Han säger inget men han vill. ❤️ |
| 13:21 | paket |  | sms |
| 13:21 | väntar | mamma | Pappa och jag har lagt undan lite. 1 000 kr. Till något fint i ditt hus. Inte till chips. ❤️ /Mamma |
| 13:21 | tanke | du | Full mage, varmt skjul. Jag är typ kung här. |
| 13:21 | väntar | du | Full mage, varmt skjul. Jag är typ kung här. |
| 13:21 | struken | du | Full mage, varmt skjul. Jag är typ kung här. |
| 13:21 | MÅL |  | Klart för idag – sov när du vill |
| 13:23 | klar | info:guld | 🌬️ Vindsnurran sitter på taket – den trampar cykeln åt dig när det blåser |
| 13:25 | målruta |  | Klart för idag – sov när du vill |
| 13:25 | kvittens-bock |  | ✓ Sätt en tredje vindsnurra på taket |
| 13:25 | sak | du | (nytt mål i rutan) |
| 13:25 | pil |  | Klart för idag – sov när du vill |
| 13:25 | klar | du | (nytt mål i rutan) |
| 13:33 | röst | mamma | Haha, träplankor? · STORY |
| 13:35 | röst | mamma | Vad är det för skit? Du har ju inte ens tapeter på väggarna. · STORY |
| 13:39 | röst | mamma | Och var är badrummet? Du duschar väl? · STORY |
| 13:42 | röst | mamma | Pappa säger "aha, vad lugnt då". Pappa säger det om allt. · STORY |
| 13:45 | röst | mamma | …men fönstret var fint. Det kommer in ljus i alla fall. ❤️ · STORY |
| 13:52 | morgonkort | 📕 Kapitel 2: Ett riktigt hem | 📕 Kapitel 2: Ett riktigt hem · Mamma är inte imponerad. Än. Nästa mål: tapeter , en egen gamingbod med RGB, gamer-inredning – och en jacuzzi . Visa henne. Ali har nya ritningar – och ♾️ trimningar som aldrig tar slut. |
| 13:52 | väntar | notis:🌇 Klockan är 21. Ali slår igen luckan.  | 🌇 Klockan är 21. Ali slår igen luckan. Dagens jobb är klart – gå in i skjulet och sov i sängen. |
| 14:04 | skratt | du | däcket rullar iväg |
| 14:06 | sak | du | Dag 5 är slut. Nu vet en mås att jag bor HÄR. Pengarna är borta. Med en mås. |
| 14:06 | lapp | 📔 Dagbok | Dag 5 är slut. Nu vet en mås att jag bor HÄR. Pengarna är borta. Med en mås. |
| 14:06 | kvallsrad | du | Nu vet en mås att jag bor HÄR. Pengarna är borta. Med en mås. |
| 14:06 | klar | du | Dag 5 är slut. Nu vet en mås att jag bor HÄR. Pengarna är borta. Med en mås. |
| 14:08 | väntar | notis:📔 Prestation: Ett hem att bo i · +3 res | 📔 Prestation: Ett hem att bo i · +3 respekt |
| 14:10 | webbBetalt | du | 258 |
| 14:10 | nattkort | du | 🌙 Dag 5 är slut. God natt. zzz… Nu vet en mås att jag bor HÄR. Pengarna är borta. Med en mås. DAGENS PRINTAR Pall × 16 Trädgårdstomte till flaket × 1 Lampskärm |

<details><summary>Botens handlingar dag 5</summary>

- 0:00 — dag 5 börjar — (4988 kr)
- 0:08 popup: "FORTSÄTT" (4988 kr)
- 0:25 gå till Rolfs postlåda (28 m) (4988 kr)
- 0:31 panel: "Rolfs postlåda
Det här låg i l" (5238 kr)
- 0:31 tjänar pengar till väntar på sopbilen (BO): 5238/5298 kr → printar pall (270 kr) (5238 kr)
- 0:33 gå till skrivaren (8 m) (5238 kr)
- 0:34 printar Pall (5238 kr)
- 0:40 tar ut 1 st ur skrivaren (5238 kr)
- 0:46 gå till Ali (26 m) (5238 kr)
- 0:46 öppnar Alis butik – sälja (5238 kr)
- 0:48 säljer hos Ali: +270 kr (5508 kr)
- 0:51 tjänar pengar till väntar på sopbilen (BO): 5508/5568 kr → printar pall (257 kr) (5508 kr)
- 1:02 plockar 2 skräp på tippen (bär max 16) (5508 kr)
- 1:05 gå till kvarnen (12 m) (5508 kr)
- 1:09 gå till skrivaren (5 m) (5508 kr)
- 1:10 printar Pall (5508 kr)
- 1:16 tar ut 1 st ur skrivaren (5508 kr)
- 1:22 gå till Ali (27 m) (5508 kr)
- 1:22 öppnar Alis butik – sälja (5508 kr)
- 1:24 säljer hos Ali: +257 kr (5765 kr)
- 1:30 tjänar pengar till väntar på sopbilen (BO): 5765/5825 kr → printar pall (244 kr) (5765 kr)
- 1:35 gå till skrivaren (24 m) (5765 kr)
- 1:36 printar Pall (5765 kr)
- 1:43 tar ut 1 st ur skrivaren (5765 kr)
- 1:48 gå till Ali (24 m) (5765 kr)
- 1:48 öppnar Alis butik – sälja (5765 kr)
- 1:50 säljer hos Ali: +244 kr (6009 kr)
- 1:53 tjänar pengar till väntar på sopbilen (BO): 6009/6069 kr → printar pall (231 kr) (6009 kr)
- 1:58 gå till skrivaren (24 m) (6009 kr)
- 2:00 printar Pall (6009 kr)
- 2:06 tar ut 1 st ur skrivaren (6009 kr)
- 2:11 gå till Ali (24 m) (6009 kr)
- 2:11 öppnar Alis butik – sälja (6009 kr)
- 2:13 säljer hos Ali: +231 kr (6240 kr)
- 2:16 tjänar pengar till väntar på sopbilen (BO): 6240/6300 kr → printar pall (220 kr) (6240 kr)
- 2:21 gå till skrivaren (24 m) (6240 kr)
- 2:23 printar Pall (6240 kr)
- 2:29 tar ut 1 st ur skrivaren (6240 kr)
- 2:34 gå till Ali (24 m) (6240 kr)
- 2:34 öppnar Alis butik – sälja (6240 kr)
- 2:36 säljer hos Ali: +220 kr (6460 kr)
- 2:59 popup: "Jag säljer saker jag printar." (6460 kr)
- 3:10 popup: "Läst" (6460 kr)
- 3:10 tjänar pengar till väntar på sopbilen (BO): 6460/6520 kr → printar pall (209 kr) (6460 kr)
- 3:23 plockar 4 skräp på tippen (bär max 16) (6460 kr)
- 3:25 gå till kvarnen (12 m) (6460 kr)
- 3:29 gå till skrivaren (5 m) (6460 kr)
- 3:31 printar Pall (6460 kr)
- 3:37 tar ut 1 st ur skrivaren (6460 kr)
- 3:42 gå till Ali (27 m) (6460 kr)
- 3:42 öppnar Alis butik – sälja (6460 kr)
- 3:45 tjänar pengar till väntar på sopbilen (BO): 6460/6520 kr → printar pall (209 kr) (6460 kr)
- 3:50 gå till skrivaren (24 m) (6460 kr)
- 3:52 printar Pall (6460 kr)
- 3:58 tar ut 1 st ur skrivaren (6460 kr)
- 4:03 gå till Ali (24 m) (6460 kr)
- 4:03 öppnar Alis butik – sälja (6460 kr)
- 4:05 säljer hos Ali: +209 kr (6669 kr)
- 4:18 gå till Rolfs postlåda (31 m) (6669 kr)
- 4:20 gå till skrivaren (8 m) (6669 kr)
- 4:22 printar Trädgårdstomte till flaket (6669 kr)
- 4:28 tar ut 1 st ur skrivaren (6669 kr)
- 4:41 valj tomte: true, vald tomte, post {"l":null,"tr":null,"tm":[]}, nummer false (6669 kr)
- 4:43 gå till Rolfs postlåda (8 m) (6669 kr)
- 4:50 gå till skrivaren (8 m) (6669 kr)
- 4:52 printar Isolerskiva (vägg) (6669 kr)
- 4:57 tar ut 1 st ur skrivaren (6669 kr)
- 5:01 gå till skjulet (hoger) (19 m) (6669 kr)
- 5:17 plockar 3 skräp på tippen (bär max 16) (6669 kr)
- 5:20 gå till kvarnen (13 m) (6669 kr)
- 5:26 gå till skrivaren (5 m) (6669 kr)
- 5:27 printar Isolerskiva (vägg) (6669 kr)
- 5:32 tar ut 1 st ur skrivaren (6669 kr)
- 5:36 gå till skjulet (fram) (19 m) (6669 kr)
- 5:51 gå till Ali (20 m) (6669 kr)
- 5:51 öppnar Alis butik – köpa alis pappas gamla dator (6669 kr)
- 5:53 köper webbdator för 300 kr (6369 kr)
- 5:59 gå till skrivaren (24 m) (6369 kr)
- 6:01 printar Alis pappas gamla dator (6369 kr)
- 6:03 tar ut 1 st ur skrivaren (6369 kr)
- 6:07 gå till platsen för alis pappas gamla dator (21 m) (6369 kr)
- 6:08 ställer ut alis pappas gamla dator (6369 kr)
- 6:24 gå till Ali (16 m) (6369 kr)
- 6:24 öppnar Alis butik – köpa receptet lampskärm (6369 kr)
- 6:26 Ali har inte lampskarm (6369 kr)
- 6:32 gå till skrivaren (24 m) (6369 kr)
- 6:34 printar Lampskärm (6369 kr)
- 6:41 tar ut 1 st ur skrivaren (6369 kr)
- 6:52 gå till Ali (24 m) (6369 kr)
- 6:52 öppnar Alis butik – köpa fönster (6369 kr)
- 6:54 köper fonster för 90 kr (6279 kr)
- 7:01 gå till skrivaren (24 m) (6279 kr)
- 7:02 printar Fönster (2 delar) (6279 kr)
- 7:11 tar ut 1 st ur skrivaren (6279 kr)
- 7:14 gå till skjulet (18 m) (6279 kr)
- 7:14 sätter ett fönster (6279 kr)
- 7:26 gå till Ali (20 m) (6279 kr)
- 7:26 öppnar Alis butik – köpa trägolv (6279 kr)
- 7:29 köper golv för 140 kr (6139 kr)
- 7:35 gå till skrivaren (24 m) (6139 kr)
- 7:37 printar Trägolv (3 delar) (6139 kr)
- 7:51 plockar 3 skräp på tippen (bär max 16) (6139 kr)
- 7:53 gå till kvarnen (13 m) (6139 kr)
- 8:07 gå till skrivaren (5 m) (6139 kr)
- 8:08 tar ut 1 st ur skrivaren (6139 kr)
- 8:12 gå till skjulet (19 m) (6139 kr)
- 8:20 gå till skrivaren (17 m) (6139 kr)
- 8:21 printar Pall (6139 kr)
- 8:27 tar ut 1 st ur skrivaren (6139 kr)
- 8:31 gå till platsen för pall (18 m) (6139 kr)
- 8:32 ställer ut pall (6139 kr)
- 8:37 gå till Ali (15 m) (6139 kr)
- 8:37 öppnar Alis butik – köpa taklampa med skärm (6139 kr)
- 8:39 köper taklampa för 90 kr (6049 kr)
- 8:46 gå till skrivaren (24 m) (6049 kr)
- 8:47 printar Taklampa med skärm (6049 kr)
- 8:51 tar ut 1 st ur skrivaren (6049 kr)
- 8:55 gå till skjulet (17 m) (6049 kr)
- 9:09 plockar 3 skräp på tippen (bär max 16) (6049 kr)
- 9:12 gå till kvarnen (13 m) (6049 kr)
- 9:17 gå till skrivaren (5 m) (6049 kr)
- 9:19 printar Pall (6049 kr)
- 9:25 tar ut 1 st ur skrivaren (6049 kr)
- 9:29 gå till platsen för pall (22 m) (6049 kr)
- 9:30 ställer ut pall (6049 kr)
- 9:36 gå till skrivaren (19 m) (6049 kr)
- 9:38 printar Pall (6049 kr)
- 9:44 tar ut 1 st ur skrivaren (6049 kr)
- 9:48 gå till datorn (18 m) (6049 kr)
- 9:56 panel: "Webbshopen · Soptippsvägen 1
B" (6049 kr)
- 10:06 panel: "Webbshopen · Soptippsvägen 1
B" (6049 kr)
- 10:12 gå till Rolfs postlåda (paket) (29 m) (6049 kr)
- 10:13 webbshop: 1 paket i postlådan (6049 kr)
- 10:13 tjänar pengar till väntar på flaskhalsen för vindsnurra3: 6049/6089 kr → printar pall (198 kr) (6049 kr)
- 10:14 gå till skrivaren (8 m) (6049 kr)
- 10:16 printar Pall (6049 kr)
- 10:22 tar ut 1 st ur skrivaren (6049 kr)
- 10:28 gå till Ali (26 m) (6049 kr)
- 10:28 öppnar Alis butik – sälja (6049 kr)
- 10:30 säljer hos Ali: +218 kr (6267 kr)
- 10:39 tjänar pengar till väntar på flaskhalsen för vindsnurra3: 6267/6307 kr → printar pall (189 kr) (6267 kr)
- 10:50 plockar 3 skräp på tippen (bär max 16) (6267 kr)
- 10:54 gå till kvarnen (15 m) (6267 kr)
- 10:58 gå till skrivaren (5 m) (6267 kr)
- 10:59 printar Pall (6267 kr)
- 11:05 tar ut 1 st ur skrivaren (6267 kr)
- 11:11 gå till Ali (26 m) (6267 kr)
- 11:11 öppnar Alis butik – sälja (6267 kr)
- 11:13 säljer hos Ali: +189 kr (6456 kr)
- 11:15 tjänar pengar till väntar på flaskhalsen för vindsnurra3: 6456/6496 kr → printar pall (189 kr) (6456 kr)
- 11:20 gå till skrivaren (24 m) (6456 kr)
- 11:22 printar Pall (6456 kr)
- 11:28 tar ut 1 st ur skrivaren (6456 kr)
- 11:33 gå till Ali (24 m) (6456 kr)
- 11:33 öppnar Alis butik – sälja (6456 kr)
- 11:35 säljer hos Ali: +189 kr (6645 kr)
- 11:37 tjänar pengar till väntar på flaskhalsen för vindsnurra3: 6645/6685 kr → printar pall (189 kr) (6645 kr)
- 11:42 gå till skrivaren (24 m) (6645 kr)
- 11:44 printar Pall (6645 kr)
- 11:50 tar ut 1 st ur skrivaren (6645 kr)
- 11:55 gå till Ali (24 m) (6645 kr)
- 11:55 öppnar Alis butik – sälja (6645 kr)
- 11:57 säljer hos Ali: +189 kr (6834 kr)
- 11:59 tjänar pengar till väntar på flaskhalsen för vindsnurra3: 6834/6874 kr → printar pall (189 kr) (6834 kr)
- 12:11 plockar 3 skräp på tippen (bär max 16) (6834 kr)
- 12:14 gå till kvarnen (13 m) (6834 kr)
- 12:19 gå till skrivaren (5 m) (6834 kr)
- 12:21 printar Pall (6834 kr)
- 12:27 tar ut 1 st ur skrivaren (6834 kr)
- 12:33 gå till Ali (27 m) (6834 kr)
- 12:33 öppnar Alis butik – sälja (6834 kr)
- 12:34 säljer hos Ali: +189 kr (7023 kr)
- 12:36 tjänar pengar till väntar på flaskhalsen för vindsnurra3: 7023/7063 kr → printar pall (189 kr) (7023 kr)
- 12:42 gå till skrivaren (24 m) (7023 kr)
- 12:43 printar Pall (7023 kr)
- 12:49 tar ut 1 st ur skrivaren (7023 kr)
- 12:55 gå till Ali (24 m) (7023 kr)
- 12:55 öppnar Alis butik – sälja (7023 kr)
- 12:56 säljer hos Ali: +189 kr (7212 kr)
- 12:58 öppnar Alis butik – köpa vindsnurra till skjultaket (7212 kr)
- 13:01 köper vindsnurra för 133 kr (7079 kr)
- 13:07 gå till skrivaren (24 m) (7079 kr)
- 13:09 printar Vindsnurra till skjultaket (7079 kr)
- 13:14 tar ut 1 st ur skrivaren (7079 kr)
- 13:21 gå till sätt vindsnurran på taket (18 m) (7079 kr)
- 13:52 telefonscen: "Okej. Kapitel 2 då. 😤" (8079 kr)
- 14:00 kort: "Kör!" (8079 kr)

</details>

## Dag 6

| Tid | Källa | Vem | Text |
|---|---|---|---|
| 14:10 | vara | ali | kruka |
| 14:10 | händelse | malKlart | id=sov5 del=Dag 5 – Tätt och mysigt nasta=pappa6 |
| 14:10 | MÅL |  | Pappa kommer förbi idag |

<details><summary>Botens handlingar dag 6</summary>

- 0:00 — dag 6 börjar — (8337 kr)

</details>
