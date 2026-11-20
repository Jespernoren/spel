# Nybörjarboten – körning ny8 (A-085, inkorg 17) på `b4b2310`

*A-081: samma händer som AX, men boten vet bara det som syns (målrutan, pilen, det som sägs). Går 3 m/s, läser 60 ms per tecken, följer pilen, tittar runt när målet är otydligt och går fel ibland.*

| Dag | Minuter | FÖRVIRRAD | FAST | TRÄNGSEL | HANN INTE LÄSA | DOLT | NY SAK UTAN FÖRKLARING | OKÄNT ORD |
|---|---|---|---|---|---|---|---|---|
| 1 | 15.7 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 2 | 15.2 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 3 | 17.0 | 0 | 0 | 0 | 1* | 0 | 1* | 0 |

*Dag 3 spelades in för sig från botens sparfil vid dag 3:s början, eftersom Chrome kraschade i slutet av dag 3 i den hela körningen (minnet tar slut efter ca 35 min inspelning). De två flaggorna (0:00 och 0:38) kommer av att körningen börjar från en sparfil: dagbokssidan stod redan uppe, och byta-förklaringen från dag 1 finns inte i den nya körningens logg.*

## Flaggor (0)

inga

## Friktionskurvan (sekunder per mål: nybörjaren mot AX)

| Dag | Mål | Nybörjaren | AX | × |
|---|---|---|---|---|
| 1 | Lasta av skrivaren från cykeln | 0 | – | – |
| 1 | Lasta av skrivaren från cykeln | 43 | – | – |
| 1 | Ställ skrivaren på rutan | 23 | – | – |
| 1 | Skrivaren behöver ström | 26 | – | – |
| 1 | Ställ cykeln och generatorn vid skrivaren · 0/2 | 52 | – | – |
| 1 | Klicka på skrivaren och välj vad du vill printa | 23 | – | – |
| 1 | Trampa! | 5 | – | – |
| 1 | Printa en nyckelring till | 18 | – | – |
| 1 | Ali kommer över vägen | 32 | – | – |
| 1 | Ställ kvarnen vid tornet | 14 | – | – |
| 1 | Plocka skräp och veva kvarnen | 32 | – | – |
| 1 | Printa en nyckelring av din egen tråd | 79 | – | – |
| 1 | Sälj nyckelringarna hos Ali | 46 | – | – |
| 1 | Gå till Alis butik | 41 | – | – |
| 1 | Plocka skräp och mal det | 203 | – | – |
| 1 | Printa din skräpgrip | 79 | – | – |
| 1 | Printa och sälj nyckelringar | 51 | – | – |
| 1 | Sälj blomkrukan hos Ali | 54 | – | – |
| 1 | Köp sängens 3D-modell hos Ali (60 kr) | 17 | – | – |
| 1 | Printa sängen | 67 | – | – |
| 2 | Mal skräp, printa och sälj | -672 | – | – |
| 2 | Printa kvarnmotorn till kvarnen | 33 | – | – |
| 2 | Kolla vad som flög ut från sopbilen | 43 | – | – |
| 2 | Vänta på sopbilen. Den lämnar något. | 113 | – | – |
| 2 | Printa ölhållare med kylklamp | 5 | – | – |
| 2 | Ge Rolf ölhållare med kylklamp | 73 | – | – |
| 2 | Trampa, printa och sälj | 294 | – | – |
| 2 | Bygg en dörr till skjulet | 56 | – | – |

---

# Simulering kapitel 1 – körning 1

*Gjord 2026-11-20 06:56 med `verktyg/sim-kapitel1.mjs` + `verktyg/sim-bot.js` (punkt AX). Boten går 4,5 m/s, läser 15 tecken/s, trampar, vevar, plockar, printar, köper och säljer via spelets egna funktioner. Tiderna är speltid.*

## Sammanfattning

| Dag | Minuter | Väntan | Prints (totalt) | Kr vid sömn | Bär | Trivsel |
|---|---|---|---|---|---|---|
| 1 | 15.7 | 1 % | 17 | 170 | 6 | 21 |
| 2 | 15.2 | 1 % | 34 | 1547 | 10 | 38 |

## Flaskhalskartan (EE)

| Dag | bara | mala | trampa | strom | skrivare | inkomst | Upplåst |
|---|---|---|---|---|---|---|---|
| 1 | 7 | 9 | 19 | 108 | 268 | 15 | rullstall (skrivare, 5:49), grip (bara, 10:21, reserv), kruka (inkomst, 11:56) |
| 2 | 3 | 8 | 11 | 36 | 555 | 0 | kvarnmotor (mala, 3:36, reserv), trim_skrivare (skrivare, 5:36), vindsnurra (trampa, 12:11, reserv) |

TIDIG: 0 · FAST: 2 · upplåst av reserven (målet väntade 3 min): 3

**SKRATT:** 23 roliga ögonblick på 31 min (7.5 per 10 min, mål minst 5)

**Köp:**

- dag 1 10:36 – grip (50 kr)
- dag 1 12:09 – kruka (40 kr)
- dag 1 13:57 – sang (60 kr)
- dag 2 4:28 – kvarnmotor (50 kr)
- dag 2 13:21 – vindsnurra (133 kr)
- dag 2 14:19 – dorr (120 kr)

## Storykedjan (kvittens → varför → nytt mål)

| Dag | Tid | Id | Kvittens | Varför | Nytt mål | Tid till målet |
|---|---|---|---|---|---|---|
| 1 | 0:43 | lastat | Tung. Den har storebror aldrig burit så långt. |  | Skrivaren ställer jag där borta, mot skräpberget. Min första | 0.4 s |
| 1 | 2:47 | printStart | Den piper. Den GÖR något. |  | Cykeln är kraftverket. Nu får benen jobba. | 0.3 s |
| 1 | 2:52 | printKlar | Klar! Ta ut den innan den ändrar sig. |  | En nyckelring till, så länge brorsans rulle räcker. | – |
| 1 | 12:47 | krukaD1 | En kruka. Mamma skulle bli så stolt. Hon får inte veta. |  | Ali gillar krukor. Han sa det själv. | 0.9 s |
| 2 | 13:50 | vindsnurra | Den snurrar! Långsamt. Men den snurrar. | Om det regnar i natt drunknar jag. Ett tak. | Det drar från dörrhålet. En dörr kan jag printa. | 4.3 s |

## Hur länge nya mål väntade (från att förra målet blev klart till att det nya syntes i målrutan)

Snitt 6.6 s · max 77.1 s · över 4 s: 8 · över 8 s: 6 av 30

## Flaggor (42)

- **LUGN** dag 2 0:14: 0.0 s efter BÖRJA DAGEN: [lapp] "Första natten i en riktig säng. Jag printade den själv."
- **LUGN** dag 2 0:14: 0.0 s efter BÖRJA DAGEN: [meddelande] "Första natten i en riktig säng. Jag printade den själv."
- **LUGN** dag 2 0:14: 0.2 s efter BÖRJA DAGEN: [röst] "Första natten i en riktig säng. Jag printade den själv. · ST"
- **KROCK** dag 2 0:01: 1.9 s mellan [notis] "📻 Radio Tippen: Radio Tippen, Kjelle här. Skjulet vid tippe" och [meddelande] "Städa upp – och kanske träffa grannarna."
- **KROCK** dag 3 0:01: 2.8 s mellan [notis] "📻 Radio Tippen: Radio Tippen, Kjelle här. Skjulet vid tippe" och [meddelande] "Bära mer och få tak över huvudet."
- **RÖST AVBRUTEN** dag 1 6:32: ali: "Min fru säger att jag bor här. Hon har rätt. · REA" (behöver 4.0 s, fick 2.0 s) ← du: "Välj det du vill köpa och tryck Köp. Säl"
- **RÖST AVBRUTEN** dag 1 6:35: du: "Välj det du vill köpa och tryck Köp. Sälj längst n" (behöver 4.3 s, fick 2.5 s) ← bror: "VA FAN?! Fick du igång den?? Jag försökt"
- **RÖST AVBRUTEN** dag 1 6:59: ali: "Ali här. Jag såg dig cykla. Det ser jobbigt ut. Te" (behöver 6.9 s, fick 6.0 s) ← du: "Någon köpte nåt jag gjort. Det här kan f"
- **RÖST AVBRUTEN** dag 1 8:44: ali: "Nyckelringar igen? Folk tappar sina nycklar hela t" (behöver 5.9 s, fick 3.4 s) ← ali: "Du får bonus! 20 kr extra. Säg inget til"
- **RÖST AVBRUTEN** dag 1 10:37: ali: "Bra val. 3D-modellen är din. Den räcker till en. ·" (behöver 4.3 s, fick 2.4 s) ← du: "Min första 3D-modell! Nu ska den bara pr"
- **RÖST AVBRUTEN** dag 1 13:57: ali: "Sov gott, min vän. · REAKTION" (behöver 2.4 s, fick 1.5 s) ← du: "Sängen tar lång tid. Den är värd det. · "
- **RÖST AVBRUTEN** dag 2 0:01: kjelle: "Radio Tippen, Kjelle här. Skjulet vid tippen har f" (behöver 8.4 s, fick 2.1 s) ← du: "Dag 2 – Tippen och Rolf. Städa upp – och"
- **RÖST AVBRUTEN** dag 3 0:01: kjelle: "Radio Tippen, Kjelle här. Skjulet vid tippen har f" (behöver 9.0 s, fick 3.0 s) ← du: "Dag 3 – En skrivare till och taket. Bära"
- **KEDJA** dag 1 2:52: printKlar: kvittensen lästes aldrig upp
- **KEDJA** dag 2 13:50: vindsnurra: nytt mål 4.3 s efter kedjan (max 2 s)
- **SEN** dag 1 12:06: 12.4 s efter händelsen: ali: "Ali här. Jag såg Skräpgrip på avstånd. Ett streck blev lite snett. Mit"
- **PAUS** dag 1 0:47: 0.0 s paus före "Skrivaren ställer jag där borta, mot skräpberget. "
- **PAUS** dag 1 2:53: 0.0 s paus före "En nyckelring till, så länge brorsans rulle räcker"
- **PAUS** dag 1 4:29: 0.0 s paus före "Kvarnen funkar. Soptippen är en gruva."
- **PAUS** dag 2 5:08: 0.0 s paus före "Gården är full av skräp. Jag börjar vid skjulet."
- **PAUS** dag 2 5:47: 0.0 s paus före "Gården är STÄDAD. Av mig. Frivilligt. Mamma skulle"
- **PAUS** dag 2 13:53: 0.0 s paus före "🌬️ Vindsnurran sitter på taket – den trampar cyke"
- **PAUS** dag 2 14:53: 0.0 s paus före "Klart för idag – sov när du vill."
- **PAUS** dag 2 14:56: 0.0 s paus före "🌇 Klockan är 21. Ali slår igen luckan. Dagens job"
- **UPPREPNING** dag 1 8:06: info:bra: "3 st i tratten – veva nu!" (förra gången dag 1)
- **UPPREPNING** dag 1 8:26: info:bra: "3 st i tratten – veva nu!" (förra gången dag 1)
- **UPPREPNING** dag 1 11:24: info:bra: "3 st i tratten – veva nu!" (förra gången dag 1)
- **UPPREPNING** dag 1 11:48: info:bra: "3 st i tratten – veva nu!" (förra gången dag 1)
- **UPPREPNING** dag 1 15:00: info:bra: "6 st i tratten – veva nu!" (förra gången dag 1)
- **UPPREPNING** dag 2 2:07: info:bra: "6 st i tratten – veva nu!" (förra gången dag 1)
- **UPPREPNING** dag 2 13:01: info:bra: "10 st i tratten – motorn mal" (förra gången dag 2)
- **TIPS OM SAKNAD SAK** dag 1 1:38: notisen: "Om jag trampar ström med cykeln kan skrivaren gå. " nämner cykeln
- **RADBRYTNING** dag 1 1:38: för lång rad (41): "Ställ cykeln och generatorn vid skrivaren"
- **TIPS OM SAKNAD SAK** dag 1 1:57: notisen: "Storebrors generator. Den gör el av trampandet." nämner cykeln
- **RADBRYTNING** dag 1 2:24: för lång rad (47): "Klicka på skrivaren och välj vad du vill printa"
- **FAST** dag 2 10:05: skrivare har tagit stopp 240 s utan att något låses upp (nästa: skrivare2)
- **DÖD KNAPP** dag 2 15:03: Läs upp i ph-notis: täckt av CANVAS
- **FAST** dag 2 15:08: skrivare har tagit stopp 480 s utan att något låses upp (nästa: skrivare2)
- **TORRT** dag 1 0:00: 243 s utan roligt ögonblick
- **TORRT** dag 1 7:14: 282 s utan roligt ögonblick
- **TEMPO** dag 1 15:39: dag 1 tog 15.7 min (mål 10–12)
- **TEMPO** dag 2 15:09: dag 2 tog 15.2 min (mål 10–15)

Sidfel: inga

## Dag 1

