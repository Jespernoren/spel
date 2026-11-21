# Nybörjarboten – körning 1

*A-081: samma händer som AX, men boten vet bara det som syns (målrutan, pilen, det som sägs). Går 3 m/s, läser 60 ms per tecken, följer pilen, tittar runt när målet är otydligt och går fel ibland.*

| Dag | Minuter | FÖRVIRRAD | FAST | TRÄNGSEL | HANN INTE LÄSA | DOLT | NY SAK UTAN FÖRKLARING | OKÄNT ORD |
|---|---|---|---|---|---|---|---|---|
| 1 | 13.9 | 1 | 0 | 1 | 0 | 0 | 0 | 0 |
| 2 | 11.2 | 0 | 0 | 0 | 2 | 0 | 0 | 0 |
| 3 | 12.8 | 0 | 0 | 0 | 1 | 0 | 0 | 0 |
| 4 | 15.8 | 1 | 0 | 0 | 1 | 0 | 0 | 0 |
| 5 | 0.0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |

## Flaggor (7)

- **TRÄNGSEL** dag 1 4:31: notis ”Kvarnen funkar. Soptippen är en gruva.” och tanke-text ”💭 Min egen tråd. Nu printar jag en nyck” inom 0.7 s
- **FÖRVIRRAD** dag 1 12:42: pilen pekar 34 m från där målet görs (okänt)
- **HANN INTE LÄSA** dag 2 0:02: dagbok ”Dag 2. 20 dagar till jul.
Utan dörr blåser natten ” stod 0.0 s, behöver 4.7 s
- **HANN INTE LÄSA** dag 2 1:06: info ”🚛 En stor bil tippade en ny last på soptippen!” stod 3.8 s, behöver 4.0 s
- **HANN INTE LÄSA** dag 3 0:02: dagbok ”Dag 3. 19 dagar till jul.
Utan tak regnar det in i” stod 0.0 s, behöver 4.6 s
- **HANN INTE LÄSA** dag 4 0:02: dagbok ”Dag 4. 18 dagar till jul.
Drar det i skjulet blir ” stod 0.0 s, behöver 4.8 s
- **FÖRVIRRAD** dag 4 12:23: 73 s utan framsteg på "Bygg en vindsnurra till"

## Friktionskurvan (sekunder per mål: nybörjaren mot AX)

| Dag | Mål | Nybörjaren | AX | × |
|---|---|---|---|---|
| 1 | Lasta av skrivaren | 0 | – | – |
| 1 | Lasta av skrivaren | 35 | – | – |
| 1 | Ställ upp skrivaren | 13 | – | – |
| 1 | Skrivaren behöver ström | 26 | – | – |
| 1 | Ställ cykel och generator | 35 | – | – |
| 1 | Välj vad skrivaren ska printa | 13 | – | – |
| 1 | Trampa cykeln | 5 | – | – |
| 1 | En nyckelring till | 16 | – | – |
| 1 | Sälj nyckelringarna | 38 | – | – |
| 1 | Köp kvarnen | 21 | – | – |
| 1 | Ställ kvarnen | 25 | – | – |
| 1 | Gör egen tråd | 30 | – | – |
| 1 | Printa med egen tråd | 22 | – | – |
| 1 | Sälj hos Ali | 35 | – | – |
| 1 | Gå till Ali | 33 | – | – |
| 1 | Plocka skräp och mal det | 291 | – | – |
| 1 | Printa skräpgripen | 28 | – | – |
| 1 | Printa och sälj nyckelringar | 41 | – | – |
| 1 | Sälj blomkrukan | 26 | – | – |
| 1 | Köp sängen | 17 | – | – |
| 1 | Printa sängen | 64 | – | – |
| 2 | Mal skräp, printa och sälj | -664 | – | – |
| 2 | Printa kvarnmotorn till kvarnen | 33 | – | – |
| 2 | Kolla vad som flög ut från sopbilen | 37 | – | – |
| 2 | Vänta på sopbilen. Den lämnar något. | 74 | – | – |
| 2 | Printa ölhållare med kylklamp | 5 | – | – |
| 2 | Ge Rolf ölhållare med kylklamp | 22 | – | – |
| 2 | Trampa, printa och sälj | 209 | – | – |
| 2 | Bygg en dörr till skjulet | 98 | – | – |
| 3 | Vänta på sopbilen. Den lämnar något. | -413 | – | – |
| 3 | Hämta 5 skräp på soptippen | 5 | – | – |
| 3 | Printa flasköppnare med magnet | 19 | – | – |
| 3 | Ge Rolf flasköppnare med magnet | 19 | – | – |
| 3 | Printa och sälj | 89 | – | – |
| 3 | Plocka skräp och mal det | 59 | – | – |
| 3 | Bygg ett arbetsbord | 67 | – | – |
| 3 | Printa och sälj | 103 | – | – |
| 3 | Lägg plåttak på skjulet | 64 | – | – |
| 4 | Vänta på sopbilen. Den lämnar något. | -550 | – | – |
| 4 | Printa grillspade | 6 | – | – |
| 4 | Ge Rolf grillspade | 23 | – | – |
| 4 | Töm en full kärra i kvarnen | 28 | – | – |
| 4 | Plocka skräp och mal det | 257 | – | – |
| 4 | Printa en pall | 56 | – | – |
| 4 | Printa och sälj | 203 | – | – |
| 4 | Isolera två väggar · 0/2 | 138 | – | – |

---

# Simulering kapitel 1 – körning 1

*Gjord 2026-11-21 15:38 med `verktyg/sim-kapitel1.mjs` + `verktyg/sim-bot.js` (punkt AX). Boten går 4,5 m/s, läser 15 tecken/s, trampar, vevar, plockar, printar, köper och säljer via spelets egna funktioner. Tiderna är speltid.*

## Sammanfattning

| Dag | Minuter | Väntan | Prints (totalt) | Kr vid sömn | Bär | Trivsel |
|---|---|---|---|---|---|---|
| 1 | 13.9 | 1 % | 22 | 215 | 6 | 16 |
| 2 | 11.2 | 1 % | 32 | 857 | 10 | 36 |
| 3 | 12.8 | 1 % | 38 | 422 | 16 | 78 |
| 4 | 15.8 | 1 % | 53 | 1519 | 16 | 96 |
| 5 | 0.0 | 0 % | 53 | 1519 | 16 | 96 |

## Flaskhalskartan (EE)

| Dag | bara | mala | trampa | strom | skrivare | inkomst | Upplåst |
|---|---|---|---|---|---|---|---|
| 1 | 5 | 7 | 22 | 7 | 136 | 20 | grip (bara, 8:57, reserv), kruka (inkomst, 11:06) |
| 2 | 2 | 7 | 8 | 33 | 376 | 0 | kvarnmotor (mala, 2:16), rullstall (skrivare, 4:24), trim_skrivare (skrivare, 5:30), vindsnurra (trampa, 8:11) |
| 3 | 1 | 55 | 30 | 46 | 558 | 0 | cykelbatteri (strom, 5:36), ryggkorg (bara, 6:30), skrivare2 (skrivare, 8:36) |
| 4 | 2 | 42 | 21 | 64 | 610 | 0 | trim_skrivare2 (skrivare, 2:56), matarband (bara, 7:49, reserv), vindsnurra2 (strom, 10:08) |
| 5 | 0 | 0 | 0 | 0 | 0 | 0 |  |

TIDIG: 0 · FAST: 0 · upplåst av reserven (målet väntade 3 min): 2

**SKRATT:** 46 roliga ögonblick på 54 min (8.6 per 10 min, mål minst 5)

**Köp:**

- dag 1 3:21 – gammalkvarn (30 kr)
- dag 1 10:37 – grip (50 kr)
- dag 1 11:18 – kruka (40 kr)
- dag 1 12:29 – sang (60 kr)
- dag 2 2:48 – kvarnmotor (50 kr)
- dag 2 8:40 – vindsnurra (133 kr)
- dag 2 9:28 – dorr (120 kr)
- dag 3 6:19 – cykelbatteri (30 kr)
- dag 3 7:01 – ryggkorg (120 kr)
- dag 3 7:42 – bord (120 kr)
- dag 3 9:00 – skrivare2 (500 kr)
- dag 3 10:43 – tak (250 kr)
- dag 4 8:18 – matarband (120 kr)
- dag 4 9:14 – pall (80 kr)
- dag 4 12:46 – vindsnurra (133 kr)
- dag 4 14:20 – vaggar (130 kr)

## Storykedjan (kvittens → varför → nytt mål)

| Dag | Tid | Id | Kvittens | Varför | Nytt mål | Tid till målet |
|---|---|---|---|---|---|---|
| 1 | 0:35 | lastat | Tung. Den har storebror aldrig burit så långt. |  | Skrivaren ställer jag där borta, mot skräpberget. Min första | 2.5 s |
| 1 | 2:01 | printStart | Den piper. Den GÖR något. |  | En nyckelring till, så länge storebrors rulle räcker. | 9.2 s |
| 1 | 2:06 | printKlar | Klar! Ta ut den innan den ändrar sig. |  | En nyckelring till, så länge storebrors rulle räcker. | 3.1 s |
| 1 | 11:47 | krukaD1 | En kruka. Mamma skulle bli så stolt. Hon får inte veta. |  | Ali gillar krukor. Han sa det själv. | 2.0 s |
| 2 | 9:09 | vindsnurra | Den snurrar! Långsamt. Men den snurrar. |  | Det drar från dörrhålet. En dörr kan jag printa. | 3.0 s |
| 4 | 8:52 | sophallare | Nu kan jag tömma hela kärran på en gång. |  | Jag behöver något att sitta på. En pall. Lagom ambitiöst. | 2.9 s |

## Hur länge nya mål väntade (från att förra målet blev klart till att det nya syntes i målrutan)

Snitt 2.1 s · max 12.7 s · över 4 s: 3 · över 8 s: 3 av 49

## Flaggor (23)

- **UPPREPNING** dag 4 9:20: Bra val. Folk köper sånt. Jag vet inte varför. (CT)
- **LUGN** dag 2 0:08: 0.0 s efter BÖRJA DAGEN: [lapp] "Första natten i en riktig säng. Jag printade den själv."
- **KROCK** dag 1 4:18: 0.7 s mellan [notis] "Kvarnen funkar. Soptippen är en gruva." och [notis] "💭 Min egen tråd. Nu printar jag en nyckelring av den."
- **KROCK** dag 4 12:25: 1.4 s mellan [notis] "💭 Däcket ville inte stanna. Jag förstår det." och [lapp] "Fyra dagar. Tänk om tre veckor."
- **KROCK** dag 4 13:11: 0.2 s mellan [lapp] "Slut på trampandet. Nästan." och [notis] "💭 Det drar genom väggarna. Isolering, och sen blir det varm"
- **SEN** dag 1 1:35: 12.7 s efter händelsen: du: "Storebrors generator. Den gör el när cykeln snurrar."
- **SEN** dag 1 2:42: 35.6 s efter händelsen: bror: "VA FAN?! Fick du igång den?? Jag försökte i typ ett år. Den bara pep. "
- **SEN** dag 1 12:05: 59.0 s efter händelsen: ali: "Ali här. Jag såg Skräpgrip på avstånd. Ett streck blev lite snett. Mit"
- **SEN** dag 2 0:25: 17.4 s efter händelsen: notis:Första natten i en riktig säng. Jag prin: "Första natten i en riktig säng. Jag printade den själv."
- **SEN** dag 2 7:11: 16.8 s efter händelsen: du: "Jaha, Rolf har hämtat en ölhållare med kylklamp."
- **SEN** dag 4 9:10: 20.0 s efter händelsen: ali: "Ali här. Jag såg Sophållare på avstånd. Ett streck blev lite snett. Mi"
- **SEN** dag 4 12:23: 53.6 s efter händelsen: du: "Däcket ville inte stanna. Jag förstår det."
- **PAUS** dag 1 0:35: 1.9 s paus före "Tung. Den har storebror aldrig burit så långt."
- **PAUS** dag 1 4:18: 0.0 s paus före "Kvarnen funkar. Soptippen är en gruva."
- **PAUS** dag 2 4:01: 0.0 s paus före "Gården är STÄDAD, av mig, frivilligt. Mamma skulle"
- **PAUS** dag 3 10:07: 0.0 s paus före "Fullt i händerna."
- **PAUS** dag 3 11:25: 0.0 s paus före "(nytt mål i rutan)"
- **PAUS** dag 3 11:25: 0.0 s paus före "Plåttak på plats! Trivsel +12"
- **UPPREPNING** dag 4 9:20: ali: "Bra val. Folk köper sånt. Jag vet inte varför." (förra gången dag 1)
- **TORRT** dag 1 5:47: 319 s utan roligt ögonblick
- **TEMPO** dag 1 13:51: dag 1 tog 13.9 min (mål 10–12)
- **TEMPO** dag 4 15:47: dag 4 tog 15.8 min (mål 10–15)
- **TEMPO** dag 5 0:00: dag 5 tog 0.0 min (mål 10–15)

Sidfel: inga

## Dag 1

