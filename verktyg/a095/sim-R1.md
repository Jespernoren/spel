# Simulering kapitel 1 – körning 1

*Gjord 2026-11-21 09:09 med `verktyg/sim-kapitel1.mjs` + `verktyg/sim-bot.js` (punkt AX). Boten går 4,5 m/s, läser 15 tecken/s, trampar, vevar, plockar, printar, köper och säljer via spelets egna funktioner. Tiderna är speltid.*

## Sammanfattning

| Dag | Minuter | Väntan | Prints (totalt) | Kr vid sömn | Bär | Trivsel |
|---|---|---|---|---|---|---|
| 1 | 11.4 | 2 % | 25 | 250 | 6 | 23 |
| 2 | 11.1 | 1 % | 43 | 1732 | 10 | 38 |
| 3 | 13.7 | 3 % | 64 | 2770 | 16 | 78 |
| 4 | 12.3 | 1 % | 82 | 4080 | 16 | 96 |
| 5 | 15.7 | 3 % | 101 | 7174 | 16 | 136 |
| 6 | 8.4 | 2 % | 111 | 7269 | 16 | 148 |
| 7 | 0.0 | 0 % | 111 | 7311 | 16 | 118 |

## Flaskhalskartan (EE)

| Dag | bara | mala | trampa | strom | skrivare | inkomst | Upplåst |
|---|---|---|---|---|---|---|---|
| 1 | 7 | 11 | 23 | 12 | 141 | 23 | grip (bara, 7:55, reserv), kruka (inkomst, 9:19) |
| 2 | 1 | 8 | 11 | 29 | 348 | 0 | kvarnmotor (mala, 3:34, reserv), rullstall (skrivare, 5:12), trim_skrivare (skrivare, 6:34), vindsnurra (trampa, 8:59) |
| 3 | 2 | 19 | 0 | 15 | 462 | 0 | cykelbatteri (strom, 6:55, reserv), ryggkorg (bara, 9:35), skrivare2 (skrivare, 11:06) |
| 4 | 1 | 23 | 0 | 15 | 352 | 0 | trim_skrivare2 (skrivare, 3:20), matarband (bara, 7:34, reserv), vindsnurra2 (strom, 9:44) |
| 5 | 6 | 21 | 0 | 0 | 404 | 0 | trim_skrivare3 (skrivare, 3:51), vindsnurra3 (strom, 12:49, reserv) |
| 6 | 2 | 5 | 0 | 0 | 223 | 0 | sol (strom, 6:50, reserv) |
| 7 | 0 | 0 | 0 | 0 | 0 | 0 |  |

TIDIG: 0 · FAST: 0 · upplåst av reserven (målet väntade 3 min): 6

**SKRATT:** 71 roliga ögonblick på 73 min (9.8 per 10 min, mål minst 5)

**Köp:**

- dag 1 2:47 – gammalkvarn (30 kr)
- dag 1 8:37 – grip (50 kr)
- dag 1 9:28 – kruka (40 kr)
- dag 1 10:18 – sang (60 kr)
- dag 2 3:41 – kvarnmotor (50 kr)
- dag 2 9:13 – vindsnurra (133 kr)
- dag 2 10:26 – dorr (120 kr)
- dag 3 7:15 – cykelbatteri (30 kr)
- dag 3 10:02 – ryggkorg (120 kr)
- dag 3 10:34 – bord (120 kr)
- dag 3 11:20 – skrivare2 (500 kr)
- dag 3 12:53 – tak (250 kr)
- dag 4 7:54 – matarband (120 kr)
- dag 4 9:01 – pall (80 kr)
- dag 4 10:04 – vindsnurra (133 kr)
- dag 4 11:25 – vaggar (130 kr)
- dag 5 6:05 – webbdator (300 kr)
- dag 5 7:05 – fonster (90 kr)
- dag 5 7:31 – golv (140 kr)
- dag 5 8:41 – taklampa (90 kr)
- dag 5 13:04 – vindsnurra (133 kr)
- dag 6 2:03 – petgkvarn (1200 kr)
- dag 6 6:54 – sol (400 kr)
- dag 6 7:52 – fagelskramma (40 kr)

## Storykedjan (kvittens → varför → nytt mål)

| Dag | Tid | Id | Kvittens | Varför | Nytt mål | Tid till målet |
|---|---|---|---|---|---|---|
| 1 | 0:32 | lastat | Tung. Den har storebror aldrig burit så långt. |  | Skrivaren ställer jag där borta, mot skräpberget. Min första | 4.4 s |
| 1 | 1:49 | printStart | Den piper. Den GÖR något. |  | En nyckelring till, så länge storebrors rulle räcker. | 6.6 s |
| 1 | 1:54 | printKlar | Klar! Ta ut den innan den ändrar sig. |  | En nyckelring till, så länge storebrors rulle räcker. | 3.1 s |
| 1 | 9:39 | krukaD1 | En kruka. Mamma skulle bli så stolt. Hon får inte veta. |  | Jag kan inte sova på betongen en natt till. Ali har en säng. | 15.3 s |
| 2 | 10:06 | vindsnurra | Den snurrar! Långsamt. Men den snurrar. | Om det regnar i natt drunknar jag. Ett tak. | Det drar från dörrhålet. En dörr kan jag printa. | 4.3 s |
| 4 | 8:39 | sophallare | Nu kan jag tömma hela kärran på en gång. | Krukor är bra. Pallar är bättre. | Jag behöver något att sitta på. En pall. Lagom ambitiöst. | 4.3 s |

## Hur länge nya mål väntade (från att förra målet blev klart till att det nya syntes i målrutan)

Snitt 3.8 s · max 17.5 s · över 4 s: 13 · över 8 s: 10 av 64

## Flaggor (54)

- **UPPREPNING** dag 4 9:00: Bra val. Folk köper sånt. Jag vet inte varför. (CT)
- **LUGN** dag 2 0:08: 0.0 s efter BÖRJA DAGEN: [lapp] "Första natten i en riktig säng. Jag printade den själv."
- **LUGN** dag 2 0:08: 0.0 s efter BÖRJA DAGEN: [meddelande] "Första natten i en riktig säng. Jag printade den själv."
- **LUGN** dag 2 0:08: 0.2 s efter BÖRJA DAGEN: [röst] "Dag 2. 20 dagar till jul. Första natten i en riktig säng. Ja"
- **LUGN** dag 5 0:08: 0.0 s efter BÖRJA DAGEN: [notis] "Ali vill ha idag: Pall – +50 % hela dagen (270 kr just nu)📈"
- **KROCK** dag 2 0:08: 0.1 s mellan [notis] "Ali vill ha idag: Blomkruka – +50 % hela dagen (105 kr just " och [lapp] "Första natten i en riktig säng. Jag printade den själv."
- **KROCK** dag 5 15:30: 1.4 s mellan [sms-bubbla] "Pappa kommer förbi i morgon. Han säger inget men han vill. ❤" och [lapp] "Tre dagar. Tänk om tre veckor."
- **KEDJA** dag 1 0:32: lastat: nytt mål 4.4 s efter kedjan (max 2 s)
- **KEDJA** dag 1 1:49: printStart: nytt mål 6.6 s efter kedjan (max 2 s)
- **KEDJA** dag 1 9:39: krukaD1: nytt mål 15.3 s efter kedjan (max 2 s)
- **KEDJA** dag 2 10:06: vindsnurra: nytt mål 4.3 s efter kedjan (max 2 s)
- **KEDJA** dag 4 8:39: sophallare: nytt mål 4.3 s efter kedjan (max 2 s)
- **SEN** dag 1 5:03: 62.4 s efter händelsen: kjelle: "God morgon, det är Kjelle på Radio Tippen! Det har flyttat in någon i "
- **SEN** dag 1 9:38: 19.2 s efter händelsen: ali: "Ali här. Jag såg Skräpgrip på avstånd. Ett streck blev lite snett. Mit"
- **SEN** dag 2 3:15: 72.3 s efter händelsen: notis:Storebrors skrivare: Ingen ström – tramp: "Storebrors skrivare: Ingen ström – trampa cykeln"
- **SEN** dag 2 3:27: 75.5 s efter händelsen: kjelle: "Radio Tippen, Kjelle här. Skjulet vid tippen har fått generator. Vi ta"
- **SEN** dag 2 3:55: 80.0 s efter händelsen: du: "Jaha. En kalsong. Använd."
- **SEN** dag 3 1:00: 29.8 s efter händelsen: du: "En hel kanot. Kvarnen skulle äta upp sig själv."
- **SEN** dag 3 4:49: 62.0 s efter händelsen: du: "Hård plast. Lilla kvarnen skulle explodera. Eller jag."
- **SEN** dag 3 6:02: 60.9 s efter händelsen: du: "Jaha, Rolf har hämtat flasköppnare med magnet."
- **SEN** dag 3 6:48: 19.8 s efter händelsen: du: "Den blev… spagetti. Ali kallar det modern konst."
- **SEN** dag 3 10:45: 18.9 s efter händelsen: ali: "Ali här. Du printade Ryggkorg från min ritning. Och det FUNKAR? Jag ha"
- **SEN** dag 4 1:56: 42.9 s efter händelsen: du: "En badanka. Den överlevde kvarnen."
- **SEN** dag 4 6:32: 64.2 s efter händelsen: du: "Jaha, Rolf har hämtat grillspade."
- **SEN** dag 5 3:58: 17.5 s efter händelsen: du: "En tandborste. Den har varit på fel ställe."
- **SEN** dag 5 6:18: 12.3 s efter händelsen: du: "Jaha, Rolf har hämtat trädgårdstomte till flaket."
- **SEN** dag 6 3:31: 15.9 s efter händelsen: notis:PETG-kvarnen: den första rullen röd PETG: "PETG-kvarnen: den första rullen röd PETG är klar"
- **SEN** dag 6 7:21: 17.0 s efter händelsen: värld:Mjau.: "Mjau."
- **SAMTIDIGT** dag 1 0:29: "Skrivaren står kvar på cykeln. Den ska a" och "(nytt mål i rutan)"
- **PAUS** dag 1 0:36: 0.0 s paus före "🖨️ Storebrors skrivare. Den ska stå där borta, mo"
- **SAMTIDIGT** dag 1 1:47: "Okej. Välj nåt litet att printa." och "Nu ska skrivaren få jobba. Jag väljer nå"
- **PAUS** dag 1 1:52: 0.0 s paus före "Den piper. Den GÖR något."
- **PAUS** dag 1 1:55: 0.6 s paus före "Klar! Ta ut den innan den ändrar sig."
- **PAUS** dag 1 3:25: 0.0 s paus före "Kvarnen funkar. Soptippen är en gruva."
- **PAUS** dag 1 9:46: 0.0 s paus före "Ali gillar krukor. Han sa det själv."
- **PAUS** dag 1 9:49: 0.0 s paus före "En kruka. Mamma skulle bli så stolt. Hon får inte "
- **PAUS** dag 2 4:32: 0.0 s paus före "Gården är STÄDAD. Av mig. Frivilligt. Mamma skulle"
- **PAUS** dag 2 10:06: 1.4 s paus före "Den snurrar! Långsamt. Men den snurrar."
- **PAUS** dag 2 10:09: 0.0 s paus före "🌬️ Vindsnurran sitter på taket – den trampar cyke"
- **PAUS** dag 4 8:42: 0.0 s paus före "🗑️ Sophållaren står bakom kvarnen! Töm allt skräp"
- **PAUS** dag 4 10:26: 0.0 s paus före "Slut på trampandet. Nästan."
- **PAUS** dag 5 2:00: 0.0 s paus före "🚛 Rolf tippade DUBBEL last på soptippen!"
- **PAUS** dag 6 0:15: 0.0 s paus före "Göran snodde lampskärm."
- **UPPREPNING** dag 4 3:39: info:bra: "🛒 4 skräp från famnen i skottkärran" (förra gången dag 4)
- **UPPREPNING** dag 4 10:16: info:guld: "🌬️ Vindsnurran ligger i handen – klicka på skjulet för att sätta den " (förra gången dag 2)
- **UPPREPNING** dag 4 10:24: info:guld: "🌬️ Vindsnurran sitter på taket – den trampar cykeln åt dig när det bl" (förra gången dag 2)
- **UPPREPNING** dag 5 13:16: info:guld: "🌬️ Vindsnurran ligger i handen – klicka på skjulet för att sätta den " (förra gången dag 4)
- **UPPREPNING** dag 5 13:24: info:guld: "🌬️ Vindsnurran sitter på taket – den trampar cykeln åt dig när det bl" (förra gången dag 4)
- **TIPS OM SAKNAD SAK** dag 1 1:37: notisen: "Om jag trampar ström med cykeln kan skrivaren gå. " nämner cykeln
- **TORRT** dag 1 4:42: 277 s utan roligt ögonblick
- **TORRT** dag 4 9:11: 275 s utan roligt ögonblick
- **TEMPO** dag 5 15:44: dag 5 tog 15.7 min (mål 10–15)
- **TEMPO** dag 6 8:25: dag 6 tog 8.4 min (mål 10–15)
- **TEMPO** dag 7 0:00: dag 7 tog 0.0 min (mål 10–15)

Sidfel: inga

## Dag 1

| Tid | Källa | Vem | Text |
|---|---|---|---|
| 0:00 | MÅL |  | Lasta av skrivaren |
| 0:00 | MÅL |  | Lasta av skrivaren |
| 0:00 | sak | bud | (tips) |
| 0:01 | väntar | du | Se så mycket skräp här är. Det är ju en guldgruva! |
| 0:01 | klar | bud | (tips) |
| 0:03 | sak | du | Se så mycket skräp här är. Det är ju en guldgruva! |
| 0:03 | röst | du | Se så mycket skräp här är. Det är ju en guldgruva! · STORY |
| 0:08 | sak-del | du | Men först en skylt, så att alla vet var jag bor. |
| 0:08 | röst | du | Men först en skylt, så att alla vet var jag bor. · STORY |
| 0:12 | klar | du | Se så mycket skräp här är. Det är ju en guldgruva! |
| 0:15 | lapp | 📔 Dagbok | Spikade ihop en skylt av lösa bräder från skräpberget. Soptippsvägen 1. Det är inte mycket för världen. Men det är MITT. |
| 0:15 | meddelande | du | Spikade ihop en skylt av lösa bräder från skräpberget. Soptippsvägen 1. Det är inte mycket för världen. Men det är MITT. |
| 0:15 | dagbokkort | du | Spikade ihop en skylt av lösa bräder från skräpberget. Soptippsvägen 1. Det är inte mycket för världen. Men det är MITT. |
| 0:15 | varför | du | Skrivaren står kvar på cykeln. Den ska av. |
| 0:15 | väntar | du | Skrivaren står kvar på cykeln. Den ska av. |
| 0:15 | röst | du | Dag 1. 21 dagar till jul. Spikade ihop en skylt av lösa bräder från skräpberget. Soptippsvägen 1. Det är inte mycket för världen. Men det är MITT. · STORY |
| 0:27 | händelse | brevLast | id=skylt |
| 0:27 | sak | du | Skrivaren står kvar på cykeln. Den ska av. |
| 0:27 | struken | du | Skrivaren står kvar på cykeln. Den ska av. |
| 0:29 | sak | du | (nytt mål i rutan) |
| 0:29 | klar | du | (nytt mål i rutan) |
| 0:31 | struken | info:info | ⏎ Enter – hoppa över |
| 0:32 | händelse | lastatAv | sak=skrivare |
| 0:32 | paket |  | sms |
| 0:32 | väntar | mamma | Hur kunde du bara gå? Är du ok? Svara när jag ringer! |
| 0:32 | kvittens | du | Tung. Den har storebror aldrig burit så långt. |
| 0:32 | väntar | du | Tung. Den har storebror aldrig burit så långt. |
| 0:32 | väntar | info:bra | 🖨️ Storebrors skrivare. Den ska stå där borta, mot skräpberget. |
| 0:32 | sak | du | Tung. Den har storebror aldrig burit så långt. |
| 0:32 | notis | tanke | 💭 Tung. Den har storebror aldrig burit så långt. |
| 0:32 | röst | du | Tung. Den har storebror aldrig burit så långt. · STORY |
| 0:32 | händelse | malKlart | id=lasta del=Dag 1 – Kom igång nasta=stall |
| 0:32 | väntar | du | Skrivaren ställer jag där borta, mot skräpberget. Min första verkstad. |
| 0:32 | MÅL |  | Ställ upp skrivaren |
| 0:35 | målruta |  | Ställ upp skrivaren |
| 0:36 | klar | du | Tung. Den har storebror aldrig burit så långt. |
| 0:36 | sak | info:bra | 🖨️ Storebrors skrivare. Den ska stå där borta, mot skräpberget. |
| 0:36 | kvitto-visas | info:bra | 🖨️ Storebrors skrivare. Den ska stå där borta, mot skräpberget. |
| 0:36 | toast | bra | 🖨️ Storebrors skrivare. Den ska stå där borta, mot skräpberget. |
| 0:38 | klar | info:bra | 🖨️ Storebrors skrivare. Den ska stå där borta, mot skräpberget. |
| 0:40 | hjälp | kontroll | E: Ryggsäcken och kistan |
| 0:40 | sak | du | Skrivaren ställer jag där borta, mot skräpberget. Min första verkstad. |
| 0:40 | pil |  | Ställ upp skrivaren |
| 0:40 | notis | tanke | 💭 Skrivaren ställer jag där borta, mot skräpberget. Min första verkstad. |
| 0:40 | röst | du | Skrivaren ställer jag där borta, mot skräpberget. Min första verkstad. · MÅL |
| 0:40 | nick |  | nick:1 |
| 0:45 | klar | du | Skrivaren ställer jag där borta, mot skräpberget. Min första verkstad. |
| 0:48 | väntar | info:bra | 🖨️ Storebrors skrivare står på sin plats |
| 0:48 | händelse | placerat | sak=skrivareS |
| 0:48 | paket |  | tanke |
| 0:48 | tanke | du | Storebrors rulle. Den räcker inte länge. |
| 0:48 | väntar | du | Storebrors rulle. Den räcker inte länge. |
| 0:48 | duns | du | ställs ner |
| 0:48 | sak | info:bra | 🖨️ Storebrors skrivare står på sin plats |
| 0:48 | kvitto-visas | info:bra | 🖨️ Storebrors skrivare står på sin plats |
| 0:48 | toast | bra | 🖨️ Storebrors skrivare står på sin plats |
| 0:48 | händelse | malKlart | id=stall del=Dag 1 – Kom igång nasta=strom |
| 0:48 | struken | du | Storebrors rulle. Den räcker inte länge. |
| 0:48 | väntar | du | Skrivaren behöver ström. Hur fixar jag det här ute? |
| 0:48 | MÅL |  | Skrivaren behöver ström |
| 0:50 | klar | info:bra | 🖨️ Storebrors skrivare står på sin plats |
| 0:50 | målruta |  | Skrivaren behöver ström |
| 0:52 | kvittens-bock |  | ✓ Ställ upp skrivaren |
| 0:52 | sak | du | Skrivaren behöver ström. Hur fixar jag det här ute? |
| 0:52 | pil |  | Skrivaren behöver ström |
| 0:52 | notis | tanke | 💭 Skrivaren behöver ström. Hur fixar jag det här ute? |
| 0:52 | röst | du | Skrivaren behöver ström. Hur fixar jag det här ute? · MÅL |
| 0:56 | klar | du | Skrivaren behöver ström. Hur fixar jag det här ute? |
| 1:27 | paket |  | tanke |
| 1:27 | tanke | du | Cykeln… och storebrors generator? |
| 1:27 | väntar | du | Cykeln… och storebrors generator? |
| 1:27 | sak | du | Cykeln… och storebrors generator? |
| 1:27 | kvitto-visas | du | Cykeln… och storebrors generator? |
| 1:27 | notis | tanke | 💭 Cykeln… och storebrors generator? |
| 1:27 | röst | du | Cykeln… och storebrors generator? · STORY |
| 1:27 | händelse | malKlart | id=strom del=Dag 1 – Kom igång nasta=bygg |
| 1:27 | väntar | du | Om jag trampar ström med cykeln kan skrivaren gå. Cykeln där, generatorn bredvid. |
| 1:28 | MÅL |  | Ställ cykel och generator |
| 1:30 | klar | du | Cykeln… och storebrors generator? |
| 1:30 | målruta |  | Ställ cykel och generator |
| 1:31 | paket |  | tanke |
| 1:31 | tanke | du | Storebrors generator. Den gör el av trampandet. |
| 1:31 | väntar | du | Storebrors generator. Den gör el av trampandet. |
| 1:31 | händelse | placerat | sak=generator |
| 1:31 | duns | du | ställs ner |
| 1:31 | kvittens-bock |  | ✓ Skrivaren behöver ström |
| 1:33 | sak | du | Om jag trampar ström med cykeln kan skrivaren gå. Cykeln där, generatorn bredvid. |
| 1:33 | pil |  | Ställ cykel och generator |
| 1:33 | notis | tanke | 💭 Om jag trampar ström med cykeln kan skrivaren gå. Cykeln där, generatorn bredvid. |
| 1:33 | röst | du | Om jag trampar ström med cykeln kan skrivaren gå. Cykeln där, generatorn bredvid. · MÅL |
| 1:34 | ljud | utrustning | Cykeln i famnen |
| 1:34 | händelse | lyft | sak=cykel |
| 1:37 | brott | TIPS OM SAKNAD SAK | notisen: "Om jag trampar ström med cykeln kan skrivaren gå. " nämner cykeln |
| 1:40 | klar | du | Om jag trampar ström med cykeln kan skrivaren gå. Cykeln där, generatorn bredvid. |
| 1:45 | händelse | placerat | sak=cykel |
| 1:45 | duns | du | ställs ner |
| 1:47 | händelse | ombyggd | sak=cykel |
| 1:47 | varför | du | Okej. Välj nåt litet att printa. |
| 1:47 | väntar | du | Okej. Välj nåt litet att printa. |
| 1:47 | sak | du | Okej. Välj nåt litet att printa. |
| 1:47 | struken | du | Okej. Välj nåt litet att printa. |
| 1:47 | händelse | malKlart | id=bygg del=Dag 1 – Kom igång nasta=valjModell |
| 1:47 | struken | du | Storebrors generator. Den gör el av trampandet. |
| 1:47 | väntar | du | Nu ska skrivaren få jobba. Jag väljer något litet först. |
| 1:47 | målruta |  | Välj en print |
| 1:47 | MÅL |  | Välj en print |
| 1:47 | sak | du | Nu ska skrivaren få jobba. Jag väljer något litet först. |
| 1:47 | pil |  | Välj en print |
| 1:47 | notis | tanke | 💭 Nu ska skrivaren få jobba. Jag väljer något litet först. |
| 1:47 | röst | du | Nu ska skrivaren få jobba. Jag väljer något litet först. · MÅL |
| 1:49 | händelse | printStart | sak=nyckelring |
| 1:49 | kvittens | du | Den piper. Den GÖR något. |
| 1:49 | väntar | du | Den piper. Den GÖR något. |
| 1:49 | tanke | du | Den stannar när jag slutar trampa. Ström som sparas hade varit nåt. |
| 1:49 | väntar | du | Den stannar när jag slutar trampa. Ström som sparas hade varit nåt. |
| 1:49 | händelse | malKlart | id=valjModell del=Dag 1 – Kom igång nasta=trampa |
| 1:49 | struken | du | Den stannar när jag slutar trampa. Ström som sparas hade varit nåt. |
| 1:49 | väntar | du | Cykeln är kraftverket. Nu får benen jobba. |
| 1:50 | MÅL |  | Trampa cykeln |
| 1:52 | klar | du | Nu ska skrivaren få jobba. Jag väljer något litet först. |
| 1:52 | sak | du | Den piper. Den GÖR något. |
| 1:52 | notis | tanke | 💭 Den piper. Den GÖR något. |
| 1:52 | röst | du | Den piper. Den GÖR något. · STORY |
| 1:52 | målruta |  | Trampa cykeln |
| 1:54 | klar | du | Den piper. Den GÖR något. |
| 1:54 | händelse | printKlar | sak=nyckelring n=1 |
| 1:54 | kvittens | du | Klar! Ta ut den innan den ändrar sig. |
| 1:54 | väntar | du | Klar! Ta ut den innan den ändrar sig. |
| 1:54 | händelse | malKlart | id=trampa del=Dag 1 – Kom igång nasta=rullSlut |
| 1:54 | väntar | du | En nyckelring till, så länge storebrors rulle räcker. |
| 1:55 | MÅL |  | En nyckelring till |
| 1:55 | struken | du | Cykeln är kraftverket. Nu får benen jobba. |
| 1:55 | sak | du | Klar! Ta ut den innan den ändrar sig. |
| 1:55 | notis | tanke | 💭 Klar! Ta ut den innan den ändrar sig. |
| 1:55 | röst | du | Klar! Ta ut den innan den ändrar sig. · STORY |
| 1:55 | målruta |  | En nyckelring till |
| 1:55 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 1:55 | paket |  | sms |
| 1:55 | väntar | bror | VA FAN?! Fick du igång den?? Jag försökte i typ ett år. Den bara pep. 😳 |
| 1:55 | skratt | bror | VA FAN?! Fick du igång den?? Jag försökt |
| 1:55 | paket |  | sms → ge |
| 1:55 | väntar | bror | Sälj den till Ali, han med affären vid tippen. Han köper gamla grejer. Han köpte min gamla mopedhjälm för 20 spänn. |
| 1:55 | väntar |  | (läget ändras) |
| 1:58 | klar | du | Klar! Ta ut den innan den ändrar sig. |
| 1:59 | sak |  | (läget ändras) |
| 1:59 | klar |  | (läget ändras) |
| 2:00 | händelse | printStart | sak=nyckelring |
| 2:01 | sak | du | En nyckelring till, så länge storebrors rulle räcker. |
| 2:01 | pil |  | En nyckelring till |
| 2:01 | notis | tanke | 💭 En nyckelring till, så länge storebrors rulle räcker. |
| 2:01 | röst | du | En nyckelring till, så länge storebrors rulle räcker. · MÅL |
| 2:05 | klar | du | En nyckelring till, så länge storebrors rulle räcker. |
| 2:11 | toast | guld | Nyckelring är klar – ta ut den |
| 2:11 | väntar | notis:Storebrors skrivare: Nyckelring är klar  | Storebrors skrivare: Nyckelring är klar – ta ut den |
| 2:11 | händelse | printKlar | sak=nyckelring n=2 |
| 2:11 | paket |  | tanke |
| 2:11 | tanke | du | Slut på storebrors rulle. Och här ligger ju plast överallt. Om jag bara kunde göra tråd av skräpet… Affären mitt emot kanske har något. |
| 2:11 | väntar | du | Slut på storebrors rulle. Och här ligger ju plast överallt. Om jag bara kunde göra tråd av skräpet… Affären mitt emot kanske har något. |
| 2:11 | händelse | malKlart | id=rullSlut del=Dag 1 – Kom igång nasta=saljTva |
| 2:11 | MÅL |  | Sälj nyckelringarna |
| 2:11 | sak | du | Slut på storebrors rulle. Och här ligger ju plast överallt. Om jag bara kunde göra tråd av skräpet… Affären mitt emot kanske har något. |
| 2:11 | kvitto-visas | du | Slut på storebrors rulle. Och här ligger ju plast överallt. Om jag bara kunde göra tråd av skräpet… Affären mitt emot kanske har något. |
| 2:11 | notis | tanke | 💭 Slut på storebrors rulle. Och här ligger ju plast överallt. Om jag bara kunde göra tråd av skräpet… Affären mitt emot kanske har något. |
| 2:11 | röst | du | Slut på storebrors rulle. Och här ligger ju plast överallt. Om jag bara kunde göra tråd av skräpet… Affären mitt emot kanske har något. · STORY |
| 2:15 | målruta |  | Sälj nyckelringarna |
| 2:15 | kvittens-bock |  | ✓ En nyckelring till |
| 2:23 | klar | du | Slut på storebrors rulle. Och här ligger ju plast överallt. Om jag bara kunde göra tråd av skräpet… Affären mitt emot kanske har något. |
| 2:23 | sak | du | (nytt mål i rutan) |
| 2:23 | pil |  | Sälj nyckelringarna |
| 2:23 | klar | du | (nytt mål i rutan) |
| 2:24 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 2:25 | struken | bror | VA FAN?! Fick du igång den?? Jag försökte i typ ett år. Den bara pep. 😳 |
| 2:25 | skratt | bror | VA FAN?! Fick du igång den?? Jag försökt |
| 2:25 | struken | notis:Storebrors skrivare: Nyckelring är klar  | Storebrors skrivare: Nyckelring är klar – ta ut den |
| 2:29 | röst | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. · STORY |
| 2:29 | butiksbubbla | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 2:31 | aliSalt | ali | 30 |
| 2:31 | butiksbubbla | ali | Pappas gamla köttkvarn. Den har malt allt utom kött. Trettio kronor, så är den din. |
| 2:32 | väntar | ali | Pappas gamla köttkvarn. Den har malt allt utom kött. Trettio kronor, så är den din. |
| 2:32 | händelse | malKlart | id=saljTva del=Dag 1 – Kom igång nasta=aliKvarn |
| 2:32 | väntar | du | Ali har en gammal kvarn. Den gör tråd av skräp. |
| 2:32 | MÅL |  | Köp kvarnen |
| 2:33 | struken | bror | Sälj den till Ali, han med affären vid tippen. Han köper gamla grejer. Han köpte min gamla mopedhjälm för 20 spänn. |
| 2:33 | sak | ali | Pappas gamla köttkvarn. Den har malt allt utom kött. Trettio kronor, så är den din. |
| 2:33 | röst | ali | Pappas gamla köttkvarn. Den har malt allt utom kött. Trettio kronor, så är den din. · STORY |
| 2:36 | kvittens-bock |  | ✓ Sälj nyckelringarna |
| 2:36 | målruta |  | Köp kvarnen |
| 2:40 | klar | ali | Pappas gamla köttkvarn. Den har malt allt utom kött. Trettio kronor, så är den din. |
| 2:42 | sak | du | Ali har en gammal kvarn. Den gör tråd av skräp. |
| 2:42 | pil |  | Köp kvarnen |
| 2:42 | notis | tanke | 💭 Ali har en gammal kvarn. Den gör tråd av skräp. |
| 2:42 | röst | du | Ali har en gammal kvarn. Den gör tråd av skräp. · MÅL |
| 2:46 | klar | du | Ali har en gammal kvarn. Den gör tråd av skräp. |
| 2:46 | händelse | kopt | sak=gammalkvarn |
| 2:46 | röst | ali | Och kommer du på nåt smart, så vet du var jag bor. · STORY |
| 2:46 | butiksbubbla | ali | Och kommer du på nåt smart, så vet du var jag bor. |
| 2:48 | händelse | malKlart | id=aliKvarn del=Dag 1 – Kom igång nasta=kvarn |
| 2:48 | väntar | du | Kvarnen ställer jag bredvid skrivaren, närmast skräpberget. Där finns skräpet. |
| 2:48 | målruta |  | Ställ kvarnen |
| 2:48 | MÅL |  | Ställ kvarnen |
| 2:49 | sak | du | Kvarnen ställer jag bredvid skrivaren, närmast skräpberget. Där finns skräpet. |
| 2:49 | pil |  | Ställ kvarnen |
| 2:49 | notis | tanke | 💭 Kvarnen ställer jag bredvid skrivaren, närmast skräpberget. Där finns skräpet. |
| 2:49 | röst | du | Kvarnen ställer jag bredvid skrivaren, närmast skräpberget. Där finns skräpet. · MÅL |
| 2:49 | väntar | foto | Första nyckelringen |
| 2:49 | paket |  | tanke |
| 2:49 | tanke | du | Någon köpte nåt jag gjort. Det här kan funka. |
| 2:49 | väntar | du | Någon köpte nåt jag gjort. Det här kan funka. |
| 2:52 | kvittens-bock |  | ✓ Köp kvarnen |
| 2:55 | klar | du | Kvarnen ställer jag bredvid skrivaren, närmast skräpberget. Där finns skräpet. |
| 3:03 | sak | foto | Första nyckelringen |
| 3:03 | foto | du | Första nyckelringen |
| 3:03 | händelse | placerat | sak=kvarnen |
| 3:03 | struken | kedja | kvarnStar |
| 3:03 | duns | du | ställs ner |
| 3:03 | händelse | malKlart | id=kvarn del=Dag 1 – Kom igång nasta=flaska |
| 3:03 | väntar | du | Skräp i kvarnen, sen vevar jag. Då blir det tråd. |
| 3:03 | MÅL |  | Gör egen tråd |
| 3:06 | klar | foto | Första nyckelringen |
| 3:07 | målruta |  | Gör egen tråd |
| 3:07 | kvittens-bock |  | ✓ Ställ kvarnen |
| 3:08 | sak | du | Skräp i kvarnen, sen vevar jag. Då blir det tråd. |
| 3:08 | pil |  | Gör egen tråd |
| 3:08 | notis | tanke | 💭 Skräp i kvarnen, sen vevar jag. Då blir det tråd. |
| 3:08 | röst | du | Skräp i kvarnen, sen vevar jag. Då blir det tråd. · MÅL |
| 3:08 | nick |  | nick:10 |
| 3:12 | klar | du | Skräp i kvarnen, sen vevar jag. Då blir det tråd. |
| 3:23 | väntar | info:bra | 3 st i tratten – veva nu! |
| 3:23 | sak | info:bra | 3 st i tratten – veva nu! |
| 3:23 | kvitto-visas | info:bra | 3 st i tratten – veva nu! |
| 3:23 | toast | bra | 3 st i tratten – veva nu! |
| 3:24 | händelse | malKlart | id=flaska del=Dag 1 – Kom igång nasta=egenPrint |
| 3:24 | struken | kedja | trad |
| 3:24 | väntar | du | Kvarnen funkar. Soptippen är en gruva. |
| 3:24 | väntar | du | Min egen tråd. Nu printar jag en nyckelring av den. |
| 3:24 | MÅL |  | Printa med egen tråd |
| 3:25 | klar | info:bra | 3 st i tratten – veva nu! |
| 3:25 | sak | du | Kvarnen funkar. Soptippen är en gruva. |
| 3:25 | kvitto-visas | du | Kvarnen funkar. Soptippen är en gruva. |
| 3:25 | lapp | 📔 Dagbok | Kvarnen funkar. Soptippen är en gruva. |
| 3:25 | meddelande | du | Kvarnen funkar. Soptippen är en gruva. |
| 3:25 | dagbokkort | du | Kvarnen funkar. Soptippen är en gruva. |
| 3:25 | röst | du | Dag 1. 21 dagar till jul. Kvarnen funkar. Soptippen är en gruva. · STORY |
| 3:32 | händelse | brevLast | id=malt |
| 3:32 | klar | du | Kvarnen funkar. Soptippen är en gruva. |
| 3:32 | målruta |  | Printa med egen tråd |
| 3:32 | sak | du | Min egen tråd. Nu printar jag en nyckelring av den. |
| 3:32 | pil |  | Printa med egen tråd |
| 3:32 | notis | tanke | 💭 Min egen tråd. Nu printar jag en nyckelring av den. |
| 3:32 | röst | du | Min egen tråd. Nu printar jag en nyckelring av den. · MÅL |
| 3:36 | klar | du | Min egen tråd. Nu printar jag en nyckelring av den. |
| 3:41 | händelse | printStart | sak=nyckelring |
| 3:41 | toast | bra | 🔗 Slangen kopplad |
| 3:46 | toast | guld | ✅ |
| 3:46 | händelse | printKlar | sak=nyckelring n=3 |
| 3:46 | händelse | malKlart | id=egenPrint del=Dag 1 – Kom igång nasta=salj |
| 3:46 | väntar | du | Affären på andra sidan vägen kanske köper sånt här. |
| 3:46 | MÅL |  | Sälj hos Ali |
| 3:46 | målruta |  | Sälj hos Ali |
| 3:46 | sak | du | Affären på andra sidan vägen kanske köper sånt här. |
| 3:46 | pil |  | Sälj hos Ali |
| 3:46 | notis | tanke | 💭 Affären på andra sidan vägen kanske köper sånt här. |
| 3:46 | röst | du | Affären på andra sidan vägen kanske köper sånt här. · MÅL |
| 3:47 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 3:47 | nick |  | nick:12 |
| 3:50 | kvittens-bock |  | ✓ Printa med egen tråd |
| 3:51 | klar | du | Affären på andra sidan vägen kanske köper sånt här. |
| 3:51 | väntar | kjelle | God morgon, det är Kjelle på Radio Tippen! Det har flyttat in någon i det gamla skjulet. Med en cykel och en skrivare. Spännande, Gunnar. |
| 3:51 | radio | kjelle | God morgon, det är Kjelle på Radio Tippen! Det har flyttat in någon i det gamla skjulet. Med en cykel och en skrivare. Spännande, Gunnar. |
| 3:51 | skratt | du | Radio-Kjelle |
| 3:54 | händelse | printStart | sak=nyckelring |
| 3:55 | tanke | du | Vem är Gunnar? |
| 3:55 | väntar | du | Vem är Gunnar? |
| 3:55 | toast | guld | ✅ |
| 3:55 | händelse | printKlar | sak=nyckelring n=4 |
| 3:56 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 3:58 | händelse | printStart | sak=nyckelring |
| 3:59 | toast | guld | ✅ |
| 3:59 | händelse | printKlar | sak=nyckelring n=5 |
| 3:59 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 3:59 | sak | du | Någon köpte nåt jag gjort. Det här kan funka. |
| 3:59 | notis | tanke | 💭 Någon köpte nåt jag gjort. Det här kan funka. |
| 3:59 | röst | du | Någon köpte nåt jag gjort. Det här kan funka. · STORY |
| 4:03 | klar | du | Någon köpte nåt jag gjort. Det här kan funka. |
| 4:12 | aliSalt | ali | 45 |
| 4:12 | röst | ali | Nyckelringar igen? Folk tappar sina nycklar hela tiden. Bra affär för oss. · STORY |
| 4:12 | butiksbubbla | ali | Nyckelringar igen? Folk tappar sina nycklar hela tiden. Bra affär för oss. |
| 4:13 | händelse | malKlart | id=salj del=Dag 1 – Kom igång nasta=powerbank |
| 4:13 | paket |  | sms → ge |
| 4:13 | väntar | ali | Ali här. Glömde en sak. Kom tillbaka, jag har nåt åt dig. |
| 4:13 | väntar |  | (läget ändras) |
| 4:13 | MÅL |  | Gå till Ali |
| 4:17 | kvittens-bock |  | ✓ Sälj hos Ali |
| 4:21 | väntar | du | Ali har något åt mig. Jag går över vägen till affären. |
| 4:21 | målruta |  | Gå till Ali |
| 4:22 | paket | ali | ali → ge |
| 4:22 | röst | ali | Ali här. Jag såg dig cykla. Det ser jobbigt ut. Testa koppla på den här. Bra kunder får bonus. · STORY |
| 4:22 | butiksbubbla | ali | Ali här. Jag såg dig cykla. Det ser jobbigt ut. Testa koppla på den här. Bra kunder får bonus. |
| 4:26 | sak | ali | Ali här. Glömde en sak. Kom tillbaka, jag har nåt åt dig. |
| 4:26 | sms | ali | Ali här. Glömde en sak. Kom tillbaka, jag har nåt åt dig. |
| 4:26 | sms-bubbla | ali | Ali här. Glömde en sak. Kom tillbaka, jag har nåt åt dig. |
| 4:26 | röst | ali | Ali här. Glömde en sak. Kom tillbaka, jag har nåt åt dig. · STORY |
| 4:31 | klar | ali | Ali här. Glömde en sak. Kom tillbaka, jag har nåt åt dig. |
| 4:33 | sak | du | Ali har något åt mig. Jag går över vägen till affären. |
| 4:33 | pil |  | Koppla in powerbanken |
| 4:33 | röst | du | Koppla in powerbanken. · MÅL |
| 4:35 | klar | du | Koppla in powerbanken. |
| 4:42 | skratt | du | powerbanken på cykeln |
| 4:42 | paket |  | tanke |
| 4:42 | tanke | du | Nu sparas lite ström. En nyckelring, typ. Framtiden är här, och den sitter fast med eltejp. |
| 4:42 | väntar | du | Nu sparas lite ström. En nyckelring, typ. Framtiden är här, och den sitter fast med eltejp. |
| 4:42 | monterat | du | byggsats:powerbank |
| 4:42 | händelse | monterat | sak=powerbank |
| 4:42 | sak | du | Nu sparas lite ström. En nyckelring, typ. Framtiden är här, och den sitter fast med eltejp. |
| 4:42 | kvitto-visas | du | Nu sparas lite ström. En nyckelring, typ. Framtiden är här, och den sitter fast med eltejp. |
| 4:42 | notis | tanke | 💭 Nu sparas lite ström. En nyckelring, typ. Framtiden är här, och den sitter fast med eltejp. |
| 4:42 | röst | du | Nu sparas lite ström. En nyckelring, typ. Framtiden är här, och den sitter fast med eltejp. · REAKTION |
| 4:42 | händelse | malKlart | id=powerbank del=Dag 1 – Kom igång nasta=kopGrip |
| 4:42 | paket |  | lapp |
| 4:42 | lapp-kö | 🧺 Ali | Ali här. Nyckelringen sålde. Jag ville bli ingenjör, men fick ta över pappas butik. I natt lät jag en AI rita en skräpgrip åt mig. Kom och titta. |
| 4:42 | väntar | ali | Ali här. Nyckelringen sålde. Jag ville bli ingenjör, men fick ta över pappas butik. I natt lät jag en AI rita en skräpgrip åt mig. Kom och titta. |
| 4:42 | struken | kedja | harRadGrip |
| 4:42 | struken | du | Vem är Gunnar? |
| 4:42 | väntar | du | Med en skräpgrip slipper jag böja mig. Ali har en ritning. |
| 4:42 | MÅL |  | Plocka skräp och mal det |
| 4:45 | målruta |  | Plocka skräp och mal det |
| 4:46 | kvittens-bock |  | ✓ Gå till Ali |
| 4:49 | klar | du | Nu sparas lite ström. En nyckelring, typ. Framtiden är här, och den sitter fast med eltejp. |
| 4:50 | sak | du | Med en skräpgrip slipper jag böja mig. Ali har en ritning. |
| 4:50 | pil |  | Plocka skräp och mal det |
| 4:50 | notis | tanke | 💭 Med en skräpgrip slipper jag böja mig. Ali har en ritning. |
| 4:50 | röst | du | Med en skräpgrip slipper jag böja mig. Ali har en ritning. · MÅL |
| 4:50 | nick |  | nick:14 |
| 4:55 | klar | du | Med en skräpgrip slipper jag böja mig. Ali har en ritning. |
| 4:58 | händelse | printStart | sak=nyckelring |
| 4:59 | toast | fel | Ingen ström – trampa cykeln |
| 4:59 | väntar | notis:Storebrors skrivare: Ingen ström – tramp | Storebrors skrivare: Ingen ström – trampa cykeln |
| 4:59 | toast | guld | ✅ |
| 4:59 | händelse | printKlar | sak=nyckelring n=6 |
| 5:00 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 5:02 | händelse | printStart | sak=nyckelring |
| 5:03 | sak | kjelle | God morgon, det är Kjelle på Radio Tippen! Det har flyttat in någon i det gamla skjulet. Med en cykel och en skrivare. Spännande, Gunnar. |
| 5:03 | notis |  | 📻 Radio Tippen: God morgon, det är Kjelle på Radio Tippen! Det har flyttat in någon i det gamla skjulet. Med en cykel och en skrivare. Spännande, Gunnar. |
| 5:03 | röst | kjelle | God morgon, det är Kjelle på Radio Tippen! Det har flyttat in någon i det gamla skjulet. Med en cykel och en skrivare. Spännande, Gunnar. · REAKTION |
| 5:03 | toast | guld | ✅ |
| 5:03 | händelse | printKlar | sak=nyckelring n=7 |
| 5:14 | klar | kjelle | God morgon, det är Kjelle på Radio Tippen! Det har flyttat in någon i det gamla skjulet. Med en cykel och en skrivare. Spännande, Gunnar. |
| 5:15 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 5:16 | struken | notis:Storebrors skrivare: Ingen ström – tramp | Storebrors skrivare: Ingen ström – trampa cykeln |
| 5:17 | händelse | printStart | sak=nyckelring |
| 5:18 | toast | guld | ✅ |
| 5:18 | händelse | printKlar | sak=nyckelring n=8 |
| 5:19 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 5:22 | sak | mamma | Hur kunde du bara gå? Är du ok? Svara när jag ringer! |
| 5:22 | sms | mamma | Hur kunde du bara gå? Är du ok? Svara när jag ringer! |
| 5:22 | sms-bubbla | mamma | Hur kunde du bara gå? Är du ok? Svara när jag ringer! |
| 5:22 | röst | mamma | Hur kunde du bara gå? Är du ok? Svara när jag ringer! · STORY |
| 5:27 | paket |  | ali → ge |
| 5:27 | väntar | ali | Du får bonus! 10 kr extra. Du ser hungrig ut. |
| 5:27 | väntar |  | (läget ändras) |
| 5:27 | aliSalt | ali | 15 |
| 5:27 | klar | mamma | Hur kunde du bara gå? Är du ok? Svara när jag ringer! |
| 5:27 | aliSalt | ali | 15 |
| 5:27 | aliSalt | ali | 15 |
| 5:29 | sak | ali | Du får bonus! 10 kr extra. Du ser hungrig ut. |
| 5:29 | notis |  | Ali: ”Du får bonus! 10 kr extra. Du ser hungrig ut.” |
| 5:29 | röst | ali | Du får bonus! 10 kr extra. Du ser hungrig ut. · REAKTION |
| 5:32 | klar | ali | Du får bonus! 10 kr extra. Du ser hungrig ut. |
| 5:34 | sak |  | (läget ändras) |
| 5:34 | klar |  | (läget ändras) |
| 5:41 | sak |  | (läget ändras) |
| 5:41 | klar |  | (läget ändras) |
| 5:41 | händelse | printStart | sak=nyckelring |
| 5:42 | toast | guld | ✅ |
| 5:42 | händelse | printKlar | sak=nyckelring n=9 |
| 5:52 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 5:54 | händelse | printStart | sak=nyckelring |
| 5:55 | toast | guld | ✅ |
| 5:55 | händelse | printKlar | sak=nyckelring n=10 |
| 5:56 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 5:58 | händelse | printStart | sak=nyckelring |
| 6:00 | toast | guld | ✅ |
| 6:00 | händelse | printKlar | sak=nyckelring n=11 |
| 6:00 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 6:07 | sak | ali | Ali här. Nyckelringen sålde. Jag ville bli ingenjör, men fick ta över pappas butik. I natt lät jag en AI rita en skräpgrip åt mig. Kom och titta. |
| 6:07 | sms | ali | Ali här. Nyckelringen sålde. Jag ville bli ingenjör, men fick ta över pappas butik. I natt lät jag en AI rita en skräpgrip åt mig. Kom och titta. |
| 6:07 | sms-bubbla | ali | Ali här. Nyckelringen sålde. Jag ville bli ingenjör, men fick ta över pappas butik. I natt lät jag en AI rita en skräpgrip åt mig. Kom och titta. |
| 6:07 | röst | ali | Ali här. Nyckelringen sålde. Jag ville bli ingenjör, men fick ta över pappas butik. I natt lät jag en AI rita en skräpgrip åt mig. Kom och titta. · STORY |
| 6:08 | aliSalt | ali | 15 |
| 6:08 | aliSalt | ali | 15 |
| 6:08 | aliSalt | ali | 15 |
| 6:19 | klar | ali | Ali här. Nyckelringen sålde. Jag ville bli ingenjör, men fick ta över pappas butik. I natt lät jag en AI rita en skräpgrip åt mig. Kom och titta. |
| 6:28 | händelse | printStart | sak=nyckelring |
| 6:29 | toast | guld | ✅ |
| 6:29 | händelse | printKlar | sak=nyckelring n=12 |
| 6:30 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 6:32 | händelse | printStart | sak=nyckelring |
| 6:33 | toast | guld | ✅ |
| 6:33 | händelse | printKlar | sak=nyckelring n=13 |
| 6:34 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 6:36 | händelse | printStart | sak=nyckelring |
| 6:37 | toast | guld | ✅ |
| 6:37 | händelse | printKlar | sak=nyckelring n=14 |
| 6:38 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 6:45 | aliSalt | ali | 15 |
| 6:45 | aliSalt | ali | 15 |
| 6:46 | aliSalt | ali | 15 |
| 6:50 | tanke | du | Gripen hos Ali. Femtio kronor. |
| 6:50 | väntar | du | Gripen hos Ali. Femtio kronor. |
| 6:50 | nick |  | paminn:14 |
| 6:51 | sak | du | Gripen hos Ali. Femtio kronor. |
| 6:51 | notis | tanke | 💭 Gripen hos Ali. Femtio kronor. |
| 6:51 | röst | du | Gripen hos Ali. Femtio kronor. · REAKTION |
| 6:53 | klar | du | Gripen hos Ali. Femtio kronor. |
| 6:54 | händelse | printStart | sak=nyckelring |
| 6:55 | toast | guld | ✅ |
| 6:55 | händelse | printKlar | sak=nyckelring n=15 |
| 6:56 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 6:58 | händelse | printStart | sak=nyckelring |
| 6:59 | toast | fel | Ingen ström – trampa cykeln |
| 7:00 | toast | guld | ✅ |
| 7:00 | händelse | printKlar | sak=nyckelring n=16 |
| 7:00 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 7:02 | händelse | printStart | sak=nyckelring |
| 7:03 | toast | guld | ✅ |
| 7:03 | händelse | printKlar | sak=nyckelring n=17 |
| 7:04 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 7:12 | aliSalt | ali | 15 |
| 7:12 | aliSalt | ali | 15 |
| 7:12 | aliSalt | ali | 15 |
| 7:21 | händelse | printStart | sak=nyckelring |
| 7:22 | toast | guld | ✅ |
| 7:22 | händelse | printKlar | sak=nyckelring n=18 |
| 7:23 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 7:25 | händelse | printStart | sak=nyckelring |
| 7:26 | toast | guld | ✅ |
| 7:26 | händelse | printKlar | sak=nyckelring n=19 |
| 7:27 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 7:29 | händelse | printStart | sak=nyckelring |
| 7:30 | toast | guld | ✅ |
| 7:30 | händelse | printKlar | sak=nyckelring n=20 |
| 7:44 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 7:52 | aliSalt | ali | 15 |
| 7:53 | aliSalt | ali | 15 |
| 7:53 | aliSalt | ali | 15 |
| 7:55 | upplåst | bara | grip |
| 7:55 | brott | RESERV | grip (bara 4 av 6) |
| 7:55 | händelse | upplast | id=grip flask=bara |
| 7:56 | väntar | bud | (tips) |
| 7:56 | sak | bud | (tips) |
| 7:56 | väntar | du | Jag har pengar nu. Hos Ali kan jag köpa uppgraderingar – bära mer eller printa snabbare. |
| 7:57 | klar | bud | (tips) |
| 7:59 | sak | du | Jag har pengar nu. Hos Ali kan jag köpa uppgraderingar – bära mer eller printa snabbare. |
| 7:59 | röst | du | Jag har pengar nu. Hos Ali kan jag köpa uppgraderingar – bära mer eller printa snabbare. · MÅL |
| 8:01 | händelse | printStart | sak=nyckelring |
| 8:02 | toast | fel | Ingen ström – trampa cykeln |
| 8:04 | toast | guld | ✅ |
| 8:04 | händelse | printKlar | sak=nyckelring n=21 |
| 8:04 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 8:06 | händelse | printStart | sak=nyckelring |
| 8:06 | klar | du | Jag har pengar nu. Hos Ali kan jag köpa uppgraderingar – bära mer eller printa snabbare. |
| 8:07 | toast | guld | ✅ |
| 8:07 | händelse | printKlar | sak=nyckelring n=22 |
| 8:20 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 8:22 | händelse | printStart | sak=nyckelring |
| 8:23 | toast | guld | ✅ |
| 8:23 | händelse | printKlar | sak=nyckelring n=23 |
| 8:24 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 8:32 | aliSalt | ali | 15 |
| 8:32 | aliSalt | ali | 15 |
| 8:32 | aliSalt | ali | 15 |
| 8:36 | toast | guld | 3D-modell köpt – printa skräpgrip på skrivaren |
| 8:36 | händelse | kopt | sak=grip |
| 8:36 | röst | ali | Bra val. 3D-modellen är din. Den räcker till en. · STORY |
| 8:36 | butiksbubbla | ali | Bra val. 3D-modellen är din. Den räcker till en. |
| 8:37 | händelse | malKlart | id=kopGrip del=Dag 1 – Kom igång nasta=printGrip |
| 8:37 | väntar | du | Min första 3D-modell! Nu ska den bara printas. Jag printar inte bara saker – jag printar maskiner. |
| 8:37 | MÅL |  | Printa skräpgripen |
| 8:38 | sak | du | Min första 3D-modell! Nu ska den bara printas. Jag printar inte bara saker – jag printar maskiner. |
| 8:38 | kvitto-visas | du | Min första 3D-modell! Nu ska den bara printas. Jag printar inte bara saker – jag printar maskiner. |
| 8:38 | lapp | 📔 Dagbok | Min första 3D-modell! Nu ska den bara printas. Jag printar inte bara saker – jag printar maskiner. |
| 8:38 | meddelande | du | Min första 3D-modell! Nu ska den bara printas. Jag printar inte bara saker – jag printar maskiner. |
| 8:38 | dagbokkort | du | Min första 3D-modell! Nu ska den bara printas. Jag printar inte bara saker – jag printar maskiner. |
| 8:38 | röst | du | Dag 1. 21 dagar till jul. Min första 3D-modell! Nu ska den bara printas. Jag printar inte bara saker – jag printar maskiner. · STORY |
| 8:49 | händelse | brevLast | id=ritning |
| 8:49 | klar | du | Min första 3D-modell! Nu ska den bara printas. Jag printar inte bara saker – jag printar maskiner. |
| 8:49 | målruta |  | Printa skräpgripen |
| 8:49 | sak | du | (nytt mål i rutan) |
| 8:49 | pil |  | Printa skräpgripen |
| 8:49 | klar | du | (nytt mål i rutan) |
| 8:49 | nick |  | nick:15 |
| 8:58 | händelse | printStart | sak=byggsats:grip |
| 9:00 | händelse | printKlar | sak=byggsats:grip n=1 |
| 9:00 | toast | guld | ✅ |
| 9:15 | väntar | info:guld | Klicka för att ta på dig skräpgrip |
| 9:15 | händelse | tagitUrPrint | sak=byggsats:grip n=1 |
| 9:15 | paket |  | sms |
| 9:15 | väntar | ali | Ali här. Jag såg Skräpgrip på avstånd. Ett streck blev lite snett. Mitt fel. Vackert ändå. |
| 9:15 | struken | kedja | grip |
| 9:15 | sak | info:guld | Klicka för att ta på dig skräpgrip |
| 9:15 | kvitto-visas | info:guld | Klicka för att ta på dig skräpgrip |
| 9:15 | toast | guld | Klicka för att ta på dig skräpgrip |
| 9:17 | klar | info:guld | Klicka för att ta på dig skräpgrip |
| 9:19 | väntar | info:guld | 🦾 Skräpgripen sitter! Bär 6, lättare att sikta, plockar när du går nära. |
| 9:19 | tog på | du | byggsats:grip |
| 9:19 | händelse | monterat | sak=grip |
| 9:19 | sak | info:guld | 🦾 Skräpgripen sitter! Bär 6, lättare att sikta, plockar när du går nära. |
| 9:19 | kvitto-visas | info:guld | 🦾 Skräpgripen sitter! Bär 6, lättare att sikta, plockar när du går nära. |
| 9:19 | toast | guld | 🦾 Skräpgripen sitter! Bär 6, lättare att sikta, plockar när du går nära. |
| 9:19 | händelse | malKlart | id=printGrip del=Dag 1 – Kom igång nasta=krukaD1 |
| 9:19 | väntar | du | Ali vill ha krukor. Jag printar en blomkruka. |
| 9:19 | MÅL |  | Printa och sälj nyckelringar |
| 9:19 | upplåst | inkomst | kruka |
| 9:19 | brott | UPPLÅST | kruka (inkomst 23 av 6) |
| 9:19 | händelse | upplast | id=kruka flask=inkomst |
| 9:19 | paket |  | tanke → sms |
| 9:19 | tanke | du | Nyckelringar, nyckelringar. Ali kan inte vilja ha fler. |
| 9:19 | väntar | du | Nyckelringar, nyckelringar. Ali kan inte vilja ha fler. |
| 9:19 | väntar | ali | Prova en kruka. Folk köper krukor. Ingen vet varför. |
| 9:19 | skratt | ali | Prova en kruka. Folk köper krukor. Ingen |
| 9:21 | klar | info:guld | 🦾 Skräpgripen sitter! Bär 6, lättare att sikta, plockar när du går nära. |
| 9:22 | målruta |  | Köp krukreceptet |
| 9:23 | kvittens-bock |  | ✓ Printa skräpgripen |
| 9:23 | sak | du | Ali vill ha krukor. Jag printar en blomkruka. |
| 9:23 | pil |  | Köp krukreceptet |
| 9:23 | notis | tanke | 💭 Ali vill ha krukor. Jag printar en blomkruka. |
| 9:23 | röst | du | Ali vill ha krukor. Jag printar en blomkruka. · MÅL |
| 9:27 | klar | du | Ali vill ha krukor. Jag printar en blomkruka. |
| 9:27 | händelse | kopt | sak=kruka |
| 9:27 | röst | ali | Bra val. Folk köper sånt. Jag vet inte varför. · STORY |
| 9:27 | butiksbubbla | ali | Blomkruka? Bra val. Folk köper sånt. Jag vet inte varför. |
| 9:36 | händelse | printStart | sak=kruka |
| 9:38 | sak | ali | Ali här. Jag såg Skräpgrip på avstånd. Ett streck blev lite snett. Mitt fel. Vackert ändå. |
| 9:38 | sms | ali | Ali här. Jag såg Skräpgrip på avstånd. Ett streck blev lite snett. Mitt fel. Vackert ändå. |
| 9:38 | sms-bubbla | ali | Ali här. Jag såg Skräpgrip på avstånd. Ett streck blev lite snett. Mitt fel. Vackert ändå. |
| 9:38 | röst | ali | Ali här. Jag såg Skräpgrip på avstånd. Ett streck blev lite snett. Mitt fel. Vackert ändå. · REAKTION |
| 9:39 | toast | guld | ✅ |
| 9:39 | händelse | printKlar | sak=kruka n=1 |
| 9:39 | kvittens | du | En kruka. Mamma skulle bli så stolt. Hon får inte veta. |
| 9:39 | väntar | du | En kruka. Mamma skulle bli så stolt. Hon får inte veta. |
| 9:39 | händelse | malKlart | id=krukaD1 del=Dag 1 – Kom igång nasta=saljKruka |
| 9:39 | väntar | du | Ali gillar krukor. Han sa det själv. |
| 9:39 | MÅL |  | Sälj blomkrukan |
| 9:42 | målruta |  | Sälj blomkrukan |
| 9:46 | klar | ali | Ali här. Jag såg Skräpgrip på avstånd. Ett streck blev lite snett. Mitt fel. Vackert ändå. |
| 9:46 | sak | du | Ali gillar krukor. Han sa det själv. |
| 9:46 | pil |  | Sälj blomkrukan |
| 9:46 | notis | tanke | 💭 Ali gillar krukor. Han sa det själv. |
| 9:46 | röst | du | Ali gillar krukor. Han sa det själv. · MÅL |
| 9:49 | klar | du | Ali gillar krukor. Han sa det själv. |
| 9:49 | sak | du | En kruka. Mamma skulle bli så stolt. Hon får inte veta. |
| 9:49 | notis | tanke | 💭 En kruka. Mamma skulle bli så stolt. Hon får inte veta. |
| 9:49 | röst | du | En kruka. Mamma skulle bli så stolt. Hon får inte veta. · STORY |
| 9:53 | klar | du | En kruka. Mamma skulle bli så stolt. Hon får inte veta. |
| 9:58 | händelse | tagitUrPrint | sak=kruka n=1 |
| 10:01 | sak | du | Nyckelringar, nyckelringar. Ali kan inte vilja ha fler. |
| 10:01 | notis | tanke | 💭 Nyckelringar, nyckelringar. Ali kan inte vilja ha fler. |
| 10:01 | röst | du | Nyckelringar, nyckelringar. Ali kan inte vilja ha fler. · STORY |
| 10:06 | klar | du | Nyckelringar, nyckelringar. Ali kan inte vilja ha fler. |
| 10:06 | aliSalt | ali | 70 |
| 10:08 | händelse | malKlart | id=saljKruka del=Dag 1 – Kom igång nasta=kopSang |
| 10:08 | struken | kedja | morkt |
| 10:08 | väntar | du | Jag kan inte sova på betongen en natt till. Ali har en säng. Typ. |
| 10:08 | målruta |  | Köp sängen |
| 10:08 | MÅL |  | Köp sängen |
| 10:08 | sak | du | Jag kan inte sova på betongen en natt till. Ali har en säng. Typ. |
| 10:08 | pil |  | Köp sängen |
| 10:08 | notis | tanke | 💭 Jag kan inte sova på betongen en natt till. Ali har en säng. Typ. |
| 10:08 | röst | du | Jag kan inte sova på betongen en natt till. Ali har en säng. Typ. · MÅL |
| 10:12 | kvittens-bock |  | ✓ Sälj blomkrukan |
| 10:13 | klar | du | Jag kan inte sova på betongen en natt till. Ali har en säng. Typ. |
| 10:17 | händelse | kopt | sak=sang |
| 10:17 | röst | ali | Sov gott, min vän. · STORY |
| 10:17 | butiksbubbla | ali | Sov gott, min vän. |
| 10:18 | händelse | malKlart | id=kopSang del=Dag 1 – Kom igång nasta=printSang |
| 10:18 | väntar | du | Sängen tar lång tid. Den är värd det. |
| 10:18 | målruta |  | Printa sängen |
| 10:18 | MÅL |  | Printa sängen |
| 10:19 | sak | du | Sängen tar lång tid. Den är värd det. |
| 10:19 | pil |  | Printa sängen |
| 10:19 | notis | tanke | 💭 Sängen tar lång tid. Den är värd det. |
| 10:19 | röst | du | Sängen tar lång tid. Den är värd det. · MÅL |
| 10:19 | nick |  | nick:19 |
| 10:22 | klar | du | Sängen tar lång tid. Den är värd det. |
| 10:22 | kvittens-bock |  | ✓ Köp sängen |
| 10:30 | händelse | printStart | sak=sang |
| 10:31 | sak | ali | Prova en kruka. Folk köper krukor. Ingen vet varför. |
| 10:31 | skratt | ali | Prova en kruka. Folk köper krukor. Ingen |
| 10:31 | sms | ali | Prova en kruka. Folk köper krukor. Ingen vet varför. |
| 10:31 | skratt | ali | Prova en kruka. Folk köper krukor. Ingen |
| 10:31 | sms-bubbla | ali | Prova en kruka. Folk köper krukor. Ingen vet varför. |
| 10:31 | skratt | ali | Prova en kruka. Folk köper krukor. Ingen |
| 10:31 | röst | ali | Prova en kruka. Folk köper krukor. Ingen vet varför. · STORY |
| 10:34 | toast | fel | Ingen ström – trampa cykeln |
| 10:35 | klar | ali | Prova en kruka. Folk köper krukor. Ingen vet varför. |
| 10:35 | skratt | ali | Prova en kruka. Folk köper krukor. Ingen |
| 10:36 | toast | fel | Slut på tråd – mal mer så fortsätter den |
| 10:36 | väntar | notis:Storebrors skrivare: Slut på tråd – mal  | Storebrors skrivare: Slut på tråd – mal mer så fortsätter den |
| 10:59 | toast | guld | ✅ |
| 10:59 | händelse | printKlar | sak=sang n=1 |
| 11:02 | händelse | tagitUrPrint | sak=sang n=1 |
| 11:02 | struken | kedja | sang |
| 11:02 | händelse | malKlart | id=printSang del=Dag 1 – Kom igång nasta=sov1 |
| 11:02 | paket |  | lapp |
| 11:02 | lapp | 📔 Dagbok | Dag 1. Nitton år. Inget mer tjat. En skrivare, ett skjul och en säng. Det räcker för i natt. Gården är full av skräp. I morgon. |
| 11:02 | meddelande | du | Dag 1. Nitton år. Inget mer tjat. En skrivare, ett skjul och en säng. Det räcker för i natt. Gården är full av skräp. I morgon. |
| 11:02 | dagbokkort | du | Dag 1. Nitton år. Inget mer tjat. En skrivare, ett skjul och en säng. Det räcker för i natt. Gården är full av skräp. I morgon. |
| 11:02 | väntar | du | Sängen ska in i skjulet. Sen sover jag. |
| 11:02 | målruta |  | Sängen i skjulet |
| 11:02 | MÅL |  | Sängen i skjulet |
| 11:02 | röst | du | Dag 1. 21 dagar till jul. Nitton år. Inget mer tjat. En skrivare, ett skjul och en säng. Det räcker för i natt. Gården är full av skräp. I morgon. · STORY |
| 11:14 | händelse | brevLast | id=start |
| 11:16 | sak | du | Sängen ska in i skjulet. Sen sover jag. |
| 11:16 | pil |  | Sängen i skjulet |
| 11:16 | notis | tanke | 💭 Sängen ska in i skjulet. Sen sover jag. |
| 11:16 | röst | du | Sängen ska in i skjulet. Sen sover jag. · MÅL |
| 11:19 | klar | du | Sängen ska in i skjulet. Sen sover jag. |
| 11:21 | struken | notis:Storebrors skrivare: Slut på tråd – mal  | Storebrors skrivare: Slut på tråd – mal mer så fortsätter den |

<details><summary>Botens handlingar dag 1</summary>

- 0:12 gå till brädhögen (3 m) (5 kr)
- 0:27 popup: "FORTSÄTT" (5 kr)
- 0:32 gå till cykeln vid vägen (2 m) (5 kr)
- 0:48 gå till rutan i linje 1 (13 m) (5 kr)
- 1:34 gå till cykeln (lyfter den) (13 m) (5 kr)
- 1:45 gå till cykelns plats (11 m) (5 kr)
- 1:48 gå till skrivaren (2 m) (5 kr)
- 1:49 printar Nyckelring (5 kr)
- 1:56 tar ut 1 st ur skrivaren (5 kr)
- 2:00 printar Nyckelring (sista av storebrors rulle) (5 kr)
- 2:24 tar ut 1 st ur skrivaren (5 kr)
- 2:29 gå till Ali (26 m) (5 kr)
- 2:29 öppnar Alis butik – sälja de två nyckelringarna (5 kr)
- 2:32 säljer hos Ali: +30 kr (35 kr)
- 2:45 öppnar Alis butik – köpa kvarnen (35 kr)
- 2:47 köper gammalkvarn för 30 kr (5 kr)
- 2:48 köpte kvarnen (5 kr)
- 3:03 gå till kvarnens ruta (28 m) (5 kr)
- 3:20 plockar 3 skräp på gården (bär max 3) (5 kr)
- 3:23 gå till kvarnen (13 m) (5 kr)
- 3:32 popup: "FORTSÄTT" (5 kr)
- 3:39 gå till cykeln (2 m) (5 kr)
- 3:41 printar Nyckelring (5 kr)
- 3:47 tar ut 1 st ur skrivaren (5 kr)
- 3:54 printar Nyckelring (5 kr)
- 3:56 tar ut 1 st ur skrivaren (5 kr)
- 3:58 printar Nyckelring (5 kr)
- 3:59 tar ut 1 st ur skrivaren (5 kr)
- 4:10 gå till Ali (27 m) (5 kr)
- 4:10 öppnar Alis butik – sälja nyckelringar (5 kr)
- 4:13 säljer hos Ali: +45 kr (50 kr)
- 4:22 öppnar Alis butik – Ali (powerbanken) (50 kr)
- 4:42 gå till koppla powerbanken till cykeln (24 m) (50 kr)
- 4:55 tjänar pengar till väntar på flaskhalsen för grip: 50/90 kr → printar nyckelring (15 kr) (50 kr)
- 4:56 gå till skrivaren (2 m) (50 kr)
- 4:58 printar Nyckelring (50 kr)
- 5:00 tar ut 1 st ur skrivaren (50 kr)
- 5:02 printar Nyckelring (50 kr)
- 5:08 plockar 3 skräp på gården (bär max 3) (50 kr)
- 5:12 gå till kvarnen (18 m) (50 kr)
- 5:15 gå till skrivaren (1 m) (50 kr)
- 5:15 tar ut 1 st ur skrivaren (50 kr)
- 5:17 printar Nyckelring (50 kr)
- 5:19 tar ut 1 st ur skrivaren (50 kr)
- 5:25 gå till Ali (28 m) (50 kr)
- 5:25 öppnar Alis butik – sälja (50 kr)
- 5:27 säljer hos Ali: +45 kr (95 kr)
- 5:35 tjänar pengar till väntar på flaskhalsen för grip: 105/145 kr → printar nyckelring (15 kr) (105 kr)
- 5:40 gå till skrivaren (25 m) (105 kr)
- 5:41 printar Nyckelring (105 kr)
- 5:47 plockar 3 skräp på gården (bär max 3) (105 kr)
- 5:50 gå till kvarnen (11 m) (105 kr)
- 5:52 gå till skrivaren (2 m) (105 kr)
- 5:52 tar ut 1 st ur skrivaren (105 kr)
- 5:54 printar Nyckelring (105 kr)
- 5:56 tar ut 1 st ur skrivaren (105 kr)
- 5:58 printar Nyckelring (105 kr)
- 5:59 gå till cykeln (2 m) (105 kr)
- 6:01 tar ut 1 st ur skrivaren (105 kr)
- 6:06 gå till Ali (26 m) (105 kr)
- 6:06 öppnar Alis butik – sälja (105 kr)
- 6:08 säljer hos Ali: +45 kr (150 kr)
- 6:21 tjänar pengar till väntar på flaskhalsen för grip: 150/190 kr → printar nyckelring (15 kr) (150 kr)
- 6:26 gå till skrivaren (25 m) (150 kr)
- 6:28 printar Nyckelring (150 kr)
- 6:30 tar ut 1 st ur skrivaren (150 kr)
- 6:32 printar Nyckelring (150 kr)
- 6:34 tar ut 1 st ur skrivaren (150 kr)
- 6:36 printar Nyckelring (150 kr)
- 6:38 tar ut 1 st ur skrivaren (150 kr)
- 6:44 gå till Ali (25 m) (150 kr)
- 6:44 öppnar Alis butik – sälja (150 kr)
- 6:46 säljer hos Ali: +45 kr (195 kr)
- 6:48 tjänar pengar till väntar på flaskhalsen för grip: 195/235 kr → printar nyckelring (15 kr) (195 kr)
- 6:53 gå till skrivaren (25 m) (195 kr)
- 6:54 printar Nyckelring (195 kr)
- 6:57 tar ut 1 st ur skrivaren (195 kr)
- 6:58 printar Nyckelring (195 kr)
- 6:59 gå till cykeln (1 m) (195 kr)
- 7:01 tar ut 1 st ur skrivaren (195 kr)
- 7:02 printar Nyckelring (195 kr)
- 7:05 tar ut 1 st ur skrivaren (195 kr)
- 7:10 gå till Ali (25 m) (195 kr)
- 7:10 öppnar Alis butik – sälja (195 kr)
- 7:12 säljer hos Ali: +45 kr (240 kr)
- 7:14 tjänar pengar till väntar på flaskhalsen för grip: 240/280 kr → printar nyckelring (15 kr) (240 kr)
- 7:19 gå till skrivaren (25 m) (240 kr)
- 7:21 printar Nyckelring (240 kr)
- 7:23 tar ut 1 st ur skrivaren (240 kr)
- 7:25 printar Nyckelring (240 kr)
- 7:27 tar ut 1 st ur skrivaren (240 kr)
- 7:29 printar Nyckelring (240 kr)
- 7:36 plockar 3 skräp på gården (bär max 3) (240 kr)
- 7:40 gå till kvarnen (19 m) (240 kr)
- 7:44 gå till skrivaren (2 m) (240 kr)
- 7:45 tar ut 1 st ur skrivaren (240 kr)
- 7:51 gå till Ali (28 m) (240 kr)
- 7:51 öppnar Alis butik – sälja (240 kr)
- 7:53 säljer hos Ali: +45 kr (285 kr)
- 7:55 tjänar pengar till väntar på flaskhalsen för grip: 285/325 kr → printar nyckelring (15 kr) (285 kr)
- 8:00 gå till skrivaren (25 m) (285 kr)
- 8:01 printar Nyckelring (285 kr)
- 8:03 gå till cykeln (1 m) (285 kr)
- 8:04 tar ut 1 st ur skrivaren (285 kr)
- 8:06 printar Nyckelring (285 kr)
- 8:13 plockar 3 skräp på gården (bär max 3) (285 kr)
- 8:18 gå till kvarnen (24 m) (285 kr)
- 8:20 gå till skrivaren (1 m) (285 kr)
- 8:21 tar ut 1 st ur skrivaren (285 kr)
- 8:22 printar Nyckelring (285 kr)
- 8:25 tar ut 1 st ur skrivaren (285 kr)
- 8:30 gå till Ali (28 m) (285 kr)
- 8:30 öppnar Alis butik – sälja (285 kr)
- 8:33 säljer hos Ali: +45 kr (330 kr)
- 8:34 öppnar Alis butik – köpa skräpgrip (330 kr)
- 8:37 köper grip för 50 kr (280 kr)
- 8:49 popup: "FORTSÄTT" (280 kr)
- 8:56 gå till skrivaren (25 m) (280 kr)
- 8:58 printar Skräpgrip (280 kr)
- 9:06 plockar 3 skräp på gården (bär max 3) (280 kr)
- 9:12 gå till kvarnen (26 m) (280 kr)
- 9:15 gå till skrivaren (1 m) (280 kr)
- 9:15 tar ut 1 st ur skrivaren (280 kr)
- 9:19 tar på grip (280 kr)
- 9:25 gå till Ali (28 m) (280 kr)
- 9:25 öppnar Alis butik – köpa receptet blomkruka (280 kr)
- 9:28 köper kruka för 40 kr (240 kr)
- 9:35 gå till skrivaren (25 m) (240 kr)
- 9:36 printar Blomkruka (240 kr)
- 9:36 gå till cykeln (1 m) (240 kr)
- 9:50 plockar 6 skräp på gården (bär max 6) (240 kr)
- 9:56 gå till kvarnen (29 m) (240 kr)
- 9:58 gå till skrivaren (2 m) (240 kr)
- 9:59 tar ut 1 st ur skrivaren (240 kr)
- 10:05 gå till Ali (28 m) (240 kr)
- 10:05 öppnar Alis butik – sälja krukan (240 kr)
- 10:07 säljer hos Ali: +70 kr (310 kr)
- 10:16 öppnar Alis butik – köpa sängen (310 kr)
- 10:18 köper sang för 60 kr (250 kr)
- 10:29 gå till skrivaren (25 m) (250 kr)
- 10:30 printar Säng (250 kr)
- 10:35 gå till cykeln (1 m) (250 kr)
- 10:49 plockar 6 skräp på gården (bär max 6) (250 kr)
- 10:57 gå till kvarnen (37 m) (250 kr)
- 11:02 gå till skrivaren (2 m) (250 kr)
- 11:14 popup: "FORTSÄTT" (250 kr)
- 11:14 tar ut 1 st ur skrivaren (250 kr)
- 11:25 gå till sängplatsen i skjulet (21 m) (250 kr)

</details>

## Dag 2

| Tid | Källa | Vem | Text |
|---|---|---|---|
| 11:28 | vara | ali | kruka |
| 11:28 | händelse | malKlart | id=sov1 del=Dag 1 – Kom igång nasta=kopMotor |
| 11:28 | MÅL |  | Mal skräp, printa och sälj |
| 11:29 | sopsack | rolf | Sopsäckarna landade på gården |
| 11:29 | paket |  | tanke → ge |
| 11:29 | tanke | du | Hmm, vad kastade gubben ut ur sopbilen? Jag går och kollar. |
| 11:29 | väntar | du | Hmm, vad kastade gubben ut ur sopbilen? Jag går och kollar. |
| 11:29 | väntar |  | (läget ändras) |
| 0:01 | händelse | dagenBorjar | dag=2 |
| 0:01 | meddelande | du | Dag 2. 20 dagar till jul. Utan dörr blåser natten rakt in. |
| 0:01 | dagbokkort | du | Tippen bredvid · Dag 2. 20 dagar till jul. Utan dörr blåser natten rakt in. |
| 0:01 | röst | du | Dag 2. 20 dagar till jul. Tippen bredvid. Utan dörr blåser natten rakt in. · STORY |
| 0:08 | notis | nytt | Ali vill ha idag: Blomkruka – +50 % hela dagen (105 kr just nu)📈 Igår: 0 printat · 24 sålt |
| 0:08 | händelse | morgonkortStangt | dag=2 |
| 0:08 | paket |  | lapp |
| 0:08 | lapp | 📔 Dagbok | Första natten i en riktig säng. Jag printade den själv. |
| 0:08 | meddelande | du | Första natten i en riktig säng. Jag printade den själv. |
| 0:08 | dagbokkort | du | Första natten i en riktig säng. Jag printade den själv. |
| 0:08 | paket |  | tanke |
| 0:08 | tanke | du | Grön jul igen. Typiskt. |
| 0:08 | väntar | du | Grön jul igen. Typiskt. |
| 0:08 | röst | du | Dag 2. 20 dagar till jul. Första natten i en riktig säng. Jag printade den själv. · STORY |
| 0:16 | händelse | brevLast | id=sang |
| 0:16 | struken | du | Grön jul igen. Typiskt. |
| 0:16 | väntar | du | Vevandet tar på armarna. Ali har en motor till kvarnen. |
| 0:16 | målruta |  | Mal skräp, printa och sälj |
| 0:17 | sak | du | Vevandet tar på armarna. Ali har en motor till kvarnen. |
| 0:17 | pil |  | Mal skräp, printa och sälj |
| 0:17 | notis | tanke | 💭 Vevandet tar på armarna. Ali har en motor till kvarnen. |
| 0:17 | röst | du | Vevandet tar på armarna. Ali har en motor till kvarnen. · MÅL |
| 0:22 | klar | du | Vevandet tar på armarna. Ali har en motor till kvarnen. |
| 0:30 | händelse | printStart | sak=kruka |
| 0:32 | toast | guld | ✅ |
| 0:32 | händelse | printKlar | sak=kruka n=2 |
| 0:33 | händelse | tagitUrPrint | sak=kruka n=1 |
| 0:37 | väntar | ali | Hallå! Jag har nya skruvar. Samma gamla, men nya. |
| 0:38 | väntar | ali | Ali här. Såg skylten. Stavningen är rätt. Det är mer än många. |
| 0:38 | röst | ali | Köp nåt eller gå, min vän. Mina fötter värker. · STORY |
| 0:38 | butiksbubbla | ali | Köp nåt eller gå, min vän. Mina fötter värker. |
| 0:40 | aliSalt | ali | 105 |
| 0:40 | butiksbubbla | ali | Precis vad jag ville ha idag. 105 kr – med extra. |
| 0:41 | väntar | ali | Precis det jag ville ha idag, min vän. |
| 0:41 | sak | ali | Precis det jag ville ha idag, min vän. |
| 0:41 | röst | ali | Precis det jag ville ha idag, min vän. · STORY |
| 0:42 | väntar | foto | Egen säng |
| 0:42 | paket |  | tanke |
| 0:42 | tanke | du | Tänk att jag ska få sova i min egen säng. |
| 0:42 | väntar | du | Tänk att jag ska få sova i min egen säng. |
| 0:44 | klar | ali | Precis det jag ville ha idag, min vän. |
| 0:53 | händelse | printStart | sak=kruka |
| 0:54 | toast | fel | Ingen ström – trampa cykeln |
| 0:56 | toast | guld | ✅ |
| 0:56 | händelse | printKlar | sak=kruka n=3 |
| 0:57 | händelse | tagitUrPrint | sak=kruka n=1 |
| 0:57 | skratt | du | falsk tuta |
| 1:04 | aliSalt | ali | 105 |
| 1:12 | lapp | 📔 Dagbok | Sopbilen tippade en ny last. Allt det skräpet – och grinden är låst. |
| 1:12 | meddelande | du | Sopbilen tippade en ny last. Allt det skräpet – och grinden är låst. |
| 1:12 | dagbokkort | du | Sopbilen tippade en ny last. Allt det skräpet – och grinden är låst. |
| 1:12 | röst | du | Dag 2. 20 dagar till jul. Sopbilen tippade en ny last. Allt det skräpet – och grinden är låst. · STORY |
| 1:21 | händelse | brevLast | id=sopbil |
| 1:31 | sak | du | Hmm, vad kastade gubben ut ur sopbilen? Jag går och kollar. |
| 1:31 | notis | tanke | 💭 Hmm, vad kastade gubben ut ur sopbilen? Jag går och kollar. |
| 1:31 | röst | du | Hmm, vad kastade gubben ut ur sopbilen? Jag går och kollar. · STORY |
| 1:36 | klar | du | Hmm, vad kastade gubben ut ur sopbilen? Jag går och kollar. |
| 1:36 | händelse | printStart | sak=kruka |
| 1:38 | toast | guld | ✅ |
| 1:38 | händelse | printKlar | sak=kruka n=4 |
| 1:39 | händelse | tagitUrPrint | sak=kruka n=1 |
| 1:44 | sak |  | (läget ändras) |
| 1:44 | klar |  | (läget ändras) |
| 1:47 | aliSalt | ali | 105 |
| 1:52 | sak | foto | Egen säng |
| 1:52 | foto | du | Egen säng |
| 1:55 | klar | foto | Egen säng |
| 1:55 | händelse | printStart | sak=kruka |
| 1:57 | toast | fel | Ingen ström – trampa cykeln |
| 1:57 | väntar | notis:Storebrors skrivare: Ingen ström – tramp | Storebrors skrivare: Ingen ström – trampa cykeln |
| 1:59 | toast | guld | ✅ |
| 1:59 | händelse | printKlar | sak=kruka n=5 |
| 2:00 | händelse | tagitUrPrint | sak=kruka n=1 |
| 2:03 | sak | du | Tänk att jag ska få sova i min egen säng. |
| 2:03 | notis | tanke | 💭 Tänk att jag ska få sova i min egen säng. |
| 2:03 | röst | du | Tänk att jag ska få sova i min egen säng. · STORY |
| 2:06 | klar | du | Tänk att jag ska få sova i min egen säng. |
| 2:07 | aliSalt | ali | 105 |
| 2:08 | väntar | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått generator. Vi tar en låt på det. Den här är till dig, Gunnar. |
| 2:08 | radio | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått generator. Vi tar en låt på det. Den här är till dig, Gunnar. |
| 2:08 | skratt | du | Radio-Kjelle |
| 2:26 | paket |  | tanke |
| 2:26 | tanke | du | Jaha. En kalsong. Använd. |
| 2:26 | väntar | du | Jaha. En kalsong. Använd. |
| 2:26 | skratt | du | kvarnen spottar |
| 2:30 | händelse | printStart | sak=kruka |
| 2:33 | toast | guld | ✅ |
| 2:33 | händelse | printKlar | sak=kruka n=6 |
| 2:33 | händelse | tagitUrPrint | sak=kruka n=1 |
| 2:41 | aliSalt | ali | 105 |
| 2:50 | händelse | printStart | sak=kruka |
| 2:53 | toast | guld | ✅ |
| 2:53 | händelse | printKlar | sak=kruka n=7 |
| 2:54 | händelse | tagitUrPrint | sak=kruka n=1 |
| 3:01 | aliSalt | ali | 105 |
| 3:06 | väntar | mamma | Har du frusit än? |
| 3:15 | sak | notis:Storebrors skrivare: Ingen ström – tramp | Storebrors skrivare: Ingen ström – trampa cykeln |
| 3:15 | notis | fel | Storebrors skrivare: Ingen ström – trampa cykeln |
| 3:18 | klar | notis:Storebrors skrivare: Ingen ström – tramp | Storebrors skrivare: Ingen ström – trampa cykeln |
| 3:23 | skratt | du | falsk tuta |
| 3:23 | väntar | värld:TUUT TUUT! | TUUT TUUT! |
| 3:26 | händelse | printStart | sak=kruka |
| 3:27 | sak | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått generator. Vi tar en låt på det. Den här är till dig, Gunnar. |
| 3:27 | notis |  | 📻 Radio Tippen: Radio Tippen, Kjelle här. Skjulet vid tippen har fått generator. Vi tar en låt på det. Den här är till dig, Gunnar. |
| 3:27 | röst | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått generator. Vi tar en låt på det. Den här är till dig, Gunnar. · REAKTION |
| 3:28 | toast | guld | ✅ |
| 3:28 | händelse | printKlar | sak=kruka n=8 |
| 3:29 | händelse | tagitUrPrint | sak=kruka n=1 |
| 3:34 | upplåst | mala | kvarnmotor |
| 3:34 | brott | RESERV | kvarnmotor (mala 20 av 10) |
| 3:34 | händelse | upplast | id=kvarnmotor flask=mala |
| 3:34 | paket |  | sms |
| 3:34 | väntar | ali | Ali här. En motor? Jag har en. Från en gammal tvättmaskin. Den centrifugerar fortfarande om man ber snällt. |
| 3:37 | aliSalt | ali | 105 |
| 3:37 | klar | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått generator. Vi tar en låt på det. Den här är till dig, Gunnar. |
| 3:41 | toast | guld | 3D-modell köpt – printa kvarnmotor på skrivaren |
| 3:41 | händelse | kopt | sak=kvarnmotor |
| 3:41 | struken | ali | Ali här. En motor? Jag har en. Från en gammal tvättmaskin. Den centrifugerar fortfarande om man ber snällt. |
| 3:42 | händelse | malKlart | id=kopMotor del=Dag 2 – Tippen bredvid nasta=monteraMotor |
| 3:42 | struken | kedja | motorKopt |
| 3:42 | väntar | du | Motorn ska sitta där veven sitter. Jag printar den först. |
| 3:42 | målruta |  | Printa kvarnmotorn till kvarnen |
| 3:42 | MÅL |  | Printa kvarnmotorn till kvarnen |
| 3:42 | sak | du | Motorn ska sitta där veven sitter. Jag printar den först. |
| 3:42 | pil |  | Printa kvarnmotorn till kvarnen |
| 3:42 | notis | tanke | 💭 Motorn ska sitta där veven sitter. Jag printar den först. |
| 3:42 | röst | du | Motorn ska sitta där veven sitter. Jag printar den först. · MÅL |
| 3:43 | nick |  | nick:22 |
| 3:46 | kvittens-bock |  | ✓ Köp kvarnmotorn hos Ali (50 kr) |
| 3:47 | klar | du | Motorn ska sitta där veven sitter. Jag printar den först. |
| 3:49 | struken | värld:TUUT TUUT! | TUUT TUUT! |
| 3:55 | sak | du | Jaha. En kalsong. Använd. |
| 3:55 | notis | tanke | 💭 Jaha. En kalsong. Använd. |
| 3:55 | röst | du | Jaha. En kalsong. Använd. · REAKTION |
| 3:56 | händelse | printStart | sak=byggsats:kvarnmotor |
| 3:57 | toast | fel | Ingen ström – trampa cykeln |
| 3:58 | klar | du | Jaha. En kalsong. Använd. |
| 3:59 | händelse | printKlar | sak=byggsats:kvarnmotor n=1 |
| 3:59 | toast | guld | ✅ |
| 3:59 | väntar | info:guld | ⚙️ Kvarnmotorn ligger i handen – klicka på kvarnen för att skruva fast den |
| 3:59 | händelse | tagitUrPrint | sak=byggsats:kvarnmotor n=1 |
| 3:59 | paket |  | sms |
| 3:59 | struken | ali | Hallå! Jag har nya skruvar. Samma gamla, men nya. |
| 3:59 | väntar | ali | Ali här. Ännu en ritning som blev på riktigt: Kvarnmotor. Semesterkassan växer. Livet växer. |
| 3:59 | sak | info:guld | ⚙️ Kvarnmotorn ligger i handen – klicka på kvarnen för att skruva fast den |
| 3:59 | kvitto-visas | info:guld | ⚙️ Kvarnmotorn ligger i handen – klicka på kvarnen för att skruva fast den |
| 3:59 | toast | guld | ⚙️ Kvarnmotorn ligger i handen – klicka på kvarnen för att skruva fast den |
| 4:01 | klar | info:guld | ⚙️ Kvarnmotorn ligger i handen – klicka på kvarnen för att skruva fast den |
| 4:04 | väntar | info:guld | ⚙️ Motorn sitter där veven satt – nu mal kvarnen själv. |
| 4:04 | händelse | monterat | sak=kvarnmotor |
| 4:04 | paket |  | tanke |
| 4:04 | tanke | du | Motorn sitter där veven satt. Mina armar tackar. |
| 4:04 | väntar | du | Motorn sitter där veven satt. Mina armar tackar. |
| 4:04 | monterat | du | byggsats:kvarnmotor |
| 4:04 | händelse | monterat | sak=kvarnmotor |
| 4:04 | sak | info:guld | ⚙️ Motorn sitter där veven satt – nu mal kvarnen själv. |
| 4:04 | kvitto-visas | info:guld | ⚙️ Motorn sitter där veven satt – nu mal kvarnen själv. |
| 4:04 | toast | guld | ⚙️ Motorn sitter där veven satt – nu mal kvarnen själv. |
| 4:04 | händelse | malKlart | id=monteraMotor del=Dag 2 – Tippen bredvid nasta=kopSack |
| 4:04 | struken | du | Motorn sitter där veven satt. Mina armar tackar. |
| 4:04 | väntar | du | Gården är full av skräp. Jag börjar vid skjulet. |
| 4:04 | MÅL |  | Kolla vad som flög ut från sopbilen |
| 4:06 | klar | info:guld | ⚙️ Motorn sitter där veven satt – nu mal kvarnen själv. |
| 4:06 | målruta |  | Kolla vad som flög ut från sopbilen |
| 4:08 | kvittens-bock |  | ✓ Printa kvarnmotorn till kvarnen |
| 4:08 | sak | du | Gården är full av skräp. Jag börjar vid skjulet. |
| 4:08 | pil |  | Kolla vad som flög ut från sopbilen |
| 4:08 | notis | tanke | 💭 Gården är full av skräp. Jag börjar vid skjulet. |
| 4:08 | röst | du | Gården är full av skräp. Jag börjar vid skjulet. · MÅL |
| 4:12 | klar | du | Gården är full av skräp. Jag börjar vid skjulet. |
| 4:14 | väntar | mamma | Har du frusit än? |
| 4:17 | paket |  | brev → ge → tanke |
| 4:17 | väntar | rolf | Du sliter ju. Ingen gör så nuförtin. Ta dessa så går dä lättare. / Rolf – ja kör sopbilen å har hand om tippen bredvid. MVH ROLF​ |
| 4:17 | väntar |  | (läget ändras) |
| 4:17 | tanke | du | Rolf… gubben i sopbilen. Han har tippen bredvid. Han verkar schysst. |
| 4:17 | väntar | du | Rolf… gubben i sopbilen. Han har tippen bredvid. Han verkar schysst. |
| 4:17 | sak | rolf | Du sliter ju. Ingen gör så nuförtin. Ta dessa så går dä lättare. / Rolf – ja kör sopbilen å har hand om tippen bredvid. MVH ROLF​ |
| 4:17 | lapp | Lapp från Rolf | Du sliter ju. Ingen gör så nuförtin. Ta dessa så går dä lättare. / Rolf – ja kör sopbilen å har hand om tippen bredvid. MVH ROLF​ |
| 4:17 | röst | rolf | Du sliter ju. Ingen gör så nuförtin. Ta dessa så går dä lättare. / Rolf – ja kör sopbilen å har hand om tippen bredvid. MVH ROLF​ · STORY |
| 4:28 | klar | rolf | Du sliter ju. Ingen gör så nuförtin. Ta dessa så går dä lättare. / Rolf – ja kör sopbilen å har hand om tippen bredvid. MVH ROLF​ |
| 4:30 | väntar | info:guld | 🗑️ Sopsäcken är över axeln! Du bär 10 skräp nu. |
| 4:30 | tog på | du | byggsats:korg |
| 4:30 | händelse | monterat | sak=korg |
| 4:30 | sak | info:guld | 🗑️ Sopsäcken är över axeln! Du bär 10 skräp nu. |
| 4:30 | kvitto-visas | info:guld | 🗑️ Sopsäcken är över axeln! Du bär 10 skräp nu. |
| 4:30 | toast | guld | 🗑️ Sopsäcken är över axeln! Du bär 10 skräp nu. |
| 4:30 | händelse | malKlart | id=kopSack del=Dag 2 – Tippen bredvid nasta=n1-stada-klart-garden |
| 4:30 | händelse | malKlart | id=n1-stada-klart-garden del=Dag 2 – Tippen bredvid nasta=rolf0-brev |
| 4:30 | väntar | du | Gården är STÄDAD. Av mig. Frivilligt. Mamma skulle aldrig tro det. |
| 4:30 | väntar | du | Vänta på sopbilen. Den lämnar något. |
| 4:30 | MÅL |  | Vänta på sopbilen. Den lämnar något. |
| 4:32 | klar | info:guld | 🗑️ Sopsäcken är över axeln! Du bär 10 skräp nu. |
| 4:32 | sak | du | Gården är STÄDAD. Av mig. Frivilligt. Mamma skulle aldrig tro det. |
| 4:32 | kvitto-visas | du | Gården är STÄDAD. Av mig. Frivilligt. Mamma skulle aldrig tro det. |
| 4:32 | lapp | 📔 Dagbok | Gården är STÄDAD. Av mig. Frivilligt. Mamma skulle aldrig tro det. |
| 4:32 | meddelande | du | Gården är STÄDAD. Av mig. Frivilligt. Mamma skulle aldrig tro det. |
| 4:32 | dagbokkort | du | Gården är STÄDAD. Av mig. Frivilligt. Mamma skulle aldrig tro det. |
| 4:32 | röst | du | Dag 2. 20 dagar till jul. Gården är STÄDAD. Av mig. Frivilligt. Mamma skulle aldrig tro det. · STORY |
| 4:40 | händelse | brevLast | id=gard |
| 4:40 | klar | du | Gården är STÄDAD. Av mig. Frivilligt. Mamma skulle aldrig tro det. |
| 4:40 | målruta |  | Vänta på sopbilen. Den lämnar något. |
| 4:40 | sak | du | Vänta på sopbilen. Den lämnar något. |
| 4:40 | pil |  | Vänta på sopbilen. Den lämnar något. |
| 4:40 | röst | du | Vänta på sopbilen. Den lämnar något. · MÅL |
| 4:43 | händelse | printStart | sak=kruka |
| 4:43 | klar | du | Vänta på sopbilen. Den lämnar något. |
| 4:45 | struken | ali | Ali här. Ännu en ritning som blev på riktigt: Kvarnmotor. Semesterkassan växer. Livet växer. |
| 4:45 | sak |  | (läget ändras) |
| 4:45 | klar |  | (läget ändras) |
| 4:45 | toast | guld | ✅ |
| 4:45 | händelse | printKlar | sak=kruka n=9 |
| 4:46 | händelse | tagitUrPrint | sak=kruka n=1 |
| 4:49 | sak | du | Rolf… gubben i sopbilen. Han har tippen bredvid. Han verkar schysst. |
| 4:49 | notis | tanke | 💭 Rolf… gubben i sopbilen. Han har tippen bredvid. Han verkar schysst. |
| 4:49 | röst | du | Rolf… gubben i sopbilen. Han har tippen bredvid. Han verkar schysst. · STORY |
| 4:53 | aliSalt | ali | 105 |
| 4:55 | klar | du | Rolf… gubben i sopbilen. Han har tippen bredvid. Han verkar schysst. |
| 5:04 | händelse | printStart | sak=kruka |
| 5:05 | toast | fel | Ingen ström – trampa cykeln |
| 5:07 | toast | guld | ✅ |
| 5:07 | händelse | printKlar | sak=kruka n=10 |
| 5:08 | händelse | tagitUrPrint | sak=kruka n=1 |
| 5:12 | upplåst | skrivare | rullstall |
| 5:12 | brott | UPPLÅST | rullstall (skrivare 216 av 75) |
| 5:12 | händelse | upplast | id=rullstall flask=skrivare |
| 5:12 | paket |  | tanke → sms |
| 5:12 | tanke | du | Kvarnen står och väntar för att hållaren är full. Om den rymde fler rullar kunde den mala hela tiden. |
| 5:12 | väntar | du | Kvarnen står och väntar för att hållaren är full. Om den rymde fler rullar kunde den mala hela tiden. |
| 5:12 | väntar | ali | Ali här. Rullställ. Fyra rullar i stället för en. Har ett på hyllan. |
| 5:12 | paket |  | tanke → ge |
| 5:12 | tanke | du | Flaggan är uppe. Rolf har lämnat något. |
| 5:12 | väntar | du | Flaggan är uppe. Rolf har lämnat något. |
| 5:12 | väntar |  | (läget ändras) |
| 5:13 | skratt | du | falsk tuta |
| 5:14 | sak | ali | Ali här. Rullställ. Fyra rullar i stället för en. Har ett på hyllan. |
| 5:14 | sms | ali | Ali här. Rullställ. Fyra rullar i stället för en. Har ett på hyllan. |
| 5:14 | sms-bubbla | ali | Ali här. Rullställ. Fyra rullar i stället för en. Har ett på hyllan. |
| 5:14 | röst | ali | Ali här. Rullställ. Fyra rullar i stället för en. Har ett på hyllan. · STORY |
| 5:15 | aliSalt | ali | 105 |
| 5:19 | skratt | du | däcket rullar iväg |
| 5:20 | klar | ali | Ali här. Rullställ. Fyra rullar i stället för en. Har ett på hyllan. |
| 5:26 | väntar | värld:TUUT! Tjena! | TUUT! Tjena! |
| 5:28 | väntar | rolf | Såg att du printar grejer. Kan du göra en sån hä? Kall öl ä viktigt. /Rolf​ |
| 5:28 | paket |  | ge |
| 5:28 | väntar |  | (läget ändras) |
| 5:28 | sak | rolf | Såg att du printar grejer. Kan du göra en sån hä? Kall öl ä viktigt. /Rolf​ |
| 5:28 | lapp | Brev från Rolf | Såg att du printar grejer. Kan du göra en sån hä? Kall öl ä viktigt. /Rolf​ |
| 5:28 | röst | rolf | Såg att du printar grejer. Kan du göra en sån hä? Kall öl ä viktigt. /Rolf​ · STORY |
| 5:28 | händelse | malKlart | id=rolf0-brev del=Dag 2 – Tippen bredvid nasta=rolf0-printa |
| 5:28 | väntar | du | Printa ölhållare med kylklamp. |
| 5:28 | MÅL |  | Printa ölhållare med kylklamp |
| 5:32 | händelse | printStart | sak=olhallare |
| 5:32 | händelse | malKlart | id=rolf0-printa del=Dag 2 – Tippen bredvid nasta=rolf0-ge |
| 5:32 | väntar | du | Ge Rolf ölhållare med kylklamp. |
| 5:32 | målruta |  | Ge Rolf ölhållare med kylklamp |
| 5:32 | MÅL |  | Ge Rolf ölhållare med kylklamp |
| 5:35 | klar | rolf | Såg att du printar grejer. Kan du göra en sån hä? Kall öl ä viktigt. /Rolf​ |
| 5:35 | händelse | brevLast | id=rolf:0 |
| 5:35 | toast | guld | ✅ |
| 5:35 | händelse | printKlar | sak=olhallare n=1 |
| 5:35 | händelse | tagitUrPrint | sak=olhallare n=1 |
| 5:36 | kvittens-bock |  | ✓ Printa ölhållare med kylklamp |
| 5:37 | struken | du | Printa ölhållare med kylklamp. |
| 5:37 | sak |  | (läget ändras) |
| 5:37 | klar |  | (läget ändras) |
| 5:37 | sak | du | Ge Rolf ölhållare med kylklamp. |
| 5:37 | pil |  | Ge Rolf ölhållare med kylklamp |
| 5:37 | röst | du | Ge Rolf ölhållare med kylklamp. · MÅL |
| 5:39 | klar | du | Ge Rolf ölhållare med kylklamp. |
| 5:43 | händelse | lagtIPostlada | sak=olhallare rolf=0 jobb=false |
| 5:43 | struken | kedja | rolf0 |
| 5:43 | paket |  | tanke |
| 5:43 | tanke | du | Flaggan uppe. Nu får Rolf hämta den. |
| 5:43 | väntar | du | Flaggan uppe. Nu får Rolf hämta den. |
| 5:43 | sak | du | Flaggan uppe. Nu får Rolf hämta den. |
| 5:43 | notis | tanke | 💭 Flaggan uppe. Nu får Rolf hämta den. |
| 5:43 | röst | du | Flaggan uppe. Nu får Rolf hämta den. · REAKTION |
| 5:43 | händelse | malKlart | id=rolf0-ge del=Dag 2 – Tippen bredvid nasta=vindsnurra |
| 5:43 | väntar | du | En vindsnurra på skjulets tak. Då blir det ström när det blåser. |
| 5:43 | MÅL |  | Trampa, printa och sälj |
| 5:46 | klar | du | Flaggan uppe. Nu får Rolf hämta den. |
| 5:47 | målruta |  | Trampa, printa och sälj |
| 5:47 | kvittens-bock |  | ✓ Ge Rolf ölhållare med kylklamp |
| 5:48 | struken | värld:TUUT! Tjena! | TUUT! Tjena! |
| 5:49 | sak | du | En vindsnurra på skjulets tak. Då blir det ström när det blåser. |
| 5:49 | pil |  | Trampa, printa och sälj |
| 5:49 | notis | tanke | 💭 En vindsnurra på skjulets tak. Då blir det ström när det blåser. |
| 5:49 | röst | du | En vindsnurra på skjulets tak. Då blir det ström när det blåser. · MÅL |
| 5:51 | händelse | printStart | sak=kruka |
| 5:54 | klar | du | En vindsnurra på skjulets tak. Då blir det ström när det blåser. |
| 5:54 | toast | guld | ✅ |
| 5:54 | händelse | printKlar | sak=kruka n=11 |
| 6:12 | sak | du | Kvarnen står och väntar för att hållaren är full. Om den rymde fler rullar kunde den mala hela tiden. |
| 6:12 | notis | tanke | 💭 Kvarnen står och väntar för att hållaren är full. Om den rymde fler rullar kunde den mala hela tiden. |
| 6:12 | röst | du | Kvarnen står och väntar för att hållaren är full. Om den rymde fler rullar kunde den mala hela tiden. · STORY |
| 6:20 | klar | du | Kvarnen står och väntar för att hållaren är full. Om den rymde fler rullar kunde den mala hela tiden. |
| 6:22 | händelse | tagitUrPrint | sak=kruka n=1 |
| 6:28 | sak | du | Flaggan är uppe. Rolf har lämnat något. |
| 6:28 | notis | tanke | 💭 Flaggan är uppe. Rolf har lämnat något. |
| 6:28 | röst | du | Flaggan är uppe. Rolf har lämnat något. · STORY |
| 6:29 | butiksbubbla | ali | Rolf gav mig en kanna. Som min farmors. Jag ritade en sak åt honom. Säg inget, han gråter lätt. |
| 6:30 | röst | ali | Rolf gav mig en kanna. Som min farmors. Jag ritade en sak åt honom. Säg inget, han gråter lätt. · STORY |
| 6:31 | aliSalt | ali | 105 |
| 6:32 | klar | du | Flaggan är uppe. Rolf har lämnat något. |
| 6:34 | upplåst | skrivare | trim_skrivare |
| 6:34 | brott | UPPLÅST | trim_skrivare (skrivare 75 av 75) |
| 6:34 | händelse | upplast | id=trim_skrivare flask=skrivare |
| 6:34 | paket |  | sms |
| 6:34 | väntar | ali | Ali här. Skrivartrim. Jag skruvade på min egen skrivare i natt. Den går fortare nu. Nästan för fort. |
| 6:38 | struken | ali | Ali här. Såg skylten. Stavningen är rätt. Det är mer än många. |
| 6:42 | händelse | printStart | sak=kruka |
| 6:44 | toast | guld | ✅ |
| 6:44 | händelse | printKlar | sak=kruka n=12 |
| 6:45 | sak |  | (läget ändras) |
| 6:45 | brev | rolf | rolf:0 |
| 6:45 | händelse | tagitUrPrint | sak=kruka n=1 |
| 6:45 | klar |  | (läget ändras) |
| 6:49 | sak | ali | Ali här. Skrivartrim. Jag skruvade på min egen skrivare i natt. Den går fortare nu. Nästan för fort. |
| 6:49 | sms | ali | Ali här. Skrivartrim. Jag skruvade på min egen skrivare i natt. Den går fortare nu. Nästan för fort. |
| 6:49 | sms-bubbla | ali | Ali här. Skrivartrim. Jag skruvade på min egen skrivare i natt. Den går fortare nu. Nästan för fort. |
| 6:49 | röst | ali | Ali här. Skrivartrim. Jag skruvade på min egen skrivare i natt. Den går fortare nu. Nästan för fort. · STORY |
| 6:52 | aliSalt | ali | 105 |
| 6:57 | klar | ali | Ali här. Skrivartrim. Jag skruvade på min egen skrivare i natt. Den går fortare nu. Nästan för fort. |
| 7:06 | händelse | printStart | sak=kruka |
| 7:06 | toast | fel | Ingen ström – trampa cykeln |
| 7:10 | toast | guld | ✅ |
| 7:10 | händelse | printKlar | sak=kruka n=13 |
| 7:10 | händelse | tagitUrPrint | sak=kruka n=1 |
| 7:16 | paket |  | tanke |
| 7:16 | tanke | du | Jaha, Rolf har hämtat ölhållare med kylklamp. |
| 7:16 | väntar | du | Jaha, Rolf har hämtat ölhållare med kylklamp. |
| 7:17 | aliSalt | ali | 105 |
| 7:18 | sak | du | Jaha, Rolf har hämtat ölhållare med kylklamp. |
| 7:18 | notis | tanke | 💭 Jaha, Rolf har hämtat ölhållare med kylklamp. |
| 7:18 | röst | du | Jaha, Rolf har hämtat ölhållare med kylklamp. · REAKTION |
| 7:22 | klar | du | Jaha, Rolf har hämtat ölhållare med kylklamp. |
| 7:31 | händelse | printStart | sak=kruka |
| 7:31 | väntar | info:guld | 🚛 Sopbilen tippade en ny last på soptippen! |
| 7:31 | scenInfo | gard | Lite skräp ramlade av flaket på gården |
| 7:31 | sak | info:guld | 🚛 Sopbilen tippade en ny last på soptippen! |
| 7:31 | kvitto-visas | info:guld | 🚛 Sopbilen tippade en ny last på soptippen! |
| 7:31 | toast | guld | 🚛 Sopbilen tippade en ny last på soptippen! |
| 7:33 | klar | info:guld | 🚛 Sopbilen tippade en ny last på soptippen! |
| 7:35 | toast | guld | ✅ |
| 7:35 | händelse | printKlar | sak=kruka n=14 |
| 7:35 | händelse | tagitUrPrint | sak=kruka n=1 |
| 7:38 | skratt | du | falsk tuta |
| 7:38 | väntar | värld:TUUT TUUT! | TUUT TUUT! |
| 7:43 | aliSalt | ali | 105 |
| 7:44 | sak | värld:TUUT TUUT! | TUUT TUUT! |
| 7:44 | bubbla |  | TUUT TUUT! |
| 7:47 | klar | värld:TUUT TUUT! | TUUT TUUT! |
| 7:56 | händelse | printStart | sak=kruka |
| 7:58 | toast | guld | ✅ |
| 7:58 | händelse | printKlar | sak=kruka n=15 |
| 7:59 | händelse | tagitUrPrint | sak=kruka n=1 |
| 8:06 | aliSalt | ali | 105 |
| 8:15 | händelse | printStart | sak=kruka |
| 8:17 | toast | fel | Ingen ström – trampa cykeln |
| 8:19 | toast | guld | ✅ |
| 8:19 | händelse | printKlar | sak=kruka n=16 |
| 8:20 | händelse | tagitUrPrint | sak=kruka n=1 |
| 8:27 | aliSalt | ali | 105 |
| 8:37 | händelse | printStart | sak=kruka |
| 8:39 | toast | guld | ✅ |
| 8:39 | händelse | printKlar | sak=kruka n=17 |
| 8:40 | händelse | tagitUrPrint | sak=kruka n=1 |
| 8:47 | aliSalt | ali | 105 |
| 8:57 | händelse | printStart | sak=kruka |
| 8:59 | upplåst | trampa | vindsnurra |
| 8:59 | brott | UPPLÅST | vindsnurra (trampa 33 av 10) |
| 8:59 | händelse | upplast | id=vindsnurra flask=trampa |
| 8:59 | paket |  | tanke → sms |
| 8:59 | tanke | du | Mina ben är slut. Det blåser hela tiden här ute. Tänk om vinden kunde trampa åt mig. |
| 8:59 | väntar | du | Mina ben är slut. Det blåser hela tiden här ute. Tänk om vinden kunde trampa åt mig. |
| 8:59 | väntar | ali | Ali här. Vindsnurra till cykeln. Vinden trampar åt dig. Den är lat, men den jobbar gratis. |
| 9:01 | sak | du | Mina ben är slut. Det blåser hela tiden här ute. Tänk om vinden kunde trampa åt mig. |
| 9:01 | notis | tanke | 💭 Mina ben är slut. Det blåser hela tiden här ute. Tänk om vinden kunde trampa åt mig. |
| 9:01 | röst | du | Mina ben är slut. Det blåser hela tiden här ute. Tänk om vinden kunde trampa åt mig. · STORY |
| 9:01 | toast | guld | ✅ |
| 9:01 | händelse | printKlar | sak=kruka n=18 |
| 9:01 | händelse | tagitUrPrint | sak=kruka n=1 |
| 9:08 | klar | du | Mina ben är slut. Det blåser hela tiden här ute. Tänk om vinden kunde trampa åt mig. |
| 9:09 | aliSalt | ali | 105 |
| 9:13 | toast | guld | 3D-modell köpt – printa vindsnurra till skjultaket på skrivaren |
| 9:13 | händelse | kopt | sak=vindsnurra |
| 9:13 | struken | ali | Ali här. Vindsnurra till cykeln. Vinden trampar åt dig. Den är lat, men den jobbar gratis. |
| 9:21 | händelse | printStart | sak=byggsats:vindsnurra |
| 9:25 | händelse | printKlar | sak=byggsats:vindsnurra n=1 |
| 9:25 | toast | guld | ✅ |
| 9:57 | väntar | info:guld | 🌬️ Vindsnurran ligger i handen – klicka på skjulet för att sätta den på taket |
| 9:57 | händelse | tagitUrPrint | sak=byggsats:vindsnurra n=1 |
| 9:57 | sak | info:guld | 🌬️ Vindsnurran ligger i handen – klicka på skjulet för att sätta den på taket |
| 9:57 | kvitto-visas | info:guld | 🌬️ Vindsnurran ligger i handen – klicka på skjulet för att sätta den på taket |
| 9:57 | toast | guld | 🌬️ Vindsnurran ligger i handen – klicka på skjulet för att sätta den på taket |
| 9:58 | scenInfo | gard | Vinden blåste in skräp från vägen |
| 9:58 | tanke | du | Det har blåst in lite skräp från vägen. |
| 9:58 | väntar | du | Det har blåst in lite skräp från vägen. |
| 9:59 | klar | info:guld | 🌬️ Vindsnurran ligger i handen – klicka på skjulet för att sätta den på taket |
| 10:01 | sak | du | Det har blåst in lite skräp från vägen. |
| 10:01 | notis | tanke | 💭 Det har blåst in lite skräp från vägen. |
| 10:01 | röst | du | Det har blåst in lite skräp från vägen. · REAKTION |
| 10:04 | klar | du | Det har blåst in lite skräp från vägen. |
| 10:06 | händelse | placerat | sak=vindsnurra |
| 10:06 | kvittens | du | Den snurrar! Långsamt. Men den snurrar. |
| 10:06 | varför | du | Om det regnar i natt drunknar jag. Ett tak. |
| 10:06 | väntar | du | Den snurrar! Långsamt. Men den snurrar. |
| 10:06 | väntar | info:guld | 🌬️ Vindsnurran sitter på taket – den trampar cykeln åt dig när det blåser |
| 10:06 | monterat | du | byggsats:vindsnurra |
| 10:06 | händelse | monterat | sak=vindsnurra |
| 10:06 | sak | du | Den snurrar! Långsamt. Men den snurrar. |
| 10:06 | notis | tanke | 💭 Den snurrar! Långsamt. Men den snurrar. |
| 10:06 | röst | du | Den snurrar! Långsamt. Men den snurrar. · STORY |
| 10:06 | händelse | malKlart | id=vindsnurra del=Dag 2 – Tippen bredvid nasta=n1-bygg-dorr-skjulet |
| 10:06 | väntar | du | Det drar från dörrhålet. En dörr kan jag printa. |
| 10:06 | MÅL |  | Bygg en dörr till skjulet |
| 10:09 | klar | du | Den snurrar! Långsamt. Men den snurrar. |
| 10:09 | sak | info:guld | 🌬️ Vindsnurran sitter på taket – den trampar cykeln åt dig när det blåser |
| 10:09 | kvitto-visas | info:guld | 🌬️ Vindsnurran sitter på taket – den trampar cykeln åt dig när det blåser |
| 10:09 | toast | guld | 🌬️ Vindsnurran sitter på taket – den trampar cykeln åt dig när det blåser |
| 10:09 | målruta |  | Bygg en dörr till skjulet |
| 10:11 | klar | info:guld | 🌬️ Vindsnurran sitter på taket – den trampar cykeln åt dig när det blåser |
| 10:13 | sak | du | Det drar från dörrhålet. En dörr kan jag printa. |
| 10:13 | pil |  | Bygg en dörr till skjulet |
| 10:13 | notis | tanke | 💭 Det drar från dörrhålet. En dörr kan jag printa. |
| 10:13 | röst | du | Det drar från dörrhålet. En dörr kan jag printa. · MÅL |
| 10:14 | nick |  | nick:29 |
| 10:17 | klar | du | Det drar från dörrhålet. En dörr kan jag printa. |
| 10:19 | struken | mamma | Har du frusit än? |
| 10:25 | toast | guld | 3D-modell köpt – printa dörr på skrivaren |
| 10:25 | händelse | kopt | sak=dorr |
| 10:34 | händelse | printStart | sak=byggsats:dorr |
| 10:37 | toast | bra | Del 1 av 2 klar |
| 10:37 | väntar | notis:Storebrors skrivare: Del 1 av 2 klar | Storebrors skrivare: Del 1 av 2 klar |
| 10:37 | sak | notis:Storebrors skrivare: Del 1 av 2 klar | Storebrors skrivare: Del 1 av 2 klar |
| 10:37 | notis | bra | Storebrors skrivare: Del 1 av 2 klar |
| 10:40 | klar | notis:Storebrors skrivare: Del 1 av 2 klar | Storebrors skrivare: Del 1 av 2 klar |
| 10:40 | händelse | printKlar | sak=byggsats:dorr n=1 |
| 10:40 | toast | guld | ✅ |
| 10:41 | händelse | tagitUrPrint | sak=byggsats:dorr n=1 |
| 10:41 | paket |  | sms |
| 10:41 | väntar | ali | Ali här. Jag har inte sovit. Inte på grund av AI:n. På grund av dig. Du bygger saker av sopor. Jag har en hel butik och bygger ingenting. Det ska ändras. Kanske. Troligen. |
| 10:46 | väntar | info:guld | Dörr på plats! Trivsel +8 · Ali betalar nu +0 % |
| 10:46 | sak | info:guld | Dörr på plats! Trivsel +8 · Ali betalar nu +0 % |
| 10:46 | kvitto-visas | info:guld | Dörr på plats! Trivsel +8 · Ali betalar nu +0 % |
| 10:46 | toast | guld | Dörr på plats! Trivsel +8 · Ali betalar nu +0 % |
| 10:46 | händelse | malKlart | id=n1-bygg-dorr-skjulet del=Dag 2 – Tippen bredvid nasta=sov2 |
| 10:46 | paket |  | lapp |
| 10:46 | väntar | du | Dag 2 är slut. Nu vet Ali att jag bor HÄR. Taket läcker. I morgon. |
| 10:46 | paket |  | sms |
| 10:46 | väntar | bror | Mamma ringde mig fyra gånger förresten. Snyggt jobbat 😂 |
| 10:46 | skratt | bror | Mamma ringde mig fyra gånger förresten. |
| 10:46 | väntar | du | Klart för idag – sov när du vill. |
| 10:46 | MÅL |  | Klart för idag – sov när du vill |
| 10:48 | klar | info:guld | Dörr på plats! Trivsel +8 · Ali betalar nu +0 % |
| 10:49 | målruta |  | Klart för idag – sov när du vill |
| 10:50 | kvittens-bock |  | ✓ Bygg en dörr till skjulet |
| 10:50 | sak | du | Klart för idag – sov när du vill. |
| 10:50 | pil |  | Klart för idag – sov när du vill |
| 10:50 | röst | du | Klart för idag – sov när du vill. · MÅL |
| 10:53 | klar | du | Klart för idag – sov när du vill. |
| 10:53 | väntar | notis:🌇 Klockan är 21. Ali slår igen luckan.  | 🌇 Klockan är 21. Ali slår igen luckan. Dagens jobb är klart – gå in i skjulet och sov i sängen. |
| 10:55 | sak | du | Dag 2 är slut. Nu vet Ali att jag bor HÄR. Taket läcker. I morgon. |
| 10:55 | lapp | 📔 Dagbok | Dag 2 är slut. Nu vet Ali att jag bor HÄR. Taket läcker. I morgon. |
| 10:55 | meddelande | du | Dag 2 är slut. Nu vet Ali att jag bor HÄR. Taket läcker. I morgon. |
| 10:55 | dagbokkort | du | Dag 2 är slut. Nu vet Ali att jag bor HÄR. Taket läcker. I morgon. |
| 10:55 | röst | du | Dag 2. 20 dagar till jul. Dag 2 är slut. Nu vet Ali att jag bor HÄR. Taket läcker. I morgon. · STORY |
| 11:03 | händelse | brevLast | id=kvall2 |
| 11:03 | klar | du | Dag 2 är slut. Nu vet Ali att jag bor HÄR. Taket läcker. I morgon. |
| 11:05 | struken | notis:🌇 Klockan är 21. Ali slår igen luckan.  | 🌇 Klockan är 21. Ali slår igen luckan. Dagens jobb är klart – gå in i skjulet och sov i sängen. |

<details><summary>Botens handlingar dag 2</summary>

- 0:00 — dag 2 börjar — (250 kr)
- 0:08 popup: "FORTSÄTT" (250 kr)
- 0:16 popup: "FORTSÄTT" (250 kr)
- 0:24 tjänar pengar till väntar på flaskhalsen för kvarnmotor: 250/290 kr → printar blomkruka (105 kr) (250 kr)
- 0:28 gå till skrivaren (19 m) (250 kr)
- 0:30 printar Blomkruka (250 kr)
- 0:33 tar ut 1 st ur skrivaren (250 kr)
- 0:38 gå till Ali (26 m) (250 kr)
- 0:38 öppnar Alis butik – sälja (250 kr)
- 0:40 säljer hos Ali: +105 kr (355 kr)
- 0:46 tjänar pengar till väntar på flaskhalsen för kvarnmotor: 355/395 kr → printar blomkruka (105 kr) (355 kr)
- 0:51 gå till skrivaren (25 m) (355 kr)
- 0:53 printar Blomkruka (355 kr)
- 0:54 gå till cykeln (1 m) (355 kr)
- 0:57 tar ut 1 st ur skrivaren (355 kr)
- 1:02 gå till Ali (25 m) (355 kr)
- 1:02 öppnar Alis butik – sälja (355 kr)
- 1:04 säljer hos Ali: +105 kr (460 kr)
- 1:06 tjänar pengar till väntar på flaskhalsen för kvarnmotor: 460/500 kr → printar blomkruka (105 kr) (460 kr)
- 1:21 popup: "FORTSÄTT" (460 kr)
- 1:23 plockar 5 skräp på gården (bär max 6) (460 kr)
- 1:31 gå till kvarnen (35 m) (460 kr)
- 1:34 gå till skrivaren (1 m) (460 kr)
- 1:36 printar Blomkruka (460 kr)
- 1:39 tar ut 1 st ur skrivaren (460 kr)
- 1:45 gå till Ali (28 m) (460 kr)
- 1:45 öppnar Alis butik – sälja (460 kr)
- 1:47 säljer hos Ali: +105 kr (565 kr)
- 1:49 tjänar pengar till väntar på flaskhalsen för kvarnmotor: 565/605 kr → printar blomkruka (105 kr) (565 kr)
- 1:54 gå till skrivaren (25 m) (565 kr)
- 1:55 printar Blomkruka (565 kr)
- 1:57 gå till cykeln (1 m) (565 kr)
- 2:00 tar ut 1 st ur skrivaren (565 kr)
- 2:05 gå till Ali (25 m) (565 kr)
- 2:05 öppnar Alis butik – sälja (565 kr)
- 2:07 säljer hos Ali: +105 kr (670 kr)
- 2:09 tjänar pengar till väntar på flaskhalsen för kvarnmotor: 670/710 kr → printar blomkruka (105 kr) (670 kr)
- 2:18 plockar 4 skräp på gården (bär max 6) (670 kr)
- 2:24 gå till kvarnen (31 m) (670 kr)
- 2:28 gå till skrivaren (1 m) (670 kr)
- 2:30 printar Blomkruka (670 kr)
- 2:33 tar ut 1 st ur skrivaren (670 kr)
- 2:39 gå till Ali (28 m) (670 kr)
- 2:39 öppnar Alis butik – sälja (670 kr)
- 2:41 säljer hos Ali: +105 kr (775 kr)
- 2:43 tjänar pengar till väntar på flaskhalsen för kvarnmotor: 775/815 kr → printar blomkruka (105 kr) (775 kr)
- 2:48 gå till skrivaren (25 m) (775 kr)
- 2:50 printar Blomkruka (775 kr)
- 2:51 gå till cykeln (1 m) (775 kr)
- 2:54 tar ut 1 st ur skrivaren (775 kr)
- 3:00 gå till Ali (25 m) (775 kr)
- 3:00 öppnar Alis butik – sälja (775 kr)
- 3:01 säljer hos Ali: +105 kr (880 kr)
- 3:03 tjänar pengar till väntar på flaskhalsen för kvarnmotor: 880/920 kr → printar blomkruka (105 kr) (880 kr)
- 3:12 plockar 3 skräp på gården (bär max 6) (880 kr)
- 3:20 gå till kvarnen (37 m) (880 kr)
- 3:24 gå till skrivaren (1 m) (880 kr)
- 3:26 printar Blomkruka (880 kr)
- 3:29 tar ut 1 st ur skrivaren (880 kr)
- 3:35 gå till Ali (28 m) (880 kr)
- 3:35 öppnar Alis butik – sälja (880 kr)
- 3:37 säljer hos Ali: +105 kr (985 kr)
- 3:39 öppnar Alis butik – köpa kvarnmotor (985 kr)
- 3:41 köper kvarnmotor för 50 kr (935 kr)
- 3:54 gå till skrivaren (25 m) (935 kr)
- 3:56 printar Kvarnmotor (935 kr)
- 3:57 gå till cykeln (1 m) (935 kr)
- 3:59 tar ut 1 st ur skrivaren (935 kr)
- 4:04 gå till skruva fast kvarnmotorn (3 m) (935 kr)
- 4:17 gå till Rolfs sopsäck (16 m) (935 kr)
- 4:30 tar på korg (935 kr)
- 4:30 tjänar pengar till väntar på sopbilen (BO): 935/995 kr → printar blomkruka (105 kr) (935 kr)
- 4:40 popup: "FORTSÄTT" (935 kr)
- 4:41 gå till skrivaren (12 m) (935 kr)
- 4:43 printar Blomkruka (935 kr)
- 4:46 tar ut 1 st ur skrivaren (935 kr)
- 4:51 gå till Ali (26 m) (935 kr)
- 4:51 öppnar Alis butik – sälja (935 kr)
- 4:53 säljer hos Ali: +105 kr (1040 kr)
- 4:57 tjänar pengar till väntar på sopbilen (BO): 1040/1100 kr → printar blomkruka (105 kr) (1040 kr)
- 5:02 gå till skrivaren (25 m) (1040 kr)
- 5:04 printar Blomkruka (1040 kr)
- 5:05 gå till cykeln (1 m) (1040 kr)
- 5:08 tar ut 1 st ur skrivaren (1040 kr)
- 5:14 gå till Ali (25 m) (1040 kr)
- 5:14 öppnar Alis butik – sälja (1040 kr)
- 5:15 säljer hos Ali: +105 kr (1145 kr)
- 5:28 gå till Rolfs postlåda (31 m) (1145 kr)
- 5:30 gå till skrivaren (7 m) (1145 kr)
- 5:32 printar Ölhållare med kylklamp (1145 kr)
- 5:36 tar ut 1 st ur skrivaren (1145 kr)
- 5:41 valj olhallare: true, vald olhallare, post {"l":null,"tr":null,"tm":[]}, nummer false (1145 kr)
- 5:43 gå till Rolfs postlåda (6 m) (1145 kr)
- 5:48 tjänar pengar till väntar på flaskhalsen för vindsnurra: 1145/1185 kr → printar blomkruka (105 kr) (1145 kr)
- 5:50 gå till skrivaren (6 m) (1145 kr)
- 5:51 printar Blomkruka (1145 kr)
- 5:52 gå till cykeln (1 m) (1145 kr)
- 6:14 plockar 7 skräp på gården (bär max 10) (1145 kr)
- 6:22 gå till kvarnen (40 m) (1145 kr)
- 6:22 gå till skrivaren (1 m) (1145 kr)
- 6:23 tar ut 1 st ur skrivaren (1145 kr)
- 6:29 gå till Ali (28 m) (1145 kr)
- 6:29 öppnar Alis butik – sälja (1145 kr)
- 6:31 säljer hos Ali: +105 kr (1250 kr)
- 6:35 tjänar pengar till väntar på flaskhalsen för vindsnurra: 1250/1290 kr → printar blomkruka (105 kr) (1250 kr)
- 6:40 gå till skrivaren (25 m) (1250 kr)
- 6:42 printar Blomkruka (1250 kr)
- 6:46 tar ut 1 st ur skrivaren (1250 kr)
- 6:51 gå till Ali (25 m) (1250 kr)
- 6:51 öppnar Alis butik – sälja (1250 kr)
- 6:53 säljer hos Ali: +105 kr (1355 kr)
- 6:59 tjänar pengar till väntar på flaskhalsen för vindsnurra: 1355/1395 kr → printar blomkruka (105 kr) (1355 kr)
- 7:05 gå till skrivaren (25 m) (1355 kr)
- 7:06 printar Blomkruka (1355 kr)
- 7:06 gå till cykeln (1 m) (1355 kr)
- 7:10 tar ut 1 st ur skrivaren (1355 kr)
- 7:16 gå till Ali (25 m) (1355 kr)
- 7:16 öppnar Alis butik – sälja (1355 kr)
- 7:17 säljer hos Ali: +105 kr (1460 kr)
- 7:24 tjänar pengar till väntar på flaskhalsen för vindsnurra: 1460/1500 kr → printar blomkruka (105 kr) (1460 kr)
- 7:29 gå till skrivaren (25 m) (1460 kr)
- 7:31 printar Blomkruka (1460 kr)
- 7:34 gå till cykeln (1 m) (1460 kr)
- 7:36 tar ut 1 st ur skrivaren (1460 kr)
- 7:41 gå till Ali (25 m) (1460 kr)
- 7:41 öppnar Alis butik – sälja (1460 kr)
- 7:43 säljer hos Ali: +105 kr (1565 kr)
- 7:49 tjänar pengar till väntar på flaskhalsen för vindsnurra: 1565/1605 kr → printar blomkruka (105 kr) (1565 kr)
- 7:54 gå till skrivaren (25 m) (1565 kr)
- 7:56 printar Blomkruka (1565 kr)
- 7:59 tar ut 1 st ur skrivaren (1565 kr)
- 8:05 gå till Ali (25 m) (1565 kr)
- 8:05 öppnar Alis butik – sälja (1565 kr)
- 8:07 säljer hos Ali: +105 kr (1670 kr)
- 8:09 tjänar pengar till väntar på flaskhalsen för vindsnurra: 1670/1710 kr → printar blomkruka (105 kr) (1670 kr)
- 8:14 gå till skrivaren (25 m) (1670 kr)
- 8:15 printar Blomkruka (1670 kr)
- 8:18 gå till cykeln (1 m) (1670 kr)
- 8:21 tar ut 1 st ur skrivaren (1670 kr)
- 8:26 gå till Ali (25 m) (1670 kr)
- 8:26 öppnar Alis butik – sälja (1670 kr)
- 8:28 säljer hos Ali: +105 kr (1775 kr)
- 8:30 tjänar pengar till väntar på flaskhalsen för vindsnurra: 1775/1815 kr → printar blomkruka (105 kr) (1775 kr)
- 8:35 gå till skrivaren (25 m) (1775 kr)
- 8:37 printar Blomkruka (1775 kr)
- 8:41 tar ut 1 st ur skrivaren (1775 kr)
- 8:46 gå till Ali (25 m) (1775 kr)
- 8:46 öppnar Alis butik – sälja (1775 kr)
- 8:48 säljer hos Ali: +105 kr (1880 kr)
- 8:50 tjänar pengar till väntar på flaskhalsen för vindsnurra: 1880/1920 kr → printar blomkruka (105 kr) (1880 kr)
- 8:55 gå till skrivaren (25 m) (1880 kr)
- 8:57 printar Blomkruka (1880 kr)
- 8:59 gå till cykeln (1 m) (1880 kr)
- 9:02 tar ut 1 st ur skrivaren (1880 kr)
- 9:07 gå till Ali (25 m) (1880 kr)
- 9:07 öppnar Alis butik – sälja (1880 kr)
- 9:09 säljer hos Ali: +105 kr (1985 kr)
- 9:11 öppnar Alis butik – köpa vindsnurra till skjultaket (1985 kr)
- 9:13 köper vindsnurra för 133 kr (1852 kr)
- 9:20 gå till skrivaren (25 m) (1852 kr)
- 9:21 printar Vindsnurra till skjultaket (1852 kr)
- 9:49 plockar 9 skräp på gården (bär max 10) (1852 kr)
- 9:56 gå till kvarnen (33 m) (1852 kr)
- 9:57 gå till skrivaren (1 m) (1852 kr)
- 9:58 tar ut 1 st ur skrivaren (1852 kr)
- 10:06 gå till sätt vindsnurran på taket (22 m) (1852 kr)
- 10:23 gå till Ali (20 m) (1852 kr)
- 10:23 öppnar Alis butik – köpa dörr (1852 kr)
- 10:26 köper dorr för 120 kr (1732 kr)
- 10:32 gå till skrivaren (25 m) (1732 kr)
- 10:34 printar Dörr (2 delar) (1732 kr)
- 10:42 tar ut 1 st ur skrivaren (1732 kr)
- 10:46 gå till skjulet (19 m) (1732 kr)
- 11:03 popup: "FORTSÄTT" (1732 kr)
- 11:06 gå till sängen (1 m) (1732 kr)

</details>

## Dag 3

| Tid | Källa | Vem | Text |
|---|---|---|---|
| 11:08 | vara | ali | ingen |
| 11:08 | händelse | malKlart | id=sov2 del=Dag 2 – Tippen bredvid nasta=rolf1-brev |
| 11:08 | vara | ali | kruka |
| 11:08 | MÅL |  | Vänta på sopbilen. Den lämnar något. |
| 0:01 | händelse | dagenBorjar | dag=3 |
| 0:01 | meddelande | du | Dag 3. 19 dagar till jul. Utan tak regnar det in i natt. |
| 0:01 | dagbokkort | du | En skrivare till och taket · Dag 3. 19 dagar till jul. Utan tak regnar det in i natt. |
| 0:01 | röst | du | Dag 3. 19 dagar till jul. En skrivare till och taket. Utan tak regnar det in i natt. · STORY |
| 0:08 | notis | nytt | Ali vill ha idag: Blomkruka – +50 % hela dagen (105 kr just nu)📈 Igår: 18 printat · 17 sålt |
| 0:09 | händelse | morgonkortStangt | dag=3 |
| 0:09 | målruta |  | Vänta på sopbilen. Den lämnar något. |
| 0:12 | skratt | du | falsk tuta |
| 0:14 | sak | du | (nytt mål i rutan) |
| 0:14 | pil |  | Vänta på sopbilen. Den lämnar något. |
| 0:14 | klar | du | (nytt mål i rutan) |
| 0:16 | struken | ali | Ali här. Jag har inte sovit. Inte på grund av AI:n. På grund av dig. Du bygger saker av sopor. Jag har en hel butik och bygger ingenting. Det ska ändras. Kanske. Troligen. |
| 0:16 | struken | bror | Mamma ringde mig fyra gånger förresten. Snyggt jobbat 😂 |
| 0:16 | skratt | bror | Mamma ringde mig fyra gånger förresten. |
| 0:27 | väntar | rolf | Den funkar! Hä. Ta så mycke skräp du vill. /Rolf​ |
| 0:28 | tanke | du | En hel kanot. Kvarnen skulle äta upp sig själv. |
| 0:28 | väntar | du | En hel kanot. Kvarnen skulle äta upp sig själv. |
| 0:29 | paket |  | tanke |
| 0:29 | tanke | du | Rolfs tipp. Hela högen. |
| 0:29 | väntar | du | Rolfs tipp. Hela högen. |
| 0:29 | monterat | du | byggsats:tippnyckel |
| 0:29 | händelse | monterat | sak=tippnyckel |
| 0:29 | sak | du | Rolfs tipp. Hela högen. |
| 0:29 | kvitto-visas | du | Rolfs tipp. Hela högen. |
| 0:29 | notis | tanke | 💭 Rolfs tipp. Hela högen. |
| 0:29 | röst | du | Rolfs tipp. Hela högen. · REAKTION |
| 0:29 | scenInfo | du | Kameran sveper över tippen |
| 0:31 | klar | du | Rolfs tipp. Hela högen. |
| 0:33 | tanke | du | …Det här räcker i hundra år. |
| 0:33 | väntar | du | …Det här räcker i hundra år. |
| 0:34 | skratt | du | falsk tuta |
| 0:37 | händelse | printStart | sak=kruka |
| 0:41 | sak | rolf | Den funkar! Hä. Ta så mycke skräp du vill. /Rolf​ |
| 0:41 | lapp | Brev från Rolf | Den funkar! Hä. Ta så mycke skräp du vill. /Rolf​ |
| 0:41 | röst | rolf | Den funkar! Hä. Ta så mycke skräp du vill. /Rolf​ · STORY |
| 0:42 | toast | guld | ✅ |
| 0:42 | händelse | printKlar | sak=kruka n=19 |
| 0:42 | händelse | tagitUrPrint | sak=kruka n=1 |
| 0:45 | klar | rolf | Den funkar! Hä. Ta så mycke skräp du vill. /Rolf​ |
| 0:45 | händelse | brevLast | id=rolftack:0 |
| 0:48 | röst | ali | Jag har stått här sedan sex i morse. Vad vill du? · STORY |
| 0:48 | butiksbubbla | ali | Jag har stått här sedan sex i morse. Vad vill du? |
| 0:50 | aliSalt | ali | 105 |
| 1:00 | sak | du | En hel kanot. Kvarnen skulle äta upp sig själv. |
| 1:00 | notis | tanke | 💭 En hel kanot. Kvarnen skulle äta upp sig själv. |
| 1:00 | röst | du | En hel kanot. Kvarnen skulle äta upp sig själv. · REAKTION |
| 1:00 | händelse | printStart | sak=kruka |
| 1:04 | klar | du | En hel kanot. Kvarnen skulle äta upp sig själv. |
| 1:06 | toast | guld | ✅ |
| 1:06 | händelse | printKlar | sak=kruka n=20 |
| 1:06 | händelse | tagitUrPrint | sak=kruka n=1 |
| 1:13 | aliSalt | ali | 105 |
| 1:14 | sak | du | …Det här räcker i hundra år. |
| 1:14 | notis | tanke | 💭 …Det här räcker i hundra år. |
| 1:14 | röst | du | …Det här räcker i hundra år. · STORY |
| 1:17 | klar | du | …Det här räcker i hundra år. |
| 1:26 | händelse | printStart | sak=kruka |
| 1:31 | toast | guld | ✅ |
| 1:31 | händelse | printKlar | sak=kruka n=21 |
| 1:31 | händelse | tagitUrPrint | sak=kruka n=1 |
| 1:38 | aliSalt | ali | 105 |
| 1:49 | händelse | printStart | sak=kruka |
| 1:54 | toast | guld | ✅ |
| 1:54 | händelse | printKlar | sak=kruka n=22 |
| 1:59 | väntar | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått en DÖRR. Och vindsnurra till skjultaket. Mer säger jag inte. Gunnar vet. |
| 1:59 | radio | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått en DÖRR. Och vindsnurra till skjultaket. Mer säger jag inte. Gunnar vet. |
| 1:59 | skratt | du | Radio-Kjelle |
| 1:59 | sak | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått en DÖRR. Och vindsnurra till skjultaket. Mer säger jag inte. Gunnar vet. |
| 1:59 | notis |  | 📻 Radio Tippen: Radio Tippen, Kjelle här. Skjulet vid tippen har fått en DÖRR. Och vindsnurra till skjultaket. Mer säger jag inte. Gunnar vet. |
| 1:59 | röst | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått en DÖRR. Och vindsnurra till skjultaket. Mer säger jag inte. Gunnar vet. · REAKTION |
| 2:10 | klar | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått en DÖRR. Och vindsnurra till skjultaket. Mer säger jag inte. Gunnar vet. |
| 2:25 | händelse | tagitUrPrint | sak=kruka n=1 |
| 2:29 | väntar | värld:TUUT! Tjena! | TUUT! Tjena! |
| 2:29 | sak | värld:TUUT! Tjena! | TUUT! Tjena! |
| 2:29 | bubbla |  | TUUT! Tjena! |
| 2:32 | klar | värld:TUUT! Tjena! | TUUT! Tjena! |
| 2:33 | aliSalt | ali | 105 |
| 2:37 | väntar | bror | Pappa har tvättat bilen tre gånger den här veckan. Jag sa att du bor på tippen. Han frågade vilken modell sopbilen var. |
| 2:42 | skratt | du | falsk tuta |
| 2:43 | händelse | printStart | sak=kruka |
| 2:48 | toast | guld | ✅ |
| 2:48 | händelse | printKlar | sak=kruka n=23 |
| 2:49 | händelse | tagitUrPrint | sak=kruka n=1 |
| 2:50 | paket |  | ge |
| 2:50 | väntar |  | (läget ändras) |
| 2:51 | sak |  | (läget ändras) |
| 2:51 | brev | rolf | rolf:1 |
| 2:51 | klar |  | (läget ändras) |
| 2:56 | aliSalt | ali | 105 |
| 3:03 | skratt | du | falsk tuta |
| 3:05 | tanke | du | Tratten är stor som en kaffekopp. Tunnan är stor som jag. |
| 3:05 | väntar | du | Tratten är stor som en kaffekopp. Tunnan är stor som jag. |
| 3:05 | sak | du | Tratten är stor som en kaffekopp. Tunnan är stor som jag. |
| 3:05 | notis | tanke | 💭 Tratten är stor som en kaffekopp. Tunnan är stor som jag. |
| 3:05 | röst | du | Tratten är stor som en kaffekopp. Tunnan är stor som jag. · REAKTION |
| 3:06 | väntar | rolf | Nämen. Kajsa knuffa ner min flasköppnare i tippen. Kan du göra en ny, mä magnet? /Rolf​ |
| 3:06 | paket |  | ge |
| 3:06 | väntar |  | (läget ändras) |
| 3:06 | händelse | malKlart | id=rolf1-brev del=Dag 3 – En skrivare till och taket nasta=n2-hamta-skrap |
| 3:06 | väntar | du | Nyckeln till tippen. Där ligger skräpet i högar. |
| 3:06 | MÅL |  | Hämta 5 skräp på soptippen |
| 3:09 | målruta |  | Hämta 5 skräp på soptippen |
| 3:10 | kvittens-bock |  | ✓ Läs brevet i Rolfs postlåda |
| 3:10 | klar | du | Tratten är stor som en kaffekopp. Tunnan är stor som jag. |
| 3:10 | händelse | malKlart | id=n2-hamta-skrap del=Dag 3 – En skrivare till och taket nasta=rolf1-printa |
| 3:10 | struken | kedja | tippen |
| 3:10 | väntar | du | Printa flasköppnare med magnet. |
| 3:10 | MÅL |  | Printa flasköppnare med magnet |
| 3:12 | struken | du | Nyckeln till tippen. Där ligger skräpet i högar. |
| 3:12 | sak | rolf | Nämen. Kajsa knuffa ner min flasköppnare i tippen. Kan du göra en ny, mä magnet? /Rolf​ |
| 3:12 | lapp | Brev från Rolf | Nämen. Kajsa knuffa ner min flasköppnare i tippen. Kan du göra en ny, mä magnet? /Rolf​ |
| 3:12 | röst | rolf | Nämen. Kajsa knuffa ner min flasköppnare i tippen. Kan du göra en ny, mä magnet? /Rolf​ · STORY |
| 3:14 | målruta |  | Printa flasköppnare med magnet |
| 3:20 | klar | rolf | Nämen. Kajsa knuffa ner min flasköppnare i tippen. Kan du göra en ny, mä magnet? /Rolf​ |
| 3:20 | händelse | brevLast | id=rolf:1 |
| 3:22 | sak | du | Printa flasköppnare med magnet. |
| 3:22 | pil |  | Printa flasköppnare med magnet |
| 3:22 | röst | du | Printa flasköppnare med magnet. · MÅL |
| 3:24 | klar | du | Printa flasköppnare med magnet. |
| 3:26 | sak |  | (läget ändras) |
| 3:26 | klar |  | (läget ändras) |
| 3:29 | händelse | printStart | sak=flaskoppnare |
| 3:29 | händelse | malKlart | id=rolf1-printa del=Dag 3 – En skrivare till och taket nasta=rolf1-ge |
| 3:29 | väntar | du | Ge Rolf flasköppnare med magnet. |
| 3:29 | målruta |  | Ge Rolf flasköppnare med magnet |
| 3:29 | MÅL |  | Ge Rolf flasköppnare med magnet |
| 3:29 | sak | du | Ge Rolf flasköppnare med magnet. |
| 3:29 | pil |  | Ge Rolf flasköppnare med magnet |
| 3:29 | röst | du | Ge Rolf flasköppnare med magnet. · MÅL |
| 3:32 | klar | du | Ge Rolf flasköppnare med magnet. |
| 3:33 | toast | guld | ✅ |
| 3:33 | händelse | printKlar | sak=flaskoppnare n=1 |
| 3:33 | kvittens-bock |  | ✓ Printa flasköppnare med magnet |
| 3:33 | händelse | tagitUrPrint | sak=flaskoppnare n=1 |
| 3:35 | händelse | lagtIPostlada | sak=flaskoppnare rolf=1 jobb=false |
| 3:35 | struken | kedja | rolf1 |
| 3:35 | händelse | malKlart | id=rolf1-ge del=Dag 3 – En skrivare till och taket nasta=kopBatteri |
| 3:35 | väntar | du | Ali har ett gammalt bilbatteri. Då sparar jag strömmen. |
| 3:35 | målruta |  | Printa och sälj |
| 3:35 | MÅL |  | Printa och sälj |
| 3:36 | sak | du | Ali har ett gammalt bilbatteri. Då sparar jag strömmen. |
| 3:36 | pil |  | Printa och sälj |
| 3:36 | notis | tanke | 💭 Ali har ett gammalt bilbatteri. Då sparar jag strömmen. |
| 3:36 | röst | du | Ali har ett gammalt bilbatteri. Då sparar jag strömmen. · MÅL |
| 3:37 | väntar | mamma | Har du sovit nåt? Du har väl tandborste? Och äter du? Svara inte, jag vet att du är arg. ❤️ /Mamma |
| 3:39 | kvittens-bock |  | ✓ Ge Rolf flasköppnare med magnet |
| 3:39 | tanke | du | Hård plast. Lilla kvarnen skulle explodera. Eller jag. |
| 3:39 | väntar | du | Hård plast. Lilla kvarnen skulle explodera. Eller jag. |
| 3:40 | klar | du | Ali har ett gammalt bilbatteri. Då sparar jag strömmen. |
| 3:45 | händelse | printStart | sak=kruka |
| 3:51 | toast | guld | ✅ |
| 3:51 | händelse | printKlar | sak=kruka n=24 |
| 3:51 | händelse | tagitUrPrint | sak=kruka n=1 |
| 3:59 | aliSalt | ali | 105 |
| 3:59 | röst | ali | Dina krukor säljer. Tanterna i kvarteret älskar dem. · STORY |
| 3:59 | butiksbubbla | ali | Dina krukor säljer. Tanterna i kvarteret älskar dem. |
| 4:08 | händelse | printStart | sak=kruka |
| 4:13 | toast | guld | ✅ |
| 4:13 | händelse | printKlar | sak=kruka n=25 |
| 4:13 | händelse | tagitUrPrint | sak=kruka n=1 |
| 4:21 | aliSalt | ali | 105 |
| 4:30 | händelse | printStart | sak=kruka |
| 4:32 | paket |  | tanke |
| 4:32 | tanke | du | En toffla. Bara en. |
| 4:32 | väntar | du | En toffla. Bara en. |
| 4:32 | skratt | du | kvarnen spottar |
| 4:35 | toast | guld | ✅ |
| 4:35 | händelse | printKlar | sak=kruka n=26 |
| 4:36 | händelse | tagitUrPrint | sak=kruka n=1 |
| 4:43 | aliSalt | ali | 105 |
| 4:49 | sak | du | Hård plast. Lilla kvarnen skulle explodera. Eller jag. |
| 4:49 | notis | tanke | 💭 Hård plast. Lilla kvarnen skulle explodera. Eller jag. |
| 4:49 | röst | du | Hård plast. Lilla kvarnen skulle explodera. Eller jag. · REAKTION |
| 4:52 | händelse | printStart | sak=kruka |
| 4:53 | klar | du | Hård plast. Lilla kvarnen skulle explodera. Eller jag. |
| 4:54 | paket |  | tanke |
| 4:54 | tanke | du | Jaha, Rolf har hämtat flasköppnare med magnet. |
| 4:54 | struken | du | En toffla. Bara en. |
| 4:54 | väntar | du | Jaha, Rolf har hämtat flasköppnare med magnet. |
| 4:58 | toast | guld | ✅ |
| 4:58 | händelse | printKlar | sak=kruka n=27 |
| 4:58 | händelse | tagitUrPrint | sak=kruka n=1 |
| 5:03 | väntar | mamma | Var är du? |
| 5:05 | aliSalt | ali | 105 |
| 5:14 | händelse | printStart | sak=kruka |
| 5:16 | väntar | värld:TUUT TUUT! | TUUT TUUT! |
| 5:20 | toast | guld | ✅ |
| 5:20 | händelse | printKlar | sak=kruka n=28 |
| 5:20 | händelse | tagitUrPrint | sak=kruka n=1 |
| 5:27 | aliSalt | ali | 105 |
| 5:36 | händelse | printStart | sak=kruka |
| 5:38 | struken | värld:TUUT TUUT! | TUUT TUUT! |
| 5:42 | toast | guld | ✅ |
| 5:42 | händelse | printKlar | sak=kruka n=29 |
| 5:42 | händelse | tagitUrPrint | sak=kruka n=1 |
| 5:45 | väntar | mamma | Har du sovit nåt? Du har väl tandborste? Och äter du? Svara inte, jag vet att du är arg. ❤️ /Mamma |
| 5:49 | aliSalt | ali | 105 |
| 5:58 | händelse | printStart | sak=kruka |
| 6:02 | sak | du | Jaha, Rolf har hämtat flasköppnare med magnet. |
| 6:02 | notis | tanke | 💭 Jaha, Rolf har hämtat flasköppnare med magnet. |
| 6:02 | röst | du | Jaha, Rolf har hämtat flasköppnare med magnet. · REAKTION |
| 6:04 | toast | guld | ✅ |
| 6:04 | händelse | printKlar | sak=kruka n=30 |
| 6:04 | händelse | tagitUrPrint | sak=kruka n=1 |
| 6:06 | klar | du | Jaha, Rolf har hämtat flasköppnare med magnet. |
| 6:11 | aliSalt | ali | 105 |
| 6:21 | händelse | printStart | sak=kruka |
| 6:26 | paket |  | tanke |
| 6:26 | tanke | du | Den blev… spagetti. Ali kallar det modern konst. |
| 6:26 | väntar | du | Den blev… spagetti. Ali kallar det modern konst. |
| 6:26 | skratt | du | plastspagetti |
| 6:26 | toast | guld | ✅ |
| 6:26 | händelse | printKlar | sak=kruka n=31 |
| 6:26 | händelse | tagitUrPrint | sak=spagetti n=1 |
| 6:33 | skratt | du | Ali köper konst |
| 6:33 | aliSalt | ali | 3 |
| 6:39 | väntar | rolf | Morgonbulle på kontoret me polarna. Bengt har ny keps. Vi pratade om den i en timme. Den e grön. /R |
| 6:48 | sak | du | Den blev… spagetti. Ali kallar det modern konst. |
| 6:48 | notis | tanke | 💭 Den blev… spagetti. Ali kallar det modern konst. |
| 6:48 | röst | du | Den blev… spagetti. Ali kallar det modern konst. · REAKTION |
| 6:49 | skratt | du | falsk tuta |
| 6:52 | klar | du | Den blev… spagetti. Ali kallar det modern konst. |
| 6:55 | upplåst | strom | cykelbatteri |
| 6:55 | brott | RESERV | cykelbatteri (strom 41 av 15) |
| 6:55 | händelse | upplast | id=cykelbatteri flask=strom |
| 6:55 | paket |  | sms |
| 6:55 | väntar | ali | Ali här. Bilbatteriet ur min gamla Volvo står i lagret. Det sparar mer ström än powerbanken. |
| 6:56 | händelse | printStart | sak=kruka |
| 7:00 | sak | ali | Ali här. Bilbatteriet ur min gamla Volvo står i lagret. Det sparar mer ström än powerbanken. |
| 7:00 | sms | ali | Ali här. Bilbatteriet ur min gamla Volvo står i lagret. Det sparar mer ström än powerbanken. |
| 7:00 | sms-bubbla | ali | Ali här. Bilbatteriet ur min gamla Volvo står i lagret. Det sparar mer ström än powerbanken. |
| 7:00 | röst | ali | Ali här. Bilbatteriet ur min gamla Volvo står i lagret. Det sparar mer ström än powerbanken. · STORY |
| 7:02 | toast | guld | ✅ |
| 7:02 | händelse | printKlar | sak=kruka n=32 |
| 7:02 | händelse | tagitUrPrint | sak=kruka n=1 |
| 7:04 | skratt | du | däcket rullar iväg |
| 7:08 | klar | ali | Ali här. Bilbatteriet ur min gamla Volvo står i lagret. Det sparar mer ström än powerbanken. |
| 7:10 | aliSalt | ali | 105 |
| 7:14 | toast | guld | 🔋 Bilbatteriet ligger i handen – klicka på cykeln för att koppla in det |
| 7:14 | händelse | kopt | sak=cykelbatteri |
| 7:14 | röst | ali | Ali här. Batteriet ur min gamla Volvo. Bilen dog 2016. Batteriet vägrade. · STORY |
| 7:14 | butiksbubbla | ali | Ali här. Batteriet ur min gamla Volvo. Bilen dog 2016. Batteriet vägrade. |
| 7:22 | struken | kedja | dag2 |
| 7:22 | väntar | info:guld | 🔋 Bilbatteriet är inkopplat – skrivaren printar klart även när du slutar trampa |
| 7:22 | monterat | du | byggsats:cykelbatteri |
| 7:22 | händelse | monterat | sak=cykelbatteri |
| 7:22 | sak | info:guld | 🔋 Bilbatteriet är inkopplat – skrivaren printar klart även när du slutar trampa |
| 7:22 | kvitto-visas | info:guld | 🔋 Bilbatteriet är inkopplat – skrivaren printar klart även när du slutar trampa |
| 7:22 | toast | guld | 🔋 Bilbatteriet är inkopplat – skrivaren printar klart även när du slutar trampa |
| 7:22 | händelse | malKlart | id=kopBatteri del=Dag 3 – En skrivare till och taket nasta=ryggkorg |
| 7:22 | väntar | du | Jag springer för mycket. Med en ryggkorg bär jag tio saker. |
| 7:22 | MÅL |  | Plocka skräp och mal det |
| 7:24 | klar | info:guld | 🔋 Bilbatteriet är inkopplat – skrivaren printar klart även när du slutar trampa |
| 7:24 | målruta |  | Plocka skräp och mal det |
| 7:26 | kvittens-bock |  | ✓ Köp Alis gamla bilbatteri |
| 7:26 | sak | du | Jag springer för mycket. Med en ryggkorg bär jag tio saker. |
| 7:26 | pil |  | Plocka skräp och mal det |
| 7:26 | notis | tanke | 💭 Jag springer för mycket. Med en ryggkorg bär jag tio saker. |
| 7:26 | röst | du | Jag springer för mycket. Med en ryggkorg bär jag tio saker. · MÅL |
| 7:31 | klar | du | Jag springer för mycket. Med en ryggkorg bär jag tio saker. |
| 7:36 | händelse | printStart | sak=kruka |
| 7:41 | toast | guld | ✅ |
| 7:41 | händelse | printKlar | sak=kruka n=33 |
| 7:41 | händelse | tagitUrPrint | sak=kruka n=1 |
| 7:48 | aliSalt | ali | 105 |
| 7:57 | händelse | printStart | sak=kruka |
| 8:02 | toast | guld | ✅ |
| 8:02 | händelse | printKlar | sak=kruka n=34 |
| 8:02 | händelse | tagitUrPrint | sak=kruka n=1 |
| 8:09 | aliSalt | ali | 105 |
| 8:19 | händelse | printStart | sak=kruka |
| 8:24 | toast | guld | ✅ |
| 8:24 | händelse | printKlar | sak=kruka n=35 |
| 8:24 | händelse | tagitUrPrint | sak=kruka n=1 |
| 8:32 | aliSalt | ali | 105 |
| 8:37 | struken | bror | Pappa har tvättat bilen tre gånger den här veckan. Jag sa att du bor på tippen. Han frågade vilken modell sopbilen var. |
| 8:41 | händelse | printStart | sak=kruka |
| 8:46 | toast | guld | ✅ |
| 8:46 | händelse | printKlar | sak=kruka n=36 |
| 8:46 | händelse | tagitUrPrint | sak=kruka n=1 |
| 8:54 | aliSalt | ali | 105 |
| 9:01 | väntar | mamma | Var är du? |
| 9:03 | händelse | printStart | sak=kruka |
| 9:06 | skratt | du | falsk tuta |
| 9:06 | väntar | värld:TUUT! Hej grannen! | TUUT! Hej grannen! |
| 9:06 | sak | värld:TUUT! Hej grannen! | TUUT! Hej grannen! |
| 9:06 | bubbla |  | TUUT! Hej grannen! |
| 9:08 | toast | guld | ✅ |
| 9:08 | händelse | printKlar | sak=kruka n=37 |
| 9:08 | händelse | tagitUrPrint | sak=kruka n=1 |
| 9:09 | klar | värld:TUUT! Hej grannen! | TUUT! Hej grannen! |
| 9:16 | aliSalt | ali | 105 |
| 9:29 | tanke | du | Fastpressad. Den sitter som i betong. |
| 9:29 | väntar | du | Fastpressad. Den sitter som i betong. |
| 9:29 | sak | du | Fastpressad. Den sitter som i betong. |
| 9:29 | notis | tanke | 💭 Fastpressad. Den sitter som i betong. |
| 9:29 | röst | du | Fastpressad. Den sitter som i betong. · REAKTION |
| 9:33 | klar | du | Fastpressad. Den sitter som i betong. |
| 9:35 | upplåst | bara | ryggkorg |
| 9:35 | brott | UPPLÅST | ryggkorg (bara 6 av 6) |
| 9:35 | händelse | upplast | id=ryggkorg flask=bara |
| 9:35 | paket |  | tanke → sms |
| 9:35 | tanke | du | Säcken är full igen. Jag behöver något att bära mer i. |
| 9:35 | väntar | du | Säcken är full igen. Jag behöver något att bära mer i. |
| 9:35 | väntar | ali | Ali här. En ryggkorg. AI:n ritade den efter en bild på min mormor. Den rymmer tio. |
| 9:35 | sak | du | Säcken är full igen. Jag behöver något att bära mer i. |
| 9:35 | notis | tanke | 💭 Säcken är full igen. Jag behöver något att bära mer i. |
| 9:35 | röst | du | Säcken är full igen. Jag behöver något att bära mer i. · STORY |
| 9:40 | klar | du | Säcken är full igen. Jag behöver något att bära mer i. |
| 9:42 | händelse | printStart | sak=kruka |
| 9:47 | toast | guld | ✅ |
| 9:47 | händelse | printKlar | sak=kruka n=38 |
| 9:47 | händelse | tagitUrPrint | sak=kruka n=1 |
| 9:50 | sak | ali | Ali här. En ryggkorg. AI:n ritade den efter en bild på min mormor. Den rymmer tio. |
| 9:50 | sms | ali | Ali här. En ryggkorg. AI:n ritade den efter en bild på min mormor. Den rymmer tio. |
| 9:50 | sms-bubbla | ali | Ali här. En ryggkorg. AI:n ritade den efter en bild på min mormor. Den rymmer tio. |
| 9:50 | röst | ali | Ali här. En ryggkorg. AI:n ritade den efter en bild på min mormor. Den rymmer tio. · STORY |
| 9:55 | aliSalt | ali | 105 |
| 9:57 | klar | ali | Ali här. En ryggkorg. AI:n ritade den efter en bild på min mormor. Den rymmer tio. |
| 10:01 | toast | guld | 3D-modell köpt – printa ryggkorg på skrivaren |
| 10:01 | händelse | kopt | sak=ryggkorg |
| 10:10 | händelse | printStart | sak=byggsats:ryggkorg |
| 10:16 | toast | bra | Del 1 av 2 klar |
| 10:22 | händelse | printKlar | sak=byggsats:ryggkorg n=1 |
| 10:22 | toast | guld | ✅ |
| 10:22 | väntar | info:guld | Klicka för att ta på dig ryggkorg |
| 10:22 | händelse | tagitUrPrint | sak=byggsats:ryggkorg n=1 |
| 10:22 | paket |  | sms |
| 10:22 | väntar | ali | Ali här. Du printade Ryggkorg från min ritning. Och det FUNKAR? Jag har bara sett sånt på YouTube. |
| 10:22 | sak | info:guld | Klicka för att ta på dig ryggkorg |
| 10:22 | kvitto-visas | info:guld | Klicka för att ta på dig ryggkorg |
| 10:22 | toast | guld | Klicka för att ta på dig ryggkorg |
| 10:24 | klar | info:guld | Klicka för att ta på dig ryggkorg |
| 10:26 | väntar | info:guld | 🧺 Ryggkorgen sitter på! Du bär 16 skräp nu. |
| 10:26 | tog på | du | byggsats:ryggkorg |
| 10:26 | händelse | monterat | sak=ryggkorg |
| 10:26 | sak | info:guld | 🧺 Ryggkorgen sitter på! Du bär 16 skräp nu. |
| 10:26 | kvitto-visas | info:guld | 🧺 Ryggkorgen sitter på! Du bär 16 skräp nu. |
| 10:26 | toast | guld | 🧺 Ryggkorgen sitter på! Du bär 16 skräp nu. |
| 10:26 | händelse | malKlart | id=ryggkorg del=Dag 3 – En skrivare till och taket nasta=n2-bygg-arbetsbord |
| 10:26 | väntar | du | Ett arbetsbord bredvid skrivaren. Skrivare M ska stå på det. |
| 10:26 | MÅL |  | Bygg ett arbetsbord |
| 10:28 | klar | info:guld | 🧺 Ryggkorgen sitter på! Du bär 16 skräp nu. |
| 10:28 | målruta |  | Bygg ett arbetsbord |
| 10:30 | kvittens-bock |  | ✓ Bygg ryggkorgen – bär 10 skräp |
| 10:30 | sak | du | Ett arbetsbord bredvid skrivaren. Skrivare M ska stå på det. |
| 10:30 | pil |  | Bygg ett arbetsbord |
| 10:30 | notis | tanke | 💭 Ett arbetsbord bredvid skrivaren. Skrivare M ska stå på det. |
| 10:30 | röst | du | Ett arbetsbord bredvid skrivaren. Skrivare M ska stå på det. · MÅL |
| 10:30 | nick |  | nick:37 |
| 10:33 | toast | guld | 3D-modell köpt – printa arbetsbord på skrivaren |
| 10:33 | händelse | kopt | sak=bord |
| 10:35 | klar | du | Ett arbetsbord bredvid skrivaren. Skrivare M ska stå på det. |
| 10:42 | händelse | printStart | sak=byggsats:bord |
| 10:45 | sak | ali | Ali här. Du printade Ryggkorg från min ritning. Och det FUNKAR? Jag har bara sett sånt på YouTube. |
| 10:45 | sms | ali | Ali här. Du printade Ryggkorg från min ritning. Och det FUNKAR? Jag har bara sett sånt på YouTube. |
| 10:45 | sms-bubbla | ali | Ali här. Du printade Ryggkorg från min ritning. Och det FUNKAR? Jag har bara sett sånt på YouTube. |
| 10:45 | röst | ali | Ali här. Du printade Ryggkorg från min ritning. Och det FUNKAR? Jag har bara sett sånt på YouTube. · REAKTION |
| 10:49 | toast | bra | Del 1 av 3 klar |
| 10:54 | klar | ali | Ali här. Du printade Ryggkorg från min ritning. Och det FUNKAR? Jag har bara sett sånt på YouTube. |
| 10:56 | toast | bra | Del 2 av 3 klar |
| 11:01 | väntar | värld:TUUT! Hej grannen! | TUUT! Hej grannen! |
| 11:02 | sak | värld:TUUT! Hej grannen! | TUUT! Hej grannen! |
| 11:02 | bubbla |  | TUUT! Hej grannen! |
| 11:03 | händelse | printKlar | sak=byggsats:bord n=1 |
| 11:03 | toast | guld | ✅ |
| 11:04 | händelse | tagitUrPrint | sak=byggsats:bord n=1 |
| 11:05 | klar | värld:TUUT! Hej grannen! | TUUT! Hej grannen! |
| 11:06 | händelse | placerat | sak=bord |
| 11:06 | händelse | malKlart | id=n2-bygg-arbetsbord del=Dag 3 – En skrivare till och taket nasta=n2-bygg-skrivare-m |
| 11:06 | väntar | du | Skrivare M på bordet. Två skrivare, dubbelt så mycket. |
| 11:06 | målruta |  | Printa och sälj |
| 11:06 | MÅL |  | Printa och sälj |
| 11:06 | upplåst | skrivare | skrivare2 |
| 11:06 | brott | UPPLÅST | skrivare2 (skrivare 600 av 75) |
| 11:06 | händelse | upplast | id=skrivare2 flask=skrivare |
| 11:06 | paket |  | tanke → sms |
| 11:06 | tanke | du | Kvarnen hinner mer än skrivaren. Jag behöver en skrivare till. |
| 11:06 | väntar | du | Kvarnen hinner mer än skrivaren. Jag behöver en skrivare till. |
| 11:06 | väntar | ali | Ali här. Skrivare M har kommit. Två och en halv gånger snabbare. Snabbare än jag. Jag har inte varit snabb sedan 1998. |
| 11:07 | sak | du | Skrivare M på bordet. Två skrivare, dubbelt så mycket. |
| 11:07 | pil |  | Bygg Skrivare M på bordet |
| 11:07 | notis | tanke | 💭 Skrivare M på bordet. Två skrivare, dubbelt så mycket. |
| 11:07 | röst | du | Skrivare M på bordet. Två skrivare, dubbelt så mycket. · MÅL |
| 11:07 | nick |  | nick:38 |
| 11:10 | kvittens-bock |  | ✓ Bygg ett arbetsbord |
| 11:11 | klar | du | Skrivare M på bordet. Två skrivare, dubbelt så mycket. |
| 11:20 | skratt | du | Alis dyr-pling |
| 11:20 | toast | guld | 3D-modell köpt – printa skrivare m på skrivaren |
| 11:20 | händelse | kopt | sak=skrivare2 |
| 11:20 | struken | ali | Ali här. Skrivare M har kommit. Två och en halv gånger snabbare. Snabbare än jag. Jag har inte varit snabb sedan 1998. |
| 11:33 | väntar | info:fel | Fullt i händerna. |
| 11:33 | sak | info:fel | Fullt i händerna. |
| 11:33 | kvitto-visas | info:fel | Fullt i händerna. |
| 11:33 | toast | fel | Fullt i händerna. |
| 11:35 | klar | info:fel | Fullt i händerna. |
| 11:43 | händelse | printStart | sak=byggsats:skrivare2 |
| 11:45 | struken | mamma | Har du sovit nåt? Du har väl tandborste? Och äter du? Svara inte, jag vet att du är arg. ❤️ /Mamma |
| 11:52 | toast | bra | Del 1 av 5 klar |
| 12:01 | toast | bra | Del 2 av 5 klar |
| 12:10 | toast | bra | Del 3 av 5 klar |
| 12:19 | toast | bra | Del 4 av 5 klar |
| 12:22 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 12:32 | sak | du | Kvarnen hinner mer än skrivaren. Jag behöver en skrivare till. |
| 12:32 | notis | tanke | 💭 Kvarnen hinner mer än skrivaren. Jag behöver en skrivare till. |
| 12:32 | röst | du | Kvarnen hinner mer än skrivaren. Jag behöver en skrivare till. · STORY |
| 12:34 | skratt | du | falsk tuta |
| 12:37 | händelse | printKlar | sak=byggsats:skrivare2 n=1 |
| 12:37 | toast | guld | ✅ |
| 12:37 | klar | du | Kvarnen hinner mer än skrivaren. Jag behöver en skrivare till. |
| 12:41 | händelse | tagitUrPrint | sak=byggsats:skrivare2 n=1 |
| 12:41 | tanke | du | Slangen räcker inte ända hit. |
| 12:41 | väntar | du | Slangen räcker inte ända hit. |
| 12:41 | sak | du | Slangen räcker inte ända hit. |
| 12:41 | notis | tanke | 💭 Slangen räcker inte ända hit. |
| 12:41 | röst | du | Slangen räcker inte ända hit. · REAKTION |
| 12:43 | klar | du | Slangen räcker inte ända hit. |
| 12:44 | händelse | placerat | sak=skrivare2 |
| 12:44 | struken | kedja | skrivareM |
| 12:44 | paket |  | tanke |
| 12:44 | tanke | du | Den här måste stå i linjen vid kvarnen, annars når inte slangen. |
| 12:44 | väntar | du | Den här måste stå i linjen vid kvarnen, annars når inte slangen. |
| 12:44 | händelse | malKlart | id=n2-bygg-skrivare-m del=Dag 3 – En skrivare till och taket nasta=n2-lagg-plattak-skjulet |
| 12:44 | lapp-kö | 📱 Storebror | VA?! Du har byggt en skrivare TILL?? Du har typ en printfarm nu. Okej. Det är faktiskt ganska ballt. 🔥 |
| 12:44 | väntar | bror | VA?! Du har byggt en skrivare TILL?? Du har typ en printfarm nu. Okej. Det är faktiskt ganska ballt. 🔥 |
| 12:44 | väntar | du | Det regnar in. Plåt på taket, så slipper jag sova i en pöl. |
| 12:44 | MÅL |  | Lägg plåttak på skjulet |
| 12:45 | målruta |  | Lägg plåttak på skjulet |
| 12:47 | sak | du | Det regnar in. Plåt på taket, så slipper jag sova i en pöl. |
| 12:47 | pil |  | Lägg plåttak på skjulet |
| 12:47 | notis | tanke | 💭 Det regnar in. Plåt på taket, så slipper jag sova i en pöl. |
| 12:47 | röst | du | Det regnar in. Plåt på taket, så slipper jag sova i en pöl. · MÅL |
| 12:48 | kvittens-bock |  | ✓ Bygg Skrivare M på bordet |
| 12:49 | skratt | du | däcket rullar iväg |
| 12:52 | toast | guld | 3D-modell köpt – printa plåttak på skrivaren |
| 12:52 | händelse | kopt | sak=tak |
| 12:52 | klar | du | Det regnar in. Plåt på taket, så slipper jag sova i en pöl. |
| 13:01 | händelse | printStart | sak=byggsats:tak |
| 13:01 | toast | bra | 🔗 Slangen kopplad |
| 13:04 | toast | bra | Del 1 av 3 klar |
| 13:08 | toast | bra | Del 2 av 3 klar |
| 13:10 | toast | fel | Ingen ström – trampa cykeln |
| 13:20 | händelse | printKlar | sak=byggsats:tak n=1 |
| 13:20 | toast | guld | ✅ |
| 13:20 | händelse | tagitUrPrint | sak=byggsats:tak n=1 |
| 13:25 | väntar | info:guld | Plåttak på plats! Trivsel +12 · Ali betalar nu +0 % |
| 13:25 | sak | info:guld | Plåttak på plats! Trivsel +12 · Ali betalar nu +0 % |
| 13:25 | kvitto-visas | info:guld | Plåttak på plats! Trivsel +12 · Ali betalar nu +0 % |
| 13:25 | toast | guld | Plåttak på plats! Trivsel +12 · Ali betalar nu +0 % |
| 13:25 | händelse | malKlart | id=n2-lagg-plattak-skjulet del=Dag 3 – En skrivare till och taket nasta=sov3 |
| 13:25 | paket |  | lapp |
| 13:25 | väntar | du | Dag 3 är slut. Nu vet Rolf att jag bor HÄR. Benen orkar inte trampa mer. |
| 13:25 | MÅL |  | Klart för idag – sov när du vill |
| 13:27 | klar | info:guld | Plåttak på plats! Trivsel +12 · Ali betalar nu +0 % |
| 13:28 | målruta |  | Klart för idag – sov när du vill |
| 13:29 | kvittens-bock |  | ✓ Lägg plåttak på skjulet |
| 13:29 | sak | du | (nytt mål i rutan) |
| 13:29 | pil |  | Klart för idag – sov när du vill |
| 13:29 | klar | du | (nytt mål i rutan) |
| 13:31 | sak | du | Dag 3 är slut. Nu vet Rolf att jag bor HÄR. Benen orkar inte trampa mer. |
| 13:31 | lapp | 📔 Dagbok | Dag 3 är slut. Nu vet Rolf att jag bor HÄR. Benen orkar inte trampa mer. |
| 13:31 | meddelande | du | Dag 3 är slut. Nu vet Rolf att jag bor HÄR. Benen orkar inte trampa mer. |
| 13:31 | dagbokkort | du | Dag 3 är slut. Nu vet Rolf att jag bor HÄR. Benen orkar inte trampa mer. |
| 13:31 | röst | du | Dag 3. 19 dagar till jul. Dag 3 är slut. Nu vet Rolf att jag bor HÄR. Benen orkar inte trampa mer. · STORY |
| 13:39 | händelse | brevLast | id=kvall3 |
| 13:39 | klar | du | Dag 3 är slut. Nu vet Rolf att jag bor HÄR. Benen orkar inte trampa mer. |
| 13:39 | väntar | notis:🌇 Klockan är 21. Ali slår igen luckan.  | 🌇 Klockan är 21. Ali slår igen luckan. Dagens jobb är klart – gå in i skjulet och sov i sängen. |

<details><summary>Botens handlingar dag 3</summary>

- 0:00 — dag 3 börjar — (1732 kr)
- 0:08 popup: "FORTSÄTT" (1732 kr)
- 0:22 gå till Rolfs postlåda (28 m) (1732 kr)
- 0:27 panel: "Rolfs postlåda
Det här låg i l" (1792 kr)
- 0:29 gå till sätt nyckeln i låset (3 m) (1792 kr)
- 0:34 tjänar pengar till väntar på sopbilen (BO): 1792/1852 kr → printar blomkruka (105 kr) (1792 kr)
- 0:35 gå till skrivaren (7 m) (1792 kr)
- 0:37 printar Blomkruka (1792 kr)
- 0:43 tar ut 1 st ur skrivaren (1792 kr)
- 0:48 gå till Ali (28 m) (1792 kr)
- 0:48 öppnar Alis butik – sälja (1792 kr)
- 0:50 säljer hos Ali: +105 kr (1897 kr)
- 0:54 tjänar pengar till väntar på sopbilen (BO): 1897/1957 kr → printar blomkruka (105 kr) (1897 kr)
- 0:59 gå till skrivaren (25 m) (1897 kr)
- 1:00 printar Blomkruka (1897 kr)
- 1:06 tar ut 1 st ur skrivaren (1897 kr)
- 1:12 gå till Ali (25 m) (1897 kr)
- 1:12 öppnar Alis butik – sälja (1897 kr)
- 1:14 säljer hos Ali: +105 kr (2002 kr)
- 1:19 tjänar pengar till väntar på sopbilen (BO): 2002/2062 kr → printar blomkruka (105 kr) (2002 kr)
- 1:24 gå till skrivaren (25 m) (2002 kr)
- 1:26 printar Blomkruka (2002 kr)
- 1:32 tar ut 1 st ur skrivaren (2002 kr)
- 1:37 gå till Ali (25 m) (2002 kr)
- 1:37 öppnar Alis butik – sälja (2002 kr)
- 1:39 säljer hos Ali: +105 kr (2107 kr)
- 1:42 tjänar pengar till väntar på sopbilen (BO): 2107/2167 kr → printar blomkruka (105 kr) (2107 kr)
- 1:47 gå till skrivaren (25 m) (2107 kr)
- 1:49 printar Blomkruka (2107 kr)
- 2:16 plockar 8 skräp på gården (bär max 10) (2107 kr)
- 2:24 gå till kvarnen (38 m) (2107 kr)
- 2:25 gå till skrivaren (1 m) (2107 kr)
- 2:25 tar ut 1 st ur skrivaren (2107 kr)
- 2:31 gå till Ali (28 m) (2107 kr)
- 2:31 öppnar Alis butik – sälja (2107 kr)
- 2:33 säljer hos Ali: +105 kr (2212 kr)
- 2:36 tjänar pengar till väntar på sopbilen (BO): 2212/2272 kr → printar blomkruka (105 kr) (2212 kr)
- 2:41 gå till skrivaren (25 m) (2212 kr)
- 2:43 printar Blomkruka (2212 kr)
- 2:49 tar ut 1 st ur skrivaren (2212 kr)
- 2:54 gå till Ali (25 m) (2212 kr)
- 2:54 öppnar Alis butik – sälja (2212 kr)
- 2:56 säljer hos Ali: +105 kr (2317 kr)
- 3:06 gå till Rolfs postlåda (31 m) (2317 kr)
- 3:15 plockar 10 skräp på tippen (bär max 10) (2317 kr)
- 3:17 gå till kvarnen (8 m) (2317 kr)
- 3:27 gå till skrivaren (3 m) (2317 kr)
- 3:29 printar Flasköppnare med magnet (2317 kr)
- 3:34 tar ut 1 st ur skrivaren (2317 kr)
- 3:34 valj flaskoppnare: true, vald flaskoppnare, post {"l":null,"tr":null,"tm":[]}, nummer false (2317 kr)
- 3:35 gå till Rolfs postlåda (6 m) (2317 kr)
- 3:42 tjänar pengar till väntar på flaskhalsen för cykelbatteri: 2317/2357 kr → printar blomkruka (105 kr) (2317 kr)
- 3:44 gå till skrivaren (6 m) (2317 kr)
- 3:45 printar Blomkruka (2317 kr)
- 3:52 tar ut 1 st ur skrivaren (2317 kr)
- 3:57 gå till Ali (28 m) (2317 kr)
- 3:57 öppnar Alis butik – sälja (2317 kr)
- 3:59 säljer hos Ali: +105 kr (2422 kr)
- 4:01 tjänar pengar till väntar på flaskhalsen för cykelbatteri: 2422/2462 kr → printar blomkruka (105 kr) (2422 kr)
- 4:06 gå till skrivaren (25 m) (2422 kr)
- 4:08 printar Blomkruka (2422 kr)
- 4:14 tar ut 1 st ur skrivaren (2422 kr)
- 4:19 gå till Ali (25 m) (2422 kr)
- 4:19 öppnar Alis butik – sälja (2422 kr)
- 4:21 säljer hos Ali: +105 kr (2527 kr)
- 4:23 tjänar pengar till väntar på flaskhalsen för cykelbatteri: 2527/2567 kr → printar blomkruka (105 kr) (2527 kr)
- 4:28 gå till skrivaren (25 m) (2527 kr)
- 4:30 printar Blomkruka (2527 kr)
- 4:36 tar ut 1 st ur skrivaren (2527 kr)
- 4:41 gå till Ali (25 m) (2527 kr)
- 4:41 öppnar Alis butik – sälja (2527 kr)
- 4:43 säljer hos Ali: +105 kr (2632 kr)
- 4:45 tjänar pengar till väntar på flaskhalsen för cykelbatteri: 2632/2672 kr → printar blomkruka (105 kr) (2632 kr)
- 4:51 gå till skrivaren (25 m) (2632 kr)
- 4:52 printar Blomkruka (2632 kr)
- 4:58 tar ut 1 st ur skrivaren (2632 kr)
- 5:03 gå till Ali (25 m) (2632 kr)
- 5:03 öppnar Alis butik – sälja (2632 kr)
- 5:05 säljer hos Ali: +105 kr (2737 kr)
- 5:07 tjänar pengar till väntar på flaskhalsen för cykelbatteri: 2737/2777 kr → printar blomkruka (105 kr) (2737 kr)
- 5:13 gå till skrivaren (25 m) (2737 kr)
- 5:14 printar Blomkruka (2737 kr)
- 5:20 tar ut 1 st ur skrivaren (2737 kr)
- 5:26 gå till Ali (25 m) (2737 kr)
- 5:26 öppnar Alis butik – sälja (2737 kr)
- 5:27 säljer hos Ali: +105 kr (2842 kr)
- 5:30 tjänar pengar till väntar på flaskhalsen för cykelbatteri: 2842/2882 kr → printar blomkruka (105 kr) (2842 kr)
- 5:35 gå till skrivaren (25 m) (2842 kr)
- 5:36 printar Blomkruka (2842 kr)
- 5:42 tar ut 1 st ur skrivaren (2842 kr)
- 5:48 gå till Ali (25 m) (2842 kr)
- 5:48 öppnar Alis butik – sälja (2842 kr)
- 5:50 säljer hos Ali: +105 kr (2947 kr)
- 5:52 tjänar pengar till väntar på flaskhalsen för cykelbatteri: 2947/2987 kr → printar blomkruka (105 kr) (2947 kr)
- 5:57 gå till skrivaren (25 m) (2947 kr)
- 5:58 printar Blomkruka (2947 kr)
- 6:05 tar ut 1 st ur skrivaren (2947 kr)
- 6:10 gå till Ali (25 m) (2947 kr)
- 6:10 öppnar Alis butik – sälja (2947 kr)
- 6:12 säljer hos Ali: +105 kr (3052 kr)
- 6:14 tjänar pengar till väntar på flaskhalsen för cykelbatteri: 3052/3092 kr → printar blomkruka (105 kr) (3052 kr)
- 6:19 gå till skrivaren (25 m) (3052 kr)
- 6:21 printar Blomkruka (3052 kr)
- 6:27 tar ut 1 st ur skrivaren (3052 kr)
- 6:32 gå till Ali (25 m) (3052 kr)
- 6:32 öppnar Alis butik – sälja (3052 kr)
- 6:34 säljer hos Ali: +3 kr (3055 kr)
- 6:35 tjänar pengar till väntar på flaskhalsen för cykelbatteri: 3055/3092 kr → printar blomkruka (105 kr) (3055 kr)
- 6:46 plockar 5 skräp på tippen (bär max 10) (3055 kr)
- 6:48 gå till kvarnen (6 m) (3055 kr)
- 6:55 gå till skrivaren (3 m) (3055 kr)
- 6:56 printar Blomkruka (3055 kr)
- 7:02 tar ut 1 st ur skrivaren (3055 kr)
- 7:08 gå till Ali (28 m) (3055 kr)
- 7:08 öppnar Alis butik – sälja (3055 kr)
- 7:10 säljer hos Ali: +105 kr (3160 kr)
- 7:12 öppnar Alis butik – bilbatteriet (3160 kr)
- 7:15 köper cykelbatteri för 30 kr (3130 kr)
- 7:22 gå till koppla in bilbatteriet vid cykeln (24 m) (3130 kr)
- 7:33 tjänar pengar till väntar på flaskhalsen för ryggkorg: 3130/3170 kr → printar blomkruka (105 kr) (3130 kr)
- 7:34 gå till skrivaren (2 m) (3130 kr)
- 7:36 printar Blomkruka (3130 kr)
- 7:42 tar ut 1 st ur skrivaren (3130 kr)
- 7:47 gå till Ali (26 m) (3130 kr)
- 7:47 öppnar Alis butik – sälja (3130 kr)
- 7:49 säljer hos Ali: +105 kr (3235 kr)
- 7:50 tjänar pengar till väntar på flaskhalsen för ryggkorg: 3235/3275 kr → printar blomkruka (105 kr) (3235 kr)
- 7:55 gå till skrivaren (25 m) (3235 kr)
- 7:57 printar Blomkruka (3235 kr)
- 8:03 tar ut 1 st ur skrivaren (3235 kr)
- 8:08 gå till Ali (25 m) (3235 kr)
- 8:08 öppnar Alis butik – sälja (3235 kr)
- 8:10 säljer hos Ali: +105 kr (3340 kr)
- 8:12 tjänar pengar till väntar på flaskhalsen för ryggkorg: 3340/3380 kr → printar blomkruka (105 kr) (3340 kr)
- 8:17 gå till skrivaren (25 m) (3340 kr)
- 8:19 printar Blomkruka (3340 kr)
- 8:25 tar ut 1 st ur skrivaren (3340 kr)
- 8:30 gå till Ali (25 m) (3340 kr)
- 8:30 öppnar Alis butik – sälja (3340 kr)
- 8:32 säljer hos Ali: +105 kr (3445 kr)
- 8:34 tjänar pengar till väntar på flaskhalsen för ryggkorg: 3445/3485 kr → printar blomkruka (105 kr) (3445 kr)
- 8:39 gå till skrivaren (25 m) (3445 kr)
- 8:41 printar Blomkruka (3445 kr)
- 8:47 tar ut 1 st ur skrivaren (3445 kr)
- 8:52 gå till Ali (25 m) (3445 kr)
- 8:52 öppnar Alis butik – sälja (3445 kr)
- 8:54 säljer hos Ali: +105 kr (3550 kr)
- 8:56 tjänar pengar till väntar på flaskhalsen för ryggkorg: 3550/3590 kr → printar blomkruka (105 kr) (3550 kr)
- 9:01 gå till skrivaren (25 m) (3550 kr)
- 9:03 printar Blomkruka (3550 kr)
- 9:09 tar ut 1 st ur skrivaren (3550 kr)
- 9:14 gå till Ali (25 m) (3550 kr)
- 9:14 öppnar Alis butik – sälja (3550 kr)
- 9:16 säljer hos Ali: +105 kr (3655 kr)
- 9:18 tjänar pengar till väntar på flaskhalsen för ryggkorg: 3655/3695 kr → printar blomkruka (105 kr) (3655 kr)
- 9:33 plockar 10 skräp på tippen (bär max 10) (3655 kr)
- 9:35 gå till kvarnen (11 m) (3655 kr)
- 9:40 gå till skrivaren (3 m) (3655 kr)
- 9:42 printar Blomkruka (3655 kr)
- 9:48 tar ut 1 st ur skrivaren (3655 kr)
- 9:53 gå till Ali (28 m) (3655 kr)
- 9:53 öppnar Alis butik – sälja (3655 kr)
- 9:55 säljer hos Ali: +105 kr (3760 kr)
- 9:59 öppnar Alis butik – köpa ryggkorg (3760 kr)
- 10:02 köper ryggkorg för 120 kr (3640 kr)
- 10:08 gå till skrivaren (25 m) (3640 kr)
- 10:10 printar Ryggkorg (2 delar) (3640 kr)
- 10:22 tar ut 1 st ur skrivaren (3640 kr)
- 10:26 tar på ryggkorg (3640 kr)
- 10:32 gå till Ali (25 m) (3640 kr)
- 10:32 öppnar Alis butik – köpa arbetsbord (3640 kr)
- 10:34 köper bord för 120 kr (3520 kr)
- 10:40 gå till skrivaren (25 m) (3520 kr)
- 10:42 printar Arbetsbord (3 delar) (3520 kr)
- 11:05 tar ut 1 st ur skrivaren (3520 kr)
- 11:05 gå till platsen för arbetsbord (2 m) (3520 kr)
- 11:06 ställer ut arbetsbord (3520 kr)
- 11:18 gå till Ali (24 m) (3520 kr)
- 11:18 öppnar Alis butik – köpa skrivare m (3520 kr)
- 11:20 köper skrivare2 för 500 kr (3020 kr)
- 11:33 plockar 4 skräp på tippen (bär max 16) (3020 kr)
- 11:35 gå till kvarnen (10 m) (3020 kr)
- 11:41 gå till skrivaren (3 m) (3020 kr)
- 11:43 printar Skrivare M (5 delar) (3020 kr)
- 12:27 plockar 2 skräp på tippen (bär max 16) (3020 kr)
- 12:29 gå till kvarnen (9 m) (3020 kr)
- 12:41 gå till skrivaren (3 m) (3020 kr)
- 12:41 tar ut 1 st ur skrivaren (3020 kr)
- 12:43 gå till platsen för skrivare m (5 m) (3020 kr)
- 12:44 ställer ut skrivare m (3020 kr)
- 12:50 gå till Ali (24 m) (3020 kr)
- 12:50 öppnar Alis butik – köpa plåttak (3020 kr)
- 12:53 köper tak för 250 kr (2770 kr)
- 12:59 gå till skrivaren (24 m) (2770 kr)
- 13:01 printar Plåttak (3 delar) (2770 kr)
- 13:21 tar ut 1 st ur skrivaren (2770 kr)
- 13:25 gå till skjulet (17 m) (2770 kr)
- 13:39 popup: "FORTSÄTT" (2770 kr)
- 13:42 gå till sängen (1 m) (2770 kr)

</details>

## Dag 4

| Tid | Källa | Vem | Text |
|---|---|---|---|
| 13:44 | vara | ali | ingen |
| 13:44 | händelse | malKlart | id=sov3 del=Dag 3 – En skrivare till och taket nasta=rolf2-brev |
| 13:44 | vara | ali | kruka |
| 13:44 | MÅL |  | Vänta på sopbilen. Den lämnar något. |
| 13:45 | väntar | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått TAK. Och arbetsbord. Skriv in, Gunnar. Du skriver aldrig in. |
| 13:45 | radio | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått TAK. Och arbetsbord. Skriv in, Gunnar. Du skriver aldrig in. |
| 13:45 | skratt | du | Radio-Kjelle |
| 13:45 | skratt | du | tummen på fotot |
| 13:45 | väntar | foto | Tak över huvudet (och min tumme) |
| 13:45 | paket |  | tanke |
| 13:45 | tanke | du | I natt somnar jag torr. Det börjar bli ett hem. |
| 13:45 | väntar | du | I natt somnar jag torr. Det börjar bli ett hem. |
| 0:01 | händelse | dagenBorjar | dag=4 |
| 0:01 | meddelande | du | Dag 4. 18 dagar till jul. Drar det i skjulet blir natten lång. |
| 0:01 | dagbokkort | du | Kärran och mer vind · Dag 4. 18 dagar till jul. Drar det i skjulet blir natten lång. |
| 0:01 | röst | du | Dag 4. 18 dagar till jul. Kärran och mer vind. Drar det i skjulet blir natten lång. · STORY |
| 0:08 | notis | nytt | Ali vill ha idag: Blomkruka – +50 % hela dagen (105 kr just nu)📈 Igår: 21 printat · 20 sålt |
| 0:09 | händelse | morgonkortStangt | dag=4 |
| 0:12 | målruta |  | Vänta på sopbilen. Den lämnar något. |
| 0:14 | sak | du | (nytt mål i rutan) |
| 0:14 | pil |  | Vänta på sopbilen. Den lämnar något. |
| 0:14 | klar | du | (nytt mål i rutan) |
| 0:16 | struken | notis:🌇 Klockan är 21. Ali slår igen luckan.  | 🌇 Klockan är 21. Ali slår igen luckan. Dagens jobb är klart – gå in i skjulet och sov i sängen. |
| 0:16 | struken | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått TAK. Och arbetsbord. Skriv in, Gunnar. Du skriver aldrig in. |
| 0:16 | struken | mamma | Var är du? |
| 0:22 | väntar | info:bra | 🛒 4 skräp från famnen i skottkärran |
| 0:30 | väntar | rolf | PERFEKT öppnare! Kärran vid lådan ä din. Den gnisslar. Precis som ja. Skriv ditt nummer på en lapp, så slipper ja skriva brev. /Rolf |
| 0:30 | sak | info:bra | 🛒 4 skräp från famnen i skottkärran |
| 0:30 | kvitto-visas | info:bra | 🛒 4 skräp från famnen i skottkärran |
| 0:30 | toast | bra | 🛒 4 skräp från famnen i skottkärran |
| 0:32 | klar | info:bra | 🛒 4 skräp från famnen i skottkärran |
| 0:34 | händelse | printStart | sak=kruka |
| 0:36 | toast | guld | ✅ |
| 0:36 | händelse | printKlar | sak=kruka n=39 |
| 0:37 | händelse | tagitUrPrint | sak=kruka n=1 |
| 0:42 | sak | bror | VA?! Du har byggt en skrivare TILL?? Du har typ en printfarm nu. Okej. Det är faktiskt ganska ballt. 🔥 |
| 0:42 | sms | bror | VA?! Du har byggt en skrivare TILL?? Du har typ en printfarm nu. Okej. Det är faktiskt ganska ballt. 🔥 |
| 0:42 | sms-bubbla | bror | VA?! Du har byggt en skrivare TILL?? Du har typ en printfarm nu. Okej. Det är faktiskt ganska ballt. 🔥 |
| 0:42 | röst | bror | VA?! Du har byggt en skrivare TILL?? Du har typ en printfarm nu. Okej. Det är faktiskt ganska ballt. 🔥 · STORY |
| 0:43 | väntar | bud | (tips) |
| 0:43 | butiksbubbla | ali | Semester? Jag hade semester 2009. Det regnade. |
| 0:45 | aliSalt | ali | 105 |
| 0:46 | väntar | ali | Semester? Jag hade semester 2009. Det regnade. |
| 0:50 | klar | bror | VA?! Du har byggt en skrivare TILL?? Du har typ en printfarm nu. Okej. Det är faktiskt ganska ballt. 🔥 |
| 0:52 | sak | ali | Semester? Jag hade semester 2009. Det regnade. |
| 0:52 | röst | ali | Semester? Jag hade semester 2009. Det regnade. · STORY |
| 0:56 | klar | ali | Semester? Jag hade semester 2009. Det regnade. |
| 0:58 | sak | bud | (tips) |
| 0:58 | väntar | du | En skottkärra! Jag väljer den med hjulet och kör den full med skräp. |
| 0:59 | klar | bud | (tips) |
| 1:01 | sak | du | En skottkärra! Jag väljer den med hjulet och kör den full med skräp. |
| 1:01 | röst | du | En skottkärra! Jag väljer den med hjulet och kör den full med skräp. · MÅL |
| 1:06 | händelse | printStart | sak=kruka |
| 1:07 | klar | du | En skottkärra! Jag väljer den med hjulet och kör den full med skräp. |
| 1:08 | paket |  | tanke |
| 1:08 | tanke | du | En badanka. Den överlevde kvarnen. |
| 1:08 | väntar | du | En badanka. Den överlevde kvarnen. |
| 1:08 | skratt | du | kvarnen spottar |
| 1:09 | toast | guld | ✅ |
| 1:09 | händelse | printKlar | sak=kruka n=40 |
| 1:09 | händelse | tagitUrPrint | sak=kruka n=1 |
| 1:14 | väntar | ali | Akta pölen. Den har varit där sedan 2014. |
| 1:17 | aliSalt | ali | 105 |
| 1:17 | sak | du | Den här måste stå i linjen vid kvarnen, annars når inte slangen. |
| 1:17 | notis | tanke | 💭 Den här måste stå i linjen vid kvarnen, annars når inte slangen. |
| 1:17 | röst | du | Den här måste stå i linjen vid kvarnen, annars når inte slangen. · STORY |
| 1:20 | skratt | du | falsk tuta |
| 1:23 | klar | du | Den här måste stå i linjen vid kvarnen, annars når inte slangen. |
| 1:31 | sak | foto | Tak över huvudet (och min tumme) |
| 1:31 | foto | du | Tak över huvudet (och min tumme) |
| 1:32 | händelse | printStart | sak=kruka |
| 1:33 | klar | foto | Tak över huvudet (och min tumme) |
| 1:34 | toast | guld | ✅ |
| 1:34 | händelse | printKlar | sak=kruka n=41 |
| 1:35 | händelse | tagitUrPrint | sak=kruka n=1 |
| 1:42 | aliSalt | ali | 105 |
| 1:43 | sak | du | I natt somnar jag torr. Det börjar bli ett hem. |
| 1:43 | notis | tanke | 💭 I natt somnar jag torr. Det börjar bli ett hem. |
| 1:43 | röst | du | I natt somnar jag torr. Det börjar bli ett hem. · STORY |
| 1:47 | klar | du | I natt somnar jag torr. Det börjar bli ett hem. |
| 1:56 | sak | du | En badanka. Den överlevde kvarnen. |
| 1:56 | notis | tanke | 💭 En badanka. Den överlevde kvarnen. |
| 1:56 | röst | du | En badanka. Den överlevde kvarnen. · REAKTION |
| 1:56 | händelse | printStart | sak=kruka |
| 1:58 | klar | du | En badanka. Den överlevde kvarnen. |
| 1:59 | toast | guld | ✅ |
| 1:59 | händelse | printKlar | sak=kruka n=42 |
| 1:59 | händelse | tagitUrPrint | sak=kruka n=1 |
| 2:07 | aliSalt | ali | 105 |
| 2:20 | väntar | värld:Mjau. | Mjau. |
| 2:21 | toast | skak | handen skakar: fullt |
| 2:32 | händelse | printStart | sak=kruka |
| 2:35 | toast | guld | ✅ |
| 2:35 | händelse | printKlar | sak=kruka n=43 |
| 2:35 | händelse | tagitUrPrint | sak=kruka n=1 |
| 2:37 | väntar | värld:TUUT! Hej grannen! | TUUT! Hej grannen! |
| 2:37 | paket |  | ge |
| 2:37 | väntar |  | (läget ändras) |
| 2:37 | skratt | du | falsk tuta |
| 2:38 | sak |  | (läget ändras) |
| 2:38 | brev | rolf | rolf:2 |
| 2:38 | klar |  | (läget ändras) |
| 2:40 | struken | värld:Mjau. | Mjau. |
| 2:43 | aliSalt | ali | 105 |
| 2:47 | väntar | bud | (tips) |
| 2:47 | sak | bud | (tips) |
| 2:49 | klar | bud | (tips) |
| 2:51 | meddelande | mamma | Har du borstat tänderna idag? Ljug inte. Jag hör om du ljuger. Även på sms. |
| 2:52 | röst | mamma | Har du borstat tänderna idag? Ljug inte. Jag hör om du ljuger. Även på sms. · STORY |
| 3:00 | paket |  | sms |
| 3:00 | väntar | mamma | Bra. Jag tror dig. Nästan. |
| 3:08 | händelse | brevLast | id=m_tandborste |
| 3:10 | struken | värld:TUUT! Hej grannen! | TUUT! Hej grannen! |
| 3:11 | väntar | rolf | Tjo. Ska grilla på lördag. Min grillspade smälte. Kan du göra en sån hä? /Rolf 🍖​ |
| 3:11 | paket |  | ge |
| 3:11 | väntar |  | (läget ändras) |
| 3:11 | sak | rolf | Tjo. Ska grilla på lördag. Min grillspade smälte. Kan du göra en sån hä? /Rolf 🍖​ |
| 3:11 | lapp | Brev från Rolf | Tjo. Ska grilla på lördag. Min grillspade smälte. Kan du göra en sån hä? /Rolf 🍖​ |
| 3:11 | röst | rolf | Tjo. Ska grilla på lördag. Min grillspade smälte. Kan du göra en sån hä? /Rolf 🍖​ · STORY |
| 3:11 | händelse | malKlart | id=rolf2-brev del=Dag 4 – Kärran och mer vind nasta=rolf2-printa |
| 3:11 | väntar | du | Printa grillspade. |
| 3:11 | MÅL |  | Printa grillspade |
| 3:14 | målruta |  | Printa grillspade |
| 3:15 | händelse | printStart | sak=grillspade |
| 3:15 | händelse | malKlart | id=rolf2-printa del=Dag 4 – Kärran och mer vind nasta=rolf2-ge |
| 3:15 | väntar | du | Ge Rolf grillspade. |
| 3:15 | MÅL |  | Ge Rolf grillspade |
| 3:17 | klar | rolf | Tjo. Ska grilla på lördag. Min grillspade smälte. Kan du göra en sån hä? /Rolf 🍖​ |
| 3:17 | händelse | brevLast | id=rolf:2 |
| 3:18 | målruta |  | Ge Rolf grillspade |
| 3:19 | toast | guld | ✅ |
| 3:19 | händelse | printKlar | sak=grillspade n=1 |
| 3:19 | kvittens-bock |  | ✓ Printa grillspade |
| 3:19 | händelse | tagitUrPrint | sak=grillspade n=1 |
| 3:19 | struken | du | Printa grillspade. |
| 3:19 | sak |  | (läget ändras) |
| 3:19 | klar |  | (läget ändras) |
| 3:19 | sak | du | Ge Rolf grillspade. |
| 3:19 | pil |  | Ge Rolf grillspade |
| 3:19 | röst | du | Ge Rolf grillspade. · MÅL |
| 3:20 | upplåst | skrivare | trim_skrivare2 |
| 3:20 | brott | UPPLÅST | trim_skrivare2 (skrivare 135 av 75) |
| 3:20 | händelse | upplast | id=trim_skrivare2 flask=skrivare |
| 3:20 | paket |  | tanke → sms |
| 3:20 | tanke | du | Skrivare M hinner inte heller. Den kunde gå fortare. |
| 3:20 | väntar | du | Skrivare M hinner inte heller. Den kunde gå fortare. |
| 3:20 | väntar | ali | Ali här. Skrivartrim igen. Nästa nivå. Den här gången skruvade jag åt rätt håll. |
| 3:22 | klar | du | Ge Rolf grillspade. |
| 3:24 | sak | du | Skrivare M hinner inte heller. Den kunde gå fortare. |
| 3:24 | notis | tanke | 💭 Skrivare M hinner inte heller. Den kunde gå fortare. |
| 3:24 | röst | du | Skrivare M hinner inte heller. Den kunde gå fortare. · STORY |
| 3:28 | klar | du | Skrivare M hinner inte heller. Den kunde gå fortare. |
| 3:32 | händelse | lagtIPostlada | sak=grillspade rolf=2 jobb=false |
| 3:32 | struken | kedja | rolf2 |
| 3:32 | händelse | malKlart | id=rolf2-ge del=Dag 4 – Kärran och mer vind nasta=n3-tom-full-karra |
| 3:32 | väntar | du | Kärran rymmer massor. Jag fyller den och tippar allt i kvarnen. |
| 3:32 | målruta |  | Töm en full kärra i kvarnen |
| 3:32 | MÅL |  | Töm en full kärra i kvarnen |
| 3:32 | sak | du | Kärran rymmer massor. Jag fyller den och tippar allt i kvarnen. |
| 3:32 | pil |  | Töm en full kärra i kvarnen |
| 3:32 | notis | tanke | 💭 Kärran rymmer massor. Jag fyller den och tippar allt i kvarnen. |
| 3:32 | röst | du | Kärran rymmer massor. Jag fyller den och tippar allt i kvarnen. · MÅL |
| 3:36 | kvittens-bock |  | ✓ Ge Rolf grillspade |
| 3:37 | klar | du | Kärran rymmer massor. Jag fyller den och tippar allt i kvarnen. |
| 3:39 | väntar | info:bra | 🛒 4 skräp från famnen i skottkärran |
| 3:39 | sak | info:bra | 🛒 4 skräp från famnen i skottkärran |
| 3:39 | kvitto-visas | info:bra | 🛒 4 skräp från famnen i skottkärran |
| 3:39 | toast | bra | 🛒 4 skräp från famnen i skottkärran |
| 3:40 | karraKlick | du | träff |
| 3:41 | klar | info:bra | 🛒 4 skräp från famnen i skottkärran |
| 3:42 | karraKlick | du | träff |
| 3:43 | karraKlick | du | träff |
| 3:44 | karraKlick | du | träff |
| 3:45 | karraKlick | du | träff |
| 3:46 | karraKlick | du | träff |
| 3:47 | karraKlick | du | träff |
| 3:48 | karraKlick | du | träff |
| 3:50 | tanke | du | Det får inte plats. Jag behöver något att tippa i. |
| 3:50 | väntar | du | Det får inte plats. Jag behöver något att tippa i. |
| 3:50 | väntar | info:bra | 11 st i tratten · 5 st på marken bredvid |
| 3:50 | sak | info:bra | 11 st i tratten · 5 st på marken bredvid |
| 3:50 | kvitto-visas | info:bra | 11 st i tratten · 5 st på marken bredvid |
| 3:50 | toast | bra | 11 st i tratten · 5 st på marken bredvid |
| 3:50 | händelse | malKlart | id=n3-tom-full-karra del=Dag 4 – Kärran och mer vind nasta=sophallare |
| 3:50 | väntar | du | En sophållare bakom kvarnen. Då matar den sig själv. |
| 3:50 | MÅL |  | Plocka skräp och mal det |
| 3:52 | klar | info:bra | 11 st i tratten · 5 st på marken bredvid |
| 3:54 | målruta |  | Plocka skräp och mal det |
| 3:54 | kvittens-bock |  | ✓ Töm en full kärra i kvarnen |
| 3:54 | sak | du | En sophållare bakom kvarnen. Då matar den sig själv. |
| 3:54 | pil |  | Plocka skräp och mal det |
| 3:54 | notis | tanke | 💭 En sophållare bakom kvarnen. Då matar den sig själv. |
| 3:54 | röst | du | En sophållare bakom kvarnen. Då matar den sig själv. · MÅL |
| 3:59 | klar | du | En sophållare bakom kvarnen. Då matar den sig själv. |
| 4:01 | sak | du | Det får inte plats. Jag behöver något att tippa i. |
| 4:01 | notis | tanke | 💭 Det får inte plats. Jag behöver något att tippa i. |
| 4:01 | röst | du | Det får inte plats. Jag behöver något att tippa i. · STORY |
| 4:05 | klar | du | Det får inte plats. Jag behöver något att tippa i. |
| 4:06 | händelse | printStart | sak=kruka |
| 4:08 | toast | guld | ✅ |
| 4:08 | händelse | printKlar | sak=kruka n=44 |
| 4:09 | händelse | tagitUrPrint | sak=kruka n=1 |
| 4:13 | sak | mamma | Bra. Jag tror dig. Nästan. |
| 4:13 | sms | mamma | Bra. Jag tror dig. Nästan. |
| 4:13 | sms-bubbla | mamma | Bra. Jag tror dig. Nästan. |
| 4:13 | röst | mamma | Bra. Jag tror dig. Nästan. · STORY |
| 4:16 | klar | mamma | Bra. Jag tror dig. Nästan. |
| 4:17 | aliSalt | ali | 105 |
| 4:25 | händelse | printStart | sak=kruka |
| 4:28 | toast | guld | ✅ |
| 4:28 | händelse | printKlar | sak=kruka n=45 |
| 4:28 | händelse | tagitUrPrint | sak=kruka n=1 |
| 4:36 | aliSalt | ali | 105 |
| 4:39 | väntar | bud | (tips) |
| 4:39 | sak | bud | (tips) |
| 4:41 | klar | bud | (tips) |
| 4:43 | meddelande | mamma | Jag läste om en man som bodde på en soptipp. Han blev attackerad av måsar. Finns det måsar där? |
| 4:44 | röst | mamma | Jag läste om en man som bodde på en soptipp. Han blev attackerad av måsar. Finns det måsar där? · STORY |
| 4:55 | paket |  | sms |
| 4:55 | väntar | mamma | En katt? Är den vaccinerad? Rör den inte. Eller jo. Ge den en macka. |
| 5:05 | händelse | brevLast | id=m_masar |
| 5:07 | händelse | printStart | sak=kruka |
| 5:10 | toast | guld | ✅ |
| 5:10 | händelse | printKlar | sak=kruka n=46 |
| 5:10 | händelse | tagitUrPrint | sak=kruka n=1 |
| 5:16 | sak | ali | Ali här. Skrivartrim igen. Nästa nivå. Den här gången skruvade jag åt rätt håll. |
| 5:16 | sms | ali | Ali här. Skrivartrim igen. Nästa nivå. Den här gången skruvade jag åt rätt håll. |
| 5:16 | sms-bubbla | ali | Ali här. Skrivartrim igen. Nästa nivå. Den här gången skruvade jag åt rätt håll. |
| 5:16 | röst | ali | Ali här. Skrivartrim igen. Nästa nivå. Den här gången skruvade jag åt rätt håll. · STORY |
| 5:18 | aliSalt | ali | 105 |
| 5:20 | paket |  | tanke |
| 5:20 | tanke | du | Jaha, Rolf har hämtat grillspade. |
| 5:20 | väntar | du | Jaha, Rolf har hämtat grillspade. |
| 5:23 | klar | ali | Ali här. Skrivartrim igen. Nästa nivå. Den här gången skruvade jag åt rätt håll. |
| 5:32 | händelse | printStart | sak=kruka |
| 5:35 | toast | guld | ✅ |
| 5:35 | händelse | printKlar | sak=kruka n=47 |
| 5:35 | händelse | tagitUrPrint | sak=kruka n=1 |
| 5:36 | skratt | du | däcket rullar iväg |
| 5:36 | paket |  | tanke |
| 5:36 | tanke | du | Däcket ville inte stanna. Jag förstår det. |
| 5:36 | väntar | du | Däcket ville inte stanna. Jag förstår det. |
| 5:36 | sak | du | Däcket ville inte stanna. Jag förstår det. |
| 5:36 | notis | tanke | 💭 Däcket ville inte stanna. Jag förstår det. |
| 5:36 | röst | du | Däcket ville inte stanna. Jag förstår det. · REAKTION |
| 5:39 | klar | du | Däcket ville inte stanna. Jag förstår det. |
| 5:43 | skratt | du | falsk tuta |
| 5:43 | aliSalt | ali | 105 |
| 5:52 | händelse | printStart | sak=kruka |
| 5:55 | toast | guld | ✅ |
| 5:55 | händelse | printKlar | sak=kruka n=48 |
| 5:55 | händelse | tagitUrPrint | sak=kruka n=1 |
| 6:03 | aliSalt | ali | 105 |
| 6:12 | händelse | printStart | sak=kruka |
| 6:14 | toast | guld | ✅ |
| 6:14 | händelse | printKlar | sak=kruka n=49 |
| 6:15 | händelse | tagitUrPrint | sak=kruka n=1 |
| 6:22 | aliSalt | ali | 105 |
| 6:31 | händelse | printStart | sak=kruka |
| 6:32 | sak | du | Jaha, Rolf har hämtat grillspade. |
| 6:32 | notis | tanke | 💭 Jaha, Rolf har hämtat grillspade. |
| 6:32 | röst | du | Jaha, Rolf har hämtat grillspade. · REAKTION |
| 6:34 | toast | guld | ✅ |
| 6:34 | händelse | printKlar | sak=kruka n=50 |
| 6:34 | klar | du | Jaha, Rolf har hämtat grillspade. |
| 6:37 | händelse | tagitUrPrint | sak=kruka n=1 |
| 6:45 | aliSalt | ali | 105 |
| 6:46 | sak | mamma | En katt? Är den vaccinerad? Rör den inte. Eller jo. Ge den en macka. |
| 6:46 | sms | mamma | En katt? Är den vaccinerad? Rör den inte. Eller jo. Ge den en macka. |
| 6:46 | sms-bubbla | mamma | En katt? Är den vaccinerad? Rör den inte. Eller jo. Ge den en macka. |
| 6:46 | röst | mamma | En katt? Är den vaccinerad? Rör den inte. Eller jo. Ge den en macka. · STORY |
| 6:52 | klar | mamma | En katt? Är den vaccinerad? Rör den inte. Eller jo. Ge den en macka. |
| 7:00 | händelse | printStart | sak=kruka |
| 7:03 | toast | guld | ✅ |
| 7:03 | händelse | printKlar | sak=kruka n=51 |
| 7:04 | händelse | tagitUrPrint | sak=kruka n=1 |
| 7:11 | aliSalt | ali | 105 |
| 7:14 | struken | ali | Akta pölen. Den har varit där sedan 2014. |
| 7:20 | händelse | printStart | sak=kruka |
| 7:23 | skratt | du | plastspagetti |
| 7:23 | toast | guld | ✅ |
| 7:23 | händelse | printKlar | sak=kruka n=52 |
| 7:24 | händelse | tagitUrPrint | sak=spagetti n=1 |
| 7:31 | skratt | du | Ali köper konst |
| 7:31 | aliSalt | ali | 3 |
| 7:34 | upplåst | bara | matarband |
| 7:34 | brott | RESERV | matarband (bara 0 av 6) |
| 7:34 | händelse | upplast | id=matarband flask=bara |
| 7:34 | paket |  | sms |
| 7:34 | väntar | ali | Ali här. 🗑️ Sophållaren. Jag frågade AI:n hur man slipper bära skräp. Den gjorde det här. Den har mer fritid än jag. Suck. |
| 7:35 | sak | ali | Ali här. 🗑️ Sophållaren. Jag frågade AI:n hur man slipper bära skräp. Den gjorde det här. Den har mer fritid än jag. Suck. |
| 7:35 | sms | ali | Ali här. 🗑️ Sophållaren. Jag frågade AI:n hur man slipper bära skräp. Den gjorde det här. Den har mer fritid än jag. Suck. |
| 7:35 | sms-bubbla | ali | Ali här. 🗑️ Sophållaren. Jag frågade AI:n hur man slipper bära skräp. Den gjorde det här. Den har mer fritid än jag. Suck. |
| 7:35 | röst | ali | Ali här. 🗑️ Sophållaren. Jag frågade AI:n hur man slipper bära skräp. Den gjorde det här. Den har mer fritid än jag. Suck. · STORY |
| 7:39 | händelse | printStart | sak=kruka |
| 7:42 | toast | guld | ✅ |
| 7:42 | händelse | printKlar | sak=kruka n=53 |
| 7:42 | händelse | tagitUrPrint | sak=kruka n=1 |
| 7:45 | klar | ali | Ali här. 🗑️ Sophållaren. Jag frågade AI:n hur man slipper bära skräp. Den gjorde det här. Den har mer fritid än jag. Suck. |
| 7:50 | aliSalt | ali | 105 |
| 7:54 | toast | guld | 3D-modell köpt – printa sophållare på skrivaren |
| 7:54 | händelse | kopt | sak=matarband |
| 8:05 | väntar | värld:Mjau. | Mjau. |
| 8:19 | händelse | printStart | sak=byggsats:matarband |
| 8:19 | paket |  | tanke |
| 8:19 | tanke | du | Kajsa. Ut ur skrivaren. Nu. |
| 8:19 | väntar | du | Kajsa. Ut ur skrivaren. Nu. |
| 8:19 | skratt | du | Kajsa i skrivaren |
| 8:22 | toast | bra | Del 1 av 3 klar |
| 8:25 | struken | värld:Mjau. | Mjau. |
| 8:26 | toast | bra | Del 2 av 3 klar |
| 8:28 | toast | fel | Ingen ström – trampa cykeln |
| 8:37 | händelse | printKlar | sak=byggsats:matarband n=1 |
| 8:37 | toast | guld | ✅ |
| 8:38 | händelse | tagitUrPrint | sak=byggsats:matarband n=1 |
| 8:38 | paket |  | sms |
| 8:38 | väntar | ali | Ali här. Jag såg Sophållare på avstånd. Ett streck blev lite snett. Mitt fel. Vackert ändå. |
| 8:38 | paket |  | sms |
| 8:38 | väntar | ali | Ali igen. Jag har sagt till min bror att jag inte går i pension. Jag startar något. Han skrattade. Jag skrattade också. Men jag menar det. Tack. Säg inget. |
| 8:39 | händelse | placerat | sak=sophallare |
| 8:39 | kvittens | du | Nu kan jag tömma hela kärran på en gång. |
| 8:39 | varför | du | Krukor är bra. Pallar är bättre. |
| 8:39 | väntar | du | Nu kan jag tömma hela kärran på en gång. |
| 8:39 | väntar | info:guld | 🗑️ Sophållaren står bakom kvarnen! Töm allt skräp i den – den matar kvarnen själv. |
| 8:39 | sak | du | Nu kan jag tömma hela kärran på en gång. |
| 8:39 | notis | tanke | 💭 Nu kan jag tömma hela kärran på en gång. |
| 8:39 | röst | du | Nu kan jag tömma hela kärran på en gång. · STORY |
| 8:39 | händelse | malKlart | id=sophallare del=Dag 4 – Kärran och mer vind nasta=pall |
| 8:39 | struken | du | Kajsa. Ut ur skrivaren. Nu. |
| 8:39 | väntar | du | Jag behöver något att sitta på. En pall. Lagom ambitiöst. |
| 8:39 | MÅL |  | Printa en pall |
| 8:42 | klar | du | Nu kan jag tömma hela kärran på en gång. |
| 8:42 | sak | info:guld | 🗑️ Sophållaren står bakom kvarnen! Töm allt skräp i den – den matar kvarnen själv. |
| 8:42 | kvitto-visas | info:guld | 🗑️ Sophållaren står bakom kvarnen! Töm allt skräp i den – den matar kvarnen själv. |
| 8:42 | toast | guld | 🗑️ Sophållaren står bakom kvarnen! Töm allt skräp i den – den matar kvarnen själv. |
| 8:43 | målruta |  | Printa en pall |
| 8:44 | klar | info:guld | 🗑️ Sophållaren står bakom kvarnen! Töm allt skräp i den – den matar kvarnen själv. |
| 8:46 | sak | du | Jag behöver något att sitta på. En pall. Lagom ambitiöst. |
| 8:46 | pil |  | Printa en pall |
| 8:46 | notis | tanke | 💭 Jag behöver något att sitta på. En pall. Lagom ambitiöst. |
| 8:46 | röst | du | Jag behöver något att sitta på. En pall. Lagom ambitiöst. · MÅL |
| 8:47 | nick |  | nick:46 |
| 8:51 | klar | du | Jag behöver något att sitta på. En pall. Lagom ambitiöst. |
| 8:53 | struken | ali | Ali här. Jag såg Sophållare på avstånd. Ett streck blev lite snett. Mitt fel. Vackert ändå. |
| 9:00 | händelse | kopt | sak=pall |
| 9:00 | röst | ali | Bra val. Folk köper sånt. Jag vet inte varför. · STORY |
| 9:00 | upprepning | ali | Bra val. Folk köper sånt. Jag vet inte varför. |
| 9:00 | butiksbubbla | ali | Pall? Bra val. Folk köper sånt. Jag vet inte varför. |
| 9:09 | händelse | printStart | sak=pall |
| 9:11 | skratt | du | falsk tuta |
| 9:14 | toast | guld | ✅ |
| 9:14 | händelse | printKlar | sak=pall n=1 |
| 9:14 | händelse | malKlart | id=pall del=Dag 4 – Kärran och mer vind nasta=vind4 |
| 9:14 | väntar | du | En vindsnurra till på skjulets tak. Skrivarna vill ha mer ström. |
| 9:14 | målruta |  | Printa och sälj |
| 9:14 | MÅL |  | Printa och sälj |
| 9:14 | sak | du | En vindsnurra till på skjulets tak. Skrivarna vill ha mer ström. |
| 9:14 | pil |  | Printa och sälj |
| 9:14 | notis | tanke | 💭 En vindsnurra till på skjulets tak. Skrivarna vill ha mer ström. |
| 9:14 | röst | du | En vindsnurra till på skjulets tak. Skrivarna vill ha mer ström. · MÅL |
| 9:14 | händelse | tagitUrPrint | sak=pall n=1 |
| 9:18 | kvittens-bock |  | ✓ Printa en pall |
| 9:20 | klar | du | En vindsnurra till på skjulets tak. Skrivarna vill ha mer ström. |
| 9:21 | händelse | placerat | sak=pall |
| 9:30 | toast | skak | handen skakar: fullt |
| 9:32 | väntar | värld:TUUT TUUT! | TUUT TUUT! |
| 9:34 | sak | värld:TUUT TUUT! | TUUT TUUT! |
| 9:34 | bubbla |  | TUUT TUUT! |
| 9:37 | klar | värld:TUUT TUUT! | TUUT TUUT! |
| 9:39 | händelse | printStart | sak=pall |
| 9:44 | upplåst | strom | vindsnurra2 |
| 9:44 | brott | UPPLÅST | vindsnurra2 (strom 30 av 15) |
| 9:44 | händelse | upplast | id=vindsnurra2 flask=strom |
| 9:44 | paket |  | tanke → sms |
| 9:44 | tanke | du | En snurra räcker inte. Skrivarna står still så fort det blir stilla. |
| 9:44 | väntar | du | En snurra räcker inte. Skrivarna står still så fort det blir stilla. |
| 9:44 | väntar | ali | Ali här. En snurra till? Taket har plats för två. Vinden har inget emot det. |
| 9:44 | toast | guld | ✅ |
| 9:44 | händelse | printKlar | sak=pall n=2 |
| 9:44 | händelse | tagitUrPrint | sak=pall n=1 |
| 9:45 | sak | du | En snurra räcker inte. Skrivarna står still så fort det blir stilla. |
| 9:45 | notis | tanke | 💭 En snurra räcker inte. Skrivarna står still så fort det blir stilla. |
| 9:45 | röst | du | En snurra räcker inte. Skrivarna står still så fort det blir stilla. · STORY |
| 9:51 | klar | du | En snurra räcker inte. Skrivarna står still så fort det blir stilla. |
| 9:52 | aliSalt | ali | 180 |
| 9:53 | sak | ali | Ali här. En snurra till? Taket har plats för två. Vinden har inget emot det. |
| 9:53 | sms | ali | Ali här. En snurra till? Taket har plats för två. Vinden har inget emot det. |
| 9:53 | sms-bubbla | ali | Ali här. En snurra till? Taket har plats för två. Vinden har inget emot det. |
| 9:53 | röst | ali | Ali här. En snurra till? Taket har plats för två. Vinden har inget emot det. · STORY |
| 9:59 | klar | ali | Ali här. En snurra till? Taket har plats för två. Vinden har inget emot det. |
| 10:03 | toast | guld | 3D-modell köpt – printa vindsnurra till skjultaket på skrivaren |
| 10:03 | händelse | kopt | sak=vindsnurra |
| 10:11 | händelse | printStart | sak=byggsats:vindsnurra |
| 10:15 | händelse | printKlar | sak=byggsats:vindsnurra n=1 |
| 10:15 | toast | guld | ✅ |
| 10:16 | väntar | info:guld | 🌬️ Vindsnurran ligger i handen – klicka på skjulet för att sätta den på taket |
| 10:16 | händelse | tagitUrPrint | sak=byggsats:vindsnurra n=1 |
| 10:16 | sak | info:guld | 🌬️ Vindsnurran ligger i handen – klicka på skjulet för att sätta den på taket |
| 10:16 | kvitto-visas | info:guld | 🌬️ Vindsnurran ligger i handen – klicka på skjulet för att sätta den på taket |
| 10:16 | toast | guld | 🌬️ Vindsnurran ligger i handen – klicka på skjulet för att sätta den på taket |
| 10:18 | klar | info:guld | 🌬️ Vindsnurran ligger i handen – klicka på skjulet för att sätta den på taket |
| 10:24 | händelse | placerat | sak=vindsnurra |
| 10:24 | väntar | info:guld | 🌬️ Vindsnurran sitter på taket – den trampar cykeln åt dig när det blåser |
| 10:24 | monterat | du | byggsats:vindsnurra |
| 10:24 | händelse | monterat | sak=vindsnurra |
| 10:24 | sak | info:guld | 🌬️ Vindsnurran sitter på taket – den trampar cykeln åt dig när det blåser |
| 10:24 | kvitto-visas | info:guld | 🌬️ Vindsnurran sitter på taket – den trampar cykeln åt dig när det blåser |
| 10:24 | toast | guld | 🌬️ Vindsnurran sitter på taket – den trampar cykeln åt dig när det blåser |
| 10:24 | händelse | malKlart | id=vind4 del=Dag 4 – Kärran och mer vind nasta=n3-isolera-tva-vaggar |
| 10:24 | väntar | du | Slut på trampandet. Nästan. |
| 10:24 | väntar | du | Det drar genom väggarna. Isolering, och sen blir det varmt. |
| 10:24 | MÅL |  | Isolera två väggar · 0/2 |
| 10:26 | klar | info:guld | 🌬️ Vindsnurran sitter på taket – den trampar cykeln åt dig när det blåser |
| 10:26 | sak | du | Slut på trampandet. Nästan. |
| 10:26 | kvitto-visas | du | Slut på trampandet. Nästan. |
| 10:26 | lapp | 📔 Dagbok | Slut på trampandet. Nästan. |
| 10:26 | meddelande | du | Slut på trampandet. Nästan. |
| 10:26 | dagbokkort | du | Slut på trampandet. Nästan. |
| 10:26 | röst | du | Dag 4. 18 dagar till jul. Slut på trampandet. Nästan. · STORY |
| 10:31 | händelse | brevLast | id=sol |
| 10:31 | klar | du | Slut på trampandet. Nästan. |
| 10:31 | målruta |  | Isolera två väggar · 0/2 |
| 10:32 | sak | du | Det drar genom väggarna. Isolering, och sen blir det varmt. |
| 10:32 | pil |  | Isolera två väggar · 0/2 |
| 10:32 | notis | tanke | 💭 Det drar genom väggarna. Isolering, och sen blir det varmt. |
| 10:32 | röst | du | Det drar genom väggarna. Isolering, och sen blir det varmt. · MÅL |
| 10:32 | nick |  | nick:48 |
| 10:34 | händelse | pappa | Pappa ringer |
| 10:37 | klar | du | Det drar genom väggarna. Isolering, och sen blir det varmt. |
| 10:42 | röst | pappa | Hej. Det är pappa. · STORY |
| 10:44 | röst | du | Hej pappa. · STORY |
| 10:47 | röst | pappa | Mamma står bredvid. Hon säger att jag ska fråga om du äter. · STORY |
| 10:53 | röst | du | Jag äter. Och jag har en egen kvarn nu. Och en 3D-skrivare. · STORY |
| 10:59 | röst | pappa | Jaha. En kvarn. Vad lugnt då. · STORY |
| 11:01 | röst | pappa | Jag kanske kommer förbi nån dag. Om det passar. · STORY |
| 11:06 | röst | du | Det passar. · STORY |
| 11:09 | röst | pappa | Bra. Hej då då. · STORY |
| 11:18 | händelse | samtalSlut | id=pappa4 |
| 11:18 | struken | kedja | samtal4 |
| 11:24 | toast | guld | 3D-modell köpt – printa isolerskiva (vägg) på skrivaren |
| 11:24 | händelse | kopt | sak=vaggar |
| 11:33 | händelse | printStart | sak=byggsats:vaggar |
| 11:37 | händelse | printKlar | sak=byggsats:vaggar n=1 |
| 11:37 | toast | guld | ✅ |
| 11:37 | händelse | tagitUrPrint | sak=byggsats:vaggar n=1 |
| 11:42 | väntar | info:guld | 🧱 Bakväggen klar. 3 kvar. |
| 11:42 | sak | info:guld | 🧱 Bakväggen klar. 3 kvar. |
| 11:42 | kvitto-visas | info:guld | 🧱 Bakväggen klar. 3 kvar. |
| 11:42 | toast | guld | 🧱 Bakväggen klar. 3 kvar. |
| 11:44 | klar | info:guld | 🧱 Bakväggen klar. 3 kvar. |
| 11:51 | händelse | printStart | sak=byggsats:vaggar |
| 11:55 | händelse | printKlar | sak=byggsats:vaggar n=1 |
| 11:55 | toast | guld | ✅ |
| 11:55 | händelse | tagitUrPrint | sak=byggsats:vaggar n=1 |
| 12:00 | väntar | info:guld | 🧱 Vänster vägg klar. 2 kvar. |
| 12:00 | sak | info:guld | 🧱 Vänster vägg klar. 2 kvar. |
| 12:00 | kvitto-visas | info:guld | 🧱 Vänster vägg klar. 2 kvar. |
| 12:00 | toast | guld | 🧱 Vänster vägg klar. 2 kvar. |
| 12:00 | händelse | malKlart | id=n3-isolera-tva-vaggar del=Dag 4 – Kärran och mer vind nasta=sov4 |
| 12:00 | paket |  | lapp |
| 12:00 | väntar | du | Dag 4 är slut. En skrivare räcker inte. |
| 12:00 | MÅL |  | Klart för idag – sov när du vill |
| 12:02 | klar | info:guld | 🧱 Vänster vägg klar. 2 kvar. |
| 12:03 | målruta |  | Klart för idag – sov när du vill |
| 12:04 | kvittens-bock |  | ✓ Isolera två väggar · 2/2 |
| 12:04 | sak | du | (nytt mål i rutan) |
| 12:04 | pil |  | Klart för idag – sov när du vill |
| 12:04 | klar | du | (nytt mål i rutan) |
| 12:06 | sak | du | Dag 4 är slut. En skrivare räcker inte. |
| 12:06 | lapp | 📔 Dagbok | Dag 4 är slut. En skrivare räcker inte. |
| 12:06 | meddelande | du | Dag 4 är slut. En skrivare räcker inte. |
| 12:06 | dagbokkort | du | Dag 4 är slut. En skrivare räcker inte. |
| 12:06 | röst | du | Dag 4. 18 dagar till jul. Dag 4 är slut. En skrivare räcker inte. · STORY |
| 12:12 | händelse | brevLast | id=kvall4 |
| 12:12 | klar | du | Dag 4 är slut. En skrivare räcker inte. |
| 12:12 | väntar | notis:🌇 Klockan är 21. Ali slår igen luckan.  | 🌇 Klockan är 21. Ali slår igen luckan. Dagens jobb är klart – gå in i skjulet och sov i sängen. |

<details><summary>Botens handlingar dag 4</summary>

- 0:00 — dag 4 börjar — (2770 kr)
- 0:08 popup: "FORTSÄTT" (2770 kr)
- 0:22 gå till Rolfs postlåda (28 m) (2770 kr)
- 0:30 panel: "Rolfs postlåda
Det här låg i l" (2890 kr)
- 0:31 tjänar pengar till väntar på sopbilen (BO): 2890/2950 kr → printar blomkruka (105 kr) (2890 kr)
- 0:32 gå till skrivaren (8 m) (2890 kr)
- 0:34 printar Blomkruka (2890 kr)
- 0:38 tar ut 1 st ur skrivaren (2890 kr)
- 0:43 gå till Ali (26 m) (2890 kr)
- 0:43 öppnar Alis butik – sälja (2890 kr)
- 0:45 säljer hos Ali: +105 kr (2995 kr)
- 0:59 tjänar pengar till väntar på sopbilen (BO): 2995/3055 kr → printar blomkruka (105 kr) (2995 kr)
- 1:04 gå till skrivaren (24 m) (2995 kr)
- 1:06 printar Blomkruka (2995 kr)
- 1:10 tar ut 1 st ur skrivaren (2995 kr)
- 1:15 gå till Ali (24 m) (2995 kr)
- 1:15 öppnar Alis butik – sälja (2995 kr)
- 1:17 säljer hos Ali: +105 kr (3100 kr)
- 1:25 tjänar pengar till väntar på sopbilen (BO): 3100/3160 kr → printar blomkruka (105 kr) (3100 kr)
- 1:30 gå till skrivaren (24 m) (3100 kr)
- 1:32 printar Blomkruka (3100 kr)
- 1:36 tar ut 1 st ur skrivaren (3100 kr)
- 1:41 gå till Ali (24 m) (3100 kr)
- 1:41 öppnar Alis butik – sälja (3100 kr)
- 1:43 säljer hos Ali: +105 kr (3205 kr)
- 1:49 tjänar pengar till väntar på sopbilen (BO): 3205/3265 kr → printar blomkruka (105 kr) (3205 kr)
- 1:55 gå till skrivaren (24 m) (3205 kr)
- 1:56 printar Blomkruka (3205 kr)
- 2:00 tar ut 1 st ur skrivaren (3205 kr)
- 2:05 gå till Ali (24 m) (3205 kr)
- 2:05 öppnar Alis butik – sälja (3205 kr)
- 2:07 säljer hos Ali: +105 kr (3310 kr)
- 2:10 tjänar pengar till väntar på sopbilen (BO): 3310/3370 kr → printar blomkruka (105 kr) (3310 kr)
- 2:22 plockar 3 skräp på tippen (bär max 16) (3310 kr)
- 2:24 gå till kvarnen (11 m) (3310 kr)
- 2:31 gå till skrivaren (5 m) (3310 kr)
- 2:32 printar Blomkruka (3310 kr)
- 2:36 tar ut 1 st ur skrivaren (3310 kr)
- 2:42 gå till Ali (27 m) (3310 kr)
- 2:42 öppnar Alis butik – sälja (3310 kr)
- 2:43 säljer hos Ali: +105 kr (3415 kr)
- 3:00 popup: "Ja." (3415 kr)
- 3:08 popup: "Läst" (3415 kr)
- 3:11 gå till Rolfs postlåda (31 m) (3415 kr)
- 3:13 gå till skrivaren (8 m) (3415 kr)
- 3:15 printar Grillspade (3415 kr)
- 3:20 tar ut 1 st ur skrivaren (3415 kr)
- 3:30 valj grillspade: true, vald grillspade, post {"l":null,"tr":null,"tm":[]}, nummer false (3415 kr)
- 3:32 gå till Rolfs postlåda (8 m) (3415 kr)
- 3:48 fyller kärran med 8 skräp (3415 kr)
- 3:50 gå till kvarnen (9 m) (3415 kr)
- 4:03 tjänar pengar till väntar på flaskhalsen för matarband: 3415/3455 kr → printar blomkruka (105 kr) (3415 kr)
- 4:04 gå till skrivaren (5 m) (3415 kr)
- 4:06 printar Blomkruka (3415 kr)
- 4:10 tar ut 1 st ur skrivaren (3415 kr)
- 4:15 gå till Ali (27 m) (3415 kr)
- 4:15 öppnar Alis butik – sälja (3415 kr)
- 4:17 säljer hos Ali: +105 kr (3520 kr)
- 4:18 tjänar pengar till väntar på flaskhalsen för matarband: 3520/3560 kr → printar blomkruka (105 kr) (3520 kr)
- 4:23 gå till skrivaren (24 m) (3520 kr)
- 4:25 printar Blomkruka (3520 kr)
- 4:29 tar ut 1 st ur skrivaren (3520 kr)
- 4:34 gå till Ali (24 m) (3520 kr)
- 4:34 öppnar Alis butik – sälja (3520 kr)
- 4:36 säljer hos Ali: +105 kr (3625 kr)
- 4:38 tjänar pengar till väntar på flaskhalsen för matarband: 3625/3665 kr → printar blomkruka (105 kr) (3625 kr)
- 4:55 popup: "Bara en katt." (3625 kr)
- 5:05 popup: "Läst" (3625 kr)
- 5:05 gå till skrivaren (24 m) (3625 kr)
- 5:07 printar Blomkruka (3625 kr)
- 5:11 tar ut 1 st ur skrivaren (3625 kr)
- 5:16 gå till Ali (24 m) (3625 kr)
- 5:16 öppnar Alis butik – sälja (3625 kr)
- 5:18 säljer hos Ali: +105 kr (3730 kr)
- 5:25 tjänar pengar till väntar på flaskhalsen för matarband: 3730/3770 kr → printar blomkruka (105 kr) (3730 kr)
- 5:30 gå till skrivaren (24 m) (3730 kr)
- 5:32 printar Blomkruka (3730 kr)
- 5:36 tar ut 1 st ur skrivaren (3730 kr)
- 5:41 gå till Ali (24 m) (3730 kr)
- 5:41 öppnar Alis butik – sälja (3730 kr)
- 5:43 säljer hos Ali: +105 kr (3835 kr)
- 5:45 tjänar pengar till väntar på flaskhalsen för matarband: 3835/3875 kr → printar blomkruka (105 kr) (3835 kr)
- 5:50 gå till skrivaren (24 m) (3835 kr)
- 5:52 printar Blomkruka (3835 kr)
- 5:56 tar ut 1 st ur skrivaren (3835 kr)
- 6:01 gå till Ali (24 m) (3835 kr)
- 6:01 öppnar Alis butik – sälja (3835 kr)
- 6:03 säljer hos Ali: +105 kr (3940 kr)
- 6:05 tjänar pengar till väntar på flaskhalsen för matarband: 3940/3980 kr → printar blomkruka (105 kr) (3940 kr)
- 6:10 gå till skrivaren (24 m) (3940 kr)
- 6:12 printar Blomkruka (3940 kr)
- 6:16 tar ut 1 st ur skrivaren (3940 kr)
- 6:21 gå till Ali (24 m) (3940 kr)
- 6:21 öppnar Alis butik – sälja (3940 kr)
- 6:23 säljer hos Ali: +105 kr (4045 kr)
- 6:25 tjänar pengar till väntar på flaskhalsen för matarband: 4045/4085 kr → printar blomkruka (105 kr) (4045 kr)
- 6:30 gå till skrivaren (24 m) (4045 kr)
- 6:31 printar Blomkruka (4045 kr)
- 6:37 gå till skrivaren (4 m) (4045 kr)
- 6:38 tar ut 1 st ur skrivaren (4045 kr)
- 6:43 gå till Ali (26 m) (4045 kr)
- 6:43 öppnar Alis butik – sälja (4045 kr)
- 6:45 säljer hos Ali: +105 kr (4150 kr)
- 6:54 tjänar pengar till väntar på flaskhalsen för matarband: 4150/4190 kr → printar blomkruka (105 kr) (4150 kr)
- 6:59 gå till skrivaren (24 m) (4150 kr)
- 7:00 printar Blomkruka (4150 kr)
- 7:04 tar ut 1 st ur skrivaren (4150 kr)
- 7:10 gå till Ali (24 m) (4150 kr)
- 7:10 öppnar Alis butik – sälja (4150 kr)
- 7:11 säljer hos Ali: +105 kr (4255 kr)
- 7:13 tjänar pengar till väntar på flaskhalsen för matarband: 4255/4295 kr → printar blomkruka (105 kr) (4255 kr)
- 7:19 gå till skrivaren (24 m) (4255 kr)
- 7:20 printar Blomkruka (4255 kr)
- 7:24 tar ut 1 st ur skrivaren (4255 kr)
- 7:29 gå till Ali (24 m) (4255 kr)
- 7:29 öppnar Alis butik – sälja (4255 kr)
- 7:31 säljer hos Ali: +3 kr (4258 kr)
- 7:32 tjänar pengar till väntar på flaskhalsen för matarband: 4258/4295 kr → printar blomkruka (105 kr) (4258 kr)
- 7:37 gå till skrivaren (24 m) (4258 kr)
- 7:39 printar Blomkruka (4258 kr)
- 7:43 tar ut 1 st ur skrivaren (4258 kr)
- 7:48 gå till Ali (24 m) (4258 kr)
- 7:48 öppnar Alis butik – sälja (4258 kr)
- 7:50 säljer hos Ali: +105 kr (4363 kr)
- 7:52 öppnar Alis butik – köpa sophållare (4363 kr)
- 7:54 köper matarband för 120 kr (4243 kr)
- 8:08 plockar 6 skräp på tippen (bär max 16) (4243 kr)
- 8:11 gå till kvarnen (13 m) (4243 kr)
- 8:17 gå till skrivaren (5 m) (4243 kr)
- 8:19 printar Sophållare (3 delar) (4243 kr)
- 8:38 tar ut 1 st ur skrivaren (4243 kr)
- 8:39 gå till kvarnen (3 m) (4243 kr)
- 8:59 gå till Ali (29 m) (4243 kr)
- 8:59 öppnar Alis butik – köpa receptet pall (4243 kr)
- 9:01 köper pall för 80 kr (4163 kr)
- 9:07 gå till skrivaren (24 m) (4163 kr)
- 9:09 printar Pall (4163 kr)
- 9:15 tar ut 1 st ur skrivaren (4163 kr)
- 9:19 gå till platsen för pall (20 m) (4163 kr)
- 9:21 ställer ut pall (4163 kr)
- 9:22 tjänar pengar till väntar på flaskhalsen för vindsnurra2: 4163/4203 kr → printar pall (180 kr) (4163 kr)
- 9:33 gå till kvarnen (11 m) (4163 kr)
- 9:37 gå till skrivaren (5 m) (4163 kr)
- 9:39 printar Pall (4163 kr)
- 9:45 tar ut 1 st ur skrivaren (4163 kr)
- 9:51 gå till Ali (27 m) (4163 kr)
- 9:51 öppnar Alis butik – sälja (4163 kr)
- 9:52 säljer hos Ali: +180 kr (4343 kr)
- 10:01 öppnar Alis butik – köpa vindsnurra till skjultaket (4343 kr)
- 10:04 köper vindsnurra för 133 kr (4210 kr)
- 10:10 gå till skrivaren (24 m) (4210 kr)
- 10:11 printar Vindsnurra till skjultaket (4210 kr)
- 10:16 tar ut 1 st ur skrivaren (4210 kr)
- 10:24 gå till sätt vindsnurran på taket (18 m) (4210 kr)
- 10:31 popup: "FORTSÄTT" (4210 kr)
- 10:42 popup: "Svara E" (4210 kr)
- 10:48 popup: "Nästa E" (4210 kr)
- 11:00 popup: "Nästa E" (4210 kr)
- 11:06 popup: "Nästa E" (4210 kr)
- 11:13 popup: "Nästa E" (4210 kr)
- 11:18 popup: "Lägg på E" (4210 kr)
- 11:23 gå till Ali (20 m) (4210 kr)
- 11:23 öppnar Alis butik – köpa isolerskiva (vägg) (4210 kr)
- 11:25 köper vaggar för 130 kr (4080 kr)
- 11:31 gå till skrivaren (24 m) (4080 kr)
- 11:33 printar Isolerskiva (vägg) (4080 kr)
- 11:38 tar ut 1 st ur skrivaren (4080 kr)
- 11:42 gå till skjulet (bak) (17 m) (4080 kr)
- 11:49 gå till skrivaren (17 m) (4080 kr)
- 11:51 printar Isolerskiva (vägg) (4080 kr)
- 11:56 tar ut 1 st ur skrivaren (4080 kr)
- 12:00 gå till skjulet (vanster) (17 m) (4080 kr)
- 12:12 popup: "FORTSÄTT" (4080 kr)
- 12:15 gå till sängen (1 m) (4080 kr)

</details>

## Dag 5

| Tid | Källa | Vem | Text |
|---|---|---|---|
| 12:17 | vara | ali | pall |
| 12:17 | händelse | malKlart | id=sov4 del=Dag 4 – Kärran och mer vind nasta=rolf3-brev |
| 12:17 | MÅL |  | Vänta på sopbilen. Den lämnar något. |
| 0:00 | skratt | du | falsk tuta |
| 0:01 | händelse | dagenBorjar | dag=5 |
| 0:01 | meddelande | du | Dag 5. 17 dagar till jul. Utan pengar blir det ingen jul här. |
| 0:01 | dagbokkort | du | Tätt och mysigt · Dag 5. 17 dagar till jul. Utan pengar blir det ingen jul här. |
| 0:01 | röst | du | Dag 5. 17 dagar till jul. Tätt och mysigt. Utan pengar blir det ingen jul här. · STORY |
| 0:08 | notis | nytt | Ali vill ha idag: Pall – +50 % hela dagen (270 kr just nu)📈 Igår: 18 printat · 16 sålt |
| 0:08 | händelse | morgonkortStangt | dag=5 |
| 0:08 | målruta |  | Vänta på sopbilen. Den lämnar något. |
| 0:13 | sak | du | (nytt mål i rutan) |
| 0:13 | pil |  | Vänta på sopbilen. Den lämnar något. |
| 0:13 | klar | du | (nytt mål i rutan) |
| 0:15 | struken | notis:🌇 Klockan är 21. Ali slår igen luckan.  | 🌇 Klockan är 21. Ali slår igen luckan. Dagens jobb är klart – gå in i skjulet och sov i sängen. |
| 0:15 | struken | ali | Ali igen. Jag har sagt till min bror att jag inte går i pension. Jag startar något. Han skrattade. Jag skrattade också. Men jag menar det. Tack. Säg inget. |
| 0:27 | väntar | rolf | Grillspaden ä ju KONST. Pengar i lådan. /Rolf |
| 0:31 | händelse | printStart | sak=pall |
| 0:36 | toast | guld | ✅ |
| 0:36 | händelse | printKlar | sak=pall n=3 |
| 0:36 | händelse | tagitUrPrint | sak=pall n=1 |
| 0:43 | röst | ali | Min fru säger att jag bor här. Hon har rätt. · STORY |
| 0:43 | butiksbubbla | ali | Min fru säger att jag bor här. Hon har rätt. |
| 0:44 | aliSalt | ali | 270 |
| 0:58 | väntar | mamma | Det finns måsar vid soptippar! Dom tar mat. Och små hundar. Du är inte en liten hund men ändå. |
| 1:03 | sak | mamma | Det finns måsar vid soptippar! Dom tar mat. Och små hundar. Du är inte en liten hund men ändå. |
| 1:03 | sms | mamma | Det finns måsar vid soptippar! Dom tar mat. Och små hundar. Du är inte en liten hund men ändå. |
| 1:03 | sms-bubbla | mamma | Det finns måsar vid soptippar! Dom tar mat. Och små hundar. Du är inte en liten hund men ändå. |
| 1:03 | röst | mamma | Det finns måsar vid soptippar! Dom tar mat. Och små hundar. Du är inte en liten hund men ändå. · STORY |
| 1:07 | händelse | printStart | sak=pall |
| 1:11 | klar | mamma | Det finns måsar vid soptippar! Dom tar mat. Och små hundar. Du är inte en liten hund men ändå. |
| 1:12 | toast | guld | ✅ |
| 1:12 | händelse | printKlar | sak=pall n=4 |
| 1:13 | händelse | tagitUrPrint | sak=pall n=1 |
| 1:21 | aliSalt | ali | 257 |
| 1:31 | händelse | printStart | sak=pall |
| 1:36 | toast | guld | ✅ |
| 1:36 | händelse | printKlar | sak=pall n=5 |
| 1:36 | händelse | tagitUrPrint | sak=pall n=1 |
| 1:44 | aliSalt | ali | 244 |
| 1:52 | väntar | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har börjat isolera. Och pall. Det är stort, Gunnar. |
| 1:52 | radio | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har börjat isolera. Och pall. Det är stort, Gunnar. |
| 1:52 | skratt | du | Radio-Kjelle |
| 1:52 | sak | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har börjat isolera. Och pall. Det är stort, Gunnar. |
| 1:52 | notis |  | 📻 Radio Tippen: Radio Tippen, Kjelle här. Skjulet vid tippen har börjat isolera. Och pall. Det är stort, Gunnar. |
| 1:52 | röst | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har börjat isolera. Och pall. Det är stort, Gunnar. · REAKTION |
| 1:54 | händelse | printStart | sak=pall |
| 1:55 | väntar | info:guld | 🚛 Rolf tippade DUBBEL last på soptippen! |
| 1:59 | toast | guld | ✅ |
| 1:59 | händelse | printKlar | sak=pall n=6 |
| 1:59 | händelse | tagitUrPrint | sak=pall n=1 |
| 2:00 | klar | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har börjat isolera. Och pall. Det är stort, Gunnar. |
| 2:00 | sak | info:guld | 🚛 Rolf tippade DUBBEL last på soptippen! |
| 2:00 | kvitto-visas | info:guld | 🚛 Rolf tippade DUBBEL last på soptippen! |
| 2:00 | toast | guld | 🚛 Rolf tippade DUBBEL last på soptippen! |
| 2:02 | klar | info:guld | 🚛 Rolf tippade DUBBEL last på soptippen! |
| 2:07 | aliSalt | ali | 231 |
| 2:17 | händelse | printStart | sak=pall |
| 2:22 | toast | guld | ✅ |
| 2:22 | händelse | printKlar | sak=pall n=7 |
| 2:22 | händelse | tagitUrPrint | sak=pall n=1 |
| 2:27 | väntar | ali | Kom in, kom in. Eller inte. Jag står här ändå. |
| 2:27 | sak | ali | Kom in, kom in. Eller inte. Jag står här ändå. |
| 2:27 | röst | ali | Kom in, kom in. Eller inte. Jag står här ändå. · SMÅPRAT |
| 2:28 | väntar | bud | (tips) |
| 2:28 | bubbla |  | Kom in, kom in. Eller inte. Jag står här ändå. |
| 2:30 | aliSalt | ali | 220 |
| 2:31 | klar | ali | Kom in, kom in. Eller inte. Jag står här ändå. |
| 2:33 | sak | bud | (tips) |
| 2:35 | klar | bud | (tips) |
| 2:37 | meddelande | bror | Jag har gjort om ditt rum till gym. Mamma vet inte. Säg inget. |
| 2:38 | röst | bror | Jag har gjort om ditt rum till gym. Mamma vet inte. Säg inget. · STORY |
| 2:47 | paket |  | sms |
| 2:47 | väntar | bror | Bra. Jag har satt upp en räcka i din garderob. Den håller. Typ. |
| 2:56 | händelse | brevLast | id=b_gym |
| 2:58 | sak | bror | Bra. Jag har satt upp en räcka i din garderob. Den håller. Typ. |
| 2:58 | sms | bror | Bra. Jag har satt upp en räcka i din garderob. Den håller. Typ. |
| 2:58 | sms-bubbla | bror | Bra. Jag har satt upp en räcka i din garderob. Den håller. Typ. |
| 2:58 | röst | bror | Bra. Jag har satt upp en räcka i din garderob. Den håller. Typ. · STORY |
| 3:03 | klar | bror | Bra. Jag har satt upp en räcka i din garderob. Den håller. Typ. |
| 3:15 | händelse | printStart | sak=pall |
| 3:20 | toast | guld | ✅ |
| 3:20 | händelse | printKlar | sak=pall n=8 |
| 3:20 | händelse | tagitUrPrint | sak=pall n=1 |
| 3:23 | väntar | info:fel | Göran snodde pall. |
| 3:23 | paket |  | tanke → tanke |
| 3:23 | tanke | du | HALLÅ! Den där måsen tog min grej! |
| 3:23 | väntar | du | HALLÅ! Den där måsen tog min grej! |
| 3:23 | tanke | du | Mamma hade rätt. Säg inget till henne. |
| 3:23 | väntar | du | Mamma hade rätt. Säg inget till henne. |
| 3:23 | paket |  | sms |
| 3:23 | väntar | rolf | Dä ä Göran. Han ä från 2014. Han tar int skräp, bara grejer som e fina. MVH ROLF |
| 3:24 | sak | info:fel | Göran snodde pall. |
| 3:24 | kvitto-visas | info:fel | Göran snodde pall. |
| 3:24 | toast | fel | Göran snodde pall. |
| 3:26 | klar | info:fel | Göran snodde pall. |
| 3:34 | sak | du | HALLÅ! Den där måsen tog min grej! |
| 3:34 | notis | tanke | 💭 HALLÅ! Den där måsen tog min grej! |
| 3:34 | röst | du | HALLÅ! Den där måsen tog min grej! · STORY |
| 3:36 | händelse | printStart | sak=pall |
| 3:37 | klar | du | HALLÅ! Den där måsen tog min grej! |
| 3:38 | paket |  | tanke |
| 3:38 | tanke | du | En tandborste. Den har varit på fel ställe. |
| 3:38 | väntar | du | En tandborste. Den har varit på fel ställe. |
| 3:38 | skratt | du | kvarnen spottar |
| 3:41 | toast | guld | ✅ |
| 3:41 | händelse | printKlar | sak=pall n=9 |
| 3:41 | händelse | tagitUrPrint | sak=pall n=1 |
| 3:46 | sak | du | Mamma hade rätt. Säg inget till henne. |
| 3:46 | notis | tanke | 💭 Mamma hade rätt. Säg inget till henne. |
| 3:46 | röst | du | Mamma hade rätt. Säg inget till henne. · STORY |
| 3:49 | aliSalt | ali | 209 |
| 3:49 | klar | du | Mamma hade rätt. Säg inget till henne. |
| 3:51 | upplåst | skrivare | trim_skrivare3 |
| 3:51 | brott | UPPLÅST | trim_skrivare3 (skrivare 352 av 75) |
| 3:51 | händelse | upplast | id=trim_skrivare3 flask=skrivare |
| 3:51 | paket |  | tanke → sms |
| 3:51 | tanke | du | Fortare. Den kan gå ännu fortare. Jag hör det på den. |
| 3:51 | väntar | du | Fortare. Den kan gå ännu fortare. Jag hör det på den. |
| 3:51 | väntar | ali | Ali här. Sista skrivartrimmen. Efter den går den inte att göra bättre. Då får du bygga en större. |
| 3:54 | skratt | du | falsk tuta |
| 3:58 | skratt | du | tummen på fotot |
| 3:58 | väntar | foto | Göran. Tjuv. (och min tumme) |
| 3:58 | paket |  | tanke |
| 3:58 | tanke | du | Okej, Göran. Nästa gång är jag beredd. |
| 3:58 | väntar | du | Okej, Göran. Nästa gång är jag beredd. |
| 3:58 | sak | du | En tandborste. Den har varit på fel ställe. |
| 3:58 | notis | tanke | 💭 En tandborste. Den har varit på fel ställe. |
| 3:58 | röst | du | En tandborste. Den har varit på fel ställe. · REAKTION |
| 3:59 | händelse | printStart | sak=pall |
| 4:00 | väntar | mamma | Jag har städat ditt rum. Det tog tre dagar. Jag hittade en macka från i somras. En macka. |
| 4:02 | klar | du | En tandborste. Den har varit på fel ställe. |
| 4:03 | paket |  | ge |
| 4:03 | väntar |  | (läget ändras) |
| 4:04 | toast | guld | ✅ |
| 4:04 | händelse | printKlar | sak=pall n=10 |
| 4:05 | händelse | tagitUrPrint | sak=pall n=1 |
| 4:10 | sak | ali | Ali här. Sista skrivartrimmen. Efter den går den inte att göra bättre. Då får du bygga en större. |
| 4:10 | sms | ali | Ali här. Sista skrivartrimmen. Efter den går den inte att göra bättre. Då får du bygga en större. |
| 4:10 | sms-bubbla | ali | Ali här. Sista skrivartrimmen. Efter den går den inte att göra bättre. Då får du bygga en större. |
| 4:10 | röst | ali | Ali här. Sista skrivartrimmen. Efter den går den inte att göra bättre. Då får du bygga en större. · STORY |
| 4:12 | aliSalt | ali | 198 |
| 4:16 | skratt | du | falsk tuta |
| 4:19 | klar | ali | Ali här. Sista skrivartrimmen. Efter den går den inte att göra bättre. Då får du bygga en större. |
| 4:27 | sak | du | Fortare. Den kan gå ännu fortare. Jag hör det på den. |
| 4:27 | notis | tanke | 💭 Fortare. Den kan gå ännu fortare. Jag hör det på den. |
| 4:27 | röst | du | Fortare. Den kan gå ännu fortare. Jag hör det på den. · STORY |
| 4:27 | väntar | rolf | Tjo. Flaket ä så trist. En tomte mä luva o skägg, kan du göra en sån? /Rolf 🎅​ |
| 4:27 | paket |  | ge |
| 4:27 | väntar |  | (läget ändras) |
| 4:27 | händelse | malKlart | id=rolf3-brev del=Dag 5 – Tätt och mysigt nasta=rolf3-printa |
| 4:27 | väntar | du | Printa trädgårdstomte till flaket. |
| 4:27 | MÅL |  | Printa trädgårdstomte till flaket |
| 4:31 | målruta |  | Printa trädgårdstomte till flaket |
| 4:31 | kvittens-bock |  | ✓ Läs brevet i Rolfs postlåda |
| 4:31 | klar | du | Fortare. Den kan gå ännu fortare. Jag hör det på den. |
| 4:31 | händelse | printStart | sak=tomte |
| 4:31 | händelse | malKlart | id=rolf3-printa del=Dag 5 – Tätt och mysigt nasta=rolf3-ge |
| 4:31 | väntar | du | Ge Rolf trädgårdstomte till flaket. |
| 4:31 | MÅL |  | Ge Rolf trädgårdstomte till flaket |
| 4:33 | struken | du | Printa trädgårdstomte till flaket. |
| 4:33 | sak | rolf | Tjo. Flaket ä så trist. En tomte mä luva o skägg, kan du göra en sån? /Rolf 🎅​ |
| 4:33 | lapp | Brev från Rolf | Tjo. Flaket ä så trist. En tomte mä luva o skägg, kan du göra en sån? /Rolf 🎅​ |
| 4:33 | röst | rolf | Tjo. Flaket ä så trist. En tomte mä luva o skägg, kan du göra en sån? /Rolf 🎅​ · STORY |
| 4:35 | målruta |  | Ge Rolf trädgårdstomte till flaket |
| 4:37 | toast | guld | ✅ |
| 4:37 | händelse | printKlar | sak=tomte n=1 |
| 4:37 | händelse | tagitUrPrint | sak=tomte n=1 |
| 4:38 | väntar | bud | (tips) |
| 4:40 | klar | rolf | Tjo. Flaket ä så trist. En tomte mä luva o skägg, kan du göra en sån? /Rolf 🎅​ |
| 4:40 | händelse | brevLast | id=rolf:3 |
| 4:42 | sak | du | Ge Rolf trädgårdstomte till flaket. |
| 4:42 | pil |  | Ge Rolf trädgårdstomte till flaket |
| 4:42 | röst | du | Ge Rolf trädgårdstomte till flaket. · MÅL |
| 4:45 | klar | du | Ge Rolf trädgårdstomte till flaket. |
| 4:47 | sak |  | (läget ändras) |
| 4:47 | klar |  | (läget ändras) |
| 4:47 | sak | bud | (tips) |
| 4:47 | väntar | du | Klart! Nu lägger jag den i Rolfs brevlåda vid grinden. |
| 4:48 | klar | bud | (tips) |
| 4:50 | sak | du | Klart! Nu lägger jag den i Rolfs brevlåda vid grinden. |
| 4:50 | röst | du | Klart! Nu lägger jag den i Rolfs brevlåda vid grinden. · MÅL |
| 4:52 | händelse | lagtIPostlada | sak=tomte rolf=3 jobb=false |
| 4:52 | struken | kedja | rolf3 |
| 4:52 | händelse | malKlart | id=rolf3-ge del=Dag 5 – Tätt och mysigt nasta=n4-isolera-de-sista |
| 4:52 | väntar | du | Två väggar kvar i skjulet. Sen är det tätt. |
| 4:52 | MÅL |  | Isolera de sista väggarna · 2/4 |
| 4:55 | klar | du | Klart! Nu lägger jag den i Rolfs brevlåda vid grinden. |
| 4:56 | målruta |  | Isolera de sista väggarna · 2/4 |
| 4:56 | kvittens-bock |  | ✓ Ge Rolf trädgårdstomte till flaket |
| 4:57 | sak | du | Två väggar kvar i skjulet. Sen är det tätt. |
| 4:57 | pil |  | Isolera de sista väggarna · 2/4 |
| 4:57 | notis | tanke | 💭 Två väggar kvar i skjulet. Sen är det tätt. |
| 4:57 | röst | du | Två väggar kvar i skjulet. Sen är det tätt. · MÅL |
| 4:57 | nick |  | nick:53 |
| 5:00 | klar | du | Två väggar kvar i skjulet. Sen är det tätt. |
| 5:06 | händelse | printStart | sak=byggsats:vaggar |
| 5:09 | sak | foto | Göran. Tjuv. (och min tumme) |
| 5:09 | foto | du | Göran. Tjuv. (och min tumme) |
| 5:09 | händelse | printKlar | sak=byggsats:vaggar n=1 |
| 5:09 | toast | guld | ✅ |
| 5:10 | händelse | tagitUrPrint | sak=byggsats:vaggar n=1 |
| 5:11 | klar | foto | Göran. Tjuv. (och min tumme) |
| 5:15 | väntar | info:guld | 🧱 Höger vägg klar. 1 kvar. |
| 5:15 | sak | info:guld | 🧱 Höger vägg klar. 1 kvar. |
| 5:15 | kvitto-visas | info:guld | 🧱 Höger vägg klar. 1 kvar. |
| 5:15 | toast | guld | 🧱 Höger vägg klar. 1 kvar. |
| 5:17 | klar | info:guld | 🧱 Höger vägg klar. 1 kvar. |
| 5:29 | toast | skak | handen skakar: fullt |
| 5:29 | väntar | värld:Mjau. | Mjau. |
| 5:33 | sak | du | Okej, Göran. Nästa gång är jag beredd. |
| 5:33 | notis | tanke | 💭 Okej, Göran. Nästa gång är jag beredd. |
| 5:33 | röst | du | Okej, Göran. Nästa gång är jag beredd. · STORY |
| 5:36 | klar | du | Okej, Göran. Nästa gång är jag beredd. |
| 5:39 | händelse | printStart | sak=byggsats:vaggar |
| 5:40 | väntar | rolf | Kajsa la en död mus på min kudde. De e kärlek. Hon får lax ikväll. /R |
| 5:43 | händelse | printKlar | sak=byggsats:vaggar n=1 |
| 5:43 | toast | guld | ✅ |
| 5:43 | händelse | tagitUrPrint | sak=byggsats:vaggar n=1 |
| 5:45 | sak |  | (läget ändras) |
| 5:45 | brev | rolf | rolf:3 |
| 5:45 | klar |  | (läget ändras) |
| 5:48 | väntar | info:guld | 🧱 Skjulet är tätt! |
| 5:48 | sak | info:guld | 🧱 Skjulet är tätt! |
| 5:48 | kvitto-visas | info:guld | 🧱 Skjulet är tätt! |
| 5:48 | toast | guld | 🧱 Skjulet är tätt! |
| 5:48 | händelse | malKlart | id=n4-isolera-de-sista del=Dag 5 – Tätt och mysigt nasta=dator |
| 5:48 | struken | kedja | vaggar |
| 5:48 | väntar | du | Alis pappas dator. Med den kan jag sälja på nätet. |
| 5:48 | MÅL |  | Köp Alis pappas gamla dator |
| 5:50 | klar | info:guld | 🧱 Skjulet är tätt! |
| 5:50 | målruta |  | Köp Alis pappas gamla dator |
| 5:52 | kvittens-bock |  | ✓ Isolera de sista väggarna · 4/4 |
| 5:52 | sak | du | Alis pappas dator. Med den kan jag sälja på nätet. |
| 5:52 | pil |  | Köp Alis pappas gamla dator |
| 5:52 | notis | tanke | 💭 Alis pappas dator. Med den kan jag sälja på nätet. |
| 5:52 | röst | du | Alis pappas dator. Med den kan jag sälja på nätet. · MÅL |
| 5:52 | nick |  | nick:54 |
| 5:56 | klar | du | Alis pappas dator. Med den kan jag sälja på nätet. |
| 5:58 | struken | värld:Mjau. | Mjau. |
| 6:04 | toast | guld | 🖥️ Datorn är din – ställ den i skjulet |
| 6:04 | händelse | kopt | sak=webbdator |
| 6:04 | röst | ali | Pappas gamla dator. Den har ett modem. Det låter som en fax som gråter. Men du kommer ut på nätet. · STORY |
| 6:04 | butiksbubbla | ali | Pappas gamla dator. Den har ett modem. Det låter som en fax som gråter. Men du kommer ut på nätet. |
| 6:06 | paket |  | tanke |
| 6:06 | tanke | du | Jaha, Rolf har hämtat trädgårdstomte till flaket. |
| 6:06 | väntar | du | Jaha, Rolf har hämtat trädgårdstomte till flaket. |
| 6:13 | händelse | printStart | sak=byggsats:webbdator |
| 6:13 | händelse | printKlar | sak=byggsats:webbdator n=1 |
| 6:13 | toast | guld | ✅ |
| 6:14 | händelse | tagitUrPrint | sak=byggsats:webbdator n=1 |
| 6:18 | sak | du | Jaha, Rolf har hämtat trädgårdstomte till flaket. |
| 6:18 | notis | tanke | 💭 Jaha, Rolf har hämtat trädgårdstomte till flaket. |
| 6:18 | röst | du | Jaha, Rolf har hämtat trädgårdstomte till flaket. · REAKTION |
| 6:20 | händelse | placerat | sak=webbdator |
| 6:20 | paket |  | tanke |
| 6:20 | tanke | du | En webbshop. Från ett skjul. Med modem. Varför inte. |
| 6:20 | väntar | du | En webbshop. Från ett skjul. Med modem. Varför inte. |
| 6:20 | händelse | malKlart | id=dator del=Dag 5 – Tätt och mysigt nasta=lampskarm |
| 6:20 | väntar | du | En lampskärm. Folk betalar för ljus som ser fint ut. |
| 6:20 | MÅL |  | Printa en lampskärm att sälja |
| 6:21 | skratt | du | däcket rullar iväg |
| 6:23 | klar | du | Jaha, Rolf har hämtat trädgårdstomte till flaket. |
| 6:23 | målruta |  | Printa en lampskärm att sälja |
| 6:24 | kvittens-bock |  | ✓ Ställ datorn i skjulet |
| 6:25 | sak | du | En lampskärm. Folk betalar för ljus som ser fint ut. |
| 6:25 | pil |  | Printa en lampskärm att sälja |
| 6:25 | notis | tanke | 💭 En lampskärm. Folk betalar för ljus som ser fint ut. |
| 6:25 | röst | du | En lampskärm. Folk betalar för ljus som ser fint ut. · MÅL |
| 6:25 | nick |  | nick:55 |
| 6:29 | klar | du | En lampskärm. Folk betalar för ljus som ser fint ut. |
| 6:34 | väntar | mamma | Jag har städat ditt rum. Det tog tre dagar. Jag hittade en macka från i somras. En macka. |
| 6:37 | sak | du | En webbshop. Från ett skjul. Med modem. Varför inte. |
| 6:37 | notis | tanke | 💭 En webbshop. Från ett skjul. Med modem. Varför inte. |
| 6:37 | röst | du | En webbshop. Från ett skjul. Med modem. Varför inte. · STORY |
| 6:42 | klar | du | En webbshop. Från ett skjul. Med modem. Varför inte. |
| 6:44 | händelse | printStart | sak=lampskarm |
| 6:50 | toast | guld | ✅ |
| 6:50 | händelse | printKlar | sak=lampskarm n=1 |
| 6:50 | händelse | malKlart | id=lampskarm del=Dag 5 – Tätt och mysigt nasta=mysigt |
| 6:50 | väntar | du | Skjulet ska bli mysigt på riktigt. Det är mitt hem nu. |
| 6:50 | målruta |  | Gör det mysigt · trivsel 104/130 |
| 6:50 | MÅL |  | Gör det mysigt · trivsel 104/130 |
| 6:50 | sak | du | Skjulet ska bli mysigt på riktigt. Det är mitt hem nu. |
| 6:50 | pil |  | Gör det mysigt · trivsel 104/130 |
| 6:50 | notis | tanke | 💭 Skjulet ska bli mysigt på riktigt. Det är mitt hem nu. |
| 6:50 | röst | du | Skjulet ska bli mysigt på riktigt. Det är mitt hem nu. · MÅL |
| 6:51 | händelse | tagitUrPrint | sak=lampskarm n=1 |
| 6:51 | nick |  | nick:56 |
| 6:54 | kvittens-bock |  | ✓ Printa en lampskärm att sälja |
| 6:55 | klar | du | Skjulet ska bli mysigt på riktigt. Det är mitt hem nu. |
| 7:04 | toast | guld | 3D-modell köpt – printa fönster på skrivaren |
| 7:04 | händelse | kopt | sak=fonster |
| 7:13 | händelse | printStart | sak=byggsats:fonster |
| 7:13 | paket |  | tanke |
| 7:13 | tanke | du | Kajsa. Ut ur skrivaren. Nu. |
| 7:13 | väntar | du | Kajsa. Ut ur skrivaren. Nu. |
| 7:13 | skratt | du | Kajsa i skrivaren |
| 7:16 | sak | du | Kajsa. Ut ur skrivaren. Nu. |
| 7:16 | notis | tanke | 💭 Kajsa. Ut ur skrivaren. Nu. |
| 7:16 | röst | du | Kajsa. Ut ur skrivaren. Nu. · REAKTION |
| 7:16 | toast | bra | Del 1 av 2 klar |
| 7:18 | klar | du | Kajsa. Ut ur skrivaren. Nu. |
| 7:19 | händelse | printKlar | sak=byggsats:fonster n=1 |
| 7:19 | toast | guld | ✅ |
| 7:20 | händelse | tagitUrPrint | sak=byggsats:fonster n=1 |
| 7:20 | paket |  | sms |
| 7:20 | väntar | ali | Ali här. Fönster – printad. På riktigt. Jag har visat bilden för min fru tre gånger. |
| 7:28 | sak | ali | Ali här. Fönster – printad. På riktigt. Jag har visat bilden för min fru tre gånger. |
| 7:28 | sms | ali | Ali här. Fönster – printad. På riktigt. Jag har visat bilden för min fru tre gånger. |
| 7:28 | sms-bubbla | ali | Ali här. Fönster – printad. På riktigt. Jag har visat bilden för min fru tre gånger. |
| 7:28 | röst | ali | Ali här. Fönster – printad. På riktigt. Jag har visat bilden för min fru tre gånger. · REAKTION |
| 7:30 | toast | guld | 3D-modell köpt – printa trägolv på skrivaren |
| 7:30 | händelse | kopt | sak=golv |
| 7:35 | klar | ali | Ali här. Fönster – printad. På riktigt. Jag har visat bilden för min fru tre gånger. |
| 7:39 | händelse | printStart | sak=byggsats:golv |
| 7:42 | toast | bra | Del 1 av 3 klar |
| 7:44 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 7:50 | väntar | värld:Mjau. | Mjau. |
| 7:55 | sak | värld:Mjau. | Mjau. |
| 7:55 | bubbla |  | Mjau. |
| 7:58 | klar | värld:Mjau. | Mjau. |
| 7:58 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 7:58 | väntar | notis:Skrivare M: Tornet är tomt – mal mer så  | Skrivare M: Tornet är tomt – mal mer så fortsätter den |
| 7:59 | toast | bra | Del 2 av 3 klar |
| 8:00 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 8:02 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 8:02 | skratt | du | falsk tuta |
| 8:03 | händelse | printKlar | sak=byggsats:golv n=1 |
| 8:03 | toast | guld | ✅ |
| 8:06 | sak | notis:Skrivare M: Tornet är tomt – mal mer så  | Skrivare M: Tornet är tomt – mal mer så fortsätter den |
| 8:06 | notis | fel | Skrivare M: Tornet är tomt – mal mer så fortsätter den |
| 8:08 | klar | notis:Skrivare M: Tornet är tomt – mal mer så  | Skrivare M: Tornet är tomt – mal mer så fortsätter den |
| 8:09 | händelse | tagitUrPrint | sak=byggsats:golv n=1 |
| 8:13 | väntar | info:guld | Trägolv på plats! Trivsel +8 · Ali betalar nu +0 % |
| 8:13 | sak | info:guld | Trägolv på plats! Trivsel +8 · Ali betalar nu +0 % |
| 8:13 | kvitto-visas | info:guld | Trägolv på plats! Trivsel +8 · Ali betalar nu +0 % |
| 8:13 | toast | guld | Trägolv på plats! Trivsel +8 · Ali betalar nu +0 % |
| 8:15 | klar | info:guld | Trägolv på plats! Trivsel +8 · Ali betalar nu +0 % |
| 8:16 | skratt | du | däcket rullar iväg |
| 8:23 | händelse | printStart | sak=pall |
| 8:23 | väntar | värld:TUUT! Tjena! | TUUT! Tjena! |
| 8:26 | sak | värld:TUUT! Tjena! | TUUT! Tjena! |
| 8:26 | bubbla |  | TUUT! Tjena! |
| 8:28 | toast | guld | ✅ |
| 8:28 | händelse | printKlar | sak=pall n=11 |
| 8:28 | händelse | tagitUrPrint | sak=pall n=1 |
| 8:29 | klar | värld:TUUT! Tjena! | TUUT! Tjena! |
| 8:33 | händelse | placerat | sak=pall |
| 8:40 | toast | guld | 3D-modell köpt – printa taklampa med skärm på skrivaren |
| 8:40 | händelse | kopt | sak=taklampa |
| 8:49 | händelse | printStart | sak=byggsats:taklampa |
| 8:51 | händelse | printKlar | sak=byggsats:taklampa n=1 |
| 8:51 | toast | guld | ✅ |
| 8:52 | händelse | tagitUrPrint | sak=byggsats:taklampa n=1 |
| 8:56 | väntar | info:guld | Taklampa med skärm på plats! Trivsel +6 · Ali betalar nu +0 % |
| 8:56 | sak | info:guld | Taklampa med skärm på plats! Trivsel +6 · Ali betalar nu +0 % |
| 8:56 | kvitto-visas | info:guld | Taklampa med skärm på plats! Trivsel +6 · Ali betalar nu +0 % |
| 8:56 | toast | guld | Taklampa med skärm på plats! Trivsel +6 · Ali betalar nu +0 % |
| 8:58 | klar | info:guld | Taklampa med skärm på plats! Trivsel +6 · Ali betalar nu +0 % |
| 9:00 | scenInfo | du | Lampan tänds |
| 9:02 | morgonkort | ⏸️ Pausad | ⏸️ Pausad · Klicka för att fortsätta. |
| 9:09 | tanke | du | Det börjar kännas som ett hem. På riktigt. |
| 9:09 | notis | tanke | 💭 Det börjar kännas som ett hem. På riktigt. |
| 9:09 | röst | du | Det börjar kännas som ett hem. På riktigt. · REAKTION |
| 9:13 | händelse | malKlart | id=mysigt del=Dag 5 – Tätt och mysigt nasta=vind5 |
| 9:13 | lapp | 📔 Dagbok | Lampan lyser. Pappa ska visst komma förbi i morgon. |
| 9:13 | meddelande | du | Lampan lyser. Pappa ska visst komma förbi i morgon. |
| 9:13 | dagbokkort | du | Lampan lyser. Pappa ska visst komma förbi i morgon. |
| 9:13 | väntar | du | En tredje vindsnurra på taket. Skrivare M drar mycket. |
| 9:13 | målruta |  | Printa och sälj |
| 9:13 | MÅL |  | Printa och sälj |
| 9:13 | röst | du | Dag 5. 17 dagar till jul. Lampan lyser. Pappa ska visst komma förbi i morgon. · STORY |
| 9:20 | händelse | brevLast | id=klart |
| 9:21 | händelse | printStart | sak=pall |
| 9:22 | sak | du | En tredje vindsnurra på taket. Skrivare M drar mycket. |
| 9:22 | pil |  | Printa och sälj |
| 9:22 | notis | tanke | 💭 En tredje vindsnurra på taket. Skrivare M drar mycket. |
| 9:22 | röst | du | En tredje vindsnurra på taket. Skrivare M drar mycket. · MÅL |
| 9:26 | toast | guld | ✅ |
| 9:26 | händelse | printKlar | sak=pall n=12 |
| 9:26 | händelse | tagitUrPrint | sak=pall n=1 |
| 9:27 | klar | du | En tredje vindsnurra på taket. Skrivare M drar mycket. |
| 9:32 | händelse | placerat | sak=pall |
| 9:39 | händelse | printStart | sak=kruka |
| 9:39 | skratt | du | Kajsa i skrivaren |
| 9:42 | toast | guld | ✅ |
| 9:42 | händelse | printKlar | sak=kruka n=54 |
| 9:43 | händelse | tagitUrPrint | sak=kruka n=1 |
| 9:56 | webb | du | packade 1 kruka |
| 10:11 | väntar | info:bra | 📦 Paketet till Majvor i Nässjö ligger i postlådan – Rolf tar det till posten |
| 10:11 | sak | info:bra | 📦 Paketet till Majvor i Nässjö ligger i postlådan – Rolf tar det till posten |
| 10:11 | kvitto-visas | info:bra | 📦 Paketet till Majvor i Nässjö ligger i postlådan – Rolf tar det till posten |
| 10:11 | toast | bra | 📦 Paketet till Majvor i Nässjö ligger i postlådan – Rolf tar det till posten |
| 10:13 | väntar | rolf | ÖJ! Ja kör dina paket till posten. Ja ska ändå förbi. Ja tar en tia för bensinen. Eller för Kajsas lax. Mest för laxen. /Rolf​ |
| 10:13 | klar | info:bra | 📦 Paketet till Majvor i Nässjö ligger i postlådan – Rolf tar det till posten |
| 10:15 | händelse | printStart | sak=pall |
| 10:20 | toast | guld | ✅ |
| 10:20 | händelse | printKlar | sak=pall n=13 |
| 10:21 | händelse | tagitUrPrint | sak=pall n=1 |
| 10:25 | sak | rolf | ÖJ! Ja kör dina paket till posten. Ja ska ändå förbi. Ja tar en tia för bensinen. Eller för Kajsas lax. Mest för laxen. /Rolf​ |
| 10:25 | notis |  | ✉️ ÖJ! Ja kör dina paket till posten. Ja ska ändå förbi. Ja tar en tia för bensinen. Eller för Kajsas lax. Mest för laxen. /Rolf​ |
| 10:25 | röst | rolf | ÖJ! Ja kör dina paket till posten. Ja ska ändå förbi. Ja tar en tia för bensinen. Eller för Kajsas lax. Mest för laxen. /Rolf​ · STORY |
| 10:28 | aliSalt | ali | 189 |
| 10:29 | aliSalt | ali | 20 |
| 10:33 | skratt | du | falsk tuta |
| 10:36 | klar | rolf | ÖJ! Ja kör dina paket till posten. Ja ska ändå förbi. Ja tar en tia för bensinen. Eller för Kajsas lax. Mest för laxen. /Rolf​ |
| 10:47 | väntar | värld:Mjau. | Mjau. |
| 10:54 | sak | värld:Mjau. | Mjau. |
| 10:54 | bubbla |  | Mjau. |
| 10:56 | klar | värld:Mjau. | Mjau. |
| 11:01 | händelse | printStart | sak=pall |
| 11:01 | skratt | du | Kajsa i skrivaren |
| 11:06 | toast | guld | ✅ |
| 11:06 | händelse | printKlar | sak=pall n=14 |
| 11:07 | händelse | tagitUrPrint | sak=pall n=1 |
| 11:14 | aliSalt | ali | 189 |
| 11:24 | händelse | printStart | sak=pall |
| 11:29 | toast | guld | ✅ |
| 11:29 | händelse | printKlar | sak=pall n=15 |
| 11:29 | händelse | tagitUrPrint | sak=pall n=1 |
| 11:36 | aliSalt | ali | 189 |
| 11:46 | händelse | printStart | sak=pall |
| 11:51 | skratt | du | plastspagetti |
| 11:51 | toast | guld | ✅ |
| 11:51 | händelse | printKlar | sak=pall n=16 |
| 11:51 | händelse | tagitUrPrint | sak=spagetti n=1 |
| 11:58 | skratt | du | Ali köper konst |
| 11:58 | aliSalt | ali | 3 |
| 12:06 | händelse | printStart | sak=pall |
| 12:06 | skratt | du | Kajsa i skrivaren |
| 12:12 | toast | guld | ✅ |
| 12:12 | händelse | printKlar | sak=pall n=17 |
| 12:12 | händelse | tagitUrPrint | sak=pall n=1 |
| 12:19 | aliSalt | ali | 189 |
| 12:28 | väntar | värld:TUUT! Hej grannen! | TUUT! Hej grannen! |
| 12:28 | sak | värld:TUUT! Hej grannen! | TUUT! Hej grannen! |
| 12:28 | bubbla |  | TUUT! Hej grannen! |
| 12:29 | ljud | kajsa | Mjau |
| 12:31 | klar | värld:TUUT! Hej grannen! | TUUT! Hej grannen! |
| 12:34 | struken | mamma | Jag har städat ditt rum. Det tog tre dagar. Jag hittade en macka från i somras. En macka. |
| 12:46 | händelse | printStart | sak=pall |
| 12:49 | upplåst | strom | vindsnurra3 |
| 12:49 | brott | RESERV | vindsnurra3 (strom 0 av 15) |
| 12:49 | händelse | upplast | id=vindsnurra3 flask=strom |
| 12:49 | paket |  | sms |
| 12:49 | väntar | ali | Ali här. En tredje snurra. Mitt på taket. Sen är taket fullt. Sen får solen ta över. |
| 12:49 | sak | ali | Ali här. En tredje snurra. Mitt på taket. Sen är taket fullt. Sen får solen ta över. |
| 12:49 | sms | ali | Ali här. En tredje snurra. Mitt på taket. Sen är taket fullt. Sen får solen ta över. |
| 12:49 | sms-bubbla | ali | Ali här. En tredje snurra. Mitt på taket. Sen är taket fullt. Sen får solen ta över. |
| 12:49 | röst | ali | Ali här. En tredje snurra. Mitt på taket. Sen är taket fullt. Sen får solen ta över. · STORY |
| 12:51 | toast | guld | ✅ |
| 12:51 | händelse | printKlar | sak=pall n=18 |
| 12:51 | händelse | tagitUrPrint | sak=pall n=1 |
| 12:56 | klar | ali | Ali här. En tredje snurra. Mitt på taket. Sen är taket fullt. Sen får solen ta över. |
| 12:59 | aliSalt | ali | 189 |
| 13:03 | toast | guld | 3D-modell köpt – printa vindsnurra till skjultaket på skrivaren |
| 13:03 | händelse | kopt | sak=vindsnurra |
| 13:12 | händelse | printStart | sak=byggsats:vindsnurra |
| 13:15 | händelse | printKlar | sak=byggsats:vindsnurra n=1 |
| 13:15 | toast | guld | ✅ |
| 13:16 | väntar | info:guld | 🌬️ Vindsnurran ligger i handen – klicka på skjulet för att sätta den på taket |
| 13:16 | händelse | tagitUrPrint | sak=byggsats:vindsnurra n=1 |
| 13:16 | sak | info:guld | 🌬️ Vindsnurran ligger i handen – klicka på skjulet för att sätta den på taket |
| 13:16 | kvitto-visas | info:guld | 🌬️ Vindsnurran ligger i handen – klicka på skjulet för att sätta den på taket |
| 13:16 | toast | guld | 🌬️ Vindsnurran ligger i handen – klicka på skjulet för att sätta den på taket |
| 13:18 | klar | info:guld | 🌬️ Vindsnurran ligger i handen – klicka på skjulet för att sätta den på taket |
| 13:24 | händelse | placerat | sak=vindsnurra |
| 13:24 | väntar | info:guld | 🌬️ Vindsnurran sitter på taket – den trampar cykeln åt dig när det blåser |
| 13:24 | monterat | du | byggsats:vindsnurra |
| 13:24 | händelse | monterat | sak=vindsnurra |
| 13:24 | sak | info:guld | 🌬️ Vindsnurran sitter på taket – den trampar cykeln åt dig när det blåser |
| 13:24 | kvitto-visas | info:guld | 🌬️ Vindsnurran sitter på taket – den trampar cykeln åt dig när det blåser |
| 13:24 | toast | guld | 🌬️ Vindsnurran sitter på taket – den trampar cykeln åt dig när det blåser |
| 13:24 | händelse | malKlart | id=vind5 del=Dag 5 – Tätt och mysigt nasta=sov5 |
| 13:24 | paket |  | lapp |
| 13:24 | väntar | du | Dag 5 är slut. Nu vet en mås att jag bor HÄR. Pengarna är borta. Med en mås. |
| 13:24 | paket |  | sms |
| 13:24 | väntar | mamma | Pappa kommer förbi i morgon. Han säger inget men han vill. ❤️ |
| 13:24 | paket |  | sms |
| 13:24 | väntar | mamma | Pappa och jag har lagt undan lite. 1 000 kr. Till något fint i ditt hus. Inte till chips. ❤️ /Mamma |
| 13:24 | tanke | du | Skjulet luktar mat i stället för mus. Framsteg. |
| 13:24 | väntar | du | Skjulet luktar mat i stället för mus. Framsteg. |
| 13:24 | struken | du | Skjulet luktar mat i stället för mus. Framsteg. |
| 13:24 | MÅL |  | Klart för idag – sov när du vill |
| 13:26 | paket |  | replik |
| 13:26 | väntar | rolf | Hoppa in. Ja ska visa dej en grej. |
| 13:26 | skratt | du | falsk tuta |
| 13:26 | klar | info:guld | 🌬️ Vindsnurran sitter på taket – den trampar cykeln åt dig när det blåser |
| 13:28 | målruta |  | Klart för idag – sov när du vill |
| 13:28 | kvittens-bock |  | ✓ Sätt en tredje vindsnurra på taket |
| 13:28 | sak | du | (nytt mål i rutan) |
| 13:28 | pil |  | Klart för idag – sov när du vill |
| 13:28 | klar | du | (nytt mål i rutan) |
| 13:35 | röst | mamma | Haha, träplankor? · STORY |
| 13:38 | röst | mamma | Vad är det för skit? Du har ju inte ens tapeter på väggarna. · STORY |
| 13:42 | röst | mamma | Och var är badrummet? Du duschar väl? · STORY |
| 13:45 | röst | mamma | Pappa säger "aha, vad lugnt då". Pappa säger det om allt. · STORY |
| 13:50 | röst | mamma | …men fönstret var fint. Det kommer in ljus i alla fall. ❤️ · STORY |
| 13:56 | morgonkort | 📕 Kapitel 2: Ett riktigt hem | 📕 Kapitel 2: Ett riktigt hem · Mamma är inte imponerad. Än. Nästa mål: tapeter , en egen gamingbod med RGB, gamer-inredning – och en jacuzzi . Visa henne. Ali har nya ritningar – och ♾️ trimningar som aldrig tar slut. |
| 13:56 | väntar | notis:🌇 Klockan är 21. Ali slår igen luckan.  | 🌇 Klockan är 21. Ali slår igen luckan. Dagens jobb är klart – gå in i skjulet och sov i sängen. |
| 14:10 | sak | du | Dag 5 är slut. Nu vet en mås att jag bor HÄR. Pengarna är borta. Med en mås. |
| 14:10 | lapp | 📔 Dagbok | Dag 5 är slut. Nu vet en mås att jag bor HÄR. Pengarna är borta. Med en mås. |
| 14:10 | meddelande | du | Dag 5 är slut. Nu vet en mås att jag bor HÄR. Pengarna är borta. Med en mås. |
| 14:10 | dagbokkort | du | Dag 5 är slut. Nu vet en mås att jag bor HÄR. Pengarna är borta. Med en mås. |
| 14:10 | röst | du | Dag 5. 17 dagar till jul. Dag 5 är slut. Nu vet en mås att jag bor HÄR. Pengarna är borta. Med en mås. · STORY |
| 14:19 | händelse | brevLast | id=kvall5 |
| 14:19 | klar | du | Dag 5 är slut. Nu vet en mås att jag bor HÄR. Pengarna är borta. Med en mås. |
| 14:21 | struken | notis:🌇 Klockan är 21. Ali slår igen luckan.  | 🌇 Klockan är 21. Ali slår igen luckan. Dagens jobb är klart – gå in i skjulet och sov i sängen. |
| 14:27 | sak | rolf | Hoppa in. Ja ska visa dej en grej. |
| 14:27 | notis |  | Rolf: ”Hoppa in. Ja ska visa dej en grej.” |
| 14:27 | röst | rolf | Hoppa in. Ja ska visa dej en grej. · STORY |
| 14:29 | scenInfo | rolf | Rolf kör upp till sin bänk |
| 14:29 | klar | rolf | Hoppa in. Ja ska visa dej en grej. |
| 14:33 | röst | rolf | Kall öl ä viktigt. · STORY |
| 14:33 | bubbla | rolf | Kall öl ä viktigt. |
| 14:41 | röst | rolf | Ja kommer hit varje kväll. Förr va vi två på bänken. · STORY |
| 14:41 | bubbla | rolf | Ja kommer hit varje kväll. Förr va vi två på bänken. |
| 14:42 | skratt | du | falsk tuta |
| 14:59 | röst | rolf | Dä där ä Bengt-Åke. Vinka int. · STORY |
| 14:59 | bubbla | rolf | Dä där ä Bengt-Åke. Vinka int. |
| 15:06 | väntar | notis:📔 Prestation: Ett hem att bo i · +3 res | 📔 Prestation: Ett hem att bo i · +3 respekt |
| 15:13 | röst | rolf | Den ä skyldig mej pengar. · STORY |
| 15:13 | bubbla | rolf | Den ä skyldig mej pengar. |
| 15:23 | väntar | foto | Rolfs bänk |
| 15:23 | paket |  | tanke |
| 15:23 | tanke | du | Han kommer hit varje kväll. Nu vet jag var. |
| 15:23 | väntar | du | Han kommer hit varje kväll. Nu vet jag var. |
| 15:23 | skratt | du | Rolfs bänk |
| 15:29 | sak | mamma | Pappa kommer förbi i morgon. Han säger inget men han vill. ❤️ |
| 15:29 | sms | mamma | Pappa kommer förbi i morgon. Han säger inget men han vill. ❤️ |
| 15:29 | sms-bubbla | mamma | Pappa kommer förbi i morgon. Han säger inget men han vill. ❤️ |
| 15:29 | röst | mamma | Pappa kommer förbi i morgon. Han säger inget men han vill. ❤️ · STORY |
| 15:29 | tanke | du | Mätt. Varm. Jag skulle kunna bära en kyl. |
| 15:29 | väntar | du | Mätt. Varm. Jag skulle kunna bära en kyl. |
| 15:30 | lapp | Dagbok | Tre dagar. Tänk om tre veckor. |
| 15:32 | röst | du | Tre dagar. Tänk om tre veckor. · REAKTION |
| 15:34 | klar | mamma | Pappa kommer förbi i morgon. Han säger inget men han vill. ❤️ |
| 15:36 | struken | notis:📔 Prestation: Ett hem att bo i · +3 res | 📔 Prestation: Ett hem att bo i · +3 respekt |
| 15:42 | sak | foto | Rolfs bänk |
| 15:42 | foto | du | Rolfs bänk |
| 15:45 | klar | foto | Rolfs bänk |
| 15:46 | webbBetalt | du | 100 |

<details><summary>Botens handlingar dag 5</summary>

- 0:00 — dag 5 börjar — (4080 kr)
- 0:08 popup: "FORTSÄTT" (4080 kr)
- 0:21 gå till Rolfs postlåda (28 m) (4080 kr)
- 0:27 panel: "Rolfs postlåda
Det här låg i l" (4330 kr)
- 0:28 tjänar pengar till väntar på sopbilen (BO): 4330/4390 kr → printar pall (270 kr) (4330 kr)
- 0:29 gå till skrivaren (8 m) (4330 kr)
- 0:31 printar Pall (4330 kr)
- 0:37 tar ut 1 st ur skrivaren (4330 kr)
- 0:43 gå till Ali (26 m) (4330 kr)
- 0:43 öppnar Alis butik – sälja (4330 kr)
- 0:44 säljer hos Ali: +270 kr (4600 kr)
- 0:47 tjänar pengar till väntar på sopbilen (BO): 4600/4660 kr → printar pall (257 kr) (4600 kr)
- 0:57 plockar 2 skräp på tippen (bär max 16) (4600 kr)
- 0:59 gå till kvarnen (11 m) (4600 kr)
- 1:06 gå till skrivaren (5 m) (4600 kr)
- 1:07 printar Pall (4600 kr)
- 1:13 tar ut 1 st ur skrivaren (4600 kr)
- 1:19 gå till Ali (27 m) (4600 kr)
- 1:19 öppnar Alis butik – sälja (4600 kr)
- 1:21 säljer hos Ali: +257 kr (4857 kr)
- 1:24 tjänar pengar till väntar på sopbilen (BO): 4857/4917 kr → printar pall (244 kr) (4857 kr)
- 1:29 gå till skrivaren (24 m) (4857 kr)
- 1:31 printar Pall (4857 kr)
- 1:37 tar ut 1 st ur skrivaren (4857 kr)
- 1:42 gå till Ali (24 m) (4857 kr)
- 1:42 öppnar Alis butik – sälja (4857 kr)
- 1:44 säljer hos Ali: +244 kr (5101 kr)
- 1:47 tjänar pengar till väntar på sopbilen (BO): 5101/5161 kr → printar pall (231 kr) (5101 kr)
- 1:52 gå till skrivaren (24 m) (5101 kr)
- 1:54 printar Pall (5101 kr)
- 2:00 tar ut 1 st ur skrivaren (5101 kr)
- 2:05 gå till Ali (24 m) (5101 kr)
- 2:05 öppnar Alis butik – sälja (5101 kr)
- 2:07 säljer hos Ali: +231 kr (5332 kr)
- 2:10 tjänar pengar till väntar på sopbilen (BO): 5332/5392 kr → printar pall (220 kr) (5332 kr)
- 2:15 gå till skrivaren (24 m) (5332 kr)
- 2:17 printar Pall (5332 kr)
- 2:23 tar ut 1 st ur skrivaren (5332 kr)
- 2:28 gå till Ali (24 m) (5332 kr)
- 2:28 öppnar Alis butik – sälja (5332 kr)
- 2:30 säljer hos Ali: +220 kr (5552 kr)
- 2:47 popup: "Okej, jag säger inget." (5552 kr)
- 2:56 popup: "Läst" (5552 kr)
- 2:56 tjänar pengar till väntar på sopbilen (BO): 5552/5612 kr → printar pall (209 kr) (5552 kr)
- 3:08 plockar 5 skräp på tippen (bär max 16) (5552 kr)
- 3:10 gå till kvarnen (11 m) (5552 kr)
- 3:13 gå till skrivaren (5 m) (5552 kr)
- 3:15 printar Pall (5552 kr)
- 3:21 tar ut 1 st ur skrivaren (5552 kr)
- 3:27 gå till Ali (26 m) (5552 kr)
- 3:27 öppnar Alis butik – sälja (5552 kr)
- 3:29 tjänar pengar till väntar på sopbilen (BO): 5552/5612 kr → printar pall (209 kr) (5552 kr)
- 3:34 gå till skrivaren (24 m) (5552 kr)
- 3:36 printar Pall (5552 kr)
- 3:42 tar ut 1 st ur skrivaren (5552 kr)
- 3:47 gå till Ali (24 m) (5552 kr)
- 3:47 öppnar Alis butik – sälja (5552 kr)
- 3:49 säljer hos Ali: +209 kr (5761 kr)
- 3:52 tjänar pengar till väntar på sopbilen (BO): 5761/5821 kr → printar pall (198 kr) (5761 kr)
- 3:57 gå till skrivaren (24 m) (5761 kr)
- 3:59 printar Pall (5761 kr)
- 4:05 tar ut 1 st ur skrivaren (5761 kr)
- 4:10 gå till Ali (24 m) (5761 kr)
- 4:10 öppnar Alis butik – sälja (5761 kr)
- 4:12 säljer hos Ali: +198 kr (5959 kr)
- 4:27 gå till Rolfs postlåda (31 m) (5959 kr)
- 4:30 gå till skrivaren (8 m) (5959 kr)
- 4:31 printar Trädgårdstomte till flaket (5959 kr)
- 4:37 tar ut 1 st ur skrivaren (5959 kr)
- 4:50 valj tomte: true, vald tomte, post {"l":null,"tr":null,"tm":[]}, nummer false (5959 kr)
- 4:52 gå till Rolfs postlåda (8 m) (5959 kr)
- 5:04 gå till skrivaren (8 m) (5959 kr)
- 5:06 printar Isolerskiva (vägg) (5959 kr)
- 5:11 tar ut 1 st ur skrivaren (5959 kr)
- 5:15 gå till skjulet (hoger) (19 m) (5959 kr)
- 5:29 plockar 3 skräp på tippen (bär max 16) (5959 kr)
- 5:32 gå till kvarnen (12 m) (5959 kr)
- 5:37 gå till skrivaren (5 m) (5959 kr)
- 5:39 printar Isolerskiva (vägg) (5959 kr)
- 5:44 tar ut 1 st ur skrivaren (5959 kr)
- 5:48 gå till skjulet (fram) (19 m) (5959 kr)
- 6:02 gå till Ali (20 m) (5959 kr)
- 6:02 öppnar Alis butik – köpa alis pappas gamla dator (5959 kr)
- 6:05 köper webbdator för 300 kr (5659 kr)
- 6:11 gå till skrivaren (24 m) (5659 kr)
- 6:13 printar Alis pappas gamla dator (5659 kr)
- 6:14 tar ut 1 st ur skrivaren (5659 kr)
- 6:19 gå till platsen för alis pappas gamla dator (21 m) (5659 kr)
- 6:20 ställer ut alis pappas gamla dator (5659 kr)
- 6:35 gå till Ali (16 m) (5659 kr)
- 6:35 öppnar Alis butik – köpa receptet lampskärm (5659 kr)
- 6:36 Ali har inte lampskarm (5659 kr)
- 6:42 gå till skrivaren (24 m) (5659 kr)
- 6:44 printar Lampskärm (5659 kr)
- 6:51 tar ut 1 st ur skrivaren (5659 kr)
- 7:02 gå till Ali (24 m) (5659 kr)
- 7:02 öppnar Alis butik – köpa fönster (5659 kr)
- 7:05 köper fonster för 90 kr (5569 kr)
- 7:11 gå till skrivaren (24 m) (5569 kr)
- 7:13 printar Fönster (2 delar) (5569 kr)
- 7:21 tar ut 1 st ur skrivaren (5569 kr)
- 7:24 gå till skjulet (18 m) (5569 kr)
- 7:24 sätter ett fönster (5569 kr)
- 7:28 gå till Ali (20 m) (5569 kr)
- 7:28 öppnar Alis butik – köpa trägolv (5569 kr)
- 7:31 köper golv för 140 kr (5429 kr)
- 7:37 gå till skrivaren (24 m) (5429 kr)
- 7:39 printar Trägolv (3 delar) (5429 kr)
- 7:52 plockar 3 skräp på tippen (bär max 16) (5429 kr)
- 7:55 gå till kvarnen (12 m) (5429 kr)
- 8:09 gå till skrivaren (5 m) (5429 kr)
- 8:09 tar ut 1 st ur skrivaren (5429 kr)
- 8:13 gå till skjulet (19 m) (5429 kr)
- 8:21 gå till skrivaren (17 m) (5429 kr)
- 8:23 printar Pall (5429 kr)
- 8:29 tar ut 1 st ur skrivaren (5429 kr)
- 8:32 gå till platsen för pall (18 m) (5429 kr)
- 8:33 ställer ut pall (5429 kr)
- 8:38 gå till Ali (15 m) (5429 kr)
- 8:38 öppnar Alis butik – köpa taklampa med skärm (5429 kr)
- 8:41 köper taklampa för 90 kr (5339 kr)
- 8:47 gå till skrivaren (24 m) (5339 kr)
- 8:49 printar Taklampa med skärm (5339 kr)
- 8:53 tar ut 1 st ur skrivaren (5339 kr)
- 8:56 gå till skjulet (17 m) (5339 kr)
- 9:10 kort: "FORTSÄTTeller tryck Esc" (5339 kr)
- 9:12 gå till skrivaren (19 m) (5339 kr)
- 9:20 popup: "FORTSÄTT" (5339 kr)
- 9:21 printar Pall (5339 kr)
- 9:27 tar ut 1 st ur skrivaren (5339 kr)
- 9:31 gå till platsen för pall (19 m) (5339 kr)
- 9:32 ställer ut pall (5339 kr)
- 9:38 gå till skrivaren (19 m) (5339 kr)
- 9:39 printar Blomkruka (5339 kr)
- 9:43 tar ut 1 st ur skrivaren (5339 kr)
- 9:47 gå till datorn (18 m) (5339 kr)
- 9:55 panel: "Webbshopen · Soptippsvägen 1
B" (5339 kr)
- 10:05 panel: "Webbshopen · Soptippsvägen 1
B" (5339 kr)
- 10:11 gå till Rolfs postlåda (paket) (29 m) (5339 kr)
- 10:12 webbshop: 1 paket i postlådan (5339 kr)
- 10:12 tjänar pengar till väntar på flaskhalsen för vindsnurra3: 5339/5379 kr → printar pall (189 kr) (5339 kr)
- 10:14 gå till skrivaren (8 m) (5339 kr)
- 10:15 printar Pall (5339 kr)
- 10:21 tar ut 1 st ur skrivaren (5339 kr)
- 10:27 gå till Ali (26 m) (5339 kr)
- 10:27 öppnar Alis butik – sälja (5339 kr)
- 10:29 säljer hos Ali: +209 kr (5548 kr)
- 10:38 tjänar pengar till väntar på flaskhalsen för vindsnurra3: 5548/5588 kr → printar pall (189 kr) (5548 kr)
- 10:51 plockar 5 skräp på tippen (bär max 16) (5548 kr)
- 10:53 gå till kvarnen (11 m) (5548 kr)
- 11:00 gå till skrivaren (5 m) (5548 kr)
- 11:01 printar Pall (5548 kr)
- 11:07 tar ut 1 st ur skrivaren (5548 kr)
- 11:13 gå till Ali (27 m) (5548 kr)
- 11:13 öppnar Alis butik – sälja (5548 kr)
- 11:15 säljer hos Ali: +189 kr (5737 kr)
- 11:17 tjänar pengar till väntar på flaskhalsen för vindsnurra3: 5737/5777 kr → printar pall (189 kr) (5737 kr)
- 11:22 gå till skrivaren (24 m) (5737 kr)
- 11:24 printar Pall (5737 kr)
- 11:30 tar ut 1 st ur skrivaren (5737 kr)
- 11:35 gå till Ali (24 m) (5737 kr)
- 11:35 öppnar Alis butik – sälja (5737 kr)
- 11:37 säljer hos Ali: +189 kr (5926 kr)
- 11:39 tjänar pengar till väntar på flaskhalsen för vindsnurra3: 5926/5966 kr → printar pall (189 kr) (5926 kr)
- 11:44 gå till skrivaren (24 m) (5926 kr)
- 11:46 printar Pall (5926 kr)
- 11:52 tar ut 1 st ur skrivaren (5926 kr)
- 11:57 gå till Ali (24 m) (5926 kr)
- 11:57 öppnar Alis butik – sälja (5926 kr)
- 11:59 säljer hos Ali: +3 kr (5929 kr)
- 12:00 tjänar pengar till väntar på flaskhalsen för vindsnurra3: 5929/5966 kr → printar pall (189 kr) (5929 kr)
- 12:05 gå till skrivaren (24 m) (5929 kr)
- 12:06 printar Pall (5929 kr)
- 12:13 tar ut 1 st ur skrivaren (5929 kr)
- 12:18 gå till Ali (24 m) (5929 kr)
- 12:18 öppnar Alis butik – sälja (5929 kr)
- 12:20 säljer hos Ali: +189 kr (6118 kr)
- 12:22 tjänar pengar till väntar på flaskhalsen för vindsnurra3: 6118/6158 kr → printar pall (189 kr) (6118 kr)
- 12:34 plockar 5 skräp på tippen (bär max 16) (6118 kr)
- 12:37 gå till kvarnen (13 m) (6118 kr)
- 12:44 gå till skrivaren (5 m) (6118 kr)
- 12:46 printar Pall (6118 kr)
- 12:52 tar ut 1 st ur skrivaren (6118 kr)
- 12:57 gå till Ali (26 m) (6118 kr)
- 12:57 öppnar Alis butik – sälja (6118 kr)
- 12:59 säljer hos Ali: +189 kr (6307 kr)
- 13:01 öppnar Alis butik – köpa vindsnurra till skjultaket (6307 kr)
- 13:04 köper vindsnurra för 133 kr (6174 kr)
- 13:10 gå till skrivaren (24 m) (6174 kr)
- 13:12 printar Vindsnurra till skjultaket (6174 kr)
- 13:17 tar ut 1 st ur skrivaren (6174 kr)
- 13:24 gå till sätt vindsnurran på taket (18 m) (6174 kr)
- 13:56 telefonscen: "Okej. Kapitel 2 då. 😤" (7174 kr)
- 14:04 kort: "Kör!" (7174 kr)
- 14:19 popup: "FORTSÄTT" (7174 kr)
- 14:29 gå till sopbilen (Rolfs bänk) (39 m) (7174 kr)
- 15:29 tillbaka från Rolfs bänk (7174 kr)
- 15:34 panel: "Dagbok
Före och efter
Dag 1
Da" (7174 kr)
- 15:44 gå till sängen (39 m) (7174 kr)

</details>

## Dag 6

| Tid | Källa | Vem | Text |
|---|---|---|---|
| 15:46 | vara | ali | kruka |
| 15:46 | händelse | malKlart | id=sov5 del=Dag 5 – Tätt och mysigt nasta=pappa6 |
| 15:46 | MÅL |  | Pappa kommer förbi idag |
| 15:48 | tanke | du | Göran tar mina saker. Kanske han vill ha något eget? |
| 15:48 | väntar | du | Göran tar mina saker. Kanske han vill ha något eget? |
| 0:01 | händelse | dagenBorjar | dag=6 |
| 0:01 | meddelande | du | Pengarna tog slut. Därför: en fabrik. |
| 0:01 | dagbokkort | du | KAPITEL 2 · Dag 6. 16 dagar till jul · Pengarna tog slut. Därför: en fabrik. |
| 0:01 | röst | du | KAPITEL 2 · Dag 6. 16 dagar till jul. Pengarna tog slut. Därför: en fabrik. · STORY |
| 0:07 | notis | nytt | Ali vill ha idag: Blomkruka – +50 % hela dagen (105 kr just nu)🖥️ Webbshopen: 1 paket levererade · +100 kr📈 Igår: 19 printat · 13 sålt |
| 0:07 | händelse | morgonkortStangt | dag=6 |
| 0:07 | struken | kedja | d6 |
| 0:07 | struken | du | Mätt. Varm. Jag skulle kunna bära en kyl. |
| 0:07 | väntar | du | Pappa kommer förbi idag. |
| 0:11 | målruta |  | Pappa kommer förbi idag |
| 0:12 | väntar | info:fel | Göran snodde lampskärm. |
| 0:13 | sak | du | Pappa kommer förbi idag. |
| 0:13 | pil |  | Pappa kommer förbi idag |
| 0:13 | röst | du | Pappa kommer förbi idag. · MÅL |
| 0:15 | klar | du | Pappa kommer förbi idag. |
| 0:15 | sak | info:fel | Göran snodde lampskärm. |
| 0:15 | kvitto-visas | info:fel | Göran snodde lampskärm. |
| 0:15 | toast | fel | Göran snodde lampskärm. |
| 0:17 | klar | info:fel | Göran snodde lampskärm. |
| 0:19 | väntar | info:info | Pappas bil stannade vid grinden |
| 0:19 | scenInfo | pappa | Pappa kommer |
| 0:31 | paket |  | sms |
| 0:31 | väntar | rolf | Folk pratar gott om dej. Ja hitta röda backar av riktigt bra plast på tippen. Ja la dom vid grinden. /R |
| 0:31 | väntar | rolf | Tomten sitter på flaket nu. En tant vinka tillbaka. Första gången på trettio år. Pengar i lådan. /Rolf |
| 0:31 | sak | du | Han kommer hit varje kväll. Nu vet jag var. |
| 0:31 | notis | tanke | 💭 Han kommer hit varje kväll. Nu vet jag var. |
| 0:31 | röst | du | Han kommer hit varje kväll. Nu vet jag var. · STORY |
| 0:33 | tanke | du | Någon från kommunen fotograferade skylten. Länge. |
| 0:33 | väntar | du | Någon från kommunen fotograferade skylten. Länge. |
| 0:35 | klar | du | Han kommer hit varje kväll. Nu vet jag var. |
| 0:35 | scenInfo | du | Hälsar på pappa |
| 0:35 | röst | pappa | Jaså. Här bor du alltså. · REAKTION |
| 0:39 | toast |  | Du: Pappa … jag bor på en soptipp. |
| 0:39 | röst | du | Pappa … jag bor på en soptipp. · REAKTION |
| 0:42 | händelse | placerat | sak=burk_kompott |
| 0:42 | händelse | placerat | sak=burk_tavla3 |
| 0:42 | händelse | placerat | sak=burk_blomma |
| 0:42 | händelse | placerat | sak=burk_sill |
| 0:42 | händelse | placerat | sak=burk_lingon |
| 0:42 | toast |  | 🍯 Pappa lade 5 saker från mamma i en hög. |
| 0:42 | röst | pappa | Mamma skickade burkar. Jag bar dem. · REAKTION |
| 0:45 | händelse | placerat | sak=sackkarra |
| 0:45 | röst | pappa | Säckkärra. Den var på rea. · REAKTION |
| 0:49 | toast |  | Du: …Tack? |
| 0:49 | röst | du | …Tack? · REAKTION |
| 0:55 | skratt | du | falsk tuta |
| 1:10 | röst | rolf | ÖJ! Vem ä du då? · REAKTION |
| 1:13 | röst | pappa | Pappan. · REAKTION |
| 1:15 | röst | rolf | Hörru. Jaså. Rolf. Ja kör bilen. · REAKTION |
| 1:18 | röst | pappa | Scania. Trettiotvåa? · REAKTION |
| 1:21 | röst | rolf | Tjugoåtta. Men hon går som en klocka. · REAKTION |
| 1:24 | röst | rolf | Hörru. Mä en sån kan du ta tunnorna på tippen. Dôm ä av den hårda plasten. Den röda. Den klarar int en köttkvarn. · REAKTION |
| 1:33 | toast |  | Du: Var får man en kvarn som klarar den då? |
| 1:33 | röst | du | Var får man en kvarn som klarar den då? · REAKTION |
| 1:37 | röst | rolf | Ali har en röd kvarn längst in i lagret. Han har aldrig vågat starta den. · REAKTION |
| 1:43 | scenInfo | rolf | Två tunnor vid grinden |
| 1:43 | röst | rolf | Tjo. Ja ställer tunnorna vid grinden när ja tömmer. Du får dôm. · REAKTION |
| 1:48 | röst | pappa | Mm. Hej då då. · REAKTION |
| 1:51 | struken | du | Någon från kommunen fotograferade skylten. Länge. |
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
| 2:01 | röst | ali | Du säljer på nätet nu? Bra. Ritningarna köper du här. · STORY |
| 2:01 | butiksbubbla | ali | Du säljer på nätet nu? Bra. Ritningarna köper du här. |
| 2:01 | tanke | du | Servetter. Massor. Ali flyttar lådan när jag tittar. |
| 2:01 | väntar | du | Servetter. Massor. Ali flyttar lådan när jag tittar. |
| 2:01 | paket |  | sms |
| 2:01 | väntar | mamma | Jag har skickat virkade grytvantar (lila) med Rolf. Den ligger i postlådan. |
| 2:02 | skratt | du | Alis dyr-pling |
| 2:02 | toast | guld | Röda kvarnen är min – den ska stå i röda linjen |
| 2:02 | händelse | kopt | sak=petgkvarn |
| 2:02 | butiksbubbla | ali | Den röda? Jag har aldrig vågat starta den. Ta den. Starta den långt bort från mig. |
| 2:03 | röst | ali | Den röda? Jag har aldrig vågat starta den. Ta den. Starta den långt bort från mig. · STORY |
| 2:07 | sak | du | Servetter. Massor. Ali flyttar lådan när jag tittar. |
| 2:07 | notis | tanke | 💭 Servetter. Massor. Ali flyttar lådan när jag tittar. |
| 2:07 | röst | du | Servetter. Massor. Ali flyttar lådan när jag tittar. · REAKTION |
| 2:11 | händelse | printStart | sak=byggsats:petgkvarn |
| 2:11 | klar | du | Servetter. Massor. Ali flyttar lådan när jag tittar. |
| 2:11 | väntar | rolf | Ja hitta ett helt lass på återvinningen. Ingen ville ha dom. Nu ä dom dina. /R |
| 2:15 | toast | bra | Del 1 av 3 klar |
| 2:15 | väntar | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har isolerade väggar nu. Och FÖNSTER. Gunnar, du hör väl? |
| 2:15 | radio | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har isolerade väggar nu. Och FÖNSTER. Gunnar, du hör väl? |
| 2:15 | skratt | du | Radio-Kjelle |
| 2:19 | toast | bra | Del 2 av 3 klar |
| 2:20 | sak | mamma | Pappa och jag har lagt undan lite. 1 000 kr. Till något fint i ditt hus. Inte till chips. ❤️ /Mamma |
| 2:20 | sms | mamma | Pappa och jag har lagt undan lite. 1 000 kr. Till något fint i ditt hus. Inte till chips. ❤️ /Mamma |
| 2:20 | sms-bubbla | mamma | Pappa och jag har lagt undan lite. 1 000 kr. Till något fint i ditt hus. Inte till chips. ❤️ /Mamma |
| 2:20 | röst | mamma | Pappa och jag har lagt undan lite. 1 000 kr. Till något fint i ditt hus. Inte till chips. ❤️ /Mamma · STORY |
| 2:23 | händelse | printKlar | sak=byggsats:petgkvarn n=1 |
| 2:23 | toast | guld | ✅ |
| 2:23 | händelse | tagitUrPrint | sak=byggsats:petgkvarn n=1 |
| 2:25 | väntar | foto | Pappa och Rolf |
| 2:25 | paket |  | tanke |
| 2:25 | tanke | du | Pappa var här. Han såg vad jag har byggt. |
| 2:25 | väntar | du | Pappa var här. Han såg vad jag har byggt. |
| 2:26 | händelse | placerat | sak=petgkvarn |
| 2:26 | händelse | malKlart | id=r6-kop-roda-kvarnen del=Dag 6 – Röd PETG nasta=r6-mal-tunna-roda |
| 2:26 | väntar | du | Mal en tunna i röda kvarnen. |
| 2:26 | MÅL |  | Mal en tunna i röda kvarnen |
| 2:28 | klar | mamma | Pappa och jag har lagt undan lite. 1 000 kr. Till något fint i ditt hus. Inte till chips. ❤️ /Mamma |
| 2:28 | skratt | du | falsk tuta |
| 2:30 | struken | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har isolerade väggar nu. Och FÖNSTER. Gunnar, du hör väl? |
| 2:30 | sak | du | Mal en tunna i röda kvarnen. |
| 2:30 | målruta |  | Mal en tunna i röda kvarnen |
| 2:30 | pil |  | Mal en tunna i röda kvarnen |
| 2:30 | röst | du | Mal en tunna i röda kvarnen. · MÅL |
| 2:30 | kvittens-bock |  | ✓ Ställ den röda kvarnen i röda linjen |
| 2:32 | klar | du | Mal en tunna i röda kvarnen. |
| 2:40 | sak | du | Göran tar mina saker. Kanske han vill ha något eget? |
| 2:40 | notis | tanke | 💭 Göran tar mina saker. Kanske han vill ha något eget? |
| 2:40 | röst | du | Göran tar mina saker. Kanske han vill ha något eget? · STORY |
| 2:43 | skratt | du | däcket rullar iväg |
| 2:45 | klar | du | Göran tar mina saker. Kanske han vill ha något eget? |
| 2:45 | väntar | info:guld | 🛒 Säckkärran är i verktygsraden – en tung sak i taget |
| 2:45 | sak | info:guld | 🛒 Säckkärran är i verktygsraden – en tung sak i taget |
| 2:45 | kvitto-visas | info:guld | 🛒 Säckkärran är i verktygsraden – en tung sak i taget |
| 2:45 | toast | guld | 🛒 Säckkärran är i verktygsraden – en tung sak i taget |
| 2:47 | klar | info:guld | 🛒 Säckkärran är i verktygsraden – en tung sak i taget |
| 2:54 | skratt | du | kvarnen rapar |
| 2:54 | händelse | malKlart | id=r6-mal-tunna-roda del=Dag 6 – Röd PETG nasta=sol6 |
| 2:54 | väntar | du | Printa och sälj. |
| 2:54 | målruta |  | Printa och sälj |
| 2:54 | MÅL |  | Printa och sälj |
| 2:54 | sak | du | Printa och sälj. |
| 2:54 | pil |  | Printa och sälj |
| 2:54 | röst | du | Printa och sälj. · MÅL |
| 2:57 | klar | du | Printa och sälj. |
| 2:58 | kvittens-bock |  | ✓ Mal en tunna i röda kvarnen |
| 2:59 | väntar | notis:PETG-kvarnen: den första rullen röd PETG | PETG-kvarnen: den första rullen röd PETG är klar |
| 3:01 | händelse | printStart | sak=nyckelring |
| 3:02 | toast | guld | ✅ |
| 3:02 | händelse | printKlar | sak=nyckelring n=24 |
| 3:03 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 3:03 | toast | guld | 🧵 |
| 3:05 | händelse | printStart | sak=nyckelring |
| 3:06 | toast | guld | ✅ |
| 3:06 | händelse | printKlar | sak=nyckelring n=25 |
| 3:06 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 3:06 | sak | foto | Pappa och Rolf |
| 3:06 | foto | du | Pappa och Rolf |
| 3:08 | toast | guld | 🧵 |
| 3:09 | klar | foto | Pappa och Rolf |
| 3:19 | sak | du | Pappa var här. Han såg vad jag har byggt. |
| 3:19 | notis | tanke | 💭 Pappa var här. Han såg vad jag har byggt. |
| 3:19 | röst | du | Pappa var här. Han såg vad jag har byggt. · STORY |
| 3:19 | väntar | mamma | Jag har bäddat i ditt rum. Ifall. |
| 3:19 | skratt | du | tummen på fotot |
| 3:19 | väntar | foto | Röd fabrik (och min tumme) |
| 3:19 | paket |  | tanke |
| 3:19 | tanke | du | Två fabriker. Och det blir fler. |
| 3:19 | väntar | du | Två fabriker. Och det blir fler. |
| 3:20 | webb | du | packade 2 nyckelring |
| 3:23 | klar | du | Pappa var här. Han såg vad jag har byggt. |
| 3:31 | sak | notis:PETG-kvarnen: den första rullen röd PETG | PETG-kvarnen: den första rullen röd PETG är klar |
| 3:31 | notis | guld | PETG-kvarnen: den första rullen röd PETG är klar |
| 3:34 | klar | notis:PETG-kvarnen: den första rullen röd PETG | PETG-kvarnen: den första rullen röd PETG är klar |
| 3:35 | väntar | info:bra | 📦 Paketet till Lasse på bussdepån ligger i postlådan – Rolf tar det till posten |
| 3:35 | sak | info:bra | 📦 Paketet till Lasse på bussdepån ligger i postlådan – Rolf tar det till posten |
| 3:35 | kvitto-visas | info:bra | 📦 Paketet till Lasse på bussdepån ligger i postlådan – Rolf tar det till posten |
| 3:35 | toast | bra | 📦 Paketet till Lasse på bussdepån ligger i postlådan – Rolf tar det till posten |
| 3:37 | klar | info:bra | 📦 Paketet till Lasse på bussdepån ligger i postlådan – Rolf tar det till posten |
| 3:39 | händelse | printStart | sak=kruka |
| 3:42 | toast | guld | ✅ |
| 3:42 | händelse | printKlar | sak=kruka n=55 |
| 3:42 | händelse | tagitUrPrint | sak=kruka n=1 |
| 3:50 | aliSalt | ali | 105 |
| 3:50 | aliSalt | ali | 80 |
| 3:50 | aliSalt | ali | 76 |
| 3:51 | tanke | du | Inte en enda frusen tå. Rekord. |
| 3:51 | väntar | du | Inte en enda frusen tå. Rekord. |
| 3:51 | aliSalt | ali | 72 |
| 3:51 | aliSalt | ali | 180 |
| 3:52 | sak | foto | Röd fabrik (och min tumme) |
| 3:52 | foto | du | Röd fabrik (och min tumme) |
| 3:54 | klar | foto | Röd fabrik (och min tumme) |
| 3:56 | sak | du | Inte en enda frusen tå. Rekord. |
| 3:56 | notis | tanke | 💭 Inte en enda frusen tå. Rekord. |
| 3:56 | röst | du | Inte en enda frusen tå. Rekord. · REAKTION |
| 3:59 | klar | du | Inte en enda frusen tå. Rekord. |
| 4:11 | tanke | du | En husvagn mitt i tippen. Och grinden är låst. |
| 4:11 | väntar | du | En husvagn mitt i tippen. Och grinden är låst. |
| 4:11 | sak | du | En husvagn mitt i tippen. Och grinden är låst. |
| 4:11 | notis | tanke | 💭 En husvagn mitt i tippen. Och grinden är låst. |
| 4:11 | röst | du | En husvagn mitt i tippen. Och grinden är låst. · REAKTION |
| 4:15 | klar | du | En husvagn mitt i tippen. Och grinden är låst. |
| 4:24 | sak | mamma | Jag har skickat virkade grytvantar (lila) med Rolf. Den ligger i postlådan. |
| 4:24 | sms | mamma | Jag har skickat virkade grytvantar (lila) med Rolf. Den ligger i postlådan. |
| 4:24 | sms-bubbla | mamma | Jag har skickat virkade grytvantar (lila) med Rolf. Den ligger i postlådan. |
| 4:24 | röst | mamma | Jag har skickat virkade grytvantar (lila) med Rolf. Den ligger i postlådan. · STORY |
| 4:27 | händelse | printStart | sak=kruka |
| 4:30 | toast | guld | ✅ |
| 4:30 | händelse | printKlar | sak=kruka n=56 |
| 4:30 | händelse | tagitUrPrint | sak=kruka n=1 |
| 4:30 | klar | mamma | Jag har skickat virkade grytvantar (lila) med Rolf. Den ligger i postlådan. |
| 4:38 | aliSalt | ali | 100 |
| 4:38 | sak | du | Två fabriker. Och det blir fler. |
| 4:38 | notis | tanke | 💭 Två fabriker. Och det blir fler. |
| 4:38 | röst | du | Två fabriker. Och det blir fler. · STORY |
| 4:41 | klar | du | Två fabriker. Och det blir fler. |
| 4:45 | skratt | du | falsk tuta |
| 4:50 | händelse | printStart | sak=kruka |
| 4:53 | toast | guld | ✅ |
| 4:53 | händelse | printKlar | sak=kruka n=57 |
| 4:53 | händelse | tagitUrPrint | sak=kruka n=1 |
| 5:00 | aliSalt | ali | 95 |
| 5:02 | väntar | bud | (tips) |
| 5:02 | sak | bud | (tips) |
| 5:03 | klar | bud | (tips) |
| 5:05 | meddelande | mamma | Din bror säger att du har pengar. Du har aldrig haft pengar. Har du sålt en njure? |
| 5:06 | röst | mamma | Din bror säger att du har pengar. Du har aldrig haft pengar. Har du sålt en njure? · STORY |
| 5:18 | paket |  | sms |
| 5:18 | väntar | mamma | Printar. Vad är printar. Är det lagligt? Säg att det är lagligt. |
| 5:28 | händelse | brevLast | id=m_pengar |
| 5:35 | händelse | printStart | sak=pall |
| 5:40 | toast | guld | ✅ |
| 5:40 | händelse | printKlar | sak=pall n=19 |
| 5:41 | händelse | tagitUrPrint | sak=pall n=1 |
| 5:48 | aliSalt | ali | 180 |
| 5:57 | händelse | printStart | sak=kruka |
| 6:00 | toast | guld | ✅ |
| 6:00 | händelse | printKlar | sak=kruka n=58 |
| 6:00 | händelse | tagitUrPrint | sak=kruka n=1 |
| 6:07 | aliSalt | ali | 90 |
| 6:16 | händelse | printStart | sak=pall |
| 6:21 | toast | guld | ✅ |
| 6:21 | händelse | printKlar | sak=pall n=20 |
| 6:22 | händelse | tagitUrPrint | sak=pall n=1 |
| 6:25 | sak | mamma | Printar. Vad är printar. Är det lagligt? Säg att det är lagligt. |
| 6:25 | sms | mamma | Printar. Vad är printar. Är det lagligt? Säg att det är lagligt. |
| 6:25 | sms-bubbla | mamma | Printar. Vad är printar. Är det lagligt? Säg att det är lagligt. |
| 6:25 | röst | mamma | Printar. Vad är printar. Är det lagligt? Säg att det är lagligt. · STORY |
| 6:29 | aliSalt | ali | 171 |
| 6:31 | klar | mamma | Printar. Vad är printar. Är det lagligt? Säg att det är lagligt. |
| 6:39 | händelse | printStart | sak=kruka |
| 6:42 | toast | guld | ✅ |
| 6:42 | händelse | printKlar | sak=kruka n=59 |
| 6:42 | händelse | tagitUrPrint | sak=kruka n=1 |
| 6:50 | aliSalt | ali | 86 |
| 6:50 | upplåst | strom | sol |
| 6:50 | brott | RESERV | sol (strom 0 av 15) |
| 6:50 | händelse | upplast | id=sol flask=strom |
| 6:50 | paket |  | sms |
| 6:50 | väntar | ali | Ali här. ☀️ Solpaneler inne. Gratis ström från solen. Solen jobbar också hela dagen och klagar aldrig. Jag gillar solen. |
| 6:53 | toast | guld | 3D-modell köpt – printa solpanel på skrivaren |
| 6:53 | händelse | kopt | sak=sol |
| 6:53 | struken | ali | Ali här. ☀️ Solpaneler inne. Gratis ström från solen. Solen jobbar också hela dagen och klagar aldrig. Jag gillar solen. |
| 7:03 | väntar | värld:TUUT! Tjena! | TUUT! Tjena! |
| 7:04 | väntar | värld:Mjau. | Mjau. |
| 7:07 | toast | skak | handen skakar: fullt |
| 7:08 | väntar | mamma | Det har ringt en karl som heter Rolf och frågat om du gillar korv. Vem är det? Varför har han mitt nummer? |
| 7:10 | sak | värld:TUUT! Tjena! | TUUT! Tjena! |
| 7:10 | bubbla |  | TUUT! Tjena! |
| 7:12 | skratt | du | kvarnen spottar |
| 7:13 | klar | värld:TUUT! Tjena! | TUUT! Tjena! |
| 7:17 | händelse | printStart | sak=byggsats:sol |
| 7:20 | toast | bra | Del 1 av 3 klar |
| 7:21 | sak | värld:Mjau. | Mjau. |
| 7:21 | bubbla |  | Mjau. |
| 7:23 | klar | värld:Mjau. | Mjau. |
| 7:24 | toast | bra | Del 2 av 3 klar |
| 7:27 | händelse | printKlar | sak=byggsats:sol n=1 |
| 7:27 | toast | guld | ✅ |
| 7:28 | händelse | tagitUrPrint | sak=byggsats:sol n=1 |
| 7:28 | paket |  | sms |
| 7:28 | väntar | ali | Ali här. Jag såg Solpanel på avstånd. Ett streck blev lite snett. Mitt fel. Vackert ändå. |
| 7:32 | sak | ali | Ali här. Jag såg Solpanel på avstånd. Ett streck blev lite snett. Mitt fel. Vackert ändå. |
| 7:32 | sms | ali | Ali här. Jag såg Solpanel på avstånd. Ett streck blev lite snett. Mitt fel. Vackert ändå. |
| 7:32 | sms-bubbla | ali | Ali här. Jag såg Solpanel på avstånd. Ett streck blev lite snett. Mitt fel. Vackert ändå. |
| 7:32 | röst | ali | Ali här. Jag såg Solpanel på avstånd. Ett streck blev lite snett. Mitt fel. Vackert ändå. · REAKTION |
| 7:34 | händelse | placerat | sak=sol |
| 7:34 | paket |  | tanke |
| 7:34 | tanke | du | Den röda kvarnen drar mer än vinden orkar. Solen får hjälpa till. |
| 7:34 | väntar | du | Den röda kvarnen drar mer än vinden orkar. Solen får hjälpa till. |
| 7:34 | händelse | malKlart | id=sol6 del=Dag 6 – Röd PETG nasta=goran6 |
| 7:34 | väntar | du | Ge Göran ett eget ställe. |
| 7:34 | MÅL |  | Ge Göran ett eget ställe |
| 7:36 | kvitto-visas | du | Den röda kvarnen drar mer än vinden orkar. Solen får hjälpa till. |
| 7:36 | notis | tanke | 💭 Den röda kvarnen drar mer än vinden orkar. Solen får hjälpa till. |
| 7:36 | målruta |  | Ge Göran ett eget ställe |
| 7:38 | kvittens-bock |  | ✓ Sätt en solpanel på skjulets tak |
| 7:39 | klar | ali | Ali här. Jag såg Solpanel på avstånd. Ett streck blev lite snett. Mitt fel. Vackert ändå. |
| 7:41 | sak | du | Ge Göran ett eget ställe. |
| 7:41 | pil |  | Ge Göran ett eget ställe |
| 7:41 | röst | du | Ge Göran ett eget ställe. · MÅL |
| 7:41 | nick |  | nick:63 |
| 7:43 | klar | du | Ge Göran ett eget ställe. |
| 7:51 | händelse | kopt | sak=fagelskramma |
| 7:51 | röst | ali | AI:n och jag gjorde den i natt. Printa den. Snälla. · STORY |
| 7:51 | butiksbubbla | ali | Min Fågelskrämma… AI:n och jag gjorde den i natt. Printa den. Snälla. |
| 7:54 | väntar | bror | Pappa gick för att tjacka mjölk och kom hem med en motorsåg. "Den var på rea." Vi har inga träd. |
| 7:59 | händelse | printStart | sak=fagelskramma |
| 8:04 | toast | guld | ✅ |
| 8:04 | händelse | printKlar | sak=fagelskramma n=1 |
| 8:04 | händelse | tagitUrPrint | sak=fagelskramma n=1 |
| 8:10 | händelse | placerat | sak=fagelskramma |
| 8:10 | paket |  | tanke |
| 8:10 | tanke | du | Göran har ett hem nu. Bättre än jag hade för en vecka sen. |
| 8:10 | väntar | du | Göran har ett hem nu. Bättre än jag hade för en vecka sen. |
| 8:10 | händelse | malKlart | id=goran6 del=Dag 6 – Röd PETG nasta=sov6 |
| 8:10 | paket |  | lapp |
| 8:10 | lapp | 📔 Dagbok | Dag 6 är slut. Nu vet grannen att jag bor HÄR. Han verkar inte glad. Blå plast säljer billigt. I morgon. |
| 8:10 | meddelande | du | Dag 6 är slut. Nu vet grannen att jag bor HÄR. Han verkar inte glad. Blå plast säljer billigt. I morgon. |
| 8:10 | dagbokkort | du | Dag 6 är slut. Nu vet grannen att jag bor HÄR. Han verkar inte glad. Blå plast säljer billigt. I morgon. |
| 8:10 | MÅL |  | Klart för idag – sov när du vill |
| 8:10 | röst | du | Dag 6. 16 dagar till jul. Dag 6 är slut. Nu vet grannen att jag bor HÄR. Han verkar inte glad. Blå plast säljer billigt. I morgon. · STORY |
| 8:21 | händelse | brevLast | id=kvall6 |
| 8:21 | struken | du | Göran har ett hem nu. Bättre än jag hade för en vecka sen. |
| 8:21 | sak | du | (nytt mål i rutan) |
| 8:21 | målruta |  | Klart för idag – sov när du vill |
| 8:21 | pil |  | Klart för idag – sov när du vill |
| 8:21 | klar | du | (nytt mål i rutan) |
| 8:21 | väntar | notis:🌇 Klockan är 21. Ali slår igen luckan.  | 🌇 Klockan är 21. Ali slår igen luckan. Dagens jobb är klart – gå in i skjulet och sov i sängen. |
| 8:24 | struken | mamma | Det har ringt en karl som heter Rolf och frågat om du gillar korv. Vem är det? Varför har han mitt nummer? |
| 8:24 | struken | bror | Pappa gick för att tjacka mjölk och kom hem med en motorsåg. "Den var på rea." Vi har inga träd. |
| 8:27 | webbBetalt | du | 42 |

<details><summary>Botens handlingar dag 6</summary>

- 0:00 — dag 6 börjar — (7274 kr)
- 0:11 popup: "FORTSÄTT" (7274 kr)
- 0:25 gå till Rolfs postlåda (28 m) (7274 kr)
- 0:31 panel: "Rolfs postlåda
Det här låg i l" (7674 kr)
- 0:35 gå till pappa (20 m) (7674 kr)
- 0:52 gå till Rolfs postlåda (20 m) (7674 kr)
- 1:00 panel: "Rolfs postlåda
Det här låg i l" (7674 kr)
- 1:04 gå till pappa (19 m) (7674 kr)
- 2:01 gå till Ali (13 m) (7674 kr)
- 2:01 öppnar Alis butik – köpa röda kvarnen (petg) (7674 kr)
- 2:03 köper petgkvarn för 1200 kr (6474 kr)
- 2:09 gå till skrivaren (24 m) (6474 kr)
- 2:11 printar Röda kvarnen (PETG) (3 delar) (6474 kr)
- 2:24 tar ut 1 st ur skrivaren (6474 kr)
- 2:25 gå till platsen för röda kvarnen (petg) (7 m) (6474 kr)
- 2:26 ställer ut röda kvarnen (petg) (6474 kr)
- 2:36 gå till Rolfs postlåda (9 m) (6474 kr)
- 2:40 panel: "Rolfs postlåda
Det här låg i l" (6474 kr)
- 2:45 gå till säckkärran i högen (21 m) (6474 kr)
- 2:54 gå till PETG-kvarnen (19 m) (6474 kr)
- 2:54 tömmer det tunga i PETG-kvarnen (6474 kr)
- 3:00 gå till skrivaren (5 m) (6474 kr)
- 3:01 printar Nyckelring (6474 kr)
- 3:03 tar ut 1 st ur skrivaren (6474 kr)
- 3:05 printar Nyckelring (6474 kr)
- 3:06 tar ut 1 st ur skrivaren (6474 kr)
- 3:11 gå till datorn (21 m) (6474 kr)
- 3:19 panel: "Webbshopen · Soptippsvägen 1
B" (6474 kr)
- 3:29 panel: "Webbshopen · Soptippsvägen 1
B" (6474 kr)
- 3:35 gå till Rolfs postlåda (paket) (29 m) (6474 kr)
- 3:36 webbshop: 1 paket i postlådan (6474 kr)
- 3:36 tjänar pengar till väntar på flaskhalsen för sol: 6474/6514 kr → printar blomkruka (105 kr) (6474 kr)
- 3:38 gå till skrivaren (8 m) (6474 kr)
- 3:39 printar Blomkruka (6474 kr)
- 3:43 tar ut 1 st ur skrivaren (6474 kr)
- 3:49 gå till Ali (26 m) (6474 kr)
- 3:49 öppnar Alis butik – sälja (6474 kr)
- 3:51 säljer hos Ali: +513 kr (6987 kr)
- 4:01 tjänar pengar till väntar på flaskhalsen för sol: 6987/7027 kr → printar blomkruka (100 kr) (6987 kr)
- 4:15 plockar 7 skräp på tippen (bär max 16) (6987 kr)
- 4:18 gå till kvarnen (14 m) (6987 kr)
- 4:25 gå till skrivaren (5 m) (6987 kr)
- 4:27 printar Blomkruka (6987 kr)
- 4:30 tar ut 1 st ur skrivaren (6987 kr)
- 4:36 gå till Ali (26 m) (6987 kr)
- 4:36 öppnar Alis butik – sälja (6987 kr)
- 4:38 säljer hos Ali: +100 kr (7087 kr)
- 4:43 tjänar pengar till väntar på flaskhalsen för sol: 7087/7127 kr → printar blomkruka (95 kr) (7087 kr)
- 4:48 gå till skrivaren (24 m) (7087 kr)
- 4:50 printar Blomkruka (7087 kr)
- 4:53 tar ut 1 st ur skrivaren (7087 kr)
- 4:59 gå till Ali (24 m) (7087 kr)
- 4:59 öppnar Alis butik – sälja (7087 kr)
- 5:00 säljer hos Ali: +95 kr (7182 kr)
- 5:18 popup: "Jag säljer saker jag printar." (7182 kr)
- 5:28 popup: "Läst" (7182 kr)
- 5:28 tjänar pengar till väntar på flaskhalsen för sol: 7182/7222 kr → printar pall (180 kr) (7182 kr)
- 5:34 gå till skrivaren (24 m) (7182 kr)
- 5:35 printar Pall (7182 kr)
- 5:42 tar ut 1 st ur skrivaren (7182 kr)
- 5:47 gå till Ali (24 m) (7182 kr)
- 5:47 öppnar Alis butik – sälja (7182 kr)
- 5:48 säljer hos Ali: +180 kr (7362 kr)
- 5:50 tjänar pengar till väntar på flaskhalsen för sol: 7362/7402 kr → printar blomkruka (90 kr) (7362 kr)
- 5:55 gå till skrivaren (24 m) (7362 kr)
- 5:57 printar Blomkruka (7362 kr)
- 6:00 tar ut 1 st ur skrivaren (7362 kr)
- 6:06 gå till Ali (24 m) (7362 kr)
- 6:06 öppnar Alis butik – sälja (7362 kr)
- 6:07 säljer hos Ali: +90 kr (7452 kr)
- 6:09 tjänar pengar till väntar på flaskhalsen för sol: 7452/7492 kr → printar pall (171 kr) (7452 kr)
- 6:14 gå till skrivaren (24 m) (7452 kr)
- 6:16 printar Pall (7452 kr)
- 6:22 tar ut 1 st ur skrivaren (7452 kr)
- 6:28 gå till Ali (24 m) (7452 kr)
- 6:28 öppnar Alis butik – sälja (7452 kr)
- 6:29 säljer hos Ali: +171 kr (7623 kr)
- 6:33 tjänar pengar till väntar på flaskhalsen för sol: 7623/7663 kr → printar blomkruka (86 kr) (7623 kr)
- 6:38 gå till skrivaren (24 m) (7623 kr)
- 6:39 printar Blomkruka (7623 kr)
- 6:43 tar ut 1 st ur skrivaren (7623 kr)
- 6:48 gå till Ali (24 m) (7623 kr)
- 6:48 öppnar Alis butik – sälja (7623 kr)
- 6:50 säljer hos Ali: +86 kr (7709 kr)
- 6:52 öppnar Alis butik – köpa solpanel (7709 kr)
- 6:54 köper sol för 400 kr (7309 kr)
- 7:07 plockar 3 skräp på tippen (bär max 16) (7309 kr)
- 7:10 gå till kvarnen (12 m) (7309 kr)
- 7:15 gå till skrivaren (5 m) (7309 kr)
- 7:17 printar Solpanel (3 delar) (7309 kr)
- 7:28 tar ut 1 st ur skrivaren (7309 kr)
- 7:33 gå till platsen för solpanel (22 m) (7309 kr)
- 7:34 ställer ut solpanel (7309 kr)
- 7:49 gå till Ali (18 m) (7309 kr)
- 7:49 öppnar Alis butik – köpa receptet fågelskrämma (7309 kr)
- 7:52 köper fagelskramma för 40 kr (7269 kr)
- 7:58 gå till skrivaren (24 m) (7269 kr)
- 7:59 printar Fågelskrämma (7269 kr)
- 8:05 tar ut 1 st ur skrivaren (7269 kr)
- 8:09 gå till platsen för fågelskrämma (19 m) (7269 kr)
- 8:10 ställer ut fågelskrämma (7269 kr)
- 8:21 popup: "FORTSÄTT" (7269 kr)
- 8:24 gå till sängen (7 m) (7269 kr)

</details>

## Dag 7

| Tid | Källa | Vem | Text |
|---|---|---|---|
| 8:27 | vara | ali | pall |
| 8:27 | händelse | malKlart | id=sov6 del=Dag 6 – Röd PETG nasta=r7-bygg-petg-skrivaren |
| 8:27 | MÅL |  | Bygg PETG-skrivaren |

<details><summary>Botens handlingar dag 7</summary>

- 0:00 — dag 7 börjar — (7311 kr)

</details>
