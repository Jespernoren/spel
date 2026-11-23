# Nybörjarboten – körning 1

*A-081: samma händer som AX, men boten vet bara det som syns (målrutan, pilen, det som sägs). Går 3 m/s, läser 60 ms per tecken, följer pilen, tittar runt när målet är otydligt och går fel ibland.*

| Dag | Minuter | FÖRVIRRAD | FAST | TRÄNGSEL | HANN INTE LÄSA | DOLT | NY SAK UTAN FÖRKLARING | OKÄNT ORD |
|---|---|---|---|---|---|---|---|---|
| 1 | 12.4 | 1 | 0 | 0 | 0 | 0 | 1 | 0 |
| 2 | 8.8 | 1 | 0 | 0 | 0 | 0 | 0 | 0 |
| 3 | 11.9 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 4 | 9.5 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |

## Flaggor (3)

- **NY SAK UTAN FÖRKLARING** dag 1 0:18: byta: ingen text eller bild har förklarat det innan första gången
- **FÖRVIRRAD** dag 1 10:39: pilen pekar 27 m från där målet görs (okänt)
- **FÖRVIRRAD** dag 2 4:16: 34 s utan framsteg på "Gå till bilen vid skjulet"

## Friktionskurvan (sekunder per mål: nybörjaren mot AX)

| Dag | Mål | Nybörjaren | AX | × |
|---|---|---|---|---|
| 1 | Lasta av skrivaren | 0 | – | – |
| 1 | Lasta av skrivaren | 37 | – | – |
| 1 | Ställ upp skrivaren | 22 | – | – |
| 1 | Skrivaren behöver ström | 35 | – | – |
| 1 | Ställ cykel och generator | 27 | – | – |
| 1 | Välj vad skrivaren ska printa | 25 | – | – |
| 1 | Trampa cykeln | 5 | – | – |
| 1 | En nyckelring till | 48 | – | – |
| 1 | Visa nyckelringarna i affären mitt emot | 43 | – | – |
| 1 | Köp kvarnen | 25 | – | – |
| 1 | Ställ kvarnen | 29 | – | – |
| 1 | Gör egen tråd | 34 | – | – |
| 1 | Printa med egen tråd | 25 | – | – |
| 1 | Sälj hos Ali | 32 | – | – |
| 1 | Koppla in powerbanken | 28 | – | – |
| 1 | Köp skräpgripen | 33 | – | – |
| 1 | Printa skräpgripen | 52 | – | – |
| 1 | Spara till krukreceptet · 0 / 40 kr | 71 | – | – |
| 1 | Sälj blomkrukan | 31 | – | – |
| 1 | Köp sängen | 21 | – | – |
| 1 | Printa sängen | 98 | – | – |
| 2 | Spara till kvarnmotorn · 35 / 50 kr | -686 | – | – |
| 2 | Printa kvarnmotorn till kvarnen | 46 | – | – |
| 2 | Städa gården | 66 | – | – |
| 2 | Gå till bilen vid skjulet | 113 | – | – |
| 2 | Möt sopbilen vid grinden | 34 | – | – |
| 2 | Printa ölhållare med kylklamp | 5 | – | – |
| 2 | Ge Rolf ölhållare med kylklamp | 31 | – | – |
| 2 | Spara till vindsnurran · 90 / 133 kr | 87 | – | – |
| 2 | Bygg en dörr till skjulet | 76 | – | – |
| 3 | Möt sopbilen vid grinden | -471 | – | – |
| 3 | Hämta 5 skräp på soptippen | 4 | – | – |
| 3 | Printa flasköppnare med magnet | 29 | – | – |
| 3 | Ge Rolf flasköppnare med magnet | 23 | – | – |
| 3 | Köp Alis gamla bilbatteri | 55 | – | – |
| 3 | Spara till ryggkorgen · 77 / 120 kr | 71 | – | – |
| 3 | Ta på ryggkorgen | 23 | – | – |
| 3 | Bygg ett arbetsbord | 103 | – | – |
| 3 | Spara till Skrivare M · 47 / 500 kr | 224 | – | – |
| 3 | Lägg plåttak på skjulet | 109 | – | – |
| 4 | Möt sopbilen vid grinden | -654 | – | – |
| 4 | Printa grillspade | 7 | – | – |
| 4 | Ge Rolf grillspade | 32 | – | – |
| 4 | Töm en full kärra i kvarnen | 36 | – | – |
| 4 | Köp sophållaren | 66 | – | – |
| 4 | Printa en pall | 66 | – | – |
| 4 | Spara till vindsnurran · 57 / 133 kr | 138 | – | – |
| 4 | Isolera två väggar · 0/2 | 154 | – | – |

---

# Simulering kapitel 1 – körning 1

*Gjord 2026-11-23 03:50 med `verktyg/sim-kapitel1.mjs` + `verktyg/sim-bot.js` (punkt AX). Boten går 4,5 m/s, läser 15 tecken/s, trampar, vevar, plockar, printar, köper och säljer via spelets egna funktioner. Tiderna är speltid.*

## Sammanfattning

| Dag | Minuter | Väntan | Prints (totalt) | Kr vid sömn | Bär | Trivsel |
|---|---|---|---|---|---|---|
| 1 | 12.4 | 1 % | 10 | 35 | 6 | 16 |
| 2 | 8.8 | 0 % | 14 | 47 | 10 | 29 |
| 3 | 11.9 | 1 % | 24 | 32 | 16 | 78 |
| 4 | 9.5 | 0 % | 30 | 79 | 16 | 96 |

## Flaskhalskartan (EE)

| Dag | bara | mala | trampa | strom | skrivare | inkomst | Upplåst |
|---|---|---|---|---|---|---|---|
| 1 | 4 | 7 | 20 | 21 | 76 | 8 | kruka (inkomst, 8:44), grip (bara, 11:11) |
| 2 | 1 | 138 | 3 | 4 | 418 | 0 | kvarnmotor (mala, 0:43), rullstall (skrivare, 2:25), trim_skrivare (skrivare, 3:25), vindsnurra (trampa, 6:37) |
| 3 | 1 | 58 | 1 | 15 | 433 | 0 | cykelbatteri (strom, 1:56), ryggkorg (bara, 2:51), skrivare2 (skrivare, 6:08) |
| 4 | 0 | 44 | 18 | 53 | 403 | 0 | trim_skrivare2 (skrivare, 1:15), matarband (bara, 2:15), vindsnurra2 (strom, 4:48) |

TIDIG: 0 · FAST: 0 · upplåst av reserven (målet väntade 3 min): 0

**SKRATT:** 42 roliga ögonblick på 43 min (9.9 per 10 min, mål minst 5)

**Köp:**

- dag 1 4:25 – gammalkvarn (30 kr)
- dag 1 7:27 – grip (50 kr)
- dag 1 9:06 – kruka (40 kr)
- dag 1 10:22 – sang (60 kr)
- dag 2 0:56 – kvarnmotor (50 kr)
- dag 2 6:48 – vindsnurra (133 kr)
- dag 2 8:09 – dorr (120 kr)
- dag 3 2:30 – cykelbatteri (30 kr)
- dag 3 3:38 – ryggkorg (120 kr)
- dag 3 4:47 – bord (120 kr)
- dag 3 8:19 – skrivare2 (500 kr)
- dag 3 10:35 – tak (250 kr)
- dag 4 2:48 – matarband (120 kr)
- dag 4 4:03 – pall (80 kr)
- dag 4 5:53 – vindsnurra (133 kr)
- dag 4 8:32 – vaggar (130 kr)

## Storykedjan (kvittens → varför → nytt mål)

| Dag | Tid | Id | Kvittens | Varför | Nytt mål | Tid till målet |
|---|---|---|---|---|---|---|
| 1 | 0:37 | lasta | Tung. Den har storebror aldrig burit så långt. |  | Skrivaren ställer jag mot skräpberget. Min första verkstad. | 0.3 s |
| 1 | 2:25 | valjModell | Den piper. Den GÖR något. |  | Nu behöver den ström. Trampa. | 1.8 s |
| 1 | 2:30 | trampa | Klar! Ta ut den innan den ändrar sig. |  | En nyckelring till, så länge storebrors rulle räcker. | 19.5 s |
| 1 | 5:29 | flaska | Det blir tråd! Riktig plasttråd. |  | Min egen tråd. Nu printar jag en nyckelring av den. | 1.2 s |
| 1 | 9:30 | krukaD1 | En kruka. Mamma skulle bli så stolt. Hon får inte veta. |  | Ali gillar krukor. Han sa det själv. | 0.8 s |
| 1 | 12:01 | printSang | En säng. Jag printade en SÄNG. |  | Sängen ska in i skjulet. Sen sover jag. | 6.0 s |
| 2 | 7:20 | vindsnurra | Den snurrar! Långsamt. Men den snurrar. |  | Det drar från dörrhålet. En dörr kan jag printa. | 0.7 s |
| 3 | 2:51 | kopBatteri | Nu printar den klart även när jag vilar benen. |  | Jag springer för mycket. Med en ryggkorg bär jag sexton sake | 0.0 s |
| 3 | 4:24 | ryggkorgPa | Nu bär jag sexton skräp. |  | Ett arbetsbord bredvid skrivaren. Skrivare M ska stå på det. | 2.3 s |
| 4 | 3:21 | sophallare | Nu kan jag tömma hela kärran på en gång. |  | Jag behöver något att sitta på. En pall. Lagom ambitiöst. | 0.0 s |

## Hur länge nya mål väntade (från att förra målet blev klart till att det nya syntes i målrutan)

Snitt 2.3 s · max 13.1 s · över 4 s: 5 · över 8 s: 3 av 50

## Flaggor (78)

- **KROCK** dag 1 2:41: 2.8 s mellan [bubbla] "Hallå där, nya grannen! Vad är det där du gör?" och [notis] "💭 Jag gjorde den här. Av skräp. Det här kan funka."
- **KROCK** dag 3 0:49: 3.0 s mellan [morgonkort] "⏸️ Pausad · Klicka för att fortsätta." och [bubbla] "TUUT! Hej grannen!"
- **KROCK** dag 4 1:01: 1.2 s mellan [lapp] "Tjo. Ska grilla på lördag. Min grillspade smälte. Kan du gör" och [notis] "💭 Rolf vill ha en grillspade. Den printar jag."
- **KROCK** dag 4 2:17: 3.3 s mellan [notis] "💭 I natt somnar jag torr. Det börjar bli ett hem." och [notis] "💭 Det får inte plats. Jag behöver något att tippa i."
- **PAUS** dag 1 2:25: 0.4 s paus före "Den piper. Den GÖR något."
- **PAUS** dag 1 2:29: 0.1 s paus före "Nu behöver den ström. Trampa."
- **PAUS** dag 1 2:34: 0.0 s paus före "Klar! Ta ut den innan den ändrar sig."
- **PAUS** dag 1 2:38: 0.1 s paus före "Hallå där, nya grannen! Vad är det där du gör?"
- **PAUS** dag 1 2:41: 1.0 s paus före "Jag gjorde den här. Av skräp. Det här kan funka."
- **PAUS** dag 1 2:47: 0.0 s paus före "VA FAN?! Fick du igång den?? Jag försökte i typ et"
- **PAUS** dag 1 2:57: 0.0 s paus före "En nyckelring till, så länge storebrors rulle räck"
- **PAUS** dag 1 3:27: 0.0 s paus före "Affären mitt emot. Han verkar nyfiken. Jag visar h"
- **PAUS** dag 1 4:08: 0.0 s paus före "Hej. Jag är Ali. Pappas butik – min sedan tjugofem"
- **PAUS** dag 1 4:17: 0.0 s paus före "Pappas gamla köttkvarn. Den har malt allt utom köt"
- **PAUS** dag 1 4:29: 0.0 s paus före "Den är din. Pappa hade blivit glad. Han trodde ald"
- **PAUS** dag 1 4:36: 0.0 s paus före "Kvarnen ska stå vid skrivaren, närmast skräpberget"
- **PAUS** dag 1 4:59: 0.1 s paus före "Högar bakom staketet. Där inne ligger mer än på he"
- **PAUS** dag 1 5:33: 0.0 s paus före "Min egen tråd. Nu printar jag en nyckelring av den"
- **PAUS** dag 1 7:01: 0.1 s paus före "Ali här. Nyckelringen sålde direkt. Jag ville bli "
- **PAUS** dag 1 7:14: 0.1 s paus före "Femtio kronor. Nu har jag råd med gripen."
- **PAUS** dag 1 8:28: 0.0 s paus före "Ali här. Jag såg Skräpgrip på avstånd. Ett streck "
- **PAUS** dag 1 8:38: 0.0 s paus före "Spara till krukreceptet."
- **PAUS** dag 1 9:35: 0.0 s paus före "Ali gillar krukor. Han sa det själv."
- **PAUS** dag 1 12:02: 0.5 s paus före "En säng. Jag printade en SÄNG."
- **PAUS** dag 1 12:06: 0.0 s paus före "Nitton år. Inget mer tjat. Gården är full av skräp"
- **PAUS** dag 2 0:23: 0.0 s paus före "Ali vill ha idag: Blomkruka · +50 %"
- **PAUS** dag 2 1:47: 0.0 s paus före "Gården är full av skräp. Jag börjar vid skjulet."
- **PAUS** dag 2 2:49: 0.8 s paus före "Gården är STÄDAD, av mig, frivilligt. Mamma skulle"
- **PAUS** dag 2 3:03: 0.0 s paus före "Sopbilen tippade en ny last på soptippen!"
- **PAUS** dag 2 3:48: 0.0 s paus före "Tornet är fullt. Skrivaren får jobba ikapp."
- **PAUS** dag 2 3:52: 0.2 s paus före "Du har städat hela gården. Ingen gör så nuförtin."
- **PAUS** dag 2 3:59: 0.1 s paus före "Öj… ä dä du som printar grejer? Dom där nyckelring"
- **PAUS** dag 2 4:06: 0.1 s paus före "Ja. Av skräp."
- **PAUS** dag 2 4:11: 0.1 s paus före "Hm. Ja kanske har nåt åt dej. Kolla postlådan vid "
- **PAUS** dag 2 5:31: 0.0 s paus före "Ölhållaren är klar. Den lägger jag i Rolfs postlåd"
- **PAUS** dag 2 7:26: 0.0 s paus före "Den snurrar! Långsamt. Men den snurrar."
- **PAUS** dag 2 7:29: 0.0 s paus före "Det drar från dörrhålet. En dörr kan jag printa."
- **PAUS** dag 2 8:39: 0.0 s paus före "Nu vet Ali att jag bor HÄR. Taket läcker. I morgon"
- **PAUS** dag 2 8:39: 0.0 s paus före "Sov när du vill."
- **PAUS** dag 3 0:18: 0.1 s paus före "Ali vill ha idag: Blomkruka · +50 %"
- **PAUS** dag 3 1:14: 0.1 s paus före "Rolf vill ha en flasköppnare. Den printar jag."
- **PAUS** dag 3 2:43: 0.0 s paus före "Batteriet ur min gamla Volvo. Bilen dog 2016. Batt"
- **PAUS** dag 3 2:51: 0.3 s paus före "Bilbatteriet är inkopplat – skrivaren printar klar"
- **PAUS** dag 3 2:57: 0.0 s paus före "Nu printar den klart även när jag vilar benen."
- **PAUS** dag 3 3:01: 0.0 s paus före "Jag springer för mycket. Med en ryggkorg bär jag s"
- **PAUS** dag 3 4:29: 0.0 s paus före "Ett arbetsbord bredvid skrivaren. Skrivare M ska s"
- **PAUS** dag 3 9:29: 0.0 s paus före "Fullt i händerna."
- **PAUS** dag 3 11:43: 0.0 s paus före "Nu vet Rolf att jag bor HÄR. Benen orkar inte tram"
- **PAUS** dag 3 11:43: 0.0 s paus före "(nytt mål i rutan)"
- **PAUS** dag 4 0:49: 0.1 s paus före "Nämen. PERFEKT öppnare! Kärran vid lådan ä din. De"
- **SAMTIDIGT** dag 4 1:00: "Nämen. PERFEKT öppnare! Kärran vid lådan" och "Tjo. Ska grilla på lördag. Min grillspad"
- **PAUS** dag 4 1:01: 0.1 s paus före "Rolf vill ha en grillspade. Den printar jag."
- **PAUS** dag 4 1:07: 1.6 s paus före "Hörru. Röda backar ä bra plast. Om man har rätt kv"
- **PAUS** dag 4 1:12: 0.0 s paus före "En skottkärra! Jag väljer den med hjulet och kör d"
- **PAUS** dag 4 1:18: 0.0 s paus före "Skrivare M hinner inte heller. Den kunde gå fortar"
- **PAUS** dag 4 1:48: 0.0 s paus före "Kärran rymmer massor. Jag fyller den och tippar al"
- **PAUS** dag 4 2:17: 0.1 s paus före "Det får inte plats. Jag behöver något att tippa i."
- **PAUS** dag 4 2:55: 0.0 s paus före "Du igen. Bra. Du är den enda som köper nåt."
- **PAUS** dag 4 3:28: 0.0 s paus före "Nu kan jag tömma hela kärran på en gång."
- **PAUS** dag 4 3:31: 0.0 s paus före "Jag behöver något att sitta på. En pall. Lagom amb"
- **PAUS** dag 4 9:21: 0.0 s paus före "En skrivare räcker inte."
- **PAUS** dag 4 9:21: 0.0 s paus före "(nytt mål i rutan)"
- **TOM RUTA** dag 1 7:28: 5.6 s innan "Printa skräpgripen" syntes
- **UPPREPNING** dag 3 9:29: du: "Fullt i händerna." (förra gången dag 3)
- **OKÄND SAK I BESTÄMD FORM** dag 1 2:33: "nyckelringen" innan saken presenterats: "Klicka på skrivaren och välj nyckelringen."
- **TRÄNGSEL 2** dag 1 3:04: "Sälj grejerna i affären mitt emot, han köper allt." 2.0 s efter förra meddelandet, 34.0 s efter en klar uppgift
- **TRÄNGSEL 2** dag 1 3:10: "Hur kunde du bara gå? Är du ok? Svara när jag ring" 2.0 s efter förra meddelandet, 40.2 s efter en klar uppgift
- **RADBRYTNING** dag 1 3:23: för lång rad (39): "Visa nyckelringarna i affären mitt emot"
- **DOLD SKYLT** dag 2 4:01: ALIS MARKNAD från 7 m: skymd av BoxGeometry 1.2 m bort (9.1, 1.8, 23.0)
- **OKÄND SAK I BESTÄMD FORM** dag 2 4:57: "Sopsäcken" innan saken presenterats: "Sopsäcken är över axeln! Nu bär jag 10 skräp."
- **TRÄNGSEL 2** dag 3 2:04: "Ali här. Bilbatteriet ur min gamla Volvo står i la" 2.0 s efter förra meddelandet, 8.6 s efter en klar uppgift
- **TRÄNGSEL 2** dag 3 3:21: "Ali här. En ryggkorg. AI:n ritade den efter en bil" 2.0 s efter förra meddelandet, 30.4 s efter en klar uppgift
- **TRÄNGSEL 2** dag 4 1:31: "Rolf hä!! Funkar dä?? ja skrivr mä EN fingr. dä ta" 2.0 s efter förra meddelandet, 24.4 s efter en klar uppgift
- **TRÄNGSEL 2** dag 4 2:42: "Ali här. 🗑️ Sophållaren. Jag frågade AI:n hur man" 2.0 s efter förra meddelandet, 27.1 s efter en klar uppgift
- **TORRT** dag 4 5:17: 252 s utan roligt ögonblick
- **TEMPO** dag 1 12:21: dag 1 tog 12.4 min (mål 10–12)
- **TEMPO** dag 2 8:49: dag 2 tog 8.8 min (mål 10–15)
- **TEMPO** dag 4 9:30: dag 4 tog 9.5 min (mål 10–15)

Sidfel: inga

## Dag 1

