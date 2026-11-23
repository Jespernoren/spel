# Nybörjarboten – körning 1

*A-081: samma händer som AX, men boten vet bara det som syns (målrutan, pilen, det som sägs). Går 3 m/s, läser 60 ms per tecken, följer pilen, tittar runt när målet är otydligt och går fel ibland.*

| Dag | Minuter | FÖRVIRRAD | FAST | TRÄNGSEL | HANN INTE LÄSA | DOLT | NY SAK UTAN FÖRKLARING | OKÄNT ORD |
|---|---|---|---|---|---|---|---|---|
| 1 | 12.0 | 1 | 0 | 0 | 0 | 0 | 1 | 0 |
| 2 | 8.8 | 0 | 0 | 0 | 1 | 0 | 0 | 0 |
| 3 | 11.2 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |

## Flaggor (3)

- **NY SAK UTAN FÖRKLARING** dag 1 0:18: byta: ingen text eller bild har förklarat det innan första gången
- **FÖRVIRRAD** dag 1 10:13: pilen pekar 27 m från där målet görs (skrap)
- **HANN INTE LÄSA** dag 2 2:31: "📻 Radio Tippen: Radio Tippen, Kjelle här. Skjulet" stod 6.7 s av 9.9 s

## Friktionskurvan (sekunder per mål: nybörjaren mot AX)

| Dag | Mål | Nybörjaren | AX | × |
|---|---|---|---|---|
| 1 | Lasta av skrivaren | 0 | – | – |
| 1 | Lasta av skrivaren | 28 | – | – |
| 1 | Ställ upp skrivaren | 15 | – | – |
| 1 | Skrivaren behöver ström | 35 | – | – |
| 1 | Ställ cykel och generator | 27 | – | – |
| 1 | Välj vad skrivaren ska printa | 25 | – | – |
| 1 | Trampa cykeln | 5 | – | – |
| 1 | En nyckelring till | 38 | – | – |
| 1 | Visa ringarna i affären | 31 | – | – |
| 1 | Köp kvarnen | 22 | – | – |
| 1 | Ställ kvarnen | 29 | – | – |
| 1 | Gör egen tråd | 28 | – | – |
| 1 | Printa med egen tråd | 27 | – | – |
| 1 | Sälj hos Ali | 32 | – | – |
| 1 | Koppla in powerbanken | 28 | – | – |
| 1 | Köp skräpgripen | 31 | – | – |
| 1 | Printa skräpgripen | 54 | – | – |
| 1 | Spara till krukreceptet · 0 / 40 kr | 95 | – | – |
| 1 | Sälj blomkrukan | 27 | – | – |
| 1 | Köp sängen | 18 | – | – |
| 1 | Printa sängen | 98 | – | – |
| 2 | Spara till kvarnmotorn · 35 / 50 kr | -660 | – | – |
| 2 | Printa kvarnmotorn till kvarnen | 45 | – | – |
| 2 | Städa gården | 46 | – | – |
| 2 | Gå till bilen vid skjulet | 97 | – | – |
| 2 | Möt sopbilen vid grinden | 32 | – | – |
| 2 | Printa ölhållare med kylklamp | 5 | – | – |
| 2 | Ge Rolf ölhållare med kylklamp | 32 | – | – |
| 2 | Spara till vindsnurran · 90 / 133 kr | 89 | – | – |
| 2 | Bygg en dörr till skjulet | 113 | – | – |
| 3 | Möt sopbilen vid grinden | -482 | – | – |
| 3 | Hämta 5 skräp på soptippen | 5 | – | – |
| 3 | Printa flasköppnare med magnet | 22 | – | – |
| 3 | Ge Rolf flasköppnare med magnet | 23 | – | – |
| 3 | Köp Alis gamla bilbatteri | 55 | – | – |
| 3 | Spara till ryggkorgen · 77 / 120 kr | 67 | – | – |
| 3 | Ta på ryggkorgen | 39 | – | – |
| 3 | Bygg ett arbetsbord | 91 | – | – |
| 3 | Spara till Skrivare M · 47 / 500 kr | 215 | – | – |
| 3 | Lägg plåttak på skjulet | 89 | – | – |

---

# Simulering kapitel 1 – körning 1

*Gjord 2026-11-23 16:55 med `verktyg/sim-kapitel1.mjs` + `verktyg/sim-bot.js` (punkt AX). Boten går 4,5 m/s, läser 15 tecken/s, trampar, vevar, plockar, printar, köper och säljer via spelets egna funktioner. Tiderna är speltid.*

## Sammanfattning

| Dag | Minuter | Väntan | Prints (totalt) | Kr vid sömn | Bär | Trivsel |
|---|---|---|---|---|---|---|
| 1 | 12.0 | 1 % | 10 | 35 | 6 | 19 |
| 2 | 8.8 | 0 % | 14 | 47 | 10 | 36 |
| 3 | 11.2 | 0 % | 25 | 35 | 16 | 78 |

## Flaskhalskartan (EE)

| Dag | bara | mala | trampa | strom | skrivare | inkomst | Upplåst |
|---|---|---|---|---|---|---|---|
| 1 | 4 | 7 | 20 | 11 | 122 | 8 | grip (bara, 8:02), kruka (inkomst, 8:23) |
| 2 | 2 | 110 | 3 | 4 | 377 | 0 | kvarnmotor (mala, 0:44), rullstall (skrivare, 2:28), trim_skrivare (skrivare, 3:28), vindsnurra (trampa, 6:00) |
| 3 | 0 | 53 | 0 | 15 | 466 | 0 | cykelbatteri (strom, 1:40), ryggkorg (bara, 2:36), skrivare2 (skrivare, 5:53) |

TIDIG: 0 · FAST: 0 · upplåst av reserven (målet väntade 3 min): 0

**SKRATT:** 33 roliga ögonblick på 32 min (10.3 per 10 min, mål minst 5)

**Köp:**

- dag 1 3:44 – gammalkvarn (30 kr)
- dag 1 6:39 – grip (50 kr)
- dag 1 8:45 – kruka (40 kr)
- dag 1 9:52 – sang (60 kr)
- dag 2 0:58 – kvarnmotor (50 kr)
- dag 2 6:12 – vindsnurra (133 kr)
- dag 2 7:30 – dorr (120 kr)
- dag 3 2:14 – cykelbatteri (30 kr)
- dag 3 3:19 – ryggkorg (120 kr)
- dag 3 4:44 – bord (120 kr)
- dag 3 8:13 – skrivare2 (500 kr)
- dag 3 10:11 – tak (250 kr)

## Storykedjan (kvittens → varför → nytt mål)

| Dag | Tid | Id | Kvittens | Varför | Nytt mål | Tid till målet |
|---|---|---|---|---|---|---|
| 1 | 0:28 | lasta | Tung. Den har storebror aldrig burit så långt. |  | Skrivaren ställer jag mot skräpberget. Min första verkstad. | 1.3 s |
| 1 | 2:09 | valjModell | Den piper. Den GÖR något. |  | Nu behöver den ström. Trampa. | 1.3 s |
| 1 | 2:14 | trampa | Klar! Ta ut den innan den ändrar sig. |  | En nyckelring till, så länge storebrors rulle räcker. | 16.3 s |
| 1 | 4:41 | flaska | Det blir tråd! Riktig plasttråd. |  | Min egen tråd. Nu printar jag en nyckelring av den. | 2.5 s |
| 1 | 9:08 | krukaD1 | En kruka. Mamma skulle bli så stolt. Hon får inte veta. |  | Ali gillar krukor. Han sa det själv. | 1.3 s |
| 1 | 11:31 | printSang | En säng. Jag printade en SÄNG. |  | Sängen ska in i skjulet. Sen sover jag. | 1.8 s |
| 2 | 6:44 | vindsnurra | Den snurrar! Långsamt. Men den snurrar. |  | Det drar från dörrhålet. En dörr kan jag printa. | 1.4 s |
| 3 | 2:36 | kopBatteri | Nu printar den klart även när jag vilar benen. |  | Jag springer för mycket. Med en ryggkorg bär jag sexton sake | 1.3 s |
| 3 | 4:22 | ryggkorgPa | Nu bär jag sexton skräp. |  | Ett arbetsbord bredvid skrivaren. Skrivare M ska stå på det. | 1.6 s |

## Hur länge nya mål väntade (från att förra målet blev klart till att det nya syntes i målrutan)

Snitt 2.4 s · max 13.1 s · över 4 s: 5 · över 8 s: 4 av 41

## Flaggor (52)

- **KROCK** dag 1 2:16: 3.8 s mellan [notis] "💭 Nu behöver den ström. Trampa." och [notis] "💭 Jag gjorde den här. Av skräp. Det här kan funka."
- **KROCK** dag 2 3:03: 3.8 s mellan [bubbla] "Du har städat hela gården. Ingen gör så nuförtin." och [bubbla] "Öj… ä dä du som printar grejer? Dom där nyckelringarna?"
- **KROCK** dag 2 4:39: 0.8 s mellan [lapp] "Såg att du printar grejer. Kan du göra en sån hä? Kall öl ä " och [notis] "💭 Rolf har nyckeln… Jag undrar vad som finns där inne."
- **KROCK** dag 3 0:43: 0.7 s mellan [lapp] "Den funkar! Hä. Ta så mycke skräp du vill. /Rolf​" och [notis] "💭 Nyckeln ska sitta i låset på grinden."
- **SEN** dag 2 3:50: 4.9 s efter händelsen (gräns 1 s): du: "Tornet är fullt. Skrivaren får jobba ikapp."
- **PAUS** dag 1 2:16: 0.0 s paus före "Jag gjorde den här. Av skräp. Det här kan funka."
- **PAUS** dag 1 2:28: 0.2 s paus före "Hallå där, nya grannen! Vad är det där du gör?"
- **PAUS** dag 1 2:43: 0.0 s paus före "En nyckelring till, så länge storebrors rulle räck"
- **PAUS** dag 1 3:41: 0.0 s paus före "Ali har en gammal kvarn. Den gör tråd av skräp."
- **PAUS** dag 1 3:46: 0.0 s paus före "Den är din. Pappa hade blivit glad. Han trodde ald"
- **PAUS** dag 1 3:54: 0.0 s paus före "God morgon, det är Kjelle på Radio Tippen! Det har"
- **PAUS** dag 1 4:05: 0.0 s paus före "Kvarnen ska stå vid skrivaren, närmast skräpberget"
- **PAUS** dag 1 4:47: 0.0 s paus före "Min egen tråd. Nu printar jag en nyckelring av den"
- **PAUS** dag 1 6:35: 0.1 s paus före "Med en skräpgrip slipper jag böja mig. Ali har en "
- **PAUS** dag 1 6:40: 0.0 s paus före "Min första 3D-modell! Jag printar inte bara saker "
- **PAUS** dag 1 6:41: 0.2 s paus före "Bra val. Ritningen räcker till en skräpgrip."
- **PAUS** dag 1 7:42: 0.0 s paus före "Ali här. Jag såg Skräpgrip på avstånd. Ett streck "
- **PAUS** dag 1 7:52: 0.0 s paus före "Spara till krukreceptet."
- **PAUS** dag 1 9:36: 0.0 s paus före "Jag tänker inte sova på betongen i natt. Ali har e"
- **PAUS** dag 1 11:36: 0.0 s paus före "Sängen ska in i skjulet. Sen sover jag."
- **PAUS** dag 2 0:23: 0.0 s paus före "Ali vill ha idag: Blomkruka · +50 %"
- **PAUS** dag 2 1:06: 0.1 s paus före "Motorn ska sitta där veven sitter. Jag printar den"
- **PAUS** dag 2 1:51: 0.0 s paus före "Gården är full av skräp. Jag börjar vid skjulet."
- **SAMTIDIGT** dag 2 2:28: "Radio Tippen, Kjelle här. Skjulet vid ti" och "Kvarnen står och väntar för att hållaren"
- **PAUS** dag 2 2:43: 0.0 s paus före "Tjena. Rolf. Ja kör sopbilen. Tippen där borta ä m"
- **PAUS** dag 2 2:58: 0.1 s paus före "Du har städat hela gården. Ingen gör så nuförtin."
- **PAUS** dag 2 3:03: 0.1 s paus före "Öj… ä dä du som printar grejer? Dom där nyckelring"
- **PAUS** dag 2 3:10: 0.1 s paus före "Ja. Av skräp."
- **PAUS** dag 2 3:15: 0.1 s paus före "Hm. Ja kanske har nåt åt dej. Kolla postlådan vid "
- **PAUS** dag 2 3:50: 0.0 s paus före "Tornet är fullt. Skrivaren får jobba ikapp."
- **SAMTIDIGT** dag 2 4:39: "Såg att du printar grejer. Kan du göra e" och "Rolf har nyckeln… Jag undrar vad som fin"
- **PAUS** dag 2 4:53: 0.0 s paus före "Ölhållaren är klar. Den lägger jag i Rolfs postlåd"
- **PAUS** dag 2 6:50: 0.0 s paus före "Den snurrar! Långsamt. Men den snurrar."
- **PAUS** dag 2 8:39: 0.0 s paus före "Nu vet Ali att jag bor HÄR. Taket läcker. I morgon"
- **PAUS** dag 2 8:40: 0.0 s paus före "Sov när du vill."
- **PAUS** dag 3 0:18: 0.1 s paus före "Ali vill ha idag: Blomkruka · +50 %"
- **SAMTIDIGT** dag 3 0:43: "Den funkar! Hä. Ta så mycke skräp du vil" och "Nyckeln ska sitta i låset på grinden."
- **SAMTIDIGT** dag 3 1:01: "ÖJ! Kajsa knuffa ner min flasköppnare i " och "Tratten är stor som en kaffekopp. Tunnan"
- **PAUS** dag 3 2:42: 0.0 s paus före "Nu printar den klart även när jag vilar benen."
- **PAUS** dag 3 4:25: 0.0 s paus före "Ett arbetsbord bredvid skrivaren. Skrivare M ska s"
- **PAUS** dag 3 9:15: 0.0 s paus före "Fullt i händerna."
- **SAMTIDIGT** dag 3 10:59: "VA?! Du har byggt en skrivare TILL?? Du " och "Nu vet Rolf att jag bor HÄR. Benen orkar"
- **PAUS** dag 3 10:59: 0.0 s paus före "(nytt mål i rutan)"
- **UPPREPNING** dag 3 9:15: du: "Fullt i händerna." (förra gången dag 3)
- **TRÄNGSEL 2** dag 1 2:50: "Sälj grejerna i affären mitt emot, han köper allt." 2.0 s efter förra meddelandet, 36.0 s efter en klar uppgift
- **TRÄNGSEL 2** dag 1 3:12: "Hur kunde du bara gå? Är du ok? Svara när jag ring" 5.0 s efter förra meddelandet, 20.3 s efter en klar uppgift
- **DUBBEL UPPMANING** dag 1 7:10: "trampa" på 2 ställen: pekrutan, notisen
- **FÖR KORT** dag 2 2:31: "📻 Radio Tippen: Radio Tippen, Kjelle här. Skjulet" stod 6.7 s av 9.9 s
- **TRÄNGSEL 2** dag 2 3:38: "Ali här. Skrivartrim. Jag skruvade på min egen skr" 2.1 s efter förra meddelandet, 68.7 s efter en klar uppgift
- **TRÄNGSEL 2** dag 3 1:49: "Ali här. Bilbatteriet ur min gamla Volvo står i la" 2.0 s efter förra meddelandet, 8.6 s efter en klar uppgift
- **TRÄNGSEL 2** dag 3 2:55: "Ali här. En ryggkorg. AI:n ritade den efter en bil" 2.1 s efter förra meddelandet, 19.2 s efter en klar uppgift
- **TEMPO** dag 2 8:50: dag 2 tog 8.8 min (mål 10–15)

Sidfel: inga

## Dag 1

