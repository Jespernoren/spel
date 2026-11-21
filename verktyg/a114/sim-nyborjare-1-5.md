# Nybörjarboten – körning 1

*A-081: samma händer som AX, men boten vet bara det som syns (målrutan, pilen, det som sägs). Går 3 m/s, läser 60 ms per tecken, följer pilen, tittar runt när målet är otydligt och går fel ibland.*

| Dag | Minuter | FÖRVIRRAD | FAST | TRÄNGSEL | HANN INTE LÄSA | DOLT | NY SAK UTAN FÖRKLARING | OKÄNT ORD |
|---|---|---|---|---|---|---|---|---|
| 1 | 14.7 | 1 | 0 | 1 | 0 | 0 | 1 | 0 |
| 2 | 10.9 | 0 | 0 | 0 | 2 | 0 | 0 | 0 |
| 3 | 12.7 | 1 | 0 | 0 | 1 | 0 | 0 | 0 |
| 4 | 16.3 | 0 | 0 | 0 | 1 | 0 | 0 | 0 |
| 5 | 0.0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |

## Flaggor (8)

- **NY SAK UTAN FÖRKLARING** dag 1 0:16: byta: ingen text eller bild har förklarat det innan första gången
- **TRÄNGSEL** dag 1 4:51: notis ”Kvarnen funkar. Soptippen är en gruva.” och tanke-text ”💭 Min egen tråd. Nu printar jag en nyck” inom 0.7 s
- **FÖRVIRRAD** dag 1 12:50: pilen pekar 34 m från där målet görs (okänt)
- **HANN INTE LÄSA** dag 2 0:02: dagbok ”Dag 2. 20 dagar till jul.
Utan dörr blåser natten ” stod 0.0 s, behöver 4.7 s
- **HANN INTE LÄSA** dag 2 1:06: info ”🚛 En stor bil tippade en ny last på soptippen!” stod 3.8 s, behöver 4.0 s
- **HANN INTE LÄSA** dag 3 0:02: dagbok ”Dag 3. 19 dagar till jul.
Utan tak regnar det in i” stod 0.0 s, behöver 4.6 s
- **FÖRVIRRAD** dag 3 12:24: 82 s utan framsteg på "Klart för idag – sov när du vill"
- **HANN INTE LÄSA** dag 4 0:02: dagbok ”Dag 4. 18 dagar till jul.
Drar det i skjulet blir ” stod 0.0 s, behöver 4.8 s

## Friktionskurvan (sekunder per mål: nybörjaren mot AX)

| Dag | Mål | Nybörjaren | AX | × |
|---|---|---|---|---|
| 1 | Lasta av skrivaren | 0 | – | – |
| 1 | Lasta av skrivaren | 35 | – | – |
| 1 | Ställ upp skrivaren | 20 | – | – |
| 1 | Skrivaren behöver ström | 29 | – | – |
| 1 | Ställ cykel och generator | 31 | – | – |
| 1 | Välj vad skrivaren ska printa | 13 | – | – |
| 1 | Trampa cykeln | 5 | – | – |
| 1 | En nyckelring till | 28 | – | – |
| 1 | Sälj nyckelringarna | 39 | – | – |
| 1 | Köp kvarnen | 21 | – | – |
| 1 | Ställ kvarnen | 28 | – | – |
| 1 | Gör egen tråd | 27 | – | – |
| 1 | Printa med egen tråd | 25 | – | – |
| 1 | Sälj hos Ali | 39 | – | – |
| 1 | Gå till Ali | 33 | – | – |
| 1 | Plocka skräp och mal det | 270 | – | – |
| 1 | Printa skräpgripen | 28 | – | – |
| 1 | Printa och sälj nyckelringar | 41 | – | – |
| 1 | Sälj blomkrukan | 31 | – | – |
| 1 | Köp sängen | 15 | – | – |
| 1 | Printa sängen | 103 | – | – |
| 2 | Mal skräp, printa och sälj | -632 | – | – |
| 2 | Printa kvarnmotorn till kvarnen | 34 | – | – |
| 2 | Kolla vad som flög ut från sopbilen | 37 | – | – |
| 2 | Vänta på sopbilen. Den lämnar något. | 173 | – | – |
| 2 | Printa ölhållare med kylklamp | 5 | – | – |
| 2 | Ge Rolf ölhållare med kylklamp | 22 | – | – |
| 2 | Trampa, printa och sälj | 62 | – | – |
| 2 | Bygg en dörr till skjulet | 46 | – | – |
| 3 | Vänta på sopbilen. Den lämnar något. | -429 | – | – |
| 3 | Hämta 5 skräp på soptippen | 5 | – | – |
| 3 | Printa flasköppnare med magnet | 19 | – | – |
| 3 | Ge Rolf flasköppnare med magnet | 19 | – | – |
| 3 | Printa och sälj | 89 | – | – |
| 3 | Plocka skräp och mal det | 59 | – | – |
| 3 | Bygg ett arbetsbord | 48 | – | – |
| 3 | Printa och sälj | 115 | – | – |
| 3 | Lägg plåttak på skjulet | 63 | – | – |
| 4 | Vänta på sopbilen. Den lämnar något. | -425 | – | – |
| 4 | Printa grillspade | 41 | – | – |
| 4 | Ge Rolf grillspade | 22 | – | – |
| 4 | Töm en full kärra i kvarnen | 29 | – | – |
| 4 | Plocka skräp och mal det | 262 | – | – |
| 4 | Printa en pall | 39 | – | – |
| 4 | Printa och sälj | 113 | – | – |
| 4 | Isolera två väggar · 0/2 | 109 | – | – |

---

# Simulering kapitel 1 – körning 1

*Gjord 2026-11-21 19:42 med `verktyg/sim-kapitel1.mjs` + `verktyg/sim-bot.js` (punkt AX). Boten går 4,5 m/s, läser 15 tecken/s, trampar, vevar, plockar, printar, köper och säljer via spelets egna funktioner. Tiderna är speltid.*

## Sammanfattning

| Dag | Minuter | Väntan | Prints (totalt) | Kr vid sömn | Bär | Trivsel |
|---|---|---|---|---|---|---|
| 1 | 14.7 | 1 % | 22 | 205 | 6 | 19 |
| 2 | 10.9 | 1 % | 33 | 850 | 10 | 38 |
| 3 | 12.7 | 2 % | 39 | 415 | 16 | 78 |
| 4 | 16.3 | 1 % | 49 | 987 | 16 | 96 |
| 5 | 0.0 | 0 % | 49 | 987 | 16 | 96 |

## Flaskhalskartan (EE)

| Dag | bara | mala | trampa | strom | skrivare | inkomst | Upplåst |
|---|---|---|---|---|---|---|---|
| 1 | 5 | 10 | 22 | 12 | 120 | 20 | grip (bara, 9:22, reserv), kruka (inkomst, 11:10) |
| 2 | 1 | 7 | 8 | 10 | 369 | 0 | kvarnmotor (mala, 3:16, reserv), rullstall (skrivare, 5:09), trim_skrivare (skrivare, 6:16), vindsnurra (trampa, 8:43) |
| 3 | 0 | 17 | 26 | 44 | 374 | 0 | cykelbatteri (strom, 5:05), ryggkorg (bara, 5:59), skrivare2 (skrivare, 7:46) |
| 4 | 0 | 33 | 18 | 64 | 457 | 0 | trim_skrivare2 (skrivare, 7:20), matarband (bara, 10:27, reserv), vindsnurra2 (strom, 12:35) |
| 5 | 0 | 0 | 0 | 0 | 0 | 0 |  |

TIDIG: 0 · FAST: 0 · upplåst av reserven (målet väntade 3 min): 3

**SKRATT:** 47 roliga ögonblick på 55 min (8.6 per 10 min, mål minst 5)

**Köp:**

- dag 1 3:39 – gammalkvarn (30 kr)
- dag 1 10:41 – grip (50 kr)
- dag 1 11:22 – kruka (40 kr)
- dag 1 12:37 – sang (60 kr)
- dag 2 4:11 – kvarnmotor (50 kr)
- dag 2 9:16 – vindsnurra (133 kr)
- dag 2 10:04 – dorr (120 kr)
- dag 3 5:48 – cykelbatteri (30 kr)
- dag 3 6:30 – ryggkorg (120 kr)
- dag 3 7:10 – bord (120 kr)
- dag 3 8:10 – skrivare2 (500 kr)
- dag 3 10:05 – tak (250 kr)
- dag 4 11:01 – matarband (120 kr)
- dag 4 11:57 – pall (80 kr)
- dag 4 13:43 – vindsnurra (133 kr)
- dag 4 15:10 – vaggar (130 kr)

## Storykedjan (kvittens → varför → nytt mål)

| Dag | Tid | Id | Kvittens | Varför | Nytt mål | Tid till målet |
|---|---|---|---|---|---|---|
| 1 | 0:35 | lasta | Tung. Den har storebror aldrig burit så långt. |  | Skrivaren ställer jag mot skräpberget. Min första verkstad. | 0.7 s |
| 1 | 2:07 | valjModell | Den piper. Den GÖR något. |  | Nu behöver den ström. Trampa. | 0.3 s |
| 1 | 2:12 | trampa | Klar! Ta ut den innan den ändrar sig. |  | En nyckelring till, så länge storebrors rulle räcker. | 0.5 s |
| 1 | 4:35 | flaska | Det blir tråd! Riktig plasttråd. |  | Min egen tråd. Nu printar jag en nyckelring av den. | 0.8 s |
| 1 | 11:51 | krukaD1 | En kruka. Mamma skulle bli så stolt. Hon får inte veta. |  | Ali gillar krukor. Han sa det själv. | 0.9 s |
| 1 | 14:20 | printSang | En säng. Jag printade en SÄNG. |  | Sängen ska in i skjulet. Sen sover jag. | 0.3 s |
| 2 | 9:45 | vindsnurra | Den snurrar! Långsamt. Men den snurrar. |  | Det drar från dörrhålet. En dörr kan jag printa. | 3.0 s |
| 4 | 11:35 | sophallare | Nu kan jag tömma hela kärran på en gång. |  | Jag behöver något att sitta på. En pall. Lagom ambitiöst. | 2.9 s |

## Hur länge nya mål väntade (från att förra målet blev klart till att det nya syntes i målrutan)

Snitt 2.2 s · max 12.7 s · över 4 s: 3 · över 8 s: 3 av 49

## Flaggor (26)

