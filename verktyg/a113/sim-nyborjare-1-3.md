# Nybörjarboten – körning 1

*A-081: samma händer som AX, men boten vet bara det som syns (målrutan, pilen, det som sägs). Går 3 m/s, läser 60 ms per tecken, följer pilen, tittar runt när målet är otydligt och går fel ibland.*

| Dag | Minuter | FÖRVIRRAD | FAST | TRÄNGSEL | HANN INTE LÄSA | DOLT | NY SAK UTAN FÖRKLARING | OKÄNT ORD |
|---|---|---|---|---|---|---|---|---|
| 1 | 12.0 | 0 | 0 | 1 | 0 | 0 | 1 | 0 |
| 2 | 10.5 | 0 | 0 | 0 | 2 | 0 | 0 | 0 |
| 3 | 0.0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |

## Flaggor (4)

- **NY SAK UTAN FÖRKLARING** dag 1 0:16: byta: ingen text eller bild har förklarat det innan första gången
- **TRÄNGSEL** dag 1 4:42: notis ”Kvarnen funkar. Soptippen är en gruva.” och tanke-text ”💭 Min egen tråd. Nu printar jag en nyck” inom 0.7 s
- **HANN INTE LÄSA** dag 2 0:02: dagbok ”Dag 2. 20 dagar till jul.
Utan dörr blåser natten ” stod 0.0 s, behöver 4.7 s
- **HANN INTE LÄSA** dag 2 1:06: info ”🚛 En stor bil tippade en ny last på soptippen!” stod 3.8 s, behöver 4.0 s

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
| 1 | Ställ kvarnen | 23 | – | – |
| 1 | Gör egen tråd | 23 | – | – |
| 1 | Printa med egen tråd | 24 | – | – |
| 1 | Sälj hos Ali | 40 | – | – |
| 1 | Gå till Ali | 33 | – | – |
| 1 | Plocka skräp och mal det | 122 | – | – |
| 1 | Printa skräpgripen | 47 | – | – |
| 1 | Printa och sälj nyckelringar | 33 | – | – |
| 1 | Sälj blomkrukan | 52 | – | – |
| 1 | Köp sängen | 15 | – | – |
| 1 | Printa sängen | 65 | – | – |
| 2 | Mal skräp, printa och sälj | -469 | – | – |
| 2 | Printa kvarnmotorn till kvarnen | 34 | – | – |
| 2 | Kolla vad som flög ut från sopbilen | 37 | – | – |
| 2 | Vänta på sopbilen. Den lämnar något. | 112 | – | – |
| 2 | Printa ölhållare med kylklamp | 5 | – | – |
| 2 | Ge Rolf ölhållare med kylklamp | 22 | – | – |
| 2 | Trampa, printa och sälj | 62 | – | – |
| 2 | Bygg en dörr till skjulet | 81 | – | – |

---

# Simulering kapitel 1 – körning 1

*Gjord 2026-11-21 18:26 med `verktyg/sim-kapitel1.mjs` + `verktyg/sim-bot.js` (punkt AX). Boten går 4,5 m/s, läser 15 tecken/s, trampar, vevar, plockar, printar, köper och säljer via spelets egna funktioner. Tiderna är speltid.*

## Sammanfattning

| Dag | Minuter | Väntan | Prints (totalt) | Kr vid sömn | Bär | Trivsel |
|---|---|---|---|---|---|---|
| 1 | 12.0 | 2 % | 12 | 60 | 6 | 19 |
| 2 | 10.5 | 1 % | 22 | 702 | 10 | 39 |
| 3 | 0.0 | 0 % | 22 | 702 | 10 | 39 |

## Flaskhalskartan (EE)

| Dag | bara | mala | trampa | strom | skrivare | inkomst | Upplåst |
|---|---|---|---|---|---|---|---|
| 1 | 6 | 8 | 20 | 9 | 168 | 10 | grip (bara, 7:40), kruka (inkomst, 8:52) |
| 2 | 2 | 7 | 8 | 12 | 310 | 0 | kvarnmotor (mala, 3:16, reserv), rullstall (skrivare, 5:13), trim_skrivare (skrivare, 6:19), vindsnurra (trampa, 7:44) |
| 3 | 0 | 0 | 0 | 0 | 0 | 0 |  |

TIDIG: 0 · FAST: 0 · upplåst av reserven (målet väntade 3 min): 1

**SKRATT:** 22 roliga ögonblick på 23 min (9.8 per 10 min, mål minst 5)

**Köp:**

- dag 1 3:39 – gammalkvarn (30 kr)
- dag 1 8:04 – grip (50 kr)
- dag 1 9:04 – kruka (40 kr)
- dag 1 10:31 – sang (60 kr)
- dag 2 4:13 – kvarnmotor (50 kr)
- dag 2 8:17 – vindsnurra (133 kr)
- dag 2 9:05 – dorr (120 kr)

## Storykedjan (kvittens → varför → nytt mål)

| Dag | Tid | Id | Kvittens | Varför | Nytt mål | Tid till målet |
|---|---|---|---|---|---|---|
| 1 | 0:35 | lasta | Tung. Den har storebror aldrig burit så långt. |  | Skrivaren ställer jag mot skräpberget. Min första verkstad. | 0.7 s |
| 1 | 2:07 | valjModell | Den piper. Den GÖR något. |  | Nu behöver den ström. Trampa. | 0.3 s |
| 1 | 2:12 | trampa | Klar! Ta ut den innan den ändrar sig. |  | En nyckelring till, så länge storebrors rulle räcker. | 0.5 s |
| 1 | 4:26 | flaska | Det blir tråd! Riktig plasttråd. |  | Min egen tråd. Nu printar jag en nyckelring av den. | 0.8 s |
| 1 | 9:25 | krukaD1 | En kruka. Mamma skulle bli så stolt. Hon får inte veta. |  | Ali gillar krukor. Han sa det själv. | 0.9 s |
| 1 | 11:36 | printSang | En säng. Jag printade en SÄNG. |  | Sängen ska in i skjulet. Sen sover jag. | 0.3 s |
| 2 | 8:46 | vindsnurra | Den snurrar! Långsamt. Men den snurrar. |  | Det drar från dörrhålet. En dörr kan jag printa. | 3.0 s |

## Hur länge nya mål väntade (från att förra målet blev klart till att det nya syntes i målrutan)

Snitt 1.9 s · max 12.4 s · över 4 s: 1 · över 8 s: 1 av 30

## Flaggor (20)