| Tid | Källa | Vem | Text |
|---|---|---|---|
| 0:00 | MÅL |  | Lasta av skrivaren från cykeln |
| 0:00 | MÅL |  | Lasta av skrivaren från cykeln |
| 0:00 | pil |  | Lasta av skrivaren från cykeln |
| 0:04 | sak | bud | (tips) |
| 0:05 | väntar | du | Se så mycket skräp här är. Det är ju en guldgruva! |
| 0:05 | klar | bud | (tips) |
| 0:07 | sak | du | Se så mycket skräp här är. Det är ju en guldgruva! |
| 0:07 | röst | du | Se så mycket skräp här är. Det är ju en guldgruva! · STORY |
| 0:12 | sak-del | du | Men först en skylt, så att alla vet var jag bor. |
| 0:12 | röst | du | Men först en skylt, så att alla vet var jag bor. · STORY |
| 0:15 | hjälp | kontroll | W A S D: Gå |
| 0:16 | klar | du | Se så mycket skräp här är. Det är ju en guldgruva! |
| 0:17 | händelse | tagit | sak=hammare |
| 0:18 | hjälp | kontroll | Hjulet eller 1–9: Rulla hjulet för att ta hammaren |
| 0:19 | struken | info:info | ⏎ Enter – hoppa över |
| 0:20 | hjälp | kontroll | Klick: Klicka för att spika |
| 0:22 | varför | du | Skrivaren står kvar på cykeln. Den ska av. |
| 0:22 | väntar | du | Skrivaren står kvar på cykeln. Den ska av. |
| 0:22 | lapp | 📔 Dagbok | Spikade ihop en skylt av lösa bräder från tippen. Soptippsvägen 1. Det är inte mycket för världen. Men det är MITT. |
| 0:22 | meddelande | du | Spikade ihop en skylt av lösa bräder från tippen. Soptippsvägen 1. Det är inte mycket för världen. Men det är MITT. |
| 0:22 | dagbokkort | du | Spikade ihop en skylt av lösa bräder från tippen. Soptippsvägen 1. Det är inte mycket för världen. Men det är MITT. |
| 0:22 | väntar | berattare | Klicka på cykeln och lasta av storebrors skrivare. |
| 0:23 | röst | du | Spikade ihop en skylt av lösa bräder från tippen. Soptippsvägen 1. Det är inte mycket för världen. Men det är MITT. · STORY |
| 0:32 | händelse | brevLast | id=skylt |
| 0:32 | sak | du | Skrivaren står kvar på cykeln. Den ska av. |
| 0:32 | notis | tanke | 💭 Skrivaren står kvar på cykeln. Den ska av. |
| 0:32 | röst | du | Skrivaren står kvar på cykeln. Den ska av. · STORY |
| 0:36 | klar | du | Skrivaren står kvar på cykeln. Den ska av. |
| 0:36 | sak | berattare | Klicka på cykeln och lasta av storebrors skrivare. |
| 0:36 | röst | berattare | Klicka på cykeln och lasta av storebrors skrivare. · MÅL |
| 0:40 | klar | berattare | Klicka på cykeln och lasta av storebrors skrivare. |
| 0:43 | händelse | lastatAv | sak=skrivare |
| 0:43 | paket |  | sms |
| 0:43 | väntar | mamma | HUR KUNDE DU BARA GÅ?!?! Är du ok?? SVARA NÄR JAG RINGER!! |
| 0:43 | kvittens | du | Tung. Den har storebror aldrig burit så långt. |
| 0:43 | väntar | du | Tung. Den har storebror aldrig burit så långt. |
| 0:43 | väntar | info:bra | 🖨️ Brorsans skrivare. Den ska stå där borta, mot skräpberget. |
| 0:43 | sak | du | Tung. Den har storebror aldrig burit så långt. |
| 0:43 | notis | tanke | 💭 Tung. Den har storebror aldrig burit så långt. |
| 0:43 | röst | du | Tung. Den har storebror aldrig burit så långt. · STORY |
| 0:43 | händelse | malKlart | id=lasta del=Dag 1 – Kom igång nasta=stall |
| 0:43 | väntar | du | Skrivaren ställer jag där borta, mot skräpberget. Min första verkstad. |
| 0:43 | MÅL |  | Ställ skrivaren på rutan |
| 0:46 | målruta |  | Ställ skrivaren på rutan |
| 0:47 | klar | du | Tung. Den har storebror aldrig burit så långt. |
| 0:47 | sak | du | Skrivaren ställer jag där borta, mot skräpberget. Min första verkstad. |
| 0:47 | pil |  | Ställ skrivaren på rutan |
| 0:47 | röst | du | Skrivaren ställer jag där borta, mot skräpberget. Min första verkstad. · MÅL |
| 0:47 | nick |  | nick:1 |
| 0:48 | notis | tanke | 💭 Skrivaren ställer jag där borta, mot skräpberget. Min första verkstad. |
| 0:53 | klar | du | Skrivaren ställer jag där borta, mot skräpberget. Min första verkstad. |
| 0:53 | struken | info:bra | 🖨️ Brorsans skrivare. Den ska stå där borta, mot skräpberget. |
| 1:06 | väntar | info:bra | 🖨️ Storebrors skrivare står på sin plats i linje 1 |
| 1:06 | händelse | placerat | sak=skrivareS |
| 1:06 | paket |  | tanke |
| 1:06 | tanke | du | Storebrors rulle. Den räcker inte länge. |
| 1:06 | väntar | du | Storebrors rulle. Den räcker inte länge. |
| 1:06 | duns | du | ställs ner |
| 1:06 | sak | info:bra | 🖨️ Storebrors skrivare står på sin plats i linje 1 |
| 1:06 | kvitto-visas | info:bra | 🖨️ Storebrors skrivare står på sin plats i linje 1 |
| 1:06 | toast | bra | 🖨️ Storebrors skrivare står på sin plats i linje 1 |
| 1:06 | händelse | malKlart | id=stall del=Dag 1 – Kom igång nasta=strom |
| 1:06 | struken | du | Storebrors rulle. Den räcker inte länge. |
| 1:06 | väntar | du | Skrivaren behöver ström. Hur fixar jag det här ute? |
| 1:06 | MÅL |  | Skrivaren behöver ström |
| 1:08 | klar | info:bra | 🖨️ Storebrors skrivare står på sin plats i linje 1 |
| 1:08 | målruta |  | Skrivaren behöver ström |
| 1:10 | kvittens-bock |  | ✓ Ställ skrivaren på rutan |
| 1:10 | sak | du | Skrivaren behöver ström. Hur fixar jag det här ute? |
| 1:10 | pil |  | Skrivaren behöver ström |
| 1:10 | notis | tanke | 💭 Skrivaren behöver ström. Hur fixar jag det här ute? |
| 1:10 | röst | du | Skrivaren behöver ström. Hur fixar jag det här ute? · MÅL |
| 1:14 | klar | du | Skrivaren behöver ström. Hur fixar jag det här ute? |
| 1:31 | paket |  | tanke |
| 1:31 | tanke | du | Cykeln… och storebrors generator? |
| 1:31 | väntar | du | Cykeln… och storebrors generator? |
| 1:31 | sak | du | Cykeln… och storebrors generator? |
| 1:31 | kvitto-visas | du | Cykeln… och storebrors generator? |
| 1:31 | notis | tanke | 💭 Cykeln… och storebrors generator? |
| 1:31 | röst | du | Cykeln… och storebrors generator? · STORY |
| 1:31 | händelse | malKlart | id=strom del=Dag 1 – Kom igång nasta=bygg |
| 1:31 | väntar | du | Om jag trampar ström med cykeln kan skrivaren gå. Cykeln där, generatorn bredvid. |
| 1:32 | MÅL |  | Ställ cykeln och generatorn vid skrivaren · 0/2 |
| 1:34 | klar | du | Cykeln… och storebrors generator? |
| 1:34 | målruta |  | Ställ cykeln och generatorn vid skrivaren · 0/2 |
| 1:35 | sak | du | Om jag trampar ström med cykeln kan skrivaren gå. Cykeln där, generatorn bredvid. |
| 1:35 | pil |  | Ställ cykeln och generatorn vid skrivaren · 0/2 |
| 1:35 | röst | du | Om jag trampar ström med cykeln kan skrivaren gå. Cykeln där, generatorn bredvid. · MÅL |
| 1:35 | nick |  | nick:3 |
| 1:35 | kvittens-bock |  | ✓ Skrivaren behöver ström |
| 1:37 | notis | tanke | 💭 Om jag trampar ström med cykeln kan skrivaren gå. Cykeln där, generatorn bredvid. |
| 1:38 | brott | TIPS OM SAKNAD SAK | notisen: "Om jag trampar ström med cykeln kan skrivaren gå. " nämner cykeln |
| 1:38 | brott | RADBRYTNING | för lång rad (41): "Ställ cykeln och generatorn vid skrivaren" |
| 1:41 | klar | du | Om jag trampar ström med cykeln kan skrivaren gå. Cykeln där, generatorn bredvid. |
| 1:54 | paket |  | tanke |
| 1:54 | tanke | du | Storebrors generator. Den gör el av trampandet. |
| 1:54 | väntar | du | Storebrors generator. Den gör el av trampandet. |
| 1:54 | sak | du | Storebrors generator. Den gör el av trampandet. |
| 1:54 | notis | tanke | 💭 Storebrors generator. Den gör el av trampandet. |
| 1:54 | röst | du | Storebrors generator. Den gör el av trampandet. · REAKTION |
| 1:55 | väntar | berattare | Ställ cykeln och generatorn vid skrivaren. |
| 1:55 | nick |  | paminn:3 |
| 1:57 | brott | TIPS OM SAKNAD SAK | notisen: "Storebrors generator. Den gör el av trampandet." nämner cykeln |
| 1:58 | klar | du | Storebrors generator. Den gör el av trampandet. |
| 2:00 | sak | berattare | Ställ cykeln och generatorn vid skrivaren. |
| 2:00 | röst | berattare | Ställ cykeln och generatorn vid skrivaren. · REAKTION |
| 2:03 | klar | berattare | Ställ cykeln och generatorn vid skrivaren. |
| 2:10 | händelse | placerat | sak=generator |
| 2:10 | duns | du | ställs ner |
| 2:15 | ljud | utrustning | Cykeln i famnen |
| 2:15 | händelse | lyft | sak=cykel |
| 2:21 | händelse | placerat | sak=cykel |
| 2:21 | duns | du | ställs ner |
| 2:23 | händelse | ombyggd | sak=cykel |
| 2:23 | varför | du | Okej. Välj nåt litet att printa. |
| 2:23 | väntar | du | Okej. Välj nåt litet att printa. |
| 2:23 | sak | du | Okej. Välj nåt litet att printa. |
| 2:23 | notis | tanke | 💭 Okej. Välj nåt litet att printa. |
| 2:23 | röst | du | Okej. Välj nåt litet att printa. · STORY |
| 2:23 | händelse | malKlart | id=bygg del=Dag 1 – Kom igång nasta=valjModell |
| 2:23 | väntar | du | Nu ska skrivaren få jobba. Jag väljer något litet först. |
| 2:23 | målruta |  | Klicka på skrivaren och välj vad du vill printa |
| 2:24 | MÅL |  | Klicka på skrivaren och välj vad du vill printa |
| 2:24 | brott | RADBRYTNING | för lång rad (47): "Klicka på skrivaren och välj vad du vill printa" |
| 2:26 | klar | du | Okej. Välj nåt litet att printa. |
| 2:26 | sak | du | Nu ska skrivaren få jobba. Jag väljer något litet först. |
| 2:26 | pil |  | Klicka på skrivaren och välj vad du vill printa |
| 2:26 | röst | du | Nu ska skrivaren få jobba. Jag väljer något litet först. · MÅL |
| 2:29 | notis | tanke | 💭 Nu ska skrivaren få jobba. Jag väljer något litet först. |
| 2:31 | klar | du | Nu ska skrivaren få jobba. Jag väljer något litet först. |
| 2:47 | händelse | printStart | sak=nyckelring |
| 2:47 | kvittens | du | Den piper. Den GÖR något. |
| 2:47 | väntar | du | Den piper. Den GÖR något. |
| 2:47 | sak | du | Den piper. Den GÖR något. |
| 2:47 | notis | tanke | 💭 Den piper. Den GÖR något. |
| 2:47 | röst | du | Den piper. Den GÖR något. · STORY |
| 2:47 | tanke | du | Den stannar när jag slutar trampa. Ström som sparas hade varit nåt. |
| 2:47 | väntar | du | Den stannar när jag slutar trampa. Ström som sparas hade varit nåt. |
| 2:47 | händelse | malKlart | id=valjModell del=Dag 1 – Kom igång nasta=trampa |
| 2:47 | struken | du | Den stannar när jag slutar trampa. Ström som sparas hade varit nåt. |
| 2:47 | väntar | du | Cykeln är kraftverket. Nu får benen jobba. |
| 2:47 | målruta |  | Trampa! |
| 2:47 | MÅL |  | Trampa! |
| 2:49 | klar | du | Den piper. Den GÖR något. |
| 2:49 | sak | du | Cykeln är kraftverket. Nu får benen jobba. |
| 2:49 | pil |  | Trampa! |
| 2:49 | röst | du | Cykeln är kraftverket. Nu får benen jobba. · MÅL |
| 2:52 | händelse | printKlar | sak=nyckelring n=1 |
| 2:52 | kvittens | du | Klar! Ta ut den innan den ändrar sig. |
| 2:52 | väntar | du | Klar! Ta ut den innan den ändrar sig. |
| 2:52 | händelse | malKlart | id=trampa del=Dag 1 – Kom igång nasta=rullSlut |
| 2:52 | väntar | du | En nyckelring till, så länge brorsans rulle räcker. |
| 2:52 | MÅL |  | Printa en nyckelring till |
| 2:52 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 2:52 | notis | tanke | 💭 Cykeln är kraftverket. Nu får benen jobba. |
| 2:53 | klar | du | Cykeln är kraftverket. Nu får benen jobba. |
| 2:53 | struken | du | Klar! Ta ut den innan den ändrar sig. |
| 2:53 | sak | du | En nyckelring till, så länge brorsans rulle räcker. |
| 2:53 | målruta |  | Printa en nyckelring till |
| 2:53 | pil |  | Printa en nyckelring till |
| 2:53 | röst | du | En nyckelring till, så länge brorsans rulle räcker. · MÅL |
| 2:57 | klar | du | En nyckelring till, så länge brorsans rulle räcker. |
| 2:57 | notis | tanke | 💭 En nyckelring till, så länge brorsans rulle räcker. |
| 3:07 | händelse | printStart | sak=nyckelring |
| 3:10 | paket |  | tanke |
| 3:10 | tanke | du | Slut. Och här ligger ju plast överallt. Om man bara kunde göra tråd av skräpet… |
| 3:10 | väntar | du | Slut. Och här ligger ju plast överallt. Om man bara kunde göra tråd av skräpet… |
| 3:10 | händelse | malKlart | id=rullSlut del=Dag 1 – Kom igång nasta=aliKvarn |
| 3:10 | väntar | du | Grannen från affären kommer över vägen. Vad vill han? |
| 3:10 | MÅL |  | Ali kommer över vägen |
| 3:10 | scenInfo | ali | Ali går över vägen till skrivaren |
| 3:10 | sak | du | Slut. Och här ligger ju plast överallt. Om man bara kunde göra tråd av skräpet… |
| 3:10 | kvitto-visas | du | Slut. Och här ligger ju plast överallt. Om man bara kunde göra tråd av skräpet… |
| 3:10 | notis | tanke | 💭 Slut. Och här ligger ju plast överallt. Om man bara kunde göra tråd av skräpet… |
| 3:10 | röst | du | Slut. Och här ligger ju plast överallt. Om man bara kunde göra tråd av skräpet… · STORY |
| 3:14 | målruta |  | Ali kommer över vägen |
| 3:14 | kvittens-bock |  | ✓ Printa en nyckelring till |
| 3:17 | klar | du | Slut. Och här ligger ju plast överallt. Om man bara kunde göra tråd av skräpet… |
| 3:17 | replik | ali | Ah. En uppfinnare till, hör jag. |
| 3:17 | väntar | värld:Ah. En uppfinnare till, hör ja | Ah. En uppfinnare till, hör jag. |
| 3:17 | väntar | ali | Ah. En uppfinnare till, hör jag. |
| 3:17 | sak | du | Grannen från affären kommer över vägen. Vad vill han? |
| 3:17 | pil |  | Ali kommer över vägen |
| 3:17 | notis | tanke | 💭 Grannen från affären kommer över vägen. Vad vill han? |
| 3:17 | röst | du | Grannen från affären kommer över vägen. Vad vill han? · MÅL |
| 3:21 | klar | du | Grannen från affären kommer över vägen. Vad vill han? |
| 3:22 | replik | ali | Jag har stått där borta och tittat. Skrivare på en cykel. Det gillar jag. |
| 3:22 | väntar | värld:Jag har stått där borta och ti | Jag har stått där borta och tittat. Skrivare på en cykel. Det gillar jag. |
| 3:22 | väntar | ali | Jag har stått där borta och tittat. Skrivare på en cykel. Det gillar jag. |
| 3:22 | replik | ali | Vänta. |
| 3:22 | väntar | värld:Vänta. | Vänta. |
| 3:22 | väntar | ali | Vänta. |
| 3:23 | sak | mamma | HUR KUNDE DU BARA GÅ?!?! Är du ok?? SVARA NÄR JAG RINGER!! |
| 3:23 | sms | mamma | HUR KUNDE DU BARA GÅ?!?! Är du ok?? SVARA NÄR JAG RINGER!! |
| 3:23 | sms-bubbla | mamma | HUR KUNDE DU BARA GÅ?!?! Är du ok?? SVARA NÄR JAG RINGER!! |
| 3:23 | röst | mamma | HUR KUNDE DU BARA GÅ?!?! Är du ok?? SVARA NÄR JAG RINGER!! · STORY |
| 3:28 | hjälp | kontroll | Tab: Dina sms och dagboken |
| 3:28 | klar | mamma | HUR KUNDE DU BARA GÅ?!?! Är du ok?? SVARA NÄR JAG RINGER!! |
| 3:30 | struken | värld:Ah. En uppfinnare till, hör ja | Ah. En uppfinnare till, hör jag. |
| 3:30 | sak | ali | Ah. En uppfinnare till, hör jag. |
| 3:30 | röst | ali | Ah. En uppfinnare till, hör jag. · STORY |
| 3:33 | klar | ali | Ah. En uppfinnare till, hör jag. |
| 3:35 | struken | värld:Jag har stått där borta och ti | Jag har stått där borta och tittat. Skrivare på en cykel. Det gillar jag. |
| 3:35 | sak | ali | Jag har stått där borta och tittat. Skrivare på en cykel. Det gillar jag. |
| 3:35 | röst | ali | Jag har stått där borta och tittat. Skrivare på en cykel. Det gillar jag. · STORY |
| 3:37 | väntar | berattare | Grannen från affären kommer över vägen. |
| 3:41 | klar | ali | Jag har stått där borta och tittat. Skrivare på en cykel. Det gillar jag. |
| 3:41 | replik | ali | Pappas gamla köttkvarn. Den har malt allt utom kött. |
| 3:41 | väntar | värld:Pappas gamla köttkvarn. Den ha | Pappas gamla köttkvarn. Den har malt allt utom kött. |
| 3:41 | väntar | ali | Pappas gamla köttkvarn. Den har malt allt utom kött. |
| 3:42 | replik | ali | Betala när du blir rik. |
| 3:42 | väntar | värld:Betala när du blir rik. | Betala när du blir rik. |
| 3:42 | väntar | ali | Betala när du blir rik. |
| 3:42 | händelse | malKlart | id=aliKvarn del=Dag 1 – Kom igång nasta=kvarn |
| 3:42 | väntar | du | Kvarnen ställer jag bredvid skrivaren, närmast skräpberget. Där finns skräpet. |
| 3:42 | MÅL |  | Ställ kvarnen vid tornet |
| 3:43 | replik | ali | Och kommer du på nåt smart, så vet du var jag bor. |
| 3:43 | väntar | värld:Och kommer du på nåt smart, så | Och kommer du på nåt smart, så vet du var jag bor. |
| 3:43 | väntar | ali | Och kommer du på nåt smart, så vet du var jag bor. |
| 3:43 | struken | värld:Vänta. | Vänta. |
| 3:43 | sak | ali | Vänta. |
| 3:43 | röst | ali | Vänta. · STORY |
| 3:46 | målruta |  | Ställ kvarnen vid tornet |
| 3:46 | klar | ali | Vänta. |
| 3:46 | kvittens-bock |  | ✓ Ali kommer över vägen |
| 3:48 | sak | du | Kvarnen ställer jag bredvid skrivaren, närmast skräpberget. Där finns skräpet. |
| 3:48 | pil |  | Ställ kvarnen vid tornet |
| 3:48 | notis | tanke | 💭 Kvarnen ställer jag bredvid skrivaren, närmast skräpberget. Där finns skräpet. |
| 3:48 | röst | du | Kvarnen ställer jag bredvid skrivaren, närmast skräpberget. Där finns skräpet. · MÅL |
| 3:48 | nick |  | nick:8 |
| 3:54 | klar | du | Kvarnen ställer jag bredvid skrivaren, närmast skräpberget. Där finns skräpet. |
| 3:56 | händelse | placerat | sak=kvarnen |
| 3:56 | struken | kedja | kvarnStar |
| 3:56 | duns | du | ställs ner |
| 3:56 | toast | bra | 🔗 Slangen kopplad |
| 3:56 | händelse | malKlart | id=kvarn del=Dag 1 – Kom igång nasta=flaska |
| 3:56 | väntar | du | Skräp i kvarnen, sen vevar jag. Då blir det tråd. |
| 3:56 | MÅL |  | Plocka skräp och veva kvarnen |
| 3:56 | struken | berattare | Grannen från affären kommer över vägen. |
| 3:56 | struken | värld:Pappas gamla köttkvarn. Den ha | Pappas gamla köttkvarn. Den har malt allt utom kött. |
| 3:56 | sak | ali | Pappas gamla köttkvarn. Den har malt allt utom kött. |
| 3:56 | röst | ali | Pappas gamla köttkvarn. Den har malt allt utom kött. · STORY |
| 4:00 | målruta |  | Plocka skräp och veva kvarnen |
| 4:00 | kvittens-bock |  | ✓ Ställ kvarnen vid tornet |
| 4:01 | klar | ali | Pappas gamla köttkvarn. Den har malt allt utom kött. |
| 4:03 | sak | du | Skräp i kvarnen, sen vevar jag. Då blir det tråd. |
| 4:03 | pil |  | Plocka skräp och veva kvarnen |
| 4:03 | notis | tanke | 💭 Skräp i kvarnen, sen vevar jag. Då blir det tråd. |
| 4:03 | röst | du | Skräp i kvarnen, sen vevar jag. Då blir det tråd. · MÅL |
| 4:03 | väntar | kjelle | God morgon, det är Kjelle på Radio Tippen! Det har flyttat in någon i det gamla skjulet. Med en cykel och en skrivare. Spännande, Gunnar. |
| 4:03 | radio | kjelle | God morgon, det är Kjelle på Radio Tippen! Det har flyttat in någon i det gamla skjulet. Med en cykel och en skrivare. Spännande, Gunnar. |
| 4:03 | skratt | du | Radio-Kjelle |
| 4:03 | nick |  | nick:9 |
| 4:07 | tanke | du | Vem är Gunnar? |
| 4:07 | väntar | du | Vem är Gunnar? |
| 4:07 | klar | du | Skräp i kvarnen, sen vevar jag. Då blir det tråd. |
| 4:09 | struken | värld:Betala när du blir rik. | Betala när du blir rik. |
| 4:09 | sak | ali | Betala när du blir rik. |
| 4:09 | röst | ali | Betala när du blir rik. · STORY |
| 4:11 | klar | ali | Betala när du blir rik. |
| 4:13 | struken | värld:Och kommer du på nåt smart, så | Och kommer du på nåt smart, så vet du var jag bor. |
| 4:13 | sak | ali | Och kommer du på nåt smart, så vet du var jag bor. |
| 4:13 | röst | ali | Och kommer du på nåt smart, så vet du var jag bor. · STORY |
| 4:17 | klar | ali | Och kommer du på nåt smart, så vet du var jag bor. |
| 4:19 | struken | kjelle | God morgon, det är Kjelle på Radio Tippen! Det har flyttat in någon i det gamla skjulet. Med en cykel och en skrivare. Spännande, Gunnar. |
| 4:19 | struken | du | Vem är Gunnar? |
| 4:23 | väntar | berattare | Lägg skräpet i kvarnen och veva. |
| 4:23 | nick |  | paminn:9 |
| 4:24 | sak | berattare | Lägg skräpet i kvarnen och veva. |
| 4:24 | röst | berattare | Lägg skräpet i kvarnen och veva. · REAKTION |
| 4:26 | klar | berattare | Lägg skräpet i kvarnen och veva. |
| 4:27 | väntar | info:bra | 3 st i tratten – veva nu! |
| 4:27 | sak | info:bra | 3 st i tratten – veva nu! |
| 4:27 | kvitto-visas | info:bra | 3 st i tratten – veva nu! |
| 4:27 | toast | bra | 3 st i tratten – veva nu! |
| 4:28 | händelse | malKlart | id=flaska del=Dag 1 – Kom igång nasta=egenPrint |
| 4:28 | struken | kedja | trad |
| 4:28 | väntar | du | Kvarnen funkar. Soptippen är en gruva. |
| 4:28 | MÅL |  | Printa en nyckelring av din egen tråd |
| 4:29 | klar | info:bra | 3 st i tratten – veva nu! |
| 4:29 | sak | du | Kvarnen funkar. Soptippen är en gruva. |
| 4:29 | kvitto-visas | du | Kvarnen funkar. Soptippen är en gruva. |
| 4:29 | lapp | 📔 Dagbok | Kvarnen funkar. Soptippen är en gruva. |
| 4:29 | meddelande | du | Kvarnen funkar. Soptippen är en gruva. |
| 4:29 | dagbokkort | du | Kvarnen funkar. Soptippen är en gruva. |
| 4:29 | röst | du | Kvarnen funkar. Soptippen är en gruva. · STORY |
| 4:34 | händelse | brevLast | id=malt |
| 4:34 | klar | du | Kvarnen funkar. Soptippen är en gruva. |
| 5:45 | väntar | du | Min egen tråd. Nu printar jag en nyckelring av den. |
| 5:45 | målruta |  | Printa en nyckelring av din egen tråd |
| 5:45 | sak | du | Min egen tråd. Nu printar jag en nyckelring av den. |
| 5:45 | pil |  | Printa en nyckelring av din egen tråd |
| 5:45 | notis | tanke | 💭 Min egen tråd. Nu printar jag en nyckelring av den. |
| 5:45 | röst | du | Min egen tråd. Nu printar jag en nyckelring av den. · MÅL |
| 5:47 | toast | guld | Nyckelring är klar – ta ut den |
| 5:47 | väntar | notis:Skrivare S: Nyckelring är klar – ta ut d | Skrivare S: Nyckelring är klar – ta ut den |
| 5:47 | händelse | printKlar | sak=nyckelring n=2 |
| 5:47 | händelse | malKlart | id=egenPrint del=Dag 1 – Kom igång nasta=salj |
| 5:47 | väntar | du | Affären på andra sidan vägen kanske köper sånt här. |
| 5:47 | MÅL |  | Sälj nyckelringarna hos Ali |
| 5:49 | upplåst | skrivare | rullstall |
| 5:49 | brott | UPPLÅST | rullstall (skrivare 75 av 75) |
| 5:49 | händelse | upplast | id=rullstall flask=skrivare |
| 5:49 | paket |  | tanke → sms |
| 5:49 | tanke | du | Kvarnen står och väntar för att hållaren är full. Om den rymde fler rullar kunde den mala hela tiden. |
| 5:49 | väntar | du | Kvarnen står och väntar för att hållaren är full. Om den rymde fler rullar kunde den mala hela tiden. |
| 5:49 | väntar | ali | Ali här. Rullställ. Fyra rullar i stället för en. Har ett på hyllan. |
| 5:50 | klar | du | Min egen tråd. Nu printar jag en nyckelring av den. |
| 5:51 | målruta |  | Sälj nyckelringarna hos Ali |
| 5:51 | kvittens-bock |  | ✓ Printa en nyckelring av din egen tråd |
| 5:52 | sak | du | Affären på andra sidan vägen kanske köper sånt här. |
| 5:52 | pil |  | Sälj nyckelringarna hos Ali |
| 5:52 | notis | tanke | 💭 Affären på andra sidan vägen kanske köper sånt här. |
| 5:52 | röst | du | Affären på andra sidan vägen kanske köper sånt här. · MÅL |
| 5:56 | klar | du | Affären på andra sidan vägen kanske köper sånt här. |
| 5:58 | struken | notis:Skrivare S: Nyckelring är klar – ta ut d | Skrivare S: Nyckelring är klar – ta ut den |
| 5:58 | sak | du | Kvarnen står och väntar för att hållaren är full. Om den rymde fler rullar kunde den mala hela tiden. |
| 5:58 | notis | tanke | 💭 Kvarnen står och väntar för att hållaren är full. Om den rymde fler rullar kunde den mala hela tiden. |
| 5:58 | röst | du | Kvarnen står och väntar för att hållaren är full. Om den rymde fler rullar kunde den mala hela tiden. · STORY |
| 6:04 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 6:06 | klar | du | Kvarnen står och väntar för att hållaren är full. Om den rymde fler rullar kunde den mala hela tiden. |
| 6:07 | händelse | printStart | sak=nyckelring |
| 6:08 | sak | ali | Ali här. Rullställ. Fyra rullar i stället för en. Har ett på hyllan. |
| 6:08 | sms | ali | Ali här. Rullställ. Fyra rullar i stället för en. Har ett på hyllan. |
| 6:08 | sms-bubbla | ali | Ali här. Rullställ. Fyra rullar i stället för en. Har ett på hyllan. |
| 6:08 | röst | ali | Ali här. Rullställ. Fyra rullar i stället för en. Har ett på hyllan. · STORY |
| 6:12 | väntar | berattare | Sälj nyckelringarna hos Ali. |
| 6:12 | toast | guld | ✅ |
| 6:12 | händelse | printKlar | sak=nyckelring n=3 |
| 6:12 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 6:14 | klar | ali | Ali här. Rullställ. Fyra rullar i stället för en. Har ett på hyllan. |
| 6:16 | sak | berattare | Sälj nyckelringarna hos Ali. |
| 6:16 | röst | berattare | Sälj nyckelringarna hos Ali. · REAKTION |
| 6:18 | klar | berattare | Sälj nyckelringarna hos Ali. |
| 6:30 | röst | ali | Min fru säger att jag bor här. Hon har rätt. · REAKTION |
| 6:30 | butiksbubbla | ali | Min fru säger att jag bor här. Hon har rätt. |
| 6:32 | paket |  | sms |
| 6:32 | väntar | bror | VA FAN?! Fick du igång den?? Jag försökte i typ ett år. Den bara pep. 😳 |
| 6:32 | skratt | bror | VA FAN?! Fick du igång den?? Jag försökt |
| 6:32 | struken | kedja | aliKvarn |
| 6:32 | aliSalt | ali | 45 |
| 6:32 | röst | du | Välj det du vill köpa och tryck Köp. Sälj längst ned. · MÅL |
| 6:33 | händelse | malKlart | id=salj del=Dag 1 – Kom igång nasta=powerbank |
| 6:33 | väntar | du | Ali har något åt mig. Jag går över vägen till affären. |
| 6:33 | MÅL |  | Gå till Alis butik |
| 6:35 | sak | bror | VA FAN?! Fick du igång den?? Jag försökte i typ ett år. Den bara pep. 😳 |
| 6:35 | skratt | bror | VA FAN?! Fick du igång den?? Jag försökt |
| 6:35 | sms | bror | VA FAN?! Fick du igång den?? Jag försökte i typ ett år. Den bara pep. 😳 |
| 6:35 | skratt | bror | VA FAN?! Fick du igång den?? Jag försökt |
| 6:35 | sms-bubbla | bror | VA FAN?! Fick du igång den?? Jag försökte i typ ett år. Den bara pep. 😳 |
| 6:35 | skratt | bror | VA FAN?! Fick du igång den?? Jag försökt |
| 6:35 | röst | bror | VA FAN?! Fick du igång den?? Jag försökte i typ ett år. Den bara pep. 😳 · REAKTION |
| 6:35 | väntar | foto | Första nyckelringen |
| 6:35 | paket |  | tanke |
| 6:35 | tanke | du | Någon köpte nåt jag gjort. Det här kan funka. |
| 6:35 | väntar | du | Någon köpte nåt jag gjort. Det här kan funka. |
| 6:37 | kvittens-bock |  | ✓ Sälj nyckelringarna hos Ali |
| 6:38 | målruta |  | Gå till Alis butik |
| 6:41 | klar | bror | VA FAN?! Fick du igång den?? Jag försökte i typ ett år. Den bara pep. 😳 |
| 6:41 | skratt | bror | VA FAN?! Fick du igång den?? Jag försökt |
| 6:43 | sak | du | Ali har något åt mig. Jag går över vägen till affären. |
| 6:43 | pil |  | Gå till Alis butik |
| 6:43 | notis | tanke | 💭 Ali har något åt mig. Jag går över vägen till affären. |
| 6:43 | röst | du | Ali har något åt mig. Jag går över vägen till affären. · MÅL |
| 6:47 | klar | du | Ali har något åt mig. Jag går över vägen till affären. |
| 6:49 | sak | foto | Första nyckelringen |
| 6:49 | foto | du | Första nyckelringen |
| 6:52 | klar | foto | Första nyckelringen |
| 6:53 | paket | ali | ali → ge |
| 6:53 | röst | ali | Ali här. Jag såg dig cykla. Det ser jobbigt ut. Testa koppla på den här. Bra kunder får bonus. · STORY |
| 6:53 | butiksbubbla | ali | Ali här. Jag såg dig cykla. Det ser jobbigt ut. Testa koppla på den här. Bra kunder får bonus. |
| 6:59 | sak | du | Någon köpte nåt jag gjort. Det här kan funka. |
| 6:59 | notis | tanke | 💭 Någon köpte nåt jag gjort. Det här kan funka. |
| 6:59 | röst | du | Någon köpte nåt jag gjort. Det här kan funka. · STORY |
| 7:03 | klar | du | Någon köpte nåt jag gjort. Det här kan funka. |
| 7:14 | skratt | du | powerbanken på cykeln |
| 7:14 | paket |  | tanke |
| 7:14 | tanke | du | Nu sparas lite ström. En nyckelring, typ. Framtiden är här, och den sitter fast med eltejp. |
| 7:14 | väntar | du | Nu sparas lite ström. En nyckelring, typ. Framtiden är här, och den sitter fast med eltejp. |
| 7:14 | monterat | du | byggsats:powerbank |
| 7:14 | händelse | monterat | sak=powerbank |
| 7:14 | sak | du | Nu sparas lite ström. En nyckelring, typ. Framtiden är här, och den sitter fast med eltejp. |
| 7:14 | kvitto-visas | du | Nu sparas lite ström. En nyckelring, typ. Framtiden är här, och den sitter fast med eltejp. |
| 7:14 | notis | tanke | 💭 Nu sparas lite ström. En nyckelring, typ. Framtiden är här, och den sitter fast med eltejp. |
| 7:14 | röst | du | Nu sparas lite ström. En nyckelring, typ. Framtiden är här, och den sitter fast med eltejp. · REAKTION |
| 7:14 | händelse | malKlart | id=powerbank del=Dag 1 – Kom igång nasta=kopGrip |
| 7:14 | paket |  | lapp |
| 7:14 | lapp-kö | 🧺 Ali | Ali här. Nyckelringen sålde. Jag ville bli ingenjör, men fick ta över pappas butik. I natt lät jag en AI rita en skräpgrip åt mig. Kom och titta. |
| 7:14 | väntar | ali | Ali här. Nyckelringen sålde. Jag ville bli ingenjör, men fick ta över pappas butik. I natt lät jag en AI rita en skräpgrip åt mig. Kom och titta. |
| 7:14 | struken | kedja | harRadGrip |
| 7:14 | väntar | du | Med en skräpgrip slipper jag böja mig. Ali har en ritning. |
| 7:14 | MÅL |  | Plocka skräp och mal det |
| 7:17 | målruta |  | Plocka skräp och mal det |
| 7:18 | kvittens-bock |  | ✓ Gå till Alis butik |
| 7:21 | klar | du | Nu sparas lite ström. En nyckelring, typ. Framtiden är här, och den sitter fast med eltejp. |
| 7:21 | sak | du | Med en skräpgrip slipper jag böja mig. Ali har en ritning. |
| 7:21 | pil |  | Plocka skräp och mal det |
| 7:21 | notis | tanke | 💭 Med en skräpgrip slipper jag böja mig. Ali har en ritning. |
| 7:21 | röst | du | Med en skräpgrip slipper jag böja mig. Ali har en ritning. · MÅL |
| 7:22 | nick |  | nick:13 |
| 7:26 | klar | du | Med en skräpgrip slipper jag böja mig. Ali har en ritning. |
| 7:28 | sak | ali | Ali här. Nyckelringen sålde. Jag ville bli ingenjör, men fick ta över pappas butik. I natt lät jag en AI rita en skräpgrip åt mig. Kom och titta. |
| 7:28 | sms | ali | Ali här. Nyckelringen sålde. Jag ville bli ingenjör, men fick ta över pappas butik. I natt lät jag en AI rita en skräpgrip åt mig. Kom och titta. |
| 7:28 | sms-bubbla | ali | Ali här. Nyckelringen sålde. Jag ville bli ingenjör, men fick ta över pappas butik. I natt lät jag en AI rita en skräpgrip åt mig. Kom och titta. |
| 7:28 | röst | ali | Ali här. Nyckelringen sålde. Jag ville bli ingenjör, men fick ta över pappas butik. I natt lät jag en AI rita en skräpgrip åt mig. Kom och titta. · STORY |
| 7:40 | klar | ali | Ali här. Nyckelringen sålde. Jag ville bli ingenjör, men fick ta över pappas butik. I natt lät jag en AI rita en skräpgrip åt mig. Kom och titta. |
| 7:41 | väntar | berattare | Köp en skräpgrip hos Ali. Den kostar femtio kronor. |
| 7:42 | sak | berattare | Köp en skräpgrip hos Ali. Den kostar femtio kronor. |
| 7:42 | röst | berattare | Köp en skräpgrip hos Ali. Den kostar femtio kronor. · REAKTION |
| 7:47 | klar | berattare | Köp en skräpgrip hos Ali. Den kostar femtio kronor. |
| 7:49 | händelse | printStart | sak=nyckelring |
| 7:50 | toast | fel | Ingen ström – trampa cykeln |
| 7:50 | väntar | notis:Skrivare S: Ingen ström – trampa cykeln | Skrivare S: Ingen ström – trampa cykeln |
| 7:50 | sak | notis:Skrivare S: Ingen ström – trampa cykeln | Skrivare S: Ingen ström – trampa cykeln |
| 7:50 | notis | fel | Skrivare S: Ingen ström – trampa cykeln |
| 7:50 | toast | guld | ✅ |
| 7:50 | händelse | printKlar | sak=nyckelring n=4 |
| 7:51 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 7:53 | klar | notis:Skrivare S: Ingen ström – trampa cykeln | Skrivare S: Ingen ström – trampa cykeln |
| 7:53 | händelse | printStart | sak=nyckelring |
| 7:54 | toast | guld | ✅ |
| 7:54 | händelse | printKlar | sak=nyckelring n=5 |
| 8:06 | väntar | info:bra | 3 st i tratten – veva nu! |
| 8:06 | sak | info:bra | 3 st i tratten – veva nu! |
| 8:06 | kvitto-visas | info:bra | 3 st i tratten – veva nu! |
| 8:06 | toast | bra | 3 st i tratten – veva nu! |
| 8:07 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 8:08 | klar | info:bra | 3 st i tratten – veva nu! |
| 8:09 | händelse | printStart | sak=nyckelring |
| 8:10 | toast | guld | ✅ |
| 8:10 | händelse | printKlar | sak=nyckelring n=6 |
| 8:26 | väntar | info:bra | 3 st i tratten – veva nu! |
| 8:26 | sak | info:bra | 3 st i tratten – veva nu! |
| 8:26 | kvitto-visas | info:bra | 3 st i tratten – veva nu! |
| 8:26 | toast | bra | 3 st i tratten – veva nu! |
| 8:28 | klar | info:bra | 3 st i tratten – veva nu! |
| 8:28 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 8:41 | paket |  | ali → ge |
| 8:41 | väntar | ali | Du får bonus! 20 kr extra. Säg inget till min fru. |
| 8:41 | väntar |  | (läget ändras) |
| 8:41 | aliSalt | ali | 15 |
| 8:41 | röst | ali | Nyckelringar igen? Folk tappar sina nycklar hela tiden. Bra affär för oss. · REAKTION |
| 8:41 | butiksbubbla | ali | Nyckelringar igen? Folk tappar sina nycklar hela tiden. Bra affär för oss. |
| 8:41 | aliSalt | ali | 15 |
| 8:41 | aliSalt | ali | 15 |
| 8:44 | sak | ali | Du får bonus! 20 kr extra. Säg inget till min fru. |
| 8:44 | notis |  | Ali: ”Du får bonus! 20 kr extra. Säg inget till min fru.” |
| 8:44 | röst | ali | Du får bonus! 20 kr extra. Säg inget till min fru. · REAKTION |
| 8:48 | klar | ali | Du får bonus! 20 kr extra. Säg inget till min fru. |
| 8:50 | sak |  | (läget ändras) |
| 8:51 | klar |  | (läget ändras) |
| 8:51 | väntar | bud | (tips) |
| 8:51 | sak | bud | (tips) |
| 8:52 | väntar | du | Jag har pengar nu. Hos Ali kan jag köpa uppgraderingar – bära mer eller printa snabbare. |
| 8:53 | klar | bud | (tips) |
| 8:55 | sak | du | Jag har pengar nu. Hos Ali kan jag köpa uppgraderingar – bära mer eller printa snabbare. |
| 8:55 | röst | du | Jag har pengar nu. Hos Ali kan jag köpa uppgraderingar – bära mer eller printa snabbare. · MÅL |
| 9:01 | händelse | printStart | sak=nyckelring |
| 9:02 | klar | du | Jag har pengar nu. Hos Ali kan jag köpa uppgraderingar – bära mer eller printa snabbare. |
| 9:02 | toast | guld | ✅ |
| 9:02 | händelse | printKlar | sak=nyckelring n=7 |
| 9:03 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 9:05 | händelse | printStart | sak=nyckelring |
| 9:06 | toast | guld | ✅ |
| 9:06 | händelse | printKlar | sak=nyckelring n=8 |
| 9:07 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 9:09 | händelse | printStart | sak=nyckelring |
| 9:10 | toast | fel | Ingen ström – trampa cykeln |
| 9:11 | toast | guld | ✅ |
| 9:11 | händelse | printKlar | sak=nyckelring n=9 |
| 9:12 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 9:23 | aliSalt | ali | 15 |
| 9:23 | aliSalt | ali | 15 |
| 9:23 | aliSalt | ali | 15 |
| 9:36 | händelse | printStart | sak=nyckelring |
| 9:37 | toast | guld | ✅ |
| 9:37 | händelse | printKlar | sak=nyckelring n=10 |
| 9:38 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 9:40 | händelse | printStart | sak=nyckelring |
| 9:41 | toast | guld | ✅ |
| 9:41 | händelse | printKlar | sak=nyckelring n=11 |
| 9:42 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 9:44 | händelse | printStart | sak=nyckelring |
| 9:45 | toast | guld | ✅ |
| 9:45 | händelse | printKlar | sak=nyckelring n=12 |
| 9:46 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 9:57 | aliSalt | ali | 15 |
| 9:57 | aliSalt | ali | 15 |
| 9:57 | aliSalt | ali | 15 |
| 10:10 | händelse | printStart | sak=nyckelring |
| 10:11 | toast | guld | ✅ |
| 10:11 | händelse | printKlar | sak=nyckelring n=13 |
| 10:12 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 10:14 | händelse | printStart | sak=nyckelring |
| 10:14 | toast | fel | Ingen ström – trampa cykeln |
| 10:16 | toast | guld | ✅ |
| 10:16 | händelse | printKlar | sak=nyckelring n=14 |
| 10:16 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 10:18 | händelse | printStart | sak=nyckelring |
| 10:19 | toast | guld | ✅ |
| 10:19 | händelse | printKlar | sak=nyckelring n=15 |
| 10:20 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 10:21 | upplåst | bara | grip |
| 10:21 | brott | RESERV | grip (bara 3 av 6) |
| 10:21 | händelse | upplast | id=grip flask=bara |
| 10:31 | aliSalt | ali | 15 |
| 10:31 | aliSalt | ali | 15 |
| 10:32 | aliSalt | ali | 15 |
| 10:35 | toast | guld | 3D-modell köpt – printa skräpgrip på skrivaren |
| 10:35 | händelse | kopt | sak=grip |
| 10:35 | röst | ali | Bra val. 3D-modellen är din. Den räcker till en. · REAKTION |
| 10:35 | butiksbubbla | ali | Bra val. 3D-modellen är din. Den räcker till en. |
| 10:36 | händelse | malKlart | id=kopGrip del=Dag 1 – Kom igång nasta=printGrip |
| 10:36 | väntar | du | Min första 3D-modell! Nu ska den bara printas. Jag printar inte bara saker – jag printar maskiner. |
| 10:36 | väntar | du | Ritningen är min. Nu printar jag gripen. |
| 10:36 | MÅL |  | Printa din skräpgrip |
| 10:37 | sak | du | Min första 3D-modell! Nu ska den bara printas. Jag printar inte bara saker – jag printar maskiner. |
| 10:37 | kvitto-visas | du | Min första 3D-modell! Nu ska den bara printas. Jag printar inte bara saker – jag printar maskiner. |
| 10:37 | lapp | 📔 Dagbok | Min första 3D-modell! Nu ska den bara printas. Jag printar inte bara saker – jag printar maskiner. |
| 10:37 | meddelande | du | Min första 3D-modell! Nu ska den bara printas. Jag printar inte bara saker – jag printar maskiner. |
| 10:37 | dagbokkort | du | Min första 3D-modell! Nu ska den bara printas. Jag printar inte bara saker – jag printar maskiner. |
| 10:37 | röst | du | Min första 3D-modell! Nu ska den bara printas. Jag printar inte bara saker – jag printar maskiner. · STORY |
| 10:46 | händelse | brevLast | id=ritning |
| 10:46 | klar | du | Min första 3D-modell! Nu ska den bara printas. Jag printar inte bara saker – jag printar maskiner. |
| 10:46 | målruta |  | Printa din skräpgrip |
| 10:46 | sak | du | Ritningen är min. Nu printar jag gripen. |
| 10:46 | pil |  | Printa din skräpgrip |
| 10:46 | notis | tanke | 💭 Ritningen är min. Nu printar jag gripen. |
| 10:46 | röst | du | Ritningen är min. Nu printar jag gripen. · MÅL |
| 10:50 | klar | du | Ritningen är min. Nu printar jag gripen. |
| 11:24 | väntar | info:bra | 3 st i tratten – veva nu! |
| 11:24 | sak | info:bra | 3 st i tratten – veva nu! |
| 11:24 | kvitto-visas | info:bra | 3 st i tratten – veva nu! |
| 11:24 | toast | bra | 3 st i tratten – veva nu! |
| 11:26 | klar | info:bra | 3 st i tratten – veva nu! |
| 11:28 | händelse | printStart | sak=byggsats:grip |
| 11:31 | händelse | printKlar | sak=byggsats:grip n=1 |
| 11:31 | toast | guld | ✅ |
| 11:48 | väntar | info:bra | 3 st i tratten – veva nu! |
| 11:48 | sak | info:bra | 3 st i tratten – veva nu! |
| 11:48 | kvitto-visas | info:bra | 3 st i tratten – veva nu! |
| 11:48 | toast | bra | 3 st i tratten – veva nu! |
| 11:50 | klar | info:bra | 3 st i tratten – veva nu! |
| 11:52 | väntar | info:guld | Klicka för att ta på dig skräpgrip |
| 11:52 | händelse | tagitUrPrint | sak=byggsats:grip n=1 |
| 11:52 | paket |  | sms |
| 11:52 | väntar | ali | Ali här. Jag såg Skräpgrip på avstånd. Ett streck blev lite snett. Mitt fel. Vackert ändå. |
| 11:52 | struken | kedja | grip |
| 11:52 | sak | info:guld | Klicka för att ta på dig skräpgrip |
| 11:52 | kvitto-visas | info:guld | Klicka för att ta på dig skräpgrip |
| 11:52 | toast | guld | Klicka för att ta på dig skräpgrip |
| 11:54 | klar | info:guld | Klicka för att ta på dig skräpgrip |
| 11:56 | väntar | info:guld | 🦾 Skräpgripen sitter! Bär 6, lättare att sikta, plockar när du går nära. |
| 11:56 | tog på | du | byggsats:grip |
| 11:56 | händelse | monterat | sak=grip |
| 11:56 | sak | info:guld | 🦾 Skräpgripen sitter! Bär 6, lättare att sikta, plockar när du går nära. |
| 11:56 | kvitto-visas | info:guld | 🦾 Skräpgripen sitter! Bär 6, lättare att sikta, plockar när du går nära. |
| 11:56 | toast | guld | 🦾 Skräpgripen sitter! Bär 6, lättare att sikta, plockar när du går nära. |
| 11:56 | händelse | malKlart | id=printGrip del=Dag 1 – Kom igång nasta=krukaD1 |
| 11:56 | väntar | du | Ali vill ha krukor. Jag printar en blomkruka. |
| 11:56 | MÅL |  | Printa och sälj nyckelringar |
| 11:56 | upplåst | inkomst | kruka |
| 11:56 | brott | UPPLÅST | kruka (inkomst 15 av 6) |
| 11:56 | händelse | upplast | id=kruka flask=inkomst |
| 11:56 | paket |  | tanke → sms |
| 11:56 | tanke | du | Nyckelringar, nyckelringar. Ali kan inte vilja ha fler. |
| 11:56 | väntar | du | Nyckelringar, nyckelringar. Ali kan inte vilja ha fler. |
| 11:56 | väntar | ali | Prova en kruka. Folk köper krukor. Ingen vet varför. |
| 11:56 | skratt | ali | Prova en kruka. Folk köper krukor. Ingen |
| 11:58 | klar | info:guld | 🦾 Skräpgripen sitter! Bär 6, lättare att sikta, plockar när du går nära. |
| 11:59 | målruta |  | Köp krukreceptet hos Ali (40 kr) |
| 12:00 | kvittens-bock |  | ✓ Printa din skräpgrip |
| 12:00 | sak | du | Ali vill ha krukor. Jag printar en blomkruka. |
| 12:00 | pil |  | Köp krukreceptet hos Ali (40 kr) |
| 12:00 | notis | tanke | 💭 Ali vill ha krukor. Jag printar en blomkruka. |
| 12:00 | röst | du | Ali vill ha krukor. Jag printar en blomkruka. · MÅL |
| 12:04 | klar | du | Ali vill ha krukor. Jag printar en blomkruka. |
| 12:06 | sak | ali | Ali här. Jag såg Skräpgrip på avstånd. Ett streck blev lite snett. Mitt fel. Vackert ändå. |
| 12:06 | sms | ali | Ali här. Jag såg Skräpgrip på avstånd. Ett streck blev lite snett. Mitt fel. Vackert ändå. |
| 12:06 | sms-bubbla | ali | Ali här. Jag såg Skräpgrip på avstånd. Ett streck blev lite snett. Mitt fel. Vackert ändå. |
| 12:06 | röst | ali | Ali här. Jag såg Skräpgrip på avstånd. Ett streck blev lite snett. Mitt fel. Vackert ändå. · REAKTION |
| 12:08 | händelse | kopt | sak=kruka |
| 12:08 | butiksbubbla | ali | Blomkruka? Bra val. Folk köper sånt. Jag vet inte varför. |
| 12:13 | klar | ali | Ali här. Jag såg Skräpgrip på avstånd. Ett streck blev lite snett. Mitt fel. Vackert ändå. |
| 12:15 | sak | du | Nyckelringar, nyckelringar. Ali kan inte vilja ha fler. |
| 12:15 | notis | tanke | 💭 Nyckelringar, nyckelringar. Ali kan inte vilja ha fler. |
| 12:15 | röst | du | Nyckelringar, nyckelringar. Ali kan inte vilja ha fler. · STORY |
| 12:20 | klar | du | Nyckelringar, nyckelringar. Ali kan inte vilja ha fler. |
| 12:22 | sak | ali | Prova en kruka. Folk köper krukor. Ingen vet varför. |
| 12:22 | skratt | ali | Prova en kruka. Folk köper krukor. Ingen |
| 12:22 | sms | ali | Prova en kruka. Folk köper krukor. Ingen vet varför. |
| 12:22 | skratt | ali | Prova en kruka. Folk köper krukor. Ingen |
| 12:22 | sms-bubbla | ali | Prova en kruka. Folk köper krukor. Ingen vet varför. |
| 12:22 | skratt | ali | Prova en kruka. Folk köper krukor. Ingen |
| 12:22 | röst | ali | Prova en kruka. Folk köper krukor. Ingen vet varför. · STORY |
| 12:26 | klar | ali | Prova en kruka. Folk köper krukor. Ingen vet varför. |
| 12:26 | skratt | ali | Prova en kruka. Folk köper krukor. Ingen |
| 12:42 | händelse | printStart | sak=kruka |
| 12:44 | toast | fel | Ingen ström – trampa cykeln |
| 12:47 | toast | guld | ✅ |
| 12:47 | händelse | printKlar | sak=kruka n=1 |
| 12:47 | kvittens | du | En kruka. Mamma skulle bli så stolt. Hon får inte veta. |
| 12:47 | väntar | du | En kruka. Mamma skulle bli så stolt. Hon får inte veta. |
| 12:47 | händelse | malKlart | id=krukaD1 del=Dag 1 – Kom igång nasta=saljKruka |
| 12:47 | väntar | du | Ali gillar krukor. Han sa det själv. |
| 12:47 | MÅL |  | Sälj blomkrukan hos Ali |
| 12:47 | sak | du | En kruka. Mamma skulle bli så stolt. Hon får inte veta. |
| 12:47 | notis | tanke | 💭 En kruka. Mamma skulle bli så stolt. Hon får inte veta. |
| 12:47 | röst | du | En kruka. Mamma skulle bli så stolt. Hon får inte veta. · STORY |
| 12:47 | målruta |  | Sälj blomkrukan hos Ali |
| 12:51 | klar | du | En kruka. Mamma skulle bli så stolt. Hon får inte veta. |
| 12:52 | sak | du | Ali gillar krukor. Han sa det själv. |
| 12:52 | pil |  | Sälj blomkrukan hos Ali |
| 12:52 | röst | du | Ali gillar krukor. Han sa det själv. · MÅL |
| 12:52 | notis | tanke | 💭 Ali gillar krukor. Han sa det själv. |
| 12:55 | klar | du | Ali gillar krukor. Han sa det själv. |
| 13:14 | väntar | info:bra | 6 st i tratten – veva nu! |
| 13:14 | sak | info:bra | 6 st i tratten – veva nu! |
| 13:14 | kvitto-visas | info:bra | 6 st i tratten – veva nu! |
| 13:14 | toast | bra | 6 st i tratten – veva nu! |
| 13:16 | händelse | tagitUrPrint | sak=kruka n=1 |
| 13:16 | klar | info:bra | 6 st i tratten – veva nu! |
| 13:39 | aliSalt | ali | 70 |
| 13:39 | struken | kedja | morkt |
| 13:40 | händelse | malKlart | id=saljKruka del=Dag 1 – Kom igång nasta=kopSang |
| 13:40 | väntar | du | Jag kan inte sova på betongen en natt till. Ali har en säng. Typ. |
| 13:40 | målruta |  | Köp sängens 3D-modell hos Ali (60 kr) |
| 13:40 | MÅL |  | Köp sängens 3D-modell hos Ali (60 kr) |
| 13:40 | sak | du | Jag kan inte sova på betongen en natt till. Ali har en säng. Typ. |
| 13:40 | pil |  | Köp sängens 3D-modell hos Ali (60 kr) |
| 13:40 | notis | tanke | 💭 Jag kan inte sova på betongen en natt till. Ali har en säng. Typ. |
| 13:40 | röst | du | Jag kan inte sova på betongen en natt till. Ali har en säng. Typ. · MÅL |
| 13:44 | kvittens-bock |  | ✓ Sälj blomkrukan hos Ali |
| 13:46 | klar | du | Jag kan inte sova på betongen en natt till. Ali har en säng. Typ. |
| 13:56 | händelse | kopt | sak=sang |
| 13:56 | röst | ali | Sov gott, min vän. · REAKTION |
| 13:56 | butiksbubbla | ali | Sov gott, min vän. |
| 13:57 | händelse | malKlart | id=kopSang del=Dag 1 – Kom igång nasta=printSang |
| 13:57 | väntar | du | Sängen tar lång tid. Den är värd det. |
| 13:57 | målruta |  | Printa sängen |
| 13:57 | MÅL |  | Printa sängen |
| 13:57 | sak | du | Sängen tar lång tid. Den är värd det. |
| 13:57 | pil |  | Printa sängen |
| 13:57 | notis | tanke | 💭 Sängen tar lång tid. Den är värd det. |
| 13:57 | röst | du | Sängen tar lång tid. Den är värd det. · MÅL |
| 13:58 | nick |  | nick:18 |
| 14:00 | klar | du | Sängen tar lång tid. Den är värd det. |
| 14:01 | kvittens-bock |  | ✓ Köp sängens 3D-modell hos Ali (60 kr) |
| 14:17 | väntar | berattare | Printa sängen på skrivaren. |
| 14:17 | sak | berattare | Printa sängen på skrivaren. |
| 14:17 | röst | berattare | Printa sängen på skrivaren. · REAKTION |
| 14:20 | klar | berattare | Printa sängen på skrivaren. |
| 14:23 | händelse | printStart | sak=sang |
| 14:28 | toast | fel | Ingen ström – trampa cykeln |
| 14:29 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 14:29 | väntar | notis:Skrivare S: Tornet är tomt – mal mer så  | Skrivare S: Tornet är tomt – mal mer så fortsätter den |
| 14:29 | sak | notis:Skrivare S: Tornet är tomt – mal mer så  | Skrivare S: Tornet är tomt – mal mer så fortsätter den |
| 14:29 | notis | fel | Skrivare S: Tornet är tomt – mal mer så fortsätter den |
| 14:31 | klar | notis:Skrivare S: Tornet är tomt – mal mer så  | Skrivare S: Tornet är tomt – mal mer så fortsätter den |
| 15:00 | väntar | info:bra | 6 st i tratten – veva nu! |
| 15:00 | sak | info:bra | 6 st i tratten – veva nu! |
| 15:00 | kvitto-visas | info:bra | 6 st i tratten – veva nu! |
| 15:00 | toast | bra | 6 st i tratten – veva nu! |
| 15:01 | toast | guld | ✅ |
| 15:01 | händelse | printKlar | sak=sang n=1 |
| 15:02 | klar | info:bra | 6 st i tratten – veva nu! |
| 15:04 | händelse | tagitUrPrint | sak=sang n=1 |
| 15:04 | struken | kedja | sang |
| 15:04 | händelse | malKlart | id=printSang del=Dag 1 – Kom igång nasta=sov1 |
| 15:04 | paket |  | lapp |
| 15:04 | lapp | 📔 Dagbok | Dag 1. Inget mer tjat. Här står jag, vid soptippen, med storebrors gamla 3D-skrivare och ett skjul som luktar mus. Men skräp är plast – och plast är filament. Plan: 1) en säng. 2) städa gården. 3) bygga om skjulet till en riktig fristad – med gamingsetup. |
| 15:04 | meddelande | du | Dag 1. Inget mer tjat. Här står jag, vid soptippen, med storebrors gamla 3D-skrivare och ett skjul som luktar mus. Men skräp är plast – och plast är filament. Plan: 1) en säng. 2) städa gården. 3) bygga om skjulet till en riktig fristad – med gamingsetup. |
| 15:04 | dagbokkort | du | Dag 1. Inget mer tjat. Här står jag, vid soptippen, med storebrors gamla 3D-skrivare och ett skjul som luktar mus. Men skräp är plast – och plast är filament. Plan: 1) en säng. 2) städa gården. 3) bygga om skjulet till en riktig fristad – med gamingsetup. |
| 15:04 | väntar | du | Sängen ska in i skjulet. Sen sover jag. |
| 15:04 | målruta |  | Ställ sängen i skjulet och sov |
| 15:04 | MÅL |  | Ställ sängen i skjulet och sov |
| 15:04 | röst | du | Dag 1. Inget mer tjat. Här står jag, vid soptippen, med storebrors gamla 3D-skrivare och ett skjul som luktar mus. Men skräp är plast – och plast är filament. Plan: 1) en säng. 2) städa gården. 3) bygga om skjulet till en riktig fristad – med gamingsetup. · STORY |
| 15:19 | händelse | brevLast | id=start |
| 15:20 | sak | du | Sängen ska in i skjulet. Sen sover jag. |
| 15:20 | pil |  | Ställ sängen i skjulet och sov |
| 15:20 | notis | tanke | 💭 Sängen ska in i skjulet. Sen sover jag. |
| 15:20 | röst | du | Sängen ska in i skjulet. Sen sover jag. · MÅL |
| 15:24 | klar | du | Sängen ska in i skjulet. Sen sover jag. |