| Tid | Källa | Vem | Text |
|---|---|---|---|
| 0:00 | MÅL |  | Lasta av skrivaren |
| 0:00 | MÅL |  | Lasta av skrivaren |
| 0:02 | sak | bud | (tips) |
| 0:03 | väntar | du | Se så mycket skräp här är. Det är ju en guldgruva! |
| 0:03 | klar | bud | (tips) |
| 0:03 | sak | du | Se så mycket skräp här är. Det är ju en guldgruva! |
| 0:03 | röst | du | Se så mycket skräp här är. Det är ju en guldgruva! · STORY |
| 0:03 | pil |  | Lasta av skrivaren |
| 0:04 | tanke | du | ⏎ Enter – hoppa över |
| 0:04 | struken | du | Hammaren ligger i raden. Hjulet eller 2. |
| 0:04 | väntar | du | ⏎ Enter – hoppa över |
| 0:08 | sak-del | du | Först borde jag spika upp en skylt, så att alla ser att jag bor HÄR. |
| 0:08 | röst | du | Först borde jag spika upp en skylt, så att alla ser att jag bor HÄR. · STORY |
| 0:16 | klar | du | Se så mycket skräp här är. Det är ju en guldgruva! |
| 0:20 | hjälp | kontroll | Klick: Klicka för att spika |
| 0:22 | lapp | 📔 Dagbok | Spikade ihop en skylt av bräder från skräpberget: Soptippsvägen 1. Inte mycket för världen, men det är MITT. |
| 0:22 | dagbokrad | du | Spikade ihop en skylt av bräder från skräpberget: Soptippsvägen 1. Inte mycket för världen, men det är MITT. |
| 0:22 | väntar | notis:Spikade ihop en skylt av bräder från skr | Spikade ihop en skylt av bräder från skräpberget: Soptippsvägen 1. Inte mycket för världen, men det är MITT. |
| 0:22 | bekräftelse | du | Group |
| 0:22 | struken | du | ⏎ Enter – hoppa över |
| 0:22 | väntar | du | Storebrors skrivare står kvar på cykeln vid vägen. Den ska av. |
| 0:23 | sak | notis:Spikade ihop en skylt av bräder från skr | Spikade ihop en skylt av bräder från skräpberget: Soptippsvägen 1. Inte mycket för världen, men det är MITT. |
| 0:23 | notis | dagbok | Spikade ihop en skylt av bräder från skräpberget: Soptippsvägen 1. Inte mycket för världen, men det är MITT. |
| 0:25 | klar | notis:Spikade ihop en skylt av bräder från skr | Spikade ihop en skylt av bräder från skräpberget: Soptippsvägen 1. Inte mycket för världen, men det är MITT. |
| 0:25 | målruta |  | Lasta av skrivaren |
| 0:28 | händelse | lastatAv | sak=skrivare |
| 0:28 | paket |  | sms |
| 0:28 | väntar | mamma | Hur kunde du bara gå? Är du ok? Svara när jag ringer! |
| 0:28 | struken | du | Storebrors skrivare står kvar på cykeln vid vägen. Den ska av. |
| 0:28 | händelse | malKlart | id=lasta del=Dag 1 – Kom igång nasta=stall |
| 0:28 | bekräftelse | du | plats |
| 0:28 | kvittens | du | Tung. Den har storebror aldrig burit så långt. |
| 0:28 | väntar | du | Tung. Den har storebror aldrig burit så långt. |
| 0:28 | väntar | du | Skrivaren ställer jag mot skräpberget. Min första verkstad. |
| 0:28 | MÅL |  | Ställ upp skrivaren |
| 0:28 | sak | du | Tung. Den har storebror aldrig burit så långt. |
| 0:28 | röst | du | Tung. Den har storebror aldrig burit så långt. · STORY |
| 0:28 | målruta |  | Ställ upp skrivaren |
| 0:31 | klar | du | Tung. Den har storebror aldrig burit så långt. |
| 0:33 | sak | du | Skrivaren ställer jag mot skräpberget. Min första verkstad. |
| 0:33 | pil |  | Ställ upp skrivaren |
| 0:33 | notis | tanke | 💭 Skrivaren ställer jag mot skräpberget. Min första verkstad. |
| 0:33 | röst | du | Skrivaren ställer jag mot skräpberget. Min första verkstad. · MÅL |
| 0:33 | nick |  | nick:1 |
| 0:36 | klar | du | Skrivaren ställer jag mot skräpberget. Min första verkstad. |
| 0:37 | hjälp | kontroll | E: Ryggsäcken och kistan |
| 0:43 | struken | info:bra | 🖨️ Storebrors skrivare står på sin plats |
| 0:43 | händelse | placerat | sak=skrivareS |
| 0:43 | paket |  | tanke |
| 0:43 | tanke | du | Storebrors rulle. Den räcker inte länge. |
| 0:43 | väntar | du | Storebrors rulle. Den räcker inte länge. |
| 0:43 | duns | du | ställs ner |
| 0:43 | händelse | malKlart | id=stall del=Dag 1 – Kom igång nasta=strom |
| 0:43 | bekräftelse | du | plats |
| 0:43 | struken | du | Storebrors rulle. Den räcker inte länge. |
| 0:43 | väntar | du | Den har ingen ström. Cykeln vid vägen kanske kan ge ström. |
| 0:43 | målruta |  | Skrivaren behöver ström |
| 0:43 | MÅL |  | Skrivaren behöver ström |
| 0:44 | sak | du | Den har ingen ström. Cykeln vid vägen kanske kan ge ström. |
| 0:44 | pil |  | Skrivaren behöver ström |
| 0:44 | notis | tanke | 💭 Den har ingen ström. Cykeln vid vägen kanske kan ge ström. |
| 0:44 | röst | du | Den har ingen ström. Cykeln vid vägen kanske kan ge ström. · MÅL |
| 0:44 | nick |  | nick:2 |
| 0:47 | kvittens-bock |  | ✓ Ställ upp skrivaren |
| 0:50 | klar | du | Den har ingen ström. Cykeln vid vägen kanske kan ge ström. |
| 1:17 | paket |  | tanke |
| 1:17 | tanke | du | Cykeln… och storebrors generator? |
| 1:17 | väntar | du | Cykeln… och storebrors generator? |
| 1:17 | sak | du | Cykeln… och storebrors generator? |
| 1:17 | kvitto-visas | du | Cykeln… och storebrors generator? |
| 1:17 | notis | tanke | 💭 Cykeln… och storebrors generator? |
| 1:17 | röst | du | Cykeln… och storebrors generator? · STORY |
| 1:17 | händelse | malKlart | id=strom del=Dag 1 – Kom igång nasta=bygg |
| 1:17 | bekräftelse | du | plats |
| 1:17 | väntar | du | Nu borde jag koppla på generatorn, så att cykeln gör el. |
| 1:18 | MÅL |  | Ställ cykel och generator |
| 1:20 | klar | du | Cykeln… och storebrors generator? |
| 1:20 | målruta |  | Ställ cykel och generator |
| 1:21 | kvittens-bock |  | ✓ Skrivaren behöver ström |
| 1:23 | sak | du | Nu borde jag koppla på generatorn, så att cykeln gör el. |
| 1:23 | pil |  | Ställ cykel och generator |
| 1:23 | notis | tanke | 💭 Nu borde jag koppla på generatorn, så att cykeln gör el. |
| 1:23 | röst | du | Nu borde jag koppla på generatorn, så att cykeln gör el. · MÅL |
| 1:27 | klar | du | Nu borde jag koppla på generatorn, så att cykeln gör el. |
| 1:27 | händelse | placerat | sak=generator |
| 1:27 | duns | du | ställs ner |
| 1:36 | ljud | utrustning | Cykeln i famnen |
| 1:36 | händelse | lyft | sak=cykel |
| 1:41 | paket |  | tanke |
| 1:41 | tanke | du | Cykeln ska stå vid skrivaren. |
| 1:41 | väntar | du | Cykeln ska stå vid skrivaren. |
| 1:41 | sak | du | Cykeln ska stå vid skrivaren. |
| 1:41 | notis | tanke | 💭 Cykeln ska stå vid skrivaren. |
| 1:41 | röst | du | Cykeln ska stå vid skrivaren. · REAKTION |
| 1:42 | händelse | placerat | sak=cykel |
| 1:42 | duns | du | ställs ner |
| 1:44 | händelse | ombyggd | sak=cykel |
| 1:44 | händelse | malKlart | id=bygg del=Dag 1 – Kom igång nasta=valjModell |
| 1:44 | bekräftelse | du | plats |
| 1:44 | väntar | du | Strömmen finns. Nu ska skrivaren veta vad den ska göra, sen trampar jag. |
| 1:44 | målruta |  | Välj vad skrivaren ska printa |
| 1:44 | MÅL |  | Välj vad skrivaren ska printa |
| 1:46 | klar | du | Cykeln ska stå vid skrivaren. |
| 1:47 | sak | du | Strömmen finns. Nu ska skrivaren veta vad den ska göra, sen trampar jag. |
| 1:47 | pil |  | Välj vad skrivaren ska printa |
| 1:47 | notis | tanke | 💭 Strömmen finns. Nu ska skrivaren veta vad den ska göra, sen trampar jag. |
| 1:47 | röst | du | Strömmen finns. Nu ska skrivaren veta vad den ska göra, sen trampar jag. · MÅL |
| 1:48 | kvittens-bock |  | ✓ Montera generatorn |
| 1:55 | klar | du | Strömmen finns. Nu ska skrivaren veta vad den ska göra, sen trampar jag. |
| 2:09 | händelse | printStart | sak=nyckelring |
| 2:09 | tanke | du | Den stannar när jag slutar trampa. Ström som sparas hade varit nåt. |
| 2:09 | väntar | du | Den stannar när jag slutar trampa. Ström som sparas hade varit nåt. |
| 2:09 | händelse | malKlart | id=valjModell del=Dag 1 – Kom igång nasta=trampa |
| 2:09 | bekräftelse | du | plats |
| 2:09 | kvittens | du | Den piper. Den GÖR något. |
| 2:09 | väntar | du | Den piper. Den GÖR något. |
| 2:09 | struken | du | Den stannar när jag slutar trampa. Ström som sparas hade varit nåt. |
| 2:09 | väntar | du | Nu behöver den ström. Trampa. |
| 2:09 | MÅL |  | Trampa cykeln |
| 2:09 | sak | du | Den piper. Den GÖR något. |
| 2:09 | röst | du | Den piper. Den GÖR något. · STORY |
| 2:09 | målruta |  | Trampa cykeln |
| 2:11 | klar | du | Den piper. Den GÖR något. |
| 2:12 | sak | du | Nu behöver den ström. Trampa. |
| 2:12 | pil |  | Trampa cykeln |
| 2:12 | notis | tanke | 💭 Nu behöver den ström. Trampa. |
| 2:12 | röst | du | Nu behöver den ström. Trampa. · MÅL |
| 2:14 | händelse | printKlar | sak=nyckelring n=1 |
| 2:14 | händelse | malKlart | id=trampa del=Dag 1 – Kom igång nasta=rullSlut |
| 2:14 | bekräftelse | du | plats |
| 2:14 | kvittens | du | Klar! Ta ut den innan den ändrar sig. |
| 2:14 | väntar | du | Klar! Ta ut den innan den ändrar sig. |
| 2:14 | väntar | du | En nyckelring till, så länge storebrors rulle räcker. |
| 2:14 | MÅL |  | En nyckelring till |
| 2:15 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 2:15 | paket |  | sms |
| 2:15 | väntar | bror | VA FAN?! Fick du igång den?? Jag försökte i typ ett år. Den bara pep. 😳 |
| 2:15 | skratt | bror | VA FAN?! Fick du igång den?? Jag försökt |
| 2:15 | paket |  | sms |
| 2:15 | väntar | bror | Sälj grejerna i affären mitt emot, han köper allt. |
| 2:15 | foto | du | Första nyckelringen |
| 2:15 | paket |  | tanke |
| 2:15 | tanke | du | Jag gjorde den här. Av skräp. Det här kan funka. |
| 2:15 | väntar | du | Jag gjorde den här. Av skräp. Det här kan funka. |
| 2:15 | väntar | ali | Hallå där, nya grannen! Vad är det där du gör? |
| 2:16 | klar | du | Nu behöver den ström. Trampa. |
| 2:16 | sak | du | Jag gjorde den här. Av skräp. Det här kan funka. |
| 2:16 | notis | tanke | 💭 Jag gjorde den här. Av skräp. Det här kan funka. |
| 2:16 | röst | du | Jag gjorde den här. Av skräp. Det här kan funka. · STORY |
| 2:17 | målruta |  | En nyckelring till |
| 2:19 | klar | du | Jag gjorde den här. Av skräp. Det här kan funka. |
| 2:23 | sak | du | Klar! Ta ut den innan den ändrar sig. |
| 2:23 | röst | du | Klar! Ta ut den innan den ändrar sig. · STORY |
| 2:28 | klar | du | Klar! Ta ut den innan den ändrar sig. |
| 2:28 | sak | ali | Hallå där, nya grannen! Vad är det där du gör? |
| 2:28 | händelse | dialog | id=aliRop |
| 2:28 | röst | ali | Hallå där, nya grannen! Vad är det där du gör? · REAKTION |
| 2:29 | bubbla |  | Hallå där, nya grannen! Vad är det där du gör? |
| 2:31 | klar | ali | Hallå där, nya grannen! Vad är det där du gör? |
| 2:34 | sak | bror | VA FAN?! Fick du igång den?? Jag försökte i typ ett år. Den bara pep. 😳 |
| 2:34 | skratt | bror | VA FAN?! Fick du igång den?? Jag försökt |
| 2:34 | sms | bror | VA FAN?! Fick du igång den?? Jag försökte i typ ett år. Den bara pep. 😳 |
| 2:34 | skratt | bror | VA FAN?! Fick du igång den?? Jag försökt |
| 2:34 | händelse | dialog | id=brorSms1 |
| 2:34 | sms-bubbla | bror | VA FAN?! Fick du igång den?? Jag försökte i typ ett år. Den bara pep. 😳 |
| 2:34 | skratt | bror | VA FAN?! Fick du igång den?? Jag försökt |
| 2:34 | röst | bror | VA FAN?! Fick du igång den?? Jag försökte i typ ett år. Den bara pep. 😳 · REAKTION |
| 2:34 | hjälp | kontroll | Tab: Dina sms och dagboken |
| 2:40 | händelse | printStart | sak=nyckelring |
| 2:43 | klar | bror | VA FAN?! Fick du igång den?? Jag försökte i typ ett år. Den bara pep. 😳 |
| 2:43 | skratt | bror | VA FAN?! Fick du igång den?? Jag försökt |
| 2:43 | sak | du | En nyckelring till, så länge storebrors rulle räcker. |
| 2:43 | pil |  | En nyckelring till |
| 2:43 | notis | tanke | 💭 En nyckelring till, så länge storebrors rulle räcker. |
| 2:43 | röst | du | En nyckelring till, så länge storebrors rulle räcker. · MÅL |
| 2:47 | klar | du | En nyckelring till, så länge storebrors rulle räcker. |
| 2:50 | brott | TRÄNGSEL 2 | "Sälj grejerna i affären mitt emot, han köper allt." 2.0 s efter förra meddelandet, 36.0 s efter en klar uppgift |
| 2:50 | sak | bror | Sälj grejerna i affären mitt emot, han köper allt. |
| 2:50 | sms | bror | Sälj grejerna i affären mitt emot, han köper allt. |
| 2:50 | händelse | dialog | id=brorSms2 |
| 2:50 | sms-bubbla | bror | Sälj grejerna i affären mitt emot, han köper allt. |
| 2:50 | röst | bror | Sälj grejerna i affären mitt emot, han köper allt. · STORY |
| 2:52 | händelse | printKlar | sak=nyckelring n=2 |
| 2:52 | paket |  | tanke |
| 2:52 | tanke | du | Slut på storebrors rulle. Och här ligger ju plast överallt. Om jag bara kunde göra tråd av skräpet… |
| 2:52 | väntar | du | Slut på storebrors rulle. Och här ligger ju plast överallt. Om jag bara kunde göra tråd av skräpet… |
| 2:52 | händelse | malKlart | id=rullSlut del=Dag 1 – Kom igång nasta=saljTva |
| 2:52 | bekräftelse | du | plats |
| 2:52 | väntar | du | Affären mitt emot. Han verkar nyfiken. Jag visar honom. |
| 2:52 | MÅL |  | Visa ringarna i affären |
| 2:53 | kvitto-visas | du | Slut på storebrors rulle. Och här ligger ju plast överallt. Om jag bara kunde göra tråd av skräpet… |
| 2:53 | notis | tanke | 💭 Slut på storebrors rulle. Och här ligger ju plast överallt. Om jag bara kunde göra tråd av skräpet… |
| 2:54 | klar | bror | Sälj grejerna i affären mitt emot, han köper allt. |
| 2:54 | målruta |  | Visa ringarna i affären |
| 2:54 | struken | du | Affären mitt emot. Han verkar nyfiken. Jag visar honom. |
| 2:56 | kvittens-bock |  | ✓ En nyckelring till |
| 3:02 | sak | du | Affären mitt emot. Han verkar nyfiken. Jag visar honom. |
| 3:02 | pil |  | Visa ringarna i affären |
| 3:02 | notis | tanke | 💭 Affären mitt emot. Han verkar nyfiken. Jag visar honom. |
| 3:02 | röst | du | Affären mitt emot. Han verkar nyfiken. Jag visar honom. · MÅL |
| 3:05 | klar | du | Affären mitt emot. Han verkar nyfiken. Jag visar honom. |
| 3:08 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 3:08 | struken | ali | Hallå där, nya grannen! Vad är det där du gör? |
| 3:12 | brott | TRÄNGSEL 2 | "Hur kunde du bara gå? Är du ok? Svara när jag ring" 5.0 s efter förra meddelandet, 20.3 s efter en klar uppgift |
| 3:12 | sak | mamma | Hur kunde du bara gå? Är du ok? Svara när jag ringer! |
| 3:12 | sms | mamma | Hur kunde du bara gå? Är du ok? Svara när jag ringer! |
| 3:12 | sms-bubbla | mamma | Hur kunde du bara gå? Är du ok? Svara när jag ringer! |
| 3:12 | röst | mamma | Hur kunde du bara gå? Är du ok? Svara när jag ringer! · STORY |
| 3:17 | klar | mamma | Hur kunde du bara gå? Är du ok? Svara när jag ringer! |
| 3:20 | struken | ali | Pappas gamla köttkvarn. Den har malt allt utom kött. Trettio kronor, så är den din. |
| 3:20 | händelse | dialog | id=aliForsta |
| 3:20 | röst | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. · STORY |
| 3:20 | butiksbubbla | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 3:22 | händelse | salt | sak=nyckelring n=2 |
| 3:22 | aliSalt | ali | 30 |
| 3:22 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 3:22 | händelse | dialog | id=aliKvarnErbjud |
| 3:22 | butiksbubbla | ali | Pappas gamla köttkvarn. Den har malt allt utom kött. Trettio kronor, så är den din. |
| 3:23 | väntar | ali | Pappas gamla köttkvarn. Den har malt allt utom kött. Trettio kronor, så är den din. |
| 3:23 | händelse | malKlart | id=saljTva del=Dag 1 – Kom igång nasta=aliKvarn |
| 3:23 | bekräftelse | du | plats |
| 3:23 | väntar | du | Ali har en gammal kvarn. Den gör tråd av skräp. |
| 3:23 | MÅL |  | Köp kvarnen |
| 3:27 | kvittens-bock |  | ✓ Visa ringarna i affären |
| 3:31 | struken | du | Ali har en gammal kvarn. Den gör tråd av skräp. |
| 3:31 | sak | ali | Pappas gamla köttkvarn. Den har malt allt utom kött. Trettio kronor, så är den din. |
| 3:31 | röst | ali | Pappas gamla köttkvarn. Den har malt allt utom kött. Trettio kronor, så är den din. · STORY |
| 3:33 | målruta |  | Köp kvarnen |
| 3:34 | struken | du | Ali har en gammal kvarn. Den gör tråd av skräp. |
| 3:41 | klar | ali | Pappas gamla köttkvarn. Den har malt allt utom kött. Trettio kronor, så är den din. |
| 3:41 | sak | du | Ali har en gammal kvarn. Den gör tråd av skräp. |
| 3:41 | pil |  | Köp kvarnen |
| 3:41 | notis | tanke | 💭 Ali har en gammal kvarn. Den gör tråd av skräp. |
| 3:41 | röst | du | Ali har en gammal kvarn. Den gör tråd av skräp. · MÅL |
| 3:41 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 3:41 | struken | ali | Pappas gamla köttkvarn. Den har malt allt utom kött. Trettio kronor, så är den din. |
| 3:43 | händelse | kopt | sak=gammalkvarn |
| 3:43 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 3:43 | händelse | dialog | id=aliKvarnKopt |
| 3:43 | butiksbubbla | ali | Den är din. Pappa hade blivit glad. Han trodde aldrig att nån skulle vilja ha den. |
| 3:45 | väntar | ali | Den är din. Pappa hade blivit glad. Han trodde aldrig att nån skulle vilja ha den. |
| 3:45 | händelse | malKlart | id=aliKvarn del=Dag 1 – Kom igång nasta=kvarn |
| 3:45 | bekräftelse | du | plats |
| 3:45 | väntar | du | Kvarnen ska stå vid skrivaren, närmast skräpberget. |
| 3:45 | MÅL |  | Ställ kvarnen |
| 3:46 | klar | du | Ali har en gammal kvarn. Den gör tråd av skräp. |
| 3:46 | sak | ali | Den är din. Pappa hade blivit glad. Han trodde aldrig att nån skulle vilja ha den. |
| 3:46 | röst | ali | Den är din. Pappa hade blivit glad. Han trodde aldrig att nån skulle vilja ha den. · STORY |
| 3:47 | målruta |  | Ställ kvarnen |
| 3:47 | pil |  | Ställ kvarnen |
| 3:48 | väntar | kjelle | God morgon, det är Kjelle på Radio Tippen! Det har flyttat in någon i det gamla skjulet. Med en cykel och en skrivare. Spännande, Gunnar. |
| 3:48 | radio | kjelle | God morgon, det är Kjelle på Radio Tippen! Det har flyttat in någon i det gamla skjulet. Med en cykel och en skrivare. Spännande, Gunnar. |
| 3:48 | skratt | du | Radio-Kjelle |
| 3:48 | nick |  | nick:9 |
| 3:49 | kvittens-bock |  | ✓ Köp kvarnen |
| 3:54 | klar | ali | Den är din. Pappa hade blivit glad. Han trodde aldrig att nån skulle vilja ha den. |
| 3:54 | sak | kjelle | God morgon, det är Kjelle på Radio Tippen! Det har flyttat in någon i det gamla skjulet. Med en cykel och en skrivare. Spännande, Gunnar. |
| 3:54 | notis |  | 📻 Radio Tippen: God morgon, det är Kjelle på Radio Tippen! Det har flyttat in någon i det gamla skjulet. Med en cykel och en skrivare. Spännande, Gunnar. |
| 3:54 | röst | kjelle | God morgon, det är Kjelle på Radio Tippen! Det har flyttat in någon i det gamla skjulet. Med en cykel och en skrivare. Spännande, Gunnar. · REAKTION |
| 4:05 | tanke | du | Vem är Gunnar? |
| 4:05 | väntar | du | Vem är Gunnar? |
| 4:05 | klar | kjelle | God morgon, det är Kjelle på Radio Tippen! Det har flyttat in någon i det gamla skjulet. Med en cykel och en skrivare. Spännande, Gunnar. |
| 4:05 | sak | du | Kvarnen ska stå vid skrivaren, närmast skräpberget. |
| 4:05 | notis | tanke | 💭 Kvarnen ska stå vid skrivaren, närmast skräpberget. |
| 4:05 | röst | du | Kvarnen ska stå vid skrivaren, närmast skräpberget. · MÅL |
| 4:11 | klar | du | Kvarnen ska stå vid skrivaren, närmast skräpberget. |
| 4:14 | händelse | placerat | sak=kvarnen |
| 4:14 | duns | du | ställs ner |
| 4:14 | händelse | malKlart | id=kvarn del=Dag 1 – Kom igång nasta=flaska |
| 4:14 | bekräftelse | du | plats |
| 4:14 | väntar | du | Skräp i kvarnen, sen vevar jag. Då blir det tråd. |
| 4:14 | målruta |  | Gör egen tråd |
| 4:14 | MÅL |  | Gör egen tråd |
| 4:14 | sak | du | Skräp i kvarnen, sen vevar jag. Då blir det tråd. |
| 4:14 | pil |  | Gör egen tråd |
| 4:14 | notis | tanke | 💭 Skräp i kvarnen, sen vevar jag. Då blir det tråd. |
| 4:14 | röst | du | Skräp i kvarnen, sen vevar jag. Då blir det tråd. · MÅL |
| 4:14 | nick |  | nick:10 |
| 4:18 | kvittens-bock |  | ✓ Ställ kvarnen |
| 4:19 | klar | du | Skräp i kvarnen, sen vevar jag. Då blir det tråd. |
| 4:19 | hjälp | kontroll | Klick: Veva kvarnen tills tratten är tom |
| 4:26 | struken | du | Vem är Gunnar? |
| 4:40 | struken | info:bra | 3 st i tratten – veva nu! |
| 4:41 | händelse | malKlart | id=flaska del=Dag 1 – Kom igång nasta=egenPrint |
| 4:41 | bekräftelse | du | plats |
| 4:41 | kvittens | du | Det blir tråd! Riktig plasttråd. |
| 4:41 | väntar | du | Det blir tråd! Riktig plasttråd. |
| 4:41 | dagbok-tyst | du | Kvarnen funkar. Soptippen är en gruva. |
| 4:41 | väntar | du | Min egen tråd. Nu printar jag en nyckelring av den. |
| 4:42 | MÅL |  | Printa med egen tråd |
| 4:42 | sak | du | Det blir tråd! Riktig plasttråd. |
| 4:42 | röst | du | Det blir tråd! Riktig plasttråd. · STORY |
| 4:42 | målruta |  | Printa med egen tråd |
| 4:47 | klar | du | Det blir tråd! Riktig plasttråd. |
| 4:47 | sak | du | Min egen tråd. Nu printar jag en nyckelring av den. |
| 4:47 | pil |  | Printa med egen tråd |
| 4:47 | notis | tanke | 💭 Min egen tråd. Nu printar jag en nyckelring av den. |
| 4:47 | röst | du | Min egen tråd. Nu printar jag en nyckelring av den. · MÅL |
| 4:51 | klar | du | Min egen tråd. Nu printar jag en nyckelring av den. |
| 5:04 | händelse | printStart | sak=nyckelring |
| 5:04 | toast | bra | 🔗 Slangen kopplad |
| 5:09 | händelse | printKlar | sak=nyckelring n=3 |
| 5:09 | paket |  | tanke |
| 5:09 | tanke | du | En nyckelring av en gammal schampoflaska. Den luktar fortfarande päron. |
| 5:09 | väntar | du | En nyckelring av en gammal schampoflaska. Den luktar fortfarande päron. |
| 5:09 | skratt | du | egen tråd |
| 5:09 | händelse | malKlart | id=egenPrint del=Dag 1 – Kom igång nasta=salj |
| 5:09 | bekräftelse | du | plats |
| 5:09 | struken | du | En nyckelring av en gammal schampoflaska. Den luktar fortfarande päron. |
| 5:09 | väntar | du | Ali köper nog den här också. |
| 5:09 | målruta |  | Sälj hos Ali |
| 5:09 | MÅL |  | Sälj hos Ali |
| 5:09 | sak | du | Ali köper nog den här också. |
| 5:09 | pil |  | Sälj hos Ali |
| 5:09 | notis | tanke | 💭 Ali köper nog den här också. |
| 5:09 | röst | du | Ali köper nog den här också. · MÅL |
| 5:09 | nick |  | nick:12 |
| 5:10 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 5:11 | klar | du | Ali köper nog den här också. |
| 5:13 | kvittens-bock |  | ✓ Printa med egen tråd |
| 5:22 | händelse | printStart | sak=nyckelring |
| 5:23 | händelse | printKlar | sak=nyckelring n=4 |
| 5:23 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 5:25 | händelse | printStart | sak=nyckelring |
| 5:26 | händelse | printKlar | sak=nyckelring n=5 |
| 5:26 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 5:38 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 5:39 | händelse | salt | sak=nyckelring n=3 |
| 5:39 | aliSalt | ali | 45 |
| 5:39 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 5:39 | händelse | dialog | id=aliNyckelIgen |
| 5:39 | röst | ali | Nyckelringar igen? Folk tappar sina nycklar hela tiden. · STORY |
| 5:39 | butiksbubbla | ali | Nyckelringar igen? Folk tappar sina nycklar hela tiden. |
| 5:40 | händelse | malKlart | id=salj del=Dag 1 – Kom igång nasta=powerbank |
| 5:40 | bekräftelse | du | plats |
| 5:40 | paket | ali | ali → ge |
| 5:40 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 5:40 | händelse | dialog | id=aliPowerbank |
| 5:40 | butiksbubbla | ali | Jag såg dig cykla. Det ser jobbigt ut. Ta den här. Bra kunder får bonus. |
| 5:40 | väntar | du | Koppla in powerbanken. |
| 5:40 | målruta |  | Koppla in powerbanken |
| 5:40 | MÅL |  | Koppla in powerbanken |
| 5:44 | röst | ali | Jag såg dig cykla. Det ser jobbigt ut. Ta den här. Bra kunder får bonus. · STORY |
| 5:44 | kvittens-bock |  | ✓ Sälj hos Ali |
| 5:49 | sak | du | Koppla in powerbanken. |
| 5:49 | pil |  | Koppla in powerbanken |
| 5:49 | röst | du | Koppla in powerbanken. · MÅL |
| 5:49 | nick |  | nick:13 |
| 5:52 | klar | du | Koppla in powerbanken. |
| 6:08 | skratt | du | powerbanken monterad |
| 6:08 | paket |  | tanke |
| 6:08 | tanke | du | Nu sparas lite ström. En nyckelring, typ. Framtiden är här, och den sitter fast med eltejp. |
| 6:08 | väntar | du | Nu sparas lite ström. En nyckelring, typ. Framtiden är här, och den sitter fast med eltejp. |
| 6:08 | monterat | du | byggsats:powerbank |
| 6:08 | händelse | monterat | sak=powerbank |
| 6:08 | sak | du | Nu sparas lite ström. En nyckelring, typ. Framtiden är här, och den sitter fast med eltejp. |
| 6:08 | kvitto-visas | du | Nu sparas lite ström. En nyckelring, typ. Framtiden är här, och den sitter fast med eltejp. |
| 6:08 | notis | tanke | 💭 Nu sparas lite ström. En nyckelring, typ. Framtiden är här, och den sitter fast med eltejp. |
| 6:08 | röst | du | Nu sparas lite ström. En nyckelring, typ. Framtiden är här, och den sitter fast med eltejp. · REAKTION |
| 6:08 | händelse | malKlart | id=powerbank del=Dag 1 – Kom igång nasta=kopGrip |
| 6:08 | bekräftelse | du | plats |
| 6:08 | paket |  | lapp → ge |
| 6:08 | lapp-kö | 🧺 Ali | Ali här. Nyckelringen sålde direkt. Jag ville bli ingenjör en gång. Nu har jag låtit en AI rita en skräpgrip. Kom och titta. |
| 6:08 | väntar | ali | Ali här. Nyckelringen sålde direkt. Jag ville bli ingenjör en gång. Nu har jag låtit en AI rita en skräpgrip. Kom och titta. |
| 6:08 | väntar |  | (läget ändras) |
| 6:09 | MÅL |  | Köp skräpgripen |
| 6:12 | kvittens-bock |  | ✓ Gå till Ali |
| 6:15 | klar | du | Nu sparas lite ström. En nyckelring, typ. Framtiden är här, och den sitter fast med eltejp. |
| 6:15 | sak |  | (läget ändras) |
| 6:15 | klar |  | (läget ändras) |
| 6:18 | sak | ali | Ali här. Nyckelringen sålde direkt. Jag ville bli ingenjör en gång. Nu har jag låtit en AI rita en skräpgrip. Kom och titta. |
| 6:18 | sms | ali | Ali här. Nyckelringen sålde direkt. Jag ville bli ingenjör en gång. Nu har jag låtit en AI rita en skräpgrip. Kom och titta. |
| 6:18 | händelse | dialog | id=aliGripSms |
| 6:18 | sms-bubbla | ali | Ali här. Nyckelringen sålde direkt. Jag ville bli ingenjör en gång. Nu har jag låtit en AI rita en skräpgrip. Kom och titta. |
| 6:18 | röst | ali | Ali här. Nyckelringen sålde direkt. Jag ville bli ingenjör en gång. Nu har jag låtit en AI rita en skräpgrip. Kom och titta. · STORY |
| 6:18 | orsak-väntan |  | dialog:aliGripSms |
| 6:18 | väntar | du | Med en skräpgrip slipper jag böja mig. Ali har en ritning. |
| 6:18 | målruta |  | Köp skräpgripen |
| 6:28 | paket |  | tanke |
| 6:28 | tanke | du | Femtio kronor. Nu har jag råd med gripen. |
| 6:28 | väntar | du | Femtio kronor. Nu har jag råd med gripen. |
| 6:31 | struken | du | Med en skräpgrip slipper jag böja mig. Ali har en ritning. |
| 6:35 | klar | ali | Ali här. Nyckelringen sålde direkt. Jag ville bli ingenjör en gång. Nu har jag låtit en AI rita en skräpgrip. Kom och titta. |
| 6:35 | sak | du | Med en skräpgrip slipper jag böja mig. Ali har en ritning. |
| 6:35 | pil |  | Köp skräpgripen |
| 6:35 | notis | tanke | 💭 Med en skräpgrip slipper jag böja mig. Ali har en ritning. |
| 6:35 | röst | du | Med en skräpgrip slipper jag böja mig. Ali har en ritning. · MÅL |
| 6:37 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 6:38 | struken | info:guld | 3D-modell köpt – printa skräpgrip |
| 6:38 | händelse | kopt | sak=grip |
| 6:38 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 6:38 | händelse | dialog | id=aliForstaRitning |
| 6:38 | butiksbubbla | ali | Bra val. Ritningen räcker till en skräpgrip. |
| 6:39 | väntar | ali | Bra val. Ritningen räcker till en skräpgrip. |
| 6:39 | händelse | malKlart | id=kopGrip del=Dag 1 – Kom igång nasta=printGrip |
| 6:39 | bekräftelse | du | plats |
| 6:39 | väntar | du | Min första 3D-modell! Jag printar inte bara saker – jag printar maskiner. |
| 6:39 | struken | du | Femtio kronor. Nu har jag råd med gripen. |
| 6:39 | väntar | du | Ritningen är min. Nu printar jag skräpgripen. |
| 6:39 | MÅL |  | Printa skräpgripen |
| 6:40 | klar | du | Med en skräpgrip slipper jag böja mig. Ali har en ritning. |
| 6:40 | sak | du | Min första 3D-modell! Jag printar inte bara saker – jag printar maskiner. |
| 6:40 | kvitto-visas | du | Min första 3D-modell! Jag printar inte bara saker – jag printar maskiner. |
| 6:40 | lapp | 📔 Dagbok | Min första 3D-modell! Jag printar inte bara saker – jag printar maskiner. |
| 6:40 | dagbokrad | du | Min första 3D-modell! Jag printar inte bara saker – jag printar maskiner. |
| 6:40 | notis | dagbok | Min första 3D-modell! Jag printar inte bara saker – jag printar maskiner. |
| 6:41 | klar | du | Min första 3D-modell! Jag printar inte bara saker – jag printar maskiner. |
| 6:41 | sak | ali | Bra val. Ritningen räcker till en skräpgrip. |
| 6:41 | röst | ali | Bra val. Ritningen räcker till en skräpgrip. · STORY |
| 6:42 | målruta |  | Printa skräpgripen |
| 6:42 | pil |  | Printa skräpgripen |
| 6:42 | nick |  | nick:15 |
| 6:45 | klar | ali | Bra val. Ritningen räcker till en skräpgrip. |
| 6:47 | sak | du | Ritningen är min. Nu printar jag skräpgripen. |
| 6:47 | notis | tanke | 💭 Ritningen är min. Nu printar jag skräpgripen. |
| 6:47 | röst | du | Ritningen är min. Nu printar jag skräpgripen. · MÅL |
| 6:51 | klar | du | Ritningen är min. Nu printar jag skräpgripen. |
| 7:07 | händelse | printStart | sak=byggsats:grip |
| 7:08 | toast | fel | Ingen ström – trampa cykeln |
| 7:08 | väntar | notis:Storebrors skrivare: Ingen ström – tramp | Storebrors skrivare: Ingen ström – trampa cykeln |
| 7:08 | sak | notis:Storebrors skrivare: Ingen ström – tramp | Storebrors skrivare: Ingen ström – trampa cykeln |
| 7:08 | notis | fel | Storebrors skrivare: Ingen ström – trampa cykeln |
| 7:10 | brott | DUBBEL UPPMANING | "trampa" på 2 ställen: pekrutan, notisen |
| 7:11 | klar | notis:Storebrors skrivare: Ingen ström – tramp | Storebrors skrivare: Ingen ström – trampa cykeln |
| 7:11 | händelse | printKlar | sak=byggsats:grip n=1 |
| 7:28 | tanke | du | Skräpgrip ska jag ha på mig. |
| 7:28 | väntar | du | Skräpgrip ska jag ha på mig. |
| 7:28 | händelse | tagitUrPrint | sak=byggsats:grip n=1 |
| 7:28 | paket |  | sms |
| 7:28 | väntar | ali | Ali här. Jag såg Skräpgrip på avstånd. Ett streck blev lite snett. Mitt fel. Vackert ändå. |
| 7:28 | sak | du | Skräpgrip ska jag ha på mig. |
| 7:28 | notis | tanke | 💭 Skräpgrip ska jag ha på mig. |
| 7:28 | röst | du | Skräpgrip ska jag ha på mig. · REAKTION |
| 7:31 | klar | du | Skräpgrip ska jag ha på mig. |
| 7:34 | tanke | du | Skräpgripen sitter! Jag bär 6, siktar lättare och plockar när jag går nära. |
| 7:34 | väntar | du | Skräpgripen sitter! Jag bär 6, siktar lättare och plockar när jag går nära. |
| 7:34 | tog på | du | byggsats:grip |
| 7:34 | händelse | monterat | sak=grip |
| 7:34 | sak | du | Skräpgripen sitter! Jag bär 6, siktar lättare och plockar när jag går nära. |
| 7:34 | notis | tanke | 💭 Skräpgripen sitter! Jag bär 6, siktar lättare och plockar när jag går nära. |
| 7:34 | röst | du | Skräpgripen sitter! Jag bär 6, siktar lättare och plockar när jag går nära. · REAKTION |
| 7:34 | händelse | malKlart | id=printGrip del=Dag 1 – Kom igång nasta=krukaD1 |
| 7:34 | bekräftelse | du | plats |
| 7:34 | väntar | du | Spara till krukreceptet. |
| 7:34 | MÅL |  | Spara till krukreceptet · 0 / 40 kr |
| 7:36 | händelse | printStart | sak=nyckelring |
| 7:36 | målruta |  | Spara till krukreceptet · 0 / 40 kr |
| 7:37 | händelse | printKlar | sak=nyckelring n=6 |
| 7:38 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 7:38 | kvittens-bock |  | ✓ Printa skräpgripen |
| 7:40 | händelse | printStart | sak=nyckelring |
| 7:41 | händelse | printKlar | sak=nyckelring n=7 |
| 7:42 | klar | du | Skräpgripen sitter! Jag bär 6, siktar lättare och plockar när jag går nära. |
| 7:42 | sak | ali | Ali här. Jag såg Skräpgrip på avstånd. Ett streck blev lite snett. Mitt fel. Vackert ändå. |
| 7:42 | sms | ali | Ali här. Jag såg Skräpgrip på avstånd. Ett streck blev lite snett. Mitt fel. Vackert ändå. |
| 7:42 | sms-bubbla | ali | Ali här. Jag såg Skräpgrip på avstånd. Ett streck blev lite snett. Mitt fel. Vackert ändå. |
| 7:42 | röst | ali | Ali här. Jag såg Skräpgrip på avstånd. Ett streck blev lite snett. Mitt fel. Vackert ändå. · REAKTION |
| 7:52 | klar | ali | Ali här. Jag såg Skräpgrip på avstånd. Ett streck blev lite snett. Mitt fel. Vackert ändå. |
| 7:52 | sak | du | Spara till krukreceptet. |
| 7:52 | pil |  | Spara till krukreceptet · 0 / 40 kr |
| 7:52 | röst | du | Spara till krukreceptet. · MÅL |
| 7:56 | klar | du | Spara till krukreceptet. |
| 8:02 | upplåst | bara | grip |
| 8:02 | brott | UPPLÅST | grip (bara 3 av 3) |
| 8:02 | händelse | upplast | id=grip flask=bara |
| 8:02 | paket |  | tanke |
| 8:02 | tanke | du | Ett skräp i taget. Jag springer ihjäl mig. |
| 8:02 | väntar | du | Ett skräp i taget. Jag springer ihjäl mig. |
| 8:02 | sak | du | Ett skräp i taget. Jag springer ihjäl mig. |
| 8:02 | notis | tanke | 💭 Ett skräp i taget. Jag springer ihjäl mig. |
| 8:02 | röst | du | Ett skräp i taget. Jag springer ihjäl mig. · STORY |
| 8:06 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 8:06 | klar | du | Ett skräp i taget. Jag springer ihjäl mig. |
| 8:08 | händelse | printStart | sak=nyckelring |
| 8:09 | händelse | printKlar | sak=nyckelring n=8 |
| 8:10 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 8:20 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 8:22 | händelse | salt | sak=nyckelring n=1 |
| 8:22 | paket |  | ali → ge |
| 8:22 | väntar | ali | Du får bonus! 20 kr extra. Säg inget till min fru. |
| 8:22 | väntar |  | (läget ändras) |
| 8:22 | aliSalt | ali | 15 |
| 8:22 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 8:22 | händelse | salt | sak=nyckelring n=1 |
| 8:22 | aliSalt | ali | 15 |
| 8:22 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 8:22 | händelse | salt | sak=nyckelring n=1 |
| 8:22 | aliSalt | ali | 15 |
| 8:22 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 8:23 | sak | ali | Du får bonus! 20 kr extra. Säg inget till min fru. |
| 8:23 | notis |  | Ali: ”Du får bonus! 20 kr extra. Säg inget till min fru.” |
| 8:23 | röst | ali | Du får bonus! 20 kr extra. Säg inget till min fru. · REAKTION |
| 8:23 | upplåst | inkomst | kruka |
| 8:23 | brott | UPPLÅST | kruka (inkomst 8 av 6) |
| 8:23 | händelse | upplast | id=kruka flask=inkomst |
| 8:23 | paket |  | sms |
| 8:23 | väntar | ali | Prova en kruka. Folk köper krukor. Ingen vet varför. |
| 8:23 | skratt | ali | Prova en kruka. Folk köper krukor. Ingen |
| 8:23 | kvitto-visas |  | (läget ändras) |
| 8:23 | sak |  | (läget ändras) |
| 8:28 | klar | ali | Du får bonus! 20 kr extra. Säg inget till min fru. |
| 8:30 | sak | ali | Prova en kruka. Folk köper krukor. Ingen vet varför. |
| 8:30 | skratt | ali | Prova en kruka. Folk köper krukor. Ingen |
| 8:30 | sms | ali | Prova en kruka. Folk köper krukor. Ingen vet varför. |
| 8:30 | skratt | ali | Prova en kruka. Folk köper krukor. Ingen |
| 8:30 | händelse | dialog | id=aliKrukaSms |
| 8:30 | sms-bubbla | ali | Prova en kruka. Folk köper krukor. Ingen vet varför. |
| 8:30 | skratt | ali | Prova en kruka. Folk köper krukor. Ingen |
| 8:30 | röst | ali | Prova en kruka. Folk köper krukor. Ingen vet varför. · STORY |
| 8:36 | klar | ali | Prova en kruka. Folk köper krukor. Ingen vet varför. |
| 8:36 | skratt | ali | Prova en kruka. Folk köper krukor. Ingen |
| 8:36 | väntar | du | Ali vill ha krukor. Jag printar en blomkruka. |
| 8:43 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 8:44 | händelse | kopt | sak=kruka |
| 8:44 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 8:44 | händelse | dialog | id=aliKrukaRecept |
| 8:44 | röst | ali | Blomkruka? Bra val. Folk köper sånt. Jag vet inte varför. · STORY |
| 8:44 | butiksbubbla | ali | Blomkruka? Bra val. Folk köper sånt. Jag vet inte varför. |
| 8:47 | struken | du | Ali vill ha krukor. Jag printar en blomkruka. |
| 8:56 | sak | du | Ali vill ha krukor. Jag printar en blomkruka. |
| 8:56 | röst | du | Ali vill ha krukor. Jag printar en blomkruka. · STORY |
| 9:01 | klar | du | Ali vill ha krukor. Jag printar en blomkruka. |
| 9:04 | händelse | printStart | sak=kruka |
| 9:05 | toast | fel | Ingen ström – trampa cykeln |
| 9:08 | händelse | printKlar | sak=kruka n=1 |
| 9:08 | händelse | malKlart | id=krukaD1 del=Dag 1 – Kom igång nasta=saljKruka |
| 9:08 | bekräftelse | du | plats |
| 9:08 | kvittens | du | En kruka. Mamma skulle bli så stolt. Hon får inte veta. |
| 9:08 | väntar | du | En kruka. Mamma skulle bli så stolt. Hon får inte veta. |
| 9:08 | väntar | du | Ali gillar krukor. Han sa det själv. |
| 9:08 | MÅL |  | Sälj blomkrukan |
| 9:08 | sak | du | En kruka. Mamma skulle bli så stolt. Hon får inte veta. |
| 9:08 | röst | du | En kruka. Mamma skulle bli så stolt. Hon får inte veta. · STORY |
| 9:08 | målruta |  | Sälj blomkrukan |
| 9:09 | händelse | tagitUrPrint | sak=kruka n=1 |
| 9:13 | klar | du | En kruka. Mamma skulle bli så stolt. Hon får inte veta. |
| 9:14 | sak | du | Ali gillar krukor. Han sa det själv. |
| 9:14 | pil |  | Sälj blomkrukan |
| 9:14 | notis | tanke | 💭 Ali gillar krukor. Han sa det själv. |
| 9:14 | röst | du | Ali gillar krukor. Han sa det själv. · MÅL |
| 9:16 | klar | du | Ali gillar krukor. Han sa det själv. |
| 9:32 | väntar | ali | Den köper jag. Ge hit. |
| 9:32 | sak | ali | Den köper jag. Ge hit. |
| 9:32 | röst | ali | Den köper jag. Ge hit. · REAKTION |
| 9:32 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 9:34 | händelse | salt | sak=kruka n=1 |
| 9:34 | aliSalt | ali | 70 |
| 9:34 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 9:35 | händelse | malKlart | id=saljKruka del=Dag 1 – Kom igång nasta=kopSang |
| 9:35 | bekräftelse | du | plats |
| 9:35 | väntar | du | Jag tänker inte sova på betongen i natt. Ali har en säng. Typ. |
| 9:35 | målruta |  | Köp sängen |
| 9:35 | MÅL |  | Köp sängen |
| 9:36 | klar | ali | Den köper jag. Ge hit. |
| 9:36 | sak | du | Jag tänker inte sova på betongen i natt. Ali har en säng. Typ. |
| 9:36 | pil |  | Köp sängen |
| 9:36 | notis | tanke | 💭 Jag tänker inte sova på betongen i natt. Ali har en säng. Typ. |
| 9:36 | röst | du | Jag tänker inte sova på betongen i natt. Ali har en säng. Typ. · MÅL |
| 9:38 | paket |  | tanke |
| 9:38 | tanke | du | Det börjar bli mörkt. Jag kan inte sova på jorden. |
| 9:38 | väntar | du | Det börjar bli mörkt. Jag kan inte sova på jorden. |
| 9:39 | kvittens-bock |  | ✓ Sälj blomkrukan |
| 9:42 | klar | du | Jag tänker inte sova på betongen i natt. Ali har en säng. Typ. |
| 9:49 | väntar | bud | (tips) |
| 9:49 | sak | bud | (tips) |
| 9:50 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 9:50 | röst | du | Jag har pengar nu. Hos Ali kan jag köpa uppgraderingar – bära mer eller printa snabbare. · MÅL |
| 9:51 | klar | bud | (tips) |
| 9:51 | händelse | kopt | sak=sang |
| 9:51 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 9:51 | händelse | dialog | id=aliSang |
| 9:51 | butiksbubbla | ali | Sov gott, min vän. |
| 9:53 | väntar | ali | Sov gott, min vän. |
| 9:53 | händelse | malKlart | id=kopSang del=Dag 1 – Kom igång nasta=printSang |
| 9:53 | bekräftelse | du | plats |
| 9:53 | struken | du | Det börjar bli mörkt. Jag kan inte sova på jorden. |
| 9:53 | väntar | du | En säng tar lång tid. Den är värd det. |
| 9:53 | MÅL |  | Printa sängen |
| 9:57 | sak | ali | Sov gott, min vän. |
| 9:57 | röst | ali | Sov gott, min vän. · STORY |
| 9:57 | kvittens-bock |  | ✓ Köp sängen |
| 9:59 | klar | ali | Sov gott, min vän. |
| 9:59 | målruta |  | Printa sängen |
| 9:59 | pil |  | Printa sängen |
| 10:00 | nick |  | nick:19 |
| 10:01 | sak | du | En säng tar lång tid. Den är värd det. |
| 10:01 | notis | tanke | 💭 En säng tar lång tid. Den är värd det. |
| 10:01 | röst | du | En säng tar lång tid. Den är värd det. · MÅL |
| 10:05 | klar | du | En säng tar lång tid. Den är värd det. |
| 10:50 | tanke | du | Högar bakom staketet. Där inne ligger mer än på hela gården. |
| 10:50 | väntar | du | Högar bakom staketet. Där inne ligger mer än på hela gården. |
| 10:50 | sak | du | Högar bakom staketet. Där inne ligger mer än på hela gården. |
| 10:50 | notis | tanke | 💭 Högar bakom staketet. Där inne ligger mer än på hela gården. |
| 10:50 | röst | du | Högar bakom staketet. Där inne ligger mer än på hela gården. · REAKTION |
| 10:52 | händelse | printStart | sak=sang |
| 10:55 | toast | fel | Ingen ström – trampa cykeln |
| 10:56 | klar | du | Högar bakom staketet. Där inne ligger mer än på hela gården. |
| 10:58 | toast | fel | Slut på tråd – mal mer så fortsätter den |
| 10:58 | väntar | notis:Storebrors skrivare: Slut på tråd – mal  | Storebrors skrivare: Slut på tråd – mal mer så fortsätter den |
| 11:04 | sak | notis:Storebrors skrivare: Slut på tråd – mal  | Storebrors skrivare: Slut på tråd – mal mer så fortsätter den |
| 11:04 | notis | fel | Storebrors skrivare: Slut på tråd – mal mer så fortsätter den |
| 11:07 | klar | notis:Storebrors skrivare: Slut på tråd – mal  | Storebrors skrivare: Slut på tråd – mal mer så fortsätter den |
| 11:27 | händelse | printKlar | sak=sang n=1 |
| 11:31 | händelse | tagitUrPrint | sak=sang n=1 |
| 11:31 | händelse | malKlart | id=printSang del=Dag 1 – Kom igång nasta=sov1 |
| 11:31 | bekräftelse | du | plats |
| 11:31 | kvittens | du | En säng. Jag printade en SÄNG. |
| 11:31 | väntar | du | En säng. Jag printade en SÄNG. |
| 11:31 | paket |  | lapp |
| 11:31 | kvallsrad | du | Nitton år. Inget mer tjat. Gården är full av skräp. I morgon. |
| 11:31 | väntar | du | Sängen ska in i skjulet. Sen sover jag. |
| 11:31 | MÅL |  | Sängen i skjulet |
| 11:31 | sak | du | En säng. Jag printade en SÄNG. |
| 11:31 | röst | du | En säng. Jag printade en SÄNG. · STORY |
| 11:31 | målruta |  | Sängen i skjulet |
| 11:36 | klar | du | En säng. Jag printade en SÄNG. |
| 11:36 | sak | du | Sängen ska in i skjulet. Sen sover jag. |
| 11:36 | pil |  | Sängen i skjulet |
| 11:36 | notis | tanke | 💭 Sängen ska in i skjulet. Sen sover jag. |
| 11:36 | röst | du | Sängen ska in i skjulet. Sen sover jag. · MÅL |
| 11:36 | nick |  | nick:20 |
| 11:40 | klar | du | Sängen ska in i skjulet. Sen sover jag. |
| 11:56 | autosparning | du | natt 3 december |
| 11:59 | nattkort | du | 🌙 21 dagar kvar. God natt. zzz… i en riktig säng Nitton år. Inget mer tjat. Gården är full av skräp. I morgon. DAGENS PRINTAR Nyckelring × 8 Blomkruka × 1 Säng |