- **UPPREPNING** dag 4 11:57: Bra val. Folk köper sånt. Jag vet inte varför. (CT)
- **LUGN** dag 2 0:08: 0.0 s efter BÖRJA DAGEN: [lapp] "Första natten i en riktig säng. Jag printade den själv."
- **KROCK** dag 1 4:39: 0.7 s mellan [notis] "Kvarnen funkar. Soptippen är en gruva." och [notis] "💭 Min egen tråd. Nu printar jag en nyckelring av den."
- **KROCK** dag 3 11:27: 2.4 s mellan [morgonkort] "⏸️ Pausad · Klicka för att fortsätta." och [bubbla] "Kall öl ä viktigt."
- **KROCK** dag 3 12:25: 1.4 s mellan [notis] "Rolf: ”Hoppa in. Ja ska visa dej en grej.”" och [lapp] "Tre dagar. Tänk om tre veckor."
- **KROCK** dag 4 14:08: 0.2 s mellan [lapp] "Slut på trampandet. Nästan." och [notis] "💭 Det drar genom väggarna. Isolering, och sen blir det varm"
- **SEN** dag 1 0:32: 11.4 s efter händelsen: notis:Spikade ihop en skylt av bräder från skr: "Spikade ihop en skylt av bräder från skräpberget: Soptippsvägen 1. Int"
- **SEN** dag 1 2:28: 14.8 s efter händelsen: bror: "VA FAN?! Fick du igång den?? Jag försökte i typ ett år. Den bara pep. "
- **SEN** dag 1 2:59: 19.4 s efter händelsen: notis:Storebrors skrivare: Nyckelring är klar : "Storebrors skrivare: Nyckelring är klar – ta ut den"
- **SEN** dag 1 4:52: 57.3 s efter händelsen: kjelle: "God morgon, det är Kjelle på Radio Tippen! Det har flyttat in någon i "
- **SEN** dag 1 7:31: 11.2 s efter händelsen: du: "Gripen hos Ali. Femtio kronor."
- **SEN** dag 1 12:08: 57.9 s efter händelsen: ali: "Ali här. Jag såg Skräpgrip på avstånd. Ett streck blev lite snett. Mit"
- **SEN** dag 2 0:25: 17.4 s efter händelsen: notis:Första natten i en riktig säng. Jag prin: "Första natten i en riktig säng. Jag printade den själv."
- **SEN** dag 3 2:07: 12.1 s efter händelsen: kjelle: "Radio Tippen, Kjelle här. Skjulet vid tippen har fått en DÖRR. Och vin"
- **SEN** dag 4 12:34: 55.9 s efter händelsen: ali: "Ali här. Jag såg Sophållare på avstånd. Ett streck blev lite snett. Mi"
- **PAUS** dag 1 0:35: 0.4 s paus före "Tung. Den har storebror aldrig burit så långt."
- **PAUS** dag 1 2:12: 0.2 s paus före "Klar! Ta ut den innan den ändrar sig."
- **PAUS** dag 1 4:36: 0.0 s paus före "Det blir tråd! Riktig plasttråd."
- **PAUS** dag 1 4:38: 0.0 s paus före "Kvarnen funkar. Soptippen är en gruva."
- **PAUS** dag 2 5:24: 0.0 s paus före "Gården är STÄDAD, av mig, frivilligt. Mamma skulle"
- **PAUS** dag 3 10:47: 0.0 s paus före "(nytt mål i rutan)"
- **PAUS** dag 3 10:47: 0.0 s paus före "Plåttak på plats! Trivsel +12"
- **TORRT** dag 1 6:12: 298 s utan roligt ögonblick
- **TEMPO** dag 1 14:42: dag 1 tog 14.7 min (mål 10–12)
- **TEMPO** dag 4 16:16: dag 4 tog 16.3 min (mål 10–15)
- **TEMPO** dag 5 0:00: dag 5 tog 0.0 min (mål 10–15)

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
| 0:05 | sak | du | Se så mycket skräp här är. Det är ju en guldgruva! |
| 0:05 | röst | du | Se så mycket skräp här är. Det är ju en guldgruva! · STORY |
| 0:06 | väntar | info:info | ⏎ Enter – hoppa över |
| 0:10 | sak-del | du | Först borde jag spika upp en skylt, så att alla ser att jag bor HÄR. |
| 0:10 | röst | du | Först borde jag spika upp en skylt, så att alla ser att jag bor HÄR. · STORY |
| 0:16 | klar | du | Se så mycket skräp här är. Det är ju en guldgruva! |
| 0:20 | lapp | 📔 Dagbok | Spikade ihop en skylt av bräder från skräpberget: Soptippsvägen 1. Inte mycket för världen, men det är MITT. |
| 0:20 | dagbokrad | du | Spikade ihop en skylt av bräder från skräpberget: Soptippsvägen 1. Inte mycket för världen, men det är MITT. |
| 0:20 | väntar | notis:Spikade ihop en skylt av bräder från skr | Spikade ihop en skylt av bräder från skräpberget: Soptippsvägen 1. Inte mycket för världen, men det är MITT. |
| 0:20 | väntar | du | Storebrors skrivare står kvar på cykeln vid vägen. Den ska av. |
| 0:25 | sak | du | Storebrors skrivare står kvar på cykeln vid vägen. Den ska av. |
| 0:25 | målruta |  | Lasta av skrivaren |
| 0:25 | pil |  | Lasta av skrivaren |
| 0:25 | notis | tanke | 💭 Storebrors skrivare står kvar på cykeln vid vägen. Den ska av. |
| 0:25 | röst | du | Storebrors skrivare står kvar på cykeln vid vägen. Den ska av. · MÅL |
| 0:30 | klar | du | Storebrors skrivare står kvar på cykeln vid vägen. Den ska av. |
| 0:32 | sak | notis:Spikade ihop en skylt av bräder från skr | Spikade ihop en skylt av bräder från skräpberget: Soptippsvägen 1. Inte mycket för världen, men det är MITT. |
| 0:32 | notis | dagbok | Spikade ihop en skylt av bräder från skräpberget: Soptippsvägen 1. Inte mycket för världen, men det är MITT. |
| 0:34 | klar | notis:Spikade ihop en skylt av bräder från skr | Spikade ihop en skylt av bräder från skräpberget: Soptippsvägen 1. Inte mycket för världen, men det är MITT. |
| 0:35 | händelse | lastatAv | sak=skrivare |
| 0:35 | paket |  | sms |
| 0:35 | väntar | mamma | Hur kunde du bara gå? Är du ok? Svara när jag ringer! |
| 0:35 | händelse | malKlart | id=lasta del=Dag 1 – Kom igång nasta=stall |
| 0:35 | kvittens | du | Tung. Den har storebror aldrig burit så långt. |
| 0:35 | väntar | du | Tung. Den har storebror aldrig burit så långt. |
| 0:35 | väntar | du | Skrivaren ställer jag mot skräpberget. Min första verkstad. |
| 0:35 | MÅL |  | Ställ upp skrivaren |
| 0:35 | sak | du | Tung. Den har storebror aldrig burit så långt. |
| 0:35 | röst | du | Tung. Den har storebror aldrig burit så långt. · STORY |
| 0:35 | målruta |  | Ställ upp skrivaren |
| 0:39 | klar | du | Tung. Den har storebror aldrig burit så långt. |
| 0:39 | sak | du | Skrivaren ställer jag mot skräpberget. Min första verkstad. |
| 0:39 | pil |  | Ställ upp skrivaren |
| 0:39 | notis | tanke | 💭 Skrivaren ställer jag mot skräpberget. Min första verkstad. |
| 0:39 | röst | du | Skrivaren ställer jag mot skräpberget. Min första verkstad. · MÅL |
| 0:39 | nick |  | nick:1 |
| 0:42 | hjälp | kontroll | E: Ryggsäcken och kistan |
| 0:44 | klar | du | Skrivaren ställer jag mot skräpberget. Min första verkstad. |
| 0:46 | struken | info:info | ⏎ Enter – hoppa över |
| 0:54 | väntar | info:bra | 🖨️ Storebrors skrivare står på sin plats |
| 0:54 | händelse | placerat | sak=skrivareS |
| 0:54 | paket |  | tanke |
| 0:54 | tanke | du | Storebrors rulle. Den räcker inte länge. |
| 0:54 | väntar | du | Storebrors rulle. Den räcker inte länge. |
| 0:54 | duns | du | ställs ner |
| 0:54 | sak | info:bra | 🖨️ Storebrors skrivare står på sin plats |
| 0:54 | kvitto-visas | info:bra | 🖨️ Storebrors skrivare står på sin plats |
| 0:54 | toast | bra | 🖨️ Storebrors skrivare står på sin plats |
| 0:54 | händelse | malKlart | id=stall del=Dag 1 – Kom igång nasta=strom |
| 0:54 | struken | du | Storebrors rulle. Den räcker inte länge. |
| 0:54 | väntar | du | Skrivaren behöver ström. Hur fixar jag det här ute? |
| 0:55 | MÅL |  | Skrivaren behöver ström |
| 0:56 | klar | info:bra | 🖨️ Storebrors skrivare står på sin plats |
| 0:56 | målruta |  | Skrivaren behöver ström |
| 0:58 | kvittens-bock |  | ✓ Ställ upp skrivaren |
| 0:58 | sak | du | Skrivaren behöver ström. Hur fixar jag det här ute? |
| 0:58 | pil |  | Skrivaren behöver ström |
| 0:58 | notis | tanke | 💭 Skrivaren behöver ström. Hur fixar jag det här ute? |
| 0:58 | röst | du | Skrivaren behöver ström. Hur fixar jag det här ute? · MÅL |
| 0:59 | nick |  | nick:2 |
| 1:03 | klar | du | Skrivaren behöver ström. Hur fixar jag det här ute? |
| 1:23 | paket |  | tanke |
| 1:23 | tanke | du | Cykeln… och storebrors generator? |
| 1:23 | väntar | du | Cykeln… och storebrors generator? |
| 1:23 | sak | du | Cykeln… och storebrors generator? |
| 1:23 | kvitto-visas | du | Cykeln… och storebrors generator? |
| 1:23 | notis | tanke | 💭 Cykeln… och storebrors generator? |
| 1:23 | röst | du | Cykeln… och storebrors generator? · STORY |
| 1:23 | händelse | malKlart | id=strom del=Dag 1 – Kom igång nasta=bygg |
| 1:23 | väntar | du | Nu generatorn på cykeln. |
| 1:24 | MÅL |  | Ställ cykel och generator |
| 1:26 | målruta |  | Ställ cykel och generator |
| 1:26 | klar | du | Cykeln… och storebrors generator? |
| 1:27 | kvittens-bock |  | ✓ Skrivaren behöver ström |
| 1:29 | sak | du | Nu generatorn på cykeln. |
| 1:29 | pil |  | Ställ cykel och generator |
| 1:29 | notis | tanke | 💭 Nu generatorn på cykeln. |
| 1:29 | röst | du | Nu generatorn på cykeln. · MÅL |
| 1:32 | klar | du | Nu generatorn på cykeln. |
| 1:34 | paket |  | tanke |
| 1:34 | tanke | du | Storebrors generator. Den gör el när cykeln snurrar. |
| 1:34 | väntar | du | Storebrors generator. Den gör el när cykeln snurrar. |
| 1:34 | händelse | placerat | sak=generator |
| 1:34 | duns | du | ställs ner |
| 1:40 | ljud | utrustning | Cykeln i famnen |
| 1:40 | händelse | lyft | sak=cykel |
| 1:41 | sak | du | Storebrors generator. Den gör el när cykeln snurrar. |
| 1:41 | notis | tanke | 💭 Storebrors generator. Den gör el när cykeln snurrar. |
| 1:41 | röst | du | Storebrors generator. Den gör el när cykeln snurrar. · REAKTION |
| 1:43 | paket |  | tanke |
| 1:43 | tanke | du | Cykeln ska stå vid skrivaren. Generatorn sätter jag på sen. |
| 1:43 | väntar | du | Cykeln ska stå vid skrivaren. Generatorn sätter jag på sen. |
| 1:46 | klar | du | Storebrors generator. Den gör el när cykeln snurrar. |
| 1:52 | händelse | placerat | sak=cykel |
| 1:52 | duns | du | ställs ner |
| 1:52 | struken | du | Cykeln ska stå vid skrivaren. Generatorn sätter jag på sen. |
| 1:54 | händelse | ombyggd | sak=cykel |
| 1:54 | händelse | malKlart | id=bygg del=Dag 1 – Kom igång nasta=valjModell |
| 1:54 | väntar | du | Strömmen finns. Nu ska skrivaren veta vad den ska göra, sen trampar jag. |
| 1:54 | målruta |  | Välj vad skrivaren ska printa |
| 1:54 | MÅL |  | Välj vad skrivaren ska printa |
| 1:54 | sak | du | Strömmen finns. Nu ska skrivaren veta vad den ska göra, sen trampar jag. |
| 1:54 | pil |  | Välj vad skrivaren ska printa |
| 1:54 | notis | tanke | 💭 Strömmen finns. Nu ska skrivaren veta vad den ska göra, sen trampar jag. |
| 1:54 | röst | du | Strömmen finns. Nu ska skrivaren veta vad den ska göra, sen trampar jag. · MÅL |
| 1:58 | kvittens-bock |  | ✓ Montera generatorn |
| 2:00 | klar | du | Strömmen finns. Nu ska skrivaren veta vad den ska göra, sen trampar jag. |
| 2:07 | händelse | printStart | sak=nyckelring |
| 2:07 | tanke | du | Den stannar när jag slutar trampa. Ström som sparas hade varit nåt. |
| 2:07 | väntar | du | Den stannar när jag slutar trampa. Ström som sparas hade varit nåt. |
| 2:07 | händelse | malKlart | id=valjModell del=Dag 1 – Kom igång nasta=trampa |
| 2:07 | kvittens | du | Den piper. Den GÖR något. |
| 2:07 | väntar | du | Den piper. Den GÖR något. |
| 2:07 | struken | du | Den stannar när jag slutar trampa. Ström som sparas hade varit nåt. |
| 2:07 | väntar | du | Nu behöver den ström. Trampa. |
| 2:07 | MÅL |  | Trampa cykeln |
| 2:07 | sak | du | Den piper. Den GÖR något. |
| 2:07 | röst | du | Den piper. Den GÖR något. · STORY |
| 2:07 | målruta |  | Trampa cykeln |
| 2:09 | klar | du | Den piper. Den GÖR något. |
| 2:09 | sak | du | Nu behöver den ström. Trampa. |
| 2:09 | pil |  | Trampa cykeln |
| 2:09 | notis | tanke | 💭 Nu behöver den ström. Trampa. |
| 2:09 | röst | du | Nu behöver den ström. Trampa. · MÅL |
| 2:12 | klar | du | Nu behöver den ström. Trampa. |
| 2:12 | händelse | printKlar | sak=nyckelring n=1 |
| 2:12 | händelse | malKlart | id=trampa del=Dag 1 – Kom igång nasta=rullSlut |
| 2:12 | kvittens | du | Klar! Ta ut den innan den ändrar sig. |
| 2:12 | väntar | du | Klar! Ta ut den innan den ändrar sig. |
| 2:12 | väntar | du | En nyckelring till, så länge storebrors rulle räcker. |
| 2:12 | MÅL |  | En nyckelring till |
| 2:12 | sak | du | Klar! Ta ut den innan den ändrar sig. |
| 2:12 | röst | du | Klar! Ta ut den innan den ändrar sig. · STORY |
| 2:12 | målruta |  | En nyckelring till |
| 2:13 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 2:13 | paket |  | sms |
| 2:13 | väntar | bror | VA FAN?! Fick du igång den?? Jag försökte i typ ett år. Den bara pep. 😳 |
| 2:13 | skratt | bror | VA FAN?! Fick du igång den?? Jag försökt |
| 2:13 | paket |  | sms → ge |
| 2:13 | väntar | bror | Sälj den till Ali, han med affären vid skräpberget. Han köper gamla grejer. Han köpte min gamla mopedhjälm för 20 spänn. |
| 2:13 | väntar |  | (läget ändras) |
| 2:15 | klar | du | Klar! Ta ut den innan den ändrar sig. |
| 2:16 | sak | du | En nyckelring till, så länge storebrors rulle räcker. |
| 2:16 | pil |  | En nyckelring till |
| 2:16 | notis | tanke | 💭 En nyckelring till, så länge storebrors rulle räcker. |
| 2:16 | röst | du | En nyckelring till, så länge storebrors rulle räcker. · MÅL |
| 2:20 | klar | du | En nyckelring till, så länge storebrors rulle räcker. |
| 2:22 | sak |  | (läget ändras) |
| 2:22 | klar |  | (läget ändras) |
| 2:28 | sak | bror | VA FAN?! Fick du igång den?? Jag försökte i typ ett år. Den bara pep. 😳 |
| 2:28 | skratt | bror | VA FAN?! Fick du igång den?? Jag försökt |
| 2:28 | sms | bror | VA FAN?! Fick du igång den?? Jag försökte i typ ett år. Den bara pep. 😳 |
| 2:28 | skratt | bror | VA FAN?! Fick du igång den?? Jag försökt |
| 2:28 | sms-bubbla | bror | VA FAN?! Fick du igång den?? Jag försökte i typ ett år. Den bara pep. 😳 |
| 2:28 | skratt | bror | VA FAN?! Fick du igång den?? Jag försökt |
| 2:28 | röst | bror | VA FAN?! Fick du igång den?? Jag försökte i typ ett år. Den bara pep. 😳 · REAKTION |
| 2:29 | hjälp | kontroll | Tab: Dina sms och dagboken |
| 2:30 | händelse | printStart | sak=nyckelring |
| 2:34 | klar | bror | VA FAN?! Fick du igång den?? Jag försökte i typ ett år. Den bara pep. 😳 |
| 2:34 | skratt | bror | VA FAN?! Fick du igång den?? Jag försökt |
| 2:40 | toast | guld | Nyckelring är klar – ta ut den |
| 2:40 | väntar | notis:Storebrors skrivare: Nyckelring är klar  | Storebrors skrivare: Nyckelring är klar – ta ut den |
| 2:40 | händelse | printKlar | sak=nyckelring n=2 |
| 2:40 | paket |  | tanke |
| 2:40 | tanke | du | Slut på storebrors rulle. Och här ligger ju plast överallt. Om jag bara kunde göra tråd av skräpet… Affären mitt emot kanske har något. |
| 2:40 | väntar | du | Slut på storebrors rulle. Och här ligger ju plast överallt. Om jag bara kunde göra tråd av skräpet… Affären mitt emot kanske har något. |
| 2:40 | händelse | malKlart | id=rullSlut del=Dag 1 – Kom igång nasta=saljTva |
| 2:40 | MÅL |  | Sälj nyckelringarna |
| 2:40 | sak | du | Slut på storebrors rulle. Och här ligger ju plast överallt. Om jag bara kunde göra tråd av skräpet… Affären mitt emot kanske har något. |
| 2:40 | kvitto-visas | du | Slut på storebrors rulle. Och här ligger ju plast överallt. Om jag bara kunde göra tråd av skräpet… Affären mitt emot kanske har något. |
| 2:40 | notis | tanke | 💭 Slut på storebrors rulle. Och här ligger ju plast överallt. Om jag bara kunde göra tråd av skräpet… Affären mitt emot kanske har något. |
| 2:40 | röst | du | Slut på storebrors rulle. Och här ligger ju plast överallt. Om jag bara kunde göra tråd av skräpet… Affären mitt emot kanske har något. · STORY |
| 2:42 | målruta |  | Sälj nyckelringarna |
| 2:44 | kvittens-bock |  | ✓ En nyckelring till |
| 2:51 | klar | du | Slut på storebrors rulle. Och här ligger ju plast överallt. Om jag bara kunde göra tråd av skräpet… Affären mitt emot kanske har något. |
| 2:51 | sak | du | (nytt mål i rutan) |
| 2:51 | pil |  | Sälj nyckelringarna |
| 2:51 | klar | du | (nytt mål i rutan) |
| 2:59 | sak | notis:Storebrors skrivare: Nyckelring är klar  | Storebrors skrivare: Nyckelring är klar – ta ut den |
| 2:59 | notis | guld | Storebrors skrivare: Nyckelring är klar – ta ut den |
| 3:02 | klar | notis:Storebrors skrivare: Nyckelring är klar  | Storebrors skrivare: Nyckelring är klar – ta ut den |
| 3:03 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 3:13 | sak | bror | Sälj den till Ali, han med affären vid skräpberget. Han köper gamla grejer. Han köpte min gamla mopedhjälm för 20 spänn. |
| 3:13 | sms | bror | Sälj den till Ali, han med affären vid skräpberget. Han köper gamla grejer. Han köpte min gamla mopedhjälm för 20 spänn. |
| 3:13 | sms-bubbla | bror | Sälj den till Ali, han med affären vid skräpberget. Han köper gamla grejer. Han köpte min gamla mopedhjälm för 20 spänn. |
| 3:13 | röst | bror | Sälj den till Ali, han med affären vid skräpberget. Han köper gamla grejer. Han köpte min gamla mopedhjälm för 20 spänn. · STORY |
| 3:16 | butiksbubbla | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 3:17 | aliSalt | ali | 30 |
| 3:17 | butiksbubbla | ali | Pappas gamla köttkvarn. Den har malt allt utom kött. Trettio kronor, så är den din. |
| 3:19 | väntar | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 3:19 | väntar | ali | Pappas gamla köttkvarn. Den har malt allt utom kött. Trettio kronor, så är den din. |
| 3:19 | händelse | malKlart | id=saljTva del=Dag 1 – Kom igång nasta=aliKvarn |
| 3:19 | väntar | du | Ali har en gammal kvarn. Den gör tråd av skräp. |
| 3:19 | MÅL |  | Köp kvarnen |
| 3:21 | målruta |  | Köp kvarnen |
| 3:23 | kvittens-bock |  | ✓ Sälj nyckelringarna |
| 3:23 | klar | bror | Sälj den till Ali, han med affären vid skräpberget. Han köper gamla grejer. Han köpte min gamla mopedhjälm för 20 spänn. |
| 3:25 | sak | du | Ali har en gammal kvarn. Den gör tråd av skräp. |
| 3:25 | pil |  | Köp kvarnen |
| 3:25 | notis | tanke | 💭 Ali har en gammal kvarn. Den gör tråd av skräp. |
| 3:25 | röst | du | Ali har en gammal kvarn. Den gör tråd av skräp. · MÅL |
| 3:29 | klar | du | Ali har en gammal kvarn. Den gör tråd av skräp. |
| 3:31 | sak | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 3:31 | röst | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. · STORY |
| 3:38 | händelse | kopt | sak=gammalkvarn |
| 3:38 | röst | ali | Och kommer du på nåt smart, så vet du var jag bor. · STORY |
| 3:38 | butiksbubbla | ali | Och kommer du på nåt smart, så vet du var jag bor. |
| 3:39 | händelse | malKlart | id=aliKvarn del=Dag 1 – Kom igång nasta=kvarn |
| 3:39 | väntar | du | Kvarnen ska stå vid skrivaren, närmast skräpberget. |
| 3:39 | MÅL |  | Ställ kvarnen |
| 3:40 | klar | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 3:42 | målruta |  | Ställ kvarnen |
| 3:42 | sak | du | Kvarnen ska stå vid skrivaren, närmast skräpberget. |
| 3:42 | pil |  | Ställ kvarnen |
| 3:42 | notis | tanke | 💭 Kvarnen ska stå vid skrivaren, närmast skräpberget. |
| 3:42 | röst | du | Kvarnen ska stå vid skrivaren, närmast skräpberget. · MÅL |
| 3:43 | nick |  | nick:9 |
| 3:43 | kvittens-bock |  | ✓ Köp kvarnen |
| 3:46 | klar | du | Kvarnen ska stå vid skrivaren, närmast skräpberget. |
| 3:48 | sak | ali | Pappas gamla köttkvarn. Den har malt allt utom kött. Trettio kronor, så är den din. |
| 3:48 | röst | ali | Pappas gamla köttkvarn. Den har malt allt utom kött. Trettio kronor, så är den din. · STORY |
| 3:54 | väntar | kjelle | God morgon, det är Kjelle på Radio Tippen! Det har flyttat in någon i det gamla skjulet. Med en cykel och en skrivare. Spännande, Gunnar. |
| 3:54 | radio | kjelle | God morgon, det är Kjelle på Radio Tippen! Det har flyttat in någon i det gamla skjulet. Med en cykel och en skrivare. Spännande, Gunnar. |
| 3:54 | skratt | du | Radio-Kjelle |
| 3:55 | klar | ali | Pappas gamla köttkvarn. Den har malt allt utom kött. Trettio kronor, så är den din. |
| 3:57 | väntar | foto | Första nyckelringen |
| 3:57 | paket |  | tanke |
| 3:57 | tanke | du | Någon köpte nåt jag gjort. Det här kan funka. |
| 3:57 | väntar | du | Någon köpte nåt jag gjort. Det här kan funka. |
| 3:58 | tanke | du | Vem är Gunnar? |
| 3:58 | väntar | du | Vem är Gunnar? |
| 4:03 | sak | mamma | Hur kunde du bara gå? Är du ok? Svara när jag ringer! |
| 4:03 | sms | mamma | Hur kunde du bara gå? Är du ok? Svara när jag ringer! |
| 4:03 | sms-bubbla | mamma | Hur kunde du bara gå? Är du ok? Svara när jag ringer! |
| 4:03 | röst | mamma | Hur kunde du bara gå? Är du ok? Svara när jag ringer! · STORY |
| 4:08 | händelse | placerat | sak=kvarnen |
| 4:08 | duns | du | ställs ner |
| 4:08 | händelse | malKlart | id=kvarn del=Dag 1 – Kom igång nasta=flaska |
| 4:08 | struken | du | Vem är Gunnar? |
| 4:08 | väntar | du | Skräp i kvarnen, sen vevar jag. Då blir det tråd. |
| 4:08 | MÅL |  | Gör egen tråd |
| 4:08 | klar | mamma | Hur kunde du bara gå? Är du ok? Svara när jag ringer! |
| 4:10 | sak | du | Skräp i kvarnen, sen vevar jag. Då blir det tråd. |
| 4:10 | målruta |  | Gör egen tråd |
| 4:10 | pil |  | Gör egen tråd |
| 4:10 | notis | tanke | 💭 Skräp i kvarnen, sen vevar jag. Då blir det tråd. |
| 4:10 | röst | du | Skräp i kvarnen, sen vevar jag. Då blir det tråd. · MÅL |
| 4:10 | nick |  | nick:10 |
| 4:12 | kvittens-bock |  | ✓ Ställ kvarnen |
| 4:13 | hjälp | kontroll | Klicka och håll: Veva kvarnen |
| 4:14 | klar | du | Skräp i kvarnen, sen vevar jag. Då blir det tråd. |
| 4:34 | väntar | info:bra | 3 st i tratten – veva nu! |
| 4:34 | sak | info:bra | 3 st i tratten – veva nu! |
| 4:34 | kvitto-visas | info:bra | 3 st i tratten – veva nu! |
| 4:34 | toast | bra | 3 st i tratten – veva nu! |
| 4:35 | händelse | malKlart | id=flaska del=Dag 1 – Kom igång nasta=egenPrint |
| 4:35 | kvittens | du | Det blir tråd! Riktig plasttråd. |
| 4:35 | väntar | du | Det blir tråd! Riktig plasttråd. |
| 4:35 | väntar | du | Kvarnen funkar. Soptippen är en gruva. |
| 4:35 | väntar | du | Min egen tråd. Nu printar jag en nyckelring av den. |
| 4:35 | MÅL |  | Printa med egen tråd |
| 4:36 | klar | info:bra | 3 st i tratten – veva nu! |
| 4:36 | sak | du | Det blir tråd! Riktig plasttråd. |
| 4:36 | röst | du | Det blir tråd! Riktig plasttråd. · STORY |
| 4:38 | målruta |  | Printa med egen tråd |
| 4:38 | klar | du | Det blir tråd! Riktig plasttråd. |
| 4:38 | sak | du | Kvarnen funkar. Soptippen är en gruva. |
| 4:38 | kvitto-visas | du | Kvarnen funkar. Soptippen är en gruva. |
| 4:38 | lapp | 📔 Dagbok | Kvarnen funkar. Soptippen är en gruva. |
| 4:38 | dagbokrad | du | Kvarnen funkar. Soptippen är en gruva. |
| 4:38 | notis | dagbok | Kvarnen funkar. Soptippen är en gruva. |
| 4:39 | klar | du | Kvarnen funkar. Soptippen är en gruva. |
| 4:39 | sak | du | Min egen tråd. Nu printar jag en nyckelring av den. |
| 4:39 | pil |  | Printa med egen tråd |
| 4:39 | notis | tanke | 💭 Min egen tråd. Nu printar jag en nyckelring av den. |
| 4:39 | röst | du | Min egen tråd. Nu printar jag en nyckelring av den. · MÅL |
| 4:40 | nick |  | nick:11 |
| 4:43 | klar | du | Min egen tråd. Nu printar jag en nyckelring av den. |
| 4:52 | sak | kjelle | God morgon, det är Kjelle på Radio Tippen! Det har flyttat in någon i det gamla skjulet. Med en cykel och en skrivare. Spännande, Gunnar. |
| 4:52 | notis |  | 📻 Radio Tippen: God morgon, det är Kjelle på Radio Tippen! Det har flyttat in någon i det gamla skjulet. Med en cykel och en skrivare. Spännande, Gunnar. |
| 4:52 | röst | kjelle | God morgon, det är Kjelle på Radio Tippen! Det har flyttat in någon i det gamla skjulet. Med en cykel och en skrivare. Spännande, Gunnar. · REAKTION |
| 4:55 | händelse | printStart | sak=nyckelring |
| 4:55 | toast | bra | 🔗 Slangen kopplad |
| 5:00 | toast | guld | ✅ |
| 5:00 | händelse | printKlar | sak=nyckelring n=3 |
| 5:00 | paket |  | tanke |
| 5:00 | tanke | du | En nyckelring av en gammal schampoflaska. Den luktar fortfarande päron. |
| 5:00 | väntar | du | En nyckelring av en gammal schampoflaska. Den luktar fortfarande päron. |
| 5:00 | skratt | du | egen tråd |
| 5:00 | händelse | malKlart | id=egenPrint del=Dag 1 – Kom igång nasta=salj |
| 5:00 | struken | du | En nyckelring av en gammal schampoflaska. Den luktar fortfarande päron. |
| 5:00 | väntar | du | Affären på andra sidan vägen kanske köper sånt här. |
| 5:00 | MÅL |  | Sälj hos Ali |
| 5:01 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 5:02 | målruta |  | Sälj hos Ali |
| 5:03 | klar | kjelle | God morgon, det är Kjelle på Radio Tippen! Det har flyttat in någon i det gamla skjulet. Med en cykel och en skrivare. Spännande, Gunnar. |
| 5:04 | kvittens-bock |  | ✓ Printa med egen tråd |
| 5:05 | sak | du | Affären på andra sidan vägen kanske köper sånt här. |
| 5:05 | pil |  | Sälj hos Ali |
| 5:05 | notis | tanke | 💭 Affären på andra sidan vägen kanske köper sånt här. |
| 5:05 | röst | du | Affären på andra sidan vägen kanske köper sånt här. · MÅL |
| 5:06 | nick |  | nick:12 |
| 5:09 | klar | du | Affären på andra sidan vägen kanske köper sånt här. |
| 5:18 | sak | foto | Första nyckelringen |
| 5:18 | foto | du | Första nyckelringen |
| 5:19 | händelse | printStart | sak=nyckelring |
| 5:20 | toast | guld | ✅ |
| 5:20 | händelse | printKlar | sak=nyckelring n=4 |
| 5:20 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 5:20 | klar | foto | Första nyckelringen |
| 5:24 | händelse | printStart | sak=nyckelring |
| 5:25 | toast | guld | ✅ |
| 5:25 | händelse | printKlar | sak=nyckelring n=5 |
| 5:25 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 5:28 | sak | du | Någon köpte nåt jag gjort. Det här kan funka. |
| 5:28 | notis | tanke | 💭 Någon köpte nåt jag gjort. Det här kan funka. |
| 5:28 | röst | du | Någon köpte nåt jag gjort. Det här kan funka. · STORY |
| 5:32 | klar | du | Någon köpte nåt jag gjort. Det här kan funka. |
| 5:38 | aliSalt | ali | 45 |
| 5:38 | röst | ali | Nyckelringar igen? Folk tappar sina nycklar hela tiden. Bra affär för oss. · STORY |
| 5:38 | butiksbubbla | ali | Nyckelringar igen? Folk tappar sina nycklar hela tiden. Bra affär för oss. |
| 5:39 | händelse | malKlart | id=salj del=Dag 1 – Kom igång nasta=powerbank |
| 5:39 | paket |  | sms → ge |
| 5:39 | väntar | ali | Ali här. Glömde en sak. Kom tillbaka, jag har nåt åt dig. |
| 5:39 | väntar |  | (läget ändras) |
| 5:39 | MÅL |  | Gå till Ali |
| 5:41 | väntar | du | Ali har något åt mig. Jag går över vägen till affären. |
| 5:41 | sak | du | Ali har något åt mig. Jag går över vägen till affären. |
| 5:41 | målruta |  | Gå till Ali |
| 5:41 | pil |  | Gå till Ali |
| 5:41 | notis | tanke | 💭 Ali har något åt mig. Jag går över vägen till affären. |
| 5:41 | röst | du | Ali har något åt mig. Jag går över vägen till affären. · MÅL |
| 5:43 | kvittens-bock |  | ✓ Sälj hos Ali |
| 5:46 | klar | du | Ali har något åt mig. Jag går över vägen till affären. |
| 5:48 | sak |  | (läget ändras) |
| 5:48 | klar |  | (läget ändras) |
| 5:54 | sak | ali | Ali här. Glömde en sak. Kom tillbaka, jag har nåt åt dig. |
| 5:54 | sms | ali | Ali här. Glömde en sak. Kom tillbaka, jag har nåt åt dig. |
| 5:54 | sms-bubbla | ali | Ali här. Glömde en sak. Kom tillbaka, jag har nåt åt dig. |
| 5:54 | röst | ali | Ali här. Glömde en sak. Kom tillbaka, jag har nåt åt dig. · STORY |
| 5:55 | paket | ali | ali → ge |
| 5:55 | butiksbubbla | ali | Ali här. Jag såg dig cykla. Det ser jobbigt ut. Testa koppla på den här. Bra kunder får bonus. |
| 5:57 | röst | ali | Ali här. Jag såg dig cykla. Det ser jobbigt ut. Testa koppla på den här. Bra kunder får bonus. · STORY |
| 6:01 | klar | ali | Ali här. Glömde en sak. Kom tillbaka, jag har nåt åt dig. |
| 6:12 | skratt | du | powerbanken på cykeln |
| 6:12 | paket |  | tanke |
| 6:12 | tanke | du | Nu sparas lite ström. En nyckelring, typ. Framtiden är här, och den sitter fast med eltejp. |
| 6:12 | väntar | du | Nu sparas lite ström. En nyckelring, typ. Framtiden är här, och den sitter fast med eltejp. |
| 6:12 | monterat | du | byggsats:powerbank |
| 6:12 | händelse | monterat | sak=powerbank |
| 6:12 | sak | du | Nu sparas lite ström. En nyckelring, typ. Framtiden är här, och den sitter fast med eltejp. |
| 6:12 | kvitto-visas | du | Nu sparas lite ström. En nyckelring, typ. Framtiden är här, och den sitter fast med eltejp. |
| 6:12 | notis | tanke | 💭 Nu sparas lite ström. En nyckelring, typ. Framtiden är här, och den sitter fast med eltejp. |
| 6:12 | röst | du | Nu sparas lite ström. En nyckelring, typ. Framtiden är här, och den sitter fast med eltejp. · REAKTION |
| 6:12 | händelse | malKlart | id=powerbank del=Dag 1 – Kom igång nasta=kopGrip |
| 6:12 | paket |  | lapp |
| 6:12 | lapp-kö | 🧺 Ali | Ali här. Nyckelringen sålde. Jag ville bli ingenjör, men fick ta över pappas butik. I natt lät jag en AI rita en skräpgrip åt mig. Kom och titta. |
| 6:12 | väntar | ali | Ali här. Nyckelringen sålde. Jag ville bli ingenjör, men fick ta över pappas butik. I natt lät jag en AI rita en skräpgrip åt mig. Kom och titta. |
| 6:12 | väntar | du | Med en skräpgrip slipper jag böja mig. Ali har en ritning. |
| 6:12 | MÅL |  | Plocka skräp och mal det |
| 6:14 | målruta |  | Plocka skräp och mal det |
| 6:16 | kvittens-bock |  | ✓ Gå till Ali |
| 6:19 | klar | du | Nu sparas lite ström. En nyckelring, typ. Framtiden är här, och den sitter fast med eltejp. |
| 6:20 | sak | du | Med en skräpgrip slipper jag böja mig. Ali har en ritning. |
| 6:20 | pil |  | Plocka skräp och mal det |
| 6:20 | notis | tanke | 💭 Med en skräpgrip slipper jag böja mig. Ali har en ritning. |
| 6:20 | röst | du | Med en skräpgrip slipper jag böja mig. Ali har en ritning. · MÅL |
| 6:20 | nick |  | nick:14 |
| 6:25 | klar | du | Med en skräpgrip slipper jag böja mig. Ali har en ritning. |
| 6:34 | paket |  | tanke |
| 6:34 | tanke | du | Femtio kronor. Nu har jag råd med gripen. |
| 6:34 | väntar | du | Femtio kronor. Nu har jag råd med gripen. |
| 6:34 | sak | du | Femtio kronor. Nu har jag råd med gripen. |
| 6:34 | notis | tanke | 💭 Femtio kronor. Nu har jag råd med gripen. |
| 6:34 | röst | du | Femtio kronor. Nu har jag råd med gripen. · REAKTION |
| 6:36 | händelse | printStart | sak=nyckelring |
| 6:37 | toast | fel | Ingen ström – trampa cykeln |
| 6:37 | väntar | notis:Storebrors skrivare: Ingen ström – tramp | Storebrors skrivare: Ingen ström – trampa cykeln |
| 6:37 | klar | du | Femtio kronor. Nu har jag råd med gripen. |
| 6:38 | toast | guld | ✅ |
| 6:38 | händelse | printKlar | sak=nyckelring n=6 |
| 6:38 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 6:40 | händelse | printStart | sak=nyckelring |
| 6:41 | toast | guld | ✅ |
| 6:41 | händelse | printKlar | sak=nyckelring n=7 |
| 6:57 | struken | notis:Storebrors skrivare: Ingen ström – tramp | Storebrors skrivare: Ingen ström – trampa cykeln |
| 7:01 | sak | ali | Ali här. Nyckelringen sålde. Jag ville bli ingenjör, men fick ta över pappas butik. I natt lät jag en AI rita en skräpgrip åt mig. Kom och titta. |
| 7:01 | sms | ali | Ali här. Nyckelringen sålde. Jag ville bli ingenjör, men fick ta över pappas butik. I natt lät jag en AI rita en skräpgrip åt mig. Kom och titta. |
| 7:01 | sms-bubbla | ali | Ali här. Nyckelringen sålde. Jag ville bli ingenjör, men fick ta över pappas butik. I natt lät jag en AI rita en skräpgrip åt mig. Kom och titta. |
| 7:01 | röst | ali | Ali här. Nyckelringen sålde. Jag ville bli ingenjör, men fick ta över pappas butik. I natt lät jag en AI rita en skräpgrip åt mig. Kom och titta. · STORY |
| 7:02 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 7:04 | händelse | printStart | sak=nyckelring |
| 7:05 | toast | guld | ✅ |
| 7:05 | händelse | printKlar | sak=nyckelring n=8 |
| 7:06 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 7:13 | klar | ali | Ali här. Nyckelringen sålde. Jag ville bli ingenjör, men fick ta över pappas butik. I natt lät jag en AI rita en skräpgrip åt mig. Kom och titta. |
| 7:17 | paket |  | ali → ge |
| 7:17 | väntar | ali | Du får bonus! 10 kr extra. Du ser hungrig ut. |
| 7:17 | väntar |  | (läget ändras) |
| 7:17 | aliSalt | ali | 15 |
| 7:18 | aliSalt | ali | 15 |
| 7:18 | aliSalt | ali | 15 |
| 7:18 | sak | ali | Du får bonus! 10 kr extra. Du ser hungrig ut. |
| 7:18 | notis |  | Ali: ”Du får bonus! 10 kr extra. Du ser hungrig ut.” |
| 7:18 | röst | ali | Du får bonus! 10 kr extra. Du ser hungrig ut. · REAKTION |
| 7:20 | tanke | du | Gripen hos Ali. Femtio kronor. |
| 7:20 | väntar | du | Gripen hos Ali. Femtio kronor. |
| 7:20 | nick |  | paminn:14 |
| 7:22 | klar | ali | Du får bonus! 10 kr extra. Du ser hungrig ut. |
| 7:24 | sak |  | (läget ändras) |
| 7:24 | klar |  | (läget ändras) |
| 7:31 | sak | du | Gripen hos Ali. Femtio kronor. |
| 7:31 | notis | tanke | 💭 Gripen hos Ali. Femtio kronor. |
| 7:31 | röst | du | Gripen hos Ali. Femtio kronor. · REAKTION |
| 7:33 | klar | du | Gripen hos Ali. Femtio kronor. |
| 7:35 | händelse | printStart | sak=nyckelring |
| 7:36 | toast | guld | ✅ |
| 7:36 | händelse | printKlar | sak=nyckelring n=9 |
| 7:37 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 7:39 | händelse | printStart | sak=nyckelring |
| 7:40 | toast | guld | ✅ |
| 7:40 | händelse | printKlar | sak=nyckelring n=10 |
| 7:41 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 7:43 | händelse | printStart | sak=nyckelring |
| 7:44 | toast | fel | Ingen ström – trampa cykeln |
| 7:46 | toast | guld | ✅ |
| 7:46 | händelse | printKlar | sak=nyckelring n=11 |
| 7:46 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 7:57 | aliSalt | ali | 15 |
| 7:57 | aliSalt | ali | 15 |
| 7:57 | aliSalt | ali | 15 |
| 8:10 | händelse | printStart | sak=nyckelring |
| 8:11 | toast | guld | ✅ |
| 8:11 | händelse | printKlar | sak=nyckelring n=12 |
| 8:12 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 8:14 | händelse | printStart | sak=nyckelring |
| 8:15 | toast | guld | ✅ |
| 8:15 | händelse | printKlar | sak=nyckelring n=13 |
| 8:16 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 8:18 | händelse | printStart | sak=nyckelring |
| 8:19 | toast | guld | ✅ |
| 8:19 | händelse | printKlar | sak=nyckelring n=14 |
| 8:20 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 8:31 | aliSalt | ali | 15 |
| 8:31 | aliSalt | ali | 15 |
| 8:31 | aliSalt | ali | 15 |
| 8:44 | händelse | printStart | sak=nyckelring |
| 8:45 | toast | guld | ✅ |
| 8:45 | händelse | printKlar | sak=nyckelring n=15 |
| 8:46 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 8:48 | händelse | printStart | sak=nyckelring |
| 8:49 | toast | fel | Ingen ström – trampa cykeln |
| 8:51 | toast | guld | ✅ |
| 8:51 | händelse | printKlar | sak=nyckelring n=16 |
| 8:51 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 8:53 | händelse | printStart | sak=nyckelring |
| 8:54 | toast | guld | ✅ |
| 8:54 | händelse | printKlar | sak=nyckelring n=17 |
| 8:55 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 9:06 | aliSalt | ali | 15 |
| 9:06 | aliSalt | ali | 15 |
| 9:06 | aliSalt | ali | 15 |
| 9:22 | upplåst | bara | grip |
| 9:22 | brott | RESERV | grip (bara 2 av 3) |
| 9:22 | händelse | upplast | id=grip flask=bara |
| 9:28 | väntar | bud | (tips) |
| 9:28 | sak | bud | (tips) |
| 9:28 | väntar | du | Jag har pengar nu. Hos Ali kan jag köpa uppgraderingar – bära mer eller printa snabbare. |
| 9:29 | klar | bud | (tips) |
| 9:31 | sak | du | Jag har pengar nu. Hos Ali kan jag köpa uppgraderingar – bära mer eller printa snabbare. |
| 9:31 | röst | du | Jag har pengar nu. Hos Ali kan jag köpa uppgraderingar – bära mer eller printa snabbare. · MÅL |
| 9:32 | händelse | printStart | sak=nyckelring |
| 9:33 | toast | guld | ✅ |
| 9:33 | händelse | printKlar | sak=nyckelring n=18 |
| 9:38 | klar | du | Jag har pengar nu. Hos Ali kan jag köpa uppgraderingar – bära mer eller printa snabbare. |
| 9:56 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 10:08 | aliSalt | ali | 15 |
| 10:20 | händelse | printStart | sak=nyckelring |
| 10:21 | toast | guld | ✅ |
| 10:21 | händelse | printKlar | sak=nyckelring n=19 |
| 10:22 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 10:24 | händelse | printStart | sak=nyckelring |
| 10:25 | toast | guld | ✅ |
| 10:25 | händelse | printKlar | sak=nyckelring n=20 |
| 10:26 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 10:37 | aliSalt | ali | 15 |
| 10:37 | aliSalt | ali | 15 |
| 10:41 | struken | info:guld | 3D-modell köpt – printa skräpgrip |
| 10:41 | händelse | kopt | sak=grip |
| 10:41 | röst | ali | Bra val. 3D-modellen är din. Den räcker till en. · STORY |
| 10:41 | butiksbubbla | ali | Bra val. 3D-modellen är din. Den räcker till en. |
| 10:42 | händelse | malKlart | id=kopGrip del=Dag 1 – Kom igång nasta=printGrip |
| 10:42 | väntar | du | Min första 3D-modell! Jag printar inte bara saker – jag printar maskiner. |
| 10:42 | MÅL |  | Printa skräpgripen |
| 10:43 | sak | du | Min första 3D-modell! Jag printar inte bara saker – jag printar maskiner. |
| 10:43 | kvitto-visas | du | Min första 3D-modell! Jag printar inte bara saker – jag printar maskiner. |
| 10:43 | lapp | 📔 Dagbok | Min första 3D-modell! Jag printar inte bara saker – jag printar maskiner. |
| 10:43 | dagbokrad | du | Min första 3D-modell! Jag printar inte bara saker – jag printar maskiner. |
| 10:43 | notis | dagbok | Min första 3D-modell! Jag printar inte bara saker – jag printar maskiner. |
| 10:43 | klar | du | Min första 3D-modell! Jag printar inte bara saker – jag printar maskiner. |
| 10:43 | målruta |  | Printa skräpgripen |
| 10:44 | sak | du | (nytt mål i rutan) |
| 10:44 | pil |  | Printa skräpgripen |
| 10:44 | klar | du | (nytt mål i rutan) |
| 10:44 | nick |  | nick:15 |
| 11:01 | händelse | printStart | sak=byggsats:grip |
| 11:02 | toast | fel | Ingen ström – trampa cykeln |
| 11:05 | händelse | printKlar | sak=byggsats:grip n=1 |
| 11:05 | toast | guld | ✅ |
| 11:06 | väntar | info:guld | Skräpgrip ska jag ha på mig. |
| 11:06 | händelse | tagitUrPrint | sak=byggsats:grip n=1 |
| 11:06 | paket |  | sms |
| 11:06 | väntar | ali | Ali här. Jag såg Skräpgrip på avstånd. Ett streck blev lite snett. Mitt fel. Vackert ändå. |
| 11:06 | sak | info:guld | Skräpgrip ska jag ha på mig. |
| 11:06 | kvitto-visas | info:guld | Skräpgrip ska jag ha på mig. |
| 11:06 | toast | guld | Skräpgrip ska jag ha på mig. |
| 11:08 | klar | info:guld | Skräpgrip ska jag ha på mig. |
| 11:10 | väntar | info:guld | 🦾 Skräpgripen sitter! Jag bär 6, siktar lättare och plockar när jag går nära. |
| 11:10 | tog på | du | byggsats:grip |
| 11:10 | händelse | monterat | sak=grip |
| 11:10 | sak | info:guld | 🦾 Skräpgripen sitter! Jag bär 6, siktar lättare och plockar när jag går nära. |
| 11:10 | kvitto-visas | info:guld | 🦾 Skräpgripen sitter! Jag bär 6, siktar lättare och plockar när jag går nära. |
| 11:10 | toast | guld | 🦾 Skräpgripen sitter! Jag bär 6, siktar lättare och plockar när jag går nära. |
| 11:10 | händelse | malKlart | id=printGrip del=Dag 1 – Kom igång nasta=krukaD1 |
| 11:10 | väntar | du | Ali vill ha krukor. Jag printar en blomkruka. |
| 11:10 | MÅL |  | Printa och sälj nyckelringar |
| 11:10 | upplåst | inkomst | kruka |
| 11:10 | brott | UPPLÅST | kruka (inkomst 20 av 6) |
| 11:10 | händelse | upplast | id=kruka flask=inkomst |
| 11:10 | paket |  | tanke → sms |
| 11:10 | tanke | du | Nyckelringar, nyckelringar. Ali kan inte vilja ha fler. |
| 11:10 | väntar | du | Nyckelringar, nyckelringar. Ali kan inte vilja ha fler. |
| 11:10 | väntar | ali | Prova en kruka. Folk köper krukor. Ingen vet varför. |
| 11:10 | skratt | ali | Prova en kruka. Folk köper krukor. Ingen |
| 11:12 | klar | info:guld | 🦾 Skräpgripen sitter! Jag bär 6, siktar lättare och plockar när jag går nära. |
| 11:13 | målruta |  | Köp krukreceptet |
| 11:14 | kvittens-bock |  | ✓ Printa skräpgripen |
| 11:14 | sak | du | Ali vill ha krukor. Jag printar en blomkruka. |
| 11:14 | pil |  | Köp krukreceptet |
| 11:14 | notis | tanke | 💭 Ali vill ha krukor. Jag printar en blomkruka. |
| 11:14 | röst | du | Ali vill ha krukor. Jag printar en blomkruka. · MÅL |
| 11:14 | nick |  | nick:16 |
| 11:18 | klar | du | Ali vill ha krukor. Jag printar en blomkruka. |
| 11:20 | sak | ali | Prova en kruka. Folk köper krukor. Ingen vet varför. |
| 11:20 | skratt | ali | Prova en kruka. Folk köper krukor. Ingen |
| 11:20 | sms | ali | Prova en kruka. Folk köper krukor. Ingen vet varför. |
| 11:20 | skratt | ali | Prova en kruka. Folk köper krukor. Ingen |
| 11:20 | sms-bubbla | ali | Prova en kruka. Folk köper krukor. Ingen vet varför. |
| 11:20 | skratt | ali | Prova en kruka. Folk köper krukor. Ingen |
| 11:20 | röst | ali | Prova en kruka. Folk köper krukor. Ingen vet varför. · STORY |
| 11:21 | händelse | kopt | sak=kruka |
| 11:21 | butiksbubbla | ali | Blomkruka? Bra val. Folk köper sånt. Jag vet inte varför. |
| 11:22 | väntar | ali | Bra val. Folk köper sånt. Jag vet inte varför. |
| 11:24 | klar | ali | Prova en kruka. Folk köper krukor. Ingen vet varför. |
| 11:24 | skratt | ali | Prova en kruka. Folk köper krukor. Ingen |
| 11:26 | sak | ali | Bra val. Folk köper sånt. Jag vet inte varför. |
| 11:26 | röst | ali | Bra val. Folk köper sånt. Jag vet inte varför. · STORY |
| 11:30 | klar | ali | Bra val. Folk köper sånt. Jag vet inte varför. |
| 11:38 | sak | du | Nyckelringar, nyckelringar. Ali kan inte vilja ha fler. |
| 11:38 | notis | tanke | 💭 Nyckelringar, nyckelringar. Ali kan inte vilja ha fler. |
| 11:38 | röst | du | Nyckelringar, nyckelringar. Ali kan inte vilja ha fler. · STORY |
| 11:43 | klar | du | Nyckelringar, nyckelringar. Ali kan inte vilja ha fler. |
| 11:48 | händelse | printStart | sak=kruka |
| 11:51 | toast | guld | ✅ |
| 11:51 | händelse | printKlar | sak=kruka n=1 |
| 11:51 | händelse | malKlart | id=krukaD1 del=Dag 1 – Kom igång nasta=saljKruka |
| 11:51 | kvittens | du | En kruka. Mamma skulle bli så stolt. Hon får inte veta. |
| 11:51 | väntar | du | En kruka. Mamma skulle bli så stolt. Hon får inte veta. |
| 11:51 | väntar | du | Ali gillar krukor. Han sa det själv. |
| 11:51 | MÅL |  | Sälj blomkrukan |
| 11:51 | sak | du | En kruka. Mamma skulle bli så stolt. Hon får inte veta. |
| 11:51 | röst | du | En kruka. Mamma skulle bli så stolt. Hon får inte veta. · STORY |
| 11:51 | målruta |  | Sälj blomkrukan |
| 11:51 | händelse | tagitUrPrint | sak=kruka n=1 |
| 11:56 | klar | du | En kruka. Mamma skulle bli så stolt. Hon får inte veta. |
| 11:56 | sak | du | Ali gillar krukor. Han sa det själv. |
| 11:56 | pil |  | Sälj blomkrukan |
| 11:56 | notis | tanke | 💭 Ali gillar krukor. Han sa det själv. |
| 11:56 | röst | du | Ali gillar krukor. Han sa det själv. · MÅL |
| 11:59 | klar | du | Ali gillar krukor. Han sa det själv. |
| 12:08 | sak | ali | Ali här. Jag såg Skräpgrip på avstånd. Ett streck blev lite snett. Mitt fel. Vackert ändå. |
| 12:08 | sms | ali | Ali här. Jag såg Skräpgrip på avstånd. Ett streck blev lite snett. Mitt fel. Vackert ändå. |
| 12:08 | sms-bubbla | ali | Ali här. Jag såg Skräpgrip på avstånd. Ett streck blev lite snett. Mitt fel. Vackert ändå. |
| 12:08 | röst | ali | Ali här. Jag såg Skräpgrip på avstånd. Ett streck blev lite snett. Mitt fel. Vackert ändå. · REAKTION |
| 12:16 | klar | ali | Ali här. Jag såg Skräpgrip på avstånd. Ett streck blev lite snett. Mitt fel. Vackert ändå. |
| 12:21 | aliSalt | ali | 70 |
| 12:22 | händelse | malKlart | id=saljKruka del=Dag 1 – Kom igång nasta=kopSang |
| 12:22 | väntar | du | Jag tänker inte sova på betongen i natt. Ali har en säng. Typ. |
| 12:22 | målruta |  | Köp sängen |
| 12:22 | MÅL |  | Köp sängen |
| 12:22 | sak | du | Jag tänker inte sova på betongen i natt. Ali har en säng. Typ. |
| 12:22 | pil |  | Köp sängen |
| 12:22 | notis | tanke | 💭 Jag tänker inte sova på betongen i natt. Ali har en säng. Typ. |
| 12:22 | röst | du | Jag tänker inte sova på betongen i natt. Ali har en säng. Typ. · MÅL |
| 12:24 | paket |  | tanke |
| 12:24 | tanke | du | Det börjar bli mörkt. Jag kan inte sova på jorden. |
| 12:24 | väntar | du | Det börjar bli mörkt. Jag kan inte sova på jorden. |
| 12:26 | kvittens-bock |  | ✓ Sälj blomkrukan |
| 12:27 | klar | du | Jag tänker inte sova på betongen i natt. Ali har en säng. Typ. |
| 12:36 | händelse | kopt | sak=sang |
| 12:36 | röst | ali | Sov gott, min vän. · STORY |
| 12:36 | butiksbubbla | ali | Sov gott, min vän. |
| 12:37 | händelse | malKlart | id=kopSang del=Dag 1 – Kom igång nasta=printSang |
| 12:37 | struken | du | Det börjar bli mörkt. Jag kan inte sova på jorden. |
| 12:37 | väntar | du | En säng tar lång tid. Den är värd det. |
| 12:37 | målruta |  | Printa sängen |
| 12:37 | MÅL |  | Printa sängen |
| 12:38 | sak | du | En säng tar lång tid. Den är värd det. |
| 12:38 | pil |  | Printa sängen |
| 12:38 | notis | tanke | 💭 En säng tar lång tid. Den är värd det. |
| 12:38 | röst | du | En säng tar lång tid. Den är värd det. · MÅL |
| 12:38 | nick |  | nick:19 |
| 12:41 | klar | du | En säng tar lång tid. Den är värd det. |
| 12:41 | kvittens-bock |  | ✓ Köp sängen |
| 13:38 | händelse | printStart | sak=sang |
| 13:39 | toast | fel | Ingen ström – trampa cykeln |
| 13:44 | toast | fel | Slut på tråd – mal mer så fortsätter den |
| 13:44 | väntar | notis:Storebrors skrivare: Slut på tråd – mal  | Storebrors skrivare: Slut på tråd – mal mer så fortsätter den |
| 13:44 | sak | notis:Storebrors skrivare: Slut på tråd – mal  | Storebrors skrivare: Slut på tråd – mal mer så fortsätter den |
| 13:44 | notis | fel | Storebrors skrivare: Slut på tråd – mal mer så fortsätter den |
| 13:47 | klar | notis:Storebrors skrivare: Slut på tråd – mal  | Storebrors skrivare: Slut på tråd – mal mer så fortsätter den |
| 14:16 | toast | guld | ✅ |
| 14:16 | händelse | printKlar | sak=sang n=1 |
| 14:18 | tanke | du | Sängen ska printas. |
| 14:18 | väntar | du | Sängen ska printas. |
| 14:18 | nick |  | paminn:19 |
| 14:20 | händelse | tagitUrPrint | sak=sang n=1 |
| 14:20 | struken | du | Sängen ska printas. |
| 14:20 | händelse | malKlart | id=printSang del=Dag 1 – Kom igång nasta=sov1 |
| 14:20 | kvittens | du | En säng. Jag printade en SÄNG. |
| 14:20 | väntar | du | En säng. Jag printade en SÄNG. |
| 14:20 | paket |  | lapp |
| 14:20 | kvallsrad | du | Nitton år. Inget mer tjat. Gården är full av skräp. I morgon. |
| 14:20 | väntar | du | Sängen ska in i skjulet. Sen sover jag. |
| 14:20 | MÅL |  | Sängen i skjulet |
| 14:20 | sak | du | En säng. Jag printade en SÄNG. |
| 14:20 | röst | du | En säng. Jag printade en SÄNG. · STORY |
| 14:20 | målruta |  | Sängen i skjulet |
| 14:23 | klar | du | En säng. Jag printade en SÄNG. |
| 14:23 | sak | du | Sängen ska in i skjulet. Sen sover jag. |
| 14:23 | pil |  | Sängen i skjulet |
| 14:23 | notis | tanke | 💭 Sängen ska in i skjulet. Sen sover jag. |
| 14:23 | röst | du | Sängen ska in i skjulet. Sen sover jag. · MÅL |
| 14:23 | nick |  | nick:20 |
| 14:26 | klar | du | Sängen ska in i skjulet. Sen sover jag. |
| 14:44 | nattkort | du | 🌙 Dag 1 är slut. God natt. zzz… i en riktig säng Nitton år. Inget mer tjat. Gården är full av skräp. I morgon. DAGENS PRINTAR Nyckelring × 20 Blomkruka × 1 Sän |