<details><summary>Botens handlingar dag 1</summary>

- 0:17 gå till hammaren på brädorna (3 m) (5 kr)
- 0:32 popup: "FORTSÄTT" (5 kr)
- 0:43 gå till cykeln vid vägen (2 m) (5 kr)
- 1:06 gå till rutan i linje 1 (13 m) (5 kr)
- 1:54 gå till cykeln (generatorn) (13 m) (5 kr)
- 2:10 gå till generatorns plats (11 m) (5 kr)
- 2:15 gå till cykeln (lyfter den) (11 m) (5 kr)
- 2:21 gå till cykelns plats (11 m) (5 kr)
- 2:43 gå till fel håll en bit (4 m) (5 kr)
- 2:45 gå till skrivaren (2 m) (5 kr)
- 2:47 printar Nyckelring (5 kr)
- 2:53 tar ut 1 st ur skrivaren (5 kr)
- 3:07 printar Nyckelring (sista av brorsans rulle) (5 kr)
- 3:29 väntar på Ali (5 kr)
- 3:53 gå till fel håll en bit (4 m) (5 kr)
- 3:56 gå till kvarnens ruta (3 m) (5 kr)
- 4:24 plockar 3 skräp på gården (bär max 3) (5 kr)
- 4:27 gå till kvarnen (9 m) (5 kr)
- 4:34 popup: "FORTSÄTT" (5 kr)
- 5:40 nybörjaren ser ingen pil – tittar runt (5 kr)
- 5:45 gå till cykeln (2 m) (5 kr)
- 6:05 tar ut 1 st ur skrivaren (5 kr)
- 6:07 printar Nyckelring (5 kr)
- 6:13 tar ut 1 st ur skrivaren (5 kr)
- 6:30 gå till Ali (27 m) (5 kr)
- 6:30 öppnar Alis butik – sälja nyckelringar (5 kr)
- 6:32 säljer hos Ali: +45 kr (50 kr)
- 6:49 nybörjaren ser ingen pil – tittar runt (50 kr)
- 6:53 öppnar Alis butik – Ali (powerbanken) (50 kr)
- 7:14 gå till koppla powerbanken till cykeln (24 m) (50 kr)
- 7:35 tjänar pengar till väntar på flaskhalsen för grip: 50/90 kr → printar nyckelring (15 kr) (50 kr)
- 7:44 gå till dit pilen pekar (24 m) (50 kr)
- 7:47 gå till skrivaren (2 m) (50 kr)
- 7:49 printar Nyckelring (50 kr)
- 7:51 tar ut 1 st ur skrivaren (50 kr)
- 7:53 printar Nyckelring (50 kr)
- 8:01 plockar 3 skräp på gården (bär max 3) (50 kr)
- 8:06 gå till kvarnen (13 m) (50 kr)
- 8:07 gå till skrivaren (1 m) (50 kr)
- 8:08 tar ut 1 st ur skrivaren (50 kr)
- 8:09 printar Nyckelring (50 kr)
- 8:20 plockar 3 skräp på gården (bär max 3) (50 kr)
- 8:26 gå till kvarnen (16 m) (50 kr)
- 8:28 gå till skrivaren (2 m) (50 kr)
- 8:29 tar ut 1 st ur skrivaren (50 kr)
- 8:39 gå till Ali (28 m) (50 kr)
- 8:39 öppnar Alis butik – sälja (50 kr)
- 8:41 säljer hos Ali: +45 kr (95 kr)
- 8:51 tjänar pengar till väntar på flaskhalsen för grip: 115/155 kr → printar nyckelring (15 kr) (115 kr)
- 9:00 gå till skrivaren (25 m) (115 kr)
- 9:01 printar Nyckelring (115 kr)
- 9:04 tar ut 1 st ur skrivaren (115 kr)
- 9:05 printar Nyckelring (115 kr)
- 9:08 tar ut 1 st ur skrivaren (115 kr)
- 9:09 printar Nyckelring (115 kr)
- 9:11 gå till cykeln (1 m) (115 kr)
- 9:12 tar ut 1 st ur skrivaren (115 kr)
- 9:21 gå till Ali (25 m) (115 kr)
- 9:21 öppnar Alis butik – sälja (115 kr)
- 9:23 säljer hos Ali: +45 kr (160 kr)
- 9:25 tjänar pengar till väntar på flaskhalsen för grip: 160/200 kr → printar nyckelring (15 kr) (160 kr)
- 9:34 gå till skrivaren (25 m) (160 kr)
- 9:36 printar Nyckelring (160 kr)
- 9:38 tar ut 1 st ur skrivaren (160 kr)
- 9:40 printar Nyckelring (160 kr)
- 9:42 tar ut 1 st ur skrivaren (160 kr)
- 9:44 printar Nyckelring (160 kr)
- 9:46 tar ut 1 st ur skrivaren (160 kr)
- 9:55 gå till Ali (25 m) (160 kr)
- 9:55 öppnar Alis butik – sälja (160 kr)
- 9:57 säljer hos Ali: +45 kr (205 kr)
- 9:59 tjänar pengar till väntar på flaskhalsen för grip: 205/245 kr → printar nyckelring (15 kr) (205 kr)
- 10:08 gå till skrivaren (25 m) (205 kr)
- 10:10 printar Nyckelring (205 kr)
- 10:12 tar ut 1 st ur skrivaren (205 kr)
- 10:14 printar Nyckelring (205 kr)
- 10:15 gå till cykeln (1 m) (205 kr)
- 10:17 tar ut 1 st ur skrivaren (205 kr)
- 10:18 printar Nyckelring (205 kr)
- 10:21 tar ut 1 st ur skrivaren (205 kr)
- 10:30 gå till Ali (25 m) (205 kr)
- 10:30 öppnar Alis butik – sälja (205 kr)
- 10:32 säljer hos Ali: +45 kr (250 kr)
- 10:34 öppnar Alis butik – köpa skräpgrip (250 kr)
- 10:36 köper grip för 50 kr (200 kr)
- 10:46 popup: "FORTSÄTT" (200 kr)
- 11:07 gå till dit pilen pekar (27 m) (200 kr)
- 11:16 plockar 3 skräp på gården (bär max 3) (200 kr)
- 11:24 gå till kvarnen (20 m) (200 kr)
- 11:27 gå till skrivaren (1 m) (200 kr)
- 11:28 printar Skräpgrip (200 kr)
- 11:40 plockar 3 skräp på gården (bär max 3) (200 kr)
- 11:48 gå till kvarnen (23 m) (200 kr)
- 11:52 gå till skrivaren (1 m) (200 kr)
- 11:52 tar ut 1 st ur skrivaren (200 kr)
- 11:56 tar på grip (200 kr)
- 12:07 gå till Ali (28 m) (200 kr)
- 12:07 öppnar Alis butik – köpa receptet blomkruka (200 kr)
- 12:09 köper kruka för 40 kr (160 kr)
- 12:28 nybörjaren ser ingen pil – tittar runt (160 kr)
- 12:41 gå till skrivaren (25 m) (160 kr)
- 12:42 printar Blomkruka (160 kr)
- 12:45 gå till cykeln (1 m) (160 kr)
- 13:02 plockar 6 skräp på gården (bär max 6) (160 kr)
- 13:14 gå till kvarnen (33 m) (160 kr)
- 13:16 gå till skrivaren (1 m) (160 kr)
- 13:16 tar ut 1 st ur skrivaren (160 kr)
- 13:24 nybörjaren ser ingen pil – tittar runt (160 kr)
- 13:37 gå till Ali (28 m) (160 kr)
- 13:37 öppnar Alis butik – sälja krukan (160 kr)
- 13:40 säljer hos Ali: +70 kr (230 kr)
- 13:54 öppnar Alis butik – köpa sängen (230 kr)
- 13:57 köper sang för 60 kr (170 kr)
- 14:09 nybörjaren ser ingen pil – tittar runt (170 kr)
- 14:22 gå till skrivaren (25 m) (170 kr)
- 14:23 printar Säng (170 kr)
- 14:28 gå till cykeln (1 m) (170 kr)
- 14:48 plockar 6 skräp på gården (bär max 6) (170 kr)
- 15:00 gå till kvarnen (32 m) (170 kr)
- 15:04 gå till skrivaren (2 m) (170 kr)
- 15:19 popup: "FORTSÄTT" (170 kr)
- 15:19 tar ut 1 st ur skrivaren (170 kr)
- 15:39 gå till sängplatsen i skjulet (21 m) (170 kr)