- **LUGN** dag 2 0:08: 0.0 s efter BÖRJA DAGEN: [lapp] "Första natten i en riktig säng. Jag printade den själv."
- **KROCK** dag 1 4:30: 0.7 s mellan [notis] "Kvarnen funkar. Soptippen är en gruva." och [notis] "💭 Min egen tråd. Nu printar jag en nyckelring av den."
- **KROCK** dag 2 8:56: 4.0 s mellan [notis] "💭 Det drar från dörrhålet. En dörr kan jag printa." och [notis] "💭 Jaha, Rolf har hämtat en ölhållare med kylklamp."
- **SEN** dag 1 0:32: 11.9 s efter händelsen: notis:Spikade ihop en skylt av bräder från skr: "Spikade ihop en skylt av bräder från skräpberget: Soptippsvägen 1. Int"
- **SEN** dag 1 2:28: 14.8 s efter händelsen: bror: "VA FAN?! Fick du igång den?? Jag försökte i typ ett år. Den bara pep. "
- **SEN** dag 1 2:59: 19.4 s efter händelsen: notis:Storebrors skrivare: Nyckelring är klar : "Storebrors skrivare: Nyckelring är klar – ta ut den"
- **SEN** dag 1 4:43: 48.3 s efter händelsen: kjelle: "God morgon, det är Kjelle på Radio Tippen! Det har flyttat in någon i "
- **SEN** dag 1 6:43: 15.4 s efter händelsen: notis:Storebrors skrivare: Ingen ström – tramp: "Storebrors skrivare: Ingen ström – trampa cykeln"
- **SEN** dag 1 9:15: 23.1 s efter händelsen: ali: "Ali här. Jag såg Skräpgrip på avstånd. Ett streck blev lite snett. Mit"
- **SEN** dag 2 0:25: 17.4 s efter händelsen: notis:Första natten i en riktig säng. Jag prin: "Första natten i en riktig säng. Jag printade den själv."
- **PAUS** dag 1 0:35: 0.0 s paus före "Tung. Den har storebror aldrig burit så långt."
- **PAUS** dag 1 2:12: 0.2 s paus före "Klar! Ta ut den innan den ändrar sig."
- **PAUS** dag 1 4:27: 0.0 s paus före "Det blir tråd! Riktig plasttråd."
- **PAUS** dag 1 4:29: 0.0 s paus före "Kvarnen funkar. Soptippen är en gruva."
- **PAUS** dag 2 5:27: 0.0 s paus före "Gården är STÄDAD, av mig, frivilligt. Mamma skulle"
- **PAUS** dag 2 8:56: 0.0 s paus före "Jaha, Rolf har hämtat en ölhållare med kylklamp."
- **DÖD KNAPP** dag 1 3:59: Vad ska jag göra nu? (H) i dn-ruta: täckt av por (div)
- **DUBBEL UPPMANING** dag 2 3:47: "veva" på 2 ställen: pekrutan, skylten Tratten är full
- **TEMPO** dag 1 12:01: dag 1 tog 12.0 min (mål 10–12)
- **TEMPO** dag 3 0:00: dag 3 tog 0.0 min (mål 10–15)

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
| 0:06 | sak | du | Se så mycket skräp här är. Det är ju en guldgruva! |
| 0:06 | röst | du | Se så mycket skräp här är. Det är ju en guldgruva! · STORY |
| 0:11 | sak-del | du | Först borde jag spika upp en skylt, så att alla ser att jag bor HÄR. |
| 0:11 | röst | du | Först borde jag spika upp en skylt, så att alla ser att jag bor HÄR. · STORY |
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
| 0:35 | händelse | lastatAv | sak=skrivare |
| 0:35 | paket |  | sms |
| 0:35 | väntar | mamma | Hur kunde du bara gå? Är du ok? Svara när jag ringer! |
| 0:35 | händelse | malKlart | id=lasta del=Dag 1 – Kom igång nasta=stall |
| 0:35 | kvittens | du | Tung. Den har storebror aldrig burit så långt. |
| 0:35 | väntar | du | Tung. Den har storebror aldrig burit så långt. |
| 0:35 | väntar | du | Skrivaren ställer jag mot skräpberget. Min första verkstad. |
| 0:35 | MÅL |  | Ställ upp skrivaren |
| 0:35 | klar | notis:Spikade ihop en skylt av bräder från skr | Spikade ihop en skylt av bräder från skräpberget: Soptippsvägen 1. Inte mycket för världen, men det är MITT. |
| 0:35 | sak | du | Tung. Den har storebror aldrig burit så långt. |
| 0:35 | röst | du | Tung. Den har storebror aldrig burit så långt. · STORY |
| 0:35 | målruta |  | Ställ upp skrivaren |
| 0:39 | klar | du | Tung. Den har storebror aldrig burit så långt. |
| 0:39 | sak | du | Skrivaren ställer jag mot skräpberget. Min första verkstad. |
| 0:39 | pil |  | Ställ upp skrivaren |
| 0:39 | notis | tanke | 💭 Skrivaren ställer jag mot skräpberget. Min första verkstad. |
| 0:39 | röst | du | Skrivaren ställer jag mot skräpberget. Min första verkstad. · MÅL |
| 0:39 | nick |  | nick:1 |
| 0:40 | hjälp | kontroll | E: Ryggsäcken och kistan |
| 0:44 | klar | du | Skrivaren ställer jag mot skräpberget. Min första verkstad. |
| 0:46 | struken | info:info | ⏎ Enter – hoppa över |
| 0:55 | väntar | info:bra | 🖨️ Storebrors skrivare står på sin plats |
| 0:55 | händelse | placerat | sak=skrivareS |
| 0:55 | paket |  | tanke |
| 0:55 | tanke | du | Storebrors rulle. Den räcker inte länge. |
| 0:55 | väntar | du | Storebrors rulle. Den räcker inte länge. |
| 0:55 | duns | du | ställs ner |
| 0:55 | sak | info:bra | 🖨️ Storebrors skrivare står på sin plats |
| 0:55 | kvitto-visas | info:bra | 🖨️ Storebrors skrivare står på sin plats |
| 0:55 | toast | bra | 🖨️ Storebrors skrivare står på sin plats |
| 0:55 | händelse | malKlart | id=stall del=Dag 1 – Kom igång nasta=strom |
| 0:55 | struken | du | Storebrors rulle. Den räcker inte länge. |
| 0:55 | väntar | du | Skrivaren behöver ström. Hur fixar jag det här ute? |
| 0:55 | MÅL |  | Skrivaren behöver ström |
| 0:57 | klar | info:bra | 🖨️ Storebrors skrivare står på sin plats |
| 0:57 | målruta |  | Skrivaren behöver ström |
| 0:59 | kvittens-bock |  | ✓ Ställ upp skrivaren |
| 0:59 | sak | du | Skrivaren behöver ström. Hur fixar jag det här ute? |
| 0:59 | pil |  | Skrivaren behöver ström |
| 0:59 | notis | tanke | 💭 Skrivaren behöver ström. Hur fixar jag det här ute? |
| 0:59 | röst | du | Skrivaren behöver ström. Hur fixar jag det här ute? · MÅL |
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
| 1:46 | klar | du | Storebrors generator. Den gör el när cykeln snurrar. |
| 1:52 | händelse | placerat | sak=cykel |
| 1:52 | duns | du | ställs ner |
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
| 3:02 | väntar | ali | Hallå! Du där borta med skrivaren! Kom över vägen, jag köper sånt där! |
| 3:03 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 3:11 | sak | ali | Hallå! Du där borta med skrivaren! Kom över vägen, jag köper sånt där! |
| 3:11 | röst | ali | Hallå! Du där borta med skrivaren! Kom över vägen, jag köper sånt där! · REAKTION |
| 3:16 | röst | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. · STORY |
| 3:16 | butiksbubbla | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 3:17 | aliSalt | ali | 30 |
| 3:17 | butiksbubbla | ali | Pappas gamla köttkvarn. Den har malt allt utom kött. Trettio kronor, så är den din. |
| 3:19 | väntar | ali | Pappas gamla köttkvarn. Den har malt allt utom kött. Trettio kronor, så är den din. |
| 3:19 | händelse | malKlart | id=saljTva del=Dag 1 – Kom igång nasta=aliKvarn |
| 3:19 | väntar | du | Ali har en gammal kvarn. Den gör tråd av skräp. |
| 3:19 | MÅL |  | Köp kvarnen |
| 3:19 | klar | ali | Hallå! Du där borta med skrivaren! Kom över vägen, jag köper sånt där! |
| 3:21 | målruta |  | Köp kvarnen |
| 3:21 | sak | du | Ali har en gammal kvarn. Den gör tråd av skräp. |
| 3:21 | pil |  | Köp kvarnen |
| 3:21 | notis | tanke | 💭 Ali har en gammal kvarn. Den gör tråd av skräp. |
| 3:21 | röst | du | Ali har en gammal kvarn. Den gör tråd av skräp. · MÅL |
| 3:23 | kvittens-bock |  | ✓ Sälj nyckelringarna |
| 3:25 | klar | du | Ali har en gammal kvarn. Den gör tråd av skräp. |
| 3:27 | struken | bror | Sälj den till Ali, han med affären vid skräpberget. Han köper gamla grejer. Han köpte min gamla mopedhjälm för 20 spänn. |
| 3:27 | sak | ali | Pappas gamla köttkvarn. Den har malt allt utom kött. Trettio kronor, så är den din. |
| 3:27 | röst | ali | Pappas gamla köttkvarn. Den har malt allt utom kött. Trettio kronor, så är den din. · STORY |
| 3:34 | klar | ali | Pappas gamla köttkvarn. Den har malt allt utom kött. Trettio kronor, så är den din. |
| 3:38 | händelse | kopt | sak=gammalkvarn |
| 3:38 | röst | ali | Och kommer du på nåt smart, så vet du var jag bor. · STORY |
| 3:38 | butiksbubbla | ali | Och kommer du på nåt smart, så vet du var jag bor. |
| 3:39 | händelse | malKlart | id=aliKvarn del=Dag 1 – Kom igång nasta=kvarn |
| 3:39 | väntar | du | Kvarnen ska stå vid skrivaren, närmast skräpberget. |
| 3:39 | MÅL |  | Ställ kvarnen |
| 3:40 | sak | du | Kvarnen ska stå vid skrivaren, närmast skräpberget. |
| 3:40 | målruta |  | Ställ kvarnen |
| 3:40 | pil |  | Ställ kvarnen |
| 3:40 | notis | tanke | 💭 Kvarnen ska stå vid skrivaren, närmast skräpberget. |
| 3:40 | röst | du | Kvarnen ska stå vid skrivaren, närmast skräpberget. · MÅL |
| 3:41 | nick |  | nick:9 |
| 3:43 | kvittens-bock |  | ✓ Köp kvarnen |
| 3:44 | klar | du | Kvarnen ska stå vid skrivaren, närmast skräpberget. |
| 3:53 | sak | mamma | Hur kunde du bara gå? Är du ok? Svara när jag ringer! |
| 3:53 | sms | mamma | Hur kunde du bara gå? Är du ok? Svara när jag ringer! |
| 3:53 | sms-bubbla | mamma | Hur kunde du bara gå? Är du ok? Svara när jag ringer! |
| 3:53 | röst | mamma | Hur kunde du bara gå? Är du ok? Svara när jag ringer! · STORY |
| 3:54 | väntar | kjelle | God morgon, det är Kjelle på Radio Tippen! Det har flyttat in någon i det gamla skjulet. Med en cykel och en skrivare. Spännande, Gunnar. |
| 3:54 | radio | kjelle | God morgon, det är Kjelle på Radio Tippen! Det har flyttat in någon i det gamla skjulet. Med en cykel och en skrivare. Spännande, Gunnar. |
| 3:54 | skratt | du | Radio-Kjelle |
| 3:57 | klar | mamma | Hur kunde du bara gå? Är du ok? Svara när jag ringer! |
| 3:57 | väntar | foto | Första nyckelringen |
| 3:57 | paket |  | tanke |
| 3:57 | tanke | du | Någon köpte nåt jag gjort. Det här kan funka. |
| 3:57 | väntar | du | Någon köpte nåt jag gjort. Det här kan funka. |
| 3:58 | tanke | du | Vem är Gunnar? |
| 3:58 | väntar | du | Vem är Gunnar? |
| 3:59 | brott | DÖD KNAPP | Vad ska jag göra nu? (H) i dn-ruta: täckt av por (div) |
| 4:03 | händelse | placerat | sak=kvarnen |
| 4:03 | duns | du | ställs ner |
| 4:03 | händelse | malKlart | id=kvarn del=Dag 1 – Kom igång nasta=flaska |
| 4:03 | väntar | du | Skräp i kvarnen, sen vevar jag. Då blir det tråd. |
| 4:03 | MÅL |  | Gör egen tråd |
| 4:03 | målruta |  | Gör egen tråd |
| 4:03 | sak | du | Skräp i kvarnen, sen vevar jag. Då blir det tråd. |
| 4:03 | pil |  | Gör egen tråd |
| 4:03 | notis | tanke | 💭 Skräp i kvarnen, sen vevar jag. Då blir det tråd. |
| 4:03 | röst | du | Skräp i kvarnen, sen vevar jag. Då blir det tråd. · MÅL |
| 4:03 | nick |  | nick:10 |
| 4:07 | kvittens-bock |  | ✓ Ställ kvarnen |
| 4:07 | klar | du | Skräp i kvarnen, sen vevar jag. Då blir det tråd. |
| 4:12 | hjälp | kontroll | Klicka och håll: Veva kvarnen |
| 4:19 | struken | du | Vem är Gunnar? |
| 4:25 | väntar | info:bra | 3 st i tratten – veva nu! |
| 4:25 | sak | info:bra | 3 st i tratten – veva nu! |
| 4:25 | kvitto-visas | info:bra | 3 st i tratten – veva nu! |
| 4:25 | toast | bra | 3 st i tratten – veva nu! |
| 4:26 | händelse | malKlart | id=flaska del=Dag 1 – Kom igång nasta=egenPrint |
| 4:26 | kvittens | du | Det blir tråd! Riktig plasttråd. |
| 4:26 | väntar | du | Det blir tråd! Riktig plasttråd. |
| 4:26 | väntar | du | Kvarnen funkar. Soptippen är en gruva. |
| 4:26 | väntar | du | Min egen tråd. Nu printar jag en nyckelring av den. |
| 4:26 | MÅL |  | Printa med egen tråd |
| 4:27 | klar | info:bra | 3 st i tratten – veva nu! |
| 4:27 | sak | du | Det blir tråd! Riktig plasttråd. |
| 4:27 | röst | du | Det blir tråd! Riktig plasttråd. · STORY |
| 4:28 | målruta |  | Printa med egen tråd |
| 4:29 | klar | du | Det blir tråd! Riktig plasttråd. |
| 4:29 | sak | du | Kvarnen funkar. Soptippen är en gruva. |
| 4:29 | kvitto-visas | du | Kvarnen funkar. Soptippen är en gruva. |
| 4:29 | lapp | 📔 Dagbok | Kvarnen funkar. Soptippen är en gruva. |
| 4:29 | dagbokrad | du | Kvarnen funkar. Soptippen är en gruva. |
| 4:29 | notis | dagbok | Kvarnen funkar. Soptippen är en gruva. |
| 4:30 | klar | du | Kvarnen funkar. Soptippen är en gruva. |
| 4:30 | sak | du | Min egen tråd. Nu printar jag en nyckelring av den. |
| 4:30 | pil |  | Printa med egen tråd |
| 4:30 | notis | tanke | 💭 Min egen tråd. Nu printar jag en nyckelring av den. |
| 4:30 | röst | du | Min egen tråd. Nu printar jag en nyckelring av den. · MÅL |
| 4:31 | nick |  | nick:11 |
| 4:34 | klar | du | Min egen tråd. Nu printar jag en nyckelring av den. |
| 4:43 | sak | kjelle | God morgon, det är Kjelle på Radio Tippen! Det har flyttat in någon i det gamla skjulet. Med en cykel och en skrivare. Spännande, Gunnar. |
| 4:43 | notis |  | 📻 Radio Tippen: God morgon, det är Kjelle på Radio Tippen! Det har flyttat in någon i det gamla skjulet. Med en cykel och en skrivare. Spännande, Gunnar. |
| 4:43 | röst | kjelle | God morgon, det är Kjelle på Radio Tippen! Det har flyttat in någon i det gamla skjulet. Med en cykel och en skrivare. Spännande, Gunnar. · REAKTION |
| 4:45 | händelse | printStart | sak=nyckelring |
| 4:45 | toast | bra | 🔗 Slangen kopplad |
| 4:50 | toast | guld | ✅ |
| 4:50 | händelse | printKlar | sak=nyckelring n=3 |
| 4:50 | paket |  | tanke |
| 4:50 | tanke | du | En nyckelring av en gammal schampoflaska. Den luktar fortfarande päron. |
| 4:50 | väntar | du | En nyckelring av en gammal schampoflaska. Den luktar fortfarande päron. |
| 4:50 | skratt | du | egen tråd |
| 4:50 | händelse | malKlart | id=egenPrint del=Dag 1 – Kom igång nasta=salj |
| 4:50 | struken | du | En nyckelring av en gammal schampoflaska. Den luktar fortfarande päron. |
| 4:50 | väntar | du | Affären på andra sidan vägen kanske köper sånt här. |
| 4:50 | MÅL |  | Sälj hos Ali |
| 4:51 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 4:52 | målruta |  | Sälj hos Ali |
| 4:54 | kvittens-bock |  | ✓ Printa med egen tråd |
| 4:54 | klar | kjelle | God morgon, det är Kjelle på Radio Tippen! Det har flyttat in någon i det gamla skjulet. Med en cykel och en skrivare. Spännande, Gunnar. |
| 4:56 | sak | du | Affären på andra sidan vägen kanske köper sånt här. |
| 4:56 | pil |  | Sälj hos Ali |
| 4:56 | notis | tanke | 💭 Affären på andra sidan vägen kanske köper sånt här. |
| 4:56 | röst | du | Affären på andra sidan vägen kanske köper sånt här. · MÅL |
| 4:56 | nick |  | nick:12 |
| 5:00 | klar | du | Affären på andra sidan vägen kanske köper sånt här. |
| 5:09 | sak | foto | Första nyckelringen |
| 5:09 | foto | du | Första nyckelringen |
| 5:10 | händelse | printStart | sak=nyckelring |
| 5:11 | toast | guld | ✅ |
| 5:11 | händelse | printKlar | sak=nyckelring n=4 |
| 5:11 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 5:11 | klar | foto | Första nyckelringen |
| 5:15 | händelse | printStart | sak=nyckelring |
| 5:16 | toast | guld | ✅ |
| 5:16 | händelse | printKlar | sak=nyckelring n=5 |
| 5:16 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 5:19 | sak | du | Någon köpte nåt jag gjort. Det här kan funka. |
| 5:19 | notis | tanke | 💭 Någon köpte nåt jag gjort. Det här kan funka. |
| 5:19 | röst | du | Någon köpte nåt jag gjort. Det här kan funka. · STORY |
| 5:23 | klar | du | Någon köpte nåt jag gjort. Det här kan funka. |
| 5:29 | aliSalt | ali | 45 |
| 5:29 | röst | ali | Nyckelringar igen? Folk tappar sina nycklar hela tiden. Bra affär för oss. · STORY |
| 5:29 | butiksbubbla | ali | Nyckelringar igen? Folk tappar sina nycklar hela tiden. Bra affär för oss. |
| 5:30 | händelse | malKlart | id=salj del=Dag 1 – Kom igång nasta=powerbank |
| 5:30 | paket |  | sms → ge |
| 5:30 | väntar | ali | Ali här. Glömde en sak. Kom tillbaka, jag har nåt åt dig. |
| 5:30 | väntar |  | (läget ändras) |
| 5:30 | MÅL |  | Gå till Ali |
| 5:32 | väntar | du | Ali har något åt mig. Jag går över vägen till affären. |
| 5:32 | sak | du | Ali har något åt mig. Jag går över vägen till affären. |
| 5:32 | målruta |  | Gå till Ali |
| 5:32 | pil |  | Gå till Ali |
| 5:32 | notis | tanke | 💭 Ali har något åt mig. Jag går över vägen till affären. |
| 5:32 | röst | du | Ali har något åt mig. Jag går över vägen till affären. · MÅL |
| 5:34 | kvittens-bock |  | ✓ Sälj hos Ali |
| 5:37 | klar | du | Ali har något åt mig. Jag går över vägen till affären. |
| 5:39 | sak |  | (läget ändras) |
| 5:39 | klar |  | (läget ändras) |
| 5:45 | sak | ali | Ali här. Glömde en sak. Kom tillbaka, jag har nåt åt dig. |
| 5:45 | sms | ali | Ali här. Glömde en sak. Kom tillbaka, jag har nåt åt dig. |
| 5:45 | sms-bubbla | ali | Ali här. Glömde en sak. Kom tillbaka, jag har nåt åt dig. |
| 5:45 | röst | ali | Ali här. Glömde en sak. Kom tillbaka, jag har nåt åt dig. · STORY |
| 5:46 | paket | ali | ali → ge |
| 5:46 | butiksbubbla | ali | Ali här. Jag såg dig cykla. Det ser jobbigt ut. Testa koppla på den här. Bra kunder får bonus. |
| 5:48 | röst | ali | Ali här. Jag såg dig cykla. Det ser jobbigt ut. Testa koppla på den här. Bra kunder får bonus. · STORY |
| 5:52 | klar | ali | Ali här. Glömde en sak. Kom tillbaka, jag har nåt åt dig. |
| 6:03 | skratt | du | powerbanken på cykeln |
| 6:03 | paket |  | tanke |
| 6:03 | tanke | du | Nu sparas lite ström. En nyckelring, typ. Framtiden är här, och den sitter fast med eltejp. |
| 6:03 | väntar | du | Nu sparas lite ström. En nyckelring, typ. Framtiden är här, och den sitter fast med eltejp. |
| 6:03 | monterat | du | byggsats:powerbank |
| 6:03 | händelse | monterat | sak=powerbank |
| 6:03 | sak | du | Nu sparas lite ström. En nyckelring, typ. Framtiden är här, och den sitter fast med eltejp. |
| 6:03 | kvitto-visas | du | Nu sparas lite ström. En nyckelring, typ. Framtiden är här, och den sitter fast med eltejp. |
| 6:03 | notis | tanke | 💭 Nu sparas lite ström. En nyckelring, typ. Framtiden är här, och den sitter fast med eltejp. |
| 6:03 | röst | du | Nu sparas lite ström. En nyckelring, typ. Framtiden är här, och den sitter fast med eltejp. · REAKTION |
| 6:03 | händelse | malKlart | id=powerbank del=Dag 1 – Kom igång nasta=kopGrip |
| 6:03 | paket |  | lapp |
| 6:03 | lapp-kö | 🧺 Ali | Ali här. Nyckelringen sålde. Jag ville bli ingenjör, men fick ta över pappas butik. I natt lät jag en AI rita en skräpgrip åt mig. Kom och titta. |
| 6:03 | väntar | ali | Ali här. Nyckelringen sålde. Jag ville bli ingenjör, men fick ta över pappas butik. I natt lät jag en AI rita en skräpgrip åt mig. Kom och titta. |
| 6:03 | väntar | du | Med en skräpgrip slipper jag böja mig. Ali har en ritning. |
| 6:03 | MÅL |  | Plocka skräp och mal det |
| 6:05 | målruta |  | Plocka skräp och mal det |
| 6:07 | kvittens-bock |  | ✓ Gå till Ali |
| 6:10 | klar | du | Nu sparas lite ström. En nyckelring, typ. Framtiden är här, och den sitter fast med eltejp. |
| 6:11 | sak | du | Med en skräpgrip slipper jag böja mig. Ali har en ritning. |
| 6:11 | pil |  | Plocka skräp och mal det |
| 6:11 | notis | tanke | 💭 Med en skräpgrip slipper jag böja mig. Ali har en ritning. |
| 6:11 | röst | du | Med en skräpgrip slipper jag böja mig. Ali har en ritning. · MÅL |
| 6:11 | nick |  | nick:14 |
| 6:16 | paket |  | tanke |
| 6:16 | tanke | du | Femtio kronor. Nu har jag råd med gripen. |
| 6:16 | väntar | du | Femtio kronor. Nu har jag råd med gripen. |
| 6:16 | klar | du | Med en skräpgrip slipper jag böja mig. Ali har en ritning. |
| 6:24 | sak | du | Femtio kronor. Nu har jag råd med gripen. |
| 6:24 | notis | tanke | 💭 Femtio kronor. Nu har jag råd med gripen. |
| 6:24 | röst | du | Femtio kronor. Nu har jag råd med gripen. · REAKTION |
| 6:27 | händelse | printStart | sak=nyckelring |
| 6:27 | klar | du | Femtio kronor. Nu har jag råd med gripen. |
| 6:28 | toast | fel | Ingen ström – trampa cykeln |
| 6:28 | väntar | notis:Storebrors skrivare: Ingen ström – tramp | Storebrors skrivare: Ingen ström – trampa cykeln |
| 6:29 | toast | guld | ✅ |
| 6:29 | händelse | printKlar | sak=nyckelring n=6 |
| 6:29 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 6:31 | händelse | printStart | sak=nyckelring |
| 6:32 | toast | guld | ✅ |
| 6:32 | händelse | printKlar | sak=nyckelring n=7 |
| 6:43 | sak | notis:Storebrors skrivare: Ingen ström – tramp | Storebrors skrivare: Ingen ström – trampa cykeln |
| 6:43 | notis | fel | Storebrors skrivare: Ingen ström – trampa cykeln |
| 6:46 | klar | notis:Storebrors skrivare: Ingen ström – tramp | Storebrors skrivare: Ingen ström – trampa cykeln |
| 6:46 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 6:48 | händelse | printStart | sak=nyckelring |
| 6:49 | toast | guld | ✅ |
| 6:49 | händelse | printKlar | sak=nyckelring n=8 |
| 6:50 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 6:55 | sak | ali | Ali här. Nyckelringen sålde. Jag ville bli ingenjör, men fick ta över pappas butik. I natt lät jag en AI rita en skräpgrip åt mig. Kom och titta. |
| 6:55 | sms | ali | Ali här. Nyckelringen sålde. Jag ville bli ingenjör, men fick ta över pappas butik. I natt lät jag en AI rita en skräpgrip åt mig. Kom och titta. |
| 6:55 | sms-bubbla | ali | Ali här. Nyckelringen sålde. Jag ville bli ingenjör, men fick ta över pappas butik. I natt lät jag en AI rita en skräpgrip åt mig. Kom och titta. |
| 6:55 | röst | ali | Ali här. Nyckelringen sålde. Jag ville bli ingenjör, men fick ta över pappas butik. I natt lät jag en AI rita en skräpgrip åt mig. Kom och titta. · STORY |
| 7:02 | paket |  | ali → ge |
| 7:02 | väntar | ali | Du får bonus! 15 kr extra. Pappa hade gillat dig. |
| 7:02 | väntar |  | (läget ändras) |
| 7:02 | aliSalt | ali | 15 |
| 7:02 | aliSalt | ali | 15 |
| 7:02 | aliSalt | ali | 15 |
| 7:07 | klar | ali | Ali här. Nyckelringen sålde. Jag ville bli ingenjör, men fick ta över pappas butik. I natt lät jag en AI rita en skräpgrip åt mig. Kom och titta. |
| 7:09 | sak | ali | Du får bonus! 15 kr extra. Pappa hade gillat dig. |
| 7:09 | notis |  | Ali: ”Du får bonus! 15 kr extra. Pappa hade gillat dig.” |
| 7:09 | röst | ali | Du får bonus! 15 kr extra. Pappa hade gillat dig. · REAKTION |
| 7:13 | klar | ali | Du får bonus! 15 kr extra. Pappa hade gillat dig. |
| 7:15 | sak |  | (läget ändras) |
| 7:15 | klar |  | (läget ändras) |
| 7:26 | händelse | printStart | sak=nyckelring |
| 7:27 | toast | guld | ✅ |
| 7:27 | händelse | printKlar | sak=nyckelring n=9 |
| 7:31 | tanke | du | Gripen hos Ali. Femtio kronor. |
| 7:31 | väntar | du | Gripen hos Ali. Femtio kronor. |
| 7:31 | nick |  | paminn:14 |
| 7:32 | sak | du | Gripen hos Ali. Femtio kronor. |
| 7:32 | notis | tanke | 💭 Gripen hos Ali. Femtio kronor. |
| 7:32 | röst | du | Gripen hos Ali. Femtio kronor. · REAKTION |
| 7:34 | klar | du | Gripen hos Ali. Femtio kronor. |
| 7:40 | upplåst | bara | grip |
| 7:40 | brott | UPPLÅST | grip (bara 3 av 3) |
| 7:40 | händelse | upplast | id=grip flask=bara |
| 7:40 | paket |  | tanke |
| 7:40 | tanke | du | Ett skräp i taget. Jag springer ihjäl mig. |
| 7:40 | väntar | du | Ett skräp i taget. Jag springer ihjäl mig. |
| 7:40 | sak | du | Ett skräp i taget. Jag springer ihjäl mig. |
| 7:40 | notis | tanke | 💭 Ett skräp i taget. Jag springer ihjäl mig. |
| 7:40 | röst | du | Ett skräp i taget. Jag springer ihjäl mig. · STORY |
| 7:44 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 7:44 | klar | du | Ett skräp i taget. Jag springer ihjäl mig. |
| 7:46 | händelse | printStart | sak=nyckelring |
| 7:47 | toast | guld | ✅ |
| 7:47 | händelse | printKlar | sak=nyckelring n=10 |
| 7:48 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 8:00 | aliSalt | ali | 15 |
| 8:00 | aliSalt | ali | 15 |
| 8:03 | struken | info:guld | 3D-modell köpt – printa skräpgrip |
| 8:03 | händelse | kopt | sak=grip |
| 8:03 | röst | ali | Bra val. 3D-modellen är din. Den räcker till en. · STORY |
| 8:03 | butiksbubbla | ali | Bra val. 3D-modellen är din. Den räcker till en. |
| 8:05 | händelse | malKlart | id=kopGrip del=Dag 1 – Kom igång nasta=printGrip |
| 8:05 | väntar | du | Min första 3D-modell! Jag printar inte bara saker – jag printar maskiner. |
| 8:05 | MÅL |  | Printa skräpgripen |
| 8:06 | sak | du | Min första 3D-modell! Jag printar inte bara saker – jag printar maskiner. |
| 8:06 | kvitto-visas | du | Min första 3D-modell! Jag printar inte bara saker – jag printar maskiner. |
| 8:06 | lapp | 📔 Dagbok | Min första 3D-modell! Jag printar inte bara saker – jag printar maskiner. |
| 8:06 | dagbokrad | du | Min första 3D-modell! Jag printar inte bara saker – jag printar maskiner. |
| 8:06 | notis | dagbok | Min första 3D-modell! Jag printar inte bara saker – jag printar maskiner. |
| 8:06 | klar | du | Min första 3D-modell! Jag printar inte bara saker – jag printar maskiner. |
| 8:06 | målruta |  | Printa skräpgripen |
| 8:06 | sak | du | (nytt mål i rutan) |
| 8:06 | pil |  | Printa skräpgripen |
| 8:06 | klar | du | (nytt mål i rutan) |
| 8:07 | nick |  | nick:15 |
| 8:24 | händelse | printStart | sak=byggsats:grip |
| 8:24 | toast | fel | Ingen ström – trampa cykeln |
| 8:28 | händelse | printKlar | sak=byggsats:grip n=1 |
| 8:28 | toast | guld | ✅ |
| 8:34 | väntar | bud | (tips) |
| 8:34 | sak | bud | (tips) |
| 8:34 | väntar | du | Jag har pengar nu. Hos Ali kan jag köpa uppgraderingar – bära mer eller printa snabbare. |
| 8:35 | klar | bud | (tips) |
| 8:37 | sak | du | Jag har pengar nu. Hos Ali kan jag köpa uppgraderingar – bära mer eller printa snabbare. |
| 8:37 | röst | du | Jag har pengar nu. Hos Ali kan jag köpa uppgraderingar – bära mer eller printa snabbare. · MÅL |
| 8:44 | klar | du | Jag har pengar nu. Hos Ali kan jag köpa uppgraderingar – bära mer eller printa snabbare. |
| 8:47 | väntar | info:guld | Skräpgrip ska jag ha på mig. |
| 8:47 | händelse | tagitUrPrint | sak=byggsats:grip n=1 |
| 8:47 | paket |  | sms |
| 8:47 | väntar | ali | Ali här. Jag såg Skräpgrip på avstånd. Ett streck blev lite snett. Mitt fel. Vackert ändå. |
| 8:47 | sak | info:guld | Skräpgrip ska jag ha på mig. |
| 8:47 | kvitto-visas | info:guld | Skräpgrip ska jag ha på mig. |
| 8:47 | toast | guld | Skräpgrip ska jag ha på mig. |
| 8:48 | hjälp | kontroll | Klick: Klicka för att ta på dig den |
| 8:49 | klar | info:guld | Skräpgrip ska jag ha på mig. |
| 8:52 | väntar | info:guld | 🦾 Skräpgripen sitter! Jag bär 6, siktar lättare och plockar när jag går nära. |
| 8:52 | tog på | du | byggsats:grip |
| 8:52 | händelse | monterat | sak=grip |
| 8:52 | sak | info:guld | 🦾 Skräpgripen sitter! Jag bär 6, siktar lättare och plockar när jag går nära. |
| 8:52 | kvitto-visas | info:guld | 🦾 Skräpgripen sitter! Jag bär 6, siktar lättare och plockar när jag går nära. |
| 8:52 | toast | guld | 🦾 Skräpgripen sitter! Jag bär 6, siktar lättare och plockar när jag går nära. |
| 8:52 | händelse | malKlart | id=printGrip del=Dag 1 – Kom igång nasta=krukaD1 |
| 8:52 | väntar | du | Ali vill ha krukor. Jag printar en blomkruka. |
| 8:52 | MÅL |  | Printa och sälj nyckelringar |
| 8:52 | upplåst | inkomst | kruka |
| 8:52 | brott | UPPLÅST | kruka (inkomst 10 av 6) |
| 8:52 | händelse | upplast | id=kruka flask=inkomst |
| 8:52 | paket |  | tanke → sms |
| 8:52 | tanke | du | Nyckelringar, nyckelringar. Ali kan inte vilja ha fler. |
| 8:52 | väntar | du | Nyckelringar, nyckelringar. Ali kan inte vilja ha fler. |
| 8:52 | väntar | ali | Prova en kruka. Folk köper krukor. Ingen vet varför. |
| 8:52 | skratt | ali | Prova en kruka. Folk köper krukor. Ingen |
| 8:54 | klar | info:guld | 🦾 Skräpgripen sitter! Jag bär 6, siktar lättare och plockar när jag går nära. |
| 8:54 | målruta |  | Köp krukreceptet |
| 8:56 | kvittens-bock |  | ✓ Printa skräpgripen |
| 8:56 | sak | du | Ali vill ha krukor. Jag printar en blomkruka. |
| 8:56 | pil |  | Köp krukreceptet |
| 8:56 | notis | tanke | 💭 Ali vill ha krukor. Jag printar en blomkruka. |
| 8:56 | röst | du | Ali vill ha krukor. Jag printar en blomkruka. · MÅL |
| 8:56 | nick |  | nick:16 |
| 8:59 | klar | du | Ali vill ha krukor. Jag printar en blomkruka. |
| 9:03 | händelse | kopt | sak=kruka |
| 9:03 | röst | ali | Bra val. Folk köper sånt. Jag vet inte varför. · STORY |
| 9:03 | butiksbubbla | ali | Blomkruka? Bra val. Folk köper sånt. Jag vet inte varför. |
| 9:15 | sak | ali | Ali här. Jag såg Skräpgrip på avstånd. Ett streck blev lite snett. Mitt fel. Vackert ändå. |
| 9:15 | sms | ali | Ali här. Jag såg Skräpgrip på avstånd. Ett streck blev lite snett. Mitt fel. Vackert ändå. |
| 9:15 | sms-bubbla | ali | Ali här. Jag såg Skräpgrip på avstånd. Ett streck blev lite snett. Mitt fel. Vackert ändå. |
| 9:15 | röst | ali | Ali här. Jag såg Skräpgrip på avstånd. Ett streck blev lite snett. Mitt fel. Vackert ändå. · REAKTION |
| 9:22 | händelse | printStart | sak=kruka |
| 9:22 | klar | ali | Ali här. Jag såg Skräpgrip på avstånd. Ett streck blev lite snett. Mitt fel. Vackert ändå. |
| 9:25 | toast | guld | ✅ |
| 9:25 | händelse | printKlar | sak=kruka n=1 |
| 9:25 | händelse | malKlart | id=krukaD1 del=Dag 1 – Kom igång nasta=saljKruka |
| 9:25 | kvittens | du | En kruka. Mamma skulle bli så stolt. Hon får inte veta. |
| 9:25 | väntar | du | En kruka. Mamma skulle bli så stolt. Hon får inte veta. |
| 9:25 | väntar | du | Ali gillar krukor. Han sa det själv. |
| 9:25 | MÅL |  | Sälj blomkrukan |
| 9:25 | sak | du | En kruka. Mamma skulle bli så stolt. Hon får inte veta. |
| 9:25 | röst | du | En kruka. Mamma skulle bli så stolt. Hon får inte veta. · STORY |
| 9:25 | målruta |  | Sälj blomkrukan |
| 9:30 | klar | du | En kruka. Mamma skulle bli så stolt. Hon får inte veta. |
| 9:30 | sak | du | Ali gillar krukor. Han sa det själv. |
| 9:30 | pil |  | Sälj blomkrukan |
| 9:30 | notis | tanke | 💭 Ali gillar krukor. Han sa det själv. |
| 9:30 | röst | du | Ali gillar krukor. Han sa det själv. · MÅL |
| 9:33 | klar | du | Ali gillar krukor. Han sa det själv. |
| 9:48 | sak | du | Nyckelringar, nyckelringar. Ali kan inte vilja ha fler. |
| 9:48 | notis | tanke | 💭 Nyckelringar, nyckelringar. Ali kan inte vilja ha fler. |
| 9:48 | röst | du | Nyckelringar, nyckelringar. Ali kan inte vilja ha fler. · STORY |
| 9:51 | händelse | tagitUrPrint | sak=kruka n=1 |
| 9:52 | hjälp | kontroll | R: Vrid innan du ställer ner |
| 9:53 | klar | du | Nyckelringar, nyckelringar. Ali kan inte vilja ha fler. |
| 10:01 | sak | ali | Prova en kruka. Folk köper krukor. Ingen vet varför. |
| 10:01 | skratt | ali | Prova en kruka. Folk köper krukor. Ingen |
| 10:01 | sms | ali | Prova en kruka. Folk köper krukor. Ingen vet varför. |
| 10:01 | skratt | ali | Prova en kruka. Folk köper krukor. Ingen |
| 10:01 | sms-bubbla | ali | Prova en kruka. Folk köper krukor. Ingen vet varför. |
| 10:01 | skratt | ali | Prova en kruka. Folk köper krukor. Ingen |
| 10:01 | röst | ali | Prova en kruka. Folk köper krukor. Ingen vet varför. · STORY |
| 10:05 | klar | ali | Prova en kruka. Folk köper krukor. Ingen vet varför. |
| 10:05 | skratt | ali | Prova en kruka. Folk köper krukor. Ingen |
| 10:15 | aliSalt | ali | 70 |
| 10:16 | händelse | malKlart | id=saljKruka del=Dag 1 – Kom igång nasta=kopSang |
| 10:16 | väntar | du | Jag tänker inte sova på betongen i natt. Ali har en säng. Typ. |
| 10:16 | målruta |  | Köp sängen |
| 10:17 | MÅL |  | Köp sängen |
| 10:17 | sak | du | Jag tänker inte sova på betongen i natt. Ali har en säng. Typ. |
| 10:17 | pil |  | Köp sängen |
| 10:17 | notis | tanke | 💭 Jag tänker inte sova på betongen i natt. Ali har en säng. Typ. |
| 10:17 | röst | du | Jag tänker inte sova på betongen i natt. Ali har en säng. Typ. · MÅL |
| 10:20 | kvittens-bock |  | ✓ Sälj blomkrukan |
| 10:22 | klar | du | Jag tänker inte sova på betongen i natt. Ali har en säng. Typ. |
| 10:30 | händelse | kopt | sak=sang |
| 10:30 | röst | ali | Sov gott, min vän. · STORY |
| 10:30 | butiksbubbla | ali | Sov gott, min vän. |
| 10:32 | händelse | malKlart | id=kopSang del=Dag 1 – Kom igång nasta=printSang |
| 10:32 | väntar | du | En säng tar lång tid. Den är värd det. |
| 10:32 | målruta |  | Printa sängen |
| 10:32 | MÅL |  | Printa sängen |
| 10:32 | sak | du | En säng tar lång tid. Den är värd det. |
| 10:32 | pil |  | Printa sängen |
| 10:32 | notis | tanke | 💭 En säng tar lång tid. Den är värd det. |
| 10:32 | röst | du | En säng tar lång tid. Den är värd det. · MÅL |
| 10:32 | nick |  | nick:19 |
| 10:35 | klar | du | En säng tar lång tid. Den är värd det. |
| 10:36 | kvittens-bock |  | ✓ Köp sängen |
| 10:55 | händelse | printStart | sak=sang |
| 10:56 | toast | fel | Ingen ström – trampa cykeln |
| 11:00 | toast | fel | Slut på tråd – mal mer så fortsätter den |
| 11:00 | väntar | notis:Storebrors skrivare: Slut på tråd – mal  | Storebrors skrivare: Slut på tråd – mal mer så fortsätter den |
| 11:00 | sak | notis:Storebrors skrivare: Slut på tråd – mal  | Storebrors skrivare: Slut på tråd – mal mer så fortsätter den |
| 11:00 | notis | fel | Storebrors skrivare: Slut på tråd – mal mer så fortsätter den |
| 11:03 | klar | notis:Storebrors skrivare: Slut på tråd – mal  | Storebrors skrivare: Slut på tråd – mal mer så fortsätter den |
| 11:32 | toast | guld | ✅ |
| 11:32 | händelse | printKlar | sak=sang n=1 |
| 11:36 | händelse | tagitUrPrint | sak=sang n=1 |
| 11:36 | händelse | malKlart | id=printSang del=Dag 1 – Kom igång nasta=sov1 |
| 11:36 | kvittens | du | En säng. Jag printade en SÄNG. |
| 11:36 | väntar | du | En säng. Jag printade en SÄNG. |
| 11:36 | paket |  | lapp |
| 11:36 | kvallsrad | du | Nitton år. Inget mer tjat. Gården är full av skräp. I morgon. |
| 11:36 | väntar | du | Sängen ska in i skjulet. Sen sover jag. |
| 11:36 | MÅL |  | Sängen i skjulet |
| 11:36 | sak | du | En säng. Jag printade en SÄNG. |
| 11:36 | röst | du | En säng. Jag printade en SÄNG. · STORY |
| 11:36 | målruta |  | Sängen i skjulet |
| 11:39 | klar | du | En säng. Jag printade en SÄNG. |
| 11:39 | sak | du | Sängen ska in i skjulet. Sen sover jag. |
| 11:39 | pil |  | Sängen i skjulet |
| 11:39 | notis | tanke | 💭 Sängen ska in i skjulet. Sen sover jag. |
| 11:39 | röst | du | Sängen ska in i skjulet. Sen sover jag. · MÅL |
| 11:40 | nick |  | nick:20 |
| 11:43 | klar | du | Sängen ska in i skjulet. Sen sover jag. |
| 12:03 | nattkort | du | 🌙 Dag 1 är slut. God natt. zzz… i en riktig säng Nitton år. Inget mer tjat. Gården är full av skräp. I morgon. DAGENS PRINTAR Nyckelring × 10 Blomkruka × 1 Sän |