<details><summary>Botens handlingar dag 1</summary>

- 0:17 gå till brädhögen (3 m) (5 kr)
- 0:35 gå till cykeln vid vägen (2 m) (5 kr)
- 0:54 gå till rutan i linje 1 (13 m) (5 kr)
- 1:40 gå till cykeln (lyfter den) (13 m) (5 kr)
- 1:52 gå till cykelns plats (11 m) (5 kr)
- 2:03 gå till fel håll en bit (4 m) (5 kr)
- 2:05 gå till skrivaren (2 m) (5 kr)
- 2:07 printar Nyckelring (5 kr)
- 2:14 tar ut 1 st ur skrivaren (5 kr)
- 2:30 printar Nyckelring (sista av storebrors rulle) (5 kr)
- 2:59 nybörjaren ser ingen pil – tittar runt (5 kr)
- 3:04 tar ut 1 st ur skrivaren (5 kr)
- 3:05 gå till fel håll en bit (4 m) (5 kr)
- 3:16 gå till Ali (26 m) (5 kr)
- 3:16 öppnar Alis butik – sälja de två nyckelringarna (5 kr)
- 3:18 säljer hos Ali: +30 kr (35 kr)
- 3:36 öppnar Alis butik – köpa kvarnen (35 kr)
- 3:39 köper gammalkvarn för 30 kr (5 kr)
- 3:40 köpte kvarnen (5 kr)
- 4:08 gå till kvarnens ruta (28 m) (5 kr)
- 4:29 plockar 3 skräp på gården (bär max 3) (5 kr)
- 4:34 gå till kvarnen (12 m) (5 kr)
- 4:53 gå till cykeln (3 m) (5 kr)
- 4:53 gå till skrivaren (1 m) (5 kr)
- 4:55 printar Nyckelring (5 kr)
- 5:01 tar ut 1 st ur skrivaren (5 kr)
- 5:19 printar Nyckelring (5 kr)
- 5:20 tar ut 1 st ur skrivaren (5 kr)
- 5:24 printar Nyckelring (5 kr)
- 5:26 tar ut 1 st ur skrivaren (5 kr)
- 5:37 gå till Ali (27 m) (5 kr)
- 5:37 öppnar Alis butik – sälja nyckelringar (5 kr)
- 5:39 säljer hos Ali: +45 kr (50 kr)
- 5:51 nybörjaren ser ingen pil – tittar runt (50 kr)
- 5:55 öppnar Alis butik – Ali (powerbanken) (50 kr)
- 6:12 gå till koppla powerbanken till cykeln (24 m) (50 kr)
- 6:33 tjänar pengar till väntar på flaskhalsen för grip: 50/90 kr → printar nyckelring (15 kr) (50 kr)
- 6:34 gå till skrivaren (2 m) (50 kr)
- 6:36 printar Nyckelring (50 kr)
- 6:39 tar ut 1 st ur skrivaren (50 kr)
- 6:40 printar Nyckelring (50 kr)
- 6:51 plockar 3 skräp på gården (bär max 3) (50 kr)
- 6:58 gå till kvarnen (18 m) (50 kr)
- 7:02 gå till skrivaren (3 m) (50 kr)
- 7:02 tar ut 1 st ur skrivaren (50 kr)
- 7:04 printar Nyckelring (50 kr)
- 7:06 tar ut 1 st ur skrivaren (50 kr)
- 7:16 gå till Ali (28 m) (50 kr)
- 7:16 öppnar Alis butik – sälja (50 kr)
- 7:18 säljer hos Ali: +45 kr (95 kr)
- 7:24 tjänar pengar till väntar på flaskhalsen för grip: 105/145 kr → printar nyckelring (15 kr) (105 kr)
- 7:34 gå till skrivaren (25 m) (105 kr)
- 7:35 printar Nyckelring (105 kr)
- 7:38 tar ut 1 st ur skrivaren (105 kr)
- 7:39 printar Nyckelring (105 kr)
- 7:42 tar ut 1 st ur skrivaren (105 kr)
- 7:43 printar Nyckelring (105 kr)
- 7:44 gå till cykeln (1 m) (105 kr)
- 7:46 tar ut 1 st ur skrivaren (105 kr)
- 7:55 gå till Ali (25 m) (105 kr)
- 7:55 öppnar Alis butik – sälja (105 kr)
- 7:57 säljer hos Ali: +45 kr (150 kr)
- 7:59 tjänar pengar till väntar på flaskhalsen för grip: 150/190 kr → printar nyckelring (15 kr) (150 kr)
- 8:08 gå till skrivaren (25 m) (150 kr)
- 8:10 printar Nyckelring (150 kr)
- 8:12 tar ut 1 st ur skrivaren (150 kr)
- 8:14 printar Nyckelring (150 kr)
- 8:16 tar ut 1 st ur skrivaren (150 kr)
- 8:18 printar Nyckelring (150 kr)
- 8:20 tar ut 1 st ur skrivaren (150 kr)
- 8:29 gå till Ali (25 m) (150 kr)
- 8:29 öppnar Alis butik – sälja (150 kr)
- 8:32 säljer hos Ali: +45 kr (195 kr)
- 8:33 tjänar pengar till väntar på flaskhalsen för grip: 195/235 kr → printar nyckelring (15 kr) (195 kr)
- 8:42 gå till skrivaren (25 m) (195 kr)
- 8:44 printar Nyckelring (195 kr)
- 8:46 tar ut 1 st ur skrivaren (195 kr)
- 8:48 printar Nyckelring (195 kr)
- 8:49 gå till cykeln (1 m) (195 kr)
- 8:51 tar ut 1 st ur skrivaren (195 kr)
- 8:53 printar Nyckelring (195 kr)
- 8:55 tar ut 1 st ur skrivaren (195 kr)
- 9:04 gå till Ali (25 m) (195 kr)
- 9:04 öppnar Alis butik – sälja (195 kr)
- 9:06 säljer hos Ali: +45 kr (240 kr)
- 9:08 tjänar pengar till väntar på flaskhalsen för grip: 240/280 kr → printar nyckelring (15 kr) (240 kr)
- 9:16 plockar 3 skräp på gården (bär max 3) (240 kr)
- 9:26 gå till kvarnen (28 m) (240 kr)
- 9:31 gå till skrivaren (1 m) (240 kr)
- 9:32 printar Nyckelring (240 kr)
- 9:44 plockar 3 skräp på gården (bär max 3) (240 kr)
- 9:53 gå till kvarnen (24 m) (240 kr)
- 9:56 gå till skrivaren (1 m) (240 kr)
- 9:56 tar ut 1 st ur skrivaren (240 kr)
- 10:07 gå till Ali (28 m) (240 kr)
- 10:07 öppnar Alis butik – sälja (240 kr)
- 10:08 säljer hos Ali: +15 kr (255 kr)
- 10:09 tjänar pengar till väntar på flaskhalsen för grip: 255/280 kr → printar nyckelring (15 kr) (255 kr)
- 10:18 gå till skrivaren (25 m) (255 kr)
- 10:20 printar Nyckelring (255 kr)
- 10:22 tar ut 1 st ur skrivaren (255 kr)
- 10:24 printar Nyckelring (255 kr)
- 10:26 tar ut 1 st ur skrivaren (255 kr)
- 10:35 gå till Ali (25 m) (255 kr)
- 10:35 öppnar Alis butik – sälja (255 kr)
- 10:37 säljer hos Ali: +30 kr (285 kr)
- 10:39 öppnar Alis butik – köpa skräpgrip (285 kr)
- 10:41 köper grip för 50 kr (235 kr)
- 11:00 gå till skrivaren (25 m) (235 kr)
- 11:01 printar Skräpgrip (235 kr)
- 11:02 gå till cykeln (1 m) (235 kr)
- 11:06 tar ut 1 st ur skrivaren (235 kr)
- 11:10 tar på grip (235 kr)
- 11:20 gå till Ali (25 m) (235 kr)
- 11:20 öppnar Alis butik – köpa receptet blomkruka (235 kr)
- 11:22 köper kruka för 40 kr (195 kr)
- 11:47 gå till skrivaren (25 m) (195 kr)
- 11:48 printar Blomkruka (195 kr)
- 11:52 tar ut 1 st ur skrivaren (195 kr)
- 12:06 nybörjaren ser ingen pil – tittar runt (195 kr)
- 12:19 gå till Ali (25 m) (195 kr)
- 12:19 öppnar Alis butik – sälja krukan (195 kr)
- 12:21 säljer hos Ali: +70 kr (265 kr)
- 12:34 öppnar Alis butik – köpa sängen (265 kr)
- 12:37 köper sang för 60 kr (205 kr)
- 13:01 gå till dit pilen pekar (30 m) (205 kr)
- 13:20 plockar 6 skräp på gården (bär max 6) (205 kr)
- 13:32 gå till kvarnen (33 m) (205 kr)
- 13:36 gå till skrivaren (3 m) (205 kr)
- 13:38 printar Säng (205 kr)
- 13:39 gå till cykeln (1 m) (205 kr)
- 14:06 plockar 6 skräp på gården (bär max 6) (205 kr)
- 14:14 gå till kvarnen (23 m) (205 kr)
- 14:20 gå till skrivaren (3 m) (205 kr)
- 14:20 tar ut 1 st ur skrivaren (205 kr)
- 14:41 gå till sängplatsen i skjulet (21 m) (205 kr)

</details>

## Dag 2