</details>

## Dag 2

| Tid | Källa | Vem | Text |
|---|---|---|---|
| 15:41 | vara | ali | kruka |
| 15:41 | händelse | malKlart | id=sov1 del=Dag 1 – Kom igång nasta=kopMotor |
| 15:41 | MÅL |  | Mal skräp, printa och sälj |
| 15:41 | väntar | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått generator. Vi tar en låt på det. Den här är till dig, Gunnar. |
| 15:41 | radio | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått generator. Vi tar en låt på det. Den här är till dig, Gunnar. |
| 15:41 | skratt | du | Radio-Kjelle |
| 15:41 | väntar | ali | Ali här. Såg skylten. Stavningen är rätt. Det är mer än många. |
| 15:42 | sak | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått generator. Vi tar en låt på det. Den här är till dig, Gunnar. |
| 15:42 | notis |  | 📻 Radio Tippen: Radio Tippen, Kjelle här. Skjulet vid tippen har fått generator. Vi tar en låt på det. Den här är till dig, Gunnar. |
| 15:42 | röst | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått generator. Vi tar en låt på det. Den här är till dig, Gunnar. · REAKTION |
| 15:42 | sopsack | rolf | Sopsäckarna landade på gården |
| 15:42 | paket |  | tanke → ge |
| 15:42 | tanke | du | Hmm, vad kastade gubben ut ur sopbilen? Jag går och kollar. |
| 15:42 | väntar | du | Hmm, vad kastade gubben ut ur sopbilen? Jag går och kollar. |
| 15:42 | väntar |  | (läget ändras) |
| 0:01 | händelse | dagenBorjar | dag=2 |
| 0:01 | meddelande | du | Städa upp – och kanske träffa grannarna. |
| 0:01 | dagbokkort | du | Dag 2 – Tippen och Rolf · Städa upp – och kanske träffa grannarna. |
| 0:01 | röst | du | Dag 2 – Tippen och Rolf. Städa upp – och kanske träffa grannarna. · STORY |
| 0:13 | klar | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått generator. Vi tar en låt på det. Den här är till dig, Gunnar. |
| 0:14 | händelse | morgonkortStangt | dag=2 |
| 0:14 | paket |  | lapp |
| 0:14 | lapp | 📔 Dagbok | Första natten i en riktig säng. Jag printade den själv. |
| 0:14 | meddelande | du | Första natten i en riktig säng. Jag printade den själv. |
| 0:14 | dagbokkort | du | Första natten i en riktig säng. Jag printade den själv. |
| 0:14 | röst | du | Första natten i en riktig säng. Jag printade den själv. · STORY |
| 0:20 | händelse | brevLast | id=sang |
| 0:20 | väntar | du | Vevandet tar på armarna. Ali har en motor till kvarnen. |
| 0:20 | målruta |  | Mal skräp, printa och sälj |
| 0:20 | väntar | foto | Egen säng |
| 0:20 | paket |  | tanke |
| 0:20 | tanke | du | Tänk att jag ska få sova i min egen säng. |
| 0:20 | väntar | du | Tänk att jag ska få sova i min egen säng. |
| 0:22 | sak | du | Vevandet tar på armarna. Ali har en motor till kvarnen. |
| 0:22 | pil |  | Mal skräp, printa och sälj |
| 0:22 | notis | tanke | 💭 Vevandet tar på armarna. Ali har en motor till kvarnen. |
| 0:22 | röst | du | Vevandet tar på armarna. Ali har en motor till kvarnen. · MÅL |
| 0:26 | klar | du | Vevandet tar på armarna. Ali har en motor till kvarnen. |
| 0:28 | sak | du | Hmm, vad kastade gubben ut ur sopbilen? Jag går och kollar. |
| 0:28 | notis | tanke | 💭 Hmm, vad kastade gubben ut ur sopbilen? Jag går och kollar. |
| 0:28 | röst | du | Hmm, vad kastade gubben ut ur sopbilen? Jag går och kollar. · STORY |
| 0:33 | klar | du | Hmm, vad kastade gubben ut ur sopbilen? Jag går och kollar. |
| 0:35 | sak |  | (läget ändras) |
| 0:35 | klar |  | (läget ändras) |
| 0:39 | sak | foto | Egen säng |
| 0:39 | foto | du | Egen säng |
| 0:42 | klar | foto | Egen säng |
| 0:44 | sak | du | Tänk att jag ska få sova i min egen säng. |
| 0:44 | notis | tanke | 💭 Tänk att jag ska få sova i min egen säng. |
| 0:44 | röst | du | Tänk att jag ska få sova i min egen säng. · STORY |
| 0:47 | klar | du | Tänk att jag ska få sova i min egen säng. |
| 0:50 | händelse | printStart | sak=kruka |
| 0:52 | toast | guld | ✅ |
| 0:52 | händelse | printKlar | sak=kruka n=2 |
| 0:53 | händelse | tagitUrPrint | sak=kruka n=1 |
| 1:01 | skratt | du | falsk tuta |
| 1:02 | butiksbubbla | ali | *nickar* |
| 1:04 | aliSalt | ali | 105 |
| 1:04 | röst | ali | Precis det jag ville ha idag, min vän. · REAKTION |
| 1:04 | butiksbubbla | ali | Precis vad jag ville ha idag. 105 kr – med extra. |
| 1:16 | händelse | printStart | sak=kruka |
| 1:16 | väntar | info:guld | 🚛 Sopbilen tippade en ny last på soptippen! |
| 1:16 | lapp | 📔 Dagbok | Sopbilen tippade en ny last. Allt det skräpet – och grinden är låst. |
| 1:16 | meddelande | du | Sopbilen tippade en ny last. Allt det skräpet – och grinden är låst. |
| 1:16 | dagbokkort | du | Sopbilen tippade en ny last. Allt det skräpet – och grinden är låst. |
| 1:16 | röst | du | Sopbilen tippade en ny last. Allt det skräpet – och grinden är låst. · STORY |
| 1:23 | händelse | brevLast | id=sopbil |
| 1:23 | struken | info:guld | 🚛 Sopbilen tippade en ny last på soptippen! |
| 1:25 | toast | fel | Ingen ström – trampa cykeln |
| 1:27 | toast | guld | ✅ |
| 1:27 | händelse | printKlar | sak=kruka n=3 |
| 1:27 | händelse | tagitUrPrint | sak=kruka n=1 |
| 1:30 | väntar | värld:TUUT! Tjena! | TUUT! Tjena! |
| 1:30 | sak | värld:TUUT! Tjena! | TUUT! Tjena! |
| 1:30 | bubbla |  | TUUT! Tjena! |
| 1:33 | klar | värld:TUUT! Tjena! | TUUT! Tjena! |
| 1:39 | aliSalt | ali | 105 |
| 2:07 | väntar | info:bra | 6 st i tratten – veva nu! |
| 2:07 | sak | info:bra | 6 st i tratten – veva nu! |
| 2:07 | kvitto-visas | info:bra | 6 st i tratten – veva nu! |
| 2:07 | toast | bra | 6 st i tratten – veva nu! |
| 2:09 | klar | info:bra | 6 st i tratten – veva nu! |
| 2:14 | händelse | printStart | sak=kruka |
| 2:16 | toast | guld | ✅ |
| 2:16 | händelse | printKlar | sak=kruka n=4 |
| 2:17 | händelse | tagitUrPrint | sak=kruka n=1 |
| 2:30 | aliSalt | ali | 105 |
| 2:43 | händelse | printStart | sak=kruka |
| 2:44 | toast | fel | Ingen ström – trampa cykeln |
| 2:47 | toast | guld | ✅ |
| 2:47 | händelse | printKlar | sak=kruka n=5 |
| 2:48 | händelse | tagitUrPrint | sak=kruka n=1 |
| 2:59 | aliSalt | ali | 105 |
| 3:12 | händelse | printStart | sak=kruka |
| 3:15 | toast | guld | ✅ |
| 3:15 | händelse | printKlar | sak=kruka n=6 |
| 3:15 | händelse | tagitUrPrint | sak=kruka n=1 |
| 3:25 | skratt | du | falsk tuta |
| 3:27 | aliSalt | ali | 105 |
| 3:36 | upplåst | mala | kvarnmotor |
| 3:36 | brott | RESERV | kvarnmotor (mala 13 av 10) |
| 3:36 | händelse | upplast | id=kvarnmotor flask=mala |
| 3:36 | paket |  | sms |
| 3:36 | väntar | ali | Ali här. En motor? Jag har en. Från en gammal tvättmaskin. Den centrifugerar fortfarande om man ber snällt. |
| 3:36 | sak | ali | Ali här. En motor? Jag har en. Från en gammal tvättmaskin. Den centrifugerar fortfarande om man ber snällt. |
| 3:36 | sms | ali | Ali här. En motor? Jag har en. Från en gammal tvättmaskin. Den centrifugerar fortfarande om man ber snällt. |
| 3:36 | sms-bubbla | ali | Ali här. En motor? Jag har en. Från en gammal tvättmaskin. Den centrifugerar fortfarande om man ber snällt. |
| 3:36 | röst | ali | Ali här. En motor? Jag har en. Från en gammal tvättmaskin. Den centrifugerar fortfarande om man ber snällt. · STORY |
| 3:45 | klar | ali | Ali här. En motor? Jag har en. Från en gammal tvättmaskin. Den centrifugerar fortfarande om man ber snällt. |
| 3:58 | väntar | info:bra | 4 st i tratten – veva nu! |
| 3:58 | sak | info:bra | 4 st i tratten – veva nu! |
| 3:58 | kvitto-visas | info:bra | 4 st i tratten – veva nu! |
| 3:58 | toast | bra | 4 st i tratten – veva nu! |
| 4:00 | klar | info:bra | 4 st i tratten – veva nu! |
| 4:00 | paket |  | tanke |
| 4:00 | tanke | du | Jaha. En kalsong. Använd. |
| 4:00 | väntar | du | Jaha. En kalsong. Använd. |
| 4:00 | skratt | du | kvarnen spottar |
| 4:02 | sak | du | Jaha. En kalsong. Använd. |
| 4:02 | notis | tanke | 💭 Jaha. En kalsong. Använd. |
| 4:02 | röst | du | Jaha. En kalsong. Använd. · REAKTION |
| 4:05 | klar | du | Jaha. En kalsong. Använd. |
| 4:06 | händelse | printStart | sak=kruka |
| 4:08 | toast | fel | Ingen ström – trampa cykeln |
| 4:11 | toast | guld | ✅ |
| 4:11 | händelse | printKlar | sak=kruka n=7 |
| 4:11 | händelse | tagitUrPrint | sak=kruka n=1 |
| 4:23 | aliSalt | ali | 105 |
| 4:27 | toast | guld | 3D-modell köpt – printa kvarnmotor på skrivaren |
| 4:27 | händelse | kopt | sak=kvarnmotor |
| 4:27 | butiksbubbla | ali | *nickar* |
| 4:29 | händelse | malKlart | id=kopMotor del=Dag 2 – Tippen och Rolf nasta=monteraMotor |
| 4:29 | struken | kedja | motorKopt |
| 4:29 | väntar | du | Motorn ska sitta där veven sitter. Jag printar den först. |
| 4:29 | målruta |  | Printa kvarnmotorn till kvarnen |
| 4:29 | MÅL |  | Printa kvarnmotorn till kvarnen |
| 4:29 | sak | du | Motorn ska sitta där veven sitter. Jag printar den först. |
| 4:29 | pil |  | Printa kvarnmotorn till kvarnen |
| 4:29 | notis | tanke | 💭 Motorn ska sitta där veven sitter. Jag printar den först. |
| 4:29 | röst | du | Motorn ska sitta där veven sitter. Jag printar den först. · MÅL |
| 4:30 | nick |  | nick:21 |
| 4:33 | kvittens-bock |  | ✓ Köp kvarnmotorn hos Ali (50 kr) |
| 4:34 | klar | du | Motorn ska sitta där veven sitter. Jag printar den först. |
| 4:49 | väntar | berattare | Printa kvarnmotorn på skrivaren och ta ut den. Då sätter du den direkt på kvarnen. |
| 4:49 | sak | berattare | Printa kvarnmotorn på skrivaren och ta ut den. Då sätter du den direkt på kvarnen. |
| 4:49 | röst | berattare | Printa kvarnmotorn på skrivaren och ta ut den. Då sätter du den direkt på kvarnen. · REAKTION |
| 4:53 | händelse | printStart | sak=byggsats:kvarnmotor |
| 4:56 | händelse | printKlar | sak=byggsats:kvarnmotor n=1 |
| 4:56 | toast | guld | ✅ |
| 4:56 | klar | berattare | Printa kvarnmotorn på skrivaren och ta ut den. Då sätter du den direkt på kvarnen. |
| 4:57 | väntar | info:guld | ⚙️ Kvarnmotorn ligger i handen – klicka på kvarnen för att skruva fast den |
| 4:57 | händelse | tagitUrPrint | sak=byggsats:kvarnmotor n=1 |
| 4:57 | paket |  | sms |
| 4:57 | väntar | ali | Ali här. Ännu en ritning som blev på riktigt: Kvarnmotor. Semesterkassan växer. Livet växer. |
| 4:57 | sak | info:guld | ⚙️ Kvarnmotorn ligger i handen – klicka på kvarnen för att skruva fast den |
| 4:57 | kvitto-visas | info:guld | ⚙️ Kvarnmotorn ligger i handen – klicka på kvarnen för att skruva fast den |
| 4:57 | toast | guld | ⚙️ Kvarnmotorn ligger i handen – klicka på kvarnen för att skruva fast den |
| 4:59 | klar | info:guld | ⚙️ Kvarnmotorn ligger i handen – klicka på kvarnen för att skruva fast den |
| 5:01 | sak | ali | Ali här. Ännu en ritning som blev på riktigt: Kvarnmotor. Semesterkassan växer. Livet växer. |
| 5:01 | sms | ali | Ali här. Ännu en ritning som blev på riktigt: Kvarnmotor. Semesterkassan växer. Livet växer. |
| 5:01 | sms-bubbla | ali | Ali här. Ännu en ritning som blev på riktigt: Kvarnmotor. Semesterkassan växer. Livet växer. |
| 5:01 | röst | ali | Ali här. Ännu en ritning som blev på riktigt: Kvarnmotor. Semesterkassan växer. Livet växer. · REAKTION |
| 5:02 | väntar | info:guld | ⚙️ Motorn sitter där veven satt – nu mal kvarnen själv. |
| 5:02 | händelse | monterat | sak=kvarnmotor |
| 5:02 | paket |  | tanke |
| 5:02 | tanke | du | Motorn sitter där veven satt. Mina armar tackar. |
| 5:02 | väntar | du | Motorn sitter där veven satt. Mina armar tackar. |
| 5:02 | monterat | du | byggsats:kvarnmotor |
| 5:02 | händelse | monterat | sak=kvarnmotor |
| 5:02 | händelse | malKlart | id=monteraMotor del=Dag 2 – Tippen och Rolf nasta=kopSack |
| 5:02 | struken | du | Motorn sitter där veven satt. Mina armar tackar. |
| 5:02 | väntar | du | Gården är full av skräp. Jag börjar vid skjulet. |
| 5:02 | MÅL |  | Kolla vad som flög ut från sopbilen |
| 5:06 | målruta |  | Kolla vad som flög ut från sopbilen |
| 5:06 | kvittens-bock |  | ✓ Printa kvarnmotorn till kvarnen |
| 5:08 | klar | ali | Ali här. Ännu en ritning som blev på riktigt: Kvarnmotor. Semesterkassan växer. Livet växer. |
| 5:08 | sak | du | Gården är full av skräp. Jag börjar vid skjulet. |
| 5:08 | pil |  | Kolla vad som flög ut från sopbilen |
| 5:08 | notis | tanke | 💭 Gården är full av skräp. Jag börjar vid skjulet. |
| 5:08 | röst | du | Gården är full av skräp. Jag börjar vid skjulet. · MÅL |
| 5:12 | klar | du | Gården är full av skräp. Jag börjar vid skjulet. |
| 5:12 | struken | info:guld | ⚙️ Motorn sitter där veven satt – nu mal kvarnen själv. |
| 5:20 | väntar | värld:TUUT! Tjena! | TUUT! Tjena! |
| 5:20 | sak | värld:TUUT! Tjena! | TUUT! Tjena! |
| 5:20 | bubbla |  | TUUT! Tjena! |
| 5:23 | klar | värld:TUUT! Tjena! | TUUT! Tjena! |
| 5:32 | paket |  | brev → ge → tanke |
| 5:32 | väntar | rolf | Du sliter ju. Ingen gör så nuförtin. Ta dessa så går dä lättare. / Rolf – ja kör sopbilen å har hand om tippen bredvid. MVH ROLF​ |
| 5:32 | väntar |  | (läget ändras) |
| 5:32 | tanke | du | Rolf… gubben i sopbilen. Han har tippen bredvid. Han verkar schysst. |
| 5:32 | väntar | du | Rolf… gubben i sopbilen. Han har tippen bredvid. Han verkar schysst. |
| 5:32 | sak | rolf | Du sliter ju. Ingen gör så nuförtin. Ta dessa så går dä lättare. / Rolf – ja kör sopbilen å har hand om tippen bredvid. MVH ROLF​ |
| 5:32 | lapp | Lapp från Rolf | Du sliter ju. Ingen gör så nuförtin. Ta dessa så går dä lättare. / Rolf – ja kör sopbilen å har hand om tippen bredvid. MVH ROLF​ |
| 5:32 | röst | rolf | Du sliter ju. Ingen gör så nuförtin. Ta dessa så går dä lättare. / Rolf – ja kör sopbilen å har hand om tippen bredvid. MVH ROLF​ · STORY |
| 5:36 | upplåst | skrivare | trim_skrivare |
| 5:36 | brott | UPPLÅST | trim_skrivare (skrivare 268 av 75) |
| 5:36 | händelse | upplast | id=trim_skrivare flask=skrivare |
| 5:36 | paket |  | sms |
| 5:36 | väntar | ali | Ali här. Skrivartrim. Jag skruvade på min egen skrivare i natt. Den går fortare nu. Nästan för fort. |
| 5:43 | klar | rolf | Du sliter ju. Ingen gör så nuförtin. Ta dessa så går dä lättare. / Rolf – ja kör sopbilen å har hand om tippen bredvid. MVH ROLF​ |
| 5:45 | väntar | info:guld | 🗑️ Sopsäcken är över axeln! Du bär 10 skräp nu. |
| 5:45 | tog på | du | byggsats:korg |
| 5:45 | händelse | monterat | sak=korg |
| 5:45 | sak | info:guld | 🗑️ Sopsäcken är över axeln! Du bär 10 skräp nu. |
| 5:45 | kvitto-visas | info:guld | 🗑️ Sopsäcken är över axeln! Du bär 10 skräp nu. |
| 5:45 | toast | guld | 🗑️ Sopsäcken är över axeln! Du bär 10 skräp nu. |
| 5:45 | händelse | malKlart | id=kopSack del=Dag 2 – Tippen och Rolf nasta=n1-stada-klart-garden |
| 5:45 | händelse | malKlart | id=n1-stada-klart-garden del=Dag 2 – Tippen och Rolf nasta=rolf0-brev |
| 5:45 | väntar | du | Gården är STÄDAD. Av mig. Frivilligt. Mamma skulle aldrig tro det. |
| 5:45 | väntar | berattare | Vänta på sopbilen. Den lämnar något.. |
| 5:45 | MÅL |  | Vänta på sopbilen. Den lämnar något. |
| 5:47 | klar | info:guld | 🗑️ Sopsäcken är över axeln! Du bär 10 skräp nu. |
| 5:47 | sak | du | Gården är STÄDAD. Av mig. Frivilligt. Mamma skulle aldrig tro det. |
| 5:47 | kvitto-visas | du | Gården är STÄDAD. Av mig. Frivilligt. Mamma skulle aldrig tro det. |
| 5:47 | lapp | 📔 Dagbok | Gården är STÄDAD. Av mig. Frivilligt. Mamma skulle aldrig tro det. |
| 5:47 | meddelande | du | Gården är STÄDAD. Av mig. Frivilligt. Mamma skulle aldrig tro det. |
| 5:47 | dagbokkort | du | Gården är STÄDAD. Av mig. Frivilligt. Mamma skulle aldrig tro det. |
| 5:47 | röst | du | Gården är STÄDAD. Av mig. Frivilligt. Mamma skulle aldrig tro det. · STORY |
| 5:54 | händelse | brevLast | id=gard |
| 5:54 | klar | du | Gården är STÄDAD. Av mig. Frivilligt. Mamma skulle aldrig tro det. |
| 5:54 | målruta |  | Vänta på sopbilen. Den lämnar något. |
| 5:54 | sak | berattare | Vänta på sopbilen. Den lämnar något.. |
| 5:54 | pil |  | Vänta på sopbilen. Den lämnar något. |
| 5:54 | röst | berattare | Vänta på sopbilen. Den lämnar något.. · MÅL |
| 5:57 | klar | berattare | Vänta på sopbilen. Den lämnar något.. |
| 5:58 | händelse | printStart | sak=kruka |
| 5:59 | sak |  | (läget ändras) |
| 5:59 | klar |  | (läget ändras) |
| 5:59 | struken | ali | Ali här. Såg skylten. Stavningen är rätt. Det är mer än många. |
| 6:00 | toast | fel | Ingen ström – trampa cykeln |
| 6:03 | toast | guld | ✅ |
| 6:03 | händelse | printKlar | sak=kruka n=8 |
| 6:03 | händelse | tagitUrPrint | sak=kruka n=1 |
| 6:03 | sak | du | Rolf… gubben i sopbilen. Han har tippen bredvid. Han verkar schysst. |
| 6:03 | notis | tanke | 💭 Rolf… gubben i sopbilen. Han har tippen bredvid. Han verkar schysst. |
| 6:03 | röst | du | Rolf… gubben i sopbilen. Han har tippen bredvid. Han verkar schysst. · STORY |
| 6:09 | klar | du | Rolf… gubben i sopbilen. Han har tippen bredvid. Han verkar schysst. |
| 6:11 | sak | ali | Ali här. Skrivartrim. Jag skruvade på min egen skrivare i natt. Den går fortare nu. Nästan för fort. |
| 6:11 | sms | ali | Ali här. Skrivartrim. Jag skruvade på min egen skrivare i natt. Den går fortare nu. Nästan för fort. |
| 6:11 | sms-bubbla | ali | Ali här. Skrivartrim. Jag skruvade på min egen skrivare i natt. Den går fortare nu. Nästan för fort. |
| 6:11 | röst | ali | Ali här. Skrivartrim. Jag skruvade på min egen skrivare i natt. Den går fortare nu. Nästan för fort. · STORY |
| 6:14 | aliSalt | ali | 105 |
| 6:19 | klar | ali | Ali här. Skrivartrim. Jag skruvade på min egen skrivare i natt. Den går fortare nu. Nästan för fort. |
| 6:41 | händelse | printStart | sak=kruka |
| 6:44 | toast | guld | ✅ |
| 6:44 | händelse | printKlar | sak=kruka n=9 |
| 6:44 | händelse | tagitUrPrint | sak=kruka n=1 |
| 6:52 | väntar | ali | Älgen var här i morse. Han köpte inget heller. |
| 6:52 | sak | ali | Älgen var här i morse. Han köpte inget heller. |
| 6:52 | röst | ali | Älgen var här i morse. Han köpte inget heller. · SMÅPRAT |
| 6:53 | bubbla |  | Älgen var här i morse. Han köpte inget heller. |
| 6:56 | aliSalt | ali | 105 |
| 6:56 | klar | ali | Älgen var här i morse. Han köpte inget heller. |
| 6:56 | skratt | du | falsk tuta |
| 7:04 | väntar | värld:TUUT TUUT! | TUUT TUUT! |
| 7:04 | paket |  | tanke → ge |
| 7:04 | tanke | du | Flaggan är uppe. Rolf har lämnat något. |
| 7:04 | väntar | du | Flaggan är uppe. Rolf har lämnat något. |
| 7:04 | väntar |  | (läget ändras) |
| 7:04 | sak | värld:TUUT TUUT! | TUUT TUUT! |
| 7:04 | bubbla |  | TUUT TUUT! |
| 7:07 | klar | värld:TUUT TUUT! | TUUT TUUT! |
| 7:09 | händelse | printStart | sak=kruka |
| 7:09 | sak | du | Flaggan är uppe. Rolf har lämnat något. |
| 7:09 | notis | tanke | 💭 Flaggan är uppe. Rolf har lämnat något. |
| 7:09 | röst | du | Flaggan är uppe. Rolf har lämnat något. · STORY |
| 7:10 | toast | fel | Ingen ström – trampa cykeln |
| 7:12 | toast | guld | ✅ |
| 7:12 | händelse | printKlar | sak=kruka n=10 |
| 7:12 | händelse | tagitUrPrint | sak=kruka n=1 |
| 7:13 | klar | du | Flaggan är uppe. Rolf har lämnat något. |
| 7:15 | sak |  | (läget ändras) |
| 7:15 | brev | rolf | rolf:0 |
| 7:15 | klar |  | (läget ändras) |
| 7:18 | skratt | du | falsk tuta |
| 7:24 | aliSalt | ali | 105 |
| 7:38 | väntar | rolf | Såg att du printar grejer. Kan du göra en sån hä? Kall öl ä viktigt. /Rolf​ |
| 7:38 | paket |  | ge |
| 7:38 | väntar |  | (läget ändras) |
| 7:38 | sak | rolf | Såg att du printar grejer. Kan du göra en sån hä? Kall öl ä viktigt. /Rolf​ |
| 7:38 | lapp | Brev från Rolf | Såg att du printar grejer. Kan du göra en sån hä? Kall öl ä viktigt. /Rolf​ |
| 7:38 | röst | rolf | Såg att du printar grejer. Kan du göra en sån hä? Kall öl ä viktigt. /Rolf​ · STORY |
| 7:38 | händelse | malKlart | id=rolf0-brev del=Dag 2 – Tippen och Rolf nasta=rolf0-printa |
| 7:38 | MÅL |  | Printa ölhållare med kylklamp |
| 7:43 | händelse | printStart | sak=olhallare |
| 7:43 | händelse | malKlart | id=rolf0-printa del=Dag 2 – Tippen och Rolf nasta=rolf0-ge |
| 7:43 | väntar | berattare | Ge Rolf ölhållare med kylklamp. |
| 7:43 | målruta |  | Ge Rolf ölhållare med kylklamp |
| 7:43 | MÅL |  | Ge Rolf ölhållare med kylklamp |
| 7:45 | klar | rolf | Såg att du printar grejer. Kan du göra en sån hä? Kall öl ä viktigt. /Rolf​ |
| 7:45 | händelse | brevLast | id=rolf:0 |
| 7:46 | toast | guld | ✅ |
| 7:46 | händelse | printKlar | sak=olhallare n=1 |
| 7:47 | sak | berattare | Ge Rolf ölhållare med kylklamp. |
| 7:47 | pil |  | Ge Rolf ölhållare med kylklamp |
| 7:47 | röst | berattare | Ge Rolf ölhållare med kylklamp. · MÅL |
| 7:47 | kvittens-bock |  | ✓ Printa ölhållare med kylklamp |
| 7:49 | klar | berattare | Ge Rolf ölhållare med kylklamp. |
| 7:51 | sak |  | (läget ändras) |
| 7:51 | klar |  | (läget ändras) |
| 7:59 | tanke | du | Igensvetsad. Någon ville verkligen inte in här. |
| 7:59 | väntar | du | Igensvetsad. Någon ville verkligen inte in här. |
| 7:59 | sak | du | Igensvetsad. Någon ville verkligen inte in här. |
| 7:59 | notis | tanke | 💭 Igensvetsad. Någon ville verkligen inte in här. |
| 7:59 | röst | du | Igensvetsad. Någon ville verkligen inte in här. · REAKTION |
| 8:03 | klar | du | Igensvetsad. Någon ville verkligen inte in här. |
| 8:28 | väntar | info:bra | 10 st i tratten – motorn mal |
| 8:28 | sak | info:bra | 10 st i tratten – motorn mal |
| 8:28 | kvitto-visas | info:bra | 10 st i tratten – motorn mal |
| 8:28 | toast | bra | 10 st i tratten – motorn mal |
| 8:29 | händelse | tagitUrPrint | sak=olhallare n=1 |
| 8:30 | klar | info:bra | 10 st i tratten – motorn mal |
| 8:31 | väntar | bud | (tips) |
| 8:32 | sak | bud | (tips) |
| 8:32 | väntar | du | Klart! Nu lägger jag den i Rolfs brevlåda vid grinden. |
| 8:33 | klar | bud | (tips) |
| 8:35 | sak | du | Klart! Nu lägger jag den i Rolfs brevlåda vid grinden. |
| 8:35 | röst | du | Klart! Nu lägger jag den i Rolfs brevlåda vid grinden. · MÅL |
| 8:40 | klar | du | Klart! Nu lägger jag den i Rolfs brevlåda vid grinden. |
| 8:56 | händelse | lagtIPostlada | sak=olhallare rolf=0 jobb=false |
| 8:56 | struken | kedja | rolf0 |
| 8:56 | paket |  | tanke |
| 8:56 | tanke | du | Flaggan uppe. Nu får Rolf hämta den. |
| 8:56 | väntar | du | Flaggan uppe. Nu får Rolf hämta den. |
| 8:56 | sak | du | Flaggan uppe. Nu får Rolf hämta den. |
| 8:56 | notis | tanke | 💭 Flaggan uppe. Nu får Rolf hämta den. |
| 8:56 | röst | du | Flaggan uppe. Nu får Rolf hämta den. · REAKTION |
| 8:56 | händelse | malKlart | id=rolf0-ge del=Dag 2 – Tippen och Rolf nasta=vindsnurra |
| 8:56 | väntar | du | En vindsnurra på skjulets tak. Då blir det ström när det blåser. |
| 8:56 | MÅL |  | Trampa, printa och sälj |
| 8:59 | klar | du | Flaggan uppe. Nu får Rolf hämta den. |
| 8:59 | målruta |  | Trampa, printa och sälj |
| 9:00 | kvittens-bock |  | ✓ Ge Rolf ölhållare med kylklamp |
| 9:01 | sak | du | En vindsnurra på skjulets tak. Då blir det ström när det blåser. |
| 9:01 | pil |  | Trampa, printa och sälj |
| 9:01 | notis | tanke | 💭 En vindsnurra på skjulets tak. Då blir det ström när det blåser. |
| 9:01 | röst | du | En vindsnurra på skjulets tak. Då blir det ström när det blåser. · MÅL |
| 9:07 | klar | du | En vindsnurra på skjulets tak. Då blir det ström när det blåser. |
| 9:08 | paket |  | tanke |
| 9:08 | tanke | du | Jaha, Rolf har hämtat ölhållare med kylklamp. |
| 9:08 | väntar | du | Jaha, Rolf har hämtat ölhållare med kylklamp. |
| 9:09 | sak | du | Jaha, Rolf har hämtat ölhållare med kylklamp. |
| 9:09 | notis | tanke | 💭 Jaha, Rolf har hämtat ölhållare med kylklamp. |
| 9:09 | röst | du | Jaha, Rolf har hämtat ölhållare med kylklamp. · REAKTION |
| 9:12 | klar | du | Jaha, Rolf har hämtat ölhållare med kylklamp. |
| 9:23 | scenInfo | gard | Lite skräp ramlade av flaket på gården |
| 9:23 | händelse | printStart | sak=kruka |
| 9:24 | toast | fel | Ingen ström – trampa cykeln |
| 9:27 | toast | guld | ✅ |
| 9:27 | händelse | printKlar | sak=kruka n=11 |
| 9:28 | händelse | tagitUrPrint | sak=kruka n=1 |
| 9:30 | väntar | värld:TUUT! Hej grannen! | TUUT! Hej grannen! |
| 9:30 | sak | värld:TUUT! Hej grannen! | TUUT! Hej grannen! |
| 9:30 | bubbla |  | TUUT! Hej grannen! |
| 9:33 | klar | värld:TUUT! Hej grannen! | TUUT! Hej grannen! |
| 9:38 | röst | ali | Rolf gav mig en kanna. Som min farmors. Jag ritade en sak åt honom. Säg inget, han gråter lätt. · STORY |
| 9:38 | butiksbubbla | ali | Rolf gav mig en kanna. Som min farmors. Jag ritade en sak åt honom. Säg inget, han gråter lätt. |
| 9:40 | aliSalt | ali | 105 |
| 9:40 | butiksbubbla | ali | *nickar* |
| 9:54 | händelse | printStart | sak=kruka |
| 9:56 | toast | guld | ✅ |
| 9:56 | händelse | printKlar | sak=kruka n=12 |
| 9:57 | händelse | tagitUrPrint | sak=kruka n=1 |
| 10:05 | brott | FAST | skrivare har tagit stopp 240 s utan att något låses upp (nästa: skrivare2) |
| 10:08 | aliSalt | ali | 105 |
| 10:21 | händelse | printStart | sak=kruka |
| 10:24 | toast | guld | ✅ |
| 10:24 | händelse | printKlar | sak=kruka n=13 |
| 10:25 | händelse | tagitUrPrint | sak=kruka n=1 |
| 10:36 | aliSalt | ali | 105 |
| 10:49 | händelse | printStart | sak=kruka |
| 10:52 | toast | guld | ✅ |
| 10:52 | händelse | printKlar | sak=kruka n=14 |
| 10:53 | händelse | tagitUrPrint | sak=kruka n=1 |
| 11:03 | skratt | du | falsk tuta |
| 11:04 | aliSalt | ali | 105 |
| 11:17 | händelse | printStart | sak=kruka |
| 11:17 | toast | fel | Ingen ström – trampa cykeln |
| 11:18 | skratt | du | däcket rullar iväg |
| 11:18 | paket |  | tanke |
| 11:18 | tanke | du | Däcket ville inte stanna. Jag förstår det. |
| 11:18 | väntar | du | Däcket ville inte stanna. Jag förstår det. |
| 11:18 | sak | du | Däcket ville inte stanna. Jag förstår det. |
| 11:18 | notis | tanke | 💭 Däcket ville inte stanna. Jag förstår det. |
| 11:18 | röst | du | Däcket ville inte stanna. Jag förstår det. · REAKTION |
| 11:20 | toast | guld | ✅ |
| 11:20 | händelse | printKlar | sak=kruka n=15 |
| 11:21 | händelse | tagitUrPrint | sak=kruka n=1 |
| 11:22 | klar | du | Däcket ville inte stanna. Jag förstår det. |
| 11:25 | väntar | värld:TUUT! Tjena! | TUUT! Tjena! |
| 11:25 | sak | värld:TUUT! Tjena! | TUUT! Tjena! |
| 11:25 | bubbla |  | TUUT! Tjena! |
| 11:28 | klar | värld:TUUT! Tjena! | TUUT! Tjena! |
| 11:32 | aliSalt | ali | 105 |
| 11:45 | händelse | printStart | sak=kruka |
| 11:49 | toast | guld | ✅ |
| 11:49 | händelse | printKlar | sak=kruka n=16 |
| 11:50 | händelse | tagitUrPrint | sak=kruka n=1 |
| 12:01 | aliSalt | ali | 105 |
| 12:11 | upplåst | trampa | vindsnurra |
| 12:11 | brott | RESERV | vindsnurra (trampa 29 av 10) |
| 12:11 | händelse | upplast | id=vindsnurra flask=trampa |
| 12:11 | paket |  | sms |
| 12:11 | väntar | ali | Ali här. Vindsnurra till cykeln. Vinden trampar åt dig. Den är lat, men den jobbar gratis. |
| 12:11 | sak | ali | Ali här. Vindsnurra till cykeln. Vinden trampar åt dig. Den är lat, men den jobbar gratis. |
| 12:11 | sms | ali | Ali här. Vindsnurra till cykeln. Vinden trampar åt dig. Den är lat, men den jobbar gratis. |
| 12:11 | sms-bubbla | ali | Ali här. Vindsnurra till cykeln. Vinden trampar åt dig. Den är lat, men den jobbar gratis. |
| 12:11 | röst | ali | Ali här. Vindsnurra till cykeln. Vinden trampar åt dig. Den är lat, men den jobbar gratis. · STORY |
| 12:14 | händelse | printStart | sak=kruka |
| 12:17 | toast | guld | ✅ |
| 12:17 | händelse | printKlar | sak=kruka n=17 |
| 12:19 | klar | ali | Ali här. Vindsnurra till cykeln. Vinden trampar åt dig. Den är lat, men den jobbar gratis. |
| 13:01 | väntar | info:bra | 10 st i tratten – motorn mal |
| 13:01 | sak | info:bra | 10 st i tratten – motorn mal |
| 13:01 | kvitto-visas | info:bra | 10 st i tratten – motorn mal |
| 13:01 | toast | bra | 10 st i tratten – motorn mal |
| 13:03 | händelse | tagitUrPrint | sak=kruka n=1 |
| 13:03 | klar | info:bra | 10 st i tratten – motorn mal |
| 13:13 | scenInfo | gard | Lite skräp ramlade av flaket på gården |
| 13:14 | röst | ali | Dina krukor säljer. Tanterna i kvarteret älskar dem. · REAKTION |
| 13:14 | butiksbubbla | ali | Dina krukor säljer. Tanterna i kvarteret älskar dem. |
| 13:16 | aliSalt | ali | 105 |
| 13:16 | butiksbubbla | ali | *nickar* |
| 13:20 | toast | guld | 3D-modell köpt – printa vindsnurra till skjultaket på skrivaren |
| 13:20 | händelse | kopt | sak=vindsnurra |
| 13:20 | skratt | du | falsk tuta |
| 13:32 | händelse | printStart | sak=byggsats:vindsnurra |
| 13:34 | toast | fel | Ingen ström – trampa cykeln |
| 13:37 | händelse | printKlar | sak=byggsats:vindsnurra n=1 |
| 13:37 | toast | guld | ✅ |
| 13:38 | väntar | info:guld | 🌬️ Vindsnurran ligger i handen – klicka på skjulet för att sätta den på taket |
| 13:38 | händelse | tagitUrPrint | sak=byggsats:vindsnurra n=1 |
| 13:38 | sak | info:guld | 🌬️ Vindsnurran ligger i handen – klicka på skjulet för att sätta den på taket |
| 13:38 | kvitto-visas | info:guld | 🌬️ Vindsnurran ligger i handen – klicka på skjulet för att sätta den på taket |
| 13:38 | toast | guld | 🌬️ Vindsnurran ligger i handen – klicka på skjulet för att sätta den på taket |
| 13:40 | klar | info:guld | 🌬️ Vindsnurran ligger i handen – klicka på skjulet för att sätta den på taket |
| 13:50 | händelse | placerat | sak=vindsnurra |
| 13:50 | kvittens | du | Den snurrar! Långsamt. Men den snurrar. |
| 13:50 | varför | du | Om det regnar i natt drunknar jag. Ett tak. |
| 13:50 | väntar | du | Den snurrar! Långsamt. Men den snurrar. |
| 13:50 | väntar | info:guld | 🌬️ Vindsnurran sitter på taket – den trampar cykeln åt dig när det blåser |
| 13:50 | monterat | du | byggsats:vindsnurra |
| 13:50 | händelse | monterat | sak=vindsnurra |
| 13:50 | sak | du | Den snurrar! Långsamt. Men den snurrar. |
| 13:50 | notis | tanke | 💭 Den snurrar! Långsamt. Men den snurrar. |
| 13:50 | röst | du | Den snurrar! Långsamt. Men den snurrar. · STORY |
| 13:50 | händelse | malKlart | id=vindsnurra del=Dag 2 – Tippen och Rolf nasta=n1-bygg-dorr-skjulet |
| 13:50 | väntar | du | Det drar från dörrhålet. En dörr kan jag printa. |
| 13:50 | MÅL |  | Bygg en dörr till skjulet |
| 13:53 | klar | du | Den snurrar! Långsamt. Men den snurrar. |
| 13:53 | sak | info:guld | 🌬️ Vindsnurran sitter på taket – den trampar cykeln åt dig när det blåser |
| 13:53 | kvitto-visas | info:guld | 🌬️ Vindsnurran sitter på taket – den trampar cykeln åt dig när det blåser |
| 13:53 | toast | guld | 🌬️ Vindsnurran sitter på taket – den trampar cykeln åt dig när det blåser |
| 13:54 | målruta |  | Bygg en dörr till skjulet |
| 13:55 | klar | info:guld | 🌬️ Vindsnurran sitter på taket – den trampar cykeln åt dig när det blåser |
| 13:57 | sak | du | Det drar från dörrhålet. En dörr kan jag printa. |
| 13:57 | pil |  | Bygg en dörr till skjulet |
| 13:57 | notis | tanke | 💭 Det drar från dörrhålet. En dörr kan jag printa. |
| 13:57 | röst | du | Det drar från dörrhålet. En dörr kan jag printa. · MÅL |
| 13:58 | nick |  | nick:28 |
| 14:01 | klar | du | Det drar från dörrhålet. En dörr kan jag printa. |
| 14:18 | toast | guld | 3D-modell köpt – printa dörr på skrivaren |
| 14:18 | händelse | kopt | sak=dorr |
| 14:30 | händelse | printStart | sak=byggsats:dorr |
| 14:34 | toast | bra | Del 1 av 2 klar |
| 14:34 | väntar | notis:Skrivare S: Del 1 av 2 klar | Skrivare S: Del 1 av 2 klar |
| 14:34 | sak | notis:Skrivare S: Del 1 av 2 klar | Skrivare S: Del 1 av 2 klar |
| 14:34 | notis | bra | Skrivare S: Del 1 av 2 klar |
| 14:36 | klar | notis:Skrivare S: Del 1 av 2 klar | Skrivare S: Del 1 av 2 klar |
| 14:37 | händelse | printKlar | sak=byggsats:dorr n=1 |
| 14:37 | toast | guld | ✅ |
| 14:38 | händelse | tagitUrPrint | sak=byggsats:dorr n=1 |
| 14:38 | paket |  | sms |
| 14:38 | väntar | ali | Ali här. Jag har inte sovit. Inte på grund av AI:n. På grund av dig. Du bygger saker av sopor. Jag har en hel butik och bygger ingenting. Det ska ändras. Kanske. Troligen. |
| 14:38 | sak | ali | Ali här. Jag har inte sovit. Inte på grund av AI:n. På grund av dig. Du bygger saker av sopor. Jag har en hel butik och bygger ingenting. Det ska ändras. Kanske. Troligen. |
| 14:38 | sms | ali | Ali här. Jag har inte sovit. Inte på grund av AI:n. På grund av dig. Du bygger saker av sopor. Jag har en hel butik och bygger ingenting. Det ska ändras. Kanske. Troligen. |
| 14:38 | sms-bubbla | ali | Ali här. Jag har inte sovit. Inte på grund av AI:n. På grund av dig. Du bygger saker av sopor. Jag har en hel butik och bygger ingenting. Det ska ändras. Kanske. Troligen. |
| 14:38 | röst | ali | Ali här. Jag har inte sovit. Inte på grund av AI:n. På grund av dig. Du bygger saker av sopor. Jag har en hel butik och bygger ingenting. Det ska ändras. Kanske. Troligen. · SMÅPRAT |
| 14:46 | väntar | info:guld | Dörr på plats! Trivsel +8 · Ali betalar nu +0 % |
| 14:46 | händelse | malKlart | id=n1-bygg-dorr-skjulet del=Dag 2 – Tippen och Rolf nasta=sov2 |
| 14:46 | paket |  | sms |
| 14:46 | väntar | bror | Mamma ringde mig fyra gånger förresten. Snyggt jobbat 😂 |
| 14:46 | skratt | bror | Mamma ringde mig fyra gånger förresten. |
| 14:46 | väntar | berattare | Klart för idag – sov när du vill. |
| 14:46 | MÅL |  | Klart för idag – sov när du vill |
| 14:49 | målruta |  | Klart för idag – sov när du vill |
| 14:50 | kvittens-bock |  | ✓ Bygg en dörr till skjulet |
| 14:53 | klar | ali | Ali här. Jag har inte sovit. Inte på grund av AI:n. På grund av dig. Du bygger saker av sopor. Jag har en hel butik och bygger ingenting. Det ska ändras. Kanske. Troligen. |
| 14:53 | sak | berattare | Klart för idag – sov när du vill. |
| 14:53 | pil |  | Klart för idag – sov när du vill |
| 14:53 | röst | berattare | Klart för idag – sov när du vill. · MÅL |
| 14:53 | väntar | notis:🌇 Klockan är 21. Ali slår igen luckan.  | 🌇 Klockan är 21. Ali slår igen luckan. Dagens jobb är klart – gå in i skjulet och sov i sängen. |
| 14:56 | klar | berattare | Klart för idag – sov när du vill. |
| 14:56 | struken | info:guld | Dörr på plats! Trivsel +8 · Ali betalar nu +0 % |
| 14:56 | sak | notis:🌇 Klockan är 21. Ali slår igen luckan.  | 🌇 Klockan är 21. Ali slår igen luckan. Dagens jobb är klart – gå in i skjulet och sov i sängen. |
| 14:56 | notis | guld | 🌇 Klockan är 21. Ali slår igen luckan. Dagens jobb är klart – gå in i skjulet och sov i sängen. |
| 14:58 | klar | notis:🌇 Klockan är 21. Ali slår igen luckan.  | 🌇 Klockan är 21. Ali slår igen luckan. Dagens jobb är klart – gå in i skjulet och sov i sängen. |
| 15:03 | brott | DÖD KNAPP | Läs upp i ph-notis: täckt av CANVAS |
| 15:08 | brott | FAST | skrivare har tagit stopp 480 s utan att något låses upp (nästa: skrivare2) |

