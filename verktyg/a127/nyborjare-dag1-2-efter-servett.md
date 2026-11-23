# Nybörjarboten – körning 1

*A-081: samma händer som AX, men boten vet bara det som syns (målrutan, pilen, det som sägs). Går 3 m/s, läser 60 ms per tecken, följer pilen, tittar runt när målet är otydligt och går fel ibland.*

| Dag | Minuter | FÖRVIRRAD | FAST | TRÄNGSEL | HANN INTE LÄSA | DOLT | NY SAK UTAN FÖRKLARING | OKÄNT ORD |
|---|---|---|---|---|---|---|---|---|
| 1 | 12.8 | 1 | 0 | 1 | 0 | 0 | 1 | 0 |
| 2 | 9.6 | 1 | 0 | 2 | 0 | 0 | 0 | 0 |

## Flaggor (6)

- **NY SAK UTAN FÖRKLARING** dag 1 0:18: byta: ingen text eller bild har förklarat det innan första gången
- **TRÄNGSEL** dag 1 7:21: notis ”Min första 3D-modell! Jag printar inte b” och tanke-text ”💭 Ritningen är min. Nu printar jag skrä” inom 0.4 s
- **FÖRVIRRAD** dag 1 10:47: pilen pekar 28 m från där målet görs (okänt)
- **TRÄNGSEL** dag 2 1:11: notis ”En stor bil tippade en ny last. Allt det” och tanke-text ”💭 Motorn ska sitta där veven sitter. Ja” inom 0.4 s
- **FÖRVIRRAD** dag 2 4:23: 35 s utan framsteg på "Ta sopsäckarna"
- **TRÄNGSEL** dag 2 4:25: info ”Tornet är fullt. Skrivaren får jobba ika” och tanke-text ”💭 Rolf slängde av något åt mig.” inom 0.8 s

## Friktionskurvan (sekunder per mål: nybörjaren mot AX)

| Dag | Mål | Nybörjaren | AX | × |
|---|---|---|---|---|
| 1 | Lasta av skrivaren | 0 | – | – |
| 1 | Lasta av skrivaren | 34 | – | – |
| 1 | Ställ upp skrivaren | 24 | – | – |
| 1 | Skrivaren behöver ström | 33 | – | – |
| 1 | Ställ cykel och generator | 27 | – | – |
| 1 | Välj vad skrivaren ska printa | 13 | – | – |
| 1 | Trampa cykeln | 5 | – | – |
| 1 | En nyckelring till | 43 | – | – |
| 1 | Visa nyckelringarna i affären mitt emot | 39 | – | – |
| 1 | Köp kvarnen | 26 | – | – |
| 1 | Ställ kvarnen | 29 | – | – |
| 1 | Gör egen tråd | 24 | – | – |
| 1 | Printa med egen tråd | 28 | – | – |
| 1 | Sälj hos Ali | 33 | – | – |
| 1 | Koppla in powerbanken | 34 | – | – |
| 1 | Köp skräpgripen | 33 | – | – |
| 1 | Printa skräpgripen | 52 | – | – |
| 1 | Spara till krukreceptet · 20 / 40 kr | 103 | – | – |
| 1 | Sälj blomkrukan | 31 | – | – |
| 1 | Köp sängen | 21 | – | – |
| 1 | Printa sängen | 111 | – | – |
| 2 | Spara till kvarnmotorn · 35 / 50 kr | -700 | – | – |
| 2 | Printa kvarnmotorn till kvarnen | 47 | – | – |
| 2 | Städa gården | 53 | – | – |
| 2 | Gå till bilen vid skjulet | 122 | – | – |
| 2 | Möt sopbilen vid grinden | 34 | – | – |
| 2 | Printa ölhållare med kylklamp | 5 | – | – |
| 2 | Ge Rolf ölhållare med kylklamp | 31 | – | – |
| 2 | Spara till vindsnurran · 90 / 133 kr | 91 | – | – |
| 2 | Bygg en dörr till skjulet | 110 | – | – |

---

# Simulering kapitel 1 – körning 1

*Gjord 2026-11-23 02:03 med `verktyg/sim-kapitel1.mjs` + `verktyg/sim-bot.js` (punkt AX). Boten går 4,5 m/s, läser 15 tecken/s, trampar, vevar, plockar, printar, köper och säljer via spelets egna funktioner. Tiderna är speltid.*

## Sammanfattning

| Dag | Minuter | Väntan | Prints (totalt) | Kr vid sömn | Bär | Trivsel |
|---|---|---|---|---|---|---|
| 1 | 12.8 | 1 % | 10 | 35 | 6 | 19 |
| 2 | 9.6 | 0 % | 14 | 47 | 10 | 38 |

## Flaskhalskartan (EE)

| Dag | bara | mala | trampa | strom | skrivare | inkomst | Upplåst |
|---|---|---|---|---|---|---|---|
| 1 | 4 | 7 | 20 | 17 | 89 | 8 | grip (bara, 8:28), kruka (inkomst, 8:53) |
| 2 | 2 | 143 | 3 | 4 | 461 | 0 | kvarnmotor (mala, 0:54), rullstall (skrivare, 2:28), trim_skrivare (skrivare, 3:28), vindsnurra (trampa, 6:45) |

TIDIG: 0 · FAST: 0 · upplåst av reserven (målet väntade 3 min): 0

**SKRATT:** 22 roliga ögonblick på 22 min (9.8 per 10 min, mål minst 5)

**Köp:**

- dag 1 4:02 – gammalkvarn (30 kr)
- dag 1 7:03 – grip (50 kr)
- dag 1 9:15 – kruka (40 kr)
- dag 1 10:30 – sang (60 kr)
- dag 2 1:08 – kvarnmotor (50 kr)
- dag 2 7:00 – vindsnurra (133 kr)
- dag 2 8:18 – dorr (120 kr)

## Storykedjan (kvittens → varför → nytt mål)

| Dag | Tid | Id | Kvittens | Varför | Nytt mål | Tid till målet |
|---|---|---|---|---|---|---|
| 1 | 0:33 | lasta | Tung. Den har storebror aldrig burit så långt. |  | Skrivaren ställer jag mot skräpberget. Min första verkstad. | 0.3 s |
| 1 | 2:09 | valjModell | Den piper. Den GÖR något. |  | Nu behöver den ström. Trampa. | 1.7 s |
| 1 | 2:15 | trampa | Klar! Ta ut den innan den ändrar sig. |  | En nyckelring till, så länge storebrors rulle räcker. | 16.2 s |
| 1 | 4:56 | flaska | Det blir tråd! Riktig plasttråd. |  | Min egen tråd. Nu printar jag en nyckelring av den. | 4.4 s |
| 1 | 9:38 | krukaD1 | En kruka. Mamma skulle bli så stolt. Hon får inte veta. |  | Ali gillar krukor. Han sa det själv. | 0.8 s |
| 1 | 12:21 | printSang | En säng. Jag printade en SÄNG. |  | Sängen ska in i skjulet. Sen sover jag. | 1.7 s |
| 2 | 7:32 | vindsnurra | Den snurrar! Långsamt. Men den snurrar. |  | Det drar från dörrhålet. En dörr kan jag printa. | 0.6 s |

## Hur länge nya mål väntade (från att förra målet blev klart till att det nya syntes i målrutan)

Snitt 2.5 s · max 13.1 s · över 4 s: 4 · över 8 s: 2 av 30

## Flaggor (66)

- **UPPREPNING** dag 1 5:54: Den köper jag. Ge hit. (CT)
- **UPPREPNING** dag 2 4:08: Tornet är fullt. Skrivaren får jobba ikapp. (CT)
- **KROCK** dag 1 0:25: 2.5 s mellan [notis] "Spikade ihop en skylt av bräder från skräpberget: Soptippsvä" och [notis] "💭 Storebrors skrivare står kvar på cykeln vid vägen. Den sk"
- **KROCK** dag 1 2:25: 2.8 s mellan [bubbla] "Hallå där, nya grannen! Vad är det där du gör?" och [notis] "💭 Jag gjorde den här. Av skräp. Det här kan funka."
- **KROCK** dag 1 5:03: 2.5 s mellan [notis] "Kvarnen funkar. Soptippen är en gruva." och [notis] "💭 Min egen tråd. Nu printar jag en nyckelring av den."
- **KROCK** dag 1 7:09: 0.4 s mellan [notis] "Min första 3D-modell! Jag printar inte bara saker – jag prin" och [notis] "💭 Ritningen är min. Nu printar jag skräpgripen."
- **KROCK** dag 2 1:09: 0.0 s mellan [lapp] "Sopbilen tippade en ny last. Allt det skräpet – och grinden " och [notis] "En stor bil tippade en ny last. Allt det skräpet – och grind"
- **KROCK** dag 2 1:09: 0.4 s mellan [notis] "En stor bil tippade en ny last. Allt det skräpet – och grind" och [notis] "💭 Motorn ska sitta där veven sitter. Jag printar den först."
- **KROCK** dag 2 2:51: 2.5 s mellan [notis] "Gården är STÄDAD, av mig, frivilligt. Mamma skulle aldrig tr" och [notis] "💭 En stor bil saktar in vid skjulet. Jag går dit."
- **KEDJA** dag 1 2:15: trampa: nytt mål 16.2 s efter kedjan (max 2 s)
- **KEDJA** dag 1 4:56: flaska: nytt mål 4.4 s efter kedjan (max 2 s)
- **PAUS** dag 1 0:25: 0.0 s paus före "Storebrors skrivare står kvar på cykeln vid vägen."
- **PAUS** dag 1 2:13: 0.1 s paus före "Nu behöver den ström. Trampa."
- **PAUS** dag 1 2:18: 0.0 s paus före "Klar! Ta ut den innan den ändrar sig."
- **PAUS** dag 1 2:22: 0.1 s paus före "Hallå där, nya grannen! Vad är det där du gör?"
- **PAUS** dag 1 2:25: 1.0 s paus före "Jag gjorde den här. Av skräp. Det här kan funka."
- **PAUS** dag 1 2:31: 0.0 s paus före "VA FAN?! Fick du igång den?? Jag försökte i typ et"
- **PAUS** dag 1 2:37: 0.0 s paus före "En nyckelring till, så länge storebrors rulle räck"
- **PAUS** dag 1 3:57: 0.0 s paus före "Ali har en gammal kvarn. Den gör tråd av skräp."
- **PAUS** dag 1 4:21: 0.0 s paus före "Kvarnen ska stå vid skrivaren, närmast skräpberget"
- **PAUS** dag 1 5:01: 0.0 s paus före "Kvarnen funkar. Soptippen är en gruva."
- **PAUS** dag 1 5:03: 0.0 s paus före "Min egen tråd. Nu printar jag en nyckelring av den"
- **PAUS** dag 1 6:10: 0.0 s paus före "Koppla in powerbanken."
- **PAUS** dag 1 6:37: 0.1 s paus före "Ali här. Nyckelringen sålde direkt. Jag ville bli "
- **PAUS** dag 1 6:50: 0.1 s paus före "Femtio kronor. Nu har jag råd med gripen."
- **PAUS** dag 1 7:09: 0.0 s paus före "Ritningen är min. Nu printar jag skräpgripen."
- **PAUS** dag 1 8:04: 0.0 s paus före "Ali här. Jag såg Skräpgrip på avstånd. Ett streck "
- **PAUS** dag 1 8:14: 0.0 s paus före "Spara till krukreceptet."
- **PAUS** dag 1 9:43: 0.0 s paus före "Ali gillar krukor. Han sa det själv."
- **PAUS** dag 1 12:26: 0.0 s paus före "Sängen ska in i skjulet. Sen sover jag."
- **PAUS** dag 2 0:21: 0.0 s paus före "Ali vill ha idag: Blomkruka · +50 %"
- **SAMTIDIGT** dag 2 0:54: "Radio Tippen, Kjelle här. Skjulet vid ti" och "Mina armar… Kvarnen borde veva själv."
- **PAUS** dag 2 1:09: 0.0 s paus före "Motorn ska sitta där veven sitter. Jag printar den"
- **PAUS** dag 2 1:57: 0.0 s paus före "Gården är full av skräp. Jag börjar vid skjulet."
- **PAUS** dag 2 2:49: 0.4 s paus före "Gården är STÄDAD, av mig, frivilligt. Mamma skulle"
- **PAUS** dag 2 2:51: 0.0 s paus före "En stor bil saktar in vid skjulet. Jag går dit."
- **PAUS** dag 2 3:48: 0.0 s paus före "Tornet är fullt. Skrivaren får jobba ikapp."
- **PAUS** dag 2 3:50: 0.0 s paus före "Tornet är fullt. Skrivaren får jobba ikapp."
- **PAUS** dag 2 3:55: 0.2 s paus före "Du har städat hela gården. Ingen gör så nuförtin."
- **PAUS** dag 2 4:01: 0.1 s paus före "Öj… ä dä du som printar grejer? Dom där nyckelring"
- **PAUS** dag 2 4:08: 0.0 s paus före "Tornet är fullt. Skrivaren får jobba ikapp."
- **PAUS** dag 2 4:11: 0.5 s paus före "Ja. Av skräp."
- **PAUS** dag 2 4:16: 0.1 s paus före "Hm. Ja kanske har nåt åt dej. Kolla postlådan vid "
- **PAUS** dag 2 4:23: 0.0 s paus före "Rolf slängde av något åt mig."
- **PAUS** dag 2 5:39: 0.0 s paus före "Ölhållaren är klar. Den lägger jag i Rolfs postlåd"
- **PAUS** dag 2 7:17: 0.9 s paus före "Vindsnurran ska upp på skjulets tak."
- **PAUS** dag 2 7:32: 0.1 s paus före "Den snurrar! Långsamt. Men den snurrar."
- **PAUS** dag 2 7:36: 0.0 s paus före "Det drar från dörrhålet. En dörr kan jag printa."
- **PAUS** dag 2 9:25: 0.0 s paus före "Nu vet Ali att jag bor HÄR. Taket läcker. I morgon"
- **PAUS** dag 2 9:25: 0.0 s paus före "Sov när du vill."
- **TOM RUTA** dag 1 3:37: 12.2 s innan "Köp kvarnen" syntes
- **TOM RUTA** dag 1 7:04: 5.6 s innan "Printa skräpgripen" syntes
- **UPPREPNING** dag 1 5:54: ali: "Den köper jag. Ge hit." (förra gången dag 1)
- **UPPREPNING** dag 2 3:50: du: "Tornet är fullt. Skrivaren får jobba ikapp." (förra gången dag 2)
- **UPPREPNING** dag 2 4:08: du: "Tornet är fullt. Skrivaren får jobba ikapp." (förra gången dag 2)
- **TRÄNGSEL 2** dag 1 2:45: "Sälj grejerna i affären mitt emot, han köper allt." 2.0 s efter förra meddelandet, 30.6 s efter en klar uppgift
- **RADBRYTNING** dag 1 3:09: för lång rad (39): "Visa nyckelringarna i affären mitt emot"
- **TRÄNGSEL 2** dag 1 3:12: "Hur kunde du bara gå? Är du ok? Svara när jag ring" 2.0 s efter förra meddelandet, 14.0 s efter en klar uppgift
- **DUBBEL UPPMANING** dag 1 7:34: "trampa" på 2 ställen: pekrutan, notisen
- **TRÄNGSEL 2** dag 2 2:41: "Ali här. Rullställ. Fyra rullar i stället för en. " 4.8 s efter förra meddelandet, 45.5 s efter en klar uppgift
- **SAMMA MENING TVÅ GÅNGER** dag 2 4:08: "Tornet är fullt. Skrivaren får jobba ikapp." igen efter 18 s
- **DOLD SKYLT** dag 2 4:25: ALIS MARKNAD från 7 m: skymd av PlaneGeometry 1.2 m bort (9.1, 1.8, 22.9)
- **OKÄND SAK I BESTÄMD FORM** dag 2 4:53: "Sopsäcken" innan saken presenterats: "Sopsäcken är över axeln! Nu bär jag 10 skräp."
- **DUBBEL** dag 2 5:33: du upprepar rolf: "Rolf har ritat själv. Den är… ungefär. Jag fattar "
- **TEMPO** dag 1 12:47: dag 1 tog 12.8 min (mål 10–12)
- **TEMPO** dag 2 9:35: dag 2 tog 9.6 min (mål 10–15)