| Tid | Källa | Vem | Text |
|---|---|---|---|
| 14:44 | vara | ali | kruka |
| 14:44 | händelse | malKlart | id=sov1 del=Dag 1 – Kom igång nasta=kopMotor |
| 14:44 | MÅL |  | Mal skräp, printa och sälj |
| 0:01 | händelse | dagenBorjar | dag=2 |
| 0:01 | meddelande | du | Dag 2. 20 dagar till jul. Utan dörr blåser natten rakt in. |
| 0:01 | dagbokkort | du | Tippen bredvid · Dag 2. 20 dagar till jul. Utan dörr blåser natten rakt in. |
| 0:01 | röst | du | Dag 2. 20 dagar till jul. Tippen bredvid. Utan dörr blåser natten rakt in. · STORY |
| 0:07 | väntar | notis:morgon | Ali vill ha idag: Blomkruka · +50 % |
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
| 0:17 | klar | du | Vevandet tar på armarna. Ali har en motor till kvarnen. |
| 0:19 | sak | notis:morgon | Ali vill ha idag: Blomkruka · +50 % |
| 0:19 | notis |  | Blomkruka · +50 % |
| 0:20 | väntar | ali | Ali här. Såg skylten. Stavningen är rätt. Det är mer än många. |
| 0:23 | klar | notis:morgon | Ali vill ha idag: Blomkruka · +50 % |
| 0:25 | sak | notis:Första natten i en riktig säng. Jag prin | Första natten i en riktig säng. Jag printade den själv. |
| 0:25 | notis | dagbok | Första natten i en riktig säng. Jag printade den själv. |
| 0:27 | klar | notis:Första natten i en riktig säng. Jag prin | Första natten i en riktig säng. Jag printade den själv. |
| 0:32 | händelse | printStart | sak=kruka |
| 0:34 | toast | fel | Ingen ström – trampa cykeln |
| 0:37 | toast | guld | ✅ |
| 0:37 | händelse | printKlar | sak=kruka n=2 |
| 0:37 | händelse | tagitUrPrint | sak=kruka n=1 |
| 0:37 | struken | kedja | kruka |
| 0:42 | hjälp | kontroll | R: Vrid innan du ställer ner |
| 0:44 | väntar | foto | Egen säng |
| 0:44 | paket |  | tanke |
| 0:44 | tanke | du | Tänk att jag ska få sova i min egen säng. |
| 0:44 | väntar | du | Tänk att jag ska få sova i min egen säng. |
| 0:47 | röst | ali | Jag ser 3D-skrivarvideor på YouTube i lagret. Inte för att jag har tid. Jag har aldrig tid. · STORY |
| 0:47 | butiksbubbla | ali | Jag ser 3D-skrivarvideor på YouTube i lagret. Inte för att jag har tid. Jag har aldrig tid. |
| 0:48 | aliSalt | ali | 105 |
| 0:48 | butiksbubbla | ali | Precis vad jag ville ha idag. 105 kr – med extra. |
| 0:49 | väntar | ali | Precis det jag ville ha idag, min vän. |
| 0:51 | sak | ali | Precis det jag ville ha idag, min vän. |
| 0:51 | röst | ali | Precis det jag ville ha idag, min vän. · STORY |
| 0:54 | klar | ali | Precis det jag ville ha idag, min vän. |
| 1:04 | okänt ord bytt | info | 🚛 Sopbilen tippade en ny last på soptippen! |
| 1:04 | väntar | info:guld | 🚛 Sopbilen tippade en ny last på soptippen! |
| 1:04 | lapp | 📔 Dagbok | Sopbilen tippade en ny last. Allt det skräpet – och grinden är låst. |
| 1:04 | okänt ord bytt | du | Sopbilen tippade en ny last. Allt det skräpet – och grinden är låst. |
| 1:04 | dagbokrad | du | En stor bil tippade en ny last. Allt det skräpet – och grinden är låst. |
| 1:04 | väntar | notis:En stor bil tippade en ny last. Allt det | En stor bil tippade en ny last. Allt det skräpet – och grinden är låst. |
| 1:04 | skratt | du | däcket rullar iväg |
| 1:04 | paket |  | tanke |
| 1:04 | tanke | du | Däcket ville inte stanna. Jag förstår det. |
| 1:04 | väntar | du | Däcket ville inte stanna. Jag förstår det. |
| 1:04 | sak | info:guld | 🚛 Sopbilen tippade en ny last på soptippen! |
| 1:04 | kvitto-visas | info:guld | 🚛 Sopbilen tippade en ny last på soptippen! |
| 1:04 | toast | guld | 🚛 En stor bil tippade en ny last på soptippen! |
| 1:06 | klar | info:guld | 🚛 Sopbilen tippade en ny last på soptippen! |
| 1:07 | händelse | printStart | sak=kruka |
| 1:09 | sak | notis:En stor bil tippade en ny last. Allt det | En stor bil tippade en ny last. Allt det skräpet – och grinden är låst. |
| 1:09 | notis | dagbok | En stor bil tippade en ny last. Allt det skräpet – och grinden är låst. |
| 1:10 | toast | guld | ✅ |
| 1:10 | händelse | printKlar | sak=kruka n=3 |
| 1:10 | händelse | tagitUrPrint | sak=kruka n=1 |
| 1:11 | klar | notis:En stor bil tippade en ny last. Allt det | En stor bil tippade en ny last. Allt det skräpet – och grinden är låst. |
| 1:21 | aliSalt | ali | 105 |
| 1:27 | struken | du | Däcket ville inte stanna. Jag förstår det. |
| 1:34 | händelse | printStart | sak=kruka |
| 1:35 | toast | fel | Ingen ström – trampa cykeln |
| 1:38 | toast | guld | ✅ |
| 1:38 | händelse | printKlar | sak=kruka n=4 |
| 1:38 | händelse | tagitUrPrint | sak=kruka n=1 |
| 1:43 | struken | ali | Ali här. Såg skylten. Stavningen är rätt. Det är mer än många. |
| 1:44 | sak | foto | Egen säng |
| 1:44 | foto | du | Egen säng |
| 1:47 | klar | foto | Egen säng |
| 1:48 | hjälp | kontroll | R: Vrid innan du ställer ner |
| 1:49 | aliSalt | ali | 105 |
| 1:55 | sak | du | Tänk att jag ska få sova i min egen säng. |
| 1:55 | notis | tanke | 💭 Tänk att jag ska få sova i min egen säng. |
| 1:55 | röst | du | Tänk att jag ska få sova i min egen säng. · STORY |
| 1:58 | klar | du | Tänk att jag ska få sova i min egen säng. |
| 2:00 | skratt | du | falsk tuta |
| 2:02 | väntar | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått generator. Vi tar en låt på det. Den här är till dig, Gunnar. |
| 2:02 | radio | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått generator. Vi tar en låt på det. Den här är till dig, Gunnar. |
| 2:02 | skratt | du | Radio-Kjelle |
| 2:02 | sak | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått generator. Vi tar en låt på det. Den här är till dig, Gunnar. |
| 2:02 | notis |  | 📻 Radio Tippen: Radio Tippen, Kjelle här. Skjulet vid tippen har fått generator. Vi tar en låt på det. Den här är till dig, Gunnar. |
| 2:02 | röst | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått generator. Vi tar en låt på det. Den här är till dig, Gunnar. · REAKTION |
| 2:02 | sopsack | rolf | Sopsäckarna landade på gården |
| 2:02 | paket |  | tanke → ge |
| 2:02 | tanke | du | Hmm, vad kastade gubben ut ur sopbilen? Jag går och kollar. |
| 2:02 | väntar | du | Hmm, vad kastade gubben ut ur sopbilen? Jag går och kollar. |
| 2:02 | väntar |  | (läget ändras) |
| 2:11 | klar | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått generator. Vi tar en låt på det. Den här är till dig, Gunnar. |
| 2:13 | sak | du | Hmm, vad kastade gubben ut ur sopbilen? Jag går och kollar. |
| 2:13 | notis | tanke | 💭 Hmm, vad kastade gubben ut ur sopbilen? Jag går och kollar. |
| 2:13 | röst | du | Hmm, vad kastade gubben ut ur sopbilen? Jag går och kollar. · STORY |
| 2:18 | klar | du | Hmm, vad kastade gubben ut ur sopbilen? Jag går och kollar. |
| 2:20 | sak |  | (läget ändras) |
| 2:20 | klar |  | (läget ändras) |
| 2:24 | händelse | printStart | sak=kruka |
| 2:26 | toast | guld | ✅ |
| 2:26 | händelse | printKlar | sak=kruka n=5 |
| 2:27 | händelse | tagitUrPrint | sak=kruka n=1 |
| 2:39 | aliSalt | ali | 105 |
| 2:52 | händelse | printStart | sak=kruka |
| 2:53 | toast | fel | Ingen ström – trampa cykeln |
| 2:53 | väntar | notis:Storebrors skrivare: Ingen ström – tramp | Storebrors skrivare: Ingen ström – trampa cykeln |
| 2:55 | toast | guld | ✅ |
| 2:55 | händelse | printKlar | sak=kruka n=6 |
| 2:56 | händelse | tagitUrPrint | sak=kruka n=1 |
| 3:02 | hjälp | kontroll | R: Vrid innan du ställer ner |
| 3:06 | skratt | du | falsk tuta |
| 3:07 | aliSalt | ali | 105 |
| 3:16 | struken | notis:Storebrors skrivare: Ingen ström – tramp | Storebrors skrivare: Ingen ström – trampa cykeln |
| 3:16 | upplåst | mala | kvarnmotor |
| 3:16 | brott | RESERV | kvarnmotor (mala 14 av 6) |
| 3:16 | händelse | upplast | id=kvarnmotor flask=mala |
| 3:16 | paket |  | sms |
| 3:16 | väntar | ali | Ali här. En motor? Jag har en. Från en gammal tvättmaskin. Den centrifugerar fortfarande om man ber snällt. |
| 3:37 | paket |  | tanke |
| 3:37 | tanke | du | Jaha. En kalsong. Använd. |
| 3:37 | väntar | du | Jaha. En kalsong. Använd. |
| 3:37 | skratt | du | kvarnen spottar |
| 3:43 | händelse | printStart | sak=kruka |
| 3:46 | väntar | mamma | Har du frusit än? |
| 3:46 | toast | guld | ✅ |
| 3:46 | händelse | printKlar | sak=kruka n=7 |
| 3:46 | händelse | tagitUrPrint | sak=kruka n=1 |
| 3:57 | sak | ali | Ali här. En motor? Jag har en. Från en gammal tvättmaskin. Den centrifugerar fortfarande om man ber snällt. |
| 3:57 | sms | ali | Ali här. En motor? Jag har en. Från en gammal tvättmaskin. Den centrifugerar fortfarande om man ber snällt. |
| 3:57 | sms-bubbla | ali | Ali här. En motor? Jag har en. Från en gammal tvättmaskin. Den centrifugerar fortfarande om man ber snällt. |
| 3:57 | röst | ali | Ali här. En motor? Jag har en. Från en gammal tvättmaskin. Den centrifugerar fortfarande om man ber snällt. · STORY |
| 3:58 | aliSalt | ali | 105 |
| 4:06 | klar | ali | Ali här. En motor? Jag har en. Från en gammal tvättmaskin. Den centrifugerar fortfarande om man ber snällt. |
| 4:08 | struken | du | Jaha. En kalsong. Använd. |
| 4:10 | struken | info:guld | 3D-modell köpt – printa kvarnmotor |
| 4:10 | händelse | kopt | sak=kvarnmotor |
| 4:11 | händelse | malKlart | id=kopMotor del=Dag 2 – Tippen bredvid nasta=monteraMotor |
| 4:11 | struken | kedja | motorKopt |
| 4:11 | väntar | du | Motorn ska sitta där veven sitter. Jag printar den först. |
| 4:11 | målruta |  | Printa kvarnmotorn till kvarnen |
| 4:11 | MÅL |  | Printa kvarnmotorn till kvarnen |
| 4:12 | sak | du | Motorn ska sitta där veven sitter. Jag printar den först. |
| 4:12 | pil |  | Printa kvarnmotorn till kvarnen |
| 4:12 | notis | tanke | 💭 Motorn ska sitta där veven sitter. Jag printar den först. |
| 4:12 | röst | du | Motorn ska sitta där veven sitter. Jag printar den först. · MÅL |
| 4:12 | nick |  | nick:22 |
| 4:15 | kvittens-bock |  | ✓ Köp kvarnmotorn hos Ali (50 kr) |
| 4:16 | klar | du | Motorn ska sitta där veven sitter. Jag printar den först. |
| 4:36 | händelse | printStart | sak=byggsats:kvarnmotor |
| 4:37 | toast | fel | Ingen ström – trampa cykeln |
| 4:39 | händelse | printKlar | sak=byggsats:kvarnmotor n=1 |
| 4:39 | toast | guld | ✅ |
| 4:40 | väntar | info:guld | ⚙️ Kvarnmotorn ska skruvas fast på kvarnen. |
| 4:40 | händelse | tagitUrPrint | sak=byggsats:kvarnmotor n=1 |
| 4:40 | paket |  | sms |
| 4:40 | väntar | ali | Ali här. Ännu en ritning som blev på riktigt: Kvarnmotor. Semesterkassan växer. Livet växer. |
| 4:40 | sak | info:guld | ⚙️ Kvarnmotorn ska skruvas fast på kvarnen. |
| 4:40 | kvitto-visas | info:guld | ⚙️ Kvarnmotorn ska skruvas fast på kvarnen. |
| 4:40 | toast | guld | ⚙️ Kvarnmotorn ska skruvas fast på kvarnen. |
| 4:42 | klar | info:guld | ⚙️ Kvarnmotorn ska skruvas fast på kvarnen. |
| 4:45 | väntar | info:guld | ⚙️ Motorn sitter där veven satt – nu mal kvarnen själv. |
| 4:45 | händelse | monterat | sak=kvarnmotor |
| 4:45 | paket |  | tanke |
| 4:45 | tanke | du | Motorn sitter där veven satt. Mina armar tackar. |
| 4:45 | väntar | du | Motorn sitter där veven satt. Mina armar tackar. |
| 4:45 | monterat | du | byggsats:kvarnmotor |
| 4:45 | händelse | monterat | sak=kvarnmotor |
| 4:45 | sak | info:guld | ⚙️ Motorn sitter där veven satt – nu mal kvarnen själv. |
| 4:45 | kvitto-visas | info:guld | ⚙️ Motorn sitter där veven satt – nu mal kvarnen själv. |
| 4:45 | toast | guld | ⚙️ Motorn sitter där veven satt – nu mal kvarnen själv. |
| 4:45 | händelse | malKlart | id=monteraMotor del=Dag 2 – Tippen bredvid nasta=kopSack |
| 4:45 | struken | du | Motorn sitter där veven satt. Mina armar tackar. |
| 4:45 | väntar | du | Gården är full av skräp. Jag börjar vid skjulet. |
| 4:45 | MÅL |  | Kolla vad som flög ut från sopbilen |
| 4:47 | klar | info:guld | ⚙️ Motorn sitter där veven satt – nu mal kvarnen själv. |
| 4:47 | målruta |  | Kolla vad som flög ut från sopbilen |
| 4:49 | kvittens-bock |  | ✓ Printa kvarnmotorn till kvarnen |
| 4:49 | sak | du | Gården är full av skräp. Jag börjar vid skjulet. |
| 4:49 | pil |  | Kolla vad som flög ut från sopbilen |
| 4:49 | notis | tanke | 💭 Gården är full av skräp. Jag börjar vid skjulet. |
| 4:49 | röst | du | Gården är full av skräp. Jag börjar vid skjulet. · MÅL |
| 4:53 | klar | du | Gården är full av skräp. Jag börjar vid skjulet. |
| 4:54 | skratt | du | däcket rullar iväg |
| 4:54 | paket |  | tanke |
| 4:54 | tanke | du | Däcket ville inte stanna. Jag förstår det. |
| 4:54 | väntar | du | Däcket ville inte stanna. Jag förstår det. |
| 5:01 | väntar | värld:TUUT TUUT! | TUUT TUUT! |
| 5:09 | upplåst | skrivare | rullstall |
| 5:09 | brott | UPPLÅST | rullstall (skrivare 180 av 60) |
| 5:09 | händelse | upplast | id=rullstall flask=skrivare |
| 5:09 | paket |  | tanke → sms |
| 5:09 | tanke | du | Kvarnen står och väntar för att hållaren är full. Om den rymde fler rullar kunde den mala hela tiden. |
| 5:09 | väntar | du | Kvarnen står och väntar för att hållaren är full. Om den rymde fler rullar kunde den mala hela tiden. |
| 5:09 | väntar | ali | Ali här. Rullställ. Fyra rullar i stället för en. Har ett på hyllan. |
| 5:10 | paket |  | brev → ge → tanke |
| 5:10 | väntar | rolf | Du sliter ju. Ingen gör så nuförtin. Ta dessa så går dä lättare. / grannen – ja kör sopbilen å har hand om tippen bredvid. MVH ROLF​ |
| 5:10 | väntar |  | (läget ändras) |
| 5:10 | tanke | du | Rolf… gubben i sopbilen. Han har tippen bredvid. Han verkar schysst. |
| 5:10 | okänt ord bytt | du | Rolf… gubben i sopbilen. Han har tippen bredvid. Han verkar schysst. |
| 5:10 | väntar | du | Rolf… gubben i sopbilen. Han har tippen bredvid. Han verkar schysst. |
| 5:10 | sak | rolf | Du sliter ju. Ingen gör så nuförtin. Ta dessa så går dä lättare. / grannen – ja kör sopbilen å har hand om tippen bredvid. MVH ROLF​ |
| 5:10 | lapp | Lapp från Rolf | Du sliter ju. Ingen gör så nuförtin. Ta dessa så går dä lättare. / grannen – ja kör sopbilen å har hand om tippen bredvid. MVH ROLF​ |
| 5:10 | röst | rolf | Du sliter ju. Ingen gör så nuförtin. Ta dessa så går dä lättare. / grannen – ja kör sopbilen å har hand om tippen bredvid. MVH ROLF​ · STORY |
| 5:21 | klar | rolf | Du sliter ju. Ingen gör så nuförtin. Ta dessa så går dä lättare. / grannen – ja kör sopbilen å har hand om tippen bredvid. MVH ROLF​ |
| 5:22 | hjälp | kontroll | Klick: Klicka för att ta på dig den |
| 5:22 | väntar | info:guld | 🗑️ Sopsäcken är över axeln! Nu bär jag 10 skräp. |
| 5:22 | tog på | du | byggsats:korg |
| 5:22 | händelse | monterat | sak=korg |
| 5:22 | sak | info:guld | 🗑️ Sopsäcken är över axeln! Nu bär jag 10 skräp. |
| 5:22 | kvitto-visas | info:guld | 🗑️ Sopsäcken är över axeln! Nu bär jag 10 skräp. |
| 5:22 | toast | guld | 🗑️ Sopsäcken är över axeln! Nu bär jag 10 skräp. |
| 5:22 | händelse | malKlart | id=kopSack del=Dag 2 – Tippen bredvid nasta=n1-stada-klart-garden |
| 5:22 | händelse | malKlart | id=n1-stada-klart-garden del=Dag 2 – Tippen bredvid nasta=rolf0-brev |
| 5:22 | väntar | du | Gården är STÄDAD, av mig, frivilligt. Mamma skulle aldrig tro det. |
| 5:22 | struken | du | Däcket ville inte stanna. Jag förstår det. |
| 5:22 | väntar | du | Vänta på sopbilen. Den lämnar något. |
| 5:22 | MÅL |  | Vänta på sopbilen. Den lämnar något. |
| 5:24 | klar | info:guld | 🗑️ Sopsäcken är över axeln! Nu bär jag 10 skräp. |
| 5:24 | sak | du | Gården är STÄDAD, av mig, frivilligt. Mamma skulle aldrig tro det. |
| 5:24 | kvitto-visas | du | Gården är STÄDAD, av mig, frivilligt. Mamma skulle aldrig tro det. |
| 5:24 | lapp | 📔 Dagbok | Gården är STÄDAD, av mig, frivilligt. Mamma skulle aldrig tro det. |
| 5:24 | dagbokrad | du | Gården är STÄDAD, av mig, frivilligt. Mamma skulle aldrig tro det. |
| 5:24 | notis | dagbok | Gården är STÄDAD, av mig, frivilligt. Mamma skulle aldrig tro det. |
| 5:25 | klar | du | Gården är STÄDAD, av mig, frivilligt. Mamma skulle aldrig tro det. |
| 5:25 | målruta |  | Vänta på sopbilen. Den lämnar något. |
| 5:25 | sak | du | Vänta på sopbilen. Den lämnar något. |
| 5:25 | pil |  | Vänta på sopbilen. Den lämnar något. |
| 5:25 | röst | du | Vänta på sopbilen. Den lämnar något. · MÅL |
| 5:28 | klar | du | Vänta på sopbilen. Den lämnar något. |
| 5:29 | händelse | printStart | sak=kruka |
| 5:30 | struken | värld:TUUT TUUT! | TUUT TUUT! |
| 5:30 | sak |  | (läget ändras) |
| 5:30 | klar |  | (läget ändras) |
| 5:32 | toast | guld | ✅ |
| 5:32 | händelse | printKlar | sak=kruka n=8 |
| 5:33 | händelse | tagitUrPrint | sak=kruka n=1 |
| 5:34 | sak | du | Rolf… gubben i sopbilen. Han har tippen bredvid. Han verkar schysst. |
| 5:34 | notis | tanke | 💭 Rolf… gubben i sopbilen. Han har tippen bredvid. Han verkar schysst. |
| 5:34 | röst | du | Rolf… gubben i sopbilen. Han har tippen bredvid. Han verkar schysst. · STORY |
| 5:40 | klar | du | Rolf… gubben i sopbilen. Han har tippen bredvid. Han verkar schysst. |
| 5:42 | struken | ali | Ali här. Ännu en ritning som blev på riktigt: Kvarnmotor. Semesterkassan växer. Livet växer. |
| 5:44 | aliSalt | ali | 105 |
| 5:51 | struken | mamma | Har du frusit än? |
| 6:07 | händelse | printStart | sak=kruka |
| 6:08 | toast | fel | Ingen ström – trampa cykeln |
| 6:10 | sak | du | Kvarnen står och väntar för att hållaren är full. Om den rymde fler rullar kunde den mala hela tiden. |
| 6:10 | notis | tanke | 💭 Kvarnen står och väntar för att hållaren är full. Om den rymde fler rullar kunde den mala hela tiden. |
| 6:10 | röst | du | Kvarnen står och väntar för att hållaren är full. Om den rymde fler rullar kunde den mala hela tiden. · STORY |
| 6:11 | toast | guld | ✅ |
| 6:11 | händelse | printKlar | sak=kruka n=9 |
| 6:11 | händelse | tagitUrPrint | sak=kruka n=1 |
| 6:16 | upplåst | skrivare | trim_skrivare |
| 6:16 | brott | UPPLÅST | trim_skrivare (skrivare 60 av 60) |
| 6:16 | händelse | upplast | id=trim_skrivare flask=skrivare |
| 6:16 | paket |  | sms |
| 6:16 | väntar | ali | Ali här. Skrivartrim. Jag skruvade på min egen skrivare i natt. Den går fortare nu. Nästan för fort. |
| 6:18 | klar | du | Kvarnen står och väntar för att hållaren är full. Om den rymde fler rullar kunde den mala hela tiden. |
| 6:22 | aliSalt | ali | 105 |
| 6:26 | sak | ali | Ali här. Rullställ. Fyra rullar i stället för en. Har ett på hyllan. |
| 6:26 | sms | ali | Ali här. Rullställ. Fyra rullar i stället för en. Har ett på hyllan. |
| 6:26 | sms-bubbla | ali | Ali här. Rullställ. Fyra rullar i stället för en. Har ett på hyllan. |
| 6:26 | röst | ali | Ali här. Rullställ. Fyra rullar i stället för en. Har ett på hyllan. · STORY |
| 6:32 | klar | ali | Ali här. Rullställ. Fyra rullar i stället för en. Har ett på hyllan. |
| 6:34 | skratt | du | falsk tuta |
| 6:35 | händelse | printStart | sak=kruka |
| 6:38 | paket |  | tanke |
| 6:38 | tanke | du | Den blev… spagetti. Ali kallar det modern konst. |
| 6:38 | väntar | du | Den blev… spagetti. Ali kallar det modern konst. |
| 6:38 | skratt | du | plastspagetti |
| 6:38 | toast | guld | ✅ |
| 6:38 | händelse | printKlar | sak=kruka n=10 |
| 6:42 | paket |  | tanke → ge |
| 6:42 | tanke | du | Flaggan är uppe. Rolf har lämnat något. |
| 6:42 | väntar | du | Flaggan är uppe. Rolf har lämnat något. |
| 6:42 | väntar |  | (läget ändras) |
| 6:56 | skratt | du | falsk tuta |
| 6:58 | struken | du | Den blev… spagetti. Ali kallar det modern konst. |
| 7:19 | sak | du | Flaggan är uppe. Rolf har lämnat något. |
| 7:19 | notis | tanke | 💭 Flaggan är uppe. Rolf har lämnat något. |
| 7:19 | röst | du | Flaggan är uppe. Rolf har lämnat något. · STORY |
| 7:19 | händelse | tagitUrPrint | sak=spagetti n=1 |
| 7:22 | klar | du | Flaggan är uppe. Rolf har lämnat något. |
| 7:31 | sak | ali | Ali här. Skrivartrim. Jag skruvade på min egen skrivare i natt. Den går fortare nu. Nästan för fort. |
| 7:31 | sms | ali | Ali här. Skrivartrim. Jag skruvade på min egen skrivare i natt. Den går fortare nu. Nästan för fort. |
| 7:31 | sms-bubbla | ali | Ali här. Skrivartrim. Jag skruvade på min egen skrivare i natt. Den går fortare nu. Nästan för fort. |
| 7:31 | röst | ali | Ali här. Skrivartrim. Jag skruvade på min egen skrivare i natt. Den går fortare nu. Nästan för fort. · STORY |
| 7:32 | skratt | du | Ali köper konst |
| 7:32 | aliSalt | ali | 3 |
| 7:39 | klar | ali | Ali här. Skrivartrim. Jag skruvade på min egen skrivare i natt. Den går fortare nu. Nästan för fort. |
| 7:44 | händelse | printStart | sak=kruka |
| 7:45 | toast | fel | Ingen ström – trampa cykeln |
| 7:47 | sak |  | (läget ändras) |
| 7:47 | brev | rolf | rolf:0 |
| 7:47 | klar |  | (läget ändras) |
| 7:48 | toast | guld | ✅ |
| 7:48 | händelse | printKlar | sak=kruka n=11 |
| 7:49 | händelse | tagitUrPrint | sak=kruka n=1 |
| 8:00 | aliSalt | ali | 105 |
| 8:15 | väntar | rolf | Såg att du printar grejer. Kan du göra en sån hä? Kall öl ä viktigt. /Rolf​ |
| 8:15 | paket |  | ge |
| 8:15 | väntar |  | (läget ändras) |
| 8:15 | sak | rolf | Såg att du printar grejer. Kan du göra en sån hä? Kall öl ä viktigt. /Rolf​ |
| 8:15 | lapp | Brev från Rolf | Såg att du printar grejer. Kan du göra en sån hä? Kall öl ä viktigt. /Rolf​ |
| 8:15 | röst | rolf | Såg att du printar grejer. Kan du göra en sån hä? Kall öl ä viktigt. /Rolf​ · STORY |
| 8:15 | händelse | malKlart | id=rolf0-brev del=Dag 2 – Tippen bredvid nasta=rolf0-printa |
| 8:15 | väntar | du | Printa ölhållare med kylklamp. |
| 8:15 | MÅL |  | Printa ölhållare med kylklamp |
| 8:18 | målruta |  | Printa ölhållare med kylklamp |
| 8:20 | händelse | printStart | sak=olhallare |
| 8:20 | händelse | malKlart | id=rolf0-printa del=Dag 2 – Tippen bredvid nasta=rolf0-ge |
| 8:20 | väntar | du | Ge Rolf ölhållare med kylklamp. |
| 8:20 | MÅL |  | Ge Rolf ölhållare med kylklamp |
| 8:21 | klar | rolf | Såg att du printar grejer. Kan du göra en sån hä? Kall öl ä viktigt. /Rolf​ |
| 8:21 | händelse | brevLast | id=rolf:0 |
| 8:23 | målruta |  | Ge Rolf ölhållare med kylklamp |
| 8:23 | toast | guld | ✅ |
| 8:23 | händelse | printKlar | sak=olhallare n=1 |
| 8:23 | händelse | tagitUrPrint | sak=olhallare n=1 |
| 8:23 | struken | du | Printa ölhållare med kylklamp. |
| 8:23 | sak | du | Ge Rolf ölhållare med kylklamp. |
| 8:23 | pil |  | Ge Rolf ölhållare med kylklamp |
| 8:23 | röst | du | Ge Rolf ölhållare med kylklamp. · MÅL |
| 8:24 | kvittens-bock |  | ✓ Printa ölhållare med kylklamp |
| 8:26 | klar | du | Ge Rolf ölhållare med kylklamp. |
| 8:28 | sak |  | (läget ändras) |
| 8:28 | klar |  | (läget ändras) |
| 8:35 | hjälp | kontroll | E: Ryggsäcken och kistan |
| 8:36 | väntar | bud | (tips) |
| 8:36 | sak | bud | (tips) |
| 8:36 | väntar | du | Klart! Nu lägger jag den i Rolfs brevlåda vid grinden. |
| 8:37 | klar | bud | (tips) |
| 8:39 | sak | du | Klart! Nu lägger jag den i Rolfs brevlåda vid grinden. |
| 8:39 | röst | du | Klart! Nu lägger jag den i Rolfs brevlåda vid grinden. · MÅL |
| 8:42 | händelse | lagtIPostlada | sak=olhallare rolf=0 jobb=false |
| 8:42 | struken | kedja | rolf0 |
| 8:42 | paket |  | tanke |
| 8:42 | tanke | du | Flaggan uppe. Nu får Rolf hämta den. |
| 8:42 | väntar | du | Flaggan uppe. Nu får Rolf hämta den. |
| 8:42 | händelse | malKlart | id=rolf0-ge del=Dag 2 – Tippen bredvid nasta=vindsnurra |
| 8:42 | struken | du | Flaggan uppe. Nu får Rolf hämta den. |
| 8:42 | väntar | du | En vindsnurra på skjulets tak. Då blir det ström när det blåser. |
| 8:42 | målruta |  | Trampa, printa och sälj |
| 8:43 | MÅL |  | Trampa, printa och sälj |
| 8:43 | upplåst | trampa | vindsnurra |
| 8:43 | brott | UPPLÅST | vindsnurra (trampa 29 av 6) |
| 8:43 | händelse | upplast | id=vindsnurra flask=trampa |
| 8:43 | paket |  | tanke → sms |
| 8:43 | tanke | du | Mina ben är slut. Det blåser hela tiden här ute. Tänk om vinden kunde trampa åt mig. |
| 8:43 | väntar | du | Mina ben är slut. Det blåser hela tiden här ute. Tänk om vinden kunde trampa åt mig. |
| 8:43 | väntar | ali | Ali här. Vindsnurra till cykeln. Vinden trampar åt dig. Den är lat, men den jobbar gratis. |
| 8:44 | klar | du | Klart! Nu lägger jag den i Rolfs brevlåda vid grinden. |
| 8:46 | sak | du | En vindsnurra på skjulets tak. Då blir det ström när det blåser. |
| 8:46 | pil |  | Printa vindsnurran till taket |
| 8:46 | notis | tanke | 💭 En vindsnurra på skjulets tak. Då blir det ström när det blåser. |
| 8:46 | röst | du | En vindsnurra på skjulets tak. Då blir det ström när det blåser. · MÅL |
| 8:46 | nick |  | nick:28 |
| 8:46 | kvittens-bock |  | ✓ Ge Rolf ölhållare med kylklamp |
| 8:51 | väntar | värld:TUUT! Hej grannen! | TUUT! Hej grannen! |
| 8:51 | klar | du | En vindsnurra på skjulets tak. Då blir det ström när det blåser. |
| 8:53 | sak | du | Mina ben är slut. Det blåser hela tiden här ute. Tänk om vinden kunde trampa åt mig. |
| 8:53 | notis | tanke | 💭 Mina ben är slut. Det blåser hela tiden här ute. Tänk om vinden kunde trampa åt mig. |
| 8:53 | röst | du | Mina ben är slut. Det blåser hela tiden här ute. Tänk om vinden kunde trampa åt mig. · STORY |
| 9:00 | klar | du | Mina ben är slut. Det blåser hela tiden här ute. Tänk om vinden kunde trampa åt mig. |
| 9:08 | sak | ali | Ali här. Vindsnurra till cykeln. Vinden trampar åt dig. Den är lat, men den jobbar gratis. |
| 9:08 | sms | ali | Ali här. Vindsnurra till cykeln. Vinden trampar åt dig. Den är lat, men den jobbar gratis. |
| 9:08 | sms-bubbla | ali | Ali här. Vindsnurra till cykeln. Vinden trampar åt dig. Den är lat, men den jobbar gratis. |
| 9:08 | röst | ali | Ali här. Vindsnurra till cykeln. Vinden trampar åt dig. Den är lat, men den jobbar gratis. · STORY |
| 9:14 | röst | ali | Rolf gav mig en kanna. Som min farmors. Jag ritade en sak åt honom. Säg inget, han gråter lätt. · STORY |
| 9:14 | butiksbubbla | ali | Rolf gav mig en kanna. Som min farmors. Jag ritade en sak åt honom. Säg inget, han gråter lätt. |
| 9:15 | struken | info:guld | 3D-modell köpt – printa vindsnurra till skjultaket |
| 9:15 | händelse | kopt | sak=vindsnurra |
| 9:18 | klar | ali | Ali här. Vindsnurra till cykeln. Vinden trampar åt dig. Den är lat, men den jobbar gratis. |
| 9:20 | struken | värld:TUUT! Hej grannen! | TUUT! Hej grannen! |
| 9:28 | händelse | printStart | sak=byggsats:vindsnurra |
| 9:28 | toast | fel | Ingen ström – trampa cykeln |
| 9:33 | händelse | printKlar | sak=byggsats:vindsnurra n=1 |
| 9:33 | toast | guld | ✅ |
| 9:33 | väntar | info:guld | 🌬️ Vindsnurran ska upp på skjulets tak. |
| 9:33 | händelse | tagitUrPrint | sak=byggsats:vindsnurra n=1 |
| 9:33 | sak | info:guld | 🌬️ Vindsnurran ska upp på skjulets tak. |
| 9:33 | kvitto-visas | info:guld | 🌬️ Vindsnurran ska upp på skjulets tak. |
| 9:33 | toast | guld | 🌬️ Vindsnurran ska upp på skjulets tak. |
| 9:35 | klar | info:guld | 🌬️ Vindsnurran ska upp på skjulets tak. |
| 9:45 | händelse | placerat | sak=vindsnurra |
| 9:45 | kvittens | du | Den snurrar! Långsamt. Men den snurrar. |
| 9:45 | varför-köad | du | Om det regnar i natt drunknar jag. Ett tak. |
| 9:45 | väntar | du | Den snurrar! Långsamt. Men den snurrar. |
| 9:45 | väntar | info:guld | 🌬️ Vindsnurran sitter på taket – den trampar cykeln åt mig när det blåser |
| 9:45 | monterat | du | byggsats:vindsnurra |
| 9:45 | händelse | monterat | sak=vindsnurra |
| 9:45 | sak | du | Den snurrar! Långsamt. Men den snurrar. |
| 9:45 | notis | tanke | 💭 Den snurrar! Långsamt. Men den snurrar. |
| 9:45 | röst | du | Den snurrar! Långsamt. Men den snurrar. · STORY |
| 9:45 | händelse | malKlart | id=vindsnurra del=Dag 2 – Tippen bredvid nasta=n1-bygg-dorr-skjulet |
| 9:45 | väntar | du | Det drar från dörrhålet. En dörr kan jag printa. |
| 9:45 | MÅL |  | Bygg en dörr till skjulet |
| 9:47 | målruta |  | Bygg en dörr till skjulet |
| 9:48 | klar | du | Den snurrar! Långsamt. Men den snurrar. |
| 9:51 | sak | du | Det drar från dörrhålet. En dörr kan jag printa. |
| 9:51 | pil |  | Bygg en dörr till skjulet |
| 9:51 | notis | tanke | 💭 Det drar från dörrhålet. En dörr kan jag printa. |
| 9:51 | röst | du | Det drar från dörrhålet. En dörr kan jag printa. · MÅL |
| 9:51 | nick |  | nick:29 |
| 9:55 | klar | du | Det drar från dörrhålet. En dörr kan jag printa. |
| 9:55 | struken | info:guld | 🌬️ Vindsnurran sitter på taket – den trampar cykeln åt mig när det blåser |
| 10:03 | struken | info:guld | 3D-modell köpt – printa dörr |
| 10:03 | händelse | kopt | sak=dorr |
| 10:16 | händelse | printStart | sak=byggsats:dorr |
| 10:19 | toast | bra | Del 1 av 2 klar |
| 10:19 | väntar | notis:Storebrors skrivare: Del 1 av 2 klar | Storebrors skrivare: Del 1 av 2 klar |
| 10:19 | sak | notis:Storebrors skrivare: Del 1 av 2 klar | Storebrors skrivare: Del 1 av 2 klar |
| 10:19 | notis | bra | Storebrors skrivare: Del 1 av 2 klar |
| 10:22 | klar | notis:Storebrors skrivare: Del 1 av 2 klar | Storebrors skrivare: Del 1 av 2 klar |
| 10:23 | händelse | printKlar | sak=byggsats:dorr n=1 |
| 10:23 | toast | guld | ✅ |
| 10:23 | händelse | tagitUrPrint | sak=byggsats:dorr n=1 |
| 10:23 | paket |  | sms |
| 10:23 | väntar | ali | Ali här. Jag har inte sovit. Inte på grund av AI:n. På grund av dig. Du bygger saker av sopor. Jag har en hel butik och bygger ingenting. Det ska ändras. Kanske. Troligen. |
| 10:24 | skratt | du | falsk tuta |
| 10:30 | hjälp | kontroll | E: Ryggsäcken och kistan |
| 10:31 | väntar | info:guld | Dörr på plats! Trivsel +8 |
| 10:31 | sak | info:guld | Dörr på plats! Trivsel +8 |
| 10:31 | kvitto-visas | info:guld | Dörr på plats! Trivsel +8 |
| 10:31 | toast | guld | Dörr på plats! Trivsel +8 |
| 10:31 | händelse | malKlart | id=n1-bygg-dorr-skjulet del=Dag 2 – Tippen bredvid nasta=sov2 |
| 10:31 | paket |  | lapp |
| 10:31 | väntar | du | Nu vet Ali att jag bor HÄR. Taket läcker. I morgon. |
| 10:31 | paket |  | sms |
| 10:31 | väntar | bror | Mamma ringde mig fyra gånger förresten. Snyggt jobbat 😂 |
| 10:31 | skratt | bror | Mamma ringde mig fyra gånger förresten. |
| 10:31 | väntar | du | Klart för idag – sov när du vill. |
| 10:31 | MÅL |  | Klart för idag – sov när du vill |
| 10:33 | klar | info:guld | Dörr på plats! Trivsel +8 |
| 10:34 | målruta |  | Klart för idag – sov när du vill |
| 10:35 | kvittens-bock |  | ✓ Bygg en dörr till skjulet |
| 10:35 | sak | du | Klart för idag – sov när du vill. |
| 10:35 | pil |  | Klart för idag – sov när du vill |
| 10:35 | röst | du | Klart för idag – sov när du vill. · MÅL |
| 10:38 | klar | du | Klart för idag – sov när du vill. |
| 10:38 | väntar | notis:🌇 Klockan är 21. Ali slår igen luckan.  | 🌇 Klockan är 21. Ali slår igen luckan. Dagens jobb är klart – gå in i skjulet och sov i sängen. |
| 10:40 | sak | du | Nu vet Ali att jag bor HÄR. Taket läcker. I morgon. |
| 10:40 | kvallsrad | du | Nu vet Ali att jag bor HÄR. Taket läcker. I morgon. |
| 10:40 | klar | du | Nu vet Ali att jag bor HÄR. Taket läcker. I morgon. |
| 10:41 | paket |  | tanke |
| 10:41 | tanke | du | Jaha, Rolf har hämtat en ölhållare med kylklamp. |
| 10:41 | väntar | du | Jaha, Rolf har hämtat en ölhållare med kylklamp. |
| 10:48 | sak | du | Jaha, Rolf har hämtat en ölhållare med kylklamp. |
| 10:48 | notis | tanke | 💭 Jaha, Rolf har hämtat en ölhållare med kylklamp. |
| 10:48 | röst | du | Jaha, Rolf har hämtat en ölhållare med kylklamp. · REAKTION |
| 10:52 | klar | du | Jaha, Rolf har hämtat en ölhållare med kylklamp. |
| 10:55 | nattkort | du | 🌙 Dag 2 är slut. God natt. zzz… Nu vet Ali att jag bor HÄR. Taket läcker. I morgon. DAGENS PRINTAR Blomkruka × 10 Ölhållare med kylklamp × 1 Totalt 11 printar |

