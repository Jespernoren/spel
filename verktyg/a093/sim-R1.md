# Simulering kapitel 1 – körning 1

*Gjord 2026-11-21 07:50 med `verktyg/sim-kapitel1.mjs` + `verktyg/sim-bot.js` (punkt AX). Boten går 4,5 m/s, läser 15 tecken/s, trampar, vevar, plockar, printar, köper och säljer via spelets egna funktioner. Tiderna är speltid.*

## Sammanfattning

| Dag | Minuter | Väntan | Prints (totalt) | Kr vid sömn | Bär | Trivsel |
|---|---|---|---|---|---|---|
| 1 | 11.3 | 2 % | 22 | 210 | 6 | 23 |
| 2 | 11.9 | 1 % | 40 | 1692 | 10 | 38 |
| 3 | 13.1 | 2 % | 59 | 2520 | 16 | 78 |
| 4 | 11.7 | 1 % | 77 | 3896 | 16 | 96 |
| 5 | 16.4 | 3 % | 98 | 6987 | 16 | 136 |
| 6 | 8.8 | 2 % | 109 | 7919 | 16 | 148 |
| 7 | 0.0 | 0 % | 109 | 8053 | 16 | 128 |

## Flaskhalskartan (EE)

| Dag | bara | mala | trampa | strom | skrivare | inkomst | Upplåst |
|---|---|---|---|---|---|---|---|
| 1 | 8 | 10 | 22 | 11 | 143 | 20 | grip (bara, 7:44, reserv), kruka (inkomst, 8:56) |
| 2 | 2 | 9 | 12 | 13 | 327 | 0 | kvarnmotor (mala, 3:40, reserv), rullstall (skrivare, 5:40), trim_skrivare (skrivare, 7:36), vindsnurra (trampa, 9:49) |
| 3 | 1 | 39 | 0 | 15 | 485 | 0 | cykelbatteri (strom, 7:20, reserv), ryggkorg (bara, 8:59), skrivare2 (skrivare, 10:45) |
| 4 | 1 | 25 | 0 | 16 | 399 | 0 | trim_skrivare2 (skrivare, 3:02), matarband (bara, 7:01, reserv), vindsnurra2 (strom, 9:15) |
| 5 | 7 | 29 | 0 | 0 | 480 | 0 | trim_skrivare3 (skrivare, 3:35), vindsnurra3 (strom, 12:43, reserv) |
| 6 | 2 | 8 | 0 | 0 | 201 | 0 | sol (strom, 6:56, reserv) |
| 7 | 0 | 0 | 0 | 0 | 0 | 0 |  |

TIDIG: 0 · FAST: 0 · upplåst av reserven (målet väntade 3 min): 6

**SKRATT:** 67 roliga ögonblick på 73 min (9.1 per 10 min, mål minst 5)

**Köp:**

- dag 1 2:45 – gammalkvarn (30 kr)
- dag 1 8:12 – grip (50 kr)
- dag 1 9:04 – kruka (40 kr)
- dag 1 10:16 – sang (60 kr)
- dag 2 4:14 – kvarnmotor (50 kr)
- dag 2 10:06 – vindsnurra (133 kr)
- dag 2 10:48 – dorr (120 kr)
- dag 3 7:49 – cykelbatteri (30 kr)
- dag 3 9:25 – ryggkorg (120 kr)
- dag 3 9:57 – bord (120 kr)
- dag 3 10:59 – skrivare2 (500 kr)
- dag 3 12:21 – tak (250 kr)
- dag 4 7:16 – matarband (120 kr)
- dag 4 8:06 – pall (80 kr)
- dag 4 9:31 – vindsnurra (133 kr)
- dag 4 10:56 – vaggar (130 kr)
- dag 5 5:30 – webbdator (300 kr)
- dag 5 6:30 – fonster (90 kr)
- dag 5 7:18 – golv (140 kr)
- dag 5 8:27 – taklampa (90 kr)
- dag 5 13:08 – vindsnurra (133 kr)
- dag 6 2:03 – petgkvarn (1200 kr)
- dag 6 7:30 – sol (400 kr)
- dag 6 8:11 – fagelskramma (40 kr)

## Storykedjan (kvittens → varför → nytt mål)

| Dag | Tid | Id | Kvittens | Varför | Nytt mål | Tid till målet |
|---|---|---|---|---|---|---|
| 1 | 0:31 | lastat | Tung. Den har storebror aldrig burit så långt. |  | Skrivaren ställer jag där borta, mot skräpberget. Min första | 4.4 s |
| 1 | 1:47 | printStart | Den piper. Den GÖR något. |  | En nyckelring till, så länge storebrors rulle räcker. | 6.6 s |
| 1 | 1:52 | printKlar | Klar! Ta ut den innan den ändrar sig. |  | En nyckelring till, så länge storebrors rulle räcker. | 3.1 s |
| 1 | 9:28 | krukaD1 | En kruka. Mamma skulle bli så stolt. Hon får inte veta. |  | Jag kan inte sova på betongen en natt till. Ali har en säng. | 26.8 s |
| 2 | 10:28 | vindsnurra | Den snurrar! Långsamt. Men den snurrar. | Om det regnar i natt drunknar jag. Ett tak. | Det drar från dörrhålet. En dörr kan jag printa. | 4.3 s |
| 4 | 7:44 | sophallare | Nu kan jag tömma hela kärran på en gång. | Krukor är bra. Pallar är bättre. | Jag behöver något att sitta på. En pall. Lagom ambitiöst. | 4.3 s |

## Hur länge nya mål väntade (från att förra målet blev klart till att det nya syntes i målrutan)

Snitt 4.4 s · max 23.6 s · över 4 s: 16 · över 8 s: 12 av 64

## Flaggor (63)

- **UPPREPNING** dag 4 8:06: Bra val. Folk köper sånt. Jag vet inte varför. (CT)
- **LUGN** dag 2 0:15: 0.0 s efter BÖRJA DAGEN: [lapp] "Första natten i en riktig säng. Jag printade den själv."
- **LUGN** dag 2 0:15: 0.0 s efter BÖRJA DAGEN: [meddelande] "Första natten i en riktig säng. Jag printade den själv."
- **LUGN** dag 2 0:15: 0.2 s efter BÖRJA DAGEN: [röst] "Första natten i en riktig säng. Jag printade den själv. · ST"
- **KROCK** dag 1 10:56: 3.2 s mellan [notis] "Storebrors skrivare: Slut på tråd – mal mer så fortsätter de" och [lapp] "Dag 1. Nitton år. Inget mer tjat. En skrivare, ett skjul och"
- **KROCK** dag 5 15:25: 1.4 s mellan [bubbla] "Ja kommer hit varje kväll. Förr va vi två på bänken." och [bubbla] "TUUT! Tjena!"
- **KEDJA** dag 1 0:31: lastat: nytt mål 4.4 s efter kedjan (max 2 s)
- **KEDJA** dag 1 1:47: printStart: nytt mål 6.6 s efter kedjan (max 2 s)
- **KEDJA** dag 1 9:28: krukaD1: inget nytt mål lästes upp efter kedjan
- **KEDJA** dag 2 10:28: vindsnurra: nytt mål 4.3 s efter kedjan (max 2 s)
- **KEDJA** dag 4 7:44: sophallare: nytt mål 4.3 s efter kedjan (max 2 s)
- **SEN** dag 1 5:15: 76.1 s efter händelsen: kjelle: "God morgon, det är Kjelle på Radio Tippen! Det har flyttat in någon i "
- **SEN** dag 1 9:25: 28.8 s efter händelsen: ali: "Ali här. Jag såg Skräpgrip på avstånd. Ett streck blev lite snett. Mit"
- **SEN** dag 1 10:53: 19.7 s efter händelsen: notis:Storebrors skrivare: Slut på tråd – mal : "Storebrors skrivare: Slut på tråd – mal mer så fortsätter den"
- **SEN** dag 3 1:21: 19.9 s efter händelsen: du: "Kajsa. Ut ur skrivaren. Nu."
- **SEN** dag 3 1:34: 29.8 s efter händelsen: du: "Jaha. En kalsong. Använd."
- **SEN** dag 3 2:42: 16.8 s efter händelsen: kjelle: "Radio Tippen, Kjelle här. Skjulet vid tippen har fått en DÖRR. Och vin"
- **SEN** dag 3 6:07: 55.7 s efter händelsen: du: "Jaha, Rolf har hämtat flasköppnare med magnet."
- **SEN** dag 3 10:08: 18.9 s efter händelsen: ali: "Ali här. Du printade Ryggkorg från min ritning. Och det FUNKAR? Jag ha"
- **SEN** dag 3 12:45: 59.3 s efter händelsen: notis:Storebrors skrivare: Tornet är tomt – ma: "Storebrors skrivare: Tornet är tomt – mal mer så fortsätter den"
- **SEN** dag 4 6:01: 56.9 s efter händelsen: du: "Jaha, Rolf har hämtat grillspade."
- **SEN** dag 4 6:35: 18.5 s efter händelsen: du: "En toffla. Bara en."
- **SEN** dag 4 6:47: 26.8 s efter händelsen: du: "Den blev… spagetti. Ali kallar det modern konst."
- **SEN** dag 5 13:37: 939.2 s efter händelsen: info:guld: "🌬️ Vindsnurran ligger i handen – klicka på skjulet för att sätta den "
- **SEN** dag 6 4:45: 79.8 s efter händelsen: notis:PETG-kvarnen: den första rullen röd PETG: "PETG-kvarnen: den första rullen röd PETG är klar"
- **SEN** dag 6 8:22: 30.0 s efter händelsen: ali: "Ali här. Jag såg Solpanel på avstånd. Ett streck blev lite snett. Mitt"
- **SAMTIDIGT** dag 1 0:28: "Skrivaren står kvar på cykeln. Den ska a" och "(nytt mål i rutan)"
- **PAUS** dag 1 0:34: 0.0 s paus före "🖨️ Storebrors skrivare. Den ska stå där borta, mo"
- **SAMTIDIGT** dag 1 1:45: "Okej. Välj nåt litet att printa." och "Nu ska skrivaren få jobba. Jag väljer nå"
- **PAUS** dag 1 1:50: 0.0 s paus före "Den piper. Den GÖR något."
- **PAUS** dag 1 1:53: 0.6 s paus före "Klar! Ta ut den innan den ändrar sig."
- **PAUS** dag 1 3:23: 0.0 s paus före "Kvarnen funkar. Soptippen är en gruva."
- **PAUS** dag 1 9:32: 0.0 s paus före "Ali gillar krukor. Han sa det själv."
- **PAUS** dag 1 9:35: 0.0 s paus före "En kruka. Mamma skulle bli så stolt. Hon får inte "
- **PAUS** dag 2 1:19: 0.0 s paus före "Sopbilen tippade en ny last. Allt det skräpet – oc"
- **PAUS** dag 2 5:04: 0.0 s paus före "Gården är STÄDAD. Av mig. Frivilligt. Mamma skulle"
- **PAUS** dag 2 10:31: 0.0 s paus före "🌬️ Vindsnurran sitter på taket – den trampar cyke"
- **PAUS** dag 2 11:38: 0.0 s paus före "Dag 2 är slut. Nu vet Ali att jag bor HÄR. Taket l"
- **PAUS** dag 3 10:32: 0.0 s paus före "Fullt i händerna."
- **PAUS** dag 3 12:56: 0.0 s paus före "Dag 3 är slut. Nu vet Rolf att jag bor HÄR. Benen "
- **PAUS** dag 4 7:48: 0.0 s paus före "🗑️ Sophållaren står bakom kvarnen! Töm allt skräp"
- **PAUS** dag 4 9:57: 0.0 s paus före "Slut på trampandet. Nästan."
- **PAUS** dag 4 11:32: 0.0 s paus före "Dag 4 är slut. En skrivare räcker inte."
- **PAUS** dag 5 4:54: 0.0 s paus före "🧱 Skjulet är tätt!"
- **PAUS** dag 5 7:59: 0.0 s paus före "Trägolv på plats! Trivsel +8 · Ali betalar nu +0 %"
- **PAUS** dag 5 10:40: 0.0 s paus före "📦 Paketet till Lasse på bussdepån ligger i postlå"
- **PAUS** dag 5 13:48: 0.0 s paus före "Dag 5 är slut. Nu vet en mås att jag bor HÄR. Peng"
- **PAUS** dag 6 3:46: 0.0 s paus före "📦 Paketet till En pensionär i Kiruna ligger i pos"
- **PAUS** dag 6 8:30: 0.1 s paus före "Göran har ett hem nu. Bättre än jag hade för en ve"
- **PAUS** dag 6 8:35: 0.0 s paus före "(nytt mål i rutan)"
- **PAUS** dag 6 8:35: 0.0 s paus före "Dag 6 är slut. Nu vet grannen att jag bor HÄR. Han"
- **UPPREPNING** dag 4 3:13: info:bra: "🛒 4 skräp från famnen i skottkärran" (förra gången dag 4)
- **UPPREPNING** dag 4 9:55: info:guld: "🌬️ Vindsnurran sitter på taket – den trampar cykeln åt dig när det bl" (förra gången dag 2)
- **UPPREPNING** dag 5 13:37: info:guld: "🌬️ Vindsnurran ligger i handen – klicka på skjulet för att sätta den " (förra gången dag 2)
- **UPPREPNING** dag 5 13:46: info:guld: "🌬️ Vindsnurran sitter på taket – den trampar cykeln åt dig när det bl" (förra gången dag 4)
- **TYST MÅL** dag 1 4:33: ”Koppla in powerbanken” sades inte
- **SEN KVITTENS** dag 3 0:52: 2.6 s sen: ”Rolfs tipp. Hela högen.” (ED13: monterat)
- **SEN KVITTENS** dag 6 8:49: 3.2 s sen: ”Dag 6 är slut. Nu vet grannen att jag bor HÄR. Ha” (dagbok kvall6)
- **TORRT** dag 1 4:32: 264 s utan roligt ögonblick
- **TORRT** dag 5 3:34: 240 s utan roligt ögonblick
- **TEMPO** dag 5 16:26: dag 5 tog 16.4 min (mål 10–15)
- **TEMPO** dag 6 8:48: dag 6 tog 8.8 min (mål 10–15)
- **TEMPO** dag 7 0:00: dag 7 tog 0.0 min (mål 10–15)

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
| 0:15 | lapp | 📔 Dagbok | Spikade ihop en skylt av lösa bräder från tippen. Soptippsvägen 1. Det är inte mycket för världen. Men det är MITT. |
| 0:15 | meddelande | du | Spikade ihop en skylt av lösa bräder från tippen. Soptippsvägen 1. Det är inte mycket för världen. Men det är MITT. |
| 0:15 | dagbokkort | du | Spikade ihop en skylt av lösa bräder från tippen. Soptippsvägen 1. Det är inte mycket för världen. Men det är MITT. |
| 0:15 | varför | du | Skrivaren står kvar på cykeln. Den ska av. |
| 0:15 | väntar | du | Skrivaren står kvar på cykeln. Den ska av. |
| 0:15 | röst | du | Spikade ihop en skylt av lösa bräder från tippen. Soptippsvägen 1. Det är inte mycket för världen. Men det är MITT. · STORY |
| 0:26 | händelse | brevLast | id=skylt |
| 0:26 | sak | du | Skrivaren står kvar på cykeln. Den ska av. |
| 0:26 | struken | du | Skrivaren står kvar på cykeln. Den ska av. |
| 0:28 | sak | du | (nytt mål i rutan) |
| 0:28 | klar | du | (nytt mål i rutan) |
| 0:30 | struken | info:info | ⏎ Enter – hoppa över |
| 0:31 | händelse | lastatAv | sak=skrivare |
| 0:31 | paket |  | sms |
| 0:31 | väntar | mamma | Hur kunde du bara gå? Är du ok? Svara när jag ringer! |
| 0:31 | kvittens | du | Tung. Den har storebror aldrig burit så långt. |
| 0:31 | väntar | du | Tung. Den har storebror aldrig burit så långt. |
| 0:31 | väntar | info:bra | 🖨️ Storebrors skrivare. Den ska stå där borta, mot skräpberget. |
| 0:31 | sak | du | Tung. Den har storebror aldrig burit så långt. |
| 0:31 | notis | tanke | 💭 Tung. Den har storebror aldrig burit så långt. |
| 0:31 | röst | du | Tung. Den har storebror aldrig burit så långt. · STORY |
| 0:31 | händelse | malKlart | id=lasta del=Dag 1 – Kom igång nasta=stall |
| 0:31 | väntar | du | Skrivaren ställer jag där borta, mot skräpberget. Min första verkstad. |
| 0:31 | MÅL |  | Ställ upp skrivaren |
| 0:34 | målruta |  | Ställ upp skrivaren |
| 0:34 | klar | du | Tung. Den har storebror aldrig burit så långt. |
| 0:34 | sak | info:bra | 🖨️ Storebrors skrivare. Den ska stå där borta, mot skräpberget. |
| 0:34 | kvitto-visas | info:bra | 🖨️ Storebrors skrivare. Den ska stå där borta, mot skräpberget. |
| 0:34 | toast | bra | 🖨️ Storebrors skrivare. Den ska stå där borta, mot skräpberget. |
| 0:36 | hjälp | kontroll | E: Ryggsäcken och kistan |
| 0:36 | klar | info:bra | 🖨️ Storebrors skrivare. Den ska stå där borta, mot skräpberget. |
| 0:38 | sak | du | Skrivaren ställer jag där borta, mot skräpberget. Min första verkstad. |
| 0:38 | pil |  | Ställ upp skrivaren |
| 0:38 | notis | tanke | 💭 Skrivaren ställer jag där borta, mot skräpberget. Min första verkstad. |
| 0:38 | röst | du | Skrivaren ställer jag där borta, mot skräpberget. Min första verkstad. · MÅL |
| 0:39 | nick |  | nick:1 |
| 0:44 | klar | du | Skrivaren ställer jag där borta, mot skräpberget. Min första verkstad. |
| 0:47 | väntar | info:bra | 🖨️ Storebrors skrivare står på sin plats |
| 0:47 | händelse | placerat | sak=skrivareS |
| 0:47 | paket |  | tanke |
| 0:47 | tanke | du | Storebrors rulle. Den räcker inte länge. |
| 0:47 | väntar | du | Storebrors rulle. Den räcker inte länge. |
| 0:47 | duns | du | ställs ner |
| 0:47 | sak | info:bra | 🖨️ Storebrors skrivare står på sin plats |
| 0:47 | kvitto-visas | info:bra | 🖨️ Storebrors skrivare står på sin plats |
| 0:47 | toast | bra | 🖨️ Storebrors skrivare står på sin plats |
| 0:47 | händelse | malKlart | id=stall del=Dag 1 – Kom igång nasta=strom |
| 0:47 | struken | du | Storebrors rulle. Den räcker inte länge. |
| 0:47 | väntar | du | Skrivaren behöver ström. Hur fixar jag det här ute? |
| 0:47 | MÅL |  | Skrivaren behöver ström |
| 0:49 | klar | info:bra | 🖨️ Storebrors skrivare står på sin plats |
| 0:49 | målruta |  | Skrivaren behöver ström |
| 0:51 | kvittens-bock |  | ✓ Ställ upp skrivaren |
| 0:51 | sak | du | Skrivaren behöver ström. Hur fixar jag det här ute? |
| 0:51 | pil |  | Skrivaren behöver ström |
| 0:51 | notis | tanke | 💭 Skrivaren behöver ström. Hur fixar jag det här ute? |
| 0:51 | röst | du | Skrivaren behöver ström. Hur fixar jag det här ute? · MÅL |
| 0:55 | klar | du | Skrivaren behöver ström. Hur fixar jag det här ute? |
| 1:25 | paket |  | tanke |
| 1:25 | tanke | du | Cykeln… och storebrors generator? |
| 1:25 | väntar | du | Cykeln… och storebrors generator? |
| 1:25 | sak | du | Cykeln… och storebrors generator? |
| 1:25 | kvitto-visas | du | Cykeln… och storebrors generator? |
| 1:25 | notis | tanke | 💭 Cykeln… och storebrors generator? |
| 1:25 | röst | du | Cykeln… och storebrors generator? · STORY |
| 1:25 | händelse | malKlart | id=strom del=Dag 1 – Kom igång nasta=bygg |
| 1:25 | väntar | du | Om jag trampar ström med cykeln kan skrivaren gå. Cykeln där, generatorn bredvid. |
| 1:26 | MÅL |  | Ställ cykel och generator |
| 1:28 | klar | du | Cykeln… och storebrors generator? |
| 1:28 | målruta |  | Ställ cykel och generator |
| 1:29 | paket |  | tanke |
| 1:29 | tanke | du | Storebrors generator. Den gör el av trampandet. |
| 1:29 | väntar | du | Storebrors generator. Den gör el av trampandet. |
| 1:29 | händelse | placerat | sak=generator |
| 1:29 | duns | du | ställs ner |
| 1:29 | kvittens-bock |  | ✓ Skrivaren behöver ström |
| 1:31 | sak | du | Om jag trampar ström med cykeln kan skrivaren gå. Cykeln där, generatorn bredvid. |
| 1:31 | pil |  | Ställ cykel och generator |
| 1:31 | notis | tanke | 💭 Om jag trampar ström med cykeln kan skrivaren gå. Cykeln där, generatorn bredvid. |
| 1:31 | röst | du | Om jag trampar ström med cykeln kan skrivaren gå. Cykeln där, generatorn bredvid. · MÅL |
| 1:32 | ljud | utrustning | Cykeln i famnen |
| 1:32 | händelse | lyft | sak=cykel |
| 1:38 | klar | du | Om jag trampar ström med cykeln kan skrivaren gå. Cykeln där, generatorn bredvid. |
| 1:43 | händelse | placerat | sak=cykel |
| 1:43 | duns | du | ställs ner |
| 1:45 | händelse | ombyggd | sak=cykel |
| 1:45 | varför | du | Okej. Välj nåt litet att printa. |
| 1:45 | väntar | du | Okej. Välj nåt litet att printa. |
| 1:45 | sak | du | Okej. Välj nåt litet att printa. |
| 1:45 | struken | du | Okej. Välj nåt litet att printa. |
| 1:45 | händelse | malKlart | id=bygg del=Dag 1 – Kom igång nasta=valjModell |
| 1:45 | struken | du | Storebrors generator. Den gör el av trampandet. |
| 1:45 | väntar | du | Nu ska skrivaren få jobba. Jag väljer något litet först. |
| 1:45 | målruta |  | Välj en print |
| 1:45 | MÅL |  | Välj en print |
| 1:45 | sak | du | Nu ska skrivaren få jobba. Jag väljer något litet först. |
| 1:45 | pil |  | Välj en print |
| 1:45 | notis | tanke | 💭 Nu ska skrivaren få jobba. Jag väljer något litet först. |
| 1:45 | röst | du | Nu ska skrivaren få jobba. Jag väljer något litet först. · MÅL |
| 1:47 | händelse | printStart | sak=nyckelring |
| 1:47 | kvittens | du | Den piper. Den GÖR något. |
| 1:47 | väntar | du | Den piper. Den GÖR något. |
| 1:47 | tanke | du | Den stannar när jag slutar trampa. Ström som sparas hade varit nåt. |
| 1:47 | väntar | du | Den stannar när jag slutar trampa. Ström som sparas hade varit nåt. |
| 1:47 | händelse | malKlart | id=valjModell del=Dag 1 – Kom igång nasta=trampa |
| 1:47 | struken | du | Den stannar när jag slutar trampa. Ström som sparas hade varit nåt. |
| 1:47 | väntar | du | Cykeln är kraftverket. Nu får benen jobba. |
| 1:48 | MÅL |  | Trampa cykeln |
| 1:50 | klar | du | Nu ska skrivaren få jobba. Jag väljer något litet först. |
| 1:50 | sak | du | Den piper. Den GÖR något. |
| 1:50 | notis | tanke | 💭 Den piper. Den GÖR något. |
| 1:50 | röst | du | Den piper. Den GÖR något. · STORY |
| 1:50 | målruta |  | Trampa cykeln |
| 1:52 | klar | du | Den piper. Den GÖR något. |
| 1:52 | händelse | printKlar | sak=nyckelring n=1 |
| 1:52 | kvittens | du | Klar! Ta ut den innan den ändrar sig. |
| 1:52 | väntar | du | Klar! Ta ut den innan den ändrar sig. |
| 1:52 | händelse | malKlart | id=trampa del=Dag 1 – Kom igång nasta=rullSlut |
| 1:52 | väntar | du | En nyckelring till, så länge storebrors rulle räcker. |
| 1:53 | MÅL |  | En nyckelring till |
| 1:53 | struken | du | Cykeln är kraftverket. Nu får benen jobba. |
| 1:53 | sak | du | Klar! Ta ut den innan den ändrar sig. |
| 1:53 | notis | tanke | 💭 Klar! Ta ut den innan den ändrar sig. |
| 1:53 | röst | du | Klar! Ta ut den innan den ändrar sig. · STORY |
| 1:53 | målruta |  | En nyckelring till |
| 1:53 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 1:53 | paket |  | sms |
| 1:53 | väntar | bror | VA FAN?! Fick du igång den?? Jag försökte i typ ett år. Den bara pep. 😳 |
| 1:53 | skratt | bror | VA FAN?! Fick du igång den?? Jag försökt |
| 1:53 | paket |  | sms → ge |
| 1:53 | väntar | bror | Sälj den till Ali, han med affären vid tippen. Han köper gamla grejer. Han köpte min gamla mopedhjälm för 20 spänn. |
| 1:53 | väntar |  | (läget ändras) |
| 1:56 | klar | du | Klar! Ta ut den innan den ändrar sig. |
| 1:57 | sak |  | (läget ändras) |
| 1:57 | klar |  | (läget ändras) |
| 1:58 | händelse | printStart | sak=nyckelring |
| 1:59 | sak | du | En nyckelring till, så länge storebrors rulle räcker. |
| 1:59 | pil |  | En nyckelring till |
| 1:59 | notis | tanke | 💭 En nyckelring till, så länge storebrors rulle räcker. |
| 1:59 | röst | du | En nyckelring till, så länge storebrors rulle räcker. · MÅL |
| 2:03 | klar | du | En nyckelring till, så länge storebrors rulle räcker. |
| 2:09 | toast | guld | Nyckelring är klar – ta ut den |
| 2:09 | väntar | notis:Storebrors skrivare: Nyckelring är klar  | Storebrors skrivare: Nyckelring är klar – ta ut den |
| 2:09 | händelse | printKlar | sak=nyckelring n=2 |
| 2:09 | paket |  | tanke |
| 2:09 | tanke | du | Slut på storebrors rulle. Och här ligger ju plast överallt. Om jag bara kunde göra tråd av skräpet… Affären mitt emot kanske har något. |
| 2:09 | väntar | du | Slut på storebrors rulle. Och här ligger ju plast överallt. Om jag bara kunde göra tråd av skräpet… Affären mitt emot kanske har något. |
| 2:09 | händelse | malKlart | id=rullSlut del=Dag 1 – Kom igång nasta=saljTva |
| 2:09 | MÅL |  | Sälj nyckelringarna |
| 2:09 | sak | du | Slut på storebrors rulle. Och här ligger ju plast överallt. Om jag bara kunde göra tråd av skräpet… Affären mitt emot kanske har något. |
| 2:09 | kvitto-visas | du | Slut på storebrors rulle. Och här ligger ju plast överallt. Om jag bara kunde göra tråd av skräpet… Affären mitt emot kanske har något. |
| 2:09 | notis | tanke | 💭 Slut på storebrors rulle. Och här ligger ju plast överallt. Om jag bara kunde göra tråd av skräpet… Affären mitt emot kanske har något. |
| 2:09 | röst | du | Slut på storebrors rulle. Och här ligger ju plast överallt. Om jag bara kunde göra tråd av skräpet… Affären mitt emot kanske har något. · STORY |
| 2:13 | målruta |  | Sälj nyckelringarna |
| 2:13 | kvittens-bock |  | ✓ En nyckelring till |
| 2:21 | klar | du | Slut på storebrors rulle. Och här ligger ju plast överallt. Om jag bara kunde göra tråd av skräpet… Affären mitt emot kanske har något. |
| 2:21 | sak | du | (nytt mål i rutan) |
| 2:21 | pil |  | Sälj nyckelringarna |
| 2:21 | klar | du | (nytt mål i rutan) |
| 2:22 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 2:23 | struken | bror | VA FAN?! Fick du igång den?? Jag försökte i typ ett år. Den bara pep. 😳 |
| 2:23 | skratt | bror | VA FAN?! Fick du igång den?? Jag försökt |
| 2:23 | struken | notis:Storebrors skrivare: Nyckelring är klar  | Storebrors skrivare: Nyckelring är klar – ta ut den |
| 2:27 | röst | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. · STORY |
| 2:27 | butiksbubbla | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 2:29 | aliSalt | ali | 30 |
| 2:29 | butiksbubbla | ali | Pappas gamla köttkvarn. Den har malt allt utom kött. Trettio kronor, så är den din. |
| 2:30 | väntar | ali | Pappas gamla köttkvarn. Den har malt allt utom kött. Trettio kronor, så är den din. |
| 2:30 | händelse | malKlart | id=saljTva del=Dag 1 – Kom igång nasta=aliKvarn |
| 2:30 | väntar | du | Ali har en gammal kvarn. Den gör tråd av skräp. |
| 2:30 | MÅL |  | Köp kvarnen |
| 2:31 | struken | bror | Sälj den till Ali, han med affären vid tippen. Han köper gamla grejer. Han köpte min gamla mopedhjälm för 20 spänn. |
| 2:31 | sak | ali | Pappas gamla köttkvarn. Den har malt allt utom kött. Trettio kronor, så är den din. |
| 2:31 | röst | ali | Pappas gamla köttkvarn. Den har malt allt utom kött. Trettio kronor, så är den din. · STORY |
| 2:34 | kvittens-bock |  | ✓ Sälj nyckelringarna |
| 2:34 | målruta |  | Köp kvarnen |
| 2:38 | klar | ali | Pappas gamla köttkvarn. Den har malt allt utom kött. Trettio kronor, så är den din. |
| 2:40 | sak | du | Ali har en gammal kvarn. Den gör tråd av skräp. |
| 2:40 | pil |  | Köp kvarnen |
| 2:40 | notis | tanke | 💭 Ali har en gammal kvarn. Den gör tråd av skräp. |
| 2:40 | röst | du | Ali har en gammal kvarn. Den gör tråd av skräp. · MÅL |
| 2:44 | klar | du | Ali har en gammal kvarn. Den gör tråd av skräp. |
| 2:44 | händelse | kopt | sak=gammalkvarn |
| 2:44 | röst | ali | Och kommer du på nåt smart, så vet du var jag bor. · STORY |
| 2:44 | butiksbubbla | ali | Och kommer du på nåt smart, så vet du var jag bor. |
| 2:46 | händelse | malKlart | id=aliKvarn del=Dag 1 – Kom igång nasta=kvarn |
| 2:46 | väntar | du | Kvarnen ställer jag bredvid skrivaren, närmast skräpberget. Där finns skräpet. |
| 2:46 | målruta |  | Ställ kvarnen |
| 2:46 | MÅL |  | Ställ kvarnen |
| 2:47 | sak | du | Kvarnen ställer jag bredvid skrivaren, närmast skräpberget. Där finns skräpet. |
| 2:47 | pil |  | Ställ kvarnen |
| 2:47 | notis | tanke | 💭 Kvarnen ställer jag bredvid skrivaren, närmast skräpberget. Där finns skräpet. |
| 2:47 | röst | du | Kvarnen ställer jag bredvid skrivaren, närmast skräpberget. Där finns skräpet. · MÅL |
| 2:50 | kvittens-bock |  | ✓ Köp kvarnen |
| 2:53 | klar | du | Kvarnen ställer jag bredvid skrivaren, närmast skräpberget. Där finns skräpet. |
| 3:01 | sak | mamma | Hur kunde du bara gå? Är du ok? Svara när jag ringer! |
| 3:01 | sms | mamma | Hur kunde du bara gå? Är du ok? Svara när jag ringer! |
| 3:01 | sms-bubbla | mamma | Hur kunde du bara gå? Är du ok? Svara när jag ringer! |
| 3:01 | röst | mamma | Hur kunde du bara gå? Är du ok? Svara när jag ringer! · STORY |
| 3:01 | händelse | placerat | sak=kvarnen |
| 3:01 | struken | kedja | kvarnStar |
| 3:01 | duns | du | ställs ner |
| 3:01 | händelse | malKlart | id=kvarn del=Dag 1 – Kom igång nasta=flaska |
| 3:01 | väntar | du | Skräp i kvarnen, sen vevar jag. Då blir det tråd. |
| 3:01 | MÅL |  | Gör egen tråd |
| 3:05 | målruta |  | Gör egen tråd |
| 3:05 | kvittens-bock |  | ✓ Ställ kvarnen |
| 3:06 | klar | mamma | Hur kunde du bara gå? Är du ok? Svara när jag ringer! |
| 3:08 | sak | du | Skräp i kvarnen, sen vevar jag. Då blir det tråd. |
| 3:08 | pil |  | Gör egen tråd |
| 3:08 | notis | tanke | 💭 Skräp i kvarnen, sen vevar jag. Då blir det tråd. |
| 3:08 | röst | du | Skräp i kvarnen, sen vevar jag. Då blir det tråd. · MÅL |
| 3:08 | nick |  | nick:10 |
| 3:09 | väntar | foto | Första nyckelringen |
| 3:09 | paket |  | tanke |
| 3:09 | tanke | du | Någon köpte nåt jag gjort. Det här kan funka. |
| 3:09 | väntar | du | Någon köpte nåt jag gjort. Det här kan funka. |
| 3:12 | klar | du | Skräp i kvarnen, sen vevar jag. Då blir det tråd. |
| 3:21 | väntar | info:bra | 3 st i tratten – veva nu! |
| 3:21 | sak | info:bra | 3 st i tratten – veva nu! |
| 3:21 | kvitto-visas | info:bra | 3 st i tratten – veva nu! |
| 3:21 | toast | bra | 3 st i tratten – veva nu! |
| 3:23 | händelse | malKlart | id=flaska del=Dag 1 – Kom igång nasta=egenPrint |
| 3:23 | struken | kedja | trad |
| 3:23 | väntar | du | Kvarnen funkar. Soptippen är en gruva. |
| 3:23 | väntar | du | Min egen tråd. Nu printar jag en nyckelring av den. |
| 3:23 | MÅL |  | Printa med egen tråd |
| 3:23 | klar | info:bra | 3 st i tratten – veva nu! |
| 3:23 | sak | du | Kvarnen funkar. Soptippen är en gruva. |
| 3:23 | kvitto-visas | du | Kvarnen funkar. Soptippen är en gruva. |
| 3:23 | lapp | 📔 Dagbok | Kvarnen funkar. Soptippen är en gruva. |
| 3:23 | meddelande | du | Kvarnen funkar. Soptippen är en gruva. |
| 3:23 | dagbokkort | du | Kvarnen funkar. Soptippen är en gruva. |
| 3:24 | röst | du | Kvarnen funkar. Soptippen är en gruva. · STORY |
| 3:29 | händelse | brevLast | id=malt |
| 3:29 | klar | du | Kvarnen funkar. Soptippen är en gruva. |
| 3:29 | målruta |  | Printa med egen tråd |
| 3:30 | sak | du | Min egen tråd. Nu printar jag en nyckelring av den. |
| 3:30 | pil |  | Printa med egen tråd |
| 3:30 | notis | tanke | 💭 Min egen tråd. Nu printar jag en nyckelring av den. |
| 3:30 | röst | du | Min egen tråd. Nu printar jag en nyckelring av den. · MÅL |
| 3:30 | nick |  | nick:11 |
| 3:34 | klar | du | Min egen tråd. Nu printar jag en nyckelring av den. |
| 3:40 | händelse | printStart | sak=nyckelring |
| 3:40 | toast | bra | 🔗 Slangen kopplad |
| 3:44 | toast | guld | ✅ |
| 3:44 | händelse | printKlar | sak=nyckelring n=3 |
| 3:44 | händelse | malKlart | id=egenPrint del=Dag 1 – Kom igång nasta=salj |
| 3:44 | väntar | du | Affären på andra sidan vägen kanske köper sånt här. |
| 3:45 | MÅL |  | Sälj hos Ali |
| 3:45 | målruta |  | Sälj hos Ali |
| 3:45 | sak | du | Affären på andra sidan vägen kanske köper sånt här. |
| 3:45 | pil |  | Sälj hos Ali |
| 3:45 | notis | tanke | 💭 Affären på andra sidan vägen kanske köper sånt här. |
| 3:45 | röst | du | Affären på andra sidan vägen kanske köper sånt här. · MÅL |
| 3:45 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 3:45 | nick |  | nick:12 |
| 3:48 | kvittens-bock |  | ✓ Printa med egen tråd |
| 3:49 | klar | du | Affären på andra sidan vägen kanske köper sånt här. |
| 3:50 | väntar | kjelle | God morgon, det är Kjelle på Radio Tippen! Det har flyttat in någon i det gamla skjulet. Med en cykel och en skrivare. Spännande, Gunnar. |
| 3:50 | radio | kjelle | God morgon, det är Kjelle på Radio Tippen! Det har flyttat in någon i det gamla skjulet. Med en cykel och en skrivare. Spännande, Gunnar. |
| 3:50 | skratt | du | Radio-Kjelle |
| 3:53 | händelse | printStart | sak=nyckelring |
| 3:54 | toast | guld | ✅ |
| 3:54 | händelse | printKlar | sak=nyckelring n=4 |
| 3:54 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 3:54 | tanke | du | Vem är Gunnar? |
| 3:54 | väntar | du | Vem är Gunnar? |
| 3:54 | sak | du | Vem är Gunnar? |
| 3:54 | notis | tanke | 💭 Vem är Gunnar? |
| 3:54 | röst | du | Vem är Gunnar? · REAKTION |
| 3:56 | händelse | printStart | sak=nyckelring |
| 3:57 | klar | du | Vem är Gunnar? |
| 3:57 | toast | guld | ✅ |
| 3:57 | händelse | printKlar | sak=nyckelring n=5 |
| 3:57 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 4:06 | aliSalt | ali | 45 |
| 4:06 | röst | ali | Nyckelringar igen? Folk tappar sina nycklar hela tiden. Bra affär för oss. · STORY |
| 4:06 | butiksbubbla | ali | Nyckelringar igen? Folk tappar sina nycklar hela tiden. Bra affär för oss. |
| 4:07 | händelse | malKlart | id=salj del=Dag 1 – Kom igång nasta=powerbank |
| 4:07 | paket |  | sms → ge |
| 4:07 | väntar | ali | Ali här. Glömde en sak. Kom tillbaka, jag har nåt åt dig. |
| 4:07 | väntar |  | (läget ändras) |
| 4:08 | MÅL |  | Gå till Ali |
| 4:11 | kvittens-bock |  | ✓ Sälj hos Ali |
| 4:16 | väntar | du | Ali har något åt mig. Jag går över vägen till affären. |
| 4:16 | målruta |  | Gå till Ali |
| 4:16 | paket | ali | ali → ge |
| 4:16 | röst | ali | Ali här. Jag såg dig cykla. Det ser jobbigt ut. Testa koppla på den här. Bra kunder får bonus. · STORY |
| 4:16 | butiksbubbla | ali | Ali här. Jag såg dig cykla. Det ser jobbigt ut. Testa koppla på den här. Bra kunder får bonus. |
| 4:20 | sak | ali | Ali här. Glömde en sak. Kom tillbaka, jag har nåt åt dig. |
| 4:20 | sms | ali | Ali här. Glömde en sak. Kom tillbaka, jag har nåt åt dig. |
| 4:20 | sms-bubbla | ali | Ali här. Glömde en sak. Kom tillbaka, jag har nåt åt dig. |
| 4:20 | röst | ali | Ali här. Glömde en sak. Kom tillbaka, jag har nåt åt dig. · STORY |
| 4:25 | klar | ali | Ali här. Glömde en sak. Kom tillbaka, jag har nåt åt dig. |
| 4:27 | struken | du | Ali har något åt mig. Jag går över vägen till affären. |
| 4:28 | pil |  | Koppla in powerbanken |
| 4:32 | skratt | du | powerbanken på cykeln |
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
| 4:32 | paket |  | lapp |
| 4:32 | lapp-kö | 🧺 Ali | Ali här. Nyckelringen sålde. Jag ville bli ingenjör, men fick ta över pappas butik. I natt lät jag en AI rita en skräpgrip åt mig. Kom och titta. |
| 4:32 | väntar | ali | Ali här. Nyckelringen sålde. Jag ville bli ingenjör, men fick ta över pappas butik. I natt lät jag en AI rita en skräpgrip åt mig. Kom och titta. |
| 4:32 | struken | kedja | harRadGrip |
| 4:32 | väntar | du | Med en skräpgrip slipper jag böja mig. Ali har en ritning. |
| 4:32 | MÅL |  | Plocka skräp och mal det |
| 4:33 | brott | TYST MÅL | ”Koppla in powerbanken” sades inte |
| 4:35 | målruta |  | Plocka skräp och mal det |
| 4:36 | kvittens-bock |  | ✓ Gå till Ali |
| 4:39 | klar | du | Nu sparas lite ström. En nyckelring, typ. Framtiden är här, och den sitter fast med eltejp. |
| 4:40 | sak | du | Med en skräpgrip slipper jag böja mig. Ali har en ritning. |
| 4:40 | pil |  | Plocka skräp och mal det |
| 4:40 | notis | tanke | 💭 Med en skräpgrip slipper jag böja mig. Ali har en ritning. |
| 4:40 | röst | du | Med en skräpgrip slipper jag böja mig. Ali har en ritning. · MÅL |
| 4:40 | nick |  | nick:14 |
| 4:44 | klar | du | Med en skräpgrip slipper jag böja mig. Ali har en ritning. |
| 4:47 | händelse | printStart | sak=nyckelring |
| 4:48 | toast | fel | Ingen ström – trampa cykeln |
| 4:48 | väntar | notis:Storebrors skrivare: Ingen ström – tramp | Storebrors skrivare: Ingen ström – trampa cykeln |
| 4:49 | toast | guld | ✅ |
| 4:49 | händelse | printKlar | sak=nyckelring n=6 |
| 4:49 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 4:51 | händelse | printStart | sak=nyckelring |
| 4:52 | sak | foto | Första nyckelringen |
| 4:52 | foto | du | Första nyckelringen |
| 4:52 | toast | guld | ✅ |
| 4:52 | händelse | printKlar | sak=nyckelring n=7 |
| 4:55 | klar | foto | Första nyckelringen |
| 5:03 | sak | du | Någon köpte nåt jag gjort. Det här kan funka. |
| 5:03 | notis | tanke | 💭 Någon köpte nåt jag gjort. Det här kan funka. |
| 5:03 | röst | du | Någon köpte nåt jag gjort. Det här kan funka. · STORY |
| 5:03 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 5:05 | händelse | printStart | sak=nyckelring |
| 5:06 | toast | guld | ✅ |
| 5:06 | händelse | printKlar | sak=nyckelring n=8 |
| 5:07 | klar | du | Någon köpte nåt jag gjort. Det här kan funka. |
| 5:15 | sak | kjelle | God morgon, det är Kjelle på Radio Tippen! Det har flyttat in någon i det gamla skjulet. Med en cykel och en skrivare. Spännande, Gunnar. |
| 5:15 | notis |  | 📻 Radio Tippen: God morgon, det är Kjelle på Radio Tippen! Det har flyttat in någon i det gamla skjulet. Med en cykel och en skrivare. Spännande, Gunnar. |
| 5:15 | röst | kjelle | God morgon, det är Kjelle på Radio Tippen! Det har flyttat in någon i det gamla skjulet. Med en cykel och en skrivare. Spännande, Gunnar. · REAKTION |
| 5:16 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 5:24 | aliSalt | ali | 15 |
| 5:24 | aliSalt | ali | 15 |
| 5:24 | paket |  | ali → ge |
| 5:24 | väntar | ali | Du får bonus! 15 kr extra. Pappa hade gillat dig. |
| 5:24 | väntar |  | (läget ändras) |
| 5:24 | aliSalt | ali | 15 |
| 5:27 | klar | kjelle | God morgon, det är Kjelle på Radio Tippen! Det har flyttat in någon i det gamla skjulet. Med en cykel och en skrivare. Spännande, Gunnar. |
| 5:29 | struken | notis:Storebrors skrivare: Ingen ström – tramp | Storebrors skrivare: Ingen ström – trampa cykeln |
| 5:29 | sak | ali | Du får bonus! 15 kr extra. Pappa hade gillat dig. |
| 5:29 | notis |  | Ali: ”Du får bonus! 15 kr extra. Pappa hade gillat dig.” |
| 5:29 | röst | ali | Du får bonus! 15 kr extra. Pappa hade gillat dig. · REAKTION |
| 5:33 | klar | ali | Du får bonus! 15 kr extra. Pappa hade gillat dig. |
| 5:35 | sak |  | (läget ändras) |
| 5:35 | klar |  | (läget ändras) |
| 5:41 | sak |  | (läget ändras) |
| 5:41 | klar |  | (läget ändras) |
| 5:42 | händelse | printStart | sak=nyckelring |
| 5:43 | toast | guld | ✅ |
| 5:43 | händelse | printKlar | sak=nyckelring n=9 |
| 5:44 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 5:46 | händelse | printStart | sak=nyckelring |
| 5:47 | toast | guld | ✅ |
| 5:47 | händelse | printKlar | sak=nyckelring n=10 |
| 5:47 | sak | ali | Ali här. Nyckelringen sålde. Jag ville bli ingenjör, men fick ta över pappas butik. I natt lät jag en AI rita en skräpgrip åt mig. Kom och titta. |
| 5:47 | sms | ali | Ali här. Nyckelringen sålde. Jag ville bli ingenjör, men fick ta över pappas butik. I natt lät jag en AI rita en skräpgrip åt mig. Kom och titta. |
| 5:47 | sms-bubbla | ali | Ali här. Nyckelringen sålde. Jag ville bli ingenjör, men fick ta över pappas butik. I natt lät jag en AI rita en skräpgrip åt mig. Kom och titta. |
| 5:47 | röst | ali | Ali här. Nyckelringen sålde. Jag ville bli ingenjör, men fick ta över pappas butik. I natt lät jag en AI rita en skräpgrip åt mig. Kom och titta. · STORY |
| 5:48 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 5:50 | händelse | printStart | sak=nyckelring |
| 5:50 | toast | fel | Ingen ström – trampa cykeln |
| 5:52 | toast | guld | ✅ |
| 5:52 | händelse | printKlar | sak=nyckelring n=11 |
| 5:52 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 5:59 | aliSalt | ali | 15 |
| 5:59 | klar | ali | Ali här. Nyckelringen sålde. Jag ville bli ingenjör, men fick ta över pappas butik. I natt lät jag en AI rita en skräpgrip åt mig. Kom och titta. |
| 5:59 | aliSalt | ali | 15 |
| 5:59 | aliSalt | ali | 15 |
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
| 6:25 | aliSalt | ali | 15 |
| 6:26 | aliSalt | ali | 15 |
| 6:26 | aliSalt | ali | 15 |
| 6:34 | händelse | printStart | sak=nyckelring |
| 6:35 | toast | guld | ✅ |
| 6:35 | händelse | printKlar | sak=nyckelring n=15 |
| 6:36 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 6:38 | händelse | printStart | sak=nyckelring |
| 6:41 | toast | guld | ✅ |
| 6:41 | händelse | printKlar | sak=nyckelring n=16 |
| 6:41 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 6:43 | händelse | printStart | sak=nyckelring |
| 6:44 | toast | guld | ✅ |
| 6:44 | händelse | printKlar | sak=nyckelring n=17 |
| 6:45 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 6:52 | aliSalt | ali | 15 |
| 6:52 | aliSalt | ali | 15 |
| 6:52 | aliSalt | ali | 15 |
| 7:01 | händelse | printStart | sak=nyckelring |
| 7:02 | toast | guld | ✅ |
| 7:02 | händelse | printKlar | sak=nyckelring n=18 |
| 7:03 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 7:10 | aliSalt | ali | 15 |
| 7:28 | händelse | printStart | sak=nyckelring |
| 7:29 | toast | guld | ✅ |
| 7:29 | händelse | printKlar | sak=nyckelring n=19 |
| 7:43 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 7:44 | upplåst | bara | grip |
| 7:44 | brott | RESERV | grip (bara 5 av 6) |
| 7:44 | händelse | upplast | id=grip flask=bara |
| 7:51 | aliSalt | ali | 15 |
| 7:58 | händelse | printStart | sak=nyckelring |
| 7:59 | toast | guld | ✅ |
| 7:59 | händelse | printKlar | sak=nyckelring n=20 |
| 8:00 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 8:08 | aliSalt | ali | 15 |
| 8:11 | toast | guld | 3D-modell köpt – printa skräpgrip på skrivaren |
| 8:11 | händelse | kopt | sak=grip |
| 8:11 | röst | ali | Bra val. 3D-modellen är din. Den räcker till en. · STORY |
| 8:11 | butiksbubbla | ali | Bra val. 3D-modellen är din. Den räcker till en. |
| 8:12 | händelse | malKlart | id=kopGrip del=Dag 1 – Kom igång nasta=printGrip |
| 8:12 | väntar | du | Min första 3D-modell! Nu ska den bara printas. Jag printar inte bara saker – jag printar maskiner. |
| 8:12 | MÅL |  | Printa skräpgripen |
| 8:13 | sak | du | Min första 3D-modell! Nu ska den bara printas. Jag printar inte bara saker – jag printar maskiner. |
| 8:13 | kvitto-visas | du | Min första 3D-modell! Nu ska den bara printas. Jag printar inte bara saker – jag printar maskiner. |
| 8:13 | lapp | 📔 Dagbok | Min första 3D-modell! Nu ska den bara printas. Jag printar inte bara saker – jag printar maskiner. |
| 8:13 | meddelande | du | Min första 3D-modell! Nu ska den bara printas. Jag printar inte bara saker – jag printar maskiner. |
| 8:13 | dagbokkort | du | Min första 3D-modell! Nu ska den bara printas. Jag printar inte bara saker – jag printar maskiner. |
| 8:13 | röst | du | Min första 3D-modell! Nu ska den bara printas. Jag printar inte bara saker – jag printar maskiner. · STORY |
| 8:23 | händelse | brevLast | id=ritning |
| 8:23 | klar | du | Min första 3D-modell! Nu ska den bara printas. Jag printar inte bara saker – jag printar maskiner. |
| 8:23 | målruta |  | Printa skräpgripen |
| 8:23 | sak | du | (nytt mål i rutan) |
| 8:23 | pil |  | Printa skräpgripen |
| 8:23 | klar | du | (nytt mål i rutan) |
| 8:32 | händelse | printStart | sak=byggsats:grip |
| 8:33 | toast | fel | Ingen ström – trampa cykeln |
| 8:36 | händelse | printKlar | sak=byggsats:grip n=1 |
| 8:36 | toast | guld | ✅ |
| 8:52 | väntar | info:guld | Klicka för att ta på dig skräpgrip |
| 8:52 | händelse | tagitUrPrint | sak=byggsats:grip n=1 |
| 8:52 | paket |  | sms |
| 8:52 | väntar | ali | Ali här. Jag såg Skräpgrip på avstånd. Ett streck blev lite snett. Mitt fel. Vackert ändå. |
| 8:52 | struken | kedja | grip |
| 8:52 | sak | info:guld | Klicka för att ta på dig skräpgrip |
| 8:52 | kvitto-visas | info:guld | Klicka för att ta på dig skräpgrip |
| 8:52 | toast | guld | Klicka för att ta på dig skräpgrip |
| 8:54 | klar | info:guld | Klicka för att ta på dig skräpgrip |
| 8:56 | väntar | info:guld | 🦾 Skräpgripen sitter! Bär 6, lättare att sikta, plockar när du går nära. |
| 8:56 | tog på | du | byggsats:grip |
| 8:56 | händelse | monterat | sak=grip |
| 8:56 | sak | info:guld | 🦾 Skräpgripen sitter! Bär 6, lättare att sikta, plockar när du går nära. |
| 8:56 | kvitto-visas | info:guld | 🦾 Skräpgripen sitter! Bär 6, lättare att sikta, plockar när du går nära. |
| 8:56 | toast | guld | 🦾 Skräpgripen sitter! Bär 6, lättare att sikta, plockar när du går nära. |
| 8:56 | händelse | malKlart | id=printGrip del=Dag 1 – Kom igång nasta=krukaD1 |
| 8:56 | väntar | du | Ali vill ha krukor. Jag printar en blomkruka. |
| 8:56 | MÅL |  | Printa och sälj nyckelringar |
| 8:56 | upplåst | inkomst | kruka |
| 8:56 | brott | UPPLÅST | kruka (inkomst 20 av 6) |
| 8:56 | händelse | upplast | id=kruka flask=inkomst |
| 8:56 | paket |  | tanke → sms |
| 8:56 | tanke | du | Nyckelringar, nyckelringar. Ali kan inte vilja ha fler. |
| 8:56 | väntar | du | Nyckelringar, nyckelringar. Ali kan inte vilja ha fler. |
| 8:56 | väntar | ali | Prova en kruka. Folk köper krukor. Ingen vet varför. |
| 8:56 | skratt | ali | Prova en kruka. Folk köper krukor. Ingen |
| 8:58 | klar | info:guld | 🦾 Skräpgripen sitter! Bär 6, lättare att sikta, plockar när du går nära. |
| 8:59 | målruta |  | Köp krukreceptet |
| 9:00 | kvittens-bock |  | ✓ Printa skräpgripen |
| 9:00 | sak | du | Ali vill ha krukor. Jag printar en blomkruka. |
| 9:00 | pil |  | Köp krukreceptet |
| 9:00 | notis | tanke | 💭 Ali vill ha krukor. Jag printar en blomkruka. |
| 9:00 | röst | du | Ali vill ha krukor. Jag printar en blomkruka. · MÅL |
| 9:03 | klar | du | Ali vill ha krukor. Jag printar en blomkruka. |
| 9:04 | händelse | kopt | sak=kruka |
| 9:04 | röst | ali | Bra val. Folk köper sånt. Jag vet inte varför. · STORY |
| 9:04 | butiksbubbla | ali | Blomkruka? Bra val. Folk köper sånt. Jag vet inte varför. |
| 9:06 | väntar | bud | (tips) |
| 9:06 | sak | bud | (tips) |
| 9:06 | väntar | du | Jag har pengar nu. Hos Ali kan jag köpa uppgraderingar – bära mer eller printa snabbare. |
| 9:07 | klar | bud | (tips) |
| 9:09 | sak | du | Jag har pengar nu. Hos Ali kan jag köpa uppgraderingar – bära mer eller printa snabbare. |
| 9:09 | röst | du | Jag har pengar nu. Hos Ali kan jag köpa uppgraderingar – bära mer eller printa snabbare. · MÅL |
| 9:17 | klar | du | Jag har pengar nu. Hos Ali kan jag köpa uppgraderingar – bära mer eller printa snabbare. |
| 9:25 | sak | ali | Ali här. Jag såg Skräpgrip på avstånd. Ett streck blev lite snett. Mitt fel. Vackert ändå. |
| 9:25 | sms | ali | Ali här. Jag såg Skräpgrip på avstånd. Ett streck blev lite snett. Mitt fel. Vackert ändå. |
| 9:25 | sms-bubbla | ali | Ali här. Jag såg Skräpgrip på avstånd. Ett streck blev lite snett. Mitt fel. Vackert ändå. |
| 9:25 | röst | ali | Ali här. Jag såg Skräpgrip på avstånd. Ett streck blev lite snett. Mitt fel. Vackert ändå. · REAKTION |
| 9:25 | händelse | printStart | sak=kruka |
| 9:28 | toast | guld | ✅ |
| 9:28 | händelse | printKlar | sak=kruka n=1 |
| 9:28 | kvittens | du | En kruka. Mamma skulle bli så stolt. Hon får inte veta. |
| 9:28 | väntar | du | En kruka. Mamma skulle bli så stolt. Hon får inte veta. |
| 9:28 | händelse | malKlart | id=krukaD1 del=Dag 1 – Kom igång nasta=saljKruka |
| 9:28 | väntar | du | Ali gillar krukor. Han sa det själv. |
| 9:28 | MÅL |  | Sälj blomkrukan |
| 9:31 | målruta |  | Sälj blomkrukan |
| 9:32 | klar | ali | Ali här. Jag såg Skräpgrip på avstånd. Ett streck blev lite snett. Mitt fel. Vackert ändå. |
| 9:32 | sak | du | Ali gillar krukor. Han sa det själv. |
| 9:32 | pil |  | Sälj blomkrukan |
| 9:32 | notis | tanke | 💭 Ali gillar krukor. Han sa det själv. |
| 9:32 | röst | du | Ali gillar krukor. Han sa det själv. · MÅL |
| 9:35 | klar | du | Ali gillar krukor. Han sa det själv. |
| 9:35 | sak | du | En kruka. Mamma skulle bli så stolt. Hon får inte veta. |
| 9:35 | notis | tanke | 💭 En kruka. Mamma skulle bli så stolt. Hon får inte veta. |
| 9:35 | röst | du | En kruka. Mamma skulle bli så stolt. Hon får inte veta. · STORY |
| 9:40 | klar | du | En kruka. Mamma skulle bli så stolt. Hon får inte veta. |
| 9:50 | sak | du | Nyckelringar, nyckelringar. Ali kan inte vilja ha fler. |
| 9:50 | notis | tanke | 💭 Nyckelringar, nyckelringar. Ali kan inte vilja ha fler. |
| 9:50 | röst | du | Nyckelringar, nyckelringar. Ali kan inte vilja ha fler. · STORY |
| 9:52 | händelse | tagitUrPrint | sak=kruka n=1 |
| 9:55 | klar | du | Nyckelringar, nyckelringar. Ali kan inte vilja ha fler. |
| 10:05 | aliSalt | ali | 70 |
| 10:06 | händelse | malKlart | id=saljKruka del=Dag 1 – Kom igång nasta=kopSang |
| 10:06 | struken | kedja | morkt |
| 10:06 | väntar | du | Jag kan inte sova på betongen en natt till. Ali har en säng. Typ. |
| 10:06 | målruta |  | Köp sängen |
| 10:06 | MÅL |  | Köp sängen |
| 10:06 | sak | du | Jag kan inte sova på betongen en natt till. Ali har en säng. Typ. |
| 10:06 | pil |  | Köp sängen |
| 10:06 | notis | tanke | 💭 Jag kan inte sova på betongen en natt till. Ali har en säng. Typ. |
| 10:06 | röst | du | Jag kan inte sova på betongen en natt till. Ali har en säng. Typ. · MÅL |
| 10:10 | kvittens-bock |  | ✓ Sälj blomkrukan |
| 10:11 | klar | du | Jag kan inte sova på betongen en natt till. Ali har en säng. Typ. |
| 10:15 | händelse | kopt | sak=sang |
| 10:15 | röst | ali | Sov gott, min vän. · STORY |
| 10:15 | butiksbubbla | ali | Sov gott, min vän. |
| 10:16 | händelse | malKlart | id=kopSang del=Dag 1 – Kom igång nasta=printSang |
| 10:16 | väntar | du | Sängen tar lång tid. Den är värd det. |
| 10:16 | målruta |  | Printa sängen |
| 10:16 | MÅL |  | Printa sängen |
| 10:16 | sak | du | Sängen tar lång tid. Den är värd det. |
| 10:16 | pil |  | Printa sängen |
| 10:16 | notis | tanke | 💭 Sängen tar lång tid. Den är värd det. |
| 10:16 | röst | du | Sängen tar lång tid. Den är värd det. · MÅL |
| 10:17 | nick |  | nick:19 |
| 10:20 | klar | du | Sängen tar lång tid. Den är värd det. |
| 10:20 | kvittens-bock |  | ✓ Köp sängen |
| 10:28 | händelse | printStart | sak=sang |
| 10:28 | sak | ali | Prova en kruka. Folk köper krukor. Ingen vet varför. |
| 10:28 | skratt | ali | Prova en kruka. Folk köper krukor. Ingen |
| 10:28 | sms | ali | Prova en kruka. Folk köper krukor. Ingen vet varför. |
| 10:28 | skratt | ali | Prova en kruka. Folk köper krukor. Ingen |
| 10:28 | sms-bubbla | ali | Prova en kruka. Folk köper krukor. Ingen vet varför. |
| 10:28 | skratt | ali | Prova en kruka. Folk köper krukor. Ingen |
| 10:28 | röst | ali | Prova en kruka. Folk köper krukor. Ingen vet varför. · STORY |
| 10:29 | toast | fel | Ingen ström – trampa cykeln |
| 10:33 | klar | ali | Prova en kruka. Folk köper krukor. Ingen vet varför. |
| 10:33 | skratt | ali | Prova en kruka. Folk köper krukor. Ingen |
| 10:34 | toast | fel | Slut på tråd – mal mer så fortsätter den |
| 10:34 | väntar | notis:Storebrors skrivare: Slut på tråd – mal  | Storebrors skrivare: Slut på tråd – mal mer så fortsätter den |
| 10:53 | sak | notis:Storebrors skrivare: Slut på tråd – mal  | Storebrors skrivare: Slut på tråd – mal mer så fortsätter den |
| 10:53 | notis | fel | Storebrors skrivare: Slut på tråd – mal mer så fortsätter den |
| 10:54 | toast | guld | ✅ |
| 10:54 | händelse | printKlar | sak=sang n=1 |
| 10:56 | klar | notis:Storebrors skrivare: Slut på tråd – mal  | Storebrors skrivare: Slut på tråd – mal mer så fortsätter den |
| 10:56 | händelse | tagitUrPrint | sak=sang n=1 |
| 10:56 | struken | kedja | sang |
| 10:56 | händelse | malKlart | id=printSang del=Dag 1 – Kom igång nasta=sov1 |
| 10:56 | paket |  | lapp |
| 10:56 | lapp | 📔 Dagbok | Dag 1. Nitton år. Inget mer tjat. En skrivare, ett skjul och en säng. Det räcker för i natt. Gården är full av skräp. I morgon. |
| 10:56 | meddelande | du | Dag 1. Nitton år. Inget mer tjat. En skrivare, ett skjul och en säng. Det räcker för i natt. Gården är full av skräp. I morgon. |
| 10:56 | dagbokkort | du | Dag 1. Nitton år. Inget mer tjat. En skrivare, ett skjul och en säng. Det räcker för i natt. Gården är full av skräp. I morgon. |
| 10:56 | väntar | du | Sängen ska in i skjulet. Sen sover jag. |
| 10:56 | målruta |  | Sängen i skjulet |
| 10:57 | MÅL |  | Sängen i skjulet |
| 10:57 | röst | du | Dag 1. Nitton år. Inget mer tjat. En skrivare, ett skjul och en säng. Det räcker för i natt. Gården är full av skräp. I morgon. · STORY |
| 11:08 | händelse | brevLast | id=start |
| 11:10 | sak | du | Sängen ska in i skjulet. Sen sover jag. |
| 11:10 | pil |  | Sängen i skjulet |
| 11:10 | notis | tanke | 💭 Sängen ska in i skjulet. Sen sover jag. |
| 11:10 | röst | du | Sängen ska in i skjulet. Sen sover jag. · MÅL |
| 11:13 | klar | du | Sängen ska in i skjulet. Sen sover jag. |

<details><summary>Botens handlingar dag 1</summary>

- 0:12 gå till brädhögen (3 m) (5 kr)
- 0:26 popup: "FORTSÄTT" (5 kr)
- 0:31 gå till cykeln vid vägen (2 m) (5 kr)
- 0:47 gå till rutan i linje 1 (13 m) (5 kr)
- 1:32 gå till cykeln (lyfter den) (13 m) (5 kr)
- 1:43 gå till cykelns plats (11 m) (5 kr)
- 1:46 gå till skrivaren (2 m) (5 kr)
- 1:47 printar Nyckelring (5 kr)
- 1:54 tar ut 1 st ur skrivaren (5 kr)
- 1:58 printar Nyckelring (sista av storebrors rulle) (5 kr)
- 2:22 tar ut 1 st ur skrivaren (5 kr)
- 2:27 gå till Ali (26 m) (5 kr)
- 2:27 öppnar Alis butik – sälja de två nyckelringarna (5 kr)
- 2:30 säljer hos Ali: +30 kr (35 kr)
- 2:43 öppnar Alis butik – köpa kvarnen (35 kr)
- 2:45 köper gammalkvarn för 30 kr (5 kr)
- 2:46 köpte kvarnen (5 kr)
- 3:01 gå till kvarnens ruta (28 m) (5 kr)
- 3:20 plockar 3 skräp på gården (bär max 3) (5 kr)
- 3:21 gå till kvarnen (6 m) (5 kr)
- 3:29 popup: "FORTSÄTT" (5 kr)
- 3:37 gå till cykeln (4 m) (5 kr)
- 3:40 printar Nyckelring (5 kr)
- 3:46 tar ut 1 st ur skrivaren (5 kr)
- 3:53 printar Nyckelring (5 kr)
- 3:54 tar ut 1 st ur skrivaren (5 kr)
- 3:56 printar Nyckelring (5 kr)
- 3:58 tar ut 1 st ur skrivaren (5 kr)
- 4:05 gå till Ali (27 m) (5 kr)
- 4:05 öppnar Alis butik – sälja nyckelringar (5 kr)
- 4:07 säljer hos Ali: +45 kr (50 kr)
- 4:16 öppnar Alis butik – Ali (powerbanken) (50 kr)
- 4:32 gå till koppla powerbanken till cykeln (24 m) (50 kr)
- 4:45 tjänar pengar till väntar på flaskhalsen för grip: 50/90 kr → printar nyckelring (15 kr) (50 kr)
- 4:46 gå till skrivaren (2 m) (50 kr)
- 4:47 printar Nyckelring (50 kr)
- 4:50 tar ut 1 st ur skrivaren (50 kr)
- 4:51 printar Nyckelring (50 kr)
- 4:57 plockar 3 skräp på gården (bär max 3) (50 kr)
- 5:00 gå till kvarnen (13 m) (50 kr)
- 5:03 gå till skrivaren (2 m) (50 kr)
- 5:04 tar ut 1 st ur skrivaren (50 kr)
- 5:05 printar Nyckelring (50 kr)
- 5:11 plockar 3 skräp på gården (bär max 3) (50 kr)
- 5:14 gå till kvarnen (13 m) (50 kr)
- 5:16 gå till skrivaren (2 m) (50 kr)
- 5:17 tar ut 1 st ur skrivaren (50 kr)
- 5:23 gå till Ali (28 m) (50 kr)
- 5:23 öppnar Alis butik – sälja (50 kr)
- 5:25 säljer hos Ali: +45 kr (95 kr)
- 5:35 tjänar pengar till väntar på flaskhalsen för grip: 110/150 kr → printar nyckelring (15 kr) (110 kr)
- 5:40 gå till skrivaren (25 m) (110 kr)
- 5:42 printar Nyckelring (110 kr)
- 5:44 tar ut 1 st ur skrivaren (110 kr)
- 5:46 printar Nyckelring (110 kr)
- 5:48 tar ut 1 st ur skrivaren (110 kr)
- 5:50 printar Nyckelring (110 kr)
- 5:51 gå till cykeln (1 m) (110 kr)
- 5:52 tar ut 1 st ur skrivaren (110 kr)
- 5:58 gå till Ali (25 m) (110 kr)
- 5:58 öppnar Alis butik – sälja (110 kr)
- 6:00 säljer hos Ali: +45 kr (155 kr)
- 6:01 tjänar pengar till väntar på flaskhalsen för grip: 155/195 kr → printar nyckelring (15 kr) (155 kr)
- 6:07 gå till skrivaren (25 m) (155 kr)
- 6:08 printar Nyckelring (155 kr)
- 6:11 tar ut 1 st ur skrivaren (155 kr)
- 6:12 printar Nyckelring (155 kr)
- 6:15 tar ut 1 st ur skrivaren (155 kr)
- 6:16 printar Nyckelring (155 kr)
- 6:19 tar ut 1 st ur skrivaren (155 kr)
- 6:24 gå till Ali (25 m) (155 kr)
- 6:24 öppnar Alis butik – sälja (155 kr)
- 6:26 säljer hos Ali: +45 kr (200 kr)
- 6:28 tjänar pengar till väntar på flaskhalsen för grip: 200/240 kr → printar nyckelring (15 kr) (200 kr)
- 6:33 gå till skrivaren (25 m) (200 kr)
- 6:34 printar Nyckelring (200 kr)
- 6:37 tar ut 1 st ur skrivaren (200 kr)
- 6:38 printar Nyckelring (200 kr)
- 6:40 gå till cykeln (1 m) (200 kr)
- 6:41 tar ut 1 st ur skrivaren (200 kr)
- 6:43 printar Nyckelring (200 kr)
- 6:45 tar ut 1 st ur skrivaren (200 kr)
- 6:50 gå till Ali (25 m) (200 kr)
- 6:50 öppnar Alis butik – sälja (200 kr)
- 6:52 säljer hos Ali: +45 kr (245 kr)
- 6:54 tjänar pengar till väntar på flaskhalsen för grip: 245/285 kr → printar nyckelring (15 kr) (245 kr)
- 6:59 gå till skrivaren (25 m) (245 kr)
- 7:01 printar Nyckelring (245 kr)
- 7:03 tar ut 1 st ur skrivaren (245 kr)
- 7:09 gå till Ali (25 m) (245 kr)
- 7:09 öppnar Alis butik – sälja (245 kr)
- 7:10 säljer hos Ali: +15 kr (260 kr)
- 7:11 tjänar pengar till väntar på flaskhalsen för grip: 260/285 kr → printar nyckelring (15 kr) (260 kr)
- 7:17 plockar 3 skräp på gården (bär max 3) (260 kr)
- 7:23 gå till kvarnen (27 m) (260 kr)
- 7:27 gå till skrivaren (1 m) (260 kr)
- 7:28 printar Nyckelring (260 kr)
- 7:37 plockar 3 skräp på gården (bär max 3) (260 kr)
- 7:41 gå till kvarnen (20 m) (260 kr)
- 7:43 gå till skrivaren (2 m) (260 kr)
- 7:43 tar ut 1 st ur skrivaren (260 kr)
- 7:49 gå till Ali (28 m) (260 kr)
- 7:49 öppnar Alis butik – sälja (260 kr)
- 7:51 säljer hos Ali: +15 kr (275 kr)
- 7:52 tjänar pengar till väntar på flaskhalsen för grip: 275/285 kr → printar nyckelring (15 kr) (275 kr)
- 7:57 gå till skrivaren (25 m) (275 kr)
- 7:58 printar Nyckelring (275 kr)
- 8:01 tar ut 1 st ur skrivaren (275 kr)
- 8:06 gå till Ali (25 m) (275 kr)
- 8:06 öppnar Alis butik – sälja (275 kr)
- 8:08 säljer hos Ali: +15 kr (290 kr)
- 8:10 öppnar Alis butik – köpa skräpgrip (290 kr)
- 8:12 köper grip för 50 kr (240 kr)
- 8:23 popup: "FORTSÄTT" (240 kr)
- 8:31 gå till skrivaren (25 m) (240 kr)
- 8:32 printar Skräpgrip (240 kr)
- 8:33 gå till cykeln (1 m) (240 kr)
- 8:43 plockar 3 skräp på gården (bär max 3) (240 kr)
- 8:49 gå till kvarnen (29 m) (240 kr)
- 8:52 gå till skrivaren (1 m) (240 kr)
- 8:52 tar ut 1 st ur skrivaren (240 kr)
- 8:56 tar på grip (240 kr)
- 9:02 gå till Ali (28 m) (240 kr)
- 9:02 öppnar Alis butik – köpa receptet blomkruka (240 kr)
- 9:04 köper kruka för 40 kr (200 kr)
- 9:23 gå till skrivaren (25 m) (200 kr)
- 9:25 printar Blomkruka (200 kr)
- 9:44 plockar 6 skräp på gården (bär max 6) (200 kr)
- 9:50 gå till kvarnen (31 m) (200 kr)
- 9:52 gå till skrivaren (2 m) (200 kr)
- 9:53 tar ut 1 st ur skrivaren (200 kr)
- 10:03 gå till Ali (28 m) (200 kr)
- 10:03 öppnar Alis butik – sälja krukan (200 kr)
- 10:05 säljer hos Ali: +70 kr (270 kr)
- 10:13 öppnar Alis butik – köpa sängen (270 kr)
- 10:16 köper sang för 60 kr (210 kr)
- 10:27 gå till skrivaren (25 m) (210 kr)
- 10:28 printar Säng (210 kr)
- 10:30 gå till cykeln (1 m) (210 kr)
- 10:46 plockar 6 skräp på gården (bär max 6) (210 kr)
- 10:53 gå till kvarnen (34 m) (210 kr)
- 10:56 gå till skrivaren (1 m) (210 kr)
- 11:08 popup: "FORTSÄTT" (210 kr)
- 11:08 tar ut 1 st ur skrivaren (210 kr)
- 11:20 gå till sängplatsen i skjulet (21 m) (210 kr)

</details>

## Dag 2

| Tid | Källa | Vem | Text |
|---|---|---|---|
| 11:22 | vara | ali | kruka |
| 11:22 | händelse | malKlart | id=sov1 del=Dag 1 – Kom igång nasta=kopMotor |
| 11:22 | MÅL |  | Mal skräp, printa och sälj |
| 11:23 | sopsack | rolf | Sopsäckarna landade på gården |
| 11:23 | paket |  | tanke → ge |
| 11:23 | tanke | du | Hmm, vad kastade gubben ut ur sopbilen? Jag går och kollar. |
| 11:23 | väntar | du | Hmm, vad kastade gubben ut ur sopbilen? Jag går och kollar. |
| 11:23 | väntar |  | (läget ändras) |
| 0:01 | händelse | dagenBorjar | dag=2 |
| 0:01 | meddelande | du | Dag 2. 20 dagar till jul. Utan dörr blåser natten rakt in. |
| 0:01 | dagbokkort | du | Tippen och Rolf · Dag 2. 20 dagar till jul. Utan dörr blåser natten rakt in. |
| 0:01 | röst | du | Tippen och Rolf. Dag 2. 20 dagar till jul. Utan dörr blåser natten rakt in. · STORY |
| 0:15 | händelse | morgonkortStangt | dag=2 |
| 0:15 | paket |  | lapp |
| 0:15 | lapp | 📔 Dagbok | Första natten i en riktig säng. Jag printade den själv. |
| 0:15 | meddelande | du | Första natten i en riktig säng. Jag printade den själv. |
| 0:15 | dagbokkort | du | Första natten i en riktig säng. Jag printade den själv. |
| 0:15 | paket |  | tanke |
| 0:15 | tanke | du | Grön jul igen. Typiskt. |
| 0:15 | väntar | du | Grön jul igen. Typiskt. |
| 0:15 | röst | du | Första natten i en riktig säng. Jag printade den själv. · STORY |
| 0:22 | händelse | brevLast | id=sang |
| 0:22 | struken | du | Grön jul igen. Typiskt. |
| 0:22 | väntar | du | Vevandet tar på armarna. Ali har en motor till kvarnen. |
| 0:22 | målruta |  | Mal skräp, printa och sälj |
| 0:24 | sak | du | Vevandet tar på armarna. Ali har en motor till kvarnen. |
| 0:24 | pil |  | Mal skräp, printa och sälj |
| 0:24 | notis | tanke | 💭 Vevandet tar på armarna. Ali har en motor till kvarnen. |
| 0:24 | röst | du | Vevandet tar på armarna. Ali har en motor till kvarnen. · MÅL |
| 0:28 | klar | du | Vevandet tar på armarna. Ali har en motor till kvarnen. |
| 0:36 | händelse | printStart | sak=kruka |
| 0:36 | sak | du | Hmm, vad kastade gubben ut ur sopbilen? Jag går och kollar. |
| 0:36 | notis | tanke | 💭 Hmm, vad kastade gubben ut ur sopbilen? Jag går och kollar. |
| 0:36 | röst | du | Hmm, vad kastade gubben ut ur sopbilen? Jag går och kollar. · STORY |
| 0:37 | toast | fel | Ingen ström – trampa cykeln |
| 0:40 | toast | guld | ✅ |
| 0:40 | händelse | printKlar | sak=kruka n=2 |
| 0:40 | händelse | tagitUrPrint | sak=kruka n=1 |
| 0:41 | klar | du | Hmm, vad kastade gubben ut ur sopbilen? Jag går och kollar. |
| 0:46 | röst | ali | Du printar mina ritningar. Ingen har gjort det förut. Jag är inte rörd. Det är dammet. · STORY |
| 0:46 | butiksbubbla | ali | Du printar mina ritningar. Ingen har gjort det förut. Jag är inte rörd. Det är dammet. |
| 0:47 | aliSalt | ali | 105 |
| 0:47 | butiksbubbla | ali | Precis vad jag ville ha idag. 105 kr – med extra. |
| 0:48 | väntar | ali | Precis det jag ville ha idag, min vän. |
| 0:50 | väntar | foto | Egen säng |
| 0:50 | paket |  | tanke |
| 0:50 | tanke | du | Tänk att jag ska få sova i min egen säng. |
| 0:50 | väntar | du | Tänk att jag ska få sova i min egen säng. |
| 0:50 | väntar | ali | Ali här. Såg skylten. Stavningen är rätt. Det är mer än många. |
| 0:50 | sak | ali | Precis det jag ville ha idag, min vän. |
| 0:50 | röst | ali | Precis det jag ville ha idag, min vän. · STORY |
| 0:53 | klar | ali | Precis det jag ville ha idag, min vän. |
| 1:01 | sak |  | (läget ändras) |
| 1:01 | klar |  | (läget ändras) |
| 1:02 | händelse | printStart | sak=kruka |
| 1:03 | skratt | du | falsk tuta |
| 1:04 | toast | guld | ✅ |
| 1:04 | händelse | printKlar | sak=kruka n=3 |
| 1:05 | händelse | tagitUrPrint | sak=kruka n=1 |
| 1:05 | sak | foto | Egen säng |
| 1:05 | foto | du | Egen säng |
| 1:08 | klar | foto | Egen säng |
| 1:12 | aliSalt | ali | 105 |
| 1:16 | sak | du | Tänk att jag ska få sova i min egen säng. |
| 1:16 | notis | tanke | 💭 Tänk att jag ska få sova i min egen säng. |
| 1:16 | röst | du | Tänk att jag ska få sova i min egen säng. · STORY |
| 1:18 | väntar | du | Sopbilen tippade en ny last. Allt det skräpet – och grinden är låst. |
| 1:18 | skratt | du | däcket rullar iväg |
| 1:19 | klar | du | Tänk att jag ska få sova i min egen säng. |
| 1:19 | sak | du | Sopbilen tippade en ny last. Allt det skräpet – och grinden är låst. |
| 1:19 | kvitto-visas | du | Sopbilen tippade en ny last. Allt det skräpet – och grinden är låst. |
| 1:19 | lapp | 📔 Dagbok | Sopbilen tippade en ny last. Allt det skräpet – och grinden är låst. |
| 1:19 | meddelande | du | Sopbilen tippade en ny last. Allt det skräpet – och grinden är låst. |
| 1:19 | dagbokkort | du | Sopbilen tippade en ny last. Allt det skräpet – och grinden är låst. |
| 1:19 | röst | du | Sopbilen tippade en ny last. Allt det skräpet – och grinden är låst. · STORY |
| 1:27 | händelse | brevLast | id=sopbil |
| 1:27 | klar | du | Sopbilen tippade en ny last. Allt det skräpet – och grinden är låst. |
| 1:46 | händelse | printStart | sak=kruka |
| 1:47 | toast | fel | Ingen ström – trampa cykeln |
| 1:50 | toast | guld | ✅ |
| 1:50 | händelse | printKlar | sak=kruka n=4 |
| 1:50 | händelse | tagitUrPrint | sak=kruka n=1 |
| 1:56 | väntar | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått generator. Vi tar en låt på det. Den här är till dig, Gunnar. |
| 1:56 | radio | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått generator. Vi tar en låt på det. Den här är till dig, Gunnar. |
| 1:56 | skratt | du | Radio-Kjelle |
| 1:56 | sak | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått generator. Vi tar en låt på det. Den här är till dig, Gunnar. |
| 1:56 | notis |  | 📻 Radio Tippen: Radio Tippen, Kjelle här. Skjulet vid tippen har fått generator. Vi tar en låt på det. Den här är till dig, Gunnar. |
| 1:56 | röst | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått generator. Vi tar en låt på det. Den här är till dig, Gunnar. · REAKTION |
| 1:58 | aliSalt | ali | 105 |
| 2:05 | klar | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått generator. Vi tar en låt på det. Den här är till dig, Gunnar. |
| 2:14 | händelse | printStart | sak=kruka |
| 2:17 | toast | guld | ✅ |
| 2:17 | händelse | printKlar | sak=kruka n=5 |
| 2:17 | händelse | tagitUrPrint | sak=kruka n=1 |
| 2:24 | aliSalt | ali | 105 |
| 2:52 | händelse | printStart | sak=kruka |
| 2:53 | toast | fel | Ingen ström – trampa cykeln |
| 2:56 | toast | guld | ✅ |
| 2:56 | händelse | printKlar | sak=kruka n=6 |
| 2:56 | händelse | tagitUrPrint | sak=kruka n=1 |
| 3:04 | aliSalt | ali | 105 |
| 3:12 | väntar | mamma | Har du frusit än? |
| 3:12 | händelse | printStart | sak=kruka |
| 3:15 | toast | guld | ✅ |
| 3:15 | händelse | printKlar | sak=kruka n=7 |
| 3:15 | händelse | tagitUrPrint | sak=kruka n=1 |
| 3:23 | aliSalt | ali | 105 |
| 3:28 | skratt | du | falsk tuta |
| 3:40 | upplåst | mala | kvarnmotor |
| 3:40 | brott | RESERV | kvarnmotor (mala 16 av 10) |
| 3:40 | händelse | upplast | id=kvarnmotor flask=mala |
| 3:40 | paket |  | sms |
| 3:40 | väntar | ali | Ali här. En motor? Jag har en. Från en gammal tvättmaskin. Den centrifugerar fortfarande om man ber snällt. |
| 3:49 | händelse | printStart | sak=kruka |
| 3:54 | toast | guld | ✅ |
| 3:54 | händelse | printKlar | sak=kruka n=8 |
| 3:54 | händelse | tagitUrPrint | sak=kruka n=1 |
| 4:00 | väntar | mamma | Har du frusit än? |
| 4:00 | sak | ali | Ali här. En motor? Jag har en. Från en gammal tvättmaskin. Den centrifugerar fortfarande om man ber snällt. |
| 4:00 | sms | ali | Ali här. En motor? Jag har en. Från en gammal tvättmaskin. Den centrifugerar fortfarande om man ber snällt. |
| 4:00 | sms-bubbla | ali | Ali här. En motor? Jag har en. Från en gammal tvättmaskin. Den centrifugerar fortfarande om man ber snällt. |
| 4:00 | röst | ali | Ali här. En motor? Jag har en. Från en gammal tvättmaskin. Den centrifugerar fortfarande om man ber snällt. · STORY |
| 4:01 | aliSalt | ali | 105 |
| 4:09 | klar | ali | Ali här. En motor? Jag har en. Från en gammal tvättmaskin. Den centrifugerar fortfarande om man ber snällt. |
| 4:13 | toast | guld | 3D-modell köpt – printa kvarnmotor på skrivaren |
| 4:13 | händelse | kopt | sak=kvarnmotor |
| 4:14 | händelse | malKlart | id=kopMotor del=Dag 2 – Tippen och Rolf nasta=monteraMotor |
| 4:14 | struken | kedja | motorKopt |
| 4:14 | väntar | du | Motorn ska sitta där veven sitter. Jag printar den först. |
| 4:14 | målruta |  | Printa kvarnmotorn till kvarnen |
| 4:14 | MÅL |  | Printa kvarnmotorn till kvarnen |
| 4:14 | sak | du | Motorn ska sitta där veven sitter. Jag printar den först. |
| 4:14 | pil |  | Printa kvarnmotorn till kvarnen |
| 4:14 | notis | tanke | 💭 Motorn ska sitta där veven sitter. Jag printar den först. |
| 4:14 | röst | du | Motorn ska sitta där veven sitter. Jag printar den först. · MÅL |
| 4:15 | nick |  | nick:22 |
| 4:18 | kvittens-bock |  | ✓ Köp kvarnmotorn hos Ali (50 kr) |
| 4:19 | klar | du | Motorn ska sitta där veven sitter. Jag printar den först. |
| 4:28 | händelse | printStart | sak=byggsats:kvarnmotor |
| 4:30 | händelse | printKlar | sak=byggsats:kvarnmotor n=1 |
| 4:30 | toast | guld | ✅ |
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
| 4:36 | händelse | malKlart | id=monteraMotor del=Dag 2 – Tippen och Rolf nasta=kopSack |
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
| 5:02 | händelse | malKlart | id=kopSack del=Dag 2 – Tippen och Rolf nasta=n1-stada-klart-garden |
| 5:02 | händelse | malKlart | id=n1-stada-klart-garden del=Dag 2 – Tippen och Rolf nasta=rolf0-brev |
| 5:02 | väntar | du | Gården är STÄDAD. Av mig. Frivilligt. Mamma skulle aldrig tro det. |
| 5:02 | väntar | du | Vänta på sopbilen. Den lämnar något. |
| 5:02 | MÅL |  | Vänta på sopbilen. Den lämnar något. |
| 5:04 | klar | info:guld | 🗑️ Sopsäcken är över axeln! Du bär 10 skräp nu. |
| 5:04 | sak | du | Gården är STÄDAD. Av mig. Frivilligt. Mamma skulle aldrig tro det. |
| 5:04 | kvitto-visas | du | Gården är STÄDAD. Av mig. Frivilligt. Mamma skulle aldrig tro det. |
| 5:04 | lapp | 📔 Dagbok | Gården är STÄDAD. Av mig. Frivilligt. Mamma skulle aldrig tro det. |
| 5:04 | meddelande | du | Gården är STÄDAD. Av mig. Frivilligt. Mamma skulle aldrig tro det. |
| 5:04 | dagbokkort | du | Gården är STÄDAD. Av mig. Frivilligt. Mamma skulle aldrig tro det. |
| 5:04 | röst | du | Gården är STÄDAD. Av mig. Frivilligt. Mamma skulle aldrig tro det. · STORY |
| 5:11 | händelse | brevLast | id=gard |
| 5:11 | klar | du | Gården är STÄDAD. Av mig. Frivilligt. Mamma skulle aldrig tro det. |
| 5:11 | målruta |  | Vänta på sopbilen. Den lämnar något. |
| 5:12 | sak | du | Vänta på sopbilen. Den lämnar något. |
| 5:12 | pil |  | Vänta på sopbilen. Den lämnar något. |
| 5:12 | röst | du | Vänta på sopbilen. Den lämnar något. · MÅL |
| 5:14 | händelse | printStart | sak=kruka |
| 5:15 | klar | du | Vänta på sopbilen. Den lämnar något. |
| 5:17 | struken | ali | Ali här. Ännu en ritning som blev på riktigt: Kvarnmotor. Semesterkassan växer. Livet växer. |
| 5:17 | sak |  | (läget ändras) |
| 5:17 | toast | guld | ✅ |
| 5:17 | händelse | printKlar | sak=kruka n=9 |
| 5:17 | klar |  | (läget ändras) |
| 5:17 | händelse | tagitUrPrint | sak=kruka n=1 |
| 5:21 | sak | du | Rolf… gubben i sopbilen. Han har tippen bredvid. Han verkar schysst. |
| 5:21 | notis | tanke | 💭 Rolf… gubben i sopbilen. Han har tippen bredvid. Han verkar schysst. |
| 5:21 | röst | du | Rolf… gubben i sopbilen. Han har tippen bredvid. Han verkar schysst. · STORY |
| 5:23 | scenInfo | gard | Lite skräp ramlade av flaket på gården |
| 5:24 | aliSalt | ali | 105 |
| 5:26 | klar | du | Rolf… gubben i sopbilen. Han har tippen bredvid. Han verkar schysst. |
| 5:35 | händelse | printStart | sak=kruka |
| 5:38 | toast | guld | ✅ |
| 5:38 | händelse | printKlar | sak=kruka n=10 |
| 5:38 | händelse | tagitUrPrint | sak=kruka n=1 |
| 5:40 | upplåst | skrivare | rullstall |
| 5:40 | brott | UPPLÅST | rullstall (skrivare 218 av 75) |
| 5:40 | händelse | upplast | id=rullstall flask=skrivare |
| 5:40 | paket |  | tanke → sms |
| 5:40 | tanke | du | Kvarnen står och väntar för att hållaren är full. Om den rymde fler rullar kunde den mala hela tiden. |
| 5:40 | väntar | du | Kvarnen står och väntar för att hållaren är full. Om den rymde fler rullar kunde den mala hela tiden. |
| 5:40 | väntar | ali | Ali här. Rullställ. Fyra rullar i stället för en. Har ett på hyllan. |
| 5:44 | sak | ali | Ali här. Rullställ. Fyra rullar i stället för en. Har ett på hyllan. |
| 5:44 | sms | ali | Ali här. Rullställ. Fyra rullar i stället för en. Har ett på hyllan. |
| 5:44 | sms-bubbla | ali | Ali här. Rullställ. Fyra rullar i stället för en. Har ett på hyllan. |
| 5:44 | röst | ali | Ali här. Rullställ. Fyra rullar i stället för en. Har ett på hyllan. · STORY |
| 5:46 | aliSalt | ali | 105 |
| 5:50 | klar | ali | Ali här. Rullställ. Fyra rullar i stället för en. Har ett på hyllan. |
| 5:59 | händelse | printStart | sak=kruka |
| 6:02 | toast | guld | ✅ |
| 6:02 | händelse | printKlar | sak=kruka n=11 |
| 6:25 | sak | du | Kvarnen står och väntar för att hållaren är full. Om den rymde fler rullar kunde den mala hela tiden. |
| 6:25 | notis | tanke | 💭 Kvarnen står och väntar för att hållaren är full. Om den rymde fler rullar kunde den mala hela tiden. |
| 6:25 | röst | du | Kvarnen står och väntar för att hållaren är full. Om den rymde fler rullar kunde den mala hela tiden. · STORY |
| 6:25 | händelse | tagitUrPrint | sak=kruka n=1 |
| 6:33 | klar | du | Kvarnen står och väntar för att hållaren är full. Om den rymde fler rullar kunde den mala hela tiden. |
| 6:34 | aliSalt | ali | 105 |
| 6:44 | händelse | printStart | sak=kruka |
| 6:47 | toast | guld | ✅ |
| 6:47 | händelse | printKlar | sak=kruka n=12 |
| 6:47 | händelse | tagitUrPrint | sak=kruka n=1 |
| 6:50 | struken | ali | Ali här. Såg skylten. Stavningen är rätt. Det är mer än många. |
| 6:55 | aliSalt | ali | 105 |
| 7:03 | skratt | du | falsk tuta |
| 7:05 | händelse | printStart | sak=kruka |
| 7:06 | toast | fel | Ingen ström – trampa cykeln |
| 7:09 | toast | guld | ✅ |
| 7:09 | händelse | printKlar | sak=kruka n=13 |
| 7:09 | händelse | tagitUrPrint | sak=kruka n=1 |
| 7:12 | väntar | värld:TUUT TUUT! | TUUT TUUT! |
| 7:12 | paket |  | tanke → ge |
| 7:12 | tanke | du | Flaggan är uppe. Rolf har lämnat något. |
| 7:12 | väntar | du | Flaggan är uppe. Rolf har lämnat något. |
| 7:12 | väntar |  | (läget ändras) |
| 7:12 | sak | värld:TUUT TUUT! | TUUT TUUT! |
| 7:12 | bubbla |  | TUUT TUUT! |
| 7:15 | klar | värld:TUUT TUUT! | TUUT TUUT! |
| 7:17 | aliSalt | ali | 105 |
| 7:23 | sak | du | Flaggan är uppe. Rolf har lämnat något. |
| 7:23 | notis | tanke | 💭 Flaggan är uppe. Rolf har lämnat något. |
| 7:23 | röst | du | Flaggan är uppe. Rolf har lämnat något. · STORY |
| 7:25 | skratt | du | falsk tuta |
| 7:26 | klar | du | Flaggan är uppe. Rolf har lämnat något. |
| 7:27 | väntar | rolf | Såg att du printar grejer. Kan du göra en sån hä? Kall öl ä viktigt. /Rolf​ |
| 7:27 | paket |  | ge |
| 7:27 | väntar |  | (läget ändras) |
| 7:27 | händelse | malKlart | id=rolf0-brev del=Dag 2 – Tippen och Rolf nasta=rolf0-printa |
| 7:27 | väntar | du | Printa ölhållare med kylklamp. |
| 7:27 | MÅL |  | Printa ölhållare med kylklamp |
| 7:28 | sak | rolf | Såg att du printar grejer. Kan du göra en sån hä? Kall öl ä viktigt. /Rolf​ |
| 7:28 | lapp | Brev från Rolf | Såg att du printar grejer. Kan du göra en sån hä? Kall öl ä viktigt. /Rolf​ |
| 7:28 | röst | rolf | Såg att du printar grejer. Kan du göra en sån hä? Kall öl ä viktigt. /Rolf​ · STORY |
| 7:30 | målruta |  | Printa ölhållare med kylklamp |
| 7:30 | händelse | printStart | sak=olhallare |
| 7:30 | händelse | malKlart | id=rolf0-printa del=Dag 2 – Tippen och Rolf nasta=rolf0-ge |
| 7:30 | väntar | du | Ge Rolf ölhållare med kylklamp. |
| 7:31 | MÅL |  | Ge Rolf ölhållare med kylklamp |
| 7:33 | toast | guld | ✅ |
| 7:33 | händelse | printKlar | sak=olhallare n=1 |
| 7:34 | händelse | tagitUrPrint | sak=olhallare n=1 |
| 7:34 | målruta |  | Ge Rolf ölhållare med kylklamp |
| 7:34 | kvittens-bock |  | ✓ Printa ölhållare med kylklamp |
| 7:34 | klar | rolf | Såg att du printar grejer. Kan du göra en sån hä? Kall öl ä viktigt. /Rolf​ |
| 7:34 | händelse | brevLast | id=rolf:0 |
| 7:36 | upplåst | skrivare | trim_skrivare |
| 7:36 | brott | UPPLÅST | trim_skrivare (skrivare 75 av 75) |
| 7:36 | händelse | upplast | id=trim_skrivare flask=skrivare |
| 7:36 | paket |  | sms |
| 7:36 | väntar | ali | Ali här. Skrivartrim. Jag skruvade på min egen skrivare i natt. Den går fortare nu. Nästan för fort. |
| 7:36 | struken | du | Printa ölhållare med kylklamp. |
| 7:36 | sak |  | (läget ändras) |
| 7:37 | klar |  | (läget ändras) |
| 7:37 | sak | du | Ge Rolf ölhållare med kylklamp. |
| 7:37 | pil |  | Ge Rolf ölhållare med kylklamp |
| 7:37 | röst | du | Ge Rolf ölhållare med kylklamp. · MÅL |
| 7:39 | klar | du | Ge Rolf ölhållare med kylklamp. |
| 7:43 | händelse | lagtIPostlada | sak=olhallare rolf=0 jobb=false |
| 7:43 | struken | kedja | rolf0 |
| 7:43 | paket |  | tanke |
| 7:43 | tanke | du | Flaggan uppe. Nu får Rolf hämta den. |
| 7:43 | väntar | du | Flaggan uppe. Nu får Rolf hämta den. |
| 7:43 | sak | du | Flaggan uppe. Nu får Rolf hämta den. |
| 7:43 | notis | tanke | 💭 Flaggan uppe. Nu får Rolf hämta den. |
| 7:43 | röst | du | Flaggan uppe. Nu får Rolf hämta den. · REAKTION |
| 7:43 | händelse | malKlart | id=rolf0-ge del=Dag 2 – Tippen och Rolf nasta=vindsnurra |
| 7:43 | väntar | du | En vindsnurra på skjulets tak. Då blir det ström när det blåser. |
| 7:43 | MÅL |  | Trampa, printa och sälj |
| 7:46 | klar | du | Flaggan uppe. Nu får Rolf hämta den. |
| 7:46 | målruta |  | Trampa, printa och sälj |
| 7:47 | kvittens-bock |  | ✓ Ge Rolf ölhållare med kylklamp |
| 7:49 | sak | du | En vindsnurra på skjulets tak. Då blir det ström när det blåser. |
| 7:49 | pil |  | Trampa, printa och sälj |
| 7:49 | notis | tanke | 💭 En vindsnurra på skjulets tak. Då blir det ström när det blåser. |
| 7:49 | röst | du | En vindsnurra på skjulets tak. Då blir det ström när det blåser. · MÅL |
| 7:51 | händelse | printStart | sak=kruka |
| 7:54 | klar | du | En vindsnurra på skjulets tak. Då blir det ström när det blåser. |
| 7:55 | toast | guld | ✅ |
| 7:55 | händelse | printKlar | sak=kruka n=14 |
| 8:20 | sak |  | (läget ändras) |
| 8:20 | brev | rolf | rolf:0 |
| 8:20 | klar |  | (läget ändras) |
| 8:21 | händelse | tagitUrPrint | sak=kruka n=1 |
| 8:24 | sak | ali | Ali här. Skrivartrim. Jag skruvade på min egen skrivare i natt. Den går fortare nu. Nästan för fort. |
| 8:24 | sms | ali | Ali här. Skrivartrim. Jag skruvade på min egen skrivare i natt. Den går fortare nu. Nästan för fort. |
| 8:24 | sms-bubbla | ali | Ali här. Skrivartrim. Jag skruvade på min egen skrivare i natt. Den går fortare nu. Nästan för fort. |
| 8:24 | röst | ali | Ali här. Skrivartrim. Jag skruvade på min egen skrivare i natt. Den går fortare nu. Nästan för fort. · STORY |
| 8:27 | butiksbubbla | ali | Rolf gav mig en kanna. Som min farmors. Jag ritade en sak åt honom. Säg inget, han gråter lätt. |
| 8:29 | aliSalt | ali | 105 |
| 8:29 | röst | ali | Rolf gav mig en kanna. Som min farmors. Jag ritade en sak åt honom. Säg inget, han gråter lätt. · STORY |
| 8:34 | klar | ali | Ali här. Skrivartrim. Jag skruvade på min egen skrivare i natt. Den går fortare nu. Nästan för fort. |
| 8:42 | händelse | printStart | sak=kruka |
| 8:45 | toast | guld | ✅ |
| 8:45 | händelse | printKlar | sak=kruka n=15 |
| 8:46 | händelse | tagitUrPrint | sak=kruka n=1 |
| 8:53 | aliSalt | ali | 105 |
| 8:53 | scenInfo | gard | Vinden blåste in skräp från vägen |
| 8:53 | tanke | du | Det har blåst in lite skräp från vägen. |
| 8:53 | väntar | du | Det har blåst in lite skräp från vägen. |
| 8:54 | sak | du | Det har blåst in lite skräp från vägen. |
| 8:54 | notis | tanke | 💭 Det har blåst in lite skräp från vägen. |
| 8:54 | röst | du | Det har blåst in lite skräp från vägen. · REAKTION |
| 8:57 | klar | du | Det har blåst in lite skräp från vägen. |
| 9:06 | händelse | printStart | sak=kruka |
| 9:07 | toast | fel | Ingen ström – trampa cykeln |
| 9:10 | toast | guld | ✅ |
| 9:10 | händelse | printKlar | sak=kruka n=16 |
| 9:11 | händelse | tagitUrPrint | sak=kruka n=1 |
| 9:15 | paket |  | tanke |
| 9:15 | tanke | du | Jaha, Rolf har hämtat ölhållare med kylklamp. |
| 9:15 | väntar | du | Jaha, Rolf har hämtat ölhållare med kylklamp. |
| 9:15 | sak | du | Jaha, Rolf har hämtat ölhållare med kylklamp. |
| 9:15 | notis | tanke | 💭 Jaha, Rolf har hämtat ölhållare med kylklamp. |
| 9:15 | röst | du | Jaha, Rolf har hämtat ölhållare med kylklamp. · REAKTION |
| 9:18 | aliSalt | ali | 105 |
| 9:19 | klar | du | Jaha, Rolf har hämtat ölhållare med kylklamp. |
| 9:28 | händelse | printStart | sak=kruka |
| 9:31 | väntar | info:guld | 🚛 Sopbilen tippade en ny last på soptippen! |
| 9:31 | skratt | du | däcket rullar iväg |
| 9:31 | paket |  | tanke |
| 9:31 | tanke | du | Däcket ville inte stanna. Jag förstår det. |
| 9:31 | väntar | du | Däcket ville inte stanna. Jag förstår det. |
| 9:31 | sak | info:guld | 🚛 Sopbilen tippade en ny last på soptippen! |
| 9:31 | kvitto-visas | info:guld | 🚛 Sopbilen tippade en ny last på soptippen! |
| 9:31 | toast | guld | 🚛 Sopbilen tippade en ny last på soptippen! |
| 9:31 | toast | guld | ✅ |
| 9:31 | händelse | printKlar | sak=kruka n=17 |
| 9:31 | händelse | tagitUrPrint | sak=kruka n=1 |
| 9:33 | klar | info:guld | 🚛 Sopbilen tippade en ny last på soptippen! |
| 9:39 | aliSalt | ali | 105 |
| 9:43 | sak | du | Däcket ville inte stanna. Jag förstår det. |
| 9:43 | notis | tanke | 💭 Däcket ville inte stanna. Jag förstår det. |
| 9:43 | röst | du | Däcket ville inte stanna. Jag förstår det. · REAKTION |
| 9:46 | klar | du | Däcket ville inte stanna. Jag förstår det. |
| 9:48 | händelse | printStart | sak=kruka |
| 9:49 | upplåst | trampa | vindsnurra |
| 9:49 | brott | UPPLÅST | vindsnurra (trampa 32 av 10) |
| 9:49 | händelse | upplast | id=vindsnurra flask=trampa |
| 9:49 | paket |  | tanke → sms |
| 9:49 | tanke | du | Mina ben är slut. Det blåser hela tiden här ute. Tänk om vinden kunde trampa åt mig. |
| 9:49 | väntar | du | Mina ben är slut. Det blåser hela tiden här ute. Tänk om vinden kunde trampa åt mig. |
| 9:49 | väntar | ali | Ali här. Vindsnurra till cykeln. Vinden trampar åt dig. Den är lat, men den jobbar gratis. |
| 9:52 | toast | guld | ✅ |
| 9:52 | händelse | printKlar | sak=kruka n=18 |
| 9:53 | händelse | tagitUrPrint | sak=kruka n=1 |
| 9:55 | sak | du | Mina ben är slut. Det blåser hela tiden här ute. Tänk om vinden kunde trampa åt mig. |
| 9:55 | notis | tanke | 💭 Mina ben är slut. Det blåser hela tiden här ute. Tänk om vinden kunde trampa åt mig. |
| 9:55 | röst | du | Mina ben är slut. Det blåser hela tiden här ute. Tänk om vinden kunde trampa åt mig. · STORY |
| 10:00 | aliSalt | ali | 105 |
| 10:02 | klar | du | Mina ben är slut. Det blåser hela tiden här ute. Tänk om vinden kunde trampa åt mig. |
| 10:04 | struken | mamma | Har du frusit än? |
| 10:05 | toast | guld | 3D-modell köpt – printa vindsnurra till skjultaket på skrivaren |
| 10:05 | händelse | kopt | sak=vindsnurra |
| 10:05 | struken | ali | Ali här. Vindsnurra till cykeln. Vinden trampar åt dig. Den är lat, men den jobbar gratis. |
| 10:14 | händelse | printStart | sak=byggsats:vindsnurra |
| 10:17 | toast | fel | Ingen ström – trampa cykeln |
| 10:19 | händelse | printKlar | sak=byggsats:vindsnurra n=1 |
| 10:19 | toast | guld | ✅ |
| 10:20 | väntar | info:guld | 🌬️ Vindsnurran ligger i handen – klicka på skjulet för att sätta den på taket |
| 10:20 | händelse | tagitUrPrint | sak=byggsats:vindsnurra n=1 |
| 10:20 | sak | info:guld | 🌬️ Vindsnurran ligger i handen – klicka på skjulet för att sätta den på taket |
| 10:20 | kvitto-visas | info:guld | 🌬️ Vindsnurran ligger i handen – klicka på skjulet för att sätta den på taket |
| 10:20 | toast | guld | 🌬️ Vindsnurran ligger i handen – klicka på skjulet för att sätta den på taket |
| 10:22 | klar | info:guld | 🌬️ Vindsnurran ligger i handen – klicka på skjulet för att sätta den på taket |
| 10:28 | händelse | placerat | sak=vindsnurra |
| 10:28 | kvittens | du | Den snurrar! Långsamt. Men den snurrar. |
| 10:28 | varför | du | Om det regnar i natt drunknar jag. Ett tak. |
| 10:28 | väntar | du | Den snurrar! Långsamt. Men den snurrar. |
| 10:28 | väntar | info:guld | 🌬️ Vindsnurran sitter på taket – den trampar cykeln åt dig när det blåser |
| 10:28 | monterat | du | byggsats:vindsnurra |
| 10:28 | händelse | monterat | sak=vindsnurra |
| 10:28 | sak | du | Den snurrar! Långsamt. Men den snurrar. |
| 10:28 | notis | tanke | 💭 Den snurrar! Långsamt. Men den snurrar. |
| 10:28 | röst | du | Den snurrar! Långsamt. Men den snurrar. · STORY |
| 10:28 | händelse | malKlart | id=vindsnurra del=Dag 2 – Tippen och Rolf nasta=n1-bygg-dorr-skjulet |
| 10:28 | väntar | du | Det drar från dörrhålet. En dörr kan jag printa. |
| 10:28 | MÅL |  | Bygg en dörr till skjulet |
| 10:31 | klar | du | Den snurrar! Långsamt. Men den snurrar. |
| 10:31 | sak | info:guld | 🌬️ Vindsnurran sitter på taket – den trampar cykeln åt dig när det blåser |
| 10:31 | kvitto-visas | info:guld | 🌬️ Vindsnurran sitter på taket – den trampar cykeln åt dig när det blåser |
| 10:31 | toast | guld | 🌬️ Vindsnurran sitter på taket – den trampar cykeln åt dig när det blåser |
| 10:32 | målruta |  | Bygg en dörr till skjulet |
| 10:33 | klar | info:guld | 🌬️ Vindsnurran sitter på taket – den trampar cykeln åt dig när det blåser |
| 10:35 | sak | du | Det drar från dörrhålet. En dörr kan jag printa. |
| 10:35 | pil |  | Bygg en dörr till skjulet |
| 10:35 | notis | tanke | 💭 Det drar från dörrhålet. En dörr kan jag printa. |
| 10:35 | röst | du | Det drar från dörrhålet. En dörr kan jag printa. · MÅL |
| 10:36 | nick |  | nick:29 |
| 10:39 | klar | du | Det drar från dörrhålet. En dörr kan jag printa. |
| 10:47 | toast | guld | 3D-modell köpt – printa dörr på skrivaren |
| 10:47 | händelse | kopt | sak=dorr |
| 10:56 | händelse | printStart | sak=byggsats:dorr |
| 10:59 | toast | bra | Del 1 av 2 klar |
| 10:59 | väntar | notis:Storebrors skrivare: Del 1 av 2 klar | Storebrors skrivare: Del 1 av 2 klar |
| 10:59 | sak | notis:Storebrors skrivare: Del 1 av 2 klar | Storebrors skrivare: Del 1 av 2 klar |
| 10:59 | notis | bra | Storebrors skrivare: Del 1 av 2 klar |
| 11:02 | klar | notis:Storebrors skrivare: Del 1 av 2 klar | Storebrors skrivare: Del 1 av 2 klar |
| 11:03 | händelse | printKlar | sak=byggsats:dorr n=1 |
| 11:03 | toast | guld | ✅ |
| 11:11 | skratt | du | falsk tuta |
| 11:25 | scenInfo | gard | Lite skräp ramlade av flaket på gården |
| 11:31 | händelse | tagitUrPrint | sak=byggsats:dorr n=1 |
| 11:31 | paket |  | sms |
| 11:31 | väntar | ali | Ali här. Jag har inte sovit. Inte på grund av AI:n. På grund av dig. Du bygger saker av sopor. Jag har en hel butik och bygger ingenting. Det ska ändras. Kanske. Troligen. |
| 11:32 | väntar | värld:TUUT! Tjena! | TUUT! Tjena! |
| 11:32 | sak | värld:TUUT! Tjena! | TUUT! Tjena! |
| 11:32 | bubbla |  | TUUT! Tjena! |
| 11:35 | klar | värld:TUUT! Tjena! | TUUT! Tjena! |
| 11:36 | väntar | info:guld | Dörr på plats! Trivsel +8 · Ali betalar nu +0 % |
| 11:36 | sak | info:guld | Dörr på plats! Trivsel +8 · Ali betalar nu +0 % |
| 11:36 | kvitto-visas | info:guld | Dörr på plats! Trivsel +8 · Ali betalar nu +0 % |
| 11:36 | toast | guld | Dörr på plats! Trivsel +8 · Ali betalar nu +0 % |
| 11:36 | händelse | malKlart | id=n1-bygg-dorr-skjulet del=Dag 2 – Tippen och Rolf nasta=sov2 |
| 11:36 | paket |  | lapp |
| 11:36 | väntar | du | Dag 2 är slut. Nu vet Ali att jag bor HÄR. Taket läcker. I morgon. |
| 11:36 | paket |  | sms |
| 11:36 | väntar | bror | Mamma ringde mig fyra gånger förresten. Snyggt jobbat 😂 |
| 11:36 | skratt | bror | Mamma ringde mig fyra gånger förresten. |
| 11:36 | väntar | du | Klart för idag – sov när du vill. |
| 11:36 | MÅL |  | Klart för idag – sov när du vill |
| 11:38 | klar | info:guld | Dörr på plats! Trivsel +8 · Ali betalar nu +0 % |
| 11:38 | sak | du | Dag 2 är slut. Nu vet Ali att jag bor HÄR. Taket läcker. I morgon. |
| 11:38 | kvitto-visas | du | Dag 2 är slut. Nu vet Ali att jag bor HÄR. Taket läcker. I morgon. |
| 11:38 | lapp | 📔 Dagbok | Dag 2 är slut. Nu vet Ali att jag bor HÄR. Taket läcker. I morgon. |
| 11:38 | meddelande | du | Dag 2 är slut. Nu vet Ali att jag bor HÄR. Taket läcker. I morgon. |
| 11:38 | dagbokkort | du | Dag 2 är slut. Nu vet Ali att jag bor HÄR. Taket läcker. I morgon. |
| 11:38 | röst | du | Dag 2 är slut. Nu vet Ali att jag bor HÄR. Taket läcker. I morgon. · STORY |
| 11:46 | händelse | brevLast | id=kvall2 |
| 11:46 | klar | du | Dag 2 är slut. Nu vet Ali att jag bor HÄR. Taket läcker. I morgon. |
| 11:46 | väntar | notis:🌇 Klockan är 21. Ali slår igen luckan.  | 🌇 Klockan är 21. Ali slår igen luckan. Dagens jobb är klart – gå in i skjulet och sov i sängen. |
| 11:46 | målruta |  | Klart för idag – sov när du vill |
| 11:46 | sak | du | Klart för idag – sov när du vill. |
| 11:46 | pil |  | Klart för idag – sov när du vill |
| 11:46 | röst | du | Klart för idag – sov när du vill. · MÅL |
| 11:49 | klar | du | Klart för idag – sov när du vill. |

<details><summary>Botens handlingar dag 2</summary>

- 0:00 — dag 2 börjar — (210 kr)
- 0:15 popup: "FORTSÄTT" (210 kr)
- 0:22 popup: "FORTSÄTT" (210 kr)
- 0:30 tjänar pengar till väntar på flaskhalsen för kvarnmotor: 210/250 kr → printar blomkruka (105 kr) (210 kr)
- 0:34 gå till skrivaren (19 m) (210 kr)
- 0:36 printar Blomkruka (210 kr)
- 0:38 gå till cykeln (2 m) (210 kr)
- 0:41 tar ut 1 st ur skrivaren (210 kr)
- 0:46 gå till Ali (26 m) (210 kr)
- 0:46 öppnar Alis butik – sälja (210 kr)
- 0:48 säljer hos Ali: +105 kr (315 kr)
- 0:55 tjänar pengar till väntar på flaskhalsen för kvarnmotor: 315/355 kr → printar blomkruka (105 kr) (315 kr)
- 1:00 gå till skrivaren (25 m) (315 kr)
- 1:02 printar Blomkruka (315 kr)
- 1:05 tar ut 1 st ur skrivaren (315 kr)
- 1:10 gå till Ali (25 m) (315 kr)
- 1:10 öppnar Alis butik – sälja (315 kr)
- 1:12 säljer hos Ali: +105 kr (420 kr)
- 1:14 tjänar pengar till väntar på flaskhalsen för kvarnmotor: 420/460 kr → printar blomkruka (105 kr) (420 kr)
- 1:27 popup: "FORTSÄTT" (420 kr)
- 1:34 plockar 6 skräp på gården (bär max 6) (420 kr)
- 1:40 gå till kvarnen (29 m) (420 kr)
- 1:44 gå till skrivaren (2 m) (420 kr)
- 1:46 printar Blomkruka (420 kr)
- 1:48 gå till cykeln (2 m) (420 kr)
- 1:51 tar ut 1 st ur skrivaren (420 kr)
- 1:56 gå till Ali (26 m) (420 kr)
- 1:56 öppnar Alis butik – sälja (420 kr)
- 1:58 säljer hos Ali: +105 kr (525 kr)
- 2:07 tjänar pengar till väntar på flaskhalsen för kvarnmotor: 525/565 kr → printar blomkruka (105 kr) (525 kr)
- 2:12 gå till skrivaren (25 m) (525 kr)
- 2:14 printar Blomkruka (525 kr)
- 2:17 tar ut 1 st ur skrivaren (525 kr)
- 2:23 gå till Ali (25 m) (525 kr)
- 2:23 öppnar Alis butik – sälja (525 kr)
- 2:24 säljer hos Ali: +105 kr (630 kr)
- 2:26 tjänar pengar till väntar på flaskhalsen för kvarnmotor: 630/670 kr → printar blomkruka (105 kr) (630 kr)
- 2:39 plockar 6 skräp på gården (bär max 6) (630 kr)
- 2:46 gå till kvarnen (37 m) (630 kr)
- 2:50 gå till skrivaren (1 m) (630 kr)
- 2:52 printar Blomkruka (630 kr)
- 2:54 gå till cykeln (2 m) (630 kr)
- 2:57 tar ut 1 st ur skrivaren (630 kr)
- 3:02 gå till Ali (26 m) (630 kr)
- 3:02 öppnar Alis butik – sälja (630 kr)
- 3:04 säljer hos Ali: +105 kr (735 kr)
- 3:06 tjänar pengar till väntar på flaskhalsen för kvarnmotor: 735/775 kr → printar blomkruka (105 kr) (735 kr)
- 3:11 gå till skrivaren (25 m) (735 kr)
- 3:12 printar Blomkruka (735 kr)
- 3:16 tar ut 1 st ur skrivaren (735 kr)
- 3:21 gå till Ali (25 m) (735 kr)
- 3:21 öppnar Alis butik – sälja (735 kr)
- 3:23 säljer hos Ali: +105 kr (840 kr)
- 3:25 tjänar pengar till väntar på flaskhalsen för kvarnmotor: 840/880 kr → printar blomkruka (105 kr) (840 kr)
- 3:36 plockar 3 skräp på gården (bär max 6) (840 kr)
- 3:43 gå till kvarnen (35 m) (840 kr)
- 3:48 gå till skrivaren (2 m) (840 kr)
- 3:49 printar Blomkruka (840 kr)
- 3:52 gå till cykeln (2 m) (840 kr)
- 3:54 tar ut 1 st ur skrivaren (840 kr)
- 4:00 gå till Ali (26 m) (840 kr)
- 4:00 öppnar Alis butik – sälja (840 kr)
- 4:02 säljer hos Ali: +105 kr (945 kr)
- 4:11 öppnar Alis butik – köpa kvarnmotor (945 kr)
- 4:14 köper kvarnmotor för 50 kr (895 kr)
- 4:26 gå till skrivaren (25 m) (895 kr)
- 4:28 printar Kvarnmotor (895 kr)
- 4:31 tar ut 1 st ur skrivaren (895 kr)
- 4:36 gå till skruva fast kvarnmotorn (3 m) (895 kr)
- 4:49 gå till Rolfs sopsäck (16 m) (895 kr)
- 5:02 tar på korg (895 kr)
- 5:02 tjänar pengar till väntar på sopbilen (BO): 895/955 kr → printar blomkruka (105 kr) (895 kr)
- 5:11 popup: "FORTSÄTT" (895 kr)
- 5:12 gå till skrivaren (12 m) (895 kr)
- 5:14 printar Blomkruka (895 kr)
- 5:15 gå till cykeln (1 m) (895 kr)
- 5:18 tar ut 1 st ur skrivaren (895 kr)
- 5:23 gå till Ali (25 m) (895 kr)
- 5:23 öppnar Alis butik – sälja (895 kr)
- 5:24 säljer hos Ali: +105 kr (1000 kr)
- 5:29 tjänar pengar till väntar på sopbilen (BO): 1000/1060 kr → printar blomkruka (105 kr) (1000 kr)
- 5:34 gå till skrivaren (25 m) (1000 kr)
- 5:35 printar Blomkruka (1000 kr)
- 5:39 tar ut 1 st ur skrivaren (1000 kr)
- 5:44 gå till Ali (25 m) (1000 kr)
- 5:44 öppnar Alis butik – sälja (1000 kr)
- 5:46 säljer hos Ali: +105 kr (1105 kr)
- 5:52 tjänar pengar till väntar på sopbilen (BO): 1105/1165 kr → printar blomkruka (105 kr) (1105 kr)
- 5:57 gå till skrivaren (25 m) (1105 kr)
- 5:59 printar Blomkruka (1105 kr)
- 6:00 gå till cykeln (1 m) (1105 kr)
- 6:17 plockar 7 skräp på gården (bär max 10) (1105 kr)
- 6:24 gå till kvarnen (35 m) (1105 kr)
- 6:25 gå till skrivaren (1 m) (1105 kr)
- 6:26 tar ut 1 st ur skrivaren (1105 kr)
- 6:32 gå till Ali (28 m) (1105 kr)
- 6:32 öppnar Alis butik – sälja (1105 kr)
- 6:34 säljer hos Ali: +105 kr (1210 kr)
- 6:37 tjänar pengar till väntar på sopbilen (BO): 1210/1270 kr → printar blomkruka (105 kr) (1210 kr)
- 6:42 gå till skrivaren (25 m) (1210 kr)
- 6:44 printar Blomkruka (1210 kr)
- 6:48 tar ut 1 st ur skrivaren (1210 kr)
- 6:53 gå till Ali (25 m) (1210 kr)
- 6:53 öppnar Alis butik – sälja (1210 kr)
- 6:55 säljer hos Ali: +105 kr (1315 kr)
- 6:58 tjänar pengar till väntar på sopbilen (BO): 1315/1375 kr → printar blomkruka (105 kr) (1315 kr)
- 7:03 gå till skrivaren (25 m) (1315 kr)
- 7:05 printar Blomkruka (1315 kr)
- 7:07 gå till cykeln (1 m) (1315 kr)
- 7:10 tar ut 1 st ur skrivaren (1315 kr)
- 7:15 gå till Ali (25 m) (1315 kr)
- 7:15 öppnar Alis butik – sälja (1315 kr)
- 7:17 säljer hos Ali: +105 kr (1420 kr)
- 7:27 gå till Rolfs postlåda (31 m) (1420 kr)
- 7:29 gå till skrivaren (7 m) (1420 kr)
- 7:30 printar Ölhållare med kylklamp (1420 kr)
- 7:34 tar ut 1 st ur skrivaren (1420 kr)
- 7:41 valj olhallare: true, vald olhallare, post {"l":null,"tr":null,"tm":[]}, nummer false (1420 kr)
- 7:43 gå till Rolfs postlåda (6 m) (1420 kr)
- 7:48 tjänar pengar till väntar på flaskhalsen för vindsnurra: 1420/1460 kr → printar blomkruka (105 kr) (1420 kr)
- 7:50 gå till skrivaren (6 m) (1420 kr)
- 7:51 printar Blomkruka (1420 kr)
- 7:53 gå till cykeln (1 m) (1420 kr)
- 8:12 plockar 6 skräp på gården (bär max 10) (1420 kr)
- 8:20 gå till kvarnen (39 m) (1420 kr)
- 8:21 gå till skrivaren (1 m) (1420 kr)
- 8:21 tar ut 1 st ur skrivaren (1420 kr)
- 8:27 gå till Ali (28 m) (1420 kr)
- 8:27 öppnar Alis butik – sälja (1420 kr)
- 8:29 säljer hos Ali: +105 kr (1525 kr)
- 8:36 tjänar pengar till väntar på flaskhalsen för vindsnurra: 1525/1565 kr → printar blomkruka (105 kr) (1525 kr)
- 8:41 gå till skrivaren (25 m) (1525 kr)
- 8:42 printar Blomkruka (1525 kr)
- 8:46 tar ut 1 st ur skrivaren (1525 kr)
- 8:52 gå till Ali (25 m) (1525 kr)
- 8:52 öppnar Alis butik – sälja (1525 kr)
- 8:53 säljer hos Ali: +105 kr (1630 kr)
- 8:59 tjänar pengar till väntar på flaskhalsen för vindsnurra: 1630/1670 kr → printar blomkruka (105 kr) (1630 kr)
- 9:05 gå till skrivaren (25 m) (1630 kr)
- 9:06 printar Blomkruka (1630 kr)
- 9:08 gå till cykeln (1 m) (1630 kr)
- 9:11 tar ut 1 st ur skrivaren (1630 kr)
- 9:17 gå till Ali (25 m) (1630 kr)
- 9:17 öppnar Alis butik – sälja (1630 kr)
- 9:19 säljer hos Ali: +105 kr (1735 kr)
- 9:21 tjänar pengar till väntar på flaskhalsen för vindsnurra: 1735/1775 kr → printar blomkruka (105 kr) (1735 kr)
- 9:26 gå till skrivaren (25 m) (1735 kr)
- 9:28 printar Blomkruka (1735 kr)
- 9:32 tar ut 1 st ur skrivaren (1735 kr)
- 9:37 gå till Ali (25 m) (1735 kr)
- 9:37 öppnar Alis butik – sälja (1735 kr)
- 9:39 säljer hos Ali: +105 kr (1840 kr)
- 9:41 tjänar pengar till väntar på flaskhalsen för vindsnurra: 1840/1880 kr → printar blomkruka (105 kr) (1840 kr)
- 9:46 gå till skrivaren (25 m) (1840 kr)
- 9:48 printar Blomkruka (1840 kr)
- 9:49 gå till cykeln (1 m) (1840 kr)
- 9:53 tar ut 1 st ur skrivaren (1840 kr)
- 9:58 gå till Ali (25 m) (1840 kr)
- 9:58 öppnar Alis butik – sälja (1840 kr)
- 10:00 säljer hos Ali: +105 kr (1945 kr)
- 10:04 öppnar Alis butik – köpa vindsnurra till skjultaket (1945 kr)
- 10:06 köper vindsnurra för 133 kr (1812 kr)
- 10:12 gå till skrivaren (25 m) (1812 kr)
- 10:14 printar Vindsnurra till skjultaket (1812 kr)
- 10:17 gå till cykeln (1 m) (1812 kr)
- 10:20 tar ut 1 st ur skrivaren (1812 kr)
- 10:28 gå till sätt vindsnurran på taket (20 m) (1812 kr)
- 10:46 gå till Ali (20 m) (1812 kr)
- 10:46 öppnar Alis butik – köpa dörr (1812 kr)
- 10:48 köper dorr för 120 kr (1692 kr)
- 10:54 gå till skrivaren (25 m) (1692 kr)
- 10:56 printar Dörr (2 delar) (1692 kr)
- 11:24 plockar 8 skräp på gården (bär max 10) (1692 kr)
- 11:30 gå till kvarnen (32 m) (1692 kr)
- 11:31 gå till skrivaren (1 m) (1692 kr)
- 11:32 tar ut 1 st ur skrivaren (1692 kr)
- 11:36 gå till skjulet (21 m) (1692 kr)
- 11:46 popup: "FORTSÄTT" (1692 kr)
- 11:51 gå till sängen (1 m) (1692 kr)

</details>

## Dag 3

| Tid | Källa | Vem | Text |
|---|---|---|---|
| 11:54 | vara | ali | ingen |
| 11:54 | händelse | malKlart | id=sov2 del=Dag 2 – Tippen och Rolf nasta=rolf1-brev |
| 11:54 | vara | ali | kruka |
| 11:54 | MÅL |  | Vänta på sopbilen. Den lämnar något. |
| 0:01 | händelse | dagenBorjar | dag=3 |
| 0:01 | meddelande | du | Dag 3. 19 dagar till jul. Utan tak regnar det in i natt. |
| 0:01 | dagbokkort | du | En skrivare till och taket · Dag 3. 19 dagar till jul. Utan tak regnar det in i natt. |
| 0:01 | röst | du | En skrivare till och taket. Dag 3. 19 dagar till jul. Utan tak regnar det in i natt. · STORY |
| 0:15 | händelse | morgonkortStangt | dag=3 |
| 0:15 | målruta |  | Vänta på sopbilen. Den lämnar något. |
| 0:21 | sak | du | (nytt mål i rutan) |
| 0:21 | pil |  | Vänta på sopbilen. Den lämnar något. |
| 0:21 | klar | du | (nytt mål i rutan) |
| 0:23 | struken | notis:🌇 Klockan är 21. Ali slår igen luckan.  | 🌇 Klockan är 21. Ali slår igen luckan. Dagens jobb är klart – gå in i skjulet och sov i sängen. |
| 0:23 | struken | ali | Ali här. Jag har inte sovit. Inte på grund av AI:n. På grund av dig. Du bygger saker av sopor. Jag har en hel butik och bygger ingenting. Det ska ändras. Kanske. Troligen. |
| 0:23 | struken | bror | Mamma ringde mig fyra gånger förresten. Snyggt jobbat 😂 |
| 0:23 | skratt | bror | Mamma ringde mig fyra gånger förresten. |
| 0:34 | väntar | rolf | Den funkar! Hä. Ta så mycke skräp du vill. /Rolf​ |
| 0:34 | sak | rolf | Den funkar! Hä. Ta så mycke skräp du vill. /Rolf​ |
| 0:34 | lapp | Brev från Rolf | Den funkar! Hä. Ta så mycke skräp du vill. /Rolf​ |
| 0:34 | röst | rolf | Den funkar! Hä. Ta så mycke skräp du vill. /Rolf​ · STORY |
| 0:35 | paket |  | tanke |
| 0:35 | tanke | du | Rolfs tipp. Hela högen. |
| 0:35 | väntar | du | Rolfs tipp. Hela högen. |
| 0:35 | monterat | du | byggsats:tippnyckel |
| 0:35 | händelse | monterat | sak=tippnyckel |
| 0:36 | tanke | du | En hel kanot. Kvarnen skulle äta upp sig själv. |
| 0:36 | väntar | du | En hel kanot. Kvarnen skulle äta upp sig själv. |
| 0:36 | scenInfo | du | Kameran sveper över tippen |
| 0:38 | morgonkort | ⏸️ Pausad | ⏸️ Pausad · Klicka för att fortsätta. |
| 0:38 | klar | rolf | Den funkar! Hä. Ta så mycke skräp du vill. /Rolf​ |
| 0:38 | händelse | brevLast | id=rolftack:0 |
| 0:40 | tanke | du | …Det här räcker i hundra år. |
| 0:40 | väntar | du | …Det här räcker i hundra år. |
| 0:41 | skratt | du | falsk tuta |
| 0:51 | sak | du | Rolfs tipp. Hela högen. |
| 0:51 | kvitto-visas | du | Rolfs tipp. Hela högen. |
| 0:51 | notis | tanke | 💭 Rolfs tipp. Hela högen. |
| 0:51 | röst | du | Rolfs tipp. Hela högen. · REAKTION |
| 0:52 | brott | SEN KVITTENS | 2.6 s sen: ”Rolfs tipp. Hela högen.” (ED13: monterat) |
| 0:53 | klar | du | Rolfs tipp. Hela högen. |
| 0:54 | struken | du | En hel kanot. Kvarnen skulle äta upp sig själv. |
| 0:57 | händelse | printStart | sak=kruka |
| 0:57 | paket |  | tanke |
| 0:57 | tanke | du | Kajsa. Ut ur skrivaren. Nu. |
| 0:57 | väntar | du | Kajsa. Ut ur skrivaren. Nu. |
| 0:57 | skratt | du | Kajsa i skrivaren |
| 1:00 | paket |  | tanke |
| 1:00 | tanke | du | Jaha. En kalsong. Använd. |
| 1:00 | väntar | du | Jaha. En kalsong. Använd. |
| 1:00 | skratt | du | kvarnen spottar |
| 1:02 | toast | guld | ✅ |
| 1:02 | händelse | printKlar | sak=kruka n=19 |
| 1:02 | händelse | tagitUrPrint | sak=kruka n=1 |
| 1:03 | sak | du | …Det här räcker i hundra år. |
| 1:03 | notis | tanke | 💭 …Det här räcker i hundra år. |
| 1:03 | röst | du | …Det här räcker i hundra år. · STORY |
| 1:05 | klar | du | …Det här räcker i hundra år. |
| 1:09 | röst | ali | Salam. Ja, ja, jag har nya grejer. Som vanligt. Varje dag. · STORY |
| 1:09 | butiksbubbla | ali | Salam. Ja, ja, jag har nya grejer. Som vanligt. Varje dag. |
| 1:10 | aliSalt | ali | 105 |
| 1:21 | händelse | printStart | sak=kruka |
| 1:21 | sak | du | Kajsa. Ut ur skrivaren. Nu. |
| 1:21 | notis | tanke | 💭 Kajsa. Ut ur skrivaren. Nu. |
| 1:21 | röst | du | Kajsa. Ut ur skrivaren. Nu. · REAKTION |
| 1:23 | klar | du | Kajsa. Ut ur skrivaren. Nu. |
| 1:26 | toast | guld | ✅ |
| 1:26 | händelse | printKlar | sak=kruka n=20 |
| 1:26 | händelse | tagitUrPrint | sak=kruka n=1 |
| 1:33 | aliSalt | ali | 105 |
| 1:34 | sak | du | Jaha. En kalsong. Använd. |
| 1:34 | notis | tanke | 💭 Jaha. En kalsong. Använd. |
| 1:34 | röst | du | Jaha. En kalsong. Använd. · REAKTION |
| 1:37 | klar | du | Jaha. En kalsong. Använd. |
| 1:46 | väntar | mamma | Har du sovit nåt? Du har väl tandborste? Och äter du? Svara inte, jag vet att du är arg. ❤️ /Mamma |
| 1:46 | händelse | printStart | sak=kruka |
| 1:51 | toast | guld | ✅ |
| 1:51 | händelse | printKlar | sak=kruka n=21 |
| 1:51 | händelse | tagitUrPrint | sak=kruka n=1 |
| 1:55 | skratt | du | däcket rullar iväg |
| 1:59 | aliSalt | ali | 105 |
| 1:59 | röst | ali | Dina krukor säljer. Tanterna i kvarteret älskar dem. · STORY |
| 1:59 | butiksbubbla | ali | Dina krukor säljer. Tanterna i kvarteret älskar dem. |
| 2:09 | händelse | printStart | sak=kruka |
| 2:14 | toast | guld | ✅ |
| 2:14 | händelse | printKlar | sak=kruka n=22 |
| 2:26 | väntar | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått en DÖRR. Och vindsnurra till skjultaket. Mer säger jag inte. Gunnar vet. |
| 2:26 | radio | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått en DÖRR. Och vindsnurra till skjultaket. Mer säger jag inte. Gunnar vet. |
| 2:26 | skratt | du | Radio-Kjelle |
| 2:42 | sak | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått en DÖRR. Och vindsnurra till skjultaket. Mer säger jag inte. Gunnar vet. |
| 2:42 | notis |  | 📻 Radio Tippen: Radio Tippen, Kjelle här. Skjulet vid tippen har fått en DÖRR. Och vindsnurra till skjultaket. Mer säger jag inte. Gunnar vet. |
| 2:42 | röst | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått en DÖRR. Och vindsnurra till skjultaket. Mer säger jag inte. Gunnar vet. · REAKTION |
| 2:43 | händelse | tagitUrPrint | sak=kruka n=1 |
| 2:52 | aliSalt | ali | 105 |
| 2:53 | klar | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått en DÖRR. Och vindsnurra till skjultaket. Mer säger jag inte. Gunnar vet. |
| 2:55 | skratt | du | falsk tuta |
| 3:02 | händelse | printStart | sak=kruka |
| 3:03 | väntar | värld:TUUT! Tjena! | TUUT! Tjena! |
| 3:03 | paket |  | ge |
| 3:03 | väntar |  | (läget ändras) |
| 3:04 | sak | värld:TUUT! Tjena! | TUUT! Tjena! |
| 3:04 | bubbla |  | TUUT! Tjena! |
| 3:04 | väntar | mamma | Pappa hälsar. Han sa inte det, men jag såg på honom att han ville. |
| 3:07 | klar | värld:TUUT! Tjena! | TUUT! Tjena! |
| 3:07 | toast | guld | ✅ |
| 3:07 | händelse | printKlar | sak=kruka n=23 |
| 3:07 | händelse | tagitUrPrint | sak=kruka n=1 |
| 3:10 | skratt | du | däcket rullar iväg |
| 3:15 | aliSalt | ali | 105 |
| 3:16 | sak |  | (läget ändras) |
| 3:16 | brev | rolf | rolf:1 |
| 3:16 | klar |  | (läget ändras) |
| 3:17 | skratt | du | falsk tuta |
| 3:25 | väntar | rolf | Nämen. Kajsa knuffa ner min flasköppnare i tippen. Kan du göra en ny, mä magnet? /Rolf​ |
| 3:25 | paket |  | ge |
| 3:25 | väntar |  | (läget ändras) |
| 3:25 | sak | rolf | Nämen. Kajsa knuffa ner min flasköppnare i tippen. Kan du göra en ny, mä magnet? /Rolf​ |
| 3:25 | lapp | Brev från Rolf | Nämen. Kajsa knuffa ner min flasköppnare i tippen. Kan du göra en ny, mä magnet? /Rolf​ |
| 3:25 | röst | rolf | Nämen. Kajsa knuffa ner min flasköppnare i tippen. Kan du göra en ny, mä magnet? /Rolf​ · STORY |
| 3:25 | händelse | malKlart | id=rolf1-brev del=Dag 3 – En skrivare till och taket nasta=n2-hamta-skrap |
| 3:25 | väntar | du | Nyckeln till tippen. Där ligger skräpet i högar. |
| 3:25 | MÅL |  | Hämta 5 skräp på soptippen |
| 3:28 | tanke | du | Fastpressad. Den sitter som i betong. |
| 3:28 | väntar | du | Fastpressad. Den sitter som i betong. |
| 3:28 | tanke | du | Tratten är stor som en kaffekopp. Tunnan är stor som jag. |
| 3:28 | struken | du | Fastpressad. Den sitter som i betong. |
| 3:28 | väntar | du | Tratten är stor som en kaffekopp. Tunnan är stor som jag. |
| 3:28 | målruta |  | Hämta 5 skräp på soptippen |
| 3:29 | händelse | malKlart | id=n2-hamta-skrap del=Dag 3 – En skrivare till och taket nasta=rolf1-printa |
| 3:29 | struken | kedja | tippen |
| 3:29 | struken | du | Tratten är stor som en kaffekopp. Tunnan är stor som jag. |
| 3:29 | väntar | du | Printa flasköppnare med magnet. |
| 3:29 | MÅL |  | Printa flasköppnare med magnet |
| 3:32 | klar | rolf | Nämen. Kajsa knuffa ner min flasköppnare i tippen. Kan du göra en ny, mä magnet? /Rolf​ |
| 3:32 | händelse | brevLast | id=rolf:1 |
| 3:33 | målruta |  | Printa flasköppnare med magnet |
| 3:33 | kvittens-bock |  | ✓ Hämta 5 skräp på soptippen |
| 3:34 | struken | du | Nyckeln till tippen. Där ligger skräpet i högar. |
| 3:34 | sak |  | (läget ändras) |
| 3:34 | klar |  | (läget ändras) |
| 3:34 | sak | du | Printa flasköppnare med magnet. |
| 3:34 | pil |  | Printa flasköppnare med magnet |
| 3:34 | röst | du | Printa flasköppnare med magnet. · MÅL |
| 3:34 | nick |  | nick:33 |
| 3:37 | klar | du | Printa flasköppnare med magnet. |
| 3:41 | händelse | printStart | sak=flaskoppnare |
| 3:41 | händelse | malKlart | id=rolf1-printa del=Dag 3 – En skrivare till och taket nasta=rolf1-ge |
| 3:41 | väntar | du | Ge Rolf flasköppnare med magnet. |
| 3:41 | målruta |  | Ge Rolf flasköppnare med magnet |
| 3:41 | MÅL |  | Ge Rolf flasköppnare med magnet |
| 3:41 | sak | du | Ge Rolf flasköppnare med magnet. |
| 3:41 | pil |  | Ge Rolf flasköppnare med magnet |
| 3:41 | röst | du | Ge Rolf flasköppnare med magnet. · MÅL |
| 3:44 | klar | du | Ge Rolf flasköppnare med magnet. |
| 3:45 | toast | guld | ✅ |
| 3:45 | händelse | printKlar | sak=flaskoppnare n=1 |
| 3:45 | kvittens-bock |  | ✓ Printa flasköppnare med magnet |
| 3:46 | händelse | tagitUrPrint | sak=flaskoppnare n=1 |
| 3:46 | väntar | bud | (tips) |
| 3:46 | sak | bud | (tips) |
| 3:47 | väntar | du | Klart! Nu lägger jag den i Rolfs brevlåda vid grinden. |
| 3:48 | klar | bud | (tips) |
| 3:50 | sak | du | Klart! Nu lägger jag den i Rolfs brevlåda vid grinden. |
| 3:50 | röst | du | Klart! Nu lägger jag den i Rolfs brevlåda vid grinden. · MÅL |
| 3:54 | klar | du | Klart! Nu lägger jag den i Rolfs brevlåda vid grinden. |
| 3:58 | händelse | lagtIPostlada | sak=flaskoppnare rolf=1 jobb=false |
| 3:58 | struken | kedja | rolf1 |
| 3:58 | händelse | malKlart | id=rolf1-ge del=Dag 3 – En skrivare till och taket nasta=kopBatteri |
| 3:58 | väntar | du | Ali har ett gammalt bilbatteri. Då sparar jag strömmen. |
| 3:58 | målruta |  | Printa och sälj |
| 3:58 | MÅL |  | Printa och sälj |
| 3:58 | sak | du | Ali har ett gammalt bilbatteri. Då sparar jag strömmen. |
| 3:58 | pil |  | Printa och sälj |
| 3:58 | notis | tanke | 💭 Ali har ett gammalt bilbatteri. Då sparar jag strömmen. |
| 3:58 | röst | du | Ali har ett gammalt bilbatteri. Då sparar jag strömmen. · MÅL |
| 4:02 | kvittens-bock |  | ✓ Ge Rolf flasköppnare med magnet |
| 4:03 | klar | du | Ali har ett gammalt bilbatteri. Då sparar jag strömmen. |
| 4:06 | väntar | rolf | Morgonbulle på kontoret me polarna. Bengt har ny keps. Vi pratade om den i en timme. Den e grön. /R |
| 4:08 | händelse | printStart | sak=kruka |
| 4:13 | toast | guld | ✅ |
| 4:13 | händelse | printKlar | sak=kruka n=24 |
| 4:13 | händelse | tagitUrPrint | sak=kruka n=1 |
| 4:21 | aliSalt | ali | 105 |
| 4:29 | händelse | printStart | sak=kruka |
| 4:35 | toast | guld | ✅ |
| 4:35 | händelse | printKlar | sak=kruka n=25 |
| 4:35 | händelse | tagitUrPrint | sak=kruka n=1 |
| 4:42 | aliSalt | ali | 105 |
| 4:51 | händelse | printStart | sak=kruka |
| 4:57 | toast | guld | ✅ |
| 4:57 | händelse | printKlar | sak=kruka n=26 |
| 4:57 | händelse | tagitUrPrint | sak=kruka n=1 |
| 5:04 | aliSalt | ali | 105 |
| 5:07 | paket |  | tanke |
| 5:07 | tanke | du | Jaha, Rolf har hämtat flasköppnare med magnet. |
| 5:07 | väntar | du | Jaha, Rolf har hämtat flasköppnare med magnet. |
| 5:13 | händelse | printStart | sak=kruka |
| 5:19 | toast | guld | ✅ |
| 5:19 | händelse | printKlar | sak=kruka n=27 |
| 5:19 | händelse | tagitUrPrint | sak=kruka n=1 |
| 5:26 | aliSalt | ali | 105 |
| 5:36 | händelse | printStart | sak=kruka |
| 5:41 | toast | guld | ✅ |
| 5:41 | händelse | printKlar | sak=kruka n=28 |
| 5:41 | händelse | tagitUrPrint | sak=kruka n=1 |
| 5:46 | väntar | mamma | Pappa hälsar. Han sa inte det, men jag såg på honom att han ville. |
| 5:48 | aliSalt | ali | 105 |
| 5:58 | händelse | printStart | sak=kruka |
| 6:03 | toast | guld | ✅ |
| 6:03 | händelse | printKlar | sak=kruka n=29 |
| 6:03 | händelse | tagitUrPrint | sak=kruka n=1 |
| 6:07 | sak | du | Jaha, Rolf har hämtat flasköppnare med magnet. |
| 6:07 | notis | tanke | 💭 Jaha, Rolf har hämtat flasköppnare med magnet. |
| 6:07 | röst | du | Jaha, Rolf har hämtat flasköppnare med magnet. · REAKTION |
| 6:11 | aliSalt | ali | 105 |
| 6:11 | klar | du | Jaha, Rolf har hämtat flasköppnare med magnet. |
| 6:20 | händelse | printStart | sak=kruka |
| 6:26 | toast | guld | ✅ |
| 6:26 | händelse | printKlar | sak=kruka n=30 |
| 6:26 | händelse | tagitUrPrint | sak=kruka n=1 |
| 6:33 | aliSalt | ali | 105 |
| 6:42 | händelse | printStart | sak=kruka |
| 6:48 | toast | guld | ✅ |
| 6:48 | händelse | printKlar | sak=kruka n=31 |
| 6:48 | händelse | tagitUrPrint | sak=kruka n=1 |
| 6:55 | aliSalt | ali | 105 |
| 7:02 | skratt | du | falsk tuta |
| 7:04 | händelse | printStart | sak=kruka |
| 7:10 | paket |  | tanke |
| 7:10 | tanke | du | Den blev… spagetti. Ali kallar det modern konst. |
| 7:10 | väntar | du | Den blev… spagetti. Ali kallar det modern konst. |
| 7:10 | skratt | du | plastspagetti |
| 7:10 | toast | guld | ✅ |
| 7:10 | händelse | printKlar | sak=kruka n=32 |
| 7:10 | händelse | tagitUrPrint | sak=spagetti n=1 |
| 7:17 | skratt | du | Ali köper konst |
| 7:17 | aliSalt | ali | 3 |
| 7:20 | upplåst | strom | cykelbatteri |
| 7:20 | brott | RESERV | cykelbatteri (strom 25 av 15) |
| 7:20 | händelse | upplast | id=cykelbatteri flask=strom |
| 7:20 | paket |  | sms |
| 7:20 | väntar | ali | Ali här. Bilbatteriet ur min gamla Volvo står i lagret. Det sparar mer ström än powerbanken. |
| 7:24 | väntar | värld:TUUT TUUT! | TUUT TUUT! |
| 7:25 | händelse | printStart | sak=kruka |
| 7:31 | toast | guld | ✅ |
| 7:31 | händelse | printKlar | sak=kruka n=33 |
| 7:31 | händelse | tagitUrPrint | sak=kruka n=1 |
| 7:37 | sak | ali | Ali här. Bilbatteriet ur min gamla Volvo står i lagret. Det sparar mer ström än powerbanken. |
| 7:37 | sms | ali | Ali här. Bilbatteriet ur min gamla Volvo står i lagret. Det sparar mer ström än powerbanken. |
| 7:37 | sms-bubbla | ali | Ali här. Bilbatteriet ur min gamla Volvo står i lagret. Det sparar mer ström än powerbanken. |
| 7:37 | röst | ali | Ali här. Bilbatteriet ur min gamla Volvo står i lagret. Det sparar mer ström än powerbanken. · STORY |
| 7:38 | aliSalt | ali | 105 |
| 7:45 | klar | ali | Ali här. Bilbatteriet ur min gamla Volvo står i lagret. Det sparar mer ström än powerbanken. |
| 7:47 | struken | värld:TUUT TUUT! | TUUT TUUT! |
| 7:47 | struken | mamma | Har du sovit nåt? Du har väl tandborste? Och äter du? Svara inte, jag vet att du är arg. ❤️ /Mamma |
| 7:49 | toast | guld | 🔋 Bilbatteriet ligger i handen – klicka på cykeln för att koppla in det |
| 7:49 | händelse | kopt | sak=cykelbatteri |
| 7:49 | röst | ali | Ali här. Batteriet ur min gamla Volvo. Bilen dog 2016. Batteriet vägrade. · STORY |
| 7:49 | butiksbubbla | ali | Ali här. Batteriet ur min gamla Volvo. Bilen dog 2016. Batteriet vägrade. |
| 7:57 | struken | kedja | dag2 |
| 7:57 | väntar | info:guld | 🔋 Bilbatteriet är inkopplat – skrivaren printar klart även när du slutar trampa |
| 7:57 | monterat | du | byggsats:cykelbatteri |
| 7:57 | händelse | monterat | sak=cykelbatteri |
| 7:57 | sak | info:guld | 🔋 Bilbatteriet är inkopplat – skrivaren printar klart även när du slutar trampa |
| 7:57 | kvitto-visas | info:guld | 🔋 Bilbatteriet är inkopplat – skrivaren printar klart även när du slutar trampa |
| 7:57 | toast | guld | 🔋 Bilbatteriet är inkopplat – skrivaren printar klart även när du slutar trampa |
| 7:57 | händelse | malKlart | id=kopBatteri del=Dag 3 – En skrivare till och taket nasta=ryggkorg |
| 7:57 | struken | du | Den blev… spagetti. Ali kallar det modern konst. |
| 7:57 | väntar | du | Jag springer för mycket. Med en ryggkorg bär jag tio saker. |
| 7:57 | MÅL |  | Plocka skräp och mal det |
| 7:59 | klar | info:guld | 🔋 Bilbatteriet är inkopplat – skrivaren printar klart även när du slutar trampa |
| 7:59 | målruta |  | Plocka skräp och mal det |
| 8:01 | kvittens-bock |  | ✓ Köp Alis gamla bilbatteri |
| 8:01 | sak | du | Jag springer för mycket. Med en ryggkorg bär jag tio saker. |
| 8:01 | pil |  | Plocka skräp och mal det |
| 8:01 | notis | tanke | 💭 Jag springer för mycket. Med en ryggkorg bär jag tio saker. |
| 8:01 | röst | du | Jag springer för mycket. Med en ryggkorg bär jag tio saker. · MÅL |
| 8:06 | klar | du | Jag springer för mycket. Med en ryggkorg bär jag tio saker. |
| 8:10 | händelse | printStart | sak=kruka |
| 8:16 | toast | guld | ✅ |
| 8:16 | händelse | printKlar | sak=kruka n=34 |
| 8:16 | händelse | tagitUrPrint | sak=kruka n=1 |
| 8:23 | aliSalt | ali | 105 |
| 8:31 | händelse | printStart | sak=kruka |
| 8:31 | skratt | du | Kajsa i skrivaren |
| 8:37 | toast | guld | ✅ |
| 8:37 | händelse | printKlar | sak=kruka n=35 |
| 8:37 | händelse | tagitUrPrint | sak=kruka n=1 |
| 8:44 | aliSalt | ali | 105 |
| 8:59 | upplåst | bara | ryggkorg |
| 8:59 | brott | UPPLÅST | ryggkorg (bara 6 av 6) |
| 8:59 | händelse | upplast | id=ryggkorg flask=bara |
| 8:59 | paket |  | tanke → sms |
| 8:59 | tanke | du | Säcken är full igen. Jag behöver något att bära mer i. |
| 8:59 | väntar | du | Säcken är full igen. Jag behöver något att bära mer i. |
| 8:59 | väntar | ali | Ali här. En ryggkorg. AI:n ritade den efter en bild på min mormor. Den rymmer tio. |
| 9:00 | sak | du | Säcken är full igen. Jag behöver något att bära mer i. |
| 9:00 | notis | tanke | 💭 Säcken är full igen. Jag behöver något att bära mer i. |
| 9:00 | röst | du | Säcken är full igen. Jag behöver något att bära mer i. · STORY |
| 9:04 | klar | du | Säcken är full igen. Jag behöver något att bära mer i. |
| 9:07 | händelse | printStart | sak=kruka |
| 9:12 | sak | ali | Ali här. En ryggkorg. AI:n ritade den efter en bild på min mormor. Den rymmer tio. |
| 9:12 | sms | ali | Ali här. En ryggkorg. AI:n ritade den efter en bild på min mormor. Den rymmer tio. |
| 9:12 | sms-bubbla | ali | Ali här. En ryggkorg. AI:n ritade den efter en bild på min mormor. Den rymmer tio. |
| 9:12 | röst | ali | Ali här. En ryggkorg. AI:n ritade den efter en bild på min mormor. Den rymmer tio. · STORY |
| 9:12 | toast | guld | ✅ |
| 9:12 | händelse | printKlar | sak=kruka n=36 |
| 9:12 | händelse | tagitUrPrint | sak=kruka n=1 |
| 9:19 | skratt | du | falsk tuta |
| 9:19 | klar | ali | Ali här. En ryggkorg. AI:n ritade den efter en bild på min mormor. Den rymmer tio. |
| 9:20 | aliSalt | ali | 105 |
| 9:24 | toast | guld | 3D-modell köpt – printa ryggkorg på skrivaren |
| 9:24 | händelse | kopt | sak=ryggkorg |
| 9:33 | händelse | printStart | sak=byggsats:ryggkorg |
| 9:39 | toast | bra | Del 1 av 2 klar |
| 9:45 | händelse | printKlar | sak=byggsats:ryggkorg n=1 |
| 9:45 | toast | guld | ✅ |
| 9:45 | väntar | info:guld | Klicka för att ta på dig ryggkorg |
| 9:45 | händelse | tagitUrPrint | sak=byggsats:ryggkorg n=1 |
| 9:45 | paket |  | sms |
| 9:45 | väntar | ali | Ali här. Du printade Ryggkorg från min ritning. Och det FUNKAR? Jag har bara sett sånt på YouTube. |
| 9:45 | sak | info:guld | Klicka för att ta på dig ryggkorg |
| 9:45 | kvitto-visas | info:guld | Klicka för att ta på dig ryggkorg |
| 9:45 | toast | guld | Klicka för att ta på dig ryggkorg |
| 9:47 | klar | info:guld | Klicka för att ta på dig ryggkorg |
| 9:49 | väntar | info:guld | 🧺 Ryggkorgen sitter på! Du bär 16 skräp nu. |
| 9:49 | tog på | du | byggsats:ryggkorg |
| 9:49 | händelse | monterat | sak=ryggkorg |
| 9:49 | sak | info:guld | 🧺 Ryggkorgen sitter på! Du bär 16 skräp nu. |
| 9:49 | kvitto-visas | info:guld | 🧺 Ryggkorgen sitter på! Du bär 16 skräp nu. |
| 9:49 | toast | guld | 🧺 Ryggkorgen sitter på! Du bär 16 skräp nu. |
| 9:49 | händelse | malKlart | id=ryggkorg del=Dag 3 – En skrivare till och taket nasta=n2-bygg-arbetsbord |
| 9:49 | väntar | du | Ett arbetsbord bredvid skrivaren. Skrivare M ska stå på det. |
| 9:49 | MÅL |  | Bygg ett arbetsbord |
| 9:51 | klar | info:guld | 🧺 Ryggkorgen sitter på! Du bär 16 skräp nu. |
| 9:51 | målruta |  | Bygg ett arbetsbord |
| 9:53 | kvittens-bock |  | ✓ Bygg ryggkorgen – bär 10 skräp |
| 9:53 | sak | du | Ett arbetsbord bredvid skrivaren. Skrivare M ska stå på det. |
| 9:53 | pil |  | Bygg ett arbetsbord |
| 9:53 | notis | tanke | 💭 Ett arbetsbord bredvid skrivaren. Skrivare M ska stå på det. |
| 9:53 | röst | du | Ett arbetsbord bredvid skrivaren. Skrivare M ska stå på det. · MÅL |
| 9:53 | nick |  | nick:37 |
| 9:56 | toast | guld | 3D-modell köpt – printa arbetsbord på skrivaren |
| 9:56 | händelse | kopt | sak=bord |
| 9:58 | klar | du | Ett arbetsbord bredvid skrivaren. Skrivare M ska stå på det. |
| 10:05 | händelse | printStart | sak=byggsats:bord |
| 10:08 | sak | ali | Ali här. Du printade Ryggkorg från min ritning. Och det FUNKAR? Jag har bara sett sånt på YouTube. |
| 10:08 | sms | ali | Ali här. Du printade Ryggkorg från min ritning. Och det FUNKAR? Jag har bara sett sånt på YouTube. |
| 10:08 | sms-bubbla | ali | Ali här. Du printade Ryggkorg från min ritning. Och det FUNKAR? Jag har bara sett sånt på YouTube. |
| 10:08 | röst | ali | Ali här. Du printade Ryggkorg från min ritning. Och det FUNKAR? Jag har bara sett sånt på YouTube. · REAKTION |
| 10:12 | toast | bra | Del 1 av 3 klar |
| 10:17 | klar | ali | Ali här. Du printade Ryggkorg från min ritning. Och det FUNKAR? Jag har bara sett sånt på YouTube. |
| 10:19 | toast | bra | Del 2 av 3 klar |
| 10:23 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 10:28 | tanke | du | Hård plast. Lilla kvarnen skulle explodera. Eller jag. |
| 10:28 | väntar | du | Hård plast. Lilla kvarnen skulle explodera. Eller jag. |
| 10:28 | tanke | du | En husvagn mitt i tippen. Och grinden är låst. |
| 10:28 | struken | du | Hård plast. Lilla kvarnen skulle explodera. Eller jag. |
| 10:28 | väntar | du | En husvagn mitt i tippen. Och grinden är låst. |
| 10:28 | sak | du | En husvagn mitt i tippen. Och grinden är låst. |
| 10:28 | notis | tanke | 💭 En husvagn mitt i tippen. Och grinden är låst. |
| 10:28 | röst | du | En husvagn mitt i tippen. Och grinden är låst. · REAKTION |
| 10:28 | ljud | kajsa | Mjau |
| 10:31 | väntar | info:fel | Fullt i händerna. |
| 10:32 | klar | du | En husvagn mitt i tippen. Och grinden är låst. |
| 10:32 | sak | info:fel | Fullt i händerna. |
| 10:32 | kvitto-visas | info:fel | Fullt i händerna. |
| 10:32 | toast | fel | Fullt i händerna. |
| 10:34 | klar | info:fel | Fullt i händerna. |
| 10:39 | händelse | printKlar | sak=byggsats:bord n=1 |
| 10:39 | toast | guld | ✅ |
| 10:42 | händelse | tagitUrPrint | sak=byggsats:bord n=1 |
| 10:45 | händelse | placerat | sak=bord |
| 10:45 | händelse | malKlart | id=n2-bygg-arbetsbord del=Dag 3 – En skrivare till och taket nasta=n2-bygg-skrivare-m |
| 10:45 | väntar | du | Skrivare M på bordet. Två skrivare, dubbelt så mycket. |
| 10:45 | målruta |  | Printa och sälj |
| 10:45 | MÅL |  | Printa och sälj |
| 10:45 | upplåst | skrivare | skrivare2 |
| 10:45 | brott | UPPLÅST | skrivare2 (skrivare 585 av 75) |
| 10:45 | händelse | upplast | id=skrivare2 flask=skrivare |
| 10:45 | paket |  | tanke → sms |
| 10:45 | tanke | du | Kvarnen hinner mer än skrivaren. Jag behöver en skrivare till. |
| 10:45 | väntar | du | Kvarnen hinner mer än skrivaren. Jag behöver en skrivare till. |
| 10:45 | väntar | ali | Ali här. Skrivare M har kommit. Två och en halv gånger snabbare. Snabbare än jag. Jag har inte varit snabb sedan 1998. |
| 10:45 | sak | du | Skrivare M på bordet. Två skrivare, dubbelt så mycket. |
| 10:45 | pil |  | Bygg Skrivare M på bordet |
| 10:45 | notis | tanke | 💭 Skrivare M på bordet. Två skrivare, dubbelt så mycket. |
| 10:45 | röst | du | Skrivare M på bordet. Två skrivare, dubbelt så mycket. · MÅL |
| 10:49 | kvittens-bock |  | ✓ Bygg ett arbetsbord |
| 10:49 | klar | du | Skrivare M på bordet. Två skrivare, dubbelt så mycket. |
| 10:58 | sak | ali | Ali här. Skrivare M har kommit. Två och en halv gånger snabbare. Snabbare än jag. Jag har inte varit snabb sedan 1998. |
| 10:58 | sms | ali | Ali här. Skrivare M har kommit. Två och en halv gånger snabbare. Snabbare än jag. Jag har inte varit snabb sedan 1998. |
| 10:58 | sms-bubbla | ali | Ali här. Skrivare M har kommit. Två och en halv gånger snabbare. Snabbare än jag. Jag har inte varit snabb sedan 1998. |
| 10:58 | röst | ali | Ali här. Skrivare M har kommit. Två och en halv gånger snabbare. Snabbare än jag. Jag har inte varit snabb sedan 1998. · STORY |
| 10:58 | skratt | du | Alis dyr-pling |
| 10:58 | toast | guld | 3D-modell köpt – printa skrivare m på skrivaren |
| 10:58 | händelse | kopt | sak=skrivare2 |
| 11:07 | händelse | printStart | sak=byggsats:skrivare2 |
| 11:07 | skratt | du | däcket rullar iväg |
| 11:08 | klar | ali | Ali här. Skrivare M har kommit. Två och en halv gånger snabbare. Snabbare än jag. Jag har inte varit snabb sedan 1998. |
| 11:14 | väntar | värld:TUUT TUUT! | TUUT TUUT! |
| 11:16 | toast | bra | Del 1 av 5 klar |
| 11:25 | toast | bra | Del 2 av 5 klar |
| 11:34 | toast | bra | Del 3 av 5 klar |
| 11:34 | struken | värld:TUUT TUUT! | TUUT TUUT! |
| 11:43 | toast | bra | Del 4 av 5 klar |
| 11:43 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 11:43 | väntar | notis:Storebrors skrivare: Tornet är tomt – ma | Storebrors skrivare: Tornet är tomt – mal mer så fortsätter den |
| 11:46 | struken | mamma | Pappa hälsar. Han sa inte det, men jag såg på honom att han ville. |
| 12:02 | händelse | printKlar | sak=byggsats:skrivare2 n=1 |
| 12:02 | toast | guld | ✅ |
| 12:04 | händelse | tagitUrPrint | sak=byggsats:skrivare2 n=1 |
| 12:07 | händelse | placerat | sak=skrivare2 |
| 12:07 | struken | kedja | skrivareM |
| 12:07 | paket |  | tanke |
| 12:07 | tanke | du | Den här måste stå i linjen vid kvarnen, annars når inte slangen. |
| 12:07 | väntar | du | Den här måste stå i linjen vid kvarnen, annars når inte slangen. |
| 12:07 | händelse | malKlart | id=n2-bygg-skrivare-m del=Dag 3 – En skrivare till och taket nasta=n2-lagg-plattak-skjulet |
| 12:07 | lapp-kö | 📱 Storebror | VA?! Du har byggt en skrivare TILL?? Du har typ en printfarm nu. Okej. Det är faktiskt ganska ballt. 🔥 |
| 12:07 | väntar | bror | VA?! Du har byggt en skrivare TILL?? Du har typ en printfarm nu. Okej. Det är faktiskt ganska ballt. 🔥 |
| 12:07 | väntar | du | Det regnar in. Plåt på taket, så slipper jag sova i en pöl. |
| 12:07 | MÅL |  | Lägg plåttak på skjulet |
| 12:07 | målruta |  | Lägg plåttak på skjulet |
| 12:07 | sak | du | Det regnar in. Plåt på taket, så slipper jag sova i en pöl. |
| 12:07 | pil |  | Lägg plåttak på skjulet |
| 12:07 | notis | tanke | 💭 Det regnar in. Plåt på taket, så slipper jag sova i en pöl. |
| 12:07 | röst | du | Det regnar in. Plåt på taket, så slipper jag sova i en pöl. · MÅL |
| 12:11 | kvittens-bock |  | ✓ Bygg Skrivare M på bordet |
| 12:12 | klar | du | Det regnar in. Plåt på taket, så slipper jag sova i en pöl. |
| 12:20 | toast | guld | 3D-modell köpt – printa plåttak på skrivaren |
| 12:20 | händelse | kopt | sak=tak |
| 12:29 | händelse | printStart | sak=byggsats:tak |
| 12:29 | toast | bra | 🔗 Slangen kopplad |
| 12:32 | sak | du | Kvarnen hinner mer än skrivaren. Jag behöver en skrivare till. |
| 12:32 | notis | tanke | 💭 Kvarnen hinner mer än skrivaren. Jag behöver en skrivare till. |
| 12:32 | röst | du | Kvarnen hinner mer än skrivaren. Jag behöver en skrivare till. · STORY |
| 12:33 | toast | bra | Del 1 av 3 klar |
| 12:37 | toast | bra | Del 2 av 3 klar |
| 12:37 | klar | du | Kvarnen hinner mer än skrivaren. Jag behöver en skrivare till. |
| 12:38 | toast | fel | Ingen ström – trampa cykeln |
| 12:45 | sak | notis:Storebrors skrivare: Tornet är tomt – ma | Storebrors skrivare: Tornet är tomt – mal mer så fortsätter den |
| 12:45 | notis | fel | Storebrors skrivare: Tornet är tomt – mal mer så fortsätter den |
| 12:47 | skratt | du | falsk tuta |
| 12:48 | klar | notis:Storebrors skrivare: Tornet är tomt – ma | Storebrors skrivare: Tornet är tomt – mal mer så fortsätter den |
| 12:49 | händelse | printKlar | sak=byggsats:tak n=1 |
| 12:49 | toast | guld | ✅ |
| 12:50 | händelse | tagitUrPrint | sak=byggsats:tak n=1 |
| 12:54 | väntar | info:guld | Plåttak på plats! Trivsel +12 · Ali betalar nu +0 % |
| 12:54 | sak | info:guld | Plåttak på plats! Trivsel +12 · Ali betalar nu +0 % |
| 12:54 | kvitto-visas | info:guld | Plåttak på plats! Trivsel +12 · Ali betalar nu +0 % |
| 12:54 | toast | guld | Plåttak på plats! Trivsel +12 · Ali betalar nu +0 % |
| 12:54 | händelse | malKlart | id=n2-lagg-plattak-skjulet del=Dag 3 – En skrivare till och taket nasta=sov3 |
| 12:54 | paket |  | lapp |
| 12:54 | väntar | du | Dag 3 är slut. Nu vet Rolf att jag bor HÄR. Benen orkar inte trampa mer. |
| 12:54 | MÅL |  | Klart för idag – sov när du vill |
| 12:56 | klar | info:guld | Plåttak på plats! Trivsel +12 · Ali betalar nu +0 % |
| 12:56 | sak | du | Dag 3 är slut. Nu vet Rolf att jag bor HÄR. Benen orkar inte trampa mer. |
| 12:56 | kvitto-visas | du | Dag 3 är slut. Nu vet Rolf att jag bor HÄR. Benen orkar inte trampa mer. |
| 12:56 | lapp | 📔 Dagbok | Dag 3 är slut. Nu vet Rolf att jag bor HÄR. Benen orkar inte trampa mer. |
| 12:56 | meddelande | du | Dag 3 är slut. Nu vet Rolf att jag bor HÄR. Benen orkar inte trampa mer. |
| 12:56 | dagbokkort | du | Dag 3 är slut. Nu vet Rolf att jag bor HÄR. Benen orkar inte trampa mer. |
| 12:56 | röst | du | Dag 3 är slut. Nu vet Rolf att jag bor HÄR. Benen orkar inte trampa mer. · STORY |
| 13:04 | händelse | brevLast | id=kvall3 |
| 13:04 | klar | du | Dag 3 är slut. Nu vet Rolf att jag bor HÄR. Benen orkar inte trampa mer. |
| 13:04 | väntar | notis:🌇 Klockan är 21. Ali slår igen luckan.  | 🌇 Klockan är 21. Ali slår igen luckan. Dagens jobb är klart – gå in i skjulet och sov i sängen. |
| 13:04 | målruta |  | Klart för idag – sov när du vill |
| 13:05 | sak | du | (nytt mål i rutan) |
| 13:05 | pil |  | Klart för idag – sov när du vill |
| 13:05 | klar | du | (nytt mål i rutan) |

<details><summary>Botens handlingar dag 3</summary>

- 0:00 — dag 3 börjar — (1692 kr)
- 0:15 popup: "FORTSÄTT" (1692 kr)
- 0:29 gå till Rolfs postlåda (28 m) (1692 kr)
- 0:34 panel: "Rolfs postlåda
Det här låg i l" (1752 kr)
- 0:35 gå till sätt nyckeln i låset (3 m) (1752 kr)
- 0:46 kort: "FORTSÄTTeller tryck Esc" (1752 kr)
- 0:54 tjänar pengar till väntar på sopbilen (BO): 1752/1812 kr → printar blomkruka (105 kr) (1752 kr)
- 0:55 gå till skrivaren (7 m) (1752 kr)
- 0:57 printar Blomkruka (1752 kr)
- 1:03 tar ut 1 st ur skrivaren (1752 kr)
- 1:09 gå till Ali (28 m) (1752 kr)
- 1:09 öppnar Alis butik – sälja (1752 kr)
- 1:11 säljer hos Ali: +105 kr (1857 kr)
- 1:14 tjänar pengar till väntar på sopbilen (BO): 1857/1917 kr → printar blomkruka (105 kr) (1857 kr)
- 1:19 gå till skrivaren (25 m) (1857 kr)
- 1:21 printar Blomkruka (1857 kr)
- 1:27 tar ut 1 st ur skrivaren (1857 kr)
- 1:32 gå till Ali (25 m) (1857 kr)
- 1:32 öppnar Alis butik – sälja (1857 kr)
- 1:34 säljer hos Ali: +105 kr (1962 kr)
- 1:39 tjänar pengar till väntar på sopbilen (BO): 1962/2022 kr → printar blomkruka (105 kr) (1962 kr)
- 1:44 gå till skrivaren (25 m) (1962 kr)
- 1:46 printar Blomkruka (1962 kr)
- 1:52 tar ut 1 st ur skrivaren (1962 kr)
- 1:57 gå till Ali (25 m) (1962 kr)
- 1:57 öppnar Alis butik – sälja (1962 kr)
- 1:59 säljer hos Ali: +105 kr (2067 kr)
- 2:02 tjänar pengar till väntar på sopbilen (BO): 2067/2127 kr → printar blomkruka (105 kr) (2067 kr)
- 2:07 gå till skrivaren (25 m) (2067 kr)
- 2:09 printar Blomkruka (2067 kr)
- 2:38 plockar 8 skräp på gården (bär max 10) (2067 kr)
- 2:42 gå till kvarnen (17 m) (2067 kr)
- 2:43 gå till skrivaren (2 m) (2067 kr)
- 2:44 tar ut 1 st ur skrivaren (2067 kr)
- 2:50 gå till Ali (28 m) (2067 kr)
- 2:50 öppnar Alis butik – sälja (2067 kr)
- 2:52 säljer hos Ali: +105 kr (2172 kr)
- 2:55 tjänar pengar till väntar på sopbilen (BO): 2172/2232 kr → printar blomkruka (105 kr) (2172 kr)
- 3:00 gå till skrivaren (25 m) (2172 kr)
- 3:02 printar Blomkruka (2172 kr)
- 3:08 tar ut 1 st ur skrivaren (2172 kr)
- 3:13 gå till Ali (25 m) (2172 kr)
- 3:13 öppnar Alis butik – sälja (2172 kr)
- 3:15 säljer hos Ali: +105 kr (2277 kr)
- 3:25 gå till Rolfs postlåda (31 m) (2277 kr)
- 3:34 plockar 10 skräp på tippen (bär max 10) (2277 kr)
- 3:35 gå till kvarnen (8 m) (2277 kr)
- 3:40 gå till skrivaren (3 m) (2277 kr)
- 3:41 printar Flasköppnare med magnet (2277 kr)
- 3:46 tar ut 1 st ur skrivaren (2277 kr)
- 3:56 valj flaskoppnare: true, vald flaskoppnare, post {"l":null,"tr":null,"tm":[]}, nummer false (2277 kr)
- 3:58 gå till Rolfs postlåda (6 m) (2277 kr)
- 4:05 tjänar pengar till väntar på flaskhalsen för cykelbatteri: 2277/2317 kr → printar blomkruka (105 kr) (2277 kr)
- 4:06 gå till skrivaren (6 m) (2277 kr)
- 4:08 printar Blomkruka (2277 kr)
- 4:14 tar ut 1 st ur skrivaren (2277 kr)
- 4:20 gå till Ali (28 m) (2277 kr)
- 4:20 öppnar Alis butik – sälja (2277 kr)
- 4:21 säljer hos Ali: +105 kr (2382 kr)
- 4:22 tjänar pengar till väntar på flaskhalsen för cykelbatteri: 2382/2422 kr → printar blomkruka (105 kr) (2382 kr)
- 4:28 gå till skrivaren (25 m) (2382 kr)
- 4:29 printar Blomkruka (2382 kr)
- 4:35 tar ut 1 st ur skrivaren (2382 kr)
- 4:41 gå till Ali (25 m) (2382 kr)
- 4:41 öppnar Alis butik – sälja (2382 kr)
- 4:42 säljer hos Ali: +105 kr (2487 kr)
- 4:45 tjänar pengar till väntar på flaskhalsen för cykelbatteri: 2487/2527 kr → printar blomkruka (105 kr) (2487 kr)
- 4:50 gå till skrivaren (25 m) (2487 kr)
- 4:51 printar Blomkruka (2487 kr)
- 4:57 tar ut 1 st ur skrivaren (2487 kr)
- 5:03 gå till Ali (25 m) (2487 kr)
- 5:03 öppnar Alis butik – sälja (2487 kr)
- 5:05 säljer hos Ali: +105 kr (2592 kr)
- 5:07 tjänar pengar till väntar på flaskhalsen för cykelbatteri: 2592/2632 kr → printar blomkruka (105 kr) (2592 kr)
- 5:12 gå till skrivaren (25 m) (2592 kr)
- 5:13 printar Blomkruka (2592 kr)
- 5:20 tar ut 1 st ur skrivaren (2592 kr)
- 5:25 gå till Ali (25 m) (2592 kr)
- 5:25 öppnar Alis butik – sälja (2592 kr)
- 5:27 säljer hos Ali: +105 kr (2697 kr)
- 5:29 tjänar pengar till väntar på flaskhalsen för cykelbatteri: 2697/2737 kr → printar blomkruka (105 kr) (2697 kr)
- 5:34 gå till skrivaren (25 m) (2697 kr)
- 5:36 printar Blomkruka (2697 kr)
- 5:42 tar ut 1 st ur skrivaren (2697 kr)
- 5:47 gå till Ali (25 m) (2697 kr)
- 5:47 öppnar Alis butik – sälja (2697 kr)
- 5:49 säljer hos Ali: +105 kr (2802 kr)
- 5:51 tjänar pengar till väntar på flaskhalsen för cykelbatteri: 2802/2842 kr → printar blomkruka (105 kr) (2802 kr)
- 5:56 gå till skrivaren (25 m) (2802 kr)
- 5:58 printar Blomkruka (2802 kr)
- 6:04 tar ut 1 st ur skrivaren (2802 kr)
- 6:09 gå till Ali (25 m) (2802 kr)
- 6:09 öppnar Alis butik – sälja (2802 kr)
- 6:11 säljer hos Ali: +105 kr (2907 kr)
- 6:13 tjänar pengar till väntar på flaskhalsen för cykelbatteri: 2907/2947 kr → printar blomkruka (105 kr) (2907 kr)
- 6:19 gå till skrivaren (25 m) (2907 kr)
- 6:20 printar Blomkruka (2907 kr)
- 6:26 tar ut 1 st ur skrivaren (2907 kr)
- 6:32 gå till Ali (25 m) (2907 kr)
- 6:32 öppnar Alis butik – sälja (2907 kr)
- 6:33 säljer hos Ali: +105 kr (3012 kr)
- 6:36 tjänar pengar till väntar på flaskhalsen för cykelbatteri: 3012/3052 kr → printar blomkruka (105 kr) (3012 kr)
- 6:41 gå till skrivaren (25 m) (3012 kr)
- 6:42 printar Blomkruka (3012 kr)
- 6:48 tar ut 1 st ur skrivaren (3012 kr)
- 6:54 gå till Ali (25 m) (3012 kr)
- 6:54 öppnar Alis butik – sälja (3012 kr)
- 6:56 säljer hos Ali: +105 kr (3117 kr)
- 6:58 tjänar pengar till väntar på flaskhalsen för cykelbatteri: 3117/3157 kr → printar blomkruka (105 kr) (3117 kr)
- 7:03 gå till skrivaren (25 m) (3117 kr)
- 7:04 printar Blomkruka (3117 kr)
- 7:11 tar ut 1 st ur skrivaren (3117 kr)
- 7:16 gå till Ali (25 m) (3117 kr)
- 7:16 öppnar Alis butik – sälja (3117 kr)
- 7:18 säljer hos Ali: +3 kr (3120 kr)
- 7:19 tjänar pengar till väntar på flaskhalsen för cykelbatteri: 3120/3157 kr → printar blomkruka (105 kr) (3120 kr)
- 7:24 gå till skrivaren (25 m) (3120 kr)
- 7:25 printar Blomkruka (3120 kr)
- 7:32 tar ut 1 st ur skrivaren (3120 kr)
- 7:37 gå till Ali (25 m) (3120 kr)
- 7:37 öppnar Alis butik – sälja (3120 kr)
- 7:39 säljer hos Ali: +105 kr (3225 kr)
- 7:47 öppnar Alis butik – bilbatteriet (3225 kr)
- 7:49 köper cykelbatteri för 30 kr (3195 kr)
- 7:57 gå till koppla in bilbatteriet vid cykeln (24 m) (3195 kr)
- 8:08 tjänar pengar till väntar på flaskhalsen för ryggkorg: 3195/3235 kr → printar blomkruka (105 kr) (3195 kr)
- 8:09 gå till skrivaren (2 m) (3195 kr)
- 8:10 printar Blomkruka (3195 kr)
- 8:16 tar ut 1 st ur skrivaren (3195 kr)
- 8:22 gå till Ali (26 m) (3195 kr)
- 8:22 öppnar Alis butik – sälja (3195 kr)
- 8:23 säljer hos Ali: +105 kr (3300 kr)
- 8:24 tjänar pengar till väntar på flaskhalsen för ryggkorg: 3300/3340 kr → printar blomkruka (105 kr) (3300 kr)
- 8:30 gå till skrivaren (25 m) (3300 kr)
- 8:31 printar Blomkruka (3300 kr)
- 8:37 tar ut 1 st ur skrivaren (3300 kr)
- 8:43 gå till Ali (25 m) (3300 kr)
- 8:43 öppnar Alis butik – sälja (3300 kr)
- 8:44 säljer hos Ali: +105 kr (3405 kr)
- 8:47 tjänar pengar till väntar på flaskhalsen för ryggkorg: 3405/3445 kr → printar blomkruka (105 kr) (3405 kr)
- 8:58 plockar 5 skräp på tippen (bär max 10) (3405 kr)
- 8:59 gå till kvarnen (7 m) (3405 kr)
- 9:05 gå till skrivaren (3 m) (3405 kr)
- 9:07 printar Blomkruka (3405 kr)
- 9:13 tar ut 1 st ur skrivaren (3405 kr)
- 9:19 gå till Ali (28 m) (3405 kr)
- 9:19 öppnar Alis butik – sälja (3405 kr)
- 9:20 säljer hos Ali: +105 kr (3510 kr)
- 9:23 öppnar Alis butik – köpa ryggkorg (3510 kr)
- 9:25 köper ryggkorg för 120 kr (3390 kr)
- 9:31 gå till skrivaren (25 m) (3390 kr)
- 9:33 printar Ryggkorg (2 delar) (3390 kr)
- 9:46 tar ut 1 st ur skrivaren (3390 kr)
- 9:49 tar på ryggkorg (3390 kr)
- 9:55 gå till Ali (25 m) (3390 kr)
- 9:55 öppnar Alis butik – köpa arbetsbord (3390 kr)
- 9:57 köper bord för 120 kr (3270 kr)
- 10:04 gå till skrivaren (25 m) (3270 kr)
- 10:05 printar Arbetsbord (3 delar) (3270 kr)
- 10:31 plockar 4 skräp på tippen (bär max 16) (3270 kr)
- 10:34 gå till kvarnen (11 m) (3270 kr)
- 10:42 gå till skrivaren (3 m) (3270 kr)
- 10:42 tar ut 1 st ur skrivaren (3270 kr)
- 10:44 gå till platsen för arbetsbord (5 m) (3270 kr)
- 10:45 ställer ut arbetsbord (3270 kr)
- 10:56 gå till Ali (24 m) (3270 kr)
- 10:56 öppnar Alis butik – köpa skrivare m (3270 kr)
- 10:59 köper skrivare2 för 500 kr (2770 kr)
- 11:05 gå till skrivaren (25 m) (2770 kr)
- 11:07 printar Skrivare M (5 delar) (2770 kr)
- 11:49 plockar 4 skräp på tippen (bär max 16) (2770 kr)
- 11:51 gå till kvarnen (10 m) (2770 kr)
- 12:04 gå till skrivaren (3 m) (2770 kr)
- 12:04 tar ut 1 st ur skrivaren (2770 kr)
- 12:06 gå till platsen för skrivare m (5 m) (2770 kr)
- 12:07 ställer ut skrivare m (2770 kr)
- 12:19 gå till Ali (24 m) (2770 kr)
- 12:19 öppnar Alis butik – köpa plåttak (2770 kr)
- 12:21 köper tak för 250 kr (2520 kr)
- 12:27 gå till skrivaren (24 m) (2520 kr)
- 12:29 printar Plåttak (3 delar) (2520 kr)
- 12:51 tar ut 1 st ur skrivaren (2520 kr)
- 12:54 gå till skjulet (17 m) (2520 kr)
- 13:04 popup: "FORTSÄTT" (2520 kr)
- 13:07 gå till sängen (1 m) (2520 kr)

</details>

## Dag 4

| Tid | Källa | Vem | Text |
|---|---|---|---|
| 13:10 | vara | ali | ingen |
| 13:10 | händelse | malKlart | id=sov3 del=Dag 3 – En skrivare till och taket nasta=rolf2-brev |
| 13:10 | vara | ali | kruka |
| 13:10 | MÅL |  | Vänta på sopbilen. Den lämnar något. |
| 0:01 | händelse | dagenBorjar | dag=4 |
| 0:01 | meddelande | du | Dag 4. 18 dagar till jul. Drar det i skjulet blir natten lång. |
| 0:01 | dagbokkort | du | Kärran och mer vind · Dag 4. 18 dagar till jul. Drar det i skjulet blir natten lång. |
| 0:01 | röst | du | Kärran och mer vind. Dag 4. 18 dagar till jul. Drar det i skjulet blir natten lång. · STORY |
| 0:15 | händelse | morgonkortStangt | dag=4 |
| 0:19 | målruta |  | Vänta på sopbilen. Den lämnar något. |
| 0:20 | sak | du | (nytt mål i rutan) |
| 0:20 | pil |  | Vänta på sopbilen. Den lämnar något. |
| 0:21 | klar | du | (nytt mål i rutan) |
| 0:23 | sak | du | Den här måste stå i linjen vid kvarnen, annars når inte slangen. |
| 0:23 | notis | tanke | 💭 Den här måste stå i linjen vid kvarnen, annars når inte slangen. |
| 0:23 | röst | du | Den här måste stå i linjen vid kvarnen, annars når inte slangen. · STORY |
| 0:28 | väntar | foto | Tak över huvudet |
| 0:28 | paket |  | tanke |
| 0:28 | tanke | du | I natt somnar jag torr. Det börjar bli ett hem. |
| 0:28 | väntar | du | I natt somnar jag torr. Det börjar bli ett hem. |
| 0:28 | klar | du | Den här måste stå i linjen vid kvarnen, annars når inte slangen. |
| 0:30 | struken | notis:🌇 Klockan är 21. Ali slår igen luckan.  | 🌇 Klockan är 21. Ali slår igen luckan. Dagens jobb är klart – gå in i skjulet och sov i sängen. |
| 0:32 | väntar | info:bra | 🛒 4 skräp från famnen i skottkärran |
| 0:40 | väntar | rolf | PERFEKT öppnare! Kärran vid lådan ä din. Den gnisslar. Precis som ja. Skriv ditt nummer på en lapp, så slipper ja skriva brev. /Rolf |
| 0:40 | sak | info:bra | 🛒 4 skräp från famnen i skottkärran |
| 0:40 | kvitto-visas | info:bra | 🛒 4 skräp från famnen i skottkärran |
| 0:40 | toast | bra | 🛒 4 skräp från famnen i skottkärran |
| 0:42 | klar | info:bra | 🛒 4 skräp från famnen i skottkärran |
| 0:44 | händelse | printStart | sak=kruka |
| 0:46 | toast | guld | ✅ |
| 0:46 | händelse | printKlar | sak=kruka n=37 |
| 0:47 | händelse | tagitUrPrint | sak=kruka n=1 |
| 0:50 | väntar | bud | (tips) |
| 0:50 | sak | bud | (tips) |
| 0:50 | väntar | du | En skottkärra! Jag väljer den med hjulet och kör den full med skräp. |
| 0:51 | klar | bud | (tips) |
| 0:53 | röst | ali | Köp nåt eller gå, min vän. Mina fötter värker. · STORY |
| 0:53 | butiksbubbla | ali | Köp nåt eller gå, min vän. Mina fötter värker. |
| 0:55 | aliSalt | ali | 105 |
| 0:55 | sak | du | En skottkärra! Jag väljer den med hjulet och kör den full med skräp. |
| 0:55 | röst | du | En skottkärra! Jag väljer den med hjulet och kör den full med skräp. · MÅL |
| 1:01 | klar | du | En skottkärra! Jag väljer den med hjulet och kör den full med skräp. |
| 1:09 | sak | bror | VA?! Du har byggt en skrivare TILL?? Du har typ en printfarm nu. Okej. Det är faktiskt ganska ballt. 🔥 |
| 1:09 | sms | bror | VA?! Du har byggt en skrivare TILL?? Du har typ en printfarm nu. Okej. Det är faktiskt ganska ballt. 🔥 |
| 1:09 | sms-bubbla | bror | VA?! Du har byggt en skrivare TILL?? Du har typ en printfarm nu. Okej. Det är faktiskt ganska ballt. 🔥 |
| 1:09 | röst | bror | VA?! Du har byggt en skrivare TILL?? Du har typ en printfarm nu. Okej. Det är faktiskt ganska ballt. 🔥 · STORY |
| 1:10 | händelse | printStart | sak=kruka |
| 1:13 | toast | guld | ✅ |
| 1:13 | händelse | printKlar | sak=kruka n=38 |
| 1:13 | händelse | tagitUrPrint | sak=kruka n=1 |
| 1:18 | klar | bror | VA?! Du har byggt en skrivare TILL?? Du har typ en printfarm nu. Okej. Det är faktiskt ganska ballt. 🔥 |
| 1:21 | aliSalt | ali | 105 |
| 1:26 | sak | foto | Tak över huvudet |
| 1:26 | foto | du | Tak över huvudet |
| 1:28 | klar | foto | Tak över huvudet |
| 1:31 | händelse | printStart | sak=kruka |
| 1:34 | toast | guld | ✅ |
| 1:34 | händelse | printKlar | sak=kruka n=39 |
| 1:34 | händelse | tagitUrPrint | sak=kruka n=1 |
| 1:36 | sak | du | I natt somnar jag torr. Det börjar bli ett hem. |
| 1:36 | notis | tanke | 💭 I natt somnar jag torr. Det börjar bli ett hem. |
| 1:36 | röst | du | I natt somnar jag torr. Det börjar bli ett hem. · STORY |
| 1:40 | klar | du | I natt somnar jag torr. Det börjar bli ett hem. |
| 1:42 | aliSalt | ali | 105 |
| 1:52 | händelse | printStart | sak=kruka |
| 1:55 | toast | guld | ✅ |
| 1:55 | händelse | printKlar | sak=kruka n=40 |
| 1:55 | händelse | tagitUrPrint | sak=kruka n=1 |
| 2:00 | väntar | ali | Hej granne! |
| 2:00 | sak | ali | Hej granne! |
| 2:00 | bubbla |  | Hej granne! |
| 2:00 | röst | ali | Hej granne! · SMÅPRAT |
| 2:02 | klar | ali | Hej granne! |
| 2:03 | aliSalt | ali | 105 |
| 2:04 | väntar | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått TAK. Och arbetsbord. Skriv in, Gunnar. Du skriver aldrig in. |
| 2:04 | radio | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått TAK. Och arbetsbord. Skriv in, Gunnar. Du skriver aldrig in. |
| 2:04 | skratt | du | Radio-Kjelle |
| 2:12 | sak | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått TAK. Och arbetsbord. Skriv in, Gunnar. Du skriver aldrig in. |
| 2:12 | notis |  | 📻 Radio Tippen: Radio Tippen, Kjelle här. Skjulet vid tippen har fått TAK. Och arbetsbord. Skriv in, Gunnar. Du skriver aldrig in. |
| 2:12 | röst | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått TAK. Och arbetsbord. Skriv in, Gunnar. Du skriver aldrig in. · REAKTION |
| 2:14 | skratt | du | falsk tuta |
| 2:14 | väntar | värld:TUUT TUUT! | TUUT TUUT! |
| 2:21 | klar | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått TAK. Och arbetsbord. Skriv in, Gunnar. Du skriver aldrig in. |
| 2:30 | händelse | printStart | sak=kruka |
| 2:33 | toast | guld | ✅ |
| 2:33 | händelse | printKlar | sak=kruka n=41 |
| 2:33 | händelse | tagitUrPrint | sak=kruka n=1 |
| 2:34 | struken | värld:TUUT TUUT! | TUUT TUUT! |
| 2:36 | paket |  | ge |
| 2:36 | väntar |  | (läget ändras) |
| 2:36 | skratt | du | falsk tuta |
| 2:41 | aliSalt | ali | 105 |
| 2:51 | väntar | rolf | Tjo. Ska grilla på lördag. Min grillspade smälte. Kan du göra en sån hä? /Rolf 🍖​ |
| 2:51 | paket |  | ge |
| 2:51 | väntar |  | (läget ändras) |
| 2:51 | sak | rolf | Tjo. Ska grilla på lördag. Min grillspade smälte. Kan du göra en sån hä? /Rolf 🍖​ |
| 2:51 | lapp | Brev från Rolf | Tjo. Ska grilla på lördag. Min grillspade smälte. Kan du göra en sån hä? /Rolf 🍖​ |
| 2:51 | röst | rolf | Tjo. Ska grilla på lördag. Min grillspade smälte. Kan du göra en sån hä? /Rolf 🍖​ · STORY |
| 2:51 | händelse | malKlart | id=rolf2-brev del=Dag 4 – Kärran och mer vind nasta=rolf2-printa |
| 2:51 | väntar | du | Printa grillspade. |
| 2:51 | MÅL |  | Printa grillspade |
| 2:54 | målruta |  | Printa grillspade |
| 2:55 | händelse | printStart | sak=grillspade |
| 2:55 | händelse | malKlart | id=rolf2-printa del=Dag 4 – Kärran och mer vind nasta=rolf2-ge |
| 2:55 | väntar | du | Ge Rolf grillspade. |
| 2:55 | MÅL |  | Ge Rolf grillspade |
| 2:57 | klar | rolf | Tjo. Ska grilla på lördag. Min grillspade smälte. Kan du göra en sån hä? /Rolf 🍖​ |
| 2:57 | händelse | brevLast | id=rolf:2 |
| 2:59 | målruta |  | Ge Rolf grillspade |
| 2:59 | toast | guld | ✅ |
| 2:59 | händelse | printKlar | sak=grillspade n=1 |
| 2:59 | kvittens-bock |  | ✓ Printa grillspade |
| 2:59 | händelse | tagitUrPrint | sak=grillspade n=1 |
| 2:59 | struken | du | Printa grillspade. |
| 2:59 | sak |  | (läget ändras) |
| 3:00 | klar |  | (läget ändras) |
| 3:00 | sak | du | Ge Rolf grillspade. |
| 3:00 | pil |  | Ge Rolf grillspade |
| 3:00 | röst | du | Ge Rolf grillspade. · MÅL |
| 3:00 | väntar | mamma | Rolf på sopbilen ringde. Han säger att du städar? Vem är du och vad har du gjort med mitt barn? ❤️ |
| 3:02 | klar | du | Ge Rolf grillspade. |
| 3:02 | upplåst | skrivare | trim_skrivare2 |
| 3:02 | brott | UPPLÅST | trim_skrivare2 (skrivare 152 av 75) |
| 3:02 | händelse | upplast | id=trim_skrivare2 flask=skrivare |
| 3:02 | paket |  | tanke → sms |
| 3:02 | tanke | du | Skrivare M hinner inte heller. Den kunde gå fortare. |
| 3:02 | väntar | du | Skrivare M hinner inte heller. Den kunde gå fortare. |
| 3:02 | väntar | ali | Ali här. Skrivartrim igen. Nästa nivå. Den här gången skruvade jag åt rätt håll. |
| 3:05 | händelse | lagtIPostlada | sak=grillspade rolf=2 jobb=false |
| 3:05 | struken | kedja | rolf2 |
| 3:05 | händelse | malKlart | id=rolf2-ge del=Dag 4 – Kärran och mer vind nasta=n3-tom-full-karra |
| 3:05 | väntar | du | Kärran rymmer massor. Jag fyller den och tippar allt i kvarnen. |
| 3:05 | målruta |  | Töm en full kärra i kvarnen |
| 3:06 | MÅL |  | Töm en full kärra i kvarnen |
| 3:06 | sak | du | Kärran rymmer massor. Jag fyller den och tippar allt i kvarnen. |
| 3:06 | pil |  | Töm en full kärra i kvarnen |
| 3:06 | notis | tanke | 💭 Kärran rymmer massor. Jag fyller den och tippar allt i kvarnen. |
| 3:06 | röst | du | Kärran rymmer massor. Jag fyller den och tippar allt i kvarnen. · MÅL |
| 3:09 | kvittens-bock |  | ✓ Ge Rolf grillspade |
| 3:11 | klar | du | Kärran rymmer massor. Jag fyller den och tippar allt i kvarnen. |
| 3:13 | väntar | info:bra | 🛒 4 skräp från famnen i skottkärran |
| 3:13 | sak | info:bra | 🛒 4 skräp från famnen i skottkärran |
| 3:13 | kvitto-visas | info:bra | 🛒 4 skräp från famnen i skottkärran |
| 3:13 | toast | bra | 🛒 4 skräp från famnen i skottkärran |
| 3:14 | karraKlick | du | träff |
| 3:15 | karraKlick | du | träff |
| 3:15 | klar | info:bra | 🛒 4 skräp från famnen i skottkärran |
| 3:17 | karraKlick | du | träff |
| 3:18 | karraKlick | du | träff |
| 3:18 | karraKlick | du | träff |
| 3:20 | karraKlick | du | träff |
| 3:21 | karraKlick | du | träff |
| 3:21 | väntar | värld:Mjau. | Mjau. |
| 3:21 | karraKlick | du | träff |
| 3:24 | tanke | du | Det får inte plats. Jag behöver något att tippa i. |
| 3:24 | väntar | du | Det får inte plats. Jag behöver något att tippa i. |
| 3:24 | väntar | info:bra | 7 st i tratten · 9 st på marken bredvid |
| 3:24 | sak | info:bra | 7 st i tratten · 9 st på marken bredvid |
| 3:24 | kvitto-visas | info:bra | 7 st i tratten · 9 st på marken bredvid |
| 3:24 | toast | bra | 7 st i tratten · 9 st på marken bredvid |
| 3:24 | händelse | malKlart | id=n3-tom-full-karra del=Dag 4 – Kärran och mer vind nasta=sophallare |
| 3:24 | väntar | du | En sophållare bakom kvarnen. Då matar den sig själv. |
| 3:24 | MÅL |  | Plocka skräp och mal det |
| 3:26 | klar | info:bra | 7 st i tratten · 9 st på marken bredvid |
| 3:27 | målruta |  | Plocka skräp och mal det |
| 3:28 | kvittens-bock |  | ✓ Töm en full kärra i kvarnen |
| 3:28 | sak | du | En sophållare bakom kvarnen. Då matar den sig själv. |
| 3:28 | pil |  | Plocka skräp och mal det |
| 3:28 | notis | tanke | 💭 En sophållare bakom kvarnen. Då matar den sig själv. |
| 3:28 | röst | du | En sophållare bakom kvarnen. Då matar den sig själv. · MÅL |
| 3:32 | klar | du | En sophållare bakom kvarnen. Då matar den sig själv. |
| 3:34 | sak | du | Det får inte plats. Jag behöver något att tippa i. |
| 3:34 | notis | tanke | 💭 Det får inte plats. Jag behöver något att tippa i. |
| 3:34 | röst | du | Det får inte plats. Jag behöver något att tippa i. · STORY |
| 3:38 | klar | du | Det får inte plats. Jag behöver något att tippa i. |
| 3:39 | händelse | printStart | sak=kruka |
| 3:41 | struken | värld:Mjau. | Mjau. |
| 3:42 | toast | guld | ✅ |
| 3:42 | händelse | printKlar | sak=kruka n=42 |
| 3:42 | händelse | tagitUrPrint | sak=kruka n=1 |
| 3:47 | sak |  | (läget ändras) |
| 3:47 | brev | rolf | rolf:2 |
| 3:47 | klar |  | (läget ändras) |
| 3:50 | aliSalt | ali | 105 |
| 3:51 | sak | ali | Ali här. Skrivartrim igen. Nästa nivå. Den här gången skruvade jag åt rätt håll. |
| 3:51 | sms | ali | Ali här. Skrivartrim igen. Nästa nivå. Den här gången skruvade jag åt rätt håll. |
| 3:51 | sms-bubbla | ali | Ali här. Skrivartrim igen. Nästa nivå. Den här gången skruvade jag åt rätt håll. |
| 3:51 | röst | ali | Ali här. Skrivartrim igen. Nästa nivå. Den här gången skruvade jag åt rätt håll. · STORY |
| 3:57 | klar | ali | Ali här. Skrivartrim igen. Nästa nivå. Den här gången skruvade jag åt rätt håll. |
| 4:02 | väntar | bud | (tips) |
| 4:02 | sak | bud | (tips) |
| 4:03 | klar | bud | (tips) |
| 4:05 | meddelande | mamma | Vem är den där Ali? Är han snäll? Betalar han dig ordentligt? |
| 4:06 | röst | mamma | Vem är den där Ali? Är han snäll? Betalar han dig ordentligt? · STORY |
| 4:15 | paket |  | sms |
| 4:15 | väntar | mamma | Typ? Jag ringer honom. Vad heter butiken? Jag hittar den. |
| 4:24 | händelse | brevLast | id=m_ali |
| 4:24 | händelse | printStart | sak=kruka |
| 4:27 | toast | guld | ✅ |
| 4:27 | händelse | printKlar | sak=kruka n=43 |
| 4:27 | händelse | tagitUrPrint | sak=kruka n=1 |
| 4:35 | aliSalt | ali | 105 |
| 4:44 | händelse | printStart | sak=kruka |
| 4:46 | toast | guld | ✅ |
| 4:46 | händelse | printKlar | sak=kruka n=44 |
| 4:47 | händelse | tagitUrPrint | sak=kruka n=1 |
| 4:47 | sak | du | Skrivare M hinner inte heller. Den kunde gå fortare. |
| 4:47 | notis | tanke | 💭 Skrivare M hinner inte heller. Den kunde gå fortare. |
| 4:47 | röst | du | Skrivare M hinner inte heller. Den kunde gå fortare. · STORY |
| 4:51 | klar | du | Skrivare M hinner inte heller. Den kunde gå fortare. |
| 4:54 | aliSalt | ali | 105 |
| 4:58 | paket |  | tanke |
| 4:58 | tanke | du | Jaha, Rolf har hämtat grillspade. |
| 4:58 | väntar | du | Jaha, Rolf har hämtat grillspade. |
| 5:04 | händelse | printStart | sak=kruka |
| 5:06 | toast | guld | ✅ |
| 5:06 | händelse | printKlar | sak=kruka n=45 |
| 5:07 | händelse | tagitUrPrint | sak=kruka n=1 |
| 5:14 | aliSalt | ali | 105 |
| 5:20 | skratt | du | falsk tuta |
| 5:20 | väntar | värld:TUUT! Tjena! | TUUT! Tjena! |
| 5:23 | händelse | printStart | sak=kruka |
| 5:26 | toast | guld | ✅ |
| 5:26 | händelse | printKlar | sak=kruka n=46 |
| 5:27 | händelse | tagitUrPrint | sak=kruka n=1 |
| 5:34 | aliSalt | ali | 105 |
| 5:36 | sak | mamma | Typ? Jag ringer honom. Vad heter butiken? Jag hittar den. |
| 5:36 | sms | mamma | Typ? Jag ringer honom. Vad heter butiken? Jag hittar den. |
| 5:36 | sms-bubbla | mamma | Typ? Jag ringer honom. Vad heter butiken? Jag hittar den. |
| 5:36 | röst | mamma | Typ? Jag ringer honom. Vad heter butiken? Jag hittar den. · STORY |
| 5:41 | klar | mamma | Typ? Jag ringer honom. Vad heter butiken? Jag hittar den. |
| 5:43 | struken | värld:TUUT! Tjena! | TUUT! Tjena! |
| 5:50 | händelse | printStart | sak=kruka |
| 5:53 | toast | guld | ✅ |
| 5:53 | händelse | printKlar | sak=kruka n=47 |
| 5:53 | händelse | tagitUrPrint | sak=kruka n=1 |
| 6:01 | aliSalt | ali | 105 |
| 6:01 | sak | du | Jaha, Rolf har hämtat grillspade. |
| 6:01 | notis | tanke | 💭 Jaha, Rolf har hämtat grillspade. |
| 6:01 | röst | du | Jaha, Rolf har hämtat grillspade. · REAKTION |
| 6:04 | klar | du | Jaha, Rolf har hämtat grillspade. |
| 6:13 | händelse | printStart | sak=kruka |
| 6:14 | paket |  | tanke |
| 6:14 | tanke | du | En toffla. Bara en. |
| 6:14 | väntar | du | En toffla. Bara en. |
| 6:14 | skratt | du | kvarnen spottar |
| 6:16 | paket |  | tanke |
| 6:16 | tanke | du | Den blev… spagetti. Ali kallar det modern konst. |
| 6:16 | väntar | du | Den blev… spagetti. Ali kallar det modern konst. |
| 6:16 | skratt | du | plastspagetti |
| 6:16 | toast | guld | ✅ |
| 6:16 | händelse | printKlar | sak=kruka n=48 |
| 6:16 | händelse | tagitUrPrint | sak=spagetti n=1 |
| 6:24 | skratt | du | Ali köper konst |
| 6:24 | aliSalt | ali | 3 |
| 6:32 | händelse | printStart | sak=kruka |
| 6:34 | toast | guld | ✅ |
| 6:34 | händelse | printKlar | sak=kruka n=49 |
| 6:35 | sak | du | En toffla. Bara en. |
| 6:35 | notis | tanke | 💭 En toffla. Bara en. |
| 6:35 | röst | du | En toffla. Bara en. · REAKTION |
| 6:36 | händelse | tagitUrPrint | sak=kruka n=1 |
| 6:38 | klar | du | En toffla. Bara en. |
| 6:44 | aliSalt | ali | 105 |
| 6:47 | sak | du | Den blev… spagetti. Ali kallar det modern konst. |
| 6:47 | notis | tanke | 💭 Den blev… spagetti. Ali kallar det modern konst. |
| 6:47 | röst | du | Den blev… spagetti. Ali kallar det modern konst. · REAKTION |
| 6:51 | klar | du | Den blev… spagetti. Ali kallar det modern konst. |
| 6:53 | händelse | printStart | sak=kruka |
| 6:56 | toast | guld | ✅ |
| 6:56 | händelse | printKlar | sak=kruka n=50 |
| 6:57 | händelse | tagitUrPrint | sak=kruka n=1 |
| 7:01 | upplåst | bara | matarband |
| 7:01 | brott | RESERV | matarband (bara 0 av 6) |
| 7:01 | händelse | upplast | id=matarband flask=bara |
| 7:01 | paket |  | sms |
| 7:01 | väntar | ali | Ali här. 🗑️ Sophållaren. Jag frågade AI:n hur man slipper bära skräp. Den gjorde det här. Den har mer fritid än jag. Suck. |
| 7:01 | sak | ali | Ali här. 🗑️ Sophållaren. Jag frågade AI:n hur man slipper bära skräp. Den gjorde det här. Den har mer fritid än jag. Suck. |
| 7:01 | sms | ali | Ali här. 🗑️ Sophållaren. Jag frågade AI:n hur man slipper bära skräp. Den gjorde det här. Den har mer fritid än jag. Suck. |
| 7:01 | sms-bubbla | ali | Ali här. 🗑️ Sophållaren. Jag frågade AI:n hur man slipper bära skräp. Den gjorde det här. Den har mer fritid än jag. Suck. |
| 7:01 | röst | ali | Ali här. 🗑️ Sophållaren. Jag frågade AI:n hur man slipper bära skräp. Den gjorde det här. Den har mer fritid än jag. Suck. · STORY |
| 7:04 | aliSalt | ali | 105 |
| 7:11 | klar | ali | Ali här. 🗑️ Sophållaren. Jag frågade AI:n hur man slipper bära skräp. Den gjorde det här. Den har mer fritid än jag. Suck. |
| 7:15 | toast | guld | 3D-modell köpt – printa sophållare på skrivaren |
| 7:15 | händelse | kopt | sak=matarband |
| 7:24 | händelse | printStart | sak=byggsats:matarband |
| 7:27 | toast | bra | Del 1 av 3 klar |
| 7:31 | toast | bra | Del 2 av 3 klar |
| 7:33 | toast | fel | Ingen ström – trampa cykeln |
| 7:42 | händelse | printKlar | sak=byggsats:matarband n=1 |
| 7:42 | toast | guld | ✅ |
| 7:42 | händelse | tagitUrPrint | sak=byggsats:matarband n=1 |
| 7:42 | paket |  | sms |
| 7:42 | väntar | ali | Ali här. Jag såg Sophållare på avstånd. Ett streck blev lite snett. Mitt fel. Vackert ändå. |
| 7:42 | paket |  | sms |
| 7:42 | väntar | ali | Ali igen. Jag har sagt till min bror att jag inte går i pension. Jag startar något. Han skrattade. Jag skrattade också. Men jag menar det. Tack. Säg inget. |
| 7:44 | händelse | placerat | sak=sophallare |
| 7:44 | kvittens | du | Nu kan jag tömma hela kärran på en gång. |
| 7:44 | varför | du | Krukor är bra. Pallar är bättre. |
| 7:44 | väntar | du | Nu kan jag tömma hela kärran på en gång. |
| 7:44 | väntar | info:guld | 🗑️ Sophållaren står bakom kvarnen! Töm allt skräp i den – den matar kvarnen själv. |
| 7:44 | sak | du | Nu kan jag tömma hela kärran på en gång. |
| 7:44 | notis | tanke | 💭 Nu kan jag tömma hela kärran på en gång. |
| 7:44 | röst | du | Nu kan jag tömma hela kärran på en gång. · STORY |
| 7:44 | händelse | malKlart | id=sophallare del=Dag 4 – Kärran och mer vind nasta=pall |
| 7:44 | väntar | du | Jag behöver något att sitta på. En pall. Lagom ambitiöst. |
| 7:44 | MÅL |  | Printa en pall |
| 7:48 | klar | du | Nu kan jag tömma hela kärran på en gång. |
| 7:48 | sak | info:guld | 🗑️ Sophållaren står bakom kvarnen! Töm allt skräp i den – den matar kvarnen själv. |
| 7:48 | kvitto-visas | info:guld | 🗑️ Sophållaren står bakom kvarnen! Töm allt skräp i den – den matar kvarnen själv. |
| 7:48 | toast | guld | 🗑️ Sophållaren står bakom kvarnen! Töm allt skräp i den – den matar kvarnen själv. |
| 7:48 | målruta |  | Printa en pall |
| 7:50 | klar | info:guld | 🗑️ Sophållaren står bakom kvarnen! Töm allt skräp i den – den matar kvarnen själv. |
| 7:52 | sak | du | Jag behöver något att sitta på. En pall. Lagom ambitiöst. |
| 7:52 | pil |  | Printa en pall |
| 7:52 | notis | tanke | 💭 Jag behöver något att sitta på. En pall. Lagom ambitiöst. |
| 7:52 | röst | du | Jag behöver något att sitta på. En pall. Lagom ambitiöst. · MÅL |
| 7:52 | nick |  | nick:46 |
| 7:56 | klar | du | Jag behöver något att sitta på. En pall. Lagom ambitiöst. |
| 7:58 | struken | ali | Ali här. Jag såg Sophållare på avstånd. Ett streck blev lite snett. Mitt fel. Vackert ändå. |
| 8:06 | händelse | kopt | sak=pall |
| 8:06 | röst | ali | Bra val. Folk köper sånt. Jag vet inte varför. · STORY |
| 8:06 | upprepning | ali | Bra val. Folk köper sånt. Jag vet inte varför. |
| 8:06 | butiksbubbla | ali | Pall? Bra val. Folk köper sånt. Jag vet inte varför. |
| 8:14 | händelse | printStart | sak=pall |
| 8:19 | toast | guld | ✅ |
| 8:19 | händelse | printKlar | sak=pall n=1 |
| 8:19 | händelse | malKlart | id=pall del=Dag 4 – Kärran och mer vind nasta=vind4 |
| 8:19 | väntar | du | En vindsnurra till på skjulets tak. Skrivarna vill ha mer ström. |
| 8:19 | målruta |  | Printa och sälj |
| 8:20 | MÅL |  | Printa och sälj |
| 8:20 | sak | du | En vindsnurra till på skjulets tak. Skrivarna vill ha mer ström. |
| 8:20 | pil |  | Printa och sälj |
| 8:20 | notis | tanke | 💭 En vindsnurra till på skjulets tak. Skrivarna vill ha mer ström. |
| 8:20 | röst | du | En vindsnurra till på skjulets tak. Skrivarna vill ha mer ström. · MÅL |
| 8:20 | händelse | tagitUrPrint | sak=pall n=1 |
| 8:23 | kvittens-bock |  | ✓ Printa en pall |
| 8:25 | klar | du | En vindsnurra till på skjulets tak. Skrivarna vill ha mer ström. |
| 8:26 | händelse | placerat | sak=pall |
| 8:48 | skratt | du | falsk tuta |
| 8:49 | händelse | printStart | sak=pall |
| 8:54 | toast | guld | ✅ |
| 8:54 | händelse | printKlar | sak=pall n=2 |
| 8:55 | händelse | tagitUrPrint | sak=pall n=1 |
| 9:00 | struken | mamma | Rolf på sopbilen ringde. Han säger att du städar? Vem är du och vad har du gjort med mitt barn? ❤️ |
| 9:02 | aliSalt | ali | 180 |
| 9:10 | väntar | värld:TUUT TUUT! | TUUT TUUT! |
| 9:10 | sak | värld:TUUT TUUT! | TUUT TUUT! |
| 9:10 | bubbla |  | TUUT TUUT! |
| 9:10 | händelse | printStart | sak=pall |
| 9:13 | klar | värld:TUUT TUUT! | TUUT TUUT! |
| 9:15 | upplåst | strom | vindsnurra2 |
| 9:15 | brott | UPPLÅST | vindsnurra2 (strom 30 av 15) |
| 9:15 | händelse | upplast | id=vindsnurra2 flask=strom |
| 9:15 | paket |  | tanke → sms |
| 9:15 | tanke | du | En snurra räcker inte. Skrivarna står still så fort det blir stilla. |
| 9:15 | väntar | du | En snurra räcker inte. Skrivarna står still så fort det blir stilla. |
| 9:15 | väntar | ali | Ali här. En snurra till? Taket har plats för två. Vinden har inget emot det. |
| 9:16 | toast | guld | ✅ |
| 9:16 | händelse | printKlar | sak=pall n=3 |
| 9:16 | händelse | tagitUrPrint | sak=pall n=1 |
| 9:21 | sak | du | En snurra räcker inte. Skrivarna står still så fort det blir stilla. |
| 9:21 | notis | tanke | 💭 En snurra räcker inte. Skrivarna står still så fort det blir stilla. |
| 9:21 | röst | du | En snurra räcker inte. Skrivarna står still så fort det blir stilla. · STORY |
| 9:23 | aliSalt | ali | 171 |
| 9:26 | klar | du | En snurra räcker inte. Skrivarna står still så fort det blir stilla. |
| 9:30 | toast | guld | 3D-modell köpt – printa vindsnurra till skjultaket på skrivaren |
| 9:30 | händelse | kopt | sak=vindsnurra |
| 9:39 | händelse | printStart | sak=byggsats:vindsnurra |
| 9:42 | händelse | printKlar | sak=byggsats:vindsnurra n=1 |
| 9:42 | toast | guld | ✅ |
| 9:43 | sak | ali | Ali här. En snurra till? Taket har plats för två. Vinden har inget emot det. |
| 9:43 | sms | ali | Ali här. En snurra till? Taket har plats för två. Vinden har inget emot det. |
| 9:43 | sms-bubbla | ali | Ali här. En snurra till? Taket har plats för två. Vinden har inget emot det. |
| 9:43 | röst | ali | Ali här. En snurra till? Taket har plats för två. Vinden har inget emot det. · STORY |
| 9:43 | väntar | info:guld | 🌬️ Vindsnurran ligger i handen – klicka på skjulet för att sätta den på taket |
| 9:43 | händelse | tagitUrPrint | sak=byggsats:vindsnurra n=1 |
| 9:45 | kvitto-visas | info:guld | 🌬️ Vindsnurran ligger i handen – klicka på skjulet för att sätta den på taket |
| 9:45 | toast | guld | 🌬️ Vindsnurran ligger i handen – klicka på skjulet för att sätta den på taket |
| 9:49 | klar | ali | Ali här. En snurra till? Taket har plats för två. Vinden har inget emot det. |
| 9:55 | händelse | placerat | sak=vindsnurra |
| 9:55 | väntar | info:guld | 🌬️ Vindsnurran sitter på taket – den trampar cykeln åt dig när det blåser |
| 9:55 | monterat | du | byggsats:vindsnurra |
| 9:55 | händelse | monterat | sak=vindsnurra |
| 9:55 | sak | info:guld | 🌬️ Vindsnurran sitter på taket – den trampar cykeln åt dig när det blåser |
| 9:55 | kvitto-visas | info:guld | 🌬️ Vindsnurran sitter på taket – den trampar cykeln åt dig när det blåser |
| 9:55 | toast | guld | 🌬️ Vindsnurran sitter på taket – den trampar cykeln åt dig när det blåser |
| 9:55 | händelse | malKlart | id=vind4 del=Dag 4 – Kärran och mer vind nasta=n3-isolera-tva-vaggar |
| 9:55 | väntar | du | Slut på trampandet. Nästan. |
| 9:55 | väntar | du | Det drar genom väggarna. Isolering, och sen blir det varmt. |
| 9:56 | MÅL |  | Isolera två väggar · 0/2 |
| 9:57 | klar | info:guld | 🌬️ Vindsnurran sitter på taket – den trampar cykeln åt dig när det blåser |
| 9:57 | sak | du | Slut på trampandet. Nästan. |
| 9:57 | kvitto-visas | du | Slut på trampandet. Nästan. |
| 9:57 | lapp | 📔 Dagbok | Slut på trampandet. Nästan. |
| 9:57 | meddelande | du | Slut på trampandet. Nästan. |
| 9:57 | dagbokkort | du | Slut på trampandet. Nästan. |
| 9:58 | röst | du | Slut på trampandet. Nästan. · STORY |
| 10:03 | händelse | brevLast | id=sol |
| 10:03 | klar | du | Slut på trampandet. Nästan. |
| 10:03 | målruta |  | Isolera två väggar · 0/2 |
| 10:03 | sak | du | Det drar genom väggarna. Isolering, och sen blir det varmt. |
| 10:03 | pil |  | Isolera två väggar · 0/2 |
| 10:03 | notis | tanke | 💭 Det drar genom väggarna. Isolering, och sen blir det varmt. |
| 10:03 | röst | du | Det drar genom väggarna. Isolering, och sen blir det varmt. · MÅL |
| 10:03 | nick |  | nick:48 |
| 10:05 | händelse | pappa | Pappa ringer |
| 10:08 | klar | du | Det drar genom väggarna. Isolering, och sen blir det varmt. |
| 10:13 | röst | pappa | Hej. Det är pappa. · STORY |
| 10:15 | röst | du | Hej pappa. · STORY |
| 10:18 | röst | pappa | Mamma står bredvid. Hon säger att jag ska fråga om du äter. · STORY |
| 10:24 | röst | du | Jag äter. Och jag har en egen kvarn nu. Och en 3D-skrivare. · STORY |
| 10:30 | röst | pappa | Jaha. En kvarn. Vad lugnt då. · STORY |
| 10:33 | röst | pappa | Jag kanske kommer förbi nån dag. Om det passar. · STORY |
| 10:38 | röst | du | Det passar. · STORY |
| 10:40 | röst | pappa | Bra. Hej då då. · STORY |
| 10:49 | händelse | samtalSlut | id=pappa4 |
| 10:49 | struken | kedja | samtal4 |
| 10:55 | toast | guld | 3D-modell köpt – printa isolerskiva (vägg) på skrivaren |
| 10:55 | händelse | kopt | sak=vaggar |
| 11:03 | händelse | printStart | sak=byggsats:vaggar |
| 11:07 | händelse | printKlar | sak=byggsats:vaggar n=1 |
| 11:07 | toast | guld | ✅ |
| 11:08 | händelse | tagitUrPrint | sak=byggsats:vaggar n=1 |
| 11:12 | väntar | info:guld | 🧱 Bakväggen klar. 3 kvar. |
| 11:12 | sak | info:guld | 🧱 Bakväggen klar. 3 kvar. |
| 11:12 | kvitto-visas | info:guld | 🧱 Bakväggen klar. 3 kvar. |
| 11:12 | toast | guld | 🧱 Bakväggen klar. 3 kvar. |
| 11:14 | klar | info:guld | 🧱 Bakväggen klar. 3 kvar. |
| 11:21 | händelse | printStart | sak=byggsats:vaggar |
| 11:25 | händelse | printKlar | sak=byggsats:vaggar n=1 |
| 11:25 | toast | guld | ✅ |
| 11:26 | händelse | tagitUrPrint | sak=byggsats:vaggar n=1 |
| 11:30 | väntar | info:guld | 🧱 Vänster vägg klar. 2 kvar. |
| 11:30 | sak | info:guld | 🧱 Vänster vägg klar. 2 kvar. |
| 11:30 | kvitto-visas | info:guld | 🧱 Vänster vägg klar. 2 kvar. |
| 11:30 | toast | guld | 🧱 Vänster vägg klar. 2 kvar. |
| 11:30 | händelse | malKlart | id=n3-isolera-tva-vaggar del=Dag 4 – Kärran och mer vind nasta=sov4 |
| 11:30 | paket |  | lapp |
| 11:30 | väntar | du | Dag 4 är slut. En skrivare räcker inte. |
| 11:30 | MÅL |  | Klart för idag – sov när du vill |
| 11:32 | klar | info:guld | 🧱 Vänster vägg klar. 2 kvar. |
| 11:32 | sak | du | Dag 4 är slut. En skrivare räcker inte. |
| 11:32 | kvitto-visas | du | Dag 4 är slut. En skrivare räcker inte. |
| 11:32 | lapp | 📔 Dagbok | Dag 4 är slut. En skrivare räcker inte. |
| 11:32 | meddelande | du | Dag 4 är slut. En skrivare räcker inte. |
| 11:32 | dagbokkort | du | Dag 4 är slut. En skrivare räcker inte. |
| 11:32 | röst | du | Dag 4 är slut. En skrivare räcker inte. · STORY |
| 11:38 | händelse | brevLast | id=kvall4 |
| 11:38 | klar | du | Dag 4 är slut. En skrivare räcker inte. |
| 11:38 | väntar | notis:🌇 Klockan är 21. Ali slår igen luckan.  | 🌇 Klockan är 21. Ali slår igen luckan. Dagens jobb är klart – gå in i skjulet och sov i sängen. |
| 11:38 | målruta |  | Klart för idag – sov när du vill |
| 11:38 | sak | du | (nytt mål i rutan) |
| 11:38 | pil |  | Klart för idag – sov när du vill |
| 11:38 | klar | du | (nytt mål i rutan) |

<details><summary>Botens handlingar dag 4</summary>

- 0:00 — dag 4 börjar — (2520 kr)
- 0:15 popup: "FORTSÄTT" (2520 kr)
- 0:32 gå till Rolfs postlåda (28 m) (2520 kr)
- 0:40 panel: "Rolfs postlåda
Det här låg i l" (2640 kr)
- 0:40 tjänar pengar till väntar på sopbilen (BO): 2640/2700 kr → printar blomkruka (105 kr) (2640 kr)
- 0:42 gå till skrivaren (8 m) (2640 kr)
- 0:44 printar Blomkruka (2640 kr)
- 0:47 tar ut 1 st ur skrivaren (2640 kr)
- 0:53 gå till Ali (26 m) (2640 kr)
- 0:53 öppnar Alis butik – sälja (2640 kr)
- 0:55 säljer hos Ali: +105 kr (2745 kr)
- 1:03 tjänar pengar till väntar på sopbilen (BO): 2745/2805 kr → printar blomkruka (105 kr) (2745 kr)
- 1:08 gå till skrivaren (24 m) (2745 kr)
- 1:10 printar Blomkruka (2745 kr)
- 1:14 tar ut 1 st ur skrivaren (2745 kr)
- 1:19 gå till Ali (24 m) (2745 kr)
- 1:19 öppnar Alis butik – sälja (2745 kr)
- 1:21 säljer hos Ali: +105 kr (2850 kr)
- 1:24 tjänar pengar till väntar på sopbilen (BO): 2850/2910 kr → printar blomkruka (105 kr) (2850 kr)
- 1:29 gå till skrivaren (24 m) (2850 kr)
- 1:31 printar Blomkruka (2850 kr)
- 1:35 tar ut 1 st ur skrivaren (2850 kr)
- 1:40 gå till Ali (24 m) (2850 kr)
- 1:40 öppnar Alis butik – sälja (2850 kr)
- 1:42 säljer hos Ali: +105 kr (2955 kr)
- 1:45 tjänar pengar till väntar på sopbilen (BO): 2955/3015 kr → printar blomkruka (105 kr) (2955 kr)
- 1:50 gå till skrivaren (24 m) (2955 kr)
- 1:52 printar Blomkruka (2955 kr)
- 1:56 tar ut 1 st ur skrivaren (2955 kr)
- 2:01 gå till Ali (24 m) (2955 kr)
- 2:01 öppnar Alis butik – sälja (2955 kr)
- 2:03 säljer hos Ali: +105 kr (3060 kr)
- 2:06 tjänar pengar till väntar på sopbilen (BO): 3060/3120 kr → printar blomkruka (105 kr) (3060 kr)
- 2:19 plockar 6 skräp på tippen (bär max 16) (3060 kr)
- 2:22 gå till kvarnen (12 m) (3060 kr)
- 2:28 gå till skrivaren (5 m) (3060 kr)
- 2:30 printar Blomkruka (3060 kr)
- 2:34 tar ut 1 st ur skrivaren (3060 kr)
- 2:39 gå till Ali (26 m) (3060 kr)
- 2:39 öppnar Alis butik – sälja (3060 kr)
- 2:41 säljer hos Ali: +105 kr (3165 kr)
- 2:51 gå till Rolfs postlåda (31 m) (3165 kr)
- 2:53 gå till skrivaren (8 m) (3165 kr)
- 2:55 printar Grillspade (3165 kr)
- 3:00 tar ut 1 st ur skrivaren (3165 kr)
- 3:04 valj grillspade: true, vald grillspade, post {"l":null,"tr":null,"tm":[]}, nummer false (3165 kr)
- 3:05 gå till Rolfs postlåda (8 m) (3165 kr)
- 3:22 fyller kärran med 8 skräp (3165 kr)
- 3:24 gå till kvarnen (7 m) (3165 kr)
- 3:36 tjänar pengar till väntar på flaskhalsen för matarband: 3165/3205 kr → printar blomkruka (105 kr) (3165 kr)
- 3:38 gå till skrivaren (5 m) (3165 kr)
- 3:39 printar Blomkruka (3165 kr)
- 3:43 tar ut 1 st ur skrivaren (3165 kr)
- 3:49 gå till Ali (27 m) (3165 kr)
- 3:49 öppnar Alis butik – sälja (3165 kr)
- 3:50 säljer hos Ali: +105 kr (3270 kr)
- 4:00 tjänar pengar till väntar på flaskhalsen för matarband: 3270/3310 kr → printar blomkruka (105 kr) (3270 kr)
- 4:05 gå till skrivaren (24 m) (3270 kr)
- 4:15 popup: "Han är snäll. Typ." (3270 kr)
- 4:24 popup: "Läst" (3270 kr)
- 4:24 printar Blomkruka (3270 kr)
- 4:28 tar ut 1 st ur skrivaren (3270 kr)
- 4:33 gå till Ali (24 m) (3270 kr)
- 4:33 öppnar Alis butik – sälja (3270 kr)
- 4:35 säljer hos Ali: +105 kr (3375 kr)
- 4:37 tjänar pengar till väntar på flaskhalsen för matarband: 3375/3415 kr → printar blomkruka (105 kr) (3375 kr)
- 4:42 gå till skrivaren (24 m) (3375 kr)
- 4:44 printar Blomkruka (3375 kr)
- 4:48 tar ut 1 st ur skrivaren (3375 kr)
- 4:53 gå till Ali (24 m) (3375 kr)
- 4:53 öppnar Alis butik – sälja (3375 kr)
- 4:55 säljer hos Ali: +105 kr (3480 kr)
- 4:57 tjänar pengar till väntar på flaskhalsen för matarband: 3480/3520 kr → printar blomkruka (105 kr) (3480 kr)
- 5:02 gå till skrivaren (24 m) (3480 kr)
- 5:04 printar Blomkruka (3480 kr)
- 5:07 tar ut 1 st ur skrivaren (3480 kr)
- 5:13 gå till Ali (24 m) (3480 kr)
- 5:13 öppnar Alis butik – sälja (3480 kr)
- 5:14 säljer hos Ali: +105 kr (3585 kr)
- 5:17 tjänar pengar till väntar på flaskhalsen för matarband: 3585/3625 kr → printar blomkruka (105 kr) (3585 kr)
- 5:22 gå till skrivaren (24 m) (3585 kr)
- 5:23 printar Blomkruka (3585 kr)
- 5:27 tar ut 1 st ur skrivaren (3585 kr)
- 5:32 gå till Ali (24 m) (3585 kr)
- 5:32 öppnar Alis butik – sälja (3585 kr)
- 5:34 säljer hos Ali: +105 kr (3690 kr)
- 5:43 tjänar pengar till väntar på flaskhalsen för matarband: 3690/3730 kr → printar blomkruka (105 kr) (3690 kr)
- 5:48 gå till skrivaren (24 m) (3690 kr)
- 5:50 printar Blomkruka (3690 kr)
- 5:54 tar ut 1 st ur skrivaren (3690 kr)
- 5:59 gå till Ali (24 m) (3690 kr)
- 5:59 öppnar Alis butik – sälja (3690 kr)
- 6:01 säljer hos Ali: +105 kr (3795 kr)
- 6:06 tjänar pengar till väntar på flaskhalsen för matarband: 3795/3835 kr → printar blomkruka (105 kr) (3795 kr)
- 6:11 gå till skrivaren (24 m) (3795 kr)
- 6:13 printar Blomkruka (3795 kr)
- 6:17 tar ut 1 st ur skrivaren (3795 kr)
- 6:22 gå till Ali (24 m) (3795 kr)
- 6:22 öppnar Alis butik – sälja (3795 kr)
- 6:24 säljer hos Ali: +3 kr (3798 kr)
- 6:25 tjänar pengar till väntar på flaskhalsen för matarband: 3798/3835 kr → printar blomkruka (105 kr) (3798 kr)
- 6:30 gå till skrivaren (24 m) (3798 kr)
- 6:32 printar Blomkruka (3798 kr)
- 6:36 gå till skrivaren (4 m) (3798 kr)
- 6:37 tar ut 1 st ur skrivaren (3798 kr)
- 6:43 gå till Ali (26 m) (3798 kr)
- 6:43 öppnar Alis butik – sälja (3798 kr)
- 6:44 säljer hos Ali: +105 kr (3903 kr)
- 6:47 tjänar pengar till väntar på flaskhalsen för matarband: 3903/3943 kr → printar blomkruka (105 kr) (3903 kr)
- 6:52 gå till skrivaren (24 m) (3903 kr)
- 6:53 printar Blomkruka (3903 kr)
- 6:57 tar ut 1 st ur skrivaren (3903 kr)
- 7:02 gå till Ali (24 m) (3903 kr)
- 7:02 öppnar Alis butik – sälja (3903 kr)
- 7:04 säljer hos Ali: +105 kr (4008 kr)
- 7:13 öppnar Alis butik – köpa sophållare (4008 kr)
- 7:16 köper matarband för 120 kr (3888 kr)
- 7:22 gå till skrivaren (24 m) (3888 kr)
- 7:24 printar Sophållare (3 delar) (3888 kr)
- 7:43 tar ut 1 st ur skrivaren (3888 kr)
- 7:44 gå till kvarnen (5 m) (3888 kr)
- 8:04 gå till Ali (29 m) (3888 kr)
- 8:04 öppnar Alis butik – köpa receptet pall (3888 kr)
- 8:06 köper pall för 80 kr (3808 kr)
- 8:13 gå till skrivaren (24 m) (3808 kr)
- 8:14 printar Pall (3808 kr)
- 8:20 tar ut 1 st ur skrivaren (3808 kr)
- 8:25 gå till platsen för pall (20 m) (3808 kr)
- 8:26 ställer ut pall (3808 kr)
- 8:27 tjänar pengar till väntar på flaskhalsen för vindsnurra2: 3808/3848 kr → printar pall (180 kr) (3808 kr)
- 8:39 plockar 5 skräp på tippen (bär max 16) (3808 kr)
- 8:41 gå till kvarnen (10 m) (3808 kr)
- 8:48 gå till skrivaren (5 m) (3808 kr)
- 8:49 printar Pall (3808 kr)
- 8:55 tar ut 1 st ur skrivaren (3808 kr)
- 9:01 gå till Ali (27 m) (3808 kr)
- 9:01 öppnar Alis butik – sälja (3808 kr)
- 9:03 säljer hos Ali: +180 kr (3988 kr)
- 9:04 tjänar pengar till väntar på flaskhalsen för vindsnurra2: 3988/4028 kr → printar pall (171 kr) (3988 kr)
- 9:09 gå till skrivaren (24 m) (3988 kr)
- 9:10 printar Pall (3988 kr)
- 9:17 tar ut 1 st ur skrivaren (3988 kr)
- 9:22 gå till Ali (24 m) (3988 kr)
- 9:22 öppnar Alis butik – sälja (3988 kr)
- 9:24 säljer hos Ali: +171 kr (4159 kr)
- 9:28 öppnar Alis butik – köpa vindsnurra till skjultaket (4159 kr)
- 9:31 köper vindsnurra för 133 kr (4026 kr)
- 9:37 gå till skrivaren (24 m) (4026 kr)
- 9:39 printar Vindsnurra till skjultaket (4026 kr)
- 9:44 tar ut 1 st ur skrivaren (4026 kr)
- 9:55 gå till sätt vindsnurran på taket (18 m) (4026 kr)
- 10:03 popup: "FORTSÄTT" (4026 kr)
- 10:13 popup: "Svara E" (4026 kr)
- 10:21 popup: "Nästa E" (4026 kr)
- 10:31 popup: "Nästa E" (4026 kr)
- 10:38 popup: "Nästa E" (4026 kr)
- 10:43 popup: "Nästa E" (4026 kr)
- 10:49 popup: "Lägg på E" (4026 kr)
- 10:53 gå till Ali (20 m) (4026 kr)
- 10:53 öppnar Alis butik – köpa isolerskiva (vägg) (4026 kr)
- 10:56 köper vaggar för 130 kr (3896 kr)
- 11:02 gå till skrivaren (24 m) (3896 kr)
- 11:03 printar Isolerskiva (vägg) (3896 kr)
- 11:08 tar ut 1 st ur skrivaren (3896 kr)
- 11:12 gå till skjulet (bak) (17 m) (3896 kr)
- 11:20 gå till skrivaren (17 m) (3896 kr)
- 11:21 printar Isolerskiva (vägg) (3896 kr)
- 11:26 tar ut 1 st ur skrivaren (3896 kr)
- 11:30 gå till skjulet (vanster) (17 m) (3896 kr)
- 11:38 popup: "FORTSÄTT" (3896 kr)
- 11:41 gå till sängen (1 m) (3896 kr)

</details>

## Dag 5

| Tid | Källa | Vem | Text |
|---|---|---|---|
| 11:43 | vara | ali | pall |
| 11:43 | händelse | malKlart | id=sov4 del=Dag 4 – Kärran och mer vind nasta=rolf3-brev |
| 11:43 | MÅL |  | Vänta på sopbilen. Den lämnar något. |
| 0:01 | händelse | dagenBorjar | dag=5 |
| 0:01 | meddelande | du | Dag 5. 17 dagar till jul. Utan pengar blir det ingen jul här. |
| 0:01 | dagbokkort | du | Tätt och mysigt · Dag 5. 17 dagar till jul. Utan pengar blir det ingen jul här. |
| 0:01 | röst | du | Tätt och mysigt. Dag 5. 17 dagar till jul. Utan pengar blir det ingen jul här. · STORY |
| 0:15 | händelse | morgonkortStangt | dag=5 |
| 0:15 | målruta |  | Vänta på sopbilen. Den lämnar något. |
| 0:20 | sak | du | (nytt mål i rutan) |
| 0:20 | pil |  | Vänta på sopbilen. Den lämnar något. |
| 0:20 | klar | du | (nytt mål i rutan) |
| 0:22 | struken | notis:🌇 Klockan är 21. Ali slår igen luckan.  | 🌇 Klockan är 21. Ali slår igen luckan. Dagens jobb är klart – gå in i skjulet och sov i sängen. |
| 0:22 | struken | ali | Ali igen. Jag har sagt till min bror att jag inte går i pension. Jag startar något. Han skrattade. Jag skrattade också. Men jag menar det. Tack. Säg inget. |
| 0:23 | skratt | du | falsk tuta |
| 0:34 | väntar | rolf | Grillspaden ä ju KONST. Pengar i lådan. /Rolf |
| 0:38 | händelse | printStart | sak=pall |
| 0:43 | toast | guld | ✅ |
| 0:43 | händelse | printKlar | sak=pall n=4 |
| 0:43 | händelse | tagitUrPrint | sak=pall n=1 |
| 0:49 | röst | ali | Jag har stått här sedan sex i morse. Vad vill du? · STORY |
| 0:49 | butiksbubbla | ali | Jag har stått här sedan sex i morse. Vad vill du? |
| 0:51 | aliSalt | ali | 270 |
| 0:57 | väntar | mamma | Det finns måsar vid soptippar! Dom tar mat. Och små hundar. Du är inte en liten hund men ändå. |
| 1:12 | sak | mamma | Det finns måsar vid soptippar! Dom tar mat. Och små hundar. Du är inte en liten hund men ändå. |
| 1:12 | sms | mamma | Det finns måsar vid soptippar! Dom tar mat. Och små hundar. Du är inte en liten hund men ändå. |
| 1:12 | sms-bubbla | mamma | Det finns måsar vid soptippar! Dom tar mat. Och små hundar. Du är inte en liten hund men ändå. |
| 1:12 | röst | mamma | Det finns måsar vid soptippar! Dom tar mat. Och små hundar. Du är inte en liten hund men ändå. · STORY |
| 1:17 | händelse | printStart | sak=pall |
| 1:19 | klar | mamma | Det finns måsar vid soptippar! Dom tar mat. Och små hundar. Du är inte en liten hund men ändå. |
| 1:22 | toast | guld | ✅ |
| 1:22 | händelse | printKlar | sak=pall n=5 |
| 1:23 | händelse | tagitUrPrint | sak=pall n=1 |
| 1:30 | aliSalt | ali | 257 |
| 1:41 | händelse | printStart | sak=pall |
| 1:46 | toast | guld | ✅ |
| 1:46 | händelse | printKlar | sak=pall n=6 |
| 1:46 | händelse | tagitUrPrint | sak=pall n=1 |
| 1:51 | väntar | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har börjat isolera. Och pall. Det är stort, Gunnar. |
| 1:51 | radio | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har börjat isolera. Och pall. Det är stort, Gunnar. |
| 1:51 | skratt | du | Radio-Kjelle |
| 1:51 | sak | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har börjat isolera. Och pall. Det är stort, Gunnar. |
| 1:51 | notis |  | 📻 Radio Tippen: Radio Tippen, Kjelle här. Skjulet vid tippen har börjat isolera. Och pall. Det är stort, Gunnar. |
| 1:51 | röst | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har börjat isolera. Och pall. Det är stort, Gunnar. · REAKTION |
| 1:54 | aliSalt | ali | 244 |
| 1:59 | klar | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har börjat isolera. Och pall. Det är stort, Gunnar. |
| 2:08 | händelse | printStart | sak=pall |
| 2:11 | väntar | info:guld | 🚛 Rolf tippade DUBBEL last på soptippen! |
| 2:11 | sak | info:guld | 🚛 Rolf tippade DUBBEL last på soptippen! |
| 2:11 | kvitto-visas | info:guld | 🚛 Rolf tippade DUBBEL last på soptippen! |
| 2:11 | toast | guld | 🚛 Rolf tippade DUBBEL last på soptippen! |
| 2:13 | toast | guld | ✅ |
| 2:13 | händelse | printKlar | sak=pall n=7 |
| 2:13 | händelse | tagitUrPrint | sak=pall n=1 |
| 2:13 | klar | info:guld | 🚛 Rolf tippade DUBBEL last på soptippen! |
| 2:20 | aliSalt | ali | 231 |
| 2:31 | händelse | printStart | sak=pall |
| 2:36 | toast | guld | ✅ |
| 2:36 | händelse | printKlar | sak=pall n=8 |
| 2:36 | händelse | tagitUrPrint | sak=pall n=1 |
| 2:41 | väntar | ali | Jag har en ny hylla. Den lutar. Som jag. |
| 2:41 | sak | ali | Jag har en ny hylla. Den lutar. Som jag. |
| 2:41 | röst | ali | Jag har en ny hylla. Den lutar. Som jag. · SMÅPRAT |
| 2:42 | bubbla |  | Jag har en ny hylla. Den lutar. Som jag. |
| 2:44 | aliSalt | ali | 220 |
| 2:44 | klar | ali | Jag har en ny hylla. Den lutar. Som jag. |
| 2:54 | händelse | printStart | sak=pall |
| 2:57 | väntar | mamma | Sover du ordentligt? Du ser trött ut. Jag vet att jag inte kan se dig. Men jag vet. |
| 2:59 | toast | guld | ✅ |
| 2:59 | händelse | printKlar | sak=pall n=9 |
| 2:59 | händelse | tagitUrPrint | sak=pall n=1 |
| 3:02 | väntar | info:fel | Göran snodde pall. |
| 3:02 | paket |  | tanke → tanke |
| 3:02 | tanke | du | HALLÅ! Den där måsen tog min grej! |
| 3:02 | väntar | du | HALLÅ! Den där måsen tog min grej! |
| 3:02 | tanke | du | Mamma hade rätt. Säg inget till henne. |
| 3:02 | väntar | du | Mamma hade rätt. Säg inget till henne. |
| 3:02 | paket |  | sms |
| 3:02 | väntar | rolf | Dä ä Göran. Han ä från 2014. Han tar int skräp, bara grejer som e fina. MVH ROLF |
| 3:03 | sak | info:fel | Göran snodde pall. |
| 3:03 | kvitto-visas | info:fel | Göran snodde pall. |
| 3:03 | toast | fel | Göran snodde pall. |
| 3:05 | klar | info:fel | Göran snodde pall. |
| 3:10 | skratt | du | falsk tuta |
| 3:13 | sak | du | HALLÅ! Den där måsen tog min grej! |
| 3:13 | notis | tanke | 💭 HALLÅ! Den där måsen tog min grej! |
| 3:13 | röst | du | HALLÅ! Den där måsen tog min grej! · STORY |
| 3:16 | klar | du | HALLÅ! Den där måsen tog min grej! |
| 3:18 | väntar | värld:TUUT! Tjena! | TUUT! Tjena! |
| 3:18 | paket |  | ge |
| 3:18 | väntar |  | (läget ändras) |
| 3:19 | sak |  | (läget ändras) |
| 3:19 | brev | rolf | rolf:3 |
| 3:19 | klar |  | (läget ändras) |
| 3:24 | skratt | du | däcket rullar iväg |
| 3:25 | sak | du | Mamma hade rätt. Säg inget till henne. |
| 3:25 | notis | tanke | 💭 Mamma hade rätt. Säg inget till henne. |
| 3:25 | röst | du | Mamma hade rätt. Säg inget till henne. · STORY |
| 3:28 | händelse | printStart | sak=pall |
| 3:28 | klar | du | Mamma hade rätt. Säg inget till henne. |
| 3:29 | väntar | foto | Göran. Tjuv. |
| 3:29 | paket |  | tanke |
| 3:29 | tanke | du | Okej, Göran. Nästa gång är jag beredd. |
| 3:29 | väntar | du | Okej, Göran. Nästa gång är jag beredd. |
| 3:31 | skratt | du | falsk tuta |
| 3:33 | toast | guld | ✅ |
| 3:33 | händelse | printKlar | sak=pall n=10 |
| 3:34 | händelse | tagitUrPrint | sak=pall n=1 |
| 3:34 | paket |  | tanke |
| 3:34 | tanke | du | En badanka. Den överlevde kvarnen. |
| 3:34 | väntar | du | En badanka. Den överlevde kvarnen. |
| 3:34 | skratt | du | kvarnen spottar |
| 3:34 | sak | du | En badanka. Den överlevde kvarnen. |
| 3:34 | notis | tanke | 💭 En badanka. Den överlevde kvarnen. |
| 3:34 | röst | du | En badanka. Den överlevde kvarnen. · REAKTION |
| 3:35 | upplåst | skrivare | trim_skrivare3 |
| 3:35 | brott | UPPLÅST | trim_skrivare3 (skrivare 399 av 75) |
| 3:35 | händelse | upplast | id=trim_skrivare3 flask=skrivare |
| 3:35 | paket |  | tanke → sms |
| 3:35 | tanke | du | Fortare. Den kan gå ännu fortare. Jag hör det på den. |
| 3:35 | väntar | du | Fortare. Den kan gå ännu fortare. Jag hör det på den. |
| 3:35 | väntar | ali | Ali här. Sista skrivartrimmen. Efter den går den inte att göra bättre. Då får du bygga en större. |
| 3:37 | klar | du | En badanka. Den överlevde kvarnen. |
| 3:39 | struken | värld:TUUT! Tjena! | TUUT! Tjena! |
| 3:39 | sak | du | Fortare. Den kan gå ännu fortare. Jag hör det på den. |
| 3:39 | notis | tanke | 💭 Fortare. Den kan gå ännu fortare. Jag hör det på den. |
| 3:39 | röst | du | Fortare. Den kan gå ännu fortare. Jag hör det på den. · STORY |
| 3:41 | aliSalt | ali | 209 |
| 3:44 | klar | du | Fortare. Den kan gå ännu fortare. Jag hör det på den. |
| 3:52 | sak | foto | Göran. Tjuv. |
| 3:52 | foto | du | Göran. Tjuv. |
| 3:52 | väntar | rolf | Tjo. Flaket ä så trist. En tomte mä luva o skägg, kan du göra en sån? /Rolf 🎅​ |
| 3:52 | paket |  | ge |
| 3:52 | väntar |  | (läget ändras) |
| 3:52 | händelse | malKlart | id=rolf3-brev del=Dag 5 – Tätt och mysigt nasta=rolf3-printa |
| 3:52 | väntar | du | Printa trädgårdstomte till flaket. |
| 3:52 | MÅL |  | Printa trädgårdstomte till flaket |
| 3:54 | klar | foto | Göran. Tjuv. |
| 3:56 | målruta |  | Printa trädgårdstomte till flaket |
| 3:56 | kvittens-bock |  | ✓ Läs brevet i Rolfs postlåda |
| 3:56 | händelse | printStart | sak=tomte |
| 3:56 | sak | du | Printa trädgårdstomte till flaket. |
| 3:56 | pil |  | Printa trädgårdstomte till flaket |
| 3:56 | röst | du | Printa trädgårdstomte till flaket. · MÅL |
| 3:56 | händelse | malKlart | id=rolf3-printa del=Dag 5 – Tätt och mysigt nasta=rolf3-ge |
| 3:56 | väntar | du | Ge Rolf trädgårdstomte till flaket. |
| 3:56 | MÅL |  | Ge Rolf trädgårdstomte till flaket |
| 3:59 | klar | du | Printa trädgårdstomte till flaket. |
| 4:00 | målruta |  | Ge Rolf trädgårdstomte till flaket |
| 4:00 | kvittens-bock |  | ✓ Printa trädgårdstomte till flaket |
| 4:01 | sak | du | Ge Rolf trädgårdstomte till flaket. |
| 4:01 | pil |  | Ge Rolf trädgårdstomte till flaket |
| 4:01 | röst | du | Ge Rolf trädgårdstomte till flaket. · MÅL |
| 4:02 | toast | guld | ✅ |
| 4:02 | händelse | printKlar | sak=tomte n=1 |
| 4:02 | händelse | tagitUrPrint | sak=tomte n=1 |
| 4:04 | klar | du | Ge Rolf trädgårdstomte till flaket. |
| 4:06 | sak | rolf | Tjo. Flaket ä så trist. En tomte mä luva o skägg, kan du göra en sån? /Rolf 🎅​ |
| 4:06 | lapp | Brev från Rolf | Tjo. Flaket ä så trist. En tomte mä luva o skägg, kan du göra en sån? /Rolf 🎅​ |
| 4:06 | röst | rolf | Tjo. Flaket ä så trist. En tomte mä luva o skägg, kan du göra en sån? /Rolf 🎅​ · STORY |
| 4:13 | klar | rolf | Tjo. Flaket ä så trist. En tomte mä luva o skägg, kan du göra en sån? /Rolf 🎅​ |
| 4:13 | händelse | brevLast | id=rolf:3 |
| 4:15 | sak |  | (läget ändras) |
| 4:15 | klar |  | (läget ändras) |
| 4:16 | händelse | lagtIPostlada | sak=tomte rolf=3 jobb=false |
| 4:16 | struken | kedja | rolf3 |
| 4:16 | händelse | malKlart | id=rolf3-ge del=Dag 5 – Tätt och mysigt nasta=n4-isolera-de-sista |
| 4:16 | väntar | du | Två väggar kvar i skjulet. Sen är det tätt. |
| 4:16 | målruta |  | Isolera de sista väggarna · 2/4 |
| 4:17 | MÅL |  | Isolera de sista väggarna · 2/4 |
| 4:17 | sak | du | Två väggar kvar i skjulet. Sen är det tätt. |
| 4:17 | pil |  | Isolera de sista väggarna · 2/4 |
| 4:17 | notis | tanke | 💭 Två väggar kvar i skjulet. Sen är det tätt. |
| 4:17 | röst | du | Två väggar kvar i skjulet. Sen är det tätt. · MÅL |
| 4:17 | nick |  | nick:53 |
| 4:20 | klar | du | Två väggar kvar i skjulet. Sen är det tätt. |
| 4:20 | kvittens-bock |  | ✓ Ge Rolf trädgårdstomte till flaket |
| 4:26 | händelse | printStart | sak=byggsats:vaggar |
| 4:29 | sak | du | Okej, Göran. Nästa gång är jag beredd. |
| 4:29 | notis | tanke | 💭 Okej, Göran. Nästa gång är jag beredd. |
| 4:29 | röst | du | Okej, Göran. Nästa gång är jag beredd. · STORY |
| 4:29 | händelse | printKlar | sak=byggsats:vaggar n=1 |
| 4:29 | toast | guld | ✅ |
| 4:30 | händelse | tagitUrPrint | sak=byggsats:vaggar n=1 |
| 4:32 | klar | du | Okej, Göran. Nästa gång är jag beredd. |
| 4:35 | väntar | info:guld | 🧱 Höger vägg klar. 1 kvar. |
| 4:35 | sak | info:guld | 🧱 Höger vägg klar. 1 kvar. |
| 4:35 | kvitto-visas | info:guld | 🧱 Höger vägg klar. 1 kvar. |
| 4:35 | toast | guld | 🧱 Höger vägg klar. 1 kvar. |
| 4:37 | klar | info:guld | 🧱 Höger vägg klar. 1 kvar. |
| 4:44 | händelse | printStart | sak=byggsats:vaggar |
| 4:45 | sak | ali | Ali här. Sista skrivartrimmen. Efter den går den inte att göra bättre. Då får du bygga en större. |
| 4:45 | sms | ali | Ali här. Sista skrivartrimmen. Efter den går den inte att göra bättre. Då får du bygga en större. |
| 4:45 | sms-bubbla | ali | Ali här. Sista skrivartrimmen. Efter den går den inte att göra bättre. Då får du bygga en större. |
| 4:45 | röst | ali | Ali här. Sista skrivartrimmen. Efter den går den inte att göra bättre. Då får du bygga en större. · STORY |
| 4:48 | händelse | printKlar | sak=byggsats:vaggar n=1 |
| 4:48 | toast | guld | ✅ |
| 4:48 | händelse | tagitUrPrint | sak=byggsats:vaggar n=1 |
| 4:52 | väntar | info:guld | 🧱 Skjulet är tätt! |
| 4:52 | händelse | malKlart | id=n4-isolera-de-sista del=Dag 5 – Tätt och mysigt nasta=dator |
| 4:52 | struken | kedja | vaggar |
| 4:52 | väntar | du | Alis pappas dator. Med den kan jag sälja på nätet. |
| 4:53 | MÅL |  | Köp Alis pappas gamla dator |
| 4:54 | klar | ali | Ali här. Sista skrivartrimmen. Efter den går den inte att göra bättre. Då får du bygga en större. |
| 4:54 | sak | info:guld | 🧱 Skjulet är tätt! |
| 4:54 | kvitto-visas | info:guld | 🧱 Skjulet är tätt! |
| 4:54 | toast | guld | 🧱 Skjulet är tätt! |
| 4:56 | klar | info:guld | 🧱 Skjulet är tätt! |
| 4:56 | målruta |  | Köp Alis pappas gamla dator |
| 4:56 | kvittens-bock |  | ✓ Isolera de sista väggarna · 4/4 |
| 4:58 | sak | du | Alis pappas dator. Med den kan jag sälja på nätet. |
| 4:58 | pil |  | Köp Alis pappas gamla dator |
| 4:58 | notis | tanke | 💭 Alis pappas dator. Med den kan jag sälja på nätet. |
| 4:58 | röst | du | Alis pappas dator. Med den kan jag sälja på nätet. · MÅL |
| 4:58 | nick |  | nick:54 |
| 5:02 | klar | du | Alis pappas dator. Med den kan jag sälja på nätet. |
| 5:03 | väntar | bud | (tips) |
| 5:04 | sak | bud | (tips) |
| 5:05 | klar | bud | (tips) |
| 5:07 | meddelande | mamma | Har du borstat tänderna idag? Ljug inte. Jag hör om du ljuger. Även på sms. |
| 5:08 | röst | mamma | Har du borstat tänderna idag? Ljug inte. Jag hör om du ljuger. Även på sms. · STORY |
| 5:17 | paket |  | sms |
| 5:17 | väntar | mamma | Bra. Jag tror dig. Nästan. |
| 5:25 | händelse | brevLast | id=m_tandborste |
| 5:29 | toast | guld | 🖥️ Datorn är din – ställ den i skjulet |
| 5:29 | händelse | kopt | sak=webbdator |
| 5:29 | röst | ali | Pappas gamla dator. Den har ett modem. Det låter som en fax som gråter. Men du kommer ut på nätet. · STORY |
| 5:29 | butiksbubbla | ali | Pappas gamla dator. Den har ett modem. Det låter som en fax som gråter. Men du kommer ut på nätet. |
| 5:38 | händelse | printStart | sak=byggsats:webbdator |
| 5:38 | händelse | printKlar | sak=byggsats:webbdator n=1 |
| 5:38 | toast | guld | ✅ |
| 5:39 | händelse | tagitUrPrint | sak=byggsats:webbdator n=1 |
| 5:39 | paket |  | tanke |
| 5:39 | tanke | du | Jaha, Rolf har hämtat trädgårdstomte till flaket. |
| 5:39 | väntar | du | Jaha, Rolf har hämtat trädgårdstomte till flaket. |
| 5:39 | sak | du | Jaha, Rolf har hämtat trädgårdstomte till flaket. |
| 5:39 | notis | tanke | 💭 Jaha, Rolf har hämtat trädgårdstomte till flaket. |
| 5:39 | röst | du | Jaha, Rolf har hämtat trädgårdstomte till flaket. · REAKTION |
| 5:43 | klar | du | Jaha, Rolf har hämtat trädgårdstomte till flaket. |
| 5:45 | händelse | placerat | sak=webbdator |
| 5:45 | paket |  | tanke |
| 5:45 | tanke | du | En webbshop. Från ett skjul. Med modem. Varför inte. |
| 5:45 | väntar | du | En webbshop. Från ett skjul. Med modem. Varför inte. |
| 5:45 | händelse | malKlart | id=dator del=Dag 5 – Tätt och mysigt nasta=lampskarm |
| 5:45 | väntar | du | En lampskärm. Folk betalar för ljus som ser fint ut. |
| 5:45 | MÅL |  | Printa en lampskärm att sälja |
| 5:45 | målruta |  | Printa en lampskärm att sälja |
| 5:45 | sak | du | En lampskärm. Folk betalar för ljus som ser fint ut. |
| 5:45 | pil |  | Printa en lampskärm att sälja |
| 5:45 | notis | tanke | 💭 En lampskärm. Folk betalar för ljus som ser fint ut. |
| 5:45 | röst | du | En lampskärm. Folk betalar för ljus som ser fint ut. · MÅL |
| 5:46 | nick |  | nick:55 |
| 5:49 | kvittens-bock |  | ✓ Ställ datorn i skjulet |
| 5:50 | klar | du | En lampskärm. Folk betalar för ljus som ser fint ut. |
| 5:58 | sak | mamma | Bra. Jag tror dig. Nästan. |
| 5:58 | sms | mamma | Bra. Jag tror dig. Nästan. |
| 5:58 | sms-bubbla | mamma | Bra. Jag tror dig. Nästan. |
| 5:58 | röst | mamma | Bra. Jag tror dig. Nästan. · STORY |
| 6:01 | klar | mamma | Bra. Jag tror dig. Nästan. |
| 6:01 | väntar | värld:TUUT! Tjena! | TUUT! Tjena! |
| 6:03 | väntar | rolf | Kajsa la en död mus på min kudde. De e kärlek. Hon får lax ikväll. /R |
| 6:05 | händelse | printStart | sak=lampskarm |
| 6:09 | sak | du | En webbshop. Från ett skjul. Med modem. Varför inte. |
| 6:09 | notis | tanke | 💭 En webbshop. Från ett skjul. Med modem. Varför inte. |
| 6:09 | röst | du | En webbshop. Från ett skjul. Med modem. Varför inte. · STORY |
| 6:11 | toast | guld | ✅ |
| 6:11 | händelse | printKlar | sak=lampskarm n=1 |
| 6:11 | händelse | malKlart | id=lampskarm del=Dag 5 – Tätt och mysigt nasta=mysigt |
| 6:11 | väntar | du | Skjulet ska bli mysigt på riktigt. Det är mitt hem nu. |
| 6:11 | MÅL |  | Gör det mysigt · trivsel 104/130 |
| 6:11 | händelse | tagitUrPrint | sak=lampskarm n=1 |
| 6:13 | klar | du | En webbshop. Från ett skjul. Med modem. Varför inte. |
| 6:13 | målruta |  | Gör det mysigt · trivsel 104/130 |
| 6:15 | kvittens-bock |  | ✓ Printa en lampskärm att sälja |
| 6:15 | sak | du | Skjulet ska bli mysigt på riktigt. Det är mitt hem nu. |
| 6:15 | pil |  | Gör det mysigt · trivsel 104/130 |
| 6:15 | notis | tanke | 💭 Skjulet ska bli mysigt på riktigt. Det är mitt hem nu. |
| 6:15 | röst | du | Skjulet ska bli mysigt på riktigt. Det är mitt hem nu. · MÅL |
| 6:16 | nick |  | nick:56 |
| 6:20 | klar | du | Skjulet ska bli mysigt på riktigt. Det är mitt hem nu. |
| 6:22 | struken | värld:TUUT! Tjena! | TUUT! Tjena! |
| 6:29 | toast | guld | 3D-modell köpt – printa fönster på skrivaren |
| 6:29 | händelse | kopt | sak=fonster |
| 6:38 | väntar | värld:Mjau. | Mjau. |
| 6:45 | sak | värld:Mjau. | Mjau. |
| 6:45 | bubbla |  | Mjau. |
| 6:47 | klar | värld:Mjau. | Mjau. |
| 6:51 | händelse | printStart | sak=byggsats:fonster |
| 6:55 | toast | bra | Del 1 av 2 klar |
| 6:58 | händelse | printKlar | sak=byggsats:fonster n=1 |
| 6:58 | toast | guld | ✅ |
| 6:59 | händelse | tagitUrPrint | sak=byggsats:fonster n=1 |
| 6:59 | paket |  | sms |
| 6:59 | väntar | ali | Ali här. Fönster – printad. På riktigt. Jag har visat bilden för min fru tre gånger. |
| 7:02 | sak | ali | Ali här. Fönster – printad. På riktigt. Jag har visat bilden för min fru tre gånger. |
| 7:02 | sms | ali | Ali här. Fönster – printad. På riktigt. Jag har visat bilden för min fru tre gånger. |
| 7:02 | sms-bubbla | ali | Ali här. Fönster – printad. På riktigt. Jag har visat bilden för min fru tre gånger. |
| 7:02 | röst | ali | Ali här. Fönster – printad. På riktigt. Jag har visat bilden för min fru tre gånger. · REAKTION |
| 7:09 | klar | ali | Ali här. Fönster – printad. På riktigt. Jag har visat bilden för min fru tre gånger. |
| 7:17 | toast | guld | 3D-modell köpt – printa trägolv på skrivaren |
| 7:17 | händelse | kopt | sak=golv |
| 7:26 | händelse | printStart | sak=byggsats:golv |
| 7:29 | toast | bra | Del 1 av 3 klar |
| 7:32 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 7:34 | skratt | du | falsk tuta |
| 7:43 | toast | bra | Del 2 av 3 klar |
| 7:44 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 7:46 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 7:47 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 7:47 | händelse | printKlar | sak=byggsats:golv n=1 |
| 7:47 | toast | guld | ✅ |
| 7:54 | händelse | tagitUrPrint | sak=byggsats:golv n=1 |
| 7:56 | väntar | värld:TUUT! Hej grannen! | TUUT! Hej grannen! |
| 7:56 | sak | värld:TUUT! Hej grannen! | TUUT! Hej grannen! |
| 7:56 | bubbla |  | TUUT! Hej grannen! |
| 7:59 | väntar | info:guld | Trägolv på plats! Trivsel +8 · Ali betalar nu +0 % |
| 7:59 | klar | värld:TUUT! Hej grannen! | TUUT! Hej grannen! |
| 7:59 | sak | info:guld | Trägolv på plats! Trivsel +8 · Ali betalar nu +0 % |
| 7:59 | kvitto-visas | info:guld | Trägolv på plats! Trivsel +8 · Ali betalar nu +0 % |
| 7:59 | toast | guld | Trägolv på plats! Trivsel +8 · Ali betalar nu +0 % |
| 8:01 | klar | info:guld | Trägolv på plats! Trivsel +8 · Ali betalar nu +0 % |
| 8:09 | händelse | printStart | sak=pall |
| 8:14 | toast | guld | ✅ |
| 8:14 | händelse | printKlar | sak=pall n=11 |
| 8:14 | händelse | tagitUrPrint | sak=pall n=1 |
| 8:19 | händelse | placerat | sak=pall |
| 8:26 | toast | guld | 3D-modell köpt – printa taklampa med skärm på skrivaren |
| 8:26 | händelse | kopt | sak=taklampa |
| 8:35 | händelse | printStart | sak=byggsats:taklampa |
| 8:35 | skratt | du | Kajsa i skrivaren |
| 8:37 | händelse | printKlar | sak=byggsats:taklampa n=1 |
| 8:37 | toast | guld | ✅ |
| 8:38 | händelse | tagitUrPrint | sak=byggsats:taklampa n=1 |
| 8:42 | väntar | info:guld | Taklampa med skärm på plats! Trivsel +6 · Ali betalar nu +0 % |
| 8:42 | sak | info:guld | Taklampa med skärm på plats! Trivsel +6 · Ali betalar nu +0 % |
| 8:42 | kvitto-visas | info:guld | Taklampa med skärm på plats! Trivsel +6 · Ali betalar nu +0 % |
| 8:42 | toast | guld | Taklampa med skärm på plats! Trivsel +6 · Ali betalar nu +0 % |
| 8:44 | klar | info:guld | Taklampa med skärm på plats! Trivsel +6 · Ali betalar nu +0 % |
| 8:46 | scenInfo | du | Lampan tänds |
| 8:52 | händelse | printStart | sak=pall |
| 8:55 | tanke | du | Det börjar kännas som ett hem. På riktigt. |
| 8:55 | notis | tanke | 💭 Det börjar kännas som ett hem. På riktigt. |
| 8:55 | röst | du | Det börjar kännas som ett hem. På riktigt. · REAKTION |
| 8:57 | toast | guld | ✅ |
| 8:57 | händelse | printKlar | sak=pall n=12 |
| 8:57 | händelse | tagitUrPrint | sak=pall n=1 |
| 8:59 | händelse | malKlart | id=mysigt del=Dag 5 – Tätt och mysigt nasta=vind5 |
| 8:59 | lapp | 📔 Dagbok | Lampan lyser. Pappa ska visst komma förbi i morgon. |
| 8:59 | meddelande | du | Lampan lyser. Pappa ska visst komma förbi i morgon. |
| 8:59 | dagbokkort | du | Lampan lyser. Pappa ska visst komma förbi i morgon. |
| 8:59 | väntar | du | En tredje vindsnurra på taket. Skrivare M drar mycket. |
| 8:59 | målruta |  | Printa och sälj |
| 8:59 | MÅL |  | Printa och sälj |
| 8:59 | röst | du | Lampan lyser. Pappa ska visst komma förbi i morgon. · STORY |
| 9:06 | händelse | brevLast | id=klart |
| 9:08 | sak | du | En tredje vindsnurra på taket. Skrivare M drar mycket. |
| 9:08 | pil |  | Printa och sälj |
| 9:08 | notis | tanke | 💭 En tredje vindsnurra på taket. Skrivare M drar mycket. |
| 9:08 | röst | du | En tredje vindsnurra på taket. Skrivare M drar mycket. · MÅL |
| 9:09 | händelse | placerat | sak=pall |
| 9:12 | klar | du | En tredje vindsnurra på taket. Skrivare M drar mycket. |
| 9:20 | händelse | printStart | sak=kruka |
| 9:23 | toast | guld | ✅ |
| 9:23 | händelse | printKlar | sak=kruka n=51 |
| 9:23 | händelse | tagitUrPrint | sak=kruka n=1 |
| 9:41 | händelse | printStart | sak=kruka |
| 9:44 | toast | guld | ✅ |
| 9:44 | händelse | printKlar | sak=kruka n=52 |
| 9:45 | händelse | tagitUrPrint | sak=kruka n=1 |
| 9:47 | händelse | printStart | sak=pall |
| 9:51 | skratt | du | däcket rullar iväg |
| 9:52 | toast | guld | ✅ |
| 9:52 | händelse | printKlar | sak=pall n=13 |
| 9:52 | händelse | tagitUrPrint | sak=pall n=1 |
| 9:55 | händelse | printStart | sak=pall |
| 9:58 | skratt | du | falsk tuta |
| 9:58 | väntar | värld:TUUT TUUT! | TUUT TUUT! |
| 9:58 | sak | värld:TUUT TUUT! | TUUT TUUT! |
| 9:58 | bubbla |  | TUUT TUUT! |
| 10:00 | toast | guld | ✅ |
| 10:00 | händelse | printKlar | sak=pall n=14 |
| 10:00 | händelse | tagitUrPrint | sak=pall n=1 |
| 10:01 | väntar | mamma | Sover du ordentligt? Du ser trött ut. Jag vet att jag inte kan se dig. Men jag vet. |
| 10:01 | klar | värld:TUUT TUUT! | TUUT TUUT! |
| 10:14 | webb | du | packade 2 kruka |
| 10:23 | sak | mamma | Sover du ordentligt? Du ser trött ut. Jag vet att jag inte kan se dig. Men jag vet. |
| 10:23 | sms | mamma | Sover du ordentligt? Du ser trött ut. Jag vet att jag inte kan se dig. Men jag vet. |
| 10:23 | sms-bubbla | mamma | Sover du ordentligt? Du ser trött ut. Jag vet att jag inte kan se dig. Men jag vet. |
| 10:23 | röst | mamma | Sover du ordentligt? Du ser trött ut. Jag vet att jag inte kan se dig. Men jag vet. · SMÅPRAT |
| 10:23 | webb | du | packade 2 pall |
| 10:30 | klar | mamma | Sover du ordentligt? Du ser trött ut. Jag vet att jag inte kan se dig. Men jag vet. |
| 10:38 | väntar | info:bra | 📦 Paketet till Gun-Britt i Nässjö ligger i postlådan – Rolf tar det till posten |
| 10:38 | sak | info:bra | 📦 Paketet till Gun-Britt i Nässjö ligger i postlådan – Rolf tar det till posten |
| 10:38 | kvitto-visas | info:bra | 📦 Paketet till Gun-Britt i Nässjö ligger i postlådan – Rolf tar det till posten |
| 10:38 | toast | bra | 📦 Paketet till Gun-Britt i Nässjö ligger i postlådan – Rolf tar det till posten |
| 10:39 | väntar | info:bra | 📦 Paketet till Lasse på bussdepån ligger i postlådan – Rolf tar det till posten |
| 10:40 | väntar | rolf | ÖJ! Ja kör dina paket till posten. Ja ska ändå förbi. Ja tar en tia för bensinen. Eller för Kajsas lax. Mest för laxen. /Rolf​ |
| 10:40 | klar | info:bra | 📦 Paketet till Gun-Britt i Nässjö ligger i postlådan – Rolf tar det till posten |
| 10:40 | sak | info:bra | 📦 Paketet till Lasse på bussdepån ligger i postlådan – Rolf tar det till posten |
| 10:40 | kvitto-visas | info:bra | 📦 Paketet till Lasse på bussdepån ligger i postlådan – Rolf tar det till posten |
| 10:40 | toast | bra | 📦 Paketet till Lasse på bussdepån ligger i postlådan – Rolf tar det till posten |
| 10:42 | klar | info:bra | 📦 Paketet till Lasse på bussdepån ligger i postlådan – Rolf tar det till posten |
| 10:43 | händelse | printStart | sak=pall |
| 10:44 | sak | rolf | ÖJ! Ja kör dina paket till posten. Ja ska ändå förbi. Ja tar en tia för bensinen. Eller för Kajsas lax. Mest för laxen. /Rolf​ |
| 10:44 | notis |  | ✉️ ÖJ! Ja kör dina paket till posten. Ja ska ändå förbi. Ja tar en tia för bensinen. Eller för Kajsas lax. Mest för laxen. /Rolf​ |
| 10:44 | röst | rolf | ÖJ! Ja kör dina paket till posten. Ja ska ändå förbi. Ja tar en tia för bensinen. Eller för Kajsas lax. Mest för laxen. /Rolf​ · STORY |
| 10:48 | toast | guld | ✅ |
| 10:48 | händelse | printKlar | sak=pall n=15 |
| 10:48 | händelse | tagitUrPrint | sak=pall n=1 |
| 10:55 | klar | rolf | ÖJ! Ja kör dina paket till posten. Ja ska ändå förbi. Ja tar en tia för bensinen. Eller för Kajsas lax. Mest för laxen. /Rolf​ |
| 10:56 | aliSalt | ali | 198 |
| 10:56 | aliSalt | ali | 20 |
| 11:04 | händelse | printStart | sak=pall |
| 11:09 | toast | guld | ✅ |
| 11:09 | händelse | printKlar | sak=pall n=16 |
| 11:10 | händelse | tagitUrPrint | sak=pall n=1 |
| 11:17 | aliSalt | ali | 189 |
| 11:43 | händelse | printStart | sak=pall |
| 11:49 | toast | guld | ✅ |
| 11:49 | händelse | printKlar | sak=pall n=17 |
| 11:49 | händelse | tagitUrPrint | sak=pall n=1 |
| 11:57 | aliSalt | ali | 189 |
| 12:06 | händelse | printStart | sak=pall |
| 12:11 | toast | guld | ✅ |
| 12:11 | händelse | printKlar | sak=pall n=18 |
| 12:11 | händelse | tagitUrPrint | sak=pall n=1 |
| 12:19 | aliSalt | ali | 189 |
| 12:28 | händelse | printStart | sak=pall |
| 12:33 | toast | guld | ✅ |
| 12:33 | händelse | printKlar | sak=pall n=19 |
| 12:33 | händelse | tagitUrPrint | sak=pall n=1 |
| 12:41 | aliSalt | ali | 189 |
| 12:43 | upplåst | strom | vindsnurra3 |
| 12:43 | brott | RESERV | vindsnurra3 (strom 1 av 15) |
| 12:43 | händelse | upplast | id=vindsnurra3 flask=strom |
| 12:43 | paket |  | sms |
| 12:43 | väntar | ali | Ali här. En tredje snurra. Mitt på taket. Sen är taket fullt. Sen får solen ta över. |
| 12:44 | sak | ali | Ali här. En tredje snurra. Mitt på taket. Sen är taket fullt. Sen får solen ta över. |
| 12:44 | sms | ali | Ali här. En tredje snurra. Mitt på taket. Sen är taket fullt. Sen får solen ta över. |
| 12:44 | sms-bubbla | ali | Ali här. En tredje snurra. Mitt på taket. Sen är taket fullt. Sen får solen ta över. |
| 12:44 | röst | ali | Ali här. En tredje snurra. Mitt på taket. Sen är taket fullt. Sen får solen ta över. · STORY |
| 12:50 | händelse | printStart | sak=pall |
| 12:51 | klar | ali | Ali här. En tredje snurra. Mitt på taket. Sen är taket fullt. Sen får solen ta över. |
| 12:55 | toast | guld | ✅ |
| 12:55 | händelse | printKlar | sak=pall n=20 |
| 12:55 | händelse | tagitUrPrint | sak=pall n=1 |
| 13:03 | aliSalt | ali | 189 |
| 13:07 | toast | guld | 3D-modell köpt – printa vindsnurra till skjultaket på skrivaren |
| 13:07 | händelse | kopt | sak=vindsnurra |
| 13:18 | väntar | värld:Mjau. | Mjau. |
| 13:20 | toast | skak | handen skakar: fullt |
| 13:24 | sak | värld:Mjau. | Mjau. |
| 13:24 | bubbla |  | Mjau. |
| 13:26 | skratt | du | falsk tuta |
| 13:27 | klar | värld:Mjau. | Mjau. |
| 13:33 | händelse | printStart | sak=byggsats:vindsnurra |
| 13:36 | händelse | printKlar | sak=byggsats:vindsnurra n=1 |
| 13:36 | toast | guld | ✅ |
| 13:37 | väntar | info:guld | 🌬️ Vindsnurran ligger i handen – klicka på skjulet för att sätta den på taket |
| 13:37 | händelse | tagitUrPrint | sak=byggsats:vindsnurra n=1 |
| 13:37 | sak | info:guld | 🌬️ Vindsnurran ligger i handen – klicka på skjulet för att sätta den på taket |
| 13:37 | kvitto-visas | info:guld | 🌬️ Vindsnurran ligger i handen – klicka på skjulet för att sätta den på taket |
| 13:37 | toast | guld | 🌬️ Vindsnurran ligger i handen – klicka på skjulet för att sätta den på taket |
| 13:39 | klar | info:guld | 🌬️ Vindsnurran ligger i handen – klicka på skjulet för att sätta den på taket |
| 13:41 | skratt | du | däcket rullar iväg |
| 13:46 | händelse | placerat | sak=vindsnurra |
| 13:46 | väntar | info:guld | 🌬️ Vindsnurran sitter på taket – den trampar cykeln åt dig när det blåser |
| 13:46 | monterat | du | byggsats:vindsnurra |
| 13:46 | händelse | monterat | sak=vindsnurra |
| 13:46 | sak | info:guld | 🌬️ Vindsnurran sitter på taket – den trampar cykeln åt dig när det blåser |
| 13:46 | kvitto-visas | info:guld | 🌬️ Vindsnurran sitter på taket – den trampar cykeln åt dig när det blåser |
| 13:46 | toast | guld | 🌬️ Vindsnurran sitter på taket – den trampar cykeln åt dig när det blåser |
| 13:46 | händelse | malKlart | id=vind5 del=Dag 5 – Tätt och mysigt nasta=sov5 |
| 13:46 | paket |  | lapp |
| 13:46 | väntar | du | Dag 5 är slut. Nu vet en mås att jag bor HÄR. Pengarna är borta. Med en mås. |
| 13:46 | paket |  | sms |
| 13:46 | väntar | mamma | Pappa kommer förbi i morgon. Han säger inget men han vill. ❤️ |
| 13:46 | paket |  | sms |
| 13:46 | väntar | mamma | Pappa och jag har lagt undan lite. 1 000 kr. Till något fint i ditt hus. Inte till chips. ❤️ /Mamma |
| 13:46 | tanke | du | Mätt. Varm. Jag skulle kunna bära en kyl. |
| 13:46 | väntar | du | Mätt. Varm. Jag skulle kunna bära en kyl. |
| 13:46 | struken | du | Mätt. Varm. Jag skulle kunna bära en kyl. |
| 13:46 | MÅL |  | Klart för idag – sov när du vill |
| 13:48 | klar | info:guld | 🌬️ Vindsnurran sitter på taket – den trampar cykeln åt dig när det blåser |
| 13:48 | sak | du | Dag 5 är slut. Nu vet en mås att jag bor HÄR. Pengarna är borta. Med en mås. |
| 13:48 | kvitto-visas | du | Dag 5 är slut. Nu vet en mås att jag bor HÄR. Pengarna är borta. Med en mås. |
| 13:48 | lapp | 📔 Dagbok | Dag 5 är slut. Nu vet en mås att jag bor HÄR. Pengarna är borta. Med en mås. |
| 13:48 | meddelande | du | Dag 5 är slut. Nu vet en mås att jag bor HÄR. Pengarna är borta. Med en mås. |
| 13:48 | dagbokkort | du | Dag 5 är slut. Nu vet en mås att jag bor HÄR. Pengarna är borta. Med en mås. |
| 13:48 | röst | du | Dag 5 är slut. Nu vet en mås att jag bor HÄR. Pengarna är borta. Med en mås. · STORY |
| 13:56 | händelse | brevLast | id=kvall5 |
| 13:56 | klar | du | Dag 5 är slut. Nu vet en mås att jag bor HÄR. Pengarna är borta. Med en mås. |
| 13:56 | väntar | notis:🌇 Klockan är 21. Ali slår igen luckan.  | 🌇 Klockan är 21. Ali slår igen luckan. Dagens jobb är klart – gå in i skjulet och sov i sängen. |
| 13:56 | målruta |  | Klart för idag – sov när du vill |
| 13:56 | väntar | notis:📔 Prestation: Ett hem att bo i · +3 res | 📔 Prestation: Ett hem att bo i · +3 respekt |
| 13:56 | paket |  | replik |
| 13:56 | väntar | rolf | Hoppa in. Ja ska visa dej en grej. |
| 14:01 | väntar | mamma | Haha, träplankor? |
| 14:03 | väntar | mamma | Vad är det för skit? Du har ju inte ens tapeter på väggarna. |
| 14:06 | väntar | mamma | Och var är badrummet? Du duschar väl? |
| 14:08 | väntar | mamma | Pappa säger "aha, vad lugnt då". Pappa säger det om allt. |
| 14:10 | väntar | mamma | …men fönstret var fint. Det kommer in ljus i alla fall. ❤️ |
| 14:15 | morgonkort | 📕 Kapitel 2: Ett riktigt hem | 📕 Kapitel 2: Ett riktigt hem · Mamma är inte imponerad. Än. Nästa mål: tapeter , en egen gamingbod med RGB, gamer-inredning – och en jacuzzi . Visa henne. Ali har nya ritningar – och ♾️ trimningar som aldrig tar slut. |
| 14:29 | sak | du | (nytt mål i rutan) |
| 14:29 | pil |  | Klart för idag – sov när du vill |
| 14:29 | klar | du | (nytt mål i rutan) |
| 14:31 | struken | notis:🌇 Klockan är 21. Ali slår igen luckan.  | 🌇 Klockan är 21. Ali slår igen luckan. Dagens jobb är klart – gå in i skjulet och sov i sängen. |
| 14:31 | struken | notis:📔 Prestation: Ett hem att bo i · +3 res | 📔 Prestation: Ett hem att bo i · +3 respekt |
| 14:31 | sak | rolf | Hoppa in. Ja ska visa dej en grej. |
| 14:31 | notis |  | Rolf: ”Hoppa in. Ja ska visa dej en grej.” |
| 14:31 | röst | rolf | Hoppa in. Ja ska visa dej en grej. · STORY |
| 14:34 | klar | rolf | Hoppa in. Ja ska visa dej en grej. |
| 14:43 | sak | mamma | Haha, träplankor? |
| 14:43 | röst | mamma | Haha, träplankor? · STORY |
| 14:45 | klar | mamma | Haha, träplankor? |
| 14:53 | sak | mamma | Vad är det för skit? Du har ju inte ens tapeter på väggarna. |
| 14:53 | röst | mamma | Vad är det för skit? Du har ju inte ens tapeter på väggarna. · STORY |
| 14:58 | klar | mamma | Vad är det för skit? Du har ju inte ens tapeter på väggarna. |
| 15:03 | skratt | du | falsk tuta |
| 15:06 | sak | mamma | Pappa kommer förbi i morgon. Han säger inget men han vill. ❤️ |
| 15:06 | sms | mamma | Pappa kommer förbi i morgon. Han säger inget men han vill. ❤️ |
| 15:06 | sms-bubbla | mamma | Pappa kommer förbi i morgon. Han säger inget men han vill. ❤️ |
| 15:06 | röst | mamma | Pappa kommer förbi i morgon. Han säger inget men han vill. ❤️ · STORY |
| 15:11 | klar | mamma | Pappa kommer förbi i morgon. Han säger inget men han vill. ❤️ |
| 15:12 | scenInfo | rolf | Rolf kör upp till sin bänk |
| 15:15 | röst | rolf | Kall öl ä viktigt. · STORY |
| 15:15 | bubbla | rolf | Kall öl ä viktigt. |
| 15:23 | röst | rolf | Ja kommer hit varje kväll. Förr va vi två på bänken. · STORY |
| 15:23 | bubbla | rolf | Ja kommer hit varje kväll. Förr va vi två på bänken. |
| 15:25 | bubbla |  | TUUT! Tjena! |
| 15:41 | röst | rolf | Dä där ä Bengt-Åke. Vinka int. · STORY |
| 15:41 | bubbla | rolf | Dä där ä Bengt-Åke. Vinka int. |
| 15:55 | skratt | du | falsk tuta |
| 15:56 | röst | rolf | Den ä skyldig mej pengar. · STORY |
| 15:56 | bubbla | rolf | Den ä skyldig mej pengar. |
| 16:05 | väntar | foto | Rolfs bänk |
| 16:05 | paket |  | tanke |
| 16:05 | tanke | du | Han kommer hit varje kväll. Nu vet jag var. |
| 16:05 | väntar | du | Han kommer hit varje kväll. Nu vet jag var. |
| 16:05 | skratt | du | Rolfs bänk |
| 16:12 | sak | mamma | Och var är badrummet? Du duschar väl? |
| 16:12 | röst | mamma | Och var är badrummet? Du duschar väl? · STORY |
| 16:12 | tanke | du | Inte en enda frusen tå. Rekord. |
| 16:12 | väntar | du | Inte en enda frusen tå. Rekord. |
| 16:13 | lapp | Dagbok | Tre dagar. Tänk om tre veckor. |
| 16:14 | röst | du | Tre dagar. Tänk om tre veckor. · REAKTION |
| 16:15 | klar | mamma | Och var är badrummet? Du duschar väl? |
| 16:24 | sak | mamma | Pappa säger "aha, vad lugnt då". Pappa säger det om allt. |
| 16:24 | röst | mamma | Pappa säger "aha, vad lugnt då". Pappa säger det om allt. · STORY |
| 16:28 | webbBetalt | du | 775 |

<details><summary>Botens handlingar dag 5</summary>

- 0:00 — dag 5 börjar — (3896 kr)
- 0:15 popup: "FORTSÄTT" (3896 kr)
- 0:28 gå till Rolfs postlåda (28 m) (3896 kr)
- 0:34 panel: "Rolfs postlåda
Det här låg i l" (4146 kr)
- 0:35 tjänar pengar till väntar på sopbilen (BO): 4146/4206 kr → printar pall (270 kr) (4146 kr)
- 0:36 gå till skrivaren (8 m) (4146 kr)
- 0:38 printar Pall (4146 kr)
- 0:44 tar ut 1 st ur skrivaren (4146 kr)
- 0:49 gå till Ali (26 m) (4146 kr)
- 0:49 öppnar Alis butik – sälja (4146 kr)
- 0:51 säljer hos Ali: +270 kr (4416 kr)
- 0:53 tjänar pengar till väntar på sopbilen (BO): 4416/4476 kr → printar pall (257 kr) (4416 kr)
- 1:05 plockar 5 skräp på tippen (bär max 16) (4416 kr)
- 1:08 gå till kvarnen (13 m) (4416 kr)
- 1:16 gå till skrivaren (5 m) (4416 kr)
- 1:17 printar Pall (4416 kr)
- 1:23 tar ut 1 st ur skrivaren (4416 kr)
- 1:29 gå till Ali (26 m) (4416 kr)
- 1:29 öppnar Alis butik – sälja (4416 kr)
- 1:31 säljer hos Ali: +257 kr (4673 kr)
- 1:34 tjänar pengar till väntar på sopbilen (BO): 4673/4733 kr → printar pall (244 kr) (4673 kr)
- 1:39 gå till skrivaren (24 m) (4673 kr)
- 1:41 printar Pall (4673 kr)
- 1:47 tar ut 1 st ur skrivaren (4673 kr)
- 1:52 gå till Ali (24 m) (4673 kr)
- 1:52 öppnar Alis butik – sälja (4673 kr)
- 1:54 säljer hos Ali: +244 kr (4917 kr)
- 2:01 tjänar pengar till väntar på sopbilen (BO): 4917/4977 kr → printar pall (231 kr) (4917 kr)
- 2:06 gå till skrivaren (24 m) (4917 kr)
- 2:08 printar Pall (4917 kr)
- 2:14 tar ut 1 st ur skrivaren (4917 kr)
- 2:19 gå till Ali (24 m) (4917 kr)
- 2:19 öppnar Alis butik – sälja (4917 kr)
- 2:21 säljer hos Ali: +231 kr (5148 kr)
- 2:24 tjänar pengar till väntar på sopbilen (BO): 5148/5208 kr → printar pall (220 kr) (5148 kr)
- 2:29 gå till skrivaren (24 m) (5148 kr)
- 2:31 printar Pall (5148 kr)
- 2:37 tar ut 1 st ur skrivaren (5148 kr)
- 2:42 gå till Ali (24 m) (5148 kr)
- 2:42 öppnar Alis butik – sälja (5148 kr)
- 2:44 säljer hos Ali: +220 kr (5368 kr)
- 2:47 tjänar pengar till väntar på sopbilen (BO): 5368/5428 kr → printar pall (209 kr) (5368 kr)
- 2:52 gå till skrivaren (24 m) (5368 kr)
- 2:54 printar Pall (5368 kr)
- 3:00 tar ut 1 st ur skrivaren (5368 kr)
- 3:05 gå till Ali (24 m) (5368 kr)
- 3:05 öppnar Alis butik – sälja (5368 kr)
- 3:08 tjänar pengar till väntar på sopbilen (BO): 5368/5428 kr → printar pall (209 kr) (5368 kr)
- 3:20 plockar 4 skräp på tippen (bär max 16) (5368 kr)
- 3:22 gå till kvarnen (12 m) (5368 kr)
- 3:26 gå till skrivaren (5 m) (5368 kr)
- 3:28 printar Pall (5368 kr)
- 3:34 tar ut 1 st ur skrivaren (5368 kr)
- 3:40 gå till Ali (27 m) (5368 kr)
- 3:40 öppnar Alis butik – sälja (5368 kr)
- 3:42 säljer hos Ali: +209 kr (5577 kr)
- 3:52 gå till Rolfs postlåda (31 m) (5577 kr)
- 3:55 gå till skrivaren (8 m) (5577 kr)
- 3:56 printar Trädgårdstomte till flaket (5577 kr)
- 4:02 tar ut 1 st ur skrivaren (5577 kr)
- 4:15 valj tomte: true, vald tomte, post {"l":null,"tr":null,"tm":[]}, nummer false (5577 kr)
- 4:16 gå till Rolfs postlåda (8 m) (5577 kr)
- 4:24 gå till skrivaren (8 m) (5577 kr)
- 4:26 printar Isolerskiva (vägg) (5577 kr)
- 4:31 tar ut 1 st ur skrivaren (5577 kr)
- 4:35 gå till skjulet (hoger) (19 m) (5577 kr)
- 4:42 gå till skrivaren (17 m) (5577 kr)
- 4:44 printar Isolerskiva (vägg) (5577 kr)
- 4:49 tar ut 1 st ur skrivaren (5577 kr)
- 4:52 gå till skjulet (fram) (17 m) (5577 kr)
- 5:17 popup: "Ja." (5577 kr)
- 5:25 popup: "Läst" (5577 kr)
- 5:28 gå till Ali (20 m) (5577 kr)
- 5:28 öppnar Alis butik – köpa alis pappas gamla dator (5577 kr)
- 5:30 köper webbdator för 300 kr (5277 kr)
- 5:36 gå till skrivaren (24 m) (5277 kr)
- 5:38 printar Alis pappas gamla dator (5277 kr)
- 5:40 tar ut 1 st ur skrivaren (5277 kr)
- 5:44 gå till platsen för alis pappas gamla dator (21 m) (5277 kr)
- 5:45 ställer ut alis pappas gamla dator (5277 kr)
- 5:55 gå till Ali (16 m) (5277 kr)
- 5:55 öppnar Alis butik – köpa receptet lampskärm (5277 kr)
- 5:57 Ali har inte lampskarm (5277 kr)
- 6:03 gå till skrivaren (24 m) (5277 kr)
- 6:05 printar Lampskärm (5277 kr)
- 6:12 tar ut 1 st ur skrivaren (5277 kr)
- 6:27 gå till Ali (24 m) (5277 kr)
- 6:27 öppnar Alis butik – köpa fönster (5277 kr)
- 6:30 köper fonster för 90 kr (5187 kr)
- 6:42 plockar 3 skräp på tippen (bär max 16) (5187 kr)
- 6:45 gå till kvarnen (12 m) (5187 kr)
- 6:50 gå till skrivaren (5 m) (5187 kr)
- 6:51 printar Fönster (2 delar) (5187 kr)
- 7:00 tar ut 1 st ur skrivaren (5187 kr)
- 7:04 gå till skjulet (20 m) (5187 kr)
- 7:04 sätter ett fönster (5187 kr)
- 7:15 gå till Ali (20 m) (5187 kr)
- 7:15 öppnar Alis butik – köpa trägolv (5187 kr)
- 7:18 köper golv för 140 kr (5047 kr)
- 7:24 gå till skrivaren (24 m) (5047 kr)
- 7:26 printar Trägolv (3 delar) (5047 kr)
- 7:39 plockar 2 skräp på tippen (bär max 16) (5047 kr)
- 7:41 gå till kvarnen (12 m) (5047 kr)
- 7:54 gå till skrivaren (5 m) (5047 kr)
- 7:55 tar ut 1 st ur skrivaren (5047 kr)
- 7:59 gå till skjulet (19 m) (5047 kr)
- 8:07 gå till skrivaren (17 m) (5047 kr)
- 8:09 printar Pall (5047 kr)
- 8:15 tar ut 1 st ur skrivaren (5047 kr)
- 8:18 gå till platsen för pall (18 m) (5047 kr)
- 8:19 ställer ut pall (5047 kr)
- 8:24 gå till Ali (15 m) (5047 kr)
- 8:24 öppnar Alis butik – köpa taklampa med skärm (5047 kr)
- 8:27 köper taklampa för 90 kr (4957 kr)
- 8:33 gå till skrivaren (24 m) (4957 kr)
- 8:35 printar Taklampa med skärm (4957 kr)
- 8:38 tar ut 1 st ur skrivaren (4957 kr)
- 8:42 gå till skjulet (17 m) (4957 kr)
- 8:50 gå till skrivaren (19 m) (4957 kr)
- 8:52 printar Pall (4957 kr)
- 8:58 tar ut 1 st ur skrivaren (4957 kr)
- 9:06 popup: "FORTSÄTT" (4957 kr)
- 9:08 gå till platsen för pall (19 m) (4957 kr)
- 9:09 ställer ut pall (4957 kr)
- 9:18 gå till skrivaren (19 m) (4957 kr)
- 9:20 printar Blomkruka (4957 kr)
- 9:24 tar ut 1 st ur skrivaren (4957 kr)
- 9:31 plockar 2 skräp på tippen (bär max 16) (4957 kr)
- 9:34 gå till kvarnen (12 m) (4957 kr)
- 9:40 gå till skrivaren (5 m) (4957 kr)
- 9:41 printar Blomkruka (4957 kr)
- 9:45 tar ut 1 st ur skrivaren (4957 kr)
- 9:47 printar Pall (4957 kr)
- 9:53 tar ut 1 st ur skrivaren (4957 kr)
- 9:55 printar Pall (4957 kr)
- 10:01 tar ut 1 st ur skrivaren (4957 kr)
- 10:05 gå till datorn (21 m) (4957 kr)
- 10:13 panel: "Webbshopen · Soptippsvägen 1
B" (4957 kr)
- 10:23 panel: "Webbshopen · Soptippsvägen 1
B" (4957 kr)
- 10:32 panel: "Webbshopen · Soptippsvägen 1
B" (4957 kr)
- 10:38 gå till Rolfs postlåda (paket) (29 m) (4957 kr)
- 10:39 webbshop: 2 paket i postlådan (4957 kr)
- 10:39 tjänar pengar till väntar på flaskhalsen för vindsnurra3: 4957/4997 kr → printar pall (198 kr) (4957 kr)
- 10:41 gå till skrivaren (8 m) (4957 kr)
- 10:43 printar Pall (4957 kr)
- 10:49 tar ut 1 st ur skrivaren (4957 kr)
- 10:54 gå till Ali (26 m) (4957 kr)
- 10:54 öppnar Alis butik – sälja (4957 kr)
- 10:56 säljer hos Ali: +218 kr (5175 kr)
- 10:57 tjänar pengar till väntar på flaskhalsen för vindsnurra3: 5175/5215 kr → printar pall (189 kr) (5175 kr)
- 11:02 gå till skrivaren (24 m) (5175 kr)
- 11:04 printar Pall (5175 kr)
- 11:10 tar ut 1 st ur skrivaren (5175 kr)
- 11:15 gå till Ali (24 m) (5175 kr)
- 11:15 öppnar Alis butik – sälja (5175 kr)
- 11:17 säljer hos Ali: +189 kr (5364 kr)
- 11:19 tjänar pengar till väntar på flaskhalsen för vindsnurra3: 5364/5404 kr → printar pall (189 kr) (5364 kr)
- 11:32 plockar 5 skräp på tippen (bär max 16) (5364 kr)
- 11:35 gå till kvarnen (13 m) (5364 kr)
- 11:42 gå till skrivaren (5 m) (5364 kr)
- 11:43 printar Pall (5364 kr)
- 11:50 tar ut 1 st ur skrivaren (5364 kr)
- 11:55 gå till Ali (26 m) (5364 kr)
- 11:55 öppnar Alis butik – sälja (5364 kr)
- 11:57 säljer hos Ali: +189 kr (5553 kr)
- 11:59 tjänar pengar till väntar på flaskhalsen för vindsnurra3: 5553/5593 kr → printar pall (189 kr) (5553 kr)
- 12:04 gå till skrivaren (24 m) (5553 kr)
- 12:06 printar Pall (5553 kr)
- 12:12 tar ut 1 st ur skrivaren (5553 kr)
- 12:17 gå till Ali (24 m) (5553 kr)
- 12:17 öppnar Alis butik – sälja (5553 kr)
- 12:19 säljer hos Ali: +189 kr (5742 kr)
- 12:21 tjänar pengar till väntar på flaskhalsen för vindsnurra3: 5742/5782 kr → printar pall (189 kr) (5742 kr)
- 12:26 gå till skrivaren (24 m) (5742 kr)
- 12:28 printar Pall (5742 kr)
- 12:34 tar ut 1 st ur skrivaren (5742 kr)
- 12:39 gå till Ali (24 m) (5742 kr)
- 12:39 öppnar Alis butik – sälja (5742 kr)
- 12:41 säljer hos Ali: +189 kr (5931 kr)
- 12:43 tjänar pengar till väntar på flaskhalsen för vindsnurra3: 5931/5971 kr → printar pall (189 kr) (5931 kr)
- 12:48 gå till skrivaren (24 m) (5931 kr)
- 12:50 printar Pall (5931 kr)
- 12:56 tar ut 1 st ur skrivaren (5931 kr)
- 13:01 gå till Ali (24 m) (5931 kr)
- 13:01 öppnar Alis butik – sälja (5931 kr)
- 13:03 säljer hos Ali: +189 kr (6120 kr)
- 13:05 öppnar Alis butik – köpa vindsnurra till skjultaket (6120 kr)
- 13:08 köper vindsnurra för 133 kr (5987 kr)
- 13:21 plockar 2 skräp på tippen (bär max 16) (5987 kr)
- 13:24 gå till kvarnen (13 m) (5987 kr)
- 13:31 gå till skrivaren (5 m) (5987 kr)
- 13:33 printar Vindsnurra till skjultaket (5987 kr)
- 13:38 tar ut 1 st ur skrivaren (5987 kr)
- 13:46 gå till sätt vindsnurran på taket (20 m) (5987 kr)
- 13:56 popup: "FORTSÄTT" (6987 kr)
- 14:15 telefonscen: "Okej. Kapitel 2 då. 😤" (6987 kr)
- 14:23 kort: "Kör!" (6987 kr)
- 15:12 gå till sopbilen (Rolfs bänk) (39 m) (6987 kr)
- 16:12 tillbaka från Rolfs bänk (6987 kr)
- 16:17 panel: "Dagbok
Före och efter
Dag 1
Da" (6987 kr)
- 16:25 gå till sängen (39 m) (6987 kr)

</details>

## Dag 6

| Tid | Källa | Vem | Text |
|---|---|---|---|
| 16:28 | vara | ali | kruka |
| 16:28 | händelse | malKlart | id=sov5 del=Dag 5 – Tätt och mysigt nasta=pappa6 |
| 16:28 | MÅL |  | Pappa kommer förbi idag |
| 16:29 | klar | mamma | Pappa säger "aha, vad lugnt då". Pappa säger det om allt. |
| 0:01 | väntar | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har isolerade väggar nu. Och FÖNSTER. Gunnar, du hör väl? |
| 0:01 | radio | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har isolerade väggar nu. Och FÖNSTER. Gunnar, du hör väl? |
| 0:01 | skratt | du | Radio-Kjelle |
| 0:01 | händelse | dagenBorjar | dag=6 |
| 0:01 | meddelande | du | Pengarna tog slut. Därför: en fabrik. |
| 0:01 | dagbokkort | du | KAPITEL 2 · Dag 6. 16 dagar till jul · Pengarna tog slut. Därför: en fabrik. |
| 0:01 | röst | du | KAPITEL 2 · Dag 6. 16 dagar till jul. Pengarna tog slut. Därför: en fabrik. · STORY |
| 0:07 | händelse | morgonkortStangt | dag=6 |
| 0:07 | struken | kedja | d6 |
| 0:07 | struken | du | Inte en enda frusen tå. Rekord. |
| 0:07 | väntar | du | Pappa kommer förbi idag. |
| 0:11 | målruta |  | Pappa kommer förbi idag |
| 0:11 | väntar | info:fel | Göran snodde lampskärm. |
| 0:13 | sak | du | Pappa kommer förbi idag. |
| 0:13 | pil |  | Pappa kommer förbi idag |
| 0:13 | röst | du | Pappa kommer förbi idag. · MÅL |
| 0:15 | klar | du | Pappa kommer förbi idag. |
| 0:15 | sak | info:fel | Göran snodde lampskärm. |
| 0:15 | kvitto-visas | info:fel | Göran snodde lampskärm. |
| 0:15 | toast | fel | Göran snodde lampskärm. |
| 0:17 | klar | info:fel | Göran snodde lampskärm. |
| 0:19 | struken | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har isolerade väggar nu. Och FÖNSTER. Gunnar, du hör väl? |
| 0:19 | väntar | info:info | Pappas bil stannade vid grinden |
| 0:19 | scenInfo | pappa | Pappa kommer |
| 0:31 | paket |  | sms |
| 0:31 | väntar | rolf | Folk pratar gott om dej. Ja hitta röda backar av riktigt bra plast på tippen. Ja la dom vid grinden. /R |
| 0:31 | väntar | rolf | Tomten sitter på flaket nu. En tant vinka tillbaka. Första gången på trettio år. Pengar i lådan. /Rolf |
| 0:31 | sak | mamma | …men fönstret var fint. Det kommer in ljus i alla fall. ❤️ |
| 0:31 | röst | mamma | …men fönstret var fint. Det kommer in ljus i alla fall. ❤️ · STORY |
| 0:36 | scenInfo | du | Hälsar på pappa |
| 0:36 | röst | pappa | Jaså. Här bor du alltså. · REAKTION |
| 0:36 | klar | mamma | …men fönstret var fint. Det kommer in ljus i alla fall. ❤️ |
| 0:39 | toast |  | Du: Pappa … jag bor på en soptipp. |
| 0:39 | röst | du | Pappa … jag bor på en soptipp. · REAKTION |
| 0:42 | händelse | placerat | sak=burk_tavla |
| 0:42 | händelse | placerat | sak=burk_honung |
| 0:42 | händelse | placerat | sak=burk_kompott |
| 0:42 | händelse | placerat | sak=burk_tavla2 |
| 0:42 | händelse | placerat | sak=burk_saft |
| 0:42 | toast |  | 🍯 Pappa lade 5 saker från mamma i en hög. |
| 0:42 | röst | pappa | Mamma skickade burkar. Jag bar dem. · REAKTION |
| 0:46 | händelse | placerat | sak=sackkarra |
| 0:46 | röst | pappa | Säckkärra. Den var på rea. · REAKTION |
| 0:49 | toast |  | Du: …Tack? |
| 0:49 | röst | du | …Tack? · REAKTION |
| 0:56 | bubbla |  | TUUT TUUT! |
| 1:06 | skratt | du | falsk tuta |
| 1:09 | tanke | du | Göran tar mina saker. Kanske han vill ha något eget? |
| 1:09 | väntar | du | Göran tar mina saker. Kanske han vill ha något eget? |
| 1:10 | röst | rolf | ÖJ! Vem ä du då? · REAKTION |
| 1:13 | röst | pappa | Pappan. · REAKTION |
| 1:15 | röst | rolf | Hörru. Jaså. Rolf. Ja kör bilen. · REAKTION |
| 1:18 | röst | pappa | Scania. Trettiotvåa? · REAKTION |
| 1:21 | röst | rolf | Tjugoåtta. Men hon går som en klocka. · REAKTION |
| 1:25 | röst | rolf | Hörru. Mä en sån kan du ta tunnorna på tippen. Dôm ä av den hårda plasten. Den röda. Den klarar int en köttkvarn. · REAKTION |
| 1:33 | toast |  | Du: Var får man en kvarn som klarar den då? |
| 1:33 | röst | du | Var får man en kvarn som klarar den då? · REAKTION |
| 1:37 | röst | rolf | Ali har en röd kvarn längst in i lagret. Han har aldrig vågat starta den. · REAKTION |
| 1:43 | scenInfo | rolf | Två tunnor vid grinden |
| 1:43 | röst | rolf | Tjo. Ja ställer tunnorna vid grinden när ja tömmer. Du får dôm. · REAKTION |
| 1:48 | röst | pappa | Mm. Hej då då. · REAKTION |
| 1:51 | struken | info:info | Pappas bil stannade vid grinden |
| 1:51 | händelse | malKlart | id=pappa6 del=Dag 6 – Röd PETG nasta=r6-kop-roda-kvarnen |
| 1:51 | tanke | du | Full mage, varmt skjul. Jag är typ kung här. |
| 1:51 | väntar | du | Full mage, varmt skjul. Jag är typ kung här. |
| 1:51 | struken | du | Full mage, varmt skjul. Jag är typ kung här. |
| 1:51 | väntar | du | Tunnorna är röd plast. Bra plast. Den behöver en egen kvarn. |
| 1:51 | målruta |  | Köp den röda kvarnen hos Ali |
| 1:51 | MÅL |  | Köp den röda kvarnen hos Ali |
| 1:51 | sak | du | Tunnorna är röd plast. Bra plast. Den behöver en egen kvarn. |
| 1:51 | pil |  | Köp den röda kvarnen hos Ali |
| 1:51 | notis | tanke | 💭 Tunnorna är röd plast. Bra plast. Den behöver en egen kvarn. |
| 1:51 | röst | du | Tunnorna är röd plast. Bra plast. Den behöver en egen kvarn. · MÅL |
| 1:55 | kvittens-bock |  | ✓ Prata med pappa |
| 1:56 | klar | du | Tunnorna är röd plast. Bra plast. Den behöver en egen kvarn. |
| 1:57 | tanke | du | Någon från kommunen fotograferade skylten. Länge. |
| 1:57 | väntar | du | Någon från kommunen fotograferade skylten. Länge. |
| 2:01 | röst | ali | Du säljer på nätet nu? Bra. Ritningarna köper du här. · STORY |
| 2:01 | butiksbubbla | ali | Du säljer på nätet nu? Bra. Ritningarna köper du här. |
| 2:03 | skratt | du | Alis dyr-pling |
| 2:03 | toast | guld | Röda kvarnen är min – den ska stå i röda linjen |
| 2:03 | händelse | kopt | sak=petgkvarn |
| 2:03 | butiksbubbla | ali | Den röda? Jag har aldrig vågat starta den. Ta den. Starta den långt bort från mig. |
| 2:03 | röst | ali | Den röda? Jag har aldrig vågat starta den. Ta den. Starta den långt bort från mig. · STORY |
| 2:11 | händelse | printStart | sak=byggsats:petgkvarn |
| 2:13 | väntar | rolf | Ja hitta ett helt lass på återvinningen. Ingen ville ha dom. Nu ä dom dina. /R |
| 2:15 | toast | bra | Del 1 av 3 klar |
| 2:17 | sak | mamma | Pappa och jag har lagt undan lite. 1 000 kr. Till något fint i ditt hus. Inte till chips. ❤️ /Mamma |
| 2:17 | sms | mamma | Pappa och jag har lagt undan lite. 1 000 kr. Till något fint i ditt hus. Inte till chips. ❤️ /Mamma |
| 2:17 | sms-bubbla | mamma | Pappa och jag har lagt undan lite. 1 000 kr. Till något fint i ditt hus. Inte till chips. ❤️ /Mamma |
| 2:17 | röst | mamma | Pappa och jag har lagt undan lite. 1 000 kr. Till något fint i ditt hus. Inte till chips. ❤️ /Mamma · STORY |
| 2:19 | toast | bra | Del 2 av 3 klar |
| 2:21 | väntar | foto | Pappa och Rolf |
| 2:21 | paket |  | tanke |
| 2:21 | tanke | du | Pappa var här. Han såg vad jag har byggt. |
| 2:21 | väntar | du | Pappa var här. Han såg vad jag har byggt. |
| 2:23 | händelse | printKlar | sak=byggsats:petgkvarn n=1 |
| 2:23 | toast | guld | ✅ |
| 2:23 | händelse | tagitUrPrint | sak=byggsats:petgkvarn n=1 |
| 2:25 | väntar | mamma | Jag har bäddat i ditt rum. Ifall. |
| 2:25 | paket |  | sms |
| 2:25 | väntar | mamma | Jag har skickat virkade grytvantar (lila) med Rolf. Den ligger i postlådan. |
| 2:25 | klar | mamma | Pappa och jag har lagt undan lite. 1 000 kr. Till något fint i ditt hus. Inte till chips. ❤️ /Mamma |
| 2:27 | händelse | placerat | sak=petgkvarn |
| 2:27 | händelse | malKlart | id=r6-kop-roda-kvarnen del=Dag 6 – Röd PETG nasta=r6-mal-tunna-roda |
| 2:27 | struken | du | Någon från kommunen fotograferade skylten. Länge. |
| 2:27 | väntar | du | Mal en tunna i röda kvarnen. |
| 2:27 | MÅL |  | Mal en tunna i röda kvarnen |
| 2:28 | sak | du | Mal en tunna i röda kvarnen. |
| 2:28 | målruta |  | Mal en tunna i röda kvarnen |
| 2:28 | pil |  | Mal en tunna i röda kvarnen |
| 2:28 | röst | du | Mal en tunna i röda kvarnen. · MÅL |
| 2:31 | klar | du | Mal en tunna i röda kvarnen. |
| 2:31 | kvittens-bock |  | ✓ Ställ den röda kvarnen i röda linjen |
| 2:39 | sak | foto | Rolfs bänk |
| 2:39 | foto | du | Rolfs bänk |
| 2:41 | klar | foto | Rolfs bänk |
| 2:43 | väntar | info:guld | 🛒 Säckkärran är i verktygsraden – en tung sak i taget |
| 2:43 | sak | info:guld | 🛒 Säckkärran är i verktygsraden – en tung sak i taget |
| 2:43 | kvitto-visas | info:guld | 🛒 Säckkärran är i verktygsraden – en tung sak i taget |
| 2:43 | toast | guld | 🛒 Säckkärran är i verktygsraden – en tung sak i taget |
| 2:45 | klar | info:guld | 🛒 Säckkärran är i verktygsraden – en tung sak i taget |
| 2:51 | skratt | du | falsk tuta |
| 2:51 | väntar | värld:TUUT! Hej grannen! | TUUT! Hej grannen! |
| 2:52 | skratt | du | kvarnen rapar |
| 2:52 | händelse | malKlart | id=r6-mal-tunna-roda del=Dag 6 – Röd PETG nasta=sol6 |
| 2:52 | väntar | du | Printa och sälj. |
| 2:52 | målruta |  | Printa och sälj |
| 2:53 | MÅL |  | Printa och sälj |
| 2:53 | sak | du | Printa och sälj. |
| 2:53 | pil |  | Printa och sälj |
| 2:53 | röst | du | Printa och sälj. · MÅL |
| 2:55 | klar | du | Printa och sälj. |
| 2:56 | kvittens-bock |  | ✓ Mal en tunna i röda kvarnen |
| 2:57 | väntar | notis:PETG-kvarnen: den första rullen röd PETG | PETG-kvarnen: den första rullen röd PETG är klar |
| 3:00 | händelse | printStart | sak=kruka |
| 3:01 | toast | guld | 🧵 |
| 3:02 | toast | guld | ✅ |
| 3:02 | händelse | printKlar | sak=kruka n=53 |
| 3:03 | händelse | tagitUrPrint | sak=kruka n=1 |
| 3:04 | sak | du | Han kommer hit varje kväll. Nu vet jag var. |
| 3:04 | notis | tanke | 💭 Han kommer hit varje kväll. Nu vet jag var. |
| 3:04 | röst | du | Han kommer hit varje kväll. Nu vet jag var. · STORY |
| 3:05 | händelse | printStart | sak=nyckelring |
| 3:06 | toast | guld | 🧵 |
| 3:06 | toast | guld | ✅ |
| 3:06 | händelse | printKlar | sak=nyckelring n=21 |
| 3:06 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 3:08 | klar | du | Han kommer hit varje kväll. Nu vet jag var. |
| 3:11 | struken | värld:TUUT! Hej grannen! | TUUT! Hej grannen! |
| 3:20 | sak | du | Göran tar mina saker. Kanske han vill ha något eget? |
| 3:20 | notis | tanke | 💭 Göran tar mina saker. Kanske han vill ha något eget? |
| 3:20 | röst | du | Göran tar mina saker. Kanske han vill ha något eget? · STORY |
| 3:21 | webb | du | packade 1 kruka |
| 3:24 | klar | du | Göran tar mina saker. Kanske han vill ha något eget? |
| 3:30 | webb | du | packade 1 nyckelring |
| 3:38 | sak | foto | Pappa och Rolf |
| 3:38 | foto | du | Pappa och Rolf |
| 3:40 | klar | foto | Pappa och Rolf |
| 3:44 | väntar | info:bra | 📦 Paketet till Någon i Mora ligger i postlådan – Rolf tar det till posten |
| 3:44 | sak | info:bra | 📦 Paketet till Någon i Mora ligger i postlådan – Rolf tar det till posten |
| 3:44 | kvitto-visas | info:bra | 📦 Paketet till Någon i Mora ligger i postlådan – Rolf tar det till posten |
| 3:44 | toast | bra | 📦 Paketet till Någon i Mora ligger i postlådan – Rolf tar det till posten |
| 3:45 | väntar | info:bra | 📦 Paketet till En pensionär i Kiruna ligger i postlådan – Rolf tar det till posten |
| 3:46 | klar | info:bra | 📦 Paketet till Någon i Mora ligger i postlådan – Rolf tar det till posten |
| 3:46 | sak | info:bra | 📦 Paketet till En pensionär i Kiruna ligger i postlådan – Rolf tar det till posten |
| 3:46 | kvitto-visas | info:bra | 📦 Paketet till En pensionär i Kiruna ligger i postlådan – Rolf tar det till posten |
| 3:46 | toast | bra | 📦 Paketet till En pensionär i Kiruna ligger i postlådan – Rolf tar det till posten |
| 3:48 | klar | info:bra | 📦 Paketet till En pensionär i Kiruna ligger i postlådan – Rolf tar det till posten |
| 3:48 | händelse | printStart | sak=kruka |
| 3:49 | väntar | foto | Röd fabrik |
| 3:49 | paket |  | tanke |
| 3:49 | tanke | du | Två fabriker. Och det blir fler. |
| 3:49 | väntar | du | Två fabriker. Och det blir fler. |
| 3:51 | väntar | bud | (tips) |
| 3:51 | sak | bud | (tips) |
| 3:51 | toast | guld | ✅ |
| 3:51 | händelse | printKlar | sak=kruka n=54 |
| 3:51 | tanke | du | Jag nynnar. Varför nynnar jag? |
| 3:51 | väntar | du | Jag nynnar. Varför nynnar jag? |
| 3:51 | händelse | tagitUrPrint | sak=kruka n=1 |
| 3:52 | klar | bud | (tips) |
| 3:54 | meddelande | mamma | Jag läste om en man som bodde på en soptipp. Han blev attackerad av måsar. Finns det måsar där? |
| 3:55 | röst | mamma | Jag läste om en man som bodde på en soptipp. Han blev attackerad av måsar. Finns det måsar där? · STORY |
| 4:06 | paket |  | sms |
| 4:06 | väntar | mamma | En katt? Är den vaccinerad? Rör den inte. Eller jo. Ge den en macka. |
| 4:16 | händelse | brevLast | id=m_masar |
| 4:18 | sak | du | Pappa var här. Han såg vad jag har byggt. |
| 4:18 | notis | tanke | 💭 Pappa var här. Han såg vad jag har byggt. |
| 4:18 | röst | du | Pappa var här. Han såg vad jag har byggt. · STORY |
| 4:21 | aliSalt | ali | 105 |
| 4:21 | aliSalt | ali | 80 |
| 4:21 | aliSalt | ali | 76 |
| 4:21 | aliSalt | ali | 72 |
| 4:22 | aliSalt | ali | 180 |
| 4:22 | klar | du | Pappa var här. Han såg vad jag har byggt. |
| 4:24 | struken | du | Jag nynnar. Varför nynnar jag? |
| 4:30 | sak | mamma | Jag har skickat virkade grytvantar (lila) med Rolf. Den ligger i postlådan. |
| 4:30 | sms | mamma | Jag har skickat virkade grytvantar (lila) med Rolf. Den ligger i postlådan. |
| 4:30 | sms-bubbla | mamma | Jag har skickat virkade grytvantar (lila) med Rolf. Den ligger i postlådan. |
| 4:30 | röst | mamma | Jag har skickat virkade grytvantar (lila) med Rolf. Den ligger i postlådan. · STORY |
| 4:37 | klar | mamma | Jag har skickat virkade grytvantar (lila) med Rolf. Den ligger i postlådan. |
| 4:37 | toast | skak | handen skakar: fullt |
| 4:44 | paket |  | tanke |
| 4:44 | tanke | du | En tandborste. Den har varit på fel ställe. |
| 4:44 | väntar | du | En tandborste. Den har varit på fel ställe. |
| 4:44 | skratt | du | kvarnen spottar |
| 4:45 | sak | notis:PETG-kvarnen: den första rullen röd PETG | PETG-kvarnen: den första rullen röd PETG är klar |
| 4:45 | notis | guld | PETG-kvarnen: den första rullen röd PETG är klar |
| 4:47 | klar | notis:PETG-kvarnen: den första rullen röd PETG | PETG-kvarnen: den första rullen röd PETG är klar |
| 4:48 | händelse | printStart | sak=kruka |
| 4:51 | toast | guld | ✅ |
| 4:51 | händelse | printKlar | sak=kruka n=55 |
| 4:51 | händelse | tagitUrPrint | sak=kruka n=1 |
| 4:57 | sak | foto | Röd fabrik |
| 4:57 | foto | du | Röd fabrik |
| 4:59 | aliSalt | ali | 100 |
| 4:59 | klar | foto | Röd fabrik |
| 5:01 | skratt | du | däcket rullar iväg |
| 5:07 | sak | du | Två fabriker. Och det blir fler. |
| 5:07 | notis | tanke | 💭 Två fabriker. Och det blir fler. |
| 5:07 | röst | du | Två fabriker. Och det blir fler. · STORY |
| 5:08 | händelse | printStart | sak=kruka |
| 5:08 | väntar | värld:TUUT! Hej grannen! | TUUT! Hej grannen! |
| 5:10 | klar | du | Två fabriker. Och det blir fler. |
| 5:11 | toast | guld | ✅ |
| 5:11 | händelse | printKlar | sak=kruka n=56 |
| 5:11 | händelse | tagitUrPrint | sak=kruka n=1 |
| 5:18 | aliSalt | ali | 95 |
| 5:19 | tanke | du | Servetter. Massor. Ali flyttar lådan när jag tittar. |
| 5:19 | struken | du | En tandborste. Den har varit på fel ställe. |
| 5:19 | väntar | du | Servetter. Massor. Ali flyttar lådan när jag tittar. |
| 5:19 | sak | du | Servetter. Massor. Ali flyttar lådan när jag tittar. |
| 5:19 | notis | tanke | 💭 Servetter. Massor. Ali flyttar lådan när jag tittar. |
| 5:19 | röst | du | Servetter. Massor. Ali flyttar lådan när jag tittar. · REAKTION |
| 5:24 | klar | du | Servetter. Massor. Ali flyttar lådan när jag tittar. |
| 5:30 | struken | värld:TUUT! Hej grannen! | TUUT! Hej grannen! |
| 5:32 | händelse | printStart | sak=pall |
| 5:38 | toast | guld | ✅ |
| 5:38 | händelse | printKlar | sak=pall n=21 |
| 5:38 | händelse | tagitUrPrint | sak=pall n=1 |
| 5:46 | aliSalt | ali | 180 |
| 5:47 | väntar | mamma | Mormor frågar om du har träffat någon på soptippen. Jag sa att du har en sopgubbe och en katt. Hon blev jätteglad. |
| 5:54 | händelse | printStart | sak=kruka |
| 5:57 | toast | guld | ✅ |
| 5:57 | händelse | printKlar | sak=kruka n=57 |
| 5:57 | händelse | tagitUrPrint | sak=kruka n=1 |
| 6:04 | aliSalt | ali | 90 |
| 6:13 | händelse | printStart | sak=pall |
| 6:18 | toast | guld | ✅ |
| 6:18 | händelse | printKlar | sak=pall n=22 |
| 6:19 | händelse | tagitUrPrint | sak=pall n=1 |
| 6:26 | aliSalt | ali | 171 |
| 6:30 | sak | mamma | En katt? Är den vaccinerad? Rör den inte. Eller jo. Ge den en macka. |
| 6:30 | sms | mamma | En katt? Är den vaccinerad? Rör den inte. Eller jo. Ge den en macka. |
| 6:30 | sms-bubbla | mamma | En katt? Är den vaccinerad? Rör den inte. Eller jo. Ge den en macka. |
| 6:30 | röst | mamma | En katt? Är den vaccinerad? Rör den inte. Eller jo. Ge den en macka. · STORY |
| 6:35 | händelse | printStart | sak=kruka |
| 6:36 | klar | mamma | En katt? Är den vaccinerad? Rör den inte. Eller jo. Ge den en macka. |
| 6:38 | toast | guld | ✅ |
| 6:38 | händelse | printKlar | sak=kruka n=58 |
| 6:38 | händelse | tagitUrPrint | sak=kruka n=1 |
| 6:41 | skratt | du | falsk tuta |
| 6:45 | aliSalt | ali | 86 |
| 6:56 | upplåst | strom | sol |
| 6:56 | brott | RESERV | sol (strom 0 av 15) |
| 6:56 | händelse | upplast | id=sol flask=strom |
| 6:56 | paket |  | sms |
| 6:56 | väntar | ali | Ali här. ☀️ Solpaneler inne. Gratis ström från solen. Solen jobbar också hela dagen och klagar aldrig. Jag gillar solen. |
| 7:03 | väntar | värld:TUUT! Hej grannen! | TUUT! Hej grannen! |
| 7:04 | sak | värld:TUUT! Hej grannen! | TUUT! Hej grannen! |
| 7:04 | bubbla |  | TUUT! Hej grannen! |
| 7:07 | klar | värld:TUUT! Hej grannen! | TUUT! Hej grannen! |
| 7:12 | händelse | printStart | sak=pall |
| 7:15 | sak | ali | Ali här. ☀️ Solpaneler inne. Gratis ström från solen. Solen jobbar också hela dagen och klagar aldrig. Jag gillar solen. |
| 7:15 | sms | ali | Ali här. ☀️ Solpaneler inne. Gratis ström från solen. Solen jobbar också hela dagen och klagar aldrig. Jag gillar solen. |
| 7:15 | sms-bubbla | ali | Ali här. ☀️ Solpaneler inne. Gratis ström från solen. Solen jobbar också hela dagen och klagar aldrig. Jag gillar solen. |
| 7:15 | röst | ali | Ali här. ☀️ Solpaneler inne. Gratis ström från solen. Solen jobbar också hela dagen och klagar aldrig. Jag gillar solen. · STORY |
| 7:17 | toast | guld | ✅ |
| 7:17 | händelse | printKlar | sak=pall n=23 |
| 7:18 | händelse | tagitUrPrint | sak=pall n=1 |
| 7:25 | aliSalt | ali | 162 |
| 7:25 | klar | ali | Ali här. ☀️ Solpaneler inne. Gratis ström från solen. Solen jobbar också hela dagen och klagar aldrig. Jag gillar solen. |
| 7:27 | väntar | mamma | Mormor frågar om du har träffat någon på soptippen. Jag sa att du har en sopgubbe och en katt. Hon blev jätteglad. |
| 7:29 | toast | guld | 3D-modell köpt – printa solpanel på skrivaren |
| 7:29 | händelse | kopt | sak=sol |
| 7:37 | händelse | printStart | sak=byggsats:sol |
| 7:41 | toast | bra | Del 1 av 3 klar |
| 7:44 | toast | bra | Del 2 av 3 klar |
| 7:48 | händelse | printKlar | sak=byggsats:sol n=1 |
| 7:48 | toast | guld | ✅ |
| 7:48 | händelse | tagitUrPrint | sak=byggsats:sol n=1 |
| 7:48 | paket |  | sms |
| 7:48 | väntar | ali | Ali här. Jag såg Solpanel på avstånd. Ett streck blev lite snett. Mitt fel. Vackert ändå. |
| 7:54 | händelse | placerat | sak=sol |
| 7:54 | paket |  | tanke |
| 7:54 | tanke | du | Den röda kvarnen drar mer än vinden orkar. Solen får hjälpa till. |
| 7:54 | väntar | du | Den röda kvarnen drar mer än vinden orkar. Solen får hjälpa till. |
| 7:54 | händelse | malKlart | id=sol6 del=Dag 6 – Röd PETG nasta=goran6 |
| 7:54 | väntar | du | Ge Göran ett eget ställe. |
| 7:54 | MÅL |  | Ge Göran ett eget ställe |
| 7:55 | sak | du | Den röda kvarnen drar mer än vinden orkar. Solen får hjälpa till. |
| 7:55 | kvitto-visas | du | Den röda kvarnen drar mer än vinden orkar. Solen får hjälpa till. |
| 7:55 | notis | tanke | 💭 Den röda kvarnen drar mer än vinden orkar. Solen får hjälpa till. |
| 7:55 | röst | du | Den röda kvarnen drar mer än vinden orkar. Solen får hjälpa till. · REAKTION |
| 7:57 | målruta |  | Ge Göran ett eget ställe |
| 7:58 | kvittens-bock |  | ✓ Sätt en solpanel på skjulets tak |
| 8:01 | klar | du | Den röda kvarnen drar mer än vinden orkar. Solen får hjälpa till. |
| 8:01 | sak | du | Ge Göran ett eget ställe. |
| 8:01 | pil |  | Ge Göran ett eget ställe |
| 8:01 | röst | du | Ge Göran ett eget ställe. · MÅL |
| 8:01 | nick |  | nick:63 |
| 8:03 | klar | du | Ge Göran ett eget ställe. |
| 8:11 | händelse | kopt | sak=fagelskramma |
| 8:11 | röst | ali | AI:n och jag gjorde den i natt. Printa den. Snälla. · STORY |
| 8:11 | butiksbubbla | ali | Min Fågelskrämma… AI:n och jag gjorde den i natt. Printa den. Snälla. |
| 8:19 | händelse | printStart | sak=fagelskramma |
| 8:22 | sak | ali | Ali här. Jag såg Solpanel på avstånd. Ett streck blev lite snett. Mitt fel. Vackert ändå. |
| 8:22 | sms | ali | Ali här. Jag såg Solpanel på avstånd. Ett streck blev lite snett. Mitt fel. Vackert ändå. |
| 8:22 | sms-bubbla | ali | Ali här. Jag såg Solpanel på avstånd. Ett streck blev lite snett. Mitt fel. Vackert ändå. |
| 8:22 | röst | ali | Ali här. Jag såg Solpanel på avstånd. Ett streck blev lite snett. Mitt fel. Vackert ändå. · REAKTION |
| 8:24 | toast | guld | ✅ |
| 8:24 | händelse | printKlar | sak=fagelskramma n=1 |
| 8:24 | händelse | tagitUrPrint | sak=fagelskramma n=1 |
| 8:29 | händelse | placerat | sak=fagelskramma |
| 8:29 | paket |  | tanke |
| 8:29 | tanke | du | Göran har ett hem nu. Bättre än jag hade för en vecka sen. |
| 8:29 | väntar | du | Göran har ett hem nu. Bättre än jag hade för en vecka sen. |
| 8:29 | händelse | malKlart | id=goran6 del=Dag 6 – Röd PETG nasta=sov6 |
| 8:29 | paket |  | lapp |
| 8:29 | väntar | du | Dag 6 är slut. Nu vet grannen att jag bor HÄR. Han verkar inte glad. Blå plast säljer billigt. I morgon. |
| 8:30 | MÅL |  | Klart för idag – sov när du vill |
| 8:30 | klar | ali | Ali här. Jag såg Solpanel på avstånd. Ett streck blev lite snett. Mitt fel. Vackert ändå. |
| 8:30 | sak | du | Göran har ett hem nu. Bättre än jag hade för en vecka sen. |
| 8:30 | kvitto-visas | du | Göran har ett hem nu. Bättre än jag hade för en vecka sen. |
| 8:30 | notis | tanke | 💭 Göran har ett hem nu. Bättre än jag hade för en vecka sen. |
| 8:30 | röst | du | Göran har ett hem nu. Bättre än jag hade för en vecka sen. · REAKTION |
| 8:33 | målruta |  | Klart för idag – sov när du vill |
| 8:33 | kvittens-bock |  | ✓ Ge Göran ett eget ställe |
| 8:35 | klar | du | Göran har ett hem nu. Bättre än jag hade för en vecka sen. |
| 8:35 | sak | du | (nytt mål i rutan) |
| 8:35 | pil |  | Klart för idag – sov när du vill |
| 8:35 | klar | du | (nytt mål i rutan) |
| 8:35 | sak | du | Dag 6 är slut. Nu vet grannen att jag bor HÄR. Han verkar inte glad. Blå plast säljer billigt. I morgon. |
| 8:35 | kvitto-visas | du | Dag 6 är slut. Nu vet grannen att jag bor HÄR. Han verkar inte glad. Blå plast säljer billigt. I morgon. |
| 8:35 | lapp | 📔 Dagbok | Dag 6 är slut. Nu vet grannen att jag bor HÄR. Han verkar inte glad. Blå plast säljer billigt. I morgon. |
| 8:35 | meddelande | du | Dag 6 är slut. Nu vet grannen att jag bor HÄR. Han verkar inte glad. Blå plast säljer billigt. I morgon. |
| 8:35 | dagbokkort | du | Dag 6 är slut. Nu vet grannen att jag bor HÄR. Han verkar inte glad. Blå plast säljer billigt. I morgon. |
| 8:35 | röst | du | Dag 6 är slut. Nu vet grannen att jag bor HÄR. Han verkar inte glad. Blå plast säljer billigt. I morgon. · STORY |
| 8:45 | händelse | brevLast | id=kvall6 |
| 8:45 | klar | du | Dag 6 är slut. Nu vet grannen att jag bor HÄR. Han verkar inte glad. Blå plast säljer billigt. I morgon. |
| 8:45 | väntar | notis:🌇 Klockan är 21. Ali slår igen luckan.  | 🌇 Klockan är 21. Ali slår igen luckan. Dagens jobb är klart – gå in i skjulet och sov i sängen. |
| 8:45 | struken | mamma | Jag har bäddat i ditt rum. Ifall. |
| 8:49 | brott | SEN KVITTENS | 3.2 s sen: ”Dag 6 är slut. Nu vet grannen att jag bor HÄR. Ha” (dagbok kvall6) |
| 8:50 | webbBetalt | du | 134 |

<details><summary>Botens handlingar dag 6</summary>

- 0:00 — dag 6 börjar — (7762 kr)
- 0:15 popup: "FORTSÄTT" (7762 kr)
- 0:26 gå till Rolfs postlåda (28 m) (7762 kr)
- 0:31 panel: "Rolfs postlåda
Det här låg i l" (8162 kr)
- 0:36 gå till pappa (20 m) (8162 kr)
- 0:52 gå till Rolfs postlåda (20 m) (8162 kr)
- 1:00 panel: "Rolfs postlåda
Det här låg i l" (8162 kr)
- 1:05 gå till pappa (19 m) (8162 kr)
- 2:01 gå till Ali (13 m) (8162 kr)
- 2:01 öppnar Alis butik – köpa röda kvarnen (petg) (8162 kr)
- 2:03 köper petgkvarn för 1200 kr (6962 kr)
- 2:10 gå till skrivaren (24 m) (6962 kr)
- 2:11 printar Röda kvarnen (PETG) (3 delar) (6962 kr)
- 2:24 tar ut 1 st ur skrivaren (6962 kr)
- 2:26 gå till platsen för röda kvarnen (petg) (7 m) (6962 kr)
- 2:27 ställer ut röda kvarnen (petg) (6962 kr)
- 2:35 gå till Rolfs postlåda (9 m) (6962 kr)
- 2:38 panel: "Rolfs postlåda
Det här låg i l" (6962 kr)
- 2:43 gå till säckkärran i högen (21 m) (6962 kr)
- 2:52 gå till PETG-kvarnen (19 m) (6962 kr)
- 2:52 tömmer det tunga i PETG-kvarnen (6962 kr)
- 2:58 gå till skrivaren (5 m) (6962 kr)
- 3:00 printar Blomkruka (6962 kr)
- 3:04 tar ut 1 st ur skrivaren (6962 kr)
- 3:05 printar Nyckelring (6962 kr)
- 3:07 tar ut 1 st ur skrivaren (6962 kr)
- 3:11 gå till datorn (21 m) (6962 kr)
- 3:20 panel: "Webbshopen · Soptippsvägen 1
B" (6962 kr)
- 3:29 panel: "Webbshopen · Soptippsvägen 1
B" (6962 kr)
- 3:38 panel: "Webbshopen · Soptippsvägen 1
B" (6962 kr)
- 3:44 gå till Rolfs postlåda (paket) (29 m) (6962 kr)
- 3:45 webbshop: 2 paket i postlådan (6962 kr)
- 3:45 tjänar pengar till väntar på flaskhalsen för sol: 6962/7002 kr → printar blomkruka (105 kr) (6962 kr)
- 3:47 gå till skrivaren (8 m) (6962 kr)
- 3:48 printar Blomkruka (6962 kr)
- 3:52 tar ut 1 st ur skrivaren (6962 kr)
- 4:06 popup: "Bara en katt." (6962 kr)
- 4:16 popup: "Läst" (6962 kr)
- 4:19 gå till Ali (26 m) (6962 kr)
- 4:19 öppnar Alis butik – sälja (6962 kr)
- 4:22 säljer hos Ali: +513 kr (7475 kr)
- 4:24 tjänar pengar till väntar på flaskhalsen för sol: 7475/7515 kr → printar blomkruka (100 kr) (7475 kr)
- 4:38 plockar 6 skräp på tippen (bär max 16) (7475 kr)
- 4:41 gå till kvarnen (14 m) (7475 kr)
- 4:47 gå till skrivaren (5 m) (7475 kr)
- 4:48 printar Blomkruka (7475 kr)
- 4:52 tar ut 1 st ur skrivaren (7475 kr)
- 4:57 gå till Ali (26 m) (7475 kr)
- 4:57 öppnar Alis butik – sälja (7475 kr)
- 4:59 säljer hos Ali: +100 kr (7575 kr)
- 5:02 tjänar pengar till väntar på flaskhalsen för sol: 7575/7615 kr → printar blomkruka (95 kr) (7575 kr)
- 5:07 gå till skrivaren (24 m) (7575 kr)
- 5:08 printar Blomkruka (7575 kr)
- 5:12 tar ut 1 st ur skrivaren (7575 kr)
- 5:17 gå till Ali (24 m) (7575 kr)
- 5:17 öppnar Alis butik – sälja (7575 kr)
- 5:19 säljer hos Ali: +95 kr (7670 kr)
- 5:26 tjänar pengar till väntar på flaskhalsen för sol: 7670/7710 kr → printar pall (180 kr) (7670 kr)
- 5:31 gå till skrivaren (24 m) (7670 kr)
- 5:32 printar Pall (7670 kr)
- 5:39 tar ut 1 st ur skrivaren (7670 kr)
- 5:44 gå till Ali (24 m) (7670 kr)
- 5:44 öppnar Alis butik – sälja (7670 kr)
- 5:46 säljer hos Ali: +180 kr (7850 kr)
- 5:48 tjänar pengar till väntar på flaskhalsen för sol: 7850/7890 kr → printar blomkruka (90 kr) (7850 kr)
- 5:53 gå till skrivaren (24 m) (7850 kr)
- 5:54 printar Blomkruka (7850 kr)
- 5:58 tar ut 1 st ur skrivaren (7850 kr)
- 6:03 gå till Ali (24 m) (7850 kr)
- 6:03 öppnar Alis butik – sälja (7850 kr)
- 6:05 säljer hos Ali: +90 kr (7940 kr)
- 6:06 tjänar pengar till väntar på flaskhalsen för sol: 7940/7980 kr → printar pall (171 kr) (7940 kr)
- 6:12 gå till skrivaren (24 m) (7940 kr)
- 6:13 printar Pall (7940 kr)
- 6:20 tar ut 1 st ur skrivaren (7940 kr)
- 6:25 gå till Ali (24 m) (7940 kr)
- 6:25 öppnar Alis butik – sälja (7940 kr)
- 6:27 säljer hos Ali: +171 kr (8111 kr)
- 6:28 tjänar pengar till väntar på flaskhalsen för sol: 8111/8151 kr → printar blomkruka (86 kr) (8111 kr)
- 6:34 gå till skrivaren (24 m) (8111 kr)
- 6:35 printar Blomkruka (8111 kr)
- 6:39 tar ut 1 st ur skrivaren (8111 kr)
- 6:44 gå till Ali (24 m) (8111 kr)
- 6:44 öppnar Alis butik – sälja (8111 kr)
- 6:45 säljer hos Ali: +86 kr (8197 kr)
- 6:47 tjänar pengar till väntar på flaskhalsen för sol: 8197/8237 kr → printar pall (162 kr) (8197 kr)
- 7:01 plockar 6 skräp på tippen (bär max 16) (8197 kr)
- 7:03 gå till kvarnen (13 m) (8197 kr)
- 7:10 gå till skrivaren (5 m) (8197 kr)
- 7:12 printar Pall (8197 kr)
- 7:18 tar ut 1 st ur skrivaren (8197 kr)
- 7:24 gå till Ali (27 m) (8197 kr)
- 7:24 öppnar Alis butik – sälja (8197 kr)
- 7:25 säljer hos Ali: +162 kr (8359 kr)
- 7:27 öppnar Alis butik – köpa solpanel (8359 kr)
- 7:30 köper sol för 400 kr (7959 kr)
- 7:36 gå till skrivaren (24 m) (7959 kr)
- 7:37 printar Solpanel (3 delar) (7959 kr)
- 7:49 tar ut 1 st ur skrivaren (7959 kr)
- 7:53 gå till platsen för solpanel (20 m) (7959 kr)
- 7:54 ställer ut solpanel (7959 kr)
- 8:09 gå till Ali (18 m) (7959 kr)
- 8:09 öppnar Alis butik – köpa receptet fågelskrämma (7959 kr)
- 8:11 köper fagelskramma för 40 kr (7919 kr)
- 8:17 gå till skrivaren (24 m) (7919 kr)
- 8:19 printar Fågelskrämma (7919 kr)
- 8:24 tar ut 1 st ur skrivaren (7919 kr)
- 8:28 gå till platsen för fågelskrämma (19 m) (7919 kr)
- 8:29 ställer ut fågelskrämma (7919 kr)
- 8:45 popup: "FORTSÄTT" (7919 kr)
- 8:47 gå till sängen (7 m) (7919 kr)

</details>

## Dag 7

| Tid | Källa | Vem | Text |
|---|---|---|---|
| 8:50 | vara | ali | pall |
| 8:50 | händelse | malKlart | id=sov6 del=Dag 6 – Röd PETG nasta=r7-bygg-petg-skrivaren |
| 8:50 | MÅL |  | Bygg PETG-skrivaren |
| 8:51 | väntar | info:guld | Göran tycker om fågelskrämman. Han sitter på den. |
| 8:51 | väntar | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått pirran. Och röda kvarnen. Vi tar en låt på det. Den här är till dig, Gunnar. |
| 8:51 | radio | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått pirran. Och röda kvarnen. Vi tar en låt på det. Den här är till dig, Gunnar. |
| 8:51 | skratt | du | Radio-Kjelle |

<details><summary>Botens handlingar dag 7</summary>

- 0:00 — dag 7 börjar — (8053 kr)

</details>