<details><summary>Botens handlingar dag 1</summary>

- 0:17 gå till brädhögen (3 m) (5 kr)
- 0:35 gå till cykeln vid vägen (2 m) (5 kr)
- 0:55 gå till rutan i linje 1 (13 m) (5 kr)
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
- 4:03 gå till kvarnens ruta (28 m) (5 kr)
- 4:22 plockar 3 skräp på gården (bär max 3) (5 kr)
- 4:25 gå till kvarnen (8 m) (5 kr)
- 4:43 gå till cykeln (2 m) (5 kr)
- 4:43 gå till skrivaren (1 m) (5 kr)
- 4:45 printar Nyckelring (5 kr)
- 4:51 tar ut 1 st ur skrivaren (5 kr)
- 5:10 printar Nyckelring (5 kr)
- 5:11 tar ut 1 st ur skrivaren (5 kr)
- 5:15 printar Nyckelring (5 kr)
- 5:17 tar ut 1 st ur skrivaren (5 kr)
- 5:28 gå till Ali (27 m) (5 kr)
- 5:28 öppnar Alis butik – sälja nyckelringar (5 kr)
- 5:30 säljer hos Ali: +45 kr (50 kr)
- 5:42 nybörjaren ser ingen pil – tittar runt (50 kr)
- 5:46 öppnar Alis butik – Ali (powerbanken) (50 kr)
- 6:03 gå till koppla powerbanken till cykeln (24 m) (50 kr)
- 6:24 tjänar pengar till väntar på flaskhalsen för grip: 50/90 kr → printar nyckelring (15 kr) (50 kr)
- 6:25 gå till skrivaren (2 m) (50 kr)
- 6:27 printar Nyckelring (50 kr)
- 6:30 tar ut 1 st ur skrivaren (50 kr)
- 6:31 printar Nyckelring (50 kr)
- 6:38 plockar 3 skräp på gården (bär max 3) (50 kr)
- 6:43 gå till kvarnen (12 m) (50 kr)
- 6:46 gå till skrivaren (1 m) (50 kr)
- 6:46 tar ut 1 st ur skrivaren (50 kr)
- 6:48 printar Nyckelring (50 kr)
- 6:50 tar ut 1 st ur skrivaren (50 kr)
- 7:00 gå till Ali (28 m) (50 kr)
- 7:00 öppnar Alis butik – sälja (50 kr)
- 7:02 säljer hos Ali: +45 kr (95 kr)
- 7:15 tjänar pengar till väntar på flaskhalsen för grip: 95/135 kr → printar nyckelring (15 kr) (95 kr)
- 7:24 gå till skrivaren (25 m) (110 kr)
- 7:26 printar Nyckelring (110 kr)
- 7:35 plockar 3 skräp på gården (bär max 3) (110 kr)
- 7:40 gå till kvarnen (12 m) (110 kr)
- 7:44 gå till skrivaren (3 m) (110 kr)
- 7:44 tar ut 1 st ur skrivaren (110 kr)
- 7:46 printar Nyckelring (110 kr)
- 7:48 tar ut 1 st ur skrivaren (110 kr)
- 7:58 gå till Ali (28 m) (110 kr)
- 7:58 öppnar Alis butik – sälja (110 kr)
- 8:00 säljer hos Ali: +30 kr (140 kr)
- 8:02 öppnar Alis butik – köpa skräpgrip (140 kr)
- 8:04 köper grip för 50 kr (90 kr)
- 8:22 gå till skrivaren (25 m) (90 kr)
- 8:24 printar Skräpgrip (90 kr)
- 8:25 gå till cykeln (1 m) (90 kr)
- 8:36 plockar 3 skräp på gården (bär max 3) (90 kr)
- 8:43 gå till kvarnen (20 m) (90 kr)
- 8:47 gå till skrivaren (3 m) (90 kr)
- 8:48 tar ut 1 st ur skrivaren (90 kr)
- 8:52 tar på grip (90 kr)
- 9:02 gå till Ali (28 m) (90 kr)
- 9:02 öppnar Alis butik – köpa receptet blomkruka (90 kr)
- 9:04 köper kruka för 40 kr (50 kr)
- 9:21 gå till skrivaren (25 m) (50 kr)
- 9:22 printar Blomkruka (50 kr)
- 9:39 plockar 6 skräp på gården (bär max 6) (50 kr)
- 9:48 gå till kvarnen (25 m) (50 kr)
- 9:51 gå till skrivaren (3 m) (50 kr)
- 9:52 tar ut 1 st ur skrivaren (50 kr)
- 10:00 nybörjaren ser ingen pil – tittar runt (50 kr)
- 10:14 gå till Ali (28 m) (50 kr)
- 10:14 öppnar Alis butik – sälja krukan (50 kr)
- 10:16 säljer hos Ali: +70 kr (120 kr)
- 10:29 öppnar Alis butik – köpa sängen (120 kr)
- 10:31 köper sang för 60 kr (60 kr)
- 10:53 gå till skrivaren (25 m) (60 kr)
- 10:55 printar Säng (60 kr)
- 10:56 gå till cykeln (1 m) (60 kr)
- 11:18 plockar 6 skräp på gården (bär max 6) (60 kr)
- 11:29 gå till kvarnen (31 m) (60 kr)
- 11:36 gå till skrivaren (3 m) (60 kr)
- 11:37 tar ut 1 st ur skrivaren (60 kr)
- 11:51 gå till fel håll en bit (4 m) (60 kr)
- 12:00 gå till sängplatsen i skjulet (21 m) (60 kr)