<details><summary>Botens handlingar dag 2</summary>

- 0:00 — dag 2 börjar — (205 kr)
- 0:07 popup: "FORTSÄTT" (205 kr)
- 0:17 nybörjaren ser ingen pil – tittar runt (205 kr)
- 0:21 tjänar pengar till väntar på flaskhalsen för kvarnmotor: 205/245 kr → printar blomkruka (105 kr) (205 kr)
- 0:23 gå till fel håll en bit (4 m) (205 kr)
- 0:31 gå till skrivaren (19 m) (205 kr)
- 0:32 printar Blomkruka (205 kr)
- 0:35 gå till cykeln (2 m) (205 kr)
- 0:38 tar ut 1 st ur skrivaren (205 kr)
- 0:47 gå till Ali (26 m) (205 kr)
- 0:47 öppnar Alis butik – sälja (205 kr)
- 0:49 säljer hos Ali: +105 kr (310 kr)
- 0:56 tjänar pengar till väntar på flaskhalsen för kvarnmotor: 310/350 kr → printar blomkruka (105 kr) (310 kr)
- 1:05 gå till skrivaren (25 m) (310 kr)
- 1:07 printar Blomkruka (310 kr)
- 1:10 tar ut 1 st ur skrivaren (310 kr)
- 1:19 gå till Ali (25 m) (310 kr)
- 1:19 öppnar Alis butik – sälja (310 kr)
- 1:21 säljer hos Ali: +105 kr (415 kr)
- 1:23 tjänar pengar till väntar på flaskhalsen för kvarnmotor: 415/455 kr → printar blomkruka (105 kr) (415 kr)
- 1:32 gå till skrivaren (25 m) (415 kr)
- 1:34 printar Blomkruka (415 kr)
- 1:36 gå till cykeln (1 m) (415 kr)
- 1:39 tar ut 1 st ur skrivaren (415 kr)
- 1:48 gå till Ali (25 m) (415 kr)
- 1:48 öppnar Alis butik – sälja (415 kr)
- 1:50 säljer hos Ali: +105 kr (520 kr)
- 1:51 tjänar pengar till väntar på flaskhalsen för kvarnmotor: 520/560 kr → printar blomkruka (105 kr) (520 kr)
- 2:05 plockar 5 skräp på gården (bär max 6) (520 kr)
- 2:15 gå till kvarnen (27 m) (520 kr)
- 2:22 gå till skrivaren (3 m) (520 kr)
- 2:24 printar Blomkruka (520 kr)
- 2:27 tar ut 1 st ur skrivaren (520 kr)
- 2:37 gå till Ali (28 m) (520 kr)
- 2:37 öppnar Alis butik – sälja (520 kr)
- 2:39 säljer hos Ali: +105 kr (625 kr)
- 2:41 tjänar pengar till väntar på flaskhalsen för kvarnmotor: 625/665 kr → printar blomkruka (105 kr) (625 kr)
- 2:50 gå till skrivaren (25 m) (625 kr)
- 2:52 printar Blomkruka (625 kr)
- 2:53 gå till cykeln (1 m) (625 kr)
- 2:56 tar ut 1 st ur skrivaren (625 kr)
- 3:06 gå till Ali (25 m) (625 kr)
- 3:06 öppnar Alis butik – sälja (625 kr)
- 3:07 säljer hos Ali: +105 kr (730 kr)
- 3:10 tjänar pengar till väntar på flaskhalsen för kvarnmotor: 730/770 kr → printar blomkruka (105 kr) (730 kr)
- 3:25 plockar 4 skräp på gården (bär max 6) (730 kr)
- 3:35 gå till kvarnen (28 m) (730 kr)
- 3:41 gå till skrivaren (3 m) (730 kr)
- 3:43 printar Blomkruka (730 kr)
- 3:47 tar ut 1 st ur skrivaren (730 kr)
- 3:57 gå till Ali (28 m) (730 kr)
- 3:57 öppnar Alis butik – sälja (730 kr)
- 3:59 säljer hos Ali: +105 kr (835 kr)
- 4:08 öppnar Alis butik – köpa kvarnmotor (835 kr)
- 4:11 köper kvarnmotor för 50 kr (785 kr)
- 4:34 gå till skrivaren (25 m) (785 kr)
- 4:36 printar Kvarnmotor (785 kr)
- 4:37 gå till cykeln (1 m) (785 kr)
- 4:40 tar ut 1 st ur skrivaren (785 kr)
- 4:45 gå till skruva fast kvarnmotorn (3 m) (785 kr)
- 4:59 nybörjaren ser ingen pil – tittar runt (785 kr)
- 5:10 gå till Rolfs sopsäck (16 m) (785 kr)
- 5:22 tar på korg (785 kr)
- 5:23 tjänar pengar till väntar på sopbilen (BO): 785/845 kr → printar blomkruka (105 kr) (785 kr)
- 5:28 gå till skrivaren (12 m) (785 kr)
- 5:29 printar Blomkruka (785 kr)
- 5:33 tar ut 1 st ur skrivaren (785 kr)
- 5:42 gå till Ali (26 m) (785 kr)
- 5:42 öppnar Alis butik – sälja (785 kr)
- 5:44 säljer hos Ali: +105 kr (890 kr)
- 5:52 nybörjaren ser ingen pil – tittar runt (890 kr)
- 5:56 tjänar pengar till väntar på sopbilen (BO): 890/950 kr → printar blomkruka (105 kr) (890 kr)
- 6:05 gå till skrivaren (25 m) (890 kr)
- 6:07 printar Blomkruka (890 kr)
- 6:08 gå till cykeln (1 m) (890 kr)
- 6:12 tar ut 1 st ur skrivaren (890 kr)
- 6:21 gå till Ali (25 m) (890 kr)
- 6:21 öppnar Alis butik – sälja (890 kr)
- 6:23 säljer hos Ali: +105 kr (995 kr)
- 6:25 tjänar pengar till väntar på sopbilen (BO): 995/1055 kr → printar blomkruka (105 kr) (995 kr)
- 6:34 gå till skrivaren (25 m) (995 kr)
- 6:35 printar Blomkruka (995 kr)
- 7:04 plockar 8 skräp på gården (bär max 10) (995 kr)
- 7:18 gå till kvarnen (39 m) (995 kr)
- 7:19 gå till skrivaren (1 m) (995 kr)
- 7:20 tar ut 1 st ur skrivaren (995 kr)
- 7:30 gå till Ali (28 m) (995 kr)
- 7:30 öppnar Alis butik – sälja (995 kr)
- 7:32 säljer hos Ali: +3 kr (998 kr)
- 7:33 tjänar pengar till väntar på sopbilen (BO): 998/1055 kr → printar blomkruka (105 kr) (998 kr)
- 7:42 gå till skrivaren (25 m) (998 kr)
- 7:44 printar Blomkruka (998 kr)
- 7:45 gå till cykeln (1 m) (998 kr)
- 7:50 tar ut 1 st ur skrivaren (998 kr)
- 7:59 gå till Ali (25 m) (998 kr)
- 7:59 öppnar Alis butik – sälja (998 kr)
- 8:01 säljer hos Ali: +105 kr (1103 kr)
- 8:15 gå till Rolfs postlåda (31 m) (1103 kr)
- 8:18 gå till skrivaren (7 m) (1103 kr)
- 8:20 printar Ölhållare med kylklamp (1103 kr)
- 8:24 tar ut 1 st ur skrivaren (1103 kr)
- 8:35 nybörjaren ser ingen pil – tittar runt (1103 kr)
- 8:40 valj olhallare: true, vald olhallare, post {"l":null,"tr":null,"tm":[]}, nummer false (1103 kr)
- 8:42 gå till Rolfs postlåda (6 m) (1103 kr)
- 9:14 gå till Ali (31 m) (1103 kr)
- 9:14 öppnar Alis butik – köpa vindsnurra till skjultaket (1103 kr)
- 9:16 köper vindsnurra för 133 kr (970 kr)
- 9:26 gå till skrivaren (25 m) (970 kr)
- 9:28 printar Vindsnurra till skjultaket (970 kr)
- 9:28 gå till cykeln (1 m) (970 kr)
- 9:34 tar ut 1 st ur skrivaren (970 kr)
- 9:45 gå till sätt vindsnurran på taket (20 m) (970 kr)
- 10:01 gå till Ali (20 m) (970 kr)
- 10:01 öppnar Alis butik – köpa dörr (970 kr)
- 10:04 köper dorr för 120 kr (850 kr)
- 10:14 gå till skrivaren (25 m) (850 kr)
- 10:16 printar Dörr (2 delar) (850 kr)
- 10:24 tar ut 1 st ur skrivaren (850 kr)
- 10:31 gå till skjulet (19 m) (850 kr)
- 10:47 nybörjaren ser ingen pil – tittar runt (850 kr)
- 10:52 gå till sängen (1 m) (850 kr)

</details>

## Dag 3