<details><summary>Botens handlingar dag 1</summary>

- 0:20 gå till brädhögen (3 m) (5 kr)
- 0:28 gå till cykeln vid vägen (2 m) (5 kr)
- 0:43 gå till rutan i linje 1 (13 m) (5 kr)
- 1:36 gå till cykeln (lyfter den) (13 m) (5 kr)
- 1:42 gå till cykelns plats (11 m) (5 kr)
- 2:05 gå till fel håll en bit (4 m) (5 kr)
- 2:07 gå till skrivaren (2 m) (5 kr)
- 2:09 printar Nyckelring (5 kr)
- 2:16 tar ut 1 st ur skrivaren (5 kr)
- 2:34 nybörjaren ser ingen pil – tittar runt (5 kr)
- 2:40 printar Nyckelring (sista av storebrors rulle) (5 kr)
- 3:03 nybörjaren ser ingen pil – tittar runt (5 kr)
- 3:08 gå till skrivaren (1 m) (5 kr)
- 3:08 tar ut 1 st ur skrivaren (5 kr)
- 3:10 gå till fel håll en bit (4 m) (5 kr)
- 3:20 gå till Ali (26 m) (5 kr)
- 3:20 öppnar Alis butik – sälja de två nyckelringarna (5 kr)
- 3:22 säljer hos Ali: +30 kr (35 kr)
- 3:41 öppnar Alis butik – köpa kvarnen (35 kr)
- 3:44 köper gammalkvarn för 30 kr (5 kr)
- 3:45 köpte kvarnen (5 kr)
- 4:14 gå till kvarnens ruta (28 m) (5 kr)
- 4:37 plockar 3 skräp på gården (bär max 3) (5 kr)
- 4:40 gå till kvarnen (10 m) (5 kr)
- 5:01 gå till cykeln (2 m) (5 kr)
- 5:04 printar Nyckelring (5 kr)
- 5:10 tar ut 1 st ur skrivaren (5 kr)
- 5:22 printar Nyckelring (5 kr)
- 5:24 tar ut 1 st ur skrivaren (5 kr)
- 5:25 printar Nyckelring (5 kr)
- 5:27 tar ut 1 st ur skrivaren (5 kr)
- 5:38 gå till Ali (27 m) (5 kr)
- 5:38 öppnar Alis butik – sälja nyckelringar (5 kr)
- 5:40 säljer hos Ali: +45 kr (50 kr)
- 5:49 panel: "Alis butik
50 kr
0 rullar
Jag " (50 kr)
- 6:08 gå till koppla powerbanken till cykeln (24 m) (50 kr)
- 6:24 nybörjaren ser ingen pil – tittar runt (50 kr)
- 6:37 gå till Ali (24 m) (50 kr)
- 6:37 öppnar Alis butik – köpa skräpgrip (50 kr)
- 6:39 köper grip för 50 kr (0 kr)
- 7:06 gå till skrivaren (25 m) (0 kr)
- 7:07 printar Skräpgrip (0 kr)
- 7:08 gå till cykeln (1 m) (0 kr)
- 7:19 plockar 3 skräp på gården (bär max 3) (0 kr)
- 7:24 gå till kvarnen (14 m) (0 kr)
- 7:28 gå till skrivaren (3 m) (0 kr)
- 7:29 tar ut 1 st ur skrivaren (0 kr)
- 7:34 tar på grip (0 kr)
- 7:34 tjänar pengar till väntar på flaskhalsen för kruka: 0/40 kr → printar nyckelring (15 kr) (0 kr)
- 7:36 printar Nyckelring (0 kr)
- 7:38 tar ut 1 st ur skrivaren (0 kr)
- 7:40 printar Nyckelring (0 kr)
- 7:57 plockar 6 skräp på gården (bär max 6) (0 kr)
- 8:02 gå till kvarnen (14 m) (0 kr)
- 8:06 gå till skrivaren (3 m) (0 kr)
- 8:06 tar ut 1 st ur skrivaren (0 kr)
- 8:08 printar Nyckelring (0 kr)
- 8:10 tar ut 1 st ur skrivaren (0 kr)
- 8:20 gå till Ali (28 m) (0 kr)
- 8:20 öppnar Alis butik – sälja (0 kr)
- 8:22 säljer hos Ali: +45 kr (45 kr)
- 8:43 öppnar Alis butik – köpa receptet blomkruka (65 kr)
- 8:45 köper kruka för 40 kr (25 kr)
- 9:03 gå till skrivaren (25 m) (25 kr)
- 9:04 printar Blomkruka (25 kr)
- 9:05 gå till cykeln (1 m) (25 kr)
- 9:09 tar ut 1 st ur skrivaren (25 kr)
- 9:19 nybörjaren ser ingen pil – tittar runt (25 kr)
- 9:32 gå till Ali (25 m) (25 kr)
- 9:32 öppnar Alis butik – sälja krukan (25 kr)
- 9:34 säljer hos Ali: +70 kr (95 kr)
- 9:50 öppnar Alis butik – köpa sängen (95 kr)
- 9:52 köper sang för 60 kr (35 kr)
- 10:24 gå till dit pilen pekar (30 m) (35 kr)
- 10:36 plockar 6 skräp på gården (bär max 6) (35 kr)
- 10:47 gå till kvarnen (29 m) (35 kr)
- 10:50 gå till skrivaren (1 m) (35 kr)
- 10:52 printar Säng (35 kr)
- 10:56 gå till cykeln (2 m) (35 kr)
- 11:15 plockar 6 skräp på gården (bär max 6) (35 kr)
- 11:25 gå till kvarnen (27 m) (35 kr)
- 11:31 gå till skrivaren (3 m) (35 kr)
- 11:32 tar ut 1 st ur skrivaren (35 kr)
- 11:56 gå till sängplatsen i skjulet (21 m) (35 kr)

