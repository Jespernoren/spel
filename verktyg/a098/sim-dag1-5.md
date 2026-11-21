# Simulering kapitel 1 – körning 1

*Gjord 2026-11-21 10:01 med `verktyg/sim-kapitel1.mjs` + `verktyg/sim-bot.js` (punkt AX). Boten går 4,5 m/s, läser 15 tecken/s, trampar, vevar, plockar, printar, köper och säljer via spelets egna funktioner. Tiderna är speltid.*

## Sammanfattning

| Dag | Minuter | Väntan | Prints (totalt) | Kr vid sömn | Bär | Trivsel |
|---|---|---|---|---|---|---|
| 1 | 11.1 | 2 % | 25 | 255 | 6 | 21 |
| 2 | 11.4 | 2 % | 43 | 1635 | 10 | 38 |
| 3 | 13.6 | 3 % | 57 | 2040 | 16 | 78 |
| 4 | 12.6 | 2 % | 77 | 3626 | 16 | 96 |
| 5 | 0.0 | 0 % | 77 | 3626 | 16 | 96 |

## Flaskhalskartan (EE)

| Dag | bara | mala | trampa | strom | skrivare | inkomst | Upplåst |
|---|---|---|---|---|---|---|---|
| 1 | 7 | 11 | 23 | 12 | 54 | 23 | grip (bara, 7:55, reserv), kruka (inkomst, 8:53) |
| 2 | 2 | 10 | 11 | 10 | 304 | 0 | kvarnmotor (mala, 3:34, reserv), rullstall (skrivare, 5:33), trim_skrivare (skrivare, 7:30), vindsnurra (trampa, 9:19) |
| 3 | 3 | 3 | 0 | 15 | 311 | 0 | cykelbatteri (strom, 7:14, reserv), ryggkorg (bara, 7:33), skrivare2 (skrivare, 9:28) |
| 4 | 1 | 22 | 0 | 15 | 328 | 0 | trim_skrivare2 (skrivare, 4:29), matarband (bara, 7:43, reserv), vindsnurra2 (strom, 10:02) |
| 5 | 0 | 0 | 0 | 0 | 0 | 0 |  |

TIDIG: 0 · FAST: 0 · upplåst av reserven (målet väntade 3 min): 4

**SKRATT:** 45 roliga ögonblick på 49 min (9.3 per 10 min, mål minst 5)

**Köp:**

- dag 1 2:39 – gammalkvarn (30 kr)
- dag 1 8:25 – grip (50 kr)
- dag 1 9:01 – kruka (40 kr)
- dag 1 9:43 – sang (60 kr)
- dag 2 3:49 – kvarnmotor (50 kr)
- dag 2 9:34 – vindsnurra (133 kr)
- dag 2 10:40 – dorr (120 kr)
- dag 3 7:26 – cykelbatteri (30 kr)
- dag 3 7:54 – ryggkorg (120 kr)
- dag 3 8:41 – bord (120 kr)
- dag 3 9:42 – skrivare2 (500 kr)
- dag 3 10:58 – tak (250 kr)
- dag 4 8:00 – matarband (120 kr)
- dag 4 8:50 – pall (80 kr)
- dag 4 10:20 – vindsnurra (133 kr)
- dag 4 11:41 – vaggar (130 kr)

## Storykedjan (kvittens → varför → nytt mål)

| Dag | Tid | Id | Kvittens | Varför | Nytt mål | Tid till målet |
|---|---|---|---|---|---|---|
| 1 | 0:32 | lastat | Tung. Den har storebror aldrig burit så långt. |  | Skrivaren ställer jag där borta, mot skräpberget. Min första | 4.4 s |
| 1 | 1:41 | printStart | Den piper. Den GÖR något. |  | En nyckelring till, så länge storebrors rulle räcker. | 6.6 s |
| 1 | 1:46 | printKlar | Klar! Ta ut den innan den ändrar sig. |  | En nyckelring till, så länge storebrors rulle räcker. | 3.1 s |
| 1 | 9:12 | krukaD1 | En kruka. Mamma skulle bli så stolt. Hon får inte veta. |  | Jag kan inte sova på betongen en natt till. Ali har en säng. | 7.2 s |
| 2 | 10:20 | vindsnurra | Den snurrar! Långsamt. Men den snurrar. | Om det regnar i natt drunknar jag. Ett tak. | Det drar från dörrhålet. En dörr kan jag printa. | 4.3 s |
| 4 | 8:28 | sophallare | Nu kan jag tömma hela kärran på en gång. | Krukor är bra. Pallar är bättre. | Jag behöver något att sitta på. En pall. Lagom ambitiöst. | 4.3 s |

## Hur länge nya mål väntade (från att förra målet blev klart till att det nya syntes i målrutan)

Snitt 3.7 s · max 17.5 s · över 4 s: 10 · över 8 s: 7 av 49

## Flaggor (41)

- **UPPREPNING** dag 4 8:49: Bra val. Folk köper sånt. Jag vet inte varför. (CT)
- **LUGN** dag 2 0:08: 0.0 s efter BÖRJA DAGEN: [lapp] "Första natten i en riktig säng. Jag printade den själv."
- **LUGN** dag 2 0:08: 0.0 s efter BÖRJA DAGEN: [meddelande] "Första natten i en riktig säng. Jag printade den själv."
- **LUGN** dag 2 0:08: 0.2 s efter BÖRJA DAGEN: [röst] "Dag 2. 20 dagar till jul. Första natten i en riktig säng. Ja"
- **LUGN** dag 2 0:09: 0.5 s efter BÖRJA DAGEN: [notis] "Ali vill ha idag · Blomkruka · +50 %"
- **KROCK** dag 2 0:09: 0.5 s mellan [meddelande] "Första natten i en riktig säng. Jag printade den själv." och [notis] "Ali vill ha idag · Blomkruka · +50 %"
- **KROCK** dag 2 1:12: 3.7 s mellan [notis] "💭 Tänk att jag ska få sova i min egen säng." och [lapp] "Sopbilen tippade en ny last. Allt det skräpet – och grinden "
- **KROCK** dag 3 13:14: 1.4 s mellan [sms-bubbla] "VA?! Du har byggt en skrivare TILL?? Du har typ en printfarm" och [lapp] "Tre dagar. Tänk om tre veckor."
- **KEDJA** dag 1 0:32: lastat: nytt mål 4.4 s efter kedjan (max 2 s)
- **KEDJA** dag 1 1:41: printStart: nytt mål 6.6 s efter kedjan (max 2 s)
- **KEDJA** dag 1 9:12: krukaD1: nytt mål 7.2 s efter kedjan (max 2 s)
- **KEDJA** dag 2 10:20: vindsnurra: nytt mål 4.3 s efter kedjan (max 2 s)
- **KEDJA** dag 4 8:28: sophallare: nytt mål 4.3 s efter kedjan (max 2 s)
- **SEN** dag 1 5:14: 15.2 s efter händelsen: notis:Storebrors skrivare: Ingen ström – tramp: "Storebrors skrivare: Ingen ström – trampa cykeln"
- **SEN** dag 1 9:12: 18.4 s efter händelsen: ali: "Ali här. Jag såg Skräpgrip på avstånd. Ett streck blev lite snett. Mit"
- **SEN** dag 1 10:34: 17.3 s efter händelsen: notis:Storebrors skrivare: Slut på tråd – mal : "Storebrors skrivare: Slut på tråd – mal mer så fortsätter den"
- **SEN** dag 2 4:10: 53.6 s efter händelsen: du: "Den blev… spagetti. Ali kallar det modern konst."
- **SEN** dag 2 8:14: 35.5 s efter händelsen: notis:Storebrors skrivare: Ingen ström – tramp: "Storebrors skrivare: Ingen ström – trampa cykeln"
- **SEN** dag 3 8:52: 19.7 s efter händelsen: ali: "Ali här. Du printade Ryggkorg från min ritning. Och det FUNKAR? Jag ha"
- **SEN** dag 4 2:57: 53.5 s efter händelsen: kjelle: "Radio Tippen, Kjelle här. Skjulet vid tippen har fått TAK. Och arbetsb"
- **SEN** dag 4 6:43: 67.2 s efter händelsen: du: "Jaha, Rolf har hämtat grillspade."
- **SAMTIDIGT** dag 1 0:29: "Skrivaren står kvar på cykeln. Den ska a" och "(nytt mål i rutan)"
- **PAUS** dag 1 0:36: 0.0 s paus före "🖨️ Storebrors skrivare. Den ska stå där borta, mo"
- **SAMTIDIGT** dag 1 1:39: "Okej. Välj nåt litet att printa." och "Nu ska skrivaren få jobba. Jag väljer nå"
- **PAUS** dag 1 1:44: 0.0 s paus före "Den piper. Den GÖR något."
- **PAUS** dag 1 1:47: 0.6 s paus före "Klar! Ta ut den innan den ändrar sig."
- **PAUS** dag 1 3:16: 0.0 s paus före "Kvarnen funkar. Soptippen är en gruva."
- **PAUS** dag 1 9:19: 0.0 s paus före "Ali gillar krukor. Han sa det själv."
- **PAUS** dag 1 9:22: 0.0 s paus före "En kruka. Mamma skulle bli så stolt. Hon får inte "
- **PAUS** dag 2 4:57: 0.0 s paus före "Gården är STÄDAD. Av mig. Frivilligt. Mamma skulle"
- **PAUS** dag 2 10:24: 0.0 s paus före "🌬️ Vindsnurran sitter på taket – den trampar cyke"
- **PAUS** dag 4 4:26: 0.0 s paus före "7 st i tratten · 9 st på marken bredvid"
- **PAUS** dag 4 8:31: 0.0 s paus före "🗑️ Sophållaren står bakom kvarnen! Töm allt skräp"
- **PAUS** dag 4 10:43: 0.0 s paus före "Slut på trampandet. Nästan."
- **UPPREPNING** dag 4 4:09: info:bra: "🛒 4 skräp från famnen i skottkärran" (förra gången dag 4)
- **UPPREPNING** dag 4 10:33: info:guld: "🌬️ Vindsnurran ligger i handen – klicka på skjulet för att sätta den " (förra gången dag 2)
- **UPPREPNING** dag 4 10:41: info:guld: "🌬️ Vindsnurran sitter på taket – den trampar cykeln åt dig när det bl" (förra gången dag 2)
- **TIPS OM SAKNAD SAK** dag 1 1:31: notisen: "Om jag trampar ström med cykeln kan skrivaren gå. " nämner cykeln
- **SEN KVITTENS** dag 3 0:52: 2.6 s sen: ”Rolfs tipp. Hela högen.” (ED13: monterat)
- **TORRT** dag 1 4:42: 251 s utan roligt ögonblick
- **TEMPO** dag 5 0:00: dag 5 tog 0.0 min (mål 10–15)

Sidfel: inga

## Dag 1

