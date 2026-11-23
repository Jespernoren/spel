# Nybörjarboten – körning 1

*A-081: samma händer som AX, men boten vet bara det som syns (målrutan, pilen, det som sägs). Går 3 m/s, läser 60 ms per tecken, följer pilen, tittar runt när målet är otydligt och går fel ibland.*

| Dag | Minuter | FÖRVIRRAD | FAST | TRÄNGSEL | HANN INTE LÄSA | DOLT | NY SAK UTAN FÖRKLARING | OKÄNT ORD |
|---|---|---|---|---|---|---|---|---|
| 3 | 13.1 | 1 | 0 | 3 | 2 | 0 | 1 | 0 |

## Flaggor (7)

- **NY SAK UTAN FÖRKLARING** dag 3 0:29: byta: ingen text eller bild har förklarat det innan första gången
- **HANN INTE LÄSA** dag 3 0:32: "💭 En hel kanot. Kvarnen skulle äta upp sig själv." stod 2.9 s av 5.0 s
- **HANN INTE LÄSA** dag 3 0:32: "💭 Tratten är stor som en kaffekopp. Tunnan är sto" stod 2.0 s av 5.6 s
- **TRÄNGSEL** dag 3 0:42: tanke-text ”💭 En hel kanot. Kvarnen skulle äta upp ” och tanke-text ”💭 Tratten är stor som en kaffekopp. Tun” inom 1.4 s
- **TRÄNGSEL** dag 3 0:43: tanke-text ”💭 Tratten är stor som en kaffekopp. Tun” och tanke-text ”💭 Däcket ville inte stanna. Jag förstår” inom 1.5 s
- **TRÄNGSEL** dag 3 0:44: tanke-text ”💭 Däcket ville inte stanna. Jag förstår” och tanke-text ”💭 Hård plast. Lilla kvarnen skulle expl” inom 0.5 s
- **FÖRVIRRAD** dag 3 11:26: pilen pekar 40 m från där målet görs (sopbilen (Rolfs bänk))

## Friktionskurvan (sekunder per mål: nybörjaren mot AX)

| Dag | Mål | Nybörjaren | AX | × |
|---|---|---|---|---|
| 3 | Möt sopbilen vid grinden | 0 | – | – |
| 3 | Möt sopbilen vid grinden | 29 | – | – |
| 3 | Hämta 5 skräp på soptippen | 5 | – | – |
| 3 | Printa flasköppnare med magnet | 37 | – | – |
| 3 | Ge Rolf flasköppnare med magnet | 23 | – | – |
| 3 | Köp Alis gamla bilbatteri | 58 | – | – |
| 3 | Spara till ryggkorgen · 67 / 120 kr | 73 | – | – |
| 3 | Ta på ryggkorgen | 15 | – | – |
| 3 | Bygg ett arbetsbord | 107 | – | – |
| 3 | Spara till Skrivare M · 37 / 500 kr | 230 | – | – |
| 3 | Lägg plåttak på skjulet | 80 | – | – |

---

# Simulering kapitel 1 – körning 1

*Gjord 2026-11-23 07:16 med `verktyg/sim-kapitel1.mjs` + `verktyg/sim-bot.js` (punkt AX). Boten går 4,5 m/s, läser 15 tecken/s, trampar, vevar, plockar, printar, köper och säljer via spelets egna funktioner. Tiderna är speltid.*

## Sammanfattning

| Dag | Minuter | Väntan | Prints (totalt) | Kr vid sömn | Bär | Trivsel |
|---|---|---|---|---|---|---|
| 3 | 13.1 | 0 % | 25 | 25 | 16 | 77 |

## Flaskhalskartan (EE)

| Dag | bara | mala | trampa | strom | skrivare | inkomst | Upplåst |
|---|---|---|---|---|---|---|---|
| 3 | 0 | 58 | 0 | 15 | 590 | 0 | cykelbatteri (strom, 1:34), ryggkorg (bara, 3:16), skrivare2 (skrivare, 5:47) |

TIDIG: 0 · FAST: 0 · upplåst av reserven (målet väntade 3 min): 0

**SKRATT:** 16 roliga ögonblick på 13 min (12.2 per 10 min, mål minst 5)

**Köp:**

- dag 3 2:11 – cykelbatteri (30 kr)
- dag 3 3:19 – ryggkorg (120 kr)
- dag 3 4:22 – bord (120 kr)
- dag 3 8:08 – skrivare2 (500 kr)
- dag 3 10:18 – tak (250 kr)

## Storykedjan (kvittens → varför → nytt mål)

| Dag | Tid | Id | Kvittens | Varför | Nytt mål | Tid till målet |
|---|---|---|---|---|---|---|
| 3 | 2:32 | kopBatteri | Nu printar den klart även när jag vilar benen. |  | Jag springer för mycket. Med en ryggkorg bär jag sexton sake | 0.0 s |
| 3 | 4:00 | ryggkorgPa | Nu bär jag sexton skräp. |  | Ett arbetsbord bredvid skrivaren. Skrivare M ska stå på det. | 1.4 s |

## Hur länge nya mål väntade (från att förra målet blev klart till att det nya syntes i målrutan)

Snitt 1.8 s · max 2.6 s · över 4 s: 0 · över 8 s: 0 av 10

## Flaggor (21)

- **KROCK** dag 3 0:29: 0.4 s mellan [lapp] "ÖJ! Kajsa knuffa ner min flasköppnare i tippen. Kan du göra " och [notis] "💭 En hel kanot. Kvarnen skulle äta upp sig själv."
- **KROCK** dag 3 0:30: 1.4 s mellan [notis] "💭 En hel kanot. Kvarnen skulle äta upp sig själv." och [notis] "💭 Tratten är stor som en kaffekopp. Tunnan är stor som jag."
- **KROCK** dag 3 0:32: 1.5 s mellan [notis] "💭 Tratten är stor som en kaffekopp. Tunnan är stor som jag." och [notis] "💭 Däcket ville inte stanna. Jag förstår det."
- **KROCK** dag 3 0:32: 0.5 s mellan [notis] "💭 Däcket ville inte stanna. Jag förstår det." och [notis] "💭 Hård plast. Lilla kvarnen skulle explodera. Eller jag."
- **KROCK** dag 3 12:44: 1.4 s mellan [notis] "Rolf: ”Hoppa in. Ja ska visa dej en grej.”" och [lapp] "Tre dagar. Om nitton dagar är det jul."
- **SAMTIDIGT** dag 3 0:29: "ÖJ! Kajsa knuffa ner min flasköppnare i " och "En hel kanot. Kvarnen skulle äta upp sig"
- **SAMTIDIGT** dag 3 0:30: "En hel kanot. Kvarnen skulle äta upp sig" och "Tratten är stor som en kaffekopp. Tunnan"
- **SAMTIDIGT** dag 3 0:32: "Tratten är stor som en kaffekopp. Tunnan" och "Däcket ville inte stanna. Jag förstår de"
- **SAMTIDIGT** dag 3 0:32: "Däcket ville inte stanna. Jag förstår de" och "Hård plast. Lilla kvarnen skulle explode"
- **PAUS** dag 3 0:40: 0.1 s paus före "Rolf vill ha en flasköppnare. Den printar jag."
- **PAUS** dag 3 1:41: 0.0 s paus före "Ali har ett gammalt bilbatteri. Då sparar jag strö"
- **PAUS** dag 3 2:39: 0.0 s paus före "Nu printar den klart även när jag vilar benen."
- **PAUS** dag 3 2:42: 0.0 s paus före "Jag springer för mycket. Med en ryggkorg bär jag s"
- **PAUS** dag 3 4:07: 0.0 s paus före "Nu bär jag sexton skräp."
- **PAUS** dag 3 4:10: 0.0 s paus före "Ett arbetsbord bredvid skrivaren. Skrivare M ska s"
- **PAUS** dag 3 7:19: 0.1 s paus före "Dina krukor säljer. Tanterna i kvarteret älskar de"
- **SAMTIDIGT** dag 3 10:59: "VA?! Du har byggt en skrivare TILL?? Du " och "Nu vet Rolf att jag bor HÄR. Benen orkar"
- **PAUS** dag 3 11:00: 0.0 s paus före "(nytt mål i rutan)"
- **FÖR KORT** dag 3 0:32: "💭 En hel kanot. Kvarnen skulle äta upp sig själv." stod 2.9 s av 5.0 s
- **FÖR KORT** dag 3 0:32: "💭 Tratten är stor som en kaffekopp. Tunnan är sto" stod 2.0 s av 5.6 s
- **TRÄNGSEL 2** dag 3 1:48: "Ali här. Bilbatteriet ur min gamla Volvo står i la" 2.0 s efter förra meddelandet, 13.9 s efter en klar uppgift