</details>

## Dag 2

| Tid | Källa | Vem | Text |
|---|---|---|---|
| 11:59 | vara | ali | kruka |
| 11:59 | händelse | malKlart | id=sov1 del=Dag 1 – Kom igång nasta=kopMotor |
| 11:59 | bekräftelse | du | plats |
| 11:59 | MÅL |  | Spara till kvarnmotorn · 35 / 50 kr |
| 0:00 | autosparning | du | morgon 4 december |
| 0:01 | dagbok | du | Första natten i en riktig säng. Jag printade den själv. |
| 0:01 | händelse | dagenBorjar | dag=2 |
| 0:01 | meddelande | du | 20 dagar till jul. Vevar jag för hand hinner jag inget annat. |
| 0:01 | dagbokkort | du | Kvarnmotorn. · 20 dagar till jul. Vevar jag för hand hinner jag inget annat. |
| 0:01 | röst | du | 20 dagar till jul. Kvarnmotorn. Vevar jag för hand hinner jag inget annat. · STORY |
| 0:11 | väntar | notis:morgon | Ali vill ha idag: Blomkruka · +50 % |
| 0:11 | händelse | morgonkortStangt | dag=2 |
| 0:11 | paket |  | tanke |
| 0:11 | tanke | du | Grön jul igen. Typiskt. |
| 0:11 | väntar | du | Grön jul igen. Typiskt. |
| 0:11 | struken | du | Grön jul igen. Typiskt. |
| 0:11 | väntar | du | Vevandet tar på armarna. Ali har en motor till kvarnen. |
| 0:11 | målruta |  | Spara till kvarnmotorn · 35 / 50 kr |
| 0:16 | sak | du | Vevandet tar på armarna. Ali har en motor till kvarnen. |
| 0:16 | pil |  | Spara till kvarnmotorn · 35 / 50 kr |
| 0:16 | notis | tanke | 💭 Vevandet tar på armarna. Ali har en motor till kvarnen. |
| 0:16 | röst | du | Vevandet tar på armarna. Ali har en motor till kvarnen. · MÅL |
| 0:23 | klar | du | Vevandet tar på armarna. Ali har en motor till kvarnen. |
| 0:23 | sak | notis:morgon | Ali vill ha idag: Blomkruka · +50 % |
| 0:23 | notis |  | Blomkruka · +50 % |
| 0:27 | klar | notis:morgon | Ali vill ha idag: Blomkruka · +50 % |
| 0:29 | händelse | printStart | sak=kruka |
| 0:31 | väntar | ali | Ali här. Såg skylten. Stavningen är rätt. Det är mer än många. |
| 0:31 | händelse | printKlar | sak=kruka n=2 |
| 0:32 | händelse | tagitUrPrint | sak=kruka n=1 |
| 0:41 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 0:41 | röst | ali | Du printar mina ritningar. Ingen har gjort det förut. Jag är inte rörd. Det är dammet. · STORY |
| 0:41 | butiksbubbla | ali | Du printar mina ritningar. Ingen har gjort det förut. Jag är inte rörd. Det är dammet. |
| 0:43 | händelse | salt | sak=kruka n=1 |
| 0:43 | aliSalt | ali | 105 |
| 0:43 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 0:43 | butiksbubbla | ali | Precis vad jag ville ha idag. 105 kr – med extra. |
| 0:44 | väntar | ali | Precis det jag ville ha idag, min vän. |
| 0:44 | upplåst | mala | kvarnmotor |
| 0:44 | brott | UPPLÅST | kvarnmotor (mala 7 av 6, sparat ihop) |
| 0:44 | händelse | upplast | id=kvarnmotor flask=mala |
| 0:44 | paket |  | sms |
| 0:44 | väntar | ali | Ali här. En motor? Jag har en. Från en gammal tvättmaskin. Den centrifugerar fortfarande om man ber snällt. |
| 0:50 | sak | ali | Precis det jag ville ha idag, min vän. |
| 0:50 | röst | ali | Precis det jag ville ha idag, min vän. · STORY |
| 0:51 | väntar | foto | Egen säng |
| 0:51 | paket |  | tanke |
| 0:51 | tanke | du | Tänk att jag ska få sova i min egen säng. |
| 0:51 | väntar | du | Tänk att jag ska få sova i min egen säng. |
| 0:54 | klar | ali | Precis det jag ville ha idag, min vän. |
| 0:56 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 0:56 | sak | ali | Ali här. En motor? Jag har en. Från en gammal tvättmaskin. Den centrifugerar fortfarande om man ber snällt. |
| 0:56 | sms | ali | Ali här. En motor? Jag har en. Från en gammal tvättmaskin. Den centrifugerar fortfarande om man ber snällt. |
| 0:56 | sms-bubbla | ali | Ali här. En motor? Jag har en. Från en gammal tvättmaskin. Den centrifugerar fortfarande om man ber snällt. |
| 0:56 | röst | ali | Ali här. En motor? Jag har en. Från en gammal tvättmaskin. Den centrifugerar fortfarande om man ber snällt. · STORY |
| 0:57 | struken | info:guld | 3D-modell köpt – printa kvarnmotor |
| 0:57 | händelse | kopt | sak=kvarnmotor |
| 0:57 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 0:59 | händelse | malKlart | id=kopMotor del=Dag 2 – Tippen bredvid nasta=monteraMotor |
| 0:59 | bekräftelse | du | plats |
| 0:59 | väntar | du | Motorn ska sitta där veven sitter. Jag printar den först. |
| 0:59 | MÅL |  | Printa kvarnmotorn till kvarnen |
| 1:01 | målruta |  | Printa kvarnmotorn till kvarnen |
| 1:01 | pil |  | Printa kvarnmotorn till kvarnen |
| 1:02 | nick |  | nick:22 |
| 1:03 | kvittens-bock |  | ✓ Köp kvarnmotorn |
| 1:06 | klar | ali | Ali här. En motor? Jag har en. Från en gammal tvättmaskin. Den centrifugerar fortfarande om man ber snällt. |
| 1:06 | sak | du | Motorn ska sitta där veven sitter. Jag printar den först. |
| 1:06 | notis | tanke | 💭 Motorn ska sitta där veven sitter. Jag printar den först. |
| 1:06 | röst | du | Motorn ska sitta där veven sitter. Jag printar den först. · MÅL |
| 1:08 | tanke | du | Sopbilen tippade en ny last. Allt det skräpet – och grinden är låst. |
| 1:08 | okänt ord bytt | du | Sopbilen tippade en ny last. Allt det skräpet – och grinden är låst. |
| 1:08 | väntar | du | Sopbilen tippade en ny last. Allt det skräpet – och grinden är låst. |
| 1:08 | skratt | du | däcket rullar iväg |
| 1:11 | klar | du | Motorn ska sitta där veven sitter. Jag printar den först. |
| 1:28 | struken | du | Sopbilen tippade en ny last. Allt det skräpet – och grinden är låst. |
| 1:32 | händelse | printStart | sak=byggsats:kvarnmotor |
| 1:33 | toast | fel | Ingen ström – trampa cykeln |
| 1:35 | händelse | printKlar | sak=byggsats:kvarnmotor n=1 |
| 1:36 | tanke | du | Kvarnmotorn ska skruvas fast på kvarnen. |
| 1:36 | väntar | du | Kvarnmotorn ska skruvas fast på kvarnen. |
| 1:36 | händelse | tagitUrPrint | sak=byggsats:kvarnmotor n=1 |
| 1:36 | paket |  | sms |
| 1:36 | väntar | ali | Ali här. Ännu en ritning som blev på riktigt: Kvarnmotor. Semesterkassan växer. Livet växer. |
| 1:36 | sak | du | Kvarnmotorn ska skruvas fast på kvarnen. |
| 1:36 | notis | tanke | 💭 Kvarnmotorn ska skruvas fast på kvarnen. |
| 1:36 | röst | du | Kvarnmotorn ska skruvas fast på kvarnen. · REAKTION |
| 1:40 | klar | du | Kvarnmotorn ska skruvas fast på kvarnen. |
| 1:42 | sak | ali | Ali här. Ännu en ritning som blev på riktigt: Kvarnmotor. Semesterkassan växer. Livet växer. |
| 1:42 | sms | ali | Ali här. Ännu en ritning som blev på riktigt: Kvarnmotor. Semesterkassan växer. Livet växer. |
| 1:42 | sms-bubbla | ali | Ali här. Ännu en ritning som blev på riktigt: Kvarnmotor. Semesterkassan växer. Livet växer. |
| 1:42 | röst | ali | Ali här. Ännu en ritning som blev på riktigt: Kvarnmotor. Semesterkassan växer. Livet växer. · REAKTION |
| 1:44 | tanke | du | Motorn sitter där veven satt – nu mal kvarnen själv. |
| 1:44 | väntar | du | Motorn sitter där veven satt – nu mal kvarnen själv. |
| 1:44 | händelse | monterat | sak=kvarnmotor |
| 1:44 | paket |  | tanke |
| 1:44 | tanke | du | Motorn sitter där veven satt. Mina armar tackar. |
| 1:44 | struken | du | Motorn sitter där veven satt – nu mal kvarnen själv. |
| 1:44 | väntar | du | Motorn sitter där veven satt. Mina armar tackar. |
| 1:44 | monterat | du | byggsats:kvarnmotor |
| 1:44 | händelse | monterat | sak=kvarnmotor |
| 1:44 | händelse | malKlart | id=monteraMotor del=Dag 2 – Tippen bredvid nasta=n1-stada-klart-garden |
| 1:44 | bekräftelse | du | plats |
| 1:44 | struken | du | Motorn sitter där veven satt. Mina armar tackar. |
| 1:44 | väntar | du | Gården är full av skräp. Jag börjar vid skjulet. |
| 1:44 | målruta |  | Städa gården |
| 1:44 | MÅL |  | Städa gården |
| 1:48 | kvittens-bock |  | ✓ Printa kvarnmotorn till kvarnen |
| 1:51 | klar | ali | Ali här. Ännu en ritning som blev på riktigt: Kvarnmotor. Semesterkassan växer. Livet växer. |
| 1:51 | sak | du | Gården är full av skräp. Jag börjar vid skjulet. |
| 1:51 | pil |  | Städa gården |
| 1:51 | notis | tanke | 💭 Gården är full av skräp. Jag börjar vid skjulet. |
| 1:51 | röst | du | Gården är full av skräp. Jag börjar vid skjulet. · MÅL |
| 1:51 | nick |  | nick:23 |
| 1:57 | klar | du | Gården är full av skräp. Jag börjar vid skjulet. |
| 2:19 | väntar | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått generator. Vi tar en låt på det. Den här är till dig, Gunnar. |
| 2:19 | radio | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått generator. Vi tar en låt på det. Den här är till dig, Gunnar. |
| 2:19 | skratt | du | Radio-Kjelle |
| 2:20 | sak | foto | Egen säng |
| 2:20 | foto | du | Egen säng |
| 2:22 | klar | foto | Egen säng |
| 2:24 | sak | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått generator. Vi tar en låt på det. Den här är till dig, Gunnar. |
| 2:24 | notis |  | 📻 Radio Tippen: Radio Tippen, Kjelle här. Skjulet vid tippen har fått generator. Vi tar en låt på det. Den här är till dig, Gunnar. |
| 2:24 | röst | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått generator. Vi tar en låt på det. Den här är till dig, Gunnar. · REAKTION |
| 2:28 | upplåst | skrivare | rullstall |
| 2:28 | brott | UPPLÅST | rullstall (skrivare 182 av 60) |
| 2:28 | händelse | upplast | id=rullstall flask=skrivare |
| 2:28 | paket |  | tanke → sms |
| 2:28 | tanke | du | Kvarnen står och väntar för att hållaren är full. Om den rymde fler rullar kunde den mala hela tiden. |
| 2:28 | väntar | du | Kvarnen står och väntar för att hållaren är full. Om den rymde fler rullar kunde den mala hela tiden. |
| 2:28 | väntar | ali | Ali här. Rullställ. Fyra rullar i stället för en. Har ett på hyllan. |
| 2:28 | kvitto-visas | du | Kvarnen står och väntar för att hållaren är full. Om den rymde fler rullar kunde den mala hela tiden. |
| 2:28 | sak | du | Kvarnen står och väntar för att hållaren är full. Om den rymde fler rullar kunde den mala hela tiden. |
| 2:28 | notis | tanke | 💭 Kvarnen står och väntar för att hållaren är full. Om den rymde fler rullar kunde den mala hela tiden. |
| 2:29 | händelse | malKlart | id=n1-stada-klart-garden del=Dag 2 – Tippen bredvid nasta=kopSack |
| 2:29 | bekräftelse | du | plats |
| 2:29 | väntar | du | Gården är STÄDAD, av mig, frivilligt. Mamma skulle aldrig tro det. |
| 2:29 | skratt | du | falsk tuta |
| 2:29 | scenInfo | rolf | inkorg 73: sopbilen kommer till skjulet |
| 2:29 | väntar | du | En stor bil saktar in vid skjulet. Jag går dit. |
| 2:30 | MÅL |  | Gå till bilen vid skjulet |
| 2:31 | kvitto-visas | du | Gården är STÄDAD, av mig, frivilligt. Mamma skulle aldrig tro det. |
| 2:31 | lapp | 📔 Dagbok | Gården är STÄDAD, av mig, frivilligt. Mamma skulle aldrig tro det. |
| 2:31 | dagbokrad | du | Gården är STÄDAD, av mig, frivilligt. Mamma skulle aldrig tro det. |
| 2:31 | notis | dagbok | Gården är STÄDAD, av mig, frivilligt. Mamma skulle aldrig tro det. |
| 2:31 | brott | FÖR KORT | "📻 Radio Tippen: Radio Tippen, Kjelle här. Skjulet" stod 6.7 s av 9.9 s |
| 2:32 | målruta |  | Gå till bilen vid skjulet |
| 2:34 | klar | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått generator. Vi tar en låt på det. Den här är till dig, Gunnar. |
| 2:37 | sak | du | En stor bil saktar in vid skjulet. Jag går dit. |
| 2:37 | pil |  | Gå till bilen vid skjulet |
| 2:37 | notis | tanke | 💭 En stor bil saktar in vid skjulet. Jag går dit. |
| 2:37 | röst | du | En stor bil saktar in vid skjulet. Jag går dit. · MÅL |
| 2:41 | väntar | rolf | Tjena. Rolf. Ja kör sopbilen. Tippen där borta ä min. Har vart min sen -87. |
| 2:43 | klar | du | En stor bil saktar in vid skjulet. Jag går dit. |
| 2:43 | sak | rolf | Tjena. Rolf. Ja kör sopbilen. Tippen där borta ä min. Har vart min sen -87. |
| 2:43 | händelse | dialog | id=rolfHej |
| 2:43 | röst | rolf | Tjena. Rolf. Ja kör sopbilen. Tippen där borta ä min. Har vart min sen -87. · REAKTION |
| 2:44 | bubbla |  | Tjena. Rolf. Ja kör sopbilen. Tippen där borta ä min. Har vart min sen -87. |
| 2:58 | klar | rolf | Tjena. Rolf. Ja kör sopbilen. Tippen där borta ä min. Har vart min sen -87. |
| 2:58 | väntar | rolf | Du har städat hela gården. Ingen gör så nuförtin. |
| 2:58 | sak | rolf | Du har städat hela gården. Ingen gör så nuförtin. |
| 2:58 | händelse | dialog | id=rolfGarden |
| 2:58 | röst | rolf | Du har städat hela gården. Ingen gör så nuförtin. · REAKTION |
| 2:59 | bubbla |  | Du har städat hela gården. Ingen gör så nuförtin. |
| 3:03 | klar | rolf | Du har städat hela gården. Ingen gör så nuförtin. |
| 3:03 | väntar | rolf | Öj… ä dä du som printar grejer? Dom där nyckelringarna? |
| 3:03 | sak | rolf | Öj… ä dä du som printar grejer? Dom där nyckelringarna? |
| 3:03 | bubbla |  | Öj… ä dä du som printar grejer? Dom där nyckelringarna? |
| 3:03 | händelse | dialog | id=rolfPrintar |
| 3:03 | röst | rolf | Öj… ä dä du som printar grejer? Dom där nyckelringarna? · REAKTION |
| 3:10 | klar | rolf | Öj… ä dä du som printar grejer? Dom där nyckelringarna? |
| 3:10 | väntar | du | Ja. Av skräp. |
| 3:10 | sak | du | Ja. Av skräp. |
| 3:10 | notis | tanke | Ja. Av skräp. |
| 3:10 | händelse | dialog | id=duAvSkrap |
| 3:10 | röst | du | Ja. Av skräp. · REAKTION |
| 3:15 | klar | du | Ja. Av skräp. |
| 3:15 | väntar | rolf | Hm. Ja kanske har nåt åt dej. Kolla postlådan vid grinden. |
| 3:15 | sak | rolf | Hm. Ja kanske har nåt åt dej. Kolla postlådan vid grinden. |
| 3:15 | händelse | dialog | id=rolfPostlada |
| 3:15 | röst | rolf | Hm. Ja kanske har nåt åt dej. Kolla postlådan vid grinden. · REAKTION |
| 3:16 | bubbla |  | Hm. Ja kanske har nåt åt dej. Kolla postlådan vid grinden. |
| 3:23 | klar | rolf | Hm. Ja kanske har nåt åt dej. Kolla postlådan vid grinden. |
| 3:25 | struken | ali | Ali här. Såg skylten. Stavningen är rätt. Det är mer än många. |
| 3:28 | upplåst | skrivare | trim_skrivare |
| 3:28 | brott | UPPLÅST | trim_skrivare (skrivare 60 av 60) |
| 3:28 | händelse | upplast | id=trim_skrivare flask=skrivare |
| 3:28 | paket |  | sms |
| 3:28 | väntar | ali | Ali här. Skrivartrim. Jag skruvade på min egen skrivare i natt. Den går fortare nu. Nästan för fort. |
| 3:28 | sopsack | rolf | Rolf kastade ut säckarna vid skjulet |
| 3:30 | väntar | värld:TUUT! Tjena! | TUUT! Tjena! |
| 3:31 | sak | du | Tänk att jag ska få sova i min egen säng. |
| 3:31 | notis | tanke | 💭 Tänk att jag ska få sova i min egen säng. |
| 3:31 | röst | du | Tänk att jag ska få sova i min egen säng. · STORY |
| 3:35 | klar | du | Tänk att jag ska få sova i min egen säng. |
| 3:38 | brott | TRÄNGSEL 2 | "Ali här. Skrivartrim. Jag skruvade på min egen skr" 2.1 s efter förra meddelandet, 68.7 s efter en klar uppgift |
| 3:38 | sak | ali | Ali här. Skrivartrim. Jag skruvade på min egen skrivare i natt. Den går fortare nu. Nästan för fort. |
| 3:38 | sms | ali | Ali här. Skrivartrim. Jag skruvade på min egen skrivare i natt. Den går fortare nu. Nästan för fort. |
| 3:38 | sms-bubbla | ali | Ali här. Skrivartrim. Jag skruvade på min egen skrivare i natt. Den går fortare nu. Nästan för fort. |
| 3:38 | röst | ali | Ali här. Skrivartrim. Jag skruvade på min egen skrivare i natt. Den går fortare nu. Nästan för fort. · STORY |
| 3:41 | paket |  | tanke |
| 3:41 | tanke | du | Rolf slängde av något åt mig. |
| 3:41 | väntar | du | Rolf slängde av något åt mig. |
| 3:45 | struken | du | Rolf slängde av något åt mig. |
| 3:45 | väntar | du | Tornet är fullt. Skrivaren får jobba ikapp. |
| 3:45 | väntar | info:fel | Tornet är fullt. Skrivaren får jobba ikapp. |
| 3:45 | kvitto-visas | info:fel | Tornet är fullt. Skrivaren får jobba ikapp. |
| 3:45 | toast | fel | Tornet är fullt. Skrivaren får jobba ikapp. |
| 3:50 | klar | ali | Ali här. Skrivartrim. Jag skruvade på min egen skrivare i natt. Den går fortare nu. Nästan för fort. |
| 3:50 | sak | du | Tornet är fullt. Skrivaren får jobba ikapp. |
| 3:50 | röst | du | Tornet är fullt. Skrivaren får jobba ikapp. · REAKTION |
| 3:54 | klar | du | Tornet är fullt. Skrivaren får jobba ikapp. |
| 3:56 | struken | värld:TUUT! Tjena! | TUUT! Tjena! |
| 4:06 | tanke | du | En sopsäck över axeln! Nu bär jag 10 skräp. |
| 4:06 | väntar | du | En sopsäck över axeln! Nu bär jag 10 skräp. |
| 4:06 | tog på | du | byggsats:korg |
| 4:06 | händelse | monterat | sak=korg |
| 4:06 | sak | du | En sopsäck över axeln! Nu bär jag 10 skräp. |
| 4:06 | notis | tanke | 💭 En sopsäck över axeln! Nu bär jag 10 skräp. |
| 4:06 | röst | du | En sopsäck över axeln! Nu bär jag 10 skräp. · REAKTION |
| 4:06 | händelse | malKlart | id=kopSack del=Dag 2 – Tippen bredvid nasta=rolf0-brev |
| 4:06 | bekräftelse | du | plats |
| 4:06 | skratt | du | falsk tuta |
| 4:06 | väntar | du | Det ligger ett brev i postlådan vid grinden. Det läser jag. |
| 4:06 | MÅL |  | Möt sopbilen vid grinden |
| 4:09 | målruta |  | Möt sopbilen vid grinden |
| 4:10 | klar | du | En sopsäck över axeln! Nu bär jag 10 skräp. |
| 4:10 | kvittens-bock |  | ✓ Ta sopsäckarna |
| 4:12 | sak | du | Det ligger ett brev i postlådan vid grinden. Det läser jag. |
| 4:12 | pil |  | Möt sopbilen vid grinden |
| 4:12 | notis | tanke | 💭 Det ligger ett brev i postlådan vid grinden. Det läser jag. |
| 4:12 | röst | du | Det ligger ett brev i postlådan vid grinden. Det läser jag. · MÅL |
| 4:15 | paket |  | tanke → ge |
| 4:15 | tanke | du | Flaggan är uppe. Rolf har lämnat något. |
| 4:15 | väntar | du | Flaggan är uppe. Rolf har lämnat något. |
| 4:15 | väntar |  | (läget ändras) |
| 4:18 | klar | du | Det ligger ett brev i postlådan vid grinden. Det läser jag. |
| 4:26 | sak | ali | Ali här. Rullställ. Fyra rullar i stället för en. Har ett på hyllan. |
| 4:26 | sms | ali | Ali här. Rullställ. Fyra rullar i stället för en. Har ett på hyllan. |
| 4:26 | sms-bubbla | ali | Ali här. Rullställ. Fyra rullar i stället för en. Har ett på hyllan. |
| 4:26 | röst | ali | Ali här. Rullställ. Fyra rullar i stället för en. Har ett på hyllan. · STORY |
| 4:28 | skratt | du | falsk tuta |
| 4:34 | klar | ali | Ali här. Rullställ. Fyra rullar i stället för en. Har ett på hyllan. |
| 4:38 | väntar | rolf | Såg att du printar grejer. Kan du göra en sån hä? Kall öl ä viktigt. Ja ha ritat själv. Ungefär så hä. Ja ä int dum. /Rolf​ |
| 4:38 | paket |  | ge |
| 4:38 | väntar |  | (läget ändras) |
| 4:38 | sak | rolf | Såg att du printar grejer. Kan du göra en sån hä? Kall öl ä viktigt. Ja ha ritat själv. Ungefär så hä. Ja ä int dum. /Rolf​ |
| 4:38 | lapp | Brev från Rolf | Såg att du printar grejer. Kan du göra en sån hä? Kall öl ä viktigt. Ja ha ritat själv. Ungefär så hä. Ja ä int dum. /Rolf​ |
| 4:38 | röst | rolf | Såg att du printar grejer. Kan du göra en sån hä? Kall öl ä viktigt. Ja ha ritat själv. Ungefär så hä. Ja ä int dum. /Rolf​ · STORY |
| 4:38 | händelse | malKlart | id=rolf0-brev del=Dag 2 – Tippen bredvid nasta=rolf0-printa |
| 4:38 | bekräftelse | du | plats |
| 4:38 | väntar | du | Rolf vill ha en ölhållare. Den printar jag. |
| 4:39 | MÅL |  | Printa ölhållare med kylklamp |
| 4:39 | kvitto-visas |  | (läget ändras) |
| 4:39 | sak |  | (läget ändras) |
| 4:39 | tanke | du | Rolf har nyckeln… Jag undrar vad som finns där inne. |
| 4:39 | väntar | du | Rolf har nyckeln… Jag undrar vad som finns där inne. |
| 4:39 | kvitto-visas | du | Rolf har nyckeln… Jag undrar vad som finns där inne. |
| 4:39 | sak | du | Rolf har nyckeln… Jag undrar vad som finns där inne. |
| 4:39 | notis | tanke | 💭 Rolf har nyckeln… Jag undrar vad som finns där inne. |
| 4:41 | målruta |  | Printa ölhållare med kylklamp |
| 4:43 | händelse | printStart | sak=olhallare |
| 4:43 | händelse | malKlart | id=rolf0-printa del=Dag 2 – Tippen bredvid nasta=rolf0-ge |
| 4:43 | bekräftelse | du | plats |
| 4:43 | väntar | du | Ölhållaren är klar. Den lägger jag i Rolfs postlåda. |
| 4:43 | MÅL |  | Ge Rolf ölhållare med kylklamp |
| 4:46 | målruta |  | Ge Rolf ölhållare med kylklamp |
| 4:46 | händelse | printKlar | sak=olhallare n=1 |
| 4:47 | händelse | tagitUrPrint | sak=olhallare n=1 |
| 4:47 | kvittens-bock |  | ✓ Printa ölhållare med kylklamp |
| 4:49 | väntar | mamma | Har du frusit än? |
| 4:53 | klar | rolf | Såg att du printar grejer. Kan du göra en sån hä? Kall öl ä viktigt. Ja ha ritat själv. Ungefär så hä. Ja ä int dum. /Rolf​ |
| 4:53 | händelse | brevLast | id=rolf:0 |
| 4:53 | struken | du | Rolf vill ha en ölhållare. Den printar jag. |
| 4:53 | sak | du | Ölhållaren är klar. Den lägger jag i Rolfs postlåda. |
| 4:53 | pil |  | Ge Rolf ölhållare med kylklamp |
| 4:53 | notis | tanke | 💭 Ölhållaren är klar. Den lägger jag i Rolfs postlåda. |
| 4:53 | röst | du | Ölhållaren är klar. Den lägger jag i Rolfs postlåda. · MÅL |
| 4:59 | klar | du | Ölhållaren är klar. Den lägger jag i Rolfs postlåda. |
| 5:07 | sak | du | Flaggan är uppe. Rolf har lämnat något. |
| 5:07 | notis | tanke | 💭 Flaggan är uppe. Rolf har lämnat något. |
| 5:07 | röst | du | Flaggan är uppe. Rolf har lämnat något. · STORY |
| 5:12 | klar | du | Flaggan är uppe. Rolf har lämnat något. |
| 5:15 | händelse | lagtIPostlada | sak=olhallare rolf=0 jobb=false |
| 5:15 | paket |  | tanke |
| 5:15 | tanke | du | Flaggan uppe. Nu får Rolf hämta den. |
| 5:15 | väntar | du | Flaggan uppe. Nu får Rolf hämta den. |
| 5:15 | sak | du | Flaggan uppe. Nu får Rolf hämta den. |
| 5:15 | notis | tanke | 💭 Flaggan uppe. Nu får Rolf hämta den. |
| 5:15 | röst | du | Flaggan uppe. Nu får Rolf hämta den. · REAKTION |
| 5:15 | händelse | malKlart | id=rolf0-ge del=Dag 2 – Tippen bredvid nasta=vindsnurra |
| 5:15 | bekräftelse | du | plats |
| 5:15 | väntar | du | En vindsnurra på skjulets tak. Då blir det ström när det blåser. |
| 5:15 | MÅL |  | Spara till vindsnurran · 90 / 133 kr |
| 5:17 | målruta |  | Spara till vindsnurran · 90 / 133 kr |
| 5:19 | kvittens-bock |  | ✓ Ge Rolf ölhållare med kylklamp |
| 5:19 | klar | du | Flaggan uppe. Nu får Rolf hämta den. |
| 5:21 | sak | du | En vindsnurra på skjulets tak. Då blir det ström när det blåser. |
| 5:21 | pil |  | Spara till vindsnurran · 90 / 133 kr |
| 5:21 | notis | tanke | 💭 En vindsnurra på skjulets tak. Då blir det ström när det blåser. |
| 5:21 | röst | du | En vindsnurra på skjulets tak. Då blir det ström när det blåser. · MÅL |
| 5:28 | klar | du | En vindsnurra på skjulets tak. Då blir det ström när det blåser. |
| 5:31 | struken | mamma | Har du frusit än? |
| 5:36 | sak |  | (läget ändras) |
| 5:36 | brev | rolf | rolf:0 |
| 5:36 | klar |  | (läget ändras) |
| 5:42 | händelse | printStart | sak=kruka |
| 5:42 | toast | fel | Ingen ström – trampa cykeln |
| 5:46 | händelse | printKlar | sak=kruka n=3 |
| 5:47 | händelse | tagitUrPrint | sak=kruka n=1 |
| 5:51 | hjälp | kontroll | R: Vrid innan du ställer ner |
| 5:57 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 5:57 | röst | ali | Rolf gav mig en kanna. Som min farmors. Jag ritade en sak åt honom. Säg inget, han gråter lätt. · STORY |
| 5:57 | butiksbubbla | ali | Rolf gav mig en kanna. Som min farmors. Jag ritade en sak åt honom. Säg inget, han gråter lätt. |
| 5:59 | händelse | salt | sak=kruka n=1 |
| 5:59 | aliSalt | ali | 105 |
| 5:59 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 6:00 | upplåst | trampa | vindsnurra |
| 6:00 | brott | UPPLÅST | vindsnurra (trampa 22 av 6, sparat ihop) |
| 6:00 | händelse | upplast | id=vindsnurra flask=trampa |
| 6:00 | paket |  | sms |
| 6:00 | väntar | ali | Ali här. Vindsnurra till cykeln. Vinden trampar åt dig. Den är lat, men den jobbar gratis. |
| 6:09 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 6:11 | struken | info:guld | 3D-modell köpt – printa vindsnurra till skjultaket |
| 6:11 | händelse | kopt | sak=vindsnurra |
| 6:11 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 6:11 | struken | ali | Ali här. Vindsnurra till cykeln. Vinden trampar åt dig. Den är lat, men den jobbar gratis. |
| 6:18 | paket |  | tanke |
| 6:18 | tanke | du | Jaha, Rolf har hämtat en ölhållare med kylklamp. |
| 6:18 | väntar | du | Jaha, Rolf har hämtat en ölhållare med kylklamp. |
| 6:18 | sak | du | Jaha, Rolf har hämtat en ölhållare med kylklamp. |
| 6:18 | notis | tanke | 💭 Jaha, Rolf har hämtat en ölhållare med kylklamp. |
| 6:18 | röst | du | Jaha, Rolf har hämtat en ölhållare med kylklamp. · REAKTION |
| 6:23 | händelse | printStart | sak=byggsats:vindsnurra |
| 6:26 | klar | du | Jaha, Rolf har hämtat en ölhållare med kylklamp. |
| 6:28 | händelse | printKlar | sak=byggsats:vindsnurra n=1 |
| 6:28 | tanke | du | Vindsnurran ska upp på skjulets tak. |
| 6:28 | väntar | du | Vindsnurran ska upp på skjulets tak. |
| 6:28 | händelse | tagitUrPrint | sak=byggsats:vindsnurra n=1 |
| 6:28 | sak | du | Vindsnurran ska upp på skjulets tak. |
| 6:28 | notis | tanke | 💭 Vindsnurran ska upp på skjulets tak. |
| 6:28 | röst | du | Vindsnurran ska upp på skjulets tak. · REAKTION |
| 6:34 | klar | du | Vindsnurran ska upp på skjulets tak. |
| 6:44 | händelse | placerat | sak=vindsnurra |
| 6:44 | tanke | du | Vindsnurran sitter på taket – den trampar cykeln åt mig när det blåser |
| 6:44 | väntar | du | Vindsnurran sitter på taket – den trampar cykeln åt mig när det blåser |
| 6:44 | monterat | du | byggsats:vindsnurra |
| 6:44 | händelse | monterat | sak=vindsnurra |
| 6:44 | sak | du | Vindsnurran sitter på taket – den trampar cykeln åt mig när det blåser |
| 6:44 | notis | tanke | 💭 Vindsnurran sitter på taket – den trampar cykeln åt mig när det blåser |
| 6:44 | röst | du | Vindsnurran sitter på taket – den trampar cykeln åt mig när det blåser · REAKTION |
| 6:44 | händelse | malKlart | id=vindsnurra del=Dag 2 – Tippen bredvid nasta=n1-bygg-dorr-skjulet |
| 6:44 | bekräftelse | du | plats |
| 6:44 | kvittens | du | Den snurrar! Långsamt. Men den snurrar. |
| 6:44 | väntar | du | Den snurrar! Långsamt. Men den snurrar. |
| 6:44 | väntar | du | Det drar från dörrhålet. En dörr kan jag printa. |
| 6:44 | MÅL |  | Bygg en dörr till skjulet |
| 6:46 | målruta |  | Bygg en dörr till skjulet |
| 6:50 | klar | du | Vindsnurran sitter på taket – den trampar cykeln åt mig när det blåser |
| 6:50 | sak | du | Den snurrar! Långsamt. Men den snurrar. |
| 6:50 | röst | du | Den snurrar! Långsamt. Men den snurrar. · STORY |
| 6:54 | klar | du | Den snurrar! Långsamt. Men den snurrar. |
| 6:54 | sak | du | Det drar från dörrhålet. En dörr kan jag printa. |
| 6:54 | pil |  | Bygg en dörr till skjulet |
| 6:54 | notis | tanke | 💭 Det drar från dörrhålet. En dörr kan jag printa. |
| 6:54 | röst | du | Det drar från dörrhålet. En dörr kan jag printa. · MÅL |
| 6:55 | nick |  | nick:29 |
| 6:57 | klar | du | Det drar från dörrhålet. En dörr kan jag printa. |
| 7:11 | händelse | printStart | sak=kruka |
| 7:14 | händelse | printKlar | sak=kruka n=4 |
| 7:15 | händelse | tagitUrPrint | sak=kruka n=1 |
| 7:17 | hjälp | kontroll | R: Vrid innan du ställer ner |
| 7:24 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 7:26 | händelse | salt | sak=kruka n=1 |
| 7:26 | aliSalt | ali | 105 |
| 7:26 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 7:27 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 7:29 | struken | info:guld | 3D-modell köpt – printa dörr |
| 7:29 | händelse | kopt | sak=dorr |
| 7:29 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 7:41 | händelse | printStart | sak=byggsats:dorr |
| 7:45 | toast | bra | Del 1 av 2 klar |
| 7:45 | väntar | notis:Storebrors skrivare: Del 1 av 2 klar | Storebrors skrivare: Del 1 av 2 klar |
| 7:45 | sak | notis:Storebrors skrivare: Del 1 av 2 klar | Storebrors skrivare: Del 1 av 2 klar |
| 7:45 | notis | bra | Storebrors skrivare: Del 1 av 2 klar |
| 7:47 | klar | notis:Storebrors skrivare: Del 1 av 2 klar | Storebrors skrivare: Del 1 av 2 klar |
| 7:48 | händelse | printKlar | sak=byggsats:dorr n=1 |
| 8:14 | skratt | du | falsk tuta |
| 8:28 | händelse | tagitUrPrint | sak=byggsats:dorr n=1 |
| 8:28 | paket |  | sms |
| 8:28 | väntar | ali | Ali här. Jag har inte sovit. Inte på grund av AI:n. På grund av dig. Du bygger saker av sopor. Jag har en hel butik och bygger ingenting. Det ska ändras. Kanske. Troligen. |
| 8:37 | tanke | du | Dörr på plats! Trivsel +8 |
| 8:37 | väntar | du | Dörr på plats! Trivsel +8 |
| 8:37 | sak | du | Dörr på plats! Trivsel +8 |
| 8:37 | notis | tanke | 💭 Dörr på plats! Trivsel +8 |
| 8:37 | röst | du | Dörr på plats! Trivsel +8 · REAKTION |
| 8:37 | händelse | malKlart | id=n1-bygg-dorr-skjulet del=Dag 2 – Tippen bredvid nasta=sov2 |
| 8:37 | paket |  | lapp |
| 8:37 | väntar | du | Nu vet Ali att jag bor HÄR. Taket läcker. I morgon. |
| 8:37 | paket |  | sms |
| 8:37 | väntar | bror | Mamma ringde mig fyra gånger förresten. Snyggt jobbat 😂 |
| 8:37 | skratt | bror | Mamma ringde mig fyra gånger förresten. |
| 8:37 | bekräftelse | du | plats |
| 8:37 | väntar | du | Sov när du vill. |
| 8:37 | MÅL |  | Sov när du vill |
| 8:39 | klar | du | Dörr på plats! Trivsel +8 |
| 8:39 | sak | du | Nu vet Ali att jag bor HÄR. Taket läcker. I morgon. |
| 8:39 | kvallsrad | du | Nu vet Ali att jag bor HÄR. Taket läcker. I morgon. |
| 8:39 | målruta |  | Sov när du vill |
| 8:40 | klar | du | Nu vet Ali att jag bor HÄR. Taket läcker. I morgon. |
| 8:40 | sak | du | Sov när du vill. |
| 8:40 | pil |  | Sov när du vill |
| 8:40 | röst | du | Sov när du vill. · MÅL |
| 8:41 | kvittens-bock |  | ✓ Bygg en dörr till skjulet |
| 8:42 | klar | du | Sov när du vill. |
| 8:44 | väntar | notis:🌇 Klockan är 21. Ali slår igen luckan.  | 🌇 Klockan är 21. Ali slår igen luckan. Dagens jobb är klart – gå in i skjulet och sov i sängen. |
| 8:50 | autosparning | du | natt 4 december |
| 8:52 | nattkort | du | 🌙 20 dagar kvar. God natt. zzz… Nu vet Ali att jag bor HÄR. Taket läcker. I morgon. DAGENS PRINTAR Blomkruka × 3 Ölhållare med kylklamp × 1 Totalt 4 printar 💰 |