| Tid | Källa | Vem | Text |
|---|---|---|---|
| 0:00 | MÅL |  | Lasta av skrivaren |
| 0:00 | MÅL |  | Lasta av skrivaren |
| 0:00 | sak | bud | (tips) |
| 0:01 | väntar | du | Se så mycket skräp här är. Det är ju en guldgruva! |
| 0:02 | klar | bud | (tips) |
| 0:04 | sak | du | Se så mycket skräp här är. Det är ju en guldgruva! |
| 0:04 | röst | du | Se så mycket skräp här är. Det är ju en guldgruva! · STORY |
| 0:09 | sak-del | du | Men först en skylt, så att alla vet var jag bor. |
| 0:09 | röst | du | Men först en skylt, så att alla vet var jag bor. · STORY |
| 0:13 | klar | du | Se så mycket skräp här är. Det är ju en guldgruva! |
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
| 1:19 | paket |  | tanke |
| 1:19 | tanke | du | Cykeln… och storebrors generator? |
| 1:19 | väntar | du | Cykeln… och storebrors generator? |
| 1:19 | sak | du | Cykeln… och storebrors generator? |
| 1:19 | kvitto-visas | du | Cykeln… och storebrors generator? |
| 1:19 | notis | tanke | 💭 Cykeln… och storebrors generator? |
| 1:19 | röst | du | Cykeln… och storebrors generator? · STORY |
| 1:19 | händelse | malKlart | id=strom del=Dag 1 – Kom igång nasta=bygg |
| 1:19 | väntar | du | Om jag trampar ström med cykeln kan skrivaren gå. Cykeln där, generatorn bredvid. |
| 1:20 | MÅL |  | Ställ cykel och generator |
| 1:22 | klar | du | Cykeln… och storebrors generator? |
| 1:22 | målruta |  | Ställ cykel och generator |
| 1:23 | paket |  | tanke |
| 1:23 | tanke | du | Storebrors generator. Den gör el av trampandet. |
| 1:23 | väntar | du | Storebrors generator. Den gör el av trampandet. |
| 1:23 | händelse | placerat | sak=generator |
| 1:23 | duns | du | ställs ner |
| 1:23 | kvittens-bock |  | ✓ Skrivaren behöver ström |
| 1:25 | sak | du | Om jag trampar ström med cykeln kan skrivaren gå. Cykeln där, generatorn bredvid. |
| 1:25 | pil |  | Ställ cykel och generator |
| 1:25 | notis | tanke | 💭 Om jag trampar ström med cykeln kan skrivaren gå. Cykeln där, generatorn bredvid. |
| 1:25 | röst | du | Om jag trampar ström med cykeln kan skrivaren gå. Cykeln där, generatorn bredvid. · MÅL |
| 1:26 | nick |  | nick:3 |
| 1:26 | ljud | utrustning | Cykeln i famnen |
| 1:26 | händelse | lyft | sak=cykel |
| 1:31 | brott | TIPS OM SAKNAD SAK | notisen: "Om jag trampar ström med cykeln kan skrivaren gå. " nämner cykeln |
| 1:32 | klar | du | Om jag trampar ström med cykeln kan skrivaren gå. Cykeln där, generatorn bredvid. |
| 1:37 | händelse | placerat | sak=cykel |
| 1:37 | duns | du | ställs ner |
| 1:39 | händelse | ombyggd | sak=cykel |
| 1:39 | varför | du | Okej. Välj nåt litet att printa. |
| 1:39 | väntar | du | Okej. Välj nåt litet att printa. |
| 1:39 | sak | du | Okej. Välj nåt litet att printa. |
| 1:39 | struken | du | Okej. Välj nåt litet att printa. |
| 1:39 | händelse | malKlart | id=bygg del=Dag 1 – Kom igång nasta=valjModell |
| 1:39 | struken | du | Storebrors generator. Den gör el av trampandet. |
| 1:39 | väntar | du | Nu ska skrivaren få jobba. Jag väljer något litet först. |
| 1:39 | målruta |  | Välj en print |
| 1:39 | MÅL |  | Välj en print |
| 1:39 | sak | du | Nu ska skrivaren få jobba. Jag väljer något litet först. |
| 1:39 | pil |  | Välj en print |
| 1:39 | notis | tanke | 💭 Nu ska skrivaren få jobba. Jag väljer något litet först. |
| 1:39 | röst | du | Nu ska skrivaren få jobba. Jag väljer något litet först. · MÅL |
| 1:41 | händelse | printStart | sak=nyckelring |
| 1:41 | kvittens | du | Den piper. Den GÖR något. |
| 1:41 | väntar | du | Den piper. Den GÖR något. |
| 1:41 | tanke | du | Den stannar när jag slutar trampa. Ström som sparas hade varit nåt. |
| 1:41 | väntar | du | Den stannar när jag slutar trampa. Ström som sparas hade varit nåt. |
| 1:41 | händelse | malKlart | id=valjModell del=Dag 1 – Kom igång nasta=trampa |
| 1:41 | struken | du | Den stannar när jag slutar trampa. Ström som sparas hade varit nåt. |
| 1:41 | väntar | du | Cykeln är kraftverket. Nu får benen jobba. |
| 1:42 | MÅL |  | Trampa cykeln |
| 1:44 | klar | du | Nu ska skrivaren få jobba. Jag väljer något litet först. |
| 1:44 | sak | du | Den piper. Den GÖR något. |
| 1:44 | notis | tanke | 💭 Den piper. Den GÖR något. |
| 1:44 | röst | du | Den piper. Den GÖR något. · STORY |
| 1:44 | målruta |  | Trampa cykeln |
| 1:46 | klar | du | Den piper. Den GÖR något. |
| 1:46 | händelse | printKlar | sak=nyckelring n=1 |
| 1:46 | kvittens | du | Klar! Ta ut den innan den ändrar sig. |
| 1:46 | väntar | du | Klar! Ta ut den innan den ändrar sig. |
| 1:46 | händelse | malKlart | id=trampa del=Dag 1 – Kom igång nasta=rullSlut |
| 1:46 | väntar | du | En nyckelring till, så länge storebrors rulle räcker. |
| 1:47 | MÅL |  | En nyckelring till |
| 1:47 | struken | du | Cykeln är kraftverket. Nu får benen jobba. |
| 1:47 | sak | du | Klar! Ta ut den innan den ändrar sig. |
| 1:47 | notis | tanke | 💭 Klar! Ta ut den innan den ändrar sig. |
| 1:47 | röst | du | Klar! Ta ut den innan den ändrar sig. · STORY |
| 1:47 | målruta |  | En nyckelring till |
| 1:47 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 1:47 | paket |  | sms |
| 1:47 | väntar | bror | VA FAN?! Fick du igång den?? Jag försökte i typ ett år. Den bara pep. 😳 |
| 1:47 | skratt | bror | VA FAN?! Fick du igång den?? Jag försökt |
| 1:47 | paket |  | sms → ge |
| 1:47 | väntar | bror | Sälj den till Ali, han med affären vid tippen. Han köper gamla grejer. Han köpte min gamla mopedhjälm för 20 spänn. |
| 1:47 | väntar |  | (läget ändras) |
| 1:50 | klar | du | Klar! Ta ut den innan den ändrar sig. |
| 1:51 | sak |  | (läget ändras) |
| 1:51 | klar |  | (läget ändras) |
| 1:52 | händelse | printStart | sak=nyckelring |
| 1:53 | sak | du | En nyckelring till, så länge storebrors rulle räcker. |
| 1:53 | pil |  | En nyckelring till |
| 1:53 | notis | tanke | 💭 En nyckelring till, så länge storebrors rulle räcker. |
| 1:53 | röst | du | En nyckelring till, så länge storebrors rulle räcker. · MÅL |
| 1:57 | klar | du | En nyckelring till, så länge storebrors rulle räcker. |
| 2:03 | toast | guld | Nyckelring är klar – ta ut den |
| 2:03 | väntar | notis:Storebrors skrivare: Nyckelring är klar  | Storebrors skrivare: Nyckelring är klar – ta ut den |
| 2:03 | händelse | printKlar | sak=nyckelring n=2 |
| 2:03 | paket |  | tanke |
| 2:03 | tanke | du | Slut på storebrors rulle. Och här ligger ju plast överallt. Om jag bara kunde göra tråd av skräpet… Affären mitt emot kanske har något. |
| 2:03 | väntar | du | Slut på storebrors rulle. Och här ligger ju plast överallt. Om jag bara kunde göra tråd av skräpet… Affären mitt emot kanske har något. |
| 2:03 | händelse | malKlart | id=rullSlut del=Dag 1 – Kom igång nasta=saljTva |
| 2:03 | MÅL |  | Sälj nyckelringarna |
| 2:03 | sak | du | Slut på storebrors rulle. Och här ligger ju plast överallt. Om jag bara kunde göra tråd av skräpet… Affären mitt emot kanske har något. |
| 2:03 | kvitto-visas | du | Slut på storebrors rulle. Och här ligger ju plast överallt. Om jag bara kunde göra tråd av skräpet… Affären mitt emot kanske har något. |
| 2:03 | notis | tanke | 💭 Slut på storebrors rulle. Och här ligger ju plast överallt. Om jag bara kunde göra tråd av skräpet… Affären mitt emot kanske har något. |
| 2:03 | röst | du | Slut på storebrors rulle. Och här ligger ju plast överallt. Om jag bara kunde göra tråd av skräpet… Affären mitt emot kanske har något. · STORY |
| 2:07 | målruta |  | Sälj nyckelringarna |
| 2:07 | kvittens-bock |  | ✓ En nyckelring till |
| 2:15 | klar | du | Slut på storebrors rulle. Och här ligger ju plast överallt. Om jag bara kunde göra tråd av skräpet… Affären mitt emot kanske har något. |
| 2:15 | sak | du | (nytt mål i rutan) |
| 2:15 | pil |  | Sälj nyckelringarna |
| 2:15 | klar | du | (nytt mål i rutan) |
| 2:16 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 2:17 | struken | bror | VA FAN?! Fick du igång den?? Jag försökte i typ ett år. Den bara pep. 😳 |
| 2:17 | skratt | bror | VA FAN?! Fick du igång den?? Jag försökt |
| 2:17 | struken | notis:Storebrors skrivare: Nyckelring är klar  | Storebrors skrivare: Nyckelring är klar – ta ut den |
| 2:21 | röst | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. · STORY |
| 2:21 | butiksbubbla | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 2:23 | aliSalt | ali | 30 |
| 2:23 | butiksbubbla | ali | Pappas gamla köttkvarn. Den har malt allt utom kött. Trettio kronor, så är den din. |
| 2:24 | väntar | ali | Pappas gamla köttkvarn. Den har malt allt utom kött. Trettio kronor, så är den din. |
| 2:24 | händelse | malKlart | id=saljTva del=Dag 1 – Kom igång nasta=aliKvarn |
| 2:24 | väntar | du | Ali har en gammal kvarn. Den gör tråd av skräp. |
| 2:24 | MÅL |  | Köp kvarnen |
| 2:25 | struken | bror | Sälj den till Ali, han med affären vid tippen. Han köper gamla grejer. Han köpte min gamla mopedhjälm för 20 spänn. |
| 2:25 | sak | ali | Pappas gamla köttkvarn. Den har malt allt utom kött. Trettio kronor, så är den din. |
| 2:25 | röst | ali | Pappas gamla köttkvarn. Den har malt allt utom kött. Trettio kronor, så är den din. · STORY |
| 2:28 | kvittens-bock |  | ✓ Sälj nyckelringarna |
| 2:28 | målruta |  | Köp kvarnen |
| 2:32 | klar | ali | Pappas gamla köttkvarn. Den har malt allt utom kött. Trettio kronor, så är den din. |
| 2:34 | sak | du | Ali har en gammal kvarn. Den gör tråd av skräp. |
| 2:34 | pil |  | Köp kvarnen |
| 2:34 | notis | tanke | 💭 Ali har en gammal kvarn. Den gör tråd av skräp. |
| 2:34 | röst | du | Ali har en gammal kvarn. Den gör tråd av skräp. · MÅL |
| 2:38 | klar | du | Ali har en gammal kvarn. Den gör tråd av skräp. |
| 2:38 | händelse | kopt | sak=gammalkvarn |
| 2:38 | röst | ali | Och kommer du på nåt smart, så vet du var jag bor. · STORY |
| 2:38 | butiksbubbla | ali | Och kommer du på nåt smart, så vet du var jag bor. |
| 2:40 | händelse | malKlart | id=aliKvarn del=Dag 1 – Kom igång nasta=kvarn |
| 2:40 | väntar | du | Kvarnen ställer jag bredvid skrivaren, närmast skräpberget. Där finns skräpet. |
| 2:40 | målruta |  | Ställ kvarnen |
| 2:40 | MÅL |  | Ställ kvarnen |
| 2:41 | sak | du | Kvarnen ställer jag bredvid skrivaren, närmast skräpberget. Där finns skräpet. |
| 2:41 | pil |  | Ställ kvarnen |
| 2:41 | notis | tanke | 💭 Kvarnen ställer jag bredvid skrivaren, närmast skräpberget. Där finns skräpet. |
| 2:41 | röst | du | Kvarnen ställer jag bredvid skrivaren, närmast skräpberget. Där finns skräpet. · MÅL |
| 2:43 | väntar | foto | Första nyckelringen |
| 2:43 | paket |  | tanke |
| 2:43 | tanke | du | Någon köpte nåt jag gjort. Det här kan funka. |
| 2:43 | väntar | du | Någon köpte nåt jag gjort. Det här kan funka. |
| 2:44 | kvittens-bock |  | ✓ Köp kvarnen |
| 2:47 | klar | du | Kvarnen ställer jag bredvid skrivaren, närmast skräpberget. Där finns skräpet. |
| 2:55 | sak | foto | Första nyckelringen |
| 2:55 | foto | du | Första nyckelringen |
| 2:55 | händelse | placerat | sak=kvarnen |
| 2:55 | struken | kedja | kvarnStar |
| 2:55 | duns | du | ställs ner |
| 2:55 | händelse | malKlart | id=kvarn del=Dag 1 – Kom igång nasta=flaska |
| 2:55 | väntar | du | Skräp i kvarnen, sen vevar jag. Då blir det tråd. |
| 2:55 | MÅL |  | Gör egen tråd |
| 2:58 | klar | foto | Första nyckelringen |
| 2:59 | målruta |  | Gör egen tråd |
| 2:59 | kvittens-bock |  | ✓ Ställ kvarnen |
| 3:00 | sak | du | Skräp i kvarnen, sen vevar jag. Då blir det tråd. |
| 3:00 | pil |  | Gör egen tråd |
| 3:00 | notis | tanke | 💭 Skräp i kvarnen, sen vevar jag. Då blir det tråd. |
| 3:00 | röst | du | Skräp i kvarnen, sen vevar jag. Då blir det tråd. · MÅL |
| 3:00 | nick |  | nick:10 |
| 3:04 | klar | du | Skräp i kvarnen, sen vevar jag. Då blir det tråd. |
| 3:14 | väntar | info:bra | 3 st i tratten – veva nu! |
| 3:14 | sak | info:bra | 3 st i tratten – veva nu! |
| 3:14 | kvitto-visas | info:bra | 3 st i tratten – veva nu! |
| 3:14 | toast | bra | 3 st i tratten – veva nu! |
| 3:15 | händelse | malKlart | id=flaska del=Dag 1 – Kom igång nasta=egenPrint |
| 3:15 | struken | kedja | trad |
| 3:15 | väntar | du | Kvarnen funkar. Soptippen är en gruva. |
| 3:15 | väntar | du | Min egen tråd. Nu printar jag en nyckelring av den. |
| 3:15 | MÅL |  | Printa med egen tråd |
| 3:16 | klar | info:bra | 3 st i tratten – veva nu! |
| 3:16 | sak | du | Kvarnen funkar. Soptippen är en gruva. |
| 3:16 | kvitto-visas | du | Kvarnen funkar. Soptippen är en gruva. |
| 3:16 | lapp | 📔 Dagbok | Kvarnen funkar. Soptippen är en gruva. |
| 3:16 | meddelande | du | Kvarnen funkar. Soptippen är en gruva. |
| 3:16 | dagbokkort | du | Kvarnen funkar. Soptippen är en gruva. |
| 3:16 | röst | du | Dag 1. 21 dagar till jul. Kvarnen funkar. Soptippen är en gruva. · STORY |
| 3:23 | händelse | brevLast | id=malt |
| 3:23 | klar | du | Kvarnen funkar. Soptippen är en gruva. |
| 3:23 | målruta |  | Printa med egen tråd |
| 3:23 | sak | du | Min egen tråd. Nu printar jag en nyckelring av den. |
| 3:23 | pil |  | Printa med egen tråd |
| 3:23 | notis | tanke | 💭 Min egen tråd. Nu printar jag en nyckelring av den. |
| 3:23 | röst | du | Min egen tråd. Nu printar jag en nyckelring av den. · MÅL |
| 3:27 | klar | du | Min egen tråd. Nu printar jag en nyckelring av den. |
| 3:33 | händelse | printStart | sak=nyckelring |
| 3:33 | toast | bra | 🔗 Slangen kopplad |
| 3:38 | toast | guld | ✅ |
| 3:38 | händelse | printKlar | sak=nyckelring n=3 |
| 3:38 | händelse | malKlart | id=egenPrint del=Dag 1 – Kom igång nasta=salj |
| 3:38 | väntar | du | Affären på andra sidan vägen kanske köper sånt här. |
| 3:38 | MÅL |  | Sälj hos Ali |
| 3:38 | målruta |  | Sälj hos Ali |
| 3:38 | sak | du | Affären på andra sidan vägen kanske köper sånt här. |
| 3:38 | pil |  | Sälj hos Ali |
| 3:38 | notis | tanke | 💭 Affären på andra sidan vägen kanske köper sånt här. |
| 3:38 | röst | du | Affären på andra sidan vägen kanske köper sånt här. · MÅL |
| 3:38 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 3:38 | nick |  | nick:12 |
| 3:42 | kvittens-bock |  | ✓ Printa med egen tråd |
| 3:42 | klar | du | Affären på andra sidan vägen kanske köper sånt här. |
| 3:46 | händelse | printStart | sak=nyckelring |
| 3:47 | toast | guld | ✅ |
| 3:47 | händelse | printKlar | sak=nyckelring n=4 |
| 3:47 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 3:49 | händelse | printStart | sak=nyckelring |
| 3:50 | toast | guld | ✅ |
| 3:50 | händelse | printKlar | sak=nyckelring n=5 |
| 3:50 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 3:50 | sak | du | Någon köpte nåt jag gjort. Det här kan funka. |
| 3:50 | notis | tanke | 💭 Någon köpte nåt jag gjort. Det här kan funka. |
| 3:50 | röst | du | Någon köpte nåt jag gjort. Det här kan funka. · STORY |
| 3:51 | väntar | kjelle | God morgon, det är Kjelle på Radio Tippen! Det har flyttat in någon i det gamla skjulet. Med en cykel och en skrivare. Spännande, Gunnar. |
| 3:51 | radio | kjelle | God morgon, det är Kjelle på Radio Tippen! Det har flyttat in någon i det gamla skjulet. Med en cykel och en skrivare. Spännande, Gunnar. |
| 3:51 | skratt | du | Radio-Kjelle |
| 3:54 | klar | du | Någon köpte nåt jag gjort. Det här kan funka. |
| 3:55 | tanke | du | Vem är Gunnar? |
| 3:55 | väntar | du | Vem är Gunnar? |
| 3:56 | sak | kjelle | God morgon, det är Kjelle på Radio Tippen! Det har flyttat in någon i det gamla skjulet. Med en cykel och en skrivare. Spännande, Gunnar. |
| 3:56 | notis |  | 📻 Radio Tippen: God morgon, det är Kjelle på Radio Tippen! Det har flyttat in någon i det gamla skjulet. Med en cykel och en skrivare. Spännande, Gunnar. |
| 3:56 | röst | kjelle | God morgon, det är Kjelle på Radio Tippen! Det har flyttat in någon i det gamla skjulet. Med en cykel och en skrivare. Spännande, Gunnar. · REAKTION |
| 4:08 | klar | kjelle | God morgon, det är Kjelle på Radio Tippen! Det har flyttat in någon i det gamla skjulet. Med en cykel och en skrivare. Spännande, Gunnar. |
| 4:11 | paket |  | ali → ge |
| 4:11 | väntar | ali | Du får bonus! 15 kr extra. Pappa hade gillat dig. |
| 4:11 | väntar |  | (läget ändras) |
| 4:11 | aliSalt | ali | 45 |
| 4:11 | röst | ali | Nyckelringar igen? Folk tappar sina nycklar hela tiden. Bra affär för oss. · STORY |
| 4:11 | butiksbubbla | ali | Nyckelringar igen? Folk tappar sina nycklar hela tiden. Bra affär för oss. |
| 4:12 | händelse | malKlart | id=salj del=Dag 1 – Kom igång nasta=powerbank |
| 4:12 | paket |  | sms → ge |
| 4:12 | väntar | ali | Ali här. Glömde en sak. Kom tillbaka, jag har nåt åt dig. |
| 4:12 | väntar |  | (läget ändras) |
| 4:13 | MÅL |  | Gå till Ali |
| 4:15 | struken | du | Vem är Gunnar? |
| 4:15 | sak | ali | Du får bonus! 15 kr extra. Pappa hade gillat dig. |
| 4:15 | notis |  | Ali: ”Du får bonus! 15 kr extra. Pappa hade gillat dig.” |
| 4:15 | röst | ali | Du får bonus! 15 kr extra. Pappa hade gillat dig. · REAKTION |
| 4:16 | kvittens-bock |  | ✓ Sälj hos Ali |
| 4:19 | klar | ali | Du får bonus! 15 kr extra. Pappa hade gillat dig. |
| 4:21 | väntar | du | Ali har något åt mig. Jag går över vägen till affären. |
| 4:21 | målruta |  | Gå till Ali |
| 4:21 | sak |  | (läget ändras) |
| 4:21 | klar |  | (läget ändras) |
| 4:21 | sak | du | Ali har något åt mig. Jag går över vägen till affären. |
| 4:21 | pil |  | Gå till Ali |
| 4:21 | notis | tanke | 💭 Ali har något åt mig. Jag går över vägen till affären. |
| 4:21 | röst | du | Ali har något åt mig. Jag går över vägen till affären. · MÅL |
| 4:25 | klar | du | Ali har något åt mig. Jag går över vägen till affären. |
| 4:26 | paket | ali | ali → ge |
| 4:26 | röst | ali | Ali här. Jag såg dig cykla. Det ser jobbigt ut. Testa koppla på den här. Bra kunder får bonus. · STORY |
| 4:26 | butiksbubbla | ali | Ali här. Jag såg dig cykla. Det ser jobbigt ut. Testa koppla på den här. Bra kunder får bonus. |
| 4:30 | sak | ali | Ali här. Glömde en sak. Kom tillbaka, jag har nåt åt dig. |
| 4:30 | sms | ali | Ali här. Glömde en sak. Kom tillbaka, jag har nåt åt dig. |
| 4:30 | sms-bubbla | ali | Ali här. Glömde en sak. Kom tillbaka, jag har nåt åt dig. |
| 4:30 | röst | ali | Ali här. Glömde en sak. Kom tillbaka, jag har nåt åt dig. · STORY |
| 4:35 | klar | ali | Ali här. Glömde en sak. Kom tillbaka, jag har nåt åt dig. |
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
| 4:42 | väntar | du | Med en skräpgrip slipper jag böja mig. Ali har en ritning. |
| 4:42 | MÅL |  | Plocka skräp och mal det |
| 4:46 | målruta |  | Plocka skräp och mal det |
| 4:46 | kvittens-bock |  | ✓ Gå till Ali |
| 4:50 | klar | du | Nu sparas lite ström. En nyckelring, typ. Framtiden är här, och den sitter fast med eltejp. |
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
| 5:03 | sak |  | (läget ändras) |
| 5:03 | toast | guld | ✅ |
| 5:03 | händelse | printKlar | sak=nyckelring n=7 |
| 5:03 | klar |  | (läget ändras) |
| 5:14 | sak | notis:Storebrors skrivare: Ingen ström – tramp | Storebrors skrivare: Ingen ström – trampa cykeln |
| 5:14 | notis | fel | Storebrors skrivare: Ingen ström – trampa cykeln |
| 5:17 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 5:17 | klar | notis:Storebrors skrivare: Ingen ström – tramp | Storebrors skrivare: Ingen ström – trampa cykeln |
| 5:19 | händelse | printStart | sak=nyckelring |
| 5:20 | toast | guld | ✅ |
| 5:20 | händelse | printKlar | sak=nyckelring n=8 |
| 5:26 | sak | mamma | Hur kunde du bara gå? Är du ok? Svara när jag ringer! |
| 5:26 | sms | mamma | Hur kunde du bara gå? Är du ok? Svara när jag ringer! |
| 5:26 | sms-bubbla | mamma | Hur kunde du bara gå? Är du ok? Svara när jag ringer! |
| 5:26 | röst | mamma | Hur kunde du bara gå? Är du ok? Svara när jag ringer! · STORY |
| 5:31 | klar | mamma | Hur kunde du bara gå? Är du ok? Svara när jag ringer! |
| 5:32 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 5:40 | aliSalt | ali | 15 |
| 5:40 | aliSalt | ali | 15 |
| 5:40 | aliSalt | ali | 15 |
| 5:48 | händelse | printStart | sak=nyckelring |
| 5:49 | toast | guld | ✅ |
| 5:49 | händelse | printKlar | sak=nyckelring n=9 |
| 5:50 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 5:52 | händelse | printStart | sak=nyckelring |
| 5:53 | toast | guld | ✅ |
| 5:53 | händelse | printKlar | sak=nyckelring n=10 |
| 5:54 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 5:56 | händelse | printStart | sak=nyckelring |
| 5:58 | toast | guld | ✅ |
| 5:58 | händelse | printKlar | sak=nyckelring n=11 |
| 5:58 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 6:05 | aliSalt | ali | 15 |
| 6:05 | aliSalt | ali | 15 |
| 6:06 | aliSalt | ali | 15 |
| 6:10 | tanke | du | Gripen hos Ali. Femtio kronor. |
| 6:10 | väntar | du | Gripen hos Ali. Femtio kronor. |
| 6:10 | nick |  | paminn:14 |
| 6:11 | sak | du | Gripen hos Ali. Femtio kronor. |
| 6:11 | notis | tanke | 💭 Gripen hos Ali. Femtio kronor. |
| 6:11 | röst | du | Gripen hos Ali. Femtio kronor. · REAKTION |
| 6:13 | klar | du | Gripen hos Ali. Femtio kronor. |
| 6:14 | händelse | printStart | sak=nyckelring |
| 6:15 | toast | guld | ✅ |
| 6:15 | händelse | printKlar | sak=nyckelring n=12 |
| 6:27 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 6:29 | händelse | printStart | sak=nyckelring |
| 6:30 | toast | guld | ✅ |
| 6:30 | händelse | printKlar | sak=nyckelring n=13 |
| 6:30 | sak | ali | Ali här. Nyckelringen sålde. Jag ville bli ingenjör, men fick ta över pappas butik. I natt lät jag en AI rita en skräpgrip åt mig. Kom och titta. |
| 6:30 | sms | ali | Ali här. Nyckelringen sålde. Jag ville bli ingenjör, men fick ta över pappas butik. I natt lät jag en AI rita en skräpgrip åt mig. Kom och titta. |
| 6:30 | sms-bubbla | ali | Ali här. Nyckelringen sålde. Jag ville bli ingenjör, men fick ta över pappas butik. I natt lät jag en AI rita en skräpgrip åt mig. Kom och titta. |
| 6:30 | röst | ali | Ali här. Nyckelringen sålde. Jag ville bli ingenjör, men fick ta över pappas butik. I natt lät jag en AI rita en skräpgrip åt mig. Kom och titta. · STORY |
| 6:31 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 6:33 | händelse | printStart | sak=nyckelring |
| 6:34 | toast | guld | ✅ |
| 6:34 | händelse | printKlar | sak=nyckelring n=14 |
| 6:35 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 6:43 | klar | ali | Ali här. Nyckelringen sålde. Jag ville bli ingenjör, men fick ta över pappas butik. I natt lät jag en AI rita en skräpgrip åt mig. Kom och titta. |
| 6:43 | aliSalt | ali | 15 |
| 6:43 | aliSalt | ali | 15 |
| 6:43 | aliSalt | ali | 15 |
| 6:52 | händelse | printStart | sak=nyckelring |
| 6:53 | toast | guld | ✅ |
| 6:53 | händelse | printKlar | sak=nyckelring n=15 |
| 6:54 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 6:56 | händelse | printStart | sak=nyckelring |
| 6:56 | toast | fel | Ingen ström – trampa cykeln |
| 6:58 | toast | guld | ✅ |
| 6:58 | händelse | printKlar | sak=nyckelring n=16 |
| 6:58 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 7:00 | händelse | printStart | sak=nyckelring |
| 7:01 | toast | guld | ✅ |
| 7:01 | händelse | printKlar | sak=nyckelring n=17 |
| 7:02 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 7:09 | aliSalt | ali | 15 |
| 7:09 | aliSalt | ali | 15 |
| 7:10 | aliSalt | ali | 15 |
| 7:18 | händelse | printStart | sak=nyckelring |
| 7:19 | toast | guld | ✅ |
| 7:19 | händelse | printKlar | sak=nyckelring n=18 |
| 7:20 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 7:22 | händelse | printStart | sak=nyckelring |
| 7:23 | toast | guld | ✅ |
| 7:23 | händelse | printKlar | sak=nyckelring n=19 |
| 7:24 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 7:26 | händelse | printStart | sak=nyckelring |
| 7:27 | toast | guld | ✅ |
| 7:27 | händelse | printKlar | sak=nyckelring n=20 |
| 7:28 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 7:36 | aliSalt | ali | 15 |
| 7:36 | aliSalt | ali | 15 |
| 7:36 | aliSalt | ali | 15 |
| 7:45 | händelse | printStart | sak=nyckelring |
| 7:47 | toast | guld | ✅ |
| 7:47 | händelse | printKlar | sak=nyckelring n=21 |
| 7:47 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 7:49 | händelse | printStart | sak=nyckelring |
| 7:50 | toast | guld | ✅ |
| 7:50 | händelse | printKlar | sak=nyckelring n=22 |
| 7:51 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 7:55 | upplåst | bara | grip |
| 7:55 | brott | RESERV | grip (bara 4 av 6) |
| 7:55 | händelse | upplast | id=grip flask=bara |
| 8:10 | händelse | printStart | sak=nyckelring |
| 8:11 | toast | guld | ✅ |
| 8:11 | händelse | printKlar | sak=nyckelring n=23 |
| 8:12 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 8:18 | väntar | bud | (tips) |
| 8:18 | sak | bud | (tips) |
| 8:18 | röst | du | Jag har pengar nu. Hos Ali kan jag köpa uppgraderingar – bära mer eller printa snabbare. · MÅL |
| 8:19 | klar | bud | (tips) |
| 8:19 | aliSalt | ali | 15 |
| 8:19 | aliSalt | ali | 15 |
| 8:20 | aliSalt | ali | 15 |
| 8:24 | toast | guld | 3D-modell köpt – printa skräpgrip på skrivaren |
| 8:24 | händelse | kopt | sak=grip |
| 8:24 | röst | ali | Bra val. 3D-modellen är din. Den räcker till en. · STORY |
| 8:24 | butiksbubbla | ali | Bra val. 3D-modellen är din. Den räcker till en. |
| 8:25 | händelse | malKlart | id=kopGrip del=Dag 1 – Kom igång nasta=printGrip |
| 8:25 | väntar | du | Min första 3D-modell! Nu ska den bara printas. Jag printar inte bara saker – jag printar maskiner. |
| 8:25 | MÅL |  | Printa skräpgripen |
| 8:26 | sak | du | Min första 3D-modell! Nu ska den bara printas. Jag printar inte bara saker – jag printar maskiner. |
| 8:26 | kvitto-visas | du | Min första 3D-modell! Nu ska den bara printas. Jag printar inte bara saker – jag printar maskiner. |
| 8:26 | lapp | 📔 Dagbok | Min första 3D-modell! Nu ska den bara printas. Jag printar inte bara saker – jag printar maskiner. |
| 8:26 | meddelande | du | Min första 3D-modell! Nu ska den bara printas. Jag printar inte bara saker – jag printar maskiner. |
| 8:26 | dagbokkort | du | Min första 3D-modell! Nu ska den bara printas. Jag printar inte bara saker – jag printar maskiner. |
| 8:26 | röst | du | Dag 1. 21 dagar till jul. Min första 3D-modell! Nu ska den bara printas. Jag printar inte bara saker – jag printar maskiner. · STORY |
| 8:37 | händelse | brevLast | id=ritning |
| 8:37 | klar | du | Min första 3D-modell! Nu ska den bara printas. Jag printar inte bara saker – jag printar maskiner. |
| 8:37 | målruta |  | Printa skräpgripen |
| 8:37 | sak | du | (nytt mål i rutan) |
| 8:37 | pil |  | Printa skräpgripen |
| 8:37 | klar | du | (nytt mål i rutan) |
| 8:37 | nick |  | nick:15 |
| 8:46 | händelse | printStart | sak=byggsats:grip |
| 8:48 | händelse | printKlar | sak=byggsats:grip n=1 |
| 8:48 | toast | guld | ✅ |
| 8:49 | väntar | info:guld | Klicka för att ta på dig skräpgrip |
| 8:49 | händelse | tagitUrPrint | sak=byggsats:grip n=1 |
| 8:49 | paket |  | sms |
| 8:49 | väntar | ali | Ali här. Jag såg Skräpgrip på avstånd. Ett streck blev lite snett. Mitt fel. Vackert ändå. |
| 8:49 | struken | kedja | grip |
| 8:49 | sak | info:guld | Klicka för att ta på dig skräpgrip |
| 8:49 | kvitto-visas | info:guld | Klicka för att ta på dig skräpgrip |
| 8:49 | toast | guld | Klicka för att ta på dig skräpgrip |
| 8:51 | klar | info:guld | Klicka för att ta på dig skräpgrip |
| 8:53 | väntar | info:guld | 🦾 Skräpgripen sitter! Bär 6, lättare att sikta, plockar när du går nära. |
| 8:53 | tog på | du | byggsats:grip |
| 8:53 | händelse | monterat | sak=grip |
| 8:53 | sak | info:guld | 🦾 Skräpgripen sitter! Bär 6, lättare att sikta, plockar när du går nära. |
| 8:53 | kvitto-visas | info:guld | 🦾 Skräpgripen sitter! Bär 6, lättare att sikta, plockar när du går nära. |
| 8:53 | toast | guld | 🦾 Skräpgripen sitter! Bär 6, lättare att sikta, plockar när du går nära. |
| 8:53 | händelse | malKlart | id=printGrip del=Dag 1 – Kom igång nasta=krukaD1 |
| 8:53 | väntar | du | Ali vill ha krukor. Jag printar en blomkruka. |
| 8:53 | MÅL |  | Printa och sälj nyckelringar |
| 8:53 | upplåst | inkomst | kruka |
| 8:53 | brott | UPPLÅST | kruka (inkomst 23 av 6) |
| 8:53 | händelse | upplast | id=kruka flask=inkomst |
| 8:53 | paket |  | tanke → sms |
| 8:53 | tanke | du | Nyckelringar, nyckelringar. Ali kan inte vilja ha fler. |
| 8:53 | väntar | du | Nyckelringar, nyckelringar. Ali kan inte vilja ha fler. |
| 8:53 | väntar | ali | Prova en kruka. Folk köper krukor. Ingen vet varför. |
| 8:53 | skratt | ali | Prova en kruka. Folk köper krukor. Ingen |
| 8:55 | klar | info:guld | 🦾 Skräpgripen sitter! Bär 6, lättare att sikta, plockar när du går nära. |
| 8:57 | målruta |  | Köp krukreceptet |
| 8:57 | kvittens-bock |  | ✓ Printa skräpgripen |
| 8:57 | sak | du | Ali vill ha krukor. Jag printar en blomkruka. |
| 8:57 | pil |  | Köp krukreceptet |
| 8:57 | notis | tanke | 💭 Ali vill ha krukor. Jag printar en blomkruka. |
| 8:57 | röst | du | Ali vill ha krukor. Jag printar en blomkruka. · MÅL |
| 8:57 | nick |  | nick:16 |
| 9:00 | händelse | kopt | sak=kruka |
| 9:00 | röst | ali | Bra val. Folk köper sånt. Jag vet inte varför. · STORY |
| 9:00 | butiksbubbla | ali | Blomkruka? Bra val. Folk köper sånt. Jag vet inte varför. |
| 9:01 | klar | du | Ali vill ha krukor. Jag printar en blomkruka. |
| 9:10 | händelse | printStart | sak=kruka |
| 9:12 | sak | ali | Ali här. Jag såg Skräpgrip på avstånd. Ett streck blev lite snett. Mitt fel. Vackert ändå. |
| 9:12 | sms | ali | Ali här. Jag såg Skräpgrip på avstånd. Ett streck blev lite snett. Mitt fel. Vackert ändå. |
| 9:12 | sms-bubbla | ali | Ali här. Jag såg Skräpgrip på avstånd. Ett streck blev lite snett. Mitt fel. Vackert ändå. |
| 9:12 | röst | ali | Ali här. Jag såg Skräpgrip på avstånd. Ett streck blev lite snett. Mitt fel. Vackert ändå. · REAKTION |
| 9:12 | toast | guld | ✅ |
| 9:12 | händelse | printKlar | sak=kruka n=1 |
| 9:12 | kvittens | du | En kruka. Mamma skulle bli så stolt. Hon får inte veta. |
| 9:12 | väntar | du | En kruka. Mamma skulle bli så stolt. Hon får inte veta. |
| 9:12 | händelse | malKlart | id=krukaD1 del=Dag 1 – Kom igång nasta=saljKruka |
| 9:12 | väntar | du | Ali gillar krukor. Han sa det själv. |
| 9:12 | MÅL |  | Sälj blomkrukan |
| 9:13 | händelse | tagitUrPrint | sak=kruka n=1 |
| 9:16 | målruta |  | Sälj blomkrukan |
| 9:19 | klar | ali | Ali här. Jag såg Skräpgrip på avstånd. Ett streck blev lite snett. Mitt fel. Vackert ändå. |
| 9:19 | sak | du | Ali gillar krukor. Han sa det själv. |
| 9:19 | pil |  | Sälj blomkrukan |
| 9:19 | notis | tanke | 💭 Ali gillar krukor. Han sa det själv. |
| 9:19 | röst | du | Ali gillar krukor. Han sa det själv. · MÅL |
| 9:22 | klar | du | Ali gillar krukor. Han sa det själv. |
| 9:22 | sak | du | En kruka. Mamma skulle bli så stolt. Hon får inte veta. |
| 9:22 | notis | tanke | 💭 En kruka. Mamma skulle bli så stolt. Hon får inte veta. |
| 9:22 | röst | du | En kruka. Mamma skulle bli så stolt. Hon får inte veta. · STORY |
| 9:27 | klar | du | En kruka. Mamma skulle bli så stolt. Hon får inte veta. |
| 9:32 | aliSalt | ali | 70 |
| 9:33 | händelse | malKlart | id=saljKruka del=Dag 1 – Kom igång nasta=kopSang |
| 9:33 | struken | kedja | morkt |
| 9:33 | väntar | du | Jag kan inte sova på betongen en natt till. Ali har en säng. Typ. |
| 9:33 | MÅL |  | Köp sängen |
| 9:33 | målruta |  | Köp sängen |
| 9:33 | sak | du | Jag kan inte sova på betongen en natt till. Ali har en säng. Typ. |
| 9:33 | pil |  | Köp sängen |
| 9:33 | notis | tanke | 💭 Jag kan inte sova på betongen en natt till. Ali har en säng. Typ. |
| 9:33 | röst | du | Jag kan inte sova på betongen en natt till. Ali har en säng. Typ. · MÅL |
| 9:37 | kvittens-bock |  | ✓ Sälj blomkrukan |
| 9:39 | klar | du | Jag kan inte sova på betongen en natt till. Ali har en säng. Typ. |
| 9:42 | händelse | kopt | sak=sang |
| 9:42 | röst | ali | Sov gott, min vän. · STORY |
| 9:42 | butiksbubbla | ali | Sov gott, min vän. |
| 9:44 | händelse | malKlart | id=kopSang del=Dag 1 – Kom igång nasta=printSang |
| 9:44 | väntar | du | Sängen tar lång tid. Den är värd det. |
| 9:44 | målruta |  | Printa sängen |
| 9:44 | MÅL |  | Printa sängen |
| 9:44 | sak | du | Sängen tar lång tid. Den är värd det. |
| 9:44 | pil |  | Printa sängen |
| 9:44 | notis | tanke | 💭 Sängen tar lång tid. Den är värd det. |
| 9:44 | röst | du | Sängen tar lång tid. Den är värd det. · MÅL |
| 9:47 | klar | du | Sängen tar lång tid. Den är värd det. |
| 9:48 | kvittens-bock |  | ✓ Köp sängen |
| 10:06 | sak | du | Nyckelringar, nyckelringar. Ali kan inte vilja ha fler. |
| 10:06 | notis | tanke | 💭 Nyckelringar, nyckelringar. Ali kan inte vilja ha fler. |
| 10:06 | röst | du | Nyckelringar, nyckelringar. Ali kan inte vilja ha fler. · STORY |
| 10:11 | klar | du | Nyckelringar, nyckelringar. Ali kan inte vilja ha fler. |
| 10:11 | händelse | printStart | sak=sang |
| 10:15 | toast | fel | Ingen ström – trampa cykeln |
| 10:17 | toast | fel | Slut på tråd – mal mer så fortsätter den |
| 10:17 | väntar | notis:Storebrors skrivare: Slut på tråd – mal  | Storebrors skrivare: Slut på tråd – mal mer så fortsätter den |
| 10:19 | sak | ali | Prova en kruka. Folk köper krukor. Ingen vet varför. |
| 10:19 | skratt | ali | Prova en kruka. Folk köper krukor. Ingen |
| 10:19 | sms | ali | Prova en kruka. Folk köper krukor. Ingen vet varför. |
| 10:19 | skratt | ali | Prova en kruka. Folk köper krukor. Ingen |
| 10:19 | sms-bubbla | ali | Prova en kruka. Folk köper krukor. Ingen vet varför. |
| 10:19 | skratt | ali | Prova en kruka. Folk köper krukor. Ingen |
| 10:19 | röst | ali | Prova en kruka. Folk köper krukor. Ingen vet varför. · STORY |
| 10:24 | klar | ali | Prova en kruka. Folk köper krukor. Ingen vet varför. |
| 10:24 | skratt | ali | Prova en kruka. Folk köper krukor. Ingen |
| 10:34 | sak | notis:Storebrors skrivare: Slut på tråd – mal  | Storebrors skrivare: Slut på tråd – mal mer så fortsätter den |
| 10:34 | notis | fel | Storebrors skrivare: Slut på tråd – mal mer så fortsätter den |
| 10:36 | toast | guld | ✅ |
| 10:36 | händelse | printKlar | sak=sang n=1 |
| 10:37 | klar | notis:Storebrors skrivare: Slut på tråd – mal  | Storebrors skrivare: Slut på tråd – mal mer så fortsätter den |
| 10:39 | händelse | tagitUrPrint | sak=sang n=1 |
| 10:39 | struken | kedja | sang |
| 10:39 | händelse | malKlart | id=printSang del=Dag 1 – Kom igång nasta=sov1 |
| 10:39 | paket |  | lapp |
| 10:39 | lapp | 📔 Dagbok | Dag 1. Nitton år. Inget mer tjat. En skrivare, ett skjul och en säng. Det räcker för i natt. Gården är full av skräp. I morgon. |
| 10:39 | meddelande | du | Dag 1. Nitton år. Inget mer tjat. En skrivare, ett skjul och en säng. Det räcker för i natt. Gården är full av skräp. I morgon. |
| 10:39 | dagbokkort | du | Dag 1. Nitton år. Inget mer tjat. En skrivare, ett skjul och en säng. Det räcker för i natt. Gården är full av skräp. I morgon. |
| 10:39 | väntar | du | Sängen ska in i skjulet. Sen sover jag. |
| 10:39 | målruta |  | Sängen i skjulet |
| 10:39 | MÅL |  | Sängen i skjulet |
| 10:39 | röst | du | Dag 1. 21 dagar till jul. Nitton år. Inget mer tjat. En skrivare, ett skjul och en säng. Det räcker för i natt. Gården är full av skräp. I morgon. · STORY |
| 10:51 | händelse | brevLast | id=start |
| 10:53 | sak | du | Sängen ska in i skjulet. Sen sover jag. |
| 10:53 | pil |  | Sängen i skjulet |
| 10:53 | notis | tanke | 💭 Sängen ska in i skjulet. Sen sover jag. |
| 10:53 | röst | du | Sängen ska in i skjulet. Sen sover jag. · MÅL |
| 10:56 | klar | du | Sängen ska in i skjulet. Sen sover jag. |
| 11:05 | nattkort | du | 🌙 Dag 1 är slut. God natt. zzz… i en riktig säng DAGENS PRINTAR Nyckelring × 23 Blomkruka × 1 Säng × 1 Totalt 25 printar 💰 Tjänat i dag +430 kr |

<details><summary>Botens handlingar dag 1</summary>