Sidfel: inga

## Dag 1

| Tid | Källa | Vem | Text |
|---|---|---|---|
| 0:00 | MÅL |  | Lasta av skrivaren |
| 0:00 | MÅL |  | Lasta av skrivaren |
| 0:00 | pil |  | Lasta av skrivaren |
| 0:02 | sak | bud | (tips) |
| 0:03 | väntar | du | Se så mycket skräp här är. Det är ju en guldgruva! |
| 0:04 | klar | bud | (tips) |
| 0:04 | sak | du | Se så mycket skräp här är. Det är ju en guldgruva! |
| 0:04 | röst | du | Se så mycket skräp här är. Det är ju en guldgruva! · STORY |
| 0:04 | tanke | du | ⏎ Enter – hoppa över |
| 0:04 | struken | du | Hammaren ligger i raden. Hjulet eller 2. |
| 0:04 | väntar | du | ⏎ Enter – hoppa över |
| 0:08 | sak-del | du | Först borde jag spika upp en skylt, så att alla ser att jag bor HÄR. |
| 0:08 | röst | du | Först borde jag spika upp en skylt, så att alla ser att jag bor HÄR. · STORY |
| 0:13 | klar | du | Se så mycket skräp här är. Det är ju en guldgruva! |
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
| 0:25 | sak | du | Storebrors skrivare står kvar på cykeln vid vägen. Den ska av. |
| 0:25 | målruta |  | Lasta av skrivaren |
| 0:25 | pil |  | Lasta av skrivaren |
| 0:25 | notis | tanke | 💭 Storebrors skrivare står kvar på cykeln vid vägen. Den ska av. |
| 0:25 | röst | du | Storebrors skrivare står kvar på cykeln vid vägen. Den ska av. · MÅL |
| 0:31 | klar | du | Storebrors skrivare står kvar på cykeln vid vägen. Den ska av. |
| 0:33 | händelse | lastatAv | sak=skrivare |
| 0:33 | paket |  | sms |
| 0:33 | väntar | mamma | Hur kunde du bara gå? Är du ok? Svara när jag ringer! |
| 0:33 | händelse | malKlart | id=lasta del=Dag 1 – Kom igång nasta=stall |
| 0:33 | bekräftelse | du | plats |
| 0:33 | kvittens | du | Tung. Den har storebror aldrig burit så långt. |
| 0:33 | väntar | du | Tung. Den har storebror aldrig burit så långt. |
| 0:33 | väntar | du | Skrivaren ställer jag mot skräpberget. Min första verkstad. |
| 0:33 | MÅL |  | Ställ upp skrivaren |
| 0:33 | sak | du | Tung. Den har storebror aldrig burit så långt. |
| 0:33 | röst | du | Tung. Den har storebror aldrig burit så långt. · STORY |
| 0:33 | målruta |  | Ställ upp skrivaren |
| 0:34 | hjälp | kontroll | E: Ryggsäcken och kistan |
| 0:37 | klar | du | Tung. Den har storebror aldrig burit så långt. |
| 0:37 | sak | du | Skrivaren ställer jag mot skräpberget. Min första verkstad. |
| 0:37 | pil |  | Ställ upp skrivaren |
| 0:37 | notis | tanke | 💭 Skrivaren ställer jag mot skräpberget. Min första verkstad. |
| 0:37 | röst | du | Skrivaren ställer jag mot skräpberget. Min första verkstad. · MÅL |
| 0:38 | nick |  | nick:1 |
| 0:44 | klar | du | Skrivaren ställer jag mot skräpberget. Min första verkstad. |
| 0:57 | struken | info:bra | 🖨️ Storebrors skrivare står på sin plats |
| 0:57 | händelse | placerat | sak=skrivareS |
| 0:57 | paket |  | tanke |
| 0:57 | tanke | du | Storebrors rulle. Den räcker inte länge. |
| 0:57 | väntar | du | Storebrors rulle. Den räcker inte länge. |
| 0:57 | duns | du | ställs ner |
| 0:57 | händelse | malKlart | id=stall del=Dag 1 – Kom igång nasta=strom |
| 0:57 | bekräftelse | du | plats |
| 0:57 | väntar | du | Den har ingen ström. Cykeln vid vägen kanske kan ge ström. |
| 0:57 | MÅL |  | Skrivaren behöver ström |
| 0:57 | sak | du | Storebrors rulle. Den räcker inte länge. |
| 0:57 | notis | tanke | 💭 Storebrors rulle. Den räcker inte länge. |
| 0:57 | röst | du | Storebrors rulle. Den räcker inte länge. · REAKTION |
| 0:59 | målruta |  | Skrivaren behöver ström |
| 1:01 | kvittens-bock |  | ✓ Ställ upp skrivaren |
| 1:02 | klar | du | Storebrors rulle. Den räcker inte länge. |
| 1:03 | sak | du | Den har ingen ström. Cykeln vid vägen kanske kan ge ström. |
| 1:03 | pil |  | Skrivaren behöver ström |
| 1:03 | notis | tanke | 💭 Den har ingen ström. Cykeln vid vägen kanske kan ge ström. |
| 1:03 | röst | du | Den har ingen ström. Cykeln vid vägen kanske kan ge ström. · MÅL |
| 1:04 | nick |  | nick:2 |
| 1:07 | klar | du | Den har ingen ström. Cykeln vid vägen kanske kan ge ström. |
| 1:29 | paket |  | tanke |
| 1:29 | tanke | du | Cykeln… och storebrors generator? |
| 1:29 | väntar | du | Cykeln… och storebrors generator? |
| 1:29 | sak | du | Cykeln… och storebrors generator? |
| 1:29 | kvitto-visas | du | Cykeln… och storebrors generator? |
| 1:29 | notis | tanke | 💭 Cykeln… och storebrors generator? |
| 1:29 | röst | du | Cykeln… och storebrors generator? · STORY |
| 1:29 | händelse | malKlart | id=strom del=Dag 1 – Kom igång nasta=bygg |
| 1:29 | bekräftelse | du | plats |
| 1:29 | väntar | du | Nu borde jag koppla på generatorn, så att cykeln gör el. |
| 1:30 | MÅL |  | Ställ cykel och generator |
| 1:32 | klar | du | Cykeln… och storebrors generator? |
| 1:32 | målruta |  | Ställ cykel och generator |
| 1:33 | kvittens-bock |  | ✓ Skrivaren behöver ström |
| 1:35 | sak | du | Nu borde jag koppla på generatorn, så att cykeln gör el. |
| 1:35 | pil |  | Ställ cykel och generator |
| 1:35 | notis | tanke | 💭 Nu borde jag koppla på generatorn, så att cykeln gör el. |
| 1:35 | röst | du | Nu borde jag koppla på generatorn, så att cykeln gör el. · MÅL |
| 1:39 | klar | du | Nu borde jag koppla på generatorn, så att cykeln gör el. |
| 1:40 | händelse | placerat | sak=generator |
| 1:40 | duns | du | ställs ner |
| 1:48 | ljud | utrustning | Cykeln i famnen |
| 1:48 | händelse | lyft | sak=cykel |
| 1:54 | händelse | placerat | sak=cykel |
| 1:54 | duns | du | ställs ner |
| 1:56 | händelse | ombyggd | sak=cykel |
| 1:56 | händelse | malKlart | id=bygg del=Dag 1 – Kom igång nasta=valjModell |
| 1:56 | bekräftelse | du | plats |
| 1:56 | väntar | du | Strömmen finns. Nu ska skrivaren veta vad den ska göra, sen trampar jag. |
| 1:56 | målruta |  | Välj vad skrivaren ska printa |
| 1:56 | MÅL |  | Välj vad skrivaren ska printa |
| 1:56 | sak | du | Strömmen finns. Nu ska skrivaren veta vad den ska göra, sen trampar jag. |
| 1:56 | pil |  | Välj vad skrivaren ska printa |
| 1:56 | notis | tanke | 💭 Strömmen finns. Nu ska skrivaren veta vad den ska göra, sen trampar jag. |
| 1:56 | röst | du | Strömmen finns. Nu ska skrivaren veta vad den ska göra, sen trampar jag. · MÅL |
| 2:00 | kvittens-bock |  | ✓ Montera generatorn |
| 2:00 | klar | du | Strömmen finns. Nu ska skrivaren veta vad den ska göra, sen trampar jag. |
| 2:09 | händelse | printStart | sak=nyckelring |
| 2:09 | tanke | du | Den stannar när jag slutar trampa. Ström som sparas hade varit nåt. |
| 2:09 | väntar | du | Den stannar när jag slutar trampa. Ström som sparas hade varit nåt. |
| 2:09 | händelse | malKlart | id=valjModell del=Dag 1 – Kom igång nasta=trampa |
| 2:09 | bekräftelse | du | plats |
| 2:09 | kvittens | du | Den piper. Den GÖR något. |
| 2:09 | väntar | du | Den piper. Den GÖR något. |
| 2:09 | struken | du | Den stannar när jag slutar trampa. Ström som sparas hade varit nåt. |
| 2:09 | väntar | du | Nu behöver den ström. Trampa. |
| 2:10 | MÅL |  | Trampa cykeln |
| 2:10 | sak | du | Den piper. Den GÖR något. |
| 2:10 | röst | du | Den piper. Den GÖR något. · STORY |
| 2:10 | målruta |  | Trampa cykeln |
| 2:13 | klar | du | Den piper. Den GÖR något. |
| 2:13 | sak | du | Nu behöver den ström. Trampa. |
| 2:13 | pil |  | Trampa cykeln |
| 2:13 | notis | tanke | 💭 Nu behöver den ström. Trampa. |
| 2:13 | röst | du | Nu behöver den ström. Trampa. · MÅL |
| 2:15 | händelse | printKlar | sak=nyckelring n=1 |
| 2:15 | händelse | malKlart | id=trampa del=Dag 1 – Kom igång nasta=rullSlut |
| 2:15 | bekräftelse | du | plats |
| 2:15 | kvittens | du | Klar! Ta ut den innan den ändrar sig. |
| 2:15 | väntar | du | Klar! Ta ut den innan den ändrar sig. |
| 2:15 | väntar | du | En nyckelring till, så länge storebrors rulle räcker. |
| 2:15 | MÅL |  | En nyckelring till |
| 2:16 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 2:16 | paket |  | sms |
| 2:16 | väntar | bror | VA FAN?! Fick du igång den?? Jag försökte i typ ett år. Den bara pep. 😳 |
| 2:16 | skratt | bror | VA FAN?! Fick du igång den?? Jag försökt |
| 2:16 | paket |  | sms |
| 2:16 | väntar | bror | Sälj grejerna i affären mitt emot, han köper allt. |
| 2:16 | foto | du | Första nyckelringen |
| 2:16 | paket |  | tanke |
| 2:16 | tanke | du | Jag gjorde den här. Av skräp. Det här kan funka. |
| 2:16 | väntar | du | Jag gjorde den här. Av skräp. Det här kan funka. |
| 2:16 | väntar | ali | Hallå där, nya grannen! Vad är det där du gör? |
| 2:17 | målruta |  | En nyckelring till |
| 2:18 | klar | du | Nu behöver den ström. Trampa. |
| 2:18 | sak | du | Klar! Ta ut den innan den ändrar sig. |
| 2:18 | röst | du | Klar! Ta ut den innan den ändrar sig. · STORY |
| 2:22 | klar | du | Klar! Ta ut den innan den ändrar sig. |
| 2:22 | sak | ali | Hallå där, nya grannen! Vad är det där du gör? |
| 2:22 | händelse | dialog | id=aliRop |
| 2:22 | röst | ali | Hallå där, nya grannen! Vad är det där du gör? · REAKTION |
| 2:23 | bubbla |  | Hallå där, nya grannen! Vad är det där du gör? |
| 2:24 | klar | ali | Hallå där, nya grannen! Vad är det där du gör? |
| 2:25 | sak | du | Jag gjorde den här. Av skräp. Det här kan funka. |
| 2:25 | notis | tanke | 💭 Jag gjorde den här. Av skräp. Det här kan funka. |
| 2:25 | röst | du | Jag gjorde den här. Av skräp. Det här kan funka. · STORY |
| 2:31 | klar | du | Jag gjorde den här. Av skräp. Det här kan funka. |
| 2:31 | sak | bror | VA FAN?! Fick du igång den?? Jag försökte i typ ett år. Den bara pep. 😳 |
| 2:31 | skratt | bror | VA FAN?! Fick du igång den?? Jag försökt |
| 2:31 | sms | bror | VA FAN?! Fick du igång den?? Jag försökte i typ ett år. Den bara pep. 😳 |
| 2:31 | skratt | bror | VA FAN?! Fick du igång den?? Jag försökt |
| 2:31 | händelse | dialog | id=brorSms1 |
| 2:31 | sms-bubbla | bror | VA FAN?! Fick du igång den?? Jag försökte i typ ett år. Den bara pep. 😳 |
| 2:31 | skratt | bror | VA FAN?! Fick du igång den?? Jag försökt |
| 2:31 | röst | bror | VA FAN?! Fick du igång den?? Jag försökte i typ ett år. Den bara pep. 😳 · REAKTION |
| 2:37 | klar | bror | VA FAN?! Fick du igång den?? Jag försökte i typ ett år. Den bara pep. 😳 |
| 2:37 | skratt | bror | VA FAN?! Fick du igång den?? Jag försökt |
| 2:37 | sak | du | En nyckelring till, så länge storebrors rulle räcker. |
| 2:37 | pil |  | En nyckelring till |
| 2:37 | notis | tanke | 💭 En nyckelring till, så länge storebrors rulle räcker. |
| 2:37 | röst | du | En nyckelring till, så länge storebrors rulle räcker. · MÅL |
| 2:39 | hjälp | kontroll | Tab: Dina sms och dagboken |
| 2:41 | händelse | printStart | sak=nyckelring |
| 2:43 | klar | du | En nyckelring till, så länge storebrors rulle räcker. |
| 2:45 | brott | TRÄNGSEL 2 | "Sälj grejerna i affären mitt emot, han köper allt." 2.0 s efter förra meddelandet, 30.6 s efter en klar uppgift |
| 2:45 | sak | bror | Sälj grejerna i affären mitt emot, han köper allt. |
| 2:45 | sms | bror | Sälj grejerna i affären mitt emot, han köper allt. |
| 2:45 | händelse | dialog | id=brorSms2 |
| 2:45 | sms-bubbla | bror | Sälj grejerna i affären mitt emot, han köper allt. |
| 2:45 | röst | bror | Sälj grejerna i affären mitt emot, han köper allt. · STORY |
| 2:49 | klar | bror | Sälj grejerna i affären mitt emot, han köper allt. |
| 2:58 | händelse | printKlar | sak=nyckelring n=2 |
| 2:58 | paket |  | tanke |
| 2:58 | tanke | du | Slut på storebrors rulle. Och här ligger ju plast överallt. Om jag bara kunde göra tråd av skräpet… |
| 2:58 | väntar | du | Slut på storebrors rulle. Och här ligger ju plast överallt. Om jag bara kunde göra tråd av skräpet… |
| 2:58 | händelse | malKlart | id=rullSlut del=Dag 1 – Kom igång nasta=saljTva |
| 2:58 | bekräftelse | du | plats |
| 2:58 | väntar | du | Affären mitt emot. Han verkar nyfiken. Jag visar honom. |
| 2:58 | MÅL |  | Visa nyckelringarna i affären mitt emot |
| 2:58 | sak | du | Slut på storebrors rulle. Och här ligger ju plast överallt. Om jag bara kunde göra tråd av skräpet… |
| 2:58 | kvitto-visas | du | Slut på storebrors rulle. Och här ligger ju plast överallt. Om jag bara kunde göra tråd av skräpet… |
| 2:58 | notis | tanke | 💭 Slut på storebrors rulle. Och här ligger ju plast överallt. Om jag bara kunde göra tråd av skräpet… |
| 2:58 | röst | du | Slut på storebrors rulle. Och här ligger ju plast överallt. Om jag bara kunde göra tråd av skräpet… · STORY |
| 3:01 | målruta |  | Visa nyckelringarna i affären mitt emot |
| 3:02 | kvittens-bock |  | ✓ En nyckelring till |
| 3:04 | klar | du | Slut på storebrors rulle. Och här ligger ju plast överallt. Om jag bara kunde göra tråd av skräpet… |
| 3:05 | sak | du | Affären mitt emot. Han verkar nyfiken. Jag visar honom. |
| 3:05 | pil |  | Visa nyckelringarna i affären mitt emot |
| 3:05 | notis | tanke | 💭 Affären mitt emot. Han verkar nyfiken. Jag visar honom. |
| 3:05 | röst | du | Affären mitt emot. Han verkar nyfiken. Jag visar honom. · MÅL |
| 3:08 | klar | du | Affären mitt emot. Han verkar nyfiken. Jag visar honom. |
| 3:09 | brott | RADBRYTNING | för lång rad (39): "Visa nyckelringarna i affären mitt emot" |
| 3:12 | brott | TRÄNGSEL 2 | "Hur kunde du bara gå? Är du ok? Svara när jag ring" 2.0 s efter förra meddelandet, 14.0 s efter en klar uppgift |
| 3:12 | sak | mamma | Hur kunde du bara gå? Är du ok? Svara när jag ringer! |
| 3:12 | sms | mamma | Hur kunde du bara gå? Är du ok? Svara när jag ringer! |
| 3:12 | sms-bubbla | mamma | Hur kunde du bara gå? Är du ok? Svara när jag ringer! |
| 3:12 | röst | mamma | Hur kunde du bara gå? Är du ok? Svara när jag ringer! · STORY |
| 3:17 | klar | mamma | Hur kunde du bara gå? Är du ok? Svara när jag ringer! |
| 3:22 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 3:22 | struken | ali | Hallå där, nya grannen! Vad är det där du gör? |
| 3:33 | väntar | ali | Den köper jag. Ge hit. |
| 3:33 | sak | ali | Den köper jag. Ge hit. |
| 3:33 | röst | ali | Den köper jag. Ge hit. · REAKTION |
| 3:34 | struken | ali | Pappas gamla köttkvarn. Den har malt allt utom kött. Trettio kronor, så är den din. |
| 3:34 | händelse | dialog | id=aliForsta |
| 3:34 | butiksbubbla | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 3:36 | händelse | salt | sak=nyckelring n=2 |
| 3:36 | aliSalt | ali | 30 |
| 3:36 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 3:36 | händelse | dialog | id=aliKvarnErbjud |
| 3:36 | butiksbubbla | ali | Pappas gamla köttkvarn. Den har malt allt utom kött. Trettio kronor, så är den din. |
| 3:36 | klar | ali | Den köper jag. Ge hit. |
| 3:36 | röst | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. · STORY |
| 3:37 | väntar | ali | Pappas gamla köttkvarn. Den har malt allt utom kött. Trettio kronor, så är den din. |
| 3:37 | händelse | malKlart | id=saljTva del=Dag 1 – Kom igång nasta=aliKvarn |
| 3:37 | bekräftelse | du | plats |
| 3:37 | väntar | du | Ali har en gammal kvarn. Den gör tråd av skräp. |
| 3:37 | MÅL |  | Köp kvarnen |
| 3:41 | kvittens-bock |  | ✓ Visa nyckelringarna i affären mitt emot |
| 3:47 | sak | ali | Pappas gamla köttkvarn. Den har malt allt utom kött. Trettio kronor, så är den din. |
| 3:47 | röst | ali | Pappas gamla köttkvarn. Den har malt allt utom kött. Trettio kronor, så är den din. · STORY |
| 3:48 | struken | du | Ali har en gammal kvarn. Den gör tråd av skräp. |
| 3:49 | målruta |  | Köp kvarnen |
| 3:53 | väntar | kjelle | God morgon, det är Kjelle på Radio Tippen! Det har flyttat in någon i det gamla skjulet. Med en cykel och en skrivare. Spännande, Gunnar. |
| 3:53 | radio | kjelle | God morgon, det är Kjelle på Radio Tippen! Det har flyttat in någon i det gamla skjulet. Med en cykel och en skrivare. Spännande, Gunnar. |
| 3:53 | skratt | du | Radio-Kjelle |
| 3:57 | klar | ali | Pappas gamla köttkvarn. Den har malt allt utom kött. Trettio kronor, så är den din. |
| 3:57 | sak | du | Ali har en gammal kvarn. Den gör tråd av skräp. |
| 3:57 | pil |  | Köp kvarnen |
| 3:57 | notis | tanke | 💭 Ali har en gammal kvarn. Den gör tråd av skräp. |
| 3:57 | röst | du | Ali har en gammal kvarn. Den gör tråd av skräp. · MÅL |
| 4:00 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 4:00 | struken | ali | Pappas gamla köttkvarn. Den har malt allt utom kött. Trettio kronor, så är den din. |
| 4:01 | händelse | kopt | sak=gammalkvarn |
| 4:01 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 4:01 | händelse | dialog | id=aliKvarnKopt |
| 4:01 | butiksbubbla | ali | Den är din. Pappa hade blivit glad. Han trodde aldrig att nån skulle vilja ha den. |
| 4:02 | röst | ali | Den är din. Pappa hade blivit glad. Han trodde aldrig att nån skulle vilja ha den. · STORY |
| 4:02 | klar | du | Ali har en gammal kvarn. Den gör tråd av skräp. |
| 4:03 | händelse | malKlart | id=aliKvarn del=Dag 1 – Kom igång nasta=kvarn |
| 4:03 | bekräftelse | du | plats |
| 4:03 | väntar | du | Kvarnen ska stå vid skrivaren, närmast skräpberget. |
| 4:03 | målruta |  | Ställ kvarnen |
| 4:03 | MÅL |  | Ställ kvarnen |
| 4:03 | pil |  | Ställ kvarnen |
| 4:03 | nick |  | nick:9 |
| 4:07 | kvittens-bock |  | ✓ Köp kvarnen |
| 4:10 | sak | kjelle | God morgon, det är Kjelle på Radio Tippen! Det har flyttat in någon i det gamla skjulet. Med en cykel och en skrivare. Spännande, Gunnar. |
| 4:10 | notis |  | 📻 Radio Tippen: God morgon, det är Kjelle på Radio Tippen! Det har flyttat in någon i det gamla skjulet. Med en cykel och en skrivare. Spännande, Gunnar. |
| 4:10 | röst | kjelle | God morgon, det är Kjelle på Radio Tippen! Det har flyttat in någon i det gamla skjulet. Med en cykel och en skrivare. Spännande, Gunnar. · REAKTION |
| 4:21 | tanke | du | Vem är Gunnar? |
| 4:21 | väntar | du | Vem är Gunnar? |
| 4:21 | klar | kjelle | God morgon, det är Kjelle på Radio Tippen! Det har flyttat in någon i det gamla skjulet. Med en cykel och en skrivare. Spännande, Gunnar. |
| 4:21 | sak | du | Kvarnen ska stå vid skrivaren, närmast skräpberget. |
| 4:21 | notis | tanke | 💭 Kvarnen ska stå vid skrivaren, närmast skräpberget. |
| 4:21 | röst | du | Kvarnen ska stå vid skrivaren, närmast skräpberget. · MÅL |
| 4:27 | klar | du | Kvarnen ska stå vid skrivaren, närmast skräpberget. |
| 4:32 | händelse | placerat | sak=kvarnen |
| 4:32 | duns | du | ställs ner |
| 4:32 | händelse | malKlart | id=kvarn del=Dag 1 – Kom igång nasta=flaska |
| 4:32 | bekräftelse | du | plats |
| 4:32 | väntar | du | Skräp i kvarnen, sen vevar jag. Då blir det tråd. |
| 4:32 | målruta |  | Gör egen tråd |
| 4:32 | MÅL |  | Gör egen tråd |
| 4:32 | sak | du | Skräp i kvarnen, sen vevar jag. Då blir det tråd. |
| 4:32 | pil |  | Gör egen tråd |
| 4:32 | notis | tanke | 💭 Skräp i kvarnen, sen vevar jag. Då blir det tråd. |
| 4:32 | röst | du | Skräp i kvarnen, sen vevar jag. Då blir det tråd. · MÅL |
| 4:33 | nick |  | nick:10 |
| 4:36 | kvittens-bock |  | ✓ Ställ kvarnen |
| 4:37 | klar | du | Skräp i kvarnen, sen vevar jag. Då blir det tråd. |
| 4:37 | hjälp | kontroll | Klick: Veva kvarnen tills tratten är tom |
| 4:42 | struken | du | Vem är Gunnar? |
| 4:55 | struken | info:bra | 3 st i tratten – veva nu! |
| 4:56 | händelse | malKlart | id=flaska del=Dag 1 – Kom igång nasta=egenPrint |
| 4:56 | bekräftelse | du | plats |
| 4:56 | kvittens | du | Det blir tråd! Riktig plasttråd. |
| 4:56 | väntar | du | Det blir tråd! Riktig plasttråd. |
| 4:56 | lapp | 📔 Dagbok | Kvarnen funkar. Soptippen är en gruva. |
| 4:56 | dagbokrad | du | Kvarnen funkar. Soptippen är en gruva. |
| 4:56 | väntar | notis:Kvarnen funkar. Soptippen är en gruva. | Kvarnen funkar. Soptippen är en gruva. |
| 4:56 | väntar | du | Min egen tråd. Nu printar jag en nyckelring av den. |
| 4:56 | MÅL |  | Printa med egen tråd |
| 4:56 | sak | du | Det blir tråd! Riktig plasttråd. |
| 4:56 | röst | du | Det blir tråd! Riktig plasttråd. · STORY |
| 4:59 | målruta |  | Printa med egen tråd |
| 5:01 | klar | du | Det blir tråd! Riktig plasttråd. |
| 5:01 | sak | notis:Kvarnen funkar. Soptippen är en gruva. | Kvarnen funkar. Soptippen är en gruva. |
| 5:01 | notis | dagbok | Kvarnen funkar. Soptippen är en gruva. |
| 5:03 | klar | notis:Kvarnen funkar. Soptippen är en gruva. | Kvarnen funkar. Soptippen är en gruva. |
| 5:03 | sak | du | Min egen tråd. Nu printar jag en nyckelring av den. |
| 5:03 | pil |  | Printa med egen tråd |
| 5:03 | notis | tanke | 💭 Min egen tråd. Nu printar jag en nyckelring av den. |
| 5:03 | röst | du | Min egen tråd. Nu printar jag en nyckelring av den. · MÅL |
| 5:04 | nick |  | nick:11 |
| 5:09 | klar | du | Min egen tråd. Nu printar jag en nyckelring av den. |
| 5:19 | händelse | printStart | sak=nyckelring |
| 5:19 | toast | bra | 🔗 Slangen kopplad |
| 5:24 | händelse | printKlar | sak=nyckelring n=3 |
| 5:24 | paket |  | tanke |
| 5:24 | tanke | du | En nyckelring av en gammal schampoflaska. Den luktar fortfarande päron. |
| 5:24 | väntar | du | En nyckelring av en gammal schampoflaska. Den luktar fortfarande päron. |
| 5:24 | skratt | du | egen tråd |
| 5:24 | händelse | malKlart | id=egenPrint del=Dag 1 – Kom igång nasta=salj |
| 5:24 | bekräftelse | du | plats |
| 5:24 | struken | du | En nyckelring av en gammal schampoflaska. Den luktar fortfarande päron. |
| 5:24 | väntar | du | Ali köper nog den här också. |
| 5:24 | målruta |  | Sälj hos Ali |
| 5:24 | MÅL |  | Sälj hos Ali |
| 5:24 | sak | du | Ali köper nog den här också. |
| 5:24 | pil |  | Sälj hos Ali |
| 5:24 | notis | tanke | 💭 Ali köper nog den här också. |
| 5:24 | röst | du | Ali köper nog den här också. · MÅL |
| 5:24 | nick |  | nick:12 |
| 5:25 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 5:28 | kvittens-bock |  | ✓ Printa med egen tråd |
| 5:28 | klar | du | Ali köper nog den här också. |
| 5:38 | händelse | printStart | sak=nyckelring |
| 5:39 | händelse | printKlar | sak=nyckelring n=4 |
| 5:39 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 5:41 | händelse | printStart | sak=nyckelring |
| 5:42 | händelse | printKlar | sak=nyckelring n=5 |
| 5:42 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 5:54 | väntar | ali | Den köper jag. Ge hit. |
| 5:54 | sak | ali | Den köper jag. Ge hit. |
| 5:54 | röst | ali | Den köper jag. Ge hit. · REAKTION |
| 5:54 | upprepning | ali | Den köper jag. Ge hit. |
| 5:54 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 5:55 | händelse | salt | sak=nyckelring n=3 |
| 5:55 | paket |  | ali → ge |
| 5:55 | väntar | ali | Du får bonus! 20 kr extra. Säg inget till min fru. |
| 5:55 | väntar |  | (läget ändras) |
| 5:55 | aliSalt | ali | 45 |
| 5:55 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 5:55 | händelse | dialog | id=aliNyckelIgen |
| 5:55 | butiksbubbla | ali | Nyckelringar igen? Folk tappar sina nycklar hela tiden. |
| 5:56 | röst | ali | Nyckelringar igen? Folk tappar sina nycklar hela tiden. · STORY |
| 5:56 | klipps | ali | Den köper jag. Ge hit. |
| 5:56 | händelse | malKlart | id=salj del=Dag 1 – Kom igång nasta=powerbank |
| 5:56 | bekräftelse | du | plats |
| 5:56 | paket | ali | ali → ge |
| 5:56 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 5:56 | händelse | dialog | id=aliPowerbank |
| 5:56 | röst | ali | Jag såg dig cykla. Det ser jobbigt ut. Ta den här. Bra kunder får bonus. · STORY |
| 5:56 | butiksbubbla | ali | Jag såg dig cykla. Det ser jobbigt ut. Ta den här. Bra kunder får bonus. |
| 5:56 | väntar | du | Koppla in powerbanken. |
| 5:56 | MÅL |  | Koppla in powerbanken |
| 5:59 | målruta |  | Koppla in powerbanken |
| 6:00 | kvittens-bock |  | ✓ Sälj hos Ali |
| 6:00 | klar | ali | Den köper jag. Ge hit. |
| 6:05 | sak | ali | Du får bonus! 20 kr extra. Säg inget till min fru. |
| 6:05 | notis |  | Ali: ”Du får bonus! 20 kr extra. Säg inget till min fru.” |
| 6:05 | röst | ali | Du får bonus! 20 kr extra. Säg inget till min fru. · REAKTION |
| 6:05 | kvitto-visas |  | (läget ändras) |
| 6:05 | sak |  | (läget ändras) |
| 6:10 | klar | ali | Du får bonus! 20 kr extra. Säg inget till min fru. |
| 6:10 | sak | du | Koppla in powerbanken. |
| 6:10 | pil |  | Koppla in powerbanken |
| 6:10 | röst | du | Koppla in powerbanken. · MÅL |
| 6:11 | nick |  | nick:13 |
| 6:14 | klar | du | Koppla in powerbanken. |
| 6:30 | skratt | du | powerbanken monterad |
| 6:30 | paket |  | tanke |
| 6:30 | tanke | du | Nu sparas lite ström. En nyckelring, typ. Framtiden är här, och den sitter fast med eltejp. |
| 6:30 | väntar | du | Nu sparas lite ström. En nyckelring, typ. Framtiden är här, och den sitter fast med eltejp. |
| 6:30 | monterat | du | byggsats:powerbank |
| 6:30 | händelse | monterat | sak=powerbank |
| 6:30 | sak | du | Nu sparas lite ström. En nyckelring, typ. Framtiden är här, och den sitter fast med eltejp. |
| 6:30 | kvitto-visas | du | Nu sparas lite ström. En nyckelring, typ. Framtiden är här, och den sitter fast med eltejp. |
| 6:30 | notis | tanke | 💭 Nu sparas lite ström. En nyckelring, typ. Framtiden är här, och den sitter fast med eltejp. |
| 6:30 | röst | du | Nu sparas lite ström. En nyckelring, typ. Framtiden är här, och den sitter fast med eltejp. · REAKTION |
| 6:30 | händelse | malKlart | id=powerbank del=Dag 1 – Kom igång nasta=kopGrip |
| 6:30 | bekräftelse | du | plats |
| 6:30 | paket |  | lapp → ge |
| 6:30 | lapp-kö | 🧺 Ali | Ali här. Nyckelringen sålde direkt. Jag ville bli ingenjör en gång. Nu har jag låtit en AI rita en skräpgrip. Kom och titta. |
| 6:30 | väntar | ali | Ali här. Nyckelringen sålde direkt. Jag ville bli ingenjör en gång. Nu har jag låtit en AI rita en skräpgrip. Kom och titta. |
| 6:30 | väntar |  | (läget ändras) |
| 6:31 | MÅL |  | Köp skräpgripen |
| 6:34 | kvittens-bock |  | ✓ Gå till Ali |
| 6:37 | klar | du | Nu sparas lite ström. En nyckelring, typ. Framtiden är här, och den sitter fast med eltejp. |
| 6:37 | sak | ali | Ali här. Nyckelringen sålde direkt. Jag ville bli ingenjör en gång. Nu har jag låtit en AI rita en skräpgrip. Kom och titta. |
| 6:37 | sms | ali | Ali här. Nyckelringen sålde direkt. Jag ville bli ingenjör en gång. Nu har jag låtit en AI rita en skräpgrip. Kom och titta. |
| 6:37 | händelse | dialog | id=aliGripSms |
| 6:37 | sms-bubbla | ali | Ali här. Nyckelringen sålde direkt. Jag ville bli ingenjör en gång. Nu har jag låtit en AI rita en skräpgrip. Kom och titta. |
| 6:37 | röst | ali | Ali här. Nyckelringen sålde direkt. Jag ville bli ingenjör en gång. Nu har jag låtit en AI rita en skräpgrip. Kom och titta. · STORY |
| 6:37 | orsak-väntan |  | dialog:aliGripSms |
| 6:37 | väntar | du | Med en skräpgrip slipper jag böja mig. Ali har en ritning. |
| 6:37 | målruta |  | Köp skräpgripen |
| 6:37 | kvitto-visas |  | (läget ändras) |
| 6:37 | sak |  | (läget ändras) |
| 6:38 | paket |  | tanke |
| 6:38 | tanke | du | Femtio kronor. Nu har jag råd med gripen. |
| 6:38 | väntar | du | Femtio kronor. Nu har jag råd med gripen. |
| 6:50 | struken | du | Med en skräpgrip slipper jag böja mig. Ali har en ritning. |
| 6:50 | klar | ali | Ali här. Nyckelringen sålde direkt. Jag ville bli ingenjör en gång. Nu har jag låtit en AI rita en skräpgrip. Kom och titta. |
| 6:50 | sak | du | Femtio kronor. Nu har jag råd med gripen. |
| 6:50 | notis | tanke | 💭 Femtio kronor. Nu har jag råd med gripen. |
| 6:50 | röst | du | Femtio kronor. Nu har jag råd med gripen. · REAKTION |
| 6:54 | klar | du | Femtio kronor. Nu har jag råd med gripen. |
| 6:56 | sak | du | Med en skräpgrip slipper jag böja mig. Ali har en ritning. |
| 6:56 | pil |  | Köp skräpgripen |
| 6:56 | notis | tanke | 💭 Med en skräpgrip slipper jag böja mig. Ali har en ritning. |
| 6:56 | röst | du | Med en skräpgrip slipper jag böja mig. Ali har en ritning. · MÅL |
| 6:57 | nick |  | nick:14 |
| 7:01 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 7:02 | klar | du | Med en skräpgrip slipper jag böja mig. Ali har en ritning. |
| 7:03 | struken | info:guld | 3D-modell köpt – printa skräpgrip |
| 7:03 | händelse | kopt | sak=grip |
| 7:03 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 7:03 | händelse | dialog | id=aliForstaRitning |
| 7:03 | röst | ali | Bra val. Ritningen räcker till en skräpgrip. · STORY |
| 7:03 | butiksbubbla | ali | Bra val. Ritningen räcker till en skräpgrip. |
| 7:04 | händelse | malKlart | id=kopGrip del=Dag 1 – Kom igång nasta=printGrip |
| 7:04 | bekräftelse | du | plats |
| 7:04 | väntar | du | Min första 3D-modell! Jag printar inte bara saker – jag printar maskiner. |
| 7:04 | väntar | du | Ritningen är min. Nu printar jag skräpgripen. |
| 7:04 | MÅL |  | Printa skräpgripen |
| 7:08 | kvittens-bock |  | ✓ Köp skräpgripen |
| 7:09 | sak | du | Min första 3D-modell! Jag printar inte bara saker – jag printar maskiner. |
| 7:09 | kvitto-visas | du | Min första 3D-modell! Jag printar inte bara saker – jag printar maskiner. |
| 7:09 | lapp | 📔 Dagbok | Min första 3D-modell! Jag printar inte bara saker – jag printar maskiner. |
| 7:09 | dagbokrad | du | Min första 3D-modell! Jag printar inte bara saker – jag printar maskiner. |
| 7:09 | notis | dagbok | Min första 3D-modell! Jag printar inte bara saker – jag printar maskiner. |
| 7:09 | klar | du | Min första 3D-modell! Jag printar inte bara saker – jag printar maskiner. |
| 7:09 | sak | du | Ritningen är min. Nu printar jag skräpgripen. |
| 7:09 | målruta |  | Printa skräpgripen |
| 7:09 | pil |  | Printa skräpgripen |
| 7:09 | notis | tanke | 💭 Ritningen är min. Nu printar jag skräpgripen. |
| 7:09 | röst | du | Ritningen är min. Nu printar jag skräpgripen. · MÅL |
| 7:10 | nick |  | nick:15 |
| 7:15 | klar | du | Ritningen är min. Nu printar jag skräpgripen. |
| 7:32 | händelse | printStart | sak=byggsats:grip |
| 7:33 | toast | fel | Ingen ström – trampa cykeln |
| 7:33 | väntar | notis:Storebrors skrivare: Ingen ström – tramp | Storebrors skrivare: Ingen ström – trampa cykeln |
| 7:33 | sak | notis:Storebrors skrivare: Ingen ström – tramp | Storebrors skrivare: Ingen ström – trampa cykeln |
| 7:33 | notis | fel | Storebrors skrivare: Ingen ström – trampa cykeln |
| 7:34 | brott | DUBBEL UPPMANING | "trampa" på 2 ställen: pekrutan, notisen |
| 7:35 | klar | notis:Storebrors skrivare: Ingen ström – tramp | Storebrors skrivare: Ingen ström – trampa cykeln |
| 7:35 | händelse | printKlar | sak=byggsats:grip n=1 |
| 7:50 | tanke | du | Skräpgrip ska jag ha på mig. |
| 7:50 | väntar | du | Skräpgrip ska jag ha på mig. |
| 7:50 | händelse | tagitUrPrint | sak=byggsats:grip n=1 |
| 7:50 | paket |  | sms |
| 7:50 | väntar | ali | Ali här. Jag såg Skräpgrip på avstånd. Ett streck blev lite snett. Mitt fel. Vackert ändå. |
| 7:50 | sak | du | Skräpgrip ska jag ha på mig. |
| 7:50 | notis | tanke | 💭 Skräpgrip ska jag ha på mig. |
| 7:50 | röst | du | Skräpgrip ska jag ha på mig. · REAKTION |
| 7:53 | klar | du | Skräpgrip ska jag ha på mig. |
| 7:54 | hjälp | kontroll | Klick: Klicka för att ta på dig den |
| 7:56 | tanke | du | Skräpgripen sitter! Jag bär 6, siktar lättare och plockar när jag går nära. |
| 7:56 | väntar | du | Skräpgripen sitter! Jag bär 6, siktar lättare och plockar när jag går nära. |
| 7:56 | tog på | du | byggsats:grip |
| 7:56 | händelse | monterat | sak=grip |
| 7:56 | sak | du | Skräpgripen sitter! Jag bär 6, siktar lättare och plockar när jag går nära. |
| 7:56 | notis | tanke | 💭 Skräpgripen sitter! Jag bär 6, siktar lättare och plockar när jag går nära. |
| 7:56 | röst | du | Skräpgripen sitter! Jag bär 6, siktar lättare och plockar när jag går nära. · REAKTION |
| 7:56 | händelse | malKlart | id=printGrip del=Dag 1 – Kom igång nasta=krukaD1 |
| 7:56 | bekräftelse | du | plats |
| 7:56 | väntar | du | Spara till krukreceptet. |
| 7:56 | MÅL |  | Spara till krukreceptet · 20 / 40 kr |
| 7:58 | händelse | printStart | sak=nyckelring |
| 7:58 | målruta |  | Spara till krukreceptet · 20 / 40 kr |
| 7:59 | händelse | printKlar | sak=nyckelring n=6 |
| 8:00 | kvittens-bock |  | ✓ Printa skräpgripen |
| 8:04 | klar | du | Skräpgripen sitter! Jag bär 6, siktar lättare och plockar när jag går nära. |
| 8:04 | sak | ali | Ali här. Jag såg Skräpgrip på avstånd. Ett streck blev lite snett. Mitt fel. Vackert ändå. |
| 8:04 | sms | ali | Ali här. Jag såg Skräpgrip på avstånd. Ett streck blev lite snett. Mitt fel. Vackert ändå. |
| 8:04 | sms-bubbla | ali | Ali här. Jag såg Skräpgrip på avstånd. Ett streck blev lite snett. Mitt fel. Vackert ändå. |
| 8:04 | röst | ali | Ali här. Jag såg Skräpgrip på avstånd. Ett streck blev lite snett. Mitt fel. Vackert ändå. · REAKTION |
| 8:14 | klar | ali | Ali här. Jag såg Skräpgrip på avstånd. Ett streck blev lite snett. Mitt fel. Vackert ändå. |
| 8:14 | sak | du | Spara till krukreceptet. |
| 8:14 | pil |  | Spara till krukreceptet · 20 / 40 kr |
| 8:14 | röst | du | Spara till krukreceptet. · MÅL |
| 8:18 | klar | du | Spara till krukreceptet. |
| 8:28 | upplåst | bara | grip |
| 8:28 | brott | UPPLÅST | grip (bara 3 av 3) |
| 8:28 | händelse | upplast | id=grip flask=bara |
| 8:28 | paket |  | tanke |
| 8:28 | tanke | du | Ett skräp i taget. Jag springer ihjäl mig. |
| 8:28 | väntar | du | Ett skräp i taget. Jag springer ihjäl mig. |
| 8:28 | sak | du | Ett skräp i taget. Jag springer ihjäl mig. |
| 8:28 | notis | tanke | 💭 Ett skräp i taget. Jag springer ihjäl mig. |
| 8:28 | röst | du | Ett skräp i taget. Jag springer ihjäl mig. · STORY |
| 8:32 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 8:32 | klar | du | Ett skräp i taget. Jag springer ihjäl mig. |
| 8:34 | händelse | printStart | sak=nyckelring |
| 8:35 | händelse | printKlar | sak=nyckelring n=7 |
| 8:36 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 8:38 | händelse | printStart | sak=nyckelring |
| 8:39 | händelse | printKlar | sak=nyckelring n=8 |
| 8:40 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 8:50 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 8:51 | händelse | salt | sak=nyckelring n=1 |
| 8:51 | aliSalt | ali | 15 |
| 8:51 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 8:52 | händelse | salt | sak=nyckelring n=1 |
| 8:52 | aliSalt | ali | 15 |
| 8:52 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 8:52 | händelse | salt | sak=nyckelring n=1 |
| 8:52 | aliSalt | ali | 15 |
| 8:52 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 8:53 | upplåst | inkomst | kruka |
| 8:53 | brott | UPPLÅST | kruka (inkomst 8 av 6) |
| 8:53 | händelse | upplast | id=kruka flask=inkomst |
| 8:53 | paket |  | tanke → sms |
| 8:53 | tanke | du | Nyckelringar, nyckelringar. Ali kan inte vilja ha fler. |
| 8:53 | väntar | du | Nyckelringar, nyckelringar. Ali kan inte vilja ha fler. |
| 8:53 | väntar | ali | Prova en kruka. Folk köper krukor. Ingen vet varför. |
| 8:53 | skratt | ali | Prova en kruka. Folk köper krukor. Ingen |
| 8:53 | sak | du | Nyckelringar, nyckelringar. Ali kan inte vilja ha fler. |
| 8:53 | notis | tanke | 💭 Nyckelringar, nyckelringar. Ali kan inte vilja ha fler. |
| 8:53 | röst | du | Nyckelringar, nyckelringar. Ali kan inte vilja ha fler. · STORY |
| 8:59 | klar | du | Nyckelringar, nyckelringar. Ali kan inte vilja ha fler. |
| 9:01 | sak | ali | Prova en kruka. Folk köper krukor. Ingen vet varför. |
| 9:01 | skratt | ali | Prova en kruka. Folk köper krukor. Ingen |
| 9:01 | sms | ali | Prova en kruka. Folk köper krukor. Ingen vet varför. |
| 9:01 | skratt | ali | Prova en kruka. Folk köper krukor. Ingen |
| 9:01 | händelse | dialog | id=aliKrukaSms |
| 9:01 | sms-bubbla | ali | Prova en kruka. Folk köper krukor. Ingen vet varför. |
| 9:01 | skratt | ali | Prova en kruka. Folk köper krukor. Ingen |
| 9:01 | röst | ali | Prova en kruka. Folk köper krukor. Ingen vet varför. · STORY |
| 9:08 | klar | ali | Prova en kruka. Folk köper krukor. Ingen vet varför. |
| 9:08 | skratt | ali | Prova en kruka. Folk köper krukor. Ingen |
| 9:08 | väntar | du | Ali vill ha krukor. Jag printar en blomkruka. |
| 9:12 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 9:14 | händelse | kopt | sak=kruka |
| 9:14 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 9:14 | händelse | dialog | id=aliKrukaRecept |
| 9:14 | röst | ali | Blomkruka? Bra val. Folk köper sånt. Jag vet inte varför. · STORY |
| 9:14 | butiksbubbla | ali | Blomkruka? Bra val. Folk köper sånt. Jag vet inte varför. |
| 9:17 | struken | du | Ali vill ha krukor. Jag printar en blomkruka. |
| 9:24 | tanke | du | En blomkruka åt Ali. |
| 9:24 | väntar | du | En blomkruka åt Ali. |
| 9:24 | nick |  | paminn:16 |
| 9:26 | sak | du | Ali vill ha krukor. Jag printar en blomkruka. |
| 9:26 | röst | du | Ali vill ha krukor. Jag printar en blomkruka. · STORY |
| 9:31 | klar | du | Ali vill ha krukor. Jag printar en blomkruka. |
| 9:34 | händelse | printStart | sak=kruka |
| 9:35 | toast | fel | Ingen ström – trampa cykeln |
| 9:38 | händelse | printKlar | sak=kruka n=1 |
| 9:38 | händelse | malKlart | id=krukaD1 del=Dag 1 – Kom igång nasta=saljKruka |
| 9:38 | bekräftelse | du | plats |
| 9:38 | kvittens | du | En kruka. Mamma skulle bli så stolt. Hon får inte veta. |
| 9:38 | väntar | du | En kruka. Mamma skulle bli så stolt. Hon får inte veta. |
| 9:38 | väntar | du | Ali gillar krukor. Han sa det själv. |
| 9:38 | MÅL |  | Sälj blomkrukan |
| 9:38 | sak | du | En kruka. Mamma skulle bli så stolt. Hon får inte veta. |
| 9:38 | röst | du | En kruka. Mamma skulle bli så stolt. Hon får inte veta. · STORY |
| 9:38 | målruta |  | Sälj blomkrukan |
| 9:39 | händelse | tagitUrPrint | sak=kruka n=1 |
| 9:43 | klar | du | En kruka. Mamma skulle bli så stolt. Hon får inte veta. |
| 9:43 | sak | du | Ali gillar krukor. Han sa det själv. |
| 9:43 | pil |  | Sälj blomkrukan |
| 9:43 | notis | tanke | 💭 Ali gillar krukor. Han sa det själv. |
| 9:43 | röst | du | Ali gillar krukor. Han sa det själv. · MÅL |
| 9:46 | klar | du | Ali gillar krukor. Han sa det själv. |
| 9:48 | struken | du | En blomkruka åt Ali. |
| 10:07 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 10:08 | händelse | salt | sak=kruka n=1 |
| 10:08 | aliSalt | ali | 70 |
| 10:08 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 10:10 | händelse | malKlart | id=saljKruka del=Dag 1 – Kom igång nasta=kopSang |
| 10:10 | bekräftelse | du | plats |
| 10:10 | väntar | du | Jag tänker inte sova på betongen i natt. Ali har en säng. Typ. |
| 10:10 | målruta |  | Köp sängen |
| 10:10 | MÅL |  | Köp sängen |
| 10:10 | sak | du | Jag tänker inte sova på betongen i natt. Ali har en säng. Typ. |
| 10:10 | pil |  | Köp sängen |
| 10:10 | notis | tanke | 💭 Jag tänker inte sova på betongen i natt. Ali har en säng. Typ. |
| 10:10 | röst | du | Jag tänker inte sova på betongen i natt. Ali har en säng. Typ. · MÅL |
| 10:14 | kvittens-bock |  | ✓ Sälj blomkrukan |
| 10:16 | väntar | bud | (tips) |
| 10:16 | klar | du | Jag tänker inte sova på betongen i natt. Ali har en säng. Typ. |
| 10:16 | sak | bud | (tips) |
| 10:17 | väntar | du | Jag har pengar nu. Hos Ali kan jag köpa uppgraderingar – bära mer eller printa snabbare. |
| 10:18 | paket |  | tanke |
| 10:18 | tanke | du | Det börjar bli mörkt. Jag kan inte sova på jorden. |
| 10:18 | väntar | du | Det börjar bli mörkt. Jag kan inte sova på jorden. |
| 10:18 | klar | bud | (tips) |
| 10:18 | sak | du | Jag har pengar nu. Hos Ali kan jag köpa uppgraderingar – bära mer eller printa snabbare. |
| 10:18 | röst | du | Jag har pengar nu. Hos Ali kan jag köpa uppgraderingar – bära mer eller printa snabbare. · MÅL |
| 10:25 | klar | du | Jag har pengar nu. Hos Ali kan jag köpa uppgraderingar – bära mer eller printa snabbare. |
| 10:28 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 10:29 | händelse | kopt | sak=sang |
| 10:29 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 10:29 | händelse | dialog | id=aliSang |
| 10:29 | röst | ali | Sov gott, min vän. · STORY |
| 10:29 | butiksbubbla | ali | Sov gott, min vän. |
| 10:30 | händelse | malKlart | id=kopSang del=Dag 1 – Kom igång nasta=printSang |
| 10:30 | bekräftelse | du | plats |
| 10:30 | struken | du | Det börjar bli mörkt. Jag kan inte sova på jorden. |
| 10:30 | väntar | du | En säng tar lång tid. Den är värd det. |
| 10:30 | målruta |  | Printa sängen |
| 10:31 | MÅL |  | Printa sängen |
| 10:31 | pil |  | Printa sängen |
| 10:31 | nick |  | nick:19 |
| 10:33 | sak | du | En säng tar lång tid. Den är värd det. |
| 10:33 | notis | tanke | 💭 En säng tar lång tid. Den är värd det. |
| 10:33 | röst | du | En säng tar lång tid. Den är värd det. · MÅL |
| 10:34 | kvittens-bock |  | ✓ Köp sängen |
| 10:37 | klar | du | En säng tar lång tid. Den är värd det. |
| 11:34 | händelse | printStart | sak=sang |
| 11:38 | toast | fel | Ingen ström – trampa cykeln |
| 11:41 | toast | fel | Slut på tråd – mal mer så fortsätter den |
| 11:41 | väntar | notis:Storebrors skrivare: Slut på tråd – mal  | Storebrors skrivare: Slut på tråd – mal mer så fortsätter den |
| 11:41 | sak | notis:Storebrors skrivare: Slut på tråd – mal  | Storebrors skrivare: Slut på tråd – mal mer så fortsätter den |
| 11:41 | notis | fel | Storebrors skrivare: Slut på tråd – mal mer så fortsätter den |
| 11:44 | klar | notis:Storebrors skrivare: Slut på tråd – mal  | Storebrors skrivare: Slut på tråd – mal mer så fortsätter den |
| 12:17 | händelse | printKlar | sak=sang n=1 |
| 12:21 | händelse | tagitUrPrint | sak=sang n=1 |
| 12:21 | händelse | malKlart | id=printSang del=Dag 1 – Kom igång nasta=sov1 |
| 12:21 | bekräftelse | du | plats |
| 12:21 | kvittens | du | En säng. Jag printade en SÄNG. |
| 12:21 | väntar | du | En säng. Jag printade en SÄNG. |
| 12:21 | paket |  | lapp |
| 12:21 | kvallsrad | du | Nitton år. Inget mer tjat. Gården är full av skräp. I morgon. |
| 12:21 | väntar | du | Sängen ska in i skjulet. Sen sover jag. |
| 12:21 | MÅL |  | Sängen i skjulet |
| 12:21 | sak | du | En säng. Jag printade en SÄNG. |
| 12:21 | röst | du | En säng. Jag printade en SÄNG. · STORY |
| 12:21 | målruta |  | Sängen i skjulet |
| 12:26 | klar | du | En säng. Jag printade en SÄNG. |
| 12:26 | sak | du | Sängen ska in i skjulet. Sen sover jag. |
| 12:26 | pil |  | Sängen i skjulet |
| 12:26 | notis | tanke | 💭 Sängen ska in i skjulet. Sen sover jag. |
| 12:26 | röst | du | Sängen ska in i skjulet. Sen sover jag. · MÅL |
| 12:26 | nick |  | nick:20 |
| 12:30 | klar | du | Sängen ska in i skjulet. Sen sover jag. |
| 12:49 | nattkort | du | 🌙 21 dagar kvar. God natt. zzz… i en riktig säng Nitton år. Inget mer tjat. Gården är full av skräp. I morgon. DAGENS PRINTAR Nyckelring × 8 Blomkruka × 1 Säng |

