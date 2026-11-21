# Simulering kapitel 1 – körning 1

*Gjord 2026-11-21 10:21 med `verktyg/sim-kapitel1.mjs` + `verktyg/sim-bot.js` (punkt AX). Boten går 4,5 m/s, läser 15 tecken/s, trampar, vevar, plockar, printar, köper och säljer via spelets egna funktioner. Tiderna är speltid.*

## Sammanfattning

| Dag | Minuter | Väntan | Prints (totalt) | Kr vid sömn | Bär | Trivsel |
|---|---|---|---|---|---|---|
| 1 | 10.9 | 2 % | 25 | 255 | 6 | 19 |
| 2 | 11.3 | 2 % | 42 | 1632 | 10 | 41 |
| 3 | 11.2 | 3 % | 56 | 2037 | 16 | 78 |
| 4 | 0.0 | 0 % | 56 | 2037 | 16 | 78 |

## Flaskhalskartan (EE)

| Dag | bara | mala | trampa | strom | skrivare | inkomst | Upplåst |
|---|---|---|---|---|---|---|---|
| 1 | 7 | 8 | 23 | 12 | 74 | 23 | grip (bara, 7:50, reserv), kruka (inkomst, 9:05) |
| 2 | 2 | 11 | 11 | 25 | 322 | 0 | kvarnmotor (mala, 3:27), rullstall (skrivare, 5:45), trim_skrivare (skrivare, 7:05), vindsnurra (trampa, 9:15, reserv) |
| 3 | 2 | 11 | 0 | 15 | 403 | 0 | cykelbatteri (strom, 6:29, reserv), ryggkorg (bara, 6:51), skrivare2 (skrivare, 8:17) |
| 4 | 0 | 0 | 0 | 0 | 0 | 0 |  |

TIDIG: 0 · FAST: 0 · upplåst av reserven (målet väntade 3 min): 3

**SKRATT:** 28 roliga ögonblick på 33 min (8.4 per 10 min, mål minst 5)

**Köp:**

- dag 1 2:51 – gammalkvarn (30 kr)
- dag 1 8:26 – grip (50 kr)
- dag 1 9:13 – kruka (40 kr)
- dag 1 9:55 – sang (60 kr)
- dag 2 3:54 – kvarnmotor (50 kr)
- dag 2 9:27 – vindsnurra (133 kr)
- dag 2 10:11 – dorr (120 kr)
- dag 3 6:44 – cykelbatteri (30 kr)
- dag 3 7:12 – ryggkorg (120 kr)
- dag 3 7:45 – bord (120 kr)
- dag 3 8:31 – skrivare2 (500 kr)
- dag 3 10:07 – tak (250 kr)

## Storykedjan (kvittens → varför → nytt mål)

| Dag | Tid | Id | Kvittens | Varför | Nytt mål | Tid till målet |
|---|---|---|---|---|---|---|
| 1 | 0:35 | lastat | Tung. Den har storebror aldrig burit så långt. |  | Skrivaren ställer jag där borta, mot skräpberget. Min första | 4.4 s |
| 1 | 1:53 | printStart | Den piper. Den GÖR något. |  | En nyckelring till, så länge storebrors rulle räcker. | 6.7 s |
| 1 | 1:58 | printKlar | Klar! Ta ut den innan den ändrar sig. |  | En nyckelring till, så länge storebrors rulle räcker. | 3.1 s |
| 1 | 9:25 | krukaD1 | En kruka. Mamma skulle bli så stolt. Hon får inte veta. |  | Jag kan inte sova på betongen en natt till. Ali har en säng. | 7.1 s |
| 2 | 9:51 | vindsnurra | Den snurrar! Långsamt. Men den snurrar. | Om det regnar i natt drunknar jag. Ett tak. | Det drar från dörrhålet. En dörr kan jag printa. | 4.3 s |

## Hur länge nya mål väntade (från att förra målet blev klart till att det nya syntes i målrutan)

Snitt 3.9 s · max 17.5 s · över 4 s: 9 · över 8 s: 7 av 40

## Flaggor (33)

- **LUGN** dag 2 0:08: 0.0 s efter BÖRJA DAGEN: [lapp] "Första natten i en riktig säng. Jag printade den själv."
- **LUGN** dag 2 0:08: 0.0 s efter BÖRJA DAGEN: [meddelande] "Första natten i en riktig säng. Jag printade den själv."
- **LUGN** dag 2 0:08: 0.2 s efter BÖRJA DAGEN: [röst] "Dag 2. 20 dagar till jul. Första natten i en riktig säng. Ja"
- **LUGN** dag 2 0:09: 0.5 s efter BÖRJA DAGEN: [notis] "Ali vill ha idag · Blomkruka · +50 %"
- **KROCK** dag 2 0:09: 0.5 s mellan [meddelande] "Första natten i en riktig säng. Jag printade den själv." och [notis] "Ali vill ha idag · Blomkruka · +50 %"
- **KEDJA** dag 1 0:35: lastat: nytt mål 4.4 s efter kedjan (max 2 s)
- **KEDJA** dag 1 1:53: printStart: nytt mål 6.7 s efter kedjan (max 2 s)
- **KEDJA** dag 1 9:25: krukaD1: nytt mål 7.1 s efter kedjan (max 2 s)
- **KEDJA** dag 2 9:51: vindsnurra: nytt mål 4.3 s efter kedjan (max 2 s)
- **SEN** dag 1 5:10: 66.1 s efter händelsen: kjelle: "God morgon, det är Kjelle på Radio Tippen! Det har flyttat in någon i "
- **SEN** dag 1 9:24: 19.2 s efter händelsen: ali: "Ali här. Jag såg Skräpgrip på avstånd. Ett streck blev lite snett. Mit"
- **SEN** dag 2 2:29: 97.2 s efter händelsen: du: "Jaha. En kalsong. Använd."
- **SEN** dag 2 2:41: 72.7 s efter händelsen: notis:Storebrors skrivare: Ingen ström – tramp: "Storebrors skrivare: Ingen ström – trampa cykeln"
- **SEN** dag 2 2:53: 66.9 s efter händelsen: kjelle: "Radio Tippen, Kjelle här. Skjulet vid tippen har fått generator. Vi ta"
- **SEN** dag 3 3:30: 15.4 s efter händelsen: du: "En hel kanot. Kvarnen skulle äta upp sig själv."
- **SEN** dag 3 7:23: 19.4 s efter händelsen: värld:TUUT TUUT!: "TUUT TUUT!"
- **SEN** dag 3 7:56: 18.9 s efter händelsen: ali: "Ali här. Du printade Ryggkorg från min ritning. Och det FUNKAR? Jag ha"
- **SEN** dag 3 10:18: 86.0 s efter händelsen: du: "Däcket ville inte stanna. Jag förstår det."
- **SEN** dag 3 10:30: 68.3 s efter händelsen: notis:Storebrors skrivare: Tornet är tomt – ma: "Storebrors skrivare: Tornet är tomt – mal mer så fortsätter den"
- **PAUS** dag 1 0:32: 0.0 s paus före "Skrivaren står kvar på cykeln. Den ska av."
- **SAMTIDIGT** dag 1 0:32: "Skrivaren står kvar på cykeln. Den ska a" och "(nytt mål i rutan)"
- **PAUS** dag 1 0:39: 0.0 s paus före "🖨️ Storebrors skrivare. Den ska stå där borta, mo"
- **SAMTIDIGT** dag 1 1:51: "Okej. Välj nåt litet att printa." och "Strömmen finns. Nu ska skrivaren veta va"
- **PAUS** dag 1 1:56: 0.0 s paus före "Den piper. Den GÖR något."
- **PAUS** dag 1 1:59: 0.7 s paus före "Klar! Ta ut den innan den ändrar sig."
- **PAUS** dag 1 3:29: 0.0 s paus före "Kvarnen funkar. Soptippen är en gruva."
- **PAUS** dag 1 9:32: 0.0 s paus före "Ali gillar krukor. Han sa det själv."
- **PAUS** dag 1 9:35: 0.0 s paus före "En kruka. Mamma skulle bli så stolt. Hon får inte "
- **PAUS** dag 2 4:44: 0.0 s paus före "Gården är STÄDAD. Av mig. Frivilligt. Mamma skulle"
- **PAUS** dag 2 9:43: 0.0 s paus före "🌬️ Vindsnurran ligger i handen – klicka på skjule"
- **PAUS** dag 2 9:55: 0.0 s paus före "🌬️ Vindsnurran sitter på taket – den trampar cyke"
- **TORRT** dag 1 4:37: 268 s utan roligt ögonblick
- **TEMPO** dag 4 0:00: dag 4 tog 0.0 min (mål 10–15)

Sidfel: inga

## Dag 1