| Tid | Källa | Vem | Text |
|---|---|---|---|
| 0:00 | MÅL |  | Lasta av skrivaren |
| 0:00 | MÅL |  | Lasta av skrivaren |
| 0:00 | pil |  | Lasta av skrivaren |
| 0:02 | sak | bud | (tips) |
| 0:03 | väntar | du | Se så mycket skräp här är. Det är ju en guldgruva! |
| 0:03 | klar | bud | (tips) |
| 0:03 | sak | du | Se så mycket skräp här är. Det är ju en guldgruva! |
| 0:03 | röst | du | Se så mycket skräp här är. Det är ju en guldgruva! · STORY |
| 0:04 | tanke | du | ⏎ Enter – hoppa över |
| 0:04 | struken | du | Hammaren ligger i raden. Hjulet eller 2. |
| 0:04 | väntar | du | ⏎ Enter – hoppa över |
| 0:08 | sak-del | du | Först borde jag spika upp en skylt, så att alla ser att jag bor HÄR. |
| 0:08 | röst | du | Först borde jag spika upp en skylt, så att alla ser att jag bor HÄR. · STORY |
| 0:13 | klar | du | Se så mycket skräp här är. Det är ju en guldgruva! |
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
| 0:27 | sak | du | Storebrors skrivare står kvar på cykeln vid vägen. Den ska av. |
| 0:27 | pil |  | Lasta av skrivaren |
| 0:27 | notis | tanke | 💭 Storebrors skrivare står kvar på cykeln vid vägen. Den ska av. |
| 0:27 | röst | du | Storebrors skrivare står kvar på cykeln vid vägen. Den ska av. · MÅL |
| 0:35 | klar | du | Storebrors skrivare står kvar på cykeln vid vägen. Den ska av. |
| 0:37 | händelse | lastatAv | sak=skrivare |
| 0:37 | paket |  | sms |
| 0:37 | väntar | mamma | Hur kunde du bara gå? Är du ok? Svara när jag ringer! |
| 0:37 | händelse | malKlart | id=lasta del=Dag 1 – Kom igång nasta=stall |
| 0:37 | bekräftelse | du | plats |
| 0:37 | kvittens | du | Tung. Den har storebror aldrig burit så långt. |
| 0:37 | väntar | du | Tung. Den har storebror aldrig burit så långt. |
| 0:37 | väntar | du | Skrivaren ställer jag mot skräpberget. Min första verkstad. |
| 0:37 | MÅL |  | Ställ upp skrivaren |
| 0:37 | sak | du | Tung. Den har storebror aldrig burit så långt. |
| 0:37 | röst | du | Tung. Den har storebror aldrig burit så långt. · STORY |
| 0:37 | målruta |  | Ställ upp skrivaren |
| 0:40 | hjälp | kontroll | E: Ryggsäcken och kistan |
| 0:40 | klar | du | Tung. Den har storebror aldrig burit så långt. |
| 0:41 | sak | du | Skrivaren ställer jag mot skräpberget. Min första verkstad. |
| 0:41 | pil |  | Ställ upp skrivaren |
| 0:41 | notis | tanke | 💭 Skrivaren ställer jag mot skräpberget. Min första verkstad. |
| 0:41 | röst | du | Skrivaren ställer jag mot skräpberget. Min första verkstad. · MÅL |
| 0:41 | nick |  | nick:1 |
| 0:46 | klar | du | Skrivaren ställer jag mot skräpberget. Min första verkstad. |
| 0:59 | struken | info:bra | 🖨️ Storebrors skrivare står på sin plats |
| 0:59 | händelse | placerat | sak=skrivareS |
| 0:59 | paket |  | tanke |
| 0:59 | tanke | du | Storebrors rulle. Den räcker inte länge. |
| 0:59 | väntar | du | Storebrors rulle. Den räcker inte länge. |
| 0:59 | duns | du | ställs ner |
| 0:59 | händelse | malKlart | id=stall del=Dag 1 – Kom igång nasta=strom |
| 0:59 | bekräftelse | du | plats |
| 0:59 | väntar | du | Den har ingen ström. Cykeln vid vägen kanske kan ge ström. |
| 0:59 | MÅL |  | Skrivaren behöver ström |
| 0:59 | sak | du | Storebrors rulle. Den räcker inte länge. |
| 0:59 | notis | tanke | 💭 Storebrors rulle. Den räcker inte länge. |
| 0:59 | röst | du | Storebrors rulle. Den räcker inte länge. · REAKTION |
| 1:01 | målruta |  | Skrivaren behöver ström |
| 1:03 | kvittens-bock |  | ✓ Ställ upp skrivaren |
| 1:04 | klar | du | Storebrors rulle. Den räcker inte länge. |
| 1:05 | sak | du | Den har ingen ström. Cykeln vid vägen kanske kan ge ström. |
| 1:05 | pil |  | Skrivaren behöver ström |
| 1:05 | notis | tanke | 💭 Den har ingen ström. Cykeln vid vägen kanske kan ge ström. |
| 1:05 | röst | du | Den har ingen ström. Cykeln vid vägen kanske kan ge ström. · MÅL |
| 1:06 | nick |  | nick:2 |
| 1:09 | klar | du | Den har ingen ström. Cykeln vid vägen kanske kan ge ström. |
| 1:33 | paket |  | tanke |
| 1:33 | tanke | du | Cykeln… och storebrors generator? |
| 1:33 | väntar | du | Cykeln… och storebrors generator? |
| 1:33 | sak | du | Cykeln… och storebrors generator? |
| 1:33 | kvitto-visas | du | Cykeln… och storebrors generator? |
| 1:33 | notis | tanke | 💭 Cykeln… och storebrors generator? |
| 1:33 | röst | du | Cykeln… och storebrors generator? · STORY |
| 1:33 | händelse | malKlart | id=strom del=Dag 1 – Kom igång nasta=bygg |
| 1:33 | bekräftelse | du | plats |
| 1:33 | väntar | du | Nu borde jag koppla på generatorn, så att cykeln gör el. |
| 1:34 | MÅL |  | Ställ cykel och generator |
| 1:36 | klar | du | Cykeln… och storebrors generator? |
| 1:36 | målruta |  | Ställ cykel och generator |
| 1:37 | kvittens-bock |  | ✓ Skrivaren behöver ström |
| 1:39 | sak | du | Nu borde jag koppla på generatorn, så att cykeln gör el. |
| 1:39 | pil |  | Ställ cykel och generator |
| 1:39 | notis | tanke | 💭 Nu borde jag koppla på generatorn, så att cykeln gör el. |
| 1:39 | röst | du | Nu borde jag koppla på generatorn, så att cykeln gör el. · MÅL |
| 1:43 | klar | du | Nu borde jag koppla på generatorn, så att cykeln gör el. |
| 1:43 | händelse | placerat | sak=generator |
| 1:43 | duns | du | ställs ner |
| 1:52 | ljud | utrustning | Cykeln i famnen |
| 1:52 | händelse | lyft | sak=cykel |
| 1:57 | paket |  | tanke |
| 1:57 | tanke | du | Cykeln ska stå vid skrivaren. |
| 1:57 | väntar | du | Cykeln ska stå vid skrivaren. |
| 1:57 | sak | du | Cykeln ska stå vid skrivaren. |
| 1:57 | notis | tanke | 💭 Cykeln ska stå vid skrivaren. |
| 1:57 | röst | du | Cykeln ska stå vid skrivaren. · REAKTION |
| 1:58 | händelse | placerat | sak=cykel |
| 1:58 | duns | du | ställs ner |
| 2:00 | händelse | ombyggd | sak=cykel |
| 2:00 | händelse | malKlart | id=bygg del=Dag 1 – Kom igång nasta=valjModell |
| 2:00 | bekräftelse | du | plats |
| 2:00 | väntar | du | Strömmen finns. Nu ska skrivaren veta vad den ska göra, sen trampar jag. |
| 2:00 | målruta |  | Välj vad skrivaren ska printa |
| 2:00 | MÅL |  | Välj vad skrivaren ska printa |
| 2:02 | klar | du | Cykeln ska stå vid skrivaren. |
| 2:03 | sak | du | Strömmen finns. Nu ska skrivaren veta vad den ska göra, sen trampar jag. |
| 2:03 | pil |  | Välj vad skrivaren ska printa |
| 2:03 | notis | tanke | 💭 Strömmen finns. Nu ska skrivaren veta vad den ska göra, sen trampar jag. |
| 2:03 | röst | du | Strömmen finns. Nu ska skrivaren veta vad den ska göra, sen trampar jag. · MÅL |
| 2:04 | kvittens-bock |  | ✓ Montera generatorn |
| 2:11 | klar | du | Strömmen finns. Nu ska skrivaren veta vad den ska göra, sen trampar jag. |
| 2:23 | tanke | du | Klicka på skrivaren och välj nyckelringen. |
| 2:23 | väntar | du | Klicka på skrivaren och välj nyckelringen. |
| 2:23 | sak | du | Klicka på skrivaren och välj nyckelringen. |
| 2:23 | notis | tanke | 💭 Klicka på skrivaren och välj nyckelringen. |
| 2:23 | röst | du | Klicka på skrivaren och välj nyckelringen. · REAKTION |
| 2:25 | händelse | printStart | sak=nyckelring |
| 2:25 | händelse | malKlart | id=valjModell del=Dag 1 – Kom igång nasta=trampa |
| 2:25 | bekräftelse | du | plats |
| 2:25 | kvittens | du | Den piper. Den GÖR något. |
| 2:25 | väntar | du | Den piper. Den GÖR något. |
| 2:25 | väntar | du | Nu behöver den ström. Trampa. |
| 2:25 | MÅL |  | Trampa cykeln |
| 2:25 | klipps | du | Klicka på skrivaren och välj nyckelringen. |
| 2:25 | klar | du | Klicka på skrivaren och välj nyckelringen. |
| 2:25 | sak | du | Den piper. Den GÖR något. |
| 2:25 | röst | du | Den piper. Den GÖR något. · STORY |
| 2:25 | målruta |  | Trampa cykeln |
| 2:29 | klar | du | Den piper. Den GÖR något. |
| 2:29 | sak | du | Nu behöver den ström. Trampa. |
| 2:29 | pil |  | Trampa cykeln |
| 2:29 | notis | tanke | 💭 Nu behöver den ström. Trampa. |
| 2:29 | röst | du | Nu behöver den ström. Trampa. · MÅL |
| 2:30 | händelse | printKlar | sak=nyckelring n=1 |
| 2:30 | händelse | malKlart | id=trampa del=Dag 1 – Kom igång nasta=rullSlut |
| 2:30 | bekräftelse | du | plats |
| 2:30 | kvittens | du | Klar! Ta ut den innan den ändrar sig. |
| 2:30 | väntar | du | Klar! Ta ut den innan den ändrar sig. |
| 2:30 | väntar | du | En nyckelring till, så länge storebrors rulle räcker. |
| 2:30 | MÅL |  | En nyckelring till |
| 2:31 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 2:31 | paket |  | sms |
| 2:31 | väntar | bror | VA FAN?! Fick du igång den?? Jag försökte i typ ett år. Den bara pep. 😳 |
| 2:31 | skratt | bror | VA FAN?! Fick du igång den?? Jag försökt |
| 2:31 | paket |  | sms |
| 2:31 | väntar | bror | Sälj grejerna i affären mitt emot, han köper allt. |
| 2:31 | foto | du | Första nyckelringen |
| 2:31 | paket |  | tanke |
| 2:31 | tanke | du | Jag gjorde den här. Av skräp. Det här kan funka. |
| 2:31 | väntar | du | Jag gjorde den här. Av skräp. Det här kan funka. |
| 2:31 | väntar | ali | Hallå där, nya grannen! Vad är det där du gör? |
| 2:33 | målruta |  | En nyckelring till |
| 2:33 | brott | OKÄND SAK I BESTÄMD FORM | "nyckelringen" innan saken presenterats: "Klicka på skrivaren och välj nyckelringen." |
| 2:34 | klar | du | Nu behöver den ström. Trampa. |
| 2:34 | sak | du | Klar! Ta ut den innan den ändrar sig. |
| 2:34 | röst | du | Klar! Ta ut den innan den ändrar sig. · STORY |
| 2:38 | klar | du | Klar! Ta ut den innan den ändrar sig. |
| 2:38 | sak | ali | Hallå där, nya grannen! Vad är det där du gör? |
| 2:38 | händelse | dialog | id=aliRop |
| 2:38 | röst | ali | Hallå där, nya grannen! Vad är det där du gör? · REAKTION |
| 2:39 | bubbla |  | Hallå där, nya grannen! Vad är det där du gör? |
| 2:40 | klar | ali | Hallå där, nya grannen! Vad är det där du gör? |
| 2:41 | sak | du | Jag gjorde den här. Av skräp. Det här kan funka. |
| 2:41 | notis | tanke | 💭 Jag gjorde den här. Av skräp. Det här kan funka. |
| 2:41 | röst | du | Jag gjorde den här. Av skräp. Det här kan funka. · STORY |
| 2:47 | klar | du | Jag gjorde den här. Av skräp. Det här kan funka. |
| 2:47 | sak | bror | VA FAN?! Fick du igång den?? Jag försökte i typ ett år. Den bara pep. 😳 |
| 2:47 | skratt | bror | VA FAN?! Fick du igång den?? Jag försökt |
| 2:47 | sms | bror | VA FAN?! Fick du igång den?? Jag försökte i typ ett år. Den bara pep. 😳 |
| 2:47 | skratt | bror | VA FAN?! Fick du igång den?? Jag försökt |
| 2:47 | händelse | dialog | id=brorSms1 |
| 2:47 | sms-bubbla | bror | VA FAN?! Fick du igång den?? Jag försökte i typ ett år. Den bara pep. 😳 |
| 2:47 | skratt | bror | VA FAN?! Fick du igång den?? Jag försökt |
| 2:47 | röst | bror | VA FAN?! Fick du igång den?? Jag försökte i typ ett år. Den bara pep. 😳 · REAKTION |
| 2:51 | hjälp | kontroll | Tab: Dina sms och dagboken |
| 2:56 | händelse | printStart | sak=nyckelring |
| 2:57 | klar | bror | VA FAN?! Fick du igång den?? Jag försökte i typ ett år. Den bara pep. 😳 |
| 2:57 | skratt | bror | VA FAN?! Fick du igång den?? Jag försökt |
| 2:57 | sak | du | En nyckelring till, så länge storebrors rulle räcker. |
| 2:57 | pil |  | En nyckelring till |
| 2:57 | notis | tanke | 💭 En nyckelring till, så länge storebrors rulle räcker. |
| 2:57 | röst | du | En nyckelring till, så länge storebrors rulle räcker. · MÅL |
| 2:57 | nick |  | nick:6 |
| 3:01 | klar | du | En nyckelring till, så länge storebrors rulle räcker. |
| 3:04 | brott | TRÄNGSEL 2 | "Sälj grejerna i affären mitt emot, han köper allt." 2.0 s efter förra meddelandet, 34.0 s efter en klar uppgift |
| 3:04 | sak | bror | Sälj grejerna i affären mitt emot, han köper allt. |
| 3:04 | sms | bror | Sälj grejerna i affären mitt emot, han köper allt. |
| 3:04 | händelse | dialog | id=brorSms2 |
| 3:04 | sms-bubbla | bror | Sälj grejerna i affären mitt emot, han köper allt. |
| 3:04 | röst | bror | Sälj grejerna i affären mitt emot, han köper allt. · STORY |
| 3:06 | tanke | du | Den stannar när jag slutar trampa. Ström som sparas hade varit nåt. |
| 3:06 | väntar | du | Den stannar när jag slutar trampa. Ström som sparas hade varit nåt. |
| 3:08 | klar | bror | Sälj grejerna i affären mitt emot, han köper allt. |
| 3:10 | brott | TRÄNGSEL 2 | "Hur kunde du bara gå? Är du ok? Svara när jag ring" 2.0 s efter förra meddelandet, 40.2 s efter en klar uppgift |
| 3:10 | sak | mamma | Hur kunde du bara gå? Är du ok? Svara när jag ringer! |
| 3:10 | sms | mamma | Hur kunde du bara gå? Är du ok? Svara när jag ringer! |
| 3:10 | sms-bubbla | mamma | Hur kunde du bara gå? Är du ok? Svara när jag ringer! |
| 3:10 | röst | mamma | Hur kunde du bara gå? Är du ok? Svara när jag ringer! · STORY |
| 3:15 | klar | mamma | Hur kunde du bara gå? Är du ok? Svara när jag ringer! |
| 3:18 | händelse | printKlar | sak=nyckelring n=2 |
| 3:18 | paket |  | tanke |
| 3:18 | tanke | du | Slut på storebrors rulle. Och här ligger ju plast överallt. Om jag bara kunde göra tråd av skräpet… |
| 3:18 | väntar | du | Slut på storebrors rulle. Och här ligger ju plast överallt. Om jag bara kunde göra tråd av skräpet… |
| 3:18 | händelse | malKlart | id=rullSlut del=Dag 1 – Kom igång nasta=saljTva |
| 3:18 | bekräftelse | du | plats |
| 3:18 | väntar | du | Affären mitt emot. Han verkar nyfiken. Jag visar honom. |
| 3:18 | MÅL |  | Visa nyckelringarna i affären mitt emot |
| 3:18 | sak | du | Slut på storebrors rulle. Och här ligger ju plast överallt. Om jag bara kunde göra tråd av skräpet… |
| 3:18 | kvitto-visas | du | Slut på storebrors rulle. Och här ligger ju plast överallt. Om jag bara kunde göra tråd av skräpet… |
| 3:18 | notis | tanke | 💭 Slut på storebrors rulle. Och här ligger ju plast överallt. Om jag bara kunde göra tråd av skräpet… |
| 3:18 | röst | du | Slut på storebrors rulle. Och här ligger ju plast överallt. Om jag bara kunde göra tråd av skräpet… · STORY |
| 3:21 | målruta |  | Visa nyckelringarna i affären mitt emot |
| 3:22 | kvittens-bock |  | ✓ En nyckelring till |
| 3:23 | brott | RADBRYTNING | för lång rad (39): "Visa nyckelringarna i affären mitt emot" |
| 3:27 | klar | du | Slut på storebrors rulle. Och här ligger ju plast överallt. Om jag bara kunde göra tråd av skräpet… |
| 3:27 | sak | du | Affären mitt emot. Han verkar nyfiken. Jag visar honom. |
| 3:27 | pil |  | Visa nyckelringarna i affären mitt emot |
| 3:27 | notis | tanke | 💭 Affären mitt emot. Han verkar nyfiken. Jag visar honom. |
| 3:27 | röst | du | Affären mitt emot. Han verkar nyfiken. Jag visar honom. · MÅL |
| 3:34 | klar | du | Affären mitt emot. Han verkar nyfiken. Jag visar honom. |
| 3:36 | struken | du | Den stannar när jag slutar trampa. Ström som sparas hade varit nåt. |
| 3:45 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 3:45 | struken | ali | Hallå där, nya grannen! Vad är det där du gör? |
| 3:56 | väntar | kjelle | God morgon, det är Kjelle på Radio Tippen! Det har flyttat in någon i det gamla skjulet. Med en cykel och en skrivare. Spännande, Gunnar. |
| 3:56 | radio | kjelle | God morgon, det är Kjelle på Radio Tippen! Det har flyttat in någon i det gamla skjulet. Med en cykel och en skrivare. Spännande, Gunnar. |
| 3:56 | skratt | du | Radio-Kjelle |
| 3:56 | sak | kjelle | God morgon, det är Kjelle på Radio Tippen! Det har flyttat in någon i det gamla skjulet. Med en cykel och en skrivare. Spännande, Gunnar. |
| 3:56 | notis |  | 📻 Radio Tippen: God morgon, det är Kjelle på Radio Tippen! Det har flyttat in någon i det gamla skjulet. Med en cykel och en skrivare. Spännande, Gunnar. |
| 3:56 | röst | kjelle | God morgon, det är Kjelle på Radio Tippen! Det har flyttat in någon i det gamla skjulet. Med en cykel och en skrivare. Spännande, Gunnar. · REAKTION |
| 3:58 | struken | ali | Pappas gamla köttkvarn. Den har malt allt utom kött. Trettio kronor, så är den din. |
| 3:58 | händelse | dialog | id=aliForsta |
| 3:58 | butiksbubbla | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 4:00 | händelse | salt | sak=nyckelring n=2 |
| 4:00 | aliSalt | ali | 30 |
| 4:00 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 4:00 | händelse | dialog | id=aliKvarnErbjud |
| 4:00 | butiksbubbla | ali | Pappas gamla köttkvarn. Den har malt allt utom kött. Trettio kronor, så är den din. |
| 4:01 | väntar | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 4:01 | väntar | ali | Pappas gamla köttkvarn. Den har malt allt utom kött. Trettio kronor, så är den din. |
| 4:01 | händelse | malKlart | id=saljTva del=Dag 1 – Kom igång nasta=aliKvarn |
| 4:01 | bekräftelse | du | plats |
| 4:01 | väntar | du | Ali har en gammal kvarn. Den gör tråd av skräp. |
| 4:01 | MÅL |  | Köp kvarnen |
| 4:04 | målruta |  | Köp kvarnen |
| 4:05 | kvittens-bock |  | ✓ Visa nyckelringarna i affären mitt emot |
| 4:07 | tanke | du | Vem är Gunnar? |
| 4:07 | väntar | du | Vem är Gunnar? |
| 4:08 | klar | kjelle | God morgon, det är Kjelle på Radio Tippen! Det har flyttat in någon i det gamla skjulet. Med en cykel och en skrivare. Spännande, Gunnar. |
| 4:08 | sak | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 4:08 | röst | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. · STORY |
| 4:11 | struken | du | Ali har en gammal kvarn. Den gör tråd av skräp. |
| 4:12 | struken | du | Ali har en gammal kvarn. Den gör tråd av skräp. |
| 4:17 | klar | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 4:17 | sak | ali | Pappas gamla köttkvarn. Den har malt allt utom kött. Trettio kronor, så är den din. |
| 4:17 | röst | ali | Pappas gamla köttkvarn. Den har malt allt utom kött. Trettio kronor, så är den din. · STORY |
| 4:23 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 4:23 | struken | ali | Pappas gamla köttkvarn. Den har malt allt utom kött. Trettio kronor, så är den din. |
| 4:24 | händelse | kopt | sak=gammalkvarn |
| 4:24 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 4:24 | händelse | dialog | id=aliKvarnKopt |
| 4:24 | butiksbubbla | ali | Den är din. Pappa hade blivit glad. Han trodde aldrig att nån skulle vilja ha den. |
| 4:26 | väntar | ali | Den är din. Pappa hade blivit glad. Han trodde aldrig att nån skulle vilja ha den. |
| 4:26 | händelse | malKlart | id=aliKvarn del=Dag 1 – Kom igång nasta=kvarn |
| 4:26 | bekräftelse | du | plats |
| 4:26 | struken | du | Vem är Gunnar? |
| 4:26 | väntar | du | Kvarnen ska stå vid skrivaren, närmast skräpberget. |
| 4:26 | MÅL |  | Ställ kvarnen |
| 4:28 | målruta |  | Ställ kvarnen |
| 4:28 | pil |  | Ställ kvarnen |
| 4:29 | klar | ali | Pappas gamla köttkvarn. Den har malt allt utom kött. Trettio kronor, så är den din. |
| 4:29 | sak | ali | Den är din. Pappa hade blivit glad. Han trodde aldrig att nån skulle vilja ha den. |
| 4:29 | röst | ali | Den är din. Pappa hade blivit glad. Han trodde aldrig att nån skulle vilja ha den. · STORY |
| 4:29 | nick |  | nick:9 |
| 4:30 | kvittens-bock |  | ✓ Köp kvarnen |
| 4:36 | klar | ali | Den är din. Pappa hade blivit glad. Han trodde aldrig att nån skulle vilja ha den. |
| 4:36 | struken | du | Ali har en gammal kvarn. Den gör tråd av skräp. |
| 4:36 | sak | du | Kvarnen ska stå vid skrivaren, närmast skräpberget. |
| 4:36 | notis | tanke | 💭 Kvarnen ska stå vid skrivaren, närmast skräpberget. |
| 4:36 | röst | du | Kvarnen ska stå vid skrivaren, närmast skräpberget. · MÅL |
| 4:41 | klar | du | Kvarnen ska stå vid skrivaren, närmast skräpberget. |
| 4:55 | händelse | placerat | sak=kvarnen |
| 4:55 | duns | du | ställs ner |
| 4:55 | händelse | malKlart | id=kvarn del=Dag 1 – Kom igång nasta=flaska |
| 4:55 | bekräftelse | du | plats |
| 4:55 | väntar | du | Skräp i kvarnen, sen vevar jag. Då blir det tråd. |
| 4:55 | målruta |  | Gör egen tråd |
| 4:55 | MÅL |  | Gör egen tråd |
| 4:55 | sak | du | Skräp i kvarnen, sen vevar jag. Då blir det tråd. |
| 4:55 | pil |  | Gör egen tråd |
| 4:55 | notis | tanke | 💭 Skräp i kvarnen, sen vevar jag. Då blir det tråd. |
| 4:55 | röst | du | Skräp i kvarnen, sen vevar jag. Då blir det tråd. · MÅL |
| 4:55 | nick |  | nick:10 |
| 4:55 | tanke | du | Högar bakom staketet. Där inne ligger mer än på hela gården. |
| 4:55 | väntar | du | Högar bakom staketet. Där inne ligger mer än på hela gården. |
| 4:59 | kvittens-bock |  | ✓ Ställ kvarnen |
| 4:59 | klar | du | Skräp i kvarnen, sen vevar jag. Då blir det tråd. |
| 4:59 | sak | du | Högar bakom staketet. Där inne ligger mer än på hela gården. |
| 4:59 | notis | tanke | 💭 Högar bakom staketet. Där inne ligger mer än på hela gården. |
| 4:59 | röst | du | Högar bakom staketet. Där inne ligger mer än på hela gården. · REAKTION |
| 4:59 | hjälp | kontroll | Klick: Veva kvarnen tills tratten är tom |
| 5:03 | klar | du | Högar bakom staketet. Där inne ligger mer än på hela gården. |
| 5:27 | struken | info:bra | 3 st i tratten – veva nu! |
| 5:29 | händelse | malKlart | id=flaska del=Dag 1 – Kom igång nasta=egenPrint |
| 5:29 | bekräftelse | du | plats |
| 5:29 | kvittens | du | Det blir tråd! Riktig plasttråd. |
| 5:29 | väntar | du | Det blir tråd! Riktig plasttråd. |
| 5:29 | dagbok-tyst | du | Kvarnen funkar. Soptippen är en gruva. |
| 5:29 | väntar | du | Min egen tråd. Nu printar jag en nyckelring av den. |
| 5:29 | MÅL |  | Printa med egen tråd |
| 5:29 | sak | du | Det blir tråd! Riktig plasttråd. |
| 5:29 | röst | du | Det blir tråd! Riktig plasttråd. · STORY |
| 5:29 | målruta |  | Printa med egen tråd |
| 5:33 | klar | du | Det blir tråd! Riktig plasttråd. |
| 5:33 | sak | du | Min egen tråd. Nu printar jag en nyckelring av den. |
| 5:33 | pil |  | Printa med egen tråd |
| 5:33 | notis | tanke | 💭 Min egen tråd. Nu printar jag en nyckelring av den. |
| 5:33 | röst | du | Min egen tråd. Nu printar jag en nyckelring av den. · MÅL |
| 5:33 | nick |  | nick:11 |
| 5:37 | klar | du | Min egen tråd. Nu printar jag en nyckelring av den. |
| 5:49 | händelse | printStart | sak=nyckelring |
| 5:49 | toast | bra | 🔗 Slangen kopplad |
| 5:54 | händelse | printKlar | sak=nyckelring n=3 |
| 5:54 | paket |  | tanke |
| 5:54 | tanke | du | En nyckelring av en gammal schampoflaska. Den luktar fortfarande päron. |
| 5:54 | väntar | du | En nyckelring av en gammal schampoflaska. Den luktar fortfarande päron. |
| 5:54 | skratt | du | egen tråd |
| 5:54 | händelse | malKlart | id=egenPrint del=Dag 1 – Kom igång nasta=salj |
| 5:54 | bekräftelse | du | plats |
| 5:54 | struken | du | En nyckelring av en gammal schampoflaska. Den luktar fortfarande päron. |
| 5:54 | väntar | du | Ali köper nog den här också. |
| 5:54 | målruta |  | Sälj hos Ali |
| 5:54 | MÅL |  | Sälj hos Ali |
| 5:54 | sak | du | Ali köper nog den här också. |
| 5:54 | pil |  | Sälj hos Ali |
| 5:54 | notis | tanke | 💭 Ali köper nog den här också. |
| 5:54 | röst | du | Ali köper nog den här också. · MÅL |
| 5:55 | nick |  | nick:12 |
| 5:55 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 5:58 | klar | du | Ali köper nog den här också. |
| 5:58 | kvittens-bock |  | ✓ Printa med egen tråd |
| 6:08 | händelse | printStart | sak=nyckelring |
| 6:09 | händelse | printKlar | sak=nyckelring n=4 |
| 6:09 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 6:11 | händelse | printStart | sak=nyckelring |
| 6:12 | händelse | printKlar | sak=nyckelring n=5 |
| 6:12 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 6:24 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 6:25 | händelse | salt | sak=nyckelring n=3 |
| 6:25 | aliSalt | ali | 45 |
| 6:25 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 6:25 | händelse | dialog | id=aliNyckelIgen |
| 6:25 | röst | ali | Nyckelringar igen? Folk tappar sina nycklar hela tiden. · STORY |
| 6:25 | butiksbubbla | ali | Nyckelringar igen? Folk tappar sina nycklar hela tiden. |
| 6:26 | händelse | malKlart | id=salj del=Dag 1 – Kom igång nasta=powerbank |
| 6:26 | bekräftelse | du | plats |
| 6:26 | paket | ali | ali → ge |
| 6:26 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 6:26 | händelse | dialog | id=aliPowerbank |
| 6:26 | butiksbubbla | ali | Jag såg dig cykla. Det ser jobbigt ut. Ta den här. Bra kunder får bonus. |
| 6:26 | väntar | du | Koppla in powerbanken. |
| 6:26 | målruta |  | Koppla in powerbanken |
| 6:26 | MÅL |  | Koppla in powerbanken |
| 6:30 | röst | ali | Jag såg dig cykla. Det ser jobbigt ut. Ta den här. Bra kunder får bonus. · STORY |
| 6:30 | kvittens-bock |  | ✓ Sälj hos Ali |
| 6:35 | sak | du | Koppla in powerbanken. |
| 6:35 | pil |  | Koppla in powerbanken |
| 6:35 | röst | du | Koppla in powerbanken. · MÅL |
| 6:35 | nick |  | nick:13 |
| 6:38 | klar | du | Koppla in powerbanken. |
| 6:54 | skratt | du | powerbanken monterad |
| 6:54 | paket |  | tanke |
| 6:54 | tanke | du | Nu sparas lite ström. En nyckelring, typ. Framtiden är här, och den sitter fast med eltejp. |
| 6:54 | väntar | du | Nu sparas lite ström. En nyckelring, typ. Framtiden är här, och den sitter fast med eltejp. |
| 6:54 | monterat | du | byggsats:powerbank |
| 6:54 | händelse | monterat | sak=powerbank |
| 6:54 | sak | du | Nu sparas lite ström. En nyckelring, typ. Framtiden är här, och den sitter fast med eltejp. |
| 6:54 | kvitto-visas | du | Nu sparas lite ström. En nyckelring, typ. Framtiden är här, och den sitter fast med eltejp. |
| 6:54 | notis | tanke | 💭 Nu sparas lite ström. En nyckelring, typ. Framtiden är här, och den sitter fast med eltejp. |
| 6:54 | röst | du | Nu sparas lite ström. En nyckelring, typ. Framtiden är här, och den sitter fast med eltejp. · REAKTION |
| 6:54 | händelse | malKlart | id=powerbank del=Dag 1 – Kom igång nasta=kopGrip |
| 6:54 | bekräftelse | du | plats |
| 6:54 | paket |  | lapp → ge |
| 6:54 | lapp-kö | 🧺 Ali | Ali här. Nyckelringen sålde direkt. Jag ville bli ingenjör en gång. Nu har jag låtit en AI rita en skräpgrip. Kom och titta. |
| 6:54 | väntar | ali | Ali här. Nyckelringen sålde direkt. Jag ville bli ingenjör en gång. Nu har jag låtit en AI rita en skräpgrip. Kom och titta. |
| 6:54 | väntar |  | (läget ändras) |
| 6:55 | MÅL |  | Köp skräpgripen |
| 6:58 | kvittens-bock |  | ✓ Gå till Ali |
| 7:01 | klar | du | Nu sparas lite ström. En nyckelring, typ. Framtiden är här, och den sitter fast med eltejp. |
| 7:01 | sak | ali | Ali här. Nyckelringen sålde direkt. Jag ville bli ingenjör en gång. Nu har jag låtit en AI rita en skräpgrip. Kom och titta. |
| 7:01 | sms | ali | Ali här. Nyckelringen sålde direkt. Jag ville bli ingenjör en gång. Nu har jag låtit en AI rita en skräpgrip. Kom och titta. |
| 7:01 | händelse | dialog | id=aliGripSms |
| 7:01 | sms-bubbla | ali | Ali här. Nyckelringen sålde direkt. Jag ville bli ingenjör en gång. Nu har jag låtit en AI rita en skräpgrip. Kom och titta. |
| 7:01 | röst | ali | Ali här. Nyckelringen sålde direkt. Jag ville bli ingenjör en gång. Nu har jag låtit en AI rita en skräpgrip. Kom och titta. · STORY |
| 7:01 | orsak-väntan |  | dialog:aliGripSms |
| 7:01 | väntar | du | Med en skräpgrip slipper jag böja mig. Ali har en ritning. |
| 7:01 | målruta |  | Köp skräpgripen |
| 7:01 | kvitto-visas |  | (läget ändras) |
| 7:01 | sak |  | (läget ändras) |
| 7:02 | paket |  | tanke |
| 7:02 | tanke | du | Femtio kronor. Nu har jag råd med gripen. |
| 7:02 | väntar | du | Femtio kronor. Nu har jag råd med gripen. |
| 7:14 | struken | du | Med en skräpgrip slipper jag böja mig. Ali har en ritning. |
| 7:14 | klar | ali | Ali här. Nyckelringen sålde direkt. Jag ville bli ingenjör en gång. Nu har jag låtit en AI rita en skräpgrip. Kom och titta. |
| 7:14 | sak | du | Femtio kronor. Nu har jag råd med gripen. |
| 7:14 | notis | tanke | 💭 Femtio kronor. Nu har jag råd med gripen. |
| 7:14 | röst | du | Femtio kronor. Nu har jag råd med gripen. · REAKTION |
| 7:18 | klar | du | Femtio kronor. Nu har jag råd med gripen. |
| 7:20 | sak | du | Med en skräpgrip slipper jag böja mig. Ali har en ritning. |
| 7:20 | pil |  | Köp skräpgripen |
| 7:20 | notis | tanke | 💭 Med en skräpgrip slipper jag böja mig. Ali har en ritning. |
| 7:20 | röst | du | Med en skräpgrip slipper jag böja mig. Ali har en ritning. · MÅL |
| 7:21 | nick |  | nick:14 |
| 7:25 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 7:26 | klar | du | Med en skräpgrip slipper jag böja mig. Ali har en ritning. |
| 7:27 | struken | info:guld | 3D-modell köpt – printa skräpgrip |
| 7:27 | händelse | kopt | sak=grip |
| 7:27 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 7:27 | händelse | dialog | id=aliForstaRitning |
| 7:27 | röst | ali | Bra val. Ritningen räcker till en skräpgrip. · STORY |
| 7:27 | butiksbubbla | ali | Bra val. Ritningen räcker till en skräpgrip. |
| 7:28 | händelse | malKlart | id=kopGrip del=Dag 1 – Kom igång nasta=printGrip |
| 7:28 | bekräftelse | du | plats |
| 7:28 | väntar | du | Min första 3D-modell! Jag printar inte bara saker – jag printar maskiner. |
| 7:28 | väntar | du | Ritningen är min. Nu printar jag skräpgripen. |
| 7:28 | MÅL |  | Printa skräpgripen |
| 7:32 | kvittens-bock |  | ✓ Köp skräpgripen |
| 7:33 | sak | du | Min första 3D-modell! Jag printar inte bara saker – jag printar maskiner. |
| 7:33 | kvitto-visas | du | Min första 3D-modell! Jag printar inte bara saker – jag printar maskiner. |
| 7:33 | lapp | 📔 Dagbok | Min första 3D-modell! Jag printar inte bara saker – jag printar maskiner. |
| 7:33 | dagbokrad | du | Min första 3D-modell! Jag printar inte bara saker – jag printar maskiner. |
| 7:33 | notis | dagbok | Min första 3D-modell! Jag printar inte bara saker – jag printar maskiner. |
| 7:33 | klar | du | Min första 3D-modell! Jag printar inte bara saker – jag printar maskiner. |
| 7:33 | målruta |  | Printa skräpgripen |
| 7:34 | pil |  | Printa skräpgripen |
| 7:34 | nick |  | nick:15 |
| 7:38 | sak | du | Ritningen är min. Nu printar jag skräpgripen. |
| 7:38 | notis | tanke | 💭 Ritningen är min. Nu printar jag skräpgripen. |
| 7:38 | röst | du | Ritningen är min. Nu printar jag skräpgripen. · MÅL |
| 7:43 | klar | du | Ritningen är min. Nu printar jag skräpgripen. |
| 7:49 | händelse | printStart | sak=byggsats:grip |
| 7:50 | toast | fel | Ingen ström – trampa cykeln |
| 7:50 | väntar | notis:Storebrors skrivare: Ingen ström – tramp | Storebrors skrivare: Ingen ström – trampa cykeln |
| 7:53 | sak | notis:Storebrors skrivare: Ingen ström – tramp | Storebrors skrivare: Ingen ström – trampa cykeln |
| 7:53 | notis | fel | Storebrors skrivare: Ingen ström – trampa cykeln |
| 7:53 | händelse | printKlar | sak=byggsats:grip n=1 |
| 7:55 | klar | notis:Storebrors skrivare: Ingen ström – tramp | Storebrors skrivare: Ingen ström – trampa cykeln |
| 8:15 | tanke | du | Skräpgrip ska jag ha på mig. |
| 8:15 | väntar | du | Skräpgrip ska jag ha på mig. |
| 8:15 | händelse | tagitUrPrint | sak=byggsats:grip n=1 |
| 8:15 | paket |  | sms |
| 8:15 | väntar | ali | Ali här. Jag såg Skräpgrip på avstånd. Ett streck blev lite snett. Mitt fel. Vackert ändå. |
| 8:15 | sak | du | Skräpgrip ska jag ha på mig. |
| 8:15 | notis | tanke | 💭 Skräpgrip ska jag ha på mig. |
| 8:15 | röst | du | Skräpgrip ska jag ha på mig. · REAKTION |
| 8:17 | klar | du | Skräpgrip ska jag ha på mig. |
| 8:20 | hjälp | kontroll | Klick: Klicka för att ta på dig den |
| 8:20 | tanke | du | Skräpgripen sitter! Jag bär 6, siktar lättare och plockar när jag går nära. |
| 8:20 | väntar | du | Skräpgripen sitter! Jag bär 6, siktar lättare och plockar när jag går nära. |
| 8:20 | tog på | du | byggsats:grip |
| 8:20 | händelse | monterat | sak=grip |
| 8:20 | sak | du | Skräpgripen sitter! Jag bär 6, siktar lättare och plockar när jag går nära. |
| 8:20 | notis | tanke | 💭 Skräpgripen sitter! Jag bär 6, siktar lättare och plockar när jag går nära. |
| 8:20 | röst | du | Skräpgripen sitter! Jag bär 6, siktar lättare och plockar när jag går nära. · REAKTION |
| 8:20 | händelse | malKlart | id=printGrip del=Dag 1 – Kom igång nasta=krukaD1 |
| 8:20 | bekräftelse | du | plats |
| 8:20 | väntar | du | Spara till krukreceptet. |
| 8:20 | MÅL |  | Spara till krukreceptet · 0 / 40 kr |
| 8:22 | händelse | printStart | sak=nyckelring |
| 8:22 | målruta |  | Spara till krukreceptet · 0 / 40 kr |
| 8:23 | händelse | printKlar | sak=nyckelring n=6 |
| 8:24 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 8:24 | kvittens-bock |  | ✓ Printa skräpgripen |
| 8:26 | händelse | printStart | sak=nyckelring |
| 8:27 | händelse | printKlar | sak=nyckelring n=7 |
| 8:28 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 8:28 | klar | du | Skräpgripen sitter! Jag bär 6, siktar lättare och plockar när jag går nära. |
| 8:28 | sak | ali | Ali här. Jag såg Skräpgrip på avstånd. Ett streck blev lite snett. Mitt fel. Vackert ändå. |
| 8:28 | sms | ali | Ali här. Jag såg Skräpgrip på avstånd. Ett streck blev lite snett. Mitt fel. Vackert ändå. |
| 8:28 | sms-bubbla | ali | Ali här. Jag såg Skräpgrip på avstånd. Ett streck blev lite snett. Mitt fel. Vackert ändå. |
| 8:28 | röst | ali | Ali här. Jag såg Skräpgrip på avstånd. Ett streck blev lite snett. Mitt fel. Vackert ändå. · REAKTION |
| 8:30 | händelse | printStart | sak=nyckelring |
| 8:31 | händelse | printKlar | sak=nyckelring n=8 |
| 8:32 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 8:38 | klar | ali | Ali här. Jag såg Skräpgrip på avstånd. Ett streck blev lite snett. Mitt fel. Vackert ändå. |
| 8:38 | sak | du | Spara till krukreceptet. |
| 8:38 | pil |  | Spara till krukreceptet · 0 / 40 kr |
| 8:38 | röst | du | Spara till krukreceptet. · MÅL |
| 8:42 | klar | du | Spara till krukreceptet. |
| 8:42 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 8:43 | händelse | salt | sak=nyckelring n=1 |
| 8:43 | aliSalt | ali | 15 |
| 8:43 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 8:44 | händelse | salt | sak=nyckelring n=1 |
| 8:44 | paket |  | ali → ge |
| 8:44 | väntar | ali | Du får bonus! 20 kr extra. Säg inget till min fru. |
| 8:44 | väntar |  | (läget ändras) |
| 8:44 | aliSalt | ali | 15 |
| 8:44 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 8:44 | händelse | salt | sak=nyckelring n=1 |
| 8:44 | aliSalt | ali | 15 |
| 8:44 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 8:44 | sak | ali | Du får bonus! 20 kr extra. Säg inget till min fru. |
| 8:44 | notis |  | Ali: ”Du får bonus! 20 kr extra. Säg inget till min fru.” |
| 8:44 | röst | ali | Du får bonus! 20 kr extra. Säg inget till min fru. · REAKTION |
| 8:44 | upplåst | inkomst | kruka |
| 8:44 | brott | UPPLÅST | kruka (inkomst 8 av 6) |
| 8:44 | händelse | upplast | id=kruka flask=inkomst |
| 8:44 | paket |  | sms |
| 8:44 | väntar | ali | Prova en kruka. Folk köper krukor. Ingen vet varför. |
| 8:44 | skratt | ali | Prova en kruka. Folk köper krukor. Ingen |
| 8:45 | kvitto-visas |  | (läget ändras) |
| 8:45 | sak |  | (läget ändras) |
| 8:47 | klar | ali | Du får bonus! 20 kr extra. Säg inget till min fru. |
| 8:52 | sak | ali | Prova en kruka. Folk köper krukor. Ingen vet varför. |
| 8:52 | skratt | ali | Prova en kruka. Folk köper krukor. Ingen |
| 8:52 | sms | ali | Prova en kruka. Folk köper krukor. Ingen vet varför. |
| 8:52 | skratt | ali | Prova en kruka. Folk köper krukor. Ingen |
| 8:52 | händelse | dialog | id=aliKrukaSms |
| 8:52 | sms-bubbla | ali | Prova en kruka. Folk köper krukor. Ingen vet varför. |
| 8:52 | skratt | ali | Prova en kruka. Folk köper krukor. Ingen |
| 8:52 | röst | ali | Prova en kruka. Folk köper krukor. Ingen vet varför. · STORY |
| 8:58 | klar | ali | Prova en kruka. Folk köper krukor. Ingen vet varför. |
| 8:58 | skratt | ali | Prova en kruka. Folk köper krukor. Ingen |
| 8:58 | väntar | du | Ali vill ha krukor. Jag printar en blomkruka. |
| 9:04 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 9:06 | händelse | kopt | sak=kruka |
| 9:06 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 9:06 | händelse | dialog | id=aliKrukaRecept |
| 9:06 | röst | ali | Blomkruka? Bra val. Folk köper sånt. Jag vet inte varför. · STORY |
| 9:06 | butiksbubbla | ali | Blomkruka? Bra val. Folk köper sånt. Jag vet inte varför. |
| 9:09 | struken | du | Ali vill ha krukor. Jag printar en blomkruka. |
| 9:18 | sak | du | Ali vill ha krukor. Jag printar en blomkruka. |
| 9:18 | röst | du | Ali vill ha krukor. Jag printar en blomkruka. · STORY |
| 9:23 | klar | du | Ali vill ha krukor. Jag printar en blomkruka. |
| 9:26 | händelse | printStart | sak=kruka |
| 9:27 | toast | fel | Ingen ström – trampa cykeln |
| 9:30 | händelse | printKlar | sak=kruka n=1 |
| 9:30 | händelse | malKlart | id=krukaD1 del=Dag 1 – Kom igång nasta=saljKruka |
| 9:30 | bekräftelse | du | plats |
| 9:30 | kvittens | du | En kruka. Mamma skulle bli så stolt. Hon får inte veta. |
| 9:30 | väntar | du | En kruka. Mamma skulle bli så stolt. Hon får inte veta. |
| 9:30 | väntar | du | Ali gillar krukor. Han sa det själv. |
| 9:30 | MÅL |  | Sälj blomkrukan |
| 9:30 | sak | du | En kruka. Mamma skulle bli så stolt. Hon får inte veta. |
| 9:30 | röst | du | En kruka. Mamma skulle bli så stolt. Hon får inte veta. · STORY |
| 9:30 | målruta |  | Sälj blomkrukan |
| 9:31 | händelse | tagitUrPrint | sak=kruka n=1 |
| 9:35 | klar | du | En kruka. Mamma skulle bli så stolt. Hon får inte veta. |
| 9:35 | sak | du | Ali gillar krukor. Han sa det själv. |
| 9:35 | pil |  | Sälj blomkrukan |
| 9:35 | notis | tanke | 💭 Ali gillar krukor. Han sa det själv. |
| 9:35 | röst | du | Ali gillar krukor. Han sa det själv. · MÅL |
| 9:38 | klar | du | Ali gillar krukor. Han sa det själv. |
| 9:59 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 10:00 | händelse | salt | sak=kruka n=1 |
| 10:00 | aliSalt | ali | 70 |
| 10:00 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 10:02 | händelse | malKlart | id=saljKruka del=Dag 1 – Kom igång nasta=kopSang |
| 10:02 | bekräftelse | du | plats |
| 10:02 | väntar | du | Jag tänker inte sova på betongen i natt. Ali har en säng. Typ. |
| 10:02 | målruta |  | Köp sängen |
| 10:02 | MÅL |  | Köp sängen |
| 10:02 | sak | du | Jag tänker inte sova på betongen i natt. Ali har en säng. Typ. |
| 10:02 | pil |  | Köp sängen |
| 10:02 | notis | tanke | 💭 Jag tänker inte sova på betongen i natt. Ali har en säng. Typ. |
| 10:02 | röst | du | Jag tänker inte sova på betongen i natt. Ali har en säng. Typ. · MÅL |
| 10:06 | kvittens-bock |  | ✓ Sälj blomkrukan |
| 10:08 | väntar | bud | (tips) |
| 10:08 | klar | du | Jag tänker inte sova på betongen i natt. Ali har en säng. Typ. |
| 10:08 | sak | bud | (tips) |
| 10:09 | väntar | du | Jag har pengar nu. Hos Ali kan jag köpa uppgraderingar – bära mer eller printa snabbare. |
| 10:10 | paket |  | tanke |
| 10:10 | tanke | du | Det börjar bli mörkt. Jag kan inte sova på jorden. |
| 10:10 | väntar | du | Det börjar bli mörkt. Jag kan inte sova på jorden. |
| 10:10 | klar | bud | (tips) |
| 10:10 | sak | du | Jag har pengar nu. Hos Ali kan jag köpa uppgraderingar – bära mer eller printa snabbare. |
| 10:10 | röst | du | Jag har pengar nu. Hos Ali kan jag köpa uppgraderingar – bära mer eller printa snabbare. · MÅL |
| 10:17 | klar | du | Jag har pengar nu. Hos Ali kan jag köpa uppgraderingar – bära mer eller printa snabbare. |
| 10:20 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 10:21 | händelse | kopt | sak=sang |
| 10:21 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 10:21 | händelse | dialog | id=aliSang |
| 10:21 | röst | ali | Sov gott, min vän. · STORY |
| 10:21 | butiksbubbla | ali | Sov gott, min vän. |
| 10:22 | händelse | malKlart | id=kopSang del=Dag 1 – Kom igång nasta=printSang |
| 10:22 | bekräftelse | du | plats |
| 10:22 | struken | du | Det börjar bli mörkt. Jag kan inte sova på jorden. |
| 10:22 | väntar | du | En säng tar lång tid. Den är värd det. |
| 10:22 | målruta |  | Printa sängen |
| 10:23 | MÅL |  | Printa sängen |
| 10:23 | pil |  | Printa sängen |
| 10:23 | nick |  | nick:19 |
| 10:25 | sak | du | En säng tar lång tid. Den är värd det. |
| 10:25 | notis | tanke | 💭 En säng tar lång tid. Den är värd det. |
| 10:25 | röst | du | En säng tar lång tid. Den är värd det. · MÅL |
| 10:26 | kvittens-bock |  | ✓ Köp sängen |
| 10:29 | klar | du | En säng tar lång tid. Den är värd det. |
| 11:11 | upplåst | bara | grip |
| 11:11 | brott | UPPLÅST | grip (bara 3 av 3) |
| 11:11 | händelse | upplast | id=grip flask=bara |
| 11:11 | paket |  | tanke |
| 11:11 | tanke | du | Ett skräp i taget. Jag springer ihjäl mig. |
| 11:11 | väntar | du | Ett skräp i taget. Jag springer ihjäl mig. |
| 11:11 | sak | du | Ett skräp i taget. Jag springer ihjäl mig. |
| 11:11 | notis | tanke | 💭 Ett skräp i taget. Jag springer ihjäl mig. |
| 11:11 | röst | du | Ett skräp i taget. Jag springer ihjäl mig. · STORY |
| 11:16 | händelse | printStart | sak=sang |
| 11:16 | klar | du | Ett skräp i taget. Jag springer ihjäl mig. |
| 11:20 | toast | fel | Ingen ström – trampa cykeln |
| 11:23 | toast | fel | Slut på tråd – mal mer så fortsätter den |
| 11:23 | väntar | notis:Storebrors skrivare: Slut på tråd – mal  | Storebrors skrivare: Slut på tråd – mal mer så fortsätter den |
| 11:24 | sak | notis:Storebrors skrivare: Slut på tråd – mal  | Storebrors skrivare: Slut på tråd – mal mer så fortsätter den |
| 11:24 | notis | fel | Storebrors skrivare: Slut på tråd – mal mer så fortsätter den |
| 11:27 | klar | notis:Storebrors skrivare: Slut på tråd – mal  | Storebrors skrivare: Slut på tråd – mal mer så fortsätter den |
| 11:40 | tanke | du | Det glittrar där inne. Eller så är det bara mörkt. Jag måste dit. |
| 11:40 | väntar | du | Det glittrar där inne. Eller så är det bara mörkt. Jag måste dit. |
| 11:40 | sak | du | Det glittrar där inne. Eller så är det bara mörkt. Jag måste dit. |
| 11:40 | notis | tanke | 💭 Det glittrar där inne. Eller så är det bara mörkt. Jag måste dit. |
| 11:40 | röst | du | Det glittrar där inne. Eller så är det bara mörkt. Jag måste dit. · REAKTION |
| 11:47 | klar | du | Det glittrar där inne. Eller så är det bara mörkt. Jag måste dit. |
| 11:57 | händelse | printKlar | sak=sang n=1 |
| 11:58 | tanke | du | Sängen ska printas. |
| 11:58 | väntar | du | Sängen ska printas. |
| 11:58 | nick |  | paminn:19 |
| 12:00 | sak | du | Sängen ska printas. |
| 12:00 | notis | tanke | 💭 Sängen ska printas. |
| 12:00 | röst | du | Sängen ska printas. · REAKTION |
| 12:01 | händelse | tagitUrPrint | sak=sang n=1 |
| 12:01 | händelse | malKlart | id=printSang del=Dag 1 – Kom igång nasta=sov1 |
| 12:01 | bekräftelse | du | plats |
| 12:01 | kvittens | du | En säng. Jag printade en SÄNG. |
| 12:01 | väntar | du | En säng. Jag printade en SÄNG. |
| 12:01 | paket |  | lapp |
| 12:01 | väntar | du | Nitton år. Inget mer tjat. Gården är full av skräp. I morgon. |
| 12:01 | väntar | du | Sängen ska in i skjulet. Sen sover jag. |
| 12:01 | MÅL |  | Sängen i skjulet |
| 12:01 | klipps | du | Sängen ska printas. |
| 12:01 | klar | du | Sängen ska printas. |
| 12:02 | sak | du | En säng. Jag printade en SÄNG. |
| 12:02 | röst | du | En säng. Jag printade en SÄNG. · STORY |
| 12:03 | målruta |  | Sängen i skjulet |
| 12:06 | klar | du | En säng. Jag printade en SÄNG. |
| 12:06 | sak | du | Nitton år. Inget mer tjat. Gården är full av skräp. I morgon. |
| 12:06 | kvitto-visas | du | Nitton år. Inget mer tjat. Gården är full av skräp. I morgon. |
| 12:06 | kvallsrad | du | Nitton år. Inget mer tjat. Gården är full av skräp. I morgon. |
| 12:06 | klar | du | Nitton år. Inget mer tjat. Gården är full av skräp. I morgon. |
| 12:10 | sak | du | Sängen ska in i skjulet. Sen sover jag. |
| 12:10 | pil |  | Sängen i skjulet |
| 12:10 | notis | tanke | 💭 Sängen ska in i skjulet. Sen sover jag. |
| 12:10 | röst | du | Sängen ska in i skjulet. Sen sover jag. · MÅL |
| 12:10 | nick |  | nick:20 |
| 12:13 | klar | du | Sängen ska in i skjulet. Sen sover jag. |
| 12:23 | nattkort | du | 🌙 21 dagar kvar. God natt. zzz… i en riktig säng Nitton år. Inget mer tjat. Gården är full av skräp. I morgon. DAGENS PRINTAR Nyckelring × 8 Blomkruka × 1 Säng |