</details>

## Dag 2

| Tid | Källa | Vem | Text |
|---|---|---|---|
| 12:03 | vara | ali | kruka |
| 12:03 | händelse | malKlart | id=sov1 del=Dag 1 – Kom igång nasta=kopMotor |
| 12:03 | MÅL |  | Mal skräp, printa och sälj |
| 0:01 | händelse | dagenBorjar | dag=2 |
| 0:01 | meddelande | du | Dag 2. 20 dagar till jul. Utan dörr blåser natten rakt in. |
| 0:01 | dagbokkort | du | Tippen bredvid · Dag 2. 20 dagar till jul. Utan dörr blåser natten rakt in. |
| 0:01 | röst | du | Dag 2. 20 dagar till jul. Tippen bredvid. Utan dörr blåser natten rakt in. · STORY |
| 0:08 | väntar | notis:morgon | Ali vill ha idag: Blomkruka · +50 % |
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
| 0:18 | klar | du | Vevandet tar på armarna. Ali har en motor till kvarnen. |
| 0:20 | sak | notis:morgon | Ali vill ha idag: Blomkruka · +50 % |
| 0:20 | notis |  | Blomkruka · +50 % |
| 0:23 | klar | notis:morgon | Ali vill ha idag: Blomkruka · +50 % |
| 0:25 | sak | notis:Första natten i en riktig säng. Jag prin | Första natten i en riktig säng. Jag printade den själv. |
| 0:25 | notis | dagbok | Första natten i en riktig säng. Jag printade den själv. |
| 0:28 | klar | notis:Första natten i en riktig säng. Jag prin | Första natten i en riktig säng. Jag printade den själv. |
| 0:31 | händelse | printStart | sak=kruka |
| 0:32 | toast | fel | Ingen ström – trampa cykeln |
| 0:35 | toast | guld | ✅ |
| 0:35 | händelse | printKlar | sak=kruka n=2 |
| 0:36 | händelse | tagitUrPrint | sak=kruka n=1 |
| 0:36 | struken | kedja | kruka |
| 0:37 | hjälp | kontroll | R: Vrid innan du ställer ner |
| 0:39 | väntar | ali | Ali här. Såg skylten. Stavningen är rätt. Det är mer än många. |
| 0:39 | väntar | foto | Egen säng |
| 0:39 | paket |  | tanke |
| 0:39 | tanke | du | Tänk att jag ska få sova i min egen säng. |
| 0:39 | väntar | du | Tänk att jag ska få sova i min egen säng. |
| 0:39 | sak | foto | Egen säng |
| 0:39 | foto | du | Egen säng |
| 0:42 | klar | foto | Egen säng |
| 0:45 | röst | ali | Du är den enda här som vet vad en tolerans är. Det värmer. Lite. Inte mycket. · STORY |
| 0:45 | butiksbubbla | ali | Du är den enda här som vet vad en tolerans är. Det värmer. Lite. Inte mycket. |
| 0:47 | aliSalt | ali | 105 |
| 0:47 | butiksbubbla | ali | Precis vad jag ville ha idag. 105 kr – med extra. |
| 0:47 | väntar | ali | Precis det jag ville ha idag, min vän. |
| 0:49 | sak | ali | Precis det jag ville ha idag, min vän. |
| 0:49 | röst | ali | Precis det jag ville ha idag, min vän. · STORY |
| 0:52 | klar | ali | Precis det jag ville ha idag, min vän. |
| 1:00 | sak | du | Tänk att jag ska få sova i min egen säng. |
| 1:00 | notis | tanke | 💭 Tänk att jag ska få sova i min egen säng. |
| 1:00 | röst | du | Tänk att jag ska få sova i min egen säng. · STORY |
| 1:03 | klar | du | Tänk att jag ska få sova i min egen säng. |
| 1:04 | okänt ord bytt | info | 🚛 Sopbilen tippade en ny last på soptippen! |
| 1:04 | väntar | info:guld | 🚛 Sopbilen tippade en ny last på soptippen! |
| 1:04 | lapp | 📔 Dagbok | Sopbilen tippade en ny last. Allt det skräpet – och grinden är låst. |
| 1:04 | okänt ord bytt | du | Sopbilen tippade en ny last. Allt det skräpet – och grinden är låst. |
| 1:04 | dagbokrad | du | En stor bil tippade en ny last. Allt det skräpet – och grinden är låst. |
| 1:04 | väntar | notis:En stor bil tippade en ny last. Allt det | En stor bil tippade en ny last. Allt det skräpet – och grinden är låst. |
| 1:05 | händelse | printStart | sak=kruka |
| 1:05 | sak | info:guld | 🚛 Sopbilen tippade en ny last på soptippen! |
| 1:05 | kvitto-visas | info:guld | 🚛 Sopbilen tippade en ny last på soptippen! |
| 1:05 | toast | guld | 🚛 En stor bil tippade en ny last på soptippen! |
| 1:07 | klar | info:guld | 🚛 Sopbilen tippade en ny last på soptippen! |
| 1:07 | toast | guld | ✅ |
| 1:07 | händelse | printKlar | sak=kruka n=3 |
| 1:08 | händelse | tagitUrPrint | sak=kruka n=1 |
| 1:09 | sak | notis:En stor bil tippade en ny last. Allt det | En stor bil tippade en ny last. Allt det skräpet – och grinden är låst. |
| 1:09 | notis | dagbok | En stor bil tippade en ny last. Allt det skräpet – och grinden är låst. |
| 1:11 | klar | notis:En stor bil tippade en ny last. Allt det | En stor bil tippade en ny last. Allt det skräpet – och grinden är låst. |
| 1:19 | aliSalt | ali | 105 |
| 1:31 | händelse | printStart | sak=kruka |
| 1:33 | toast | fel | Ingen ström – trampa cykeln |
| 1:36 | toast | guld | ✅ |
| 1:36 | händelse | printKlar | sak=kruka n=4 |
| 1:36 | händelse | tagitUrPrint | sak=kruka n=1 |
| 1:43 | struken | ali | Ali här. Såg skylten. Stavningen är rätt. Det är mer än många. |
| 1:45 | väntar | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått generator. Vi tar en låt på det. Den här är till dig, Gunnar. |
| 1:45 | radio | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått generator. Vi tar en låt på det. Den här är till dig, Gunnar. |
| 1:45 | skratt | du | Radio-Kjelle |
| 1:45 | hjälp | kontroll | R: Vrid innan du ställer ner |
| 1:45 | sak | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått generator. Vi tar en låt på det. Den här är till dig, Gunnar. |
| 1:45 | notis |  | 📻 Radio Tippen: Radio Tippen, Kjelle här. Skjulet vid tippen har fått generator. Vi tar en låt på det. Den här är till dig, Gunnar. |
| 1:45 | röst | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått generator. Vi tar en låt på det. Den här är till dig, Gunnar. · REAKTION |
| 1:47 | aliSalt | ali | 105 |
| 1:55 | klar | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått generator. Vi tar en låt på det. Den här är till dig, Gunnar. |
| 1:59 | skratt | du | falsk tuta |
| 2:01 | sopsack | rolf | Sopsäckarna landade på gården |
| 2:01 | paket |  | tanke → ge |
| 2:01 | tanke | du | Hmm, vad kastade gubben ut ur sopbilen? Jag går och kollar. |
| 2:01 | väntar | du | Hmm, vad kastade gubben ut ur sopbilen? Jag går och kollar. |
| 2:01 | väntar |  | (läget ändras) |
| 2:01 | sak | du | Hmm, vad kastade gubben ut ur sopbilen? Jag går och kollar. |
| 2:01 | notis | tanke | 💭 Hmm, vad kastade gubben ut ur sopbilen? Jag går och kollar. |
| 2:01 | röst | du | Hmm, vad kastade gubben ut ur sopbilen? Jag går och kollar. · STORY |
| 2:06 | klar | du | Hmm, vad kastade gubben ut ur sopbilen? Jag går och kollar. |
| 2:08 | sak |  | (läget ändras) |
| 2:08 | klar |  | (läget ändras) |
| 2:26 | händelse | printStart | sak=kruka |
| 2:29 | väntar | mamma | Har du frusit än? |
| 2:29 | toast | guld | ✅ |
| 2:29 | händelse | printKlar | sak=kruka n=5 |
| 2:29 | händelse | tagitUrPrint | sak=kruka n=1 |
| 2:42 | aliSalt | ali | 105 |
| 2:55 | händelse | printStart | sak=kruka |
| 2:56 | toast | fel | Ingen ström – trampa cykeln |
| 2:56 | väntar | notis:Storebrors skrivare: Ingen ström – tramp | Storebrors skrivare: Ingen ström – trampa cykeln |
| 2:56 | sak | notis:Storebrors skrivare: Ingen ström – tramp | Storebrors skrivare: Ingen ström – trampa cykeln |
| 2:56 | notis | fel | Storebrors skrivare: Ingen ström – trampa cykeln |
| 2:59 | klar | notis:Storebrors skrivare: Ingen ström – tramp | Storebrors skrivare: Ingen ström – trampa cykeln |
| 2:59 | toast | guld | ✅ |
| 2:59 | händelse | printKlar | sak=kruka n=6 |
| 2:59 | händelse | tagitUrPrint | sak=kruka n=1 |
| 2:59 | skratt | du | däcket rullar iväg |
| 2:59 | paket |  | tanke |
| 2:59 | tanke | du | Däcket ville inte stanna. Jag förstår det. |
| 2:59 | väntar | du | Däcket ville inte stanna. Jag förstår det. |
| 3:01 | sak | du | Däcket ville inte stanna. Jag förstår det. |
| 3:01 | notis | tanke | 💭 Däcket ville inte stanna. Jag förstår det. |
| 3:01 | röst | du | Däcket ville inte stanna. Jag förstår det. · REAKTION |
| 3:04 | klar | du | Däcket ville inte stanna. Jag förstår det. |
| 3:06 | skratt | du | falsk tuta |
| 3:10 | aliSalt | ali | 105 |
| 3:16 | upplåst | mala | kvarnmotor |
| 3:16 | brott | RESERV | kvarnmotor (mala 12 av 6) |
| 3:16 | händelse | upplast | id=kvarnmotor flask=mala |
| 3:16 | paket |  | sms |
| 3:16 | väntar | ali | Ali här. En motor? Jag har en. Från en gammal tvättmaskin. Den centrifugerar fortfarande om man ber snällt. |
| 3:16 | sak | ali | Ali här. En motor? Jag har en. Från en gammal tvättmaskin. Den centrifugerar fortfarande om man ber snällt. |
| 3:16 | sms | ali | Ali här. En motor? Jag har en. Från en gammal tvättmaskin. Den centrifugerar fortfarande om man ber snällt. |
| 3:16 | sms-bubbla | ali | Ali här. En motor? Jag har en. Från en gammal tvättmaskin. Den centrifugerar fortfarande om man ber snällt. |
| 3:16 | röst | ali | Ali här. En motor? Jag har en. Från en gammal tvättmaskin. Den centrifugerar fortfarande om man ber snällt. · STORY |
| 3:25 | klar | ali | Ali här. En motor? Jag har en. Från en gammal tvättmaskin. Den centrifugerar fortfarande om man ber snällt. |
| 3:47 | brott | DUBBEL UPPMANING | "veva" på 2 ställen: pekrutan, skylten Tratten är full |
| 3:54 | händelse | printStart | sak=kruka |
| 3:57 | toast | guld | ✅ |
| 3:57 | händelse | printKlar | sak=kruka n=7 |
| 3:57 | händelse | tagitUrPrint | sak=kruka n=1 |
| 4:09 | aliSalt | ali | 105 |
| 4:12 | struken | info:guld | 3D-modell köpt – printa kvarnmotor |
| 4:12 | händelse | kopt | sak=kvarnmotor |
| 4:13 | händelse | malKlart | id=kopMotor del=Dag 2 – Tippen bredvid nasta=monteraMotor |
| 4:13 | struken | kedja | motorKopt |
| 4:13 | väntar | du | Motorn ska sitta där veven sitter. Jag printar den först. |
| 4:13 | målruta |  | Printa kvarnmotorn till kvarnen |
| 4:14 | MÅL |  | Printa kvarnmotorn till kvarnen |
| 4:14 | sak | du | Motorn ska sitta där veven sitter. Jag printar den först. |
| 4:14 | pil |  | Printa kvarnmotorn till kvarnen |
| 4:14 | notis | tanke | 💭 Motorn ska sitta där veven sitter. Jag printar den först. |
| 4:14 | röst | du | Motorn ska sitta där veven sitter. Jag printar den först. · MÅL |
| 4:14 | nick |  | nick:22 |
| 4:17 | kvittens-bock |  | ✓ Köp kvarnmotorn hos Ali (50 kr) |
| 4:18 | klar | du | Motorn ska sitta där veven sitter. Jag printar den först. |
| 4:29 | väntar | mamma | Har du frusit än? |
| 4:37 | händelse | printStart | sak=byggsats:kvarnmotor |
| 4:39 | toast | fel | Ingen ström – trampa cykeln |
| 4:42 | händelse | printKlar | sak=byggsats:kvarnmotor n=1 |
| 4:42 | toast | guld | ✅ |
| 4:42 | väntar | info:guld | ⚙️ Kvarnmotorn ska skruvas fast på kvarnen. |
| 4:42 | händelse | tagitUrPrint | sak=byggsats:kvarnmotor n=1 |
| 4:42 | paket |  | sms |
| 4:42 | väntar | ali | Ali här. Ännu en ritning som blev på riktigt: Kvarnmotor. Semesterkassan växer. Livet växer. |
| 4:42 | sak | info:guld | ⚙️ Kvarnmotorn ska skruvas fast på kvarnen. |
| 4:42 | kvitto-visas | info:guld | ⚙️ Kvarnmotorn ska skruvas fast på kvarnen. |
| 4:42 | toast | guld | ⚙️ Kvarnmotorn ska skruvas fast på kvarnen. |
| 4:44 | klar | info:guld | ⚙️ Kvarnmotorn ska skruvas fast på kvarnen. |
| 4:48 | väntar | info:guld | ⚙️ Motorn sitter där veven satt – nu mal kvarnen själv. |
| 4:48 | händelse | monterat | sak=kvarnmotor |
| 4:48 | paket |  | tanke |
| 4:48 | tanke | du | Motorn sitter där veven satt. Mina armar tackar. |
| 4:48 | väntar | du | Motorn sitter där veven satt. Mina armar tackar. |
| 4:48 | monterat | du | byggsats:kvarnmotor |
| 4:48 | händelse | monterat | sak=kvarnmotor |
| 4:48 | sak | info:guld | ⚙️ Motorn sitter där veven satt – nu mal kvarnen själv. |
| 4:48 | kvitto-visas | info:guld | ⚙️ Motorn sitter där veven satt – nu mal kvarnen själv. |
| 4:48 | toast | guld | ⚙️ Motorn sitter där veven satt – nu mal kvarnen själv. |
| 4:48 | händelse | malKlart | id=monteraMotor del=Dag 2 – Tippen bredvid nasta=kopSack |
| 4:48 | struken | du | Motorn sitter där veven satt. Mina armar tackar. |
| 4:48 | väntar | du | Gården är full av skräp. Jag börjar vid skjulet. |
| 4:48 | MÅL |  | Kolla vad som flög ut från sopbilen |
| 4:50 | klar | info:guld | ⚙️ Motorn sitter där veven satt – nu mal kvarnen själv. |
| 4:50 | målruta |  | Kolla vad som flög ut från sopbilen |
| 4:52 | kvittens-bock |  | ✓ Printa kvarnmotorn till kvarnen |
| 4:52 | sak | du | Gården är full av skräp. Jag börjar vid skjulet. |
| 4:52 | pil |  | Kolla vad som flög ut från sopbilen |
| 4:52 | notis | tanke | 💭 Gården är full av skräp. Jag börjar vid skjulet. |
| 4:52 | röst | du | Gården är full av skräp. Jag börjar vid skjulet. · MÅL |
| 4:56 | klar | du | Gården är full av skräp. Jag börjar vid skjulet. |
| 5:01 | väntar | värld:TUUT TUUT! | TUUT TUUT! |
| 5:12 | paket |  | brev → ge → tanke |
| 5:12 | väntar | rolf | Du sliter ju. Ingen gör så nuförtin. Ta dessa så går dä lättare. / grannen – ja kör sopbilen å har hand om tippen bredvid. MVH ROLF​ |
| 5:12 | väntar |  | (läget ändras) |
| 5:12 | tanke | du | Rolf… gubben i sopbilen. Han har tippen bredvid. Han verkar schysst. |
| 5:12 | okänt ord bytt | du | Rolf… gubben i sopbilen. Han har tippen bredvid. Han verkar schysst. |
| 5:12 | väntar | du | Rolf… gubben i sopbilen. Han har tippen bredvid. Han verkar schysst. |
| 5:12 | sak | rolf | Du sliter ju. Ingen gör så nuförtin. Ta dessa så går dä lättare. / grannen – ja kör sopbilen å har hand om tippen bredvid. MVH ROLF​ |
| 5:12 | lapp | Lapp från Rolf | Du sliter ju. Ingen gör så nuförtin. Ta dessa så går dä lättare. / grannen – ja kör sopbilen å har hand om tippen bredvid. MVH ROLF​ |
| 5:12 | röst | rolf | Du sliter ju. Ingen gör så nuförtin. Ta dessa så går dä lättare. / grannen – ja kör sopbilen å har hand om tippen bredvid. MVH ROLF​ · STORY |
| 5:13 | upplåst | skrivare | rullstall |
| 5:13 | brott | UPPLÅST | rullstall (skrivare 228 av 60) |
| 5:13 | händelse | upplast | id=rullstall flask=skrivare |
| 5:13 | paket |  | tanke → sms |
| 5:13 | tanke | du | Kvarnen står och väntar för att hållaren är full. Om den rymde fler rullar kunde den mala hela tiden. |
| 5:13 | väntar | du | Kvarnen står och väntar för att hållaren är full. Om den rymde fler rullar kunde den mala hela tiden. |
| 5:13 | väntar | ali | Ali här. Rullställ. Fyra rullar i stället för en. Har ett på hyllan. |
| 5:21 | hjälp | kontroll | Klick: Klicka för att ta på dig den |
| 5:23 | klar | rolf | Du sliter ju. Ingen gör så nuförtin. Ta dessa så går dä lättare. / grannen – ja kör sopbilen å har hand om tippen bredvid. MVH ROLF​ |
| 5:25 | väntar | info:guld | 🗑️ Sopsäcken är över axeln! Nu bär jag 10 skräp. |
| 5:25 | tog på | du | byggsats:korg |
| 5:25 | händelse | monterat | sak=korg |
| 5:25 | sak | info:guld | 🗑️ Sopsäcken är över axeln! Nu bär jag 10 skräp. |
| 5:25 | kvitto-visas | info:guld | 🗑️ Sopsäcken är över axeln! Nu bär jag 10 skräp. |
| 5:25 | toast | guld | 🗑️ Sopsäcken är över axeln! Nu bär jag 10 skräp. |
| 5:25 | händelse | malKlart | id=kopSack del=Dag 2 – Tippen bredvid nasta=n1-stada-klart-garden |
| 5:25 | händelse | malKlart | id=n1-stada-klart-garden del=Dag 2 – Tippen bredvid nasta=rolf0-brev |
| 5:25 | väntar | du | Gården är STÄDAD, av mig, frivilligt. Mamma skulle aldrig tro det. |
| 5:25 | väntar | du | Vänta på sopbilen. Den lämnar något. |
| 5:25 | MÅL |  | Vänta på sopbilen. Den lämnar något. |
| 5:27 | klar | info:guld | 🗑️ Sopsäcken är över axeln! Nu bär jag 10 skräp. |
| 5:27 | sak | du | Gården är STÄDAD, av mig, frivilligt. Mamma skulle aldrig tro det. |
| 5:27 | kvitto-visas | du | Gården är STÄDAD, av mig, frivilligt. Mamma skulle aldrig tro det. |
| 5:27 | lapp | 📔 Dagbok | Gården är STÄDAD, av mig, frivilligt. Mamma skulle aldrig tro det. |
| 5:27 | dagbokrad | du | Gården är STÄDAD, av mig, frivilligt. Mamma skulle aldrig tro det. |
| 5:27 | notis | dagbok | Gården är STÄDAD, av mig, frivilligt. Mamma skulle aldrig tro det. |
| 5:27 | klar | du | Gården är STÄDAD, av mig, frivilligt. Mamma skulle aldrig tro det. |
| 5:27 | målruta |  | Vänta på sopbilen. Den lämnar något. |
| 5:27 | sak | du | Vänta på sopbilen. Den lämnar något. |
| 5:27 | pil |  | Vänta på sopbilen. Den lämnar något. |
| 5:27 | röst | du | Vänta på sopbilen. Den lämnar något. · MÅL |
| 5:30 | klar | du | Vänta på sopbilen. Den lämnar något. |
| 5:32 | händelse | printStart | sak=kruka |
| 5:32 | struken | värld:TUUT TUUT! | TUUT TUUT! |
| 5:32 | sak |  | (läget ändras) |
| 5:33 | klar |  | (läget ändras) |
| 5:33 | struken | mamma | Har du frusit än? |
| 5:35 | toast | guld | ✅ |
| 5:35 | händelse | printKlar | sak=kruka n=8 |
| 5:35 | händelse | tagitUrPrint | sak=kruka n=1 |
| 5:37 | sak | du | Rolf… gubben i sopbilen. Han har tippen bredvid. Han verkar schysst. |
| 5:37 | notis | tanke | 💭 Rolf… gubben i sopbilen. Han har tippen bredvid. Han verkar schysst. |
| 5:37 | röst | du | Rolf… gubben i sopbilen. Han har tippen bredvid. Han verkar schysst. · STORY |
| 5:42 | klar | du | Rolf… gubben i sopbilen. Han har tippen bredvid. Han verkar schysst. |
| 5:44 | struken | ali | Ali här. Ännu en ritning som blev på riktigt: Kvarnmotor. Semesterkassan växer. Livet växer. |
| 5:44 | sak | du | Kvarnen står och väntar för att hållaren är full. Om den rymde fler rullar kunde den mala hela tiden. |
| 5:44 | notis | tanke | 💭 Kvarnen står och väntar för att hållaren är full. Om den rymde fler rullar kunde den mala hela tiden. |
| 5:44 | röst | du | Kvarnen står och väntar för att hållaren är full. Om den rymde fler rullar kunde den mala hela tiden. · STORY |
| 5:46 | aliSalt | ali | 105 |
| 5:53 | klar | du | Kvarnen står och väntar för att hållaren är full. Om den rymde fler rullar kunde den mala hela tiden. |
| 6:14 | händelse | printStart | sak=kruka |
| 6:16 | toast | fel | Ingen ström – trampa cykeln |
| 6:18 | toast | guld | ✅ |
| 6:18 | händelse | printKlar | sak=kruka n=9 |
| 6:18 | händelse | tagitUrPrint | sak=kruka n=1 |
| 6:19 | upplåst | skrivare | trim_skrivare |
| 6:19 | brott | UPPLÅST | trim_skrivare (skrivare 60 av 60) |
| 6:19 | händelse | upplast | id=trim_skrivare flask=skrivare |
| 6:19 | paket |  | sms |
| 6:19 | väntar | ali | Ali här. Skrivartrim. Jag skruvade på min egen skrivare i natt. Den går fortare nu. Nästan för fort. |
| 6:26 | väntar | ali | Gå inte förbi för fort. Jag hinner inte vinka. |
| 6:28 | sak | ali | Ali här. Rullställ. Fyra rullar i stället för en. Har ett på hyllan. |
| 6:28 | sms | ali | Ali här. Rullställ. Fyra rullar i stället för en. Har ett på hyllan. |
| 6:28 | sms-bubbla | ali | Ali här. Rullställ. Fyra rullar i stället för en. Har ett på hyllan. |
| 6:28 | röst | ali | Ali här. Rullställ. Fyra rullar i stället för en. Har ett på hyllan. · STORY |
| 6:30 | aliSalt | ali | 105 |
| 6:34 | klar | ali | Ali här. Rullställ. Fyra rullar i stället för en. Har ett på hyllan. |
| 6:34 | skratt | du | falsk tuta |
| 6:43 | väntar | värld:TUUT TUUT! | TUUT TUUT! |
| 6:43 | paket |  | tanke → ge |
| 6:43 | tanke | du | Flaggan är uppe. Rolf har lämnat något. |
| 6:43 | väntar | du | Flaggan är uppe. Rolf har lämnat något. |
| 6:43 | väntar |  | (läget ändras) |
| 6:47 | händelse | printStart | sak=kruka |
| 6:49 | struken | ali | Gå inte förbi för fort. Jag hinner inte vinka. |
| 6:50 | toast | guld | ✅ |
| 6:50 | händelse | printKlar | sak=kruka n=10 |
| 6:50 | händelse | tagitUrPrint | sak=kruka n=1 |
| 6:51 | paket |  | tanke |
| 6:51 | tanke | du | Jaha. En kalsong. Använd. |
| 6:51 | väntar | du | Jaha. En kalsong. Använd. |
| 6:51 | skratt | du | kvarnen spottar |
| 6:51 | sak | du | Jaha. En kalsong. Använd. |
| 6:51 | notis | tanke | 💭 Jaha. En kalsong. Använd. |
| 6:51 | röst | du | Jaha. En kalsong. Använd. · REAKTION |
| 6:54 | klar | du | Jaha. En kalsong. Använd. |
| 6:56 | skratt | du | falsk tuta |
| 7:02 | aliSalt | ali | 105 |
| 7:05 | struken | värld:TUUT TUUT! | TUUT TUUT! |
| 7:16 | väntar | rolf | Såg att du printar grejer. Kan du göra en sån hä? Kall öl ä viktigt. /Rolf​ |
| 7:16 | paket |  | ge |
| 7:16 | väntar |  | (läget ändras) |
| 7:16 | sak | rolf | Såg att du printar grejer. Kan du göra en sån hä? Kall öl ä viktigt. /Rolf​ |
| 7:16 | lapp | Brev från Rolf | Såg att du printar grejer. Kan du göra en sån hä? Kall öl ä viktigt. /Rolf​ |
| 7:16 | röst | rolf | Såg att du printar grejer. Kan du göra en sån hä? Kall öl ä viktigt. /Rolf​ · STORY |
| 7:16 | händelse | malKlart | id=rolf0-brev del=Dag 2 – Tippen bredvid nasta=rolf0-printa |
| 7:16 | väntar | du | Printa ölhållare med kylklamp. |
| 7:16 | MÅL |  | Printa ölhållare med kylklamp |
| 7:19 | målruta |  | Printa ölhållare med kylklamp |
| 7:21 | händelse | printStart | sak=olhallare |
| 7:21 | händelse | malKlart | id=rolf0-printa del=Dag 2 – Tippen bredvid nasta=rolf0-ge |
| 7:21 | väntar | du | Ge Rolf ölhållare med kylklamp. |
| 7:21 | MÅL |  | Ge Rolf ölhållare med kylklamp |
| 7:22 | toast | fel | Ingen ström – trampa cykeln |
| 7:23 | klar | rolf | Såg att du printar grejer. Kan du göra en sån hä? Kall öl ä viktigt. /Rolf​ |
| 7:23 | händelse | brevLast | id=rolf:0 |
| 7:24 | målruta |  | Ge Rolf ölhållare med kylklamp |
| 7:25 | struken | du | Printa ölhållare med kylklamp. |
| 7:25 | sak | du | Ge Rolf ölhållare med kylklamp. |
| 7:25 | pil |  | Ge Rolf ölhållare med kylklamp |
| 7:25 | röst | du | Ge Rolf ölhållare med kylklamp. · MÅL |
| 7:25 | kvittens-bock |  | ✓ Printa ölhållare med kylklamp |
| 7:26 | toast | guld | ✅ |
| 7:26 | händelse | printKlar | sak=olhallare n=1 |
| 7:26 | händelse | tagitUrPrint | sak=olhallare n=1 |
| 7:27 | klar | du | Ge Rolf ölhållare med kylklamp. |
| 7:29 | sak |  | (läget ändras) |
| 7:29 | klar |  | (läget ändras) |
| 7:35 | sak | ali | Ali här. Skrivartrim. Jag skruvade på min egen skrivare i natt. Den går fortare nu. Nästan för fort. |
| 7:35 | sms | ali | Ali här. Skrivartrim. Jag skruvade på min egen skrivare i natt. Den går fortare nu. Nästan för fort. |
| 7:35 | sms-bubbla | ali | Ali här. Skrivartrim. Jag skruvade på min egen skrivare i natt. Den går fortare nu. Nästan för fort. |
| 7:35 | röst | ali | Ali här. Skrivartrim. Jag skruvade på min egen skrivare i natt. Den går fortare nu. Nästan för fort. · STORY |
| 7:36 | väntar | bud | (tips) |
| 7:37 | hjälp | kontroll | E: Ryggsäcken och kistan |
| 7:44 | klar | ali | Ali här. Skrivartrim. Jag skruvade på min egen skrivare i natt. Den går fortare nu. Nästan för fort. |
| 7:44 | händelse | lagtIPostlada | sak=olhallare rolf=0 jobb=false |
| 7:44 | struken | kedja | rolf0 |
| 7:44 | paket |  | tanke |
| 7:44 | tanke | du | Flaggan uppe. Nu får Rolf hämta den. |
| 7:44 | väntar | du | Flaggan uppe. Nu får Rolf hämta den. |
| 7:44 | händelse | malKlart | id=rolf0-ge del=Dag 2 – Tippen bredvid nasta=vindsnurra |
| 7:44 | struken | du | Flaggan uppe. Nu får Rolf hämta den. |
| 7:44 | väntar | du | En vindsnurra på skjulets tak. Då blir det ström när det blåser. |
| 7:44 | MÅL |  | Trampa, printa och sälj |
| 7:44 | upplåst | trampa | vindsnurra |
| 7:44 | brott | UPPLÅST | vindsnurra (trampa 26 av 6) |
| 7:44 | händelse | upplast | id=vindsnurra flask=trampa |
| 7:44 | paket |  | tanke → sms |
| 7:44 | tanke | du | Mina ben är slut. Det blåser hela tiden här ute. Tänk om vinden kunde trampa åt mig. |
| 7:44 | väntar | du | Mina ben är slut. Det blåser hela tiden här ute. Tänk om vinden kunde trampa åt mig. |
| 7:44 | väntar | ali | Ali här. Vindsnurra till cykeln. Vinden trampar åt dig. Den är lat, men den jobbar gratis. |
| 7:46 | sak | bud | (tips) |
| 7:46 | struken | du | Klart! Nu lägger jag den i Rolfs brevlåda vid grinden. |
| 7:46 | målruta |  | Printa vindsnurran till taket |
| 7:47 | klar | bud | (tips) |
| 7:48 | kvittens-bock |  | ✓ Ge Rolf ölhållare med kylklamp |
| 7:49 | sak | du | En vindsnurra på skjulets tak. Då blir det ström när det blåser. |
| 7:49 | pil |  | Printa vindsnurran till taket |
| 7:49 | notis | tanke | 💭 En vindsnurra på skjulets tak. Då blir det ström när det blåser. |
| 7:49 | röst | du | En vindsnurra på skjulets tak. Då blir det ström när det blåser. · MÅL |
| 7:49 | nick |  | nick:28 |
| 7:54 | klar | du | En vindsnurra på skjulets tak. Då blir det ström när det blåser. |
| 7:56 | sak | du | Mina ben är slut. Det blåser hela tiden här ute. Tänk om vinden kunde trampa åt mig. |
| 7:56 | notis | tanke | 💭 Mina ben är slut. Det blåser hela tiden här ute. Tänk om vinden kunde trampa åt mig. |
| 7:56 | röst | du | Mina ben är slut. Det blåser hela tiden här ute. Tänk om vinden kunde trampa åt mig. · STORY |
| 8:03 | klar | du | Mina ben är slut. Det blåser hela tiden här ute. Tänk om vinden kunde trampa åt mig. |
| 8:11 | sak | du | Flaggan är uppe. Rolf har lämnat något. |
| 8:11 | notis | tanke | 💭 Flaggan är uppe. Rolf har lämnat något. |
| 8:11 | röst | du | Flaggan är uppe. Rolf har lämnat något. · STORY |
| 8:15 | klar | du | Flaggan är uppe. Rolf har lämnat något. |
| 8:15 | röst | ali | Rolf gav mig en kanna. Som min farmors. Jag ritade en sak åt honom. Säg inget, han gråter lätt. · STORY |
| 8:15 | butiksbubbla | ali | Rolf gav mig en kanna. Som min farmors. Jag ritade en sak åt honom. Säg inget, han gråter lätt. |
| 8:17 | struken | info:guld | 3D-modell köpt – printa vindsnurra till skjultaket |
| 8:17 | händelse | kopt | sak=vindsnurra |
| 8:19 | struken | ali | Ali här. Vindsnurra till cykeln. Vinden trampar åt dig. Den är lat, men den jobbar gratis. |
| 8:29 | händelse | printStart | sak=byggsats:vindsnurra |
| 8:29 | sak |  | (läget ändras) |
| 8:29 | brev | rolf | rolf:0 |
| 8:29 | klar |  | (läget ändras) |
| 8:32 | toast | fel | Ingen ström – trampa cykeln |
| 8:34 | händelse | printKlar | sak=byggsats:vindsnurra n=1 |
| 8:34 | toast | guld | ✅ |
| 8:34 | väntar | info:guld | 🌬️ Vindsnurran ska upp på skjulets tak. |
| 8:34 | händelse | tagitUrPrint | sak=byggsats:vindsnurra n=1 |
| 8:34 | sak | info:guld | 🌬️ Vindsnurran ska upp på skjulets tak. |
| 8:34 | kvitto-visas | info:guld | 🌬️ Vindsnurran ska upp på skjulets tak. |
| 8:34 | toast | guld | 🌬️ Vindsnurran ska upp på skjulets tak. |
| 8:36 | klar | info:guld | 🌬️ Vindsnurran ska upp på skjulets tak. |
| 8:43 | hjälp | kontroll | E: Ryggsäcken och kistan |
| 8:46 | händelse | placerat | sak=vindsnurra |
| 8:46 | kvittens | du | Den snurrar! Långsamt. Men den snurrar. |
| 8:46 | varför-köad | du | Om det regnar i natt drunknar jag. Ett tak. |
| 8:46 | väntar | du | Den snurrar! Långsamt. Men den snurrar. |
| 8:46 | väntar | info:guld | 🌬️ Vindsnurran sitter på taket – den trampar cykeln åt mig när det blåser |
| 8:46 | monterat | du | byggsats:vindsnurra |
| 8:46 | händelse | monterat | sak=vindsnurra |
| 8:46 | sak | du | Den snurrar! Långsamt. Men den snurrar. |
| 8:46 | notis | tanke | 💭 Den snurrar! Långsamt. Men den snurrar. |
| 8:46 | röst | du | Den snurrar! Långsamt. Men den snurrar. · STORY |
| 8:46 | händelse | malKlart | id=vindsnurra del=Dag 2 – Tippen bredvid nasta=n1-bygg-dorr-skjulet |
| 8:46 | väntar | du | Det drar från dörrhålet. En dörr kan jag printa. |
| 8:46 | MÅL |  | Bygg en dörr till skjulet |
| 8:46 | paket |  | tanke |
| 8:46 | tanke | du | Jaha, Rolf har hämtat en ölhållare med kylklamp. |
| 8:46 | väntar | du | Jaha, Rolf har hämtat en ölhållare med kylklamp. |
| 8:49 | målruta |  | Bygg en dörr till skjulet |
| 8:49 | klar | du | Den snurrar! Långsamt. Men den snurrar. |
| 8:52 | sak | du | Det drar från dörrhålet. En dörr kan jag printa. |
| 8:52 | pil |  | Bygg en dörr till skjulet |
| 8:52 | notis | tanke | 💭 Det drar från dörrhålet. En dörr kan jag printa. |
| 8:52 | röst | du | Det drar från dörrhålet. En dörr kan jag printa. · MÅL |
| 8:52 | nick |  | nick:29 |
| 8:56 | klar | du | Det drar från dörrhålet. En dörr kan jag printa. |
| 8:56 | struken | info:guld | 🌬️ Vindsnurran sitter på taket – den trampar cykeln åt mig när det blåser |
| 8:56 | sak | du | Jaha, Rolf har hämtat en ölhållare med kylklamp. |
| 8:56 | notis | tanke | 💭 Jaha, Rolf har hämtat en ölhållare med kylklamp. |
| 8:56 | röst | du | Jaha, Rolf har hämtat en ölhållare med kylklamp. · REAKTION |
| 9:00 | klar | du | Jaha, Rolf har hämtat en ölhållare med kylklamp. |
| 9:01 | skratt | du | däcket rullar iväg |
| 9:04 | struken | info:guld | 3D-modell köpt – printa dörr |
| 9:04 | händelse | kopt | sak=dorr |
| 9:17 | händelse | printStart | sak=byggsats:dorr |
| 9:20 | toast | bra | Del 1 av 2 klar |
| 9:20 | väntar | notis:Storebrors skrivare: Del 1 av 2 klar | Storebrors skrivare: Del 1 av 2 klar |
| 9:24 | händelse | printKlar | sak=byggsats:dorr n=1 |
| 9:24 | toast | guld | ✅ |
| 9:40 | struken | notis:Storebrors skrivare: Del 1 av 2 klar | Storebrors skrivare: Del 1 av 2 klar |
| 9:59 | händelse | tagitUrPrint | sak=byggsats:dorr n=1 |
| 9:59 | paket |  | sms |
| 9:59 | väntar | ali | Ali här. Jag har inte sovit. Inte på grund av AI:n. På grund av dig. Du bygger saker av sopor. Jag har en hel butik och bygger ingenting. Det ska ändras. Kanske. Troligen. |
| 10:07 | väntar | info:guld | Dörr på plats! Trivsel +8 |
| 10:07 | sak | info:guld | Dörr på plats! Trivsel +8 |
| 10:07 | kvitto-visas | info:guld | Dörr på plats! Trivsel +8 |
| 10:07 | toast | guld | Dörr på plats! Trivsel +8 |
| 10:07 | händelse | malKlart | id=n1-bygg-dorr-skjulet del=Dag 2 – Tippen bredvid nasta=sov2 |
| 10:07 | paket |  | lapp |
| 10:07 | väntar | du | Nu vet Ali att jag bor HÄR. Taket läcker. I morgon. |
| 10:07 | paket |  | sms |
| 10:07 | väntar | bror | Mamma ringde mig fyra gånger förresten. Snyggt jobbat 😂 |
| 10:07 | skratt | bror | Mamma ringde mig fyra gånger förresten. |
| 10:07 | väntar | du | Klart för idag – sov när du vill. |
| 10:07 | MÅL |  | Klart för idag – sov när du vill |
| 10:09 | klar | info:guld | Dörr på plats! Trivsel +8 |
| 10:10 | målruta |  | Klart för idag – sov när du vill |
| 10:11 | kvittens-bock |  | ✓ Bygg en dörr till skjulet |
| 10:11 | sak | du | Klart för idag – sov när du vill. |
| 10:11 | pil |  | Klart för idag – sov när du vill |
| 10:11 | röst | du | Klart för idag – sov när du vill. · MÅL |
| 10:14 | klar | du | Klart för idag – sov när du vill. |
| 10:14 | väntar | notis:🌇 Klockan är 21. Ali slår igen luckan.  | 🌇 Klockan är 21. Ali slår igen luckan. Dagens jobb är klart – gå in i skjulet och sov i sängen. |
| 10:16 | sak | du | Nu vet Ali att jag bor HÄR. Taket läcker. I morgon. |
| 10:16 | kvallsrad | du | Nu vet Ali att jag bor HÄR. Taket läcker. I morgon. |
| 10:16 | klar | du | Nu vet Ali att jag bor HÄR. Taket läcker. I morgon. |
| 10:31 | nattkort | du | 🌙 Dag 2 är slut. God natt. zzz… Nu vet Ali att jag bor HÄR. Taket läcker. I morgon. DAGENS PRINTAR Blomkruka × 9 Ölhållare med kylklamp × 1 Totalt 10 printar � |

