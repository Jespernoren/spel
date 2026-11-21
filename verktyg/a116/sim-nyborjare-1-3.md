# Nybörjarboten – körning 1

*A-081: samma händer som AX, men boten vet bara det som syns (målrutan, pilen, det som sägs). Går 3 m/s, läser 60 ms per tecken, följer pilen, tittar runt när målet är otydligt och går fel ibland.*

| Dag | Minuter | FÖRVIRRAD | FAST | TRÄNGSEL | HANN INTE LÄSA | DOLT | NY SAK UTAN FÖRKLARING | OKÄNT ORD |
|---|---|---|---|---|---|---|---|---|
| 1 | 13.8 | 1 | 0 | 1 | 0 | 0 | 1 | 0 |
| 2 | 11.2 | 0 | 0 | 0 | 2 | 0 | 0 | 0 |
| 3 | 0.0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |

## Flaggor (5)

- **NY SAK UTAN FÖRKLARING** dag 1 0:17: byta: ingen text eller bild har förklarat det innan första gången
- **TRÄNGSEL** dag 1 4:59: notis ”Kvarnen funkar. Soptippen är en gruva.” och tanke-text ”💭 Min egen tråd. Nu printar jag en nyck” inom 0.7 s
- **FÖRVIRRAD** dag 1 12:32: pilen pekar 25 m från där målet görs (okänt)
- **HANN INTE LÄSA** dag 2 0:02: dagbok ”Dag 2. 20 dagar till jul.
Utan dörr blåser natten ” stod 0.0 s, behöver 4.7 s
- **HANN INTE LÄSA** dag 2 1:06: info ”🚛 En stor bil tippade en ny last på soptippen!” stod 3.8 s, behöver 4.0 s

## Friktionskurvan (sekunder per mål: nybörjaren mot AX)

| Dag | Mål | Nybörjaren | AX | × |
|---|---|---|---|---|
| 1 | Lasta av skrivaren | 0 | – | – |
| 1 | Lasta av skrivaren | 35 | – | – |
| 1 | Ställ upp skrivaren | 21 | – | – |
| 1 | Skrivaren behöver ström | 35 | – | – |
| 1 | Ställ cykel och generator | 26 | – | – |
| 1 | Välj vad skrivaren ska printa | 13 | – | – |
| 1 | Trampa cykeln | 5 | – | – |
| 1 | En nyckelring till | 28 | – | – |
| 1 | Sälj nyckelringarna | 39 | – | – |
| 1 | Köp kvarnen | 21 | – | – |
| 1 | Ställ kvarnen | 25 | – | – |
| 1 | Gör egen tråd | 28 | – | – |
| 1 | Printa med egen tråd | 23 | – | – |
| 1 | Sälj hos Ali | 30 | – | – |
| 1 | Gå till Ali | 35 | – | – |
| 1 | Plocka skräp och mal det | 261 | – | – |
| 1 | Printa skräpgripen | 27 | – | – |
| 1 | Printa och sälj nyckelringar | 35 | – | – |
| 1 | Sälj blomkrukan | 31 | – | – |
| 1 | Köp sängen | 15 | – | – |
| 1 | Printa sängen | 72 | – | – |
| 2 | Mal skräp, printa och sälj | -642 | – | – |
| 2 | Printa kvarnmotorn till kvarnen | 36 | – | – |
| 2 | Kolla vad som flög ut från sopbilen | 37 | – | – |
| 2 | Vänta på sopbilen. Den lämnar något. | 42 | – | – |
| 2 | Printa ölhållare med kylklamp | 5 | – | – |
| 2 | Ge Rolf ölhållare med kylklamp | 59 | – | – |
| 2 | Trampa, printa och sälj | 203 | – | – |
| 2 | Bygg en dörr till skjulet | 82 | – | – |

---

# Simulering kapitel 1 – körning 1

*Gjord 2026-11-21 22:13 med `verktyg/sim-kapitel1.mjs` + `verktyg/sim-bot.js` (punkt AX). Boten går 4,5 m/s, läser 15 tecken/s, trampar, vevar, plockar, printar, köper och säljer via spelets egna funktioner. Tiderna är speltid.*

## Sammanfattning

| Dag | Minuter | Väntan | Prints (totalt) | Kr vid sömn | Bär | Trivsel |
|---|---|---|---|---|---|---|
| 1 | 13.8 | 1 % | 22 | 205 | 6 | 14 |
| 2 | 11.2 | 1 % | 32 | 847 | 10 | 35 |
| 3 | 0.0 | 0 % | 32 | 847 | 10 | 35 |

## Flaskhalskartan (EE)

| Dag | bara | mala | trampa | strom | skrivare | inkomst | Upplåst |
|---|---|---|---|---|---|---|---|
| 1 | 4 | 7 | 22 | 9 | 138 | 20 | grip (bara, 9:14, reserv), kruka (inkomst, 10:51) |
| 2 | 3 | 7 | 8 | 34 | 342 | 0 | kvarnmotor (mala, 2:33), rullstall (skrivare, 4:43), trim_skrivare (skrivare, 6:16), vindsnurra (trampa, 8:30) |
| 3 | 0 | 0 | 0 | 0 | 0 | 0 |  |

TIDIG: 0 · FAST: 0 · upplåst av reserven (målet väntade 3 min): 1

**SKRATT:** 21 roliga ögonblick på 25 min (8.4 per 10 min, mål minst 5)

**Köp:**

- dag 1 3:42 – gammalkvarn (30 kr)
- dag 1 10:24 – grip (50 kr)
- dag 1 11:03 – kruka (40 kr)
- dag 1 12:12 – sang (60 kr)
- dag 2 3:06 – kvarnmotor (50 kr)
- dag 2 8:58 – vindsnurra (133 kr)
- dag 2 9:47 – dorr (120 kr)

## Storykedjan (kvittens → varför → nytt mål)

| Dag | Tid | Id | Kvittens | Varför | Nytt mål | Tid till målet |
|---|---|---|---|---|---|---|
| 1 | 0:35 | lasta | Tung. Den har storebror aldrig burit så långt. |  | Skrivaren ställer jag mot skräpberget. Min första verkstad. | 0.7 s |
| 1 | 2:10 | valjModell | Den piper. Den GÖR något. |  | Nu behöver den ström. Trampa. | 0.3 s |
| 1 | 2:15 | trampa | Klar! Ta ut den innan den ändrar sig. |  | En nyckelring till, så länge storebrors rulle räcker. | 0.5 s |
| 1 | 4:35 | flaska | Det blir tråd! Riktig plasttråd. |  | Min egen tråd. Nu printar jag en nyckelring av den. | 0.8 s |
| 1 | 11:26 | krukaD1 | En kruka. Mamma skulle bli så stolt. Hon får inte veta. |  | Ali gillar krukor. Han sa det själv. | 0.9 s |
| 1 | 13:24 | printSang | En säng. Jag printade en SÄNG. |  | Sängen ska in i skjulet. Sen sover jag. | 0.3 s |
| 2 | 9:28 | vindsnurra | Den snurrar! Långsamt. Men den snurrar. |  | Det drar från dörrhålet. En dörr kan jag printa. | 3.0 s |

## Hur länge nya mål väntade (från att förra målet blev klart till att det nya syntes i målrutan)

Snitt 1.9 s · max 11.8 s · över 4 s: 1 · över 8 s: 1 av 30

## Flaggor (17)

- **LUGN** dag 2 0:07: 0.0 s efter BÖRJA DAGEN: [lapp] "Första natten i en riktig säng. Jag printade den själv."
- **KROCK** dag 1 0:22: 0.8 s mellan [lapp] "Spikade ihop en skylt av bräder från skräpberget: Soptippsvä" och [notis] "💭 Storebrors skrivare står kvar på cykeln vid vägen. Den sk"
- **KROCK** dag 1 4:39: 0.7 s mellan [notis] "Kvarnen funkar. Soptippen är en gruva." och [notis] "💭 Min egen tråd. Nu printar jag en nyckelring av den."
- **RÖST AVBRUTEN** dag 1 5:41: ali: 4.3 s kvar ← du: Ali har något åt mig. Jag går över vägen
- **SEN** dag 1 3:03: 46.5 s efter händelsen: bror: "VA FAN?! Fick du igång den?? Jag försökte i typ ett år. Den bara pep. "
- **SEN** dag 1 4:20: 25.5 s efter händelsen: kjelle: "God morgon, det är Kjelle på Radio Tippen! Det har flyttat in någon i "
- **SEN** dag 1 11:14: 22.4 s efter händelsen: ali: "Ali här. Jag såg Skräpgrip på avstånd. Ett streck blev lite snett. Mit"
- **SEN** dag 2 0:25: 17.4 s efter händelsen: notis:Första natten i en riktig säng. Jag prin: "Första natten i en riktig säng. Jag printade den själv."
- **PAUS** dag 1 2:15: 0.2 s paus före "Klar! Ta ut den innan den ändrar sig."
- **PAUS** dag 1 4:36: 0.0 s paus före "Det blir tråd! Riktig plasttråd."
- **PAUS** dag 1 4:38: 0.0 s paus före "Kvarnen funkar. Soptippen är en gruva."
- **PAUS** dag 1 6:03: 0.0 s paus före "Nu sparas lite ström. En nyckelring, typ. Framtide"
- **PAUS** dag 2 3:36: 0.0 s paus före "⚙️ Kvarnmotorn ska skruvas fast på kvarnen."
- **PAUS** dag 2 4:21: 0.0 s paus före "Gården är STÄDAD, av mig, frivilligt. Mamma skulle"
- **TORRT** dag 1 6:03: 288 s utan roligt ögonblick
- **TEMPO** dag 1 13:46: dag 1 tog 13.8 min (mål 10–12)
- **TEMPO** dag 3 0:00: dag 3 tog 0.0 min (mål 10–15)

Sidfel: inga

## Dag 1

