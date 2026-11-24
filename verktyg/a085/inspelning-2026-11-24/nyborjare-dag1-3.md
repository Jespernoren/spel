# Nybörjarboten – körning 1

*A-081: samma händer som AX, men boten vet bara det som syns (målrutan, pilen, det som sägs). Går 3 m/s, läser 60 ms per tecken, följer pilen, tittar runt när målet är otydligt och går fel ibland.*

| Dag | Minuter | FÖRVIRRAD | FAST | TRÄNGSEL | HANN INTE LÄSA | DOLT | NY SAK UTAN FÖRKLARING | OKÄNT ORD |
|---|---|---|---|---|---|---|---|---|
| 1 | 12.0 | 1 | 0 | 0 | 0 | 0 | 1 | 0 |
| 2 | 8.5 | 0 | 0 | 1 | 0 | 1 | 0 | 0 |
| 3 | 17.8 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |

## Flaggor (4)

- **NY SAK UTAN FÖRKLARING** dag 1 0:18: byta: ingen text eller bild har förklarat det innan första gången
- **FÖRVIRRAD** dag 1 10:13: pilen pekar 28 m från där målet görs (skrap)
- **TRÄNGSEL** dag 2 3:53: bubbla ”Öj… ä dä du som printar grejer? Dom där ” och info ”Tornet är fullt. Skrivaren får jobba ika” inom 1.0 s
- **DOLT** dag 2 4:09: bubbla: ”Hm. Ja kanske har nåt åt dej. Kolla postlådan vid ” sades utom bild

## Friktionskurvan (sekunder per mål: nybörjaren mot AX)

| Dag | Mål | Nybörjaren | AX | × |
|---|---|---|---|---|
| 1 | Lasta av skrivaren | 0 | – | – |
| 1 | Lasta av skrivaren | 28 | – | – |
| 1 | Ställ upp skrivaren | 15 | – | – |
| 1 | Skrivaren behöver ström | 28 | – | – |
| 1 | Ställ cykel och generator | 32 | – | – |
| 1 | Välj vad skrivaren ska printa | 13 | – | – |
| 1 | Trampa cykeln | 5 | – | – |
| 1 | En nyckelring till | 40 | – | – |
| 1 | Visa ringarna i affären | 40 | – | – |
| 1 | Köp kvarnen | 22 | – | – |
| 1 | Ställ kvarnen | 29 | – | – |
| 1 | Gör egen tråd | 24 | – | – |
| 1 | Printa med egen tråd | 25 | – | – |
| 1 | Sälj hos Ali | 31 | – | – |
| 1 | Koppla in powerbanken | 34 | – | – |
| 1 | Köp skräpgripen | 30 | – | – |
| 1 | Printa skräpgripen | 57 | – | – |
| 1 | Spara till krukreceptet · 0 / 40 kr | 97 | – | – |
| 1 | Sälj blomkrukan | 27 | – | – |
| 1 | Köp sängen | 21 | – | – |
| 1 | Printa sängen | 98 | – | – |
| 2 | Spara till kvarnmotorn · 25 / 50 kr | -654 | – | – |
| 2 | Printa kvarnmotorn till kvarnen | 51 | – | – |
| 2 | Städa gården | 51 | – | – |
| 2 | Gå till bilen vid skjulet | 102 | – | – |
| 2 | Möt sopbilen vid grinden | 32 | – | – |
| 2 | Printa ölhållare med kylklamp | 5 | – | – |
| 2 | Ge Rolf ölhållare med kylklamp | 29 | – | – |
| 2 | Köp vindsnurran | 57 | – | – |
| 2 | Bygg en dörr till skjulet | 103 | – | – |
| 3 | Möt sopbilen vid grinden | -457 | – | – |
| 3 | Hämta 5 skräp på soptippen | 4 | – | – |
| 3 | Printa flasköppnare med magnet | 23 | – | – |
| 3 | Ge Rolf flasköppnare med magnet | 22 | – | – |
| 3 | Köp Alis gamla bilbatteri | 54 | – | – |
| 3 | Köp ryggkorgen | 55 | – | – |
| 3 | Ta på ryggkorgen | 15 | – | – |
| 3 | Bygg ett arbetsbord | 114 | – | – |
| 3 | Spara till Skrivare M · 93 / 180 kr | 127 | – | – |
| 3 | Lägg plåttak på skjulet | 79 | – | – |
| 3 | Möt sopbilen vid grinden | 49 | – | – |
| 3 | Printa grillspade | 17 | – | – |
| 3 | Ge Rolf grillspade | 35 | – | – |
| 3 | Töm en full kärra i kvarnen | 31 | – | – |
| 3 | Köp sophållaren | 61 | – | – |
| 3 | Printa en pall | 45 | – | – |
| 3 | Köp vindsnurran | 54 | – | – |
| 3 | Isolera två väggar · 0/2 | 212 | – | – |

---

# Simulering kapitel 1 – körning 1

*Gjord 2026-11-24 11:18 med `verktyg/sim-kapitel1.mjs` + `verktyg/sim-bot.js` (punkt AX). Boten går 4,5 m/s, läser 15 tecken/s, trampar, vevar, plockar, printar, köper och säljer via spelets egna funktioner. Tiderna är speltid.*

## Sammanfattning

| Dag | Minuter | Väntan | Prints (totalt) | Kr vid sömn | Bär | Trivsel |
|---|---|---|---|---|---|---|
| 1 | 12.0 | 1 % | 10 | 25 | 6 | 19 |
| 2 | 8.5 | 0 % | 13 | 15 | 10 | 38 |
| 3 | 17.8 | 1 % | 21 | 163 | 16 | 96 |

## Flaskhalskartan (EE)

| Dag | bara | mala | trampa | strom | skrivare | inkomst | Upplåst |
|---|---|---|---|---|---|---|---|
| 1 | 4 | 7 | 20 | 14 | 119 | 8 | grip (bara, 7:59), kruka (inkomst, 8:24) |
| 2 | 2 | 123 | 2 | 3 | 365 | 0 | kvarnmotor (mala, 0:54), rullstall (skrivare, 2:34), trim_skrivare (skrivare, 3:34), vindsnurra (trampa, 5:39) |
| 3 | 0 | 88 | 0 | 30 | 748 | 0 | cykelbatteri (strom, 1:47), ryggkorg (bara, 2:41), skrivare2 (skrivare, 5:45), trim_skrivare2 (skrivare, 7:51), matarband (bara, 11:23), vindsnurra2 (strom, 13:10) |

TIDIG: 0 · FAST: 0 · upplåst av reserven (målet väntade 3 min): 0

**SKRATT:** 41 roliga ögonblick på 38 min (10.7 per 10 min, mål minst 5)

**Köp:**

- dag 1 3:42 – gammalkvarn (30 kr)
- dag 1 6:36 – grip (50 kr)
- dag 1 8:45 – kruka (40 kr)
- dag 1 9:57 – sang (60 kr)
- dag 2 1:08 – kvarnmotor (50 kr)
- dag 2 6:04 – vindsnurra (50 kr)
- dag 2 7:21 – dorr (120 kr)
- dag 3 2:21 – cykelbatteri (10 kr)
- dag 3 3:12 – ryggkorg (40 kr)
- dag 3 4:42 – bord (40 kr)
- dag 3 6:36 – skrivare2 (180 kr)
- dag 3 8:33 – tak (90 kr)
- dag 3 11:51 – matarband (40 kr)
- dag 3 12:53 – pall (30 kr)
- dag 3 13:40 – vindsnurra (50 kr)
- dag 3 15:29 – vaggar (50 kr)

## Storykedjan (kvittens → varför → nytt mål)

| Dag | Tid | Id | Kvittens | Varför | Nytt mål | Tid till målet |
|---|---|---|---|---|---|---|
| 1 | 0:28 | lasta | Tung. Den har storebror aldrig burit så långt. |  | Skrivaren ställer jag mot skräpberget. Min första verkstad. | 1.3 s |
| 1 | 1:55 | valjModell | Den piper. Den GÖR något. |  | Nu behöver den ström. Trampa. | 1.3 s |
| 1 | 2:01 | trampa | Klar! Ta ut den innan den ändrar sig. |  | En nyckelring till, så länge storebrors rulle räcker. | 18.9 s |
| 1 | 4:36 | flaska | Det blir tråd! Riktig plasttråd. |  | Min egen tråd. Nu printar jag en nyckelring av den. | 1.8 s |
| 1 | 9:10 | krukaD1 | En kruka. Mamma skulle bli så stolt. Hon får inte veta. |  | Ali gillar krukor. Han sa det själv. | 1.3 s |
| 1 | 11:36 | printSang | En säng. Jag printade en SÄNG. |  | Sängen ska in i skjulet. Sen sover jag. | 1.3 s |
| 2 | 6:36 | vindsnurra | Den snurrar! Långsamt. Men den snurrar. |  | Det drar från dörrhålet. En dörr kan jag printa. | 1.4 s |
| 3 | 2:41 | kopBatteri | Nu printar den klart även när jag vilar benen. |  | Jag springer för mycket. Med en ryggkorg bär jag sexton sake | 1.3 s |
| 3 | 3:51 | ryggkorgPa | Nu bär jag sexton skräp. |  | Ett arbetsbord bredvid skrivaren. Skrivare M ska stå på det. | 2.2 s |
| 3 | 12:24 | sophallare | Nu kan jag tömma hela kärran på en gång. |  | Jag behöver något att sitta på. En pall. Lagom ambitiöst. | 1.3 s |

## Hur länge nya mål väntade (från att förra målet blev klart till att det nya syntes i målrutan)

Snitt 2.4 s · max 15.4 s · över 4 s: 4 · över 8 s: 3 av 49

## Flaggor (74)

- **UPPREPNING** dag 1 8:24: Den köper jag. Ge hit. (CT)
- **UPPREPNING** dag 1 9:33: Den köper jag. Ge hit. (CT)
- **UPPREPNING** dag 3 15:35: Den köper jag. Ge hit. (CT)
- **KROCK** dag 2 1:47: 3.2 s mellan [notis] "💭 Tänk att jag ska få sova i min egen säng." och [notis] "💭 Kvarnmotorn ska skruvas fast på kvarnen."
- **KROCK** dag 2 3:51: 3.8 s mellan [bubbla] "Du har städat hela gården. Ingen gör så nuförtin." och [bubbla] "Öj… ä dä du som printar grejer? Dom där nyckelringarna?"
- **KROCK** dag 2 5:05: 0.4 s mellan [lapp] "Såg att du printar grejer. Kan du göra en sån hä? Kall öl ä " och [notis] "💭 Rolf har nyckeln… Jag undrar vad som finns där inne."
- **KROCK** dag 3 0:58: 1.0 s mellan [lapp] "ÖJ! Kajsa knuffa ner min flasköppnare i tippen. Kan du göra " och [notis] "💭 Fastpressad. Den sitter som i betong."
- **KROCK** dag 3 14:06: 2.5 s mellan [notis] "Slut på trampandet. Nästan." och [notis] "Rolf: ”Hoppa in. Ja ska visa dej en grej.”"
- **KROCK** dag 3 16:13: 2.4 s mellan [morgonkort] "⏸️ Pausad · Klicka för att fortsätta." och [bubbla] "Kall öl ä viktigt."
- **SEN** dag 2 1:47: 1.6 s efter händelsen (gräns 1 s): du: "Kvarnmotorn ska skruvas fast på kvarnen."
- **SEN** dag 2 2:57: 1.9 s efter händelsen (gräns 1 s): du: "Igensvetsad. Någon ville verkligen inte in här."
- **PAUS** dag 1 2:04: 0.6 s paus före "Klar! Ta ut den innan den ändrar sig."
- **PAUS** dag 1 2:07: 0.1 s paus före "Jag gjorde den här. Av skräp. Det här kan funka."
- **PAUS** dag 1 2:13: 0.0 s paus före "Hallå där, nya grannen! Vad är det där du gör?"
- **PAUS** dag 1 2:18: 1.1 s paus före "VA FAN?! Fick du igång den?? Jag försökte i typ et"
- **PAUS** dag 1 2:26: 0.0 s paus före "En nyckelring till, så länge storebrors rulle räck"
- **PAUS** dag 1 2:51: 0.0 s paus före "Affären mitt emot. Han verkar nyfiken. Jag visar h"
- **PAUS** dag 1 3:34: 0.0 s paus före "Ali har en gammal kvarn. Den gör tråd av skräp."
- **PAUS** dag 1 3:50: 0.0 s paus före "Kvarnen ska stå vid skrivaren, närmast skräpberget"
- **PAUS** dag 1 4:40: 0.0 s paus före "Min egen tråd. Nu printar jag en nyckelring av den"
- **PAUS** dag 1 5:39: 0.0 s paus före "Nyckelringar igen? Folk tappar sina nycklar hela t"
- **PAUS** dag 1 5:46: 0.1 s paus före "Koppla in powerbanken."
- **PAUS** dag 1 6:32: 0.1 s paus före "Med en skräpgrip slipper jag böja mig. Ali har en "
- **PAUS** dag 1 6:38: 0.0 s paus före "Min första 3D-modell! Jag printar inte bara saker "
- **PAUS** dag 1 6:39: 0.2 s paus före "Bra val. Ritningen räcker till en skräpgrip."
- **PAUS** dag 1 7:40: 0.0 s paus före "Spara till krukreceptet."
- **PAUS** dag 1 8:47: 0.1 s paus före "Blomkruka? Bra val. Folk köper sånt. Jag vet inte "
- **PAUS** dag 1 9:37: 0.9 s paus före "Du får bonus! 10 kr extra. Du ser hungrig ut."
- **PAUS** dag 1 11:39: 0.1 s paus före "Sängen ska in i skjulet. Sen sover jag."
- **PAUS** dag 2 0:21: 0.0 s paus före "Ali vill ha idag: Blomkruka · +50 %"
- **PAUS** dag 2 1:09: 0.6 s paus före "Sopbilen tippade en ny last. Allt det skräpet – oc"
- **PAUS** dag 2 1:15: 0.1 s paus före "Motorn ska sitta där veven sitter. Jag printar den"
- **PAUS** dag 2 1:47: 0.1 s paus före "Kvarnmotorn ska skruvas fast på kvarnen."
- **PAUS** dag 2 2:03: 0.0 s paus före "Gården är full av skräp. Jag börjar vid skjulet."
- **PAUS** dag 2 3:46: 0.1 s paus före "Du har städat hela gården. Ingen gör så nuförtin."
- **PAUS** dag 2 3:51: 0.1 s paus före "Öj… ä dä du som printar grejer? Dom där nyckelring"
- **PAUS** dag 2 3:58: 0.0 s paus före "Tornet är fullt. Skrivaren får jobba ikapp."
- **PAUS** dag 2 4:03: 0.2 s paus före "Ja. Av skräp."
- **PAUS** dag 2 4:07: 0.1 s paus före "Hm. Ja kanske har nåt åt dej. Kolla postlådan vid "
- **SAMTIDIGT** dag 2 5:05: "Såg att du printar grejer. Kan du göra e" och "Rolf har nyckeln… Jag undrar vad som fin"
- **PAUS** dag 2 5:17: 0.0 s paus före "Ölhållaren är klar. Den lägger jag i Rolfs postlåd"
- **PAUS** dag 2 6:41: 0.0 s paus före "Den snurrar! Långsamt. Men den snurrar."
- **PAUS** dag 2 8:22: 0.0 s paus före "Nu vet Ali att jag bor HÄR. Taket läcker. I morgon"
- **PAUS** dag 2 8:22: 0.0 s paus före "Sov när du vill."
- **PAUS** dag 3 0:17: 0.2 s paus före "Ali vill ha idag: Blomkruka · +50 %"
- **SAMTIDIGT** dag 3 0:57: "Radio Tippen, Kjelle här. Skjulet vid ti" och "ÖJ! Kajsa knuffa ner min flasköppnare i "
- **SAMTIDIGT** dag 3 0:58: "ÖJ! Kajsa knuffa ner min flasköppnare i " och "Fastpressad. Den sitter som i betong."
- **PAUS** dag 3 2:43: 0.1 s paus före "Nu printar den klart även när jag vilar benen."
- **PAUS** dag 3 2:48: 0.2 s paus före "Jag springer för mycket. Med en ryggkorg bär jag s"
- **PAUS** dag 3 3:55: 0.0 s paus före "Ett arbetsbord bredvid skrivaren. Skrivare M ska s"
- **PAUS** dag 3 9:13: 0.0 s paus före "(nytt mål i rutan)"
- **PAUS** dag 3 10:00: 1.0 s paus före "Tjo. Ska grilla på lördag. Min grillspade smälte. "
- **PAUS** dag 3 10:31: 0.0 s paus före "Grillspaden är klar. Den lägger jag i Rolfs postlå"
- **PAUS** dag 3 11:25: 1.6 s paus före "Det får inte plats. Jag behöver något att tippa i."
- **PAUS** dag 3 12:30: 0.0 s paus före "Nu kan jag tömma hela kärran på en gång."
- **PAUS** dag 3 14:06: 0.0 s paus före "Hoppa in. Ja ska visa dej en grej."
- **PAUS** dag 3 17:38: 0.0 s paus före "Nu vet Rolf att jag bor HÄR. Benen orkar inte tram"
- **PAUS** dag 3 17:39: 0.0 s paus före "(nytt mål i rutan)"
- **UPPREPNING** dag 1 8:24: ali: "Den köper jag. Ge hit." (förra gången dag 1)
- **UPPREPNING** dag 1 9:33: ali: "Den köper jag. Ge hit." (förra gången dag 1)
- **UPPREPNING** dag 3 15:35: ali: "Den köper jag. Ge hit." (förra gången dag 1)
- **TRÄNGSEL 2** dag 1 2:33: "Sälj grejerna i affären mitt emot, han köper allt." 2.0 s efter förra meddelandet, 32.7 s efter en klar uppgift
- **TRÄNGSEL 2** dag 1 2:58: "Hur kunde du bara gå? Är du ok? Svara när jag ring" 2.0 s efter förra meddelandet, 17.2 s efter en klar uppgift
- **DOLD SKYLT** dag 2 3:49: ALIS MARKNAD från 7 m: skymd av BoxGeometry 1.2 m bort (9.1, 1.8, 23.0)
- **TRÄNGSEL 2** dag 2 4:17: "Ali här. Skrivartrim. Jag skruvade på min egen skr" 2.0 s efter förra meddelandet, 86.7 s efter en klar uppgift
- **TRÄNGSEL 2** dag 2 5:55: "Ali här. Vindsnurra till cykeln. Vinden trampar åt" 4.8 s efter förra meddelandet, 16.8 s efter en klar uppgift
- **KLICK SOM INTE GÅR** dag 3 0:47: "Klicka för att montera" syns men ett klick gör inte det just nu
- **TRÄNGSEL 2** dag 3 1:55: "Ali här. Bilbatteriet ur min gamla Volvo står i la" 2.0 s efter förra meddelandet, 7.7 s efter en klar uppgift
- **TRÄNGSEL 2** dag 3 2:56: "Ali här. En ryggkorg. AI:n ritade den efter en bil" 2.0 s efter förra meddelandet, 14.6 s efter en klar uppgift
- **TRÄNGSEL 2** dag 3 10:14: "Rolf hä!! Funkar dä?? ja skrivr mä EN fingr. dä ta" 2.1 s efter förra meddelandet, 13.9 s efter en klar uppgift
- **TRÄNGSEL 2** dag 3 11:41: "Ali här. 🗑️ Sophållaren. Jag frågade AI:n hur man" 4.2 s efter förra meddelandet, 17.8 s efter en klar uppgift
- **TEMPO** dag 1 12:00: dag 1 tog 12.0 min (mål 10–12)
- **TEMPO** dag 2 8:32: dag 2 tog 8.5 min (mål 10–15)
- **TEMPO** dag 3 17:47: dag 3 tog 17.8 min (mål 10–15)

Sidfel: inga

## Dag 1