<details><summary>Botens handlingar dag 2</summary>

- 0:00 — dag 2 börjar — (170 kr)
- 0:13 popup: "FORTSÄTT" (170 kr)
- 0:20 popup: "FORTSÄTT" (170 kr)
- 0:37 nybörjaren ser ingen pil – tittar runt (170 kr)
- 0:41 tjänar pengar till väntar på flaskhalsen för kvarnmotor: 170/210 kr → printar blomkruka (105 kr) (170 kr)
- 0:48 gå till skrivaren (19 m) (170 kr)
- 0:50 printar Blomkruka (170 kr)
- 0:53 tar ut 1 st ur skrivaren (170 kr)
- 1:02 gå till Ali (26 m) (170 kr)
- 1:02 öppnar Alis butik – sälja (170 kr)
- 1:04 säljer hos Ali: +105 kr (275 kr)
- 1:06 tjänar pengar till väntar på flaskhalsen för kvarnmotor: 275/315 kr → printar blomkruka (105 kr) (275 kr)
- 1:15 gå till skrivaren (25 m) (275 kr)
- 1:16 printar Blomkruka (275 kr)
- 1:23 popup: "FORTSÄTT" (275 kr)
- 1:25 gå till cykeln (1 m) (275 kr)
- 1:28 tar ut 1 st ur skrivaren (275 kr)
- 1:37 gå till Ali (25 m) (275 kr)
- 1:37 öppnar Alis butik – sälja (275 kr)
- 1:39 säljer hos Ali: +105 kr (380 kr)
- 1:41 tjänar pengar till väntar på flaskhalsen för kvarnmotor: 380/420 kr → printar blomkruka (105 kr) (380 kr)
- 1:56 plockar 6 skräp på gården (bär max 6) (380 kr)
- 2:07 gå till kvarnen (30 m) (380 kr)
- 2:12 gå till skrivaren (1 m) (380 kr)
- 2:14 printar Blomkruka (380 kr)
- 2:18 tar ut 1 st ur skrivaren (380 kr)
- 2:28 gå till Ali (28 m) (380 kr)
- 2:28 öppnar Alis butik – sälja (380 kr)
- 2:30 säljer hos Ali: +105 kr (485 kr)
- 2:32 tjänar pengar till väntar på flaskhalsen för kvarnmotor: 485/525 kr → printar blomkruka (105 kr) (485 kr)
- 2:41 gå till skrivaren (25 m) (485 kr)
- 2:43 printar Blomkruka (485 kr)
- 2:45 gå till cykeln (1 m) (485 kr)
- 2:48 tar ut 1 st ur skrivaren (485 kr)
- 2:57 gå till Ali (25 m) (485 kr)
- 2:57 öppnar Alis butik – sälja (485 kr)
- 2:59 säljer hos Ali: +105 kr (590 kr)
- 3:01 tjänar pengar till väntar på flaskhalsen för kvarnmotor: 590/630 kr → printar blomkruka (105 kr) (590 kr)
- 3:10 gå till skrivaren (25 m) (590 kr)
- 3:12 printar Blomkruka (590 kr)
- 3:16 tar ut 1 st ur skrivaren (590 kr)
- 3:25 gå till Ali (25 m) (590 kr)
- 3:25 öppnar Alis butik – sälja (590 kr)
- 3:27 säljer hos Ali: +105 kr (695 kr)
- 3:29 tjänar pengar till väntar på flaskhalsen för kvarnmotor: 695/735 kr → printar blomkruka (105 kr) (695 kr)
- 3:47 plockar 6 skräp på gården (bär max 6) (695 kr)
- 3:58 gå till kvarnen (29 m) (695 kr)
- 4:05 gå till skrivaren (1 m) (695 kr)
- 4:06 printar Blomkruka (695 kr)
- 4:09 gå till cykeln (2 m) (695 kr)
- 4:12 tar ut 1 st ur skrivaren (695 kr)
- 4:22 gå till Ali (26 m) (695 kr)
- 4:22 öppnar Alis butik – sälja (695 kr)
- 4:24 säljer hos Ali: +105 kr (800 kr)
- 4:26 öppnar Alis butik – köpa kvarnmotor (800 kr)
- 4:28 köper kvarnmotor för 50 kr (750 kr)
- 4:52 gå till skrivaren (25 m) (750 kr)
- 4:53 printar Kvarnmotor (750 kr)
- 4:57 tar ut 1 st ur skrivaren (750 kr)
- 5:02 gå till skruva fast kvarnmotorn (3 m) (750 kr)
- 5:19 nybörjaren ser ingen pil – tittar runt (750 kr)
- 5:25 gå till fel håll en bit (4 m) (750 kr)
- 5:32 gå till Rolfs sopsäck (16 m) (750 kr)
- 5:45 tar på korg (750 kr)
- 5:45 tjänar pengar till väntar på sopbilen (BO): 750/810 kr → printar blomkruka (105 kr) (750 kr)
- 5:54 popup: "FORTSÄTT" (750 kr)
- 5:57 gå till skrivaren (12 m) (750 kr)
- 5:58 printar Blomkruka (750 kr)
- 6:01 gå till cykeln (1 m) (750 kr)
- 6:04 tar ut 1 st ur skrivaren (750 kr)
- 6:13 gå till Ali (25 m) (750 kr)
- 6:13 öppnar Alis butik – sälja (750 kr)
- 6:15 säljer hos Ali: +105 kr (855 kr)
- 6:25 nybörjaren ser ingen pil – tittar runt (855 kr)
- 6:30 tjänar pengar till väntar på sopbilen (BO): 855/915 kr → printar blomkruka (105 kr) (855 kr)
- 6:39 gå till skrivaren (25 m) (855 kr)
- 6:41 printar Blomkruka (855 kr)
- 6:45 tar ut 1 st ur skrivaren (855 kr)
- 6:54 gå till Ali (25 m) (855 kr)
- 6:54 öppnar Alis butik – sälja (855 kr)
- 6:56 säljer hos Ali: +105 kr (960 kr)
- 6:58 tjänar pengar till väntar på sopbilen (BO): 960/1020 kr → printar blomkruka (105 kr) (960 kr)
- 7:07 gå till skrivaren (25 m) (960 kr)
- 7:09 printar Blomkruka (960 kr)
- 7:10 gå till cykeln (1 m) (960 kr)
- 7:13 tar ut 1 st ur skrivaren (960 kr)
- 7:22 gå till Ali (25 m) (960 kr)
- 7:22 öppnar Alis butik – sälja (960 kr)
- 7:24 säljer hos Ali: +105 kr (1065 kr)
- 7:38 gå till Rolfs postlåda (31 m) (1065 kr)
- 7:42 gå till skrivaren (7 m) (1065 kr)
- 7:43 printar Ölhållare med kylklamp (1065 kr)
- 8:15 plockar 8 skräp på gården (bär max 10) (1065 kr)
- 8:28 gå till kvarnen (37 m) (1065 kr)
- 8:29 gå till skrivaren (1 m) (1065 kr)
- 8:30 tar ut 1 st ur skrivaren (1065 kr)
- 8:49 nybörjaren ser ingen pil – tittar runt (1065 kr)
- 8:53 valj olhallare: true, vald olhallare, post {"l":null,"tr":null,"tm":[]}, nummer false (1065 kr)
- 8:56 gå till Rolfs postlåda (7 m) (1065 kr)
- 9:14 nybörjaren ser ingen pil – tittar runt (1065 kr)
- 9:19 tjänar pengar till väntar på flaskhalsen för vindsnurra: 1065/1105 kr → printar blomkruka (105 kr) (1065 kr)
- 9:22 gå till skrivaren (6 m) (1065 kr)
- 9:23 printar Blomkruka (1065 kr)
- 9:25 gå till cykeln (1 m) (1065 kr)
- 9:29 tar ut 1 st ur skrivaren (1065 kr)
- 9:38 gå till Ali (26 m) (1065 kr)
- 9:38 öppnar Alis butik – sälja (1065 kr)
- 9:40 säljer hos Ali: +105 kr (1170 kr)
- 9:43 tjänar pengar till väntar på flaskhalsen för vindsnurra: 1170/1210 kr → printar blomkruka (105 kr) (1170 kr)
- 9:52 gå till skrivaren (25 m) (1170 kr)
- 9:54 printar Blomkruka (1170 kr)
- 9:57 tar ut 1 st ur skrivaren (1170 kr)
- 10:07 gå till Ali (25 m) (1170 kr)
- 10:07 öppnar Alis butik – sälja (1170 kr)
- 10:08 säljer hos Ali: +105 kr (1275 kr)
- 10:11 tjänar pengar till väntar på flaskhalsen för vindsnurra: 1275/1315 kr → printar blomkruka (105 kr) (1275 kr)
- 10:20 gå till skrivaren (25 m) (1275 kr)
- 10:21 printar Blomkruka (1275 kr)
- 10:22 gå till cykeln (1 m) (1275 kr)
- 10:25 tar ut 1 st ur skrivaren (1275 kr)
- 10:35 gå till Ali (25 m) (1275 kr)
- 10:35 öppnar Alis butik – sälja (1275 kr)
- 10:36 säljer hos Ali: +105 kr (1380 kr)
- 10:39 tjänar pengar till väntar på flaskhalsen för vindsnurra: 1380/1420 kr → printar blomkruka (105 kr) (1380 kr)
- 10:48 gå till skrivaren (25 m) (1380 kr)
- 10:49 printar Blomkruka (1380 kr)
- 10:53 tar ut 1 st ur skrivaren (1380 kr)
- 11:02 gå till Ali (25 m) (1380 kr)
- 11:02 öppnar Alis butik – sälja (1380 kr)
- 11:04 säljer hos Ali: +105 kr (1485 kr)
- 11:06 tjänar pengar till väntar på flaskhalsen för vindsnurra: 1485/1525 kr → printar blomkruka (105 kr) (1485 kr)
- 11:15 gå till skrivaren (25 m) (1485 kr)
- 11:17 printar Blomkruka (1485 kr)
- 11:17 gå till cykeln (1 m) (1485 kr)
- 11:21 tar ut 1 st ur skrivaren (1485 kr)
- 11:30 gå till Ali (25 m) (1485 kr)
- 11:30 öppnar Alis butik – sälja (1485 kr)
- 11:32 säljer hos Ali: +105 kr (1590 kr)
- 11:34 tjänar pengar till väntar på flaskhalsen för vindsnurra: 1590/1630 kr → printar blomkruka (105 kr) (1590 kr)
- 11:43 gå till skrivaren (25 m) (1590 kr)
- 11:45 printar Blomkruka (1590 kr)
- 11:49 gå till cykeln (1 m) (1590 kr)
- 11:50 tar ut 1 st ur skrivaren (1590 kr)
- 11:59 gå till Ali (25 m) (1590 kr)
- 11:59 öppnar Alis butik – sälja (1590 kr)
- 12:01 säljer hos Ali: +105 kr (1695 kr)
- 12:03 tjänar pengar till väntar på flaskhalsen för vindsnurra: 1695/1735 kr → printar blomkruka (105 kr) (1695 kr)
- 12:12 gå till skrivaren (25 m) (1695 kr)
- 12:14 printar Blomkruka (1695 kr)
- 12:58 plockar 10 skräp på gården (bär max 10) (1695 kr)
- 13:01 gå till kvarnen (8 m) (1695 kr)
- 13:03 gå till skrivaren (2 m) (1695 kr)
- 13:04 tar ut 1 st ur skrivaren (1695 kr)
- 13:14 gå till Ali (28 m) (1695 kr)
- 13:14 öppnar Alis butik – sälja (1695 kr)
- 13:16 säljer hos Ali: +105 kr (1800 kr)
- 13:18 öppnar Alis butik – köpa vindsnurra till skjultaket (1800 kr)
- 13:21 köper vindsnurra för 133 kr (1667 kr)
- 13:31 gå till skrivaren (25 m) (1667 kr)
- 13:32 printar Vindsnurra till skjultaket (1667 kr)
- 13:35 gå till cykeln (1 m) (1667 kr)
- 13:39 tar ut 1 st ur skrivaren (1667 kr)
- 13:50 gå till sätt vindsnurran på taket (20 m) (1667 kr)
- 14:16 gå till Ali (20 m) (1667 kr)
- 14:16 öppnar Alis butik – köpa dörr (1667 kr)
- 14:19 köper dorr för 120 kr (1547 kr)
- 14:29 gå till skrivaren (25 m) (1547 kr)
- 14:30 printar Dörr (2 delar) (1547 kr)
- 14:39 tar ut 1 st ur skrivaren (1547 kr)
- 14:46 gå till skjulet (19 m) (1547 kr)
- 15:03 nybörjaren ser ingen pil – tittar runt (1547 kr)
- 15:08 gå till sängen (1 m) (1547 kr)