<details><summary>Botens handlingar dag 1</summary>

- 0:20 gå till brädhögen (3 m) (5 kr)
- 0:37 gå till cykeln vid vägen (2 m) (5 kr)
- 0:59 gå till rutan i linje 1 (13 m) (5 kr)
- 1:52 gå till cykeln (lyfter den) (13 m) (5 kr)
- 1:58 gå till cykelns plats (11 m) (5 kr)
- 2:21 gå till fel håll en bit (4 m) (5 kr)
- 2:23 gå till skrivaren (2 m) (5 kr)
- 2:25 printar Nyckelring (5 kr)
- 2:32 tar ut 1 st ur skrivaren (5 kr)
- 2:50 nybörjaren ser ingen pil – tittar runt (5 kr)
- 2:56 printar Nyckelring (sista av storebrors rulle) (5 kr)
- 3:39 nybörjaren ser ingen pil – tittar runt (5 kr)
- 3:45 gå till skrivaren (2 m) (5 kr)
- 3:46 tar ut 1 st ur skrivaren (5 kr)
- 3:47 gå till fel håll en bit (4 m) (5 kr)
- 3:58 gå till Ali (26 m) (5 kr)
- 3:58 öppnar Alis butik – sälja de två nyckelringarna (5 kr)
- 4:01 säljer hos Ali: +30 kr (35 kr)
- 4:19 nybörjaren ser ingen pil – tittar runt (35 kr)
- 4:23 öppnar Alis butik – köpa kvarnen (35 kr)
- 4:25 köper gammalkvarn för 30 kr (5 kr)
- 4:26 köpte kvarnen (5 kr)
- 4:55 gå till kvarnens ruta (28 m) (5 kr)
- 5:23 plockar 3 skräp på gården (bär max 3) (5 kr)
- 5:27 gå till kvarnen (9 m) (5 kr)
- 5:47 gå till cykeln (3 m) (5 kr)
- 5:48 gå till skrivaren (1 m) (5 kr)
- 5:49 printar Nyckelring (5 kr)
- 5:56 tar ut 1 st ur skrivaren (5 kr)
- 6:08 printar Nyckelring (5 kr)
- 6:10 tar ut 1 st ur skrivaren (5 kr)
- 6:11 printar Nyckelring (5 kr)
- 6:13 tar ut 1 st ur skrivaren (5 kr)
- 6:24 gå till Ali (27 m) (5 kr)
- 6:24 öppnar Alis butik – sälja nyckelringar (5 kr)
- 6:26 säljer hos Ali: +45 kr (50 kr)
- 6:35 panel: "Alis butik
50 kr
0 rullar
Jag " (50 kr)
- 6:54 gå till koppla powerbanken till cykeln (24 m) (50 kr)
- 7:13 nybörjaren ser ingen pil – tittar runt (50 kr)
- 7:25 gå till Ali (24 m) (50 kr)
- 7:25 öppnar Alis butik – köpa skräpgrip (50 kr)
- 7:27 köper grip för 50 kr (0 kr)
- 7:48 gå till skrivaren (25 m) (0 kr)
- 7:49 printar Skräpgrip (0 kr)
- 7:51 gå till cykeln (1 m) (0 kr)
- 8:03 plockar 3 skräp på gården (bär max 3) (0 kr)
- 8:10 gå till kvarnen (19 m) (0 kr)
- 8:15 gå till skrivaren (3 m) (0 kr)
- 8:15 tar ut 1 st ur skrivaren (0 kr)
- 8:20 tar på grip (0 kr)
- 8:20 tjänar pengar till väntar på flaskhalsen för kruka: 0/40 kr → printar nyckelring (15 kr) (0 kr)
- 8:22 printar Nyckelring (0 kr)
- 8:24 tar ut 1 st ur skrivaren (0 kr)
- 8:26 printar Nyckelring (0 kr)
- 8:28 tar ut 1 st ur skrivaren (0 kr)
- 8:30 printar Nyckelring (0 kr)
- 8:32 tar ut 1 st ur skrivaren (0 kr)
- 8:42 gå till Ali (28 m) (0 kr)
- 8:42 öppnar Alis butik – sälja (0 kr)
- 8:44 säljer hos Ali: +45 kr (45 kr)
- 9:04 öppnar Alis butik – köpa receptet blomkruka (65 kr)
- 9:06 köper kruka för 40 kr (25 kr)
- 9:25 gå till skrivaren (25 m) (25 kr)
- 9:26 printar Blomkruka (25 kr)
- 9:27 gå till cykeln (1 m) (25 kr)
- 9:31 tar ut 1 st ur skrivaren (25 kr)
- 9:46 nybörjaren ser ingen pil – tittar runt (25 kr)
- 9:59 gå till Ali (25 m) (25 kr)
- 9:59 öppnar Alis butik – sälja krukan (25 kr)
- 10:01 säljer hos Ali: +70 kr (95 kr)
- 10:20 öppnar Alis butik – köpa sängen (95 kr)
- 10:22 köper sang för 60 kr (35 kr)
- 10:50 gå till dit pilen pekar (30 m) (35 kr)
- 11:04 plockar 6 skräp på gården (bär max 6) (35 kr)
- 11:11 gå till kvarnen (21 m) (35 kr)
- 11:14 gå till skrivaren (1 m) (35 kr)
- 11:16 printar Säng (35 kr)
- 11:21 gå till cykeln (2 m) (35 kr)
- 11:44 plockar 6 skräp på gården (bär max 6) (35 kr)
- 11:55 gå till kvarnen (28 m) (35 kr)
- 12:01 gå till skrivaren (3 m) (35 kr)
- 12:01 tar ut 1 st ur skrivaren (35 kr)
- 12:20 gå till sängplatsen i skjulet (21 m) (35 kr)

</details>

## Dag 2