| Tid | Källa | Vem | Text |
|---|---|---|---|
| 0:00 | MÅL |  | Lasta av skrivaren |
| 0:00 | MÅL |  | Lasta av skrivaren |
| 0:04 | sak | bud | (tips) |
| 0:05 | väntar | du | Se så mycket skräp här är. Det är ju en guldgruva! |
| 0:06 | klar | bud | (tips) |
| 0:08 | sak | du | Se så mycket skräp här är. Det är ju en guldgruva! |
| 0:08 | röst | du | Se så mycket skräp här är. Det är ju en guldgruva! · STORY |
| 0:13 | sak-del | du | Men först en skylt, så att alla vet var jag bor. |
| 0:13 | röst | du | Men först en skylt, så att alla vet var jag bor. · STORY |
| 0:15 | väntar | du | Spikade ihop en skylt av lösa bräder från skräpberget. Soptippsvägen 1. Det är inte mycket för världen. Men det är MITT. |
| 0:15 | varför | du | Skrivaren står kvar på cykeln. Den ska av. |
| 0:15 | väntar | du | Skrivaren står kvar på cykeln. Den ska av. |
| 0:17 | klar | du | Se så mycket skräp här är. Det är ju en guldgruva! |
| 0:20 | sak | du | Spikade ihop en skylt av lösa bräder från skräpberget. Soptippsvägen 1. Det är inte mycket för världen. Men det är MITT. |
| 0:20 | kvitto-visas | du | Spikade ihop en skylt av lösa bräder från skräpberget. Soptippsvägen 1. Det är inte mycket för världen. Men det är MITT. |
| 0:20 | lapp | 📔 Dagbok | Spikade ihop en skylt av lösa bräder från skräpberget. Soptippsvägen 1. Det är inte mycket för världen. Men det är MITT. |
| 0:20 | meddelande | du | Spikade ihop en skylt av lösa bräder från skräpberget. Soptippsvägen 1. Det är inte mycket för världen. Men det är MITT. |
| 0:20 | dagbokkort | du | Spikade ihop en skylt av lösa bräder från skräpberget. Soptippsvägen 1. Det är inte mycket för världen. Men det är MITT. |
| 0:20 | röst | du | Dag 1. 21 dagar till jul. Spikade ihop en skylt av lösa bräder från skräpberget. Soptippsvägen 1. Det är inte mycket för världen. Men det är MITT. · STORY |
| 0:32 | händelse | brevLast | id=skylt |
| 0:32 | klar | du | Spikade ihop en skylt av lösa bräder från skräpberget. Soptippsvägen 1. Det är inte mycket för världen. Men det är MITT. |
| 0:32 | sak | du | Skrivaren står kvar på cykeln. Den ska av. |
| 0:32 | struken | du | Skrivaren står kvar på cykeln. Den ska av. |
| 0:32 | sak | du | (nytt mål i rutan) |
| 0:33 | klar | du | (nytt mål i rutan) |
| 0:35 | struken | info:info | ⏎ Enter – hoppa över |
| 0:35 | händelse | lastatAv | sak=skrivare |
| 0:35 | paket |  | sms |
| 0:35 | väntar | mamma | Hur kunde du bara gå? Är du ok? Svara när jag ringer! |
| 0:35 | kvittens | du | Tung. Den har storebror aldrig burit så långt. |
| 0:35 | väntar | du | Tung. Den har storebror aldrig burit så långt. |
| 0:35 | väntar | info:bra | 🖨️ Storebrors skrivare. Den ska stå där borta, mot skräpberget. |
| 0:35 | sak | du | Tung. Den har storebror aldrig burit så långt. |
| 0:35 | notis | tanke | 💭 Tung. Den har storebror aldrig burit så långt. |
| 0:35 | röst | du | Tung. Den har storebror aldrig burit så långt. · STORY |
| 0:35 | händelse | malKlart | id=lasta del=Dag 1 – Kom igång nasta=stall |
| 0:35 | väntar | du | Skrivaren ställer jag där borta, mot skräpberget. Min första verkstad. |
| 0:35 | MÅL |  | Ställ upp skrivaren |
| 0:39 | målruta |  | Ställ upp skrivaren |
| 0:39 | klar | du | Tung. Den har storebror aldrig burit så långt. |
| 0:39 | sak | info:bra | 🖨️ Storebrors skrivare. Den ska stå där borta, mot skräpberget. |
| 0:39 | kvitto-visas | info:bra | 🖨️ Storebrors skrivare. Den ska stå där borta, mot skräpberget. |
| 0:39 | toast | bra | 🖨️ Storebrors skrivare. Den ska stå där borta, mot skräpberget. |
| 0:40 | hjälp | kontroll | E: Ryggsäcken och kistan |
| 0:41 | klar | info:bra | 🖨️ Storebrors skrivare. Den ska stå där borta, mot skräpberget. |
| 0:43 | sak | du | Skrivaren ställer jag där borta, mot skräpberget. Min första verkstad. |
| 0:43 | pil |  | Ställ upp skrivaren |
| 0:43 | notis | tanke | 💭 Skrivaren ställer jag där borta, mot skräpberget. Min första verkstad. |
| 0:43 | röst | du | Skrivaren ställer jag där borta, mot skräpberget. Min första verkstad. · MÅL |
| 0:43 | nick |  | nick:1 |
| 0:49 | klar | du | Skrivaren ställer jag där borta, mot skräpberget. Min första verkstad. |
| 0:51 | väntar | info:bra | 🖨️ Storebrors skrivare står på sin plats |
| 0:51 | händelse | placerat | sak=skrivareS |
| 0:51 | paket |  | tanke |
| 0:51 | tanke | du | Storebrors rulle. Den räcker inte länge. |
| 0:51 | väntar | du | Storebrors rulle. Den räcker inte länge. |
| 0:51 | duns | du | ställs ner |
| 0:51 | sak | info:bra | 🖨️ Storebrors skrivare står på sin plats |
| 0:51 | kvitto-visas | info:bra | 🖨️ Storebrors skrivare står på sin plats |
| 0:51 | toast | bra | 🖨️ Storebrors skrivare står på sin plats |
| 0:51 | händelse | malKlart | id=stall del=Dag 1 – Kom igång nasta=strom |
| 0:51 | struken | du | Storebrors rulle. Den räcker inte länge. |
| 0:51 | väntar | du | Skrivaren behöver ström. Hur fixar jag det här ute? |
| 0:51 | MÅL |  | Skrivaren behöver ström |
| 0:53 | klar | info:bra | 🖨️ Storebrors skrivare står på sin plats |
| 0:53 | målruta |  | Skrivaren behöver ström |
| 0:55 | kvittens-bock |  | ✓ Ställ upp skrivaren |
| 0:55 | sak | du | Skrivaren behöver ström. Hur fixar jag det här ute? |
| 0:55 | pil |  | Skrivaren behöver ström |
| 0:55 | notis | tanke | 💭 Skrivaren behöver ström. Hur fixar jag det här ute? |
| 0:55 | röst | du | Skrivaren behöver ström. Hur fixar jag det här ute? · MÅL |
| 0:56 | nick |  | nick:2 |
| 1:00 | klar | du | Skrivaren behöver ström. Hur fixar jag det här ute? |
| 1:31 | paket |  | tanke |
| 1:31 | tanke | du | Cykeln… och storebrors generator? |
| 1:31 | väntar | du | Cykeln… och storebrors generator? |
| 1:31 | sak | du | Cykeln… och storebrors generator? |
| 1:31 | kvitto-visas | du | Cykeln… och storebrors generator? |
| 1:31 | notis | tanke | 💭 Cykeln… och storebrors generator? |
| 1:31 | röst | du | Cykeln… och storebrors generator? · STORY |
| 1:31 | händelse | malKlart | id=strom del=Dag 1 – Kom igång nasta=bygg |
| 1:31 | väntar | du | Om jag trampar ström med cykeln kan skrivaren gå. Cykeln där, generatorn bredvid. |
| 1:32 | MÅL |  | Ställ cykel och generator |
| 1:34 | klar | du | Cykeln… och storebrors generator? |
| 1:34 | målruta |  | Ställ cykel och generator |
| 1:35 | paket |  | tanke |
| 1:35 | tanke | du | Storebrors generator. Den gör el av trampandet. |
| 1:35 | väntar | du | Storebrors generator. Den gör el av trampandet. |
| 1:35 | händelse | placerat | sak=generator |
| 1:35 | duns | du | ställs ner |
| 1:35 | kvittens-bock |  | ✓ Skrivaren behöver ström |
| 1:37 | sak | du | Om jag trampar ström med cykeln kan skrivaren gå. Cykeln där, generatorn bredvid. |
| 1:37 | pil |  | Ställ cykel och generator |
| 1:37 | notis | tanke | 💭 Om jag trampar ström med cykeln kan skrivaren gå. Cykeln där, generatorn bredvid. |
| 1:37 | röst | du | Om jag trampar ström med cykeln kan skrivaren gå. Cykeln där, generatorn bredvid. · MÅL |
| 1:38 | ljud | utrustning | Cykeln i famnen |
| 1:38 | händelse | lyft | sak=cykel |
| 1:44 | klar | du | Om jag trampar ström med cykeln kan skrivaren gå. Cykeln där, generatorn bredvid. |
| 1:49 | händelse | placerat | sak=cykel |
| 1:49 | duns | du | ställs ner |
| 1:51 | händelse | ombyggd | sak=cykel |
| 1:51 | varför | du | Okej. Välj nåt litet att printa. |
| 1:51 | väntar | du | Okej. Välj nåt litet att printa. |
| 1:51 | sak | du | Okej. Välj nåt litet att printa. |
| 1:51 | struken | du | Okej. Välj nåt litet att printa. |
| 1:51 | händelse | malKlart | id=bygg del=Dag 1 – Kom igång nasta=valjModell |
| 1:51 | struken | du | Storebrors generator. Den gör el av trampandet. |
| 1:51 | väntar | du | Strömmen finns. Nu ska skrivaren veta vad den ska göra. |
| 1:51 | målruta |  | Välj vad skrivaren ska printa |
| 1:51 | MÅL |  | Välj vad skrivaren ska printa |
| 1:51 | sak | du | Strömmen finns. Nu ska skrivaren veta vad den ska göra. |
| 1:51 | pil |  | Välj vad skrivaren ska printa |
| 1:51 | notis | tanke | 💭 Strömmen finns. Nu ska skrivaren veta vad den ska göra. |
| 1:51 | röst | du | Strömmen finns. Nu ska skrivaren veta vad den ska göra. · MÅL |
| 1:53 | händelse | printStart | sak=nyckelring |
| 1:53 | kvittens | du | Den piper. Den GÖR något. |
| 1:53 | väntar | du | Den piper. Den GÖR något. |
| 1:53 | tanke | du | Den stannar när jag slutar trampa. Ström som sparas hade varit nåt. |
| 1:53 | väntar | du | Den stannar när jag slutar trampa. Ström som sparas hade varit nåt. |
| 1:53 | händelse | malKlart | id=valjModell del=Dag 1 – Kom igång nasta=trampa |
| 1:53 | struken | du | Den stannar när jag slutar trampa. Ström som sparas hade varit nåt. |
| 1:53 | väntar | du | Nu behöver den ström. Trampa. |
| 1:54 | MÅL |  | Trampa cykeln |
| 1:56 | klar | du | Strömmen finns. Nu ska skrivaren veta vad den ska göra. |
| 1:56 | sak | du | Den piper. Den GÖR något. |
| 1:56 | notis | tanke | 💭 Den piper. Den GÖR något. |
| 1:56 | röst | du | Den piper. Den GÖR något. · STORY |
| 1:56 | målruta |  | Trampa cykeln |
| 1:58 | klar | du | Den piper. Den GÖR något. |
| 1:58 | händelse | printKlar | sak=nyckelring n=1 |
| 1:58 | kvittens | du | Klar! Ta ut den innan den ändrar sig. |
| 1:58 | väntar | du | Klar! Ta ut den innan den ändrar sig. |
| 1:58 | händelse | malKlart | id=trampa del=Dag 1 – Kom igång nasta=rullSlut |
| 1:58 | väntar | du | En nyckelring till, så länge storebrors rulle räcker. |
| 1:59 | MÅL |  | En nyckelring till |
| 1:59 | struken | du | Nu behöver den ström. Trampa. |
| 1:59 | sak | du | Klar! Ta ut den innan den ändrar sig. |
| 1:59 | notis | tanke | 💭 Klar! Ta ut den innan den ändrar sig. |
| 1:59 | röst | du | Klar! Ta ut den innan den ändrar sig. · STORY |
| 1:59 | målruta |  | En nyckelring till |
| 1:59 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 1:59 | paket |  | sms |
| 1:59 | väntar | bror | VA FAN?! Fick du igång den?? Jag försökte i typ ett år. Den bara pep. 😳 |
| 1:59 | skratt | bror | VA FAN?! Fick du igång den?? Jag försökt |
| 1:59 | paket |  | sms → ge |
| 1:59 | väntar | bror | Sälj den till Ali, han med affären vid tippen. Han köper gamla grejer. Han köpte min gamla mopedhjälm för 20 spänn. |
| 1:59 | väntar |  | (läget ändras) |
| 2:02 | klar | du | Klar! Ta ut den innan den ändrar sig. |
| 2:03 | sak |  | (läget ändras) |
| 2:03 | klar |  | (läget ändras) |
| 2:04 | händelse | printStart | sak=nyckelring |
| 2:05 | sak | du | En nyckelring till, så länge storebrors rulle räcker. |
| 2:05 | pil |  | En nyckelring till |
| 2:05 | notis | tanke | 💭 En nyckelring till, så länge storebrors rulle räcker. |
| 2:05 | röst | du | En nyckelring till, så länge storebrors rulle räcker. · MÅL |
| 2:09 | klar | du | En nyckelring till, så länge storebrors rulle räcker. |
| 2:15 | toast | guld | Nyckelring är klar – ta ut den |
| 2:15 | väntar | notis:Storebrors skrivare: Nyckelring är klar  | Storebrors skrivare: Nyckelring är klar – ta ut den |
| 2:15 | händelse | printKlar | sak=nyckelring n=2 |
| 2:15 | paket |  | tanke |
| 2:15 | tanke | du | Slut på storebrors rulle. Och här ligger ju plast överallt. Om jag bara kunde göra tråd av skräpet… Affären mitt emot kanske har något. |
| 2:15 | väntar | du | Slut på storebrors rulle. Och här ligger ju plast överallt. Om jag bara kunde göra tråd av skräpet… Affären mitt emot kanske har något. |
| 2:15 | händelse | malKlart | id=rullSlut del=Dag 1 – Kom igång nasta=saljTva |
| 2:15 | MÅL |  | Sälj nyckelringarna |
| 2:15 | sak | du | Slut på storebrors rulle. Och här ligger ju plast överallt. Om jag bara kunde göra tråd av skräpet… Affären mitt emot kanske har något. |
| 2:15 | kvitto-visas | du | Slut på storebrors rulle. Och här ligger ju plast överallt. Om jag bara kunde göra tråd av skräpet… Affären mitt emot kanske har något. |
| 2:15 | notis | tanke | 💭 Slut på storebrors rulle. Och här ligger ju plast överallt. Om jag bara kunde göra tråd av skräpet… Affären mitt emot kanske har något. |
| 2:15 | röst | du | Slut på storebrors rulle. Och här ligger ju plast överallt. Om jag bara kunde göra tråd av skräpet… Affären mitt emot kanske har något. · STORY |
| 2:19 | målruta |  | Sälj nyckelringarna |
| 2:19 | kvittens-bock |  | ✓ En nyckelring till |
| 2:27 | klar | du | Slut på storebrors rulle. Och här ligger ju plast överallt. Om jag bara kunde göra tråd av skräpet… Affären mitt emot kanske har något. |
| 2:27 | sak | du | (nytt mål i rutan) |
| 2:27 | pil |  | Sälj nyckelringarna |
| 2:27 | klar | du | (nytt mål i rutan) |
| 2:28 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 2:29 | struken | bror | VA FAN?! Fick du igång den?? Jag försökte i typ ett år. Den bara pep. 😳 |
| 2:29 | skratt | bror | VA FAN?! Fick du igång den?? Jag försökt |
| 2:29 | struken | notis:Storebrors skrivare: Nyckelring är klar  | Storebrors skrivare: Nyckelring är klar – ta ut den |
| 2:33 | röst | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. · STORY |
| 2:33 | butiksbubbla | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 2:35 | aliSalt | ali | 30 |
| 2:35 | butiksbubbla | ali | Pappas gamla köttkvarn. Den har malt allt utom kött. Trettio kronor, så är den din. |
| 2:36 | väntar | ali | Pappas gamla köttkvarn. Den har malt allt utom kött. Trettio kronor, så är den din. |
| 2:36 | händelse | malKlart | id=saljTva del=Dag 1 – Kom igång nasta=aliKvarn |
| 2:36 | väntar | du | Ali har en gammal kvarn. Den gör tråd av skräp. |
| 2:36 | MÅL |  | Köp kvarnen |
| 2:37 | struken | bror | Sälj den till Ali, han med affären vid tippen. Han köper gamla grejer. Han köpte min gamla mopedhjälm för 20 spänn. |
| 2:37 | sak | ali | Pappas gamla köttkvarn. Den har malt allt utom kött. Trettio kronor, så är den din. |
| 2:37 | röst | ali | Pappas gamla köttkvarn. Den har malt allt utom kött. Trettio kronor, så är den din. · STORY |
| 2:40 | kvittens-bock |  | ✓ Sälj nyckelringarna |
| 2:40 | målruta |  | Köp kvarnen |
| 2:44 | klar | ali | Pappas gamla köttkvarn. Den har malt allt utom kött. Trettio kronor, så är den din. |
| 2:46 | sak | du | Ali har en gammal kvarn. Den gör tråd av skräp. |
| 2:46 | pil |  | Köp kvarnen |
| 2:46 | notis | tanke | 💭 Ali har en gammal kvarn. Den gör tråd av skräp. |
| 2:46 | röst | du | Ali har en gammal kvarn. Den gör tråd av skräp. · MÅL |
| 2:50 | klar | du | Ali har en gammal kvarn. Den gör tråd av skräp. |
| 2:50 | händelse | kopt | sak=gammalkvarn |
| 2:50 | röst | ali | Och kommer du på nåt smart, så vet du var jag bor. · STORY |
| 2:50 | butiksbubbla | ali | Och kommer du på nåt smart, så vet du var jag bor. |
| 2:52 | händelse | malKlart | id=aliKvarn del=Dag 1 – Kom igång nasta=kvarn |
| 2:52 | väntar | du | Kvarnen ställer jag bredvid skrivaren, närmast skräpberget. Där finns skräpet. |
| 2:52 | målruta |  | Ställ kvarnen |
| 2:52 | MÅL |  | Ställ kvarnen |
| 2:53 | sak | du | Kvarnen ställer jag bredvid skrivaren, närmast skräpberget. Där finns skräpet. |
| 2:53 | pil |  | Ställ kvarnen |
| 2:53 | notis | tanke | 💭 Kvarnen ställer jag bredvid skrivaren, närmast skräpberget. Där finns skräpet. |
| 2:53 | röst | du | Kvarnen ställer jag bredvid skrivaren, närmast skräpberget. Där finns skräpet. · MÅL |
| 2:56 | kvittens-bock |  | ✓ Köp kvarnen |
| 2:59 | klar | du | Kvarnen ställer jag bredvid skrivaren, närmast skräpberget. Där finns skräpet. |
| 3:07 | sak | mamma | Hur kunde du bara gå? Är du ok? Svara när jag ringer! |
| 3:07 | sms | mamma | Hur kunde du bara gå? Är du ok? Svara när jag ringer! |
| 3:07 | sms-bubbla | mamma | Hur kunde du bara gå? Är du ok? Svara när jag ringer! |
| 3:07 | röst | mamma | Hur kunde du bara gå? Är du ok? Svara när jag ringer! · STORY |
| 3:07 | händelse | placerat | sak=kvarnen |
| 3:07 | struken | kedja | kvarnStar |
| 3:07 | duns | du | ställs ner |
| 3:07 | händelse | malKlart | id=kvarn del=Dag 1 – Kom igång nasta=flaska |
| 3:07 | väntar | du | Skräp i kvarnen, sen vevar jag. Då blir det tråd. |
| 3:07 | MÅL |  | Gör egen tråd |
| 3:11 | målruta |  | Gör egen tråd |
| 3:11 | kvittens-bock |  | ✓ Ställ kvarnen |
| 3:12 | klar | mamma | Hur kunde du bara gå? Är du ok? Svara när jag ringer! |
| 3:14 | sak | du | Skräp i kvarnen, sen vevar jag. Då blir det tråd. |
| 3:14 | pil |  | Gör egen tråd |
| 3:14 | notis | tanke | 💭 Skräp i kvarnen, sen vevar jag. Då blir det tråd. |
| 3:14 | röst | du | Skräp i kvarnen, sen vevar jag. Då blir det tråd. · MÅL |
| 3:14 | nick |  | nick:10 |
| 3:18 | klar | du | Skräp i kvarnen, sen vevar jag. Då blir det tråd. |
| 3:27 | väntar | foto | Första nyckelringen |
| 3:27 | paket |  | tanke |
| 3:27 | tanke | du | Någon köpte nåt jag gjort. Det här kan funka. |
| 3:27 | väntar | du | Någon köpte nåt jag gjort. Det här kan funka. |
| 3:27 | väntar | info:bra | 3 st i tratten – veva nu! |
| 3:27 | sak | info:bra | 3 st i tratten – veva nu! |
| 3:27 | kvitto-visas | info:bra | 3 st i tratten – veva nu! |
| 3:27 | toast | bra | 3 st i tratten – veva nu! |
| 3:28 | händelse | malKlart | id=flaska del=Dag 1 – Kom igång nasta=egenPrint |
| 3:28 | struken | kedja | trad |
| 3:28 | väntar | du | Kvarnen funkar. Soptippen är en gruva. |
| 3:28 | väntar | du | Min egen tråd. Nu printar jag en nyckelring av den. |
| 3:28 | MÅL |  | Printa med egen tråd |
| 3:29 | klar | info:bra | 3 st i tratten – veva nu! |
| 3:29 | sak | du | Kvarnen funkar. Soptippen är en gruva. |
| 3:29 | kvitto-visas | du | Kvarnen funkar. Soptippen är en gruva. |
| 3:29 | lapp | 📔 Dagbok | Kvarnen funkar. Soptippen är en gruva. |
| 3:29 | meddelande | du | Kvarnen funkar. Soptippen är en gruva. |
| 3:29 | dagbokkort | du | Kvarnen funkar. Soptippen är en gruva. |
| 3:30 | röst | du | Dag 1. 21 dagar till jul. Kvarnen funkar. Soptippen är en gruva. · STORY |
| 3:36 | händelse | brevLast | id=malt |
| 3:36 | klar | du | Kvarnen funkar. Soptippen är en gruva. |
| 3:36 | målruta |  | Printa med egen tråd |
| 3:36 | sak | du | Min egen tråd. Nu printar jag en nyckelring av den. |
| 3:36 | pil |  | Printa med egen tråd |
| 3:36 | notis | tanke | 💭 Min egen tråd. Nu printar jag en nyckelring av den. |
| 3:36 | röst | du | Min egen tråd. Nu printar jag en nyckelring av den. · MÅL |
| 3:41 | klar | du | Min egen tråd. Nu printar jag en nyckelring av den. |
| 3:46 | händelse | printStart | sak=nyckelring |
| 3:46 | toast | bra | 🔗 Slangen kopplad |
| 3:51 | toast | guld | ✅ |
| 3:51 | händelse | printKlar | sak=nyckelring n=3 |
| 3:51 | händelse | malKlart | id=egenPrint del=Dag 1 – Kom igång nasta=salj |
| 3:51 | väntar | du | Affären på andra sidan vägen kanske köper sånt här. |
| 3:51 | MÅL |  | Sälj hos Ali |
| 3:51 | målruta |  | Sälj hos Ali |
| 3:51 | sak | du | Affären på andra sidan vägen kanske köper sånt här. |
| 3:51 | pil |  | Sälj hos Ali |
| 3:51 | notis | tanke | 💭 Affären på andra sidan vägen kanske köper sånt här. |
| 3:51 | röst | du | Affären på andra sidan vägen kanske köper sånt här. · MÅL |
| 3:51 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 3:51 | nick |  | nick:12 |
| 3:55 | kvittens-bock |  | ✓ Printa med egen tråd |
| 3:55 | väntar | kjelle | God morgon, det är Kjelle på Radio Tippen! Det har flyttat in någon i det gamla skjulet. Med en cykel och en skrivare. Spännande, Gunnar. |
| 3:55 | radio | kjelle | God morgon, det är Kjelle på Radio Tippen! Det har flyttat in någon i det gamla skjulet. Med en cykel och en skrivare. Spännande, Gunnar. |
| 3:55 | skratt | du | Radio-Kjelle |
| 3:55 | klar | du | Affären på andra sidan vägen kanske köper sånt här. |
| 3:59 | tanke | du | Vem är Gunnar? |
| 3:59 | väntar | du | Vem är Gunnar? |
| 3:59 | händelse | printStart | sak=nyckelring |
| 4:00 | toast | guld | ✅ |
| 4:00 | händelse | printKlar | sak=nyckelring n=4 |
| 4:00 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 4:02 | händelse | printStart | sak=nyckelring |
| 4:03 | toast | guld | ✅ |
| 4:03 | händelse | printKlar | sak=nyckelring n=5 |
| 4:03 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 4:03 | sak | foto | Första nyckelringen |
| 4:03 | foto | du | Första nyckelringen |
| 4:06 | klar | foto | Första nyckelringen |
| 4:15 | aliSalt | ali | 45 |
| 4:15 | röst | ali | Nyckelringar igen? Folk tappar sina nycklar hela tiden. Bra affär för oss. · STORY |
| 4:15 | butiksbubbla | ali | Nyckelringar igen? Folk tappar sina nycklar hela tiden. Bra affär för oss. |
| 4:16 | händelse | malKlart | id=salj del=Dag 1 – Kom igång nasta=powerbank |
| 4:16 | paket |  | sms → ge |
| 4:16 | väntar | ali | Ali här. Glömde en sak. Kom tillbaka, jag har nåt åt dig. |
| 4:16 | väntar |  | (läget ändras) |
| 4:17 | MÅL |  | Gå till Ali |
| 4:20 | kvittens-bock |  | ✓ Sälj hos Ali |
| 4:25 | väntar | du | Ali har något åt mig. Jag går över vägen till affären. |
| 4:25 | målruta |  | Gå till Ali |
| 4:25 | sak | du | Ali har något åt mig. Jag går över vägen till affären. |
| 4:25 | pil |  | Gå till Ali |
| 4:25 | notis | tanke | 💭 Ali har något åt mig. Jag går över vägen till affären. |
| 4:25 | röst | du | Ali har något åt mig. Jag går över vägen till affären. · MÅL |
| 4:25 | paket | ali | ali → ge |
| 4:25 | butiksbubbla | ali | Ali här. Jag såg dig cykla. Det ser jobbigt ut. Testa koppla på den här. Bra kunder får bonus. |
| 4:27 | röst | ali | Ali här. Jag såg dig cykla. Det ser jobbigt ut. Testa koppla på den här. Bra kunder får bonus. · STORY |
| 4:29 | klar | du | Ali har något åt mig. Jag går över vägen till affären. |
| 4:37 | skratt | du | powerbanken på cykeln |
| 4:37 | paket |  | tanke |
| 4:37 | tanke | du | Nu sparas lite ström. En nyckelring, typ. Framtiden är här, och den sitter fast med eltejp. |
| 4:37 | väntar | du | Nu sparas lite ström. En nyckelring, typ. Framtiden är här, och den sitter fast med eltejp. |
| 4:37 | monterat | du | byggsats:powerbank |
| 4:37 | händelse | monterat | sak=powerbank |
| 4:37 | sak | du | Nu sparas lite ström. En nyckelring, typ. Framtiden är här, och den sitter fast med eltejp. |
| 4:37 | kvitto-visas | du | Nu sparas lite ström. En nyckelring, typ. Framtiden är här, och den sitter fast med eltejp. |
| 4:37 | notis | tanke | 💭 Nu sparas lite ström. En nyckelring, typ. Framtiden är här, och den sitter fast med eltejp. |
| 4:37 | röst | du | Nu sparas lite ström. En nyckelring, typ. Framtiden är här, och den sitter fast med eltejp. · REAKTION |
| 4:37 | händelse | malKlart | id=powerbank del=Dag 1 – Kom igång nasta=kopGrip |
| 4:37 | paket |  | lapp |
| 4:37 | lapp-kö | 🧺 Ali | Ali här. Nyckelringen sålde. Jag ville bli ingenjör, men fick ta över pappas butik. I natt lät jag en AI rita en skräpgrip åt mig. Kom och titta. |
| 4:37 | väntar | ali | Ali här. Nyckelringen sålde. Jag ville bli ingenjör, men fick ta över pappas butik. I natt lät jag en AI rita en skräpgrip åt mig. Kom och titta. |
| 4:37 | struken | kedja | harRadGrip |
| 4:37 | struken | du | Vem är Gunnar? |
| 4:37 | väntar | du | Med en skräpgrip slipper jag böja mig. Ali har en ritning. |
| 4:37 | MÅL |  | Plocka skräp och mal det |
| 4:40 | målruta |  | Plocka skräp och mal det |
| 4:41 | kvittens-bock |  | ✓ Gå till Ali |
| 4:44 | klar | du | Nu sparas lite ström. En nyckelring, typ. Framtiden är här, och den sitter fast med eltejp. |
| 4:45 | sak | du | Med en skräpgrip slipper jag böja mig. Ali har en ritning. |
| 4:45 | pil |  | Plocka skräp och mal det |
| 4:45 | notis | tanke | 💭 Med en skräpgrip slipper jag böja mig. Ali har en ritning. |
| 4:45 | röst | du | Med en skräpgrip slipper jag böja mig. Ali har en ritning. · MÅL |
| 4:45 | nick |  | nick:14 |
| 4:49 | klar | du | Med en skräpgrip slipper jag böja mig. Ali har en ritning. |
| 4:52 | händelse | printStart | sak=nyckelring |
| 4:53 | toast | fel | Ingen ström – trampa cykeln |
| 4:53 | väntar | notis:Storebrors skrivare: Ingen ström – tramp | Storebrors skrivare: Ingen ström – trampa cykeln |
| 4:54 | toast | guld | ✅ |
| 4:54 | händelse | printKlar | sak=nyckelring n=6 |
| 4:54 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 4:56 | händelse | printStart | sak=nyckelring |
| 4:57 | sak | du | Någon köpte nåt jag gjort. Det här kan funka. |
| 4:57 | notis | tanke | 💭 Någon köpte nåt jag gjort. Det här kan funka. |
| 4:57 | röst | du | Någon köpte nåt jag gjort. Det här kan funka. · STORY |
| 4:57 | toast | guld | ✅ |
| 4:57 | händelse | printKlar | sak=nyckelring n=7 |
| 5:01 | klar | du | Någon köpte nåt jag gjort. Det här kan funka. |
| 5:07 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 5:09 | händelse | printStart | sak=nyckelring |
| 5:10 | sak | kjelle | God morgon, det är Kjelle på Radio Tippen! Det har flyttat in någon i det gamla skjulet. Med en cykel och en skrivare. Spännande, Gunnar. |
| 5:10 | notis |  | 📻 Radio Tippen: God morgon, det är Kjelle på Radio Tippen! Det har flyttat in någon i det gamla skjulet. Med en cykel och en skrivare. Spännande, Gunnar. |
| 5:10 | röst | kjelle | God morgon, det är Kjelle på Radio Tippen! Det har flyttat in någon i det gamla skjulet. Med en cykel och en skrivare. Spännande, Gunnar. · REAKTION |
| 5:10 | toast | guld | ✅ |
| 5:10 | händelse | printKlar | sak=nyckelring n=8 |
| 5:11 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 5:19 | aliSalt | ali | 15 |
| 5:19 | aliSalt | ali | 15 |
| 5:19 | paket |  | ali → ge |
| 5:19 | väntar | ali | Du får bonus! 15 kr extra. Pappa hade gillat dig. |
| 5:19 | väntar |  | (läget ändras) |
| 5:19 | aliSalt | ali | 15 |
| 5:21 | klar | kjelle | God morgon, det är Kjelle på Radio Tippen! Det har flyttat in någon i det gamla skjulet. Med en cykel och en skrivare. Spännande, Gunnar. |
| 5:23 | struken | notis:Storebrors skrivare: Ingen ström – tramp | Storebrors skrivare: Ingen ström – trampa cykeln |
| 5:23 | sak | ali | Du får bonus! 15 kr extra. Pappa hade gillat dig. |
| 5:23 | notis |  | Ali: ”Du får bonus! 15 kr extra. Pappa hade gillat dig.” |
| 5:23 | röst | ali | Du får bonus! 15 kr extra. Pappa hade gillat dig. · REAKTION |
| 5:27 | klar | ali | Du får bonus! 15 kr extra. Pappa hade gillat dig. |
| 5:29 | sak |  | (läget ändras) |
| 5:29 | klar |  | (läget ändras) |
| 5:36 | sak | ali | Ali här. Glömde en sak. Kom tillbaka, jag har nåt åt dig. |
| 5:36 | sms | ali | Ali här. Glömde en sak. Kom tillbaka, jag har nåt åt dig. |
| 5:36 | sms-bubbla | ali | Ali här. Glömde en sak. Kom tillbaka, jag har nåt åt dig. |
| 5:36 | röst | ali | Ali här. Glömde en sak. Kom tillbaka, jag har nåt åt dig. · STORY |
| 5:36 | händelse | printStart | sak=nyckelring |
| 5:37 | toast | guld | ✅ |
| 5:37 | händelse | printKlar | sak=nyckelring n=9 |
| 5:40 | klar | ali | Ali här. Glömde en sak. Kom tillbaka, jag har nåt åt dig. |
| 5:47 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 5:48 | sak |  | (läget ändras) |
| 5:49 | klar |  | (läget ändras) |
| 5:49 | händelse | printStart | sak=nyckelring |
| 5:50 | toast | guld | ✅ |
| 5:50 | händelse | printKlar | sak=nyckelring n=10 |
| 5:51 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 5:53 | händelse | printStart | sak=nyckelring |
| 5:55 | toast | guld | ✅ |
| 5:55 | händelse | printKlar | sak=nyckelring n=11 |
| 5:55 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 6:03 | aliSalt | ali | 15 |
| 6:03 | aliSalt | ali | 15 |
| 6:03 | aliSalt | ali | 15 |
| 6:12 | händelse | printStart | sak=nyckelring |
| 6:13 | toast | guld | ✅ |
| 6:13 | händelse | printKlar | sak=nyckelring n=12 |
| 6:21 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 6:23 | händelse | printStart | sak=nyckelring |
| 6:24 | toast | guld | ✅ |
| 6:24 | händelse | printKlar | sak=nyckelring n=13 |
| 6:25 | sak | ali | Ali här. Nyckelringen sålde. Jag ville bli ingenjör, men fick ta över pappas butik. I natt lät jag en AI rita en skräpgrip åt mig. Kom och titta. |
| 6:25 | sms | ali | Ali här. Nyckelringen sålde. Jag ville bli ingenjör, men fick ta över pappas butik. I natt lät jag en AI rita en skräpgrip åt mig. Kom och titta. |
| 6:25 | sms-bubbla | ali | Ali här. Nyckelringen sålde. Jag ville bli ingenjör, men fick ta över pappas butik. I natt lät jag en AI rita en skräpgrip åt mig. Kom och titta. |
| 6:25 | röst | ali | Ali här. Nyckelringen sålde. Jag ville bli ingenjör, men fick ta över pappas butik. I natt lät jag en AI rita en skräpgrip åt mig. Kom och titta. · STORY |
| 6:25 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 6:27 | händelse | printStart | sak=nyckelring |
| 6:28 | toast | guld | ✅ |
| 6:28 | händelse | printKlar | sak=nyckelring n=14 |
| 6:29 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 6:37 | klar | ali | Ali här. Nyckelringen sålde. Jag ville bli ingenjör, men fick ta över pappas butik. I natt lät jag en AI rita en skräpgrip åt mig. Kom och titta. |
| 6:37 | aliSalt | ali | 15 |
| 6:37 | aliSalt | ali | 15 |
| 6:37 | aliSalt | ali | 15 |
| 6:46 | händelse | printStart | sak=nyckelring |
| 6:47 | toast | guld | ✅ |
| 6:47 | händelse | printKlar | sak=nyckelring n=15 |
| 6:48 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 6:50 | händelse | printStart | sak=nyckelring |
| 6:51 | toast | fel | Ingen ström – trampa cykeln |
| 6:52 | toast | guld | ✅ |
| 6:52 | händelse | printKlar | sak=nyckelring n=16 |
| 6:52 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 6:54 | händelse | printStart | sak=nyckelring |
| 6:55 | toast | guld | ✅ |
| 6:55 | händelse | printKlar | sak=nyckelring n=17 |
| 6:56 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 7:03 | aliSalt | ali | 15 |
| 7:04 | aliSalt | ali | 15 |
| 7:04 | aliSalt | ali | 15 |
| 7:13 | händelse | printStart | sak=nyckelring |
| 7:14 | toast | guld | ✅ |
| 7:14 | händelse | printKlar | sak=nyckelring n=18 |
| 7:15 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 7:17 | händelse | printStart | sak=nyckelring |
| 7:18 | toast | guld | ✅ |
| 7:18 | händelse | printKlar | sak=nyckelring n=19 |
| 7:19 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 7:21 | händelse | printStart | sak=nyckelring |
| 7:22 | toast | guld | ✅ |
| 7:22 | händelse | printKlar | sak=nyckelring n=20 |
| 7:23 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 7:30 | aliSalt | ali | 15 |
| 7:30 | aliSalt | ali | 15 |
| 7:30 | aliSalt | ali | 15 |
| 7:35 | tanke | du | Gripen hos Ali. Femtio kronor. |
| 7:35 | väntar | du | Gripen hos Ali. Femtio kronor. |
| 7:35 | nick |  | paminn:14 |
| 7:36 | sak | du | Gripen hos Ali. Femtio kronor. |
| 7:36 | notis | tanke | 💭 Gripen hos Ali. Femtio kronor. |
| 7:36 | röst | du | Gripen hos Ali. Femtio kronor. · REAKTION |
| 7:38 | klar | du | Gripen hos Ali. Femtio kronor. |
| 7:39 | händelse | printStart | sak=nyckelring |
| 7:41 | toast | guld | ✅ |
| 7:41 | händelse | printKlar | sak=nyckelring n=21 |
| 7:41 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 7:43 | händelse | printStart | sak=nyckelring |
| 7:44 | toast | guld | ✅ |
| 7:44 | händelse | printKlar | sak=nyckelring n=22 |
| 7:45 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 7:50 | upplåst | bara | grip |
| 7:50 | brott | RESERV | grip (bara 4 av 6) |
| 7:50 | händelse | upplast | id=grip flask=bara |
| 7:52 | aliSalt | ali | 15 |
| 7:52 | aliSalt | ali | 15 |
| 7:58 | väntar | bud | (tips) |
| 7:58 | sak | bud | (tips) |
| 7:58 | väntar | du | Jag har pengar nu. Hos Ali kan jag köpa uppgraderingar – bära mer eller printa snabbare. |
| 7:59 | klar | bud | (tips) |
| 8:01 | sak | du | Jag har pengar nu. Hos Ali kan jag köpa uppgraderingar – bära mer eller printa snabbare. |
| 8:01 | röst | du | Jag har pengar nu. Hos Ali kan jag köpa uppgraderingar – bära mer eller printa snabbare. · MÅL |
| 8:08 | klar | du | Jag har pengar nu. Hos Ali kan jag köpa uppgraderingar – bära mer eller printa snabbare. |
| 8:12 | händelse | printStart | sak=nyckelring |
| 8:13 | toast | guld | ✅ |
| 8:13 | händelse | printKlar | sak=nyckelring n=23 |
| 8:14 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 8:22 | aliSalt | ali | 15 |
| 8:25 | toast | guld | 3D-modell köpt – printa skräpgrip på skrivaren |
| 8:25 | händelse | kopt | sak=grip |
| 8:25 | röst | ali | Bra val. 3D-modellen är din. Den räcker till en. · STORY |
| 8:25 | butiksbubbla | ali | Bra val. 3D-modellen är din. Den räcker till en. |
| 8:26 | händelse | malKlart | id=kopGrip del=Dag 1 – Kom igång nasta=printGrip |
| 8:26 | väntar | du | Min första 3D-modell! Nu ska den bara printas. Jag printar inte bara saker – jag printar maskiner. |
| 8:27 | MÅL |  | Printa skräpgripen |
| 8:27 | sak | du | Min första 3D-modell! Nu ska den bara printas. Jag printar inte bara saker – jag printar maskiner. |
| 8:27 | kvitto-visas | du | Min första 3D-modell! Nu ska den bara printas. Jag printar inte bara saker – jag printar maskiner. |
| 8:27 | lapp | 📔 Dagbok | Min första 3D-modell! Nu ska den bara printas. Jag printar inte bara saker – jag printar maskiner. |
| 8:27 | meddelande | du | Min första 3D-modell! Nu ska den bara printas. Jag printar inte bara saker – jag printar maskiner. |
| 8:27 | dagbokkort | du | Min första 3D-modell! Nu ska den bara printas. Jag printar inte bara saker – jag printar maskiner. |
| 8:28 | röst | du | Dag 1. 21 dagar till jul. Min första 3D-modell! Nu ska den bara printas. Jag printar inte bara saker – jag printar maskiner. · STORY |
| 8:38 | händelse | brevLast | id=ritning |
| 8:38 | klar | du | Min första 3D-modell! Nu ska den bara printas. Jag printar inte bara saker – jag printar maskiner. |
| 8:38 | målruta |  | Printa skräpgripen |
| 8:38 | sak | du | (nytt mål i rutan) |
| 8:38 | pil |  | Printa skräpgripen |
| 8:38 | klar | du | (nytt mål i rutan) |
| 8:38 | nick |  | nick:15 |
| 8:47 | händelse | printStart | sak=byggsats:grip |
| 8:49 | händelse | printKlar | sak=byggsats:grip n=1 |
| 8:49 | toast | guld | ✅ |
| 9:01 | väntar | info:guld | Klicka för att ta på dig skräpgrip |
| 9:01 | händelse | tagitUrPrint | sak=byggsats:grip n=1 |
| 9:01 | paket |  | sms |
| 9:01 | väntar | ali | Ali här. Jag såg Skräpgrip på avstånd. Ett streck blev lite snett. Mitt fel. Vackert ändå. |
| 9:01 | struken | kedja | grip |
| 9:01 | sak | info:guld | Klicka för att ta på dig skräpgrip |
| 9:01 | kvitto-visas | info:guld | Klicka för att ta på dig skräpgrip |
| 9:01 | toast | guld | Klicka för att ta på dig skräpgrip |
| 9:03 | klar | info:guld | Klicka för att ta på dig skräpgrip |
| 9:05 | väntar | info:guld | 🦾 Skräpgripen sitter! Bär 6, lättare att sikta, plockar när du går nära. |
| 9:05 | tog på | du | byggsats:grip |
| 9:05 | händelse | monterat | sak=grip |
| 9:05 | sak | info:guld | 🦾 Skräpgripen sitter! Bär 6, lättare att sikta, plockar när du går nära. |
| 9:05 | kvitto-visas | info:guld | 🦾 Skräpgripen sitter! Bär 6, lättare att sikta, plockar när du går nära. |
| 9:05 | toast | guld | 🦾 Skräpgripen sitter! Bär 6, lättare att sikta, plockar när du går nära. |
| 9:05 | händelse | malKlart | id=printGrip del=Dag 1 – Kom igång nasta=krukaD1 |
| 9:05 | väntar | du | Ali vill ha krukor. Jag printar en blomkruka. |
| 9:05 | MÅL |  | Printa och sälj nyckelringar |
| 9:05 | upplåst | inkomst | kruka |
| 9:05 | brott | UPPLÅST | kruka (inkomst 23 av 6) |
| 9:05 | händelse | upplast | id=kruka flask=inkomst |
| 9:05 | paket |  | tanke → sms |
| 9:05 | tanke | du | Nyckelringar, nyckelringar. Ali kan inte vilja ha fler. |
| 9:05 | väntar | du | Nyckelringar, nyckelringar. Ali kan inte vilja ha fler. |
| 9:05 | väntar | ali | Prova en kruka. Folk köper krukor. Ingen vet varför. |
| 9:05 | skratt | ali | Prova en kruka. Folk köper krukor. Ingen |
| 9:07 | klar | info:guld | 🦾 Skräpgripen sitter! Bär 6, lättare att sikta, plockar när du går nära. |
| 9:08 | målruta |  | Köp krukreceptet |
| 9:09 | kvittens-bock |  | ✓ Printa skräpgripen |
| 9:09 | sak | du | Ali vill ha krukor. Jag printar en blomkruka. |
| 9:09 | pil |  | Köp krukreceptet |
| 9:09 | notis | tanke | 💭 Ali vill ha krukor. Jag printar en blomkruka. |
| 9:09 | röst | du | Ali vill ha krukor. Jag printar en blomkruka. · MÅL |
| 9:12 | klar | du | Ali vill ha krukor. Jag printar en blomkruka. |
| 9:13 | händelse | kopt | sak=kruka |
| 9:13 | röst | ali | Bra val. Folk köper sånt. Jag vet inte varför. · STORY |
| 9:13 | butiksbubbla | ali | Blomkruka? Bra val. Folk köper sånt. Jag vet inte varför. |
| 9:22 | händelse | printStart | sak=kruka |
| 9:24 | sak | ali | Ali här. Jag såg Skräpgrip på avstånd. Ett streck blev lite snett. Mitt fel. Vackert ändå. |
| 9:24 | sms | ali | Ali här. Jag såg Skräpgrip på avstånd. Ett streck blev lite snett. Mitt fel. Vackert ändå. |
| 9:24 | sms-bubbla | ali | Ali här. Jag såg Skräpgrip på avstånd. Ett streck blev lite snett. Mitt fel. Vackert ändå. |
| 9:24 | röst | ali | Ali här. Jag såg Skräpgrip på avstånd. Ett streck blev lite snett. Mitt fel. Vackert ändå. · REAKTION |
| 9:25 | toast | guld | ✅ |
| 9:25 | händelse | printKlar | sak=kruka n=1 |
| 9:25 | kvittens | du | En kruka. Mamma skulle bli så stolt. Hon får inte veta. |
| 9:25 | väntar | du | En kruka. Mamma skulle bli så stolt. Hon får inte veta. |
| 9:25 | händelse | malKlart | id=krukaD1 del=Dag 1 – Kom igång nasta=saljKruka |
| 9:25 | väntar | du | Ali gillar krukor. Han sa det själv. |
| 9:25 | MÅL |  | Sälj blomkrukan |
| 9:25 | händelse | tagitUrPrint | sak=kruka n=1 |
| 9:28 | målruta |  | Sälj blomkrukan |
| 9:32 | klar | ali | Ali här. Jag såg Skräpgrip på avstånd. Ett streck blev lite snett. Mitt fel. Vackert ändå. |
| 9:32 | sak | du | Ali gillar krukor. Han sa det själv. |
| 9:32 | pil |  | Sälj blomkrukan |
| 9:32 | notis | tanke | 💭 Ali gillar krukor. Han sa det själv. |
| 9:32 | röst | du | Ali gillar krukor. Han sa det själv. · MÅL |
| 9:35 | klar | du | Ali gillar krukor. Han sa det själv. |
| 9:35 | sak | du | En kruka. Mamma skulle bli så stolt. Hon får inte veta. |
| 9:35 | notis | tanke | 💭 En kruka. Mamma skulle bli så stolt. Hon får inte veta. |
| 9:35 | röst | du | En kruka. Mamma skulle bli så stolt. Hon får inte veta. · STORY |
| 9:39 | klar | du | En kruka. Mamma skulle bli så stolt. Hon får inte veta. |
| 9:44 | aliSalt | ali | 70 |
| 9:45 | händelse | malKlart | id=saljKruka del=Dag 1 – Kom igång nasta=kopSang |
| 9:45 | struken | kedja | morkt |
| 9:45 | väntar | du | Jag kan inte sova på betongen en natt till. Ali har en säng. Typ. |
| 9:46 | MÅL |  | Köp sängen |
| 9:46 | målruta |  | Köp sängen |
| 9:46 | sak | du | Jag kan inte sova på betongen en natt till. Ali har en säng. Typ. |
| 9:46 | pil |  | Köp sängen |
| 9:46 | notis | tanke | 💭 Jag kan inte sova på betongen en natt till. Ali har en säng. Typ. |
| 9:46 | röst | du | Jag kan inte sova på betongen en natt till. Ali har en säng. Typ. · MÅL |
| 9:49 | kvittens-bock |  | ✓ Sälj blomkrukan |
| 9:51 | klar | du | Jag kan inte sova på betongen en natt till. Ali har en säng. Typ. |
| 9:55 | händelse | kopt | sak=sang |
| 9:55 | röst | ali | Sov gott, min vän. · STORY |
| 9:55 | butiksbubbla | ali | Sov gott, min vän. |
| 9:56 | händelse | malKlart | id=kopSang del=Dag 1 – Kom igång nasta=printSang |
| 9:56 | väntar | du | Sängen tar lång tid. Den är värd det. |
| 9:56 | målruta |  | Printa sängen |
| 9:56 | MÅL |  | Printa sängen |
| 9:56 | sak | du | Sängen tar lång tid. Den är värd det. |
| 9:56 | pil |  | Printa sängen |
| 9:56 | notis | tanke | 💭 Sängen tar lång tid. Den är värd det. |
| 9:56 | röst | du | Sängen tar lång tid. Den är värd det. · MÅL |
| 9:59 | klar | du | Sängen tar lång tid. Den är värd det. |
| 10:00 | kvittens-bock |  | ✓ Köp sängen |
| 10:18 | sak | du | Nyckelringar, nyckelringar. Ali kan inte vilja ha fler. |
| 10:18 | notis | tanke | 💭 Nyckelringar, nyckelringar. Ali kan inte vilja ha fler. |
| 10:18 | röst | du | Nyckelringar, nyckelringar. Ali kan inte vilja ha fler. · STORY |
| 10:21 | händelse | printStart | sak=sang |
| 10:22 | klar | du | Nyckelringar, nyckelringar. Ali kan inte vilja ha fler. |
| 10:25 | toast | fel | Ingen ström – trampa cykeln |
| 10:28 | toast | guld | ✅ |
| 10:28 | händelse | printKlar | sak=sang n=1 |
| 10:28 | händelse | tagitUrPrint | sak=sang n=1 |
| 10:28 | struken | kedja | sang |
| 10:28 | händelse | malKlart | id=printSang del=Dag 1 – Kom igång nasta=sov1 |
| 10:28 | paket |  | lapp |
| 10:28 | lapp | 📔 Dagbok | Dag 1. Nitton år. Inget mer tjat. En skrivare, ett skjul och en säng. Det räcker för i natt. Gården är full av skräp. I morgon. |
| 10:28 | meddelande | du | Dag 1. Nitton år. Inget mer tjat. En skrivare, ett skjul och en säng. Det räcker för i natt. Gården är full av skräp. I morgon. |
| 10:28 | dagbokkort | du | Dag 1. Nitton år. Inget mer tjat. En skrivare, ett skjul och en säng. Det räcker för i natt. Gården är full av skräp. I morgon. |
| 10:28 | väntar | du | Sängen ska in i skjulet. Sen sover jag. |
| 10:28 | MÅL |  | Sängen i skjulet |
| 10:28 | röst | du | Dag 1. 21 dagar till jul. Nitton år. Inget mer tjat. En skrivare, ett skjul och en säng. Det räcker för i natt. Gården är full av skräp. I morgon. · STORY |
| 10:40 | händelse | brevLast | id=start |
| 10:40 | målruta |  | Sängen i skjulet |
| 10:42 | sak | du | Sängen ska in i skjulet. Sen sover jag. |
| 10:42 | pil |  | Sängen i skjulet |
| 10:42 | notis | tanke | 💭 Sängen ska in i skjulet. Sen sover jag. |
| 10:42 | röst | du | Sängen ska in i skjulet. Sen sover jag. · MÅL |
| 10:42 | nick |  | nick:20 |
| 10:45 | klar | du | Sängen ska in i skjulet. Sen sover jag. |
| 10:54 | nattkort | du | 🌙 Dag 1 är slut. God natt. zzz… i en riktig säng DAGENS PRINTAR Nyckelring × 23 Blomkruka × 1 Säng × 1 Totalt 25 printar 💰 Tjänat i dag +430 kr |