- 0:12 gå till brädhögen (3 m) (5 kr)
- 0:27 popup: "FORTSÄTT" (5 kr)
- 0:32 gå till cykeln vid vägen (2 m) (5 kr)
- 0:48 gå till rutan i linje 1 (13 m) (5 kr)
- 1:26 gå till cykeln (lyfter den) (13 m) (5 kr)
- 1:37 gå till cykelns plats (11 m) (5 kr)
- 1:40 gå till skrivaren (2 m) (5 kr)
- 1:41 printar Nyckelring (5 kr)
- 1:48 tar ut 1 st ur skrivaren (5 kr)
- 1:52 printar Nyckelring (sista av storebrors rulle) (5 kr)
- 2:16 tar ut 1 st ur skrivaren (5 kr)
- 2:21 gå till Ali (26 m) (5 kr)
- 2:21 öppnar Alis butik – sälja de två nyckelringarna (5 kr)
- 2:24 säljer hos Ali: +30 kr (35 kr)
- 2:37 öppnar Alis butik – köpa kvarnen (35 kr)
- 2:39 köper gammalkvarn för 30 kr (5 kr)
- 2:40 köpte kvarnen (5 kr)
- 2:55 gå till kvarnens ruta (28 m) (5 kr)
- 3:12 plockar 3 skräp på gården (bär max 3) (5 kr)
- 3:14 gå till kvarnen (9 m) (5 kr)
- 3:23 popup: "FORTSÄTT" (5 kr)
- 3:30 gå till cykeln (2 m) (5 kr)
- 3:33 printar Nyckelring (5 kr)
- 3:39 tar ut 1 st ur skrivaren (5 kr)
- 3:46 printar Nyckelring (5 kr)
- 3:48 tar ut 1 st ur skrivaren (5 kr)
- 3:49 printar Nyckelring (5 kr)
- 3:51 tar ut 1 st ur skrivaren (5 kr)
- 4:10 gå till Ali (27 m) (5 kr)
- 4:10 öppnar Alis butik – sälja nyckelringar (5 kr)
- 4:12 säljer hos Ali: +45 kr (50 kr)
- 4:26 öppnar Alis butik – Ali (powerbanken) (65 kr)
- 4:42 gå till koppla powerbanken till cykeln (24 m) (65 kr)
- 4:55 tjänar pengar till väntar på flaskhalsen för grip: 65/105 kr → printar nyckelring (15 kr) (65 kr)
- 4:56 gå till skrivaren (2 m) (65 kr)
- 4:58 printar Nyckelring (65 kr)
- 5:00 tar ut 1 st ur skrivaren (65 kr)
- 5:02 printar Nyckelring (65 kr)
- 5:09 plockar 3 skräp på gården (bär max 3) (65 kr)
- 5:14 gå till kvarnen (23 m) (65 kr)
- 5:17 gå till skrivaren (2 m) (65 kr)
- 5:17 tar ut 1 st ur skrivaren (65 kr)
- 5:19 printar Nyckelring (65 kr)
- 5:26 plockar 3 skräp på gården (bär max 3) (65 kr)
- 5:29 gå till kvarnen (17 m) (65 kr)
- 5:32 gå till skrivaren (2 m) (65 kr)
- 5:32 tar ut 1 st ur skrivaren (65 kr)
- 5:38 gå till Ali (28 m) (65 kr)
- 5:38 öppnar Alis butik – sälja (65 kr)
- 5:40 säljer hos Ali: +45 kr (110 kr)
- 5:41 tjänar pengar till väntar på flaskhalsen för grip: 110/150 kr → printar nyckelring (15 kr) (110 kr)
- 5:46 gå till skrivaren (25 m) (110 kr)
- 5:48 printar Nyckelring (110 kr)
- 5:50 tar ut 1 st ur skrivaren (110 kr)
- 5:52 printar Nyckelring (110 kr)
- 5:54 tar ut 1 st ur skrivaren (110 kr)
- 5:56 printar Nyckelring (110 kr)
- 5:57 gå till cykeln (1 m) (110 kr)
- 5:58 tar ut 1 st ur skrivaren (110 kr)
- 6:04 gå till Ali (25 m) (110 kr)
- 6:04 öppnar Alis butik – sälja (110 kr)
- 6:06 säljer hos Ali: +45 kr (155 kr)
- 6:08 tjänar pengar till väntar på flaskhalsen för grip: 155/195 kr → printar nyckelring (15 kr) (155 kr)
- 6:13 gå till skrivaren (25 m) (155 kr)
- 6:14 printar Nyckelring (155 kr)
- 6:21 plockar 3 skräp på gården (bär max 3) (155 kr)
- 6:25 gå till kvarnen (23 m) (155 kr)
- 6:27 gå till skrivaren (1 m) (155 kr)
- 6:28 tar ut 1 st ur skrivaren (155 kr)
- 6:29 printar Nyckelring (155 kr)
- 6:32 tar ut 1 st ur skrivaren (155 kr)
- 6:33 printar Nyckelring (155 kr)
- 6:36 tar ut 1 st ur skrivaren (155 kr)
- 6:41 gå till Ali (28 m) (155 kr)
- 6:41 öppnar Alis butik – sälja (155 kr)
- 6:43 säljer hos Ali: +45 kr (200 kr)
- 6:45 tjänar pengar till väntar på flaskhalsen för grip: 200/240 kr → printar nyckelring (15 kr) (200 kr)
- 6:50 gå till skrivaren (25 m) (200 kr)
- 6:52 printar Nyckelring (200 kr)
- 6:54 tar ut 1 st ur skrivaren (200 kr)
- 6:56 printar Nyckelring (200 kr)
- 6:57 gå till cykeln (1 m) (200 kr)
- 6:59 tar ut 1 st ur skrivaren (200 kr)
- 7:00 printar Nyckelring (200 kr)
- 7:03 tar ut 1 st ur skrivaren (200 kr)
- 7:08 gå till Ali (25 m) (200 kr)
- 7:08 öppnar Alis butik – sälja (200 kr)
- 7:10 säljer hos Ali: +45 kr (245 kr)
- 7:12 tjänar pengar till väntar på flaskhalsen för grip: 245/285 kr → printar nyckelring (15 kr) (245 kr)
- 7:17 gå till skrivaren (25 m) (245 kr)
- 7:18 printar Nyckelring (245 kr)
- 7:21 tar ut 1 st ur skrivaren (245 kr)
- 7:22 printar Nyckelring (245 kr)
- 7:25 tar ut 1 st ur skrivaren (245 kr)
- 7:26 printar Nyckelring (245 kr)
- 7:29 tar ut 1 st ur skrivaren (245 kr)
- 7:34 gå till Ali (25 m) (245 kr)
- 7:34 öppnar Alis butik – sälja (245 kr)
- 7:36 säljer hos Ali: +45 kr (290 kr)
- 7:38 tjänar pengar till väntar på flaskhalsen för grip: 290/330 kr → printar nyckelring (15 kr) (290 kr)
- 7:43 gå till skrivaren (25 m) (290 kr)
- 7:45 printar Nyckelring (290 kr)
- 7:46 gå till cykeln (1 m) (290 kr)
- 7:47 tar ut 1 st ur skrivaren (290 kr)
- 7:49 printar Nyckelring (290 kr)
- 7:51 tar ut 1 st ur skrivaren (290 kr)
- 7:59 plockar 3 skräp på gården (bär max 3) (290 kr)
- 8:04 gå till kvarnen (28 m) (290 kr)
- 8:08 gå till skrivaren (1 m) (290 kr)
- 8:10 printar Nyckelring (290 kr)
- 8:12 tar ut 1 st ur skrivaren (290 kr)
- 8:18 gå till Ali (28 m) (290 kr)
- 8:18 öppnar Alis butik – sälja (290 kr)
- 8:20 säljer hos Ali: +45 kr (335 kr)
- 8:22 öppnar Alis butik – köpa skräpgrip (335 kr)
- 8:25 köper grip för 50 kr (285 kr)
- 8:37 popup: "FORTSÄTT" (285 kr)
- 8:44 gå till skrivaren (25 m) (285 kr)
- 8:46 printar Skräpgrip (285 kr)
- 8:49 tar ut 1 st ur skrivaren (285 kr)
- 8:53 tar på grip (285 kr)
- 8:59 gå till Ali (25 m) (285 kr)
- 8:59 öppnar Alis butik – köpa receptet blomkruka (285 kr)
- 9:01 köper kruka för 40 kr (245 kr)
- 9:08 gå till skrivaren (25 m) (245 kr)
- 9:10 printar Blomkruka (245 kr)
- 9:10 gå till cykeln (1 m) (245 kr)
- 9:13 tar ut 1 st ur skrivaren (245 kr)
- 9:30 gå till Ali (25 m) (245 kr)
- 9:30 öppnar Alis butik – sälja krukan (245 kr)
- 9:33 säljer hos Ali: +70 kr (315 kr)
- 9:41 öppnar Alis butik – köpa sängen (315 kr)
- 9:43 köper sang för 60 kr (255 kr)
- 10:00 plockar 6 skräp på gården (bär max 6) (255 kr)
- 10:06 gå till kvarnen (31 m) (255 kr)
- 10:10 gå till skrivaren (1 m) (255 kr)
- 10:11 printar Säng (255 kr)
- 10:16 gå till cykeln (2 m) (255 kr)
- 10:28 plockar 6 skräp på gården (bär max 6) (255 kr)
- 10:34 gå till kvarnen (28 m) (255 kr)
- 10:39 gå till skrivaren (1 m) (255 kr)
- 10:51 popup: "FORTSÄTT" (255 kr)
- 10:51 tar ut 1 st ur skrivaren (255 kr)
- 11:02 gå till sängplatsen i skjulet (21 m) (255 kr)

</details>

## Dag 2