| Tid | Källa | Vem | Text |
|---|---|---|---|
| 0:00 | MÅL |  | Lasta av skrivaren |
| 0:00 | MÅL |  | Lasta av skrivaren |
| 0:01 | sak | bud | (tips) |
| 0:02 | väntar | du | Se så mycket skräp här är. Det är ju en guldgruva! |
| 0:02 | klar | bud | (tips) |
| 0:02 | sak | du | Se så mycket skräp här är. Det är ju en guldgruva! |
| 0:02 | röst | du | Se så mycket skräp här är. Det är ju en guldgruva! · STORY |
| 0:02 | pil |  | Lasta av skrivaren |
| 0:03 | tanke | du | ⏎ Enter – hoppa över |
| 0:03 | struken | du | Hammaren ligger i raden. Hjulet eller 2. |
| 0:03 | väntar | du | ⏎ Enter – hoppa över |
| 0:09 | sak-del | du | Först borde jag spika upp en skylt, så att alla ser att jag bor HÄR. |
| 0:09 | röst | du | Först borde jag spika upp en skylt, så att alla ser att jag bor HÄR. · STORY |
| 0:14 | klar | du | Se så mycket skräp här är. Det är ju en guldgruva! |
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
| 0:43 | väntar | du | Den har ingen ström. Cykeln vid vägen kanske kan ge ström. |
| 0:43 | MÅL |  | Skrivaren behöver ström |
| 0:43 | sak | du | Storebrors rulle. Den räcker inte länge. |
| 0:43 | notis | tanke | 💭 Storebrors rulle. Den räcker inte länge. |
| 0:43 | röst | du | Storebrors rulle. Den räcker inte länge. · REAKTION |
| 0:45 | målruta |  | Skrivaren behöver ström |
| 0:47 | kvittens-bock |  | ✓ Ställ upp skrivaren |
| 0:47 | klar | du | Storebrors rulle. Den räcker inte länge. |
| 0:49 | sak | du | Den har ingen ström. Cykeln vid vägen kanske kan ge ström. |
| 0:49 | pil |  | Skrivaren behöver ström |
| 0:49 | notis | tanke | 💭 Den har ingen ström. Cykeln vid vägen kanske kan ge ström. |
| 0:49 | röst | du | Den har ingen ström. Cykeln vid vägen kanske kan ge ström. · MÅL |
| 0:49 | nick |  | nick:2 |
| 0:56 | klar | du | Den har ingen ström. Cykeln vid vägen kanske kan ge ström. |
| 1:11 | paket |  | tanke |
| 1:11 | tanke | du | Cykeln… och storebrors generator? |
| 1:11 | väntar | du | Cykeln… och storebrors generator? |
| 1:11 | sak | du | Cykeln… och storebrors generator? |
| 1:11 | kvitto-visas | du | Cykeln… och storebrors generator? |
| 1:11 | notis | tanke | 💭 Cykeln… och storebrors generator? |
| 1:11 | röst | du | Cykeln… och storebrors generator? · STORY |
| 1:11 | händelse | malKlart | id=strom del=Dag 1 – Kom igång nasta=bygg |
| 1:11 | bekräftelse | du | plats |
| 1:11 | väntar | du | Nu borde jag koppla på generatorn, så att cykeln gör el. |
| 1:11 | MÅL |  | Ställ cykel och generator |
| 1:13 | målruta |  | Ställ cykel och generator |
| 1:14 | klar | du | Cykeln… och storebrors generator? |
| 1:15 | kvittens-bock |  | ✓ Skrivaren behöver ström |
| 1:16 | sak | du | Nu borde jag koppla på generatorn, så att cykeln gör el. |
| 1:16 | pil |  | Ställ cykel och generator |
| 1:16 | notis | tanke | 💭 Nu borde jag koppla på generatorn, så att cykeln gör el. |
| 1:16 | röst | du | Nu borde jag koppla på generatorn, så att cykeln gör el. · MÅL |
| 1:20 | klar | du | Nu borde jag koppla på generatorn, så att cykeln gör el. |
| 1:21 | händelse | placerat | sak=generator |
| 1:21 | duns | du | ställs ner |
| 1:29 | ljud | utrustning | Cykeln i famnen |
| 1:29 | händelse | lyft | sak=cykel |
| 1:29 | paket |  | tanke |
| 1:29 | tanke | du | Cykeln ska stå vid skrivaren. |
| 1:29 | väntar | du | Cykeln ska stå vid skrivaren. |
| 1:29 | sak | du | Cykeln ska stå vid skrivaren. |
| 1:29 | notis | tanke | 💭 Cykeln ska stå vid skrivaren. |
| 1:29 | röst | du | Cykeln ska stå vid skrivaren. · REAKTION |
| 1:34 | klar | du | Cykeln ska stå vid skrivaren. |
| 1:40 | händelse | placerat | sak=cykel |
| 1:40 | duns | du | ställs ner |
| 1:42 | händelse | ombyggd | sak=cykel |
| 1:42 | händelse | malKlart | id=bygg del=Dag 1 – Kom igång nasta=valjModell |
| 1:42 | bekräftelse | du | plats |
| 1:42 | väntar | du | Strömmen finns. Nu ska skrivaren veta vad den ska göra, sen trampar jag. |
| 1:42 | målruta |  | Välj vad skrivaren ska printa |
| 1:42 | MÅL |  | Välj vad skrivaren ska printa |
| 1:42 | sak | du | Strömmen finns. Nu ska skrivaren veta vad den ska göra, sen trampar jag. |
| 1:42 | pil |  | Välj vad skrivaren ska printa |
| 1:42 | notis | tanke | 💭 Strömmen finns. Nu ska skrivaren veta vad den ska göra, sen trampar jag. |
| 1:42 | röst | du | Strömmen finns. Nu ska skrivaren veta vad den ska göra, sen trampar jag. · MÅL |
| 1:46 | kvittens-bock |  | ✓ Montera generatorn |
| 1:46 | klar | du | Strömmen finns. Nu ska skrivaren veta vad den ska göra, sen trampar jag. |
| 1:55 | händelse | printStart | sak=nyckelring |
| 1:55 | tanke | du | Den stannar när jag slutar trampa. Ström som sparas hade varit nåt. |
| 1:55 | väntar | du | Den stannar när jag slutar trampa. Ström som sparas hade varit nåt. |
| 1:55 | händelse | malKlart | id=valjModell del=Dag 1 – Kom igång nasta=trampa |
| 1:55 | bekräftelse | du | plats |
| 1:55 | kvittens | du | Den piper. Den GÖR något. |
| 1:55 | väntar | du | Den piper. Den GÖR något. |
| 1:55 | struken | du | Den stannar när jag slutar trampa. Ström som sparas hade varit nåt. |
| 1:55 | väntar | du | Nu behöver den ström. Trampa. |
| 1:56 | MÅL |  | Trampa cykeln |
| 1:56 | hjälp | kontroll | Klick: Sätt dig och trampa (klick igen eller gå för att resa dig) |
| 1:56 | sak | du | Den piper. Den GÖR något. |
| 1:56 | röst | du | Den piper. Den GÖR något. · STORY |
| 1:56 | målruta |  | Trampa cykeln |
| 1:59 | klar | du | Den piper. Den GÖR något. |
| 1:59 | sak | du | Nu behöver den ström. Trampa. |
| 1:59 | pil |  | Trampa cykeln |
| 1:59 | notis | tanke | 💭 Nu behöver den ström. Trampa. |
| 1:59 | röst | du | Nu behöver den ström. Trampa. · MÅL |
| 2:01 | händelse | printKlar | sak=nyckelring n=1 |
| 2:01 | händelse | malKlart | id=trampa del=Dag 1 – Kom igång nasta=rullSlut |
| 2:01 | bekräftelse | du | plats |
| 2:01 | kvittens | du | Klar! Ta ut den innan den ändrar sig. |
| 2:01 | väntar | du | Klar! Ta ut den innan den ändrar sig. |
| 2:01 | väntar | du | En nyckelring till, så länge storebrors rulle räcker. |
| 2:01 | MÅL |  | En nyckelring till |
| 2:02 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 2:02 | paket |  | sms |
| 2:02 | väntar | bror | VA FAN?! Fick du igång den?? Jag försökte i typ ett år. Den bara pep. 😳 |
| 2:02 | skratt | bror | VA FAN?! Fick du igång den?? Jag försökt |
| 2:02 | paket |  | sms |
| 2:02 | väntar | bror | Sälj grejerna i affären mitt emot, han köper allt. |
| 2:02 | foto | du | Första nyckelringen |
| 2:02 | paket |  | tanke |
| 2:02 | tanke | du | Jag gjorde den här. Av skräp. Det här kan funka. |
| 2:02 | väntar | du | Jag gjorde den här. Av skräp. Det här kan funka. |
| 2:02 | väntar | ali | Hallå där, nya grannen! Vad är det där du gör? |
| 2:03 | målruta |  | En nyckelring till |
| 2:04 | klar | du | Nu behöver den ström. Trampa. |
| 2:04 | sak | du | Klar! Ta ut den innan den ändrar sig. |
| 2:04 | röst | du | Klar! Ta ut den innan den ändrar sig. · STORY |
| 2:07 | klar | du | Klar! Ta ut den innan den ändrar sig. |
| 2:07 | sak | du | Jag gjorde den här. Av skräp. Det här kan funka. |
| 2:07 | notis | tanke | 💭 Jag gjorde den här. Av skräp. Det här kan funka. |
| 2:07 | röst | du | Jag gjorde den här. Av skräp. Det här kan funka. · STORY |
| 2:13 | klar | du | Jag gjorde den här. Av skräp. Det här kan funka. |
| 2:13 | sak | ali | Hallå där, nya grannen! Vad är det där du gör? |
| 2:13 | bubbla |  | Hallå där, nya grannen! Vad är det där du gör? |
| 2:13 | händelse | dialog | id=aliRop |
| 2:13 | röst | ali | Hallå där, nya grannen! Vad är det där du gör? · REAKTION |
| 2:17 | klar | ali | Hallå där, nya grannen! Vad är det där du gör? |
| 2:18 | sak | bror | VA FAN?! Fick du igång den?? Jag försökte i typ ett år. Den bara pep. 😳 |
| 2:18 | skratt | bror | VA FAN?! Fick du igång den?? Jag försökt |
| 2:18 | sms | bror | VA FAN?! Fick du igång den?? Jag försökte i typ ett år. Den bara pep. 😳 |
| 2:18 | skratt | bror | VA FAN?! Fick du igång den?? Jag försökt |
| 2:18 | händelse | dialog | id=brorSms1 |
| 2:18 | sms-bubbla | bror | VA FAN?! Fick du igång den?? Jag försökte i typ ett år. Den bara pep. 😳 |
| 2:18 | skratt | bror | VA FAN?! Fick du igång den?? Jag försökt |
| 2:18 | röst | bror | VA FAN?! Fick du igång den?? Jag försökte i typ ett år. Den bara pep. 😳 · REAKTION |
| 2:24 | tanke | du | Högar bakom staketet. Där inne ligger mer än på hela gården. |
| 2:24 | väntar | du | Högar bakom staketet. Där inne ligger mer än på hela gården. |
| 2:26 | klar | bror | VA FAN?! Fick du igång den?? Jag försökte i typ ett år. Den bara pep. 😳 |
| 2:26 | skratt | bror | VA FAN?! Fick du igång den?? Jag försökt |
| 2:26 | sak | du | En nyckelring till, så länge storebrors rulle räcker. |
| 2:26 | pil |  | En nyckelring till |
| 2:26 | notis | tanke | 💭 En nyckelring till, så länge storebrors rulle räcker. |
| 2:26 | röst | du | En nyckelring till, så länge storebrors rulle räcker. · MÅL |
| 2:27 | händelse | printStart | sak=nyckelring |
| 2:30 | klar | du | En nyckelring till, så länge storebrors rulle räcker. |
| 2:33 | brott | TRÄNGSEL 2 | "Sälj grejerna i affären mitt emot, han köper allt." 2.0 s efter förra meddelandet, 32.7 s efter en klar uppgift |
| 2:33 | sak | bror | Sälj grejerna i affären mitt emot, han köper allt. |
| 2:33 | sms | bror | Sälj grejerna i affären mitt emot, han köper allt. |
| 2:33 | händelse | dialog | id=brorSms2 |
| 2:33 | sms-bubbla | bror | Sälj grejerna i affären mitt emot, han köper allt. |
| 2:33 | röst | bror | Sälj grejerna i affären mitt emot, han köper allt. · STORY |
| 2:38 | klar | bror | Sälj grejerna i affären mitt emot, han köper allt. |
| 2:41 | händelse | printKlar | sak=nyckelring n=2 |
| 2:41 | paket |  | tanke |
| 2:41 | tanke | du | Slut på storebrors rulle. Och här ligger ju plast överallt. Om jag bara kunde göra tråd av skräpet… |
| 2:41 | väntar | du | Slut på storebrors rulle. Och här ligger ju plast överallt. Om jag bara kunde göra tråd av skräpet… |
| 2:41 | händelse | malKlart | id=rullSlut del=Dag 1 – Kom igång nasta=saljTva |
| 2:41 | bekräftelse | du | plats |
| 2:41 | väntar | du | Affären mitt emot. Han verkar nyfiken. Jag visar honom. |
| 2:41 | MÅL |  | Visa ringarna i affären |
| 2:41 | sak | du | Slut på storebrors rulle. Och här ligger ju plast överallt. Om jag bara kunde göra tråd av skräpet… |
| 2:41 | kvitto-visas | du | Slut på storebrors rulle. Och här ligger ju plast överallt. Om jag bara kunde göra tråd av skräpet… |
| 2:41 | notis | tanke | 💭 Slut på storebrors rulle. Och här ligger ju plast överallt. Om jag bara kunde göra tråd av skräpet… |
| 2:41 | röst | du | Slut på storebrors rulle. Och här ligger ju plast överallt. Om jag bara kunde göra tråd av skräpet… · STORY |
| 2:43 | hjälp | kontroll | Tab: Dina sms och dagboken |
| 2:44 | målruta |  | Visa ringarna i affären |
| 2:45 | kvittens-bock |  | ✓ En nyckelring till |
| 2:51 | klar | du | Slut på storebrors rulle. Och här ligger ju plast överallt. Om jag bara kunde göra tråd av skräpet… |
| 2:51 | sak | du | Affären mitt emot. Han verkar nyfiken. Jag visar honom. |
| 2:51 | pil |  | Visa ringarna i affären |
| 2:51 | notis | tanke | 💭 Affären mitt emot. Han verkar nyfiken. Jag visar honom. |
| 2:51 | röst | du | Affären mitt emot. Han verkar nyfiken. Jag visar honom. · MÅL |
| 2:56 | klar | du | Affären mitt emot. Han verkar nyfiken. Jag visar honom. |
| 2:58 | struken | du | Högar bakom staketet. Där inne ligger mer än på hela gården. |
| 2:58 | brott | TRÄNGSEL 2 | "Hur kunde du bara gå? Är du ok? Svara när jag ring" 2.0 s efter förra meddelandet, 17.2 s efter en klar uppgift |
| 2:58 | sak | mamma | Hur kunde du bara gå? Är du ok? Svara när jag ringer! |
| 2:58 | sms | mamma | Hur kunde du bara gå? Är du ok? Svara när jag ringer! |
| 2:58 | sms-bubbla | mamma | Hur kunde du bara gå? Är du ok? Svara när jag ringer! |
| 2:58 | röst | mamma | Hur kunde du bara gå? Är du ok? Svara när jag ringer! · STORY |
| 3:05 | klar | mamma | Hur kunde du bara gå? Är du ok? Svara när jag ringer! |
| 3:06 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 3:06 | struken | ali | Hallå där, nya grannen! Vad är det där du gör? |
| 3:18 | struken | ali | Pappas gamla köttkvarn. Den har malt allt utom kött. Trettio kronor, så är den din. |
| 3:18 | händelse | dialog | id=aliForsta |
| 3:18 | röst | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. · STORY |
| 3:18 | butiksbubbla | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 3:20 | händelse | salt | sak=nyckelring n=2 |
| 3:20 | aliSalt | ali | 30 |
| 3:20 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 3:20 | händelse | dialog | id=aliKvarnErbjud |
| 3:20 | butiksbubbla | ali | Pappas gamla köttkvarn. Den har malt allt utom kött. Trettio kronor, så är den din. |
| 3:21 | väntar | ali | Pappas gamla köttkvarn. Den har malt allt utom kött. Trettio kronor, så är den din. |
| 3:21 | händelse | malKlart | id=saljTva del=Dag 1 – Kom igång nasta=aliKvarn |
| 3:21 | bekräftelse | du | plats |
| 3:21 | väntar | du | Ali har en gammal kvarn. Den gör tråd av skräp. |
| 3:21 | MÅL |  | Köp kvarnen |
| 3:25 | kvittens-bock |  | ✓ Visa ringarna i affären |
| 3:26 | struken | du | Ali har en gammal kvarn. Den gör tråd av skräp. |
| 3:26 | sak | ali | Pappas gamla köttkvarn. Den har malt allt utom kött. Trettio kronor, så är den din. |
| 3:26 | röst | ali | Pappas gamla köttkvarn. Den har malt allt utom kött. Trettio kronor, så är den din. · STORY |
| 3:28 | målruta |  | Köp kvarnen |
| 3:30 | struken | du | Ali har en gammal kvarn. Den gör tråd av skräp. |
| 3:34 | klar | ali | Pappas gamla köttkvarn. Den har malt allt utom kött. Trettio kronor, så är den din. |
| 3:34 | sak | du | Ali har en gammal kvarn. Den gör tråd av skräp. |
| 3:34 | pil |  | Köp kvarnen |
| 3:34 | notis | tanke | 💭 Ali har en gammal kvarn. Den gör tråd av skräp. |
| 3:34 | röst | du | Ali har en gammal kvarn. Den gör tråd av skräp. · MÅL |
| 3:37 | klar | du | Ali har en gammal kvarn. Den gör tråd av skräp. |
| 3:39 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 3:39 | struken | ali | Pappas gamla köttkvarn. Den har malt allt utom kött. Trettio kronor, så är den din. |
| 3:41 | händelse | kopt | sak=gammalkvarn |
| 3:41 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 3:41 | händelse | dialog | id=aliKvarnKopt |
| 3:41 | butiksbubbla | ali | Den är din. Pappa hade blivit glad. Han trodde aldrig att nån skulle vilja ha den. |
| 3:43 | väntar | ali | Den är din. Pappa hade blivit glad. Han trodde aldrig att nån skulle vilja ha den. |
| 3:43 | händelse | malKlart | id=aliKvarn del=Dag 1 – Kom igång nasta=kvarn |
| 3:43 | bekräftelse | du | plats |
| 3:43 | väntar | du | Kvarnen ska stå vid skrivaren, närmast skräpberget. |
| 3:43 | MÅL |  | Ställ kvarnen |
| 3:43 | sak | ali | Den är din. Pappa hade blivit glad. Han trodde aldrig att nån skulle vilja ha den. |
| 3:43 | röst | ali | Den är din. Pappa hade blivit glad. Han trodde aldrig att nån skulle vilja ha den. · STORY |
| 3:46 | målruta |  | Ställ kvarnen |
| 3:46 | pil |  | Ställ kvarnen |
| 3:46 | nick |  | nick:9 |
| 3:47 | kvittens-bock |  | ✓ Köp kvarnen |
| 3:48 | väntar | kjelle | God morgon, det är Kjelle på Radio Tippen! Det har flyttat in någon i det gamla skjulet. Med en cykel och en skrivare. Spännande, Gunnar. |
| 3:48 | radio | kjelle | God morgon, det är Kjelle på Radio Tippen! Det har flyttat in någon i det gamla skjulet. Med en cykel och en skrivare. Spännande, Gunnar. |
| 3:48 | skratt | du | Radio-Kjelle |
| 3:50 | klar | ali | Den är din. Pappa hade blivit glad. Han trodde aldrig att nån skulle vilja ha den. |
| 3:50 | sak | du | Kvarnen ska stå vid skrivaren, närmast skräpberget. |
| 3:50 | notis | tanke | 💭 Kvarnen ska stå vid skrivaren, närmast skräpberget. |
| 3:50 | röst | du | Kvarnen ska stå vid skrivaren, närmast skräpberget. · MÅL |
| 3:55 | klar | du | Kvarnen ska stå vid skrivaren, närmast skräpberget. |
| 3:57 | sak | kjelle | God morgon, det är Kjelle på Radio Tippen! Det har flyttat in någon i det gamla skjulet. Med en cykel och en skrivare. Spännande, Gunnar. |
| 3:57 | notis |  | 📻 Radio Tippen: God morgon, det är Kjelle på Radio Tippen! Det har flyttat in någon i det gamla skjulet. Med en cykel och en skrivare. Spännande, Gunnar. |
| 3:57 | röst | kjelle | God morgon, det är Kjelle på Radio Tippen! Det har flyttat in någon i det gamla skjulet. Med en cykel och en skrivare. Spännande, Gunnar. · REAKTION |
| 4:08 | tanke | du | Vem är Gunnar? |
| 4:08 | väntar | du | Vem är Gunnar? |
| 4:08 | klar | kjelle | God morgon, det är Kjelle på Radio Tippen! Det har flyttat in någon i det gamla skjulet. Med en cykel och en skrivare. Spännande, Gunnar. |
| 4:12 | händelse | placerat | sak=kvarnen |
| 4:12 | duns | du | ställs ner |
| 4:12 | händelse | malKlart | id=kvarn del=Dag 1 – Kom igång nasta=flaska |
| 4:12 | bekräftelse | du | plats |
| 4:12 | väntar | du | Skräp i kvarnen, sen vevar jag. Då blir det tråd. |
| 4:12 | målruta |  | Gör egen tråd |
| 4:12 | MÅL |  | Gör egen tråd |
| 4:12 | hjälp | kontroll | Klick: Veva kvarnen tills tratten är tom |
| 4:12 | sak | du | Skräp i kvarnen, sen vevar jag. Då blir det tråd. |
| 4:12 | pil |  | Gör egen tråd |
| 4:12 | notis | tanke | 💭 Skräp i kvarnen, sen vevar jag. Då blir det tråd. |
| 4:12 | röst | du | Skräp i kvarnen, sen vevar jag. Då blir det tråd. · MÅL |
| 4:12 | nick |  | nick:10 |
| 4:16 | kvittens-bock |  | ✓ Ställ kvarnen |
| 4:17 | klar | du | Skräp i kvarnen, sen vevar jag. Då blir det tråd. |
| 4:25 | sak | du | Vem är Gunnar? |
| 4:25 | notis | tanke | 💭 Vem är Gunnar? |
| 4:25 | röst | du | Vem är Gunnar? · REAKTION |
| 4:28 | klar | du | Vem är Gunnar? |
| 4:35 | struken | info:bra | 3 st i tratten – veva nu! |
| 4:36 | händelse | malKlart | id=flaska del=Dag 1 – Kom igång nasta=egenPrint |
| 4:36 | bekräftelse | du | plats |
| 4:36 | kvittens | du | Det blir tråd! Riktig plasttråd. |
| 4:36 | väntar | du | Det blir tråd! Riktig plasttråd. |
| 4:36 | dagbok-tyst | du | Kvarnen funkar. Soptippen är en gruva. |
| 4:36 | väntar | du | Min egen tråd. Nu printar jag en nyckelring av den. |
| 4:36 | MÅL |  | Printa med egen tråd |
| 4:36 | sak | du | Det blir tråd! Riktig plasttråd. |
| 4:36 | röst | du | Det blir tråd! Riktig plasttråd. · STORY |
| 4:36 | målruta |  | Printa med egen tråd |
| 4:40 | klar | du | Det blir tråd! Riktig plasttråd. |
| 4:40 | sak | du | Min egen tråd. Nu printar jag en nyckelring av den. |
| 4:40 | pil |  | Printa med egen tråd |
| 4:40 | notis | tanke | 💭 Min egen tråd. Nu printar jag en nyckelring av den. |
| 4:40 | röst | du | Min egen tråd. Nu printar jag en nyckelring av den. · MÅL |
| 4:41 | nick |  | nick:11 |
| 4:45 | klar | du | Min egen tråd. Nu printar jag en nyckelring av den. |
| 4:56 | händelse | printStart | sak=nyckelring |
| 4:56 | toast | bra | 🔗 Slangen kopplad |
| 5:01 | händelse | printKlar | sak=nyckelring n=3 |
| 5:01 | paket |  | tanke |
| 5:01 | tanke | du | En nyckelring av en gammal schampoflaska. Den luktar fortfarande päron. |
| 5:01 | väntar | du | En nyckelring av en gammal schampoflaska. Den luktar fortfarande päron. |
| 5:01 | skratt | du | egen tråd |
| 5:01 | händelse | malKlart | id=egenPrint del=Dag 1 – Kom igång nasta=salj |
| 5:01 | bekräftelse | du | plats |
| 5:01 | struken | du | En nyckelring av en gammal schampoflaska. Den luktar fortfarande päron. |
| 5:01 | väntar | du | Ali köper nog den här också. |
| 5:01 | målruta |  | Sälj hos Ali |
| 5:01 | MÅL |  | Sälj hos Ali |
| 5:01 | sak | du | Ali köper nog den här också. |
| 5:01 | pil |  | Sälj hos Ali |
| 5:01 | notis | tanke | 💭 Ali köper nog den här också. |
| 5:01 | röst | du | Ali köper nog den här också. · MÅL |
| 5:01 | nick |  | nick:12 |
| 5:02 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 5:04 | klar | du | Ali köper nog den här också. |
| 5:05 | kvittens-bock |  | ✓ Printa med egen tråd |
| 5:14 | händelse | printStart | sak=nyckelring |
| 5:15 | händelse | printKlar | sak=nyckelring n=4 |
| 5:15 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 5:17 | händelse | printStart | sak=nyckelring |
| 5:18 | händelse | printKlar | sak=nyckelring n=5 |
| 5:18 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 5:29 | väntar | ali | Den köper jag. Ge hit. |
| 5:29 | sak | ali | Den köper jag. Ge hit. |
| 5:29 | röst | ali | Den köper jag. Ge hit. · REAKTION |
| 5:30 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 5:31 | händelse | salt | sak=nyckelring n=3 |
| 5:31 | aliSalt | ali | 45 |
| 5:31 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 5:31 | händelse | dialog | id=aliNyckelIgen |
| 5:31 | butiksbubbla | ali | Nyckelringar igen? Folk tappar sina nycklar hela tiden. |
| 5:32 | väntar | ali | Nyckelringar igen? Folk tappar sina nycklar hela tiden. |
| 5:32 | klipps | ali | Den köper jag. Ge hit. |
| 5:32 | händelse | malKlart | id=salj del=Dag 1 – Kom igång nasta=powerbank |
| 5:32 | bekräftelse | du | plats |
| 5:32 | paket | ali | ali → ge |
| 5:32 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 5:32 | händelse | dialog | id=aliPowerbank |
| 5:32 | röst | ali | Jag såg dig cykla. Det ser jobbigt ut. Ta den här. Bra kunder får bonus. · STORY |
| 5:32 | butiksbubbla | ali | Jag såg dig cykla. Det ser jobbigt ut. Ta den här. Bra kunder får bonus. |
| 5:32 | väntar | du | Koppla in powerbanken. |
| 5:32 | MÅL |  | Koppla in powerbanken |
| 5:35 | målruta |  | Koppla in powerbanken |
| 5:36 | kvittens-bock |  | ✓ Sälj hos Ali |
| 5:39 | klar | ali | Den köper jag. Ge hit. |
| 5:39 | sak | ali | Nyckelringar igen? Folk tappar sina nycklar hela tiden. |
| 5:39 | röst | ali | Nyckelringar igen? Folk tappar sina nycklar hela tiden. · STORY |
| 5:46 | klar | ali | Nyckelringar igen? Folk tappar sina nycklar hela tiden. |
| 5:46 | sak | du | Koppla in powerbanken. |
| 5:46 | pil |  | Koppla in powerbanken |
| 5:46 | röst | du | Koppla in powerbanken. · MÅL |
| 5:46 | nick |  | nick:13 |
| 5:49 | klar | du | Koppla in powerbanken. |
| 6:06 | skratt | du | powerbanken monterad |
| 6:06 | paket |  | tanke |
| 6:06 | tanke | du | Nu sparas lite ström. En nyckelring, typ. Framtiden är här, och den sitter fast med eltejp. |
| 6:06 | väntar | du | Nu sparas lite ström. En nyckelring, typ. Framtiden är här, och den sitter fast med eltejp. |
| 6:06 | monterat | du | byggsats:powerbank |
| 6:06 | händelse | monterat | sak=powerbank |
| 6:06 | sak | du | Nu sparas lite ström. En nyckelring, typ. Framtiden är här, och den sitter fast med eltejp. |
| 6:06 | kvitto-visas | du | Nu sparas lite ström. En nyckelring, typ. Framtiden är här, och den sitter fast med eltejp. |
| 6:06 | notis | tanke | 💭 Nu sparas lite ström. En nyckelring, typ. Framtiden är här, och den sitter fast med eltejp. |
| 6:06 | röst | du | Nu sparas lite ström. En nyckelring, typ. Framtiden är här, och den sitter fast med eltejp. · REAKTION |
| 6:06 | händelse | malKlart | id=powerbank del=Dag 1 – Kom igång nasta=kopGrip |
| 6:06 | bekräftelse | du | plats |
| 6:06 | paket |  | lapp → ge |
| 6:06 | lapp-kö | 🧺 Ali | Ali här. Nyckelringen sålde direkt. Jag ville bli ingenjör en gång. Nu har jag låtit en AI rita en skräpgrip. Kom och titta. |
| 6:06 | väntar | ali | Ali här. Nyckelringen sålde direkt. Jag ville bli ingenjör en gång. Nu har jag låtit en AI rita en skräpgrip. Kom och titta. |
| 6:06 | väntar |  | (läget ändras) |
| 6:06 | MÅL |  | Köp skräpgripen |
| 6:10 | kvittens-bock |  | ✓ Gå till Ali |
| 6:12 | klar | du | Nu sparas lite ström. En nyckelring, typ. Framtiden är här, och den sitter fast med eltejp. |
| 6:12 | sak |  | (läget ändras) |
| 6:12 | klar |  | (läget ändras) |
| 6:15 | sak | ali | Ali här. Nyckelringen sålde direkt. Jag ville bli ingenjör en gång. Nu har jag låtit en AI rita en skräpgrip. Kom och titta. |
| 6:15 | sms | ali | Ali här. Nyckelringen sålde direkt. Jag ville bli ingenjör en gång. Nu har jag låtit en AI rita en skräpgrip. Kom och titta. |
| 6:15 | händelse | dialog | id=aliGripSms |
| 6:15 | sms-bubbla | ali | Ali här. Nyckelringen sålde direkt. Jag ville bli ingenjör en gång. Nu har jag låtit en AI rita en skräpgrip. Kom och titta. |
| 6:15 | röst | ali | Ali här. Nyckelringen sålde direkt. Jag ville bli ingenjör en gång. Nu har jag låtit en AI rita en skräpgrip. Kom och titta. · STORY |
| 6:15 | orsak-väntan |  | dialog:aliGripSms |
| 6:15 | väntar | du | Med en skräpgrip slipper jag böja mig. Ali har en ritning. |
| 6:15 | målruta |  | Köp skräpgripen |
| 6:21 | paket |  | tanke |
| 6:21 | tanke | du | Femtio kronor. Nu har jag råd med gripen. |
| 6:21 | väntar | du | Femtio kronor. Nu har jag råd med gripen. |
| 6:27 | struken | du | Med en skräpgrip slipper jag böja mig. Ali har en ritning. |
| 6:32 | klar | ali | Ali här. Nyckelringen sålde direkt. Jag ville bli ingenjör en gång. Nu har jag låtit en AI rita en skräpgrip. Kom och titta. |
| 6:32 | sak | du | Med en skräpgrip slipper jag böja mig. Ali har en ritning. |
| 6:32 | pil |  | Köp skräpgripen |
| 6:32 | notis | tanke | 💭 Med en skräpgrip slipper jag böja mig. Ali har en ritning. |
| 6:32 | röst | du | Med en skräpgrip slipper jag böja mig. Ali har en ritning. · MÅL |
| 6:33 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 6:35 | struken | info:guld | 3D-modell köpt – printa skräpgrip |
| 6:35 | händelse | kopt | sak=grip |
| 6:35 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 6:35 | händelse | dialog | id=aliForstaRitning |
| 6:35 | butiksbubbla | ali | Bra val. Ritningen räcker till en skräpgrip. |
| 6:36 | väntar | ali | Bra val. Ritningen räcker till en skräpgrip. |
| 6:36 | händelse | malKlart | id=kopGrip del=Dag 1 – Kom igång nasta=printGrip |
| 6:36 | bekräftelse | du | plats |
| 6:36 | väntar | du | Min första 3D-modell! Jag printar inte bara saker – jag printar maskiner. |
| 6:36 | struken | du | Femtio kronor. Nu har jag råd med gripen. |
| 6:36 | väntar | du | Ritningen är min. Nu printar jag skräpgripen. |
| 6:36 | MÅL |  | Printa skräpgripen |
| 6:38 | klar | du | Med en skräpgrip slipper jag böja mig. Ali har en ritning. |
| 6:38 | sak | du | Min första 3D-modell! Jag printar inte bara saker – jag printar maskiner. |
| 6:38 | kvitto-visas | du | Min första 3D-modell! Jag printar inte bara saker – jag printar maskiner. |
| 6:38 | lapp | 📔 Dagbok | Min första 3D-modell! Jag printar inte bara saker – jag printar maskiner. |
| 6:38 | dagbokrad | du | Min första 3D-modell! Jag printar inte bara saker – jag printar maskiner. |
| 6:38 | notis | dagbok | Min första 3D-modell! Jag printar inte bara saker – jag printar maskiner. |
| 6:38 | klar | du | Min första 3D-modell! Jag printar inte bara saker – jag printar maskiner. |
| 6:39 | sak | ali | Bra val. Ritningen räcker till en skräpgrip. |
| 6:39 | röst | ali | Bra val. Ritningen räcker till en skräpgrip. · STORY |
| 6:39 | målruta |  | Printa skräpgripen |
| 6:39 | pil |  | Printa skräpgripen |
| 6:39 | nick |  | nick:15 |
| 6:43 | klar | ali | Bra val. Ritningen räcker till en skräpgrip. |
| 6:45 | sak | du | Ritningen är min. Nu printar jag skräpgripen. |
| 6:45 | notis | tanke | 💭 Ritningen är min. Nu printar jag skräpgripen. |
| 6:45 | röst | du | Ritningen är min. Nu printar jag skräpgripen. · MÅL |
| 6:49 | klar | du | Ritningen är min. Nu printar jag skräpgripen. |
| 7:04 | händelse | printStart | sak=byggsats:grip |
| 7:05 | toast | fel | Ingen ström – trampa cykeln |
| 7:05 | väntar | notis:Storebrors skrivare: Ingen ström – tramp | Storebrors skrivare: Ingen ström – trampa cykeln |
| 7:05 | sak | notis:Storebrors skrivare: Ingen ström – tramp | Storebrors skrivare: Ingen ström – trampa cykeln |
| 7:05 | notis | fel | Storebrors skrivare: Ingen ström – trampa cykeln |
| 7:08 | klar | notis:Storebrors skrivare: Ingen ström – tramp | Storebrors skrivare: Ingen ström – trampa cykeln |
| 7:08 | händelse | printKlar | sak=byggsats:grip n=1 |
| 7:28 | tanke | du | Skräpgrip ska jag ha på mig. |
| 7:28 | väntar | du | Skräpgrip ska jag ha på mig. |
| 7:28 | händelse | tagitUrPrint | sak=byggsats:grip n=1 |
| 7:28 | paket |  | sms |
| 7:28 | väntar | ali | Ali här. Jag såg Skräpgrip på avstånd. Ett streck blev lite snett. Mitt fel. Vackert ändå. |
| 7:28 | sak | du | Skräpgrip ska jag ha på mig. |
| 7:28 | notis | tanke | 💭 Skräpgrip ska jag ha på mig. |
| 7:28 | röst | du | Skräpgrip ska jag ha på mig. · REAKTION |
| 7:29 | hjälp | kontroll | Klick: Klicka för att ta på dig den |
| 7:31 | klar | du | Skräpgrip ska jag ha på mig. |
| 7:33 | tanke | du | Skräpgripen sitter! Jag bär 6, siktar lättare och plockar när jag går nära. |
| 7:33 | väntar | du | Skräpgripen sitter! Jag bär 6, siktar lättare och plockar när jag går nära. |
| 7:33 | tog på | du | byggsats:grip |
| 7:33 | händelse | monterat | sak=grip |
| 7:33 | sak | du | Skräpgripen sitter! Jag bär 6, siktar lättare och plockar när jag går nära. |
| 7:33 | notis | tanke | 💭 Skräpgripen sitter! Jag bär 6, siktar lättare och plockar när jag går nära. |
| 7:33 | röst | du | Skräpgripen sitter! Jag bär 6, siktar lättare och plockar när jag går nära. · REAKTION |
| 7:33 | händelse | malKlart | id=printGrip del=Dag 1 – Kom igång nasta=krukaD1 |
| 7:33 | bekräftelse | du | plats |
| 7:33 | väntar | du | Spara till krukreceptet. |
| 7:33 | MÅL |  | Spara till krukreceptet · 0 / 40 kr |
| 7:35 | händelse | printStart | sak=nyckelring |
| 7:36 | målruta |  | Spara till krukreceptet · 0 / 40 kr |
| 7:36 | händelse | printKlar | sak=nyckelring n=6 |
| 7:37 | kvittens-bock |  | ✓ Printa skräpgripen |
| 7:40 | klar | du | Skräpgripen sitter! Jag bär 6, siktar lättare och plockar när jag går nära. |
| 7:40 | sak | du | Spara till krukreceptet. |
| 7:40 | pil |  | Spara till krukreceptet · 0 / 40 kr |
| 7:40 | röst | du | Spara till krukreceptet. · MÅL |
| 7:43 | klar | du | Spara till krukreceptet. |
| 7:45 | sak | ali | Ali här. Jag såg Skräpgrip på avstånd. Ett streck blev lite snett. Mitt fel. Vackert ändå. |
| 7:45 | sms | ali | Ali här. Jag såg Skräpgrip på avstånd. Ett streck blev lite snett. Mitt fel. Vackert ändå. |
| 7:45 | sms-bubbla | ali | Ali här. Jag såg Skräpgrip på avstånd. Ett streck blev lite snett. Mitt fel. Vackert ändå. |
| 7:45 | röst | ali | Ali här. Jag såg Skräpgrip på avstånd. Ett streck blev lite snett. Mitt fel. Vackert ändå. · REAKTION |
| 7:56 | klar | ali | Ali här. Jag såg Skräpgrip på avstånd. Ett streck blev lite snett. Mitt fel. Vackert ändå. |
| 7:59 | upplåst | bara | grip |
| 7:59 | brott | UPPLÅST | grip (bara 3 av 3) |
| 7:59 | händelse | upplast | id=grip flask=bara |
| 7:59 | paket |  | tanke |
| 7:59 | tanke | du | Ett skräp i taget. Jag springer ihjäl mig. |
| 7:59 | väntar | du | Ett skräp i taget. Jag springer ihjäl mig. |
| 8:00 | sak | du | Ett skräp i taget. Jag springer ihjäl mig. |
| 8:00 | notis | tanke | 💭 Ett skräp i taget. Jag springer ihjäl mig. |
| 8:00 | röst | du | Ett skräp i taget. Jag springer ihjäl mig. · STORY |
| 8:03 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 8:04 | klar | du | Ett skräp i taget. Jag springer ihjäl mig. |
| 8:05 | händelse | printStart | sak=nyckelring |
| 8:06 | händelse | printKlar | sak=nyckelring n=7 |
| 8:07 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 8:09 | händelse | printStart | sak=nyckelring |
| 8:10 | händelse | printKlar | sak=nyckelring n=8 |
| 8:11 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 8:21 | väntar | ali | Den köper jag. Ge hit. |
| 8:21 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 8:23 | händelse | salt | sak=nyckelring n=1 |
| 8:23 | aliSalt | ali | 15 |
| 8:23 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 8:23 | händelse | salt | sak=nyckelring n=1 |
| 8:23 | aliSalt | ali | 15 |
| 8:23 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 8:23 | händelse | salt | sak=nyckelring n=1 |
| 8:23 | aliSalt | ali | 15 |
| 8:23 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 8:24 | sak | ali | Den köper jag. Ge hit. |
| 8:24 | röst | ali | Den köper jag. Ge hit. · REAKTION |
| 8:24 | upprepning | ali | Den köper jag. Ge hit. |
| 8:24 | upplåst | inkomst | kruka |
| 8:24 | brott | UPPLÅST | kruka (inkomst 8 av 6) |
| 8:24 | händelse | upplast | id=kruka flask=inkomst |
| 8:24 | paket |  | sms |
| 8:24 | väntar | ali | Prova en kruka. Folk köper krukor. Ingen vet varför. |
| 8:24 | skratt | ali | Prova en kruka. Folk köper krukor. Ingen |
| 8:26 | klar | ali | Den köper jag. Ge hit. |
| 8:28 | sak | ali | Prova en kruka. Folk köper krukor. Ingen vet varför. |
| 8:28 | skratt | ali | Prova en kruka. Folk köper krukor. Ingen |
| 8:28 | sms | ali | Prova en kruka. Folk köper krukor. Ingen vet varför. |
| 8:28 | skratt | ali | Prova en kruka. Folk köper krukor. Ingen |
| 8:28 | händelse | dialog | id=aliKrukaSms |
| 8:28 | sms-bubbla | ali | Prova en kruka. Folk köper krukor. Ingen vet varför. |
| 8:28 | skratt | ali | Prova en kruka. Folk köper krukor. Ingen |
| 8:28 | röst | ali | Prova en kruka. Folk köper krukor. Ingen vet varför. · STORY |
| 8:34 | klar | ali | Prova en kruka. Folk köper krukor. Ingen vet varför. |
| 8:34 | skratt | ali | Prova en kruka. Folk köper krukor. Ingen |
| 8:34 | väntar | du | Ali vill ha krukor. Jag printar en blomkruka. |
| 8:42 | sak | du | Ali vill ha krukor. Jag printar en blomkruka. |
| 8:42 | röst | du | Ali vill ha krukor. Jag printar en blomkruka. · STORY |
| 8:43 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 8:44 | händelse | kopt | sak=kruka |
| 8:44 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 8:44 | händelse | dialog | id=aliKrukaRecept |
| 8:44 | butiksbubbla | ali | Blomkruka? Bra val. Folk köper sånt. Jag vet inte varför. |
| 8:45 | väntar | ali | Blomkruka? Bra val. Folk köper sånt. Jag vet inte varför. |
| 8:47 | klar | du | Ali vill ha krukor. Jag printar en blomkruka. |
| 8:47 | sak | ali | Blomkruka? Bra val. Folk köper sånt. Jag vet inte varför. |
| 8:47 | röst | ali | Blomkruka? Bra val. Folk köper sånt. Jag vet inte varför. · STORY |
| 8:53 | klar | ali | Blomkruka? Bra val. Folk köper sånt. Jag vet inte varför. |
| 9:06 | händelse | printStart | sak=kruka |
| 9:07 | toast | fel | Ingen ström – trampa cykeln |
| 9:10 | händelse | printKlar | sak=kruka n=1 |
| 9:10 | händelse | malKlart | id=krukaD1 del=Dag 1 – Kom igång nasta=saljKruka |
| 9:10 | bekräftelse | du | plats |
| 9:10 | kvittens | du | En kruka. Mamma skulle bli så stolt. Hon får inte veta. |
| 9:10 | väntar | du | En kruka. Mamma skulle bli så stolt. Hon får inte veta. |
| 9:10 | väntar | du | Ali gillar krukor. Han sa det själv. |
| 9:10 | MÅL |  | Sälj blomkrukan |
| 9:10 | sak | du | En kruka. Mamma skulle bli så stolt. Hon får inte veta. |
| 9:10 | röst | du | En kruka. Mamma skulle bli så stolt. Hon får inte veta. · STORY |
| 9:10 | målruta |  | Sälj blomkrukan |
| 9:10 | händelse | tagitUrPrint | sak=kruka n=1 |
| 9:15 | klar | du | En kruka. Mamma skulle bli så stolt. Hon får inte veta. |
| 9:15 | sak | du | Ali gillar krukor. Han sa det själv. |
| 9:15 | pil |  | Sälj blomkrukan |
| 9:15 | notis | tanke | 💭 Ali gillar krukor. Han sa det själv. |
| 9:15 | röst | du | Ali gillar krukor. Han sa det själv. · MÅL |
| 9:18 | klar | du | Ali gillar krukor. Han sa det själv. |
| 9:21 | hjälp | kontroll | R: Vrid innan du ställer ner |
| 9:33 | väntar | ali | Den köper jag. Ge hit. |
| 9:33 | sak | ali | Den köper jag. Ge hit. |
| 9:33 | röst | ali | Den köper jag. Ge hit. · REAKTION |
| 9:33 | upprepning | ali | Den köper jag. Ge hit. |
| 9:34 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 9:36 | händelse | salt | sak=kruka n=1 |
| 9:36 | paket |  | ali → ge |
| 9:36 | väntar | ali | Du får bonus! 10 kr extra. Du ser hungrig ut. |
| 9:36 | väntar |  | (läget ändras) |
| 9:36 | aliSalt | ali | 70 |
| 9:36 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 9:36 | klar | ali | Den köper jag. Ge hit. |
| 9:37 | sak | ali | Du får bonus! 10 kr extra. Du ser hungrig ut. |
| 9:37 | notis |  | Ali: ”Du får bonus! 10 kr extra. Du ser hungrig ut.” |
| 9:37 | röst | ali | Du får bonus! 10 kr extra. Du ser hungrig ut. · REAKTION |
| 9:37 | händelse | malKlart | id=saljKruka del=Dag 1 – Kom igång nasta=kopSang |
| 9:37 | bekräftelse | du | plats |
| 9:37 | väntar | du | Jag tänker inte sova på betongen i natt. Ali har en säng. Typ. |
| 9:37 | MÅL |  | Köp sängen |
| 9:37 | paket |  | tanke |
| 9:37 | tanke | du | Det börjar bli mörkt. Jag kan inte sova på jorden. |
| 9:37 | väntar | du | Det börjar bli mörkt. Jag kan inte sova på jorden. |
| 9:37 | kvitto-visas |  | (läget ändras) |
| 9:37 | sak |  | (läget ändras) |
| 9:39 | målruta |  | Köp sängen |
| 9:41 | kvittens-bock |  | ✓ Sälj blomkrukan |
| 9:41 | klar | ali | Du får bonus! 10 kr extra. Du ser hungrig ut. |
| 9:42 | sak | du | Jag tänker inte sova på betongen i natt. Ali har en säng. Typ. |
| 9:42 | pil |  | Köp sängen |
| 9:42 | notis | tanke | 💭 Jag tänker inte sova på betongen i natt. Ali har en säng. Typ. |
| 9:42 | röst | du | Jag tänker inte sova på betongen i natt. Ali har en säng. Typ. · MÅL |
| 9:48 | klar | du | Jag tänker inte sova på betongen i natt. Ali har en säng. Typ. |
| 9:55 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 9:56 | händelse | kopt | sak=sang |
| 9:56 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 9:56 | händelse | dialog | id=aliSang |
| 9:56 | röst | ali | Sov gott, min vän. · STORY |
| 9:56 | butiksbubbla | ali | Sov gott, min vän. |
| 9:58 | händelse | malKlart | id=kopSang del=Dag 1 – Kom igång nasta=printSang |
| 9:58 | bekräftelse | du | plats |
| 9:58 | struken | du | Det börjar bli mörkt. Jag kan inte sova på jorden. |
| 9:58 | väntar | du | En säng tar lång tid. Den är värd det. |
| 9:58 | målruta |  | Printa sängen |
| 9:58 | MÅL |  | Printa sängen |
| 9:58 | pil |  | Printa sängen |
| 9:58 | nick |  | nick:19 |
| 9:59 | sak | du | En säng tar lång tid. Den är värd det. |
| 9:59 | notis | tanke | 💭 En säng tar lång tid. Den är värd det. |
| 9:59 | röst | du | En säng tar lång tid. Den är värd det. · MÅL |
| 10:02 | kvittens-bock |  | ✓ Köp sängen |
| 10:03 | klar | du | En säng tar lång tid. Den är värd det. |
| 10:37 | tanke | du | En hel äng bakom staketet. Någon vill verkligen inte ha besök. |
| 10:37 | väntar | du | En hel äng bakom staketet. Någon vill verkligen inte ha besök. |
| 10:52 | sak | du | En hel äng bakom staketet. Någon vill verkligen inte ha besök. |
| 10:52 | notis | tanke | 💭 En hel äng bakom staketet. Någon vill verkligen inte ha besök. |
| 10:52 | röst | du | En hel äng bakom staketet. Någon vill verkligen inte ha besök. · REAKTION |
| 10:57 | händelse | printStart | sak=sang |
| 10:59 | klar | du | En hel äng bakom staketet. Någon vill verkligen inte ha besök. |
| 11:00 | toast | fel | Ingen ström – trampa cykeln |
| 11:03 | toast | fel | Slut på tråd – mal mer så fortsätter den |
| 11:03 | väntar | notis:Storebrors skrivare: Slut på tråd – mal  | Storebrors skrivare: Slut på tråd – mal mer så fortsätter den |
| 11:07 | sak | notis:Storebrors skrivare: Slut på tråd – mal  | Storebrors skrivare: Slut på tråd – mal mer så fortsätter den |
| 11:07 | notis | fel | Storebrors skrivare: Slut på tråd – mal mer så fortsätter den |
| 11:09 | klar | notis:Storebrors skrivare: Slut på tråd – mal  | Storebrors skrivare: Slut på tråd – mal mer så fortsätter den |
| 11:32 | händelse | printKlar | sak=sang n=1 |
| 11:36 | händelse | tagitUrPrint | sak=sang n=1 |
| 11:36 | händelse | malKlart | id=printSang del=Dag 1 – Kom igång nasta=sov1 |
| 11:36 | bekräftelse | du | plats |
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
| 11:44 | klar | du | Sängen ska in i skjulet. Sen sover jag. |
| 12:00 | autosparning | du | natt 10 december |
| 12:02 | nattkort | du | 🌙 14 dagar kvar. God natt. zzz… i en riktig säng Nitton år. Inget mer tjat. Gården är full av skräp. I morgon. DAGENS PRINTAR Nyckelring × 8 Blomkruka × 1 Säng |