<details><summary>Botens handlingar dag 1</summary>

- 0:12 gå till brädhögen (3 m) (5 kr)
- 0:32 popup: "FORTSÄTT" (5 kr)
- 0:35 gå till cykeln vid vägen (2 m) (5 kr)
- 0:51 gå till rutan i linje 1 (13 m) (5 kr)
- 1:38 gå till cykeln (lyfter den) (13 m) (5 kr)
- 1:49 gå till cykelns plats (11 m) (5 kr)
- 1:52 gå till skrivaren (2 m) (5 kr)
- 1:53 printar Nyckelring (5 kr)
- 2:00 tar ut 1 st ur skrivaren (5 kr)
- 2:04 printar Nyckelring (sista av storebrors rulle) (5 kr)
- 2:28 tar ut 1 st ur skrivaren (5 kr)
- 2:33 gå till Ali (26 m) (5 kr)
- 2:33 öppnar Alis butik – sälja de två nyckelringarna (5 kr)
- 2:36 säljer hos Ali: +30 kr (35 kr)
- 2:49 öppnar Alis butik – köpa kvarnen (35 kr)
- 2:51 köper gammalkvarn för 30 kr (5 kr)
- 2:52 köpte kvarnen (5 kr)
- 3:07 gå till kvarnens ruta (28 m) (5 kr)
- 3:25 plockar 3 skräp på gården (bär max 3) (5 kr)
- 3:27 gå till kvarnen (12 m) (5 kr)
- 3:36 popup: "FORTSÄTT" (5 kr)
- 3:43 gå till cykeln (2 m) (5 kr)
- 3:46 printar Nyckelring (5 kr)
- 3:52 tar ut 1 st ur skrivaren (5 kr)
- 3:59 printar Nyckelring (5 kr)
- 4:01 tar ut 1 st ur skrivaren (5 kr)
- 4:02 printar Nyckelring (5 kr)
- 4:04 tar ut 1 st ur skrivaren (5 kr)
- 4:14 gå till Ali (27 m) (5 kr)
- 4:14 öppnar Alis butik – sälja nyckelringar (5 kr)
- 4:16 säljer hos Ali: +45 kr (50 kr)
- 4:25 öppnar Alis butik – Ali (powerbanken) (50 kr)
- 4:37 gå till koppla powerbanken till cykeln (24 m) (50 kr)
- 4:50 tjänar pengar till väntar på flaskhalsen för grip: 50/90 kr → printar nyckelring (15 kr) (50 kr)
- 4:51 gå till skrivaren (2 m) (50 kr)
- 4:52 printar Nyckelring (50 kr)
- 4:55 tar ut 1 st ur skrivaren (50 kr)
- 4:56 printar Nyckelring (50 kr)
- 5:02 plockar 3 skräp på gården (bär max 3) (50 kr)
- 5:04 gå till kvarnen (12 m) (50 kr)
- 5:07 gå till skrivaren (2 m) (50 kr)
- 5:07 tar ut 1 st ur skrivaren (50 kr)
- 5:09 printar Nyckelring (50 kr)
- 5:11 tar ut 1 st ur skrivaren (50 kr)
- 5:17 gå till Ali (28 m) (50 kr)
- 5:17 öppnar Alis butik – sälja (50 kr)
- 5:20 säljer hos Ali: +45 kr (95 kr)
- 5:29 tjänar pengar till väntar på flaskhalsen för grip: 110/150 kr → printar nyckelring (15 kr) (110 kr)
- 5:35 gå till skrivaren (25 m) (110 kr)
- 5:36 printar Nyckelring (110 kr)
- 5:42 plockar 3 skräp på gården (bär max 3) (110 kr)
- 5:45 gå till kvarnen (13 m) (110 kr)
- 5:47 gå till skrivaren (2 m) (110 kr)
- 5:47 tar ut 1 st ur skrivaren (110 kr)
- 5:49 printar Nyckelring (110 kr)
- 5:51 tar ut 1 st ur skrivaren (110 kr)
- 5:53 printar Nyckelring (110 kr)
- 5:54 gå till cykeln (2 m) (110 kr)
- 5:56 tar ut 1 st ur skrivaren (110 kr)
- 6:01 gå till Ali (26 m) (110 kr)
- 6:01 öppnar Alis butik – sälja (110 kr)
- 6:03 säljer hos Ali: +45 kr (155 kr)
- 6:05 tjänar pengar till väntar på flaskhalsen för grip: 155/195 kr → printar nyckelring (15 kr) (155 kr)
- 6:10 gå till skrivaren (25 m) (155 kr)
- 6:12 printar Nyckelring (155 kr)
- 6:16 plockar 3 skräp på gården (bär max 3) (155 kr)
- 6:20 gå till kvarnen (15 m) (155 kr)
- 6:21 gå till skrivaren (1 m) (155 kr)
- 6:22 tar ut 1 st ur skrivaren (155 kr)
- 6:23 printar Nyckelring (155 kr)
- 6:26 tar ut 1 st ur skrivaren (155 kr)
- 6:27 printar Nyckelring (155 kr)
- 6:30 tar ut 1 st ur skrivaren (155 kr)
- 6:35 gå till Ali (28 m) (155 kr)
- 6:35 öppnar Alis butik – sälja (155 kr)
- 6:38 säljer hos Ali: +45 kr (200 kr)
- 6:39 tjänar pengar till väntar på flaskhalsen för grip: 200/240 kr → printar nyckelring (15 kr) (200 kr)
- 6:45 gå till skrivaren (25 m) (200 kr)
- 6:46 printar Nyckelring (200 kr)
- 6:49 tar ut 1 st ur skrivaren (200 kr)
- 6:50 printar Nyckelring (200 kr)
- 6:51 gå till cykeln (1 m) (200 kr)
- 6:53 tar ut 1 st ur skrivaren (200 kr)
- 6:54 printar Nyckelring (200 kr)
- 6:57 tar ut 1 st ur skrivaren (200 kr)
- 7:02 gå till Ali (25 m) (200 kr)
- 7:02 öppnar Alis butik – sälja (200 kr)
- 7:04 säljer hos Ali: +45 kr (245 kr)
- 7:06 tjänar pengar till väntar på flaskhalsen för grip: 245/285 kr → printar nyckelring (15 kr) (245 kr)
- 7:11 gå till skrivaren (25 m) (245 kr)
- 7:13 printar Nyckelring (245 kr)
- 7:15 tar ut 1 st ur skrivaren (245 kr)
- 7:17 printar Nyckelring (245 kr)
- 7:19 tar ut 1 st ur skrivaren (245 kr)
- 7:21 printar Nyckelring (245 kr)
- 7:23 tar ut 1 st ur skrivaren (245 kr)
- 7:28 gå till Ali (25 m) (245 kr)
- 7:28 öppnar Alis butik – sälja (245 kr)
- 7:30 säljer hos Ali: +45 kr (290 kr)
- 7:32 tjänar pengar till väntar på flaskhalsen för grip: 290/330 kr → printar nyckelring (15 kr) (290 kr)
- 7:37 gå till skrivaren (25 m) (290 kr)
- 7:39 printar Nyckelring (290 kr)
- 7:40 gå till cykeln (1 m) (290 kr)
- 7:42 tar ut 1 st ur skrivaren (290 kr)
- 7:43 printar Nyckelring (290 kr)
- 7:46 tar ut 1 st ur skrivaren (290 kr)
- 7:51 gå till Ali (25 m) (290 kr)
- 7:51 öppnar Alis butik – sälja (290 kr)
- 7:53 säljer hos Ali: +30 kr (320 kr)
- 7:53 tjänar pengar till väntar på flaskhalsen för grip: 320/330 kr → printar nyckelring (15 kr) (320 kr)
- 8:00 plockar 3 skräp på gården (bär max 3) (320 kr)
- 8:06 gå till kvarnen (33 m) (320 kr)
- 8:10 gå till skrivaren (1 m) (320 kr)
- 8:12 printar Nyckelring (320 kr)
- 8:14 tar ut 1 st ur skrivaren (320 kr)
- 8:20 gå till Ali (28 m) (320 kr)
- 8:20 öppnar Alis butik – sälja (320 kr)
- 8:22 säljer hos Ali: +15 kr (335 kr)
- 8:24 öppnar Alis butik – köpa skräpgrip (335 kr)
- 8:26 köper grip för 50 kr (285 kr)
- 8:38 popup: "FORTSÄTT" (285 kr)
- 8:45 gå till skrivaren (25 m) (285 kr)
- 8:47 printar Skräpgrip (285 kr)
- 8:54 plockar 3 skräp på gården (bär max 3) (285 kr)
- 8:58 gå till kvarnen (19 m) (285 kr)
- 9:01 gå till skrivaren (2 m) (285 kr)
- 9:01 tar ut 1 st ur skrivaren (285 kr)
- 9:05 tar på grip (285 kr)
- 9:11 gå till Ali (28 m) (285 kr)
- 9:11 öppnar Alis butik – köpa receptet blomkruka (285 kr)
- 9:13 köper kruka för 40 kr (245 kr)
- 9:20 gå till skrivaren (25 m) (245 kr)
- 9:22 printar Blomkruka (245 kr)
- 9:22 gå till cykeln (1 m) (245 kr)
- 9:26 tar ut 1 st ur skrivaren (245 kr)
- 9:43 gå till Ali (25 m) (245 kr)
- 9:43 öppnar Alis butik – sälja krukan (245 kr)
- 9:45 säljer hos Ali: +70 kr (315 kr)
- 9:53 öppnar Alis butik – köpa sängen (315 kr)
- 9:55 köper sang för 60 kr (255 kr)
- 10:11 plockar 6 skräp på gården (bär max 6) (255 kr)
- 10:17 gå till kvarnen (31 m) (255 kr)
- 10:20 gå till skrivaren (1 m) (255 kr)
- 10:21 printar Säng (255 kr)
- 10:26 gå till cykeln (2 m) (255 kr)
- 10:40 popup: "FORTSÄTT" (255 kr)
- 10:40 tar ut 1 st ur skrivaren (255 kr)
- 10:51 gå till sängplatsen i skjulet (21 m) (255 kr)