| Tid | Källa | Vem | Text |
|---|---|---|---|
| 0:00 | MÅL |  | Lasta av skrivaren |
| 0:00 | MÅL |  | Lasta av skrivaren |
| 0:04 | sak | bud | (tips) |
| 0:05 | väntar | du | Se så mycket skräp här är. Det är ju en guldgruva! |
| 0:05 | klar | bud | (tips) |
| 0:07 | sak | du | Se så mycket skräp här är. Det är ju en guldgruva! |
| 0:07 | röst | du | Se så mycket skräp här är. Det är ju en guldgruva! · STORY |
| 0:13 | sak-del | du | Men först en skylt, så att alla vet var jag bor. Hammaren har jag i verktygsraden. |
| 0:13 | röst | du | Men först en skylt, så att alla vet var jag bor. Hammaren har jag i verktygsraden. · STORY |
| 0:20 | klar | du | Se så mycket skräp här är. Det är ju en guldgruva! |
| 0:20 | lapp | 📔 Dagbok | Spikade ihop en skylt av bräder från skräpberget: Soptippsvägen 1. Inte mycket för världen, men det är MITT. |
| 0:20 | dagbokrad | du | Spikade ihop en skylt av bräder från skräpberget: Soptippsvägen 1. Inte mycket för världen, men det är MITT. |
| 0:20 | väntar | notis:Spikade ihop en skylt av bräder från skr | Spikade ihop en skylt av bräder från skräpberget: Soptippsvägen 1. Inte mycket för världen, men det är MITT. |
| 0:20 | varför-köad | du | Skrivaren står kvar på cykeln. Den ska av. |
| 0:20 | väntar | du | Skrivaren står kvar på cykeln. Den ska av. |
| 0:23 | struken | du | Skrivaren står kvar på cykeln. Den ska av. |
| 0:28 | sak | du | (nytt mål i rutan) |
| 0:28 | klar | du | (nytt mål i rutan) |
| 0:30 | sak | notis:Spikade ihop en skylt av bräder från skr | Spikade ihop en skylt av bräder från skräpberget: Soptippsvägen 1. Inte mycket för världen, men det är MITT. |
| 0:30 | notis | dagbok | Spikade ihop en skylt av bräder från skräpberget: Soptippsvägen 1. Inte mycket för världen, men det är MITT. |
| 0:33 | klar | notis:Spikade ihop en skylt av bräder från skr | Spikade ihop en skylt av bräder från skräpberget: Soptippsvägen 1. Inte mycket för världen, men det är MITT. |
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
| 0:37 | målruta |  | Ställ upp skrivaren |
| 0:38 | klar | du | Tung. Den har storebror aldrig burit så långt. |
| 0:38 | struken | info:info | ⏎ Enter – hoppa över |
| 0:41 | sak | du | Skrivaren ställer jag där borta, mot skräpberget. Min första verkstad. |
| 0:41 | pil |  | Ställ upp skrivaren |
| 0:41 | notis | tanke | 💭 Skrivaren ställer jag där borta, mot skräpberget. Min första verkstad. |
| 0:41 | röst | du | Skrivaren ställer jag där borta, mot skräpberget. Min första verkstad. · MÅL |
| 0:41 | nick |  | nick:1 |
| 0:42 | hjälp | kontroll | E: Ryggsäcken och kistan |
| 0:46 | klar | du | Skrivaren ställer jag där borta, mot skräpberget. Min första verkstad. |
| 0:46 | struken | info:bra | 🖨️ Storebrors skrivare. Den ska stå där borta, mot skräpberget. |
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
| 0:52 | nick |  | nick:2 |
| 0:56 | klar | du | Skrivaren behöver ström. Hur fixar jag det här ute? |
| 1:14 | paket |  | tanke |
| 1:14 | tanke | du | Cykeln… och storebrors generator? |
| 1:14 | väntar | du | Cykeln… och storebrors generator? |
| 1:14 | sak | du | Cykeln… och storebrors generator? |
| 1:14 | kvitto-visas | du | Cykeln… och storebrors generator? |
| 1:14 | notis | tanke | 💭 Cykeln… och storebrors generator? |
| 1:14 | röst | du | Cykeln… och storebrors generator? · STORY |
| 1:14 | händelse | malKlart | id=strom del=Dag 1 – Kom igång nasta=bygg |
| 1:14 | väntar | du | Cykeln där borta vid vägen kan ge ström, om generatorn sitter på. Båda ska stå vid skrivaren. |
| 1:14 | MÅL |  | Ställ cykel och generator |
| 1:16 | målruta |  | Ställ cykel och generator |
| 1:16 | klar | du | Cykeln… och storebrors generator? |
| 1:17 | kvittens-bock |  | ✓ Skrivaren behöver ström |
| 1:19 | sak | du | Cykeln där borta vid vägen kan ge ström, om generatorn sitter på. Båda ska stå vid skrivaren. |
| 1:19 | pil |  | Ställ cykel och generator |
| 1:19 | notis | tanke | 💭 Cykeln där borta vid vägen kan ge ström, om generatorn sitter på. Båda ska stå vid skrivaren. |
| 1:19 | röst | du | Cykeln där borta vid vägen kan ge ström, om generatorn sitter på. Båda ska stå vid skrivaren. · MÅL |
| 1:23 | paket |  | tanke |
| 1:23 | tanke | du | Storebrors generator. Den gör el när cykeln snurrar. |
| 1:23 | väntar | du | Storebrors generator. Den gör el när cykeln snurrar. |
| 1:23 | händelse | placerat | sak=generator |
| 1:23 | duns | du | ställs ner |
| 1:27 | klar | du | Cykeln där borta vid vägen kan ge ström, om generatorn sitter på. Båda ska stå vid skrivaren. |
| 1:34 | ljud | utrustning | Cykeln i famnen |
| 1:34 | händelse | lyft | sak=cykel |
| 1:35 | sak | du | Storebrors generator. Den gör el när cykeln snurrar. |
| 1:35 | notis | tanke | 💭 Storebrors generator. Den gör el när cykeln snurrar. |
| 1:35 | röst | du | Storebrors generator. Den gör el när cykeln snurrar. · REAKTION |
| 1:40 | klar | du | Storebrors generator. Den gör el när cykeln snurrar. |
| 1:46 | händelse | placerat | sak=cykel |
| 1:46 | duns | du | ställs ner |
| 1:48 | händelse | ombyggd | sak=cykel |
| 1:48 | varför-köad | du | Okej. Välj nåt litet att printa. |
| 1:48 | väntar | du | Okej. Välj nåt litet att printa. |
| 1:48 | struken | du | Okej. Välj nåt litet att printa. |
| 1:48 | händelse | malKlart | id=bygg del=Dag 1 – Kom igång nasta=valjModell |
| 1:48 | väntar | du | Strömmen finns. Nu ska skrivaren veta vad den ska göra, sen trampar jag. |
| 1:48 | målruta |  | Välj vad skrivaren ska printa |
| 1:48 | MÅL |  | Välj vad skrivaren ska printa |
| 1:48 | sak | du | Strömmen finns. Nu ska skrivaren veta vad den ska göra, sen trampar jag. |
| 1:48 | pil |  | Välj vad skrivaren ska printa |
| 1:48 | notis | tanke | 💭 Strömmen finns. Nu ska skrivaren veta vad den ska göra, sen trampar jag. |
| 1:48 | röst | du | Strömmen finns. Nu ska skrivaren veta vad den ska göra, sen trampar jag. · MÅL |
| 1:52 | kvittens-bock |  | ✓ Montera generatorn |
| 1:54 | klar | du | Strömmen finns. Nu ska skrivaren veta vad den ska göra, sen trampar jag. |
| 2:01 | händelse | printStart | sak=nyckelring |
| 2:01 | kvittens | du | Den piper. Den GÖR något. |
| 2:01 | väntar | du | Den piper. Den GÖR något. |
| 2:01 | sak | du | Den piper. Den GÖR något. |
| 2:01 | notis | tanke | 💭 Den piper. Den GÖR något. |
| 2:01 | röst | du | Den piper. Den GÖR något. · STORY |
| 2:01 | tanke | du | Den stannar när jag slutar trampa. Ström som sparas hade varit nåt. |
| 2:01 | väntar | du | Den stannar när jag slutar trampa. Ström som sparas hade varit nåt. |
| 2:01 | händelse | malKlart | id=valjModell del=Dag 1 – Kom igång nasta=trampa |
| 2:01 | struken | du | Den stannar när jag slutar trampa. Ström som sparas hade varit nåt. |
| 2:01 | väntar | du | Nu behöver den ström. Trampa. |
| 2:01 | målruta |  | Trampa cykeln |
| 2:01 | MÅL |  | Trampa cykeln |
| 2:03 | klar | du | Den piper. Den GÖR något. |
| 2:06 | händelse | printKlar | sak=nyckelring n=1 |
| 2:06 | kvittens | du | Klar! Ta ut den innan den ändrar sig. |
| 2:06 | väntar | du | Klar! Ta ut den innan den ändrar sig. |
| 2:06 | händelse | malKlart | id=trampa del=Dag 1 – Kom igång nasta=rullSlut |
| 2:06 | väntar | du | En nyckelring till, så länge storebrors rulle räcker. |
| 2:06 | MÅL |  | En nyckelring till |
| 2:06 | sak | du | Klar! Ta ut den innan den ändrar sig. |
| 2:06 | notis | tanke | 💭 Klar! Ta ut den innan den ändrar sig. |
| 2:06 | röst | du | Klar! Ta ut den innan den ändrar sig. · STORY |
| 2:06 | målruta |  | En nyckelring till |
| 2:06 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 2:06 | paket |  | sms |
| 2:06 | väntar | bror | VA FAN?! Fick du igång den?? Jag försökte i typ ett år. Den bara pep. 😳 |
| 2:06 | skratt | bror | VA FAN?! Fick du igång den?? Jag försökt |
| 2:06 | paket |  | sms → ge |
| 2:06 | väntar | bror | Sälj den till Ali, han med affären vid skräpberget. Han köper gamla grejer. Han köpte min gamla mopedhjälm för 20 spänn. |
| 2:06 | väntar |  | (läget ändras) |
| 2:09 | klar | du | Klar! Ta ut den innan den ändrar sig. |
| 2:09 | struken | du | Nu behöver den ström. Trampa. |
| 2:12 | sak | du | En nyckelring till, så länge storebrors rulle räcker. |
| 2:12 | pil |  | En nyckelring till |
| 2:12 | notis | tanke | 💭 En nyckelring till, så länge storebrors rulle räcker. |
| 2:12 | röst | du | En nyckelring till, så länge storebrors rulle räcker. · MÅL |
| 2:17 | klar | du | En nyckelring till, så länge storebrors rulle räcker. |
| 2:17 | händelse | printStart | sak=nyckelring |
| 2:19 | sak |  | (läget ändras) |
| 2:19 | klar |  | (läget ändras) |
| 2:22 | toast | guld | Nyckelring är klar – ta ut den |
| 2:22 | väntar | notis:Storebrors skrivare: Nyckelring är klar  | Storebrors skrivare: Nyckelring är klar – ta ut den |
| 2:22 | händelse | printKlar | sak=nyckelring n=2 |
| 2:22 | paket |  | tanke |
| 2:22 | tanke | du | Slut på storebrors rulle. Och här ligger ju plast överallt. Om jag bara kunde göra tråd av skräpet… Affären mitt emot kanske har något. |
| 2:22 | väntar | du | Slut på storebrors rulle. Och här ligger ju plast överallt. Om jag bara kunde göra tråd av skräpet… Affären mitt emot kanske har något. |
| 2:22 | händelse | malKlart | id=rullSlut del=Dag 1 – Kom igång nasta=saljTva |
| 2:23 | MÅL |  | Sälj nyckelringarna |
| 2:23 | sak | du | Slut på storebrors rulle. Och här ligger ju plast överallt. Om jag bara kunde göra tråd av skräpet… Affären mitt emot kanske har något. |
| 2:23 | kvitto-visas | du | Slut på storebrors rulle. Och här ligger ju plast överallt. Om jag bara kunde göra tråd av skräpet… Affären mitt emot kanske har något. |
| 2:23 | notis | tanke | 💭 Slut på storebrors rulle. Och här ligger ju plast överallt. Om jag bara kunde göra tråd av skräpet… Affären mitt emot kanske har något. |
| 2:23 | röst | du | Slut på storebrors rulle. Och här ligger ju plast överallt. Om jag bara kunde göra tråd av skräpet… Affären mitt emot kanske har något. · STORY |
| 2:25 | målruta |  | Sälj nyckelringarna |
| 2:26 | kvittens-bock |  | ✓ En nyckelring till |
| 2:34 | klar | du | Slut på storebrors rulle. Och här ligger ju plast överallt. Om jag bara kunde göra tråd av skräpet… Affären mitt emot kanske har något. |
| 2:34 | sak | du | (nytt mål i rutan) |
| 2:34 | pil |  | Sälj nyckelringarna |
| 2:34 | klar | du | (nytt mål i rutan) |
| 2:42 | sak | bror | VA FAN?! Fick du igång den?? Jag försökte i typ ett år. Den bara pep. 😳 |
| 2:42 | skratt | bror | VA FAN?! Fick du igång den?? Jag försökt |
| 2:42 | sms | bror | VA FAN?! Fick du igång den?? Jag försökte i typ ett år. Den bara pep. 😳 |
| 2:42 | skratt | bror | VA FAN?! Fick du igång den?? Jag försökt |
| 2:42 | sms-bubbla | bror | VA FAN?! Fick du igång den?? Jag försökte i typ ett år. Den bara pep. 😳 |
| 2:42 | skratt | bror | VA FAN?! Fick du igång den?? Jag försökt |
| 2:42 | röst | bror | VA FAN?! Fick du igång den?? Jag försökte i typ ett år. Den bara pep. 😳 · REAKTION |
| 2:46 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 2:48 | klar | bror | VA FAN?! Fick du igång den?? Jag försökte i typ ett år. Den bara pep. 😳 |
| 2:48 | skratt | bror | VA FAN?! Fick du igång den?? Jag försökt |
| 2:50 | struken | notis:Storebrors skrivare: Nyckelring är klar  | Storebrors skrivare: Nyckelring är klar – ta ut den |
| 2:58 | röst | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. · STORY |
| 2:58 | butiksbubbla | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 2:59 | aliSalt | ali | 30 |
| 2:59 | butiksbubbla | ali | Pappas gamla köttkvarn. Den har malt allt utom kött. Trettio kronor, så är den din. |
| 3:01 | väntar | ali | Pappas gamla köttkvarn. Den har malt allt utom kött. Trettio kronor, så är den din. |
| 3:01 | händelse | malKlart | id=saljTva del=Dag 1 – Kom igång nasta=aliKvarn |
| 3:01 | väntar | du | Ali har en gammal kvarn. Den gör tråd av skräp. |
| 3:01 | MÅL |  | Köp kvarnen |
| 3:01 | sak | du | Ali har en gammal kvarn. Den gör tråd av skräp. |
| 3:01 | målruta |  | Köp kvarnen |
| 3:01 | pil |  | Köp kvarnen |
| 3:01 | notis | tanke | 💭 Ali har en gammal kvarn. Den gör tråd av skräp. |
| 3:01 | röst | du | Ali har en gammal kvarn. Den gör tråd av skräp. · MÅL |
| 3:05 | kvittens-bock |  | ✓ Sälj nyckelringarna |
| 3:05 | klar | du | Ali har en gammal kvarn. Den gör tråd av skräp. |
| 3:07 | struken | bror | Sälj den till Ali, han med affären vid skräpberget. Han köper gamla grejer. Han köpte min gamla mopedhjälm för 20 spänn. |
| 3:07 | sak | ali | Pappas gamla köttkvarn. Den har malt allt utom kött. Trettio kronor, så är den din. |
| 3:07 | röst | ali | Pappas gamla köttkvarn. Den har malt allt utom kött. Trettio kronor, så är den din. · STORY |
| 3:14 | klar | ali | Pappas gamla köttkvarn. Den har malt allt utom kött. Trettio kronor, så är den din. |
| 3:20 | händelse | kopt | sak=gammalkvarn |
| 3:20 | röst | ali | Och kommer du på nåt smart, så vet du var jag bor. · STORY |
| 3:20 | butiksbubbla | ali | Och kommer du på nåt smart, så vet du var jag bor. |
| 3:22 | händelse | malKlart | id=aliKvarn del=Dag 1 – Kom igång nasta=kvarn |
| 3:22 | väntar | du | Kvarnen ställer jag bredvid skrivaren, närmast skräpberget. Där finns skräpet. |
| 3:22 | målruta |  | Ställ kvarnen |
| 3:22 | MÅL |  | Ställ kvarnen |
| 3:22 | sak | du | Kvarnen ställer jag bredvid skrivaren, närmast skräpberget. Där finns skräpet. |
| 3:22 | pil |  | Ställ kvarnen |
| 3:22 | notis | tanke | 💭 Kvarnen ställer jag bredvid skrivaren, närmast skräpberget. Där finns skräpet. |
| 3:22 | röst | du | Kvarnen ställer jag bredvid skrivaren, närmast skräpberget. Där finns skräpet. · MÅL |
| 3:23 | nick |  | nick:9 |
| 3:26 | kvittens-bock |  | ✓ Köp kvarnen |
| 3:29 | klar | du | Kvarnen ställer jag bredvid skrivaren, närmast skräpberget. Där finns skräpet. |
| 3:37 | sak | mamma | Hur kunde du bara gå? Är du ok? Svara när jag ringer! |
| 3:37 | sms | mamma | Hur kunde du bara gå? Är du ok? Svara när jag ringer! |
| 3:37 | sms-bubbla | mamma | Hur kunde du bara gå? Är du ok? Svara när jag ringer! |
| 3:37 | röst | mamma | Hur kunde du bara gå? Är du ok? Svara när jag ringer! · STORY |
| 3:39 | väntar | foto | Första nyckelringen |
| 3:39 | paket |  | tanke |
| 3:39 | tanke | du | Någon köpte nåt jag gjort. Det här kan funka. |
| 3:39 | väntar | du | Någon köpte nåt jag gjort. Det här kan funka. |
| 3:41 | klar | mamma | Hur kunde du bara gå? Är du ok? Svara när jag ringer! |
| 3:47 | händelse | placerat | sak=kvarnen |
| 3:47 | struken | kedja | kvarnStar |
| 3:47 | duns | du | ställs ner |
| 3:47 | händelse | malKlart | id=kvarn del=Dag 1 – Kom igång nasta=flaska |
| 3:47 | väntar | du | Skräp i kvarnen, sen vevar jag. Då blir det tråd. |
| 3:47 | MÅL |  | Gör egen tråd |
| 3:47 | målruta |  | Gör egen tråd |
| 3:47 | sak | du | Skräp i kvarnen, sen vevar jag. Då blir det tråd. |
| 3:47 | pil |  | Gör egen tråd |
| 3:47 | notis | tanke | 💭 Skräp i kvarnen, sen vevar jag. Då blir det tråd. |
| 3:47 | röst | du | Skräp i kvarnen, sen vevar jag. Då blir det tråd. · MÅL |
| 3:48 | nick |  | nick:10 |
| 3:51 | kvittens-bock |  | ✓ Ställ kvarnen |
| 3:51 | klar | du | Skräp i kvarnen, sen vevar jag. Då blir det tråd. |
| 3:54 | väntar | kjelle | God morgon, det är Kjelle på Radio Tippen! Det har flyttat in någon i det gamla skjulet. Med en cykel och en skrivare. Spännande, Gunnar. |
| 3:54 | radio | kjelle | God morgon, det är Kjelle på Radio Tippen! Det har flyttat in någon i det gamla skjulet. Med en cykel och en skrivare. Spännande, Gunnar. |
| 3:54 | skratt | du | Radio-Kjelle |
| 3:58 | tanke | du | Vem är Gunnar? |
| 3:58 | väntar | du | Vem är Gunnar? |
| 4:16 | väntar | info:bra | 3 st i tratten – veva nu! |
| 4:16 | sak | info:bra | 3 st i tratten – veva nu! |
| 4:16 | kvitto-visas | info:bra | 3 st i tratten – veva nu! |
| 4:16 | toast | bra | 3 st i tratten – veva nu! |
| 4:17 | händelse | malKlart | id=flaska del=Dag 1 – Kom igång nasta=egenPrint |
| 4:17 | struken | kedja | trad |
| 4:17 | väntar | du | Kvarnen funkar. Soptippen är en gruva. |
| 4:17 | struken | du | Vem är Gunnar? |
| 4:17 | väntar | du | Min egen tråd. Nu printar jag en nyckelring av den. |
| 4:17 | MÅL |  | Printa med egen tråd |
| 4:18 | klar | info:bra | 3 st i tratten – veva nu! |
| 4:18 | sak | du | Kvarnen funkar. Soptippen är en gruva. |
| 4:18 | kvitto-visas | du | Kvarnen funkar. Soptippen är en gruva. |
| 4:18 | lapp | 📔 Dagbok | Kvarnen funkar. Soptippen är en gruva. |
| 4:18 | dagbokrad | du | Kvarnen funkar. Soptippen är en gruva. |
| 4:18 | notis | dagbok | Kvarnen funkar. Soptippen är en gruva. |
| 4:18 | klar | du | Kvarnen funkar. Soptippen är en gruva. |
| 4:18 | sak | du | Min egen tråd. Nu printar jag en nyckelring av den. |
| 4:18 | målruta |  | Printa med egen tråd |
| 4:18 | pil |  | Printa med egen tråd |
| 4:18 | notis | tanke | 💭 Min egen tråd. Nu printar jag en nyckelring av den. |
| 4:18 | röst | du | Min egen tråd. Nu printar jag en nyckelring av den. · MÅL |
| 4:23 | klar | du | Min egen tråd. Nu printar jag en nyckelring av den. |
| 4:31 | sak | foto | Första nyckelringen |
| 4:31 | foto | du | Första nyckelringen |
| 4:33 | klar | foto | Första nyckelringen |
| 4:34 | händelse | printStart | sak=nyckelring |
| 4:34 | toast | bra | 🔗 Slangen kopplad |
| 4:39 | toast | guld | ✅ |
| 4:39 | händelse | printKlar | sak=nyckelring n=3 |
| 4:39 | paket |  | tanke |
| 4:39 | tanke | du | En nyckelring av en gammal schampoflaska. Den luktar fortfarande päron. |
| 4:39 | väntar | du | En nyckelring av en gammal schampoflaska. Den luktar fortfarande päron. |
| 4:39 | skratt | du | egen tråd |
| 4:39 | händelse | malKlart | id=egenPrint del=Dag 1 – Kom igång nasta=salj |
| 4:39 | struken | du | En nyckelring av en gammal schampoflaska. Den luktar fortfarande päron. |
| 4:39 | väntar | du | Affären på andra sidan vägen kanske köper sånt här. |
| 4:39 | MÅL |  | Sälj hos Ali |
| 4:39 | målruta |  | Sälj hos Ali |
| 4:39 | sak | du | Affären på andra sidan vägen kanske köper sånt här. |
| 4:39 | pil |  | Sälj hos Ali |
| 4:39 | notis | tanke | 💭 Affären på andra sidan vägen kanske köper sånt här. |
| 4:39 | röst | du | Affären på andra sidan vägen kanske köper sånt här. · MÅL |
| 4:39 | nick |  | nick:12 |
| 4:40 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 4:43 | kvittens-bock |  | ✓ Printa med egen tråd |
| 4:43 | klar | du | Affären på andra sidan vägen kanske köper sånt här. |
| 4:51 | sak | du | Någon köpte nåt jag gjort. Det här kan funka. |
| 4:51 | notis | tanke | 💭 Någon köpte nåt jag gjort. Det här kan funka. |
| 4:51 | röst | du | Någon köpte nåt jag gjort. Det här kan funka. · STORY |
| 4:53 | händelse | printStart | sak=nyckelring |
| 4:54 | toast | guld | ✅ |
| 4:54 | händelse | printKlar | sak=nyckelring n=4 |
| 4:54 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 4:55 | klar | du | Någon köpte nåt jag gjort. Det här kan funka. |
| 4:57 | struken | kjelle | God morgon, det är Kjelle på Radio Tippen! Det har flyttat in någon i det gamla skjulet. Med en cykel och en skrivare. Spännande, Gunnar. |
| 4:59 | händelse | printStart | sak=nyckelring |
| 5:00 | toast | guld | ✅ |
| 5:00 | händelse | printKlar | sak=nyckelring n=5 |
| 5:00 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 5:13 | aliSalt | ali | 45 |
| 5:13 | röst | ali | Nyckelringar igen? Folk tappar sina nycklar hela tiden. Bra affär för oss. · STORY |
| 5:13 | butiksbubbla | ali | Nyckelringar igen? Folk tappar sina nycklar hela tiden. Bra affär för oss. |
| 5:14 | händelse | malKlart | id=salj del=Dag 1 – Kom igång nasta=powerbank |
| 5:14 | paket |  | sms → ge |
| 5:14 | väntar | ali | Ali här. Glömde en sak. Kom tillbaka, jag har nåt åt dig. |
| 5:14 | väntar |  | (läget ändras) |
| 5:14 | MÅL |  | Gå till Ali |
| 5:16 | väntar | du | Ali har något åt mig. Jag går över vägen till affären. |
| 5:17 | sak | du | Ali har något åt mig. Jag går över vägen till affären. |
| 5:17 | målruta |  | Gå till Ali |
| 5:17 | pil |  | Gå till Ali |
| 5:17 | notis | tanke | 💭 Ali har något åt mig. Jag går över vägen till affären. |
| 5:17 | röst | du | Ali har något åt mig. Jag går över vägen till affären. · MÅL |
| 5:18 | kvittens-bock |  | ✓ Sälj hos Ali |
| 5:21 | klar | du | Ali har något åt mig. Jag går över vägen till affären. |
| 5:23 | sak |  | (läget ändras) |
| 5:23 | klar |  | (läget ändras) |
| 5:29 | sak | ali | Ali här. Glömde en sak. Kom tillbaka, jag har nåt åt dig. |
| 5:29 | sms | ali | Ali här. Glömde en sak. Kom tillbaka, jag har nåt åt dig. |
| 5:29 | sms-bubbla | ali | Ali här. Glömde en sak. Kom tillbaka, jag har nåt åt dig. |
| 5:29 | röst | ali | Ali här. Glömde en sak. Kom tillbaka, jag har nåt åt dig. · STORY |
| 5:30 | paket | ali | ali → ge |
| 5:30 | butiksbubbla | ali | Ali här. Jag såg dig cykla. Det ser jobbigt ut. Testa koppla på den här. Bra kunder får bonus. |
| 5:32 | röst | ali | Ali här. Jag såg dig cykla. Det ser jobbigt ut. Testa koppla på den här. Bra kunder får bonus. · STORY |
| 5:36 | klar | ali | Ali här. Glömde en sak. Kom tillbaka, jag har nåt åt dig. |
| 5:47 | skratt | du | powerbanken på cykeln |
| 5:47 | paket |  | tanke |
| 5:47 | tanke | du | Nu sparas lite ström. En nyckelring, typ. Framtiden är här, och den sitter fast med eltejp. |
| 5:47 | väntar | du | Nu sparas lite ström. En nyckelring, typ. Framtiden är här, och den sitter fast med eltejp. |
| 5:47 | monterat | du | byggsats:powerbank |
| 5:47 | händelse | monterat | sak=powerbank |
| 5:47 | sak | du | Nu sparas lite ström. En nyckelring, typ. Framtiden är här, och den sitter fast med eltejp. |
| 5:47 | kvitto-visas | du | Nu sparas lite ström. En nyckelring, typ. Framtiden är här, och den sitter fast med eltejp. |
| 5:47 | notis | tanke | 💭 Nu sparas lite ström. En nyckelring, typ. Framtiden är här, och den sitter fast med eltejp. |
| 5:47 | röst | du | Nu sparas lite ström. En nyckelring, typ. Framtiden är här, och den sitter fast med eltejp. · REAKTION |
| 5:47 | händelse | malKlart | id=powerbank del=Dag 1 – Kom igång nasta=kopGrip |
| 5:47 | paket |  | lapp |
| 5:47 | lapp-kö | 🧺 Ali | Ali här. Nyckelringen sålde. Jag ville bli ingenjör, men fick ta över pappas butik. I natt lät jag en AI rita en skräpgrip åt mig. Kom och titta. |
| 5:47 | väntar | ali | Ali här. Nyckelringen sålde. Jag ville bli ingenjör, men fick ta över pappas butik. I natt lät jag en AI rita en skräpgrip åt mig. Kom och titta. |
| 5:47 | struken | kedja | harRadGrip |
| 5:47 | väntar | du | Med en skräpgrip slipper jag böja mig. Ali har en ritning. |
| 5:47 | MÅL |  | Plocka skräp och mal det |
| 5:49 | målruta |  | Plocka skräp och mal det |
| 5:51 | kvittens-bock |  | ✓ Gå till Ali |
| 5:54 | klar | du | Nu sparas lite ström. En nyckelring, typ. Framtiden är här, och den sitter fast med eltejp. |
| 5:55 | sak | du | Med en skräpgrip slipper jag böja mig. Ali har en ritning. |
| 5:55 | pil |  | Plocka skräp och mal det |
| 5:55 | notis | tanke | 💭 Med en skräpgrip slipper jag böja mig. Ali har en ritning. |
| 5:55 | röst | du | Med en skräpgrip slipper jag böja mig. Ali har en ritning. · MÅL |
| 5:55 | nick |  | nick:14 |
| 6:00 | klar | du | Med en skräpgrip slipper jag böja mig. Ali har en ritning. |
| 6:11 | händelse | printStart | sak=nyckelring |
| 6:12 | toast | fel | Ingen ström – trampa cykeln |
| 6:12 | väntar | notis:Storebrors skrivare: Ingen ström – tramp | Storebrors skrivare: Ingen ström – trampa cykeln |
| 6:12 | sak | notis:Storebrors skrivare: Ingen ström – tramp | Storebrors skrivare: Ingen ström – trampa cykeln |
| 6:12 | notis | fel | Storebrors skrivare: Ingen ström – trampa cykeln |
| 6:12 | toast | guld | ✅ |
| 6:12 | händelse | printKlar | sak=nyckelring n=6 |
| 6:13 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 6:14 | klar | notis:Storebrors skrivare: Ingen ström – tramp | Storebrors skrivare: Ingen ström – trampa cykeln |
| 6:15 | händelse | printStart | sak=nyckelring |
| 6:16 | toast | guld | ✅ |
| 6:16 | händelse | printKlar | sak=nyckelring n=7 |
| 6:35 | sak | ali | Ali här. Nyckelringen sålde. Jag ville bli ingenjör, men fick ta över pappas butik. I natt lät jag en AI rita en skräpgrip åt mig. Kom och titta. |
| 6:35 | sms | ali | Ali här. Nyckelringen sålde. Jag ville bli ingenjör, men fick ta över pappas butik. I natt lät jag en AI rita en skräpgrip åt mig. Kom och titta. |
| 6:35 | sms-bubbla | ali | Ali här. Nyckelringen sålde. Jag ville bli ingenjör, men fick ta över pappas butik. I natt lät jag en AI rita en skräpgrip åt mig. Kom och titta. |
| 6:35 | röst | ali | Ali här. Nyckelringen sålde. Jag ville bli ingenjör, men fick ta över pappas butik. I natt lät jag en AI rita en skräpgrip åt mig. Kom och titta. · STORY |
| 6:37 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 6:39 | händelse | printStart | sak=nyckelring |
| 6:40 | toast | guld | ✅ |
| 6:40 | händelse | printKlar | sak=nyckelring n=8 |
| 6:41 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 6:48 | klar | ali | Ali här. Nyckelringen sålde. Jag ville bli ingenjör, men fick ta över pappas butik. I natt lät jag en AI rita en skräpgrip åt mig. Kom och titta. |
| 6:53 | paket |  | ali → ge |
| 6:53 | väntar | ali | Du får bonus! 20 kr extra. Säg inget till min fru. |
| 6:53 | väntar |  | (läget ändras) |
| 6:53 | aliSalt | ali | 15 |
| 6:53 | aliSalt | ali | 15 |
| 6:53 | aliSalt | ali | 15 |
| 6:54 | sak | ali | Du får bonus! 20 kr extra. Säg inget till min fru. |
| 6:54 | notis |  | Ali: ”Du får bonus! 20 kr extra. Säg inget till min fru.” |
| 6:54 | röst | ali | Du får bonus! 20 kr extra. Säg inget till min fru. · REAKTION |
| 6:58 | klar | ali | Du får bonus! 20 kr extra. Säg inget till min fru. |
| 7:00 | tanke | du | Gripen hos Ali. Femtio kronor. |
| 7:00 | väntar | du | Gripen hos Ali. Femtio kronor. |
| 7:00 | nick |  | paminn:14 |
| 7:01 | sak |  | (läget ändras) |
| 7:01 | klar |  | (läget ändras) |
| 7:07 | sak | du | Gripen hos Ali. Femtio kronor. |
| 7:07 | notis | tanke | 💭 Gripen hos Ali. Femtio kronor. |
| 7:07 | röst | du | Gripen hos Ali. Femtio kronor. · REAKTION |
| 7:09 | klar | du | Gripen hos Ali. Femtio kronor. |
| 7:12 | händelse | printStart | sak=nyckelring |
| 7:13 | toast | guld | ✅ |
| 7:13 | händelse | printKlar | sak=nyckelring n=9 |
| 7:14 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 7:16 | händelse | printStart | sak=nyckelring |
| 7:17 | toast | guld | ✅ |
| 7:17 | händelse | printKlar | sak=nyckelring n=10 |
| 7:18 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 7:20 | händelse | printStart | sak=nyckelring |
| 7:20 | toast | fel | Ingen ström – trampa cykeln |
| 7:22 | toast | guld | ✅ |
| 7:22 | händelse | printKlar | sak=nyckelring n=11 |
| 7:22 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 7:33 | aliSalt | ali | 15 |
| 7:33 | aliSalt | ali | 15 |
| 7:34 | aliSalt | ali | 15 |
| 7:46 | händelse | printStart | sak=nyckelring |
| 7:47 | toast | guld | ✅ |
| 7:47 | händelse | printKlar | sak=nyckelring n=12 |
| 7:48 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 7:50 | händelse | printStart | sak=nyckelring |
| 7:51 | toast | guld | ✅ |
| 7:51 | händelse | printKlar | sak=nyckelring n=13 |
| 7:52 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 7:54 | händelse | printStart | sak=nyckelring |
| 7:55 | toast | guld | ✅ |
| 7:55 | händelse | printKlar | sak=nyckelring n=14 |
| 7:56 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 8:07 | aliSalt | ali | 15 |
| 8:07 | aliSalt | ali | 15 |
| 8:08 | aliSalt | ali | 15 |
| 8:20 | händelse | printStart | sak=nyckelring |
| 8:21 | toast | guld | ✅ |
| 8:21 | händelse | printKlar | sak=nyckelring n=15 |
| 8:22 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 8:24 | händelse | printStart | sak=nyckelring |
| 8:25 | toast | fel | Ingen ström – trampa cykeln |
| 8:27 | toast | guld | ✅ |
| 8:27 | händelse | printKlar | sak=nyckelring n=16 |
| 8:27 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 8:29 | händelse | printStart | sak=nyckelring |
| 8:30 | toast | guld | ✅ |
| 8:30 | händelse | printKlar | sak=nyckelring n=17 |
| 8:31 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 8:42 | aliSalt | ali | 15 |
| 8:42 | aliSalt | ali | 15 |
| 8:42 | aliSalt | ali | 15 |
| 8:55 | händelse | printStart | sak=nyckelring |
| 8:56 | toast | guld | ✅ |
| 8:56 | händelse | printKlar | sak=nyckelring n=18 |
| 8:57 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 8:57 | upplåst | bara | grip |
| 8:57 | brott | RESERV | grip (bara 2 av 3) |
| 8:57 | händelse | upplast | id=grip flask=bara |
| 9:08 | aliSalt | ali | 15 |
| 9:14 | väntar | bud | (tips) |
| 9:14 | sak | bud | (tips) |
| 9:14 | väntar | du | Jag har pengar nu. Hos Ali kan jag köpa uppgraderingar – bära mer eller printa snabbare. |
| 9:15 | klar | bud | (tips) |
| 9:17 | sak | du | Jag har pengar nu. Hos Ali kan jag köpa uppgraderingar – bära mer eller printa snabbare. |
| 9:17 | röst | du | Jag har pengar nu. Hos Ali kan jag köpa uppgraderingar – bära mer eller printa snabbare. · MÅL |
| 9:24 | klar | du | Jag har pengar nu. Hos Ali kan jag köpa uppgraderingar – bära mer eller printa snabbare. |
| 9:35 | händelse | printStart | sak=nyckelring |
| 9:36 | toast | guld | ✅ |
| 9:36 | händelse | printKlar | sak=nyckelring n=19 |
| 9:57 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 10:08 | aliSalt | ali | 15 |
| 10:20 | händelse | printStart | sak=nyckelring |
| 10:21 | toast | guld | ✅ |
| 10:21 | händelse | printKlar | sak=nyckelring n=20 |
| 10:22 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 10:33 | aliSalt | ali | 15 |
| 10:37 | struken | info:guld | 3D-modell köpt – printa skräpgrip |
| 10:37 | händelse | kopt | sak=grip |
| 10:37 | röst | ali | Bra val. 3D-modellen är din. Den räcker till en. · STORY |
| 10:37 | butiksbubbla | ali | Bra val. 3D-modellen är din. Den räcker till en. |
| 10:38 | händelse | malKlart | id=kopGrip del=Dag 1 – Kom igång nasta=printGrip |
| 10:38 | väntar | du | Min första 3D-modell! Jag printar inte bara saker – jag printar maskiner. |
| 10:38 | MÅL |  | Printa skräpgripen |
| 10:39 | sak | du | Min första 3D-modell! Jag printar inte bara saker – jag printar maskiner. |
| 10:39 | kvitto-visas | du | Min första 3D-modell! Jag printar inte bara saker – jag printar maskiner. |
| 10:39 | lapp | 📔 Dagbok | Min första 3D-modell! Jag printar inte bara saker – jag printar maskiner. |
| 10:39 | dagbokrad | du | Min första 3D-modell! Jag printar inte bara saker – jag printar maskiner. |
| 10:39 | notis | dagbok | Min första 3D-modell! Jag printar inte bara saker – jag printar maskiner. |
| 10:39 | klar | du | Min första 3D-modell! Jag printar inte bara saker – jag printar maskiner. |
| 10:39 | målruta |  | Printa skräpgripen |
| 10:40 | sak | du | (nytt mål i rutan) |
| 10:40 | pil |  | Printa skräpgripen |
| 10:40 | klar | du | (nytt mål i rutan) |
| 10:40 | nick |  | nick:15 |
| 10:57 | händelse | printStart | sak=byggsats:grip |
| 10:58 | toast | fel | Ingen ström – trampa cykeln |
| 11:01 | händelse | printKlar | sak=byggsats:grip n=1 |
| 11:01 | toast | guld | ✅ |
| 11:02 | väntar | info:guld | Skräpgrip ska jag ha på mig. |
| 11:02 | händelse | tagitUrPrint | sak=byggsats:grip n=1 |
| 11:02 | paket |  | sms |
| 11:02 | väntar | ali | Ali här. Jag såg Skräpgrip på avstånd. Ett streck blev lite snett. Mitt fel. Vackert ändå. |
| 11:02 | struken | kedja | grip |
| 11:02 | sak | info:guld | Skräpgrip ska jag ha på mig. |
| 11:02 | kvitto-visas | info:guld | Skräpgrip ska jag ha på mig. |
| 11:02 | toast | guld | Skräpgrip ska jag ha på mig. |
| 11:04 | klar | info:guld | Skräpgrip ska jag ha på mig. |
| 11:06 | väntar | info:guld | 🦾 Skräpgripen sitter! Jag bär 6, siktar lättare och plockar när jag går nära. |
| 11:06 | tog på | du | byggsats:grip |
| 11:06 | händelse | monterat | sak=grip |
| 11:06 | sak | info:guld | 🦾 Skräpgripen sitter! Jag bär 6, siktar lättare och plockar när jag går nära. |
| 11:06 | kvitto-visas | info:guld | 🦾 Skräpgripen sitter! Jag bär 6, siktar lättare och plockar när jag går nära. |
| 11:06 | toast | guld | 🦾 Skräpgripen sitter! Jag bär 6, siktar lättare och plockar när jag går nära. |
| 11:06 | händelse | malKlart | id=printGrip del=Dag 1 – Kom igång nasta=krukaD1 |
| 11:06 | väntar | du | Ali vill ha krukor. Jag printar en blomkruka. |
| 11:06 | MÅL |  | Printa och sälj nyckelringar |
| 11:06 | upplåst | inkomst | kruka |
| 11:06 | brott | UPPLÅST | kruka (inkomst 20 av 6) |
| 11:06 | händelse | upplast | id=kruka flask=inkomst |
| 11:06 | paket |  | tanke → sms |
| 11:06 | tanke | du | Nyckelringar, nyckelringar. Ali kan inte vilja ha fler. |
| 11:06 | väntar | du | Nyckelringar, nyckelringar. Ali kan inte vilja ha fler. |
| 11:06 | väntar | ali | Prova en kruka. Folk köper krukor. Ingen vet varför. |
| 11:06 | skratt | ali | Prova en kruka. Folk köper krukor. Ingen |
| 11:08 | klar | info:guld | 🦾 Skräpgripen sitter! Jag bär 6, siktar lättare och plockar när jag går nära. |
| 11:08 | målruta |  | Köp krukreceptet |
| 11:10 | kvittens-bock |  | ✓ Printa skräpgripen |
| 11:10 | sak | du | Ali vill ha krukor. Jag printar en blomkruka. |
| 11:10 | pil |  | Köp krukreceptet |
| 11:10 | notis | tanke | 💭 Ali vill ha krukor. Jag printar en blomkruka. |
| 11:10 | röst | du | Ali vill ha krukor. Jag printar en blomkruka. · MÅL |
| 11:10 | nick |  | nick:16 |
| 11:14 | klar | du | Ali vill ha krukor. Jag printar en blomkruka. |
| 11:16 | sak | ali | Prova en kruka. Folk köper krukor. Ingen vet varför. |
| 11:16 | skratt | ali | Prova en kruka. Folk köper krukor. Ingen |
| 11:16 | sms | ali | Prova en kruka. Folk köper krukor. Ingen vet varför. |
| 11:16 | skratt | ali | Prova en kruka. Folk köper krukor. Ingen |
| 11:16 | sms-bubbla | ali | Prova en kruka. Folk köper krukor. Ingen vet varför. |
| 11:16 | skratt | ali | Prova en kruka. Folk köper krukor. Ingen |
| 11:16 | röst | ali | Prova en kruka. Folk köper krukor. Ingen vet varför. · STORY |
| 11:17 | händelse | kopt | sak=kruka |
| 11:17 | butiksbubbla | ali | Blomkruka? Bra val. Folk köper sånt. Jag vet inte varför. |
| 11:18 | väntar | ali | Bra val. Folk köper sånt. Jag vet inte varför. |
| 11:20 | klar | ali | Prova en kruka. Folk köper krukor. Ingen vet varför. |
| 11:20 | skratt | ali | Prova en kruka. Folk köper krukor. Ingen |
| 11:22 | sak | ali | Bra val. Folk köper sånt. Jag vet inte varför. |
| 11:22 | röst | ali | Bra val. Folk köper sånt. Jag vet inte varför. · STORY |
| 11:26 | klar | ali | Bra val. Folk köper sånt. Jag vet inte varför. |
| 11:34 | sak | du | Nyckelringar, nyckelringar. Ali kan inte vilja ha fler. |
| 11:34 | notis | tanke | 💭 Nyckelringar, nyckelringar. Ali kan inte vilja ha fler. |
| 11:34 | röst | du | Nyckelringar, nyckelringar. Ali kan inte vilja ha fler. · STORY |
| 11:38 | klar | du | Nyckelringar, nyckelringar. Ali kan inte vilja ha fler. |
| 11:44 | händelse | printStart | sak=kruka |
| 11:47 | toast | guld | ✅ |
| 11:47 | händelse | printKlar | sak=kruka n=1 |
| 11:47 | kvittens | du | En kruka. Mamma skulle bli så stolt. Hon får inte veta. |
| 11:47 | väntar | du | En kruka. Mamma skulle bli så stolt. Hon får inte veta. |
| 11:47 | händelse | malKlart | id=krukaD1 del=Dag 1 – Kom igång nasta=saljKruka |
| 11:47 | väntar | du | Ali gillar krukor. Han sa det själv. |
| 11:47 | MÅL |  | Sälj blomkrukan |
| 11:47 | sak | du | En kruka. Mamma skulle bli så stolt. Hon får inte veta. |
| 11:47 | notis | tanke | 💭 En kruka. Mamma skulle bli så stolt. Hon får inte veta. |
| 11:47 | röst | du | En kruka. Mamma skulle bli så stolt. Hon får inte veta. · STORY |
| 11:47 | målruta |  | Sälj blomkrukan |
| 11:47 | händelse | tagitUrPrint | sak=kruka n=1 |
| 11:52 | klar | du | En kruka. Mamma skulle bli så stolt. Hon får inte veta. |
| 11:53 | sak | du | Ali gillar krukor. Han sa det själv. |
| 11:53 | pil |  | Sälj blomkrukan |
| 11:53 | notis | tanke | 💭 Ali gillar krukor. Han sa det själv. |
| 11:53 | röst | du | Ali gillar krukor. Han sa det själv. · MÅL |
| 11:56 | klar | du | Ali gillar krukor. Han sa det själv. |
| 12:05 | sak | ali | Ali här. Jag såg Skräpgrip på avstånd. Ett streck blev lite snett. Mitt fel. Vackert ändå. |
| 12:05 | sms | ali | Ali här. Jag såg Skräpgrip på avstånd. Ett streck blev lite snett. Mitt fel. Vackert ändå. |
| 12:05 | sms-bubbla | ali | Ali här. Jag såg Skräpgrip på avstånd. Ett streck blev lite snett. Mitt fel. Vackert ändå. |
| 12:05 | röst | ali | Ali här. Jag såg Skräpgrip på avstånd. Ett streck blev lite snett. Mitt fel. Vackert ändå. · REAKTION |
| 12:12 | aliSalt | ali | 70 |
| 12:12 | klar | ali | Ali här. Jag såg Skräpgrip på avstånd. Ett streck blev lite snett. Mitt fel. Vackert ändå. |
| 12:13 | händelse | malKlart | id=saljKruka del=Dag 1 – Kom igång nasta=kopSang |
| 12:13 | struken | kedja | morkt |
| 12:13 | väntar | du | Jag tänker inte sova på betongen i natt. Ali har en säng. Typ. |
| 12:13 | målruta |  | Köp sängen |
| 12:13 | MÅL |  | Köp sängen |
| 12:14 | sak | du | Jag tänker inte sova på betongen i natt. Ali har en säng. Typ. |
| 12:14 | pil |  | Köp sängen |
| 12:14 | notis | tanke | 💭 Jag tänker inte sova på betongen i natt. Ali har en säng. Typ. |
| 12:14 | röst | du | Jag tänker inte sova på betongen i natt. Ali har en säng. Typ. · MÅL |
| 12:17 | kvittens-bock |  | ✓ Sälj blomkrukan |
| 12:20 | klar | du | Jag tänker inte sova på betongen i natt. Ali har en säng. Typ. |
| 12:28 | händelse | kopt | sak=sang |
| 12:28 | röst | ali | Sov gott, min vän. · STORY |
| 12:28 | butiksbubbla | ali | Sov gott, min vän. |
| 12:30 | händelse | malKlart | id=kopSang del=Dag 1 – Kom igång nasta=printSang |
| 12:30 | väntar | du | Sängen tar lång tid. Den är värd det. |
| 12:30 | målruta |  | Printa sängen |
| 12:30 | MÅL |  | Printa sängen |
| 12:30 | sak | du | Sängen tar lång tid. Den är värd det. |
| 12:30 | pil |  | Printa sängen |
| 12:30 | notis | tanke | 💭 Sängen tar lång tid. Den är värd det. |
| 12:30 | röst | du | Sängen tar lång tid. Den är värd det. · MÅL |
| 12:30 | nick |  | nick:19 |
| 12:33 | klar | du | Sängen tar lång tid. Den är värd det. |
| 12:34 | kvittens-bock |  | ✓ Köp sängen |
| 13:27 | händelse | printStart | sak=sang |
| 13:27 | toast | fel | Ingen ström – trampa cykeln |
| 13:33 | toast | guld | ✅ |
| 13:33 | händelse | printKlar | sak=sang n=1 |
| 13:33 | händelse | tagitUrPrint | sak=sang n=1 |
| 13:33 | struken | kedja | sang |
| 13:33 | händelse | malKlart | id=printSang del=Dag 1 – Kom igång nasta=sov1 |
| 13:33 | paket |  | lapp |
| 13:33 | kvallsrad | du | Nitton år. Inget mer tjat. Gården är full av skräp. I morgon. |
| 13:33 | väntar | du | Sängen ska in i skjulet. Sen sover jag. |
| 13:33 | målruta |  | Sängen i skjulet |
| 13:33 | MÅL |  | Sängen i skjulet |
| 13:34 | sak | du | Sängen ska in i skjulet. Sen sover jag. |
| 13:34 | pil |  | Sängen i skjulet |
| 13:34 | notis | tanke | 💭 Sängen ska in i skjulet. Sen sover jag. |
| 13:34 | röst | du | Sängen ska in i skjulet. Sen sover jag. · MÅL |
| 13:34 | nick |  | nick:20 |
| 13:37 | klar | du | Sängen ska in i skjulet. Sen sover jag. |
| 13:37 | kvittens-bock |  | ✓ Printa sängen |
| 13:53 | nattkort | du | 🌙 Dag 1 är slut. God natt. zzz… i en riktig säng Nitton år. Inget mer tjat. Gården är full av skräp. I morgon. DAGENS PRINTAR Nyckelring × 20 Blomkruka × 1 Sän |