<details><summary>Botens handlingar dag 1</summary>

- 0:20 gå till brädhögen (3 m) (5 kr)
- 0:28 gå till cykeln vid vägen (2 m) (5 kr)
- 0:43 gå till rutan i linje 1 (13 m) (5 kr)
- 1:29 gå till cykeln (lyfter den) (13 m) (5 kr)
- 1:40 gå till cykelns plats (11 m) (5 kr)
- 1:51 gå till fel håll en bit (4 m) (5 kr)
- 1:54 gå till skrivaren (2 m) (5 kr)
- 1:55 printar Nyckelring (5 kr)
- 2:03 tar ut 1 st ur skrivaren (5 kr)
- 2:21 nybörjaren ser ingen pil – tittar runt (5 kr)
- 2:27 printar Nyckelring (sista av storebrors rulle) (5 kr)
- 3:01 nybörjaren ser ingen pil – tittar runt (5 kr)
- 3:06 tar ut 1 st ur skrivaren (5 kr)
- 3:08 gå till fel håll en bit (4 m) (5 kr)
- 3:18 gå till Ali (26 m) (5 kr)
- 3:18 öppnar Alis butik – sälja de två nyckelringarna (5 kr)
- 3:20 säljer hos Ali: +30 kr (35 kr)
- 3:39 öppnar Alis butik – köpa kvarnen (35 kr)
- 3:42 köper gammalkvarn för 30 kr (5 kr)
- 3:43 köpte kvarnen (5 kr)
- 4:12 gå till kvarnens ruta (28 m) (5 kr)
- 4:31 plockar 3 skräp på gården (bär max 3) (5 kr)
- 4:35 gå till kvarnen (11 m) (5 kr)
- 4:54 gå till cykeln (2 m) (5 kr)
- 4:56 printar Nyckelring (5 kr)
- 5:02 tar ut 1 st ur skrivaren (5 kr)
- 5:14 printar Nyckelring (5 kr)
- 5:15 tar ut 1 st ur skrivaren (5 kr)
- 5:17 printar Nyckelring (5 kr)
- 5:19 tar ut 1 st ur skrivaren (5 kr)
- 5:30 gå till Ali (27 m) (5 kr)
- 5:30 öppnar Alis butik – sälja nyckelringar (5 kr)
- 5:32 säljer hos Ali: +45 kr (50 kr)
- 5:41 panel: "Alis butik
50 kr
0 rullar
Jag " (50 kr)
- 6:06 gå till koppla powerbanken till cykeln (24 m) (50 kr)
- 6:21 nybörjaren ser ingen pil – tittar runt (50 kr)
- 6:33 gå till Ali (24 m) (50 kr)
- 6:33 öppnar Alis butik – köpa skräpgrip (50 kr)
- 6:36 köper grip för 50 kr (0 kr)
- 7:02 gå till skrivaren (25 m) (0 kr)
- 7:04 printar Skräpgrip (0 kr)
- 7:05 gå till cykeln (1 m) (0 kr)
- 7:17 plockar 3 skräp på gården (bär max 3) (0 kr)
- 7:25 gå till kvarnen (23 m) (0 kr)
- 7:28 gå till skrivaren (1 m) (0 kr)
- 7:29 tar ut 1 st ur skrivaren (0 kr)
- 7:33 tar på grip (0 kr)
- 7:34 tjänar pengar till väntar på flaskhalsen för kruka: 0/40 kr → printar nyckelring (15 kr) (0 kr)
- 7:35 printar Nyckelring (0 kr)
- 7:51 plockar 6 skräp på gården (bär max 6) (0 kr)
- 7:59 gå till kvarnen (23 m) (0 kr)
- 8:03 gå till skrivaren (3 m) (0 kr)
- 8:04 tar ut 1 st ur skrivaren (0 kr)
- 8:05 printar Nyckelring (0 kr)
- 8:08 tar ut 1 st ur skrivaren (0 kr)
- 8:09 printar Nyckelring (0 kr)
- 8:12 tar ut 1 st ur skrivaren (0 kr)
- 8:21 gå till Ali (28 m) (0 kr)
- 8:21 öppnar Alis butik – sälja (0 kr)
- 8:23 säljer hos Ali: +45 kr (45 kr)
- 8:43 öppnar Alis butik – köpa receptet blomkruka (45 kr)
- 8:45 köper kruka för 40 kr (5 kr)
- 9:04 gå till skrivaren (25 m) (5 kr)
- 9:06 printar Blomkruka (5 kr)
- 9:07 gå till cykeln (1 m) (5 kr)
- 9:11 tar ut 1 st ur skrivaren (5 kr)
- 9:21 nybörjaren ser ingen pil – tittar runt (5 kr)
- 9:34 gå till Ali (25 m) (5 kr)
- 9:34 öppnar Alis butik – sälja krukan (5 kr)
- 9:36 säljer hos Ali: +70 kr (75 kr)
- 9:55 öppnar Alis butik – köpa sängen (85 kr)
- 9:57 köper sang för 60 kr (25 kr)
- 10:23 gå till dit pilen pekar (30 m) (25 kr)
- 10:40 plockar 6 skräp på gården (bär max 6) (25 kr)
- 10:52 gå till kvarnen (33 m) (25 kr)
- 10:55 gå till skrivaren (3 m) (25 kr)
- 10:57 printar Säng (25 kr)
- 11:01 gå till cykeln (1 m) (25 kr)
- 11:20 plockar 6 skräp på gården (bär max 6) (25 kr)
- 11:30 gå till kvarnen (26 m) (25 kr)
- 11:36 gå till skrivaren (3 m) (25 kr)
- 11:36 tar ut 1 st ur skrivaren (25 kr)
- 12:00 gå till sängplatsen i skjulet (21 m) (25 kr)