</details>

## Dag 2

| Tid | Källa | Vem | Text |
|---|---|---|---|
| 10:54 | vara | ali | kruka |
| 10:54 | händelse | malKlart | id=sov1 del=Dag 1 – Kom igång nasta=kopMotor |
| 10:54 | MÅL |  | Mal skräp, printa och sälj |
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
| 0:24 | väntar | ali | Ali här. Såg skylten. Stavningen är rätt. Det är mer än många. |
| 0:36 | väntar | foto | Egen säng |
| 0:36 | paket |  | tanke |
| 0:36 | tanke | du | Tänk att jag ska få sova i min egen säng. |
| 0:36 | väntar | du | Tänk att jag ska få sova i min egen säng. |
| 0:36 | sak | foto | Egen säng |
| 0:36 | foto | du | Egen säng |
| 0:38 | klar | foto | Egen säng |
| 0:40 | sopsack | rolf | Sopsäckarna landade på gården |
| 0:40 | paket |  | tanke → ge |
| 0:40 | tanke | du | Hmm, vad kastade gubben ut ur sopbilen? Jag går och kollar. |
| 0:40 | väntar | du | Hmm, vad kastade gubben ut ur sopbilen? Jag går och kollar. |
| 0:40 | väntar |  | (läget ändras) |
| 0:40 | sak | du | Tänk att jag ska få sova i min egen säng. |
| 0:40 | notis | tanke | 💭 Tänk att jag ska få sova i min egen säng. |
| 0:40 | röst | du | Tänk att jag ska få sova i min egen säng. · STORY |
| 0:44 | klar | du | Tänk att jag ska få sova i min egen säng. |
| 0:45 | paket |  | tanke |
| 0:45 | tanke | du | Jaha. En kalsong. Använd. |
| 0:45 | väntar | du | Jaha. En kalsong. Använd. |
| 0:45 | skratt | du | kvarnen spottar |
| 0:48 | händelse | printStart | sak=kruka |
| 0:51 | toast | guld | ✅ |
| 0:51 | händelse | printKlar | sak=kruka n=2 |
| 0:51 | händelse | tagitUrPrint | sak=kruka n=1 |
| 0:52 | sak | ali | Prova en kruka. Folk köper krukor. Ingen vet varför. |
| 0:52 | skratt | ali | Prova en kruka. Folk köper krukor. Ingen |
| 0:52 | sms | ali | Prova en kruka. Folk köper krukor. Ingen vet varför. |
| 0:52 | skratt | ali | Prova en kruka. Folk köper krukor. Ingen |
| 0:52 | sms-bubbla | ali | Prova en kruka. Folk köper krukor. Ingen vet varför. |
| 0:52 | skratt | ali | Prova en kruka. Folk köper krukor. Ingen |
| 0:52 | röst | ali | Prova en kruka. Folk köper krukor. Ingen vet varför. · STORY |
| 0:57 | klar | ali | Prova en kruka. Folk köper krukor. Ingen vet varför. |
| 0:57 | skratt | ali | Prova en kruka. Folk köper krukor. Ingen |
| 0:57 | skratt | du | falsk tuta |
| 0:58 | röst | ali | Jag har stått här sedan sex i morse. Vad vill du? · STORY |
| 0:58 | butiksbubbla | ali | Jag har stått här sedan sex i morse. Vad vill du? |
| 0:59 | aliSalt | ali | 105 |
| 0:59 | butiksbubbla | ali | Precis vad jag ville ha idag. 105 kr – med extra. |
| 1:00 | väntar | ali | Precis det jag ville ha idag, min vän. |
| 1:00 | sak | ali | Precis det jag ville ha idag, min vän. |
| 1:00 | röst | ali | Precis det jag ville ha idag, min vän. · STORY |
| 1:03 | klar | ali | Precis det jag ville ha idag, min vän. |
| 1:12 | händelse | printStart | sak=kruka |
| 1:12 | väntar | info:guld | 🚛 Sopbilen tippade en ny last på soptippen! |
| 1:12 | lapp | 📔 Dagbok | Sopbilen tippade en ny last. Allt det skräpet – och grinden är låst. |
| 1:12 | meddelande | du | Sopbilen tippade en ny last. Allt det skräpet – och grinden är låst. |
| 1:12 | dagbokkort | du | Sopbilen tippade en ny last. Allt det skräpet – och grinden är låst. |
| 1:12 | röst | du | Dag 2. 20 dagar till jul. Sopbilen tippade en ny last. Allt det skräpet – och grinden är låst. · STORY |
| 1:21 | händelse | brevLast | id=sopbil |
| 1:21 | struken | info:guld | 🚛 Sopbilen tippade en ny last på soptippen! |
| 1:22 | toast | fel | Ingen ström – trampa cykeln |
| 1:22 | väntar | notis:Storebrors skrivare: Ingen ström – tramp | Storebrors skrivare: Ingen ström – trampa cykeln |
| 1:24 | toast | guld | ✅ |
| 1:24 | händelse | printKlar | sak=kruka n=3 |
| 1:24 | händelse | tagitUrPrint | sak=kruka n=1 |
| 1:32 | aliSalt | ali | 105 |
| 1:42 | väntar | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått generator. Vi tar en låt på det. Den här är till dig, Gunnar. |
| 1:42 | radio | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått generator. Vi tar en låt på det. Den här är till dig, Gunnar. |
| 1:42 | skratt | du | Radio-Kjelle |
| 1:59 | händelse | printStart | sak=kruka |
| 2:02 | toast | guld | ✅ |
| 2:02 | händelse | printKlar | sak=kruka n=4 |
| 2:02 | händelse | tagitUrPrint | sak=kruka n=1 |
| 2:10 | aliSalt | ali | 105 |
| 2:12 | sak | du | Hmm, vad kastade gubben ut ur sopbilen? Jag går och kollar. |
| 2:12 | notis | tanke | 💭 Hmm, vad kastade gubben ut ur sopbilen? Jag går och kollar. |
| 2:12 | röst | du | Hmm, vad kastade gubben ut ur sopbilen? Jag går och kollar. · STORY |
| 2:17 | klar | du | Hmm, vad kastade gubben ut ur sopbilen? Jag går och kollar. |
| 2:25 | sak |  | (läget ändras) |
| 2:25 | klar |  | (läget ändras) |
| 2:25 | händelse | printStart | sak=kruka |
| 2:28 | toast | guld | ✅ |
| 2:28 | händelse | printKlar | sak=kruka n=5 |
| 2:29 | händelse | tagitUrPrint | sak=kruka n=1 |
| 2:29 | sak | du | Jaha. En kalsong. Använd. |
| 2:29 | notis | tanke | 💭 Jaha. En kalsong. Använd. |
| 2:29 | röst | du | Jaha. En kalsong. Använd. · REAKTION |
| 2:31 | klar | du | Jaha. En kalsong. Använd. |
| 2:36 | aliSalt | ali | 105 |
| 2:41 | sak | notis:Storebrors skrivare: Ingen ström – tramp | Storebrors skrivare: Ingen ström – trampa cykeln |
| 2:41 | notis | fel | Storebrors skrivare: Ingen ström – trampa cykeln |
| 2:43 | klar | notis:Storebrors skrivare: Ingen ström – tramp | Storebrors skrivare: Ingen ström – trampa cykeln |
| 2:44 | händelse | printStart | sak=kruka |
| 2:47 | toast | guld | ✅ |
| 2:47 | händelse | printKlar | sak=kruka n=6 |
| 2:47 | händelse | tagitUrPrint | sak=kruka n=1 |
| 2:53 | sak | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått generator. Vi tar en låt på det. Den här är till dig, Gunnar. |
| 2:53 | notis |  | 📻 Radio Tippen: Radio Tippen, Kjelle här. Skjulet vid tippen har fått generator. Vi tar en låt på det. Den här är till dig, Gunnar. |
| 2:53 | röst | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått generator. Vi tar en låt på det. Den här är till dig, Gunnar. · REAKTION |
| 2:55 | aliSalt | ali | 105 |
| 3:02 | klar | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått generator. Vi tar en låt på det. Den här är till dig, Gunnar. |
| 3:23 | skratt | du | falsk tuta |
| 3:23 | väntar | värld:TUUT! Hej grannen! | TUUT! Hej grannen! |
| 3:27 | upplåst | mala | kvarnmotor |
| 3:27 | brott | UPPLÅST | kvarnmotor (mala 18 av 10) |
| 3:27 | händelse | upplast | id=kvarnmotor flask=mala |
| 3:27 | paket |  | tanke → sms |
| 3:27 | tanke | du | Mina armar… Kvarnen borde veva själv. |
| 3:27 | väntar | du | Mina armar… Kvarnen borde veva själv. |
| 3:27 | väntar | ali | Ali här. En motor? Jag har en. Från en gammal tvättmaskin. Den centrifugerar fortfarande om man ber snällt. |
| 3:30 | händelse | printStart | sak=kruka |
| 3:32 | toast | fel | Ingen ström – trampa cykeln |
| 3:34 | toast | guld | ✅ |
| 3:34 | händelse | printKlar | sak=kruka n=7 |
| 3:34 | händelse | tagitUrPrint | sak=kruka n=1 |
| 3:41 | sak | ali | Ali här. En motor? Jag har en. Från en gammal tvättmaskin. Den centrifugerar fortfarande om man ber snällt. |
| 3:41 | sms | ali | Ali här. En motor? Jag har en. Från en gammal tvättmaskin. Den centrifugerar fortfarande om man ber snällt. |
| 3:41 | sms-bubbla | ali | Ali här. En motor? Jag har en. Från en gammal tvättmaskin. Den centrifugerar fortfarande om man ber snällt. |
| 3:41 | röst | ali | Ali här. En motor? Jag har en. Från en gammal tvättmaskin. Den centrifugerar fortfarande om man ber snällt. · STORY |
| 3:42 | aliSalt | ali | 105 |
| 3:50 | klar | ali | Ali här. En motor? Jag har en. Från en gammal tvättmaskin. Den centrifugerar fortfarande om man ber snällt. |
| 3:52 | struken | värld:TUUT! Hej grannen! | TUUT! Hej grannen! |
| 3:54 | toast | guld | 3D-modell köpt – printa kvarnmotor på skrivaren |
| 3:54 | händelse | kopt | sak=kvarnmotor |
| 3:55 | händelse | malKlart | id=kopMotor del=Dag 2 – Tippen bredvid nasta=monteraMotor |
| 3:55 | struken | kedja | motorKopt |
| 3:55 | väntar | du | Motorn ska sitta där veven sitter. Jag printar den först. |
| 3:55 | målruta |  | Printa kvarnmotorn till kvarnen |
| 3:55 | MÅL |  | Printa kvarnmotorn till kvarnen |
| 3:55 | sak | du | Motorn ska sitta där veven sitter. Jag printar den först. |
| 3:55 | pil |  | Printa kvarnmotorn till kvarnen |
| 3:55 | notis | tanke | 💭 Motorn ska sitta där veven sitter. Jag printar den först. |
| 3:55 | röst | du | Motorn ska sitta där veven sitter. Jag printar den först. · MÅL |
| 3:55 | nick |  | nick:22 |
| 3:59 | kvittens-bock |  | ✓ Köp kvarnmotorn hos Ali (50 kr) |
| 4:00 | klar | du | Motorn ska sitta där veven sitter. Jag printar den först. |
| 4:02 | väntar | mamma | Har du frusit än? |
| 4:09 | händelse | printStart | sak=byggsats:kvarnmotor |
| 4:11 | händelse | printKlar | sak=byggsats:kvarnmotor n=1 |
| 4:11 | toast | guld | ✅ |
| 4:12 | väntar | info:guld | ⚙️ Kvarnmotorn ligger i handen – klicka på kvarnen för att skruva fast den |
| 4:12 | händelse | tagitUrPrint | sak=byggsats:kvarnmotor n=1 |
| 4:12 | paket |  | sms |
| 4:12 | väntar | ali | Ali här. Ännu en ritning som blev på riktigt: Kvarnmotor. Semesterkassan växer. Livet växer. |
| 4:12 | sak | info:guld | ⚙️ Kvarnmotorn ligger i handen – klicka på kvarnen för att skruva fast den |
| 4:12 | kvitto-visas | info:guld | ⚙️ Kvarnmotorn ligger i handen – klicka på kvarnen för att skruva fast den |
| 4:12 | toast | guld | ⚙️ Kvarnmotorn ligger i handen – klicka på kvarnen för att skruva fast den |
| 4:14 | klar | info:guld | ⚙️ Kvarnmotorn ligger i handen – klicka på kvarnen för att skruva fast den |
| 4:17 | väntar | info:guld | ⚙️ Motorn sitter där veven satt – nu mal kvarnen själv. |
| 4:17 | händelse | monterat | sak=kvarnmotor |
| 4:17 | paket |  | tanke |
| 4:17 | tanke | du | Motorn sitter där veven satt. Mina armar tackar. |
| 4:17 | väntar | du | Motorn sitter där veven satt. Mina armar tackar. |
| 4:17 | monterat | du | byggsats:kvarnmotor |
| 4:17 | händelse | monterat | sak=kvarnmotor |
| 4:17 | sak | info:guld | ⚙️ Motorn sitter där veven satt – nu mal kvarnen själv. |
| 4:17 | kvitto-visas | info:guld | ⚙️ Motorn sitter där veven satt – nu mal kvarnen själv. |
| 4:17 | toast | guld | ⚙️ Motorn sitter där veven satt – nu mal kvarnen själv. |
| 4:17 | händelse | malKlart | id=monteraMotor del=Dag 2 – Tippen bredvid nasta=kopSack |
| 4:17 | struken | du | Motorn sitter där veven satt. Mina armar tackar. |
| 4:17 | väntar | du | Gården är full av skräp. Jag börjar vid skjulet. |
| 4:17 | MÅL |  | Kolla vad som flög ut från sopbilen |
| 4:19 | klar | info:guld | ⚙️ Motorn sitter där veven satt – nu mal kvarnen själv. |
| 4:19 | målruta |  | Kolla vad som flög ut från sopbilen |
| 4:21 | kvittens-bock |  | ✓ Printa kvarnmotorn till kvarnen |
| 4:21 | sak | du | Gården är full av skräp. Jag börjar vid skjulet. |
| 4:21 | pil |  | Kolla vad som flög ut från sopbilen |
| 4:21 | notis | tanke | 💭 Gården är full av skräp. Jag börjar vid skjulet. |
| 4:21 | röst | du | Gården är full av skräp. Jag börjar vid skjulet. · MÅL |
| 4:25 | klar | du | Gården är full av skräp. Jag börjar vid skjulet. |
| 4:30 | paket |  | brev → ge → tanke |
| 4:30 | väntar | rolf | Du sliter ju. Ingen gör så nuförtin. Ta dessa så går dä lättare. / Rolf – ja kör sopbilen å har hand om tippen bredvid. MVH ROLF​ |
| 4:30 | väntar |  | (läget ändras) |
| 4:30 | tanke | du | Rolf… gubben i sopbilen. Han har tippen bredvid. Han verkar schysst. |
| 4:30 | väntar | du | Rolf… gubben i sopbilen. Han har tippen bredvid. Han verkar schysst. |
| 4:30 | sak | rolf | Du sliter ju. Ingen gör så nuförtin. Ta dessa så går dä lättare. / Rolf – ja kör sopbilen å har hand om tippen bredvid. MVH ROLF​ |
| 4:30 | lapp | Lapp från Rolf | Du sliter ju. Ingen gör så nuförtin. Ta dessa så går dä lättare. / Rolf – ja kör sopbilen å har hand om tippen bredvid. MVH ROLF​ |
| 4:30 | röst | rolf | Du sliter ju. Ingen gör så nuförtin. Ta dessa så går dä lättare. / Rolf – ja kör sopbilen å har hand om tippen bredvid. MVH ROLF​ · STORY |
| 4:41 | klar | rolf | Du sliter ju. Ingen gör så nuförtin. Ta dessa så går dä lättare. / Rolf – ja kör sopbilen å har hand om tippen bredvid. MVH ROLF​ |
| 4:42 | väntar | info:guld | 🗑️ Sopsäcken är över axeln! Du bär 10 skräp nu. |
| 4:42 | tog på | du | byggsats:korg |
| 4:42 | händelse | monterat | sak=korg |
| 4:42 | sak | info:guld | 🗑️ Sopsäcken är över axeln! Du bär 10 skräp nu. |
| 4:42 | kvitto-visas | info:guld | 🗑️ Sopsäcken är över axeln! Du bär 10 skräp nu. |
| 4:42 | toast | guld | 🗑️ Sopsäcken är över axeln! Du bär 10 skräp nu. |
| 4:42 | händelse | malKlart | id=kopSack del=Dag 2 – Tippen bredvid nasta=n1-stada-klart-garden |
| 4:42 | händelse | malKlart | id=n1-stada-klart-garden del=Dag 2 – Tippen bredvid nasta=rolf0-brev |
| 4:42 | väntar | du | Gården är STÄDAD. Av mig. Frivilligt. Mamma skulle aldrig tro det. |
| 4:42 | väntar | du | Vänta på sopbilen. Den lämnar något. |
| 4:42 | MÅL |  | Vänta på sopbilen. Den lämnar något. |
| 4:44 | klar | info:guld | 🗑️ Sopsäcken är över axeln! Du bär 10 skräp nu. |
| 4:44 | sak | du | Gården är STÄDAD. Av mig. Frivilligt. Mamma skulle aldrig tro det. |
| 4:44 | kvitto-visas | du | Gården är STÄDAD. Av mig. Frivilligt. Mamma skulle aldrig tro det. |
| 4:44 | lapp | 📔 Dagbok | Gården är STÄDAD. Av mig. Frivilligt. Mamma skulle aldrig tro det. |
| 4:44 | meddelande | du | Gården är STÄDAD. Av mig. Frivilligt. Mamma skulle aldrig tro det. |
| 4:44 | dagbokkort | du | Gården är STÄDAD. Av mig. Frivilligt. Mamma skulle aldrig tro det. |
| 4:45 | röst | du | Dag 2. 20 dagar till jul. Gården är STÄDAD. Av mig. Frivilligt. Mamma skulle aldrig tro det. · STORY |
| 4:53 | händelse | brevLast | id=gard |
| 4:53 | klar | du | Gården är STÄDAD. Av mig. Frivilligt. Mamma skulle aldrig tro det. |
| 4:53 | målruta |  | Vänta på sopbilen. Den lämnar något. |
| 4:53 | sak | du | Vänta på sopbilen. Den lämnar något. |
| 4:53 | pil |  | Vänta på sopbilen. Den lämnar något. |
| 4:53 | röst | du | Vänta på sopbilen. Den lämnar något. · MÅL |
| 4:55 | händelse | printStart | sak=kruka |
| 4:56 | klar | du | Vänta på sopbilen. Den lämnar något. |
| 4:57 | toast | fel | Ingen ström – trampa cykeln |
| 4:58 | struken | ali | Ali här. Ännu en ritning som blev på riktigt: Kvarnmotor. Semesterkassan växer. Livet växer. |
| 4:58 | sak |  | (läget ändras) |
| 4:58 | klar |  | (läget ändras) |
| 4:59 | toast | guld | ✅ |
| 4:59 | händelse | printKlar | sak=kruka n=8 |
| 5:00 | händelse | tagitUrPrint | sak=kruka n=1 |
| 5:02 | sak | du | Rolf… gubben i sopbilen. Han har tippen bredvid. Han verkar schysst. |
| 5:02 | notis | tanke | 💭 Rolf… gubben i sopbilen. Han har tippen bredvid. Han verkar schysst. |
| 5:02 | röst | du | Rolf… gubben i sopbilen. Han har tippen bredvid. Han verkar schysst. · STORY |
| 5:07 | aliSalt | ali | 105 |
| 5:08 | klar | du | Rolf… gubben i sopbilen. Han har tippen bredvid. Han verkar schysst. |
| 5:13 | väntar | värld:TUUT! Tjena! | TUUT! Tjena! |
| 5:13 | paket |  | tanke → ge |
| 5:13 | tanke | du | Flaggan är uppe. Rolf har lämnat något. |
| 5:13 | väntar | du | Flaggan är uppe. Rolf har lämnat något. |
| 5:13 | väntar |  | (läget ändras) |
| 5:13 | skratt | du | falsk tuta |
| 5:16 | sak | du | Mina armar… Kvarnen borde veva själv. |
| 5:16 | notis | tanke | 💭 Mina armar… Kvarnen borde veva själv. |
| 5:16 | röst | du | Mina armar… Kvarnen borde veva själv. · STORY |
| 5:17 | händelse | printStart | sak=kruka |
| 5:19 | klar | du | Mina armar… Kvarnen borde veva själv. |
| 5:19 | toast | guld | ✅ |
| 5:19 | händelse | printKlar | sak=kruka n=9 |
| 5:20 | händelse | tagitUrPrint | sak=kruka n=1 |
| 5:27 | aliSalt | ali | 105 |
| 5:35 | struken | värld:TUUT! Tjena! | TUUT! Tjena! |
| 5:35 | väntar | rolf | Såg att du printar grejer. Kan du göra en sån hä? Kall öl ä viktigt. /Rolf​ |
| 5:35 | paket |  | ge |
| 5:35 | väntar |  | (läget ändras) |
| 5:35 | sak | rolf | Såg att du printar grejer. Kan du göra en sån hä? Kall öl ä viktigt. /Rolf​ |
| 5:35 | lapp | Brev från Rolf | Såg att du printar grejer. Kan du göra en sån hä? Kall öl ä viktigt. /Rolf​ |
| 5:35 | röst | rolf | Såg att du printar grejer. Kan du göra en sån hä? Kall öl ä viktigt. /Rolf​ · STORY |
| 5:35 | händelse | malKlart | id=rolf0-brev del=Dag 2 – Tippen bredvid nasta=rolf0-printa |
| 5:35 | väntar | du | Printa ölhållare med kylklamp. |
| 5:35 | MÅL |  | Printa ölhållare med kylklamp |
| 5:39 | händelse | printStart | sak=olhallare |
| 5:39 | händelse | malKlart | id=rolf0-printa del=Dag 2 – Tippen bredvid nasta=rolf0-ge |
| 5:39 | väntar | du | Ge Rolf ölhållare med kylklamp. |
| 5:39 | målruta |  | Ge Rolf ölhållare med kylklamp |
| 5:39 | MÅL |  | Ge Rolf ölhållare med kylklamp |
| 5:42 | klar | rolf | Såg att du printar grejer. Kan du göra en sån hä? Kall öl ä viktigt. /Rolf​ |
| 5:42 | händelse | brevLast | id=rolf:0 |
| 5:42 | toast | guld | ✅ |
| 5:42 | händelse | printKlar | sak=olhallare n=1 |
| 5:42 | händelse | tagitUrPrint | sak=olhallare n=1 |
| 5:43 | kvittens-bock |  | ✓ Printa ölhållare med kylklamp |
| 5:44 | struken | du | Printa ölhållare med kylklamp. |
| 5:44 | sak |  | (läget ändras) |
| 5:44 | klar |  | (läget ändras) |
| 5:44 | sak | du | Ge Rolf ölhållare med kylklamp. |
| 5:44 | pil |  | Ge Rolf ölhållare med kylklamp |
| 5:44 | röst | du | Ge Rolf ölhållare med kylklamp. · MÅL |
| 5:45 | upplåst | skrivare | rullstall |
| 5:45 | brott | UPPLÅST | rullstall (skrivare 149 av 75) |
| 5:45 | händelse | upplast | id=rullstall flask=skrivare |
| 5:45 | paket |  | tanke → sms |
| 5:45 | tanke | du | Kvarnen står och väntar för att hållaren är full. Om den rymde fler rullar kunde den mala hela tiden. |
| 5:45 | väntar | du | Kvarnen står och väntar för att hållaren är full. Om den rymde fler rullar kunde den mala hela tiden. |
| 5:45 | väntar | ali | Ali här. Rullställ. Fyra rullar i stället för en. Har ett på hyllan. |
| 5:46 | klar | du | Ge Rolf ölhållare med kylklamp. |
| 5:48 | sak | du | Kvarnen står och väntar för att hållaren är full. Om den rymde fler rullar kunde den mala hela tiden. |
| 5:48 | notis | tanke | 💭 Kvarnen står och väntar för att hållaren är full. Om den rymde fler rullar kunde den mala hela tiden. |
| 5:48 | röst | du | Kvarnen står och väntar för att hållaren är full. Om den rymde fler rullar kunde den mala hela tiden. · STORY |
| 5:56 | väntar | bud | (tips) |
| 5:57 | klar | du | Kvarnen står och väntar för att hållaren är full. Om den rymde fler rullar kunde den mala hela tiden. |
| 5:57 | händelse | lagtIPostlada | sak=olhallare rolf=0 jobb=false |
| 5:57 | struken | kedja | rolf0 |
| 5:57 | paket |  | tanke |
| 5:57 | tanke | du | Flaggan uppe. Nu får Rolf hämta den. |
| 5:57 | väntar | du | Flaggan uppe. Nu får Rolf hämta den. |
| 5:57 | händelse | malKlart | id=rolf0-ge del=Dag 2 – Tippen bredvid nasta=vindsnurra |
| 5:57 | struken | du | Flaggan uppe. Nu får Rolf hämta den. |
| 5:57 | väntar | du | En vindsnurra på skjulets tak. Då blir det ström när det blåser. |
| 5:57 | MÅL |  | Trampa, printa och sälj |
| 5:59 | sak | bud | (tips) |
| 5:59 | struken | du | Klart! Nu lägger jag den i Rolfs brevlåda vid grinden. |
| 5:59 | målruta |  | Trampa, printa och sälj |
| 6:00 | klar | bud | (tips) |
| 6:01 | kvittens-bock |  | ✓ Ge Rolf ölhållare med kylklamp |
| 6:02 | sak | du | En vindsnurra på skjulets tak. Då blir det ström när det blåser. |
| 6:02 | pil |  | Trampa, printa och sälj |
| 6:02 | notis | tanke | 💭 En vindsnurra på skjulets tak. Då blir det ström när det blåser. |
| 6:02 | röst | du | En vindsnurra på skjulets tak. Då blir det ström när det blåser. · MÅL |
| 6:08 | klar | du | En vindsnurra på skjulets tak. Då blir det ström när det blåser. |
| 6:13 | händelse | printStart | sak=kruka |
| 6:16 | toast | guld | ✅ |
| 6:16 | händelse | printKlar | sak=kruka n=10 |
| 6:16 | händelse | tagitUrPrint | sak=kruka n=1 |
| 6:22 | röst | ali | Rolf gav mig en kanna. Som min farmors. Jag ritade en sak åt honom. Säg inget, han gråter lätt. · STORY |
| 6:22 | butiksbubbla | ali | Rolf gav mig en kanna. Som min farmors. Jag ritade en sak åt honom. Säg inget, han gråter lätt. |
| 6:24 | aliSalt | ali | 105 |
| 6:27 | struken | ali | Ali här. Såg skylten. Stavningen är rätt. Det är mer än många. |
| 6:34 | händelse | printStart | sak=kruka |
| 6:35 | toast | fel | Ingen ström – trampa cykeln |
| 6:37 | sak | du | Flaggan är uppe. Rolf har lämnat något. |
| 6:37 | notis | tanke | 💭 Flaggan är uppe. Rolf har lämnat något. |
| 6:37 | röst | du | Flaggan är uppe. Rolf har lämnat något. · STORY |
| 6:37 | toast | guld | ✅ |
| 6:37 | händelse | printKlar | sak=kruka n=11 |
| 6:40 | klar | du | Flaggan är uppe. Rolf har lämnat något. |
| 6:49 | sak |  | (läget ändras) |
| 6:49 | brev | rolf | rolf:0 |
| 6:49 | klar |  | (läget ändras) |
| 7:01 | händelse | tagitUrPrint | sak=kruka n=1 |
| 7:05 | sak | ali | Ali här. Rullställ. Fyra rullar i stället för en. Har ett på hyllan. |
| 7:05 | sms | ali | Ali här. Rullställ. Fyra rullar i stället för en. Har ett på hyllan. |
| 7:05 | sms-bubbla | ali | Ali här. Rullställ. Fyra rullar i stället för en. Har ett på hyllan. |
| 7:05 | röst | ali | Ali här. Rullställ. Fyra rullar i stället för en. Har ett på hyllan. · STORY |
| 7:05 | upplåst | skrivare | trim_skrivare |
| 7:05 | brott | UPPLÅST | trim_skrivare (skrivare 75 av 75) |
| 7:05 | händelse | upplast | id=trim_skrivare flask=skrivare |
| 7:05 | paket |  | sms |
| 7:05 | väntar | ali | Ali här. Skrivartrim. Jag skruvade på min egen skrivare i natt. Den går fortare nu. Nästan för fort. |
| 7:10 | aliSalt | ali | 105 |
| 7:10 | klar | ali | Ali här. Rullställ. Fyra rullar i stället för en. Har ett på hyllan. |
| 7:16 | paket |  | tanke |
| 7:16 | tanke | du | Jaha, Rolf har hämtat ölhållare med kylklamp. |
| 7:16 | väntar | du | Jaha, Rolf har hämtat ölhållare med kylklamp. |
| 7:18 | sak | du | Jaha, Rolf har hämtat ölhållare med kylklamp. |
| 7:18 | notis | tanke | 💭 Jaha, Rolf har hämtat ölhållare med kylklamp. |
| 7:18 | röst | du | Jaha, Rolf har hämtat ölhållare med kylklamp. · REAKTION |
| 7:19 | händelse | printStart | sak=kruka |
| 7:22 | toast | guld | ✅ |
| 7:22 | händelse | printKlar | sak=kruka n=12 |
| 7:22 | klar | du | Jaha, Rolf har hämtat ölhållare med kylklamp. |
| 7:23 | händelse | tagitUrPrint | sak=kruka n=1 |
| 7:30 | aliSalt | ali | 105 |
| 7:31 | scenInfo | gard | Lite skräp ramlade av flaket på gården |
| 7:38 | skratt | du | falsk tuta |
| 7:38 | väntar | värld:TUUT! Tjena! | TUUT! Tjena! |
| 7:38 | sak | värld:TUUT! Tjena! | TUUT! Tjena! |
| 7:38 | bubbla |  | TUUT! Tjena! |
| 7:39 | händelse | printStart | sak=kruka |
| 7:40 | toast | fel | Ingen ström – trampa cykeln |
| 7:41 | klar | värld:TUUT! Tjena! | TUUT! Tjena! |
| 7:43 | toast | guld | ✅ |
| 7:43 | händelse | printKlar | sak=kruka n=13 |
| 7:44 | händelse | tagitUrPrint | sak=kruka n=1 |
| 7:50 | sak | ali | Ali här. Skrivartrim. Jag skruvade på min egen skrivare i natt. Den går fortare nu. Nästan för fort. |
| 7:50 | sms | ali | Ali här. Skrivartrim. Jag skruvade på min egen skrivare i natt. Den går fortare nu. Nästan för fort. |
| 7:50 | sms-bubbla | ali | Ali här. Skrivartrim. Jag skruvade på min egen skrivare i natt. Den går fortare nu. Nästan för fort. |
| 7:50 | röst | ali | Ali här. Skrivartrim. Jag skruvade på min egen skrivare i natt. Den går fortare nu. Nästan för fort. · STORY |
| 7:51 | aliSalt | ali | 105 |
| 7:58 | klar | ali | Ali här. Skrivartrim. Jag skruvade på min egen skrivare i natt. Den går fortare nu. Nästan för fort. |
| 8:07 | händelse | printStart | sak=kruka |
| 8:10 | toast | guld | ✅ |
| 8:10 | händelse | printKlar | sak=kruka n=14 |
| 8:10 | händelse | tagitUrPrint | sak=kruka n=1 |
| 8:18 | aliSalt | ali | 105 |
| 8:27 | händelse | printStart | sak=kruka |
| 8:31 | toast | guld | ✅ |
| 8:31 | händelse | printKlar | sak=kruka n=15 |
| 8:31 | händelse | tagitUrPrint | sak=kruka n=1 |
| 8:39 | aliSalt | ali | 105 |
| 8:48 | händelse | printStart | sak=kruka |
| 8:51 | toast | guld | ✅ |
| 8:51 | händelse | printKlar | sak=kruka n=16 |
| 8:51 | händelse | tagitUrPrint | sak=kruka n=1 |
| 8:59 | aliSalt | ali | 105 |
| 9:08 | händelse | printStart | sak=kruka |
| 9:08 | toast | fel | Ingen ström – trampa cykeln |
| 9:11 | toast | guld | ✅ |
| 9:11 | händelse | printKlar | sak=kruka n=17 |
| 9:11 | händelse | tagitUrPrint | sak=kruka n=1 |
| 9:15 | upplåst | trampa | vindsnurra |
| 9:15 | brott | RESERV | vindsnurra (trampa 33 av 10) |
| 9:15 | händelse | upplast | id=vindsnurra flask=trampa |
| 9:15 | paket |  | sms |
| 9:15 | väntar | ali | Ali här. Vindsnurra till cykeln. Vinden trampar åt dig. Den är lat, men den jobbar gratis. |
| 9:15 | sak | ali | Ali här. Vindsnurra till cykeln. Vinden trampar åt dig. Den är lat, men den jobbar gratis. |
| 9:15 | sms | ali | Ali här. Vindsnurra till cykeln. Vinden trampar åt dig. Den är lat, men den jobbar gratis. |
| 9:15 | sms-bubbla | ali | Ali här. Vindsnurra till cykeln. Vinden trampar åt dig. Den är lat, men den jobbar gratis. |
| 9:15 | röst | ali | Ali här. Vindsnurra till cykeln. Vinden trampar åt dig. Den är lat, men den jobbar gratis. · STORY |
| 9:19 | aliSalt | ali | 105 |
| 9:22 | klar | ali | Ali här. Vindsnurra till cykeln. Vinden trampar åt dig. Den är lat, men den jobbar gratis. |
| 9:26 | toast | guld | 3D-modell köpt – printa vindsnurra till skjultaket på skrivaren |
| 9:26 | händelse | kopt | sak=vindsnurra |
| 9:33 | väntar | värld:TUUT! Hej grannen! | TUUT! Hej grannen! |
| 9:35 | händelse | printStart | sak=byggsats:vindsnurra |
| 9:40 | händelse | printKlar | sak=byggsats:vindsnurra n=1 |
| 9:40 | toast | guld | ✅ |
| 9:40 | sak | värld:TUUT! Hej grannen! | TUUT! Hej grannen! |
| 9:40 | bubbla |  | TUUT! Hej grannen! |
| 9:40 | väntar | info:guld | 🌬️ Vindsnurran ligger i handen – klicka på skjulet för att sätta den på taket |
| 9:40 | händelse | tagitUrPrint | sak=byggsats:vindsnurra n=1 |
| 9:43 | klar | värld:TUUT! Hej grannen! | TUUT! Hej grannen! |
| 9:43 | sak | info:guld | 🌬️ Vindsnurran ligger i handen – klicka på skjulet för att sätta den på taket |
| 9:43 | kvitto-visas | info:guld | 🌬️ Vindsnurran ligger i handen – klicka på skjulet för att sätta den på taket |
| 9:43 | toast | guld | 🌬️ Vindsnurran ligger i handen – klicka på skjulet för att sätta den på taket |
| 9:45 | klar | info:guld | 🌬️ Vindsnurran ligger i handen – klicka på skjulet för att sätta den på taket |
| 9:51 | händelse | placerat | sak=vindsnurra |
| 9:51 | kvittens | du | Den snurrar! Långsamt. Men den snurrar. |
| 9:51 | varför | du | Om det regnar i natt drunknar jag. Ett tak. |
| 9:51 | väntar | du | Den snurrar! Långsamt. Men den snurrar. |
| 9:51 | väntar | info:guld | 🌬️ Vindsnurran sitter på taket – den trampar cykeln åt dig när det blåser |
| 9:51 | monterat | du | byggsats:vindsnurra |
| 9:51 | händelse | monterat | sak=vindsnurra |
| 9:51 | sak | du | Den snurrar! Långsamt. Men den snurrar. |
| 9:51 | notis | tanke | 💭 Den snurrar! Långsamt. Men den snurrar. |
| 9:51 | röst | du | Den snurrar! Långsamt. Men den snurrar. · STORY |
| 9:51 | händelse | malKlart | id=vindsnurra del=Dag 2 – Tippen bredvid nasta=n1-bygg-dorr-skjulet |
| 9:51 | väntar | du | Det drar från dörrhålet. En dörr kan jag printa. |
| 9:51 | MÅL |  | Bygg en dörr till skjulet |
| 9:55 | klar | du | Den snurrar! Långsamt. Men den snurrar. |
| 9:55 | sak | info:guld | 🌬️ Vindsnurran sitter på taket – den trampar cykeln åt dig när det blåser |
| 9:55 | kvitto-visas | info:guld | 🌬️ Vindsnurran sitter på taket – den trampar cykeln åt dig när det blåser |
| 9:55 | toast | guld | 🌬️ Vindsnurran sitter på taket – den trampar cykeln åt dig när det blåser |
| 9:55 | målruta |  | Bygg en dörr till skjulet |
| 9:57 | klar | info:guld | 🌬️ Vindsnurran sitter på taket – den trampar cykeln åt dig när det blåser |
| 9:59 | sak | du | Det drar från dörrhålet. En dörr kan jag printa. |
| 9:59 | pil |  | Bygg en dörr till skjulet |
| 9:59 | notis | tanke | 💭 Det drar från dörrhålet. En dörr kan jag printa. |
| 9:59 | röst | du | Det drar från dörrhålet. En dörr kan jag printa. · MÅL |
| 9:59 | nick |  | nick:29 |
| 10:03 | klar | du | Det drar från dörrhålet. En dörr kan jag printa. |
| 10:05 | struken | mamma | Har du frusit än? |
| 10:10 | toast | guld | 3D-modell köpt – printa dörr på skrivaren |
| 10:10 | händelse | kopt | sak=dorr |
| 10:19 | händelse | printStart | sak=byggsats:dorr |
| 10:22 | toast | bra | Del 1 av 2 klar |
| 10:22 | väntar | notis:Storebrors skrivare: Del 1 av 2 klar | Storebrors skrivare: Del 1 av 2 klar |
| 10:23 | sak | notis:Storebrors skrivare: Del 1 av 2 klar | Storebrors skrivare: Del 1 av 2 klar |
| 10:23 | notis | bra | Storebrors skrivare: Del 1 av 2 klar |
| 10:25 | klar | notis:Storebrors skrivare: Del 1 av 2 klar | Storebrors skrivare: Del 1 av 2 klar |
| 10:26 | händelse | printKlar | sak=byggsats:dorr n=1 |
| 10:26 | toast | guld | ✅ |
| 10:51 | händelse | tagitUrPrint | sak=byggsats:dorr n=1 |
| 10:51 | paket |  | sms |
| 10:51 | väntar | ali | Ali här. Jag har inte sovit. Inte på grund av AI:n. På grund av dig. Du bygger saker av sopor. Jag har en hel butik och bygger ingenting. Det ska ändras. Kanske. Troligen. |
| 10:56 | väntar | info:guld | Dörr på plats! Trivsel +8 · Ali betalar nu +0 % |
| 10:56 | sak | info:guld | Dörr på plats! Trivsel +8 · Ali betalar nu +0 % |
| 10:56 | kvitto-visas | info:guld | Dörr på plats! Trivsel +8 · Ali betalar nu +0 % |
| 10:56 | toast | guld | Dörr på plats! Trivsel +8 · Ali betalar nu +0 % |
| 10:56 | händelse | malKlart | id=n1-bygg-dorr-skjulet del=Dag 2 – Tippen bredvid nasta=sov2 |
| 10:56 | paket |  | lapp |
| 10:56 | väntar | du | Dag 2 är slut. Nu vet Ali att jag bor HÄR. Taket läcker. I morgon. |
| 10:56 | paket |  | sms |
| 10:56 | väntar | bror | Mamma ringde mig fyra gånger förresten. Snyggt jobbat 😂 |
| 10:56 | skratt | bror | Mamma ringde mig fyra gånger förresten. |
| 10:56 | väntar | du | Klart för idag – sov när du vill. |
| 10:56 | MÅL |  | Klart för idag – sov när du vill |
| 10:58 | klar | info:guld | Dörr på plats! Trivsel +8 · Ali betalar nu +0 % |
| 11:00 | målruta |  | Klart för idag – sov när du vill |
| 11:00 | kvittens-bock |  | ✓ Bygg en dörr till skjulet |
| 11:00 | sak | du | Klart för idag – sov när du vill. |
| 11:00 | pil |  | Klart för idag – sov när du vill |
| 11:00 | röst | du | Klart för idag – sov när du vill. · MÅL |
| 11:03 | klar | du | Klart för idag – sov när du vill. |
| 11:03 | väntar | notis:🌇 Klockan är 21. Ali slår igen luckan.  | 🌇 Klockan är 21. Ali slår igen luckan. Dagens jobb är klart – gå in i skjulet och sov i sängen. |
| 11:05 | sak | du | Dag 2 är slut. Nu vet Ali att jag bor HÄR. Taket läcker. I morgon. |
| 11:05 | lapp | 📔 Dagbok | Dag 2 är slut. Nu vet Ali att jag bor HÄR. Taket läcker. I morgon. |
| 11:05 | meddelande | du | Dag 2 är slut. Nu vet Ali att jag bor HÄR. Taket läcker. I morgon. |
| 11:05 | dagbokkort | du | Dag 2 är slut. Nu vet Ali att jag bor HÄR. Taket läcker. I morgon. |
| 11:05 | röst | du | Dag 2. 20 dagar till jul. Dag 2 är slut. Nu vet Ali att jag bor HÄR. Taket läcker. I morgon. · STORY |
| 11:14 | händelse | brevLast | id=kvall2 |
| 11:14 | klar | du | Dag 2 är slut. Nu vet Ali att jag bor HÄR. Taket läcker. I morgon. |
| 11:15 | skratt | du | falsk tuta |
| 11:16 | struken | notis:🌇 Klockan är 21. Ali slår igen luckan.  | 🌇 Klockan är 21. Ali slår igen luckan. Dagens jobb är klart – gå in i skjulet och sov i sängen. |
| 11:18 | nattkort | du | 🌙 Dag 2 är slut. God natt. zzz… DAGENS PRINTAR Blomkruka × 16 Ölhållare med kylklamp × 1 Totalt 17 printar 💰 Tjänat i dag +1 680 kr |