| Tid | Källa | Vem | Text |
|---|---|---|---|
| 12:23 | vara | ali | kruka |
| 12:23 | händelse | malKlart | id=sov1 del=Dag 1 – Kom igång nasta=kopMotor |
| 12:23 | bekräftelse | du | plats |
| 12:23 | MÅL |  | Spara till kvarnmotorn · 35 / 50 kr |
| 0:01 | väntar | ali | Ali här. Såg skylten. Stavningen är rätt. Det är mer än många. |
| 0:01 | dagbok | du | Första natten i en riktig säng. Jag printade den själv. |
| 0:01 | händelse | dagenBorjar | dag=2 |
| 0:01 | meddelande | du | 20 dagar till jul. Vevar jag för hand hinner jag inget annat. |
| 0:01 | dagbokkort | du | Kvarnmotorn. · 20 dagar till jul. Vevar jag för hand hinner jag inget annat. |
| 0:01 | röst | du | 20 dagar till jul. Kvarnmotorn. Vevar jag för hand hinner jag inget annat. · STORY |
| 0:11 | väntar | notis:morgon | Ali vill ha idag: Blomkruka · +50 % |
| 0:11 | händelse | morgonkortStangt | dag=2 |
| 0:11 | väntar | ali | Ali här. Såg skylten. Stavningen är rätt. Det är mer än många. |
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
| 0:26 | klar | notis:morgon | Ali vill ha idag: Blomkruka · +50 % |
| 0:29 | händelse | printStart | sak=kruka |
| 0:31 | händelse | printKlar | sak=kruka n=2 |
| 0:32 | händelse | tagitUrPrint | sak=kruka n=1 |
| 0:41 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 0:41 | röst | ali | Min fru säger att jag bor här. Hon har rätt. · STORY |
| 0:41 | butiksbubbla | ali | Min fru säger att jag bor här. Hon har rätt. |
| 0:43 | händelse | salt | sak=kruka n=1 |
| 0:43 | aliSalt | ali | 105 |
| 0:43 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 0:43 | butiksbubbla | ali | Precis vad jag ville ha idag. 105 kr – med extra. |
| 0:43 | väntar | ali | Precis det jag ville ha idag, min vän. |
| 0:43 | upplåst | mala | kvarnmotor |
| 0:43 | brott | UPPLÅST | kvarnmotor (mala 7 av 6, sparat ihop) |
| 0:43 | händelse | upplast | id=kvarnmotor flask=mala |
| 0:43 | paket |  | sms |
| 0:43 | väntar | ali | Ali här. En motor? Jag har en. Från en gammal tvättmaskin. Den centrifugerar fortfarande om man ber snällt. |
| 0:46 | sak | ali | Precis det jag ville ha idag, min vän. |
| 0:46 | röst | ali | Precis det jag ville ha idag, min vän. · STORY |
| 0:49 | väntar | foto | Egen säng |
| 0:49 | paket |  | tanke |
| 0:49 | tanke | du | Tänk att jag ska få sova i min egen säng. |
| 0:49 | väntar | du | Tänk att jag ska få sova i min egen säng. |
| 0:52 | klar | ali | Precis det jag ville ha idag, min vän. |
| 0:54 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 0:56 | struken | info:guld | 3D-modell köpt – printa kvarnmotor |
| 0:56 | händelse | kopt | sak=kvarnmotor |
| 0:56 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 0:56 | struken | ali | Ali här. En motor? Jag har en. Från en gammal tvättmaskin. Den centrifugerar fortfarande om man ber snällt. |
| 0:57 | händelse | malKlart | id=kopMotor del=Dag 2 – Tippen bredvid nasta=monteraMotor |
| 0:57 | bekräftelse | du | plats |
| 0:57 | väntar | du | Motorn ska sitta där veven sitter. Jag printar den först. |
| 0:57 | målruta |  | Printa kvarnmotorn till kvarnen |
| 0:57 | MÅL |  | Printa kvarnmotorn till kvarnen |
| 0:57 | pil |  | Printa kvarnmotorn till kvarnen |
| 0:57 | sak | du | Motorn ska sitta där veven sitter. Jag printar den först. |
| 0:57 | notis | tanke | 💭 Motorn ska sitta där veven sitter. Jag printar den först. |
| 0:57 | röst | du | Motorn ska sitta där veven sitter. Jag printar den först. · MÅL |
| 0:57 | nick |  | nick:22 |
| 1:01 | kvittens-bock |  | ✓ Köp kvarnmotorn |
| 1:03 | klar | du | Motorn ska sitta där veven sitter. Jag printar den först. |
| 1:08 | lapp | 📔 Dagbok | En stor bil tippade en ny last. Allt det skräpet – och grinden är låst. |
| 1:08 | okänt ord bytt | du | Sopbilen tippade en ny last. Allt det skräpet – och grinden är låst. |
| 1:08 | dagbokrad | du | En stor bil tippade en ny last. Allt det skräpet – och grinden är låst. |
| 1:08 | väntar | notis:En stor bil tippade en ny last. Allt det | En stor bil tippade en ny last. Allt det skräpet – och grinden är låst. |
| 1:08 | sak | notis:En stor bil tippade en ny last. Allt det | En stor bil tippade en ny last. Allt det skräpet – och grinden är låst. |
| 1:08 | notis | dagbok | En stor bil tippade en ny last. Allt det skräpet – och grinden är låst. |
| 1:10 | klar | notis:En stor bil tippade en ny last. Allt det | En stor bil tippade en ny last. Allt det skräpet – och grinden är låst. |
| 1:12 | struken | ali | Ali här. Såg skylten. Stavningen är rätt. Det är mer än många. |
| 1:22 | sak | foto | Egen säng |
| 1:22 | foto | du | Egen säng |
| 1:25 | klar | foto | Egen säng |
| 1:26 | händelse | printStart | sak=byggsats:kvarnmotor |
| 1:27 | toast | fel | Ingen ström – trampa cykeln |
| 1:29 | händelse | printKlar | sak=byggsats:kvarnmotor n=1 |
| 1:29 | tanke | du | Kvarnmotorn ska skruvas fast på kvarnen. |
| 1:29 | väntar | du | Kvarnmotorn ska skruvas fast på kvarnen. |
| 1:29 | händelse | tagitUrPrint | sak=byggsats:kvarnmotor n=1 |
| 1:29 | paket |  | sms |
| 1:29 | väntar | ali | Ali här. Ännu en ritning som blev på riktigt: Kvarnmotor. Semesterkassan växer. Livet växer. |
| 1:29 | sak | du | Kvarnmotorn ska skruvas fast på kvarnen. |
| 1:29 | notis | tanke | 💭 Kvarnmotorn ska skruvas fast på kvarnen. |
| 1:29 | röst | du | Kvarnmotorn ska skruvas fast på kvarnen. · REAKTION |
| 1:34 | klar | du | Kvarnmotorn ska skruvas fast på kvarnen. |
| 1:36 | sak | ali | Ali här. Ännu en ritning som blev på riktigt: Kvarnmotor. Semesterkassan växer. Livet växer. |
| 1:36 | sms | ali | Ali här. Ännu en ritning som blev på riktigt: Kvarnmotor. Semesterkassan växer. Livet växer. |
| 1:36 | sms-bubbla | ali | Ali här. Ännu en ritning som blev på riktigt: Kvarnmotor. Semesterkassan växer. Livet växer. |
| 1:36 | röst | ali | Ali här. Ännu en ritning som blev på riktigt: Kvarnmotor. Semesterkassan växer. Livet växer. · REAKTION |
| 1:43 | tanke | du | Motorn sitter där veven satt – nu mal kvarnen själv. |
| 1:43 | väntar | du | Motorn sitter där veven satt – nu mal kvarnen själv. |
| 1:43 | händelse | monterat | sak=kvarnmotor |
| 1:43 | paket |  | tanke |
| 1:43 | tanke | du | Motorn sitter där veven satt. Mina armar tackar. |
| 1:43 | struken | du | Motorn sitter där veven satt – nu mal kvarnen själv. |
| 1:43 | väntar | du | Motorn sitter där veven satt. Mina armar tackar. |
| 1:43 | monterat | du | byggsats:kvarnmotor |
| 1:43 | händelse | monterat | sak=kvarnmotor |
| 1:43 | händelse | malKlart | id=monteraMotor del=Dag 2 – Tippen bredvid nasta=n1-stada-klart-garden |
| 1:43 | bekräftelse | du | plats |
| 1:43 | struken | du | Motorn sitter där veven satt. Mina armar tackar. |
| 1:43 | väntar | du | Gården är full av skräp. Jag börjar vid skjulet. |
| 1:43 | MÅL |  | Städa gården |
| 1:46 | målruta |  | Städa gården |
| 1:47 | klar | ali | Ali här. Ännu en ritning som blev på riktigt: Kvarnmotor. Semesterkassan växer. Livet växer. |
| 1:47 | sak | du | Gården är full av skräp. Jag börjar vid skjulet. |
| 1:47 | pil |  | Städa gården |
| 1:47 | notis | tanke | 💭 Gården är full av skräp. Jag börjar vid skjulet. |
| 1:47 | röst | du | Gården är full av skräp. Jag börjar vid skjulet. · MÅL |
| 1:47 | kvittens-bock |  | ✓ Printa kvarnmotorn till kvarnen |
| 1:47 | nick |  | nick:23 |
| 1:53 | klar | du | Gården är full av skräp. Jag börjar vid skjulet. |
| 2:01 | sak | du | Tänk att jag ska få sova i min egen säng. |
| 2:01 | notis | tanke | 💭 Tänk att jag ska få sova i min egen säng. |
| 2:01 | röst | du | Tänk att jag ska få sova i min egen säng. · STORY |
| 2:05 | klar | du | Tänk att jag ska få sova i min egen säng. |
| 2:25 | upplåst | skrivare | rullstall |
| 2:25 | brott | UPPLÅST | rullstall (skrivare 136 av 60) |
| 2:25 | händelse | upplast | id=rullstall flask=skrivare |
| 2:25 | paket |  | tanke → sms |
| 2:25 | tanke | du | Kvarnen står och väntar för att hållaren är full. Om den rymde fler rullar kunde den mala hela tiden. |
| 2:25 | väntar | du | Kvarnen står och väntar för att hållaren är full. Om den rymde fler rullar kunde den mala hela tiden. |
| 2:25 | väntar | ali | Ali här. Rullställ. Fyra rullar i stället för en. Har ett på hyllan. |
| 2:25 | sak | du | Kvarnen står och väntar för att hållaren är full. Om den rymde fler rullar kunde den mala hela tiden. |
| 2:25 | notis | tanke | 💭 Kvarnen står och väntar för att hållaren är full. Om den rymde fler rullar kunde den mala hela tiden. |
| 2:25 | röst | du | Kvarnen står och väntar för att hållaren är full. Om den rymde fler rullar kunde den mala hela tiden. · STORY |
| 2:32 | klar | du | Kvarnen står och väntar för att hållaren är full. Om den rymde fler rullar kunde den mala hela tiden. |
| 2:37 | väntar | mamma | Har du frusit än? |
| 2:39 | väntar | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått generator. Vi tar en låt på det. Den här är till dig, Gunnar. |
| 2:39 | radio | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått generator. Vi tar en låt på det. Den här är till dig, Gunnar. |
| 2:39 | skratt | du | Radio-Kjelle |
| 2:42 | sak | ali | Ali här. Rullställ. Fyra rullar i stället för en. Har ett på hyllan. |
| 2:42 | sms | ali | Ali här. Rullställ. Fyra rullar i stället för en. Har ett på hyllan. |
| 2:42 | sms-bubbla | ali | Ali här. Rullställ. Fyra rullar i stället för en. Har ett på hyllan. |
| 2:42 | röst | ali | Ali här. Rullställ. Fyra rullar i stället för en. Har ett på hyllan. · STORY |
| 2:48 | skratt | du | falsk tuta |
| 2:48 | klar | ali | Ali här. Rullställ. Fyra rullar i stället för en. Har ett på hyllan. |
| 2:49 | händelse | malKlart | id=n1-stada-klart-garden del=Dag 2 – Tippen bredvid nasta=kopSack |
| 2:49 | bekräftelse | du | plats |
| 2:49 | lapp | 📔 Dagbok | Gården är STÄDAD, av mig, frivilligt. Mamma skulle aldrig tro det. |
| 2:49 | dagbokrad | du | Gården är STÄDAD, av mig, frivilligt. Mamma skulle aldrig tro det. |
| 2:49 | väntar | notis:Gården är STÄDAD, av mig, frivilligt. Ma | Gården är STÄDAD, av mig, frivilligt. Mamma skulle aldrig tro det. |
| 2:49 | väntar | du | En stor bil saktar in vid skjulet. Jag går dit. |
| 2:49 | MÅL |  | Gå till bilen vid skjulet |
| 2:49 | sak | notis:Gården är STÄDAD, av mig, frivilligt. Ma | Gården är STÄDAD, av mig, frivilligt. Mamma skulle aldrig tro det. |
| 2:49 | notis | dagbok | Gården är STÄDAD, av mig, frivilligt. Mamma skulle aldrig tro det. |
| 2:51 | klar | notis:Gården är STÄDAD, av mig, frivilligt. Ma | Gården är STÄDAD, av mig, frivilligt. Mamma skulle aldrig tro det. |
| 2:51 | målruta |  | Gå till bilen vid skjulet |
| 2:53 | sak | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått generator. Vi tar en låt på det. Den här är till dig, Gunnar. |
| 2:53 | notis |  | 📻 Radio Tippen: Radio Tippen, Kjelle här. Skjulet vid tippen har fått generator. Vi tar en låt på det. Den här är till dig, Gunnar. |
| 2:53 | röst | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått generator. Vi tar en låt på det. Den här är till dig, Gunnar. · REAKTION |
| 3:03 | tanke | du | Sopbilen tippade en ny last på soptippen! |
| 3:03 | okänt ord bytt | du | Sopbilen tippade en ny last på soptippen! |
| 3:03 | väntar | du | Sopbilen tippade en ny last på soptippen! |
| 3:03 | klar | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått generator. Vi tar en låt på det. Den här är till dig, Gunnar. |
| 3:03 | sak | du | Sopbilen tippade en ny last på soptippen! |
| 3:03 | notis | tanke | 💭 En stor bil tippade en ny last på soptippen! |
| 3:03 | röst | du | En stor bil tippade en ny last på soptippen! · REAKTION |
| 3:07 | klar | du | Sopbilen tippade en ny last på soptippen! |
| 3:09 | sak | du | En stor bil saktar in vid skjulet. Jag går dit. |
| 3:09 | pil |  | Gå till bilen vid skjulet |
| 3:09 | notis | tanke | 💭 En stor bil saktar in vid skjulet. Jag går dit. |
| 3:09 | röst | du | En stor bil saktar in vid skjulet. Jag går dit. · MÅL |
| 3:10 | väntar | värld:TUUT! Tjena! | TUUT! Tjena! |
| 3:12 | klar | du | En stor bil saktar in vid skjulet. Jag går dit. |
| 3:23 | scenInfo | rolf | inkorg 73: sopbilen kommer till skjulet |
| 3:25 | upplåst | skrivare | trim_skrivare |
| 3:25 | brott | UPPLÅST | trim_skrivare (skrivare 60 av 60) |
| 3:25 | händelse | upplast | id=trim_skrivare flask=skrivare |
| 3:25 | paket |  | sms |
| 3:25 | väntar | ali | Ali här. Skrivartrim. Jag skruvade på min egen skrivare i natt. Den går fortare nu. Nästan för fort. |
| 3:30 | struken | värld:TUUT! Tjena! | TUUT! Tjena! |
| 3:33 | skratt | du | falsk tuta |
| 3:34 | väntar | rolf | Tjena. Rolf. Ja kör sopbilen. Tippen där borta ä min. Har vart min sen -87. |
| 3:34 | sak | rolf | Tjena. Rolf. Ja kör sopbilen. Tippen där borta ä min. Har vart min sen -87. |
| 3:34 | händelse | dialog | id=rolfHej |
| 3:34 | röst | rolf | Tjena. Rolf. Ja kör sopbilen. Tippen där borta ä min. Har vart min sen -87. · REAKTION |
| 3:35 | bubbla |  | Tjena. Rolf. Ja kör sopbilen. Tippen där borta ä min. Har vart min sen -87. |
| 3:42 | väntar | du | Tornet är fullt. Skrivaren får jobba ikapp. |
| 3:42 | väntar | info:fel | Tornet är fullt. Skrivaren får jobba ikapp. |
| 3:42 | kvitto-visas | info:fel | Tornet är fullt. Skrivaren får jobba ikapp. |
| 3:42 | toast | fel | Tornet är fullt. Skrivaren får jobba ikapp. |
| 3:48 | klar | rolf | Tjena. Rolf. Ja kör sopbilen. Tippen där borta ä min. Har vart min sen -87. |
| 3:48 | sak | du | Tornet är fullt. Skrivaren får jobba ikapp. |
| 3:48 | röst | du | Tornet är fullt. Skrivaren får jobba ikapp. · REAKTION |
| 3:52 | klar | du | Tornet är fullt. Skrivaren får jobba ikapp. |
| 3:52 | väntar | rolf | Du har städat hela gården. Ingen gör så nuförtin. |
| 3:52 | sak | rolf | Du har städat hela gården. Ingen gör så nuförtin. |
| 3:52 | händelse | dialog | id=rolfGarden |
| 3:52 | röst | rolf | Du har städat hela gården. Ingen gör så nuförtin. · REAKTION |
| 3:53 | bubbla |  | Du har städat hela gården. Ingen gör så nuförtin. |
| 3:59 | klar | rolf | Du har städat hela gården. Ingen gör så nuförtin. |
| 3:59 | väntar | rolf | Öj… ä dä du som printar grejer? Dom där nyckelringarna? |
| 3:59 | sak | rolf | Öj… ä dä du som printar grejer? Dom där nyckelringarna? |
| 3:59 | händelse | dialog | id=rolfPrintar |
| 3:59 | röst | rolf | Öj… ä dä du som printar grejer? Dom där nyckelringarna? · REAKTION |
| 4:00 | bubbla |  | Öj… ä dä du som printar grejer? Dom där nyckelringarna? |
| 4:01 | brott | DOLD SKYLT | ALIS MARKNAD från 7 m: skymd av BoxGeometry 1.2 m bort (9.1, 1.8, 23.0) |
| 4:06 | klar | rolf | Öj… ä dä du som printar grejer? Dom där nyckelringarna? |
| 4:06 | väntar | du | Ja. Av skräp. |
| 4:06 | sak | du | Ja. Av skräp. |
| 4:06 | notis | tanke | Ja. Av skräp. |
| 4:06 | händelse | dialog | id=duAvSkrap |
| 4:06 | röst | du | Ja. Av skräp. · REAKTION |
| 4:11 | väntar | mamma | Har du frusit än? |
| 4:11 | klar | du | Ja. Av skräp. |
| 4:11 | väntar | rolf | Hm. Ja kanske har nåt åt dej. Kolla postlådan vid grinden. |
| 4:11 | sak | rolf | Hm. Ja kanske har nåt åt dej. Kolla postlådan vid grinden. |
| 4:11 | bubbla |  | Hm. Ja kanske har nåt åt dej. Kolla postlådan vid grinden. |
| 4:11 | händelse | dialog | id=rolfPostlada |
| 4:11 | röst | rolf | Hm. Ja kanske har nåt åt dej. Kolla postlådan vid grinden. · REAKTION |
| 4:19 | klar | rolf | Hm. Ja kanske har nåt åt dej. Kolla postlådan vid grinden. |
| 4:22 | sopsack | rolf | Rolf kastade ut säckarna vid skjulet |
| 4:27 | sak | ali | Ali här. Skrivartrim. Jag skruvade på min egen skrivare i natt. Den går fortare nu. Nästan för fort. |
| 4:27 | sms | ali | Ali här. Skrivartrim. Jag skruvade på min egen skrivare i natt. Den går fortare nu. Nästan för fort. |
| 4:27 | sms-bubbla | ali | Ali här. Skrivartrim. Jag skruvade på min egen skrivare i natt. Den går fortare nu. Nästan för fort. |
| 4:27 | röst | ali | Ali här. Skrivartrim. Jag skruvade på min egen skrivare i natt. Den går fortare nu. Nästan för fort. · STORY |
| 4:31 | hjälp | kontroll | Klick: Klicka för att ta på dig den |
| 4:40 | klar | ali | Ali här. Skrivartrim. Jag skruvade på min egen skrivare i natt. Den går fortare nu. Nästan för fort. |
| 4:42 | tanke | du | Sopsäcken är över axeln! Nu bär jag 10 skräp. |
| 4:42 | väntar | du | Sopsäcken är över axeln! Nu bär jag 10 skräp. |
| 4:42 | tog på | du | byggsats:korg |
| 4:42 | händelse | monterat | sak=korg |
| 4:42 | sak | du | Sopsäcken är över axeln! Nu bär jag 10 skräp. |
| 4:42 | notis | tanke | 💭 Sopsäcken är över axeln! Nu bär jag 10 skräp. |
| 4:42 | röst | du | Sopsäcken är över axeln! Nu bär jag 10 skräp. · REAKTION |
| 4:42 | händelse | malKlart | id=kopSack del=Dag 2 – Tippen bredvid nasta=rolf0-brev |
| 4:42 | bekräftelse | du | plats |
| 4:42 | väntar | du | Det ligger ett brev i postlådan vid grinden. Det läser jag. |
| 4:42 | MÅL |  | Möt sopbilen vid grinden |
| 4:45 | målruta |  | Möt sopbilen vid grinden |
| 4:46 | klar | du | Sopsäcken är över axeln! Nu bär jag 10 skräp. |
| 4:46 | kvittens-bock |  | ✓ Ta sopsäckarna |
| 4:48 | sak | du | Det ligger ett brev i postlådan vid grinden. Det läser jag. |
| 4:48 | pil |  | Möt sopbilen vid grinden |
| 4:48 | notis | tanke | 💭 Det ligger ett brev i postlådan vid grinden. Det läser jag. |
| 4:48 | röst | du | Det ligger ett brev i postlådan vid grinden. Det läser jag. · MÅL |
| 4:51 | skratt | du | falsk tuta |
| 4:51 | paket |  | tanke → ge |
| 4:51 | tanke | du | Flaggan är uppe. Rolf har lämnat något. |
| 4:51 | väntar | du | Flaggan är uppe. Rolf har lämnat något. |
| 4:51 | väntar |  | (läget ändras) |
| 4:55 | klar | du | Det ligger ett brev i postlådan vid grinden. Det läser jag. |
| 4:57 | brott | OKÄND SAK I BESTÄMD FORM | "Sopsäcken" innan saken presenterats: "Sopsäcken är över axeln! Nu bär jag 10 skräp." |
| 5:03 | sak | du | Flaggan är uppe. Rolf har lämnat något. |
| 5:03 | notis | tanke | 💭 Flaggan är uppe. Rolf har lämnat något. |
| 5:03 | röst | du | Flaggan är uppe. Rolf har lämnat något. · STORY |
| 5:06 | klar | du | Flaggan är uppe. Rolf har lämnat något. |
| 5:16 | sak |  | (läget ändras) |
| 5:16 | brev | rolf | rolf:0 |
| 5:16 | klar |  | (läget ändras) |
| 5:16 | väntar | rolf | Såg att du printar grejer. Kan du göra en sån hä? Kall öl ä viktigt. Ja ha ritat själv. Ungefär så hä. Ja ä int dum. /Rolf​ |
| 5:16 | paket |  | ge |
| 5:16 | väntar |  | (läget ändras) |
| 5:16 | paket |  | tanke |
| 5:16 | tanke | du | Rolf har ritat själv. Den är… ungefär. Jag fattar vad han menar. |
| 5:16 | väntar | du | Rolf har ritat själv. Den är… ungefär. Jag fattar vad han menar. |
| 5:16 | händelse | malKlart | id=rolf0-brev del=Dag 2 – Tippen bredvid nasta=rolf0-printa |
| 5:16 | bekräftelse | du | plats |
| 5:16 | väntar | du | Rolf vill ha en ölhållare. Den printar jag. |
| 5:17 | MÅL |  | Printa ölhållare med kylklamp |
| 5:17 | sak | rolf | Såg att du printar grejer. Kan du göra en sån hä? Kall öl ä viktigt. Ja ha ritat själv. Ungefär så hä. Ja ä int dum. /Rolf​ |
| 5:17 | lapp | Brev från Rolf | Såg att du printar grejer. Kan du göra en sån hä? Kall öl ä viktigt. Ja ha ritat själv. Ungefär så hä. Ja ä int dum. /Rolf​ |
| 5:17 | röst | rolf | Såg att du printar grejer. Kan du göra en sån hä? Kall öl ä viktigt. Ja ha ritat själv. Ungefär så hä. Ja ä int dum. /Rolf​ · STORY |
| 5:17 | kvitto-visas |  | (läget ändras) |
| 5:17 | sak |  | (läget ändras) |
| 5:19 | målruta |  | Printa ölhållare med kylklamp |
| 5:21 | händelse | printStart | sak=olhallare |
| 5:21 | händelse | malKlart | id=rolf0-printa del=Dag 2 – Tippen bredvid nasta=rolf0-ge |
| 5:21 | bekräftelse | du | plats |
| 5:21 | struken | du | Rolf har ritat själv. Den är… ungefär. Jag fattar vad han menar. |
| 5:21 | väntar | du | Ölhållaren är klar. Den lägger jag i Rolfs postlåda. |
| 5:22 | MÅL |  | Ge Rolf ölhållare med kylklamp |
| 5:24 | målruta |  | Ge Rolf ölhållare med kylklamp |
| 5:24 | händelse | printKlar | sak=olhallare n=1 |
| 5:25 | händelse | tagitUrPrint | sak=olhallare n=1 |
| 5:25 | kvittens-bock |  | ✓ Printa ölhållare med kylklamp |
| 5:31 | klar | rolf | Såg att du printar grejer. Kan du göra en sån hä? Kall öl ä viktigt. Ja ha ritat själv. Ungefär så hä. Ja ä int dum. /Rolf​ |
| 5:31 | händelse | brevLast | id=rolf:0 |
| 5:31 | struken | du | Rolf vill ha en ölhållare. Den printar jag. |
| 5:31 | sak | du | Ölhållaren är klar. Den lägger jag i Rolfs postlåda. |
| 5:31 | pil |  | Ge Rolf ölhållare med kylklamp |
| 5:31 | notis | tanke | 💭 Ölhållaren är klar. Den lägger jag i Rolfs postlåda. |
| 5:31 | röst | du | Ölhållaren är klar. Den lägger jag i Rolfs postlåda. · MÅL |
| 5:37 | klar | du | Ölhållaren är klar. Den lägger jag i Rolfs postlåda. |
| 5:39 | struken | mamma | Har du frusit än? |
| 5:52 | händelse | lagtIPostlada | sak=olhallare rolf=0 jobb=false |
| 5:52 | paket |  | tanke |
| 5:52 | tanke | du | Flaggan uppe. Nu får Rolf hämta den. |
| 5:52 | väntar | du | Flaggan uppe. Nu får Rolf hämta den. |
| 5:52 | sak | du | Flaggan uppe. Nu får Rolf hämta den. |
| 5:52 | notis | tanke | 💭 Flaggan uppe. Nu får Rolf hämta den. |
| 5:52 | röst | du | Flaggan uppe. Nu får Rolf hämta den. · REAKTION |
| 5:52 | händelse | malKlart | id=rolf0-ge del=Dag 2 – Tippen bredvid nasta=vindsnurra |
| 5:52 | bekräftelse | du | plats |
| 5:52 | väntar | du | En vindsnurra på skjulets tak. Då blir det ström när det blåser. |
| 5:52 | MÅL |  | Spara till vindsnurran · 90 / 133 kr |
| 5:55 | målruta |  | Spara till vindsnurran · 90 / 133 kr |
| 5:56 | kvittens-bock |  | ✓ Ge Rolf ölhållare med kylklamp |
| 5:57 | klar | du | Flaggan uppe. Nu får Rolf hämta den. |
| 5:58 | sak | du | En vindsnurra på skjulets tak. Då blir det ström när det blåser. |
| 5:58 | pil |  | Spara till vindsnurran · 90 / 133 kr |
| 5:58 | notis | tanke | 💭 En vindsnurra på skjulets tak. Då blir det ström när det blåser. |
| 5:58 | röst | du | En vindsnurra på skjulets tak. Då blir det ström när det blåser. · MÅL |
| 6:03 | tanke | du | Rolf har nyckeln… Jag undrar vad som finns där inne. |
| 6:03 | väntar | du | Rolf har nyckeln… Jag undrar vad som finns där inne. |
| 6:06 | klar | du | En vindsnurra på skjulets tak. Då blir det ström när det blåser. |
| 6:14 | sak | du | Rolf har nyckeln… Jag undrar vad som finns där inne. |
| 6:14 | notis | tanke | 💭 Rolf har nyckeln… Jag undrar vad som finns där inne. |
| 6:14 | röst | du | Rolf har nyckeln… Jag undrar vad som finns där inne. · REAKTION |
| 6:18 | klar | du | Rolf har nyckeln… Jag undrar vad som finns där inne. |
| 6:19 | händelse | printStart | sak=kruka |
| 6:20 | toast | fel | Ingen ström – trampa cykeln |
| 6:23 | händelse | printKlar | sak=kruka n=3 |
| 6:23 | paket |  | tanke |
| 6:23 | tanke | du | Jaha. En kalsong. Använd. |
| 6:23 | väntar | du | Jaha. En kalsong. Använd. |
| 6:23 | skratt | du | kvarnen spottar |
| 6:24 | händelse | tagitUrPrint | sak=kruka n=1 |
| 6:27 | sak | du | Jaha. En kalsong. Använd. |
| 6:27 | notis | tanke | 💭 Jaha. En kalsong. Använd. |
| 6:27 | röst | du | Jaha. En kalsong. Använd. · REAKTION |
| 6:29 | hjälp | kontroll | R: Vrid innan du ställer ner |
| 6:33 | klar | du | Jaha. En kalsong. Använd. |
| 6:35 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 6:35 | röst | ali | Rolf gav mig en kanna. Som min farmors. Jag ritade en sak åt honom. Säg inget, han gråter lätt. · STORY |
| 6:35 | butiksbubbla | ali | Rolf gav mig en kanna. Som min farmors. Jag ritade en sak åt honom. Säg inget, han gråter lätt. |
| 6:36 | händelse | salt | sak=kruka n=1 |
| 6:36 | aliSalt | ali | 105 |
| 6:36 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 6:37 | skratt | du | falsk tuta |
| 6:37 | upplåst | trampa | vindsnurra |
| 6:37 | brott | UPPLÅST | vindsnurra (trampa 22 av 6, sparat ihop) |
| 6:37 | händelse | upplast | id=vindsnurra flask=trampa |
| 6:37 | paket |  | sms |
| 6:37 | väntar | ali | Ali här. Vindsnurra till cykeln. Vinden trampar åt dig. Den är lat, men den jobbar gratis. |
| 6:45 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 6:47 | struken | info:guld | 3D-modell köpt – printa vindsnurra till skjultaket |
| 6:47 | händelse | kopt | sak=vindsnurra |
| 6:47 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 6:47 | struken | ali | Ali här. Vindsnurra till cykeln. Vinden trampar åt dig. Den är lat, men den jobbar gratis. |
| 6:48 | väntar | ali | Sålt nåt idag? Jag köper. |
| 6:54 | paket |  | tanke |
| 6:54 | tanke | du | Jaha, Rolf har hämtat en ölhållare med kylklamp. |
| 6:54 | väntar | du | Jaha, Rolf har hämtat en ölhållare med kylklamp. |
| 6:54 | sak | du | Jaha, Rolf har hämtat en ölhållare med kylklamp. |
| 6:54 | notis | tanke | 💭 Jaha, Rolf har hämtat en ölhållare med kylklamp. |
| 6:54 | röst | du | Jaha, Rolf har hämtat en ölhållare med kylklamp. · REAKTION |
| 6:59 | händelse | printStart | sak=byggsats:vindsnurra |
| 7:00 | klar | du | Jaha, Rolf har hämtat en ölhållare med kylklamp. |
| 7:04 | händelse | printKlar | sak=byggsats:vindsnurra n=1 |
| 7:04 | tanke | du | Vindsnurran ska upp på skjulets tak. |
| 7:04 | väntar | du | Vindsnurran ska upp på skjulets tak. |
| 7:04 | händelse | tagitUrPrint | sak=byggsats:vindsnurra n=1 |
| 7:04 | sak | du | Vindsnurran ska upp på skjulets tak. |
| 7:04 | notis | tanke | 💭 Vindsnurran ska upp på skjulets tak. |
| 7:04 | röst | du | Vindsnurran ska upp på skjulets tak. · REAKTION |
| 7:10 | klar | du | Vindsnurran ska upp på skjulets tak. |
| 7:12 | struken | ali | Sålt nåt idag? Jag köper. |
| 7:20 | händelse | placerat | sak=vindsnurra |
| 7:20 | tanke | du | Vindsnurran sitter på taket – den trampar cykeln åt mig när det blåser |
| 7:20 | väntar | du | Vindsnurran sitter på taket – den trampar cykeln åt mig när det blåser |
| 7:20 | monterat | du | byggsats:vindsnurra |
| 7:20 | händelse | monterat | sak=vindsnurra |
| 7:20 | sak | du | Vindsnurran sitter på taket – den trampar cykeln åt mig när det blåser |
| 7:20 | notis | tanke | 💭 Vindsnurran sitter på taket – den trampar cykeln åt mig när det blåser |
| 7:20 | röst | du | Vindsnurran sitter på taket – den trampar cykeln åt mig när det blåser · REAKTION |
| 7:20 | händelse | malKlart | id=vindsnurra del=Dag 2 – Tippen bredvid nasta=n1-bygg-dorr-skjulet |
| 7:20 | bekräftelse | du | plats |
| 7:20 | kvittens | du | Den snurrar! Långsamt. Men den snurrar. |
| 7:20 | väntar | du | Den snurrar! Långsamt. Men den snurrar. |
| 7:20 | väntar | du | Det drar från dörrhålet. En dörr kan jag printa. |
| 7:20 | MÅL |  | Bygg en dörr till skjulet |
| 7:22 | målruta |  | Bygg en dörr till skjulet |
| 7:26 | klar | du | Vindsnurran sitter på taket – den trampar cykeln åt mig när det blåser |
| 7:26 | sak | du | Den snurrar! Långsamt. Men den snurrar. |
| 7:26 | röst | du | Den snurrar! Långsamt. Men den snurrar. · STORY |
| 7:29 | klar | du | Den snurrar! Långsamt. Men den snurrar. |
| 7:29 | sak | du | Det drar från dörrhålet. En dörr kan jag printa. |
| 7:29 | pil |  | Bygg en dörr till skjulet |
| 7:29 | notis | tanke | 💭 Det drar från dörrhålet. En dörr kan jag printa. |
| 7:29 | röst | du | Det drar från dörrhålet. En dörr kan jag printa. · MÅL |
| 7:30 | nick |  | nick:29 |
| 7:34 | klar | du | Det drar från dörrhålet. En dörr kan jag printa. |
| 7:51 | händelse | printStart | sak=kruka |
| 7:53 | händelse | printKlar | sak=kruka n=4 |
| 7:54 | händelse | tagitUrPrint | sak=kruka n=1 |
| 7:59 | hjälp | kontroll | R: Vrid innan du ställer ner |
| 8:04 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 8:05 | händelse | salt | sak=kruka n=1 |
| 8:05 | aliSalt | ali | 105 |
| 8:05 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 8:07 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 8:08 | struken | info:guld | 3D-modell köpt – printa dörr |
| 8:08 | händelse | kopt | sak=dorr |
| 8:08 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 8:21 | händelse | printStart | sak=byggsats:dorr |
| 8:24 | toast | bra | Del 1 av 2 klar |
| 8:24 | väntar | notis:Storebrors skrivare: Del 1 av 2 klar | Storebrors skrivare: Del 1 av 2 klar |
| 8:24 | sak | notis:Storebrors skrivare: Del 1 av 2 klar | Storebrors skrivare: Del 1 av 2 klar |
| 8:24 | notis | bra | Storebrors skrivare: Del 1 av 2 klar |
| 8:27 | klar | notis:Storebrors skrivare: Del 1 av 2 klar | Storebrors skrivare: Del 1 av 2 klar |
| 8:28 | händelse | printKlar | sak=byggsats:dorr n=1 |
| 8:28 | händelse | tagitUrPrint | sak=byggsats:dorr n=1 |
| 8:28 | paket |  | sms |
| 8:28 | väntar | ali | Ali här. Jag har inte sovit. Inte på grund av AI:n. På grund av dig. Du bygger saker av sopor. Jag har en hel butik och bygger ingenting. Det ska ändras. Kanske. Troligen. |
| 8:36 | tanke | du | Dörr på plats! Trivsel +8 |
| 8:36 | väntar | du | Dörr på plats! Trivsel +8 |
| 8:36 | sak | du | Dörr på plats! Trivsel +8 |
| 8:36 | notis | tanke | 💭 Dörr på plats! Trivsel +8 |
| 8:36 | röst | du | Dörr på plats! Trivsel +8 · REAKTION |
| 8:36 | händelse | malKlart | id=n1-bygg-dorr-skjulet del=Dag 2 – Tippen bredvid nasta=sov2 |
| 8:36 | paket |  | lapp |
| 8:36 | väntar | du | Nu vet Ali att jag bor HÄR. Taket läcker. I morgon. |
| 8:36 | paket |  | sms |
| 8:36 | väntar | bror | Mamma ringde mig fyra gånger förresten. Snyggt jobbat 😂 |
| 8:36 | skratt | bror | Mamma ringde mig fyra gånger förresten. |
| 8:36 | bekräftelse | du | plats |
| 8:36 | väntar | du | Sov när du vill. |
| 8:36 | MÅL |  | Sov när du vill |
| 8:39 | klar | du | Dörr på plats! Trivsel +8 |
| 8:39 | sak | du | Nu vet Ali att jag bor HÄR. Taket läcker. I morgon. |
| 8:39 | kvallsrad | du | Nu vet Ali att jag bor HÄR. Taket läcker. I morgon. |
| 8:39 | målruta |  | Sov när du vill |
| 8:39 | klar | du | Nu vet Ali att jag bor HÄR. Taket läcker. I morgon. |
| 8:39 | sak | du | Sov när du vill. |
| 8:39 | pil |  | Sov när du vill |
| 8:39 | röst | du | Sov när du vill. · MÅL |
| 8:40 | kvittens-bock |  | ✓ Bygg en dörr till skjulet |
| 8:40 | klar | du | Sov när du vill. |
| 8:43 | väntar | notis:🌇 Klockan är 21. Ali slår igen luckan.  | 🌇 Klockan är 21. Ali slår igen luckan. Dagens jobb är klart – gå in i skjulet och sov i sängen. |
| 8:51 | nattkort | du | 🌙 20 dagar kvar. God natt. zzz… Nu vet Ali att jag bor HÄR. Taket läcker. I morgon. DAGENS PRINTAR Blomkruka × 3 Ölhållare med kylklamp × 1 Totalt 4 printar 💰 |

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
- 0:54 öppnar Alis butik – köpa kvarnmotor (140 kr)
- 0:56 köper kvarnmotor för 50 kr (90 kr)
- 1:14 gå till fel håll en bit (4 m) (90 kr)
- 1:24 gå till skrivaren (25 m) (90 kr)
- 1:26 printar Kvarnmotor (90 kr)
- 1:27 gå till cykeln (1 m) (90 kr)
- 1:30 tar ut 1 st ur skrivaren (90 kr)
- 1:43 gå till skruva fast kvarnmotorn (3 m) (90 kr)
- 2:19 plockar 6 skräp på gården (bär max 6) (90 kr)
- 2:28 gå till kvarnen (27 m) (90 kr)
- 2:52 plockar 6 skräp på gården (bär max 6) (90 kr)
- 3:05 gå till kvarnen (35 m) (90 kr)
- 3:13 nybörjaren ser ingen pil – tittar runt (90 kr)
- 3:31 plockar 2 skräp på gården (bär max 6) (90 kr)
- 3:42 gå till kvarnen (32 m) (90 kr)
- 3:59 plockar 6 skräp på gården (bär max 6) (90 kr)
- 4:16 plockar 6 skräp på gården (bär max 6) (90 kr)
- 4:31 gå till Rolfs sopsäck (26 m) (90 kr)
- 4:42 tar på korg (90 kr)
- 4:43 vet inte vad jag ska göra: "Möt sopbilen vid grinden" (90 kr)
- 5:16 gå till Rolfs postlåda (28 m) (90 kr)
- 5:20 gå till skrivaren (7 m) (90 kr)
- 5:21 printar Ölhållare med kylklamp (90 kr)
- 5:25 tar ut 1 st ur skrivaren (90 kr)
- 5:45 nybörjaren ser ingen pil – tittar runt (90 kr)
- 5:50 valj olhallare: true, vald olhallare, post {"l":null,"tr":null,"tm":[]}, nummer false (90 kr)
- 5:52 gå till Rolfs postlåda (6 m) (90 kr)
- 6:10 nybörjaren ser ingen pil – tittar runt (90 kr)
- 6:15 tjänar pengar till väntar på flaskhalsen för vindsnurra: 90/130 kr → printar blomkruka (105 kr) (90 kr)
- 6:17 gå till skrivaren (6 m) (90 kr)
- 6:19 printar Blomkruka (90 kr)
- 6:21 gå till cykeln (1 m) (90 kr)
- 6:25 tar ut 1 st ur skrivaren (90 kr)
- 6:35 gå till Ali (27 m) (90 kr)
- 6:35 öppnar Alis butik – sälja (90 kr)
- 6:37 säljer hos Ali: +105 kr (195 kr)
- 6:45 öppnar Alis butik – köpa vindsnurra till skjultaket (195 kr)
- 6:48 köper vindsnurra för 133 kr (62 kr)
- 6:58 gå till skrivaren (25 m) (62 kr)
- 6:59 printar Vindsnurra till skjultaket (62 kr)
- 7:03 gå till cykeln (1 m) (62 kr)
- 7:05 tar ut 1 st ur skrivaren (62 kr)
- 7:20 gå till sätt vindsnurran på taket (20 m) (62 kr)
- 7:42 tjänar pengar till dörr: 62/120 kr → printar blomkruka (105 kr) (62 kr)
- 7:49 gå till skrivaren (19 m) (62 kr)
- 7:51 printar Blomkruka (62 kr)
- 7:55 tar ut 1 st ur skrivaren (62 kr)
- 8:04 gå till Ali (26 m) (62 kr)
- 8:04 öppnar Alis butik – sälja (62 kr)
- 8:06 säljer hos Ali: +105 kr (167 kr)
- 8:07 öppnar Alis butik – köpa dörr (167 kr)
- 8:09 köper dorr för 120 kr (47 kr)
- 8:19 gå till skrivaren (25 m) (47 kr)
- 8:21 printar Dörr (2 delar) (47 kr)
- 8:29 tar ut 1 st ur skrivaren (47 kr)
- 8:36 gå till skjulet (19 m) (47 kr)
- 8:48 gå till sängen (1 m) (47 kr)