Sidfel: inga

## Dag 3

| Tid | Källa | Vem | Text |
|---|---|---|---|
| 0:00 | MÅL |  | Möt sopbilen vid grinden |
| 0:00 | MÅL |  | Möt sopbilen vid grinden |
| 0:02 | sak | du | Ett nytt brev i Rolfs postlåda. Det läser jag. |
| 0:02 | pil |  | Möt sopbilen vid grinden |
| 0:02 | notis | tanke | 💭 Ett nytt brev i Rolfs postlåda. Det läser jag. |
| 0:02 | röst | du | Ett nytt brev i Rolfs postlåda. Det läser jag. · MÅL |
| 0:07 | klar | du | Ett nytt brev i Rolfs postlåda. Det läser jag. |
| 0:08 | paket |  | ge |
| 0:08 | väntar |  | (läget ändras) |
| 0:08 | skratt | du | falsk tuta |
| 0:15 | sak |  | (läget ändras) |
| 0:15 | brev | rolf | rolf:1 |
| 0:15 | klar |  | (läget ändras) |
| 0:16 | paket |  | tanke |
| 0:16 | tanke | du | Jaha, Rolf har hämtat en ölhållare med kylklamp. |
| 0:16 | väntar | du | Jaha, Rolf har hämtat en ölhållare med kylklamp. |
| 0:16 | sak | du | Jaha, Rolf har hämtat en ölhållare med kylklamp. |
| 0:16 | notis | tanke | 💭 Jaha, Rolf har hämtat en ölhållare med kylklamp. |
| 0:16 | röst | du | Jaha, Rolf har hämtat en ölhållare med kylklamp. · REAKTION |
| 0:23 | klar | du | Jaha, Rolf har hämtat en ölhållare med kylklamp. |
| 0:29 | väntar | rolf | ÖJ! Kajsa knuffa ner min flasköppnare i tippen. Kan du göra en ny, mä magnet? Ritade den på rasten. Ungefär så vill ja ha'n. /Rolf​ |
| 0:29 | paket |  | ge |
| 0:29 | väntar |  | (läget ändras) |
| 0:29 | sak | rolf | ÖJ! Kajsa knuffa ner min flasköppnare i tippen. Kan du göra en ny, mä magnet? Ritade den på rasten. Ungefär så vill ja ha'n. /Rolf​ |
| 0:29 | lapp | Brev från Rolf | ÖJ! Kajsa knuffa ner min flasköppnare i tippen. Kan du göra en ny, mä magnet? Ritade den på rasten. Ungefär så vill ja ha'n. /Rolf​ |
| 0:29 | röst | rolf | ÖJ! Kajsa knuffa ner min flasköppnare i tippen. Kan du göra en ny, mä magnet? Ritade den på rasten. Ungefär så vill ja ha'n. /Rolf​ · STORY |
| 0:29 | händelse | malKlart | id=rolf1-brev del=Dag 3 – En skrivare till och taket nasta=n2-hamta-skrap |
| 0:29 | bekräftelse | du | plats |
| 0:29 | väntar | du | Nyckeln till tippen. Där ligger skräpet i högar. |
| 0:29 | MÅL |  | Hämta 5 skräp på soptippen |
| 0:29 | tanke | du | En hel kanot. Kvarnen skulle äta upp sig själv. |
| 0:29 | väntar | du | En hel kanot. Kvarnen skulle äta upp sig själv. |
| 0:29 | kvitto-visas |  | (läget ändras) |
| 0:29 | sak |  | (läget ändras) |
| 0:29 | kvitto-visas | du | En hel kanot. Kvarnen skulle äta upp sig själv. |
| 0:29 | sak | du | En hel kanot. Kvarnen skulle äta upp sig själv. |
| 0:29 | notis | tanke | 💭 En hel kanot. Kvarnen skulle äta upp sig själv. |
| 0:30 | tanke | du | Tratten är stor som en kaffekopp. Tunnan är stor som jag. |
| 0:30 | väntar | du | Tratten är stor som en kaffekopp. Tunnan är stor som jag. |
| 0:30 | kvitto-visas | du | Tratten är stor som en kaffekopp. Tunnan är stor som jag. |
| 0:30 | sak | du | Tratten är stor som en kaffekopp. Tunnan är stor som jag. |
| 0:30 | notis | tanke | 💭 Tratten är stor som en kaffekopp. Tunnan är stor som jag. |
| 0:31 | målruta |  | Hämta 5 skräp på soptippen |
| 0:32 | skratt | du | däcket rullar iväg |
| 0:32 | paket |  | tanke |
| 0:32 | tanke | du | Däcket ville inte stanna. Jag förstår det. |
| 0:32 | väntar | du | Däcket ville inte stanna. Jag förstår det. |
| 0:32 | kvitto-visas | du | Däcket ville inte stanna. Jag förstår det. |
| 0:32 | sak | du | Däcket ville inte stanna. Jag förstår det. |
| 0:32 | notis | tanke | 💭 Däcket ville inte stanna. Jag förstår det. |
| 0:32 | brott | FÖR KORT | "💭 En hel kanot. Kvarnen skulle äta upp sig själv." stod 2.9 s av 5.0 s |
| 0:32 | tanke | du | Hård plast. Lilla kvarnen skulle explodera. Eller jag. |
| 0:32 | väntar | du | Hård plast. Lilla kvarnen skulle explodera. Eller jag. |
| 0:32 | kvitto-visas | du | Hård plast. Lilla kvarnen skulle explodera. Eller jag. |
| 0:32 | sak | du | Hård plast. Lilla kvarnen skulle explodera. Eller jag. |
| 0:32 | notis | tanke | 💭 Hård plast. Lilla kvarnen skulle explodera. Eller jag. |
| 0:32 | brott | FÖR KORT | "💭 Tratten är stor som en kaffekopp. Tunnan är sto" stod 2.0 s av 5.6 s |
| 0:34 | händelse | malKlart | id=n2-hamta-skrap del=Dag 3 – En skrivare till och taket nasta=rolf1-printa |
| 0:34 | bekräftelse | du | plats |
| 0:34 | väntar | du | Rolf vill ha en flasköppnare. Den printar jag. |
| 0:34 | MÅL |  | Printa flasköppnare med magnet |
| 0:37 | målruta |  | Printa flasköppnare med magnet |
| 0:38 | kvittens-bock |  | ✓ Hämta 5 skräp på soptippen |
| 0:40 | klar | rolf | ÖJ! Kajsa knuffa ner min flasköppnare i tippen. Kan du göra en ny, mä magnet? Ritade den på rasten. Ungefär så vill ja ha'n. /Rolf​ |
| 0:40 | händelse | brevLast | id=rolf:1 |
| 0:40 | struken | du | Nyckeln till tippen. Där ligger skräpet i högar. |
| 0:40 | sak | du | Rolf vill ha en flasköppnare. Den printar jag. |
| 0:40 | pil |  | Printa flasköppnare med magnet |
| 0:40 | notis | tanke | 💭 Rolf vill ha en flasköppnare. Den printar jag. |
| 0:40 | röst | du | Rolf vill ha en flasköppnare. Den printar jag. · MÅL |
| 0:41 | nick |  | nick:33 |
| 0:45 | klar | du | Rolf vill ha en flasköppnare. Den printar jag. |
| 1:01 | väntar | rolf | Den funkar! Hä. Ta så mycke skräp du vill. /Rolf​ |
| 1:01 | hjälp | kontroll | E: Ryggsäcken och kistan |
| 1:01 | tanke | du | Nyckeln ska sitta i låset på grinden. |
| 1:01 | väntar | du | Nyckeln ska sitta i låset på grinden. |
| 1:01 | sak | du | Nyckeln ska sitta i låset på grinden. |
| 1:01 | notis | tanke | 💭 Nyckeln ska sitta i låset på grinden. |
| 1:01 | röst | du | Nyckeln ska sitta i låset på grinden. · REAKTION |
| 1:02 | monterat | du | byggsats:tippnyckel |
| 1:02 | händelse | monterat | sak=tippnyckel |
| 1:03 | scenInfo | du | Kameran sveper över tippen |
| 1:05 | klar | du | Nyckeln ska sitta i låset på grinden. |
| 1:07 | tanke | du | …Det här räcker i hundra år. |
| 1:07 | väntar | du | …Det här räcker i hundra år. |
| 1:08 | skratt | du | falsk tuta |
| 1:11 | händelse | printStart | sak=flaskoppnare |
| 1:11 | händelse | malKlart | id=rolf1-printa del=Dag 3 – En skrivare till och taket nasta=rolf1-ge |
| 1:11 | bekräftelse | du | plats |
| 1:11 | väntar | du | Flasköppnaren är klar. Den lägger jag i Rolfs postlåda. |
| 1:11 | MÅL |  | Ge Rolf flasköppnare med magnet |
| 1:11 | målruta |  | Ge Rolf flasköppnare med magnet |
| 1:12 | sak | du | Flasköppnaren är klar. Den lägger jag i Rolfs postlåda. |
| 1:12 | pil |  | Ge Rolf flasköppnare med magnet |
| 1:12 | notis | tanke | 💭 Flasköppnaren är klar. Den lägger jag i Rolfs postlåda. |
| 1:12 | röst | du | Flasköppnaren är klar. Den lägger jag i Rolfs postlåda. · MÅL |
| 1:15 | händelse | printKlar | sak=flaskoppnare n=1 |
| 1:15 | kvittens-bock |  | ✓ Printa flasköppnare med magnet |
| 1:16 | händelse | tagitUrPrint | sak=flaskoppnare n=1 |
| 1:17 | klar | du | Flasköppnaren är klar. Den lägger jag i Rolfs postlåda. |
| 1:27 | väntar | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått generator. Mer säger jag inte. Gunnar vet. |
| 1:27 | radio | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått generator. Mer säger jag inte. Gunnar vet. |
| 1:27 | skratt | du | Radio-Kjelle |
| 1:33 | sak | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått generator. Mer säger jag inte. Gunnar vet. |
| 1:33 | notis |  | 📻 Radio Tippen: Radio Tippen, Kjelle här. Skjulet vid tippen har fått generator. Mer säger jag inte. Gunnar vet. |
| 1:33 | röst | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått generator. Mer säger jag inte. Gunnar vet. · REAKTION |
| 1:34 | väntar | bror | Pappa har tvättat bilen tre gånger den här veckan. Jag sa att du bor på tippen. Han frågade vilken modell sopbilen var. |
| 1:34 | händelse | lagtIPostlada | sak=flaskoppnare rolf=1 jobb=false |
| 1:34 | händelse | malKlart | id=rolf1-ge del=Dag 3 – En skrivare till och taket nasta=kopBatteri |
| 1:34 | bekräftelse | du | plats |
| 1:34 | väntar | du | Ali har ett gammalt bilbatteri. Då sparar jag strömmen. |
| 1:34 | MÅL |  | Köp Alis gamla bilbatteri |
| 1:34 | upplåst | strom | cykelbatteri |
| 1:34 | brott | UPPLÅST | cykelbatteri (strom 20 av 15, sparat ihop) |
| 1:34 | händelse | upplast | id=cykelbatteri flask=strom |
| 1:34 | paket |  | sms |
| 1:34 | väntar | ali | Ali här. Bilbatteriet ur min gamla Volvo står i lagret. Det sparar mer ström än powerbanken. |
| 1:37 | målruta |  | Köp Alis gamla bilbatteri |
| 1:38 | kvittens-bock |  | ✓ Ge Rolf flasköppnare med magnet |
| 1:41 | klar | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått generator. Mer säger jag inte. Gunnar vet. |
| 1:41 | sak | du | Ali har ett gammalt bilbatteri. Då sparar jag strömmen. |
| 1:41 | pil |  | Köp Alis gamla bilbatteri |
| 1:41 | notis | tanke | 💭 Ali har ett gammalt bilbatteri. Då sparar jag strömmen. |
| 1:41 | röst | du | Ali har ett gammalt bilbatteri. Då sparar jag strömmen. · MÅL |
| 1:41 | nick |  | nick:35 |
| 1:42 | väntar | bror | Pappa har tvättat bilen tre gånger den här veckan. Jag sa att du bor på tippen. Han frågade vilken modell sopbilen var. |
| 1:46 | klar | du | Ali har ett gammalt bilbatteri. Då sparar jag strömmen. |
| 1:48 | brott | TRÄNGSEL 2 | "Ali här. Bilbatteriet ur min gamla Volvo står i la" 2.0 s efter förra meddelandet, 13.9 s efter en klar uppgift |
| 1:48 | sak | ali | Ali här. Bilbatteriet ur min gamla Volvo står i lagret. Det sparar mer ström än powerbanken. |
| 1:48 | sms | ali | Ali här. Bilbatteriet ur min gamla Volvo står i lagret. Det sparar mer ström än powerbanken. |
| 1:48 | sms-bubbla | ali | Ali här. Bilbatteriet ur min gamla Volvo står i lagret. Det sparar mer ström än powerbanken. |
| 1:48 | röst | ali | Ali här. Bilbatteriet ur min gamla Volvo står i lagret. Det sparar mer ström än powerbanken. · STORY |
| 2:02 | klar | ali | Ali här. Bilbatteriet ur min gamla Volvo står i lagret. Det sparar mer ström än powerbanken. |
| 2:08 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 2:08 | röst | ali | Satt med AI:n hela natten igen. Fråga inte vad. Okej, en soffa. Fråga inte. · STORY |
| 2:08 | butiksbubbla | ali | Satt med AI:n hela natten igen. Fråga inte vad. Okej, en soffa. Fråga inte. |
| 2:10 | toast | guld | 🔋 Bilbatteriet ska kopplas in på cykeln. |
| 2:10 | händelse | kopt | sak=cykelbatteri |
| 2:10 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 2:10 | butiksbubbla | ali | Batteriet ur min gamla Volvo. Bilen dog 2016. Batteriet vägrade. |
| 2:11 | väntar | ali | Batteriet ur min gamla Volvo. Bilen dog 2016. Batteriet vägrade. |
| 2:16 | sak | ali | Batteriet ur min gamla Volvo. Bilen dog 2016. Batteriet vägrade. |
| 2:16 | röst | ali | Batteriet ur min gamla Volvo. Bilen dog 2016. Batteriet vägrade. · STORY |
| 2:24 | klar | ali | Batteriet ur min gamla Volvo. Bilen dog 2016. Batteriet vägrade. |
| 2:29 | paket |  | tanke |
| 2:29 | tanke | du | Jaha, Rolf har hämtat en flasköppnare med magnet. |
| 2:29 | väntar | du | Jaha, Rolf har hämtat en flasköppnare med magnet. |
| 2:32 | tanke | du | Bilbatteriet är inkopplat – skrivaren printar klart även när du slutar trampa |
| 2:32 | väntar | du | Bilbatteriet är inkopplat – skrivaren printar klart även när du slutar trampa |
| 2:32 | monterat | du | byggsats:cykelbatteri |
| 2:32 | händelse | monterat | sak=cykelbatteri |
| 2:32 | sak | du | Bilbatteriet är inkopplat – skrivaren printar klart även när du slutar trampa |
| 2:32 | notis | tanke | 💭 Bilbatteriet är inkopplat – skrivaren printar klart även när du slutar trampa |
| 2:32 | röst | du | Bilbatteriet är inkopplat – skrivaren printar klart även när du slutar trampa · REAKTION |
| 2:32 | händelse | malKlart | id=kopBatteri del=Dag 3 – En skrivare till och taket nasta=ryggkorg |
| 2:32 | bekräftelse | du | plats |
| 2:32 | kvittens | du | Nu printar den klart även när jag vilar benen. |
| 2:32 | väntar | du | Nu printar den klart även när jag vilar benen. |
| 2:32 | struken | du | Jaha, Rolf har hämtat en flasköppnare med magnet. |
| 2:32 | väntar | du | Jag springer för mycket. Med en ryggkorg bär jag sexton saker. |
| 2:32 | MÅL |  | Spara till ryggkorgen · 67 / 120 kr |
| 2:35 | målruta |  | Spara till ryggkorgen · 67 / 120 kr |
| 2:35 | pil |  | Spara till ryggkorgen · 67 / 120 kr |
| 2:39 | klar | du | Bilbatteriet är inkopplat – skrivaren printar klart även när du slutar trampa |
| 2:39 | sak | du | Nu printar den klart även när jag vilar benen. |
| 2:39 | röst | du | Nu printar den klart även när jag vilar benen. · STORY |
| 2:41 | väntar | mamma | Pappa hälsar. Han sa inte det, men jag såg på honom att han ville. |
| 2:42 | klar | du | Nu printar den klart även när jag vilar benen. |
| 2:42 | sak | du | Jag springer för mycket. Med en ryggkorg bär jag sexton saker. |
| 2:42 | notis | tanke | 💭 Jag springer för mycket. Med en ryggkorg bär jag sexton saker. |
| 2:42 | röst | du | Jag springer för mycket. Med en ryggkorg bär jag sexton saker. · MÅL |
| 2:48 | klar | du | Jag springer för mycket. Med en ryggkorg bär jag sexton saker. |
| 2:51 | väntar | värld:TUUT! Hej grannen! | TUUT! Hej grannen! |
| 2:56 | sak | rolf | Den funkar! Hä. Ta så mycke skräp du vill. /Rolf​ |
| 2:56 | lapp | Brev från Rolf | Den funkar! Hä. Ta så mycke skräp du vill. /Rolf​ |
| 2:56 | röst | rolf | Den funkar! Hä. Ta så mycke skräp du vill. /Rolf​ · STORY |
| 2:58 | händelse | printStart | sak=kruka |
| 3:01 | klar | rolf | Den funkar! Hä. Ta så mycke skräp du vill. /Rolf​ |
| 3:01 | händelse | brevLast | id=rolftack:0 |
| 3:01 | paket |  | tanke |
| 3:01 | tanke | du | Jaha. En kalsong. Använd. |
| 3:01 | väntar | du | Jaha. En kalsong. Använd. |
| 3:01 | skratt | du | kvarnen spottar |
| 3:03 | struken | bror | Pappa har tvättat bilen tre gånger den här veckan. Jag sa att du bor på tippen. Han frågade vilken modell sopbilen var. |
| 3:04 | händelse | printKlar | sak=kruka n=5 |
| 3:04 | händelse | tagitUrPrint | sak=kruka n=1 |
| 3:09 | sak | du | …Det här räcker i hundra år. |
| 3:09 | notis | tanke | 💭 …Det här räcker i hundra år. |
| 3:09 | röst | du | …Det här räcker i hundra år. · STORY |
| 3:12 | klar | du | …Det här räcker i hundra år. |
| 3:14 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 3:15 | händelse | salt | sak=kruka n=1 |
| 3:15 | aliSalt | ali | 105 |
| 3:15 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 3:16 | struken | värld:TUUT! Hej grannen! | TUUT! Hej grannen! |
| 3:16 | upplåst | bara | ryggkorg |
| 3:16 | brott | UPPLÅST | ryggkorg (bara 2 av 3, sparat ihop) |
| 3:16 | händelse | upplast | id=ryggkorg flask=bara |
| 3:16 | paket |  | sms |
| 3:16 | väntar | ali | Ali här. En ryggkorg. AI:n ritade den efter en bild på min mormor. Den rymmer sexton. |
| 3:16 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 3:18 | struken | info:guld | 3D-modell köpt – printa ryggkorg |
| 3:18 | händelse | kopt | sak=ryggkorg |
| 3:18 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 3:18 | struken | ali | Ali här. En ryggkorg. AI:n ritade den efter en bild på min mormor. Den rymmer sexton. |
| 3:27 | struken | du | Jaha. En kalsong. Använd. |
| 3:33 | händelse | printStart | sak=byggsats:ryggkorg |
| 3:39 | toast | bra | Del 1 av 2 klar |
| 3:45 | händelse | printKlar | sak=byggsats:ryggkorg n=1 |
| 3:45 | tanke | du | Ryggkorg ska jag ha på mig. |
| 3:45 | väntar | du | Ryggkorg ska jag ha på mig. |
| 3:45 | händelse | tagitUrPrint | sak=byggsats:ryggkorg n=1 |
| 3:45 | paket |  | sms |
| 3:45 | väntar | ali | Ali här. Du printade Ryggkorg från min ritning. Och det FUNKAR? Jag har bara sett sånt på YouTube. |
| 3:45 | sak | du | Ryggkorg ska jag ha på mig. |
| 3:45 | notis | tanke | 💭 Ryggkorg ska jag ha på mig. |
| 3:45 | röst | du | Ryggkorg ska jag ha på mig. · REAKTION |
| 3:45 | händelse | malKlart | id=ryggkorg del=Dag 3 – En skrivare till och taket nasta=ryggkorgPa |
| 3:45 | bekräftelse | du | plats |
| 3:45 | väntar | du | Ryggkorgen är klar. På med den. |
| 3:45 | MÅL |  | Ta på ryggkorgen |
| 3:45 | hjälp | kontroll | Klick: Klicka för att ta på dig den |
| 3:48 | klar | du | Ryggkorg ska jag ha på mig. |
| 3:48 | målruta |  | Ta på ryggkorgen |
| 3:49 | kvittens-bock |  | ✓ Printa ryggkorgen |
| 3:51 | sak | du | Ryggkorgen är klar. På med den. |
| 3:51 | pil |  | Ta på ryggkorgen |
| 3:51 | notis | tanke | 💭 Ryggkorgen är klar. På med den. |
| 3:51 | röst | du | Ryggkorgen är klar. På med den. · MÅL |
| 3:53 | klar | du | Ryggkorgen är klar. På med den. |
| 3:58 | sak | ali | Ali här. Du printade Ryggkorg från min ritning. Och det FUNKAR? Jag har bara sett sånt på YouTube. |
| 3:58 | sms | ali | Ali här. Du printade Ryggkorg från min ritning. Och det FUNKAR? Jag har bara sett sånt på YouTube. |
| 3:58 | sms-bubbla | ali | Ali här. Du printade Ryggkorg från min ritning. Och det FUNKAR? Jag har bara sett sånt på YouTube. |
| 3:58 | röst | ali | Ali här. Du printade Ryggkorg från min ritning. Och det FUNKAR? Jag har bara sett sånt på YouTube. · REAKTION |
| 4:00 | tog på | du | byggsats:ryggkorg |
| 4:00 | händelse | monterat | sak=ryggkorg |
| 4:00 | händelse | malKlart | id=ryggkorgPa del=Dag 3 – En skrivare till och taket nasta=n2-bygg-arbetsbord |
| 4:00 | bekräftelse | du | plats |
| 4:00 | kvittens | du | Nu bär jag sexton skräp. |
| 4:00 | väntar | du | Nu bär jag sexton skräp. |
| 4:00 | väntar | du | Ett arbetsbord bredvid skrivaren. Skrivare M ska stå på det. |
| 4:00 | MÅL |  | Bygg ett arbetsbord |
| 4:02 | händelse | printStart | sak=kruka |
| 4:03 | målruta |  | Bygg ett arbetsbord |
| 4:07 | väntar | bud | (tips) |
| 4:07 | klar | ali | Ali här. Du printade Ryggkorg från min ritning. Och det FUNKAR? Jag har bara sett sånt på YouTube. |
| 4:07 | sak | du | Nu bär jag sexton skräp. |
| 4:07 | röst | du | Nu bär jag sexton skräp. · STORY |
| 4:08 | händelse | printKlar | sak=kruka n=6 |
| 4:08 | händelse | tagitUrPrint | sak=kruka n=1 |
| 4:10 | klar | du | Nu bär jag sexton skräp. |
| 4:10 | sak | du | Ett arbetsbord bredvid skrivaren. Skrivare M ska stå på det. |
| 4:10 | pil |  | Bygg ett arbetsbord |
| 4:10 | notis | tanke | 💭 Ett arbetsbord bredvid skrivaren. Skrivare M ska stå på det. |
| 4:10 | röst | du | Ett arbetsbord bredvid skrivaren. Skrivare M ska stå på det. · MÅL |
| 4:11 | nick |  | nick:38 |
| 4:17 | klar | du | Ett arbetsbord bredvid skrivaren. Skrivare M ska stå på det. |
| 4:17 | sak | bud | (tips) |
| 4:17 | väntar | ali | Den köper jag. Ge hit. |
| 4:17 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 4:18 | klar | bud | (tips) |
| 4:19 | händelse | salt | sak=kruka n=1 |
| 4:19 | aliSalt | ali | 105 |
| 4:19 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 4:20 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 4:21 | struken | info:guld | 3D-modell köpt – printa arbetsbord |
| 4:21 | händelse | kopt | sak=bord |
| 4:21 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 4:23 | meddelande | mamma | Har du borstat tänderna idag? Ljug inte. Jag hör om du ljuger. Även på sms. |
| 4:24 | röst | mamma | Har du borstat tänderna idag? Ljug inte. Jag hör om du ljuger. Även på sms. · STORY |
| 4:31 | paket |  | sms |
| 4:31 | väntar | mamma | Bra. Jag tror dig. Nästan. |
| 4:39 | händelse | brevLast | id=m_tandborste |
| 4:40 | skratt | du | falsk tuta |
| 4:42 | struken | ali | Den köper jag. Ge hit. |
| 4:49 | händelse | printStart | sak=byggsats:bord |
| 4:56 | toast | bra | Del 1 av 3 klar |
| 5:04 | toast | bra | Del 2 av 3 klar |
| 5:06 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 5:06 | väntar | notis:Storebrors skrivare: Tornet är tomt – ma | Storebrors skrivare: Tornet är tomt – mal mer så fortsätter den |
| 5:13 | tanke | du | Säljes ej. Än. |
| 5:13 | väntar | du | Säljes ej. Än. |
| 5:26 | struken | notis:Storebrors skrivare: Tornet är tomt – ma | Storebrors skrivare: Tornet är tomt – mal mer så fortsätter den |
| 5:33 | struken | du | Säljes ej. Än. |
| 5:35 | tanke | du | Fastpressad. Den sitter som i betong. |
| 5:35 | väntar | du | Fastpressad. Den sitter som i betong. |
| 5:37 | händelse | printKlar | sak=byggsats:bord n=1 |
| 5:37 | tanke | du | En husvagn mitt i tippen. Och grinden är låst. |
| 5:37 | väntar | du | En husvagn mitt i tippen. Och grinden är låst. |
| 5:37 | sak | du | En husvagn mitt i tippen. Och grinden är låst. |
| 5:37 | notis | tanke | 💭 En husvagn mitt i tippen. Och grinden är låst. |
| 5:37 | röst | du | En husvagn mitt i tippen. Och grinden är låst. · REAKTION |
| 5:43 | händelse | tagitUrPrint | sak=byggsats:bord n=1 |
| 5:44 | klar | du | En husvagn mitt i tippen. Och grinden är låst. |
| 5:47 | händelse | placerat | sak=bord |
| 5:47 | händelse | malKlart | id=n2-bygg-arbetsbord del=Dag 3 – En skrivare till och taket nasta=n2-bygg-skrivare-m |
| 5:47 | bekräftelse | du | plats |
| 5:47 | väntar | du | Skrivare M på bordet. Två skrivare, dubbelt så mycket. |
| 5:47 | målruta |  | Spara till Skrivare M · 37 / 500 kr |
| 5:47 | MÅL |  | Spara till Skrivare M · 37 / 500 kr |
| 5:47 | upplåst | skrivare | skrivare2 |
| 5:47 | brott | UPPLÅST | skrivare2 (skrivare 399 av 60) |
| 5:47 | händelse | upplast | id=skrivare2 flask=skrivare |
| 5:47 | paket |  | sms |
| 5:47 | väntar | ali | Ali här. Skrivare M har kommit. Två och en halv gånger snabbare. Snabbare än jag. Jag har inte varit snabb sedan 1998. |
| 5:47 | sak | du | Skrivare M på bordet. Två skrivare, dubbelt så mycket. |
| 5:47 | pil |  | Spara till Skrivare M · 37 / 500 kr |
| 5:47 | notis | tanke | 💭 Skrivare M på bordet. Två skrivare, dubbelt så mycket. |
| 5:47 | röst | du | Skrivare M på bordet. Två skrivare, dubbelt så mycket. · MÅL |
| 5:47 | nick |  | nick:39 |
| 5:51 | kvittens-bock |  | ✓ Bygg ett arbetsbord |
| 5:51 | klar | du | Skrivare M på bordet. Två skrivare, dubbelt så mycket. |
| 5:56 | struken | du | Fastpressad. Den sitter som i betong. |
| 6:00 | sak | mamma | Bra. Jag tror dig. Nästan. |
| 6:00 | sms | mamma | Bra. Jag tror dig. Nästan. |
| 6:00 | sms-bubbla | mamma | Bra. Jag tror dig. Nästan. |
| 6:00 | röst | mamma | Bra. Jag tror dig. Nästan. · STORY |
| 6:05 | klar | mamma | Bra. Jag tror dig. Nästan. |
| 6:05 | händelse | printStart | sak=kruka |
| 6:11 | händelse | printKlar | sak=kruka n=7 |
| 6:11 | händelse | tagitUrPrint | sak=kruka n=1 |
| 6:13 | händelse | printStart | sak=kruka |
| 6:19 | händelse | printKlar | sak=kruka n=8 |
| 6:19 | händelse | tagitUrPrint | sak=kruka n=1 |
| 6:27 | väntar | ali | Sålt nåt idag? Jag köper. |
| 6:29 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 6:30 | händelse | salt | sak=kruka n=1 |
| 6:30 | aliSalt | ali | 105 |
| 6:30 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 6:30 | händelse | salt | sak=kruka n=1 |
| 6:30 | aliSalt | ali | 105 |
| 6:30 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 6:42 | händelse | printStart | sak=kruka |
| 6:47 | händelse | printKlar | sak=kruka n=9 |
| 6:48 | händelse | tagitUrPrint | sak=kruka n=1 |
| 6:49 | struken | ali | Sålt nåt idag? Jag köper. |
| 6:50 | skratt | du | däcket rullar iväg |
| 6:50 | paket |  | tanke |
| 6:50 | tanke | du | Däcket ville inte stanna. Jag förstår det. |
| 6:50 | väntar | du | Däcket ville inte stanna. Jag förstår det. |
| 6:50 | händelse | printStart | sak=kruka |
| 6:55 | händelse | printKlar | sak=kruka n=10 |
| 6:56 | händelse | tagitUrPrint | sak=kruka n=1 |
| 6:57 | skratt | du | falsk tuta |
| 6:57 | väntar | värld:TUUT! Hej grannen! | TUUT! Hej grannen! |
| 7:05 | väntar | ali | Den köper jag. Ge hit. |
| 7:06 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 7:06 | sak | ali | Ali här. Skrivare M har kommit. Två och en halv gånger snabbare. Snabbare än jag. Jag har inte varit snabb sedan 1998. |
| 7:06 | sms | ali | Ali här. Skrivare M har kommit. Två och en halv gånger snabbare. Snabbare än jag. Jag har inte varit snabb sedan 1998. |
| 7:06 | sms-bubbla | ali | Ali här. Skrivare M har kommit. Två och en halv gånger snabbare. Snabbare än jag. Jag har inte varit snabb sedan 1998. |
| 7:06 | röst | ali | Ali här. Skrivare M har kommit. Två och en halv gånger snabbare. Snabbare än jag. Jag har inte varit snabb sedan 1998. · STORY |
| 7:07 | händelse | salt | sak=kruka n=1 |
| 7:07 | aliSalt | ali | 105 |
| 7:07 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 7:07 | butiksbubbla | ali | Dina krukor säljer. Tanterna i kvarteret älskar dem. |
| 7:07 | händelse | salt | sak=kruka n=1 |
| 7:07 | aliSalt | ali | 105 |
| 7:07 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 7:08 | väntar | ali | Dina krukor säljer. Tanterna i kvarteret älskar dem. |
| 7:18 | klar | ali | Ali här. Skrivare M har kommit. Två och en halv gånger snabbare. Snabbare än jag. Jag har inte varit snabb sedan 1998. |
| 7:19 | sak | ali | Dina krukor säljer. Tanterna i kvarteret älskar dem. |
| 7:19 | röst | ali | Dina krukor säljer. Tanterna i kvarteret älskar dem. · STORY |
| 7:19 | händelse | printStart | sak=kruka |
| 7:24 | klar | ali | Dina krukor säljer. Tanterna i kvarteret älskar dem. |
| 7:24 | paket |  | tanke |
| 7:24 | tanke | du | Den blev… spagetti. Ali kallar det modern konst. |
| 7:24 | struken | du | Däcket ville inte stanna. Jag förstår det. |
| 7:24 | väntar | du | Den blev… spagetti. Ali kallar det modern konst. |
| 7:24 | skratt | du | plastspagetti |
| 7:24 | händelse | printKlar | sak=kruka n=11 |
| 7:25 | händelse | tagitUrPrint | sak=spagetti n=1 |
| 7:26 | struken | värld:TUUT! Hej grannen! | TUUT! Hej grannen! |
| 7:28 | struken | ali | Den köper jag. Ge hit. |
| 7:31 | väntar | mamma | Pappa hälsar. Han sa inte det, men jag såg på honom att han ville. |
| 7:35 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 7:36 | händelse | salt | sak=spagetti n=1 |
| 7:36 | skratt | du | Ali köper konst |
| 7:36 | aliSalt | ali | 3 |
| 7:36 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 7:47 | struken | du | Den blev… spagetti. Ali kallar det modern konst. |
| 7:48 | händelse | printStart | sak=kruka |
| 7:53 | händelse | printKlar | sak=kruka n=12 |
| 7:54 | händelse | tagitUrPrint | sak=kruka n=1 |
| 8:03 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 8:05 | händelse | salt | sak=kruka n=1 |
| 8:05 | aliSalt | ali | 105 |
| 8:05 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 8:06 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 8:07 | skratt | du | Alis dyr-pling |
| 8:07 | struken | info:guld | 3D-modell köpt – printa skrivare M |
| 8:07 | händelse | kopt | sak=skrivare2 |
| 8:07 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 8:19 | händelse | printStart | sak=byggsats:skrivare2 |
| 8:28 | struken | mamma | Pappa hälsar. Han sa inte det, men jag såg på honom att han ville. |
| 8:28 | toast | bra | Del 1 av 5 klar |
| 8:38 | toast | bra | Del 2 av 5 klar |
| 8:39 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 9:13 | toast | bra | Del 3 av 5 klar |
| 9:22 | toast | bra | Del 4 av 5 klar |
| 9:32 | händelse | printKlar | sak=byggsats:skrivare2 n=1 |
| 9:33 | händelse | tagitUrPrint | sak=byggsats:skrivare2 n=1 |
| 9:35 | tanke | du | Slangen räcker inte ända hit. |
| 9:35 | väntar | du | Slangen räcker inte ända hit. |
| 9:37 | händelse | placerat | sak=skrivare2 |
| 9:37 | paket |  | tanke |
| 9:37 | tanke | du | Den här måste stå i linjen vid kvarnen, annars når inte slangen. |
| 9:37 | väntar | du | Den här måste stå i linjen vid kvarnen, annars når inte slangen. |
| 9:37 | händelse | malKlart | id=n2-bygg-skrivare-m del=Dag 3 – En skrivare till och taket nasta=n2-lagg-plattak-skjulet |
| 9:37 | bekräftelse | du | plats |
| 9:37 | lapp-kö | 📱 Storebror | VA?! Du har byggt en skrivare TILL?? Du har typ en printfarm nu. Okej. Det är faktiskt ganska ballt. 🔥 |
| 9:37 | väntar | bror | VA?! Du har byggt en skrivare TILL?? Du har typ en printfarm nu. Okej. Det är faktiskt ganska ballt. 🔥 |
| 9:37 | väntar | du | Det regnar in. Plåt på taket, så slipper jag sova i en pöl. |
| 9:37 | MÅL |  | Lägg plåttak på skjulet |
| 9:37 | målruta |  | Lägg plåttak på skjulet |
| 9:37 | sak | du | Det regnar in. Plåt på taket, så slipper jag sova i en pöl. |
| 9:37 | pil |  | Lägg plåttak på skjulet |
| 9:37 | notis | tanke | 💭 Det regnar in. Plåt på taket, så slipper jag sova i en pöl. |
| 9:37 | röst | du | Det regnar in. Plåt på taket, så slipper jag sova i en pöl. · MÅL |
| 9:41 | kvittens-bock |  | ✓ Bygg Skrivare M på bordet |
| 9:42 | klar | du | Det regnar in. Plåt på taket, så slipper jag sova i en pöl. |
| 9:54 | händelse | printStart | sak=kruka |
| 9:54 | toast | bra | 🔗 Slangen kopplad |
| 9:55 | struken | du | Slangen räcker inte ända hit. |
| 9:56 | händelse | printStart | sak=kruka |
| 9:57 | händelse | printKlar | sak=kruka n=13 |
| 10:02 | händelse | printKlar | sak=kruka n=14 |
| 10:02 | händelse | tagitUrPrint | sak=kruka n=1 |
| 10:03 | händelse | tagitUrPrint | sak=kruka n=1 |
| 10:11 | väntar | ali | Den köper jag. Ge hit. |
| 10:13 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 10:14 | händelse | salt | sak=kruka n=1 |
| 10:14 | aliSalt | ali | 105 |
| 10:14 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 10:14 | händelse | salt | sak=kruka n=1 |
| 10:14 | aliSalt | ali | 105 |
| 10:14 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 10:15 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 10:17 | struken | info:guld | 3D-modell köpt – printa plåttak |
| 10:17 | händelse | kopt | sak=tak |
| 10:17 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 10:25 | skratt | du | falsk tuta |
| 10:29 | händelse | printStart | sak=byggsats:tak |
| 10:33 | toast | bra | Del 1 av 3 klar |
| 10:37 | struken | ali | Den köper jag. Ge hit. |
| 10:37 | toast | bra | Del 2 av 3 klar |
| 10:37 | sak | du | Den här måste stå i linjen vid kvarnen, annars når inte slangen. |
| 10:37 | notis | tanke | 💭 Den här måste stå i linjen vid kvarnen, annars når inte slangen. |
| 10:37 | röst | du | Den här måste stå i linjen vid kvarnen, annars når inte slangen. · STORY |
| 10:38 | toast | fel | Ingen ström – trampa cykeln |
| 10:41 | klar | du | Den här måste stå i linjen vid kvarnen, annars når inte slangen. |
| 10:46 | väntar | värld:TUUT! Tjena! | TUUT! Tjena! |
| 10:49 | händelse | printKlar | sak=byggsats:tak n=1 |
| 10:50 | händelse | tagitUrPrint | sak=byggsats:tak n=1 |
| 10:51 | sak | bror | VA?! Du har byggt en skrivare TILL?? Du har typ en printfarm nu. Okej. Det är faktiskt ganska ballt. 🔥 |
| 10:51 | sms | bror | VA?! Du har byggt en skrivare TILL?? Du har typ en printfarm nu. Okej. Det är faktiskt ganska ballt. 🔥 |
| 10:51 | sms-bubbla | bror | VA?! Du har byggt en skrivare TILL?? Du har typ en printfarm nu. Okej. Det är faktiskt ganska ballt. 🔥 |
| 10:51 | röst | bror | VA?! Du har byggt en skrivare TILL?? Du har typ en printfarm nu. Okej. Det är faktiskt ganska ballt. 🔥 · STORY |
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
| 10:59 | paket |  | replik |
| 10:59 | väntar | rolf | Hoppa in. Ja ska visa dej en grej. |
| 10:59 | väntar | foto | Tak över huvudet |
| 10:59 | paket |  | tanke |
| 10:59 | tanke | du | I natt somnar jag torr. Det börjar bli ett hem. |
| 10:59 | väntar | du | I natt somnar jag torr. Det börjar bli ett hem. |
| 10:59 | målruta |  | Sov när du vill |
| 11:00 | klar | bror | VA?! Du har byggt en skrivare TILL?? Du har typ en printfarm nu. Okej. Det är faktiskt ganska ballt. 🔥 |
| 11:00 | sak | du | (nytt mål i rutan) |
| 11:00 | pil |  | Sov när du vill |
| 11:00 | klar | du | (nytt mål i rutan) |
| 11:01 | kvittens-bock |  | ✓ Lägg plåttak på skjulet |
| 11:04 | väntar | notis:🌇 Klockan är 21. Ali slår igen luckan.  | 🌇 Klockan är 21. Ali slår igen luckan. Dagens jobb är klart – gå in i skjulet och sov i sängen. |
| 11:26 | skratt | du | falsk tuta |
| 11:43 | scenInfo | rolf | Rolf kör upp till sin bänk |
| 11:47 | röst | rolf | Kall öl ä viktigt. · STORY |
| 11:47 | bubbla | rolf | Kall öl ä viktigt. |
| 11:55 | röst | rolf | Ja kommer hit varje kväll. Förr va vi två på bänken. · STORY |
| 11:55 | bubbla | rolf | Ja kommer hit varje kväll. Förr va vi två på bänken. |
| 12:13 | röst | rolf | Dä där ä Bengt-Åke. Vinka int. · STORY |
| 12:13 | bubbla | rolf | Dä där ä Bengt-Åke. Vinka int. |
| 12:27 | skratt | du | falsk tuta |
| 12:28 | röst | rolf | Den ä skyldig mej pengar. · STORY |
| 12:28 | bubbla | rolf | Den ä skyldig mej pengar. |
| 12:37 | väntar | foto | Rolfs bänk |
| 12:37 | paket |  | tanke |
| 12:37 | tanke | du | Han kommer hit varje kväll. Nu vet jag var. |
| 12:37 | väntar | du | Han kommer hit varje kväll. Nu vet jag var. |
| 12:37 | skratt | du | Rolfs bänk |
| 12:43 | sak | rolf | Hoppa in. Ja ska visa dej en grej. |
| 12:43 | notis |  | Rolf: ”Hoppa in. Ja ska visa dej en grej.” |
| 12:43 | röst | rolf | Hoppa in. Ja ska visa dej en grej. · STORY |
| 12:44 | lapp | Dagbok | Tre dagar. Om nitton dagar är det jul. |
| 12:47 | klar | rolf | Hoppa in. Ja ska visa dej en grej. |
| 12:47 | röst | du | Tre dagar. Om nitton dagar är det jul. · REAKTION |
| 12:58 | sak | foto | Tak över huvudet |
| 12:58 | foto | du | Tak över huvudet |
| 13:01 | klar | foto | Tak över huvudet |
| 13:05 | nattkort | du | 🌙 19 dagar kvar. God natt. zzz… Nu vet Rolf att jag bor HÄR. Benen orkar inte trampa mer. DAGENS PRINTAR Blomkruka × 10 Flasköppnare med magnet × 1 Totalt 11 p |