</details>

## Dag 2

| Tid | Källa | Vem | Text |
|---|---|---|---|
| 12:02 | vara | ali | kruka |
| 12:02 | händelse | malKlart | id=sov1 del=Dag 1 – Kom igång nasta=kopMotor |
| 12:02 | bekräftelse | du | plats |
| 12:03 | MÅL |  | Spara till kvarnmotorn · 25 / 50 kr |
| 12:03 | väntar | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått generator. Vi tar en låt på det. Den här är till dig, Gunnar. |
| 12:03 | radio | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått generator. Vi tar en låt på det. Den här är till dig, Gunnar. |
| 12:03 | skratt | du | Radio-Kjelle |
| 12:03 | väntar | ali | Ali här. Såg skylten. Stavningen är rätt. Det är mer än många. |
| 0:00 | autosparning | du | morgon 11 december |
| 0:01 | väntar | foto | Egen säng |
| 0:01 | paket |  | tanke |
| 0:01 | tanke | du | Tänk att jag ska få sova i min egen säng. |
| 0:01 | väntar | du | Tänk att jag ska få sova i min egen säng. |
| 0:01 | dagbok | du | Första natten i en riktig säng. Jag printade den själv. |
| 0:01 | händelse | dagenBorjar | dag=2 |
| 0:01 | meddelande | du | 13 dagar till jul. Vevar jag för hand hinner jag inget annat. |
| 0:01 | dagbokkort | du | Kvarnmotorn. · 13 dagar till jul. Vevar jag för hand hinner jag inget annat. |
| 0:01 | röst | du | 13 dagar till jul. Kvarnmotorn. Vevar jag för hand hinner jag inget annat. · STORY |
| 0:11 | väntar | notis:morgon | Ali vill ha idag: Blomkruka · +50 % |
| 0:11 | händelse | morgonkortStangt | dag=2 |
| 0:11 | väntar | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått generator. Vi tar en låt på det. Den här är till dig, Gunnar. |
| 0:11 | väntar | ali | Ali här. Såg skylten. Stavningen är rätt. Det är mer än många. |
| 0:11 | paket |  | tanke |
| 0:11 | tanke | du | Grön jul igen. Typiskt. |
| 0:11 | väntar | du | Grön jul igen. Typiskt. |
| 0:11 | struken | du | Grön jul igen. Typiskt. |
| 0:11 | väntar | du | Vevandet tar på armarna. Ali har en motor till kvarnen. |
| 0:13 | målruta |  | Spara till kvarnmotorn · 25 / 50 kr |
| 0:16 | sak | du | Vevandet tar på armarna. Ali har en motor till kvarnen. |
| 0:16 | pil |  | Spara till kvarnmotorn · 25 / 50 kr |
| 0:16 | notis | tanke | 💭 Vevandet tar på armarna. Ali har en motor till kvarnen. |
| 0:16 | röst | du | Vevandet tar på armarna. Ali har en motor till kvarnen. · MÅL |
| 0:21 | klar | du | Vevandet tar på armarna. Ali har en motor till kvarnen. |
| 0:21 | sak | notis:morgon | Ali vill ha idag: Blomkruka · +50 % |
| 0:21 | notis |  | Blomkruka · +50 % |
| 0:25 | klar | notis:morgon | Ali vill ha idag: Blomkruka · +50 % |
| 0:39 | händelse | printStart | sak=kruka |
| 0:42 | händelse | printKlar | sak=kruka n=2 |
| 0:42 | händelse | tagitUrPrint | sak=kruka n=1 |
| 0:45 | hjälp | kontroll | R: Vrid innan du ställer ner |
| 0:47 | sak | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått generator. Vi tar en låt på det. Den här är till dig, Gunnar. |
| 0:47 | notis |  | 📻 Radio Tippen: Radio Tippen, Kjelle här. Skjulet vid tippen har fått generator. Vi tar en låt på det. Den här är till dig, Gunnar. |
| 0:47 | röst | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått generator. Vi tar en låt på det. Den här är till dig, Gunnar. · REAKTION |
| 0:51 | struken | ali | Ali här. Såg skylten. Stavningen är rätt. Det är mer än många. |
| 0:51 | väntar | ali | Den köper jag. Ge hit. |
| 0:51 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 0:51 | butiksbubbla | ali | Pappa stod bakom den här disken i trettio år. Jag har stått här i tjugofem. Varje morgon när jag låser upp hälsar jag på honom. Tyst. |
| 0:52 | röst | ali | Pappa stod bakom den här disken i trettio år. Jag har stått här i tjugofem. Varje morgon när jag låser upp hälsar jag på honom. Tyst. · STORY |
| 0:53 | händelse | salt | sak=kruka n=1 |
| 0:53 | aliSalt | ali | 105 |
| 0:53 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 0:53 | butiksbubbla | ali | Precis vad jag ville ha idag. 105 kr – med extra. |
| 0:54 | väntar | ali | Precis det jag ville ha idag, min vän. |
| 0:54 | upplåst | mala | kvarnmotor |
| 0:54 | brott | UPPLÅST | kvarnmotor (mala 7 av 6, sparat ihop) |
| 0:54 | händelse | upplast | id=kvarnmotor flask=mala |
| 0:54 | paket |  | sms |
| 0:54 | väntar | ali | Ali här. En motor? Jag har en. Från en gammal tvättmaskin. Den centrifugerar fortfarande om man ber snällt. |
| 0:56 | klar | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått generator. Vi tar en låt på det. Den här är till dig, Gunnar. |
| 1:04 | sak | ali | Precis det jag ville ha idag, min vän. |
| 1:04 | röst | ali | Precis det jag ville ha idag, min vän. · STORY |
| 1:06 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 1:07 | struken | info:guld | 3D-modell köpt – printa kvarnmotor |
| 1:07 | händelse | kopt | sak=kvarnmotor |
| 1:07 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 1:08 | tanke | du | Sopbilen tippade en ny last. Allt det skräpet – och grinden är låst. |
| 1:08 | okänt ord bytt | du | Sopbilen tippade en ny last. Allt det skräpet – och grinden är låst. |
| 1:08 | väntar | du | Sopbilen tippade en ny last. Allt det skräpet – och grinden är låst. |
| 1:08 | skratt | du | däcket rullar iväg |
| 1:08 | klar | ali | Precis det jag ville ha idag, min vän. |
| 1:08 | struken | ali | Ali här. En motor? Jag har en. Från en gammal tvättmaskin. Den centrifugerar fortfarande om man ber snällt. |
| 1:09 | sak | du | Sopbilen tippade en ny last. Allt det skräpet – och grinden är låst. |
| 1:09 | notis | tanke | 💭 En stor bil tippade en ny last. Allt det skräpet – och grinden är låst. |
| 1:09 | röst | du | En stor bil tippade en ny last. Allt det skräpet – och grinden är låst. · REAKTION |
| 1:09 | händelse | malKlart | id=kopMotor del=Dag 2 – Tippen bredvid nasta=monteraMotor |
| 1:09 | bekräftelse | du | plats |
| 1:09 | väntar | du | Motorn ska sitta där veven sitter. Jag printar den först. |
| 1:09 | MÅL |  | Printa kvarnmotorn till kvarnen |
| 1:11 | målruta |  | Printa kvarnmotorn till kvarnen |
| 1:11 | pil |  | Printa kvarnmotorn till kvarnen |
| 1:12 | nick |  | nick:22 |
| 1:13 | kvittens-bock |  | ✓ Köp kvarnmotorn |
| 1:15 | klar | du | Sopbilen tippade en ny last. Allt det skräpet – och grinden är låst. |
| 1:15 | sak | du | Motorn ska sitta där veven sitter. Jag printar den först. |
| 1:15 | notis | tanke | 💭 Motorn ska sitta där veven sitter. Jag printar den först. |
| 1:15 | röst | du | Motorn ska sitta där veven sitter. Jag printar den först. · MÅL |
| 1:21 | klar | du | Motorn ska sitta där veven sitter. Jag printar den först. |
| 1:27 | struken | ali | Den köper jag. Ge hit. |
| 1:34 | sak | foto | Egen säng |
| 1:34 | foto | du | Egen säng |
| 1:36 | klar | foto | Egen säng |
| 1:42 | händelse | printStart | sak=byggsats:kvarnmotor |
| 1:43 | toast | fel | Ingen ström – trampa cykeln |
| 1:44 | sak | du | Tänk att jag ska få sova i min egen säng. |
| 1:44 | notis | tanke | 💭 Tänk att jag ska få sova i min egen säng. |
| 1:44 | röst | du | Tänk att jag ska få sova i min egen säng. · STORY |
| 1:45 | väntar | mamma | Har du frusit än? |
| 1:45 | händelse | printKlar | sak=byggsats:kvarnmotor n=1 |
| 1:46 | tanke | du | Kvarnmotorn ska skruvas fast på kvarnen. |
| 1:46 | väntar | du | Kvarnmotorn ska skruvas fast på kvarnen. |
| 1:46 | händelse | tagitUrPrint | sak=byggsats:kvarnmotor n=1 |
| 1:46 | paket |  | sms |
| 1:46 | väntar | ali | Ali här. Ännu en ritning som blev på riktigt: Kvarnmotor. Semesterkassan växer. Livet växer. |
| 1:47 | klar | du | Tänk att jag ska få sova i min egen säng. |
| 1:47 | sak | du | Kvarnmotorn ska skruvas fast på kvarnen. |
| 1:47 | notis | tanke | 💭 Kvarnmotorn ska skruvas fast på kvarnen. |
| 1:47 | röst | du | Kvarnmotorn ska skruvas fast på kvarnen. · REAKTION |
| 1:52 | klar | du | Kvarnmotorn ska skruvas fast på kvarnen. |
| 1:54 | sak | ali | Ali här. Ännu en ritning som blev på riktigt: Kvarnmotor. Semesterkassan växer. Livet växer. |
| 1:54 | sms | ali | Ali här. Ännu en ritning som blev på riktigt: Kvarnmotor. Semesterkassan växer. Livet växer. |
| 1:54 | sms-bubbla | ali | Ali här. Ännu en ritning som blev på riktigt: Kvarnmotor. Semesterkassan växer. Livet växer. |
| 1:54 | röst | ali | Ali här. Ännu en ritning som blev på riktigt: Kvarnmotor. Semesterkassan växer. Livet växer. · REAKTION |
| 2:00 | tanke | du | Motorn sitter där veven satt – nu mal kvarnen själv. |
| 2:00 | väntar | du | Motorn sitter där veven satt – nu mal kvarnen själv. |
| 2:00 | händelse | monterat | sak=kvarnmotor |
| 2:00 | paket |  | tanke |
| 2:00 | tanke | du | Motorn sitter där veven satt. Mina armar tackar. |
| 2:00 | struken | du | Motorn sitter där veven satt – nu mal kvarnen själv. |
| 2:00 | väntar | du | Motorn sitter där veven satt. Mina armar tackar. |
| 2:00 | monterat | du | byggsats:kvarnmotor |
| 2:00 | händelse | monterat | sak=kvarnmotor |
| 2:00 | händelse | malKlart | id=monteraMotor del=Dag 2 – Tippen bredvid nasta=n1-stada-klart-garden |
| 2:00 | bekräftelse | du | plats |
| 2:00 | struken | du | Motorn sitter där veven satt. Mina armar tackar. |
| 2:00 | väntar | du | Gården är full av skräp. Jag börjar vid skjulet. |
| 2:00 | målruta |  | Städa gården |
| 2:00 | MÅL |  | Städa gården |
| 2:03 | klar | ali | Ali här. Ännu en ritning som blev på riktigt: Kvarnmotor. Semesterkassan växer. Livet växer. |
| 2:03 | sak | du | Gården är full av skräp. Jag börjar vid skjulet. |
| 2:03 | pil |  | Städa gården |
| 2:03 | notis | tanke | 💭 Gården är full av skräp. Jag börjar vid skjulet. |
| 2:03 | röst | du | Gården är full av skräp. Jag börjar vid skjulet. · MÅL |
| 2:03 | nick |  | nick:23 |
| 2:04 | kvittens-bock |  | ✓ Printa kvarnmotorn till kvarnen |
| 2:09 | klar | du | Gården är full av skräp. Jag börjar vid skjulet. |
| 2:34 | upplåst | skrivare | rullstall |
| 2:34 | brott | UPPLÅST | rullstall (skrivare 179 av 60) |
| 2:34 | händelse | upplast | id=rullstall flask=skrivare |
| 2:34 | paket |  | tanke → sms |
| 2:34 | tanke | du | Kvarnen står och väntar för att hållaren är full. Om den rymde fler rullar kunde den mala hela tiden. |
| 2:34 | väntar | du | Kvarnen står och väntar för att hållaren är full. Om den rymde fler rullar kunde den mala hela tiden. |
| 2:34 | väntar | ali | Ali här. Rullställ. Fyra rullar i stället för en. Har ett på hyllan. |
| 2:34 | sak | du | Kvarnen står och väntar för att hållaren är full. Om den rymde fler rullar kunde den mala hela tiden. |
| 2:34 | notis | tanke | 💭 Kvarnen står och väntar för att hållaren är full. Om den rymde fler rullar kunde den mala hela tiden. |
| 2:34 | röst | du | Kvarnen står och väntar för att hållaren är full. Om den rymde fler rullar kunde den mala hela tiden. · STORY |
| 2:40 | klar | du | Kvarnen står och väntar för att hållaren är full. Om den rymde fler rullar kunde den mala hela tiden. |
| 2:48 | skratt | du | falsk tuta |
| 2:51 | händelse | malKlart | id=n1-stada-klart-garden del=Dag 2 – Tippen bredvid nasta=kopSack |
| 2:51 | bekräftelse | du | plats |
| 2:51 | lapp | 📔 Dagbok | Gården är STÄDAD, av mig, frivilligt. Mamma skulle aldrig tro det. |
| 2:51 | dagbokrad | du | Gården är STÄDAD, av mig, frivilligt. Mamma skulle aldrig tro det. |
| 2:51 | väntar | notis:Gården är STÄDAD, av mig, frivilligt. Ma | Gården är STÄDAD, av mig, frivilligt. Mamma skulle aldrig tro det. |
| 2:51 | väntar | du | En stor bil saktar in vid skjulet. Jag går dit. |
| 2:51 | MÅL |  | Gå till bilen vid skjulet |
| 2:51 | sak | notis:Gården är STÄDAD, av mig, frivilligt. Ma | Gården är STÄDAD, av mig, frivilligt. Mamma skulle aldrig tro det. |
| 2:51 | notis | dagbok | Gården är STÄDAD, av mig, frivilligt. Mamma skulle aldrig tro det. |
| 2:53 | tanke | du | Det glittrar där inne. Eller så är det bara mörkt. Jag måste dit. |
| 2:53 | väntar | du | Det glittrar där inne. Eller så är det bara mörkt. Jag måste dit. |
| 2:53 | klar | notis:Gården är STÄDAD, av mig, frivilligt. Ma | Gården är STÄDAD, av mig, frivilligt. Mamma skulle aldrig tro det. |
| 2:53 | målruta |  | Gå till bilen vid skjulet |
| 2:55 | tanke | du | En flod. Bakom tomten. Ingen sa nåt om en flod. |
| 2:55 | struken | du | Det glittrar där inne. Eller så är det bara mörkt. Jag måste dit. |
| 2:55 | väntar | du | En flod. Bakom tomten. Ingen sa nåt om en flod. |
| 2:55 | tanke | du | Igensvetsad. Någon ville verkligen inte in här. |
| 2:55 | struken | du | En flod. Bakom tomten. Ingen sa nåt om en flod. |
| 2:55 | väntar | du | Igensvetsad. Någon ville verkligen inte in här. |
| 2:57 | sak | du | Igensvetsad. Någon ville verkligen inte in här. |
| 2:57 | notis | tanke | 💭 Igensvetsad. Någon ville verkligen inte in här. |
| 2:57 | röst | du | Igensvetsad. Någon ville verkligen inte in här. · REAKTION |
| 2:57 | tanke | du | Endast med vagn. Vilken vagn? |
| 2:57 | väntar | du | Endast med vagn. Vilken vagn? |
| 3:01 | klar | du | Igensvetsad. Någon ville verkligen inte in här. |
| 3:03 | sak | du | En stor bil saktar in vid skjulet. Jag går dit. |
| 3:03 | pil |  | Gå till bilen vid skjulet |
| 3:03 | notis | tanke | 💭 En stor bil saktar in vid skjulet. Jag går dit. |
| 3:03 | röst | du | En stor bil saktar in vid skjulet. Jag går dit. · MÅL |
| 3:07 | klar | du | En stor bil saktar in vid skjulet. Jag går dit. |
| 3:09 | väntar | värld:TUUT! Hej grannen! | TUUT! Hej grannen! |
| 3:17 | väntar | mamma | Har du frusit än? |
| 3:17 | struken | du | Endast med vagn. Vilken vagn? |
| 3:23 | scenInfo | rolf | inkorg 73: sopbilen kommer till skjulet |
| 3:30 | struken | värld:TUUT! Hej grannen! | TUUT! Hej grannen! |
| 3:33 | skratt | du | falsk tuta |
| 3:34 | upplåst | skrivare | trim_skrivare |
| 3:34 | brott | UPPLÅST | trim_skrivare (skrivare 60 av 60) |
| 3:34 | händelse | upplast | id=trim_skrivare flask=skrivare |
| 3:34 | paket |  | sms |
| 3:34 | väntar | ali | Ali här. Skrivartrim. Jag skruvade på min egen skrivare i natt. Den går fortare nu. Nästan för fort. |
| 3:34 | väntar | rolf | Tjena. Rolf. Ja kör sopbilen. Tippen där borta ä min. Har vart min sen -87. |
| 3:34 | sak | rolf | Tjena. Rolf. Ja kör sopbilen. Tippen där borta ä min. Har vart min sen -87. |
| 3:34 | händelse | dialog | id=rolfHej |
| 3:34 | röst | rolf | Tjena. Rolf. Ja kör sopbilen. Tippen där borta ä min. Har vart min sen -87. · REAKTION |
| 3:35 | bubbla |  | Tjena. Rolf. Ja kör sopbilen. Tippen där borta ä min. Har vart min sen -87. |
| 3:46 | klar | rolf | Tjena. Rolf. Ja kör sopbilen. Tippen där borta ä min. Har vart min sen -87. |
| 3:46 | väntar | rolf | Du har städat hela gården. Ingen gör så nuförtin. |
| 3:46 | sak | rolf | Du har städat hela gården. Ingen gör så nuförtin. |
| 3:46 | händelse | dialog | id=rolfGarden |
| 3:46 | röst | rolf | Du har städat hela gården. Ingen gör så nuförtin. · REAKTION |
| 3:47 | bubbla |  | Du har städat hela gården. Ingen gör så nuförtin. |
| 3:49 | brott | DOLD SKYLT | ALIS MARKNAD från 7 m: skymd av BoxGeometry 1.2 m bort (9.1, 1.8, 23.0) |
| 3:51 | klar | rolf | Du har städat hela gården. Ingen gör så nuförtin. |
| 3:51 | väntar | rolf | Öj… ä dä du som printar grejer? Dom där nyckelringarna? |
| 3:51 | sak | rolf | Öj… ä dä du som printar grejer? Dom där nyckelringarna? |
| 3:51 | bubbla |  | Öj… ä dä du som printar grejer? Dom där nyckelringarna? |
| 3:51 | händelse | dialog | id=rolfPrintar |
| 3:51 | röst | rolf | Öj… ä dä du som printar grejer? Dom där nyckelringarna? · REAKTION |
| 3:52 | väntar | du | Tornet är fullt. Skrivaren får jobba ikapp. |
| 3:52 | väntar | info:fel | Tornet är fullt. Skrivaren får jobba ikapp. |
| 3:52 | kvitto-visas | info:fel | Tornet är fullt. Skrivaren får jobba ikapp. |
| 3:52 | toast | fel | Tornet är fullt. Skrivaren får jobba ikapp. |
| 3:58 | klar | rolf | Öj… ä dä du som printar grejer? Dom där nyckelringarna? |
| 3:58 | sak | du | Tornet är fullt. Skrivaren får jobba ikapp. |
| 3:58 | röst | du | Tornet är fullt. Skrivaren får jobba ikapp. · REAKTION |
| 4:02 | klar | du | Tornet är fullt. Skrivaren får jobba ikapp. |
| 4:02 | väntar | du | Ja. Av skräp. |
| 4:03 | sak | du | Ja. Av skräp. |
| 4:03 | notis | tanke | Ja. Av skräp. |
| 4:03 | händelse | dialog | id=duAvSkrap |
| 4:03 | röst | du | Ja. Av skräp. · REAKTION |
| 4:07 | klar | du | Ja. Av skräp. |
| 4:07 | väntar | rolf | Hm. Ja kanske har nåt åt dej. Kolla postlådan vid grinden. |
| 4:07 | sak | rolf | Hm. Ja kanske har nåt åt dej. Kolla postlådan vid grinden. |
| 4:07 | händelse | dialog | id=rolfPostlada |
| 4:07 | röst | rolf | Hm. Ja kanske har nåt åt dej. Kolla postlådan vid grinden. · REAKTION |
| 4:08 | bubbla |  | Hm. Ja kanske har nåt åt dej. Kolla postlådan vid grinden. |
| 4:15 | klar | rolf | Hm. Ja kanske har nåt åt dej. Kolla postlådan vid grinden. |
| 4:17 | brott | TRÄNGSEL 2 | "Ali här. Skrivartrim. Jag skruvade på min egen skr" 2.0 s efter förra meddelandet, 86.7 s efter en klar uppgift |
| 4:17 | sak | ali | Ali här. Skrivartrim. Jag skruvade på min egen skrivare i natt. Den går fortare nu. Nästan för fort. |
| 4:17 | sms | ali | Ali här. Skrivartrim. Jag skruvade på min egen skrivare i natt. Den går fortare nu. Nästan för fort. |
| 4:17 | sms-bubbla | ali | Ali här. Skrivartrim. Jag skruvade på min egen skrivare i natt. Den går fortare nu. Nästan för fort. |
| 4:17 | röst | ali | Ali här. Skrivartrim. Jag skruvade på min egen skrivare i natt. Den går fortare nu. Nästan för fort. · STORY |
| 4:18 | sopsack | rolf | Rolf kastade ut säckarna vid skjulet |
| 4:19 | paket |  | tanke |
| 4:19 | tanke | du | Rolf slängde av något åt mig. |
| 4:19 | väntar | du | Rolf slängde av något åt mig. |
| 4:28 | klar | ali | Ali här. Skrivartrim. Jag skruvade på min egen skrivare i natt. Den går fortare nu. Nästan för fort. |
| 4:32 | tanke | du | En sopsäck över axeln! Nu bär jag 10 skräp. |
| 4:32 | väntar | du | En sopsäck över axeln! Nu bär jag 10 skräp. |
| 4:32 | tog på | du | byggsats:korg |
| 4:32 | händelse | monterat | sak=korg |
| 4:32 | sak | du | En sopsäck över axeln! Nu bär jag 10 skräp. |
| 4:32 | notis | tanke | 💭 En sopsäck över axeln! Nu bär jag 10 skräp. |
| 4:32 | röst | du | En sopsäck över axeln! Nu bär jag 10 skräp. · REAKTION |
| 4:32 | händelse | malKlart | id=kopSack del=Dag 2 – Tippen bredvid nasta=rolf0-brev |
| 4:32 | bekräftelse | du | plats |
| 4:32 | struken | du | Rolf slängde av något åt mig. |
| 4:32 | väntar | du | Det ligger ett brev i postlådan vid grinden. Det läser jag. |
| 4:33 | MÅL |  | Möt sopbilen vid grinden |
| 4:35 | målruta |  | Möt sopbilen vid grinden |
| 4:36 | klar | du | En sopsäck över axeln! Nu bär jag 10 skräp. |
| 4:36 | kvittens-bock |  | ✓ Ta sopsäckarna |
| 4:38 | sak | du | Det ligger ett brev i postlådan vid grinden. Det läser jag. |
| 4:38 | pil |  | Möt sopbilen vid grinden |
| 4:38 | notis | tanke | 💭 Det ligger ett brev i postlådan vid grinden. Det läser jag. |
| 4:38 | röst | du | Det ligger ett brev i postlådan vid grinden. Det läser jag. · MÅL |
| 4:42 | skratt | du | falsk tuta |
| 4:42 | paket |  | tanke → ge |
| 4:42 | tanke | du | Flaggan är uppe. Rolf har lämnat något. |
| 4:42 | väntar | du | Flaggan är uppe. Rolf har lämnat något. |
| 4:42 | väntar |  | (läget ändras) |
| 4:44 | klar | du | Det ligger ett brev i postlådan vid grinden. Det läser jag. |
| 4:52 | sak | du | Flaggan är uppe. Rolf har lämnat något. |
| 4:52 | notis | tanke | 💭 Flaggan är uppe. Rolf har lämnat något. |
| 4:52 | röst | du | Flaggan är uppe. Rolf har lämnat något. · STORY |
| 4:57 | klar | du | Flaggan är uppe. Rolf har lämnat något. |
| 5:04 | väntar | rolf | Såg att du printar grejer. Kan du göra en sån hä? Kall öl ä viktigt. Ja ha ritat själv. Ungefär så hä. Ja ä int dum. /Rolf​ |
| 5:04 | paket |  | ge |
| 5:04 | väntar |  | (läget ändras) |
| 5:04 | sak | rolf | Såg att du printar grejer. Kan du göra en sån hä? Kall öl ä viktigt. Ja ha ritat själv. Ungefär så hä. Ja ä int dum. /Rolf​ |
| 5:04 | lapp | Brev från Rolf | Såg att du printar grejer. Kan du göra en sån hä? Kall öl ä viktigt. Ja ha ritat själv. Ungefär så hä. Ja ä int dum. /Rolf​ |
| 5:04 | röst | rolf | Såg att du printar grejer. Kan du göra en sån hä? Kall öl ä viktigt. Ja ha ritat själv. Ungefär så hä. Ja ä int dum. /Rolf​ · STORY |
| 5:04 | händelse | malKlart | id=rolf0-brev del=Dag 2 – Tippen bredvid nasta=rolf0-printa |
| 5:04 | bekräftelse | du | plats |
| 5:04 | väntar | du | Rolf vill ha en ölhållare. Den printar jag. |
| 5:05 | MÅL |  | Printa ölhållare med kylklamp |
| 5:05 | tanke | du | Rolf har nyckeln… Jag undrar vad som finns där inne. |
| 5:05 | väntar | du | Rolf har nyckeln… Jag undrar vad som finns där inne. |
| 5:05 | kvitto-visas |  | (läget ändras) |
| 5:05 | sak |  | (läget ändras) |
| 5:05 | kvitto-visas | du | Rolf har nyckeln… Jag undrar vad som finns där inne. |
| 5:05 | sak | du | Rolf har nyckeln… Jag undrar vad som finns där inne. |
| 5:05 | notis | tanke | 💭 Rolf har nyckeln… Jag undrar vad som finns där inne. |
| 5:07 | målruta |  | Printa ölhållare med kylklamp |
| 5:09 | händelse | printStart | sak=olhallare |
| 5:09 | händelse | malKlart | id=rolf0-printa del=Dag 2 – Tippen bredvid nasta=rolf0-ge |
| 5:09 | bekräftelse | du | plats |
| 5:09 | väntar | du | Ölhållaren är klar. Den lägger jag i Rolfs postlåda. |
| 5:10 | MÅL |  | Ge Rolf ölhållare med kylklamp |
| 5:12 | målruta |  | Ge Rolf ölhållare med kylklamp |
| 5:12 | händelse | printKlar | sak=olhallare n=1 |
| 5:13 | händelse | tagitUrPrint | sak=olhallare n=1 |
| 5:13 | kvittens-bock |  | ✓ Printa ölhållare med kylklamp |
| 5:17 | klar | rolf | Såg att du printar grejer. Kan du göra en sån hä? Kall öl ä viktigt. Ja ha ritat själv. Ungefär så hä. Ja ä int dum. /Rolf​ |
| 5:17 | händelse | brevLast | id=rolf:0 |
| 5:17 | struken | du | Rolf vill ha en ölhållare. Den printar jag. |
| 5:17 | sak | du | Ölhållaren är klar. Den lägger jag i Rolfs postlåda. |
| 5:17 | pil |  | Ge Rolf ölhållare med kylklamp |
| 5:17 | notis | tanke | 💭 Ölhållaren är klar. Den lägger jag i Rolfs postlåda. |
| 5:17 | röst | du | Ölhållaren är klar. Den lägger jag i Rolfs postlåda. · MÅL |
| 5:21 | klar | du | Ölhållaren är klar. Den lägger jag i Rolfs postlåda. |
| 5:25 | struken | mamma | Har du frusit än? |
| 5:30 | sak | ali | Ali här. Rullställ. Fyra rullar i stället för en. Har ett på hyllan. |
| 5:30 | sms | ali | Ali här. Rullställ. Fyra rullar i stället för en. Har ett på hyllan. |
| 5:30 | sms-bubbla | ali | Ali här. Rullställ. Fyra rullar i stället för en. Har ett på hyllan. |
| 5:30 | röst | ali | Ali här. Rullställ. Fyra rullar i stället för en. Har ett på hyllan. · STORY |
| 5:36 | klar | ali | Ali här. Rullställ. Fyra rullar i stället för en. Har ett på hyllan. |
| 5:39 | händelse | lagtIPostlada | sak=olhallare rolf=0 jobb=false |
| 5:39 | paket |  | tanke |
| 5:39 | tanke | du | Flaggan uppe. Nu får Rolf hämta den. |
| 5:39 | väntar | du | Flaggan uppe. Nu får Rolf hämta den. |
| 5:39 | sak | du | Flaggan uppe. Nu får Rolf hämta den. |
| 5:39 | notis | tanke | 💭 Flaggan uppe. Nu får Rolf hämta den. |
| 5:39 | röst | du | Flaggan uppe. Nu får Rolf hämta den. · REAKTION |
| 5:39 | händelse | malKlart | id=rolf0-ge del=Dag 2 – Tippen bredvid nasta=vindsnurra |
| 5:39 | bekräftelse | du | plats |
| 5:39 | väntar | du | En vindsnurra på skjulets tak. Då blir det ström när det blåser. |
| 5:39 | MÅL |  | Köp vindsnurran |
| 5:39 | upplåst | trampa | vindsnurra |
| 5:39 | brott | UPPLÅST | vindsnurra (trampa 21 av 6, sparat ihop) |
| 5:39 | händelse | upplast | id=vindsnurra flask=trampa |
| 5:39 | paket |  | sms |
| 5:39 | väntar | ali | Ali här. Vindsnurra till cykeln. Vinden trampar åt dig. Den är lat, men den jobbar gratis. |
| 5:41 | klar | du | Flaggan uppe. Nu får Rolf hämta den. |
| 5:41 | målruta |  | Köp vindsnurran |
| 5:43 | kvittens-bock |  | ✓ Ge Rolf ölhållare med kylklamp |
| 5:45 | sak | du | En vindsnurra på skjulets tak. Då blir det ström när det blåser. |
| 5:45 | pil |  | Köp vindsnurran |
| 5:45 | notis | tanke | 💭 En vindsnurra på skjulets tak. Då blir det ström när det blåser. |
| 5:45 | röst | du | En vindsnurra på skjulets tak. Då blir det ström när det blåser. · MÅL |
| 5:45 | nick |  | nick:28 |
| 5:48 | klar | du | En vindsnurra på skjulets tak. Då blir det ström när det blåser. |
| 5:55 | brott | TRÄNGSEL 2 | "Ali här. Vindsnurra till cykeln. Vinden trampar åt" 4.8 s efter förra meddelandet, 16.8 s efter en klar uppgift |
| 5:55 | sak | ali | Ali här. Vindsnurra till cykeln. Vinden trampar åt dig. Den är lat, men den jobbar gratis. |
| 5:55 | sms | ali | Ali här. Vindsnurra till cykeln. Vinden trampar åt dig. Den är lat, men den jobbar gratis. |
| 5:55 | sms-bubbla | ali | Ali här. Vindsnurra till cykeln. Vinden trampar åt dig. Den är lat, men den jobbar gratis. |
| 5:55 | röst | ali | Ali här. Vindsnurra till cykeln. Vinden trampar åt dig. Den är lat, men den jobbar gratis. · STORY |
| 6:02 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 6:02 | butiksbubbla | ali | Rolf gav mig en kanna. Som min farmors. Jag ritade en sak åt honom. Säg inget, han gråter lätt. |
| 6:03 | klar | ali | Ali här. Vindsnurra till cykeln. Vinden trampar åt dig. Den är lat, men den jobbar gratis. |
| 6:04 | struken | info:guld | 3D-modell köpt – printa vindsnurra till skjultaket |
| 6:04 | händelse | kopt | sak=vindsnurra |
| 6:04 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 6:04 | röst | ali | Rolf gav mig en kanna. Som min farmors. Jag ritade en sak åt honom. Säg inget, han gråter lätt. · STORY |
| 6:16 | händelse | printStart | sak=byggsats:vindsnurra |
| 6:17 | toast | fel | Ingen ström – trampa cykeln |
| 6:19 | sak |  | (läget ändras) |
| 6:19 | brev | rolf | rolf:0 |
| 6:20 | klar |  | (läget ändras) |
| 6:21 | händelse | printKlar | sak=byggsats:vindsnurra n=1 |
| 6:22 | tanke | du | Vindsnurran ska upp på skjulets tak. |
| 6:22 | väntar | du | Vindsnurran ska upp på skjulets tak. |
| 6:22 | händelse | tagitUrPrint | sak=byggsats:vindsnurra n=1 |
| 6:22 | sak | du | Vindsnurran ska upp på skjulets tak. |
| 6:22 | notis | tanke | 💭 Vindsnurran ska upp på skjulets tak. |
| 6:22 | röst | du | Vindsnurran ska upp på skjulets tak. · REAKTION |
| 6:26 | klar | du | Vindsnurran ska upp på skjulets tak. |
| 6:28 | skratt | du | falsk tuta |
| 6:35 | hjälp | kontroll | Klick: Klicka för att montera |
| 6:36 | händelse | placerat | sak=vindsnurra |
| 6:36 | tanke | du | Vindsnurran sitter på taket – den trampar cykeln åt mig när det blåser |
| 6:36 | väntar | du | Vindsnurran sitter på taket – den trampar cykeln åt mig när det blåser |
| 6:36 | monterat | du | byggsats:vindsnurra |
| 6:36 | händelse | monterat | sak=vindsnurra |
| 6:36 | sak | du | Vindsnurran sitter på taket – den trampar cykeln åt mig när det blåser |
| 6:36 | notis | tanke | 💭 Vindsnurran sitter på taket – den trampar cykeln åt mig när det blåser |
| 6:36 | röst | du | Vindsnurran sitter på taket – den trampar cykeln åt mig när det blåser · REAKTION |
| 6:36 | händelse | malKlart | id=vindsnurra del=Dag 2 – Tippen bredvid nasta=n1-bygg-dorr-skjulet |
| 6:36 | bekräftelse | du | plats |
| 6:36 | kvittens | du | Den snurrar! Långsamt. Men den snurrar. |
| 6:36 | väntar | du | Den snurrar! Långsamt. Men den snurrar. |
| 6:36 | väntar | du | Det drar från dörrhålet. En dörr kan jag printa. |
| 6:36 | MÅL |  | Bygg en dörr till skjulet |
| 6:38 | målruta |  | Bygg en dörr till skjulet |
| 6:41 | klar | du | Vindsnurran sitter på taket – den trampar cykeln åt mig när det blåser |
| 6:41 | sak | du | Den snurrar! Långsamt. Men den snurrar. |
| 6:41 | röst | du | Den snurrar! Långsamt. Men den snurrar. · STORY |
| 6:44 | klar | du | Den snurrar! Långsamt. Men den snurrar. |
| 6:45 | sak | du | Det drar från dörrhålet. En dörr kan jag printa. |
| 6:45 | pil |  | Bygg en dörr till skjulet |
| 6:45 | notis | tanke | 💭 Det drar från dörrhålet. En dörr kan jag printa. |
| 6:45 | röst | du | Det drar från dörrhålet. En dörr kan jag printa. · MÅL |
| 6:45 | paket |  | tanke |
| 6:45 | tanke | du | Jaha, Rolf har hämtat en ölhållare med kylklamp. |
| 6:45 | väntar | du | Jaha, Rolf har hämtat en ölhållare med kylklamp. |
| 6:46 | nick |  | nick:29 |
| 6:48 | klar | du | Det drar från dörrhålet. En dörr kan jag printa. |
| 6:58 | sak | du | Jaha, Rolf har hämtat en ölhållare med kylklamp. |
| 6:58 | notis | tanke | 💭 Jaha, Rolf har hämtat en ölhållare med kylklamp. |
| 6:58 | röst | du | Jaha, Rolf har hämtat en ölhållare med kylklamp. · REAKTION |
| 7:02 | händelse | printStart | sak=kruka |
| 7:04 | klar | du | Jaha, Rolf har hämtat en ölhållare med kylklamp. |
| 7:05 | händelse | printKlar | sak=kruka n=3 |
| 7:05 | händelse | tagitUrPrint | sak=kruka n=1 |
| 7:07 | hjälp | kontroll | R: Vrid innan du ställer ner |
| 7:07 | väntar | värld:TUUT! Tjena! | TUUT! Tjena! |
| 7:12 | sak | värld:TUUT! Tjena! | TUUT! Tjena! |
| 7:12 | bubbla |  | TUUT! Tjena! |
| 7:15 | klar | värld:TUUT! Tjena! | TUUT! Tjena! |
| 7:15 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 7:17 | händelse | salt | sak=kruka n=1 |
| 7:17 | aliSalt | ali | 105 |
| 7:17 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 7:18 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 7:20 | struken | info:guld | 3D-modell köpt – printa dörr |
| 7:20 | händelse | kopt | sak=dorr |
| 7:20 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 7:32 | händelse | printStart | sak=byggsats:dorr |
| 7:36 | toast | bra | Del 1 av 2 klar |
| 7:36 | väntar | notis:Storebrors skrivare: Del 1 av 2 klar | Storebrors skrivare: Del 1 av 2 klar |
| 7:36 | sak | notis:Storebrors skrivare: Del 1 av 2 klar | Storebrors skrivare: Del 1 av 2 klar |
| 7:36 | notis | bra | Storebrors skrivare: Del 1 av 2 klar |
| 7:38 | klar | notis:Storebrors skrivare: Del 1 av 2 klar | Storebrors skrivare: Del 1 av 2 klar |
| 7:39 | händelse | printKlar | sak=byggsats:dorr n=1 |
| 8:11 | händelse | tagitUrPrint | sak=byggsats:dorr n=1 |
| 8:11 | paket |  | sms |
| 8:11 | väntar | ali | Ali här. Jag har inte sovit. Inte på grund av AI:n. På grund av dig. Du bygger saker av sopor. Jag har en hel butik och bygger ingenting. Det ska ändras. Kanske. Troligen. |
| 8:19 | tanke | du | Dörr på plats! Trivsel +8 |
| 8:19 | väntar | du | Dörr på plats! Trivsel +8 |
| 8:19 | sak | du | Dörr på plats! Trivsel +8 |
| 8:19 | notis | tanke | 💭 Dörr på plats! Trivsel +8 |
| 8:19 | röst | du | Dörr på plats! Trivsel +8 · REAKTION |
| 8:19 | händelse | malKlart | id=n1-bygg-dorr-skjulet del=Dag 2 – Tippen bredvid nasta=sov2 |
| 8:19 | paket |  | lapp |
| 8:19 | väntar | du | Nu vet Ali att jag bor HÄR. Taket läcker. I morgon. |
| 8:19 | paket |  | sms |
| 8:19 | väntar | bror | Mamma ringde mig fyra gånger förresten. Snyggt jobbat 😂 |
| 8:19 | skratt | bror | Mamma ringde mig fyra gånger förresten. |
| 8:19 | bekräftelse | du | plats |
| 8:19 | väntar | du | Sov när du vill. |
| 8:19 | MÅL |  | Sov när du vill |
| 8:22 | klar | du | Dörr på plats! Trivsel +8 |
| 8:22 | sak | du | Nu vet Ali att jag bor HÄR. Taket läcker. I morgon. |
| 8:22 | kvallsrad | du | Nu vet Ali att jag bor HÄR. Taket läcker. I morgon. |
| 8:22 | målruta |  | Sov när du vill |
| 8:22 | klar | du | Nu vet Ali att jag bor HÄR. Taket läcker. I morgon. |
| 8:22 | sak | du | Sov när du vill. |
| 8:22 | pil |  | Sov när du vill |
| 8:22 | röst | du | Sov när du vill. · MÅL |
| 8:23 | kvittens-bock |  | ✓ Bygg en dörr till skjulet |
| 8:24 | klar | du | Sov när du vill. |
| 8:26 | väntar | notis:🌇 Klockan är 21. Ali slår igen luckan.  | 🌇 Klockan är 21. Ali slår igen luckan. Dagens jobb är klart – gå in i skjulet och sov i sängen. |
| 8:31 | autosparning | du | natt 11 december |
| 8:34 | nattkort | du | 🌙 13 dagar kvar. God natt. zzz… Nu vet Ali att jag bor HÄR. Taket läcker. I morgon. DAGENS PRINTAR Blomkruka × 2 Ölhållare med kylklamp × 1 Totalt 3 printar 💰 |