<details><summary>Botens handlingar dag 1</summary>

- 0:17 gå till brädhögen (3 m) (5 kr)
- 0:35 gå till cykeln vid vägen (2 m) (5 kr)
- 0:47 gå till rutan i linje 1 (13 m) (5 kr)
- 1:34 gå till cykeln (lyfter den) (13 m) (5 kr)
- 1:46 gå till cykelns plats (11 m) (5 kr)
- 1:57 gå till fel håll en bit (4 m) (5 kr)
- 1:59 gå till skrivaren (2 m) (5 kr)
- 2:01 printar Nyckelring (5 kr)
- 2:07 tar ut 1 st ur skrivaren (5 kr)
- 2:17 printar Nyckelring (sista av storebrors rulle) (5 kr)
- 2:41 nybörjaren ser ingen pil – tittar runt (5 kr)
- 2:46 tar ut 1 st ur skrivaren (5 kr)
- 2:48 gå till fel håll en bit (4 m) (5 kr)
- 2:58 gå till Ali (26 m) (5 kr)
- 2:58 öppnar Alis butik – sälja de två nyckelringarna (5 kr)
- 3:00 säljer hos Ali: +30 kr (35 kr)
- 3:18 öppnar Alis butik – köpa kvarnen (35 kr)
- 3:21 köper gammalkvarn för 30 kr (5 kr)
- 3:22 köpte kvarnen (5 kr)
- 3:47 gå till kvarnens ruta (28 m) (5 kr)
- 4:09 plockar 3 skräp på gården (bär max 3) (5 kr)
- 4:16 gå till kvarnen (19 m) (5 kr)
- 4:31 gå till cykeln (2 m) (5 kr)
- 4:34 printar Nyckelring (5 kr)
- 4:40 tar ut 1 st ur skrivaren (5 kr)
- 4:53 printar Nyckelring (5 kr)
- 4:54 tar ut 1 st ur skrivaren (5 kr)
- 4:59 printar Nyckelring (5 kr)
- 5:01 tar ut 1 st ur skrivaren (5 kr)
- 5:12 gå till Ali (27 m) (5 kr)
- 5:12 öppnar Alis butik – sälja nyckelringar (5 kr)
- 5:14 säljer hos Ali: +45 kr (50 kr)
- 5:26 nybörjaren ser ingen pil – tittar runt (50 kr)
- 5:30 öppnar Alis butik – Ali (powerbanken) (50 kr)
- 5:47 gå till koppla powerbanken till cykeln (24 m) (50 kr)
- 6:08 tjänar pengar till väntar på flaskhalsen för grip: 50/90 kr → printar nyckelring (15 kr) (50 kr)
- 6:09 gå till skrivaren (2 m) (50 kr)
- 6:11 printar Nyckelring (50 kr)
- 6:13 tar ut 1 st ur skrivaren (50 kr)
- 6:15 printar Nyckelring (50 kr)
- 6:26 plockar 3 skräp på gården (bär max 3) (50 kr)
- 6:32 gå till kvarnen (18 m) (50 kr)
- 6:37 gå till skrivaren (3 m) (50 kr)
- 6:37 tar ut 1 st ur skrivaren (50 kr)
- 6:39 printar Nyckelring (50 kr)
- 6:41 tar ut 1 st ur skrivaren (50 kr)
- 6:51 gå till Ali (28 m) (50 kr)
- 6:51 öppnar Alis butik – sälja (50 kr)
- 6:53 säljer hos Ali: +45 kr (95 kr)
- 7:01 tjänar pengar till väntar på flaskhalsen för grip: 115/155 kr → printar nyckelring (15 kr) (115 kr)
- 7:10 gå till skrivaren (25 m) (115 kr)
- 7:12 printar Nyckelring (115 kr)
- 7:14 tar ut 1 st ur skrivaren (115 kr)
- 7:16 printar Nyckelring (115 kr)
- 7:18 tar ut 1 st ur skrivaren (115 kr)
- 7:20 printar Nyckelring (115 kr)
- 7:21 gå till cykeln (1 m) (115 kr)
- 7:23 tar ut 1 st ur skrivaren (115 kr)
- 7:32 gå till Ali (25 m) (115 kr)
- 7:32 öppnar Alis butik – sälja (115 kr)
- 7:34 säljer hos Ali: +45 kr (160 kr)
- 7:36 tjänar pengar till väntar på flaskhalsen för grip: 160/200 kr → printar nyckelring (15 kr) (160 kr)
- 7:45 gå till skrivaren (25 m) (160 kr)
- 7:46 printar Nyckelring (160 kr)
- 7:49 tar ut 1 st ur skrivaren (160 kr)
- 7:50 printar Nyckelring (160 kr)
- 7:53 tar ut 1 st ur skrivaren (160 kr)
- 7:54 printar Nyckelring (160 kr)
- 7:57 tar ut 1 st ur skrivaren (160 kr)
- 8:06 gå till Ali (25 m) (160 kr)
- 8:06 öppnar Alis butik – sälja (160 kr)
- 8:08 säljer hos Ali: +45 kr (205 kr)
- 8:10 tjänar pengar till väntar på flaskhalsen för grip: 205/245 kr → printar nyckelring (15 kr) (205 kr)
- 8:19 gå till skrivaren (25 m) (205 kr)
- 8:20 printar Nyckelring (205 kr)
- 8:23 tar ut 1 st ur skrivaren (205 kr)
- 8:24 printar Nyckelring (205 kr)
- 8:26 gå till cykeln (1 m) (205 kr)
- 8:27 tar ut 1 st ur skrivaren (205 kr)
- 8:29 printar Nyckelring (205 kr)
- 8:31 tar ut 1 st ur skrivaren (205 kr)
- 8:40 gå till Ali (25 m) (205 kr)
- 8:40 öppnar Alis butik – sälja (205 kr)
- 8:42 säljer hos Ali: +45 kr (250 kr)
- 8:44 tjänar pengar till väntar på flaskhalsen för grip: 250/290 kr → printar nyckelring (15 kr) (250 kr)
- 8:53 gå till skrivaren (25 m) (250 kr)
- 8:55 printar Nyckelring (250 kr)
- 8:57 tar ut 1 st ur skrivaren (250 kr)
- 9:06 gå till Ali (25 m) (250 kr)
- 9:06 öppnar Alis butik – sälja (250 kr)
- 9:08 säljer hos Ali: +15 kr (265 kr)
- 9:09 tjänar pengar till väntar på flaskhalsen för grip: 265/290 kr → printar nyckelring (15 kr) (265 kr)
- 9:17 plockar 3 skräp på gården (bär max 3) (265 kr)
- 9:29 gå till kvarnen (32 m) (265 kr)
- 9:33 gå till skrivaren (1 m) (265 kr)
- 9:35 printar Nyckelring (265 kr)
- 9:47 plockar 3 skräp på gården (bär max 3) (265 kr)
- 9:53 gå till kvarnen (18 m) (265 kr)
- 9:57 gå till skrivaren (3 m) (265 kr)
- 9:57 tar ut 1 st ur skrivaren (265 kr)
- 10:07 gå till Ali (28 m) (265 kr)
- 10:07 öppnar Alis butik – sälja (265 kr)
- 10:09 säljer hos Ali: +15 kr (280 kr)
- 10:09 tjänar pengar till väntar på flaskhalsen för grip: 280/290 kr → printar nyckelring (15 kr) (280 kr)
- 10:19 gå till skrivaren (25 m) (280 kr)
- 10:20 printar Nyckelring (280 kr)
- 10:23 tar ut 1 st ur skrivaren (280 kr)
- 10:32 gå till Ali (25 m) (280 kr)
- 10:32 öppnar Alis butik – sälja (280 kr)
- 10:33 säljer hos Ali: +15 kr (295 kr)
- 10:35 öppnar Alis butik – köpa skräpgrip (295 kr)
- 10:37 köper grip för 50 kr (245 kr)
- 10:56 gå till skrivaren (25 m) (245 kr)
- 10:57 printar Skräpgrip (245 kr)
- 10:58 gå till cykeln (1 m) (245 kr)
- 11:02 tar ut 1 st ur skrivaren (245 kr)
- 11:06 tar på grip (245 kr)
- 11:15 gå till Ali (25 m) (245 kr)
- 11:15 öppnar Alis butik – köpa receptet blomkruka (245 kr)
- 11:18 köper kruka för 40 kr (205 kr)
- 11:43 gå till skrivaren (25 m) (205 kr)
- 11:44 printar Blomkruka (205 kr)
- 11:48 tar ut 1 st ur skrivaren (205 kr)
- 11:57 nybörjaren ser ingen pil – tittar runt (205 kr)
- 12:10 gå till Ali (25 m) (205 kr)
- 12:10 öppnar Alis butik – sälja krukan (205 kr)
- 12:12 säljer hos Ali: +70 kr (275 kr)
- 12:27 öppnar Alis butik – köpa sängen (275 kr)
- 12:29 köper sang för 60 kr (215 kr)
- 12:53 gå till dit pilen pekar (30 m) (215 kr)
- 13:10 plockar 6 skräp på gården (bär max 6) (215 kr)
- 13:22 gå till kvarnen (33 m) (215 kr)
- 13:25 gå till skrivaren (1 m) (215 kr)
- 13:27 printar Säng (215 kr)
- 13:28 gå till cykeln (2 m) (215 kr)
- 13:34 tar ut 1 st ur skrivaren (215 kr)
- 13:50 gå till sängplatsen i skjulet (21 m) (215 kr)

</details>

## Dag 2