<details><summary>Botens handlingar dag 1</summary>

- 0:20 gå till brädhögen (3 m) (5 kr)
- 0:33 gå till cykeln vid vägen (2 m) (5 kr)
- 0:57 gå till rutan i linje 1 (13 m) (5 kr)
- 1:48 gå till cykeln (lyfter den) (13 m) (5 kr)
- 1:54 gå till cykelns plats (11 m) (5 kr)
- 2:05 gå till fel håll en bit (4 m) (5 kr)
- 2:08 gå till skrivaren (2 m) (5 kr)
- 2:09 printar Nyckelring (5 kr)
- 2:17 tar ut 1 st ur skrivaren (5 kr)
- 2:35 nybörjaren ser ingen pil – tittar runt (5 kr)
- 2:41 printar Nyckelring (sista av storebrors rulle) (5 kr)
- 3:17 nybörjaren ser ingen pil – tittar runt (5 kr)
- 3:23 tar ut 1 st ur skrivaren (5 kr)
- 3:24 gå till fel håll en bit (4 m) (5 kr)
- 3:34 gå till Ali (26 m) (5 kr)
- 3:34 öppnar Alis butik – sälja de två nyckelringarna (5 kr)
- 3:37 säljer hos Ali: +30 kr (35 kr)
- 3:55 nybörjaren ser ingen pil – tittar runt (35 kr)
- 4:00 öppnar Alis butik – köpa kvarnen (35 kr)
- 4:02 köper gammalkvarn för 30 kr (5 kr)
- 4:03 köpte kvarnen (5 kr)
- 4:32 gå till kvarnens ruta (28 m) (5 kr)
- 4:51 plockar 3 skräp på gården (bär max 3) (5 kr)
- 4:55 gå till kvarnen (10 m) (5 kr)
- 5:17 gå till cykeln (3 m) (5 kr)
- 5:17 gå till skrivaren (1 m) (5 kr)
- 5:19 printar Nyckelring (5 kr)
- 5:25 tar ut 1 st ur skrivaren (5 kr)
- 5:38 printar Nyckelring (5 kr)
- 5:40 tar ut 1 st ur skrivaren (5 kr)
- 5:41 printar Nyckelring (5 kr)
- 5:43 tar ut 1 st ur skrivaren (5 kr)
- 5:54 gå till Ali (27 m) (5 kr)
- 5:54 öppnar Alis butik – sälja nyckelringar (5 kr)
- 5:56 säljer hos Ali: +45 kr (50 kr)
- 6:05 panel: "Alis butik
50 kr
0 rullar
Jag " (50 kr)
- 6:30 gå till koppla powerbanken till cykeln (24 m) (70 kr)
- 6:49 nybörjaren ser ingen pil – tittar runt (70 kr)
- 7:01 gå till Ali (24 m) (70 kr)
- 7:01 öppnar Alis butik – köpa skräpgrip (70 kr)
- 7:03 köper grip för 50 kr (20 kr)
- 7:30 gå till skrivaren (25 m) (20 kr)
- 7:32 printar Skräpgrip (20 kr)
- 7:33 gå till cykeln (1 m) (20 kr)
- 7:41 plockar 3 skräp på gården (bär max 3) (20 kr)
- 7:47 gå till kvarnen (14 m) (20 kr)
- 7:50 gå till skrivaren (1 m) (20 kr)
- 7:50 tar ut 1 st ur skrivaren (20 kr)
- 7:56 tar på grip (20 kr)
- 7:56 tjänar pengar till väntar på flaskhalsen för kruka: 20/60 kr → printar nyckelring (15 kr) (20 kr)
- 7:58 printar Nyckelring (20 kr)
- 8:18 plockar 6 skräp på gården (bär max 6) (20 kr)
- 8:28 gå till kvarnen (28 m) (20 kr)
- 8:32 gå till skrivaren (3 m) (20 kr)
- 8:32 tar ut 1 st ur skrivaren (20 kr)
- 8:34 printar Nyckelring (20 kr)
- 8:36 tar ut 1 st ur skrivaren (20 kr)
- 8:38 printar Nyckelring (20 kr)
- 8:40 tar ut 1 st ur skrivaren (20 kr)
- 8:50 gå till Ali (28 m) (20 kr)
- 8:50 öppnar Alis butik – sälja (20 kr)
- 8:52 säljer hos Ali: +45 kr (65 kr)
- 9:12 öppnar Alis butik – köpa receptet blomkruka (65 kr)
- 9:15 köper kruka för 40 kr (25 kr)
- 9:33 gå till skrivaren (25 m) (25 kr)
- 9:34 printar Blomkruka (25 kr)
- 9:35 gå till cykeln (1 m) (25 kr)
- 9:39 tar ut 1 st ur skrivaren (25 kr)
- 9:54 nybörjaren ser ingen pil – tittar runt (25 kr)
- 10:07 gå till Ali (25 m) (25 kr)
- 10:07 öppnar Alis butik – sälja krukan (25 kr)
- 10:09 säljer hos Ali: +70 kr (95 kr)
- 10:28 öppnar Alis butik – köpa sängen (95 kr)
- 10:30 köper sang för 60 kr (35 kr)
- 10:58 gå till dit pilen pekar (30 m) (35 kr)
- 11:19 plockar 6 skräp på gården (bär max 6) (35 kr)
- 11:29 gå till kvarnen (28 m) (35 kr)
- 11:33 gå till skrivaren (1 m) (35 kr)
- 11:34 printar Säng (35 kr)
- 11:39 gå till cykeln (2 m) (35 kr)
- 12:03 plockar 6 skräp på gården (bär max 6) (35 kr)
- 12:15 gå till kvarnen (32 m) (35 kr)
- 12:21 gå till skrivaren (3 m) (35 kr)
- 12:22 tar ut 1 st ur skrivaren (35 kr)
- 12:46 gå till sängplatsen i skjulet (21 m) (35 kr)