| Tid | Källa | Vem | Text |
|---|---|---|---|
| 0:00 | MÅL |  | Lasta av skrivaren |
| 0:00 | sak | bud | (tips) |
| 0:00 | MÅL |  | Lasta av skrivaren |
| 0:00 | väntar | du | Se så mycket skräp här är. Det är ju en guldgruva! |
| 0:01 | klar | bud | (tips) |
| 0:03 | sak | du | Se så mycket skräp här är. Det är ju en guldgruva! |
| 0:03 | röst | du | Se så mycket skräp här är. Det är ju en guldgruva! · STORY |
| 0:04 | väntar | info:info | ⏎ Enter – hoppa över |
| 0:08 | sak-del | du | Först borde jag spika upp en skylt, så att alla ser att jag bor HÄR. |
| 0:08 | röst | du | Först borde jag spika upp en skylt, så att alla ser att jag bor HÄR. · STORY |
| 0:14 | klar | du | Se så mycket skräp här är. Det är ju en guldgruva! |
| 0:17 | struken | info:info | ⏎ Enter – hoppa över |
| 0:17 | hjälp | kontroll | Klick: Klicka för att spika |
| 0:22 | lapp | 📔 Dagbok | Spikade ihop en skylt av bräder från skräpberget: Soptippsvägen 1. Inte mycket för världen, men det är MITT. |
| 0:22 | dagbokrad | du | Spikade ihop en skylt av bräder från skräpberget: Soptippsvägen 1. Inte mycket för världen, men det är MITT. |
| 0:22 | väntar | notis:Spikade ihop en skylt av bräder från skr | Spikade ihop en skylt av bräder från skräpberget: Soptippsvägen 1. Inte mycket för världen, men det är MITT. |
| 0:22 | bekräftelse | du | Group |
| 0:22 | väntar | du | Storebrors skrivare står kvar på cykeln vid vägen. Den ska av. |
| 0:22 | sak | du | Storebrors skrivare står kvar på cykeln vid vägen. Den ska av. |
| 0:22 | målruta |  | Lasta av skrivaren |
| 0:22 | pil |  | Lasta av skrivaren |
| 0:22 | notis | tanke | 💭 Storebrors skrivare står kvar på cykeln vid vägen. Den ska av. |
| 0:22 | röst | du | Storebrors skrivare står kvar på cykeln vid vägen. Den ska av. · MÅL |
| 0:28 | klar | du | Storebrors skrivare står kvar på cykeln vid vägen. Den ska av. |
| 0:30 | sak | notis:Spikade ihop en skylt av bräder från skr | Spikade ihop en skylt av bräder från skräpberget: Soptippsvägen 1. Inte mycket för världen, men det är MITT. |
| 0:30 | notis | dagbok | Spikade ihop en skylt av bräder från skräpberget: Soptippsvägen 1. Inte mycket för världen, men det är MITT. |
| 0:32 | klar | notis:Spikade ihop en skylt av bräder från skr | Spikade ihop en skylt av bräder från skräpberget: Soptippsvägen 1. Inte mycket för världen, men det är MITT. |
| 0:35 | händelse | lastatAv | sak=skrivare |
| 0:35 | paket |  | sms |
| 0:35 | väntar | mamma | Hur kunde du bara gå? Är du ok? Svara när jag ringer! |
| 0:35 | händelse | malKlart | id=lasta del=Dag 1 – Kom igång nasta=stall |
| 0:35 | bekräftelse | du | plats |
| 0:35 | kvittens | du | Tung. Den har storebror aldrig burit så långt. |
| 0:35 | väntar | du | Tung. Den har storebror aldrig burit så långt. |
| 0:35 | väntar | du | Skrivaren ställer jag mot skräpberget. Min första verkstad. |
| 0:35 | MÅL |  | Ställ upp skrivaren |
| 0:35 | sak | du | Tung. Den har storebror aldrig burit så långt. |
| 0:35 | röst | du | Tung. Den har storebror aldrig burit så långt. · STORY |
| 0:35 | målruta |  | Ställ upp skrivaren |
| 0:38 | hjälp | kontroll | E: Ryggsäcken och kistan |
| 0:39 | klar | du | Tung. Den har storebror aldrig burit så långt. |
| 0:39 | sak | du | Skrivaren ställer jag mot skräpberget. Min första verkstad. |
| 0:39 | pil |  | Ställ upp skrivaren |
| 0:39 | notis | tanke | 💭 Skrivaren ställer jag mot skräpberget. Min första verkstad. |
| 0:39 | röst | du | Skrivaren ställer jag mot skräpberget. Min första verkstad. · MÅL |
| 0:40 | nick |  | nick:1 |
| 0:44 | klar | du | Skrivaren ställer jag mot skräpberget. Min första verkstad. |
| 0:56 | väntar | info:bra | 🖨️ Storebrors skrivare står på sin plats |
| 0:56 | händelse | placerat | sak=skrivareS |
| 0:56 | paket |  | tanke |
| 0:56 | tanke | du | Storebrors rulle. Den räcker inte länge. |
| 0:56 | väntar | du | Storebrors rulle. Den räcker inte länge. |
| 0:56 | duns | du | ställs ner |
| 0:56 | sak | info:bra | 🖨️ Storebrors skrivare står på sin plats |
| 0:56 | kvitto-visas | info:bra | 🖨️ Storebrors skrivare står på sin plats |
| 0:56 | toast | bra | 🖨️ Storebrors skrivare står på sin plats |
| 0:56 | händelse | malKlart | id=stall del=Dag 1 – Kom igång nasta=strom |
| 0:56 | bekräftelse | du | plats |
| 0:56 | struken | du | Storebrors rulle. Den räcker inte länge. |
| 0:56 | väntar | du | Skrivaren behöver ström. Hur fixar jag det här ute? |
| 0:56 | MÅL |  | Skrivaren behöver ström |
| 0:58 | klar | info:bra | 🖨️ Storebrors skrivare står på sin plats |
| 0:58 | målruta |  | Skrivaren behöver ström |
| 1:00 | kvittens-bock |  | ✓ Ställ upp skrivaren |
| 1:00 | sak | du | Skrivaren behöver ström. Hur fixar jag det här ute? |
| 1:00 | pil |  | Skrivaren behöver ström |
| 1:00 | notis | tanke | 💭 Skrivaren behöver ström. Hur fixar jag det här ute? |
| 1:00 | röst | du | Skrivaren behöver ström. Hur fixar jag det här ute? · MÅL |
| 1:01 | nick |  | nick:2 |
| 1:05 | klar | du | Skrivaren behöver ström. Hur fixar jag det här ute? |
| 1:31 | paket |  | tanke |
| 1:31 | tanke | du | Cykeln… och storebrors generator? |
| 1:31 | väntar | du | Cykeln… och storebrors generator? |
| 1:31 | sak | du | Cykeln… och storebrors generator? |
| 1:31 | kvitto-visas | du | Cykeln… och storebrors generator? |
| 1:31 | notis | tanke | 💭 Cykeln… och storebrors generator? |
| 1:31 | röst | du | Cykeln… och storebrors generator? · STORY |
| 1:31 | händelse | malKlart | id=strom del=Dag 1 – Kom igång nasta=bygg |
| 1:31 | bekräftelse | du | plats |
| 1:31 | väntar | du | Nu generatorn på cykeln. Den gör el när hjulet snurrar. |
| 1:32 | MÅL |  | Ställ cykel och generator |
| 1:34 | målruta |  | Ställ cykel och generator |
| 1:34 | klar | du | Cykeln… och storebrors generator? |
| 1:35 | kvittens-bock |  | ✓ Skrivaren behöver ström |
| 1:37 | sak | du | Nu generatorn på cykeln. Den gör el när hjulet snurrar. |
| 1:37 | pil |  | Ställ cykel och generator |
| 1:37 | notis | tanke | 💭 Nu generatorn på cykeln. Den gör el när hjulet snurrar. |
| 1:37 | röst | du | Nu generatorn på cykeln. Den gör el när hjulet snurrar. · MÅL |
| 1:41 | händelse | placerat | sak=generator |
| 1:41 | duns | du | ställs ner |
| 1:42 | klar | du | Nu generatorn på cykeln. Den gör el när hjulet snurrar. |
| 1:49 | ljud | utrustning | Cykeln i famnen |
| 1:49 | händelse | lyft | sak=cykel |
| 1:55 | händelse | placerat | sak=cykel |
| 1:55 | duns | du | ställs ner |
| 1:57 | händelse | ombyggd | sak=cykel |
| 1:57 | händelse | malKlart | id=bygg del=Dag 1 – Kom igång nasta=valjModell |
| 1:57 | bekräftelse | du | plats |
| 1:57 | väntar | du | Strömmen finns. Nu ska skrivaren veta vad den ska göra, sen trampar jag. |
| 1:57 | målruta |  | Välj vad skrivaren ska printa |
| 1:57 | MÅL |  | Välj vad skrivaren ska printa |
| 1:57 | sak | du | Strömmen finns. Nu ska skrivaren veta vad den ska göra, sen trampar jag. |
| 1:57 | pil |  | Välj vad skrivaren ska printa |
| 1:57 | notis | tanke | 💭 Strömmen finns. Nu ska skrivaren veta vad den ska göra, sen trampar jag. |
| 1:57 | röst | du | Strömmen finns. Nu ska skrivaren veta vad den ska göra, sen trampar jag. · MÅL |
| 2:01 | kvittens-bock |  | ✓ Montera generatorn |
| 2:03 | klar | du | Strömmen finns. Nu ska skrivaren veta vad den ska göra, sen trampar jag. |
| 2:10 | händelse | printStart | sak=nyckelring |
| 2:10 | tanke | du | Den stannar när jag slutar trampa. Ström som sparas hade varit nåt. |
| 2:10 | väntar | du | Den stannar när jag slutar trampa. Ström som sparas hade varit nåt. |
| 2:10 | händelse | malKlart | id=valjModell del=Dag 1 – Kom igång nasta=trampa |
| 2:10 | bekräftelse | du | plats |
| 2:10 | kvittens | du | Den piper. Den GÖR något. |
| 2:10 | väntar | du | Den piper. Den GÖR något. |
| 2:10 | struken | du | Den stannar när jag slutar trampa. Ström som sparas hade varit nåt. |
| 2:10 | väntar | du | Nu behöver den ström. Trampa. |
| 2:10 | MÅL |  | Trampa cykeln |
| 2:10 | sak | du | Den piper. Den GÖR något. |
| 2:10 | röst | du | Den piper. Den GÖR något. · STORY |
| 2:10 | målruta |  | Trampa cykeln |
| 2:12 | klar | du | Den piper. Den GÖR något. |
| 2:12 | sak | du | Nu behöver den ström. Trampa. |
| 2:12 | pil |  | Trampa cykeln |
| 2:12 | notis | tanke | 💭 Nu behöver den ström. Trampa. |
| 2:12 | röst | du | Nu behöver den ström. Trampa. · MÅL |
| 2:15 | klar | du | Nu behöver den ström. Trampa. |
| 2:15 | händelse | printKlar | sak=nyckelring n=1 |
| 2:15 | händelse | malKlart | id=trampa del=Dag 1 – Kom igång nasta=rullSlut |
| 2:15 | bekräftelse | du | plats |
| 2:15 | kvittens | du | Klar! Ta ut den innan den ändrar sig. |
| 2:15 | väntar | du | Klar! Ta ut den innan den ändrar sig. |
| 2:15 | väntar | du | En nyckelring till, så länge storebrors rulle räcker. |
| 2:15 | MÅL |  | En nyckelring till |
| 2:15 | sak | du | Klar! Ta ut den innan den ändrar sig. |
| 2:15 | röst | du | Klar! Ta ut den innan den ändrar sig. · STORY |
| 2:15 | målruta |  | En nyckelring till |
| 2:16 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 2:16 | paket |  | sms |
| 2:16 | väntar | bror | VA FAN?! Fick du igång den?? Jag försökte i typ ett år. Den bara pep. 😳 |
| 2:16 | skratt | bror | VA FAN?! Fick du igång den?? Jag försökt |
| 2:16 | paket |  | sms → ge |
| 2:16 | väntar | bror | Sälj den till Ali, han med affären mitt emot. Han köper gamla grejer. Han köpte min gamla mopedhjälm för 20 spänn. |
| 2:16 | väntar |  | (läget ändras) |
| 2:17 | väntar | foto | Första nyckelringen |
| 2:17 | paket |  | tanke |
| 2:17 | tanke | du | Jag gjorde den här. Av skräp. Det här kan funka. |
| 2:17 | väntar | du | Jag gjorde den här. Av skräp. Det här kan funka. |
| 2:18 | klar | du | Klar! Ta ut den innan den ändrar sig. |
| 2:18 | sak | du | En nyckelring till, så länge storebrors rulle räcker. |
| 2:18 | pil |  | En nyckelring till |
| 2:18 | notis | tanke | 💭 En nyckelring till, så länge storebrors rulle räcker. |
| 2:18 | röst | du | En nyckelring till, så länge storebrors rulle räcker. · MÅL |
| 2:23 | klar | du | En nyckelring till, så länge storebrors rulle räcker. |
| 2:25 | sak | foto | Första nyckelringen |
| 2:25 | foto | du | Första nyckelringen |
| 2:27 | klar | foto | Första nyckelringen |
| 2:29 | sak |  | (läget ändras) |
| 2:30 | klar |  | (läget ändras) |
| 2:34 | sak | du | Jag gjorde den här. Av skräp. Det här kan funka. |
| 2:34 | notis | tanke | 💭 Jag gjorde den här. Av skräp. Det här kan funka. |
| 2:34 | röst | du | Jag gjorde den här. Av skräp. Det här kan funka. · STORY |
| 2:36 | händelse | printStart | sak=nyckelring |
| 2:38 | klar | du | Jag gjorde den här. Av skräp. Det här kan funka. |
| 2:43 | toast | guld | Nyckelring är klar – ta ut den |
| 2:43 | väntar | notis:Storebrors skrivare: Nyckelring är klar  | Storebrors skrivare: Nyckelring är klar – ta ut den |
| 2:43 | händelse | printKlar | sak=nyckelring n=2 |
| 2:43 | paket |  | tanke |
| 2:43 | tanke | du | Slut på storebrors rulle. Och här ligger ju plast överallt. Om jag bara kunde göra tråd av skräpet… Affären mitt emot kanske har något. |
| 2:43 | väntar | du | Slut på storebrors rulle. Och här ligger ju plast överallt. Om jag bara kunde göra tråd av skräpet… Affären mitt emot kanske har något. |
| 2:43 | händelse | malKlart | id=rullSlut del=Dag 1 – Kom igång nasta=saljTva |
| 2:43 | bekräftelse | du | plats |
| 2:43 | MÅL |  | Sälj nyckelringarna |
| 2:43 | sak | du | Slut på storebrors rulle. Och här ligger ju plast överallt. Om jag bara kunde göra tråd av skräpet… Affären mitt emot kanske har något. |
| 2:43 | kvitto-visas | du | Slut på storebrors rulle. Och här ligger ju plast överallt. Om jag bara kunde göra tråd av skräpet… Affären mitt emot kanske har något. |
| 2:43 | notis | tanke | 💭 Slut på storebrors rulle. Och här ligger ju plast överallt. Om jag bara kunde göra tråd av skräpet… Affären mitt emot kanske har något. |
| 2:43 | röst | du | Slut på storebrors rulle. Och här ligger ju plast överallt. Om jag bara kunde göra tråd av skräpet… Affären mitt emot kanske har något. · STORY |
| 2:46 | målruta |  | Sälj nyckelringarna |
| 2:47 | kvittens-bock |  | ✓ En nyckelring till |
| 2:55 | klar | du | Slut på storebrors rulle. Och här ligger ju plast överallt. Om jag bara kunde göra tråd av skräpet… Affären mitt emot kanske har något. |
| 2:55 | sak | du | (nytt mål i rutan) |
| 2:55 | pil |  | Sälj nyckelringarna |
| 2:55 | klar | du | (nytt mål i rutan) |
| 3:03 | sak | bror | VA FAN?! Fick du igång den?? Jag försökte i typ ett år. Den bara pep. 😳 |
| 3:03 | skratt | bror | VA FAN?! Fick du igång den?? Jag försökt |
| 3:03 | sms | bror | VA FAN?! Fick du igång den?? Jag försökte i typ ett år. Den bara pep. 😳 |
| 3:03 | skratt | bror | VA FAN?! Fick du igång den?? Jag försökt |
| 3:03 | händelse | dialog | id=brorSms1 |
| 3:03 | sms-bubbla | bror | VA FAN?! Fick du igång den?? Jag försökte i typ ett år. Den bara pep. 😳 |
| 3:03 | skratt | bror | VA FAN?! Fick du igång den?? Jag försökt |
| 3:03 | röst | bror | VA FAN?! Fick du igång den?? Jag försökte i typ ett år. Den bara pep. 😳 · REAKTION |
| 3:03 | hjälp | kontroll | Tab: Dina sms och dagboken |
| 3:07 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 3:09 | klar | bror | VA FAN?! Fick du igång den?? Jag försökte i typ ett år. Den bara pep. 😳 |
| 3:09 | skratt | bror | VA FAN?! Fick du igång den?? Jag försökt |
| 3:11 | struken | notis:Storebrors skrivare: Nyckelring är klar  | Storebrors skrivare: Nyckelring är klar – ta ut den |
| 3:14 | väntar | ali | Hallå! Du med skrivaren! Kom över vägen, jag köper sånt där! |
| 3:17 | sak | ali | Hallå! Du med skrivaren! Kom över vägen, jag köper sånt där! |
| 3:17 | röst | ali | Hallå! Du med skrivaren! Kom över vägen, jag köper sånt där! · REAKTION |
| 3:19 | struken | ali | Pappas gamla köttkvarn. Den har malt allt utom kött. Trettio kronor, så är den din. |
| 3:19 | händelse | dialog | id=aliForsta |
| 3:19 | butiksbubbla | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 3:20 | röst | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. · STORY |
| 3:21 | händelse | salt | sak=nyckelring n=2 |
| 3:21 | aliSalt | ali | 30 |
| 3:21 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 3:21 | händelse | dialog | id=aliKvarnErbjud |
| 3:21 | butiksbubbla | ali | Pappas gamla köttkvarn. Den har malt allt utom kött. Trettio kronor, så är den din. |
| 3:22 | väntar | ali | Pappas gamla köttkvarn. Den har malt allt utom kött. Trettio kronor, så är den din. |
| 3:22 | händelse | malKlart | id=saljTva del=Dag 1 – Kom igång nasta=aliKvarn |
| 3:22 | bekräftelse | du | plats |
| 3:22 | väntar | du | Ali har en gammal kvarn. Den gör tråd av skräp. |
| 3:22 | MÅL |  | Köp kvarnen |
| 3:23 | klar | ali | Hallå! Du med skrivaren! Kom över vägen, jag köper sånt där! |
| 3:25 | målruta |  | Köp kvarnen |
| 3:25 | sak | du | Ali har en gammal kvarn. Den gör tråd av skräp. |
| 3:25 | pil |  | Köp kvarnen |
| 3:25 | notis | tanke | 💭 Ali har en gammal kvarn. Den gör tråd av skräp. |
| 3:25 | röst | du | Ali har en gammal kvarn. Den gör tråd av skräp. · MÅL |
| 3:26 | kvittens-bock |  | ✓ Sälj nyckelringarna |
| 3:29 | klar | du | Ali har en gammal kvarn. Den gör tråd av skräp. |
| 3:31 | struken | bror | Sälj den till Ali, han med affären mitt emot. Han köper gamla grejer. Han köpte min gamla mopedhjälm för 20 spänn. |
| 3:31 | sak | ali | Pappas gamla köttkvarn. Den har malt allt utom kött. Trettio kronor, så är den din. |
| 3:31 | röst | ali | Pappas gamla köttkvarn. Den har malt allt utom kött. Trettio kronor, så är den din. · STORY |
| 3:38 | klar | ali | Pappas gamla köttkvarn. Den har malt allt utom kött. Trettio kronor, så är den din. |
| 3:40 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 3:40 | struken | ali | Pappas gamla köttkvarn. Den har malt allt utom kött. Trettio kronor, så är den din. |
| 3:41 | händelse | kopt | sak=gammalkvarn |
| 3:41 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 3:41 | händelse | dialog | id=aliKvarnKopt |
| 3:41 | röst | ali | Den är din. Pappa hade blivit glad. Han trodde aldrig att nån skulle vilja ha den. · STORY |
| 3:41 | butiksbubbla | ali | Den är din. Pappa hade blivit glad. Han trodde aldrig att nån skulle vilja ha den. |
| 3:43 | händelse | malKlart | id=aliKvarn del=Dag 1 – Kom igång nasta=kvarn |
| 3:43 | bekräftelse | du | plats |
| 3:43 | väntar | du | Kvarnen ska stå vid skrivaren, närmast skräpberget. |
| 3:43 | målruta |  | Ställ kvarnen |
| 3:43 | MÅL |  | Ställ kvarnen |
| 3:45 | sak | du | Kvarnen ska stå vid skrivaren, närmast skräpberget. |
| 3:45 | pil |  | Ställ kvarnen |
| 3:45 | notis | tanke | 💭 Kvarnen ska stå vid skrivaren, närmast skräpberget. |
| 3:45 | röst | du | Kvarnen ska stå vid skrivaren, närmast skräpberget. · MÅL |
| 3:46 | nick |  | nick:9 |
| 3:47 | kvittens-bock |  | ✓ Köp kvarnen |
| 3:49 | klar | du | Kvarnen ska stå vid skrivaren, närmast skräpberget. |
| 3:55 | väntar | kjelle | God morgon, det är Kjelle på Radio Tippen! Det har flyttat in någon i det gamla skjulet. Med en cykel och en skrivare. Spännande, Gunnar. |
| 3:55 | radio | kjelle | God morgon, det är Kjelle på Radio Tippen! Det har flyttat in någon i det gamla skjulet. Med en cykel och en skrivare. Spännande, Gunnar. |
| 3:55 | skratt | du | Radio-Kjelle |
| 3:58 | sak | mamma | Hur kunde du bara gå? Är du ok? Svara när jag ringer! |
| 3:58 | sms | mamma | Hur kunde du bara gå? Är du ok? Svara när jag ringer! |
| 3:58 | sms-bubbla | mamma | Hur kunde du bara gå? Är du ok? Svara när jag ringer! |
| 3:58 | röst | mamma | Hur kunde du bara gå? Är du ok? Svara när jag ringer! · STORY |
| 4:02 | klar | mamma | Hur kunde du bara gå? Är du ok? Svara när jag ringer! |
| 4:08 | händelse | placerat | sak=kvarnen |
| 4:08 | duns | du | ställs ner |
| 4:08 | händelse | malKlart | id=kvarn del=Dag 1 – Kom igång nasta=flaska |
| 4:08 | bekräftelse | du | plats |
| 4:08 | väntar | du | Skräp i kvarnen, sen vevar jag. Då blir det tråd. |
| 4:08 | målruta |  | Gör egen tråd |
| 4:08 | MÅL |  | Gör egen tråd |
| 4:08 | sak | du | Skräp i kvarnen, sen vevar jag. Då blir det tråd. |
| 4:08 | pil |  | Gör egen tråd |
| 4:08 | notis | tanke | 💭 Skräp i kvarnen, sen vevar jag. Då blir det tråd. |
| 4:08 | röst | du | Skräp i kvarnen, sen vevar jag. Då blir det tråd. · MÅL |
| 4:08 | nick |  | nick:10 |
| 4:11 | hjälp | kontroll | Klicka och håll: Veva kvarnen |
| 4:12 | kvittens-bock |  | ✓ Ställ kvarnen |
| 4:12 | klar | du | Skräp i kvarnen, sen vevar jag. Då blir det tråd. |
| 4:20 | sak | kjelle | God morgon, det är Kjelle på Radio Tippen! Det har flyttat in någon i det gamla skjulet. Med en cykel och en skrivare. Spännande, Gunnar. |
| 4:20 | notis |  | 📻 Radio Tippen: God morgon, det är Kjelle på Radio Tippen! Det har flyttat in någon i det gamla skjulet. Med en cykel och en skrivare. Spännande, Gunnar. |
| 4:20 | röst | kjelle | God morgon, det är Kjelle på Radio Tippen! Det har flyttat in någon i det gamla skjulet. Med en cykel och en skrivare. Spännande, Gunnar. · REAKTION |
| 4:31 | tanke | du | Vem är Gunnar? |
| 4:31 | väntar | du | Vem är Gunnar? |
| 4:32 | klar | kjelle | God morgon, det är Kjelle på Radio Tippen! Det har flyttat in någon i det gamla skjulet. Med en cykel och en skrivare. Spännande, Gunnar. |
| 4:34 | väntar | info:bra | 3 st i tratten – veva nu! |
| 4:34 | sak | info:bra | 3 st i tratten – veva nu! |
| 4:34 | kvitto-visas | info:bra | 3 st i tratten – veva nu! |
| 4:34 | toast | bra | 3 st i tratten – veva nu! |
| 4:35 | händelse | malKlart | id=flaska del=Dag 1 – Kom igång nasta=egenPrint |
| 4:35 | bekräftelse | du | plats |
| 4:35 | kvittens | du | Det blir tråd! Riktig plasttråd. |
| 4:35 | väntar | du | Det blir tråd! Riktig plasttråd. |
| 4:35 | väntar | du | Kvarnen funkar. Soptippen är en gruva. |
| 4:35 | struken | du | Vem är Gunnar? |
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
| 4:43 | klar | du | Min egen tråd. Nu printar jag en nyckelring av den. |
| 4:53 | händelse | printStart | sak=nyckelring |
| 4:53 | toast | bra | 🔗 Slangen kopplad |
| 4:58 | toast | guld | ✅ |
| 4:58 | händelse | printKlar | sak=nyckelring n=3 |
| 4:58 | paket |  | tanke |
| 4:58 | tanke | du | En nyckelring av en gammal schampoflaska. Den luktar fortfarande päron. |
| 4:58 | väntar | du | En nyckelring av en gammal schampoflaska. Den luktar fortfarande päron. |
| 4:58 | skratt | du | egen tråd |
| 4:58 | händelse | malKlart | id=egenPrint del=Dag 1 – Kom igång nasta=salj |
| 4:58 | bekräftelse | du | plats |
| 4:58 | struken | du | En nyckelring av en gammal schampoflaska. Den luktar fortfarande päron. |
| 4:58 | väntar | du | Ali köper nog den här också. |
| 4:58 | målruta |  | Sälj hos Ali |
| 4:58 | MÅL |  | Sälj hos Ali |
| 4:59 | sak | du | Ali köper nog den här också. |
| 4:59 | pil |  | Sälj hos Ali |
| 4:59 | notis | tanke | 💭 Ali köper nog den här också. |
| 4:59 | röst | du | Ali köper nog den här också. · MÅL |
| 4:59 | nick |  | nick:12 |
| 4:59 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 5:01 | klar | du | Ali köper nog den här också. |
| 5:02 | kvittens-bock |  | ✓ Printa med egen tråd |
| 5:10 | händelse | printStart | sak=nyckelring |
| 5:11 | toast | guld | ✅ |
| 5:11 | händelse | printKlar | sak=nyckelring n=4 |
| 5:12 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 5:14 | händelse | printStart | sak=nyckelring |
| 5:15 | toast | guld | ✅ |
| 5:15 | händelse | printKlar | sak=nyckelring n=5 |
| 5:15 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 5:26 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 5:28 | händelse | salt | sak=nyckelring n=3 |
| 5:28 | aliSalt | ali | 45 |
| 5:28 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 5:28 | händelse | dialog | id=aliNyckelIgen |
| 5:28 | röst | ali | Nyckelringar igen? Folk tappar sina nycklar hela tiden. · STORY |
| 5:28 | butiksbubbla | ali | Nyckelringar igen? Folk tappar sina nycklar hela tiden. |
| 5:29 | händelse | malKlart | id=salj del=Dag 1 – Kom igång nasta=powerbank |
| 5:29 | bekräftelse | du | plats |
| 5:29 | paket |  | sms → ge |
| 5:29 | väntar | ali | Ali här. Glömde en sak. Kom tillbaka, jag har nåt åt dig. |
| 5:29 | väntar |  | (läget ändras) |
| 5:29 | MÅL |  | Gå till Ali |
| 5:30 | sak |  | (läget ändras) |
| 5:30 | klar |  | (läget ändras) |
| 5:31 | målruta |  | Gå till Ali |
| 5:31 | sak | du | (nytt mål i rutan) |
| 5:31 | pil |  | Gå till Ali |
| 5:31 | klar | du | (nytt mål i rutan) |
| 5:33 | kvittens-bock |  | ✓ Sälj hos Ali |
| 5:39 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 5:41 | sak | ali | Ali här. Glömde en sak. Kom tillbaka, jag har nåt åt dig. |
| 5:41 | sms | ali | Ali här. Glömde en sak. Kom tillbaka, jag har nåt åt dig. |
| 5:41 | händelse | dialog | id=aliPbKom |
| 5:41 | sms-bubbla | ali | Ali här. Glömde en sak. Kom tillbaka, jag har nåt åt dig. |
| 5:41 | röst | ali | Ali här. Glömde en sak. Kom tillbaka, jag har nåt åt dig. · STORY |
| 5:41 | röst | du | Ali har något åt mig. Jag går över vägen till affären. · STORY |
| 5:41 | röst-avbruten | ali | 4.3 s kvar ← du: Ali har något åt mig. Jag går över vägen |
| 5:46 | klar | ali | Ali här. Glömde en sak. Kom tillbaka, jag har nåt åt dig. |
| 5:48 | paket | ali | ali → ge |
| 5:48 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 5:48 | händelse | dialog | id=aliPowerbank |
| 5:48 | röst | ali | Jag såg dig cykla. Det ser jobbigt ut. Ta den här. Bra kunder får bonus. · STORY |
| 5:48 | butiksbubbla | ali | Jag såg dig cykla. Det ser jobbigt ut. Ta den här. Bra kunder får bonus. |
| 6:00 | paket |  | tanke |
| 6:00 | tanke | du | Powerbanken ska sitta på cykeln. |
| 6:00 | väntar | du | Powerbanken ska sitta på cykeln. |
| 6:00 | hjälp | kontroll | R: Vrid innan du ställer ner |
| 6:01 | sak | du | Powerbanken ska sitta på cykeln. |
| 6:01 | notis | tanke | 💭 Powerbanken ska sitta på cykeln. |
| 6:01 | röst | du | Powerbanken ska sitta på cykeln. · REAKTION |
| 6:03 | skratt | du | powerbanken monterad |
| 6:03 | paket |  | tanke |
| 6:03 | tanke | du | Nu sparas lite ström. En nyckelring, typ. Framtiden är här, och den sitter fast med eltejp. |
| 6:03 | väntar | du | Nu sparas lite ström. En nyckelring, typ. Framtiden är här, och den sitter fast med eltejp. |
| 6:03 | monterat | du | byggsats:powerbank |
| 6:03 | händelse | monterat | sak=powerbank |
| 6:03 | klar | du | Powerbanken ska sitta på cykeln. |
| 6:03 | sak | du | Nu sparas lite ström. En nyckelring, typ. Framtiden är här, och den sitter fast med eltejp. |
| 6:03 | kvitto-visas | du | Nu sparas lite ström. En nyckelring, typ. Framtiden är här, och den sitter fast med eltejp. |
| 6:03 | notis | tanke | 💭 Nu sparas lite ström. En nyckelring, typ. Framtiden är här, och den sitter fast med eltejp. |
| 6:03 | röst | du | Nu sparas lite ström. En nyckelring, typ. Framtiden är här, och den sitter fast med eltejp. · REAKTION |
| 6:03 | händelse | malKlart | id=powerbank del=Dag 1 – Kom igång nasta=kopGrip |
| 6:03 | bekräftelse | du | plats |
| 6:03 | paket |  | lapp |
| 6:03 | lapp-kö | 🧺 Ali | Ali här. Nyckelringen sålde direkt. Jag ville bli ingenjör en gång. Nu har jag låtit en AI rita en skräpgrip. Kom och titta. |
| 6:03 | väntar | ali | Ali här. Nyckelringen sålde direkt. Jag ville bli ingenjör en gång. Nu har jag låtit en AI rita en skräpgrip. Kom och titta. |
| 6:04 | MÅL |  | Plocka skräp och mal det |
| 6:06 | målruta |  | Plocka skräp och mal det |
| 6:07 | kvittens-bock |  | ✓ Gå till Ali |
| 6:11 | klar | du | Nu sparas lite ström. En nyckelring, typ. Framtiden är här, och den sitter fast med eltejp. |
| 6:11 | sak | du | (nytt mål i rutan) |
| 6:11 | pil |  | Plocka skräp och mal det |
| 6:11 | klar | du | (nytt mål i rutan) |
| 6:12 | nick |  | nick:14 |
| 6:21 | händelse | printStart | sak=nyckelring |
| 6:22 | toast | fel | Ingen ström – trampa cykeln |
| 6:22 | väntar | notis:Storebrors skrivare: Ingen ström – tramp | Storebrors skrivare: Ingen ström – trampa cykeln |
| 6:22 | sak | notis:Storebrors skrivare: Ingen ström – tramp | Storebrors skrivare: Ingen ström – trampa cykeln |
| 6:22 | notis | fel | Storebrors skrivare: Ingen ström – trampa cykeln |
| 6:23 | toast | guld | ✅ |
| 6:23 | händelse | printKlar | sak=nyckelring n=6 |
| 6:23 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 6:24 | klar | notis:Storebrors skrivare: Ingen ström – tramp | Storebrors skrivare: Ingen ström – trampa cykeln |
| 6:25 | händelse | printStart | sak=nyckelring |
| 6:26 | toast | guld | ✅ |
| 6:26 | händelse | printKlar | sak=nyckelring n=7 |
| 6:41 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 6:43 | händelse | printStart | sak=nyckelring |
| 6:44 | toast | guld | ✅ |
| 6:44 | händelse | printKlar | sak=nyckelring n=8 |
| 6:44 | sak | ali | Ali här. Nyckelringen sålde direkt. Jag ville bli ingenjör en gång. Nu har jag låtit en AI rita en skräpgrip. Kom och titta. |
| 6:44 | sms | ali | Ali här. Nyckelringen sålde direkt. Jag ville bli ingenjör en gång. Nu har jag låtit en AI rita en skräpgrip. Kom och titta. |
| 6:44 | händelse | dialog | id=aliGripSms |
| 6:44 | sms-bubbla | ali | Ali här. Nyckelringen sålde direkt. Jag ville bli ingenjör en gång. Nu har jag låtit en AI rita en skräpgrip. Kom och titta. |
| 6:44 | röst | ali | Ali här. Nyckelringen sålde direkt. Jag ville bli ingenjör en gång. Nu har jag låtit en AI rita en skräpgrip. Kom och titta. · STORY |
| 6:44 | väntar | du | Med en skräpgrip slipper jag böja mig. Ali har en ritning. |
| 6:45 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 6:46 | paket |  | tanke |
| 6:46 | tanke | du | Femtio kronor. Nu har jag råd med gripen. |
| 6:46 | väntar | du | Femtio kronor. Nu har jag råd med gripen. |
| 6:54 | klar | ali | Ali här. Nyckelringen sålde direkt. Jag ville bli ingenjör en gång. Nu har jag låtit en AI rita en skräpgrip. Kom och titta. |
| 6:56 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 6:57 | händelse | salt | sak=nyckelring n=1 |
| 6:57 | paket |  | ali → ge |
| 6:57 | väntar | ali | Du får bonus! 10 kr extra. Du ser hungrig ut. |
| 6:57 | väntar |  | (läget ändras) |
| 6:57 | aliSalt | ali | 15 |
| 6:57 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 6:57 | händelse | salt | sak=nyckelring n=1 |
| 6:57 | aliSalt | ali | 15 |
| 6:57 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 6:58 | händelse | salt | sak=nyckelring n=1 |
| 6:58 | aliSalt | ali | 15 |
| 6:58 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 6:58 | sak | du | Femtio kronor. Nu har jag råd med gripen. |
| 6:58 | notis | tanke | 💭 Femtio kronor. Nu har jag råd med gripen. |
| 6:58 | röst | du | Femtio kronor. Nu har jag råd med gripen. · REAKTION |
| 7:02 | klar | du | Femtio kronor. Nu har jag råd med gripen. |
| 7:04 | sak | ali | Du får bonus! 10 kr extra. Du ser hungrig ut. |
| 7:04 | notis |  | Ali: ”Du får bonus! 10 kr extra. Du ser hungrig ut.” |
| 7:04 | röst | ali | Du får bonus! 10 kr extra. Du ser hungrig ut. · REAKTION |
| 7:08 | klar | ali | Du får bonus! 10 kr extra. Du ser hungrig ut. |
| 7:10 | sak |  | (läget ändras) |
| 7:10 | klar |  | (läget ändras) |
| 7:16 | sak | du | Med en skräpgrip slipper jag böja mig. Ali har en ritning. |
| 7:16 | röst | du | Med en skräpgrip slipper jag böja mig. Ali har en ritning. · STORY |
| 7:20 | händelse | printStart | sak=nyckelring |
| 7:21 | klar | du | Med en skräpgrip slipper jag böja mig. Ali har en ritning. |
| 7:21 | toast | guld | ✅ |
| 7:21 | händelse | printKlar | sak=nyckelring n=9 |
| 7:22 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 7:24 | händelse | printStart | sak=nyckelring |
| 7:25 | toast | guld | ✅ |
| 7:25 | händelse | printKlar | sak=nyckelring n=10 |
| 7:26 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 7:28 | händelse | printStart | sak=nyckelring |
| 7:29 | toast | fel | Ingen ström – trampa cykeln |
| 7:31 | toast | guld | ✅ |
| 7:31 | händelse | printKlar | sak=nyckelring n=11 |
| 7:31 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 7:41 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 7:42 | händelse | salt | sak=nyckelring n=1 |
| 7:42 | aliSalt | ali | 15 |
| 7:42 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 7:42 | händelse | salt | sak=nyckelring n=1 |
| 7:42 | aliSalt | ali | 15 |
| 7:42 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 7:43 | händelse | salt | sak=nyckelring n=1 |
| 7:43 | aliSalt | ali | 15 |
| 7:43 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 7:55 | händelse | printStart | sak=nyckelring |
| 7:56 | toast | guld | ✅ |
| 7:56 | händelse | printKlar | sak=nyckelring n=12 |
| 7:57 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 7:59 | händelse | printStart | sak=nyckelring |
| 8:00 | toast | guld | ✅ |
| 8:00 | händelse | printKlar | sak=nyckelring n=13 |
| 8:01 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 8:03 | händelse | printStart | sak=nyckelring |
| 8:04 | toast | guld | ✅ |
| 8:04 | händelse | printKlar | sak=nyckelring n=14 |
| 8:05 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 8:15 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 8:16 | händelse | salt | sak=nyckelring n=1 |
| 8:16 | aliSalt | ali | 15 |
| 8:16 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 8:17 | händelse | salt | sak=nyckelring n=1 |
| 8:17 | aliSalt | ali | 15 |
| 8:17 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 8:17 | händelse | salt | sak=nyckelring n=1 |
| 8:17 | aliSalt | ali | 15 |
| 8:17 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 8:29 | händelse | printStart | sak=nyckelring |
| 8:30 | toast | guld | ✅ |
| 8:30 | händelse | printKlar | sak=nyckelring n=15 |
| 8:31 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 8:33 | händelse | printStart | sak=nyckelring |
| 8:34 | toast | fel | Ingen ström – trampa cykeln |
| 8:36 | toast | guld | ✅ |
| 8:36 | händelse | printKlar | sak=nyckelring n=16 |
| 8:36 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 8:38 | händelse | printStart | sak=nyckelring |
| 8:39 | toast | guld | ✅ |
| 8:39 | händelse | printKlar | sak=nyckelring n=17 |
| 8:40 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 8:50 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 8:51 | händelse | salt | sak=nyckelring n=1 |
| 8:51 | aliSalt | ali | 15 |
| 8:51 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 8:51 | händelse | salt | sak=nyckelring n=1 |
| 8:51 | aliSalt | ali | 15 |
| 8:51 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 8:52 | händelse | salt | sak=nyckelring n=1 |
| 8:52 | aliSalt | ali | 15 |
| 8:52 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 9:04 | händelse | printStart | sak=nyckelring |
| 9:05 | toast | guld | ✅ |
| 9:05 | händelse | printKlar | sak=nyckelring n=18 |
| 9:06 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 9:14 | upplåst | bara | grip |
| 9:14 | brott | RESERV | grip (bara 2 av 3) |
| 9:14 | händelse | upplast | id=grip flask=bara |
| 9:16 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 9:17 | händelse | salt | sak=nyckelring n=1 |
| 9:17 | aliSalt | ali | 15 |
| 9:17 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 9:26 | väntar | bud | (tips) |
| 9:26 | sak | bud | (tips) |
| 9:26 | väntar | du | Jag har pengar nu. Hos Ali kan jag köpa uppgraderingar – bära mer eller printa snabbare. |
| 9:27 | klar | bud | (tips) |
| 9:29 | sak | du | Jag har pengar nu. Hos Ali kan jag köpa uppgraderingar – bära mer eller printa snabbare. |
| 9:29 | röst | du | Jag har pengar nu. Hos Ali kan jag köpa uppgraderingar – bära mer eller printa snabbare. · MÅL |
| 9:36 | klar | du | Jag har pengar nu. Hos Ali kan jag köpa uppgraderingar – bära mer eller printa snabbare. |
| 9:41 | händelse | printStart | sak=nyckelring |
| 9:42 | toast | guld | ✅ |
| 9:42 | händelse | printKlar | sak=nyckelring n=19 |
| 9:43 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 9:53 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 9:55 | händelse | salt | sak=nyckelring n=1 |
| 9:55 | aliSalt | ali | 15 |
| 9:55 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 10:06 | händelse | printStart | sak=nyckelring |
| 10:07 | toast | guld | ✅ |
| 10:07 | händelse | printKlar | sak=nyckelring n=20 |
| 10:08 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 10:18 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 10:19 | händelse | salt | sak=nyckelring n=1 |
| 10:19 | aliSalt | ali | 15 |
| 10:19 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 10:21 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 10:23 | struken | info:guld | 3D-modell köpt – printa skräpgrip |
| 10:23 | händelse | kopt | sak=grip |
| 10:23 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 10:23 | händelse | dialog | id=aliForstaRitning |
| 10:23 | röst | ali | Bra val. Ritningen räcker till en skräpgrip. · STORY |
| 10:23 | butiksbubbla | ali | Bra val. Ritningen räcker till en skräpgrip. |
| 10:24 | händelse | malKlart | id=kopGrip del=Dag 1 – Kom igång nasta=printGrip |
| 10:24 | bekräftelse | du | plats |
| 10:24 | väntar | du | Min första 3D-modell! Jag printar inte bara saker – jag printar maskiner. |
| 10:24 | MÅL |  | Printa skräpgripen |
| 10:25 | sak | du | Min första 3D-modell! Jag printar inte bara saker – jag printar maskiner. |
| 10:25 | kvitto-visas | du | Min första 3D-modell! Jag printar inte bara saker – jag printar maskiner. |
| 10:25 | lapp | 📔 Dagbok | Min första 3D-modell! Jag printar inte bara saker – jag printar maskiner. |
| 10:25 | dagbokrad | du | Min första 3D-modell! Jag printar inte bara saker – jag printar maskiner. |
| 10:25 | notis | dagbok | Min första 3D-modell! Jag printar inte bara saker – jag printar maskiner. |
| 10:25 | klar | du | Min första 3D-modell! Jag printar inte bara saker – jag printar maskiner. |
| 10:25 | målruta |  | Printa skräpgripen |
| 10:26 | sak | du | (nytt mål i rutan) |
| 10:26 | pil |  | Printa skräpgripen |
| 10:26 | klar | du | (nytt mål i rutan) |
| 10:26 | nick |  | nick:15 |
| 10:43 | händelse | printStart | sak=byggsats:grip |
| 10:43 | toast | fel | Ingen ström – trampa cykeln |
| 10:47 | händelse | printKlar | sak=byggsats:grip n=1 |
| 10:47 | toast | guld | ✅ |
| 10:47 | väntar | info:guld | Skräpgrip ska jag ha på mig. |
| 10:47 | händelse | tagitUrPrint | sak=byggsats:grip n=1 |
| 10:47 | paket |  | sms |
| 10:47 | väntar | ali | Ali här. Jag såg Skräpgrip på avstånd. Ett streck blev lite snett. Mitt fel. Vackert ändå. |
| 10:47 | sak | info:guld | Skräpgrip ska jag ha på mig. |
| 10:47 | kvitto-visas | info:guld | Skräpgrip ska jag ha på mig. |
| 10:47 | toast | guld | Skräpgrip ska jag ha på mig. |
| 10:48 | hjälp | kontroll | Klick: Klicka för att ta på dig den |
| 10:49 | klar | info:guld | Skräpgrip ska jag ha på mig. |
| 10:51 | väntar | info:guld | 🦾 Skräpgripen sitter! Jag bär 6, siktar lättare och plockar när jag går nära. |
| 10:51 | tog på | du | byggsats:grip |
| 10:51 | händelse | monterat | sak=grip |
| 10:51 | sak | info:guld | 🦾 Skräpgripen sitter! Jag bär 6, siktar lättare och plockar när jag går nära. |
| 10:51 | kvitto-visas | info:guld | 🦾 Skräpgripen sitter! Jag bär 6, siktar lättare och plockar när jag går nära. |
| 10:51 | toast | guld | 🦾 Skräpgripen sitter! Jag bär 6, siktar lättare och plockar när jag går nära. |
| 10:51 | händelse | malKlart | id=printGrip del=Dag 1 – Kom igång nasta=krukaD1 |
| 10:51 | bekräftelse | du | plats |
| 10:51 | MÅL |  | Printa och sälj nyckelringar |
| 10:51 | upplåst | inkomst | kruka |
| 10:51 | brott | UPPLÅST | kruka (inkomst 20 av 6) |
| 10:51 | händelse | upplast | id=kruka flask=inkomst |
| 10:51 | paket |  | tanke → sms |
| 10:51 | tanke | du | Nyckelringar, nyckelringar. Ali kan inte vilja ha fler. |
| 10:51 | väntar | du | Nyckelringar, nyckelringar. Ali kan inte vilja ha fler. |
| 10:51 | väntar | ali | Prova en kruka. Folk köper krukor. Ingen vet varför. |
| 10:51 | skratt | ali | Prova en kruka. Folk köper krukor. Ingen |
| 10:53 | klar | info:guld | 🦾 Skräpgripen sitter! Jag bär 6, siktar lättare och plockar när jag går nära. |
| 10:54 | målruta |  | Köp krukreceptet |
| 10:55 | kvittens-bock |  | ✓ Printa skräpgripen |
| 10:55 | sak | du | (nytt mål i rutan) |
| 10:55 | pil |  | Köp krukreceptet |
| 10:55 | klar | du | (nytt mål i rutan) |
| 10:56 | nick |  | nick:16 |
| 11:01 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 11:02 | händelse | kopt | sak=kruka |
| 11:02 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 11:02 | händelse | dialog | id=aliKrukaRecept |
| 11:02 | röst | ali | Bra val. Folk köper sånt. Jag vet inte varför. · STORY |
| 11:02 | butiksbubbla | ali | Blomkruka? Bra val. Folk köper sånt. Jag vet inte varför. |
| 11:14 | sak | ali | Ali här. Jag såg Skräpgrip på avstånd. Ett streck blev lite snett. Mitt fel. Vackert ändå. |
| 11:14 | sms | ali | Ali här. Jag såg Skräpgrip på avstånd. Ett streck blev lite snett. Mitt fel. Vackert ändå. |
| 11:14 | sms-bubbla | ali | Ali här. Jag såg Skräpgrip på avstånd. Ett streck blev lite snett. Mitt fel. Vackert ändå. |
| 11:14 | röst | ali | Ali här. Jag såg Skräpgrip på avstånd. Ett streck blev lite snett. Mitt fel. Vackert ändå. · REAKTION |
| 11:21 | klar | ali | Ali här. Jag såg Skräpgrip på avstånd. Ett streck blev lite snett. Mitt fel. Vackert ändå. |
| 11:24 | händelse | printStart | sak=kruka |
| 11:26 | toast | guld | ✅ |
| 11:26 | händelse | printKlar | sak=kruka n=1 |
| 11:26 | händelse | malKlart | id=krukaD1 del=Dag 1 – Kom igång nasta=saljKruka |
| 11:26 | bekräftelse | du | plats |
| 11:26 | kvittens | du | En kruka. Mamma skulle bli så stolt. Hon får inte veta. |
| 11:26 | väntar | du | En kruka. Mamma skulle bli så stolt. Hon får inte veta. |
| 11:26 | väntar | du | Ali gillar krukor. Han sa det själv. |
| 11:26 | MÅL |  | Sälj blomkrukan |
| 11:26 | sak | du | En kruka. Mamma skulle bli så stolt. Hon får inte veta. |
| 11:26 | röst | du | En kruka. Mamma skulle bli så stolt. Hon får inte veta. · STORY |
| 11:27 | händelse | tagitUrPrint | sak=kruka n=1 |
| 11:29 | målruta |  | Sälj blomkrukan |
| 11:31 | klar | du | En kruka. Mamma skulle bli så stolt. Hon får inte veta. |
| 11:31 | sak | du | Ali gillar krukor. Han sa det själv. |
| 11:31 | pil |  | Sälj blomkrukan |
| 11:31 | notis | tanke | 💭 Ali gillar krukor. Han sa det själv. |
| 11:31 | röst | du | Ali gillar krukor. Han sa det själv. · MÅL |
| 11:34 | klar | du | Ali gillar krukor. Han sa det själv. |
| 11:43 | sak | du | Nyckelringar, nyckelringar. Ali kan inte vilja ha fler. |
| 11:43 | notis | tanke | 💭 Nyckelringar, nyckelringar. Ali kan inte vilja ha fler. |
| 11:43 | röst | du | Nyckelringar, nyckelringar. Ali kan inte vilja ha fler. · STORY |
| 11:48 | klar | du | Nyckelringar, nyckelringar. Ali kan inte vilja ha fler. |
| 11:54 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 11:56 | händelse | salt | sak=kruka n=1 |
| 11:56 | aliSalt | ali | 70 |
| 11:56 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 11:57 | händelse | malKlart | id=saljKruka del=Dag 1 – Kom igång nasta=kopSang |
| 11:57 | bekräftelse | du | plats |
| 11:57 | väntar | du | Jag tänker inte sova på betongen i natt. Ali har en säng. Typ. |
| 11:57 | MÅL |  | Köp sängen |
| 11:57 | målruta |  | Köp sängen |
| 11:57 | sak | du | Jag tänker inte sova på betongen i natt. Ali har en säng. Typ. |
| 11:57 | pil |  | Köp sängen |
| 11:57 | notis | tanke | 💭 Jag tänker inte sova på betongen i natt. Ali har en säng. Typ. |
| 11:57 | röst | du | Jag tänker inte sova på betongen i natt. Ali har en säng. Typ. · MÅL |
| 12:00 | paket |  | tanke |
| 12:00 | tanke | du | Det börjar bli mörkt. Jag kan inte sova på jorden. |
| 12:00 | väntar | du | Det börjar bli mörkt. Jag kan inte sova på jorden. |
| 12:01 | kvittens-bock |  | ✓ Sälj blomkrukan |
| 12:02 | klar | du | Jag tänker inte sova på betongen i natt. Ali har en säng. Typ. |
| 12:10 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 12:10 | sak | ali | Prova en kruka. Folk köper krukor. Ingen vet varför. |
| 12:10 | skratt | ali | Prova en kruka. Folk köper krukor. Ingen |
| 12:10 | sms | ali | Prova en kruka. Folk köper krukor. Ingen vet varför. |
| 12:10 | skratt | ali | Prova en kruka. Folk köper krukor. Ingen |
| 12:10 | händelse | dialog | id=aliKrukaSms |
| 12:10 | sms-bubbla | ali | Prova en kruka. Folk köper krukor. Ingen vet varför. |
| 12:10 | skratt | ali | Prova en kruka. Folk köper krukor. Ingen |
| 12:10 | röst | ali | Prova en kruka. Folk köper krukor. Ingen vet varför. · STORY |
| 12:11 | händelse | kopt | sak=sang |
| 12:11 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 12:11 | händelse | dialog | id=aliSang |
| 12:11 | butiksbubbla | ali | Sov gott, min vän. |
| 12:12 | väntar | ali | Sov gott, min vän. |
| 12:12 | händelse | malKlart | id=kopSang del=Dag 1 – Kom igång nasta=printSang |
| 12:12 | bekräftelse | du | plats |
| 12:12 | struken | du | Det börjar bli mörkt. Jag kan inte sova på jorden. |
| 12:12 | väntar | du | En säng tar lång tid. Den är värd det. |
| 12:12 | MÅL |  | Printa sängen |
| 12:15 | klar | ali | Prova en kruka. Folk köper krukor. Ingen vet varför. |
| 12:15 | skratt | ali | Prova en kruka. Folk köper krukor. Ingen |
| 12:15 | målruta |  | Printa sängen |
| 12:16 | kvittens-bock |  | ✓ Köp sängen |
| 12:17 | sak | du | En säng tar lång tid. Den är värd det. |
| 12:17 | pil |  | Printa sängen |
| 12:17 | notis | tanke | 💭 En säng tar lång tid. Den är värd det. |
| 12:17 | röst | du | En säng tar lång tid. Den är värd det. · MÅL |
| 12:17 | nick |  | nick:19 |
| 12:20 | klar | du | En säng tar lång tid. Den är värd det. |
| 12:22 | sak | ali | Sov gott, min vän. |
| 12:22 | röst | ali | Sov gott, min vän. · STORY |
| 12:25 | klar | ali | Sov gott, min vän. |
| 13:17 | händelse | printStart | sak=sang |
| 13:18 | toast | fel | Ingen ström – trampa cykeln |
| 13:24 | toast | guld | ✅ |
| 13:24 | händelse | printKlar | sak=sang n=1 |
| 13:24 | händelse | tagitUrPrint | sak=sang n=1 |
| 13:24 | händelse | malKlart | id=printSang del=Dag 1 – Kom igång nasta=sov1 |
| 13:24 | bekräftelse | du | plats |
| 13:24 | kvittens | du | En säng. Jag printade en SÄNG. |
| 13:24 | väntar | du | En säng. Jag printade en SÄNG. |
| 13:24 | paket |  | lapp |
| 13:24 | kvallsrad | du | Nitton år. Inget mer tjat. Gården är full av skräp. I morgon. |
| 13:24 | väntar | du | Sängen ska in i skjulet. Sen sover jag. |
| 13:24 | MÅL |  | Sängen i skjulet |
| 13:24 | sak | du | En säng. Jag printade en SÄNG. |
| 13:24 | röst | du | En säng. Jag printade en SÄNG. · STORY |
| 13:24 | målruta |  | Sängen i skjulet |
| 13:27 | klar | du | En säng. Jag printade en SÄNG. |
| 13:27 | sak | du | Sängen ska in i skjulet. Sen sover jag. |
| 13:27 | pil |  | Sängen i skjulet |
| 13:27 | notis | tanke | 💭 Sängen ska in i skjulet. Sen sover jag. |
| 13:27 | röst | du | Sängen ska in i skjulet. Sen sover jag. · MÅL |
| 13:27 | nick |  | nick:20 |
| 13:30 | klar | du | Sängen ska in i skjulet. Sen sover jag. |
| 13:48 | nattkort | du | 🌙 Dag 1 är slut. God natt. zzz… i en riktig säng Nitton år. Inget mer tjat. Gården är full av skräp. I morgon. DAGENS PRINTAR Nyckelring × 20 Blomkruka × 1 Sän |