<details><summary>Botens handlingar dag 2</summary>

- 0:00 — dag 2 börjar — (25 kr)
- 0:11 popup: "FORTSÄTT" (25 kr)
- 0:26 nybörjaren ser ingen pil – tittar runt (25 kr)
- 0:30 tjänar pengar till väntar på flaskhalsen för kvarnmotor: 25/65 kr → printar blomkruka (105 kr) (25 kr)
- 0:37 gå till skrivaren (19 m) (25 kr)
- 0:39 printar Blomkruka (25 kr)
- 0:42 tar ut 1 st ur skrivaren (25 kr)
- 0:51 gå till Ali (26 m) (25 kr)
- 0:51 öppnar Alis butik – sälja (25 kr)
- 0:53 säljer hos Ali: +105 kr (130 kr)
- 1:06 öppnar Alis butik – köpa kvarnmotor (130 kr)
- 1:08 köper kvarnmotor för 50 kr (80 kr)
- 1:31 gå till fel håll en bit (4 m) (80 kr)
- 1:41 gå till skrivaren (25 m) (80 kr)
- 1:42 printar Kvarnmotor (80 kr)
- 1:43 gå till cykeln (1 m) (80 kr)
- 1:46 tar ut 1 st ur skrivaren (80 kr)
- 2:00 gå till skruva fast kvarnmotorn (3 m) (80 kr)
- 2:29 plockar 2 skräp på gården (bär max 6) (80 kr)
- 2:37 gå till kvarnen (23 m) (80 kr)
- 2:59 plockar 6 skräp på gården (bär max 6) (80 kr)
- 3:09 gå till kvarnen (29 m) (80 kr)
- 3:15 nybörjaren ser ingen pil – tittar runt (80 kr)
- 3:39 plockar 5 skräp på gården (bär max 6) (80 kr)
- 3:52 gå till kvarnen (35 m) (80 kr)
- 4:08 plockar 6 skräp på gården (bär max 6) (80 kr)
- 4:31 gå till Rolfs sopsäck (25 m) (80 kr)
- 4:32 tar på korg (80 kr)
- 4:33 vet inte vad jag ska göra: "Möt sopbilen vid grinden" (80 kr)
- 5:04 gå till Rolfs postlåda (28 m) (80 kr)
- 5:08 gå till skrivaren (7 m) (80 kr)
- 5:09 printar Ölhållare med kylklamp (80 kr)
- 5:13 tar ut 1 st ur skrivaren (80 kr)
- 5:31 nybörjaren ser ingen pil – tittar runt (80 kr)
- 5:36 valj olhallare: true, vald olhallare, post {"l":null,"tr":null,"tm":[]}, nummer false (80 kr)
- 5:39 gå till Rolfs postlåda (6 m) (80 kr)
- 6:02 gå till Ali (31 m) (80 kr)
- 6:02 öppnar Alis butik – köpa vindsnurra till skjultaket (80 kr)
- 6:04 köper vindsnurra för 50 kr (30 kr)
- 6:14 gå till skrivaren (25 m) (30 kr)
- 6:16 printar Vindsnurra till skjultaket (30 kr)
- 6:17 gå till cykeln (1 m) (30 kr)
- 6:23 tar ut 1 st ur skrivaren (30 kr)
- 6:36 gå till sätt vindsnurran på taket (20 m) (30 kr)
- 6:54 tjänar pengar till dörr: 30/120 kr → printar blomkruka (105 kr) (30 kr)
- 7:01 gå till skrivaren (19 m) (30 kr)
- 7:02 printar Blomkruka (30 kr)
- 7:06 tar ut 1 st ur skrivaren (30 kr)
- 7:15 gå till Ali (26 m) (30 kr)
- 7:15 öppnar Alis butik – sälja (30 kr)
- 7:17 säljer hos Ali: +105 kr (135 kr)
- 7:18 öppnar Alis butik – köpa dörr (135 kr)
- 7:21 köper dorr för 120 kr (15 kr)
- 7:31 gå till skrivaren (25 m) (15 kr)
- 7:32 printar Dörr (2 delar) (15 kr)
- 7:58 plockar 10 skräp på gården (bär max 10) (15 kr)
- 8:10 gå till kvarnen (33 m) (15 kr)
- 8:11 gå till skrivaren (1 m) (15 kr)
- 8:12 tar ut 1 st ur skrivaren (15 kr)
- 8:19 gå till skjulet (21 m) (15 kr)
- 8:31 gå till sängen (1 m) (15 kr)

</details>

## Dag 3