</details>

## Dag 2

| Tid | Källa | Vem | Text |
|---|---|---|---|
| 12:49 | vara | ali | kruka |
| 12:49 | händelse | malKlart | id=sov1 del=Dag 1 – Kom igång nasta=kopMotor |
| 12:49 | bekräftelse | du | plats |
| 12:49 | MÅL |  | Spara till kvarnmotorn · 35 / 50 kr |
| 12:50 | väntar | ali | Ali här. Såg skylten. Stavningen är rätt. Det är mer än många. |
| 0:01 | väntar | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått generator. Vi tar en låt på det. Den här är till dig, Gunnar. |
| 0:01 | radio | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått generator. Vi tar en låt på det. Den här är till dig, Gunnar. |
| 0:01 | skratt | du | Radio-Kjelle |
| 0:01 | dagbok | du | Första natten i en riktig säng. Jag printade den själv. |
| 0:01 | händelse | dagenBorjar | dag=2 |
| 0:01 | meddelande | du | 20 dagar till jul. Vevar jag för hand hinner jag inget annat. |
| 0:01 | dagbokkort | du | Kvarnmotorn. · 20 dagar till jul. Vevar jag för hand hinner jag inget annat. |
| 0:01 | röst | du | 20 dagar till jul. Kvarnmotorn. Vevar jag för hand hinner jag inget annat. · STORY |
| 0:11 | väntar | notis:morgon | Ali vill ha idag: Blomkruka · +50 % |
| 0:11 | händelse | morgonkortStangt | dag=2 |
| 0:11 | väntar | ali | Ali här. Såg skylten. Stavningen är rätt. Det är mer än många. |
| 0:11 | väntar | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått generator. Vi tar en låt på det. Den här är till dig, Gunnar. |
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
| 0:21 | klar | du | Vevandet tar på armarna. Ali har en motor till kvarnen. |
| 0:21 | sak | notis:morgon | Ali vill ha idag: Blomkruka · +50 % |
| 0:21 | notis |  | Blomkruka · +50 % |
| 0:25 | klar | notis:morgon | Ali vill ha idag: Blomkruka · +50 % |
| 0:29 | väntar | foto | Egen säng |
| 0:29 | paket |  | tanke |
| 0:29 | tanke | du | Tänk att jag ska få sova i min egen säng. |
| 0:29 | väntar | du | Tänk att jag ska få sova i min egen säng. |
| 0:39 | händelse | printStart | sak=kruka |
| 0:42 | händelse | printKlar | sak=kruka n=2 |
| 0:42 | händelse | tagitUrPrint | sak=kruka n=1 |
| 0:47 | sak | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått generator. Vi tar en låt på det. Den här är till dig, Gunnar. |
| 0:47 | notis |  | 📻 Radio Tippen: Radio Tippen, Kjelle här. Skjulet vid tippen har fått generator. Vi tar en låt på det. Den här är till dig, Gunnar. |
| 0:47 | röst | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått generator. Vi tar en låt på det. Den här är till dig, Gunnar. · REAKTION |
| 0:51 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 0:51 | butiksbubbla | ali | Jag ser 3D-skrivarvideor på YouTube i lagret. Inte för att jag har tid. Jag har aldrig tid. |
| 0:53 | röst | ali | Jag ser 3D-skrivarvideor på YouTube i lagret. Inte för att jag har tid. Jag har aldrig tid. · STORY |
| 0:53 | händelse | salt | sak=kruka n=1 |
| 0:53 | aliSalt | ali | 105 |
| 0:53 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 0:53 | butiksbubbla | ali | Precis vad jag ville ha idag. 105 kr – med extra. |
| 0:54 | väntar | ali | Precis det jag ville ha idag, min vän. |
| 0:54 | upplåst | mala | kvarnmotor |
| 0:54 | brott | UPPLÅST | kvarnmotor (mala 7 av 6, sparat ihop) |
| 0:54 | händelse | upplast | id=kvarnmotor flask=mala |
| 0:54 | paket |  | tanke → sms |
| 0:54 | tanke | du | Mina armar… Kvarnen borde veva själv. |
| 0:54 | väntar | du | Mina armar… Kvarnen borde veva själv. |
| 0:54 | väntar | ali | Ali här. En motor? Jag har en. Från en gammal tvättmaskin. Den centrifugerar fortfarande om man ber snällt. |
| 0:54 | kvitto-visas | du | Mina armar… Kvarnen borde veva själv. |
| 0:54 | sak | du | Mina armar… Kvarnen borde veva själv. |
| 0:54 | notis | tanke | 💭 Mina armar… Kvarnen borde veva själv. |
| 0:57 | klar | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått generator. Vi tar en låt på det. Den här är till dig, Gunnar. |
| 1:04 | sak | ali | Precis det jag ville ha idag, min vän. |
| 1:04 | röst | ali | Precis det jag ville ha idag, min vän. · STORY |
| 1:06 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 1:07 | struken | info:guld | 3D-modell köpt – printa kvarnmotor |
| 1:07 | händelse | kopt | sak=kvarnmotor |
| 1:07 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 1:08 | okänt ord bytt | du | Sopbilen tippade en ny last. Allt det skräpet – och grinden är låst. |
| 1:08 | väntar | du | Sopbilen tippade en ny last. Allt det skräpet – och grinden är låst. |
| 1:08 | skratt | du | däcket rullar iväg |
| 1:08 | klar | ali | Precis det jag ville ha idag, min vän. |
| 1:08 | struken | ali | Ali här. En motor? Jag har en. Från en gammal tvättmaskin. Den centrifugerar fortfarande om man ber snällt. |
| 1:09 | sak | du | Sopbilen tippade en ny last. Allt det skräpet – och grinden är låst. |
| 1:09 | kvitto-visas | du | Sopbilen tippade en ny last. Allt det skräpet – och grinden är låst. |
| 1:09 | lapp | 📔 Dagbok | Sopbilen tippade en ny last. Allt det skräpet – och grinden är låst. |
| 1:09 | okänt ord bytt | du | Sopbilen tippade en ny last. Allt det skräpet – och grinden är låst. |
| 1:09 | dagbokrad | du | En stor bil tippade en ny last. Allt det skräpet – och grinden är låst. |
| 1:09 | notis | dagbok | En stor bil tippade en ny last. Allt det skräpet – och grinden är låst. |
| 1:09 | händelse | malKlart | id=kopMotor del=Dag 2 – Tippen bredvid nasta=monteraMotor |
| 1:09 | bekräftelse | du | plats |
| 1:09 | väntar | du | Motorn ska sitta där veven sitter. Jag printar den först. |
| 1:09 | MÅL |  | Printa kvarnmotorn till kvarnen |
| 1:09 | klar | du | Sopbilen tippade en ny last. Allt det skräpet – och grinden är låst. |
| 1:09 | sak | du | Motorn ska sitta där veven sitter. Jag printar den först. |
| 1:09 | målruta |  | Printa kvarnmotorn till kvarnen |
| 1:09 | pil |  | Printa kvarnmotorn till kvarnen |
| 1:09 | notis | tanke | 💭 Motorn ska sitta där veven sitter. Jag printar den först. |
| 1:09 | röst | du | Motorn ska sitta där veven sitter. Jag printar den först. · MÅL |
| 1:10 | nick |  | nick:22 |
| 1:15 | klar | du | Motorn ska sitta där veven sitter. Jag printar den först. |
| 1:34 | sak | foto | Egen säng |
| 1:34 | foto | du | Egen säng |
| 1:36 | klar | foto | Egen säng |
| 1:38 | händelse | printStart | sak=byggsats:kvarnmotor |
| 1:39 | toast | fel | Ingen ström – trampa cykeln |
| 1:41 | händelse | printKlar | sak=byggsats:kvarnmotor n=1 |
| 1:41 | tanke | du | Kvarnmotorn ska skruvas fast på kvarnen. |
| 1:41 | väntar | du | Kvarnmotorn ska skruvas fast på kvarnen. |
| 1:41 | händelse | tagitUrPrint | sak=byggsats:kvarnmotor n=1 |
| 1:41 | paket |  | sms |
| 1:41 | väntar | ali | Ali här. Ännu en ritning som blev på riktigt: Kvarnmotor. Semesterkassan växer. Livet växer. |
| 1:41 | sak | du | Kvarnmotorn ska skruvas fast på kvarnen. |
| 1:41 | notis | tanke | 💭 Kvarnmotorn ska skruvas fast på kvarnen. |
| 1:41 | röst | du | Kvarnmotorn ska skruvas fast på kvarnen. · REAKTION |
| 1:46 | klar | du | Kvarnmotorn ska skruvas fast på kvarnen. |
| 1:48 | sak | ali | Ali här. Ännu en ritning som blev på riktigt: Kvarnmotor. Semesterkassan växer. Livet växer. |
| 1:48 | sms | ali | Ali här. Ännu en ritning som blev på riktigt: Kvarnmotor. Semesterkassan växer. Livet växer. |
| 1:48 | sms-bubbla | ali | Ali här. Ännu en ritning som blev på riktigt: Kvarnmotor. Semesterkassan växer. Livet växer. |
| 1:48 | röst | ali | Ali här. Ännu en ritning som blev på riktigt: Kvarnmotor. Semesterkassan växer. Livet växer. · REAKTION |
| 1:55 | tanke | du | Motorn sitter där veven satt – nu mal kvarnen själv. |
| 1:55 | väntar | du | Motorn sitter där veven satt – nu mal kvarnen själv. |
| 1:55 | händelse | monterat | sak=kvarnmotor |
| 1:55 | paket |  | tanke |
| 1:55 | tanke | du | Motorn sitter där veven satt. Mina armar tackar. |
| 1:55 | struken | du | Motorn sitter där veven satt – nu mal kvarnen själv. |
| 1:55 | väntar | du | Motorn sitter där veven satt. Mina armar tackar. |
| 1:55 | monterat | du | byggsats:kvarnmotor |
| 1:55 | händelse | monterat | sak=kvarnmotor |
| 1:55 | händelse | malKlart | id=monteraMotor del=Dag 2 – Tippen bredvid nasta=n1-stada-klart-garden |
| 1:55 | bekräftelse | du | plats |
| 1:55 | struken | du | Motorn sitter där veven satt. Mina armar tackar. |
| 1:55 | väntar | du | Gården är full av skräp. Jag börjar vid skjulet. |
| 1:55 | MÅL |  | Städa gården |
| 1:57 | klar | ali | Ali här. Ännu en ritning som blev på riktigt: Kvarnmotor. Semesterkassan växer. Livet växer. |
| 1:57 | sak | du | Gården är full av skräp. Jag börjar vid skjulet. |
| 1:57 | målruta |  | Städa gården |
| 1:57 | pil |  | Städa gården |
| 1:57 | notis | tanke | 💭 Gården är full av skräp. Jag börjar vid skjulet. |
| 1:57 | röst | du | Gården är full av skräp. Jag börjar vid skjulet. · MÅL |
| 1:57 | nick |  | nick:23 |
| 1:59 | kvittens-bock |  | ✓ Printa kvarnmotorn till kvarnen |
| 2:03 | klar | du | Gården är full av skräp. Jag börjar vid skjulet. |
| 2:11 | sak | du | Tänk att jag ska få sova i min egen säng. |
| 2:11 | notis | tanke | 💭 Tänk att jag ska få sova i min egen säng. |
| 2:11 | röst | du | Tänk att jag ska få sova i min egen säng. · STORY |
| 2:15 | klar | du | Tänk att jag ska få sova i min egen säng. |
| 2:28 | upplåst | skrivare | rullstall |
| 2:28 | brott | UPPLÅST | rullstall (skrivare 149 av 60) |
| 2:28 | händelse | upplast | id=rullstall flask=skrivare |
| 2:28 | paket |  | tanke → sms |
| 2:28 | tanke | du | Kvarnen står och väntar för att hållaren är full. Om den rymde fler rullar kunde den mala hela tiden. |
| 2:28 | väntar | du | Kvarnen står och väntar för att hållaren är full. Om den rymde fler rullar kunde den mala hela tiden. |
| 2:28 | väntar | ali | Ali här. Rullställ. Fyra rullar i stället för en. Har ett på hyllan. |
| 2:28 | sak | du | Kvarnen står och väntar för att hållaren är full. Om den rymde fler rullar kunde den mala hela tiden. |
| 2:28 | notis | tanke | 💭 Kvarnen står och väntar för att hållaren är full. Om den rymde fler rullar kunde den mala hela tiden. |
| 2:28 | röst | du | Kvarnen står och väntar för att hållaren är full. Om den rymde fler rullar kunde den mala hela tiden. · STORY |
| 2:34 | klar | du | Kvarnen står och väntar för att hållaren är full. Om den rymde fler rullar kunde den mala hela tiden. |
| 2:41 | brott | TRÄNGSEL 2 | "Ali här. Rullställ. Fyra rullar i stället för en. " 4.8 s efter förra meddelandet, 45.5 s efter en klar uppgift |
| 2:41 | sak | ali | Ali här. Rullställ. Fyra rullar i stället för en. Har ett på hyllan. |
| 2:41 | sms | ali | Ali här. Rullställ. Fyra rullar i stället för en. Har ett på hyllan. |
| 2:41 | sms-bubbla | ali | Ali här. Rullställ. Fyra rullar i stället för en. Har ett på hyllan. |
| 2:41 | röst | ali | Ali här. Rullställ. Fyra rullar i stället för en. Har ett på hyllan. · STORY |
| 2:48 | skratt | du | falsk tuta |
| 2:48 | klar | ali | Ali här. Rullställ. Fyra rullar i stället för en. Har ett på hyllan. |
| 2:48 | händelse | malKlart | id=n1-stada-klart-garden del=Dag 2 – Tippen bredvid nasta=kopSack |
| 2:48 | bekräftelse | du | plats |
| 2:48 | lapp | 📔 Dagbok | Gården är STÄDAD, av mig, frivilligt. Mamma skulle aldrig tro det. |
| 2:48 | dagbokrad | du | Gården är STÄDAD, av mig, frivilligt. Mamma skulle aldrig tro det. |
| 2:48 | väntar | notis:Gården är STÄDAD, av mig, frivilligt. Ma | Gården är STÄDAD, av mig, frivilligt. Mamma skulle aldrig tro det. |
| 2:48 | väntar | du | En stor bil saktar in vid skjulet. Jag går dit. |
| 2:49 | MÅL |  | Gå till bilen vid skjulet |
| 2:49 | sak | notis:Gården är STÄDAD, av mig, frivilligt. Ma | Gården är STÄDAD, av mig, frivilligt. Mamma skulle aldrig tro det. |
| 2:49 | notis | dagbok | Gården är STÄDAD, av mig, frivilligt. Mamma skulle aldrig tro det. |
| 2:51 | klar | notis:Gården är STÄDAD, av mig, frivilligt. Ma | Gården är STÄDAD, av mig, frivilligt. Mamma skulle aldrig tro det. |
| 2:51 | sak | du | En stor bil saktar in vid skjulet. Jag går dit. |
| 2:51 | målruta |  | Gå till bilen vid skjulet |
| 2:51 | pil |  | Gå till bilen vid skjulet |
| 2:51 | notis | tanke | 💭 En stor bil saktar in vid skjulet. Jag går dit. |
| 2:51 | röst | du | En stor bil saktar in vid skjulet. Jag går dit. · MÅL |
| 2:57 | klar | du | En stor bil saktar in vid skjulet. Jag går dit. |
| 3:03 | tanke | du | Sopbilen tippade en ny last på soptippen! |
| 3:03 | okänt ord bytt | du | Sopbilen tippade en ny last på soptippen! |
| 3:03 | väntar | du | Sopbilen tippade en ny last på soptippen! |
| 3:03 | sak | du | Sopbilen tippade en ny last på soptippen! |
| 3:03 | notis | tanke | 💭 En stor bil tippade en ny last på soptippen! |
| 3:03 | röst | du | En stor bil tippade en ny last på soptippen! · REAKTION |
| 3:07 | klar | du | Sopbilen tippade en ny last på soptippen! |
| 3:10 | väntar | värld:TUUT TUUT! | TUUT TUUT! |
| 3:23 | scenInfo | rolf | inkorg 73: sopbilen kommer till skjulet |
| 3:28 | upplåst | skrivare | trim_skrivare |
| 3:28 | brott | UPPLÅST | trim_skrivare (skrivare 60 av 60) |
| 3:28 | händelse | upplast | id=trim_skrivare flask=skrivare |
| 3:28 | paket |  | sms |
| 3:28 | väntar | ali | Ali här. Skrivartrim. Jag skruvade på min egen skrivare i natt. Den går fortare nu. Nästan för fort. |
| 3:30 | struken | värld:TUUT TUUT! | TUUT TUUT! |
| 3:33 | skratt | du | falsk tuta |
| 3:34 | väntar | rolf | Tjena. Rolf. Ja kör sopbilen. Tippen där borta ä min. Har vart min sen -87. |
| 3:35 | sak | rolf | Tjena. Rolf. Ja kör sopbilen. Tippen där borta ä min. Har vart min sen -87. |
| 3:35 | händelse | dialog | id=rolfHej |
| 3:35 | röst | rolf | Tjena. Rolf. Ja kör sopbilen. Tippen där borta ä min. Har vart min sen -87. · REAKTION |
| 3:36 | bubbla |  | Tjena. Rolf. Ja kör sopbilen. Tippen där borta ä min. Har vart min sen -87. |
| 3:45 | väntar | mamma | Har du frusit än? |
| 3:48 | väntar | du | Tornet är fullt. Skrivaren får jobba ikapp. |
| 3:48 | väntar | info:fel | Tornet är fullt. Skrivaren får jobba ikapp. |
| 3:48 | klar | rolf | Tjena. Rolf. Ja kör sopbilen. Tippen där borta ä min. Har vart min sen -87. |
| 3:48 | sak | info:fel | Tornet är fullt. Skrivaren får jobba ikapp. |
| 3:48 | kvitto-visas | info:fel | Tornet är fullt. Skrivaren får jobba ikapp. |
| 3:48 | toast | fel | Tornet är fullt. Skrivaren får jobba ikapp. |
| 3:50 | klar | info:fel | Tornet är fullt. Skrivaren får jobba ikapp. |
| 3:50 | sak | du | Tornet är fullt. Skrivaren får jobba ikapp. |
| 3:50 | röst | du | Tornet är fullt. Skrivaren får jobba ikapp. · REAKTION |
| 3:54 | klar | du | Tornet är fullt. Skrivaren får jobba ikapp. |
| 3:54 | väntar | rolf | Du har städat hela gården. Ingen gör så nuförtin. |
| 3:55 | sak | rolf | Du har städat hela gården. Ingen gör så nuförtin. |
| 3:55 | händelse | dialog | id=rolfGarden |
| 3:55 | röst | rolf | Du har städat hela gården. Ingen gör så nuförtin. · REAKTION |
| 3:56 | bubbla |  | Du har städat hela gården. Ingen gör så nuförtin. |
| 4:01 | klar | rolf | Du har städat hela gården. Ingen gör så nuförtin. |
| 4:01 | väntar | rolf | Öj… ä dä du som printar grejer? Dom där nyckelringarna? |
| 4:01 | sak | rolf | Öj… ä dä du som printar grejer? Dom där nyckelringarna? |
| 4:01 | händelse | dialog | id=rolfPrintar |
| 4:01 | röst | rolf | Öj… ä dä du som printar grejer? Dom där nyckelringarna? · REAKTION |
| 4:02 | bubbla |  | Öj… ä dä du som printar grejer? Dom där nyckelringarna? |
| 4:05 | väntar | du | Tornet är fullt. Skrivaren får jobba ikapp. |
| 4:05 | väntar | info:fel | Tornet är fullt. Skrivaren får jobba ikapp. |
| 4:05 | kvitto-visas | info:fel | Tornet är fullt. Skrivaren får jobba ikapp. |
| 4:05 | toast | fel | Tornet är fullt. Skrivaren får jobba ikapp. |
| 4:08 | klar | rolf | Öj… ä dä du som printar grejer? Dom där nyckelringarna? |
| 4:08 | sak | du | Tornet är fullt. Skrivaren får jobba ikapp. |
| 4:08 | brott | SAMMA MENING TVÅ GÅNGER | "Tornet är fullt. Skrivaren får jobba ikapp." igen efter 18 s |
| 4:08 | röst | du | Tornet är fullt. Skrivaren får jobba ikapp. · REAKTION |
| 4:08 | upprepning | du | Tornet är fullt. Skrivaren får jobba ikapp. |
| 4:11 | klar | du | Tornet är fullt. Skrivaren får jobba ikapp. |
| 4:11 | väntar | du | Ja. Av skräp. |
| 4:11 | sak | du | Ja. Av skräp. |
| 4:11 | notis | tanke | Ja. Av skräp. |
| 4:11 | händelse | dialog | id=duAvSkrap |
| 4:11 | röst | du | Ja. Av skräp. · REAKTION |
| 4:16 | klar | du | Ja. Av skräp. |
| 4:16 | väntar | rolf | Hm. Ja kanske har nåt åt dej. Kolla postlådan vid grinden. |
| 4:16 | sak | rolf | Hm. Ja kanske har nåt åt dej. Kolla postlådan vid grinden. |
| 4:16 | händelse | dialog | id=rolfPostlada |
| 4:16 | röst | rolf | Hm. Ja kanske har nåt åt dej. Kolla postlådan vid grinden. · REAKTION |
| 4:17 | bubbla |  | Hm. Ja kanske har nåt åt dej. Kolla postlådan vid grinden. |
| 4:22 | sopsack | rolf | Rolf kastade ut säckarna vid skjulet |
| 4:22 | väntar | du | Tornet är fullt. Skrivaren får jobba ikapp. |
| 4:22 | väntar | info:fel | Tornet är fullt. Skrivaren får jobba ikapp. |
| 4:23 | kvitto-visas | info:fel | Tornet är fullt. Skrivaren får jobba ikapp. |
| 4:23 | toast | fel | Tornet är fullt. Skrivaren får jobba ikapp. |
| 4:23 | paket |  | tanke |
| 4:23 | tanke | du | Rolf slängde av något åt mig. |
| 4:23 | struken | du | Tornet är fullt. Skrivaren får jobba ikapp. |
| 4:23 | väntar | du | Rolf slängde av något åt mig. |
| 4:23 | klar | rolf | Hm. Ja kanske har nåt åt dej. Kolla postlådan vid grinden. |
| 4:23 | sak | du | Rolf slängde av något åt mig. |
| 4:23 | notis | tanke | 💭 Rolf slängde av något åt mig. |
| 4:23 | röst | du | Rolf slängde av något åt mig. · REAKTION |
| 4:25 | brott | DOLD SKYLT | ALIS MARKNAD från 7 m: skymd av PlaneGeometry 1.2 m bort (9.1, 1.8, 22.9) |
| 4:27 | klar | du | Rolf slängde av något åt mig. |
| 4:36 | sak | ali | Ali här. Skrivartrim. Jag skruvade på min egen skrivare i natt. Den går fortare nu. Nästan för fort. |
| 4:36 | sms | ali | Ali här. Skrivartrim. Jag skruvade på min egen skrivare i natt. Den går fortare nu. Nästan för fort. |
| 4:36 | sms-bubbla | ali | Ali här. Skrivartrim. Jag skruvade på min egen skrivare i natt. Den går fortare nu. Nästan för fort. |
| 4:36 | röst | ali | Ali här. Skrivartrim. Jag skruvade på min egen skrivare i natt. Den går fortare nu. Nästan för fort. · STORY |
| 4:39 | hjälp | kontroll | Klick: Klicka för att ta på dig den |
| 4:48 | klar | ali | Ali här. Skrivartrim. Jag skruvade på min egen skrivare i natt. Den går fortare nu. Nästan för fort. |
| 4:50 | tanke | du | Sopsäcken är över axeln! Nu bär jag 10 skräp. |
| 4:50 | väntar | du | Sopsäcken är över axeln! Nu bär jag 10 skräp. |
| 4:50 | tog på | du | byggsats:korg |
| 4:50 | händelse | monterat | sak=korg |
| 4:50 | sak | du | Sopsäcken är över axeln! Nu bär jag 10 skräp. |
| 4:50 | notis | tanke | 💭 Sopsäcken är över axeln! Nu bär jag 10 skräp. |
| 4:50 | röst | du | Sopsäcken är över axeln! Nu bär jag 10 skräp. · REAKTION |
| 4:50 | händelse | malKlart | id=kopSack del=Dag 2 – Tippen bredvid nasta=rolf0-brev |
| 4:50 | bekräftelse | du | plats |
| 4:50 | väntar | du | Det ligger ett brev i postlådan vid grinden. Det läser jag. |
| 4:50 | MÅL |  | Möt sopbilen vid grinden |
| 4:53 | målruta |  | Möt sopbilen vid grinden |
| 4:53 | brott | OKÄND SAK I BESTÄMD FORM | "Sopsäcken" innan saken presenterats: "Sopsäcken är över axeln! Nu bär jag 10 skräp." |
| 4:54 | klar | du | Sopsäcken är över axeln! Nu bär jag 10 skräp. |
| 4:54 | kvittens-bock |  | ✓ Ta sopsäckarna |
| 4:56 | sak | du | Det ligger ett brev i postlådan vid grinden. Det läser jag. |
| 4:56 | pil |  | Möt sopbilen vid grinden |
| 4:56 | notis | tanke | 💭 Det ligger ett brev i postlådan vid grinden. Det läser jag. |
| 4:56 | röst | du | Det ligger ett brev i postlådan vid grinden. Det läser jag. · MÅL |
| 4:59 | skratt | du | falsk tuta |
| 4:59 | paket |  | tanke → ge |
| 4:59 | tanke | du | Flaggan är uppe. Rolf har lämnat något. |
| 4:59 | väntar | du | Flaggan är uppe. Rolf har lämnat något. |
| 4:59 | väntar |  | (läget ändras) |
| 5:04 | klar | du | Det ligger ett brev i postlådan vid grinden. Det läser jag. |
| 5:12 | sak | du | Flaggan är uppe. Rolf har lämnat något. |
| 5:12 | notis | tanke | 💭 Flaggan är uppe. Rolf har lämnat något. |
| 5:12 | röst | du | Flaggan är uppe. Rolf har lämnat något. · STORY |
| 5:14 | klar | du | Flaggan är uppe. Rolf har lämnat något. |
| 5:24 | sak |  | (läget ändras) |
| 5:24 | brev | rolf | rolf:0 |
| 5:24 | klar |  | (läget ändras) |
| 5:24 | väntar | rolf | Såg att du printar grejer. Kan du göra en sån hä? Kall öl ä viktigt. Ja ha ritat själv. Ungefär så hä. Ja ä int dum. /Rolf​ |
| 5:24 | paket |  | ge |
| 5:24 | väntar |  | (läget ändras) |
| 5:24 | paket |  | tanke |
| 5:24 | tanke | du | Rolf har ritat själv. Den är… ungefär. Jag fattar vad han menar. |
| 5:24 | väntar | du | Rolf har ritat själv. Den är… ungefär. Jag fattar vad han menar. |
| 5:24 | händelse | malKlart | id=rolf0-brev del=Dag 2 – Tippen bredvid nasta=rolf0-printa |
| 5:24 | bekräftelse | du | plats |
| 5:24 | väntar | du | Rolf vill ha en ölhållare. Den printar jag. |
| 5:25 | MÅL |  | Printa ölhållare med kylklamp |
| 5:25 | sak | rolf | Såg att du printar grejer. Kan du göra en sån hä? Kall öl ä viktigt. Ja ha ritat själv. Ungefär så hä. Ja ä int dum. /Rolf​ |
| 5:25 | lapp | Brev från Rolf | Såg att du printar grejer. Kan du göra en sån hä? Kall öl ä viktigt. Ja ha ritat själv. Ungefär så hä. Ja ä int dum. /Rolf​ |
| 5:25 | röst | rolf | Såg att du printar grejer. Kan du göra en sån hä? Kall öl ä viktigt. Ja ha ritat själv. Ungefär så hä. Ja ä int dum. /Rolf​ · STORY |
| 5:25 | kvitto-visas |  | (läget ändras) |
| 5:25 | sak |  | (läget ändras) |
| 5:27 | målruta |  | Printa ölhållare med kylklamp |
| 5:29 | händelse | printStart | sak=olhallare |
| 5:29 | händelse | malKlart | id=rolf0-printa del=Dag 2 – Tippen bredvid nasta=rolf0-ge |
| 5:29 | bekräftelse | du | plats |
| 5:29 | struken | du | Rolf har ritat själv. Den är… ungefär. Jag fattar vad han menar. |
| 5:29 | väntar | du | Ölhållaren är klar. Den lägger jag i Rolfs postlåda. |
| 5:30 | MÅL |  | Ge Rolf ölhållare med kylklamp |
| 5:32 | målruta |  | Ge Rolf ölhållare med kylklamp |
| 5:32 | händelse | printKlar | sak=olhallare n=1 |
| 5:33 | händelse | tagitUrPrint | sak=olhallare n=1 |
| 5:33 | brott | DUBBEL | du upprepar rolf: "Rolf har ritat själv. Den är… ungefär. Jag fattar " |
| 5:33 | kvittens-bock |  | ✓ Printa ölhållare med kylklamp |
| 5:39 | klar | rolf | Såg att du printar grejer. Kan du göra en sån hä? Kall öl ä viktigt. Ja ha ritat själv. Ungefär så hä. Ja ä int dum. /Rolf​ |
| 5:39 | händelse | brevLast | id=rolf:0 |
| 5:39 | struken | du | Rolf vill ha en ölhållare. Den printar jag. |
| 5:39 | sak | du | Ölhållaren är klar. Den lägger jag i Rolfs postlåda. |
| 5:39 | pil |  | Ge Rolf ölhållare med kylklamp |
| 5:39 | notis | tanke | 💭 Ölhållaren är klar. Den lägger jag i Rolfs postlåda. |
| 5:39 | röst | du | Ölhållaren är klar. Den lägger jag i Rolfs postlåda. · MÅL |
| 5:45 | klar | du | Ölhållaren är klar. Den lägger jag i Rolfs postlåda. |
| 5:59 | struken | ali | Ali här. Såg skylten. Stavningen är rätt. Det är mer än många. |
| 6:00 | händelse | lagtIPostlada | sak=olhallare rolf=0 jobb=false |
| 6:00 | paket |  | tanke |
| 6:00 | tanke | du | Flaggan uppe. Nu får Rolf hämta den. |
| 6:00 | väntar | du | Flaggan uppe. Nu får Rolf hämta den. |
| 6:00 | sak | du | Flaggan uppe. Nu får Rolf hämta den. |
| 6:00 | notis | tanke | 💭 Flaggan uppe. Nu får Rolf hämta den. |
| 6:00 | röst | du | Flaggan uppe. Nu får Rolf hämta den. · REAKTION |
| 6:00 | händelse | malKlart | id=rolf0-ge del=Dag 2 – Tippen bredvid nasta=vindsnurra |
| 6:00 | bekräftelse | du | plats |
| 6:00 | väntar | du | En vindsnurra på skjulets tak. Då blir det ström när det blåser. |
| 6:01 | MÅL |  | Spara till vindsnurran · 90 / 133 kr |
| 6:03 | målruta |  | Spara till vindsnurran · 90 / 133 kr |
| 6:04 | kvittens-bock |  | ✓ Ge Rolf ölhållare med kylklamp |
| 6:05 | klar | du | Flaggan uppe. Nu får Rolf hämta den. |
| 6:06 | sak | du | En vindsnurra på skjulets tak. Då blir det ström när det blåser. |
| 6:06 | pil |  | Spara till vindsnurran · 90 / 133 kr |
| 6:06 | notis | tanke | 💭 En vindsnurra på skjulets tak. Då blir det ström när det blåser. |
| 6:06 | röst | du | En vindsnurra på skjulets tak. Då blir det ström när det blåser. · MÅL |
| 6:14 | klar | du | En vindsnurra på skjulets tak. Då blir det ström när det blåser. |
| 6:26 | struken | mamma | Har du frusit än? |
| 6:27 | händelse | printStart | sak=kruka |
| 6:28 | toast | fel | Ingen ström – trampa cykeln |
| 6:31 | händelse | printKlar | sak=kruka n=3 |
| 6:32 | händelse | tagitUrPrint | sak=kruka n=1 |
| 6:37 | hjälp | kontroll | R: Vrid innan du ställer ner |
| 6:43 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 6:43 | röst | ali | Rolf gav mig en kanna. Som min farmors. Jag ritade en sak åt honom. Säg inget, han gråter lätt. · STORY |
| 6:43 | butiksbubbla | ali | Rolf gav mig en kanna. Som min farmors. Jag ritade en sak åt honom. Säg inget, han gråter lätt. |
| 6:44 | händelse | salt | sak=kruka n=1 |
| 6:44 | aliSalt | ali | 105 |
| 6:44 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 6:45 | skratt | du | falsk tuta |
| 6:45 | upplåst | trampa | vindsnurra |
| 6:45 | brott | UPPLÅST | vindsnurra (trampa 22 av 6, sparat ihop) |
| 6:45 | händelse | upplast | id=vindsnurra flask=trampa |
| 6:45 | paket |  | tanke → sms |
| 6:45 | tanke | du | Mina ben är slut. Det blåser hela tiden här ute. Tänk om vinden kunde trampa åt mig. |
| 6:45 | väntar | du | Mina ben är slut. Det blåser hela tiden här ute. Tänk om vinden kunde trampa åt mig. |
| 6:45 | väntar | ali | Ali här. Vindsnurra till cykeln. Vinden trampar åt dig. Den är lat, men den jobbar gratis. |
| 6:53 | sak | du | Mina ben är slut. Det blåser hela tiden här ute. Tänk om vinden kunde trampa åt mig. |
| 6:53 | notis | tanke | 💭 Mina ben är slut. Det blåser hela tiden här ute. Tänk om vinden kunde trampa åt mig. |
| 6:53 | röst | du | Mina ben är slut. Det blåser hela tiden här ute. Tänk om vinden kunde trampa åt mig. · STORY |
| 6:58 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 6:59 | struken | info:guld | 3D-modell köpt – printa vindsnurra till skjultaket |
| 6:59 | händelse | kopt | sak=vindsnurra |
| 6:59 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 7:00 | klar | du | Mina ben är slut. Det blåser hela tiden här ute. Tänk om vinden kunde trampa åt mig. |
| 7:02 | struken | ali | Ali här. Vindsnurra till cykeln. Vinden trampar åt dig. Den är lat, men den jobbar gratis. |
| 7:02 | paket |  | tanke |
| 7:02 | tanke | du | Jaha, Rolf har hämtat en ölhållare med kylklamp. |
| 7:02 | väntar | du | Jaha, Rolf har hämtat en ölhållare med kylklamp. |
| 7:08 | sak | du | Jaha, Rolf har hämtat en ölhållare med kylklamp. |
| 7:08 | notis | tanke | 💭 Jaha, Rolf har hämtat en ölhållare med kylklamp. |
| 7:08 | röst | du | Jaha, Rolf har hämtat en ölhållare med kylklamp. · REAKTION |
| 7:12 | händelse | printStart | sak=byggsats:vindsnurra |
| 7:16 | klar | du | Jaha, Rolf har hämtat en ölhållare med kylklamp. |
| 7:17 | händelse | printKlar | sak=byggsats:vindsnurra n=1 |
| 7:17 | tanke | du | Vindsnurran ska upp på skjulets tak. |
| 7:17 | väntar | du | Vindsnurran ska upp på skjulets tak. |
| 7:17 | händelse | tagitUrPrint | sak=byggsats:vindsnurra n=1 |
| 7:17 | sak | du | Vindsnurran ska upp på skjulets tak. |
| 7:17 | notis | tanke | 💭 Vindsnurran ska upp på skjulets tak. |
| 7:17 | röst | du | Vindsnurran ska upp på skjulets tak. · REAKTION |
| 7:22 | klar | du | Vindsnurran ska upp på skjulets tak. |
| 7:24 | väntar | värld:TUUT! Hej grannen! | TUUT! Hej grannen! |
| 7:30 | sak | värld:TUUT! Hej grannen! | TUUT! Hej grannen! |
| 7:30 | bubbla |  | TUUT! Hej grannen! |
| 7:32 | händelse | placerat | sak=vindsnurra |
| 7:32 | tanke | du | Vindsnurran sitter på taket – den trampar cykeln åt mig när det blåser |
| 7:32 | väntar | du | Vindsnurran sitter på taket – den trampar cykeln åt mig när det blåser |
| 7:32 | monterat | du | byggsats:vindsnurra |
| 7:32 | händelse | monterat | sak=vindsnurra |
| 7:32 | klipps | värld:TUUT! Hej grannen! | TUUT! Hej grannen! |
| 7:32 | händelse | malKlart | id=vindsnurra del=Dag 2 – Tippen bredvid nasta=n1-bygg-dorr-skjulet |
| 7:32 | bekräftelse | du | plats |
| 7:32 | kvittens | du | Den snurrar! Långsamt. Men den snurrar. |
| 7:32 | väntar | du | Den snurrar! Långsamt. Men den snurrar. |
| 7:32 | struken | du | Vindsnurran sitter på taket – den trampar cykeln åt mig när det blåser |
| 7:32 | väntar | du | Det drar från dörrhålet. En dörr kan jag printa. |
| 7:32 | MÅL |  | Bygg en dörr till skjulet |
| 7:32 | klar | värld:TUUT! Hej grannen! | TUUT! Hej grannen! |
| 7:32 | sak | du | Den snurrar! Långsamt. Men den snurrar. |
| 7:32 | röst | du | Den snurrar! Långsamt. Men den snurrar. · STORY |
| 7:32 | målruta |  | Bygg en dörr till skjulet |
| 7:36 | klar | du | Den snurrar! Långsamt. Men den snurrar. |
| 7:36 | sak | du | Det drar från dörrhålet. En dörr kan jag printa. |
| 7:36 | pil |  | Bygg en dörr till skjulet |
| 7:36 | notis | tanke | 💭 Det drar från dörrhålet. En dörr kan jag printa. |
| 7:36 | röst | du | Det drar från dörrhålet. En dörr kan jag printa. · MÅL |
| 7:36 | nick |  | nick:29 |
| 7:40 | klar | du | Det drar från dörrhålet. En dörr kan jag printa. |
| 7:59 | händelse | printStart | sak=kruka |
| 8:02 | händelse | printKlar | sak=kruka n=4 |
| 8:02 | händelse | tagitUrPrint | sak=kruka n=1 |
| 8:05 | hjälp | kontroll | R: Vrid innan du ställer ner |
| 8:12 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 8:14 | händelse | salt | sak=kruka n=1 |
| 8:14 | aliSalt | ali | 105 |
| 8:14 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 8:15 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 8:17 | struken | info:guld | 3D-modell köpt – printa dörr |
| 8:17 | händelse | kopt | sak=dorr |
| 8:17 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 8:29 | händelse | printStart | sak=byggsats:dorr |
| 8:33 | toast | bra | Del 1 av 2 klar |
| 8:33 | väntar | notis:Storebrors skrivare: Del 1 av 2 klar | Storebrors skrivare: Del 1 av 2 klar |
| 8:33 | sak | notis:Storebrors skrivare: Del 1 av 2 klar | Storebrors skrivare: Del 1 av 2 klar |
| 8:33 | notis | bra | Storebrors skrivare: Del 1 av 2 klar |
| 8:35 | klar | notis:Storebrors skrivare: Del 1 av 2 klar | Storebrors skrivare: Del 1 av 2 klar |
| 8:36 | händelse | printKlar | sak=byggsats:dorr n=1 |
| 9:12 | skratt | du | däcket rullar iväg |
| 9:12 | paket |  | tanke |
| 9:12 | tanke | du | Däcket ville inte stanna. Jag förstår det. |
| 9:12 | väntar | du | Däcket ville inte stanna. Jag förstår det. |
| 9:13 | sak | du | Däcket ville inte stanna. Jag förstår det. |
| 9:13 | notis | tanke | 💭 Däcket ville inte stanna. Jag förstår det. |
| 9:13 | röst | du | Däcket ville inte stanna. Jag förstår det. · REAKTION |
| 9:14 | händelse | tagitUrPrint | sak=byggsats:dorr n=1 |
| 9:14 | paket |  | sms |
| 9:14 | väntar | ali | Ali här. Jag har inte sovit. Inte på grund av AI:n. På grund av dig. Du bygger saker av sopor. Jag har en hel butik och bygger ingenting. Det ska ändras. Kanske. Troligen. |
| 9:17 | klar | du | Däcket ville inte stanna. Jag förstår det. |
| 9:19 | skratt | du | falsk tuta |
| 9:22 | tanke | du | Dörr på plats! Trivsel +8 |
| 9:22 | väntar | du | Dörr på plats! Trivsel +8 |
| 9:22 | sak | du | Dörr på plats! Trivsel +8 |
| 9:22 | notis | tanke | 💭 Dörr på plats! Trivsel +8 |
| 9:22 | röst | du | Dörr på plats! Trivsel +8 · REAKTION |
| 9:22 | händelse | malKlart | id=n1-bygg-dorr-skjulet del=Dag 2 – Tippen bredvid nasta=sov2 |
| 9:22 | paket |  | lapp |
| 9:22 | väntar | du | Nu vet Ali att jag bor HÄR. Taket läcker. I morgon. |
| 9:22 | paket |  | sms |
| 9:22 | väntar | bror | Mamma ringde mig fyra gånger förresten. Snyggt jobbat 😂 |
| 9:22 | skratt | bror | Mamma ringde mig fyra gånger förresten. |
| 9:22 | bekräftelse | du | plats |
| 9:22 | väntar | du | Sov när du vill. |
| 9:22 | MÅL |  | Sov när du vill |
| 9:25 | klar | du | Dörr på plats! Trivsel +8 |
| 9:25 | sak | du | Nu vet Ali att jag bor HÄR. Taket läcker. I morgon. |
| 9:25 | kvallsrad | du | Nu vet Ali att jag bor HÄR. Taket läcker. I morgon. |
| 9:25 | målruta |  | Sov när du vill |
| 9:25 | klar | du | Nu vet Ali att jag bor HÄR. Taket läcker. I morgon. |
| 9:25 | sak | du | Sov när du vill. |
| 9:25 | pil |  | Sov när du vill |
| 9:25 | röst | du | Sov när du vill. · MÅL |
| 9:26 | kvittens-bock |  | ✓ Bygg en dörr till skjulet |
| 9:27 | klar | du | Sov när du vill. |
| 9:29 | väntar | notis:🌇 Klockan är 21. Ali slår igen luckan.  | 🌇 Klockan är 21. Ali slår igen luckan. Dagens jobb är klart – gå in i skjulet och sov i sängen. |
| 9:37 | nattkort | du | 🌙 20 dagar kvar. God natt. zzz… Nu vet Ali att jag bor HÄR. Taket läcker. I morgon. DAGENS PRINTAR Blomkruka × 3 Ölhållare med kylklamp × 1 Totalt 4 printar 💰 |