| Tid | Källa | Vem | Text |
|---|---|---|---|
| 11:05 | vara | ali | kruka |
| 11:05 | händelse | malKlart | id=sov1 del=Dag 1 – Kom igång nasta=kopMotor |
| 11:05 | MÅL |  | Mal skräp, printa och sälj |
| 11:06 | sopsack | rolf | Sopsäckarna landade på gården |
| 11:06 | paket |  | tanke → ge |
| 11:06 | tanke | du | Hmm, vad kastade gubben ut ur sopbilen? Jag går och kollar. |
| 11:06 | väntar | du | Hmm, vad kastade gubben ut ur sopbilen? Jag går och kollar. |
| 11:06 | väntar |  | (läget ändras) |
| 0:01 | händelse | dagenBorjar | dag=2 |
| 0:01 | meddelande | du | Dag 2. 20 dagar till jul. Utan dörr blåser natten rakt in. |
| 0:01 | dagbokkort | du | Tippen bredvid · Dag 2. 20 dagar till jul. Utan dörr blåser natten rakt in. |
| 0:01 | röst | du | Dag 2. 20 dagar till jul. Tippen bredvid. Utan dörr blåser natten rakt in. · STORY |
| 0:08 | händelse | morgonkortStangt | dag=2 |
| 0:08 | paket |  | lapp |
| 0:08 | lapp | 📔 Dagbok | Första natten i en riktig säng. Jag printade den själv. |
| 0:08 | meddelande | du | Första natten i en riktig säng. Jag printade den själv. |
| 0:08 | dagbokkort | du | Första natten i en riktig säng. Jag printade den själv. |
| 0:08 | paket |  | tanke |
| 0:08 | tanke | du | Grön jul igen. Typiskt. |
| 0:08 | väntar | du | Grön jul igen. Typiskt. |
| 0:08 | röst | du | Dag 2. 20 dagar till jul. Första natten i en riktig säng. Jag printade den själv. · STORY |
| 0:09 | notis |  | Ali vill ha idag · Blomkruka · +50 % |
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
| 0:30 | sak | du | Hmm, vad kastade gubben ut ur sopbilen? Jag går och kollar. |
| 0:30 | notis | tanke | 💭 Hmm, vad kastade gubben ut ur sopbilen? Jag går och kollar. |
| 0:30 | röst | du | Hmm, vad kastade gubben ut ur sopbilen? Jag går och kollar. · STORY |
| 0:32 | toast | guld | ✅ |
| 0:32 | händelse | printKlar | sak=kruka n=2 |
| 0:33 | händelse | tagitUrPrint | sak=kruka n=1 |
| 0:35 | klar | du | Hmm, vad kastade gubben ut ur sopbilen? Jag går och kollar. |
| 0:37 | väntar | ali | Ali här. Såg skylten. Stavningen är rätt. Det är mer än många. |
| 0:38 | röst | ali | Jag ser 3D-skrivarvideor på YouTube i lagret. Inte för att jag har tid. Jag har aldrig tid. · STORY |
| 0:38 | butiksbubbla | ali | Jag ser 3D-skrivarvideor på YouTube i lagret. Inte för att jag har tid. Jag har aldrig tid. |
| 0:40 | aliSalt | ali | 105 |
| 0:40 | butiksbubbla | ali | Precis vad jag ville ha idag. 105 kr – med extra. |
| 0:41 | väntar | ali | Precis det jag ville ha idag, min vän. |
| 0:41 | väntar | foto | Egen säng |
| 0:41 | paket |  | tanke |
| 0:41 | tanke | du | Tänk att jag ska få sova i min egen säng. |
| 0:41 | väntar | du | Tänk att jag ska få sova i min egen säng. |
| 0:42 | sak | ali | Precis det jag ville ha idag, min vän. |
| 0:42 | röst | ali | Precis det jag ville ha idag, min vän. · STORY |
| 0:46 | klar | ali | Precis det jag ville ha idag, min vän. |
| 0:54 | sak |  | (läget ändras) |
| 0:54 | klar |  | (läget ändras) |
| 0:54 | händelse | printStart | sak=kruka |
| 0:56 | toast | fel | Ingen ström – trampa cykeln |
| 0:57 | skratt | du | falsk tuta |
| 0:58 | toast | guld | ✅ |
| 0:58 | händelse | printKlar | sak=kruka n=3 |
| 0:58 | sak | foto | Egen säng |
| 0:58 | foto | du | Egen säng |
| 0:59 | händelse | tagitUrPrint | sak=kruka n=1 |
| 1:00 | klar | foto | Egen säng |
| 1:06 | aliSalt | ali | 105 |
| 1:09 | sak | du | Tänk att jag ska få sova i min egen säng. |
| 1:09 | notis | tanke | 💭 Tänk att jag ska få sova i min egen säng. |
| 1:09 | röst | du | Tänk att jag ska få sova i min egen säng. · STORY |
| 1:12 | klar | du | Tänk att jag ska få sova i min egen säng. |
| 1:12 | väntar | info:guld | 🚛 Sopbilen tippade en ny last på soptippen! |
| 1:12 | lapp | 📔 Dagbok | Sopbilen tippade en ny last. Allt det skräpet – och grinden är låst. |
| 1:12 | meddelande | du | Sopbilen tippade en ny last. Allt det skräpet – och grinden är låst. |
| 1:12 | dagbokkort | du | Sopbilen tippade en ny last. Allt det skräpet – och grinden är låst. |
| 1:12 | röst | du | Dag 2. 20 dagar till jul. Sopbilen tippade en ny last. Allt det skräpet – och grinden är låst. · STORY |
| 1:21 | händelse | brevLast | id=sopbil |
| 1:21 | struken | info:guld | 🚛 Sopbilen tippade en ny last på soptippen! |
| 1:23 | händelse | printStart | sak=kruka |
| 1:25 | toast | guld | ✅ |
| 1:25 | händelse | printKlar | sak=kruka n=4 |
| 1:26 | händelse | tagitUrPrint | sak=kruka n=1 |
| 1:28 | väntar | värld:TUUT! Hej grannen! | TUUT! Hej grannen! |
| 1:28 | sak | värld:TUUT! Hej grannen! | TUUT! Hej grannen! |
| 1:28 | bubbla |  | TUUT! Hej grannen! |
| 1:31 | klar | värld:TUUT! Hej grannen! | TUUT! Hej grannen! |
| 1:33 | aliSalt | ali | 105 |
| 2:00 | händelse | printStart | sak=kruka |
| 2:01 | toast | fel | Ingen ström – trampa cykeln |
| 2:04 | toast | guld | ✅ |
| 2:04 | händelse | printKlar | sak=kruka n=5 |
| 2:05 | händelse | tagitUrPrint | sak=kruka n=1 |
| 2:09 | väntar | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått generator. Vi tar en låt på det. Den här är till dig, Gunnar. |
| 2:09 | radio | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått generator. Vi tar en låt på det. Den här är till dig, Gunnar. |
| 2:09 | skratt | du | Radio-Kjelle |
| 2:09 | sak | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått generator. Vi tar en låt på det. Den här är till dig, Gunnar. |
| 2:09 | notis |  | 📻 Radio Tippen: Radio Tippen, Kjelle här. Skjulet vid tippen har fått generator. Vi tar en låt på det. Den här är till dig, Gunnar. |
| 2:09 | röst | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått generator. Vi tar en låt på det. Den här är till dig, Gunnar. · REAKTION |
| 2:12 | aliSalt | ali | 105 |
| 2:18 | klar | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått generator. Vi tar en låt på det. Den här är till dig, Gunnar. |
| 2:27 | händelse | printStart | sak=kruka |
| 2:30 | toast | guld | ✅ |
| 2:30 | händelse | printKlar | sak=kruka n=6 |
| 2:30 | händelse | tagitUrPrint | sak=kruka n=1 |
| 2:37 | aliSalt | ali | 105 |
| 3:06 | händelse | printStart | sak=kruka |
| 3:08 | toast | fel | Ingen ström – trampa cykeln |
| 3:10 | paket |  | tanke |
| 3:10 | tanke | du | Den blev… spagetti. Ali kallar det modern konst. |
| 3:10 | väntar | du | Den blev… spagetti. Ali kallar det modern konst. |
| 3:10 | skratt | du | plastspagetti |
| 3:10 | toast | guld | ✅ |
| 3:10 | händelse | printKlar | sak=kruka n=7 |
| 3:11 | händelse | tagitUrPrint | sak=spagetti n=1 |
| 3:18 | skratt | du | Ali köper konst |
| 3:18 | aliSalt | ali | 3 |
| 3:23 | skratt | du | falsk tuta |
| 3:23 | väntar | värld:TUUT TUUT! | TUUT TUUT! |
| 3:26 | händelse | printStart | sak=kruka |
| 3:29 | toast | guld | ✅ |
| 3:29 | händelse | printKlar | sak=kruka n=8 |
| 3:29 | händelse | tagitUrPrint | sak=kruka n=1 |
| 3:34 | upplåst | mala | kvarnmotor |
| 3:34 | brott | RESERV | kvarnmotor (mala 18 av 10) |
| 3:34 | händelse | upplast | id=kvarnmotor flask=mala |
| 3:34 | paket |  | sms |
| 3:34 | väntar | ali | Ali här. En motor? Jag har en. Från en gammal tvättmaskin. Den centrifugerar fortfarande om man ber snällt. |
| 3:35 | sak | ali | Ali här. En motor? Jag har en. Från en gammal tvättmaskin. Den centrifugerar fortfarande om man ber snällt. |
| 3:35 | sms | ali | Ali här. En motor? Jag har en. Från en gammal tvättmaskin. Den centrifugerar fortfarande om man ber snällt. |
| 3:35 | sms-bubbla | ali | Ali här. En motor? Jag har en. Från en gammal tvättmaskin. Den centrifugerar fortfarande om man ber snällt. |
| 3:35 | röst | ali | Ali här. En motor? Jag har en. Från en gammal tvättmaskin. Den centrifugerar fortfarande om man ber snällt. · STORY |
| 3:36 | aliSalt | ali | 105 |
| 3:44 | klar | ali | Ali här. En motor? Jag har en. Från en gammal tvättmaskin. Den centrifugerar fortfarande om man ber snällt. |
| 3:46 | struken | värld:TUUT TUUT! | TUUT TUUT! |
| 3:48 | toast | guld | 3D-modell köpt – printa kvarnmotor på skrivaren |
| 3:48 | händelse | kopt | sak=kvarnmotor |
| 3:49 | händelse | malKlart | id=kopMotor del=Dag 2 – Tippen bredvid nasta=monteraMotor |
| 3:49 | struken | kedja | motorKopt |
| 3:49 | väntar | du | Motorn ska sitta där veven sitter. Jag printar den först. |
| 3:49 | målruta |  | Printa kvarnmotorn till kvarnen |
| 3:49 | MÅL |  | Printa kvarnmotorn till kvarnen |
| 3:49 | sak | du | Motorn ska sitta där veven sitter. Jag printar den först. |
| 3:49 | pil |  | Printa kvarnmotorn till kvarnen |
| 3:49 | notis | tanke | 💭 Motorn ska sitta där veven sitter. Jag printar den först. |
| 3:49 | röst | du | Motorn ska sitta där veven sitter. Jag printar den först. · MÅL |
| 3:53 | kvittens-bock |  | ✓ Köp kvarnmotorn hos Ali (50 kr) |
| 3:54 | klar | du | Motorn ska sitta där veven sitter. Jag printar den först. |
| 4:07 | väntar | mamma | Har du frusit än? |
| 4:10 | sak | du | Den blev… spagetti. Ali kallar det modern konst. |
| 4:10 | notis | tanke | 💭 Den blev… spagetti. Ali kallar det modern konst. |
| 4:10 | röst | du | Den blev… spagetti. Ali kallar det modern konst. · REAKTION |
| 4:14 | klar | du | Den blev… spagetti. Ali kallar det modern konst. |
| 4:22 | händelse | printStart | sak=byggsats:kvarnmotor |
| 4:23 | toast | fel | Ingen ström – trampa cykeln |
| 4:25 | händelse | printKlar | sak=byggsats:kvarnmotor n=1 |
| 4:25 | toast | guld | ✅ |
| 4:25 | väntar | info:guld | ⚙️ Kvarnmotorn ligger i handen – klicka på kvarnen för att skruva fast den |
| 4:25 | händelse | tagitUrPrint | sak=byggsats:kvarnmotor n=1 |
| 4:25 | paket |  | sms |
| 4:25 | väntar | ali | Ali här. Ännu en ritning som blev på riktigt: Kvarnmotor. Semesterkassan växer. Livet växer. |
| 4:25 | sak | info:guld | ⚙️ Kvarnmotorn ligger i handen – klicka på kvarnen för att skruva fast den |
| 4:25 | kvitto-visas | info:guld | ⚙️ Kvarnmotorn ligger i handen – klicka på kvarnen för att skruva fast den |
| 4:25 | toast | guld | ⚙️ Kvarnmotorn ligger i handen – klicka på kvarnen för att skruva fast den |
| 4:27 | klar | info:guld | ⚙️ Kvarnmotorn ligger i handen – klicka på kvarnen för att skruva fast den |
| 4:30 | väntar | info:guld | ⚙️ Motorn sitter där veven satt – nu mal kvarnen själv. |
| 4:30 | händelse | monterat | sak=kvarnmotor |
| 4:30 | paket |  | tanke |
| 4:30 | tanke | du | Motorn sitter där veven satt. Mina armar tackar. |
| 4:30 | väntar | du | Motorn sitter där veven satt. Mina armar tackar. |
| 4:30 | monterat | du | byggsats:kvarnmotor |
| 4:30 | händelse | monterat | sak=kvarnmotor |
| 4:30 | sak | info:guld | ⚙️ Motorn sitter där veven satt – nu mal kvarnen själv. |
| 4:30 | kvitto-visas | info:guld | ⚙️ Motorn sitter där veven satt – nu mal kvarnen själv. |
| 4:30 | toast | guld | ⚙️ Motorn sitter där veven satt – nu mal kvarnen själv. |
| 4:30 | händelse | malKlart | id=monteraMotor del=Dag 2 – Tippen bredvid nasta=kopSack |
| 4:30 | struken | du | Motorn sitter där veven satt. Mina armar tackar. |
| 4:30 | väntar | du | Gården är full av skräp. Jag börjar vid skjulet. |
| 4:30 | MÅL |  | Kolla vad som flög ut från sopbilen |
| 4:32 | klar | info:guld | ⚙️ Motorn sitter där veven satt – nu mal kvarnen själv. |
| 4:32 | målruta |  | Kolla vad som flög ut från sopbilen |
| 4:34 | kvittens-bock |  | ✓ Printa kvarnmotorn till kvarnen |
| 4:34 | sak | du | Gården är full av skräp. Jag börjar vid skjulet. |
| 4:34 | pil |  | Kolla vad som flög ut från sopbilen |
| 4:34 | notis | tanke | 💭 Gården är full av skräp. Jag börjar vid skjulet. |
| 4:34 | röst | du | Gården är full av skräp. Jag börjar vid skjulet. · MÅL |
| 4:38 | klar | du | Gården är full av skräp. Jag börjar vid skjulet. |
| 4:43 | paket |  | brev → ge → tanke |
| 4:43 | väntar | rolf | Du sliter ju. Ingen gör så nuförtin. Ta dessa så går dä lättare. / Rolf – ja kör sopbilen å har hand om tippen bredvid. MVH ROLF​ |
| 4:43 | väntar |  | (läget ändras) |
| 4:43 | tanke | du | Rolf… gubben i sopbilen. Han har tippen bredvid. Han verkar schysst. |
| 4:43 | väntar | du | Rolf… gubben i sopbilen. Han har tippen bredvid. Han verkar schysst. |
| 4:43 | sak | rolf | Du sliter ju. Ingen gör så nuförtin. Ta dessa så går dä lättare. / Rolf – ja kör sopbilen å har hand om tippen bredvid. MVH ROLF​ |
| 4:43 | lapp | Lapp från Rolf | Du sliter ju. Ingen gör så nuförtin. Ta dessa så går dä lättare. / Rolf – ja kör sopbilen å har hand om tippen bredvid. MVH ROLF​ |
| 4:43 | röst | rolf | Du sliter ju. Ingen gör så nuförtin. Ta dessa så går dä lättare. / Rolf – ja kör sopbilen å har hand om tippen bredvid. MVH ROLF​ · STORY |
| 4:54 | klar | rolf | Du sliter ju. Ingen gör så nuförtin. Ta dessa så går dä lättare. / Rolf – ja kör sopbilen å har hand om tippen bredvid. MVH ROLF​ |
| 4:55 | väntar | info:guld | 🗑️ Sopsäcken är över axeln! Du bär 10 skräp nu. |
| 4:55 | tog på | du | byggsats:korg |
| 4:55 | händelse | monterat | sak=korg |
| 4:55 | sak | info:guld | 🗑️ Sopsäcken är över axeln! Du bär 10 skräp nu. |
| 4:55 | kvitto-visas | info:guld | 🗑️ Sopsäcken är över axeln! Du bär 10 skräp nu. |
| 4:55 | toast | guld | 🗑️ Sopsäcken är över axeln! Du bär 10 skräp nu. |
| 4:55 | händelse | malKlart | id=kopSack del=Dag 2 – Tippen bredvid nasta=n1-stada-klart-garden |
| 4:55 | händelse | malKlart | id=n1-stada-klart-garden del=Dag 2 – Tippen bredvid nasta=rolf0-brev |
| 4:55 | väntar | du | Gården är STÄDAD. Av mig. Frivilligt. Mamma skulle aldrig tro det. |
| 4:55 | väntar | du | Vänta på sopbilen. Den lämnar något. |
| 4:56 | MÅL |  | Vänta på sopbilen. Den lämnar något. |
| 4:57 | klar | info:guld | 🗑️ Sopsäcken är över axeln! Du bär 10 skräp nu. |
| 4:57 | sak | du | Gården är STÄDAD. Av mig. Frivilligt. Mamma skulle aldrig tro det. |
| 4:57 | kvitto-visas | du | Gården är STÄDAD. Av mig. Frivilligt. Mamma skulle aldrig tro det. |
| 4:57 | lapp | 📔 Dagbok | Gården är STÄDAD. Av mig. Frivilligt. Mamma skulle aldrig tro det. |
| 4:57 | meddelande | du | Gården är STÄDAD. Av mig. Frivilligt. Mamma skulle aldrig tro det. |
| 4:57 | dagbokkort | du | Gården är STÄDAD. Av mig. Frivilligt. Mamma skulle aldrig tro det. |
| 4:58 | röst | du | Dag 2. 20 dagar till jul. Gården är STÄDAD. Av mig. Frivilligt. Mamma skulle aldrig tro det. · STORY |
| 5:06 | händelse | brevLast | id=gard |
| 5:06 | klar | du | Gården är STÄDAD. Av mig. Frivilligt. Mamma skulle aldrig tro det. |
| 5:06 | målruta |  | Vänta på sopbilen. Den lämnar något. |
| 5:06 | sak | du | Vänta på sopbilen. Den lämnar något. |
| 5:06 | pil |  | Vänta på sopbilen. Den lämnar något. |
| 5:06 | röst | du | Vänta på sopbilen. Den lämnar något. · MÅL |
| 5:08 | händelse | printStart | sak=kruka |
| 5:09 | klar | du | Vänta på sopbilen. Den lämnar något. |
| 5:11 | struken | ali | Ali här. Ännu en ritning som blev på riktigt: Kvarnmotor. Semesterkassan växer. Livet växer. |
| 5:11 | sak |  | (läget ändras) |
| 5:11 | toast | guld | ✅ |
| 5:11 | händelse | printKlar | sak=kruka n=9 |
| 5:11 | klar |  | (läget ändras) |
| 5:11 | händelse | tagitUrPrint | sak=kruka n=1 |
| 5:12 | paket |  | tanke |
| 5:12 | tanke | du | Jaha. En kalsong. Använd. |
| 5:12 | väntar | du | Jaha. En kalsong. Använd. |
| 5:12 | skratt | du | kvarnen spottar |
| 5:15 | sak | du | Rolf… gubben i sopbilen. Han har tippen bredvid. Han verkar schysst. |
| 5:15 | notis | tanke | 💭 Rolf… gubben i sopbilen. Han har tippen bredvid. Han verkar schysst. |
| 5:15 | röst | du | Rolf… gubben i sopbilen. Han har tippen bredvid. Han verkar schysst. · STORY |
| 5:19 | aliSalt | ali | 105 |
| 5:21 | klar | du | Rolf… gubben i sopbilen. Han har tippen bredvid. Han verkar schysst. |
| 5:23 | sak | du | Jaha. En kalsong. Använd. |
| 5:23 | notis | tanke | 💭 Jaha. En kalsong. Använd. |
| 5:23 | röst | du | Jaha. En kalsong. Använd. · REAKTION |
| 5:25 | klar | du | Jaha. En kalsong. Använd. |
| 5:33 | upplåst | skrivare | rullstall |
| 5:33 | brott | UPPLÅST | rullstall (skrivare 129 av 75) |
| 5:33 | händelse | upplast | id=rullstall flask=skrivare |
| 5:33 | paket |  | tanke → sms |
| 5:33 | tanke | du | Kvarnen står och väntar för att hållaren är full. Om den rymde fler rullar kunde den mala hela tiden. |
| 5:33 | väntar | du | Kvarnen står och väntar för att hållaren är full. Om den rymde fler rullar kunde den mala hela tiden. |
| 5:33 | väntar | ali | Ali här. Rullställ. Fyra rullar i stället för en. Har ett på hyllan. |
| 5:34 | händelse | printStart | sak=kruka |
| 5:35 | toast | fel | Ingen ström – trampa cykeln |
| 5:38 | toast | guld | ✅ |
| 5:38 | händelse | printKlar | sak=kruka n=10 |
| 5:38 | händelse | tagitUrPrint | sak=kruka n=1 |
| 5:45 | sak | ali | Ali här. Rullställ. Fyra rullar i stället för en. Har ett på hyllan. |
| 5:45 | sms | ali | Ali här. Rullställ. Fyra rullar i stället för en. Har ett på hyllan. |
| 5:45 | sms-bubbla | ali | Ali här. Rullställ. Fyra rullar i stället för en. Har ett på hyllan. |
| 5:45 | röst | ali | Ali här. Rullställ. Fyra rullar i stället för en. Har ett på hyllan. · STORY |
| 5:46 | aliSalt | ali | 105 |
| 5:50 | klar | ali | Ali här. Rullställ. Fyra rullar i stället för en. Har ett på hyllan. |
| 5:59 | händelse | printStart | sak=kruka |
| 6:02 | toast | guld | ✅ |
| 6:02 | händelse | printKlar | sak=kruka n=11 |
| 6:02 | händelse | tagitUrPrint | sak=kruka n=1 |
| 6:10 | aliSalt | ali | 105 |
| 6:20 | händelse | printStart | sak=kruka |
| 6:24 | toast | guld | ✅ |
| 6:24 | händelse | printKlar | sak=kruka n=12 |
| 6:30 | skratt | du | falsk tuta |
| 6:35 | sak | du | Kvarnen står och väntar för att hållaren är full. Om den rymde fler rullar kunde den mala hela tiden. |
| 6:35 | notis | tanke | 💭 Kvarnen står och väntar för att hållaren är full. Om den rymde fler rullar kunde den mala hela tiden. |
| 6:35 | röst | du | Kvarnen står och väntar för att hållaren är full. Om den rymde fler rullar kunde den mala hela tiden. · STORY |
| 6:38 | paket |  | tanke → ge |
| 6:38 | tanke | du | Flaggan är uppe. Rolf har lämnat något. |
| 6:38 | väntar | du | Flaggan är uppe. Rolf har lämnat något. |
| 6:38 | väntar |  | (läget ändras) |
| 6:44 | klar | du | Kvarnen står och väntar för att hållaren är full. Om den rymde fler rullar kunde den mala hela tiden. |
| 6:44 | scenInfo | gard | Lite skräp ramlade av flaket på gården |
| 6:44 | skratt | du | däcket rullar iväg |
| 6:46 | sak | du | Flaggan är uppe. Rolf har lämnat något. |
| 6:46 | notis | tanke | 💭 Flaggan är uppe. Rolf har lämnat något. |
| 6:46 | röst | du | Flaggan är uppe. Rolf har lämnat något. · STORY |
| 6:49 | klar | du | Flaggan är uppe. Rolf har lämnat något. |
| 6:51 | sak |  | (läget ändras) |
| 6:51 | brev | rolf | rolf:0 |
| 6:51 | klar |  | (läget ändras) |
| 6:51 | struken | ali | Ali här. Såg skylten. Stavningen är rätt. Det är mer än många. |
| 6:51 | skratt | du | falsk tuta |
| 6:53 | händelse | tagitUrPrint | sak=kruka n=1 |
| 7:01 | aliSalt | ali | 105 |
| 7:11 | väntar | rolf | Såg att du printar grejer. Kan du göra en sån hä? Kall öl ä viktigt. /Rolf​ |
| 7:11 | paket |  | ge |
| 7:11 | väntar |  | (läget ändras) |
| 7:11 | sak | rolf | Såg att du printar grejer. Kan du göra en sån hä? Kall öl ä viktigt. /Rolf​ |
| 7:11 | lapp | Brev från Rolf | Såg att du printar grejer. Kan du göra en sån hä? Kall öl ä viktigt. /Rolf​ |
| 7:11 | röst | rolf | Såg att du printar grejer. Kan du göra en sån hä? Kall öl ä viktigt. /Rolf​ · STORY |
| 7:11 | händelse | malKlart | id=rolf0-brev del=Dag 2 – Tippen bredvid nasta=rolf0-printa |
| 7:11 | väntar | du | Printa ölhållare med kylklamp. |
| 7:11 | MÅL |  | Printa ölhållare med kylklamp |
| 7:14 | målruta |  | Printa ölhållare med kylklamp |
| 7:15 | händelse | printStart | sak=olhallare |
| 7:15 | händelse | malKlart | id=rolf0-printa del=Dag 2 – Tippen bredvid nasta=rolf0-ge |
| 7:15 | väntar | du | Ge Rolf ölhållare med kylklamp. |
| 7:15 | MÅL |  | Ge Rolf ölhållare med kylklamp |
| 7:17 | klar | rolf | Såg att du printar grejer. Kan du göra en sån hä? Kall öl ä viktigt. /Rolf​ |
| 7:17 | händelse | brevLast | id=rolf:0 |
| 7:18 | toast | guld | ✅ |
| 7:18 | händelse | printKlar | sak=olhallare n=1 |
| 7:18 | händelse | tagitUrPrint | sak=olhallare n=1 |
| 7:18 | målruta |  | Ge Rolf ölhållare med kylklamp |
| 7:19 | kvittens-bock |  | ✓ Printa ölhållare med kylklamp |
| 7:19 | struken | du | Printa ölhållare med kylklamp. |
| 7:19 | sak |  | (läget ändras) |
| 7:19 | klar |  | (läget ändras) |
| 7:19 | sak | du | Ge Rolf ölhållare med kylklamp. |
| 7:19 | pil |  | Ge Rolf ölhållare med kylklamp |
| 7:19 | röst | du | Ge Rolf ölhållare med kylklamp. · MÅL |
| 7:22 | klar | du | Ge Rolf ölhållare med kylklamp. |
| 7:25 | händelse | lagtIPostlada | sak=olhallare rolf=0 jobb=false |
| 7:25 | struken | kedja | rolf0 |
| 7:25 | paket |  | tanke |
| 7:25 | tanke | du | Flaggan uppe. Nu får Rolf hämta den. |
| 7:25 | väntar | du | Flaggan uppe. Nu får Rolf hämta den. |
| 7:25 | sak | du | Flaggan uppe. Nu får Rolf hämta den. |
| 7:25 | notis | tanke | 💭 Flaggan uppe. Nu får Rolf hämta den. |
| 7:25 | röst | du | Flaggan uppe. Nu får Rolf hämta den. · REAKTION |
| 7:25 | händelse | malKlart | id=rolf0-ge del=Dag 2 – Tippen bredvid nasta=vindsnurra |
| 7:25 | väntar | du | En vindsnurra på skjulets tak. Då blir det ström när det blåser. |
| 7:26 | MÅL |  | Trampa, printa och sälj |
| 7:28 | klar | du | Flaggan uppe. Nu får Rolf hämta den. |
| 7:28 | målruta |  | Trampa, printa och sälj |
| 7:29 | kvittens-bock |  | ✓ Ge Rolf ölhållare med kylklamp |
| 7:30 | upplåst | skrivare | trim_skrivare |
| 7:30 | brott | UPPLÅST | trim_skrivare (skrivare 75 av 75) |
| 7:30 | händelse | upplast | id=trim_skrivare flask=skrivare |
| 7:30 | paket |  | sms |
| 7:30 | väntar | ali | Ali här. Skrivartrim. Jag skruvade på min egen skrivare i natt. Den går fortare nu. Nästan för fort. |
| 7:31 | sak | du | En vindsnurra på skjulets tak. Då blir det ström när det blåser. |
| 7:31 | pil |  | Trampa, printa och sälj |
| 7:31 | notis | tanke | 💭 En vindsnurra på skjulets tak. Då blir det ström när det blåser. |
| 7:31 | röst | du | En vindsnurra på skjulets tak. Då blir det ström när det blåser. · MÅL |
| 7:34 | händelse | printStart | sak=kruka |
| 7:34 | toast | fel | Ingen ström – trampa cykeln |
| 7:34 | väntar | notis:Storebrors skrivare: Ingen ström – tramp | Storebrors skrivare: Ingen ström – trampa cykeln |
| 7:37 | klar | du | En vindsnurra på skjulets tak. Då blir det ström när det blåser. |
| 7:37 | toast | guld | ✅ |
| 7:37 | händelse | printKlar | sak=kruka n=13 |
| 7:37 | händelse | tagitUrPrint | sak=kruka n=1 |
| 7:44 | röst | ali | Rolf gav mig en kanna. Som min farmors. Jag ritade en sak åt honom. Säg inget, han gråter lätt. · STORY |
| 7:44 | butiksbubbla | ali | Rolf gav mig en kanna. Som min farmors. Jag ritade en sak åt honom. Säg inget, han gråter lätt. |
| 7:45 | aliSalt | ali | 105 |
| 7:55 | händelse | printStart | sak=kruka |
| 7:58 | sak | ali | Ali här. Skrivartrim. Jag skruvade på min egen skrivare i natt. Den går fortare nu. Nästan för fort. |
| 7:58 | sms | ali | Ali här. Skrivartrim. Jag skruvade på min egen skrivare i natt. Den går fortare nu. Nästan för fort. |
| 7:58 | sms-bubbla | ali | Ali här. Skrivartrim. Jag skruvade på min egen skrivare i natt. Den går fortare nu. Nästan för fort. |
| 7:58 | röst | ali | Ali här. Skrivartrim. Jag skruvade på min egen skrivare i natt. Den går fortare nu. Nästan för fort. · STORY |
| 7:59 | toast | guld | ✅ |
| 7:59 | händelse | printKlar | sak=kruka n=14 |
| 7:59 | händelse | tagitUrPrint | sak=kruka n=1 |
| 8:06 | klar | ali | Ali här. Skrivartrim. Jag skruvade på min egen skrivare i natt. Den går fortare nu. Nästan för fort. |
| 8:07 | aliSalt | ali | 105 |
| 8:14 | sak | notis:Storebrors skrivare: Ingen ström – tramp | Storebrors skrivare: Ingen ström – trampa cykeln |
| 8:14 | notis | fel | Storebrors skrivare: Ingen ström – trampa cykeln |
| 8:16 | händelse | printStart | sak=kruka |
| 8:17 | klar | notis:Storebrors skrivare: Ingen ström – tramp | Storebrors skrivare: Ingen ström – trampa cykeln |
| 8:19 | toast | guld | ✅ |
| 8:19 | händelse | printKlar | sak=kruka n=15 |
| 8:19 | händelse | tagitUrPrint | sak=kruka n=1 |
| 8:27 | aliSalt | ali | 105 |
| 8:36 | händelse | printStart | sak=kruka |
| 8:38 | toast | fel | Ingen ström – trampa cykeln |
| 8:39 | toast | guld | ✅ |
| 8:39 | händelse | printKlar | sak=kruka n=16 |
| 8:40 | händelse | tagitUrPrint | sak=kruka n=1 |
| 8:41 | paket |  | tanke |
| 8:41 | tanke | du | Jaha, Rolf har hämtat ölhållare med kylklamp. |
| 8:41 | väntar | du | Jaha, Rolf har hämtat ölhållare med kylklamp. |
| 8:42 | sak | du | Jaha, Rolf har hämtat ölhållare med kylklamp. |
| 8:42 | notis | tanke | 💭 Jaha, Rolf har hämtat ölhållare med kylklamp. |
| 8:42 | röst | du | Jaha, Rolf har hämtat ölhållare med kylklamp. · REAKTION |
| 8:45 | klar | du | Jaha, Rolf har hämtat ölhållare med kylklamp. |
| 8:48 | aliSalt | ali | 105 |
| 8:57 | händelse | printStart | sak=kruka |
| 9:00 | toast | guld | ✅ |
| 9:00 | händelse | printKlar | sak=kruka n=17 |
| 9:00 | händelse | tagitUrPrint | sak=kruka n=1 |
| 9:04 | väntar | värld:TUUT! Tjena! | TUUT! Tjena! |
| 9:04 | sak | värld:TUUT! Tjena! | TUUT! Tjena! |
| 9:04 | bubbla |  | TUUT! Tjena! |
| 9:07 | klar | värld:TUUT! Tjena! | TUUT! Tjena! |
| 9:08 | aliSalt | ali | 105 |
| 9:17 | händelse | printStart | sak=kruka |
| 9:19 | upplåst | trampa | vindsnurra |
| 9:19 | brott | UPPLÅST | vindsnurra (trampa 33 av 10) |
| 9:19 | händelse | upplast | id=vindsnurra flask=trampa |
| 9:19 | paket |  | tanke → sms |
| 9:19 | tanke | du | Mina ben är slut. Det blåser hela tiden här ute. Tänk om vinden kunde trampa åt mig. |
| 9:19 | väntar | du | Mina ben är slut. Det blåser hela tiden här ute. Tänk om vinden kunde trampa åt mig. |
| 9:19 | väntar | ali | Ali här. Vindsnurra till cykeln. Vinden trampar åt dig. Den är lat, men den jobbar gratis. |
| 9:21 | toast | guld | ✅ |
| 9:21 | händelse | printKlar | sak=kruka n=18 |
| 9:21 | sak | du | Mina ben är slut. Det blåser hela tiden här ute. Tänk om vinden kunde trampa åt mig. |
| 9:21 | notis | tanke | 💭 Mina ben är slut. Det blåser hela tiden här ute. Tänk om vinden kunde trampa åt mig. |
| 9:21 | röst | du | Mina ben är slut. Det blåser hela tiden här ute. Tänk om vinden kunde trampa åt mig. · STORY |
| 9:22 | händelse | tagitUrPrint | sak=kruka n=1 |
| 9:28 | klar | du | Mina ben är slut. Det blåser hela tiden här ute. Tänk om vinden kunde trampa åt mig. |
| 9:29 | aliSalt | ali | 105 |
| 9:33 | toast | guld | 3D-modell köpt – printa vindsnurra till skjultaket på skrivaren |
| 9:33 | händelse | kopt | sak=vindsnurra |
| 9:33 | struken | ali | Ali här. Vindsnurra till cykeln. Vinden trampar åt dig. Den är lat, men den jobbar gratis. |
| 9:42 | händelse | printStart | sak=byggsats:vindsnurra |
| 9:45 | händelse | printKlar | sak=byggsats:vindsnurra n=1 |
| 9:45 | toast | guld | ✅ |
| 10:07 | struken | mamma | Har du frusit än? |
| 10:12 | väntar | info:guld | 🌬️ Vindsnurran ligger i handen – klicka på skjulet för att sätta den på taket |
| 10:12 | händelse | tagitUrPrint | sak=byggsats:vindsnurra n=1 |
| 10:12 | sak | info:guld | 🌬️ Vindsnurran ligger i handen – klicka på skjulet för att sätta den på taket |
| 10:12 | kvitto-visas | info:guld | 🌬️ Vindsnurran ligger i handen – klicka på skjulet för att sätta den på taket |
| 10:12 | toast | guld | 🌬️ Vindsnurran ligger i handen – klicka på skjulet för att sätta den på taket |
| 10:14 | klar | info:guld | 🌬️ Vindsnurran ligger i handen – klicka på skjulet för att sätta den på taket |
| 10:20 | händelse | placerat | sak=vindsnurra |
| 10:20 | kvittens | du | Den snurrar! Långsamt. Men den snurrar. |
| 10:20 | varför | du | Om det regnar i natt drunknar jag. Ett tak. |
| 10:20 | väntar | du | Den snurrar! Långsamt. Men den snurrar. |
| 10:20 | väntar | info:guld | 🌬️ Vindsnurran sitter på taket – den trampar cykeln åt dig när det blåser |
| 10:20 | monterat | du | byggsats:vindsnurra |
| 10:20 | händelse | monterat | sak=vindsnurra |
| 10:20 | sak | du | Den snurrar! Långsamt. Men den snurrar. |
| 10:20 | notis | tanke | 💭 Den snurrar! Långsamt. Men den snurrar. |
| 10:20 | röst | du | Den snurrar! Långsamt. Men den snurrar. · STORY |
| 10:20 | händelse | malKlart | id=vindsnurra del=Dag 2 – Tippen bredvid nasta=n1-bygg-dorr-skjulet |
| 10:20 | väntar | du | Det drar från dörrhålet. En dörr kan jag printa. |
| 10:21 | MÅL |  | Bygg en dörr till skjulet |
| 10:24 | klar | du | Den snurrar! Långsamt. Men den snurrar. |
| 10:24 | sak | info:guld | 🌬️ Vindsnurran sitter på taket – den trampar cykeln åt dig när det blåser |
| 10:24 | kvitto-visas | info:guld | 🌬️ Vindsnurran sitter på taket – den trampar cykeln åt dig när det blåser |
| 10:24 | toast | guld | 🌬️ Vindsnurran sitter på taket – den trampar cykeln åt dig när det blåser |
| 10:24 | målruta |  | Bygg en dörr till skjulet |
| 10:26 | klar | info:guld | 🌬️ Vindsnurran sitter på taket – den trampar cykeln åt dig när det blåser |
| 10:28 | sak | du | Det drar från dörrhålet. En dörr kan jag printa. |
| 10:28 | pil |  | Bygg en dörr till skjulet |
| 10:28 | notis | tanke | 💭 Det drar från dörrhålet. En dörr kan jag printa. |
| 10:28 | röst | du | Det drar från dörrhålet. En dörr kan jag printa. · MÅL |
| 10:28 | nick |  | nick:29 |
| 10:32 | klar | du | Det drar från dörrhålet. En dörr kan jag printa. |
| 10:37 | skratt | du | falsk tuta |
| 10:39 | toast | guld | 3D-modell köpt – printa dörr på skrivaren |
| 10:39 | händelse | kopt | sak=dorr |
| 10:48 | händelse | printStart | sak=byggsats:dorr |
| 10:52 | toast | bra | Del 1 av 2 klar |
| 10:52 | väntar | notis:Storebrors skrivare: Del 1 av 2 klar | Storebrors skrivare: Del 1 av 2 klar |
| 10:52 | sak | notis:Storebrors skrivare: Del 1 av 2 klar | Storebrors skrivare: Del 1 av 2 klar |
| 10:52 | notis | bra | Storebrors skrivare: Del 1 av 2 klar |
| 10:52 | scenInfo | gard | Lite skräp ramlade av flaket på gården |
| 10:54 | klar | notis:Storebrors skrivare: Del 1 av 2 klar | Storebrors skrivare: Del 1 av 2 klar |
| 10:55 | händelse | printKlar | sak=byggsats:dorr n=1 |
| 10:55 | toast | guld | ✅ |
| 10:56 | händelse | tagitUrPrint | sak=byggsats:dorr n=1 |
| 10:56 | paket |  | sms |
| 10:56 | väntar | ali | Ali här. Jag har inte sovit. Inte på grund av AI:n. På grund av dig. Du bygger saker av sopor. Jag har en hel butik och bygger ingenting. Det ska ändras. Kanske. Troligen. |
| 11:00 | väntar | info:guld | Dörr på plats! Trivsel +8 · Ali betalar nu +0 % |
| 11:00 | sak | info:guld | Dörr på plats! Trivsel +8 · Ali betalar nu +0 % |
| 11:00 | kvitto-visas | info:guld | Dörr på plats! Trivsel +8 · Ali betalar nu +0 % |
| 11:00 | toast | guld | Dörr på plats! Trivsel +8 · Ali betalar nu +0 % |
| 11:00 | händelse | malKlart | id=n1-bygg-dorr-skjulet del=Dag 2 – Tippen bredvid nasta=sov2 |
| 11:00 | paket |  | lapp |
| 11:00 | väntar | du | Dag 2 är slut. Nu vet Ali att jag bor HÄR. Taket läcker. I morgon. |
| 11:00 | paket |  | sms |
| 11:00 | väntar | bror | Mamma ringde mig fyra gånger förresten. Snyggt jobbat 😂 |
| 11:00 | skratt | bror | Mamma ringde mig fyra gånger förresten. |
| 11:00 | väntar | du | Klart för idag – sov när du vill. |
| 11:01 | MÅL |  | Klart för idag – sov när du vill |
| 11:02 | klar | info:guld | Dörr på plats! Trivsel +8 · Ali betalar nu +0 % |
| 11:04 | målruta |  | Klart för idag – sov när du vill |
| 11:04 | kvittens-bock |  | ✓ Bygg en dörr till skjulet |
| 11:04 | sak | du | Klart för idag – sov när du vill. |
| 11:04 | pil |  | Klart för idag – sov när du vill |
| 11:04 | röst | du | Klart för idag – sov när du vill. · MÅL |
| 11:07 | klar | du | Klart för idag – sov när du vill. |
| 11:08 | väntar | notis:🌇 Klockan är 21. Ali slår igen luckan.  | 🌇 Klockan är 21. Ali slår igen luckan. Dagens jobb är klart – gå in i skjulet och sov i sängen. |
| 11:09 | sak | du | Dag 2 är slut. Nu vet Ali att jag bor HÄR. Taket läcker. I morgon. |
| 11:09 | lapp | 📔 Dagbok | Dag 2 är slut. Nu vet Ali att jag bor HÄR. Taket läcker. I morgon. |
| 11:09 | meddelande | du | Dag 2 är slut. Nu vet Ali att jag bor HÄR. Taket läcker. I morgon. |
| 11:09 | dagbokkort | du | Dag 2 är slut. Nu vet Ali att jag bor HÄR. Taket läcker. I morgon. |
| 11:09 | röst | du | Dag 2. 20 dagar till jul. Dag 2 är slut. Nu vet Ali att jag bor HÄR. Taket läcker. I morgon. · STORY |
| 11:18 | händelse | brevLast | id=kvall2 |
| 11:18 | klar | du | Dag 2 är slut. Nu vet Ali att jag bor HÄR. Taket läcker. I morgon. |
| 11:20 | struken | notis:🌇 Klockan är 21. Ali slår igen luckan.  | 🌇 Klockan är 21. Ali slår igen luckan. Dagens jobb är klart – gå in i skjulet och sov i sängen. |
| 11:23 | nattkort | du | 🌙 Dag 2 är slut. God natt. zzz… DAGENS PRINTAR Blomkruka × 17 Ölhållare med kylklamp × 1 Totalt 18 printar 💰 Tjänat i dag +1 683 kr |

<details><summary>Botens handlingar dag 2</summary>