| Tid | Källa | Vem | Text |
|---|---|---|---|
| 13:53 | vara | ali | kruka |
| 13:53 | händelse | malKlart | id=sov1 del=Dag 1 – Kom igång nasta=kopMotor |
| 13:53 | MÅL |  | Mal skräp, printa och sälj |
| 0:01 | väntar | ali | Ali här. Såg skylten. Stavningen är rätt. Det är mer än många. |
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
| 0:31 | väntar | foto | Egen säng |
| 0:31 | paket |  | tanke |
| 0:31 | tanke | du | Tänk att jag ska få sova i min egen säng. |
| 0:31 | väntar | du | Tänk att jag ska få sova i min egen säng. |
| 0:58 | händelse | printStart | sak=kruka |
| 1:00 | toast | fel | Ingen ström – trampa cykeln |
| 1:01 | struken | ali | Ali här. Såg skylten. Stavningen är rätt. Det är mer än många. |
| 1:02 | toast | guld | ✅ |
| 1:02 | händelse | printKlar | sak=kruka n=2 |
| 1:03 | händelse | tagitUrPrint | sak=kruka n=1 |
| 1:04 | okänt ord bytt | info | 🚛 Sopbilen tippade en ny last på soptippen! |
| 1:04 | väntar | info:guld | 🚛 Sopbilen tippade en ny last på soptippen! |
| 1:04 | lapp | 📔 Dagbok | Sopbilen tippade en ny last. Allt det skräpet – och grinden är låst. |
| 1:04 | okänt ord bytt | du | Sopbilen tippade en ny last. Allt det skräpet – och grinden är låst. |
| 1:04 | dagbokrad | du | En stor bil tippade en ny last. Allt det skräpet – och grinden är låst. |
| 1:04 | väntar | notis:En stor bil tippade en ny last. Allt det | En stor bil tippade en ny last. Allt det skräpet – och grinden är låst. |
| 1:05 | sak | info:guld | 🚛 Sopbilen tippade en ny last på soptippen! |
| 1:05 | kvitto-visas | info:guld | 🚛 Sopbilen tippade en ny last på soptippen! |
| 1:05 | toast | guld | 🚛 En stor bil tippade en ny last på soptippen! |
| 1:07 | klar | info:guld | 🚛 Sopbilen tippade en ny last på soptippen! |
| 1:09 | sak | notis:En stor bil tippade en ny last. Allt det | En stor bil tippade en ny last. Allt det skräpet – och grinden är låst. |
| 1:09 | notis | dagbok | En stor bil tippade en ny last. Allt det skräpet – och grinden är låst. |
| 1:11 | klar | notis:En stor bil tippade en ny last. Allt det | En stor bil tippade en ny last. Allt det skräpet – och grinden är låst. |
| 1:13 | röst | ali | Semesterkassan: 340 kr. Köp nåt, min vän. · STORY |
| 1:13 | butiksbubbla | ali | Semesterkassan: 340 kr. Köp nåt, min vän. |
| 1:15 | aliSalt | ali | 105 |
| 1:15 | butiksbubbla | ali | Precis vad jag ville ha idag. 105 kr – med extra. |
| 1:15 | röst | ali | Precis det jag ville ha idag, min vän. · STORY |
| 1:28 | händelse | printStart | sak=kruka |
| 1:30 | toast | guld | ✅ |
| 1:30 | händelse | printKlar | sak=kruka n=3 |
| 1:31 | händelse | tagitUrPrint | sak=kruka n=1 |
| 1:38 | sak | foto | Egen säng |
| 1:38 | foto | du | Egen säng |
| 1:41 | klar | foto | Egen säng |
| 1:42 | aliSalt | ali | 105 |
| 1:49 | sak | du | Tänk att jag ska få sova i min egen säng. |
| 1:49 | notis | tanke | 💭 Tänk att jag ska få sova i min egen säng. |
| 1:49 | röst | du | Tänk att jag ska få sova i min egen säng. · STORY |
| 1:52 | klar | du | Tänk att jag ska få sova i min egen säng. |
| 1:54 | skratt | du | falsk tuta |
| 1:56 | sopsack | rolf | Sopsäckarna landade på gården |
| 1:56 | paket |  | tanke → ge |
| 1:56 | tanke | du | Hmm, vad kastade gubben ut ur sopbilen? Jag går och kollar. |
| 1:56 | väntar | du | Hmm, vad kastade gubben ut ur sopbilen? Jag går och kollar. |
| 1:56 | väntar |  | (läget ändras) |
| 1:56 | sak | du | Hmm, vad kastade gubben ut ur sopbilen? Jag går och kollar. |
| 1:56 | notis | tanke | 💭 Hmm, vad kastade gubben ut ur sopbilen? Jag går och kollar. |
| 1:56 | röst | du | Hmm, vad kastade gubben ut ur sopbilen? Jag går och kollar. · STORY |
| 2:01 | klar | du | Hmm, vad kastade gubben ut ur sopbilen? Jag går och kollar. |
| 2:03 | sak |  | (läget ändras) |
| 2:03 | klar |  | (läget ändras) |
| 2:16 | upplåst | mala | kvarnmotor |
| 2:16 | brott | UPPLÅST | kvarnmotor (mala 14 av 6) |
| 2:16 | händelse | upplast | id=kvarnmotor flask=mala |
| 2:16 | paket |  | tanke → sms |
| 2:16 | tanke | du | Mina armar… Kvarnen borde veva själv. |
| 2:16 | väntar | du | Mina armar… Kvarnen borde veva själv. |
| 2:16 | väntar | ali | Ali här. En motor? Jag har en. Från en gammal tvättmaskin. Den centrifugerar fortfarande om man ber snällt. |
| 2:20 | händelse | printStart | sak=kruka |
| 2:21 | toast | fel | Ingen ström – trampa cykeln |
| 2:24 | toast | guld | ✅ |
| 2:24 | händelse | printKlar | sak=kruka n=4 |
| 2:24 | händelse | tagitUrPrint | sak=kruka n=1 |
| 2:29 | väntar | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått generator. Vi tar en låt på det. Den här är till dig, Gunnar. |
| 2:29 | radio | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått generator. Vi tar en låt på det. Den här är till dig, Gunnar. |
| 2:29 | skratt | du | Radio-Kjelle |
| 2:35 | sak | ali | Ali här. En motor? Jag har en. Från en gammal tvättmaskin. Den centrifugerar fortfarande om man ber snällt. |
| 2:35 | sms | ali | Ali här. En motor? Jag har en. Från en gammal tvättmaskin. Den centrifugerar fortfarande om man ber snällt. |
| 2:35 | sms-bubbla | ali | Ali här. En motor? Jag har en. Från en gammal tvättmaskin. Den centrifugerar fortfarande om man ber snällt. |
| 2:35 | röst | ali | Ali här. En motor? Jag har en. Från en gammal tvättmaskin. Den centrifugerar fortfarande om man ber snällt. · STORY |
| 2:36 | aliSalt | ali | 105 |
| 2:44 | klar | ali | Ali här. En motor? Jag har en. Från en gammal tvättmaskin. Den centrifugerar fortfarande om man ber snällt. |
| 2:48 | struken | info:guld | 3D-modell köpt – printa kvarnmotor |
| 2:48 | händelse | kopt | sak=kvarnmotor |
| 2:49 | händelse | malKlart | id=kopMotor del=Dag 2 – Tippen bredvid nasta=monteraMotor |
| 2:49 | struken | kedja | motorKopt |
| 2:49 | väntar | du | Motorn ska sitta där veven sitter. Jag printar den först. |
| 2:49 | målruta |  | Printa kvarnmotorn till kvarnen |
| 2:49 | MÅL |  | Printa kvarnmotorn till kvarnen |
| 2:49 | sak | du | Motorn ska sitta där veven sitter. Jag printar den först. |
| 2:49 | pil |  | Printa kvarnmotorn till kvarnen |
| 2:49 | notis | tanke | 💭 Motorn ska sitta där veven sitter. Jag printar den först. |
| 2:49 | röst | du | Motorn ska sitta där veven sitter. Jag printar den först. · MÅL |
| 2:50 | nick |  | nick:22 |
| 2:53 | kvittens-bock |  | ✓ Köp kvarnmotorn hos Ali (50 kr) |
| 2:54 | klar | du | Motorn ska sitta där veven sitter. Jag printar den först. |
| 3:06 | skratt | du | falsk tuta |
| 3:06 | väntar | värld:TUUT! Hej grannen! | TUUT! Hej grannen! |
| 3:13 | händelse | printStart | sak=byggsats:kvarnmotor |
| 3:15 | händelse | printKlar | sak=byggsats:kvarnmotor n=1 |
| 3:15 | toast | guld | ✅ |
| 3:16 | väntar | info:guld | ⚙️ Kvarnmotorn ska skruvas fast på kvarnen. |
| 3:16 | händelse | tagitUrPrint | sak=byggsats:kvarnmotor n=1 |
| 3:16 | paket |  | sms |
| 3:16 | väntar | ali | Ali här. Ännu en ritning som blev på riktigt: Kvarnmotor. Semesterkassan växer. Livet växer. |
| 3:16 | sak | info:guld | ⚙️ Kvarnmotorn ska skruvas fast på kvarnen. |
| 3:16 | kvitto-visas | info:guld | ⚙️ Kvarnmotorn ska skruvas fast på kvarnen. |
| 3:16 | toast | guld | ⚙️ Kvarnmotorn ska skruvas fast på kvarnen. |
| 3:18 | klar | info:guld | ⚙️ Kvarnmotorn ska skruvas fast på kvarnen. |
| 3:22 | väntar | info:guld | ⚙️ Motorn sitter där veven satt – nu mal kvarnen själv. |
| 3:22 | händelse | monterat | sak=kvarnmotor |
| 3:22 | paket |  | tanke |
| 3:22 | tanke | du | Motorn sitter där veven satt. Mina armar tackar. |
| 3:22 | väntar | du | Motorn sitter där veven satt. Mina armar tackar. |
| 3:22 | monterat | du | byggsats:kvarnmotor |
| 3:22 | händelse | monterat | sak=kvarnmotor |
| 3:22 | sak | info:guld | ⚙️ Motorn sitter där veven satt – nu mal kvarnen själv. |
| 3:22 | kvitto-visas | info:guld | ⚙️ Motorn sitter där veven satt – nu mal kvarnen själv. |
| 3:22 | toast | guld | ⚙️ Motorn sitter där veven satt – nu mal kvarnen själv. |
| 3:22 | händelse | malKlart | id=monteraMotor del=Dag 2 – Tippen bredvid nasta=kopSack |
| 3:22 | struken | du | Motorn sitter där veven satt. Mina armar tackar. |
| 3:22 | väntar | du | Gården är full av skräp. Jag börjar vid skjulet. |
| 3:22 | MÅL |  | Kolla vad som flög ut från sopbilen |
| 3:24 | klar | info:guld | ⚙️ Motorn sitter där veven satt – nu mal kvarnen själv. |
| 3:24 | målruta |  | Kolla vad som flög ut från sopbilen |
| 3:26 | kvittens-bock |  | ✓ Printa kvarnmotorn till kvarnen |
| 3:26 | sak | du | Gården är full av skräp. Jag börjar vid skjulet. |
| 3:26 | pil |  | Kolla vad som flög ut från sopbilen |
| 3:26 | notis | tanke | 💭 Gården är full av skräp. Jag börjar vid skjulet. |
| 3:26 | röst | du | Gården är full av skräp. Jag börjar vid skjulet. · MÅL |
| 3:30 | klar | du | Gården är full av skräp. Jag börjar vid skjulet. |
| 3:32 | struken | värld:TUUT! Hej grannen! | TUUT! Hej grannen! |
| 3:35 | struken | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått generator. Vi tar en låt på det. Den här är till dig, Gunnar. |
| 3:38 | sak | du | Mina armar… Kvarnen borde veva själv. |
| 3:38 | notis | tanke | 💭 Mina armar… Kvarnen borde veva själv. |
| 3:38 | röst | du | Mina armar… Kvarnen borde veva själv. · STORY |
| 3:41 | klar | du | Mina armar… Kvarnen borde veva själv. |
| 3:46 | paket |  | brev → ge → tanke |
| 3:46 | väntar | rolf | Du sliter ju. Ingen gör så nuförtin. Ta dessa så går dä lättare. / grannen – ja kör sopbilen å har hand om tippen bredvid. MVH ROLF​ |
| 3:46 | väntar |  | (läget ändras) |
| 3:46 | tanke | du | Rolf… gubben i sopbilen. Han har tippen bredvid. Han verkar schysst. |
| 3:46 | okänt ord bytt | du | Rolf… gubben i sopbilen. Han har tippen bredvid. Han verkar schysst. |
| 3:46 | väntar | du | Rolf… gubben i sopbilen. Han har tippen bredvid. Han verkar schysst. |
| 3:46 | sak | rolf | Du sliter ju. Ingen gör så nuförtin. Ta dessa så går dä lättare. / grannen – ja kör sopbilen å har hand om tippen bredvid. MVH ROLF​ |
| 3:46 | lapp | Lapp från Rolf | Du sliter ju. Ingen gör så nuförtin. Ta dessa så går dä lättare. / grannen – ja kör sopbilen å har hand om tippen bredvid. MVH ROLF​ |
| 3:46 | röst | rolf | Du sliter ju. Ingen gör så nuförtin. Ta dessa så går dä lättare. / grannen – ja kör sopbilen å har hand om tippen bredvid. MVH ROLF​ · STORY |
| 3:49 | hjälp | kontroll | Klick: Klicka för att ta på dig den |
| 3:57 | klar | rolf | Du sliter ju. Ingen gör så nuförtin. Ta dessa så går dä lättare. / grannen – ja kör sopbilen å har hand om tippen bredvid. MVH ROLF​ |
| 3:59 | väntar | info:guld | 🗑️ Sopsäcken är över axeln! Nu bär jag 10 skräp. |
| 3:59 | tog på | du | byggsats:korg |
| 3:59 | händelse | monterat | sak=korg |
| 3:59 | sak | info:guld | 🗑️ Sopsäcken är över axeln! Nu bär jag 10 skräp. |
| 3:59 | kvitto-visas | info:guld | 🗑️ Sopsäcken är över axeln! Nu bär jag 10 skräp. |
| 3:59 | toast | guld | 🗑️ Sopsäcken är över axeln! Nu bär jag 10 skräp. |
| 3:59 | händelse | malKlart | id=kopSack del=Dag 2 – Tippen bredvid nasta=n1-stada-klart-garden |
| 3:59 | händelse | malKlart | id=n1-stada-klart-garden del=Dag 2 – Tippen bredvid nasta=rolf0-brev |
| 3:59 | väntar | du | Gården är STÄDAD, av mig, frivilligt. Mamma skulle aldrig tro det. |
| 3:59 | väntar | du | Vänta på sopbilen. Den lämnar något. |
| 3:59 | MÅL |  | Vänta på sopbilen. Den lämnar något. |
| 4:01 | klar | info:guld | 🗑️ Sopsäcken är över axeln! Nu bär jag 10 skräp. |
| 4:01 | sak | du | Gården är STÄDAD, av mig, frivilligt. Mamma skulle aldrig tro det. |
| 4:01 | kvitto-visas | du | Gården är STÄDAD, av mig, frivilligt. Mamma skulle aldrig tro det. |
| 4:01 | lapp | 📔 Dagbok | Gården är STÄDAD, av mig, frivilligt. Mamma skulle aldrig tro det. |
| 4:01 | dagbokrad | du | Gården är STÄDAD, av mig, frivilligt. Mamma skulle aldrig tro det. |
| 4:01 | notis | dagbok | Gården är STÄDAD, av mig, frivilligt. Mamma skulle aldrig tro det. |
| 4:01 | klar | du | Gården är STÄDAD, av mig, frivilligt. Mamma skulle aldrig tro det. |
| 4:01 | målruta |  | Vänta på sopbilen. Den lämnar något. |
| 4:02 | sak | du | Vänta på sopbilen. Den lämnar något. |
| 4:02 | pil |  | Vänta på sopbilen. Den lämnar något. |
| 4:02 | röst | du | Vänta på sopbilen. Den lämnar något. · MÅL |
| 4:05 | klar | du | Vänta på sopbilen. Den lämnar något. |
| 4:06 | händelse | printStart | sak=kruka |
| 4:07 | sak |  | (läget ändras) |
| 4:07 | klar |  | (läget ändras) |
| 4:07 | toast | fel | Ingen ström – trampa cykeln |
| 4:10 | toast | guld | ✅ |
| 4:10 | händelse | printKlar | sak=kruka n=5 |
| 4:10 | händelse | tagitUrPrint | sak=kruka n=1 |
| 4:11 | sak | du | Rolf… gubben i sopbilen. Han har tippen bredvid. Han verkar schysst. |
| 4:11 | notis | tanke | 💭 Rolf… gubben i sopbilen. Han har tippen bredvid. Han verkar schysst. |
| 4:11 | röst | du | Rolf… gubben i sopbilen. Han har tippen bredvid. Han verkar schysst. · STORY |
| 4:11 | väntar | mamma | Har du frusit än? |
| 4:13 | hjälp | kontroll | R: Vrid innan du ställer ner |
| 4:16 | klar | du | Rolf… gubben i sopbilen. Han har tippen bredvid. Han verkar schysst. |
| 4:21 | aliSalt | ali | 105 |
| 4:23 | struken | ali | Ali här. Ännu en ritning som blev på riktigt: Kvarnmotor. Semesterkassan växer. Livet växer. |
| 4:24 | upplåst | skrivare | rullstall |
| 4:24 | brott | UPPLÅST | rullstall (skrivare 196 av 60) |
| 4:24 | händelse | upplast | id=rullstall flask=skrivare |
| 4:24 | paket |  | tanke → sms |
| 4:24 | tanke | du | Kvarnen står och väntar för att hållaren är full. Om den rymde fler rullar kunde den mala hela tiden. |
| 4:24 | väntar | du | Kvarnen står och väntar för att hållaren är full. Om den rymde fler rullar kunde den mala hela tiden. |
| 4:24 | väntar | ali | Ali här. Rullställ. Fyra rullar i stället för en. Har ett på hyllan. |
| 4:44 | händelse | printStart | sak=kruka |
| 4:47 | toast | guld | ✅ |
| 4:47 | händelse | printKlar | sak=kruka n=6 |
| 4:47 | paket |  | tanke |
| 4:47 | tanke | du | Jaha. En kalsong. Använd. |
| 4:47 | väntar | du | Jaha. En kalsong. Använd. |
| 4:47 | skratt | du | kvarnen spottar |
| 4:48 | händelse | tagitUrPrint | sak=kruka n=1 |
| 4:48 | väntar | värld:TUUT TUUT! | TUUT TUUT! |
| 4:48 | paket |  | tanke → ge |
| 4:48 | tanke | du | Flaggan är uppe. Rolf har lämnat något. |
| 4:48 | väntar | du | Flaggan är uppe. Rolf har lämnat något. |
| 4:48 | väntar |  | (läget ändras) |
| 4:48 | skratt | du | falsk tuta |
| 4:49 | sak | du | Flaggan är uppe. Rolf har lämnat något. |
| 4:49 | notis | tanke | 💭 Flaggan är uppe. Rolf har lämnat något. |
| 4:49 | röst | du | Flaggan är uppe. Rolf har lämnat något. · STORY |
| 4:52 | klar | du | Flaggan är uppe. Rolf har lämnat något. |
| 4:54 | skratt | du | däcket rullar iväg |
| 4:54 | sak |  | (läget ändras) |
| 4:54 | brev | rolf | rolf:0 |
| 4:54 | klar |  | (läget ändras) |
| 4:59 | aliSalt | ali | 105 |
| 5:10 | struken | du | Jaha. En kalsong. Använd. |
| 5:10 | struken | värld:TUUT TUUT! | TUUT TUUT! |
| 5:13 | väntar | rolf | Såg att du printar grejer. Kan du göra en sån hä? Kall öl ä viktigt. /Rolf​ |
| 5:13 | paket |  | ge |
| 5:13 | väntar |  | (läget ändras) |
| 5:13 | sak | rolf | Såg att du printar grejer. Kan du göra en sån hä? Kall öl ä viktigt. /Rolf​ |
| 5:13 | lapp | Brev från Rolf | Såg att du printar grejer. Kan du göra en sån hä? Kall öl ä viktigt. /Rolf​ |
| 5:13 | röst | rolf | Såg att du printar grejer. Kan du göra en sån hä? Kall öl ä viktigt. /Rolf​ · STORY |
| 5:13 | händelse | malKlart | id=rolf0-brev del=Dag 2 – Tippen bredvid nasta=rolf0-printa |
| 5:13 | väntar | du | Printa ölhållare med kylklamp. |
| 5:13 | MÅL |  | Printa ölhållare med kylklamp |
| 5:15 | målruta |  | Printa ölhållare med kylklamp |
| 5:18 | händelse | printStart | sak=olhallare |
| 5:18 | händelse | malKlart | id=rolf0-printa del=Dag 2 – Tippen bredvid nasta=rolf0-ge |
| 5:18 | väntar | du | Ge Rolf ölhållare med kylklamp. |
| 5:18 | MÅL |  | Ge Rolf ölhållare med kylklamp |
| 5:19 | toast | fel | Ingen ström – trampa cykeln |
| 5:19 | klar | rolf | Såg att du printar grejer. Kan du göra en sån hä? Kall öl ä viktigt. /Rolf​ |
| 5:19 | händelse | brevLast | id=rolf:0 |
| 5:20 | målruta |  | Ge Rolf ölhållare med kylklamp |
| 5:21 | struken | du | Printa ölhållare med kylklamp. |
| 5:21 | sak | du | Ge Rolf ölhållare med kylklamp. |
| 5:21 | pil |  | Ge Rolf ölhållare med kylklamp |
| 5:21 | röst | du | Ge Rolf ölhållare med kylklamp. · MÅL |
| 5:22 | kvittens-bock |  | ✓ Printa ölhållare med kylklamp |
| 5:22 | toast | guld | ✅ |
| 5:22 | händelse | printKlar | sak=olhallare n=1 |
| 5:23 | händelse | tagitUrPrint | sak=olhallare n=1 |
| 5:23 | klar | du | Ge Rolf ölhållare med kylklamp. |
| 5:25 | sak |  | (läget ändras) |
| 5:26 | klar |  | (läget ändras) |
| 5:26 | struken | mamma | Har du frusit än? |
| 5:30 | upplåst | skrivare | trim_skrivare |
| 5:30 | brott | UPPLÅST | trim_skrivare (skrivare 60 av 60) |
| 5:30 | händelse | upplast | id=trim_skrivare flask=skrivare |
| 5:30 | paket |  | sms |
| 5:30 | väntar | ali | Ali här. Skrivartrim. Jag skruvade på min egen skrivare i natt. Den går fortare nu. Nästan för fort. |
| 5:31 | sak | du | Kvarnen står och väntar för att hållaren är full. Om den rymde fler rullar kunde den mala hela tiden. |
| 5:31 | notis | tanke | 💭 Kvarnen står och väntar för att hållaren är full. Om den rymde fler rullar kunde den mala hela tiden. |
| 5:31 | röst | du | Kvarnen står och väntar för att hållaren är full. Om den rymde fler rullar kunde den mala hela tiden. · STORY |
| 5:35 | väntar | bud | (tips) |
| 5:40 | klar | du | Kvarnen står och väntar för att hållaren är full. Om den rymde fler rullar kunde den mala hela tiden. |
| 5:40 | händelse | lagtIPostlada | sak=olhallare rolf=0 jobb=false |
| 5:40 | struken | kedja | rolf0 |
| 5:40 | paket |  | tanke |
| 5:40 | tanke | du | Flaggan uppe. Nu får Rolf hämta den. |
| 5:40 | väntar | du | Flaggan uppe. Nu får Rolf hämta den. |
| 5:40 | händelse | malKlart | id=rolf0-ge del=Dag 2 – Tippen bredvid nasta=vindsnurra |
| 5:40 | struken | du | Flaggan uppe. Nu får Rolf hämta den. |
| 5:40 | väntar | du | En vindsnurra på skjulets tak. Då blir det ström när det blåser. |
| 5:40 | MÅL |  | Trampa, printa och sälj |
| 5:42 | sak | bud | (tips) |
| 5:42 | struken | du | Klart! Nu lägger jag den i Rolfs brevlåda vid grinden. |
| 5:43 | målruta |  | Trampa, printa och sälj |
| 5:43 | klar | bud | (tips) |
| 5:44 | kvittens-bock |  | ✓ Ge Rolf ölhållare med kylklamp |
| 5:45 | sak | du | En vindsnurra på skjulets tak. Då blir det ström när det blåser. |
| 5:45 | pil |  | Trampa, printa och sälj |
| 5:45 | notis | tanke | 💭 En vindsnurra på skjulets tak. Då blir det ström när det blåser. |
| 5:45 | röst | du | En vindsnurra på skjulets tak. Då blir det ström när det blåser. · MÅL |
| 5:51 | klar | du | En vindsnurra på skjulets tak. Då blir det ström när det blåser. |
| 5:59 | sak | ali | Ali här. Rullställ. Fyra rullar i stället för en. Har ett på hyllan. |
| 5:59 | sms | ali | Ali här. Rullställ. Fyra rullar i stället för en. Har ett på hyllan. |
| 5:59 | sms-bubbla | ali | Ali här. Rullställ. Fyra rullar i stället för en. Har ett på hyllan. |
| 5:59 | röst | ali | Ali här. Rullställ. Fyra rullar i stället för en. Har ett på hyllan. · STORY |
| 6:04 | klar | ali | Ali här. Rullställ. Fyra rullar i stället för en. Har ett på hyllan. |
| 6:07 | händelse | printStart | sak=kruka |
| 6:10 | toast | guld | ✅ |
| 6:10 | händelse | printKlar | sak=kruka n=7 |
| 6:45 | händelse | tagitUrPrint | sak=kruka n=1 |
| 6:48 | sak | ali | Ali här. Skrivartrim. Jag skruvade på min egen skrivare i natt. Den går fortare nu. Nästan för fort. |
| 6:48 | sms | ali | Ali här. Skrivartrim. Jag skruvade på min egen skrivare i natt. Den går fortare nu. Nästan för fort. |
| 6:48 | sms-bubbla | ali | Ali här. Skrivartrim. Jag skruvade på min egen skrivare i natt. Den går fortare nu. Nästan för fort. |
| 6:48 | röst | ali | Ali här. Skrivartrim. Jag skruvade på min egen skrivare i natt. Den går fortare nu. Nästan för fort. · STORY |
| 6:51 | paket |  | tanke |
| 6:51 | tanke | du | Jaha, Rolf har hämtat en ölhållare med kylklamp. |
| 6:51 | väntar | du | Jaha, Rolf har hämtat en ölhållare med kylklamp. |
| 6:56 | röst | ali | Rolf gav mig en kanna. Som min farmors. Jag ritade en sak åt honom. Säg inget, han gråter lätt. · STORY |
| 6:56 | butiksbubbla | ali | Rolf gav mig en kanna. Som min farmors. Jag ritade en sak åt honom. Säg inget, han gråter lätt. |
| 6:58 | aliSalt | ali | 105 |
| 7:00 | klar | ali | Ali här. Skrivartrim. Jag skruvade på min egen skrivare i natt. Den går fortare nu. Nästan för fort. |
| 7:07 | skratt | du | däcket rullar iväg |
| 7:11 | sak | du | Jaha, Rolf har hämtat en ölhållare med kylklamp. |
| 7:11 | notis | tanke | 💭 Jaha, Rolf har hämtat en ölhållare med kylklamp. |
| 7:11 | röst | du | Jaha, Rolf har hämtat en ölhållare med kylklamp. · REAKTION |
| 7:13 | händelse | printStart | sak=kruka |
| 7:13 | skratt | du | falsk tuta |
| 7:14 | toast | fel | Ingen ström – trampa cykeln |
| 7:15 | klar | du | Jaha, Rolf har hämtat en ölhållare med kylklamp. |
| 7:18 | toast | guld | ✅ |
| 7:18 | händelse | printKlar | sak=kruka n=8 |
| 7:18 | händelse | tagitUrPrint | sak=kruka n=1 |
| 7:30 | aliSalt | ali | 105 |
| 7:43 | händelse | printStart | sak=kruka |
| 7:45 | toast | guld | ✅ |
| 7:45 | händelse | printKlar | sak=kruka n=9 |
| 7:46 | händelse | tagitUrPrint | sak=kruka n=1 |
| 7:57 | aliSalt | ali | 105 |
| 8:10 | händelse | printStart | sak=kruka |
| 8:11 | upplåst | trampa | vindsnurra |
| 8:11 | brott | UPPLÅST | vindsnurra (trampa 28 av 6) |
| 8:11 | händelse | upplast | id=vindsnurra flask=trampa |
| 8:11 | paket |  | tanke → sms |
| 8:11 | tanke | du | Mina ben är slut. Det blåser hela tiden här ute. Tänk om vinden kunde trampa åt mig. |
| 8:11 | väntar | du | Mina ben är slut. Det blåser hela tiden här ute. Tänk om vinden kunde trampa åt mig. |
| 8:11 | väntar | ali | Ali här. Vindsnurra till cykeln. Vinden trampar åt dig. Den är lat, men den jobbar gratis. |
| 8:13 | sak | du | Mina ben är slut. Det blåser hela tiden här ute. Tänk om vinden kunde trampa åt mig. |
| 8:13 | notis | tanke | 💭 Mina ben är slut. Det blåser hela tiden här ute. Tänk om vinden kunde trampa åt mig. |
| 8:13 | röst | du | Mina ben är slut. Det blåser hela tiden här ute. Tänk om vinden kunde trampa åt mig. · STORY |
| 8:14 | toast | guld | ✅ |
| 8:14 | händelse | printKlar | sak=kruka n=10 |
| 8:14 | händelse | tagitUrPrint | sak=kruka n=1 |
| 8:20 | klar | du | Mina ben är slut. Det blåser hela tiden här ute. Tänk om vinden kunde trampa åt mig. |
| 8:26 | aliSalt | ali | 105 |
| 8:28 | sak | ali | Ali här. Vindsnurra till cykeln. Vinden trampar åt dig. Den är lat, men den jobbar gratis. |
| 8:28 | sms | ali | Ali här. Vindsnurra till cykeln. Vinden trampar åt dig. Den är lat, men den jobbar gratis. |
| 8:28 | sms-bubbla | ali | Ali här. Vindsnurra till cykeln. Vinden trampar åt dig. Den är lat, men den jobbar gratis. |
| 8:28 | röst | ali | Ali här. Vindsnurra till cykeln. Vinden trampar åt dig. Den är lat, men den jobbar gratis. · STORY |
| 8:35 | klar | ali | Ali här. Vindsnurra till cykeln. Vinden trampar åt dig. Den är lat, men den jobbar gratis. |
| 8:39 | struken | info:guld | 3D-modell köpt – printa vindsnurra till skjultaket |
| 8:39 | händelse | kopt | sak=vindsnurra |
| 8:51 | händelse | printStart | sak=byggsats:vindsnurra |
| 8:54 | toast | fel | Ingen ström – trampa cykeln |
| 8:57 | händelse | printKlar | sak=byggsats:vindsnurra n=1 |
| 8:57 | toast | guld | ✅ |
| 8:57 | väntar | info:guld | 🌬️ Vindsnurran ska upp på skjulets tak. |
| 8:57 | händelse | tagitUrPrint | sak=byggsats:vindsnurra n=1 |
| 8:57 | sak | info:guld | 🌬️ Vindsnurran ska upp på skjulets tak. |
| 8:57 | kvitto-visas | info:guld | 🌬️ Vindsnurran ska upp på skjulets tak. |
| 8:57 | toast | guld | 🌬️ Vindsnurran ska upp på skjulets tak. |
| 8:59 | klar | info:guld | 🌬️ Vindsnurran ska upp på skjulets tak. |
| 9:09 | händelse | placerat | sak=vindsnurra |
| 9:09 | kvittens | du | Den snurrar! Långsamt. Men den snurrar. |
| 9:09 | varför-köad | du | Om det regnar i natt drunknar jag. Ett tak. |
| 9:09 | väntar | du | Den snurrar! Långsamt. Men den snurrar. |
| 9:09 | väntar | info:guld | 🌬️ Vindsnurran sitter på taket – den trampar cykeln åt mig när det blåser |
| 9:09 | monterat | du | byggsats:vindsnurra |
| 9:09 | händelse | monterat | sak=vindsnurra |
| 9:09 | sak | du | Den snurrar! Långsamt. Men den snurrar. |
| 9:09 | notis | tanke | 💭 Den snurrar! Långsamt. Men den snurrar. |
| 9:09 | röst | du | Den snurrar! Långsamt. Men den snurrar. · STORY |
| 9:09 | händelse | malKlart | id=vindsnurra del=Dag 2 – Tippen bredvid nasta=n1-bygg-dorr-skjulet |
| 9:09 | väntar | du | Det drar från dörrhålet. En dörr kan jag printa. |
| 9:09 | MÅL |  | Bygg en dörr till skjulet |
| 9:12 | målruta |  | Bygg en dörr till skjulet |
| 9:13 | klar | du | Den snurrar! Långsamt. Men den snurrar. |
| 9:15 | sak | du | Det drar från dörrhålet. En dörr kan jag printa. |
| 9:15 | pil |  | Bygg en dörr till skjulet |
| 9:15 | notis | tanke | 💭 Det drar från dörrhålet. En dörr kan jag printa. |
| 9:15 | röst | du | Det drar från dörrhålet. En dörr kan jag printa. · MÅL |
| 9:16 | nick |  | nick:29 |
| 9:19 | klar | du | Det drar från dörrhålet. En dörr kan jag printa. |
| 9:19 | struken | info:guld | 🌬️ Vindsnurran sitter på taket – den trampar cykeln åt mig när det blåser |
| 9:27 | struken | info:guld | 3D-modell köpt – printa dörr |
| 9:27 | händelse | kopt | sak=dorr |
| 9:40 | händelse | printStart | sak=byggsats:dorr |
| 9:43 | toast | bra | Del 1 av 2 klar |
| 9:43 | väntar | notis:Storebrors skrivare: Del 1 av 2 klar | Storebrors skrivare: Del 1 av 2 klar |
| 9:44 | sak | notis:Storebrors skrivare: Del 1 av 2 klar | Storebrors skrivare: Del 1 av 2 klar |
| 9:44 | notis | bra | Storebrors skrivare: Del 1 av 2 klar |
| 9:46 | klar | notis:Storebrors skrivare: Del 1 av 2 klar | Storebrors skrivare: Del 1 av 2 klar |
| 9:47 | händelse | printKlar | sak=byggsats:dorr n=1 |
| 9:47 | toast | guld | ✅ |
| 10:39 | händelse | tagitUrPrint | sak=byggsats:dorr n=1 |
| 10:39 | paket |  | sms |
| 10:39 | väntar | ali | Ali här. Jag har inte sovit. Inte på grund av AI:n. På grund av dig. Du bygger saker av sopor. Jag har en hel butik och bygger ingenting. Det ska ändras. Kanske. Troligen. |
| 10:42 | skratt | du | falsk tuta |
| 10:47 | väntar | info:guld | Dörr på plats! Trivsel +8 |
| 10:47 | sak | info:guld | Dörr på plats! Trivsel +8 |
| 10:47 | kvitto-visas | info:guld | Dörr på plats! Trivsel +8 |
| 10:47 | toast | guld | Dörr på plats! Trivsel +8 |
| 10:47 | händelse | malKlart | id=n1-bygg-dorr-skjulet del=Dag 2 – Tippen bredvid nasta=sov2 |
| 10:47 | paket |  | lapp |
| 10:47 | väntar | du | Nu vet Ali att jag bor HÄR. Taket läcker. I morgon. |
| 10:47 | paket |  | sms |
| 10:47 | väntar | bror | Mamma ringde mig fyra gånger förresten. Snyggt jobbat 😂 |
| 10:47 | skratt | bror | Mamma ringde mig fyra gånger förresten. |
| 10:47 | väntar | du | Klart för idag – sov när du vill. |
| 10:47 | MÅL |  | Klart för idag – sov när du vill |
| 10:49 | klar | info:guld | Dörr på plats! Trivsel +8 |
| 10:50 | målruta |  | Klart för idag – sov när du vill |
| 10:51 | kvittens-bock |  | ✓ Bygg en dörr till skjulet |
| 10:51 | sak | du | Klart för idag – sov när du vill. |
| 10:51 | pil |  | Klart för idag – sov när du vill |
| 10:51 | röst | du | Klart för idag – sov när du vill. · MÅL |
| 10:54 | klar | du | Klart för idag – sov när du vill. |
| 10:54 | väntar | notis:🌇 Klockan är 21. Ali slår igen luckan.  | 🌇 Klockan är 21. Ali slår igen luckan. Dagens jobb är klart – gå in i skjulet och sov i sängen. |
| 10:56 | sak | du | Nu vet Ali att jag bor HÄR. Taket läcker. I morgon. |
| 10:56 | kvallsrad | du | Nu vet Ali att jag bor HÄR. Taket läcker. I morgon. |
| 10:56 | klar | du | Nu vet Ali att jag bor HÄR. Taket läcker. I morgon. |
| 10:56 | scenInfo | gard | Lite skräp ramlade av flaket på gården |
| 11:11 | nattkort | du | 🌙 Dag 2 är slut. God natt. zzz… Nu vet Ali att jag bor HÄR. Taket läcker. I morgon. DAGENS PRINTAR Blomkruka × 9 Ölhållare med kylklamp × 1 Totalt 10 printar � |