</details>

## Dag 3

| Tid | Källa | Vem | Text |
|---|---|---|---|
| 8:51 | vara | ali | ingen |
| 8:51 | händelse | malKlart | id=sov2 del=Dag 2 – Tippen bredvid nasta=rolf1-brev |
| 8:51 | bekräftelse | du | plats |
| 8:51 | vara | ali | kruka |
| 8:51 | MÅL |  | Möt sopbilen vid grinden |
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
| 0:11 | skratt | du | falsk tuta |
| 0:11 | paket |  | ge |
| 0:11 | väntar |  | (läget ändras) |
| 0:12 | sak | du | Ett nytt brev i Rolfs postlåda. Det läser jag. |
| 0:12 | pil |  | Läs brevet i Rolfs postlåda |
| 0:12 | notis | tanke | 💭 Ett nytt brev i Rolfs postlåda. Det läser jag. |
| 0:12 | röst | du | Ett nytt brev i Rolfs postlåda. Det läser jag. · MÅL |
| 0:13 | nick |  | nick:31 |
| 0:18 | klar | du | Ett nytt brev i Rolfs postlåda. Det läser jag. |
| 0:18 | sak | notis:morgon | Ali vill ha idag: Blomkruka · +50 % |
| 0:18 | notis |  | Blomkruka · +50 % |
| 0:21 | klar | notis:morgon | Ali vill ha idag: Blomkruka · +50 % |
| 0:23 | struken | notis:🌇 Klockan är 21. Ali slår igen luckan.  | 🌇 Klockan är 21. Ali slår igen luckan. Dagens jobb är klart – gå in i skjulet och sov i sängen. |
| 0:23 | struken | ali | Ali här. Jag har inte sovit. Inte på grund av AI:n. På grund av dig. Du bygger saker av sopor. Jag har en hel butik och bygger ingenting. Det ska ändras. Kanske. Troligen. |
| 0:23 | struken | bror | Mamma ringde mig fyra gånger förresten. Snyggt jobbat 😂 |
| 0:23 | skratt | bror | Mamma ringde mig fyra gånger förresten. |
| 0:30 | sak |  | (läget ändras) |
| 0:30 | brev | rolf | rolf:1 |
| 0:30 | klar |  | (läget ändras) |
| 0:37 | väntar | rolf | Den funkar! Hä. Ta så mycke skräp du vill. /Rolf​ |
| 0:38 | skratt | du | falsk tuta |
| 0:42 | sak | rolf | Den funkar! Hä. Ta så mycke skräp du vill. /Rolf​ |
| 0:42 | lapp | Brev från Rolf | Den funkar! Hä. Ta så mycke skräp du vill. /Rolf​ |
| 0:42 | röst | rolf | Den funkar! Hä. Ta så mycke skräp du vill. /Rolf​ · STORY |
| 0:44 | monterat | du | byggsats:tippnyckel |
| 0:44 | händelse | monterat | sak=tippnyckel |
| 0:44 | scenInfo | du | Kameran sveper över tippen |
| 0:46 | morgonkort | ⏸️ Pausad | ⏸️ Pausad · Klicka för att fortsätta. |
| 0:47 | klar | rolf | Den funkar! Hä. Ta så mycke skräp du vill. /Rolf​ |
| 0:47 | händelse | brevLast | id=rolftack:0 |
| 0:49 | tanke | du | …Det här räcker i hundra år. |
| 0:49 | väntar | du | …Det här räcker i hundra år. |
| 0:49 | bubbla |  | TUUT! Hej grannen! |
| 0:54 | skratt | du | falsk tuta |
| 0:54 | paket |  | ge |
| 0:54 | väntar |  | (läget ändras) |
| 0:54 | tanke | du | En hel kanot. Kvarnen skulle äta upp sig själv. |
| 0:54 | väntar | du | En hel kanot. Kvarnen skulle äta upp sig själv. |
| 0:59 | väntar | rolf | ÖJ! Kajsa knuffa ner min flasköppnare i tippen. Kan du göra en ny, mä magnet? Ritade den på rasten. Ungefär så vill ja ha'n. /Rolf​ |
| 0:59 | paket |  | ge |
| 0:59 | väntar |  | (läget ändras) |
| 0:59 | sak | rolf | ÖJ! Kajsa knuffa ner min flasköppnare i tippen. Kan du göra en ny, mä magnet? Ritade den på rasten. Ungefär så vill ja ha'n. /Rolf​ |
| 0:59 | lapp | Brev från Rolf | ÖJ! Kajsa knuffa ner min flasköppnare i tippen. Kan du göra en ny, mä magnet? Ritade den på rasten. Ungefär så vill ja ha'n. /Rolf​ |
| 0:59 | röst | rolf | ÖJ! Kajsa knuffa ner min flasköppnare i tippen. Kan du göra en ny, mä magnet? Ritade den på rasten. Ungefär så vill ja ha'n. /Rolf​ · STORY |
| 0:59 | händelse | malKlart | id=rolf1-brev del=Dag 3 – En skrivare till och taket nasta=n2-hamta-skrap |
| 0:59 | bekräftelse | du | plats |
| 0:59 | struken | du | En hel kanot. Kvarnen skulle äta upp sig själv. |
| 0:59 | väntar | du | Nyckeln till tippen. Där ligger skräpet i högar. |
| 0:59 | MÅL |  | Hämta 5 skräp på soptippen |
| 0:59 | kvitto-visas |  | (läget ändras) |
| 0:59 | sak |  | (läget ändras) |
| 1:02 | målruta |  | Hämta 5 skräp på soptippen |
| 1:03 | händelse | malKlart | id=n2-hamta-skrap del=Dag 3 – En skrivare till och taket nasta=rolf1-printa |
| 1:03 | bekräftelse | du | plats |
| 1:03 | väntar | du | Rolf vill ha en flasköppnare. Den printar jag. |
| 1:03 | MÅL |  | Printa flasköppnare med magnet |
| 1:06 | målruta |  | Printa flasköppnare med magnet |
| 1:07 | kvittens-bock |  | ✓ Hämta 5 skräp på soptippen |
| 1:13 | klar | rolf | ÖJ! Kajsa knuffa ner min flasköppnare i tippen. Kan du göra en ny, mä magnet? Ritade den på rasten. Ungefär så vill ja ha'n. /Rolf​ |
| 1:13 | händelse | brevLast | id=rolf:1 |
| 1:14 | struken | du | Nyckeln till tippen. Där ligger skräpet i högar. |
| 1:14 | sak | du | Rolf vill ha en flasköppnare. Den printar jag. |
| 1:14 | pil |  | Printa flasköppnare med magnet |
| 1:14 | notis | tanke | 💭 Rolf vill ha en flasköppnare. Den printar jag. |
| 1:14 | röst | du | Rolf vill ha en flasköppnare. Den printar jag. · MÅL |
| 1:14 | nick |  | nick:33 |
| 1:19 | klar | du | Rolf vill ha en flasköppnare. Den printar jag. |
| 1:27 | sak | du | …Det här räcker i hundra år. |
| 1:27 | notis | tanke | 💭 …Det här räcker i hundra år. |
| 1:27 | röst | du | …Det här räcker i hundra år. · STORY |
| 1:30 | klar | du | …Det här räcker i hundra år. |
| 1:32 | händelse | printStart | sak=flaskoppnare |
| 1:32 | händelse | malKlart | id=rolf1-printa del=Dag 3 – En skrivare till och taket nasta=rolf1-ge |
| 1:32 | bekräftelse | du | plats |
| 1:32 | väntar | du | Flasköppnaren är klar. Den lägger jag i Rolfs postlåda. |
| 1:32 | målruta |  | Ge Rolf flasköppnare med magnet |
| 1:32 | MÅL |  | Ge Rolf flasköppnare med magnet |
| 1:33 | sak | du | Flasköppnaren är klar. Den lägger jag i Rolfs postlåda. |
| 1:33 | pil |  | Ge Rolf flasköppnare med magnet |
| 1:33 | notis | tanke | 💭 Flasköppnaren är klar. Den lägger jag i Rolfs postlåda. |
| 1:33 | röst | du | Flasköppnaren är klar. Den lägger jag i Rolfs postlåda. · MÅL |
| 1:36 | händelse | printKlar | sak=flaskoppnare n=1 |
| 1:36 | kvittens-bock |  | ✓ Printa flasköppnare med magnet |
| 1:37 | händelse | tagitUrPrint | sak=flaskoppnare n=1 |
| 1:38 | klar | du | Flasköppnaren är klar. Den lägger jag i Rolfs postlåda. |
| 1:47 | sak |  | (läget ändras) |
| 1:47 | brev | rolf | rolf:1 |
| 1:47 | klar |  | (läget ändras) |
| 1:56 | händelse | lagtIPostlada | sak=flaskoppnare rolf=1 jobb=false |
| 1:56 | händelse | malKlart | id=rolf1-ge del=Dag 3 – En skrivare till och taket nasta=kopBatteri |
| 1:56 | bekräftelse | du | plats |
| 1:56 | väntar | du | Ali har ett gammalt bilbatteri. Då sparar jag strömmen. |
| 1:56 | målruta |  | Köp Alis gamla bilbatteri |
| 1:56 | MÅL |  | Köp Alis gamla bilbatteri |
| 1:56 | upplåst | strom | cykelbatteri |
| 1:56 | brott | UPPLÅST | cykelbatteri (strom 26 av 15, sparat ihop) |
| 1:56 | händelse | upplast | id=cykelbatteri flask=strom |
| 1:56 | paket |  | sms |
| 1:56 | väntar | ali | Ali här. Bilbatteriet ur min gamla Volvo står i lagret. Det sparar mer ström än powerbanken. |
| 1:56 | sak | du | Ali har ett gammalt bilbatteri. Då sparar jag strömmen. |
| 1:56 | pil |  | Köp Alis gamla bilbatteri |
| 1:56 | notis | tanke | 💭 Ali har ett gammalt bilbatteri. Då sparar jag strömmen. |
| 1:56 | röst | du | Ali har ett gammalt bilbatteri. Då sparar jag strömmen. · MÅL |
| 1:56 | nick |  | nick:35 |
| 2:00 | kvittens-bock |  | ✓ Ge Rolf flasköppnare med magnet |
| 2:02 | tanke | du | Tratten är stor som en kaffekopp. Tunnan är stor som jag. |
| 2:02 | väntar | du | Tratten är stor som en kaffekopp. Tunnan är stor som jag. |
| 2:02 | klar | du | Ali har ett gammalt bilbatteri. Då sparar jag strömmen. |
| 2:04 | brott | TRÄNGSEL 2 | "Ali här. Bilbatteriet ur min gamla Volvo står i la" 2.0 s efter förra meddelandet, 8.6 s efter en klar uppgift |
| 2:04 | sak | ali | Ali här. Bilbatteriet ur min gamla Volvo står i lagret. Det sparar mer ström än powerbanken. |
| 2:04 | sms | ali | Ali här. Bilbatteriet ur min gamla Volvo står i lagret. Det sparar mer ström än powerbanken. |
| 2:04 | sms-bubbla | ali | Ali här. Bilbatteriet ur min gamla Volvo står i lagret. Det sparar mer ström än powerbanken. |
| 2:04 | röst | ali | Ali här. Bilbatteriet ur min gamla Volvo står i lagret. Det sparar mer ström än powerbanken. · STORY |
| 2:14 | klar | ali | Ali här. Bilbatteriet ur min gamla Volvo står i lagret. Det sparar mer ström än powerbanken. |
| 2:22 | struken | du | Tratten är stor som en kaffekopp. Tunnan är stor som jag. |
| 2:25 | väntar | ali | Jag har en ny hylla. Den lutar. Som jag. |
| 2:25 | sak | ali | Jag har en ny hylla. Den lutar. Som jag. |
| 2:25 | bubbla |  | Jag har en ny hylla. Den lutar. Som jag. |
| 2:25 | röst | ali | Jag har en ny hylla. Den lutar. Som jag. · SMÅPRAT |
| 2:27 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 2:27 | butiksbubbla | ali | Pappa stod bakom den här disken i trettio år. Jag har stått här i tjugofem. Varje morgon när jag låser upp hälsar jag på honom. Tyst. |
| 2:29 | toast | guld | 🔋 Bilbatteriet ska kopplas in på cykeln. |
| 2:29 | händelse | kopt | sak=cykelbatteri |
| 2:29 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 2:29 | butiksbubbla | ali | Batteriet ur min gamla Volvo. Bilen dog 2016. Batteriet vägrade. |
| 2:29 | röst | ali | Pappa stod bakom den här disken i trettio år. Jag har stått här i tjugofem. Varje morgon när jag låser upp hälsar jag på honom. Tyst. · STORY |
| 2:30 | väntar | ali | Batteriet ur min gamla Volvo. Bilen dog 2016. Batteriet vägrade. |
| 2:40 | skratt | du | falsk tuta |
| 2:43 | klar | ali | Jag har en ny hylla. Den lutar. Som jag. |
| 2:43 | sak | ali | Batteriet ur min gamla Volvo. Bilen dog 2016. Batteriet vägrade. |
| 2:43 | röst | ali | Batteriet ur min gamla Volvo. Bilen dog 2016. Batteriet vägrade. · STORY |
| 2:51 | klar | ali | Batteriet ur min gamla Volvo. Bilen dog 2016. Batteriet vägrade. |
| 2:51 | tanke | du | Bilbatteriet är inkopplat – skrivaren printar klart även när du slutar trampa |
| 2:51 | väntar | du | Bilbatteriet är inkopplat – skrivaren printar klart även när du slutar trampa |
| 2:51 | monterat | du | byggsats:cykelbatteri |
| 2:51 | händelse | monterat | sak=cykelbatteri |
| 2:51 | sak | du | Bilbatteriet är inkopplat – skrivaren printar klart även när du slutar trampa |
| 2:51 | notis | tanke | 💭 Bilbatteriet är inkopplat – skrivaren printar klart även när du slutar trampa |
| 2:51 | röst | du | Bilbatteriet är inkopplat – skrivaren printar klart även när du slutar trampa · REAKTION |
| 2:51 | händelse | malKlart | id=kopBatteri del=Dag 3 – En skrivare till och taket nasta=ryggkorg |
| 2:51 | bekräftelse | du | plats |
| 2:51 | kvittens | du | Nu printar den klart även när jag vilar benen. |
| 2:51 | väntar | du | Nu printar den klart även när jag vilar benen. |
| 2:51 | väntar | du | Jag springer för mycket. Med en ryggkorg bär jag sexton saker. |
| 2:51 | MÅL |  | Spara till ryggkorgen · 77 / 120 kr |
| 2:51 | upplåst | bara | ryggkorg |
| 2:51 | brott | UPPLÅST | ryggkorg (bara 3 av 3) |
| 2:51 | händelse | upplast | id=ryggkorg flask=bara |
| 2:51 | paket |  | sms |
| 2:51 | väntar | ali | Ali här. En ryggkorg. AI:n ritade den efter en bild på min mormor. Den rymmer sexton. |
| 2:54 | målruta |  | Spara till ryggkorgen · 77 / 120 kr |
| 2:54 | pil |  | Spara till ryggkorgen · 77 / 120 kr |
| 2:57 | paket |  | tanke |
| 2:57 | tanke | du | Jaha, Rolf har hämtat en flasköppnare med magnet. |
| 2:57 | väntar | du | Jaha, Rolf har hämtat en flasköppnare med magnet. |
| 2:57 | klar | du | Bilbatteriet är inkopplat – skrivaren printar klart även när du slutar trampa |
| 2:57 | sak | du | Nu printar den klart även när jag vilar benen. |
| 2:57 | röst | du | Nu printar den klart även när jag vilar benen. · STORY |
| 3:01 | klar | du | Nu printar den klart även när jag vilar benen. |
| 3:01 | sak | du | Jag springer för mycket. Med en ryggkorg bär jag sexton saker. |
| 3:01 | notis | tanke | 💭 Jag springer för mycket. Med en ryggkorg bär jag sexton saker. |
| 3:01 | röst | du | Jag springer för mycket. Med en ryggkorg bär jag sexton saker. · MÅL |
| 3:02 | väntar | mamma | Pappa hälsar. Han sa inte det, men jag såg på honom att han ville. |
| 3:02 | väntar | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått en DÖRR. Och vindsnurra till skjultaket. Mer säger jag inte. Gunnar vet. |
| 3:02 | radio | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått en DÖRR. Och vindsnurra till skjultaket. Mer säger jag inte. Gunnar vet. |
| 3:02 | skratt | du | Radio-Kjelle |
| 3:07 | klar | du | Jag springer för mycket. Med en ryggkorg bär jag sexton saker. |
| 3:09 | sak | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått en DÖRR. Och vindsnurra till skjultaket. Mer säger jag inte. Gunnar vet. |
| 3:09 | notis |  | 📻 Radio Tippen: Radio Tippen, Kjelle här. Skjulet vid tippen har fått en DÖRR. Och vindsnurra till skjultaket. Mer säger jag inte. Gunnar vet. |
| 3:09 | röst | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått en DÖRR. Och vindsnurra till skjultaket. Mer säger jag inte. Gunnar vet. · REAKTION |
| 3:12 | skratt | du | däcket rullar iväg |
| 3:12 | paket |  | tanke |
| 3:12 | tanke | du | Däcket ville inte stanna. Jag förstår det. |
| 3:12 | struken | du | Jaha, Rolf har hämtat en flasköppnare med magnet. |
| 3:12 | väntar | du | Däcket ville inte stanna. Jag förstår det. |
| 3:17 | händelse | printStart | sak=kruka |
| 3:19 | klar | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått en DÖRR. Och vindsnurra till skjultaket. Mer säger jag inte. Gunnar vet. |
| 3:19 | väntar | värld:TUUT! Tjena! | TUUT! Tjena! |
| 3:20 | paket |  | tanke |
| 3:20 | tanke | du | En toffla. Bara en. |
| 3:20 | struken | du | Däcket ville inte stanna. Jag förstår det. |
| 3:20 | väntar | du | En toffla. Bara en. |
| 3:20 | skratt | du | kvarnen spottar |
| 3:21 | brott | TRÄNGSEL 2 | "Ali här. En ryggkorg. AI:n ritade den efter en bil" 2.0 s efter förra meddelandet, 30.4 s efter en klar uppgift |
| 3:21 | sak | ali | Ali här. En ryggkorg. AI:n ritade den efter en bild på min mormor. Den rymmer sexton. |
| 3:21 | sms | ali | Ali här. En ryggkorg. AI:n ritade den efter en bild på min mormor. Den rymmer sexton. |
| 3:21 | sms-bubbla | ali | Ali här. En ryggkorg. AI:n ritade den efter en bild på min mormor. Den rymmer sexton. |
| 3:21 | röst | ali | Ali här. En ryggkorg. AI:n ritade den efter en bild på min mormor. Den rymmer sexton. · STORY |
| 3:23 | händelse | printKlar | sak=kruka n=5 |
| 3:23 | händelse | tagitUrPrint | sak=kruka n=1 |
| 3:24 | hjälp | kontroll | R: Vrid innan du ställer ner |
| 3:31 | klar | ali | Ali här. En ryggkorg. AI:n ritade den efter en bild på min mormor. Den rymmer sexton. |
| 3:32 | väntar | ali | Den köper jag. Ge hit. |
| 3:32 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 3:34 | händelse | salt | sak=kruka n=1 |
| 3:34 | aliSalt | ali | 105 |
| 3:34 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 3:35 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 3:37 | struken | info:guld | 3D-modell köpt – printa ryggkorg |
| 3:37 | händelse | kopt | sak=ryggkorg |
| 3:37 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 3:39 | sak | värld:TUUT! Tjena! | TUUT! Tjena! |
| 3:39 | bubbla |  | TUUT! Tjena! |
| 3:42 | klar | värld:TUUT! Tjena! | TUUT! Tjena! |
| 3:45 | struken | du | En toffla. Bara en. |
| 3:50 | händelse | printStart | sak=byggsats:ryggkorg |
| 3:50 | sak | ali | Den köper jag. Ge hit. |
| 3:50 | röst | ali | Den köper jag. Ge hit. · REAKTION |
| 3:54 | klar | ali | Den köper jag. Ge hit. |
| 3:55 | toast | bra | Del 1 av 2 klar |
| 4:01 | händelse | printKlar | sak=byggsats:ryggkorg n=1 |
| 4:02 | tanke | du | Ryggkorg ska jag ha på mig. |
| 4:02 | väntar | du | Ryggkorg ska jag ha på mig. |
| 4:02 | händelse | tagitUrPrint | sak=byggsats:ryggkorg n=1 |
| 4:02 | paket |  | sms |
| 4:02 | väntar | ali | Ali här. Du printade Ryggkorg från min ritning. Och det FUNKAR? Jag har bara sett sånt på YouTube. |
| 4:02 | sak | du | Ryggkorg ska jag ha på mig. |
| 4:02 | notis | tanke | 💭 Ryggkorg ska jag ha på mig. |
| 4:02 | röst | du | Ryggkorg ska jag ha på mig. · REAKTION |
| 4:02 | händelse | malKlart | id=ryggkorg del=Dag 3 – En skrivare till och taket nasta=ryggkorgPa |
| 4:02 | bekräftelse | du | plats |
| 4:02 | väntar | du | Ryggkorgen är klar. På med den. |
| 4:02 | MÅL |  | Ta på ryggkorgen |
| 4:04 | hjälp | kontroll | Klick: Klicka för att ta på dig den |
| 4:04 | målruta |  | Ta på ryggkorgen |
| 4:06 | kvittens-bock |  | ✓ Printa ryggkorgen |
| 4:06 | klar | du | Ryggkorg ska jag ha på mig. |
| 4:08 | sak | du | Ryggkorgen är klar. På med den. |
| 4:08 | pil |  | Ta på ryggkorgen |
| 4:08 | notis | tanke | 💭 Ryggkorgen är klar. På med den. |
| 4:08 | röst | du | Ryggkorgen är klar. På med den. · MÅL |
| 4:10 | klar | du | Ryggkorgen är klar. På med den. |
| 4:13 | sak | ali | Ali här. Du printade Ryggkorg från min ritning. Och det FUNKAR? Jag har bara sett sånt på YouTube. |
| 4:13 | sms | ali | Ali här. Du printade Ryggkorg från min ritning. Och det FUNKAR? Jag har bara sett sånt på YouTube. |
| 4:13 | sms-bubbla | ali | Ali här. Du printade Ryggkorg från min ritning. Och det FUNKAR? Jag har bara sett sånt på YouTube. |
| 4:13 | röst | ali | Ali här. Du printade Ryggkorg från min ritning. Och det FUNKAR? Jag har bara sett sånt på YouTube. · REAKTION |
| 4:22 | klar | ali | Ali här. Du printade Ryggkorg från min ritning. Och det FUNKAR? Jag har bara sett sånt på YouTube. |
| 4:24 | tog på | du | byggsats:ryggkorg |
| 4:24 | händelse | monterat | sak=ryggkorg |
| 4:24 | händelse | malKlart | id=ryggkorgPa del=Dag 3 – En skrivare till och taket nasta=n2-bygg-arbetsbord |
| 4:24 | bekräftelse | du | plats |
| 4:24 | kvittens | du | Nu bär jag sexton skräp. |
| 4:24 | väntar | du | Nu bär jag sexton skräp. |
| 4:24 | väntar | du | Ett arbetsbord bredvid skrivaren. Skrivare M ska stå på det. |
| 4:24 | MÅL |  | Bygg ett arbetsbord |
| 4:24 | sak | du | Nu bär jag sexton skräp. |
| 4:24 | röst | du | Nu bär jag sexton skräp. · STORY |
| 4:24 | målruta |  | Bygg ett arbetsbord |
| 4:27 | händelse | printStart | sak=kruka |
| 4:29 | klar | du | Nu bär jag sexton skräp. |
| 4:29 | sak | du | Ett arbetsbord bredvid skrivaren. Skrivare M ska stå på det. |
| 4:29 | pil |  | Bygg ett arbetsbord |
| 4:29 | notis | tanke | 💭 Ett arbetsbord bredvid skrivaren. Skrivare M ska stå på det. |
| 4:29 | röst | du | Ett arbetsbord bredvid skrivaren. Skrivare M ska stå på det. · MÅL |
| 4:32 | händelse | printKlar | sak=kruka n=6 |
| 4:32 | händelse | tagitUrPrint | sak=kruka n=1 |
| 4:35 | klar | du | Ett arbetsbord bredvid skrivaren. Skrivare M ska stå på det. |
| 4:42 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 4:43 | händelse | salt | sak=kruka n=1 |
| 4:43 | aliSalt | ali | 105 |
| 4:43 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 4:45 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 4:46 | struken | info:guld | 3D-modell köpt – printa arbetsbord |
| 4:46 | händelse | kopt | sak=bord |
| 4:46 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 4:48 | morgonkort | ⏸️ Pausad | ⏸️ Pausad · Klicka för att fortsätta. |
| 5:06 | händelse | printStart | sak=byggsats:bord |
| 5:13 | toast | bra | Del 1 av 3 klar |
| 5:18 | väntar | mamma | Jag har städat ditt rum. Det tog tre dagar. Jag hittade en macka från i somras. En macka. |
| 5:20 | toast | bra | Del 2 av 3 klar |
| 5:22 | skratt | du | falsk tuta |
| 5:22 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 5:22 | väntar | notis:Storebrors skrivare: Tornet är tomt – ma | Storebrors skrivare: Tornet är tomt – mal mer så fortsätter den |
| 5:40 | struken | mamma | Pappa hälsar. Han sa inte det, men jag såg på honom att han ville. |
| 5:42 | struken | notis:Storebrors skrivare: Tornet är tomt – ma | Storebrors skrivare: Tornet är tomt – mal mer så fortsätter den |
| 5:57 | väntar | värld:Mjau. | Mjau. |
| 5:57 | händelse | printKlar | sak=byggsats:bord n=1 |
| 6:04 | händelse | tagitUrPrint | sak=byggsats:bord n=1 |
| 6:08 | händelse | placerat | sak=bord |
| 6:08 | händelse | malKlart | id=n2-bygg-arbetsbord del=Dag 3 – En skrivare till och taket nasta=n2-bygg-skrivare-m |
| 6:08 | bekräftelse | du | plats |
| 6:08 | väntar | du | Skrivare M på bordet. Två skrivare, dubbelt så mycket. |
| 6:08 | målruta |  | Spara till Skrivare M · 47 / 500 kr |
| 6:08 | MÅL |  | Spara till Skrivare M · 47 / 500 kr |
| 6:08 | upplåst | skrivare | skrivare2 |
| 6:08 | brott | UPPLÅST | skrivare2 (skrivare 565 av 60) |
| 6:08 | händelse | upplast | id=skrivare2 flask=skrivare |
| 6:08 | paket |  | sms |
| 6:08 | väntar | ali | Ali här. Skrivare M har kommit. Två och en halv gånger snabbare. Snabbare än jag. Jag har inte varit snabb sedan 1998. |
| 6:08 | sak | du | Skrivare M på bordet. Två skrivare, dubbelt så mycket. |
| 6:08 | pil |  | Spara till Skrivare M · 47 / 500 kr |
| 6:08 | notis | tanke | 💭 Skrivare M på bordet. Två skrivare, dubbelt så mycket. |
| 6:08 | röst | du | Skrivare M på bordet. Två skrivare, dubbelt så mycket. · MÅL |
| 6:08 | nick |  | nick:39 |
| 6:12 | kvittens-bock |  | ✓ Bygg ett arbetsbord |
| 6:14 | klar | du | Skrivare M på bordet. Två skrivare, dubbelt så mycket. |
| 6:17 | struken | värld:Mjau. | Mjau. |
| 6:26 | väntar | bud | (tips) |
| 6:26 | sak | bud | (tips) |
| 6:27 | klar | bud | (tips) |
| 6:28 | händelse | printStart | sak=kruka |
| 6:29 | meddelande | mamma | Har du borstat tänderna idag? Ljug inte. Jag hör om du ljuger. Även på sms. |
| 6:31 | röst | mamma | Har du borstat tänderna idag? Ljug inte. Jag hör om du ljuger. Även på sms. · STORY |
| 6:38 | paket |  | sms |
| 6:38 | väntar | mamma | Bra. Jag tror dig. Nästan. |
| 6:46 | händelse | brevLast | id=m_tandborste |
| 6:50 | händelse | printKlar | sak=kruka n=7 |
| 6:51 | händelse | tagitUrPrint | sak=kruka n=1 |
| 6:53 | händelse | printStart | sak=kruka |
| 6:58 | händelse | printKlar | sak=kruka n=8 |
| 6:58 | händelse | tagitUrPrint | sak=kruka n=1 |
| 7:08 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 7:08 | sak | ali | Ali här. Skrivare M har kommit. Två och en halv gånger snabbare. Snabbare än jag. Jag har inte varit snabb sedan 1998. |
| 7:08 | sms | ali | Ali här. Skrivare M har kommit. Två och en halv gånger snabbare. Snabbare än jag. Jag har inte varit snabb sedan 1998. |
| 7:08 | sms-bubbla | ali | Ali här. Skrivare M har kommit. Två och en halv gånger snabbare. Snabbare än jag. Jag har inte varit snabb sedan 1998. |
| 7:08 | röst | ali | Ali här. Skrivare M har kommit. Två och en halv gånger snabbare. Snabbare än jag. Jag har inte varit snabb sedan 1998. · STORY |
| 7:10 | händelse | salt | sak=kruka n=1 |
| 7:10 | aliSalt | ali | 105 |
| 7:10 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 7:10 | händelse | salt | sak=kruka n=1 |
| 7:10 | aliSalt | ali | 105 |
| 7:10 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 7:21 | klar | ali | Ali här. Skrivare M har kommit. Två och en halv gånger snabbare. Snabbare än jag. Jag har inte varit snabb sedan 1998. |
| 7:22 | händelse | printStart | sak=kruka |
| 7:27 | händelse | printKlar | sak=kruka n=9 |
| 7:27 | händelse | tagitUrPrint | sak=kruka n=1 |
| 7:30 | händelse | printStart | sak=kruka |
| 7:33 | väntar | värld:TUUT! Hej grannen! | TUUT! Hej grannen! |
| 7:35 | händelse | printKlar | sak=kruka n=10 |
| 7:35 | händelse | tagitUrPrint | sak=kruka n=1 |
| 7:44 | väntar | rolf | Morgonbulle på kontoret me polarna. Bengt har ny keps. Vi pratade om den i en timme. Den e grön. /R |
| 7:44 | väntar | ali | Den köper jag. Ge hit. |
| 7:45 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 7:46 | händelse | salt | sak=kruka n=1 |
| 7:46 | aliSalt | ali | 105 |
| 7:46 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 7:46 | röst | ali | Dina krukor säljer. Tanterna i kvarteret älskar dem. · STORY |
| 7:46 | butiksbubbla | ali | Dina krukor säljer. Tanterna i kvarteret älskar dem. |
| 7:47 | händelse | salt | sak=kruka n=1 |
| 7:47 | aliSalt | ali | 105 |
| 7:47 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 7:56 | struken | värld:TUUT! Hej grannen! | TUUT! Hej grannen! |
| 7:58 | sak | mamma | Bra. Jag tror dig. Nästan. |
| 7:58 | sms | mamma | Bra. Jag tror dig. Nästan. |
| 7:58 | sms-bubbla | mamma | Bra. Jag tror dig. Nästan. |
| 7:58 | röst | mamma | Bra. Jag tror dig. Nästan. · STORY |
| 7:59 | händelse | printStart | sak=kruka |
| 8:02 | klar | mamma | Bra. Jag tror dig. Nästan. |
| 8:04 | händelse | printKlar | sak=kruka n=11 |
| 8:04 | händelse | tagitUrPrint | sak=kruka n=1 |
| 8:11 | struken | ali | Den köper jag. Ge hit. |
| 8:14 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 8:15 | händelse | salt | sak=kruka n=1 |
| 8:15 | aliSalt | ali | 105 |
| 8:15 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 8:17 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 8:18 | skratt | du | Alis dyr-pling |
| 8:18 | struken | info:guld | 3D-modell köpt – printa skrivare M |
| 8:18 | händelse | kopt | sak=skrivare2 |
| 8:18 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 8:20 | morgonkort | ⏸️ Pausad | ⏸️ Pausad · Klicka för att fortsätta. |
| 8:38 | händelse | printStart | sak=byggsats:skrivare2 |
| 8:47 | toast | bra | Del 1 av 5 klar |
| 8:56 | toast | bra | Del 2 av 5 klar |
| 9:00 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 9:14 | skratt | du | falsk tuta |
| 9:27 | väntar | du | Fullt i händerna. |
| 9:27 | väntar | info:fel | Fullt i händerna. |
| 9:27 | sak | info:fel | Fullt i händerna. |
| 9:27 | kvitto-visas | info:fel | Fullt i händerna. |
| 9:27 | toast | fel | Fullt i händerna. |
| 9:27 | toast | bra | Del 3 av 5 klar |
| 9:29 | klar | info:fel | Fullt i händerna. |
| 9:29 | sak | du | Fullt i händerna. |
| 9:29 | röst | du | Fullt i händerna. · REAKTION |
| 9:32 | klar | du | Fullt i händerna. |
| 9:35 | väntar | värld:TUUT! Tjena! | TUUT! Tjena! |
| 9:36 | toast | bra | Del 4 av 5 klar |
| 9:45 | händelse | printKlar | sak=byggsats:skrivare2 n=1 |
| 9:48 | händelse | tagitUrPrint | sak=byggsats:skrivare2 n=1 |
| 9:52 | händelse | placerat | sak=skrivare2 |
| 9:52 | paket |  | tanke |
| 9:52 | tanke | du | Den här måste stå i linjen vid kvarnen, annars når inte slangen. |
| 9:52 | väntar | du | Den här måste stå i linjen vid kvarnen, annars når inte slangen. |
| 9:52 | händelse | malKlart | id=n2-bygg-skrivare-m del=Dag 3 – En skrivare till och taket nasta=n2-lagg-plattak-skjulet |
| 9:52 | bekräftelse | du | plats |
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
| 9:59 | klar | du | Det regnar in. Plåt på taket, så slipper jag sova i en pöl. |
| 10:01 | struken | värld:TUUT! Tjena! | TUUT! Tjena! |
| 10:11 | händelse | printStart | sak=kruka |
| 10:11 | paket |  | tanke |
| 10:11 | tanke | du | Kajsa. Ut ur skrivaren. Nu. |
| 10:11 | väntar | du | Kajsa. Ut ur skrivaren. Nu. |
| 10:11 | skratt | du | Kajsa i skrivaren |
| 10:11 | toast | bra | 🔗 Slangen kopplad |
| 10:13 | händelse | printStart | sak=kruka |
| 10:14 | händelse | printKlar | sak=kruka n=12 |
| 10:19 | händelse | printKlar | sak=kruka n=13 |
| 10:19 | händelse | tagitUrPrint | sak=kruka n=1 |
| 10:20 | händelse | tagitUrPrint | sak=kruka n=1 |
| 10:24 | väntar | mamma | Jag har städat ditt rum. Det tog tre dagar. Jag hittade en macka från i somras. En macka. |
| 10:29 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 10:31 | händelse | salt | sak=kruka n=1 |
| 10:31 | aliSalt | ali | 105 |
| 10:31 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 10:31 | händelse | salt | sak=kruka n=1 |
| 10:31 | aliSalt | ali | 105 |
| 10:31 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 10:32 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 10:34 | struken | info:guld | 3D-modell köpt – printa plåttak |
| 10:34 | händelse | kopt | sak=tak |
| 10:34 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 10:36 | morgonkort | ⏸️ Pausad | ⏸️ Pausad · Klicka för att fortsätta. |
| 10:49 | struken | du | Kajsa. Ut ur skrivaren. Nu. |
| 10:52 | sak | du | Den här måste stå i linjen vid kvarnen, annars når inte slangen. |
| 10:52 | notis | tanke | 💭 Den här måste stå i linjen vid kvarnen, annars når inte slangen. |
| 10:52 | röst | du | Den här måste stå i linjen vid kvarnen, annars når inte slangen. · STORY |
| 10:54 | händelse | printStart | sak=byggsats:tak |
| 10:54 | paket |  | tanke |
| 10:54 | tanke | du | Kajsa. Ut ur skrivaren. Nu. |
| 10:54 | väntar | du | Kajsa. Ut ur skrivaren. Nu. |
| 10:54 | skratt | du | Kajsa i skrivaren |
| 10:57 | klar | du | Den här måste stå i linjen vid kvarnen, annars når inte slangen. |
| 10:58 | toast | bra | Del 1 av 3 klar |
| 10:59 | struken | mamma | Jag har städat ditt rum. Det tog tre dagar. Jag hittade en macka från i somras. En macka. |
| 11:02 | toast | bra | Del 2 av 3 klar |
| 11:04 | toast | fel | Ingen ström – trampa cykeln |
| 11:12 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 11:12 | väntar | notis:Skrivare M: Tornet är tomt – mal mer så  | Skrivare M: Tornet är tomt – mal mer så fortsätter den |
| 11:14 | sak | bror | VA?! Du har byggt en skrivare TILL?? Du har typ en printfarm nu. Okej. Det är faktiskt ganska ballt. 🔥 |
| 11:14 | sms | bror | VA?! Du har byggt en skrivare TILL?? Du har typ en printfarm nu. Okej. Det är faktiskt ganska ballt. 🔥 |
| 11:14 | sms-bubbla | bror | VA?! Du har byggt en skrivare TILL?? Du har typ en printfarm nu. Okej. Det är faktiskt ganska ballt. 🔥 |
| 11:14 | röst | bror | VA?! Du har byggt en skrivare TILL?? Du har typ en printfarm nu. Okej. Det är faktiskt ganska ballt. 🔥 · STORY |
| 11:23 | klar | bror | VA?! Du har byggt en skrivare TILL?? Du har typ en printfarm nu. Okej. Det är faktiskt ganska ballt. 🔥 |
| 11:25 | struken | du | Kajsa. Ut ur skrivaren. Nu. |
| 11:28 | händelse | printKlar | sak=byggsats:tak n=1 |
| 11:32 | struken | notis:Skrivare M: Tornet är tomt – mal mer så  | Skrivare M: Tornet är tomt – mal mer så fortsätter den |
| 11:33 | händelse | tagitUrPrint | sak=byggsats:tak n=1 |
| 11:38 | skratt | du | falsk tuta |
| 11:40 | tanke | du | Plåttak på plats! Trivsel +12 |
| 11:40 | väntar | du | Plåttak på plats! Trivsel +12 |
| 11:40 | sak | du | Plåttak på plats! Trivsel +12 |
| 11:40 | notis | tanke | 💭 Plåttak på plats! Trivsel +12 |
| 11:40 | röst | du | Plåttak på plats! Trivsel +12 · REAKTION |
| 11:40 | händelse | malKlart | id=n2-lagg-plattak-skjulet del=Dag 3 – En skrivare till och taket nasta=sov3 |
| 11:40 | paket |  | lapp |
| 11:40 | väntar | du | Nu vet Rolf att jag bor HÄR. Benen orkar inte trampa mer. |
| 11:40 | bekräftelse | du | plats |
| 11:41 | MÅL |  | Sov när du vill |
| 11:43 | klar | du | Plåttak på plats! Trivsel +12 |
| 11:43 | sak | du | Nu vet Rolf att jag bor HÄR. Benen orkar inte trampa mer. |
| 11:43 | kvallsrad | du | Nu vet Rolf att jag bor HÄR. Benen orkar inte trampa mer. |
| 11:43 | målruta |  | Sov när du vill |
| 11:43 | klar | du | Nu vet Rolf att jag bor HÄR. Benen orkar inte trampa mer. |
| 11:43 | sak | du | (nytt mål i rutan) |
| 11:43 | pil |  | Sov när du vill |
| 11:43 | klar | du | (nytt mål i rutan) |
| 11:44 | kvittens-bock |  | ✓ Lägg plåttak på skjulet |
| 11:48 | väntar | notis:🌇 Klockan är 21. Ali slår igen luckan.  | 🌇 Klockan är 21. Ali slår igen luckan. Dagens jobb är klart – gå in i skjulet och sov i sängen. |
| 11:54 | nattkort | du | 🌙 19 dagar kvar. God natt. zzz… Nu vet Rolf att jag bor HÄR. Benen orkar inte trampa mer. DAGENS PRINTAR Blomkruka × 9 Flasköppnare med magnet × 1 Totalt 10 pr |