| Tid | Källa | Vem | Text |
|---|---|---|---|
| 10:55 | vara | ali | ingen |
| 10:55 | händelse | malKlart | id=sov2 del=Dag 2 – Tippen bredvid nasta=rolf1-brev |
| 10:55 | vara | ali | kruka |
| 10:55 | MÅL |  | Vänta på sopbilen. Den lämnar något. |
| 0:01 | händelse | dagenBorjar | dag=3 |
| 0:01 | meddelande | du | Dag 3. 19 dagar till jul. Utan tak regnar det in i natt. |
| 0:01 | dagbokkort | du | En skrivare till och taket · Dag 3. 19 dagar till jul. Utan tak regnar det in i natt. |
| 0:01 | röst | du | Dag 3. 19 dagar till jul. En skrivare till och taket. Utan tak regnar det in i natt. · STORY |
| 0:08 | väntar | notis:morgon | Ali vill ha idag: Blomkruka · +50 % |
| 0:08 | händelse | morgonkortStangt | dag=3 |
| 0:08 | målruta |  | Vänta på sopbilen. Den lämnar något. |
| 0:13 | sak | du | (nytt mål i rutan) |
| 0:13 | pil |  | Vänta på sopbilen. Den lämnar något. |
| 0:13 | klar | du | (nytt mål i rutan) |
| 0:15 | struken | notis:🌇 Klockan är 21. Ali slår igen luckan.  | 🌇 Klockan är 21. Ali slår igen luckan. Dagens jobb är klart – gå in i skjulet och sov i sängen. |
| 0:15 | struken | ali | Ali här. Jag har inte sovit. Inte på grund av AI:n. På grund av dig. Du bygger saker av sopor. Jag har en hel butik och bygger ingenting. Det ska ändras. Kanske. Troligen. |
| 0:15 | struken | bror | Mamma ringde mig fyra gånger förresten. Snyggt jobbat 😂 |
| 0:15 | skratt | bror | Mamma ringde mig fyra gånger förresten. |
| 0:16 | sak | notis:morgon | Ali vill ha idag: Blomkruka · +50 % |
| 0:16 | notis |  | Blomkruka · +50 % |
| 0:19 | klar | notis:morgon | Ali vill ha idag: Blomkruka · +50 % |
| 0:39 | väntar | rolf | Den funkar! Hä. Ta så mycke skräp du vill. /Rolf​ |
| 0:39 | sak | rolf | Den funkar! Hä. Ta så mycke skräp du vill. /Rolf​ |
| 0:39 | lapp | Brev från Rolf | Den funkar! Hä. Ta så mycke skräp du vill. /Rolf​ |
| 0:39 | röst | rolf | Den funkar! Hä. Ta så mycke skräp du vill. /Rolf​ · STORY |
| 0:41 | tanke | du | En hel kanot. Kvarnen skulle äta upp sig själv. |
| 0:41 | väntar | du | En hel kanot. Kvarnen skulle äta upp sig själv. |
| 0:41 | paket |  | tanke |
| 0:41 | tanke | du | Rolfs tipp. Hela högen. |
| 0:41 | struken | du | En hel kanot. Kvarnen skulle äta upp sig själv. |
| 0:41 | väntar | du | Rolfs tipp. Hela högen. |
| 0:41 | monterat | du | byggsats:tippnyckel |
| 0:41 | händelse | monterat | sak=tippnyckel |
| 0:42 | scenInfo | du | Kameran sveper över tippen |
| 0:44 | klar | rolf | Den funkar! Hä. Ta så mycke skräp du vill. /Rolf​ |
| 0:44 | händelse | brevLast | id=rolftack:0 |
| 0:46 | tanke | du | …Det här räcker i hundra år. |
| 0:46 | väntar | du | …Det här räcker i hundra år. |
| 0:46 | sak | du | Rolfs tipp. Hela högen. |
| 0:46 | kvitto-visas | du | Rolfs tipp. Hela högen. |
| 0:46 | notis | tanke | 💭 Rolfs tipp. Hela högen. |
| 0:46 | röst | du | Rolfs tipp. Hela högen. · REAKTION |
| 0:47 | skratt | du | falsk tuta |
| 0:49 | klar | du | Rolfs tipp. Hela högen. |
| 0:53 | händelse | printStart | sak=kruka |
| 0:58 | sak | du | …Det här räcker i hundra år. |
| 0:58 | notis | tanke | 💭 …Det här räcker i hundra år. |
| 0:58 | röst | du | …Det här räcker i hundra år. · STORY |
| 0:59 | toast | guld | ✅ |
| 0:59 | händelse | printKlar | sak=kruka n=12 |
| 1:01 | klar | du | …Det här räcker i hundra år. |
| 1:41 | händelse | tagitUrPrint | sak=kruka n=1 |
| 1:52 | röst | ali | Pappa sa: driv butiken, Ali. Så jag driver butiken. På nätterna promptar jag. Det är mitt riktiga jobb. · STORY |
| 1:52 | butiksbubbla | ali | Pappa sa: driv butiken, Ali. Så jag driver butiken. På nätterna promptar jag. Det är mitt riktiga jobb. |
| 1:54 | aliSalt | ali | 105 |
| 1:55 | väntar | bror | Pappa har tvättat bilen tre gånger den här veckan. Jag sa att du bor på tippen. Han frågade vilken modell sopbilen var. |
| 1:55 | väntar | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått en DÖRR. Och vindsnurra till skjultaket. Mer säger jag inte. Gunnar vet. |
| 1:55 | radio | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått en DÖRR. Och vindsnurra till skjultaket. Mer säger jag inte. Gunnar vet. |
| 1:55 | skratt | du | Radio-Kjelle |
| 2:07 | sak | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått en DÖRR. Och vindsnurra till skjultaket. Mer säger jag inte. Gunnar vet. |
| 2:07 | notis |  | 📻 Radio Tippen: Radio Tippen, Kjelle här. Skjulet vid tippen har fått en DÖRR. Och vindsnurra till skjultaket. Mer säger jag inte. Gunnar vet. |
| 2:07 | röst | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått en DÖRR. Och vindsnurra till skjultaket. Mer säger jag inte. Gunnar vet. · REAKTION |
| 2:08 | händelse | printStart | sak=kruka |
| 2:13 | toast | guld | ✅ |
| 2:13 | händelse | printKlar | sak=kruka n=13 |
| 2:13 | händelse | tagitUrPrint | sak=kruka n=1 |
| 2:17 | klar | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått en DÖRR. Och vindsnurra till skjultaket. Mer säger jag inte. Gunnar vet. |
| 2:25 | aliSalt | ali | 105 |
| 2:39 | händelse | printStart | sak=kruka |
| 2:44 | toast | guld | ✅ |
| 2:44 | händelse | printKlar | sak=kruka n=14 |
| 2:44 | händelse | tagitUrPrint | sak=kruka n=1 |
| 2:56 | aliSalt | ali | 105 |
| 2:56 | skratt | du | falsk tuta |
| 3:00 | struken | bror | Pappa har tvättat bilen tre gånger den här veckan. Jag sa att du bor på tippen. Han frågade vilken modell sopbilen var. |
| 3:04 | väntar | värld:TUUT TUUT! | TUUT TUUT! |
| 3:04 | paket |  | ge |
| 3:04 | väntar |  | (läget ändras) |
| 3:04 | sak | värld:TUUT TUUT! | TUUT TUUT! |
| 3:04 | bubbla |  | TUUT TUUT! |
| 3:07 | klar | värld:TUUT TUUT! | TUUT TUUT! |
| 3:10 | händelse | printStart | sak=kruka |
| 3:15 | toast | guld | ✅ |
| 3:15 | händelse | printKlar | sak=kruka n=15 |
| 3:15 | händelse | tagitUrPrint | sak=kruka n=1 |
| 3:15 | sak |  | (läget ändras) |
| 3:15 | brev | rolf | rolf:1 |
| 3:16 | klar |  | (läget ändras) |
| 3:18 | skratt | du | falsk tuta |
| 3:27 | aliSalt | ali | 105 |
| 3:28 | väntar | ali | Jag har räknat kassan två gånger. Samma summa. Tråkigt. |
| 3:28 | sak | ali | Jag har räknat kassan två gånger. Samma summa. Tråkigt. |
| 3:28 | röst | ali | Jag har räknat kassan två gånger. Samma summa. Tråkigt. · SMÅPRAT |
| 3:29 | bubbla |  | Jag har räknat kassan två gånger. Samma summa. Tråkigt. |
| 3:32 | klar | ali | Jag har räknat kassan två gånger. Samma summa. Tråkigt. |
| 3:46 | väntar | rolf | Nämen. Kajsa knuffa ner min flasköppnare i tippen. Kan du göra en ny, mä magnet? /Rolf​ |
| 3:46 | paket |  | ge |
| 3:46 | väntar |  | (läget ändras) |
| 3:46 | sak | rolf | Nämen. Kajsa knuffa ner min flasköppnare i tippen. Kan du göra en ny, mä magnet? /Rolf​ |
| 3:46 | lapp | Brev från Rolf | Nämen. Kajsa knuffa ner min flasköppnare i tippen. Kan du göra en ny, mä magnet? /Rolf​ |
| 3:46 | röst | rolf | Nämen. Kajsa knuffa ner min flasköppnare i tippen. Kan du göra en ny, mä magnet? /Rolf​ · STORY |
| 3:46 | händelse | malKlart | id=rolf1-brev del=Dag 3 – En skrivare till och taket nasta=n2-hamta-skrap |
| 3:46 | väntar | du | Nyckeln till tippen. Där ligger skräpet i högar. |
| 3:46 | MÅL |  | Hämta 5 skräp på soptippen |
| 3:48 | målruta |  | Hämta 5 skräp på soptippen |
| 3:51 | väntar | mamma | Jag har städat ditt rum. Det tog tre dagar. Jag hittade en macka från i somras. En macka. |
| 3:51 | tanke | du | Fastpressad. Den sitter som i betong. |
| 3:51 | väntar | du | Fastpressad. Den sitter som i betong. |
| 3:51 | tanke | du | Tratten är stor som en kaffekopp. Tunnan är stor som jag. |
| 3:51 | struken | du | Fastpressad. Den sitter som i betong. |
| 3:51 | väntar | du | Tratten är stor som en kaffekopp. Tunnan är stor som jag. |
| 3:51 | händelse | malKlart | id=n2-hamta-skrap del=Dag 3 – En skrivare till och taket nasta=rolf1-printa |
| 3:51 | struken | kedja | tippen |
| 3:51 | struken | du | Tratten är stor som en kaffekopp. Tunnan är stor som jag. |
| 3:51 | väntar | du | Printa flasköppnare med magnet. |
| 3:51 | MÅL |  | Printa flasköppnare med magnet |
| 3:53 | klar | rolf | Nämen. Kajsa knuffa ner min flasköppnare i tippen. Kan du göra en ny, mä magnet? /Rolf​ |
| 3:53 | händelse | brevLast | id=rolf:1 |
| 3:54 | målruta |  | Printa flasköppnare med magnet |
| 3:55 | struken | du | Nyckeln till tippen. Där ligger skräpet i högar. |
| 3:55 | sak | du | Printa flasköppnare med magnet. |
| 3:55 | pil |  | Printa flasköppnare med magnet |
| 3:55 | röst | du | Printa flasköppnare med magnet. · MÅL |
| 3:55 | kvittens-bock |  | ✓ Hämta 5 skräp på soptippen |
| 3:55 | nick |  | nick:33 |
| 3:57 | klar | du | Printa flasköppnare med magnet. |
| 3:59 | sak |  | (läget ändras) |
| 4:00 | klar |  | (läget ändras) |
| 4:10 | händelse | printStart | sak=flaskoppnare |
| 4:10 | händelse | malKlart | id=rolf1-printa del=Dag 3 – En skrivare till och taket nasta=rolf1-ge |
| 4:10 | väntar | du | Ge Rolf flasköppnare med magnet. |
| 4:10 | målruta |  | Ge Rolf flasköppnare med magnet |
| 4:10 | MÅL |  | Ge Rolf flasköppnare med magnet |
| 4:10 | sak | du | Ge Rolf flasköppnare med magnet. |
| 4:10 | pil |  | Ge Rolf flasköppnare med magnet |
| 4:10 | röst | du | Ge Rolf flasköppnare med magnet. · MÅL |
| 4:13 | klar | du | Ge Rolf flasköppnare med magnet. |
| 4:14 | toast | guld | ✅ |
| 4:14 | händelse | printKlar | sak=flaskoppnare n=1 |
| 4:14 | kvittens-bock |  | ✓ Printa flasköppnare med magnet |
| 4:15 | händelse | tagitUrPrint | sak=flaskoppnare n=1 |
| 4:30 | händelse | lagtIPostlada | sak=flaskoppnare rolf=1 jobb=false |
| 4:30 | struken | kedja | rolf1 |
| 4:30 | paket |  | tanke |
| 4:30 | tanke | du | Flaggan uppe. Nu får Rolf hämta den. |
| 4:30 | väntar | du | Flaggan uppe. Nu får Rolf hämta den. |
| 4:30 | sak | du | Flaggan uppe. Nu får Rolf hämta den. |
| 4:30 | notis | tanke | 💭 Flaggan uppe. Nu får Rolf hämta den. |
| 4:30 | röst | du | Flaggan uppe. Nu får Rolf hämta den. · REAKTION |
| 4:30 | händelse | malKlart | id=rolf1-ge del=Dag 3 – En skrivare till och taket nasta=kopBatteri |
| 4:30 | väntar | du | Ali har ett gammalt bilbatteri. Då sparar jag strömmen. |
| 4:30 | MÅL |  | Printa och sälj |
| 4:32 | målruta |  | Printa och sälj |
| 4:33 | klar | du | Flaggan uppe. Nu får Rolf hämta den. |
| 4:34 | kvittens-bock |  | ✓ Ge Rolf flasköppnare med magnet |
| 4:36 | sak | du | Ali har ett gammalt bilbatteri. Då sparar jag strömmen. |
| 4:36 | pil |  | Printa och sälj |
| 4:36 | notis | tanke | 💭 Ali har ett gammalt bilbatteri. Då sparar jag strömmen. |
| 4:36 | röst | du | Ali har ett gammalt bilbatteri. Då sparar jag strömmen. · MÅL |
| 4:40 | klar | du | Ali har ett gammalt bilbatteri. Då sparar jag strömmen. |
| 4:48 | händelse | printStart | sak=kruka |
| 4:50 | strömdipp | du | cykelbatteri |
| 4:50 | paket |  | tanke |
| 4:50 | tanke | du | Den stannar. Strömmen räcker inte till alla maskiner. |
| 4:50 | väntar | du | Den stannar. Strömmen räcker inte till alla maskiner. |
| 4:50 | toast | fel | Ingen ström – maskinerna drar mer än du får in. Bygg en solpanel |
| 5:05 | upplåst | strom | cykelbatteri |
| 5:05 | brott | UPPLÅST | cykelbatteri (strom 37 av 15) |
| 5:05 | händelse | upplast | id=cykelbatteri flask=strom |
| 5:05 | paket |  | tanke → sms |
| 5:05 | tanke | du | Powerbanken räcker till en nyckelring. Sen är det trampa igen. |
| 5:05 | väntar | du | Powerbanken räcker till en nyckelring. Sen är det trampa igen. |
| 5:05 | väntar | ali | Ali här. Bilbatteriet ur min gamla Volvo står i lagret. Det sparar mer ström än powerbanken. |
| 5:08 | paket |  | tanke |
| 5:08 | tanke | du | Jaha, Rolf har hämtat en flasköppnare med magnet. |
| 5:08 | väntar | du | Jaha, Rolf har hämtat en flasköppnare med magnet. |
| 5:17 | väntar | mamma | Har du sovit nåt? Du har väl tandborste? Och äter du? Svara inte, jag vet att du är arg. ❤️ /Mamma |
| 5:24 | toast | guld | ✅ |
| 5:24 | händelse | printKlar | sak=kruka n=16 |
| 5:25 | händelse | tagitUrPrint | sak=kruka n=1 |
| 5:28 | struken | du | Jaha, Rolf har hämtat en flasköppnare med magnet. |
| 5:30 | väntar | värld:TUUT! Tjena! | TUUT! Tjena! |
| 5:36 | sak | ali | Ali här. Bilbatteriet ur min gamla Volvo står i lagret. Det sparar mer ström än powerbanken. |
| 5:36 | sms | ali | Ali här. Bilbatteriet ur min gamla Volvo står i lagret. Det sparar mer ström än powerbanken. |
| 5:36 | sms-bubbla | ali | Ali här. Bilbatteriet ur min gamla Volvo står i lagret. Det sparar mer ström än powerbanken. |
| 5:36 | röst | ali | Ali här. Bilbatteriet ur min gamla Volvo står i lagret. Det sparar mer ström än powerbanken. · STORY |
| 5:37 | aliSalt | ali | 105 |
| 5:44 | klar | ali | Ali här. Bilbatteriet ur min gamla Volvo står i lagret. Det sparar mer ström än powerbanken. |
| 5:47 | toast | guld | 🔋 Bilbatteriet ska kopplas in på cykeln. |
| 5:47 | händelse | kopt | sak=cykelbatteri |
| 5:47 | röst | ali | Ali här. Batteriet ur min gamla Volvo. Bilen dog 2016. Batteriet vägrade. · STORY |
| 5:47 | butiksbubbla | ali | Ali här. Batteriet ur min gamla Volvo. Bilen dog 2016. Batteriet vägrade. |
| 5:56 | struken | värld:TUUT! Tjena! | TUUT! Tjena! |
| 5:59 | struken | kedja | dag2 |
| 5:59 | väntar | info:guld | 🔋 Bilbatteriet är inkopplat – skrivaren printar klart även när du slutar trampa |
| 5:59 | monterat | du | byggsats:cykelbatteri |
| 5:59 | händelse | monterat | sak=cykelbatteri |
| 5:59 | sak | info:guld | 🔋 Bilbatteriet är inkopplat – skrivaren printar klart även när du slutar trampa |
| 5:59 | kvitto-visas | info:guld | 🔋 Bilbatteriet är inkopplat – skrivaren printar klart även när du slutar trampa |
| 5:59 | toast | guld | 🔋 Bilbatteriet är inkopplat – skrivaren printar klart även när du slutar trampa |
| 5:59 | händelse | malKlart | id=kopBatteri del=Dag 3 – En skrivare till och taket nasta=ryggkorg |
| 5:59 | väntar | du | Jag springer för mycket. Med en ryggkorg bär jag tio saker. |
| 5:59 | MÅL |  | Plocka skräp och mal det |
| 5:59 | upplåst | bara | ryggkorg |
| 5:59 | brott | UPPLÅST | ryggkorg (bara 4 av 3) |
| 5:59 | händelse | upplast | id=ryggkorg flask=bara |
| 5:59 | paket |  | tanke → sms |
| 5:59 | tanke | du | Säcken är full igen. Jag behöver något att bära mer i. |
| 5:59 | väntar | du | Säcken är full igen. Jag behöver något att bära mer i. |
| 5:59 | väntar | ali | Ali här. En ryggkorg. AI:n ritade den efter en bild på min mormor. Den rymmer tio. |
| 6:01 | klar | info:guld | 🔋 Bilbatteriet är inkopplat – skrivaren printar klart även när du slutar trampa |
| 6:02 | målruta |  | Bygg ryggkorgen – bär 10 skräp |
| 6:03 | kvittens-bock |  | ✓ Köp Alis gamla bilbatteri |
| 6:03 | sak | du | Jag springer för mycket. Med en ryggkorg bär jag tio saker. |
| 6:03 | pil |  | Bygg ryggkorgen – bär 10 skräp |
| 6:03 | notis | tanke | 💭 Jag springer för mycket. Med en ryggkorg bär jag tio saker. |
| 6:03 | röst | du | Jag springer för mycket. Med en ryggkorg bär jag tio saker. · MÅL |
| 6:03 | nick |  | nick:36 |
| 6:08 | klar | du | Jag springer för mycket. Med en ryggkorg bär jag tio saker. |
| 6:10 | sak | du | Säcken är full igen. Jag behöver något att bära mer i. |
| 6:10 | notis | tanke | 💭 Säcken är full igen. Jag behöver något att bära mer i. |
| 6:10 | röst | du | Säcken är full igen. Jag behöver något att bära mer i. · STORY |
| 6:15 | klar | du | Säcken är full igen. Jag behöver något att bära mer i. |
| 6:23 | sak | du | Den stannar. Strömmen räcker inte till alla maskiner. |
| 6:23 | notis | tanke | 💭 Den stannar. Strömmen räcker inte till alla maskiner. |
| 6:23 | röst | du | Den stannar. Strömmen räcker inte till alla maskiner. · STORY |
| 6:27 | klar | du | Den stannar. Strömmen räcker inte till alla maskiner. |
| 6:29 | struken | info:guld | 3D-modell köpt – printa ryggkorg |
| 6:29 | händelse | kopt | sak=ryggkorg |
| 6:29 | struken | ali | Ali här. En ryggkorg. AI:n ritade den efter en bild på min mormor. Den rymmer tio. |
| 6:35 | sak | du | Powerbanken räcker till en nyckelring. Sen är det trampa igen. |
| 6:35 | notis | tanke | 💭 Powerbanken räcker till en nyckelring. Sen är det trampa igen. |
| 6:35 | röst | du | Powerbanken räcker till en nyckelring. Sen är det trampa igen. · STORY |
| 6:41 | klar | du | Powerbanken räcker till en nyckelring. Sen är det trampa igen. |
| 6:42 | händelse | printStart | sak=byggsats:ryggkorg |
| 6:48 | toast | bra | Del 1 av 2 klar |
| 6:54 | händelse | printKlar | sak=byggsats:ryggkorg n=1 |
| 6:54 | toast | guld | ✅ |
| 6:54 | väntar | info:guld | Ryggkorg ska jag ha på mig. |
| 6:54 | händelse | tagitUrPrint | sak=byggsats:ryggkorg n=1 |
| 6:54 | paket |  | sms |
| 6:54 | väntar | ali | Ali här. Du printade Ryggkorg från min ritning. Och det FUNKAR? Jag har bara sett sånt på YouTube. |
| 6:54 | sak | info:guld | Ryggkorg ska jag ha på mig. |
| 6:54 | kvitto-visas | info:guld | Ryggkorg ska jag ha på mig. |
| 6:54 | toast | guld | Ryggkorg ska jag ha på mig. |
| 6:56 | klar | info:guld | Ryggkorg ska jag ha på mig. |
| 6:58 | väntar | info:guld | 🧺 Ryggkorgen sitter på! Nu bär jag 16 skräp. |
| 6:58 | tog på | du | byggsats:ryggkorg |
| 6:58 | händelse | monterat | sak=ryggkorg |
| 6:58 | sak | info:guld | 🧺 Ryggkorgen sitter på! Nu bär jag 16 skräp. |
| 6:58 | kvitto-visas | info:guld | 🧺 Ryggkorgen sitter på! Nu bär jag 16 skräp. |
| 6:58 | toast | guld | 🧺 Ryggkorgen sitter på! Nu bär jag 16 skräp. |
| 6:58 | händelse | malKlart | id=ryggkorg del=Dag 3 – En skrivare till och taket nasta=n2-bygg-arbetsbord |
| 6:58 | väntar | du | Ett arbetsbord bredvid skrivaren. Skrivare M ska stå på det. |
| 6:58 | MÅL |  | Bygg ett arbetsbord |
| 7:00 | klar | info:guld | 🧺 Ryggkorgen sitter på! Nu bär jag 16 skräp. |
| 7:00 | målruta |  | Bygg ett arbetsbord |
| 7:02 | kvittens-bock |  | ✓ Bygg ryggkorgen – bär 10 skräp |
| 7:02 | sak | du | Ett arbetsbord bredvid skrivaren. Skrivare M ska stå på det. |
| 7:02 | pil |  | Bygg ett arbetsbord |
| 7:02 | notis | tanke | 💭 Ett arbetsbord bredvid skrivaren. Skrivare M ska stå på det. |
| 7:02 | röst | du | Ett arbetsbord bredvid skrivaren. Skrivare M ska stå på det. · MÅL |
| 7:02 | nick |  | nick:37 |
| 7:03 | skratt | du | falsk tuta |
| 7:07 | klar | du | Ett arbetsbord bredvid skrivaren. Skrivare M ska stå på det. |
| 7:09 | struken | info:guld | 3D-modell köpt – printa arbetsbord |
| 7:09 | händelse | kopt | sak=bord |
| 7:22 | händelse | printStart | sak=byggsats:bord |
| 7:25 | paket |  | tanke |
| 7:25 | tanke | du | En toffla. Bara en. |
| 7:25 | väntar | du | En toffla. Bara en. |
| 7:25 | skratt | du | kvarnen spottar |
| 7:25 | väntar | värld:TUUT! Hej grannen! | TUUT! Hej grannen! |
| 7:29 | toast | bra | Del 1 av 3 klar |
| 7:35 | struken | mamma | Har du sovit nåt? Du har väl tandborste? Och äter du? Svara inte, jag vet att du är arg. ❤️ /Mamma |
| 7:35 | väntar | rolf | Morgonbulle på kontoret me polarna. Bengt har ny keps. Vi pratade om den i en timme. Den e grön. /R |
| 7:36 | toast | bra | Del 2 av 3 klar |
| 7:43 | händelse | printKlar | sak=byggsats:bord n=1 |
| 7:43 | toast | guld | ✅ |
| 7:44 | händelse | tagitUrPrint | sak=byggsats:bord n=1 |
| 7:45 | struken | du | En toffla. Bara en. |
| 7:45 | struken | värld:TUUT! Hej grannen! | TUUT! Hej grannen! |
| 7:46 | händelse | placerat | sak=bord |
| 7:46 | händelse | malKlart | id=n2-bygg-arbetsbord del=Dag 3 – En skrivare till och taket nasta=n2-bygg-skrivare-m |
| 7:46 | väntar | du | Skrivare M på bordet. Två skrivare, dubbelt så mycket. |
| 7:46 | målruta |  | Printa och sälj |
| 7:46 | MÅL |  | Printa och sälj |
| 7:46 | upplåst | skrivare | skrivare2 |
| 7:46 | brott | UPPLÅST | skrivare2 (skrivare 607 av 60) |
| 7:46 | händelse | upplast | id=skrivare2 flask=skrivare |
| 7:46 | paket |  | tanke → sms |
| 7:46 | tanke | du | Kvarnen hinner mer än skrivaren. Jag behöver en skrivare till. |
| 7:46 | väntar | du | Kvarnen hinner mer än skrivaren. Jag behöver en skrivare till. |
| 7:46 | väntar | ali | Ali här. Skrivare M har kommit. Två och en halv gånger snabbare. Snabbare än jag. Jag har inte varit snabb sedan 1998. |
| 7:47 | sak | du | Skrivare M på bordet. Två skrivare, dubbelt så mycket. |
| 7:47 | pil |  | Bygg Skrivare M på bordet |
| 7:47 | notis | tanke | 💭 Skrivare M på bordet. Två skrivare, dubbelt så mycket. |
| 7:47 | röst | du | Skrivare M på bordet. Två skrivare, dubbelt så mycket. · MÅL |
| 7:47 | nick |  | nick:38 |
| 7:50 | kvittens-bock |  | ✓ Bygg ett arbetsbord |
| 7:51 | klar | du | Skrivare M på bordet. Två skrivare, dubbelt så mycket. |
| 8:01 | struken | ali | Ali här. Du printade Ryggkorg från min ritning. Och det FUNKAR? Jag har bara sett sånt på YouTube. |
| 8:08 | sak | ali | Ali här. Skrivare M har kommit. Två och en halv gånger snabbare. Snabbare än jag. Jag har inte varit snabb sedan 1998. |
| 8:08 | sms | ali | Ali här. Skrivare M har kommit. Två och en halv gånger snabbare. Snabbare än jag. Jag har inte varit snabb sedan 1998. |
| 8:08 | sms-bubbla | ali | Ali här. Skrivare M har kommit. Två och en halv gånger snabbare. Snabbare än jag. Jag har inte varit snabb sedan 1998. |
| 8:08 | röst | ali | Ali här. Skrivare M har kommit. Två och en halv gånger snabbare. Snabbare än jag. Jag har inte varit snabb sedan 1998. · STORY |
| 8:09 | skratt | du | Alis dyr-pling |
| 8:09 | struken | info:guld | 3D-modell köpt – printa skrivare M |
| 8:09 | händelse | kopt | sak=skrivare2 |
| 8:18 | klar | ali | Ali här. Skrivare M har kommit. Två och en halv gånger snabbare. Snabbare än jag. Jag har inte varit snabb sedan 1998. |
| 8:26 | väntar | info:fel | Fullt i händerna. |
| 8:26 | sak | info:fel | Fullt i händerna. |
| 8:26 | kvitto-visas | info:fel | Fullt i händerna. |
| 8:26 | toast | fel | Fullt i händerna. |
| 8:28 | klar | info:fel | Fullt i händerna. |
| 8:29 | tanke | du | Hård plast. Lilla kvarnen skulle explodera. Eller jag. |
| 8:29 | väntar | du | Hård plast. Lilla kvarnen skulle explodera. Eller jag. |
| 8:39 | händelse | printStart | sak=byggsats:skrivare2 |
| 8:48 | toast | bra | Del 1 av 5 klar |
| 8:49 | struken | du | Hård plast. Lilla kvarnen skulle explodera. Eller jag. |
| 8:57 | toast | bra | Del 2 av 5 klar |
| 8:57 | väntar | mamma | Jag har städat ditt rum. Det tog tre dagar. Jag hittade en macka från i somras. En macka. |
| 9:00 | sak | du | Kvarnen hinner mer än skrivaren. Jag behöver en skrivare till. |
| 9:00 | notis | tanke | 💭 Kvarnen hinner mer än skrivaren. Jag behöver en skrivare till. |
| 9:00 | röst | du | Kvarnen hinner mer än skrivaren. Jag behöver en skrivare till. · STORY |
| 9:04 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 9:05 | klar | du | Kvarnen hinner mer än skrivaren. Jag behöver en skrivare till. |
| 9:17 | toast | bra | Del 3 av 5 klar |
| 9:20 | skratt | du | falsk tuta |
| 9:20 | väntar | värld:TUUT TUUT! | TUUT TUUT! |
| 9:26 | toast | bra | Del 4 av 5 klar |
| 9:35 | händelse | printKlar | sak=byggsats:skrivare2 n=1 |
| 9:35 | toast | guld | ✅ |
| 9:37 | händelse | tagitUrPrint | sak=byggsats:skrivare2 n=1 |
| 9:40 | struken | värld:TUUT TUUT! | TUUT TUUT! |
| 9:41 | händelse | placerat | sak=skrivare2 |
| 9:41 | struken | kedja | skrivareM |
| 9:41 | paket |  | tanke |
| 9:41 | tanke | du | Den här måste stå i linjen vid kvarnen, annars når inte slangen. |
| 9:41 | väntar | du | Den här måste stå i linjen vid kvarnen, annars når inte slangen. |
| 9:41 | händelse | malKlart | id=n2-bygg-skrivare-m del=Dag 3 – En skrivare till och taket nasta=n2-lagg-plattak-skjulet |
| 9:41 | lapp-kö | 📱 Storebror | VA?! Du har byggt en skrivare TILL?? Du har typ en printfarm nu. Okej. Det är faktiskt ganska ballt. 🔥 |
| 9:41 | väntar | bror | VA?! Du har byggt en skrivare TILL?? Du har typ en printfarm nu. Okej. Det är faktiskt ganska ballt. 🔥 |
| 9:41 | väntar | du | Det regnar in. Plåt på taket, så slipper jag sova i en pöl. |
| 9:41 | MÅL |  | Lägg plåttak på skjulet |
| 9:41 | målruta |  | Lägg plåttak på skjulet |
| 9:41 | sak | du | Det regnar in. Plåt på taket, så slipper jag sova i en pöl. |
| 9:41 | pil |  | Lägg plåttak på skjulet |
| 9:41 | notis | tanke | 💭 Det regnar in. Plåt på taket, så slipper jag sova i en pöl. |
| 9:41 | röst | du | Det regnar in. Plåt på taket, så slipper jag sova i en pöl. · MÅL |
| 9:42 | nick |  | nick:39 |
| 9:45 | kvittens-bock |  | ✓ Bygg Skrivare M på bordet |
| 9:46 | klar | du | Det regnar in. Plåt på taket, så slipper jag sova i en pöl. |
| 9:58 | struken | mamma | Jag har städat ditt rum. Det tog tre dagar. Jag hittade en macka från i somras. En macka. |
| 10:04 | struken | info:guld | 3D-modell köpt – printa plåttak |
| 10:04 | händelse | kopt | sak=tak |
| 10:17 | händelse | printStart | sak=byggsats:tak |
| 10:17 | toast | bra | 🔗 Slangen kopplad |
| 10:21 | toast | bra | Del 1 av 3 klar |
| 10:25 | toast | bra | Del 2 av 3 klar |
| 10:27 | toast | fel | Ingen ström – trampa cykeln |
| 10:36 | händelse | printKlar | sak=byggsats:tak n=1 |
| 10:36 | toast | guld | ✅ |
| 10:37 | händelse | tagitUrPrint | sak=byggsats:tak n=1 |
| 10:41 | sak | du | Den här måste stå i linjen vid kvarnen, annars når inte slangen. |
| 10:41 | notis | tanke | 💭 Den här måste stå i linjen vid kvarnen, annars når inte slangen. |
| 10:41 | röst | du | Den här måste stå i linjen vid kvarnen, annars når inte slangen. · STORY |
| 10:44 | väntar | info:guld | Plåttak på plats! Trivsel +12 |
| 10:44 | händelse | malKlart | id=n2-lagg-plattak-skjulet del=Dag 3 – En skrivare till och taket nasta=sov3 |
| 10:44 | paket |  | lapp |
| 10:44 | väntar | du | Nu vet Rolf att jag bor HÄR. Benen orkar inte trampa mer. |
| 10:44 | MÅL |  | Klart för idag – sov när du vill |
| 10:47 | klar | du | Den här måste stå i linjen vid kvarnen, annars når inte slangen. |
| 10:47 | sak | du | (nytt mål i rutan) |
| 10:47 | målruta |  | Klart för idag – sov när du vill |
| 10:47 | pil |  | Klart för idag – sov när du vill |
| 10:47 | klar | du | (nytt mål i rutan) |
| 10:47 | sak | info:guld | Plåttak på plats! Trivsel +12 |
| 10:47 | kvitto-visas | info:guld | Plåttak på plats! Trivsel +12 |
| 10:47 | toast | guld | Plåttak på plats! Trivsel +12 |
| 10:48 | kvittens-bock |  | ✓ Lägg plåttak på skjulet |
| 10:49 | klar | info:guld | Plåttak på plats! Trivsel +12 |
| 10:51 | sak | du | Nu vet Rolf att jag bor HÄR. Benen orkar inte trampa mer. |
| 10:51 | kvallsrad | du | Nu vet Rolf att jag bor HÄR. Benen orkar inte trampa mer. |
| 10:51 | väntar | notis:🌇 Klockan är 21. Ali slår igen luckan.  | 🌇 Klockan är 21. Ali slår igen luckan. Dagens jobb är klart – gå in i skjulet och sov i sängen. |
| 10:51 | klar | du | Nu vet Rolf att jag bor HÄR. Benen orkar inte trampa mer. |
| 10:59 | paket |  | replik |
| 10:59 | väntar | rolf | Hoppa in. Ja ska visa dej en grej. |
| 10:59 | sak | bror | VA?! Du har byggt en skrivare TILL?? Du har typ en printfarm nu. Okej. Det är faktiskt ganska ballt. 🔥 |
| 10:59 | sms | bror | VA?! Du har byggt en skrivare TILL?? Du har typ en printfarm nu. Okej. Det är faktiskt ganska ballt. 🔥 |
| 10:59 | sms-bubbla | bror | VA?! Du har byggt en skrivare TILL?? Du har typ en printfarm nu. Okej. Det är faktiskt ganska ballt. 🔥 |
| 10:59 | röst | bror | VA?! Du har byggt en skrivare TILL?? Du har typ en printfarm nu. Okej. Det är faktiskt ganska ballt. 🔥 · STORY |
| 11:02 | skratt | du | falsk tuta |
| 11:08 | klar | bror | VA?! Du har byggt en skrivare TILL?? Du har typ en printfarm nu. Okej. Det är faktiskt ganska ballt. 🔥 |
| 11:15 | väntar | foto | Tak över huvudet |
| 11:15 | paket |  | tanke |
| 11:15 | tanke | du | I natt somnar jag torr. Det börjar bli ett hem. |
| 11:15 | väntar | du | I natt somnar jag torr. Det börjar bli ett hem. |
| 11:23 | scenInfo | rolf | Rolf kör upp till sin bänk |
| 11:25 | morgonkort | ⏸️ Pausad | ⏸️ Pausad · Klicka för att fortsätta. |
| 11:27 | röst | rolf | Kall öl ä viktigt. · STORY |
| 11:27 | bubbla | rolf | Kall öl ä viktigt. |
| 11:35 | röst | rolf | Ja kommer hit varje kväll. Förr va vi två på bänken. · STORY |
| 11:35 | bubbla | rolf | Ja kommer hit varje kväll. Förr va vi två på bänken. |
| 11:53 | röst | rolf | Dä där ä Bengt-Åke. Vinka int. · STORY |
| 11:53 | bubbla | rolf | Dä där ä Bengt-Åke. Vinka int. |
| 12:08 | röst | rolf | Den ä skyldig mej pengar. · STORY |
| 12:08 | bubbla | rolf | Den ä skyldig mej pengar. |
| 12:17 | väntar | foto | Rolfs bänk |
| 12:17 | paket |  | tanke |
| 12:17 | tanke | du | Han kommer hit varje kväll. Nu vet jag var. |
| 12:17 | väntar | du | Han kommer hit varje kväll. Nu vet jag var. |
| 12:17 | skratt | du | Rolfs bänk |
| 12:23 | sak | rolf | Hoppa in. Ja ska visa dej en grej. |
| 12:23 | notis |  | Rolf: ”Hoppa in. Ja ska visa dej en grej.” |
| 12:23 | röst | rolf | Hoppa in. Ja ska visa dej en grej. · STORY |
| 12:25 | lapp | Dagbok | Tre dagar. Tänk om tre veckor. |
| 12:26 | röst | du | Tre dagar. Tänk om tre veckor. · REAKTION |
| 12:26 | klar | rolf | Hoppa in. Ja ska visa dej en grej. |
| 12:37 | sak | foto | Tak över huvudet |
| 12:37 | foto | du | Tak över huvudet |
| 12:39 | klar | foto | Tak över huvudet |
| 12:45 | nattkort | du | 🌙 Dag 3 är slut. God natt. zzz… Nu vet Rolf att jag bor HÄR. Benen orkar inte trampa mer. DAGENS PRINTAR Blomkruka × 5 Flasköppnare med magnet × 1 Totalt 6 pri |

<details><summary>Botens handlingar dag 3</summary>