<details><summary>Botens handlingar dag 2</summary>

- 0:00 — dag 2 börjar — (215 kr)
- 0:08 popup: "FORTSÄTT" (215 kr)
- 0:18 nybörjaren ser ingen pil – tittar runt (215 kr)
- 0:22 tjänar pengar till väntar på flaskhalsen för kvarnmotor: 215/255 kr → printar blomkruka (105 kr) (215 kr)
- 0:23 gå till fel håll en bit (4 m) (215 kr)
- 0:37 plockar 6 skräp på gården (bär max 6) (215 kr)
- 0:50 gå till kvarnen (34 m) (215 kr)
- 0:57 gå till skrivaren (3 m) (215 kr)
- 0:58 printar Blomkruka (215 kr)
- 1:01 gå till cykeln (1 m) (215 kr)
- 1:03 tar ut 1 st ur skrivaren (215 kr)
- 1:13 gå till Ali (27 m) (215 kr)
- 1:13 öppnar Alis butik – sälja (215 kr)
- 1:15 säljer hos Ali: +105 kr (320 kr)
- 1:17 tjänar pengar till väntar på flaskhalsen för kvarnmotor: 320/360 kr → printar blomkruka (105 kr) (320 kr)
- 1:26 gå till skrivaren (25 m) (320 kr)
- 1:28 printar Blomkruka (320 kr)
- 1:31 tar ut 1 st ur skrivaren (320 kr)
- 1:40 gå till Ali (25 m) (320 kr)
- 1:40 öppnar Alis butik – sälja (320 kr)
- 1:42 säljer hos Ali: +105 kr (425 kr)
- 1:44 tjänar pengar till väntar på flaskhalsen för kvarnmotor: 425/465 kr → printar blomkruka (105 kr) (425 kr)
- 2:00 plockar 5 skräp på gården (bär max 6) (425 kr)
- 2:12 gå till kvarnen (32 m) (425 kr)
- 2:18 gå till skrivaren (3 m) (425 kr)
- 2:20 printar Blomkruka (425 kr)
- 2:22 gå till cykeln (1 m) (425 kr)
- 2:25 tar ut 1 st ur skrivaren (425 kr)
- 2:35 gå till Ali (27 m) (425 kr)
- 2:35 öppnar Alis butik – sälja (425 kr)
- 2:36 säljer hos Ali: +105 kr (530 kr)
- 2:46 öppnar Alis butik – köpa kvarnmotor (530 kr)
- 2:48 köper kvarnmotor för 50 kr (480 kr)
- 3:11 gå till skrivaren (25 m) (480 kr)
- 3:13 printar Kvarnmotor (480 kr)
- 3:17 tar ut 1 st ur skrivaren (480 kr)
- 3:22 gå till skruva fast kvarnmotorn (3 m) (480 kr)
- 3:36 nybörjaren ser ingen pil – tittar runt (480 kr)
- 3:46 gå till Rolfs sopsäck (16 m) (480 kr)
- 3:59 tar på korg (480 kr)
- 3:59 tjänar pengar till väntar på sopbilen (BO): 480/540 kr → printar blomkruka (105 kr) (480 kr)
- 4:04 gå till skrivaren (12 m) (480 kr)
- 4:06 printar Blomkruka (480 kr)
- 4:07 gå till cykeln (1 m) (480 kr)
- 4:11 tar ut 1 st ur skrivaren (480 kr)
- 4:20 gå till Ali (25 m) (480 kr)
- 4:20 öppnar Alis butik – sälja (480 kr)
- 4:22 säljer hos Ali: +105 kr (585 kr)
- 4:29 nybörjaren ser ingen pil – tittar runt (585 kr)
- 4:34 tjänar pengar till väntar på sopbilen (BO): 585/645 kr → printar blomkruka (105 kr) (585 kr)
- 4:43 gå till skrivaren (25 m) (585 kr)
- 4:44 printar Blomkruka (585 kr)
- 4:48 tar ut 1 st ur skrivaren (585 kr)
- 4:57 gå till Ali (25 m) (585 kr)
- 4:57 öppnar Alis butik – sälja (585 kr)
- 4:59 säljer hos Ali: +105 kr (690 kr)
- 5:13 gå till Rolfs postlåda (31 m) (690 kr)
- 5:16 gå till skrivaren (7 m) (690 kr)
- 5:18 printar Ölhållare med kylklamp (690 kr)
- 5:19 gå till cykeln (1 m) (690 kr)
- 5:23 tar ut 1 st ur skrivaren (690 kr)
- 5:32 nybörjaren ser ingen pil – tittar runt (690 kr)
- 5:37 valj olhallare: true, vald olhallare, post {"l":null,"tr":null,"tm":[]}, nummer false (690 kr)
- 5:40 gå till Rolfs postlåda (7 m) (690 kr)
- 5:58 nybörjaren ser ingen pil – tittar runt (690 kr)
- 6:03 tjänar pengar till väntar på flaskhalsen för vindsnurra: 690/730 kr → printar blomkruka (105 kr) (690 kr)
- 6:05 gå till skrivaren (6 m) (690 kr)
- 6:07 printar Blomkruka (690 kr)
- 6:33 plockar 7 skräp på gården (bär max 10) (690 kr)
- 6:43 gå till kvarnen (29 m) (690 kr)
- 6:45 gå till skrivaren (2 m) (690 kr)
- 6:46 tar ut 1 st ur skrivaren (690 kr)
- 6:56 gå till Ali (28 m) (690 kr)
- 6:56 öppnar Alis butik – sälja (690 kr)
- 6:58 säljer hos Ali: +105 kr (795 kr)
- 7:03 tjänar pengar till väntar på flaskhalsen för vindsnurra: 795/835 kr → printar blomkruka (105 kr) (795 kr)
- 7:12 gå till skrivaren (25 m) (795 kr)
- 7:13 printar Blomkruka (795 kr)
- 7:15 gå till cykeln (1 m) (795 kr)
- 7:19 tar ut 1 st ur skrivaren (795 kr)
- 7:28 gå till Ali (25 m) (795 kr)
- 7:28 öppnar Alis butik – sälja (795 kr)
- 7:30 säljer hos Ali: +105 kr (900 kr)
- 7:32 tjänar pengar till väntar på flaskhalsen för vindsnurra: 900/940 kr → printar blomkruka (105 kr) (900 kr)
- 7:41 gå till skrivaren (25 m) (900 kr)
- 7:43 printar Blomkruka (900 kr)
- 7:47 tar ut 1 st ur skrivaren (900 kr)
- 7:56 gå till Ali (25 m) (900 kr)
- 7:56 öppnar Alis butik – sälja (900 kr)
- 7:58 säljer hos Ali: +105 kr (1005 kr)
- 8:00 tjänar pengar till väntar på flaskhalsen för vindsnurra: 1005/1045 kr → printar blomkruka (105 kr) (1005 kr)
- 8:09 gå till skrivaren (25 m) (1005 kr)
- 8:10 printar Blomkruka (1005 kr)
- 8:11 gå till cykeln (1 m) (1005 kr)
- 8:15 tar ut 1 st ur skrivaren (1005 kr)
- 8:24 gå till Ali (25 m) (1005 kr)
- 8:24 öppnar Alis butik – sälja (1005 kr)
- 8:26 säljer hos Ali: +105 kr (1110 kr)
- 8:37 öppnar Alis butik – köpa vindsnurra till skjultaket (1110 kr)
- 8:40 köper vindsnurra för 133 kr (977 kr)
- 8:50 gå till skrivaren (25 m) (977 kr)
- 8:51 printar Vindsnurra till skjultaket (977 kr)
- 8:55 gå till cykeln (1 m) (977 kr)
- 8:58 tar ut 1 st ur skrivaren (977 kr)
- 9:09 gå till sätt vindsnurran på taket (20 m) (977 kr)
- 9:26 gå till Ali (20 m) (977 kr)
- 9:26 öppnar Alis butik – köpa dörr (977 kr)
- 9:28 köper dorr för 120 kr (857 kr)
- 9:38 gå till skrivaren (25 m) (857 kr)
- 9:40 printar Dörr (2 delar) (857 kr)
- 10:23 plockar 10 skräp på gården (bär max 10) (857 kr)
- 10:38 gå till kvarnen (40 m) (857 kr)
- 10:39 gå till skrivaren (1 m) (857 kr)
- 10:39 tar ut 1 st ur skrivaren (857 kr)
- 10:47 gå till skjulet (21 m) (857 kr)
- 11:03 nybörjaren ser ingen pil – tittar runt (857 kr)
- 11:08 gå till sängen (1 m) (857 kr)

</details>

## Dag 3