<details><summary>Botens handlingar dag 1</summary>

- 0:19 gå till brädhögen (3 m) (5 kr)
- 0:35 gå till cykeln vid vägen (2 m) (5 kr)
- 0:56 gå till rutan i linje 1 (13 m) (5 kr)
- 1:49 gå till cykeln (lyfter den) (13 m) (5 kr)
- 1:55 gå till cykelns plats (11 m) (5 kr)
- 2:06 gå till fel håll en bit (4 m) (5 kr)
- 2:08 gå till skrivaren (2 m) (5 kr)
- 2:10 printar Nyckelring (5 kr)
- 2:17 tar ut 1 st ur skrivaren (5 kr)
- 2:36 printar Nyckelring (sista av storebrors rulle) (5 kr)
- 3:02 nybörjaren ser ingen pil – tittar runt (5 kr)
- 3:08 tar ut 1 st ur skrivaren (5 kr)
- 3:09 gå till fel håll en bit (4 m) (5 kr)
- 3:19 gå till Ali (26 m) (5 kr)
- 3:19 öppnar Alis butik – sälja de två nyckelringarna (5 kr)
- 3:22 säljer hos Ali: +30 kr (35 kr)
- 3:40 öppnar Alis butik – köpa kvarnen (35 kr)
- 3:42 köper gammalkvarn för 30 kr (5 kr)
- 3:43 köpte kvarnen (5 kr)
- 4:08 gå till kvarnens ruta (28 m) (5 kr)
- 4:29 plockar 3 skräp på gården (bär max 3) (5 kr)
- 4:34 gå till kvarnen (14 m) (5 kr)
- 4:52 gå till cykeln (2 m) (5 kr)
- 4:53 printar Nyckelring (5 kr)
- 5:00 tar ut 1 st ur skrivaren (5 kr)
- 5:10 printar Nyckelring (5 kr)
- 5:12 tar ut 1 st ur skrivaren (5 kr)
- 5:14 printar Nyckelring (5 kr)
- 5:15 tar ut 1 st ur skrivaren (5 kr)
- 5:26 gå till Ali (27 m) (5 kr)
- 5:26 öppnar Alis butik – sälja nyckelringar (5 kr)
- 5:28 säljer hos Ali: +45 kr (50 kr)
- 5:35 nybörjaren ser ingen pil – tittar runt (50 kr)
- 5:39 öppnar Alis butik – Ali (powerbanken) (50 kr)
- 5:48 öppnar Alis butik – Ali (powerbanken) (50 kr)
- 6:03 gå till koppla powerbanken till cykeln (24 m) (50 kr)
- 6:18 tjänar pengar till väntar på flaskhalsen för grip: 50/90 kr → printar nyckelring (15 kr) (50 kr)
- 6:19 gå till skrivaren (2 m) (50 kr)
- 6:21 printar Nyckelring (50 kr)
- 6:24 tar ut 1 st ur skrivaren (50 kr)
- 6:25 printar Nyckelring (50 kr)
- 6:34 plockar 3 skräp på gården (bär max 3) (50 kr)
- 6:39 gå till kvarnen (13 m) (50 kr)
- 6:41 gå till skrivaren (1 m) (50 kr)
- 6:41 tar ut 1 st ur skrivaren (50 kr)
- 6:43 printar Nyckelring (50 kr)
- 6:45 tar ut 1 st ur skrivaren (50 kr)
- 6:56 gå till Ali (28 m) (50 kr)
- 6:56 öppnar Alis butik – sälja (50 kr)
- 6:58 säljer hos Ali: +45 kr (95 kr)
- 7:10 tjänar pengar till väntar på flaskhalsen för grip: 105/145 kr → printar nyckelring (15 kr) (105 kr)
- 7:19 gå till skrivaren (25 m) (105 kr)
- 7:20 printar Nyckelring (105 kr)
- 7:23 tar ut 1 st ur skrivaren (105 kr)
- 7:24 printar Nyckelring (105 kr)
- 7:27 tar ut 1 st ur skrivaren (105 kr)
- 7:28 printar Nyckelring (105 kr)
- 7:30 gå till cykeln (1 m) (105 kr)
- 7:32 tar ut 1 st ur skrivaren (105 kr)
- 7:41 gå till Ali (25 m) (105 kr)
- 7:41 öppnar Alis butik – sälja (105 kr)
- 7:43 säljer hos Ali: +45 kr (150 kr)
- 7:45 tjänar pengar till väntar på flaskhalsen för grip: 150/190 kr → printar nyckelring (15 kr) (150 kr)
- 7:54 gå till skrivaren (25 m) (150 kr)
- 7:55 printar Nyckelring (150 kr)
- 7:58 tar ut 1 st ur skrivaren (150 kr)
- 7:59 printar Nyckelring (150 kr)
- 8:02 tar ut 1 st ur skrivaren (150 kr)
- 8:03 printar Nyckelring (150 kr)
- 8:06 tar ut 1 st ur skrivaren (150 kr)
- 8:15 gå till Ali (25 m) (150 kr)
- 8:15 öppnar Alis butik – sälja (150 kr)
- 8:17 säljer hos Ali: +45 kr (195 kr)
- 8:19 tjänar pengar till väntar på flaskhalsen för grip: 195/235 kr → printar nyckelring (15 kr) (195 kr)
- 8:28 gå till skrivaren (25 m) (195 kr)
- 8:29 printar Nyckelring (195 kr)
- 8:32 tar ut 1 st ur skrivaren (195 kr)
- 8:33 printar Nyckelring (195 kr)
- 8:35 gå till cykeln (1 m) (195 kr)
- 8:37 tar ut 1 st ur skrivaren (195 kr)
- 8:38 printar Nyckelring (195 kr)
- 8:41 tar ut 1 st ur skrivaren (195 kr)
- 8:50 gå till Ali (25 m) (195 kr)
- 8:50 öppnar Alis butik – sälja (195 kr)
- 8:52 säljer hos Ali: +45 kr (240 kr)
- 8:54 tjänar pengar till väntar på flaskhalsen för grip: 240/280 kr → printar nyckelring (15 kr) (240 kr)
- 9:03 gå till skrivaren (25 m) (240 kr)
- 9:04 printar Nyckelring (240 kr)
- 9:07 tar ut 1 st ur skrivaren (240 kr)
- 9:16 gå till Ali (25 m) (240 kr)
- 9:16 öppnar Alis butik – sälja (240 kr)
- 9:17 säljer hos Ali: +15 kr (255 kr)
- 9:18 tjänar pengar till väntar på flaskhalsen för grip: 255/280 kr → printar nyckelring (15 kr) (255 kr)
- 9:24 plockar 3 skräp på gården (bär max 3) (255 kr)
- 9:35 gå till kvarnen (31 m) (255 kr)
- 9:39 gå till skrivaren (1 m) (255 kr)
- 9:41 printar Nyckelring (255 kr)
- 9:43 tar ut 1 st ur skrivaren (255 kr)
- 9:53 gå till Ali (28 m) (255 kr)
- 9:53 öppnar Alis butik – sälja (255 kr)
- 9:55 säljer hos Ali: +15 kr (270 kr)
- 9:56 tjänar pengar till väntar på flaskhalsen för grip: 270/280 kr → printar nyckelring (15 kr) (270 kr)
- 10:05 gå till skrivaren (25 m) (270 kr)
- 10:06 printar Nyckelring (270 kr)
- 10:09 tar ut 1 st ur skrivaren (270 kr)
- 10:18 gå till Ali (25 m) (270 kr)
- 10:18 öppnar Alis butik – sälja (270 kr)
- 10:20 säljer hos Ali: +15 kr (285 kr)
- 10:21 öppnar Alis butik – köpa skräpgrip (285 kr)
- 10:24 köper grip för 50 kr (235 kr)
- 10:41 gå till skrivaren (25 m) (235 kr)
- 10:43 printar Skräpgrip (235 kr)
- 10:44 gå till cykeln (1 m) (235 kr)
- 10:48 tar ut 1 st ur skrivaren (235 kr)
- 10:51 tar på grip (235 kr)
- 11:01 gå till Ali (25 m) (235 kr)
- 11:01 öppnar Alis butik – köpa receptet blomkruka (235 kr)
- 11:03 köper kruka för 40 kr (195 kr)
- 11:22 gå till skrivaren (25 m) (195 kr)
- 11:24 printar Blomkruka (195 kr)
- 11:27 tar ut 1 st ur skrivaren (195 kr)
- 11:41 nybörjaren ser ingen pil – tittar runt (195 kr)
- 11:54 gå till Ali (25 m) (195 kr)
- 11:54 öppnar Alis butik – sälja krukan (195 kr)
- 11:57 säljer hos Ali: +70 kr (265 kr)
- 12:10 öppnar Alis butik – köpa sängen (265 kr)
- 12:12 köper sang för 60 kr (205 kr)
- 12:42 gå till dit pilen pekar (30 m) (205 kr)
- 13:02 plockar 6 skräp på gården (bär max 6) (205 kr)
- 13:10 gå till kvarnen (24 m) (205 kr)
- 13:16 gå till skrivaren (3 m) (205 kr)
- 13:17 printar Säng (205 kr)
- 13:19 gå till cykeln (1 m) (205 kr)
- 13:25 tar ut 1 st ur skrivaren (205 kr)
- 13:46 gå till sängplatsen i skjulet (21 m) (205 kr)