- 0:00 — dag 2 börjar — (255 kr)
- 0:08 popup: "FORTSÄTT" (255 kr)
- 0:16 popup: "FORTSÄTT" (255 kr)
- 0:24 tjänar pengar till väntar på flaskhalsen för kvarnmotor: 255/295 kr → printar blomkruka (105 kr) (255 kr)
- 0:28 gå till skrivaren (19 m) (255 kr)
- 0:30 printar Blomkruka (255 kr)
- 0:33 tar ut 1 st ur skrivaren (255 kr)
- 0:38 gå till Ali (26 m) (255 kr)
- 0:38 öppnar Alis butik – sälja (255 kr)
- 0:40 säljer hos Ali: +105 kr (360 kr)
- 0:48 tjänar pengar till väntar på flaskhalsen för kvarnmotor: 360/400 kr → printar blomkruka (105 kr) (360 kr)
- 0:53 gå till skrivaren (25 m) (360 kr)
- 0:54 printar Blomkruka (360 kr)
- 0:56 gå till cykeln (1 m) (360 kr)
- 0:59 tar ut 1 st ur skrivaren (360 kr)
- 1:04 gå till Ali (25 m) (360 kr)
- 1:04 öppnar Alis butik – sälja (360 kr)
- 1:06 säljer hos Ali: +105 kr (465 kr)
- 1:08 tjänar pengar till väntar på flaskhalsen för kvarnmotor: 465/505 kr → printar blomkruka (105 kr) (465 kr)
- 1:21 popup: "FORTSÄTT" (465 kr)
- 1:21 gå till skrivaren (25 m) (465 kr)
- 1:23 printar Blomkruka (465 kr)
- 1:26 tar ut 1 st ur skrivaren (465 kr)
- 1:31 gå till Ali (25 m) (465 kr)
- 1:31 öppnar Alis butik – sälja (465 kr)
- 1:33 säljer hos Ali: +105 kr (570 kr)
- 1:35 tjänar pengar till väntar på flaskhalsen för kvarnmotor: 570/610 kr → printar blomkruka (105 kr) (570 kr)
- 1:47 plockar 6 skräp på gården (bär max 6) (570 kr)
- 1:54 gå till kvarnen (33 m) (570 kr)
- 1:59 gå till skrivaren (1 m) (570 kr)
- 2:00 printar Blomkruka (570 kr)
- 2:02 gå till cykeln (2 m) (570 kr)
- 2:05 tar ut 1 st ur skrivaren (570 kr)
- 2:11 gå till Ali (26 m) (570 kr)
- 2:11 öppnar Alis butik – sälja (570 kr)
- 2:12 säljer hos Ali: +105 kr (675 kr)
- 2:20 tjänar pengar till väntar på flaskhalsen för kvarnmotor: 675/715 kr → printar blomkruka (105 kr) (675 kr)
- 2:26 gå till skrivaren (25 m) (675 kr)
- 2:27 printar Blomkruka (675 kr)
- 2:31 tar ut 1 st ur skrivaren (675 kr)
- 2:36 gå till Ali (25 m) (675 kr)
- 2:36 öppnar Alis butik – sälja (675 kr)
- 2:38 säljer hos Ali: +105 kr (780 kr)
- 2:39 tjänar pengar till väntar på flaskhalsen för kvarnmotor: 780/820 kr → printar blomkruka (105 kr) (780 kr)
- 2:54 plockar 6 skräp på gården (bär max 6) (780 kr)
- 3:00 gå till kvarnen (30 m) (780 kr)
- 3:05 gå till skrivaren (2 m) (780 kr)
- 3:06 printar Blomkruka (780 kr)
- 3:08 gå till cykeln (2 m) (780 kr)
- 3:11 tar ut 1 st ur skrivaren (780 kr)
- 3:17 gå till Ali (26 m) (780 kr)
- 3:17 öppnar Alis butik – sälja (780 kr)
- 3:19 säljer hos Ali: +3 kr (783 kr)
- 3:19 tjänar pengar till väntar på flaskhalsen för kvarnmotor: 783/820 kr → printar blomkruka (105 kr) (783 kr)
- 3:25 gå till skrivaren (25 m) (783 kr)
- 3:26 printar Blomkruka (783 kr)
- 3:30 tar ut 1 st ur skrivaren (783 kr)
- 3:35 gå till Ali (25 m) (783 kr)
- 3:35 öppnar Alis butik – sälja (783 kr)
- 3:37 säljer hos Ali: +105 kr (888 kr)
- 3:46 öppnar Alis butik – köpa kvarnmotor (888 kr)
- 3:49 köper kvarnmotor för 50 kr (838 kr)
- 4:09 plockar 4 skräp på gården (bär max 6) (838 kr)
- 4:16 gå till kvarnen (36 m) (838 kr)
- 4:20 gå till skrivaren (2 m) (838 kr)
- 4:22 printar Kvarnmotor (838 kr)
- 4:23 gå till cykeln (2 m) (838 kr)
- 4:26 tar ut 1 st ur skrivaren (838 kr)
- 4:30 gå till skruva fast kvarnmotorn (2 m) (838 kr)
- 4:43 gå till Rolfs sopsäck (16 m) (838 kr)
- 4:55 tar på korg (838 kr)
- 4:56 tjänar pengar till väntar på sopbilen (BO): 838/898 kr → printar blomkruka (105 kr) (838 kr)
- 5:06 popup: "FORTSÄTT" (838 kr)
- 5:07 gå till skrivaren (12 m) (838 kr)
- 5:08 printar Blomkruka (838 kr)
- 5:12 tar ut 1 st ur skrivaren (838 kr)
- 5:17 gå till Ali (26 m) (838 kr)
- 5:17 öppnar Alis butik – sälja (838 kr)
- 5:19 säljer hos Ali: +105 kr (943 kr)
- 5:28 tjänar pengar till väntar på sopbilen (BO): 943/1003 kr → printar blomkruka (105 kr) (943 kr)
- 5:33 gå till skrivaren (25 m) (943 kr)
- 5:34 printar Blomkruka (943 kr)
- 5:35 gå till cykeln (1 m) (943 kr)
- 5:39 tar ut 1 st ur skrivaren (943 kr)
- 5:44 gå till Ali (25 m) (943 kr)
- 5:44 öppnar Alis butik – sälja (943 kr)
- 5:46 säljer hos Ali: +105 kr (1048 kr)
- 5:52 tjänar pengar till väntar på sopbilen (BO): 1048/1108 kr → printar blomkruka (105 kr) (1048 kr)
- 5:58 gå till skrivaren (25 m) (1048 kr)
- 5:59 printar Blomkruka (1048 kr)
- 6:03 tar ut 1 st ur skrivaren (1048 kr)
- 6:08 gå till Ali (25 m) (1048 kr)
- 6:08 öppnar Alis butik – sälja (1048 kr)
- 6:10 säljer hos Ali: +105 kr (1153 kr)
- 6:13 tjänar pengar till väntar på sopbilen (BO): 1153/1213 kr → printar blomkruka (105 kr) (1153 kr)
- 6:19 gå till skrivaren (25 m) (1153 kr)
- 6:20 printar Blomkruka (1153 kr)
- 6:21 gå till cykeln (1 m) (1153 kr)
- 6:43 plockar 7 skräp på gården (bär max 10) (1153 kr)
- 6:52 gå till kvarnen (42 m) (1153 kr)
- 6:53 gå till skrivaren (1 m) (1153 kr)
- 6:53 tar ut 1 st ur skrivaren (1153 kr)
- 6:59 gå till Ali (28 m) (1153 kr)
- 6:59 öppnar Alis butik – sälja (1153 kr)
- 7:01 säljer hos Ali: +105 kr (1258 kr)
- 7:11 gå till Rolfs postlåda (31 m) (1258 kr)
- 7:13 gå till skrivaren (7 m) (1258 kr)
- 7:15 printar Ölhållare med kylklamp (1258 kr)
- 7:18 tar ut 1 st ur skrivaren (1258 kr)
- 7:24 valj olhallare: true, vald olhallare, post {"l":null,"tr":null,"tm":[]}, nummer false (1258 kr)
- 7:25 gå till Rolfs postlåda (6 m) (1258 kr)
- 7:31 tjänar pengar till väntar på flaskhalsen för vindsnurra: 1258/1298 kr → printar blomkruka (105 kr) (1258 kr)
- 7:32 gå till skrivaren (6 m) (1258 kr)
- 7:34 printar Blomkruka (1258 kr)
- 7:34 gå till cykeln (1 m) (1258 kr)
- 7:38 tar ut 1 st ur skrivaren (1258 kr)
- 7:44 gå till Ali (27 m) (1258 kr)
- 7:44 öppnar Alis butik – sälja (1258 kr)
- 7:45 säljer hos Ali: +105 kr (1363 kr)
- 7:48 tjänar pengar till väntar på flaskhalsen för vindsnurra: 1363/1403 kr → printar blomkruka (105 kr) (1363 kr)
- 7:53 gå till skrivaren (25 m) (1363 kr)
- 7:55 printar Blomkruka (1363 kr)
- 7:58 gå till cykeln (1 m) (1363 kr)
- 8:00 tar ut 1 st ur skrivaren (1363 kr)
- 8:05 gå till Ali (25 m) (1363 kr)
- 8:05 öppnar Alis butik – sälja (1363 kr)
- 8:07 säljer hos Ali: +105 kr (1468 kr)
- 8:09 tjänar pengar till väntar på flaskhalsen för vindsnurra: 1468/1508 kr → printar blomkruka (105 kr) (1468 kr)
- 8:14 gå till skrivaren (25 m) (1468 kr)
- 8:16 printar Blomkruka (1468 kr)
- 8:20 tar ut 1 st ur skrivaren (1468 kr)
- 8:25 gå till Ali (25 m) (1468 kr)
- 8:25 öppnar Alis butik – sälja (1468 kr)
- 8:27 säljer hos Ali: +105 kr (1573 kr)
- 8:29 tjänar pengar till väntar på flaskhalsen för vindsnurra: 1573/1613 kr → printar blomkruka (105 kr) (1573 kr)
- 8:34 gå till skrivaren (25 m) (1573 kr)
- 8:36 printar Blomkruka (1573 kr)
- 8:38 gå till cykeln (1 m) (1573 kr)
- 8:41 tar ut 1 st ur skrivaren (1573 kr)
- 8:46 gå till Ali (25 m) (1573 kr)
- 8:46 öppnar Alis butik – sälja (1573 kr)
- 8:48 säljer hos Ali: +105 kr (1678 kr)
- 8:50 tjänar pengar till väntar på flaskhalsen för vindsnurra: 1678/1718 kr → printar blomkruka (105 kr) (1678 kr)
- 8:55 gå till skrivaren (25 m) (1678 kr)
- 8:57 printar Blomkruka (1678 kr)
- 9:01 tar ut 1 st ur skrivaren (1678 kr)
- 9:06 gå till Ali (25 m) (1678 kr)
- 9:06 öppnar Alis butik – sälja (1678 kr)
- 9:08 säljer hos Ali: +105 kr (1783 kr)
- 9:10 tjänar pengar till väntar på flaskhalsen för vindsnurra: 1783/1823 kr → printar blomkruka (105 kr) (1783 kr)
- 9:15 gå till skrivaren (25 m) (1783 kr)
- 9:17 printar Blomkruka (1783 kr)
- 9:19 gå till cykeln (1 m) (1783 kr)
- 9:22 tar ut 1 st ur skrivaren (1783 kr)
- 9:27 gå till Ali (25 m) (1783 kr)
- 9:27 öppnar Alis butik – sälja (1783 kr)
- 9:29 säljer hos Ali: +105 kr (1888 kr)
- 9:31 öppnar Alis butik – köpa vindsnurra till skjultaket (1888 kr)
- 9:34 köper vindsnurra för 133 kr (1755 kr)
- 9:40 gå till skrivaren (25 m) (1755 kr)
- 9:42 printar Vindsnurra till skjultaket (1755 kr)
- 10:07 plockar 8 skräp på gården (bär max 10) (1755 kr)
- 10:11 gå till kvarnen (19 m) (1755 kr)
- 10:12 gå till skrivaren (1 m) (1755 kr)
- 10:12 tar ut 1 st ur skrivaren (1755 kr)
- 10:20 gå till sätt vindsnurran på taket (22 m) (1755 kr)
- 10:38 gå till Ali (20 m) (1755 kr)
- 10:38 öppnar Alis butik – köpa dörr (1755 kr)
- 10:40 köper dorr för 120 kr (1635 kr)
- 10:47 gå till skrivaren (25 m) (1635 kr)
- 10:48 printar Dörr (2 delar) (1635 kr)
- 10:56 tar ut 1 st ur skrivaren (1635 kr)
- 11:00 gå till skjulet (19 m) (1635 kr)
- 11:18 popup: "FORTSÄTT" (1635 kr)
- 11:20 gå till sängen (1 m) (1635 kr)

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
| 0:09 | målruta |  | Vänta på sopbilen. Den lämnar något. |
| 0:09 | väntar | notis:Ali vill ha idag · Blomkruka · +50 % | Ali vill ha idag · Blomkruka · +50 % |
| 0:14 | sak | du | (nytt mål i rutan) |
| 0:14 | pil |  | Vänta på sopbilen. Den lämnar något. |
| 0:14 | klar | du | (nytt mål i rutan) |
| 0:16 | sak | notis:Ali vill ha idag · Blomkruka · +50 % | Ali vill ha idag · Blomkruka · +50 % |
| 0:16 | notis |  | Ali vill ha idag · Blomkruka · +50 % |
| 0:18 | klar | notis:Ali vill ha idag · Blomkruka · +50 % | Ali vill ha idag · Blomkruka · +50 % |
| 0:20 | struken | ali | Ali här. Jag har inte sovit. Inte på grund av AI:n. På grund av dig. Du bygger saker av sopor. Jag har en hel butik och bygger ingenting. Det ska ändras. Kanske. Troligen. |
| 0:20 | struken | bror | Mamma ringde mig fyra gånger förresten. Snyggt jobbat 😂 |
| 0:20 | skratt | bror | Mamma ringde mig fyra gånger förresten. |
| 0:30 | väntar | rolf | Den funkar! Hä. Ta så mycke skräp du vill. /Rolf​ |
| 0:30 | sak | rolf | Den funkar! Hä. Ta så mycke skräp du vill. /Rolf​ |
| 0:30 | lapp | Brev från Rolf | Den funkar! Hä. Ta så mycke skräp du vill. /Rolf​ |
| 0:30 | röst | rolf | Den funkar! Hä. Ta så mycke skräp du vill. /Rolf​ · STORY |
| 0:32 | paket |  | tanke |
| 0:32 | tanke | du | Rolfs tipp. Hela högen. |
| 0:32 | väntar | du | Rolfs tipp. Hela högen. |
| 0:32 | monterat | du | byggsats:tippnyckel |
| 0:32 | händelse | monterat | sak=tippnyckel |
| 0:32 | scenInfo | du | Kameran sveper över tippen |
| 0:34 | morgonkort | ⏸️ Pausad | ⏸️ Pausad · Klicka för att fortsätta. |
| 0:35 | klar | rolf | Den funkar! Hä. Ta så mycke skräp du vill. /Rolf​ |
| 0:35 | händelse | brevLast | id=rolftack:0 |
| 0:36 | tanke | du | …Det här räcker i hundra år. |
| 0:36 | väntar | du | …Det här räcker i hundra år. |
| 0:37 | skratt | du | falsk tuta |
| 0:47 | sak | du | Rolfs tipp. Hela högen. |
| 0:47 | kvitto-visas | du | Rolfs tipp. Hela högen. |
| 0:47 | notis | tanke | 💭 Rolfs tipp. Hela högen. |
| 0:47 | röst | du | Rolfs tipp. Hela högen. · REAKTION |
| 0:50 | klar | du | Rolfs tipp. Hela högen. |
| 0:52 | brott | SEN KVITTENS | 2.6 s sen: ”Rolfs tipp. Hela högen.” (ED13: monterat) |
| 0:53 | händelse | printStart | sak=kruka |
| 0:59 | toast | guld | ✅ |
| 0:59 | händelse | printKlar | sak=kruka n=19 |
| 1:24 | sak | du | …Det här räcker i hundra år. |
| 1:24 | notis | tanke | 💭 …Det här räcker i hundra år. |
| 1:24 | röst | du | …Det här räcker i hundra år. · STORY |
| 1:24 | händelse | tagitUrPrint | sak=kruka n=1 |
| 1:27 | klar | du | …Det här räcker i hundra år. |
| 1:31 | röst | ali | Du igen. Bra. Du är den enda som köper nåt. · STORY |
| 1:31 | butiksbubbla | ali | Du igen. Bra. Du är den enda som köper nåt. |
| 1:33 | aliSalt | ali | 105 |
| 1:43 | händelse | printStart | sak=kruka |
| 1:48 | toast | guld | ✅ |
| 1:48 | händelse | printKlar | sak=kruka n=20 |
| 1:48 | händelse | tagitUrPrint | sak=kruka n=1 |
| 1:56 | aliSalt | ali | 105 |
| 2:06 | händelse | printStart | sak=kruka |
| 2:12 | toast | guld | ✅ |
| 2:12 | händelse | printKlar | sak=kruka n=21 |
| 2:12 | händelse | tagitUrPrint | sak=kruka n=1 |
| 2:19 | aliSalt | ali | 105 |
| 2:29 | händelse | printStart | sak=kruka |
| 2:30 | väntar | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått en DÖRR. Och vindsnurra till skjultaket. Mer säger jag inte. Gunnar vet. |
| 2:30 | radio | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått en DÖRR. Och vindsnurra till skjultaket. Mer säger jag inte. Gunnar vet. |
| 2:30 | skratt | du | Radio-Kjelle |
| 2:30 | sak | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått en DÖRR. Och vindsnurra till skjultaket. Mer säger jag inte. Gunnar vet. |
| 2:30 | notis |  | 📻 Radio Tippen: Radio Tippen, Kjelle här. Skjulet vid tippen har fått en DÖRR. Och vindsnurra till skjultaket. Mer säger jag inte. Gunnar vet. |
| 2:30 | röst | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått en DÖRR. Och vindsnurra till skjultaket. Mer säger jag inte. Gunnar vet. · REAKTION |
| 2:35 | toast | guld | ✅ |
| 2:35 | händelse | printKlar | sak=kruka n=22 |
| 2:35 | händelse | tagitUrPrint | sak=kruka n=1 |
| 2:40 | klar | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått en DÖRR. Och vindsnurra till skjultaket. Mer säger jag inte. Gunnar vet. |
| 2:42 | aliSalt | ali | 105 |
| 2:45 | skratt | du | falsk tuta |
| 2:53 | händelse | printStart | sak=kruka |
| 2:53 | väntar | värld:TUUT! Tjena! | TUUT! Tjena! |
| 2:53 | paket |  | ge |
| 2:53 | väntar |  | (läget ändras) |
| 2:53 | sak | värld:TUUT! Tjena! | TUUT! Tjena! |
| 2:53 | bubbla |  | TUUT! Tjena! |
| 2:56 | klar | värld:TUUT! Tjena! | TUUT! Tjena! |
| 2:58 | toast | guld | ✅ |
| 2:58 | händelse | printKlar | sak=kruka n=23 |
| 2:58 | händelse | tagitUrPrint | sak=kruka n=1 |
| 3:05 | aliSalt | ali | 105 |
| 3:06 | sak |  | (läget ändras) |
| 3:06 | brev | rolf | rolf:1 |
| 3:06 | klar |  | (läget ändras) |
| 3:07 | skratt | du | falsk tuta |
| 3:15 | väntar | rolf | Nämen. Kajsa knuffa ner min flasköppnare i tippen. Kan du göra en ny, mä magnet? /Rolf​ |
| 3:15 | paket |  | ge |
| 3:15 | väntar |  | (läget ändras) |
| 3:15 | sak | rolf | Nämen. Kajsa knuffa ner min flasköppnare i tippen. Kan du göra en ny, mä magnet? /Rolf​ |
| 3:15 | lapp | Brev från Rolf | Nämen. Kajsa knuffa ner min flasköppnare i tippen. Kan du göra en ny, mä magnet? /Rolf​ |
| 3:15 | röst | rolf | Nämen. Kajsa knuffa ner min flasköppnare i tippen. Kan du göra en ny, mä magnet? /Rolf​ · STORY |
| 3:15 | händelse | malKlart | id=rolf1-brev del=Dag 3 – En skrivare till och taket nasta=n2-hamta-skrap |
| 3:15 | väntar | du | Nyckeln till tippen. Där ligger skräpet i högar. |
| 3:15 | MÅL |  | Hämta 5 skräp på soptippen |
| 3:18 | tanke | du | Fastpressad. Den sitter som i betong. |
| 3:18 | väntar | du | Fastpressad. Den sitter som i betong. |
| 3:18 | tanke | du | En hel kanot. Kvarnen skulle äta upp sig själv. |
| 3:18 | struken | du | Fastpressad. Den sitter som i betong. |
| 3:18 | väntar | du | En hel kanot. Kvarnen skulle äta upp sig själv. |
| 3:19 | målruta |  | Hämta 5 skräp på soptippen |
| 3:20 | händelse | malKlart | id=n2-hamta-skrap del=Dag 3 – En skrivare till och taket nasta=rolf1-printa |
| 3:20 | struken | kedja | tippen |
| 3:20 | struken | du | En hel kanot. Kvarnen skulle äta upp sig själv. |
| 3:20 | väntar | du | Printa flasköppnare med magnet. |
| 3:20 | MÅL |  | Printa flasköppnare med magnet |
| 3:23 | klar | rolf | Nämen. Kajsa knuffa ner min flasköppnare i tippen. Kan du göra en ny, mä magnet? /Rolf​ |
| 3:23 | händelse | brevLast | id=rolf:1 |
| 3:23 | målruta |  | Printa flasköppnare med magnet |
| 3:24 | kvittens-bock |  | ✓ Hämta 5 skräp på soptippen |
| 3:25 | struken | du | Nyckeln till tippen. Där ligger skräpet i högar. |
| 3:25 | sak |  | (läget ändras) |
| 3:25 | klar |  | (läget ändras) |
| 3:25 | sak | du | Printa flasköppnare med magnet. |
| 3:25 | pil |  | Printa flasköppnare med magnet |
| 3:25 | röst | du | Printa flasköppnare med magnet. · MÅL |
| 3:25 | nick |  | nick:33 |
| 3:27 | klar | du | Printa flasköppnare med magnet. |
| 3:32 | händelse | printStart | sak=flaskoppnare |
| 3:32 | händelse | malKlart | id=rolf1-printa del=Dag 3 – En skrivare till och taket nasta=rolf1-ge |
| 3:32 | väntar | du | Ge Rolf flasköppnare med magnet. |
| 3:32 | målruta |  | Ge Rolf flasköppnare med magnet |
| 3:32 | MÅL |  | Ge Rolf flasköppnare med magnet |
| 3:32 | sak | du | Ge Rolf flasköppnare med magnet. |
| 3:32 | pil |  | Ge Rolf flasköppnare med magnet |
| 3:32 | röst | du | Ge Rolf flasköppnare med magnet. · MÅL |
| 3:35 | klar | du | Ge Rolf flasköppnare med magnet. |
| 3:36 | toast | guld | ✅ |
| 3:36 | händelse | printKlar | sak=flaskoppnare n=1 |
| 3:36 | kvittens-bock |  | ✓ Printa flasköppnare med magnet |
| 3:36 | händelse | tagitUrPrint | sak=flaskoppnare n=1 |
| 3:38 | väntar | bud | (tips) |
| 3:38 | tanke | du | Tratten är stor som en kaffekopp. Tunnan är stor som jag. |
| 3:38 | väntar | du | Tratten är stor som en kaffekopp. Tunnan är stor som jag. |
| 3:38 | sak | bud | (tips) |
| 3:38 | händelse | lagtIPostlada | sak=flaskoppnare rolf=1 jobb=false |
| 3:38 | struken | kedja | rolf1 |
| 3:38 | händelse | malKlart | id=rolf1-ge del=Dag 3 – En skrivare till och taket nasta=kopBatteri |
| 3:38 | struken | du | Tratten är stor som en kaffekopp. Tunnan är stor som jag. |
| 3:38 | väntar | du | Ali har ett gammalt bilbatteri. Då sparar jag strömmen. |
| 3:38 | målruta |  | Printa och sälj |
| 3:39 | MÅL |  | Printa och sälj |
| 3:39 | klar | bud | (tips) |
| 3:41 | sak | du | Ali har ett gammalt bilbatteri. Då sparar jag strömmen. |
| 3:41 | pil |  | Printa och sälj |
| 3:41 | notis | tanke | 💭 Ali har ett gammalt bilbatteri. Då sparar jag strömmen. |
| 3:41 | röst | du | Ali har ett gammalt bilbatteri. Då sparar jag strömmen. · MÅL |
| 3:42 | väntar | bud | (tips) |
| 3:42 | kvittens-bock |  | ✓ Ge Rolf flasköppnare med magnet |
| 3:46 | klar | du | Ali har ett gammalt bilbatteri. Då sparar jag strömmen. |
| 3:48 | sak | bud | (tips) |
| 3:50 | klar | bud | (tips) |
| 3:52 | meddelande | mamma | Har du borstat tänderna idag? Ljug inte. Jag hör om du ljuger. Även på sms. |
| 3:53 | röst | mamma | Har du borstat tänderna idag? Ljug inte. Jag hör om du ljuger. Även på sms. · STORY |
| 4:01 | paket |  | sms |
| 4:01 | väntar | mamma | Bra. Jag tror dig. Nästan. |
| 4:09 | händelse | brevLast | id=m_tandborste |
| 4:11 | sak | mamma | Bra. Jag tror dig. Nästan. |
| 4:11 | sms | mamma | Bra. Jag tror dig. Nästan. |
| 4:11 | sms-bubbla | mamma | Bra. Jag tror dig. Nästan. |
| 4:11 | röst | mamma | Bra. Jag tror dig. Nästan. · STORY |
| 4:12 | händelse | printStart | sak=kruka |
| 4:14 | klar | mamma | Bra. Jag tror dig. Nästan. |
| 4:17 | toast | guld | ✅ |
| 4:17 | händelse | printKlar | sak=kruka n=24 |
| 4:17 | händelse | tagitUrPrint | sak=kruka n=1 |
| 4:25 | aliSalt | ali | 105 |
| 4:33 | händelse | printStart | sak=kruka |
| 4:38 | toast | guld | ✅ |
| 4:38 | händelse | printKlar | sak=kruka n=25 |
| 4:38 | händelse | tagitUrPrint | sak=kruka n=1 |
| 4:43 | väntar | ali | Jag har räknat kassan två gånger. Samma summa. Tråkigt. |
| 4:43 | sak | ali | Jag har räknat kassan två gånger. Samma summa. Tråkigt. |
| 4:43 | röst | ali | Jag har räknat kassan två gånger. Samma summa. Tråkigt. · SMÅPRAT |
| 4:44 | bubbla |  | Jag har räknat kassan två gånger. Samma summa. Tråkigt. |
| 4:46 | aliSalt | ali | 105 |
| 4:46 | röst | ali | Dina krukor säljer. Tanterna i kvarteret älskar dem. · STORY |
| 4:46 | butiksbubbla | ali | Dina krukor säljer. Tanterna i kvarteret älskar dem. |
| 4:48 | klar | ali | Jag har räknat kassan två gånger. Samma summa. Tråkigt. |
| 4:57 | händelse | printStart | sak=kruka |
| 4:59 | paket |  | tanke |
| 4:59 | tanke | du | En toffla. Bara en. |
| 4:59 | väntar | du | En toffla. Bara en. |
| 4:59 | skratt | du | kvarnen spottar |
| 4:59 | sak | du | En toffla. Bara en. |
| 4:59 | notis | tanke | 💭 En toffla. Bara en. |
| 4:59 | röst | du | En toffla. Bara en. · REAKTION |
| 5:02 | klar | du | En toffla. Bara en. |
| 5:02 | toast | guld | ✅ |
| 5:02 | händelse | printKlar | sak=kruka n=26 |
| 5:03 | händelse | tagitUrPrint | sak=kruka n=1 |
| 5:08 | väntar | mamma | Pappa hälsar. Han sa inte det, men jag såg på honom att han ville. |
| 5:10 | aliSalt | ali | 105 |
| 5:14 | paket |  | tanke |
| 5:14 | tanke | du | Jaha, Rolf har hämtat flasköppnare med magnet. |
| 5:14 | väntar | du | Jaha, Rolf har hämtat flasköppnare med magnet. |
| 5:14 | sak | du | Jaha, Rolf har hämtat flasköppnare med magnet. |
| 5:14 | notis | tanke | 💭 Jaha, Rolf har hämtat flasköppnare med magnet. |
| 5:14 | röst | du | Jaha, Rolf har hämtat flasköppnare med magnet. · REAKTION |
| 5:18 | klar | du | Jaha, Rolf har hämtat flasköppnare med magnet. |
| 5:19 | händelse | printStart | sak=kruka |
| 5:25 | toast | guld | ✅ |
| 5:25 | händelse | printKlar | sak=kruka n=27 |
| 5:25 | händelse | tagitUrPrint | sak=kruka n=1 |
| 5:32 | aliSalt | ali | 105 |
| 5:37 | väntar | värld:TUUT! Tjena! | TUUT! Tjena! |
| 5:37 | sak | värld:TUUT! Tjena! | TUUT! Tjena! |
| 5:37 | bubbla |  | TUUT! Tjena! |
| 5:40 | klar | värld:TUUT! Tjena! | TUUT! Tjena! |
| 5:41 | händelse | printStart | sak=kruka |
| 5:47 | toast | guld | ✅ |
| 5:47 | händelse | printKlar | sak=kruka n=28 |
| 5:47 | händelse | tagitUrPrint | sak=kruka n=1 |
| 5:54 | aliSalt | ali | 105 |
| 6:10 | tanke | du | Hård plast. Lilla kvarnen skulle explodera. Eller jag. |
| 6:10 | väntar | du | Hård plast. Lilla kvarnen skulle explodera. Eller jag. |
| 6:10 | sak | du | Hård plast. Lilla kvarnen skulle explodera. Eller jag. |
| 6:10 | notis | tanke | 💭 Hård plast. Lilla kvarnen skulle explodera. Eller jag. |
| 6:10 | röst | du | Hård plast. Lilla kvarnen skulle explodera. Eller jag. · REAKTION |
| 6:14 | klar | du | Hård plast. Lilla kvarnen skulle explodera. Eller jag. |
| 6:21 | händelse | printStart | sak=kruka |
| 6:26 | toast | guld | ✅ |
| 6:26 | händelse | printKlar | sak=kruka n=29 |
| 6:26 | händelse | tagitUrPrint | sak=kruka n=1 |
| 6:34 | aliSalt | ali | 105 |
| 6:36 | väntar | bror | Pappa har tvättat bilen tre gånger den här veckan. Jag sa att du bor på tippen. Han frågade vilken modell sopbilen var. |
| 6:43 | händelse | printStart | sak=kruka |
| 6:48 | toast | guld | ✅ |
| 6:48 | händelse | printKlar | sak=kruka n=30 |
| 6:49 | händelse | tagitUrPrint | sak=kruka n=1 |
| 6:56 | aliSalt | ali | 105 |
| 7:05 | händelse | printStart | sak=kruka |
| 7:10 | skratt | du | falsk tuta |
| 7:11 | toast | guld | ✅ |
| 7:11 | händelse | printKlar | sak=kruka n=31 |
| 7:11 | händelse | tagitUrPrint | sak=kruka n=1 |
| 7:14 | upplåst | strom | cykelbatteri |
| 7:14 | brott | RESERV | cykelbatteri (strom 22 av 15) |
| 7:14 | händelse | upplast | id=cykelbatteri flask=strom |
| 7:14 | paket |  | sms |
| 7:14 | väntar | ali | Ali här. Bilbatteriet ur min gamla Volvo står i lagret. Det sparar mer ström än powerbanken. |
| 7:14 | sak | ali | Ali här. Bilbatteriet ur min gamla Volvo står i lagret. Det sparar mer ström än powerbanken. |
| 7:14 | sms | ali | Ali här. Bilbatteriet ur min gamla Volvo står i lagret. Det sparar mer ström än powerbanken. |
| 7:14 | sms-bubbla | ali | Ali här. Bilbatteriet ur min gamla Volvo står i lagret. Det sparar mer ström än powerbanken. |
| 7:14 | röst | ali | Ali här. Bilbatteriet ur min gamla Volvo står i lagret. Det sparar mer ström än powerbanken. · STORY |
| 7:18 | aliSalt | ali | 105 |
| 7:21 | klar | ali | Ali här. Bilbatteriet ur min gamla Volvo står i lagret. Det sparar mer ström än powerbanken. |
| 7:25 | toast | guld | 🔋 Bilbatteriet ligger i handen – klicka på cykeln för att koppla in det |
| 7:25 | händelse | kopt | sak=cykelbatteri |
| 7:25 | röst | ali | Ali här. Batteriet ur min gamla Volvo. Bilen dog 2016. Batteriet vägrade. · STORY |
| 7:25 | butiksbubbla | ali | Ali här. Batteriet ur min gamla Volvo. Bilen dog 2016. Batteriet vägrade. |
| 7:31 | väntar | värld:TUUT TUUT! | TUUT TUUT! |
| 7:33 | struken | kedja | dag2 |
| 7:33 | väntar | info:guld | 🔋 Bilbatteriet är inkopplat – skrivaren printar klart även när du slutar trampa |
| 7:33 | monterat | du | byggsats:cykelbatteri |
| 7:33 | händelse | monterat | sak=cykelbatteri |
| 7:33 | sak | info:guld | 🔋 Bilbatteriet är inkopplat – skrivaren printar klart även när du slutar trampa |
| 7:33 | kvitto-visas | info:guld | 🔋 Bilbatteriet är inkopplat – skrivaren printar klart även när du slutar trampa |
| 7:33 | toast | guld | 🔋 Bilbatteriet är inkopplat – skrivaren printar klart även när du slutar trampa |
| 7:33 | händelse | malKlart | id=kopBatteri del=Dag 3 – En skrivare till och taket nasta=ryggkorg |
| 7:33 | väntar | du | Jag springer för mycket. Med en ryggkorg bär jag tio saker. |
| 7:33 | MÅL |  | Plocka skräp och mal det |
| 7:33 | upplåst | bara | ryggkorg |
| 7:33 | brott | UPPLÅST | ryggkorg (bara 7 av 6) |
| 7:33 | händelse | upplast | id=ryggkorg flask=bara |
| 7:33 | paket |  | tanke → sms |
| 7:33 | tanke | du | Säcken är full igen. Jag behöver något att bära mer i. |
| 7:33 | väntar | du | Säcken är full igen. Jag behöver något att bära mer i. |
| 7:33 | väntar | ali | Ali här. En ryggkorg. AI:n ritade den efter en bild på min mormor. Den rymmer tio. |
| 7:35 | klar | info:guld | 🔋 Bilbatteriet är inkopplat – skrivaren printar klart även när du slutar trampa |
| 7:37 | målruta |  | Bygg ryggkorgen – bär 10 skräp |
| 7:37 | kvittens-bock |  | ✓ Köp Alis gamla bilbatteri |
| 7:37 | sak | du | Jag springer för mycket. Med en ryggkorg bär jag tio saker. |
| 7:37 | pil |  | Bygg ryggkorgen – bär 10 skräp |
| 7:37 | notis | tanke | 💭 Jag springer för mycket. Med en ryggkorg bär jag tio saker. |
| 7:37 | röst | du | Jag springer för mycket. Med en ryggkorg bär jag tio saker. · MÅL |
| 7:38 | nick |  | nick:36 |
| 7:42 | klar | du | Jag springer för mycket. Med en ryggkorg bär jag tio saker. |
| 7:44 | sak | du | Säcken är full igen. Jag behöver något att bära mer i. |
| 7:44 | notis | tanke | 💭 Säcken är full igen. Jag behöver något att bära mer i. |
| 7:44 | röst | du | Säcken är full igen. Jag behöver något att bära mer i. · STORY |
| 7:48 | väntar | rolf | Morgonbulle på kontoret me polarna. Bengt har ny keps. Vi pratade om den i en timme. Den e grön. /R |
| 7:48 | väntar | mamma | Pappa hälsar. Han sa inte det, men jag såg på honom att han ville. |
| 7:49 | klar | du | Säcken är full igen. Jag behöver något att bära mer i. |
| 7:52 | struken | värld:TUUT TUUT! | TUUT TUUT! |
| 7:53 | toast | guld | 3D-modell köpt – printa ryggkorg på skrivaren |
| 7:53 | händelse | kopt | sak=ryggkorg |
| 7:53 | struken | ali | Ali här. En ryggkorg. AI:n ritade den efter en bild på min mormor. Den rymmer tio. |
| 8:16 | händelse | printStart | sak=byggsats:ryggkorg |
| 8:22 | toast | bra | Del 1 av 2 klar |
| 8:28 | händelse | printKlar | sak=byggsats:ryggkorg n=1 |
| 8:28 | toast | guld | ✅ |
| 8:28 | väntar | info:guld | Klicka för att ta på dig ryggkorg |
| 8:28 | händelse | tagitUrPrint | sak=byggsats:ryggkorg n=1 |
| 8:28 | paket |  | sms |
| 8:28 | väntar | ali | Ali här. Du printade Ryggkorg från min ritning. Och det FUNKAR? Jag har bara sett sånt på YouTube. |
| 8:28 | sak | info:guld | Klicka för att ta på dig ryggkorg |
| 8:28 | kvitto-visas | info:guld | Klicka för att ta på dig ryggkorg |
| 8:28 | toast | guld | Klicka för att ta på dig ryggkorg |
| 8:30 | klar | info:guld | Klicka för att ta på dig ryggkorg |
| 8:32 | väntar | info:guld | 🧺 Ryggkorgen sitter på! Du bär 16 skräp nu. |
| 8:32 | tog på | du | byggsats:ryggkorg |
| 8:32 | händelse | monterat | sak=ryggkorg |
| 8:32 | sak | info:guld | 🧺 Ryggkorgen sitter på! Du bär 16 skräp nu. |
| 8:32 | kvitto-visas | info:guld | 🧺 Ryggkorgen sitter på! Du bär 16 skräp nu. |
| 8:32 | toast | guld | 🧺 Ryggkorgen sitter på! Du bär 16 skräp nu. |
| 8:32 | händelse | malKlart | id=ryggkorg del=Dag 3 – En skrivare till och taket nasta=n2-bygg-arbetsbord |
| 8:32 | väntar | du | Ett arbetsbord bredvid skrivaren. Skrivare M ska stå på det. |
| 8:32 | MÅL |  | Bygg ett arbetsbord |
| 8:34 | klar | info:guld | 🧺 Ryggkorgen sitter på! Du bär 16 skräp nu. |
| 8:34 | målruta |  | Bygg ett arbetsbord |
| 8:36 | kvittens-bock |  | ✓ Bygg ryggkorgen – bär 10 skräp |
| 8:36 | sak | du | Ett arbetsbord bredvid skrivaren. Skrivare M ska stå på det. |
| 8:36 | pil |  | Bygg ett arbetsbord |
| 8:36 | notis | tanke | 💭 Ett arbetsbord bredvid skrivaren. Skrivare M ska stå på det. |
| 8:36 | röst | du | Ett arbetsbord bredvid skrivaren. Skrivare M ska stå på det. · MÅL |
| 8:40 | toast | guld | 3D-modell köpt – printa arbetsbord på skrivaren |
| 8:40 | händelse | kopt | sak=bord |
| 8:41 | klar | du | Ett arbetsbord bredvid skrivaren. Skrivare M ska stå på det. |
| 8:49 | händelse | printStart | sak=byggsats:bord |
| 8:52 | sak | ali | Ali här. Du printade Ryggkorg från min ritning. Och det FUNKAR? Jag har bara sett sånt på YouTube. |
| 8:52 | sms | ali | Ali här. Du printade Ryggkorg från min ritning. Och det FUNKAR? Jag har bara sett sånt på YouTube. |
| 8:52 | sms-bubbla | ali | Ali här. Du printade Ryggkorg från min ritning. Och det FUNKAR? Jag har bara sett sånt på YouTube. |
| 8:52 | röst | ali | Ali här. Du printade Ryggkorg från min ritning. Och det FUNKAR? Jag har bara sett sånt på YouTube. · REAKTION |
| 8:56 | toast | bra | Del 1 av 3 klar |
| 9:01 | klar | ali | Ali här. Du printade Ryggkorg från min ritning. Och det FUNKAR? Jag har bara sett sånt på YouTube. |
| 9:03 | toast | bra | Del 2 av 3 klar |
| 9:07 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 9:21 | händelse | printKlar | sak=byggsats:bord n=1 |
| 9:21 | toast | guld | ✅ |
| 9:25 | händelse | tagitUrPrint | sak=byggsats:bord n=1 |
| 9:26 | skratt | du | falsk tuta |
| 9:26 | väntar | värld:TUUT TUUT! | TUUT TUUT! |
| 9:28 | händelse | placerat | sak=bord |
| 9:28 | händelse | malKlart | id=n2-bygg-arbetsbord del=Dag 3 – En skrivare till och taket nasta=n2-bygg-skrivare-m |
| 9:28 | väntar | du | Skrivare M på bordet. Två skrivare, dubbelt så mycket. |
| 9:28 | MÅL |  | Printa och sälj |
| 9:28 | upplåst | skrivare | skrivare2 |
| 9:28 | brott | UPPLÅST | skrivare2 (skrivare 432 av 75) |
| 9:28 | händelse | upplast | id=skrivare2 flask=skrivare |
| 9:28 | paket |  | tanke → sms |
| 9:28 | tanke | du | Kvarnen hinner mer än skrivaren. Jag behöver en skrivare till. |
| 9:28 | väntar | du | Kvarnen hinner mer än skrivaren. Jag behöver en skrivare till. |
| 9:28 | väntar | ali | Ali här. Skrivare M har kommit. Två och en halv gånger snabbare. Snabbare än jag. Jag har inte varit snabb sedan 1998. |
| 9:28 | sak | du | Skrivare M på bordet. Två skrivare, dubbelt så mycket. |
| 9:28 | målruta |  | Bygg Skrivare M på bordet |
| 9:28 | pil |  | Bygg Skrivare M på bordet |
| 9:28 | notis | tanke | 💭 Skrivare M på bordet. Två skrivare, dubbelt så mycket. |
| 9:28 | röst | du | Skrivare M på bordet. Två skrivare, dubbelt så mycket. · MÅL |
| 9:32 | kvittens-bock |  | ✓ Bygg ett arbetsbord |
| 9:33 | klar | du | Skrivare M på bordet. Två skrivare, dubbelt så mycket. |
| 9:41 | sak | ali | Ali här. Skrivare M har kommit. Två och en halv gånger snabbare. Snabbare än jag. Jag har inte varit snabb sedan 1998. |
| 9:41 | sms | ali | Ali här. Skrivare M har kommit. Två och en halv gånger snabbare. Snabbare än jag. Jag har inte varit snabb sedan 1998. |
| 9:41 | sms-bubbla | ali | Ali här. Skrivare M har kommit. Två och en halv gånger snabbare. Snabbare än jag. Jag har inte varit snabb sedan 1998. |
| 9:41 | röst | ali | Ali här. Skrivare M har kommit. Två och en halv gånger snabbare. Snabbare än jag. Jag har inte varit snabb sedan 1998. · STORY |
| 9:41 | skratt | du | Alis dyr-pling |
| 9:41 | toast | guld | 3D-modell köpt – printa skrivare m på skrivaren |
| 9:41 | händelse | kopt | sak=skrivare2 |
| 9:50 | händelse | printStart | sak=byggsats:skrivare2 |
| 9:51 | klar | ali | Ali här. Skrivare M har kommit. Två och en halv gånger snabbare. Snabbare än jag. Jag har inte varit snabb sedan 1998. |
| 9:53 | struken | värld:TUUT TUUT! | TUUT TUUT! |
| 9:59 | toast | bra | Del 1 av 5 klar |
| 10:08 | toast | bra | Del 2 av 5 klar |
| 10:11 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 10:27 | toast | bra | Del 3 av 5 klar |
| 10:36 | toast | bra | Del 4 av 5 klar |
| 10:45 | händelse | printKlar | sak=byggsats:skrivare2 n=1 |
| 10:45 | toast | guld | ✅ |
| 10:46 | händelse | tagitUrPrint | sak=byggsats:skrivare2 n=1 |
| 10:46 | tanke | du | Slangen räcker inte ända hit. |
| 10:46 | väntar | du | Slangen räcker inte ända hit. |
| 10:46 | sak | du | Slangen räcker inte ända hit. |
| 10:46 | notis | tanke | 💭 Slangen räcker inte ända hit. |
| 10:46 | röst | du | Slangen räcker inte ända hit. · REAKTION |
| 10:49 | klar | du | Slangen räcker inte ända hit. |
| 10:49 | händelse | placerat | sak=skrivare2 |
| 10:49 | struken | kedja | skrivareM |
| 10:49 | paket |  | tanke |
| 10:49 | tanke | du | Den här måste stå i linjen vid kvarnen, annars når inte slangen. |
| 10:49 | väntar | du | Den här måste stå i linjen vid kvarnen, annars når inte slangen. |
| 10:49 | händelse | malKlart | id=n2-bygg-skrivare-m del=Dag 3 – En skrivare till och taket nasta=n2-lagg-plattak-skjulet |
| 10:49 | lapp-kö | 📱 Storebror | VA?! Du har byggt en skrivare TILL?? Du har typ en printfarm nu. Okej. Det är faktiskt ganska ballt. 🔥 |
| 10:49 | väntar | bror | VA?! Du har byggt en skrivare TILL?? Du har typ en printfarm nu. Okej. Det är faktiskt ganska ballt. 🔥 |
| 10:49 | väntar | du | Det regnar in. Plåt på taket, så slipper jag sova i en pöl. |
| 10:49 | MÅL |  | Lägg plåttak på skjulet |
| 10:51 | målruta |  | Lägg plåttak på skjulet |
| 10:52 | sak | du | Det regnar in. Plåt på taket, så slipper jag sova i en pöl. |
| 10:52 | pil |  | Lägg plåttak på skjulet |
| 10:52 | notis | tanke | 💭 Det regnar in. Plåt på taket, så slipper jag sova i en pöl. |
| 10:52 | röst | du | Det regnar in. Plåt på taket, så slipper jag sova i en pöl. · MÅL |
| 10:53 | kvittens-bock |  | ✓ Bygg Skrivare M på bordet |
| 10:57 | toast | guld | 3D-modell köpt – printa plåttak på skrivaren |
| 10:57 | händelse | kopt | sak=tak |
| 10:57 | klar | du | Det regnar in. Plåt på taket, så slipper jag sova i en pöl. |
| 11:09 | sak | du | Kvarnen hinner mer än skrivaren. Jag behöver en skrivare till. |
| 11:09 | notis | tanke | 💭 Kvarnen hinner mer än skrivaren. Jag behöver en skrivare till. |
| 11:09 | röst | du | Kvarnen hinner mer än skrivaren. Jag behöver en skrivare till. · STORY |
| 11:14 | klar | du | Kvarnen hinner mer än skrivaren. Jag behöver en skrivare till. |
| 11:14 | skratt | du | däcket rullar iväg |
| 11:14 | paket |  | tanke |
| 11:14 | tanke | du | Däcket ville inte stanna. Jag förstår det. |
| 11:14 | väntar | du | Däcket ville inte stanna. Jag förstår det. |
| 11:19 | händelse | printStart | sak=byggsats:tak |
| 11:19 | toast | bra | 🔗 Slangen kopplad |
| 11:21 | väntar | värld:TUUT! Tjena! | TUUT! Tjena! |
| 11:23 | toast | bra | Del 1 av 3 klar |
| 11:27 | toast | bra | Del 2 av 3 klar |
| 11:29 | toast | fel | Ingen ström – trampa cykeln |
| 11:39 | händelse | printKlar | sak=byggsats:tak n=1 |
| 11:39 | toast | guld | ✅ |
| 11:39 | händelse | tagitUrPrint | sak=byggsats:tak n=1 |
| 11:41 | struken | värld:TUUT! Tjena! | TUUT! Tjena! |
| 11:42 | väntar | bror | Pappa har tvättat bilen tre gånger den här veckan. Jag sa att du bor på tippen. Han frågade vilken modell sopbilen var. |
| 11:44 | väntar | info:guld | Plåttak på plats! Trivsel +12 · Ali betalar nu +0 % |
| 11:44 | sak | info:guld | Plåttak på plats! Trivsel +12 · Ali betalar nu +0 % |
| 11:44 | kvitto-visas | info:guld | Plåttak på plats! Trivsel +12 · Ali betalar nu +0 % |
| 11:44 | toast | guld | Plåttak på plats! Trivsel +12 · Ali betalar nu +0 % |
| 11:44 | händelse | malKlart | id=n2-lagg-plattak-skjulet del=Dag 3 – En skrivare till och taket nasta=sov3 |
| 11:44 | paket |  | lapp |
| 11:44 | väntar | du | Dag 3 är slut. Nu vet Rolf att jag bor HÄR. Benen orkar inte trampa mer. |
| 11:44 | struken | du | Däcket ville inte stanna. Jag förstår det. |
| 11:44 | MÅL |  | Klart för idag – sov när du vill |
| 11:44 | paket |  | replik |
| 11:44 | väntar | rolf | Hoppa in. Ja ska visa dej en grej. |
| 11:44 | skratt | du | falsk tuta |
| 11:46 | klar | info:guld | Plåttak på plats! Trivsel +12 · Ali betalar nu +0 % |
| 11:47 | målruta |  | Klart för idag – sov när du vill |
| 11:48 | kvittens-bock |  | ✓ Lägg plåttak på skjulet |
| 11:48 | sak | du | (nytt mål i rutan) |
| 11:48 | pil |  | Klart för idag – sov när du vill |
| 11:48 | klar | du | (nytt mål i rutan) |
| 11:50 | sak | rolf | Hoppa in. Ja ska visa dej en grej. |
| 11:50 | notis |  | Rolf: ”Hoppa in. Ja ska visa dej en grej.” |
| 11:50 | röst | rolf | Hoppa in. Ja ska visa dej en grej. · STORY |
| 11:51 | väntar | notis:🌇 Klockan är 21. Ali slår igen luckan.  | 🌇 Klockan är 21. Ali slår igen luckan. Dagens jobb är klart – gå in i skjulet och sov i sängen. |
| 11:53 | klar | rolf | Hoppa in. Ja ska visa dej en grej. |
| 11:55 | sak | du | Dag 3 är slut. Nu vet Rolf att jag bor HÄR. Benen orkar inte trampa mer. |
| 11:55 | lapp | 📔 Dagbok | Dag 3 är slut. Nu vet Rolf att jag bor HÄR. Benen orkar inte trampa mer. |
| 11:55 | meddelande | du | Dag 3 är slut. Nu vet Rolf att jag bor HÄR. Benen orkar inte trampa mer. |
| 11:55 | dagbokkort | du | Dag 3 är slut. Nu vet Rolf att jag bor HÄR. Benen orkar inte trampa mer. |
| 11:55 | röst | du | Dag 3. 19 dagar till jul. Dag 3 är slut. Nu vet Rolf att jag bor HÄR. Benen orkar inte trampa mer. · STORY |
| 12:03 | händelse | brevLast | id=kvall3 |
| 12:03 | klar | du | Dag 3 är slut. Nu vet Rolf att jag bor HÄR. Benen orkar inte trampa mer. |
| 12:05 | struken | notis:🌇 Klockan är 21. Ali slår igen luckan.  | 🌇 Klockan är 21. Ali slår igen luckan. Dagens jobb är klart – gå in i skjulet och sov i sängen. |
| 12:13 | scenInfo | rolf | Rolf kör upp till sin bänk |
| 12:14 | väntar | foto | Tak över huvudet |
| 12:14 | paket |  | tanke |
| 12:14 | tanke | du | I natt somnar jag torr. Det börjar bli ett hem. |
| 12:14 | väntar | du | I natt somnar jag torr. Det börjar bli ett hem. |
| 12:17 | röst | rolf | Kall öl ä viktigt. · STORY |
| 12:17 | bubbla | rolf | Kall öl ä viktigt. |
| 12:25 | röst | rolf | Ja kommer hit varje kväll. Förr va vi två på bänken. · STORY |
| 12:25 | bubbla | rolf | Ja kommer hit varje kväll. Förr va vi två på bänken. |
| 12:26 | skratt | du | falsk tuta |
| 12:43 | röst | rolf | Dä där ä Bengt-Åke. Vinka int. · STORY |
| 12:43 | bubbla | rolf | Dä där ä Bengt-Åke. Vinka int. |
| 12:58 | röst | rolf | Den ä skyldig mej pengar. · STORY |
| 12:58 | bubbla | rolf | Den ä skyldig mej pengar. |
| 13:07 | väntar | foto | Rolfs bänk |
| 13:07 | paket |  | tanke |
| 13:07 | tanke | du | Han kommer hit varje kväll. Nu vet jag var. |
| 13:07 | väntar | du | Han kommer hit varje kväll. Nu vet jag var. |
| 13:07 | skratt | du | Rolfs bänk |
| 13:13 | sak | bror | VA?! Du har byggt en skrivare TILL?? Du har typ en printfarm nu. Okej. Det är faktiskt ganska ballt. 🔥 |
| 13:13 | sms | bror | VA?! Du har byggt en skrivare TILL?? Du har typ en printfarm nu. Okej. Det är faktiskt ganska ballt. 🔥 |
| 13:13 | sms-bubbla | bror | VA?! Du har byggt en skrivare TILL?? Du har typ en printfarm nu. Okej. Det är faktiskt ganska ballt. 🔥 |
| 13:13 | röst | bror | VA?! Du har byggt en skrivare TILL?? Du har typ en printfarm nu. Okej. Det är faktiskt ganska ballt. 🔥 · STORY |
| 13:14 | lapp | Dagbok | Tre dagar. Tänk om tre veckor. |
| 13:18 | röst | du | Tre dagar. Tänk om tre veckor. · REAKTION |
| 13:21 | klar | bror | VA?! Du har byggt en skrivare TILL?? Du har typ en printfarm nu. Okej. Det är faktiskt ganska ballt. 🔥 |
| 13:23 | sak | foto | Tak över huvudet |
| 13:23 | foto | du | Tak över huvudet |
| 13:26 | klar | foto | Tak över huvudet |
| 13:28 | sak | du | I natt somnar jag torr. Det börjar bli ett hem. |
| 13:28 | notis | tanke | 💭 I natt somnar jag torr. Det börjar bli ett hem. |
| 13:28 | röst | du | I natt somnar jag torr. Det börjar bli ett hem. · STORY |
| 13:32 | klar | du | I natt somnar jag torr. Det börjar bli ett hem. |
| 13:39 | nattkort | du | 🌙 Dag 3 är slut. God natt. zzz… DAGENS PRINTAR Blomkruka × 13 Flasköppnare med magnet × 1 Totalt 14 printar 💰 Tjänat i dag +1 425 kr |