- 0:00 — dag 3 börjar — (850 kr)
- 0:08 popup: "FORTSÄTT" (850 kr)
- 0:19 nybörjaren ser ingen pil – tittar runt (850 kr)
- 0:35 gå till Rolfs postlåda (28 m) (850 kr)
- 0:39 panel: "Rolfs postlåda
Det här låg i l" (910 kr)
- 0:41 gå till sätt nyckeln i låset (3 m) (910 kr)
- 0:49 tjänar pengar till väntar på sopbilen (BO): 910/970 kr → printar blomkruka (105 kr) (910 kr)
- 0:52 gå till skrivaren (7 m) (910 kr)
- 0:53 printar Blomkruka (910 kr)
- 1:28 plockar 9 skräp på gården (bär max 10) (910 kr)
- 1:40 gå till kvarnen (32 m) (910 kr)
- 1:41 gå till skrivaren (2 m) (910 kr)
- 1:42 tar ut 1 st ur skrivaren (910 kr)
- 1:52 gå till Ali (28 m) (910 kr)
- 1:52 öppnar Alis butik – sälja (910 kr)
- 1:54 säljer hos Ali: +105 kr (1015 kr)
- 1:57 tjänar pengar till väntar på sopbilen (BO): 1015/1075 kr → printar blomkruka (105 kr) (1015 kr)
- 2:06 gå till skrivaren (25 m) (1015 kr)
- 2:08 printar Blomkruka (1015 kr)
- 2:14 tar ut 1 st ur skrivaren (1015 kr)
- 2:23 gå till Ali (25 m) (1015 kr)
- 2:23 öppnar Alis butik – sälja (1015 kr)
- 2:25 säljer hos Ali: +105 kr (1120 kr)
- 2:28 tjänar pengar till väntar på sopbilen (BO): 1120/1180 kr → printar blomkruka (105 kr) (1120 kr)
- 2:37 gå till skrivaren (25 m) (1120 kr)
- 2:39 printar Blomkruka (1120 kr)
- 2:45 tar ut 1 st ur skrivaren (1120 kr)
- 2:54 gå till Ali (25 m) (1120 kr)
- 2:54 öppnar Alis butik – sälja (1120 kr)
- 2:56 säljer hos Ali: +105 kr (1225 kr)
- 2:59 tjänar pengar till väntar på sopbilen (BO): 1225/1285 kr → printar blomkruka (105 kr) (1225 kr)
- 3:08 gå till skrivaren (25 m) (1225 kr)
- 3:10 printar Blomkruka (1225 kr)
- 3:16 tar ut 1 st ur skrivaren (1225 kr)
- 3:25 gå till Ali (25 m) (1225 kr)
- 3:25 öppnar Alis butik – sälja (1225 kr)
- 3:27 säljer hos Ali: +105 kr (1330 kr)
- 3:46 gå till Rolfs postlåda (31 m) (1330 kr)
- 3:56 plockar 10 skräp på tippen (bär max 10) (1330 kr)
- 3:58 gå till kvarnen (8 m) (1330 kr)
- 4:09 gå till skrivaren (3 m) (1330 kr)
- 4:10 printar Flasköppnare med magnet (1330 kr)
- 4:15 tar ut 1 st ur skrivaren (1330 kr)
- 4:22 nybörjaren ser ingen pil – tittar runt (1330 kr)
- 4:27 valj flaskoppnare: true, vald flaskoppnare, post {"l":null,"tr":null,"tm":[]}, nummer false (1330 kr)
- 4:30 gå till Rolfs postlåda (6 m) (1330 kr)
- 4:39 nybörjaren ser ingen pil – tittar runt (1330 kr)
- 4:44 tjänar pengar till väntar på flaskhalsen för cykelbatteri: 1330/1370 kr → printar blomkruka (105 kr) (1330 kr)
- 4:46 gå till skrivaren (6 m) (1330 kr)
- 4:48 printar Blomkruka (1330 kr)
- 4:51 gå till cykeln (1 m) (1330 kr)
- 5:26 tar ut 1 st ur skrivaren (1330 kr)
- 5:35 gå till Ali (27 m) (1330 kr)
- 5:35 öppnar Alis butik – sälja (1330 kr)
- 5:37 säljer hos Ali: +105 kr (1435 kr)
- 5:46 öppnar Alis butik – bilbatteriet (1435 kr)
- 5:48 köper cykelbatteri för 30 kr (1405 kr)
- 5:59 gå till koppla in bilbatteriet vid cykeln (24 m) (1405 kr)
- 6:28 gå till Ali (24 m) (1405 kr)
- 6:28 öppnar Alis butik – köpa ryggkorg (1405 kr)
- 6:30 köper ryggkorg för 120 kr (1285 kr)
- 6:40 gå till skrivaren (25 m) (1285 kr)
- 6:42 printar Ryggkorg (2 delar) (1285 kr)
- 6:55 tar ut 1 st ur skrivaren (1285 kr)
- 6:58 tar på ryggkorg (1285 kr)
- 7:08 gå till Ali (25 m) (1285 kr)
- 7:08 öppnar Alis butik – köpa arbetsbord (1285 kr)
- 7:10 köper bord för 120 kr (1165 kr)
- 7:20 gå till skrivaren (25 m) (1165 kr)
- 7:22 printar Arbetsbord (3 delar) (1165 kr)
- 7:45 tar ut 1 st ur skrivaren (1165 kr)
- 7:45 gå till platsen för arbetsbord (2 m) (1165 kr)
- 7:46 ställer ut arbetsbord (1165 kr)
- 8:08 gå till Ali (24 m) (1165 kr)
- 8:08 öppnar Alis butik – köpa skrivare m (1165 kr)
- 8:10 köper skrivare2 för 500 kr (665 kr)
- 8:31 gå till kvarnen (10 m) (665 kr)
- 8:37 gå till skrivaren (3 m) (665 kr)
- 8:39 printar Skrivare M (5 delar) (665 kr)
- 9:10 plockar 1 skräp på tippen (bär max 16) (665 kr)
- 9:13 gå till kvarnen (9 m) (665 kr)
- 9:37 gå till skrivaren (3 m) (665 kr)
- 9:38 tar ut 1 st ur skrivaren (665 kr)
- 9:40 gå till platsen för skrivare m (5 m) (665 kr)
- 9:41 ställer ut skrivare m (665 kr)
- 10:03 gå till Ali (24 m) (665 kr)
- 10:03 öppnar Alis butik – köpa plåttak (665 kr)
- 10:05 köper tak för 250 kr (415 kr)
- 10:15 gå till skrivaren (24 m) (415 kr)
- 10:17 printar Plåttak (3 delar) (415 kr)
- 10:27 gå till cykeln (2 m) (415 kr)
- 10:37 tar ut 1 st ur skrivaren (415 kr)
- 10:44 gå till skjulet (19 m) (415 kr)
- 10:56 nybörjaren ser ingen pil – tittar runt (415 kr)
- 11:23 gå till sopbilen (Rolfs bänk) (38 m) (415 kr)
- 11:32 kort: "FORTSÄTTeller tryck Esc" (415 kr)
- 12:24 tillbaka från Rolfs bänk (415 kr)
- 12:28 panel: "Dagbok
Före och efter
Dag 1
Da" (415 kr)
- 12:43 gå till sängen (39 m) (415 kr)

</details>

## Dag 4

| Tid | Källa | Vem | Text |
|---|---|---|---|
| 12:45 | vara | ali | ingen |
| 12:45 | händelse | malKlart | id=sov3 del=Dag 3 – En skrivare till och taket nasta=rolf2-brev |
| 12:45 | vara | ali | kruka |
| 12:45 | MÅL |  | Vänta på sopbilen. Den lämnar något. |
| 0:01 | händelse | dagenBorjar | dag=4 |
| 0:01 | meddelande | du | Dag 4. 18 dagar till jul. Drar det i skjulet blir natten lång. |
| 0:01 | dagbokkort | du | Kärran och mer vind · Dag 4. 18 dagar till jul. Drar det i skjulet blir natten lång. |
| 0:01 | röst | du | Dag 4. 18 dagar till jul. Kärran och mer vind. Drar det i skjulet blir natten lång. · STORY |
| 0:08 | väntar | notis:morgon | Ali vill ha idag: Blomkruka · +50 % |
| 0:08 | händelse | morgonkortStangt | dag=4 |
| 0:11 | målruta |  | Vänta på sopbilen. Den lämnar något. |
| 0:13 | sak | du | (nytt mål i rutan) |
| 0:13 | pil |  | Vänta på sopbilen. Den lämnar något. |
| 0:13 | klar | du | (nytt mål i rutan) |
| 0:15 | struken | notis:🌇 Klockan är 21. Ali slår igen luckan.  | 🌇 Klockan är 21. Ali slår igen luckan. Dagens jobb är klart – gå in i skjulet och sov i sängen. |
| 0:15 | sak | du | I natt somnar jag torr. Det börjar bli ett hem. |
| 0:15 | notis | tanke | 💭 I natt somnar jag torr. Det börjar bli ett hem. |
| 0:15 | röst | du | I natt somnar jag torr. Det börjar bli ett hem. · STORY |
| 0:19 | klar | du | I natt somnar jag torr. Det börjar bli ett hem. |
| 0:21 | sak | notis:morgon | Ali vill ha idag: Blomkruka · +50 % |
| 0:21 | notis |  | Blomkruka · +50 % |
| 0:25 | klar | notis:morgon | Ali vill ha idag: Blomkruka · +50 % |
| 0:37 | skratt | du | falsk tuta |
| 0:39 | väntar | info:bra | 🛒 4 skräp från famnen i skottkärran – kärran tar mer än famnen |
| 0:46 | väntar | rolf | PERFEKT öppnare! Kärran vid lådan ä din. Den gnisslar. Precis som ja. Skriv ditt nummer på en lapp, så slipper ja skriva brev. /Rolf |
| 0:46 | sak | info:bra | 🛒 4 skräp från famnen i skottkärran – kärran tar mer än famnen |
| 0:46 | kvitto-visas | info:bra | 🛒 4 skräp från famnen i skottkärran – kärran tar mer än famnen |
| 0:46 | toast | bra | 🛒 4 skräp från famnen i skottkärran – kärran tar mer än famnen |
| 0:48 | klar | info:bra | 🛒 4 skräp från famnen i skottkärran – kärran tar mer än famnen |
| 0:53 | väntar | bud | (tips) |
| 0:53 | sak | bud | (tips) |
| 0:54 | väntar | du | En skottkärra! Jag väljer den med hjulet och kör den full med skräp. |
| 0:55 | klar | bud | (tips) |
| 0:57 | sak | du | En skottkärra! Jag väljer den med hjulet och kör den full med skräp. |
| 0:57 | röst | du | En skottkärra! Jag väljer den med hjulet och kör den full med skräp. · MÅL |
| 0:59 | väntar | värld:TUUT! Tjena! | TUUT! Tjena! |
| 1:03 | klar | du | En skottkärra! Jag väljer den med hjulet och kör den full med skräp. |
| 1:11 | sak | foto | Rolfs bänk |
| 1:11 | foto | du | Rolfs bänk |
| 1:13 | klar | foto | Rolfs bänk |
| 1:19 | struken | värld:TUUT! Tjena! | TUUT! Tjena! |
| 1:21 | sak | du | Han kommer hit varje kväll. Nu vet jag var. |
| 1:21 | notis | tanke | 💭 Han kommer hit varje kväll. Nu vet jag var. |
| 1:21 | röst | du | Han kommer hit varje kväll. Nu vet jag var. · STORY |
| 1:25 | klar | du | Han kommer hit varje kväll. Nu vet jag var. |
| 1:35 | tanke | du | En husvagn mitt i tippen. Och grinden är låst. |
| 1:35 | väntar | du | En husvagn mitt i tippen. Och grinden är låst. |
| 1:35 | sak | du | En husvagn mitt i tippen. Och grinden är låst. |
| 1:35 | notis | tanke | 💭 En husvagn mitt i tippen. Och grinden är låst. |
| 1:35 | röst | du | En husvagn mitt i tippen. Och grinden är låst. · REAKTION |
| 1:39 | klar | du | En husvagn mitt i tippen. Och grinden är låst. |
| 1:57 | väntar | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått TAK. Och arbetsbord. Skriv in, Gunnar. Du skriver aldrig in. |
| 1:57 | radio | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått TAK. Och arbetsbord. Skriv in, Gunnar. Du skriver aldrig in. |
| 1:57 | skratt | du | Radio-Kjelle |
| 1:57 | sak | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått TAK. Och arbetsbord. Skriv in, Gunnar. Du skriver aldrig in. |
| 1:57 | notis |  | 📻 Radio Tippen: Radio Tippen, Kjelle här. Skjulet vid tippen har fått TAK. Och arbetsbord. Skriv in, Gunnar. Du skriver aldrig in. |
| 1:57 | röst | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått TAK. Och arbetsbord. Skriv in, Gunnar. Du skriver aldrig in. · REAKTION |
| 2:07 | klar | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått TAK. Och arbetsbord. Skriv in, Gunnar. Du skriver aldrig in. |
| 2:25 | väntar | ali | Kom in och titta. Titta är gratis. Nästan. |
| 2:25 | sak | ali | Kom in och titta. Titta är gratis. Nästan. |
| 2:25 | röst | ali | Kom in och titta. Titta är gratis. Nästan. · SMÅPRAT |
| 2:26 | bubbla |  | Kom in och titta. Titta är gratis. Nästan. |
| 2:27 | väntar | bud | (tips) |
| 2:28 | röst | ali | Du igen. Bra. Du är den enda som köper nåt. · STORY |
| 2:28 | butiksbubbla | ali | Du igen. Bra. Du är den enda som köper nåt. |
| 2:29 | klar | ali | Kom in och titta. Titta är gratis. Nästan. |
| 2:31 | sak | bud | (tips) |
| 2:33 | klar | bud | (tips) |
| 2:35 | meddelande | bror | Jag har gjort om ditt rum till gym. Mamma vet inte. Säg inget. |
| 2:36 | röst | bror | Jag har gjort om ditt rum till gym. Mamma vet inte. Säg inget. · STORY |
| 2:45 | paket |  | sms |
| 2:45 | väntar | bror | Bra. Jag har satt upp en räcka i din garderob. Den håller. Typ. |
| 2:53 | händelse | brevLast | id=b_gym |
| 2:55 | sak | bror | Bra. Jag har satt upp en räcka i din garderob. Den håller. Typ. |
| 2:55 | sms | bror | Bra. Jag har satt upp en räcka i din garderob. Den håller. Typ. |
| 2:55 | sms-bubbla | bror | Bra. Jag har satt upp en räcka i din garderob. Den håller. Typ. |
| 2:55 | röst | bror | Bra. Jag har satt upp en räcka i din garderob. Den håller. Typ. · STORY |
| 3:00 | klar | bror | Bra. Jag har satt upp en räcka i din garderob. Den håller. Typ. |
| 3:11 | skratt | du | falsk tuta |
| 3:11 | väntar | värld:TUUT TUUT! | TUUT TUUT! |
| 3:12 | sak | värld:TUUT TUUT! | TUUT TUUT! |
| 3:12 | bubbla |  | TUUT TUUT! |
| 3:15 | klar | värld:TUUT TUUT! | TUUT TUUT! |
| 3:48 | paket |  | ge |
| 3:48 | väntar |  | (läget ändras) |
| 3:49 | skratt | du | falsk tuta |
| 3:50 | sak |  | (läget ändras) |
| 3:50 | brev | rolf | rolf:2 |
| 3:50 | klar |  | (läget ändras) |
| 3:59 | väntar | bror | Tips: håll munstycket rent. Och prata med skrivaren ibland. Inte för att den hör. Men ändå. |
| 4:18 | väntar | värld:Mjau. | Mjau. |
| 4:18 | sak | värld:Mjau. | Mjau. |
| 4:18 | bubbla |  | Mjau. |
| 4:20 | klar | värld:Mjau. | Mjau. |
| 4:28 | väntar | du | Hmm… flaggan är uppe på Rolfs brevlåda vid grinden. Har det kommit ett brev? |
| 4:28 | sak | du | Hmm… flaggan är uppe på Rolfs brevlåda vid grinden. Har det kommit ett brev? |
| 4:28 | röst | du | Hmm… flaggan är uppe på Rolfs brevlåda vid grinden. Har det kommit ett brev? · REAKTION |
| 4:35 | klar | du | Hmm… flaggan är uppe på Rolfs brevlåda vid grinden. Har det kommit ett brev? |
| 5:19 | väntar | bud | (tips) |
| 5:19 | sak | bud | (tips) |
| 5:21 | klar | bud | (tips) |
| 5:23 | meddelande | mamma | Vem är den där Ali? Är han snäll? Betalar han dig ordentligt? |
| 5:23 | väntar | rolf | Tjo. Ska grilla på lördag. Min grillspade smälte. Kan du göra en sån hä? /Rolf 🍖​ |
| 5:23 | paket |  | ge |
| 5:23 | väntar |  | (läget ändras) |
| 5:24 | röst | mamma | Vem är den där Ali? Är han snäll? Betalar han dig ordentligt? · STORY |
| 5:32 | paket |  | sms |
| 5:32 | väntar | mamma | Typ? Jag ringer honom. Vad heter butiken? Jag hittar den. |
| 5:40 | händelse | brevLast | id=m_ali |
| 5:40 | händelse | malKlart | id=rolf2-brev del=Dag 4 – Kärran och mer vind nasta=rolf2-printa |
| 5:40 | väntar | du | Printa grillspade. |
| 5:40 | MÅL |  | Printa grillspade |
| 5:42 | sak | du | Printa grillspade. |
| 5:42 | målruta |  | Printa grillspade |
| 5:42 | pil |  | Printa grillspade |
| 5:42 | röst | du | Printa grillspade. · MÅL |
| 5:42 | nick |  | nick:42 |
| 5:44 | kvittens-bock |  | ✓ Läs brevet i Rolfs postlåda |
| 5:44 | klar | du | Printa grillspade. |
| 5:46 | sak | rolf | Tjo. Ska grilla på lördag. Min grillspade smälte. Kan du göra en sån hä? /Rolf 🍖​ |
| 5:46 | lapp | Brev från Rolf | Tjo. Ska grilla på lördag. Min grillspade smälte. Kan du göra en sån hä? /Rolf 🍖​ |
| 5:46 | röst | rolf | Tjo. Ska grilla på lördag. Min grillspade smälte. Kan du göra en sån hä? /Rolf 🍖​ · STORY |
| 5:53 | klar | rolf | Tjo. Ska grilla på lördag. Min grillspade smälte. Kan du göra en sån hä? /Rolf 🍖​ |
| 5:53 | händelse | brevLast | id=rolf:2 |
| 5:55 | sak |  | (läget ändras) |
| 5:55 | klar |  | (läget ändras) |
| 6:01 | sak | mamma | Typ? Jag ringer honom. Vad heter butiken? Jag hittar den. |
| 6:01 | sms | mamma | Typ? Jag ringer honom. Vad heter butiken? Jag hittar den. |
| 6:01 | sms-bubbla | mamma | Typ? Jag ringer honom. Vad heter butiken? Jag hittar den. |
| 6:01 | röst | mamma | Typ? Jag ringer honom. Vad heter butiken? Jag hittar den. · STORY |
| 6:05 | klar | mamma | Typ? Jag ringer honom. Vad heter butiken? Jag hittar den. |
| 6:13 | skratt | du | falsk tuta |
| 6:13 | väntar | värld:TUUT! Hej grannen! | TUUT! Hej grannen! |
| 6:17 | paket |  | tanke |
| 6:17 | tanke | du | En badanka. Den överlevde kvarnen. |
| 6:17 | väntar | du | En badanka. Den överlevde kvarnen. |
| 6:17 | skratt | du | kvarnen spottar |
| 6:21 | händelse | printStart | sak=grillspade |
| 6:21 | händelse | malKlart | id=rolf2-printa del=Dag 4 – Kärran och mer vind nasta=rolf2-ge |
| 6:21 | väntar | du | Ge Rolf grillspade. |
| 6:21 | målruta |  | Ge Rolf grillspade |
| 6:21 | MÅL |  | Ge Rolf grillspade |
| 6:21 | sak | du | Ge Rolf grillspade. |
| 6:21 | pil |  | Ge Rolf grillspade |
| 6:21 | röst | du | Ge Rolf grillspade. · MÅL |
| 6:24 | klar | du | Ge Rolf grillspade. |
| 6:25 | toast | guld | ✅ |
| 6:25 | händelse | printKlar | sak=grillspade n=1 |
| 6:25 | kvittens-bock |  | ✓ Printa grillspade |
| 6:26 | händelse | tagitUrPrint | sak=grillspade n=1 |
| 6:33 | struken | värld:TUUT! Hej grannen! | TUUT! Hej grannen! |
| 6:37 | struken | du | En badanka. Den överlevde kvarnen. |
| 6:43 | händelse | lagtIPostlada | sak=grillspade rolf=2 jobb=false |
| 6:43 | struken | kedja | rolf2 |
| 6:43 | händelse | malKlart | id=rolf2-ge del=Dag 4 – Kärran och mer vind nasta=n3-tom-full-karra |
| 6:43 | väntar | du | Kärran rymmer massor. Jag fyller den och tippar allt i kvarnen. |
| 6:43 | målruta |  | Töm en full kärra i kvarnen |
| 6:44 | MÅL |  | Töm en full kärra i kvarnen |
| 6:44 | sak | du | Kärran rymmer massor. Jag fyller den och tippar allt i kvarnen. |
| 6:44 | pil |  | Töm en full kärra i kvarnen |
| 6:44 | notis | tanke | 💭 Kärran rymmer massor. Jag fyller den och tippar allt i kvarnen. |
| 6:44 | röst | du | Kärran rymmer massor. Jag fyller den och tippar allt i kvarnen. · MÅL |
| 6:47 | kvittens-bock |  | ✓ Ge Rolf grillspade |
| 6:49 | klar | du | Kärran rymmer massor. Jag fyller den och tippar allt i kvarnen. |
| 7:02 | karraKlick | du | träff |
| 7:03 | karraKlick | du | träff |
| 7:04 | karraKlick | du | träff |
| 7:05 | karraKlick | du | träff |
| 7:06 | karraKlick | du | träff |
| 7:07 | karraKlick | du | träff |
| 7:08 | karraKlick | du | träff |
| 7:09 | karraKlick | du | träff |
| 7:13 | tanke | du | Det får inte plats. Jag behöver något att tippa i. |
| 7:13 | väntar | du | Det får inte plats. Jag behöver något att tippa i. |
| 7:13 | väntar | info:bra | 7 st i tratten · 20 st på marken bredvid |
| 7:13 | sak | info:bra | 7 st i tratten · 20 st på marken bredvid |
| 7:13 | kvitto-visas | info:bra | 7 st i tratten · 20 st på marken bredvid |
| 7:13 | toast | bra | 7 st i tratten · 20 st på marken bredvid |
| 7:13 | händelse | malKlart | id=n3-tom-full-karra del=Dag 4 – Kärran och mer vind nasta=sophallare |
| 7:13 | väntar | du | En sophållare bakom kvarnen. Då matar den sig själv. |
| 7:13 | MÅL |  | Plocka skräp och mal det |
| 7:15 | klar | info:bra | 7 st i tratten · 20 st på marken bredvid |
| 7:16 | målruta |  | Plocka skräp och mal det |
| 7:17 | kvittens-bock |  | ✓ Töm en full kärra i kvarnen |
| 7:17 | sak | du | En sophållare bakom kvarnen. Då matar den sig själv. |
| 7:17 | pil |  | Plocka skräp och mal det |
| 7:17 | notis | tanke | 💭 En sophållare bakom kvarnen. Då matar den sig själv. |
| 7:17 | röst | du | En sophållare bakom kvarnen. Då matar den sig själv. · MÅL |
| 7:20 | upplåst | skrivare | trim_skrivare2 |
| 7:20 | brott | UPPLÅST | trim_skrivare2 (skrivare 76 av 60) |
| 7:20 | händelse | upplast | id=trim_skrivare2 flask=skrivare |
| 7:20 | paket |  | tanke → sms |
| 7:20 | tanke | du | Skrivare M hinner inte heller. Den kunde gå fortare. |
| 7:20 | väntar | du | Skrivare M hinner inte heller. Den kunde gå fortare. |
| 7:20 | väntar | ali | Ali här. Skrivartrim igen. Nästa nivå. Den här gången skruvade jag åt rätt håll. |
| 7:21 | klar | du | En sophållare bakom kvarnen. Då matar den sig själv. |
| 7:23 | sak | du | Det får inte plats. Jag behöver något att tippa i. |
| 7:23 | notis | tanke | 💭 Det får inte plats. Jag behöver något att tippa i. |
| 7:23 | röst | du | Det får inte plats. Jag behöver något att tippa i. · STORY |
| 7:28 | klar | du | Det får inte plats. Jag behöver något att tippa i. |
| 7:41 | händelse | printStart | sak=kruka |
| 7:44 | toast | guld | ✅ |
| 7:44 | händelse | printKlar | sak=kruka n=17 |
| 7:44 | händelse | tagitUrPrint | sak=kruka n=1 |
| 7:55 | sak | ali | Ali här. Skrivartrim igen. Nästa nivå. Den här gången skruvade jag åt rätt håll. |
| 7:55 | sms | ali | Ali här. Skrivartrim igen. Nästa nivå. Den här gången skruvade jag åt rätt håll. |
| 7:55 | sms-bubbla | ali | Ali här. Skrivartrim igen. Nästa nivå. Den här gången skruvade jag åt rätt håll. |
| 7:55 | röst | ali | Ali här. Skrivartrim igen. Nästa nivå. Den här gången skruvade jag åt rätt håll. · STORY |
| 7:56 | aliSalt | ali | 105 |
| 8:02 | klar | ali | Ali här. Skrivartrim igen. Nästa nivå. Den här gången skruvade jag åt rätt håll. |
| 8:04 | paket |  | tanke |
| 8:04 | tanke | du | Jaha, Rolf har hämtat en grillspade. |
| 8:04 | väntar | du | Jaha, Rolf har hämtat en grillspade. |
| 8:15 | händelse | printStart | sak=kruka |
| 8:17 | toast | guld | ✅ |
| 8:17 | händelse | printKlar | sak=kruka n=18 |
| 8:18 | händelse | tagitUrPrint | sak=kruka n=1 |
| 8:24 | struken | du | Jaha, Rolf har hämtat en grillspade. |
| 8:29 | aliSalt | ali | 105 |
| 8:36 | sak | du | Skrivare M hinner inte heller. Den kunde gå fortare. |
| 8:36 | notis | tanke | 💭 Skrivare M hinner inte heller. Den kunde gå fortare. |
| 8:36 | röst | du | Skrivare M hinner inte heller. Den kunde gå fortare. · STORY |
| 8:41 | klar | du | Skrivare M hinner inte heller. Den kunde gå fortare. |
| 8:42 | händelse | printStart | sak=kruka |
| 8:45 | toast | guld | ✅ |
| 8:45 | händelse | printKlar | sak=kruka n=19 |
| 8:46 | händelse | tagitUrPrint | sak=kruka n=1 |
| 8:57 | aliSalt | ali | 105 |
| 9:05 | väntar | bror | Tips: håll munstycket rent. Och prata med skrivaren ibland. Inte för att den hör. Men ändå. |
| 9:10 | händelse | printStart | sak=kruka |
| 9:13 | toast | guld | ✅ |
| 9:13 | händelse | printKlar | sak=kruka n=20 |
| 9:13 | händelse | tagitUrPrint | sak=kruka n=1 |
| 9:24 | aliSalt | ali | 105 |
| 9:37 | händelse | printStart | sak=kruka |
| 9:40 | toast | guld | ✅ |
| 9:40 | händelse | printKlar | sak=kruka n=21 |
| 9:41 | händelse | tagitUrPrint | sak=kruka n=1 |
| 9:52 | aliSalt | ali | 105 |
| 9:59 | skratt | du | falsk tuta |
| 10:05 | händelse | printStart | sak=kruka |
| 10:08 | toast | guld | ✅ |
| 10:08 | händelse | printKlar | sak=kruka n=22 |
| 10:08 | händelse | tagitUrPrint | sak=kruka n=1 |
| 10:10 | struken | bror | Tips: håll munstycket rent. Och prata med skrivaren ibland. Inte för att den hör. Men ändå. |
| 10:14 | skratt | du | däcket rullar iväg |
| 10:20 | aliSalt | ali | 105 |
| 10:20 | röst | ali | Dina krukor säljer. Tanterna i kvarteret älskar dem. · STORY |
| 10:20 | butiksbubbla | ali | Dina krukor säljer. Tanterna i kvarteret älskar dem. |
| 10:27 | upplåst | bara | matarband |
| 10:27 | brott | RESERV | matarband (bara 0 av 3) |
| 10:27 | händelse | upplast | id=matarband flask=bara |
| 10:27 | paket |  | sms |
| 10:27 | väntar | ali | Ali här. 🗑️ Sophållaren. Jag frågade AI:n hur man slipper bära skräp. Den gjorde det här. Den har mer fritid än jag. Suck. |
| 10:33 | händelse | printStart | sak=kruka |
| 10:35 | toast | guld | ✅ |
| 10:35 | händelse | printKlar | sak=kruka n=23 |
| 10:36 | händelse | tagitUrPrint | sak=kruka n=1 |
| 10:46 | sak | ali | Ali här. 🗑️ Sophållaren. Jag frågade AI:n hur man slipper bära skräp. Den gjorde det här. Den har mer fritid än jag. Suck. |
| 10:46 | sms | ali | Ali här. 🗑️ Sophållaren. Jag frågade AI:n hur man slipper bära skräp. Den gjorde det här. Den har mer fritid än jag. Suck. |
| 10:46 | sms-bubbla | ali | Ali här. 🗑️ Sophållaren. Jag frågade AI:n hur man slipper bära skräp. Den gjorde det här. Den har mer fritid än jag. Suck. |
| 10:46 | röst | ali | Ali här. 🗑️ Sophållaren. Jag frågade AI:n hur man slipper bära skräp. Den gjorde det här. Den har mer fritid än jag. Suck. · STORY |
| 10:47 | aliSalt | ali | 105 |
| 10:56 | klar | ali | Ali här. 🗑️ Sophållaren. Jag frågade AI:n hur man slipper bära skräp. Den gjorde det här. Den har mer fritid än jag. Suck. |
| 11:00 | struken | info:guld | 3D-modell köpt – printa sophållare |
| 11:00 | händelse | kopt | sak=matarband |
| 11:12 | händelse | printStart | sak=byggsats:matarband |
| 11:16 | toast | bra | Del 1 av 3 klar |
| 11:19 | toast | bra | Del 2 av 3 klar |
| 11:22 | toast | fel | Ingen ström – trampa cykeln |
| 11:22 | väntar | notis:Skrivare M: Ingen ström – trampa cykeln | Skrivare M: Ingen ström – trampa cykeln |
| 11:31 | händelse | printKlar | sak=byggsats:matarband n=1 |
| 11:31 | toast | guld | ✅ |
| 11:33 | händelse | tagitUrPrint | sak=byggsats:matarband n=1 |
| 11:33 | paket |  | sms |
| 11:33 | väntar | ali | Ali här. Jag såg Sophållare på avstånd. Ett streck blev lite snett. Mitt fel. Vackert ändå. |
| 11:33 | paket |  | sms |
| 11:33 | väntar | ali | Ali igen. Jag har sagt till min bror att jag inte går i pension. Jag startar något. Han skrattade. Jag skrattade också. Men jag menar det. Tack. Säg inget. |
| 11:35 | händelse | placerat | sak=sophallare |
| 11:35 | kvittens | du | Nu kan jag tömma hela kärran på en gång. |
| 11:35 | varför-köad | du | Krukor är bra. Pallar är bättre. |
| 11:35 | väntar | du | Nu kan jag tömma hela kärran på en gång. |
| 11:35 | väntar | info:guld | 🗑️ Sophållaren står bakom kvarnen! Töm allt skräp i den – den matar kvarnen själv. |
| 11:35 | sak | du | Nu kan jag tömma hela kärran på en gång. |
| 11:35 | notis | tanke | 💭 Nu kan jag tömma hela kärran på en gång. |
| 11:35 | röst | du | Nu kan jag tömma hela kärran på en gång. · STORY |
| 11:35 | händelse | malKlart | id=sophallare del=Dag 4 – Kärran och mer vind nasta=pall |
| 11:35 | väntar | du | Jag behöver något att sitta på. En pall. Lagom ambitiöst. |
| 11:35 | MÅL |  | Printa en pall |
| 11:38 | målruta |  | Printa en pall |
| 11:39 | klar | du | Nu kan jag tömma hela kärran på en gång. |
| 11:41 | sak | du | Jag behöver något att sitta på. En pall. Lagom ambitiöst. |
| 11:41 | pil |  | Printa en pall |
| 11:41 | notis | tanke | 💭 Jag behöver något att sitta på. En pall. Lagom ambitiöst. |
| 11:41 | röst | du | Jag behöver något att sitta på. En pall. Lagom ambitiöst. · MÅL |
| 11:42 | nick |  | nick:46 |
| 11:46 | klar | du | Jag behöver något att sitta på. En pall. Lagom ambitiöst. |
| 11:46 | struken | info:guld | 🗑️ Sophållaren står bakom kvarnen! Töm allt skräp i den – den matar kvarnen själv. |
| 11:46 | struken | notis:Skrivare M: Ingen ström – trampa cykeln | Skrivare M: Ingen ström – trampa cykeln |
| 11:57 | händelse | kopt | sak=pall |
| 11:57 | röst | ali | Bra val. Folk köper sånt. Jag vet inte varför. · STORY |
| 11:57 | upprepning | ali | Bra val. Folk köper sånt. Jag vet inte varför. |
| 11:57 | butiksbubbla | ali | Pall? Bra val. Folk köper sånt. Jag vet inte varför. |
| 12:09 | händelse | printStart | sak=pall |
| 12:14 | toast | guld | ✅ |
| 12:14 | händelse | printKlar | sak=pall n=1 |
| 12:14 | händelse | malKlart | id=pall del=Dag 4 – Kärran och mer vind nasta=vind4 |
| 12:14 | väntar | du | En vindsnurra till på skjulets tak. Skrivarna vill ha mer ström. |
| 12:14 | målruta |  | Printa och sälj |
| 12:14 | MÅL |  | Printa och sälj |
| 12:15 | sak | du | En vindsnurra till på skjulets tak. Skrivarna vill ha mer ström. |
| 12:15 | pil |  | Printa och sälj |
| 12:15 | notis | tanke | 💭 En vindsnurra till på skjulets tak. Skrivarna vill ha mer ström. |
| 12:15 | röst | du | En vindsnurra till på skjulets tak. Skrivarna vill ha mer ström. · MÅL |
| 12:15 | händelse | tagitUrPrint | sak=pall n=1 |
| 12:16 | skratt | du | falsk tuta |
| 12:16 | väntar | värld:TUUT! Tjena! | TUUT! Tjena! |
| 12:18 | kvittens-bock |  | ✓ Printa en pall |
| 12:20 | klar | du | En vindsnurra till på skjulets tak. Skrivarna vill ha mer ström. |
| 12:24 | händelse | placerat | sak=pall |
| 12:34 | sak | ali | Ali här. Jag såg Sophållare på avstånd. Ett streck blev lite snett. Mitt fel. Vackert ändå. |
| 12:34 | sms | ali | Ali här. Jag såg Sophållare på avstånd. Ett streck blev lite snett. Mitt fel. Vackert ändå. |
| 12:34 | sms-bubbla | ali | Ali här. Jag såg Sophållare på avstånd. Ett streck blev lite snett. Mitt fel. Vackert ändå. |
| 12:34 | röst | ali | Ali här. Jag såg Sophållare på avstånd. Ett streck blev lite snett. Mitt fel. Vackert ändå. · REAKTION |
| 12:34 | strömdipp | du | vindsnurra2 |
| 12:34 | paket |  | tanke |
| 12:34 | tanke | du | Allt stannar. Maskinerna drar mer än jag får in. |
| 12:34 | väntar | du | Allt stannar. Maskinerna drar mer än jag får in. |
| 12:35 | upplåst | strom | vindsnurra2 |
| 12:35 | brott | UPPLÅST | vindsnurra2 (strom 44 av 15) |
| 12:35 | händelse | upplast | id=vindsnurra2 flask=strom |
| 12:35 | paket |  | tanke → sms |
| 12:35 | tanke | du | En snurra räcker inte. Skrivarna står still så fort det blir stilla. |
| 12:35 | väntar | du | En snurra räcker inte. Skrivarna står still så fort det blir stilla. |
| 12:35 | väntar | ali | Ali här. En snurra till? Taket har plats för två. Vinden har inget emot det. |
| 12:41 | klar | ali | Ali här. Jag såg Sophållare på avstånd. Ett streck blev lite snett. Mitt fel. Vackert ändå. |
| 12:43 | händelse | printStart | sak=pall |
| 12:43 | paket |  | tanke |
| 12:43 | tanke | du | Kajsa. Ut ur skrivaren. Nu. |
| 12:43 | väntar | du | Kajsa. Ut ur skrivaren. Nu. |
| 12:43 | skratt | du | Kajsa i skrivaren |
| 12:43 | toast | fel | Ingen ström – maskinerna drar mer än du får in. Bygg en solpanel |
| 12:43 | struken | värld:TUUT! Tjena! | TUUT! Tjena! |
| 13:04 | struken | du | Kajsa. Ut ur skrivaren. Nu. |
| 13:15 | sak | du | Allt stannar. Maskinerna drar mer än jag får in. |
| 13:15 | notis | tanke | 💭 Allt stannar. Maskinerna drar mer än jag får in. |
| 13:15 | röst | du | Allt stannar. Maskinerna drar mer än jag får in. · STORY |
| 13:19 | klar | du | Allt stannar. Maskinerna drar mer än jag får in. |
| 13:24 | toast | guld | ✅ |
| 13:24 | händelse | printKlar | sak=pall n=2 |
| 13:27 | händelse | tagitUrPrint | sak=pall n=1 |
| 13:27 | sak | du | En snurra räcker inte. Skrivarna står still så fort det blir stilla. |
| 13:27 | notis | tanke | 💭 En snurra räcker inte. Skrivarna står still så fort det blir stilla. |
| 13:27 | röst | du | En snurra räcker inte. Skrivarna står still så fort det blir stilla. · STORY |
| 13:33 | klar | du | En snurra räcker inte. Skrivarna står still så fort det blir stilla. |
| 13:39 | aliSalt | ali | 180 |
| 13:41 | sak | ali | Ali här. En snurra till? Taket har plats för två. Vinden har inget emot det. |
| 13:41 | sms | ali | Ali här. En snurra till? Taket har plats för två. Vinden har inget emot det. |
| 13:41 | sms-bubbla | ali | Ali här. En snurra till? Taket har plats för två. Vinden har inget emot det. |
| 13:41 | röst | ali | Ali här. En snurra till? Taket har plats för två. Vinden har inget emot det. · STORY |
| 13:42 | struken | info:guld | 3D-modell köpt – printa vindsnurra till skjultaket |
| 13:42 | händelse | kopt | sak=vindsnurra |
| 13:48 | klar | ali | Ali här. En snurra till? Taket har plats för två. Vinden har inget emot det. |
| 13:55 | händelse | printStart | sak=byggsats:vindsnurra |
| 13:58 | händelse | printKlar | sak=byggsats:vindsnurra n=1 |
| 13:58 | toast | guld | ✅ |
| 13:59 | struken | info:guld | 🌬️ Vindsnurran ska upp på skjulets tak. |
| 13:59 | händelse | tagitUrPrint | sak=byggsats:vindsnurra n=1 |
| 14:08 | händelse | placerat | sak=vindsnurra |
| 14:08 | struken | info:guld | 🌬️ Vindsnurran sitter på taket – den trampar cykeln åt mig när det blåser |
| 14:08 | monterat | du | byggsats:vindsnurra |
| 14:08 | händelse | monterat | sak=vindsnurra |
| 14:08 | händelse | malKlart | id=vind4 del=Dag 4 – Kärran och mer vind nasta=n3-isolera-tva-vaggar |
| 14:08 | lapp | 📔 Dagbok | Slut på trampandet. Nästan. |
| 14:08 | dagbokrad | du | Slut på trampandet. Nästan. |
| 14:08 | väntar | notis:Slut på trampandet. Nästan. | Slut på trampandet. Nästan. |
| 14:08 | väntar | du | Det drar genom väggarna. Isolering, och sen blir det varmt. |
| 14:08 | MÅL |  | Isolera två väggar · 0/2 |
| 14:08 | sak | du | Det drar genom väggarna. Isolering, och sen blir det varmt. |
| 14:08 | målruta |  | Isolera två väggar · 0/2 |
| 14:08 | pil |  | Isolera två väggar · 0/2 |
| 14:08 | notis | tanke | 💭 Det drar genom väggarna. Isolering, och sen blir det varmt. |
| 14:08 | röst | du | Det drar genom väggarna. Isolering, och sen blir det varmt. · MÅL |
| 14:08 | nick |  | nick:48 |
| 14:13 | klar | du | Det drar genom väggarna. Isolering, och sen blir det varmt. |
| 14:15 | sak | notis:Slut på trampandet. Nästan. | Slut på trampandet. Nästan. |
| 14:15 | notis | dagbok | Slut på trampandet. Nästan. |
| 14:17 | klar | notis:Slut på trampandet. Nästan. | Slut på trampandet. Nästan. |
| 14:18 | händelse | pappa | Pappa ringer |
| 14:22 | röst | pappa | Hej. Det är pappa. · STORY |
| 14:25 | röst | du | Hej pappa. · STORY |
| 14:28 | röst | pappa | Mamma står bredvid. Hon säger att jag ska fråga om du äter. · STORY |
| 14:32 | röst | du | Jag äter. Och jag har en egen kvarn nu. Och en 3D-skrivare. · STORY |
| 14:37 | röst | pappa | Jaha. En kvarn. Vad lugnt då. · STORY |
| 14:41 | röst | pappa | Jag kanske kommer förbi nån dag. Om det passar. · STORY |
| 14:43 | röst | du | Det passar. · STORY |
| 14:46 | röst | pappa | Bra. Hej då då. · STORY |
| 14:54 | händelse | samtalSlut | id=pappa4 |
| 14:54 | struken | kedja | samtal4 |
| 15:09 | struken | info:guld | 3D-modell köpt – printa isolerskiva (vägg) |
| 15:09 | händelse | kopt | sak=vaggar |
| 15:22 | händelse | printStart | sak=byggsats:vaggar |
| 15:26 | händelse | printKlar | sak=byggsats:vaggar n=1 |
| 15:26 | toast | guld | ✅ |
| 15:26 | händelse | tagitUrPrint | sak=byggsats:vaggar n=1 |
| 15:33 | väntar | info:guld | 🧱 Bakväggen klar. 3 kvar. |
| 15:33 | sak | info:guld | 🧱 Bakväggen klar. 3 kvar. |
| 15:33 | kvitto-visas | info:guld | 🧱 Bakväggen klar. 3 kvar. |
| 15:33 | toast | guld | 🧱 Bakväggen klar. 3 kvar. |
| 15:35 | klar | info:guld | 🧱 Bakväggen klar. 3 kvar. |
| 15:40 | struken | ali | Ali igen. Jag har sagt till min bror att jag inte går i pension. Jag startar något. Han skrattade. Jag skrattade också. Men jag menar det. Tack. Säg inget. |
| 15:45 | händelse | printStart | sak=byggsats:vaggar |
| 15:49 | händelse | printKlar | sak=byggsats:vaggar n=1 |
| 15:49 | toast | guld | ✅ |
| 15:50 | händelse | tagitUrPrint | sak=byggsats:vaggar n=1 |
| 15:56 | väntar | info:guld | 🧱 Vänster vägg klar. 2 kvar. |
| 15:56 | sak | info:guld | 🧱 Vänster vägg klar. 2 kvar. |
| 15:56 | kvitto-visas | info:guld | 🧱 Vänster vägg klar. 2 kvar. |
| 15:56 | toast | guld | 🧱 Vänster vägg klar. 2 kvar. |
| 15:56 | händelse | malKlart | id=n3-isolera-tva-vaggar del=Dag 4 – Kärran och mer vind nasta=sov4 |
| 15:56 | paket |  | lapp |
| 15:56 | väntar | du | Nu vet grannen att jag bor HÄR. Han verkar inte glad. En skrivare räcker inte. |
| 15:57 | MÅL |  | Klart för idag – sov när du vill |
| 15:58 | klar | info:guld | 🧱 Vänster vägg klar. 2 kvar. |
| 15:59 | målruta |  | Klart för idag – sov när du vill |
| 16:00 | kvittens-bock |  | ✓ Isolera två väggar · 2/2 |
| 16:00 | sak | du | (nytt mål i rutan) |
| 16:00 | pil |  | Klart för idag – sov när du vill |
| 16:01 | klar | du | (nytt mål i rutan) |
| 16:03 | sak | du | Nu vet grannen att jag bor HÄR. Han verkar inte glad. En skrivare räcker inte. |
| 16:03 | kvallsrad | du | Nu vet grannen att jag bor HÄR. Han verkar inte glad. En skrivare räcker inte. |
| 16:03 | klar | du | Nu vet grannen att jag bor HÄR. Han verkar inte glad. En skrivare räcker inte. |
| 16:04 | väntar | notis:🌇 Klockan är 21. Ali slår igen luckan.  | 🌇 Klockan är 21. Ali slår igen luckan. Dagens jobb är klart – gå in i skjulet och sov i sängen. |
| 16:17 | nattkort | du | 🌙 Dag 4 är slut. God natt. zzz… Nu vet grannen att jag bor HÄR. Han verkar inte glad. En skrivare räcker inte. DAGENS PRINTAR Blomkruka × 7 Pall × 2 Grillspade |