<details><summary>Botens handlingar dag 3</summary>

- 0:00 — dag 3 börjar — (47 kr)
- 0:07 popup: "FORTSÄTT" (47 kr)
- 0:37 gå till Rolfs postlåda (28 m) (47 kr)
- 0:42 panel: "Rolfs postlåda
Det här låg i l" (107 kr)
- 0:44 gå till sätt nyckeln i låset (3 m) (107 kr)
- 0:53 kort: "FORTSÄTTeller tryck Esc" (107 kr)
- 0:59 gå till Rolfs postlåda (1 m) (107 kr)
- 1:09 plockar 10 skräp på tippen (bär max 10) (107 kr)
- 1:12 gå till kvarnen (8 m) (107 kr)
- 1:31 gå till skrivaren (3 m) (107 kr)
- 1:32 printar Flasköppnare med magnet (107 kr)
- 1:37 tar ut 1 st ur skrivaren (107 kr)
- 1:48 nybörjaren ser ingen pil – tittar runt (107 kr)
- 1:53 valj flaskoppnare: true, vald flaskoppnare, post {"l":null,"tr":null,"tm":[]}, nummer false (107 kr)
- 1:56 gå till Rolfs postlåda (6 m) (107 kr)
- 2:27 gå till Ali (31 m) (107 kr)
- 2:27 öppnar Alis butik – bilbatteriet (107 kr)
- 2:30 köper cykelbatteri för 30 kr (77 kr)
- 2:51 gå till koppla in bilbatteriet vid cykeln (24 m) (77 kr)
- 3:14 tjänar pengar till ryggkorg: 77/120 kr → printar blomkruka (105 kr) (77 kr)
- 3:16 gå till skrivaren (2 m) (77 kr)
- 3:17 printar Blomkruka (77 kr)
- 3:23 tar ut 1 st ur skrivaren (77 kr)
- 3:32 gå till Ali (26 m) (77 kr)
- 3:32 öppnar Alis butik – sälja (77 kr)
- 3:34 säljer hos Ali: +105 kr (182 kr)
- 3:35 öppnar Alis butik – köpa ryggkorg (182 kr)
- 3:38 köper ryggkorg för 120 kr (62 kr)
- 3:48 gå till skrivaren (25 m) (62 kr)
- 3:50 printar Ryggkorg (2 delar) (62 kr)
- 4:02 tar ut 1 st ur skrivaren (62 kr)
- 4:20 nybörjaren ser ingen pil – tittar runt (62 kr)
- 4:24 tar på ryggkorg (62 kr)
- 4:25 tjänar pengar till arbetsbord: 62/120 kr → printar blomkruka (105 kr) (62 kr)
- 4:27 printar Blomkruka (62 kr)
- 4:33 tar ut 1 st ur skrivaren (62 kr)
- 4:42 gå till Ali (25 m) (62 kr)
- 4:42 öppnar Alis butik – sälja (62 kr)
- 4:44 säljer hos Ali: +105 kr (167 kr)
- 4:45 öppnar Alis butik – köpa arbetsbord (167 kr)
- 4:47 köper bord för 120 kr (47 kr)
- 4:55 kort: "FORTSÄTTeller tryck Esc" (47 kr)
- 5:04 gå till skrivaren (25 m) (47 kr)
- 5:06 printar Arbetsbord (3 delar) (47 kr)
- 5:51 gå till kvarnen (34 m) (47 kr)
- 5:58 plockar 2 skräp på tippen (bär max 16) (47 kr)
- 6:02 gå till kvarnen (9 m) (47 kr)
- 6:04 gå till skrivaren (3 m) (47 kr)
- 6:04 tar ut 1 st ur skrivaren (47 kr)
- 6:07 gå till platsen för arbetsbord (5 m) (47 kr)
- 6:08 ställer ut arbetsbord (47 kr)
- 6:26 tjänar pengar till Skrivare M: 47/500 kr → printar blomkruka (105 kr) (47 kr)
- 6:26 gå till skrivaren (2 m) (47 kr)
- 6:28 printar Blomkruka (47 kr)
- 6:38 popup: "Ja." (47 kr)
- 6:46 popup: "Läst" (47 kr)
- 6:51 tar ut 1 st ur skrivaren (47 kr)
- 6:53 printar Blomkruka (47 kr)
- 6:59 tar ut 1 st ur skrivaren (47 kr)
- 7:08 gå till Ali (26 m) (47 kr)
- 7:08 öppnar Alis butik – sälja (47 kr)
- 7:10 säljer hos Ali: +210 kr (257 kr)
- 7:11 tjänar pengar till Skrivare M: 257/500 kr → printar blomkruka (105 kr) (257 kr)
- 7:20 gå till skrivaren (25 m) (257 kr)
- 7:22 printar Blomkruka (257 kr)
- 7:28 tar ut 1 st ur skrivaren (257 kr)
- 7:30 printar Blomkruka (257 kr)
- 7:36 tar ut 1 st ur skrivaren (257 kr)
- 7:45 gå till Ali (25 m) (257 kr)
- 7:45 öppnar Alis butik – sälja (257 kr)
- 7:47 säljer hos Ali: +210 kr (467 kr)
- 7:48 tjänar pengar till Skrivare M: 467/500 kr → printar blomkruka (105 kr) (467 kr)
- 7:57 gå till skrivaren (25 m) (467 kr)
- 7:59 printar Blomkruka (467 kr)
- 8:05 tar ut 1 st ur skrivaren (467 kr)
- 8:14 gå till Ali (25 m) (467 kr)
- 8:14 öppnar Alis butik – sälja (467 kr)
- 8:16 säljer hos Ali: +105 kr (572 kr)
- 8:17 öppnar Alis butik – köpa skrivare m (572 kr)
- 8:19 köper skrivare2 för 500 kr (72 kr)
- 8:27 kort: "FORTSÄTTeller tryck Esc" (72 kr)
- 8:36 gå till skrivaren (25 m) (72 kr)
- 8:38 printar Skrivare M (5 delar) (72 kr)
- 9:21 gå till kvarnen (43 m) (72 kr)
- 9:31 gå till kvarnen (10 m) (72 kr)
- 9:48 gå till skrivaren (3 m) (72 kr)
- 9:48 tar ut 1 st ur skrivaren (72 kr)
- 9:50 gå till platsen för skrivare m (5 m) (72 kr)
- 9:52 ställer ut skrivare m (72 kr)
- 10:10 tjänar pengar till plåttak: 72/250 kr → printar blomkruka (105 kr) (72 kr)
- 10:11 printar Blomkruka (72 kr)
- 10:12 gå till skrivaren (2 m) (72 kr)
- 10:13 printar Blomkruka (72 kr)
- 10:20 tar ut 1 st ur skrivaren (72 kr)
- 10:20 tar ut 1 st ur skrivaren (72 kr)
- 10:29 gå till Ali (26 m) (72 kr)
- 10:29 öppnar Alis butik – sälja (72 kr)
- 10:31 säljer hos Ali: +210 kr (282 kr)
- 10:32 öppnar Alis butik – köpa plåttak (282 kr)
- 10:35 köper tak för 250 kr (32 kr)
- 10:43 kort: "FORTSÄTTeller tryck Esc" (32 kr)
- 10:52 gå till skrivaren (24 m) (32 kr)
- 10:54 printar Plåttak (3 delar) (32 kr)
- 11:04 gå till cykeln (2 m) (32 kr)
- 11:20 plockar 1 skräp på tippen (bär max 16) (32 kr)
- 11:25 gå till kvarnen (11 m) (32 kr)
- 11:33 gå till skrivaren (5 m) (32 kr)
- 11:33 tar ut 1 st ur skrivaren (32 kr)
- 11:40 gå till skjulet (19 m) (32 kr)
- 11:51 gå till sängen (1 m) (32 kr)