| Tid | Källa | Vem | Text |
|---|---|---|---|
| 11:11 | vara | ali | ingen |
| 11:11 | händelse | malKlart | id=sov2 del=Dag 2 – Tippen bredvid nasta=rolf1-brev |
| 11:11 | vara | ali | kruka |
| 11:11 | MÅL |  | Vänta på sopbilen. Den lämnar något. |
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
| 0:39 | tanke | du | En hel kanot. Kvarnen skulle äta upp sig själv. |
| 0:39 | väntar | du | En hel kanot. Kvarnen skulle äta upp sig själv. |
| 0:39 | väntar | rolf | Den funkar! Hä. Ta så mycke skräp du vill. /Rolf​ |
| 0:39 | sak | rolf | Den funkar! Hä. Ta så mycke skräp du vill. /Rolf​ |
| 0:39 | lapp | Brev från Rolf | Den funkar! Hä. Ta så mycke skräp du vill. /Rolf​ |
| 0:39 | röst | rolf | Den funkar! Hä. Ta så mycke skräp du vill. /Rolf​ · STORY |
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
| 0:59 | händelse | printKlar | sak=kruka n=11 |
| 0:59 | händelse | tagitUrPrint | sak=kruka n=1 |
| 1:01 | klar | du | …Det här räcker i hundra år. |
| 1:09 | röst | ali | Du printar mina ritningar. Ingen har gjort det förut. Jag är inte rörd. Det är dammet. · STORY |
| 1:09 | butiksbubbla | ali | Du printar mina ritningar. Ingen har gjort det förut. Jag är inte rörd. Det är dammet. |
| 1:11 | aliSalt | ali | 105 |
| 1:25 | händelse | printStart | sak=kruka |
| 1:30 | toast | guld | ✅ |
| 1:30 | händelse | printKlar | sak=kruka n=12 |
| 1:31 | händelse | tagitUrPrint | sak=kruka n=1 |
| 1:42 | aliSalt | ali | 105 |
| 1:52 | väntar | värld:TUUT! Tjena! | TUUT! Tjena! |
| 1:52 | sak | värld:TUUT! Tjena! | TUUT! Tjena! |
| 1:52 | bubbla |  | TUUT! Tjena! |
| 1:55 | klar | värld:TUUT! Tjena! | TUUT! Tjena! |
| 1:56 | händelse | printStart | sak=kruka |
| 2:01 | toast | guld | ✅ |
| 2:01 | händelse | printKlar | sak=kruka n=13 |
| 2:02 | händelse | tagitUrPrint | sak=kruka n=1 |
| 2:06 | väntar | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått en DÖRR. Och vindsnurra till skjultaket. Mer säger jag inte. Gunnar vet. |
| 2:06 | radio | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått en DÖRR. Och vindsnurra till skjultaket. Mer säger jag inte. Gunnar vet. |
| 2:06 | skratt | du | Radio-Kjelle |
| 2:06 | sak | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått en DÖRR. Och vindsnurra till skjultaket. Mer säger jag inte. Gunnar vet. |
| 2:06 | notis |  | 📻 Radio Tippen: Radio Tippen, Kjelle här. Skjulet vid tippen har fått en DÖRR. Och vindsnurra till skjultaket. Mer säger jag inte. Gunnar vet. |
| 2:06 | röst | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått en DÖRR. Och vindsnurra till skjultaket. Mer säger jag inte. Gunnar vet. · REAKTION |
| 2:13 | aliSalt | ali | 105 |
| 2:16 | väntar | bud | (tips) |
| 2:16 | klar | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått en DÖRR. Och vindsnurra till skjultaket. Mer säger jag inte. Gunnar vet. |
| 2:18 | sak | bud | (tips) |
| 2:20 | klar | bud | (tips) |
| 2:22 | meddelande | mamma | Vem är den där Ali? Är han snäll? Betalar han dig ordentligt? |
| 2:23 | röst | mamma | Vem är den där Ali? Är han snäll? Betalar han dig ordentligt? · STORY |
| 2:31 | paket |  | sms |
| 2:31 | väntar | mamma | Typ? Jag ringer honom. Vad heter butiken? Jag hittar den. |
| 2:38 | händelse | brevLast | id=m_ali |
| 2:40 | sak | mamma | Typ? Jag ringer honom. Vad heter butiken? Jag hittar den. |
| 2:40 | sms | mamma | Typ? Jag ringer honom. Vad heter butiken? Jag hittar den. |
| 2:40 | sms-bubbla | mamma | Typ? Jag ringer honom. Vad heter butiken? Jag hittar den. |
| 2:40 | röst | mamma | Typ? Jag ringer honom. Vad heter butiken? Jag hittar den. · STORY |
| 2:45 | klar | mamma | Typ? Jag ringer honom. Vad heter butiken? Jag hittar den. |
| 2:49 | händelse | printStart | sak=kruka |
| 2:55 | toast | guld | ✅ |
| 2:55 | händelse | printKlar | sak=kruka n=14 |
| 3:25 | skratt | du | falsk tuta |
| 3:34 | paket |  | ge |
| 3:34 | väntar |  | (läget ändras) |
| 3:35 | sak |  | (läget ändras) |
| 3:35 | brev | rolf | rolf:1 |
| 3:35 | klar |  | (läget ändras) |
| 3:36 | väntar | mamma | Har du sovit nåt? Du har väl tandborste? Och äter du? Svara inte, jag vet att du är arg. ❤️ /Mamma |
| 3:47 | skratt | du | falsk tuta |
| 3:47 | väntar | värld:TUUT! Tjena! | TUUT! Tjena! |
| 3:49 | sak | värld:TUUT! Tjena! | TUUT! Tjena! |
| 3:49 | bubbla |  | TUUT! Tjena! |
| 3:50 | händelse | tagitUrPrint | sak=kruka n=1 |
| 3:52 | klar | värld:TUUT! Tjena! | TUUT! Tjena! |
| 4:03 | aliSalt | ali | 105 |
| 4:17 | väntar | rolf | Nämen. Kajsa knuffa ner min flasköppnare i tippen. Kan du göra en ny, mä magnet? /Rolf​ |
| 4:17 | paket |  | ge |
| 4:17 | väntar |  | (läget ändras) |
| 4:17 | sak | rolf | Nämen. Kajsa knuffa ner min flasköppnare i tippen. Kan du göra en ny, mä magnet? /Rolf​ |
| 4:17 | lapp | Brev från Rolf | Nämen. Kajsa knuffa ner min flasköppnare i tippen. Kan du göra en ny, mä magnet? /Rolf​ |
| 4:17 | röst | rolf | Nämen. Kajsa knuffa ner min flasköppnare i tippen. Kan du göra en ny, mä magnet? /Rolf​ · STORY |
| 4:17 | händelse | malKlart | id=rolf1-brev del=Dag 3 – En skrivare till och taket nasta=n2-hamta-skrap |
| 4:17 | väntar | du | Nyckeln till tippen. Där ligger skräpet i högar. |
| 4:17 | MÅL |  | Hämta 5 skräp på soptippen |
| 4:20 | målruta |  | Hämta 5 skräp på soptippen |
| 4:22 | händelse | malKlart | id=n2-hamta-skrap del=Dag 3 – En skrivare till och taket nasta=rolf1-printa |
| 4:22 | struken | kedja | tippen |
| 4:22 | väntar | du | Printa flasköppnare med magnet. |
| 4:23 | MÅL |  | Printa flasköppnare med magnet |
| 4:25 | klar | rolf | Nämen. Kajsa knuffa ner min flasköppnare i tippen. Kan du göra en ny, mä magnet? /Rolf​ |
| 4:25 | händelse | brevLast | id=rolf:1 |
| 4:25 | målruta |  | Printa flasköppnare med magnet |
| 4:26 | kvittens-bock |  | ✓ Hämta 5 skräp på soptippen |
| 4:27 | struken | du | Nyckeln till tippen. Där ligger skräpet i högar. |
| 4:27 | sak | du | Printa flasköppnare med magnet. |
| 4:27 | pil |  | Printa flasköppnare med magnet |
| 4:27 | röst | du | Printa flasköppnare med magnet. · MÅL |
| 4:27 | nick |  | nick:33 |
| 4:29 | klar | du | Printa flasköppnare med magnet. |
| 4:31 | sak |  | (läget ändras) |
| 4:31 | klar |  | (läget ändras) |
| 4:40 | väntar | mamma | Var är du? |
| 4:42 | händelse | printStart | sak=flaskoppnare |
| 4:42 | händelse | malKlart | id=rolf1-printa del=Dag 3 – En skrivare till och taket nasta=rolf1-ge |
| 4:42 | väntar | du | Ge Rolf flasköppnare med magnet. |
| 4:42 | målruta |  | Ge Rolf flasköppnare med magnet |
| 4:42 | MÅL |  | Ge Rolf flasköppnare med magnet |
| 4:42 | sak | du | Ge Rolf flasköppnare med magnet. |
| 4:42 | pil |  | Ge Rolf flasköppnare med magnet |
| 4:42 | röst | du | Ge Rolf flasköppnare med magnet. · MÅL |
| 4:45 | klar | du | Ge Rolf flasköppnare med magnet. |
| 4:46 | toast | guld | ✅ |
| 4:46 | händelse | printKlar | sak=flaskoppnare n=1 |
| 4:46 | kvittens-bock |  | ✓ Printa flasköppnare med magnet |
| 4:46 | händelse | tagitUrPrint | sak=flaskoppnare n=1 |
| 5:01 | händelse | lagtIPostlada | sak=flaskoppnare rolf=1 jobb=false |
| 5:01 | struken | kedja | rolf1 |
| 5:01 | paket |  | tanke |
| 5:01 | tanke | du | Flaggan uppe. Nu får Rolf hämta den. |
| 5:01 | väntar | du | Flaggan uppe. Nu får Rolf hämta den. |
| 5:01 | sak | du | Flaggan uppe. Nu får Rolf hämta den. |
| 5:01 | notis | tanke | 💭 Flaggan uppe. Nu får Rolf hämta den. |
| 5:01 | röst | du | Flaggan uppe. Nu får Rolf hämta den. · REAKTION |
| 5:01 | händelse | malKlart | id=rolf1-ge del=Dag 3 – En skrivare till och taket nasta=kopBatteri |
| 5:01 | väntar | du | Ali har ett gammalt bilbatteri. Då sparar jag strömmen. |
| 5:01 | MÅL |  | Printa och sälj |
| 5:04 | målruta |  | Printa och sälj |
| 5:04 | klar | du | Flaggan uppe. Nu får Rolf hämta den. |
| 5:05 | kvittens-bock |  | ✓ Ge Rolf flasköppnare med magnet |
| 5:07 | sak | du | Ali har ett gammalt bilbatteri. Då sparar jag strömmen. |
| 5:07 | pil |  | Printa och sälj |
| 5:07 | notis | tanke | 💭 Ali har ett gammalt bilbatteri. Då sparar jag strömmen. |
| 5:07 | röst | du | Ali har ett gammalt bilbatteri. Då sparar jag strömmen. · MÅL |
| 5:12 | klar | du | Ali har ett gammalt bilbatteri. Då sparar jag strömmen. |
| 5:19 | händelse | printStart | sak=kruka |
| 5:21 | strömdipp | du | cykelbatteri |
| 5:21 | paket |  | tanke |
| 5:21 | tanke | du | Den stannar. Strömmen räcker inte till alla maskiner. |
| 5:21 | väntar | du | Den stannar. Strömmen räcker inte till alla maskiner. |
| 5:21 | toast | fel | Ingen ström – maskinerna drar mer än du får in. Bygg en solpanel |
| 5:36 | upplåst | strom | cykelbatteri |
| 5:36 | brott | UPPLÅST | cykelbatteri (strom 55 av 15) |
| 5:36 | händelse | upplast | id=cykelbatteri flask=strom |
| 5:36 | paket |  | tanke → sms |
| 5:36 | tanke | du | Powerbanken räcker till en nyckelring. Sen är det trampa igen. |
| 5:36 | väntar | du | Powerbanken räcker till en nyckelring. Sen är det trampa igen. |
| 5:36 | väntar | ali | Ali här. Bilbatteriet ur min gamla Volvo står i lagret. Det sparar mer ström än powerbanken. |
| 5:37 | paket |  | tanke |
| 5:37 | tanke | du | Jaha, Rolf har hämtat en flasköppnare med magnet. |
| 5:37 | väntar | du | Jaha, Rolf har hämtat en flasköppnare med magnet. |
| 5:46 | väntar | rolf | Morgonbulle på kontoret me polarna. Bengt har ny keps. Vi pratade om den i en timme. Den e grön. /R |
| 5:46 | väntar | mamma | Har du sovit nåt? Du har väl tandborste? Och äter du? Svara inte, jag vet att du är arg. ❤️ /Mamma |
| 5:54 | paket |  | tanke |
| 5:54 | tanke | du | En toffla. Bara en. |
| 5:54 | väntar | du | En toffla. Bara en. |
| 5:54 | skratt | du | kvarnen spottar |
| 5:55 | toast | guld | ✅ |
| 5:55 | händelse | printKlar | sak=kruka n=15 |
| 5:56 | händelse | tagitUrPrint | sak=kruka n=1 |
| 5:57 | struken | du | Jaha, Rolf har hämtat en flasköppnare med magnet. |
| 5:59 | väntar | värld:TUUT TUUT! | TUUT TUUT! |
| 6:07 | sak | ali | Ali här. Bilbatteriet ur min gamla Volvo står i lagret. Det sparar mer ström än powerbanken. |
| 6:07 | sms | ali | Ali här. Bilbatteriet ur min gamla Volvo står i lagret. Det sparar mer ström än powerbanken. |
| 6:07 | sms-bubbla | ali | Ali här. Bilbatteriet ur min gamla Volvo står i lagret. Det sparar mer ström än powerbanken. |
| 6:07 | röst | ali | Ali här. Bilbatteriet ur min gamla Volvo står i lagret. Det sparar mer ström än powerbanken. · STORY |
| 6:08 | aliSalt | ali | 105 |
| 6:15 | klar | ali | Ali här. Bilbatteriet ur min gamla Volvo står i lagret. Det sparar mer ström än powerbanken. |
| 6:17 | struken | du | En toffla. Bara en. |
| 6:19 | toast | guld | 🔋 Bilbatteriet ska kopplas in på cykeln. |
| 6:19 | händelse | kopt | sak=cykelbatteri |
| 6:19 | röst | ali | Ali här. Batteriet ur min gamla Volvo. Bilen dog 2016. Batteriet vägrade. · STORY |
| 6:19 | butiksbubbla | ali | Ali här. Batteriet ur min gamla Volvo. Bilen dog 2016. Batteriet vägrade. |
| 6:25 | struken | värld:TUUT TUUT! | TUUT TUUT! |
| 6:30 | struken | kedja | dag2 |
| 6:30 | väntar | info:guld | 🔋 Bilbatteriet är inkopplat – skrivaren printar klart även när du slutar trampa |
| 6:30 | monterat | du | byggsats:cykelbatteri |
| 6:30 | händelse | monterat | sak=cykelbatteri |
| 6:30 | sak | info:guld | 🔋 Bilbatteriet är inkopplat – skrivaren printar klart även när du slutar trampa |
| 6:30 | kvitto-visas | info:guld | 🔋 Bilbatteriet är inkopplat – skrivaren printar klart även när du slutar trampa |
| 6:30 | toast | guld | 🔋 Bilbatteriet är inkopplat – skrivaren printar klart även när du slutar trampa |
| 6:30 | händelse | malKlart | id=kopBatteri del=Dag 3 – En skrivare till och taket nasta=ryggkorg |
| 6:30 | väntar | du | Jag springer för mycket. Med en ryggkorg bär jag tio saker. |
| 6:30 | MÅL |  | Plocka skräp och mal det |
| 6:30 | upplåst | bara | ryggkorg |
| 6:30 | brott | UPPLÅST | ryggkorg (bara 6 av 3) |
| 6:30 | händelse | upplast | id=ryggkorg flask=bara |
| 6:30 | paket |  | tanke → sms |
| 6:30 | tanke | du | Säcken är full igen. Jag behöver något att bära mer i. |
| 6:30 | väntar | du | Säcken är full igen. Jag behöver något att bära mer i. |
| 6:30 | väntar | ali | Ali här. En ryggkorg. AI:n ritade den efter en bild på min mormor. Den rymmer tio. |
| 6:32 | klar | info:guld | 🔋 Bilbatteriet är inkopplat – skrivaren printar klart även när du slutar trampa |
| 6:33 | målruta |  | Bygg ryggkorgen – bär 10 skräp |
| 6:34 | kvittens-bock |  | ✓ Köp Alis gamla bilbatteri |
| 6:34 | sak | du | Jag springer för mycket. Med en ryggkorg bär jag tio saker. |
| 6:34 | pil |  | Bygg ryggkorgen – bär 10 skräp |
| 6:34 | notis | tanke | 💭 Jag springer för mycket. Med en ryggkorg bär jag tio saker. |
| 6:34 | röst | du | Jag springer för mycket. Med en ryggkorg bär jag tio saker. · MÅL |
| 6:35 | nick |  | nick:36 |
| 6:39 | klar | du | Jag springer för mycket. Med en ryggkorg bär jag tio saker. |
| 6:41 | sak | du | Säcken är full igen. Jag behöver något att bära mer i. |
| 6:41 | notis | tanke | 💭 Säcken är full igen. Jag behöver något att bära mer i. |
| 6:41 | röst | du | Säcken är full igen. Jag behöver något att bära mer i. · STORY |
| 6:46 | klar | du | Säcken är full igen. Jag behöver något att bära mer i. |
| 6:54 | sak | du | Den stannar. Strömmen räcker inte till alla maskiner. |
| 6:54 | notis | tanke | 💭 Den stannar. Strömmen räcker inte till alla maskiner. |
| 6:54 | röst | du | Den stannar. Strömmen räcker inte till alla maskiner. · STORY |
| 6:59 | klar | du | Den stannar. Strömmen räcker inte till alla maskiner. |
| 7:01 | struken | info:guld | 3D-modell köpt – printa ryggkorg |
| 7:01 | händelse | kopt | sak=ryggkorg |
| 7:01 | struken | ali | Ali här. En ryggkorg. AI:n ritade den efter en bild på min mormor. Den rymmer tio. |
| 7:07 | sak | du | Powerbanken räcker till en nyckelring. Sen är det trampa igen. |
| 7:07 | notis | tanke | 💭 Powerbanken räcker till en nyckelring. Sen är det trampa igen. |
| 7:07 | röst | du | Powerbanken räcker till en nyckelring. Sen är det trampa igen. · STORY |
| 7:12 | klar | du | Powerbanken räcker till en nyckelring. Sen är det trampa igen. |
| 7:13 | händelse | printStart | sak=byggsats:ryggkorg |
| 7:19 | toast | bra | Del 1 av 2 klar |
| 7:25 | händelse | printKlar | sak=byggsats:ryggkorg n=1 |
| 7:25 | toast | guld | ✅ |
| 7:25 | väntar | info:guld | Ryggkorg ska jag ha på mig. |
| 7:25 | händelse | tagitUrPrint | sak=byggsats:ryggkorg n=1 |
| 7:25 | paket |  | sms |
| 7:25 | väntar | ali | Ali här. Du printade Ryggkorg från min ritning. Och det FUNKAR? Jag har bara sett sånt på YouTube. |
| 7:25 | sak | info:guld | Ryggkorg ska jag ha på mig. |
| 7:25 | kvitto-visas | info:guld | Ryggkorg ska jag ha på mig. |
| 7:25 | toast | guld | Ryggkorg ska jag ha på mig. |
| 7:26 | hjälp | kontroll | Klick: Klicka för att ta på dig den |
| 7:27 | klar | info:guld | Ryggkorg ska jag ha på mig. |
| 7:29 | väntar | info:guld | 🧺 Ryggkorgen sitter på! Nu bär jag 16 skräp. |
| 7:29 | tog på | du | byggsats:ryggkorg |
| 7:29 | händelse | monterat | sak=ryggkorg |
| 7:29 | sak | info:guld | 🧺 Ryggkorgen sitter på! Nu bär jag 16 skräp. |
| 7:29 | kvitto-visas | info:guld | 🧺 Ryggkorgen sitter på! Nu bär jag 16 skräp. |
| 7:29 | toast | guld | 🧺 Ryggkorgen sitter på! Nu bär jag 16 skräp. |
| 7:29 | händelse | malKlart | id=ryggkorg del=Dag 3 – En skrivare till och taket nasta=n2-bygg-arbetsbord |
| 7:29 | väntar | du | Ett arbetsbord bredvid skrivaren. Skrivare M ska stå på det. |
| 7:29 | MÅL |  | Bygg ett arbetsbord |
| 7:31 | klar | info:guld | 🧺 Ryggkorgen sitter på! Nu bär jag 16 skräp. |
| 7:31 | målruta |  | Bygg ett arbetsbord |
| 7:33 | skratt | du | falsk tuta |
| 7:33 | kvittens-bock |  | ✓ Bygg ryggkorgen – bär 10 skräp |
| 7:33 | sak | du | Ett arbetsbord bredvid skrivaren. Skrivare M ska stå på det. |
| 7:33 | pil |  | Bygg ett arbetsbord |
| 7:33 | notis | tanke | 💭 Ett arbetsbord bredvid skrivaren. Skrivare M ska stå på det. |
| 7:33 | röst | du | Ett arbetsbord bredvid skrivaren. Skrivare M ska stå på det. · MÅL |
| 7:34 | nick |  | nick:37 |
| 7:38 | klar | du | Ett arbetsbord bredvid skrivaren. Skrivare M ska stå på det. |
| 7:41 | struken | info:guld | 3D-modell köpt – printa arbetsbord |
| 7:41 | händelse | kopt | sak=bord |
| 7:46 | hjälp | kontroll | Tab: Dina sms och dagboken |
| 7:53 | händelse | printStart | sak=byggsats:bord |
| 7:54 | väntar | värld:TUUT! Hej grannen! | TUUT! Hej grannen! |
| 8:00 | toast | bra | Del 1 av 3 klar |
| 8:06 | struken | mamma | Har du sovit nåt? Du har väl tandborste? Och äter du? Svara inte, jag vet att du är arg. ❤️ /Mamma |
| 8:07 | toast | bra | Del 2 av 3 klar |
| 8:12 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 8:12 | väntar | notis:Storebrors skrivare: Tornet är tomt – ma | Storebrors skrivare: Tornet är tomt – mal mer så fortsätter den |
| 8:14 | struken | värld:TUUT! Hej grannen! | TUUT! Hej grannen! |
| 8:20 | sak | notis:Storebrors skrivare: Tornet är tomt – ma | Storebrors skrivare: Tornet är tomt – mal mer så fortsätter den |
| 8:20 | notis | fel | Storebrors skrivare: Tornet är tomt – mal mer så fortsätter den |
| 8:22 | klar | notis:Storebrors skrivare: Tornet är tomt – ma | Storebrors skrivare: Tornet är tomt – mal mer så fortsätter den |
| 8:23 | händelse | printKlar | sak=byggsats:bord n=1 |
| 8:23 | toast | guld | ✅ |
| 8:31 | struken | ali | Ali här. Du printade Ryggkorg från min ritning. Och det FUNKAR? Jag har bara sett sånt på YouTube. |
| 8:32 | händelse | tagitUrPrint | sak=byggsats:bord n=1 |
| 8:36 | händelse | placerat | sak=bord |
| 8:36 | händelse | malKlart | id=n2-bygg-arbetsbord del=Dag 3 – En skrivare till och taket nasta=n2-bygg-skrivare-m |
| 8:36 | väntar | du | Skrivare M på bordet. Två skrivare, dubbelt så mycket. |
| 8:36 | målruta |  | Printa och sälj |
| 8:36 | MÅL |  | Printa och sälj |
| 8:36 | upplåst | skrivare | skrivare2 |
| 8:36 | brott | UPPLÅST | skrivare2 (skrivare 624 av 60) |
| 8:36 | händelse | upplast | id=skrivare2 flask=skrivare |
| 8:36 | paket |  | tanke → sms |
| 8:36 | tanke | du | Kvarnen hinner mer än skrivaren. Jag behöver en skrivare till. |
| 8:36 | väntar | du | Kvarnen hinner mer än skrivaren. Jag behöver en skrivare till. |
| 8:36 | väntar | ali | Ali här. Skrivare M har kommit. Två och en halv gånger snabbare. Snabbare än jag. Jag har inte varit snabb sedan 1998. |
| 8:36 | sak | du | Skrivare M på bordet. Två skrivare, dubbelt så mycket. |
| 8:36 | pil |  | Bygg Skrivare M på bordet |
| 8:36 | notis | tanke | 💭 Skrivare M på bordet. Två skrivare, dubbelt så mycket. |
| 8:36 | röst | du | Skrivare M på bordet. Två skrivare, dubbelt så mycket. · MÅL |
| 8:37 | nick |  | nick:38 |
| 8:40 | kvittens-bock |  | ✓ Bygg ett arbetsbord |
| 8:41 | klar | du | Skrivare M på bordet. Två skrivare, dubbelt så mycket. |
| 8:58 | sak | ali | Ali här. Skrivare M har kommit. Två och en halv gånger snabbare. Snabbare än jag. Jag har inte varit snabb sedan 1998. |
| 8:58 | sms | ali | Ali här. Skrivare M har kommit. Två och en halv gånger snabbare. Snabbare än jag. Jag har inte varit snabb sedan 1998. |
| 8:58 | sms-bubbla | ali | Ali här. Skrivare M har kommit. Två och en halv gånger snabbare. Snabbare än jag. Jag har inte varit snabb sedan 1998. |
| 8:58 | röst | ali | Ali här. Skrivare M har kommit. Två och en halv gånger snabbare. Snabbare än jag. Jag har inte varit snabb sedan 1998. · STORY |
| 8:59 | skratt | du | Alis dyr-pling |
| 8:59 | struken | info:guld | 3D-modell köpt – printa skrivare M |
| 8:59 | händelse | kopt | sak=skrivare2 |
| 9:08 | klar | ali | Ali här. Skrivare M har kommit. Två och en halv gånger snabbare. Snabbare än jag. Jag har inte varit snabb sedan 1998. |
| 9:12 | händelse | printStart | sak=byggsats:skrivare2 |
| 9:21 | toast | bra | Del 1 av 5 klar |
| 9:30 | toast | bra | Del 2 av 5 klar |
| 9:39 | toast | bra | Del 3 av 5 klar |
| 9:42 | väntar | mamma | Var är du? |
| 9:48 | toast | bra | Del 4 av 5 klar |
| 9:49 | skratt | du | falsk tuta |
| 9:49 | väntar | värld:TUUT TUUT! | TUUT TUUT! |
| 9:49 | sak | du | Kvarnen hinner mer än skrivaren. Jag behöver en skrivare till. |
| 9:49 | notis | tanke | 💭 Kvarnen hinner mer än skrivaren. Jag behöver en skrivare till. |
| 9:49 | röst | du | Kvarnen hinner mer än skrivaren. Jag behöver en skrivare till. · STORY |
| 9:54 | klar | du | Kvarnen hinner mer än skrivaren. Jag behöver en skrivare till. |
| 9:55 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 10:02 | tanke | du | Fastpressad. Den sitter som i betong. |
| 10:02 | väntar | du | Fastpressad. Den sitter som i betong. |
| 10:02 | tanke | du | Tratten är stor som en kaffekopp. Tunnan är stor som jag. |
| 10:02 | struken | du | Fastpressad. Den sitter som i betong. |
| 10:02 | väntar | du | Tratten är stor som en kaffekopp. Tunnan är stor som jag. |
| 10:02 | sak | du | Tratten är stor som en kaffekopp. Tunnan är stor som jag. |
| 10:02 | notis | tanke | 💭 Tratten är stor som en kaffekopp. Tunnan är stor som jag. |
| 10:02 | röst | du | Tratten är stor som en kaffekopp. Tunnan är stor som jag. · REAKTION |
| 10:03 | väntar | info:fel | Fullt i händerna. |
| 10:07 | klar | du | Tratten är stor som en kaffekopp. Tunnan är stor som jag. |
| 10:07 | sak | info:fel | Fullt i händerna. |
| 10:07 | kvitto-visas | info:fel | Fullt i händerna. |
| 10:07 | toast | fel | Fullt i händerna. |
| 10:09 | klar | info:fel | Fullt i händerna. |
| 10:10 | händelse | printKlar | sak=byggsats:skrivare2 n=1 |
| 10:10 | toast | guld | ✅ |
| 10:11 | struken | värld:TUUT TUUT! | TUUT TUUT! |
| 10:15 | händelse | tagitUrPrint | sak=byggsats:skrivare2 n=1 |
| 10:19 | händelse | placerat | sak=skrivare2 |
| 10:19 | struken | kedja | skrivareM |
| 10:19 | paket |  | tanke |
| 10:19 | tanke | du | Den här måste stå i linjen vid kvarnen, annars når inte slangen. |
| 10:19 | väntar | du | Den här måste stå i linjen vid kvarnen, annars når inte slangen. |
| 10:19 | händelse | malKlart | id=n2-bygg-skrivare-m del=Dag 3 – En skrivare till och taket nasta=n2-lagg-plattak-skjulet |
| 10:19 | lapp-kö | 📱 Storebror | VA?! Du har byggt en skrivare TILL?? Du har typ en printfarm nu. Okej. Det är faktiskt ganska ballt. 🔥 |
| 10:19 | väntar | bror | VA?! Du har byggt en skrivare TILL?? Du har typ en printfarm nu. Okej. Det är faktiskt ganska ballt. 🔥 |
| 10:19 | väntar | du | Det regnar in. Plåt på taket, så slipper jag sova i en pöl. |
| 10:19 | MÅL |  | Lägg plåttak på skjulet |
| 10:19 | målruta |  | Lägg plåttak på skjulet |
| 10:19 | sak | du | Det regnar in. Plåt på taket, så slipper jag sova i en pöl. |
| 10:19 | pil |  | Lägg plåttak på skjulet |
| 10:19 | notis | tanke | 💭 Det regnar in. Plåt på taket, så slipper jag sova i en pöl. |
| 10:19 | röst | du | Det regnar in. Plåt på taket, så slipper jag sova i en pöl. · MÅL |
| 10:20 | nick |  | nick:39 |
| 10:23 | kvittens-bock |  | ✓ Bygg Skrivare M på bordet |
| 10:24 | klar | du | Det regnar in. Plåt på taket, så slipper jag sova i en pöl. |
| 10:42 | struken | info:guld | 3D-modell köpt – printa plåttak |
| 10:42 | händelse | kopt | sak=tak |
| 10:47 | struken | mamma | Var är du? |
| 10:55 | händelse | printStart | sak=byggsats:tak |
| 10:55 | toast | bra | 🔗 Slangen kopplad |
| 10:59 | toast | bra | Del 1 av 3 klar |
| 11:03 | toast | bra | Del 2 av 3 klar |
| 11:05 | toast | fel | Ingen ström – trampa cykeln |
| 11:15 | händelse | printKlar | sak=byggsats:tak n=1 |
| 11:15 | toast | guld | ✅ |
| 11:16 | händelse | tagitUrPrint | sak=byggsats:tak n=1 |
| 11:20 | sak | du | Den här måste stå i linjen vid kvarnen, annars når inte slangen. |
| 11:20 | notis | tanke | 💭 Den här måste stå i linjen vid kvarnen, annars når inte slangen. |
| 11:20 | röst | du | Den här måste stå i linjen vid kvarnen, annars når inte slangen. · STORY |
| 11:23 | väntar | info:guld | Plåttak på plats! Trivsel +12 |
| 11:23 | händelse | malKlart | id=n2-lagg-plattak-skjulet del=Dag 3 – En skrivare till och taket nasta=sov3 |
| 11:23 | paket |  | lapp |
| 11:23 | väntar | du | Nu vet Rolf att jag bor HÄR. Benen orkar inte trampa mer. |
| 11:23 | MÅL |  | Klart för idag – sov när du vill |
| 11:25 | klar | du | Den här måste stå i linjen vid kvarnen, annars når inte slangen. |
| 11:25 | sak | du | (nytt mål i rutan) |
| 11:25 | målruta |  | Klart för idag – sov när du vill |
| 11:25 | pil |  | Klart för idag – sov när du vill |
| 11:25 | klar | du | (nytt mål i rutan) |
| 11:25 | sak | info:guld | Plåttak på plats! Trivsel +12 |
| 11:25 | kvitto-visas | info:guld | Plåttak på plats! Trivsel +12 |
| 11:25 | toast | guld | Plåttak på plats! Trivsel +12 |
| 11:27 | kvittens-bock |  | ✓ Lägg plåttak på skjulet |
| 11:27 | klar | info:guld | Plåttak på plats! Trivsel +12 |
| 11:29 | sak | du | Nu vet Rolf att jag bor HÄR. Benen orkar inte trampa mer. |
| 11:29 | kvallsrad | du | Nu vet Rolf att jag bor HÄR. Benen orkar inte trampa mer. |
| 11:30 | klar | du | Nu vet Rolf att jag bor HÄR. Benen orkar inte trampa mer. |
| 11:30 | väntar | notis:🌇 Klockan är 21. Ali slår igen luckan.  | 🌇 Klockan är 21. Ali slår igen luckan. Dagens jobb är klart – gå in i skjulet och sov i sängen. |
| 11:38 | sak | bror | VA?! Du har byggt en skrivare TILL?? Du har typ en printfarm nu. Okej. Det är faktiskt ganska ballt. 🔥 |
| 11:38 | sms | bror | VA?! Du har byggt en skrivare TILL?? Du har typ en printfarm nu. Okej. Det är faktiskt ganska ballt. 🔥 |
| 11:38 | sms-bubbla | bror | VA?! Du har byggt en skrivare TILL?? Du har typ en printfarm nu. Okej. Det är faktiskt ganska ballt. 🔥 |
| 11:38 | röst | bror | VA?! Du har byggt en skrivare TILL?? Du har typ en printfarm nu. Okej. Det är faktiskt ganska ballt. 🔥 · STORY |
| 11:38 | paket |  | replik |
| 11:38 | väntar | rolf | Hoppa in. Ja ska visa dej en grej. |
| 11:44 | väntar | foto | Tak över huvudet |
| 11:44 | paket |  | tanke |
| 11:44 | tanke | du | I natt somnar jag torr. Det börjar bli ett hem. |
| 11:44 | väntar | du | I natt somnar jag torr. Det börjar bli ett hem. |
| 11:46 | klar | bror | VA?! Du har byggt en skrivare TILL?? Du har typ en printfarm nu. Okej. Det är faktiskt ganska ballt. 🔥 |
| 12:48 | nattkort | du | 🌙 Dag 3 är slut. God natt. zzz… Nu vet Rolf att jag bor HÄR. Benen orkar inte trampa mer. DAGENS PRINTAR Blomkruka × 5 Flasköppnare med magnet × 1 Totalt 6 pri |

<details><summary>Botens handlingar dag 3</summary>

- 0:00 — dag 3 börjar — (857 kr)
- 0:08 popup: "FORTSÄTT" (857 kr)
- 0:19 nybörjaren ser ingen pil – tittar runt (857 kr)
- 0:35 gå till Rolfs postlåda (28 m) (857 kr)
- 0:39 panel: "Rolfs postlåda
Det här låg i l" (917 kr)
- 0:41 gå till sätt nyckeln i låset (3 m) (917 kr)
- 0:49 tjänar pengar till väntar på sopbilen (BO): 917/977 kr → printar blomkruka (105 kr) (917 kr)
- 0:52 gå till skrivaren (7 m) (917 kr)
- 0:53 printar Blomkruka (917 kr)
- 0:59 tar ut 1 st ur skrivaren (917 kr)
- 1:09 gå till Ali (28 m) (917 kr)
- 1:09 öppnar Alis butik – sälja (917 kr)
- 1:11 säljer hos Ali: +105 kr (1022 kr)
- 1:14 tjänar pengar till väntar på sopbilen (BO): 1022/1082 kr → printar blomkruka (105 kr) (1022 kr)
- 1:23 gå till skrivaren (25 m) (1022 kr)
- 1:25 printar Blomkruka (1022 kr)
- 1:31 tar ut 1 st ur skrivaren (1022 kr)
- 1:40 gå till Ali (25 m) (1022 kr)
- 1:40 öppnar Alis butik – sälja (1022 kr)
- 1:42 säljer hos Ali: +105 kr (1127 kr)
- 1:45 tjänar pengar till väntar på sopbilen (BO): 1127/1187 kr → printar blomkruka (105 kr) (1127 kr)
- 1:54 gå till skrivaren (25 m) (1127 kr)
- 1:56 printar Blomkruka (1127 kr)
- 2:02 tar ut 1 st ur skrivaren (1127 kr)
- 2:11 gå till Ali (25 m) (1127 kr)
- 2:11 öppnar Alis butik – sälja (1127 kr)
- 2:13 säljer hos Ali: +105 kr (1232 kr)
- 2:31 popup: "Han är snäll. Typ." (1232 kr)
- 2:38 popup: "Läst" (1232 kr)
- 2:39 tjänar pengar till väntar på sopbilen (BO): 1232/1292 kr → printar blomkruka (105 kr) (1232 kr)
- 2:48 gå till skrivaren (25 m) (1232 kr)
- 2:49 printar Blomkruka (1232 kr)
- 3:34 plockar 10 skräp på gården (bär max 10) (1232 kr)
- 3:49 gå till kvarnen (44 m) (1232 kr)
- 3:50 gå till skrivaren (1 m) (1232 kr)
- 3:51 tar ut 1 st ur skrivaren (1232 kr)
- 4:01 gå till Ali (28 m) (1232 kr)
- 4:01 öppnar Alis butik – sälja (1232 kr)
- 4:03 säljer hos Ali: +105 kr (1337 kr)
- 4:17 gå till Rolfs postlåda (31 m) (1337 kr)
- 4:27 plockar 10 skräp på tippen (bär max 10) (1337 kr)
- 4:30 gå till kvarnen (7 m) (1337 kr)
- 4:40 gå till skrivaren (3 m) (1337 kr)
- 4:42 printar Flasköppnare med magnet (1337 kr)
- 4:47 tar ut 1 st ur skrivaren (1337 kr)
- 4:53 nybörjaren ser ingen pil – tittar runt (1337 kr)
- 4:58 valj flaskoppnare: true, vald flaskoppnare, post {"l":null,"tr":null,"tm":[]}, nummer false (1337 kr)
- 5:01 gå till Rolfs postlåda (6 m) (1337 kr)
- 5:10 nybörjaren ser ingen pil – tittar runt (1337 kr)
- 5:15 tjänar pengar till väntar på flaskhalsen för cykelbatteri: 1337/1377 kr → printar blomkruka (105 kr) (1337 kr)
- 5:18 gå till skrivaren (6 m) (1337 kr)
- 5:19 printar Blomkruka (1337 kr)
- 5:22 gå till cykeln (1 m) (1337 kr)
- 5:57 tar ut 1 st ur skrivaren (1337 kr)
- 6:07 gå till Ali (27 m) (1337 kr)
- 6:07 öppnar Alis butik – sälja (1337 kr)
- 6:09 säljer hos Ali: +105 kr (1442 kr)
- 6:17 öppnar Alis butik – bilbatteriet (1442 kr)
- 6:19 köper cykelbatteri för 30 kr (1412 kr)
- 6:30 gå till koppla in bilbatteriet vid cykeln (24 m) (1412 kr)
- 6:59 gå till Ali (24 m) (1412 kr)
- 6:59 öppnar Alis butik – köpa ryggkorg (1412 kr)
- 7:01 köper ryggkorg för 120 kr (1292 kr)
- 7:12 gå till skrivaren (25 m) (1292 kr)
- 7:13 printar Ryggkorg (2 delar) (1292 kr)
- 7:26 tar ut 1 st ur skrivaren (1292 kr)
- 7:29 tar på ryggkorg (1292 kr)
- 7:39 gå till Ali (25 m) (1292 kr)
- 7:39 öppnar Alis butik – köpa arbetsbord (1292 kr)
- 7:42 köper bord för 120 kr (1172 kr)
- 7:52 gå till skrivaren (25 m) (1172 kr)
- 7:53 printar Arbetsbord (3 delar) (1172 kr)
- 8:19 gå till kvarnen (26 m) (1172 kr)
- 8:27 plockar 3 skräp på tippen (bär max 16) (1172 kr)
- 8:30 gå till kvarnen (9 m) (1172 kr)
- 8:32 gå till skrivaren (3 m) (1172 kr)
- 8:33 tar ut 1 st ur skrivaren (1172 kr)
- 8:35 gå till platsen för arbetsbord (5 m) (1172 kr)
- 8:36 ställer ut arbetsbord (1172 kr)
- 8:57 gå till Ali (24 m) (1172 kr)
- 8:57 öppnar Alis butik – köpa skrivare m (1172 kr)
- 9:00 köper skrivare2 för 500 kr (672 kr)
- 9:10 gå till skrivaren (25 m) (672 kr)
- 9:12 printar Skrivare M (5 delar) (672 kr)
- 10:03 plockar 1 skräp på tippen (bär max 16) (672 kr)
- 10:07 gå till kvarnen (10 m) (672 kr)
- 10:15 gå till skrivaren (3 m) (672 kr)
- 10:16 tar ut 1 st ur skrivaren (672 kr)
- 10:18 gå till platsen för skrivare m (5 m) (672 kr)
- 10:19 ställer ut skrivare m (672 kr)
- 10:41 gå till Ali (24 m) (672 kr)
- 10:41 öppnar Alis butik – köpa plåttak (672 kr)
- 10:43 köper tak för 250 kr (422 kr)
- 10:53 gå till skrivaren (24 m) (422 kr)
- 10:55 printar Plåttak (3 delar) (422 kr)
- 11:17 tar ut 1 st ur skrivaren (422 kr)
- 11:23 gå till skjulet (17 m) (422 kr)
- 11:34 nybörjaren ser ingen pil – tittar runt (422 kr)
- 12:45 gå till sängen (1 m) (422 kr)