<details><summary>Botens handlingar dag 3</summary>

- 0:29 gå till Rolfs postlåda (28 m) (37 kr)
- 0:38 plockar 10 skräp på tippen (bär max 10) (37 kr)
- 0:41 gå till kvarnen (7 m) (37 kr)
- 0:56 gå till Rolfs postlåda (4 m) (37 kr)
- 1:01 panel: "Rolfs postlåda
Det här låg i l" (97 kr)
- 1:02 gå till sätt nyckeln i låset (2 m) (97 kr)
- 1:10 gå till skrivaren (7 m) (97 kr)
- 1:11 printar Flasköppnare med magnet (97 kr)
- 1:16 tar ut 1 st ur skrivaren (97 kr)
- 1:27 nybörjaren ser ingen pil – tittar runt (97 kr)
- 1:31 valj flaskoppnare: true, vald flaskoppnare, post {"l":null,"tr":null,"tm":[]}, nummer false (97 kr)
- 1:34 gå till Rolfs postlåda (6 m) (97 kr)
- 1:56 gå till fel håll en bit (4 m) (97 kr)
- 2:08 gå till Ali (31 m) (97 kr)
- 2:08 öppnar Alis butik – bilbatteriet (97 kr)
- 2:11 köper cykelbatteri för 30 kr (67 kr)
- 2:32 gå till koppla in bilbatteriet vid cykeln (24 m) (67 kr)
- 2:51 nybörjaren ser ingen pil – tittar runt (67 kr)
- 2:55 tjänar pengar till väntar på flaskhalsen för ryggkorg: 67/107 kr → printar blomkruka (105 kr) (67 kr)
- 2:57 gå till skrivaren (2 m) (67 kr)
- 2:58 printar Blomkruka (67 kr)
- 3:05 tar ut 1 st ur skrivaren (67 kr)
- 3:14 gå till Ali (26 m) (67 kr)
- 3:14 öppnar Alis butik – sälja (67 kr)
- 3:15 säljer hos Ali: +105 kr (172 kr)
- 3:16 öppnar Alis butik – köpa ryggkorg (172 kr)
- 3:19 köper ryggkorg för 120 kr (52 kr)
- 3:21 gå till fel håll en bit (4 m) (52 kr)
- 3:32 gå till skrivaren (25 m) (52 kr)
- 3:33 printar Ryggkorg (2 delar) (52 kr)
- 3:46 tar ut 1 st ur skrivaren (52 kr)
- 3:55 nybörjaren ser ingen pil – tittar runt (52 kr)
- 4:00 tar på ryggkorg (52 kr)
- 4:01 tjänar pengar till arbetsbord: 52/120 kr → printar blomkruka (105 kr) (52 kr)
- 4:02 printar Blomkruka (52 kr)
- 4:08 tar ut 1 st ur skrivaren (52 kr)
- 4:17 gå till Ali (25 m) (52 kr)
- 4:17 öppnar Alis butik – sälja (52 kr)
- 4:19 säljer hos Ali: +105 kr (157 kr)
- 4:20 öppnar Alis butik – köpa arbetsbord (157 kr)
- 4:22 köper bord för 120 kr (37 kr)
- 4:31 popup: "Ja." (37 kr)
- 4:39 popup: "Läst" (37 kr)
- 4:48 gå till skrivaren (25 m) (37 kr)
- 4:49 printar Arbetsbord (3 delar) (37 kr)
- 5:17 plockar 2 skräp på gården (bär max 16) (37 kr)
- 5:31 gå till kvarnen (39 m) (37 kr)
- 5:38 plockar 1 skräp på tippen (bär max 16) (37 kr)
- 5:41 gå till kvarnen (9 m) (37 kr)
- 5:43 gå till skrivaren (3 m) (37 kr)
- 5:44 tar ut 1 st ur skrivaren (37 kr)
- 5:46 gå till platsen för arbetsbord (5 m) (37 kr)
- 5:47 ställer ut arbetsbord (37 kr)
- 6:03 tjänar pengar till Skrivare M: 37/500 kr → printar blomkruka (105 kr) (37 kr)
- 6:04 gå till skrivaren (2 m) (37 kr)
- 6:05 printar Blomkruka (37 kr)
- 6:12 tar ut 1 st ur skrivaren (37 kr)
- 6:13 printar Blomkruka (37 kr)
- 6:20 tar ut 1 st ur skrivaren (37 kr)
- 6:29 gå till Ali (26 m) (37 kr)
- 6:29 öppnar Alis butik – sälja (37 kr)
- 6:31 säljer hos Ali: +210 kr (247 kr)
- 6:31 tjänar pengar till Skrivare M: 247/500 kr → printar blomkruka (105 kr) (247 kr)
- 6:41 gå till skrivaren (25 m) (247 kr)
- 6:42 printar Blomkruka (247 kr)
- 6:49 tar ut 1 st ur skrivaren (247 kr)
- 6:50 printar Blomkruka (247 kr)
- 6:57 tar ut 1 st ur skrivaren (247 kr)
- 7:06 gå till Ali (25 m) (247 kr)
- 7:06 öppnar Alis butik – sälja (247 kr)
- 7:08 säljer hos Ali: +210 kr (457 kr)
- 7:08 tjänar pengar till Skrivare M: 457/500 kr → printar blomkruka (105 kr) (457 kr)
- 7:17 gå till skrivaren (25 m) (457 kr)
- 7:19 printar Blomkruka (457 kr)
- 7:25 tar ut 1 st ur skrivaren (457 kr)
- 7:35 gå till Ali (25 m) (457 kr)
- 7:35 öppnar Alis butik – sälja (457 kr)
- 7:36 säljer hos Ali: +3 kr (460 kr)
- 7:37 tjänar pengar till Skrivare M: 460/500 kr → printar blomkruka (105 kr) (460 kr)
- 7:46 gå till skrivaren (25 m) (460 kr)
- 7:48 printar Blomkruka (460 kr)
- 7:54 tar ut 1 st ur skrivaren (460 kr)
- 8:03 gå till Ali (25 m) (460 kr)
- 8:03 öppnar Alis butik – sälja (460 kr)
- 8:05 säljer hos Ali: +105 kr (565 kr)
- 8:06 öppnar Alis butik – köpa skrivare m (565 kr)
- 8:08 köper skrivare2 för 500 kr (65 kr)
- 8:18 gå till skrivaren (25 m) (65 kr)
- 8:19 printar Skrivare M (5 delar) (65 kr)
- 9:03 gå till kvarnen (42 m) (65 kr)
- 9:11 plockar 2 skräp på tippen (bär max 16) (65 kr)
- 9:14 gå till kvarnen (9 m) (65 kr)
- 9:33 gå till skrivaren (3 m) (65 kr)
- 9:34 tar ut 1 st ur skrivaren (65 kr)
- 9:36 gå till platsen för skrivare m (5 m) (65 kr)
- 9:37 ställer ut skrivare m (65 kr)
- 9:53 tjänar pengar till plåttak: 65/250 kr → printar blomkruka (105 kr) (65 kr)
- 9:54 printar Blomkruka (65 kr)
- 9:55 gå till skrivaren (2 m) (65 kr)
- 9:56 printar Blomkruka (65 kr)
- 10:03 tar ut 1 st ur skrivaren (65 kr)
- 10:03 tar ut 1 st ur skrivaren (65 kr)
- 10:13 gå till Ali (26 m) (65 kr)
- 10:13 öppnar Alis butik – sälja (65 kr)
- 10:14 säljer hos Ali: +210 kr (275 kr)
- 10:15 öppnar Alis butik – köpa plåttak (275 kr)
- 10:18 köper tak för 250 kr (25 kr)
- 10:27 gå till skrivaren (24 m) (25 kr)
- 10:29 printar Plåttak (3 delar) (25 kr)
- 10:50 tar ut 1 st ur skrivaren (25 kr)
- 10:57 gå till skjulet (17 m) (25 kr)
- 11:27 gå till dit pilen pekar (2 m) (25 kr)
- 11:43 gå till sopbilen (Rolfs bänk) (38 m) (25 kr)
- 12:43 tillbaka från Rolfs bänk (25 kr)
- 12:49 panel: "Dagbok
Före och efter
3 decemb" (25 kr)
- 13:03 gå till sängen (39 m) (25 kr)

</details>

## Dag 4

| Tid | Källa | Vem | Text |
|---|---|---|---|
| 13:05 | vara | ali | ingen |
| 13:05 | händelse | malKlart | id=sov3 del=Dag 3 – En skrivare till och taket nasta=rolf2-brev |
| 13:05 | bekräftelse | du | plats |
| 13:05 | vara | ali | kruka |
| 13:06 | MÅL |  | Möt sopbilen vid grinden |
| 13:06 | väntar | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått TAK. Och vindsnurra till skjultaket. Skriv in, Gunnar. Du skriver aldrig in. |
| 13:06 | radio | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått TAK. Och vindsnurra till skjultaket. Skriv in, Gunnar. Du skriver aldrig in. |
| 13:06 | skratt | du | Radio-Kjelle |

<details><summary>Botens handlingar dag 4</summary>

- 0:00 — dag 4 börjar — (25 kr)

</details>