</details>

## Dag 4

| Tid | Källa | Vem | Text |
|---|---|---|---|
| 11:54 | vara | ali | ingen |
| 11:54 | händelse | malKlart | id=sov3 del=Dag 3 – En skrivare till och taket nasta=rolf2-brev |
| 11:54 | bekräftelse | du | plats |
| 11:54 | vara | ali | kruka |
| 11:54 | MÅL |  | Möt sopbilen vid grinden |
| 0:01 | händelse | dagenBorjar | dag=4 |
| 0:01 | meddelande | du | 18 dagar till jul. Hjälper jag Rolf så hjälper han mig. |
| 0:01 | dagbokkort | du | Rolf igen. · 18 dagar till jul. Hjälper jag Rolf så hjälper han mig. |
| 0:01 | röst | du | 18 dagar till jul. Rolf igen. Hjälper jag Rolf så hjälper han mig. · STORY |
| 0:07 | väntar | notis:morgon | Ali vill ha idag: Blomkruka · +50 % |
| 0:07 | händelse | morgonkortStangt | dag=4 |
| 0:07 | målruta |  | Möt sopbilen vid grinden |
| 0:08 | skratt | du | tummen på fotot |
| 0:08 | väntar | foto | Tak över huvudet (och min tumme) |
| 0:08 | paket |  | tanke |
| 0:08 | tanke | du | I natt somnar jag torr. Det börjar bli ett hem. |
| 0:08 | väntar | du | I natt somnar jag torr. Det börjar bli ett hem. |
| 0:12 | sak | du | (nytt mål i rutan) |
| 0:12 | pil |  | Möt sopbilen vid grinden |
| 0:12 | klar | du | (nytt mål i rutan) |
| 0:14 | struken | notis:🌇 Klockan är 21. Ali slår igen luckan.  | 🌇 Klockan är 21. Ali slår igen luckan. Dagens jobb är klart – gå in i skjulet och sov i sängen. |
| 0:14 | paket |  | ge |
| 0:14 | väntar |  | (läget ändras) |
| 0:15 | sak | notis:morgon | Ali vill ha idag: Blomkruka · +50 % |
| 0:15 | notis |  | Blomkruka · +50 % |
| 0:15 | skratt | du | falsk tuta |
| 0:18 | klar | notis:morgon | Ali vill ha idag: Blomkruka · +50 % |
| 0:28 | väntar | värld:TUUT TUUT! | TUUT TUUT! |
| 0:34 | väntar | rolf | Nämen. PERFEKT öppnare! Kärran vid lådan ä din. Den gnisslar. Precis som ja. Skriv ditt nummer på en lapp, så slipper ja skriva brev. /Rolf​ |
| 0:34 | struken | info:bra | 🛒 4 skräp från famnen i skottkärran – kärran tar mer än famnen |
| 0:41 | tanke | du | Hård plast. Lilla kvarnen skulle explodera. Eller jag. |
| 0:41 | väntar | du | Hård plast. Lilla kvarnen skulle explodera. Eller jag. |
| 0:41 | sak | du | Hård plast. Lilla kvarnen skulle explodera. Eller jag. |
| 0:41 | notis | tanke | 💭 Hård plast. Lilla kvarnen skulle explodera. Eller jag. |
| 0:41 | röst | du | Hård plast. Lilla kvarnen skulle explodera. Eller jag. · REAKTION |
| 0:42 | struken | info:bra | 📝 Lappen med mitt nummer ligger i Rolfs postlåda. |
| 0:42 | paket |  | sms |
| 0:42 | väntar | rolf | Rolf hä!! Funkar dä?? ja skrivr mä EN fingr. dä tar sin tid men dä ä int så farligt. Tack ska du ha för nummret, fingrarna tackar oxå. Ja lägger saker i lådan ibland å då sms:ar ja. Int efter tie bara. /R​ |
| 0:42 | paket |  | sms |
| 0:42 | väntar | rolf | Hörru. Morgonbulle på kontoret mä polarna. grannen har ny keps. Vi pratade om den i en timme. Den ä grön. /R​ |
| 0:49 | klar | du | Hård plast. Lilla kvarnen skulle explodera. Eller jag. |
| 0:49 | sak | rolf | Nämen. PERFEKT öppnare! Kärran vid lådan ä din. Den gnisslar. Precis som ja. Skriv ditt nummer på en lapp, så slipper ja skriva brev. /Rolf​ |
| 0:49 | lapp | Brev från Rolf | Nämen. PERFEKT öppnare! Kärran vid lådan ä din. Den gnisslar. Precis som ja. Skriv ditt nummer på en lapp, så slipper ja skriva brev. /Rolf​ |
| 0:49 | röst | rolf | Nämen. PERFEKT öppnare! Kärran vid lådan ä din. Den gnisslar. Precis som ja. Skriv ditt nummer på en lapp, så slipper ja skriva brev. /Rolf​ · STORY |
| 0:49 | skratt | du | falsk tuta |
| 0:49 | paket |  | ge |
| 0:49 | väntar |  | (läget ändras) |
| 0:59 | väntar | rolf | Tjo. Ska grilla på lördag. Min grillspade smälte. Kan du göra en sån hä? /Rolf 🍖​ |
| 0:59 | paket |  | ge |
| 0:59 | väntar |  | (läget ändras) |
| 0:59 | händelse | malKlart | id=rolf2-brev del=Dag 4 – Kärran och mer vind nasta=rolf2-printa |
| 0:59 | bekräftelse | du | plats |
| 0:59 | väntar | du | Rolf vill ha en grillspade. Den printar jag. |
| 0:59 | MÅL |  | Printa grillspade |
| 1:00 | kvitto-visas | rolf | Tjo. Ska grilla på lördag. Min grillspade smälte. Kan du göra en sån hä? /Rolf 🍖​ |
| 1:00 | sak | rolf | Tjo. Ska grilla på lördag. Min grillspade smälte. Kan du göra en sån hä? /Rolf 🍖​ |
| 1:00 | lapp | Brev från Rolf | Tjo. Ska grilla på lördag. Min grillspade smälte. Kan du göra en sån hä? /Rolf 🍖​ |
| 1:01 | klar | rolf | Nämen. PERFEKT öppnare! Kärran vid lådan ä din. Den gnisslar. Precis som ja. Skriv ditt nummer på en lapp, så slipper ja skriva brev. /Rolf​ |
| 1:01 | händelse | brevLast | id=rolftack:1 |
| 1:01 | sak |  | (läget ändras) |
| 1:01 | klar |  | (läget ändras) |
| 1:01 | sak | du | Rolf vill ha en grillspade. Den printar jag. |
| 1:01 | målruta |  | Printa grillspade |
| 1:01 | pil |  | Printa grillspade |
| 1:01 | notis | tanke | 💭 Rolf vill ha en grillspade. Den printar jag. |
| 1:01 | röst | du | Rolf vill ha en grillspade. Den printar jag. · MÅL |
| 1:01 | nick |  | nick:43 |
| 1:02 | väntar | bud | (tips) |
| 1:02 | paket |  | sms |
| 1:02 | väntar | rolf | Hörru. Röda backar ä bra plast. Om man har rätt kvarn. /R​ |
| 1:06 | klar | du | Rolf vill ha en grillspade. Den printar jag. |
| 1:06 | sak | bud | (tips) |
| 1:06 | väntar | du | En skottkärra! Jag väljer den med hjulet och kör den full med skräp. |
| 1:07 | händelse | printStart | sak=grillspade |
| 1:07 | händelse | malKlart | id=rolf2-printa del=Dag 4 – Kärran och mer vind nasta=rolf2-ge |
| 1:07 | bekräftelse | du | plats |
| 1:07 | väntar | du | Grillspaden är klar. Den lägger jag i Rolfs postlåda. |
| 1:07 | MÅL |  | Ge Rolf grillspade |
| 1:07 | klar | bud | (tips) |
| 1:07 | sak | rolf | Hörru. Röda backar ä bra plast. Om man har rätt kvarn. /R​ |
| 1:07 | sms | rolf | Hörru. Röda backar ä bra plast. Om man har rätt kvarn. /R​ |
| 1:07 | sms-bubbla | rolf | Hörru. Röda backar ä bra plast. Om man har rätt kvarn. /R​ |
| 1:07 | röst | rolf | Hörru. Röda backar ä bra plast. Om man har rätt kvarn. /R​ · REAKTION |
| 1:09 | målruta |  | Ge Rolf grillspade |
| 1:11 | händelse | printKlar | sak=grillspade n=1 |
| 1:11 | kvittens-bock |  | ✓ Printa grillspade |
| 1:11 | händelse | tagitUrPrint | sak=grillspade n=1 |
| 1:12 | klar | rolf | Hörru. Röda backar ä bra plast. Om man har rätt kvarn. /R​ |
| 1:12 | sak | du | En skottkärra! Jag väljer den med hjulet och kör den full med skräp. |
| 1:12 | röst | du | En skottkärra! Jag väljer den med hjulet och kör den full med skräp. · MÅL |
| 1:15 | upplåst | skrivare | trim_skrivare2 |
| 1:15 | brott | UPPLÅST | trim_skrivare2 (skrivare 226 av 60) |
| 1:15 | händelse | upplast | id=trim_skrivare2 flask=skrivare |
| 1:15 | paket |  | tanke → sms |
| 1:15 | tanke | du | Skrivare M hinner inte heller. Den kunde gå fortare. |
| 1:15 | väntar | du | Skrivare M hinner inte heller. Den kunde gå fortare. |
| 1:15 | väntar | ali | Ali här. Skrivartrim igen. Nästa nivå. Den här gången skruvade jag åt rätt håll. |
| 1:18 | klar | du | En skottkärra! Jag väljer den med hjulet och kör den full med skräp. |
| 1:18 | sak | du | Skrivare M hinner inte heller. Den kunde gå fortare. |
| 1:18 | notis | tanke | 💭 Skrivare M hinner inte heller. Den kunde gå fortare. |
| 1:18 | röst | du | Skrivare M hinner inte heller. Den kunde gå fortare. · STORY |
| 1:22 | klar | du | Skrivare M hinner inte heller. Den kunde gå fortare. |
| 1:22 | struken | värld:TUUT TUUT! | TUUT TUUT! |
| 1:24 | sak | du | Grillspaden är klar. Den lägger jag i Rolfs postlåda. |
| 1:24 | pil |  | Ge Rolf grillspade |
| 1:24 | notis | tanke | 💭 Grillspaden är klar. Den lägger jag i Rolfs postlåda. |
| 1:24 | röst | du | Grillspaden är klar. Den lägger jag i Rolfs postlåda. · MÅL |
| 1:28 | klar | du | Grillspaden är klar. Den lägger jag i Rolfs postlåda. |
| 1:31 | brott | TRÄNGSEL 2 | "Rolf hä!! Funkar dä?? ja skrivr mä EN fingr. dä ta" 2.0 s efter förra meddelandet, 24.4 s efter en klar uppgift |
| 1:31 | sak | rolf | Rolf hä!! Funkar dä?? ja skrivr mä EN fingr. dä tar sin tid men dä ä int så farligt. Tack ska du ha för nummret, fingrarna tackar oxå. Ja lägger saker i lådan ibland å då sms:ar ja. Int efter tie bara. /R​ |
| 1:31 | sms | rolf | Rolf hä!! Funkar dä?? ja skrivr mä EN fingr. dä tar sin tid men dä ä int så farligt. Tack ska du ha för nummret, fingrarna tackar oxå. Ja lägger saker i lådan ibland å då sms:ar ja. Int efter tie bara. /R​ |
| 1:31 | sms-bubbla | rolf | Rolf hä!! Funkar dä?? ja skrivr mä EN fingr. dä tar sin tid men dä ä int så farligt. Tack ska du ha för nummret, fingrarna tackar oxå. Ja lägger saker i lådan ibland å då sms:ar ja. Int efter tie bara. /R​ |
| 1:31 | röst | rolf | Rolf hä!! Funkar dä?? ja skrivr mä EN fingr. dä tar sin tid men dä ä int så farligt. Tack ska du ha för nummret, fingrarna tackar oxå. Ja lägger saker i lådan ibland å då sms:ar ja. Int efter tie bara. /R​ · STORY |
| 1:39 | händelse | lagtIPostlada | sak=grillspade rolf=2 jobb=false |
| 1:39 | händelse | malKlart | id=rolf2-ge del=Dag 4 – Kärran och mer vind nasta=n3-tom-full-karra |
| 1:39 | bekräftelse | du | plats |
| 1:39 | väntar | du | Kärran rymmer massor. Jag fyller den och tippar allt i kvarnen. |
| 1:39 | MÅL |  | Töm en full kärra i kvarnen |
| 1:41 | målruta |  | Töm en full kärra i kvarnen |
| 1:43 | kvittens-bock |  | ✓ Ge Rolf grillspade |
| 1:48 | klar | rolf | Rolf hä!! Funkar dä?? ja skrivr mä EN fingr. dä tar sin tid men dä ä int så farligt. Tack ska du ha för nummret, fingrarna tackar oxå. Ja lägger saker i lådan ibland å då sms:ar ja. Int efter tie bara. /R​ |
| 1:48 | sak | du | Kärran rymmer massor. Jag fyller den och tippar allt i kvarnen. |
| 1:48 | pil |  | Töm en full kärra i kvarnen |
| 1:48 | notis | tanke | 💭 Kärran rymmer massor. Jag fyller den och tippar allt i kvarnen. |
| 1:48 | röst | du | Kärran rymmer massor. Jag fyller den och tippar allt i kvarnen. · MÅL |
| 1:55 | klar | du | Kärran rymmer massor. Jag fyller den och tippar allt i kvarnen. |
| 2:03 | karraKlick | du | träff |
| 2:03 | sak | foto | Tak över huvudet (och min tumme) |
| 2:03 | foto | du | Tak över huvudet (och min tumme) |
| 2:04 | karraKlick | du | träff |
| 2:05 | karraKlick | du | träff |
| 2:05 | klar | foto | Tak över huvudet (och min tumme) |
| 2:06 | karraKlick | du | träff |
| 2:07 | karraKlick | du | träff |
| 2:08 | karraKlick | du | träff |
| 2:09 | karraKlick | du | träff |
| 2:10 | karraKlick | du | träff |
| 2:13 | sak | du | I natt somnar jag torr. Det börjar bli ett hem. |
| 2:13 | notis | tanke | 💭 I natt somnar jag torr. Det börjar bli ett hem. |
| 2:13 | röst | du | I natt somnar jag torr. Det börjar bli ett hem. · STORY |
| 2:15 | tanke | du | Det får inte plats. Jag behöver något att tippa i. |
| 2:15 | väntar | du | Det får inte plats. Jag behöver något att tippa i. |
| 2:15 | struken | info:bra | 5 st i tratten · 7 st på marken bredvid |
| 2:15 | händelse | malKlart | id=n3-tom-full-karra del=Dag 4 – Kärran och mer vind nasta=sophallare |
| 2:15 | bekräftelse | du | plats |
| 2:15 | väntar | du | En sophållare bakom kvarnen. Då matar den sig själv. |
| 2:15 | MÅL |  | Köp sophållaren |
| 2:15 | upplåst | bara | matarband |
| 2:15 | brott | UPPLÅST | matarband (bara 0 av 3, sparat ihop) |
| 2:15 | händelse | upplast | id=matarband flask=bara |
| 2:15 | paket |  | sms |
| 2:15 | väntar | ali | Ali här. 🗑️ Sophållaren. Jag frågade AI:n hur man slipper bära skräp. Den gjorde det här. Den har mer fritid än jag. Suck. |
| 2:17 | klar | du | I natt somnar jag torr. Det börjar bli ett hem. |
| 2:17 | sak | du | Det får inte plats. Jag behöver något att tippa i. |
| 2:17 | notis | tanke | 💭 Det får inte plats. Jag behöver något att tippa i. |
| 2:17 | röst | du | Det får inte plats. Jag behöver något att tippa i. · STORY |
| 2:17 | målruta |  | Köp sophållaren |
| 2:19 | kvittens-bock |  | ✓ Töm en full kärra i kvarnen |
| 2:21 | klar | du | Det får inte plats. Jag behöver något att tippa i. |
| 2:23 | sak | du | En sophållare bakom kvarnen. Då matar den sig själv. |
| 2:23 | pil |  | Köp sophållaren |
| 2:23 | notis | tanke | 💭 En sophållare bakom kvarnen. Då matar den sig själv. |
| 2:23 | röst | du | En sophållare bakom kvarnen. Då matar den sig själv. · MÅL |
| 2:23 | nick |  | nick:46 |
| 2:24 | väntar | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått TAK. Och arbetsbord. Skriv in, Gunnar. Du skriver aldrig in. |
| 2:24 | radio | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått TAK. Och arbetsbord. Skriv in, Gunnar. Du skriver aldrig in. |
| 2:24 | skratt | du | Radio-Kjelle |
| 2:28 | klar | du | En sophållare bakom kvarnen. Då matar den sig själv. |
| 2:30 | sak | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått TAK. Och arbetsbord. Skriv in, Gunnar. Du skriver aldrig in. |
| 2:30 | notis |  | 📻 Radio Tippen: Radio Tippen, Kjelle här. Skjulet vid tippen har fått TAK. Och arbetsbord. Skriv in, Gunnar. Du skriver aldrig in. |
| 2:30 | röst | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått TAK. Och arbetsbord. Skriv in, Gunnar. Du skriver aldrig in. · REAKTION |
| 2:36 | skratt | du | falsk tuta |
| 2:40 | klar | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått TAK. Och arbetsbord. Skriv in, Gunnar. Du skriver aldrig in. |
| 2:42 | struken | rolf | Hörru. Morgonbulle på kontoret mä polarna. grannen har ny keps. Vi pratade om den i en timme. Den ä grön. /R​ |
| 2:42 | brott | TRÄNGSEL 2 | "Ali här. 🗑️ Sophållaren. Jag frågade AI:n hur man" 2.0 s efter förra meddelandet, 27.1 s efter en klar uppgift |
| 2:42 | sak | ali | Ali här. 🗑️ Sophållaren. Jag frågade AI:n hur man slipper bära skräp. Den gjorde det här. Den har mer fritid än jag. Suck. |
| 2:42 | sms | ali | Ali här. 🗑️ Sophållaren. Jag frågade AI:n hur man slipper bära skräp. Den gjorde det här. Den har mer fritid än jag. Suck. |
| 2:42 | sms-bubbla | ali | Ali här. 🗑️ Sophållaren. Jag frågade AI:n hur man slipper bära skräp. Den gjorde det här. Den har mer fritid än jag. Suck. |
| 2:42 | röst | ali | Ali här. 🗑️ Sophållaren. Jag frågade AI:n hur man slipper bära skräp. Den gjorde det här. Den har mer fritid än jag. Suck. · STORY |
| 2:45 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 2:45 | butiksbubbla | ali | Du igen. Bra. Du är den enda som köper nåt. |
| 2:47 | struken | info:guld | 3D-modell köpt – printa sophållare |
| 2:47 | händelse | kopt | sak=matarband |
| 2:47 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 2:48 | väntar | ali | Du igen. Bra. Du är den enda som köper nåt. |
| 2:53 | paket |  | tanke |
| 2:53 | tanke | du | Jaha, Rolf har hämtat en grillspade. |
| 2:53 | väntar | du | Jaha, Rolf har hämtat en grillspade. |
| 2:55 | klar | ali | Ali här. 🗑️ Sophållaren. Jag frågade AI:n hur man slipper bära skräp. Den gjorde det här. Den har mer fritid än jag. Suck. |
| 2:55 | sak | ali | Du igen. Bra. Du är den enda som köper nåt. |
| 2:55 | röst | ali | Du igen. Bra. Du är den enda som köper nåt. · STORY |
| 2:59 | händelse | printStart | sak=byggsats:matarband |
| 3:00 | klar | ali | Du igen. Bra. Du är den enda som köper nåt. |
| 3:03 | toast | bra | Del 1 av 3 klar |
| 3:06 | toast | bra | Del 2 av 3 klar |
| 3:08 | sak |  | (läget ändras) |
| 3:08 | brev | rolf | rolf:2 |
| 3:08 | klar |  | (läget ändras) |
| 3:08 | toast | fel | Ingen ström – trampa cykeln |
| 3:13 | struken | du | Jaha, Rolf har hämtat en grillspade. |
| 3:15 | väntar | värld:TUUT! Tjena! | TUUT! Tjena! |
| 3:18 | händelse | printKlar | sak=byggsats:matarband n=1 |
| 3:18 | händelse | tagitUrPrint | sak=byggsats:matarband n=1 |
| 3:18 | paket |  | sms |
| 3:18 | väntar | ali | Ali här. Jag såg Sophållare på avstånd. Ett streck blev lite snett. Mitt fel. Vackert ändå. |
| 3:18 | paket |  | sms |
| 3:18 | väntar | ali | Ali igen. Jag har sagt till min bror att jag inte går i pension. Jag startar något. Han skrattade. Jag skrattade också. Men jag menar det. Tack. Säg inget. |
| 3:21 | händelse | placerat | sak=sophallare |
| 3:21 | tanke | du | Sophållaren står bakom kvarnen! Töm allt skräp i den – den matar kvarnen själv. |
| 3:21 | väntar | du | Sophållaren står bakom kvarnen! Töm allt skräp i den – den matar kvarnen själv. |
| 3:21 | sak | du | Sophållaren står bakom kvarnen! Töm allt skräp i den – den matar kvarnen själv. |
| 3:21 | notis | tanke | 💭 Sophållaren står bakom kvarnen! Töm allt skräp i den – den matar kvarnen själv. |
| 3:21 | röst | du | Sophållaren står bakom kvarnen! Töm allt skräp i den – den matar kvarnen själv. · REAKTION |
| 3:21 | händelse | malKlart | id=sophallare del=Dag 4 – Kärran och mer vind nasta=pall |
| 3:21 | bekräftelse | du | plats |
| 3:21 | kvittens | du | Nu kan jag tömma hela kärran på en gång. |
| 3:21 | väntar | du | Nu kan jag tömma hela kärran på en gång. |
| 3:21 | väntar | du | Jag behöver något att sitta på. En pall. Lagom ambitiöst. |
| 3:21 | MÅL |  | Printa en pall |
| 3:23 | målruta |  | Printa en pall |
| 3:28 | klar | du | Sophållaren står bakom kvarnen! Töm allt skräp i den – den matar kvarnen själv. |
| 3:28 | sak | du | Nu kan jag tömma hela kärran på en gång. |
| 3:28 | röst | du | Nu kan jag tömma hela kärran på en gång. · STORY |
| 3:31 | klar | du | Nu kan jag tömma hela kärran på en gång. |
| 3:31 | sak | du | Jag behöver något att sitta på. En pall. Lagom ambitiöst. |
| 3:31 | pil |  | Printa en pall |
| 3:31 | notis | tanke | 💭 Jag behöver något att sitta på. En pall. Lagom ambitiöst. |
| 3:31 | röst | du | Jag behöver något att sitta på. En pall. Lagom ambitiöst. · MÅL |
| 3:31 | nick |  | nick:47 |
| 3:37 | klar | du | Jag behöver något att sitta på. En pall. Lagom ambitiöst. |
| 3:39 | sak | ali | Ali här. Jag såg Sophållare på avstånd. Ett streck blev lite snett. Mitt fel. Vackert ändå. |
| 3:39 | sms | ali | Ali här. Jag såg Sophållare på avstånd. Ett streck blev lite snett. Mitt fel. Vackert ändå. |
| 3:39 | sms-bubbla | ali | Ali här. Jag såg Sophållare på avstånd. Ett streck blev lite snett. Mitt fel. Vackert ändå. |
| 3:39 | röst | ali | Ali här. Jag såg Sophållare på avstånd. Ett streck blev lite snett. Mitt fel. Vackert ändå. · REAKTION |
| 3:44 | händelse | printStart | sak=kruka |
| 3:44 | paket |  | tanke |
| 3:44 | tanke | du | Kajsa. Ut ur skrivaren. Nu. |
| 3:44 | väntar | du | Kajsa. Ut ur skrivaren. Nu. |
| 3:44 | skratt | du | Kajsa i skrivaren |
| 3:47 | händelse | printKlar | sak=kruka n=14 |
| 3:48 | händelse | tagitUrPrint | sak=kruka n=1 |
| 3:50 | klar | ali | Ali här. Jag såg Sophållare på avstånd. Ett streck blev lite snett. Mitt fel. Vackert ändå. |
| 3:52 | struken | värld:TUUT! Tjena! | TUUT! Tjena! |
| 3:58 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 4:00 | händelse | salt | sak=kruka n=1 |
| 4:00 | aliSalt | ali | 105 |
| 4:00 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 4:01 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 4:02 | händelse | kopt | sak=pall |
| 4:02 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 4:02 | röst | ali | Bra val. Folk köper sånt. Jag vet inte varför. · STORY |
| 4:02 | butiksbubbla | ali | Pall? Bra val. Folk köper sånt. Jag vet inte varför. |
| 4:04 | morgonkort | ⏸️ Pausad | ⏸️ Pausad · Klicka för att fortsätta. |
| 4:17 | sak |  | (läget ändras) |
| 4:17 | brev | rolf | rolf:2 |
| 4:17 | klar |  | (läget ändras) |
| 4:19 | struken | du | Kajsa. Ut ur skrivaren. Nu. |
| 4:22 | händelse | printStart | sak=pall |
| 4:27 | händelse | printKlar | sak=pall n=1 |
| 4:27 | händelse | malKlart | id=pall del=Dag 4 – Kärran och mer vind nasta=vind4 |
| 4:27 | bekräftelse | du | plats |
| 4:27 | väntar | du | En vindsnurra till på skjulets tak. Skrivarna vill ha mer ström. |
| 4:27 | målruta |  | Spara till vindsnurran · 57 / 133 kr |
| 4:27 | MÅL |  | Spara till vindsnurran · 57 / 133 kr |
| 4:27 | sak | du | En vindsnurra till på skjulets tak. Skrivarna vill ha mer ström. |
| 4:27 | pil |  | Spara till vindsnurran · 57 / 133 kr |
| 4:27 | notis | tanke | 💭 En vindsnurra till på skjulets tak. Skrivarna vill ha mer ström. |
| 4:27 | röst | du | En vindsnurra till på skjulets tak. Skrivarna vill ha mer ström. · MÅL |
| 4:28 | händelse | tagitUrPrint | sak=pall n=1 |
| 4:31 | kvittens-bock |  | ✓ Printa en pall |
| 4:33 | klar | du | En vindsnurra till på skjulets tak. Skrivarna vill ha mer ström. |
| 4:37 | händelse | placerat | sak=pall |
| 4:47 | strömdipp | du | vindsnurra2 |
| 4:47 | paket |  | tanke |
| 4:47 | tanke | du | Allt stannar. Maskinerna drar mer än jag får in. |
| 4:47 | väntar | du | Allt stannar. Maskinerna drar mer än jag får in. |
| 4:48 | upplåst | strom | vindsnurra2 |
| 4:48 | brott | UPPLÅST | vindsnurra2 (strom 30 av 15) |
| 4:48 | händelse | upplast | id=vindsnurra2 flask=strom |
| 4:48 | paket |  | sms |
| 4:48 | väntar | ali | Ali här. En snurra till? Taket har plats för två. Vinden har inget emot det. |
| 4:57 | händelse | printStart | sak=kruka |
| 4:57 | toast | fel | Ingen ström – maskinerna drar mer än du får in. Bygg en solpanel |
| 4:58 | struken | ali | Ali igen. Jag har sagt till min bror att jag inte går i pension. Jag startar något. Han skrattade. Jag skrattade också. Men jag menar det. Tack. Säg inget. |
| 5:17 | skratt | du | falsk tuta |
| 5:17 | väntar | värld:TUUT TUUT! | TUUT TUUT! |
| 5:22 | väntar | bror | Pappa har tvättat bilen tre gånger den här veckan. Jag sa att du bor på tippen. Han frågade vilken modell sopbilen var. |
| 5:24 | sak | ali | Ali här. Skrivartrim igen. Nästa nivå. Den här gången skruvade jag åt rätt håll. |
| 5:24 | sms | ali | Ali här. Skrivartrim igen. Nästa nivå. Den här gången skruvade jag åt rätt håll. |
| 5:24 | sms-bubbla | ali | Ali här. Skrivartrim igen. Nästa nivå. Den här gången skruvade jag åt rätt håll. |
| 5:24 | röst | ali | Ali här. Skrivartrim igen. Nästa nivå. Den här gången skruvade jag åt rätt håll. · STORY |
| 5:26 | händelse | printKlar | sak=kruka n=15 |
| 5:30 | händelse | tagitUrPrint | sak=kruka n=1 |
| 5:33 | klar | ali | Ali här. Skrivartrim igen. Nästa nivå. Den här gången skruvade jag åt rätt håll. |
| 5:38 | struken | värld:TUUT TUUT! | TUUT TUUT! |
| 5:41 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 5:42 | händelse | salt | sak=kruka n=1 |
| 5:42 | aliSalt | ali | 100 |
| 5:42 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 5:43 | sak | du | Allt stannar. Maskinerna drar mer än jag får in. |
| 5:43 | notis | tanke | 💭 Allt stannar. Maskinerna drar mer än jag får in. |
| 5:43 | röst | du | Allt stannar. Maskinerna drar mer än jag får in. · STORY |
| 5:46 | klar | du | Allt stannar. Maskinerna drar mer än jag får in. |
| 5:50 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 5:52 | struken | info:guld | 3D-modell köpt – printa vindsnurra till skjultaket |
| 5:52 | händelse | kopt | sak=vindsnurra |
| 5:52 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 6:04 | händelse | printStart | sak=byggsats:vindsnurra |
| 6:08 | händelse | printKlar | sak=byggsats:vindsnurra n=1 |
| 6:09 | struken | info:guld | 🌬️ Vindsnurran ska upp på skjulets tak. |
| 6:09 | händelse | tagitUrPrint | sak=byggsats:vindsnurra n=1 |
| 6:09 | sak | ali | Ali här. En snurra till? Taket har plats för två. Vinden har inget emot det. |
| 6:09 | sms | ali | Ali här. En snurra till? Taket har plats för två. Vinden har inget emot det. |
| 6:09 | sms-bubbla | ali | Ali här. En snurra till? Taket har plats för två. Vinden har inget emot det. |
| 6:09 | röst | ali | Ali här. En snurra till? Taket har plats för två. Vinden har inget emot det. · STORY |
| 6:14 | väntar | bud | (tips) |
| 6:16 | klar | ali | Ali här. En snurra till? Taket har plats för två. Vinden har inget emot det. |
| 6:16 | sak | bud | (tips) |
| 6:18 | klar | bud | (tips) |
| 6:20 | meddelande | bror | Jag har gjort om ditt rum till gym. Mamma vet inte. Säg inget. |
| 6:21 | röst | bror | Jag har gjort om ditt rum till gym. Mamma vet inte. Säg inget. · STORY |
| 6:29 | paket |  | sms |
| 6:29 | väntar | bror | Bra. Jag har satt upp en räcka i din garderob. Den håller. Typ. |
| 6:37 | händelse | brevLast | id=b_gym |
| 6:45 | händelse | placerat | sak=vindsnurra |
| 6:45 | struken | info:guld | 🌬️ Vindsnurran sitter på taket – den trampar cykeln åt mig när det blåser |
| 6:45 | monterat | du | byggsats:vindsnurra |
| 6:45 | händelse | monterat | sak=vindsnurra |
| 6:45 | händelse | malKlart | id=vind4 del=Dag 4 – Kärran och mer vind nasta=n3-isolera-tva-vaggar |
| 6:45 | bekräftelse | du | plats |
| 6:45 | lapp | 📔 Dagbok | Slut på trampandet. Nästan. |
| 6:45 | dagbokrad | du | Slut på trampandet. Nästan. |
| 6:45 | väntar | notis:Slut på trampandet. Nästan. | Slut på trampandet. Nästan. |
| 6:45 | väntar | du | Det drar genom väggarna. Isolering, och sen blir det varmt. |
| 6:45 | MÅL |  | Isolera två väggar · 0/2 |
| 6:45 | sak | notis:Slut på trampandet. Nästan. | Slut på trampandet. Nästan. |
| 6:45 | notis | dagbok | Slut på trampandet. Nästan. |
| 6:47 | klar | notis:Slut på trampandet. Nästan. | Slut på trampandet. Nästan. |
| 6:47 | målruta |  | Isolera två väggar · 0/2 |
| 6:49 | sak | du | Det drar genom väggarna. Isolering, och sen blir det varmt. |
| 6:49 | pil |  | Isolera två väggar · 0/2 |
| 6:49 | notis | tanke | 💭 Det drar genom väggarna. Isolering, och sen blir det varmt. |
| 6:49 | röst | du | Det drar genom väggarna. Isolering, och sen blir det varmt. · MÅL |
| 6:50 | nick |  | nick:49 |
| 6:55 | klar | du | Det drar genom väggarna. Isolering, och sen blir det varmt. |
| 6:55 | händelse | pappa | Pappa ringer |
| 6:59 | röst | pappa | Hej. Det är pappa. · STORY |
| 7:02 | röst | du | Hej pappa. · STORY |
| 7:04 | röst | pappa | Mamma står bredvid. Hon säger att jag ska fråga om du äter. · STORY |
| 7:09 | röst | du | Jag äter. Och jag har en egen kvarn nu. Och en 3D-skrivare. · STORY |
| 7:13 | röst | pappa | Jaha. En kvarn. Vad lugnt då. · STORY |
| 7:16 | röst | pappa | Jag kanske kommer förbi nån dag. Om det passar. · STORY |
| 7:20 | röst | du | Det passar. · STORY |
| 7:22 | röst | pappa | Bra. Hej då då. · STORY |
| 7:31 | händelse | samtalSlut | id=pappa4 |
| 7:31 | struken | bror | Pappa har tvättat bilen tre gånger den här veckan. Jag sa att du bor på tippen. Han frågade vilken modell sopbilen var. |
| 7:32 | sak | bror | Bra. Jag har satt upp en räcka i din garderob. Den håller. Typ. |
| 7:32 | sms | bror | Bra. Jag har satt upp en räcka i din garderob. Den håller. Typ. |
| 7:32 | sms-bubbla | bror | Bra. Jag har satt upp en räcka i din garderob. Den håller. Typ. |
| 7:32 | röst | bror | Bra. Jag har satt upp en räcka i din garderob. Den håller. Typ. · STORY |
| 7:37 | klar | bror | Bra. Jag har satt upp en räcka i din garderob. Den håller. Typ. |
| 7:48 | händelse | printStart | sak=kruka |
| 7:50 | händelse | printStart | sak=kruka |
| 7:51 | händelse | printKlar | sak=kruka n=16 |
| 7:56 | händelse | printKlar | sak=kruka n=17 |
| 7:56 | händelse | tagitUrPrint | sak=kruka n=1 |
| 7:56 | händelse | tagitUrPrint | sak=kruka n=1 |
| 8:04 | väntar | bud | (tips) |
| 8:04 | sak | bud | (tips) |
| 8:06 | klar | bud | (tips) |
| 8:06 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 8:08 | händelse | salt | sak=kruka n=1 |
| 8:08 | aliSalt | ali | 95 |
| 8:08 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 8:08 | händelse | salt | sak=kruka n=1 |
| 8:08 | aliSalt | ali | 90 |
| 8:08 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 8:09 | meddelande | mamma | Jag läste om en man som bodde på en soptipp. Han blev attackerad av måsar. Finns det måsar där? |
| 8:10 | röst | mamma | Jag läste om en man som bodde på en soptipp. Han blev attackerad av måsar. Finns det måsar där? · STORY |
| 8:19 | paket |  | sms |
| 8:19 | väntar | mamma | En katt? Är den vaccinerad? Rör den inte. Eller jo. Ge den en macka. |
| 8:29 | händelse | brevLast | id=m_masar |
| 8:29 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 8:31 | struken | info:guld | 3D-modell köpt – printa isolerskiva (vägg) |
| 8:31 | händelse | kopt | sak=vaggar |
| 8:31 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 8:32 | sak | mamma | En katt? Är den vaccinerad? Rör den inte. Eller jo. Ge den en macka. |
| 8:32 | sms | mamma | En katt? Är den vaccinerad? Rör den inte. Eller jo. Ge den en macka. |
| 8:32 | sms-bubbla | mamma | En katt? Är den vaccinerad? Rör den inte. Eller jo. Ge den en macka. |
| 8:32 | röst | mamma | En katt? Är den vaccinerad? Rör den inte. Eller jo. Ge den en macka. · STORY |
| 8:38 | klar | mamma | En katt? Är den vaccinerad? Rör den inte. Eller jo. Ge den en macka. |
| 8:43 | händelse | printStart | sak=byggsats:vaggar |
| 8:47 | händelse | printKlar | sak=byggsats:vaggar n=1 |
| 8:48 | händelse | tagitUrPrint | sak=byggsats:vaggar n=1 |
| 8:55 | tanke | du | Bakväggen klar. 3 kvar. |
| 8:55 | väntar | du | Bakväggen klar. 3 kvar. |
| 8:55 | sak | du | Bakväggen klar. 3 kvar. |
| 8:55 | notis | tanke | 💭 Bakväggen klar. 3 kvar. |
| 8:55 | röst | du | Bakväggen klar. 3 kvar. · REAKTION |
| 8:57 | klar | du | Bakväggen klar. 3 kvar. |
| 9:07 | händelse | printStart | sak=byggsats:vaggar |
| 9:11 | händelse | printKlar | sak=byggsats:vaggar n=1 |
| 9:12 | händelse | tagitUrPrint | sak=byggsats:vaggar n=1 |
| 9:18 | tanke | du | Vänster vägg klar. 2 kvar. |
| 9:18 | väntar | du | Vänster vägg klar. 2 kvar. |
| 9:18 | sak | du | Vänster vägg klar. 2 kvar. |
| 9:18 | notis | tanke | 💭 Vänster vägg klar. 2 kvar. |
| 9:18 | röst | du | Vänster vägg klar. 2 kvar. · REAKTION |
| 9:18 | händelse | malKlart | id=n3-isolera-tva-vaggar del=Dag 4 – Kärran och mer vind nasta=sov4 |
| 9:18 | paket |  | lapp |
| 9:18 | väntar | du | En skrivare räcker inte. |
| 9:18 | bekräftelse | du | plats |
| 9:19 | MÅL |  | Sov när du vill |
| 9:21 | klar | du | Vänster vägg klar. 2 kvar. |
| 9:21 | sak | du | En skrivare räcker inte. |
| 9:21 | kvallsrad | du | En skrivare räcker inte. |
| 9:21 | målruta |  | Sov när du vill |
| 9:21 | klar | du | En skrivare räcker inte. |
| 9:21 | sak | du | (nytt mål i rutan) |
| 9:21 | pil |  | Sov när du vill |
| 9:21 | klar | du | (nytt mål i rutan) |
| 9:22 | kvittens-bock |  | ✓ Isolera två väggar · 2/2 |
| 9:26 | väntar | notis:🌇 Klockan är 21. Ali slår igen luckan.  | 🌇 Klockan är 21. Ali slår igen luckan. Dagens jobb är klart – gå in i skjulet och sov i sängen. |
| 9:32 | nattkort | du | 🌙 18 dagar kvar. God natt. zzz… En skrivare räcker inte. DAGENS PRINTAR Blomkruka × 4 Grillspade × 1 Pall × 1 Totalt 6 printar 💰 Tjänat i dag +510 kr |