| Tid | Källa | Vem | Text |
|---|---|---|---|
| 8:34 | vara | ali | ingen |
| 8:34 | händelse | malKlart | id=sov2 del=Dag 2 – Tippen bredvid nasta=rolf1-brev |
| 8:34 | bekräftelse | du | plats |
| 8:34 | vara | ali | kruka |
| 8:34 | MÅL |  | Möt sopbilen vid grinden |
| 8:34 | väntar | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått en DÖRR. Och vindsnurra till skjultaket. Mer säger jag inte. Gunnar vet. |
| 8:34 | radio | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått en DÖRR. Och vindsnurra till skjultaket. Mer säger jag inte. Gunnar vet. |
| 8:34 | skratt | du | Radio-Kjelle |
| 8:35 | autosparning | du | morgon 12 december |
| 0:01 | händelse | dagenBorjar | dag=3 |
| 0:01 | meddelande | du | 12 dagar till jul. Utan Rolf kommer jag aldrig in på tippen. |
| 0:01 | dagbokkort | du | Rolfs brev. · 12 dagar till jul. Utan Rolf kommer jag aldrig in på tippen. |
| 0:01 | röst | du | 12 dagar till jul. Rolfs brev. Utan Rolf kommer jag aldrig in på tippen. · STORY |
| 0:07 | väntar | notis:morgon | Ali vill ha idag: Blomkruka · +50 % |
| 0:07 | händelse | morgonkortStangt | dag=3 |
| 0:07 | väntar | ali | Ali här. Jag har inte sovit. Inte på grund av AI:n. På grund av dig. Du bygger saker av sopor. Jag har en hel butik och bygger ingenting. Det ska ändras. Kanske. Troligen. |
| 0:07 | väntar | bror | Mamma ringde mig fyra gånger förresten. Snyggt jobbat 😂 |
| 0:07 | skratt | bror | Mamma ringde mig fyra gånger förresten. |
| 0:07 | väntar | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått en DÖRR. Och vindsnurra till skjultaket. Mer säger jag inte. Gunnar vet. |
| 0:07 | paket |  | sms |
| 0:07 | väntar | ali | Ali här. Satt uppe med AI:n hela natten. Ritningen till Plåttak är klar. Kom innan nio, då stänger jag. |
| 0:07 | väntar | du | Ett nytt brev i Rolfs postlåda. Det läser jag. |
| 0:07 | målruta |  | Möt sopbilen vid grinden |
| 0:12 | sak | du | Ett nytt brev i Rolfs postlåda. Det läser jag. |
| 0:12 | pil |  | Möt sopbilen vid grinden |
| 0:12 | notis | tanke | 💭 Ett nytt brev i Rolfs postlåda. Det läser jag. |
| 0:12 | röst | du | Ett nytt brev i Rolfs postlåda. Det läser jag. · MÅL |
| 0:15 | skratt | du | falsk tuta |
| 0:15 | paket |  | ge |
| 0:15 | väntar |  | (läget ändras) |
| 0:17 | klar | du | Ett nytt brev i Rolfs postlåda. Det läser jag. |
| 0:17 | struken | notis:🌇 Klockan är 21. Ali slår igen luckan.  | 🌇 Klockan är 21. Ali slår igen luckan. Dagens jobb är klart – gå in i skjulet och sov i sängen. |
| 0:17 | struken | ali | Ali här. Jag har inte sovit. Inte på grund av AI:n. På grund av dig. Du bygger saker av sopor. Jag har en hel butik och bygger ingenting. Det ska ändras. Kanske. Troligen. |
| 0:17 | struken | bror | Mamma ringde mig fyra gånger förresten. Snyggt jobbat 😂 |
| 0:17 | skratt | bror | Mamma ringde mig fyra gånger förresten. |
| 0:17 | sak | notis:morgon | Ali vill ha idag: Blomkruka · +50 % |
| 0:17 | notis |  | Blomkruka · +50 % |
| 0:20 | klar | notis:morgon | Ali vill ha idag: Blomkruka · +50 % |
| 0:29 | sak |  | (läget ändras) |
| 0:29 | brev | rolf | rolf:1 |
| 0:29 | klar |  | (läget ändras) |
| 0:37 | tanke | du | En hel kanot. Kvarnen skulle äta upp sig själv. |
| 0:37 | väntar | du | En hel kanot. Kvarnen skulle äta upp sig själv. |
| 0:37 | sak | du | En hel kanot. Kvarnen skulle äta upp sig själv. |
| 0:37 | notis | tanke | 💭 En hel kanot. Kvarnen skulle äta upp sig själv. |
| 0:37 | röst | du | En hel kanot. Kvarnen skulle äta upp sig själv. · REAKTION |
| 0:37 | väntar | rolf | Den funkar! Hä. Ta så mycke skräp du vill. /Rolf​ |
| 0:40 | klar | du | En hel kanot. Kvarnen skulle äta upp sig själv. |
| 0:41 | skratt | du | falsk tuta |
| 0:42 | tanke | du | Nyckeln ska sitta i låset på grinden. |
| 0:42 | väntar | du | Nyckeln ska sitta i låset på grinden. |
| 0:42 | tanke | du | Tratten är stor som en kaffekopp. Tunnan är stor som jag. |
| 0:42 | struken | du | Nyckeln ska sitta i låset på grinden. |
| 0:42 | väntar | du | Tratten är stor som en kaffekopp. Tunnan är stor som jag. |
| 0:43 | hjälp | kontroll | Klick: Klicka för att montera |
| 0:44 | monterat | du | byggsats:tippnyckel |
| 0:44 | händelse | monterat | sak=tippnyckel |
| 0:44 | scenInfo | du | Kameran sveper över tippen |
| 0:47 | brott | KLICK SOM INTE GÅR | "Klicka för att montera" syns men ett klick gör inte det just nu |
| 0:49 | tanke | du | …Det här räcker i hundra år. |
| 0:49 | väntar | du | …Det här räcker i hundra år. |
| 0:49 | sak | rolf | Den funkar! Hä. Ta så mycke skräp du vill. /Rolf​ |
| 0:49 | lapp | Brev från Rolf | Den funkar! Hä. Ta så mycke skräp du vill. /Rolf​ |
| 0:49 | röst | rolf | Den funkar! Hä. Ta så mycke skräp du vill. /Rolf​ · STORY |
| 0:49 | tanke | du | Hård plast. Lilla kvarnen skulle explodera. Eller jag. |
| 0:49 | struken | du | Tratten är stor som en kaffekopp. Tunnan är stor som jag. |
| 0:49 | väntar | du | Hård plast. Lilla kvarnen skulle explodera. Eller jag. |
| 0:49 | paket |  | ge |
| 0:49 | väntar |  | (läget ändras) |
| 0:50 | skratt | du | falsk tuta |
| 0:53 | klar | rolf | Den funkar! Hä. Ta så mycke skräp du vill. /Rolf​ |
| 0:53 | händelse | brevLast | id=rolftack:0 |
| 0:55 | sak | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått en DÖRR. Och vindsnurra till skjultaket. Mer säger jag inte. Gunnar vet. |
| 0:55 | notis |  | 📻 Radio Tippen: Radio Tippen, Kjelle här. Skjulet vid tippen har fått en DÖRR. Och vindsnurra till skjultaket. Mer säger jag inte. Gunnar vet. |
| 0:55 | röst | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått en DÖRR. Och vindsnurra till skjultaket. Mer säger jag inte. Gunnar vet. · REAKTION |
| 0:57 | väntar | rolf | ÖJ! Kajsa knuffa ner min flasköppnare i tippen. Kan du göra en ny, mä magnet? Ritade den på rasten. Ungefär så vill ja ha'n. /Rolf​ |
| 0:57 | paket |  | ge |
| 0:57 | väntar |  | (läget ändras) |
| 0:57 | händelse | malKlart | id=rolf1-brev del=Dag 3 – En skrivare till och taket nasta=n2-hamta-skrap |
| 0:57 | bekräftelse | du | plats |
| 0:57 | struken | du | Hård plast. Lilla kvarnen skulle explodera. Eller jag. |
| 0:57 | väntar | du | Nyckeln till tippen. Där ligger skräpet i högar. |
| 0:57 | MÅL |  | Hämta 5 skräp på soptippen |
| 0:57 | kvitto-visas | rolf | ÖJ! Kajsa knuffa ner min flasköppnare i tippen. Kan du göra en ny, mä magnet? Ritade den på rasten. Ungefär så vill ja ha'n. /Rolf​ |
| 0:57 | sak | rolf | ÖJ! Kajsa knuffa ner min flasköppnare i tippen. Kan du göra en ny, mä magnet? Ritade den på rasten. Ungefär så vill ja ha'n. /Rolf​ |
| 0:57 | lapp | Brev från Rolf | ÖJ! Kajsa knuffa ner min flasköppnare i tippen. Kan du göra en ny, mä magnet? Ritade den på rasten. Ungefär så vill ja ha'n. /Rolf​ |
| 0:57 | kvitto-visas |  | (läget ändras) |
| 0:57 | sak |  | (läget ändras) |
| 0:58 | tanke | du | Fastpressad. Den sitter som i betong. |
| 0:58 | väntar | du | Fastpressad. Den sitter som i betong. |
| 0:58 | kvitto-visas | du | Fastpressad. Den sitter som i betong. |
| 0:58 | sak | du | Fastpressad. Den sitter som i betong. |
| 0:58 | notis | tanke | 💭 Fastpressad. Den sitter som i betong. |
| 0:59 | målruta |  | Hämta 5 skräp på soptippen |
| 1:01 | händelse | malKlart | id=n2-hamta-skrap del=Dag 3 – En skrivare till och taket nasta=rolf1-printa |
| 1:01 | bekräftelse | du | plats |
| 1:01 | väntar | du | Rolf vill ha en flasköppnare. Den printar jag. |
| 1:01 | MÅL |  | Printa flasköppnare med magnet |
| 1:04 | målruta |  | Printa flasköppnare med magnet |
| 1:05 | kvittens-bock |  | ✓ Hämta 5 skräp på soptippen |
| 1:05 | klar | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått en DÖRR. Och vindsnurra till skjultaket. Mer säger jag inte. Gunnar vet. |
| 1:05 | struken | du | Nyckeln till tippen. Där ligger skräpet i högar. |
| 1:07 | sak | du | Rolf vill ha en flasköppnare. Den printar jag. |
| 1:07 | pil |  | Printa flasköppnare med magnet |
| 1:07 | notis | tanke | 💭 Rolf vill ha en flasköppnare. Den printar jag. |
| 1:07 | röst | du | Rolf vill ha en flasköppnare. Den printar jag. · MÅL |
| 1:07 | nick |  | nick:33 |
| 1:12 | klar | du | Rolf vill ha en flasköppnare. Den printar jag. |
| 1:14 | struken | ali | Ali här. Satt uppe med AI:n hela natten. Ritningen till Plåttak är klar. Kom innan nio, då stänger jag. |
| 1:21 | väntar | mamma | Pappa hälsar. Han sa inte det, men jag såg på honom att han ville. |
| 1:25 | händelse | printStart | sak=flaskoppnare |
| 1:25 | händelse | malKlart | id=rolf1-printa del=Dag 3 – En skrivare till och taket nasta=rolf1-ge |
| 1:25 | bekräftelse | du | plats |
| 1:25 | väntar | du | Flasköppnaren är klar. Den lägger jag i Rolfs postlåda. |
| 1:25 | MÅL |  | Ge Rolf flasköppnare med magnet |
| 1:25 | målruta |  | Ge Rolf flasköppnare med magnet |
| 1:25 | sak | du | Flasköppnaren är klar. Den lägger jag i Rolfs postlåda. |
| 1:25 | pil |  | Ge Rolf flasköppnare med magnet |
| 1:25 | notis | tanke | 💭 Flasköppnaren är klar. Den lägger jag i Rolfs postlåda. |
| 1:25 | röst | du | Flasköppnaren är klar. Den lägger jag i Rolfs postlåda. · MÅL |
| 1:29 | händelse | printKlar | sak=flaskoppnare n=1 |
| 1:29 | kvittens-bock |  | ✓ Printa flasköppnare med magnet |
| 1:29 | händelse | tagitUrPrint | sak=flaskoppnare n=1 |
| 1:30 | klar | du | Flasköppnaren är klar. Den lägger jag i Rolfs postlåda. |
| 1:41 | struken | mamma | Pappa hälsar. Han sa inte det, men jag såg på honom att han ville. |
| 1:47 | händelse | lagtIPostlada | sak=flaskoppnare rolf=1 jobb=false |
| 1:47 | händelse | malKlart | id=rolf1-ge del=Dag 3 – En skrivare till och taket nasta=kopBatteri |
| 1:47 | bekräftelse | du | plats |
| 1:47 | väntar | du | Ali har ett gammalt bilbatteri. Då sparar jag strömmen. |
| 1:47 | MÅL |  | Köp Alis gamla bilbatteri |
| 1:47 | upplåst | strom | cykelbatteri |
| 1:47 | brott | UPPLÅST | cykelbatteri (strom 16 av 15, sparat ihop) |
| 1:47 | händelse | upplast | id=cykelbatteri flask=strom |
| 1:47 | paket |  | sms |
| 1:47 | väntar | ali | Ali här. Bilbatteriet ur min gamla Volvo står i lagret. Det sparar mer ström än powerbanken. |
| 1:47 | sak | du | Ali har ett gammalt bilbatteri. Då sparar jag strömmen. |
| 1:47 | målruta |  | Köp Alis gamla bilbatteri |
| 1:47 | pil |  | Köp Alis gamla bilbatteri |
| 1:47 | notis | tanke | 💭 Ali har ett gammalt bilbatteri. Då sparar jag strömmen. |
| 1:47 | röst | du | Ali har ett gammalt bilbatteri. Då sparar jag strömmen. · MÅL |
| 1:47 | nick |  | nick:35 |
| 1:51 | kvittens-bock |  | ✓ Ge Rolf flasköppnare med magnet |
| 1:53 | klar | du | Ali har ett gammalt bilbatteri. Då sparar jag strömmen. |
| 1:55 | brott | TRÄNGSEL 2 | "Ali här. Bilbatteriet ur min gamla Volvo står i la" 2.0 s efter förra meddelandet, 7.7 s efter en klar uppgift |
| 1:55 | sak | ali | Ali här. Bilbatteriet ur min gamla Volvo står i lagret. Det sparar mer ström än powerbanken. |
| 1:55 | sms | ali | Ali här. Bilbatteriet ur min gamla Volvo står i lagret. Det sparar mer ström än powerbanken. |
| 1:55 | sms-bubbla | ali | Ali här. Bilbatteriet ur min gamla Volvo står i lagret. Det sparar mer ström än powerbanken. |
| 1:55 | röst | ali | Ali här. Bilbatteriet ur min gamla Volvo står i lagret. Det sparar mer ström än powerbanken. · STORY |
| 2:05 | klar | ali | Ali här. Bilbatteriet ur min gamla Volvo står i lagret. Det sparar mer ström än powerbanken. |
| 2:18 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 2:18 | röst | ali | Ledig? Vad är det? Har aldrig hört talas om det. · STORY |
| 2:18 | butiksbubbla | ali | Ledig? Vad är det? Har aldrig hört talas om det. |
| 2:20 | toast | guld | 🔋 Bilbatteriet ska kopplas in på cykeln. |
| 2:20 | händelse | kopt | sak=cykelbatteri |
| 2:20 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 2:20 | butiksbubbla | ali | Batteriet ur min gamla Volvo. Bilen dog 2016. Batteriet vägrade. |
| 2:21 | väntar | ali | Batteriet ur min gamla Volvo. Bilen dog 2016. Batteriet vägrade. |
| 2:24 | sak | ali | Batteriet ur min gamla Volvo. Bilen dog 2016. Batteriet vägrade. |
| 2:24 | röst | ali | Batteriet ur min gamla Volvo. Bilen dog 2016. Batteriet vägrade. · STORY |
| 2:31 | klar | ali | Batteriet ur min gamla Volvo. Bilen dog 2016. Batteriet vägrade. |
| 2:36 | skratt | du | falsk tuta |
| 2:39 | sak | du | …Det här räcker i hundra år. |
| 2:39 | notis | tanke | 💭 …Det här räcker i hundra år. |
| 2:39 | röst | du | …Det här räcker i hundra år. · STORY |
| 2:41 | tanke | du | Bilbatteriet är inkopplat – skrivaren printar klart även när du slutar trampa |
| 2:41 | väntar | du | Bilbatteriet är inkopplat – skrivaren printar klart även när du slutar trampa |
| 2:41 | monterat | du | byggsats:cykelbatteri |
| 2:41 | händelse | monterat | sak=cykelbatteri |
| 2:41 | händelse | malKlart | id=kopBatteri del=Dag 3 – En skrivare till och taket nasta=ryggkorg |
| 2:41 | bekräftelse | du | plats |
| 2:41 | kvittens | du | Nu printar den klart även när jag vilar benen. |
| 2:41 | väntar | du | Nu printar den klart även när jag vilar benen. |
| 2:41 | struken | du | Bilbatteriet är inkopplat – skrivaren printar klart även när du slutar trampa |
| 2:41 | väntar | du | Jag springer för mycket. Med en ryggkorg bär jag sexton saker. |
| 2:41 | MÅL |  | Köp ryggkorgen |
| 2:41 | upplåst | bara | ryggkorg |
| 2:41 | brott | UPPLÅST | ryggkorg (bara 3 av 3) |
| 2:41 | händelse | upplast | id=ryggkorg flask=bara |
| 2:41 | paket |  | sms |
| 2:41 | väntar | ali | Ali här. En ryggkorg. AI:n ritade den efter en bild på min mormor. Den rymmer sexton. |
| 2:43 | klar | du | …Det här räcker i hundra år. |
| 2:43 | sak | du | Nu printar den klart även när jag vilar benen. |
| 2:43 | röst | du | Nu printar den klart även när jag vilar benen. · STORY |
| 2:44 | målruta |  | Köp ryggkorgen |
| 2:44 | pil |  | Köp ryggkorgen |
| 2:44 | nick |  | nick:36 |
| 2:48 | klar | du | Nu printar den klart även när jag vilar benen. |
| 2:48 | sak | du | Jag springer för mycket. Med en ryggkorg bär jag sexton saker. |
| 2:48 | notis | tanke | 💭 Jag springer för mycket. Med en ryggkorg bär jag sexton saker. |
| 2:48 | röst | du | Jag springer för mycket. Med en ryggkorg bär jag sexton saker. · MÅL |
| 2:53 | paket |  | tanke |
| 2:53 | tanke | du | Jaha, Rolf har hämtat en flasköppnare med magnet. |
| 2:53 | väntar | du | Jaha, Rolf har hämtat en flasköppnare med magnet. |
| 2:54 | klar | du | Jag springer för mycket. Med en ryggkorg bär jag sexton saker. |
| 2:56 | brott | TRÄNGSEL 2 | "Ali här. En ryggkorg. AI:n ritade den efter en bil" 2.0 s efter förra meddelandet, 14.6 s efter en klar uppgift |
| 2:56 | sak | ali | Ali här. En ryggkorg. AI:n ritade den efter en bild på min mormor. Den rymmer sexton. |
| 2:56 | sms | ali | Ali här. En ryggkorg. AI:n ritade den efter en bild på min mormor. Den rymmer sexton. |
| 2:56 | sms-bubbla | ali | Ali här. En ryggkorg. AI:n ritade den efter en bild på min mormor. Den rymmer sexton. |
| 2:56 | röst | ali | Ali här. En ryggkorg. AI:n ritade den efter en bild på min mormor. Den rymmer sexton. · STORY |
| 3:08 | klar | ali | Ali här. En ryggkorg. AI:n ritade den efter en bild på min mormor. Den rymmer sexton. |
| 3:10 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 3:11 | struken | info:guld | 3D-modell köpt – printa ryggkorg |
| 3:11 | händelse | kopt | sak=ryggkorg |
| 3:11 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 3:16 | sak |  | (läget ändras) |
| 3:16 | brev | rolf | rolf:1 |
| 3:16 | klar |  | (läget ändras) |
| 3:16 | struken | du | Jaha, Rolf har hämtat en flasköppnare med magnet. |
| 3:16 | väntar | mamma | Var är du? |
| 3:24 | händelse | printStart | sak=byggsats:ryggkorg |
| 3:30 | toast | bra | Del 1 av 2 klar |
| 3:36 | händelse | printKlar | sak=byggsats:ryggkorg n=1 |
| 3:36 | tanke | du | Ryggkorg ska jag ha på mig. |
| 3:36 | väntar | du | Ryggkorg ska jag ha på mig. |
| 3:36 | händelse | tagitUrPrint | sak=byggsats:ryggkorg n=1 |
| 3:36 | sak | du | Ryggkorg ska jag ha på mig. |
| 3:36 | notis | tanke | 💭 Ryggkorg ska jag ha på mig. |
| 3:36 | röst | du | Ryggkorg ska jag ha på mig. · REAKTION |
| 3:36 | händelse | malKlart | id=ryggkorg del=Dag 3 – En skrivare till och taket nasta=ryggkorgPa |
| 3:36 | bekräftelse | du | plats |
| 3:36 | väntar | du | Ryggkorgen är klar. På med den. |
| 3:36 | MÅL |  | Ta på ryggkorgen |
| 3:36 | hjälp | kontroll | Klick: Klicka för att ta på dig den |
| 3:38 | klar | du | Ryggkorg ska jag ha på mig. |
| 3:38 | målruta |  | Ta på ryggkorgen |
| 3:40 | kvittens-bock |  | ✓ Printa ryggkorgen |
| 3:42 | sak | du | Ryggkorgen är klar. På med den. |
| 3:42 | pil |  | Ta på ryggkorgen |
| 3:42 | notis | tanke | 💭 Ryggkorgen är klar. På med den. |
| 3:42 | röst | du | Ryggkorgen är klar. På med den. · MÅL |
| 3:44 | klar | du | Ryggkorgen är klar. På med den. |
| 3:51 | tog på | du | byggsats:ryggkorg |
| 3:51 | händelse | monterat | sak=ryggkorg |
| 3:51 | händelse | malKlart | id=ryggkorgPa del=Dag 3 – En skrivare till och taket nasta=n2-bygg-arbetsbord |
| 3:51 | bekräftelse | du | plats |
| 3:51 | kvittens | du | Nu bär jag sexton skräp. |
| 3:51 | väntar | du | Nu bär jag sexton skräp. |
| 3:51 | väntar | du | Ett arbetsbord bredvid skrivaren. Skrivare M ska stå på det. |
| 3:51 | MÅL |  | Bygg ett arbetsbord |
| 3:51 | sak | du | Nu bär jag sexton skräp. |
| 3:51 | röst | du | Nu bär jag sexton skräp. · STORY |
| 3:51 | målruta |  | Bygg ett arbetsbord |
| 3:53 | händelse | printStart | sak=kruka |
| 3:55 | klar | du | Nu bär jag sexton skräp. |
| 3:55 | sak | du | Ett arbetsbord bredvid skrivaren. Skrivare M ska stå på det. |
| 3:55 | pil |  | Bygg ett arbetsbord |
| 3:55 | notis | tanke | 💭 Ett arbetsbord bredvid skrivaren. Skrivare M ska stå på det. |
| 3:55 | röst | du | Ett arbetsbord bredvid skrivaren. Skrivare M ska stå på det. · MÅL |
| 3:58 | paket |  | tanke |
| 3:58 | tanke | du | Den blev… spagetti. Ali kallar det modern konst. |
| 3:58 | väntar | du | Den blev… spagetti. Ali kallar det modern konst. |
| 3:58 | skratt | du | plastspagetti |
| 3:58 | händelse | printKlar | sak=kruka n=4 |
| 3:58 | händelse | tagitUrPrint | sak=spagetti n=1 |
| 4:02 | klar | du | Ett arbetsbord bredvid skrivaren. Skrivare M ska stå på det. |
| 4:07 | väntar | ali | Den köper jag. Ge hit. |
| 4:08 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 4:10 | händelse | salt | sak=spagetti n=1 |
| 4:10 | skratt | du | Ali köper konst |
| 4:10 | aliSalt | ali | 3 |
| 4:10 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 4:19 | väntar | rolf | Morgonbulle på kontoret me polarna. Bengt har ny keps. Vi pratade om den i en timme. Den e grön. /R |
| 4:21 | struken | du | Den blev… spagetti. Ali kallar det modern konst. |
| 4:22 | händelse | printStart | sak=kruka |
| 4:26 | paket |  | tanke |
| 4:26 | tanke | du | Jaha. En kalsong. Använd. |
| 4:26 | väntar | du | Jaha. En kalsong. Använd. |
| 4:26 | skratt | du | kvarnen spottar |
| 4:27 | händelse | printKlar | sak=kruka n=5 |
| 4:27 | händelse | tagitUrPrint | sak=kruka n=1 |
| 4:29 | struken | ali | Den köper jag. Ge hit. |
| 4:30 | väntar | mamma | Var är du? |
| 4:37 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 4:38 | händelse | salt | sak=kruka n=1 |
| 4:38 | aliSalt | ali | 105 |
| 4:38 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 4:40 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 4:41 | struken | info:guld | 3D-modell köpt – printa arbetsbord |
| 4:41 | händelse | kopt | sak=bord |
| 4:41 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 4:51 | struken | du | Jaha. En kalsong. Använd. |
| 4:54 | händelse | printStart | sak=byggsats:bord |
| 4:56 | struken | mamma | Var är du? |
| 5:01 | toast | bra | Del 1 av 3 klar |
| 5:08 | toast | bra | Del 2 av 3 klar |
| 5:08 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 5:08 | väntar | notis:Storebrors skrivare: Tornet är tomt – ma | Storebrors skrivare: Tornet är tomt – mal mer så fortsätter den |
| 5:10 | skratt | du | falsk tuta |
| 5:28 | struken | notis:Storebrors skrivare: Tornet är tomt – ma | Storebrors skrivare: Tornet är tomt – mal mer så fortsätter den |
| 5:37 | händelse | printKlar | sak=byggsats:bord n=1 |
| 5:41 | händelse | tagitUrPrint | sak=byggsats:bord n=1 |
| 5:45 | händelse | placerat | sak=bord |
| 5:45 | händelse | malKlart | id=n2-bygg-arbetsbord del=Dag 3 – En skrivare till och taket nasta=n2-bygg-skrivare-m |
| 5:45 | bekräftelse | du | plats |
| 5:45 | väntar | du | Skrivare M på bordet. Två skrivare, dubbelt så mycket. |
| 5:45 | målruta |  | Spara till Skrivare M · 93 / 180 kr |
| 5:45 | MÅL |  | Spara till Skrivare M · 93 / 180 kr |
| 5:45 | upplåst | skrivare | skrivare2 |
| 5:45 | brott | UPPLÅST | skrivare2 (skrivare 514 av 60) |
| 5:45 | händelse | upplast | id=skrivare2 flask=skrivare |
| 5:45 | paket |  | sms |
| 5:45 | väntar | ali | Ali här. Skrivare M har kommit. Två och en halv gånger snabbare. Snabbare än jag. Jag har inte varit snabb sedan 1998. |
| 5:45 | sak | du | Skrivare M på bordet. Två skrivare, dubbelt så mycket. |
| 5:45 | pil |  | Spara till Skrivare M · 93 / 180 kr |
| 5:45 | notis | tanke | 💭 Skrivare M på bordet. Två skrivare, dubbelt så mycket. |
| 5:45 | röst | du | Skrivare M på bordet. Två skrivare, dubbelt så mycket. · MÅL |
| 5:45 | nick |  | nick:39 |
| 5:49 | kvittens-bock |  | ✓ Bygg ett arbetsbord |
| 5:50 | klar | du | Skrivare M på bordet. Två skrivare, dubbelt så mycket. |
| 6:04 | händelse | printStart | sak=kruka |
| 6:09 | händelse | printKlar | sak=kruka n=6 |
| 6:09 | händelse | tagitUrPrint | sak=kruka n=1 |
| 6:19 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 6:19 | sak | ali | Ali här. Skrivare M har kommit. Två och en halv gånger snabbare. Snabbare än jag. Jag har inte varit snabb sedan 1998. |
| 6:19 | sms | ali | Ali här. Skrivare M har kommit. Två och en halv gånger snabbare. Snabbare än jag. Jag har inte varit snabb sedan 1998. |
| 6:19 | sms-bubbla | ali | Ali här. Skrivare M har kommit. Två och en halv gånger snabbare. Snabbare än jag. Jag har inte varit snabb sedan 1998. |
| 6:19 | röst | ali | Ali här. Skrivare M har kommit. Två och en halv gånger snabbare. Snabbare än jag. Jag har inte varit snabb sedan 1998. · STORY |
| 6:20 | händelse | salt | sak=kruka n=1 |
| 6:20 | aliSalt | ali | 105 |
| 6:20 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 6:32 | klar | ali | Ali här. Skrivare M har kommit. Två och en halv gånger snabbare. Snabbare än jag. Jag har inte varit snabb sedan 1998. |
| 6:34 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 6:35 | struken | info:guld | 3D-modell köpt – printa skrivare M |
| 6:35 | händelse | kopt | sak=skrivare2 |
| 6:35 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 6:48 | händelse | printStart | sak=byggsats:skrivare2 |
| 6:57 | toast | bra | Del 1 av 5 klar |
| 7:05 | väntar | värld:TUUT! Tjena! | TUUT! Tjena! |
| 7:06 | toast | bra | Del 2 av 5 klar |
| 7:15 | toast | bra | Del 3 av 5 klar |
| 7:22 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 7:25 | struken | värld:TUUT! Tjena! | TUUT! Tjena! |
| 7:28 | väntar | värld:Mjau. | Mjau. |
| 7:28 | tanke | du | En husvagn mitt i tippen. Och grinden är låst. |
| 7:28 | väntar | du | En husvagn mitt i tippen. Och grinden är låst. |
| 7:37 | toast | bra | Del 4 av 5 klar |
| 7:46 | händelse | printKlar | sak=byggsats:skrivare2 n=1 |
| 7:48 | händelse | tagitUrPrint | sak=byggsats:skrivare2 n=1 |
| 7:48 | struken | värld:Mjau. | Mjau. |
| 7:48 | struken | du | En husvagn mitt i tippen. Och grinden är låst. |
| 7:49 | tanke | du | Slangen räcker inte ända hit. |
| 7:49 | väntar | du | Slangen räcker inte ända hit. |
| 7:51 | händelse | placerat | sak=skrivare2 |
| 7:51 | paket |  | tanke |
| 7:51 | tanke | du | Den här måste stå i linjen vid kvarnen, annars når inte slangen. |
| 7:51 | väntar | du | Den här måste stå i linjen vid kvarnen, annars når inte slangen. |
| 7:51 | upplåst | skrivare | trim_skrivare2 |
| 7:51 | brott | UPPLÅST | trim_skrivare2 (skrivare 73 av 60) |
| 7:51 | händelse | upplast | id=trim_skrivare2 flask=skrivare |
| 7:51 | paket |  | tanke → sms |
| 7:51 | tanke | du | Skrivare M hinner inte heller. Den kunde gå fortare. |
| 7:51 | väntar | du | Skrivare M hinner inte heller. Den kunde gå fortare. |
| 7:51 | väntar | ali | Ali här. Skrivartrim igen. Nästa nivå. Den här gången skruvade jag åt rätt håll. |
| 7:51 | händelse | malKlart | id=n2-bygg-skrivare-m del=Dag 3 – En skrivare till och taket nasta=n2-lagg-plattak-skjulet |
| 7:51 | bekräftelse | du | plats |
| 7:51 | lapp-kö | 📱 Storebror | VA?! Du har byggt en skrivare TILL?? Du har typ en printfarm nu. Okej. Det är faktiskt ganska ballt. 🔥 |
| 7:51 | väntar | bror | VA?! Du har byggt en skrivare TILL?? Du har typ en printfarm nu. Okej. Det är faktiskt ganska ballt. 🔥 |
| 7:51 | väntar | du | Det regnar in. Plåt på taket, så slipper jag sova i en pöl. |
| 7:52 | MÅL |  | Lägg plåttak på skjulet |
| 7:52 | sak | du | Skrivare M hinner inte heller. Den kunde gå fortare. |
| 7:52 | notis | tanke | 💭 Skrivare M hinner inte heller. Den kunde gå fortare. |
| 7:52 | röst | du | Skrivare M hinner inte heller. Den kunde gå fortare. · STORY |
| 7:54 | målruta |  | Lägg plåttak på skjulet |
| 7:55 | kvittens-bock |  | ✓ Bygg Skrivare M på bordet |
| 7:57 | klar | du | Skrivare M hinner inte heller. Den kunde gå fortare. |
| 7:58 | sak | du | Det regnar in. Plåt på taket, så slipper jag sova i en pöl. |
| 7:58 | pil |  | Lägg plåttak på skjulet |
| 7:58 | notis | tanke | 💭 Det regnar in. Plåt på taket, så slipper jag sova i en pöl. |
| 7:58 | röst | du | Det regnar in. Plåt på taket, så slipper jag sova i en pöl. · MÅL |
| 8:03 | klar | du | Det regnar in. Plåt på taket, så slipper jag sova i en pöl. |
| 8:10 | struken | du | Slangen räcker inte ända hit. |
| 8:15 | händelse | printStart | sak=kruka |
| 8:15 | toast | bra | 🔗 Slangen kopplad |
| 8:18 | händelse | printKlar | sak=kruka n=7 |
| 8:18 | händelse | tagitUrPrint | sak=kruka n=1 |
| 8:27 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 8:28 | sak | ali | Ali här. Skrivartrim igen. Nästa nivå. Den här gången skruvade jag åt rätt håll. |
| 8:28 | sms | ali | Ali här. Skrivartrim igen. Nästa nivå. Den här gången skruvade jag åt rätt håll. |
| 8:28 | sms-bubbla | ali | Ali här. Skrivartrim igen. Nästa nivå. Den här gången skruvade jag åt rätt håll. |
| 8:28 | röst | ali | Ali här. Skrivartrim igen. Nästa nivå. Den här gången skruvade jag åt rätt håll. · STORY |
| 8:29 | händelse | salt | sak=kruka n=1 |
| 8:29 | aliSalt | ali | 105 |
| 8:29 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 8:30 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 8:32 | struken | info:guld | 3D-modell köpt – printa plåttak |
| 8:32 | händelse | kopt | sak=tak |
| 8:32 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 8:36 | klar | ali | Ali här. Skrivartrim igen. Nästa nivå. Den här gången skruvade jag åt rätt håll. |
| 8:38 | skratt | du | falsk tuta |
| 8:44 | händelse | printStart | sak=byggsats:tak |
| 8:48 | toast | bra | Del 1 av 3 klar |
| 8:52 | sak | du | Den här måste stå i linjen vid kvarnen, annars når inte slangen. |
| 8:52 | notis | tanke | 💭 Den här måste stå i linjen vid kvarnen, annars når inte slangen. |
| 8:52 | röst | du | Den här måste stå i linjen vid kvarnen, annars når inte slangen. · STORY |
| 8:52 | toast | bra | Del 2 av 3 klar |
| 8:54 | toast | fel | Ingen ström – trampa cykeln |
| 8:56 | klar | du | Den här måste stå i linjen vid kvarnen, annars når inte slangen. |
| 9:00 | väntar | värld:TUUT TUUT! | TUUT TUUT! |
| 9:04 | händelse | printKlar | sak=byggsats:tak n=1 |
| 9:04 | händelse | tagitUrPrint | sak=byggsats:tak n=1 |
| 9:11 | tanke | du | Plåttak på plats! Trivsel +12 |
| 9:11 | väntar | du | Plåttak på plats! Trivsel +12 |
| 9:11 | sak | du | Plåttak på plats! Trivsel +12 |
| 9:11 | notis | tanke | 💭 Plåttak på plats! Trivsel +12 |
| 9:11 | röst | du | Plåttak på plats! Trivsel +12 · REAKTION |
| 9:11 | händelse | malKlart | id=n2-lagg-plattak-skjulet del=Dag 3 – En skrivare till och taket nasta=rolf2-brev |
| 9:11 | bekräftelse | du | plats |
| 9:11 | MÅL |  | Möt sopbilen vid grinden |
| 9:13 | väntar | foto | Tak över huvudet |
| 9:13 | paket |  | tanke |
| 9:13 | tanke | du | I natt somnar jag torr. Det börjar bli ett hem. |
| 9:13 | väntar | du | I natt somnar jag torr. Det börjar bli ett hem. |
| 9:13 | klar | du | Plåttak på plats! Trivsel +12 |
| 9:13 | sak | du | (nytt mål i rutan) |
| 9:13 | målruta |  | Möt sopbilen vid grinden |
| 9:13 | pil |  | Möt sopbilen vid grinden |
| 9:14 | klar | du | (nytt mål i rutan) |
| 9:15 | kvittens-bock |  | ✓ Lägg plåttak på skjulet |
| 9:20 | struken | värld:TUUT TUUT! | TUUT TUUT! |
| 9:21 | skratt | du | falsk tuta |
| 9:21 | paket |  | ge |
| 9:21 | väntar |  | (läget ändras) |
| 9:23 | sak | bror | VA?! Du har byggt en skrivare TILL?? Du har typ en printfarm nu. Okej. Det är faktiskt ganska ballt. 🔥 |
| 9:23 | sms | bror | VA?! Du har byggt en skrivare TILL?? Du har typ en printfarm nu. Okej. Det är faktiskt ganska ballt. 🔥 |
| 9:23 | sms-bubbla | bror | VA?! Du har byggt en skrivare TILL?? Du har typ en printfarm nu. Okej. Det är faktiskt ganska ballt. 🔥 |
| 9:23 | röst | bror | VA?! Du har byggt en skrivare TILL?? Du har typ en printfarm nu. Okej. Det är faktiskt ganska ballt. 🔥 · STORY |
| 9:32 | klar | bror | VA?! Du har byggt en skrivare TILL?? Du har typ en printfarm nu. Okej. Det är faktiskt ganska ballt. 🔥 |
| 9:34 | väntar | rolf | Nämen. PERFEKT öppnare! Kärran vid lådan ä din. Den gnisslar. Precis som ja. Skriv ditt nummer på en lapp, så slipper ja skriva brev. /Rolf​ |
| 9:34 | struken | info:bra | 🛒 4 skräp från famnen i skottkärran – kärran tar mer än famnen |
| 9:42 | sak | rolf | Nämen. PERFEKT öppnare! Kärran vid lådan ä din. Den gnisslar. Precis som ja. Skriv ditt nummer på en lapp, så slipper ja skriva brev. /Rolf​ |
| 9:42 | lapp | Brev från Rolf | Nämen. PERFEKT öppnare! Kärran vid lådan ä din. Den gnisslar. Precis som ja. Skriv ditt nummer på en lapp, så slipper ja skriva brev. /Rolf​ |
| 9:42 | röst | rolf | Nämen. PERFEKT öppnare! Kärran vid lådan ä din. Den gnisslar. Precis som ja. Skriv ditt nummer på en lapp, så slipper ja skriva brev. /Rolf​ · STORY |
| 9:42 | väntar | bud | (tips) |
| 9:42 | struken | info:bra | 📝 Lappen med mitt nummer ligger i Rolfs postlåda. |
| 9:42 | paket |  | sms |
| 9:42 | väntar | rolf | Rolf hä!! Funkar dä?? ja skrivr mä EN fingr. dä tar sin tid men dä ä int så farligt. Tack ska du ha för nummret, fingrarna tackar oxå. Ja lägger saker i lådan ibland å då sms:ar ja. Int efter tie bara. /R​ |
| 9:42 | paket |  | sms |
| 9:42 | väntar | rolf | Hörru. Morgonbulle på kontoret mä polarna. grannen har ny keps. Vi pratade om den i en timme. Den ä grön. /R​ |
| 9:48 | skratt | du | falsk tuta |
| 9:54 | klar | rolf | Nämen. PERFEKT öppnare! Kärran vid lådan ä din. Den gnisslar. Precis som ja. Skriv ditt nummer på en lapp, så slipper ja skriva brev. /Rolf​ |
| 9:54 | händelse | brevLast | id=rolftack:1 |
| 9:54 | sak | bud | (tips) |
| 9:54 | väntar | du | En skottkärra! Jag väljer den med hjulet och kör den full med skräp. |
| 9:55 | klar | bud | (tips) |
| 9:55 | sak | du | En skottkärra! Jag väljer den med hjulet och kör den full med skräp. |
| 9:55 | röst | du | En skottkärra! Jag väljer den med hjulet och kör den full med skräp. · MÅL |
| 9:56 | paket |  | ge |
| 9:56 | väntar |  | (läget ändras) |
| 9:59 | klar | du | En skottkärra! Jag väljer den med hjulet och kör den full med skräp. |
| 10:00 | väntar | rolf | Tjo. Ska grilla på lördag. Min grillspade smälte. Kan du göra en sån hä? /Rolf 🍖​ |
| 10:00 | paket |  | ge |
| 10:00 | väntar |  | (läget ändras) |
| 10:00 | sak | rolf | Tjo. Ska grilla på lördag. Min grillspade smälte. Kan du göra en sån hä? /Rolf 🍖​ |
| 10:00 | lapp | Brev från Rolf | Tjo. Ska grilla på lördag. Min grillspade smälte. Kan du göra en sån hä? /Rolf 🍖​ |
| 10:00 | röst | rolf | Tjo. Ska grilla på lördag. Min grillspade smälte. Kan du göra en sån hä? /Rolf 🍖​ · STORY |
| 10:00 | händelse | malKlart | id=rolf2-brev del=Dag 4 – Kärran och mer vind nasta=rolf2-printa |
| 10:00 | bekräftelse | du | plats |
| 10:00 | väntar | du | Rolf vill ha en grillspade. Den printar jag. |
| 10:00 | MÅL |  | Printa grillspade |
| 10:00 | kvitto-visas |  | (läget ändras) |
| 10:00 | sak |  | (läget ändras) |
| 10:02 | hjälp | kontroll | E: Ryggsäcken och kistan |
| 10:03 | målruta |  | Printa grillspade |
| 10:07 | klar | rolf | Tjo. Ska grilla på lördag. Min grillspade smälte. Kan du göra en sån hä? /Rolf 🍖​ |
| 10:07 | händelse | brevLast | id=rolf:2 |
| 10:07 | sak | du | Rolf vill ha en grillspade. Den printar jag. |
| 10:07 | pil |  | Printa grillspade |
| 10:07 | notis | tanke | 💭 Rolf vill ha en grillspade. Den printar jag. |
| 10:07 | röst | du | Rolf vill ha en grillspade. Den printar jag. · MÅL |
| 10:07 | nick |  | nick:42 |
| 10:10 | skratt | du | falsk tuta |
| 10:12 | klar | du | Rolf vill ha en grillspade. Den printar jag. |
| 10:14 | brott | TRÄNGSEL 2 | "Rolf hä!! Funkar dä?? ja skrivr mä EN fingr. dä ta" 2.1 s efter förra meddelandet, 13.9 s efter en klar uppgift |
| 10:14 | sak | rolf | Rolf hä!! Funkar dä?? ja skrivr mä EN fingr. dä tar sin tid men dä ä int så farligt. Tack ska du ha för nummret, fingrarna tackar oxå. Ja lägger saker i lådan ibland å då sms:ar ja. Int efter tie bara. /R​ |
| 10:14 | sms | rolf | Rolf hä!! Funkar dä?? ja skrivr mä EN fingr. dä tar sin tid men dä ä int så farligt. Tack ska du ha för nummret, fingrarna tackar oxå. Ja lägger saker i lådan ibland å då sms:ar ja. Int efter tie bara. /R​ |
| 10:14 | sms-bubbla | rolf | Rolf hä!! Funkar dä?? ja skrivr mä EN fingr. dä tar sin tid men dä ä int så farligt. Tack ska du ha för nummret, fingrarna tackar oxå. Ja lägger saker i lådan ibland å då sms:ar ja. Int efter tie bara. /R​ |
| 10:14 | röst | rolf | Rolf hä!! Funkar dä?? ja skrivr mä EN fingr. dä tar sin tid men dä ä int så farligt. Tack ska du ha för nummret, fingrarna tackar oxå. Ja lägger saker i lådan ibland å då sms:ar ja. Int efter tie bara. /R​ · STORY |
| 10:17 | händelse | printStart | sak=grillspade |
| 10:17 | händelse | malKlart | id=rolf2-printa del=Dag 4 – Kärran och mer vind nasta=rolf2-ge |
| 10:17 | bekräftelse | du | plats |
| 10:17 | väntar | du | Grillspaden är klar. Den lägger jag i Rolfs postlåda. |
| 10:17 | MÅL |  | Ge Rolf grillspade |
| 10:20 | målruta |  | Ge Rolf grillspade |
| 10:21 | händelse | printKlar | sak=grillspade n=1 |
| 10:21 | kvittens-bock |  | ✓ Printa grillspade |
| 10:21 | händelse | tagitUrPrint | sak=grillspade n=1 |
| 10:31 | klar | rolf | Rolf hä!! Funkar dä?? ja skrivr mä EN fingr. dä tar sin tid men dä ä int så farligt. Tack ska du ha för nummret, fingrarna tackar oxå. Ja lägger saker i lådan ibland å då sms:ar ja. Int efter tie bara. /R​ |
| 10:31 | sak | du | Grillspaden är klar. Den lägger jag i Rolfs postlåda. |
| 10:31 | pil |  | Ge Rolf grillspade |
| 10:31 | notis | tanke | 💭 Grillspaden är klar. Den lägger jag i Rolfs postlåda. |
| 10:31 | röst | du | Grillspaden är klar. Den lägger jag i Rolfs postlåda. · MÅL |
| 10:35 | klar | du | Grillspaden är klar. Den lägger jag i Rolfs postlåda. |
| 10:52 | händelse | lagtIPostlada | sak=grillspade rolf=2 jobb=false |
| 10:52 | händelse | malKlart | id=rolf2-ge del=Dag 4 – Kärran och mer vind nasta=n3-tom-full-karra |
| 10:52 | bekräftelse | du | plats |
| 10:52 | väntar | du | Kärran rymmer massor. Jag fyller den och tippar allt i kvarnen. |
| 10:52 | MÅL |  | Töm en full kärra i kvarnen |
| 10:52 | målruta |  | Töm en full kärra i kvarnen |
| 10:52 | sak | du | Kärran rymmer massor. Jag fyller den och tippar allt i kvarnen. |
| 10:52 | pil |  | Töm en full kärra i kvarnen |
| 10:52 | notis | tanke | 💭 Kärran rymmer massor. Jag fyller den och tippar allt i kvarnen. |
| 10:52 | röst | du | Kärran rymmer massor. Jag fyller den och tippar allt i kvarnen. · MÅL |
| 10:56 | kvittens-bock |  | ✓ Ge Rolf grillspade |
| 10:58 | klar | du | Kärran rymmer massor. Jag fyller den och tippar allt i kvarnen. |
| 11:09 | sak | foto | Tak över huvudet |
| 11:09 | foto | du | Tak över huvudet |
| 11:11 | karraKlick | du | träff |
| 11:12 | klar | foto | Tak över huvudet |
| 11:13 | karraKlick | du | träff |
| 11:14 | karraKlick | du | träff |
| 11:15 | karraKlick | du | träff |
| 11:16 | karraKlick | du | träff |
| 11:17 | karraKlick | du | träff |
| 11:18 | karraKlick | du | träff |
| 11:19 | karraKlick | du | träff |
| 11:20 | sak | du | I natt somnar jag torr. Det börjar bli ett hem. |
| 11:20 | notis | tanke | 💭 I natt somnar jag torr. Det börjar bli ett hem. |
| 11:20 | röst | du | I natt somnar jag torr. Det börjar bli ett hem. · STORY |
| 11:23 | tanke | du | Det får inte plats. Jag behöver något att tippa i. |
| 11:23 | väntar | du | Det får inte plats. Jag behöver något att tippa i. |
| 11:23 | struken | info:bra | 5 st i tratten · 11 st på marken bredvid |
| 11:23 | händelse | malKlart | id=n3-tom-full-karra del=Dag 4 – Kärran och mer vind nasta=sophallare |
| 11:23 | bekräftelse | du | plats |
| 11:23 | väntar | du | En sophållare bakom kvarnen. Då matar den sig själv. |
| 11:23 | MÅL |  | Köp sophållaren |
| 11:23 | upplåst | bara | matarband |
| 11:23 | brott | UPPLÅST | matarband (bara 0 av 3, sparat ihop) |
| 11:23 | händelse | upplast | id=matarband flask=bara |
| 11:23 | paket |  | sms |
| 11:23 | väntar | ali | Ali här. 🗑️ Sophållaren. Jag frågade AI:n hur man slipper bära skräp. Den gjorde det här. Den har mer fritid än jag. Suck. |
| 11:23 | klar | du | I natt somnar jag torr. Det börjar bli ett hem. |
| 11:24 | struken | rolf | Hörru. Morgonbulle på kontoret mä polarna. grannen har ny keps. Vi pratade om den i en timme. Den ä grön. /R​ |
| 11:25 | sak | du | Det får inte plats. Jag behöver något att tippa i. |
| 11:25 | notis | tanke | 💭 Det får inte plats. Jag behöver något att tippa i. |
| 11:25 | röst | du | Det får inte plats. Jag behöver något att tippa i. · STORY |
| 11:25 | målruta |  | Köp sophållaren |
| 11:27 | kvittens-bock |  | ✓ Töm en full kärra i kvarnen |
| 11:29 | klar | du | Det får inte plats. Jag behöver något att tippa i. |
| 11:31 | sak | du | En sophållare bakom kvarnen. Då matar den sig själv. |
| 11:31 | pil |  | Köp sophållaren |
| 11:31 | notis | tanke | 💭 En sophållare bakom kvarnen. Då matar den sig själv. |
| 11:31 | röst | du | En sophållare bakom kvarnen. Då matar den sig själv. · MÅL |
| 11:31 | nick |  | nick:45 |
| 11:34 | klar | du | En sophållare bakom kvarnen. Då matar den sig själv. |
| 11:41 | brott | TRÄNGSEL 2 | "Ali här. 🗑️ Sophållaren. Jag frågade AI:n hur man" 4.2 s efter förra meddelandet, 17.8 s efter en klar uppgift |
| 11:41 | sak | ali | Ali här. 🗑️ Sophållaren. Jag frågade AI:n hur man slipper bära skräp. Den gjorde det här. Den har mer fritid än jag. Suck. |
| 11:41 | sms | ali | Ali här. 🗑️ Sophållaren. Jag frågade AI:n hur man slipper bära skräp. Den gjorde det här. Den har mer fritid än jag. Suck. |
| 11:41 | sms-bubbla | ali | Ali här. 🗑️ Sophållaren. Jag frågade AI:n hur man slipper bära skräp. Den gjorde det här. Den har mer fritid än jag. Suck. |
| 11:41 | röst | ali | Ali här. 🗑️ Sophållaren. Jag frågade AI:n hur man slipper bära skräp. Den gjorde det här. Den har mer fritid än jag. Suck. · STORY |
| 11:48 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 11:50 | struken | info:guld | 3D-modell köpt – printa sophållare |
| 11:50 | händelse | kopt | sak=matarband |
| 11:50 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 11:53 | klar | ali | Ali här. 🗑️ Sophållaren. Jag frågade AI:n hur man slipper bära skräp. Den gjorde det här. Den har mer fritid än jag. Suck. |
| 12:00 | paket |  | tanke |
| 12:00 | tanke | du | Jaha, Rolf har hämtat en grillspade. |
| 12:00 | väntar | du | Jaha, Rolf har hämtat en grillspade. |
| 12:01 | sak |  | (läget ändras) |
| 12:01 | brev | rolf | rolf:2 |
| 12:01 | klar |  | (läget ändras) |
| 12:03 | händelse | printStart | sak=byggsats:matarband |
| 12:05 | sak |  | (läget ändras) |
| 12:05 | brev | rolf | rolf:2 |
| 12:05 | klar |  | (läget ändras) |
| 12:06 | toast | bra | Del 1 av 3 klar |
| 12:10 | toast | bra | Del 2 av 3 klar |
| 12:12 | toast | fel | Ingen ström – trampa cykeln |
| 12:20 | struken | du | Jaha, Rolf har hämtat en grillspade. |
| 12:21 | händelse | printKlar | sak=byggsats:matarband n=1 |
| 12:21 | händelse | tagitUrPrint | sak=byggsats:matarband n=1 |
| 12:21 | paket |  | sms |
| 12:21 | väntar | ali | Ali igen. Jag har sagt till min bror att jag inte går i pension. Jag startar något. Han skrattade. Jag skrattade också. Men jag menar det. Tack. Säg inget. |
| 12:22 | väntar | värld:TUUT! Tjena! | TUUT! Tjena! |
| 12:22 | hjälp | kontroll | E: Ryggsäcken och kistan |
| 12:24 | händelse | placerat | sak=sophallare |
| 12:24 | tanke | du | Sophållaren står bakom kvarnen! Töm allt skräp i den – den matar kvarnen själv. |
| 12:24 | väntar | du | Sophållaren står bakom kvarnen! Töm allt skräp i den – den matar kvarnen själv. |
| 12:24 | sak | du | Sophållaren står bakom kvarnen! Töm allt skräp i den – den matar kvarnen själv. |
| 12:24 | notis | tanke | 💭 Sophållaren står bakom kvarnen! Töm allt skräp i den – den matar kvarnen själv. |
| 12:24 | röst | du | Sophållaren står bakom kvarnen! Töm allt skräp i den – den matar kvarnen själv. · REAKTION |
| 12:24 | händelse | malKlart | id=sophallare del=Dag 4 – Kärran och mer vind nasta=pall |
| 12:24 | bekräftelse | du | plats |
| 12:24 | kvittens | du | Nu kan jag tömma hela kärran på en gång. |
| 12:24 | väntar | du | Nu kan jag tömma hela kärran på en gång. |
| 12:24 | väntar | du | Jag behöver något att sitta på. En pall. Lagom ambitiöst. |
| 12:24 | MÅL |  | Printa en pall |
| 12:27 | målruta |  | Printa en pall |
| 12:30 | klar | du | Sophållaren står bakom kvarnen! Töm allt skräp i den – den matar kvarnen själv. |
| 12:30 | sak | du | Nu kan jag tömma hela kärran på en gång. |
| 12:30 | röst | du | Nu kan jag tömma hela kärran på en gång. · STORY |
| 12:33 | klar | du | Nu kan jag tömma hela kärran på en gång. |
| 12:34 | sak | du | Jag behöver något att sitta på. En pall. Lagom ambitiöst. |
| 12:34 | pil |  | Printa en pall |
| 12:34 | notis | tanke | 💭 Jag behöver något att sitta på. En pall. Lagom ambitiöst. |
| 12:34 | röst | du | Jag behöver något att sitta på. En pall. Lagom ambitiöst. · MÅL |
| 12:34 | nick |  | nick:46 |
| 12:37 | klar | du | Jag behöver något att sitta på. En pall. Lagom ambitiöst. |
| 12:44 | struken | värld:TUUT! Tjena! | TUUT! Tjena! |
| 12:50 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 12:52 | händelse | kopt | sak=pall |
| 12:52 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 12:52 | röst | ali | Bra val. Folk köper sånt. Jag vet inte varför. · STORY |
| 12:52 | butiksbubbla | ali | Pall? Bra val. Folk köper sånt. Jag vet inte varför. |
| 12:58 | struken | ali | Ali igen. Jag har sagt till min bror att jag inte går i pension. Jag startar något. Han skrattade. Jag skrattade också. Men jag menar det. Tack. Säg inget. |
| 13:04 | händelse | printStart | sak=pall |
| 13:10 | händelse | printKlar | sak=pall n=1 |
| 13:10 | händelse | malKlart | id=pall del=Dag 4 – Kärran och mer vind nasta=vind4 |
| 13:10 | bekräftelse | du | plats |
| 13:10 | väntar | du | En vindsnurra till på skjulets tak. Skrivarna vill ha mer ström. |
| 13:10 | målruta |  | Köp vindsnurran |
| 13:10 | MÅL |  | Köp vindsnurran |
| 13:10 | upplåst | strom | vindsnurra2 |
| 13:10 | brott | UPPLÅST | vindsnurra2 (strom 30 av 15) |
| 13:10 | händelse | upplast | id=vindsnurra2 flask=strom |
| 13:10 | paket |  | sms |
| 13:10 | väntar | ali | Ali här. En snurra till? Taket har plats för två. Vinden har inget emot det. |
| 13:10 | sak | du | En vindsnurra till på skjulets tak. Skrivarna vill ha mer ström. |
| 13:10 | pil |  | Köp vindsnurran |
| 13:10 | notis | tanke | 💭 En vindsnurra till på skjulets tak. Skrivarna vill ha mer ström. |
| 13:10 | röst | du | En vindsnurra till på skjulets tak. Skrivarna vill ha mer ström. · MÅL |
| 13:10 | nick |  | nick:47 |
| 13:13 | händelse | tagitUrPrint | sak=pall n=1 |
| 13:14 | kvittens-bock |  | ✓ Printa en pall |
| 13:16 | klar | du | En vindsnurra till på skjulets tak. Skrivarna vill ha mer ström. |
| 13:23 | händelse | placerat | sak=pall |
| 13:24 | sak | ali | Ali här. En snurra till? Taket har plats för två. Vinden har inget emot det. |
| 13:24 | sms | ali | Ali här. En snurra till? Taket har plats för två. Vinden har inget emot det. |
| 13:24 | sms-bubbla | ali | Ali här. En snurra till? Taket har plats för två. Vinden har inget emot det. |
| 13:24 | röst | ali | Ali här. En snurra till? Taket har plats för två. Vinden har inget emot det. · STORY |
| 13:30 | klar | ali | Ali här. En snurra till? Taket har plats för två. Vinden har inget emot det. |
| 13:38 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 13:39 | struken | info:guld | 3D-modell köpt – printa vindsnurra till skjultaket |
| 13:39 | händelse | kopt | sak=vindsnurra |
| 13:39 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 13:52 | händelse | printStart | sak=byggsats:vindsnurra |
| 13:55 | skratt | du | falsk tuta |
| 13:55 | händelse | printKlar | sak=byggsats:vindsnurra n=1 |
| 13:56 | struken | info:guld | 🌬️ Vindsnurran ska upp på skjulets tak. |
| 13:56 | händelse | tagitUrPrint | sak=byggsats:vindsnurra n=1 |
| 14:03 | hjälp | kontroll | Klick: Klicka för att montera |
| 14:04 | händelse | placerat | sak=vindsnurra |
| 14:04 | struken | info:guld | 🌬️ Vindsnurran sitter på taket – den trampar cykeln åt mig när det blåser |
| 14:04 | monterat | du | byggsats:vindsnurra |
| 14:04 | händelse | monterat | sak=vindsnurra |
| 14:04 | händelse | malKlart | id=vind4 del=Dag 4 – Kärran och mer vind nasta=n3-isolera-tva-vaggar |
| 14:04 | bekräftelse | du | plats |
| 14:04 | lapp | 📔 Dagbok | Slut på trampandet. Nästan. |
| 14:04 | dagbokrad | du | Slut på trampandet. Nästan. |
| 14:04 | väntar | notis:Slut på trampandet. Nästan. | Slut på trampandet. Nästan. |
| 14:04 | väntar | du | Det drar genom väggarna. Isolering, och sen blir det varmt. |
| 14:04 | MÅL |  | Isolera två väggar · 0/2 |
| 14:04 | paket |  | replik |
| 14:04 | väntar | rolf | Hoppa in. Ja ska visa dej en grej. |
| 14:04 | sak | notis:Slut på trampandet. Nästan. | Slut på trampandet. Nästan. |
| 14:04 | notis | dagbok | Slut på trampandet. Nästan. |
| 14:06 | klar | notis:Slut på trampandet. Nästan. | Slut på trampandet. Nästan. |
| 14:06 | sak | rolf | Hoppa in. Ja ska visa dej en grej. |
| 14:06 | notis |  | Rolf: ”Hoppa in. Ja ska visa dej en grej.” |
| 14:06 | röst | rolf | Hoppa in. Ja ska visa dej en grej. · STORY |
| 14:06 | målruta |  | Isolera två väggar · 0/2 |
| 14:10 | skratt | du | däcket rullar iväg |
| 14:10 | klar | rolf | Hoppa in. Ja ska visa dej en grej. |
| 14:11 | sak | du | Det drar genom väggarna. Isolering, och sen blir det varmt. |
| 14:11 | pil |  | Isolera två väggar · 0/2 |
| 14:11 | notis | tanke | 💭 Det drar genom väggarna. Isolering, och sen blir det varmt. |
| 14:11 | röst | du | Det drar genom väggarna. Isolering, och sen blir det varmt. · MÅL |
| 14:11 | nick |  | nick:48 |
| 14:14 | händelse | pappa | Pappa ringer |
| 14:16 | klar | du | Det drar genom väggarna. Isolering, och sen blir det varmt. |
| 14:28 | röst | pappa | Hej. Det är pappa. · STORY |
| 14:31 | röst | du | Hej pappa. · STORY |
| 14:33 | röst | pappa | Mamma står bredvid. Hon säger att jag ska fråga om du äter. · STORY |
| 14:38 | röst | du | Jag äter. Och jag har en egen kvarn nu. Och en 3D-skrivare. · STORY |
| 14:42 | röst | pappa | Jaha. En kvarn. Vad lugnt då. · STORY |
| 14:45 | röst | pappa | Jag kanske kommer förbi nån dag. Om det passar. · STORY |
| 14:49 | röst | du | Det passar. · STORY |
| 14:52 | röst | pappa | Bra. Hej då då. · STORY |
| 15:00 | händelse | samtalSlut | id=pappa4 |
| 15:08 | händelse | printStart | sak=pall |
| 15:13 | händelse | printKlar | sak=pall n=2 |
| 15:14 | händelse | tagitUrPrint | sak=pall n=1 |
| 15:21 | väntar | ali | Kom in och titta. Titta är gratis. Nästan. |
| 15:21 | sak | ali | Kom in och titta. Titta är gratis. Nästan. |
| 15:21 | röst | ali | Kom in och titta. Titta är gratis. Nästan. · SMÅPRAT |
| 15:22 | bubbla |  | Kom in och titta. Titta är gratis. Nästan. |
| 15:23 | väntar | ali | Den köper jag. Ge hit. |
| 15:23 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 15:25 | händelse | salt | sak=pall n=1 |
| 15:25 | aliSalt | ali | 180 |
| 15:25 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 15:26 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 15:26 | klar | ali | Kom in och titta. Titta är gratis. Nästan. |
| 15:28 | struken | info:guld | 3D-modell köpt – printa isolerskiva (vägg) |
| 15:28 | händelse | kopt | sak=vaggar |
| 15:28 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 15:35 | sak | ali | Den köper jag. Ge hit. |
| 15:35 | röst | ali | Den köper jag. Ge hit. · REAKTION |
| 15:35 | upprepning | ali | Den köper jag. Ge hit. |
| 15:35 | skratt | du | falsk tuta |
| 15:37 | klar | ali | Den köper jag. Ge hit. |
| 15:40 | händelse | printStart | sak=byggsats:vaggar |
| 15:44 | händelse | printKlar | sak=byggsats:vaggar n=1 |
| 15:45 | händelse | tagitUrPrint | sak=byggsats:vaggar n=1 |
| 15:52 | tanke | du | Bakväggen klar. 3 kvar. |
| 15:52 | väntar | du | Bakväggen klar. 3 kvar. |
| 15:52 | sak | du | Bakväggen klar. 3 kvar. |
| 15:52 | notis | tanke | 💭 Bakväggen klar. 3 kvar. |
| 15:52 | röst | du | Bakväggen klar. 3 kvar. · REAKTION |
| 15:54 | klar | du | Bakväggen klar. 3 kvar. |
| 16:09 | scenInfo | rolf | Rolf kör upp till sin bänk |
| 16:11 | morgonkort | ⏸️ Pausad | ⏸️ Pausad · Klicka för att fortsätta. |
| 16:13 | röst | rolf | Kall öl ä viktigt. · STORY |
| 16:13 | bubbla | rolf | Kall öl ä viktigt. |
| 16:21 | röst | rolf | Ja kommer hit varje kväll. Förr va vi två på bänken. · STORY |
| 16:21 | bubbla | rolf | Ja kommer hit varje kväll. Förr va vi två på bänken. |
| 16:39 | röst | rolf | Dä där ä Bengt-Åke. Vinka int. · STORY |
| 16:39 | bubbla | rolf | Dä där ä Bengt-Åke. Vinka int. |
| 16:53 | skratt | du | falsk tuta |
| 16:54 | röst | rolf | Den ä skyldig mej pengar. · STORY |
| 16:54 | bubbla | rolf | Den ä skyldig mej pengar. |
| 17:03 | väntar | foto | Rolfs bänk |
| 17:03 | paket |  | tanke |
| 17:03 | tanke | du | Han kommer hit varje kväll. Nu vet jag var. |
| 17:03 | väntar | du | Han kommer hit varje kväll. Nu vet jag var. |
| 17:03 | skratt | du | Rolfs bänk |
| 17:09 | sak | foto | Rolfs bänk |
| 17:09 | foto | du | Rolfs bänk |
| 17:11 | lapp | Dagbok | Tre dagar. Om tolv dagar är det jul. |
| 17:11 | röst | du | Tre dagar. Om tolv dagar är det jul. · REAKTION |
| 17:12 | klar | foto | Rolfs bänk |
| 17:22 | sak | du | Han kommer hit varje kväll. Nu vet jag var. |
| 17:22 | notis | tanke | 💭 Han kommer hit varje kväll. Nu vet jag var. |
| 17:22 | röst | du | Han kommer hit varje kväll. Nu vet jag var. · STORY |
| 17:24 | händelse | printStart | sak=byggsats:vaggar |
| 17:26 | klar | du | Han kommer hit varje kväll. Nu vet jag var. |
| 17:28 | händelse | printKlar | sak=byggsats:vaggar n=1 |
| 17:28 | händelse | tagitUrPrint | sak=byggsats:vaggar n=1 |
| 17:36 | tanke | du | Vänster vägg klar. 2 kvar. |
| 17:36 | väntar | du | Vänster vägg klar. 2 kvar. |
| 17:36 | sak | du | Vänster vägg klar. 2 kvar. |
| 17:36 | notis | tanke | 💭 Vänster vägg klar. 2 kvar. |
| 17:36 | röst | du | Vänster vägg klar. 2 kvar. · REAKTION |
| 17:36 | händelse | malKlart | id=n3-isolera-tva-vaggar del=Dag 4 – Kärran och mer vind nasta=sov4 |
| 17:36 | paket |  | lapp |
| 17:36 | väntar | du | Nu vet Rolf att jag bor HÄR. Benen orkar inte trampa mer. |
| 17:36 | bekräftelse | du | plats |
| 17:36 | MÅL |  | Sov när du vill |
| 17:38 | klar | du | Vänster vägg klar. 2 kvar. |
| 17:38 | sak | du | Nu vet Rolf att jag bor HÄR. Benen orkar inte trampa mer. |
| 17:38 | kvallsrad | du | Nu vet Rolf att jag bor HÄR. Benen orkar inte trampa mer. |
| 17:39 | målruta |  | Sov när du vill |
| 17:39 | klar | du | Nu vet Rolf att jag bor HÄR. Benen orkar inte trampa mer. |
| 17:39 | sak | du | (nytt mål i rutan) |
| 17:39 | pil |  | Sov när du vill |
| 17:39 | klar | du | (nytt mål i rutan) |
| 17:40 | kvittens-bock |  | ✓ Isolera två väggar · 2/2 |
| 17:43 | väntar | notis:🌇 Klockan är 21. Ali slår igen luckan.  | 🌇 Klockan är 21. Ali slår igen luckan. Dagens jobb är klart – gå in i skjulet och sov i sängen. |
| 17:47 | autosparning | du | natt 12 december |
| 17:49 | nattkort | du | 🌙 12 dagar kvar. God natt. zzz… Nu vet Rolf att jag bor HÄR. Benen orkar inte trampa mer. DAGENS PRINTAR Blomkruka × 4 Pall × 2 Flasköppnare med magnet × 1 Gri |