</details>

## Dag 4

| Tid | Källa | Vem | Text |
|---|---|---|---|
| 12:48 | vara | ali | ingen |
| 12:48 | händelse | malKlart | id=sov3 del=Dag 3 – En skrivare till och taket nasta=rolf2-brev |
| 12:48 | vara | ali | kruka |
| 12:48 | MÅL |  | Vänta på sopbilen. Den lämnar något. |
| 0:00 | väntar | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått TAK. Och arbetsbord. Skriv in, Gunnar. Du skriver aldrig in. |
| 0:00 | radio | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått TAK. Och arbetsbord. Skriv in, Gunnar. Du skriver aldrig in. |
| 0:00 | skratt | du | Radio-Kjelle |
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
| 0:15 | sak | rolf | Hoppa in. Ja ska visa dej en grej. |
| 0:15 | notis |  | Rolf: ”Hoppa in. Ja ska visa dej en grej.” |
| 0:15 | röst | rolf | Hoppa in. Ja ska visa dej en grej. · STORY |
| 0:18 | klar | rolf | Hoppa in. Ja ska visa dej en grej. |
| 0:20 | sak | notis:morgon | Ali vill ha idag: Blomkruka · +50 % |
| 0:20 | notis |  | Blomkruka · +50 % |
| 0:24 | klar | notis:morgon | Ali vill ha idag: Blomkruka · +50 % |
| 0:32 | sak | foto | Tak över huvudet |
| 0:32 | foto | du | Tak över huvudet |
| 0:35 | skratt | du | falsk tuta |
| 0:35 | klar | foto | Tak över huvudet |
| 0:38 | väntar | info:bra | 🛒 4 skräp från famnen i skottkärran – kärran tar mer än famnen |
| 0:45 | väntar | rolf | PERFEKT öppnare! Kärran vid lådan ä din. Den gnisslar. Precis som ja. Skriv ditt nummer på en lapp, så slipper ja skriva brev. /Rolf |
| 0:45 | sak | info:bra | 🛒 4 skräp från famnen i skottkärran – kärran tar mer än famnen |
| 0:45 | kvitto-visas | info:bra | 🛒 4 skräp från famnen i skottkärran – kärran tar mer än famnen |
| 0:45 | toast | bra | 🛒 4 skräp från famnen i skottkärran – kärran tar mer än famnen |
| 0:47 | klar | info:bra | 🛒 4 skräp från famnen i skottkärran – kärran tar mer än famnen |
| 0:50 | händelse | printStart | sak=kruka |
| 0:52 | väntar | bud | (tips) |
| 0:52 | sak | bud | (tips) |
| 0:52 | väntar | du | En skottkärra! Jag väljer den med hjulet och kör den full med skräp. |
| 0:53 | toast | guld | ✅ |
| 0:53 | händelse | printKlar | sak=kruka n=16 |
| 0:53 | händelse | tagitUrPrint | sak=kruka n=1 |
| 0:54 | klar | bud | (tips) |
| 0:56 | sak | du | En skottkärra! Jag väljer den med hjulet och kör den full med skräp. |
| 0:56 | röst | du | En skottkärra! Jag väljer den med hjulet och kör den full med skräp. · MÅL |
| 0:56 | väntar | värld:TUUT! Hej grannen! | TUUT! Hej grannen! |
| 0:58 | hjälp | kontroll | R: Vrid innan du ställer ner |
| 1:01 | klar | du | En skottkärra! Jag väljer den med hjulet och kör den full med skräp. |
| 1:04 | röst | ali | Köp nåt eller gå, min vän. Mina fötter värker. · STORY |
| 1:04 | butiksbubbla | ali | Köp nåt eller gå, min vän. Mina fötter värker. |
| 1:05 | aliSalt | ali | 105 |
| 1:06 | väntar | ali | Gå inte förbi för fort. Jag hinner inte vinka. |
| 1:10 | struken | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått TAK. Och arbetsbord. Skriv in, Gunnar. Du skriver aldrig in. |
| 1:15 | sak | du | I natt somnar jag torr. Det börjar bli ett hem. |
| 1:15 | notis | tanke | 💭 I natt somnar jag torr. Det börjar bli ett hem. |
| 1:15 | röst | du | I natt somnar jag torr. Det börjar bli ett hem. · STORY |
| 1:18 | händelse | printStart | sak=kruka |
| 1:19 | klar | du | I natt somnar jag torr. Det börjar bli ett hem. |
| 1:21 | toast | guld | ✅ |
| 1:21 | händelse | printKlar | sak=kruka n=17 |
| 1:21 | struken | värld:TUUT! Hej grannen! | TUUT! Hej grannen! |
| 1:22 | händelse | tagitUrPrint | sak=kruka n=1 |
| 1:26 | struken | ali | Gå inte förbi för fort. Jag hinner inte vinka. |
| 1:33 | aliSalt | ali | 105 |
| 1:47 | händelse | printStart | sak=kruka |
| 1:50 | toast | guld | ✅ |
| 1:50 | händelse | printKlar | sak=kruka n=18 |
| 1:50 | händelse | tagitUrPrint | sak=kruka n=1 |
| 2:02 | aliSalt | ali | 105 |
| 2:30 | paket |  | tanke |
| 2:30 | tanke | du | En badanka. Den överlevde kvarnen. |
| 2:30 | väntar | du | En badanka. Den överlevde kvarnen. |
| 2:30 | skratt | du | kvarnen spottar |
| 2:34 | händelse | printStart | sak=kruka |
| 2:37 | toast | guld | ✅ |
| 2:37 | händelse | printKlar | sak=kruka n=19 |
| 2:38 | händelse | tagitUrPrint | sak=kruka n=1 |
| 2:50 | aliSalt | ali | 105 |
| 2:51 | skratt | du | falsk tuta |
| 2:52 | struken | du | En badanka. Den överlevde kvarnen. |
| 2:56 | upplåst | skrivare | trim_skrivare2 |
| 2:56 | brott | UPPLÅST | trim_skrivare2 (skrivare 250 av 60) |
| 2:56 | händelse | upplast | id=trim_skrivare2 flask=skrivare |
| 2:56 | paket |  | tanke → sms |
| 2:56 | tanke | du | Skrivare M hinner inte heller. Den kunde gå fortare. |
| 2:56 | väntar | du | Skrivare M hinner inte heller. Den kunde gå fortare. |
| 2:56 | väntar | ali | Ali här. Skrivartrim igen. Nästa nivå. Den här gången skruvade jag åt rätt håll. |
| 3:04 | händelse | printStart | sak=kruka |
| 3:07 | toast | guld | ✅ |
| 3:07 | händelse | printKlar | sak=kruka n=20 |
| 3:07 | händelse | tagitUrPrint | sak=kruka n=1 |
| 3:13 | paket |  | ge |
| 3:13 | väntar |  | (läget ändras) |
| 3:14 | skratt | du | falsk tuta |
| 3:17 | sak | ali | Ali här. Skrivartrim igen. Nästa nivå. Den här gången skruvade jag åt rätt håll. |
| 3:17 | sms | ali | Ali här. Skrivartrim igen. Nästa nivå. Den här gången skruvade jag åt rätt håll. |
| 3:17 | sms-bubbla | ali | Ali här. Skrivartrim igen. Nästa nivå. Den här gången skruvade jag åt rätt håll. |
| 3:17 | röst | ali | Ali här. Skrivartrim igen. Nästa nivå. Den här gången skruvade jag åt rätt håll. · STORY |
| 3:18 | aliSalt | ali | 105 |
| 3:19 | skratt | du | däcket rullar iväg |
| 3:24 | klar | ali | Ali här. Skrivartrim igen. Nästa nivå. Den här gången skruvade jag åt rätt håll. |
| 3:24 | väntar | mamma | Rolf på sopbilen ringde. Han säger att du städar? Vem är du och vad har du gjort med mitt barn? ❤️ |
| 3:37 | väntar | rolf | Tjo. Ska grilla på lördag. Min grillspade smälte. Kan du göra en sån hä? /Rolf 🍖​ |
| 3:37 | paket |  | ge |
| 3:37 | väntar |  | (läget ändras) |
| 3:37 | sak | rolf | Tjo. Ska grilla på lördag. Min grillspade smälte. Kan du göra en sån hä? /Rolf 🍖​ |
| 3:37 | lapp | Brev från Rolf | Tjo. Ska grilla på lördag. Min grillspade smälte. Kan du göra en sån hä? /Rolf 🍖​ |
| 3:37 | röst | rolf | Tjo. Ska grilla på lördag. Min grillspade smälte. Kan du göra en sån hä? /Rolf 🍖​ · STORY |
| 3:37 | händelse | malKlart | id=rolf2-brev del=Dag 4 – Kärran och mer vind nasta=rolf2-printa |
| 3:37 | väntar | du | Printa grillspade. |
| 3:37 | MÅL |  | Printa grillspade |
| 3:40 | målruta |  | Printa grillspade |
| 3:43 | händelse | printStart | sak=grillspade |
| 3:43 | paket |  | tanke |
| 3:43 | tanke | du | Kajsa. Ut ur skrivaren. Nu. |
| 3:43 | väntar | du | Kajsa. Ut ur skrivaren. Nu. |
| 3:43 | skratt | du | Kajsa i skrivaren |
| 3:43 | händelse | malKlart | id=rolf2-printa del=Dag 4 – Kärran och mer vind nasta=rolf2-ge |
| 3:43 | struken | du | Kajsa. Ut ur skrivaren. Nu. |
| 3:43 | väntar | du | Ge Rolf grillspade. |
| 3:43 | MÅL |  | Ge Rolf grillspade |
| 3:44 | klar | rolf | Tjo. Ska grilla på lördag. Min grillspade smälte. Kan du göra en sån hä? /Rolf 🍖​ |
| 3:44 | händelse | brevLast | id=rolf:2 |
| 3:46 | målruta |  | Ge Rolf grillspade |
| 3:46 | struken | du | Printa grillspade. |
| 3:46 | sak | du | Ge Rolf grillspade. |
| 3:46 | pil |  | Ge Rolf grillspade |
| 3:46 | röst | du | Ge Rolf grillspade. · MÅL |
| 3:47 | toast | guld | ✅ |
| 3:47 | händelse | printKlar | sak=grillspade n=1 |
| 3:47 | kvittens-bock |  | ✓ Printa grillspade |
| 3:47 | händelse | tagitUrPrint | sak=grillspade n=1 |
| 3:48 | klar | du | Ge Rolf grillspade. |
| 3:50 | sak |  | (läget ändras) |
| 3:50 | klar |  | (läget ändras) |
| 3:57 | sak | du | Skrivare M hinner inte heller. Den kunde gå fortare. |
| 3:57 | notis | tanke | 💭 Skrivare M hinner inte heller. Den kunde gå fortare. |
| 3:57 | röst | du | Skrivare M hinner inte heller. Den kunde gå fortare. · STORY |
| 4:01 | klar | du | Skrivare M hinner inte heller. Den kunde gå fortare. |
| 4:06 | händelse | lagtIPostlada | sak=grillspade rolf=2 jobb=false |
| 4:06 | struken | kedja | rolf2 |
| 4:06 | händelse | malKlart | id=rolf2-ge del=Dag 4 – Kärran och mer vind nasta=n3-tom-full-karra |
| 4:06 | väntar | du | Kärran rymmer massor. Jag fyller den och tippar allt i kvarnen. |
| 4:06 | målruta |  | Töm en full kärra i kvarnen |
| 4:06 | MÅL |  | Töm en full kärra i kvarnen |
| 4:06 | sak | du | Kärran rymmer massor. Jag fyller den och tippar allt i kvarnen. |
| 4:06 | pil |  | Töm en full kärra i kvarnen |
| 4:06 | notis | tanke | 💭 Kärran rymmer massor. Jag fyller den och tippar allt i kvarnen. |
| 4:06 | röst | du | Kärran rymmer massor. Jag fyller den och tippar allt i kvarnen. · MÅL |
| 4:10 | kvittens-bock |  | ✓ Ge Rolf grillspade |
| 4:11 | klar | du | Kärran rymmer massor. Jag fyller den och tippar allt i kvarnen. |
| 4:19 | sak |  | (läget ändras) |
| 4:19 | brev | rolf | rolf:2 |
| 4:19 | klar |  | (läget ändras) |
| 4:24 | karraKlick | du | träff |
| 4:24 | tanke | du | Hård plast. Lilla kvarnen skulle explodera. Eller jag. |
| 4:24 | väntar | du | Hård plast. Lilla kvarnen skulle explodera. Eller jag. |
| 4:24 | sak | du | Hård plast. Lilla kvarnen skulle explodera. Eller jag. |
| 4:24 | notis | tanke | 💭 Hård plast. Lilla kvarnen skulle explodera. Eller jag. |
| 4:24 | röst | du | Hård plast. Lilla kvarnen skulle explodera. Eller jag. · REAKTION |
| 4:25 | karraKlick | du | träff |
| 4:26 | karraKlick | du | träff |
| 4:27 | karraKlick | du | träff |
| 4:28 | karraKlick | du | träff |
| 4:29 | klar | du | Hård plast. Lilla kvarnen skulle explodera. Eller jag. |
| 4:29 | karraKlick | du | träff |
| 4:30 | karraKlick | du | träff |
| 4:31 | karraKlick | du | träff |
| 4:34 | tanke | du | Det får inte plats. Jag behöver något att tippa i. |
| 4:34 | väntar | du | Det får inte plats. Jag behöver något att tippa i. |
| 4:34 | väntar | info:bra | 9 st i tratten · 7 st på marken bredvid |
| 4:34 | sak | info:bra | 9 st i tratten · 7 st på marken bredvid |
| 4:34 | kvitto-visas | info:bra | 9 st i tratten · 7 st på marken bredvid |
| 4:34 | toast | bra | 9 st i tratten · 7 st på marken bredvid |
| 4:34 | händelse | malKlart | id=n3-tom-full-karra del=Dag 4 – Kärran och mer vind nasta=sophallare |
| 4:34 | väntar | du | En sophållare bakom kvarnen. Då matar den sig själv. |
| 4:34 | MÅL |  | Plocka skräp och mal det |
| 4:36 | klar | info:bra | 9 st i tratten · 7 st på marken bredvid |
| 4:37 | målruta |  | Plocka skräp och mal det |
| 4:38 | kvittens-bock |  | ✓ Töm en full kärra i kvarnen |
| 4:38 | sak | du | En sophållare bakom kvarnen. Då matar den sig själv. |
| 4:38 | pil |  | Plocka skräp och mal det |
| 4:38 | notis | tanke | 💭 En sophållare bakom kvarnen. Då matar den sig själv. |
| 4:38 | röst | du | En sophållare bakom kvarnen. Då matar den sig själv. · MÅL |
| 4:40 | väntar | bror | Pappa har tvättat bilen tre gånger den här veckan. Jag sa att du bor på tippen. Han frågade vilken modell sopbilen var. |
| 4:43 | klar | du | En sophållare bakom kvarnen. Då matar den sig själv. |
| 4:45 | sak | du | Det får inte plats. Jag behöver något att tippa i. |
| 4:45 | notis | tanke | 💭 Det får inte plats. Jag behöver något att tippa i. |
| 4:45 | röst | du | Det får inte plats. Jag behöver något att tippa i. · STORY |
| 4:49 | klar | du | Det får inte plats. Jag behöver något att tippa i. |
| 5:02 | händelse | printStart | sak=kruka |
| 5:02 | struken | mamma | Rolf på sopbilen ringde. Han säger att du städar? Vem är du och vad har du gjort med mitt barn? ❤️ |
| 5:05 | toast | guld | ✅ |
| 5:05 | händelse | printKlar | sak=kruka n=21 |
| 5:06 | händelse | tagitUrPrint | sak=kruka n=1 |
| 5:16 | paket |  | tanke |
| 5:16 | tanke | du | Jaha, Rolf har hämtat en grillspade. |
| 5:16 | väntar | du | Jaha, Rolf har hämtat en grillspade. |
| 5:18 | aliSalt | ali | 105 |
| 5:18 | röst | ali | Dina krukor säljer. Tanterna i kvarteret älskar dem. · STORY |
| 5:18 | butiksbubbla | ali | Dina krukor säljer. Tanterna i kvarteret älskar dem. |
| 5:20 | sak | du | Jaha, Rolf har hämtat en grillspade. |
| 5:20 | notis | tanke | 💭 Jaha, Rolf har hämtat en grillspade. |
| 5:20 | röst | du | Jaha, Rolf har hämtat en grillspade. · REAKTION |
| 5:23 | klar | du | Jaha, Rolf har hämtat en grillspade. |
| 5:36 | händelse | printStart | sak=kruka |
| 5:38 | toast | guld | ✅ |
| 5:38 | händelse | printKlar | sak=kruka n=22 |
| 5:39 | skratt | du | falsk tuta |
| 5:39 | väntar | värld:TUUT TUUT! | TUUT TUUT! |
| 5:39 | händelse | tagitUrPrint | sak=kruka n=1 |
| 5:50 | aliSalt | ali | 105 |
| 6:01 | struken | värld:TUUT TUUT! | TUUT TUUT! |
| 6:03 | händelse | printStart | sak=kruka |
| 6:06 | toast | guld | ✅ |
| 6:06 | händelse | printKlar | sak=kruka n=23 |
| 6:07 | händelse | tagitUrPrint | sak=kruka n=1 |
| 6:18 | aliSalt | ali | 105 |
| 6:31 | händelse | printStart | sak=kruka |
| 6:34 | toast | guld | ✅ |
| 6:34 | händelse | printKlar | sak=kruka n=24 |
| 6:34 | händelse | tagitUrPrint | sak=kruka n=1 |
| 6:46 | aliSalt | ali | 105 |
| 6:59 | händelse | printStart | sak=kruka |
| 7:01 | toast | guld | ✅ |
| 7:01 | händelse | printKlar | sak=kruka n=25 |
| 7:02 | händelse | tagitUrPrint | sak=kruka n=1 |
| 7:06 | väntar | bror | Pappa har tvättat bilen tre gånger den här veckan. Jag sa att du bor på tippen. Han frågade vilken modell sopbilen var. |
| 7:13 | aliSalt | ali | 105 |
| 7:26 | händelse | printStart | sak=kruka |
| 7:29 | toast | guld | ✅ |
| 7:29 | händelse | printKlar | sak=kruka n=26 |
| 7:29 | händelse | tagitUrPrint | sak=kruka n=1 |
| 7:34 | väntar | värld:TUUT! Tjena! | TUUT! Tjena! |
| 7:41 | aliSalt | ali | 105 |
| 7:49 | upplåst | bara | matarband |
| 7:49 | brott | RESERV | matarband (bara 0 av 3) |
| 7:49 | händelse | upplast | id=matarband flask=bara |
| 7:49 | paket |  | sms |
| 7:49 | väntar | ali | Ali här. 🗑️ Sophållaren. Jag frågade AI:n hur man slipper bära skräp. Den gjorde det här. Den har mer fritid än jag. Suck. |
| 7:54 | händelse | printStart | sak=kruka |
| 7:56 | struken | värld:TUUT! Tjena! | TUUT! Tjena! |
| 7:56 | toast | guld | ✅ |
| 7:56 | händelse | printKlar | sak=kruka n=27 |
| 8:01 | händelse | tagitUrPrint | sak=kruka n=1 |
| 8:04 | sak | ali | Ali här. 🗑️ Sophållaren. Jag frågade AI:n hur man slipper bära skräp. Den gjorde det här. Den har mer fritid än jag. Suck. |
| 8:04 | sms | ali | Ali här. 🗑️ Sophållaren. Jag frågade AI:n hur man slipper bära skräp. Den gjorde det här. Den har mer fritid än jag. Suck. |
| 8:04 | sms-bubbla | ali | Ali här. 🗑️ Sophållaren. Jag frågade AI:n hur man slipper bära skräp. Den gjorde det här. Den har mer fritid än jag. Suck. |
| 8:04 | röst | ali | Ali här. 🗑️ Sophållaren. Jag frågade AI:n hur man slipper bära skräp. Den gjorde det här. Den har mer fritid än jag. Suck. · STORY |
| 8:13 | aliSalt | ali | 105 |
| 8:14 | klar | ali | Ali här. 🗑️ Sophållaren. Jag frågade AI:n hur man slipper bära skräp. Den gjorde det här. Den har mer fritid än jag. Suck. |
| 8:18 | struken | info:guld | 3D-modell köpt – printa sophållare |
| 8:18 | händelse | kopt | sak=matarband |
| 8:30 | händelse | printStart | sak=byggsats:matarband |
| 8:34 | toast | bra | Del 1 av 3 klar |
| 8:37 | toast | bra | Del 2 av 3 klar |
| 8:39 | toast | fel | Ingen ström – trampa cykeln |
| 8:48 | händelse | printKlar | sak=byggsats:matarband n=1 |
| 8:48 | toast | guld | ✅ |
| 8:49 | händelse | tagitUrPrint | sak=byggsats:matarband n=1 |
| 8:49 | paket |  | sms |
| 8:49 | väntar | ali | Ali här. Jag såg Sophållare på avstånd. Ett streck blev lite snett. Mitt fel. Vackert ändå. |
| 8:49 | paket |  | sms |
| 8:49 | väntar | ali | Ali igen. Jag har sagt till min bror att jag inte går i pension. Jag startar något. Han skrattade. Jag skrattade också. Men jag menar det. Tack. Säg inget. |
| 8:52 | händelse | placerat | sak=sophallare |
| 8:52 | kvittens | du | Nu kan jag tömma hela kärran på en gång. |
| 8:52 | varför-köad | du | Krukor är bra. Pallar är bättre. |
| 8:52 | väntar | du | Nu kan jag tömma hela kärran på en gång. |
| 8:52 | väntar | info:guld | 🗑️ Sophållaren står bakom kvarnen! Töm allt skräp i den – den matar kvarnen själv. |
| 8:52 | sak | du | Nu kan jag tömma hela kärran på en gång. |
| 8:52 | notis | tanke | 💭 Nu kan jag tömma hela kärran på en gång. |
| 8:52 | röst | du | Nu kan jag tömma hela kärran på en gång. · STORY |
| 8:52 | händelse | malKlart | id=sophallare del=Dag 4 – Kärran och mer vind nasta=pall |
| 8:52 | väntar | du | Jag behöver något att sitta på. En pall. Lagom ambitiöst. |
| 8:52 | MÅL |  | Printa en pall |
| 8:54 | målruta |  | Printa en pall |
| 8:55 | klar | du | Nu kan jag tömma hela kärran på en gång. |
| 8:58 | sak | du | Jag behöver något att sitta på. En pall. Lagom ambitiöst. |
| 8:58 | pil |  | Printa en pall |
| 8:58 | notis | tanke | 💭 Jag behöver något att sitta på. En pall. Lagom ambitiöst. |
| 8:58 | röst | du | Jag behöver något att sitta på. En pall. Lagom ambitiöst. · MÅL |
| 8:58 | nick |  | nick:46 |
| 9:02 | klar | du | Jag behöver något att sitta på. En pall. Lagom ambitiöst. |
| 9:02 | struken | info:guld | 🗑️ Sophållaren står bakom kvarnen! Töm allt skräp i den – den matar kvarnen själv. |
| 9:07 | skratt | du | falsk tuta |
| 9:10 | sak | ali | Ali här. Jag såg Sophållare på avstånd. Ett streck blev lite snett. Mitt fel. Vackert ändå. |
| 9:10 | sms | ali | Ali här. Jag såg Sophållare på avstånd. Ett streck blev lite snett. Mitt fel. Vackert ändå. |
| 9:10 | sms-bubbla | ali | Ali här. Jag såg Sophållare på avstånd. Ett streck blev lite snett. Mitt fel. Vackert ändå. |
| 9:10 | röst | ali | Ali här. Jag såg Sophållare på avstånd. Ett streck blev lite snett. Mitt fel. Vackert ändå. · REAKTION |
| 9:13 | händelse | kopt | sak=pall |
| 9:13 | butiksbubbla | ali | Pall? Bra val. Folk köper sånt. Jag vet inte varför. |
| 9:14 | väntar | ali | Bra val. Folk köper sånt. Jag vet inte varför. |
| 9:18 | klar | ali | Ali här. Jag såg Sophållare på avstånd. Ett streck blev lite snett. Mitt fel. Vackert ändå. |
| 9:20 | sak | ali | Bra val. Folk köper sånt. Jag vet inte varför. |
| 9:20 | röst | ali | Bra val. Folk köper sånt. Jag vet inte varför. · STORY |
| 9:20 | upprepning | ali | Bra val. Folk köper sånt. Jag vet inte varför. |
| 9:24 | klar | ali | Bra val. Folk köper sånt. Jag vet inte varför. |
| 9:28 | väntar | värld:TUUT! Hej grannen! | TUUT! Hej grannen! |
| 9:36 | sak | värld:TUUT! Hej grannen! | TUUT! Hej grannen! |
| 9:36 | bubbla |  | TUUT! Hej grannen! |
| 9:39 | klar | värld:TUUT! Hej grannen! | TUUT! Hej grannen! |
| 9:42 | händelse | printStart | sak=pall |
| 9:47 | toast | guld | ✅ |
| 9:47 | händelse | printKlar | sak=pall n=1 |
| 9:47 | händelse | malKlart | id=pall del=Dag 4 – Kärran och mer vind nasta=vind4 |
| 9:47 | väntar | du | En vindsnurra till på skjulets tak. Skrivarna vill ha mer ström. |
| 9:47 | målruta |  | Printa och sälj |
| 9:47 | MÅL |  | Printa och sälj |
| 9:47 | sak | du | En vindsnurra till på skjulets tak. Skrivarna vill ha mer ström. |
| 9:47 | pil |  | Printa och sälj |
| 9:47 | notis | tanke | 💭 En vindsnurra till på skjulets tak. Skrivarna vill ha mer ström. |
| 9:47 | röst | du | En vindsnurra till på skjulets tak. Skrivarna vill ha mer ström. · MÅL |
| 9:47 | händelse | tagitUrPrint | sak=pall n=1 |
| 9:51 | kvittens-bock |  | ✓ Printa en pall |
| 9:53 | klar | du | En vindsnurra till på skjulets tak. Skrivarna vill ha mer ström. |
| 9:58 | händelse | placerat | sak=pall |
| 10:07 | strömdipp | du | vindsnurra2 |
| 10:07 | paket |  | tanke |
| 10:07 | tanke | du | Allt stannar. Maskinerna drar mer än jag får in. |
| 10:07 | väntar | du | Allt stannar. Maskinerna drar mer än jag får in. |
| 10:07 | sak | du | Allt stannar. Maskinerna drar mer än jag får in. |
| 10:07 | notis | tanke | 💭 Allt stannar. Maskinerna drar mer än jag får in. |
| 10:07 | röst | du | Allt stannar. Maskinerna drar mer än jag får in. · STORY |
| 10:08 | upplåst | strom | vindsnurra2 |
| 10:08 | brott | UPPLÅST | vindsnurra2 (strom 46 av 15) |
| 10:08 | händelse | upplast | id=vindsnurra2 flask=strom |
| 10:08 | paket |  | tanke → sms |
| 10:08 | tanke | du | En snurra räcker inte. Skrivarna står still så fort det blir stilla. |
| 10:08 | väntar | du | En snurra räcker inte. Skrivarna står still så fort det blir stilla. |
| 10:08 | väntar | ali | Ali här. En snurra till? Taket har plats för två. Vinden har inget emot det. |
| 10:11 | klar | du | Allt stannar. Maskinerna drar mer än jag får in. |
| 10:13 | skratt | du | falsk tuta |
| 10:16 | händelse | printStart | sak=pall |
| 10:16 | toast | fel | Ingen ström – maskinerna drar mer än du får in. Bygg en solpanel |
| 10:39 | sak | du | En snurra räcker inte. Skrivarna står still så fort det blir stilla. |
| 10:39 | notis | tanke | 💭 En snurra räcker inte. Skrivarna står still så fort det blir stilla. |
| 10:39 | röst | du | En snurra räcker inte. Skrivarna står still så fort det blir stilla. · STORY |
| 10:45 | klar | du | En snurra räcker inte. Skrivarna står still så fort det blir stilla. |
| 10:53 | sak | ali | Ali här. En snurra till? Taket har plats för två. Vinden har inget emot det. |
| 10:53 | sms | ali | Ali här. En snurra till? Taket har plats för två. Vinden har inget emot det. |
| 10:53 | sms-bubbla | ali | Ali här. En snurra till? Taket har plats för två. Vinden har inget emot det. |
| 10:53 | röst | ali | Ali här. En snurra till? Taket har plats för två. Vinden har inget emot det. · STORY |
| 10:57 | toast | guld | ✅ |
| 10:57 | händelse | printKlar | sak=pall n=2 |
| 10:57 | händelse | tagitUrPrint | sak=pall n=1 |
| 10:59 | klar | ali | Ali här. En snurra till? Taket har plats för två. Vinden har inget emot det. |
| 11:09 | aliSalt | ali | 180 |
| 11:23 | scenInfo | rolf | Rolf kör upp till sin bänk |
| 11:27 | röst | rolf | Kall öl ä viktigt. · STORY |
| 11:27 | bubbla | rolf | Kall öl ä viktigt. |
| 11:30 | skratt | du | däcket rullar iväg |
| 11:30 | paket |  | tanke |
| 11:30 | tanke | du | Däcket ville inte stanna. Jag förstår det. |
| 11:30 | väntar | du | Däcket ville inte stanna. Jag förstår det. |
| 11:35 | röst | rolf | Ja kommer hit varje kväll. Förr va vi två på bänken. · STORY |
| 11:35 | bubbla | rolf | Ja kommer hit varje kväll. Förr va vi två på bänken. |
| 11:53 | röst | rolf | Dä där ä Bengt-Åke. Vinka int. · STORY |
| 11:53 | bubbla | rolf | Dä där ä Bengt-Åke. Vinka int. |
| 12:07 | skratt | du | falsk tuta |
| 12:08 | röst | rolf | Den ä skyldig mej pengar. · STORY |
| 12:08 | bubbla | rolf | Den ä skyldig mej pengar. |
| 12:17 | väntar | foto | Rolfs bänk |
| 12:17 | paket |  | tanke |
| 12:17 | tanke | du | Han kommer hit varje kväll. Nu vet jag var. |
| 12:17 | väntar | du | Han kommer hit varje kväll. Nu vet jag var. |
| 12:17 | skratt | du | Rolfs bänk |
| 12:23 | sak | du | Däcket ville inte stanna. Jag förstår det. |
| 12:23 | notis | tanke | 💭 Däcket ville inte stanna. Jag förstår det. |
| 12:23 | röst | du | Däcket ville inte stanna. Jag förstår det. · REAKTION |
| 12:25 | lapp | Dagbok | Fyra dagar. Tänk om tre veckor. |
| 12:25 | röst | du | Fyra dagar. Tänk om tre veckor. · REAKTION |
| 12:28 | klar | du | Däcket ville inte stanna. Jag förstår det. |
| 12:36 | sak | foto | Rolfs bänk |
| 12:36 | foto | du | Rolfs bänk |
| 12:38 | klar | foto | Rolfs bänk |
| 12:45 | struken | info:guld | 3D-modell köpt – printa vindsnurra till skjultaket |
| 12:45 | händelse | kopt | sak=vindsnurra |
| 12:46 | sak | du | Han kommer hit varje kväll. Nu vet jag var. |
| 12:46 | notis | tanke | 💭 Han kommer hit varje kväll. Nu vet jag var. |
| 12:46 | röst | du | Han kommer hit varje kväll. Nu vet jag var. · STORY |
| 12:50 | klar | du | Han kommer hit varje kväll. Nu vet jag var. |
| 12:57 | händelse | printStart | sak=byggsats:vindsnurra |
| 13:01 | händelse | printKlar | sak=byggsats:vindsnurra n=1 |
| 13:01 | toast | guld | ✅ |
| 13:02 | struken | info:guld | 🌬️ Vindsnurran ska upp på skjulets tak. |
| 13:02 | händelse | tagitUrPrint | sak=byggsats:vindsnurra n=1 |
| 13:06 | struken | bror | Pappa har tvättat bilen tre gånger den här veckan. Jag sa att du bor på tippen. Han frågade vilken modell sopbilen var. |
| 13:11 | händelse | placerat | sak=vindsnurra |
| 13:11 | struken | info:guld | 🌬️ Vindsnurran sitter på taket – den trampar cykeln åt mig när det blåser |
| 13:11 | monterat | du | byggsats:vindsnurra |
| 13:11 | händelse | monterat | sak=vindsnurra |
| 13:11 | händelse | malKlart | id=vind4 del=Dag 4 – Kärran och mer vind nasta=n3-isolera-tva-vaggar |
| 13:11 | lapp | 📔 Dagbok | Slut på trampandet. Nästan. |
| 13:11 | dagbokrad | du | Slut på trampandet. Nästan. |
| 13:11 | väntar | notis:Slut på trampandet. Nästan. | Slut på trampandet. Nästan. |
| 13:11 | väntar | du | Det drar genom väggarna. Isolering, och sen blir det varmt. |
| 13:11 | MÅL |  | Isolera två väggar · 0/2 |
| 13:11 | sak | du | Det drar genom väggarna. Isolering, och sen blir det varmt. |
| 13:11 | målruta |  | Isolera två väggar · 0/2 |
| 13:11 | pil |  | Isolera två väggar · 0/2 |
| 13:11 | notis | tanke | 💭 Det drar genom väggarna. Isolering, och sen blir det varmt. |
| 13:11 | röst | du | Det drar genom väggarna. Isolering, och sen blir det varmt. · MÅL |
| 13:11 | nick |  | nick:48 |
| 13:16 | klar | du | Det drar genom väggarna. Isolering, och sen blir det varmt. |
| 13:18 | sak | notis:Slut på trampandet. Nästan. | Slut på trampandet. Nästan. |
| 13:18 | notis | dagbok | Slut på trampandet. Nästan. |
| 13:20 | klar | notis:Slut på trampandet. Nästan. | Slut på trampandet. Nästan. |
| 13:20 | händelse | pappa | Pappa ringer |
| 13:25 | röst | pappa | Hej. Det är pappa. · STORY |
| 13:27 | röst | du | Hej pappa. · STORY |
| 13:30 | röst | pappa | Mamma står bredvid. Hon säger att jag ska fråga om du äter. · STORY |
| 13:36 | röst | du | Jag äter. Och jag har en egen kvarn nu. Och en 3D-skrivare. · STORY |
| 13:42 | röst | pappa | Jaha. En kvarn. Vad lugnt då. · STORY |
| 13:44 | röst | pappa | Jag kanske kommer förbi nån dag. Om det passar. · STORY |
| 13:49 | röst | du | Det passar. · STORY |
| 13:53 | röst | pappa | Bra. Hej då då. · STORY |
| 14:04 | händelse | samtalSlut | id=pappa4 |
| 14:04 | struken | kedja | samtal4 |
| 14:04 | struken | ali | Ali igen. Jag har sagt till min bror att jag inte går i pension. Jag startar något. Han skrattade. Jag skrattade också. Men jag menar det. Tack. Säg inget. |
| 14:19 | struken | info:guld | 3D-modell köpt – printa isolerskiva (vägg) |
| 14:19 | händelse | kopt | sak=vaggar |
| 14:32 | händelse | printStart | sak=byggsats:vaggar |
| 14:36 | händelse | printKlar | sak=byggsats:vaggar n=1 |
| 14:36 | toast | guld | ✅ |
| 14:36 | händelse | tagitUrPrint | sak=byggsats:vaggar n=1 |
| 14:43 | väntar | info:guld | 🧱 Bakväggen klar. 3 kvar. |
| 14:43 | sak | info:guld | 🧱 Bakväggen klar. 3 kvar. |
| 14:43 | kvitto-visas | info:guld | 🧱 Bakväggen klar. 3 kvar. |
| 14:43 | toast | guld | 🧱 Bakväggen klar. 3 kvar. |
| 14:45 | klar | info:guld | 🧱 Bakväggen klar. 3 kvar. |
| 15:04 | toast | skak | handen skakar: fullt |
| 15:16 | händelse | printStart | sak=byggsats:vaggar |
| 15:20 | händelse | printKlar | sak=byggsats:vaggar n=1 |
| 15:20 | toast | guld | ✅ |
| 15:21 | händelse | tagitUrPrint | sak=byggsats:vaggar n=1 |
| 15:28 | väntar | info:guld | 🧱 Vänster vägg klar. 2 kvar. |
| 15:28 | sak | info:guld | 🧱 Vänster vägg klar. 2 kvar. |
| 15:28 | kvitto-visas | info:guld | 🧱 Vänster vägg klar. 2 kvar. |
| 15:28 | toast | guld | 🧱 Vänster vägg klar. 2 kvar. |
| 15:28 | händelse | malKlart | id=n3-isolera-tva-vaggar del=Dag 4 – Kärran och mer vind nasta=sov4 |
| 15:28 | paket |  | lapp |
| 15:28 | väntar | du | Nu vet grannen att jag bor HÄR. Han verkar inte glad. En skrivare räcker inte. |
| 15:28 | MÅL |  | Klart för idag – sov när du vill |
| 15:30 | klar | info:guld | 🧱 Vänster vägg klar. 2 kvar. |
| 15:31 | målruta |  | Klart för idag – sov när du vill |
| 15:32 | kvittens-bock |  | ✓ Isolera två väggar · 2/2 |
| 15:32 | sak | du | (nytt mål i rutan) |
| 15:32 | pil |  | Klart för idag – sov när du vill |
| 15:32 | klar | du | (nytt mål i rutan) |
| 15:34 | sak | du | Nu vet grannen att jag bor HÄR. Han verkar inte glad. En skrivare räcker inte. |
| 15:34 | kvallsrad | du | Nu vet grannen att jag bor HÄR. Han verkar inte glad. En skrivare räcker inte. |
| 15:35 | klar | du | Nu vet grannen att jag bor HÄR. Han verkar inte glad. En skrivare räcker inte. |
| 15:35 | väntar | notis:🌇 Klockan är 21. Ali slår igen luckan.  | 🌇 Klockan är 21. Ali slår igen luckan. Dagens jobb är klart – gå in i skjulet och sov i sängen. |
| 15:47 | skratt | du | falsk tuta |
| 15:49 | nattkort | du | 🌙 Dag 4 är slut. God natt. zzz… Nu vet grannen att jag bor HÄR. Han verkar inte glad. En skrivare räcker inte. DAGENS PRINTAR Blomkruka × 12 Pall × 2 Grillspad |

