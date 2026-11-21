# Simulering kapitel 1 – körning 1

*Gjord 2026-11-21 11:44 med `verktyg/sim-kapitel1.mjs` + `verktyg/sim-bot.js` (punkt AX). Boten går 4,5 m/s, läser 15 tecken/s, trampar, vevar, plockar, printar, köper och säljer via spelets egna funktioner. Tiderna är speltid.*

## Sammanfattning

| Dag | Minuter | Väntan | Prints (totalt) | Kr vid sömn | Bär | Trivsel |
|---|---|---|---|---|---|---|
| 1 | 10.6 | 2 % | 25 | 265 | 6 | 21 |
| 2 | 11.4 | 2 % | 43 | 1645 | 10 | 38 |
| 3 | 13.7 | 3 % | 58 | 2155 | 16 | 78 |
| 4 | 13.2 | 1 % | 71 | 2940 | 16 | 96 |
| 5 | 14.6 | 2 % | 94 | 6412 | 16 | 136 |
| 6 | 8.5 | 2 % | 104 | 6639 | 16 | 148 |
| 7 | 5.7 | 5 % | 108 | 5416 | 16 | 162 |
| 8 | 10.5 | 6 % | 124 | 12009 | 16 | 190 |
| 9 | 11.3 | 7 % | 138 | 17874 | 16 | 194 |
| 10 | 1.9 | 0 % | 138 | 20058 | 16 | 214 |
| 11 | 4.9 | 0 % | 142 | 7743 | 16 | 209 |
| 12 | 0.0 | 0 % | 142 | 8110 | 16 | 209 |

## Flaskhalskartan (EE)

| Dag | bara | mala | trampa | strom | skrivare | inkomst | Upplåst |
|---|---|---|---|---|---|---|---|
| 1 | 7 | 11 | 23 | 12 | 118 | 23 | grip (bara, 7:42, reserv), kruka (inkomst, 8:42) |
| 2 | 3 | 12 | 11 | 24 | 274 | 0 | kvarnmotor (mala, 3:19, reserv), rullstall (skrivare, 5:56), trim_skrivare (skrivare, 7:58), vindsnurra (trampa, 9:25) |
| 3 | 2 | 3 | 1 | 14 | 323 | 0 | cykelbatteri (strom, 7:31, reserv), ryggkorg (bara, 8:03), skrivare2 (skrivare, 9:42) |
| 4 | 1 | 23 | 0 | 15 | 281 | 0 | trim_skrivare2 (skrivare, 6:37), matarband (bara, 9:00, reserv), vindsnurra2 (strom, 10:57) |
| 5 | 7 | 52 | 0 | 1 | 362 | 0 | trim_skrivare3 (skrivare, 3:07), vindsnurra3 (strom, 13:15, reserv) |
| 6 | 3 | 7 | 0 | 0 | 296 | 0 | sol (strom, 6:36, reserv) |
| 7 | 1 | 1 | 0 | 0 | 98 | 0 |  |
| 8 | 3 | 4 | 0 | 0 | 398 | 0 | skrivare3 (skrivare, 2:55), magnet (bara, 4:51), bank (strom, 9:20, reserv) |
| 9 | 3 | 4 | 0 | 0 | 472 | 0 | solpark (strom, 4:13, reserv) |
| 10 | 0 | 0 | 0 | 0 | 94 | 0 |  |
| 11 | 1 | 72 | 0 | 0 | 229 | 0 | turbomotor (mala, 3:50) |
| 12 | 0 | 0 | 0 | 0 | 0 | 0 |  |

TIDIG: 0 · FAST: 0 · upplåst av reserven (målet väntade 3 min): 8

**SKRATT:** 117 roliga ögonblick på 106 min (11.0 per 10 min, mål minst 5)

**Köp:**

- dag 1 2:35 – gammalkvarn (30 kr)
- dag 1 8:24 – grip (50 kr)
- dag 1 8:50 – kruka (40 kr)
- dag 1 9:32 – sang (60 kr)
- dag 2 4:23 – kvarnmotor (50 kr)
- dag 2 9:40 – vindsnurra (133 kr)
- dag 2 10:49 – dorr (120 kr)
- dag 3 7:56 – cykelbatteri (30 kr)
- dag 3 8:24 – ryggkorg (120 kr)
- dag 3 8:56 – bord (120 kr)
- dag 3 9:56 – skrivare2 (500 kr)
- dag 3 11:29 – tak (250 kr)
- dag 4 9:22 – matarband (120 kr)
- dag 4 10:13 – pall (80 kr)
- dag 4 11:15 – vindsnurra (133 kr)
- dag 4 12:28 – vaggar (130 kr)
- dag 5 6:37 – webbdator (300 kr)
- dag 5 7:37 – fonster (90 kr)
- dag 5 8:03 – golv (140 kr)
- dag 5 9:05 – taklampa (90 kr)
- dag 5 13:27 – vindsnurra (133 kr)
- dag 6 2:14 – petgkvarn (1200 kr)
- dag 6 6:56 – sol (400 kr)
- dag 6 7:59 – fagelskramma (40 kr)
- dag 7 0:42 – skrivarepetg (1500 kr)
- dag 7 1:53 – n2_vas (600 kr)
- dag 7 2:36 – saljlada (400 kr)
- dag 8 3:31 – skrivare3 (3500 kr)
- dag 8 5:04 – magnet (2400 kr)
- dag 8 9:39 – bank (800 kr)
- dag 8 10:14 – hylla (150 kr)
- dag 9 0:43 – n2_hjalm (2300 kr)
- dag 9 7:45 – solpark (2400 kr)
- dag 9 10:34 – petgtorn (600 kr)
- dag 10 0:26 – tapeter (800 kr)
- dag 10 1:37 – spis (360 kr)
- dag 11 0:43 – kolfkvarn (6000 kr)
- dag 11 2:00 – kolfband (10500 kr)

## Storykedjan (kvittens → varför → nytt mål)

| Dag | Tid | Id | Kvittens | Varför | Nytt mål | Tid till målet |
|---|---|---|---|---|---|---|
| 1 | 0:29 | lastat | Tung. Den har storebror aldrig burit så långt. |  | Skrivaren ställer jag där borta, mot skräpberget. Min första | 4.4 s |
| 1 | 1:37 | printStart | Den piper. Den GÖR något. |  | En nyckelring till, så länge storebrors rulle räcker. | 6.7 s |
| 1 | 1:42 | printKlar | Klar! Ta ut den innan den ändrar sig. |  | En nyckelring till, så länge storebrors rulle räcker. | 3.1 s |
| 1 | 9:02 | krukaD1 | En kruka. Mamma skulle bli så stolt. Hon får inte veta. |  | Jag kan inte sova på betongen en natt till. Ali har en säng. | 7.2 s |
| 2 | 10:29 | vindsnurra | Den snurrar! Långsamt. Men den snurrar. | Om det regnar i natt drunknar jag. Ett tak. | Det drar från dörrhålet. En dörr kan jag printa. | 4.3 s |
| 4 | 9:50 | sophallare | Nu kan jag tömma hela kärran på en gång. | Krukor är bra. Pallar är bättre. | Jag behöver något att sitta på. En pall. Lagom ambitiöst. | 4.3 s |
| 7 | 2:54 | saljlada | Jag hämtar varje morgon. Du lägger i, jag betalar. |  | Vaserna i lådan. Ali hämtar själv. | 0.8 s |

## Hur länge nya mål väntade (från att förra målet blev klart till att det nya syntes i målrutan)

Snitt 3.3 s · max 14.3 s · över 4 s: 12 · över 8 s: 11 av 90

## Flaggor (65)

- **UPPREPNING** dag 4 10:12: Bra val. Folk köper sånt. Jag vet inte varför. (CT)
- **LUGN** dag 2 0:08: 0.0 s efter BÖRJA DAGEN: [lapp] "Första natten i en riktig säng. Jag printade den själv."
- **KROCK** dag 1 3:14: 0.7 s mellan [notis] "Kvarnen funkar. Soptippen är en gruva." och [notis] "💭 Min egen tråd. Nu printar jag en nyckelring av den."
- **KROCK** dag 1 10:26: 3.5 s mellan [notis] "Storebrors skrivare: Slut på tråd – mal mer så fortsätter de" och [lapp] "Dag 1. Nitton år. Inget mer tjat. Gården är full av skräp. I"
- **KROCK** dag 1 10:27: 1.0 s mellan [lapp] "Dag 1. Nitton år. Inget mer tjat. Gården är full av skräp. I" och [notis] "💭 Sängen ska in i skjulet. Sen sover jag."
- **KROCK** dag 3 12:25: 2.0 s mellan [morgonkort] "⏸️ Pausad · Klicka för att fortsätta." och [bubbla] "Kall öl ä viktigt."
- **KROCK** dag 3 13:23: 1.4 s mellan [sms-bubbla] "VA?! Du har byggt en skrivare TILL?? Du har typ en printfarm" och [lapp] "Tre dagar. Tänk om tre veckor."
- **KROCK** dag 4 11:38: 0.7 s mellan [notis] "Slut på trampandet. Nästan." och [notis] "💭 Det drar genom väggarna. Isolering, och sen blir det varm"
- **KROCK** dag 6 8:17: 3.7 s mellan [bubbla] "TUUT TUUT!" och [lapp] "Dag 6 är slut. Nu vet pappa att jag bor HÄR. Blå plast sälje"
- **KROCK** dag 6 8:18: 0.5 s mellan [lapp] "Dag 6 är slut. Nu vet pappa att jag bor HÄR. Blå plast sälje" och [notis] "💭 Göran har ett hem nu. Bättre än jag hade för en vecka sen"
- **KROCK** dag 10 0:17: 3.4 s mellan [notis] "💭 Skjulet ska kännas som ett rum. Tapeter." och [notis] "2 paket i natt · +3 344 kr"
- **RÖST AVBRUTEN** dag 6 1:01: du: 2.8 s kvar ← pappa: Jaså. Här bor du alltså.
- **KEDJA** dag 1 0:29: lastat: nytt mål 4.4 s efter kedjan (max 2 s)
- **KEDJA** dag 1 1:37: printStart: nytt mål 6.7 s efter kedjan (max 2 s)
- **KEDJA** dag 1 9:02: krukaD1: nytt mål 7.2 s efter kedjan (max 2 s)
- **KEDJA** dag 2 10:29: vindsnurra: nytt mål 4.3 s efter kedjan (max 2 s)
- **KEDJA** dag 4 9:50: sophallare: nytt mål 4.3 s efter kedjan (max 2 s)
- **SEN** dag 1 4:47: 49.7 s efter händelsen: kjelle: "God morgon, det är Kjelle på Radio Tippen! Det har flyttat in någon i "
- **SEN** dag 1 9:01: 18.4 s efter händelsen: ali: "Ali här. Jag såg Skräpgrip på avstånd. Ett streck blev lite snett. Mit"
- **SEN** dag 1 10:22: 18.3 s efter händelsen: notis:Storebrors skrivare: Slut på tråd – mal : "Storebrors skrivare: Slut på tråd – mal mer så fortsätter den"
- **SEN** dag 2 3:24: 15.1 s efter händelsen: värld:TUUT TUUT!: "TUUT TUUT!"
- **SEN** dag 2 4:52: 53.6 s efter händelsen: du: "Den blev… spagetti. Ali kallar det modern konst."
- **SEN** dag 3 10:18: 71.2 s efter händelsen: du: "Tratten är stor som en kaffekopp. Tunnan är stor som jag."
- **SEN** dag 4 1:57: 50.0 s efter händelsen: du: "En husvagn mitt i tippen. Och grinden är låst."
- **SEN** dag 4 5:39: 31.3 s efter händelsen: du: "En badanka. Den överlevde kvarnen."
- **SEN** dag 4 8:16: 53.6 s efter händelsen: du: "Jaha, Rolf har hämtat grillspade."
- **SEN** dag 5 6:51: 17.4 s efter händelsen: du: "Jaha, Rolf har hämtat trädgårdstomte till flaket."
- **SEN** dag 6 3:40: 30.7 s efter händelsen: notis:PETG-kvarnen: den första rullen röd PETG: "PETG-kvarnen: den första rullen röd PETG är klar"
- **SEN** dag 7 1:50: 16.0 s efter händelsen: ali: "Ali här. Ännu en ritning som blev på riktigt: PETG-skrivare. Semesterk"
- **SEN** dag 8 4:02: 12.1 s efter händelsen: värld:Mjau.: "Mjau."
- **SEN** dag 11 0:54: 17.5 s efter händelsen: du: "Byggnadsnämnden. Igentejpat. Mycket tejp."
- **SAMTIDIGT** dag 1 0:26: "Skrivaren står kvar på cykeln. Den ska a" och "(nytt mål i rutan)"
- **PAUS** dag 1 0:33: 0.0 s paus före "🖨️ Storebrors skrivare. Den ska stå där borta, mo"
- **SAMTIDIGT** dag 1 1:35: "Okej. Välj nåt litet att printa." och "Strömmen finns. Nu ska skrivaren veta va"
- **PAUS** dag 1 1:40: 0.0 s paus före "Den piper. Den GÖR något."
- **PAUS** dag 1 1:43: 0.7 s paus före "Klar! Ta ut den innan den ändrar sig."
- **PAUS** dag 1 3:13: 0.0 s paus före "Kvarnen funkar. Soptippen är en gruva."
- **PAUS** dag 1 9:08: 0.0 s paus före "Ali gillar krukor. Han sa det själv."
- **PAUS** dag 1 9:11: 0.0 s paus före "En kruka. Mamma skulle bli så stolt. Hon får inte "
- **PAUS** dag 2 5:31: 0.0 s paus före "Gården är STÄDAD, av mig, frivilligt. Mamma skulle"
- **PAUS** dag 2 10:32: 0.0 s paus före "🌬️ Vindsnurran sitter på taket – den trampar cyke"
- **PAUS** dag 4 5:41: 0.0 s paus före "11 st i tratten · 16 st på marken bredvid"
- **PAUS** dag 4 9:54: 0.0 s paus före "🗑️ Sophållaren står bakom kvarnen! Töm allt skräp"
- **PAUS** dag 4 11:38: 0.0 s paus före "Slut på trampandet. Nästan."
- **PAUS** dag 5 10:56: 0.0 s paus före "📦 Paketet till Lasse på bussdepån ligger i postlå"
- **PAUS** dag 6 0:15: 0.0 s paus före "2 paket i natt · +232 kr"
- **PAUS** dag 8 1:57: 0.0 s paus före "📦 Paketet till En lärare i Sundsvall ligger i pos"
- **PAUS** dag 8 10:21: 0.0 s paus före "En hylla. Jag har en hylla. Saker har en plats nu."
- **PAUS** dag 10 0:17: 0.0 s paus före "2 paket i natt · +3 344 kr"
- **PAUS** dag 10 1:49: 0.0 s paus före "Varm mat. I skjulet. Mamma skulle inte tro det."
- **PAUS** dag 11 0:18: 0.0 s paus före "Designvas i röd PETG · +50 %"
- **PAUS** dag 11 3:55: 0.0 s paus före "📦 Paketet till En fotbollsklubb i Borås ligger i "
- **UPPREPNING** dag 4 5:27: info:bra: "🛒 4 skräp från famnen i skottkärran" (förra gången dag 4)
- **UPPREPNING** dag 4 11:28: info:guld: "🌬️ Vindsnurran ligger i handen – klicka på skjulet för att sätta den " (förra gången dag 2)
- **UPPREPNING** dag 4 11:36: info:guld: "🌬️ Vindsnurran sitter på taket – den trampar cykeln åt dig när det bl" (förra gången dag 2)
- **UPPREPNING** dag 5 13:39: info:guld: "🌬️ Vindsnurran ligger i handen – klicka på skjulet för att sätta den " (förra gången dag 4)
- **UPPREPNING** dag 5 13:47: info:guld: "🌬️ Vindsnurran sitter på taket – den trampar cykeln åt dig när det bl" (förra gången dag 4)
- **UPPREPNING** dag 7 4:53: info:bra: "📦 1 saker i lådan · Ali hämtar i morgon bitti" (förra gången dag 7)
- **UPPREPNING** dag 7 5:31: info:bra: "📦 1 saker i lådan · Ali hämtar i morgon bitti" (förra gången dag 7)
- **TORRT** dag 1 4:27: 256 s utan roligt ögonblick
- **TEMPO** dag 6 8:27: dag 6 tog 8.5 min (mål 10–15)
- **TEMPO** dag 7 5:40: dag 7 tog 5.7 min (mål 10–15)
- **TEMPO** dag 10 1:56: dag 10 tog 1.9 min (mål 10–15)
- **TEMPO** dag 11 4:56: dag 11 tog 4.9 min (mål 10–15)
- **TEMPO** dag 12 0:00: dag 12 tog 0.0 min (mål 10–15)

Sidfel: inga

## Dag 1

| Tid | Källa | Vem | Text |
|---|---|---|---|
| 0:00 | MÅL |  | Lasta av skrivaren |
| 0:00 | MÅL |  | Lasta av skrivaren |
| 0:05 | sak | bud | (tips) |
| 0:06 | väntar | du | Se så mycket skräp här är. Det är ju en guldgruva! |
| 0:06 | klar | bud | (tips) |
| 0:08 | sak | du | Se så mycket skräp här är. Det är ju en guldgruva! |
| 0:08 | röst | du | Se så mycket skräp här är. Det är ju en guldgruva! · STORY |
| 0:13 | sak-del | du | Men först en skylt, så att alla vet var jag bor. |
| 0:13 | röst | du | Men först en skylt, så att alla vet var jag bor. · STORY |
| 0:15 | väntar | du | Spikade ihop en skylt av bräder från skräpberget: Soptippsvägen 1. Inte mycket för världen, men det är MITT. |
| 0:15 | varför | du | Skrivaren står kvar på cykeln. Den ska av. |
| 0:15 | väntar | du | Skrivaren står kvar på cykeln. Den ska av. |
| 0:17 | klar | du | Se så mycket skräp här är. Det är ju en guldgruva! |
| 0:21 | sak | du | Spikade ihop en skylt av bräder från skräpberget: Soptippsvägen 1. Inte mycket för världen, men det är MITT. |
| 0:21 | kvitto-visas | du | Spikade ihop en skylt av bräder från skräpberget: Soptippsvägen 1. Inte mycket för världen, men det är MITT. |
| 0:21 | lapp | 📔 Dagbok | Spikade ihop en skylt av bräder från skräpberget: Soptippsvägen 1. Inte mycket för världen, men det är MITT. |
| 0:21 | dagbokrad | du | Spikade ihop en skylt av bräder från skräpberget: Soptippsvägen 1. Inte mycket för världen, men det är MITT. |
| 0:21 | notis | dagbok | Spikade ihop en skylt av bräder från skräpberget: Soptippsvägen 1. Inte mycket för världen, men det är MITT. |
| 0:21 | klar | du | Spikade ihop en skylt av bräder från skräpberget: Soptippsvägen 1. Inte mycket för världen, men det är MITT. |
| 0:26 | sak | du | Skrivaren står kvar på cykeln. Den ska av. |
| 0:26 | struken | du | Skrivaren står kvar på cykeln. Den ska av. |
| 0:26 | sak | du | (nytt mål i rutan) |
| 0:26 | klar | du | (nytt mål i rutan) |
| 0:28 | struken | info:info | ⏎ Enter – hoppa över |
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
| 0:32 | målruta |  | Ställ upp skrivaren |
| 0:33 | klar | du | Tung. Den har storebror aldrig burit så långt. |
| 0:33 | sak | info:bra | 🖨️ Storebrors skrivare. Den ska stå där borta, mot skräpberget. |
| 0:33 | kvitto-visas | info:bra | 🖨️ Storebrors skrivare. Den ska stå där borta, mot skräpberget. |
| 0:33 | toast | bra | 🖨️ Storebrors skrivare. Den ska stå där borta, mot skräpberget. |
| 0:35 | klar | info:bra | 🖨️ Storebrors skrivare. Den ska stå där borta, mot skräpberget. |
| 0:37 | sak | du | Skrivaren ställer jag där borta, mot skräpberget. Min första verkstad. |
| 0:37 | pil |  | Ställ upp skrivaren |
| 0:37 | notis | tanke | 💭 Skrivaren ställer jag där borta, mot skräpberget. Min första verkstad. |
| 0:37 | röst | du | Skrivaren ställer jag där borta, mot skräpberget. Min första verkstad. · MÅL |
| 0:37 | nick |  | nick:1 |
| 0:43 | klar | du | Skrivaren ställer jag där borta, mot skräpberget. Min första verkstad. |
| 0:45 | väntar | info:bra | 🖨️ Storebrors skrivare står på sin plats |
| 0:45 | händelse | placerat | sak=skrivareS |
| 0:45 | paket |  | tanke |
| 0:45 | tanke | du | Storebrors rulle. Den räcker inte länge. |
| 0:45 | väntar | du | Storebrors rulle. Den räcker inte länge. |
| 0:45 | duns | du | ställs ner |
| 0:45 | sak | info:bra | 🖨️ Storebrors skrivare står på sin plats |
| 0:45 | kvitto-visas | info:bra | 🖨️ Storebrors skrivare står på sin plats |
| 0:45 | toast | bra | 🖨️ Storebrors skrivare står på sin plats |
| 0:45 | händelse | malKlart | id=stall del=Dag 1 – Kom igång nasta=strom |
| 0:45 | struken | du | Storebrors rulle. Den räcker inte länge. |
| 0:45 | väntar | du | Skrivaren behöver ström. Hur fixar jag det här ute? |
| 0:45 | MÅL |  | Skrivaren behöver ström |
| 0:47 | klar | info:bra | 🖨️ Storebrors skrivare står på sin plats |
| 0:47 | målruta |  | Skrivaren behöver ström |
| 0:49 | kvittens-bock |  | ✓ Ställ upp skrivaren |
| 0:49 | sak | du | Skrivaren behöver ström. Hur fixar jag det här ute? |
| 0:49 | pil |  | Skrivaren behöver ström |
| 0:49 | notis | tanke | 💭 Skrivaren behöver ström. Hur fixar jag det här ute? |
| 0:49 | röst | du | Skrivaren behöver ström. Hur fixar jag det här ute? · MÅL |
| 0:49 | nick |  | nick:2 |
| 0:53 | klar | du | Skrivaren behöver ström. Hur fixar jag det här ute? |
| 1:15 | paket |  | tanke |
| 1:15 | tanke | du | Cykeln… och storebrors generator? |
| 1:15 | väntar | du | Cykeln… och storebrors generator? |
| 1:15 | sak | du | Cykeln… och storebrors generator? |
| 1:15 | kvitto-visas | du | Cykeln… och storebrors generator? |
| 1:15 | notis | tanke | 💭 Cykeln… och storebrors generator? |
| 1:15 | röst | du | Cykeln… och storebrors generator? · STORY |
| 1:15 | händelse | malKlart | id=strom del=Dag 1 – Kom igång nasta=bygg |
| 1:15 | väntar | du | Om jag trampar ström med cykeln kan skrivaren gå. Cykeln där, generatorn bredvid. |
| 1:16 | MÅL |  | Ställ cykel och generator |
| 1:18 | klar | du | Cykeln… och storebrors generator? |
| 1:18 | målruta |  | Ställ cykel och generator |
| 1:19 | kvittens-bock |  | ✓ Skrivaren behöver ström |
| 1:20 | paket |  | tanke |
| 1:20 | tanke | du | Storebrors generator. Den gör el av trampandet. |
| 1:20 | väntar | du | Storebrors generator. Den gör el av trampandet. |
| 1:20 | händelse | placerat | sak=generator |
| 1:20 | duns | du | ställs ner |
| 1:21 | sak | du | Om jag trampar ström med cykeln kan skrivaren gå. Cykeln där, generatorn bredvid. |
| 1:21 | pil |  | Ställ cykel och generator |
| 1:21 | notis | tanke | 💭 Om jag trampar ström med cykeln kan skrivaren gå. Cykeln där, generatorn bredvid. |
| 1:21 | röst | du | Om jag trampar ström med cykeln kan skrivaren gå. Cykeln där, generatorn bredvid. · MÅL |
| 1:22 | nick |  | nick:3 |
| 1:23 | ljud | utrustning | Cykeln i famnen |
| 1:23 | händelse | lyft | sak=cykel |
| 1:28 | klar | du | Om jag trampar ström med cykeln kan skrivaren gå. Cykeln där, generatorn bredvid. |
| 1:33 | händelse | placerat | sak=cykel |
| 1:33 | duns | du | ställs ner |
| 1:35 | händelse | ombyggd | sak=cykel |
| 1:35 | varför | du | Okej. Välj nåt litet att printa. |
| 1:35 | väntar | du | Okej. Välj nåt litet att printa. |
| 1:35 | sak | du | Okej. Välj nåt litet att printa. |
| 1:35 | struken | du | Okej. Välj nåt litet att printa. |
| 1:35 | händelse | malKlart | id=bygg del=Dag 1 – Kom igång nasta=valjModell |
| 1:35 | struken | du | Storebrors generator. Den gör el av trampandet. |
| 1:35 | väntar | du | Strömmen finns. Nu ska skrivaren veta vad den ska göra. |
| 1:35 | målruta |  | Välj vad skrivaren ska printa |
| 1:35 | MÅL |  | Välj vad skrivaren ska printa |
| 1:35 | sak | du | Strömmen finns. Nu ska skrivaren veta vad den ska göra. |
| 1:35 | pil |  | Välj vad skrivaren ska printa |
| 1:35 | notis | tanke | 💭 Strömmen finns. Nu ska skrivaren veta vad den ska göra. |
| 1:35 | röst | du | Strömmen finns. Nu ska skrivaren veta vad den ska göra. · MÅL |
| 1:37 | händelse | printStart | sak=nyckelring |
| 1:37 | kvittens | du | Den piper. Den GÖR något. |
| 1:37 | väntar | du | Den piper. Den GÖR något. |
| 1:37 | tanke | du | Den stannar när jag slutar trampa. Ström som sparas hade varit nåt. |
| 1:37 | väntar | du | Den stannar när jag slutar trampa. Ström som sparas hade varit nåt. |
| 1:37 | händelse | malKlart | id=valjModell del=Dag 1 – Kom igång nasta=trampa |
| 1:37 | struken | du | Den stannar när jag slutar trampa. Ström som sparas hade varit nåt. |
| 1:37 | väntar | du | Nu behöver den ström. Trampa. |
| 1:38 | MÅL |  | Trampa cykeln |
| 1:40 | klar | du | Strömmen finns. Nu ska skrivaren veta vad den ska göra. |
| 1:40 | sak | du | Den piper. Den GÖR något. |
| 1:40 | notis | tanke | 💭 Den piper. Den GÖR något. |
| 1:40 | röst | du | Den piper. Den GÖR något. · STORY |
| 1:40 | målruta |  | Trampa cykeln |
| 1:42 | klar | du | Den piper. Den GÖR något. |
| 1:42 | händelse | printKlar | sak=nyckelring n=1 |
| 1:42 | kvittens | du | Klar! Ta ut den innan den ändrar sig. |
| 1:42 | väntar | du | Klar! Ta ut den innan den ändrar sig. |
| 1:42 | händelse | malKlart | id=trampa del=Dag 1 – Kom igång nasta=rullSlut |
| 1:42 | väntar | du | En nyckelring till, så länge storebrors rulle räcker. |
| 1:43 | MÅL |  | En nyckelring till |
| 1:43 | struken | du | Nu behöver den ström. Trampa. |
| 1:43 | sak | du | Klar! Ta ut den innan den ändrar sig. |
| 1:43 | notis | tanke | 💭 Klar! Ta ut den innan den ändrar sig. |
| 1:43 | röst | du | Klar! Ta ut den innan den ändrar sig. · STORY |
| 1:43 | målruta |  | En nyckelring till |
| 1:43 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 1:43 | paket |  | sms |
| 1:43 | väntar | bror | VA FAN?! Fick du igång den?? Jag försökte i typ ett år. Den bara pep. 😳 |
| 1:43 | skratt | bror | VA FAN?! Fick du igång den?? Jag försökt |
| 1:43 | paket |  | sms → ge |
| 1:43 | väntar | bror | Sälj den till Ali, han med affären vid tippen. Han köper gamla grejer. Han köpte min gamla mopedhjälm för 20 spänn. |
| 1:43 | väntar |  | (läget ändras) |
| 1:46 | klar | du | Klar! Ta ut den innan den ändrar sig. |
| 1:47 | sak |  | (läget ändras) |
| 1:47 | klar |  | (läget ändras) |
| 1:48 | händelse | printStart | sak=nyckelring |
| 1:49 | sak | du | En nyckelring till, så länge storebrors rulle räcker. |
| 1:49 | pil |  | En nyckelring till |
| 1:49 | notis | tanke | 💭 En nyckelring till, så länge storebrors rulle räcker. |
| 1:49 | röst | du | En nyckelring till, så länge storebrors rulle räcker. · MÅL |
| 1:53 | klar | du | En nyckelring till, så länge storebrors rulle räcker. |
| 1:59 | toast | guld | Nyckelring är klar – ta ut den |
| 1:59 | väntar | notis:Storebrors skrivare: Nyckelring är klar  | Storebrors skrivare: Nyckelring är klar – ta ut den |
| 1:59 | händelse | printKlar | sak=nyckelring n=2 |
| 1:59 | paket |  | tanke |
| 1:59 | tanke | du | Slut på storebrors rulle. Och här ligger ju plast överallt. Om jag bara kunde göra tråd av skräpet… Affären mitt emot kanske har något. |
| 1:59 | väntar | du | Slut på storebrors rulle. Och här ligger ju plast överallt. Om jag bara kunde göra tråd av skräpet… Affären mitt emot kanske har något. |
| 1:59 | händelse | malKlart | id=rullSlut del=Dag 1 – Kom igång nasta=saljTva |
| 1:59 | MÅL |  | Sälj nyckelringarna |
| 1:59 | sak | du | Slut på storebrors rulle. Och här ligger ju plast överallt. Om jag bara kunde göra tråd av skräpet… Affären mitt emot kanske har något. |
| 1:59 | kvitto-visas | du | Slut på storebrors rulle. Och här ligger ju plast överallt. Om jag bara kunde göra tråd av skräpet… Affären mitt emot kanske har något. |
| 1:59 | notis | tanke | 💭 Slut på storebrors rulle. Och här ligger ju plast överallt. Om jag bara kunde göra tråd av skräpet… Affären mitt emot kanske har något. |
| 1:59 | röst | du | Slut på storebrors rulle. Och här ligger ju plast överallt. Om jag bara kunde göra tråd av skräpet… Affären mitt emot kanske har något. · STORY |
| 2:03 | målruta |  | Sälj nyckelringarna |
| 2:03 | kvittens-bock |  | ✓ En nyckelring till |
| 2:11 | klar | du | Slut på storebrors rulle. Och här ligger ju plast överallt. Om jag bara kunde göra tråd av skräpet… Affären mitt emot kanske har något. |
| 2:11 | sak | du | (nytt mål i rutan) |
| 2:11 | pil |  | Sälj nyckelringarna |
| 2:11 | klar | du | (nytt mål i rutan) |
| 2:12 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 2:13 | struken | bror | VA FAN?! Fick du igång den?? Jag försökte i typ ett år. Den bara pep. 😳 |
| 2:13 | skratt | bror | VA FAN?! Fick du igång den?? Jag försökt |
| 2:13 | struken | notis:Storebrors skrivare: Nyckelring är klar  | Storebrors skrivare: Nyckelring är klar – ta ut den |
| 2:17 | röst | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. · STORY |
| 2:17 | butiksbubbla | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 2:19 | aliSalt | ali | 30 |
| 2:19 | butiksbubbla | ali | Pappas gamla köttkvarn. Den har malt allt utom kött. Trettio kronor, så är den din. |
| 2:20 | väntar | ali | Pappas gamla köttkvarn. Den har malt allt utom kött. Trettio kronor, så är den din. |
| 2:20 | händelse | malKlart | id=saljTva del=Dag 1 – Kom igång nasta=aliKvarn |
| 2:20 | väntar | du | Ali har en gammal kvarn. Den gör tråd av skräp. |
| 2:20 | MÅL |  | Köp kvarnen |
| 2:21 | struken | bror | Sälj den till Ali, han med affären vid tippen. Han köper gamla grejer. Han köpte min gamla mopedhjälm för 20 spänn. |
| 2:21 | sak | ali | Pappas gamla köttkvarn. Den har malt allt utom kött. Trettio kronor, så är den din. |
| 2:21 | röst | ali | Pappas gamla köttkvarn. Den har malt allt utom kött. Trettio kronor, så är den din. · STORY |
| 2:24 | kvittens-bock |  | ✓ Sälj nyckelringarna |
| 2:24 | målruta |  | Köp kvarnen |
| 2:25 | väntar | foto | Första nyckelringen |
| 2:25 | paket |  | tanke |
| 2:25 | tanke | du | Någon köpte nåt jag gjort. Det här kan funka. |
| 2:25 | väntar | du | Någon köpte nåt jag gjort. Det här kan funka. |
| 2:28 | klar | ali | Pappas gamla köttkvarn. Den har malt allt utom kött. Trettio kronor, så är den din. |
| 2:30 | sak | du | Ali har en gammal kvarn. Den gör tråd av skräp. |
| 2:30 | pil |  | Köp kvarnen |
| 2:30 | notis | tanke | 💭 Ali har en gammal kvarn. Den gör tråd av skräp. |
| 2:30 | röst | du | Ali har en gammal kvarn. Den gör tråd av skräp. · MÅL |
| 2:34 | klar | du | Ali har en gammal kvarn. Den gör tråd av skräp. |
| 2:34 | händelse | kopt | sak=gammalkvarn |
| 2:34 | röst | ali | Och kommer du på nåt smart, så vet du var jag bor. · STORY |
| 2:34 | butiksbubbla | ali | Och kommer du på nåt smart, så vet du var jag bor. |
| 2:36 | händelse | malKlart | id=aliKvarn del=Dag 1 – Kom igång nasta=kvarn |
| 2:36 | väntar | du | Kvarnen ställer jag bredvid skrivaren, närmast skräpberget. Där finns skräpet. |
| 2:36 | MÅL |  | Ställ kvarnen |
| 2:37 | sak | du | Kvarnen ställer jag bredvid skrivaren, närmast skräpberget. Där finns skräpet. |
| 2:37 | målruta |  | Ställ kvarnen |
| 2:37 | pil |  | Ställ kvarnen |
| 2:37 | notis | tanke | 💭 Kvarnen ställer jag bredvid skrivaren, närmast skräpberget. Där finns skräpet. |
| 2:37 | röst | du | Kvarnen ställer jag bredvid skrivaren, närmast skräpberget. Där finns skräpet. · MÅL |
| 2:40 | kvittens-bock |  | ✓ Köp kvarnen |
| 2:43 | klar | du | Kvarnen ställer jag bredvid skrivaren, närmast skräpberget. Där finns skräpet. |
| 2:51 | sak | foto | Första nyckelringen |
| 2:51 | foto | du | Första nyckelringen |
| 2:51 | händelse | placerat | sak=kvarnen |
| 2:51 | struken | kedja | kvarnStar |
| 2:51 | duns | du | ställs ner |
| 2:51 | händelse | malKlart | id=kvarn del=Dag 1 – Kom igång nasta=flaska |
| 2:51 | väntar | du | Skräp i kvarnen, sen vevar jag. Då blir det tråd. |
| 2:51 | MÅL |  | Gör egen tråd |
| 2:54 | klar | foto | Första nyckelringen |
| 2:55 | målruta |  | Gör egen tråd |
| 2:55 | kvittens-bock |  | ✓ Ställ kvarnen |
| 2:56 | sak | du | Skräp i kvarnen, sen vevar jag. Då blir det tråd. |
| 2:56 | pil |  | Gör egen tråd |
| 2:56 | notis | tanke | 💭 Skräp i kvarnen, sen vevar jag. Då blir det tråd. |
| 2:56 | röst | du | Skräp i kvarnen, sen vevar jag. Då blir det tråd. · MÅL |
| 2:56 | nick |  | nick:10 |
| 3:00 | klar | du | Skräp i kvarnen, sen vevar jag. Då blir det tråd. |
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
| 3:14 | klar | du | Kvarnen funkar. Soptippen är en gruva. |
| 3:14 | sak | du | Min egen tråd. Nu printar jag en nyckelring av den. |
| 3:14 | målruta |  | Printa med egen tråd |
| 3:14 | pil |  | Printa med egen tråd |
| 3:14 | notis | tanke | 💭 Min egen tråd. Nu printar jag en nyckelring av den. |
| 3:14 | röst | du | Min egen tråd. Nu printar jag en nyckelring av den. · MÅL |
| 3:18 | klar | du | Min egen tråd. Nu printar jag en nyckelring av den. |
| 3:23 | händelse | printStart | sak=nyckelring |
| 3:23 | toast | bra | 🔗 Slangen kopplad |
| 3:28 | toast | guld | ✅ |
| 3:28 | händelse | printKlar | sak=nyckelring n=3 |
| 3:28 | händelse | malKlart | id=egenPrint del=Dag 1 – Kom igång nasta=salj |
| 3:28 | väntar | du | Affären på andra sidan vägen kanske köper sånt här. |
| 3:28 | MÅL |  | Sälj hos Ali |
| 3:28 | målruta |  | Sälj hos Ali |
| 3:28 | sak | du | Affären på andra sidan vägen kanske köper sånt här. |
| 3:28 | pil |  | Sälj hos Ali |
| 3:28 | notis | tanke | 💭 Affären på andra sidan vägen kanske köper sånt här. |
| 3:28 | röst | du | Affären på andra sidan vägen kanske köper sånt här. · MÅL |
| 3:29 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 3:29 | nick |  | nick:12 |
| 3:32 | kvittens-bock |  | ✓ Printa med egen tråd |
| 3:33 | klar | du | Affären på andra sidan vägen kanske köper sånt här. |
| 3:36 | händelse | printStart | sak=nyckelring |
| 3:37 | toast | guld | ✅ |
| 3:37 | händelse | printKlar | sak=nyckelring n=4 |
| 3:38 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 3:40 | händelse | printStart | sak=nyckelring |
| 3:41 | toast | guld | ✅ |
| 3:41 | händelse | printKlar | sak=nyckelring n=5 |
| 3:41 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 3:41 | sak | du | Någon köpte nåt jag gjort. Det här kan funka. |
| 3:41 | notis | tanke | 💭 Någon köpte nåt jag gjort. Det här kan funka. |
| 3:41 | röst | du | Någon köpte nåt jag gjort. Det här kan funka. · STORY |
| 3:45 | klar | du | Någon köpte nåt jag gjort. Det här kan funka. |
| 3:49 | väntar | kjelle | God morgon, det är Kjelle på Radio Tippen! Det har flyttat in någon i det gamla skjulet. Med en cykel och en skrivare. Spännande, Gunnar. |
| 3:49 | radio | kjelle | God morgon, det är Kjelle på Radio Tippen! Det har flyttat in någon i det gamla skjulet. Med en cykel och en skrivare. Spännande, Gunnar. |
| 3:49 | skratt | du | Radio-Kjelle |
| 3:53 | tanke | du | Vem är Gunnar? |
| 3:53 | väntar | du | Vem är Gunnar? |
| 3:54 | paket |  | ali → ge |
| 3:54 | väntar | ali | Du får bonus! 25 kr extra. Kvalitet. Nästan. |
| 3:54 | väntar |  | (läget ändras) |
| 3:54 | aliSalt | ali | 45 |
| 3:54 | röst | ali | Nyckelringar igen? Folk tappar sina nycklar hela tiden. Bra affär för oss. · STORY |
| 3:54 | butiksbubbla | ali | Nyckelringar igen? Folk tappar sina nycklar hela tiden. Bra affär för oss. |
| 3:55 | händelse | malKlart | id=salj del=Dag 1 – Kom igång nasta=powerbank |
| 3:55 | paket |  | sms → ge |
| 3:55 | väntar | ali | Ali här. Glömde en sak. Kom tillbaka, jag har nåt åt dig. |
| 3:55 | väntar |  | (läget ändras) |
| 3:55 | MÅL |  | Gå till Ali |
| 3:57 | sak | du | Vem är Gunnar? |
| 3:57 | notis | tanke | 💭 Vem är Gunnar? |
| 3:57 | röst | du | Vem är Gunnar? · REAKTION |
| 3:59 | kvittens-bock |  | ✓ Sälj hos Ali |
| 4:00 | klar | du | Vem är Gunnar? |
| 4:02 | sak | ali | Du får bonus! 25 kr extra. Kvalitet. Nästan. |
| 4:02 | notis |  | Ali: ”Du får bonus! 25 kr extra. Kvalitet. Nästan.” |
| 4:02 | röst | ali | Du får bonus! 25 kr extra. Kvalitet. Nästan. · REAKTION |
| 4:03 | väntar | du | Ali har något åt mig. Jag går över vägen till affären. |
| 4:03 | målruta |  | Gå till Ali |
| 4:06 | klar | ali | Du får bonus! 25 kr extra. Kvalitet. Nästan. |
| 4:08 | sak | du | Ali har något åt mig. Jag går över vägen till affären. |
| 4:08 | pil |  | Gå till Ali |
| 4:08 | notis | tanke | 💭 Ali har något åt mig. Jag går över vägen till affären. |
| 4:08 | röst | du | Ali har något åt mig. Jag går över vägen till affären. · MÅL |
| 4:09 | paket | ali | ali → ge |
| 4:09 | butiksbubbla | ali | Ali här. Jag såg dig cykla. Det ser jobbigt ut. Testa koppla på den här. Bra kunder får bonus. |
| 4:10 | röst | ali | Ali här. Jag såg dig cykla. Det ser jobbigt ut. Testa koppla på den här. Bra kunder får bonus. · STORY |
| 4:12 | klar | du | Ali har något åt mig. Jag går över vägen till affären. |
| 4:15 | sak | ali | Ali här. Glömde en sak. Kom tillbaka, jag har nåt åt dig. |
| 4:15 | sms | ali | Ali här. Glömde en sak. Kom tillbaka, jag har nåt åt dig. |
| 4:15 | sms-bubbla | ali | Ali här. Glömde en sak. Kom tillbaka, jag har nåt åt dig. |
| 4:15 | röst | ali | Ali här. Glömde en sak. Kom tillbaka, jag har nåt åt dig. · STORY |
| 4:20 | klar | ali | Ali här. Glömde en sak. Kom tillbaka, jag har nåt åt dig. |
| 4:22 | sak |  | (läget ändras) |
| 4:22 | klar |  | (läget ändras) |
| 4:27 | skratt | du | powerbanken på cykeln |
| 4:27 | paket |  | tanke |
| 4:27 | tanke | du | Nu sparas lite ström. En nyckelring, typ. Framtiden är här, och den sitter fast med eltejp. |
| 4:27 | väntar | du | Nu sparas lite ström. En nyckelring, typ. Framtiden är här, och den sitter fast med eltejp. |
| 4:27 | monterat | du | byggsats:powerbank |
| 4:27 | händelse | monterat | sak=powerbank |
| 4:27 | sak | du | Nu sparas lite ström. En nyckelring, typ. Framtiden är här, och den sitter fast med eltejp. |
| 4:27 | kvitto-visas | du | Nu sparas lite ström. En nyckelring, typ. Framtiden är här, och den sitter fast med eltejp. |
| 4:27 | notis | tanke | 💭 Nu sparas lite ström. En nyckelring, typ. Framtiden är här, och den sitter fast med eltejp. |
| 4:27 | röst | du | Nu sparas lite ström. En nyckelring, typ. Framtiden är här, och den sitter fast med eltejp. · REAKTION |
| 4:27 | händelse | malKlart | id=powerbank del=Dag 1 – Kom igång nasta=kopGrip |
| 4:27 | paket |  | lapp |
| 4:27 | lapp-kö | 🧺 Ali | Ali här. Nyckelringen sålde. Jag ville bli ingenjör, men fick ta över pappas butik. I natt lät jag en AI rita en skräpgrip åt mig. Kom och titta. |
| 4:27 | väntar | ali | Ali här. Nyckelringen sålde. Jag ville bli ingenjör, men fick ta över pappas butik. I natt lät jag en AI rita en skräpgrip åt mig. Kom och titta. |
| 4:27 | struken | kedja | harRadGrip |
| 4:27 | väntar | du | Med en skräpgrip slipper jag böja mig. Ali har en ritning. |
| 4:27 | MÅL |  | Plocka skräp och mal det |
| 4:30 | målruta |  | Plocka skräp och mal det |
| 4:31 | kvittens-bock |  | ✓ Gå till Ali |
| 4:34 | klar | du | Nu sparas lite ström. En nyckelring, typ. Framtiden är här, och den sitter fast med eltejp. |
| 4:34 | sak | du | Med en skräpgrip slipper jag böja mig. Ali har en ritning. |
| 4:34 | pil |  | Plocka skräp och mal det |
| 4:34 | notis | tanke | 💭 Med en skräpgrip slipper jag böja mig. Ali har en ritning. |
| 4:34 | röst | du | Med en skräpgrip slipper jag böja mig. Ali har en ritning. · MÅL |
| 4:35 | nick |  | nick:14 |
| 4:39 | klar | du | Med en skräpgrip slipper jag böja mig. Ali har en ritning. |
| 4:42 | händelse | printStart | sak=nyckelring |
| 4:43 | toast | fel | Ingen ström – trampa cykeln |
| 4:43 | väntar | notis:Storebrors skrivare: Ingen ström – tramp | Storebrors skrivare: Ingen ström – trampa cykeln |
| 4:44 | toast | guld | ✅ |
| 4:44 | händelse | printKlar | sak=nyckelring n=6 |
| 4:44 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 4:46 | händelse | printStart | sak=nyckelring |
| 4:47 | sak | kjelle | God morgon, det är Kjelle på Radio Tippen! Det har flyttat in någon i det gamla skjulet. Med en cykel och en skrivare. Spännande, Gunnar. |
| 4:47 | notis |  | 📻 Radio Tippen: God morgon, det är Kjelle på Radio Tippen! Det har flyttat in någon i det gamla skjulet. Med en cykel och en skrivare. Spännande, Gunnar. |
| 4:47 | röst | kjelle | God morgon, det är Kjelle på Radio Tippen! Det har flyttat in någon i det gamla skjulet. Med en cykel och en skrivare. Spännande, Gunnar. · REAKTION |
| 4:47 | toast | guld | ✅ |
| 4:47 | händelse | printKlar | sak=nyckelring n=7 |
| 4:58 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 4:59 | klar | kjelle | God morgon, det är Kjelle på Radio Tippen! Det har flyttat in någon i det gamla skjulet. Med en cykel och en skrivare. Spännande, Gunnar. |
| 5:00 | händelse | printStart | sak=nyckelring |
| 5:01 | toast | guld | ✅ |
| 5:01 | händelse | printKlar | sak=nyckelring n=8 |
| 5:01 | struken | notis:Storebrors skrivare: Ingen ström – tramp | Storebrors skrivare: Ingen ström – trampa cykeln |
| 5:02 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 5:07 | sak | mamma | Hur kunde du bara gå? Är du ok? Svara när jag ringer! |
| 5:07 | sms | mamma | Hur kunde du bara gå? Är du ok? Svara när jag ringer! |
| 5:07 | sms-bubbla | mamma | Hur kunde du bara gå? Är du ok? Svara när jag ringer! |
| 5:07 | röst | mamma | Hur kunde du bara gå? Är du ok? Svara när jag ringer! · STORY |
| 5:10 | aliSalt | ali | 15 |
| 5:10 | aliSalt | ali | 15 |
| 5:10 | aliSalt | ali | 15 |
| 5:11 | klar | mamma | Hur kunde du bara gå? Är du ok? Svara när jag ringer! |
| 5:19 | sak |  | (läget ändras) |
| 5:19 | klar |  | (läget ändras) |
| 5:20 | händelse | printStart | sak=nyckelring |
| 5:21 | toast | guld | ✅ |
| 5:21 | händelse | printKlar | sak=nyckelring n=9 |
| 5:33 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 5:35 | händelse | printStart | sak=nyckelring |
| 5:36 | toast | guld | ✅ |
| 5:36 | händelse | printKlar | sak=nyckelring n=10 |
| 5:37 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 5:39 | händelse | printStart | sak=nyckelring |
| 5:42 | toast | guld | ✅ |
| 5:42 | händelse | printKlar | sak=nyckelring n=11 |
| 5:42 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 5:45 | tanke | du | Gripen hos Ali. Femtio kronor. |
| 5:45 | väntar | du | Gripen hos Ali. Femtio kronor. |
| 5:45 | nick |  | paminn:14 |
| 5:46 | sak | du | Gripen hos Ali. Femtio kronor. |
| 5:46 | notis | tanke | 💭 Gripen hos Ali. Femtio kronor. |
| 5:46 | röst | du | Gripen hos Ali. Femtio kronor. · REAKTION |
| 5:48 | klar | du | Gripen hos Ali. Femtio kronor. |
| 5:49 | aliSalt | ali | 15 |
| 5:49 | aliSalt | ali | 15 |
| 5:50 | aliSalt | ali | 15 |
| 5:58 | sak | ali | Ali här. Nyckelringen sålde. Jag ville bli ingenjör, men fick ta över pappas butik. I natt lät jag en AI rita en skräpgrip åt mig. Kom och titta. |
| 5:58 | sms | ali | Ali här. Nyckelringen sålde. Jag ville bli ingenjör, men fick ta över pappas butik. I natt lät jag en AI rita en skräpgrip åt mig. Kom och titta. |
| 5:58 | sms-bubbla | ali | Ali här. Nyckelringen sålde. Jag ville bli ingenjör, men fick ta över pappas butik. I natt lät jag en AI rita en skräpgrip åt mig. Kom och titta. |
| 5:58 | röst | ali | Ali här. Nyckelringen sålde. Jag ville bli ingenjör, men fick ta över pappas butik. I natt lät jag en AI rita en skräpgrip åt mig. Kom och titta. · STORY |
| 5:58 | händelse | printStart | sak=nyckelring |
| 5:59 | toast | guld | ✅ |
| 5:59 | händelse | printKlar | sak=nyckelring n=12 |
| 6:00 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 6:02 | händelse | printStart | sak=nyckelring |
| 6:03 | toast | guld | ✅ |
| 6:03 | händelse | printKlar | sak=nyckelring n=13 |
| 6:04 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 6:06 | händelse | printStart | sak=nyckelring |
| 6:07 | toast | guld | ✅ |
| 6:07 | händelse | printKlar | sak=nyckelring n=14 |
| 6:08 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 6:10 | klar | ali | Ali här. Nyckelringen sålde. Jag ville bli ingenjör, men fick ta över pappas butik. I natt lät jag en AI rita en skräpgrip åt mig. Kom och titta. |
| 6:16 | aliSalt | ali | 15 |
| 6:16 | aliSalt | ali | 15 |
| 6:16 | aliSalt | ali | 15 |
| 6:25 | händelse | printStart | sak=nyckelring |
| 6:26 | toast | guld | ✅ |
| 6:26 | händelse | printKlar | sak=nyckelring n=15 |
| 6:27 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 6:29 | händelse | printStart | sak=nyckelring |
| 6:29 | toast | fel | Ingen ström – trampa cykeln |
| 6:31 | toast | guld | ✅ |
| 6:31 | händelse | printKlar | sak=nyckelring n=16 |
| 6:31 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 6:33 | händelse | printStart | sak=nyckelring |
| 6:34 | toast | guld | ✅ |
| 6:34 | händelse | printKlar | sak=nyckelring n=17 |
| 6:35 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 6:42 | aliSalt | ali | 15 |
| 6:42 | aliSalt | ali | 15 |
| 6:42 | aliSalt | ali | 15 |
| 6:51 | händelse | printStart | sak=nyckelring |
| 6:52 | toast | guld | ✅ |
| 6:52 | händelse | printKlar | sak=nyckelring n=18 |
| 6:53 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 6:55 | händelse | printStart | sak=nyckelring |
| 6:56 | toast | guld | ✅ |
| 6:56 | händelse | printKlar | sak=nyckelring n=19 |
| 6:57 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 6:59 | händelse | printStart | sak=nyckelring |
| 7:00 | toast | guld | ✅ |
| 7:00 | händelse | printKlar | sak=nyckelring n=20 |
| 7:01 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 7:08 | aliSalt | ali | 15 |
| 7:09 | aliSalt | ali | 15 |
| 7:09 | aliSalt | ali | 15 |
| 7:17 | händelse | printStart | sak=nyckelring |
| 7:20 | toast | guld | ✅ |
| 7:20 | händelse | printKlar | sak=nyckelring n=21 |
| 7:20 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 7:27 | aliSalt | ali | 15 |
| 7:42 | händelse | printStart | sak=nyckelring |
| 7:42 | upplåst | bara | grip |
| 7:42 | brott | RESERV | grip (bara 4 av 6) |
| 7:42 | händelse | upplast | id=grip flask=bara |
| 7:43 | toast | guld | ✅ |
| 7:43 | händelse | printKlar | sak=nyckelring n=22 |
| 7:44 | väntar | bud | (tips) |
| 7:44 | sak | bud | (tips) |
| 7:44 | väntar | du | Jag har pengar nu. Hos Ali kan jag köpa uppgraderingar – bära mer eller printa snabbare. |
| 7:45 | klar | bud | (tips) |
| 7:47 | sak | du | Jag har pengar nu. Hos Ali kan jag köpa uppgraderingar – bära mer eller printa snabbare. |
| 7:47 | röst | du | Jag har pengar nu. Hos Ali kan jag köpa uppgraderingar – bära mer eller printa snabbare. · MÅL |
| 7:54 | klar | du | Jag har pengar nu. Hos Ali kan jag köpa uppgraderingar – bära mer eller printa snabbare. |
| 7:55 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 8:03 | aliSalt | ali | 15 |
| 8:11 | händelse | printStart | sak=nyckelring |
| 8:12 | toast | guld | ✅ |
| 8:12 | händelse | printKlar | sak=nyckelring n=23 |
| 8:13 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 8:20 | aliSalt | ali | 15 |
| 8:23 | toast | guld | 3D-modell köpt – printa skräpgrip på skrivaren |
| 8:23 | händelse | kopt | sak=grip |
| 8:23 | röst | ali | Bra val. 3D-modellen är din. Den räcker till en. · STORY |
| 8:23 | butiksbubbla | ali | Bra val. 3D-modellen är din. Den räcker till en. |
| 8:25 | händelse | malKlart | id=kopGrip del=Dag 1 – Kom igång nasta=printGrip |
| 8:25 | väntar | du | Min första 3D-modell! Jag printar inte bara saker – jag printar maskiner. |
| 8:25 | MÅL |  | Printa skräpgripen |
| 8:26 | sak | du | Min första 3D-modell! Jag printar inte bara saker – jag printar maskiner. |
| 8:26 | kvitto-visas | du | Min första 3D-modell! Jag printar inte bara saker – jag printar maskiner. |
| 8:26 | lapp | 📔 Dagbok | Min första 3D-modell! Jag printar inte bara saker – jag printar maskiner. |
| 8:26 | dagbokrad | du | Min första 3D-modell! Jag printar inte bara saker – jag printar maskiner. |
| 8:26 | notis | dagbok | Min första 3D-modell! Jag printar inte bara saker – jag printar maskiner. |
| 8:26 | klar | du | Min första 3D-modell! Jag printar inte bara saker – jag printar maskiner. |
| 8:26 | målruta |  | Printa skräpgripen |
| 8:26 | sak | du | (nytt mål i rutan) |
| 8:26 | pil |  | Printa skräpgripen |
| 8:26 | klar | du | (nytt mål i rutan) |
| 8:35 | händelse | printStart | sak=byggsats:grip |
| 8:38 | händelse | printKlar | sak=byggsats:grip n=1 |
| 8:38 | toast | guld | ✅ |
| 8:38 | väntar | info:guld | Klicka för att ta på dig skräpgrip |
| 8:38 | händelse | tagitUrPrint | sak=byggsats:grip n=1 |
| 8:38 | paket |  | sms |
| 8:38 | väntar | ali | Ali här. Jag såg Skräpgrip på avstånd. Ett streck blev lite snett. Mitt fel. Vackert ändå. |
| 8:38 | struken | kedja | grip |
| 8:38 | sak | info:guld | Klicka för att ta på dig skräpgrip |
| 8:38 | kvitto-visas | info:guld | Klicka för att ta på dig skräpgrip |
| 8:38 | toast | guld | Klicka för att ta på dig skräpgrip |
| 8:40 | klar | info:guld | Klicka för att ta på dig skräpgrip |
| 8:42 | väntar | info:guld | 🦾 Skräpgripen sitter! Bär 6, lättare att sikta, plockar när du går nära. |
| 8:42 | tog på | du | byggsats:grip |
| 8:42 | händelse | monterat | sak=grip |
| 8:42 | sak | info:guld | 🦾 Skräpgripen sitter! Bär 6, lättare att sikta, plockar när du går nära. |
| 8:42 | kvitto-visas | info:guld | 🦾 Skräpgripen sitter! Bär 6, lättare att sikta, plockar när du går nära. |
| 8:42 | toast | guld | 🦾 Skräpgripen sitter! Bär 6, lättare att sikta, plockar när du går nära. |
| 8:42 | händelse | malKlart | id=printGrip del=Dag 1 – Kom igång nasta=krukaD1 |
| 8:42 | väntar | du | Ali vill ha krukor. Jag printar en blomkruka. |
| 8:42 | MÅL |  | Printa och sälj nyckelringar |
| 8:42 | upplåst | inkomst | kruka |
| 8:42 | brott | UPPLÅST | kruka (inkomst 23 av 6) |
| 8:42 | händelse | upplast | id=kruka flask=inkomst |
| 8:42 | paket |  | tanke → sms |
| 8:42 | tanke | du | Nyckelringar, nyckelringar. Ali kan inte vilja ha fler. |
| 8:42 | väntar | du | Nyckelringar, nyckelringar. Ali kan inte vilja ha fler. |
| 8:42 | väntar | ali | Prova en kruka. Folk köper krukor. Ingen vet varför. |
| 8:42 | skratt | ali | Prova en kruka. Folk köper krukor. Ingen |
| 8:44 | klar | info:guld | 🦾 Skräpgripen sitter! Bär 6, lättare att sikta, plockar när du går nära. |
| 8:46 | målruta |  | Köp krukreceptet |
| 8:46 | kvittens-bock |  | ✓ Printa skräpgripen |
| 8:46 | sak | du | Ali vill ha krukor. Jag printar en blomkruka. |
| 8:46 | pil |  | Köp krukreceptet |
| 8:46 | notis | tanke | 💭 Ali vill ha krukor. Jag printar en blomkruka. |
| 8:46 | röst | du | Ali vill ha krukor. Jag printar en blomkruka. · MÅL |
| 8:47 | nick |  | nick:16 |
| 8:49 | händelse | kopt | sak=kruka |
| 8:49 | röst | ali | Bra val. Folk köper sånt. Jag vet inte varför. · STORY |
| 8:49 | butiksbubbla | ali | Blomkruka? Bra val. Folk köper sånt. Jag vet inte varför. |
| 8:50 | klar | du | Ali vill ha krukor. Jag printar en blomkruka. |
| 8:59 | händelse | printStart | sak=kruka |
| 9:01 | sak | ali | Ali här. Jag såg Skräpgrip på avstånd. Ett streck blev lite snett. Mitt fel. Vackert ändå. |
| 9:01 | sms | ali | Ali här. Jag såg Skräpgrip på avstånd. Ett streck blev lite snett. Mitt fel. Vackert ändå. |
| 9:01 | sms-bubbla | ali | Ali här. Jag såg Skräpgrip på avstånd. Ett streck blev lite snett. Mitt fel. Vackert ändå. |
| 9:01 | röst | ali | Ali här. Jag såg Skräpgrip på avstånd. Ett streck blev lite snett. Mitt fel. Vackert ändå. · REAKTION |
| 9:02 | toast | guld | ✅ |
| 9:02 | händelse | printKlar | sak=kruka n=1 |
| 9:02 | kvittens | du | En kruka. Mamma skulle bli så stolt. Hon får inte veta. |
| 9:02 | väntar | du | En kruka. Mamma skulle bli så stolt. Hon får inte veta. |
| 9:02 | händelse | malKlart | id=krukaD1 del=Dag 1 – Kom igång nasta=saljKruka |
| 9:02 | väntar | du | Ali gillar krukor. Han sa det själv. |
| 9:02 | MÅL |  | Sälj blomkrukan |
| 9:02 | händelse | tagitUrPrint | sak=kruka n=1 |
| 9:05 | målruta |  | Sälj blomkrukan |
| 9:08 | klar | ali | Ali här. Jag såg Skräpgrip på avstånd. Ett streck blev lite snett. Mitt fel. Vackert ändå. |
| 9:08 | sak | du | Ali gillar krukor. Han sa det själv. |
| 9:08 | pil |  | Sälj blomkrukan |
| 9:08 | notis | tanke | 💭 Ali gillar krukor. Han sa det själv. |
| 9:08 | röst | du | Ali gillar krukor. Han sa det själv. · MÅL |
| 9:11 | klar | du | Ali gillar krukor. Han sa det själv. |
| 9:11 | sak | du | En kruka. Mamma skulle bli så stolt. Hon får inte veta. |
| 9:11 | notis | tanke | 💭 En kruka. Mamma skulle bli så stolt. Hon får inte veta. |
| 9:11 | röst | du | En kruka. Mamma skulle bli så stolt. Hon får inte veta. · STORY |
| 9:16 | klar | du | En kruka. Mamma skulle bli så stolt. Hon får inte veta. |
| 9:21 | aliSalt | ali | 70 |
| 9:22 | struken | kedja | morkt |
| 9:22 | händelse | malKlart | id=saljKruka del=Dag 1 – Kom igång nasta=kopSang |
| 9:22 | väntar | du | Jag kan inte sova på betongen en natt till. Ali har en säng. Typ. |
| 9:22 | MÅL |  | Köp sängen |
| 9:22 | målruta |  | Köp sängen |
| 9:23 | sak | du | Jag kan inte sova på betongen en natt till. Ali har en säng. Typ. |
| 9:23 | pil |  | Köp sängen |
| 9:23 | notis | tanke | 💭 Jag kan inte sova på betongen en natt till. Ali har en säng. Typ. |
| 9:23 | röst | du | Jag kan inte sova på betongen en natt till. Ali har en säng. Typ. · MÅL |
| 9:26 | kvittens-bock |  | ✓ Sälj blomkrukan |
| 9:28 | klar | du | Jag kan inte sova på betongen en natt till. Ali har en säng. Typ. |
| 9:32 | händelse | kopt | sak=sang |
| 9:32 | röst | ali | Sov gott, min vän. · STORY |
| 9:32 | butiksbubbla | ali | Sov gott, min vän. |
| 9:33 | händelse | malKlart | id=kopSang del=Dag 1 – Kom igång nasta=printSang |
| 9:33 | väntar | du | Sängen tar lång tid. Den är värd det. |
| 9:33 | målruta |  | Printa sängen |
| 9:33 | MÅL |  | Printa sängen |
| 9:34 | sak | du | Sängen tar lång tid. Den är värd det. |
| 9:34 | pil |  | Printa sängen |
| 9:34 | notis | tanke | 💭 Sängen tar lång tid. Den är värd det. |
| 9:34 | röst | du | Sängen tar lång tid. Den är värd det. · MÅL |
| 9:37 | klar | du | Sängen tar lång tid. Den är värd det. |
| 9:37 | kvittens-bock |  | ✓ Köp sängen |
| 9:54 | sak | du | Nyckelringar, nyckelringar. Ali kan inte vilja ha fler. |
| 9:54 | notis | tanke | 💭 Nyckelringar, nyckelringar. Ali kan inte vilja ha fler. |
| 9:54 | röst | du | Nyckelringar, nyckelringar. Ali kan inte vilja ha fler. · STORY |
| 9:58 | händelse | printStart | sak=sang |
| 9:59 | klar | du | Nyckelringar, nyckelringar. Ali kan inte vilja ha fler. |
| 10:02 | toast | fel | Ingen ström – trampa cykeln |
| 10:04 | toast | fel | Slut på tråd – mal mer så fortsätter den |
| 10:04 | väntar | notis:Storebrors skrivare: Slut på tråd – mal  | Storebrors skrivare: Slut på tråd – mal mer så fortsätter den |
| 10:07 | sak | ali | Prova en kruka. Folk köper krukor. Ingen vet varför. |
| 10:07 | skratt | ali | Prova en kruka. Folk köper krukor. Ingen |
| 10:07 | sms | ali | Prova en kruka. Folk köper krukor. Ingen vet varför. |
| 10:07 | skratt | ali | Prova en kruka. Folk köper krukor. Ingen |
| 10:07 | sms-bubbla | ali | Prova en kruka. Folk köper krukor. Ingen vet varför. |
| 10:07 | skratt | ali | Prova en kruka. Folk köper krukor. Ingen |
| 10:07 | röst | ali | Prova en kruka. Folk köper krukor. Ingen vet varför. · STORY |
| 10:12 | klar | ali | Prova en kruka. Folk köper krukor. Ingen vet varför. |
| 10:12 | skratt | ali | Prova en kruka. Folk köper krukor. Ingen |
| 10:22 | sak | notis:Storebrors skrivare: Slut på tråd – mal  | Storebrors skrivare: Slut på tråd – mal mer så fortsätter den |
| 10:22 | notis | fel | Storebrors skrivare: Slut på tråd – mal mer så fortsätter den |
| 10:24 | toast | guld | ✅ |
| 10:24 | händelse | printKlar | sak=sang n=1 |
| 10:25 | klar | notis:Storebrors skrivare: Slut på tråd – mal  | Storebrors skrivare: Slut på tråd – mal mer så fortsätter den |
| 10:26 | händelse | tagitUrPrint | sak=sang n=1 |
| 10:26 | struken | kedja | sang |
| 10:26 | händelse | malKlart | id=printSang del=Dag 1 – Kom igång nasta=sov1 |
| 10:26 | paket |  | lapp |
| 10:26 | lapp | 📔 Dagbok | Dag 1. Nitton år. Inget mer tjat. Gården är full av skräp. I morgon. |
| 10:26 | kvallsrad | du | Nitton år. Inget mer tjat. Gården är full av skräp. I morgon. |
| 10:26 | väntar | du | Sängen ska in i skjulet. Sen sover jag. |
| 10:26 | målruta |  | Sängen i skjulet |
| 10:26 | MÅL |  | Sängen i skjulet |
| 10:27 | sak | du | Sängen ska in i skjulet. Sen sover jag. |
| 10:27 | pil |  | Sängen i skjulet |
| 10:27 | notis | tanke | 💭 Sängen ska in i skjulet. Sen sover jag. |
| 10:27 | röst | du | Sängen ska in i skjulet. Sen sover jag. · MÅL |
| 10:30 | klar | du | Sängen ska in i skjulet. Sen sover jag. |
| 10:39 | nattkort | du | 🌙 Dag 1 är slut. God natt. zzz… i en riktig säng Nitton år. Inget mer tjat. Gården är full av skräp. I morgon. DAGENS PRINTAR Nyckelring × 23 Blomkruka × 1 Sän |

<details><summary>Botens handlingar dag 1</summary>

- 0:12 gå till brädhögen (3 m) (5 kr)
- 0:29 gå till cykeln vid vägen (2 m) (5 kr)
- 0:45 gå till rutan i linje 1 (13 m) (5 kr)
- 1:23 gå till cykeln (lyfter den) (13 m) (5 kr)
- 1:33 gå till cykelns plats (11 m) (5 kr)
- 1:36 gå till skrivaren (2 m) (5 kr)
- 1:37 printar Nyckelring (5 kr)
- 1:44 tar ut 1 st ur skrivaren (5 kr)
- 1:48 printar Nyckelring (sista av storebrors rulle) (5 kr)
- 2:12 tar ut 1 st ur skrivaren (5 kr)
- 2:17 gå till Ali (26 m) (5 kr)
- 2:17 öppnar Alis butik – sälja de två nyckelringarna (5 kr)
- 2:20 säljer hos Ali: +30 kr (35 kr)
- 2:33 öppnar Alis butik – köpa kvarnen (35 kr)
- 2:35 köper gammalkvarn för 30 kr (5 kr)
- 2:36 köpte kvarnen (5 kr)
- 2:51 gå till kvarnens ruta (28 m) (5 kr)
- 3:09 plockar 3 skräp på gården (bär max 3) (5 kr)
- 3:11 gå till kvarnen (12 m) (5 kr)
- 3:21 gå till cykeln (2 m) (5 kr)
- 3:23 printar Nyckelring (5 kr)
- 3:29 tar ut 1 st ur skrivaren (5 kr)
- 3:36 printar Nyckelring (5 kr)
- 3:38 tar ut 1 st ur skrivaren (5 kr)
- 3:40 printar Nyckelring (5 kr)
- 3:41 tar ut 1 st ur skrivaren (5 kr)
- 3:52 gå till Ali (27 m) (5 kr)
- 3:52 öppnar Alis butik – sälja nyckelringar (5 kr)
- 3:55 säljer hos Ali: +45 kr (50 kr)
- 4:09 öppnar Alis butik – Ali (powerbanken) (50 kr)
- 4:27 gå till koppla powerbanken till cykeln (24 m) (75 kr)
- 4:40 tjänar pengar till väntar på flaskhalsen för grip: 75/115 kr → printar nyckelring (15 kr) (75 kr)
- 4:41 gå till skrivaren (2 m) (75 kr)
- 4:42 printar Nyckelring (75 kr)
- 4:45 tar ut 1 st ur skrivaren (75 kr)
- 4:46 printar Nyckelring (75 kr)
- 4:52 plockar 3 skräp på gården (bär max 3) (75 kr)
- 4:55 gå till kvarnen (12 m) (75 kr)
- 4:58 gå till skrivaren (1 m) (75 kr)
- 4:58 tar ut 1 st ur skrivaren (75 kr)
- 5:00 printar Nyckelring (75 kr)
- 5:02 tar ut 1 st ur skrivaren (75 kr)
- 5:08 gå till Ali (28 m) (75 kr)
- 5:08 öppnar Alis butik – sälja (75 kr)
- 5:10 säljer hos Ali: +45 kr (120 kr)
- 5:13 tjänar pengar till väntar på flaskhalsen för grip: 120/160 kr → printar nyckelring (15 kr) (120 kr)
- 5:19 gå till skrivaren (25 m) (120 kr)
- 5:20 printar Nyckelring (120 kr)
- 5:27 plockar 3 skräp på gården (bär max 3) (120 kr)
- 5:31 gå till kvarnen (18 m) (120 kr)
- 5:33 gå till skrivaren (2 m) (120 kr)
- 5:34 tar ut 1 st ur skrivaren (120 kr)
- 5:35 printar Nyckelring (120 kr)
- 5:38 tar ut 1 st ur skrivaren (120 kr)
- 5:39 printar Nyckelring (120 kr)
- 5:41 gå till cykeln (2 m) (120 kr)
- 5:42 tar ut 1 st ur skrivaren (120 kr)
- 5:48 gå till Ali (26 m) (120 kr)
- 5:48 öppnar Alis butik – sälja (120 kr)
- 5:50 säljer hos Ali: +45 kr (165 kr)
- 5:52 tjänar pengar till väntar på flaskhalsen för grip: 165/205 kr → printar nyckelring (15 kr) (165 kr)
- 5:57 gå till skrivaren (25 m) (165 kr)
- 5:58 printar Nyckelring (165 kr)
- 6:01 tar ut 1 st ur skrivaren (165 kr)
- 6:02 printar Nyckelring (165 kr)
- 6:05 tar ut 1 st ur skrivaren (165 kr)
- 6:06 printar Nyckelring (165 kr)
- 6:09 tar ut 1 st ur skrivaren (165 kr)
- 6:14 gå till Ali (25 m) (165 kr)
- 6:14 öppnar Alis butik – sälja (165 kr)
- 6:16 säljer hos Ali: +45 kr (210 kr)
- 6:18 tjänar pengar till väntar på flaskhalsen för grip: 210/250 kr → printar nyckelring (15 kr) (210 kr)
- 6:23 gå till skrivaren (25 m) (210 kr)
- 6:25 printar Nyckelring (210 kr)
- 6:27 tar ut 1 st ur skrivaren (210 kr)
- 6:29 printar Nyckelring (210 kr)
- 6:30 gå till cykeln (1 m) (210 kr)
- 6:31 tar ut 1 st ur skrivaren (210 kr)
- 6:33 printar Nyckelring (210 kr)
- 6:35 tar ut 1 st ur skrivaren (210 kr)
- 6:41 gå till Ali (25 m) (210 kr)
- 6:41 öppnar Alis butik – sälja (210 kr)
- 6:43 säljer hos Ali: +45 kr (255 kr)
- 6:44 tjänar pengar till väntar på flaskhalsen för grip: 255/295 kr → printar nyckelring (15 kr) (255 kr)
- 6:50 gå till skrivaren (25 m) (255 kr)
- 6:51 printar Nyckelring (255 kr)
- 6:54 tar ut 1 st ur skrivaren (255 kr)
- 6:55 printar Nyckelring (255 kr)
- 6:58 tar ut 1 st ur skrivaren (255 kr)
- 6:59 printar Nyckelring (255 kr)
- 7:02 tar ut 1 st ur skrivaren (255 kr)
- 7:07 gå till Ali (25 m) (255 kr)
- 7:07 öppnar Alis butik – sälja (255 kr)
- 7:09 säljer hos Ali: +45 kr (300 kr)
- 7:11 tjänar pengar till väntar på flaskhalsen för grip: 300/340 kr → printar nyckelring (15 kr) (300 kr)
- 7:16 gå till skrivaren (25 m) (300 kr)
- 7:17 printar Nyckelring (300 kr)
- 7:19 gå till cykeln (1 m) (300 kr)
- 7:20 tar ut 1 st ur skrivaren (300 kr)
- 7:25 gå till Ali (25 m) (300 kr)
- 7:25 öppnar Alis butik – sälja (300 kr)
- 7:27 säljer hos Ali: +15 kr (315 kr)
- 7:28 tjänar pengar till väntar på flaskhalsen för grip: 315/340 kr → printar nyckelring (15 kr) (315 kr)
- 7:33 plockar 3 skräp på gården (bär max 3) (315 kr)
- 7:37 gå till kvarnen (19 m) (315 kr)
- 7:40 gå till skrivaren (1 m) (315 kr)
- 7:42 printar Nyckelring (315 kr)
- 7:49 plockar 3 skräp på gården (bär max 3) (315 kr)
- 7:54 gå till kvarnen (22 m) (315 kr)
- 7:55 gå till skrivaren (1 m) (315 kr)
- 7:56 tar ut 1 st ur skrivaren (315 kr)
- 8:01 gå till Ali (28 m) (315 kr)
- 8:01 öppnar Alis butik – sälja (315 kr)
- 8:03 säljer hos Ali: +15 kr (330 kr)
- 8:04 tjänar pengar till väntar på flaskhalsen för grip: 330/340 kr → printar nyckelring (15 kr) (330 kr)
- 8:09 gå till skrivaren (25 m) (330 kr)
- 8:11 printar Nyckelring (330 kr)
- 8:13 tar ut 1 st ur skrivaren (330 kr)
- 8:18 gå till Ali (25 m) (330 kr)
- 8:18 öppnar Alis butik – sälja (330 kr)
- 8:20 säljer hos Ali: +15 kr (345 kr)
- 8:22 öppnar Alis butik – köpa skräpgrip (345 kr)
- 8:24 köper grip för 50 kr (295 kr)
- 8:34 gå till skrivaren (25 m) (295 kr)
- 8:35 printar Skräpgrip (295 kr)
- 8:39 tar ut 1 st ur skrivaren (295 kr)
- 8:42 tar på grip (295 kr)
- 8:48 gå till Ali (25 m) (295 kr)
- 8:48 öppnar Alis butik – köpa receptet blomkruka (295 kr)
- 8:50 köper kruka för 40 kr (255 kr)
- 8:57 gå till skrivaren (25 m) (255 kr)
- 8:59 printar Blomkruka (255 kr)
- 8:59 gå till cykeln (1 m) (255 kr)
- 9:03 tar ut 1 st ur skrivaren (255 kr)
- 9:20 gå till Ali (25 m) (255 kr)
- 9:20 öppnar Alis butik – sälja krukan (255 kr)
- 9:22 säljer hos Ali: +70 kr (325 kr)
- 9:30 öppnar Alis butik – köpa sängen (325 kr)
- 9:32 köper sang för 60 kr (265 kr)
- 9:49 plockar 6 skräp på gården (bär max 6) (265 kr)
- 9:54 gå till kvarnen (25 m) (265 kr)
- 9:57 gå till skrivaren (1 m) (265 kr)
- 9:58 printar Säng (265 kr)
- 10:03 gå till cykeln (2 m) (265 kr)
- 10:16 plockar 6 skräp på gården (bär max 6) (265 kr)
- 10:22 gå till kvarnen (28 m) (265 kr)
- 10:26 gå till skrivaren (2 m) (265 kr)
- 10:26 tar ut 1 st ur skrivaren (265 kr)
- 10:37 gå till sängplatsen i skjulet (21 m) (265 kr)

</details>

## Dag 2

| Tid | Källa | Vem | Text |
|---|---|---|---|
| 10:39 | vara | ali | kruka |
| 10:39 | händelse | malKlart | id=sov1 del=Dag 1 – Kom igång nasta=kopMotor |
| 10:39 | MÅL |  | Mal skräp, printa och sälj |
| 10:40 | sopsack | rolf | Sopsäckarna landade på gården |
| 10:40 | paket |  | tanke → ge |
| 10:40 | tanke | du | Hmm, vad kastade gubben ut ur sopbilen? Jag går och kollar. |
| 10:40 | väntar | du | Hmm, vad kastade gubben ut ur sopbilen? Jag går och kollar. |
| 10:40 | väntar |  | (läget ändras) |
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
| 0:14 | sak | du | Vevandet tar på armarna. Ali har en motor till kvarnen. |
| 0:14 | pil |  | Mal skräp, printa och sälj |
| 0:14 | notis | tanke | 💭 Vevandet tar på armarna. Ali har en motor till kvarnen. |
| 0:14 | röst | du | Vevandet tar på armarna. Ali har en motor till kvarnen. · MÅL |
| 0:18 | klar | du | Vevandet tar på armarna. Ali har en motor till kvarnen. |
| 0:20 | struken | notis:Första natten i en riktig säng. Jag prin | Första natten i en riktig säng. Jag printade den själv. |
| 0:20 | sak | notis:Blomkruka · +50 % | Blomkruka · +50 % |
| 0:20 | notis |  | Blomkruka · +50 % |
| 0:23 | klar | notis:Blomkruka · +50 % | Blomkruka · +50 % |
| 0:24 | händelse | printStart | sak=kruka |
| 0:27 | toast | guld | ✅ |
| 0:27 | händelse | printKlar | sak=kruka n=2 |
| 0:27 | händelse | tagitUrPrint | sak=kruka n=1 |
| 0:32 | sak | du | Hmm, vad kastade gubben ut ur sopbilen? Jag går och kollar. |
| 0:32 | notis | tanke | 💭 Hmm, vad kastade gubben ut ur sopbilen? Jag går och kollar. |
| 0:32 | röst | du | Hmm, vad kastade gubben ut ur sopbilen? Jag går och kollar. · STORY |
| 0:33 | butiksbubbla | ali | Ledig? Vad är det? Har aldrig hört talas om det. |
| 0:34 | aliSalt | ali | 105 |
| 0:34 | butiksbubbla | ali | Precis vad jag ville ha idag. 105 kr – med extra. |
| 0:35 | väntar | ali | Ledig? Vad är det? Har aldrig hört talas om det. |
| 0:35 | väntar | ali | Precis det jag ville ha idag, min vän. |
| 0:37 | klar | du | Hmm, vad kastade gubben ut ur sopbilen? Jag går och kollar. |
| 0:39 | sak | ali | Ledig? Vad är det? Har aldrig hört talas om det. |
| 0:39 | röst | ali | Ledig? Vad är det? Har aldrig hört talas om det. · STORY |
| 0:40 | väntar | foto | Egen säng |
| 0:40 | paket |  | tanke |
| 0:40 | tanke | du | Tänk att jag ska få sova i min egen säng. |
| 0:40 | väntar | du | Tänk att jag ska få sova i min egen säng. |
| 0:40 | väntar | ali | Ali här. Såg skylten. Stavningen är rätt. Det är mer än många. |
| 0:43 | klar | ali | Ledig? Vad är det? Har aldrig hört talas om det. |
| 0:45 | sak | ali | Precis det jag ville ha idag, min vän. |
| 0:45 | röst | ali | Precis det jag ville ha idag, min vän. · STORY |
| 0:49 | klar | ali | Precis det jag ville ha idag, min vän. |
| 0:50 | skratt | du | falsk tuta |
| 0:54 | händelse | printStart | sak=kruka |
| 0:55 | toast | fel | Ingen ström – trampa cykeln |
| 0:57 | sak |  | (läget ändras) |
| 0:57 | klar |  | (läget ändras) |
| 0:57 | toast | guld | ✅ |
| 0:57 | händelse | printKlar | sak=kruka n=3 |
| 0:58 | händelse | tagitUrPrint | sak=kruka n=1 |
| 1:01 | sak | foto | Egen säng |
| 1:01 | foto | du | Egen säng |
| 1:03 | klar | foto | Egen säng |
| 1:05 | lapp | 📔 Dagbok | Sopbilen tippade en ny last. Allt det skräpet – och grinden är låst. |
| 1:05 | dagbokrad | du | Sopbilen tippade en ny last. Allt det skräpet – och grinden är låst. |
| 1:05 | väntar | notis:Sopbilen tippade en ny last. Allt det sk | Sopbilen tippade en ny last. Allt det skräpet – och grinden är låst. |
| 1:05 | aliSalt | ali | 105 |
| 1:06 | sak | notis:Sopbilen tippade en ny last. Allt det sk | Sopbilen tippade en ny last. Allt det skräpet – och grinden är låst. |
| 1:06 | notis | dagbok | Sopbilen tippade en ny last. Allt det skräpet – och grinden är låst. |
| 1:09 | klar | notis:Sopbilen tippade en ny last. Allt det sk | Sopbilen tippade en ny last. Allt det skräpet – och grinden är låst. |
| 1:29 | sak | du | Tänk att jag ska få sova i min egen säng. |
| 1:29 | notis | tanke | 💭 Tänk att jag ska få sova i min egen säng. |
| 1:29 | röst | du | Tänk att jag ska få sova i min egen säng. · STORY |
| 1:33 | klar | du | Tänk att jag ska få sova i min egen säng. |
| 1:34 | händelse | printStart | sak=kruka |
| 1:37 | toast | guld | ✅ |
| 1:37 | händelse | printKlar | sak=kruka n=4 |
| 1:37 | händelse | tagitUrPrint | sak=kruka n=1 |
| 1:45 | aliSalt | ali | 105 |
| 1:54 | händelse | printStart | sak=kruka |
| 1:57 | toast | guld | ✅ |
| 1:57 | händelse | printKlar | sak=kruka n=5 |
| 1:58 | händelse | tagitUrPrint | sak=kruka n=1 |
| 2:00 | väntar | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått generator. Vi tar en låt på det. Den här är till dig, Gunnar. |
| 2:00 | radio | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått generator. Vi tar en låt på det. Den här är till dig, Gunnar. |
| 2:00 | skratt | du | Radio-Kjelle |
| 2:00 | sak | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått generator. Vi tar en låt på det. Den här är till dig, Gunnar. |
| 2:00 | notis |  | 📻 Radio Tippen: Radio Tippen, Kjelle här. Skjulet vid tippen har fått generator. Vi tar en låt på det. Den här är till dig, Gunnar. |
| 2:00 | röst | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått generator. Vi tar en låt på det. Den här är till dig, Gunnar. · REAKTION |
| 2:05 | aliSalt | ali | 105 |
| 2:10 | klar | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått generator. Vi tar en låt på det. Den här är till dig, Gunnar. |
| 2:38 | paket |  | tanke |
| 2:38 | tanke | du | Jaha. En kalsong. Använd. |
| 2:38 | väntar | du | Jaha. En kalsong. Använd. |
| 2:38 | skratt | du | kvarnen spottar |
| 2:38 | sak | du | Jaha. En kalsong. Använd. |
| 2:38 | notis | tanke | 💭 Jaha. En kalsong. Använd. |
| 2:38 | röst | du | Jaha. En kalsong. Använd. · REAKTION |
| 2:40 | händelse | printStart | sak=kruka |
| 2:41 | klar | du | Jaha. En kalsong. Använd. |
| 2:43 | toast | guld | ✅ |
| 2:43 | händelse | printKlar | sak=kruka n=6 |
| 2:43 | händelse | tagitUrPrint | sak=kruka n=1 |
| 2:51 | aliSalt | ali | 105 |
| 2:58 | väntar | mamma | Har du frusit än? |
| 3:00 | händelse | printStart | sak=kruka |
| 3:00 | väntar | info:guld | 🚛 Sopbilen tippade en ny last på soptippen! |
| 3:00 | sak | info:guld | 🚛 Sopbilen tippade en ny last på soptippen! |
| 3:00 | kvitto-visas | info:guld | 🚛 Sopbilen tippade en ny last på soptippen! |
| 3:00 | toast | guld | 🚛 Sopbilen tippade en ny last på soptippen! |
| 3:01 | toast | fel | Ingen ström – trampa cykeln |
| 3:01 | väntar | notis:Storebrors skrivare: Ingen ström – tramp | Storebrors skrivare: Ingen ström – trampa cykeln |
| 3:02 | klar | info:guld | 🚛 Sopbilen tippade en ny last på soptippen! |
| 3:03 | toast | guld | ✅ |
| 3:03 | händelse | printKlar | sak=kruka n=7 |
| 3:04 | händelse | tagitUrPrint | sak=kruka n=1 |
| 3:07 | skratt | du | falsk tuta |
| 3:07 | väntar | värld:TUUT TUUT! | TUUT TUUT! |
| 3:11 | aliSalt | ali | 105 |
| 3:12 | sak | notis:Storebrors skrivare: Ingen ström – tramp | Storebrors skrivare: Ingen ström – trampa cykeln |
| 3:12 | notis | fel | Storebrors skrivare: Ingen ström – trampa cykeln |
| 3:14 | klar | notis:Storebrors skrivare: Ingen ström – tramp | Storebrors skrivare: Ingen ström – trampa cykeln |
| 3:19 | upplåst | mala | kvarnmotor |
| 3:19 | brott | RESERV | kvarnmotor (mala 16 av 10) |
| 3:19 | händelse | upplast | id=kvarnmotor flask=mala |
| 3:19 | paket |  | sms |
| 3:19 | väntar | ali | Ali här. En motor? Jag har en. Från en gammal tvättmaskin. Den centrifugerar fortfarande om man ber snällt. |
| 3:24 | sak | värld:TUUT TUUT! | TUUT TUUT! |
| 3:24 | bubbla |  | TUUT TUUT! |
| 3:27 | klar | värld:TUUT TUUT! | TUUT TUUT! |
| 3:48 | händelse | printStart | sak=kruka |
| 3:51 | paket |  | tanke |
| 3:51 | tanke | du | Den blev… spagetti. Ali kallar det modern konst. |
| 3:51 | väntar | du | Den blev… spagetti. Ali kallar det modern konst. |
| 3:51 | skratt | du | plastspagetti |
| 3:51 | toast | guld | ✅ |
| 3:51 | händelse | printKlar | sak=kruka n=8 |
| 3:51 | händelse | tagitUrPrint | sak=spagetti n=1 |
| 3:58 | sak | ali | Ali här. En motor? Jag har en. Från en gammal tvättmaskin. Den centrifugerar fortfarande om man ber snällt. |
| 3:58 | sms | ali | Ali här. En motor? Jag har en. Från en gammal tvättmaskin. Den centrifugerar fortfarande om man ber snällt. |
| 3:58 | sms-bubbla | ali | Ali här. En motor? Jag har en. Från en gammal tvättmaskin. Den centrifugerar fortfarande om man ber snällt. |
| 3:58 | röst | ali | Ali här. En motor? Jag har en. Från en gammal tvättmaskin. Den centrifugerar fortfarande om man ber snällt. · STORY |
| 3:59 | skratt | du | Ali köper konst |
| 3:59 | aliSalt | ali | 3 |
| 4:07 | händelse | printStart | sak=kruka |
| 4:07 | klar | ali | Ali här. En motor? Jag har en. Från en gammal tvättmaskin. Den centrifugerar fortfarande om man ber snällt. |
| 4:08 | toast | fel | Ingen ström – trampa cykeln |
| 4:10 | toast | guld | ✅ |
| 4:10 | händelse | printKlar | sak=kruka n=9 |
| 4:11 | händelse | tagitUrPrint | sak=kruka n=1 |
| 4:12 | väntar | mamma | Har du frusit än? |
| 4:18 | aliSalt | ali | 105 |
| 4:22 | toast | guld | 3D-modell köpt – printa kvarnmotor på skrivaren |
| 4:22 | händelse | kopt | sak=kvarnmotor |
| 4:23 | händelse | malKlart | id=kopMotor del=Dag 2 – Tippen bredvid nasta=monteraMotor |
| 4:23 | struken | kedja | motorKopt |
| 4:23 | väntar | du | Motorn ska sitta där veven sitter. Jag printar den först. |
| 4:23 | målruta |  | Printa kvarnmotorn till kvarnen |
| 4:23 | MÅL |  | Printa kvarnmotorn till kvarnen |
| 4:23 | sak | du | Motorn ska sitta där veven sitter. Jag printar den först. |
| 4:23 | pil |  | Printa kvarnmotorn till kvarnen |
| 4:23 | notis | tanke | 💭 Motorn ska sitta där veven sitter. Jag printar den först. |
| 4:23 | röst | du | Motorn ska sitta där veven sitter. Jag printar den först. · MÅL |
| 4:27 | kvittens-bock |  | ✓ Köp kvarnmotorn hos Ali (50 kr) |
| 4:28 | klar | du | Motorn ska sitta där veven sitter. Jag printar den först. |
| 4:52 | sak | du | Den blev… spagetti. Ali kallar det modern konst. |
| 4:52 | notis | tanke | 💭 Den blev… spagetti. Ali kallar det modern konst. |
| 4:52 | röst | du | Den blev… spagetti. Ali kallar det modern konst. · REAKTION |
| 4:55 | scenInfo | gard | Lite skräp ramlade av flaket på gården |
| 4:55 | skratt | du | däcket rullar iväg |
| 4:55 | paket |  | tanke |
| 4:55 | tanke | du | Däcket ville inte stanna. Jag förstår det. |
| 4:55 | väntar | du | Däcket ville inte stanna. Jag förstår det. |
| 4:56 | händelse | printStart | sak=byggsats:kvarnmotor |
| 4:56 | klar | du | Den blev… spagetti. Ali kallar det modern konst. |
| 4:58 | händelse | printKlar | sak=byggsats:kvarnmotor n=1 |
| 4:58 | toast | guld | ✅ |
| 4:59 | väntar | info:guld | ⚙️ Kvarnmotorn ligger i handen – klicka på kvarnen för att skruva fast den |
| 4:59 | händelse | tagitUrPrint | sak=byggsats:kvarnmotor n=1 |
| 4:59 | paket |  | sms |
| 4:59 | väntar | ali | Ali här. Ännu en ritning som blev på riktigt: Kvarnmotor. Semesterkassan växer. Livet växer. |
| 4:59 | sak | info:guld | ⚙️ Kvarnmotorn ligger i handen – klicka på kvarnen för att skruva fast den |
| 4:59 | kvitto-visas | info:guld | ⚙️ Kvarnmotorn ligger i handen – klicka på kvarnen för att skruva fast den |
| 4:59 | toast | guld | ⚙️ Kvarnmotorn ligger i handen – klicka på kvarnen för att skruva fast den |
| 5:01 | klar | info:guld | ⚙️ Kvarnmotorn ligger i handen – klicka på kvarnen för att skruva fast den |
| 5:03 | väntar | info:guld | ⚙️ Motorn sitter där veven satt – nu mal kvarnen själv. |
| 5:03 | händelse | monterat | sak=kvarnmotor |
| 5:03 | paket |  | tanke |
| 5:03 | tanke | du | Motorn sitter där veven satt. Mina armar tackar. |
| 5:03 | väntar | du | Motorn sitter där veven satt. Mina armar tackar. |
| 5:03 | monterat | du | byggsats:kvarnmotor |
| 5:03 | händelse | monterat | sak=kvarnmotor |
| 5:03 | sak | info:guld | ⚙️ Motorn sitter där veven satt – nu mal kvarnen själv. |
| 5:03 | kvitto-visas | info:guld | ⚙️ Motorn sitter där veven satt – nu mal kvarnen själv. |
| 5:03 | toast | guld | ⚙️ Motorn sitter där veven satt – nu mal kvarnen själv. |
| 5:03 | händelse | malKlart | id=monteraMotor del=Dag 2 – Tippen bredvid nasta=kopSack |
| 5:03 | struken | du | Däcket ville inte stanna. Jag förstår det. |
| 5:03 | väntar | du | Gården är full av skräp. Jag börjar vid skjulet. |
| 5:03 | MÅL |  | Kolla vad som flög ut från sopbilen |
| 5:05 | klar | info:guld | ⚙️ Motorn sitter där veven satt – nu mal kvarnen själv. |
| 5:06 | målruta |  | Kolla vad som flög ut från sopbilen |
| 5:07 | kvittens-bock |  | ✓ Printa kvarnmotorn till kvarnen |
| 5:07 | sak | du | Gården är full av skräp. Jag börjar vid skjulet. |
| 5:07 | pil |  | Kolla vad som flög ut från sopbilen |
| 5:07 | notis | tanke | 💭 Gården är full av skräp. Jag börjar vid skjulet. |
| 5:07 | röst | du | Gården är full av skräp. Jag börjar vid skjulet. · MÅL |
| 5:11 | klar | du | Gården är full av skräp. Jag börjar vid skjulet. |
| 5:13 | struken | du | Motorn sitter där veven satt. Mina armar tackar. |
| 5:16 | paket |  | brev → ge → tanke |
| 5:16 | väntar | rolf | Du sliter ju. Ingen gör så nuförtin. Ta dessa så går dä lättare. / Rolf – ja kör sopbilen å har hand om tippen bredvid. MVH ROLF​ |
| 5:16 | väntar |  | (läget ändras) |
| 5:16 | tanke | du | Rolf… gubben i sopbilen. Han har tippen bredvid. Han verkar schysst. |
| 5:16 | väntar | du | Rolf… gubben i sopbilen. Han har tippen bredvid. Han verkar schysst. |
| 5:16 | sak | rolf | Du sliter ju. Ingen gör så nuförtin. Ta dessa så går dä lättare. / Rolf – ja kör sopbilen å har hand om tippen bredvid. MVH ROLF​ |
| 5:16 | lapp | Lapp från Rolf | Du sliter ju. Ingen gör så nuförtin. Ta dessa så går dä lättare. / Rolf – ja kör sopbilen å har hand om tippen bredvid. MVH ROLF​ |
| 5:16 | röst | rolf | Du sliter ju. Ingen gör så nuförtin. Ta dessa så går dä lättare. / Rolf – ja kör sopbilen å har hand om tippen bredvid. MVH ROLF​ · STORY |
| 5:27 | klar | rolf | Du sliter ju. Ingen gör så nuförtin. Ta dessa så går dä lättare. / Rolf – ja kör sopbilen å har hand om tippen bredvid. MVH ROLF​ |
| 5:29 | väntar | info:guld | 🗑️ Sopsäcken är över axeln! Du bär 10 skräp nu. |
| 5:29 | tog på | du | byggsats:korg |
| 5:29 | händelse | monterat | sak=korg |
| 5:29 | sak | info:guld | 🗑️ Sopsäcken är över axeln! Du bär 10 skräp nu. |
| 5:29 | kvitto-visas | info:guld | 🗑️ Sopsäcken är över axeln! Du bär 10 skräp nu. |
| 5:29 | toast | guld | 🗑️ Sopsäcken är över axeln! Du bär 10 skräp nu. |
| 5:29 | händelse | malKlart | id=kopSack del=Dag 2 – Tippen bredvid nasta=n1-stada-klart-garden |
| 5:29 | händelse | malKlart | id=n1-stada-klart-garden del=Dag 2 – Tippen bredvid nasta=rolf0-brev |
| 5:29 | väntar | du | Gården är STÄDAD, av mig, frivilligt. Mamma skulle aldrig tro det. |
| 5:29 | väntar | du | Vänta på sopbilen. Den lämnar något. |
| 5:29 | MÅL |  | Vänta på sopbilen. Den lämnar något. |
| 5:31 | klar | info:guld | 🗑️ Sopsäcken är över axeln! Du bär 10 skräp nu. |
| 5:31 | sak | du | Gården är STÄDAD, av mig, frivilligt. Mamma skulle aldrig tro det. |
| 5:31 | kvitto-visas | du | Gården är STÄDAD, av mig, frivilligt. Mamma skulle aldrig tro det. |
| 5:31 | lapp | 📔 Dagbok | Gården är STÄDAD, av mig, frivilligt. Mamma skulle aldrig tro det. |
| 5:31 | dagbokrad | du | Gården är STÄDAD, av mig, frivilligt. Mamma skulle aldrig tro det. |
| 5:31 | notis | dagbok | Gården är STÄDAD, av mig, frivilligt. Mamma skulle aldrig tro det. |
| 5:31 | klar | du | Gården är STÄDAD, av mig, frivilligt. Mamma skulle aldrig tro det. |
| 5:31 | struken | ali | Ali här. Ännu en ritning som blev på riktigt: Kvarnmotor. Semesterkassan växer. Livet växer. |
| 5:31 | sak | du | Vänta på sopbilen. Den lämnar något. |
| 5:31 | målruta |  | Vänta på sopbilen. Den lämnar något. |
| 5:31 | pil |  | Vänta på sopbilen. Den lämnar något. |
| 5:31 | röst | du | Vänta på sopbilen. Den lämnar något. · MÅL |
| 5:33 | händelse | printStart | sak=kruka |
| 5:34 | klar | du | Vänta på sopbilen. Den lämnar något. |
| 5:35 | toast | fel | Ingen ström – trampa cykeln |
| 5:36 | sak |  | (läget ändras) |
| 5:36 | klar |  | (läget ändras) |
| 5:37 | toast | guld | ✅ |
| 5:37 | händelse | printKlar | sak=kruka n=10 |
| 5:38 | händelse | tagitUrPrint | sak=kruka n=1 |
| 5:41 | sak | du | Rolf… gubben i sopbilen. Han har tippen bredvid. Han verkar schysst. |
| 5:41 | notis | tanke | 💭 Rolf… gubben i sopbilen. Han har tippen bredvid. Han verkar schysst. |
| 5:41 | röst | du | Rolf… gubben i sopbilen. Han har tippen bredvid. Han verkar schysst. · STORY |
| 5:45 | aliSalt | ali | 105 |
| 5:46 | klar | du | Rolf… gubben i sopbilen. Han har tippen bredvid. Han verkar schysst. |
| 5:55 | händelse | printStart | sak=kruka |
| 5:56 | upplåst | skrivare | rullstall |
| 5:56 | brott | UPPLÅST | rullstall (skrivare 193 av 75) |
| 5:56 | händelse | upplast | id=rullstall flask=skrivare |
| 5:56 | paket |  | tanke → sms |
| 5:56 | tanke | du | Kvarnen står och väntar för att hållaren är full. Om den rymde fler rullar kunde den mala hela tiden. |
| 5:56 | väntar | du | Kvarnen står och väntar för att hållaren är full. Om den rymde fler rullar kunde den mala hela tiden. |
| 5:56 | väntar | ali | Ali här. Rullställ. Fyra rullar i stället för en. Har ett på hyllan. |
| 5:58 | toast | guld | ✅ |
| 5:58 | händelse | printKlar | sak=kruka n=11 |
| 5:58 | händelse | tagitUrPrint | sak=kruka n=1 |
| 6:04 | sak | ali | Ali här. Rullställ. Fyra rullar i stället för en. Har ett på hyllan. |
| 6:04 | sms | ali | Ali här. Rullställ. Fyra rullar i stället för en. Har ett på hyllan. |
| 6:04 | sms-bubbla | ali | Ali här. Rullställ. Fyra rullar i stället för en. Har ett på hyllan. |
| 6:04 | röst | ali | Ali här. Rullställ. Fyra rullar i stället för en. Har ett på hyllan. · STORY |
| 6:05 | aliSalt | ali | 105 |
| 6:10 | klar | ali | Ali här. Rullställ. Fyra rullar i stället för en. Har ett på hyllan. |
| 6:19 | händelse | printStart | sak=kruka |
| 6:22 | toast | guld | ✅ |
| 6:22 | händelse | printKlar | sak=kruka n=12 |
| 6:23 | händelse | tagitUrPrint | sak=kruka n=1 |
| 6:30 | aliSalt | ali | 105 |
| 6:35 | skratt | du | falsk tuta |
| 6:40 | struken | ali | Ali här. Såg skylten. Stavningen är rätt. Det är mer än många. |
| 6:41 | händelse | printStart | sak=kruka |
| 6:43 | toast | guld | ✅ |
| 6:43 | händelse | printKlar | sak=kruka n=13 |
| 6:43 | väntar | värld:TUUT TUUT! | TUUT TUUT! |
| 6:43 | paket |  | tanke → ge |
| 6:43 | tanke | du | Flaggan är uppe. Rolf har lämnat något. |
| 6:43 | väntar | du | Flaggan är uppe. Rolf har lämnat något. |
| 6:43 | väntar |  | (läget ändras) |
| 6:44 | händelse | tagitUrPrint | sak=kruka n=1 |
| 6:51 | aliSalt | ali | 105 |
| 6:57 | skratt | du | falsk tuta |
| 6:57 | sak | du | Kvarnen står och väntar för att hållaren är full. Om den rymde fler rullar kunde den mala hela tiden. |
| 6:57 | notis | tanke | 💭 Kvarnen står och väntar för att hållaren är full. Om den rymde fler rullar kunde den mala hela tiden. |
| 6:57 | röst | du | Kvarnen står och väntar för att hållaren är full. Om den rymde fler rullar kunde den mala hela tiden. · STORY |
| 7:01 | väntar | rolf | Såg att du printar grejer. Kan du göra en sån hä? Kall öl ä viktigt. /Rolf​ |
| 7:01 | paket |  | ge |
| 7:01 | väntar |  | (läget ändras) |
| 7:01 | händelse | malKlart | id=rolf0-brev del=Dag 2 – Tippen bredvid nasta=rolf0-printa |
| 7:01 | väntar | du | Printa ölhållare med kylklamp. |
| 7:01 | MÅL |  | Printa ölhållare med kylklamp |
| 7:05 | målruta |  | Printa ölhållare med kylklamp |
| 7:05 | händelse | printStart | sak=olhallare |
| 7:05 | händelse | malKlart | id=rolf0-printa del=Dag 2 – Tippen bredvid nasta=rolf0-ge |
| 7:05 | väntar | du | Ge Rolf ölhållare med kylklamp. |
| 7:05 | MÅL |  | Ge Rolf ölhållare med kylklamp |
| 7:05 | kvittens-bock |  | ✓ Läs brevet i Rolfs postlåda |
| 7:05 | klar | du | Kvarnen står och väntar för att hållaren är full. Om den rymde fler rullar kunde den mala hela tiden. |
| 7:06 | toast | fel | Ingen ström – trampa cykeln |
| 7:07 | struken | du | Printa ölhållare med kylklamp. |
| 7:07 | struken | värld:TUUT TUUT! | TUUT TUUT! |
| 7:07 | sak | rolf | Såg att du printar grejer. Kan du göra en sån hä? Kall öl ä viktigt. /Rolf​ |
| 7:07 | lapp | Brev från Rolf | Såg att du printar grejer. Kan du göra en sån hä? Kall öl ä viktigt. /Rolf​ |
| 7:07 | röst | rolf | Såg att du printar grejer. Kan du göra en sån hä? Kall öl ä viktigt. /Rolf​ · STORY |
| 7:09 | målruta |  | Ge Rolf ölhållare med kylklamp |
| 7:09 | toast | guld | ✅ |
| 7:09 | händelse | printKlar | sak=olhallare n=1 |
| 7:14 | klar | rolf | Såg att du printar grejer. Kan du göra en sån hä? Kall öl ä viktigt. /Rolf​ |
| 7:14 | händelse | brevLast | id=rolf:0 |
| 7:16 | sak | du | Ge Rolf ölhållare med kylklamp. |
| 7:16 | pil |  | Ge Rolf ölhållare med kylklamp |
| 7:16 | röst | du | Ge Rolf ölhållare med kylklamp. · MÅL |
| 7:18 | klar | du | Ge Rolf ölhållare med kylklamp. |
| 7:20 | sak |  | (läget ändras) |
| 7:20 | klar |  | (läget ändras) |
| 7:41 | sak | du | Flaggan är uppe. Rolf har lämnat något. |
| 7:41 | notis | tanke | 💭 Flaggan är uppe. Rolf har lämnat något. |
| 7:41 | röst | du | Flaggan är uppe. Rolf har lämnat något. · STORY |
| 7:42 | händelse | tagitUrPrint | sak=olhallare n=1 |
| 7:44 | klar | du | Flaggan är uppe. Rolf har lämnat något. |
| 7:48 | händelse | lagtIPostlada | sak=olhallare rolf=0 jobb=false |
| 7:48 | struken | kedja | rolf0 |
| 7:48 | paket |  | tanke |
| 7:48 | tanke | du | Flaggan uppe. Nu får Rolf hämta den. |
| 7:48 | väntar | du | Flaggan uppe. Nu får Rolf hämta den. |
| 7:48 | sak | du | Flaggan uppe. Nu får Rolf hämta den. |
| 7:48 | notis | tanke | 💭 Flaggan uppe. Nu får Rolf hämta den. |
| 7:48 | röst | du | Flaggan uppe. Nu får Rolf hämta den. · REAKTION |
| 7:48 | händelse | malKlart | id=rolf0-ge del=Dag 2 – Tippen bredvid nasta=vindsnurra |
| 7:48 | väntar | du | En vindsnurra på skjulets tak. Då blir det ström när det blåser. |
| 7:48 | MÅL |  | Trampa, printa och sälj |
| 7:51 | klar | du | Flaggan uppe. Nu får Rolf hämta den. |
| 7:52 | målruta |  | Trampa, printa och sälj |
| 7:52 | kvittens-bock |  | ✓ Ge Rolf ölhållare med kylklamp |
| 7:54 | sak | du | En vindsnurra på skjulets tak. Då blir det ström när det blåser. |
| 7:54 | pil |  | Trampa, printa och sälj |
| 7:54 | notis | tanke | 💭 En vindsnurra på skjulets tak. Då blir det ström när det blåser. |
| 7:54 | röst | du | En vindsnurra på skjulets tak. Då blir det ström när det blåser. · MÅL |
| 7:56 | händelse | printStart | sak=kruka |
| 7:58 | upplåst | skrivare | trim_skrivare |
| 7:58 | brott | UPPLÅST | trim_skrivare (skrivare 75 av 75) |
| 7:58 | händelse | upplast | id=trim_skrivare flask=skrivare |
| 7:58 | paket |  | sms |
| 7:58 | väntar | ali | Ali här. Skrivartrim. Jag skruvade på min egen skrivare i natt. Den går fortare nu. Nästan för fort. |
| 7:59 | toast | guld | ✅ |
| 7:59 | händelse | printKlar | sak=kruka n=14 |
| 7:59 | klar | du | En vindsnurra på skjulets tak. Då blir det ström när det blåser. |
| 7:59 | händelse | tagitUrPrint | sak=kruka n=1 |
| 8:06 | röst | ali | Rolf gav mig en kanna. Som min farmors. Jag ritade en sak åt honom. Säg inget, han gråter lätt. · STORY |
| 8:06 | butiksbubbla | ali | Rolf gav mig en kanna. Som min farmors. Jag ritade en sak åt honom. Säg inget, han gråter lätt. |
| 8:07 | aliSalt | ali | 105 |
| 8:17 | händelse | printStart | sak=kruka |
| 8:17 | toast | fel | Ingen ström – trampa cykeln |
| 8:20 | sak |  | (läget ändras) |
| 8:20 | brev | rolf | rolf:0 |
| 8:20 | klar |  | (läget ändras) |
| 8:20 | toast | guld | ✅ |
| 8:20 | händelse | printKlar | sak=kruka n=15 |
| 8:20 | händelse | tagitUrPrint | sak=kruka n=1 |
| 8:24 | sak | ali | Ali här. Skrivartrim. Jag skruvade på min egen skrivare i natt. Den går fortare nu. Nästan för fort. |
| 8:24 | sms | ali | Ali här. Skrivartrim. Jag skruvade på min egen skrivare i natt. Den går fortare nu. Nästan för fort. |
| 8:24 | sms-bubbla | ali | Ali här. Skrivartrim. Jag skruvade på min egen skrivare i natt. Den går fortare nu. Nästan för fort. |
| 8:24 | röst | ali | Ali här. Skrivartrim. Jag skruvade på min egen skrivare i natt. Den går fortare nu. Nästan för fort. · STORY |
| 8:28 | aliSalt | ali | 105 |
| 8:33 | klar | ali | Ali här. Skrivartrim. Jag skruvade på min egen skrivare i natt. Den går fortare nu. Nästan för fort. |
| 8:42 | händelse | printStart | sak=kruka |
| 8:46 | toast | guld | ✅ |
| 8:46 | händelse | printKlar | sak=kruka n=16 |
| 8:46 | händelse | tagitUrPrint | sak=kruka n=1 |
| 8:47 | paket |  | tanke |
| 8:47 | tanke | du | Jaha, Rolf har hämtat ölhållare med kylklamp. |
| 8:47 | väntar | du | Jaha, Rolf har hämtat ölhållare med kylklamp. |
| 8:47 | sak | du | Jaha, Rolf har hämtat ölhållare med kylklamp. |
| 8:47 | notis | tanke | 💭 Jaha, Rolf har hämtat ölhållare med kylklamp. |
| 8:47 | röst | du | Jaha, Rolf har hämtat ölhållare med kylklamp. · REAKTION |
| 8:51 | klar | du | Jaha, Rolf har hämtat ölhållare med kylklamp. |
| 8:54 | aliSalt | ali | 105 |
| 9:02 | scenInfo | gard | Lite skräp ramlade av flaket på gården |
| 9:03 | händelse | printStart | sak=kruka |
| 9:05 | toast | guld | ✅ |
| 9:05 | händelse | printKlar | sak=kruka n=17 |
| 9:06 | händelse | tagitUrPrint | sak=kruka n=1 |
| 9:09 | väntar | värld:TUUT! Tjena! | TUUT! Tjena! |
| 9:09 | sak | värld:TUUT! Tjena! | TUUT! Tjena! |
| 9:09 | bubbla |  | TUUT! Tjena! |
| 9:12 | klar | värld:TUUT! Tjena! | TUUT! Tjena! |
| 9:13 | aliSalt | ali | 105 |
| 9:23 | händelse | printStart | sak=kruka |
| 9:25 | toast | fel | Ingen ström – trampa cykeln |
| 9:25 | upplåst | trampa | vindsnurra |
| 9:25 | brott | UPPLÅST | vindsnurra (trampa 33 av 10) |
| 9:25 | händelse | upplast | id=vindsnurra flask=trampa |
| 9:25 | paket |  | tanke → sms |
| 9:25 | tanke | du | Mina ben är slut. Det blåser hela tiden här ute. Tänk om vinden kunde trampa åt mig. |
| 9:25 | väntar | du | Mina ben är slut. Det blåser hela tiden här ute. Tänk om vinden kunde trampa åt mig. |
| 9:25 | väntar | ali | Ali här. Vindsnurra till cykeln. Vinden trampar åt dig. Den är lat, men den jobbar gratis. |
| 9:26 | toast | guld | ✅ |
| 9:26 | händelse | printKlar | sak=kruka n=18 |
| 9:27 | sak | du | Mina ben är slut. Det blåser hela tiden här ute. Tänk om vinden kunde trampa åt mig. |
| 9:27 | notis | tanke | 💭 Mina ben är slut. Det blåser hela tiden här ute. Tänk om vinden kunde trampa åt mig. |
| 9:27 | röst | du | Mina ben är slut. Det blåser hela tiden här ute. Tänk om vinden kunde trampa åt mig. · STORY |
| 9:27 | händelse | tagitUrPrint | sak=kruka n=1 |
| 9:34 | klar | du | Mina ben är slut. Det blåser hela tiden här ute. Tänk om vinden kunde trampa åt mig. |
| 9:35 | aliSalt | ali | 105 |
| 9:39 | toast | guld | 3D-modell köpt – printa vindsnurra till skjultaket på skrivaren |
| 9:39 | händelse | kopt | sak=vindsnurra |
| 9:39 | struken | ali | Ali här. Vindsnurra till cykeln. Vinden trampar åt dig. Den är lat, men den jobbar gratis. |
| 9:47 | händelse | printStart | sak=byggsats:vindsnurra |
| 9:51 | händelse | printKlar | sak=byggsats:vindsnurra n=1 |
| 9:51 | toast | guld | ✅ |
| 10:12 | struken | mamma | Har du frusit än? |
| 10:20 | väntar | info:guld | 🌬️ Vindsnurran ligger i handen – klicka på skjulet för att sätta den på taket |
| 10:20 | händelse | tagitUrPrint | sak=byggsats:vindsnurra n=1 |
| 10:20 | sak | info:guld | 🌬️ Vindsnurran ligger i handen – klicka på skjulet för att sätta den på taket |
| 10:20 | kvitto-visas | info:guld | 🌬️ Vindsnurran ligger i handen – klicka på skjulet för att sätta den på taket |
| 10:20 | toast | guld | 🌬️ Vindsnurran ligger i handen – klicka på skjulet för att sätta den på taket |
| 10:22 | klar | info:guld | 🌬️ Vindsnurran ligger i handen – klicka på skjulet för att sätta den på taket |
| 10:29 | händelse | placerat | sak=vindsnurra |
| 10:29 | kvittens | du | Den snurrar! Långsamt. Men den snurrar. |
| 10:29 | varför | du | Om det regnar i natt drunknar jag. Ett tak. |
| 10:29 | väntar | du | Den snurrar! Långsamt. Men den snurrar. |
| 10:29 | väntar | info:guld | 🌬️ Vindsnurran sitter på taket – den trampar cykeln åt dig när det blåser |
| 10:29 | monterat | du | byggsats:vindsnurra |
| 10:29 | händelse | monterat | sak=vindsnurra |
| 10:29 | sak | du | Den snurrar! Långsamt. Men den snurrar. |
| 10:29 | notis | tanke | 💭 Den snurrar! Långsamt. Men den snurrar. |
| 10:29 | röst | du | Den snurrar! Långsamt. Men den snurrar. · STORY |
| 10:29 | händelse | malKlart | id=vindsnurra del=Dag 2 – Tippen bredvid nasta=n1-bygg-dorr-skjulet |
| 10:29 | väntar | du | Det drar från dörrhålet. En dörr kan jag printa. |
| 10:29 | MÅL |  | Bygg en dörr till skjulet |
| 10:32 | klar | du | Den snurrar! Långsamt. Men den snurrar. |
| 10:32 | sak | info:guld | 🌬️ Vindsnurran sitter på taket – den trampar cykeln åt dig när det blåser |
| 10:32 | kvitto-visas | info:guld | 🌬️ Vindsnurran sitter på taket – den trampar cykeln åt dig när det blåser |
| 10:32 | toast | guld | 🌬️ Vindsnurran sitter på taket – den trampar cykeln åt dig när det blåser |
| 10:32 | målruta |  | Bygg en dörr till skjulet |
| 10:34 | klar | info:guld | 🌬️ Vindsnurran sitter på taket – den trampar cykeln åt dig när det blåser |
| 10:36 | sak | du | Det drar från dörrhålet. En dörr kan jag printa. |
| 10:36 | pil |  | Bygg en dörr till skjulet |
| 10:36 | notis | tanke | 💭 Det drar från dörrhålet. En dörr kan jag printa. |
| 10:36 | röst | du | Det drar från dörrhålet. En dörr kan jag printa. · MÅL |
| 10:36 | nick |  | nick:29 |
| 10:40 | klar | du | Det drar från dörrhålet. En dörr kan jag printa. |
| 10:42 | skratt | du | falsk tuta |
| 10:48 | toast | guld | 3D-modell köpt – printa dörr på skrivaren |
| 10:48 | händelse | kopt | sak=dorr |
| 10:56 | händelse | printStart | sak=byggsats:dorr |
| 10:57 | scenInfo | gard | Lite skräp ramlade av flaket på gården |
| 11:00 | toast | bra | Del 1 av 2 klar |
| 11:00 | väntar | notis:Storebrors skrivare: Del 1 av 2 klar | Storebrors skrivare: Del 1 av 2 klar |
| 11:00 | sak | notis:Storebrors skrivare: Del 1 av 2 klar | Storebrors skrivare: Del 1 av 2 klar |
| 11:00 | notis | bra | Storebrors skrivare: Del 1 av 2 klar |
| 11:02 | klar | notis:Storebrors skrivare: Del 1 av 2 klar | Storebrors skrivare: Del 1 av 2 klar |
| 11:03 | händelse | printKlar | sak=byggsats:dorr n=1 |
| 11:03 | toast | guld | ✅ |
| 11:04 | händelse | tagitUrPrint | sak=byggsats:dorr n=1 |
| 11:04 | paket |  | sms |
| 11:04 | väntar | ali | Ali här. Jag har inte sovit. Inte på grund av AI:n. På grund av dig. Du bygger saker av sopor. Jag har en hel butik och bygger ingenting. Det ska ändras. Kanske. Troligen. |
| 11:09 | väntar | info:guld | Dörr på plats! Trivsel +8 · Ali betalar nu +0 % |
| 11:09 | sak | info:guld | Dörr på plats! Trivsel +8 · Ali betalar nu +0 % |
| 11:09 | kvitto-visas | info:guld | Dörr på plats! Trivsel +8 · Ali betalar nu +0 % |
| 11:09 | toast | guld | Dörr på plats! Trivsel +8 · Ali betalar nu +0 % |
| 11:09 | händelse | malKlart | id=n1-bygg-dorr-skjulet del=Dag 2 – Tippen bredvid nasta=sov2 |
| 11:09 | paket |  | lapp |
| 11:09 | väntar | du | Dag 2 är slut. Nu vet Ali att jag bor HÄR. Taket läcker. I morgon. |
| 11:09 | paket |  | sms |
| 11:09 | väntar | bror | Mamma ringde mig fyra gånger förresten. Snyggt jobbat 😂 |
| 11:09 | skratt | bror | Mamma ringde mig fyra gånger förresten. |
| 11:09 | väntar | du | Klart för idag – sov när du vill. |
| 11:09 | MÅL |  | Klart för idag – sov när du vill |
| 11:11 | klar | info:guld | Dörr på plats! Trivsel +8 · Ali betalar nu +0 % |
| 11:12 | målruta |  | Klart för idag – sov när du vill |
| 11:13 | kvittens-bock |  | ✓ Bygg en dörr till skjulet |
| 11:13 | sak | du | Klart för idag – sov när du vill. |
| 11:13 | pil |  | Klart för idag – sov när du vill |
| 11:13 | röst | du | Klart för idag – sov när du vill. · MÅL |
| 11:16 | klar | du | Klart för idag – sov när du vill. |
| 11:16 | väntar | notis:🌇 Klockan är 21. Ali slår igen luckan.  | 🌇 Klockan är 21. Ali slår igen luckan. Dagens jobb är klart – gå in i skjulet och sov i sängen. |
| 11:18 | sak | du | Dag 2 är slut. Nu vet Ali att jag bor HÄR. Taket läcker. I morgon. |
| 11:18 | lapp | 📔 Dagbok | Dag 2 är slut. Nu vet Ali att jag bor HÄR. Taket läcker. I morgon. |
| 11:18 | kvallsrad | du | Nu vet Ali att jag bor HÄR. Taket läcker. I morgon. |
| 11:18 | klar | du | Dag 2 är slut. Nu vet Ali att jag bor HÄR. Taket läcker. I morgon. |
| 11:23 | nattkort | du | 🌙 Dag 2 är slut. God natt. zzz… Nu vet Ali att jag bor HÄR. Taket läcker. I morgon. DAGENS PRINTAR Blomkruka × 17 Ölhållare med kylklamp × 1 Totalt 18 printar |

<details><summary>Botens handlingar dag 2</summary>

- 0:00 — dag 2 börjar — (265 kr)
- 0:08 popup: "FORTSÄTT" (265 kr)
- 0:19 tjänar pengar till väntar på flaskhalsen för kvarnmotor: 265/305 kr → printar blomkruka (105 kr) (265 kr)
- 0:23 gå till skrivaren (19 m) (265 kr)
- 0:24 printar Blomkruka (265 kr)
- 0:28 tar ut 1 st ur skrivaren (265 kr)
- 0:33 gå till Ali (26 m) (265 kr)
- 0:33 öppnar Alis butik – sälja (265 kr)
- 0:35 säljer hos Ali: +105 kr (370 kr)
- 0:47 tjänar pengar till väntar på flaskhalsen för kvarnmotor: 370/410 kr → printar blomkruka (105 kr) (370 kr)
- 0:53 gå till skrivaren (25 m) (370 kr)
- 0:54 printar Blomkruka (370 kr)
- 0:55 gå till cykeln (1 m) (370 kr)
- 0:59 tar ut 1 st ur skrivaren (370 kr)
- 1:04 gå till Ali (25 m) (370 kr)
- 1:04 öppnar Alis butik – sälja (370 kr)
- 1:06 säljer hos Ali: +105 kr (475 kr)
- 1:11 tjänar pengar till väntar på flaskhalsen för kvarnmotor: 475/515 kr → printar blomkruka (105 kr) (475 kr)
- 1:22 plockar 6 skräp på gården (bär max 6) (475 kr)
- 1:29 gå till kvarnen (34 m) (475 kr)
- 1:33 gå till skrivaren (1 m) (475 kr)
- 1:34 printar Blomkruka (475 kr)
- 1:38 tar ut 1 st ur skrivaren (475 kr)
- 1:44 gå till Ali (28 m) (475 kr)
- 1:44 öppnar Alis butik – sälja (475 kr)
- 1:45 säljer hos Ali: +105 kr (580 kr)
- 1:47 tjänar pengar till väntar på flaskhalsen för kvarnmotor: 580/620 kr → printar blomkruka (105 kr) (580 kr)
- 1:52 gå till skrivaren (25 m) (580 kr)
- 1:54 printar Blomkruka (580 kr)
- 1:55 gå till cykeln (1 m) (580 kr)
- 1:58 tar ut 1 st ur skrivaren (580 kr)
- 2:04 gå till Ali (25 m) (580 kr)
- 2:04 öppnar Alis butik – sälja (580 kr)
- 2:05 säljer hos Ali: +105 kr (685 kr)
- 2:12 tjänar pengar till väntar på flaskhalsen för kvarnmotor: 685/725 kr → printar blomkruka (105 kr) (685 kr)
- 2:26 plockar 6 skräp på gården (bär max 6) (685 kr)
- 2:34 gå till kvarnen (40 m) (685 kr)
- 2:38 gå till skrivaren (1 m) (685 kr)
- 2:40 printar Blomkruka (685 kr)
- 2:43 tar ut 1 st ur skrivaren (685 kr)
- 2:49 gå till Ali (28 m) (685 kr)
- 2:49 öppnar Alis butik – sälja (685 kr)
- 2:51 säljer hos Ali: +105 kr (790 kr)
- 2:53 tjänar pengar till väntar på flaskhalsen för kvarnmotor: 790/830 kr → printar blomkruka (105 kr) (790 kr)
- 2:58 gå till skrivaren (25 m) (790 kr)
- 3:00 printar Blomkruka (790 kr)
- 3:01 gå till cykeln (1 m) (790 kr)
- 3:04 tar ut 1 st ur skrivaren (790 kr)
- 3:10 gå till Ali (25 m) (790 kr)
- 3:10 öppnar Alis butik – sälja (790 kr)
- 3:11 säljer hos Ali: +105 kr (895 kr)
- 3:17 tjänar pengar till väntar på flaskhalsen för kvarnmotor: 895/935 kr → printar blomkruka (105 kr) (895 kr)
- 3:36 plockar 6 skräp på gården (bär max 6) (895 kr)
- 3:42 gå till kvarnen (28 m) (895 kr)
- 3:47 gå till skrivaren (2 m) (895 kr)
- 3:48 printar Blomkruka (895 kr)
- 3:52 tar ut 1 st ur skrivaren (895 kr)
- 3:58 gå till Ali (28 m) (895 kr)
- 3:58 öppnar Alis butik – sälja (895 kr)
- 4:00 säljer hos Ali: +3 kr (898 kr)
- 4:00 tjänar pengar till väntar på flaskhalsen för kvarnmotor: 898/935 kr → printar blomkruka (105 kr) (898 kr)
- 4:06 gå till skrivaren (25 m) (898 kr)
- 4:07 printar Blomkruka (898 kr)
- 4:08 gå till cykeln (1 m) (898 kr)
- 4:12 tar ut 1 st ur skrivaren (898 kr)
- 4:17 gå till Ali (25 m) (898 kr)
- 4:17 öppnar Alis butik – sälja (898 kr)
- 4:19 säljer hos Ali: +105 kr (1003 kr)
- 4:20 öppnar Alis butik – köpa kvarnmotor (1003 kr)
- 4:23 köper kvarnmotor för 50 kr (953 kr)
- 4:44 plockar 4 skräp på gården (bär max 6) (953 kr)
- 4:50 gå till kvarnen (27 m) (953 kr)
- 4:54 gå till skrivaren (2 m) (953 kr)
- 4:56 printar Kvarnmotor (953 kr)
- 4:59 tar ut 1 st ur skrivaren (953 kr)
- 5:03 gå till skruva fast kvarnmotorn (1 m) (953 kr)
- 5:16 gå till Rolfs sopsäck (16 m) (953 kr)
- 5:29 tar på korg (953 kr)
- 5:29 tjänar pengar till väntar på sopbilen (BO): 953/1013 kr → printar blomkruka (105 kr) (953 kr)
- 5:32 gå till skrivaren (12 m) (953 kr)
- 5:33 printar Blomkruka (953 kr)
- 5:35 gå till cykeln (1 m) (953 kr)
- 5:38 tar ut 1 st ur skrivaren (953 kr)
- 5:43 gå till Ali (25 m) (953 kr)
- 5:43 öppnar Alis butik – sälja (953 kr)
- 5:45 säljer hos Ali: +105 kr (1058 kr)
- 5:48 tjänar pengar till väntar på sopbilen (BO): 1058/1118 kr → printar blomkruka (105 kr) (1058 kr)
- 5:54 gå till skrivaren (25 m) (1058 kr)
- 5:55 printar Blomkruka (1058 kr)
- 5:59 tar ut 1 st ur skrivaren (1058 kr)
- 6:04 gå till Ali (25 m) (1058 kr)
- 6:04 öppnar Alis butik – sälja (1058 kr)
- 6:05 säljer hos Ali: +105 kr (1163 kr)
- 6:12 tjänar pengar till väntar på sopbilen (BO): 1163/1223 kr → printar blomkruka (105 kr) (1163 kr)
- 6:17 gå till skrivaren (25 m) (1163 kr)
- 6:19 printar Blomkruka (1163 kr)
- 6:20 gå till cykeln (1 m) (1163 kr)
- 6:24 tar ut 1 st ur skrivaren (1163 kr)
- 6:29 gå till Ali (25 m) (1163 kr)
- 6:29 öppnar Alis butik – sälja (1163 kr)
- 6:31 säljer hos Ali: +105 kr (1268 kr)
- 6:34 tjänar pengar till väntar på sopbilen (BO): 1268/1328 kr → printar blomkruka (105 kr) (1268 kr)
- 6:39 gå till skrivaren (25 m) (1268 kr)
- 6:41 printar Blomkruka (1268 kr)
- 6:45 tar ut 1 st ur skrivaren (1268 kr)
- 6:50 gå till Ali (25 m) (1268 kr)
- 6:50 öppnar Alis butik – sälja (1268 kr)
- 6:52 säljer hos Ali: +105 kr (1373 kr)
- 7:01 gå till Rolfs postlåda (31 m) (1373 kr)
- 7:03 gå till skrivaren (7 m) (1373 kr)
- 7:05 printar Ölhållare med kylklamp (1373 kr)
- 7:06 gå till cykeln (1 m) (1373 kr)
- 7:36 plockar 9 skräp på gården (bär max 10) (1373 kr)
- 7:40 gå till kvarnen (19 m) (1373 kr)
- 7:42 gå till skrivaren (2 m) (1373 kr)
- 7:42 tar ut 1 st ur skrivaren (1373 kr)
- 7:46 valj olhallare: true, vald olhallare, post {"l":null,"tr":null,"tm":[]}, nummer false (1373 kr)
- 7:48 gå till Rolfs postlåda (7 m) (1373 kr)
- 7:53 tjänar pengar till väntar på flaskhalsen för vindsnurra: 1373/1413 kr → printar blomkruka (105 kr) (1373 kr)
- 7:55 gå till skrivaren (6 m) (1373 kr)
- 7:56 printar Blomkruka (1373 kr)
- 8:00 tar ut 1 st ur skrivaren (1373 kr)
- 8:06 gå till Ali (28 m) (1373 kr)
- 8:06 öppnar Alis butik – sälja (1373 kr)
- 8:08 säljer hos Ali: +105 kr (1478 kr)
- 8:10 tjänar pengar till väntar på flaskhalsen för vindsnurra: 1478/1518 kr → printar blomkruka (105 kr) (1478 kr)
- 8:15 gå till skrivaren (25 m) (1478 kr)
- 8:17 printar Blomkruka (1478 kr)
- 8:17 gå till cykeln (1 m) (1478 kr)
- 8:21 tar ut 1 st ur skrivaren (1478 kr)
- 8:26 gå till Ali (25 m) (1478 kr)
- 8:26 öppnar Alis butik – sälja (1478 kr)
- 8:28 säljer hos Ali: +105 kr (1583 kr)
- 8:35 tjänar pengar till väntar på flaskhalsen för vindsnurra: 1583/1623 kr → printar blomkruka (105 kr) (1583 kr)
- 8:40 gå till skrivaren (25 m) (1583 kr)
- 8:42 printar Blomkruka (1583 kr)
- 8:45 gå till cykeln (1 m) (1583 kr)
- 8:47 tar ut 1 st ur skrivaren (1583 kr)
- 8:52 gå till Ali (25 m) (1583 kr)
- 8:52 öppnar Alis butik – sälja (1583 kr)
- 8:54 säljer hos Ali: +105 kr (1688 kr)
- 8:56 tjänar pengar till väntar på flaskhalsen för vindsnurra: 1688/1728 kr → printar blomkruka (105 kr) (1688 kr)
- 9:01 gå till skrivaren (25 m) (1688 kr)
- 9:03 printar Blomkruka (1688 kr)
- 9:07 tar ut 1 st ur skrivaren (1688 kr)
- 9:12 gå till Ali (25 m) (1688 kr)
- 9:12 öppnar Alis butik – sälja (1688 kr)
- 9:14 säljer hos Ali: +105 kr (1793 kr)
- 9:16 tjänar pengar till väntar på flaskhalsen för vindsnurra: 1793/1833 kr → printar blomkruka (105 kr) (1793 kr)
- 9:21 gå till skrivaren (25 m) (1793 kr)
- 9:23 printar Blomkruka (1793 kr)
- 9:25 gå till cykeln (1 m) (1793 kr)
- 9:28 tar ut 1 st ur skrivaren (1793 kr)
- 9:33 gå till Ali (25 m) (1793 kr)
- 9:33 öppnar Alis butik – sälja (1793 kr)
- 9:35 säljer hos Ali: +105 kr (1898 kr)
- 9:37 öppnar Alis butik – köpa vindsnurra till skjultaket (1898 kr)
- 9:40 köper vindsnurra för 133 kr (1765 kr)
- 9:46 gå till skrivaren (25 m) (1765 kr)
- 9:47 printar Vindsnurra till skjultaket (1765 kr)
- 10:15 plockar 8 skräp på gården (bär max 10) (1765 kr)
- 10:19 gå till kvarnen (22 m) (1765 kr)
- 10:20 gå till skrivaren (1 m) (1765 kr)
- 10:20 tar ut 1 st ur skrivaren (1765 kr)
- 10:29 gå till sätt vindsnurran på taket (22 m) (1765 kr)
- 10:46 gå till Ali (20 m) (1765 kr)
- 10:46 öppnar Alis butik – köpa dörr (1765 kr)
- 10:49 köper dorr för 120 kr (1645 kr)
- 10:55 gå till skrivaren (25 m) (1645 kr)
- 10:56 printar Dörr (2 delar) (1645 kr)
- 11:05 tar ut 1 st ur skrivaren (1645 kr)
- 11:09 gå till skjulet (19 m) (1645 kr)
- 11:20 gå till sängen (1 m) (1645 kr)

</details>

## Dag 3

| Tid | Källa | Vem | Text |
|---|---|---|---|
| 11:23 | vara | ali | ingen |
| 11:23 | händelse | malKlart | id=sov2 del=Dag 2 – Tippen bredvid nasta=rolf1-brev |
| 11:23 | vara | ali | kruka |
| 11:23 | MÅL |  | Vänta på sopbilen. Den lämnar något. |
| 0:01 | händelse | dagenBorjar | dag=3 |
| 0:01 | meddelande | du | Dag 3. 19 dagar till jul. Utan tak regnar det in i natt. |
| 0:01 | dagbokkort | du | En skrivare till och taket · Dag 3. 19 dagar till jul. Utan tak regnar det in i natt. |
| 0:01 | röst | du | Dag 3. 19 dagar till jul. En skrivare till och taket. Utan tak regnar det in i natt. · STORY |
| 0:09 | händelse | morgonkortStangt | dag=3 |
| 0:09 | paket |  | sms |
| 0:09 | väntar | ali | Ali här. Satt uppe med AI:n hela natten. Ritningen till Plåttak är klar. Kom innan nio, då stänger jag. |
| 0:09 | målruta |  | Vänta på sopbilen. Den lämnar något. |
| 0:09 | väntar | notis:Blomkruka · +50 % | Blomkruka · +50 % |
| 0:14 | sak | du | (nytt mål i rutan) |
| 0:14 | pil |  | Vänta på sopbilen. Den lämnar något. |
| 0:14 | klar | du | (nytt mål i rutan) |
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
| 0:33 | scenInfo | du | Kameran sveper över tippen |
| 0:35 | klar | rolf | Den funkar! Hä. Ta så mycke skräp du vill. /Rolf​ |
| 0:35 | händelse | brevLast | id=rolftack:0 |
| 0:37 | tanke | du | …Det här räcker i hundra år. |
| 0:37 | väntar | du | …Det här räcker i hundra år. |
| 0:37 | sak | du | Rolfs tipp. Hela högen. |
| 0:37 | kvitto-visas | du | Rolfs tipp. Hela högen. |
| 0:37 | notis | tanke | 💭 Rolfs tipp. Hela högen. |
| 0:37 | röst | du | Rolfs tipp. Hela högen. · REAKTION |
| 0:38 | skratt | du | falsk tuta |
| 0:39 | klar | du | Rolfs tipp. Hela högen. |
| 0:43 | händelse | printStart | sak=kruka |
| 0:48 | toast | guld | ✅ |
| 0:48 | händelse | printKlar | sak=kruka n=19 |
| 0:49 | sak | du | …Det här räcker i hundra år. |
| 0:49 | notis | tanke | 💭 …Det här räcker i hundra år. |
| 0:49 | röst | du | …Det här räcker i hundra år. · STORY |
| 0:51 | klar | du | …Det här räcker i hundra år. |
| 1:18 | händelse | tagitUrPrint | sak=kruka n=1 |
| 1:25 | röst | ali | Salam. Ja, ja, jag har nya grejer. Som vanligt. Varje dag. · STORY |
| 1:25 | butiksbubbla | ali | Salam. Ja, ja, jag har nya grejer. Som vanligt. Varje dag. |
| 1:26 | aliSalt | ali | 105 |
| 1:37 | händelse | printStart | sak=kruka |
| 1:41 | väntar | värld:TUUT TUUT! | TUUT TUUT! |
| 1:41 | sak | värld:TUUT TUUT! | TUUT TUUT! |
| 1:41 | bubbla |  | TUUT TUUT! |
| 1:42 | toast | guld | ✅ |
| 1:42 | händelse | printKlar | sak=kruka n=20 |
| 1:42 | händelse | tagitUrPrint | sak=kruka n=1 |
| 1:44 | klar | värld:TUUT TUUT! | TUUT TUUT! |
| 1:49 | väntar | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått en DÖRR. Och vindsnurra till skjultaket. Mer säger jag inte. Gunnar vet. |
| 1:49 | radio | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått en DÖRR. Och vindsnurra till skjultaket. Mer säger jag inte. Gunnar vet. |
| 1:49 | skratt | du | Radio-Kjelle |
| 1:49 | aliSalt | ali | 105 |
| 1:50 | sak | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått en DÖRR. Och vindsnurra till skjultaket. Mer säger jag inte. Gunnar vet. |
| 1:50 | notis |  | 📻 Radio Tippen: Radio Tippen, Kjelle här. Skjulet vid tippen har fått en DÖRR. Och vindsnurra till skjultaket. Mer säger jag inte. Gunnar vet. |
| 1:50 | röst | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått en DÖRR. Och vindsnurra till skjultaket. Mer säger jag inte. Gunnar vet. · REAKTION |
| 2:01 | klar | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått en DÖRR. Och vindsnurra till skjultaket. Mer säger jag inte. Gunnar vet. |
| 2:10 | händelse | printStart | sak=kruka |
| 2:15 | toast | guld | ✅ |
| 2:15 | händelse | printKlar | sak=kruka n=21 |
| 2:15 | händelse | tagitUrPrint | sak=kruka n=1 |
| 2:23 | aliSalt | ali | 105 |
| 2:25 | väntar | bror | Pappa har tvättat bilen tre gånger den här veckan. Jag sa att du bor på tippen. Han frågade vilken modell sopbilen var. |
| 2:33 | händelse | printStart | sak=kruka |
| 2:37 | paket |  | tanke |
| 2:37 | tanke | du | En toffla. Bara en. |
| 2:37 | väntar | du | En toffla. Bara en. |
| 2:37 | skratt | du | kvarnen spottar |
| 2:37 | sak | du | En toffla. Bara en. |
| 2:37 | notis | tanke | 💭 En toffla. Bara en. |
| 2:37 | röst | du | En toffla. Bara en. · REAKTION |
| 2:38 | toast | guld | ✅ |
| 2:38 | händelse | printKlar | sak=kruka n=22 |
| 2:38 | händelse | tagitUrPrint | sak=kruka n=1 |
| 2:39 | klar | du | En toffla. Bara en. |
| 2:46 | aliSalt | ali | 105 |
| 2:55 | skratt | du | falsk tuta |
| 2:56 | händelse | printStart | sak=kruka |
| 3:02 | toast | guld | ✅ |
| 3:02 | händelse | printKlar | sak=kruka n=23 |
| 3:02 | händelse | tagitUrPrint | sak=kruka n=1 |
| 3:04 | paket |  | ge |
| 3:04 | väntar |  | (läget ändras) |
| 3:05 | sak |  | (läget ändras) |
| 3:05 | brev | rolf | rolf:1 |
| 3:05 | klar |  | (läget ändras) |
| 3:07 | väntar | bud | (tips) |
| 3:07 | sak | bud | (tips) |
| 3:09 | klar | bud | (tips) |
| 3:09 | aliSalt | ali | 105 |
| 3:11 | meddelande | mamma | Har du borstat tänderna idag? Ljug inte. Jag hör om du ljuger. Även på sms. |
| 3:12 | röst | mamma | Har du borstat tänderna idag? Ljug inte. Jag hör om du ljuger. Även på sms. · STORY |
| 3:20 | paket |  | sms |
| 3:20 | väntar | mamma | Bra. Jag tror dig. Nästan. |
| 3:29 | händelse | brevLast | id=m_tandborste |
| 3:30 | sak | mamma | Bra. Jag tror dig. Nästan. |
| 3:30 | sms | mamma | Bra. Jag tror dig. Nästan. |
| 3:30 | sms-bubbla | mamma | Bra. Jag tror dig. Nästan. |
| 3:30 | röst | mamma | Bra. Jag tror dig. Nästan. · STORY |
| 3:33 | klar | mamma | Bra. Jag tror dig. Nästan. |
| 3:35 | skratt | du | falsk tuta |
| 3:42 | väntar | rolf | Nämen. Kajsa knuffa ner min flasköppnare i tippen. Kan du göra en ny, mä magnet? /Rolf​ |
| 3:42 | paket |  | ge |
| 3:42 | väntar |  | (läget ändras) |
| 3:42 | sak | rolf | Nämen. Kajsa knuffa ner min flasköppnare i tippen. Kan du göra en ny, mä magnet? /Rolf​ |
| 3:42 | lapp | Brev från Rolf | Nämen. Kajsa knuffa ner min flasköppnare i tippen. Kan du göra en ny, mä magnet? /Rolf​ |
| 3:42 | röst | rolf | Nämen. Kajsa knuffa ner min flasköppnare i tippen. Kan du göra en ny, mä magnet? /Rolf​ · STORY |
| 3:42 | händelse | malKlart | id=rolf1-brev del=Dag 3 – En skrivare till och taket nasta=n2-hamta-skrap |
| 3:42 | väntar | du | Nyckeln till tippen. Där ligger skräpet i högar. |
| 3:42 | MÅL |  | Hämta 5 skräp på soptippen |
| 3:46 | målruta |  | Hämta 5 skräp på soptippen |
| 3:47 | händelse | malKlart | id=n2-hamta-skrap del=Dag 3 – En skrivare till och taket nasta=rolf1-printa |
| 3:47 | struken | kedja | tippen |
| 3:47 | väntar | du | Printa flasköppnare med magnet. |
| 3:47 | MÅL |  | Printa flasköppnare med magnet |
| 3:49 | klar | rolf | Nämen. Kajsa knuffa ner min flasköppnare i tippen. Kan du göra en ny, mä magnet? /Rolf​ |
| 3:49 | händelse | brevLast | id=rolf:1 |
| 3:50 | målruta |  | Printa flasköppnare med magnet |
| 3:51 | kvittens-bock |  | ✓ Hämta 5 skräp på soptippen |
| 3:51 | struken | du | Nyckeln till tippen. Där ligger skräpet i högar. |
| 3:51 | sak |  | (läget ändras) |
| 3:51 | tanke | du | Fastpressad. Den sitter som i betong. |
| 3:51 | väntar | du | Fastpressad. Den sitter som i betong. |
| 3:51 | tanke | du | En hel kanot. Kvarnen skulle äta upp sig själv. |
| 3:51 | struken | du | Fastpressad. Den sitter som i betong. |
| 3:51 | väntar | du | En hel kanot. Kvarnen skulle äta upp sig själv. |
| 3:51 | klar |  | (läget ändras) |
| 3:51 | sak | du | Printa flasköppnare med magnet. |
| 3:51 | pil |  | Printa flasköppnare med magnet |
| 3:51 | röst | du | Printa flasköppnare med magnet. · MÅL |
| 3:52 | nick |  | nick:33 |
| 3:54 | klar | du | Printa flasköppnare med magnet. |
| 3:56 | sak | du | En hel kanot. Kvarnen skulle äta upp sig själv. |
| 3:56 | notis | tanke | 💭 En hel kanot. Kvarnen skulle äta upp sig själv. |
| 3:56 | röst | du | En hel kanot. Kvarnen skulle äta upp sig själv. · REAKTION |
| 4:00 | klar | du | En hel kanot. Kvarnen skulle äta upp sig själv. |
| 4:04 | händelse | printStart | sak=flaskoppnare |
| 4:04 | händelse | malKlart | id=rolf1-printa del=Dag 3 – En skrivare till och taket nasta=rolf1-ge |
| 4:04 | väntar | du | Ge Rolf flasköppnare med magnet. |
| 4:04 | målruta |  | Ge Rolf flasköppnare med magnet |
| 4:05 | MÅL |  | Ge Rolf flasköppnare med magnet |
| 4:05 | sak | du | Ge Rolf flasköppnare med magnet. |
| 4:05 | pil |  | Ge Rolf flasköppnare med magnet |
| 4:05 | röst | du | Ge Rolf flasköppnare med magnet. · MÅL |
| 4:07 | klar | du | Ge Rolf flasköppnare med magnet. |
| 4:08 | toast | guld | ✅ |
| 4:08 | händelse | printKlar | sak=flaskoppnare n=1 |
| 4:08 | kvittens-bock |  | ✓ Printa flasköppnare med magnet |
| 4:09 | händelse | tagitUrPrint | sak=flaskoppnare n=1 |
| 4:11 | händelse | lagtIPostlada | sak=flaskoppnare rolf=1 jobb=false |
| 4:11 | struken | kedja | rolf1 |
| 4:11 | händelse | malKlart | id=rolf1-ge del=Dag 3 – En skrivare till och taket nasta=kopBatteri |
| 4:11 | väntar | du | Ali har ett gammalt bilbatteri. Då sparar jag strömmen. |
| 4:11 | målruta |  | Printa och sälj |
| 4:11 | MÅL |  | Printa och sälj |
| 4:11 | sak | du | Ali har ett gammalt bilbatteri. Då sparar jag strömmen. |
| 4:11 | pil |  | Printa och sälj |
| 4:11 | notis | tanke | 💭 Ali har ett gammalt bilbatteri. Då sparar jag strömmen. |
| 4:11 | röst | du | Ali har ett gammalt bilbatteri. Då sparar jag strömmen. · MÅL |
| 4:15 | kvittens-bock |  | ✓ Ge Rolf flasköppnare med magnet |
| 4:16 | klar | du | Ali har ett gammalt bilbatteri. Då sparar jag strömmen. |
| 4:19 | väntar | rolf | Morgonbulle på kontoret me polarna. Bengt har ny keps. Vi pratade om den i en timme. Den e grön. /R |
| 4:21 | händelse | printStart | sak=kruka |
| 4:27 | toast | guld | ✅ |
| 4:27 | händelse | printKlar | sak=kruka n=24 |
| 4:27 | händelse | tagitUrPrint | sak=kruka n=1 |
| 4:34 | aliSalt | ali | 105 |
| 4:43 | händelse | printStart | sak=kruka |
| 4:48 | toast | guld | ✅ |
| 4:48 | händelse | printKlar | sak=kruka n=25 |
| 4:48 | händelse | tagitUrPrint | sak=kruka n=1 |
| 4:55 | aliSalt | ali | 105 |
| 4:55 | röst | ali | Dina krukor säljer. Tanterna i kvarteret älskar dem. · STORY |
| 4:55 | butiksbubbla | ali | Dina krukor säljer. Tanterna i kvarteret älskar dem. |
| 5:05 | händelse | printStart | sak=kruka |
| 5:10 | toast | guld | ✅ |
| 5:10 | händelse | printKlar | sak=kruka n=26 |
| 5:10 | händelse | tagitUrPrint | sak=kruka n=1 |
| 5:18 | aliSalt | ali | 105 |
| 5:25 | paket |  | tanke |
| 5:25 | tanke | du | Jaha, Rolf har hämtat flasköppnare med magnet. |
| 5:25 | väntar | du | Jaha, Rolf har hämtat flasköppnare med magnet. |
| 5:25 | sak | du | Jaha, Rolf har hämtat flasköppnare med magnet. |
| 5:25 | notis | tanke | 💭 Jaha, Rolf har hämtat flasköppnare med magnet. |
| 5:25 | röst | du | Jaha, Rolf har hämtat flasköppnare med magnet. · REAKTION |
| 5:27 | händelse | printStart | sak=kruka |
| 5:29 | klar | du | Jaha, Rolf har hämtat flasköppnare med magnet. |
| 5:32 | toast | guld | ✅ |
| 5:32 | händelse | printKlar | sak=kruka n=27 |
| 5:32 | händelse | tagitUrPrint | sak=kruka n=1 |
| 5:40 | aliSalt | ali | 105 |
| 5:47 | väntar | värld:TUUT! Tjena! | TUUT! Tjena! |
| 5:47 | sak | värld:TUUT! Tjena! | TUUT! Tjena! |
| 5:47 | bubbla |  | TUUT! Tjena! |
| 5:49 | händelse | printStart | sak=kruka |
| 5:50 | klar | värld:TUUT! Tjena! | TUUT! Tjena! |
| 5:54 | toast | guld | ✅ |
| 5:54 | händelse | printKlar | sak=kruka n=28 |
| 5:54 | händelse | tagitUrPrint | sak=kruka n=1 |
| 6:02 | aliSalt | ali | 105 |
| 6:14 | struken | ali | Ali här. Satt uppe med AI:n hela natten. Ritningen till Plåttak är klar. Kom innan nio, då stänger jag. |
| 6:27 | händelse | printStart | sak=kruka |
| 6:33 | toast | guld | ✅ |
| 6:33 | händelse | printKlar | sak=kruka n=29 |
| 6:33 | händelse | tagitUrPrint | sak=kruka n=1 |
| 6:41 | aliSalt | ali | 105 |
| 6:50 | händelse | printStart | sak=kruka |
| 6:55 | toast | guld | ✅ |
| 6:55 | händelse | printKlar | sak=kruka n=30 |
| 6:55 | händelse | tagitUrPrint | sak=kruka n=1 |
| 7:03 | aliSalt | ali | 105 |
| 7:12 | händelse | printStart | sak=kruka |
| 7:17 | toast | guld | ✅ |
| 7:17 | händelse | printKlar | sak=kruka n=31 |
| 7:18 | händelse | tagitUrPrint | sak=kruka n=1 |
| 7:20 | skratt | du | falsk tuta |
| 7:25 | aliSalt | ali | 105 |
| 7:31 | upplåst | strom | cykelbatteri |
| 7:31 | brott | RESERV | cykelbatteri (strom 37 av 15) |
| 7:31 | händelse | upplast | id=cykelbatteri flask=strom |
| 7:31 | paket |  | sms |
| 7:31 | väntar | ali | Ali här. Bilbatteriet ur min gamla Volvo står i lagret. Det sparar mer ström än powerbanken. |
| 7:31 | sak | ali | Ali här. Bilbatteriet ur min gamla Volvo står i lagret. Det sparar mer ström än powerbanken. |
| 7:31 | sms | ali | Ali här. Bilbatteriet ur min gamla Volvo står i lagret. Det sparar mer ström än powerbanken. |
| 7:31 | sms-bubbla | ali | Ali här. Bilbatteriet ur min gamla Volvo står i lagret. Det sparar mer ström än powerbanken. |
| 7:31 | röst | ali | Ali här. Bilbatteriet ur min gamla Volvo står i lagret. Det sparar mer ström än powerbanken. · STORY |
| 7:34 | händelse | printStart | sak=kruka |
| 7:39 | klar | ali | Ali här. Bilbatteriet ur min gamla Volvo står i lagret. Det sparar mer ström än powerbanken. |
| 7:40 | toast | guld | ✅ |
| 7:40 | händelse | printKlar | sak=kruka n=32 |
| 7:40 | händelse | tagitUrPrint | sak=kruka n=1 |
| 7:42 | väntar | värld:TUUT TUUT! | TUUT TUUT! |
| 7:47 | aliSalt | ali | 105 |
| 7:48 | sak | värld:TUUT TUUT! | TUUT TUUT! |
| 7:48 | bubbla |  | TUUT TUUT! |
| 7:51 | klar | värld:TUUT TUUT! | TUUT TUUT! |
| 7:55 | toast | guld | 🔋 Bilbatteriet ligger i handen – klicka på cykeln för att koppla in det |
| 7:55 | händelse | kopt | sak=cykelbatteri |
| 7:55 | röst | ali | Ali här. Batteriet ur min gamla Volvo. Bilen dog 2016. Batteriet vägrade. · STORY |
| 7:55 | butiksbubbla | ali | Ali här. Batteriet ur min gamla Volvo. Bilen dog 2016. Batteriet vägrade. |
| 8:03 | struken | kedja | dag2 |
| 8:03 | väntar | info:guld | 🔋 Bilbatteriet är inkopplat – skrivaren printar klart även när du slutar trampa |
| 8:03 | monterat | du | byggsats:cykelbatteri |
| 8:03 | händelse | monterat | sak=cykelbatteri |
| 8:03 | sak | info:guld | 🔋 Bilbatteriet är inkopplat – skrivaren printar klart även när du slutar trampa |
| 8:03 | kvitto-visas | info:guld | 🔋 Bilbatteriet är inkopplat – skrivaren printar klart även när du slutar trampa |
| 8:03 | toast | guld | 🔋 Bilbatteriet är inkopplat – skrivaren printar klart även när du slutar trampa |
| 8:03 | händelse | malKlart | id=kopBatteri del=Dag 3 – En skrivare till och taket nasta=ryggkorg |
| 8:03 | väntar | du | Jag springer för mycket. Med en ryggkorg bär jag tio saker. |
| 8:03 | MÅL |  | Plocka skräp och mal det |
| 8:03 | upplåst | bara | ryggkorg |
| 8:03 | brott | UPPLÅST | ryggkorg (bara 8 av 6) |
| 8:03 | händelse | upplast | id=ryggkorg flask=bara |
| 8:03 | paket |  | tanke → sms |
| 8:03 | tanke | du | Säcken är full igen. Jag behöver något att bära mer i. |
| 8:03 | väntar | du | Säcken är full igen. Jag behöver något att bära mer i. |
| 8:03 | väntar | ali | Ali här. En ryggkorg. AI:n ritade den efter en bild på min mormor. Den rymmer tio. |
| 8:05 | klar | info:guld | 🔋 Bilbatteriet är inkopplat – skrivaren printar klart även när du slutar trampa |
| 8:06 | målruta |  | Bygg ryggkorgen – bär 10 skräp |
| 8:07 | kvittens-bock |  | ✓ Köp Alis gamla bilbatteri |
| 8:07 | sak | du | Jag springer för mycket. Med en ryggkorg bär jag tio saker. |
| 8:07 | pil |  | Bygg ryggkorgen – bär 10 skräp |
| 8:07 | notis | tanke | 💭 Jag springer för mycket. Med en ryggkorg bär jag tio saker. |
| 8:07 | röst | du | Jag springer för mycket. Med en ryggkorg bär jag tio saker. · MÅL |
| 8:07 | nick |  | nick:36 |
| 8:12 | klar | du | Jag springer för mycket. Med en ryggkorg bär jag tio saker. |
| 8:14 | sak | du | Säcken är full igen. Jag behöver något att bära mer i. |
| 8:14 | notis | tanke | 💭 Säcken är full igen. Jag behöver något att bära mer i. |
| 8:14 | röst | du | Säcken är full igen. Jag behöver något att bära mer i. · STORY |
| 8:18 | klar | du | Säcken är full igen. Jag behöver något att bära mer i. |
| 8:23 | toast | guld | 3D-modell köpt – printa ryggkorg på skrivaren |
| 8:23 | händelse | kopt | sak=ryggkorg |
| 8:23 | struken | ali | Ali här. En ryggkorg. AI:n ritade den efter en bild på min mormor. Den rymmer tio. |
| 8:25 | struken | bror | Pappa har tvättat bilen tre gånger den här veckan. Jag sa att du bor på tippen. Han frågade vilken modell sopbilen var. |
| 8:32 | händelse | printStart | sak=byggsats:ryggkorg |
| 8:38 | toast | bra | Del 1 av 2 klar |
| 8:44 | händelse | printKlar | sak=byggsats:ryggkorg n=1 |
| 8:44 | toast | guld | ✅ |
| 8:44 | väntar | info:guld | Klicka för att ta på dig ryggkorg |
| 8:44 | händelse | tagitUrPrint | sak=byggsats:ryggkorg n=1 |
| 8:44 | sak | info:guld | Klicka för att ta på dig ryggkorg |
| 8:44 | kvitto-visas | info:guld | Klicka för att ta på dig ryggkorg |
| 8:44 | toast | guld | Klicka för att ta på dig ryggkorg |
| 8:46 | klar | info:guld | Klicka för att ta på dig ryggkorg |
| 8:48 | väntar | info:guld | 🧺 Ryggkorgen sitter på! Du bär 16 skräp nu. |
| 8:48 | tog på | du | byggsats:ryggkorg |
| 8:48 | händelse | monterat | sak=ryggkorg |
| 8:48 | sak | info:guld | 🧺 Ryggkorgen sitter på! Du bär 16 skräp nu. |
| 8:48 | kvitto-visas | info:guld | 🧺 Ryggkorgen sitter på! Du bär 16 skräp nu. |
| 8:48 | toast | guld | 🧺 Ryggkorgen sitter på! Du bär 16 skräp nu. |
| 8:48 | händelse | malKlart | id=ryggkorg del=Dag 3 – En skrivare till och taket nasta=n2-bygg-arbetsbord |
| 8:48 | väntar | du | Ett arbetsbord bredvid skrivaren. Skrivare M ska stå på det. |
| 8:48 | MÅL |  | Bygg ett arbetsbord |
| 8:50 | klar | info:guld | 🧺 Ryggkorgen sitter på! Du bär 16 skräp nu. |
| 8:50 | målruta |  | Bygg ett arbetsbord |
| 8:52 | kvittens-bock |  | ✓ Bygg ryggkorgen – bär 10 skräp |
| 8:52 | sak | du | Ett arbetsbord bredvid skrivaren. Skrivare M ska stå på det. |
| 8:52 | pil |  | Bygg ett arbetsbord |
| 8:52 | notis | tanke | 💭 Ett arbetsbord bredvid skrivaren. Skrivare M ska stå på det. |
| 8:52 | röst | du | Ett arbetsbord bredvid skrivaren. Skrivare M ska stå på det. · MÅL |
| 8:52 | nick |  | nick:37 |
| 8:55 | toast | guld | 3D-modell köpt – printa arbetsbord på skrivaren |
| 8:55 | händelse | kopt | sak=bord |
| 8:57 | klar | du | Ett arbetsbord bredvid skrivaren. Skrivare M ska stå på det. |
| 9:03 | tanke | du | Tratten är stor som en kaffekopp. Tunnan är stor som jag. |
| 9:03 | väntar | du | Tratten är stor som en kaffekopp. Tunnan är stor som jag. |
| 9:17 | händelse | printStart | sak=byggsats:bord |
| 9:24 | toast | bra | Del 1 av 3 klar |
| 9:31 | toast | bra | Del 2 av 3 klar |
| 9:37 | skratt | du | falsk tuta |
| 9:37 | väntar | värld:TUUT! Tjena! | TUUT! Tjena! |
| 9:38 | händelse | printKlar | sak=byggsats:bord n=1 |
| 9:38 | toast | guld | ✅ |
| 9:39 | händelse | tagitUrPrint | sak=byggsats:bord n=1 |
| 9:41 | händelse | placerat | sak=bord |
| 9:41 | händelse | malKlart | id=n2-bygg-arbetsbord del=Dag 3 – En skrivare till och taket nasta=n2-bygg-skrivare-m |
| 9:41 | väntar | du | Skrivare M på bordet. Två skrivare, dubbelt så mycket. |
| 9:41 | målruta |  | Printa och sälj |
| 9:42 | MÅL |  | Printa och sälj |
| 9:42 | upplåst | skrivare | skrivare2 |
| 9:42 | brott | UPPLÅST | skrivare2 (skrivare 432 av 75) |
| 9:42 | händelse | upplast | id=skrivare2 flask=skrivare |
| 9:42 | paket |  | tanke → sms |
| 9:42 | tanke | du | Kvarnen hinner mer än skrivaren. Jag behöver en skrivare till. |
| 9:42 | väntar | du | Kvarnen hinner mer än skrivaren. Jag behöver en skrivare till. |
| 9:42 | väntar | ali | Ali här. Skrivare M har kommit. Två och en halv gånger snabbare. Snabbare än jag. Jag har inte varit snabb sedan 1998. |
| 9:42 | sak | du | Skrivare M på bordet. Två skrivare, dubbelt så mycket. |
| 9:42 | pil |  | Bygg Skrivare M på bordet |
| 9:42 | notis | tanke | 💭 Skrivare M på bordet. Två skrivare, dubbelt så mycket. |
| 9:42 | röst | du | Skrivare M på bordet. Två skrivare, dubbelt så mycket. · MÅL |
| 9:45 | kvittens-bock |  | ✓ Bygg ett arbetsbord |
| 9:46 | klar | du | Skrivare M på bordet. Två skrivare, dubbelt så mycket. |
| 9:54 | sak | ali | Ali här. Skrivare M har kommit. Två och en halv gånger snabbare. Snabbare än jag. Jag har inte varit snabb sedan 1998. |
| 9:54 | sms | ali | Ali här. Skrivare M har kommit. Två och en halv gånger snabbare. Snabbare än jag. Jag har inte varit snabb sedan 1998. |
| 9:54 | sms-bubbla | ali | Ali här. Skrivare M har kommit. Två och en halv gånger snabbare. Snabbare än jag. Jag har inte varit snabb sedan 1998. |
| 9:54 | röst | ali | Ali här. Skrivare M har kommit. Två och en halv gånger snabbare. Snabbare än jag. Jag har inte varit snabb sedan 1998. · STORY |
| 9:55 | skratt | du | Alis dyr-pling |
| 9:55 | toast | guld | 3D-modell köpt – printa skrivare m på skrivaren |
| 9:55 | händelse | kopt | sak=skrivare2 |
| 10:04 | klar | ali | Ali här. Skrivare M har kommit. Två och en halv gånger snabbare. Snabbare än jag. Jag har inte varit snabb sedan 1998. |
| 10:06 | struken | värld:TUUT! Tjena! | TUUT! Tjena! |
| 10:07 | väntar | info:fel | Fullt i händerna. |
| 10:07 | sak | info:fel | Fullt i händerna. |
| 10:07 | kvitto-visas | info:fel | Fullt i händerna. |
| 10:07 | toast | fel | Fullt i händerna. |
| 10:09 | klar | info:fel | Fullt i händerna. |
| 10:17 | händelse | printStart | sak=byggsats:skrivare2 |
| 10:18 | sak | du | Tratten är stor som en kaffekopp. Tunnan är stor som jag. |
| 10:18 | notis | tanke | 💭 Tratten är stor som en kaffekopp. Tunnan är stor som jag. |
| 10:18 | röst | du | Tratten är stor som en kaffekopp. Tunnan är stor som jag. · REAKTION |
| 10:22 | klar | du | Tratten är stor som en kaffekopp. Tunnan är stor som jag. |
| 10:26 | toast | bra | Del 1 av 5 klar |
| 10:35 | toast | bra | Del 2 av 5 klar |
| 10:44 | toast | bra | Del 3 av 5 klar |
| 10:44 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 10:49 | tanke | du | Hård plast. Lilla kvarnen skulle explodera. Eller jag. |
| 10:49 | väntar | du | Hård plast. Lilla kvarnen skulle explodera. Eller jag. |
| 10:49 | sak | du | Hård plast. Lilla kvarnen skulle explodera. Eller jag. |
| 10:49 | notis | tanke | 💭 Hård plast. Lilla kvarnen skulle explodera. Eller jag. |
| 10:49 | röst | du | Hård plast. Lilla kvarnen skulle explodera. Eller jag. · REAKTION |
| 10:54 | klar | du | Hård plast. Lilla kvarnen skulle explodera. Eller jag. |
| 11:01 | toast | bra | Del 4 av 5 klar |
| 11:10 | händelse | printKlar | sak=byggsats:skrivare2 n=1 |
| 11:10 | toast | guld | ✅ |
| 11:12 | händelse | tagitUrPrint | sak=byggsats:skrivare2 n=1 |
| 11:15 | händelse | placerat | sak=skrivare2 |
| 11:15 | struken | kedja | skrivareM |
| 11:15 | paket |  | tanke |
| 11:15 | tanke | du | Den här måste stå i linjen vid kvarnen, annars når inte slangen. |
| 11:15 | väntar | du | Den här måste stå i linjen vid kvarnen, annars når inte slangen. |
| 11:15 | händelse | malKlart | id=n2-bygg-skrivare-m del=Dag 3 – En skrivare till och taket nasta=n2-lagg-plattak-skjulet |
| 11:15 | lapp-kö | 📱 Storebror | VA?! Du har byggt en skrivare TILL?? Du har typ en printfarm nu. Okej. Det är faktiskt ganska ballt. 🔥 |
| 11:15 | väntar | bror | VA?! Du har byggt en skrivare TILL?? Du har typ en printfarm nu. Okej. Det är faktiskt ganska ballt. 🔥 |
| 11:15 | väntar | du | Det regnar in. Plåt på taket, så slipper jag sova i en pöl. |
| 11:15 | MÅL |  | Lägg plåttak på skjulet |
| 11:15 | målruta |  | Lägg plåttak på skjulet |
| 11:15 | sak | du | Det regnar in. Plåt på taket, så slipper jag sova i en pöl. |
| 11:15 | pil |  | Lägg plåttak på skjulet |
| 11:15 | notis | tanke | 💭 Det regnar in. Plåt på taket, så slipper jag sova i en pöl. |
| 11:15 | röst | du | Det regnar in. Plåt på taket, så slipper jag sova i en pöl. · MÅL |
| 11:19 | kvittens-bock |  | ✓ Bygg Skrivare M på bordet |
| 11:20 | klar | du | Det regnar in. Plåt på taket, så slipper jag sova i en pöl. |
| 11:28 | toast | guld | 3D-modell köpt – printa plåttak på skrivaren |
| 11:28 | händelse | kopt | sak=tak |
| 11:37 | händelse | printStart | sak=byggsats:tak |
| 11:37 | toast | bra | 🔗 Slangen kopplad |
| 11:40 | sak | du | Kvarnen hinner mer än skrivaren. Jag behöver en skrivare till. |
| 11:40 | notis | tanke | 💭 Kvarnen hinner mer än skrivaren. Jag behöver en skrivare till. |
| 11:40 | röst | du | Kvarnen hinner mer än skrivaren. Jag behöver en skrivare till. · STORY |
| 11:41 | toast | bra | Del 1 av 3 klar |
| 11:45 | toast | bra | Del 2 av 3 klar |
| 11:45 | klar | du | Kvarnen hinner mer än skrivaren. Jag behöver en skrivare till. |
| 11:47 | toast | fel | Ingen ström – trampa cykeln |
| 11:56 | händelse | printKlar | sak=byggsats:tak n=1 |
| 11:56 | toast | guld | ✅ |
| 11:56 | händelse | tagitUrPrint | sak=byggsats:tak n=1 |
| 12:01 | väntar | info:guld | Plåttak på plats! Trivsel +12 · Ali betalar nu +0 % |
| 12:01 | sak | info:guld | Plåttak på plats! Trivsel +12 · Ali betalar nu +0 % |
| 12:01 | kvitto-visas | info:guld | Plåttak på plats! Trivsel +12 · Ali betalar nu +0 % |
| 12:01 | toast | guld | Plåttak på plats! Trivsel +12 · Ali betalar nu +0 % |
| 12:01 | händelse | malKlart | id=n2-lagg-plattak-skjulet del=Dag 3 – En skrivare till och taket nasta=sov3 |
| 12:01 | paket |  | lapp |
| 12:01 | väntar | du | Dag 3 är slut. Nu vet Rolf att jag bor HÄR. Benen orkar inte trampa mer. |
| 12:01 | MÅL |  | Klart för idag – sov när du vill |
| 12:03 | klar | info:guld | Plåttak på plats! Trivsel +12 · Ali betalar nu +0 % |
| 12:04 | målruta |  | Klart för idag – sov när du vill |
| 12:05 | kvittens-bock |  | ✓ Lägg plåttak på skjulet |
| 12:05 | sak | du | (nytt mål i rutan) |
| 12:05 | pil |  | Klart för idag – sov när du vill |
| 12:05 | klar | du | (nytt mål i rutan) |
| 12:05 | paket |  | replik |
| 12:05 | väntar | rolf | Hoppa in. Ja ska visa dej en grej. |
| 12:05 | skratt | du | falsk tuta |
| 12:07 | sak | du | Dag 3 är slut. Nu vet Rolf att jag bor HÄR. Benen orkar inte trampa mer. |
| 12:07 | lapp | 📔 Dagbok | Dag 3 är slut. Nu vet Rolf att jag bor HÄR. Benen orkar inte trampa mer. |
| 12:07 | kvallsrad | du | Nu vet Rolf att jag bor HÄR. Benen orkar inte trampa mer. |
| 12:07 | klar | du | Dag 3 är slut. Nu vet Rolf att jag bor HÄR. Benen orkar inte trampa mer. |
| 12:08 | väntar | notis:🌇 Klockan är 21. Ali slår igen luckan.  | 🌇 Klockan är 21. Ali slår igen luckan. Dagens jobb är klart – gå in i skjulet och sov i sängen. |
| 12:11 | väntar | foto | Tak över huvudet |
| 12:11 | paket |  | tanke |
| 12:11 | tanke | du | I natt somnar jag torr. Det börjar bli ett hem. |
| 12:11 | väntar | du | I natt somnar jag torr. Det börjar bli ett hem. |
| 12:15 | sak | du | Den här måste stå i linjen vid kvarnen, annars når inte slangen. |
| 12:15 | notis | tanke | 💭 Den här måste stå i linjen vid kvarnen, annars når inte slangen. |
| 12:15 | röst | du | Den här måste stå i linjen vid kvarnen, annars når inte slangen. · STORY |
| 12:21 | klar | du | Den här måste stå i linjen vid kvarnen, annars når inte slangen. |
| 12:21 | scenInfo | rolf | Rolf kör upp till sin bänk |
| 12:23 | morgonkort | ⏸️ Pausad | ⏸️ Pausad · Klicka för att fortsätta. |
| 12:25 | röst | rolf | Kall öl ä viktigt. · STORY |
| 12:25 | bubbla | rolf | Kall öl ä viktigt. |
| 12:33 | röst | rolf | Ja kommer hit varje kväll. Förr va vi två på bänken. · STORY |
| 12:33 | bubbla | rolf | Ja kommer hit varje kväll. Förr va vi två på bänken. |
| 12:43 | skratt | du | falsk tuta |
| 12:51 | röst | rolf | Dä där ä Bengt-Åke. Vinka int. · STORY |
| 12:51 | bubbla | rolf | Dä där ä Bengt-Åke. Vinka int. |
| 13:06 | röst | rolf | Den ä skyldig mej pengar. · STORY |
| 13:06 | bubbla | rolf | Den ä skyldig mej pengar. |
| 13:15 | skratt | du | tummen på fotot |
| 13:15 | väntar | foto | Rolfs bänk (och min tumme) |
| 13:15 | paket |  | tanke |
| 13:15 | tanke | du | Han kommer hit varje kväll. Nu vet jag var. |
| 13:15 | väntar | du | Han kommer hit varje kväll. Nu vet jag var. |
| 13:15 | skratt | du | Rolfs bänk |
| 13:21 | sak | bror | VA?! Du har byggt en skrivare TILL?? Du har typ en printfarm nu. Okej. Det är faktiskt ganska ballt. 🔥 |
| 13:21 | sms | bror | VA?! Du har byggt en skrivare TILL?? Du har typ en printfarm nu. Okej. Det är faktiskt ganska ballt. 🔥 |
| 13:21 | sms-bubbla | bror | VA?! Du har byggt en skrivare TILL?? Du har typ en printfarm nu. Okej. Det är faktiskt ganska ballt. 🔥 |
| 13:21 | röst | bror | VA?! Du har byggt en skrivare TILL?? Du har typ en printfarm nu. Okej. Det är faktiskt ganska ballt. 🔥 · STORY |
| 13:23 | lapp | Dagbok | Tre dagar. Tänk om tre veckor. |
| 13:27 | väntar | du | Tre dagar. Tänk om tre veckor. |
| 13:30 | klar | bror | VA?! Du har byggt en skrivare TILL?? Du har typ en printfarm nu. Okej. Det är faktiskt ganska ballt. 🔥 |
| 13:32 | struken | notis:🌇 Klockan är 21. Ali slår igen luckan.  | 🌇 Klockan är 21. Ali slår igen luckan. Dagens jobb är klart – gå in i skjulet och sov i sängen. |
| 13:43 | nattkort | du | 🌙 Dag 3 är slut. God natt. zzz… Nu vet Rolf att jag bor HÄR. Benen orkar inte trampa mer. DAGENS PRINTAR Blomkruka × 14 Flasköppnare med magnet × 1 Totalt 15 p |

<details><summary>Botens handlingar dag 3</summary>

- 0:00 — dag 3 börjar — (1645 kr)
- 0:08 popup: "FORTSÄTT" (1645 kr)
- 0:25 gå till Rolfs postlåda (28 m) (1645 kr)
- 0:31 panel: "Rolfs postlåda
Det här låg i l" (1705 kr)
- 0:32 gå till sätt nyckeln i låset (3 m) (1705 kr)
- 0:40 tjänar pengar till väntar på sopbilen (BO): 1705/1765 kr → printar blomkruka (105 kr) (1705 kr)
- 0:41 gå till skrivaren (7 m) (1705 kr)
- 0:43 printar Blomkruka (1705 kr)
- 1:13 plockar 8 skräp på gården (bär max 10) (1705 kr)
- 1:17 gå till kvarnen (18 m) (1705 kr)
- 1:18 gå till skrivaren (2 m) (1705 kr)
- 1:19 tar ut 1 st ur skrivaren (1705 kr)
- 1:25 gå till Ali (28 m) (1705 kr)
- 1:25 öppnar Alis butik – sälja (1705 kr)
- 1:27 säljer hos Ali: +105 kr (1810 kr)
- 1:30 tjänar pengar till väntar på sopbilen (BO): 1810/1870 kr → printar blomkruka (105 kr) (1810 kr)
- 1:35 gå till skrivaren (25 m) (1810 kr)
- 1:37 printar Blomkruka (1810 kr)
- 1:43 tar ut 1 st ur skrivaren (1810 kr)
- 1:48 gå till Ali (25 m) (1810 kr)
- 1:48 öppnar Alis butik – sälja (1810 kr)
- 1:50 säljer hos Ali: +105 kr (1915 kr)
- 2:03 tjänar pengar till väntar på sopbilen (BO): 1915/1975 kr → printar blomkruka (105 kr) (1915 kr)
- 2:08 gå till skrivaren (25 m) (1915 kr)
- 2:10 printar Blomkruka (1915 kr)
- 2:16 tar ut 1 st ur skrivaren (1915 kr)
- 2:21 gå till Ali (25 m) (1915 kr)
- 2:21 öppnar Alis butik – sälja (1915 kr)
- 2:23 säljer hos Ali: +105 kr (2020 kr)
- 2:26 tjänar pengar till väntar på sopbilen (BO): 2020/2080 kr → printar blomkruka (105 kr) (2020 kr)
- 2:31 gå till skrivaren (25 m) (2020 kr)
- 2:33 printar Blomkruka (2020 kr)
- 2:39 tar ut 1 st ur skrivaren (2020 kr)
- 2:44 gå till Ali (25 m) (2020 kr)
- 2:44 öppnar Alis butik – sälja (2020 kr)
- 2:46 säljer hos Ali: +105 kr (2125 kr)
- 2:49 tjänar pengar till väntar på sopbilen (BO): 2125/2185 kr → printar blomkruka (105 kr) (2125 kr)
- 2:55 gå till skrivaren (25 m) (2125 kr)
- 2:56 printar Blomkruka (2125 kr)
- 3:02 tar ut 1 st ur skrivaren (2125 kr)
- 3:07 gå till Ali (25 m) (2125 kr)
- 3:07 öppnar Alis butik – sälja (2125 kr)
- 3:09 säljer hos Ali: +105 kr (2230 kr)
- 3:20 popup: "Ja." (2230 kr)
- 3:29 popup: "Läst" (2230 kr)
- 3:42 gå till Rolfs postlåda (31 m) (2230 kr)
- 3:51 plockar 10 skräp på tippen (bär max 10) (2230 kr)
- 3:53 gå till kvarnen (8 m) (2230 kr)
- 4:03 gå till skrivaren (3 m) (2230 kr)
- 4:04 printar Flasköppnare med magnet (2230 kr)
- 4:09 tar ut 1 st ur skrivaren (2230 kr)
- 4:09 valj flaskoppnare: true, vald flaskoppnare, post {"l":null,"tr":null,"tm":[]}, nummer false (2230 kr)
- 4:11 gå till Rolfs postlåda (6 m) (2230 kr)
- 4:18 tjänar pengar till väntar på flaskhalsen för cykelbatteri: 2230/2270 kr → printar blomkruka (105 kr) (2230 kr)
- 4:20 gå till skrivaren (6 m) (2230 kr)
- 4:21 printar Blomkruka (2230 kr)
- 4:27 tar ut 1 st ur skrivaren (2230 kr)
- 4:33 gå till Ali (28 m) (2230 kr)
- 4:33 öppnar Alis butik – sälja (2230 kr)
- 4:35 säljer hos Ali: +105 kr (2335 kr)
- 4:36 tjänar pengar till väntar på flaskhalsen för cykelbatteri: 2335/2375 kr → printar blomkruka (105 kr) (2335 kr)
- 4:41 gå till skrivaren (25 m) (2335 kr)
- 4:43 printar Blomkruka (2335 kr)
- 4:49 tar ut 1 st ur skrivaren (2335 kr)
- 4:54 gå till Ali (25 m) (2335 kr)
- 4:54 öppnar Alis butik – sälja (2335 kr)
- 4:56 säljer hos Ali: +105 kr (2440 kr)
- 4:58 tjänar pengar till väntar på flaskhalsen för cykelbatteri: 2440/2480 kr → printar blomkruka (105 kr) (2440 kr)
- 5:03 gå till skrivaren (25 m) (2440 kr)
- 5:05 printar Blomkruka (2440 kr)
- 5:11 tar ut 1 st ur skrivaren (2440 kr)
- 5:16 gå till Ali (25 m) (2440 kr)
- 5:16 öppnar Alis butik – sälja (2440 kr)
- 5:18 säljer hos Ali: +105 kr (2545 kr)
- 5:20 tjänar pengar till väntar på flaskhalsen för cykelbatteri: 2545/2585 kr → printar blomkruka (105 kr) (2545 kr)
- 5:25 gå till skrivaren (25 m) (2545 kr)
- 5:27 printar Blomkruka (2545 kr)
- 5:33 tar ut 1 st ur skrivaren (2545 kr)
- 5:38 gå till Ali (25 m) (2545 kr)
- 5:38 öppnar Alis butik – sälja (2545 kr)
- 5:40 säljer hos Ali: +105 kr (2650 kr)
- 5:42 tjänar pengar till väntar på flaskhalsen för cykelbatteri: 2650/2690 kr → printar blomkruka (105 kr) (2650 kr)
- 5:47 gå till skrivaren (25 m) (2650 kr)
- 5:49 printar Blomkruka (2650 kr)
- 5:55 tar ut 1 st ur skrivaren (2650 kr)
- 6:00 gå till Ali (25 m) (2650 kr)
- 6:00 öppnar Alis butik – sälja (2650 kr)
- 6:02 säljer hos Ali: +105 kr (2755 kr)
- 6:04 tjänar pengar till väntar på flaskhalsen för cykelbatteri: 2755/2795 kr → printar blomkruka (105 kr) (2755 kr)
- 6:19 plockar 10 skräp på tippen (bär max 10) (2755 kr)
- 6:21 gå till kvarnen (9 m) (2755 kr)
- 6:26 gå till skrivaren (3 m) (2755 kr)
- 6:27 printar Blomkruka (2755 kr)
- 6:34 tar ut 1 st ur skrivaren (2755 kr)
- 6:39 gå till Ali (28 m) (2755 kr)
- 6:39 öppnar Alis butik – sälja (2755 kr)
- 6:41 säljer hos Ali: +105 kr (2860 kr)
- 6:43 tjänar pengar till väntar på flaskhalsen för cykelbatteri: 2860/2900 kr → printar blomkruka (105 kr) (2860 kr)
- 6:48 gå till skrivaren (25 m) (2860 kr)
- 6:50 printar Blomkruka (2860 kr)
- 6:56 tar ut 1 st ur skrivaren (2860 kr)
- 7:01 gå till Ali (25 m) (2860 kr)
- 7:01 öppnar Alis butik – sälja (2860 kr)
- 7:03 säljer hos Ali: +105 kr (2965 kr)
- 7:05 tjänar pengar till väntar på flaskhalsen för cykelbatteri: 2965/3005 kr → printar blomkruka (105 kr) (2965 kr)
- 7:10 gå till skrivaren (25 m) (2965 kr)
- 7:12 printar Blomkruka (2965 kr)
- 7:18 tar ut 1 st ur skrivaren (2965 kr)
- 7:23 gå till Ali (25 m) (2965 kr)
- 7:23 öppnar Alis butik – sälja (2965 kr)
- 7:25 säljer hos Ali: +105 kr (3070 kr)
- 7:27 tjänar pengar till väntar på flaskhalsen för cykelbatteri: 3070/3110 kr → printar blomkruka (105 kr) (3070 kr)
- 7:33 gå till skrivaren (25 m) (3070 kr)
- 7:34 printar Blomkruka (3070 kr)
- 7:40 tar ut 1 st ur skrivaren (3070 kr)
- 7:45 gå till Ali (25 m) (3070 kr)
- 7:45 öppnar Alis butik – sälja (3070 kr)
- 7:47 säljer hos Ali: +105 kr (3175 kr)
- 7:53 öppnar Alis butik – bilbatteriet (3175 kr)
- 7:56 köper cykelbatteri för 30 kr (3145 kr)
- 8:03 gå till koppla in bilbatteriet vid cykeln (24 m) (3145 kr)
- 8:21 gå till Ali (24 m) (3145 kr)
- 8:21 öppnar Alis butik – köpa ryggkorg (3145 kr)
- 8:24 köper ryggkorg för 120 kr (3025 kr)
- 8:30 gå till skrivaren (25 m) (3025 kr)
- 8:32 printar Ryggkorg (2 delar) (3025 kr)
- 8:44 tar ut 1 st ur skrivaren (3025 kr)
- 8:48 tar på ryggkorg (3025 kr)
- 8:54 gå till Ali (25 m) (3025 kr)
- 8:54 öppnar Alis butik – köpa arbetsbord (3025 kr)
- 8:56 köper bord för 120 kr (2905 kr)
- 9:07 plockar 2 skräp på tippen (bär max 16) (2905 kr)
- 9:09 gå till kvarnen (9 m) (2905 kr)
- 9:15 gå till skrivaren (3 m) (2905 kr)
- 9:17 printar Arbetsbord (3 delar) (2905 kr)
- 9:39 tar ut 1 st ur skrivaren (2905 kr)
- 9:40 gå till platsen för arbetsbord (5 m) (2905 kr)
- 9:41 ställer ut arbetsbord (2905 kr)
- 9:53 gå till Ali (24 m) (2905 kr)
- 9:53 öppnar Alis butik – köpa skrivare m (2905 kr)
- 9:56 köper skrivare2 för 500 kr (2405 kr)
- 10:08 plockar 3 skräp på tippen (bär max 16) (2405 kr)
- 10:10 gå till kvarnen (12 m) (2405 kr)
- 10:15 gå till skrivaren (3 m) (2405 kr)
- 10:17 printar Skrivare M (5 delar) (2405 kr)
- 10:49 plockar 2 skräp på tippen (bär max 16) (2405 kr)
- 10:51 gå till kvarnen (10 m) (2405 kr)
- 11:12 gå till skrivaren (3 m) (2405 kr)
- 11:12 tar ut 1 st ur skrivaren (2405 kr)
- 11:14 gå till platsen för skrivare m (5 m) (2405 kr)
- 11:15 ställer ut skrivare m (2405 kr)
- 11:27 gå till Ali (24 m) (2405 kr)
- 11:27 öppnar Alis butik – köpa plåttak (2405 kr)
- 11:29 köper tak för 250 kr (2155 kr)
- 11:36 gå till skrivaren (24 m) (2155 kr)
- 11:37 printar Plåttak (3 delar) (2155 kr)
- 11:47 gå till cykeln (2 m) (2155 kr)
- 11:57 tar ut 1 st ur skrivaren (2155 kr)
- 12:01 gå till skjulet (19 m) (2155 kr)
- 12:21 gå till sopbilen (Rolfs bänk) (38 m) (2155 kr)
- 12:31 kort: "FORTSÄTTeller tryck Esc" (2155 kr)
- 13:22 tillbaka från Rolfs bänk (2155 kr)
- 13:27 panel: "Dagbok
Före och efter
Dag 1
Da" (2155 kr)
- 13:40 gå till sängen (39 m) (2155 kr)

</details>

## Dag 4

| Tid | Källa | Vem | Text |
|---|---|---|---|
| 13:43 | vara | ali | ingen |
| 13:43 | händelse | malKlart | id=sov3 del=Dag 3 – En skrivare till och taket nasta=rolf2-brev |
| 13:43 | vara | ali | kruka |
| 13:43 | MÅL |  | Vänta på sopbilen. Den lämnar något. |
| 0:01 | händelse | dagenBorjar | dag=4 |
| 0:01 | meddelande | du | Dag 4. 18 dagar till jul. Drar det i skjulet blir natten lång. |
| 0:01 | dagbokkort | du | Kärran och mer vind · Dag 4. 18 dagar till jul. Drar det i skjulet blir natten lång. |
| 0:01 | röst | du | Dag 4. 18 dagar till jul. Kärran och mer vind. Drar det i skjulet blir natten lång. · STORY |
| 0:09 | händelse | morgonkortStangt | dag=4 |
| 0:09 | struken | du | Tre dagar. Tänk om tre veckor. |
| 0:09 | väntar | notis:Blomkruka · +50 % | Blomkruka · +50 % |
| 0:12 | målruta |  | Vänta på sopbilen. Den lämnar något. |
| 0:14 | sak | du | (nytt mål i rutan) |
| 0:14 | pil |  | Vänta på sopbilen. Den lämnar något. |
| 0:14 | klar | du | (nytt mål i rutan) |
| 0:16 | sak | notis:Blomkruka · +50 % | Blomkruka · +50 % |
| 0:16 | notis |  | Blomkruka · +50 % |
| 0:18 | klar | notis:Blomkruka · +50 % | Blomkruka · +50 % |
| 0:26 | väntar | info:bra | 🛒 4 skräp från famnen i skottkärran |
| 0:34 | väntar | rolf | PERFEKT öppnare! Kärran vid lådan ä din. Den gnisslar. Precis som ja. Skriv ditt nummer på en lapp, så slipper ja skriva brev. /Rolf |
| 0:34 | sak | info:bra | 🛒 4 skräp från famnen i skottkärran |
| 0:34 | kvitto-visas | info:bra | 🛒 4 skräp från famnen i skottkärran |
| 0:34 | toast | bra | 🛒 4 skräp från famnen i skottkärran |
| 0:36 | klar | info:bra | 🛒 4 skräp från famnen i skottkärran |
| 0:46 | sak | rolf | Hoppa in. Ja ska visa dej en grej. |
| 0:46 | notis |  | Rolf: ”Hoppa in. Ja ska visa dej en grej.” |
| 0:46 | röst | rolf | Hoppa in. Ja ska visa dej en grej. · STORY |
| 0:49 | klar | rolf | Hoppa in. Ja ska visa dej en grej. |
| 0:58 | sak | foto | Tak över huvudet |
| 0:58 | foto | du | Tak över huvudet |
| 1:00 | klar | foto | Tak över huvudet |
| 1:01 | skratt | du | falsk tuta |
| 1:05 | väntar | bud | (tips) |
| 1:05 | sak | bud | (tips) |
| 1:05 | väntar | du | En skottkärra! Jag väljer den med hjulet och kör den full med skräp. |
| 1:06 | klar | bud | (tips) |
| 1:07 | tanke | du | En husvagn mitt i tippen. Och grinden är låst. |
| 1:07 | väntar | du | En husvagn mitt i tippen. Och grinden är låst. |
| 1:08 | sak | du | En skottkärra! Jag väljer den med hjulet och kör den full med skräp. |
| 1:08 | röst | du | En skottkärra! Jag väljer den med hjulet och kör den full med skräp. · MÅL |
| 1:14 | klar | du | En skottkärra! Jag väljer den med hjulet och kör den full med skräp. |
| 1:22 | sak | du | I natt somnar jag torr. Det börjar bli ett hem. |
| 1:22 | notis | tanke | 💭 I natt somnar jag torr. Det börjar bli ett hem. |
| 1:22 | röst | du | I natt somnar jag torr. Det börjar bli ett hem. · STORY |
| 1:26 | klar | du | I natt somnar jag torr. Det börjar bli ett hem. |
| 1:34 | sak | foto | Rolfs bänk (och min tumme) |
| 1:34 | foto | du | Rolfs bänk (och min tumme) |
| 1:37 | klar | foto | Rolfs bänk (och min tumme) |
| 1:42 | väntar | värld:Mjau. | Mjau. |
| 1:45 | sak | du | Han kommer hit varje kväll. Nu vet jag var. |
| 1:45 | notis | tanke | 💭 Han kommer hit varje kväll. Nu vet jag var. |
| 1:45 | röst | du | Han kommer hit varje kväll. Nu vet jag var. · STORY |
| 1:48 | klar | du | Han kommer hit varje kväll. Nu vet jag var. |
| 1:57 | sak | du | En husvagn mitt i tippen. Och grinden är låst. |
| 1:57 | notis | tanke | 💭 En husvagn mitt i tippen. Och grinden är låst. |
| 1:57 | röst | du | En husvagn mitt i tippen. Och grinden är låst. · REAKTION |
| 2:01 | klar | du | En husvagn mitt i tippen. Och grinden är låst. |
| 2:03 | struken | värld:Mjau. | Mjau. |
| 2:08 | röst | ali | Pappa sa: driv butiken, Ali. Så jag driver butiken. På nätterna promptar jag. Det är mitt riktiga jobb. · STORY |
| 2:08 | butiksbubbla | ali | Pappa sa: driv butiken, Ali. Så jag driver butiken. På nätterna promptar jag. Det är mitt riktiga jobb. |
| 2:09 | väntar | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått TAK. Och arbetsbord. Skriv in, Gunnar. Du skriver aldrig in. |
| 2:09 | radio | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått TAK. Och arbetsbord. Skriv in, Gunnar. Du skriver aldrig in. |
| 2:09 | skratt | du | Radio-Kjelle |
| 2:13 | sak | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått TAK. Och arbetsbord. Skriv in, Gunnar. Du skriver aldrig in. |
| 2:13 | notis |  | 📻 Radio Tippen: Radio Tippen, Kjelle här. Skjulet vid tippen har fått TAK. Och arbetsbord. Skriv in, Gunnar. Du skriver aldrig in. |
| 2:13 | röst | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått TAK. Och arbetsbord. Skriv in, Gunnar. Du skriver aldrig in. · REAKTION |
| 2:22 | klar | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått TAK. Och arbetsbord. Skriv in, Gunnar. Du skriver aldrig in. |
| 2:23 | väntar | bror | Tomt här hemma. Ingen som snor mina laddare. Inte för att jag saknar det eller nåt. |
| 2:55 | väntar | värld:Mjau. | Mjau. |
| 2:55 | sak | värld:Mjau. | Mjau. |
| 2:55 | bubbla |  | Mjau. |
| 2:57 | klar | värld:Mjau. | Mjau. |
| 3:09 | skratt | du | falsk tuta |
| 3:17 | väntar | värld:TUUT! Tjena! | TUUT! Tjena! |
| 3:17 | paket |  | ge |
| 3:17 | väntar |  | (läget ändras) |
| 3:17 | sak | värld:TUUT! Tjena! | TUUT! Tjena! |
| 3:17 | bubbla |  | TUUT! Tjena! |
| 3:20 | klar | värld:TUUT! Tjena! | TUUT! Tjena! |
| 3:24 | skratt | du | däcket rullar iväg |
| 3:24 | paket |  | tanke |
| 3:24 | tanke | du | Däcket ville inte stanna. Jag förstår det. |
| 3:24 | väntar | du | Däcket ville inte stanna. Jag förstår det. |
| 3:28 | sak |  | (läget ändras) |
| 3:28 | brev | rolf | rolf:2 |
| 3:28 | klar |  | (läget ändras) |
| 3:31 | skratt | du | falsk tuta |
| 3:33 | sak | du | Däcket ville inte stanna. Jag förstår det. |
| 3:33 | notis | tanke | 💭 Däcket ville inte stanna. Jag förstår det. |
| 3:33 | röst | du | Däcket ville inte stanna. Jag förstår det. · REAKTION |
| 3:36 | klar | du | Däcket ville inte stanna. Jag förstår det. |
| 4:09 | väntar | mamma | Din bror säger att du har två skrivare nu. Är du med i en sekt? Du kan berätta för mig om du är med i en sekt. |
| 4:31 | väntar | rolf | Tjo. Ska grilla på lördag. Min grillspade smälte. Kan du göra en sån hä? /Rolf 🍖​ |
| 4:31 | paket |  | ge |
| 4:31 | väntar |  | (läget ändras) |
| 4:31 | sak | rolf | Tjo. Ska grilla på lördag. Min grillspade smälte. Kan du göra en sån hä? /Rolf 🍖​ |
| 4:31 | lapp | Brev från Rolf | Tjo. Ska grilla på lördag. Min grillspade smälte. Kan du göra en sån hä? /Rolf 🍖​ |
| 4:31 | röst | rolf | Tjo. Ska grilla på lördag. Min grillspade smälte. Kan du göra en sån hä? /Rolf 🍖​ · STORY |
| 4:31 | händelse | malKlart | id=rolf2-brev del=Dag 4 – Kärran och mer vind nasta=rolf2-printa |
| 4:31 | väntar | du | Printa grillspade. |
| 4:31 | MÅL |  | Printa grillspade |
| 4:35 | målruta |  | Printa grillspade |
| 4:38 | klar | rolf | Tjo. Ska grilla på lördag. Min grillspade smälte. Kan du göra en sån hä? /Rolf 🍖​ |
| 4:38 | händelse | brevLast | id=rolf:2 |
| 4:40 | sak | du | Printa grillspade. |
| 4:40 | pil |  | Printa grillspade |
| 4:40 | röst | du | Printa grillspade. · MÅL |
| 4:40 | nick |  | nick:42 |
| 4:42 | klar | du | Printa grillspade. |
| 4:44 | sak |  | (läget ändras) |
| 4:44 | klar |  | (läget ändras) |
| 4:59 | toast | skak | handen skakar: fullt |
| 4:59 | väntar | värld:Mjau. | Mjau. |
| 5:07 | paket |  | tanke |
| 5:07 | tanke | du | En badanka. Den överlevde kvarnen. |
| 5:07 | väntar | du | En badanka. Den överlevde kvarnen. |
| 5:07 | skratt | du | kvarnen spottar |
| 5:11 | händelse | printStart | sak=grillspade |
| 5:11 | händelse | malKlart | id=rolf2-printa del=Dag 4 – Kärran och mer vind nasta=rolf2-ge |
| 5:11 | väntar | du | Ge Rolf grillspade. |
| 5:11 | målruta |  | Ge Rolf grillspade |
| 5:12 | MÅL |  | Ge Rolf grillspade |
| 5:12 | sak | du | Ge Rolf grillspade. |
| 5:12 | pil |  | Ge Rolf grillspade |
| 5:12 | röst | du | Ge Rolf grillspade. · MÅL |
| 5:14 | klar | du | Ge Rolf grillspade. |
| 5:15 | toast | guld | ✅ |
| 5:15 | händelse | printKlar | sak=grillspade n=1 |
| 5:15 | kvittens-bock |  | ✓ Printa grillspade |
| 5:16 | händelse | tagitUrPrint | sak=grillspade n=1 |
| 5:19 | struken | värld:Mjau. | Mjau. |
| 5:20 | händelse | lagtIPostlada | sak=grillspade rolf=2 jobb=false |
| 5:20 | struken | kedja | rolf2 |
| 5:20 | händelse | malKlart | id=rolf2-ge del=Dag 4 – Kärran och mer vind nasta=n3-tom-full-karra |
| 5:20 | väntar | du | Kärran rymmer massor. Jag fyller den och tippar allt i kvarnen. |
| 5:20 | målruta |  | Töm en full kärra i kvarnen |
| 5:20 | MÅL |  | Töm en full kärra i kvarnen |
| 5:20 | sak | du | Kärran rymmer massor. Jag fyller den och tippar allt i kvarnen. |
| 5:20 | pil |  | Töm en full kärra i kvarnen |
| 5:20 | notis | tanke | 💭 Kärran rymmer massor. Jag fyller den och tippar allt i kvarnen. |
| 5:20 | röst | du | Kärran rymmer massor. Jag fyller den och tippar allt i kvarnen. · MÅL |
| 5:24 | kvittens-bock |  | ✓ Ge Rolf grillspade |
| 5:25 | klar | du | Kärran rymmer massor. Jag fyller den och tippar allt i kvarnen. |
| 5:25 | väntar | värld:TUUT TUUT! | TUUT TUUT! |
| 5:27 | väntar | info:bra | 🛒 4 skräp från famnen i skottkärran |
| 5:27 | sak | info:bra | 🛒 4 skräp från famnen i skottkärran |
| 5:27 | kvitto-visas | info:bra | 🛒 4 skräp från famnen i skottkärran |
| 5:27 | toast | bra | 🛒 4 skräp från famnen i skottkärran |
| 5:28 | karraKlick | du | träff |
| 5:29 | klar | info:bra | 🛒 4 skräp från famnen i skottkärran |
| 5:29 | karraKlick | du | träff |
| 5:31 | karraKlick | du | träff |
| 5:31 | karraKlick | du | träff |
| 5:32 | karraKlick | du | träff |
| 5:34 | karraKlick | du | träff |
| 5:34 | karraKlick | du | träff |
| 5:36 | karraKlick | du | träff |
| 5:39 | sak | du | En badanka. Den överlevde kvarnen. |
| 5:39 | notis | tanke | 💭 En badanka. Den överlevde kvarnen. |
| 5:39 | röst | du | En badanka. Den överlevde kvarnen. · REAKTION |
| 5:39 | tanke | du | Det får inte plats. Jag behöver något att tippa i. |
| 5:39 | väntar | du | Det får inte plats. Jag behöver något att tippa i. |
| 5:39 | väntar | info:bra | 11 st i tratten · 16 st på marken bredvid |
| 5:39 | händelse | malKlart | id=n3-tom-full-karra del=Dag 4 – Kärran och mer vind nasta=sophallare |
| 5:39 | väntar | du | En sophållare bakom kvarnen. Då matar den sig själv. |
| 5:39 | MÅL |  | Plocka skräp och mal det |
| 5:41 | klar | du | En badanka. Den överlevde kvarnen. |
| 5:41 | sak | info:bra | 11 st i tratten · 16 st på marken bredvid |
| 5:41 | kvitto-visas | info:bra | 11 st i tratten · 16 st på marken bredvid |
| 5:41 | toast | bra | 11 st i tratten · 16 st på marken bredvid |
| 5:42 | målruta |  | Plocka skräp och mal det |
| 5:43 | kvittens-bock |  | ✓ Töm en full kärra i kvarnen |
| 5:43 | klar | info:bra | 11 st i tratten · 16 st på marken bredvid |
| 5:45 | sak | du | En sophållare bakom kvarnen. Då matar den sig själv. |
| 5:45 | pil |  | Plocka skräp och mal det |
| 5:45 | notis | tanke | 💭 En sophållare bakom kvarnen. Då matar den sig själv. |
| 5:45 | röst | du | En sophållare bakom kvarnen. Då matar den sig själv. · MÅL |
| 5:50 | klar | du | En sophållare bakom kvarnen. Då matar den sig själv. |
| 5:52 | struken | värld:TUUT TUUT! | TUUT TUUT! |
| 5:52 | sak | du | Det får inte plats. Jag behöver något att tippa i. |
| 5:52 | notis | tanke | 💭 Det får inte plats. Jag behöver något att tippa i. |
| 5:52 | röst | du | Det får inte plats. Jag behöver något att tippa i. · STORY |
| 5:54 | händelse | printStart | sak=kruka |
| 5:56 | klar | du | Det får inte plats. Jag behöver något att tippa i. |
| 5:57 | toast | guld | ✅ |
| 5:57 | händelse | printKlar | sak=kruka n=33 |
| 5:57 | händelse | tagitUrPrint | sak=kruka n=1 |
| 6:05 | aliSalt | ali | 105 |
| 6:13 | händelse | printStart | sak=kruka |
| 6:16 | toast | guld | ✅ |
| 6:16 | händelse | printKlar | sak=kruka n=34 |
| 6:17 | händelse | tagitUrPrint | sak=kruka n=1 |
| 6:24 | aliSalt | ali | 105 |
| 6:33 | händelse | printStart | sak=kruka |
| 6:36 | toast | guld | ✅ |
| 6:36 | händelse | printKlar | sak=kruka n=35 |
| 6:36 | händelse | tagitUrPrint | sak=kruka n=1 |
| 6:37 | upplåst | skrivare | trim_skrivare2 |
| 6:37 | brott | UPPLÅST | trim_skrivare2 (skrivare 90 av 75) |
| 6:37 | händelse | upplast | id=trim_skrivare2 flask=skrivare |
| 6:37 | paket |  | tanke → sms |
| 6:37 | tanke | du | Skrivare M hinner inte heller. Den kunde gå fortare. |
| 6:37 | väntar | du | Skrivare M hinner inte heller. Den kunde gå fortare. |
| 6:37 | väntar | ali | Ali här. Skrivartrim igen. Nästa nivå. Den här gången skruvade jag åt rätt håll. |
| 6:37 | sak | du | Skrivare M hinner inte heller. Den kunde gå fortare. |
| 6:37 | notis | tanke | 💭 Skrivare M hinner inte heller. Den kunde gå fortare. |
| 6:37 | röst | du | Skrivare M hinner inte heller. Den kunde gå fortare. · STORY |
| 6:42 | klar | du | Skrivare M hinner inte heller. Den kunde gå fortare. |
| 6:44 | sak | ali | Ali här. Skrivartrim igen. Nästa nivå. Den här gången skruvade jag åt rätt håll. |
| 6:44 | sms | ali | Ali här. Skrivartrim igen. Nästa nivå. Den här gången skruvade jag åt rätt håll. |
| 6:44 | sms-bubbla | ali | Ali här. Skrivartrim igen. Nästa nivå. Den här gången skruvade jag åt rätt håll. |
| 6:44 | röst | ali | Ali här. Skrivartrim igen. Nästa nivå. Den här gången skruvade jag åt rätt håll. · STORY |
| 6:44 | aliSalt | ali | 105 |
| 6:45 | väntar | mamma | Din bror säger att du har två skrivare nu. Är du med i en sekt? Du kan berätta för mig om du är med i en sekt. |
| 6:50 | klar | ali | Ali här. Skrivartrim igen. Nästa nivå. Den här gången skruvade jag åt rätt håll. |
| 6:59 | skratt | du | falsk tuta |
| 6:59 | händelse | printStart | sak=kruka |
| 7:02 | toast | guld | ✅ |
| 7:02 | händelse | printKlar | sak=kruka n=36 |
| 7:02 | händelse | tagitUrPrint | sak=kruka n=1 |
| 7:10 | aliSalt | ali | 105 |
| 7:16 | paket |  | tanke |
| 7:16 | tanke | du | Jaha, Rolf har hämtat grillspade. |
| 7:16 | väntar | du | Jaha, Rolf har hämtat grillspade. |
| 7:19 | händelse | printStart | sak=kruka |
| 7:22 | toast | guld | ✅ |
| 7:22 | händelse | printKlar | sak=kruka n=37 |
| 7:22 | händelse | tagitUrPrint | sak=kruka n=1 |
| 7:30 | aliSalt | ali | 105 |
| 7:38 | väntar | värld:TUUT! Hej grannen! | TUUT! Hej grannen! |
| 7:39 | händelse | printStart | sak=kruka |
| 7:41 | skratt | du | plastspagetti |
| 7:41 | toast | guld | ✅ |
| 7:41 | händelse | printKlar | sak=kruka n=38 |
| 7:42 | händelse | tagitUrPrint | sak=spagetti n=1 |
| 7:49 | skratt | du | Ali köper konst |
| 7:49 | aliSalt | ali | 3 |
| 7:57 | händelse | printStart | sak=kruka |
| 8:00 | toast | guld | ✅ |
| 8:00 | händelse | printKlar | sak=kruka n=39 |
| 8:00 | struken | värld:TUUT! Hej grannen! | TUUT! Hej grannen! |
| 8:02 | händelse | tagitUrPrint | sak=kruka n=1 |
| 8:09 | aliSalt | ali | 105 |
| 8:16 | sak | du | Jaha, Rolf har hämtat grillspade. |
| 8:16 | notis | tanke | 💭 Jaha, Rolf har hämtat grillspade. |
| 8:16 | röst | du | Jaha, Rolf har hämtat grillspade. · REAKTION |
| 8:18 | händelse | printStart | sak=kruka |
| 8:19 | klar | du | Jaha, Rolf har hämtat grillspade. |
| 8:21 | toast | guld | ✅ |
| 8:21 | händelse | printKlar | sak=kruka n=40 |
| 8:22 | händelse | tagitUrPrint | sak=kruka n=1 |
| 8:23 | struken | bror | Tomt här hemma. Ingen som snor mina laddare. Inte för att jag saknar det eller nåt. |
| 8:29 | aliSalt | ali | 105 |
| 8:38 | händelse | printStart | sak=kruka |
| 8:41 | toast | guld | ✅ |
| 8:41 | händelse | printKlar | sak=kruka n=41 |
| 8:42 | händelse | tagitUrPrint | sak=kruka n=1 |
| 8:49 | aliSalt | ali | 105 |
| 8:58 | händelse | printStart | sak=kruka |
| 9:00 | upplåst | bara | matarband |
| 9:00 | brott | RESERV | matarband (bara 0 av 6) |
| 9:00 | händelse | upplast | id=matarband flask=bara |
| 9:00 | paket |  | sms |
| 9:00 | väntar | ali | Ali här. 🗑️ Sophållaren. Jag frågade AI:n hur man slipper bära skräp. Den gjorde det här. Den har mer fritid än jag. Suck. |
| 9:01 | toast | guld | ✅ |
| 9:01 | händelse | printKlar | sak=kruka n=42 |
| 9:01 | händelse | tagitUrPrint | sak=kruka n=1 |
| 9:08 | sak | ali | Ali här. 🗑️ Sophållaren. Jag frågade AI:n hur man slipper bära skräp. Den gjorde det här. Den har mer fritid än jag. Suck. |
| 9:08 | sms | ali | Ali här. 🗑️ Sophållaren. Jag frågade AI:n hur man slipper bära skräp. Den gjorde det här. Den har mer fritid än jag. Suck. |
| 9:08 | sms-bubbla | ali | Ali här. 🗑️ Sophållaren. Jag frågade AI:n hur man slipper bära skräp. Den gjorde det här. Den har mer fritid än jag. Suck. |
| 9:08 | röst | ali | Ali här. 🗑️ Sophållaren. Jag frågade AI:n hur man slipper bära skräp. Den gjorde det här. Den har mer fritid än jag. Suck. · STORY |
| 9:09 | aliSalt | ali | 105 |
| 9:18 | klar | ali | Ali här. 🗑️ Sophållaren. Jag frågade AI:n hur man slipper bära skräp. Den gjorde det här. Den har mer fritid än jag. Suck. |
| 9:21 | toast | guld | 3D-modell köpt – printa sophållare på skrivaren |
| 9:21 | händelse | kopt | sak=matarband |
| 9:30 | händelse | printStart | sak=byggsats:matarband |
| 9:33 | skratt | du | falsk tuta |
| 9:33 | väntar | värld:TUUT! Tjena! | TUUT! Tjena! |
| 9:33 | toast | bra | Del 1 av 3 klar |
| 9:37 | toast | bra | Del 2 av 3 klar |
| 9:39 | toast | fel | Ingen ström – trampa cykeln |
| 9:48 | händelse | printKlar | sak=byggsats:matarband n=1 |
| 9:48 | toast | guld | ✅ |
| 9:49 | händelse | tagitUrPrint | sak=byggsats:matarband n=1 |
| 9:49 | paket |  | sms |
| 9:49 | väntar | ali | Ali här. Jag såg Sophållare på avstånd. Ett streck blev lite snett. Mitt fel. Vackert ändå. |
| 9:49 | paket |  | sms |
| 9:49 | väntar | ali | Ali igen. Jag har sagt till min bror att jag inte går i pension. Jag startar något. Han skrattade. Jag skrattade också. Men jag menar det. Tack. Säg inget. |
| 9:50 | händelse | placerat | sak=sophallare |
| 9:50 | kvittens | du | Nu kan jag tömma hela kärran på en gång. |
| 9:50 | varför | du | Krukor är bra. Pallar är bättre. |
| 9:50 | väntar | du | Nu kan jag tömma hela kärran på en gång. |
| 9:50 | väntar | info:guld | 🗑️ Sophållaren står bakom kvarnen! Töm allt skräp i den – den matar kvarnen själv. |
| 9:50 | sak | du | Nu kan jag tömma hela kärran på en gång. |
| 9:50 | notis | tanke | 💭 Nu kan jag tömma hela kärran på en gång. |
| 9:50 | röst | du | Nu kan jag tömma hela kärran på en gång. · STORY |
| 9:50 | händelse | malKlart | id=sophallare del=Dag 4 – Kärran och mer vind nasta=pall |
| 9:50 | väntar | du | Jag behöver något att sitta på. En pall. Lagom ambitiöst. |
| 9:51 | MÅL |  | Printa en pall |
| 9:54 | klar | du | Nu kan jag tömma hela kärran på en gång. |
| 9:54 | sak | info:guld | 🗑️ Sophållaren står bakom kvarnen! Töm allt skräp i den – den matar kvarnen själv. |
| 9:54 | kvitto-visas | info:guld | 🗑️ Sophållaren står bakom kvarnen! Töm allt skräp i den – den matar kvarnen själv. |
| 9:54 | toast | guld | 🗑️ Sophållaren står bakom kvarnen! Töm allt skräp i den – den matar kvarnen själv. |
| 9:54 | målruta |  | Printa en pall |
| 9:56 | klar | info:guld | 🗑️ Sophållaren står bakom kvarnen! Töm allt skräp i den – den matar kvarnen själv. |
| 9:58 | sak | du | Jag behöver något att sitta på. En pall. Lagom ambitiöst. |
| 9:58 | pil |  | Printa en pall |
| 9:58 | notis | tanke | 💭 Jag behöver något att sitta på. En pall. Lagom ambitiöst. |
| 9:58 | röst | du | Jag behöver något att sitta på. En pall. Lagom ambitiöst. · MÅL |
| 9:58 | nick |  | nick:46 |
| 10:03 | klar | du | Jag behöver något att sitta på. En pall. Lagom ambitiöst. |
| 10:05 | struken | värld:TUUT! Tjena! | TUUT! Tjena! |
| 10:05 | struken | ali | Ali här. Jag såg Sophållare på avstånd. Ett streck blev lite snett. Mitt fel. Vackert ändå. |
| 10:12 | händelse | kopt | sak=pall |
| 10:12 | röst | ali | Bra val. Folk köper sånt. Jag vet inte varför. · STORY |
| 10:12 | upprepning | ali | Bra val. Folk köper sånt. Jag vet inte varför. |
| 10:12 | butiksbubbla | ali | Pall? Bra val. Folk köper sånt. Jag vet inte varför. |
| 10:33 | händelse | printStart | sak=pall |
| 10:38 | toast | guld | ✅ |
| 10:38 | händelse | printKlar | sak=pall n=1 |
| 10:38 | händelse | malKlart | id=pall del=Dag 4 – Kärran och mer vind nasta=vind4 |
| 10:38 | väntar | du | En vindsnurra till på skjulets tak. Skrivarna vill ha mer ström. |
| 10:38 | målruta |  | Printa och sälj |
| 10:38 | MÅL |  | Printa och sälj |
| 10:38 | sak | du | En vindsnurra till på skjulets tak. Skrivarna vill ha mer ström. |
| 10:38 | pil |  | Printa och sälj |
| 10:38 | notis | tanke | 💭 En vindsnurra till på skjulets tak. Skrivarna vill ha mer ström. |
| 10:38 | röst | du | En vindsnurra till på skjulets tak. Skrivarna vill ha mer ström. · MÅL |
| 10:38 | händelse | tagitUrPrint | sak=pall n=1 |
| 10:42 | kvittens-bock |  | ✓ Printa en pall |
| 10:44 | klar | du | En vindsnurra till på skjulets tak. Skrivarna vill ha mer ström. |
| 10:45 | händelse | placerat | sak=pall |
| 10:52 | händelse | printStart | sak=pall |
| 10:57 | upplåst | strom | vindsnurra2 |
| 10:57 | brott | UPPLÅST | vindsnurra2 (strom 29 av 15) |
| 10:57 | händelse | upplast | id=vindsnurra2 flask=strom |
| 10:57 | paket |  | tanke → sms |
| 10:57 | tanke | du | En snurra räcker inte. Skrivarna står still så fort det blir stilla. |
| 10:57 | väntar | du | En snurra räcker inte. Skrivarna står still så fort det blir stilla. |
| 10:57 | väntar | ali | Ali här. En snurra till? Taket har plats för två. Vinden har inget emot det. |
| 10:57 | sak | du | En snurra räcker inte. Skrivarna står still så fort det blir stilla. |
| 10:57 | notis | tanke | 💭 En snurra räcker inte. Skrivarna står still så fort det blir stilla. |
| 10:57 | röst | du | En snurra räcker inte. Skrivarna står still så fort det blir stilla. · STORY |
| 10:57 | toast | guld | ✅ |
| 10:57 | händelse | printKlar | sak=pall n=2 |
| 10:57 | händelse | tagitUrPrint | sak=pall n=1 |
| 11:02 | klar | du | En snurra räcker inte. Skrivarna står still så fort det blir stilla. |
| 11:04 | sak | ali | Ali här. En snurra till? Taket har plats för två. Vinden har inget emot det. |
| 11:04 | sms | ali | Ali här. En snurra till? Taket har plats för två. Vinden har inget emot det. |
| 11:04 | sms-bubbla | ali | Ali här. En snurra till? Taket har plats för två. Vinden har inget emot det. |
| 11:04 | röst | ali | Ali här. En snurra till? Taket har plats för två. Vinden har inget emot det. · STORY |
| 11:05 | aliSalt | ali | 180 |
| 11:11 | klar | ali | Ali här. En snurra till? Taket har plats för två. Vinden har inget emot det. |
| 11:15 | toast | guld | 3D-modell köpt – printa vindsnurra till skjultaket på skrivaren |
| 11:15 | händelse | kopt | sak=vindsnurra |
| 11:23 | händelse | printStart | sak=byggsats:vindsnurra |
| 11:27 | händelse | printKlar | sak=byggsats:vindsnurra n=1 |
| 11:27 | toast | guld | ✅ |
| 11:28 | väntar | info:guld | 🌬️ Vindsnurran ligger i handen – klicka på skjulet för att sätta den på taket |
| 11:28 | händelse | tagitUrPrint | sak=byggsats:vindsnurra n=1 |
| 11:28 | sak | info:guld | 🌬️ Vindsnurran ligger i handen – klicka på skjulet för att sätta den på taket |
| 11:28 | kvitto-visas | info:guld | 🌬️ Vindsnurran ligger i handen – klicka på skjulet för att sätta den på taket |
| 11:28 | toast | guld | 🌬️ Vindsnurran ligger i handen – klicka på skjulet för att sätta den på taket |
| 11:30 | klar | info:guld | 🌬️ Vindsnurran ligger i handen – klicka på skjulet för att sätta den på taket |
| 11:36 | händelse | placerat | sak=vindsnurra |
| 11:36 | väntar | info:guld | 🌬️ Vindsnurran sitter på taket – den trampar cykeln åt dig när det blåser |
| 11:36 | monterat | du | byggsats:vindsnurra |
| 11:36 | händelse | monterat | sak=vindsnurra |
| 11:36 | sak | info:guld | 🌬️ Vindsnurran sitter på taket – den trampar cykeln åt dig när det blåser |
| 11:36 | kvitto-visas | info:guld | 🌬️ Vindsnurran sitter på taket – den trampar cykeln åt dig när det blåser |
| 11:36 | toast | guld | 🌬️ Vindsnurran sitter på taket – den trampar cykeln åt dig när det blåser |
| 11:36 | händelse | malKlart | id=vind4 del=Dag 4 – Kärran och mer vind nasta=n3-isolera-tva-vaggar |
| 11:36 | väntar | du | Slut på trampandet. Nästan. |
| 11:36 | väntar | du | Det drar genom väggarna. Isolering, och sen blir det varmt. |
| 11:36 | MÅL |  | Isolera två väggar · 0/2 |
| 11:38 | klar | info:guld | 🌬️ Vindsnurran sitter på taket – den trampar cykeln åt dig när det blåser |
| 11:38 | sak | du | Slut på trampandet. Nästan. |
| 11:38 | kvitto-visas | du | Slut på trampandet. Nästan. |
| 11:38 | lapp | 📔 Dagbok | Slut på trampandet. Nästan. |
| 11:38 | dagbokrad | du | Slut på trampandet. Nästan. |
| 11:38 | notis | dagbok | Slut på trampandet. Nästan. |
| 11:38 | klar | du | Slut på trampandet. Nästan. |
| 11:38 | målruta |  | Isolera två väggar · 0/2 |
| 11:38 | sak | du | Det drar genom väggarna. Isolering, och sen blir det varmt. |
| 11:38 | pil |  | Isolera två väggar · 0/2 |
| 11:38 | notis | tanke | 💭 Det drar genom väggarna. Isolering, och sen blir det varmt. |
| 11:38 | röst | du | Det drar genom väggarna. Isolering, och sen blir det varmt. · MÅL |
| 11:39 | nick |  | nick:48 |
| 11:43 | klar | du | Det drar genom väggarna. Isolering, och sen blir det varmt. |
| 11:46 | händelse | pappa | Pappa ringer |
| 11:49 | röst | pappa | Hej. Det är pappa. · STORY |
| 11:51 | röst | du | Hej pappa. · STORY |
| 11:54 | röst | pappa | Mamma står bredvid. Hon säger att jag ska fråga om du äter. · STORY |
| 11:58 | röst | du | Jag äter. Och jag har en egen kvarn nu. Och en 3D-skrivare. · STORY |
| 12:04 | röst | pappa | Jaha. En kvarn. Vad lugnt då. · STORY |
| 12:06 | röst | pappa | Jag kanske kommer förbi nån dag. Om det passar. · STORY |
| 12:11 | röst | du | Det passar. · STORY |
| 12:14 | röst | pappa | Bra. Hej då då. · STORY |
| 12:22 | händelse | samtalSlut | id=pappa4 |
| 12:22 | struken | kedja | samtal4 |
| 12:28 | toast | guld | 3D-modell köpt – printa isolerskiva (vägg) på skrivaren |
| 12:28 | händelse | kopt | sak=vaggar |
| 12:36 | händelse | printStart | sak=byggsats:vaggar |
| 12:40 | händelse | printKlar | sak=byggsats:vaggar n=1 |
| 12:40 | toast | guld | ✅ |
| 12:41 | händelse | tagitUrPrint | sak=byggsats:vaggar n=1 |
| 12:45 | struken | mamma | Din bror säger att du har två skrivare nu. Är du med i en sekt? Du kan berätta för mig om du är med i en sekt. |
| 12:45 | väntar | info:guld | 🧱 Bakväggen klar. 3 kvar. |
| 12:45 | sak | info:guld | 🧱 Bakväggen klar. 3 kvar. |
| 12:45 | kvitto-visas | info:guld | 🧱 Bakväggen klar. 3 kvar. |
| 12:45 | toast | guld | 🧱 Bakväggen klar. 3 kvar. |
| 12:47 | klar | info:guld | 🧱 Bakväggen klar. 3 kvar. |
| 12:54 | händelse | printStart | sak=byggsats:vaggar |
| 12:58 | händelse | printKlar | sak=byggsats:vaggar n=1 |
| 12:58 | toast | guld | ✅ |
| 12:59 | händelse | tagitUrPrint | sak=byggsats:vaggar n=1 |
| 13:03 | väntar | info:guld | 🧱 Vänster vägg klar. 2 kvar. |
| 13:03 | sak | info:guld | 🧱 Vänster vägg klar. 2 kvar. |
| 13:03 | kvitto-visas | info:guld | 🧱 Vänster vägg klar. 2 kvar. |
| 13:03 | toast | guld | 🧱 Vänster vägg klar. 2 kvar. |
| 13:03 | händelse | malKlart | id=n3-isolera-tva-vaggar del=Dag 4 – Kärran och mer vind nasta=sov4 |
| 13:03 | paket |  | lapp |
| 13:03 | väntar | du | Dag 4 är slut. Nu vet grannen att jag bor HÄR. Han verkar inte glad. En skrivare räcker inte. |
| 13:03 | MÅL |  | Klart för idag – sov när du vill |
| 13:05 | klar | info:guld | 🧱 Vänster vägg klar. 2 kvar. |
| 13:06 | målruta |  | Klart för idag – sov när du vill |
| 13:07 | kvittens-bock |  | ✓ Isolera två väggar · 2/2 |
| 13:07 | sak | du | (nytt mål i rutan) |
| 13:07 | pil |  | Klart för idag – sov när du vill |
| 13:07 | klar | du | (nytt mål i rutan) |
| 13:09 | sak | du | Dag 4 är slut. Nu vet grannen att jag bor HÄR. Han verkar inte glad. En skrivare räcker inte. |
| 13:09 | lapp | 📔 Dagbok | Dag 4 är slut. Nu vet grannen att jag bor HÄR. Han verkar inte glad. En skrivare räcker inte. |
| 13:09 | kvallsrad | du | Nu vet grannen att jag bor HÄR. Han verkar inte glad. En skrivare räcker inte. |
| 13:09 | klar | du | Dag 4 är slut. Nu vet grannen att jag bor HÄR. Han verkar inte glad. En skrivare räcker inte. |
| 13:10 | väntar | notis:🌇 Klockan är 21. Ali slår igen luckan.  | 🌇 Klockan är 21. Ali slår igen luckan. Dagens jobb är klart – gå in i skjulet och sov i sängen. |
| 13:14 | nattkort | du | 🌙 Dag 4 är slut. God natt. zzz… Nu vet grannen att jag bor HÄR. Han verkar inte glad. En skrivare räcker inte. DAGENS PRINTAR Blomkruka × 10 Pall × 2 Grillspad |

<details><summary>Botens handlingar dag 4</summary>

- 0:00 — dag 4 börjar — (2155 kr)
- 0:09 popup: "FORTSÄTT" (2155 kr)
- 0:26 gå till Rolfs postlåda (28 m) (2155 kr)
- 0:34 panel: "Rolfs postlåda
Det här låg i l" (2275 kr)
- 0:35 tjänar pengar till väntar på sopbilen (BO): 2275/2335 kr → printar blomkruka (105 kr) (2275 kr)
- 0:37 inget skräp kvar att mala – väntar på sopbilen [skräp 172: lätta 169, osynliga 0, utan interaktion 0, tippen 172, ej lyftbara 3, sorter ] (2275 kr)
- 0:58 inget skräp kvar att mala – väntar på sopbilen (2275 kr)
- 1:19 inget skräp kvar att mala – väntar på sopbilen (2275 kr)
- 1:40 inget skräp kvar att mala – väntar på sopbilen (2275 kr)
- 2:01 inget skräp kvar att mala – väntar på sopbilen (2275 kr)
- 2:01 blomkruka gick inte att printa – tar nästa (2275 kr)
- 2:08 gå till Ali (38 m) (2275 kr)
- 2:08 öppnar Alis butik – sälja (2275 kr)
- 2:11 tjänar pengar till väntar på sopbilen (BO): 2275/2335 kr → printar nyckelring (15 kr) (2275 kr)
- 2:19 inget skräp kvar att mala – väntar på sopbilen [skräp 168: lätta 165, osynliga 0, utan interaktion 0, tippen 168, ej lyftbara 3, sorter ] (2275 kr)
- 2:41 inget skräp kvar att mala – väntar på sopbilen (2275 kr)
- 3:02 inget skräp kvar att mala – väntar på sopbilen (2275 kr)
- 3:22 inget skräp kvar att mala – väntar på sopbilen (2275 kr)
- 3:43 inget skräp kvar att mala – väntar på sopbilen (2275 kr)
- 3:43 nyckelring gick inte att printa – tar nästa (2275 kr)
- 3:51 gå till Ali (39 m) (2275 kr)
- 3:51 öppnar Alis butik – sälja (2275 kr)
- 3:54 inget att printa och sälja – väntar på sopbilen (2275 kr)
- 4:31 gå till Rolfs postlåda (31 m) (2275 kr)
- 4:34 inget skräp kvar att mala – väntar på sopbilen [skräp 171: lätta 168, osynliga 0, utan interaktion 0, tippen 171, ej lyftbara 3, sorter ] (2275 kr)
- 5:00 plockar 5 skräp på tippen (bär max 16) (2275 kr)
- 5:03 gå till kvarnen (12 m) (2275 kr)
- 5:10 gå till skrivaren (5 m) (2275 kr)
- 5:11 printar Grillspade (2275 kr)
- 5:16 tar ut 1 st ur skrivaren (2275 kr)
- 5:18 valj grillspade: true, vald grillspade, post {"l":null,"tr":null,"tm":[]}, nummer false (2275 kr)
- 5:20 gå till Rolfs postlåda (8 m) (2275 kr)
- 5:36 fyller kärran med 8 skräp (2275 kr)
- 5:39 gå till kvarnen (11 m) (2275 kr)
- 5:51 tjänar pengar till väntar på flaskhalsen för matarband: 2275/2315 kr → printar blomkruka (105 kr) (2275 kr)
- 5:53 gå till skrivaren (5 m) (2275 kr)
- 5:54 printar Blomkruka (2275 kr)
- 5:58 tar ut 1 st ur skrivaren (2275 kr)
- 6:04 gå till Ali (26 m) (2275 kr)
- 6:04 öppnar Alis butik – sälja (2275 kr)
- 6:05 säljer hos Ali: +105 kr (2380 kr)
- 6:06 tjänar pengar till väntar på flaskhalsen för matarband: 2380/2420 kr → printar blomkruka (105 kr) (2380 kr)
- 6:12 gå till skrivaren (24 m) (2380 kr)
- 6:13 printar Blomkruka (2380 kr)
- 6:17 tar ut 1 st ur skrivaren (2380 kr)
- 6:22 gå till Ali (24 m) (2380 kr)
- 6:22 öppnar Alis butik – sälja (2380 kr)
- 6:24 säljer hos Ali: +105 kr (2485 kr)
- 6:26 tjänar pengar till väntar på flaskhalsen för matarband: 2485/2525 kr → printar blomkruka (105 kr) (2485 kr)
- 6:31 gå till skrivaren (24 m) (2485 kr)
- 6:33 printar Blomkruka (2485 kr)
- 6:37 tar ut 1 st ur skrivaren (2485 kr)
- 6:42 gå till Ali (24 m) (2485 kr)
- 6:42 öppnar Alis butik – sälja (2485 kr)
- 6:44 säljer hos Ali: +105 kr (2590 kr)
- 6:52 tjänar pengar till väntar på flaskhalsen för matarband: 2590/2630 kr → printar blomkruka (105 kr) (2590 kr)
- 6:58 gå till skrivaren (24 m) (2590 kr)
- 6:59 printar Blomkruka (2590 kr)
- 7:03 tar ut 1 st ur skrivaren (2590 kr)
- 7:08 gå till Ali (24 m) (2590 kr)
- 7:08 öppnar Alis butik – sälja (2590 kr)
- 7:10 säljer hos Ali: +105 kr (2695 kr)
- 7:12 tjänar pengar till väntar på flaskhalsen för matarband: 2695/2735 kr → printar blomkruka (105 kr) (2695 kr)
- 7:17 gå till skrivaren (24 m) (2695 kr)
- 7:19 printar Blomkruka (2695 kr)
- 7:23 tar ut 1 st ur skrivaren (2695 kr)
- 7:28 gå till Ali (24 m) (2695 kr)
- 7:28 öppnar Alis butik – sälja (2695 kr)
- 7:30 säljer hos Ali: +105 kr (2800 kr)
- 7:32 tjänar pengar till väntar på flaskhalsen för matarband: 2800/2840 kr → printar blomkruka (105 kr) (2800 kr)
- 7:37 gå till skrivaren (24 m) (2800 kr)
- 7:39 printar Blomkruka (2800 kr)
- 7:43 tar ut 1 st ur skrivaren (2800 kr)
- 7:48 gå till Ali (24 m) (2800 kr)
- 7:48 öppnar Alis butik – sälja (2800 kr)
- 7:50 säljer hos Ali: +3 kr (2803 kr)
- 7:51 tjänar pengar till väntar på flaskhalsen för matarband: 2803/2840 kr → printar blomkruka (105 kr) (2803 kr)
- 7:56 gå till skrivaren (24 m) (2803 kr)
- 7:57 printar Blomkruka (2803 kr)
- 8:00 gå till kvarnen (1 m) (2803 kr)
- 8:02 gå till skrivaren (4 m) (2803 kr)
- 8:02 tar ut 1 st ur skrivaren (2803 kr)
- 8:08 gå till Ali (26 m) (2803 kr)
- 8:08 öppnar Alis butik – sälja (2803 kr)
- 8:10 säljer hos Ali: +105 kr (2908 kr)
- 8:12 tjänar pengar till väntar på flaskhalsen för matarband: 2908/2948 kr → printar blomkruka (105 kr) (2908 kr)
- 8:17 gå till skrivaren (24 m) (2908 kr)
- 8:18 printar Blomkruka (2908 kr)
- 8:22 tar ut 1 st ur skrivaren (2908 kr)
- 8:28 gå till Ali (24 m) (2908 kr)
- 8:28 öppnar Alis butik – sälja (2908 kr)
- 8:29 säljer hos Ali: +105 kr (3013 kr)
- 8:31 tjänar pengar till väntar på flaskhalsen för matarband: 3013/3053 kr → printar blomkruka (105 kr) (3013 kr)
- 8:37 gå till skrivaren (24 m) (3013 kr)
- 8:38 printar Blomkruka (3013 kr)
- 8:42 tar ut 1 st ur skrivaren (3013 kr)
- 8:47 gå till Ali (24 m) (3013 kr)
- 8:47 öppnar Alis butik – sälja (3013 kr)
- 8:49 säljer hos Ali: +105 kr (3118 kr)
- 8:51 tjänar pengar till väntar på flaskhalsen för matarband: 3118/3158 kr → printar blomkruka (105 kr) (3118 kr)
- 8:56 gå till skrivaren (24 m) (3118 kr)
- 8:58 printar Blomkruka (3118 kr)
- 9:02 tar ut 1 st ur skrivaren (3118 kr)
- 9:07 gå till Ali (24 m) (3118 kr)
- 9:07 öppnar Alis butik – sälja (3118 kr)
- 9:09 säljer hos Ali: +105 kr (3223 kr)
- 9:20 öppnar Alis butik – köpa sophållare (3223 kr)
- 9:22 köper matarband för 120 kr (3103 kr)
- 9:28 gå till skrivaren (24 m) (3103 kr)
- 9:30 printar Sophållare (3 delar) (3103 kr)
- 9:49 tar ut 1 st ur skrivaren (3103 kr)
- 9:50 gå till kvarnen (5 m) (3103 kr)
- 10:10 gå till Ali (29 m) (3103 kr)
- 10:10 öppnar Alis butik – köpa receptet pall (3103 kr)
- 10:13 köper pall för 80 kr (3023 kr)
- 10:26 plockar 3 skräp på tippen (bär max 16) (3023 kr)
- 10:28 gå till kvarnen (13 m) (3023 kr)
- 10:31 gå till skrivaren (5 m) (3023 kr)
- 10:33 printar Pall (3023 kr)
- 10:39 tar ut 1 st ur skrivaren (3023 kr)
- 10:44 gå till platsen för pall (23 m) (3023 kr)
- 10:45 ställer ut pall (3023 kr)
- 10:46 tjänar pengar till väntar på flaskhalsen för vindsnurra2: 3023/3063 kr → printar pall (180 kr) (3023 kr)
- 10:50 gå till skrivaren (20 m) (3023 kr)
- 10:52 printar Pall (3023 kr)
- 10:58 tar ut 1 st ur skrivaren (3023 kr)
- 11:03 gå till Ali (24 m) (3023 kr)
- 11:03 öppnar Alis butik – sälja (3023 kr)
- 11:05 säljer hos Ali: +180 kr (3203 kr)
- 11:13 öppnar Alis butik – köpa vindsnurra till skjultaket (3203 kr)
- 11:15 köper vindsnurra för 133 kr (3070 kr)
- 11:22 gå till skrivaren (24 m) (3070 kr)
- 11:23 printar Vindsnurra till skjultaket (3070 kr)
- 11:28 tar ut 1 st ur skrivaren (3070 kr)
- 11:36 gå till sätt vindsnurran på taket (18 m) (3070 kr)
- 11:49 popup: "Svara E" (3070 kr)
- 11:55 popup: "Nästa E" (3070 kr)
- 12:05 popup: "Nästa E" (3070 kr)
- 12:12 popup: "Nästa E" (3070 kr)
- 12:17 popup: "Nästa E" (3070 kr)
- 12:22 popup: "Lägg på E" (3070 kr)
- 12:26 gå till Ali (20 m) (3070 kr)
- 12:26 öppnar Alis butik – köpa isolerskiva (vägg) (3070 kr)
- 12:28 köper vaggar för 130 kr (2940 kr)
- 12:35 gå till skrivaren (24 m) (2940 kr)
- 12:36 printar Isolerskiva (vägg) (2940 kr)
- 12:41 tar ut 1 st ur skrivaren (2940 kr)
- 12:45 gå till skjulet (bak) (17 m) (2940 kr)
- 12:53 gå till skrivaren (17 m) (2940 kr)
- 12:54 printar Isolerskiva (vägg) (2940 kr)
- 12:59 tar ut 1 st ur skrivaren (2940 kr)
- 13:03 gå till skjulet (vanster) (17 m) (2940 kr)
- 13:12 gå till sängen (1 m) (2940 kr)

</details>

## Dag 5

| Tid | Källa | Vem | Text |
|---|---|---|---|
| 13:14 | vara | ali | pall |
| 13:14 | händelse | malKlart | id=sov4 del=Dag 4 – Kärran och mer vind nasta=rolf3-brev |
| 13:14 | MÅL |  | Vänta på sopbilen. Den lämnar något. |
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
| 0:29 | skratt | du | falsk tuta |
| 0:31 | väntar | rolf | Grillspaden ä ju KONST. Pengar i lådan. /Rolf |
| 0:32 | väntar | mamma | Det finns måsar vid soptippar! Dom tar mat. Och små hundar. Du är inte en liten hund men ändå. |
| 0:37 | toast | skak | handen skakar: fullt |
| 0:43 | sak | mamma | Det finns måsar vid soptippar! Dom tar mat. Och små hundar. Du är inte en liten hund men ändå. |
| 0:43 | sms | mamma | Det finns måsar vid soptippar! Dom tar mat. Och små hundar. Du är inte en liten hund men ändå. |
| 0:43 | sms-bubbla | mamma | Det finns måsar vid soptippar! Dom tar mat. Och små hundar. Du är inte en liten hund men ändå. |
| 0:43 | röst | mamma | Det finns måsar vid soptippar! Dom tar mat. Och små hundar. Du är inte en liten hund men ändå. · STORY |
| 0:43 | väntar | info:guld | 🚛 Rolf tippade DUBBEL last på soptippen! |
| 0:45 | kvitto-visas | info:guld | 🚛 Rolf tippade DUBBEL last på soptippen! |
| 0:45 | toast | guld | 🚛 Rolf tippade DUBBEL last på soptippen! |
| 0:47 | händelse | printStart | sak=pall |
| 0:51 | klar | mamma | Det finns måsar vid soptippar! Dom tar mat. Och små hundar. Du är inte en liten hund men ändå. |
| 0:53 | toast | guld | ✅ |
| 0:53 | händelse | printKlar | sak=pall n=3 |
| 0:53 | händelse | tagitUrPrint | sak=pall n=1 |
| 0:59 | röst | ali | Du printar mina ritningar. Ingen har gjort det förut. Jag är inte rörd. Det är dammet. · STORY |
| 0:59 | butiksbubbla | ali | Du printar mina ritningar. Ingen har gjort det förut. Jag är inte rörd. Det är dammet. |
| 1:01 | aliSalt | ali | 270 |
| 1:10 | händelse | printStart | sak=pall |
| 1:15 | toast | guld | ✅ |
| 1:15 | händelse | printKlar | sak=pall n=4 |
| 1:15 | händelse | tagitUrPrint | sak=pall n=1 |
| 1:23 | aliSalt | ali | 257 |
| 1:38 | toast | skak | handen skakar: fullt |
| 1:46 | händelse | printStart | sak=pall |
| 1:52 | toast | guld | ✅ |
| 1:52 | händelse | printKlar | sak=pall n=5 |
| 1:52 | händelse | tagitUrPrint | sak=pall n=1 |
| 1:56 | väntar | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har börjat isolera. Och pall. Det är stort, Gunnar. |
| 1:56 | radio | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har börjat isolera. Och pall. Det är stort, Gunnar. |
| 1:56 | skratt | du | Radio-Kjelle |
| 1:56 | sak | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har börjat isolera. Och pall. Det är stort, Gunnar. |
| 1:56 | notis |  | 📻 Radio Tippen: Radio Tippen, Kjelle här. Skjulet vid tippen har börjat isolera. Och pall. Det är stort, Gunnar. |
| 1:56 | röst | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har börjat isolera. Och pall. Det är stort, Gunnar. · REAKTION |
| 2:00 | aliSalt | ali | 244 |
| 2:04 | klar | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har börjat isolera. Och pall. Det är stort, Gunnar. |
| 2:13 | händelse | printStart | sak=pall |
| 2:19 | toast | guld | ✅ |
| 2:19 | händelse | printKlar | sak=pall n=6 |
| 2:19 | händelse | tagitUrPrint | sak=pall n=1 |
| 2:23 | väntar | ali | Sålt nåt idag? Jag köper. |
| 2:24 | sak | ali | Sålt nåt idag? Jag köper. |
| 2:24 | röst | ali | Sålt nåt idag? Jag köper. · SMÅPRAT |
| 2:25 | bubbla |  | Sålt nåt idag? Jag köper. |
| 2:26 | klar | ali | Sålt nåt idag? Jag köper. |
| 2:26 | aliSalt | ali | 231 |
| 2:36 | händelse | printStart | sak=pall |
| 2:42 | toast | guld | ✅ |
| 2:42 | händelse | printKlar | sak=pall n=7 |
| 2:42 | händelse | tagitUrPrint | sak=pall n=1 |
| 2:44 | väntar | info:fel | Göran snodde pall. |
| 2:44 | paket |  | tanke → tanke |
| 2:44 | tanke | du | HALLÅ! Den där måsen tog min grej! |
| 2:44 | väntar | du | HALLÅ! Den där måsen tog min grej! |
| 2:44 | tanke | du | Mamma hade rätt. Säg inget till henne. |
| 2:44 | väntar | du | Mamma hade rätt. Säg inget till henne. |
| 2:44 | paket |  | sms |
| 2:44 | väntar | rolf | Dä ä Göran. Han ä från 2014. Han tar int skräp, bara grejer som e fina. MVH ROLF |
| 2:45 | skratt | du | falsk tuta |
| 2:45 | sak | info:fel | Göran snodde pall. |
| 2:45 | kvitto-visas | info:fel | Göran snodde pall. |
| 2:45 | toast | fel | Göran snodde pall. |
| 2:47 | klar | info:fel | Göran snodde pall. |
| 2:56 | sak | du | HALLÅ! Den där måsen tog min grej! |
| 2:56 | notis | tanke | 💭 HALLÅ! Den där måsen tog min grej! |
| 2:56 | röst | du | HALLÅ! Den där måsen tog min grej! · STORY |
| 2:57 | händelse | printStart | sak=pall |
| 2:59 | klar | du | HALLÅ! Den där måsen tog min grej! |
| 3:02 | toast | guld | ✅ |
| 3:02 | händelse | printKlar | sak=pall n=8 |
| 3:03 | händelse | tagitUrPrint | sak=pall n=1 |
| 3:07 | upplåst | skrivare | trim_skrivare3 |
| 3:07 | brott | UPPLÅST | trim_skrivare3 (skrivare 281 av 75) |
| 3:07 | händelse | upplast | id=trim_skrivare3 flask=skrivare |
| 3:07 | paket |  | tanke → sms |
| 3:07 | tanke | du | Fortare. Den kan gå ännu fortare. Jag hör det på den. |
| 3:07 | väntar | du | Fortare. Den kan gå ännu fortare. Jag hör det på den. |
| 3:07 | väntar | ali | Ali här. Sista skrivartrimmen. Efter den går den inte att göra bättre. Då får du bygga en större. |
| 3:08 | sak | du | Mamma hade rätt. Säg inget till henne. |
| 3:08 | notis | tanke | 💭 Mamma hade rätt. Säg inget till henne. |
| 3:08 | röst | du | Mamma hade rätt. Säg inget till henne. · STORY |
| 3:10 | aliSalt | ali | 220 |
| 3:11 | klar | du | Mamma hade rätt. Säg inget till henne. |
| 3:14 | väntar | foto | Göran. Tjuv. |
| 3:14 | paket |  | tanke |
| 3:14 | tanke | du | Okej, Göran. Nästa gång är jag beredd. |
| 3:14 | väntar | du | Okej, Göran. Nästa gång är jag beredd. |
| 3:20 | sak | du | Fortare. Den kan gå ännu fortare. Jag hör det på den. |
| 3:20 | notis | tanke | 💭 Fortare. Den kan gå ännu fortare. Jag hör det på den. |
| 3:20 | röst | du | Fortare. Den kan gå ännu fortare. Jag hör det på den. · STORY |
| 3:20 | händelse | printStart | sak=pall |
| 3:24 | klar | du | Fortare. Den kan gå ännu fortare. Jag hör det på den. |
| 3:25 | toast | guld | ✅ |
| 3:25 | händelse | printKlar | sak=pall n=9 |
| 3:26 | händelse | tagitUrPrint | sak=pall n=1 |
| 3:32 | sak | ali | Ali här. Sista skrivartrimmen. Efter den går den inte att göra bättre. Då får du bygga en större. |
| 3:32 | sms | ali | Ali här. Sista skrivartrimmen. Efter den går den inte att göra bättre. Då får du bygga en större. |
| 3:32 | sms-bubbla | ali | Ali här. Sista skrivartrimmen. Efter den går den inte att göra bättre. Då får du bygga en större. |
| 3:32 | röst | ali | Ali här. Sista skrivartrimmen. Efter den går den inte att göra bättre. Då får du bygga en större. · STORY |
| 3:33 | aliSalt | ali | 209 |
| 3:36 | väntar | mamma | Rolf på sopbilen ringde. Han säger att du städar? Vem är du och vad har du gjort med mitt barn? ❤️ |
| 3:40 | klar | ali | Ali här. Sista skrivartrimmen. Efter den går den inte att göra bättre. Då får du bygga en större. |
| 3:48 | sak | foto | Göran. Tjuv. |
| 3:48 | foto | du | Göran. Tjuv. |
| 3:51 | klar | foto | Göran. Tjuv. |
| 3:55 | toast | skak | handen skakar: fullt |
| 3:59 | sak | du | Okej, Göran. Nästa gång är jag beredd. |
| 3:59 | notis | tanke | 💭 Okej, Göran. Nästa gång är jag beredd. |
| 3:59 | röst | du | Okej, Göran. Nästa gång är jag beredd. · STORY |
| 4:02 | klar | du | Okej, Göran. Nästa gång är jag beredd. |
| 4:07 | händelse | printStart | sak=pall |
| 4:07 | paket |  | tanke |
| 4:07 | tanke | du | Kajsa. Ut ur skrivaren. Nu. |
| 4:07 | väntar | du | Kajsa. Ut ur skrivaren. Nu. |
| 4:07 | skratt | du | Kajsa i skrivaren |
| 4:11 | sak | du | Kajsa. Ut ur skrivaren. Nu. |
| 4:11 | notis | tanke | 💭 Kajsa. Ut ur skrivaren. Nu. |
| 4:11 | röst | du | Kajsa. Ut ur skrivaren. Nu. · REAKTION |
| 4:12 | toast | guld | ✅ |
| 4:12 | händelse | printKlar | sak=pall n=10 |
| 4:12 | händelse | tagitUrPrint | sak=pall n=1 |
| 4:14 | klar | du | Kajsa. Ut ur skrivaren. Nu. |
| 4:20 | aliSalt | ali | 198 |
| 4:27 | väntar | värld:TUUT! Hej grannen! | TUUT! Hej grannen! |
| 4:27 | paket |  | ge |
| 4:27 | väntar |  | (läget ändras) |
| 4:27 | sak | värld:TUUT! Hej grannen! | TUUT! Hej grannen! |
| 4:27 | bubbla |  | TUUT! Hej grannen! |
| 4:27 | skratt | du | falsk tuta |
| 4:30 | klar | värld:TUUT! Hej grannen! | TUUT! Hej grannen! |
| 4:30 | händelse | printStart | sak=pall |
| 4:35 | skratt | du | plastspagetti |
| 4:35 | toast | guld | ✅ |
| 4:35 | händelse | printKlar | sak=pall n=11 |
| 4:36 | händelse | tagitUrPrint | sak=spagetti n=1 |
| 4:38 | sak |  | (läget ändras) |
| 4:38 | brev | rolf | rolf:3 |
| 4:38 | klar |  | (läget ändras) |
| 4:43 | skratt | du | Ali köper konst |
| 4:43 | aliSalt | ali | 3 |
| 4:48 | väntar | mamma | Jag sa till pappa att du bor på en soptipp. Han sa "aha, vad lugnt då" och satte på Formel 1. Lugnt? |
| 4:51 | händelse | printStart | sak=pall |
| 4:56 | toast | guld | ✅ |
| 4:56 | händelse | printKlar | sak=pall n=12 |
| 4:57 | händelse | tagitUrPrint | sak=pall n=1 |
| 5:04 | aliSalt | ali | 189 |
| 5:14 | väntar | rolf | Tjo. Flaket ä så trist. En tomte mä luva o skägg, kan du göra en sån? /Rolf 🎅​ |
| 5:14 | paket |  | ge |
| 5:14 | väntar |  | (läget ändras) |
| 5:14 | sak | rolf | Tjo. Flaket ä så trist. En tomte mä luva o skägg, kan du göra en sån? /Rolf 🎅​ |
| 5:14 | lapp | Brev från Rolf | Tjo. Flaket ä så trist. En tomte mä luva o skägg, kan du göra en sån? /Rolf 🎅​ |
| 5:14 | röst | rolf | Tjo. Flaket ä så trist. En tomte mä luva o skägg, kan du göra en sån? /Rolf 🎅​ · STORY |
| 5:14 | händelse | malKlart | id=rolf3-brev del=Dag 5 – Tätt och mysigt nasta=rolf3-printa |
| 5:14 | väntar | du | Printa trädgårdstomte till flaket. |
| 5:14 | MÅL |  | Printa trädgårdstomte till flaket |
| 5:17 | målruta |  | Printa trädgårdstomte till flaket |
| 5:18 | händelse | printStart | sak=tomte |
| 5:18 | händelse | malKlart | id=rolf3-printa del=Dag 5 – Tätt och mysigt nasta=rolf3-ge |
| 5:18 | väntar | du | Ge Rolf trädgårdstomte till flaket. |
| 5:18 | MÅL |  | Ge Rolf trädgårdstomte till flaket |
| 5:20 | klar | rolf | Tjo. Flaket ä så trist. En tomte mä luva o skägg, kan du göra en sån? /Rolf 🎅​ |
| 5:20 | händelse | brevLast | id=rolf:3 |
| 5:22 | målruta |  | Ge Rolf trädgårdstomte till flaket |
| 5:22 | kvittens-bock |  | ✓ Printa trädgårdstomte till flaket |
| 5:22 | struken | du | Printa trädgårdstomte till flaket. |
| 5:22 | sak |  | (läget ändras) |
| 5:22 | klar |  | (läget ändras) |
| 5:22 | sak | du | Ge Rolf trädgårdstomte till flaket. |
| 5:22 | pil |  | Ge Rolf trädgårdstomte till flaket |
| 5:22 | röst | du | Ge Rolf trädgårdstomte till flaket. · MÅL |
| 5:23 | toast | guld | ✅ |
| 5:23 | händelse | printKlar | sak=tomte n=1 |
| 5:24 | händelse | tagitUrPrint | sak=tomte n=1 |
| 5:25 | klar | du | Ge Rolf trädgårdstomte till flaket. |
| 5:29 | händelse | lagtIPostlada | sak=tomte rolf=3 jobb=false |
| 5:29 | struken | kedja | rolf3 |
| 5:29 | händelse | malKlart | id=rolf3-ge del=Dag 5 – Tätt och mysigt nasta=n4-isolera-de-sista |
| 5:29 | väntar | du | Två väggar kvar i skjulet. Sen är det tätt. |
| 5:29 | målruta |  | Isolera de sista väggarna · 2/4 |
| 5:29 | MÅL |  | Isolera de sista väggarna · 2/4 |
| 5:29 | sak | du | Två väggar kvar i skjulet. Sen är det tätt. |
| 5:29 | pil |  | Isolera de sista väggarna · 2/4 |
| 5:29 | notis | tanke | 💭 Två väggar kvar i skjulet. Sen är det tätt. |
| 5:29 | röst | du | Två väggar kvar i skjulet. Sen är det tätt. · MÅL |
| 5:30 | nick |  | nick:53 |
| 5:33 | klar | du | Två väggar kvar i skjulet. Sen är det tätt. |
| 5:33 | kvittens-bock |  | ✓ Ge Rolf trädgårdstomte till flaket |
| 5:38 | händelse | printStart | sak=byggsats:vaggar |
| 5:42 | händelse | printKlar | sak=byggsats:vaggar n=1 |
| 5:42 | toast | guld | ✅ |
| 5:43 | händelse | tagitUrPrint | sak=byggsats:vaggar n=1 |
| 5:47 | väntar | info:guld | 🧱 Höger vägg klar. 1 kvar. |
| 5:47 | sak | info:guld | 🧱 Höger vägg klar. 1 kvar. |
| 5:47 | kvitto-visas | info:guld | 🧱 Höger vägg klar. 1 kvar. |
| 5:47 | toast | guld | 🧱 Höger vägg klar. 1 kvar. |
| 5:49 | klar | info:guld | 🧱 Höger vägg klar. 1 kvar. |
| 6:00 | väntar | värld:Mjau. | Mjau. |
| 6:05 | sak | värld:Mjau. | Mjau. |
| 6:05 | bubbla |  | Mjau. |
| 6:07 | klar | värld:Mjau. | Mjau. |
| 6:11 | händelse | printStart | sak=byggsats:vaggar |
| 6:15 | händelse | printKlar | sak=byggsats:vaggar n=1 |
| 6:15 | toast | guld | ✅ |
| 6:16 | händelse | tagitUrPrint | sak=byggsats:vaggar n=1 |
| 6:20 | väntar | info:guld | 🧱 Skjulet är tätt! |
| 6:20 | sak | info:guld | 🧱 Skjulet är tätt! |
| 6:20 | kvitto-visas | info:guld | 🧱 Skjulet är tätt! |
| 6:20 | toast | guld | 🧱 Skjulet är tätt! |
| 6:20 | händelse | malKlart | id=n4-isolera-de-sista del=Dag 5 – Tätt och mysigt nasta=dator |
| 6:20 | struken | kedja | vaggar |
| 6:20 | väntar | du | Alis pappas dator. Med den kan jag sälja på nätet. |
| 6:20 | MÅL |  | Köp Alis pappas gamla dator |
| 6:22 | klar | info:guld | 🧱 Skjulet är tätt! |
| 6:22 | målruta |  | Köp Alis pappas gamla dator |
| 6:24 | kvittens-bock |  | ✓ Isolera de sista väggarna · 4/4 |
| 6:24 | sak | du | Alis pappas dator. Med den kan jag sälja på nätet. |
| 6:24 | pil |  | Köp Alis pappas gamla dator |
| 6:24 | notis | tanke | 💭 Alis pappas dator. Med den kan jag sälja på nätet. |
| 6:24 | röst | du | Alis pappas dator. Med den kan jag sälja på nätet. · MÅL |
| 6:25 | nick |  | nick:54 |
| 6:28 | klar | du | Alis pappas dator. Med den kan jag sälja på nätet. |
| 6:30 | paket |  | tanke |
| 6:30 | tanke | du | Jaha, Rolf har hämtat trädgårdstomte till flaket. |
| 6:30 | väntar | du | Jaha, Rolf har hämtat trädgårdstomte till flaket. |
| 6:36 | toast | guld | 🖥️ Datorn är din – ställ den i skjulet |
| 6:36 | händelse | kopt | sak=webbdator |
| 6:36 | röst | ali | Pappas gamla dator. Den har ett modem. Det låter som en fax som gråter. Men du kommer ut på nätet. · STORY |
| 6:36 | butiksbubbla | ali | Pappas gamla dator. Den har ett modem. Det låter som en fax som gråter. Men du kommer ut på nätet. |
| 6:45 | händelse | printStart | sak=byggsats:webbdator |
| 6:45 | händelse | printKlar | sak=byggsats:webbdator n=1 |
| 6:45 | toast | guld | ✅ |
| 6:46 | skratt | du | däcket rullar iväg |
| 6:46 | händelse | tagitUrPrint | sak=byggsats:webbdator n=1 |
| 6:51 | sak | du | Jaha, Rolf har hämtat trädgårdstomte till flaket. |
| 6:51 | notis | tanke | 💭 Jaha, Rolf har hämtat trädgårdstomte till flaket. |
| 6:51 | röst | du | Jaha, Rolf har hämtat trädgårdstomte till flaket. · REAKTION |
| 6:52 | händelse | placerat | sak=webbdator |
| 6:52 | paket |  | tanke |
| 6:52 | tanke | du | En webbshop. Från ett skjul. Med modem. Varför inte. |
| 6:52 | väntar | du | En webbshop. Från ett skjul. Med modem. Varför inte. |
| 6:52 | händelse | malKlart | id=dator del=Dag 5 – Tätt och mysigt nasta=lampskarm |
| 6:52 | väntar | du | En lampskärm. Folk betalar för ljus som ser fint ut. |
| 6:52 | MÅL |  | Printa en lampskärm att sälja |
| 6:53 | skratt | du | falsk tuta |
| 6:55 | klar | du | Jaha, Rolf har hämtat trädgårdstomte till flaket. |
| 6:56 | målruta |  | Printa en lampskärm att sälja |
| 6:56 | kvittens-bock |  | ✓ Ställ datorn i skjulet |
| 6:57 | sak | du | En lampskärm. Folk betalar för ljus som ser fint ut. |
| 6:57 | pil |  | Printa en lampskärm att sälja |
| 6:57 | notis | tanke | 💭 En lampskärm. Folk betalar för ljus som ser fint ut. |
| 6:57 | röst | du | En lampskärm. Folk betalar för ljus som ser fint ut. · MÅL |
| 6:57 | nick |  | nick:55 |
| 7:01 | klar | du | En lampskärm. Folk betalar för ljus som ser fint ut. |
| 7:02 | väntar | mamma | Sover du ordentligt? Du ser trött ut. Jag vet att jag inte kan se dig. Men jag vet. |
| 7:09 | sak | du | En webbshop. Från ett skjul. Med modem. Varför inte. |
| 7:09 | notis | tanke | 💭 En webbshop. Från ett skjul. Med modem. Varför inte. |
| 7:09 | röst | du | En webbshop. Från ett skjul. Med modem. Varför inte. · STORY |
| 7:14 | klar | du | En webbshop. Från ett skjul. Med modem. Varför inte. |
| 7:16 | händelse | printStart | sak=lampskarm |
| 7:23 | toast | guld | ✅ |
| 7:23 | händelse | printKlar | sak=lampskarm n=1 |
| 7:23 | händelse | malKlart | id=lampskarm del=Dag 5 – Tätt och mysigt nasta=mysigt |
| 7:23 | väntar | du | Skjulet ska bli mysigt på riktigt. Det är mitt hem nu. |
| 7:23 | målruta |  | Gör det mysigt · trivsel 104/130 |
| 7:23 | MÅL |  | Gör det mysigt · trivsel 104/130 |
| 7:23 | sak | du | Skjulet ska bli mysigt på riktigt. Det är mitt hem nu. |
| 7:23 | pil |  | Gör det mysigt · trivsel 104/130 |
| 7:23 | notis | tanke | 💭 Skjulet ska bli mysigt på riktigt. Det är mitt hem nu. |
| 7:23 | röst | du | Skjulet ska bli mysigt på riktigt. Det är mitt hem nu. · MÅL |
| 7:23 | händelse | tagitUrPrint | sak=lampskarm n=1 |
| 7:23 | nick |  | nick:56 |
| 7:27 | kvittens-bock |  | ✓ Printa en lampskärm att sälja |
| 7:27 | klar | du | Skjulet ska bli mysigt på riktigt. Det är mitt hem nu. |
| 7:36 | toast | guld | 3D-modell köpt – printa fönster på skrivaren |
| 7:36 | händelse | kopt | sak=fonster |
| 7:45 | händelse | printStart | sak=byggsats:fonster |
| 7:48 | toast | bra | Del 1 av 2 klar |
| 7:48 | paket |  | tanke |
| 7:48 | tanke | du | En tandborste. Den har varit på fel ställe. |
| 7:48 | väntar | du | En tandborste. Den har varit på fel ställe. |
| 7:48 | skratt | du | kvarnen spottar |
| 7:49 | sak | du | En tandborste. Den har varit på fel ställe. |
| 7:49 | notis | tanke | 💭 En tandborste. Den har varit på fel ställe. |
| 7:49 | röst | du | En tandborste. Den har varit på fel ställe. · REAKTION |
| 7:52 | händelse | printKlar | sak=byggsats:fonster n=1 |
| 7:52 | toast | guld | ✅ |
| 7:52 | klar | du | En tandborste. Den har varit på fel ställe. |
| 7:53 | händelse | tagitUrPrint | sak=byggsats:fonster n=1 |
| 7:53 | paket |  | sms |
| 7:53 | väntar | ali | Ali här. Fönster – printad. På riktigt. Jag har visat bilden för min fru tre gånger. |
| 8:01 | sak | ali | Ali här. Fönster – printad. På riktigt. Jag har visat bilden för min fru tre gånger. |
| 8:01 | sms | ali | Ali här. Fönster – printad. På riktigt. Jag har visat bilden för min fru tre gånger. |
| 8:01 | sms-bubbla | ali | Ali här. Fönster – printad. På riktigt. Jag har visat bilden för min fru tre gånger. |
| 8:01 | röst | ali | Ali här. Fönster – printad. På riktigt. Jag har visat bilden för min fru tre gånger. · REAKTION |
| 8:02 | toast | guld | 3D-modell köpt – printa trägolv på skrivaren |
| 8:02 | händelse | kopt | sak=golv |
| 8:08 | klar | ali | Ali här. Fönster – printad. På riktigt. Jag har visat bilden för min fru tre gånger. |
| 8:22 | händelse | printStart | sak=byggsats:golv |
| 8:25 | toast | bra | Del 1 av 3 klar |
| 8:29 | toast | bra | Del 2 av 3 klar |
| 8:32 | händelse | printKlar | sak=byggsats:golv n=1 |
| 8:32 | toast | guld | ✅ |
| 8:33 | händelse | tagitUrPrint | sak=byggsats:golv n=1 |
| 8:36 | väntar | rolf | Kajsa la en död mus på min kudde. De e kärlek. Hon får lax ikväll. /R |
| 8:37 | väntar | info:guld | Trägolv på plats! Trivsel +8 · Ali betalar nu +0 % |
| 8:37 | sak | info:guld | Trägolv på plats! Trivsel +8 · Ali betalar nu +0 % |
| 8:37 | kvitto-visas | info:guld | Trägolv på plats! Trivsel +8 · Ali betalar nu +0 % |
| 8:37 | toast | guld | Trägolv på plats! Trivsel +8 · Ali betalar nu +0 % |
| 8:39 | klar | info:guld | Trägolv på plats! Trivsel +8 · Ali betalar nu +0 % |
| 8:47 | händelse | printStart | sak=pall |
| 8:47 | väntar | värld:TUUT! Tjena! | TUUT! Tjena! |
| 8:50 | sak | värld:TUUT! Tjena! | TUUT! Tjena! |
| 8:50 | bubbla |  | TUUT! Tjena! |
| 8:52 | toast | guld | ✅ |
| 8:52 | händelse | printKlar | sak=pall n=13 |
| 8:52 | händelse | tagitUrPrint | sak=pall n=1 |
| 8:53 | klar | värld:TUUT! Tjena! | TUUT! Tjena! |
| 8:57 | händelse | placerat | sak=pall |
| 9:04 | toast | guld | 3D-modell köpt – printa taklampa med skärm på skrivaren |
| 9:04 | händelse | kopt | sak=taklampa |
| 9:13 | händelse | printStart | sak=byggsats:taklampa |
| 9:15 | händelse | printKlar | sak=byggsats:taklampa n=1 |
| 9:15 | toast | guld | ✅ |
| 9:16 | händelse | tagitUrPrint | sak=byggsats:taklampa n=1 |
| 9:20 | väntar | info:guld | Taklampa med skärm på plats! Trivsel +6 · Ali betalar nu +0 % |
| 9:20 | sak | info:guld | Taklampa med skärm på plats! Trivsel +6 · Ali betalar nu +0 % |
| 9:20 | kvitto-visas | info:guld | Taklampa med skärm på plats! Trivsel +6 · Ali betalar nu +0 % |
| 9:20 | toast | guld | Taklampa med skärm på plats! Trivsel +6 · Ali betalar nu +0 % |
| 9:22 | klar | info:guld | Taklampa med skärm på plats! Trivsel +6 · Ali betalar nu +0 % |
| 9:24 | scenInfo | du | Lampan tänds |
| 9:33 | tanke | du | Det börjar kännas som ett hem. På riktigt. |
| 9:33 | notis | tanke | 💭 Det börjar kännas som ett hem. På riktigt. |
| 9:33 | röst | du | Det börjar kännas som ett hem. På riktigt. · REAKTION |
| 9:36 | toast | skak | handen skakar: fullt |
| 9:36 | ljud | kajsa | Mjau |
| 9:37 | struken | mamma | Rolf på sopbilen ringde. Han säger att du städar? Vem är du och vad har du gjort med mitt barn? ❤️ |
| 9:37 | händelse | malKlart | id=mysigt del=Dag 5 – Tätt och mysigt nasta=vind5 |
| 9:37 | lapp | 📔 Dagbok | Lampan lyser. Pappa ska visst komma förbi i morgon. |
| 9:37 | dagbokrad | du | Lampan lyser. Pappa ska visst komma förbi i morgon. |
| 9:37 | väntar | notis:Lampan lyser. Pappa ska visst komma förb | Lampan lyser. Pappa ska visst komma förbi i morgon. |
| 9:37 | väntar | du | En tredje vindsnurra på taket. Skrivare M drar mycket. |
| 9:37 | MÅL |  | Printa och sälj |
| 9:37 | sak | notis:Lampan lyser. Pappa ska visst komma förb | Lampan lyser. Pappa ska visst komma förbi i morgon. |
| 9:37 | notis | dagbok | Lampan lyser. Pappa ska visst komma förbi i morgon. |
| 9:40 | klar | notis:Lampan lyser. Pappa ska visst komma förb | Lampan lyser. Pappa ska visst komma förbi i morgon. |
| 9:40 | målruta |  | Printa och sälj |
| 9:42 | sak | du | En tredje vindsnurra på taket. Skrivare M drar mycket. |
| 9:42 | pil |  | Printa och sälj |
| 9:42 | notis | tanke | 💭 En tredje vindsnurra på taket. Skrivare M drar mycket. |
| 9:42 | röst | du | En tredje vindsnurra på taket. Skrivare M drar mycket. · MÅL |
| 9:45 | händelse | printStart | sak=pall |
| 9:46 | klar | du | En tredje vindsnurra på taket. Skrivare M drar mycket. |
| 9:50 | toast | guld | ✅ |
| 9:50 | händelse | printKlar | sak=pall n=14 |
| 9:51 | händelse | tagitUrPrint | sak=pall n=1 |
| 9:57 | händelse | placerat | sak=pall |
| 10:04 | händelse | printStart | sak=kruka |
| 10:07 | toast | guld | ✅ |
| 10:07 | händelse | printKlar | sak=kruka n=43 |
| 10:07 | händelse | tagitUrPrint | sak=kruka n=1 |
| 10:09 | händelse | printStart | sak=kruka |
| 10:12 | toast | guld | ✅ |
| 10:12 | händelse | printKlar | sak=kruka n=44 |
| 10:13 | händelse | tagitUrPrint | sak=kruka n=1 |
| 10:15 | händelse | printStart | sak=nyckelring |
| 10:16 | toast | guld | ✅ |
| 10:16 | händelse | printKlar | sak=nyckelring n=24 |
| 10:16 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 10:20 | väntar | mamma | Jag sa till pappa att du bor på en soptipp. Han sa "aha, vad lugnt då" och satte på Formel 1. Lugnt? |
| 10:21 | skratt | du | falsk tuta |
| 10:30 | webb | du | packade 2 kruka |
| 10:39 | webb | du | packade 1 nyckelring |
| 10:54 | väntar | info:bra | 📦 Paketet till Majvor i Nässjö ligger i postlådan – Rolf tar det till posten |
| 10:54 | sak | info:bra | 📦 Paketet till Majvor i Nässjö ligger i postlådan – Rolf tar det till posten |
| 10:54 | kvitto-visas | info:bra | 📦 Paketet till Majvor i Nässjö ligger i postlådan – Rolf tar det till posten |
| 10:54 | toast | bra | 📦 Paketet till Majvor i Nässjö ligger i postlådan – Rolf tar det till posten |
| 10:55 | väntar | info:bra | 📦 Paketet till Lasse på bussdepån ligger i postlådan – Rolf tar det till posten |
| 10:55 | väntar | rolf | ÖJ! Ja kör dina paket till posten. Ja ska ändå förbi. Ja tar en tia för bensinen. Eller för Kajsas lax. Mest för laxen. /Rolf​ |
| 10:56 | klar | info:bra | 📦 Paketet till Majvor i Nässjö ligger i postlådan – Rolf tar det till posten |
| 10:56 | sak | info:bra | 📦 Paketet till Lasse på bussdepån ligger i postlådan – Rolf tar det till posten |
| 10:56 | kvitto-visas | info:bra | 📦 Paketet till Lasse på bussdepån ligger i postlådan – Rolf tar det till posten |
| 10:56 | toast | bra | 📦 Paketet till Lasse på bussdepån ligger i postlådan – Rolf tar det till posten |
| 10:58 | klar | info:bra | 📦 Paketet till Lasse på bussdepån ligger i postlådan – Rolf tar det till posten |
| 10:58 | händelse | printStart | sak=pall |
| 11:00 | sak | rolf | ÖJ! Ja kör dina paket till posten. Ja ska ändå förbi. Ja tar en tia för bensinen. Eller för Kajsas lax. Mest för laxen. /Rolf​ |
| 11:00 | notis |  | ✉️ ÖJ! Ja kör dina paket till posten. Ja ska ändå förbi. Ja tar en tia för bensinen. Eller för Kajsas lax. Mest för laxen. /Rolf​ |
| 11:00 | röst | rolf | ÖJ! Ja kör dina paket till posten. Ja ska ändå förbi. Ja tar en tia för bensinen. Eller för Kajsas lax. Mest för laxen. /Rolf​ · STORY |
| 11:04 | toast | guld | ✅ |
| 11:04 | händelse | printKlar | sak=pall n=15 |
| 11:04 | händelse | tagitUrPrint | sak=pall n=1 |
| 11:11 | klar | rolf | ÖJ! Ja kör dina paket till posten. Ja ska ändå förbi. Ja tar en tia för bensinen. Eller för Kajsas lax. Mest för laxen. /Rolf​ |
| 11:12 | aliSalt | ali | 189 |
| 11:12 | aliSalt | ali | 20 |
| 11:20 | händelse | printStart | sak=pall |
| 11:25 | toast | guld | ✅ |
| 11:25 | händelse | printKlar | sak=pall n=16 |
| 11:25 | händelse | tagitUrPrint | sak=pall n=1 |
| 11:33 | aliSalt | ali | 189 |
| 11:42 | händelse | printStart | sak=pall |
| 11:47 | toast | guld | ✅ |
| 11:47 | händelse | printKlar | sak=pall n=17 |
| 11:47 | händelse | tagitUrPrint | sak=pall n=1 |
| 11:55 | aliSalt | ali | 189 |
| 12:22 | händelse | printStart | sak=pall |
| 12:27 | toast | guld | ✅ |
| 12:27 | händelse | printKlar | sak=pall n=18 |
| 12:28 | händelse | tagitUrPrint | sak=pall n=1 |
| 12:30 | skratt | du | däcket rullar iväg |
| 12:35 | aliSalt | ali | 189 |
| 12:37 | skratt | du | falsk tuta |
| 12:44 | händelse | printStart | sak=pall |
| 12:50 | toast | guld | ✅ |
| 12:50 | händelse | printKlar | sak=pall n=19 |
| 12:50 | händelse | tagitUrPrint | sak=pall n=1 |
| 12:57 | aliSalt | ali | 189 |
| 13:02 | struken | mamma | Sover du ordentligt? Du ser trött ut. Jag vet att jag inte kan se dig. Men jag vet. |
| 13:06 | händelse | printStart | sak=pall |
| 13:12 | toast | guld | ✅ |
| 13:12 | händelse | printKlar | sak=pall n=20 |
| 13:12 | händelse | tagitUrPrint | sak=pall n=1 |
| 13:15 | upplåst | strom | vindsnurra3 |
| 13:15 | brott | RESERV | vindsnurra3 (strom 1 av 15) |
| 13:15 | händelse | upplast | id=vindsnurra3 flask=strom |
| 13:15 | paket |  | sms |
| 13:15 | väntar | ali | Ali här. En tredje snurra. Mitt på taket. Sen är taket fullt. Sen får solen ta över. |
| 13:15 | sak | ali | Ali här. En tredje snurra. Mitt på taket. Sen är taket fullt. Sen får solen ta över. |
| 13:15 | sms | ali | Ali här. En tredje snurra. Mitt på taket. Sen är taket fullt. Sen får solen ta över. |
| 13:15 | sms-bubbla | ali | Ali här. En tredje snurra. Mitt på taket. Sen är taket fullt. Sen får solen ta över. |
| 13:15 | röst | ali | Ali här. En tredje snurra. Mitt på taket. Sen är taket fullt. Sen får solen ta över. · STORY |
| 13:19 | aliSalt | ali | 189 |
| 13:22 | klar | ali | Ali här. En tredje snurra. Mitt på taket. Sen är taket fullt. Sen får solen ta över. |
| 13:26 | toast | guld | 3D-modell köpt – printa vindsnurra till skjultaket på skrivaren |
| 13:26 | händelse | kopt | sak=vindsnurra |
| 13:35 | händelse | printStart | sak=byggsats:vindsnurra |
| 13:38 | händelse | printKlar | sak=byggsats:vindsnurra n=1 |
| 13:38 | toast | guld | ✅ |
| 13:39 | väntar | info:guld | 🌬️ Vindsnurran ligger i handen – klicka på skjulet för att sätta den på taket |
| 13:39 | händelse | tagitUrPrint | sak=byggsats:vindsnurra n=1 |
| 13:39 | sak | info:guld | 🌬️ Vindsnurran ligger i handen – klicka på skjulet för att sätta den på taket |
| 13:39 | kvitto-visas | info:guld | 🌬️ Vindsnurran ligger i handen – klicka på skjulet för att sätta den på taket |
| 13:39 | toast | guld | 🌬️ Vindsnurran ligger i handen – klicka på skjulet för att sätta den på taket |
| 13:41 | klar | info:guld | 🌬️ Vindsnurran ligger i handen – klicka på skjulet för att sätta den på taket |
| 13:47 | händelse | placerat | sak=vindsnurra |
| 13:47 | väntar | info:guld | 🌬️ Vindsnurran sitter på taket – den trampar cykeln åt dig när det blåser |
| 13:47 | monterat | du | byggsats:vindsnurra |
| 13:47 | händelse | monterat | sak=vindsnurra |
| 13:47 | sak | info:guld | 🌬️ Vindsnurran sitter på taket – den trampar cykeln åt dig när det blåser |
| 13:47 | kvitto-visas | info:guld | 🌬️ Vindsnurran sitter på taket – den trampar cykeln åt dig när det blåser |
| 13:47 | toast | guld | 🌬️ Vindsnurran sitter på taket – den trampar cykeln åt dig när det blåser |
| 13:47 | händelse | malKlart | id=vind5 del=Dag 5 – Tätt och mysigt nasta=sov5 |
| 13:47 | paket |  | lapp |
| 13:47 | väntar | du | Dag 5 är slut. Nu vet en mås att jag bor HÄR. Pengarna är borta. Med en mås. |
| 13:47 | paket |  | sms |
| 13:47 | väntar | mamma | Pappa kommer förbi i morgon. Han säger inget men han vill. ❤️ |
| 13:47 | paket |  | sms |
| 13:47 | väntar | mamma | Pappa och jag har lagt undan lite. 1 000 kr. Till något fint i ditt hus. Inte till chips. ❤️ /Mamma |
| 13:47 | tanke | du | Full mage, varmt skjul. Jag är typ kung här. |
| 13:47 | väntar | du | Full mage, varmt skjul. Jag är typ kung här. |
| 13:47 | struken | du | Full mage, varmt skjul. Jag är typ kung här. |
| 13:47 | MÅL |  | Klart för idag – sov när du vill |
| 13:49 | klar | info:guld | 🌬️ Vindsnurran sitter på taket – den trampar cykeln åt dig när det blåser |
| 13:51 | målruta |  | Klart för idag – sov när du vill |
| 13:51 | kvittens-bock |  | ✓ Sätt en tredje vindsnurra på taket |
| 13:51 | sak | du | (nytt mål i rutan) |
| 13:51 | pil |  | Klart för idag – sov när du vill |
| 13:51 | klar | du | (nytt mål i rutan) |
| 13:58 | röst | mamma | Haha, träplankor? · STORY |
| 14:01 | röst | mamma | Vad är det för skit? Du har ju inte ens tapeter på väggarna. · STORY |
| 14:05 | röst | mamma | Och var är badrummet? Du duschar väl? · STORY |
| 14:08 | röst | mamma | Pappa säger "aha, vad lugnt då". Pappa säger det om allt. · STORY |
| 14:13 | röst | mamma | …men fönstret var fint. Det kommer in ljus i alla fall. ❤️ · STORY |
| 14:18 | morgonkort | 📕 Kapitel 2: Ett riktigt hem | 📕 Kapitel 2: Ett riktigt hem · Mamma är inte imponerad. Än. Nästa mål: tapeter , en egen gamingbod med RGB, gamer-inredning – och en jacuzzi . Visa henne. Ali har nya ritningar – och ♾️ trimningar som aldrig tar slut. |
| 14:18 | väntar | notis:🌇 Klockan är 21. Ali slår igen luckan.  | 🌇 Klockan är 21. Ali slår igen luckan. Dagens jobb är klart – gå in i skjulet och sov i sängen. |
| 14:27 | väntar | notis:📔 Prestation: Ett hem att bo i · +3 res | 📔 Prestation: Ett hem att bo i · +3 respekt |
| 14:32 | sak | du | Dag 5 är slut. Nu vet en mås att jag bor HÄR. Pengarna är borta. Med en mås. |
| 14:32 | lapp | 📔 Dagbok | Dag 5 är slut. Nu vet en mås att jag bor HÄR. Pengarna är borta. Med en mås. |
| 14:32 | kvallsrad | du | Nu vet en mås att jag bor HÄR. Pengarna är borta. Med en mås. |
| 14:32 | klar | du | Dag 5 är slut. Nu vet en mås att jag bor HÄR. Pengarna är borta. Med en mås. |
| 14:36 | webbBetalt | du | 232 |
| 14:36 | nattkort | du | 🌙 Dag 5 är slut. God natt. zzz… Nu vet en mås att jag bor HÄR. Pengarna är borta. Med en mås. DAGENS PRINTAR Pall × 18 Blomkruka × 2 Trädgårdstomte till flaket |

<details><summary>Botens handlingar dag 5</summary>

- 0:00 — dag 5 börjar — (2940 kr)
- 0:08 popup: "FORTSÄTT" (2940 kr)
- 0:25 gå till Rolfs postlåda (28 m) (2940 kr)
- 0:31 panel: "Rolfs postlåda
Det här låg i l" (3190 kr)
- 0:31 tjänar pengar till väntar på sopbilen (BO): 3190/3250 kr → printar pall (270 kr) (3190 kr)
- 0:37 plockar 3 skräp på tippen (bär max 16) (3190 kr)
- 0:40 gå till kvarnen (12 m) (3190 kr)
- 0:46 gå till skrivaren (5 m) (3190 kr)
- 0:47 printar Pall (3190 kr)
- 0:54 tar ut 1 st ur skrivaren (3190 kr)
- 0:59 gå till Ali (27 m) (3190 kr)
- 0:59 öppnar Alis butik – sälja (3190 kr)
- 1:01 säljer hos Ali: +270 kr (3460 kr)
- 1:03 tjänar pengar till väntar på sopbilen (BO): 3460/3520 kr → printar pall (257 kr) (3460 kr)
- 1:08 gå till skrivaren (24 m) (3460 kr)
- 1:10 printar Pall (3460 kr)
- 1:16 tar ut 1 st ur skrivaren (3460 kr)
- 1:21 gå till Ali (24 m) (3460 kr)
- 1:21 öppnar Alis butik – sälja (3460 kr)
- 1:23 säljer hos Ali: +257 kr (3717 kr)
- 1:26 tjänar pengar till väntar på sopbilen (BO): 3717/3777 kr → printar pall (244 kr) (3717 kr)
- 1:39 plockar 4 skräp på tippen (bär max 16) (3717 kr)
- 1:42 gå till kvarnen (12 m) (3717 kr)
- 1:45 gå till skrivaren (5 m) (3717 kr)
- 1:46 printar Pall (3717 kr)
- 1:53 tar ut 1 st ur skrivaren (3717 kr)
- 1:58 gå till Ali (27 m) (3717 kr)
- 1:58 öppnar Alis butik – sälja (3717 kr)
- 2:00 säljer hos Ali: +244 kr (3961 kr)
- 2:07 tjänar pengar till väntar på sopbilen (BO): 3961/4021 kr → printar pall (231 kr) (3961 kr)
- 2:12 gå till skrivaren (24 m) (3961 kr)
- 2:13 printar Pall (3961 kr)
- 2:19 tar ut 1 st ur skrivaren (3961 kr)
- 2:25 gå till Ali (24 m) (3961 kr)
- 2:25 öppnar Alis butik – sälja (3961 kr)
- 2:26 säljer hos Ali: +231 kr (4192 kr)
- 2:30 tjänar pengar till väntar på sopbilen (BO): 4192/4252 kr → printar pall (220 kr) (4192 kr)
- 2:35 gå till skrivaren (24 m) (4192 kr)
- 2:36 printar Pall (4192 kr)
- 2:43 tar ut 1 st ur skrivaren (4192 kr)
- 2:48 gå till Ali (24 m) (4192 kr)
- 2:48 öppnar Alis butik – sälja (4192 kr)
- 2:50 tjänar pengar till väntar på sopbilen (BO): 4192/4252 kr → printar pall (220 kr) (4192 kr)
- 2:56 gå till skrivaren (24 m) (4192 kr)
- 2:57 printar Pall (4192 kr)
- 3:03 tar ut 1 st ur skrivaren (4192 kr)
- 3:08 gå till Ali (24 m) (4192 kr)
- 3:08 öppnar Alis butik – sälja (4192 kr)
- 3:10 säljer hos Ali: +220 kr (4412 kr)
- 3:13 tjänar pengar till väntar på sopbilen (BO): 4412/4472 kr → printar pall (209 kr) (4412 kr)
- 3:19 gå till skrivaren (24 m) (4412 kr)
- 3:20 printar Pall (4412 kr)
- 3:26 tar ut 1 st ur skrivaren (4412 kr)
- 3:32 gå till Ali (24 m) (4412 kr)
- 3:32 öppnar Alis butik – sälja (4412 kr)
- 3:33 säljer hos Ali: +209 kr (4621 kr)
- 3:43 tjänar pengar till väntar på sopbilen (BO): 4621/4681 kr → printar pall (198 kr) (4621 kr)
- 3:56 plockar 5 skräp på tippen (bär max 16) (4621 kr)
- 3:59 gå till kvarnen (14 m) (4621 kr)
- 4:05 gå till skrivaren (5 m) (4621 kr)
- 4:07 printar Pall (4621 kr)
- 4:13 tar ut 1 st ur skrivaren (4621 kr)
- 4:18 gå till Ali (26 m) (4621 kr)
- 4:18 öppnar Alis butik – sälja (4621 kr)
- 4:20 säljer hos Ali: +198 kr (4819 kr)
- 4:23 tjänar pengar till väntar på sopbilen (BO): 4819/4879 kr → printar pall (189 kr) (4819 kr)
- 4:29 gå till skrivaren (24 m) (4819 kr)
- 4:30 printar Pall (4819 kr)
- 4:36 tar ut 1 st ur skrivaren (4819 kr)
- 4:42 gå till Ali (24 m) (4819 kr)
- 4:42 öppnar Alis butik – sälja (4819 kr)
- 4:43 säljer hos Ali: +3 kr (4822 kr)
- 4:44 tjänar pengar till väntar på sopbilen (BO): 4822/4879 kr → printar pall (189 kr) (4822 kr)
- 4:50 gå till skrivaren (24 m) (4822 kr)
- 4:51 printar Pall (4822 kr)
- 4:57 tar ut 1 st ur skrivaren (4822 kr)
- 5:02 gå till Ali (24 m) (4822 kr)
- 5:02 öppnar Alis butik – sälja (4822 kr)
- 5:04 säljer hos Ali: +189 kr (5011 kr)
- 5:14 gå till Rolfs postlåda (31 m) (5011 kr)
- 5:16 gå till skrivaren (8 m) (5011 kr)
- 5:18 printar Trädgårdstomte till flaket (5011 kr)
- 5:24 tar ut 1 st ur skrivaren (5011 kr)
- 5:28 valj tomte: true, vald tomte, post {"l":null,"tr":null,"tm":[]}, nummer false (5011 kr)
- 5:29 gå till Rolfs postlåda (8 m) (5011 kr)
- 5:37 gå till skrivaren (8 m) (5011 kr)
- 5:38 printar Isolerskiva (vägg) (5011 kr)
- 5:43 tar ut 1 st ur skrivaren (5011 kr)
- 5:47 gå till skjulet (hoger) (19 m) (5011 kr)
- 6:02 plockar 3 skräp på tippen (bär max 16) (5011 kr)
- 6:05 gå till kvarnen (13 m) (5011 kr)
- 6:10 gå till skrivaren (5 m) (5011 kr)
- 6:11 printar Isolerskiva (vägg) (5011 kr)
- 6:16 tar ut 1 st ur skrivaren (5011 kr)
- 6:20 gå till skjulet (fram) (19 m) (5011 kr)
- 6:35 gå till Ali (20 m) (5011 kr)
- 6:35 öppnar Alis butik – köpa alis pappas gamla dator (5011 kr)
- 6:37 köper webbdator för 300 kr (4711 kr)
- 6:43 gå till skrivaren (24 m) (4711 kr)
- 6:45 printar Alis pappas gamla dator (4711 kr)
- 6:47 tar ut 1 st ur skrivaren (4711 kr)
- 6:51 gå till platsen för alis pappas gamla dator (21 m) (4711 kr)
- 6:52 ställer ut alis pappas gamla dator (4711 kr)
- 7:07 gå till Ali (16 m) (4711 kr)
- 7:07 öppnar Alis butik – köpa receptet lampskärm (4711 kr)
- 7:09 Ali har inte lampskarm (4711 kr)
- 7:15 gå till skrivaren (24 m) (4711 kr)
- 7:16 printar Lampskärm (4711 kr)
- 7:24 tar ut 1 st ur skrivaren (4711 kr)
- 7:35 gå till Ali (24 m) (4711 kr)
- 7:35 öppnar Alis butik – köpa fönster (4711 kr)
- 7:37 köper fonster för 90 kr (4621 kr)
- 7:43 gå till skrivaren (24 m) (4621 kr)
- 7:45 printar Fönster (2 delar) (4621 kr)
- 7:53 tar ut 1 st ur skrivaren (4621 kr)
- 7:57 gå till skjulet (18 m) (4621 kr)
- 7:57 sätter ett fönster (4621 kr)
- 8:01 gå till Ali (20 m) (4621 kr)
- 8:01 öppnar Alis butik – köpa trägolv (4621 kr)
- 8:03 köper golv för 140 kr (4481 kr)
- 8:14 plockar 1 skräp på tippen (bär max 16) (4481 kr)
- 8:17 gå till kvarnen (14 m) (4481 kr)
- 8:20 gå till skrivaren (5 m) (4481 kr)
- 8:22 printar Trägolv (3 delar) (4481 kr)
- 8:33 tar ut 1 st ur skrivaren (4481 kr)
- 8:37 gå till skjulet (19 m) (4481 kr)
- 8:45 gå till skrivaren (17 m) (4481 kr)
- 8:47 printar Pall (4481 kr)
- 8:53 tar ut 1 st ur skrivaren (4481 kr)
- 8:56 gå till platsen för pall (18 m) (4481 kr)
- 8:57 ställer ut pall (4481 kr)
- 9:02 gå till Ali (15 m) (4481 kr)
- 9:02 öppnar Alis butik – köpa taklampa med skärm (4481 kr)
- 9:05 köper taklampa för 90 kr (4391 kr)
- 9:11 gå till skrivaren (24 m) (4391 kr)
- 9:13 printar Taklampa med skärm (4391 kr)
- 9:17 tar ut 1 st ur skrivaren (4391 kr)
- 9:20 gå till skjulet (17 m) (4391 kr)
- 9:37 plockar 4 skräp på tippen (bär max 16) (4391 kr)
- 9:39 gå till kvarnen (12 m) (4391 kr)
- 9:43 gå till skrivaren (5 m) (4391 kr)
- 9:45 printar Pall (4391 kr)
- 9:51 tar ut 1 st ur skrivaren (4391 kr)
- 9:56 gå till platsen för pall (22 m) (4391 kr)
- 9:57 ställer ut pall (4391 kr)
- 10:02 gå till skrivaren (19 m) (4391 kr)
- 10:04 printar Blomkruka (4391 kr)
- 10:08 tar ut 1 st ur skrivaren (4391 kr)
- 10:09 printar Blomkruka (4391 kr)
- 10:13 tar ut 1 st ur skrivaren (4391 kr)
- 10:15 printar Nyckelring (4391 kr)
- 10:17 tar ut 1 st ur skrivaren (4391 kr)
- 10:21 gå till datorn (18 m) (4391 kr)
- 10:29 panel: "Webbshopen · Soptippsvägen 1
B" (4391 kr)
- 10:39 panel: "Webbshopen · Soptippsvägen 1
B" (4391 kr)
- 10:48 panel: "Webbshopen · Soptippsvägen 1
B" (4391 kr)
- 10:54 gå till Rolfs postlåda (paket) (29 m) (4391 kr)
- 10:55 webbshop: 2 paket i postlådan (4391 kr)
- 10:55 tjänar pengar till väntar på flaskhalsen för vindsnurra3: 4391/4431 kr → printar pall (189 kr) (4391 kr)
- 10:57 gå till skrivaren (8 m) (4391 kr)
- 10:58 printar Pall (4391 kr)
- 11:04 tar ut 1 st ur skrivaren (4391 kr)
- 11:10 gå till Ali (26 m) (4391 kr)
- 11:10 öppnar Alis butik – sälja (4391 kr)
- 11:12 säljer hos Ali: +209 kr (4600 kr)
- 11:13 tjänar pengar till väntar på flaskhalsen för vindsnurra3: 4600/4640 kr → printar pall (189 kr) (4600 kr)
- 11:18 gå till skrivaren (24 m) (4600 kr)
- 11:20 printar Pall (4600 kr)
- 11:26 tar ut 1 st ur skrivaren (4600 kr)
- 11:31 gå till Ali (24 m) (4600 kr)
- 11:31 öppnar Alis butik – sälja (4600 kr)
- 11:33 säljer hos Ali: +189 kr (4789 kr)
- 11:35 tjänar pengar till väntar på flaskhalsen för vindsnurra3: 4789/4829 kr → printar pall (189 kr) (4789 kr)
- 11:40 gå till skrivaren (24 m) (4789 kr)
- 11:42 printar Pall (4789 kr)
- 11:48 tar ut 1 st ur skrivaren (4789 kr)
- 11:53 gå till Ali (24 m) (4789 kr)
- 11:53 öppnar Alis butik – sälja (4789 kr)
- 11:55 säljer hos Ali: +189 kr (4978 kr)
- 11:57 tjänar pengar till väntar på flaskhalsen för vindsnurra3: 4978/5018 kr → printar pall (189 kr) (4978 kr)
- 12:10 plockar 4 skräp på tippen (bär max 16) (4978 kr)
- 12:13 gå till kvarnen (15 m) (4978 kr)
- 12:20 gå till skrivaren (5 m) (4978 kr)
- 12:22 printar Pall (4978 kr)
- 12:28 tar ut 1 st ur skrivaren (4978 kr)
- 12:34 gå till Ali (26 m) (4978 kr)
- 12:34 öppnar Alis butik – sälja (4978 kr)
- 12:36 säljer hos Ali: +189 kr (5167 kr)
- 12:38 tjänar pengar till väntar på flaskhalsen för vindsnurra3: 5167/5207 kr → printar pall (189 kr) (5167 kr)
- 12:43 gå till skrivaren (24 m) (5167 kr)
- 12:44 printar Pall (5167 kr)
- 12:51 tar ut 1 st ur skrivaren (5167 kr)
- 12:56 gå till Ali (24 m) (5167 kr)
- 12:56 öppnar Alis butik – sälja (5167 kr)
- 12:58 säljer hos Ali: +189 kr (5356 kr)
- 13:00 tjänar pengar till väntar på flaskhalsen för vindsnurra3: 5356/5396 kr → printar pall (189 kr) (5356 kr)
- 13:05 gå till skrivaren (24 m) (5356 kr)
- 13:06 printar Pall (5356 kr)
- 13:13 tar ut 1 st ur skrivaren (5356 kr)
- 13:18 gå till Ali (24 m) (5356 kr)
- 13:18 öppnar Alis butik – sälja (5356 kr)
- 13:20 säljer hos Ali: +189 kr (5545 kr)
- 13:24 öppnar Alis butik – köpa vindsnurra till skjultaket (5545 kr)
- 13:27 köper vindsnurra för 133 kr (5412 kr)
- 13:33 gå till skrivaren (24 m) (5412 kr)
- 13:35 printar Vindsnurra till skjultaket (5412 kr)
- 13:40 tar ut 1 st ur skrivaren (5412 kr)
- 13:47 gå till sätt vindsnurran på taket (18 m) (5412 kr)
- 14:18 telefonscen: "Okej. Kapitel 2 då. 😤" (6412 kr)
- 14:26 kort: "Kör!" (6412 kr)

</details>

## Dag 6

| Tid | Källa | Vem | Text |
|---|---|---|---|
| 14:36 | vara | ali | kruka |
| 14:36 | händelse | malKlart | id=sov5 del=Dag 5 – Tätt och mysigt nasta=pappa6 |
| 14:36 | MÅL |  | Pappa kommer förbi idag |
| 0:00 | väntar | info:fel | Göran snodde lampskärm. |
| 0:01 | händelse | dagenBorjar | dag=6 |
| 0:01 | meddelande | du | Pengarna tog slut. Därför: en fabrik. |
| 0:01 | dagbokkort | du | KAPITEL 2 · Dag 6. 16 dagar till jul · Pengarna tog slut. Därför: en fabrik. |
| 0:01 | röst | du | KAPITEL 2 · Dag 6. 16 dagar till jul. Pengarna tog slut. Därför: en fabrik. · STORY |
| 0:07 | händelse | morgonkortStangt | dag=6 |
| 0:07 | struken | kedja | d6 |
| 0:07 | väntar | du | Pappa kommer förbi idag. |
| 0:08 | väntar | notis:2 paket i natt · +232 kr | 2 paket i natt · +232 kr |
| 0:09 | väntar | notis:Blomkruka · +50 % | Blomkruka · +50 % |
| 0:11 | målruta |  | Pappa kommer förbi idag |
| 0:13 | sak | du | Pappa kommer förbi idag. |
| 0:13 | pil |  | Pappa kommer förbi idag |
| 0:13 | röst | du | Pappa kommer förbi idag. · MÅL |
| 0:15 | klar | du | Pappa kommer förbi idag. |
| 0:15 | struken | info:fel | Göran snodde lampskärm. |
| 0:15 | struken | notis:🌇 Klockan är 21. Ali slår igen luckan.  | 🌇 Klockan är 21. Ali slår igen luckan. Dagens jobb är klart – gå in i skjulet och sov i sängen. |
| 0:15 | struken | notis:📔 Prestation: Ett hem att bo i · +3 res | 📔 Prestation: Ett hem att bo i · +3 respekt |
| 0:15 | sak | notis:2 paket i natt · +232 kr | 2 paket i natt · +232 kr |
| 0:15 | notis |  | 2 paket i natt · +232 kr |
| 0:17 | klar | notis:2 paket i natt · +232 kr | 2 paket i natt · +232 kr |
| 0:19 | sak | notis:Blomkruka · +50 % | Blomkruka · +50 % |
| 0:19 | notis |  | Blomkruka · +50 % |
| 0:22 | klar | notis:Blomkruka · +50 % | Blomkruka · +50 % |
| 0:24 | struken | mamma | Jag sa till pappa att du bor på en soptipp. Han sa "aha, vad lugnt då" och satte på Formel 1. Lugnt? |
| 0:34 | väntar | värld:TUUT TUUT! | TUUT TUUT! |
| 0:34 | paket |  | sms |
| 0:34 | väntar | rolf | Folk pratar gott om dej. Ja hitta röda backar av riktigt bra plast på tippen. Ja la dom vid grinden. /R |
| 0:34 | väntar | rolf | Tomten sitter på flaket nu. En tant vinka tillbaka. Första gången på trettio år. Pengar i lådan. /Rolf |
| 0:34 | sak | värld:TUUT TUUT! | TUUT TUUT! |
| 0:34 | bubbla |  | TUUT TUUT! |
| 0:34 | tanke | du | Göran tar mina saker. Kanske han vill ha något eget? |
| 0:34 | väntar | du | Göran tar mina saker. Kanske han vill ha något eget? |
| 0:37 | klar | värld:TUUT TUUT! | TUUT TUUT! |
| 0:47 | sak | mamma | Pappa kommer förbi i morgon. Han säger inget men han vill. ❤️ |
| 0:47 | sms | mamma | Pappa kommer förbi i morgon. Han säger inget men han vill. ❤️ |
| 0:47 | sms-bubbla | mamma | Pappa kommer förbi i morgon. Han säger inget men han vill. ❤️ |
| 0:47 | röst | mamma | Pappa kommer förbi i morgon. Han säger inget men han vill. ❤️ · STORY |
| 0:52 | klar | mamma | Pappa kommer förbi i morgon. Han säger inget men han vill. ❤️ |
| 0:54 | väntar | info:info | Pappas bil stannade vid grinden |
| 0:54 | scenInfo | pappa | Pappa kommer |
| 1:00 | sak | du | Göran tar mina saker. Kanske han vill ha något eget? |
| 1:00 | notis | tanke | 💭 Göran tar mina saker. Kanske han vill ha något eget? |
| 1:00 | röst | du | Göran tar mina saker. Kanske han vill ha något eget? · STORY |
| 1:01 | scenInfo | du | Hälsar på pappa |
| 1:01 | röst | pappa | Jaså. Här bor du alltså. · REAKTION |
| 1:01 | röst-avbruten | du | 2.8 s kvar ← pappa: Jaså. Här bor du alltså. |
| 1:04 | klar | du | Göran tar mina saker. Kanske han vill ha något eget? |
| 1:04 | toast |  | Du: Pappa … jag bor på en soptipp. |
| 1:04 | röst | du | Pappa … jag bor på en soptipp. · REAKTION |
| 1:08 | händelse | placerat | sak=burk_tavla3 |
| 1:08 | händelse | placerat | sak=burk_porslin |
| 1:08 | händelse | placerat | sak=burk_toarulle |
| 1:08 | händelse | placerat | sak=burk_porslin |
| 1:08 | toast |  | 🍯 Pappa lade 4 saker från mamma i en hög. |
| 1:08 | röst | pappa | Mamma skickade burkar. Jag bar dem. · REAKTION |
| 1:11 | händelse | placerat | sak=sackkarra |
| 1:11 | röst | pappa | Säckkärra. Den var på rea. · REAKTION |
| 1:15 | toast |  | Du: …Tack? |
| 1:15 | röst | du | …Tack? · REAKTION |
| 1:16 | skratt | du | falsk tuta |
| 1:21 | röst | rolf | ÖJ! Vem ä du då? · REAKTION |
| 1:24 | röst | pappa | Pappan. · REAKTION |
| 1:26 | röst | rolf | Hörru. Jaså. Rolf. Ja kör bilen. · REAKTION |
| 1:29 | röst | pappa | Scania. Trettiotvåa? · REAKTION |
| 1:32 | röst | rolf | Tjugoåtta. Men hon går som en klocka. · REAKTION |
| 1:35 | röst | rolf | Hörru. Mä en sån kan du ta tunnorna på tippen. Dôm ä av den hårda plasten. Den röda. Den klarar int en köttkvarn. · REAKTION |
| 1:44 | toast |  | Du: Var får man en kvarn som klarar den då? |
| 1:44 | röst | du | Var får man en kvarn som klarar den då? · REAKTION |
| 1:48 | röst | rolf | Ali har en röd kvarn längst in i lagret. Han har aldrig vågat starta den. · REAKTION |
| 1:54 | scenInfo | rolf | Två tunnor vid grinden |
| 1:54 | röst | rolf | Tjo. Ja ställer tunnorna vid grinden när ja tömmer. Du får dôm. · REAKTION |
| 1:59 | röst | pappa | Mm. Hej då då. · REAKTION |
| 2:02 | struken | info:info | Pappas bil stannade vid grinden |
| 2:02 | händelse | malKlart | id=pappa6 del=Dag 6 – Röd PETG nasta=r6-kop-roda-kvarnen |
| 2:02 | tanke | du | Jag går fortare när jag ätit. Vem visste. |
| 2:02 | väntar | du | Jag går fortare när jag ätit. Vem visste. |
| 2:02 | struken | du | Jag går fortare när jag ätit. Vem visste. |
| 2:02 | väntar | du | Tunnorna är röd plast. Bra plast. Den behöver en egen kvarn. |
| 2:02 | målruta |  | Köp den röda kvarnen hos Ali |
| 2:02 | MÅL |  | Köp den röda kvarnen hos Ali |
| 2:02 | sak | du | Tunnorna är röd plast. Bra plast. Den behöver en egen kvarn. |
| 2:02 | pil |  | Köp den röda kvarnen hos Ali |
| 2:02 | notis | tanke | 💭 Tunnorna är röd plast. Bra plast. Den behöver en egen kvarn. |
| 2:02 | röst | du | Tunnorna är röd plast. Bra plast. Den behöver en egen kvarn. · MÅL |
| 2:06 | kvittens-bock |  | ✓ Prata med pappa |
| 2:07 | klar | du | Tunnorna är röd plast. Bra plast. Den behöver en egen kvarn. |
| 2:12 | röst | ali | Du säljer på nätet nu? Bra. Ritningarna köper du här. · STORY |
| 2:12 | butiksbubbla | ali | Du säljer på nätet nu? Bra. Ritningarna köper du här. |
| 2:13 | skratt | du | Alis dyr-pling |
| 2:13 | toast | guld | Röda kvarnen är min – den ska stå i röda linjen |
| 2:13 | händelse | kopt | sak=petgkvarn |
| 2:13 | butiksbubbla | ali | Den röda? Jag har aldrig vågat starta den. Ta den. Starta den långt bort från mig. |
| 2:14 | röst | ali | Den röda? Jag har aldrig vågat starta den. Ta den. Starta den långt bort från mig. · STORY |
| 2:18 | väntar | rolf | Ja hitta ett helt lass på återvinningen. Ingen ville ha dom. Nu ä dom dina. /R |
| 2:20 | tanke | du | Någon från kommunen fotograferade skylten. Länge. |
| 2:20 | väntar | du | Någon från kommunen fotograferade skylten. Länge. |
| 2:20 | väntar | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har isolerade väggar nu. Och FÖNSTER. Gunnar, du hör väl? |
| 2:20 | radio | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har isolerade väggar nu. Och FÖNSTER. Gunnar, du hör väl? |
| 2:20 | skratt | du | Radio-Kjelle |
| 2:20 | väntar | foto | Pappa och Rolf |
| 2:20 | paket |  | tanke |
| 2:20 | tanke | du | Pappa var här. Han såg vad jag har byggt. |
| 2:20 | väntar | du | Pappa var här. Han såg vad jag har byggt. |
| 2:20 | paket |  | sms |
| 2:20 | väntar | mamma | Jag har skickat virkade grytvantar (lila) med Rolf. Den ligger i postlådan. |
| 2:22 | händelse | printStart | sak=byggsats:petgkvarn |
| 2:22 | väntar | mamma | Jag har bäddat i ditt rum. Ifall. |
| 2:26 | toast | bra | Del 1 av 3 klar |
| 2:28 | sak | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har isolerade väggar nu. Och FÖNSTER. Gunnar, du hör väl? |
| 2:28 | notis |  | 📻 Radio Tippen: Radio Tippen, Kjelle här. Skjulet vid tippen har isolerade väggar nu. Och FÖNSTER. Gunnar, du hör väl? |
| 2:28 | röst | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har isolerade väggar nu. Och FÖNSTER. Gunnar, du hör väl? · REAKTION |
| 2:28 | skratt | du | falsk tuta |
| 2:30 | toast | bra | Del 2 av 3 klar |
| 2:34 | händelse | printKlar | sak=byggsats:petgkvarn n=1 |
| 2:34 | toast | guld | ✅ |
| 2:34 | händelse | tagitUrPrint | sak=byggsats:petgkvarn n=1 |
| 2:36 | klar | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har isolerade väggar nu. Och FÖNSTER. Gunnar, du hör väl? |
| 2:37 | händelse | placerat | sak=petgkvarn |
| 2:37 | händelse | malKlart | id=r6-kop-roda-kvarnen del=Dag 6 – Röd PETG nasta=r6-mal-tunna-roda |
| 2:37 | struken | du | Någon från kommunen fotograferade skylten. Länge. |
| 2:37 | väntar | du | Mal en tunna i röda kvarnen. |
| 2:37 | MÅL |  | Mal en tunna i röda kvarnen |
| 2:39 | sak | du | Mal en tunna i röda kvarnen. |
| 2:39 | målruta |  | Mal en tunna i röda kvarnen |
| 2:39 | pil |  | Mal en tunna i röda kvarnen |
| 2:39 | röst | du | Mal en tunna i röda kvarnen. · MÅL |
| 2:41 | klar | du | Mal en tunna i röda kvarnen. |
| 2:41 | kvittens-bock |  | ✓ Ställ den röda kvarnen i röda linjen |
| 2:49 | sak | mamma | Pappa och jag har lagt undan lite. 1 000 kr. Till något fint i ditt hus. Inte till chips. ❤️ /Mamma |
| 2:49 | sms | mamma | Pappa och jag har lagt undan lite. 1 000 kr. Till något fint i ditt hus. Inte till chips. ❤️ /Mamma |
| 2:49 | sms-bubbla | mamma | Pappa och jag har lagt undan lite. 1 000 kr. Till något fint i ditt hus. Inte till chips. ❤️ /Mamma |
| 2:49 | röst | mamma | Pappa och jag har lagt undan lite. 1 000 kr. Till något fint i ditt hus. Inte till chips. ❤️ /Mamma · STORY |
| 2:54 | väntar | info:guld | 🛒 Säckkärran är i verktygsraden – en tung sak i taget |
| 2:56 | kvitto-visas | info:guld | 🛒 Säckkärran är i verktygsraden – en tung sak i taget |
| 2:56 | toast | guld | 🛒 Säckkärran är i verktygsraden – en tung sak i taget |
| 2:57 | klar | mamma | Pappa och jag har lagt undan lite. 1 000 kr. Till något fint i ditt hus. Inte till chips. ❤️ /Mamma |
| 3:05 | skratt | du | kvarnen rapar |
| 3:05 | händelse | malKlart | id=r6-mal-tunna-roda del=Dag 6 – Röd PETG nasta=sol6 |
| 3:05 | väntar | du | Printa och sälj. |
| 3:05 | målruta |  | Printa och sälj |
| 3:05 | MÅL |  | Printa och sälj |
| 3:05 | sak | du | Printa och sälj. |
| 3:05 | pil |  | Printa och sälj |
| 3:05 | röst | du | Printa och sälj. · MÅL |
| 3:07 | klar | du | Printa och sälj. |
| 3:09 | kvittens-bock |  | ✓ Mal en tunna i röda kvarnen |
| 3:09 | väntar | notis:PETG-kvarnen: den första rullen röd PETG | PETG-kvarnen: den första rullen röd PETG är klar |
| 3:12 | händelse | printStart | sak=pall |
| 3:14 | toast | guld | 🧵 |
| 3:17 | sak | foto | Pappa och Rolf |
| 3:17 | foto | du | Pappa och Rolf |
| 3:17 | toast | guld | ✅ |
| 3:17 | händelse | printKlar | sak=pall n=21 |
| 3:17 | händelse | tagitUrPrint | sak=pall n=1 |
| 3:18 | toast | guld | 🧵 |
| 3:19 | klar | foto | Pappa och Rolf |
| 3:20 | ljud | kajsa | Mjau |
| 3:28 | sak | du | Pappa var här. Han såg vad jag har byggt. |
| 3:28 | notis | tanke | 💭 Pappa var här. Han såg vad jag har byggt. |
| 3:28 | röst | du | Pappa var här. Han såg vad jag har byggt. · STORY |
| 3:31 | klar | du | Pappa var här. Han såg vad jag har byggt. |
| 3:32 | väntar | foto | Röd fabrik |
| 3:32 | paket |  | tanke |
| 3:32 | tanke | du | Två fabriker. Och det blir fler. |
| 3:32 | väntar | du | Två fabriker. Och det blir fler. |
| 3:34 | väntar | mamma | Jag har städat ditt rum. Det tog tre dagar. Jag hittade en macka från i somras. En macka. |
| 3:35 | händelse | printStart | sak=pall |
| 3:40 | sak | notis:PETG-kvarnen: den första rullen röd PETG | PETG-kvarnen: den första rullen röd PETG är klar |
| 3:40 | notis | guld | PETG-kvarnen: den första rullen röd PETG är klar |
| 3:40 | toast | guld | ✅ |
| 3:40 | händelse | printKlar | sak=pall n=22 |
| 3:41 | händelse | tagitUrPrint | sak=pall n=1 |
| 3:42 | klar | notis:PETG-kvarnen: den första rullen röd PETG | PETG-kvarnen: den första rullen röd PETG är klar |
| 3:54 | sak | foto | Röd fabrik |
| 3:54 | foto | du | Röd fabrik |
| 3:55 | webb | du | packade 2 pall |
| 3:56 | klar | foto | Röd fabrik |
| 4:02 | tanke | du | Mamma hade varit stolt. Säg inget till henne. |
| 4:02 | väntar | du | Mamma hade varit stolt. Säg inget till henne. |
| 4:03 | sak | du | Mamma hade varit stolt. Säg inget till henne. |
| 4:03 | notis | tanke | 💭 Mamma hade varit stolt. Säg inget till henne. |
| 4:03 | röst | du | Mamma hade varit stolt. Säg inget till henne. · REAKTION |
| 4:07 | klar | du | Mamma hade varit stolt. Säg inget till henne. |
| 4:10 | väntar | info:bra | 📦 Paketet till Någon i Mora ligger i postlådan – Rolf tar det till posten |
| 4:10 | sak | info:bra | 📦 Paketet till Någon i Mora ligger i postlådan – Rolf tar det till posten |
| 4:10 | kvitto-visas | info:bra | 📦 Paketet till Någon i Mora ligger i postlådan – Rolf tar det till posten |
| 4:10 | toast | bra | 📦 Paketet till Någon i Mora ligger i postlådan – Rolf tar det till posten |
| 4:12 | klar | info:bra | 📦 Paketet till Någon i Mora ligger i postlådan – Rolf tar det till posten |
| 4:14 | händelse | printStart | sak=kruka |
| 4:17 | toast | guld | ✅ |
| 4:17 | händelse | printKlar | sak=kruka n=45 |
| 4:17 | händelse | tagitUrPrint | sak=kruka n=1 |
| 4:24 | tanke | du | Servetter. Massor. Ali flyttar lådan när jag tittar. |
| 4:24 | väntar | du | Servetter. Massor. Ali flyttar lådan när jag tittar. |
| 4:25 | aliSalt | ali | 105 |
| 4:25 | aliSalt | ali | 80 |
| 4:26 | aliSalt | ali | 76 |
| 4:26 | aliSalt | ali | 72 |
| 4:26 | aliSalt | ali | 180 |
| 4:27 | sak | du | Två fabriker. Och det blir fler. |
| 4:27 | notis | tanke | 💭 Två fabriker. Och det blir fler. |
| 4:27 | röst | du | Två fabriker. Och det blir fler. · STORY |
| 4:29 | klar | du | Två fabriker. Och det blir fler. |
| 4:31 | sak | du | Servetter. Massor. Ali flyttar lådan när jag tittar. |
| 4:31 | notis | tanke | 💭 Servetter. Massor. Ali flyttar lådan när jag tittar. |
| 4:31 | röst | du | Servetter. Massor. Ali flyttar lådan när jag tittar. · REAKTION |
| 4:36 | klar | du | Servetter. Massor. Ali flyttar lådan när jag tittar. |
| 4:45 | händelse | printStart | sak=kruka |
| 4:47 | toast | guld | ✅ |
| 4:47 | händelse | printKlar | sak=kruka n=46 |
| 4:48 | händelse | tagitUrPrint | sak=kruka n=1 |
| 4:51 | sak | mamma | Jag har skickat virkade grytvantar (lila) med Rolf. Den ligger i postlådan. |
| 4:51 | sms | mamma | Jag har skickat virkade grytvantar (lila) med Rolf. Den ligger i postlådan. |
| 4:51 | sms-bubbla | mamma | Jag har skickat virkade grytvantar (lila) med Rolf. Den ligger i postlådan. |
| 4:51 | röst | mamma | Jag har skickat virkade grytvantar (lila) med Rolf. Den ligger i postlådan. · STORY |
| 4:55 | aliSalt | ali | 100 |
| 4:57 | klar | mamma | Jag har skickat virkade grytvantar (lila) med Rolf. Den ligger i postlådan. |
| 5:06 | händelse | printStart | sak=kruka |
| 5:09 | toast | guld | ✅ |
| 5:09 | händelse | printKlar | sak=kruka n=47 |
| 5:09 | händelse | tagitUrPrint | sak=kruka n=1 |
| 5:16 | aliSalt | ali | 95 |
| 5:22 | väntar | mamma | Det har ringt en karl som heter Rolf och frågat om du gillar korv. Vem är det? Varför har han mitt nummer? |
| 5:29 | väntar | värld:Mjau. | Mjau. |
| 5:34 | sak | värld:Mjau. | Mjau. |
| 5:34 | bubbla |  | Mjau. |
| 5:35 | skratt | du | kvarnen spottar |
| 5:37 | klar | värld:Mjau. | Mjau. |
| 5:38 | händelse | printStart | sak=pall |
| 5:43 | toast | guld | ✅ |
| 5:43 | händelse | printKlar | sak=pall n=23 |
| 5:44 | händelse | tagitUrPrint | sak=pall n=1 |
| 5:52 | aliSalt | ali | 180 |
| 5:57 | skratt | du | falsk tuta |
| 6:00 | händelse | printStart | sak=kruka |
| 6:03 | toast | guld | ✅ |
| 6:03 | händelse | printKlar | sak=kruka n=48 |
| 6:03 | händelse | tagitUrPrint | sak=kruka n=1 |
| 6:11 | aliSalt | ali | 90 |
| 6:11 | skratt | du | däcket rullar iväg |
| 6:18 | väntar | värld:TUUT! Hej grannen! | TUUT! Hej grannen! |
| 6:18 | sak | värld:TUUT! Hej grannen! | TUUT! Hej grannen! |
| 6:18 | bubbla |  | TUUT! Hej grannen! |
| 6:19 | händelse | printStart | sak=pall |
| 6:21 | klar | värld:TUUT! Hej grannen! | TUUT! Hej grannen! |
| 6:25 | toast | guld | ✅ |
| 6:25 | händelse | printKlar | sak=pall n=24 |
| 6:25 | händelse | tagitUrPrint | sak=pall n=1 |
| 6:33 | aliSalt | ali | 171 |
| 6:36 | upplåst | strom | sol |
| 6:36 | brott | RESERV | sol (strom 0 av 15) |
| 6:36 | händelse | upplast | id=sol flask=strom |
| 6:36 | paket |  | sms |
| 6:36 | väntar | ali | Ali här. ☀️ Solpaneler inne. Gratis ström från solen. Solen jobbar också hela dagen och klagar aldrig. Jag gillar solen. |
| 6:36 | sak | ali | Ali här. ☀️ Solpaneler inne. Gratis ström från solen. Solen jobbar också hela dagen och klagar aldrig. Jag gillar solen. |
| 6:36 | sms | ali | Ali här. ☀️ Solpaneler inne. Gratis ström från solen. Solen jobbar också hela dagen och klagar aldrig. Jag gillar solen. |
| 6:36 | sms-bubbla | ali | Ali här. ☀️ Solpaneler inne. Gratis ström från solen. Solen jobbar också hela dagen och klagar aldrig. Jag gillar solen. |
| 6:36 | röst | ali | Ali här. ☀️ Solpaneler inne. Gratis ström från solen. Solen jobbar också hela dagen och klagar aldrig. Jag gillar solen. · STORY |
| 6:41 | händelse | printStart | sak=kruka |
| 6:44 | toast | guld | ✅ |
| 6:44 | händelse | printKlar | sak=kruka n=49 |
| 6:44 | händelse | tagitUrPrint | sak=kruka n=1 |
| 6:46 | klar | ali | Ali här. ☀️ Solpaneler inne. Gratis ström från solen. Solen jobbar också hela dagen och klagar aldrig. Jag gillar solen. |
| 6:51 | aliSalt | ali | 86 |
| 6:55 | toast | guld | 3D-modell köpt – printa solpanel på skrivaren |
| 6:55 | händelse | kopt | sak=sol |
| 7:03 | händelse | printStart | sak=byggsats:sol |
| 7:07 | toast | bra | Del 1 av 3 klar |
| 7:10 | toast | bra | Del 2 av 3 klar |
| 7:13 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 7:18 | väntar | mamma | Jag har städat ditt rum. Det tog tre dagar. Jag hittade en macka från i somras. En macka. |
| 7:25 | toast | skak | handen skakar: fullt |
| 7:26 | väntar | värld:Mjau. | Mjau. |
| 7:29 | sak | värld:Mjau. | Mjau. |
| 7:29 | bubbla |  | Mjau. |
| 7:30 | händelse | printKlar | sak=byggsats:sol n=1 |
| 7:30 | toast | guld | ✅ |
| 7:31 | klar | värld:Mjau. | Mjau. |
| 7:36 | händelse | tagitUrPrint | sak=byggsats:sol n=1 |
| 7:36 | paket |  | sms |
| 7:36 | väntar | ali | Ali här. Jag såg Solpanel på avstånd. Ett streck blev lite snett. Mitt fel. Vackert ändå. |
| 7:39 | sak | ali | Ali här. Jag såg Solpanel på avstånd. Ett streck blev lite snett. Mitt fel. Vackert ändå. |
| 7:39 | sms | ali | Ali här. Jag såg Solpanel på avstånd. Ett streck blev lite snett. Mitt fel. Vackert ändå. |
| 7:39 | sms-bubbla | ali | Ali här. Jag såg Solpanel på avstånd. Ett streck blev lite snett. Mitt fel. Vackert ändå. |
| 7:39 | röst | ali | Ali här. Jag såg Solpanel på avstånd. Ett streck blev lite snett. Mitt fel. Vackert ändå. · REAKTION |
| 7:42 | händelse | placerat | sak=sol |
| 7:42 | paket |  | tanke |
| 7:42 | tanke | du | Den röda kvarnen drar mer än vinden orkar. Solen får hjälpa till. |
| 7:42 | väntar | du | Den röda kvarnen drar mer än vinden orkar. Solen får hjälpa till. |
| 7:42 | händelse | malKlart | id=sol6 del=Dag 6 – Röd PETG nasta=goran6 |
| 7:42 | väntar | du | Ge Göran ett eget ställe. |
| 7:42 | MÅL |  | Ge Göran ett eget ställe |
| 7:44 | kvitto-visas | du | Den röda kvarnen drar mer än vinden orkar. Solen får hjälpa till. |
| 7:44 | notis | tanke | 💭 Den röda kvarnen drar mer än vinden orkar. Solen får hjälpa till. |
| 7:44 | målruta |  | Ge Göran ett eget ställe |
| 7:46 | kvittens-bock |  | ✓ Sätt en solpanel på skjulets tak |
| 7:46 | klar | ali | Ali här. Jag såg Solpanel på avstånd. Ett streck blev lite snett. Mitt fel. Vackert ändå. |
| 7:48 | sak | du | Ge Göran ett eget ställe. |
| 7:48 | pil |  | Ge Göran ett eget ställe |
| 7:48 | röst | du | Ge Göran ett eget ställe. · MÅL |
| 7:49 | nick |  | nick:63 |
| 7:51 | klar | du | Ge Göran ett eget ställe. |
| 7:58 | händelse | kopt | sak=fagelskramma |
| 7:58 | röst | ali | AI:n och jag gjorde den i natt. Printa den. Snälla. · STORY |
| 7:58 | butiksbubbla | ali | Min Fågelskrämma… AI:n och jag gjorde den i natt. Printa den. Snälla. |
| 8:07 | händelse | printStart | sak=fagelskramma |
| 8:11 | toast | guld | ✅ |
| 8:11 | händelse | printKlar | sak=fagelskramma n=1 |
| 8:12 | händelse | tagitUrPrint | sak=fagelskramma n=1 |
| 8:13 | skratt | du | falsk tuta |
| 8:13 | väntar | värld:TUUT TUUT! | TUUT TUUT! |
| 8:13 | sak | värld:TUUT TUUT! | TUUT TUUT! |
| 8:13 | bubbla |  | TUUT TUUT! |
| 8:16 | klar | värld:TUUT TUUT! | TUUT TUUT! |
| 8:17 | händelse | placerat | sak=fagelskramma |
| 8:17 | paket |  | tanke |
| 8:17 | tanke | du | Göran har ett hem nu. Bättre än jag hade för en vecka sen. |
| 8:17 | väntar | du | Göran har ett hem nu. Bättre än jag hade för en vecka sen. |
| 8:17 | händelse | malKlart | id=goran6 del=Dag 6 – Röd PETG nasta=sov6 |
| 8:17 | paket |  | lapp |
| 8:17 | lapp | 📔 Dagbok | Dag 6 är slut. Nu vet pappa att jag bor HÄR. Blå plast säljer billigt. I morgon. |
| 8:17 | kvallsrad | du | Nu vet pappa att jag bor HÄR. Blå plast säljer billigt. I morgon. |
| 8:17 | MÅL |  | Klart för idag – sov när du vill |
| 8:18 | sak | du | Göran har ett hem nu. Bättre än jag hade för en vecka sen. |
| 8:18 | kvitto-visas | du | Göran har ett hem nu. Bättre än jag hade för en vecka sen. |
| 8:18 | notis | tanke | 💭 Göran har ett hem nu. Bättre än jag hade för en vecka sen. |
| 8:18 | röst | du | Göran har ett hem nu. Bättre än jag hade för en vecka sen. · REAKTION |
| 8:21 | målruta |  | Klart för idag – sov när du vill |
| 8:22 | klar | du | Göran har ett hem nu. Bättre än jag hade för en vecka sen. |
| 8:23 | sak | du | (nytt mål i rutan) |
| 8:23 | pil |  | Klart för idag – sov när du vill |
| 8:23 | klar | du | (nytt mål i rutan) |
| 8:24 | väntar | notis:🌇 Klockan är 21. Ali slår igen luckan.  | 🌇 Klockan är 21. Ali slår igen luckan. Dagens jobb är klart – gå in i skjulet och sov i sängen. |
| 8:25 | struken | mamma | Jag har bäddat i ditt rum. Ifall. |
| 8:27 | struken | mamma | Det har ringt en karl som heter Rolf och frågat om du gillar korv. Vem är det? Varför har han mitt nummer? |
| 8:29 | webbBetalt | du | 487 |
| 8:29 | nattkort | du | 🌙 Dag 6 är slut. God natt. zzz… Nu vet pappa att jag bor HÄR. Blå plast säljer billigt. I morgon. DAGENS PRINTAR Blomkruka × 5 Pall × 4 Fågelskrämma × 1 Totalt |

<details><summary>Botens handlingar dag 6</summary>

- 0:00 — dag 6 börjar — (6644 kr)
- 0:12 popup: "FORTSÄTT" (6644 kr)
- 0:28 gå till Rolfs postlåda (28 m) (6644 kr)
- 0:34 panel: "Rolfs postlåda
Det här låg i l" (7044 kr)
- 0:47 panel: "Rolfs postlåda
Det här låg i l" (7044 kr)
- 1:01 gå till pappa (20 m) (7044 kr)
- 2:12 gå till Ali (12 m) (7044 kr)
- 2:12 öppnar Alis butik – köpa röda kvarnen (petg) (7044 kr)
- 2:14 köper petgkvarn för 1200 kr (5844 kr)
- 2:20 gå till skrivaren (24 m) (5844 kr)
- 2:22 printar Röda kvarnen (PETG) (3 delar) (5844 kr)
- 2:35 tar ut 1 st ur skrivaren (5844 kr)
- 2:36 gå till platsen för röda kvarnen (petg) (7 m) (5844 kr)
- 2:37 ställer ut röda kvarnen (petg) (5844 kr)
- 2:45 gå till Rolfs postlåda (9 m) (5844 kr)
- 2:49 panel: "Rolfs postlåda
Det här låg i l" (5844 kr)
- 2:54 gå till säckkärran i högen (21 m) (5844 kr)
- 3:05 gå till PETG-kvarnen (19 m) (5844 kr)
- 3:05 tömmer det tunga i PETG-kvarnen (5844 kr)
- 3:10 gå till skrivaren (5 m) (5844 kr)
- 3:12 printar Pall (5844 kr)
- 3:18 tar ut 1 st ur skrivaren (5844 kr)
- 3:25 plockar 3 skräp på tippen (bär max 16) (5844 kr)
- 3:27 gå till kvarnen (13 m) (5844 kr)
- 3:34 gå till skrivaren (5 m) (5844 kr)
- 3:35 printar Pall (5844 kr)
- 3:41 tar ut 1 st ur skrivaren (5844 kr)
- 3:46 gå till datorn (21 m) (5844 kr)
- 3:54 panel: "Webbshopen · Soptippsvägen 1
B" (5844 kr)
- 4:03 panel: "Webbshopen · Soptippsvägen 1
B" (5844 kr)
- 4:10 gå till Rolfs postlåda (paket) (29 m) (5844 kr)
- 4:11 webbshop: 1 paket i postlådan (5844 kr)
- 4:11 tjänar pengar till väntar på flaskhalsen för sol: 5844/5884 kr → printar blomkruka (105 kr) (5844 kr)
- 4:12 gå till skrivaren (8 m) (5844 kr)
- 4:14 printar Blomkruka (5844 kr)
- 4:18 tar ut 1 st ur skrivaren (5844 kr)
- 4:24 gå till Ali (26 m) (5844 kr)
- 4:24 öppnar Alis butik – sälja (5844 kr)
- 4:26 säljer hos Ali: +513 kr (6357 kr)
- 4:38 tjänar pengar till väntar på flaskhalsen för sol: 6357/6397 kr → printar blomkruka (100 kr) (6357 kr)
- 4:43 gå till skrivaren (24 m) (6357 kr)
- 4:45 printar Blomkruka (6357 kr)
- 4:48 tar ut 1 st ur skrivaren (6357 kr)
- 4:53 gå till Ali (24 m) (6357 kr)
- 4:53 öppnar Alis butik – sälja (6357 kr)
- 4:55 säljer hos Ali: +100 kr (6457 kr)
- 4:59 tjänar pengar till väntar på flaskhalsen för sol: 6457/6497 kr → printar blomkruka (95 kr) (6457 kr)
- 5:05 gå till skrivaren (24 m) (6457 kr)
- 5:06 printar Blomkruka (6457 kr)
- 5:10 tar ut 1 st ur skrivaren (6457 kr)
- 5:15 gå till Ali (24 m) (6457 kr)
- 5:15 öppnar Alis butik – sälja (6457 kr)
- 5:16 säljer hos Ali: +95 kr (6552 kr)
- 5:18 tjänar pengar till väntar på flaskhalsen för sol: 6552/6592 kr → printar pall (180 kr) (6552 kr)
- 5:31 plockar 6 skräp på tippen (bär max 16) (6552 kr)
- 5:34 gå till kvarnen (12 m) (6552 kr)
- 5:37 gå till skrivaren (5 m) (6552 kr)
- 5:38 printar Pall (6552 kr)
- 5:45 tar ut 1 st ur skrivaren (6552 kr)
- 5:50 gå till Ali (27 m) (6552 kr)
- 5:50 öppnar Alis butik – sälja (6552 kr)
- 5:52 säljer hos Ali: +180 kr (6732 kr)
- 5:54 tjänar pengar till väntar på flaskhalsen för sol: 6732/6772 kr → printar blomkruka (90 kr) (6732 kr)
- 5:59 gå till skrivaren (24 m) (6732 kr)
- 6:00 printar Blomkruka (6732 kr)
- 6:04 tar ut 1 st ur skrivaren (6732 kr)
- 6:09 gå till Ali (24 m) (6732 kr)
- 6:09 öppnar Alis butik – sälja (6732 kr)
- 6:11 säljer hos Ali: +90 kr (6822 kr)
- 6:13 tjänar pengar till väntar på flaskhalsen för sol: 6822/6862 kr → printar pall (171 kr) (6822 kr)
- 6:18 gå till skrivaren (24 m) (6822 kr)
- 6:19 printar Pall (6822 kr)
- 6:26 tar ut 1 st ur skrivaren (6822 kr)
- 6:31 gå till Ali (24 m) (6822 kr)
- 6:31 öppnar Alis butik – sälja (6822 kr)
- 6:33 säljer hos Ali: +171 kr (6993 kr)
- 6:35 tjänar pengar till väntar på flaskhalsen för sol: 6993/7033 kr → printar blomkruka (86 kr) (6993 kr)
- 6:40 gå till skrivaren (24 m) (6993 kr)
- 6:41 printar Blomkruka (6993 kr)
- 6:45 tar ut 1 st ur skrivaren (6993 kr)
- 6:50 gå till Ali (24 m) (6993 kr)
- 6:50 öppnar Alis butik – sälja (6993 kr)
- 6:52 säljer hos Ali: +86 kr (7079 kr)
- 6:53 öppnar Alis butik – köpa solpanel (7079 kr)
- 6:56 köper sol för 400 kr (6679 kr)
- 7:02 gå till skrivaren (24 m) (6679 kr)
- 7:03 printar Solpanel (3 delar) (6679 kr)
- 7:25 plockar 10 skräp på tippen (bär max 16) (6679 kr)
- 7:28 gå till kvarnen (13 m) (6679 kr)
- 7:36 gå till skrivaren (5 m) (6679 kr)
- 7:36 tar ut 1 st ur skrivaren (6679 kr)
- 7:41 gå till platsen för solpanel (22 m) (6679 kr)
- 7:42 ställer ut solpanel (6679 kr)
- 7:57 gå till Ali (18 m) (6679 kr)
- 7:57 öppnar Alis butik – köpa receptet fågelskrämma (6679 kr)
- 7:59 köper fagelskramma för 40 kr (6639 kr)
- 8:05 gå till skrivaren (24 m) (6639 kr)
- 8:07 printar Fågelskrämma (6639 kr)
- 8:12 tar ut 1 st ur skrivaren (6639 kr)
- 8:16 gå till platsen för fågelskrämma (18 m) (6639 kr)
- 8:17 ställer ut fågelskrämma (6639 kr)
- 8:27 gå till sängen (7 m) (6639 kr)

</details>

## Dag 7

| Tid | Källa | Vem | Text |
|---|---|---|---|
| 8:29 | vara | ali | pall |
| 8:29 | händelse | malKlart | id=sov6 del=Dag 6 – Röd PETG nasta=r7-bygg-petg-skrivaren |
| 8:29 | MÅL |  | Bygg PETG-skrivaren |
| 0:01 | händelse | dagenBorjar | dag=7 |
| 0:01 | meddelande | du | Dag 7. 15 dagar till jul. Säljer jag inget blir det tomt till jul. |
| 0:01 | dagbokkort | du | PETG-skrivaren · Dag 7. 15 dagar till jul. Säljer jag inget blir det tomt till jul. |
| 0:01 | röst | du | Dag 7. 15 dagar till jul. PETG-skrivaren. Säljer jag inget blir det tomt till jul. · STORY |
| 0:03 | paket |  | sms |
| 0:03 | väntar | rolf | Rolf här. Ja har en grej. Lite känslig. Ja la en lapp i postlådan. Läs den o bränn den sen. /R |
| 0:09 | händelse | morgonkortStangt | dag=7 |
| 0:09 | struken | kedja | d7 |
| 0:09 | väntar | du | Röd plast kräver en egen skrivare. Den vanliga vill inte. |
| 0:09 | målruta |  | Bygg PETG-skrivaren |
| 0:09 | väntar | notis:1 paket i natt · +487 kr | 1 paket i natt · +487 kr |
| 0:10 | väntar | notis:Pall · +50 % | Pall · +50 % |
| 0:14 | sak | du | Röd plast kräver en egen skrivare. Den vanliga vill inte. |
| 0:14 | pil |  | Bygg PETG-skrivaren |
| 0:14 | notis | tanke | 💭 Röd plast kräver en egen skrivare. Den vanliga vill inte. |
| 0:14 | röst | du | Röd plast kräver en egen skrivare. Den vanliga vill inte. · MÅL |
| 0:14 | nick |  | nick:65 |
| 0:19 | klar | du | Röd plast kräver en egen skrivare. Den vanliga vill inte. |
| 0:21 | struken | notis:🌇 Klockan är 21. Ali slår igen luckan.  | 🌇 Klockan är 21. Ali slår igen luckan. Dagens jobb är klart – gå in i skjulet och sov i sängen. |
| 0:21 | sak | notis:1 paket i natt · +487 kr | 1 paket i natt · +487 kr |
| 0:21 | notis |  | 1 paket i natt · +487 kr |
| 0:23 | klar | notis:1 paket i natt · +487 kr | 1 paket i natt · +487 kr |
| 0:33 | struken | notis:Pall · +50 % | Pall · +50 % |
| 0:33 | struken | mamma | Jag har städat ditt rum. Det tog tre dagar. Jag hittade en macka från i somras. En macka. |
| 0:34 | väntar | info:guld | Göran tycker om fågelskrämman. Han sitter på den. |
| 0:34 | sak | info:guld | Göran tycker om fågelskrämman. Han sitter på den. |
| 0:34 | kvitto-visas | info:guld | Göran tycker om fågelskrämman. Han sitter på den. |
| 0:34 | toast | guld | Göran tycker om fågelskrämman. Han sitter på den. |
| 0:36 | klar | info:guld | Göran tycker om fågelskrämman. Han sitter på den. |
| 0:40 | röst | ali | Jag ser 3D-skrivarvideor på YouTube i lagret. Inte för att jag har tid. Jag har aldrig tid. · STORY |
| 0:40 | butiksbubbla | ali | Jag ser 3D-skrivarvideor på YouTube i lagret. Inte för att jag har tid. Jag har aldrig tid. |
| 0:42 | skratt | du | Alis dyr-pling |
| 0:42 | toast | guld | 3D-modell köpt – printa petg-skrivare på skrivaren |
| 0:42 | händelse | kopt | sak=skrivarepetg |
| 0:50 | händelse | printStart | sak=byggsats:skrivarepetg |
| 0:54 | toast | bra | Del 1 av 5 klar |
| 0:58 | skratt | du | kvarnen spottar |
| 0:59 | toast | bra | Del 2 av 5 klar |
| 1:03 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 1:06 | väntar | värld:Mjau. | Mjau. |
| 1:16 | sak | värld:Mjau. | Mjau. |
| 1:16 | bubbla |  | Mjau. |
| 1:17 | toast | bra | Del 3 av 5 klar |
| 1:18 | klar | värld:Mjau. | Mjau. |
| 1:21 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 1:21 | toast | bra | Del 4 av 5 klar |
| 1:26 | händelse | printKlar | sak=byggsats:skrivarepetg n=1 |
| 1:26 | toast | guld | ✅ |
| 1:33 | händelse | tagitUrPrint | sak=byggsats:skrivarepetg n=1 |
| 1:33 | paket |  | sms |
| 1:33 | väntar | ali | Ali här. Ännu en ritning som blev på riktigt: PETG-skrivare. Semesterkassan växer. Livet växer. |
| 1:36 | händelse | placerat | sak=skrivarepetg |
| 1:36 | händelse | malKlart | id=r7-bygg-petg-skrivaren del=Dag 7 – PETG-skrivaren nasta=r7-printa-designvas-rod |
| 1:36 | väntar | du | En vas. Röd. Design. Ali kommer att låtsas att han förstår den. |
| 1:36 | MÅL |  | Printa en designvas i röd PETG |
| 1:37 | sak | du | En vas. Röd. Design. Ali kommer att låtsas att han förstår den. |
| 1:37 | målruta |  | Printa en designvas i röd PETG |
| 1:37 | pil |  | Printa en designvas i röd PETG |
| 1:37 | notis | tanke | 💭 En vas. Röd. Design. Ali kommer att låtsas att han förstår den. |
| 1:37 | röst | du | En vas. Röd. Design. Ali kommer att låtsas att han förstår den. · MÅL |
| 1:37 | nick |  | nick:66 |
| 1:40 | kvittens-bock |  | ✓ Bygg PETG-skrivaren |
| 1:42 | klar | du | En vas. Röd. Design. Ali kommer att låtsas att han förstår den. |
| 1:45 | väntar | värld:TUUT TUUT! | TUUT TUUT! |
| 1:50 | sak | ali | Ali här. Ännu en ritning som blev på riktigt: PETG-skrivare. Semesterkassan växer. Livet växer. |
| 1:50 | sms | ali | Ali här. Ännu en ritning som blev på riktigt: PETG-skrivare. Semesterkassan växer. Livet växer. |
| 1:50 | sms-bubbla | ali | Ali här. Ännu en ritning som blev på riktigt: PETG-skrivare. Semesterkassan växer. Livet växer. |
| 1:50 | röst | ali | Ali här. Ännu en ritning som blev på riktigt: PETG-skrivare. Semesterkassan växer. Livet växer. · REAKTION |
| 1:52 | skratt | du | Alis dyr-pling |
| 1:52 | händelse | kopt | sak=n2_vas |
| 1:52 | butiksbubbla | ali | Designvas i röd PETG. Röd. AI:n sa att röd säljer. AI:n har aldrig sålt något. Men okej. |
| 1:53 | väntar | ali | Röd. AI:n sa att röd säljer. AI:n har aldrig sålt något. Men okej. |
| 1:58 | klar | ali | Ali här. Ännu en ritning som blev på riktigt: PETG-skrivare. Semesterkassan växer. Livet växer. |
| 2:00 | sak | ali | Röd. AI:n sa att röd säljer. AI:n har aldrig sålt något. Men okej. |
| 2:00 | röst | ali | Röd. AI:n sa att röd säljer. AI:n har aldrig sålt något. Men okej. · STORY |
| 2:01 | händelse | printStart | sak=n2_vas |
| 2:01 | toast | bra | 🔗 Slangen kopplad |
| 2:04 | toast | guld | ✅ |
| 2:04 | händelse | printKlar | sak=n2_vas n=1 |
| 2:04 | händelse | malKlart | id=r7-printa-designvas-rod del=Dag 7 – PETG-skrivaren nasta=r7-salj-designvasen |
| 2:04 | väntar | du | Vasen till Ali. Han betalar mer för röd. |
| 2:04 | MÅL |  | Sälj designvasen |
| 2:05 | händelse | tagitUrPrint | sak=n2_vas n=1 |
| 2:05 | väntar | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått pirran. Och röda kvarnen. Vi tar en låt på det. Den här är till dig, Gunnar. |
| 2:05 | radio | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått pirran. Och röda kvarnen. Vi tar en låt på det. Den här är till dig, Gunnar. |
| 2:05 | skratt | du | Radio-Kjelle |
| 2:06 | klar | ali | Röd. AI:n sa att röd säljer. AI:n har aldrig sålt något. Men okej. |
| 2:08 | målruta |  | Sälj designvasen |
| 2:08 | sak | du | Vasen till Ali. Han betalar mer för röd. |
| 2:08 | pil |  | Sälj designvasen |
| 2:08 | notis | tanke | 💭 Vasen till Ali. Han betalar mer för röd. |
| 2:08 | röst | du | Vasen till Ali. Han betalar mer för röd. · MÅL |
| 2:08 | kvittens-bock |  | ✓ Printa en designvas i röd PETG |
| 2:11 | klar | du | Vasen till Ali. Han betalar mer för röd. |
| 2:13 | struken | värld:TUUT TUUT! | TUUT TUUT! |
| 2:13 | sak | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått pirran. Och röda kvarnen. Vi tar en låt på det. Den här är till dig, Gunnar. |
| 2:13 | notis |  | 📻 Radio Tippen: Radio Tippen, Kjelle här. Skjulet vid tippen har fått pirran. Och röda kvarnen. Vi tar en låt på det. Den här är till dig, Gunnar. |
| 2:13 | röst | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått pirran. Och röda kvarnen. Vi tar en låt på det. Den här är till dig, Gunnar. · REAKTION |
| 2:24 | klar | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått pirran. Och röda kvarnen. Vi tar en låt på det. Den här är till dig, Gunnar. |
| 2:25 | aliSalt | ali | 790 |
| 2:26 | händelse | malKlart | id=r7-salj-designvasen del=Dag 7 – PETG-skrivaren nasta=saljlada |
| 2:26 | struken | kedja | vasSald |
| 2:26 | väntar | du | En säljlåda. Då slipper jag springa till Ali med varje vas. |
| 2:26 | målruta |  | Bygg säljlådan vid samlingsplatsen |
| 2:26 | MÅL |  | Bygg säljlådan vid samlingsplatsen |
| 2:26 | sak | du | En säljlåda. Då slipper jag springa till Ali med varje vas. |
| 2:26 | pil |  | Bygg säljlådan vid samlingsplatsen |
| 2:26 | notis | tanke | 💭 En säljlåda. Då slipper jag springa till Ali med varje vas. |
| 2:26 | röst | du | En säljlåda. Då slipper jag springa till Ali med varje vas. · MÅL |
| 2:30 | kvittens-bock |  | ✓ Sälj designvasen |
| 2:31 | klar | du | En säljlåda. Då slipper jag springa till Ali med varje vas. |
| 2:35 | toast | guld | 3D-modell köpt – printa säljlåda på skrivaren |
| 2:35 | händelse | kopt | sak=saljlada |
| 2:43 | händelse | printStart | sak=byggsats:saljlada |
| 2:46 | toast | bra | Del 1 av 2 klar |
| 2:49 | händelse | printKlar | sak=byggsats:saljlada n=1 |
| 2:49 | toast | guld | ✅ |
| 2:50 | händelse | tagitUrPrint | sak=byggsats:saljlada n=1 |
| 2:54 | händelse | placerat | sak=saljlada |
| 2:54 | kvittens | ali | Jag hämtar varje morgon. Du lägger i, jag betalar. |
| 2:54 | väntar | ali | Jag hämtar varje morgon. Du lägger i, jag betalar. |
| 2:54 | paket |  | sms |
| 2:54 | väntar | rolf | Lådan vid fabriken! Ali kommer mä sin lilla bil varje morron. Ja vinkar. Han vinkar int. /R |
| 2:54 | händelse | malKlart | id=saljlada del=Dag 7 – PETG-skrivaren nasta=saljlada3 |
| 2:54 | väntar | du | Vaserna i lådan. Ali hämtar själv. |
| 2:54 | MÅL |  | Lägg 3 vaser i säljlådan · 0/3 |
| 2:55 | sak | ali | Jag hämtar varje morgon. Du lägger i, jag betalar. |
| 2:55 | notis |  | Jag hämtar varje morgon. Du lägger i, jag betalar. |
| 2:55 | röst | ali | Jag hämtar varje morgon. Du lägger i, jag betalar. · STORY |
| 2:55 | målruta |  | Lägg 3 vaser i säljlådan · 0/3 |
| 2:59 | klar | ali | Jag hämtar varje morgon. Du lägger i, jag betalar. |
| 3:00 | sak | du | Vaserna i lådan. Ali hämtar själv. |
| 3:00 | pil |  | Lägg 3 vaser i säljlådan · 0/3 |
| 3:00 | notis | tanke | 💭 Vaserna i lådan. Ali hämtar själv. |
| 3:00 | röst | du | Vaserna i lådan. Ali hämtar själv. · MÅL |
| 3:03 | klar | du | Vaserna i lådan. Ali hämtar själv. |
| 3:07 | väntar | bud | (tips) |
| 3:07 | sak | bud | (tips) |
| 3:09 | klar | bud | (tips) |
| 3:09 | händelse | printStart | sak=n2_vas |
| 3:11 | meddelande | mamma | Fick du kompotten? Det är rotfruktsgratäng. Potatisen var slut så jag tog kålrot, palsternacka och lite selleri. Värm i ugnen! Har du ugn? |
| 3:12 | röst | mamma | Fick du kompotten? Det är rotfruktsgratäng. Potatisen var slut så jag tog kålrot, palsternacka och lite selleri. Värm i ugnen! Har du ugn? · STORY |
| 3:26 | paket |  | sms |
| 3:26 | väntar | mamma | Ingen ugn. Jag skickar en ugn med pappa. … Pappa säger att den inte får plats i bilen. Ät den kall då. |
| 3:39 | händelse | brevLast | id=m_kompott |
| 3:40 | toast | guld | ✅ |
| 3:40 | händelse | printKlar | sak=n2_vas n=2 |
| 3:41 | sak | mamma | Ingen ugn. Jag skickar en ugn med pappa. … Pappa säger att den inte får plats i bilen. Ät den kall då. |
| 3:41 | sms | mamma | Ingen ugn. Jag skickar en ugn med pappa. … Pappa säger att den inte får plats i bilen. Ät den kall då. |
| 3:41 | sms-bubbla | mamma | Ingen ugn. Jag skickar en ugn med pappa. … Pappa säger att den inte får plats i bilen. Ät den kall då. |
| 3:41 | röst | mamma | Ingen ugn. Jag skickar en ugn med pappa. … Pappa säger att den inte får plats i bilen. Ät den kall då. · STORY |
| 3:41 | händelse | tagitUrPrint | sak=n2_vas n=1 |
| 3:46 | skratt | du | falsk tuta |
| 3:50 | klar | mamma | Ingen ugn. Jag skickar en ugn med pappa. … Pappa säger att den inte får plats i bilen. Ät den kall då. |
| 4:08 | väntar | värld:TUUT TUUT! | TUUT TUUT! |
| 4:09 | sak | värld:TUUT TUUT! | TUUT TUUT! |
| 4:09 | bubbla |  | TUUT TUUT! |
| 4:09 | väntar | info:bra | 📦 1 saker i lådan · Ali hämtar i morgon bitti |
| 4:12 | klar | värld:TUUT TUUT! | TUUT TUUT! |
| 4:16 | sak | info:bra | 📦 1 saker i lådan · Ali hämtar i morgon bitti |
| 4:16 | kvitto-visas | info:bra | 📦 1 saker i lådan · Ali hämtar i morgon bitti |
| 4:16 | toast | bra | 📦 1 saker i lådan · Ali hämtar i morgon bitti |
| 4:18 | klar | info:bra | 📦 1 saker i lådan · Ali hämtar i morgon bitti |
| 4:24 | händelse | printStart | sak=n2_vas |
| 4:27 | toast | guld | ✅ |
| 4:27 | händelse | printKlar | sak=n2_vas n=3 |
| 4:28 | händelse | tagitUrPrint | sak=n2_vas n=1 |
| 4:47 | väntar | info:bra | 📦 1 saker i lådan · Ali hämtar i morgon bitti |
| 4:53 | sak | info:bra | 📦 1 saker i lådan · Ali hämtar i morgon bitti |
| 4:53 | kvitto-visas | info:bra | 📦 1 saker i lådan · Ali hämtar i morgon bitti |
| 4:53 | toast | bra | 📦 1 saker i lådan · Ali hämtar i morgon bitti |
| 4:55 | klar | info:bra | 📦 1 saker i lådan · Ali hämtar i morgon bitti |
| 5:01 | händelse | printStart | sak=n2_vas |
| 5:04 | toast | guld | ✅ |
| 5:04 | händelse | printKlar | sak=n2_vas n=4 |
| 5:05 | händelse | tagitUrPrint | sak=n2_vas n=1 |
| 5:24 | väntar | info:bra | 📦 1 saker i lådan · Ali hämtar i morgon bitti |
| 5:31 | sak | info:bra | 📦 1 saker i lådan · Ali hämtar i morgon bitti |
| 5:31 | kvitto-visas | info:bra | 📦 1 saker i lådan · Ali hämtar i morgon bitti |
| 5:31 | toast | bra | 📦 1 saker i lådan · Ali hämtar i morgon bitti |
| 5:31 | händelse | malKlart | id=saljlada3 del=Dag 7 – PETG-skrivaren nasta=sov7 |
| 5:31 | paket |  | lapp |
| 5:31 | väntar | du | Dag 7 är slut. Ryggen värker av allt bärande. |
| 5:31 | MÅL |  | Klart för idag – sov när du vill |
| 5:33 | klar | info:bra | 📦 1 saker i lådan · Ali hämtar i morgon bitti |
| 5:34 | målruta |  | Klart för idag – sov när du vill |
| 5:35 | kvittens-bock |  | ✓ Lägg 3 vaser i säljlådan · 3/3 |
| 5:35 | sak | du | (nytt mål i rutan) |
| 5:35 | pil |  | Klart för idag – sov när du vill |
| 5:35 | klar | du | (nytt mål i rutan) |
| 5:38 | väntar | notis:🌇 Klockan är 21. Ali slår igen luckan.  | 🌇 Klockan är 21. Ali slår igen luckan. Dagens jobb är klart – gå in i skjulet och sov i sängen. |
| 5:42 | aliSalt | ali | 2141 |
| 5:42 | nattkort | du | 🌙 Dag 7 är slut. God natt. zzz… Ryggen värker av allt bärande. DAGENS PRINTAR Designvas i röd PETG × 4 Totalt 4 printar 💰 Tjänat i dag +2 931 kr |

<details><summary>Botens handlingar dag 7</summary>

- 0:00 — dag 7 börjar — (7126 kr)
- 0:09 popup: "FORTSÄTT" (7126 kr)
- 0:25 gå till Rolfs postlåda (29 m) (7126 kr)
- 0:33 panel: "En lapp från Rolf
Lite olaglig" (7126 kr)
- 0:40 gå till Ali (31 m) (7126 kr)
- 0:40 öppnar Alis butik – köpa petg-skrivare (7126 kr)
- 0:42 köper skrivarepetg för 1500 kr (5626 kr)
- 0:48 gå till skrivaren (24 m) (5626 kr)
- 0:50 printar PETG-skrivare (5 delar) (5626 kr)
- 1:12 plockar 5 skräp på tippen (bär max 16) (5626 kr)
- 1:15 gå till kvarnen (15 m) (5626 kr)
- 1:33 gå till skrivaren (5 m) (5626 kr)
- 1:33 tar ut 1 st ur skrivaren (5626 kr)
- 1:35 gå till platsen för petg-skrivare (4 m) (5626 kr)
- 1:36 ställer ut petg-skrivare (5626 kr)
- 1:50 gå till Ali (29 m) (5626 kr)
- 1:50 öppnar Alis butik – köpa receptet designvas i röd petg (5626 kr)
- 1:53 köper n2_vas för 600 kr (5026 kr)
- 2:00 gå till skrivaren (29 m) (5026 kr)
- 2:01 printar Designvas i röd PETG (5026 kr)
- 2:06 tar ut 1 st ur skrivaren (5026 kr)
- 2:24 gå till Ali (29 m) (5026 kr)
- 2:24 öppnar Alis butik – sälja vasen (5026 kr)
- 2:26 säljer hos Ali: +790 kr (5816 kr)
- 2:33 öppnar Alis butik – köpa säljlåda (5816 kr)
- 2:36 köper saljlada för 400 kr (5416 kr)
- 2:42 gå till skrivaren (24 m) (5416 kr)
- 2:43 printar Säljlåda (2 delar) (5416 kr)
- 2:51 tar ut 1 st ur skrivaren (5416 kr)
- 2:53 gå till platsen för säljlåda (9 m) (5416 kr)
- 2:54 ställer ut säljlåda (5416 kr)
- 3:08 gå till skrivaren (13 m) (5416 kr)
- 3:09 printar Designvas i röd PETG (5416 kr)
- 3:26 popup: "Jag har ingen ugn." (5416 kr)
- 3:39 popup: "Läst" (5416 kr)
- 3:42 tar ut 1 st ur skrivaren (5416 kr)
- 3:54 gå till säljlådan (10 m) (5416 kr)
- 4:01 panel: "Säljlådan
0 saker i lådan
Lägg" (5416 kr)
- 4:09 panel: "Säljlådan
0 saker i lådan
Lägg" (5416 kr)
- 4:16 panel: "Säljlådan
1 saker i lådan
Lägg" (5416 kr)
- 4:16 lägger vaserna i säljlådan (DA) (5416 kr)
- 4:22 gå till skrivaren (10 m) (5416 kr)
- 4:24 printar Designvas i röd PETG (5416 kr)
- 4:28 tar ut 1 st ur skrivaren (5416 kr)
- 4:32 gå till säljlådan (10 m) (5416 kr)
- 4:38 panel: "Säljlådan
1 saker i lådan
Lägg" (5416 kr)
- 4:46 panel: "Säljlådan
1 saker i lådan
Lägg" (5416 kr)
- 4:53 panel: "Säljlådan
2 saker i lådan
Lägg" (5416 kr)
- 4:54 lägger vaserna i säljlådan (DA) (5416 kr)
- 5:00 gå till skrivaren (10 m) (5416 kr)
- 5:01 printar Designvas i röd PETG (5416 kr)
- 5:06 tar ut 1 st ur skrivaren (5416 kr)
- 5:09 gå till säljlådan (10 m) (5416 kr)
- 5:16 panel: "Säljlådan
2 saker i lådan
Lägg" (5416 kr)
- 5:24 panel: "Säljlådan
2 saker i lådan
Lägg" (5416 kr)
- 5:31 panel: "Säljlådan
3 saker i lådan
Lägg" (5416 kr)
- 5:31 lägger vaserna i säljlådan (DA) (5416 kr)
- 5:40 gå till sängen (13 m) (5416 kr)

</details>

## Dag 8

| Tid | Källa | Vem | Text |
|---|---|---|---|
| 5:42 | vara | ali | n2_vas |
| 5:42 | händelse | malKlart | id=sov7 del=Dag 7 – PETG-skrivaren nasta=r8-bygg-skrivare-l |
| 5:42 | MÅL |  | Printa och sälj |
| 0:01 | händelse | dagenBorjar | dag=8 |
| 0:01 | meddelande | du | Dag 8. 14 dagar till jul. Utan mer ström står allt still i kylan. |
| 0:01 | dagbokkort | du | Magnetpistolen · Dag 8. 14 dagar till jul. Utan mer ström står allt still i kylan. |
| 0:01 | röst | du | Dag 8. 14 dagar till jul. Magnetpistolen. Utan mer ström står allt still i kylan. · STORY |
| 0:08 | händelse | morgonkortStangt | dag=8 |
| 0:08 | struken | kedja | d8 |
| 0:09 | väntar | notis:3 st i natt · +2 141 kr | 3 st i natt · +2 141 kr |
| 0:10 | väntar | notis:Designvas i röd PETG · +50 % | Designvas i röd PETG · +50 % |
| 0:12 | målruta |  | Printa och sälj |
| 0:14 | sak | du | (nytt mål i rutan) |
| 0:14 | pil |  | Printa och sälj |
| 0:14 | klar | du | (nytt mål i rutan) |
| 0:16 | sak | du | Dag 7 är slut. Ryggen värker av allt bärande. |
| 0:16 | lapp | 📔 Dagbok | Dag 7 är slut. Ryggen värker av allt bärande. |
| 0:16 | kvallsrad | du | Ryggen värker av allt bärande. |
| 0:16 | klar | du | Dag 7 är slut. Ryggen värker av allt bärande. |
| 0:18 | struken | notis:🌇 Klockan är 21. Ali slår igen luckan.  | 🌇 Klockan är 21. Ali slår igen luckan. Dagens jobb är klart – gå in i skjulet och sov i sängen. |
| 0:18 | väntar | info:info | Pappa kommer gående. Han bär på en kasse … |
| 0:18 | scenInfo | pappa | Pappa kommer |
| 0:20 | sak | notis:3 st i natt · +2 141 kr | 3 st i natt · +2 141 kr |
| 0:20 | notis |  | 3 st i natt · +2 141 kr |
| 0:23 | klar | notis:3 st i natt · +2 141 kr | 3 st i natt · +2 141 kr |
| 0:24 | händelse | printStart | sak=kruka |
| 0:25 | sak | notis:Designvas i röd PETG · +50 % | Designvas i röd PETG · +50 % |
| 0:25 | notis |  | Designvas i röd PETG · +50 % |
| 0:26 | skratt | du | falsk tuta |
| 0:26 | toast | guld | ✅ |
| 0:26 | händelse | printKlar | sak=kruka n=50 |
| 0:27 | händelse | tagitUrPrint | sak=kruka n=1 |
| 0:27 | klar | notis:Designvas i röd PETG · +50 % | Designvas i röd PETG · +50 % |
| 0:29 | struken | info:info | Pappa kommer gående. Han bär på en kasse … |
| 0:29 | paket |  | sms |
| 0:29 | väntar | rolf | Grannen står me kikare i fönstret igen. Bry dej int. /R |
| 0:29 | paket |  | sms |
| 0:29 | väntar | ali | Ali här. Kolfiber. Dyrt. Lätt. Jag har ingen kvarn för det. |
| 0:33 | väntar | värld:Mjau. | Mjau. |
| 0:39 | sak | värld:Mjau. | Mjau. |
| 0:39 | bubbla |  | Mjau. |
| 0:41 | väntar | bud | (tips) |
| 0:42 | klar | värld:Mjau. | Mjau. |
| 0:44 | sak | bud | (tips) |
| 0:45 | klar | bud | (tips) |
| 0:47 | händelse | printStart | sak=kruka |
| 0:47 | meddelande | mamma | Din bror säger att du har pengar. Du har aldrig haft pengar. Har du sålt en njure? |
| 0:48 | röst | mamma | Din bror säger att du har pengar. Du har aldrig haft pengar. Har du sålt en njure? · STORY |
| 0:59 | paket |  | sms |
| 0:59 | väntar | mamma | Printar. Vad är printar. Är det lagligt? Säg att det är lagligt. |
| 1:10 | händelse | brevLast | id=m_pengar |
| 1:11 | struken | ali | Ali här. Kolfiber. Dyrt. Lätt. Jag har ingen kvarn för det. |
| 1:11 | sak | mamma | Printar. Vad är printar. Är det lagligt? Säg att det är lagligt. |
| 1:11 | sms | mamma | Printar. Vad är printar. Är det lagligt? Säg att det är lagligt. |
| 1:11 | sms-bubbla | mamma | Printar. Vad är printar. Är det lagligt? Säg att det är lagligt. |
| 1:11 | röst | mamma | Printar. Vad är printar. Är det lagligt? Säg att det är lagligt. · STORY |
| 1:12 | väntar | info:fel | Göran snodde blomkruka. |
| 1:12 | toast | guld | ✅ |
| 1:12 | händelse | printKlar | sak=kruka n=51 |
| 1:13 | händelse | tagitUrPrint | sak=kruka n=1 |
| 1:13 | kvitto-visas | info:fel | Göran snodde blomkruka. |
| 1:13 | toast | fel | Göran snodde blomkruka. |
| 1:15 | händelse | printStart | sak=kruka |
| 1:17 | klar | mamma | Printar. Vad är printar. Är det lagligt? Säg att det är lagligt. |
| 1:18 | toast | guld | ✅ |
| 1:18 | händelse | printKlar | sak=kruka n=52 |
| 1:18 | händelse | tagitUrPrint | sak=kruka n=1 |
| 1:32 | webb | du | packade 1 kruka |
| 1:40 | väntar | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått petg-skrivare. Och säljlåda. Mer säger jag inte. Gunnar vet. |
| 1:40 | radio | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått petg-skrivare. Och säljlåda. Mer säger jag inte. Gunnar vet. |
| 1:40 | skratt | du | Radio-Kjelle |
| 1:40 | sak | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått petg-skrivare. Och säljlåda. Mer säger jag inte. Gunnar vet. |
| 1:40 | notis |  | 📻 Radio Tippen: Radio Tippen, Kjelle här. Skjulet vid tippen har fått petg-skrivare. Och säljlåda. Mer säger jag inte. Gunnar vet. |
| 1:40 | röst | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått petg-skrivare. Och säljlåda. Mer säger jag inte. Gunnar vet. · REAKTION |
| 1:41 | webb | du | packade 1 kruka |
| 1:50 | klar | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått petg-skrivare. Och säljlåda. Mer säger jag inte. Gunnar vet. |
| 1:55 | väntar | info:bra | 📦 Paketet till Kenneth på bilskroten ligger i postlådan – Rolf tar det till posten |
| 1:55 | sak | info:bra | 📦 Paketet till Kenneth på bilskroten ligger i postlådan – Rolf tar det till posten |
| 1:55 | kvitto-visas | info:bra | 📦 Paketet till Kenneth på bilskroten ligger i postlådan – Rolf tar det till posten |
| 1:55 | toast | bra | 📦 Paketet till Kenneth på bilskroten ligger i postlådan – Rolf tar det till posten |
| 1:56 | väntar | info:bra | 📦 Paketet till En lärare i Sundsvall ligger i postlådan – Rolf tar det till posten |
| 1:57 | klar | info:bra | 📦 Paketet till Kenneth på bilskroten ligger i postlådan – Rolf tar det till posten |
| 1:57 | sak | info:bra | 📦 Paketet till En lärare i Sundsvall ligger i postlådan – Rolf tar det till posten |
| 1:57 | kvitto-visas | info:bra | 📦 Paketet till En lärare i Sundsvall ligger i postlådan – Rolf tar det till posten |
| 1:57 | toast | bra | 📦 Paketet till En lärare i Sundsvall ligger i postlådan – Rolf tar det till posten |
| 1:59 | klar | info:bra | 📦 Paketet till En lärare i Sundsvall ligger i postlådan – Rolf tar det till posten |
| 2:00 | händelse | printStart | sak=n2_vas |
| 2:03 | toast | guld | ✅ |
| 2:03 | händelse | printKlar | sak=n2_vas n=5 |
| 2:04 | händelse | tagitUrPrint | sak=n2_vas n=1 |
| 2:11 | röst | ali | Semesterkassan: 340 kr. Köp nåt, min vän. · STORY |
| 2:11 | butiksbubbla | ali | Semesterkassan: 340 kr. Köp nåt, min vän. |
| 2:12 | aliSalt | ali | 1185 |
| 2:19 | väntar | rolf | Hittade Birgittas gamla kaffekopp under sängen i husvagnen. Ja dricker inte ur den. Ja bara tittar på den. /R |
| 2:21 | skratt | du | kvarnen rapar |
| 2:21 | paket |  | tanke |
| 2:21 | tanke | du | Den bränns. |
| 2:21 | väntar | du | Den bränns. |
| 2:21 | paket |  | tanke |
| 2:21 | tanke | du | Mamma hade rätt. Säg inget. |
| 2:21 | struken | du | Den bränns. |
| 2:21 | väntar | du | Mamma hade rätt. Säg inget. |
| 2:21 | skratt | du | grytvantarna |
| 2:24 | sak | du | Mamma hade rätt. Säg inget. |
| 2:24 | notis | tanke | 💭 Mamma hade rätt. Säg inget. |
| 2:24 | röst | du | Mamma hade rätt. Säg inget. · REAKTION |
| 2:25 | toast | guld | 🧵 |
| 2:27 | händelse | printStart | sak=n2_vas |
| 2:27 | klar | du | Mamma hade rätt. Säg inget. |
| 2:30 | toast | guld | ✅ |
| 2:30 | händelse | printKlar | sak=n2_vas n=6 |
| 2:31 | händelse | tagitUrPrint | sak=n2_vas n=1 |
| 2:33 | toast | guld | 🧵 |
| 2:39 | aliSalt | ali | 1126 |
| 2:43 | väntar | värld:TUUT! Hej grannen! | TUUT! Hej grannen! |
| 2:44 | sak | värld:TUUT! Hej grannen! | TUUT! Hej grannen! |
| 2:44 | bubbla |  | TUUT! Hej grannen! |
| 2:47 | klar | värld:TUUT! Hej grannen! | TUUT! Hej grannen! |
| 2:48 | händelse | printStart | sak=n2_vas |
| 2:52 | skratt | du | plastspagetti |
| 2:52 | toast | guld | ✅ |
| 2:52 | händelse | printKlar | sak=n2_vas n=7 |
| 2:52 | händelse | tagitUrPrint | sak=spagetti n=1 |
| 2:55 | upplåst | skrivare | skrivare3 |
| 2:55 | brott | UPPLÅST | skrivare3 (skrivare 755 av 75) |
| 2:55 | händelse | upplast | id=skrivare3 flask=skrivare |
| 2:55 | paket |  | tanke → sms |
| 2:55 | tanke | du | Skrivarna står aldrig still. Jag behöver en större. |
| 2:55 | väntar | du | Skrivarna står aldrig still. Jag behöver en större. |
| 2:55 | väntar | ali | Ali här. Skrivare L. En meter byggvolym. Jag bad AI:n om något stort. Den gjorde något ENORMT. Den är större än min butik. Nästan. |
| 2:55 | sak | du | Skrivarna står aldrig still. Jag behöver en större. |
| 2:55 | notis | tanke | 💭 Skrivarna står aldrig still. Jag behöver en större. |
| 2:55 | röst | du | Skrivarna står aldrig still. Jag behöver en större. · STORY |
| 2:59 | klar | du | Skrivarna står aldrig still. Jag behöver en större. |
| 3:00 | skratt | du | Ali köper konst |
| 3:00 | aliSalt | ali | 3 |
| 3:01 | sak | ali | Ali här. Skrivare L. En meter byggvolym. Jag bad AI:n om något stort. Den gjorde något ENORMT. Den är större än min butik. Nästan. |
| 3:01 | sms | ali | Ali här. Skrivare L. En meter byggvolym. Jag bad AI:n om något stort. Den gjorde något ENORMT. Den är större än min butik. Nästan. |
| 3:01 | sms-bubbla | ali | Ali här. Skrivare L. En meter byggvolym. Jag bad AI:n om något stort. Den gjorde något ENORMT. Den är större än min butik. Nästan. |
| 3:01 | röst | ali | Ali här. Skrivare L. En meter byggvolym. Jag bad AI:n om något stort. Den gjorde något ENORMT. Den är större än min butik. Nästan. · STORY |
| 3:09 | händelse | printStart | sak=n2_vas |
| 3:12 | klar | ali | Ali här. Skrivare L. En meter byggvolym. Jag bad AI:n om något stort. Den gjorde något ENORMT. Den är större än min butik. Nästan. |
| 3:12 | toast | guld | ✅ |
| 3:12 | händelse | printKlar | sak=n2_vas n=8 |
| 3:13 | händelse | tagitUrPrint | sak=n2_vas n=1 |
| 3:21 | aliSalt | ali | 1069 |
| 3:22 | väntar | ali | Jag har räknat kassan två gånger. Samma summa. Tråkigt. |
| 3:22 | sak | ali | Jag har räknat kassan två gånger. Samma summa. Tråkigt. |
| 3:22 | röst | ali | Jag har räknat kassan två gånger. Samma summa. Tråkigt. · SMÅPRAT |
| 3:23 | bubbla |  | Jag har räknat kassan två gånger. Samma summa. Tråkigt. |
| 3:26 | klar | ali | Jag har räknat kassan två gånger. Samma summa. Tråkigt. |
| 3:30 | skratt | du | Alis dyr-pling |
| 3:30 | toast | guld | 3D-modell köpt – printa skrivare l på skrivaren |
| 3:30 | händelse | kopt | sak=skrivare3 |
| 3:38 | händelse | printStart | sak=byggsats:skrivare3 |
| 3:43 | toast | bra | Del 1 av 6 klar |
| 3:47 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 3:50 | väntar | värld:Mjau. | Mjau. |
| 4:02 | sak | värld:Mjau. | Mjau. |
| 4:02 | bubbla |  | Mjau. |
| 4:04 | klar | värld:Mjau. | Mjau. |
| 4:05 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 4:05 | väntar | notis:Skrivare M: Tornet är tomt – mal mer så  | Skrivare M: Tornet är tomt – mal mer så fortsätter den |
| 4:05 | toast | bra | Del 2 av 6 klar |
| 4:06 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 4:08 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 4:09 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 4:11 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 4:11 | toast | bra | Del 3 av 6 klar |
| 4:12 | sak | notis:Skrivare M: Tornet är tomt – mal mer så  | Skrivare M: Tornet är tomt – mal mer så fortsätter den |
| 4:12 | notis | fel | Skrivare M: Tornet är tomt – mal mer så fortsätter den |
| 4:12 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 4:14 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 4:15 | klar | notis:Skrivare M: Tornet är tomt – mal mer så  | Skrivare M: Tornet är tomt – mal mer så fortsätter den |
| 4:15 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 4:15 | skratt | du | kvarnen spottar |
| 4:17 | skratt | du | falsk tuta |
| 4:17 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 4:18 | toast | bra | Del 4 av 6 klar |
| 4:18 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 4:20 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 4:21 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 4:23 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 4:24 | toast | bra | Del 5 av 6 klar |
| 4:24 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 4:26 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 4:27 | väntar | värld:Mjau. | Mjau. |
| 4:27 | sak | värld:Mjau. | Mjau. |
| 4:27 | bubbla |  | Mjau. |
| 4:27 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 4:27 | struken | notis | Skrivare M: Tornet är tomt – mal mer så fortsätter den |
| 4:29 | klar | värld:Mjau. | Mjau. |
| 4:38 | väntar | värld:TUUT! Tjena! | TUUT! Tjena! |
| 4:38 | sak | värld:TUUT! Tjena! | TUUT! Tjena! |
| 4:38 | bubbla |  | TUUT! Tjena! |
| 4:40 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 4:40 | struken | notis | Skrivare M: Tornet är tomt – mal mer så fortsätter den |
| 4:41 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 4:41 | klar | värld:TUUT! Tjena! | TUUT! Tjena! |
| 4:42 | händelse | printKlar | sak=byggsats:skrivare3 n=1 |
| 4:42 | toast | guld | ✅ |
| 4:43 | väntar | mamma | Mormor frågar om du har träffat någon på soptippen. Jag sa att du har en sopgubbe och en katt. Hon blev jätteglad. |
| 4:48 | händelse | tagitUrPrint | sak=byggsats:skrivare3 n=1 |
| 4:48 | paket |  | sms |
| 4:48 | väntar | ali | Ali här. Jag såg Skrivare L på avstånd. Ett streck blev lite snett. Mitt fel. Vackert ändå. |
| 4:51 | händelse | placerat | sak=skrivare3 |
| 4:51 | händelse | malKlart | id=r8-bygg-skrivare-l del=Dag 8 – Magnetpistolen nasta=r8-bygg-magnetpistolen |
| 4:51 | väntar | du | Plocka skräp och mal det. |
| 4:51 | MÅL |  | Plocka skräp och mal det |
| 4:51 | upplåst | bara | magnet |
| 4:51 | brott | UPPLÅST | magnet (bara 15 av 6) |
| 4:51 | händelse | upplast | id=magnet flask=bara |
| 4:51 | paket |  | tanke → sms |
| 4:51 | tanke | du | En tunna i taget på säckkärran. Det måste gå fortare. |
| 4:51 | väntar | du | En tunna i taget på säckkärran. Det måste gå fortare. |
| 4:51 | väntar | ali | Ali här. Jag har inte sovit på tre dygn. 🧲 MAGNETPISTOL. Den drog åt sig min nyckelknippa, min klocka och nästan en tand. Det här är framtiden, min vän. Du kommer gilla den. Jag gillar den. Säg inte till nån att jag gillar nåt. |
| 4:52 | sak | du | Plocka skräp och mal det. |
| 4:52 | målruta |  | Bygg magnetpistolen |
| 4:52 | pil |  | Bygg magnetpistolen |
| 4:52 | röst | du | Bygg magnetpistolen. · MÅL |
| 4:55 | klar | du | Bygg magnetpistolen. |
| 4:55 | kvittens-bock |  | ✓ Bygg Skrivare L |
| 5:03 | sak | ali | Ali här. Jag har inte sovit på tre dygn. 🧲 MAGNETPISTOL. Den drog åt sig min nyckelknippa, min klocka och nästan en tand. Det här är framtiden, min vän. Du kommer gilla den. Jag gillar den. Säg inte till nån att jag gillar nåt. |
| 5:03 | sms | ali | Ali här. Jag har inte sovit på tre dygn. 🧲 MAGNETPISTOL. Den drog åt sig min nyckelknippa, min klocka och nästan en tand. Det här är framtiden, min vän. Du kommer gilla den. Jag gillar den. Säg inte till nån att jag gillar nåt. |
| 5:03 | sms-bubbla | ali | Ali här. Jag har inte sovit på tre dygn. 🧲 MAGNETPISTOL. Den drog åt sig min nyckelknippa, min klocka och nästan en tand. Det här är framtiden, min vän. Du kommer gilla den. Jag gillar den. Säg inte till nån att jag gillar nåt. |
| 5:03 | röst | ali | Ali här. Jag har inte sovit på tre dygn. 🧲 MAGNETPISTOL. Den drog åt sig min nyckelknippa, min klocka och nästan en tand. Det här är framtiden, min vän. Du kommer gilla den. Jag gillar den. Säg inte till nån att jag gillar nåt. · STORY |
| 5:03 | skratt | du | Alis dyr-pling |
| 5:03 | toast | guld | 3D-modell köpt – printa magnetpistol på skrivaren |
| 5:03 | händelse | kopt | sak=magnet |
| 5:15 | skratt | du | kvarnen rapar |
| 5:18 | toast | guld | 🧵 |
| 5:21 | händelse | printStart | sak=byggsats:magnet |
| 5:22 | klar | ali | Ali här. Jag har inte sovit på tre dygn. 🧲 MAGNETPISTOL. Den drog åt sig min nyckelknippa, min klocka och nästan en tand. Det här är framtiden, min vän. Du kommer gilla den. Jag gillar den. Säg inte till nån att jag gillar nåt. |
| 5:23 | toast | bra | Del 1 av 3 klar |
| 5:24 | struken | ali | Ali här. Jag såg Skrivare L på avstånd. Ett streck blev lite snett. Mitt fel. Vackert ändå. |
| 5:26 | toast | bra | Del 2 av 3 klar |
| 5:27 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 5:30 | sak | du | En tunna i taget på säckkärran. Det måste gå fortare. |
| 5:30 | notis | tanke | 💭 En tunna i taget på säckkärran. Det måste gå fortare. |
| 5:30 | röst | du | En tunna i taget på säckkärran. Det måste gå fortare. · STORY |
| 5:34 | skratt | du | kvarnen rapar |
| 5:34 | klar | du | En tunna i taget på säckkärran. Det måste gå fortare. |
| 5:35 | händelse | printKlar | sak=byggsats:magnet n=1 |
| 5:35 | toast | guld | ✅ |
| 5:39 | väntar | info:guld | 🧲 Magnetpistolen är klar! Den ligger i verktygsraden – gripen har du kvar på plats 1. |
| 5:39 | händelse | tagitUrPrint | sak=byggsats:magnet n=1 |
| 5:39 | struken | kedja | magnet |
| 5:39 | sak | info:guld | 🧲 Magnetpistolen är klar! Den ligger i verktygsraden – gripen har du kvar på plats 1. |
| 5:39 | kvitto-visas | info:guld | 🧲 Magnetpistolen är klar! Den ligger i verktygsraden – gripen har du kvar på plats 1. |
| 5:39 | toast | guld | 🧲 Magnetpistolen är klar! Den ligger i verktygsraden – gripen har du kvar på plats 1. |
| 5:39 | händelse | malKlart | id=r8-bygg-magnetpistolen del=Dag 8 – Magnetpistolen nasta=r8-mal-tunga-saker |
| 5:39 | händelse | malKlart | id=r8-mal-tunga-saker del=Dag 8 – Magnetpistolen nasta=r8-bygg-batteribank |
| 5:39 | MÅL |  | Printa och sälj |
| 5:40 | toast | guld | 🧵 |
| 5:41 | klar | info:guld | 🧲 Magnetpistolen är klar! Den ligger i verktygsraden – gripen har du kvar på plats 1. |
| 5:41 | målruta |  | Printa och sälj |
| 5:43 | kvittens-bock |  | ✓ Bygg magnetpistolen |
| 5:43 | kvittens-bock |  | ✓ Mal tunga saker i PETG-kvarnen · 3/3 |
| 5:43 | sak | du | (nytt mål i rutan) |
| 5:43 | pil |  | Printa och sälj |
| 5:43 | klar | du | (nytt mål i rutan) |
| 5:44 | toast | guld | 🧵 |
| 5:45 | väntar | bud | (tips) |
| 5:45 | sak | bud | (tips) |
| 5:46 | händelse | printStart | sak=n2_vas |
| 5:47 | klar | bud | (tips) |
| 5:49 | meddelande | mamma | Fick du burkarna? Honungen är från Gunnars bigårdar och lingonen plockade jag själv. Ät upp allt! |
| 5:50 | röst | mamma | Fick du burkarna? Honungen är från Gunnars bigårdar och lingonen plockade jag själv. Ät upp allt! · STORY |
| 6:02 | paket |  | sms |
| 6:02 | väntar | mamma | Bra! Pappa tar med fler på torsdag. Jag har 40 burkar kvar i källaren. |
| 6:12 | händelse | brevLast | id=m_burk1 |
| 6:13 | toast | guld | ✅ |
| 6:13 | händelse | printKlar | sak=n2_vas n=9 |
| 6:14 | händelse | tagitUrPrint | sak=n2_vas n=1 |
| 6:17 | sak | mamma | Bra! Pappa tar med fler på torsdag. Jag har 40 burkar kvar i källaren. |
| 6:17 | sms | mamma | Bra! Pappa tar med fler på torsdag. Jag har 40 burkar kvar i källaren. |
| 6:17 | sms-bubbla | mamma | Bra! Pappa tar med fler på torsdag. Jag har 40 burkar kvar i källaren. |
| 6:17 | röst | mamma | Bra! Pappa tar med fler på torsdag. Jag har 40 burkar kvar i källaren. · STORY |
| 6:22 | aliSalt | ali | 1016 |
| 6:23 | klar | mamma | Bra! Pappa tar med fler på torsdag. Jag har 40 burkar kvar i källaren. |
| 6:29 | väntar | foto | Magneten |
| 6:29 | paket |  | tanke |
| 6:29 | tanke | du | Nu kommer allt till mig i stället. |
| 6:29 | väntar | du | Nu kommer allt till mig i stället. |
| 6:31 | sak | foto | Magneten |
| 6:31 | foto | du | Magneten |
| 6:32 | händelse | printStart | sak=n2_vas |
| 6:33 | klar | foto | Magneten |
| 6:35 | toast | guld | ✅ |
| 6:35 | händelse | printKlar | sak=n2_vas n=10 |
| 6:36 | händelse | tagitUrPrint | sak=n2_vas n=1 |
| 6:41 | sak | du | Nu kommer allt till mig i stället. |
| 6:41 | notis | tanke | 💭 Nu kommer allt till mig i stället. |
| 6:41 | röst | du | Nu kommer allt till mig i stället. · STORY |
| 6:44 | klar | du | Nu kommer allt till mig i stället. |
| 6:44 | aliSalt | ali | 965 |
| 6:54 | händelse | printStart | sak=n2_vas |
| 6:57 | skratt | du | falsk tuta |
| 6:57 | väntar | värld:TUUT! Tjena! | TUUT! Tjena! |
| 6:57 | sak | värld:TUUT! Tjena! | TUUT! Tjena! |
| 6:57 | bubbla |  | TUUT! Tjena! |
| 6:57 | toast | guld | ✅ |
| 6:57 | händelse | printKlar | sak=n2_vas n=11 |
| 6:58 | händelse | tagitUrPrint | sak=n2_vas n=1 |
| 7:00 | klar | värld:TUUT! Tjena! | TUUT! Tjena! |
| 7:06 | aliSalt | ali | 917 |
| 7:15 | händelse | printStart | sak=n2_vas |
| 7:18 | toast | guld | ✅ |
| 7:18 | händelse | printKlar | sak=n2_vas n=12 |
| 7:19 | händelse | tagitUrPrint | sak=n2_vas n=1 |
| 7:27 | aliSalt | ali | 871 |
| 7:40 | skratt | du | kvarnen rapar |
| 7:43 | toast | guld | 🧵 |
| 7:47 | händelse | printStart | sak=n2_vas |
| 7:50 | toast | guld | ✅ |
| 7:50 | händelse | printKlar | sak=n2_vas n=13 |
| 7:51 | händelse | tagitUrPrint | sak=n2_vas n=1 |
| 7:59 | aliSalt | ali | 830 |
| 8:09 | händelse | printStart | sak=n2_vas |
| 8:12 | toast | guld | ✅ |
| 8:12 | händelse | printKlar | sak=n2_vas n=14 |
| 8:13 | händelse | tagitUrPrint | sak=n2_vas n=1 |
| 8:21 | aliSalt | ali | 830 |
| 8:30 | händelse | printStart | sak=n2_vas |
| 8:30 | skratt | du | Kajsa i skrivaren |
| 8:33 | toast | guld | ✅ |
| 8:33 | händelse | printKlar | sak=n2_vas n=15 |
| 8:34 | händelse | tagitUrPrint | sak=n2_vas n=1 |
| 8:42 | aliSalt | ali | 830 |
| 8:45 | skratt | du | däcket rullar iväg |
| 8:52 | väntar | värld:TUUT! Hej grannen! | TUUT! Hej grannen! |
| 8:52 | sak | värld:TUUT! Hej grannen! | TUUT! Hej grannen! |
| 8:52 | bubbla |  | TUUT! Hej grannen! |
| 8:55 | skratt | du | kvarnen rapar |
| 8:55 | klar | värld:TUUT! Hej grannen! | TUUT! Hej grannen! |
| 8:59 | toast | guld | 🧵 |
| 9:01 | händelse | printStart | sak=n2_vas |
| 9:04 | toast | guld | ✅ |
| 9:04 | händelse | printKlar | sak=n2_vas n=16 |
| 9:05 | händelse | tagitUrPrint | sak=n2_vas n=1 |
| 9:06 | toast | guld | 🧵 |
| 9:13 | aliSalt | ali | 830 |
| 9:20 | upplåst | strom | bank |
| 9:20 | brott | RESERV | bank (strom 0 av 15) |
| 9:20 | händelse | upplast | id=bank flask=strom |
| 9:20 | paket |  | sms |
| 9:20 | väntar | ali | Ali här. Batteribank. Sparar solen till kvällen. Som en kyl, fast för ström. |
| 9:20 | sak | ali | Ali här. Batteribank. Sparar solen till kvällen. Som en kyl, fast för ström. |
| 9:20 | sms | ali | Ali här. Batteribank. Sparar solen till kvällen. Som en kyl, fast för ström. |
| 9:20 | sms-bubbla | ali | Ali här. Batteribank. Sparar solen till kvällen. Som en kyl, fast för ström. |
| 9:20 | röst | ali | Ali här. Batteribank. Sparar solen till kvällen. Som en kyl, fast för ström. · STORY |
| 9:23 | händelse | printStart | sak=n2_vas |
| 9:26 | toast | guld | ✅ |
| 9:26 | händelse | printKlar | sak=n2_vas n=17 |
| 9:26 | klar | ali | Ali här. Batteribank. Sparar solen till kvällen. Som en kyl, fast för ström. |
| 9:27 | händelse | tagitUrPrint | sak=n2_vas n=1 |
| 9:35 | aliSalt | ali | 830 |
| 9:38 | skratt | du | Alis dyr-pling |
| 9:38 | toast | guld | 3D-modell köpt – printa batteribank på skrivaren |
| 9:38 | händelse | kopt | sak=bank |
| 9:46 | händelse | printStart | sak=byggsats:bank |
| 9:46 | toast | bra | 🔗 Slangen kopplad |
| 9:48 | toast | bra | Del 1 av 2 klar |
| 9:50 | händelse | printKlar | sak=byggsats:bank n=1 |
| 9:50 | toast | guld | ✅ |
| 9:50 | händelse | tagitUrPrint | sak=byggsats:bank n=1 |
| 9:57 | händelse | placerat | sak=bank |
| 9:57 | händelse | malKlart | id=r8-bygg-batteribank del=Dag 8 – Magnetpistolen nasta=hylla8 |
| 9:57 | väntar | du | Bygg hyllan. |
| 9:57 | målruta |  | Bygg hyllan |
| 9:57 | MÅL |  | Bygg hyllan |
| 9:58 | sak | du | Bygg hyllan. |
| 9:58 | pil |  | Bygg hyllan |
| 9:58 | röst | du | Bygg hyllan. · MÅL |
| 9:59 | nick |  | nick:75 |
| 10:01 | klar | du | Bygg hyllan. |
| 10:01 | kvittens-bock |  | ✓ Bygg en batteribank |
| 10:13 | toast | guld | 🗄️ Hyllan ligger i handen – klicka på skjulet för att sätta upp den |
| 10:13 | händelse | kopt | sak=hylla |
| 10:13 | röst | ali | En hylla. Den lutar lite. Det är karaktär. · STORY |
| 10:13 | butiksbubbla | ali | En hylla. Den lutar lite. Det är karaktär. |
| 10:19 | väntar | info:guld | 🗄️ Hyllan sitter i skjulet – 8 platser till i förrådet |
| 10:19 | monterat | du | byggsats:hylla |
| 10:19 | händelse | monterat | sak=hylla |
| 10:19 | sak | info:guld | 🗄️ Hyllan sitter i skjulet – 8 platser till i förrådet |
| 10:19 | kvitto-visas | info:guld | 🗄️ Hyllan sitter i skjulet – 8 platser till i förrådet |
| 10:19 | toast | guld | 🗄️ Hyllan sitter i skjulet – 8 platser till i förrådet |
| 10:19 | paket |  | tanke |
| 10:19 | tanke | du | En hylla. Jag har en hylla. Saker har en plats nu. |
| 10:19 | väntar | du | En hylla. Jag har en hylla. Saker har en plats nu. |
| 10:19 | händelse | malKlart | id=hylla8 del=Dag 8 – Magnetpistolen nasta=sov8 |
| 10:19 | paket |  | lapp |
| 10:19 | väntar | du | Dag 8 är slut. Strömmen räcker inte till alla skrivare. |
| 10:19 | MÅL |  | Klart för idag – sov när du vill |
| 10:21 | klar | info:guld | 🗄️ Hyllan sitter i skjulet – 8 platser till i förrådet |
| 10:21 | sak | du | En hylla. Jag har en hylla. Saker har en plats nu. |
| 10:21 | kvitto-visas | du | En hylla. Jag har en hylla. Saker har en plats nu. |
| 10:21 | notis | tanke | 💭 En hylla. Jag har en hylla. Saker har en plats nu. |
| 10:21 | röst | du | En hylla. Jag har en hylla. Saker har en plats nu. · REAKTION |
| 10:23 | målruta |  | Klart för idag – sov när du vill |
| 10:23 | kvittens-bock |  | ✓ Bygg hyllan |
| 10:25 | skratt | du | falsk tuta |
| 10:25 | klar | du | En hylla. Jag har en hylla. Saker har en plats nu. |
| 10:26 | sak | du | (nytt mål i rutan) |
| 10:26 | pil |  | Klart för idag – sov när du vill |
| 10:26 | klar | du | (nytt mål i rutan) |
| 10:26 | väntar | notis:🌇 Klockan är 21. Ali slår igen luckan.  | 🌇 Klockan är 21. Ali slår igen luckan. Dagens jobb är klart – gå in i skjulet och sov i sängen. |
| 10:28 | sak | du | Dag 8 är slut. Strömmen räcker inte till alla skrivare. |
| 10:28 | lapp | 📔 Dagbok | Dag 8 är slut. Strömmen räcker inte till alla skrivare. |
| 10:28 | kvallsrad | du | Strömmen räcker inte till alla skrivare. |
| 10:28 | klar | du | Dag 8 är slut. Strömmen räcker inte till alla skrivare. |
| 10:33 | webbBetalt | du | 192 |
| 10:33 | nattkort | du | 🌙 Dag 8 är slut. God natt. zzz… Strömmen räcker inte till alla skrivare. DAGENS PRINTAR Designvas i röd PETG × 13 Blomkruka × 3 Totalt 16 printar 💰 Tjänat i d |

<details><summary>Botens handlingar dag 8</summary>

- 0:00 — dag 8 börjar — (7557 kr)
- 0:08 popup: "FORTSÄTT" (7557 kr)
- 0:22 gå till skrivaren (17 m) (7557 kr)
- 0:24 printar Blomkruka (7557 kr)
- 0:27 tar ut 1 st ur skrivaren (7557 kr)
- 0:36 plockar 7 skräp på tippen (bär max 16) (7557 kr)
- 0:39 gå till kvarnen (13 m) (7557 kr)
- 0:46 gå till skrivaren (5 m) (7557 kr)
- 0:47 printar Blomkruka (7557 kr)
- 0:59 popup: "Jag säljer saker jag printar." (7557 kr)
- 1:10 popup: "Läst" (7557 kr)
- 1:13 tar ut 1 st ur skrivaren (7557 kr)
- 1:15 printar Blomkruka (7557 kr)
- 1:18 tar ut 1 st ur skrivaren (7557 kr)
- 1:23 gå till datorn (21 m) (7557 kr)
- 1:31 panel: "Webbshopen · Soptippsvägen 1
B" (7557 kr)
- 1:40 panel: "Webbshopen · Soptippsvägen 1
B" (7557 kr)
- 1:49 panel: "Webbshopen · Soptippsvägen 1
B" (7557 kr)
- 1:55 gå till Rolfs postlåda (paket) (29 m) (7557 kr)
- 1:56 webbshop: 2 paket i postlådan (7557 kr)
- 1:56 tjänar pengar till väntar på flaskhalsen för skrivare3: 7557/7597 kr → printar designvas i röd petg (1185 kr) (7557 kr)
- 1:58 gå till skrivaren (10 m) (7557 kr)
- 2:00 printar Designvas i röd PETG (7557 kr)
- 2:04 tar ut 1 st ur skrivaren (7557 kr)
- 2:11 gå till Ali (30 m) (7557 kr)
- 2:11 öppnar Alis butik – sälja (7557 kr)
- 2:13 säljer hos Ali: +1185 kr (8742 kr)
- 2:13 tjänar pengar till väntar på flaskhalsen för skrivare3: 8742/8782 kr → printar designvas i röd petg (1126 kr) (8742 kr)
- 2:16 gå till en tunna (12 m) (8742 kr)
- 2:21 gå till PETG-kvarnen (20 m) (8742 kr)
- 2:21 tömmer det tunga i PETG-kvarnen (8742 kr)
- 2:25 gå till skrivaren (1 m) (8742 kr)
- 2:27 printar Designvas i röd PETG (8742 kr)
- 2:31 tar ut 1 st ur skrivaren (8742 kr)
- 2:37 gå till Ali (31 m) (8742 kr)
- 2:37 öppnar Alis butik – sälja (8742 kr)
- 2:39 säljer hos Ali: +1126 kr (9868 kr)
- 2:41 tjänar pengar till väntar på flaskhalsen för skrivare3: 9868/9908 kr → printar designvas i röd petg (1069 kr) (9868 kr)
- 2:47 gå till skrivaren (29 m) (9868 kr)
- 2:48 printar Designvas i röd PETG (9868 kr)
- 2:53 tar ut 1 st ur skrivaren (9868 kr)
- 2:59 gå till Ali (29 m) (9868 kr)
- 2:59 öppnar Alis butik – sälja (9868 kr)
- 3:01 säljer hos Ali: +3 kr (9871 kr)
- 3:01 tjänar pengar till väntar på flaskhalsen för skrivare3: 9871/9908 kr → printar designvas i röd petg (1069 kr) (9871 kr)
- 3:07 gå till skrivaren (29 m) (9871 kr)
- 3:09 printar Designvas i röd PETG (9871 kr)
- 3:13 tar ut 1 st ur skrivaren (9871 kr)
- 3:19 gå till Ali (29 m) (9871 kr)
- 3:19 öppnar Alis butik – sälja (9871 kr)
- 3:21 säljer hos Ali: +1069 kr (10940 kr)
- 3:28 öppnar Alis butik – köpa skrivare l (10940 kr)
- 3:31 köper skrivare3 för 3500 kr (7440 kr)
- 3:37 gå till skrivaren (24 m) (7440 kr)
- 3:38 printar Skrivare L (6 delar) (7440 kr)
- 3:59 plockar 10 skräp på tippen (bär max 16) (7440 kr)
- 4:02 gå till kvarnen (13 m) (7440 kr)
- 4:34 plockar 6 skräp på tippen (bär max 16) (7440 kr)
- 4:37 gå till kvarnen (16 m) (7440 kr)
- 4:48 gå till skrivaren (5 m) (7440 kr)
- 4:49 tar ut 1 st ur skrivaren (7440 kr)
- 4:50 gå till platsen för skrivare l (5 m) (7440 kr)
- 4:51 ställer ut skrivare l (7440 kr)
- 5:01 gå till Ali (22 m) (7440 kr)
- 5:01 öppnar Alis butik – köpa magnetpistol (7440 kr)
- 5:04 köper magnet för 2400 kr (5040 kr)
- 5:12 gå till en tunna (35 m) (5040 kr)
- 5:15 gå till PETG-kvarnen (9 m) (5040 kr)
- 5:15 tömmer det tunga i PETG-kvarnen (5040 kr)
- 5:20 gå till skrivaren (3 m) (5040 kr)
- 5:21 printar Magnetpistol (3 delar) (5040 kr)
- 5:31 gå till en tunna (12 m) (5040 kr)
- 5:34 gå till PETG-kvarnen (9 m) (5040 kr)
- 5:34 tömmer det tunga i PETG-kvarnen (5040 kr)
- 5:39 gå till skrivaren (4 m) (5040 kr)
- 5:39 tar ut 1 st ur skrivaren (5040 kr)
- 5:45 tjänar pengar till väntar på flaskhalsen för bank: 5040/5080 kr → printar designvas i röd petg (1016 kr) (5040 kr)
- 5:46 printar Designvas i röd PETG (5040 kr)
- 6:02 popup: "Tack mamma ❤️" (5040 kr)
- 6:12 popup: "Läst" (5040 kr)
- 6:14 tar ut 1 st ur skrivaren (5040 kr)
- 6:20 gå till Ali (31 m) (5040 kr)
- 6:20 öppnar Alis butik – sälja (5040 kr)
- 6:22 säljer hos Ali: +1016 kr (6056 kr)
- 6:25 tjänar pengar till väntar på flaskhalsen för bank: 6056/6096 kr → printar designvas i röd petg (965 kr) (6056 kr)
- 6:31 gå till skrivaren (29 m) (6056 kr)
- 6:32 printar Designvas i röd PETG (6056 kr)
- 6:37 tar ut 1 st ur skrivaren (6056 kr)
- 6:43 gå till Ali (29 m) (6056 kr)
- 6:43 öppnar Alis butik – sälja (6056 kr)
- 6:45 säljer hos Ali: +965 kr (7021 kr)
- 6:46 tjänar pengar till väntar på flaskhalsen för bank: 7021/7061 kr → printar designvas i röd petg (917 kr) (7021 kr)
- 6:52 gå till skrivaren (29 m) (7021 kr)
- 6:54 printar Designvas i röd PETG (7021 kr)
- 6:58 tar ut 1 st ur skrivaren (7021 kr)
- 7:04 gå till Ali (29 m) (7021 kr)
- 7:04 öppnar Alis butik – sälja (7021 kr)
- 7:06 säljer hos Ali: +917 kr (7938 kr)
- 7:08 tjänar pengar till väntar på flaskhalsen för bank: 7938/7978 kr → printar designvas i röd petg (871 kr) (7938 kr)
- 7:14 gå till skrivaren (29 m) (7938 kr)
- 7:15 printar Designvas i röd PETG (7938 kr)
- 7:20 tar ut 1 st ur skrivaren (7938 kr)
- 7:26 gå till Ali (29 m) (7938 kr)
- 7:26 öppnar Alis butik – sälja (7938 kr)
- 7:28 säljer hos Ali: +871 kr (8809 kr)
- 7:29 tjänar pengar till väntar på flaskhalsen för bank: 8809/8849 kr → printar designvas i röd petg (830 kr) (8809 kr)
- 7:37 gå till en tunna (36 m) (8809 kr)
- 7:40 gå till PETG-kvarnen (13 m) (8809 kr)
- 7:40 tömmer det tunga i PETG-kvarnen (8809 kr)
- 7:45 gå till skrivaren (3 m) (8809 kr)
- 7:47 printar Designvas i röd PETG (8809 kr)
- 7:51 tar ut 1 st ur skrivaren (8809 kr)
- 7:58 gå till Ali (31 m) (8809 kr)
- 7:58 öppnar Alis butik – sälja (8809 kr)
- 7:59 säljer hos Ali: +830 kr (9639 kr)
- 8:01 tjänar pengar till väntar på flaskhalsen för bank: 9639/9679 kr → printar designvas i röd petg (830 kr) (9639 kr)
- 8:07 gå till skrivaren (29 m) (9639 kr)
- 8:09 printar Designvas i röd PETG (9639 kr)
- 8:13 tar ut 1 st ur skrivaren (9639 kr)
- 8:19 gå till Ali (29 m) (9639 kr)
- 8:19 öppnar Alis butik – sälja (9639 kr)
- 8:21 säljer hos Ali: +830 kr (10469 kr)
- 8:23 tjänar pengar till väntar på flaskhalsen för bank: 10469/10509 kr → printar designvas i röd petg (830 kr) (10469 kr)
- 8:29 gå till skrivaren (29 m) (10469 kr)
- 8:30 printar Designvas i röd PETG (10469 kr)
- 8:35 tar ut 1 st ur skrivaren (10469 kr)
- 8:41 gå till Ali (29 m) (10469 kr)
- 8:41 öppnar Alis butik – sälja (10469 kr)
- 8:42 säljer hos Ali: +830 kr (11299 kr)
- 8:44 tjänar pengar till väntar på flaskhalsen för bank: 11299/11339 kr → printar designvas i röd petg (830 kr) (11299 kr)
- 8:51 gå till en tunna (36 m) (11299 kr)
- 8:55 gå till PETG-kvarnen (11 m) (11299 kr)
- 8:55 tömmer det tunga i PETG-kvarnen (11299 kr)
- 8:59 gå till skrivaren (3 m) (11299 kr)
- 9:01 printar Designvas i röd PETG (11299 kr)
- 9:05 tar ut 1 st ur skrivaren (11299 kr)
- 9:12 gå till Ali (31 m) (11299 kr)
- 9:12 öppnar Alis butik – sälja (11299 kr)
- 9:14 säljer hos Ali: +830 kr (12129 kr)
- 9:15 tjänar pengar till väntar på flaskhalsen för bank: 12129/12169 kr → printar designvas i röd petg (830 kr) (12129 kr)
- 9:21 gå till skrivaren (29 m) (12129 kr)
- 9:23 printar Designvas i röd PETG (12129 kr)
- 9:27 tar ut 1 st ur skrivaren (12129 kr)
- 9:33 gå till Ali (29 m) (12129 kr)
- 9:33 öppnar Alis butik – sälja (12129 kr)
- 9:35 säljer hos Ali: +830 kr (12959 kr)
- 9:37 öppnar Alis butik – köpa batteribank (12959 kr)
- 9:39 köper bank för 800 kr (12159 kr)
- 9:45 gå till skrivaren (23 m) (12159 kr)
- 9:46 printar Batteribank (2 delar) (12159 kr)
- 9:51 tar ut 1 st ur skrivaren (12159 kr)
- 9:56 gå till platsen för batteribank (26 m) (12159 kr)
- 9:57 ställer ut batteribank (12159 kr)
- 10:12 gå till Ali (43 m) (12159 kr)
- 10:12 öppnar Alis butik – köpa hylla (12159 kr)
- 10:14 köper hylla för 150 kr (12009 kr)
- 10:19 gå till sätt upp hyllan i skjulet (19 m) (12009 kr)
- 10:30 gå till sängen (1 m) (12009 kr)

</details>

## Dag 9

| Tid | Källa | Vem | Text |
|---|---|---|---|
| 10:33 | vara | ali | ingen |
| 10:33 | händelse | malKlart | id=sov8 del=Dag 8 – Magnetpistolen nasta=r9-kop-receptet-cykelhjalmen |
| 10:33 | MÅL |  | Köp receptet på cykelhjälmen hos Ali |
| 0:01 | vara | ali | n2_vas |
| 0:01 | händelse | dagenBorjar | dag=9 |
| 0:01 | meddelande | du | Dag 9. 13 dagar till jul. Utan fler skrivare hinner jag inte till jul. |
| 0:01 | dagbokkort | du | Solcellsparken · Dag 9. 13 dagar till jul. Utan fler skrivare hinner jag inte till jul. |
| 0:01 | röst | du | Dag 9. 13 dagar till jul. Solcellsparken. Utan fler skrivare hinner jag inte till jul. · STORY |
| 0:03 | paket |  | sms |
| 0:03 | väntar | rolf | Ny lapp i lådan. Du vet vad de betyder. /R |
| 0:09 | händelse | morgonkortStangt | dag=9 |
| 0:09 | paket |  | sms |
| 0:09 | väntar | ali | Ali här. Större ryggsäck. Min son hade den i lumpen. Han kom hem med fler grejer än han åkte iväg med. |
| 0:09 | struken | kedja | d9 |
| 0:09 | väntar | du | Cykelhjälmar i röd plast. Säljer bra, säger Ali. |
| 0:09 | målruta |  | Köp receptet på cykelhjälmen hos Ali |
| 0:10 | väntar | notis:2 paket i natt · +192 kr | 2 paket i natt · +192 kr |
| 0:11 | väntar | notis:Designvas i röd PETG · +50 % | Designvas i röd PETG · +50 % |
| 0:14 | sak | du | Cykelhjälmar i röd plast. Säljer bra, säger Ali. |
| 0:14 | pil |  | Köp receptet på cykelhjälmen hos Ali |
| 0:14 | notis | tanke | 💭 Cykelhjälmar i röd plast. Säljer bra, säger Ali. |
| 0:14 | röst | du | Cykelhjälmar i röd plast. Säljer bra, säger Ali. · MÅL |
| 0:15 | nick |  | nick:77 |
| 0:18 | klar | du | Cykelhjälmar i röd plast. Säljer bra, säger Ali. |
| 0:20 | struken | notis:🌇 Klockan är 21. Ali slår igen luckan.  | 🌇 Klockan är 21. Ali slår igen luckan. Dagens jobb är klart – gå in i skjulet och sov i sängen. |
| 0:20 | sak | notis:2 paket i natt · +192 kr | 2 paket i natt · +192 kr |
| 0:20 | notis |  | 2 paket i natt · +192 kr |
| 0:23 | klar | notis:2 paket i natt · +192 kr | 2 paket i natt · +192 kr |
| 0:25 | sak | notis:Designvas i röd PETG · +50 % | Designvas i röd PETG · +50 % |
| 0:25 | notis |  | Designvas i röd PETG · +50 % |
| 0:27 | klar | notis:Designvas i röd PETG · +50 % | Designvas i röd PETG · +50 % |
| 0:34 | struken | mamma | Mormor frågar om du har träffat någon på soptippen. Jag sa att du har en sopgubbe och en katt. Hon blev jätteglad. |
| 0:41 | röst | ali | Du vet vad? Jag har pratat om att göra något i trettio år. Du bara gör. Det är irriterande. På ett bra sätt. · STORY |
| 0:41 | butiksbubbla | ali | Du vet vad? Jag har pratat om att göra något i trettio år. Du bara gör. Det är irriterande. På ett bra sätt. |
| 0:42 | skratt | du | Alis dyr-pling |
| 0:42 | händelse | kopt | sak=n2_hjalm |
| 0:43 | händelse | malKlart | id=r9-kop-receptet-cykelhjalmen del=Dag 9 – Solcellsparken nasta=r9-bygg-solcellspark |
| 0:43 | målruta |  | Printa och sälj |
| 0:43 | MÅL |  | Printa och sälj |
| 0:45 | sak | du | (nytt mål i rutan) |
| 0:45 | pil |  | Printa och sälj |
| 0:46 | klar | du | (nytt mål i rutan) |
| 0:47 | kvittens-bock |  | ✓ Köp receptet på cykelhjälmen hos Ali |
| 0:55 | händelse | printStart | sak=n2_vas |
| 0:58 | toast | guld | ✅ |
| 0:58 | händelse | printKlar | sak=n2_vas n=18 |
| 0:59 | händelse | tagitUrPrint | sak=n2_vas n=1 |
| 1:01 | händelse | printStart | sak=n2_vas |
| 1:04 | toast | guld | ✅ |
| 1:04 | händelse | printKlar | sak=n2_vas n=19 |
| 1:05 | händelse | tagitUrPrint | sak=n2_vas n=1 |
| 1:19 | webb | du | packade 2 n2_vas |
| 1:34 | väntar | info:bra | 📦 Paketet till Ett kafé i Ystad ligger i postlådan – Rolf tar det till posten |
| 1:34 | sak | info:bra | 📦 Paketet till Ett kafé i Ystad ligger i postlådan – Rolf tar det till posten |
| 1:34 | kvitto-visas | info:bra | 📦 Paketet till Ett kafé i Ystad ligger i postlådan – Rolf tar det till posten |
| 1:34 | toast | bra | 📦 Paketet till Ett kafé i Ystad ligger i postlådan – Rolf tar det till posten |
| 1:36 | klar | info:bra | 📦 Paketet till Ett kafé i Ystad ligger i postlådan – Rolf tar det till posten |
| 1:38 | händelse | printStart | sak=n2_vas |
| 1:41 | toast | guld | ✅ |
| 1:41 | händelse | printKlar | sak=n2_vas n=20 |
| 1:42 | händelse | tagitUrPrint | sak=n2_vas n=1 |
| 1:48 | väntar | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått skrivare l. Och batteribank. Skriv in, Gunnar. Du skriver aldrig in. |
| 1:48 | radio | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått skrivare l. Och batteribank. Skriv in, Gunnar. Du skriver aldrig in. |
| 1:48 | skratt | du | Radio-Kjelle |
| 1:48 | sak | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått skrivare l. Och batteribank. Skriv in, Gunnar. Du skriver aldrig in. |
| 1:48 | notis |  | 📻 Radio Tippen: Radio Tippen, Kjelle här. Skjulet vid tippen har fått skrivare l. Och batteribank. Skriv in, Gunnar. Du skriver aldrig in. |
| 1:48 | röst | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått skrivare l. Och batteribank. Skriv in, Gunnar. Du skriver aldrig in. · REAKTION |
| 1:50 | aliSalt | ali | 1185 |
| 1:59 | klar | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått skrivare l. Och batteribank. Skriv in, Gunnar. Du skriver aldrig in. |
| 2:08 | väntar | värld:Mjau. | Mjau. |
| 2:08 | sak | värld:Mjau. | Mjau. |
| 2:08 | bubbla |  | Mjau. |
| 2:11 | klar | värld:Mjau. | Mjau. |
| 2:12 | skratt | du | kvarnen rapar |
| 2:15 | skratt | du | falsk tuta |
| 2:15 | väntar | värld:TUUT TUUT! | TUUT TUUT! |
| 2:17 | toast | guld | 🧵 |
| 2:18 | händelse | printStart | sak=n2_vas |
| 2:19 | sak | värld:TUUT TUUT! | TUUT TUUT! |
| 2:19 | bubbla |  | TUUT TUUT! |
| 2:21 | toast | guld | ✅ |
| 2:21 | händelse | printKlar | sak=n2_vas n=21 |
| 2:22 | klar | värld:TUUT TUUT! | TUUT TUUT! |
| 2:22 | händelse | tagitUrPrint | sak=n2_vas n=1 |
| 2:24 | toast | guld | 🧵 |
| 2:31 | aliSalt | ali | 1126 |
| 2:40 | händelse | printStart | sak=n2_vas |
| 2:43 | toast | guld | ✅ |
| 2:43 | händelse | printKlar | sak=n2_vas n=22 |
| 2:44 | händelse | tagitUrPrint | sak=n2_vas n=1 |
| 2:44 | väntar | bror | Berättade för polarna att min lillebrorsa bygger sitt eget hus. Dom tror jag ljuger. Fortsätt. |
| 2:52 | aliSalt | ali | 1069 |
| 3:02 | händelse | printStart | sak=n2_vas |
| 3:05 | toast | guld | ✅ |
| 3:05 | händelse | printKlar | sak=n2_vas n=23 |
| 3:06 | händelse | tagitUrPrint | sak=n2_vas n=1 |
| 3:14 | aliSalt | ali | 1016 |
| 3:23 | händelse | printStart | sak=n2_vas |
| 3:26 | toast | guld | ✅ |
| 3:26 | händelse | printKlar | sak=n2_vas n=24 |
| 3:27 | händelse | tagitUrPrint | sak=n2_vas n=1 |
| 3:35 | aliSalt | ali | 965 |
| 3:45 | väntar | värld:Mjau. | Mjau. |
| 3:45 | sak | värld:Mjau. | Mjau. |
| 3:45 | bubbla |  | Mjau. |
| 3:47 | klar | värld:Mjau. | Mjau. |
| 3:50 | skratt | du | kvarnen rapar |
| 3:52 | toast | guld | 🧵 |
| 3:56 | händelse | printStart | sak=n2_hjalm |
| 4:01 | toast | guld | ✅ |
| 4:01 | händelse | printKlar | sak=n2_hjalm n=1 |
| 4:01 | händelse | tagitUrPrint | sak=n2_hjalm n=1 |
| 4:10 | aliSalt | ali | 1330 |
| 4:13 | upplåst | strom | solpark |
| 4:13 | brott | RESERV | solpark (strom 0 av 15) |
| 4:13 | händelse | upplast | id=solpark flask=strom |
| 4:13 | paket |  | sms |
| 4:13 | väntar | ali | Ali här. Solcellspark. Sex paneler på rad. Solen jobbar dubbelt nu. |
| 4:13 | sak | ali | Ali här. Solcellspark. Sex paneler på rad. Solen jobbar dubbelt nu. |
| 4:13 | sms | ali | Ali här. Solcellspark. Sex paneler på rad. Solen jobbar dubbelt nu. |
| 4:13 | sms-bubbla | ali | Ali här. Solcellspark. Sex paneler på rad. Solen jobbar dubbelt nu. |
| 4:13 | röst | ali | Ali här. Solcellspark. Sex paneler på rad. Solen jobbar dubbelt nu. · STORY |
| 4:19 | klar | ali | Ali här. Solcellspark. Sex paneler på rad. Solen jobbar dubbelt nu. |
| 4:19 | händelse | printStart | sak=n2_vas |
| 4:22 | toast | guld | ✅ |
| 4:22 | händelse | printKlar | sak=n2_vas n=25 |
| 4:23 | händelse | tagitUrPrint | sak=n2_vas n=1 |
| 4:24 | väntar | bud | (tips) |
| 4:24 | sak | bud | (tips) |
| 4:26 | klar | bud | (tips) |
| 4:28 | meddelande | bror | Jag har gjort om ditt rum till gym. Mamma vet inte. Säg inget. |
| 4:29 | röst | bror | Jag har gjort om ditt rum till gym. Mamma vet inte. Säg inget. · STORY |
| 4:38 | paket |  | sms |
| 4:38 | väntar | bror | Bra. Jag har satt upp en räcka i din garderob. Den håller. Typ. |
| 4:47 | händelse | brevLast | id=b_gym |
| 4:49 | toast | fel | Göran snodde designvas i röd petg. |
| 4:50 | aliSalt | ali | 0 |
| 4:59 | händelse | printStart | sak=n2_vas |
| 5:00 | sak | bror | Bra. Jag har satt upp en räcka i din garderob. Den håller. Typ. |
| 5:00 | sms | bror | Bra. Jag har satt upp en räcka i din garderob. Den håller. Typ. |
| 5:00 | sms-bubbla | bror | Bra. Jag har satt upp en räcka i din garderob. Den håller. Typ. |
| 5:00 | röst | bror | Bra. Jag har satt upp en räcka i din garderob. Den håller. Typ. · STORY |
| 5:02 | toast | guld | ✅ |
| 5:02 | händelse | printKlar | sak=n2_vas n=26 |
| 5:03 | händelse | tagitUrPrint | sak=n2_vas n=1 |
| 5:05 | klar | bror | Bra. Jag har satt upp en räcka i din garderob. Den håller. Typ. |
| 5:11 | aliSalt | ali | 917 |
| 5:28 | tanke | du | Om man bara hade en… motorsåg. |
| 5:28 | väntar | du | Om man bara hade en… motorsåg. |
| 5:28 | sak | du | Om man bara hade en… motorsåg. |
| 5:28 | notis | tanke | 💭 Om man bara hade en… motorsåg. |
| 5:28 | röst | du | Om man bara hade en… motorsåg. · STORY |
| 5:31 | klar | du | Om man bara hade en… motorsåg. |
| 5:39 | skratt | du | kvarnen rapar |
| 5:44 | toast | guld | 🧵 |
| 5:48 | toast | guld | 🧵 |
| 5:48 | händelse | printStart | sak=n2_hjalm |
| 5:53 | toast | guld | ✅ |
| 5:53 | händelse | printKlar | sak=n2_hjalm n=2 |
| 5:53 | händelse | tagitUrPrint | sak=n2_hjalm n=1 |
| 6:02 | aliSalt | ali | 1264 |
| 6:02 | skratt | du | falsk tuta |
| 6:11 | händelse | printStart | sak=n2_vas |
| 6:14 | struken | ali | Ali här. Större ryggsäck. Min son hade den i lumpen. Han kom hem med fler grejer än han åkte iväg med. |
| 6:14 | toast | guld | ✅ |
| 6:14 | händelse | printKlar | sak=n2_vas n=27 |
| 6:15 | händelse | tagitUrPrint | sak=n2_vas n=1 |
| 6:18 | paket |  | ge → brev |
| 6:18 | väntar |  | (läget ändras) |
| 6:18 | väntar | pappa | Äntligen träd. /Pappa |
| 6:23 | aliSalt | ali | 871 |
| 6:24 | sak |  | (läget ändras) |
| 6:24 | klar |  | (läget ändras) |
| 6:28 | sak | pappa | Äntligen träd. /Pappa |
| 6:28 | lapp | Lapp från pappa | Äntligen träd. /Pappa |
| 6:28 | röst | pappa | Äntligen träd. /Pappa · STORY |
| 6:31 | klar | pappa | Äntligen träd. /Pappa |
| 6:34 | väntar | bud | (tips) |
| 6:34 | sak | bud | (tips) |
| 6:36 | klar | bud | (tips) |
| 6:37 | ljud | motorsag | Slyet faller |
| 6:38 | meddelande | mamma | Jag läste om en man som bodde på en soptipp. Han blev attackerad av måsar. Finns det måsar där? |
| 6:39 | röst | mamma | Jag läste om en man som bodde på en soptipp. Han blev attackerad av måsar. Finns det måsar där? · STORY |
| 6:50 | paket |  | sms |
| 6:50 | väntar | mamma | En katt? Är den vaccinerad? Rör den inte. Eller jo. Ge den en macka. |
| 7:00 | händelse | brevLast | id=m_masar |
| 7:02 | sak | mamma | En katt? Är den vaccinerad? Rör den inte. Eller jo. Ge den en macka. |
| 7:02 | sms | mamma | En katt? Är den vaccinerad? Rör den inte. Eller jo. Ge den en macka. |
| 7:02 | sms-bubbla | mamma | En katt? Är den vaccinerad? Rör den inte. Eller jo. Ge den en macka. |
| 7:02 | röst | mamma | En katt? Är den vaccinerad? Rör den inte. Eller jo. Ge den en macka. · STORY |
| 7:08 | klar | mamma | En katt? Är den vaccinerad? Rör den inte. Eller jo. Ge den en macka. |
| 7:11 | ljud | motorsag | Slyet faller |
| 7:16 | ljud | motorsag | Slyet faller |
| 7:22 | ljud | motorsag | Slyet faller |
| 7:26 | ljud | motorsag | Slyet faller |
| 7:31 | ljud | motorsag | Slyet faller |
| 7:31 | paket |  | tanke |
| 7:31 | tanke | du | Där. Perfekt plats för solen. |
| 7:31 | väntar | du | Där. Perfekt plats för solen. |
| 7:31 | sak | du | Där. Perfekt plats för solen. |
| 7:31 | kvitto-visas | du | Där. Perfekt plats för solen. |
| 7:31 | notis | tanke | 💭 Där. Perfekt plats för solen. |
| 7:31 | röst | du | Där. Perfekt plats för solen. · STORY |
| 7:33 | klar | du | Där. Perfekt plats för solen. |
| 7:44 | skratt | du | Alis dyr-pling |
| 7:44 | toast | guld | 3D-modell köpt – printa solcellspark på skrivaren |
| 7:44 | händelse | kopt | sak=solpark |
| 7:52 | händelse | printStart | sak=byggsats:solpark |
| 7:54 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 7:55 | skratt | du | kvarnen spottar |
| 7:55 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 7:56 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 7:56 | väntar | notis:Skrivare L: Tornet är tomt – mal mer så  | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 7:56 | sak | notis:Skrivare L: Tornet är tomt – mal mer så  | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 7:56 | notis | fel | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 7:58 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 7:58 | struken | notis | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 7:59 | klar | notis:Skrivare L: Tornet är tomt – mal mer så  | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 8:00 | ljud | kajsa | Mjau |
| 8:03 | toast | skak | handen skakar: fullt |
| 8:06 | väntar | rolf | Konditoriet på Storgatan har slutat me mazariner. Ja har skrivit ett klagomål. På papper. Me frimärke. /R |
| 8:09 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 8:09 | struken | notis | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 8:10 | toast | bra | Del 1 av 4 klar |
| 8:10 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 8:11 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 8:13 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 8:14 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 8:15 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 8:17 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 8:18 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 8:19 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 8:21 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 8:22 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 8:23 | toast | bra | Del 2 av 4 klar |
| 8:23 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 8:25 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 8:26 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 8:27 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 8:28 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 8:38 | toast | skak | handen skakar: fullt |
| 8:41 | skratt | du | falsk tuta |
| 8:41 | väntar | värld:TUUT TUUT! | TUUT TUUT! |
| 8:43 | sak | värld:TUUT TUUT! | TUUT TUUT! |
| 8:43 | bubbla |  | TUUT TUUT! |
| 8:44 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 8:44 | struken | notis | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 8:45 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 8:46 | klar | värld:TUUT TUUT! | TUUT TUUT! |
| 8:46 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 8:47 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 8:48 | struken | bror | Berättade för polarna att min lillebrorsa bygger sitt eget hus. Dom tror jag ljuger. Fortsätt. |
| 8:48 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 8:49 | toast | bra | Del 3 av 4 klar |
| 8:49 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 8:50 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 8:51 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 8:52 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 8:53 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 8:54 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 8:55 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 8:56 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 8:57 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 8:58 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 8:59 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 9:02 | väntar | värld:Mjau. | Mjau. |
| 9:10 | sak | värld:Mjau. | Mjau. |
| 9:10 | bubbla |  | Mjau. |
| 9:11 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 9:11 | struken | notis | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 9:12 | klar | värld:Mjau. | Mjau. |
| 9:12 | händelse | printKlar | sak=byggsats:solpark n=1 |
| 9:12 | toast | guld | ✅ |
| 9:19 | händelse | tagitUrPrint | sak=byggsats:solpark n=1 |
| 9:25 | händelse | placerat | sak=solpark |
| 9:25 | struken | kedja | solpark |
| 9:25 | händelse | malKlart | id=r9-bygg-solcellspark del=Dag 9 – Solcellsparken nasta=paket9 |
| 9:25 | väntar | du | Det har kommit beställningar. Paketen ska iväg från datorn. |
| 9:25 | målruta |  | Skicka två paket från datorn · 1/2 |
| 9:25 | MÅL |  | Skicka två paket från datorn · 1/2 |
| 9:27 | sak | du | Det har kommit beställningar. Paketen ska iväg från datorn. |
| 9:27 | pil |  | Skicka två paket från datorn · 1/2 |
| 9:27 | notis | tanke | 💭 Det har kommit beställningar. Paketen ska iväg från datorn. |
| 9:27 | röst | du | Det har kommit beställningar. Paketen ska iväg från datorn. · MÅL |
| 9:29 | kvittens-bock |  | ✓ Bygg en solcellspark |
| 9:32 | klar | du | Det har kommit beställningar. Paketen ska iväg från datorn. |
| 9:38 | händelse | printStart | sak=n2_vas |
| 9:41 | toast | guld | ✅ |
| 9:41 | händelse | printKlar | sak=n2_vas n=28 |
| 9:42 | händelse | tagitUrPrint | sak=n2_vas n=1 |
| 9:57 | webb | du | packade 1 n2_vas |
| 10:11 | väntar | info:bra | 📦 Paketet till Majken, 91, i Skellefteå ligger i postlådan – Rolf tar det till posten |
| 10:11 | sak | info:bra | 📦 Paketet till Majken, 91, i Skellefteå ligger i postlådan – Rolf tar det till posten |
| 10:11 | kvitto-visas | info:bra | 📦 Paketet till Majken, 91, i Skellefteå ligger i postlådan – Rolf tar det till posten |
| 10:11 | toast | bra | 📦 Paketet till Majken, 91, i Skellefteå ligger i postlådan – Rolf tar det till posten |
| 10:11 | händelse | malKlart | id=paket9 del=Dag 9 – Solcellsparken nasta=petgtorn9 |
| 10:11 | väntar | du | Den röda kvarnen står och väntar på plats för rullarna. Ett större torn. |
| 10:11 | MÅL |  | Bygg Rulltorn XL vid röda kvarnen |
| 10:13 | klar | info:bra | 📦 Paketet till Majken, 91, i Skellefteå ligger i postlådan – Rolf tar det till posten |
| 10:13 | målruta |  | Bygg Rulltorn XL vid röda kvarnen |
| 10:15 | händelse | printStart | sak=n2_hjalm |
| 10:15 | kvittens-bock |  | ✓ Skicka två paket från datorn · 2/2 |
| 10:15 | sak | du | Den röda kvarnen står och väntar på plats för rullarna. Ett större torn. |
| 10:15 | pil |  | Bygg Rulltorn XL vid röda kvarnen |
| 10:15 | notis | tanke | 💭 Den röda kvarnen står och väntar på plats för rullarna. Ett större torn. |
| 10:15 | röst | du | Den röda kvarnen står och väntar på plats för rullarna. Ett större torn. · MÅL |
| 10:16 | nick |  | nick:80 |
| 10:20 | toast | guld | ✅ |
| 10:20 | händelse | printKlar | sak=n2_hjalm n=3 |
| 10:20 | händelse | tagitUrPrint | sak=n2_hjalm n=1 |
| 10:21 | klar | du | Den röda kvarnen står och väntar på plats för rullarna. Ett större torn. |
| 10:29 | aliSalt | ali | 30 |
| 10:29 | aliSalt | ali | 1200 |
| 10:33 | skratt | du | Alis dyr-pling |
| 10:33 | toast | guld | 3D-modell köpt – printa rulltorn xl på skrivaren |
| 10:33 | händelse | kopt | sak=petgtorn |
| 10:35 | väntar | ali | Hej granne! |
| 10:42 | väntar | värld:Mjau. | Mjau. |
| 10:45 | sak | värld:Mjau. | Mjau. |
| 10:45 | bubbla |  | Mjau. |
| 10:45 | skratt | du | kvarnen rapar |
| 10:47 | klar | värld:Mjau. | Mjau. |
| 10:50 | toast | guld | 🧵 |
| 10:54 | toast | guld | 🧵 |
| 10:58 | händelse | printStart | sak=byggsats:petgtorn |
| 11:00 | toast | bra | Del 1 av 3 klar |
| 11:02 | toast | bra | Del 2 av 3 klar |
| 11:05 | händelse | printKlar | sak=byggsats:petgtorn n=1 |
| 11:05 | toast | guld | ✅ |
| 11:05 | händelse | tagitUrPrint | sak=byggsats:petgtorn n=1 |
| 11:05 | händelse | placerat | sak=petgtorn |
| 11:05 | väntar | info:guld | Rulltorn XL – 12 rullar röd PETG får plats |
| 11:05 | sak | info:guld | Rulltorn XL – 12 rullar röd PETG får plats |
| 11:05 | kvitto-visas | info:guld | Rulltorn XL – 12 rullar röd PETG får plats |
| 11:05 | toast | guld | Rulltorn XL – 12 rullar röd PETG får plats |
| 11:05 | händelse | malKlart | id=petgtorn9 del=Dag 9 – Solcellsparken nasta=sov9 |
| 11:05 | paket |  | lapp |
| 11:05 | väntar | du | Dag 9 är slut. Det drar kallt genom väggarna. |
| 11:06 | MÅL |  | Klart för idag – sov när du vill |
| 11:07 | klar | info:guld | Rulltorn XL – 12 rullar röd PETG får plats |
| 11:09 | målruta |  | Klart för idag – sov när du vill |
| 11:09 | kvittens-bock |  | ✓ Bygg Rulltorn XL vid röda kvarnen |
| 11:09 | sak | du | (nytt mål i rutan) |
| 11:09 | pil |  | Klart för idag – sov när du vill |
| 11:10 | klar | du | (nytt mål i rutan) |
| 11:12 | sak | du | Dag 9 är slut. Det drar kallt genom väggarna. |
| 11:12 | lapp | 📔 Dagbok | Dag 9 är slut. Det drar kallt genom väggarna. |
| 11:12 | kvallsrad | du | Det drar kallt genom väggarna. |
| 11:12 | klar | du | Dag 9 är slut. Det drar kallt genom väggarna. |
| 11:12 | väntar | notis:📔 Prestation: Kajakmalaren · +3 respekt | 📔 Prestation: Kajakmalaren · +3 respekt |
| 11:13 | väntar | notis:🌇 Klockan är 21. Ali slår igen luckan.  | 🌇 Klockan är 21. Ali slår igen luckan. Dagens jobb är klart – gå in i skjulet och sov i sängen. |
| 11:21 | webbBetalt | du | 3344 |
| 11:21 | paket |  | sms |
| 11:21 | väntar | rolf | Kajsa har fått lax tre dar i rad. Tack vare dina paket. Hon e otrevlig mot mej nu. /R |
| 11:21 | nattkort | du | 🌙 Dag 9 är slut. God natt. zzz… Det drar kallt genom väggarna. DAGENS PRINTAR Designvas i röd PETG × 11 Cykelhjälm i PETG × 3 Totalt 14 printar 💰 Tjänat i dag |

<details><summary>Botens handlingar dag 9</summary>

- 0:00 — dag 9 börjar — (12201 kr)
- 0:09 popup: "FORTSÄTT" (12201 kr)
- 0:25 gå till Rolfs postlåda (29 m) (12201 kr)
- 0:34 panel: "En lapp från Rolf
Lite olaglig" (12201 kr)
- 0:41 gå till Ali (31 m) (12201 kr)
- 0:41 öppnar Alis butik – köpa receptet cykelhjälm i petg (12201 kr)
- 0:43 köper n2_hjalm för 2300 kr (9901 kr)
- 0:54 gå till skrivaren (29 m) (9901 kr)
- 0:55 printar Designvas i röd PETG (9901 kr)
- 1:00 tar ut 1 st ur skrivaren (9901 kr)
- 1:01 printar Designvas i röd PETG (9901 kr)
- 1:06 tar ut 1 st ur skrivaren (9901 kr)
- 1:10 gå till datorn (21 m) (9901 kr)
- 1:18 panel: "Webbshopen · Soptippsvägen 1
B" (9901 kr)
- 1:27 panel: "Webbshopen · Soptippsvägen 1
B" (9901 kr)
- 1:34 gå till Rolfs postlåda (paket) (29 m) (9901 kr)
- 1:35 webbshop: 1 paket i postlådan (9901 kr)
- 1:35 tjänar pengar till väntar på flaskhalsen för solpark: 9901/9941 kr → printar designvas i röd petg (1185 kr) (9901 kr)
- 1:37 gå till skrivaren (10 m) (9901 kr)
- 1:38 printar Designvas i röd PETG (9901 kr)
- 1:43 tar ut 1 st ur skrivaren (9901 kr)
- 1:49 gå till Ali (30 m) (9901 kr)
- 1:49 öppnar Alis butik – sälja (9901 kr)
- 1:51 säljer hos Ali: +1185 kr (11086 kr)
- 2:01 tjänar pengar till väntar på flaskhalsen för solpark: 11086/11126 kr → printar designvas i röd petg (1126 kr) (11086 kr)
- 2:09 gå till en tunna (39 m) (11086 kr)
- 2:12 gå till PETG-kvarnen (11 m) (11086 kr)
- 2:12 tömmer det tunga i PETG-kvarnen (11086 kr)
- 2:17 gå till skrivaren (4 m) (11086 kr)
- 2:18 printar Designvas i röd PETG (11086 kr)
- 2:23 tar ut 1 st ur skrivaren (11086 kr)
- 2:29 gå till Ali (31 m) (11086 kr)
- 2:29 öppnar Alis butik – sälja (11086 kr)
- 2:31 säljer hos Ali: +1126 kr (12212 kr)
- 2:33 tjänar pengar till väntar på flaskhalsen för solpark: 12212/12252 kr → printar designvas i röd petg (1069 kr) (12212 kr)
- 2:39 gå till skrivaren (29 m) (12212 kr)
- 2:40 printar Designvas i röd PETG (12212 kr)
- 2:45 tar ut 1 st ur skrivaren (12212 kr)
- 2:51 gå till Ali (29 m) (12212 kr)
- 2:51 öppnar Alis butik – sälja (12212 kr)
- 2:52 säljer hos Ali: +1069 kr (13281 kr)
- 2:54 tjänar pengar till väntar på flaskhalsen för solpark: 13281/13321 kr → printar designvas i röd petg (1016 kr) (13281 kr)
- 3:00 gå till skrivaren (29 m) (13281 kr)
- 3:02 printar Designvas i röd PETG (13281 kr)
- 3:06 tar ut 1 st ur skrivaren (13281 kr)
- 3:12 gå till Ali (29 m) (13281 kr)
- 3:12 öppnar Alis butik – sälja (13281 kr)
- 3:14 säljer hos Ali: +1016 kr (14297 kr)
- 3:16 tjänar pengar till väntar på flaskhalsen för solpark: 14297/14337 kr → printar designvas i röd petg (965 kr) (14297 kr)
- 3:22 gå till skrivaren (29 m) (14297 kr)
- 3:23 printar Designvas i röd PETG (14297 kr)
- 3:28 tar ut 1 st ur skrivaren (14297 kr)
- 3:34 gå till Ali (29 m) (14297 kr)
- 3:34 öppnar Alis butik – sälja (14297 kr)
- 3:35 säljer hos Ali: +965 kr (15262 kr)
- 3:37 tjänar pengar till väntar på flaskhalsen för solpark: 15262/15302 kr → printar cykelhjälm i petg (1330 kr) (15262 kr)
- 3:45 gå till en tunna (40 m) (15262 kr)
- 3:50 gå till PETG-kvarnen (17 m) (15262 kr)
- 3:50 tömmer det tunga i PETG-kvarnen (15262 kr)
- 3:55 gå till skrivaren (3 m) (15262 kr)
- 3:56 printar Cykelhjälm i PETG (15262 kr)
- 4:02 tar ut 1 st ur skrivaren (15262 kr)
- 4:08 gå till Ali (31 m) (15262 kr)
- 4:08 öppnar Alis butik – sälja (15262 kr)
- 4:10 säljer hos Ali: +1330 kr (16592 kr)
- 4:12 tjänar pengar till väntar på flaskhalsen för solpark: 16592/16632 kr → printar designvas i röd petg (917 kr) (16592 kr)
- 4:18 gå till skrivaren (29 m) (16592 kr)
- 4:19 printar Designvas i röd PETG (16592 kr)
- 4:24 tar ut 1 st ur skrivaren (16592 kr)
- 4:38 popup: "Okej, jag säger inget." (16592 kr)
- 4:47 popup: "Läst" (16592 kr)
- 4:49 gå till Ali (29 m) (16592 kr)
- 4:49 öppnar Alis butik – sälja (16592 kr)
- 4:51 tjänar pengar till väntar på flaskhalsen för solpark: 16592/16632 kr → printar designvas i röd petg (917 kr) (16592 kr)
- 4:57 gå till skrivaren (29 m) (16592 kr)
- 4:59 printar Designvas i röd PETG (16592 kr)
- 5:03 tar ut 1 st ur skrivaren (16592 kr)
- 5:09 gå till Ali (29 m) (16592 kr)
- 5:09 öppnar Alis butik – sälja (16592 kr)
- 5:11 säljer hos Ali: +917 kr (17509 kr)
- 5:23 gå till slyet bakom tippen (51 m) (17509 kr)
- 5:33 tjänar pengar till väntar på pappas motorsåg: 17509/17629 kr → printar cykelhjälm i petg (1264 kr) (17509 kr)
- 5:35 gå till en tunna (8 m) (17509 kr)
- 5:39 gå till PETG-kvarnen (14 m) (17509 kr)
- 5:39 tömmer det tunga i PETG-kvarnen (17509 kr)
- 5:47 gå till skrivaren (4 m) (17509 kr)
- 5:48 printar Cykelhjälm i PETG (17509 kr)
- 5:54 tar ut 1 st ur skrivaren (17509 kr)
- 6:00 gå till Ali (31 m) (17509 kr)
- 6:00 öppnar Alis butik – sälja (17509 kr)
- 6:02 säljer hos Ali: +1264 kr (18773 kr)
- 6:04 tjänar pengar till väntar på pappas motorsåg: 18773/18893 kr → printar designvas i röd petg (871 kr) (18773 kr)
- 6:10 gå till skrivaren (29 m) (18773 kr)
- 6:11 printar Designvas i röd PETG (18773 kr)
- 6:16 tar ut 1 st ur skrivaren (18773 kr)
- 6:22 gå till Ali (29 m) (18773 kr)
- 6:22 öppnar Alis butik – sälja (18773 kr)
- 6:24 säljer hos Ali: +871 kr (19644 kr)
- 6:36 gå till slyet (motorsåg) (51 m) (19644 kr)
- 6:50 popup: "Bara en katt." (19644 kr)
- 7:00 popup: "Läst" (19644 kr)
- 7:15 gå till slyet (motorsåg) (4 m) (19644 kr)
- 7:20 gå till slyet (motorsåg) (5 m) (19644 kr)
- 7:29 gå till slyet (motorsåg) (4 m) (19644 kr)
- 7:43 gå till Ali (46 m) (19644 kr)
- 7:43 öppnar Alis butik – köpa solcellspark (19644 kr)
- 7:45 köper solpark för 2400 kr (17244 kr)
- 7:51 gå till skrivaren (23 m) (17244 kr)
- 7:52 printar Solcellspark (4 delar) (17244 kr)
- 8:04 plockar 1 skräp på tippen (bär max 16) (17244 kr)
- 8:07 gå till kvarnen (14 m) (17244 kr)
- 8:39 plockar 10 skräp på tippen (bär max 16) (17244 kr)
- 8:42 gå till kvarnen (14 m) (17244 kr)
- 9:06 plockar 5 skräp på tippen (bär max 16) (17244 kr)
- 9:09 gå till kvarnen (14 m) (17244 kr)
- 9:19 gå till skrivaren (7 m) (17244 kr)
- 9:20 tar ut 1 st ur skrivaren (17244 kr)
- 9:24 gå till platsen för solcellspark (21 m) (17244 kr)
- 9:25 ställer ut solcellspark (17244 kr)
- 9:37 gå till skrivaren (16 m) (17244 kr)
- 9:38 printar Designvas i röd PETG (17244 kr)
- 9:43 tar ut 1 st ur skrivaren (17244 kr)
- 9:48 gå till datorn (23 m) (17244 kr)
- 9:56 panel: "Webbshopen · Soptippsvägen 1
B" (17244 kr)
- 10:05 panel: "Webbshopen · Soptippsvägen 1
B" (17244 kr)
- 10:11 gå till Rolfs postlåda (paket) (29 m) (17244 kr)
- 10:12 webbshop: 2 paket i postlådan (17244 kr)
- 10:12 tjänar pengar till väntar på fler beställningar: 17244/17304 kr → printar cykelhjälm i petg (1200 kr) (17244 kr)
- 10:14 gå till skrivaren (10 m) (17244 kr)
- 10:15 printar Cykelhjälm i PETG (17244 kr)
- 10:21 tar ut 1 st ur skrivaren (17244 kr)
- 10:27 gå till Ali (30 m) (17244 kr)
- 10:27 öppnar Alis butik – sälja (17244 kr)
- 10:29 säljer hos Ali: +1230 kr (18474 kr)
- 10:32 öppnar Alis butik – köpa rulltorn xl (18474 kr)
- 10:34 köper petgtorn för 600 kr (17874 kr)
- 10:42 gå till en tunna (36 m) (17874 kr)
- 10:45 gå till PETG-kvarnen (10 m) (17874 kr)
- 10:45 tömmer det tunga i PETG-kvarnen (17874 kr)
- 10:56 gå till skrivaren (3 m) (17874 kr)
- 10:58 printar Rulltorn XL (3 delar) (17874 kr)
- 11:05 tar ut 1 st ur skrivaren (17874 kr)
- 11:05 gå till röda kvarnen (1 m) (17874 kr)
- 11:18 gå till sängen (22 m) (17874 kr)

</details>

## Dag 10

| Tid | Källa | Vem | Text |
|---|---|---|---|
| 11:21 | vara | ali | n2_hjalm |
| 11:21 | väntar | info:guld | Nätterna blir kallare nu – se till att skjulet håller värmen. |
| 11:21 | händelse | malKlart | id=sov9 del=Dag 9 – Solcellsparken nasta=tapeter |
| 11:21 | MÅL |  | Tapetsera skjulet · 0/4 |
| 0:01 | händelse | dagenBorjar | dag=10 |
| 0:01 | meddelande | du | Dag 10. 12 dagar till jul. Utan väggar fryser jag i natt. |
| 0:01 | dagbokkort | du | Skrivare L och kylan · Dag 10. 12 dagar till jul. Utan väggar fryser jag i natt. |
| 0:01 | röst | du | Dag 10. 12 dagar till jul. Skrivare L och kylan. Utan väggar fryser jag i natt. · STORY |
| 0:09 | händelse | morgonkortStangt | dag=10 |
| 0:09 | paket |  | sms |
| 0:09 | struken | ali | Hej granne! |
| 0:09 | väntar | ali | Ali här. Satt uppe med AI:n hela natten. Ritningen till Tapeter är klar. Kom innan nio, då stänger jag. |
| 0:09 | struken | kedja | d10 |
| 0:09 | väntar | du | Skjulet ska kännas som ett rum. Tapeter. |
| 0:09 | målruta |  | Tapetsera skjulet · 0/4 |
| 0:09 | väntar | notis:2 paket i natt · +3 344 kr | 2 paket i natt · +3 344 kr |
| 0:10 | väntar | notis:Cykelhjälm i PETG · +50 % | Cykelhjälm i PETG · +50 % |
| 0:14 | sak | du | Skjulet ska kännas som ett rum. Tapeter. |
| 0:14 | pil |  | Tapetsera skjulet · 0/4 |
| 0:14 | notis | tanke | 💭 Skjulet ska kännas som ett rum. Tapeter. |
| 0:14 | röst | du | Skjulet ska kännas som ett rum. Tapeter. · MÅL |
| 0:14 | nick |  | nick:82 |
| 0:17 | klar | du | Skjulet ska kännas som ett rum. Tapeter. |
| 0:17 | struken | info:guld | Nätterna blir kallare nu – se till att skjulet håller värmen. |
| 0:17 | struken | notis:📔 Prestation: Kajakmalaren · +3 respekt | 📔 Prestation: Kajakmalaren · +3 respekt |
| 0:17 | struken | notis:🌇 Klockan är 21. Ali slår igen luckan.  | 🌇 Klockan är 21. Ali slår igen luckan. Dagens jobb är klart – gå in i skjulet och sov i sängen. |
| 0:17 | sak | notis:2 paket i natt · +3 344 kr | 2 paket i natt · +3 344 kr |
| 0:17 | notis |  | 2 paket i natt · +3 344 kr |
| 0:20 | klar | notis:2 paket i natt · +3 344 kr | 2 paket i natt · +3 344 kr |
| 0:22 | sak | notis:Cykelhjälm i PETG · +50 % | Cykelhjälm i PETG · +50 % |
| 0:22 | notis |  | Cykelhjälm i PETG · +50 % |
| 0:23 | röst | ali | Jag visade AI:n din skrivare. Den sa: bygg något eget, Ali. Jag sa: jag är femtioåtta. Den sa: och? · STORY |
| 0:23 | butiksbubbla | ali | Jag visade AI:n din skrivare. Den sa: bygg något eget, Ali. Jag sa: jag är femtioåtta. Den sa: och? |
| 0:24 | klar | notis:Cykelhjälm i PETG · +50 % | Cykelhjälm i PETG · +50 % |
| 0:25 | skratt | du | Alis dyr-pling |
| 0:25 | toast | guld | 3D-modell köpt – printa tapeter på skrivaren |
| 0:25 | händelse | kopt | sak=tapeter |
| 0:28 | struken | ali | Ali här. Satt uppe med AI:n hela natten. Ritningen till Tapeter är klar. Kom innan nio, då stänger jag. |
| 0:33 | händelse | printStart | sak=byggsats:tapeter |
| 0:35 | händelse | printKlar | sak=byggsats:tapeter n=1 |
| 0:35 | toast | guld | ✅ |
| 0:35 | händelse | tagitUrPrint | sak=byggsats:tapeter n=1 |
| 0:38 | väntar | info:guld | 🧻 Bakväggen tapetserad. 3 kvar. |
| 0:38 | sak | info:guld | 🧻 Bakväggen tapetserad. 3 kvar. |
| 0:38 | kvitto-visas | info:guld | 🧻 Bakväggen tapetserad. 3 kvar. |
| 0:38 | toast | guld | 🧻 Bakväggen tapetserad. 3 kvar. |
| 0:40 | klar | info:guld | 🧻 Bakväggen tapetserad. 3 kvar. |
| 0:47 | händelse | printStart | sak=byggsats:tapeter |
| 0:47 | skratt | du | Kajsa i skrivaren |
| 0:49 | händelse | printKlar | sak=byggsats:tapeter n=1 |
| 0:49 | toast | guld | ✅ |
| 0:49 | händelse | tagitUrPrint | sak=byggsats:tapeter n=1 |
| 0:53 | väntar | info:guld | 🧻 Vänster vägg tapetserad. 2 kvar. |
| 0:53 | sak | info:guld | 🧻 Vänster vägg tapetserad. 2 kvar. |
| 0:53 | kvitto-visas | info:guld | 🧻 Vänster vägg tapetserad. 2 kvar. |
| 0:53 | toast | guld | 🧻 Vänster vägg tapetserad. 2 kvar. |
| 0:54 | skratt | du | falsk tuta |
| 0:55 | klar | info:guld | 🧻 Vänster vägg tapetserad. 2 kvar. |
| 1:02 | händelse | printStart | sak=byggsats:tapeter |
| 1:04 | händelse | printKlar | sak=byggsats:tapeter n=1 |
| 1:04 | toast | guld | ✅ |
| 1:04 | händelse | tagitUrPrint | sak=byggsats:tapeter n=1 |
| 1:04 | skratt | du | kvarnen spottar |
| 1:07 | väntar | info:guld | 🧻 Höger vägg tapetserad. 1 kvar. |
| 1:07 | sak | info:guld | 🧻 Höger vägg tapetserad. 1 kvar. |
| 1:07 | kvitto-visas | info:guld | 🧻 Höger vägg tapetserad. 1 kvar. |
| 1:07 | toast | guld | 🧻 Höger vägg tapetserad. 1 kvar. |
| 1:09 | klar | info:guld | 🧻 Höger vägg tapetserad. 1 kvar. |
| 1:15 | väntar | värld:TUUT! Hej grannen! | TUUT! Hej grannen! |
| 1:16 | händelse | printStart | sak=byggsats:tapeter |
| 1:18 | händelse | printKlar | sak=byggsats:tapeter n=1 |
| 1:18 | toast | guld | ✅ |
| 1:18 | händelse | tagitUrPrint | sak=byggsats:tapeter n=1 |
| 1:19 | sak | värld:TUUT! Hej grannen! | TUUT! Hej grannen! |
| 1:19 | bubbla |  | TUUT! Hej grannen! |
| 1:22 | klar | värld:TUUT! Hej grannen! | TUUT! Hej grannen! |
| 1:22 | väntar | info:guld | Hela skjulet är tapetserat! Klassisk 70-talstapet … Ali säljer snyggare mönster. |
| 1:22 | sak | info:guld | Hela skjulet är tapetserat! Klassisk 70-talstapet … Ali säljer snyggare mönster. |
| 1:22 | kvitto-visas | info:guld | Hela skjulet är tapetserat! Klassisk 70-talstapet … Ali säljer snyggare mönster. |
| 1:22 | toast | guld | Hela skjulet är tapetserat! Klassisk 70-talstapet … Ali säljer snyggare mönster. |
| 1:22 | händelse | malKlart | id=tapeter del=Dag 10 – Skrivare L och kylan nasta=r10-gor-skjulet-varmt |
| 1:22 | händelse | malKlart | id=r10-gor-skjulet-varmt del=Dag 10 – Skrivare L och kylan nasta=spis10 |
| 1:22 | väntar | du | Bygg spisen och laga en varm måltid. |
| 1:22 | MÅL |  | Bygg spisen och laga en varm måltid |
| 1:24 | klar | info:guld | Hela skjulet är tapetserat! Klassisk 70-talstapet … Ali säljer snyggare mönster. |
| 1:24 | målruta |  | Bygg spisen och laga en varm måltid |
| 1:26 | kvittens-bock |  | ✓ Tapetsera skjulet · 4/4 |
| 1:26 | kvittens-bock |  | ✓ Gör skjulet varmt inför kylan |
| 1:26 | sak | du | Bygg spisen och laga en varm måltid. |
| 1:26 | pil |  | Bygg spisen och laga en varm måltid |
| 1:26 | röst | du | Bygg spisen och laga en varm måltid. · MÅL |
| 1:26 | nick |  | nick:84 |
| 1:29 | klar | du | Bygg spisen och laga en varm måltid. |
| 1:37 | toast | guld | 🍳 Spisen ligger i handen – klicka på skjulet för att ställa in den |
| 1:37 | händelse | kopt | sak=spis |
| 1:37 | röst | ali | Laga inget som luktar fisk. Rolf kommer då. · STORY |
| 1:37 | butiksbubbla | ali | Laga inget som luktar fisk. Rolf kommer då. |
| 1:43 | väntar | info:guld | 🍳 Spisen står i skjulet – maten mättar mer nu |
| 1:43 | monterat | du | byggsats:spis |
| 1:43 | händelse | monterat | sak=spis |
| 1:43 | sak | info:guld | 🍳 Spisen står i skjulet – maten mättar mer nu |
| 1:43 | kvitto-visas | info:guld | 🍳 Spisen står i skjulet – maten mättar mer nu |
| 1:43 | toast | guld | 🍳 Spisen står i skjulet – maten mättar mer nu |
| 1:45 | klar | info:guld | 🍳 Spisen står i skjulet – maten mättar mer nu |
| 1:47 | väntar | info:bra | 😋 Raggmunksrester i folie – lagad på spisen |
| 1:47 | ata | du | burk_raggmunk |
| 1:47 | sak | info:bra | 😋 Raggmunksrester i folie – lagad på spisen |
| 1:47 | kvitto-visas | info:bra | 😋 Raggmunksrester i folie – lagad på spisen |
| 1:47 | toast | bra | 😋 Raggmunksrester i folie – lagad på spisen |
| 1:47 | paket |  | tanke |
| 1:47 | tanke | du | Varm mat. I skjulet. Mamma skulle inte tro det. |
| 1:47 | väntar | du | Varm mat. I skjulet. Mamma skulle inte tro det. |
| 1:47 | händelse | malKlart | id=spis10 del=Dag 10 – Skrivare L och kylan nasta=sov10 |
| 1:47 | paket |  | lapp |
| 1:47 | väntar | du | Dag 10 är slut. I natt frös jag. Tolv dagar kvar. |
| 1:47 | MÅL |  | Klart för idag – sov när du vill |
| 1:49 | klar | info:bra | 😋 Raggmunksrester i folie – lagad på spisen |
| 1:49 | sak | du | Varm mat. I skjulet. Mamma skulle inte tro det. |
| 1:49 | kvitto-visas | du | Varm mat. I skjulet. Mamma skulle inte tro det. |
| 1:49 | notis | tanke | 💭 Varm mat. I skjulet. Mamma skulle inte tro det. |
| 1:49 | röst | du | Varm mat. I skjulet. Mamma skulle inte tro det. · REAKTION |
| 1:50 | målruta |  | Klart för idag – sov när du vill |
| 1:51 | kvittens-bock |  | ✓ Bygg spisen och laga en varm måltid |
| 1:53 | klar | du | Varm mat. I skjulet. Mamma skulle inte tro det. |
| 1:53 | sak | du | (nytt mål i rutan) |
| 1:53 | pil |  | Klart för idag – sov när du vill |
| 1:53 | klar | du | (nytt mål i rutan) |
| 1:54 | väntar | notis:🌇 Klockan är 21. Ali slår igen luckan.  | 🌇 Klockan är 21. Ali slår igen luckan. Dagens jobb är klart – gå in i skjulet och sov i sängen. |
| 1:58 | nattkort | du | 🌙 Dag 10 är slut. God natt. zzz… I natt frös jag. Tolv dagar kvar. 💰 Tjänat i dag +0 kr |

<details><summary>Botens handlingar dag 10</summary>

- 0:00 — dag 10 börjar — (21218 kr)
- 0:09 popup: "FORTSÄTT" (21218 kr)
- 0:23 gå till Ali (21 m) (21218 kr)
- 0:23 öppnar Alis butik – köpa tapeter (21218 kr)
- 0:26 köper tapeter för 800 kr (20418 kr)
- 0:31 gå till skrivaren (23 m) (20418 kr)
- 0:33 printar Tapeter (20418 kr)
- 0:35 tar ut 1 st ur skrivaren (20418 kr)
- 0:38 gå till skjulet (bak) (15 m) (20418 kr)
- 0:46 gå till skrivaren (15 m) (20418 kr)
- 0:47 printar Tapeter (20418 kr)
- 0:50 tar ut 1 st ur skrivaren (20418 kr)
- 0:53 gå till skjulet (vanster) (15 m) (20418 kr)
- 1:00 gå till skrivaren (15 m) (20418 kr)
- 1:02 printar Tapeter (20418 kr)
- 1:04 tar ut 1 st ur skrivaren (20418 kr)
- 1:07 gå till skjulet (hoger) (15 m) (20418 kr)
- 1:15 gå till skrivaren (15 m) (20418 kr)
- 1:16 printar Tapeter (20418 kr)
- 1:19 tar ut 1 st ur skrivaren (20418 kr)
- 1:22 gå till skjulet (fram) (15 m) (20418 kr)
- 1:35 gå till Ali (20 m) (20418 kr)
- 1:35 öppnar Alis butik – köpa spis (20418 kr)
- 1:37 köper spis för 360 kr (20058 kr)
- 1:43 gå till ställ in spisen i skjulet (19 m) (20058 kr)
- 1:47 lagar burk_raggmunk på spisen (20058 kr)
- 1:55 gå till sängen (1 m) (20058 kr)

</details>

## Dag 11

| Tid | Källa | Vem | Text |
|---|---|---|---|
| 1:58 | vara | ali | n2_vas |
| 1:58 | händelse | malKlart | id=sov10 del=Dag 10 – Skrivare L och kylan nasta=kolfkvarn |
| 1:58 | väntar | info:guld | 🏆 KAPITEL 2 KLART! Röda fabriken går – och skjulet klarar kylan. |
| 1:58 | paket |  | sms |
| 1:58 | väntar | rolf | Dä blir kallt nu o du fryser int. Respekt. Ja la jukeboxen från dödsbot i lådan. O lite pengar. Den spelar bara dansband. /R |
| 1:58 | MÅL |  | Bygg kolfiberkvarnen i linje 3 |
| 1:58 | struken | info:guld | 🏆 KAPITEL 2 KLART! Röda fabriken går – och skjulet klarar kylan. |
| 1:58 | väntar | info:guld | 🚧 Gärdesgården har flyttats ut! Du får utforska ny mark – men bara ställa saker på mark du äger. |
| 0:00 | ljud | bom | Bommen fälls upp (vanster) |
| 0:01 | händelse | dagenBorjar | dag=11 |
| 0:01 | meddelande | du | Nätterna blir kalla. Därför: värme. |
| 0:01 | dagbokkort | du | KAPITEL 3 · Dag 11. 11 dagar till jul · Nätterna blir kalla. Därför: värme. |
| 0:01 | röst | du | KAPITEL 3 · Dag 11. 11 dagar till jul. Nätterna blir kalla. Därför: värme. · STORY |
| 0:08 | händelse | morgonkortStangt | dag=11 |
| 0:08 | paket |  | sms |
| 0:08 | väntar | ali | Ali här. Satt uppe med AI:n hela natten. Ritningen till Kolfiberkvarnen är klar. Kom innan nio, då stänger jag. |
| 0:08 | paket |  | toast |
| 0:08 | väntar | notis:🔥 Varmt och skönt i skjulet trots kylan | 🔥 Varmt och skönt i skjulet trots kylan. |
| 0:08 | struken | kedja | d11 |
| 0:08 | väntar | du | Kajakerna på tippen är kolfiber. Det behövs en kvarn som tål det. |
| 0:08 | väntar | notis:Designvas i röd PETG · +50 % | Designvas i röd PETG · +50 % |
| 0:11 | målruta |  | Bygg kolfiberkvarnen i linje 3 |
| 0:12 | struken | info:guld | 🚧 Gärdesgården har flyttats ut! Du får utforska ny mark – men bara ställa saker på mark du äger. |
| 0:12 | väntar | info:guld | Skylten vid vägen är uppgraderad. |
| 0:12 | väntar | rolf | Båtklubben skulle rensa förrådet. Ja hjälpte till. Fråga inte hur. /R |
| 0:13 | sak | du | Kajakerna på tippen är kolfiber. Det behövs en kvarn som tål det. |
| 0:13 | pil |  | Bygg kolfiberkvarnen i linje 3 |
| 0:13 | notis | tanke | 💭 Kajakerna på tippen är kolfiber. Det behövs en kvarn som tål det. |
| 0:13 | röst | du | Kajakerna på tippen är kolfiber. Det behövs en kvarn som tål det. · MÅL |
| 0:13 | nick |  | nick:86 |
| 0:14 | paket |  | sms |
| 0:14 | väntar | rolf | Gå int genom gamla grinden bakom tippen. Där e floden. /R |
| 0:18 | väntar | värld:HMPF. RÖD. | HMPF. RÖD. |
| 0:18 | klar | du | Kajakerna på tippen är kolfiber. Det behövs en kvarn som tål det. |
| 0:18 | struken | info:guld | Skylten vid vägen är uppgraderad. |
| 0:18 | struken | notis:🌇 Klockan är 21. Ali slår igen luckan.  | 🌇 Klockan är 21. Ali slår igen luckan. Dagens jobb är klart – gå in i skjulet och sov i sängen. |
| 0:18 | sak | notis:Designvas i röd PETG · +50 % | Designvas i röd PETG · +50 % |
| 0:18 | notis |  | Designvas i röd PETG · +50 % |
| 0:21 | klar | notis:Designvas i röd PETG · +50 % | Designvas i röd PETG · +50 % |
| 0:23 | struken | notis:🔥 Varmt och skönt i skjulet trots kylan | 🔥 Varmt och skönt i skjulet trots kylan. |
| 0:34 | sak | du | Dag 10 är slut. I natt frös jag. Tolv dagar kvar. |
| 0:34 | lapp | 📔 Dagbok | Dag 10 är slut. I natt frös jag. Tolv dagar kvar. |
| 0:34 | kvallsrad | du | I natt frös jag. Tolv dagar kvar. |
| 0:34 | tanke | du | Byggnadsnämnden. Igentejpat. Mycket tejp. |
| 0:34 | väntar | du | Byggnadsnämnden. Igentejpat. Mycket tejp. |
| 0:34 | klar | du | Dag 10 är slut. I natt frös jag. Tolv dagar kvar. |
| 0:40 | röst | ali | Pension? Glöm det. Jag har en kanal nu. Fyrtiotvå följare. Fyrtiotvå, habibi! · STORY |
| 0:40 | butiksbubbla | ali | Pension? Glöm det. Jag har en kanal nu. Fyrtiotvå följare. Fyrtiotvå, habibi! |
| 0:42 | skratt | du | Alis dyr-pling |
| 0:42 | toast | guld | 3D-modell köpt – printa kolfiberkvarnen på skrivaren |
| 0:42 | händelse | kopt | sak=kolfkvarn |
| 0:44 | struken | ali | Ali här. Satt uppe med AI:n hela natten. Ritningen till Kolfiberkvarnen är klar. Kom innan nio, då stänger jag. |
| 0:46 | struken | värld:HMPF. RÖD. | HMPF. RÖD. |
| 0:54 | sak | du | Byggnadsnämnden. Igentejpat. Mycket tejp. |
| 0:54 | notis | tanke | 💭 Byggnadsnämnden. Igentejpat. Mycket tejp. |
| 0:54 | röst | du | Byggnadsnämnden. Igentejpat. Mycket tejp. · REAKTION |
| 0:56 | skratt | du | kvarnen rapar |
| 0:58 | klar | du | Byggnadsnämnden. Igentejpat. Mycket tejp. |
| 1:00 | toast | guld | 🧵 |
| 1:06 | paket |  | sms |
| 1:06 | väntar | mamma | Jag har skickat stickade raggsockor (för små) med Rolf. Den ligger i postlådan. |
| 1:08 | sak | mamma | Jag har skickat stickade raggsockor (för små) med Rolf. Den ligger i postlådan. |
| 1:08 | sms | mamma | Jag har skickat stickade raggsockor (för små) med Rolf. Den ligger i postlådan. |
| 1:08 | sms-bubbla | mamma | Jag har skickat stickade raggsockor (för små) med Rolf. Den ligger i postlådan. |
| 1:08 | röst | mamma | Jag har skickat stickade raggsockor (för små) med Rolf. Den ligger i postlådan. · STORY |
| 1:08 | skratt | du | kvarnen rapar |
| 1:10 | skratt | du | däcket rullar iväg |
| 1:11 | toast | guld | 🧵 |
| 1:15 | händelse | printStart | sak=byggsats:kolfkvarn |
| 1:15 | klar | mamma | Jag har skickat stickade raggsockor (för små) med Rolf. Den ligger i postlådan. |
| 1:17 | skratt | du | falsk tuta |
| 1:17 | väntar | värld:TUUT! Grann skylt! | TUUT! Grann skylt! |
| 1:17 | toast | bra | Del 1 av 4 klar |
| 1:18 | väntar | bror | Pappa har en spellista på Youtube som heter "Sopbilar". 34 videor. Han säger att en Scania V8 är "ren musik". |
| 1:20 | toast | bra | Del 2 av 4 klar |
| 1:22 | toast | bra | Del 3 av 4 klar |
| 1:23 | sak | värld:TUUT! Grann skylt! | TUUT! Grann skylt! |
| 1:23 | bubbla |  | TUUT! Grann skylt! |
| 1:23 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 1:26 | klar | värld:TUUT! Grann skylt! | TUUT! Grann skylt! |
| 1:29 | skratt | du | kvarnen rapar |
| 1:32 | händelse | printKlar | sak=byggsats:kolfkvarn n=1 |
| 1:32 | toast | guld | ✅ |
| 1:37 | händelse | tagitUrPrint | sak=byggsats:kolfkvarn n=1 |
| 1:40 | händelse | placerat | sak=kolfkvarn |
| 1:40 | händelse | malKlart | id=kolfkvarn del=Dag 11 – Kolfiberlinjen nasta=kolfband |
| 1:40 | väntar | du | Kajakerna är för stora att bära. Ett band från tippen. |
| 1:40 | målruta |  | Bygg rullbandet från tippen |
| 1:40 | MÅL |  | Bygg rullbandet från tippen |
| 1:41 | sak | du | Kajakerna är för stora att bära. Ett band från tippen. |
| 1:41 | pil |  | Bygg rullbandet från tippen |
| 1:41 | notis | tanke | 💭 Kajakerna är för stora att bära. Ett band från tippen. |
| 1:41 | röst | du | Kajakerna är för stora att bära. Ett band från tippen. · MÅL |
| 1:42 | nick |  | nick:87 |
| 1:44 | kvittens-bock |  | ✓ Bygg kolfiberkvarnen i linje 3 |
| 1:46 | väntar | du | Hmm… flaggan är uppe på Rolfs brevlåda vid grinden. Har det kommit ett brev? |
| 1:46 | klar | du | Kajakerna är för stora att bära. Ett band från tippen. |
| 1:51 | väntar | rolf | ÖJ. Ja va int mä mej själv på konditoriet. Förlåt att ja prata så mycke. Bakom husvagnen fanns Birgittas trädgård. Nu ä dä bara nässlor. Ja har int rört den på sju år. Ja kan int. Men om nån annan började … Ja vet int. Du ä ju bra på skräp. MVH ROLF |
| 1:51 | sak | rolf | ÖJ. Ja va int mä mej själv på konditoriet. Förlåt att ja prata så mycke. Bakom husvagnen fanns Birgittas trädgård. Nu ä dä bara nässlor. Ja har int rört den på sju år. Ja kan int. Men om nån annan började … Ja vet int. Du ä ju bra på skräp. MVH ROLF |
| 1:51 | lapp | Brev från Rolf | ÖJ. Ja va int mä mej själv på konditoriet. Förlåt att ja prata så mycke. Bakom husvagnen fanns Birgittas trädgård. Nu ä dä bara nässlor. Ja har int rört den på sju år. Ja kan int. Men om nån annan började … Ja vet int. Du ä ju bra på skräp. MVH ROLF |
| 1:51 | röst | rolf | ÖJ. Ja va int mä mej själv på konditoriet. Förlåt att ja prata så mycke. Bakom husvagnen fanns Birgittas trädgård. Nu ä dä bara nässlor. Ja har int rört den på sju år. Ja kan int. Men om nån annan började … Ja vet int. Du ä ju bra på skräp. MVH ROLF · STORY |
| 1:56 | väntar | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har TAPETER. Gunnar, du hör väl? |
| 1:56 | radio | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har TAPETER. Gunnar, du hör väl? |
| 1:56 | skratt | du | Radio-Kjelle |
| 1:59 | skratt | du | Alis dyr-pling |
| 1:59 | toast | guld | 3D-modell köpt – printa rött rullband från tippen på skrivaren |
| 1:59 | händelse | kopt | sak=kolfband |
| 2:11 | klar | rolf | ÖJ. Ja va int mä mej själv på konditoriet. Förlåt att ja prata så mycke. Bakom husvagnen fanns Birgittas trädgård. Nu ä dä bara nässlor. Ja har int rört den på sju år. Ja kan int. Men om nån annan började … Ja vet int. Du ä ju bra på skräp. MVH ROLF |
| 2:11 | händelse | brevLast | id=tr_brev |
| 2:12 | skratt | du | kvarnen rapar |
| 2:13 | toast | guld | 🧵 |
| 2:13 | struken | du | Hmm… flaggan är uppe på Rolfs brevlåda vid grinden. Har det kommit ett brev? |
| 2:13 | struken | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har TAPETER. Gunnar, du hör väl? |
| 2:17 | toast | guld | 🧵 |
| 2:22 | händelse | printStart | sak=byggsats:kolfband |
| 2:24 | toast | bra | Del 1 av 4 klar |
| 2:26 | toast | bra | Del 2 av 4 klar |
| 2:28 | toast | bra | Del 3 av 4 klar |
| 2:31 | händelse | printKlar | sak=byggsats:kolfband n=1 |
| 2:31 | toast | guld | ✅ |
| 2:32 | händelse | tagitUrPrint | sak=byggsats:kolfband n=1 |
| 2:33 | händelse | placerat | sak=kolfband |
| 2:33 | väntar | info:guld | Rullbandet går – det hämtar kajaker och kanoter från tippen |
| 2:33 | sak | info:guld | Rullbandet går – det hämtar kajaker och kanoter från tippen |
| 2:33 | kvitto-visas | info:guld | Rullbandet går – det hämtar kajaker och kanoter från tippen |
| 2:33 | toast | guld | Rullbandet går – det hämtar kajaker och kanoter från tippen |
| 2:33 | händelse | malKlart | id=kolfband del=Dag 11 – Kolfiberlinjen nasta=kajak3 |
| 2:33 | väntar | du | Bandet går. Nu ska kajakerna upp på det. |
| 2:33 | MÅL |  | Mata in kajaker med bandet · 0/3 |
| 2:35 | klar | info:guld | Rullbandet går – det hämtar kajaker och kanoter från tippen |
| 2:35 | målruta |  | Mata in kajaker med bandet · 0/3 |
| 2:37 | kvittens-bock |  | ✓ Bygg rullbandet från tippen |
| 2:37 | sak | du | Bandet går. Nu ska kajakerna upp på det. |
| 2:37 | pil |  | Mata in kajaker med bandet · 0/3 |
| 2:37 | notis | tanke | 💭 Bandet går. Nu ska kajakerna upp på det. |
| 2:37 | röst | du | Bandet går. Nu ska kajakerna upp på det. · MÅL |
| 2:41 | klar | du | Bandet går. Nu ska kajakerna upp på det. |
| 2:47 | tanke | du | Den åker själv. Jag står bara och tittar. Det här är framtiden. |
| 2:47 | väntar | du | Den åker själv. Jag står bara och tittar. Det här är framtiden. |
| 2:50 | sak | du | Den åker själv. Jag står bara och tittar. Det här är framtiden. |
| 2:50 | notis | tanke | 💭 Den åker själv. Jag står bara och tittar. Det här är framtiden. |
| 2:50 | röst | du | Den åker själv. Jag står bara och tittar. Det här är framtiden. · STORY |
| 2:54 | händelse | printStart | sak=kruka |
| 2:55 | klar | du | Den åker själv. Jag står bara och tittar. Det här är framtiden. |
| 2:56 | toast | guld | ✅ |
| 2:56 | händelse | printKlar | sak=kruka n=53 |
| 2:56 | händelse | tagitUrPrint | sak=kruka n=1 |
| 2:58 | händelse | printStart | sak=pall |
| 3:02 | toast | guld | ✅ |
| 3:02 | händelse | printKlar | sak=pall n=25 |
| 3:04 | väntar | värld:Mjau. | Mjau. |
| 3:07 | toast | skak | handen skakar: fullt |
| 3:12 | väntar | värld:TUUT! Hej grannen! | TUUT! Hej grannen! |
| 3:14 | sak | värld:Mjau. | Mjau. |
| 3:14 | bubbla |  | Mjau. |
| 3:15 | skratt | du | kvarnen spottar |
| 3:16 | händelse | malKlart | id=kajak3 del=Dag 11 – Kolfiberlinjen nasta=kolfrulle |
| 3:16 | händelse | malKlart | id=kolfrulle del=Dag 11 – Kolfiberlinjen nasta=sov11 |
| 3:16 | paket |  | lapp |
| 3:16 | väntar | du | Dag 11 är slut. Maskinerna står och väntar på mig. I morgon. |
| 3:16 | MÅL |  | Klart för idag – sov när du vill |
| 3:16 | nej | du | Ta ut pall |
| 3:16 | tanke | du | Fickorna är fulla. Jag får lägga något i ryggsäcken först. |
| 3:16 | väntar | du | Fickorna är fulla. Jag får lägga något i ryggsäcken först. |
| 3:16 | toast | fickskylt | Fulla fickor |
| 3:16 | fullaFickor | du | pall |
| 3:16 | händelse | tagitUrPrint | sak=pall n=1 |
| 3:16 | klar | värld:Mjau. | Mjau. |
| 3:18 | sak | du | Fickorna är fulla. Jag får lägga något i ryggsäcken först. |
| 3:18 | notis | tanke | 💭 Fickorna är fulla. Jag får lägga något i ryggsäcken först. |
| 3:18 | röst | du | Fickorna är fulla. Jag får lägga något i ryggsäcken först. · REAKTION |
| 3:19 | målruta |  | Klart för idag – sov när du vill |
| 3:20 | kvittens-bock |  | ✓ Mata in kajaker med bandet · 3/3 |
| 3:20 | kvittens-bock |  | ✓ Vänta på den första svartgrå rullen |
| 3:23 | väntar | notis:🌇 Klockan är 21. Ali slår igen luckan.  | 🌇 Klockan är 21. Ali slår igen luckan. Dagens jobb är klart – gå in i skjulet och sov i sängen. |
| 3:23 | klar | du | Fickorna är fulla. Jag får lägga något i ryggsäcken först. |
| 3:29 | sak | du | (nytt mål i rutan) |
| 3:29 | pil |  | Klart för idag – sov när du vill |
| 3:29 | klar | du | (nytt mål i rutan) |
| 3:30 | webb | du | packade 1 kruka |
| 3:38 | sak | värld:TUUT! Hej grannen! | TUUT! Hej grannen! |
| 3:38 | bubbla |  | TUUT! Hej grannen! |
| 3:38 | webb | du | packade 1 pall |
| 3:41 | klar | värld:TUUT! Hej grannen! | TUUT! Hej grannen! |
| 3:47 | sak | notis:🌇 Klockan är 21. Ali slår igen luckan.  | 🌇 Klockan är 21. Ali slår igen luckan. Dagens jobb är klart – gå in i skjulet och sov i sängen. |
| 3:47 | notis | guld | 🌇 Klockan är 21. Ali slår igen luckan. Dagens jobb är klart – gå in i skjulet och sov i sängen. |
| 3:49 | klar | notis:🌇 Klockan är 21. Ali slår igen luckan.  | 🌇 Klockan är 21. Ali slår igen luckan. Dagens jobb är klart – gå in i skjulet och sov i sängen. |
| 3:50 | upplåst | mala | turbomotor |
| 3:50 | brott | UPPLÅST | turbomotor (mala 111 av 10) |
| 3:50 | händelse | upplast | id=turbomotor flask=mala |
| 3:50 | paket |  | tanke → sms |
| 3:50 | tanke | du | Kvarnen hinner inte med. Den behöver något… större. |
| 3:50 | väntar | du | Kvarnen hinner inte med. Den behöver något… större. |
| 3:50 | väntar | ali | Ali här. 🔥 TURBOMOTOR. Jag skrev ”turbo, röda ränder, snabbare än min pappa” till AI:n. Den förstod. Ingen annan förstår. Röda ränder. För farten. Det är vetenskap. |
| 3:53 | väntar | info:bra | 📦 Paketet till Någon som bara skrev "hej" ligger i postlådan – Rolf tar det till posten |
| 3:53 | sak | info:bra | 📦 Paketet till Någon som bara skrev "hej" ligger i postlådan – Rolf tar det till posten |
| 3:53 | kvitto-visas | info:bra | 📦 Paketet till Någon som bara skrev "hej" ligger i postlådan – Rolf tar det till posten |
| 3:53 | toast | bra | 📦 Paketet till Någon som bara skrev "hej" ligger i postlådan – Rolf tar det till posten |
| 3:53 | väntar | info:bra | 📦 Paketet till En fotbollsklubb i Borås ligger i postlådan – Rolf tar det till posten |
| 3:54 | väntar | bror | Pappa gick för att tjacka mjölk och kom hem med en motorsåg. "Den var på rea." Vi har inga träd. |
| 3:55 | klar | info:bra | 📦 Paketet till Någon som bara skrev "hej" ligger i postlådan – Rolf tar det till posten |
| 3:55 | sak | info:bra | 📦 Paketet till En fotbollsklubb i Borås ligger i postlådan – Rolf tar det till posten |
| 3:55 | kvitto-visas | info:bra | 📦 Paketet till En fotbollsklubb i Borås ligger i postlådan – Rolf tar det till posten |
| 3:55 | toast | bra | 📦 Paketet till En fotbollsklubb i Borås ligger i postlådan – Rolf tar det till posten |
| 3:56 | ljud | kajsa | Mjau |
| 3:57 | klar | info:bra | 📦 Paketet till En fotbollsklubb i Borås ligger i postlådan – Rolf tar det till posten |
| 4:00 | skratt | du | kvarnen rapar |
| 4:03 | toast | guld | 🧵 |
| 4:06 | händelse | printStart | sak=n2_vas |
| 4:09 | toast | guld | ✅ |
| 4:09 | händelse | printKlar | sak=n2_vas n=29 |
| 4:09 | sak | du | Dag 11 är slut. Maskinerna står och väntar på mig. I morgon. |
| 4:09 | lapp | 📔 Dagbok | Dag 11 är slut. Maskinerna står och väntar på mig. I morgon. |
| 4:09 | kvallsrad | du | Maskinerna står och väntar på mig. I morgon. |
| 4:10 | klar | du | Dag 11 är slut. Maskinerna står och väntar på mig. I morgon. |
| 4:10 | händelse | tagitUrPrint | sak=n2_vas n=1 |
| 4:10 | toast | guld | 🧵 |
| 4:12 | väntar | info:fel | Göran snodde designvas i röd petg. |
| 4:12 | sak | info:fel | Göran snodde designvas i röd petg. |
| 4:12 | kvitto-visas | info:fel | Göran snodde designvas i röd petg. |
| 4:12 | toast | fel | Göran snodde designvas i röd petg. |
| 4:14 | klar | info:fel | Göran snodde designvas i röd petg. |
| 4:24 | sak | du | Kvarnen hinner inte med. Den behöver något… större. |
| 4:24 | notis | tanke | 💭 Kvarnen hinner inte med. Den behöver något… större. |
| 4:24 | röst | du | Kvarnen hinner inte med. Den behöver något… större. · STORY |
| 4:27 | händelse | printStart | sak=n2_vas |
| 4:28 | klar | du | Kvarnen hinner inte med. Den behöver något… större. |
| 4:30 | toast | guld | ✅ |
| 4:30 | händelse | printKlar | sak=n2_vas n=30 |
| 4:31 | händelse | tagitUrPrint | sak=n2_vas n=1 |
| 4:36 | sak | ali | Ali här. 🔥 TURBOMOTOR. Jag skrev ”turbo, röda ränder, snabbare än min pappa” till AI:n. Den förstod. Ingen annan förstår. Röda ränder. För farten. Det är vetenskap. |
| 4:36 | sms | ali | Ali här. 🔥 TURBOMOTOR. Jag skrev ”turbo, röda ränder, snabbare än min pappa” till AI:n. Den förstod. Ingen annan förstår. Röda ränder. För farten. Det är vetenskap. |
| 4:36 | sms-bubbla | ali | Ali här. 🔥 TURBOMOTOR. Jag skrev ”turbo, röda ränder, snabbare än min pappa” till AI:n. Den förstod. Ingen annan förstår. Röda ränder. För farten. Det är vetenskap. |
| 4:36 | röst | ali | Ali här. 🔥 TURBOMOTOR. Jag skrev ”turbo, röda ränder, snabbare än min pappa” till AI:n. Den förstod. Ingen annan förstår. Röda ränder. För farten. Det är vetenskap. · STORY |
| 4:39 | aliSalt | ali | 1185 |
| 4:45 | skratt | du | falsk tuta |
| 4:50 | klar | ali | Ali här. 🔥 TURBOMOTOR. Jag skrev ”turbo, röda ränder, snabbare än min pappa” till AI:n. Den förstod. Ingen annan förstår. Röda ränder. För farten. Det är vetenskap. |
| 4:56 | struken | bror | Pappa gick för att tjacka mjölk och kom hem med en motorsåg. "Den var på rea." Vi har inga träd. |
| 4:58 | webbBetalt | du | 367 |
| 4:58 | nattkort | du | 🌙 Dag 11 är slut. God natt. zzz… Maskinerna står och väntar på mig. I morgon. DAGENS PRINTAR Designvas i röd PETG × 2 Blomkruka × 1 Pall × 1 Totalt 4 printar � |

<details><summary>Botens handlingar dag 11</summary>

- 0:00 — dag 11 börjar — (20058 kr)
- 0:12 popup: "FORTSÄTT" (20058 kr)
- 0:28 gå till Rolfs postlåda (29 m) (20058 kr)
- 0:34 panel: "Rolfs postlåda
Det här låg i l" (23058 kr)
- 0:40 gå till Ali (31 m) (23058 kr)
- 0:40 öppnar Alis butik – köpa kolfiberkvarnen (23058 kr)
- 0:43 köper kolfkvarn för 6000 kr (17058 kr)
- 0:52 gå till en tunna (40 m) (17058 kr)
- 0:56 gå till PETG-kvarnen (13 m) (17058 kr)
- 0:56 tömmer det tunga i PETG-kvarnen (17058 kr)
- 1:05 gå till en tunna (11 m) (17058 kr)
- 1:08 gå till PETG-kvarnen (11 m) (17058 kr)
- 1:08 tömmer det tunga i PETG-kvarnen (17058 kr)
- 1:13 gå till skrivaren (4 m) (17058 kr)
- 1:15 printar Kolfiberkvarnen (4 delar) (17058 kr)
- 1:26 gå till en tunna (12 m) (17058 kr)
- 1:29 gå till PETG-kvarnen (8 m) (17058 kr)
- 1:29 tömmer det tunga i PETG-kvarnen (17058 kr)
- 1:37 gå till skrivaren (4 m) (17058 kr)
- 1:37 tar ut 1 st ur skrivaren (17058 kr)
- 1:39 gå till platsen för kolfiberkvarnen (5 m) (17058 kr)
- 1:40 ställer ut kolfiberkvarnen (17058 kr)
- 1:51 gå till Rolfs postlåda (13 m) (17058 kr)
- 1:58 gå till Ali (32 m) (17058 kr)
- 1:58 öppnar Alis butik – köpa rött rullband från tippen (17058 kr)
- 2:00 köper kolfband för 10500 kr (6558 kr)
- 2:09 gå till en tunna (38 m) (6558 kr)
- 2:12 gå till PETG-kvarnen (11 m) (6558 kr)
- 2:12 tömmer det tunga i PETG-kvarnen (6558 kr)
- 2:20 gå till skrivaren (4 m) (6558 kr)
- 2:22 printar Rött rullband från tippen (4 delar) (6558 kr)
- 2:32 tar ut 1 st ur skrivaren (6558 kr)
- 2:33 gå till kolfiberkvarnen (5 m) (6558 kr)
- 2:46 gå till Rolfs postlåda (13 m) (6558 kr)
- 2:50 panel: "Rolfs postlåda
Det här låg i l" (6558 kr)
- 2:53 gå till skrivaren (10 m) (6558 kr)
- 2:54 printar Blomkruka (6558 kr)
- 2:57 tar ut 1 st ur skrivaren (6558 kr)
- 2:58 printar Pall (6558 kr)
- 3:14 gå till kvarnen (28 m) (6558 kr)
- 3:16 gå till skrivaren (7 m) (6558 kr)
- 3:16 tar ut 1 st ur skrivaren (6558 kr)
- 3:16 fulla fickor – lägger hammare i kistan (6558 kr)
- 3:21 gå till datorn (19 m) (6558 kr)
- 3:29 panel: "Webbshopen · Soptippsvägen 1
B" (6558 kr)
- 3:38 panel: "Webbshopen · Soptippsvägen 1
B" (6558 kr)
- 3:47 panel: "Webbshopen · Soptippsvägen 1
B" (6558 kr)
- 3:53 gå till Rolfs postlåda (paket) (29 m) (6558 kr)
- 3:54 webbshop: 2 paket i postlådan (6558 kr)
- 3:54 tjänar pengar till bandet hämtar kajaker: 6558/6708 kr → printar designvas i röd petg (1185 kr) (6558 kr)
- 3:56 gå till en tunna (10 m) (6558 kr)
- 4:00 gå till PETG-kvarnen (13 m) (6558 kr)
- 4:00 tömmer det tunga i PETG-kvarnen (6558 kr)
- 4:05 gå till skrivaren (4 m) (6558 kr)
- 4:06 printar Designvas i röd PETG (6558 kr)
- 4:11 tar ut 1 st ur skrivaren (6558 kr)
- 4:17 gå till Ali (31 m) (6558 kr)
- 4:17 öppnar Alis butik – sälja (6558 kr)
- 4:19 tjänar pengar till bandet hämtar kajaker: 6558/6708 kr → printar designvas i röd petg (1185 kr) (6558 kr)
- 4:25 gå till skrivaren (29 m) (6558 kr)
- 4:27 printar Designvas i röd PETG (6558 kr)
- 4:31 tar ut 1 st ur skrivaren (6558 kr)
- 4:37 gå till Ali (29 m) (6558 kr)
- 4:37 öppnar Alis butik – sälja (6558 kr)
- 4:39 säljer hos Ali: +1185 kr (7743 kr)
- 4:56 gå till sängen (20 m) (7743 kr)

</details>

## Dag 12

| Tid | Källa | Vem | Text |
|---|---|---|---|
| 4:58 | vara | ali | n2_hjalm |
| 4:58 | händelse | malKlart | id=sov11 del=Dag 11 – Kolfiberlinjen nasta=kolfskrivare |
| 4:58 | MÅL |  | Printa och sälj |

<details><summary>Botens handlingar dag 12</summary>

- 0:00 — dag 12 börjar — (8110 kr)

</details>