<details><summary>Botens handlingar dag 3</summary>

- 0:00 — dag 3 börjar — (15 kr)
- 0:07 popup: "FORTSÄTT" (15 kr)
- 0:37 gå till Rolfs postlåda (28 m) (15 kr)
- 0:42 panel: "Rolfs postlåda
Det här låg i l" (75 kr)
- 0:44 gå till sätt nyckeln i låset (3 m) (75 kr)
- 0:57 gå till Rolfs postlåda (1 m) (75 kr)
- 1:06 plockar 10 skräp på tippen (bär max 10) (75 kr)
- 1:09 gå till kvarnen (8 m) (75 kr)
- 1:23 gå till skrivaren (3 m) (75 kr)
- 1:25 printar Flasköppnare med magnet (75 kr)
- 1:30 tar ut 1 st ur skrivaren (75 kr)
- 1:39 nybörjaren ser ingen pil – tittar runt (75 kr)
- 1:44 valj flaskoppnare: true, vald flaskoppnare, post {"l":null,"tr":null,"tm":[]}, nummer false (75 kr)
- 1:47 gå till Rolfs postlåda (6 m) (75 kr)
- 2:18 gå till Ali (32 m) (75 kr)
- 2:18 öppnar Alis butik – bilbatteriet (75 kr)
- 2:21 köper cykelbatteri för 10 kr (65 kr)
- 2:41 gå till koppla in bilbatteriet vid cykeln (24 m) (65 kr)
- 3:10 gå till Ali (24 m) (65 kr)
- 3:10 öppnar Alis butik – köpa ryggkorg (65 kr)
- 3:12 köper ryggkorg för 40 kr (25 kr)
- 3:22 gå till skrivaren (25 m) (25 kr)
- 3:24 printar Ryggkorg (2 delar) (25 kr)
- 3:37 tar ut 1 st ur skrivaren (25 kr)
- 3:46 nybörjaren ser ingen pil – tittar runt (25 kr)
- 3:51 tar på ryggkorg (25 kr)
- 3:51 tjänar pengar till arbetsbord: 25/40 kr → printar blomkruka (105 kr) (25 kr)
- 3:53 printar Blomkruka (25 kr)
- 3:59 tar ut 1 st ur skrivaren (25 kr)
- 4:08 gå till Ali (25 m) (25 kr)
- 4:08 öppnar Alis butik – sälja (25 kr)
- 4:10 säljer hos Ali: +3 kr (28 kr)
- 4:11 tjänar pengar till arbetsbord: 28/40 kr → printar blomkruka (105 kr) (28 kr)
- 4:20 gå till skrivaren (25 m) (28 kr)
- 4:22 printar Blomkruka (28 kr)
- 4:28 tar ut 1 st ur skrivaren (28 kr)
- 4:37 gå till Ali (25 m) (28 kr)
- 4:37 öppnar Alis butik – sälja (28 kr)
- 4:39 säljer hos Ali: +105 kr (133 kr)
- 4:40 öppnar Alis butik – köpa arbetsbord (133 kr)
- 4:42 köper bord för 40 kr (93 kr)
- 4:52 gå till skrivaren (25 m) (93 kr)
- 4:54 printar Arbetsbord (3 delar) (93 kr)
- 5:16 plockar 1 skräp på gården (bär max 16) (93 kr)
- 5:29 gå till kvarnen (36 m) (93 kr)
- 5:36 plockar 4 skräp på tippen (bär max 16) (93 kr)
- 5:39 gå till kvarnen (7 m) (93 kr)
- 5:41 gå till skrivaren (3 m) (93 kr)
- 5:41 tar ut 1 st ur skrivaren (93 kr)
- 5:44 gå till platsen för arbetsbord (5 m) (93 kr)
- 5:45 ställer ut arbetsbord (93 kr)
- 6:01 tjänar pengar till Skrivare M: 93/180 kr → printar blomkruka (105 kr) (93 kr)
- 6:02 gå till skrivaren (2 m) (93 kr)
- 6:04 printar Blomkruka (93 kr)
- 6:10 tar ut 1 st ur skrivaren (93 kr)
- 6:19 gå till Ali (26 m) (93 kr)
- 6:19 öppnar Alis butik – sälja (93 kr)
- 6:21 säljer hos Ali: +105 kr (198 kr)
- 6:34 öppnar Alis butik – köpa skrivare m (198 kr)
- 6:36 köper skrivare2 för 180 kr (18 kr)
- 6:46 gå till skrivaren (25 m) (18 kr)
- 6:48 printar Skrivare M (5 delar) (18 kr)
- 7:30 plockar 1 skräp på tippen (bär max 16) (18 kr)
- 7:34 gå till kvarnen (9 m) (18 kr)
- 7:48 gå till skrivaren (3 m) (18 kr)
- 7:48 tar ut 1 st ur skrivaren (18 kr)
- 7:50 gå till platsen för skrivare m (5 m) (18 kr)
- 7:51 ställer ut skrivare m (18 kr)
- 8:13 tjänar pengar till plåttak: 18/90 kr → printar blomkruka (105 kr) (18 kr)
- 8:15 printar Blomkruka (18 kr)
- 8:19 tar ut 1 st ur skrivaren (18 kr)
- 8:27 gå till Ali (24 m) (18 kr)
- 8:27 öppnar Alis butik – sälja (18 kr)
- 8:29 säljer hos Ali: +105 kr (123 kr)
- 8:30 öppnar Alis butik – köpa plåttak (123 kr)
- 8:33 köper tak för 90 kr (33 kr)
- 8:43 gå till skrivaren (24 m) (33 kr)
- 8:44 printar Plåttak (3 delar) (33 kr)
- 9:05 tar ut 1 st ur skrivaren (33 kr)
- 9:11 gå till skjulet (17 m) (33 kr)
- 9:20 nybörjaren ser ingen pil – tittar runt (33 kr)
- 9:34 gå till Rolfs postlåda (27 m) (33 kr)
- 9:42 panel: "Rolfs postlåda
Det här låg i l" (153 kr)
- 9:43 vet inte vad jag ska göra: "Möt sopbilen vid grinden" (153 kr)
- 10:05 plockar 1 skräp på tippen (bär max 16) (153 kr)
- 10:09 gå till kvarnen (10 m) (153 kr)
- 10:15 gå till skrivaren (5 m) (153 kr)
- 10:17 printar Grillspade (153 kr)
- 10:22 tar ut 1 st ur skrivaren (153 kr)
- 10:41 nybörjaren ser ingen pil – tittar runt (153 kr)
- 10:46 valj grillspade: true, vald grillspade, post {"l":null,"tr":null,"tm":[]}, nummer true (153 kr)
- 10:47 gå till fel håll en bit (4 m) (153 kr)
- 10:52 gå till Rolfs postlåda (8 m) (153 kr)
- 11:04 nybörjaren ser ingen pil – tittar runt (153 kr)
- 11:20 fyller kärran med 8 skräp (153 kr)
- 11:23 gå till kvarnen (8 m) (153 kr)
- 11:48 gå till Ali (31 m) (153 kr)
- 11:48 öppnar Alis butik – köpa sophållare (153 kr)
- 11:51 köper matarband för 40 kr (113 kr)
- 12:01 gå till skrivaren (24 m) (113 kr)
- 12:03 printar Sophållare (3 delar) (113 kr)
- 12:22 tar ut 1 st ur skrivaren (113 kr)
- 12:24 gå till kvarnen (5 m) (113 kr)
- 12:50 gå till Ali (29 m) (113 kr)
- 12:50 öppnar Alis butik – köpa receptet pall (113 kr)
- 12:53 köper pall för 30 kr (83 kr)
- 13:03 gå till skrivaren (24 m) (83 kr)
- 13:04 printar Pall (83 kr)
- 13:13 gå till skrivaren (4 m) (83 kr)
- 13:14 tar ut 1 st ur skrivaren (83 kr)
- 13:22 gå till platsen för pall (23 m) (83 kr)
- 13:23 ställer ut pall (83 kr)
- 13:38 gå till Ali (16 m) (83 kr)
- 13:38 öppnar Alis butik – köpa vindsnurra till skjultaket (83 kr)
- 13:40 köper vindsnurra för 50 kr (33 kr)
- 13:50 gå till skrivaren (24 m) (33 kr)
- 13:52 printar Vindsnurra till skjultaket (33 kr)
- 13:57 tar ut 1 st ur skrivaren (33 kr)
- 14:04 gå till sätt vindsnurran på taket (18 m) (33 kr)
- 14:28 popup: "Svara E" (33 kr)
- 14:44 popup: "Nästa E" (33 kr)
- 14:50 popup: "Nästa E" (33 kr)
- 14:55 popup: "Nästa E" (33 kr)
- 15:00 popup: "Lägg på E" (33 kr)
- 15:00 tjänar pengar till isolerskiva (vägg): 33/50 kr → printar pall (180 kr) (33 kr)
- 15:06 gå till skrivaren (18 m) (33 kr)
- 15:08 printar Pall (33 kr)
- 15:14 tar ut 1 st ur skrivaren (33 kr)
- 15:23 gå till Ali (25 m) (33 kr)
- 15:23 öppnar Alis butik – sälja (33 kr)
- 15:25 säljer hos Ali: +180 kr (213 kr)
- 15:26 öppnar Alis butik – köpa isolerskiva (vägg) (213 kr)
- 15:29 köper vaggar för 50 kr (163 kr)
- 15:39 gå till skrivaren (24 m) (163 kr)
- 15:40 printar Isolerskiva (vägg) (163 kr)
- 15:45 tar ut 1 st ur skrivaren (163 kr)
- 15:52 gå till skjulet (bak) (17 m) (163 kr)
- 16:09 gå till sopbilen (Rolfs bänk) (38 m) (163 kr)
- 16:11 startmenyn syns – fortsätter spelet (163 kr)
- 17:10 tillbaka från Rolfs bänk (163 kr)
- 17:15 panel: "Dagbok
Före och efter
10 decem" (163 kr)
- 17:22 gå till skrivaren (19 m) (163 kr)
- 17:24 printar Isolerskiva (vägg) (163 kr)
- 17:29 tar ut 1 st ur skrivaren (163 kr)
- 17:36 gå till skjulet (vanster) (19 m) (163 kr)
- 17:47 gå till sängen (1 m) (163 kr)

</details>

## Dag 4

| Tid | Källa | Vem | Text |
|---|---|---|---|
| 17:49 | vara | ali | pall |
| 17:49 | händelse | malKlart | id=sov4 del=Dag 4 – Kärran och mer vind nasta=rolf3-brev |
| 17:49 | bekräftelse | du | plats |
| 17:49 | MÅL |  | Möt sopbilen vid grinden |
| 17:49 | väntar | mamma | Det finns måsar vid soptippar! Dom tar mat. Och små hundar. Du är inte en liten hund men ändå. |
| 17:49 | paket |  | sms |
| 17:49 | väntar | rolf | Hörru. Röda backar ä bra plast. Om man har rätt kvarn. /R​ |
| 17:49 | väntar | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått TAK. Och börjat isolera. Skriv in, Gunnar. Du skriver aldrig in. |
| 17:49 | radio | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått TAK. Och börjat isolera. Skriv in, Gunnar. Du skriver aldrig in. |
| 17:49 | skratt | du | Radio-Kjelle |
| 17:51 | autosparning | du | morgon 13 december |

<details><summary>Botens handlingar dag 4</summary>

- 0:00 — dag 4 börjar — (163 kr)

</details>