<details><summary>Botens handlingar dag 4</summary>

- 0:00 — dag 4 börjar — (422 kr)
- 0:08 popup: "FORTSÄTT" (422 kr)
- 0:23 nybörjaren ser ingen pil – tittar runt (422 kr)
- 0:38 gå till Rolfs postlåda (28 m) (422 kr)
- 0:45 panel: "Rolfs postlåda
Det här låg i l" (542 kr)
- 0:46 tjänar pengar till väntar på sopbilen (BO): 542/602 kr → printar blomkruka (105 kr) (542 kr)
- 0:48 gå till skrivaren (8 m) (542 kr)
- 0:50 printar Blomkruka (542 kr)
- 0:54 tar ut 1 st ur skrivaren (542 kr)
- 1:04 gå till Ali (26 m) (542 kr)
- 1:04 öppnar Alis butik – sälja (542 kr)
- 1:05 säljer hos Ali: +105 kr (647 kr)
- 1:08 tjänar pengar till väntar på sopbilen (BO): 647/707 kr → printar blomkruka (105 kr) (647 kr)
- 1:17 gå till skrivaren (24 m) (647 kr)
- 1:18 printar Blomkruka (647 kr)
- 1:22 tar ut 1 st ur skrivaren (647 kr)
- 1:31 gå till Ali (24 m) (647 kr)
- 1:31 öppnar Alis butik – sälja (647 kr)
- 1:33 säljer hos Ali: +105 kr (752 kr)
- 1:36 tjänar pengar till väntar på sopbilen (BO): 752/812 kr → printar blomkruka (105 kr) (752 kr)
- 1:45 gå till skrivaren (24 m) (752 kr)
- 1:47 printar Blomkruka (752 kr)
- 1:51 tar ut 1 st ur skrivaren (752 kr)
- 2:00 gå till Ali (24 m) (752 kr)
- 2:00 öppnar Alis butik – sälja (752 kr)
- 2:02 säljer hos Ali: +105 kr (857 kr)
- 2:05 tjänar pengar till väntar på sopbilen (BO): 857/917 kr → printar blomkruka (105 kr) (857 kr)
- 2:22 plockar 4 skräp på tippen (bär max 16) (857 kr)
- 2:26 gå till kvarnen (9 m) (857 kr)
- 2:33 gå till skrivaren (5 m) (857 kr)
- 2:34 printar Blomkruka (857 kr)
- 2:38 tar ut 1 st ur skrivaren (857 kr)
- 2:48 gå till Ali (26 m) (857 kr)
- 2:48 öppnar Alis butik – sälja (857 kr)
- 2:50 säljer hos Ali: +105 kr (962 kr)
- 2:53 tjänar pengar till väntar på sopbilen (BO): 962/1022 kr → printar blomkruka (105 kr) (962 kr)
- 3:02 gå till skrivaren (24 m) (962 kr)
- 3:04 printar Blomkruka (962 kr)
- 3:08 tar ut 1 st ur skrivaren (962 kr)
- 3:17 gå till Ali (24 m) (962 kr)
- 3:17 öppnar Alis butik – sälja (962 kr)
- 3:19 säljer hos Ali: +105 kr (1067 kr)
- 3:37 gå till Rolfs postlåda (31 m) (1067 kr)
- 3:41 gå till skrivaren (8 m) (1067 kr)
- 3:43 printar Grillspade (1067 kr)
- 3:48 tar ut 1 st ur skrivaren (1067 kr)
- 3:56 nybörjaren ser ingen pil – tittar runt (1067 kr)
- 4:00 valj grillspade: true, vald grillspade, post {"l":null,"tr":null,"tm":[]}, nummer false (1067 kr)
- 4:02 gå till fel håll en bit (4 m) (1067 kr)
- 4:06 gå till Rolfs postlåda (8 m) (1067 kr)
- 4:17 nybörjaren ser ingen pil – tittar runt (1067 kr)
- 4:31 fyller kärran med 8 skräp (1067 kr)
- 4:34 gå till kvarnen (8 m) (1067 kr)
- 4:54 nybörjaren ser ingen pil – tittar runt (1067 kr)
- 4:59 tjänar pengar till väntar på flaskhalsen för matarband: 1067/1107 kr → printar blomkruka (105 kr) (1067 kr)
- 5:01 gå till skrivaren (5 m) (1067 kr)
- 5:02 printar Blomkruka (1067 kr)
- 5:06 tar ut 1 st ur skrivaren (1067 kr)
- 5:16 gå till Ali (27 m) (1067 kr)
- 5:16 öppnar Alis butik – sälja (1067 kr)
- 5:18 säljer hos Ali: +105 kr (1172 kr)
- 5:25 tjänar pengar till väntar på flaskhalsen för matarband: 1172/1212 kr → printar blomkruka (105 kr) (1172 kr)
- 5:34 gå till skrivaren (24 m) (1172 kr)
- 5:36 printar Blomkruka (1172 kr)
- 5:40 tar ut 1 st ur skrivaren (1172 kr)
- 5:49 gå till Ali (24 m) (1172 kr)
- 5:49 öppnar Alis butik – sälja (1172 kr)
- 5:51 säljer hos Ali: +105 kr (1277 kr)
- 5:53 tjänar pengar till väntar på flaskhalsen för matarband: 1277/1317 kr → printar blomkruka (105 kr) (1277 kr)
- 6:02 gå till skrivaren (24 m) (1277 kr)
- 6:03 printar Blomkruka (1277 kr)
- 6:07 tar ut 1 st ur skrivaren (1277 kr)
- 6:16 gå till Ali (24 m) (1277 kr)
- 6:16 öppnar Alis butik – sälja (1277 kr)
- 6:18 säljer hos Ali: +105 kr (1382 kr)
- 6:20 tjänar pengar till väntar på flaskhalsen för matarband: 1382/1422 kr → printar blomkruka (105 kr) (1382 kr)
- 6:29 gå till skrivaren (24 m) (1382 kr)
- 6:31 printar Blomkruka (1382 kr)
- 6:35 tar ut 1 st ur skrivaren (1382 kr)
- 6:44 gå till Ali (24 m) (1382 kr)
- 6:44 öppnar Alis butik – sälja (1382 kr)
- 6:46 säljer hos Ali: +105 kr (1487 kr)
- 6:48 tjänar pengar till väntar på flaskhalsen för matarband: 1487/1527 kr → printar blomkruka (105 kr) (1487 kr)
- 6:57 gå till skrivaren (24 m) (1487 kr)
- 6:59 printar Blomkruka (1487 kr)
- 7:02 tar ut 1 st ur skrivaren (1487 kr)
- 7:12 gå till Ali (24 m) (1487 kr)
- 7:12 öppnar Alis butik – sälja (1487 kr)
- 7:13 säljer hos Ali: +105 kr (1592 kr)
- 7:15 tjänar pengar till väntar på flaskhalsen för matarband: 1592/1632 kr → printar blomkruka (105 kr) (1592 kr)
- 7:25 gå till skrivaren (24 m) (1592 kr)
- 7:26 printar Blomkruka (1592 kr)
- 7:30 tar ut 1 st ur skrivaren (1592 kr)
- 7:39 gå till Ali (24 m) (1592 kr)
- 7:39 öppnar Alis butik – sälja (1592 kr)
- 7:41 säljer hos Ali: +105 kr (1697 kr)
- 7:43 tjänar pengar till väntar på flaskhalsen för matarband: 1697/1737 kr → printar blomkruka (105 kr) (1697 kr)
- 7:52 gå till skrivaren (24 m) (1697 kr)
- 7:54 printar Blomkruka (1697 kr)
- 8:01 gå till skrivaren (4 m) (1697 kr)
- 8:01 tar ut 1 st ur skrivaren (1697 kr)
- 8:11 gå till Ali (26 m) (1697 kr)
- 8:11 öppnar Alis butik – sälja (1697 kr)
- 8:13 säljer hos Ali: +105 kr (1802 kr)
- 8:16 öppnar Alis butik – köpa sophållare (1802 kr)
- 8:18 köper matarband för 120 kr (1682 kr)
- 8:29 gå till skrivaren (24 m) (1682 kr)
- 8:30 printar Sophållare (3 delar) (1682 kr)
- 8:49 tar ut 1 st ur skrivaren (1682 kr)
- 8:52 gå till kvarnen (5 m) (1682 kr)
- 9:11 gå till Ali (29 m) (1682 kr)
- 9:11 öppnar Alis butik – köpa receptet pall (1682 kr)
- 9:14 köper pall för 80 kr (1602 kr)
- 9:31 plockar 2 skräp på tippen (bär max 16) (1602 kr)
- 9:35 gå till kvarnen (12 m) (1602 kr)
- 9:40 gå till skrivaren (5 m) (1602 kr)
- 9:42 printar Pall (1602 kr)
- 9:48 tar ut 1 st ur skrivaren (1602 kr)
- 9:56 gå till platsen för pall (23 m) (1602 kr)
- 9:58 ställer ut pall (1602 kr)
- 10:02 nybörjaren ser ingen pil – tittar runt (1602 kr)
- 10:07 tjänar pengar till väntar på flaskhalsen för vindsnurra2: 1602/1642 kr → printar pall (180 kr) (1602 kr)
- 10:15 gå till skrivaren (20 m) (1602 kr)
- 10:16 printar Pall (1602 kr)
- 10:18 gå till cykeln (3 m) (1602 kr)
- 10:58 tar ut 1 st ur skrivaren (1602 kr)
- 11:07 gå till Ali (25 m) (1602 kr)
- 11:07 öppnar Alis butik – sälja (1602 kr)
- 11:09 säljer hos Ali: +180 kr (1782 kr)
- 11:23 gå till sopbilen (Rolfs bänk) (37 m) (1782 kr)
- 12:23 tillbaka från Rolfs bänk (1782 kr)
- 12:29 panel: "Dagbok
Före och efter
Dag 1
Da" (1782 kr)
- 12:43 gå till Ali (37 m) (1782 kr)
- 12:43 öppnar Alis butik – köpa vindsnurra till skjultaket (1782 kr)
- 12:46 köper vindsnurra för 133 kr (1649 kr)
- 12:56 gå till skrivaren (24 m) (1649 kr)
- 12:57 printar Vindsnurra till skjultaket (1649 kr)
- 13:02 tar ut 1 st ur skrivaren (1649 kr)
- 13:11 gå till sätt vindsnurran på taket (18 m) (1649 kr)
- 13:25 popup: "Svara E" (1649 kr)
- 13:42 popup: "Nästa E" (1649 kr)
- 13:55 popup: "Nästa E" (1649 kr)
- 13:59 popup: "Nästa E" (1649 kr)
- 14:04 popup: "Lägg på E" (1649 kr)
- 14:18 gå till Ali (20 m) (1649 kr)
- 14:18 öppnar Alis butik – köpa isolerskiva (vägg) (1649 kr)
- 14:20 köper vaggar för 130 kr (1519 kr)
- 14:30 gå till skrivaren (24 m) (1519 kr)
- 14:32 printar Isolerskiva (vägg) (1519 kr)
- 14:37 tar ut 1 st ur skrivaren (1519 kr)
- 14:43 gå till skjulet (bak) (17 m) (1519 kr)
- 15:05 plockar 3 skräp på tippen (bär max 16) (1519 kr)
- 15:09 gå till kvarnen (12 m) (1519 kr)
- 15:15 gå till skrivaren (5 m) (1519 kr)
- 15:16 printar Isolerskiva (vägg) (1519 kr)
- 15:21 tar ut 1 st ur skrivaren (1519 kr)
- 15:28 gå till skjulet (vanster) (19 m) (1519 kr)
- 15:42 nybörjaren ser ingen pil – tittar runt (1519 kr)
- 15:47 gå till sängen (1 m) (1519 kr)

</details>

## Dag 5

| Tid | Källa | Vem | Text |
|---|---|---|---|
| 15:49 | vara | ali | pall |
| 15:49 | händelse | malKlart | id=sov4 del=Dag 4 – Kärran och mer vind nasta=rolf3-brev |
| 15:49 | MÅL |  | Vänta på sopbilen. Den lämnar något. |

<details><summary>Botens handlingar dag 5</summary>

- 0:00 — dag 5 börjar — (1519 kr)

</details>