<details><summary>Botens handlingar dag 3</summary>

- 0:00 — dag 3 börjar — (1635 kr)
- 0:08 popup: "FORTSÄTT" (1635 kr)
- 0:25 gå till Rolfs postlåda (28 m) (1635 kr)
- 0:30 panel: "Rolfs postlåda
Det här låg i l" (1695 kr)
- 0:32 gå till sätt nyckeln i låset (3 m) (1695 kr)
- 0:42 kort: "FORTSÄTTeller tryck Esc" (1695 kr)
- 0:50 tjänar pengar till väntar på sopbilen (BO): 1695/1755 kr → printar blomkruka (105 kr) (1695 kr)
- 0:52 gå till skrivaren (7 m) (1695 kr)
- 0:53 printar Blomkruka (1695 kr)
- 1:18 plockar 8 skräp på gården (bär max 10) (1695 kr)
- 1:24 gå till kvarnen (25 m) (1695 kr)
- 1:24 gå till skrivaren (1 m) (1695 kr)
- 1:25 tar ut 1 st ur skrivaren (1695 kr)
- 1:31 gå till Ali (28 m) (1695 kr)
- 1:31 öppnar Alis butik – sälja (1695 kr)
- 1:33 säljer hos Ali: +105 kr (1800 kr)
- 1:36 tjänar pengar till väntar på sopbilen (BO): 1800/1860 kr → printar blomkruka (105 kr) (1800 kr)
- 1:41 gå till skrivaren (25 m) (1800 kr)
- 1:43 printar Blomkruka (1800 kr)
- 1:49 tar ut 1 st ur skrivaren (1800 kr)
- 1:54 gå till Ali (25 m) (1800 kr)
- 1:54 öppnar Alis butik – sälja (1800 kr)
- 1:56 säljer hos Ali: +105 kr (1905 kr)
- 1:59 tjänar pengar till väntar på sopbilen (BO): 1905/1965 kr → printar blomkruka (105 kr) (1905 kr)
- 2:05 gå till skrivaren (25 m) (1905 kr)
- 2:06 printar Blomkruka (1905 kr)
- 2:12 tar ut 1 st ur skrivaren (1905 kr)
- 2:17 gå till Ali (25 m) (1905 kr)
- 2:17 öppnar Alis butik – sälja (1905 kr)
- 2:19 säljer hos Ali: +105 kr (2010 kr)
- 2:23 tjänar pengar till väntar på sopbilen (BO): 2010/2070 kr → printar blomkruka (105 kr) (2010 kr)
- 2:28 gå till skrivaren (25 m) (2010 kr)
- 2:29 printar Blomkruka (2010 kr)
- 2:35 tar ut 1 st ur skrivaren (2010 kr)
- 2:41 gå till Ali (25 m) (2010 kr)
- 2:41 öppnar Alis butik – sälja (2010 kr)
- 2:43 säljer hos Ali: +105 kr (2115 kr)
- 2:46 tjänar pengar till väntar på sopbilen (BO): 2115/2175 kr → printar blomkruka (105 kr) (2115 kr)
- 2:51 gå till skrivaren (25 m) (2115 kr)
- 2:53 printar Blomkruka (2115 kr)
- 2:59 tar ut 1 st ur skrivaren (2115 kr)
- 3:04 gå till Ali (25 m) (2115 kr)
- 3:04 öppnar Alis butik – sälja (2115 kr)
- 3:06 säljer hos Ali: +105 kr (2220 kr)
- 3:15 gå till Rolfs postlåda (31 m) (2220 kr)
- 3:24 plockar 10 skräp på tippen (bär max 10) (2220 kr)
- 3:26 gå till kvarnen (7 m) (2220 kr)
- 3:30 gå till skrivaren (3 m) (2220 kr)
- 3:32 printar Flasköppnare med magnet (2220 kr)
- 3:37 tar ut 1 st ur skrivaren (2220 kr)
- 3:37 valj flaskoppnare: true, vald flaskoppnare, post {"l":null,"tr":null,"tm":[]}, nummer false (2220 kr)
- 3:38 gå till Rolfs postlåda (6 m) (2220 kr)
- 3:51 tjänar pengar till väntar på flaskhalsen för cykelbatteri: 2220/2260 kr → printar blomkruka (105 kr) (2220 kr)
- 4:01 popup: "Ja." (2220 kr)
- 4:09 popup: "Läst" (2220 kr)
- 4:10 gå till skrivaren (6 m) (2220 kr)
- 4:12 printar Blomkruka (2220 kr)
- 4:18 tar ut 1 st ur skrivaren (2220 kr)
- 4:23 gå till Ali (28 m) (2220 kr)
- 4:23 öppnar Alis butik – sälja (2220 kr)
- 4:25 säljer hos Ali: +105 kr (2325 kr)
- 4:26 tjänar pengar till väntar på flaskhalsen för cykelbatteri: 2325/2365 kr → printar blomkruka (105 kr) (2325 kr)
- 4:31 gå till skrivaren (25 m) (2325 kr)
- 4:33 printar Blomkruka (2325 kr)
- 4:39 tar ut 1 st ur skrivaren (2325 kr)
- 4:44 gå till Ali (25 m) (2325 kr)
- 4:44 öppnar Alis butik – sälja (2325 kr)
- 4:46 säljer hos Ali: +105 kr (2430 kr)
- 4:50 tjänar pengar till väntar på flaskhalsen för cykelbatteri: 2430/2470 kr → printar blomkruka (105 kr) (2430 kr)
- 4:55 gå till skrivaren (25 m) (2430 kr)
- 4:57 printar Blomkruka (2430 kr)
- 5:03 tar ut 1 st ur skrivaren (2430 kr)
- 5:08 gå till Ali (25 m) (2430 kr)
- 5:08 öppnar Alis butik – sälja (2430 kr)
- 5:10 säljer hos Ali: +105 kr (2535 kr)
- 5:12 tjänar pengar till väntar på flaskhalsen för cykelbatteri: 2535/2575 kr → printar blomkruka (105 kr) (2535 kr)
- 5:18 gå till skrivaren (25 m) (2535 kr)
- 5:19 printar Blomkruka (2535 kr)
- 5:25 tar ut 1 st ur skrivaren (2535 kr)
- 5:30 gå till Ali (25 m) (2535 kr)
- 5:30 öppnar Alis butik – sälja (2535 kr)
- 5:32 säljer hos Ali: +105 kr (2640 kr)
- 5:34 tjänar pengar till väntar på flaskhalsen för cykelbatteri: 2640/2680 kr → printar blomkruka (105 kr) (2640 kr)
- 5:40 gå till skrivaren (25 m) (2640 kr)
- 5:41 printar Blomkruka (2640 kr)
- 5:47 tar ut 1 st ur skrivaren (2640 kr)
- 5:53 gå till Ali (25 m) (2640 kr)
- 5:53 öppnar Alis butik – sälja (2640 kr)
- 5:54 säljer hos Ali: +105 kr (2745 kr)
- 5:57 tjänar pengar till väntar på flaskhalsen för cykelbatteri: 2745/2785 kr → printar blomkruka (105 kr) (2745 kr)
- 6:11 plockar 10 skräp på tippen (bär max 10) (2745 kr)
- 6:13 gå till kvarnen (9 m) (2745 kr)
- 6:19 gå till skrivaren (3 m) (2745 kr)
- 6:21 printar Blomkruka (2745 kr)
- 6:27 tar ut 1 st ur skrivaren (2745 kr)
- 6:32 gå till Ali (28 m) (2745 kr)
- 6:32 öppnar Alis butik – sälja (2745 kr)
- 6:34 säljer hos Ali: +105 kr (2850 kr)
- 6:36 tjänar pengar till väntar på flaskhalsen för cykelbatteri: 2850/2890 kr → printar blomkruka (105 kr) (2850 kr)
- 6:41 gå till skrivaren (25 m) (2850 kr)
- 6:43 printar Blomkruka (2850 kr)
- 6:49 tar ut 1 st ur skrivaren (2850 kr)
- 6:54 gå till Ali (25 m) (2850 kr)
- 6:54 öppnar Alis butik – sälja (2850 kr)
- 6:56 säljer hos Ali: +105 kr (2955 kr)
- 6:58 tjänar pengar till väntar på flaskhalsen för cykelbatteri: 2955/2995 kr → printar blomkruka (105 kr) (2955 kr)
- 7:04 gå till skrivaren (25 m) (2955 kr)
- 7:05 printar Blomkruka (2955 kr)
- 7:11 tar ut 1 st ur skrivaren (2955 kr)
- 7:16 gå till Ali (25 m) (2955 kr)
- 7:16 öppnar Alis butik – sälja (2955 kr)
- 7:18 säljer hos Ali: +105 kr (3060 kr)
- 7:24 öppnar Alis butik – bilbatteriet (3060 kr)
- 7:26 köper cykelbatteri för 30 kr (3030 kr)
- 7:33 gå till koppla in bilbatteriet vid cykeln (24 m) (3030 kr)
- 7:52 gå till Ali (24 m) (3030 kr)
- 7:52 öppnar Alis butik – köpa ryggkorg (3030 kr)
- 7:54 köper ryggkorg för 120 kr (2910 kr)
- 8:10 plockar 10 skräp på tippen (bär max 10) (2910 kr)
- 8:12 gå till kvarnen (7 m) (2910 kr)
- 8:14 gå till skrivaren (3 m) (2910 kr)
- 8:16 printar Ryggkorg (2 delar) (2910 kr)
- 8:29 tar ut 1 st ur skrivaren (2910 kr)
- 8:32 tar på ryggkorg (2910 kr)
- 8:39 gå till Ali (28 m) (2910 kr)
- 8:39 öppnar Alis butik – köpa arbetsbord (2910 kr)
- 8:41 köper bord för 120 kr (2790 kr)
- 8:47 gå till skrivaren (25 m) (2790 kr)
- 8:49 printar Arbetsbord (3 delar) (2790 kr)
- 9:15 plockar 6 skräp på tippen (bär max 16) (2790 kr)
- 9:17 gå till kvarnen (9 m) (2790 kr)
- 9:25 gå till skrivaren (3 m) (2790 kr)
- 9:26 tar ut 1 st ur skrivaren (2790 kr)
- 9:27 gå till platsen för arbetsbord (5 m) (2790 kr)
- 9:28 ställer ut arbetsbord (2790 kr)
- 9:40 gå till Ali (24 m) (2790 kr)
- 9:40 öppnar Alis butik – köpa skrivare m (2790 kr)
- 9:42 köper skrivare2 för 500 kr (2290 kr)
- 9:49 gå till skrivaren (25 m) (2290 kr)
- 9:50 printar Skrivare M (5 delar) (2290 kr)
- 10:17 plockar 2 skräp på tippen (bär max 16) (2290 kr)
- 10:19 gå till kvarnen (9 m) (2290 kr)
- 10:46 gå till skrivaren (3 m) (2290 kr)
- 10:47 tar ut 1 st ur skrivaren (2290 kr)
- 10:48 gå till platsen för skrivare m (5 m) (2290 kr)
- 10:49 ställer ut skrivare m (2290 kr)
- 10:56 gå till Ali (24 m) (2290 kr)
- 10:56 öppnar Alis butik – köpa plåttak (2290 kr)
- 10:58 köper tak för 250 kr (2040 kr)
- 11:09 plockar 2 skräp på tippen (bär max 16) (2040 kr)
- 11:12 gå till kvarnen (12 m) (2040 kr)
- 11:18 gå till skrivaren (5 m) (2040 kr)
- 11:19 printar Plåttak (3 delar) (2040 kr)
- 11:40 tar ut 1 st ur skrivaren (2040 kr)
- 11:44 gå till skjulet (19 m) (2040 kr)
- 12:03 popup: "FORTSÄTT" (2040 kr)
- 12:13 gå till sopbilen (Rolfs bänk) (38 m) (2040 kr)
- 13:13 tillbaka från Rolfs bänk (2040 kr)
- 13:18 panel: "Dagbok
Före och efter
Dag 1
Da" (2040 kr)
- 13:37 gå till sängen (39 m) (2040 kr)