<details><summary>Botens handlingar dag 2</summary>

- 0:00 — dag 2 börjar — (35 kr)
- 0:11 popup: "FORTSÄTT" (35 kr)
- 0:26 nybörjaren ser ingen pil – tittar runt (35 kr)
- 0:30 tjänar pengar till väntar på flaskhalsen för kvarnmotor: 35/75 kr → printar blomkruka (105 kr) (35 kr)
- 0:37 gå till skrivaren (19 m) (35 kr)
- 0:39 printar Blomkruka (35 kr)
- 0:42 tar ut 1 st ur skrivaren (35 kr)
- 0:51 gå till Ali (26 m) (35 kr)
- 0:51 öppnar Alis butik – sälja (35 kr)
- 0:53 säljer hos Ali: +105 kr (140 kr)
- 1:06 öppnar Alis butik – köpa kvarnmotor (140 kr)
- 1:08 köper kvarnmotor för 50 kr (90 kr)
- 1:26 gå till fel håll en bit (4 m) (90 kr)
- 1:36 gå till skrivaren (25 m) (90 kr)
- 1:38 printar Kvarnmotor (90 kr)
- 1:39 gå till cykeln (1 m) (90 kr)
- 1:42 tar ut 1 st ur skrivaren (90 kr)
- 1:55 gå till skruva fast kvarnmotorn (3 m) (90 kr)
- 2:27 plockar 3 skräp på gården (bär max 6) (90 kr)
- 2:37 gå till kvarnen (29 m) (90 kr)
- 2:56 plockar 6 skräp på gården (bär max 6) (90 kr)
- 3:09 gå till kvarnen (34 m) (90 kr)
- 3:15 nybörjaren ser ingen pil – tittar runt (90 kr)
- 3:35 plockar 4 skräp på gården (bär max 6) (90 kr)
- 3:48 gå till kvarnen (36 m) (90 kr)
- 4:05 plockar 6 skräp på gården (bär max 6) (90 kr)
- 4:22 plockar 6 skräp på gården (bär max 6) (90 kr)
- 4:39 gå till Rolfs sopsäck (25 m) (90 kr)
- 4:50 tar på korg (90 kr)
- 4:51 vet inte vad jag ska göra: "Möt sopbilen vid grinden" (90 kr)
- 5:24 gå till Rolfs postlåda (28 m) (90 kr)
- 5:28 gå till skrivaren (7 m) (90 kr)
- 5:29 printar Ölhållare med kylklamp (90 kr)
- 5:33 tar ut 1 st ur skrivaren (90 kr)
- 5:53 nybörjaren ser ingen pil – tittar runt (90 kr)
- 5:58 valj olhallare: true, vald olhallare, post {"l":null,"tr":null,"tm":[]}, nummer false (90 kr)
- 6:00 gå till Rolfs postlåda (6 m) (90 kr)
- 6:18 nybörjaren ser ingen pil – tittar runt (90 kr)
- 6:23 tjänar pengar till väntar på flaskhalsen för vindsnurra: 90/130 kr → printar blomkruka (105 kr) (90 kr)
- 6:26 gå till skrivaren (6 m) (90 kr)
- 6:27 printar Blomkruka (90 kr)
- 6:29 gå till cykeln (1 m) (90 kr)
- 6:33 tar ut 1 st ur skrivaren (90 kr)
- 6:43 gå till Ali (27 m) (90 kr)
- 6:43 öppnar Alis butik – sälja (90 kr)
- 6:45 säljer hos Ali: +105 kr (195 kr)
- 6:58 öppnar Alis butik – köpa vindsnurra till skjultaket (195 kr)
- 7:00 köper vindsnurra för 133 kr (62 kr)
- 7:10 gå till skrivaren (25 m) (62 kr)
- 7:12 printar Vindsnurra till skjultaket (62 kr)
- 7:15 gå till cykeln (1 m) (62 kr)
- 7:18 tar ut 1 st ur skrivaren (62 kr)
- 7:32 gå till sätt vindsnurran på taket (20 m) (62 kr)
- 7:51 tjänar pengar till dörr: 62/120 kr → printar blomkruka (105 kr) (62 kr)
- 7:58 gå till skrivaren (19 m) (62 kr)
- 7:59 printar Blomkruka (62 kr)
- 8:03 tar ut 1 st ur skrivaren (62 kr)
- 8:12 gå till Ali (26 m) (62 kr)
- 8:12 öppnar Alis butik – sälja (62 kr)
- 8:14 säljer hos Ali: +105 kr (167 kr)
- 8:15 öppnar Alis butik – köpa dörr (167 kr)
- 8:18 köper dorr för 120 kr (47 kr)
- 8:28 gå till skrivaren (25 m) (47 kr)
- 8:29 printar Dörr (2 delar) (47 kr)
- 9:00 plockar 10 skräp på gården (bär max 10) (47 kr)
- 9:13 gå till kvarnen (35 m) (47 kr)
- 9:14 gå till skrivaren (1 m) (47 kr)
- 9:14 tar ut 1 st ur skrivaren (47 kr)
- 9:22 gå till skjulet (21 m) (47 kr)
- 9:34 gå till sängen (1 m) (47 kr)

</details>

## Dag 3

| Tid | Källa | Vem | Text |
|---|---|---|---|
| 9:37 | vara | ali | ingen |
| 9:37 | händelse | malKlart | id=sov2 del=Dag 2 – Tippen bredvid nasta=rolf1-brev |
| 9:37 | bekräftelse | du | plats |
| 9:37 | vara | ali | kruka |
| 9:37 | MÅL |  | Möt sopbilen vid grinden |

<details><summary>Botens handlingar dag 3</summary>

- 0:00 — dag 3 börjar — (47 kr)

</details>