<details><summary>Botens handlingar dag 4</summary>

- 0:00 — dag 4 börjar — (32 kr)
- 0:07 popup: "FORTSÄTT" (32 kr)
- 0:34 gå till Rolfs postlåda (28 m) (32 kr)
- 0:41 panel: "Rolfs postlåda
Det här låg i l" (152 kr)
- 0:42 vet inte vad jag ska göra: "Möt sopbilen vid grinden" (152 kr)
- 1:01 gå till fel håll en bit (4 m) (152 kr)
- 1:05 gå till skrivaren (8 m) (152 kr)
- 1:07 printar Grillspade (152 kr)
- 1:12 tar ut 1 st ur skrivaren (152 kr)
- 1:31 nybörjaren ser ingen pil – tittar runt (152 kr)
- 1:36 valj grillspade: true, vald grillspade, post {"l":null,"tr":null,"tm":[]}, nummer true (152 kr)
- 1:39 gå till Rolfs postlåda (8 m) (152 kr)
- 1:55 nybörjaren ser ingen pil – tittar runt (152 kr)
- 2:11 fyller kärran med 8 skräp (152 kr)
- 2:15 gå till kvarnen (10 m) (152 kr)
- 2:45 gå till Ali (31 m) (152 kr)
- 2:45 öppnar Alis butik – köpa sophållare (152 kr)
- 2:48 köper matarband för 120 kr (32 kr)
- 2:58 gå till skrivaren (24 m) (32 kr)
- 2:59 printar Sophållare (3 delar) (32 kr)
- 3:19 tar ut 1 st ur skrivaren (32 kr)
- 3:21 gå till kvarnen (5 m) (32 kr)
- 3:41 tjänar pengar till receptet pall: 32/80 kr → printar blomkruka (105 kr) (32 kr)
- 3:43 gå till skrivaren (3 m) (32 kr)
- 3:44 printar Blomkruka (32 kr)
- 3:48 tar ut 1 st ur skrivaren (32 kr)
- 3:58 gå till Ali (27 m) (32 kr)
- 3:58 öppnar Alis butik – sälja (32 kr)
- 4:00 säljer hos Ali: +105 kr (137 kr)
- 4:01 öppnar Alis butik – köpa receptet pall (137 kr)
- 4:03 köper pall för 80 kr (57 kr)
- 4:12 kort: "FORTSÄTTeller tryck Esc" (57 kr)
- 4:20 gå till skrivaren (24 m) (57 kr)
- 4:22 printar Pall (57 kr)
- 4:28 tar ut 1 st ur skrivaren (57 kr)
- 4:36 gå till platsen för pall (20 m) (57 kr)
- 4:37 ställer ut pall (57 kr)
- 4:42 nybörjaren ser ingen pil – tittar runt (57 kr)
- 4:47 tjänar pengar till väntar på flaskhalsen för vindsnurra2: 57/97 kr → printar blomkruka (100 kr) (57 kr)
- 4:55 gå till skrivaren (20 m) (57 kr)
- 4:57 printar Blomkruka (57 kr)
- 4:58 gå till cykeln (3 m) (57 kr)
- 5:30 gå till skrivaren (4 m) (57 kr)
- 5:31 tar ut 1 st ur skrivaren (57 kr)
- 5:41 gå till Ali (26 m) (57 kr)
- 5:41 öppnar Alis butik – sälja (57 kr)
- 5:43 säljer hos Ali: +100 kr (157 kr)
- 5:50 öppnar Alis butik – köpa vindsnurra till skjultaket (157 kr)
- 5:53 köper vindsnurra för 133 kr (24 kr)
- 6:03 gå till skrivaren (24 m) (24 kr)
- 6:04 printar Vindsnurra till skjultaket (24 kr)
- 6:09 tar ut 1 st ur skrivaren (24 kr)
- 6:29 popup: "Okej, jag säger inget." (24 kr)
- 6:37 popup: "Läst" (24 kr)
- 6:45 gå till sätt vindsnurran på taket (18 m) (24 kr)
- 6:59 popup: "Svara E" (24 kr)
- 7:15 popup: "Nästa E" (24 kr)
- 7:20 popup: "Nästa E" (24 kr)
- 7:26 popup: "Nästa E" (24 kr)
- 7:31 popup: "Lägg på E" (24 kr)
- 7:40 tjänar pengar till isolerskiva (vägg): 24/130 kr → printar blomkruka (95 kr) (24 kr)
- 7:46 gå till skrivaren (18 m) (24 kr)
- 7:48 printar Blomkruka (24 kr)
- 7:49 gå till skrivaren (2 m) (24 kr)
- 7:50 printar Blomkruka (24 kr)
- 7:56 tar ut 1 st ur skrivaren (24 kr)
- 7:57 tar ut 1 st ur skrivaren (24 kr)
- 8:06 gå till Ali (26 m) (24 kr)
- 8:06 öppnar Alis butik – sälja (24 kr)
- 8:08 säljer hos Ali: +185 kr (209 kr)
- 8:19 popup: "Bara en katt." (209 kr)
- 8:29 popup: "Läst" (209 kr)
- 8:29 öppnar Alis butik – köpa isolerskiva (vägg) (209 kr)
- 8:32 köper vaggar för 130 kr (79 kr)
- 8:42 gå till skrivaren (24 m) (79 kr)
- 8:43 printar Isolerskiva (vägg) (79 kr)
- 8:48 tar ut 1 st ur skrivaren (79 kr)
- 8:55 gå till skjulet (bak) (17 m) (79 kr)
- 9:06 gå till skrivaren (17 m) (79 kr)
- 9:07 printar Isolerskiva (vägg) (79 kr)
- 9:12 tar ut 1 st ur skrivaren (79 kr)
- 9:18 gå till skjulet (vanster) (17 m) (79 kr)
- 9:29 gå till sängen (1 m) (79 kr)

</details>

## Dag 5

| Tid | Källa | Vem | Text |
|---|---|---|---|
| 9:32 | vara | ali | pall |
| 9:32 | händelse | malKlart | id=sov4 del=Dag 4 – Kärran och mer vind nasta=rolf3-brev |
| 9:32 | bekräftelse | du | plats |
| 9:32 | MÅL |  | Möt sopbilen vid grinden |

<details><summary>Botens handlingar dag 5</summary>

- 0:00 — dag 5 börjar — (79 kr)

</details>