</details>

## Dag 2

| Tid | Källa | Vem | Text |
|---|---|---|---|
| 13:48 | vara | ali | kruka |
| 13:48 | händelse | malKlart | id=sov1 del=Dag 1 – Kom igång nasta=kopMotor |
| 13:48 | bekräftelse | du | plats |
| 13:48 | MÅL |  | Mal skräp, printa och sälj |
| 13:50 | väntar | ali | Ali här. Såg skylten. Stavningen är rätt. Det är mer än många. |
| 0:01 | händelse | dagenBorjar | dag=2 |
| 0:01 | meddelande | du | Dag 2. 20 dagar till jul. Utan dörr blåser natten rakt in. |
| 0:01 | dagbokkort | du | Tippen bredvid · Dag 2. 20 dagar till jul. Utan dörr blåser natten rakt in. |
| 0:01 | röst | du | Dag 2. 20 dagar till jul. Tippen bredvid. Utan dörr blåser natten rakt in. · STORY |
| 0:07 | väntar | notis:morgon | Ali vill ha idag: Blomkruka · +50 % |
| 0:07 | händelse | morgonkortStangt | dag=2 |
| 0:07 | paket |  | lapp |
| 0:07 | lapp | 📔 Dagbok | Första natten i en riktig säng. Jag printade den själv. |
| 0:07 | dagbokrad | du | Första natten i en riktig säng. Jag printade den själv. |
| 0:07 | väntar | notis:Första natten i en riktig säng. Jag prin | Första natten i en riktig säng. Jag printade den själv. |
| 0:07 | paket |  | tanke |
| 0:07 | tanke | du | Grön jul igen. Typiskt. |
| 0:07 | väntar | du | Grön jul igen. Typiskt. |
| 0:07 | struken | du | Grön jul igen. Typiskt. |
| 0:07 | väntar | du | Vevandet tar på armarna. Ali har en motor till kvarnen. |
| 0:08 | väntar | foto | Egen säng |
| 0:08 | paket |  | tanke |
| 0:08 | tanke | du | Tänk att jag ska få sova i min egen säng. |
| 0:08 | väntar | du | Tänk att jag ska få sova i min egen säng. |
| 0:10 | målruta |  | Mal skräp, printa och sälj |
| 0:13 | sak | du | Vevandet tar på armarna. Ali har en motor till kvarnen. |
| 0:13 | pil |  | Mal skräp, printa och sälj |
| 0:13 | notis | tanke | 💭 Vevandet tar på armarna. Ali har en motor till kvarnen. |
| 0:13 | röst | du | Vevandet tar på armarna. Ali har en motor till kvarnen. · MÅL |
| 0:17 | klar | du | Vevandet tar på armarna. Ali har en motor till kvarnen. |
| 0:19 | sak | notis:morgon | Ali vill ha idag: Blomkruka · +50 % |
| 0:19 | notis |  | Blomkruka · +50 % |
| 0:23 | klar | notis:morgon | Ali vill ha idag: Blomkruka · +50 % |
| 0:25 | sak | notis:Första natten i en riktig säng. Jag prin | Första natten i en riktig säng. Jag printade den själv. |
| 0:25 | notis | dagbok | Första natten i en riktig säng. Jag printade den själv. |
| 0:27 | klar | notis:Första natten i en riktig säng. Jag prin | Första natten i en riktig säng. Jag printade den själv. |
| 0:58 | sak | foto | Egen säng |
| 0:58 | foto | du | Egen säng |
| 1:00 | klar | foto | Egen säng |
| 1:02 | struken | ali | Ali här. Såg skylten. Stavningen är rätt. Det är mer än många. |
| 1:04 | okänt ord bytt | info | 🚛 Sopbilen tippade en ny last på soptippen! |
| 1:04 | väntar | info:guld | 🚛 Sopbilen tippade en ny last på soptippen! |
| 1:04 | lapp | 📔 Dagbok | Sopbilen tippade en ny last. Allt det skräpet – och grinden är låst. |
| 1:04 | okänt ord bytt | du | Sopbilen tippade en ny last. Allt det skräpet – och grinden är låst. |
| 1:04 | dagbokrad | du | En stor bil tippade en ny last. Allt det skräpet – och grinden är låst. |
| 1:04 | väntar | notis:En stor bil tippade en ny last. Allt det | En stor bil tippade en ny last. Allt det skräpet – och grinden är låst. |
| 1:04 | sak | info:guld | 🚛 Sopbilen tippade en ny last på soptippen! |
| 1:04 | kvitto-visas | info:guld | 🚛 Sopbilen tippade en ny last på soptippen! |
| 1:04 | toast | guld | 🚛 En stor bil tippade en ny last på soptippen! |
| 1:06 | händelse | printStart | sak=kruka |
| 1:06 | klar | info:guld | 🚛 Sopbilen tippade en ny last på soptippen! |
| 1:07 | toast | fel | Ingen ström – trampa cykeln |
| 1:08 | sak | notis:En stor bil tippade en ny last. Allt det | En stor bil tippade en ny last. Allt det skräpet – och grinden är låst. |
| 1:08 | notis | dagbok | En stor bil tippade en ny last. Allt det skräpet – och grinden är låst. |
| 1:10 | toast | guld | ✅ |
| 1:10 | händelse | printKlar | sak=kruka n=2 |
| 1:11 | händelse | tagitUrPrint | sak=kruka n=1 |
| 1:11 | struken | kedja | kruka |
| 1:11 | klar | notis:En stor bil tippade en ny last. Allt det | En stor bil tippade en ny last. Allt det skräpet – och grinden är låst. |
| 1:14 | hjälp | kontroll | R: Vrid innan du ställer ner |
| 1:18 | väntar | mamma | Har du frusit än? |
| 1:21 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 1:21 | röst | ali | Jag ser 3D-skrivarvideor på YouTube i lagret. Inte för att jag har tid. Jag har aldrig tid. · STORY |
| 1:21 | butiksbubbla | ali | Jag ser 3D-skrivarvideor på YouTube i lagret. Inte för att jag har tid. Jag har aldrig tid. |
| 1:22 | händelse | salt | sak=kruka n=1 |
| 1:22 | aliSalt | ali | 105 |
| 1:22 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 1:22 | butiksbubbla | ali | Precis vad jag ville ha idag. 105 kr – med extra. |
| 1:23 | väntar | ali | Precis det jag ville ha idag, min vän. |
| 1:25 | sak | ali | Precis det jag ville ha idag, min vän. |
| 1:25 | röst | ali | Precis det jag ville ha idag, min vän. · STORY |
| 1:28 | klar | ali | Precis det jag ville ha idag, min vän. |
| 1:36 | sak | du | Tänk att jag ska få sova i min egen säng. |
| 1:36 | notis | tanke | 💭 Tänk att jag ska få sova i min egen säng. |
| 1:36 | röst | du | Tänk att jag ska få sova i min egen säng. · STORY |
| 1:40 | klar | du | Tänk att jag ska få sova i min egen säng. |
| 1:41 | händelse | printStart | sak=kruka |
| 1:42 | väntar | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått generator. Vi tar en låt på det. Den här är till dig, Gunnar. |
| 1:42 | radio | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått generator. Vi tar en låt på det. Den här är till dig, Gunnar. |
| 1:42 | skratt | du | Radio-Kjelle |
| 1:44 | toast | guld | ✅ |
| 1:44 | händelse | printKlar | sak=kruka n=3 |
| 1:44 | händelse | tagitUrPrint | sak=kruka n=1 |
| 1:48 | sak | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått generator. Vi tar en låt på det. Den här är till dig, Gunnar. |
| 1:48 | notis |  | 📻 Radio Tippen: Radio Tippen, Kjelle här. Skjulet vid tippen har fått generator. Vi tar en låt på det. Den här är till dig, Gunnar. |
| 1:48 | röst | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått generator. Vi tar en låt på det. Den här är till dig, Gunnar. · REAKTION |
| 1:54 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 1:55 | händelse | salt | sak=kruka n=1 |
| 1:55 | aliSalt | ali | 105 |
| 1:55 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 1:58 | klar | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått generator. Vi tar en låt på det. Den här är till dig, Gunnar. |
| 2:14 | skratt | du | falsk tuta |
| 2:15 | sopsack | rolf | Sopsäckarna landade på gården |
| 2:15 | paket |  | tanke → ge |
| 2:15 | tanke | du | Hmm, vad kastade gubben ut ur sopbilen? Jag går och kollar. |
| 2:15 | väntar | du | Hmm, vad kastade gubben ut ur sopbilen? Jag går och kollar. |
| 2:15 | väntar |  | (läget ändras) |
| 2:16 | sak | du | Hmm, vad kastade gubben ut ur sopbilen? Jag går och kollar. |
| 2:16 | notis | tanke | 💭 Hmm, vad kastade gubben ut ur sopbilen? Jag går och kollar. |
| 2:16 | röst | du | Hmm, vad kastade gubben ut ur sopbilen? Jag går och kollar. · STORY |
| 2:21 | klar | du | Hmm, vad kastade gubben ut ur sopbilen? Jag går och kollar. |
| 2:23 | sak |  | (läget ändras) |
| 2:23 | klar |  | (läget ändras) |
| 2:33 | upplåst | mala | kvarnmotor |
| 2:33 | brott | UPPLÅST | kvarnmotor (mala 13 av 6) |
| 2:33 | händelse | upplast | id=kvarnmotor flask=mala |
| 2:33 | paket |  | tanke → sms |
| 2:33 | tanke | du | Mina armar… Kvarnen borde veva själv. |
| 2:33 | väntar | du | Mina armar… Kvarnen borde veva själv. |
| 2:33 | väntar | ali | Ali här. En motor? Jag har en. Från en gammal tvättmaskin. Den centrifugerar fortfarande om man ber snällt. |
| 2:37 | händelse | printStart | sak=kruka |
| 2:38 | toast | fel | Ingen ström – trampa cykeln |
| 2:41 | toast | guld | ✅ |
| 2:41 | händelse | printKlar | sak=kruka n=4 |
| 2:42 | händelse | tagitUrPrint | sak=kruka n=1 |
| 2:46 | hjälp | kontroll | R: Vrid innan du ställer ner |
| 2:52 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 2:52 | sak | ali | Ali här. En motor? Jag har en. Från en gammal tvättmaskin. Den centrifugerar fortfarande om man ber snällt. |
| 2:52 | sms | ali | Ali här. En motor? Jag har en. Från en gammal tvättmaskin. Den centrifugerar fortfarande om man ber snällt. |
| 2:52 | sms-bubbla | ali | Ali här. En motor? Jag har en. Från en gammal tvättmaskin. Den centrifugerar fortfarande om man ber snällt. |
| 2:52 | röst | ali | Ali här. En motor? Jag har en. Från en gammal tvättmaskin. Den centrifugerar fortfarande om man ber snällt. · STORY |
| 2:53 | händelse | salt | sak=kruka n=1 |
| 2:53 | aliSalt | ali | 105 |
| 2:53 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 3:01 | klar | ali | Ali här. En motor? Jag har en. Från en gammal tvättmaskin. Den centrifugerar fortfarande om man ber snällt. |
| 3:03 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 3:05 | struken | info:guld | 3D-modell köpt – printa kvarnmotor |
| 3:05 | händelse | kopt | sak=kvarnmotor |
| 3:05 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 3:06 | skratt | du | falsk tuta |
| 3:06 | händelse | malKlart | id=kopMotor del=Dag 2 – Tippen bredvid nasta=monteraMotor |
| 3:06 | bekräftelse | du | plats |
| 3:06 | struken | kedja | motorKopt |
| 3:06 | väntar | du | Motorn ska sitta där veven sitter. Jag printar den först. |
| 3:06 | målruta |  | Printa kvarnmotorn till kvarnen |
| 3:06 | MÅL |  | Printa kvarnmotorn till kvarnen |
| 3:06 | sak | du | Motorn ska sitta där veven sitter. Jag printar den först. |
| 3:06 | pil |  | Printa kvarnmotorn till kvarnen |
| 3:06 | notis | tanke | 💭 Motorn ska sitta där veven sitter. Jag printar den först. |
| 3:06 | röst | du | Motorn ska sitta där veven sitter. Jag printar den först. · MÅL |
| 3:07 | nick |  | nick:22 |
| 3:08 | väntar | mamma | Har du frusit än? |
| 3:10 | kvittens-bock |  | ✓ Köp kvarnmotorn hos Ali (50 kr) |
| 3:11 | klar | du | Motorn ska sitta där veven sitter. Jag printar den först. |
| 3:30 | händelse | printStart | sak=byggsats:kvarnmotor |
| 3:33 | händelse | printKlar | sak=byggsats:kvarnmotor n=1 |
| 3:33 | toast | guld | ✅ |
| 3:33 | sak | du | Mina armar… Kvarnen borde veva själv. |
| 3:33 | notis | tanke | 💭 Mina armar… Kvarnen borde veva själv. |
| 3:33 | röst | du | Mina armar… Kvarnen borde veva själv. · STORY |
| 3:34 | väntar | info:guld | ⚙️ Kvarnmotorn ska skruvas fast på kvarnen. |
| 3:34 | händelse | tagitUrPrint | sak=byggsats:kvarnmotor n=1 |
| 3:34 | paket |  | sms |
| 3:34 | väntar | ali | Ali här. Ännu en ritning som blev på riktigt: Kvarnmotor. Semesterkassan växer. Livet växer. |
| 3:36 | klar | du | Mina armar… Kvarnen borde veva själv. |
| 3:36 | sak | info:guld | ⚙️ Kvarnmotorn ska skruvas fast på kvarnen. |
| 3:36 | kvitto-visas | info:guld | ⚙️ Kvarnmotorn ska skruvas fast på kvarnen. |
| 3:36 | toast | guld | ⚙️ Kvarnmotorn ska skruvas fast på kvarnen. |
| 3:38 | klar | info:guld | ⚙️ Kvarnmotorn ska skruvas fast på kvarnen. |
| 3:42 | väntar | info:guld | ⚙️ Motorn sitter där veven satt – nu mal kvarnen själv. |
| 3:42 | händelse | monterat | sak=kvarnmotor |
| 3:42 | paket |  | tanke |
| 3:42 | tanke | du | Motorn sitter där veven satt. Mina armar tackar. |
| 3:42 | väntar | du | Motorn sitter där veven satt. Mina armar tackar. |
| 3:42 | monterat | du | byggsats:kvarnmotor |
| 3:42 | händelse | monterat | sak=kvarnmotor |
| 3:42 | sak | info:guld | ⚙️ Motorn sitter där veven satt – nu mal kvarnen själv. |
| 3:42 | kvitto-visas | info:guld | ⚙️ Motorn sitter där veven satt – nu mal kvarnen själv. |
| 3:42 | toast | guld | ⚙️ Motorn sitter där veven satt – nu mal kvarnen själv. |
| 3:42 | händelse | malKlart | id=monteraMotor del=Dag 2 – Tippen bredvid nasta=kopSack |
| 3:42 | bekräftelse | du | plats |
| 3:42 | struken | du | Motorn sitter där veven satt. Mina armar tackar. |
| 3:42 | väntar | du | Gården är full av skräp. Jag börjar vid skjulet. |
| 3:42 | MÅL |  | Kolla vad som flög ut från sopbilen |
| 3:44 | klar | info:guld | ⚙️ Motorn sitter där veven satt – nu mal kvarnen själv. |
| 3:44 | målruta |  | Kolla vad som flög ut från sopbilen |
| 3:44 | paket |  | tanke |
| 3:44 | tanke | du | Jaha. En kalsong. Använd. |
| 3:44 | väntar | du | Jaha. En kalsong. Använd. |
| 3:44 | skratt | du | kvarnen spottar |
| 3:46 | kvittens-bock |  | ✓ Printa kvarnmotorn till kvarnen |
| 3:46 | sak | du | Gården är full av skräp. Jag börjar vid skjulet. |
| 3:46 | pil |  | Kolla vad som flög ut från sopbilen |
| 3:46 | notis | tanke | 💭 Gården är full av skräp. Jag börjar vid skjulet. |
| 3:46 | röst | du | Gården är full av skräp. Jag börjar vid skjulet. · MÅL |
| 3:50 | klar | du | Gården är full av skräp. Jag börjar vid skjulet. |
| 4:04 | struken | du | Jaha. En kalsong. Använd. |
| 4:06 | paket |  | brev → ge → tanke |
| 4:06 | väntar | rolf | Du sliter ju. Ingen gör så nuförtin. Ta dessa så går dä lättare. / grannen – ja kör sopbilen å har hand om tippen bredvid. MVH ROLF​ |
| 4:06 | väntar |  | (läget ändras) |
| 4:06 | tanke | du | Rolf… gubben i sopbilen. Han har tippen bredvid. Han verkar schysst. |
| 4:06 | okänt ord bytt | du | Rolf… gubben i sopbilen. Han har tippen bredvid. Han verkar schysst. |
| 4:06 | väntar | du | Rolf… gubben i sopbilen. Han har tippen bredvid. Han verkar schysst. |
| 4:06 | sak | rolf | Du sliter ju. Ingen gör så nuförtin. Ta dessa så går dä lättare. / grannen – ja kör sopbilen å har hand om tippen bredvid. MVH ROLF​ |
| 4:06 | lapp | Lapp från Rolf | Du sliter ju. Ingen gör så nuförtin. Ta dessa så går dä lättare. / grannen – ja kör sopbilen å har hand om tippen bredvid. MVH ROLF​ |
| 4:06 | röst | rolf | Du sliter ju. Ingen gör så nuförtin. Ta dessa så går dä lättare. / grannen – ja kör sopbilen å har hand om tippen bredvid. MVH ROLF​ · STORY |
| 4:07 | hjälp | kontroll | Klick: Klicka för att ta på dig den |
| 4:17 | klar | rolf | Du sliter ju. Ingen gör så nuförtin. Ta dessa så går dä lättare. / grannen – ja kör sopbilen å har hand om tippen bredvid. MVH ROLF​ |
| 4:19 | väntar | info:guld | 🗑️ Sopsäcken är över axeln! Nu bär jag 10 skräp. |
| 4:19 | tog på | du | byggsats:korg |
| 4:19 | händelse | monterat | sak=korg |
| 4:19 | sak | info:guld | 🗑️ Sopsäcken är över axeln! Nu bär jag 10 skräp. |
| 4:19 | kvitto-visas | info:guld | 🗑️ Sopsäcken är över axeln! Nu bär jag 10 skräp. |
| 4:19 | toast | guld | 🗑️ Sopsäcken är över axeln! Nu bär jag 10 skräp. |
| 4:19 | händelse | malKlart | id=kopSack del=Dag 2 – Tippen bredvid nasta=n1-stada-klart-garden |
| 4:19 | bekräftelse | du | plats |
| 4:19 | händelse | malKlart | id=n1-stada-klart-garden del=Dag 2 – Tippen bredvid nasta=rolf0-brev |
| 4:19 | bekräftelse | du | plats |
| 4:19 | väntar | du | Gården är STÄDAD, av mig, frivilligt. Mamma skulle aldrig tro det. |
| 4:19 | väntar | du | Vänta på sopbilen. Den lämnar något. |
| 4:19 | MÅL |  | Vänta på sopbilen. Den lämnar något. |
| 4:21 | klar | info:guld | 🗑️ Sopsäcken är över axeln! Nu bär jag 10 skräp. |
| 4:21 | sak | du | Gården är STÄDAD, av mig, frivilligt. Mamma skulle aldrig tro det. |
| 4:21 | kvitto-visas | du | Gården är STÄDAD, av mig, frivilligt. Mamma skulle aldrig tro det. |
| 4:21 | lapp | 📔 Dagbok | Gården är STÄDAD, av mig, frivilligt. Mamma skulle aldrig tro det. |
| 4:21 | dagbokrad | du | Gården är STÄDAD, av mig, frivilligt. Mamma skulle aldrig tro det. |
| 4:21 | notis | dagbok | Gården är STÄDAD, av mig, frivilligt. Mamma skulle aldrig tro det. |
| 4:21 | klar | du | Gården är STÄDAD, av mig, frivilligt. Mamma skulle aldrig tro det. |
| 4:22 | målruta |  | Vänta på sopbilen. Den lämnar något. |
| 4:22 | sak | du | Vänta på sopbilen. Den lämnar något. |
| 4:22 | pil |  | Vänta på sopbilen. Den lämnar något. |
| 4:22 | röst | du | Vänta på sopbilen. Den lämnar något. · MÅL |
| 4:25 | klar | du | Vänta på sopbilen. Den lämnar något. |
| 4:26 | händelse | printStart | sak=kruka |
| 4:27 | sak |  | (läget ändras) |
| 4:27 | klar |  | (läget ändras) |
| 4:27 | toast | fel | Ingen ström – trampa cykeln |
| 4:30 | toast | guld | ✅ |
| 4:30 | händelse | printKlar | sak=kruka n=5 |
| 4:30 | händelse | tagitUrPrint | sak=kruka n=1 |
| 4:31 | sak | du | Rolf… gubben i sopbilen. Han har tippen bredvid. Han verkar schysst. |
| 4:31 | notis | tanke | 💭 Rolf… gubben i sopbilen. Han har tippen bredvid. Han verkar schysst. |
| 4:31 | röst | du | Rolf… gubben i sopbilen. Han har tippen bredvid. Han verkar schysst. · STORY |
| 4:37 | klar | du | Rolf… gubben i sopbilen. Han har tippen bredvid. Han verkar schysst. |
| 4:39 | struken | ali | Ali här. Ännu en ritning som blev på riktigt: Kvarnmotor. Semesterkassan växer. Livet växer. |
| 4:39 | struken | mamma | Har du frusit än? |
| 4:40 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 4:41 | händelse | salt | sak=kruka n=1 |
| 4:41 | aliSalt | ali | 105 |
| 4:41 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 4:43 | upplåst | skrivare | rullstall |
| 4:43 | brott | UPPLÅST | rullstall (skrivare 198 av 60) |
| 4:43 | händelse | upplast | id=rullstall flask=skrivare |
| 4:43 | paket |  | tanke → sms |
| 4:43 | tanke | du | Kvarnen står och väntar för att hållaren är full. Om den rymde fler rullar kunde den mala hela tiden. |
| 4:43 | väntar | du | Kvarnen står och väntar för att hållaren är full. Om den rymde fler rullar kunde den mala hela tiden. |
| 4:43 | väntar | ali | Ali här. Rullställ. Fyra rullar i stället för en. Har ett på hyllan. |
| 4:47 | paket |  | tanke → ge |
| 4:47 | tanke | du | Flaggan är uppe. Rolf har lämnat något. |
| 4:47 | väntar | du | Flaggan är uppe. Rolf har lämnat något. |
| 4:47 | väntar |  | (läget ändras) |
| 4:48 | skratt | du | falsk tuta |
| 5:01 | väntar | värld:TUUT! Tjena! | TUUT! Tjena! |
| 5:01 | väntar | rolf | Såg att du printar grejer. Kan du göra en sån hä? Kall öl ä viktigt. /Rolf​ |
| 5:01 | paket |  | ge |
| 5:01 | väntar |  | (läget ändras) |
| 5:01 | sak | rolf | Såg att du printar grejer. Kan du göra en sån hä? Kall öl ä viktigt. /Rolf​ |
| 5:01 | lapp | Brev från Rolf | Såg att du printar grejer. Kan du göra en sån hä? Kall öl ä viktigt. /Rolf​ |
| 5:01 | röst | rolf | Såg att du printar grejer. Kan du göra en sån hä? Kall öl ä viktigt. /Rolf​ · STORY |
| 5:01 | händelse | malKlart | id=rolf0-brev del=Dag 2 – Tippen bredvid nasta=rolf0-printa |
| 5:01 | bekräftelse | du | plats |
| 5:01 | väntar | du | Printa ölhållare med kylklamp. |
| 5:01 | MÅL |  | Printa ölhållare med kylklamp |
| 5:04 | målruta |  | Printa ölhållare med kylklamp |
| 5:06 | händelse | printStart | sak=olhallare |
| 5:06 | händelse | malKlart | id=rolf0-printa del=Dag 2 – Tippen bredvid nasta=rolf0-ge |
| 5:06 | bekräftelse | du | plats |
| 5:06 | väntar | du | Ge Rolf ölhållare med kylklamp. |
| 5:06 | MÅL |  | Ge Rolf ölhållare med kylklamp |
| 5:07 | klar | rolf | Såg att du printar grejer. Kan du göra en sån hä? Kall öl ä viktigt. /Rolf​ |
| 5:07 | händelse | brevLast | id=rolf:0 |
| 5:09 | målruta |  | Ge Rolf ölhållare med kylklamp |
| 5:09 | toast | guld | ✅ |
| 5:09 | händelse | printKlar | sak=olhallare n=1 |
| 5:09 | struken | du | Printa ölhållare med kylklamp. |
| 5:09 | sak | du | Ge Rolf ölhållare med kylklamp. |
| 5:09 | pil |  | Ge Rolf ölhållare med kylklamp |
| 5:09 | röst | du | Ge Rolf ölhållare med kylklamp. · MÅL |
| 5:10 | kvittens-bock |  | ✓ Printa ölhållare med kylklamp |
| 5:12 | klar | du | Ge Rolf ölhållare med kylklamp. |
| 5:14 | sak |  | (läget ändras) |
| 5:14 | klar |  | (läget ändras) |
| 5:21 | struken | värld:TUUT! Tjena! | TUUT! Tjena! |
| 5:40 | sak | du | Kvarnen står och väntar för att hållaren är full. Om den rymde fler rullar kunde den mala hela tiden. |
| 5:40 | notis | tanke | 💭 Kvarnen står och väntar för att hållaren är full. Om den rymde fler rullar kunde den mala hela tiden. |
| 5:40 | röst | du | Kvarnen står och väntar för att hållaren är full. Om den rymde fler rullar kunde den mala hela tiden. · STORY |
| 5:41 | händelse | tagitUrPrint | sak=olhallare n=1 |
| 5:43 | hjälp | kontroll | E: Ryggsäcken och kistan |
| 5:49 | klar | du | Kvarnen står och väntar för att hållaren är full. Om den rymde fler rullar kunde den mala hela tiden. |
| 5:57 | sak | ali | Ali här. Rullställ. Fyra rullar i stället för en. Har ett på hyllan. |
| 5:57 | sms | ali | Ali här. Rullställ. Fyra rullar i stället för en. Har ett på hyllan. |
| 5:57 | sms-bubbla | ali | Ali här. Rullställ. Fyra rullar i stället för en. Har ett på hyllan. |
| 5:57 | röst | ali | Ali här. Rullställ. Fyra rullar i stället för en. Har ett på hyllan. · STORY |
| 5:58 | väntar | bud | (tips) |
| 6:03 | klar | ali | Ali här. Rullställ. Fyra rullar i stället för en. Har ett på hyllan. |
| 6:05 | sak | bud | (tips) |
| 6:05 | väntar | du | Klart! Nu lägger jag den i Rolfs brevlåda vid grinden. |
| 6:05 | händelse | lagtIPostlada | sak=olhallare rolf=0 jobb=false |
| 6:05 | struken | kedja | rolf0 |
| 6:05 | paket |  | tanke |
| 6:05 | tanke | du | Flaggan uppe. Nu får Rolf hämta den. |
| 6:05 | väntar | du | Flaggan uppe. Nu får Rolf hämta den. |
| 6:05 | händelse | malKlart | id=rolf0-ge del=Dag 2 – Tippen bredvid nasta=vindsnurra |
| 6:05 | bekräftelse | du | plats |
| 6:05 | struken | du | Flaggan uppe. Nu får Rolf hämta den. |
| 6:05 | väntar | du | En vindsnurra på skjulets tak. Då blir det ström när det blåser. |
| 6:05 | MÅL |  | Trampa, printa och sälj |
| 6:06 | klar | bud | (tips) |
| 6:08 | målruta |  | Trampa, printa och sälj |
| 6:08 | struken | du | Klart! Nu lägger jag den i Rolfs brevlåda vid grinden. |
| 6:08 | sak | du | En vindsnurra på skjulets tak. Då blir det ström när det blåser. |
| 6:08 | pil |  | Trampa, printa och sälj |
| 6:08 | notis | tanke | 💭 En vindsnurra på skjulets tak. Då blir det ström när det blåser. |
| 6:08 | röst | du | En vindsnurra på skjulets tak. Då blir det ström när det blåser. · MÅL |
| 6:09 | kvittens-bock |  | ✓ Ge Rolf ölhållare med kylklamp |
| 6:13 | klar | du | En vindsnurra på skjulets tak. Då blir det ström när det blåser. |
| 6:16 | upplåst | skrivare | trim_skrivare |
| 6:16 | brott | UPPLÅST | trim_skrivare (skrivare 60 av 60) |
| 6:16 | händelse | upplast | id=trim_skrivare flask=skrivare |
| 6:16 | paket |  | sms |
| 6:16 | väntar | ali | Ali här. Skrivartrim. Jag skruvade på min egen skrivare i natt. Den går fortare nu. Nästan för fort. |
| 6:21 | sak | du | Flaggan är uppe. Rolf har lämnat något. |
| 6:21 | notis | tanke | 💭 Flaggan är uppe. Rolf har lämnat något. |
| 6:21 | röst | du | Flaggan är uppe. Rolf har lämnat något. · STORY |
| 6:25 | klar | du | Flaggan är uppe. Rolf har lämnat något. |
| 6:30 | händelse | printStart | sak=kruka |
| 6:31 | toast | fel | Ingen ström – trampa cykeln |
| 6:33 | sak |  | (läget ändras) |
| 6:33 | brev | rolf | rolf:0 |
| 6:34 | klar |  | (läget ändras) |
| 6:34 | toast | guld | ✅ |
| 6:34 | händelse | printKlar | sak=kruka n=6 |
| 6:35 | händelse | tagitUrPrint | sak=kruka n=1 |
| 6:42 | sak | ali | Ali här. Skrivartrim. Jag skruvade på min egen skrivare i natt. Den går fortare nu. Nästan för fort. |
| 6:42 | sms | ali | Ali här. Skrivartrim. Jag skruvade på min egen skrivare i natt. Den går fortare nu. Nästan för fort. |
| 6:42 | sms-bubbla | ali | Ali här. Skrivartrim. Jag skruvade på min egen skrivare i natt. Den går fortare nu. Nästan för fort. |
| 6:42 | röst | ali | Ali här. Skrivartrim. Jag skruvade på min egen skrivare i natt. Den går fortare nu. Nästan för fort. · STORY |
| 6:43 | hjälp | kontroll | E: Ryggsäcken och kistan |
| 6:46 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 6:46 | butiksbubbla | ali | Rolf gav mig en kanna. Som min farmors. Jag ritade en sak åt honom. Säg inget, han gråter lätt. |
| 6:47 | röst | ali | Rolf gav mig en kanna. Som min farmors. Jag ritade en sak åt honom. Säg inget, han gråter lätt. · STORY |
| 6:47 | händelse | salt | sak=kruka n=1 |
| 6:47 | aliSalt | ali | 105 |
| 6:47 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 6:51 | paket |  | tanke |
| 6:51 | tanke | du | Jaha, Rolf har hämtat en ölhållare med kylklamp. |
| 6:51 | väntar | du | Jaha, Rolf har hämtat en ölhållare med kylklamp. |
| 6:51 | klar | ali | Ali här. Skrivartrim. Jag skruvade på min egen skrivare i natt. Den går fortare nu. Nästan för fort. |
| 7:01 | sak | du | Jaha, Rolf har hämtat en ölhållare med kylklamp. |
| 7:01 | notis | tanke | 💭 Jaha, Rolf har hämtat en ölhållare med kylklamp. |
| 7:01 | röst | du | Jaha, Rolf har hämtat en ölhållare med kylklamp. · REAKTION |
| 7:04 | händelse | printStart | sak=kruka |
| 7:05 | klar | du | Jaha, Rolf har hämtat en ölhållare med kylklamp. |
| 7:07 | toast | guld | ✅ |
| 7:07 | händelse | printKlar | sak=kruka n=7 |
| 7:07 | händelse | tagitUrPrint | sak=kruka n=1 |
| 7:13 | skratt | du | falsk tuta |
| 7:17 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 7:18 | händelse | salt | sak=kruka n=1 |
| 7:18 | aliSalt | ali | 105 |
| 7:18 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 7:32 | händelse | printStart | sak=kruka |
| 7:32 | toast | fel | Ingen ström – trampa cykeln |
| 7:35 | toast | guld | ✅ |
| 7:35 | händelse | printKlar | sak=kruka n=8 |
| 7:36 | händelse | tagitUrPrint | sak=kruka n=1 |
| 7:43 | väntar | ali | Jag har ritat något i natt. Kanske en fågel. Kanske en stol. |
| 7:43 | sak | ali | Jag har ritat något i natt. Kanske en fågel. Kanske en stol. |
| 7:43 | röst | ali | Jag har ritat något i natt. Kanske en fågel. Kanske en stol. · SMÅPRAT |
| 7:44 | bubbla |  | Jag har ritat något i natt. Kanske en fågel. Kanske en stol. |
| 7:45 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 7:47 | händelse | salt | sak=kruka n=1 |
| 7:47 | aliSalt | ali | 105 |
| 7:47 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 7:48 | klar | ali | Jag har ritat något i natt. Kanske en fågel. Kanske en stol. |
| 8:01 | händelse | printStart | sak=kruka |
| 8:04 | toast | guld | ✅ |
| 8:04 | händelse | printKlar | sak=kruka n=9 |
| 8:04 | händelse | tagitUrPrint | sak=kruka n=1 |
| 8:14 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 8:16 | händelse | salt | sak=kruka n=1 |
| 8:16 | aliSalt | ali | 105 |
| 8:16 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 8:29 | händelse | printStart | sak=kruka |
| 8:30 | upplåst | trampa | vindsnurra |
| 8:30 | brott | UPPLÅST | vindsnurra (trampa 28 av 6) |
| 8:30 | händelse | upplast | id=vindsnurra flask=trampa |
| 8:30 | paket |  | tanke → sms |
| 8:30 | tanke | du | Mina ben är slut. Det blåser hela tiden här ute. Tänk om vinden kunde trampa åt mig. |
| 8:30 | väntar | du | Mina ben är slut. Det blåser hela tiden här ute. Tänk om vinden kunde trampa åt mig. |
| 8:30 | väntar | ali | Ali här. Vindsnurra till cykeln. Vinden trampar åt dig. Den är lat, men den jobbar gratis. |
| 8:31 | sak | du | Mina ben är slut. Det blåser hela tiden här ute. Tänk om vinden kunde trampa åt mig. |
| 8:31 | notis | tanke | 💭 Mina ben är slut. Det blåser hela tiden här ute. Tänk om vinden kunde trampa åt mig. |
| 8:31 | röst | du | Mina ben är slut. Det blåser hela tiden här ute. Tänk om vinden kunde trampa åt mig. · STORY |
| 8:33 | toast | guld | ✅ |
| 8:33 | händelse | printKlar | sak=kruka n=10 |
| 8:33 | händelse | tagitUrPrint | sak=kruka n=1 |
| 8:38 | klar | du | Mina ben är slut. Det blåser hela tiden här ute. Tänk om vinden kunde trampa åt mig. |
| 8:42 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 8:44 | händelse | salt | sak=kruka n=1 |
| 8:44 | aliSalt | ali | 105 |
| 8:44 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 8:46 | sak | ali | Ali här. Vindsnurra till cykeln. Vinden trampar åt dig. Den är lat, men den jobbar gratis. |
| 8:46 | sms | ali | Ali här. Vindsnurra till cykeln. Vinden trampar åt dig. Den är lat, men den jobbar gratis. |
| 8:46 | sms-bubbla | ali | Ali här. Vindsnurra till cykeln. Vinden trampar åt dig. Den är lat, men den jobbar gratis. |
| 8:46 | röst | ali | Ali här. Vindsnurra till cykeln. Vinden trampar åt dig. Den är lat, men den jobbar gratis. · STORY |
| 8:54 | klar | ali | Ali här. Vindsnurra till cykeln. Vinden trampar åt dig. Den är lat, men den jobbar gratis. |
| 8:56 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 8:57 | struken | info:guld | 3D-modell köpt – printa vindsnurra till skjultaket |
| 8:57 | händelse | kopt | sak=vindsnurra |
| 8:57 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 9:08 | väntar | värld:TUUT TUUT! | TUUT TUUT! |
| 9:08 | sak | värld:TUUT TUUT! | TUUT TUUT! |
| 9:08 | bubbla |  | TUUT TUUT! |
| 9:10 | händelse | printStart | sak=byggsats:vindsnurra |
| 9:11 | klar | värld:TUUT TUUT! | TUUT TUUT! |
| 9:12 | toast | fel | Ingen ström – trampa cykeln |
| 9:16 | händelse | printKlar | sak=byggsats:vindsnurra n=1 |
| 9:16 | toast | guld | ✅ |
| 9:16 | väntar | info:guld | 🌬️ Vindsnurran ska upp på skjulets tak. |
| 9:16 | händelse | tagitUrPrint | sak=byggsats:vindsnurra n=1 |
| 9:16 | sak | info:guld | 🌬️ Vindsnurran ska upp på skjulets tak. |
| 9:16 | kvitto-visas | info:guld | 🌬️ Vindsnurran ska upp på skjulets tak. |
| 9:16 | toast | guld | 🌬️ Vindsnurran ska upp på skjulets tak. |
| 9:18 | klar | info:guld | 🌬️ Vindsnurran ska upp på skjulets tak. |
| 9:28 | händelse | placerat | sak=vindsnurra |
| 9:28 | kvittens | du | Den snurrar! Långsamt. Men den snurrar. |
| 9:28 | varför-köad | du | Om det regnar i natt drunknar jag. Ett tak. |
| 9:28 | väntar | du | Den snurrar! Långsamt. Men den snurrar. |
| 9:28 | väntar | info:guld | 🌬️ Vindsnurran sitter på taket – den trampar cykeln åt mig när det blåser |
| 9:28 | monterat | du | byggsats:vindsnurra |
| 9:28 | händelse | monterat | sak=vindsnurra |
| 9:28 | sak | du | Den snurrar! Långsamt. Men den snurrar. |
| 9:28 | notis | tanke | 💭 Den snurrar! Långsamt. Men den snurrar. |
| 9:28 | röst | du | Den snurrar! Långsamt. Men den snurrar. · STORY |
| 9:28 | händelse | malKlart | id=vindsnurra del=Dag 2 – Tippen bredvid nasta=n1-bygg-dorr-skjulet |
| 9:28 | bekräftelse | du | plats |
| 9:28 | väntar | du | Det drar från dörrhålet. En dörr kan jag printa. |
| 9:28 | MÅL |  | Bygg en dörr till skjulet |
| 9:30 | målruta |  | Bygg en dörr till skjulet |
| 9:31 | klar | du | Den snurrar! Långsamt. Men den snurrar. |
| 9:34 | sak | du | Det drar från dörrhålet. En dörr kan jag printa. |
| 9:34 | pil |  | Bygg en dörr till skjulet |
| 9:34 | notis | tanke | 💭 Det drar från dörrhålet. En dörr kan jag printa. |
| 9:34 | röst | du | Det drar från dörrhålet. En dörr kan jag printa. · MÅL |
| 9:34 | nick |  | nick:29 |
| 9:38 | klar | du | Det drar från dörrhålet. En dörr kan jag printa. |
| 9:38 | struken | info:guld | 🌬️ Vindsnurran sitter på taket – den trampar cykeln åt mig när det blåser |
| 9:44 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 9:46 | struken | info:guld | 3D-modell köpt – printa dörr |
| 9:46 | händelse | kopt | sak=dorr |
| 9:46 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 9:59 | händelse | printStart | sak=byggsats:dorr |
| 10:02 | toast | bra | Del 1 av 2 klar |
| 10:02 | väntar | notis:Storebrors skrivare: Del 1 av 2 klar | Storebrors skrivare: Del 1 av 2 klar |
| 10:02 | sak | notis:Storebrors skrivare: Del 1 av 2 klar | Storebrors skrivare: Del 1 av 2 klar |
| 10:02 | notis | bra | Storebrors skrivare: Del 1 av 2 klar |
| 10:05 | klar | notis:Storebrors skrivare: Del 1 av 2 klar | Storebrors skrivare: Del 1 av 2 klar |
| 10:06 | händelse | printKlar | sak=byggsats:dorr n=1 |
| 10:06 | toast | guld | ✅ |
| 10:41 | skratt | du | falsk tuta |
| 10:42 | händelse | tagitUrPrint | sak=byggsats:dorr n=1 |
| 10:42 | paket |  | sms |
| 10:42 | väntar | ali | Ali här. Jag har inte sovit. Inte på grund av AI:n. På grund av dig. Du bygger saker av sopor. Jag har en hel butik och bygger ingenting. Det ska ändras. Kanske. Troligen. |
| 10:50 | väntar | info:guld | Dörr på plats! Trivsel +8 |
| 10:50 | sak | info:guld | Dörr på plats! Trivsel +8 |
| 10:50 | kvitto-visas | info:guld | Dörr på plats! Trivsel +8 |
| 10:50 | toast | guld | Dörr på plats! Trivsel +8 |
| 10:50 | händelse | malKlart | id=n1-bygg-dorr-skjulet del=Dag 2 – Tippen bredvid nasta=sov2 |
| 10:50 | paket |  | lapp |
| 10:50 | väntar | du | Nu vet Ali att jag bor HÄR. Taket läcker. I morgon. |
| 10:50 | paket |  | sms |
| 10:50 | väntar | bror | Mamma ringde mig fyra gånger förresten. Snyggt jobbat 😂 |
| 10:50 | skratt | bror | Mamma ringde mig fyra gånger förresten. |
| 10:50 | bekräftelse | du | plats |
| 10:50 | väntar | du | Klart för idag – sov när du vill. |
| 10:50 | MÅL |  | Klart för idag – sov när du vill |
| 10:52 | klar | info:guld | Dörr på plats! Trivsel +8 |
| 10:53 | målruta |  | Klart för idag – sov när du vill |
| 10:54 | kvittens-bock |  | ✓ Bygg en dörr till skjulet |
| 10:54 | sak | du | Klart för idag – sov när du vill. |
| 10:54 | pil |  | Klart för idag – sov när du vill |
| 10:54 | röst | du | Klart för idag – sov när du vill. · MÅL |
| 10:56 | scenInfo | gard | Lite skräp ramlade av flaket på gården |
| 10:57 | klar | du | Klart för idag – sov när du vill. |
| 10:57 | väntar | notis:🌇 Klockan är 21. Ali slår igen luckan.  | 🌇 Klockan är 21. Ali slår igen luckan. Dagens jobb är klart – gå in i skjulet och sov i sängen. |
| 10:59 | sak | du | Nu vet Ali att jag bor HÄR. Taket läcker. I morgon. |
| 10:59 | kvallsrad | du | Nu vet Ali att jag bor HÄR. Taket läcker. I morgon. |
| 10:59 | klar | du | Nu vet Ali att jag bor HÄR. Taket läcker. I morgon. |
| 11:14 | nattkort | du | 🌙 Dag 2 är slut. God natt. zzz… Nu vet Ali att jag bor HÄR. Taket läcker. I morgon. DAGENS PRINTAR Blomkruka × 9 Ölhållare med kylklamp × 1 Totalt 10 printar � |