<details><summary>Botens handlingar dag 2</summary>

- 0:00 — dag 2 börjar — (35 kr)
- 0:11 popup: "FORTSÄTT" (35 kr)
- 0:16 nybörjaren ser ingen pil – tittar runt (35 kr)
- 0:20 tjänar pengar till väntar på flaskhalsen för kvarnmotor: 35/75 kr → printar blomkruka (105 kr) (35 kr)
- 0:27 gå till skrivaren (19 m) (35 kr)
- 0:29 printar Blomkruka (35 kr)
- 0:32 tar ut 1 st ur skrivaren (35 kr)
- 0:41 gå till Ali (26 m) (35 kr)
- 0:41 öppnar Alis butik – sälja (35 kr)
- 0:43 säljer hos Ali: +105 kr (140 kr)
- 0:56 öppnar Alis butik – köpa kvarnmotor (140 kr)
- 0:58 köper kvarnmotor för 50 kr (90 kr)
- 1:20 gå till fel håll en bit (4 m) (90 kr)
- 1:31 gå till skrivaren (25 m) (90 kr)
- 1:32 printar Kvarnmotor (90 kr)
- 1:33 gå till cykeln (1 m) (90 kr)
- 1:36 tar ut 1 st ur skrivaren (90 kr)
- 1:44 gå till skruva fast kvarnmotorn (3 m) (90 kr)
- 2:13 plockar 2 skräp på gården (bär max 6) (90 kr)
- 2:19 gå till kvarnen (16 m) (90 kr)
- 2:42 plockar 6 skräp på gården (bär max 6) (90 kr)
- 2:55 gå till kvarnen (35 m) (90 kr)
- 3:13 nybörjaren ser ingen pil – tittar runt (90 kr)
- 3:33 plockar 3 skräp på gården (bär max 6) (90 kr)
- 3:45 gå till kvarnen (34 m) (90 kr)
- 4:05 gå till Rolfs sopsäck (24 m) (90 kr)
- 4:06 tar på korg (90 kr)
- 4:07 vet inte vad jag ska göra: "Möt sopbilen vid grinden" (90 kr)
- 4:38 gå till Rolfs postlåda (28 m) (90 kr)
- 4:42 gå till skrivaren (7 m) (90 kr)
- 4:43 printar Ölhållare med kylklamp (90 kr)
- 4:48 tar ut 1 st ur skrivaren (90 kr)
- 5:07 nybörjaren ser ingen pil – tittar runt (90 kr)
- 5:12 valj olhallare: true, vald olhallare, post {"l":null,"tr":null,"tm":[]}, nummer false (90 kr)
- 5:15 gå till Rolfs postlåda (6 m) (90 kr)
- 5:32 nybörjaren ser ingen pil – tittar runt (90 kr)
- 5:37 tjänar pengar till väntar på flaskhalsen för vindsnurra: 90/130 kr → printar blomkruka (105 kr) (90 kr)
- 5:40 gå till skrivaren (6 m) (90 kr)
- 5:42 printar Blomkruka (90 kr)
- 5:43 gå till cykeln (1 m) (90 kr)
- 5:47 tar ut 1 st ur skrivaren (90 kr)
- 5:57 gå till Ali (27 m) (90 kr)
- 5:57 öppnar Alis butik – sälja (90 kr)
- 5:59 säljer hos Ali: +105 kr (195 kr)
- 6:09 öppnar Alis butik – köpa vindsnurra till skjultaket (195 kr)
- 6:12 köper vindsnurra för 133 kr (62 kr)
- 6:22 gå till skrivaren (25 m) (62 kr)
- 6:23 printar Vindsnurra till skjultaket (62 kr)
- 6:27 gå till cykeln (1 m) (62 kr)
- 6:29 tar ut 1 st ur skrivaren (62 kr)
- 6:44 gå till sätt vindsnurran på taket (20 m) (62 kr)
- 7:03 tjänar pengar till dörr: 62/120 kr → printar blomkruka (105 kr) (62 kr)
- 7:10 gå till skrivaren (19 m) (62 kr)
- 7:11 printar Blomkruka (62 kr)
- 7:15 tar ut 1 st ur skrivaren (62 kr)
- 7:24 gå till Ali (26 m) (62 kr)
- 7:24 öppnar Alis butik – sälja (62 kr)
- 7:26 säljer hos Ali: +105 kr (167 kr)
- 7:27 öppnar Alis butik – köpa dörr (167 kr)
- 7:30 köper dorr för 120 kr (47 kr)
- 7:40 gå till skrivaren (25 m) (47 kr)
- 7:41 printar Dörr (2 delar) (47 kr)
- 8:15 plockar 10 skräp på gården (bär max 10) (47 kr)
- 8:27 gå till kvarnen (35 m) (47 kr)
- 8:28 gå till skrivaren (1 m) (47 kr)
- 8:29 tar ut 1 st ur skrivaren (47 kr)
- 8:37 gå till skjulet (21 m) (47 kr)
- 8:50 gå till sängen (1 m) (47 kr)