<details><summary>Botens handlingar dag 2</summary>

- 0:00 — dag 2 börjar — (255 kr)
- 0:08 popup: "FORTSÄTT" (255 kr)
- 0:16 popup: "FORTSÄTT" (255 kr)
- 0:24 tjänar pengar till väntar på flaskhalsen för kvarnmotor: 255/295 kr → printar blomkruka (105 kr) (255 kr)
- 0:35 plockar 6 skräp på gården (bär max 6) (255 kr)
- 0:42 gå till kvarnen (32 m) (255 kr)
- 0:47 gå till skrivaren (1 m) (255 kr)
- 0:48 printar Blomkruka (255 kr)
- 0:52 tar ut 1 st ur skrivaren (255 kr)
- 0:58 gå till Ali (28 m) (255 kr)
- 0:58 öppnar Alis butik – sälja (255 kr)
- 0:59 säljer hos Ali: +105 kr (360 kr)
- 1:05 tjänar pengar till väntar på flaskhalsen för kvarnmotor: 360/400 kr → printar blomkruka (105 kr) (360 kr)
- 1:10 gå till skrivaren (25 m) (360 kr)
- 1:12 printar Blomkruka (360 kr)
- 1:21 popup: "FORTSÄTT" (360 kr)
- 1:22 gå till cykeln (1 m) (360 kr)
- 1:25 tar ut 1 st ur skrivaren (360 kr)
- 1:30 gå till Ali (25 m) (360 kr)
- 1:30 öppnar Alis butik – sälja (360 kr)
- 1:32 säljer hos Ali: +105 kr (465 kr)
- 1:34 tjänar pengar till väntar på flaskhalsen för kvarnmotor: 465/505 kr → printar blomkruka (105 kr) (465 kr)
- 1:46 plockar 4 skräp på gården (bär max 6) (465 kr)
- 1:52 gå till kvarnen (31 m) (465 kr)
- 1:57 gå till skrivaren (2 m) (465 kr)
- 1:59 printar Blomkruka (465 kr)
- 2:02 tar ut 1 st ur skrivaren (465 kr)
- 2:08 gå till Ali (28 m) (465 kr)
- 2:08 öppnar Alis butik – sälja (465 kr)
- 2:10 säljer hos Ali: +105 kr (570 kr)
- 2:19 tjänar pengar till väntar på flaskhalsen för kvarnmotor: 570/610 kr → printar blomkruka (105 kr) (570 kr)
- 2:24 gå till skrivaren (25 m) (570 kr)
- 2:25 printar Blomkruka (570 kr)
- 2:27 gå till cykeln (1 m) (570 kr)
- 2:29 tar ut 1 st ur skrivaren (570 kr)
- 2:34 gå till Ali (25 m) (570 kr)
- 2:34 öppnar Alis butik – sälja (570 kr)
- 2:36 säljer hos Ali: +105 kr (675 kr)
- 2:38 tjänar pengar till väntar på flaskhalsen för kvarnmotor: 675/715 kr → printar blomkruka (105 kr) (675 kr)
- 2:43 gå till skrivaren (25 m) (675 kr)
- 2:44 printar Blomkruka (675 kr)
- 2:48 tar ut 1 st ur skrivaren (675 kr)
- 2:53 gå till Ali (25 m) (675 kr)
- 2:53 öppnar Alis butik – sälja (675 kr)
- 2:55 säljer hos Ali: +105 kr (780 kr)
- 3:05 tjänar pengar till väntar på flaskhalsen för kvarnmotor: 780/820 kr → printar blomkruka (105 kr) (780 kr)
- 3:16 plockar 4 skräp på gården (bär max 6) (780 kr)
- 3:24 gå till kvarnen (37 m) (780 kr)
- 3:29 gå till skrivaren (1 m) (780 kr)
- 3:30 printar Blomkruka (780 kr)
- 3:32 gå till cykeln (2 m) (780 kr)
- 3:35 tar ut 1 st ur skrivaren (780 kr)
- 3:41 gå till Ali (26 m) (780 kr)
- 3:41 öppnar Alis butik – sälja (780 kr)
- 3:42 säljer hos Ali: +105 kr (885 kr)
- 3:52 öppnar Alis butik – köpa kvarnmotor (885 kr)
- 3:54 köper kvarnmotor för 50 kr (835 kr)
- 4:07 gå till skrivaren (25 m) (835 kr)
- 4:09 printar Kvarnmotor (835 kr)
- 4:12 tar ut 1 st ur skrivaren (835 kr)
- 4:17 gå till skruva fast kvarnmotorn (3 m) (835 kr)
- 4:30 gå till Rolfs sopsäck (16 m) (835 kr)
- 4:42 tar på korg (835 kr)
- 4:43 tjänar pengar till väntar på sopbilen (BO): 835/895 kr → printar blomkruka (105 kr) (835 kr)
- 4:53 popup: "FORTSÄTT" (835 kr)
- 4:54 gå till skrivaren (12 m) (835 kr)
- 4:55 printar Blomkruka (835 kr)
- 4:58 gå till cykeln (1 m) (835 kr)
- 5:00 tar ut 1 st ur skrivaren (835 kr)
- 5:05 gå till Ali (25 m) (835 kr)
- 5:05 öppnar Alis butik – sälja (835 kr)
- 5:07 säljer hos Ali: +105 kr (940 kr)
- 5:10 tjänar pengar till väntar på sopbilen (BO): 940/1000 kr → printar blomkruka (105 kr) (940 kr)
- 5:15 gå till skrivaren (25 m) (940 kr)
- 5:17 printar Blomkruka (940 kr)
- 5:20 tar ut 1 st ur skrivaren (940 kr)
- 5:25 gå till Ali (25 m) (940 kr)
- 5:25 öppnar Alis butik – sälja (940 kr)
- 5:27 säljer hos Ali: +105 kr (1045 kr)
- 5:35 gå till Rolfs postlåda (31 m) (1045 kr)
- 5:37 gå till skrivaren (7 m) (1045 kr)
- 5:39 printar Ölhållare med kylklamp (1045 kr)
- 5:40 gå till cykeln (1 m) (1045 kr)
- 5:43 tar ut 1 st ur skrivaren (1045 kr)
- 5:56 valj olhallare: true, vald olhallare, post {"l":null,"tr":null,"tm":[]}, nummer false (1045 kr)
- 5:57 gå till Rolfs postlåda (7 m) (1045 kr)
- 6:10 tjänar pengar till väntar på flaskhalsen för vindsnurra: 1045/1085 kr → printar blomkruka (105 kr) (1045 kr)
- 6:11 gå till skrivaren (6 m) (1045 kr)
- 6:13 printar Blomkruka (1045 kr)
- 6:17 tar ut 1 st ur skrivaren (1045 kr)
- 6:22 gå till Ali (28 m) (1045 kr)
- 6:22 öppnar Alis butik – sälja (1045 kr)
- 6:24 säljer hos Ali: +105 kr (1150 kr)
- 6:27 tjänar pengar till väntar på flaskhalsen för vindsnurra: 1150/1190 kr → printar blomkruka (105 kr) (1150 kr)
- 6:32 gå till skrivaren (25 m) (1150 kr)
- 6:34 printar Blomkruka (1150 kr)
- 6:35 gå till cykeln (1 m) (1150 kr)
- 6:54 plockar 7 skräp på gården (bär max 10) (1150 kr)
- 7:00 gå till kvarnen (33 m) (1150 kr)
- 7:01 gå till skrivaren (2 m) (1150 kr)
- 7:02 tar ut 1 st ur skrivaren (1150 kr)
- 7:08 gå till Ali (28 m) (1150 kr)
- 7:08 öppnar Alis butik – sälja (1150 kr)
- 7:10 säljer hos Ali: +105 kr (1255 kr)
- 7:12 tjänar pengar till väntar på flaskhalsen för vindsnurra: 1255/1295 kr → printar blomkruka (105 kr) (1255 kr)
- 7:18 gå till skrivaren (25 m) (1255 kr)
- 7:19 printar Blomkruka (1255 kr)
- 7:23 tar ut 1 st ur skrivaren (1255 kr)
- 7:28 gå till Ali (25 m) (1255 kr)
- 7:28 öppnar Alis butik – sälja (1255 kr)
- 7:30 säljer hos Ali: +105 kr (1360 kr)
- 7:32 tjänar pengar till väntar på flaskhalsen för vindsnurra: 1360/1400 kr → printar blomkruka (105 kr) (1360 kr)
- 7:38 gå till skrivaren (25 m) (1360 kr)
- 7:39 printar Blomkruka (1360 kr)
- 7:40 gå till cykeln (1 m) (1360 kr)
- 7:44 tar ut 1 st ur skrivaren (1360 kr)
- 7:49 gå till Ali (25 m) (1360 kr)
- 7:49 öppnar Alis butik – sälja (1360 kr)
- 7:51 säljer hos Ali: +105 kr (1465 kr)
- 8:00 tjänar pengar till väntar på flaskhalsen för vindsnurra: 1465/1505 kr → printar blomkruka (105 kr) (1465 kr)
- 8:05 gå till skrivaren (25 m) (1465 kr)
- 8:07 printar Blomkruka (1465 kr)
- 8:11 tar ut 1 st ur skrivaren (1465 kr)
- 8:16 gå till Ali (25 m) (1465 kr)
- 8:16 öppnar Alis butik – sälja (1465 kr)
- 8:18 säljer hos Ali: +105 kr (1570 kr)
- 8:20 tjänar pengar till väntar på flaskhalsen för vindsnurra: 1570/1610 kr → printar blomkruka (105 kr) (1570 kr)
- 8:25 gå till skrivaren (25 m) (1570 kr)
- 8:27 printar Blomkruka (1570 kr)
- 8:28 gå till cykeln (1 m) (1570 kr)
- 8:32 tar ut 1 st ur skrivaren (1570 kr)
- 8:37 gå till Ali (25 m) (1570 kr)
- 8:37 öppnar Alis butik – sälja (1570 kr)
- 8:39 säljer hos Ali: +105 kr (1675 kr)
- 8:41 tjänar pengar till väntar på flaskhalsen för vindsnurra: 1675/1715 kr → printar blomkruka (105 kr) (1675 kr)
- 8:46 gå till skrivaren (25 m) (1675 kr)
- 8:48 printar Blomkruka (1675 kr)
- 8:52 tar ut 1 st ur skrivaren (1675 kr)
- 8:57 gå till Ali (25 m) (1675 kr)
- 8:57 öppnar Alis butik – sälja (1675 kr)
- 8:59 säljer hos Ali: +105 kr (1780 kr)
- 9:01 tjänar pengar till väntar på flaskhalsen för vindsnurra: 1780/1820 kr → printar blomkruka (105 kr) (1780 kr)
- 9:06 gå till skrivaren (25 m) (1780 kr)
- 9:08 printar Blomkruka (1780 kr)
- 9:08 gå till cykeln (1 m) (1780 kr)
- 9:12 tar ut 1 st ur skrivaren (1780 kr)
- 9:17 gå till Ali (25 m) (1780 kr)
- 9:17 öppnar Alis butik – sälja (1780 kr)
- 9:19 säljer hos Ali: +105 kr (1885 kr)
- 9:24 öppnar Alis butik – köpa vindsnurra till skjultaket (1885 kr)
- 9:27 köper vindsnurra för 133 kr (1752 kr)
- 9:33 gå till skrivaren (25 m) (1752 kr)
- 9:35 printar Vindsnurra till skjultaket (1752 kr)
- 9:38 gå till cykeln (1 m) (1752 kr)
- 9:41 tar ut 1 st ur skrivaren (1752 kr)
- 9:51 gå till sätt vindsnurran på taket (20 m) (1752 kr)
- 10:09 gå till Ali (20 m) (1752 kr)
- 10:09 öppnar Alis butik – köpa dörr (1752 kr)
- 10:11 köper dorr för 120 kr (1632 kr)
- 10:17 gå till skrivaren (25 m) (1632 kr)
- 10:19 printar Dörr (2 delar) (1632 kr)
- 10:43 plockar 10 skräp på gården (bär max 10) (1632 kr)
- 10:50 gå till kvarnen (36 m) (1632 kr)
- 10:51 gå till skrivaren (1 m) (1632 kr)
- 10:52 tar ut 1 st ur skrivaren (1632 kr)
- 10:56 gå till skjulet (21 m) (1632 kr)
- 11:14 popup: "FORTSÄTT" (1632 kr)
- 11:16 gå till sängen (1 m) (1632 kr)