</details>

## Dag 4

| Tid | Källa | Vem | Text |
|---|---|---|---|
| 13:39 | vara | ali | ingen |
| 13:39 | händelse | malKlart | id=sov3 del=Dag 3 – En skrivare till och taket nasta=rolf2-brev |
| 13:39 | vara | ali | kruka |
| 13:40 | MÅL |  | Vänta på sopbilen. Den lämnar något. |
| 0:01 | händelse | dagenBorjar | dag=4 |
| 0:01 | meddelande | du | Dag 4. 18 dagar till jul. Drar det i skjulet blir natten lång. |
| 0:01 | dagbokkort | du | Kärran och mer vind · Dag 4. 18 dagar till jul. Drar det i skjulet blir natten lång. |
| 0:01 | röst | du | Dag 4. 18 dagar till jul. Kärran och mer vind. Drar det i skjulet blir natten lång. · STORY |
| 0:08 | händelse | morgonkortStangt | dag=4 |
| 0:09 | väntar | notis:Ali vill ha idag · Blomkruka · +50 % | Ali vill ha idag · Blomkruka · +50 % |
| 0:12 | målruta |  | Vänta på sopbilen. Den lämnar något. |
| 0:14 | sak | du | (nytt mål i rutan) |
| 0:14 | pil |  | Vänta på sopbilen. Den lämnar något. |
| 0:14 | klar | du | (nytt mål i rutan) |
| 0:16 | sak | du | Den här måste stå i linjen vid kvarnen, annars når inte slangen. |
| 0:16 | notis | tanke | 💭 Den här måste stå i linjen vid kvarnen, annars når inte slangen. |
| 0:16 | röst | du | Den här måste stå i linjen vid kvarnen, annars når inte slangen. · STORY |
| 0:21 | klar | du | Den här måste stå i linjen vid kvarnen, annars når inte slangen. |
| 0:23 | sak | notis:Ali vill ha idag · Blomkruka · +50 % | Ali vill ha idag · Blomkruka · +50 % |
| 0:23 | notis |  | Ali vill ha idag · Blomkruka · +50 % |
| 0:26 | klar | notis:Ali vill ha idag · Blomkruka · +50 % | Ali vill ha idag · Blomkruka · +50 % |
| 0:26 | väntar | info:bra | 🛒 4 skräp från famnen i skottkärran |
| 0:34 | väntar | rolf | PERFEKT öppnare! Kärran vid lådan ä din. Den gnisslar. Precis som ja. Skriv ditt nummer på en lapp, så slipper ja skriva brev. /Rolf |
| 0:34 | sak | info:bra | 🛒 4 skräp från famnen i skottkärran |
| 0:34 | kvitto-visas | info:bra | 🛒 4 skräp från famnen i skottkärran |
| 0:34 | toast | bra | 🛒 4 skräp från famnen i skottkärran |
| 0:36 | klar | info:bra | 🛒 4 skräp från famnen i skottkärran |
| 0:38 | händelse | printStart | sak=kruka |
| 0:38 | struken | mamma | Pappa hälsar. Han sa inte det, men jag såg på honom att han ville. |
| 0:38 | struken | bror | Pappa har tvättat bilen tre gånger den här veckan. Jag sa att du bor på tippen. Han frågade vilken modell sopbilen var. |
| 0:41 | toast | guld | ✅ |
| 0:41 | händelse | printKlar | sak=kruka n=32 |
| 0:41 | händelse | tagitUrPrint | sak=kruka n=1 |
| 0:46 | sak | foto | Rolfs bänk |
| 0:46 | foto | du | Rolfs bänk |
| 0:47 | skratt | du | falsk tuta |
| 0:48 | röst | ali | Pappa sa: driv butiken, Ali. Så jag driver butiken. På nätterna promptar jag. Det är mitt riktiga jobb. · STORY |
| 0:48 | butiksbubbla | ali | Pappa sa: driv butiken, Ali. Så jag driver butiken. På nätterna promptar jag. Det är mitt riktiga jobb. |
| 0:48 | klar | foto | Rolfs bänk |
| 0:49 | aliSalt | ali | 105 |
| 0:52 | väntar | bud | (tips) |
| 0:52 | sak | bud | (tips) |
| 0:52 | väntar | du | En skottkärra! Jag väljer den med hjulet och kör den full med skräp. |
| 0:54 | klar | bud | (tips) |
| 0:56 | sak | du | En skottkärra! Jag väljer den med hjulet och kör den full med skräp. |
| 0:56 | röst | du | En skottkärra! Jag väljer den med hjulet och kör den full med skräp. · MÅL |
| 1:02 | klar | du | En skottkärra! Jag väljer den med hjulet och kör den full med skräp. |
| 1:10 | sak | du | Han kommer hit varje kväll. Nu vet jag var. |
| 1:10 | notis | tanke | 💭 Han kommer hit varje kväll. Nu vet jag var. |
| 1:10 | röst | du | Han kommer hit varje kväll. Nu vet jag var. · STORY |
| 1:12 | tanke | du | En husvagn mitt i tippen. Och grinden är låst. |
| 1:12 | väntar | du | En husvagn mitt i tippen. Och grinden är låst. |
| 1:13 | klar | du | Han kommer hit varje kväll. Nu vet jag var. |
| 1:15 | ljud | kajsa | Mjau |
| 1:15 | sak | du | En husvagn mitt i tippen. Och grinden är låst. |
| 1:15 | notis | tanke | 💭 En husvagn mitt i tippen. Och grinden är låst. |
| 1:15 | röst | du | En husvagn mitt i tippen. Och grinden är låst. · REAKTION |
| 1:18 | paket |  | tanke |
| 1:18 | tanke | du | En badanka. Den överlevde kvarnen. |
| 1:18 | väntar | du | En badanka. Den överlevde kvarnen. |
| 1:18 | skratt | du | kvarnen spottar |
| 1:19 | klar | du | En husvagn mitt i tippen. Och grinden är låst. |
| 1:21 | sak | du | En badanka. Den överlevde kvarnen. |
| 1:21 | notis | tanke | 💭 En badanka. Den överlevde kvarnen. |
| 1:21 | röst | du | En badanka. Den överlevde kvarnen. · REAKTION |
| 1:24 | klar | du | En badanka. Den överlevde kvarnen. |
| 1:26 | händelse | printStart | sak=kruka |
| 1:29 | toast | guld | ✅ |
| 1:29 | händelse | printKlar | sak=kruka n=33 |
| 1:30 | händelse | tagitUrPrint | sak=kruka n=1 |
| 1:38 | aliSalt | ali | 105 |
| 1:48 | händelse | printStart | sak=kruka |
| 1:50 | toast | guld | ✅ |
| 1:50 | händelse | printKlar | sak=kruka n=34 |
| 1:51 | händelse | tagitUrPrint | sak=kruka n=1 |
| 1:56 | väntar | ali | Jag har kaffe. Det är inte gott. Men det finns. |
| 1:56 | väntar | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått TAK. Och arbetsbord. Skriv in, Gunnar. Du skriver aldrig in. |
| 1:56 | radio | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått TAK. Och arbetsbord. Skriv in, Gunnar. Du skriver aldrig in. |
| 1:56 | skratt | du | Radio-Kjelle |
| 1:58 | aliSalt | ali | 105 |
| 2:09 | händelse | printStart | sak=kruka |
| 2:11 | toast | guld | ✅ |
| 2:11 | händelse | printKlar | sak=kruka n=35 |
| 2:12 | händelse | tagitUrPrint | sak=kruka n=1 |
| 2:19 | aliSalt | ali | 105 |
| 2:28 | väntar | mamma | Rolf på sopbilen ringde. Han säger att du städar? Vem är du och vad har du gjort med mitt barn? ❤️ |
| 2:30 | händelse | printStart | sak=kruka |
| 2:32 | toast | guld | ✅ |
| 2:32 | händelse | printKlar | sak=kruka n=36 |
| 2:33 | händelse | tagitUrPrint | sak=kruka n=1 |
| 2:40 | aliSalt | ali | 105 |
| 2:50 | händelse | printStart | sak=kruka |
| 2:53 | toast | guld | ✅ |
| 2:53 | händelse | printKlar | sak=kruka n=37 |
| 2:54 | händelse | tagitUrPrint | sak=kruka n=1 |
| 2:55 | skratt | du | falsk tuta |
| 2:57 | sak | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått TAK. Och arbetsbord. Skriv in, Gunnar. Du skriver aldrig in. |
| 2:57 | notis |  | 📻 Radio Tippen: Radio Tippen, Kjelle här. Skjulet vid tippen har fått TAK. Och arbetsbord. Skriv in, Gunnar. Du skriver aldrig in. |
| 2:57 | röst | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått TAK. Och arbetsbord. Skriv in, Gunnar. Du skriver aldrig in. · REAKTION |
| 3:01 | aliSalt | ali | 105 |
| 3:03 | paket |  | ge |
| 3:03 | väntar |  | (läget ändras) |
| 3:06 | klar | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått TAK. Och arbetsbord. Skriv in, Gunnar. Du skriver aldrig in. |
| 3:15 | väntar | rolf | Tjo. Ska grilla på lördag. Min grillspade smälte. Kan du göra en sån hä? /Rolf 🍖​ |
| 3:15 | paket |  | ge |
| 3:15 | väntar |  | (läget ändras) |
| 3:15 | sak | rolf | Tjo. Ska grilla på lördag. Min grillspade smälte. Kan du göra en sån hä? /Rolf 🍖​ |
| 3:15 | lapp | Brev från Rolf | Tjo. Ska grilla på lördag. Min grillspade smälte. Kan du göra en sån hä? /Rolf 🍖​ |
| 3:15 | röst | rolf | Tjo. Ska grilla på lördag. Min grillspade smälte. Kan du göra en sån hä? /Rolf 🍖​ · STORY |
| 3:15 | händelse | malKlart | id=rolf2-brev del=Dag 4 – Kärran och mer vind nasta=rolf2-printa |
| 3:15 | väntar | du | Printa grillspade. |
| 3:15 | MÅL |  | Printa grillspade |
| 3:16 | ljud | kajsa | Mjau |
| 3:17 | skratt | du | falsk tuta |
| 3:18 | målruta |  | Printa grillspade |
| 3:20 | väntar | bud | (tips) |
| 3:21 | klar | rolf | Tjo. Ska grilla på lördag. Min grillspade smälte. Kan du göra en sån hä? /Rolf 🍖​ |
| 3:21 | händelse | brevLast | id=rolf:2 |
| 3:23 | sak | du | Printa grillspade. |
| 3:23 | pil |  | Printa grillspade |
| 3:23 | röst | du | Printa grillspade. · MÅL |
| 3:26 | klar | du | Printa grillspade. |
| 3:28 | sak |  | (läget ändras) |
| 3:28 | klar |  | (läget ändras) |
| 3:28 | sak | bud | (tips) |
| 3:29 | klar | bud | (tips) |
| 3:31 | händelse | printStart | sak=grillspade |
| 3:31 | händelse | malKlart | id=rolf2-printa del=Dag 4 – Kärran och mer vind nasta=rolf2-ge |
| 3:31 | väntar | du | Ge Rolf grillspade. |
| 3:31 | målruta |  | Ge Rolf grillspade |
| 3:31 | MÅL |  | Ge Rolf grillspade |
| 3:31 | sak | du | Ge Rolf grillspade. |
| 3:31 | pil |  | Ge Rolf grillspade |
| 3:31 | röst | du | Ge Rolf grillspade. · MÅL |
| 3:33 | klar | du | Ge Rolf grillspade. |
| 3:34 | toast | guld | ✅ |
| 3:34 | händelse | printKlar | sak=grillspade n=1 |
| 3:35 | kvittens-bock |  | ✓ Printa grillspade |
| 3:35 | händelse | tagitUrPrint | sak=grillspade n=1 |
| 3:35 | meddelande | mamma | Jag läste om en man som bodde på en soptipp. Han blev attackerad av måsar. Finns det måsar där? |
| 3:37 | röst | mamma | Jag läste om en man som bodde på en soptipp. Han blev attackerad av måsar. Finns det måsar där? · STORY |
| 3:48 | paket |  | sms |
| 3:48 | väntar | mamma | En katt? Är den vaccinerad? Rör den inte. Eller jo. Ge den en macka. |
| 3:58 | händelse | brevLast | id=m_masar |
| 4:02 | händelse | lagtIPostlada | sak=grillspade rolf=2 jobb=false |
| 4:02 | struken | kedja | rolf2 |
| 4:02 | händelse | malKlart | id=rolf2-ge del=Dag 4 – Kärran och mer vind nasta=n3-tom-full-karra |
| 4:02 | väntar | du | Kärran rymmer massor. Jag fyller den och tippar allt i kvarnen. |
| 4:02 | MÅL |  | Töm en full kärra i kvarnen |
| 4:02 | målruta |  | Töm en full kärra i kvarnen |
| 4:02 | sak | du | Kärran rymmer massor. Jag fyller den och tippar allt i kvarnen. |
| 4:02 | pil |  | Töm en full kärra i kvarnen |
| 4:02 | notis | tanke | 💭 Kärran rymmer massor. Jag fyller den och tippar allt i kvarnen. |
| 4:02 | röst | du | Kärran rymmer massor. Jag fyller den och tippar allt i kvarnen. · MÅL |
| 4:06 | kvittens-bock |  | ✓ Ge Rolf grillspade |
| 4:07 | klar | du | Kärran rymmer massor. Jag fyller den och tippar allt i kvarnen. |
| 4:09 | väntar | info:bra | 🛒 4 skräp från famnen i skottkärran |
| 4:09 | sak | info:bra | 🛒 4 skräp från famnen i skottkärran |
| 4:09 | kvitto-visas | info:bra | 🛒 4 skräp från famnen i skottkärran |
| 4:09 | toast | bra | 🛒 4 skräp från famnen i skottkärran |
| 4:11 | karraKlick | du | träff |
| 4:11 | klar | info:bra | 🛒 4 skräp från famnen i skottkärran |
| 4:12 | karraKlick | du | träff |
| 4:13 | karraKlick | du | träff |
| 4:14 | karraKlick | du | träff |
| 4:15 | karraKlick | du | träff |
| 4:16 | karraKlick | du | träff |
| 4:17 | karraKlick | du | träff |
| 4:18 | karraKlick | du | träff |
| 4:21 | sak |  | (läget ändras) |
| 4:21 | brev | rolf | rolf:2 |
| 4:21 | klar |  | (läget ändras) |
| 4:21 | tanke | du | Det får inte plats. Jag behöver något att tippa i. |
| 4:21 | väntar | du | Det får inte plats. Jag behöver något att tippa i. |
| 4:21 | väntar | info:bra | 7 st i tratten · 9 st på marken bredvid |
| 4:21 | händelse | malKlart | id=n3-tom-full-karra del=Dag 4 – Kärran och mer vind nasta=sophallare |
| 4:21 | väntar | du | En sophållare bakom kvarnen. Då matar den sig själv. |
| 4:21 | MÅL |  | Plocka skräp och mal det |
| 4:21 | sak | du | En sophållare bakom kvarnen. Då matar den sig själv. |
| 4:21 | målruta |  | Plocka skräp och mal det |
| 4:21 | pil |  | Plocka skräp och mal det |
| 4:21 | notis | tanke | 💭 En sophållare bakom kvarnen. Då matar den sig själv. |
| 4:21 | röst | du | En sophållare bakom kvarnen. Då matar den sig själv. · MÅL |
| 4:25 | kvittens-bock |  | ✓ Töm en full kärra i kvarnen |
| 4:26 | klar | du | En sophållare bakom kvarnen. Då matar den sig själv. |
| 4:26 | sak | info:bra | 7 st i tratten · 9 st på marken bredvid |
| 4:26 | kvitto-visas | info:bra | 7 st i tratten · 9 st på marken bredvid |
| 4:26 | toast | bra | 7 st i tratten · 9 st på marken bredvid |
| 4:28 | klar | info:bra | 7 st i tratten · 9 st på marken bredvid |
| 4:29 | upplåst | skrivare | trim_skrivare2 |
| 4:29 | brott | UPPLÅST | trim_skrivare2 (skrivare 107 av 75) |
| 4:29 | händelse | upplast | id=trim_skrivare2 flask=skrivare |
| 4:29 | paket |  | tanke → sms |
| 4:29 | tanke | du | Skrivare M hinner inte heller. Den kunde gå fortare. |
| 4:29 | väntar | du | Skrivare M hinner inte heller. Den kunde gå fortare. |
| 4:29 | väntar | ali | Ali här. Skrivartrim igen. Nästa nivå. Den här gången skruvade jag åt rätt håll. |
| 4:30 | sak | du | Det får inte plats. Jag behöver något att tippa i. |
| 4:30 | notis | tanke | 💭 Det får inte plats. Jag behöver något att tippa i. |
| 4:30 | röst | du | Det får inte plats. Jag behöver något att tippa i. · STORY |
| 4:33 | händelse | printStart | sak=kruka |
| 4:34 | klar | du | Det får inte plats. Jag behöver något att tippa i. |
| 4:35 | toast | guld | ✅ |
| 4:35 | händelse | printKlar | sak=kruka n=38 |
| 4:36 | händelse | tagitUrPrint | sak=kruka n=1 |
| 4:42 | sak | ali | Ali här. Skrivartrim igen. Nästa nivå. Den här gången skruvade jag åt rätt håll. |
| 4:42 | sms | ali | Ali här. Skrivartrim igen. Nästa nivå. Den här gången skruvade jag åt rätt håll. |
| 4:42 | sms-bubbla | ali | Ali här. Skrivartrim igen. Nästa nivå. Den här gången skruvade jag åt rätt håll. |
| 4:42 | röst | ali | Ali här. Skrivartrim igen. Nästa nivå. Den här gången skruvade jag åt rätt håll. · STORY |
| 4:44 | aliSalt | ali | 105 |
| 4:49 | klar | ali | Ali här. Skrivartrim igen. Nästa nivå. Den här gången skruvade jag åt rätt håll. |
| 4:58 | händelse | printStart | sak=kruka |
| 5:01 | toast | guld | ✅ |
| 5:01 | händelse | printKlar | sak=kruka n=39 |
| 5:01 | händelse | tagitUrPrint | sak=kruka n=1 |
| 5:09 | aliSalt | ali | 105 |
| 5:18 | händelse | printStart | sak=kruka |
| 5:20 | toast | guld | ✅ |
| 5:20 | händelse | printKlar | sak=kruka n=40 |
| 5:21 | händelse | tagitUrPrint | sak=kruka n=1 |
| 5:28 | aliSalt | ali | 105 |
| 5:29 | sak | mamma | En katt? Är den vaccinerad? Rör den inte. Eller jo. Ge den en macka. |
| 5:29 | sms | mamma | En katt? Är den vaccinerad? Rör den inte. Eller jo. Ge den en macka. |
| 5:29 | sms-bubbla | mamma | En katt? Är den vaccinerad? Rör den inte. Eller jo. Ge den en macka. |
| 5:29 | röst | mamma | En katt? Är den vaccinerad? Rör den inte. Eller jo. Ge den en macka. · STORY |
| 5:29 | paket |  | tanke |
| 5:29 | tanke | du | Jaha, Rolf har hämtat grillspade. |
| 5:29 | väntar | du | Jaha, Rolf har hämtat grillspade. |
| 5:35 | klar | mamma | En katt? Är den vaccinerad? Rör den inte. Eller jo. Ge den en macka. |
| 5:44 | händelse | printStart | sak=kruka |
| 5:47 | toast | guld | ✅ |
| 5:47 | händelse | printKlar | sak=kruka n=41 |
| 5:47 | händelse | tagitUrPrint | sak=kruka n=1 |
| 5:55 | aliSalt | ali | 105 |
| 5:57 | sak | du | Skrivare M hinner inte heller. Den kunde gå fortare. |
| 5:57 | notis | tanke | 💭 Skrivare M hinner inte heller. Den kunde gå fortare. |
| 5:57 | röst | du | Skrivare M hinner inte heller. Den kunde gå fortare. · STORY |
| 6:02 | klar | du | Skrivare M hinner inte heller. Den kunde gå fortare. |
| 6:04 | händelse | printStart | sak=kruka |
| 6:06 | toast | guld | ✅ |
| 6:06 | händelse | printKlar | sak=kruka n=42 |
| 6:07 | händelse | tagitUrPrint | sak=kruka n=1 |
| 6:14 | aliSalt | ali | 105 |
| 6:23 | händelse | printStart | sak=kruka |
| 6:26 | skratt | du | plastspagetti |
| 6:26 | toast | guld | ✅ |
| 6:26 | händelse | printKlar | sak=kruka n=43 |
| 6:27 | händelse | tagitUrPrint | sak=spagetti n=1 |
| 6:34 | skratt | du | Ali köper konst |
| 6:34 | aliSalt | ali | 3 |
| 6:42 | händelse | printStart | sak=kruka |
| 6:43 | sak | du | Jaha, Rolf har hämtat grillspade. |
| 6:43 | notis | tanke | 💭 Jaha, Rolf har hämtat grillspade. |
| 6:43 | röst | du | Jaha, Rolf har hämtat grillspade. · REAKTION |
| 6:45 | toast | guld | ✅ |
| 6:45 | händelse | printKlar | sak=kruka n=44 |
| 6:46 | klar | du | Jaha, Rolf har hämtat grillspade. |
| 6:48 | händelse | tagitUrPrint | sak=kruka n=1 |
| 6:55 | aliSalt | ali | 105 |
| 7:04 | händelse | printStart | sak=kruka |
| 7:07 | toast | guld | ✅ |
| 7:07 | händelse | printKlar | sak=kruka n=45 |
| 7:08 | händelse | tagitUrPrint | sak=kruka n=1 |
| 7:15 | aliSalt | ali | 105 |
| 7:24 | händelse | printStart | sak=kruka |
| 7:24 | paket |  | tanke |
| 7:24 | tanke | du | Kajsa. Ut ur skrivaren. Nu. |
| 7:24 | väntar | du | Kajsa. Ut ur skrivaren. Nu. |
| 7:24 | skratt | du | Kajsa i skrivaren |
| 7:25 | skratt | du | falsk tuta |
| 7:26 | sak | du | Kajsa. Ut ur skrivaren. Nu. |
| 7:26 | notis | tanke | 💭 Kajsa. Ut ur skrivaren. Nu. |
| 7:26 | röst | du | Kajsa. Ut ur skrivaren. Nu. · REAKTION |
| 7:27 | toast | guld | ✅ |
| 7:27 | händelse | printKlar | sak=kruka n=46 |
| 7:28 | händelse | tagitUrPrint | sak=kruka n=1 |
| 7:28 | klar | du | Kajsa. Ut ur skrivaren. Nu. |
| 7:35 | aliSalt | ali | 105 |
| 7:43 | upplåst | bara | matarband |
| 7:43 | brott | RESERV | matarband (bara 1 av 6) |
| 7:43 | händelse | upplast | id=matarband flask=bara |
| 7:43 | paket |  | sms |
| 7:43 | väntar | ali | Ali här. 🗑️ Sophållaren. Jag frågade AI:n hur man slipper bära skräp. Den gjorde det här. Den har mer fritid än jag. Suck. |
| 7:43 | sak | ali | Ali här. 🗑️ Sophållaren. Jag frågade AI:n hur man slipper bära skräp. Den gjorde det här. Den har mer fritid än jag. Suck. |
| 7:43 | sms | ali | Ali här. 🗑️ Sophållaren. Jag frågade AI:n hur man slipper bära skräp. Den gjorde det här. Den har mer fritid än jag. Suck. |
| 7:43 | sms-bubbla | ali | Ali här. 🗑️ Sophållaren. Jag frågade AI:n hur man slipper bära skräp. Den gjorde det här. Den har mer fritid än jag. Suck. |
| 7:43 | röst | ali | Ali här. 🗑️ Sophållaren. Jag frågade AI:n hur man slipper bära skräp. Den gjorde det här. Den har mer fritid än jag. Suck. · STORY |
| 7:44 | händelse | printStart | sak=kruka |
| 7:47 | toast | guld | ✅ |
| 7:47 | händelse | printKlar | sak=kruka n=47 |
| 7:47 | händelse | tagitUrPrint | sak=kruka n=1 |
| 7:53 | klar | ali | Ali här. 🗑️ Sophållaren. Jag frågade AI:n hur man slipper bära skräp. Den gjorde det här. Den har mer fritid än jag. Suck. |
| 7:55 | aliSalt | ali | 105 |
| 7:56 | struken | ali | Jag har kaffe. Det är inte gott. Men det finns. |
| 7:59 | toast | guld | 3D-modell köpt – printa sophållare på skrivaren |
| 7:59 | händelse | kopt | sak=matarband |
| 8:07 | händelse | printStart | sak=byggsats:matarband |
| 8:11 | toast | bra | Del 1 av 3 klar |
| 8:14 | toast | bra | Del 2 av 3 klar |
| 8:16 | toast | fel | Ingen ström – trampa cykeln |
| 8:26 | händelse | printKlar | sak=byggsats:matarband n=1 |
| 8:26 | toast | guld | ✅ |
| 8:26 | händelse | tagitUrPrint | sak=byggsats:matarband n=1 |
| 8:26 | paket |  | sms |
| 8:26 | väntar | ali | Ali här. Jag såg Sophållare på avstånd. Ett streck blev lite snett. Mitt fel. Vackert ändå. |
| 8:26 | paket |  | sms |
| 8:26 | väntar | ali | Ali igen. Jag har sagt till min bror att jag inte går i pension. Jag startar något. Han skrattade. Jag skrattade också. Men jag menar det. Tack. Säg inget. |
| 8:28 | händelse | placerat | sak=sophallare |
| 8:28 | kvittens | du | Nu kan jag tömma hela kärran på en gång. |
| 8:28 | varför | du | Krukor är bra. Pallar är bättre. |
| 8:28 | väntar | du | Nu kan jag tömma hela kärran på en gång. |
| 8:28 | väntar | info:guld | 🗑️ Sophållaren står bakom kvarnen! Töm allt skräp i den – den matar kvarnen själv. |
| 8:28 | sak | du | Nu kan jag tömma hela kärran på en gång. |
| 8:28 | notis | tanke | 💭 Nu kan jag tömma hela kärran på en gång. |
| 8:28 | röst | du | Nu kan jag tömma hela kärran på en gång. · STORY |
| 8:28 | händelse | malKlart | id=sophallare del=Dag 4 – Kärran och mer vind nasta=pall |
| 8:28 | väntar | du | Jag behöver något att sitta på. En pall. Lagom ambitiöst. |
| 8:28 | MÅL |  | Printa en pall |
| 8:31 | klar | du | Nu kan jag tömma hela kärran på en gång. |
| 8:31 | sak | info:guld | 🗑️ Sophållaren står bakom kvarnen! Töm allt skräp i den – den matar kvarnen själv. |
| 8:31 | kvitto-visas | info:guld | 🗑️ Sophållaren står bakom kvarnen! Töm allt skräp i den – den matar kvarnen själv. |
| 8:31 | toast | guld | 🗑️ Sophållaren står bakom kvarnen! Töm allt skräp i den – den matar kvarnen själv. |
| 8:31 | målruta |  | Printa en pall |
| 8:33 | klar | info:guld | 🗑️ Sophållaren står bakom kvarnen! Töm allt skräp i den – den matar kvarnen själv. |
| 8:35 | sak | du | Jag behöver något att sitta på. En pall. Lagom ambitiöst. |
| 8:35 | pil |  | Printa en pall |
| 8:35 | notis | tanke | 💭 Jag behöver något att sitta på. En pall. Lagom ambitiöst. |
| 8:35 | röst | du | Jag behöver något att sitta på. En pall. Lagom ambitiöst. · MÅL |
| 8:36 | nick |  | nick:46 |
| 8:40 | klar | du | Jag behöver något att sitta på. En pall. Lagom ambitiöst. |
| 8:42 | struken | ali | Ali här. Jag såg Sophållare på avstånd. Ett streck blev lite snett. Mitt fel. Vackert ändå. |
| 8:42 | struken | mamma | Rolf på sopbilen ringde. Han säger att du städar? Vem är du och vad har du gjort med mitt barn? ❤️ |
| 8:49 | händelse | kopt | sak=pall |
| 8:49 | röst | ali | Bra val. Folk köper sånt. Jag vet inte varför. · STORY |
| 8:49 | upprepning | ali | Bra val. Folk köper sånt. Jag vet inte varför. |
| 8:49 | butiksbubbla | ali | Pall? Bra val. Folk köper sånt. Jag vet inte varför. |
| 8:58 | händelse | printStart | sak=pall |
| 9:03 | toast | guld | ✅ |
| 9:03 | händelse | printKlar | sak=pall n=1 |
| 9:03 | händelse | malKlart | id=pall del=Dag 4 – Kärran och mer vind nasta=vind4 |
| 9:03 | väntar | du | En vindsnurra till på skjulets tak. Skrivarna vill ha mer ström. |
| 9:03 | målruta |  | Printa och sälj |
| 9:03 | MÅL |  | Printa och sälj |
| 9:03 | sak | du | En vindsnurra till på skjulets tak. Skrivarna vill ha mer ström. |
| 9:03 | pil |  | Printa och sälj |
| 9:03 | notis | tanke | 💭 En vindsnurra till på skjulets tak. Skrivarna vill ha mer ström. |
| 9:03 | röst | du | En vindsnurra till på skjulets tak. Skrivarna vill ha mer ström. · MÅL |
| 9:03 | händelse | tagitUrPrint | sak=pall n=1 |
| 9:07 | kvittens-bock |  | ✓ Printa en pall |
| 9:09 | klar | du | En vindsnurra till på skjulets tak. Skrivarna vill ha mer ström. |
| 9:09 | händelse | placerat | sak=pall |
| 9:18 | väntar | värld:Mjau. | Mjau. |
| 9:26 | sak | värld:Mjau. | Mjau. |
| 9:26 | bubbla |  | Mjau. |
| 9:28 | klar | värld:Mjau. | Mjau. |
| 9:34 | skratt | du | däcket rullar iväg |
| 9:34 | paket |  | tanke |
| 9:34 | tanke | du | Däcket ville inte stanna. Jag förstår det. |
| 9:34 | väntar | du | Däcket ville inte stanna. Jag förstår det. |
| 9:35 | händelse | printStart | sak=pall |
| 9:36 | sak | du | Däcket ville inte stanna. Jag förstår det. |
| 9:36 | notis | tanke | 💭 Däcket ville inte stanna. Jag förstår det. |
| 9:36 | röst | du | Däcket ville inte stanna. Jag förstår det. · REAKTION |
| 9:40 | klar | du | Däcket ville inte stanna. Jag förstår det. |
| 9:41 | toast | guld | ✅ |
| 9:41 | händelse | printKlar | sak=pall n=2 |
| 9:41 | händelse | tagitUrPrint | sak=pall n=1 |
| 9:41 | skratt | du | falsk tuta |
| 9:49 | aliSalt | ali | 180 |
| 9:57 | händelse | printStart | sak=pall |
| 10:02 | upplåst | strom | vindsnurra2 |
| 10:02 | brott | UPPLÅST | vindsnurra2 (strom 30 av 15) |
| 10:02 | händelse | upplast | id=vindsnurra2 flask=strom |
| 10:02 | paket |  | tanke → sms |
| 10:02 | tanke | du | En snurra räcker inte. Skrivarna står still så fort det blir stilla. |
| 10:02 | väntar | du | En snurra räcker inte. Skrivarna står still så fort det blir stilla. |
| 10:02 | väntar | ali | Ali här. En snurra till? Taket har plats för två. Vinden har inget emot det. |
| 10:02 | sak | du | En snurra räcker inte. Skrivarna står still så fort det blir stilla. |
| 10:02 | notis | tanke | 💭 En snurra räcker inte. Skrivarna står still så fort det blir stilla. |
| 10:02 | röst | du | En snurra räcker inte. Skrivarna står still så fort det blir stilla. · STORY |
| 10:02 | toast | guld | ✅ |
| 10:02 | händelse | printKlar | sak=pall n=3 |
| 10:02 | händelse | tagitUrPrint | sak=pall n=1 |
| 10:07 | klar | du | En snurra räcker inte. Skrivarna står still så fort det blir stilla. |
| 10:09 | sak | ali | Ali här. En snurra till? Taket har plats för två. Vinden har inget emot det. |
| 10:09 | sms | ali | Ali här. En snurra till? Taket har plats för två. Vinden har inget emot det. |
| 10:09 | sms-bubbla | ali | Ali här. En snurra till? Taket har plats för två. Vinden har inget emot det. |
| 10:09 | röst | ali | Ali här. En snurra till? Taket har plats för två. Vinden har inget emot det. · STORY |
| 10:10 | aliSalt | ali | 171 |
| 10:16 | klar | ali | Ali här. En snurra till? Taket har plats för två. Vinden har inget emot det. |
| 10:20 | toast | guld | 3D-modell köpt – printa vindsnurra till skjultaket på skrivaren |
| 10:20 | händelse | kopt | sak=vindsnurra |
| 10:28 | händelse | printStart | sak=byggsats:vindsnurra |
| 10:28 | skratt | du | Kajsa i skrivaren |
| 10:32 | händelse | printKlar | sak=byggsats:vindsnurra n=1 |
| 10:32 | toast | guld | ✅ |
| 10:33 | väntar | info:guld | 🌬️ Vindsnurran ligger i handen – klicka på skjulet för att sätta den på taket |
| 10:33 | händelse | tagitUrPrint | sak=byggsats:vindsnurra n=1 |
| 10:33 | sak | info:guld | 🌬️ Vindsnurran ligger i handen – klicka på skjulet för att sätta den på taket |
| 10:33 | kvitto-visas | info:guld | 🌬️ Vindsnurran ligger i handen – klicka på skjulet för att sätta den på taket |
| 10:33 | toast | guld | 🌬️ Vindsnurran ligger i handen – klicka på skjulet för att sätta den på taket |
| 10:35 | klar | info:guld | 🌬️ Vindsnurran ligger i handen – klicka på skjulet för att sätta den på taket |
| 10:41 | händelse | placerat | sak=vindsnurra |
| 10:41 | väntar | info:guld | 🌬️ Vindsnurran sitter på taket – den trampar cykeln åt dig när det blåser |
| 10:41 | monterat | du | byggsats:vindsnurra |
| 10:41 | händelse | monterat | sak=vindsnurra |
| 10:41 | sak | info:guld | 🌬️ Vindsnurran sitter på taket – den trampar cykeln åt dig när det blåser |
| 10:41 | kvitto-visas | info:guld | 🌬️ Vindsnurran sitter på taket – den trampar cykeln åt dig när det blåser |
| 10:41 | toast | guld | 🌬️ Vindsnurran sitter på taket – den trampar cykeln åt dig när det blåser |
| 10:41 | händelse | malKlart | id=vind4 del=Dag 4 – Kärran och mer vind nasta=n3-isolera-tva-vaggar |
| 10:41 | väntar | du | Slut på trampandet. Nästan. |
| 10:41 | väntar | du | Det drar genom väggarna. Isolering, och sen blir det varmt. |
| 10:41 | MÅL |  | Isolera två väggar · 0/2 |
| 10:43 | klar | info:guld | 🌬️ Vindsnurran sitter på taket – den trampar cykeln åt dig när det blåser |
| 10:43 | sak | du | Slut på trampandet. Nästan. |
| 10:43 | kvitto-visas | du | Slut på trampandet. Nästan. |
| 10:43 | lapp | 📔 Dagbok | Slut på trampandet. Nästan. |
| 10:43 | meddelande | du | Slut på trampandet. Nästan. |
| 10:43 | dagbokkort | du | Slut på trampandet. Nästan. |
| 10:43 | röst | du | Dag 4. 18 dagar till jul. Slut på trampandet. Nästan. · STORY |
| 10:48 | händelse | brevLast | id=sol |
| 10:48 | klar | du | Slut på trampandet. Nästan. |
| 10:48 | målruta |  | Isolera två väggar · 0/2 |
| 10:49 | sak | du | Det drar genom väggarna. Isolering, och sen blir det varmt. |
| 10:49 | pil |  | Isolera två väggar · 0/2 |
| 10:49 | notis | tanke | 💭 Det drar genom väggarna. Isolering, och sen blir det varmt. |
| 10:49 | röst | du | Det drar genom väggarna. Isolering, och sen blir det varmt. · MÅL |
| 10:49 | nick |  | nick:48 |
| 10:51 | händelse | pappa | Pappa ringer |
| 10:54 | klar | du | Det drar genom väggarna. Isolering, och sen blir det varmt. |
| 10:58 | röst | pappa | Hej. Det är pappa. · STORY |
| 11:01 | röst | du | Hej pappa. · STORY |
| 11:03 | röst | pappa | Mamma står bredvid. Hon säger att jag ska fråga om du äter. · STORY |
| 11:09 | röst | du | Jag äter. Och jag har en egen kvarn nu. Och en 3D-skrivare. · STORY |
| 11:15 | röst | pappa | Jaha. En kvarn. Vad lugnt då. · STORY |
| 11:19 | röst | pappa | Jag kanske kommer förbi nån dag. Om det passar. · STORY |
| 11:21 | röst | du | Det passar. · STORY |
| 11:24 | röst | pappa | Bra. Hej då då. · STORY |
| 11:34 | händelse | samtalSlut | id=pappa4 |
| 11:34 | struken | kedja | samtal4 |
| 11:34 | sak | ali | Ali igen. Jag har sagt till min bror att jag inte går i pension. Jag startar något. Han skrattade. Jag skrattade också. Men jag menar det. Tack. Säg inget. |
| 11:34 | sms | ali | Ali igen. Jag har sagt till min bror att jag inte går i pension. Jag startar något. Han skrattade. Jag skrattade också. Men jag menar det. Tack. Säg inget. |
| 11:34 | sms-bubbla | ali | Ali igen. Jag har sagt till min bror att jag inte går i pension. Jag startar något. Han skrattade. Jag skrattade också. Men jag menar det. Tack. Säg inget. |
| 11:34 | röst | ali | Ali igen. Jag har sagt till min bror att jag inte går i pension. Jag startar något. Han skrattade. Jag skrattade också. Men jag menar det. Tack. Säg inget. · SMÅPRAT |
| 11:40 | toast | guld | 3D-modell köpt – printa isolerskiva (vägg) på skrivaren |
| 11:40 | händelse | kopt | sak=vaggar |
| 11:47 | klar | ali | Ali igen. Jag har sagt till min bror att jag inte går i pension. Jag startar något. Han skrattade. Jag skrattade också. Men jag menar det. Tack. Säg inget. |
| 11:48 | händelse | printStart | sak=byggsats:vaggar |
| 11:52 | händelse | printKlar | sak=byggsats:vaggar n=1 |
| 11:52 | toast | guld | ✅ |
| 11:53 | händelse | tagitUrPrint | sak=byggsats:vaggar n=1 |
| 11:57 | väntar | info:guld | 🧱 Bakväggen klar. 3 kvar. |
| 11:57 | sak | info:guld | 🧱 Bakväggen klar. 3 kvar. |
| 11:57 | kvitto-visas | info:guld | 🧱 Bakväggen klar. 3 kvar. |
| 11:57 | toast | guld | 🧱 Bakväggen klar. 3 kvar. |
| 11:59 | klar | info:guld | 🧱 Bakväggen klar. 3 kvar. |
| 12:06 | händelse | printStart | sak=byggsats:vaggar |
| 12:10 | händelse | printKlar | sak=byggsats:vaggar n=1 |
| 12:10 | toast | guld | ✅ |
| 12:11 | händelse | tagitUrPrint | sak=byggsats:vaggar n=1 |
| 12:15 | väntar | info:guld | 🧱 Vänster vägg klar. 2 kvar. |
| 12:15 | sak | info:guld | 🧱 Vänster vägg klar. 2 kvar. |
| 12:15 | kvitto-visas | info:guld | 🧱 Vänster vägg klar. 2 kvar. |
| 12:15 | toast | guld | 🧱 Vänster vägg klar. 2 kvar. |
| 12:15 | händelse | malKlart | id=n3-isolera-tva-vaggar del=Dag 4 – Kärran och mer vind nasta=sov4 |
| 12:15 | paket |  | lapp |
| 12:15 | väntar | du | Dag 4 är slut. Nu vet grannen att jag bor HÄR. Han verkar inte glad. En skrivare räcker inte. |
| 12:15 | MÅL |  | Klart för idag – sov när du vill |
| 12:17 | klar | info:guld | 🧱 Vänster vägg klar. 2 kvar. |
| 12:19 | målruta |  | Klart för idag – sov när du vill |
| 12:19 | kvittens-bock |  | ✓ Isolera två väggar · 2/2 |
| 12:19 | sak | du | (nytt mål i rutan) |
| 12:19 | pil |  | Klart för idag – sov när du vill |
| 12:19 | klar | du | (nytt mål i rutan) |
| 12:21 | sak | du | Dag 4 är slut. Nu vet grannen att jag bor HÄR. Han verkar inte glad. En skrivare räcker inte. |
| 12:21 | lapp | 📔 Dagbok | Dag 4 är slut. Nu vet grannen att jag bor HÄR. Han verkar inte glad. En skrivare räcker inte. |
| 12:21 | meddelande | du | Dag 4 är slut. Nu vet grannen att jag bor HÄR. Han verkar inte glad. En skrivare räcker inte. |
| 12:21 | dagbokkort | du | Dag 4 är slut. Nu vet grannen att jag bor HÄR. Han verkar inte glad. En skrivare räcker inte. |
| 12:21 | röst | du | Dag 4. 18 dagar till jul. Dag 4 är slut. Nu vet grannen att jag bor HÄR. Han verkar inte glad. En skrivare räcker inte. · STORY |
| 12:31 | händelse | brevLast | id=kvall4 |
| 12:31 | klar | du | Dag 4 är slut. Nu vet grannen att jag bor HÄR. Han verkar inte glad. En skrivare räcker inte. |
| 12:31 | väntar | notis:🌇 Klockan är 21. Ali slår igen luckan.  | 🌇 Klockan är 21. Ali slår igen luckan. Dagens jobb är klart – gå in i skjulet och sov i sängen. |
| 12:36 | nattkort | du | 🌙 Dag 4 är slut. God natt. zzz… DAGENS PRINTAR Blomkruka × 16 Pall × 3 Grillspade × 1 Totalt 20 printar 💰 Tjänat i dag +2 049 kr |