</details>

## Dag 3

| Tid | Källa | Vem | Text |
|---|---|---|---|
| 8:52 | vara | ali | ingen |
| 8:52 | händelse | malKlart | id=sov2 del=Dag 2 – Tippen bredvid nasta=rolf1-brev |
| 8:52 | bekräftelse | du | plats |
| 8:52 | vara | ali | kruka |
| 8:52 | MÅL |  | Möt sopbilen vid grinden |
| 8:54 | autosparning | du | morgon 5 december |
| 0:01 | händelse | dagenBorjar | dag=3 |
| 0:01 | meddelande | du | 19 dagar till jul. Utan Rolf kommer jag aldrig in på tippen. |
| 0:01 | dagbokkort | du | Rolfs brev. · 19 dagar till jul. Utan Rolf kommer jag aldrig in på tippen. |
| 0:01 | röst | du | 19 dagar till jul. Rolfs brev. Utan Rolf kommer jag aldrig in på tippen. · STORY |
| 0:07 | väntar | notis:morgon | Ali vill ha idag: Blomkruka · +50 % |
| 0:07 | händelse | morgonkortStangt | dag=3 |
| 0:07 | väntar | ali | Ali här. Jag har inte sovit. Inte på grund av AI:n. På grund av dig. Du bygger saker av sopor. Jag har en hel butik och bygger ingenting. Det ska ändras. Kanske. Troligen. |
| 0:07 | väntar | bror | Mamma ringde mig fyra gånger förresten. Snyggt jobbat 😂 |
| 0:07 | skratt | bror | Mamma ringde mig fyra gånger förresten. |
| 0:07 | väntar | du | Ett nytt brev i Rolfs postlåda. Det läser jag. |
| 0:07 | målruta |  | Möt sopbilen vid grinden |
| 0:12 | sak | du | Ett nytt brev i Rolfs postlåda. Det läser jag. |
| 0:12 | pil |  | Möt sopbilen vid grinden |
| 0:12 | notis | tanke | 💭 Ett nytt brev i Rolfs postlåda. Det läser jag. |
| 0:12 | röst | du | Ett nytt brev i Rolfs postlåda. Det läser jag. · MÅL |
| 0:15 | skratt | du | falsk tuta |
| 0:15 | paket |  | ge |
| 0:15 | väntar |  | (läget ändras) |
| 0:18 | klar | du | Ett nytt brev i Rolfs postlåda. Det läser jag. |
| 0:18 | sak | notis:morgon | Ali vill ha idag: Blomkruka · +50 % |
| 0:18 | notis |  | Blomkruka · +50 % |
| 0:22 | klar | notis:morgon | Ali vill ha idag: Blomkruka · +50 % |
| 0:24 | struken | notis:🌇 Klockan är 21. Ali slår igen luckan.  | 🌇 Klockan är 21. Ali slår igen luckan. Dagens jobb är klart – gå in i skjulet och sov i sängen. |
| 0:24 | struken | ali | Ali här. Jag har inte sovit. Inte på grund av AI:n. På grund av dig. Du bygger saker av sopor. Jag har en hel butik och bygger ingenting. Det ska ändras. Kanske. Troligen. |
| 0:24 | struken | bror | Mamma ringde mig fyra gånger förresten. Snyggt jobbat 😂 |
| 0:24 | skratt | bror | Mamma ringde mig fyra gånger förresten. |
| 0:30 | sak |  | (läget ändras) |
| 0:30 | brev | rolf | rolf:1 |
| 0:30 | klar |  | (läget ändras) |
| 0:37 | väntar | rolf | Den funkar! Hä. Ta så mycke skräp du vill. /Rolf​ |
| 0:41 | skratt | du | falsk tuta |
| 0:42 | sak | rolf | Den funkar! Hä. Ta så mycke skräp du vill. /Rolf​ |
| 0:42 | lapp | Brev från Rolf | Den funkar! Hä. Ta så mycke skräp du vill. /Rolf​ |
| 0:42 | röst | rolf | Den funkar! Hä. Ta så mycke skräp du vill. /Rolf​ · STORY |
| 0:42 | tanke | du | Nyckeln ska sitta i låset på grinden. |
| 0:42 | väntar | du | Nyckeln ska sitta i låset på grinden. |
| 0:43 | kvitto-visas | du | Nyckeln ska sitta i låset på grinden. |
| 0:43 | sak | du | Nyckeln ska sitta i låset på grinden. |
| 0:43 | notis | tanke | 💭 Nyckeln ska sitta i låset på grinden. |
| 0:44 | monterat | du | byggsats:tippnyckel |
| 0:44 | händelse | monterat | sak=tippnyckel |
| 0:44 | scenInfo | du | Kameran sveper över tippen |
| 0:48 | klar | rolf | Den funkar! Hä. Ta så mycke skräp du vill. /Rolf​ |
| 0:48 | händelse | brevLast | id=rolftack:0 |
| 0:49 | tanke | du | …Det här räcker i hundra år. |
| 0:49 | väntar | du | …Det här räcker i hundra år. |
| 0:49 | väntar | värld:TUUT TUUT! | TUUT TUUT! |
| 0:49 | paket |  | ge |
| 0:49 | väntar |  | (läget ändras) |
| 0:50 | skratt | du | falsk tuta |
| 0:50 | väntar | rolf | ÖJ! Kajsa knuffa ner min flasköppnare i tippen. Kan du göra en ny, mä magnet? Ritade den på rasten. Ungefär så vill ja ha'n. /Rolf​ |
| 0:50 | paket |  | ge |
| 0:50 | väntar |  | (läget ändras) |
| 0:50 | sak | rolf | ÖJ! Kajsa knuffa ner min flasköppnare i tippen. Kan du göra en ny, mä magnet? Ritade den på rasten. Ungefär så vill ja ha'n. /Rolf​ |
| 0:50 | lapp | Brev från Rolf | ÖJ! Kajsa knuffa ner min flasköppnare i tippen. Kan du göra en ny, mä magnet? Ritade den på rasten. Ungefär så vill ja ha'n. /Rolf​ |
| 0:50 | röst | rolf | ÖJ! Kajsa knuffa ner min flasköppnare i tippen. Kan du göra en ny, mä magnet? Ritade den på rasten. Ungefär så vill ja ha'n. /Rolf​ · STORY |
| 0:50 | händelse | malKlart | id=rolf1-brev del=Dag 3 – En skrivare till och taket nasta=n2-hamta-skrap |
| 0:50 | bekräftelse | du | plats |
| 0:50 | väntar | du | Nyckeln till tippen. Där ligger skräpet i högar. |
| 0:50 | MÅL |  | Hämta 5 skräp på soptippen |
| 0:51 | kvitto-visas |  | (läget ändras) |
| 0:51 | sak |  | (läget ändras) |
| 0:53 | målruta |  | Hämta 5 skräp på soptippen |
| 0:55 | händelse | malKlart | id=n2-hamta-skrap del=Dag 3 – En skrivare till och taket nasta=rolf1-printa |
| 0:55 | bekräftelse | du | plats |
| 0:55 | väntar | du | Rolf vill ha en flasköppnare. Den printar jag. |
| 0:55 | MÅL |  | Printa flasköppnare med magnet |
| 0:58 | målruta |  | Printa flasköppnare med magnet |
| 0:59 | kvittens-bock |  | ✓ Hämta 5 skräp på soptippen |
| 1:00 | tanke | du | En hel kanot. Kvarnen skulle äta upp sig själv. |
| 1:00 | väntar | du | En hel kanot. Kvarnen skulle äta upp sig själv. |
| 1:00 | tanke | du | Fastpressad. Den sitter som i betong. |
| 1:00 | struken | du | En hel kanot. Kvarnen skulle äta upp sig själv. |
| 1:00 | väntar | du | Fastpressad. Den sitter som i betong. |
| 1:00 | tanke | du | Tratten är stor som en kaffekopp. Tunnan är stor som jag. |
| 1:00 | struken | du | Fastpressad. Den sitter som i betong. |
| 1:00 | väntar | du | Tratten är stor som en kaffekopp. Tunnan är stor som jag. |
| 1:01 | kvitto-visas | du | Tratten är stor som en kaffekopp. Tunnan är stor som jag. |
| 1:01 | sak | du | Tratten är stor som en kaffekopp. Tunnan är stor som jag. |
| 1:01 | notis | tanke | 💭 Tratten är stor som en kaffekopp. Tunnan är stor som jag. |
| 1:04 | klar | rolf | ÖJ! Kajsa knuffa ner min flasköppnare i tippen. Kan du göra en ny, mä magnet? Ritade den på rasten. Ungefär så vill ja ha'n. /Rolf​ |
| 1:04 | händelse | brevLast | id=rolf:1 |
| 1:04 | struken | du | Nyckeln till tippen. Där ligger skräpet i högar. |
| 1:07 | sak | du | Rolf vill ha en flasköppnare. Den printar jag. |
| 1:07 | pil |  | Printa flasköppnare med magnet |
| 1:07 | notis | tanke | 💭 Rolf vill ha en flasköppnare. Den printar jag. |
| 1:07 | röst | du | Rolf vill ha en flasköppnare. Den printar jag. · MÅL |
| 1:07 | nick |  | nick:33 |
| 1:10 | klar | du | Rolf vill ha en flasköppnare. Den printar jag. |
| 1:12 | struken | värld:TUUT TUUT! | TUUT TUUT! |
| 1:17 | händelse | printStart | sak=flaskoppnare |
| 1:17 | händelse | malKlart | id=rolf1-printa del=Dag 3 – En skrivare till och taket nasta=rolf1-ge |
| 1:17 | bekräftelse | du | plats |
| 1:17 | väntar | du | Flasköppnaren är klar. Den lägger jag i Rolfs postlåda. |
| 1:17 | MÅL |  | Ge Rolf flasköppnare med magnet |
| 1:18 | sak | du | Flasköppnaren är klar. Den lägger jag i Rolfs postlåda. |
| 1:18 | målruta |  | Ge Rolf flasköppnare med magnet |
| 1:18 | pil |  | Ge Rolf flasköppnare med magnet |
| 1:18 | notis | tanke | 💭 Flasköppnaren är klar. Den lägger jag i Rolfs postlåda. |
| 1:18 | röst | du | Flasköppnaren är klar. Den lägger jag i Rolfs postlåda. · MÅL |
| 1:21 | händelse | printKlar | sak=flaskoppnare n=1 |
| 1:21 | kvittens-bock |  | ✓ Printa flasköppnare med magnet |
| 1:21 | händelse | tagitUrPrint | sak=flaskoppnare n=1 |
| 1:23 | klar | du | Flasköppnaren är klar. Den lägger jag i Rolfs postlåda. |
| 1:40 | händelse | lagtIPostlada | sak=flaskoppnare rolf=1 jobb=false |
| 1:40 | händelse | malKlart | id=rolf1-ge del=Dag 3 – En skrivare till och taket nasta=kopBatteri |
| 1:40 | bekräftelse | du | plats |
| 1:40 | väntar | du | Ali har ett gammalt bilbatteri. Då sparar jag strömmen. |
| 1:40 | MÅL |  | Köp Alis gamla bilbatteri |
| 1:40 | upplåst | strom | cykelbatteri |
| 1:40 | brott | UPPLÅST | cykelbatteri (strom 15 av 15, sparat ihop) |
| 1:40 | händelse | upplast | id=cykelbatteri flask=strom |
| 1:40 | paket |  | sms |
| 1:40 | väntar | ali | Ali här. Bilbatteriet ur min gamla Volvo står i lagret. Det sparar mer ström än powerbanken. |
| 1:40 | sak | du | Ali har ett gammalt bilbatteri. Då sparar jag strömmen. |
| 1:40 | målruta |  | Köp Alis gamla bilbatteri |
| 1:40 | pil |  | Köp Alis gamla bilbatteri |
| 1:40 | notis | tanke | 💭 Ali har ett gammalt bilbatteri. Då sparar jag strömmen. |
| 1:40 | röst | du | Ali har ett gammalt bilbatteri. Då sparar jag strömmen. · MÅL |
| 1:41 | nick |  | nick:35 |
| 1:44 | kvittens-bock |  | ✓ Ge Rolf flasköppnare med magnet |
| 1:47 | klar | du | Ali har ett gammalt bilbatteri. Då sparar jag strömmen. |
| 1:48 | tanke | du | Hård plast. Lilla kvarnen skulle explodera. Eller jag. |
| 1:48 | väntar | du | Hård plast. Lilla kvarnen skulle explodera. Eller jag. |
| 1:48 | väntar | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått en DÖRR. Och vindsnurra till skjultaket. Mer säger jag inte. Gunnar vet. |
| 1:48 | radio | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått en DÖRR. Och vindsnurra till skjultaket. Mer säger jag inte. Gunnar vet. |
| 1:48 | skratt | du | Radio-Kjelle |
| 1:49 | brott | TRÄNGSEL 2 | "Ali här. Bilbatteriet ur min gamla Volvo står i la" 2.0 s efter förra meddelandet, 8.6 s efter en klar uppgift |
| 1:49 | sak | ali | Ali här. Bilbatteriet ur min gamla Volvo står i lagret. Det sparar mer ström än powerbanken. |
| 1:49 | sms | ali | Ali här. Bilbatteriet ur min gamla Volvo står i lagret. Det sparar mer ström än powerbanken. |
| 1:49 | sms-bubbla | ali | Ali här. Bilbatteriet ur min gamla Volvo står i lagret. Det sparar mer ström än powerbanken. |
| 1:49 | röst | ali | Ali här. Bilbatteriet ur min gamla Volvo står i lagret. Det sparar mer ström än powerbanken. · STORY |
| 1:59 | klar | ali | Ali här. Bilbatteriet ur min gamla Volvo står i lagret. Det sparar mer ström än powerbanken. |
| 2:01 | sak | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått en DÖRR. Och vindsnurra till skjultaket. Mer säger jag inte. Gunnar vet. |
| 2:01 | notis |  | 📻 Radio Tippen: Radio Tippen, Kjelle här. Skjulet vid tippen har fått en DÖRR. Och vindsnurra till skjultaket. Mer säger jag inte. Gunnar vet. |
| 2:01 | röst | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått en DÖRR. Och vindsnurra till skjultaket. Mer säger jag inte. Gunnar vet. · REAKTION |
| 2:11 | klar | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått en DÖRR. Och vindsnurra till skjultaket. Mer säger jag inte. Gunnar vet. |
| 2:12 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 2:12 | röst | ali | Pappa stod bakom den här disken i trettio år. Jag har stått här i tjugofem. Varje morgon när jag låser upp hälsar jag på honom. Tyst. · STORY |
| 2:12 | butiksbubbla | ali | Pappa stod bakom den här disken i trettio år. Jag har stått här i tjugofem. Varje morgon när jag låser upp hälsar jag på honom. Tyst. |
| 2:13 | toast | guld | 🔋 Bilbatteriet ska kopplas in på cykeln. |
| 2:13 | händelse | kopt | sak=cykelbatteri |
| 2:13 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 2:13 | butiksbubbla | ali | Batteriet ur min gamla Volvo. Bilen dog 2016. Batteriet vägrade. |
| 2:15 | väntar | ali | Batteriet ur min gamla Volvo. Bilen dog 2016. Batteriet vägrade. |
| 2:20 | väntar | mamma | Har du sovit nåt? Du har väl tandborste? Och äter du? Svara inte, jag vet att du är arg. ❤️ /Mamma |
| 2:25 | sak | ali | Batteriet ur min gamla Volvo. Bilen dog 2016. Batteriet vägrade. |
| 2:25 | röst | ali | Batteriet ur min gamla Volvo. Bilen dog 2016. Batteriet vägrade. · STORY |
| 2:33 | klar | ali | Batteriet ur min gamla Volvo. Bilen dog 2016. Batteriet vägrade. |
| 2:35 | struken | du | Hård plast. Lilla kvarnen skulle explodera. Eller jag. |
| 2:36 | tanke | du | Bilbatteriet är inkopplat – skrivaren printar klart även när du slutar trampa |
| 2:36 | väntar | du | Bilbatteriet är inkopplat – skrivaren printar klart även när du slutar trampa |
| 2:36 | monterat | du | byggsats:cykelbatteri |
| 2:36 | händelse | monterat | sak=cykelbatteri |
| 2:36 | sak | du | Bilbatteriet är inkopplat – skrivaren printar klart även när du slutar trampa |
| 2:36 | notis | tanke | 💭 Bilbatteriet är inkopplat – skrivaren printar klart även när du slutar trampa |
| 2:36 | röst | du | Bilbatteriet är inkopplat – skrivaren printar klart även när du slutar trampa · REAKTION |
| 2:36 | händelse | malKlart | id=kopBatteri del=Dag 3 – En skrivare till och taket nasta=ryggkorg |
| 2:36 | bekräftelse | du | plats |
| 2:36 | kvittens | du | Nu printar den klart även när jag vilar benen. |
| 2:36 | väntar | du | Nu printar den klart även när jag vilar benen. |
| 2:36 | väntar | du | Jag springer för mycket. Med en ryggkorg bär jag sexton saker. |
| 2:36 | MÅL |  | Spara till ryggkorgen · 77 / 120 kr |
| 2:36 | upplåst | bara | ryggkorg |
| 2:36 | brott | UPPLÅST | ryggkorg (bara 3 av 3) |
| 2:36 | händelse | upplast | id=ryggkorg flask=bara |
| 2:36 | paket |  | sms |
| 2:36 | väntar | ali | Ali här. En ryggkorg. AI:n ritade den efter en bild på min mormor. Den rymmer sexton. |
| 2:36 | skratt | du | falsk tuta |
| 2:38 | målruta |  | Spara till ryggkorgen · 77 / 120 kr |
| 2:38 | pil |  | Spara till ryggkorgen · 77 / 120 kr |
| 2:42 | klar | du | Bilbatteriet är inkopplat – skrivaren printar klart även när du slutar trampa |
| 2:42 | sak | du | Nu printar den klart även när jag vilar benen. |
| 2:42 | röst | du | Nu printar den klart även när jag vilar benen. · STORY |
| 2:45 | klar | du | Nu printar den klart även när jag vilar benen. |
| 2:47 | sak | du | Jag springer för mycket. Med en ryggkorg bär jag sexton saker. |
| 2:47 | notis | tanke | 💭 Jag springer för mycket. Med en ryggkorg bär jag sexton saker. |
| 2:47 | röst | du | Jag springer för mycket. Med en ryggkorg bär jag sexton saker. · MÅL |
| 2:50 | klar | du | Jag springer för mycket. Med en ryggkorg bär jag sexton saker. |
| 2:53 | paket |  | tanke |
| 2:53 | tanke | du | Jaha, Rolf har hämtat en flasköppnare med magnet. |
| 2:53 | väntar | du | Jaha, Rolf har hämtat en flasköppnare med magnet. |
| 2:55 | brott | TRÄNGSEL 2 | "Ali här. En ryggkorg. AI:n ritade den efter en bil" 2.1 s efter förra meddelandet, 19.2 s efter en klar uppgift |
| 2:55 | sak | ali | Ali här. En ryggkorg. AI:n ritade den efter en bild på min mormor. Den rymmer sexton. |
| 2:55 | sms | ali | Ali här. En ryggkorg. AI:n ritade den efter en bild på min mormor. Den rymmer sexton. |
| 2:55 | sms-bubbla | ali | Ali här. En ryggkorg. AI:n ritade den efter en bild på min mormor. Den rymmer sexton. |
| 2:55 | röst | ali | Ali här. En ryggkorg. AI:n ritade den efter en bild på min mormor. Den rymmer sexton. · STORY |
| 2:58 | händelse | printStart | sak=kruka |
| 3:04 | klar | ali | Ali här. En ryggkorg. AI:n ritade den efter en bild på min mormor. Den rymmer sexton. |
| 3:04 | händelse | printKlar | sak=kruka n=5 |
| 3:04 | händelse | tagitUrPrint | sak=kruka n=1 |
| 3:08 | hjälp | kontroll | R: Vrid innan du ställer ner |
| 3:12 | sak | du | …Det här räcker i hundra år. |
| 3:12 | notis | tanke | 💭 …Det här räcker i hundra år. |
| 3:12 | röst | du | …Det här räcker i hundra år. · STORY |
| 3:14 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 3:15 | klar | du | …Det här räcker i hundra år. |
| 3:15 | händelse | salt | sak=kruka n=1 |
| 3:15 | aliSalt | ali | 105 |
| 3:15 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 3:16 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 3:18 | struken | info:guld | 3D-modell köpt – printa ryggkorg |
| 3:18 | händelse | kopt | sak=ryggkorg |
| 3:18 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 3:20 | struken | du | Jaha, Rolf har hämtat en flasköppnare med magnet. |
| 3:24 | sak |  | (läget ändras) |
| 3:24 | brev | rolf | rolf:1 |
| 3:24 | klar |  | (läget ändras) |
| 3:31 | händelse | printStart | sak=byggsats:ryggkorg |
| 3:37 | toast | bra | Del 1 av 2 klar |
| 3:42 | väntar | bud | (tips) |
| 3:42 | sak | bud | (tips) |
| 3:43 | händelse | printKlar | sak=byggsats:ryggkorg n=1 |
| 3:43 | tanke | du | Ryggkorg ska jag ha på mig. |
| 3:43 | väntar | du | Ryggkorg ska jag ha på mig. |
| 3:43 | händelse | tagitUrPrint | sak=byggsats:ryggkorg n=1 |
| 3:43 | paket |  | sms |
| 3:43 | väntar | ali | Ali här. Du printade Ryggkorg från min ritning. Och det FUNKAR? Jag har bara sett sånt på YouTube. |
| 3:43 | händelse | malKlart | id=ryggkorg del=Dag 3 – En skrivare till och taket nasta=ryggkorgPa |
| 3:43 | bekräftelse | du | plats |
| 3:43 | struken | du | Ryggkorg ska jag ha på mig. |
| 3:43 | väntar | du | Ryggkorgen är klar. På med den. |
| 3:43 | MÅL |  | Ta på ryggkorgen |
| 3:44 | klar | bud | (tips) |
| 3:44 | sak | du | Ryggkorgen är klar. På med den. |
| 3:44 | målruta |  | Ta på ryggkorgen |
| 3:44 | pil |  | Ta på ryggkorgen |
| 3:44 | notis | tanke | 💭 Ryggkorgen är klar. På med den. |
| 3:44 | röst | du | Ryggkorgen är klar. På med den. · MÅL |
| 3:47 | kvittens-bock |  | ✓ Printa ryggkorgen |
| 3:47 | klar | du | Ryggkorgen är klar. På med den. |
| 3:48 | hjälp | kontroll | Klick: Klicka för att ta på dig den |
| 3:49 | sak | ali | Ali här. Du printade Ryggkorg från min ritning. Och det FUNKAR? Jag har bara sett sånt på YouTube. |
| 3:49 | sms | ali | Ali här. Du printade Ryggkorg från min ritning. Och det FUNKAR? Jag har bara sett sånt på YouTube. |
| 3:49 | sms-bubbla | ali | Ali här. Du printade Ryggkorg från min ritning. Och det FUNKAR? Jag har bara sett sånt på YouTube. |
| 3:49 | röst | ali | Ali här. Du printade Ryggkorg från min ritning. Och det FUNKAR? Jag har bara sett sånt på YouTube. · REAKTION |
| 4:01 | klar | ali | Ali här. Du printade Ryggkorg från min ritning. Och det FUNKAR? Jag har bara sett sånt på YouTube. |
| 4:03 | meddelande | mamma | Har du borstat tänderna idag? Ljug inte. Jag hör om du ljuger. Även på sms. |
| 4:04 | röst | mamma | Har du borstat tänderna idag? Ljug inte. Jag hör om du ljuger. Även på sms. · STORY |
| 4:11 | paket |  | sms |
| 4:11 | väntar | mamma | Bra. Jag tror dig. Nästan. |
| 4:19 | händelse | brevLast | id=m_tandborste |
| 4:22 | tog på | du | byggsats:ryggkorg |
| 4:22 | händelse | monterat | sak=ryggkorg |
| 4:22 | händelse | malKlart | id=ryggkorgPa del=Dag 3 – En skrivare till och taket nasta=n2-bygg-arbetsbord |
| 4:22 | bekräftelse | du | plats |
| 4:22 | kvittens | du | Nu bär jag sexton skräp. |
| 4:22 | väntar | du | Nu bär jag sexton skräp. |
| 4:22 | väntar | du | Ett arbetsbord bredvid skrivaren. Skrivare M ska stå på det. |
| 4:22 | MÅL |  | Bygg ett arbetsbord |
| 4:22 | sak | du | Nu bär jag sexton skräp. |
| 4:22 | röst | du | Nu bär jag sexton skräp. · STORY |
| 4:22 | målruta |  | Bygg ett arbetsbord |
| 4:24 | händelse | printStart | sak=kruka |
| 4:25 | klar | du | Nu bär jag sexton skräp. |
| 4:25 | sak | du | Ett arbetsbord bredvid skrivaren. Skrivare M ska stå på det. |
| 4:25 | pil |  | Bygg ett arbetsbord |
| 4:25 | notis | tanke | 💭 Ett arbetsbord bredvid skrivaren. Skrivare M ska stå på det. |
| 4:25 | röst | du | Ett arbetsbord bredvid skrivaren. Skrivare M ska stå på det. · MÅL |
| 4:29 | händelse | printKlar | sak=kruka n=6 |
| 4:29 | händelse | tagitUrPrint | sak=kruka n=1 |
| 4:32 | klar | du | Ett arbetsbord bredvid skrivaren. Skrivare M ska stå på det. |
| 4:39 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 4:41 | händelse | salt | sak=kruka n=1 |
| 4:41 | aliSalt | ali | 105 |
| 4:41 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 4:42 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 4:43 | struken | info:guld | 3D-modell köpt – printa arbetsbord |
| 4:43 | händelse | kopt | sak=bord |
| 4:43 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 4:56 | händelse | printStart | sak=byggsats:bord |
| 5:03 | toast | bra | Del 1 av 3 klar |
| 5:10 | toast | bra | Del 2 av 3 klar |
| 5:10 | struken | mamma | Har du sovit nåt? Du har väl tandborste? Och äter du? Svara inte, jag vet att du är arg. ❤️ /Mamma |
| 5:16 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 5:16 | väntar | notis:Storebrors skrivare: Tornet är tomt – ma | Storebrors skrivare: Tornet är tomt – mal mer så fortsätter den |
| 5:16 | tanke | du | En hel äng bakom staketet. Någon vill verkligen inte ha besök. |
| 5:16 | väntar | du | En hel äng bakom staketet. Någon vill verkligen inte ha besök. |
| 5:26 | skratt | du | falsk tuta |
| 5:36 | struken | notis:Storebrors skrivare: Tornet är tomt – ma | Storebrors skrivare: Tornet är tomt – mal mer så fortsätter den |
| 5:36 | struken | du | En hel äng bakom staketet. Någon vill verkligen inte ha besök. |
| 5:39 | händelse | printKlar | sak=byggsats:bord n=1 |
| 5:42 | sak | mamma | Bra. Jag tror dig. Nästan. |
| 5:42 | sms | mamma | Bra. Jag tror dig. Nästan. |
| 5:42 | sms-bubbla | mamma | Bra. Jag tror dig. Nästan. |
| 5:42 | röst | mamma | Bra. Jag tror dig. Nästan. · STORY |
| 5:45 | klar | mamma | Bra. Jag tror dig. Nästan. |
| 5:49 | händelse | tagitUrPrint | sak=byggsats:bord n=1 |
| 5:53 | händelse | placerat | sak=bord |
| 5:53 | händelse | malKlart | id=n2-bygg-arbetsbord del=Dag 3 – En skrivare till och taket nasta=n2-bygg-skrivare-m |
| 5:53 | bekräftelse | du | plats |
| 5:53 | väntar | du | Skrivare M på bordet. Två skrivare, dubbelt så mycket. |
| 5:53 | målruta |  | Spara till Skrivare M · 47 / 500 kr |
| 5:53 | MÅL |  | Spara till Skrivare M · 47 / 500 kr |
| 5:53 | upplåst | skrivare | skrivare2 |
| 5:53 | brott | UPPLÅST | skrivare2 (skrivare 519 av 60) |
| 5:53 | händelse | upplast | id=skrivare2 flask=skrivare |
| 5:53 | paket |  | sms |
| 5:53 | väntar | ali | Ali här. Skrivare M har kommit. Två och en halv gånger snabbare. Snabbare än jag. Jag har inte varit snabb sedan 1998. |
| 5:53 | sak | du | Skrivare M på bordet. Två skrivare, dubbelt så mycket. |
| 5:53 | pil |  | Spara till Skrivare M · 47 / 500 kr |
| 5:53 | notis | tanke | 💭 Skrivare M på bordet. Två skrivare, dubbelt så mycket. |
| 5:53 | röst | du | Skrivare M på bordet. Två skrivare, dubbelt så mycket. · MÅL |
| 5:53 | nick |  | nick:39 |
| 5:57 | kvittens-bock |  | ✓ Bygg ett arbetsbord |
| 5:58 | väntar | bud | (tips) |
| 5:58 | klar | du | Skrivare M på bordet. Två skrivare, dubbelt så mycket. |
| 5:59 | sak | bud | (tips) |
| 6:00 | klar | bud | (tips) |
| 6:02 | meddelande | mamma | Vem är den där Ali? Är han snäll? Betalar han dig ordentligt? |
| 6:03 | röst | mamma | Vem är den där Ali? Är han snäll? Betalar han dig ordentligt? · STORY |
| 6:11 | paket |  | sms |
| 6:11 | väntar | mamma | Typ? Jag ringer honom. Vad heter butiken? Jag hittar den. |
| 6:18 | händelse | brevLast | id=m_ali |
| 6:31 | händelse | printStart | sak=kruka |
| 6:36 | händelse | printKlar | sak=kruka n=7 |
| 6:36 | händelse | tagitUrPrint | sak=kruka n=1 |
| 6:39 | händelse | printStart | sak=kruka |
| 6:44 | paket |  | tanke |
| 6:44 | tanke | du | Den blev… spagetti. Ali kallar det modern konst. |
| 6:44 | väntar | du | Den blev… spagetti. Ali kallar det modern konst. |
| 6:44 | skratt | du | plastspagetti |
| 6:44 | händelse | printKlar | sak=kruka n=8 |
| 6:44 | händelse | tagitUrPrint | sak=spagetti n=1 |
| 6:44 | hjälp | kontroll | E: Ryggsäcken och kistan |
| 6:50 | väntar | rolf | Morgonbulle på kontoret me polarna. Bengt har ny keps. Vi pratade om den i en timme. Den e grön. /R |
| 6:54 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 6:54 | sak | ali | Ali här. Skrivare M har kommit. Två och en halv gånger snabbare. Snabbare än jag. Jag har inte varit snabb sedan 1998. |
| 6:54 | sms | ali | Ali här. Skrivare M har kommit. Två och en halv gånger snabbare. Snabbare än jag. Jag har inte varit snabb sedan 1998. |
| 6:54 | sms-bubbla | ali | Ali här. Skrivare M har kommit. Två och en halv gånger snabbare. Snabbare än jag. Jag har inte varit snabb sedan 1998. |
| 6:54 | röst | ali | Ali här. Skrivare M har kommit. Två och en halv gånger snabbare. Snabbare än jag. Jag har inte varit snabb sedan 1998. · STORY |
| 6:55 | händelse | salt | sak=kruka n=1 |
| 6:55 | aliSalt | ali | 105 |
| 6:55 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 6:56 | händelse | salt | sak=spagetti n=1 |
| 6:56 | skratt | du | Ali köper konst |
| 6:56 | aliSalt | ali | 3 |
| 6:56 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 7:08 | klar | ali | Ali här. Skrivare M har kommit. Två och en halv gånger snabbare. Snabbare än jag. Jag har inte varit snabb sedan 1998. |
| 7:08 | händelse | printStart | sak=kruka |
| 7:10 | struken | du | Den blev… spagetti. Ali kallar det modern konst. |
| 7:13 | händelse | printKlar | sak=kruka n=9 |
| 7:13 | händelse | tagitUrPrint | sak=kruka n=1 |
| 7:15 | händelse | printStart | sak=kruka |
| 7:21 | händelse | printKlar | sak=kruka n=10 |
| 7:21 | händelse | tagitUrPrint | sak=kruka n=1 |
| 7:23 | händelse | printStart | sak=kruka |
| 7:28 | paket |  | tanke |
| 7:28 | tanke | du | Jaha. En kalsong. Använd. |
| 7:28 | väntar | du | Jaha. En kalsong. Använd. |
| 7:28 | skratt | du | kvarnen spottar |
| 7:28 | händelse | printKlar | sak=kruka n=11 |
| 7:29 | händelse | tagitUrPrint | sak=kruka n=1 |
| 7:36 | väntar | ali | Du ser trött ut. Det är bra. Det betyder jobb. |
| 7:38 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 7:40 | händelse | salt | sak=kruka n=1 |
| 7:40 | aliSalt | ali | 105 |
| 7:40 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 7:40 | händelse | salt | sak=kruka n=1 |
| 7:40 | aliSalt | ali | 105 |
| 7:40 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 7:40 | röst | ali | Dina krukor säljer. Tanterna i kvarteret älskar dem. · STORY |
| 7:40 | butiksbubbla | ali | Dina krukor säljer. Tanterna i kvarteret älskar dem. |
| 7:40 | händelse | salt | sak=kruka n=1 |
| 7:40 | aliSalt | ali | 105 |
| 7:40 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 7:52 | händelse | printStart | sak=kruka |
| 7:56 | struken | du | Jaha. En kalsong. Använd. |
| 7:58 | händelse | printKlar | sak=kruka n=12 |
| 7:58 | händelse | tagitUrPrint | sak=kruka n=1 |
| 8:05 | struken | ali | Du ser trött ut. Det är bra. Det betyder jobb. |
| 8:06 | väntar | ali | Den köper jag. Ge hit. |
| 8:08 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 8:09 | händelse | salt | sak=kruka n=1 |
| 8:09 | aliSalt | ali | 105 |
| 8:09 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 8:11 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 8:12 | skratt | du | Alis dyr-pling |
| 8:12 | struken | info:guld | 3D-modell köpt – printa skrivare M |
| 8:12 | händelse | kopt | sak=skrivare2 |
| 8:12 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 8:25 | händelse | printStart | sak=byggsats:skrivare2 |
| 8:32 | struken | ali | Den köper jag. Ge hit. |
| 8:34 | toast | bra | Del 1 av 5 klar |
| 8:43 | toast | bra | Del 2 av 5 klar |
| 8:52 | toast | bra | Del 3 av 5 klar |
| 8:52 | sak | mamma | Typ? Jag ringer honom. Vad heter butiken? Jag hittar den. |
| 8:52 | sms | mamma | Typ? Jag ringer honom. Vad heter butiken? Jag hittar den. |
| 8:52 | sms-bubbla | mamma | Typ? Jag ringer honom. Vad heter butiken? Jag hittar den. |
| 8:52 | röst | mamma | Typ? Jag ringer honom. Vad heter butiken? Jag hittar den. · STORY |
| 8:54 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 8:58 | klar | mamma | Typ? Jag ringer honom. Vad heter butiken? Jag hittar den. |
| 9:10 | skratt | du | falsk tuta |
| 9:13 | väntar | du | Fullt i händerna. |
| 9:13 | väntar | info:fel | Fullt i händerna. |
| 9:13 | sak | info:fel | Fullt i händerna. |
| 9:13 | kvitto-visas | info:fel | Fullt i händerna. |
| 9:13 | toast | fel | Fullt i händerna. |
| 9:13 | toast | bra | Del 4 av 5 klar |
| 9:15 | klar | info:fel | Fullt i händerna. |
| 9:15 | sak | du | Fullt i händerna. |
| 9:15 | röst | du | Fullt i händerna. · REAKTION |
| 9:17 | klar | du | Fullt i händerna. |
| 9:23 | händelse | printKlar | sak=byggsats:skrivare2 n=1 |
| 9:24 | händelse | tagitUrPrint | sak=byggsats:skrivare2 n=1 |
| 9:28 | händelse | placerat | sak=skrivare2 |
| 9:28 | paket |  | tanke |
| 9:28 | tanke | du | Den här måste stå i linjen vid kvarnen, annars når inte slangen. |
| 9:28 | väntar | du | Den här måste stå i linjen vid kvarnen, annars når inte slangen. |
| 9:28 | händelse | malKlart | id=n2-bygg-skrivare-m del=Dag 3 – En skrivare till och taket nasta=n2-lagg-plattak-skjulet |
| 9:28 | bekräftelse | du | plats |
| 9:28 | lapp-kö | 📱 Storebror | VA?! Du har byggt en skrivare TILL?? Du har typ en printfarm nu. Okej. Det är faktiskt ganska ballt. 🔥 |
| 9:28 | väntar | bror | VA?! Du har byggt en skrivare TILL?? Du har typ en printfarm nu. Okej. Det är faktiskt ganska ballt. 🔥 |
| 9:28 | väntar | du | Det regnar in. Plåt på taket, så slipper jag sova i en pöl. |
| 9:28 | MÅL |  | Lägg plåttak på skjulet |
| 9:28 | målruta |  | Lägg plåttak på skjulet |
| 9:28 | sak | du | Det regnar in. Plåt på taket, så slipper jag sova i en pöl. |
| 9:28 | pil |  | Lägg plåttak på skjulet |
| 9:28 | notis | tanke | 💭 Det regnar in. Plåt på taket, så slipper jag sova i en pöl. |
| 9:28 | röst | du | Det regnar in. Plåt på taket, så slipper jag sova i en pöl. · MÅL |
| 9:32 | kvittens-bock |  | ✓ Bygg Skrivare M på bordet |
| 9:32 | väntar | värld:TUUT! Tjena! | TUUT! Tjena! |
| 9:35 | klar | du | Det regnar in. Plåt på taket, så slipper jag sova i en pöl. |
| 9:48 | händelse | printStart | sak=kruka |
| 9:48 | toast | bra | 🔗 Slangen kopplad |
| 9:50 | händelse | printStart | sak=kruka |
| 9:50 | händelse | printKlar | sak=kruka n=13 |
| 9:52 | struken | värld:TUUT! Tjena! | TUUT! Tjena! |
| 9:55 | händelse | printKlar | sak=kruka n=14 |
| 9:55 | händelse | tagitUrPrint | sak=kruka n=1 |
| 9:56 | händelse | tagitUrPrint | sak=kruka n=1 |
| 10:06 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 10:07 | händelse | salt | sak=kruka n=1 |
| 10:07 | aliSalt | ali | 105 |
| 10:07 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 10:08 | händelse | salt | sak=kruka n=1 |
| 10:08 | aliSalt | ali | 105 |
| 10:08 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 10:09 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 10:11 | struken | info:guld | 3D-modell köpt – printa plåttak |
| 10:11 | händelse | kopt | sak=tak |
| 10:11 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 10:12 | morgonkort | ⏸️ Pausad | ⏸️ Pausad · Klicka för att fortsätta. |
| 10:29 | sak | du | Den här måste stå i linjen vid kvarnen, annars når inte slangen. |
| 10:29 | notis | tanke | 💭 Den här måste stå i linjen vid kvarnen, annars når inte slangen. |
| 10:29 | röst | du | Den här måste stå i linjen vid kvarnen, annars når inte slangen. · STORY |
| 10:30 | händelse | printStart | sak=byggsats:tak |
| 10:34 | klar | du | Den här måste stå i linjen vid kvarnen, annars når inte slangen. |
| 10:34 | toast | bra | Del 1 av 3 klar |
| 10:38 | toast | bra | Del 2 av 3 klar |
| 10:40 | toast | fel | Ingen ström – trampa cykeln |
| 10:50 | händelse | printKlar | sak=byggsats:tak n=1 |
| 10:50 | händelse | tagitUrPrint | sak=byggsats:tak n=1 |
| 10:50 | sak | bror | VA?! Du har byggt en skrivare TILL?? Du har typ en printfarm nu. Okej. Det är faktiskt ganska ballt. 🔥 |
| 10:50 | sms | bror | VA?! Du har byggt en skrivare TILL?? Du har typ en printfarm nu. Okej. Det är faktiskt ganska ballt. 🔥 |
| 10:50 | sms-bubbla | bror | VA?! Du har byggt en skrivare TILL?? Du har typ en printfarm nu. Okej. Det är faktiskt ganska ballt. 🔥 |
| 10:50 | röst | bror | VA?! Du har byggt en skrivare TILL?? Du har typ en printfarm nu. Okej. Det är faktiskt ganska ballt. 🔥 · STORY |
| 10:57 | tanke | du | Plåttak på plats! Trivsel +12 |
| 10:57 | väntar | du | Plåttak på plats! Trivsel +12 |
| 10:57 | händelse | malKlart | id=n2-lagg-plattak-skjulet del=Dag 3 – En skrivare till och taket nasta=sov3 |
| 10:57 | paket |  | lapp |
| 10:57 | väntar | du | Nu vet Rolf att jag bor HÄR. Benen orkar inte trampa mer. |
| 10:57 | bekräftelse | du | plats |
| 10:57 | struken | du | Plåttak på plats! Trivsel +12 |
| 10:57 | MÅL |  | Sov när du vill |
| 10:59 | kvitto-visas | du | Nu vet Rolf att jag bor HÄR. Benen orkar inte trampa mer. |
| 10:59 | sak | du | Nu vet Rolf att jag bor HÄR. Benen orkar inte trampa mer. |
| 10:59 | kvallsrad | du | Nu vet Rolf att jag bor HÄR. Benen orkar inte trampa mer. |
| 10:59 | klar | bror | VA?! Du har byggt en skrivare TILL?? Du har typ en printfarm nu. Okej. Det är faktiskt ganska ballt. 🔥 |
| 10:59 | sak | du | (nytt mål i rutan) |
| 10:59 | målruta |  | Sov när du vill |
| 10:59 | pil |  | Sov när du vill |
| 10:59 | klar | du | (nytt mål i rutan) |
| 11:01 | kvittens-bock |  | ✓ Lägg plåttak på skjulet |
| 11:04 | väntar | notis:🌇 Klockan är 21. Ali slår igen luckan.  | 🌇 Klockan är 21. Ali slår igen luckan. Dagens jobb är klart – gå in i skjulet och sov i sängen. |
| 11:06 | lapp | Dagbok | Tre dagar. Om nitton dagar är det jul. |
| 11:06 | röst | du | Tre dagar. Om nitton dagar är det jul. · REAKTION |
| 11:11 | paket |  | replik |
| 11:11 | väntar | rolf | Hoppa in. Ja ska visa dej en grej. |
| 11:11 | sak | rolf | Hoppa in. Ja ska visa dej en grej. |
| 11:11 | notis |  | Rolf: ”Hoppa in. Ja ska visa dej en grej.” |
| 11:11 | röst | rolf | Hoppa in. Ja ska visa dej en grej. · STORY |
| 11:11 | väntar | foto | Tak över huvudet |
| 11:11 | paket |  | tanke |
| 11:11 | tanke | du | I natt somnar jag torr. Det börjar bli ett hem. |
| 11:11 | väntar | du | I natt somnar jag torr. Det börjar bli ett hem. |
| 11:11 | autosparning | du | natt 5 december |
| 11:14 | nattkort | du | 🌙 19 dagar kvar. God natt. zzz… Nu vet Rolf att jag bor HÄR. Benen orkar inte trampa mer. DAGENS PRINTAR Blomkruka × 10 Flasköppnare med magnet × 1 Totalt 11 p |