</details>

## Dag 3

| Tid | Källa | Vem | Text |
|---|---|---|---|
| 11:18 | vara | ali | ingen |
| 11:18 | händelse | malKlart | id=sov2 del=Dag 2 – Tippen bredvid nasta=rolf1-brev |
| 11:18 | vara | ali | kruka |
| 11:19 | MÅL |  | Vänta på sopbilen. Den lämnar något. |
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
| 0:17 | scenInfo | gard | Lite skräp ramlade av flaket på gården |
| 0:17 | skratt | du | däcket rullar iväg |
| 0:18 | klar | notis:Ali vill ha idag · Blomkruka · +50 % | Ali vill ha idag · Blomkruka · +50 % |
| 0:20 | struken | ali | Ali här. Jag har inte sovit. Inte på grund av AI:n. På grund av dig. Du bygger saker av sopor. Jag har en hel butik och bygger ingenting. Det ska ändras. Kanske. Troligen. |
| 0:20 | struken | bror | Mamma ringde mig fyra gånger förresten. Snyggt jobbat 😂 |
| 0:20 | skratt | bror | Mamma ringde mig fyra gånger förresten. |
| 0:24 | väntar | värld:TUUT! Tjena! | TUUT! Tjena! |
| 0:31 | väntar | rolf | Den funkar! Hä. Ta så mycke skräp du vill. /Rolf​ |
| 0:31 | sak | värld:TUUT! Tjena! | TUUT! Tjena! |
| 0:31 | bubbla |  | TUUT! Tjena! |
| 0:32 | paket |  | tanke |
| 0:32 | tanke | du | Rolfs tipp. Hela högen. |
| 0:32 | väntar | du | Rolfs tipp. Hela högen. |
| 0:32 | monterat | du | byggsats:tippnyckel |
| 0:32 | händelse | monterat | sak=tippnyckel |
| 0:32 | scenInfo | du | Kameran sveper över tippen |
| 0:34 | klar | värld:TUUT! Tjena! | TUUT! Tjena! |
| 0:36 | tanke | du | …Det här räcker i hundra år. |
| 0:36 | väntar | du | …Det här räcker i hundra år. |
| 0:37 | sak | du | Rolfs tipp. Hela högen. |
| 0:37 | kvitto-visas | du | Rolfs tipp. Hela högen. |
| 0:37 | notis | tanke | 💭 Rolfs tipp. Hela högen. |
| 0:37 | röst | du | Rolfs tipp. Hela högen. · REAKTION |
| 0:38 | skratt | du | falsk tuta |
| 0:39 | klar | du | Rolfs tipp. Hela högen. |
| 0:43 | händelse | printStart | sak=kruka |
| 0:48 | toast | guld | ✅ |
| 0:48 | händelse | printKlar | sak=kruka n=18 |
| 0:48 | händelse | tagitUrPrint | sak=kruka n=1 |
| 0:49 | sak | rolf | Den funkar! Hä. Ta så mycke skräp du vill. /Rolf​ |
| 0:49 | lapp | Brev från Rolf | Den funkar! Hä. Ta så mycke skräp du vill. /Rolf​ |
| 0:49 | röst | rolf | Den funkar! Hä. Ta så mycke skräp du vill. /Rolf​ · STORY |
| 0:53 | klar | rolf | Den funkar! Hä. Ta så mycke skräp du vill. /Rolf​ |
| 0:53 | händelse | brevLast | id=rolftack:0 |
| 0:54 | röst | ali | Pappa sa: driv butiken, Ali. Så jag driver butiken. På nätterna promptar jag. Det är mitt riktiga jobb. · STORY |
| 0:54 | butiksbubbla | ali | Pappa sa: driv butiken, Ali. Så jag driver butiken. På nätterna promptar jag. Det är mitt riktiga jobb. |
| 0:56 | aliSalt | ali | 105 |
| 1:06 | händelse | printStart | sak=kruka |
| 1:09 | sak | du | …Det här räcker i hundra år. |
| 1:09 | notis | tanke | 💭 …Det här räcker i hundra år. |
| 1:09 | röst | du | …Det här räcker i hundra år. · STORY |
| 1:12 | toast | guld | ✅ |
| 1:12 | händelse | printKlar | sak=kruka n=19 |
| 1:12 | händelse | tagitUrPrint | sak=kruka n=1 |
| 1:12 | klar | du | …Det här räcker i hundra år. |
| 1:19 | aliSalt | ali | 105 |
| 1:29 | händelse | printStart | sak=kruka |
| 1:35 | toast | guld | ✅ |
| 1:35 | händelse | printKlar | sak=kruka n=20 |
| 1:35 | händelse | tagitUrPrint | sak=kruka n=1 |
| 1:42 | aliSalt | ali | 105 |
| 1:53 | händelse | printStart | sak=kruka |
| 1:58 | toast | guld | ✅ |
| 1:58 | händelse | printKlar | sak=kruka n=21 |
| 1:58 | händelse | tagitUrPrint | sak=kruka n=1 |
| 2:03 | väntar | mamma | Har du sovit nåt? Du har väl tandborste? Och äter du? Svara inte, jag vet att du är arg. ❤️ /Mamma |
| 2:05 | väntar | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått en DÖRR. Och vindsnurra till skjultaket. Mer säger jag inte. Gunnar vet. |
| 2:05 | radio | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått en DÖRR. Och vindsnurra till skjultaket. Mer säger jag inte. Gunnar vet. |
| 2:05 | skratt | du | Radio-Kjelle |
| 2:06 | aliSalt | ali | 105 |
| 2:06 | sak | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått en DÖRR. Och vindsnurra till skjultaket. Mer säger jag inte. Gunnar vet. |
| 2:06 | notis |  | 📻 Radio Tippen: Radio Tippen, Kjelle här. Skjulet vid tippen har fått en DÖRR. Och vindsnurra till skjultaket. Mer säger jag inte. Gunnar vet. |
| 2:06 | röst | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått en DÖRR. Och vindsnurra till skjultaket. Mer säger jag inte. Gunnar vet. · REAKTION |
| 2:17 | klar | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått en DÖRR. Och vindsnurra till skjultaket. Mer säger jag inte. Gunnar vet. |
| 2:26 | händelse | printStart | sak=kruka |
| 2:31 | toast | guld | ✅ |
| 2:31 | händelse | printKlar | sak=kruka n=22 |
| 2:31 | händelse | tagitUrPrint | sak=kruka n=1 |
| 2:32 | skratt | du | falsk tuta |
| 2:39 | aliSalt | ali | 105 |
| 2:40 | paket |  | ge |
| 2:40 | väntar |  | (läget ändras) |
| 2:41 | sak |  | (läget ändras) |
| 2:41 | brev | rolf | rolf:1 |
| 2:41 | klar |  | (läget ändras) |
| 2:49 | väntar | rolf | Nämen. Kajsa knuffa ner min flasköppnare i tippen. Kan du göra en ny, mä magnet? /Rolf​ |
| 2:49 | paket |  | ge |
| 2:49 | väntar |  | (läget ändras) |
| 2:49 | sak | rolf | Nämen. Kajsa knuffa ner min flasköppnare i tippen. Kan du göra en ny, mä magnet? /Rolf​ |
| 2:49 | lapp | Brev från Rolf | Nämen. Kajsa knuffa ner min flasköppnare i tippen. Kan du göra en ny, mä magnet? /Rolf​ |
| 2:49 | röst | rolf | Nämen. Kajsa knuffa ner min flasköppnare i tippen. Kan du göra en ny, mä magnet? /Rolf​ · STORY |
| 2:49 | händelse | malKlart | id=rolf1-brev del=Dag 3 – En skrivare till och taket nasta=n2-hamta-skrap |
| 2:49 | väntar | du | Nyckeln till tippen. Där ligger skräpet i högar. |
| 2:49 | MÅL |  | Hämta 5 skräp på soptippen |
| 2:52 | målruta |  | Hämta 5 skräp på soptippen |
| 2:53 | händelse | malKlart | id=n2-hamta-skrap del=Dag 3 – En skrivare till och taket nasta=rolf1-printa |
| 2:53 | struken | kedja | tippen |
| 2:53 | väntar | du | Printa flasköppnare med magnet. |
| 2:53 | MÅL |  | Printa flasköppnare med magnet |
| 2:53 | skratt | du | falsk tuta |
| 2:56 | klar | rolf | Nämen. Kajsa knuffa ner min flasköppnare i tippen. Kan du göra en ny, mä magnet? /Rolf​ |
| 2:56 | händelse | brevLast | id=rolf:1 |
| 2:57 | målruta |  | Printa flasköppnare med magnet |
| 2:57 | kvittens-bock |  | ✓ Hämta 5 skräp på soptippen |
| 2:58 | struken | du | Nyckeln till tippen. Där ligger skräpet i högar. |
| 2:58 | sak |  | (läget ändras) |
| 2:58 | klar |  | (läget ändras) |
| 2:58 | sak | du | Printa flasköppnare med magnet. |
| 2:58 | pil |  | Printa flasköppnare med magnet |
| 2:58 | röst | du | Printa flasköppnare med magnet. · MÅL |
| 2:58 | nick |  | nick:33 |
| 3:01 | klar | du | Printa flasköppnare med magnet. |
| 3:05 | händelse | printStart | sak=flaskoppnare |
| 3:05 | händelse | malKlart | id=rolf1-printa del=Dag 3 – En skrivare till och taket nasta=rolf1-ge |
| 3:05 | väntar | du | Ge Rolf flasköppnare med magnet. |
| 3:05 | målruta |  | Ge Rolf flasköppnare med magnet |
| 3:05 | MÅL |  | Ge Rolf flasköppnare med magnet |
| 3:05 | sak | du | Ge Rolf flasköppnare med magnet. |
| 3:05 | pil |  | Ge Rolf flasköppnare med magnet |
| 3:05 | röst | du | Ge Rolf flasköppnare med magnet. · MÅL |
| 3:08 | klar | du | Ge Rolf flasköppnare med magnet. |
| 3:09 | toast | guld | ✅ |
| 3:09 | händelse | printKlar | sak=flaskoppnare n=1 |
| 3:09 | kvittens-bock |  | ✓ Printa flasköppnare med magnet |
| 3:10 | händelse | tagitUrPrint | sak=flaskoppnare n=1 |
| 3:12 | händelse | lagtIPostlada | sak=flaskoppnare rolf=1 jobb=false |
| 3:12 | struken | kedja | rolf1 |
| 3:12 | paket |  | tanke |
| 3:12 | tanke | du | Flaggan uppe. Nu får Rolf hämta den. |
| 3:12 | väntar | du | Flaggan uppe. Nu får Rolf hämta den. |
| 3:12 | sak | du | Flaggan uppe. Nu får Rolf hämta den. |
| 3:12 | notis | tanke | 💭 Flaggan uppe. Nu får Rolf hämta den. |
| 3:12 | röst | du | Flaggan uppe. Nu får Rolf hämta den. · REAKTION |
| 3:12 | händelse | malKlart | id=rolf1-ge del=Dag 3 – En skrivare till och taket nasta=kopBatteri |
| 3:12 | väntar | du | Ali har ett gammalt bilbatteri. Då sparar jag strömmen. |
| 3:12 | MÅL |  | Printa och sälj |
| 3:15 | klar | du | Flaggan uppe. Nu får Rolf hämta den. |
| 3:15 | målruta |  | Printa och sälj |
| 3:15 | tanke | du | En hel kanot. Kvarnen skulle äta upp sig själv. |
| 3:15 | väntar | du | En hel kanot. Kvarnen skulle äta upp sig själv. |
| 3:16 | kvittens-bock |  | ✓ Ge Rolf flasköppnare med magnet |
| 3:18 | sak | du | Ali har ett gammalt bilbatteri. Då sparar jag strömmen. |
| 3:18 | pil |  | Printa och sälj |
| 3:18 | notis | tanke | 💭 Ali har ett gammalt bilbatteri. Då sparar jag strömmen. |
| 3:18 | röst | du | Ali har ett gammalt bilbatteri. Då sparar jag strömmen. · MÅL |
| 3:20 | händelse | printStart | sak=kruka |
| 3:22 | klar | du | Ali har ett gammalt bilbatteri. Då sparar jag strömmen. |
| 3:25 | toast | guld | ✅ |
| 3:25 | händelse | printKlar | sak=kruka n=23 |
| 3:26 | händelse | tagitUrPrint | sak=kruka n=1 |
| 3:30 | sak | du | En hel kanot. Kvarnen skulle äta upp sig själv. |
| 3:30 | notis | tanke | 💭 En hel kanot. Kvarnen skulle äta upp sig själv. |
| 3:30 | röst | du | En hel kanot. Kvarnen skulle äta upp sig själv. · REAKTION |
| 3:33 | aliSalt | ali | 105 |
| 3:34 | klar | du | En hel kanot. Kvarnen skulle äta upp sig själv. |
| 3:43 | händelse | printStart | sak=kruka |
| 3:49 | toast | guld | ✅ |
| 3:49 | händelse | printKlar | sak=kruka n=24 |
| 3:49 | händelse | tagitUrPrint | sak=kruka n=1 |
| 3:56 | aliSalt | ali | 105 |
| 3:56 | röst | ali | Dina krukor säljer. Tanterna i kvarteret älskar dem. · STORY |
| 3:56 | butiksbubbla | ali | Dina krukor säljer. Tanterna i kvarteret älskar dem. |
| 4:05 | händelse | printStart | sak=kruka |
| 4:11 | toast | guld | ✅ |
| 4:11 | händelse | printKlar | sak=kruka n=25 |
| 4:11 | händelse | tagitUrPrint | sak=kruka n=1 |
| 4:18 | aliSalt | ali | 105 |
| 4:28 | händelse | printStart | sak=kruka |
| 4:33 | toast | guld | ✅ |
| 4:33 | händelse | printKlar | sak=kruka n=26 |
| 4:33 | händelse | tagitUrPrint | sak=kruka n=1 |
| 4:40 | aliSalt | ali | 105 |
| 4:44 | paket |  | tanke |
| 4:44 | tanke | du | Jaha, Rolf har hämtat flasköppnare med magnet. |
| 4:44 | väntar | du | Jaha, Rolf har hämtat flasköppnare med magnet. |
| 4:44 | sak | du | Jaha, Rolf har hämtat flasköppnare med magnet. |
| 4:44 | notis | tanke | 💭 Jaha, Rolf har hämtat flasköppnare med magnet. |
| 4:44 | röst | du | Jaha, Rolf har hämtat flasköppnare med magnet. · REAKTION |
| 4:48 | klar | du | Jaha, Rolf har hämtat flasköppnare med magnet. |
| 4:50 | händelse | printStart | sak=kruka |
| 4:55 | toast | guld | ✅ |
| 4:55 | händelse | printKlar | sak=kruka n=27 |
| 5:25 | händelse | tagitUrPrint | sak=kruka n=1 |
| 5:33 | aliSalt | ali | 105 |
| 5:42 | händelse | printStart | sak=kruka |
| 5:47 | toast | guld | ✅ |
| 5:47 | händelse | printKlar | sak=kruka n=28 |
| 5:47 | händelse | tagitUrPrint | sak=kruka n=1 |
| 5:55 | aliSalt | ali | 105 |
| 6:04 | händelse | printStart | sak=kruka |
| 6:09 | toast | guld | ✅ |
| 6:09 | händelse | printKlar | sak=kruka n=29 |
| 6:10 | händelse | tagitUrPrint | sak=kruka n=1 |
| 6:17 | aliSalt | ali | 105 |
| 6:26 | händelse | printStart | sak=kruka |
| 6:29 | upplåst | strom | cykelbatteri |
| 6:29 | brott | RESERV | cykelbatteri (strom 37 av 15) |
| 6:29 | händelse | upplast | id=cykelbatteri flask=strom |
| 6:29 | paket |  | sms |
| 6:29 | väntar | ali | Ali här. Bilbatteriet ur min gamla Volvo står i lagret. Det sparar mer ström än powerbanken. |
| 6:29 | sak | ali | Ali här. Bilbatteriet ur min gamla Volvo står i lagret. Det sparar mer ström än powerbanken. |
| 6:29 | sms | ali | Ali här. Bilbatteriet ur min gamla Volvo står i lagret. Det sparar mer ström än powerbanken. |
| 6:29 | sms-bubbla | ali | Ali här. Bilbatteriet ur min gamla Volvo står i lagret. Det sparar mer ström än powerbanken. |
| 6:29 | röst | ali | Ali här. Bilbatteriet ur min gamla Volvo står i lagret. Det sparar mer ström än powerbanken. · STORY |
| 6:32 | toast | guld | ✅ |
| 6:32 | händelse | printKlar | sak=kruka n=30 |
| 6:32 | händelse | tagitUrPrint | sak=kruka n=1 |
| 6:37 | klar | ali | Ali här. Bilbatteriet ur min gamla Volvo står i lagret. Det sparar mer ström än powerbanken. |
| 6:39 | aliSalt | ali | 105 |
| 6:39 | skratt | du | falsk tuta |
| 6:41 | väntar | mamma | Pappa hälsar. Han sa inte det, men jag såg på honom att han ville. |
| 6:43 | toast | guld | 🔋 Bilbatteriet ligger i handen – klicka på cykeln för att koppla in det |
| 6:43 | händelse | kopt | sak=cykelbatteri |
| 6:43 | röst | ali | Ali här. Batteriet ur min gamla Volvo. Bilen dog 2016. Batteriet vägrade. · STORY |
| 6:43 | butiksbubbla | ali | Ali här. Batteriet ur min gamla Volvo. Bilen dog 2016. Batteriet vägrade. |
| 6:51 | struken | kedja | dag2 |
| 6:51 | väntar | info:guld | 🔋 Bilbatteriet är inkopplat – skrivaren printar klart även när du slutar trampa |
| 6:51 | monterat | du | byggsats:cykelbatteri |
| 6:51 | händelse | monterat | sak=cykelbatteri |
| 6:51 | sak | info:guld | 🔋 Bilbatteriet är inkopplat – skrivaren printar klart även när du slutar trampa |
| 6:51 | kvitto-visas | info:guld | 🔋 Bilbatteriet är inkopplat – skrivaren printar klart även när du slutar trampa |
| 6:51 | toast | guld | 🔋 Bilbatteriet är inkopplat – skrivaren printar klart även när du slutar trampa |
| 6:51 | händelse | malKlart | id=kopBatteri del=Dag 3 – En skrivare till och taket nasta=ryggkorg |
| 6:51 | väntar | du | Jag springer för mycket. Med en ryggkorg bär jag tio saker. |
| 6:51 | MÅL |  | Plocka skräp och mal det |
| 6:51 | upplåst | bara | ryggkorg |
| 6:51 | brott | UPPLÅST | ryggkorg (bara 7 av 6) |
| 6:51 | händelse | upplast | id=ryggkorg flask=bara |
| 6:51 | paket |  | tanke → sms |
| 6:51 | tanke | du | Säcken är full igen. Jag behöver något att bära mer i. |
| 6:51 | väntar | du | Säcken är full igen. Jag behöver något att bära mer i. |
| 6:51 | väntar | ali | Ali här. En ryggkorg. AI:n ritade den efter en bild på min mormor. Den rymmer tio. |
| 6:53 | klar | info:guld | 🔋 Bilbatteriet är inkopplat – skrivaren printar klart även när du slutar trampa |
| 6:55 | målruta |  | Bygg ryggkorgen – bär 10 skräp |
| 6:55 | kvittens-bock |  | ✓ Köp Alis gamla bilbatteri |
| 6:55 | sak | du | Jag springer för mycket. Med en ryggkorg bär jag tio saker. |
| 6:55 | pil |  | Bygg ryggkorgen – bär 10 skräp |
| 6:55 | notis | tanke | 💭 Jag springer för mycket. Med en ryggkorg bär jag tio saker. |
| 6:55 | röst | du | Jag springer för mycket. Med en ryggkorg bär jag tio saker. · MÅL |
| 6:56 | nick |  | nick:36 |
| 7:00 | klar | du | Jag springer för mycket. Med en ryggkorg bär jag tio saker. |
| 7:01 | väntar | värld:TUUT TUUT! | TUUT TUUT! |
| 7:02 | sak | du | Säcken är full igen. Jag behöver något att bära mer i. |
| 7:02 | notis | tanke | 💭 Säcken är full igen. Jag behöver något att bära mer i. |
| 7:02 | röst | du | Säcken är full igen. Jag behöver något att bära mer i. · STORY |
| 7:07 | klar | du | Säcken är full igen. Jag behöver något att bära mer i. |
| 7:11 | toast | guld | 3D-modell köpt – printa ryggkorg på skrivaren |
| 7:11 | händelse | kopt | sak=ryggkorg |
| 7:11 | struken | ali | Ali här. En ryggkorg. AI:n ritade den efter en bild på min mormor. Den rymmer tio. |
| 7:20 | händelse | printStart | sak=byggsats:ryggkorg |
| 7:23 | sak | värld:TUUT TUUT! | TUUT TUUT! |
| 7:23 | bubbla |  | TUUT TUUT! |
| 7:26 | toast | bra | Del 1 av 2 klar |
| 7:26 | klar | värld:TUUT TUUT! | TUUT TUUT! |
| 7:28 | paket |  | tanke |
| 7:28 | tanke | du | En toffla. Bara en. |
| 7:28 | väntar | du | En toffla. Bara en. |
| 7:28 | skratt | du | kvarnen spottar |
| 7:32 | händelse | printKlar | sak=byggsats:ryggkorg n=1 |
| 7:32 | toast | guld | ✅ |
| 7:32 | väntar | info:guld | Klicka för att ta på dig ryggkorg |
| 7:32 | händelse | tagitUrPrint | sak=byggsats:ryggkorg n=1 |
| 7:32 | paket |  | sms |
| 7:32 | väntar | ali | Ali här. Du printade Ryggkorg från min ritning. Och det FUNKAR? Jag har bara sett sånt på YouTube. |
| 7:32 | sak | info:guld | Klicka för att ta på dig ryggkorg |
| 7:32 | kvitto-visas | info:guld | Klicka för att ta på dig ryggkorg |
| 7:32 | toast | guld | Klicka för att ta på dig ryggkorg |
| 7:34 | klar | info:guld | Klicka för att ta på dig ryggkorg |
| 7:36 | väntar | info:guld | 🧺 Ryggkorgen sitter på! Du bär 16 skräp nu. |
| 7:36 | tog på | du | byggsats:ryggkorg |
| 7:36 | händelse | monterat | sak=ryggkorg |
| 7:36 | sak | info:guld | 🧺 Ryggkorgen sitter på! Du bär 16 skräp nu. |
| 7:36 | kvitto-visas | info:guld | 🧺 Ryggkorgen sitter på! Du bär 16 skräp nu. |
| 7:36 | toast | guld | 🧺 Ryggkorgen sitter på! Du bär 16 skräp nu. |
| 7:36 | händelse | malKlart | id=ryggkorg del=Dag 3 – En skrivare till och taket nasta=n2-bygg-arbetsbord |
| 7:36 | struken | du | En toffla. Bara en. |
| 7:36 | väntar | du | Ett arbetsbord bredvid skrivaren. Skrivare M ska stå på det. |
| 7:36 | MÅL |  | Bygg ett arbetsbord |
| 7:38 | klar | info:guld | 🧺 Ryggkorgen sitter på! Du bär 16 skräp nu. |
| 7:38 | målruta |  | Bygg ett arbetsbord |
| 7:40 | kvittens-bock |  | ✓ Bygg ryggkorgen – bär 10 skräp |
| 7:40 | sak | du | Ett arbetsbord bredvid skrivaren. Skrivare M ska stå på det. |
| 7:40 | pil |  | Bygg ett arbetsbord |
| 7:40 | notis | tanke | 💭 Ett arbetsbord bredvid skrivaren. Skrivare M ska stå på det. |
| 7:40 | röst | du | Ett arbetsbord bredvid skrivaren. Skrivare M ska stå på det. · MÅL |
| 7:41 | nick |  | nick:37 |
| 7:44 | toast | guld | 3D-modell köpt – printa arbetsbord på skrivaren |
| 7:44 | händelse | kopt | sak=bord |
| 7:45 | klar | du | Ett arbetsbord bredvid skrivaren. Skrivare M ska stå på det. |
| 7:52 | händelse | printStart | sak=byggsats:bord |
| 7:56 | sak | ali | Ali här. Du printade Ryggkorg från min ritning. Och det FUNKAR? Jag har bara sett sånt på YouTube. |
| 7:56 | sms | ali | Ali här. Du printade Ryggkorg från min ritning. Och det FUNKAR? Jag har bara sett sånt på YouTube. |
| 7:56 | sms-bubbla | ali | Ali här. Du printade Ryggkorg från min ritning. Och det FUNKAR? Jag har bara sett sånt på YouTube. |
| 7:56 | röst | ali | Ali här. Du printade Ryggkorg från min ritning. Och det FUNKAR? Jag har bara sett sånt på YouTube. · REAKTION |
| 7:59 | toast | bra | Del 1 av 3 klar |
| 8:04 | klar | ali | Ali här. Du printade Ryggkorg från min ritning. Och det FUNKAR? Jag har bara sett sånt på YouTube. |
| 8:05 | väntar | mamma | Jag har städat ditt rum. Det tog tre dagar. Jag hittade en macka från i somras. En macka. |
| 8:06 | struken | mamma | Har du sovit nåt? Du har väl tandborste? Och äter du? Svara inte, jag vet att du är arg. ❤️ /Mamma |
| 8:06 | toast | bra | Del 2 av 3 klar |
| 8:14 | händelse | printKlar | sak=byggsats:bord n=1 |
| 8:14 | toast | guld | ✅ |
| 8:14 | händelse | tagitUrPrint | sak=byggsats:bord n=1 |
| 8:17 | händelse | placerat | sak=bord |
| 8:17 | händelse | malKlart | id=n2-bygg-arbetsbord del=Dag 3 – En skrivare till och taket nasta=n2-bygg-skrivare-m |
| 8:17 | väntar | du | Skrivare M på bordet. Två skrivare, dubbelt så mycket. |
| 8:17 | målruta |  | Printa och sälj |
| 8:17 | MÅL |  | Printa och sälj |
| 8:17 | upplåst | skrivare | skrivare2 |
| 8:17 | brott | UPPLÅST | skrivare2 (skrivare 536 av 75) |
| 8:17 | händelse | upplast | id=skrivare2 flask=skrivare |
| 8:17 | paket |  | tanke → sms |
| 8:17 | tanke | du | Kvarnen hinner mer än skrivaren. Jag behöver en skrivare till. |
| 8:17 | väntar | du | Kvarnen hinner mer än skrivaren. Jag behöver en skrivare till. |
| 8:17 | väntar | ali | Ali här. Skrivare M har kommit. Två och en halv gånger snabbare. Snabbare än jag. Jag har inte varit snabb sedan 1998. |
| 8:17 | sak | du | Skrivare M på bordet. Två skrivare, dubbelt så mycket. |
| 8:17 | pil |  | Bygg Skrivare M på bordet |
| 8:17 | notis | tanke | 💭 Skrivare M på bordet. Två skrivare, dubbelt så mycket. |
| 8:17 | röst | du | Skrivare M på bordet. Två skrivare, dubbelt så mycket. · MÅL |
| 8:21 | kvittens-bock |  | ✓ Bygg ett arbetsbord |
| 8:22 | klar | du | Skrivare M på bordet. Två skrivare, dubbelt så mycket. |
| 8:30 | skratt | du | Alis dyr-pling |
| 8:30 | toast | guld | 3D-modell köpt – printa skrivare m på skrivaren |
| 8:30 | händelse | kopt | sak=skrivare2 |
| 8:30 | struken | ali | Ali här. Skrivare M har kommit. Två och en halv gånger snabbare. Snabbare än jag. Jag har inte varit snabb sedan 1998. |
| 8:49 | skratt | du | däcket rullar iväg |
| 8:49 | paket |  | tanke |
| 8:49 | tanke | du | Däcket ville inte stanna. Jag förstår det. |
| 8:49 | väntar | du | Däcket ville inte stanna. Jag förstår det. |
| 8:54 | händelse | printStart | sak=byggsats:skrivare2 |
| 8:56 | skratt | du | falsk tuta |
| 8:56 | väntar | värld:TUUT! Tjena! | TUUT! Tjena! |
| 9:03 | toast | bra | Del 1 av 5 klar |
| 9:11 | väntar | rolf | Morgonbulle på kontoret me polarna. Bengt har ny keps. Vi pratade om den i en timme. Den e grön. /R |
| 9:12 | toast | bra | Del 2 av 5 klar |
| 9:16 | struken | värld:TUUT! Tjena! | TUUT! Tjena! |
| 9:18 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 9:18 | väntar | notis:Storebrors skrivare: Tornet är tomt – ma | Storebrors skrivare: Tornet är tomt – mal mer så fortsätter den |
| 9:30 | toast | bra | Del 3 av 5 klar |
| 9:39 | toast | bra | Del 4 av 5 klar |
| 9:42 | sak | du | Kvarnen hinner mer än skrivaren. Jag behöver en skrivare till. |
| 9:42 | notis | tanke | 💭 Kvarnen hinner mer än skrivaren. Jag behöver en skrivare till. |
| 9:42 | röst | du | Kvarnen hinner mer än skrivaren. Jag behöver en skrivare till. · STORY |
| 9:48 | klar | du | Kvarnen hinner mer än skrivaren. Jag behöver en skrivare till. |
| 9:48 | händelse | printKlar | sak=byggsats:skrivare2 n=1 |
| 9:48 | toast | guld | ✅ |
| 9:49 | händelse | tagitUrPrint | sak=byggsats:skrivare2 n=1 |
| 9:52 | händelse | placerat | sak=skrivare2 |
| 9:52 | struken | kedja | skrivareM |
| 9:52 | paket |  | tanke |
| 9:52 | tanke | du | Den här måste stå i linjen vid kvarnen, annars når inte slangen. |
| 9:52 | väntar | du | Den här måste stå i linjen vid kvarnen, annars når inte slangen. |
| 9:52 | händelse | malKlart | id=n2-bygg-skrivare-m del=Dag 3 – En skrivare till och taket nasta=n2-lagg-plattak-skjulet |
| 9:52 | lapp-kö | 📱 Storebror | VA?! Du har byggt en skrivare TILL?? Du har typ en printfarm nu. Okej. Det är faktiskt ganska ballt. 🔥 |
| 9:52 | väntar | bror | VA?! Du har byggt en skrivare TILL?? Du har typ en printfarm nu. Okej. Det är faktiskt ganska ballt. 🔥 |
| 9:52 | väntar | du | Det regnar in. Plåt på taket, så slipper jag sova i en pöl. |
| 9:52 | MÅL |  | Lägg plåttak på skjulet |
| 9:52 | målruta |  | Lägg plåttak på skjulet |
| 9:52 | sak | du | Det regnar in. Plåt på taket, så slipper jag sova i en pöl. |
| 9:52 | pil |  | Lägg plåttak på skjulet |
| 9:52 | notis | tanke | 💭 Det regnar in. Plåt på taket, så slipper jag sova i en pöl. |
| 9:52 | röst | du | Det regnar in. Plåt på taket, så slipper jag sova i en pöl. · MÅL |
| 9:56 | kvittens-bock |  | ✓ Bygg Skrivare M på bordet |
| 9:57 | klar | du | Det regnar in. Plåt på taket, så slipper jag sova i en pöl. |
| 10:06 | toast | guld | 3D-modell köpt – printa plåttak på skrivaren |
| 10:06 | händelse | kopt | sak=tak |
| 10:18 | sak | du | Däcket ville inte stanna. Jag förstår det. |
| 10:18 | notis | tanke | 💭 Däcket ville inte stanna. Jag förstår det. |
| 10:18 | röst | du | Däcket ville inte stanna. Jag förstår det. · REAKTION |
| 10:21 | klar | du | Däcket ville inte stanna. Jag förstår det. |
| 10:28 | händelse | printStart | sak=byggsats:tak |
| 10:28 | toast | bra | 🔗 Slangen kopplad |
| 10:30 | sak | notis:Storebrors skrivare: Tornet är tomt – ma | Storebrors skrivare: Tornet är tomt – mal mer så fortsätter den |
| 10:30 | notis | fel | Storebrors skrivare: Tornet är tomt – mal mer så fortsätter den |
| 10:32 | klar | notis:Storebrors skrivare: Tornet är tomt – ma | Storebrors skrivare: Tornet är tomt – mal mer så fortsätter den |
| 10:32 | toast | bra | Del 1 av 3 klar |
| 10:33 | väntar | mamma | Jag har städat ditt rum. Det tog tre dagar. Jag hittade en macka från i somras. En macka. |
| 10:36 | toast | bra | Del 2 av 3 klar |
| 10:38 | toast | fel | Ingen ström – trampa cykeln |
| 10:48 | händelse | printKlar | sak=byggsats:tak n=1 |
| 10:48 | toast | guld | ✅ |
| 10:49 | händelse | tagitUrPrint | sak=byggsats:tak n=1 |
| 10:51 | väntar | värld:TUUT! Hej grannen! | TUUT! Hej grannen! |
| 10:54 | väntar | info:guld | Plåttak på plats! Trivsel +12 · Ali betalar nu +0 % |
| 10:54 | sak | info:guld | Plåttak på plats! Trivsel +12 · Ali betalar nu +0 % |
| 10:54 | kvitto-visas | info:guld | Plåttak på plats! Trivsel +12 · Ali betalar nu +0 % |
| 10:54 | toast | guld | Plåttak på plats! Trivsel +12 · Ali betalar nu +0 % |
| 10:54 | händelse | malKlart | id=n2-lagg-plattak-skjulet del=Dag 3 – En skrivare till och taket nasta=sov3 |
| 10:54 | paket |  | lapp |
| 10:54 | väntar | du | Dag 3 är slut. Nu vet Rolf att jag bor HÄR. Benen orkar inte trampa mer. |
| 10:54 | MÅL |  | Klart för idag – sov när du vill |
| 10:56 | klar | info:guld | Plåttak på plats! Trivsel +12 · Ali betalar nu +0 % |
| 10:58 | målruta |  | Klart för idag – sov när du vill |
| 10:58 | kvittens-bock |  | ✓ Lägg plåttak på skjulet |
| 10:58 | sak | du | (nytt mål i rutan) |
| 10:58 | pil |  | Klart för idag – sov när du vill |
| 10:58 | klar | du | (nytt mål i rutan) |
| 11:00 | sak | du | Dag 3 är slut. Nu vet Rolf att jag bor HÄR. Benen orkar inte trampa mer. |
| 11:00 | lapp | 📔 Dagbok | Dag 3 är slut. Nu vet Rolf att jag bor HÄR. Benen orkar inte trampa mer. |
| 11:00 | meddelande | du | Dag 3 är slut. Nu vet Rolf att jag bor HÄR. Benen orkar inte trampa mer. |
| 11:00 | dagbokkort | du | Dag 3 är slut. Nu vet Rolf att jag bor HÄR. Benen orkar inte trampa mer. |
| 11:00 | röst | du | Dag 3. 19 dagar till jul. Dag 3 är slut. Nu vet Rolf att jag bor HÄR. Benen orkar inte trampa mer. · STORY |
| 11:09 | händelse | brevLast | id=kvall3 |
| 11:09 | klar | du | Dag 3 är slut. Nu vet Rolf att jag bor HÄR. Benen orkar inte trampa mer. |
| 11:09 | väntar | notis:🌇 Klockan är 21. Ali slår igen luckan.  | 🌇 Klockan är 21. Ali slår igen luckan. Dagens jobb är klart – gå in i skjulet och sov i sängen. |
| 11:11 | struken | värld:TUUT! Hej grannen! | TUUT! Hej grannen! |
| 11:14 | nattkort | du | 🌙 Dag 3 är slut. God natt. zzz… DAGENS PRINTAR Blomkruka × 13 Flasköppnare med magnet × 1 Totalt 14 printar 💰 Tjänat i dag +1 425 kr |