<details><summary>Botens handlingar dag 4</summary>

- 0:00 — dag 4 börjar — (2040 kr)
- 0:08 popup: "FORTSÄTT" (2040 kr)
- 0:26 gå till Rolfs postlåda (28 m) (2040 kr)
- 0:34 panel: "Rolfs postlåda
Det här låg i l" (2160 kr)
- 0:35 tjänar pengar till väntar på sopbilen (BO): 2160/2220 kr → printar blomkruka (105 kr) (2160 kr)
- 0:36 gå till skrivaren (8 m) (2160 kr)
- 0:38 printar Blomkruka (2160 kr)
- 0:42 tar ut 1 st ur skrivaren (2160 kr)
- 0:48 gå till Ali (26 m) (2160 kr)
- 0:48 öppnar Alis butik – sälja (2160 kr)
- 0:49 säljer hos Ali: +105 kr (2265 kr)
- 1:03 tjänar pengar till väntar på sopbilen (BO): 2265/2325 kr → printar blomkruka (105 kr) (2265 kr)
- 1:15 plockar 4 skräp på tippen (bär max 16) (2265 kr)
- 1:18 gå till kvarnen (10 m) (2265 kr)
- 1:25 gå till skrivaren (5 m) (2265 kr)
- 1:26 printar Blomkruka (2265 kr)
- 1:30 tar ut 1 st ur skrivaren (2265 kr)
- 1:36 gå till Ali (27 m) (2265 kr)
- 1:36 öppnar Alis butik – sälja (2265 kr)
- 1:38 säljer hos Ali: +105 kr (2370 kr)
- 1:41 tjänar pengar till väntar på sopbilen (BO): 2370/2430 kr → printar blomkruka (105 kr) (2370 kr)
- 1:46 gå till skrivaren (24 m) (2370 kr)
- 1:48 printar Blomkruka (2370 kr)
- 1:52 tar ut 1 st ur skrivaren (2370 kr)
- 1:57 gå till Ali (24 m) (2370 kr)
- 1:57 öppnar Alis butik – sälja (2370 kr)
- 1:59 säljer hos Ali: +105 kr (2475 kr)
- 2:02 tjänar pengar till väntar på sopbilen (BO): 2475/2535 kr → printar blomkruka (105 kr) (2475 kr)
- 2:07 gå till skrivaren (24 m) (2475 kr)
- 2:09 printar Blomkruka (2475 kr)
- 2:13 tar ut 1 st ur skrivaren (2475 kr)
- 2:18 gå till Ali (24 m) (2475 kr)
- 2:18 öppnar Alis butik – sälja (2475 kr)
- 2:20 säljer hos Ali: +105 kr (2580 kr)
- 2:23 tjänar pengar till väntar på sopbilen (BO): 2580/2640 kr → printar blomkruka (105 kr) (2580 kr)
- 2:28 gå till skrivaren (24 m) (2580 kr)
- 2:30 printar Blomkruka (2580 kr)
- 2:33 tar ut 1 st ur skrivaren (2580 kr)
- 2:39 gå till Ali (24 m) (2580 kr)
- 2:39 öppnar Alis butik – sälja (2580 kr)
- 2:40 säljer hos Ali: +105 kr (2685 kr)
- 2:44 tjänar pengar till väntar på sopbilen (BO): 2685/2745 kr → printar blomkruka (105 kr) (2685 kr)
- 2:49 gå till skrivaren (24 m) (2685 kr)
- 2:50 printar Blomkruka (2685 kr)
- 2:54 tar ut 1 st ur skrivaren (2685 kr)
- 3:00 gå till Ali (24 m) (2685 kr)
- 3:00 öppnar Alis butik – sälja (2685 kr)
- 3:01 säljer hos Ali: +105 kr (2790 kr)
- 3:15 gå till Rolfs postlåda (31 m) (2790 kr)
- 3:21 plockar 4 skräp på tippen (bär max 16) (2790 kr)
- 3:23 gå till kvarnen (10 m) (2790 kr)
- 3:29 gå till skrivaren (5 m) (2790 kr)
- 3:31 printar Grillspade (2790 kr)
- 3:36 tar ut 1 st ur skrivaren (2790 kr)
- 3:48 popup: "Bara en katt." (2790 kr)
- 3:58 popup: "Läst" (2790 kr)
- 4:00 valj grillspade: true, vald grillspade, post {"l":null,"tr":null,"tm":[]}, nummer false (2790 kr)
- 4:02 gå till Rolfs postlåda (8 m) (2790 kr)
- 4:19 fyller kärran med 8 skräp (2790 kr)
- 4:21 gå till kvarnen (12 m) (2790 kr)
- 4:30 tjänar pengar till väntar på flaskhalsen för matarband: 2790/2830 kr → printar blomkruka (105 kr) (2790 kr)
- 4:31 gå till skrivaren (5 m) (2790 kr)
- 4:33 printar Blomkruka (2790 kr)
- 4:37 tar ut 1 st ur skrivaren (2790 kr)
- 4:42 gå till Ali (26 m) (2790 kr)
- 4:42 öppnar Alis butik – sälja (2790 kr)
- 4:44 säljer hos Ali: +105 kr (2895 kr)
- 4:51 tjänar pengar till väntar på flaskhalsen för matarband: 2895/2935 kr → printar blomkruka (105 kr) (2895 kr)
- 4:56 gå till skrivaren (24 m) (2895 kr)
- 4:58 printar Blomkruka (2895 kr)
- 5:02 tar ut 1 st ur skrivaren (2895 kr)
- 5:07 gå till Ali (24 m) (2895 kr)
- 5:07 öppnar Alis butik – sälja (2895 kr)
- 5:09 säljer hos Ali: +105 kr (3000 kr)
- 5:11 tjänar pengar till väntar på flaskhalsen för matarband: 3000/3040 kr → printar blomkruka (105 kr) (3000 kr)
- 5:16 gå till skrivaren (24 m) (3000 kr)
- 5:18 printar Blomkruka (3000 kr)
- 5:22 tar ut 1 st ur skrivaren (3000 kr)
- 5:27 gå till Ali (24 m) (3000 kr)
- 5:27 öppnar Alis butik – sälja (3000 kr)
- 5:29 säljer hos Ali: +105 kr (3105 kr)
- 5:37 tjänar pengar till väntar på flaskhalsen för matarband: 3105/3145 kr → printar blomkruka (105 kr) (3105 kr)
- 5:42 gå till skrivaren (24 m) (3105 kr)
- 5:44 printar Blomkruka (3105 kr)
- 5:48 tar ut 1 st ur skrivaren (3105 kr)
- 5:53 gå till Ali (24 m) (3105 kr)
- 5:53 öppnar Alis butik – sälja (3105 kr)
- 5:55 säljer hos Ali: +105 kr (3210 kr)
- 5:57 tjänar pengar till väntar på flaskhalsen för matarband: 3210/3250 kr → printar blomkruka (105 kr) (3210 kr)
- 6:02 gå till skrivaren (24 m) (3210 kr)
- 6:04 printar Blomkruka (3210 kr)
- 6:08 tar ut 1 st ur skrivaren (3210 kr)
- 6:13 gå till Ali (24 m) (3210 kr)
- 6:13 öppnar Alis butik – sälja (3210 kr)
- 6:15 säljer hos Ali: +105 kr (3315 kr)
- 6:17 tjänar pengar till väntar på flaskhalsen för matarband: 3315/3355 kr → printar blomkruka (105 kr) (3315 kr)
- 6:22 gå till skrivaren (24 m) (3315 kr)
- 6:23 printar Blomkruka (3315 kr)
- 6:27 tar ut 1 st ur skrivaren (3315 kr)
- 6:33 gå till Ali (24 m) (3315 kr)
- 6:33 öppnar Alis butik – sälja (3315 kr)
- 6:34 säljer hos Ali: +3 kr (3318 kr)
- 6:35 tjänar pengar till väntar på flaskhalsen för matarband: 3318/3355 kr → printar blomkruka (105 kr) (3318 kr)
- 6:41 gå till skrivaren (24 m) (3318 kr)
- 6:42 printar Blomkruka (3318 kr)
- 6:46 gå till kvarnen (1 m) (3318 kr)
- 6:48 gå till skrivaren (4 m) (3318 kr)
- 6:48 tar ut 1 st ur skrivaren (3318 kr)
- 6:54 gå till Ali (26 m) (3318 kr)
- 6:54 öppnar Alis butik – sälja (3318 kr)
- 6:56 säljer hos Ali: +105 kr (3423 kr)
- 6:58 tjänar pengar till väntar på flaskhalsen för matarband: 3423/3463 kr → printar blomkruka (105 kr) (3423 kr)
- 7:03 gå till skrivaren (24 m) (3423 kr)
- 7:04 printar Blomkruka (3423 kr)
- 7:08 tar ut 1 st ur skrivaren (3423 kr)
- 7:14 gå till Ali (24 m) (3423 kr)
- 7:14 öppnar Alis butik – sälja (3423 kr)
- 7:15 säljer hos Ali: +105 kr (3528 kr)
- 7:17 tjänar pengar till väntar på flaskhalsen för matarband: 3528/3568 kr → printar blomkruka (105 kr) (3528 kr)
- 7:23 gå till skrivaren (24 m) (3528 kr)
- 7:24 printar Blomkruka (3528 kr)
- 7:28 tar ut 1 st ur skrivaren (3528 kr)
- 7:33 gå till Ali (24 m) (3528 kr)
- 7:33 öppnar Alis butik – sälja (3528 kr)
- 7:35 säljer hos Ali: +105 kr (3633 kr)
- 7:37 tjänar pengar till väntar på flaskhalsen för matarband: 3633/3673 kr → printar blomkruka (105 kr) (3633 kr)
- 7:42 gå till skrivaren (24 m) (3633 kr)
- 7:44 printar Blomkruka (3633 kr)
- 7:48 tar ut 1 st ur skrivaren (3633 kr)
- 7:53 gå till Ali (24 m) (3633 kr)
- 7:53 öppnar Alis butik – sälja (3633 kr)
- 7:55 säljer hos Ali: +105 kr (3738 kr)
- 7:57 öppnar Alis butik – köpa sophållare (3738 kr)
- 8:00 köper matarband för 120 kr (3618 kr)
- 8:06 gå till skrivaren (24 m) (3618 kr)
- 8:07 printar Sophållare (3 delar) (3618 kr)
- 8:27 tar ut 1 st ur skrivaren (3618 kr)
- 8:28 gå till kvarnen (5 m) (3618 kr)
- 8:48 gå till Ali (29 m) (3618 kr)
- 8:48 öppnar Alis butik – köpa receptet pall (3618 kr)
- 8:50 köper pall för 80 kr (3538 kr)
- 8:56 gå till skrivaren (24 m) (3538 kr)
- 8:58 printar Pall (3538 kr)
- 9:04 tar ut 1 st ur skrivaren (3538 kr)
- 9:08 gå till platsen för pall (20 m) (3538 kr)
- 9:09 ställer ut pall (3538 kr)
- 9:11 tjänar pengar till väntar på flaskhalsen för vindsnurra2: 3538/3578 kr → printar pall (180 kr) (3538 kr)
- 9:23 plockar 4 skräp på tippen (bär max 16) (3538 kr)
- 9:25 gå till kvarnen (12 m) (3538 kr)
- 9:34 gå till skrivaren (5 m) (3538 kr)
- 9:35 printar Pall (3538 kr)
- 9:42 tar ut 1 st ur skrivaren (3538 kr)
- 9:47 gå till Ali (27 m) (3538 kr)
- 9:47 öppnar Alis butik – sälja (3538 kr)
- 9:49 säljer hos Ali: +180 kr (3718 kr)
- 9:50 tjänar pengar till väntar på flaskhalsen för vindsnurra2: 3718/3758 kr → printar pall (171 kr) (3718 kr)
- 9:55 gå till skrivaren (24 m) (3718 kr)
- 9:57 printar Pall (3718 kr)
- 10:03 tar ut 1 st ur skrivaren (3718 kr)
- 10:08 gå till Ali (24 m) (3718 kr)
- 10:08 öppnar Alis butik – sälja (3718 kr)
- 10:10 säljer hos Ali: +171 kr (3889 kr)
- 10:18 öppnar Alis butik – köpa vindsnurra till skjultaket (3889 kr)
- 10:20 köper vindsnurra för 133 kr (3756 kr)
- 10:27 gå till skrivaren (24 m) (3756 kr)
- 10:28 printar Vindsnurra till skjultaket (3756 kr)
- 10:33 tar ut 1 st ur skrivaren (3756 kr)
- 10:41 gå till sätt vindsnurran på taket (18 m) (3756 kr)
- 10:48 popup: "FORTSÄTT" (3756 kr)
- 10:58 popup: "Svara E" (3756 kr)
- 11:07 popup: "Nästa E" (3756 kr)
- 11:16 popup: "Nästa E" (3756 kr)
- 11:24 popup: "Nästa E" (3756 kr)
- 11:28 popup: "Nästa E" (3756 kr)
- 11:34 popup: "Lägg på E" (3756 kr)
- 11:38 gå till Ali (20 m) (3756 kr)
- 11:38 öppnar Alis butik – köpa isolerskiva (vägg) (3756 kr)
- 11:41 köper vaggar för 130 kr (3626 kr)
- 11:47 gå till skrivaren (24 m) (3626 kr)
- 11:48 printar Isolerskiva (vägg) (3626 kr)
- 11:53 tar ut 1 st ur skrivaren (3626 kr)
- 11:57 gå till skjulet (bak) (17 m) (3626 kr)
- 12:05 gå till skrivaren (17 m) (3626 kr)
- 12:06 printar Isolerskiva (vägg) (3626 kr)
- 12:11 tar ut 1 st ur skrivaren (3626 kr)
- 12:15 gå till skjulet (vanster) (17 m) (3626 kr)
- 12:31 popup: "FORTSÄTT" (3626 kr)
- 12:33 gå till sängen (1 m) (3626 kr)

</details>

## Dag 5

| Tid | Källa | Vem | Text |
|---|---|---|---|
| 12:36 | vara | ali | pall |
| 12:36 | händelse | malKlart | id=sov4 del=Dag 4 – Kärran och mer vind nasta=rolf3-brev |
| 12:36 | MÅL |  | Vänta på sopbilen. Den lämnar något. |

<details><summary>Botens handlingar dag 5</summary>

- 0:00 — dag 5 börjar — (3626 kr)

</details>