</details>

## Dag 3

| Tid | Källa | Vem | Text |
|---|---|---|---|
| 15:11 | vara | ali | ingen |
| 15:11 | händelse | malKlart | id=sov2 del=Dag 2 – Tippen och Rolf nasta=rolf1-brev |
| 15:11 | vara | ali | kruka |
| 15:11 | MÅL |  | Vänta på sopbilen. Den lämnar något. |
| 15:11 | väntar | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått en DÖRR. Och vindsnurra till skjultaket. Mer säger jag inte. Gunnar vet. |
| 15:11 | radio | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått en DÖRR. Och vindsnurra till skjultaket. Mer säger jag inte. Gunnar vet. |
| 15:11 | skratt | du | Radio-Kjelle |
| 15:11 | sak | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått en DÖRR. Och vindsnurra till skjultaket. Mer säger jag inte. Gunnar vet. |
| 15:11 | notis |  | 📻 Radio Tippen: Radio Tippen, Kjelle här. Skjulet vid tippen har fått en DÖRR. Och vindsnurra till skjultaket. Mer säger jag inte. Gunnar vet. |
| 15:11 | röst | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått en DÖRR. Och vindsnurra till skjultaket. Mer säger jag inte. Gunnar vet. · REAKTION |
| 0:01 | händelse | dagenBorjar | dag=3 |
| 0:01 | meddelande | du | Bära mer och få tak över huvudet. |
| 0:01 | dagbokkort | du | Dag 3 – En skrivare till och taket · Bära mer och få tak över huvudet. |
| 0:01 | röst | du | Dag 3 – En skrivare till och taket. Bära mer och få tak över huvudet. · STORY |
| 0:13 | klar | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått en DÖRR. Och vindsnurra till skjultaket. Mer säger jag inte. Gunnar vet. |
| 0:13 | händelse | morgonkortStangt | dag=3 |
| 0:13 | väntar | berattare | Vänta på sopbilen. Den lämnar något.. |
| 0:13 | målruta |  | Vänta på sopbilen. Den lämnar något. |
| 0:19 | sak | berattare | Vänta på sopbilen. Den lämnar något.. |
| 0:19 | pil |  | Vänta på sopbilen. Den lämnar något. |
| 0:19 | röst | berattare | Vänta på sopbilen. Den lämnar något.. · MÅL |
| 0:22 | klar | berattare | Vänta på sopbilen. Den lämnar något.. |

<details><summary>Botens handlingar dag 3</summary>

- 0:00 — dag 3 börjar — (1547 kr)
- 0:13 popup: "FORTSÄTT" (1547 kr)
- 0:28 nybörjaren ser ingen pil – tittar runt (1547 kr)

</details>