<details><summary>Botens handlingar dag 3</summary>

- 0:00 — dag 3 börjar — (47 kr)
- 0:07 popup: "FORTSÄTT" (47 kr)
- 0:37 gå till Rolfs postlåda (28 m) (47 kr)
- 0:42 panel: "Rolfs postlåda
Det här låg i l" (107 kr)
- 0:44 gå till sätt nyckeln i låset (3 m) (107 kr)
- 0:50 gå till Rolfs postlåda (1 m) (107 kr)
- 1:00 plockar 10 skräp på tippen (bär max 10) (107 kr)
- 1:04 gå till kvarnen (8 m) (107 kr)
- 1:15 gå till skrivaren (3 m) (107 kr)
- 1:17 printar Flasköppnare med magnet (107 kr)
- 1:22 tar ut 1 st ur skrivaren (107 kr)
- 1:33 nybörjaren ser ingen pil – tittar runt (107 kr)
- 1:37 valj flaskoppnare: true, vald flaskoppnare, post {"l":null,"tr":null,"tm":[]}, nummer false (107 kr)
- 1:40 gå till Rolfs postlåda (6 m) (107 kr)
- 2:12 gå till Ali (32 m) (107 kr)
- 2:12 öppnar Alis butik – bilbatteriet (107 kr)
- 2:14 köper cykelbatteri för 30 kr (77 kr)
- 2:36 gå till koppla in bilbatteriet vid cykeln (24 m) (77 kr)
- 2:55 tjänar pengar till ryggkorg: 77/120 kr → printar blomkruka (105 kr) (77 kr)
- 2:57 gå till skrivaren (2 m) (77 kr)
- 2:58 printar Blomkruka (77 kr)
- 3:04 tar ut 1 st ur skrivaren (77 kr)
- 3:14 gå till Ali (26 m) (77 kr)
- 3:14 öppnar Alis butik – sälja (77 kr)
- 3:15 säljer hos Ali: +105 kr (182 kr)
- 3:16 öppnar Alis butik – köpa ryggkorg (182 kr)
- 3:19 köper ryggkorg för 120 kr (62 kr)
- 3:29 gå till skrivaren (25 m) (62 kr)
- 3:31 printar Ryggkorg (2 delar) (62 kr)
- 3:43 tar ut 1 st ur skrivaren (62 kr)
- 4:01 nybörjaren ser ingen pil – tittar runt (62 kr)
- 4:11 popup: "Ja." (62 kr)
- 4:19 popup: "Läst" (62 kr)
- 4:22 tar på ryggkorg (62 kr)
- 4:22 tjänar pengar till arbetsbord: 62/120 kr → printar blomkruka (105 kr) (62 kr)
- 4:24 printar Blomkruka (62 kr)
- 4:30 tar ut 1 st ur skrivaren (62 kr)
- 4:39 gå till Ali (25 m) (62 kr)
- 4:39 öppnar Alis butik – sälja (62 kr)
- 4:41 säljer hos Ali: +105 kr (167 kr)
- 4:42 öppnar Alis butik – köpa arbetsbord (167 kr)
- 4:44 köper bord för 120 kr (47 kr)
- 4:54 gå till skrivaren (25 m) (47 kr)
- 4:56 printar Arbetsbord (3 delar) (47 kr)
- 5:37 gå till kvarnen (38 m) (47 kr)
- 5:44 plockar 2 skräp på tippen (bär max 16) (47 kr)
- 5:47 gå till kvarnen (10 m) (47 kr)
- 5:49 gå till skrivaren (3 m) (47 kr)
- 5:50 tar ut 1 st ur skrivaren (47 kr)
- 5:52 gå till platsen för arbetsbord (5 m) (47 kr)
- 5:53 ställer ut arbetsbord (47 kr)
- 6:11 popup: "Han är snäll. Typ." (47 kr)
- 6:18 popup: "Läst" (47 kr)
- 6:29 tjänar pengar till Skrivare M: 47/500 kr → printar blomkruka (105 kr) (47 kr)
- 6:29 gå till skrivaren (2 m) (47 kr)
- 6:31 printar Blomkruka (47 kr)
- 6:37 tar ut 1 st ur skrivaren (47 kr)
- 6:39 printar Blomkruka (47 kr)
- 6:45 tar ut 1 st ur skrivaren (47 kr)
- 6:54 gå till Ali (26 m) (47 kr)
- 6:54 öppnar Alis butik – sälja (47 kr)
- 6:56 säljer hos Ali: +108 kr (155 kr)
- 6:57 tjänar pengar till Skrivare M: 155/500 kr → printar blomkruka (105 kr) (155 kr)
- 7:06 gå till skrivaren (25 m) (155 kr)
- 7:08 printar Blomkruka (155 kr)
- 7:14 tar ut 1 st ur skrivaren (155 kr)
- 7:15 printar Blomkruka (155 kr)
- 7:21 tar ut 1 st ur skrivaren (155 kr)
- 7:23 printar Blomkruka (155 kr)
- 7:29 tar ut 1 st ur skrivaren (155 kr)
- 7:38 gå till Ali (25 m) (155 kr)
- 7:38 öppnar Alis butik – sälja (155 kr)
- 7:41 säljer hos Ali: +315 kr (470 kr)
- 7:42 tjänar pengar till Skrivare M: 470/500 kr → printar blomkruka (105 kr) (470 kr)
- 7:51 gå till skrivaren (25 m) (470 kr)
- 7:52 printar Blomkruka (470 kr)
- 7:59 tar ut 1 st ur skrivaren (470 kr)
- 8:08 gå till Ali (25 m) (470 kr)
- 8:08 öppnar Alis butik – sälja (470 kr)
- 8:10 säljer hos Ali: +105 kr (575 kr)
- 8:11 öppnar Alis butik – köpa skrivare m (575 kr)
- 8:13 köper skrivare2 för 500 kr (75 kr)
- 8:23 gå till skrivaren (25 m) (75 kr)
- 8:25 printar Skrivare M (5 delar) (75 kr)
- 9:05 gå till kvarnen (40 m) (75 kr)
- 9:13 plockar 2 skräp på tippen (bär max 16) (75 kr)
- 9:17 gå till kvarnen (9 m) (75 kr)
- 9:24 gå till skrivaren (3 m) (75 kr)
- 9:25 tar ut 1 st ur skrivaren (75 kr)
- 9:27 gå till platsen för skrivare m (5 m) (75 kr)
- 9:28 ställer ut skrivare m (75 kr)
- 9:46 tjänar pengar till plåttak: 75/250 kr → printar blomkruka (105 kr) (75 kr)
- 9:48 printar Blomkruka (75 kr)
- 9:48 gå till skrivaren (2 m) (75 kr)
- 9:50 printar Blomkruka (75 kr)
- 9:56 tar ut 1 st ur skrivaren (75 kr)
- 9:57 tar ut 1 st ur skrivaren (75 kr)
- 10:06 gå till Ali (26 m) (75 kr)
- 10:06 öppnar Alis butik – sälja (75 kr)
- 10:08 säljer hos Ali: +210 kr (285 kr)
- 10:09 öppnar Alis butik – köpa plåttak (285 kr)
- 10:11 köper tak för 250 kr (35 kr)
- 10:20 kort: "FORTSÄTTeller tryck Esc" (35 kr)
- 10:29 gå till skrivaren (24 m) (35 kr)
- 10:30 printar Plåttak (3 delar) (35 kr)
- 10:51 tar ut 1 st ur skrivaren (35 kr)
- 10:57 gå till skjulet (17 m) (35 kr)
- 11:11 panel: "Dagbok
Före och efter
3 decemb" (35 kr)
- 11:11 gå till sängen (1 m) (35 kr)

</details>

## Dag 4

| Tid | Källa | Vem | Text |
|---|---|---|---|
| 11:14 | vara | ali | ingen |
| 11:14 | händelse | malKlart | id=sov3 del=Dag 3 – En skrivare till och taket nasta=rolf2-brev |
| 11:14 | bekräftelse | du | plats |
| 11:14 | vara | ali | kruka |
| 11:14 | MÅL |  | Möt sopbilen vid grinden |
| 11:15 | autosparning | du | morgon 6 december |

<details><summary>Botens handlingar dag 4</summary>

- 0:00 — dag 4 börjar — (35 kr)

</details>