<details><summary>Botens handlingar dag 2</summary>

- 0:00 — dag 2 börjar — (205 kr)
- 0:07 popup: "FORTSÄTT" (205 kr)
- 0:25 nybörjaren ser ingen pil – tittar runt (205 kr)
- 0:29 tjänar pengar till väntar på flaskhalsen för kvarnmotor: 205/245 kr → printar blomkruka (105 kr) (205 kr)
- 0:31 gå till fel håll en bit (4 m) (205 kr)
- 0:47 plockar 6 skräp på gården (bär max 6) (205 kr)
- 0:57 gå till kvarnen (27 m) (205 kr)
- 1:04 gå till skrivaren (3 m) (205 kr)
- 1:06 printar Blomkruka (205 kr)
- 1:08 gå till cykeln (1 m) (205 kr)
- 1:11 tar ut 1 st ur skrivaren (205 kr)
- 1:21 gå till Ali (27 m) (205 kr)
- 1:21 öppnar Alis butik – sälja (205 kr)
- 1:23 säljer hos Ali: +105 kr (310 kr)
- 1:30 tjänar pengar till väntar på flaskhalsen för kvarnmotor: 310/350 kr → printar blomkruka (105 kr) (310 kr)
- 1:39 gå till skrivaren (25 m) (310 kr)
- 1:41 printar Blomkruka (310 kr)
- 1:44 tar ut 1 st ur skrivaren (310 kr)
- 1:54 gå till Ali (25 m) (310 kr)
- 1:54 öppnar Alis butik – sälja (310 kr)
- 1:55 säljer hos Ali: +105 kr (415 kr)
- 2:00 tjänar pengar till väntar på flaskhalsen för kvarnmotor: 415/455 kr → printar blomkruka (105 kr) (415 kr)
- 2:18 plockar 6 skräp på gården (bär max 6) (415 kr)
- 2:29 gå till kvarnen (32 m) (415 kr)
- 2:35 gå till skrivaren (3 m) (415 kr)
- 2:37 printar Blomkruka (415 kr)
- 2:39 gå till cykeln (1 m) (415 kr)
- 2:42 tar ut 1 st ur skrivaren (415 kr)
- 2:52 gå till Ali (27 m) (415 kr)
- 2:52 öppnar Alis butik – sälja (415 kr)
- 2:54 säljer hos Ali: +105 kr (520 kr)
- 3:03 öppnar Alis butik – köpa kvarnmotor (520 kr)
- 3:06 köper kvarnmotor för 50 kr (470 kr)
- 3:29 gå till skrivaren (25 m) (470 kr)
- 3:30 printar Kvarnmotor (470 kr)
- 3:34 tar ut 1 st ur skrivaren (470 kr)
- 3:42 gå till skruva fast kvarnmotorn (3 m) (470 kr)
- 3:56 nybörjaren ser ingen pil – tittar runt (470 kr)
- 4:06 gå till Rolfs sopsäck (16 m) (470 kr)
- 4:19 tar på korg (470 kr)
- 4:20 tjänar pengar till väntar på sopbilen (BO): 470/530 kr → printar blomkruka (105 kr) (470 kr)
- 4:24 gå till skrivaren (12 m) (470 kr)
- 4:26 printar Blomkruka (470 kr)
- 4:28 gå till cykeln (1 m) (470 kr)
- 4:31 tar ut 1 st ur skrivaren (470 kr)
- 4:40 gå till Ali (25 m) (470 kr)
- 4:40 öppnar Alis butik – sälja (470 kr)
- 4:42 säljer hos Ali: +105 kr (575 kr)
- 5:01 gå till Rolfs postlåda (31 m) (575 kr)
- 5:04 gå till skrivaren (7 m) (575 kr)
- 5:06 printar Ölhållare med kylklamp (575 kr)
- 5:29 plockar 8 skräp på gården (bär max 10) (575 kr)
- 5:40 gå till kvarnen (30 m) (575 kr)
- 5:41 gå till skrivaren (1 m) (575 kr)
- 5:42 tar ut 1 st ur skrivaren (575 kr)
- 5:58 nybörjaren ser ingen pil – tittar runt (575 kr)
- 6:02 valj olhallare: true, vald olhallare, post {"l":null,"tr":null,"tm":[]}, nummer false (575 kr)
- 6:05 gå till Rolfs postlåda (7 m) (575 kr)
- 6:21 nybörjaren ser ingen pil – tittar runt (575 kr)
- 6:26 tjänar pengar till väntar på flaskhalsen för vindsnurra: 575/615 kr → printar blomkruka (105 kr) (575 kr)
- 6:28 gå till skrivaren (6 m) (575 kr)
- 6:30 printar Blomkruka (575 kr)
- 6:31 gå till cykeln (1 m) (575 kr)
- 6:36 tar ut 1 st ur skrivaren (575 kr)
- 6:46 gå till Ali (26 m) (575 kr)
- 6:46 öppnar Alis butik – sälja (575 kr)
- 6:47 säljer hos Ali: +105 kr (680 kr)
- 6:53 tjänar pengar till väntar på flaskhalsen för vindsnurra: 680/720 kr → printar blomkruka (105 kr) (680 kr)
- 7:02 gå till skrivaren (25 m) (680 kr)
- 7:04 printar Blomkruka (680 kr)
- 7:08 tar ut 1 st ur skrivaren (680 kr)
- 7:17 gå till Ali (25 m) (680 kr)
- 7:17 öppnar Alis butik – sälja (680 kr)
- 7:19 säljer hos Ali: +105 kr (785 kr)
- 7:21 tjänar pengar till väntar på flaskhalsen för vindsnurra: 785/825 kr → printar blomkruka (105 kr) (785 kr)
- 7:30 gå till skrivaren (25 m) (785 kr)
- 7:32 printar Blomkruka (785 kr)
- 7:32 gå till cykeln (1 m) (785 kr)
- 7:36 tar ut 1 st ur skrivaren (785 kr)
- 7:45 gå till Ali (25 m) (785 kr)
- 7:45 öppnar Alis butik – sälja (785 kr)
- 7:47 säljer hos Ali: +105 kr (890 kr)
- 7:50 tjänar pengar till väntar på flaskhalsen för vindsnurra: 890/930 kr → printar blomkruka (105 kr) (890 kr)
- 7:59 gå till skrivaren (25 m) (890 kr)
- 8:01 printar Blomkruka (890 kr)
- 8:05 tar ut 1 st ur skrivaren (890 kr)
- 8:14 gå till Ali (25 m) (890 kr)
- 8:14 öppnar Alis butik – sälja (890 kr)
- 8:16 säljer hos Ali: +105 kr (995 kr)
- 8:18 tjänar pengar till väntar på flaskhalsen för vindsnurra: 995/1035 kr → printar blomkruka (105 kr) (995 kr)
- 8:27 gå till skrivaren (25 m) (995 kr)
- 8:29 printar Blomkruka (995 kr)
- 8:29 gå till cykeln (1 m) (995 kr)
- 8:33 tar ut 1 st ur skrivaren (995 kr)
- 8:42 gå till Ali (25 m) (995 kr)
- 8:42 öppnar Alis butik – sälja (995 kr)
- 8:44 säljer hos Ali: +105 kr (1100 kr)
- 8:56 öppnar Alis butik – köpa vindsnurra till skjultaket (1100 kr)
- 8:58 köper vindsnurra för 133 kr (967 kr)
- 9:08 gå till skrivaren (25 m) (967 kr)
- 9:10 printar Vindsnurra till skjultaket (967 kr)
- 9:13 gå till cykeln (1 m) (967 kr)
- 9:17 tar ut 1 st ur skrivaren (967 kr)
- 9:28 gå till sätt vindsnurran på taket (20 m) (967 kr)
- 9:44 gå till Ali (20 m) (967 kr)
- 9:44 öppnar Alis butik – köpa dörr (967 kr)
- 9:47 köper dorr för 120 kr (847 kr)
- 9:57 gå till skrivaren (25 m) (847 kr)
- 9:59 printar Dörr (2 delar) (847 kr)
- 10:28 plockar 10 skräp på gården (bär max 10) (847 kr)
- 10:41 gå till kvarnen (37 m) (847 kr)
- 10:42 gå till skrivaren (1 m) (847 kr)
- 10:43 tar ut 1 st ur skrivaren (847 kr)
- 10:50 gå till skjulet (21 m) (847 kr)
- 11:06 nybörjaren ser ingen pil – tittar runt (847 kr)
- 11:11 gå till sängen (1 m) (847 kr)

</details>

## Dag 3

| Tid | Källa | Vem | Text |
|---|---|---|---|
| 11:14 | vara | ali | ingen |
| 11:14 | händelse | malKlart | id=sov2 del=Dag 2 – Tippen bredvid nasta=rolf1-brev |
| 11:14 | bekräftelse | du | plats |
| 11:14 | vara | ali | kruka |
| 11:14 | MÅL |  | Vänta på sopbilen. Den lämnar något. |

<details><summary>Botens handlingar dag 3</summary>

- 0:00 — dag 3 börjar — (847 kr)

</details>