<details><summary>Botens handlingar dag 2</summary>

- 0:00 — dag 2 börjar — (60 kr)
- 0:08 popup: "FORTSÄTT" (60 kr)
- 0:18 nybörjaren ser ingen pil – tittar runt (60 kr)
- 0:22 tjänar pengar till väntar på flaskhalsen för kvarnmotor: 60/100 kr → printar blomkruka (105 kr) (60 kr)
- 0:29 gå till skrivaren (19 m) (60 kr)
- 0:31 printar Blomkruka (60 kr)
- 0:33 gå till cykeln (2 m) (60 kr)
- 0:36 tar ut 1 st ur skrivaren (60 kr)
- 0:45 gå till Ali (26 m) (60 kr)
- 0:45 öppnar Alis butik – sälja (60 kr)
- 0:47 säljer hos Ali: +105 kr (165 kr)
- 0:54 tjänar pengar till väntar på flaskhalsen för kvarnmotor: 165/205 kr → printar blomkruka (105 kr) (165 kr)
- 1:03 gå till skrivaren (25 m) (165 kr)
- 1:05 printar Blomkruka (165 kr)
- 1:08 tar ut 1 st ur skrivaren (165 kr)
- 1:17 gå till Ali (25 m) (165 kr)
- 1:17 öppnar Alis butik – sälja (165 kr)
- 1:19 säljer hos Ali: +105 kr (270 kr)
- 1:21 tjänar pengar till väntar på flaskhalsen för kvarnmotor: 270/310 kr → printar blomkruka (105 kr) (270 kr)
- 1:30 gå till skrivaren (25 m) (270 kr)
- 1:31 printar Blomkruka (270 kr)
- 1:34 gå till cykeln (1 m) (270 kr)
- 1:36 tar ut 1 st ur skrivaren (270 kr)
- 1:46 gå till Ali (25 m) (270 kr)
- 1:46 öppnar Alis butik – sälja (270 kr)
- 1:47 säljer hos Ali: +105 kr (375 kr)
- 1:57 tjänar pengar till väntar på flaskhalsen för kvarnmotor: 375/415 kr → printar blomkruka (105 kr) (375 kr)
- 2:10 plockar 6 skräp på gården (bär max 6) (375 kr)
- 2:19 gå till kvarnen (28 m) (375 kr)
- 2:25 gå till skrivaren (1 m) (375 kr)
- 2:26 printar Blomkruka (375 kr)
- 2:30 tar ut 1 st ur skrivaren (375 kr)
- 2:40 gå till Ali (28 m) (375 kr)
- 2:40 öppnar Alis butik – sälja (375 kr)
- 2:42 säljer hos Ali: +105 kr (480 kr)
- 2:44 tjänar pengar till väntar på flaskhalsen för kvarnmotor: 480/520 kr → printar blomkruka (105 kr) (480 kr)
- 2:53 gå till skrivaren (25 m) (480 kr)
- 2:55 printar Blomkruka (480 kr)
- 2:57 gå till cykeln (1 m) (480 kr)
- 3:00 tar ut 1 st ur skrivaren (480 kr)
- 3:09 gå till Ali (25 m) (480 kr)
- 3:09 öppnar Alis butik – sälja (480 kr)
- 3:11 säljer hos Ali: +105 kr (585 kr)
- 3:12 tjänar pengar till väntar på flaskhalsen för kvarnmotor: 585/625 kr → printar blomkruka (105 kr) (585 kr)
- 3:32 plockar 6 skräp på gården (bär max 6) (585 kr)
- 3:45 gå till kvarnen (37 m) (585 kr)
- 3:52 gå till skrivaren (3 m) (585 kr)
- 3:54 printar Blomkruka (585 kr)
- 3:57 tar ut 1 st ur skrivaren (585 kr)
- 4:07 gå till Ali (28 m) (585 kr)
- 4:07 öppnar Alis butik – sälja (585 kr)
- 4:09 säljer hos Ali: +105 kr (690 kr)
- 4:11 öppnar Alis butik – köpa kvarnmotor (690 kr)
- 4:13 köper kvarnmotor för 50 kr (640 kr)
- 4:36 gå till skrivaren (25 m) (640 kr)
- 4:37 printar Kvarnmotor (640 kr)
- 4:40 gå till cykeln (1 m) (640 kr)
- 4:43 tar ut 1 st ur skrivaren (640 kr)
- 4:48 gå till skruva fast kvarnmotorn (3 m) (640 kr)
- 5:02 nybörjaren ser ingen pil – tittar runt (640 kr)
- 5:12 gå till Rolfs sopsäck (16 m) (640 kr)
- 5:25 tar på korg (640 kr)
- 5:25 tjänar pengar till väntar på sopbilen (BO): 640/700 kr → printar blomkruka (105 kr) (640 kr)
- 5:30 gå till skrivaren (12 m) (640 kr)
- 5:32 printar Blomkruka (640 kr)
- 5:36 tar ut 1 st ur skrivaren (640 kr)
- 5:45 gå till Ali (26 m) (640 kr)
- 5:45 öppnar Alis butik – sälja (640 kr)
- 5:47 säljer hos Ali: +105 kr (745 kr)
- 5:59 nybörjaren ser ingen pil – tittar runt (745 kr)
- 6:04 tjänar pengar till väntar på sopbilen (BO): 745/805 kr → printar blomkruka (105 kr) (745 kr)
- 6:13 gå till skrivaren (25 m) (745 kr)
- 6:14 printar Blomkruka (745 kr)
- 6:16 gå till cykeln (1 m) (745 kr)
- 6:19 tar ut 1 st ur skrivaren (745 kr)
- 6:28 gå till Ali (25 m) (745 kr)
- 6:28 öppnar Alis butik – sälja (745 kr)
- 6:30 säljer hos Ali: +105 kr (850 kr)
- 6:36 tjänar pengar till väntar på sopbilen (BO): 850/910 kr → printar blomkruka (105 kr) (850 kr)
- 6:45 gå till skrivaren (25 m) (850 kr)
- 6:47 printar Blomkruka (850 kr)
- 6:51 tar ut 1 st ur skrivaren (850 kr)
- 7:00 gå till Ali (25 m) (850 kr)
- 7:00 öppnar Alis butik – sälja (850 kr)
- 7:02 säljer hos Ali: +105 kr (955 kr)
- 7:16 gå till Rolfs postlåda (31 m) (955 kr)
- 7:20 gå till skrivaren (7 m) (955 kr)
- 7:21 printar Ölhållare med kylklamp (955 kr)
- 7:23 gå till cykeln (1 m) (955 kr)
- 7:27 tar ut 1 st ur skrivaren (955 kr)
- 7:36 nybörjaren ser ingen pil – tittar runt (955 kr)
- 7:41 valj olhallare: true, vald olhallare, post {"l":null,"tr":null,"tm":[]}, nummer false (955 kr)
- 7:44 gå till Rolfs postlåda (7 m) (955 kr)
- 8:15 gå till Ali (31 m) (955 kr)
- 8:15 öppnar Alis butik – köpa vindsnurra till skjultaket (955 kr)
- 8:17 köper vindsnurra för 133 kr (822 kr)
- 8:28 gå till skrivaren (25 m) (822 kr)
- 8:29 printar Vindsnurra till skjultaket (822 kr)
- 8:33 gå till cykeln (1 m) (822 kr)
- 8:35 tar ut 1 st ur skrivaren (822 kr)
- 8:46 gå till sätt vindsnurran på taket (20 m) (822 kr)
- 9:03 gå till Ali (20 m) (822 kr)
- 9:03 öppnar Alis butik – köpa dörr (822 kr)
- 9:05 köper dorr för 120 kr (702 kr)
- 9:15 gå till skrivaren (25 m) (702 kr)
- 9:17 printar Dörr (2 delar) (702 kr)
- 9:44 plockar 8 skräp på gården (bär max 10) (702 kr)
- 9:58 gå till kvarnen (38 m) (702 kr)
- 9:59 gå till skrivaren (1 m) (702 kr)
- 9:59 tar ut 1 st ur skrivaren (702 kr)
- 10:07 gå till skjulet (21 m) (702 kr)
- 10:23 nybörjaren ser ingen pil – tittar runt (702 kr)
- 10:28 gå till sängen (1 m) (702 kr)

</details>

## Dag 3

| Tid | Källa | Vem | Text |
|---|---|---|---|
| 10:31 | vara | ali | ingen |
| 10:31 | händelse | malKlart | id=sov2 del=Dag 2 – Tippen bredvid nasta=rolf1-brev |
| 10:31 | vara | ali | kruka |
| 10:31 | MÅL |  | Vänta på sopbilen. Den lämnar något. |

<details><summary>Botens handlingar dag 3</summary>

- 0:00 — dag 3 börjar — (702 kr)

</details>