<details><summary>Botens handlingar dag 3</summary>

- 0:00 — dag 3 börjar — (1632 kr)
- 0:09 popup: "FORTSÄTT" (1632 kr)
- 0:25 gå till Rolfs postlåda (28 m) (1632 kr)
- 0:31 panel: "Rolfs postlåda
Det här låg i l" (1692 kr)
- 0:32 gå till sätt nyckeln i låset (3 m) (1692 kr)
- 0:39 tjänar pengar till väntar på sopbilen (BO): 1692/1752 kr → printar blomkruka (105 kr) (1692 kr)
- 0:41 gå till skrivaren (7 m) (1692 kr)
- 0:43 printar Blomkruka (1692 kr)
- 0:49 tar ut 1 st ur skrivaren (1692 kr)
- 0:54 gå till Ali (28 m) (1692 kr)
- 0:54 öppnar Alis butik – sälja (1692 kr)
- 0:56 säljer hos Ali: +105 kr (1797 kr)
- 0:59 tjänar pengar till väntar på sopbilen (BO): 1797/1857 kr → printar blomkruka (105 kr) (1797 kr)
- 1:05 gå till skrivaren (25 m) (1797 kr)
- 1:06 printar Blomkruka (1797 kr)
- 1:12 tar ut 1 st ur skrivaren (1797 kr)
- 1:18 gå till Ali (25 m) (1797 kr)
- 1:18 öppnar Alis butik – sälja (1797 kr)
- 1:19 säljer hos Ali: +105 kr (1902 kr)
- 1:23 tjänar pengar till väntar på sopbilen (BO): 1902/1962 kr → printar blomkruka (105 kr) (1902 kr)
- 1:28 gå till skrivaren (25 m) (1902 kr)
- 1:29 printar Blomkruka (1902 kr)
- 1:36 tar ut 1 st ur skrivaren (1902 kr)
- 1:41 gå till Ali (25 m) (1902 kr)
- 1:41 öppnar Alis butik – sälja (1902 kr)
- 1:43 säljer hos Ali: +105 kr (2007 kr)
- 1:46 tjänar pengar till väntar på sopbilen (BO): 2007/2067 kr → printar blomkruka (105 kr) (2007 kr)
- 1:51 gå till skrivaren (25 m) (2007 kr)
- 1:53 printar Blomkruka (2007 kr)
- 1:59 tar ut 1 st ur skrivaren (2007 kr)
- 2:04 gå till Ali (25 m) (2007 kr)
- 2:04 öppnar Alis butik – sälja (2007 kr)
- 2:06 säljer hos Ali: +105 kr (2112 kr)
- 2:19 tjänar pengar till väntar på sopbilen (BO): 2112/2172 kr → printar blomkruka (105 kr) (2112 kr)
- 2:24 gå till skrivaren (25 m) (2112 kr)
- 2:26 printar Blomkruka (2112 kr)
- 2:32 tar ut 1 st ur skrivaren (2112 kr)
- 2:37 gå till Ali (25 m) (2112 kr)
- 2:37 öppnar Alis butik – sälja (2112 kr)
- 2:39 säljer hos Ali: +105 kr (2217 kr)
- 2:49 gå till Rolfs postlåda (31 m) (2217 kr)
- 2:58 plockar 10 skräp på tippen (bär max 10) (2217 kr)
- 2:59 gå till kvarnen (8 m) (2217 kr)
- 3:04 gå till skrivaren (3 m) (2217 kr)
- 3:05 printar Flasköppnare med magnet (2217 kr)
- 3:10 tar ut 1 st ur skrivaren (2217 kr)
- 3:10 valj flaskoppnare: true, vald flaskoppnare, post {"l":null,"tr":null,"tm":[]}, nummer false (2217 kr)
- 3:12 gå till Rolfs postlåda (6 m) (2217 kr)
- 3:17 tjänar pengar till väntar på flaskhalsen för cykelbatteri: 2217/2257 kr → printar blomkruka (105 kr) (2217 kr)
- 3:18 gå till skrivaren (6 m) (2217 kr)
- 3:20 printar Blomkruka (2217 kr)
- 3:26 tar ut 1 st ur skrivaren (2217 kr)
- 3:32 gå till Ali (28 m) (2217 kr)
- 3:32 öppnar Alis butik – sälja (2217 kr)
- 3:34 säljer hos Ali: +105 kr (2322 kr)
- 3:37 tjänar pengar till väntar på flaskhalsen för cykelbatteri: 2322/2362 kr → printar blomkruka (105 kr) (2322 kr)
- 3:42 gå till skrivaren (25 m) (2322 kr)
- 3:43 printar Blomkruka (2322 kr)
- 3:49 tar ut 1 st ur skrivaren (2322 kr)
- 3:55 gå till Ali (25 m) (2322 kr)
- 3:55 öppnar Alis butik – sälja (2322 kr)
- 3:57 säljer hos Ali: +105 kr (2427 kr)
- 3:59 tjänar pengar till väntar på flaskhalsen för cykelbatteri: 2427/2467 kr → printar blomkruka (105 kr) (2427 kr)
- 4:04 gå till skrivaren (25 m) (2427 kr)
- 4:05 printar Blomkruka (2427 kr)
- 4:12 tar ut 1 st ur skrivaren (2427 kr)
- 4:17 gå till Ali (25 m) (2427 kr)
- 4:17 öppnar Alis butik – sälja (2427 kr)
- 4:19 säljer hos Ali: +105 kr (2532 kr)
- 4:21 tjänar pengar till väntar på flaskhalsen för cykelbatteri: 2532/2572 kr → printar blomkruka (105 kr) (2532 kr)
- 4:26 gå till skrivaren (25 m) (2532 kr)
- 4:28 printar Blomkruka (2532 kr)
- 4:34 tar ut 1 st ur skrivaren (2532 kr)
- 4:39 gå till Ali (25 m) (2532 kr)
- 4:39 öppnar Alis butik – sälja (2532 kr)
- 4:41 säljer hos Ali: +105 kr (2637 kr)
- 4:43 tjänar pengar till väntar på flaskhalsen för cykelbatteri: 2637/2677 kr → printar blomkruka (105 kr) (2637 kr)
- 4:48 gå till skrivaren (25 m) (2637 kr)
- 4:50 printar Blomkruka (2637 kr)
- 5:17 plockar 10 skräp på gården (bär max 10) (2637 kr)
- 5:23 gå till kvarnen (29 m) (2637 kr)
- 5:25 gå till skrivaren (2 m) (2637 kr)
- 5:25 tar ut 1 st ur skrivaren (2637 kr)
- 5:31 gå till Ali (28 m) (2637 kr)
- 5:31 öppnar Alis butik – sälja (2637 kr)
- 5:33 säljer hos Ali: +105 kr (2742 kr)
- 5:35 tjänar pengar till väntar på flaskhalsen för cykelbatteri: 2742/2782 kr → printar blomkruka (105 kr) (2742 kr)
- 5:40 gå till skrivaren (25 m) (2742 kr)
- 5:42 printar Blomkruka (2742 kr)
- 5:48 tar ut 1 st ur skrivaren (2742 kr)
- 5:53 gå till Ali (25 m) (2742 kr)
- 5:53 öppnar Alis butik – sälja (2742 kr)
- 5:55 säljer hos Ali: +105 kr (2847 kr)
- 5:57 tjänar pengar till väntar på flaskhalsen för cykelbatteri: 2847/2887 kr → printar blomkruka (105 kr) (2847 kr)
- 6:02 gå till skrivaren (25 m) (2847 kr)
- 6:04 printar Blomkruka (2847 kr)
- 6:10 tar ut 1 st ur skrivaren (2847 kr)
- 6:15 gå till Ali (25 m) (2847 kr)
- 6:15 öppnar Alis butik – sälja (2847 kr)
- 6:17 säljer hos Ali: +105 kr (2952 kr)
- 6:19 tjänar pengar till väntar på flaskhalsen för cykelbatteri: 2952/2992 kr → printar blomkruka (105 kr) (2952 kr)
- 6:25 gå till skrivaren (25 m) (2952 kr)
- 6:26 printar Blomkruka (2952 kr)
- 6:32 tar ut 1 st ur skrivaren (2952 kr)
- 6:37 gå till Ali (25 m) (2952 kr)
- 6:37 öppnar Alis butik – sälja (2952 kr)
- 6:39 säljer hos Ali: +105 kr (3057 kr)
- 6:41 öppnar Alis butik – bilbatteriet (3057 kr)
- 6:44 köper cykelbatteri för 30 kr (3027 kr)
- 6:51 gå till koppla in bilbatteriet vid cykeln (24 m) (3027 kr)
- 7:10 gå till Ali (24 m) (3027 kr)
- 7:10 öppnar Alis butik – köpa ryggkorg (3027 kr)
- 7:12 köper ryggkorg för 120 kr (2907 kr)
- 7:18 gå till skrivaren (25 m) (2907 kr)
- 7:20 printar Ryggkorg (2 delar) (2907 kr)
- 7:33 tar ut 1 st ur skrivaren (2907 kr)
- 7:36 tar på ryggkorg (2907 kr)
- 7:42 gå till Ali (25 m) (2907 kr)
- 7:42 öppnar Alis butik – köpa arbetsbord (2907 kr)
- 7:45 köper bord för 120 kr (2787 kr)
- 7:51 gå till skrivaren (25 m) (2787 kr)
- 7:52 printar Arbetsbord (3 delar) (2787 kr)
- 8:10 gå till kvarnen (31 m) (2787 kr)
- 8:14 gå till skrivaren (1 m) (2787 kr)
- 8:15 tar ut 1 st ur skrivaren (2787 kr)
- 8:16 gå till platsen för arbetsbord (5 m) (2787 kr)
- 8:17 ställer ut arbetsbord (2787 kr)
- 8:28 gå till Ali (24 m) (2787 kr)
- 8:28 öppnar Alis butik – köpa skrivare m (2787 kr)
- 8:31 köper skrivare2 för 500 kr (2287 kr)
- 8:44 plockar 6 skräp på tippen (bär max 16) (2287 kr)
- 8:47 gå till kvarnen (12 m) (2287 kr)
- 8:53 gå till skrivaren (3 m) (2287 kr)
- 8:54 printar Skrivare M (5 delar) (2287 kr)
- 9:24 plockar 5 skräp på tippen (bär max 16) (2287 kr)
- 9:26 gå till kvarnen (6 m) (2287 kr)
- 9:49 gå till skrivaren (3 m) (2287 kr)
- 9:50 tar ut 1 st ur skrivaren (2287 kr)
- 9:51 gå till platsen för skrivare m (5 m) (2287 kr)
- 9:52 ställer ut skrivare m (2287 kr)
- 10:04 gå till Ali (24 m) (2287 kr)
- 10:04 öppnar Alis butik – köpa plåttak (2287 kr)
- 10:07 köper tak för 250 kr (2037 kr)
- 10:18 plockar 2 skräp på tippen (bär max 16) (2037 kr)
- 10:20 gå till kvarnen (9 m) (2037 kr)
- 10:27 gå till skrivaren (5 m) (2037 kr)
- 10:28 printar Plåttak (3 delar) (2037 kr)
- 10:50 tar ut 1 st ur skrivaren (2037 kr)
- 10:54 gå till skjulet (19 m) (2037 kr)
- 11:09 popup: "FORTSÄTT" (2037 kr)
- 11:11 gå till sängen (1 m) (2037 kr)

</details>

## Dag 4

| Tid | Källa | Vem | Text |
|---|---|---|---|
| 11:14 | vara | ali | ingen |
| 11:14 | händelse | malKlart | id=sov3 del=Dag 3 – En skrivare till och taket nasta=rolf2-brev |
| 11:14 | vara | ali | kruka |
| 11:14 | MÅL |  | Vänta på sopbilen. Den lämnar något. |

<details><summary>Botens handlingar dag 4</summary>

- 0:00 — dag 4 börjar — (2037 kr)

</details>