<details><summary>Botens handlingar dag 4</summary>

- 0:00 — dag 4 börjar — (415 kr)
- 0:08 popup: "FORTSÄTT" (415 kr)
- 0:24 nybörjaren ser ingen pil – tittar runt (415 kr)
- 0:39 gå till Rolfs postlåda (28 m) (415 kr)
- 0:46 panel: "Rolfs postlåda
Det här låg i l" (535 kr)
- 0:47 tjänar pengar till väntar på sopbilen (BO): 535/595 kr → printar blomkruka (105 kr) (535 kr)
- 0:49 inget skräp kvar att mala – väntar på sopbilen [skräp 172: lätta 169, osynliga 0, utan interaktion 0, tippen 172, ej lyftbara 3, sorter ] (535 kr)
- 1:10 inget skräp kvar att mala – väntar på sopbilen (535 kr)
- 1:32 inget skräp kvar att mala – väntar på sopbilen (535 kr)
- 1:53 inget skräp kvar att mala – väntar på sopbilen (535 kr)
- 2:14 inget skräp kvar att mala – väntar på sopbilen (535 kr)
- 2:14 blomkruka gick inte att printa – tar nästa (535 kr)
- 2:28 gå till Ali (37 m) (535 kr)
- 2:28 öppnar Alis butik – sälja (535 kr)
- 2:30 tjänar pengar till väntar på sopbilen (BO): 535/595 kr → printar nyckelring (15 kr) (535 kr)
- 2:45 popup: "Okej, jag säger inget." (535 kr)
- 2:53 popup: "Läst" (535 kr)
- 3:01 inget skräp kvar att mala – väntar på sopbilen [skräp 168: lätta 165, osynliga 0, utan interaktion 0, tippen 168, ej lyftbara 3, sorter ] (535 kr)
- 3:22 inget skräp kvar att mala – väntar på sopbilen (535 kr)
- 3:43 inget skräp kvar att mala – väntar på sopbilen (535 kr)
- 4:04 inget skräp kvar att mala – väntar på sopbilen (535 kr)
- 4:25 inget skräp kvar att mala – väntar på sopbilen (535 kr)
- 4:25 nyckelring gick inte att printa – tar nästa (535 kr)
- 4:38 gå till Ali (37 m) (535 kr)
- 4:38 öppnar Alis butik – sälja (535 kr)
- 4:41 inget att printa och sälja – väntar på sopbilen (535 kr)
- 5:23 gå till Rolfs postlåda (31 m) (535 kr)
- 5:32 popup: "Han är snäll. Typ." (535 kr)
- 5:40 popup: "Läst" (535 kr)
- 5:44 inget skräp kvar att mala – väntar på sopbilen [skräp 170: lätta 167, osynliga 0, utan interaktion 0, tippen 170, ej lyftbara 3, sorter ] (535 kr)
- 6:07 plockar 4 skräp på tippen (bär max 16) (535 kr)
- 6:11 gå till kvarnen (11 m) (535 kr)
- 6:20 gå till skrivaren (5 m) (535 kr)
- 6:21 printar Grillspade (535 kr)
- 6:26 tar ut 1 st ur skrivaren (535 kr)
- 6:33 nybörjaren ser ingen pil – tittar runt (535 kr)
- 6:37 valj grillspade: true, vald grillspade, post {"l":null,"tr":null,"tm":[]}, nummer false (535 kr)
- 6:39 gå till fel håll en bit (4 m) (535 kr)
- 6:43 gå till Rolfs postlåda (8 m) (535 kr)
- 6:55 nybörjaren ser ingen pil – tittar runt (535 kr)
- 7:09 fyller kärran med 8 skräp (535 kr)
- 7:13 gå till kvarnen (8 m) (535 kr)
- 7:33 nybörjaren ser ingen pil – tittar runt (535 kr)
- 7:37 tjänar pengar till väntar på flaskhalsen för matarband: 535/575 kr → printar blomkruka (105 kr) (535 kr)
- 7:39 gå till skrivaren (5 m) (535 kr)
- 7:41 printar Blomkruka (535 kr)
- 7:45 tar ut 1 st ur skrivaren (535 kr)
- 7:55 gå till Ali (27 m) (535 kr)
- 7:55 öppnar Alis butik – sälja (535 kr)
- 7:57 säljer hos Ali: +105 kr (640 kr)
- 8:04 tjänar pengar till väntar på flaskhalsen för matarband: 640/680 kr → printar blomkruka (105 kr) (640 kr)
- 8:13 gå till skrivaren (24 m) (640 kr)
- 8:15 printar Blomkruka (640 kr)
- 8:19 tar ut 1 st ur skrivaren (640 kr)
- 8:28 gå till Ali (24 m) (640 kr)
- 8:28 öppnar Alis butik – sälja (640 kr)
- 8:29 säljer hos Ali: +105 kr (745 kr)
- 8:32 tjänar pengar till väntar på flaskhalsen för matarband: 745/785 kr → printar blomkruka (105 kr) (745 kr)
- 8:41 gå till skrivaren (24 m) (745 kr)
- 8:42 printar Blomkruka (745 kr)
- 8:46 tar ut 1 st ur skrivaren (745 kr)
- 8:55 gå till Ali (24 m) (745 kr)
- 8:55 öppnar Alis butik – sälja (745 kr)
- 8:57 säljer hos Ali: +105 kr (850 kr)
- 8:59 tjänar pengar till väntar på flaskhalsen för matarband: 850/890 kr → printar blomkruka (105 kr) (850 kr)
- 9:08 gå till skrivaren (24 m) (850 kr)
- 9:10 printar Blomkruka (850 kr)
- 9:14 tar ut 1 st ur skrivaren (850 kr)
- 9:23 gå till Ali (24 m) (850 kr)
- 9:23 öppnar Alis butik – sälja (850 kr)
- 9:25 säljer hos Ali: +105 kr (955 kr)
- 9:27 tjänar pengar till väntar på flaskhalsen för matarband: 955/995 kr → printar blomkruka (105 kr) (955 kr)
- 9:36 gå till skrivaren (24 m) (955 kr)
- 9:37 printar Blomkruka (955 kr)
- 9:41 tar ut 1 st ur skrivaren (955 kr)
- 9:50 gå till Ali (24 m) (955 kr)
- 9:50 öppnar Alis butik – sälja (955 kr)
- 9:52 säljer hos Ali: +105 kr (1060 kr)
- 9:54 tjänar pengar till väntar på flaskhalsen för matarband: 1060/1100 kr → printar blomkruka (105 kr) (1060 kr)
- 10:03 gå till skrivaren (24 m) (1060 kr)
- 10:05 printar Blomkruka (1060 kr)
- 10:09 tar ut 1 st ur skrivaren (1060 kr)
- 10:18 gå till Ali (24 m) (1060 kr)
- 10:18 öppnar Alis butik – sälja (1060 kr)
- 10:20 säljer hos Ali: +105 kr (1165 kr)
- 10:22 tjänar pengar till väntar på flaskhalsen för matarband: 1165/1205 kr → printar blomkruka (105 kr) (1165 kr)
- 10:31 gå till skrivaren (24 m) (1165 kr)
- 10:33 printar Blomkruka (1165 kr)
- 10:37 tar ut 1 st ur skrivaren (1165 kr)
- 10:46 gå till Ali (24 m) (1165 kr)
- 10:46 öppnar Alis butik – sälja (1165 kr)
- 10:48 säljer hos Ali: +105 kr (1270 kr)
- 10:58 öppnar Alis butik – köpa sophållare (1270 kr)
- 11:01 köper matarband för 120 kr (1150 kr)
- 11:11 gå till skrivaren (24 m) (1150 kr)
- 11:12 printar Sophållare (3 delar) (1150 kr)
- 11:17 gå till kvarnen (1 m) (1150 kr)
- 11:33 gå till skrivaren (3 m) (1150 kr)
- 11:34 tar ut 1 st ur skrivaren (1150 kr)
- 11:35 gå till kvarnen (3 m) (1150 kr)
- 11:55 gå till Ali (29 m) (1150 kr)
- 11:55 öppnar Alis butik – köpa receptet pall (1150 kr)
- 11:57 köper pall för 80 kr (1070 kr)
- 12:08 gå till skrivaren (24 m) (1070 kr)
- 12:09 printar Pall (1070 kr)
- 12:15 tar ut 1 st ur skrivaren (1070 kr)
- 12:23 gå till platsen för pall (20 m) (1070 kr)
- 12:24 ställer ut pall (1070 kr)
- 12:29 nybörjaren ser ingen pil – tittar runt (1070 kr)
- 12:33 tjänar pengar till väntar på flaskhalsen för vindsnurra2: 1070/1110 kr → printar pall (180 kr) (1070 kr)
- 12:41 gå till skrivaren (20 m) (1070 kr)
- 12:43 printar Pall (1070 kr)
- 12:44 gå till cykeln (3 m) (1070 kr)
- 13:27 gå till skrivaren (4 m) (1070 kr)
- 13:28 tar ut 1 st ur skrivaren (1070 kr)
- 13:38 gå till Ali (26 m) (1070 kr)
- 13:38 öppnar Alis butik – sälja (1070 kr)
- 13:39 säljer hos Ali: +180 kr (1250 kr)
- 13:40 öppnar Alis butik – köpa vindsnurra till skjultaket (1250 kr)
- 13:43 köper vindsnurra för 133 kr (1117 kr)
- 13:53 gå till skrivaren (24 m) (1117 kr)
- 13:55 printar Vindsnurra till skjultaket (1117 kr)
- 14:00 tar ut 1 st ur skrivaren (1117 kr)
- 14:08 gå till sätt vindsnurran på taket (18 m) (1117 kr)
- 14:22 popup: "Svara E" (1117 kr)
- 14:30 popup: "Nästa E" (1117 kr)
- 14:37 popup: "Nästa E" (1117 kr)
- 14:45 popup: "Nästa E" (1117 kr)
- 14:49 popup: "Nästa E" (1117 kr)
- 14:54 popup: "Lägg på E" (1117 kr)
- 15:08 gå till Ali (20 m) (1117 kr)
- 15:08 öppnar Alis butik – köpa isolerskiva (vägg) (1117 kr)
- 15:10 köper vaggar för 130 kr (987 kr)
- 15:20 gå till skrivaren (24 m) (987 kr)
- 15:22 printar Isolerskiva (vägg) (987 kr)
- 15:27 tar ut 1 st ur skrivaren (987 kr)
- 15:33 gå till skjulet (bak) (17 m) (987 kr)
- 15:44 gå till skrivaren (17 m) (987 kr)
- 15:45 printar Isolerskiva (vägg) (987 kr)
- 15:50 tar ut 1 st ur skrivaren (987 kr)
- 15:56 gå till skjulet (vanster) (17 m) (987 kr)
- 16:10 nybörjaren ser ingen pil – tittar runt (987 kr)
- 16:15 gå till sängen (1 m) (987 kr)

</details>

## Dag 5

| Tid | Källa | Vem | Text |
|---|---|---|---|
| 16:17 | vara | ali | pall |
| 16:17 | händelse | malKlart | id=sov4 del=Dag 4 – Kärran och mer vind nasta=rolf3-brev |
| 16:18 | MÅL |  | Vänta på sopbilen. Den lämnar något. |
| 16:18 | skratt | du | falsk tuta |

<details><summary>Botens handlingar dag 5</summary>

- 0:00 — dag 5 börjar — (987 kr)

</details>
