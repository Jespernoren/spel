# Simulering kapitel 1 – körning 1

*Gjord 2026-11-24 10:44 med `verktyg/sim-kapitel1.mjs` + `verktyg/sim-bot.js` (punkt AX). Boten går 4,5 m/s, läser 15 tecken/s, trampar, vevar, plockar, printar, köper och säljer via spelets egna funktioner. Tiderna är speltid.*

## Sammanfattning

| Dag | Minuter | Väntan | Prints (totalt) | Kr vid sömn | Bär | Trivsel |
|---|---|---|---|---|---|---|
| 1 | 7.5 | 1 % | 10 | 30 | 6 | 16 |
| 2 | 5.8 | 1 % | 13 | 20 | 10 | 30 |
| 3 | 13.8 | 1 % | 21 | 168 | 16 | 96 |
| 4 | 9.7 | 3 % | 30 | 1539 | 16 | 136 |
| 5 | 11.5 | 3 % | 39 | 1412 | 16 | 161 |
| 6 | 6.6 | 7 % | 47 | 371 | 16 | 189 |
| 7 | 11.4 | 5 % | 59 | 692 | 16 | 214 |
| 8 | 10.2 | 0 % | 74 | 3171 | 16 | 221 |
| 9 | 6.8 | 6 % | 84 | 9292 | 16 | 255 |
| 10 | 4.6 | 3 % | 110 | 11782 | 16 | 310 |
| 11 | 7.8 | 7 % | 116 | 3854 | 16 | 353 |
| 12 | 22.6 | 26 % ⚠️ | 158 | 367 | 16 | 353 |
| 13 | 7.1 | 14 % | 164 | 3996 | 16 | 520 |
| 14 | 7.8 | 32 % ⚠️ | 177 | 36271 | 16 | 545 |
| 15 | 5.3 | 0 % | 177 | 38483 | 16 | 545 |

## Flaskhalskartan (EE)

| Dag | bara | mala | trampa | strom | skrivare | inkomst | Upplåst |
|---|---|---|---|---|---|---|---|
| 1 | 4 | 4 | 19 | 5 | 35 | 8 | grip (bara, 5:15), kruka (inkomst, 5:35) |
| 2 | 1 | 85 | 2 | 3 | 226 | 0 | kvarnmotor (mala, 0:55), rullstall (skrivare, 2:43), trim_skrivare (skrivare, 3:43), vindsnurra (trampa, 4:07) |
| 3 | 2 | 55 | 0 | 30 | 502 | 0 | cykelbatteri (strom, 1:22), ryggkorg (bara, 2:01), skrivare2 (skrivare, 4:05), trim_skrivare2 (skrivare, 5:53), matarband (bara, 8:38), vindsnurra2 (strom, 9:58) |
| 4 | 4 | 10 | 0 | 0 | 287 | 0 | trim_skrivare3 (skrivare, 1:16), vindsnurra3 (strom, 8:11) |
| 5 | 4 | 9 | 0 | 0 | 310 | 0 | sol (strom, 3:50), turbomotor (mala, 8:53) |
| 6 | 3 | 208 | 0 | 33 | 252 | 0 | skrivare3 (skrivare, 11:30), magnet (bara, 1:59), bank (strom, 5:05) |
| 7 | 3 | 29 | 0 | 31 | 461 | 0 | solpark (strom, 2:15) |
| 8 | 0 | 0 | 0 | 0 | 525 | 0 | kolfskrivare (skrivare, 4:50), bank2 (strom, 9:22) |
| 9 | 3 | 27 | 0 | 0 | 249 | 0 | trim_kolf1 (skrivare_kolf, 2:54) |
| 10 | 4 | 49 | 0 | 0 | 100 | 0 |  |
| 11 | 2 | 9 | 0 | 0 | 61 | 0 | solpark2 (strom, 5:14) |
| 12 | 2 | 975 | 0 | 0 | 1020 | 0 |  |
| 13 | 2 | 183 | 0 | 32 | 262 | 0 | vindkraft (strom, 2:54), guldskrivare (skrivare, 5:04) |
| 14 | 3 | 231 | 0 | 0 | 382 | 0 |  |
| 15 | 0 | 0 | 0 | 0 | 0 | 0 |  |

TIDIG: 0 · FAST: 0 · upplåst av reserven (målet väntade 3 min): 0

**SKRATT:** 191 roliga ögonblick på 139 min (13.8 per 10 min, mål minst 5)

**Köp:**

- dag 1 2:22 – gammalkvarn (30 kr)
- dag 1 4:16 – grip (50 kr)
- dag 1 5:49 – kruka (40 kr)
- dag 1 6:34 – sang (60 kr)
- dag 2 1:08 – kvarnmotor (50 kr)
- dag 2 4:28 – vindsnurra (50 kr)
- dag 2 5:23 – dorr (120 kr)
- dag 3 1:43 – cykelbatteri (10 kr)
- dag 3 2:18 – ryggkorg (40 kr)
- dag 3 3:22 – bord (40 kr)
- dag 3 4:45 – skrivare2 (180 kr)
- dag 3 6:17 – tak (90 kr)
- dag 3 9:00 – matarband (40 kr)
- dag 3 9:45 – pall (30 kr)
- dag 3 10:18 – vindsnurra (50 kr)
- dag 3 11:45 – vaggar (50 kr)
- dag 4 2:17 – webbdator (300 kr)
- dag 4 4:33 – fonster (90 kr)
- dag 4 5:34 – golv (140 kr)
- dag 4 7:35 – taklampa (90 kr)
- dag 4 8:49 – vindsnurra (50 kr)
- dag 5 2:30 – petgkvarn (420 kr)
- dag 5 4:10 – sol (940 kr)
- dag 5 4:53 – fagelskramma (10 kr)
- dag 5 5:23 – skrivarepetg (530 kr)
- dag 5 7:56 – n2_vas (210 kr)
- dag 5 8:37 – saljlada (140 kr)
- dag 6 0:43 – skrivare3 (3500 kr)
- dag 6 4:11 – magnet (2400 kr)
- dag 6 5:08 – bank (800 kr)
- dag 6 6:12 – hylla (1300 kr)
- dag 7 1:37 – n2_hjalm (1750 kr)
- dag 7 5:31 – solpark (1800 kr)
- dag 7 7:17 – petgtorn (450 kr)
- dag 7 8:05 – tapeter (960 kr)
- dag 7 11:07 – spis (5050 kr)
- dag 8 2:15 – kolfkvarn (2700 kr)
- dag 8 3:38 – kolfband (4750 kr)
- dag 8 7:55 – kolfskrivare (11500 kr)
- dag 8 9:05 – kolfslang (12500 kr)
- dag 8 9:44 – bank (1600 kr)
- dag 9 2:45 – gamingbod (49500 kr)
- dag 9 5:07 – jetmotor (9900 kr)
- dag 9 5:52 – utlada (11000 kr)
- dag 10 0:25 – projektor (1350 kr)
- dag 10 1:17 – ledpinne (2250 kr)
- dag 10 3:18 – jacuzzi (12500 kr)
- dag 11 5:54 – solpark (3600 kr)
- dag 12 4:44 – diamantkniv (75000 kr)
- dag 13 3:30 – vindkraft (9950 kr)
- dag 13 5:27 – guldskrivare (6900 kr)
- dag 14 2:39 – kamin (58000 kr)

## Storykedjan (kvittens → varför → nytt mål)

| Dag | Tid | Id | Kvittens | Varför | Nytt mål | Tid till målet |
|---|---|---|---|---|---|---|
| 1 | 0:21 | lasta | Tung. Den har storebror aldrig burit så långt. |  | Den har ingen ström. Cykeln vid vägen kanske kan ge ström. | 5.5 s |
| 1 | 1:24 | valjModell | Den piper. Den GÖR något. |  | Affären mitt emot. Han verkar nyfiken. Jag visar honom. | 29.2 s |
| 1 | 1:29 | trampa | Klar! Ta ut den innan den ändrar sig. |  | Affären mitt emot. Han verkar nyfiken. Jag visar honom. | 24.2 s |
| 1 | 2:57 | flaska | Det blir tråd! Riktig plasttråd. |  | Min egen tråd. Nu printar jag en nyckelring av den. | 3.0 s |
| 1 | 6:06 | krukaD1 | En kruka. Mamma skulle bli så stolt. Hon får inte veta. |  | Ali gillar krukor. Han sa det själv. | 1.3 s |
| 1 | 7:12 | printSang | En säng. Jag printade en SÄNG. |  | Sängen ska in i skjulet. Sen sover jag. | 1.3 s |
| 2 | 4:52 | vindsnurra | Den snurrar! Långsamt. Men den snurrar. |  | Det drar från dörrhålet. En dörr kan jag printa. | 1.4 s |
| 3 | 2:01 | kopBatteri | Nu printar den klart även när jag vilar benen. |  | Jag springer för mycket. Med en ryggkorg bär jag sexton sake | 11.3 s |
| 3 | 2:42 | ryggkorgPa | Nu bär jag sexton skräp. |  | Ett arbetsbord bredvid skrivaren. Skrivare M ska stå på det. | 13.7 s |
| 3 | 9:28 | sophallare | Nu kan jag tömma hela kärran på en gång. |  | Jag behöver något att sitta på. En pall. Lagom ambitiöst. | 1.3 s |
| 4 | 1:56 | n4-isolera-de-sista | Det är tätt, det är varmt. |  | Alis pappas dator. Med den kan jag sälja på nätet. | 12.4 s |
| 5 | 4:34 | sol6 | Den röda kvarnen drar mer än vinden orkar. Solen får hjälpa  |  | Göran snor mina nyckelringar. Han får ett eget ställe, så lä | 1.3 s |
| 5 | 5:13 | goran6 | Göran har ett hem nu. Bättre än jag hade för en vecka sen. |  | Röd plast kräver en egen skrivare. Den vanliga vill inte. | 1.3 s |
| 5 | 9:11 | saljlada | Jag hämtar varje morgon. Du lägger i, jag betalar. |  | Vaserna i lådan. Ali hämtar själv. | 1.6 s |
| 6 | 6:23 | hylla8 | En hylla. Jag har en hylla. Saker har en plats nu. |  | Cykelhjälmar i röd plast. Säljer bra, säger Ali. | 23.1 s |
| 7 | 11:15 | spis10 | Varm mat. I skjulet. Mamma skulle inte tro det. |  | Kajakerna på tippen är kolfiber. Det behövs en kvarn som tål | 32.5 s |

## Hur länge nya mål väntade (från att förra målet blev klart till att det nya syntes i målrutan)

Snitt 3.0 s · max 14.0 s · över 4 s: 20 · över 8 s: 18 av 127

## Flaggor (221)

- **UPPREPNING** dag 5 8:08: Den köper jag. Ge hit. (CT)
- **UPPREPNING** dag 7 3:45: Den köper jag. Ge hit. (CT)
- **UPPREPNING** dag 8 6:48: Den köper jag. Ge hit. (CT)
- **UPPREPNING** dag 8 9:00: Den köper jag. Ge hit. (CT)
- **UPPREPNING** dag 9 3:06: Den köper jag. Ge hit. (CT)
- **UPPREPNING** dag 9 6:08: Den köper jag. Ge hit. (CT)
- **UPPREPNING** dag 12 4:50: Den köper jag. Ge hit. (CT)
- **UPPREPNING** dag 12 12:14: Den köper jag. Ge hit. (CT)
- **UPPREPNING** dag 14 2:32: Den köper jag. Ge hit. (CT)
- **UPPREPNING** dag 14 6:19: Den köper jag. Ge hit. (CT)
- **LUGN** dag 7 0:08: 0.0 s efter BÖRJA DAGEN: [notis] "💭 Nätterna blir kallare nu – se till att skjulet håller vär"
- **LUGN** dag 7 0:08: 0.0 s efter BÖRJA DAGEN: [röst] "Nätterna blir kallare nu – se till att skjulet håller värmen"
- **LUGN** dag 8 0:07: 0.0 s efter BÖRJA DAGEN: [notis] "💭 KAPITEL 2 KLART! Röda fabriken går – och skjulet klarar k"
- **LUGN** dag 8 0:07: 0.0 s efter BÖRJA DAGEN: [röst] "KAPITEL 2 KLART! Röda fabriken går – och skjulet klarar kyla"
- **LUGN** dag 9 0:11: 2.5 s efter BÖRJA DAGEN: [lapp] "Mammas paket kom tillbaka: "Okänd mottagare". Det här är mit"
- **LUGN** dag 9 0:11: 2.5 s efter BÖRJA DAGEN: [notis] "Mammas paket kom tillbaka: "Okänd mottagare". Det här är mit"
- **LUGN** dag 11 0:08: 0.0 s efter BÖRJA DAGEN: [notis] "💭 KAPITEL 3 KLART! Fabriken sköter sig själv."
- **LUGN** dag 11 0:08: 0.0 s efter BÖRJA DAGEN: [röst] "KAPITEL 3 KLART! Fabriken sköter sig själv. · REAKTION"
- **LUGN** dag 13 0:08: 0.0 s efter BÖRJA DAGEN: [notis] "💭 Nu blir det riktigt kallt. Utan vedkamin och hela väggar "
- **LUGN** dag 13 0:08: 0.0 s efter BÖRJA DAGEN: [röst] "Nu blir det riktigt kallt. Utan vedkamin och hela väggar fry"
- **KROCK** dag 2 2:44: 3.7 s mellan [bubbla] "Du har städat hela gården. Ingen gör så nuförtin." och [notis] "💭 Kvarnen står och väntar för att hållaren är full. Om den "
- **KROCK** dag 4 0:58: 0.3 s mellan [lapp] "Tjo. Flaket ä så trist. En tomte mä luva o skägg, kan du gör" och [notis] "💭 Rolf tippade DUBBEL last på soptippen!"
- **KROCK** dag 5 0:36: 0.2 s mellan [notis] "📔 Prestation: Ett hem att bo i · +3 respekt" och [notis] "📔 Prestation: Tusenlappen · +3 respekt"
- **KROCK** dag 9 0:13: 2.5 s mellan [notis] "Mammas paket kom tillbaka: "Okänd mottagare". Det här är mit" och [notis] "💭 Rolf har flyttat ut gärdesgården! Ny mark att utforska – "
- **KROCK** dag 9 1:04: 1.4 s mellan [sms-bubbla] "ÖJ! Ny lapp i lådan. Du vet va dä betyder. /R​" och [notis] "💭 Fickorna är fulla. Jag får lägga något i ryggsäcken först"
- **KROCK** dag 11 1:24: 3.2 s mellan [notis] "💭 Vad har Göran nu?" och [notis] "💭 Guld? Där nere?"
- **KROCK** dag 11 3:50: 0.4 s mellan [notis] "Rolf: ”Hon älska å bada hä. Gå du. Ja står hä en stund.”" och [notis] "Rolf: ”Birgittas. Hon vaska för skoj. Hitta aldrig nåt.”"
- **KEDJA** dag 1 1:29: trampa: inget nytt mål lästes upp efter kedjan
- **KEDJA** dag 4 1:56: n4-isolera-de-sista: nytt mål 12.4 s efter kedjan (max 2 s)
- **KEDJA** dag 6 6:23: hylla8: inget nytt mål lästes upp efter kedjan
- **KEDJA** dag 7 11:15: spis10: inget nytt mål lästes upp efter kedjan
- **KEDJA** dag 15 5:18: mål utan kvittens: "(inga mål)"
- **SEN** dag 5 9:57: 6.5 s efter händelsen (gräns 1 s): du: "1 sak i lådan · Ali hämtar i morgon bitti"
- **PAUS** dag 1 0:21: 1.6 s paus före "Tung. Den har storebror aldrig burit så långt."
- **PAUS** dag 1 1:29: 0.0 s paus före "Den piper. Den GÖR något."
- **PAUS** dag 1 1:38: 0.1 s paus före "Jag gjorde den här. Av skräp. Det här kan funka."
- **PAUS** dag 1 1:43: 0.0 s paus före "Hallå där, nya grannen! Vad är det där du gör?"
- **PAUS** dag 1 2:36: 0.0 s paus före "Kvarnen ska stå vid skrivaren, närmast skräpberget"
- **PAUS** dag 1 2:57: 1.9 s paus före "Det blir tråd! Riktig plasttråd."
- **PAUS** dag 1 3:03: 0.0 s paus före "Min egen tråd. Nu printar jag en nyckelring av den"
- **PAUS** dag 1 4:20: 0.1 s paus före "Bra val. Ritningen räcker till en skräpgrip."
- **PAUS** dag 1 4:25: 0.0 s paus före "Ritningen är min. Nu printar jag skräpgripen."
- **PAUS** dag 1 5:04: 0.0 s paus före "Ali här. Jag såg Skräpgrip på avstånd. Ett streck "
- **PAUS** dag 1 5:14: 0.0 s paus före "Spara till krukreceptet."
- **PAUS** dag 1 5:18: 0.0 s paus före "Ett skräp i taget. Jag springer ihjäl mig."
- **PAUS** dag 1 6:06: 1.0 s paus före "En kruka. Mamma skulle bli så stolt. Hon får inte "
- **PAUS** dag 1 6:27: 0.0 s paus före "Jag tänker inte sova på betongen i natt. Ali har e"
- **PAUS** dag 1 7:16: 0.1 s paus före "Sängen ska in i skjulet. Sen sover jag."
- **PAUS** dag 2 0:23: 0.0 s paus före "Ali vill ha idag: Blomkruka · +50 %"
- **PAUS** dag 2 0:36: 0.7 s paus före "Egen säng"
- **PAUS** dag 2 1:00: 1.9 s paus före "Precis det jag ville ha idag, min vän."
- **PAUS** dag 2 1:45: 0.0 s paus före "Gården är full av skräp. Jag börjar vid skjulet."
- **PAUS** dag 2 2:27: 0.4 s paus före "Tjena. Rolf. Ja kör sopbilen. Tippen där borta ä m"
- **PAUS** dag 2 2:40: 0.1 s paus före "Du har städat hela gården. Ingen gör så nuförtin."
- **PAUS** dag 2 2:44: 0.0 s paus före "Kvarnen står och väntar för att hållaren är full. "
- **PAUS** dag 2 2:52: 0.1 s paus före "Öj… ä dä du som printar grejer? Dom där nyckelring"
- **PAUS** dag 2 3:00: 0.1 s paus före "Tornet är fullt. Skrivaren får jobba ikapp."
- **PAUS** dag 2 3:02: 0.0 s paus före "Tornet är fullt. Skrivaren får jobba ikapp."
- **PAUS** dag 2 3:59: 0.0 s paus före "Ölhållaren är klar. Den lägger jag i Rolfs postlåd"
- **PAUS** dag 2 4:06: 1.7 s paus före "Flaggan uppe. Nu får Rolf hämta den."
- **PAUS** dag 2 4:30: 0.0 s paus före "Rolf gav mig en kanna. Som min farmors. Jag ritade"
- **PAUS** dag 2 4:41: 0.1 s paus före "Vindsnurran ska upp på skjulets tak."
- **PAUS** dag 2 4:59: 0.0 s paus före "Den snurrar! Långsamt. Men den snurrar."
- **SAMTIDIGT** dag 2 5:43: "Ali här. Skrivartrim. Jag skruvade på mi" och "Nu vet Ali att jag bor HÄR. Taket läcker"
- **PAUS** dag 2 5:44: 0.0 s paus före "Sov när du vill."
- **PAUS** dag 3 0:18: 0.3 s paus före "Ali vill ha idag: Blomkruka · +50 %"
- **SAMTIDIGT** dag 3 0:54: "ÖJ! Kajsa knuffa ner min flasköppnare i " och "Tratten är stor som en kaffekopp. Tunnan"
- **PAUS** dag 3 1:04: 0.1 s paus före "Rolf vill ha en flasköppnare. Den printar jag."
- **PAUS** dag 3 2:07: 0.0 s paus före "Nu printar den klart även när jag vilar benen."
- **PAUS** dag 3 2:11: 0.7 s paus före "Radio Tippen, Kjelle här. Skjulet vid tippen har f"
- **PAUS** dag 3 2:22: 0.1 s paus före "Jag springer för mycket. Med en ryggkorg bär jag s"
- **PAUS** dag 3 2:47: 0.0 s paus före "Ali här. Du printade Ryggkorg från min ritning. Oc"
- **PAUS** dag 3 5:55: 0.0 s paus före "Skrivare M hinner inte heller. Den kunde gå fortar"
- **PAUS** dag 3 6:53: 0.0 s paus före "(nytt mål i rutan)"
- **PAUS** dag 3 7:58: 0.2 s paus före "Tjo. Ska grilla på lördag. Min grillspade smälte. "
- **PAUS** dag 3 8:05: 0.0 s paus före "Grillspaden är klar. Den lägger jag i Rolfs postlå"
- **PAUS** dag 3 8:30: 0.0 s paus före "Kärran rymmer massor. Jag fyller den och tippar al"
- **PAUS** dag 3 8:38: 1.8 s paus före "Det får inte plats. Jag behöver något att tippa i."
- **PAUS** dag 3 9:32: 0.1 s paus före "Nu kan jag tömma hela kärran på en gång."
- **PAUS** dag 3 10:05: 0.1 s paus före "Jaha, Rolf har hämtat en grillspade."
- **PAUS** dag 3 13:42: 0.0 s paus före "(nytt mål i rutan)"
- **PAUS** dag 3 13:43: 0.7 s paus före "Nu vet Rolf att jag bor HÄR. Benen orkar inte tram"
- **SAMTIDIGT** dag 4 0:58: "Hörru. Röda backar ä bra plast. Om man h" och "Tjo. Flaket ä så trist. En tomte mä luva"
- **SAMTIDIGT** dag 4 0:58: "Tjo. Flaket ä så trist. En tomte mä luva" och "Rolf tippade DUBBEL last på soptippen!"
- **PAUS** dag 4 1:20: 0.0 s paus före "Fortare. Den kan gå ännu fortare. Jag hör det på d"
- **PAUS** dag 4 1:59: 0.0 s paus före "Det är tätt, det är varmt."
- **PAUS** dag 4 2:04: 0.1 s paus före "Radio Tippen, Kjelle här. Skjulet vid tippen har f"
- **PAUS** dag 4 2:14: 0.2 s paus före "Alis pappas dator. Med den kan jag sälja på nätet."
- **PAUS** dag 4 2:20: 0.0 s paus före "Jag ser 3D-skrivarvideor på YouTube i lagret. Inte"
- **PAUS** dag 4 2:30: 0.0 s paus före "Pappas gamla dator. Den har ett modem. Det låter s"
- **PAUS** dag 4 2:39: 0.1 s paus före "En lampskärm. Folk betalar för ljus som ser fint u"
- **PAUS** dag 5 0:18: 0.1 s paus före "Ali vill ha idag: Blomkruka · +50 %"
- **SAMTIDIGT** dag 5 0:36: "📔 Prestation: Ett hem att bo i · +3 res" och "📔 Prestation: Tusenlappen · +3 respekt"
- **PAUS** dag 5 2:31: 0.0 s paus före "Satt med AI:n hela natten igen. Fråga inte vad. Ok"
- **PAUS** dag 5 2:41: 0.0 s paus före "Den röda? Jag har aldrig vågat starta den. Ta den."
- **PAUS** dag 5 3:17: 0.0 s paus före "Den röda kvarnen står. Nu kör jag dit en tunna med"
- **SAMTIDIGT** dag 5 4:10: "Fôlk pratar gott om dej. Ja hitta röda b" och "Servetter. Massor. Ali flyttar lådan när"
- **PAUS** dag 5 4:42: 0.0 s paus före "Den röda kvarnen drar mer än vinden orkar. Solen f"
- **PAUS** dag 5 4:48: 0.1 s paus före "Göran snor mina nyckelringar. Han får ett eget stä"
- **PAUS** dag 5 4:56: 0.1 s paus före "AI:n och jag gjorde den i natt. Printa den. Snälla"
- **PAUS** dag 5 5:13: 0.8 s paus före "Göran har ett hem nu. Bättre än jag hade för en ve"
- **PAUS** dag 5 9:18: 0.0 s paus före "Jag hämtar varje morgon. Du lägger i, jag betalar."
- **PAUS** dag 5 9:24: 0.0 s paus före "Vaserna i lådan. Ali hämtar själv."
- **SAMTIDIGT** dag 5 9:57: "Tjo. Lådan vid fabriken! Ali kömmer mä s" och "1 sak i lådan · Ali hämtar i morgon bitt"
- **PAUS** dag 5 11:23: 0.0 s paus före "(nytt mål i rutan)"
- **PAUS** dag 6 0:19: 0.1 s paus före "Webbshopen: 1 paket i natt · +422 kr · Säljlådan: "
- **PAUS** dag 6 1:47: 0.0 s paus före "Fullt i händerna."
- **PAUS** dag 6 6:27: 0.0 s paus före "En hylla. Jag har en hylla. Saker har en plats nu."
- **PAUS** dag 6 6:32: 0.0 s paus före "Nu vet pappa att jag bor HÄR. Blå plast säljer bil"
- **PAUS** dag 6 6:33: 0.0 s paus före "(nytt mål i rutan)"
- **PAUS** dag 7 0:21: 0.0 s paus före "Webbshopen: 2 paket i natt · +558 kr · Ali vill ha"
- **SAMTIDIGT** dag 7 5:32: "Bra. Vilka då? De bruna? De bruna har hå" och "Jag skulle kunna äta en sopsäck. Nästan."
- **PAUS** dag 7 11:19: 0.0 s paus före "Varm mat. I skjulet. Mamma skulle inte tro det."
- **PAUS** dag 7 11:23: 0.0 s paus före "Ryggen värker av allt bärande."
- **PAUS** dag 7 11:23: 0.0 s paus före "(nytt mål i rutan)"
- **PAUS** dag 8 0:30: 0.0 s paus före "ÖJ. Ja va int mä mej själv på konditoriet. Förlåt "
- **SAMTIDIGT** dag 8 0:47: "ÖJ. Ja va int mä mej själv på konditorie" och "Fickorna är fulla. Jag får lägga något i"
- **PAUS** dag 8 1:07: 0.8 s paus före "Hmm… flaggan är uppe på Rolfs postlåda vid grinden"
- **PAUS** dag 9 0:13: 0.0 s paus före "Rolf har flyttat ut gärdesgården! Ny mark att utfo"
- **PAUS** dag 9 0:23: 0.0 s paus före "Webbshopen: 3 paket i natt · +4 271 kr · Ali vill "
- **SAMTIDIGT** dag 9 1:04: "ÖJ! Ny lapp i lådan. Du vet va dä betyde" och "Fickorna är fulla. Jag får lägga något i"
- **PAUS** dag 9 3:38: 0.0 s paus före "Ali här. Du printade Gamingbod (tillbyggnad) från "
- **PAUS** dag 9 3:51: 0.0 s paus före "Ali här. Trim till kolfiberskrivaren. Kolfiber är "
- **PAUS** dag 9 3:59: 0.0 s paus före "Boden är tom. Något att spela på."
- **PAUS** dag 9 6:09: 0.3 s paus före "Leveranslåda + autoprint ligger i handen."
- **PAUS** dag 9 6:25: 0.0 s paus före "Rolf tippar mer om han får bullar. Ali har bullar."
- **PAUS** dag 10 0:18: 0.0 s paus före "Webbshopen: 2 paket i natt · +2 590 kr · Ali vill "
- **SAMTIDIGT** dag 10 3:09: "Bra! Pappa tar med fler på torsdag. Jag " och "Täppan är rensad. Ali har spaljé och dro"
- **PAUS** dag 11 0:20: 0.1 s paus före "Ali vill ha idag: Designvas i röd PETG · +50 %"
- **PAUS** dag 11 1:21: 0.8 s paus före "Vad har Göran nu?"
- **PAUS** dag 11 1:24: 0.7 s paus före "Guld? Där nere?"
- **PAUS** dag 11 1:54: 0.0 s paus före "Dina krukor säljer. Tanterna i kvarteret älskar de"
- **PAUS** dag 11 2:35: 0.1 s paus före "Radio Tippen, Kjelle här. Skjulet vid tippen har f"
- **PAUS** dag 11 3:02: 0.1 s paus före "Min mark"
- **SAMTIDIGT** dag 11 3:02: "Min mark" och "PAPPA LETADE HELA LIVET. HMPF. GÅ IN DÅ."
- **SAMTIDIGT** dag 11 3:50: "Hon älska å bada hä. Gå du. Ja står hä e" och "Birgittas. Hon vaska för skoj. Hitta ald"
- **PAUS** dag 11 4:59: 0.0 s paus före "Huset kostar mer än jag har. Jag vaskar guld i flo"
- **PAUS** dag 12 0:18: 0.7 s paus före "Webbshopen: 2 paket i natt · +1 042 kr · Ali vill "
- **PAUS** dag 12 6:25: 0.0 s paus före "Guldet betalar grunden. Den gjuter jag nu."
- **PAUS** dag 12 22:31: 0.0 s paus före "(nytt mål i rutan)"
- **PAUS** dag 13 0:18: 0.9 s paus före "Webbshopen: 1 paket i natt · +3 839 kr · Ali vill "
- **PAUS** dag 13 2:25: 0.0 s paus före "Inget nytt längs vägen i dag. Bara måsar. Hälsning"
- **PAUS** dag 13 5:08: 0.0 s paus före "Guldet behöver en egen skrivare. Den bygger jag."
- **PAUS** dag 13 6:51: 0.5 s paus före "Jag har flyttat in! Skjulet blir verkstad – jag bo"
- **PAUS** dag 13 6:56: 0.0 s paus före "Kvarnen är för långsam."
- **PAUS** dag 13 6:57: 0.0 s paus före "(nytt mål i rutan)"
- **PAUS** dag 14 0:19: 0.1 s paus före "Webbshopen: 2 paket i natt · +3 844 kr · Ali vill "
- **PAUS** dag 15 0:20: 0.0 s paus före "Webbshopen: 2 paket i natt · +2 212 kr · Ali vill "
- **UPPREPNING** dag 2 3:02: du: "Tornet är fullt. Skrivaren får jobba ikapp." (förra gången dag 2)
- **UPPREPNING** dag 5 8:08: ali: "Den köper jag. Ge hit." (förra gången dag 1)
- **UPPREPNING** dag 6 1:47: du: "Fullt i händerna." (förra gången dag 6)
- **UPPREPNING** dag 7 3:45: ali: "Den köper jag. Ge hit." (förra gången dag 5)
- **UPPREPNING** dag 8 6:48: ali: "Den köper jag. Ge hit." (förra gången dag 7)
- **UPPREPNING** dag 8 9:00: ali: "Den köper jag. Ge hit." (förra gången dag 8)
- **UPPREPNING** dag 9 1:04: du: "Fickorna är fulla. Jag får lägga något i ryggsäcken först." (förra gången dag 8)
- **UPPREPNING** dag 9 3:06: ali: "Den köper jag. Ge hit." (förra gången dag 8)
- **UPPREPNING** dag 9 6:08: ali: "Den köper jag. Ge hit." (förra gången dag 9)
- **UPPREPNING** dag 11 0:45: du: "Fickorna är fulla. Jag får lägga något i ryggsäcken först." (förra gången dag 9)
- **UPPREPNING** dag 12 4:50: ali: "Den köper jag. Ge hit." (förra gången dag 9)
- **UPPREPNING** dag 12 12:14: ali: "Den köper jag. Ge hit." (förra gången dag 12)
- **UPPREPNING** dag 14 2:32: ali: "Den köper jag. Ge hit." (förra gången dag 12)
- **UPPREPNING** dag 14 6:19: ali: "Den köper jag. Ge hit." (förra gången dag 14)
- **SEN KVITTENS** dag 1 0:24: 2.6 s sen: ”Spikade ihop en skylt av bräder från skräpberget: ” (dagbok skylt)
- **TRÄNGSEL 2** dag 1 2:50: "Hur kunde du bara gå? Är du ok? Svara när jag ring" 3.3 s efter förra meddelandet, 9.0 s efter en klar uppgift
- **TRÄNGSEL 2** dag 2 4:22: "Ali här. Vindsnurra till cykeln. Vinden trampar åt" 2.0 s efter förra meddelandet, 15.2 s efter en klar uppgift
- **TRÄNGSEL 2** dag 3 1:30: "Ali här. Bilbatteriet ur min gamla Volvo står i la" 2.0 s efter förra meddelandet, 8.2 s efter en klar uppgift
- **TRÄNGSEL 2** dag 3 3:07: "Jag sa till pappa att du bor på en soptipp. Han sa" 2.0 s efter förra meddelandet, 25.2 s efter en klar uppgift
- **TRÄNGSEL 2** dag 3 8:12: "Rolf hä!! Funkar dä?? ja skrivr mä EN fingr. dä ta" 2.0 s efter förra meddelandet, 11.0 s efter en klar uppgift
- **TRÄNGSEL 2** dag 3 8:52: "Ali här. 🗑️ Sophållaren. Jag frågade AI:n hur man" 2.1 s efter förra meddelandet, 13.4 s efter en klar uppgift
- **TRÄNGSEL 2** dag 5 0:47: "Pappa kommer förbi i morgon. Han säger inget men h" 2.1 s efter förra meddelandet, 49.6 s efter en klar uppgift
- **TRÄNGSEL 2** dag 5 0:55: "Pappa och jag har lagt undan lite. 1 000 kr. Till " 2.0 s efter förra meddelandet, 57.4 s efter en klar uppgift
- **TRÄNGSEL 2** dag 5 4:32: "Ali här. Jag såg Solpanel på avstånd. Ett streck b" 5.1 s efter förra meddelandet, 41.6 s efter en klar uppgift
- **TRÄNGSEL 2** dag 5 9:01: "Ali här. 🔥 TURBOMOTOR. Jag skrev ”turbo, röda rän" 2.0 s efter förra meddelandet, 34.4 s efter en klar uppgift
- **RADBRYTNING** dag 6 3:41: för lång rad (44): "Spara till magnetpistolen · 1 660 / 2 400 kr"
- **FEL RÖST** dag 7 0:01: du: 8 dagar till jul. Cykelhjälmen. Utan nya saker att sälja tjä
- **RADBRYTNING** dag 7 2:10: för lång rad (44): "Spara till solcellsparken · 1 490 / 1 800 kr"
- **RADBRYTNING** dag 8 5:18: för lång rad (48): "Spara till kolfiberskrivaren · 2 234 / 11 500 kr"
- **RADBRYTNING** dag 8 5:56: för lång rad (48): "Spara till kolfiberskrivaren · 3 944 / 11 500 kr"
- **RADBRYTNING** dag 8 5:58: för lång rad (48): "Spara till kolfiberskrivaren · 5 569 / 11 500 kr"
- **RADBRYTNING** dag 8 6:44: för lång rad (48): "Spara till kolfiberskrivaren · 7 113 / 11 500 kr"
- **RADBRYTNING** dag 8 7:22: för lång rad (49): "Spara till kolfiberskrivaren · 11 374 / 11 500 kr"
- **TRÄNGSEL 2** dag 8 9:37: "Ali här. En batteribank till. Kolfibret är hungrig" 2.0 s efter förra meddelandet, 14.7 s efter en klar uppgift
- **RADBRYTNING** dag 11 3:35: för lång rad (44): "Spara till ängen i öster · 5 311 / 27 500 kr"
- **RADBRYTNING** dag 11 4:17: för lång rad (45): "Spara till ängen i öster · 20 514 / 27 500 kr"
- **RADBRYTNING** dag 12 7:03: för lång rad (39): "Spara till grunden · 27 009 / 75 000 kr"
- **RADBRYTNING** dag 12 9:23: för lång rad (39): "Spara till grunden · 27 009 / 75 000 kr"
- **RADBRYTNING** dag 12 11:33: för lång rad (39): "Spara till grunden · 27 009 / 75 000 kr"
- **RADBRYTNING** dag 12 11:43: för lång rad (39): "Spara till grunden · 29 004 / 75 000 kr"
- **RADBRYTNING** dag 12 12:05: för lång rad (39): "Spara till grunden · 30 899 / 75 000 kr"
- **RADBRYTNING** dag 12 12:41: för lång rad (39): "Spara till grunden · 36 034 / 75 000 kr"
- **RADBRYTNING** dag 12 13:19: för lång rad (39): "Spara till grunden · 37 578 / 75 000 kr"
- **RADBRYTNING** dag 12 13:59: för lång rad (39): "Spara till grunden · 40 442 / 75 000 kr"
- **RADBRYTNING** dag 12 14:25: för lång rad (39): "Spara till grunden · 41 839 / 75 000 kr"
- **RADBRYTNING** dag 12 14:47: för lång rad (39): "Spara till grunden · 44 633 / 75 000 kr"
- **RADBRYTNING** dag 12 15:27: för lång rad (39): "Spara till grunden · 46 030 / 75 000 kr"
- **RADBRYTNING** dag 12 16:07: för lång rad (39): "Spara till grunden · 50 221 / 75 000 kr"
- **RADBRYTNING** dag 12 16:53: för lång rad (39): "Spara till grunden · 53 015 / 75 000 kr"
- **RADBRYTNING** dag 12 17:39: för lång rad (39): "Spara till grunden · 57 206 / 75 000 kr"
- **RADBRYTNING** dag 12 18:29: för lång rad (39): "Spara till grunden · 61 397 / 75 000 kr"
- **RADBRYTNING** dag 12 19:07: för lång rad (39): "Spara till grunden · 62 794 / 75 000 kr"
- **RADBRYTNING** dag 12 19:53: för lång rad (39): "Spara till grunden · 64 191 / 75 000 kr"
- **RADBRYTNING** dag 12 20:07: för lång rad (39): "Spara till grunden · 65 588 / 75 000 kr"
- **RADBRYTNING** dag 12 20:37: för lång rad (39): "Spara till grunden · 68 382 / 75 000 kr"
- **RADBRYTNING** dag 12 21:23: för lång rad (39): "Spara till grunden · 69 779 / 75 000 kr"
- **RADBRYTNING** dag 12 21:33: för lång rad (39): "Spara till grunden · 72 573 / 75 000 kr"
- **RADBRYTNING** dag 12 22:15: för lång rad (39): "Spara till grunden · 73 970 / 75 000 kr"
- **RADBRYTNING** dag 13 2:58: för lång rad (45): "Spara till vindkraftverket · 6 406 / 9 950 kr"
- **TRÄNGSEL 2** dag 13 7:01: "Du har flyttat in i ett hus. Med trappa. Jag har k" 3.3 s efter förra meddelandet, 9.9 s efter en klar uppgift
- **FEL RÖST** dag 14 0:01: du: 1 dag till jul. En vedkamin. Det blir kallt i huset. En kami
- **TRÄNGSEL 2** dag 15 1:04: "Jag kommer kl 15 och hämtar dig. Pappa kör. Var re" 7.9 s efter förra meddelandet, 19.0 s efter en klar uppgift
- **TEMPO** dag 1 7:27: dag 1 tog 7.5 min (mål 10–12)
- **TEMPO** dag 2 5:49: dag 2 tog 5.8 min (mål 10–15)
- **TEMPO** dag 4 9:44: dag 4 tog 9.7 min (mål 10–15)
- **TEMPO** dag 6 6:36: dag 6 tog 6.6 min (mål 10–15)
- **TEMPO** dag 9 6:46: dag 9 tog 6.8 min (mål 10–15)
- **TEMPO** dag 10 4:37: dag 10 tog 4.6 min (mål 10–15)
- **TEMPO** dag 11 7:49: dag 11 tog 7.8 min (mål 10–15)
- **TEMPO** dag 12 22:37: dag 12 tog 22.6 min (mål 10–15)
- **TEMPO** dag 13 7:04: dag 13 tog 7.1 min (mål 10–15)
- **TEMPO** dag 14 7:50: dag 14 tog 7.8 min (mål 10–15)
- **TEMPO** dag 15 5:19: dag 15 tog 5.3 min (mål 10–15)

Sidfel: inga

## Dag 1

| Tid | Källa | Vem | Text |
|---|---|---|---|
| 0:00 | MÅL |  | Lasta av skrivaren |
| 0:00 | MÅL |  | Lasta av skrivaren |
| 0:00 | sak | bud | (tips) |
| 0:01 | väntar | du | Se så mycket skräp här är. Det är ju en guldgruva! |
| 0:01 | klar | bud | (tips) |
| 0:01 | sak | du | Se så mycket skräp här är. Det är ju en guldgruva! |
| 0:01 | röst | du | Se så mycket skräp här är. Det är ju en guldgruva! · STORY |
| 0:02 | tanke | du | ⏎ Enter – hoppa över |
| 0:02 | struken | du | Hammaren ligger i raden. Hjulet eller 2. |
| 0:02 | väntar | du | ⏎ Enter – hoppa över |
| 0:06 | sak-del | du | Först borde jag spika upp en skylt, så att alla ser att jag bor HÄR. |
| 0:06 | röst | du | Först borde jag spika upp en skylt, så att alla ser att jag bor HÄR. · STORY |
| 0:11 | klar | du | Se så mycket skräp här är. Det är ju en guldgruva! |
| 0:15 | väntar | du | Spikade ihop en skylt av bräder från skräpberget: Soptippsvägen 1. Inte mycket för världen, men det är MITT. |
| 0:15 | bekräftelse | du | Group |
| 0:15 | struken | du | ⏎ Enter – hoppa över |
| 0:15 | väntar | du | Storebrors skrivare står kvar på cykeln vid vägen. Den ska av. |
| 0:19 | sak | du | Spikade ihop en skylt av bräder från skräpberget: Soptippsvägen 1. Inte mycket för världen, men det är MITT. |
| 0:19 | kvitto-visas | du | Spikade ihop en skylt av bräder från skräpberget: Soptippsvägen 1. Inte mycket för världen, men det är MITT. |
| 0:19 | lapp | 📔 Dagbok | Spikade ihop en skylt av bräder från skräpberget: Soptippsvägen 1. Inte mycket för världen, men det är MITT. |
| 0:19 | dagbokrad | du | Spikade ihop en skylt av bräder från skräpberget: Soptippsvägen 1. Inte mycket för världen, men det är MITT. |
| 0:19 | notis | dagbok | Spikade ihop en skylt av bräder från skräpberget: Soptippsvägen 1. Inte mycket för världen, men det är MITT. |
| 0:20 | klar | du | Spikade ihop en skylt av bräder från skräpberget: Soptippsvägen 1. Inte mycket för världen, men det är MITT. |
| 0:20 | målruta |  | Lasta av skrivaren |
| 0:21 | händelse | lastatAv | sak=skrivare |
| 0:21 | paket |  | sms |
| 0:21 | väntar | mamma | Hur kunde du bara gå? Är du ok? Svara när jag ringer! |
| 0:21 | struken | du | Storebrors skrivare står kvar på cykeln vid vägen. Den ska av. |
| 0:21 | händelse | malKlart | id=lasta del=Dag 1 – Kom igång nasta=stall |
| 0:21 | bekräftelse | du | plats |
| 0:21 | kvittens | du | Tung. Den har storebror aldrig burit så långt. |
| 0:21 | väntar | du | Tung. Den har storebror aldrig burit så långt. |
| 0:21 | väntar | du | Skrivaren ställer jag mot skräpberget. Min första verkstad. |
| 0:21 | MÅL |  | Ställ upp skrivaren |
| 0:21 | sak | du | Tung. Den har storebror aldrig burit så långt. |
| 0:21 | röst | du | Tung. Den har storebror aldrig burit så långt. · STORY |
| 0:21 | målruta |  | Ställ upp skrivaren |
| 0:24 | brott | SEN KVITTENS | 2.6 s sen: ”Spikade ihop en skylt av bräder från skräpberget: ” (dagbok skylt) |
| 0:25 | klar | du | Tung. Den har storebror aldrig burit så långt. |
| 0:28 | struken | info:bra | 🖨️ Storebrors skrivare står på sin plats |
| 0:28 | händelse | placerat | sak=skrivareS |
| 0:28 | paket |  | tanke |
| 0:28 | tanke | du | Storebrors rulle. Den räcker inte länge. |
| 0:28 | väntar | du | Storebrors rulle. Den räcker inte länge. |
| 0:28 | duns | du | ställs ner |
| 0:28 | händelse | malKlart | id=stall del=Dag 1 – Kom igång nasta=strom |
| 0:28 | bekräftelse | du | plats |
| 0:28 | struken | du | Storebrors rulle. Den räcker inte länge. |
| 0:28 | väntar | du | Den har ingen ström. Cykeln vid vägen kanske kan ge ström. |
| 0:28 | målruta |  | Skrivaren behöver ström |
| 0:28 | MÅL |  | Skrivaren behöver ström |
| 0:30 | struken | du | Skrivaren ställer jag mot skräpberget. Min första verkstad. |
| 0:30 | sak | du | Den har ingen ström. Cykeln vid vägen kanske kan ge ström. |
| 0:30 | pil |  | Skrivaren behöver ström |
| 0:30 | notis | tanke | 💭 Den har ingen ström. Cykeln vid vägen kanske kan ge ström. |
| 0:30 | röst | du | Den har ingen ström. Cykeln vid vägen kanske kan ge ström. · MÅL |
| 0:31 | nick |  | nick:2 |
| 0:32 | kvittens-bock |  | ✓ Ställ upp skrivaren |
| 0:36 | klar | du | Den har ingen ström. Cykeln vid vägen kanske kan ge ström. |
| 1:04 | paket |  | tanke |
| 1:04 | tanke | du | Cykeln… och storebrors generator? |
| 1:04 | väntar | du | Cykeln… och storebrors generator? |
| 1:04 | sak | du | Cykeln… och storebrors generator? |
| 1:04 | kvitto-visas | du | Cykeln… och storebrors generator? |
| 1:04 | notis | tanke | 💭 Cykeln… och storebrors generator? |
| 1:04 | röst | du | Cykeln… och storebrors generator? · STORY |
| 1:04 | händelse | malKlart | id=strom del=Dag 1 – Kom igång nasta=bygg |
| 1:04 | bekräftelse | du | plats |
| 1:04 | väntar | du | Nu borde jag koppla på generatorn, så att cykeln gör el. |
| 1:04 | MÅL |  | Ställ cykel och generator |
| 1:06 | klar | du | Cykeln… och storebrors generator? |
| 1:06 | målruta |  | Ställ cykel och generator |
| 1:07 | händelse | placerat | sak=generator |
| 1:07 | duns | du | ställs ner |
| 1:08 | kvittens-bock |  | ✓ Skrivaren behöver ström |
| 1:10 | sak | du | Nu borde jag koppla på generatorn, så att cykeln gör el. |
| 1:10 | pil |  | Ställ cykel och generator |
| 1:10 | notis | tanke | 💭 Nu borde jag koppla på generatorn, så att cykeln gör el. |
| 1:10 | röst | du | Nu borde jag koppla på generatorn, så att cykeln gör el. · MÅL |
| 1:10 | nick |  | nick:3 |
| 1:11 | ljud | utrustning | Cykeln i famnen |
| 1:11 | händelse | lyft | sak=cykel |
| 1:15 | klar | du | Nu borde jag koppla på generatorn, så att cykeln gör el. |
| 1:15 | paket |  | tanke |
| 1:15 | tanke | du | Cykeln ska stå vid skrivaren. |
| 1:15 | väntar | du | Cykeln ska stå vid skrivaren. |
| 1:20 | händelse | placerat | sak=cykel |
| 1:20 | duns | du | ställs ner |
| 1:20 | struken | du | Cykeln ska stå vid skrivaren. |
| 1:22 | händelse | ombyggd | sak=cykel |
| 1:22 | händelse | malKlart | id=bygg del=Dag 1 – Kom igång nasta=valjModell |
| 1:22 | bekräftelse | du | plats |
| 1:22 | väntar | du | Strömmen finns. Nu ska skrivaren veta vad den ska göra, sen trampar jag. |
| 1:22 | målruta |  | Välj vad skrivaren ska printa |
| 1:22 | MÅL |  | Välj vad skrivaren ska printa |
| 1:22 | sak | du | Strömmen finns. Nu ska skrivaren veta vad den ska göra, sen trampar jag. |
| 1:22 | pil |  | Välj vad skrivaren ska printa |
| 1:22 | notis | tanke | 💭 Strömmen finns. Nu ska skrivaren veta vad den ska göra, sen trampar jag. |
| 1:22 | röst | du | Strömmen finns. Nu ska skrivaren veta vad den ska göra, sen trampar jag. · MÅL |
| 1:24 | händelse | printStart | sak=nyckelring |
| 1:24 | händelse | malKlart | id=valjModell del=Dag 1 – Kom igång nasta=trampa |
| 1:24 | bekräftelse | du | plats |
| 1:24 | kvittens | du | Den piper. Den GÖR något. |
| 1:24 | väntar | du | Den piper. Den GÖR något. |
| 1:24 | väntar | du | Nu behöver den ström. Trampa. |
| 1:24 | MÅL |  | Trampa cykeln |
| 1:27 | målruta |  | Trampa cykeln |
| 1:29 | klar | du | Strömmen finns. Nu ska skrivaren veta vad den ska göra, sen trampar jag. |
| 1:29 | sak | du | Den piper. Den GÖR något. |
| 1:29 | röst | du | Den piper. Den GÖR något. · STORY |
| 1:29 | händelse | printKlar | sak=nyckelring n=1 |
| 1:29 | händelse | malKlart | id=trampa del=Dag 1 – Kom igång nasta=rullSlut |
| 1:29 | bekräftelse | du | plats |
| 1:29 | kvittens | du | Klar! Ta ut den innan den ändrar sig. |
| 1:29 | väntar | du | Klar! Ta ut den innan den ändrar sig. |
| 1:29 | väntar | du | En nyckelring till, så länge storebrors rulle räcker. |
| 1:30 | MÅL |  | En nyckelring till |
| 1:31 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 1:31 | paket |  | sms |
| 1:31 | väntar | bror | VA FAN?! Fick du igång den?? Jag försökte i typ ett år. Den bara pep. 😳 |
| 1:31 | skratt | bror | VA FAN?! Fick du igång den?? Jag försökt |
| 1:31 | paket |  | sms |
| 1:31 | väntar | bror | Sälj grejerna i affären mitt emot, han köper allt. |
| 1:31 | foto | du | Första nyckelringen |
| 1:31 | paket |  | tanke |
| 1:31 | tanke | du | Jag gjorde den här. Av skräp. Det här kan funka. |
| 1:31 | väntar | du | Jag gjorde den här. Av skräp. Det här kan funka. |
| 1:31 | väntar | ali | Hallå där, nya grannen! Vad är det där du gör? |
| 1:31 | klar | du | Den piper. Den GÖR något. |
| 1:33 | sak | du | Klar! Ta ut den innan den ändrar sig. |
| 1:33 | röst | du | Klar! Ta ut den innan den ändrar sig. · STORY |
| 1:34 | målruta |  | En nyckelring till |
| 1:38 | klar | du | Klar! Ta ut den innan den ändrar sig. |
| 1:38 | sak | du | Jag gjorde den här. Av skräp. Det här kan funka. |
| 1:38 | notis | tanke | 💭 Jag gjorde den här. Av skräp. Det här kan funka. |
| 1:38 | röst | du | Jag gjorde den här. Av skräp. Det här kan funka. · STORY |
| 1:43 | klar | du | Jag gjorde den här. Av skräp. Det här kan funka. |
| 1:43 | sak | ali | Hallå där, nya grannen! Vad är det där du gör? |
| 1:43 | händelse | dialog | id=aliRop |
| 1:43 | röst | ali | Hallå där, nya grannen! Vad är det där du gör? · REAKTION |
| 1:44 | bubbla |  | Hallå där, nya grannen! Vad är det där du gör? |
| 1:45 | händelse | printStart | sak=nyckelring |
| 1:46 | tanke | du | Den stannar när jag slutar trampa. Ström som sparas hade varit nåt. |
| 1:46 | väntar | du | Den stannar när jag slutar trampa. Ström som sparas hade varit nåt. |
| 1:46 | klar | ali | Hallå där, nya grannen! Vad är det där du gör? |
| 1:47 | struken | du | Nu behöver den ström. Trampa. |
| 1:49 | sak | bror | VA FAN?! Fick du igång den?? Jag försökte i typ ett år. Den bara pep. 😳 |
| 1:49 | skratt | bror | VA FAN?! Fick du igång den?? Jag försökt |
| 1:49 | sms | bror | VA FAN?! Fick du igång den?? Jag försökte i typ ett år. Den bara pep. 😳 |
| 1:49 | skratt | bror | VA FAN?! Fick du igång den?? Jag försökt |
| 1:49 | händelse | dialog | id=brorSms1 |
| 1:49 | sms-bubbla | bror | VA FAN?! Fick du igång den?? Jag försökte i typ ett år. Den bara pep. 😳 |
| 1:49 | skratt | bror | VA FAN?! Fick du igång den?? Jag försökt |
| 1:49 | röst | bror | VA FAN?! Fick du igång den?? Jag försökte i typ ett år. Den bara pep. 😳 · REAKTION |
| 1:51 | händelse | printKlar | sak=nyckelring n=2 |
| 1:51 | paket |  | tanke |
| 1:51 | tanke | du | Slut på storebrors rulle. Och här ligger ju plast överallt. Om jag bara kunde göra tråd av skräpet… |
| 1:51 | väntar | du | Slut på storebrors rulle. Och här ligger ju plast överallt. Om jag bara kunde göra tråd av skräpet… |
| 1:51 | händelse | malKlart | id=rullSlut del=Dag 1 – Kom igång nasta=saljTva |
| 1:51 | bekräftelse | du | plats |
| 1:51 | struken | du | Den stannar när jag slutar trampa. Ström som sparas hade varit nåt. |
| 1:51 | väntar | du | Affären mitt emot. Han verkar nyfiken. Jag visar honom. |
| 1:51 | MÅL |  | Visa ringarna i affären |
| 1:52 | kvitto-visas | du | Slut på storebrors rulle. Och här ligger ju plast överallt. Om jag bara kunde göra tråd av skräpet… |
| 1:52 | notis | tanke | 💭 Slut på storebrors rulle. Och här ligger ju plast överallt. Om jag bara kunde göra tråd av skräpet… |
| 1:53 | målruta |  | Visa ringarna i affären |
| 1:53 | hjälp | kontroll | Tab: Dina sms och dagboken |
| 1:55 | kvittens-bock |  | ✓ En nyckelring till |
| 1:57 | klar | bror | VA FAN?! Fick du igång den?? Jag försökte i typ ett år. Den bara pep. 😳 |
| 1:57 | skratt | bror | VA FAN?! Fick du igång den?? Jag försökt |
| 1:57 | struken | du | En nyckelring till, så länge storebrors rulle räcker. |
| 1:57 | struken | du | Affären mitt emot. Han verkar nyfiken. Jag visar honom. |
| 1:59 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 1:59 | struken | ali | Hallå där, nya grannen! Vad är det där du gör? |
| 2:01 | sak | du | Affären mitt emot. Han verkar nyfiken. Jag visar honom. |
| 2:01 | pil |  | Visa ringarna i affären |
| 2:01 | notis | tanke | 💭 Affären mitt emot. Han verkar nyfiken. Jag visar honom. |
| 2:01 | röst | du | Affären mitt emot. Han verkar nyfiken. Jag visar honom. · MÅL |
| 2:04 | klar | du | Affären mitt emot. Han verkar nyfiken. Jag visar honom. |
| 2:05 | struken | ali | Pappas gamla köttkvarn. Den har malt allt utom kött. Trettio kronor, så är den din. |
| 2:05 | händelse | dialog | id=aliForsta |
| 2:05 | butiksbubbla | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 2:05 | röst | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. · STORY |
| 2:06 | händelse | salt | sak=nyckelring n=2 |
| 2:06 | aliSalt | ali | 30 |
| 2:06 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 2:06 | händelse | dialog | id=aliKvarnErbjud |
| 2:06 | butiksbubbla | ali | Pappas gamla köttkvarn. Den har malt allt utom kött. Trettio kronor, så är den din. |
| 2:08 | händelse | malKlart | id=saljTva del=Dag 1 – Kom igång nasta=aliKvarn |
| 2:08 | bekräftelse | du | plats |
| 2:08 | väntar | du | Ali har en gammal kvarn. Den gör tråd av skräp. |
| 2:08 | MÅL |  | Köp kvarnen |
| 2:08 | väntar | ali | Pappas gamla köttkvarn. Den har malt allt utom kött. Trettio kronor, så är den din. |
| 2:12 | kvittens-bock |  | ✓ Visa ringarna i affären |
| 2:15 | sak | ali | Pappas gamla köttkvarn. Den har malt allt utom kött. Trettio kronor, så är den din. |
| 2:15 | röst | ali | Pappas gamla köttkvarn. Den har malt allt utom kött. Trettio kronor, så är den din. · STORY |
| 2:17 | struken | du | Ali har en gammal kvarn. Den gör tråd av skräp. |
| 2:17 | målruta |  | Köp kvarnen |
| 2:19 | struken | du | Ali har en gammal kvarn. Den gör tråd av skräp. |
| 2:19 | klar | ali | Pappas gamla köttkvarn. Den har malt allt utom kött. Trettio kronor, så är den din. |
| 2:20 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 2:20 | struken | ali | Pappas gamla köttkvarn. Den har malt allt utom kött. Trettio kronor, så är den din. |
| 2:22 | händelse | kopt | sak=gammalkvarn |
| 2:22 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 2:22 | händelse | dialog | id=aliKvarnKopt |
| 2:22 | butiksbubbla | ali | Den är din. Pappa hade blivit glad. Han trodde aldrig att nån skulle vilja ha den. |
| 2:23 | väntar | ali | Den är din. Pappa hade blivit glad. Han trodde aldrig att nån skulle vilja ha den. |
| 2:23 | händelse | malKlart | id=aliKvarn del=Dag 1 – Kom igång nasta=kvarn |
| 2:23 | bekräftelse | du | plats |
| 2:23 | väntar | du | Kvarnen ska stå vid skrivaren, närmast skräpberget. |
| 2:23 | MÅL |  | Ställ kvarnen |
| 2:27 | kvittens-bock |  | ✓ Köp kvarnen |
| 2:29 | sak | ali | Den är din. Pappa hade blivit glad. Han trodde aldrig att nån skulle vilja ha den. |
| 2:29 | röst | ali | Den är din. Pappa hade blivit glad. Han trodde aldrig att nån skulle vilja ha den. · STORY |
| 2:31 | målruta |  | Ställ kvarnen |
| 2:31 | pil |  | Ställ kvarnen |
| 2:32 | nick |  | nick:9 |
| 2:36 | klar | ali | Den är din. Pappa hade blivit glad. Han trodde aldrig att nån skulle vilja ha den. |
| 2:36 | struken | du | Ali har en gammal kvarn. Den gör tråd av skräp. |
| 2:36 | sak | du | Kvarnen ska stå vid skrivaren, närmast skräpberget. |
| 2:36 | notis | tanke | 💭 Kvarnen ska stå vid skrivaren, närmast skräpberget. |
| 2:36 | röst | du | Kvarnen ska stå vid skrivaren, närmast skräpberget. · MÅL |
| 2:41 | klar | du | Kvarnen ska stå vid skrivaren, närmast skräpberget. |
| 2:41 | händelse | placerat | sak=kvarnen |
| 2:41 | duns | du | ställs ner |
| 2:41 | händelse | malKlart | id=kvarn del=Dag 1 – Kom igång nasta=flaska |
| 2:41 | bekräftelse | du | plats |
| 2:41 | väntar | du | Skräp i kvarnen, sen vevar jag. Då blir det tråd. |
| 2:42 | MÅL |  | Gör egen tråd |
| 2:42 | struken | bror | Sälj grejerna i affären mitt emot, han köper allt. |
| 2:42 | målruta |  | Gör egen tråd |
| 2:42 | sak | du | Skräp i kvarnen, sen vevar jag. Då blir det tråd. |
| 2:42 | pil |  | Gör egen tråd |
| 2:42 | notis | tanke | 💭 Skräp i kvarnen, sen vevar jag. Då blir det tråd. |
| 2:42 | röst | du | Skräp i kvarnen, sen vevar jag. Då blir det tråd. · MÅL |
| 2:42 | nick |  | nick:10 |
| 2:45 | kvittens-bock |  | ✓ Ställ kvarnen |
| 2:47 | klar | du | Skräp i kvarnen, sen vevar jag. Då blir det tråd. |
| 2:49 | hjälp | kontroll | Klick: Veva kvarnen tills tratten är tom |
| 2:50 | brott | TRÄNGSEL 2 | "Hur kunde du bara gå? Är du ok? Svara när jag ring" 3.3 s efter förra meddelandet, 9.0 s efter en klar uppgift |
| 2:50 | sak | mamma | Hur kunde du bara gå? Är du ok? Svara när jag ringer! |
| 2:50 | sms | mamma | Hur kunde du bara gå? Är du ok? Svara när jag ringer! |
| 2:50 | sms-bubbla | mamma | Hur kunde du bara gå? Är du ok? Svara när jag ringer! |
| 2:50 | röst | mamma | Hur kunde du bara gå? Är du ok? Svara när jag ringer! · STORY |
| 2:55 | klar | mamma | Hur kunde du bara gå? Är du ok? Svara när jag ringer! |
| 2:56 | struken | info:bra | 3 st i tratten – veva nu! |
| 2:57 | händelse | malKlart | id=flaska del=Dag 1 – Kom igång nasta=egenPrint |
| 2:57 | bekräftelse | du | plats |
| 2:57 | kvittens | du | Det blir tråd! Riktig plasttråd. |
| 2:57 | väntar | du | Det blir tråd! Riktig plasttråd. |
| 2:57 | dagbok-tyst | du | Kvarnen funkar. Soptippen är en gruva. |
| 2:57 | väntar | du | Min egen tråd. Nu printar jag en nyckelring av den. |
| 2:57 | MÅL |  | Printa med egen tråd |
| 2:57 | sak | du | Det blir tråd! Riktig plasttråd. |
| 2:57 | röst | du | Det blir tråd! Riktig plasttråd. · STORY |
| 2:57 | målruta |  | Printa med egen tråd |
| 2:57 | tanke | du | Högar bakom staketet. Där inne ligger mer än på hela gården. |
| 2:57 | väntar | du | Högar bakom staketet. Där inne ligger mer än på hela gården. |
| 3:03 | klar | du | Det blir tråd! Riktig plasttråd. |
| 3:03 | sak | du | Min egen tråd. Nu printar jag en nyckelring av den. |
| 3:03 | pil |  | Printa med egen tråd |
| 3:03 | notis | tanke | 💭 Min egen tråd. Nu printar jag en nyckelring av den. |
| 3:03 | röst | du | Min egen tråd. Nu printar jag en nyckelring av den. · MÅL |
| 3:03 | nick |  | nick:11 |
| 3:07 | klar | du | Min egen tråd. Nu printar jag en nyckelring av den. |
| 3:13 | händelse | printStart | sak=nyckelring |
| 3:13 | toast | bra | 🔗 Slangen kopplad |
| 3:16 | sak | du | Högar bakom staketet. Där inne ligger mer än på hela gården. |
| 3:16 | notis | tanke | 💭 Högar bakom staketet. Där inne ligger mer än på hela gården. |
| 3:16 | röst | du | Högar bakom staketet. Där inne ligger mer än på hela gården. · REAKTION |
| 3:18 | händelse | printKlar | sak=nyckelring n=3 |
| 3:18 | paket |  | tanke |
| 3:18 | tanke | du | En nyckelring av en gammal schampoflaska. Den luktar fortfarande päron. |
| 3:18 | väntar | du | En nyckelring av en gammal schampoflaska. Den luktar fortfarande päron. |
| 3:18 | skratt | du | egen tråd |
| 3:18 | händelse | malKlart | id=egenPrint del=Dag 1 – Kom igång nasta=salj |
| 3:18 | bekräftelse | du | plats |
| 3:18 | struken | du | En nyckelring av en gammal schampoflaska. Den luktar fortfarande päron. |
| 3:18 | väntar | du | Ali köper nog den här också. |
| 3:18 | målruta |  | Sälj hos Ali |
| 3:18 | MÅL |  | Sälj hos Ali |
| 3:18 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 3:19 | klar | du | Högar bakom staketet. Där inne ligger mer än på hela gården. |
| 3:22 | sak | du | Ali köper nog den här också. |
| 3:22 | pil |  | Sälj hos Ali |
| 3:22 | notis | tanke | 💭 Ali köper nog den här också. |
| 3:22 | röst | du | Ali köper nog den här också. · MÅL |
| 3:22 | kvittens-bock |  | ✓ Printa med egen tråd |
| 3:22 | nick |  | nick:12 |
| 3:23 | händelse | printStart | sak=nyckelring |
| 3:24 | händelse | printKlar | sak=nyckelring n=4 |
| 3:25 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 3:26 | klar | du | Ali köper nog den här också. |
| 3:30 | händelse | printStart | sak=nyckelring |
| 3:31 | händelse | printKlar | sak=nyckelring n=5 |
| 3:31 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 3:38 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 3:40 | händelse | salt | sak=nyckelring n=3 |
| 3:40 | aliSalt | ali | 45 |
| 3:40 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 3:40 | händelse | dialog | id=aliNyckelIgen |
| 3:40 | röst | ali | Nyckelringar igen? Folk tappar sina nycklar hela tiden. · STORY |
| 3:40 | butiksbubbla | ali | Nyckelringar igen? Folk tappar sina nycklar hela tiden. |
| 3:40 | väntar | kjelle | God morgon, det är Kjelle på Radio Tippen! Det har flyttat in någon i det gamla skjulet. Med en cykel och en skrivare. Spännande, Gunnar. |
| 3:40 | radio | kjelle | God morgon, det är Kjelle på Radio Tippen! Det har flyttat in någon i det gamla skjulet. Med en cykel och en skrivare. Spännande, Gunnar. |
| 3:40 | skratt | du | Radio-Kjelle |
| 3:41 | händelse | malKlart | id=salj del=Dag 1 – Kom igång nasta=powerbank |
| 3:41 | bekräftelse | du | plats |
| 3:41 | paket | ali | ali → ge |
| 3:41 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 3:41 | händelse | dialog | id=aliPowerbank |
| 3:41 | butiksbubbla | ali | Jag såg dig cykla. Det ser jobbigt ut. Ta den här. Bra kunder får bonus. |
| 3:41 | väntar | du | Koppla in powerbanken. |
| 3:41 | MÅL |  | Koppla in powerbanken |
| 3:44 | målruta |  | Koppla in powerbanken |
| 3:44 | röst | ali | Jag såg dig cykla. Det ser jobbigt ut. Ta den här. Bra kunder får bonus. · STORY |
| 3:45 | kvittens-bock |  | ✓ Sälj hos Ali |
| 3:50 | sak | du | Koppla in powerbanken. |
| 3:50 | pil |  | Koppla in powerbanken |
| 3:50 | röst | du | Koppla in powerbanken. · MÅL |
| 3:50 | nick |  | nick:13 |
| 3:51 | klar | du | Koppla in powerbanken. |
| 3:58 | skratt | du | powerbanken monterad |
| 3:58 | paket |  | tanke |
| 3:58 | tanke | du | Nu sparas lite ström. En nyckelring, typ. Framtiden är här, och den sitter fast med eltejp. |
| 3:58 | väntar | du | Nu sparas lite ström. En nyckelring, typ. Framtiden är här, och den sitter fast med eltejp. |
| 3:58 | monterat | du | byggsats:powerbank |
| 3:58 | händelse | monterat | sak=powerbank |
| 3:58 | sak | du | Nu sparas lite ström. En nyckelring, typ. Framtiden är här, och den sitter fast med eltejp. |
| 3:58 | kvitto-visas | du | Nu sparas lite ström. En nyckelring, typ. Framtiden är här, och den sitter fast med eltejp. |
| 3:58 | notis | tanke | 💭 Nu sparas lite ström. En nyckelring, typ. Framtiden är här, och den sitter fast med eltejp. |
| 3:58 | röst | du | Nu sparas lite ström. En nyckelring, typ. Framtiden är här, och den sitter fast med eltejp. · REAKTION |
| 3:58 | händelse | malKlart | id=powerbank del=Dag 1 – Kom igång nasta=kopGrip |
| 3:58 | bekräftelse | du | plats |
| 3:58 | paket |  | lapp → ge |
| 3:58 | lapp-kö | 🧺 Ali | Ali här. Nyckelringen sålde direkt. Jag ville bli ingenjör en gång. Nu har jag låtit en AI rita en skräpgrip. Kom och titta. |
| 3:58 | väntar | ali | Ali här. Nyckelringen sålde direkt. Jag ville bli ingenjör en gång. Nu har jag låtit en AI rita en skräpgrip. Kom och titta. |
| 3:58 | väntar |  | (läget ändras) |
| 3:58 | MÅL |  | Köp skräpgripen |
| 4:02 | kvittens-bock |  | ✓ Gå till Ali |
| 4:05 | klar | du | Nu sparas lite ström. En nyckelring, typ. Framtiden är här, och den sitter fast med eltejp. |
| 4:05 | sak |  | (läget ändras) |
| 4:05 | klar |  | (läget ändras) |
| 4:08 | sak | ali | Ali här. Nyckelringen sålde direkt. Jag ville bli ingenjör en gång. Nu har jag låtit en AI rita en skräpgrip. Kom och titta. |
| 4:08 | sms | ali | Ali här. Nyckelringen sålde direkt. Jag ville bli ingenjör en gång. Nu har jag låtit en AI rita en skräpgrip. Kom och titta. |
| 4:08 | händelse | dialog | id=aliGripSms |
| 4:08 | sms-bubbla | ali | Ali här. Nyckelringen sålde direkt. Jag ville bli ingenjör en gång. Nu har jag låtit en AI rita en skräpgrip. Kom och titta. |
| 4:08 | röst | ali | Ali här. Nyckelringen sålde direkt. Jag ville bli ingenjör en gång. Nu har jag låtit en AI rita en skräpgrip. Kom och titta. · STORY |
| 4:08 | orsak-väntan |  | dialog:aliGripSms |
| 4:08 | väntar | du | Med en skräpgrip slipper jag böja mig. Ali har en ritning. |
| 4:08 | målruta |  | Köp skräpgripen |
| 4:13 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 4:15 | struken | info:guld | 3D-modell köpt – printa skräpgrip |
| 4:15 | händelse | kopt | sak=grip |
| 4:15 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 4:15 | händelse | dialog | id=aliForstaRitning |
| 4:15 | butiksbubbla | ali | Bra val. Ritningen räcker till en skräpgrip. |
| 4:16 | händelse | malKlart | id=kopGrip del=Dag 1 – Kom igång nasta=printGrip |
| 4:16 | bekräftelse | du | plats |
| 4:16 | väntar | du | Min första 3D-modell! Jag printar inte bara saker – jag printar maskiner. |
| 4:16 | väntar | du | Ritningen är min. Nu printar jag skräpgripen. |
| 4:16 | MÅL |  | Printa skräpgripen |
| 4:16 | väntar | ali | Bra val. Ritningen räcker till en skräpgrip. |
| 4:18 | kvitto-visas | du | Min första 3D-modell! Jag printar inte bara saker – jag printar maskiner. |
| 4:18 | lapp | 📔 Dagbok | Min första 3D-modell! Jag printar inte bara saker – jag printar maskiner. |
| 4:18 | dagbokrad | du | Min första 3D-modell! Jag printar inte bara saker – jag printar maskiner. |
| 4:18 | notis | dagbok | Min första 3D-modell! Jag printar inte bara saker – jag printar maskiner. |
| 4:19 | målruta |  | Printa skräpgripen |
| 4:19 | pil |  | Printa skräpgripen |
| 4:19 | nick |  | nick:15 |
| 4:20 | klar | ali | Ali här. Nyckelringen sålde direkt. Jag ville bli ingenjör en gång. Nu har jag låtit en AI rita en skräpgrip. Kom och titta. |
| 4:20 | sak | ali | Bra val. Ritningen räcker till en skräpgrip. |
| 4:20 | röst | ali | Bra val. Ritningen räcker till en skräpgrip. · STORY |
| 4:25 | klar | ali | Bra val. Ritningen räcker till en skräpgrip. |
| 4:25 | struken | kjelle | God morgon, det är Kjelle på Radio Tippen! Det har flyttat in någon i det gamla skjulet. Med en cykel och en skrivare. Spännande, Gunnar. |
| 4:25 | struken | du | Med en skräpgrip slipper jag böja mig. Ali har en ritning. |
| 4:25 | sak | du | Ritningen är min. Nu printar jag skräpgripen. |
| 4:25 | notis | tanke | 💭 Ritningen är min. Nu printar jag skräpgripen. |
| 4:25 | röst | du | Ritningen är min. Nu printar jag skräpgripen. · MÅL |
| 4:29 | klar | du | Ritningen är min. Nu printar jag skräpgripen. |
| 4:35 | händelse | printStart | sak=byggsats:grip |
| 4:36 | toast | fel | Ingen ström – trampa cykeln |
| 4:36 | väntar | notis:Storebrors skrivare: Ingen ström – tramp | Storebrors skrivare: Ingen ström – trampa cykeln |
| 4:38 | sak | notis:Storebrors skrivare: Ingen ström – tramp | Storebrors skrivare: Ingen ström – trampa cykeln |
| 4:38 | notis | fel | Storebrors skrivare: Ingen ström – trampa cykeln |
| 4:39 | händelse | printKlar | sak=byggsats:grip n=1 |
| 4:41 | klar | notis:Storebrors skrivare: Ingen ström – tramp | Storebrors skrivare: Ingen ström – trampa cykeln |
| 4:51 | tanke | du | Skräpgrip ska jag ha på mig. |
| 4:51 | väntar | du | Skräpgrip ska jag ha på mig. |
| 4:51 | händelse | tagitUrPrint | sak=byggsats:grip n=1 |
| 4:51 | paket |  | sms |
| 4:51 | väntar | ali | Ali här. Jag såg Skräpgrip på avstånd. Ett streck blev lite snett. Mitt fel. Vackert ändå. |
| 4:51 | sak | du | Skräpgrip ska jag ha på mig. |
| 4:51 | notis | tanke | 💭 Skräpgrip ska jag ha på mig. |
| 4:51 | röst | du | Skräpgrip ska jag ha på mig. · REAKTION |
| 4:51 | hjälp | kontroll | Klick: Klicka för att ta på dig den |
| 4:53 | klar | du | Skräpgrip ska jag ha på mig. |
| 4:55 | tanke | du | Skräpgripen sitter! Jag bär 6, siktar lättare och plockar när jag går nära. |
| 4:55 | väntar | du | Skräpgripen sitter! Jag bär 6, siktar lättare och plockar när jag går nära. |
| 4:55 | tog på | du | byggsats:grip |
| 4:55 | händelse | monterat | sak=grip |
| 4:55 | sak | du | Skräpgripen sitter! Jag bär 6, siktar lättare och plockar när jag går nära. |
| 4:55 | notis | tanke | 💭 Skräpgripen sitter! Jag bär 6, siktar lättare och plockar när jag går nära. |
| 4:55 | röst | du | Skräpgripen sitter! Jag bär 6, siktar lättare och plockar när jag går nära. · REAKTION |
| 4:55 | händelse | malKlart | id=printGrip del=Dag 1 – Kom igång nasta=krukaD1 |
| 4:55 | bekräftelse | du | plats |
| 4:55 | väntar | du | Spara till krukreceptet. |
| 4:56 | MÅL |  | Spara till krukreceptet · 0 / 40 kr |
| 4:57 | händelse | printStart | sak=nyckelring |
| 4:58 | målruta |  | Spara till krukreceptet · 0 / 40 kr |
| 4:58 | händelse | printKlar | sak=nyckelring n=6 |
| 4:59 | kvittens-bock |  | ✓ Printa skräpgripen |
| 5:04 | klar | du | Skräpgripen sitter! Jag bär 6, siktar lättare och plockar när jag går nära. |
| 5:04 | sak | ali | Ali här. Jag såg Skräpgrip på avstånd. Ett streck blev lite snett. Mitt fel. Vackert ändå. |
| 5:04 | sms | ali | Ali här. Jag såg Skräpgrip på avstånd. Ett streck blev lite snett. Mitt fel. Vackert ändå. |
| 5:04 | sms-bubbla | ali | Ali här. Jag såg Skräpgrip på avstånd. Ett streck blev lite snett. Mitt fel. Vackert ändå. |
| 5:04 | röst | ali | Ali här. Jag såg Skräpgrip på avstånd. Ett streck blev lite snett. Mitt fel. Vackert ändå. · REAKTION |
| 5:14 | klar | ali | Ali här. Jag såg Skräpgrip på avstånd. Ett streck blev lite snett. Mitt fel. Vackert ändå. |
| 5:14 | sak | du | Spara till krukreceptet. |
| 5:14 | pil |  | Spara till krukreceptet · 0 / 40 kr |
| 5:14 | röst | du | Spara till krukreceptet. · MÅL |
| 5:15 | upplåst | bara | grip |
| 5:15 | brott | UPPLÅST | grip (bara 3 av 3) |
| 5:15 | händelse | upplast | id=grip flask=bara |
| 5:15 | paket |  | tanke |
| 5:15 | tanke | du | Ett skräp i taget. Jag springer ihjäl mig. |
| 5:15 | väntar | du | Ett skräp i taget. Jag springer ihjäl mig. |
| 5:18 | klar | du | Spara till krukreceptet. |
| 5:18 | sak | du | Ett skräp i taget. Jag springer ihjäl mig. |
| 5:18 | notis | tanke | 💭 Ett skräp i taget. Jag springer ihjäl mig. |
| 5:18 | röst | du | Ett skräp i taget. Jag springer ihjäl mig. · STORY |
| 5:18 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 5:20 | händelse | printStart | sak=nyckelring |
| 5:21 | händelse | printKlar | sak=nyckelring n=7 |
| 5:22 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 5:22 | klar | du | Ett skräp i taget. Jag springer ihjäl mig. |
| 5:24 | händelse | printStart | sak=nyckelring |
| 5:25 | händelse | printKlar | sak=nyckelring n=8 |
| 5:26 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 5:32 | väntar | ali | Den köper jag. Ge hit. |
| 5:32 | sak | ali | Den köper jag. Ge hit. |
| 5:32 | röst | ali | Den köper jag. Ge hit. · REAKTION |
| 5:32 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 5:33 | händelse | salt | sak=nyckelring n=1 |
| 5:33 | aliSalt | ali | 15 |
| 5:33 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 5:34 | händelse | salt | sak=nyckelring n=1 |
| 5:34 | aliSalt | ali | 15 |
| 5:34 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 5:34 | händelse | salt | sak=nyckelring n=1 |
| 5:34 | aliSalt | ali | 15 |
| 5:34 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 5:35 | upplåst | inkomst | kruka |
| 5:35 | brott | UPPLÅST | kruka (inkomst 8 av 6) |
| 5:35 | händelse | upplast | id=kruka flask=inkomst |
| 5:35 | paket |  | sms |
| 5:35 | väntar | ali | Prova en kruka. Folk köper krukor. Ingen vet varför. |
| 5:35 | skratt | ali | Prova en kruka. Folk köper krukor. Ingen |
| 5:36 | klar | ali | Den köper jag. Ge hit. |
| 5:38 | sak | ali | Prova en kruka. Folk köper krukor. Ingen vet varför. |
| 5:38 | skratt | ali | Prova en kruka. Folk köper krukor. Ingen |
| 5:38 | sms | ali | Prova en kruka. Folk köper krukor. Ingen vet varför. |
| 5:38 | skratt | ali | Prova en kruka. Folk köper krukor. Ingen |
| 5:38 | händelse | dialog | id=aliKrukaSms |
| 5:38 | sms-bubbla | ali | Prova en kruka. Folk köper krukor. Ingen vet varför. |
| 5:38 | skratt | ali | Prova en kruka. Folk köper krukor. Ingen |
| 5:38 | röst | ali | Prova en kruka. Folk köper krukor. Ingen vet varför. · STORY |
| 5:44 | klar | ali | Prova en kruka. Folk köper krukor. Ingen vet varför. |
| 5:44 | skratt | ali | Prova en kruka. Folk köper krukor. Ingen |
| 5:45 | väntar | du | Ali vill ha krukor. Jag printar en blomkruka. |
| 5:46 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 5:48 | händelse | kopt | sak=kruka |
| 5:48 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 5:48 | händelse | dialog | id=aliKrukaRecept |
| 5:48 | röst | ali | Blomkruka? Bra val. Folk köper sånt. Jag vet inte varför. · STORY |
| 5:48 | butiksbubbla | ali | Blomkruka? Bra val. Folk köper sånt. Jag vet inte varför. |
| 5:55 | struken | du | Ali vill ha krukor. Jag printar en blomkruka. |
| 6:00 | sak | du | Ali vill ha krukor. Jag printar en blomkruka. |
| 6:00 | röst | du | Ali vill ha krukor. Jag printar en blomkruka. · STORY |
| 6:02 | händelse | printStart | sak=kruka |
| 6:03 | toast | fel | Ingen ström – trampa cykeln |
| 6:05 | klar | du | Ali vill ha krukor. Jag printar en blomkruka. |
| 6:06 | händelse | printKlar | sak=kruka n=1 |
| 6:06 | händelse | malKlart | id=krukaD1 del=Dag 1 – Kom igång nasta=saljKruka |
| 6:06 | bekräftelse | du | plats |
| 6:06 | kvittens | du | En kruka. Mamma skulle bli så stolt. Hon får inte veta. |
| 6:06 | väntar | du | En kruka. Mamma skulle bli så stolt. Hon får inte veta. |
| 6:06 | väntar | du | Ali gillar krukor. Han sa det själv. |
| 6:06 | MÅL |  | Sälj blomkrukan |
| 6:06 | sak | du | En kruka. Mamma skulle bli så stolt. Hon får inte veta. |
| 6:06 | röst | du | En kruka. Mamma skulle bli så stolt. Hon får inte veta. · STORY |
| 6:06 | målruta |  | Sälj blomkrukan |
| 6:07 | händelse | tagitUrPrint | sak=kruka n=1 |
| 6:11 | klar | du | En kruka. Mamma skulle bli så stolt. Hon får inte veta. |
| 6:12 | sak | du | Ali gillar krukor. Han sa det själv. |
| 6:12 | pil |  | Sälj blomkrukan |
| 6:12 | notis | tanke | 💭 Ali gillar krukor. Han sa det själv. |
| 6:12 | röst | du | Ali gillar krukor. Han sa det själv. · MÅL |
| 6:16 | klar | du | Ali gillar krukor. Han sa det själv. |
| 6:17 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 6:18 | händelse | salt | sak=kruka n=1 |
| 6:18 | paket |  | ali → ge |
| 6:18 | väntar | ali | Du får bonus! 15 kr extra. Pappa hade gillat dig. |
| 6:18 | väntar |  | (läget ändras) |
| 6:18 | aliSalt | ali | 70 |
| 6:18 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 6:19 | sak | ali | Du får bonus! 15 kr extra. Pappa hade gillat dig. |
| 6:19 | notis |  | Ali: ”Du får bonus! 15 kr extra. Pappa hade gillat dig.” |
| 6:19 | röst | ali | Du får bonus! 15 kr extra. Pappa hade gillat dig. · REAKTION |
| 6:19 | händelse | malKlart | id=saljKruka del=Dag 1 – Kom igång nasta=kopSang |
| 6:19 | bekräftelse | du | plats |
| 6:19 | väntar | du | Jag tänker inte sova på betongen i natt. Ali har en säng. Typ. |
| 6:19 | MÅL |  | Köp sängen |
| 6:19 | kvitto-visas |  | (läget ändras) |
| 6:19 | sak |  | (läget ändras) |
| 6:22 | målruta |  | Köp sängen |
| 6:23 | kvittens-bock |  | ✓ Sälj blomkrukan |
| 6:27 | klar | ali | Du får bonus! 15 kr extra. Pappa hade gillat dig. |
| 6:27 | sak | du | Jag tänker inte sova på betongen i natt. Ali har en säng. Typ. |
| 6:27 | pil |  | Köp sängen |
| 6:27 | notis | tanke | 💭 Jag tänker inte sova på betongen i natt. Ali har en säng. Typ. |
| 6:27 | röst | du | Jag tänker inte sova på betongen i natt. Ali har en säng. Typ. · MÅL |
| 6:30 | paket |  | tanke |
| 6:30 | tanke | du | Det börjar bli mörkt. Jag kan inte sova på jorden. |
| 6:30 | väntar | du | Det börjar bli mörkt. Jag kan inte sova på jorden. |
| 6:32 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 6:32 | klar | du | Jag tänker inte sova på betongen i natt. Ali har en säng. Typ. |
| 6:33 | händelse | kopt | sak=sang |
| 6:33 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 6:33 | händelse | dialog | id=aliSang |
| 6:33 | röst | ali | Sov gott, min vän. · STORY |
| 6:33 | butiksbubbla | ali | Sov gott, min vän. |
| 6:34 | händelse | malKlart | id=kopSang del=Dag 1 – Kom igång nasta=printSang |
| 6:34 | bekräftelse | du | plats |
| 6:34 | struken | du | Det börjar bli mörkt. Jag kan inte sova på jorden. |
| 6:34 | väntar | du | En säng tar lång tid. Den är värd det. |
| 6:34 | målruta |  | Printa sängen |
| 6:34 | MÅL |  | Printa sängen |
| 6:34 | pil |  | Printa sängen |
| 6:35 | nick |  | nick:19 |
| 6:37 | sak | du | En säng tar lång tid. Den är värd det. |
| 6:37 | notis | tanke | 💭 En säng tar lång tid. Den är värd det. |
| 6:37 | röst | du | En säng tar lång tid. Den är värd det. · MÅL |
| 6:38 | kvittens-bock |  | ✓ Köp sängen |
| 6:41 | klar | du | En säng tar lång tid. Den är värd det. |
| 7:05 | händelse | printStart | sak=sang |
| 7:09 | toast | fel | Ingen ström – trampa cykeln |
| 7:12 | händelse | printKlar | sak=sang n=1 |
| 7:12 | händelse | tagitUrPrint | sak=sang n=1 |
| 7:12 | händelse | malKlart | id=printSang del=Dag 1 – Kom igång nasta=sov1 |
| 7:12 | bekräftelse | du | plats |
| 7:12 | kvittens | du | En säng. Jag printade en SÄNG. |
| 7:12 | väntar | du | En säng. Jag printade en SÄNG. |
| 7:12 | paket |  | lapp |
| 7:12 | kvallsrad | du | Nitton år. Inget mer tjat. Gården är full av skräp. I morgon. |
| 7:12 | väntar | du | Sängen ska in i skjulet. Sen sover jag. |
| 7:12 | MÅL |  | Sängen i skjulet |
| 7:12 | sak | du | En säng. Jag printade en SÄNG. |
| 7:12 | röst | du | En säng. Jag printade en SÄNG. · STORY |
| 7:12 | målruta |  | Sängen i skjulet |
| 7:16 | klar | du | En säng. Jag printade en SÄNG. |
| 7:16 | sak | du | Sängen ska in i skjulet. Sen sover jag. |
| 7:16 | pil |  | Sängen i skjulet |
| 7:16 | notis | tanke | 💭 Sängen ska in i skjulet. Sen sover jag. |
| 7:16 | röst | du | Sängen ska in i skjulet. Sen sover jag. · MÅL |
| 7:16 | nick |  | nick:20 |
| 7:20 | klar | du | Sängen ska in i skjulet. Sen sover jag. |
| 7:27 | autosparning | du | natt 10 december |
| 7:29 | nattkort | du | 🌙 14 dagar kvar. God natt. zzz… i en riktig säng Nitton år. Inget mer tjat. Gården är full av skräp. I morgon. DAGENS PRINTAR Nyckelring × 8 Blomkruka × 1 Säng |

<details><summary>Botens handlingar dag 1</summary>

- 0:12 gå till brädhögen (3 m) (5 kr)
- 0:21 gå till cykeln vid vägen (2 m) (5 kr)
- 0:28 gå till rutan i linje 1 (13 m) (5 kr)
- 1:11 gå till cykeln (lyfter den) (13 m) (5 kr)
- 1:20 gå till cykelns plats (11 m) (5 kr)
- 1:23 gå till skrivaren (2 m) (5 kr)
- 1:24 printar Nyckelring (5 kr)
- 1:31 tar ut 1 st ur skrivaren (5 kr)
- 1:45 printar Nyckelring (sista av storebrors rulle) (5 kr)
- 1:59 gå till skrivaren (1 m) (5 kr)
- 2:00 tar ut 1 st ur skrivaren (5 kr)
- 2:05 gå till Ali (26 m) (5 kr)
- 2:05 öppnar Alis butik – sälja de två nyckelringarna (5 kr)
- 2:07 säljer hos Ali: +30 kr (35 kr)
- 2:20 öppnar Alis butik – köpa kvarnen (35 kr)
- 2:22 köper gammalkvarn för 30 kr (5 kr)
- 2:23 köpte kvarnen (5 kr)
- 2:41 gå till kvarnens ruta (28 m) (5 kr)
- 2:54 plockar 3 skräp på gården (bär max 3) (5 kr)
- 2:56 gå till kvarnen (7 m) (5 kr)
- 3:10 gå till cykeln (2 m) (5 kr)
- 3:12 gå till skrivaren (1 m) (5 kr)
- 3:13 printar Nyckelring (5 kr)
- 3:19 tar ut 1 st ur skrivaren (5 kr)
- 3:23 printar Nyckelring (5 kr)
- 3:25 tar ut 1 st ur skrivaren (5 kr)
- 3:30 printar Nyckelring (5 kr)
- 3:31 tar ut 1 st ur skrivaren (5 kr)
- 3:38 gå till Ali (27 m) (5 kr)
- 3:38 öppnar Alis butik – sälja nyckelringar (5 kr)
- 3:40 säljer hos Ali: +45 kr (50 kr)
- 3:50 panel: "Alis butik
50 kr
0 rullar
Jag " (50 kr)
- 3:58 gå till koppla powerbanken till cykeln (24 m) (50 kr)
- 4:13 gå till Ali (24 m) (50 kr)
- 4:13 öppnar Alis butik – köpa skräpgrip (50 kr)
- 4:16 köper grip för 50 kr (0 kr)
- 4:34 gå till skrivaren (25 m) (0 kr)
- 4:35 printar Skräpgrip (0 kr)
- 4:36 gå till cykeln (1 m) (0 kr)
- 4:44 plockar 3 skräp på gården (bär max 3) (0 kr)
- 4:47 gå till kvarnen (13 m) (0 kr)
- 4:51 gå till skrivaren (3 m) (0 kr)
- 4:51 tar ut 1 st ur skrivaren (0 kr)
- 4:55 tar på grip (0 kr)
- 4:56 tjänar pengar till väntar på flaskhalsen för kruka: 0/40 kr → printar nyckelring (15 kr) (0 kr)
- 4:57 printar Nyckelring (0 kr)
- 5:10 plockar 6 skräp på gården (bär max 6) (0 kr)
- 5:15 gå till kvarnen (26 m) (0 kr)
- 5:18 gå till skrivaren (3 m) (0 kr)
- 5:18 tar ut 1 st ur skrivaren (0 kr)
- 5:20 printar Nyckelring (0 kr)
- 5:22 tar ut 1 st ur skrivaren (0 kr)
- 5:24 printar Nyckelring (0 kr)
- 5:26 tar ut 1 st ur skrivaren (0 kr)
- 5:32 gå till Ali (28 m) (0 kr)
- 5:32 öppnar Alis butik – sälja (0 kr)
- 5:34 säljer hos Ali: +45 kr (45 kr)
- 5:46 öppnar Alis butik – köpa receptet blomkruka (45 kr)
- 5:49 köper kruka för 40 kr (5 kr)
- 6:01 gå till skrivaren (25 m) (5 kr)
- 6:02 printar Blomkruka (5 kr)
- 6:03 gå till cykeln (1 m) (5 kr)
- 6:07 tar ut 1 st ur skrivaren (5 kr)
- 6:17 gå till Ali (25 m) (5 kr)
- 6:17 öppnar Alis butik – sälja krukan (5 kr)
- 6:19 säljer hos Ali: +70 kr (75 kr)
- 6:32 öppnar Alis butik – köpa sängen (90 kr)
- 6:34 köper sang för 60 kr (30 kr)
- 6:55 plockar 6 skräp på gården (bär max 6) (30 kr)
- 7:00 gå till kvarnen (22 m) (30 kr)
- 7:04 gå till skrivaren (3 m) (30 kr)
- 7:05 printar Säng (30 kr)
- 7:09 gå till cykeln (1 m) (30 kr)
- 7:12 tar ut 1 st ur skrivaren (30 kr)
- 7:27 gå till sängplatsen i skjulet (21 m) (30 kr)

</details>

## Dag 2

| Tid | Källa | Vem | Text |
|---|---|---|---|
| 7:29 | vara | ali | kruka |
| 7:29 | händelse | malKlart | id=sov1 del=Dag 1 – Kom igång nasta=kopMotor |
| 7:29 | bekräftelse | du | plats |
| 7:29 | MÅL |  | Spara till kvarnmotorn · 30 / 50 kr |
| 7:30 | väntar | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått generator. Vi tar en låt på det. Den här är till dig, Gunnar. |
| 7:30 | radio | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått generator. Vi tar en låt på det. Den här är till dig, Gunnar. |
| 7:30 | skratt | du | Radio-Kjelle |
| 0:00 | autosparning | du | morgon 11 december |
| 0:01 | dagbok | du | Första natten i en riktig säng. Jag printade den själv. |
| 0:01 | händelse | dagenBorjar | dag=2 |
| 0:01 | meddelande | du | 13 dagar till jul. Vevar jag för hand hinner jag inget annat. |
| 0:01 | dagbokkort | du | Kvarnmotorn. · 13 dagar till jul. Vevar jag för hand hinner jag inget annat. |
| 0:01 | röst | du | 13 dagar till jul. Kvarnmotorn. Vevar jag för hand hinner jag inget annat. · STORY |
| 0:12 | väntar | notis:morgon | Ali vill ha idag: Blomkruka · +50 % |
| 0:12 | händelse | morgonkortStangt | dag=2 |
| 0:12 | väntar | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått generator. Vi tar en låt på det. Den här är till dig, Gunnar. |
| 0:12 | paket |  | tanke |
| 0:12 | tanke | du | Grön jul igen. Typiskt. |
| 0:12 | väntar | du | Grön jul igen. Typiskt. |
| 0:12 | struken | du | Grön jul igen. Typiskt. |
| 0:12 | väntar | du | Vevandet tar på armarna. Ali har en motor till kvarnen. |
| 0:12 | målruta |  | Spara till kvarnmotorn · 30 / 50 kr |
| 0:17 | sak | du | Vevandet tar på armarna. Ali har en motor till kvarnen. |
| 0:17 | pil |  | Spara till kvarnmotorn · 30 / 50 kr |
| 0:17 | notis | tanke | 💭 Vevandet tar på armarna. Ali har en motor till kvarnen. |
| 0:17 | röst | du | Vevandet tar på armarna. Ali har en motor till kvarnen. · MÅL |
| 0:20 | väntar | ali | Ali här. Såg skylten. Stavningen är rätt. Det är mer än många. |
| 0:23 | klar | du | Vevandet tar på armarna. Ali har en motor till kvarnen. |
| 0:23 | sak | notis:morgon | Ali vill ha idag: Blomkruka · +50 % |
| 0:23 | notis |  | Blomkruka · +50 % |
| 0:26 | klar | notis:morgon | Ali vill ha idag: Blomkruka · +50 % |
| 0:28 | tanke | du | En hel äng bakom staketet. Någon vill verkligen inte ha besök. |
| 0:28 | väntar | du | En hel äng bakom staketet. Någon vill verkligen inte ha besök. |
| 0:28 | sak | du | En hel äng bakom staketet. Någon vill verkligen inte ha besök. |
| 0:28 | notis | tanke | 💭 En hel äng bakom staketet. Någon vill verkligen inte ha besök. |
| 0:28 | röst | du | En hel äng bakom staketet. Någon vill verkligen inte ha besök. · REAKTION |
| 0:36 | klar | du | En hel äng bakom staketet. Någon vill verkligen inte ha besök. |
| 0:36 | väntar | foto | Egen säng |
| 0:36 | paket |  | tanke |
| 0:36 | tanke | du | Tänk att jag ska få sova i min egen säng. |
| 0:36 | väntar | du | Tänk att jag ska få sova i min egen säng. |
| 0:36 | sak | foto | Egen säng |
| 0:36 | foto | du | Egen säng |
| 0:39 | klar | foto | Egen säng |
| 0:39 | paket |  | tanke |
| 0:39 | tanke | du | Jaha. En kalsong. Använd. |
| 0:39 | väntar | du | Jaha. En kalsong. Använd. |
| 0:39 | skratt | du | kvarnen spottar |
| 0:44 | händelse | printStart | sak=kruka |
| 0:46 | händelse | printKlar | sak=kruka n=2 |
| 0:47 | händelse | tagitUrPrint | sak=kruka n=1 |
| 0:48 | sak | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått generator. Vi tar en låt på det. Den här är till dig, Gunnar. |
| 0:48 | notis |  | 📻 Radio Tippen: Radio Tippen, Kjelle här. Skjulet vid tippen har fått generator. Vi tar en låt på det. Den här är till dig, Gunnar. |
| 0:48 | röst | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått generator. Vi tar en låt på det. Den här är till dig, Gunnar. · REAKTION |
| 0:53 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 0:53 | butiksbubbla | ali | Salam. Ja, ja, jag har nya grejer. Som vanligt. Varje dag. |
| 0:54 | röst | ali | Salam. Ja, ja, jag har nya grejer. Som vanligt. Varje dag. · STORY |
| 0:54 | händelse | salt | sak=kruka n=1 |
| 0:54 | aliSalt | ali | 105 |
| 0:54 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 0:54 | butiksbubbla | ali | Precis vad jag ville ha idag. 105 kr – med extra. |
| 0:55 | väntar | ali | Precis det jag ville ha idag, min vän. |
| 0:55 | upplåst | mala | kvarnmotor |
| 0:55 | brott | UPPLÅST | kvarnmotor (mala 8 av 6, sparat ihop) |
| 0:55 | händelse | upplast | id=kvarnmotor flask=mala |
| 0:55 | paket |  | sms |
| 0:55 | väntar | ali | Ali här. En motor? Jag har en. Från en gammal tvättmaskin. Den centrifugerar fortfarande om man ber snällt. |
| 0:58 | klar | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått generator. Vi tar en låt på det. Den här är till dig, Gunnar. |
| 0:58 | tanke | du | Vem är Gunnar? |
| 0:58 | struken | du | Jaha. En kalsong. Använd. |
| 0:58 | väntar | du | Vem är Gunnar? |
| 1:00 | sak | ali | Precis det jag ville ha idag, min vän. |
| 1:00 | röst | ali | Precis det jag ville ha idag, min vän. · STORY |
| 1:04 | klar | ali | Precis det jag ville ha idag, min vän. |
| 1:06 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 1:07 | struken | info:guld | 3D-modell köpt – printa kvarnmotor |
| 1:07 | händelse | kopt | sak=kvarnmotor |
| 1:07 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 1:07 | struken | ali | Ali här. En motor? Jag har en. Från en gammal tvättmaskin. Den centrifugerar fortfarande om man ber snällt. |
| 1:09 | händelse | malKlart | id=kopMotor del=Dag 2 – Tippen bredvid nasta=monteraMotor |
| 1:09 | bekräftelse | du | plats |
| 1:09 | väntar | du | Motorn ska sitta där veven sitter. Jag printar den först. |
| 1:09 | målruta |  | Printa kvarnmotorn till kvarnen |
| 1:09 | MÅL |  | Printa kvarnmotorn till kvarnen |
| 1:09 | pil |  | Printa kvarnmotorn till kvarnen |
| 1:09 | sak | du | Motorn ska sitta där veven sitter. Jag printar den först. |
| 1:09 | notis | tanke | 💭 Motorn ska sitta där veven sitter. Jag printar den först. |
| 1:09 | röst | du | Motorn ska sitta där veven sitter. Jag printar den först. · MÅL |
| 1:09 | tanke | du | Sopbilen tippade en ny last. Allt det skräpet – och grinden är låst. |
| 1:09 | okänt ord bytt | du | Sopbilen tippade en ny last. Allt det skräpet – och grinden är låst. |
| 1:09 | struken | du | Vem är Gunnar? |
| 1:09 | väntar | du | Sopbilen tippade en ny last. Allt det skräpet – och grinden är låst. |
| 1:09 | nick |  | nick:22 |
| 1:13 | kvittens-bock |  | ✓ Köp kvarnmotorn |
| 1:15 | klar | du | Motorn ska sitta där veven sitter. Jag printar den först. |
| 1:17 | struken | ali | Ali här. Såg skylten. Stavningen är rätt. Det är mer än många. |
| 1:24 | händelse | printStart | sak=byggsats:kvarnmotor |
| 1:25 | toast | fel | Ingen ström – trampa cykeln |
| 1:28 | händelse | printKlar | sak=byggsats:kvarnmotor n=1 |
| 1:28 | tanke | du | Kvarnmotorn ska skruvas fast på kvarnen. |
| 1:28 | väntar | du | Kvarnmotorn ska skruvas fast på kvarnen. |
| 1:28 | händelse | tagitUrPrint | sak=byggsats:kvarnmotor n=1 |
| 1:28 | paket |  | sms |
| 1:28 | väntar | ali | Ali här. Ännu en ritning som blev på riktigt: Kvarnmotor. Semesterkassan växer. Livet växer. |
| 1:28 | sak | du | Kvarnmotorn ska skruvas fast på kvarnen. |
| 1:28 | notis | tanke | 💭 Kvarnmotorn ska skruvas fast på kvarnen. |
| 1:28 | röst | du | Kvarnmotorn ska skruvas fast på kvarnen. · REAKTION |
| 1:34 | klar | du | Kvarnmotorn ska skruvas fast på kvarnen. |
| 1:36 | sak | ali | Ali här. Ännu en ritning som blev på riktigt: Kvarnmotor. Semesterkassan växer. Livet växer. |
| 1:36 | sms | ali | Ali här. Ännu en ritning som blev på riktigt: Kvarnmotor. Semesterkassan växer. Livet växer. |
| 1:36 | sms-bubbla | ali | Ali här. Ännu en ritning som blev på riktigt: Kvarnmotor. Semesterkassan växer. Livet växer. |
| 1:36 | röst | ali | Ali här. Ännu en ritning som blev på riktigt: Kvarnmotor. Semesterkassan växer. Livet växer. · REAKTION |
| 1:42 | tanke | du | Motorn sitter där veven satt – nu mal kvarnen själv. |
| 1:42 | struken | du | Sopbilen tippade en ny last. Allt det skräpet – och grinden är låst. |
| 1:42 | väntar | du | Motorn sitter där veven satt – nu mal kvarnen själv. |
| 1:42 | händelse | monterat | sak=kvarnmotor |
| 1:42 | paket |  | tanke |
| 1:42 | tanke | du | Motorn sitter där veven satt. Mina armar tackar. |
| 1:42 | struken | du | Motorn sitter där veven satt – nu mal kvarnen själv. |
| 1:42 | väntar | du | Motorn sitter där veven satt. Mina armar tackar. |
| 1:42 | monterat | du | byggsats:kvarnmotor |
| 1:42 | händelse | monterat | sak=kvarnmotor |
| 1:42 | händelse | malKlart | id=monteraMotor del=Dag 2 – Tippen bredvid nasta=n1-stada-klart-garden |
| 1:42 | bekräftelse | du | plats |
| 1:42 | struken | du | Motorn sitter där veven satt. Mina armar tackar. |
| 1:42 | väntar | du | Gården är full av skräp. Jag börjar vid skjulet. |
| 1:42 | MÅL |  | Städa gården |
| 1:44 | målruta |  | Städa gården |
| 1:45 | klar | ali | Ali här. Ännu en ritning som blev på riktigt: Kvarnmotor. Semesterkassan växer. Livet växer. |
| 1:45 | sak | du | Gården är full av skräp. Jag börjar vid skjulet. |
| 1:45 | pil |  | Städa gården |
| 1:45 | notis | tanke | 💭 Gården är full av skräp. Jag börjar vid skjulet. |
| 1:45 | röst | du | Gården är full av skräp. Jag börjar vid skjulet. · MÅL |
| 1:45 | nick |  | nick:23 |
| 1:46 | kvittens-bock |  | ✓ Printa kvarnmotorn till kvarnen |
| 1:50 | klar | du | Gården är full av skräp. Jag börjar vid skjulet. |
| 1:58 | sak | du | Tänk att jag ska få sova i min egen säng. |
| 1:58 | notis | tanke | 💭 Tänk att jag ska få sova i min egen säng. |
| 1:58 | röst | du | Tänk att jag ska få sova i min egen säng. · STORY |
| 2:03 | klar | du | Tänk att jag ska få sova i min egen säng. |
| 2:15 | händelse | malKlart | id=n1-stada-klart-garden del=Dag 2 – Tippen bredvid nasta=kopSack |
| 2:15 | bekräftelse | du | plats |
| 2:15 | lapp | 📔 Dagbok | Gården är STÄDAD, av mig, frivilligt. Mamma skulle aldrig tro det. |
| 2:15 | dagbokrad | du | Gården är STÄDAD, av mig, frivilligt. Mamma skulle aldrig tro det. |
| 2:15 | väntar | notis:Gården är STÄDAD, av mig, frivilligt. Ma | Gården är STÄDAD, av mig, frivilligt. Mamma skulle aldrig tro det. |
| 2:15 | skratt | du | falsk tuta |
| 2:15 | scenInfo | rolf | inkorg 73: sopbilen kommer till skjulet |
| 2:15 | väntar | du | En stor bil saktar in vid skjulet. Jag går dit. |
| 2:15 | MÅL |  | Gå till bilen vid skjulet |
| 2:15 | sak | notis:Gården är STÄDAD, av mig, frivilligt. Ma | Gården är STÄDAD, av mig, frivilligt. Mamma skulle aldrig tro det. |
| 2:15 | notis | dagbok | Gården är STÄDAD, av mig, frivilligt. Mamma skulle aldrig tro det. |
| 2:18 | klar | notis:Gården är STÄDAD, av mig, frivilligt. Ma | Gården är STÄDAD, av mig, frivilligt. Mamma skulle aldrig tro det. |
| 2:18 | målruta |  | Gå till bilen vid skjulet |
| 2:21 | sak | du | En stor bil saktar in vid skjulet. Jag går dit. |
| 2:21 | pil |  | Gå till bilen vid skjulet |
| 2:21 | notis | tanke | 💭 En stor bil saktar in vid skjulet. Jag går dit. |
| 2:21 | röst | du | En stor bil saktar in vid skjulet. Jag går dit. · MÅL |
| 2:25 | väntar | värld:TUUT! Tjena! | TUUT! Tjena! |
| 2:26 | klar | du | En stor bil saktar in vid skjulet. Jag går dit. |
| 2:27 | väntar | rolf | Tjena. Rolf. Ja kör sopbilen. Tippen där borta ä min. Har vart min sen -87. |
| 2:27 | sak | rolf | Tjena. Rolf. Ja kör sopbilen. Tippen där borta ä min. Har vart min sen -87. |
| 2:27 | händelse | dialog | id=rolfHej |
| 2:27 | röst | rolf | Tjena. Rolf. Ja kör sopbilen. Tippen där borta ä min. Har vart min sen -87. · REAKTION |
| 2:28 | bubbla |  | Tjena. Rolf. Ja kör sopbilen. Tippen där borta ä min. Har vart min sen -87. |
| 2:40 | klar | rolf | Tjena. Rolf. Ja kör sopbilen. Tippen där borta ä min. Har vart min sen -87. |
| 2:40 | väntar | rolf | Du har städat hela gården. Ingen gör så nuförtin. |
| 2:40 | sak | rolf | Du har städat hela gården. Ingen gör så nuförtin. |
| 2:40 | händelse | dialog | id=rolfGarden |
| 2:40 | röst | rolf | Du har städat hela gården. Ingen gör så nuförtin. · REAKTION |
| 2:41 | bubbla |  | Du har städat hela gården. Ingen gör så nuförtin. |
| 2:43 | upplåst | skrivare | rullstall |
| 2:43 | brott | UPPLÅST | rullstall (skrivare 95 av 60) |
| 2:43 | händelse | upplast | id=rullstall flask=skrivare |
| 2:43 | paket |  | tanke → sms |
| 2:43 | tanke | du | Kvarnen står och väntar för att hållaren är full. Om den rymde fler rullar kunde den mala hela tiden. |
| 2:43 | väntar | du | Kvarnen står och väntar för att hållaren är full. Om den rymde fler rullar kunde den mala hela tiden. |
| 2:43 | väntar | ali | Ali här. Rullställ. Fyra rullar i stället för en. Har ett på hyllan. |
| 2:44 | klar | rolf | Du har städat hela gården. Ingen gör så nuförtin. |
| 2:44 | sak | du | Kvarnen står och väntar för att hållaren är full. Om den rymde fler rullar kunde den mala hela tiden. |
| 2:44 | notis | tanke | 💭 Kvarnen står och väntar för att hållaren är full. Om den rymde fler rullar kunde den mala hela tiden. |
| 2:44 | röst | du | Kvarnen står och väntar för att hållaren är full. Om den rymde fler rullar kunde den mala hela tiden. · STORY |
| 2:52 | klar | du | Kvarnen står och väntar för att hållaren är full. Om den rymde fler rullar kunde den mala hela tiden. |
| 2:52 | väntar | rolf | Öj… ä dä du som printar grejer? Dom där nyckelringarna? |
| 2:52 | sak | rolf | Öj… ä dä du som printar grejer? Dom där nyckelringarna? |
| 2:52 | händelse | dialog | id=rolfPrintar |
| 2:52 | röst | rolf | Öj… ä dä du som printar grejer? Dom där nyckelringarna? · REAKTION |
| 2:53 | bubbla |  | Öj… ä dä du som printar grejer? Dom där nyckelringarna? |
| 3:00 | klar | rolf | Öj… ä dä du som printar grejer? Dom där nyckelringarna? |
| 3:00 | väntar | du | Ja. Av skräp. |
| 3:00 | struken | du | Ja. Av skräp. |
| 3:00 | väntar | du | Tornet är fullt. Skrivaren får jobba ikapp. |
| 3:00 | väntar | info:fel | Tornet är fullt. Skrivaren får jobba ikapp. |
| 3:00 | sak | info:fel | Tornet är fullt. Skrivaren får jobba ikapp. |
| 3:00 | kvitto-visas | info:fel | Tornet är fullt. Skrivaren får jobba ikapp. |
| 3:00 | toast | fel | Tornet är fullt. Skrivaren får jobba ikapp. |
| 3:02 | klar | info:fel | Tornet är fullt. Skrivaren får jobba ikapp. |
| 3:02 | sak | du | Tornet är fullt. Skrivaren får jobba ikapp. |
| 3:02 | röst | du | Tornet är fullt. Skrivaren får jobba ikapp. · REAKTION |
| 3:06 | klar | du | Tornet är fullt. Skrivaren får jobba ikapp. |
| 3:08 | struken | värld:TUUT! Tjena! | TUUT! Tjena! |
| 3:14 | sopsack | rolf | Rolf kastade ut säckarna vid skjulet |
| 3:15 | sak | ali | Ali här. Rullställ. Fyra rullar i stället för en. Har ett på hyllan. |
| 3:15 | sms | ali | Ali här. Rullställ. Fyra rullar i stället för en. Har ett på hyllan. |
| 3:15 | sms-bubbla | ali | Ali här. Rullställ. Fyra rullar i stället för en. Har ett på hyllan. |
| 3:15 | röst | ali | Ali här. Rullställ. Fyra rullar i stället för en. Har ett på hyllan. · STORY |
| 3:22 | klar | ali | Ali här. Rullställ. Fyra rullar i stället för en. Har ett på hyllan. |
| 3:24 | tanke | du | En sopsäck över axeln! Nu bär jag 10 skräp. |
| 3:24 | väntar | du | En sopsäck över axeln! Nu bär jag 10 skräp. |
| 3:24 | tog på | du | byggsats:korg |
| 3:24 | händelse | monterat | sak=korg |
| 3:24 | sak | du | En sopsäck över axeln! Nu bär jag 10 skräp. |
| 3:24 | notis | tanke | 💭 En sopsäck över axeln! Nu bär jag 10 skräp. |
| 3:24 | röst | du | En sopsäck över axeln! Nu bär jag 10 skräp. · REAKTION |
| 3:24 | händelse | malKlart | id=kopSack del=Dag 2 – Tippen bredvid nasta=rolf0-brev |
| 3:24 | bekräftelse | du | plats |
| 3:24 | väntar | du | Det ligger ett brev i postlådan vid grinden. Det läser jag. |
| 3:24 | MÅL |  | Möt sopbilen vid grinden |
| 3:26 | målruta |  | Möt sopbilen vid grinden |
| 3:27 | klar | du | En sopsäck över axeln! Nu bär jag 10 skräp. |
| 3:28 | kvittens-bock |  | ✓ Ta sopsäckarna |
| 3:30 | skratt | du | falsk tuta |
| 3:30 | sak | du | Det ligger ett brev i postlådan vid grinden. Det läser jag. |
| 3:30 | pil |  | Möt sopbilen vid grinden |
| 3:30 | notis | tanke | 💭 Det ligger ett brev i postlådan vid grinden. Det läser jag. |
| 3:30 | röst | du | Det ligger ett brev i postlådan vid grinden. Det läser jag. · MÅL |
| 3:37 | klar | du | Det ligger ett brev i postlådan vid grinden. Det läser jag. |
| 3:38 | paket |  | tanke → ge |
| 3:38 | tanke | du | Flaggan är uppe. Rolf har lämnat något. |
| 3:38 | väntar | du | Flaggan är uppe. Rolf har lämnat något. |
| 3:38 | väntar |  | (läget ändras) |
| 3:43 | upplåst | skrivare | trim_skrivare |
| 3:43 | brott | UPPLÅST | trim_skrivare (skrivare 60 av 60) |
| 3:43 | händelse | upplast | id=trim_skrivare flask=skrivare |
| 3:43 | paket |  | sms |
| 3:43 | väntar | ali | Ali här. Skrivartrim. Jag skruvade på min egen skrivare i natt. Den går fortare nu. Nästan för fort. |
| 3:44 | skratt | du | däcket rullar iväg |
| 3:44 | paket |  | tanke |
| 3:44 | tanke | du | Däcket ville inte stanna. Jag förstår det. |
| 3:44 | väntar | du | Däcket ville inte stanna. Jag förstår det. |
| 3:45 | väntar | rolf | Såg att du printar grejer. Kan du göra en sån hä? Kall öl ä viktigt. Ja ha ritat själv. Ungefär så hä. Ja ä int dum. /Rolf​ |
| 3:45 | paket |  | ge |
| 3:45 | väntar |  | (läget ändras) |
| 3:45 | sak | rolf | Såg att du printar grejer. Kan du göra en sån hä? Kall öl ä viktigt. Ja ha ritat själv. Ungefär så hä. Ja ä int dum. /Rolf​ |
| 3:45 | lapp | Brev från Rolf | Såg att du printar grejer. Kan du göra en sån hä? Kall öl ä viktigt. Ja ha ritat själv. Ungefär så hä. Ja ä int dum. /Rolf​ |
| 3:45 | röst | rolf | Såg att du printar grejer. Kan du göra en sån hä? Kall öl ä viktigt. Ja ha ritat själv. Ungefär så hä. Ja ä int dum. /Rolf​ · STORY |
| 3:45 | händelse | malKlart | id=rolf0-brev del=Dag 2 – Tippen bredvid nasta=rolf0-printa |
| 3:45 | bekräftelse | du | plats |
| 3:45 | struken | du | Däcket ville inte stanna. Jag förstår det. |
| 3:45 | väntar | du | Rolf vill ha en ölhållare. Den printar jag. |
| 3:45 | MÅL |  | Printa ölhållare med kylklamp |
| 3:45 | kvitto-visas |  | (läget ändras) |
| 3:45 | sak |  | (läget ändras) |
| 3:47 | målruta |  | Printa ölhållare med kylklamp |
| 3:48 | händelse | printStart | sak=olhallare |
| 3:48 | händelse | malKlart | id=rolf0-printa del=Dag 2 – Tippen bredvid nasta=rolf0-ge |
| 3:48 | bekräftelse | du | plats |
| 3:48 | väntar | du | Ölhållaren är klar. Den lägger jag i Rolfs postlåda. |
| 3:48 | MÅL |  | Ge Rolf ölhållare med kylklamp |
| 3:51 | målruta |  | Ge Rolf ölhållare med kylklamp |
| 3:51 | skratt | du | falsk tuta |
| 3:51 | händelse | printKlar | sak=olhallare n=1 |
| 3:52 | händelse | tagitUrPrint | sak=olhallare n=1 |
| 3:52 | kvittens-bock |  | ✓ Printa ölhållare med kylklamp |
| 3:59 | klar | rolf | Såg att du printar grejer. Kan du göra en sån hä? Kall öl ä viktigt. Ja ha ritat själv. Ungefär så hä. Ja ä int dum. /Rolf​ |
| 3:59 | händelse | brevLast | id=rolf:0 |
| 3:59 | struken | du | Rolf vill ha en ölhållare. Den printar jag. |
| 3:59 | sak | du | Ölhållaren är klar. Den lägger jag i Rolfs postlåda. |
| 3:59 | pil |  | Ge Rolf ölhållare med kylklamp |
| 3:59 | notis | tanke | 💭 Ölhållaren är klar. Den lägger jag i Rolfs postlåda. |
| 3:59 | röst | du | Ölhållaren är klar. Den lägger jag i Rolfs postlåda. · MÅL |
| 4:05 | klar | du | Ölhållaren är klar. Den lägger jag i Rolfs postlåda. |
| 4:06 | händelse | lagtIPostlada | sak=olhallare rolf=0 jobb=false |
| 4:06 | paket |  | tanke |
| 4:06 | tanke | du | Flaggan uppe. Nu får Rolf hämta den. |
| 4:06 | väntar | du | Flaggan uppe. Nu får Rolf hämta den. |
| 4:06 | sak | du | Flaggan uppe. Nu får Rolf hämta den. |
| 4:06 | notis | tanke | 💭 Flaggan uppe. Nu får Rolf hämta den. |
| 4:06 | röst | du | Flaggan uppe. Nu får Rolf hämta den. · REAKTION |
| 4:06 | händelse | malKlart | id=rolf0-ge del=Dag 2 – Tippen bredvid nasta=vindsnurra |
| 4:06 | bekräftelse | du | plats |
| 4:06 | väntar | du | En vindsnurra på skjulets tak. Då blir det ström när det blåser. |
| 4:07 | MÅL |  | Köp vindsnurran |
| 4:07 | upplåst | trampa | vindsnurra |
| 4:07 | brott | UPPLÅST | vindsnurra (trampa 20 av 6, sparat ihop) |
| 4:07 | händelse | upplast | id=vindsnurra flask=trampa |
| 4:07 | paket |  | sms |
| 4:07 | väntar | ali | Ali här. Vindsnurra till cykeln. Vinden trampar åt dig. Den är lat, men den jobbar gratis. |
| 4:09 | målruta |  | Köp vindsnurran |
| 4:10 | kvittens-bock |  | ✓ Ge Rolf ölhållare med kylklamp |
| 4:11 | klar | du | Flaggan uppe. Nu får Rolf hämta den. |
| 4:12 | sak | du | En vindsnurra på skjulets tak. Då blir det ström när det blåser. |
| 4:12 | pil |  | Köp vindsnurran |
| 4:12 | notis | tanke | 💭 En vindsnurra på skjulets tak. Då blir det ström när det blåser. |
| 4:12 | röst | du | En vindsnurra på skjulets tak. Då blir det ström när det blåser. · MÅL |
| 4:13 | nick |  | nick:28 |
| 4:20 | klar | du | En vindsnurra på skjulets tak. Då blir det ström när det blåser. |
| 4:22 | brott | TRÄNGSEL 2 | "Ali här. Vindsnurra till cykeln. Vinden trampar åt" 2.0 s efter förra meddelandet, 15.2 s efter en klar uppgift |
| 4:22 | sak | ali | Ali här. Vindsnurra till cykeln. Vinden trampar åt dig. Den är lat, men den jobbar gratis. |
| 4:22 | sms | ali | Ali här. Vindsnurra till cykeln. Vinden trampar åt dig. Den är lat, men den jobbar gratis. |
| 4:22 | sms-bubbla | ali | Ali här. Vindsnurra till cykeln. Vinden trampar åt dig. Den är lat, men den jobbar gratis. |
| 4:22 | röst | ali | Ali här. Vindsnurra till cykeln. Vinden trampar åt dig. Den är lat, men den jobbar gratis. · STORY |
| 4:25 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 4:25 | butiksbubbla | ali | Rolf gav mig en kanna. Som min farmors. Jag ritade en sak åt honom. Säg inget, han gråter lätt. |
| 4:27 | struken | info:guld | 3D-modell köpt – printa vindsnurra till skjultaket |
| 4:27 | händelse | kopt | sak=vindsnurra |
| 4:27 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 4:28 | väntar | ali | Rolf gav mig en kanna. Som min farmors. Jag ritade en sak åt honom. Säg inget, han gråter lätt. |
| 4:30 | klar | ali | Ali här. Vindsnurra till cykeln. Vinden trampar åt dig. Den är lat, men den jobbar gratis. |
| 4:30 | sak | ali | Rolf gav mig en kanna. Som min farmors. Jag ritade en sak åt honom. Säg inget, han gråter lätt. |
| 4:30 | röst | ali | Rolf gav mig en kanna. Som min farmors. Jag ritade en sak åt honom. Säg inget, han gråter lätt. · STORY |
| 4:35 | händelse | printStart | sak=byggsats:vindsnurra |
| 4:36 | toast | fel | Ingen ström – trampa cykeln |
| 4:40 | händelse | printKlar | sak=byggsats:vindsnurra n=1 |
| 4:41 | klar | ali | Rolf gav mig en kanna. Som min farmors. Jag ritade en sak åt honom. Säg inget, han gråter lätt. |
| 4:41 | tanke | du | Vindsnurran ska upp på skjulets tak. |
| 4:41 | väntar | du | Vindsnurran ska upp på skjulets tak. |
| 4:41 | händelse | tagitUrPrint | sak=byggsats:vindsnurra n=1 |
| 4:41 | sak | du | Vindsnurran ska upp på skjulets tak. |
| 4:41 | notis | tanke | 💭 Vindsnurran ska upp på skjulets tak. |
| 4:41 | röst | du | Vindsnurran ska upp på skjulets tak. · REAKTION |
| 4:46 | klar | du | Vindsnurran ska upp på skjulets tak. |
| 4:46 | väntar | mamma | Har du frusit än? |
| 4:52 | händelse | placerat | sak=vindsnurra |
| 4:52 | tanke | du | Vindsnurran sitter på taket – den trampar cykeln åt mig när det blåser |
| 4:52 | väntar | du | Vindsnurran sitter på taket – den trampar cykeln åt mig när det blåser |
| 4:52 | monterat | du | byggsats:vindsnurra |
| 4:52 | händelse | monterat | sak=vindsnurra |
| 4:52 | sak | du | Vindsnurran sitter på taket – den trampar cykeln åt mig när det blåser |
| 4:52 | notis | tanke | 💭 Vindsnurran sitter på taket – den trampar cykeln åt mig när det blåser |
| 4:52 | röst | du | Vindsnurran sitter på taket – den trampar cykeln åt mig när det blåser · REAKTION |
| 4:52 | händelse | malKlart | id=vindsnurra del=Dag 2 – Tippen bredvid nasta=n1-bygg-dorr-skjulet |
| 4:52 | bekräftelse | du | plats |
| 4:52 | kvittens | du | Den snurrar! Långsamt. Men den snurrar. |
| 4:52 | väntar | du | Den snurrar! Långsamt. Men den snurrar. |
| 4:52 | väntar | du | Det drar från dörrhålet. En dörr kan jag printa. |
| 4:52 | MÅL |  | Bygg en dörr till skjulet |
| 4:55 | målruta |  | Bygg en dörr till skjulet |
| 4:59 | klar | du | Vindsnurran sitter på taket – den trampar cykeln åt mig när det blåser |
| 4:59 | sak | du | Den snurrar! Långsamt. Men den snurrar. |
| 4:59 | röst | du | Den snurrar! Långsamt. Men den snurrar. · STORY |
| 5:03 | klar | du | Den snurrar! Långsamt. Men den snurrar. |
| 5:04 | sak | du | Det drar från dörrhålet. En dörr kan jag printa. |
| 5:04 | pil |  | Bygg en dörr till skjulet |
| 5:04 | notis | tanke | 💭 Det drar från dörrhålet. En dörr kan jag printa. |
| 5:04 | röst | du | Det drar från dörrhålet. En dörr kan jag printa. · MÅL |
| 5:04 | nick |  | nick:29 |
| 5:07 | klar | du | Det drar från dörrhålet. En dörr kan jag printa. |
| 5:09 | händelse | printStart | sak=kruka |
| 5:12 | händelse | printKlar | sak=kruka n=3 |
| 5:12 | händelse | tagitUrPrint | sak=kruka n=1 |
| 5:17 | sak | du | Flaggan är uppe. Rolf har lämnat något. |
| 5:17 | notis | tanke | 💭 Flaggan är uppe. Rolf har lämnat något. |
| 5:17 | röst | du | Flaggan är uppe. Rolf har lämnat något. · STORY |
| 5:18 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 5:19 | händelse | salt | sak=kruka n=1 |
| 5:19 | aliSalt | ali | 105 |
| 5:19 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 5:20 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 5:21 | klar | du | Flaggan är uppe. Rolf har lämnat något. |
| 5:22 | struken | info:guld | 3D-modell köpt – printa dörr |
| 5:22 | händelse | kopt | sak=dorr |
| 5:22 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 5:30 | sak |  | (läget ändras) |
| 5:30 | brev | rolf | rolf:0 |
| 5:30 | klar |  | (läget ändras) |
| 5:30 | händelse | printStart | sak=byggsats:dorr |
| 5:33 | struken | mamma | Har du frusit än? |
| 5:33 | toast | bra | Del 1 av 2 klar |
| 5:33 | väntar | notis:Storebrors skrivare: Del 1 av 2 klar | Storebrors skrivare: Del 1 av 2 klar |
| 5:34 | sak | ali | Ali här. Skrivartrim. Jag skruvade på min egen skrivare i natt. Den går fortare nu. Nästan för fort. |
| 5:34 | sms | ali | Ali här. Skrivartrim. Jag skruvade på min egen skrivare i natt. Den går fortare nu. Nästan för fort. |
| 5:34 | sms-bubbla | ali | Ali här. Skrivartrim. Jag skruvade på min egen skrivare i natt. Den går fortare nu. Nästan för fort. |
| 5:34 | röst | ali | Ali här. Skrivartrim. Jag skruvade på min egen skrivare i natt. Den går fortare nu. Nästan för fort. · STORY |
| 5:37 | händelse | printKlar | sak=byggsats:dorr n=1 |
| 5:37 | händelse | tagitUrPrint | sak=byggsats:dorr n=1 |
| 5:37 | paket |  | sms |
| 5:37 | väntar | ali | Ali här. Jag har inte sovit. Inte på grund av AI:n. På grund av dig. Du bygger saker av sopor. Jag har en hel butik och bygger ingenting. Det ska ändras. Kanske. Troligen. |
| 5:41 | paket |  | tanke |
| 5:41 | tanke | du | Jaha, Rolf har hämtat en ölhållare med kylklamp. |
| 5:41 | väntar | du | Jaha, Rolf har hämtat en ölhållare med kylklamp. |
| 5:42 | tanke | du | Dörr på plats! Trivsel +8 |
| 5:42 | struken | du | Jaha, Rolf har hämtat en ölhållare med kylklamp. |
| 5:42 | väntar | du | Dörr på plats! Trivsel +8 |
| 5:42 | händelse | malKlart | id=n1-bygg-dorr-skjulet del=Dag 2 – Tippen bredvid nasta=sov2 |
| 5:42 | paket |  | lapp |
| 5:42 | väntar | du | Nu vet Ali att jag bor HÄR. Taket läcker. I morgon. |
| 5:42 | paket |  | sms |
| 5:42 | väntar | bror | Mamma ringde mig fyra gånger förresten. Snyggt jobbat 😂 |
| 5:42 | skratt | bror | Mamma ringde mig fyra gånger förresten. |
| 5:42 | bekräftelse | du | plats |
| 5:42 | struken | du | Dörr på plats! Trivsel +8 |
| 5:42 | väntar | du | Sov när du vill. |
| 5:42 | MÅL |  | Sov när du vill |
| 5:43 | kvitto-visas | du | Nu vet Ali att jag bor HÄR. Taket läcker. I morgon. |
| 5:43 | sak | du | Nu vet Ali att jag bor HÄR. Taket läcker. I morgon. |
| 5:43 | kvallsrad | du | Nu vet Ali att jag bor HÄR. Taket läcker. I morgon. |
| 5:44 | klar | ali | Ali här. Skrivartrim. Jag skruvade på min egen skrivare i natt. Den går fortare nu. Nästan för fort. |
| 5:44 | sak | du | Sov när du vill. |
| 5:44 | målruta |  | Sov när du vill |
| 5:44 | pil |  | Sov när du vill |
| 5:44 | röst | du | Sov när du vill. · MÅL |
| 5:46 | kvittens-bock |  | ✓ Bygg en dörr till skjulet |
| 5:46 | klar | du | Sov när du vill. |
| 5:48 | autosparning | du | natt 11 december |
| 5:51 | nattkort | du | 🌙 13 dagar kvar. God natt. zzz… Nu vet Ali att jag bor HÄR. Taket läcker. I morgon. DAGENS PRINTAR Blomkruka × 2 Ölhållare med kylklamp × 1 Totalt 3 printar 💰 |

<details><summary>Botens handlingar dag 2</summary>

- 0:00 — dag 2 börjar — (30 kr)
- 0:12 popup: "FORTSÄTT" (30 kr)
- 0:22 tjänar pengar till väntar på flaskhalsen för kvarnmotor: 30/70 kr → printar blomkruka (105 kr) (30 kr)
- 0:30 plockar 6 skräp på gården (bär max 6) (30 kr)
- 0:36 gå till kvarnen (31 m) (30 kr)
- 0:42 gå till skrivaren (3 m) (30 kr)
- 0:44 printar Blomkruka (30 kr)
- 0:47 tar ut 1 st ur skrivaren (30 kr)
- 0:53 gå till Ali (28 m) (30 kr)
- 0:53 öppnar Alis butik – sälja (30 kr)
- 0:55 säljer hos Ali: +105 kr (135 kr)
- 1:06 öppnar Alis butik – köpa kvarnmotor (135 kr)
- 1:08 köper kvarnmotor för 50 kr (85 kr)
- 1:22 gå till skrivaren (25 m) (85 kr)
- 1:24 printar Kvarnmotor (85 kr)
- 1:26 gå till cykeln (1 m) (85 kr)
- 1:29 tar ut 1 st ur skrivaren (85 kr)
- 1:42 gå till skruva fast kvarnmotorn (3 m) (85 kr)
- 2:01 plockar 3 skräp på gården (bär max 6) (85 kr)
- 2:07 gå till kvarnen (28 m) (85 kr)
- 2:21 plockar 6 skräp på gården (bär max 6) (85 kr)
- 2:29 gå till kvarnen (39 m) (85 kr)
- 2:54 plockar 2 skräp på gården (bär max 6) (85 kr)
- 3:00 gå till kvarnen (28 m) (85 kr)
- 3:12 plockar 6 skräp på gården (bär max 6) (85 kr)
- 3:19 gå till Rolfs sopsäck (25 m) (85 kr)
- 3:24 tar på korg (85 kr)
- 3:24 vet inte vad jag ska göra: "Möt sopbilen vid grinden" (85 kr)
- 3:45 gå till Rolfs postlåda (28 m) (85 kr)
- 3:47 gå till skrivaren (7 m) (85 kr)
- 3:48 printar Ölhållare med kylklamp (85 kr)
- 3:53 tar ut 1 st ur skrivaren (85 kr)
- 4:05 valj olhallare: true, vald olhallare, post {"l":null,"tr":null,"tm":[]}, nummer false (85 kr)
- 4:06 gå till Rolfs postlåda (6 m) (85 kr)
- 4:25 gå till Ali (31 m) (85 kr)
- 4:25 öppnar Alis butik – köpa vindsnurra till skjultaket (85 kr)
- 4:28 köper vindsnurra för 50 kr (35 kr)
- 4:34 gå till skrivaren (25 m) (35 kr)
- 4:35 printar Vindsnurra till skjultaket (35 kr)
- 4:36 gå till cykeln (1 m) (35 kr)
- 4:41 tar ut 1 st ur skrivaren (35 kr)
- 4:52 gå till sätt vindsnurran på taket (20 m) (35 kr)
- 5:04 tjänar pengar till dörr: 35/120 kr → printar blomkruka (105 kr) (35 kr)
- 5:08 gå till skrivaren (19 m) (35 kr)
- 5:09 printar Blomkruka (35 kr)
- 5:13 tar ut 1 st ur skrivaren (35 kr)
- 5:18 gå till Ali (26 m) (35 kr)
- 5:18 öppnar Alis butik – sälja (35 kr)
- 5:19 säljer hos Ali: +105 kr (140 kr)
- 5:20 öppnar Alis butik – köpa dörr (140 kr)
- 5:23 köper dorr för 120 kr (20 kr)
- 5:29 gå till skrivaren (25 m) (20 kr)
- 5:30 printar Dörr (2 delar) (20 kr)
- 5:38 tar ut 1 st ur skrivaren (20 kr)
- 5:42 gå till skjulet (19 m) (20 kr)
- 5:48 gå till sängen (1 m) (20 kr)

</details>

## Dag 3

| Tid | Källa | Vem | Text |
|---|---|---|---|
| 5:51 | vara | ali | ingen |
| 5:51 | händelse | malKlart | id=sov2 del=Dag 2 – Tippen bredvid nasta=rolf1-brev |
| 5:51 | bekräftelse | du | plats |
| 5:51 | vara | ali | kruka |
| 5:51 | MÅL |  | Möt sopbilen vid grinden |
| 0:00 | autosparning | du | morgon 12 december |
| 0:01 | händelse | dagenBorjar | dag=3 |
| 0:01 | meddelande | du | 12 dagar till jul. Utan Rolf kommer jag aldrig in på tippen. |
| 0:01 | dagbokkort | du | Rolfs brev. · 12 dagar till jul. Utan Rolf kommer jag aldrig in på tippen. |
| 0:01 | röst | du | 12 dagar till jul. Rolfs brev. Utan Rolf kommer jag aldrig in på tippen. · STORY |
| 0:08 | väntar | notis:morgon | Ali vill ha idag: Blomkruka · +50 % |
| 0:08 | händelse | morgonkortStangt | dag=3 |
| 0:08 | väntar | ali | Ali här. Jag har inte sovit. Inte på grund av AI:n. På grund av dig. Du bygger saker av sopor. Jag har en hel butik och bygger ingenting. Det ska ändras. Kanske. Troligen. |
| 0:08 | väntar | bror | Mamma ringde mig fyra gånger förresten. Snyggt jobbat 😂 |
| 0:08 | skratt | bror | Mamma ringde mig fyra gånger förresten. |
| 0:08 | väntar | du | Ett nytt brev i Rolfs postlåda. Det läser jag. |
| 0:08 | målruta |  | Möt sopbilen vid grinden |
| 0:13 | sak | du | Ett nytt brev i Rolfs postlåda. Det läser jag. |
| 0:13 | pil |  | Möt sopbilen vid grinden |
| 0:13 | notis | tanke | 💭 Ett nytt brev i Rolfs postlåda. Det läser jag. |
| 0:13 | röst | du | Ett nytt brev i Rolfs postlåda. Det läser jag. · MÅL |
| 0:18 | klar | du | Ett nytt brev i Rolfs postlåda. Det läser jag. |
| 0:18 | struken | notis:Storebrors skrivare: Del 1 av 2 klar | Storebrors skrivare: Del 1 av 2 klar |
| 0:18 | struken | ali | Ali här. Jag har inte sovit. Inte på grund av AI:n. På grund av dig. Du bygger saker av sopor. Jag har en hel butik och bygger ingenting. Det ska ändras. Kanske. Troligen. |
| 0:18 | struken | bror | Mamma ringde mig fyra gånger förresten. Snyggt jobbat 😂 |
| 0:18 | skratt | bror | Mamma ringde mig fyra gånger förresten. |
| 0:18 | sak | notis:morgon | Ali vill ha idag: Blomkruka · +50 % |
| 0:18 | notis |  | Blomkruka · +50 % |
| 0:21 | klar | notis:morgon | Ali vill ha idag: Blomkruka · +50 % |
| 0:30 | tanke | du | Nyckeln ska sitta i låset på grinden. |
| 0:30 | väntar | du | Nyckeln ska sitta i låset på grinden. |
| 0:30 | väntar | rolf | Den funkar! Hä. Ta så mycke skräp du vill. /Rolf​ |
| 0:30 | sak | du | Nyckeln ska sitta i låset på grinden. |
| 0:30 | notis | tanke | 💭 Nyckeln ska sitta i låset på grinden. |
| 0:30 | röst | du | Nyckeln ska sitta i låset på grinden. · REAKTION |
| 0:31 | monterat | du | byggsats:tippnyckel |
| 0:31 | händelse | monterat | sak=tippnyckel |
| 0:31 | scenInfo | du | Kameran sveper över tippen |
| 0:35 | klar | du | Nyckeln ska sitta i låset på grinden. |
| 0:36 | tanke | du | …Det här räcker i hundra år. |
| 0:36 | väntar | du | …Det här räcker i hundra år. |
| 0:36 | skratt | du | falsk tuta |
| 0:38 | tanke | du | En hel kanot. Kvarnen skulle äta upp sig själv. |
| 0:38 | väntar | du | En hel kanot. Kvarnen skulle äta upp sig själv. |
| 0:43 | sak | rolf | Den funkar! Hä. Ta så mycke skräp du vill. /Rolf​ |
| 0:43 | lapp | Brev från Rolf | Den funkar! Hä. Ta så mycke skräp du vill. /Rolf​ |
| 0:43 | röst | rolf | Den funkar! Hä. Ta så mycke skräp du vill. /Rolf​ · STORY |
| 0:44 | skratt | du | falsk tuta |
| 0:44 | paket |  | ge |
| 0:44 | väntar |  | (läget ändras) |
| 0:47 | klar | rolf | Den funkar! Hä. Ta så mycke skräp du vill. /Rolf​ |
| 0:47 | händelse | brevLast | id=rolftack:0 |
| 0:50 | väntar | rolf | ÖJ! Kajsa knuffa ner min flasköppnare i tippen. Kan du göra en ny, mä magnet? Ritade den på rasten. Ungefär så vill ja ha'n. /Rolf​ |
| 0:50 | paket |  | ge |
| 0:50 | väntar |  | (läget ändras) |
| 0:50 | sak | rolf | ÖJ! Kajsa knuffa ner min flasköppnare i tippen. Kan du göra en ny, mä magnet? Ritade den på rasten. Ungefär så vill ja ha'n. /Rolf​ |
| 0:50 | lapp | Brev från Rolf | ÖJ! Kajsa knuffa ner min flasköppnare i tippen. Kan du göra en ny, mä magnet? Ritade den på rasten. Ungefär så vill ja ha'n. /Rolf​ |
| 0:50 | röst | rolf | ÖJ! Kajsa knuffa ner min flasköppnare i tippen. Kan du göra en ny, mä magnet? Ritade den på rasten. Ungefär så vill ja ha'n. /Rolf​ · STORY |
| 0:50 | händelse | malKlart | id=rolf1-brev del=Dag 3 – En skrivare till och taket nasta=n2-hamta-skrap |
| 0:50 | bekräftelse | du | plats |
| 0:50 | struken | du | En hel kanot. Kvarnen skulle äta upp sig själv. |
| 0:50 | väntar | du | Nyckeln till tippen. Där ligger skräpet i högar. |
| 0:50 | MÅL |  | Hämta 5 skräp på soptippen |
| 0:50 | kvitto-visas |  | (läget ändras) |
| 0:50 | sak |  | (läget ändras) |
| 0:52 | målruta |  | Hämta 5 skräp på soptippen |
| 0:54 | händelse | malKlart | id=n2-hamta-skrap del=Dag 3 – En skrivare till och taket nasta=rolf1-printa |
| 0:54 | bekräftelse | du | plats |
| 0:54 | väntar | du | Rolf vill ha en flasköppnare. Den printar jag. |
| 0:54 | MÅL |  | Printa flasköppnare med magnet |
| 0:54 | tanke | du | Fastpressad. Den sitter som i betong. |
| 0:54 | väntar | du | Fastpressad. Den sitter som i betong. |
| 0:54 | tanke | du | Tratten är stor som en kaffekopp. Tunnan är stor som jag. |
| 0:54 | struken | du | Fastpressad. Den sitter som i betong. |
| 0:54 | väntar | du | Tratten är stor som en kaffekopp. Tunnan är stor som jag. |
| 0:54 | kvitto-visas | du | Tratten är stor som en kaffekopp. Tunnan är stor som jag. |
| 0:54 | sak | du | Tratten är stor som en kaffekopp. Tunnan är stor som jag. |
| 0:54 | notis | tanke | 💭 Tratten är stor som en kaffekopp. Tunnan är stor som jag. |
| 0:56 | målruta |  | Printa flasköppnare med magnet |
| 0:58 | kvittens-bock |  | ✓ Hämta 5 skräp på soptippen |
| 1:03 | klar | rolf | ÖJ! Kajsa knuffa ner min flasköppnare i tippen. Kan du göra en ny, mä magnet? Ritade den på rasten. Ungefär så vill ja ha'n. /Rolf​ |
| 1:03 | händelse | brevLast | id=rolf:1 |
| 1:04 | struken | du | Nyckeln till tippen. Där ligger skräpet i högar. |
| 1:04 | sak | du | Rolf vill ha en flasköppnare. Den printar jag. |
| 1:04 | pil |  | Printa flasköppnare med magnet |
| 1:04 | notis | tanke | 💭 Rolf vill ha en flasköppnare. Den printar jag. |
| 1:04 | röst | du | Rolf vill ha en flasköppnare. Den printar jag. · MÅL |
| 1:04 | nick |  | nick:33 |
| 1:06 | klar | du | Rolf vill ha en flasköppnare. Den printar jag. |
| 1:11 | händelse | printStart | sak=flaskoppnare |
| 1:11 | händelse | malKlart | id=rolf1-printa del=Dag 3 – En skrivare till och taket nasta=rolf1-ge |
| 1:11 | bekräftelse | du | plats |
| 1:11 | väntar | du | Flasköppnaren är klar. Den lägger jag i Rolfs postlåda. |
| 1:11 | målruta |  | Ge Rolf flasköppnare med magnet |
| 1:11 | MÅL |  | Ge Rolf flasköppnare med magnet |
| 1:13 | sak | du | Flasköppnaren är klar. Den lägger jag i Rolfs postlåda. |
| 1:13 | pil |  | Ge Rolf flasköppnare med magnet |
| 1:13 | notis | tanke | 💭 Flasköppnaren är klar. Den lägger jag i Rolfs postlåda. |
| 1:13 | röst | du | Flasköppnaren är klar. Den lägger jag i Rolfs postlåda. · MÅL |
| 1:14 | väntar | mamma | Har du sovit nåt? Du har väl tandborste? Och äter du? Svara inte, jag vet att du är arg. ❤️ /Mamma |
| 1:15 | händelse | printKlar | sak=flaskoppnare n=1 |
| 1:15 | händelse | tagitUrPrint | sak=flaskoppnare n=1 |
| 1:15 | kvittens-bock |  | ✓ Printa flasköppnare med magnet |
| 1:18 | klar | du | Flasköppnaren är klar. Den lägger jag i Rolfs postlåda. |
| 1:22 | händelse | lagtIPostlada | sak=flaskoppnare rolf=1 jobb=false |
| 1:22 | händelse | malKlart | id=rolf1-ge del=Dag 3 – En skrivare till och taket nasta=kopBatteri |
| 1:22 | bekräftelse | du | plats |
| 1:22 | väntar | du | Ali har ett gammalt bilbatteri. Då sparar jag strömmen. |
| 1:22 | målruta |  | Köp Alis gamla bilbatteri |
| 1:22 | MÅL |  | Köp Alis gamla bilbatteri |
| 1:22 | upplåst | strom | cykelbatteri |
| 1:22 | brott | UPPLÅST | cykelbatteri (strom 8 av 15, sparat ihop) |
| 1:22 | händelse | upplast | id=cykelbatteri flask=strom |
| 1:22 | paket |  | sms |
| 1:22 | väntar | ali | Ali här. Bilbatteriet ur min gamla Volvo står i lagret. Det sparar mer ström än powerbanken. |
| 1:22 | sak | du | Ali har ett gammalt bilbatteri. Då sparar jag strömmen. |
| 1:22 | pil |  | Köp Alis gamla bilbatteri |
| 1:22 | notis | tanke | 💭 Ali har ett gammalt bilbatteri. Då sparar jag strömmen. |
| 1:22 | röst | du | Ali har ett gammalt bilbatteri. Då sparar jag strömmen. · MÅL |
| 1:23 | nick |  | nick:35 |
| 1:26 | kvittens-bock |  | ✓ Ge Rolf flasköppnare med magnet |
| 1:28 | klar | du | Ali har ett gammalt bilbatteri. Då sparar jag strömmen. |
| 1:30 | brott | TRÄNGSEL 2 | "Ali här. Bilbatteriet ur min gamla Volvo står i la" 2.0 s efter förra meddelandet, 8.2 s efter en klar uppgift |
| 1:30 | sak | ali | Ali här. Bilbatteriet ur min gamla Volvo står i lagret. Det sparar mer ström än powerbanken. |
| 1:30 | sms | ali | Ali här. Bilbatteriet ur min gamla Volvo står i lagret. Det sparar mer ström än powerbanken. |
| 1:30 | sms-bubbla | ali | Ali här. Bilbatteriet ur min gamla Volvo står i lagret. Det sparar mer ström än powerbanken. |
| 1:30 | röst | ali | Ali här. Bilbatteriet ur min gamla Volvo står i lagret. Det sparar mer ström än powerbanken. · STORY |
| 1:32 | tanke | du | Hård plast. Lilla kvarnen skulle explodera. Eller jag. |
| 1:32 | väntar | du | Hård plast. Lilla kvarnen skulle explodera. Eller jag. |
| 1:40 | klar | ali | Ali här. Bilbatteriet ur min gamla Volvo står i lagret. Det sparar mer ström än powerbanken. |
| 1:41 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 1:41 | röst | ali | Semester? Jag hade semester 2009. Det regnade. · STORY |
| 1:41 | butiksbubbla | ali | Semester? Jag hade semester 2009. Det regnade. |
| 1:42 | toast | guld | 🔋 Bilbatteriet ska kopplas in på cykeln. |
| 1:42 | händelse | kopt | sak=cykelbatteri |
| 1:42 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 1:42 | butiksbubbla | ali | Batteriet ur min gamla Volvo. Bilen dog 2016. Batteriet vägrade. |
| 1:44 | väntar | ali | Batteriet ur min gamla Volvo. Bilen dog 2016. Batteriet vägrade. |
| 1:46 | sak | ali | Batteriet ur min gamla Volvo. Bilen dog 2016. Batteriet vägrade. |
| 1:46 | röst | ali | Batteriet ur min gamla Volvo. Bilen dog 2016. Batteriet vägrade. · STORY |
| 1:55 | klar | ali | Batteriet ur min gamla Volvo. Bilen dog 2016. Batteriet vägrade. |
| 1:57 | struken | du | Hård plast. Lilla kvarnen skulle explodera. Eller jag. |
| 2:01 | tanke | du | Bilbatteriet är inkopplat – skrivaren printar klart även när du slutar trampa |
| 2:01 | väntar | du | Bilbatteriet är inkopplat – skrivaren printar klart även när du slutar trampa |
| 2:01 | monterat | du | byggsats:cykelbatteri |
| 2:01 | händelse | monterat | sak=cykelbatteri |
| 2:01 | sak | du | Bilbatteriet är inkopplat – skrivaren printar klart även när du slutar trampa |
| 2:01 | notis | tanke | 💭 Bilbatteriet är inkopplat – skrivaren printar klart även när du slutar trampa |
| 2:01 | röst | du | Bilbatteriet är inkopplat – skrivaren printar klart även när du slutar trampa · REAKTION |
| 2:01 | händelse | malKlart | id=kopBatteri del=Dag 3 – En skrivare till och taket nasta=ryggkorg |
| 2:01 | bekräftelse | du | plats |
| 2:01 | kvittens | du | Nu printar den klart även när jag vilar benen. |
| 2:01 | väntar | du | Nu printar den klart även när jag vilar benen. |
| 2:01 | väntar | du | Jag springer för mycket. Med en ryggkorg bär jag sexton saker. |
| 2:01 | MÅL |  | Köp ryggkorgen |
| 2:01 | upplåst | bara | ryggkorg |
| 2:01 | brott | UPPLÅST | ryggkorg (bara 3 av 3) |
| 2:01 | händelse | upplast | id=ryggkorg flask=bara |
| 2:01 | paket |  | sms |
| 2:01 | väntar | ali | Ali här. En ryggkorg. AI:n ritade den efter en bild på min mormor. Den rymmer sexton. |
| 2:02 | väntar | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått en DÖRR. Och vindsnurra till skjultaket. Mer säger jag inte. Gunnar vet. |
| 2:02 | radio | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått en DÖRR. Och vindsnurra till skjultaket. Mer säger jag inte. Gunnar vet. |
| 2:02 | skratt | du | Radio-Kjelle |
| 2:03 | målruta |  | Köp ryggkorgen |
| 2:04 | pil |  | Köp ryggkorgen |
| 2:04 | nick |  | nick:36 |
| 2:07 | klar | du | Bilbatteriet är inkopplat – skrivaren printar klart även när du slutar trampa |
| 2:07 | sak | du | Nu printar den klart även när jag vilar benen. |
| 2:07 | röst | du | Nu printar den klart även när jag vilar benen. · STORY |
| 2:11 | klar | du | Nu printar den klart även när jag vilar benen. |
| 2:11 | sak | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått en DÖRR. Och vindsnurra till skjultaket. Mer säger jag inte. Gunnar vet. |
| 2:11 | notis |  | 📻 Radio Tippen: Radio Tippen, Kjelle här. Skjulet vid tippen har fått en DÖRR. Och vindsnurra till skjultaket. Mer säger jag inte. Gunnar vet. |
| 2:11 | röst | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått en DÖRR. Och vindsnurra till skjultaket. Mer säger jag inte. Gunnar vet. · REAKTION |
| 2:16 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 2:17 | struken | info:guld | 3D-modell köpt – printa ryggkorg |
| 2:17 | händelse | kopt | sak=ryggkorg |
| 2:17 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 2:22 | klar | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått en DÖRR. Och vindsnurra till skjultaket. Mer säger jag inte. Gunnar vet. |
| 2:22 | struken | ali | Ali här. En ryggkorg. AI:n ritade den efter en bild på min mormor. Den rymmer sexton. |
| 2:22 | sak | du | Jag springer för mycket. Med en ryggkorg bär jag sexton saker. |
| 2:22 | notis | tanke | 💭 Jag springer för mycket. Med en ryggkorg bär jag sexton saker. |
| 2:22 | röst | du | Jag springer för mycket. Med en ryggkorg bär jag sexton saker. · MÅL |
| 2:26 | händelse | printStart | sak=byggsats:ryggkorg |
| 2:29 | klar | du | Jag springer för mycket. Med en ryggkorg bär jag sexton saker. |
| 2:31 | skratt | du | falsk tuta |
| 2:32 | toast | bra | Del 1 av 2 klar |
| 2:37 | sak | du | …Det här räcker i hundra år. |
| 2:37 | notis | tanke | 💭 …Det här räcker i hundra år. |
| 2:37 | röst | du | …Det här räcker i hundra år. · STORY |
| 2:38 | händelse | printKlar | sak=byggsats:ryggkorg n=1 |
| 2:38 | tanke | du | Ryggkorg ska jag ha på mig. |
| 2:38 | väntar | du | Ryggkorg ska jag ha på mig. |
| 2:38 | händelse | tagitUrPrint | sak=byggsats:ryggkorg n=1 |
| 2:38 | paket |  | sms |
| 2:38 | väntar | ali | Ali här. Du printade Ryggkorg från min ritning. Och det FUNKAR? Jag har bara sett sånt på YouTube. |
| 2:38 | händelse | malKlart | id=ryggkorg del=Dag 3 – En skrivare till och taket nasta=ryggkorgPa |
| 2:38 | bekräftelse | du | plats |
| 2:38 | struken | du | Ryggkorg ska jag ha på mig. |
| 2:38 | väntar | du | Ryggkorgen är klar. På med den. |
| 2:38 | MÅL |  | Ta på ryggkorgen |
| 2:38 | väntar | mamma | Jag sa till pappa att du bor på en soptipp. Han sa "aha, vad lugnt då" och satte på Formel 1. Lugnt? |
| 2:40 | klar | du | …Det här räcker i hundra år. |
| 2:40 | målruta |  | Ta på ryggkorgen |
| 2:42 | kvittens-bock |  | ✓ Printa ryggkorgen |
| 2:42 | tog på | du | byggsats:ryggkorg |
| 2:42 | händelse | monterat | sak=ryggkorg |
| 2:42 | struken | du | Ryggkorgen är klar. På med den. |
| 2:42 | händelse | malKlart | id=ryggkorgPa del=Dag 3 – En skrivare till och taket nasta=n2-bygg-arbetsbord |
| 2:42 | bekräftelse | du | plats |
| 2:42 | kvittens | du | Nu bär jag sexton skräp. |
| 2:42 | väntar | du | Nu bär jag sexton skräp. |
| 2:42 | väntar | du | Ett arbetsbord bredvid skrivaren. Skrivare M ska stå på det. |
| 2:42 | MÅL |  | Bygg ett arbetsbord |
| 2:42 | sak | du | Nu bär jag sexton skräp. |
| 2:42 | röst | du | Nu bär jag sexton skräp. · STORY |
| 2:42 | målruta |  | Bygg ett arbetsbord |
| 2:44 | händelse | printStart | sak=kruka |
| 2:47 | klar | du | Nu bär jag sexton skräp. |
| 2:47 | sak | ali | Ali här. Du printade Ryggkorg från min ritning. Och det FUNKAR? Jag har bara sett sånt på YouTube. |
| 2:47 | sms | ali | Ali här. Du printade Ryggkorg från min ritning. Och det FUNKAR? Jag har bara sett sånt på YouTube. |
| 2:47 | sms-bubbla | ali | Ali här. Du printade Ryggkorg från min ritning. Och det FUNKAR? Jag har bara sett sånt på YouTube. |
| 2:47 | röst | ali | Ali här. Du printade Ryggkorg från min ritning. Och det FUNKAR? Jag har bara sett sånt på YouTube. · REAKTION |
| 2:48 | paket |  | tanke |
| 2:48 | tanke | du | Jaha, Rolf har hämtat en flasköppnare med magnet. |
| 2:48 | väntar | du | Jaha, Rolf har hämtat en flasköppnare med magnet. |
| 2:50 | paket |  | tanke |
| 2:50 | tanke | du | Den blev… spagetti. Ali kallar det modern konst. |
| 2:50 | struken | du | Jaha, Rolf har hämtat en flasköppnare med magnet. |
| 2:50 | väntar | du | Den blev… spagetti. Ali kallar det modern konst. |
| 2:50 | skratt | du | plastspagetti |
| 2:50 | händelse | printKlar | sak=kruka n=4 |
| 2:50 | paket |  | tanke |
| 2:50 | tanke | du | En toffla. Bara en. |
| 2:50 | struken | du | Den blev… spagetti. Ali kallar det modern konst. |
| 2:50 | väntar | du | En toffla. Bara en. |
| 2:50 | skratt | du | kvarnen spottar |
| 2:50 | händelse | tagitUrPrint | sak=spagetti n=1 |
| 2:56 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 2:56 | klar | ali | Ali här. Du printade Ryggkorg från min ritning. Och det FUNKAR? Jag har bara sett sånt på YouTube. |
| 2:57 | händelse | salt | sak=spagetti n=1 |
| 2:57 | skratt | du | Ali köper konst |
| 2:57 | aliSalt | ali | 3 |
| 2:57 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 2:58 | sak | du | Ett arbetsbord bredvid skrivaren. Skrivare M ska stå på det. |
| 2:58 | pil |  | Bygg ett arbetsbord |
| 2:58 | notis | tanke | 💭 Ett arbetsbord bredvid skrivaren. Skrivare M ska stå på det. |
| 2:58 | röst | du | Ett arbetsbord bredvid skrivaren. Skrivare M ska stå på det. · MÅL |
| 2:59 | nick |  | nick:38 |
| 3:05 | händelse | printStart | sak=kruka |
| 3:05 | klar | du | Ett arbetsbord bredvid skrivaren. Skrivare M ska stå på det. |
| 3:07 | brott | TRÄNGSEL 2 | "Jag sa till pappa att du bor på en soptipp. Han sa" 2.0 s efter förra meddelandet, 25.2 s efter en klar uppgift |
| 3:07 | sak | mamma | Jag sa till pappa att du bor på en soptipp. Han sa "aha, vad lugnt då" och satte på Formel 1. Lugnt? |
| 3:07 | sms | mamma | Jag sa till pappa att du bor på en soptipp. Han sa "aha, vad lugnt då" och satte på Formel 1. Lugnt? |
| 3:07 | sms-bubbla | mamma | Jag sa till pappa att du bor på en soptipp. Han sa "aha, vad lugnt då" och satte på Formel 1. Lugnt? |
| 3:07 | röst | mamma | Jag sa till pappa att du bor på en soptipp. Han sa "aha, vad lugnt då" och satte på Formel 1. Lugnt? · SMÅPRAT |
| 3:11 | händelse | printKlar | sak=kruka n=5 |
| 3:11 | händelse | tagitUrPrint | sak=kruka n=1 |
| 3:14 | hjälp | kontroll | R: Vrid innan du ställer ner |
| 3:16 | klar | mamma | Jag sa till pappa att du bor på en soptipp. Han sa "aha, vad lugnt då" och satte på Formel 1. Lugnt? |
| 3:17 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 3:18 | händelse | salt | sak=kruka n=1 |
| 3:18 | aliSalt | ali | 105 |
| 3:18 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 3:19 | struken | du | En toffla. Bara en. |
| 3:19 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 3:21 | struken | info:guld | 3D-modell köpt – printa arbetsbord |
| 3:21 | händelse | kopt | sak=bord |
| 3:21 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 3:24 | sak |  | (läget ändras) |
| 3:24 | brev | rolf | rolf:1 |
| 3:24 | klar |  | (läget ändras) |
| 3:29 | händelse | printStart | sak=byggsats:bord |
| 3:36 | toast | bra | Del 1 av 3 klar |
| 3:43 | toast | bra | Del 2 av 3 klar |
| 3:44 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 3:44 | väntar | notis:Storebrors skrivare: Tornet är tomt – ma | Storebrors skrivare: Tornet är tomt – mal mer så fortsätter den |
| 3:46 | väntar | bror | Pappa har tvättat bilen tre gånger den här veckan. Jag sa att du bor på tippen. Han frågade vilken modell sopbilen var. |
| 4:00 | händelse | printKlar | sak=byggsats:bord n=1 |
| 4:02 | händelse | tagitUrPrint | sak=byggsats:bord n=1 |
| 4:04 | struken | notis:Storebrors skrivare: Tornet är tomt – ma | Storebrors skrivare: Tornet är tomt – mal mer så fortsätter den |
| 4:05 | händelse | placerat | sak=bord |
| 4:05 | händelse | malKlart | id=n2-bygg-arbetsbord del=Dag 3 – En skrivare till och taket nasta=n2-bygg-skrivare-m |
| 4:05 | bekräftelse | du | plats |
| 4:05 | väntar | du | Skrivare M på bordet. Två skrivare, dubbelt så mycket. |
| 4:05 | målruta |  | Spara till Skrivare M · 98 / 180 kr |
| 4:05 | MÅL |  | Spara till Skrivare M · 98 / 180 kr |
| 4:05 | upplåst | skrivare | skrivare2 |
| 4:05 | brott | UPPLÅST | skrivare2 (skrivare 288 av 60) |
| 4:05 | händelse | upplast | id=skrivare2 flask=skrivare |
| 4:05 | paket |  | sms |
| 4:05 | väntar | ali | Ali här. Skrivare M har kommit. Två och en halv gånger snabbare. Snabbare än jag. Jag har inte varit snabb sedan 1998. |
| 4:05 | sak | du | Skrivare M på bordet. Två skrivare, dubbelt så mycket. |
| 4:05 | pil |  | Spara till Skrivare M · 98 / 180 kr |
| 4:05 | notis | tanke | 💭 Skrivare M på bordet. Två skrivare, dubbelt så mycket. |
| 4:05 | röst | du | Skrivare M på bordet. Två skrivare, dubbelt så mycket. · MÅL |
| 4:06 | nick |  | nick:39 |
| 4:09 | kvittens-bock |  | ✓ Bygg ett arbetsbord |
| 4:12 | klar | du | Skrivare M på bordet. Två skrivare, dubbelt så mycket. |
| 4:16 | händelse | printStart | sak=kruka |
| 4:21 | händelse | printKlar | sak=kruka n=6 |
| 4:22 | händelse | tagitUrPrint | sak=kruka n=1 |
| 4:26 | hjälp | kontroll | R: Vrid innan du ställer ner |
| 4:27 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 4:28 | sak | ali | Ali här. Skrivare M har kommit. Två och en halv gånger snabbare. Snabbare än jag. Jag har inte varit snabb sedan 1998. |
| 4:28 | sms | ali | Ali här. Skrivare M har kommit. Två och en halv gånger snabbare. Snabbare än jag. Jag har inte varit snabb sedan 1998. |
| 4:28 | sms-bubbla | ali | Ali här. Skrivare M har kommit. Två och en halv gånger snabbare. Snabbare än jag. Jag har inte varit snabb sedan 1998. |
| 4:28 | röst | ali | Ali här. Skrivare M har kommit. Två och en halv gånger snabbare. Snabbare än jag. Jag har inte varit snabb sedan 1998. · STORY |
| 4:29 | händelse | salt | sak=kruka n=1 |
| 4:29 | aliSalt | ali | 105 |
| 4:29 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 4:41 | klar | ali | Ali här. Skrivare M har kommit. Två och en halv gånger snabbare. Snabbare än jag. Jag har inte varit snabb sedan 1998. |
| 4:42 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 4:44 | struken | info:guld | 3D-modell köpt – printa skrivare M |
| 4:44 | händelse | kopt | sak=skrivare2 |
| 4:44 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 4:52 | händelse | printStart | sak=byggsats:skrivare2 |
| 5:01 | toast | bra | Del 1 av 5 klar |
| 5:05 | skratt | du | falsk tuta |
| 5:05 | väntar | värld:TUUT! Hej grannen! | TUUT! Hej grannen! |
| 5:06 | väntar | rolf | Morgonbulle på kontoret me polarna. Bengt har ny keps. Vi pratade om den i en timme. Den e grön. /R |
| 5:11 | toast | bra | Del 2 av 5 klar |
| 5:20 | toast | bra | Del 3 av 5 klar |
| 5:25 | struken | värld:TUUT! Hej grannen! | TUUT! Hej grannen! |
| 5:29 | toast | bra | Del 4 av 5 klar |
| 5:30 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 5:43 | händelse | printKlar | sak=byggsats:skrivare2 n=1 |
| 5:44 | händelse | tagitUrPrint | sak=byggsats:skrivare2 n=1 |
| 5:47 | händelse | placerat | sak=skrivare2 |
| 5:47 | paket |  | tanke |
| 5:47 | tanke | du | Den här måste stå i linjen vid kvarnen, annars når inte slangen. |
| 5:47 | väntar | du | Den här måste stå i linjen vid kvarnen, annars når inte slangen. |
| 5:47 | händelse | malKlart | id=n2-bygg-skrivare-m del=Dag 3 – En skrivare till och taket nasta=n2-lagg-plattak-skjulet |
| 5:47 | bekräftelse | du | plats |
| 5:47 | lapp-kö | 📱 Storebror | VA?! Du har byggt en skrivare TILL?? Du har typ en printfarm nu. Okej. Det är faktiskt ganska ballt. 🔥 |
| 5:47 | väntar | bror | VA?! Du har byggt en skrivare TILL?? Du har typ en printfarm nu. Okej. Det är faktiskt ganska ballt. 🔥 |
| 5:47 | väntar | du | Det regnar in. Plåt på taket, så slipper jag sova i en pöl. |
| 5:47 | MÅL |  | Lägg plåttak på skjulet |
| 5:47 | målruta |  | Lägg plåttak på skjulet |
| 5:47 | sak | du | Det regnar in. Plåt på taket, så slipper jag sova i en pöl. |
| 5:47 | pil |  | Lägg plåttak på skjulet |
| 5:47 | notis | tanke | 💭 Det regnar in. Plåt på taket, så slipper jag sova i en pöl. |
| 5:47 | röst | du | Det regnar in. Plåt på taket, så slipper jag sova i en pöl. · MÅL |
| 5:48 | väntar | mamma | Har du sovit nåt? Du har väl tandborste? Och äter du? Svara inte, jag vet att du är arg. ❤️ /Mamma |
| 5:51 | kvittens-bock |  | ✓ Bygg Skrivare M på bordet |
| 5:53 | upplåst | skrivare | trim_skrivare2 |
| 5:53 | brott | UPPLÅST | trim_skrivare2 (skrivare 60 av 60) |
| 5:53 | händelse | upplast | id=trim_skrivare2 flask=skrivare |
| 5:53 | paket |  | tanke → sms |
| 5:53 | tanke | du | Skrivare M hinner inte heller. Den kunde gå fortare. |
| 5:53 | väntar | du | Skrivare M hinner inte heller. Den kunde gå fortare. |
| 5:53 | väntar | ali | Ali här. Skrivartrim igen. Nästa nivå. Den här gången skruvade jag åt rätt håll. |
| 5:55 | klar | du | Det regnar in. Plåt på taket, så slipper jag sova i en pöl. |
| 5:55 | sak | du | Skrivare M hinner inte heller. Den kunde gå fortare. |
| 5:55 | notis | tanke | 💭 Skrivare M hinner inte heller. Den kunde gå fortare. |
| 5:55 | röst | du | Skrivare M hinner inte heller. Den kunde gå fortare. · STORY |
| 6:00 | klar | du | Skrivare M hinner inte heller. Den kunde gå fortare. |
| 6:02 | händelse | printStart | sak=kruka |
| 6:02 | toast | bra | 🔗 Slangen kopplad |
| 6:05 | händelse | printKlar | sak=kruka n=7 |
| 6:06 | händelse | tagitUrPrint | sak=kruka n=1 |
| 6:08 | hjälp | kontroll | R: Vrid innan du ställer ner |
| 6:08 | struken | mamma | Har du sovit nåt? Du har väl tandborste? Och äter du? Svara inte, jag vet att du är arg. ❤️ /Mamma |
| 6:11 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 6:12 | sak | ali | Ali här. Skrivartrim igen. Nästa nivå. Den här gången skruvade jag åt rätt håll. |
| 6:12 | sms | ali | Ali här. Skrivartrim igen. Nästa nivå. Den här gången skruvade jag åt rätt håll. |
| 6:12 | sms-bubbla | ali | Ali här. Skrivartrim igen. Nästa nivå. Den här gången skruvade jag åt rätt håll. |
| 6:12 | röst | ali | Ali här. Skrivartrim igen. Nästa nivå. Den här gången skruvade jag åt rätt håll. · STORY |
| 6:13 | händelse | salt | sak=kruka n=1 |
| 6:13 | aliSalt | ali | 105 |
| 6:13 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 6:14 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 6:16 | struken | info:guld | 3D-modell köpt – printa plåttak |
| 6:16 | händelse | kopt | sak=tak |
| 6:16 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 6:21 | klar | ali | Ali här. Skrivartrim igen. Nästa nivå. Den här gången skruvade jag åt rätt håll. |
| 6:24 | händelse | printStart | sak=byggsats:tak |
| 6:28 | toast | bra | Del 1 av 3 klar |
| 6:32 | toast | bra | Del 2 av 3 klar |
| 6:34 | toast | fel | Ingen ström – trampa cykeln |
| 6:44 | händelse | printKlar | sak=byggsats:tak n=1 |
| 6:45 | händelse | tagitUrPrint | sak=byggsats:tak n=1 |
| 6:48 | sak | du | Den här måste stå i linjen vid kvarnen, annars når inte slangen. |
| 6:48 | notis | tanke | 💭 Den här måste stå i linjen vid kvarnen, annars når inte slangen. |
| 6:48 | röst | du | Den här måste stå i linjen vid kvarnen, annars når inte slangen. · STORY |
| 6:49 | tanke | du | Plåttak på plats! Trivsel +12 |
| 6:49 | väntar | du | Plåttak på plats! Trivsel +12 |
| 6:49 | händelse | malKlart | id=n2-lagg-plattak-skjulet del=Dag 3 – En skrivare till och taket nasta=rolf2-brev |
| 6:49 | bekräftelse | du | plats |
| 6:49 | struken | du | Plåttak på plats! Trivsel +12 |
| 6:50 | MÅL |  | Möt sopbilen vid grinden |
| 6:52 | målruta |  | Möt sopbilen vid grinden |
| 6:53 | klar | du | Den här måste stå i linjen vid kvarnen, annars når inte slangen. |
| 6:53 | sak | du | (nytt mål i rutan) |
| 6:53 | pil |  | Möt sopbilen vid grinden |
| 6:53 | kvittens-bock |  | ✓ Lägg plåttak på skjulet |
| 6:53 | klar | du | (nytt mål i rutan) |
| 7:08 | sak | bror | VA?! Du har byggt en skrivare TILL?? Du har typ en printfarm nu. Okej. Det är faktiskt ganska ballt. 🔥 |
| 7:08 | sms | bror | VA?! Du har byggt en skrivare TILL?? Du har typ en printfarm nu. Okej. Det är faktiskt ganska ballt. 🔥 |
| 7:08 | sms-bubbla | bror | VA?! Du har byggt en skrivare TILL?? Du har typ en printfarm nu. Okej. Det är faktiskt ganska ballt. 🔥 |
| 7:08 | röst | bror | VA?! Du har byggt en skrivare TILL?? Du har typ en printfarm nu. Okej. Det är faktiskt ganska ballt. 🔥 · STORY |
| 7:13 | skratt | du | falsk tuta |
| 7:17 | klar | bror | VA?! Du har byggt en skrivare TILL?? Du har typ en printfarm nu. Okej. Det är faktiskt ganska ballt. 🔥 |
| 7:21 | paket |  | ge |
| 7:21 | väntar |  | (läget ändras) |
| 7:26 | skratt | du | tummen på fotot |
| 7:26 | väntar | foto | Tak över huvudet (och min tumme) |
| 7:26 | paket |  | tanke |
| 7:26 | tanke | du | I natt somnar jag torr. Det börjar bli ett hem. |
| 7:26 | väntar | du | I natt somnar jag torr. Det börjar bli ett hem. |
| 7:31 | väntar | rolf | Nämen. PERFEKT öppnare! Kärran vid lådan ä din. Den gnisslar. Precis som ja. Skriv ditt nummer på en lapp, så slipper ja skriva brev. /Rolf​ |
| 7:31 | struken | info:bra | 🛒 12 skräp från famnen i skottkärran – kärran tar mer än famnen |
| 7:34 | skratt | du | falsk tuta |
| 7:34 | väntar | värld:TUUT! Tjena! | TUUT! Tjena! |
| 7:38 | sak | rolf | Nämen. PERFEKT öppnare! Kärran vid lådan ä din. Den gnisslar. Precis som ja. Skriv ditt nummer på en lapp, så slipper ja skriva brev. /Rolf​ |
| 7:38 | lapp | Brev från Rolf | Nämen. PERFEKT öppnare! Kärran vid lådan ä din. Den gnisslar. Precis som ja. Skriv ditt nummer på en lapp, så slipper ja skriva brev. /Rolf​ |
| 7:38 | röst | rolf | Nämen. PERFEKT öppnare! Kärran vid lådan ä din. Den gnisslar. Precis som ja. Skriv ditt nummer på en lapp, så slipper ja skriva brev. /Rolf​ · STORY |
| 7:39 | väntar | bud | (tips) |
| 7:39 | struken | info:bra | 📝 Lappen med mitt nummer ligger i Rolfs postlåda. |
| 7:39 | paket |  | sms |
| 7:39 | väntar | rolf | Rolf hä!! Funkar dä?? ja skrivr mä EN fingr. dä tar sin tid men dä ä int så farligt. Tack ska du ha för nummret, fingrarna tackar oxå. Ja lägger saker i lådan ibland å då sms:ar ja. Int efter tie bara. /R​ |
| 7:39 | paket |  | sms |
| 7:39 | väntar | rolf | Hörru. Morgonbulle på kontoret mä polarna. grannen har ny keps. Vi pratade om den i en timme. Den ä grön. /R​ |
| 7:50 | klar | rolf | Nämen. PERFEKT öppnare! Kärran vid lådan ä din. Den gnisslar. Precis som ja. Skriv ditt nummer på en lapp, så slipper ja skriva brev. /Rolf​ |
| 7:50 | händelse | brevLast | id=rolftack:1 |
| 7:50 | sak | bud | (tips) |
| 7:50 | väntar | du | En skottkärra! Jag väljer den med hjulet och kör den full med skräp. |
| 7:52 | klar | bud | (tips) |
| 7:52 | sak | du | En skottkärra! Jag väljer den med hjulet och kör den full med skräp. |
| 7:52 | röst | du | En skottkärra! Jag väljer den med hjulet och kör den full med skräp. · MÅL |
| 7:56 | paket |  | ge |
| 7:56 | väntar |  | (läget ändras) |
| 7:57 | skratt | du | falsk tuta |
| 7:57 | klar | du | En skottkärra! Jag väljer den med hjulet och kör den full med skräp. |
| 7:58 | väntar | rolf | Tjo. Ska grilla på lördag. Min grillspade smälte. Kan du göra en sån hä? /Rolf 🍖​ |
| 7:58 | paket |  | ge |
| 7:58 | väntar |  | (läget ändras) |
| 7:58 | sak | rolf | Tjo. Ska grilla på lördag. Min grillspade smälte. Kan du göra en sån hä? /Rolf 🍖​ |
| 7:58 | lapp | Brev från Rolf | Tjo. Ska grilla på lördag. Min grillspade smälte. Kan du göra en sån hä? /Rolf 🍖​ |
| 7:58 | röst | rolf | Tjo. Ska grilla på lördag. Min grillspade smälte. Kan du göra en sån hä? /Rolf 🍖​ · STORY |
| 7:58 | händelse | malKlart | id=rolf2-brev del=Dag 4 – Kärran och mer vind nasta=rolf2-printa |
| 7:58 | bekräftelse | du | plats |
| 7:58 | väntar | du | Rolf vill ha en grillspade. Den printar jag. |
| 7:58 | MÅL |  | Printa grillspade |
| 7:58 | kvitto-visas |  | (läget ändras) |
| 7:58 | sak |  | (läget ändras) |
| 8:00 | hjälp | kontroll | E: Ryggsäcken och kistan |
| 8:00 | målruta |  | Printa grillspade |
| 8:01 | händelse | printStart | sak=grillspade |
| 8:01 | händelse | malKlart | id=rolf2-printa del=Dag 4 – Kärran och mer vind nasta=rolf2-ge |
| 8:01 | bekräftelse | du | plats |
| 8:01 | väntar | du | Grillspaden är klar. Den lägger jag i Rolfs postlåda. |
| 8:02 | MÅL |  | Ge Rolf grillspade |
| 8:04 | målruta |  | Ge Rolf grillspade |
| 8:05 | klar | rolf | Tjo. Ska grilla på lördag. Min grillspade smälte. Kan du göra en sån hä? /Rolf 🍖​ |
| 8:05 | händelse | brevLast | id=rolf:2 |
| 8:05 | struken | du | Rolf vill ha en grillspade. Den printar jag. |
| 8:05 | sak | du | Grillspaden är klar. Den lägger jag i Rolfs postlåda. |
| 8:05 | pil |  | Ge Rolf grillspade |
| 8:05 | notis | tanke | 💭 Grillspaden är klar. Den lägger jag i Rolfs postlåda. |
| 8:05 | röst | du | Grillspaden är klar. Den lägger jag i Rolfs postlåda. · MÅL |
| 8:05 | händelse | printKlar | sak=grillspade n=1 |
| 8:05 | kvittens-bock |  | ✓ Printa grillspade |
| 8:06 | händelse | tagitUrPrint | sak=grillspade n=1 |
| 8:10 | klar | du | Grillspaden är klar. Den lägger jag i Rolfs postlåda. |
| 8:12 | struken | värld:TUUT! Tjena! | TUUT! Tjena! |
| 8:12 | brott | TRÄNGSEL 2 | "Rolf hä!! Funkar dä?? ja skrivr mä EN fingr. dä ta" 2.0 s efter förra meddelandet, 11.0 s efter en klar uppgift |
| 8:12 | sak | rolf | Rolf hä!! Funkar dä?? ja skrivr mä EN fingr. dä tar sin tid men dä ä int så farligt. Tack ska du ha för nummret, fingrarna tackar oxå. Ja lägger saker i lådan ibland å då sms:ar ja. Int efter tie bara. /R​ |
| 8:12 | sms | rolf | Rolf hä!! Funkar dä?? ja skrivr mä EN fingr. dä tar sin tid men dä ä int så farligt. Tack ska du ha för nummret, fingrarna tackar oxå. Ja lägger saker i lådan ibland å då sms:ar ja. Int efter tie bara. /R​ |
| 8:12 | sms-bubbla | rolf | Rolf hä!! Funkar dä?? ja skrivr mä EN fingr. dä tar sin tid men dä ä int så farligt. Tack ska du ha för nummret, fingrarna tackar oxå. Ja lägger saker i lådan ibland å då sms:ar ja. Int efter tie bara. /R​ |
| 8:12 | röst | rolf | Rolf hä!! Funkar dä?? ja skrivr mä EN fingr. dä tar sin tid men dä ä int så farligt. Tack ska du ha för nummret, fingrarna tackar oxå. Ja lägger saker i lådan ibland å då sms:ar ja. Int efter tie bara. /R​ · STORY |
| 8:14 | händelse | lagtIPostlada | sak=grillspade rolf=2 jobb=false |
| 8:14 | händelse | malKlart | id=rolf2-ge del=Dag 4 – Kärran och mer vind nasta=n3-tom-full-karra |
| 8:14 | bekräftelse | du | plats |
| 8:14 | väntar | du | Kärran rymmer massor. Jag fyller den och tippar allt i kvarnen. |
| 8:14 | MÅL |  | Töm en full kärra i kvarnen |
| 8:16 | målruta |  | Töm en full kärra i kvarnen |
| 8:18 | kvittens-bock |  | ✓ Ge Rolf grillspade |
| 8:28 | karraKlick | du | träff |
| 8:29 | karraKlick | du | träff |
| 8:30 | klar | rolf | Rolf hä!! Funkar dä?? ja skrivr mä EN fingr. dä tar sin tid men dä ä int så farligt. Tack ska du ha för nummret, fingrarna tackar oxå. Ja lägger saker i lådan ibland å då sms:ar ja. Int efter tie bara. /R​ |
| 8:30 | sak | du | Kärran rymmer massor. Jag fyller den och tippar allt i kvarnen. |
| 8:30 | pil |  | Töm en full kärra i kvarnen |
| 8:30 | notis | tanke | 💭 Kärran rymmer massor. Jag fyller den och tippar allt i kvarnen. |
| 8:30 | röst | du | Kärran rymmer massor. Jag fyller den och tippar allt i kvarnen. · MÅL |
| 8:30 | karraKlick | du | träff |
| 8:31 | karraKlick | du | träff |
| 8:32 | karraKlick | du | träff |
| 8:34 | karraKlick | du | träff |
| 8:35 | karraKlick | du | träff |
| 8:36 | karraKlick | du | träff |
| 8:36 | tanke | du | En husvagn mitt i tippen. Och grinden är låst. |
| 8:36 | väntar | du | En husvagn mitt i tippen. Och grinden är låst. |
| 8:37 | klar | du | Kärran rymmer massor. Jag fyller den och tippar allt i kvarnen. |
| 8:38 | tanke | du | Det får inte plats. Jag behöver något att tippa i. |
| 8:38 | väntar | du | Det får inte plats. Jag behöver något att tippa i. |
| 8:38 | struken | info:bra | 8 st i tratten · 12 st på marken bredvid |
| 8:38 | sak | du | Det får inte plats. Jag behöver något att tippa i. |
| 8:38 | notis | tanke | 💭 Det får inte plats. Jag behöver något att tippa i. |
| 8:38 | röst | du | Det får inte plats. Jag behöver något att tippa i. · STORY |
| 8:38 | händelse | malKlart | id=n3-tom-full-karra del=Dag 4 – Kärran och mer vind nasta=sophallare |
| 8:38 | bekräftelse | du | plats |
| 8:38 | struken | du | En husvagn mitt i tippen. Och grinden är låst. |
| 8:38 | väntar | du | En sophållare bakom kvarnen. Då matar den sig själv. |
| 8:38 | MÅL |  | Köp sophållaren |
| 8:38 | upplåst | bara | matarband |
| 8:38 | brott | UPPLÅST | matarband (bara 0 av 3, sparat ihop) |
| 8:38 | händelse | upplast | id=matarband flask=bara |
| 8:38 | paket |  | sms |
| 8:38 | väntar | ali | Ali här. 🗑️ Sophållaren. Jag frågade AI:n hur man slipper bära skräp. Den gjorde det här. Den har mer fritid än jag. Suck. |
| 8:41 | målruta |  | Köp sophållaren |
| 8:42 | kvittens-bock |  | ✓ Töm en full kärra i kvarnen |
| 8:43 | klar | du | Det får inte plats. Jag behöver något att tippa i. |
| 8:44 | sak | du | En sophållare bakom kvarnen. Då matar den sig själv. |
| 8:44 | pil |  | Köp sophållaren |
| 8:44 | notis | tanke | 💭 En sophållare bakom kvarnen. Då matar den sig själv. |
| 8:44 | röst | du | En sophållare bakom kvarnen. Då matar den sig själv. · MÅL |
| 8:45 | nick |  | nick:45 |
| 8:47 | klar | du | En sophållare bakom kvarnen. Då matar den sig själv. |
| 8:52 | brott | TRÄNGSEL 2 | "Ali här. 🗑️ Sophållaren. Jag frågade AI:n hur man" 2.1 s efter förra meddelandet, 13.4 s efter en klar uppgift |
| 8:52 | sak | ali | Ali här. 🗑️ Sophållaren. Jag frågade AI:n hur man slipper bära skräp. Den gjorde det här. Den har mer fritid än jag. Suck. |
| 8:52 | sms | ali | Ali här. 🗑️ Sophållaren. Jag frågade AI:n hur man slipper bära skräp. Den gjorde det här. Den har mer fritid än jag. Suck. |
| 8:52 | sms-bubbla | ali | Ali här. 🗑️ Sophållaren. Jag frågade AI:n hur man slipper bära skräp. Den gjorde det här. Den har mer fritid än jag. Suck. |
| 8:52 | röst | ali | Ali här. 🗑️ Sophållaren. Jag frågade AI:n hur man slipper bära skräp. Den gjorde det här. Den har mer fritid än jag. Suck. · STORY |
| 8:57 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 8:59 | struken | info:guld | 3D-modell köpt – printa sophållare |
| 8:59 | händelse | kopt | sak=matarband |
| 8:59 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 9:04 | klar | ali | Ali här. 🗑️ Sophållaren. Jag frågade AI:n hur man slipper bära skräp. Den gjorde det här. Den har mer fritid än jag. Suck. |
| 9:08 | händelse | printStart | sak=byggsats:matarband |
| 9:11 | toast | bra | Del 1 av 3 klar |
| 9:12 | sak |  | (läget ändras) |
| 9:12 | brev | rolf | rolf:2 |
| 9:13 | klar |  | (läget ändras) |
| 9:15 | toast | bra | Del 2 av 3 klar |
| 9:17 | sak | foto | Tak över huvudet (och min tumme) |
| 9:17 | foto | du | Tak över huvudet (och min tumme) |
| 9:17 | toast | fel | Ingen ström – trampa cykeln |
| 9:19 | klar | foto | Tak över huvudet (och min tumme) |
| 9:26 | händelse | printKlar | sak=byggsats:matarband n=1 |
| 9:26 | händelse | tagitUrPrint | sak=byggsats:matarband n=1 |
| 9:26 | paket |  | sms |
| 9:26 | väntar | ali | Ali igen. Jag har sagt till min bror att jag inte går i pension. Jag startar något. Han skrattade. Jag skrattade också. Men jag menar det. Tack. Säg inget. |
| 9:27 | sak | du | I natt somnar jag torr. Det börjar bli ett hem. |
| 9:27 | notis | tanke | 💭 I natt somnar jag torr. Det börjar bli ett hem. |
| 9:27 | röst | du | I natt somnar jag torr. Det börjar bli ett hem. · STORY |
| 9:28 | händelse | placerat | sak=sophallare |
| 9:28 | tanke | du | Sophållaren står bakom kvarnen! Töm allt skräp i den – den matar kvarnen själv. |
| 9:28 | väntar | du | Sophållaren står bakom kvarnen! Töm allt skräp i den – den matar kvarnen själv. |
| 9:28 | händelse | malKlart | id=sophallare del=Dag 4 – Kärran och mer vind nasta=pall |
| 9:28 | bekräftelse | du | plats |
| 9:28 | kvittens | du | Nu kan jag tömma hela kärran på en gång. |
| 9:28 | väntar | du | Nu kan jag tömma hela kärran på en gång. |
| 9:28 | struken | du | Sophållaren står bakom kvarnen! Töm allt skräp i den – den matar kvarnen själv. |
| 9:28 | väntar | du | Jag behöver något att sitta på. En pall. Lagom ambitiöst. |
| 9:28 | MÅL |  | Printa en pall |
| 9:30 | väntar | bror | Pappa har tvättat bilen tre gånger den här veckan. Jag sa att du bor på tippen. Han frågade vilken modell sopbilen var. |
| 9:31 | målruta |  | Printa en pall |
| 9:32 | klar | du | I natt somnar jag torr. Det börjar bli ett hem. |
| 9:32 | sak | du | Nu kan jag tömma hela kärran på en gång. |
| 9:32 | röst | du | Nu kan jag tömma hela kärran på en gång. · STORY |
| 9:36 | klar | du | Nu kan jag tömma hela kärran på en gång. |
| 9:37 | sak | du | Jag behöver något att sitta på. En pall. Lagom ambitiöst. |
| 9:37 | pil |  | Printa en pall |
| 9:37 | notis | tanke | 💭 Jag behöver något att sitta på. En pall. Lagom ambitiöst. |
| 9:37 | röst | du | Jag behöver något att sitta på. En pall. Lagom ambitiöst. · MÅL |
| 9:37 | nick |  | nick:46 |
| 9:43 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 9:43 | klar | du | Jag behöver något att sitta på. En pall. Lagom ambitiöst. |
| 9:44 | händelse | kopt | sak=pall |
| 9:44 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 9:44 | röst | ali | Bra val. Folk köper sånt. Jag vet inte varför. · STORY |
| 9:44 | butiksbubbla | ali | Pall? Bra val. Folk köper sånt. Jag vet inte varför. |
| 9:53 | händelse | printStart | sak=pall |
| 9:58 | händelse | printKlar | sak=pall n=1 |
| 9:58 | händelse | malKlart | id=pall del=Dag 4 – Kärran och mer vind nasta=vind4 |
| 9:58 | bekräftelse | du | plats |
| 9:58 | väntar | du | En vindsnurra till på skjulets tak. Skrivarna vill ha mer ström. |
| 9:58 | MÅL |  | Köp vindsnurran |
| 9:58 | upplåst | strom | vindsnurra2 |
| 9:58 | brott | UPPLÅST | vindsnurra2 (strom 30 av 15) |
| 9:58 | händelse | upplast | id=vindsnurra2 flask=strom |
| 9:58 | paket |  | sms |
| 9:58 | väntar | ali | Ali här. En snurra till? Taket har plats för två. Vinden har inget emot det. |
| 9:58 | sak | du | En vindsnurra till på skjulets tak. Skrivarna vill ha mer ström. |
| 9:58 | målruta |  | Köp vindsnurran |
| 9:58 | pil |  | Köp vindsnurran |
| 9:58 | notis | tanke | 💭 En vindsnurra till på skjulets tak. Skrivarna vill ha mer ström. |
| 9:58 | röst | du | En vindsnurra till på skjulets tak. Skrivarna vill ha mer ström. · MÅL |
| 9:58 | händelse | tagitUrPrint | sak=pall n=1 |
| 9:59 | nick |  | nick:47 |
| 10:00 | paket |  | tanke |
| 10:00 | tanke | du | Jaha, Rolf har hämtat en grillspade. |
| 10:00 | väntar | du | Jaha, Rolf har hämtat en grillspade. |
| 10:02 | hjälp | kontroll | E: Ryggsäcken och kistan |
| 10:02 | kvittens-bock |  | ✓ Printa en pall |
| 10:04 | händelse | placerat | sak=pall |
| 10:05 | klar | du | En vindsnurra till på skjulets tak. Skrivarna vill ha mer ström. |
| 10:05 | sak | du | Jaha, Rolf har hämtat en grillspade. |
| 10:05 | notis | tanke | 💭 Jaha, Rolf har hämtat en grillspade. |
| 10:05 | röst | du | Jaha, Rolf har hämtat en grillspade. · REAKTION |
| 10:10 | klar | du | Jaha, Rolf har hämtat en grillspade. |
| 10:12 | struken | ali | Ali igen. Jag har sagt till min bror att jag inte går i pension. Jag startar något. Han skrattade. Jag skrattade också. Men jag menar det. Tack. Säg inget. |
| 10:12 | struken | bror | Pappa har tvättat bilen tre gånger den här veckan. Jag sa att du bor på tippen. Han frågade vilken modell sopbilen var. |
| 10:15 | struken | rolf | Hörru. Morgonbulle på kontoret mä polarna. grannen har ny keps. Vi pratade om den i en timme. Den ä grön. /R​ |
| 10:15 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 10:17 | struken | info:guld | 3D-modell köpt – printa vindsnurra till skjultaket |
| 10:17 | händelse | kopt | sak=vindsnurra |
| 10:17 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 10:18 | sak | ali | Ali här. En snurra till? Taket har plats för två. Vinden har inget emot det. |
| 10:18 | sms | ali | Ali här. En snurra till? Taket har plats för två. Vinden har inget emot det. |
| 10:18 | sms-bubbla | ali | Ali här. En snurra till? Taket har plats för två. Vinden har inget emot det. |
| 10:18 | röst | ali | Ali här. En snurra till? Taket har plats för två. Vinden har inget emot det. · STORY |
| 10:22 | skratt | du | falsk tuta |
| 10:26 | händelse | printStart | sak=byggsats:vindsnurra |
| 10:26 | klar | ali | Ali här. En snurra till? Taket har plats för två. Vinden har inget emot det. |
| 10:29 | händelse | printKlar | sak=byggsats:vindsnurra n=1 |
| 10:30 | struken | info:guld | 🌬️ Vindsnurran ska upp på skjulets tak. |
| 10:30 | händelse | tagitUrPrint | sak=byggsats:vindsnurra n=1 |
| 10:34 | sak |  | (läget ändras) |
| 10:34 | brev | rolf | rolf:2 |
| 10:34 | klar |  | (läget ändras) |
| 10:35 | händelse | placerat | sak=vindsnurra |
| 10:35 | struken | info:guld | 🌬️ Vindsnurran sitter på taket – den trampar cykeln åt mig när det blåser |
| 10:35 | monterat | du | byggsats:vindsnurra |
| 10:35 | händelse | monterat | sak=vindsnurra |
| 10:35 | händelse | malKlart | id=vind4 del=Dag 4 – Kärran och mer vind nasta=n3-isolera-tva-vaggar |
| 10:35 | bekräftelse | du | plats |
| 10:35 | lapp | 📔 Dagbok | Slut på trampandet. Nästan. |
| 10:35 | dagbokrad | du | Slut på trampandet. Nästan. |
| 10:35 | väntar | notis:Slut på trampandet. Nästan. | Slut på trampandet. Nästan. |
| 10:35 | väntar | du | Det drar genom väggarna. Isolering, och sen blir det varmt. |
| 10:35 | MÅL |  | Isolera två väggar · 0/2 |
| 10:35 | sak | notis:Slut på trampandet. Nästan. | Slut på trampandet. Nästan. |
| 10:35 | notis | dagbok | Slut på trampandet. Nästan. |
| 10:37 | klar | notis:Slut på trampandet. Nästan. | Slut på trampandet. Nästan. |
| 10:37 | målruta |  | Isolera två väggar · 0/2 |
| 10:39 | sak | du | Det drar genom väggarna. Isolering, och sen blir det varmt. |
| 10:39 | pil |  | Isolera två väggar · 0/2 |
| 10:39 | notis | tanke | 💭 Det drar genom väggarna. Isolering, och sen blir det varmt. |
| 10:39 | röst | du | Det drar genom väggarna. Isolering, och sen blir det varmt. · MÅL |
| 10:40 | nick |  | nick:48 |
| 10:44 | klar | du | Det drar genom väggarna. Isolering, och sen blir det varmt. |
| 10:45 | händelse | pappa | Pappa ringer |
| 10:49 | röst | pappa | Hej. Det är pappa. · STORY |
| 10:53 | röst | du | Hej pappa. · STORY |
| 10:56 | röst | pappa | Mamma står bredvid. Hon säger att jag ska fråga om du äter. · STORY |
| 11:00 | röst | du | Jag äter. Och jag har en egen kvarn nu. Och en 3D-skrivare. · STORY |
| 11:05 | röst | pappa | Jaha. En kvarn. Vad lugnt då. · STORY |
| 11:07 | röst | pappa | Jag kanske kommer förbi nån dag. Om det passar. · STORY |
| 11:11 | röst | du | Det passar. · STORY |
| 11:13 | röst | pappa | Bra. Hej då då. · STORY |
| 11:23 | händelse | samtalSlut | id=pappa4 |
| 11:28 | händelse | printStart | sak=pall |
| 11:34 | händelse | printKlar | sak=pall n=2 |
| 11:34 | händelse | tagitUrPrint | sak=pall n=1 |
| 11:38 | hjälp | kontroll | E: Ryggsäcken och kistan |
| 11:40 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 11:40 | paket |  | replik |
| 11:40 | väntar | rolf | Hoppa in. Ja ska visa dej en grej. |
| 11:41 | händelse | salt | sak=pall n=1 |
| 11:41 | aliSalt | ali | 180 |
| 11:41 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 11:42 | sak | rolf | Hoppa in. Ja ska visa dej en grej. |
| 11:42 | notis |  | Rolf: ”Hoppa in. Ja ska visa dej en grej.” |
| 11:42 | röst | rolf | Hoppa in. Ja ska visa dej en grej. · STORY |
| 11:43 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 11:44 | struken | info:guld | 3D-modell köpt – printa isolerskiva (vägg) |
| 11:44 | händelse | kopt | sak=vaggar |
| 11:44 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 11:46 | morgonkort | ⏸️ Pausad | ⏸️ Pausad · Klicka för att fortsätta. |
| 11:47 | klar | rolf | Hoppa in. Ja ska visa dej en grej. |
| 11:49 | skratt | du | falsk tuta |
| 11:49 | väntar | värld:TUUT! Tjena! | TUUT! Tjena! |
| 11:54 | händelse | printStart | sak=byggsats:vaggar |
| 11:58 | händelse | printKlar | sak=byggsats:vaggar n=1 |
| 11:58 | händelse | tagitUrPrint | sak=byggsats:vaggar n=1 |
| 12:02 | tanke | du | Bakväggen klar. 3 kvar. |
| 12:02 | väntar | du | Bakväggen klar. 3 kvar. |
| 12:02 | sak | du | Bakväggen klar. 3 kvar. |
| 12:02 | notis | tanke | 💭 Bakväggen klar. 3 kvar. |
| 12:02 | röst | du | Bakväggen klar. 3 kvar. · REAKTION |
| 12:05 | klar | du | Bakväggen klar. 3 kvar. |
| 12:10 | struken | värld:TUUT! Tjena! | TUUT! Tjena! |
| 12:15 | scenInfo | rolf | Rolf kör upp till sin bänk |
| 12:19 | röst | rolf | Kall öl ä viktigt. · STORY |
| 12:19 | bubbla | rolf | Kall öl ä viktigt. |
| 12:21 | skratt | du | däcket rullar iväg |
| 12:21 | paket |  | tanke |
| 12:21 | tanke | du | Däcket ville inte stanna. Jag förstår det. |
| 12:21 | väntar | du | Däcket ville inte stanna. Jag förstår det. |
| 12:27 | röst | rolf | Ja kommer hit varje kväll. Förr va vi två på bänken. · STORY |
| 12:27 | bubbla | rolf | Ja kommer hit varje kväll. Förr va vi två på bänken. |
| 12:45 | röst | rolf | Dä där ä Bengt-Åke. Vinka int. · STORY |
| 12:45 | bubbla | rolf | Dä där ä Bengt-Åke. Vinka int. |
| 12:59 | röst | rolf | Den ä skyldig mej pengar. · STORY |
| 12:59 | bubbla | rolf | Den ä skyldig mej pengar. |
| 13:09 | väntar | foto | Rolfs bänk |
| 13:09 | paket |  | tanke |
| 13:09 | tanke | du | Han kommer hit varje kväll. Nu vet jag var. |
| 13:09 | väntar | du | Han kommer hit varje kväll. Nu vet jag var. |
| 13:09 | skratt | du | Rolfs bänk |
| 13:16 | lapp | Dagbok | Tre dagar. Om tolv dagar är det jul. |
| 13:16 | röst | du | Tre dagar. Om tolv dagar är det jul. · REAKTION |
| 13:27 | sak | du | Däcket ville inte stanna. Jag förstår det. |
| 13:27 | notis | tanke | 💭 Däcket ville inte stanna. Jag förstår det. |
| 13:27 | röst | du | Däcket ville inte stanna. Jag förstår det. · REAKTION |
| 13:30 | klar | du | Däcket ville inte stanna. Jag förstår det. |
| 13:33 | händelse | printStart | sak=byggsats:vaggar |
| 13:37 | händelse | printKlar | sak=byggsats:vaggar n=1 |
| 13:37 | händelse | tagitUrPrint | sak=byggsats:vaggar n=1 |
| 13:40 | sak | foto | Rolfs bänk |
| 13:40 | foto | du | Rolfs bänk |
| 13:42 | tanke | du | Vänster vägg klar. 2 kvar. |
| 13:42 | väntar | du | Vänster vägg klar. 2 kvar. |
| 13:42 | händelse | malKlart | id=n3-isolera-tva-vaggar del=Dag 4 – Kärran och mer vind nasta=sov4 |
| 13:42 | paket |  | lapp |
| 13:42 | väntar | du | Nu vet Rolf att jag bor HÄR. Benen orkar inte trampa mer. |
| 13:42 | bekräftelse | du | plats |
| 13:42 | struken | du | Vänster vägg klar. 2 kvar. |
| 13:42 | MÅL |  | Sov när du vill |
| 13:42 | klar | foto | Rolfs bänk |
| 13:42 | sak | du | (nytt mål i rutan) |
| 13:42 | målruta |  | Sov när du vill |
| 13:42 | pil |  | Sov när du vill |
| 13:42 | klar | du | (nytt mål i rutan) |
| 13:43 | sak | du | Nu vet Rolf att jag bor HÄR. Benen orkar inte trampa mer. |
| 13:43 | kvallsrad | du | Nu vet Rolf att jag bor HÄR. Benen orkar inte trampa mer. |
| 13:44 | klar | du | Nu vet Rolf att jag bor HÄR. Benen orkar inte trampa mer. |
| 13:46 | kvittens-bock |  | ✓ Isolera två väggar · 2/2 |
| 13:46 | autosparning | du | natt 12 december |
| 13:48 | nattkort | du | 🌙 12 dagar kvar. God natt. zzz… Nu vet Rolf att jag bor HÄR. Benen orkar inte trampa mer. DAGENS PRINTAR Blomkruka × 4 Pall × 2 Flasköppnare med magnet × 1 Gri |

<details><summary>Botens handlingar dag 3</summary>

- 0:00 — dag 3 börjar — (20 kr)
- 0:08 popup: "FORTSÄTT" (20 kr)
- 0:24 gå till Rolfs postlåda (28 m) (20 kr)
- 0:30 panel: "Rolfs postlåda
Det här låg i l" (80 kr)
- 0:31 gå till sätt nyckeln i låset (3 m) (80 kr)
- 0:37 vet inte vad jag ska göra: "Möt sopbilen vid grinden" (80 kr)
- 0:50 gå till Rolfs postlåda (1 m) (80 kr)
- 0:58 plockar 10 skräp på tippen (bär max 10) (80 kr)
- 1:00 gå till kvarnen (8 m) (80 kr)
- 1:09 gå till skrivaren (3 m) (80 kr)
- 1:11 printar Flasköppnare med magnet (80 kr)
- 1:15 tar ut 1 st ur skrivaren (80 kr)
- 1:20 valj flaskoppnare: true, vald flaskoppnare, post {"l":null,"tr":null,"tm":[]}, nummer false (80 kr)
- 1:22 gå till Rolfs postlåda (6 m) (80 kr)
- 1:41 gå till Ali (32 m) (80 kr)
- 1:41 öppnar Alis butik – bilbatteriet (80 kr)
- 1:43 köper cykelbatteri för 10 kr (70 kr)
- 2:01 gå till koppla in bilbatteriet vid cykeln (24 m) (70 kr)
- 2:16 gå till Ali (24 m) (70 kr)
- 2:16 öppnar Alis butik – köpa ryggkorg (70 kr)
- 2:18 köper ryggkorg för 40 kr (30 kr)
- 2:24 gå till skrivaren (25 m) (30 kr)
- 2:26 printar Ryggkorg (2 delar) (30 kr)
- 2:38 tar ut 1 st ur skrivaren (30 kr)
- 2:42 tar på ryggkorg (30 kr)
- 2:43 tjänar pengar till arbetsbord: 30/40 kr → printar blomkruka (105 kr) (30 kr)
- 2:44 printar Blomkruka (30 kr)
- 2:51 tar ut 1 st ur skrivaren (30 kr)
- 2:56 gå till Ali (25 m) (30 kr)
- 2:56 öppnar Alis butik – sälja (30 kr)
- 2:58 säljer hos Ali: +3 kr (33 kr)
- 2:58 tjänar pengar till arbetsbord: 33/40 kr → printar blomkruka (105 kr) (33 kr)
- 3:04 gå till skrivaren (25 m) (33 kr)
- 3:05 printar Blomkruka (33 kr)
- 3:12 tar ut 1 st ur skrivaren (33 kr)
- 3:17 gå till Ali (25 m) (33 kr)
- 3:17 öppnar Alis butik – sälja (33 kr)
- 3:19 säljer hos Ali: +105 kr (138 kr)
- 3:19 öppnar Alis butik – köpa arbetsbord (138 kr)
- 3:22 köper bord för 40 kr (98 kr)
- 3:28 gå till skrivaren (25 m) (98 kr)
- 3:29 printar Arbetsbord (3 delar) (98 kr)
- 3:45 plockar 3 skräp på gården (bär max 16) (98 kr)
- 3:53 gå till kvarnen (37 m) (98 kr)
- 3:58 plockar 2 skräp på tippen (bär max 16) (98 kr)
- 4:00 gå till kvarnen (8 m) (98 kr)
- 4:02 gå till skrivaren (3 m) (98 kr)
- 4:03 tar ut 1 st ur skrivaren (98 kr)
- 4:04 gå till platsen för arbetsbord (5 m) (98 kr)
- 4:05 ställer ut arbetsbord (98 kr)
- 4:14 tjänar pengar till Skrivare M: 98/180 kr → printar blomkruka (105 kr) (98 kr)
- 4:14 gå till skrivaren (2 m) (98 kr)
- 4:16 printar Blomkruka (98 kr)
- 4:22 tar ut 1 st ur skrivaren (98 kr)
- 4:27 gå till Ali (26 m) (98 kr)
- 4:27 öppnar Alis butik – sälja (98 kr)
- 4:29 säljer hos Ali: +105 kr (203 kr)
- 4:42 öppnar Alis butik – köpa skrivare m (203 kr)
- 4:45 köper skrivare2 för 180 kr (23 kr)
- 4:51 gå till skrivaren (25 m) (23 kr)
- 4:52 printar Skrivare M (5 delar) (23 kr)
- 5:33 gå till kvarnen (35 m) (23 kr)
- 5:39 plockar 3 skräp på tippen (bär max 16) (23 kr)
- 5:42 gå till kvarnen (11 m) (23 kr)
- 5:44 gå till skrivaren (3 m) (23 kr)
- 5:45 tar ut 1 st ur skrivaren (23 kr)
- 5:46 gå till platsen för skrivare m (5 m) (23 kr)
- 5:47 ställer ut skrivare m (23 kr)
- 6:01 tjänar pengar till plåttak: 23/90 kr → printar blomkruka (105 kr) (23 kr)
- 6:02 printar Blomkruka (23 kr)
- 6:06 tar ut 1 st ur skrivaren (23 kr)
- 6:11 gå till Ali (24 m) (23 kr)
- 6:11 öppnar Alis butik – sälja (23 kr)
- 6:13 säljer hos Ali: +105 kr (128 kr)
- 6:14 öppnar Alis butik – köpa plåttak (128 kr)
- 6:17 köper tak för 90 kr (38 kr)
- 6:23 gå till skrivaren (24 m) (38 kr)
- 6:24 printar Plåttak (3 delar) (38 kr)
- 6:46 tar ut 1 st ur skrivaren (38 kr)
- 6:49 gå till skjulet (17 m) (38 kr)
- 6:56 vet inte vad jag ska göra: "Möt sopbilen vid grinden" (38 kr)
- 7:01 vet inte vad jag ska göra: "Möt sopbilen vid grinden" (38 kr)
- 7:07 vet inte vad jag ska göra: "Möt sopbilen vid grinden" (38 kr)
- 7:19 vet inte vad jag ska göra: "Möt sopbilen vid grinden" (38 kr)
- 7:31 gå till Rolfs postlåda (27 m) (38 kr)
- 7:38 panel: "Rolfs postlåda
Det här låg i l" (158 kr)
- 7:39 vet inte vad jag ska göra: "Möt sopbilen vid grinden" (158 kr)
- 8:00 gå till skrivaren (8 m) (158 kr)
- 8:01 printar Grillspade (158 kr)
- 8:06 tar ut 1 st ur skrivaren (158 kr)
- 8:12 valj grillspade: true, vald grillspade, post {"l":null,"tr":null,"tm":[]}, nummer true (158 kr)
- 8:14 gå till Rolfs postlåda (8 m) (158 kr)
- 8:36 fyller kärran med 8 skräp (158 kr)
- 8:38 gå till kvarnen (9 m) (158 kr)
- 8:57 gå till Ali (31 m) (158 kr)
- 8:57 öppnar Alis butik – köpa sophållare (158 kr)
- 9:00 köper matarband för 40 kr (118 kr)
- 9:06 gå till skrivaren (24 m) (118 kr)
- 9:08 printar Sophållare (3 delar) (118 kr)
- 9:27 tar ut 1 st ur skrivaren (118 kr)
- 9:28 gå till kvarnen (5 m) (118 kr)
- 9:43 gå till Ali (29 m) (118 kr)
- 9:43 öppnar Alis butik – köpa receptet pall (118 kr)
- 9:45 köper pall för 30 kr (88 kr)
- 9:51 gå till skrivaren (24 m) (88 kr)
- 9:53 printar Pall (88 kr)
- 9:59 tar ut 1 st ur skrivaren (88 kr)
- 10:03 gå till platsen för pall (20 m) (88 kr)
- 10:04 ställer ut pall (88 kr)
- 10:15 gå till Ali (16 m) (88 kr)
- 10:15 öppnar Alis butik – köpa vindsnurra till skjultaket (88 kr)
- 10:18 köper vindsnurra för 50 kr (38 kr)
- 10:24 gå till skrivaren (24 m) (38 kr)
- 10:26 printar Vindsnurra till skjultaket (38 kr)
- 10:31 tar ut 1 st ur skrivaren (38 kr)
- 10:35 gå till sätt vindsnurran på taket (18 m) (38 kr)
- 10:49 popup: "Svara E" (38 kr)
- 10:57 popup: "Nästa E" (38 kr)
- 11:07 popup: "Nästa E" (38 kr)
- 11:17 popup: "Nästa E" (38 kr)
- 11:23 popup: "Lägg på E" (38 kr)
- 11:23 tjänar pengar till isolerskiva (vägg): 38/50 kr → printar pall (180 kr) (38 kr)
- 11:27 gå till skrivaren (18 m) (38 kr)
- 11:28 printar Pall (38 kr)
- 11:35 tar ut 1 st ur skrivaren (38 kr)
- 11:40 gå till Ali (25 m) (38 kr)
- 11:40 öppnar Alis butik – sälja (38 kr)
- 11:42 säljer hos Ali: +180 kr (218 kr)
- 11:43 öppnar Alis butik – köpa isolerskiva (vägg) (218 kr)
- 11:45 köper vaggar för 50 kr (168 kr)
- 11:46 startmenyn syns – fortsätter spelet (168 kr)
- 11:52 gå till skrivaren (24 m) (168 kr)
- 11:54 printar Isolerskiva (vägg) (168 kr)
- 11:59 tar ut 1 st ur skrivaren (168 kr)
- 12:02 gå till skjulet (bak) (17 m) (168 kr)
- 12:15 gå till sopbilen (Rolfs bänk) (38 m) (168 kr)
- 13:15 tillbaka från Rolfs bänk (168 kr)
- 13:21 panel: "Dagbok
Före och efter
10 decem" (168 kr)
- 13:22 plockar 1 skräp på tippen (bär max 16) (168 kr)
- 13:25 gå till kvarnen (13 m) (168 kr)
- 13:31 gå till skrivaren (5 m) (168 kr)
- 13:33 printar Isolerskiva (vägg) (168 kr)
- 13:38 tar ut 1 st ur skrivaren (168 kr)
- 13:42 gå till skjulet (vanster) (19 m) (168 kr)
- 13:46 gå till sängen (1 m) (168 kr)

</details>

## Dag 4

| Tid | Källa | Vem | Text |
|---|---|---|---|
| 13:48 | vara | ali | pall |
| 13:48 | händelse | malKlart | id=sov4 del=Dag 4 – Kärran och mer vind nasta=rolf3-brev |
| 13:48 | bekräftelse | du | plats |
| 13:48 | MÅL |  | Möt sopbilen vid grinden |
| 13:50 | autosparning | du | morgon 13 december |
| 0:00 | skratt | du | falsk tuta |
| 0:01 | händelse | dagenBorjar | dag=4 |
| 0:01 | meddelande | du | 11 dagar till jul. Gör jag inte det han ber om slutar han lämna saker. |
| 0:01 | dagbokkort | du | Ett brev till från Rolf. · 11 dagar till jul. Gör jag inte det han ber om slutar han lämna saker. |
| 0:01 | röst | du | 11 dagar till jul. Ett brev till från Rolf. Gör jag inte det han ber om slutar han lämna saker. · STORY |
| 0:09 | väntar | notis:morgon | Ali vill ha idag: Pall · +50 % |
| 0:09 | händelse | morgonkortStangt | dag=4 |
| 0:12 | målruta |  | Möt sopbilen vid grinden |
| 0:14 | sak | du | (nytt mål i rutan) |
| 0:14 | pil |  | Möt sopbilen vid grinden |
| 0:15 | klar | du | (nytt mål i rutan) |
| 0:15 | väntar | mamma | Det finns måsar vid soptippar! Dom tar mat. Och små hundar. Du är inte en liten hund men ändå. |
| 0:15 | paket |  | sms |
| 0:15 | väntar | rolf | Hörru. Röda backar ä bra plast. Om man har rätt kvarn. /R​ |
| 0:17 | sak | du | Han kommer hit varje kväll. Nu vet jag var. |
| 0:17 | notis | tanke | 💭 Han kommer hit varje kväll. Nu vet jag var. |
| 0:17 | röst | du | Han kommer hit varje kväll. Nu vet jag var. · STORY |
| 0:17 | paket |  | ge |
| 0:17 | väntar |  | (läget ändras) |
| 0:19 | klar | du | Han kommer hit varje kväll. Nu vet jag var. |
| 0:23 | sak | notis:morgon | Ali vill ha idag: Pall · +50 % |
| 0:23 | notis |  | Pall · +50 % |
| 0:26 | väntar | rolf | Jo jo. Grillspaden ä ju KONST. Pengar i lådan. /Rolf​ |
| 0:26 | klar | notis:morgon | Ali vill ha idag: Pall · +50 % |
| 0:30 | skratt | du | falsk tuta |
| 0:30 | väntar | värld:TUUT! Tjena! | TUUT! Tjena! |
| 0:32 | sak | rolf | Jo jo. Grillspaden ä ju KONST. Pengar i lådan. /Rolf​ |
| 0:32 | lapp | Brev från Rolf | Jo jo. Grillspaden ä ju KONST. Pengar i lådan. /Rolf​ |
| 0:32 | röst | rolf | Jo jo. Grillspaden ä ju KONST. Pengar i lådan. /Rolf​ · STORY |
| 0:37 | klar | rolf | Jo jo. Grillspaden ä ju KONST. Pengar i lådan. /Rolf​ |
| 0:37 | händelse | brevLast | id=rolftack:2 |
| 0:45 | sak | mamma | Det finns måsar vid soptippar! Dom tar mat. Och små hundar. Du är inte en liten hund men ändå. |
| 0:45 | sms | mamma | Det finns måsar vid soptippar! Dom tar mat. Och små hundar. Du är inte en liten hund men ändå. |
| 0:45 | sms-bubbla | mamma | Det finns måsar vid soptippar! Dom tar mat. Och små hundar. Du är inte en liten hund men ändå. |
| 0:45 | röst | mamma | Det finns måsar vid soptippar! Dom tar mat. Och små hundar. Du är inte en liten hund men ändå. · STORY |
| 0:51 | paket |  | ge |
| 0:51 | väntar |  | (läget ändras) |
| 0:52 | skratt | du | falsk tuta |
| 0:53 | klar | mamma | Det finns måsar vid soptippar! Dom tar mat. Och små hundar. Du är inte en liten hund men ändå. |
| 0:55 | sak | rolf | Hörru. Röda backar ä bra plast. Om man har rätt kvarn. /R​ |
| 0:55 | sms | rolf | Hörru. Röda backar ä bra plast. Om man har rätt kvarn. /R​ |
| 0:55 | sms-bubbla | rolf | Hörru. Röda backar ä bra plast. Om man har rätt kvarn. /R​ |
| 0:55 | röst | rolf | Hörru. Röda backar ä bra plast. Om man har rätt kvarn. /R​ · REAKTION |
| 0:58 | väntar | rolf | Tjo. Flaket ä så trist. En tomte mä luva o skägg, kan du göra en sån? /Rolf 🎅​ |
| 0:58 | paket |  | ge |
| 0:58 | väntar |  | (läget ändras) |
| 0:58 | händelse | malKlart | id=rolf3-brev del=Dag 5 – Tätt och mysigt nasta=rolf3-printa |
| 0:58 | bekräftelse | du | plats |
| 0:58 | väntar | du | Rolf vill ha en tomte till flaket. Den printar jag. |
| 0:58 | MÅL |  | Printa trädgårdstomte till flaket |
| 0:58 | tanke | du | Rolf tippade DUBBEL last på soptippen! |
| 0:58 | väntar | du | Rolf tippade DUBBEL last på soptippen! |
| 0:58 | kvitto-visas | rolf | Tjo. Flaket ä så trist. En tomte mä luva o skägg, kan du göra en sån? /Rolf 🎅​ |
| 0:58 | sak | rolf | Tjo. Flaket ä så trist. En tomte mä luva o skägg, kan du göra en sån? /Rolf 🎅​ |
| 0:58 | lapp | Brev från Rolf | Tjo. Flaket ä så trist. En tomte mä luva o skägg, kan du göra en sån? /Rolf 🎅​ |
| 0:58 | kvitto-visas |  | (läget ändras) |
| 0:58 | sak |  | (läget ändras) |
| 0:58 | kvitto-visas | du | Rolf tippade DUBBEL last på soptippen! |
| 0:58 | sak | du | Rolf tippade DUBBEL last på soptippen! |
| 0:58 | notis | tanke | 💭 Rolf tippade DUBBEL last på soptippen! |
| 1:00 | klar | rolf | Hörru. Röda backar ä bra plast. Om man har rätt kvarn. /R​ |
| 1:00 | struken | värld:TUUT! Tjena! | TUUT! Tjena! |
| 1:00 | målruta |  | Printa trädgårdstomte till flaket |
| 1:01 | händelse | printStart | sak=tomte |
| 1:01 | händelse | malKlart | id=rolf3-printa del=Dag 5 – Tätt och mysigt nasta=rolf3-ge |
| 1:01 | bekräftelse | du | plats |
| 1:01 | väntar | du | Tomten är klar. Den lägger jag i Rolfs postlåda. |
| 1:01 | målruta |  | Ge Rolf trädgårdstomte till flaket |
| 1:02 | MÅL |  | Ge Rolf trädgårdstomte till flaket |
| 1:02 | struken | du | Rolf vill ha en tomte till flaket. Den printar jag. |
| 1:05 | sak | du | Tomten är klar. Den lägger jag i Rolfs postlåda. |
| 1:05 | pil |  | Ge Rolf trädgårdstomte till flaket |
| 1:05 | notis | tanke | 💭 Tomten är klar. Den lägger jag i Rolfs postlåda. |
| 1:05 | röst | du | Tomten är klar. Den lägger jag i Rolfs postlåda. · MÅL |
| 1:05 | kvittens-bock |  | ✓ Printa trädgårdstomte till flaket |
| 1:07 | händelse | printKlar | sak=tomte n=1 |
| 1:07 | händelse | tagitUrPrint | sak=tomte n=1 |
| 1:09 | klar | du | Tomten är klar. Den lägger jag i Rolfs postlåda. |
| 1:13 | händelse | lagtIPostlada | sak=tomte rolf=3 jobb=false |
| 1:13 | händelse | malKlart | id=rolf3-ge del=Dag 5 – Tätt och mysigt nasta=n4-isolera-de-sista |
| 1:13 | bekräftelse | du | plats |
| 1:13 | väntar | du | Två väggar kvar i skjulet. Sen är det tätt. |
| 1:13 | målruta |  | Isolera de sista väggarna · 2/4 |
| 1:13 | MÅL |  | Isolera de sista väggarna · 2/4 |
| 1:13 | sak | du | Två väggar kvar i skjulet. Sen är det tätt. |
| 1:13 | pil |  | Isolera de sista väggarna · 2/4 |
| 1:13 | notis | tanke | 💭 Två väggar kvar i skjulet. Sen är det tätt. |
| 1:13 | röst | du | Två väggar kvar i skjulet. Sen är det tätt. · MÅL |
| 1:13 | nick |  | nick:53 |
| 1:16 | upplåst | skrivare | trim_skrivare3 |
| 1:16 | brott | UPPLÅST | trim_skrivare3 (skrivare 320 av 60) |
| 1:16 | händelse | upplast | id=trim_skrivare3 flask=skrivare |
| 1:16 | paket |  | tanke → sms |
| 1:16 | tanke | du | Fortare. Den kan gå ännu fortare. Jag hör det på den. |
| 1:16 | väntar | du | Fortare. Den kan gå ännu fortare. Jag hör det på den. |
| 1:16 | väntar | ali | Ali här. Sista skrivartrimmen. Efter den går den inte att göra bättre. Då får du bygga en större. |
| 1:17 | kvittens-bock |  | ✓ Ge Rolf trädgårdstomte till flaket |
| 1:20 | klar | du | Två väggar kvar i skjulet. Sen är det tätt. |
| 1:20 | sak | du | Fortare. Den kan gå ännu fortare. Jag hör det på den. |
| 1:20 | notis | tanke | 💭 Fortare. Den kan gå ännu fortare. Jag hör det på den. |
| 1:20 | röst | du | Fortare. Den kan gå ännu fortare. Jag hör det på den. · STORY |
| 1:23 | klar | du | Fortare. Den kan gå ännu fortare. Jag hör det på den. |
| 1:29 | händelse | printStart | sak=byggsats:vaggar |
| 1:33 | händelse | printKlar | sak=byggsats:vaggar n=1 |
| 1:33 | händelse | tagitUrPrint | sak=byggsats:vaggar n=1 |
| 1:33 | sak |  | (läget ändras) |
| 1:33 | brev | rolf | rolf:3 |
| 1:33 | klar |  | (läget ändras) |
| 1:37 | sak |  | (läget ändras) |
| 1:37 | brev | rolf | rolf:3 |
| 1:37 | klar |  | (läget ändras) |
| 1:38 | tanke | du | Höger vägg klar. 1 kvar. |
| 1:38 | väntar | du | Höger vägg klar. 1 kvar. |
| 1:38 | sak | du | Höger vägg klar. 1 kvar. |
| 1:38 | notis | tanke | 💭 Höger vägg klar. 1 kvar. |
| 1:38 | röst | du | Höger vägg klar. 1 kvar. · REAKTION |
| 1:40 | klar | du | Höger vägg klar. 1 kvar. |
| 1:48 | händelse | printStart | sak=byggsats:vaggar |
| 1:50 | sak | ali | Ali här. Sista skrivartrimmen. Efter den går den inte att göra bättre. Då får du bygga en större. |
| 1:50 | sms | ali | Ali här. Sista skrivartrimmen. Efter den går den inte att göra bättre. Då får du bygga en större. |
| 1:50 | sms-bubbla | ali | Ali här. Sista skrivartrimmen. Efter den går den inte att göra bättre. Då får du bygga en större. |
| 1:50 | röst | ali | Ali här. Sista skrivartrimmen. Efter den går den inte att göra bättre. Då får du bygga en större. · STORY |
| 1:52 | händelse | printKlar | sak=byggsats:vaggar n=1 |
| 1:52 | händelse | tagitUrPrint | sak=byggsats:vaggar n=1 |
| 1:55 | väntar | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått TAK. Och börjat isolera. Skriv in, Gunnar. Du skriver aldrig in. |
| 1:55 | radio | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått TAK. Och börjat isolera. Skriv in, Gunnar. Du skriver aldrig in. |
| 1:55 | skratt | du | Radio-Kjelle |
| 1:56 | tanke | du | Skjulet är tätt! |
| 1:56 | väntar | du | Skjulet är tätt! |
| 1:56 | händelse | malKlart | id=n4-isolera-de-sista del=Dag 5 – Tätt och mysigt nasta=dator |
| 1:56 | bekräftelse | du | plats |
| 1:56 | kvittens | du | Det är tätt, det är varmt. |
| 1:56 | väntar | du | Det är tätt, det är varmt. |
| 1:56 | struken | du | Skjulet är tätt! |
| 1:56 | väntar | du | Alis pappas dator. Med den kan jag sälja på nätet. |
| 1:56 | MÅL |  | Köp Alis pappas gamla dator |
| 1:59 | målruta |  | Köp Alis pappas gamla dator |
| 1:59 | klar | ali | Ali här. Sista skrivartrimmen. Efter den går den inte att göra bättre. Då får du bygga en större. |
| 1:59 | sak | du | Det är tätt, det är varmt. |
| 1:59 | röst | du | Det är tätt, det är varmt. · STORY |
| 2:04 | klar | du | Det är tätt, det är varmt. |
| 2:04 | sak | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått TAK. Och börjat isolera. Skriv in, Gunnar. Du skriver aldrig in. |
| 2:04 | notis |  | 📻 Radio Tippen: Radio Tippen, Kjelle här. Skjulet vid tippen har fått TAK. Och börjat isolera. Skriv in, Gunnar. Du skriver aldrig in. |
| 2:04 | röst | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått TAK. Och börjat isolera. Skriv in, Gunnar. Du skriver aldrig in. · REAKTION |
| 2:14 | klar | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått TAK. Och börjat isolera. Skriv in, Gunnar. Du skriver aldrig in. |
| 2:14 | sak | du | Alis pappas dator. Med den kan jag sälja på nätet. |
| 2:14 | pil |  | Köp Alis pappas gamla dator |
| 2:14 | notis | tanke | 💭 Alis pappas dator. Med den kan jag sälja på nätet. |
| 2:14 | röst | du | Alis pappas dator. Med den kan jag sälja på nätet. · MÅL |
| 2:14 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 2:14 | butiksbubbla | ali | Jag ser 3D-skrivarvideor på YouTube i lagret. Inte för att jag har tid. Jag har aldrig tid. |
| 2:16 | toast | guld | 🖥️ Datorn är min – den ska stå i skjulet |
| 2:16 | händelse | kopt | sak=webbdator |
| 2:16 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 2:16 | butiksbubbla | ali | Pappas gamla dator. Den har ett modem. Det låter som en fax som gråter. Men du kommer ut på nätet. |
| 2:17 | väntar | ali | Jag ser 3D-skrivarvideor på YouTube i lagret. Inte för att jag har tid. Jag har aldrig tid. |
| 2:17 | väntar | ali | Pappas gamla dator. Den har ett modem. Det låter som en fax som gråter. Men du kommer ut på nätet. |
| 2:20 | klar | du | Alis pappas dator. Med den kan jag sälja på nätet. |
| 2:20 | sak | ali | Jag ser 3D-skrivarvideor på YouTube i lagret. Inte för att jag har tid. Jag har aldrig tid. |
| 2:20 | röst | ali | Jag ser 3D-skrivarvideor på YouTube i lagret. Inte för att jag har tid. Jag har aldrig tid. · STORY |
| 2:24 | händelse | printStart | sak=byggsats:webbdator |
| 2:24 | händelse | printKlar | sak=byggsats:webbdator n=1 |
| 2:25 | händelse | tagitUrPrint | sak=byggsats:webbdator n=1 |
| 2:30 | klar | ali | Jag ser 3D-skrivarvideor på YouTube i lagret. Inte för att jag har tid. Jag har aldrig tid. |
| 2:30 | sak | ali | Pappas gamla dator. Den har ett modem. Det låter som en fax som gråter. Men du kommer ut på nätet. |
| 2:30 | röst | ali | Pappas gamla dator. Den har ett modem. Det låter som en fax som gråter. Men du kommer ut på nätet. · STORY |
| 2:32 | händelse | placerat | sak=webbdator |
| 2:32 | paket |  | tanke |
| 2:32 | tanke | du | En webbshop. Från ett skjul. Med modem. Varför inte. |
| 2:32 | väntar | du | En webbshop. Från ett skjul. Med modem. Varför inte. |
| 2:32 | händelse | malKlart | id=dator del=Dag 5 – Tätt och mysigt nasta=lampskarm |
| 2:32 | bekräftelse | du | plats |
| 2:32 | väntar | du | En lampskärm. Folk betalar för ljus som ser fint ut. |
| 2:32 | MÅL |  | Printa en lampskärm att sälja |
| 2:34 | målruta |  | Printa en lampskärm att sälja |
| 2:34 | pil |  | Printa en lampskärm att sälja |
| 2:36 | kvittens-bock |  | ✓ Ställ datorn i skjulet |
| 2:39 | klar | ali | Pappas gamla dator. Den har ett modem. Det låter som en fax som gråter. Men du kommer ut på nätet. |
| 2:39 | sak | du | En lampskärm. Folk betalar för ljus som ser fint ut. |
| 2:39 | notis | tanke | 💭 En lampskärm. Folk betalar för ljus som ser fint ut. |
| 2:39 | röst | du | En lampskärm. Folk betalar för ljus som ser fint ut. · MÅL |
| 2:46 | klar | du | En lampskärm. Folk betalar för ljus som ser fint ut. |
| 2:50 | händelse | printStart | sak=pall |
| 2:54 | sak | du | En webbshop. Från ett skjul. Med modem. Varför inte. |
| 2:54 | notis | tanke | 💭 En webbshop. Från ett skjul. Med modem. Varför inte. |
| 2:54 | röst | du | En webbshop. Från ett skjul. Med modem. Varför inte. · STORY |
| 2:55 | paket |  | tanke |
| 2:55 | tanke | du | Jaha, Rolf har hämtat en trädgårdstomte till flaket. |
| 2:55 | väntar | du | Jaha, Rolf har hämtat en trädgårdstomte till flaket. |
| 2:55 | händelse | printKlar | sak=pall n=3 |
| 2:56 | händelse | tagitUrPrint | sak=pall n=1 |
| 2:59 | klar | du | En webbshop. Från ett skjul. Med modem. Varför inte. |
| 3:00 | struken | du | Jaha, Rolf har hämtat en trädgårdstomte till flaket. |
| 3:00 | väntar | du | Göran snodde en pall. |
| 3:00 | väntar | info:fel | Göran snodde en pall. |
| 3:00 | paket |  | tanke → tanke |
| 3:00 | tanke | du | HALLÅ! Den där måsen tog min grej! |
| 3:00 | väntar | du | HALLÅ! Den där måsen tog min grej! |
| 3:00 | tanke | du | Mamma hade rätt. Säg inget till henne. |
| 3:00 | väntar | du | Mamma hade rätt. Säg inget till henne. |
| 3:00 | paket |  | sms |
| 3:00 | väntar | rolf | ÖJ! Dä ä Göran.. Han ä från 2014. Han tar int skräp, bara grejer som ä granna. MVH ROLF​ |
| 3:01 | sak | info:fel | Göran snodde en pall. |
| 3:01 | kvitto-visas | info:fel | Göran snodde en pall. |
| 3:01 | toast | fel | Göran snodde en pall. |
| 3:03 | klar | info:fel | Göran snodde en pall. |
| 3:03 | väntar | bud | (tips) |
| 3:03 | sak | bud | (tips) |
| 3:05 | klar | bud | (tips) |
| 3:07 | meddelande | mamma | Jag läste om en man som bodde på en soptipp. Han blev attackerad av måsar. Finns det måsar där? |
| 3:08 | röst | mamma | Jag läste om en man som bodde på en soptipp. Han blev attackerad av måsar. Finns det måsar där? · STORY |
| 3:19 | paket |  | sms |
| 3:19 | väntar | mamma | En katt? Är den vaccinerad? Rör den inte. Eller jo. Ge den en macka. |
| 3:29 | händelse | brevLast | id=m_masar |
| 3:31 | struken | du | Göran snodde en pall. |
| 3:31 | sak | du | HALLÅ! Den där måsen tog min grej! |
| 3:31 | notis | tanke | 💭 HALLÅ! Den där måsen tog min grej! |
| 3:31 | röst | du | HALLÅ! Den där måsen tog min grej! · STORY |
| 3:31 | skratt | du | tummen på fotot |
| 3:31 | väntar | foto | Göran. Tjuv. (och min tumme) |
| 3:31 | paket |  | tanke |
| 3:31 | tanke | du | Okej, Göran. Nästa gång är jag beredd. |
| 3:31 | väntar | du | Okej, Göran. Nästa gång är jag beredd. |
| 3:32 | händelse | printStart | sak=pall |
| 3:35 | klar | du | HALLÅ! Den där måsen tog min grej! |
| 3:37 | händelse | printKlar | sak=pall n=4 |
| 3:37 | händelse | tagitUrPrint | sak=pall n=1 |
| 3:39 | händelse | printStart | sak=pall |
| 3:39 | paket |  | tanke |
| 3:39 | tanke | du | Kajsa. Ut ur skrivaren. Nu. |
| 3:39 | väntar | du | Kajsa. Ut ur skrivaren. Nu. |
| 3:39 | skratt | du | Kajsa i skrivaren |
| 3:40 | skratt | du | falsk tuta |
| 3:40 | väntar | värld:TUUT! Tjena! | TUUT! Tjena! |
| 3:41 | händelse | printStart | sak=pall |
| 3:43 | sak | du | Mamma hade rätt. Säg inget till henne. |
| 3:43 | notis | tanke | 💭 Mamma hade rätt. Säg inget till henne. |
| 3:43 | röst | du | Mamma hade rätt. Säg inget till henne. · STORY |
| 3:45 | händelse | printKlar | sak=pall n=5 |
| 3:48 | klar | du | Mamma hade rätt. Säg inget till henne. |
| 3:51 | händelse | printKlar | sak=pall n=6 |
| 3:52 | händelse | tagitUrPrint | sak=pall n=1 |
| 3:53 | händelse | tagitUrPrint | sak=pall n=1 |
| 3:56 | sak | rolf | ÖJ! Dä ä Göran.. Han ä från 2014. Han tar int skräp, bara grejer som ä granna. MVH ROLF​ |
| 3:56 | sms | rolf | ÖJ! Dä ä Göran.. Han ä från 2014. Han tar int skräp, bara grejer som ä granna. MVH ROLF​ |
| 3:56 | sms-bubbla | rolf | ÖJ! Dä ä Göran.. Han ä från 2014. Han tar int skräp, bara grejer som ä granna. MVH ROLF​ |
| 3:56 | röst | rolf | ÖJ! Dä ä Göran.. Han ä från 2014. Han tar int skräp, bara grejer som ä granna. MVH ROLF​ · STORY |
| 3:59 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 4:00 | händelse | salt | sak=pall n=1 |
| 4:00 | aliSalt | ali | 270 |
| 4:00 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 4:01 | händelse | salt | sak=pall n=1 |
| 4:01 | aliSalt | ali | 257 |
| 4:01 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 4:01 | händelse | salt | sak=pall n=1 |
| 4:01 | aliSalt | ali | 244 |
| 4:01 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 4:01 | händelse | salt | sak=byggsats:webbdator n=1 |
| 4:01 | aliSalt | ali | 20 |
| 4:01 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 4:03 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 4:04 | klar | rolf | ÖJ! Dä ä Göran.. Han ä från 2014. Han tar int skräp, bara grejer som ä granna. MVH ROLF​ |
| 4:06 | struken | värld:TUUT! Tjena! | TUUT! Tjena! |
| 4:06 | struken | du | Kajsa. Ut ur skrivaren. Nu. |
| 4:12 | sak | foto | Göran. Tjuv. (och min tumme) |
| 4:12 | foto | du | Göran. Tjuv. (och min tumme) |
| 4:12 | händelse | printStart | sak=lampskarm |
| 4:14 | klar | foto | Göran. Tjuv. (och min tumme) |
| 4:18 | händelse | printKlar | sak=lampskarm n=1 |
| 4:18 | händelse | malKlart | id=lampskarm del=Dag 5 – Tätt och mysigt nasta=mysigt |
| 4:18 | bekräftelse | du | plats |
| 4:18 | väntar | du | Skjulet ska bli mysigt på riktigt. Det är mitt hem nu. |
| 4:18 | målruta |  | Gör det mysigt · trivsel 104/130 |
| 4:18 | MÅL |  | Gör det mysigt · trivsel 104/130 |
| 4:18 | sak | du | Skjulet ska bli mysigt på riktigt. Det är mitt hem nu. |
| 4:18 | pil |  | Gör det mysigt · trivsel 104/130 |
| 4:18 | notis | tanke | 💭 Skjulet ska bli mysigt på riktigt. Det är mitt hem nu. |
| 4:18 | röst | du | Skjulet ska bli mysigt på riktigt. Det är mitt hem nu. · MÅL |
| 4:19 | händelse | tagitUrPrint | sak=lampskarm n=1 |
| 4:19 | nick |  | nick:56 |
| 4:22 | kvittens-bock |  | ✓ Printa en lampskärm att sälja |
| 4:23 | klar | du | Skjulet ska bli mysigt på riktigt. Det är mitt hem nu. |
| 4:30 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 4:32 | struken | info:guld | 3D-modell köpt – printa fönster |
| 4:32 | händelse | kopt | sak=fonster |
| 4:32 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 4:33 | sak | du | Okej, Göran. Nästa gång är jag beredd. |
| 4:33 | notis | tanke | 💭 Okej, Göran. Nästa gång är jag beredd. |
| 4:33 | röst | du | Okej, Göran. Nästa gång är jag beredd. · STORY |
| 4:38 | klar | du | Okej, Göran. Nästa gång är jag beredd. |
| 4:41 | händelse | printStart | sak=byggsats:fonster |
| 4:46 | sak | mamma | En katt? Är den vaccinerad? Rör den inte. Eller jo. Ge den en macka. |
| 4:46 | sms | mamma | En katt? Är den vaccinerad? Rör den inte. Eller jo. Ge den en macka. |
| 4:46 | sms-bubbla | mamma | En katt? Är den vaccinerad? Rör den inte. Eller jo. Ge den en macka. |
| 4:46 | röst | mamma | En katt? Är den vaccinerad? Rör den inte. Eller jo. Ge den en macka. · STORY |
| 4:48 | toast | bra | Del 1 av 2 klar |
| 4:52 | klar | mamma | En katt? Är den vaccinerad? Rör den inte. Eller jo. Ge den en macka. |
| 4:53 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 5:07 | händelse | printKlar | sak=byggsats:fonster n=1 |
| 5:12 | händelse | tagitUrPrint | sak=byggsats:fonster n=1 |
| 5:12 | paket |  | sms |
| 5:12 | väntar | ali | Ali här. Fönster – printad. På riktigt. Jag har visat bilden för min fru tre gånger. |
| 5:15 | sak | ali | Ali här. Fönster – printad. På riktigt. Jag har visat bilden för min fru tre gånger. |
| 5:15 | sms | ali | Ali här. Fönster – printad. På riktigt. Jag har visat bilden för min fru tre gånger. |
| 5:15 | sms-bubbla | ali | Ali här. Fönster – printad. På riktigt. Jag har visat bilden för min fru tre gånger. |
| 5:15 | röst | ali | Ali här. Fönster – printad. På riktigt. Jag har visat bilden för min fru tre gånger. · REAKTION |
| 5:25 | klar | ali | Ali här. Fönster – printad. På riktigt. Jag har visat bilden för min fru tre gånger. |
| 5:28 | skratt | du | däcket rullar iväg |
| 5:31 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 5:33 | struken | info:guld | 3D-modell köpt – printa trägolv |
| 5:33 | händelse | kopt | sak=golv |
| 5:33 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 5:39 | väntar | bror | Pappa har en spellista på Youtube som heter "Sopbilar". 34 videor. Han säger att en Scania V8 är "ren musik". |
| 5:41 | händelse | printStart | sak=byggsats:golv |
| 5:48 | toast | bra | Del 1 av 3 klar |
| 5:56 | toast | bra | Del 2 av 3 klar |
| 6:02 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 6:13 | händelse | printKlar | sak=byggsats:golv n=1 |
| 6:20 | händelse | tagitUrPrint | sak=byggsats:golv n=1 |
| 6:25 | tanke | du | Trägolv på plats! Trivsel +8 |
| 6:25 | väntar | du | Trägolv på plats! Trivsel +8 |
| 6:25 | sak | du | Trägolv på plats! Trivsel +8 |
| 6:25 | notis | tanke | 💭 Trägolv på plats! Trivsel +8 |
| 6:25 | röst | du | Trägolv på plats! Trivsel +8 · REAKTION |
| 6:27 | klar | du | Trägolv på plats! Trivsel +8 |
| 6:35 | händelse | printStart | sak=pall |
| 6:35 | paket |  | tanke |
| 6:35 | tanke | du | Kajsa. Ut ur skrivaren. Nu. |
| 6:35 | väntar | du | Kajsa. Ut ur skrivaren. Nu. |
| 6:35 | skratt | du | Kajsa i skrivaren |
| 6:37 | sak | du | Kajsa. Ut ur skrivaren. Nu. |
| 6:37 | notis | tanke | 💭 Kajsa. Ut ur skrivaren. Nu. |
| 6:37 | röst | du | Kajsa. Ut ur skrivaren. Nu. · REAKTION |
| 6:40 | klar | du | Kajsa. Ut ur skrivaren. Nu. |
| 6:45 | paket |  | tanke |
| 6:45 | tanke | du | Den blev… spagetti. Ali kallar det modern konst. |
| 6:45 | väntar | du | Den blev… spagetti. Ali kallar det modern konst. |
| 6:45 | skratt | du | plastspagetti |
| 6:45 | händelse | printKlar | sak=pall n=7 |
| 6:46 | händelse | tagitUrPrint | sak=spagetti n=1 |
| 6:49 | sak | du | Den blev… spagetti. Ali kallar det modern konst. |
| 6:49 | notis | tanke | 💭 Den blev… spagetti. Ali kallar det modern konst. |
| 6:49 | röst | du | Den blev… spagetti. Ali kallar det modern konst. · REAKTION |
| 6:49 | händelse | printStart | sak=pall |
| 6:53 | klar | du | Den blev… spagetti. Ali kallar det modern konst. |
| 6:57 | väntar | bud | (tips) |
| 6:57 | sak | bud | (tips) |
| 6:59 | klar | bud | (tips) |
| 7:00 | händelse | printKlar | sak=pall n=8 |
| 7:00 | händelse | tagitUrPrint | sak=pall n=1 |
| 7:01 | meddelande | mamma | Vem är den där Ali? Är han snäll? Betalar han dig ordentligt? |
| 7:02 | röst | mamma | Vem är den där Ali? Är han snäll? Betalar han dig ordentligt? · STORY |
| 7:11 | paket |  | sms |
| 7:11 | väntar | mamma | Typ? Jag ringer honom. Vad heter butiken? Jag hittar den. |
| 7:19 | händelse | brevLast | id=m_ali |
| 7:21 | sak | mamma | Typ? Jag ringer honom. Vad heter butiken? Jag hittar den. |
| 7:21 | sms | mamma | Typ? Jag ringer honom. Vad heter butiken? Jag hittar den. |
| 7:21 | sms-bubbla | mamma | Typ? Jag ringer honom. Vad heter butiken? Jag hittar den. |
| 7:21 | röst | mamma | Typ? Jag ringer honom. Vad heter butiken? Jag hittar den. · STORY |
| 7:24 | händelse | placerat | sak=pall |
| 7:26 | skratt | du | falsk tuta |
| 7:27 | klar | mamma | Typ? Jag ringer honom. Vad heter butiken? Jag hittar den. |
| 7:33 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 7:34 | struken | info:guld | 3D-modell köpt – printa taklampa med skärm |
| 7:34 | händelse | kopt | sak=taklampa |
| 7:34 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 7:43 | händelse | printStart | sak=byggsats:taklampa |
| 7:48 | väntar | värld:TUUT! Hej grannen! | TUUT! Hej grannen! |
| 7:48 | sak | värld:TUUT! Hej grannen! | TUUT! Hej grannen! |
| 7:48 | bubbla |  | TUUT! Hej grannen! |
| 7:48 | händelse | printKlar | sak=byggsats:taklampa n=1 |
| 7:48 | händelse | tagitUrPrint | sak=byggsats:taklampa n=1 |
| 7:51 | klar | värld:TUUT! Hej grannen! | TUUT! Hej grannen! |
| 7:53 | tanke | du | Taklampa med skärm på plats! Trivsel +6 |
| 7:53 | väntar | du | Taklampa med skärm på plats! Trivsel +6 |
| 7:53 | sak | du | Taklampa med skärm på plats! Trivsel +6 |
| 7:53 | notis | tanke | 💭 Taklampa med skärm på plats! Trivsel +6 |
| 7:53 | röst | du | Taklampa med skärm på plats! Trivsel +6 · REAKTION |
| 7:56 | klar | du | Taklampa med skärm på plats! Trivsel +6 |
| 7:58 | scenInfo | du | Lampan tänds |
| 8:07 | tanke | du | Det börjar kännas som ett hem. På riktigt. |
| 8:07 | notis | tanke | 💭 Det börjar kännas som ett hem. På riktigt. |
| 8:07 | röst | du | Det börjar kännas som ett hem. På riktigt. · REAKTION |
| 8:08 | ljud | kajsa | Mjau |
| 8:11 | händelse | malKlart | id=mysigt del=Dag 5 – Tätt och mysigt nasta=vind5 |
| 8:11 | bekräftelse | du | plats |
| 8:11 | väntar | du | Lampan lyser. Pappa ska visst komma förbi i morgon. |
| 8:11 | väntar | du | En tredje vindsnurra på taket. Skrivare M drar mycket. |
| 8:11 | MÅL |  | Köp vindsnurran |
| 8:11 | upplåst | strom | vindsnurra3 |
| 8:11 | brott | UPPLÅST | vindsnurra3 (strom 0 av 15, sparat ihop) |
| 8:11 | händelse | upplast | id=vindsnurra3 flask=strom |
| 8:11 | paket |  | sms |
| 8:11 | väntar | ali | Ali här. En tredje snurra. Mitt på taket. Sen är taket fullt. Sen får solen ta över. |
| 8:12 | sak | du | Lampan lyser. Pappa ska visst komma förbi i morgon. |
| 8:12 | kvitto-visas | du | Lampan lyser. Pappa ska visst komma förbi i morgon. |
| 8:12 | lapp | 📔 Dagbok | Lampan lyser. Pappa ska visst komma förbi i morgon. |
| 8:12 | dagbokrad | du | Lampan lyser. Pappa ska visst komma förbi i morgon. |
| 8:12 | notis | dagbok | Lampan lyser. Pappa ska visst komma förbi i morgon. |
| 8:12 | klar | du | Lampan lyser. Pappa ska visst komma förbi i morgon. |
| 8:12 | målruta |  | Köp vindsnurran |
| 8:15 | paket |  | tanke |
| 8:15 | tanke | du | En badanka. Den överlevde kvarnen. |
| 8:15 | väntar | du | En badanka. Den överlevde kvarnen. |
| 8:15 | skratt | du | kvarnen spottar |
| 8:17 | sak | du | En tredje vindsnurra på taket. Skrivare M drar mycket. |
| 8:17 | pil |  | Köp vindsnurran |
| 8:17 | notis | tanke | 💭 En tredje vindsnurra på taket. Skrivare M drar mycket. |
| 8:17 | röst | du | En tredje vindsnurra på taket. Skrivare M drar mycket. · MÅL |
| 8:17 | nick |  | nick:57 |
| 8:20 | händelse | printStart | sak=pall |
| 8:25 | klar | du | En tredje vindsnurra på taket. Skrivare M drar mycket. |
| 8:26 | händelse | printKlar | sak=pall n=9 |
| 8:26 | händelse | tagitUrPrint | sak=pall n=1 |
| 8:32 | händelse | placerat | sak=pall |
| 8:33 | sak | ali | Ali här. En tredje snurra. Mitt på taket. Sen är taket fullt. Sen får solen ta över. |
| 8:33 | sms | ali | Ali här. En tredje snurra. Mitt på taket. Sen är taket fullt. Sen får solen ta över. |
| 8:33 | sms-bubbla | ali | Ali här. En tredje snurra. Mitt på taket. Sen är taket fullt. Sen får solen ta över. |
| 8:33 | röst | ali | Ali här. En tredje snurra. Mitt på taket. Sen är taket fullt. Sen får solen ta över. · STORY |
| 8:41 | klar | ali | Ali här. En tredje snurra. Mitt på taket. Sen är taket fullt. Sen får solen ta över. |
| 8:43 | struken | du | En badanka. Den överlevde kvarnen. |
| 8:46 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 8:48 | struken | info:guld | 3D-modell köpt – printa vindsnurra till skjultaket |
| 8:48 | händelse | kopt | sak=vindsnurra |
| 8:48 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 8:57 | händelse | printStart | sak=byggsats:vindsnurra |
| 9:00 | händelse | printKlar | sak=byggsats:vindsnurra n=1 |
| 9:01 | struken | info:guld | 🌬️ Vindsnurran ska upp på skjulets tak. |
| 9:01 | händelse | tagitUrPrint | sak=byggsats:vindsnurra n=1 |
| 9:06 | händelse | placerat | sak=vindsnurra |
| 9:06 | struken | info:guld | 🌬️ Vindsnurran sitter på taket – den trampar cykeln åt mig när det blåser |
| 9:06 | monterat | du | byggsats:vindsnurra |
| 9:06 | händelse | monterat | sak=vindsnurra |
| 9:06 | händelse | malKlart | id=vind5 del=Dag 5 – Tätt och mysigt nasta=sov5 |
| 9:06 | paket |  | lapp |
| 9:06 | kvallsrad | du | Nu vet grannen att jag bor HÄR. Han verkar inte glad. En skrivare räcker inte. |
| 9:06 | bekräftelse | du | plats |
| 9:06 | paket |  | sms |
| 9:06 | väntar | mamma | Pappa kommer förbi i morgon. Han säger inget men han vill. ❤️ |
| 9:06 | paket |  | sms |
| 9:06 | väntar | mamma | Pappa och jag har lagt undan lite. 1 000 kr. Till något fint i ditt hus. Inte till chips. ❤️ /Mamma |
| 9:06 | målruta |  | Sov när du vill |
| 9:06 | MÅL |  | Sov när du vill |
| 9:10 | kvittens-bock |  | ✓ Sätt en tredje vindsnurra på taket |
| 9:11 | röst | mamma | Haha, träplankor? · STORY |
| 9:14 | röst | mamma | Vad är det för skit? Du har ju inte ens tapeter på väggarna. · STORY |
| 9:18 | röst | mamma | Och var är badrummet? Du duschar väl? · STORY |
| 9:22 | röst | mamma | Pappa säger "aha, vad lugnt då". Pappa säger det om allt. · STORY |
| 9:26 | röst | mamma | …men fönstret var fint. Det kommer in ljus i alla fall. ❤️ · STORY |
| 9:33 | morgonkort | 📕 Kapitel 2: Ett riktigt hem | 📕 Kapitel 2: Ett riktigt hem · Mamma är inte imponerad. Än. Nästa mål: tapeter , en egen gamingbod med RGB, gamer-inredning – och en jacuzzi . Visa henne. Ali har nya ritningar – och ♾️ trimningar som aldrig tar slut. |
| 9:33 | varning | berattare | Du spelar i ett privat fönster. Det du gör sparas inte när fönstret stängs. |
| 9:33 | röst | berattare | Du spelar i ett privat fönster. Det du gör sparas inte när fönstret stängs. · STORY |
| 9:33 | tanke | du | Mätt. Varm. Jag skulle kunna bära en kyl. |
| 9:33 | väntar | du | Mätt. Varm. Jag skulle kunna bära en kyl. |
| 9:34 | väntar | notis:🌇 Klockan är 21. Ali slår igen luckan.  | 🌇 Klockan är 21. Ali slår igen luckan. Dagens jobb är klart – gå in i skjulet och sov i sängen. |
| 9:41 | sak | du | (nytt mål i rutan) |
| 9:41 | pil |  | Sov när du vill |
| 9:41 | klar | du | (nytt mål i rutan) |
| 9:43 | autosparning | du | natt 13 december |
| 9:43 | struken | bror | Pappa har en spellista på Youtube som heter "Sopbilar". 34 videor. Han säger att en Scania V8 är "ren musik". |
| 9:45 | nattkort | du | 🌙 11 dagar kvar. God natt. zzz… Nu vet grannen att jag bor HÄR. Han verkar inte glad. En skrivare räcker inte. DAGENS PRINTAR Pall × 7 Trädgårdstomte till flak |

<details><summary>Botens handlingar dag 4</summary>

- 0:00 — dag 4 börjar — (168 kr)
- 0:09 popup: "FORTSÄTT" (168 kr)
- 0:26 gå till Rolfs postlåda (28 m) (168 kr)
- 0:32 panel: "Rolfs postlåda
Det här låg i l" (418 kr)
- 0:32 vet inte vad jag ska göra: "Möt sopbilen vid grinden" (418 kr)
- 0:39 vet inte vad jag ska göra: "Möt sopbilen vid grinden" (418 kr)
- 1:00 gå till skrivaren (8 m) (418 kr)
- 1:01 printar Trädgårdstomte till flaket (418 kr)
- 1:08 tar ut 1 st ur skrivaren (418 kr)
- 1:11 valj tomte: true, vald tomte, post {"l":null,"tr":null,"tm":[]}, nummer true (418 kr)
- 1:13 gå till Rolfs postlåda (8 m) (418 kr)
- 1:27 gå till skrivaren (8 m) (418 kr)
- 1:29 printar Isolerskiva (vägg) (418 kr)
- 1:34 tar ut 1 st ur skrivaren (418 kr)
- 1:38 gå till skjulet (hoger) (19 m) (418 kr)
- 1:46 gå till skrivaren (17 m) (418 kr)
- 1:48 printar Isolerskiva (vägg) (418 kr)
- 1:53 tar ut 1 st ur skrivaren (418 kr)
- 1:56 gå till skjulet (fram) (17 m) (418 kr)
- 2:14 gå till Ali (20 m) (418 kr)
- 2:14 öppnar Alis butik – köpa alis pappas gamla dator (418 kr)
- 2:17 köper webbdator för 300 kr (118 kr)
- 2:23 gå till skrivaren (24 m) (118 kr)
- 2:24 printar Alis pappas gamla dator (118 kr)
- 2:26 tar ut 1 st ur skrivaren (118 kr)
- 2:30 gå till platsen för alis pappas gamla dator (21 m) (118 kr)
- 2:32 ställer ut alis pappas gamla dator (118 kr)
- 2:49 gå till skrivaren (21 m) (118 kr)
- 2:50 printar Pall (118 kr)
- 2:56 tar ut 1 st ur skrivaren (118 kr)
- 3:04 plockar 5 skräp på tippen (bär max 16) (118 kr)
- 3:06 gå till kvarnen (9 m) (118 kr)
- 3:19 popup: "Bara en katt." (118 kr)
- 3:29 popup: "Läst" (118 kr)
- 3:30 gå till skrivaren (5 m) (118 kr)
- 3:32 printar Pall (118 kr)
- 3:38 tar ut 1 st ur skrivaren (118 kr)
- 3:38 webbshop: 0 paket i postlådan (118 kr)
- 3:38 tjänar pengar till receptet lampskärm: 118/600 kr → printar pall (270 kr) (118 kr)
- 3:39 printar Pall (118 kr)
- 3:41 printar Pall (118 kr)
- 3:53 tar ut 1 st ur skrivaren (118 kr)
- 3:53 tar ut 1 st ur skrivaren (118 kr)
- 3:59 gå till Ali (27 m) (118 kr)
- 3:59 öppnar Alis butik – sälja (118 kr)
- 4:02 säljer hos Ali: +791 kr (909 kr)
- 4:03 öppnar Alis butik – köpa receptet lampskärm (909 kr)
- 4:04 Ali har inte lampskarm (909 kr)
- 4:10 gå till skrivaren (24 m) (909 kr)
- 4:12 printar Lampskärm (909 kr)
- 4:19 tar ut 1 st ur skrivaren (909 kr)
- 4:30 gå till Ali (24 m) (909 kr)
- 4:30 öppnar Alis butik – köpa fönster (909 kr)
- 4:33 köper fonster för 90 kr (819 kr)
- 4:39 gå till skrivaren (25 m) (819 kr)
- 4:41 printar Fönster (2 delar) (819 kr)
- 5:01 plockar 6 skräp på tippen (bär max 16) (819 kr)
- 5:04 gå till kvarnen (11 m) (819 kr)
- 5:12 gå till skrivaren (3 m) (819 kr)
- 5:12 tar ut 1 st ur skrivaren (819 kr)
- 5:17 gå till skjulet (22 m) (819 kr)
- 5:17 sätter ett fönster (819 kr)
- 5:31 gå till Ali (20 m) (819 kr)
- 5:31 öppnar Alis butik – köpa trägolv (819 kr)
- 5:34 köper golv för 140 kr (679 kr)
- 5:40 gå till skrivaren (25 m) (679 kr)
- 5:41 printar Trägolv (3 delar) (679 kr)
- 6:09 plockar 4 skräp på tippen (bär max 16) (679 kr)
- 6:12 gå till kvarnen (11 m) (679 kr)
- 6:20 gå till skrivaren (3 m) (679 kr)
- 6:20 tar ut 1 st ur skrivaren (679 kr)
- 6:25 gå till skjulet (21 m) (679 kr)
- 6:33 gå till skrivaren (18 m) (679 kr)
- 6:35 printar Pall (679 kr)
- 6:46 tar ut 1 st ur skrivaren (679 kr)
- 6:49 printar Pall (679 kr)
- 7:01 tar ut 1 st ur skrivaren (679 kr)
- 7:11 popup: "Han är snäll. Typ." (679 kr)
- 7:19 popup: "Läst" (679 kr)
- 7:23 gå till platsen för pall (20 m) (679 kr)
- 7:24 ställer ut pall (679 kr)
- 7:33 gå till Ali (15 m) (679 kr)
- 7:33 öppnar Alis butik – köpa taklampa med skärm (679 kr)
- 7:35 köper taklampa för 90 kr (589 kr)
- 7:41 gå till skrivaren (25 m) (589 kr)
- 7:43 printar Taklampa med skärm (589 kr)
- 7:49 tar ut 1 st ur skrivaren (589 kr)
- 7:53 gå till skjulet (19 m) (589 kr)
- 8:10 plockar 3 skräp på tippen (bär max 16) (589 kr)
- 8:13 gå till kvarnen (13 m) (589 kr)
- 8:19 gå till skrivaren (5 m) (589 kr)
- 8:20 printar Pall (589 kr)
- 8:26 tar ut 1 st ur skrivaren (589 kr)
- 8:31 gå till platsen för pall (22 m) (589 kr)
- 8:32 ställer ut pall (589 kr)
- 8:46 gå till Ali (15 m) (589 kr)
- 8:46 öppnar Alis butik – köpa vindsnurra till skjultaket (589 kr)
- 8:49 köper vindsnurra för 50 kr (539 kr)
- 8:55 gå till skrivaren (24 m) (539 kr)
- 8:57 printar Vindsnurra till skjultaket (539 kr)
- 9:02 tar ut 1 st ur skrivaren (539 kr)
- 9:06 gå till sätt vindsnurran på taket (18 m) (539 kr)
- 9:33 telefonscen: "Okej. Kapitel 2 då. 😤" (1539 kr)
- 9:33 startmenyn syns – fortsätter spelet (1539 kr)

</details>

## Dag 5

| Tid | Källa | Vem | Text |
|---|---|---|---|
| 9:45 | vara | ali | kruka |
| 9:45 | händelse | malKlart | id=sov5 del=Dag 5 – Tätt och mysigt nasta=pappa6 |
| 9:45 | bekräftelse | du | plats |
| 9:46 | MÅL |  | Pappa kommer förbi idag |
| 9:47 | autosparning | du | morgon 14 december |
| 0:01 | händelse | dagenBorjar | dag=5 |
| 0:01 | meddelande | du | Pengarna tog slut. Därför: en fabrik. |
| 0:01 | dagbokkort | du | KAPITEL 2 · 10 dagar till jul · Pengarna tog slut. Därför: en fabrik. |
| 0:01 | röst | du | KAPITEL 2 · 10 dagar till jul. Pengarna tog slut. Därför: en fabrik. · STORY |
| 0:07 | väntar | notis:morgon | Ali vill ha idag: Blomkruka · +50 % |
| 0:07 | händelse | morgonkortStangt | dag=5 |
| 0:07 | struken | du | Mätt. Varm. Jag skulle kunna bära en kyl. |
| 0:07 | väntar | du | Pappa kommer förbi i dag. Jag möter honom vid grinden. |
| 0:07 | målruta |  | Pappa kommer förbi idag |
| 0:08 | väntar | du | Göran snodde plastspagetti (modern konst). |
| 0:08 | väntar | info:fel | Göran snodde plastspagetti (modern konst). |
| 0:08 | sak | info:fel | Göran snodde plastspagetti (modern konst). |
| 0:08 | kvitto-visas | info:fel | Göran snodde plastspagetti (modern konst). |
| 0:08 | toast | fel | Göran snodde plastspagetti (modern konst). |
| 0:10 | klar | info:fel | Göran snodde plastspagetti (modern konst). |
| 0:13 | struken | notis:🌇 Klockan är 21. Ali slår igen luckan.  | 🌇 Klockan är 21. Ali slår igen luckan. Dagens jobb är klart – gå in i skjulet och sov i sängen. |
| 0:13 | sak | du | Pappa kommer förbi i dag. Jag möter honom vid grinden. |
| 0:13 | pil |  | Pappa kommer förbi idag |
| 0:13 | notis | tanke | 💭 Pappa kommer förbi i dag. Jag möter honom vid grinden. |
| 0:13 | röst | du | Pappa kommer förbi i dag. Jag möter honom vid grinden. · MÅL |
| 0:18 | klar | du | Pappa kommer förbi i dag. Jag möter honom vid grinden. |
| 0:18 | sak | notis:morgon | Ali vill ha idag: Blomkruka · +50 % |
| 0:18 | notis |  | Blomkruka · +50 % |
| 0:21 | klar | notis:morgon | Ali vill ha idag: Blomkruka · +50 % |
| 0:25 | paket |  | sms |
| 0:25 | väntar | rolf | Fôlk pratar gott om dej. Ja hitta röda backar av riktigt bra plast på tippen. Ja la dôm vid grinden. /R​ |
| 0:25 | väntar | rolf | ÖJ! Tomten sitter på flaket nu. En tant vinka tillbaka. Första gången på trettio år. Pengar i lådan. MVH ROLF​ |
| 0:29 | skratt | du | falsk tuta |
| 0:29 | väntar | värld:TUUT! Hej grannen! | TUUT! Hej grannen! |
| 0:35 | tanke | du | Göran tar mina saker. Kanske han vill ha något eget? |
| 0:35 | väntar | du | Göran tar mina saker. Kanske han vill ha något eget? |
| 0:35 | väntar | notis:📔 Prestation: Ett hem att bo i · +3 res | 📔 Prestation: Ett hem att bo i · +3 respekt |
| 0:35 | väntar | notis:📔 Prestation: Tusenlappen · +3 respekt | 📔 Prestation: Tusenlappen · +3 respekt |
| 0:35 | sak | notis:📔 Prestation: Ett hem att bo i · +3 res | 📔 Prestation: Ett hem att bo i · +3 respekt |
| 0:35 | notis |  | 📔 Prestation: Ett hem att bo i · +3 respekt |
| 0:36 | kvitto-visas | notis:📔 Prestation: Tusenlappen · +3 respekt | 📔 Prestation: Tusenlappen · +3 respekt |
| 0:36 | sak | notis:📔 Prestation: Tusenlappen · +3 respekt | 📔 Prestation: Tusenlappen · +3 respekt |
| 0:36 | notis |  | 📔 Prestation: Tusenlappen · +3 respekt |
| 0:38 | klar | notis:📔 Prestation: Ett hem att bo i · +3 res | 📔 Prestation: Ett hem att bo i · +3 respekt |
| 0:40 | sak | du | Göran tar mina saker. Kanske han vill ha något eget? |
| 0:40 | notis | tanke | 💭 Göran tar mina saker. Kanske han vill ha något eget? |
| 0:40 | röst | du | Göran tar mina saker. Kanske han vill ha något eget? · STORY |
| 0:45 | klar | du | Göran tar mina saker. Kanske han vill ha något eget? |
| 0:47 | struken | du | Göran snodde plastspagetti (modern konst). |
| 0:47 | brott | TRÄNGSEL 2 | "Pappa kommer förbi i morgon. Han säger inget men h" 2.1 s efter förra meddelandet, 49.6 s efter en klar uppgift |
| 0:47 | sak | mamma | Pappa kommer förbi i morgon. Han säger inget men han vill. ❤️ |
| 0:47 | sms | mamma | Pappa kommer förbi i morgon. Han säger inget men han vill. ❤️ |
| 0:47 | sms-bubbla | mamma | Pappa kommer förbi i morgon. Han säger inget men han vill. ❤️ |
| 0:47 | röst | mamma | Pappa kommer förbi i morgon. Han säger inget men han vill. ❤️ · STORY |
| 0:53 | klar | mamma | Pappa kommer förbi i morgon. Han säger inget men han vill. ❤️ |
| 0:55 | brott | TRÄNGSEL 2 | "Pappa och jag har lagt undan lite. 1 000 kr. Till " 2.0 s efter förra meddelandet, 57.4 s efter en klar uppgift |
| 0:55 | sak | mamma | Pappa och jag har lagt undan lite. 1 000 kr. Till något fint i ditt hus. Inte till chips. ❤️ /Mamma |
| 0:55 | sms | mamma | Pappa och jag har lagt undan lite. 1 000 kr. Till något fint i ditt hus. Inte till chips. ❤️ /Mamma |
| 0:55 | sms-bubbla | mamma | Pappa och jag har lagt undan lite. 1 000 kr. Till något fint i ditt hus. Inte till chips. ❤️ /Mamma |
| 0:55 | röst | mamma | Pappa och jag har lagt undan lite. 1 000 kr. Till något fint i ditt hus. Inte till chips. ❤️ /Mamma · STORY |
| 1:03 | klar | mamma | Pappa och jag har lagt undan lite. 1 000 kr. Till något fint i ditt hus. Inte till chips. ❤️ /Mamma |
| 1:05 | struken | värld:TUUT! Hej grannen! | TUUT! Hej grannen! |
| 1:05 | tanke | du | Pappas bil stannade vid grinden |
| 1:05 | väntar | du | Pappas bil stannade vid grinden |
| 1:05 | scenInfo | pappa | Pappa kommer |
| 1:11 | sak | du | Pappas bil stannade vid grinden |
| 1:11 | notis | tanke | 💭 Pappas bil stannade vid grinden |
| 1:11 | röst | du | Pappas bil stannade vid grinden · REAKTION |
| 1:13 | scenInfo | du | Hälsar på pappa |
| 1:13 | röst | pappa | Jaså. Här bor du alltså. · REAKTION |
| 1:14 | klar | du | Pappas bil stannade vid grinden |
| 1:16 | toast |  | Du: Pappa … jag bor på en soptipp. |
| 1:16 | röst | du | Pappa … jag bor på en soptipp. · REAKTION |
| 1:20 | händelse | placerat | sak=burk_tavla3 |
| 1:20 | händelse | placerat | sak=burk_sill |
| 1:20 | händelse | placerat | sak=burk_tavla |
| 1:20 | toast |  | 🍯 Pappa lade 3 saker från mamma i en hög. |
| 1:20 | röst | pappa | Mamma skickade burkar. Jag bar dem. · REAKTION |
| 1:25 | händelse | placerat | sak=sackkarra |
| 1:25 | röst | pappa | Säckkärra. Den var på rea. · REAKTION |
| 1:28 | toast |  | Du: …Tack? |
| 1:28 | röst | du | …Tack? · REAKTION |
| 1:35 | röst | rolf | ÖJ! Vem ä du då? · REAKTION |
| 1:38 | röst | pappa | Pappan. · REAKTION |
| 1:41 | röst | rolf | Hörru. Jaså. Rolf. Ja kör bilen. · REAKTION |
| 1:45 | röst | pappa | Scania. Trettiotvåa? · REAKTION |
| 1:48 | röst | rolf | Tjugoåtta. Men hon går som en klocka. · REAKTION |
| 1:53 | röst | rolf | Hörru. Mä en sån kan du ta tunnorna på tippen. Dôm ä av den hårda plasten. Den röda. Den klarar int en köttkvarn. · REAKTION |
| 2:02 | toast |  | Du: Var får man en kvarn som klarar den då? |
| 2:02 | röst | du | Var får man en kvarn som klarar den då? · REAKTION |
| 2:02 | skratt | du | falsk tuta |
| 2:06 | väntar | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har isolerade väggar nu. Och FÖNSTER. Det är stort, Gunnar. |
| 2:06 | radio | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har isolerade väggar nu. Och FÖNSTER. Det är stort, Gunnar. |
| 2:06 | skratt | du | Radio-Kjelle |
| 2:06 | röst | rolf | Ali har en röd kvarn längst in i lagret. Han har aldrig vågat starta den. · REAKTION |
| 2:13 | scenInfo | rolf | Två tunnor vid grinden |
| 2:13 | röst | rolf | Tjo. Ja ställer tunnorna vid grinden när ja tömmer. Du får dôm. · REAKTION |
| 2:20 | röst | pappa | Mm. Hej då då. · REAKTION |
| 2:24 | händelse | malKlart | id=pappa6 del=Dag 6 – Röd PETG nasta=r6-kop-roda-kvarnen |
| 2:24 | bekräftelse | du | plats |
| 2:24 | tanke | du | Inte en enda frusen tå. Rekord. |
| 2:24 | väntar | du | Inte en enda frusen tå. Rekord. |
| 2:24 | struken | du | Inte en enda frusen tå. Rekord. |
| 2:24 | väntar | du | Tunnorna är röd plast. Bra plast. Den behöver en egen kvarn. |
| 2:24 | målruta |  | Köp röda kvarnen |
| 2:25 | MÅL |  | Köp röda kvarnen |
| 2:25 | sak | du | Tunnorna är röd plast. Bra plast. Den behöver en egen kvarn. |
| 2:25 | pil |  | Köp röda kvarnen |
| 2:25 | notis | tanke | 💭 Tunnorna är röd plast. Bra plast. Den behöver en egen kvarn. |
| 2:25 | röst | du | Tunnorna är röd plast. Bra plast. Den behöver en egen kvarn. · MÅL |
| 2:25 | nick |  | nick:60 |
| 2:27 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 2:27 | butiksbubbla | ali | Satt med AI:n hela natten igen. Fråga inte vad. Okej, en soffa. Fråga inte. |
| 2:28 | kvittens-bock |  | ✓ Prata med pappa |
| 2:29 | toast | guld | Röda kvarnen är min – den ska stå i röda linjen |
| 2:29 | händelse | kopt | sak=petgkvarn |
| 2:29 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 2:29 | butiksbubbla | ali | Den röda? Jag har aldrig vågat starta den. Ta den. Starta den långt bort från mig. |
| 2:31 | väntar | ali | Satt med AI:n hela natten igen. Fråga inte vad. Okej, en soffa. Fråga inte. |
| 2:31 | väntar | ali | Den röda? Jag har aldrig vågat starta den. Ta den. Starta den långt bort från mig. |
| 2:31 | klar | du | Tunnorna är röd plast. Bra plast. Den behöver en egen kvarn. |
| 2:31 | sak | ali | Satt med AI:n hela natten igen. Fråga inte vad. Okej, en soffa. Fråga inte. |
| 2:31 | röst | ali | Satt med AI:n hela natten igen. Fråga inte vad. Okej, en soffa. Fråga inte. · STORY |
| 2:38 | händelse | printStart | sak=byggsats:petgkvarn |
| 2:41 | klar | ali | Satt med AI:n hela natten igen. Fråga inte vad. Okej, en soffa. Fråga inte. |
| 2:41 | sak | ali | Den röda? Jag har aldrig vågat starta den. Ta den. Starta den långt bort från mig. |
| 2:41 | röst | ali | Den röda? Jag har aldrig vågat starta den. Ta den. Starta den långt bort från mig. · STORY |
| 2:42 | toast | bra | Del 1 av 3 klar |
| 2:46 | toast | bra | Del 2 av 3 klar |
| 2:48 | klar | ali | Den röda? Jag har aldrig vågat starta den. Ta den. Starta den långt bort från mig. |
| 2:49 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 2:50 | struken | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har isolerade väggar nu. Och FÖNSTER. Det är stort, Gunnar. |
| 2:54 | väntar | rolf | Ja hitta ett helt lass på återvinningen. Ingen ville ha dôm. Nu ä dôm dina. MVH ROLF​ |
| 2:56 | väntar | värld:Mjau. | Mjau. |
| 2:56 | skratt | du | tummen på fotot |
| 2:56 | väntar | foto | Pappa och Rolf (och min tumme) |
| 2:56 | paket |  | tanke |
| 2:56 | tanke | du | Pappa var här. Han såg vad jag har byggt. |
| 2:56 | väntar | du | Pappa var här. Han såg vad jag har byggt. |
| 2:56 | sak | foto | Pappa och Rolf (och min tumme) |
| 2:56 | foto | du | Pappa och Rolf (och min tumme) |
| 2:58 | klar | foto | Pappa och Rolf (och min tumme) |
| 3:03 | händelse | printKlar | sak=byggsats:petgkvarn n=1 |
| 3:06 | sak | rolf | ÖJ! Tomten sitter på flaket nu. En tant vinka tillbaka. Första gången på trettio år. Pengar i lådan. MVH ROLF​ |
| 3:06 | sms | rolf | ÖJ! Tomten sitter på flaket nu. En tant vinka tillbaka. Första gången på trettio år. Pengar i lådan. MVH ROLF​ |
| 3:06 | sms-bubbla | rolf | ÖJ! Tomten sitter på flaket nu. En tant vinka tillbaka. Första gången på trettio år. Pengar i lådan. MVH ROLF​ |
| 3:06 | röst | rolf | ÖJ! Tomten sitter på flaket nu. En tant vinka tillbaka. Första gången på trettio år. Pengar i lådan. MVH ROLF​ · STORY |
| 3:09 | händelse | tagitUrPrint | sak=byggsats:petgkvarn n=1 |
| 3:11 | händelse | placerat | sak=petgkvarn |
| 3:11 | händelse | malKlart | id=r6-kop-roda-kvarnen del=Dag 6 – Röd PETG nasta=r6-mal-tunna-roda |
| 3:11 | bekräftelse | du | plats |
| 3:11 | väntar | du | Den röda kvarnen står. Nu kör jag dit en tunna med kärran. |
| 3:12 | MÅL |  | Mal en tunna i röda kvarnen |
| 3:14 | målruta |  | Mal en tunna i röda kvarnen |
| 3:14 | pil |  | Mal en tunna i röda kvarnen |
| 3:15 | kvittens-bock |  | ✓ Ställ den röda kvarnen i röda linjen |
| 3:17 | klar | rolf | ÖJ! Tomten sitter på flaket nu. En tant vinka tillbaka. Första gången på trettio år. Pengar i lådan. MVH ROLF​ |
| 3:17 | sak | du | Den röda kvarnen står. Nu kör jag dit en tunna med kärran. |
| 3:17 | notis | tanke | 💭 Den röda kvarnen står. Nu kör jag dit en tunna med kärran. |
| 3:17 | röst | du | Den röda kvarnen står. Nu kör jag dit en tunna med kärran. · MÅL |
| 3:22 | klar | du | Den röda kvarnen står. Nu kör jag dit en tunna med kärran. |
| 3:24 | struken | värld:Mjau. | Mjau. |
| 3:28 | tanke | du | Någon från kommunen fotograferade skylten. Länge. |
| 3:28 | väntar | du | Någon från kommunen fotograferade skylten. Länge. |
| 3:28 | tanke | du | Säckkärran är i verktygsraden – en tung sak i taget |
| 3:28 | väntar | du | Säckkärran är i verktygsraden – en tung sak i taget |
| 3:28 | sak | du | Säckkärran är i verktygsraden – en tung sak i taget |
| 3:28 | notis | tanke | 💭 Säckkärran är i verktygsraden – en tung sak i taget |
| 3:28 | röst | du | Säckkärran är i verktygsraden – en tung sak i taget · REAKTION |
| 3:30 | paket |  | sms |
| 3:30 | väntar | mamma | Jag har skickat virkade grytvantar (lila) med Rolf. Den ligger i postlådan. |
| 3:35 | klar | du | Säckkärran är i verktygsraden – en tung sak i taget |
| 3:45 | sak | du | Pappa var här. Han såg vad jag har byggt. |
| 3:45 | notis | tanke | 💭 Pappa var här. Han såg vad jag har byggt. |
| 3:45 | röst | du | Pappa var här. Han såg vad jag har byggt. · STORY |
| 3:48 | klar | du | Pappa var här. Han såg vad jag har byggt. |
| 3:50 | skratt | du | kvarnen rapar |
| 3:50 | händelse | malKlart | id=r6-mal-tunna-roda del=Dag 6 – Röd PETG nasta=sol6 |
| 3:50 | bekräftelse | du | plats |
| 3:50 | väntar | du | Trampandet räcker inte till två skrivare. En solpanel ska upp på skjulets tak. |
| 3:50 | målruta |  | Köp solpanelen |
| 3:50 | MÅL |  | Köp solpanelen |
| 3:50 | upplåst | strom | sol |
| 3:50 | brott | UPPLÅST | sol (strom 0 av 15, sparat ihop) |
| 3:50 | händelse | upplast | id=sol flask=strom |
| 3:50 | paket |  | sms |
| 3:50 | väntar | ali | Ali här. ☀️ Solpaneler inne. Gratis ström från solen. Solen jobbar också hela dagen och klagar aldrig. Jag gillar solen. |
| 3:51 | sak | du | Trampandet räcker inte till två skrivare. En solpanel ska upp på skjulets tak. |
| 3:51 | pil |  | Köp solpanelen |
| 3:51 | notis | tanke | 💭 Trampandet räcker inte till två skrivare. En solpanel ska upp på skjulets tak. |
| 3:51 | röst | du | Trampandet räcker inte till två skrivare. En solpanel ska upp på skjulets tak. · MÅL |
| 3:51 | nick |  | nick:62 |
| 3:54 | kvittens-bock |  | ✓ Mal en tunna i röda kvarnen |
| 3:55 | väntar | notis:PETG-kvarnen: den första rullen röd PETG | PETG-kvarnen: den första rullen röd PETG är klar |
| 3:58 | klar | du | Trampandet räcker inte till två skrivare. En solpanel ska upp på skjulets tak. |
| 3:59 | toast | guld | 🧵 |
| 4:00 | struken | du | Någon från kommunen fotograferade skylten. Länge. |
| 4:04 | toast | guld | 🧵 |
| 4:06 | sak | rolf | Fôlk pratar gott om dej. Ja hitta röda backar av riktigt bra plast på tippen. Ja la dôm vid grinden. /R​ |
| 4:06 | sms | rolf | Fôlk pratar gott om dej. Ja hitta röda backar av riktigt bra plast på tippen. Ja la dôm vid grinden. /R​ |
| 4:06 | sms-bubbla | rolf | Fôlk pratar gott om dej. Ja hitta röda backar av riktigt bra plast på tippen. Ja la dôm vid grinden. /R​ |
| 4:06 | röst | rolf | Fôlk pratar gott om dej. Ja hitta röda backar av riktigt bra plast på tippen. Ja la dôm vid grinden. /R​ · STORY |
| 4:07 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 4:09 | skratt | du | Alis dyr-pling |
| 4:09 | struken | info:guld | 3D-modell köpt – printa solpanel |
| 4:09 | händelse | kopt | sak=sol |
| 4:09 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 4:10 | tanke | du | Servetter. Massor. Ali flyttar lådan när jag tittar. |
| 4:10 | väntar | du | Servetter. Massor. Ali flyttar lådan när jag tittar. |
| 4:10 | kvitto-visas | du | Servetter. Massor. Ali flyttar lådan när jag tittar. |
| 4:10 | sak | du | Servetter. Massor. Ali flyttar lådan när jag tittar. |
| 4:10 | notis | tanke | 💭 Servetter. Massor. Ali flyttar lådan när jag tittar. |
| 4:15 | klar | rolf | Fôlk pratar gott om dej. Ja hitta röda backar av riktigt bra plast på tippen. Ja la dôm vid grinden. /R​ |
| 4:17 | struken | ali | Ali här. ☀️ Solpaneler inne. Gratis ström från solen. Solen jobbar också hela dagen och klagar aldrig. Jag gillar solen. |
| 4:17 | händelse | printStart | sak=byggsats:sol |
| 4:18 | struken | notis:PETG-kvarnen: den första rullen röd PETG | PETG-kvarnen: den första rullen röd PETG är klar |
| 4:19 | skratt | du | falsk tuta |
| 4:19 | väntar | värld:TUUT! Tjena! | TUUT! Tjena! |
| 4:20 | väntar | foto | Röd fabrik |
| 4:20 | paket |  | tanke |
| 4:20 | tanke | du | Två fabriker. Och det blir fler. |
| 4:20 | väntar | du | Två fabriker. Och det blir fler. |
| 4:21 | toast | bra | Del 1 av 3 klar |
| 4:21 | paket |  | tanke |
| 4:21 | tanke | du | En tandborste. Den har varit på fel ställe. |
| 4:21 | väntar | du | En tandborste. Den har varit på fel ställe. |
| 4:21 | skratt | du | kvarnen spottar |
| 4:24 | sak | värld:TUUT! Tjena! | TUUT! Tjena! |
| 4:24 | bubbla |  | TUUT! Tjena! |
| 4:24 | toast | bra | Del 2 av 3 klar |
| 4:24 | tanke | du | Jag nynnar. Varför nynnar jag? |
| 4:24 | struken | du | En tandborste. Den har varit på fel ställe. |
| 4:24 | väntar | du | Jag nynnar. Varför nynnar jag? |
| 4:27 | klar | värld:TUUT! Tjena! | TUUT! Tjena! |
| 4:28 | händelse | printKlar | sak=byggsats:sol n=1 |
| 4:28 | händelse | tagitUrPrint | sak=byggsats:sol n=1 |
| 4:28 | paket |  | sms |
| 4:28 | väntar | ali | Ali här. Jag såg Solpanel på avstånd. Ett streck blev lite snett. Mitt fel. Vackert ändå. |
| 4:32 | brott | TRÄNGSEL 2 | "Ali här. Jag såg Solpanel på avstånd. Ett streck b" 5.1 s efter förra meddelandet, 41.6 s efter en klar uppgift |
| 4:32 | sak | ali | Ali här. Jag såg Solpanel på avstånd. Ett streck blev lite snett. Mitt fel. Vackert ändå. |
| 4:32 | sms | ali | Ali här. Jag såg Solpanel på avstånd. Ett streck blev lite snett. Mitt fel. Vackert ändå. |
| 4:32 | sms-bubbla | ali | Ali här. Jag såg Solpanel på avstånd. Ett streck blev lite snett. Mitt fel. Vackert ändå. |
| 4:32 | röst | ali | Ali här. Jag såg Solpanel på avstånd. Ett streck blev lite snett. Mitt fel. Vackert ändå. · REAKTION |
| 4:34 | händelse | placerat | sak=sol |
| 4:34 | händelse | malKlart | id=sol6 del=Dag 6 – Röd PETG nasta=goran6 |
| 4:34 | bekräftelse | du | plats |
| 4:34 | kvittens | du | Den röda kvarnen drar mer än vinden orkar. Solen får hjälpa till. |
| 4:34 | väntar | du | Den röda kvarnen drar mer än vinden orkar. Solen får hjälpa till. |
| 4:34 | struken | du | Jag nynnar. Varför nynnar jag? |
| 4:34 | väntar | du | Göran snor mina nyckelringar. Han får ett eget ställe, så lämnar han dem i fred. |
| 4:34 | MÅL |  | Ge Göran ett eget ställe |
| 4:37 | målruta |  | Ge Göran ett eget ställe |
| 4:42 | klar | ali | Ali här. Jag såg Solpanel på avstånd. Ett streck blev lite snett. Mitt fel. Vackert ändå. |
| 4:42 | sak | du | Den röda kvarnen drar mer än vinden orkar. Solen får hjälpa till. |
| 4:42 | röst | du | Den röda kvarnen drar mer än vinden orkar. Solen får hjälpa till. · STORY |
| 4:48 | klar | du | Den röda kvarnen drar mer än vinden orkar. Solen får hjälpa till. |
| 4:48 | sak | du | Göran snor mina nyckelringar. Han får ett eget ställe, så lämnar han dem i fred. |
| 4:48 | pil |  | Ge Göran ett eget ställe |
| 4:48 | notis | tanke | 💭 Göran snor mina nyckelringar. Han får ett eget ställe, så lämnar han dem i fred. |
| 4:48 | röst | du | Göran snor mina nyckelringar. Han får ett eget ställe, så lämnar han dem i fred. · MÅL |
| 4:48 | nick |  | nick:63 |
| 4:51 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 4:52 | händelse | kopt | sak=fagelskramma |
| 4:52 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 4:52 | butiksbubbla | ali | Min Fågelskrämma… AI:n och jag gjorde den i natt. Printa den. Snälla. |
| 4:54 | väntar | ali | AI:n och jag gjorde den i natt. Printa den. Snälla. |
| 4:56 | klar | du | Göran snor mina nyckelringar. Han får ett eget ställe, så lämnar han dem i fred. |
| 4:56 | sak | ali | AI:n och jag gjorde den i natt. Printa den. Snälla. |
| 4:56 | röst | ali | AI:n och jag gjorde den i natt. Printa den. Snälla. · STORY |
| 5:01 | händelse | printStart | sak=fagelskramma |
| 5:01 | klar | ali | AI:n och jag gjorde den i natt. Printa den. Snälla. |
| 5:06 | väntar | mamma | Jag har bäddat i ditt rum. Ifall. |
| 5:06 | händelse | printKlar | sak=fagelskramma n=1 |
| 5:06 | händelse | tagitUrPrint | sak=fagelskramma n=1 |
| 5:09 | sak | foto | Röd fabrik |
| 5:09 | foto | du | Röd fabrik |
| 5:12 | klar | foto | Röd fabrik |
| 5:13 | händelse | placerat | sak=fagelskramma |
| 5:13 | händelse | malKlart | id=goran6 del=Dag 6 – Röd PETG nasta=r7-bygg-petg-skrivaren |
| 5:13 | bekräftelse | du | plats |
| 5:13 | kvittens | du | Göran har ett hem nu. Bättre än jag hade för en vecka sen. |
| 5:13 | väntar | du | Göran har ett hem nu. Bättre än jag hade för en vecka sen. |
| 5:13 | väntar | du | Röd plast kräver en egen skrivare. Den vanliga vill inte. |
| 5:13 | MÅL |  | Bygg PETG-skrivaren |
| 5:13 | sak | du | Göran har ett hem nu. Bättre än jag hade för en vecka sen. |
| 5:13 | röst | du | Göran har ett hem nu. Bättre än jag hade för en vecka sen. · STORY |
| 5:15 | målruta |  | Bygg PETG-skrivaren |
| 5:17 | klar | du | Göran har ett hem nu. Bättre än jag hade för en vecka sen. |
| 5:18 | sak | du | Röd plast kräver en egen skrivare. Den vanliga vill inte. |
| 5:18 | pil |  | Bygg PETG-skrivaren |
| 5:18 | notis | tanke | 💭 Röd plast kräver en egen skrivare. Den vanliga vill inte. |
| 5:18 | röst | du | Röd plast kräver en egen skrivare. Den vanliga vill inte. · MÅL |
| 5:19 | nick |  | nick:64 |
| 5:20 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 5:22 | skratt | du | Alis dyr-pling |
| 5:22 | struken | info:guld | 3D-modell köpt – printa PETG-skrivare |
| 5:22 | händelse | kopt | sak=skrivarepetg |
| 5:22 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 5:24 | klar | du | Röd plast kräver en egen skrivare. Den vanliga vill inte. |
| 5:41 | sak | du | Två fabriker. Och det blir fler. |
| 5:41 | notis | tanke | 💭 Två fabriker. Och det blir fler. |
| 5:41 | röst | du | Två fabriker. Och det blir fler. · STORY |
| 5:44 | klar | du | Två fabriker. Och det blir fler. |
| 5:49 | händelse | printStart | sak=byggsats:skrivarepetg |
| 5:53 | toast | bra | Del 1 av 5 klar |
| 5:54 | sak | rolf | Ja hitta ett helt lass på återvinningen. Ingen ville ha dôm. Nu ä dôm dina. MVH ROLF​ |
| 5:54 | sms | rolf | Ja hitta ett helt lass på återvinningen. Ingen ville ha dôm. Nu ä dôm dina. MVH ROLF​ |
| 5:54 | sms-bubbla | rolf | Ja hitta ett helt lass på återvinningen. Ingen ville ha dôm. Nu ä dôm dina. MVH ROLF​ |
| 5:54 | röst | rolf | Ja hitta ett helt lass på återvinningen. Ingen ville ha dôm. Nu ä dôm dina. MVH ROLF​ · STORY |
| 5:58 | toast | bra | Del 2 av 5 klar |
| 6:01 | klar | rolf | Ja hitta ett helt lass på återvinningen. Ingen ville ha dôm. Nu ä dôm dina. MVH ROLF​ |
| 6:02 | toast | bra | Del 3 av 5 klar |
| 6:04 | tanke | du | Göran tycker om fågelskrämman. Han sitter på den. |
| 6:04 | väntar | du | Göran tycker om fågelskrämman. Han sitter på den. |
| 6:04 | sak | du | Göran tycker om fågelskrämman. Han sitter på den. |
| 6:04 | notis | tanke | 💭 Göran tycker om fågelskrämman. Han sitter på den. |
| 6:04 | röst | du | Göran tycker om fågelskrämman. Han sitter på den. · REAKTION |
| 6:07 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 6:10 | klar | du | Göran tycker om fågelskrämman. Han sitter på den. |
| 6:13 | väntar | värld:TUUT! Tjena! | TUUT! Tjena! |
| 6:17 | väntar | värld:Mjau. | Mjau. |
| 6:18 | väntar | mamma | Jag har städat ditt rum. Det tog tre dagar. Jag hittade en macka från i somras. En macka. |
| 6:21 | sak | värld:TUUT! Tjena! | TUUT! Tjena! |
| 6:21 | bubbla |  | TUUT! Tjena! |
| 6:22 | toast | bra | Del 4 av 5 klar |
| 6:24 | klar | värld:TUUT! Tjena! | TUUT! Tjena! |
| 6:26 | händelse | printKlar | sak=byggsats:skrivarepetg n=1 |
| 6:32 | sak | värld:Mjau. | Mjau. |
| 6:32 | bubbla |  | Mjau. |
| 6:33 | händelse | tagitUrPrint | sak=byggsats:skrivarepetg n=1 |
| 6:34 | klar | värld:Mjau. | Mjau. |
| 6:36 | händelse | placerat | sak=skrivarepetg |
| 6:36 | händelse | malKlart | id=r7-bygg-petg-skrivaren del=Dag 7 – PETG-skrivaren nasta=r7-printa-designvas-rod |
| 6:36 | bekräftelse | du | plats |
| 6:36 | väntar | du | En vas. Röd. Design. Ali kommer att låtsas att han förstår den. |
| 6:36 | MÅL |  | Printa en designvas i röd PETG |
| 6:38 | sak | du | En vas. Röd. Design. Ali kommer att låtsas att han förstår den. |
| 6:38 | målruta |  | Printa en designvas i röd PETG |
| 6:38 | pil |  | Printa en designvas i röd PETG |
| 6:38 | notis | tanke | 💭 En vas. Röd. Design. Ali kommer att låtsas att han förstår den. |
| 6:38 | röst | du | En vas. Röd. Design. Ali kommer att låtsas att han förstår den. · MÅL |
| 6:40 | kvittens-bock |  | ✓ Bygg PETG-skrivaren |
| 6:45 | klar | du | En vas. Röd. Design. Ali kommer att låtsas att han förstår den. |
| 6:50 | händelse | printStart | sak=pall |
| 6:53 | sak | mamma | Jag har skickat virkade grytvantar (lila) med Rolf. Den ligger i postlådan. |
| 6:53 | sms | mamma | Jag har skickat virkade grytvantar (lila) med Rolf. Den ligger i postlådan. |
| 6:53 | sms-bubbla | mamma | Jag har skickat virkade grytvantar (lila) med Rolf. Den ligger i postlådan. |
| 6:53 | röst | mamma | Jag har skickat virkade grytvantar (lila) med Rolf. Den ligger i postlådan. · STORY |
| 6:55 | händelse | printKlar | sak=pall n=10 |
| 6:55 | händelse | tagitUrPrint | sak=pall n=1 |
| 6:58 | händelse | printStart | sak=pall |
| 7:00 | klar | mamma | Jag har skickat virkade grytvantar (lila) med Rolf. Den ligger i postlådan. |
| 7:03 | händelse | printKlar | sak=pall n=11 |
| 7:03 | händelse | tagitUrPrint | sak=pall n=1 |
| 7:16 | sak | mamma | Jag har städat ditt rum. Det tog tre dagar. Jag hittade en macka från i somras. En macka. |
| 7:16 | sms | mamma | Jag har städat ditt rum. Det tog tre dagar. Jag hittade en macka från i somras. En macka. |
| 7:16 | sms-bubbla | mamma | Jag har städat ditt rum. Det tog tre dagar. Jag hittade en macka från i somras. En macka. |
| 7:16 | röst | mamma | Jag har städat ditt rum. Det tog tre dagar. Jag hittade en macka från i somras. En macka. · SMÅPRAT |
| 7:17 | webb | du | packade 2 pall |
| 7:23 | klar | mamma | Jag har städat ditt rum. Det tog tre dagar. Jag hittade en macka från i somras. En macka. |
| 7:26 | väntar | bror | Tips: håll munstycket rent. Och prata med skrivaren ibland. Inte för att den hör. Men ändå. |
| 7:32 | struken | info:bra | 📦 Paketet till Majvor i Nässjö ligger i postlådan – Rolf tar det till posten |
| 7:34 | väntar | rolf | ÖJ! Ja kör dina paket till posten. Ja ska ändå förbi. Ja tar en tia för bensinen. Eller för Kajsas lax. Mest för laxen. /Rolf​ |
| 7:34 | sak | rolf | ÖJ! Ja kör dina paket till posten. Ja ska ändå förbi. Ja tar en tia för bensinen. Eller för Kajsas lax. Mest för laxen. /Rolf​ |
| 7:34 | notis |  | ✉️ ÖJ! Ja kör dina paket till posten. Ja ska ändå förbi. Ja tar en tia för bensinen. Eller för Kajsas lax. Mest för laxen. /Rolf​ |
| 7:34 | röst | rolf | ÖJ! Ja kör dina paket till posten. Ja ska ändå förbi. Ja tar en tia för bensinen. Eller för Kajsas lax. Mest för laxen. /Rolf​ · STORY |
| 7:36 | händelse | printStart | sak=kruka |
| 7:38 | händelse | printStart | sak=kruka |
| 7:39 | händelse | printKlar | sak=kruka n=8 |
| 7:39 | väntar | notis:☀️ Skrivaren går på solkraft – du behöve | ☀️ Skrivaren går på solkraft – du behöver inte trampa! |
| 7:43 | händelse | printKlar | sak=kruka n=9 |
| 7:43 | händelse | tagitUrPrint | sak=kruka n=1 |
| 7:44 | händelse | tagitUrPrint | sak=kruka n=1 |
| 7:45 | klar | rolf | ÖJ! Ja kör dina paket till posten. Ja ska ändå förbi. Ja tar en tia för bensinen. Eller för Kajsas lax. Mest för laxen. /Rolf​ |
| 7:47 | skratt | du | falsk tuta |
| 7:50 | väntar | ali | Den köper jag. Ge hit. |
| 7:50 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 7:52 | händelse | salt | sak=kruka n=1 |
| 7:52 | aliSalt | ali | 105 |
| 7:52 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 7:52 | händelse | salt | sak=kruka n=1 |
| 7:52 | aliSalt | ali | 100 |
| 7:52 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 7:52 | händelse | salt | sak=fynd2 n=1 |
| 7:52 | aliSalt | ali | 80 |
| 7:52 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 7:52 | händelse | salt | sak=fynd2 n=1 |
| 7:52 | aliSalt | ali | 76 |
| 7:52 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 7:52 | händelse | salt | sak=fynd2 n=1 |
| 7:52 | aliSalt | ali | 72 |
| 7:52 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 7:53 | händelse | salt | sak=byggsats:petgkvarn n=1 |
| 7:53 | aliSalt | ali | 180 |
| 7:53 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 7:53 | sak | notis:☀️ Skrivaren går på solkraft – du behöve | ☀️ Skrivaren går på solkraft – du behöver inte trampa! |
| 7:53 | notis | guld | ☀️ Skrivaren går på solkraft – du behöver inte trampa! |
| 7:54 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 7:55 | händelse | kopt | sak=n2_vas |
| 7:55 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 7:55 | röst | ali | Röd. AI:n sa att röd säljer. AI:n har aldrig sålt något. Men okej. · STORY |
| 7:55 | butiksbubbla | ali | Designvas i röd PETG. Röd. AI:n sa att röd säljer. AI:n har aldrig sålt något. Men okej. |
| 7:56 | klar | notis:☀️ Skrivaren går på solkraft – du behöve | ☀️ Skrivaren går på solkraft – du behöver inte trampa! |
| 8:05 | händelse | printStart | sak=n2_vas |
| 8:05 | toast | bra | 🔗 Slangen kopplad |
| 8:08 | sak | ali | Den köper jag. Ge hit. |
| 8:08 | röst | ali | Den köper jag. Ge hit. · REAKTION |
| 8:08 | upprepning | ali | Den köper jag. Ge hit. |
| 8:08 | händelse | printKlar | sak=n2_vas n=1 |
| 8:08 | händelse | malKlart | id=r7-printa-designvas-rod del=Dag 7 – PETG-skrivaren nasta=r7-salj-designvasen |
| 8:08 | bekräftelse | du | plats |
| 8:08 | väntar | du | Vasen till Ali. Han betalar mer för röd. |
| 8:08 | målruta |  | Sälj designvasen |
| 8:08 | MÅL |  | Sälj designvasen |
| 8:08 | händelse | tagitUrPrint | sak=n2_vas n=1 |
| 8:10 | väntar | rolf | Kajsa la en död mus på min kudde. De e kärlek. Hon får lax ikväll. /R |
| 8:10 | klar | ali | Den köper jag. Ge hit. |
| 8:11 | sak | du | Vasen till Ali. Han betalar mer för röd. |
| 8:11 | pil |  | Sälj designvasen |
| 8:11 | notis | tanke | 💭 Vasen till Ali. Han betalar mer för röd. |
| 8:11 | röst | du | Vasen till Ali. Han betalar mer för röd. · MÅL |
| 8:12 | kvittens-bock |  | ✓ Printa en designvas i röd PETG |
| 8:15 | klar | du | Vasen till Ali. Han betalar mer för röd. |
| 8:24 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 8:25 | händelse | salt | sak=lampskarm n=1 |
| 8:25 | händelse | salt | sak=n2_vas n=1 |
| 8:25 | aliSalt | ali | 1110 |
| 8:25 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 8:26 | händelse | malKlart | id=r7-salj-designvasen del=Dag 7 – PETG-skrivaren nasta=saljlada |
| 8:26 | bekräftelse | du | plats |
| 8:26 | väntar | du | En säljlåda. Då slipper jag springa till Ali med varje vas. |
| 8:26 | målruta |  | Bygg säljlådan vid samlingsplatsen |
| 8:27 | MÅL |  | Bygg säljlådan vid samlingsplatsen |
| 8:27 | sak | du | En säljlåda. Då slipper jag springa till Ali med varje vas. |
| 8:27 | pil |  | Bygg säljlådan vid samlingsplatsen |
| 8:27 | notis | tanke | 💭 En säljlåda. Då slipper jag springa till Ali med varje vas. |
| 8:27 | röst | du | En säljlåda. Då slipper jag springa till Ali med varje vas. · MÅL |
| 8:30 | kvittens-bock |  | ✓ Sälj designvasen |
| 8:33 | klar | du | En säljlåda. Då slipper jag springa till Ali med varje vas. |
| 8:35 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 8:36 | struken | info:guld | 3D-modell köpt – printa säljlåda |
| 8:36 | händelse | kopt | sak=saljlada |
| 8:36 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 8:53 | upplåst | mala | turbomotor |
| 8:53 | brott | UPPLÅST | turbomotor (mala 152 av 6) |
| 8:53 | händelse | upplast | id=turbomotor flask=mala |
| 8:53 | paket |  | tanke → sms |
| 8:53 | tanke | du | Kvarnen hinner inte med. Den behöver något… större. |
| 8:53 | väntar | du | Kvarnen hinner inte med. Den behöver något… större. |
| 8:53 | väntar | ali | Ali här. 🔥 TURBOMOTOR. Jag skrev ”turbo, röda ränder, snabbare än min pappa” till AI:n. Den förstod. Ingen annan förstår. Röda ränder. För farten. Det är vetenskap. |
| 8:54 | sak | du | Kvarnen hinner inte med. Den behöver något… större. |
| 8:54 | notis | tanke | 💭 Kvarnen hinner inte med. Den behöver något… större. |
| 8:54 | röst | du | Kvarnen hinner inte med. Den behöver något… större. · STORY |
| 8:59 | klar | du | Kvarnen hinner inte med. Den behöver något… större. |
| 9:01 | händelse | printStart | sak=byggsats:saljlada |
| 9:01 | brott | TRÄNGSEL 2 | "Ali här. 🔥 TURBOMOTOR. Jag skrev ”turbo, röda rän" 2.0 s efter förra meddelandet, 34.4 s efter en klar uppgift |
| 9:01 | sak | ali | Ali här. 🔥 TURBOMOTOR. Jag skrev ”turbo, röda ränder, snabbare än min pappa” till AI:n. Den förstod. Ingen annan förstår. Röda ränder. För farten. Det är vetenskap. |
| 9:01 | sms | ali | Ali här. 🔥 TURBOMOTOR. Jag skrev ”turbo, röda ränder, snabbare än min pappa” till AI:n. Den förstod. Ingen annan förstår. Röda ränder. För farten. Det är vetenskap. |
| 9:01 | sms-bubbla | ali | Ali här. 🔥 TURBOMOTOR. Jag skrev ”turbo, röda ränder, snabbare än min pappa” till AI:n. Den förstod. Ingen annan förstår. Röda ränder. För farten. Det är vetenskap. |
| 9:01 | röst | ali | Ali här. 🔥 TURBOMOTOR. Jag skrev ”turbo, röda ränder, snabbare än min pappa” till AI:n. Den förstod. Ingen annan förstår. Röda ränder. För farten. Det är vetenskap. · STORY |
| 9:04 | toast | bra | Del 1 av 2 klar |
| 9:07 | händelse | printKlar | sak=byggsats:saljlada n=1 |
| 9:07 | händelse | tagitUrPrint | sak=byggsats:saljlada n=1 |
| 9:11 | händelse | placerat | sak=saljlada |
| 9:11 | paket |  | sms |
| 9:11 | väntar | rolf | Tjo. Lådan vid fabriken! Ali kömmer mä sin lilla bil varje morron. Ja vinkar. Han vinkar int. /R​ |
| 9:11 | händelse | malKlart | id=saljlada del=Dag 7 – PETG-skrivaren nasta=saljlada3 |
| 9:11 | bekräftelse | du | plats |
| 9:11 | kvittens | du | Jag hämtar varje morgon. Du lägger i, jag betalar. |
| 9:11 | väntar | ali | Jag hämtar varje morgon. Du lägger i, jag betalar. |
| 9:11 | väntar | du | Vaserna i lådan. Ali hämtar själv. |
| 9:12 | MÅL |  | Lägg 3 vaser i säljlådan · 0/3 |
| 9:14 | målruta |  | Lägg 3 vaser i säljlådan · 0/3 |
| 9:18 | klar | ali | Ali här. 🔥 TURBOMOTOR. Jag skrev ”turbo, röda ränder, snabbare än min pappa” till AI:n. Den förstod. Ingen annan förstår. Röda ränder. För farten. Det är vetenskap. |
| 9:18 | sak | ali | Jag hämtar varje morgon. Du lägger i, jag betalar. |
| 9:18 | röst | ali | Jag hämtar varje morgon. Du lägger i, jag betalar. · STORY |
| 9:24 | klar | ali | Jag hämtar varje morgon. Du lägger i, jag betalar. |
| 9:24 | sak | du | Vaserna i lådan. Ali hämtar själv. |
| 9:24 | pil |  | Lägg 3 vaser i säljlådan · 0/3 |
| 9:24 | notis | tanke | 💭 Vaserna i lådan. Ali hämtar själv. |
| 9:24 | röst | du | Vaserna i lådan. Ali hämtar själv. · MÅL |
| 9:24 | nick |  | nick:68 |
| 9:28 | händelse | printStart | sak=n2_vas |
| 9:29 | klar | du | Vaserna i lådan. Ali hämtar själv. |
| 9:32 | händelse | printKlar | sak=n2_vas n=2 |
| 9:32 | händelse | tagitUrPrint | sak=n2_vas n=1 |
| 9:50 | sak | rolf | Tjo. Lådan vid fabriken! Ali kömmer mä sin lilla bil varje morron. Ja vinkar. Han vinkar int. /R​ |
| 9:50 | sms | rolf | Tjo. Lådan vid fabriken! Ali kömmer mä sin lilla bil varje morron. Ja vinkar. Han vinkar int. /R​ |
| 9:50 | sms-bubbla | rolf | Tjo. Lådan vid fabriken! Ali kömmer mä sin lilla bil varje morron. Ja vinkar. Han vinkar int. /R​ |
| 9:50 | röst | rolf | Tjo. Lådan vid fabriken! Ali kömmer mä sin lilla bil varje morron. Ja vinkar. Han vinkar int. /R​ · STORY |
| 9:50 | tanke | du | 1 sak i lådan · Ali hämtar i morgon bitti |
| 9:50 | väntar | du | 1 sak i lådan · Ali hämtar i morgon bitti |
| 9:57 | kvitto-visas | du | 1 sak i lådan · Ali hämtar i morgon bitti |
| 9:57 | sak | du | 1 sak i lådan · Ali hämtar i morgon bitti |
| 9:57 | notis | tanke | 💭 1 sak i lådan · Ali hämtar i morgon bitti |
| 10:03 | klar | rolf | Tjo. Lådan vid fabriken! Ali kömmer mä sin lilla bil varje morron. Ja vinkar. Han vinkar int. /R​ |
| 10:03 | skratt | du | falsk tuta |
| 10:03 | väntar | värld:TUUT! Hej grannen! | TUUT! Hej grannen! |
| 10:09 | händelse | printStart | sak=n2_vas |
| 10:11 | sak | värld:TUUT! Hej grannen! | TUUT! Hej grannen! |
| 10:11 | bubbla |  | TUUT! Hej grannen! |
| 10:12 | händelse | printKlar | sak=n2_vas n=3 |
| 10:13 | händelse | tagitUrPrint | sak=n2_vas n=1 |
| 10:14 | klar | värld:TUUT! Hej grannen! | TUUT! Hej grannen! |
| 10:34 | tanke | du | 2 saker i lådan · Ali hämtar i morgon bitti |
| 10:34 | väntar | du | 2 saker i lådan · Ali hämtar i morgon bitti |
| 10:40 | sak | du | 2 saker i lådan · Ali hämtar i morgon bitti |
| 10:40 | notis | tanke | 💭 2 saker i lådan · Ali hämtar i morgon bitti |
| 10:40 | röst | du | 2 saker i lådan · Ali hämtar i morgon bitti · REAKTION |
| 10:44 | klar | du | 2 saker i lådan · Ali hämtar i morgon bitti |
| 10:50 | händelse | printStart | sak=n2_vas |
| 10:53 | händelse | printKlar | sak=n2_vas n=4 |
| 10:53 | händelse | tagitUrPrint | sak=n2_vas n=1 |
| 11:13 | tanke | du | 3 saker i lådan · Ali hämtar i morgon bitti |
| 11:13 | väntar | du | 3 saker i lådan · Ali hämtar i morgon bitti |
| 11:19 | sak | du | 3 saker i lådan · Ali hämtar i morgon bitti |
| 11:19 | notis | tanke | 💭 3 saker i lådan · Ali hämtar i morgon bitti |
| 11:19 | röst | du | 3 saker i lådan · Ali hämtar i morgon bitti · REAKTION |
| 11:19 | händelse | malKlart | id=saljlada3 del=Dag 7 – PETG-skrivaren nasta=sov7 |
| 11:19 | paket |  | lapp |
| 11:19 | väntar | du | Nu vet en mås att jag bor HÄR. Pengarna är borta. Med en mås. |
| 11:19 | bekräftelse | du | plats |
| 11:19 | MÅL |  | Sov när du vill |
| 11:22 | målruta |  | Sov när du vill |
| 11:23 | klar | du | 3 saker i lådan · Ali hämtar i morgon bitti |
| 11:23 | sak | du | (nytt mål i rutan) |
| 11:23 | pil |  | Sov när du vill |
| 11:23 | klar | du | (nytt mål i rutan) |
| 11:23 | nick |  | nick:69 |
| 11:23 | kvittens-bock |  | ✓ Lägg 3 vaser i säljlådan · 3/3 |
| 11:26 | väntar | notis:🌇 Klockan är 21. Ali slår igen luckan.  | 🌇 Klockan är 21. Ali slår igen luckan. Dagens jobb är klart – gå in i skjulet och sov i sängen. |
| 11:28 | autosparning | du | natt 14 december |
| 11:28 | struken | mamma | Jag har bäddat i ditt rum. Ifall. |
| 11:28 | struken | bror | Tips: håll munstycket rent. Och prata med skrivaren ibland. Inte för att den hör. Men ändå. |
| 11:28 | struken | rolf | Kajsa la en död mus på min kudde. De e kärlek. Hon får lax ikväll. /R |
| 11:30 | händelse | salt | sak=n2_vas n=3 |
| 11:30 | aliSalt | ali | 2141 |
| 11:30 | webbBetalt | du | 422 |
| 11:30 | nattkort | du | 🌙 10 dagar kvar. God natt. zzz… Nu vet en mås att jag bor HÄR. Pengarna är borta. Med en mås. DAGENS PRINTAR Designvas i röd PETG × 4 Pall × 2 Blomkruka × 2 Få |

<details><summary>Botens handlingar dag 5</summary>

- 0:00 — dag 5 börjar — (1539 kr)
- 0:11 popup: "FORTSÄTT" (1539 kr)
- 0:19 gå till Rolfs postlåda (28 m) (1539 kr)
- 0:25 panel: "Rolfs postlåda
Det här låg i l" (1939 kr)
- 0:35 panel: "Rolfs postlåda
Det här låg i l" (1939 kr)
- 1:13 gå till pappa (20 m) (1939 kr)
- 2:27 gå till Ali (12 m) (1939 kr)
- 2:27 öppnar Alis butik – köpa röda kvarnen (petg) (1939 kr)
- 2:30 köper petgkvarn för 420 kr (1519 kr)
- 2:36 gå till skrivaren (24 m) (1519 kr)
- 2:38 printar Röda kvarnen (PETG) (3 delar) (1519 kr)
- 2:58 plockar 5 skräp på tippen (bär max 16) (1519 kr)
- 3:01 gå till kvarnen (12 m) (1519 kr)
- 3:09 gå till skrivaren (5 m) (1519 kr)
- 3:09 tar ut 1 st ur skrivaren (1519 kr)
- 3:10 gå till platsen för röda kvarnen (petg) (5 m) (1519 kr)
- 3:11 ställer ut röda kvarnen (petg) (1519 kr)
- 3:28 gå till säckkärran i högen (19 m) (1519 kr)
- 3:41 gå till Rolfs postlåda (20 m) (1519 kr)
- 3:45 panel: "Rolfs postlåda
Det här låg i l" (1519 kr)
- 3:47 gå till en tunna (5 m) (1519 kr)
- 3:50 gå till PETG-kvarnen (11 m) (1519 kr)
- 3:50 tömmer det tunga i PETG-kvarnen (1519 kr)
- 4:07 gå till Ali (33 m) (1519 kr)
- 4:07 öppnar Alis butik – köpa solpanel (1519 kr)
- 4:10 köper sol för 940 kr (579 kr)
- 4:16 gå till skrivaren (24 m) (579 kr)
- 4:17 printar Solpanel (3 delar) (579 kr)
- 4:29 tar ut 1 st ur skrivaren (579 kr)
- 4:33 gå till platsen för solpanel (20 m) (579 kr)
- 4:34 ställer ut solpanel (579 kr)
- 4:51 gå till Ali (18 m) (579 kr)
- 4:51 öppnar Alis butik – köpa receptet fågelskrämma (579 kr)
- 4:53 köper fagelskramma för 10 kr (569 kr)
- 4:59 gå till skrivaren (24 m) (569 kr)
- 5:01 printar Fågelskrämma (569 kr)
- 5:07 tar ut 1 st ur skrivaren (569 kr)
- 5:11 gå till platsen för fågelskrämma (21 m) (569 kr)
- 5:13 ställer ut fågelskrämma (569 kr)
- 5:20 gå till Ali (14 m) (569 kr)
- 5:20 öppnar Alis butik – köpa petg-skrivare (569 kr)
- 5:23 köper skrivarepetg för 530 kr (39 kr)
- 5:39 plockar 9 skräp på tippen (bär max 16) (39 kr)
- 5:41 gå till kvarnen (12 m) (39 kr)
- 5:47 gå till skrivaren (5 m) (39 kr)
- 5:49 printar PETG-skrivare (5 delar) (39 kr)
- 6:18 plockar 7 skräp på tippen (bär max 16) (39 kr)
- 6:20 gå till kvarnen (13 m) (39 kr)
- 6:33 gå till skrivaren (5 m) (39 kr)
- 6:34 tar ut 1 st ur skrivaren (39 kr)
- 6:35 gå till platsen för petg-skrivare (4 m) (39 kr)
- 6:36 ställer ut petg-skrivare (39 kr)
- 6:48 gå till skrivaren (3 m) (39 kr)
- 6:50 printar Pall (39 kr)
- 6:56 tar ut 1 st ur skrivaren (39 kr)
- 6:58 printar Pall (39 kr)
- 7:04 tar ut 1 st ur skrivaren (39 kr)
- 7:08 gå till datorn (20 m) (39 kr)
- 7:16 panel: "Webbshopen · Soptippsvägen 1
B" (39 kr)
- 7:25 panel: "Webbshopen · Soptippsvägen 1
B" (39 kr)
- 7:32 gå till Rolfs postlåda (paket) (29 m) (39 kr)
- 7:33 webbshop: 1 paket i postlådan (39 kr)
- 7:33 tjänar pengar till receptet designvas i röd petg: 39/210 kr → printar blomkruka (105 kr) (39 kr)
- 7:34 gå till skrivaren (8 m) (39 kr)
- 7:36 printar Blomkruka (39 kr)
- 7:38 printar Blomkruka (39 kr)
- 7:44 tar ut 1 st ur skrivaren (39 kr)
- 7:44 tar ut 1 st ur skrivaren (39 kr)
- 7:50 gå till Ali (26 m) (39 kr)
- 7:50 öppnar Alis butik – sälja (39 kr)
- 7:53 säljer hos Ali: +613 kr (652 kr)
- 7:54 öppnar Alis butik – köpa receptet designvas i röd petg (652 kr)
- 7:56 köper n2_vas för 210 kr (442 kr)
- 8:03 gå till skrivaren (29 m) (442 kr)
- 8:05 printar Designvas i röd PETG (442 kr)
- 8:09 tar ut 1 st ur skrivaren (442 kr)
- 8:24 gå till Ali (29 m) (442 kr)
- 8:24 öppnar Alis butik – sälja vasen (442 kr)
- 8:26 säljer hos Ali: +1110 kr (1552 kr)
- 8:35 öppnar Alis butik – köpa säljlåda (1552 kr)
- 8:37 köper saljlada för 140 kr (1412 kr)
- 8:50 plockar 5 skräp på tippen (bär max 16) (1412 kr)
- 8:53 gå till kvarnen (13 m) (1412 kr)
- 8:59 gå till skrivaren (5 m) (1412 kr)
- 9:01 printar Säljlåda (2 delar) (1412 kr)
- 9:08 tar ut 1 st ur skrivaren (1412 kr)
- 9:10 gå till platsen för säljlåda (11 m) (1412 kr)
- 9:11 ställer ut säljlåda (1412 kr)
- 9:27 gå till skrivaren (13 m) (1412 kr)
- 9:28 printar Designvas i röd PETG (1412 kr)
- 9:32 tar ut 1 st ur skrivaren (1412 kr)
- 9:35 gå till säljlådan (10 m) (1412 kr)
- 9:42 panel: "Säljlådan
0 saker i lådan
Lägg" (1412 kr)
- 9:50 panel: "Säljlådan
0 saker i lådan
Lägg" (1412 kr)
- 9:57 panel: "Säljlådan
1 sak i lådan
Lägg i" (1412 kr)
- 9:57 lägger vaserna i säljlådan (DA) (1412 kr)
- 10:08 gå till skrivaren (10 m) (1412 kr)
- 10:09 printar Designvas i röd PETG (1412 kr)
- 10:13 tar ut 1 st ur skrivaren (1412 kr)
- 10:19 gå till säljlådan (10 m) (1412 kr)
- 10:25 panel: "Säljlådan
1 sak i lådan
Lägg i" (1412 kr)
- 10:33 panel: "Säljlådan
1 sak i lådan
Lägg i" (1412 kr)
- 10:40 panel: "Säljlådan
2 saker i lådan
Lägg" (1412 kr)
- 10:41 lägger vaserna i säljlådan (DA) (1412 kr)
- 10:48 gå till skrivaren (10 m) (1412 kr)
- 10:50 printar Designvas i röd PETG (1412 kr)
- 10:54 tar ut 1 st ur skrivaren (1412 kr)
- 10:57 gå till säljlådan (10 m) (1412 kr)
- 11:04 panel: "Säljlådan
2 saker i lådan
Lägg" (1412 kr)
- 11:12 panel: "Säljlådan
2 saker i lådan
Lägg" (1412 kr)
- 11:19 panel: "Säljlådan
3 saker i lådan
Lägg" (1412 kr)
- 11:20 lägger vaserna i säljlådan (DA) (1412 kr)
- 11:28 gå till sängen (13 m) (1412 kr)

</details>

## Dag 6

| Tid | Källa | Vem | Text |
|---|---|---|---|
| 11:30 | vara | ali | n2_vas |
| 11:30 | händelse | malKlart | id=sov7 del=Dag 7 – PETG-skrivaren nasta=r8-bygg-skrivare-l |
| 11:30 | bekräftelse | du | plats |
| 11:30 | MÅL |  | Köp Skrivare L |
| 11:30 | upplåst | skrivare | skrivare3 |
| 11:30 | brott | UPPLÅST | skrivare3 (skrivare 538 av 60, sparat ihop) |
| 11:30 | händelse | upplast | id=skrivare3 flask=skrivare |
| 11:30 | paket |  | sms |
| 11:30 | väntar | ali | Ali här. Skrivare L. En meter byggvolym. Jag bad AI:n om något stort. Den gjorde något ENORMT. Den är större än min butik. Nästan. |
| 11:32 | autosparning | du | morgon 15 december |
| 0:01 | händelse | dagenBorjar | dag=6 |
| 0:01 | meddelande | du | 9 dagar till jul. Utan en större skrivare hinner jag inte med kvarnen. |
| 0:01 | dagbokkort | du | Skrivare L. · 9 dagar till jul. Utan en större skrivare hinner jag inte med kvarnen. |
| 0:01 | röst | du | 9 dagar till jul. Skrivare L. Utan en större skrivare hinner jag inte med kvarnen. · STORY |
| 0:03 | paket |  | sms |
| 0:03 | väntar | rolf | Rolf hä.. Ja har en grej. Lite känslig. Ja la en lapp i postlådan. Läs den o bränn den sen. /R​ |
| 0:09 | väntar | notis:morgon | Webbshopen: 1 paket i natt · +422 kr · Säljlådan: 3 st i natt · +2 141 kr · Ali vill ha idag: Designvas i röd PETG · +50 % |
| 0:09 | händelse | morgonkortStangt | dag=6 |
| 0:09 | paket |  | sms |
| 0:09 | struken | ali | Ali här. Skrivare L. En meter byggvolym. Jag bad AI:n om något stort. Den gjorde något ENORMT. Den är större än min butik. Nästan. |
| 0:09 | väntar | du | Skrivarna hinner inte med kvarnen. Jag bygger Skrivare L. |
| 0:11 | målruta |  | Köp Skrivare L |
| 0:14 | sak | du | Skrivarna hinner inte med kvarnen. Jag bygger Skrivare L. |
| 0:14 | pil |  | Köp Skrivare L |
| 0:14 | notis | tanke | 💭 Skrivarna hinner inte med kvarnen. Jag bygger Skrivare L. |
| 0:14 | röst | du | Skrivarna hinner inte med kvarnen. Jag bygger Skrivare L. · MÅL |
| 0:14 | nick |  | nick:70 |
| 0:19 | klar | du | Skrivarna hinner inte med kvarnen. Jag bygger Skrivare L. |
| 0:19 | sak | notis:morgon | Webbshopen: 1 paket i natt · +422 kr · Säljlådan: 3 st i natt · +2 141 kr · Ali vill ha idag: Designvas i röd PETG · +50 % |
| 0:19 | notis |  | 1 paket i natt · +422 kr |
| 0:19 | notis |  | 3 st i natt · +2 141 kr |
| 0:19 | notis |  | Designvas i röd PETG · +50 % |
| 0:25 | klar | notis:morgon | Webbshopen: 1 paket i natt · +422 kr · Säljlådan: 3 st i natt · +2 141 kr · Ali vill ha idag: Designvas i röd PETG · +50 % |
| 0:33 | sak | du | Nu vet en mås att jag bor HÄR. Pengarna är borta. Med en mås. |
| 0:33 | kvallsrad | du | Nu vet en mås att jag bor HÄR. Pengarna är borta. Med en mås. |
| 0:34 | klar | du | Nu vet en mås att jag bor HÄR. Pengarna är borta. Med en mås. |
| 0:36 | struken | notis:🌇 Klockan är 21. Ali slår igen luckan.  | 🌇 Klockan är 21. Ali slår igen luckan. Dagens jobb är klart – gå in i skjulet och sov i sängen. |
| 0:40 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 0:40 | röst | ali | Du säljer på nätet nu? Bra. Ritningarna köper du här. · STORY |
| 0:40 | butiksbubbla | ali | Du säljer på nätet nu? Bra. Ritningarna köper du här. |
| 0:42 | skratt | du | Alis dyr-pling |
| 0:42 | struken | info:guld | 3D-modell köpt – printa skrivare L |
| 0:42 | händelse | kopt | sak=skrivare3 |
| 0:42 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 0:48 | struken | ali | Ali här. Skrivare L. En meter byggvolym. Jag bad AI:n om något stort. Den gjorde något ENORMT. Den är större än min butik. Nästan. |
| 0:50 | händelse | printStart | sak=byggsats:skrivare3 |
| 0:52 | sak | rolf | Rolf hä.. Ja har en grej. Lite känslig. Ja la en lapp i postlådan. Läs den o bränn den sen. /R​ |
| 0:52 | sms | rolf | Rolf hä.. Ja har en grej. Lite känslig. Ja la en lapp i postlådan. Läs den o bränn den sen. /R​ |
| 0:52 | sms-bubbla | rolf | Rolf hä.. Ja har en grej. Lite känslig. Ja la en lapp i postlådan. Läs den o bränn den sen. /R​ |
| 0:52 | röst | rolf | Rolf hä.. Ja har en grej. Lite känslig. Ja la en lapp i postlådan. Läs den o bränn den sen. /R​ · STORY |
| 0:55 | toast | bra | Del 1 av 6 klar |
| 1:00 | klar | rolf | Rolf hä.. Ja har en grej. Lite känslig. Ja la en lapp i postlådan. Läs den o bränn den sen. /R​ |
| 1:00 | toast | bra | Del 2 av 6 klar |
| 1:01 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 1:06 | väntar | värld:Mjau. | Mjau. |
| 1:15 | sak | värld:Mjau. | Mjau. |
| 1:15 | bubbla |  | Mjau. |
| 1:18 | klar | värld:Mjau. | Mjau. |
| 1:18 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 1:18 | väntar | notis:Skrivare M: Tornet är tomt – mal mer så  | Skrivare M: Tornet är tomt – mal mer så fortsätter den |
| 1:19 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 1:21 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 1:22 | toast | bra | Del 3 av 6 klar |
| 1:23 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 1:24 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 1:25 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 1:26 | sak | notis:Skrivare M: Tornet är tomt – mal mer så  | Skrivare M: Tornet är tomt – mal mer så fortsätter den |
| 1:26 | notis | fel | Skrivare M: Tornet är tomt – mal mer så fortsätter den |
| 1:27 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 1:28 | toast | bra | Del 4 av 6 klar |
| 1:28 | klar | notis:Skrivare M: Tornet är tomt – mal mer så  | Skrivare M: Tornet är tomt – mal mer så fortsätter den |
| 1:29 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 1:30 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 1:31 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 1:33 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 1:34 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 1:35 | toast | bra | Del 5 av 6 klar |
| 1:36 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 1:36 | skratt | du | kvarnen spottar |
| 1:37 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 1:39 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 1:40 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 1:41 | struken | mamma | Din bror säger att du har pengar. Du har aldrig haft pengar. Har du sålt en njure? |
| 1:45 | väntar | du | Fullt i händerna. |
| 1:45 | väntar | info:fel | Fullt i händerna. |
| 1:45 | sak | info:fel | Fullt i händerna. |
| 1:45 | kvitto-visas | info:fel | Fullt i händerna. |
| 1:45 | toast | fel | Fullt i händerna. |
| 1:47 | klar | info:fel | Fullt i händerna. |
| 1:47 | sak | du | Fullt i händerna. |
| 1:47 | röst | du | Fullt i händerna. · REAKTION |
| 1:50 | klar | du | Fullt i händerna. |
| 1:51 | händelse | printKlar | sak=byggsats:skrivare3 n=1 |
| 1:56 | händelse | tagitUrPrint | sak=byggsats:skrivare3 n=1 |
| 1:59 | händelse | placerat | sak=skrivare3 |
| 1:59 | händelse | malKlart | id=r8-bygg-skrivare-l del=Dag 8 – Magnetpistolen nasta=r8-bygg-magnetpistolen |
| 1:59 | bekräftelse | du | plats |
| 1:59 | skratt | du | falsk tuta |
| 1:59 | scenInfo | rolf | Rolf på kaffe |
| 1:59 | väntar | du | Gripen tar en sak i taget. En magnetpistol tar fler. Den bygger jag. |
| 1:59 | målruta |  | Spara till magnetpistolen · 475 / 2 400 kr |
| 1:59 | MÅL |  | Spara till magnetpistolen · 475 / 2 400 kr |
| 1:59 | upplåst | bara | magnet |
| 1:59 | brott | UPPLÅST | magnet (bara 11 av 3) |
| 1:59 | händelse | upplast | id=magnet flask=bara |
| 1:59 | paket |  | sms |
| 1:59 | väntar | ali | Ali här. Jag har inte sovit på tre dygn. 🧲 MAGNETPISTOL. Den drog åt sig min nyckelknippa, min klocka och nästan en tand. Det här är framtiden, min vän. Du kommer gilla den. Jag gillar den. Säg inte till nån att jag gillar nåt. |
| 2:01 | sak | du | Gripen tar en sak i taget. En magnetpistol tar fler. Den bygger jag. |
| 2:01 | pil |  | Spara till magnetpistolen · 475 / 2 400 kr |
| 2:01 | notis | tanke | 💭 Gripen tar en sak i taget. En magnetpistol tar fler. Den bygger jag. |
| 2:01 | röst | du | Gripen tar en sak i taget. En magnetpistol tar fler. Den bygger jag. · MÅL |
| 2:01 | nick |  | nick:71 |
| 2:03 | kvittens-bock |  | ✓ Bygg Skrivare L |
| 2:03 | väntar | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått solpanel. Och fågelskrämma. Gunnar, du hör väl? |
| 2:03 | radio | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått solpanel. Och fågelskrämma. Gunnar, du hör väl? |
| 2:03 | skratt | du | Radio-Kjelle |
| 2:08 | klar | du | Gripen tar en sak i taget. En magnetpistol tar fler. Den bygger jag. |
| 2:10 | sak | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått solpanel. Och fågelskrämma. Gunnar, du hör väl? |
| 2:10 | notis |  | 📻 Radio Tippen: Radio Tippen, Kjelle här. Skjulet vid tippen har fått solpanel. Och fågelskrämma. Gunnar, du hör väl? |
| 2:10 | röst | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått solpanel. Och fågelskrämma. Gunnar, du hör väl? · REAKTION |
| 2:13 | händelse | printStart | sak=pall |
| 2:13 | toast | bra | 🔗 Slangen kopplad |
| 2:17 | händelse | printKlar | sak=pall n=12 |
| 2:18 | händelse | tagitUrPrint | sak=pall n=1 |
| 2:18 | klar | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått solpanel. Och fågelskrämma. Gunnar, du hör väl? |
| 2:28 | väntar | värld:Mjau. | Mjau. |
| 2:28 | skratt | du | falsk tuta |
| 2:28 | väntar | värld:TUUT TUUT! | TUUT TUUT! |
| 2:32 | sak | värld:Mjau. | Mjau. |
| 2:32 | bubbla |  | Mjau. |
| 2:34 | klar | värld:Mjau. | Mjau. |
| 2:35 | händelse | printStart | sak=pall |
| 2:38 | händelse | printKlar | sak=pall n=13 |
| 2:39 | händelse | tagitUrPrint | sak=pall n=1 |
| 2:41 | händelse | printStart | sak=nyckelring |
| 2:42 | sak | värld:TUUT TUUT! | TUUT TUUT! |
| 2:42 | bubbla |  | TUUT TUUT! |
| 2:42 | händelse | printKlar | sak=nyckelring n=9 |
| 2:43 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 2:45 | händelse | printStart | sak=nyckelring |
| 2:45 | klar | värld:TUUT TUUT! | TUUT TUUT! |
| 2:45 | händelse | printKlar | sak=nyckelring n=10 |
| 2:46 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 2:53 | sak | ali | Ali här. Jag har inte sovit på tre dygn. 🧲 MAGNETPISTOL. Den drog åt sig min nyckelknippa, min klocka och nästan en tand. Det här är framtiden, min vän. Du kommer gilla den. Jag gillar den. Säg inte till nån att jag gillar nåt. |
| 2:53 | sms | ali | Ali här. Jag har inte sovit på tre dygn. 🧲 MAGNETPISTOL. Den drog åt sig min nyckelknippa, min klocka och nästan en tand. Det här är framtiden, min vän. Du kommer gilla den. Jag gillar den. Säg inte till nån att jag gillar nåt. |
| 2:53 | sms-bubbla | ali | Ali här. Jag har inte sovit på tre dygn. 🧲 MAGNETPISTOL. Den drog åt sig min nyckelknippa, min klocka och nästan en tand. Det här är framtiden, min vän. Du kommer gilla den. Jag gillar den. Säg inte till nån att jag gillar nåt. |
| 2:53 | röst | ali | Ali här. Jag har inte sovit på tre dygn. 🧲 MAGNETPISTOL. Den drog åt sig min nyckelknippa, min klocka och nästan en tand. Det här är framtiden, min vän. Du kommer gilla den. Jag gillar den. Säg inte till nån att jag gillar nåt. · STORY |
| 3:00 | webb | du | packade 2 pall |
| 3:09 | webb | du | packade 2 nyckelring |
| 3:24 | struken | info:bra | 📦 Paketet till Lasse på bussdepån ligger i postlådan – Rolf tar det till posten |
| 3:25 | struken | info:bra | 📦 Paketet till Någon i Mora ligger i postlådan – Rolf tar det till posten |
| 3:27 | klar | ali | Ali här. Jag har inte sovit på tre dygn. 🧲 MAGNETPISTOL. Den drog åt sig min nyckelknippa, min klocka och nästan en tand. Det här är framtiden, min vän. Du kommer gilla den. Jag gillar den. Säg inte till nån att jag gillar nåt. |
| 3:29 | händelse | printStart | sak=n2_vas |
| 3:32 | händelse | printKlar | sak=n2_vas n=5 |
| 3:32 | händelse | tagitUrPrint | sak=n2_vas n=1 |
| 3:38 | väntar | ali | Hallå! Jag har nya skruvar. Samma gamla, men nya. |
| 3:38 | sak | ali | Hallå! Jag har nya skruvar. Samma gamla, men nya. |
| 3:38 | röst | ali | Hallå! Jag har nya skruvar. Samma gamla, men nya. · SMÅPRAT |
| 3:39 | väntar | pappa | Scanian står i garaget. Den går inte. Den ska gå. |
| 3:39 | bubbla |  | Hallå! Jag har nya skruvar. Samma gamla, men nya. |
| 3:39 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 3:41 | händelse | salt | sak=n2_vas n=1 |
| 3:41 | aliSalt | ali | 1185 |
| 3:41 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 3:41 | brott | RADBRYTNING | för lång rad (44): "Spara till magnetpistolen · 1 660 / 2 400 kr" |
| 3:44 | klar | ali | Hallå! Jag har nya skruvar. Samma gamla, men nya. |
| 3:50 | skratt | du | kvarnen rapar |
| 3:54 | toast | guld | 🧵 |
| 3:56 | händelse | printStart | sak=n2_vas |
| 3:59 | händelse | printKlar | sak=n2_vas n=6 |
| 3:59 | händelse | tagitUrPrint | sak=n2_vas n=1 |
| 4:01 | toast | guld | 🧵 |
| 4:02 | struken | pappa | Scanian står i garaget. Den går inte. Den ska gå. |
| 4:06 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 4:08 | händelse | salt | sak=n2_vas n=1 |
| 4:08 | aliSalt | ali | 1126 |
| 4:08 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 4:09 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 4:10 | skratt | du | Alis dyr-pling |
| 4:10 | struken | info:guld | 3D-modell köpt – printa magnetpistol |
| 4:10 | händelse | kopt | sak=magnet |
| 4:10 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 4:20 | händelse | printStart | sak=byggsats:magnet |
| 4:22 | toast | bra | Del 1 av 3 klar |
| 4:23 | väntar | värld:TUUT! Hej grannen! | TUUT! Hej grannen! |
| 4:23 | sak | värld:TUUT! Hej grannen! | TUUT! Hej grannen! |
| 4:23 | bubbla |  | TUUT! Hej grannen! |
| 4:24 | toast | bra | Del 2 av 3 klar |
| 4:26 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 4:26 | klar | värld:TUUT! Hej grannen! | TUUT! Hej grannen! |
| 4:32 | skratt | du | kvarnen rapar |
| 4:35 | händelse | printKlar | sak=byggsats:magnet n=1 |
| 4:37 | tanke | du | Magnetpistolen är klar! Den ligger i verktygsraden – gripen har jag kvar på plats 1. |
| 4:37 | väntar | du | Magnetpistolen är klar! Den ligger i verktygsraden – gripen har jag kvar på plats 1. |
| 4:37 | händelse | tagitUrPrint | sak=byggsats:magnet n=1 |
| 4:37 | sak | du | Magnetpistolen är klar! Den ligger i verktygsraden – gripen har jag kvar på plats 1. |
| 4:37 | notis | tanke | 💭 Magnetpistolen är klar! Den ligger i verktygsraden – gripen har jag kvar på plats 1. |
| 4:37 | röst | du | Magnetpistolen är klar! Den ligger i verktygsraden – gripen har jag kvar på plats 1. · REAKTION |
| 4:37 | händelse | malKlart | id=r8-bygg-magnetpistolen del=Dag 8 – Magnetpistolen nasta=r8-mal-tunga-saker |
| 4:37 | bekräftelse | du | plats |
| 4:37 | händelse | malKlart | id=r8-mal-tunga-saker del=Dag 8 – Magnetpistolen nasta=r8-bygg-batteribank |
| 4:37 | bekräftelse | du | plats |
| 4:37 | väntar | du | Strömmen tar slut på natten. Jag bygger en batteribank. |
| 4:37 | MÅL |  | Spara till batteribanken · 386 / 800 kr |
| 4:39 | toast | guld | 🧵 |
| 4:40 | målruta |  | Spara till batteribanken · 386 / 800 kr |
| 4:41 | kvittens-bock |  | ✓ Bygg magnetpistolen |
| 4:41 | kvittens-bock |  | ✓ Mal tunga saker i PETG-kvarnen · 3/3 |
| 4:44 | toast | guld | 🧵 |
| 4:44 | klar | du | Magnetpistolen är klar! Den ligger i verktygsraden – gripen har jag kvar på plats 1. |
| 4:44 | sak | du | Strömmen tar slut på natten. Jag bygger en batteribank. |
| 4:44 | pil |  | Spara till batteribanken · 386 / 800 kr |
| 4:44 | notis | tanke | 💭 Strömmen tar slut på natten. Jag bygger en batteribank. |
| 4:44 | röst | du | Strömmen tar slut på natten. Jag bygger en batteribank. · MÅL |
| 4:49 | klar | du | Strömmen tar slut på natten. Jag bygger en batteribank. |
| 4:52 | händelse | printStart | sak=n2_vas |
| 4:55 | händelse | printKlar | sak=n2_vas n=7 |
| 4:56 | händelse | tagitUrPrint | sak=n2_vas n=1 |
| 4:57 | strömdipp | du | bank |
| 4:57 | paket |  | tanke |
| 4:57 | tanke | du | Det blev mörkt i maskinerna. Jag behöver mer ström. |
| 4:57 | väntar | du | Det blev mörkt i maskinerna. Jag behöver mer ström. |
| 4:58 | sak | du | Det blev mörkt i maskinerna. Jag behöver mer ström. |
| 4:58 | notis | tanke | 💭 Det blev mörkt i maskinerna. Jag behöver mer ström. |
| 4:58 | röst | du | Det blev mörkt i maskinerna. Jag behöver mer ström. · STORY |
| 5:03 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 5:03 | klar | du | Det blev mörkt i maskinerna. Jag behöver mer ström. |
| 5:04 | händelse | salt | sak=n2_vas n=1 |
| 5:04 | aliSalt | ali | 1069 |
| 5:04 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 5:05 | upplåst | strom | bank |
| 5:05 | brott | UPPLÅST | bank (strom 6 av 15, sparat ihop) |
| 5:05 | händelse | upplast | id=bank flask=strom |
| 5:05 | paket |  | sms |
| 5:05 | väntar | ali | Ali här. Batteribank. Sparar solen till kvällen. Som en kyl, fast för ström. |
| 5:05 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 5:07 | skratt | du | Alis dyr-pling |
| 5:07 | struken | info:guld | 3D-modell köpt – printa batteribank |
| 5:07 | händelse | kopt | sak=bank |
| 5:07 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 5:07 | struken | ali | Ali här. Batteribank. Sparar solen till kvällen. Som en kyl, fast för ström. |
| 5:15 | händelse | printStart | sak=byggsats:bank |
| 5:15 | toast | fel | Ingen ström – maskinerna drar mer än du får in. Bygg en solcellspark (Ali) |
| 5:19 | väntar | foto | Magneten |
| 5:19 | paket |  | tanke |
| 5:19 | tanke | du | Nu kommer allt till mig i stället. |
| 5:19 | väntar | du | Nu kommer allt till mig i stället. |
| 5:19 | sak | foto | Magneten |
| 5:19 | foto | du | Magneten |
| 5:22 | klar | foto | Magneten |
| 5:30 | sak | du | Nu kommer allt till mig i stället. |
| 5:30 | notis | tanke | 💭 Nu kommer allt till mig i stället. |
| 5:30 | röst | du | Nu kommer allt till mig i stället. · STORY |
| 5:31 | toast | bra | Del 1 av 2 klar |
| 5:33 | klar | du | Nu kommer allt till mig i stället. |
| 5:36 | händelse | printKlar | sak=byggsats:bank n=1 |
| 5:36 | händelse | tagitUrPrint | sak=byggsats:bank n=1 |
| 5:43 | händelse | placerat | sak=bank |
| 5:43 | händelse | malKlart | id=r8-bygg-batteribank del=Dag 8 – Magnetpistolen nasta=hylla8 |
| 5:43 | bekräftelse | du | plats |
| 5:43 | väntar | du | Allt ligger på golvet. Jag bygger en hylla. |
| 5:43 | målruta |  | Bygg hyllan |
| 5:43 | MÅL |  | Bygg hyllan |
| 5:45 | sak | du | Allt ligger på golvet. Jag bygger en hylla. |
| 5:45 | pil |  | Bygg hyllan |
| 5:45 | notis | tanke | 💭 Allt ligger på golvet. Jag bygger en hylla. |
| 5:45 | röst | du | Allt ligger på golvet. Jag bygger en hylla. · MÅL |
| 5:45 | nick |  | nick:74 |
| 5:47 | kvittens-bock |  | ✓ Bygg en batteribank |
| 5:49 | klar | du | Allt ligger på golvet. Jag bygger en hylla. |
| 5:56 | skratt | du | falsk tuta |
| 5:57 | händelse | printStart | sak=n2_vas |
| 5:57 | skratt | du | Kajsa i skrivaren |
| 6:00 | händelse | printKlar | sak=n2_vas n=8 |
| 6:00 | händelse | tagitUrPrint | sak=n2_vas n=1 |
| 6:07 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 6:09 | händelse | salt | sak=n2_vas n=1 |
| 6:09 | aliSalt | ali | 1016 |
| 6:09 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 6:10 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 6:12 | skratt | du | Alis dyr-pling |
| 6:12 | toast | guld | 🗄️ Hyllan ska upp i skjulet. |
| 6:12 | händelse | kopt | sak=hylla |
| 6:12 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 6:12 | röst | ali | En hylla. Den lutar lite. Det är karaktär. · STORY |
| 6:12 | butiksbubbla | ali | En hylla. Den lutar lite. Det är karaktär. |
| 6:13 | morgonkort | ⏸️ Pausad | ⏸️ Pausad · Klicka för att fortsätta. |
| 6:23 | tanke | du | Hyllan sitter i skjulet – 8 platser till i förrådet |
| 6:23 | väntar | du | Hyllan sitter i skjulet – 8 platser till i förrådet |
| 6:23 | monterat | du | byggsats:hylla |
| 6:23 | händelse | monterat | sak=hylla |
| 6:23 | sak | du | Hyllan sitter i skjulet – 8 platser till i förrådet |
| 6:23 | notis | tanke | 💭 Hyllan sitter i skjulet – 8 platser till i förrådet |
| 6:23 | röst | du | Hyllan sitter i skjulet – 8 platser till i förrådet · REAKTION |
| 6:23 | händelse | malKlart | id=hylla8 del=Dag 8 – Magnetpistolen nasta=sov8 |
| 6:23 | paket |  | lapp |
| 6:23 | väntar | du | Nu vet pappa att jag bor HÄR. Blå plast säljer billigt. I morgon. |
| 6:23 | bekräftelse | du | plats |
| 6:23 | kvittens | du | En hylla. Jag har en hylla. Saker har en plats nu. |
| 6:23 | väntar | du | En hylla. Jag har en hylla. Saker har en plats nu. |
| 6:23 | MÅL |  | Sov när du vill |
| 6:25 | målruta |  | Sov när du vill |
| 6:27 | klar | du | Hyllan sitter i skjulet – 8 platser till i förrådet |
| 6:27 | sak | du | En hylla. Jag har en hylla. Saker har en plats nu. |
| 6:27 | röst | du | En hylla. Jag har en hylla. Saker har en plats nu. · STORY |
| 6:30 | väntar | notis:🌇 Klockan är 21. Ali slår igen luckan.  | 🌇 Klockan är 21. Ali slår igen luckan. Dagens jobb är klart – gå in i skjulet och sov i sängen. |
| 6:32 | klar | du | En hylla. Jag har en hylla. Saker har en plats nu. |
| 6:32 | sak | du | Nu vet pappa att jag bor HÄR. Blå plast säljer billigt. I morgon. |
| 6:32 | kvallsrad | du | Nu vet pappa att jag bor HÄR. Blå plast säljer billigt. I morgon. |
| 6:33 | klar | du | Nu vet pappa att jag bor HÄR. Blå plast säljer billigt. I morgon. |
| 6:33 | sak | du | (nytt mål i rutan) |
| 6:33 | pil |  | Sov när du vill |
| 6:33 | klar | du | (nytt mål i rutan) |
| 6:35 | autosparning | du | natt 15 december |
| 6:38 | webbBetalt | du | 558 |
| 6:38 | nattkort | du | 🌙 9 dagar kvar. God natt. zzz… Nu vet pappa att jag bor HÄR. Blå plast säljer billigt. I morgon. DAGENS PRINTAR Designvas i röd PETG × 4 Pall × 2 Nyckelring × |

<details><summary>Botens handlingar dag 6</summary>

- 0:00 — dag 6 börjar — (3975 kr)
- 0:09 popup: "FORTSÄTT" (3975 kr)
- 0:25 gå till Rolfs postlåda (28 m) (3975 kr)
- 0:33 panel: "En lapp från Rolf
Lite olaglig" (3975 kr)
- 0:40 gå till Ali (31 m) (3975 kr)
- 0:40 öppnar Alis butik – köpa skrivare l (3975 kr)
- 0:43 köper skrivare3 för 3500 kr (475 kr)
- 0:49 gå till skrivaren (24 m) (475 kr)
- 0:50 printar Skrivare L (6 delar) (475 kr)
- 1:12 plockar 7 skräp på tippen (bär max 16) (475 kr)
- 1:15 gå till kvarnen (13 m) (475 kr)
- 1:46 plockar 3 skräp på tippen (bär max 16) (475 kr)
- 1:49 gå till kvarnen (14 m) (475 kr)
- 1:56 gå till skrivaren (5 m) (475 kr)
- 1:57 tar ut 1 st ur skrivaren (475 kr)
- 1:58 gå till platsen för skrivare l (5 m) (475 kr)
- 1:59 ställer ut skrivare l (475 kr)
- 2:13 printar Pall (475 kr)
- 2:18 tar ut 1 st ur skrivaren (475 kr)
- 2:28 plockar 6 skräp på tippen (bär max 16) (475 kr)
- 2:31 gå till kvarnen (15 m) (475 kr)
- 2:33 gå till skrivaren (7 m) (475 kr)
- 2:35 printar Pall (475 kr)
- 2:40 tar ut 1 st ur skrivaren (475 kr)
- 2:41 printar Nyckelring (475 kr)
- 2:43 tar ut 1 st ur skrivaren (475 kr)
- 2:45 printar Nyckelring (475 kr)
- 2:46 tar ut 1 st ur skrivaren (475 kr)
- 2:50 gå till datorn (19 m) (475 kr)
- 2:59 panel: "Webbshopen · Soptippsvägen 1
B" (475 kr)
- 3:08 panel: "Webbshopen · Soptippsvägen 1
B" (475 kr)
- 3:17 panel: "Webbshopen · Soptippsvägen 1
B" (475 kr)
- 3:24 gå till Rolfs postlåda (paket) (29 m) (475 kr)
- 3:25 webbshop: 2 paket i postlådan (475 kr)
- 3:25 tjänar pengar till magnetpistolen: 475/2400 kr → printar designvas i röd petg (1185 kr) (475 kr)
- 3:27 gå till skrivaren (10 m) (475 kr)
- 3:29 printar Designvas i röd PETG (475 kr)
- 3:33 tar ut 1 st ur skrivaren (475 kr)
- 3:39 gå till Ali (30 m) (475 kr)
- 3:39 öppnar Alis butik – sälja (475 kr)
- 3:41 säljer hos Ali: +1185 kr (1660 kr)
- 3:42 tjänar pengar till magnetpistolen: 1660/2400 kr → printar designvas i röd petg (1126 kr) (1660 kr)
- 3:45 gå till en tunna (12 m) (1660 kr)
- 3:50 gå till PETG-kvarnen (20 m) (1660 kr)
- 3:50 tömmer det tunga i PETG-kvarnen (1660 kr)
- 3:54 gå till skrivaren (1 m) (1660 kr)
- 3:56 printar Designvas i röd PETG (1660 kr)
- 4:00 tar ut 1 st ur skrivaren (1660 kr)
- 4:06 gå till Ali (31 m) (1660 kr)
- 4:06 öppnar Alis butik – sälja (1660 kr)
- 4:08 säljer hos Ali: +1126 kr (2786 kr)
- 4:09 öppnar Alis butik – köpa magnetpistol (2786 kr)
- 4:11 köper magnet för 2400 kr (386 kr)
- 4:18 gå till skrivaren (29 m) (386 kr)
- 4:20 printar Magnetpistol (3 delar) (386 kr)
- 4:29 gå till en tunna (12 m) (386 kr)
- 4:32 gå till PETG-kvarnen (7 m) (386 kr)
- 4:32 tömmer det tunga i PETG-kvarnen (386 kr)
- 4:37 gå till skrivaren (4 m) (386 kr)
- 4:38 tar ut 1 st ur skrivaren (386 kr)
- 4:51 tjänar pengar till väntar på flaskhalsen för bank: 386/426 kr → printar designvas i röd petg (1069 kr) (386 kr)
- 4:52 printar Designvas i röd PETG (386 kr)
- 4:56 tar ut 1 st ur skrivaren (386 kr)
- 5:03 gå till Ali (31 m) (386 kr)
- 5:03 öppnar Alis butik – sälja (386 kr)
- 5:04 säljer hos Ali: +1069 kr (1455 kr)
- 5:05 öppnar Alis butik – köpa batteribank (1455 kr)
- 5:08 köper bank för 800 kr (655 kr)
- 5:14 gå till skrivaren (23 m) (655 kr)
- 5:15 printar Batteribank (2 delar) (655 kr)
- 5:37 tar ut 1 st ur skrivaren (655 kr)
- 5:42 gå till platsen för batteribank (26 m) (655 kr)
- 5:43 ställer ut batteribank (655 kr)
- 5:51 tjänar pengar till hylla: 655/1300 kr → printar designvas i röd petg (1016 kr) (655 kr)
- 5:55 gå till skrivaren (19 m) (655 kr)
- 5:57 printar Designvas i röd PETG (655 kr)
- 6:01 tar ut 1 st ur skrivaren (655 kr)
- 6:07 gå till Ali (31 m) (655 kr)
- 6:07 öppnar Alis butik – sälja (655 kr)
- 6:09 säljer hos Ali: +1016 kr (1671 kr)
- 6:10 öppnar Alis butik – köpa hylla (1671 kr)
- 6:12 köper hylla för 1300 kr (371 kr)
- 6:14 startmenyn syns – fortsätter spelet (371 kr)
- 6:23 gå till sätt upp hyllan i skjulet (19 m) (371 kr)
- 6:35 gå till sängen (1 m) (371 kr)

</details>

## Dag 7

| Tid | Källa | Vem | Text |
|---|---|---|---|
| 6:38 | vara | ali | ingen |
| 6:38 | tanke | du | Nätterna blir kallare nu – se till att skjulet håller värmen. |
| 6:38 | väntar | du | Nätterna blir kallare nu – se till att skjulet håller värmen. |
| 6:38 | händelse | malKlart | id=sov8 del=Dag 8 – Magnetpistolen nasta=r9-kop-receptet-cykelhjalmen |
| 6:38 | bekräftelse | du | plats |
| 6:38 | vara | ali | n2_vas |
| 6:38 | MÅL |  | Spara till receptet på cykelhjälmen · 929 / 1 750 kr |
| 6:39 | autosparning | du | morgon 16 december |
| 0:01 | händelse | dagenBorjar | dag=7 |
| 0:01 | meddelande | du | 8 dagar till jul. Utan nya saker att sälja tjänar jag för lite. |
| 0:01 | dagbokkort | du | Cykelhjälmen. · 8 dagar till jul. Utan nya saker att sälja tjänar jag för lite. |
| 0:01 | röst | du | 8 dagar till jul. Cykelhjälmen. Utan nya saker att sälja tjänar jag för lite. · STORY |
| 0:01 | brott | FEL RÖST | du: 8 dagar till jul. Cykelhjälmen. Utan nya saker att sälja tjä |
| 0:08 | väntar | notis:morgon | Webbshopen: 2 paket i natt · +558 kr · Ali vill ha idag: Designvas i röd PETG · +50 % |
| 0:08 | händelse | morgonkortStangt | dag=7 |
| 0:08 | paket |  | sms |
| 0:08 | väntar | ali | Ali här. Större ryggsäck. Min son hade den i lumpen. Han kom hem med fler grejer än han åkte iväg med. |
| 0:08 | sak | du | Nätterna blir kallare nu – se till att skjulet håller värmen. |
| 0:08 | notis | tanke | 💭 Nätterna blir kallare nu – se till att skjulet håller värmen. |
| 0:08 | röst | du | Nätterna blir kallare nu – se till att skjulet håller värmen. · REAKTION |
| 0:08 | väntar | du | Cykelhjälmar i röd plast. Säljer bra, säger Ali. |
| 0:08 | målruta |  | Spara till receptet på cykelhjälmen · 929 / 1 750 kr |
| 0:11 | paket |  | sms |
| 0:11 | väntar | rolf | Hörru. Vill du följa mä på rundan? Morgonkontoret, konditoriet o ett ställe ja aldrig visat nån. Ja tutar två gånger vid tippen. /R​ |
| 0:13 | klar | du | Nätterna blir kallare nu – se till att skjulet håller värmen. |
| 0:14 | struken | notis:🌇 Klockan är 21. Ali slår igen luckan.  | 🌇 Klockan är 21. Ali slår igen luckan. Dagens jobb är klart – gå in i skjulet och sov i sängen. |
| 0:14 | sak | du | Cykelhjälmar i röd plast. Säljer bra, säger Ali. |
| 0:14 | pil |  | Spara till receptet på cykelhjälmen · 929 / 1 750 kr |
| 0:14 | notis | tanke | 💭 Cykelhjälmar i röd plast. Säljer bra, säger Ali. |
| 0:14 | röst | du | Cykelhjälmar i röd plast. Säljer bra, säger Ali. · MÅL |
| 0:15 | nick |  | nick:76 |
| 0:18 | paket |  | sms |
| 0:18 | väntar | rolf | Nämen.. Rör int den gamla husvagnen. Den ä int min. Den ä vår. /R​ |
| 0:21 | klar | du | Cykelhjälmar i röd plast. Säljer bra, säger Ali. |
| 0:21 | sak | notis:morgon | Webbshopen: 2 paket i natt · +558 kr · Ali vill ha idag: Designvas i röd PETG · +50 % |
| 0:21 | notis |  | 2 paket i natt · +558 kr |
| 0:21 | notis |  | Designvas i röd PETG · +50 % |
| 0:24 | händelse | printStart | sak=nyckelring |
| 0:25 | händelse | printKlar | sak=nyckelring n=11 |
| 0:25 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 0:25 | klar | notis:morgon | Webbshopen: 2 paket i natt · +558 kr · Ali vill ha idag: Designvas i röd PETG · +50 % |
| 0:27 | händelse | printStart | sak=nyckelring |
| 0:28 | händelse | printKlar | sak=nyckelring n=12 |
| 0:28 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 0:31 | händelse | printStart | sak=pall |
| 0:34 | händelse | printKlar | sak=pall n=14 |
| 0:35 | händelse | tagitUrPrint | sak=pall n=1 |
| 0:39 | sak | rolf | Hörru. Vill du följa mä på rundan? Morgonkontoret, konditoriet o ett ställe ja aldrig visat nån. Ja tutar två gånger vid tippen. /R​ |
| 0:39 | sms | rolf | Hörru. Vill du följa mä på rundan? Morgonkontoret, konditoriet o ett ställe ja aldrig visat nån. Ja tutar två gånger vid tippen. /R​ |
| 0:39 | sms-bubbla | rolf | Hörru. Vill du följa mä på rundan? Morgonkontoret, konditoriet o ett ställe ja aldrig visat nån. Ja tutar två gånger vid tippen. /R​ |
| 0:39 | röst | rolf | Hörru. Vill du följa mä på rundan? Morgonkontoret, konditoriet o ett ställe ja aldrig visat nån. Ja tutar två gånger vid tippen. /R​ · STORY |
| 0:49 | webb | du | packade 2 nyckelring |
| 0:56 | klar | rolf | Hörru. Vill du följa mä på rundan? Morgonkontoret, konditoriet o ett ställe ja aldrig visat nån. Ja tutar två gånger vid tippen. /R​ |
| 0:58 | webb | du | packade 1 pall |
| 1:13 | struken | info:bra | 📦 Paketet till En pensionär i Kiruna ligger i postlådan – Rolf tar det till posten |
| 1:14 | struken | info:bra | 📦 Paketet till Två syskon i Lund ligger i postlådan – Rolf tar det till posten |
| 1:18 | händelse | printStart | sak=n2_vas |
| 1:21 | händelse | printKlar | sak=n2_vas n=9 |
| 1:21 | händelse | tagitUrPrint | sak=n2_vas n=1 |
| 1:24 | sak | rolf | Nämen.. Rör int den gamla husvagnen. Den ä int min. Den ä vår. /R​ |
| 1:24 | sms | rolf | Nämen.. Rör int den gamla husvagnen. Den ä int min. Den ä vår. /R​ |
| 1:24 | sms-bubbla | rolf | Nämen.. Rör int den gamla husvagnen. Den ä int min. Den ä vår. /R​ |
| 1:24 | röst | rolf | Nämen.. Rör int den gamla husvagnen. Den ä int min. Den ä vår. /R​ · REAKTION |
| 1:28 | skratt | du | falsk tuta |
| 1:28 | väntar | rolf | Jo jo. Hoppa in. Ja väntar. Nåja, två minuter. /R​ |
| 1:28 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 1:28 | röst | ali | Kunder, kunder. Ingen ingenjör. Förutom du kanske. · STORY |
| 1:28 | butiksbubbla | ali | Kunder, kunder. Ingen ingenjör. Förutom du kanske. |
| 1:29 | klar | rolf | Nämen.. Rör int den gamla husvagnen. Den ä int min. Den ä vår. /R​ |
| 1:30 | händelse | salt | sak=n2_vas n=1 |
| 1:30 | aliSalt | ali | 1185 |
| 1:30 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 1:31 | tanke | du | Allt går trögt på tom mage. |
| 1:31 | väntar | du | Allt går trögt på tom mage. |
| 1:34 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 1:36 | skratt | du | Alis dyr-pling |
| 1:36 | händelse | kopt | sak=n2_hjalm |
| 1:36 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 1:37 | händelse | malKlart | id=r9-kop-receptet-cykelhjalmen del=Dag 9 – Solcellsparken nasta=r9-bygg-solcellspark |
| 1:37 | bekräftelse | du | plats |
| 1:37 | väntar | du | Batterierna räcker inte. Jag bygger en solcellspark. |
| 1:37 | målruta |  | Spara till solcellsparken · 364 / 1 800 kr |
| 1:37 | MÅL |  | Spara till solcellsparken · 364 / 1 800 kr |
| 1:37 | pil |  | Spara till solcellsparken · 364 / 1 800 kr |
| 1:37 | sak | du | Batterierna räcker inte. Jag bygger en solcellspark. |
| 1:37 | notis | tanke | 💭 Batterierna räcker inte. Jag bygger en solcellspark. |
| 1:37 | röst | du | Batterierna räcker inte. Jag bygger en solcellspark. · MÅL |
| 1:41 | kvittens-bock |  | ✓ Köp receptet på cykelhjälmen hos Ali |
| 1:44 | klar | du | Batterierna räcker inte. Jag bygger en solcellspark. |
| 1:52 | sak | du | Allt går trögt på tom mage. |
| 1:52 | notis | tanke | 💭 Allt går trögt på tom mage. |
| 1:52 | röst | du | Allt går trögt på tom mage. · REAKTION |
| 1:54 | händelse | printStart | sak=n2_vas |
| 1:55 | klar | du | Allt går trögt på tom mage. |
| 1:57 | händelse | printKlar | sak=n2_vas n=10 |
| 1:57 | händelse | tagitUrPrint | sak=n2_vas n=1 |
| 1:57 | strömdipp | du | solpark |
| 1:57 | paket |  | tanke |
| 1:57 | tanke | du | Strömmen räckte inte. Fler maskiner, mer ström. |
| 1:57 | väntar | du | Strömmen räckte inte. Fler maskiner, mer ström. |
| 1:57 | sak | du | Strömmen räckte inte. Fler maskiner, mer ström. |
| 1:57 | notis | tanke | 💭 Strömmen räckte inte. Fler maskiner, mer ström. |
| 1:57 | röst | du | Strömmen räckte inte. Fler maskiner, mer ström. · STORY |
| 2:02 | väntar | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått skrivare l. Och batteribank. Vi tar en låt på det. Den här är till dig, Gunnar. |
| 2:02 | radio | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått skrivare l. Och batteribank. Vi tar en låt på det. Den här är till dig, Gunnar. |
| 2:02 | skratt | du | Radio-Kjelle |
| 2:04 | klar | du | Strömmen räckte inte. Fler maskiner, mer ström. |
| 2:04 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 2:05 | händelse | salt | sak=n2_vas n=1 |
| 2:05 | aliSalt | ali | 1126 |
| 2:05 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 2:10 | brott | RADBRYTNING | för lång rad (44): "Spara till solcellsparken · 1 490 / 1 800 kr" |
| 2:12 | sak | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått skrivare l. Och batteribank. Vi tar en låt på det. Den här är till dig, Gunnar. |
| 2:12 | notis |  | 📻 Radio Tippen: Radio Tippen, Kjelle här. Skjulet vid tippen har fått skrivare l. Och batteribank. Vi tar en låt på det. Den här är till dig, Gunnar. |
| 2:12 | röst | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått skrivare l. Och batteribank. Vi tar en låt på det. Den här är till dig, Gunnar. · REAKTION |
| 2:14 | skratt | du | kvarnen rapar |
| 2:15 | upplåst | strom | solpark |
| 2:15 | brott | UPPLÅST | solpark (strom 42 av 15) |
| 2:15 | händelse | upplast | id=solpark flask=strom |
| 2:15 | paket |  | sms |
| 2:15 | väntar | ali | Ali här. Solcellspark. Sex paneler på rad. Solen jobbar dubbelt nu. |
| 2:16 | väntar | mamma | Jag har lagt upp en bild på ditt skjul på Facebook. 47 gilla. Faster Inger skrev "Va fint, är det en bastu?" |
| 2:22 | paket |  | tanke |
| 2:22 | tanke | du | Den bränns. |
| 2:22 | väntar | du | Den bränns. |
| 2:22 | paket |  | tanke |
| 2:22 | tanke | du | Mamma hade rätt. Säg inget. |
| 2:22 | struken | du | Den bränns. |
| 2:22 | väntar | du | Mamma hade rätt. Säg inget. |
| 2:22 | skratt | du | grytvantarna |
| 2:23 | klar | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått skrivare l. Och batteribank. Vi tar en låt på det. Den här är till dig, Gunnar. |
| 2:31 | sak | rolf | Jo jo. Hoppa in. Ja väntar. Nåja, två minuter. /R​ |
| 2:31 | sms | rolf | Jo jo. Hoppa in. Ja väntar. Nåja, två minuter. /R​ |
| 2:31 | sms-bubbla | rolf | Jo jo. Hoppa in. Ja väntar. Nåja, två minuter. /R​ |
| 2:31 | röst | rolf | Jo jo. Hoppa in. Ja väntar. Nåja, två minuter. /R​ · STORY |
| 2:32 | toast | guld | 🧵 |
| 2:33 | händelse | printStart | sak=n2_vas |
| 2:36 | händelse | printKlar | sak=n2_vas n=11 |
| 2:36 | händelse | tagitUrPrint | sak=n2_vas n=1 |
| 2:36 | klar | rolf | Jo jo. Hoppa in. Ja väntar. Nåja, två minuter. /R​ |
| 2:39 | toast | guld | 🧵 |
| 2:43 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 2:44 | händelse | salt | sak=n2_vas n=1 |
| 2:44 | aliSalt | ali | 1069 |
| 2:44 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 2:45 | sak | du | Mamma hade rätt. Säg inget. |
| 2:45 | notis | tanke | 💭 Mamma hade rätt. Säg inget. |
| 2:45 | röst | du | Mamma hade rätt. Säg inget. · REAKTION |
| 2:48 | klar | du | Mamma hade rätt. Säg inget. |
| 3:10 | tanke | du | Om man bara hade en… motorsåg. |
| 3:10 | väntar | du | Om man bara hade en… motorsåg. |
| 3:10 | sak | du | Om man bara hade en… motorsåg. |
| 3:10 | notis | tanke | 💭 Om man bara hade en… motorsåg. |
| 3:10 | röst | du | Om man bara hade en… motorsåg. · STORY |
| 3:12 | klar | du | Om man bara hade en… motorsåg. |
| 3:20 | händelse | printStart | sak=n2_vas |
| 3:22 | sak | ali | Ali här. Solcellspark. Sex paneler på rad. Solen jobbar dubbelt nu. |
| 3:22 | sms | ali | Ali här. Solcellspark. Sex paneler på rad. Solen jobbar dubbelt nu. |
| 3:22 | sms-bubbla | ali | Ali här. Solcellspark. Sex paneler på rad. Solen jobbar dubbelt nu. |
| 3:22 | röst | ali | Ali här. Solcellspark. Sex paneler på rad. Solen jobbar dubbelt nu. · STORY |
| 3:23 | händelse | printKlar | sak=n2_vas n=12 |
| 3:23 | händelse | tagitUrPrint | sak=n2_vas n=1 |
| 3:29 | klar | ali | Ali här. Solcellspark. Sex paneler på rad. Solen jobbar dubbelt nu. |
| 3:30 | struken | ali | Ali här. Större ryggsäck. Min son hade den i lumpen. Han kom hem med fler grejer än han åkte iväg med. |
| 3:30 | väntar | ali | Den köper jag. Ge hit. |
| 3:30 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 3:31 | tanke | du | När åt jag senast? Det var nog i går. |
| 3:31 | väntar | du | När åt jag senast? Det var nog i går. |
| 3:32 | händelse | salt | sak=n2_vas n=1 |
| 3:32 | aliSalt | ali | 1016 |
| 3:32 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 3:32 | sak | du | När åt jag senast? Det var nog i går. |
| 3:32 | notis | tanke | 💭 När åt jag senast? Det var nog i går. |
| 3:32 | röst | du | När åt jag senast? Det var nog i går. · REAKTION |
| 3:36 | klar | du | När åt jag senast? Det var nog i går. |
| 3:41 | väntar | värld:TUUT! Tjena! | TUUT! Tjena! |
| 3:45 | sak | ali | Den köper jag. Ge hit. |
| 3:45 | röst | ali | Den köper jag. Ge hit. · REAKTION |
| 3:45 | upprepning | ali | Den köper jag. Ge hit. |
| 3:45 | händelse | printStart | sak=n2_vas |
| 3:47 | klar | ali | Den köper jag. Ge hit. |
| 3:49 | händelse | printKlar | sak=n2_vas n=13 |
| 3:49 | händelse | tagitUrPrint | sak=n2_vas n=1 |
| 3:55 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 3:57 | händelse | salt | sak=n2_vas n=1 |
| 3:57 | aliSalt | ali | 965 |
| 3:57 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 3:58 | sak | värld:TUUT! Tjena! | TUUT! Tjena! |
| 3:58 | bubbla |  | TUUT! Tjena! |
| 4:00 | väntar | mamma | Sover du ordentligt? Du ser trött ut. Jag vet att jag inte kan se dig. Men jag vet. |
| 4:00 | paket |  | ge → brev |
| 4:00 | väntar |  | (läget ändras) |
| 4:00 | väntar | pappa | Äntligen träd. /Pappa |
| 4:01 | klar | värld:TUUT! Tjena! | TUUT! Tjena! |
| 4:09 | sak |  | (läget ändras) |
| 4:09 | klar |  | (läget ändras) |
| 4:10 | händelse | printStart | sak=n2_hjalm |
| 4:13 | sak | pappa | Äntligen träd. /Pappa |
| 4:13 | lapp | Lapp från pappa | Äntligen träd. /Pappa |
| 4:13 | röst | pappa | Äntligen träd. /Pappa · STORY |
| 4:15 | händelse | printKlar | sak=n2_hjalm n=1 |
| 4:16 | händelse | tagitUrPrint | sak=n2_hjalm n=1 |
| 4:16 | klar | pappa | Äntligen träd. /Pappa |
| 4:23 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 4:24 | händelse | salt | sak=n2_hjalm n=1 |
| 4:24 | aliSalt | ali | 1330 |
| 4:24 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 4:38 | ljud | motorsag | Slyet faller |
| 4:43 | ljud | motorsag | Slyet faller |
| 4:48 | ljud | motorsag | Slyet faller |
| 4:54 | ljud | motorsag | Slyet faller |
| 4:58 | ljud | motorsag | Slyet faller |
| 5:03 | ljud | motorsag | Slyet faller |
| 5:03 | paket |  | tanke |
| 5:03 | tanke | du | Där. Perfekt plats för solen. |
| 5:03 | väntar | du | Där. Perfekt plats för solen. |
| 5:03 | sak | du | Där. Perfekt plats för solen. |
| 5:03 | kvitto-visas | du | Där. Perfekt plats för solen. |
| 5:03 | notis | tanke | 💭 Där. Perfekt plats för solen. |
| 5:03 | röst | du | Där. Perfekt plats för solen. · STORY |
| 5:06 | klar | du | Där. Perfekt plats för solen. |
| 5:10 | väntar | bud | (tips) |
| 5:10 | sak | bud | (tips) |
| 5:11 | klar | bud | (tips) |
| 5:13 | meddelande | mamma | Har du varma strumpor? Det ska bli kallt! |
| 5:14 | röst | mamma | Har du varma strumpor? Det ska bli kallt! · STORY |
| 5:21 | paket |  | sms |
| 5:21 | väntar | mamma | Bra. Vilka då? De bruna? De bruna har hål. Jag vet att de har hål. |
| 5:27 | händelse | brevLast | id=m_strumpor |
| 5:28 | skratt | du | falsk tuta |
| 5:29 | sak | mamma | Bra. Vilka då? De bruna? De bruna har hål. Jag vet att de har hål. |
| 5:29 | sms | mamma | Bra. Vilka då? De bruna? De bruna har hål. Jag vet att de har hål. |
| 5:29 | sms-bubbla | mamma | Bra. Vilka då? De bruna? De bruna har hål. Jag vet att de har hål. |
| 5:29 | röst | mamma | Bra. Vilka då? De bruna? De bruna har hål. Jag vet att de har hål. · STORY |
| 5:29 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 5:30 | skratt | du | Alis dyr-pling |
| 5:30 | struken | info:guld | 3D-modell köpt – printa solcellspark |
| 5:30 | händelse | kopt | sak=solpark |
| 5:30 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 5:31 | tanke | du | Jag skulle kunna äta en sopsäck. Nästan. |
| 5:31 | väntar | du | Jag skulle kunna äta en sopsäck. Nästan. |
| 5:32 | kvitto-visas | du | Jag skulle kunna äta en sopsäck. Nästan. |
| 5:32 | sak | du | Jag skulle kunna äta en sopsäck. Nästan. |
| 5:32 | notis | tanke | 💭 Jag skulle kunna äta en sopsäck. Nästan. |
| 5:36 | klar | mamma | Bra. Vilka då? De bruna? De bruna har hål. Jag vet att de har hål. |
| 5:39 | händelse | printStart | sak=byggsats:solpark |
| 5:41 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 5:42 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 5:43 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 5:45 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 5:46 | toast | bra | Del 1 av 4 klar |
| 5:46 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 5:46 | väntar | notis:Skrivare L: Tornet är tomt – mal mer så  | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 5:46 | sak | notis:Skrivare L: Tornet är tomt – mal mer så  | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 5:46 | notis | fel | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 5:47 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 5:49 | klar | notis:Skrivare L: Tornet är tomt – mal mer så  | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 5:49 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 5:50 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 5:51 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 5:52 | skratt | du | kvarnen spottar |
| 5:53 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 5:54 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 6:02 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 6:03 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 6:04 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 6:05 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 6:06 | toast | bra | Del 2 av 4 klar |
| 6:06 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 6:07 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 6:08 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 6:10 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 6:11 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 6:12 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 6:14 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 6:15 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 6:16 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 6:18 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 6:18 | toast | bra | Del 3 av 4 klar |
| 6:19 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 6:20 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 6:33 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 6:34 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 6:36 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 6:37 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 6:38 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 6:39 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 6:41 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 6:42 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 6:43 | händelse | printKlar | sak=byggsats:solpark n=1 |
| 6:49 | händelse | tagitUrPrint | sak=byggsats:solpark n=1 |
| 6:55 | händelse | placerat | sak=solpark |
| 6:55 | händelse | malKlart | id=r9-bygg-solcellspark del=Dag 9 – Solcellsparken nasta=paket9 |
| 6:55 | bekräftelse | du | plats |
| 6:55 | händelse | malKlart | id=paket9 del=Dag 9 – Solcellsparken nasta=petgtorn9 |
| 6:55 | bekräftelse | du | plats |
| 6:55 | väntar | du | Den röda kvarnen står och väntar på plats för rullarna. Ett större torn. |
| 6:55 | målruta |  | Bygg Rulltorn XL vid röda kvarnen |
| 6:55 | MÅL |  | Bygg Rulltorn XL vid röda kvarnen |
| 6:57 | sak | du | Den röda kvarnen står och väntar på plats för rullarna. Ett större torn. |
| 6:57 | pil |  | Bygg Rulltorn XL vid röda kvarnen |
| 6:57 | notis | tanke | 💭 Den röda kvarnen står och väntar på plats för rullarna. Ett större torn. |
| 6:57 | röst | du | Den röda kvarnen står och väntar på plats för rullarna. Ett större torn. · MÅL |
| 6:57 | nick |  | nick:79 |
| 6:59 | kvittens-bock |  | ✓ Bygg en solcellspark |
| 6:59 | kvittens-bock |  | ✓ Skicka två paket från datorn · 2/2 |
| 7:03 | klar | du | Den röda kvarnen står och väntar på plats för rullarna. Ett större torn. |
| 7:15 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 7:16 | struken | info:guld | 3D-modell köpt – printa rulltorn XL |
| 7:16 | händelse | kopt | sak=petgtorn |
| 7:16 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 7:18 | väntar | ali | Sålt nåt idag? Jag köper. |
| 7:18 | sak | ali | Sålt nåt idag? Jag köper. |
| 7:18 | bubbla |  | Sålt nåt idag? Jag köper. |
| 7:18 | röst | ali | Sålt nåt idag? Jag köper. · SMÅPRAT |
| 7:22 | klar | ali | Sålt nåt idag? Jag köper. |
| 7:29 | skratt | du | kvarnen rapar |
| 7:31 | tanke | du | Magen låter som kvarnen. |
| 7:31 | väntar | du | Magen låter som kvarnen. |
| 7:31 | sak | du | Magen låter som kvarnen. |
| 7:31 | notis | tanke | 💭 Magen låter som kvarnen. |
| 7:31 | röst | du | Magen låter som kvarnen. · REAKTION |
| 7:32 | toast | guld | 🧵 |
| 7:35 | klar | du | Magen låter som kvarnen. |
| 7:36 | toast | guld | 🧵 |
| 7:41 | toast | guld | 🧵 |
| 7:42 | händelse | printStart | sak=byggsats:petgtorn |
| 7:42 | toast | guld | 🧵 |
| 7:44 | toast | bra | Del 1 av 3 klar |
| 7:46 | toast | bra | Del 2 av 3 klar |
| 7:48 | händelse | printKlar | sak=byggsats:petgtorn n=1 |
| 7:49 | händelse | tagitUrPrint | sak=byggsats:petgtorn n=1 |
| 7:50 | händelse | placerat | sak=petgtorn |
| 7:50 | tanke | du | Rulltorn XL – 12 rullar röd PETG får plats |
| 7:50 | väntar | du | Rulltorn XL – 12 rullar röd PETG får plats |
| 7:50 | sak | du | Rulltorn XL – 12 rullar röd PETG får plats |
| 7:50 | notis | tanke | 💭 Rulltorn XL – 12 rullar röd PETG får plats |
| 7:50 | röst | du | Rulltorn XL – 12 rullar röd PETG får plats · REAKTION |
| 7:50 | händelse | malKlart | id=petgtorn9 del=Dag 9 – Solcellsparken nasta=tapeter |
| 7:50 | bekräftelse | du | plats |
| 7:50 | skratt | du | falsk tuta |
| 7:50 | väntar | du | Skjulet ska kännas som ett rum. Tapeter. |
| 7:50 | MÅL |  | Tapetsera skjulet · 0/4 |
| 7:53 | målruta |  | Tapetsera skjulet · 0/4 |
| 7:54 | klar | du | Rulltorn XL – 12 rullar röd PETG får plats |
| 7:54 | kvittens-bock |  | ✓ Bygg Rulltorn XL vid röda kvarnen |
| 7:56 | sak | du | Skjulet ska kännas som ett rum. Tapeter. |
| 7:56 | pil |  | Tapetsera skjulet · 0/4 |
| 7:56 | notis | tanke | 💭 Skjulet ska kännas som ett rum. Tapeter. |
| 7:56 | röst | du | Skjulet ska kännas som ett rum. Tapeter. · MÅL |
| 7:56 | nick |  | nick:80 |
| 8:01 | klar | du | Skjulet ska kännas som ett rum. Tapeter. |
| 8:02 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 8:04 | skratt | du | Alis dyr-pling |
| 8:04 | struken | info:guld | 3D-modell köpt – printa tapeter |
| 8:04 | händelse | kopt | sak=tapeter |
| 8:04 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 8:06 | väntar | rolf | Hittade Birgittas gamla kaffekopp under sängen i husvagnen. Ja dricker inte ur den. Ja bara tittar på den. /R |
| 8:12 | händelse | printStart | sak=byggsats:tapeter |
| 8:14 | händelse | printKlar | sak=byggsats:tapeter n=1 |
| 8:14 | händelse | tagitUrPrint | sak=byggsats:tapeter n=1 |
| 8:18 | tanke | du | Bakväggen tapetserad. 3 kvar. |
| 8:18 | väntar | du | Bakväggen tapetserad. 3 kvar. |
| 8:18 | sak | du | Bakväggen tapetserad. 3 kvar. |
| 8:18 | notis | tanke | 💭 Bakväggen tapetserad. 3 kvar. |
| 8:18 | röst | du | Bakväggen tapetserad. 3 kvar. · REAKTION |
| 8:20 | klar | du | Bakväggen tapetserad. 3 kvar. |
| 8:27 | händelse | printStart | sak=byggsats:tapeter |
| 8:29 | händelse | printKlar | sak=byggsats:tapeter n=1 |
| 8:30 | händelse | tagitUrPrint | sak=byggsats:tapeter n=1 |
| 8:33 | tanke | du | Vänster vägg tapetserad. 2 kvar. |
| 8:33 | väntar | du | Vänster vägg tapetserad. 2 kvar. |
| 8:33 | sak | du | Vänster vägg tapetserad. 2 kvar. |
| 8:33 | notis | tanke | 💭 Vänster vägg tapetserad. 2 kvar. |
| 8:33 | röst | du | Vänster vägg tapetserad. 2 kvar. · REAKTION |
| 8:36 | klar | du | Vänster vägg tapetserad. 2 kvar. |
| 8:43 | händelse | printStart | sak=byggsats:tapeter |
| 8:45 | händelse | printKlar | sak=byggsats:tapeter n=1 |
| 8:45 | händelse | tagitUrPrint | sak=byggsats:tapeter n=1 |
| 8:49 | tanke | du | Höger vägg tapetserad. 1 kvar. |
| 8:49 | väntar | du | Höger vägg tapetserad. 1 kvar. |
| 8:49 | sak | du | Höger vägg tapetserad. 1 kvar. |
| 8:49 | notis | tanke | 💭 Höger vägg tapetserad. 1 kvar. |
| 8:49 | röst | du | Höger vägg tapetserad. 1 kvar. · REAKTION |
| 8:51 | klar | du | Höger vägg tapetserad. 1 kvar. |
| 9:07 | väntar | värld:Mjau. | Mjau. |
| 9:08 | toast | skak | handen skakar: fullt |
| 9:12 | sak | värld:Mjau. | Mjau. |
| 9:12 | bubbla |  | Mjau. |
| 9:15 | klar | värld:Mjau. | Mjau. |
| 9:20 | händelse | printStart | sak=byggsats:tapeter |
| 9:22 | händelse | printKlar | sak=byggsats:tapeter n=1 |
| 9:22 | händelse | tagitUrPrint | sak=byggsats:tapeter n=1 |
| 9:26 | väntar | mamma | Jag har lagt upp en bild på ditt skjul på Facebook. 47 gilla. Faster Inger skrev "Va fint, är det en bastu?" |
| 9:26 | tanke | du | Hela skjulet är tapetserat! Klassisk 70-talstapet … Ali säljer snyggare mönster. |
| 9:26 | väntar | du | Hela skjulet är tapetserat! Klassisk 70-talstapet … Ali säljer snyggare mönster. |
| 9:26 | sak | du | Hela skjulet är tapetserat! Klassisk 70-talstapet … Ali säljer snyggare mönster. |
| 9:26 | notis | tanke | 💭 Hela skjulet är tapetserat! Klassisk 70-talstapet … Ali säljer snyggare mönster. |
| 9:26 | röst | du | Hela skjulet är tapetserat! Klassisk 70-talstapet … Ali säljer snyggare mönster. · REAKTION |
| 9:26 | händelse | malKlart | id=tapeter del=Dag 10 – Skrivare L och kylan nasta=r10-gor-skjulet-varmt |
| 9:26 | bekräftelse | du | plats |
| 9:26 | händelse | malKlart | id=r10-gor-skjulet-varmt del=Dag 10 – Skrivare L och kylan nasta=spis10 |
| 9:26 | bekräftelse | du | plats |
| 9:26 | väntar | du | Jag behöver äta något varmt. Först bygger jag en spis. |
| 9:27 | MÅL |  | Bygg spisen och laga en varm måltid |
| 9:29 | målruta |  | Bygg spisen och laga en varm måltid |
| 9:30 | kvittens-bock |  | ✓ Tapetsera skjulet · 4/4 |
| 9:30 | kvittens-bock |  | ✓ Gör skjulet varmt inför kylan |
| 9:32 | skratt | du | falsk tuta |
| 9:33 | klar | du | Hela skjulet är tapetserat! Klassisk 70-talstapet … Ali säljer snyggare mönster. |
| 9:33 | sak | du | Jag behöver äta något varmt. Först bygger jag en spis. |
| 9:33 | pil |  | Bygg spisen och laga en varm måltid |
| 9:33 | notis | tanke | 💭 Jag behöver äta något varmt. Först bygger jag en spis. |
| 9:33 | röst | du | Jag behöver äta något varmt. Först bygger jag en spis. · MÅL |
| 9:34 | nick |  | nick:82 |
| 9:39 | klar | du | Jag behöver äta något varmt. Först bygger jag en spis. |
| 9:47 | struken | mamma | Jag har lagt upp en bild på ditt skjul på Facebook. 47 gilla. Faster Inger skrev "Va fint, är det en bastu?" |
| 9:47 | väntar | värld:Mjau. | Mjau. |
| 9:47 | sak | värld:Mjau. | Mjau. |
| 9:47 | bubbla |  | Mjau. |
| 9:49 | klar | värld:Mjau. | Mjau. |
| 9:50 | skratt | du | kvarnen rapar |
| 9:54 | toast | guld | 🧵 |
| 9:56 | poolTom | du | 4 repliker använda |
| 9:57 | händelse | printStart | sak=n2_vas |
| 10:00 | händelse | printKlar | sak=n2_vas n=14 |
| 10:00 | händelse | tagitUrPrint | sak=n2_vas n=1 |
| 10:07 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 10:09 | händelse | salt | sak=n2_vas n=1 |
| 10:09 | aliSalt | ali | 917 |
| 10:09 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 10:09 | händelse | salt | sak=motorsag n=1 |
| 10:09 | aliSalt | ali | 30 |
| 10:09 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 10:18 | händelse | printStart | sak=n2_hjalm |
| 10:22 | händelse | printKlar | sak=n2_hjalm n=2 |
| 10:23 | händelse | tagitUrPrint | sak=n2_hjalm n=1 |
| 10:30 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 10:32 | händelse | salt | sak=n2_hjalm n=1 |
| 10:32 | aliSalt | ali | 1264 |
| 10:32 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 10:44 | skratt | du | kvarnen rapar |
| 10:47 | toast | guld | 🧵 |
| 10:51 | händelse | printStart | sak=n2_vas |
| 10:54 | händelse | printKlar | sak=n2_vas n=15 |
| 10:54 | händelse | tagitUrPrint | sak=n2_vas n=1 |
| 11:01 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 11:03 | händelse | salt | sak=n2_vas n=1 |
| 11:03 | aliSalt | ali | 871 |
| 11:03 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 11:04 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 11:06 | skratt | du | Alis dyr-pling |
| 11:06 | toast | guld | 🍳 Spisen ska in i skjulet. |
| 11:06 | händelse | kopt | sak=spis |
| 11:06 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 11:06 | röst | ali | Laga inget som luktar fisk. Rolf kommer då. · STORY |
| 11:06 | butiksbubbla | ali | Laga inget som luktar fisk. Rolf kommer då. |
| 11:08 | morgonkort | ⏸️ Pausad | ⏸️ Pausad · Klicka för att fortsätta. |
| 11:15 | tanke | du | Spisen står i skjulet – maten mättar mer nu |
| 11:15 | väntar | du | Spisen står i skjulet – maten mättar mer nu |
| 11:15 | monterat | du | byggsats:spis |
| 11:15 | händelse | monterat | sak=spis |
| 11:15 | sak | du | Spisen står i skjulet – maten mättar mer nu |
| 11:15 | notis | tanke | 💭 Spisen står i skjulet – maten mättar mer nu |
| 11:15 | röst | du | Spisen står i skjulet – maten mättar mer nu · REAKTION |
| 11:15 | händelse | malKlart | id=spis10 del=Dag 10 – Skrivare L och kylan nasta=sov10 |
| 11:15 | paket |  | lapp |
| 11:15 | väntar | du | Ryggen värker av allt bärande. |
| 11:15 | bekräftelse | du | plats |
| 11:15 | kvittens | du | Varm mat. I skjulet. Mamma skulle inte tro det. |
| 11:15 | väntar | du | Varm mat. I skjulet. Mamma skulle inte tro det. |
| 11:15 | MÅL |  | Sov när du vill |
| 11:18 | målruta |  | Sov när du vill |
| 11:19 | klar | du | Spisen står i skjulet – maten mättar mer nu |
| 11:19 | sak | du | Varm mat. I skjulet. Mamma skulle inte tro det. |
| 11:19 | röst | du | Varm mat. I skjulet. Mamma skulle inte tro det. · STORY |
| 11:22 | väntar | notis:🌇 Klockan är 21. Ali slår igen luckan.  | 🌇 Klockan är 21. Ali slår igen luckan. Dagens jobb är klart – gå in i skjulet och sov i sängen. |
| 11:23 | klar | du | Varm mat. I skjulet. Mamma skulle inte tro det. |
| 11:23 | sak | du | Ryggen värker av allt bärande. |
| 11:23 | kvallsrad | du | Ryggen värker av allt bärande. |
| 11:23 | klar | du | Ryggen värker av allt bärande. |
| 11:23 | sak | du | (nytt mål i rutan) |
| 11:23 | pil |  | Sov när du vill |
| 11:23 | klar | du | (nytt mål i rutan) |
| 11:25 | autosparning | du | natt 16 december |
| 11:25 | struken | mamma | Sover du ordentligt? Du ser trött ut. Jag vet att jag inte kan se dig. Men jag vet. |
| 11:25 | struken | rolf | Hittade Birgittas gamla kaffekopp under sängen i husvagnen. Ja dricker inte ur den. Ja bara tittar på den. /R |
| 11:28 | webbBetalt | du | 302 |
| 11:28 | nattkort | du | 🌙 8 dagar kvar. God natt. zzz… Ryggen värker av allt bärande. DAGENS PRINTAR Designvas i röd PETG × 7 Nyckelring × 2 Cykelhjälm i PETG × 2 Pall × 1 Totalt 12 p |

<details><summary>Botens handlingar dag 7</summary>

- 0:00 — dag 7 börjar — (929 kr)
- 0:08 popup: "FORTSÄTT" (929 kr)
- 0:22 gå till skrivaren (17 m) (929 kr)
- 0:24 printar Nyckelring (929 kr)
- 0:26 tar ut 1 st ur skrivaren (929 kr)
- 0:27 printar Nyckelring (929 kr)
- 0:29 tar ut 1 st ur skrivaren (929 kr)
- 0:31 printar Pall (929 kr)
- 0:36 tar ut 1 st ur skrivaren (929 kr)
- 0:39 gå till datorn (17 m) (929 kr)
- 0:48 panel: "Webbshopen · Soptippsvägen 1
B" (929 kr)
- 0:57 panel: "Webbshopen · Soptippsvägen 1
B" (929 kr)
- 1:07 panel: "Webbshopen · Soptippsvägen 1
B" (929 kr)
- 1:13 gå till Rolfs postlåda (paket) (29 m) (929 kr)
- 1:14 webbshop: 2 paket i postlådan (929 kr)
- 1:14 tjänar pengar till receptet på cykelhjälmen: 929/1750 kr → printar designvas i röd petg (1185 kr) (929 kr)
- 1:16 gå till skrivaren (10 m) (929 kr)
- 1:18 printar Designvas i röd PETG (929 kr)
- 1:22 tar ut 1 st ur skrivaren (929 kr)
- 1:28 gå till Ali (30 m) (929 kr)
- 1:28 öppnar Alis butik – sälja (929 kr)
- 1:30 säljer hos Ali: +1185 kr (2114 kr)
- 1:34 öppnar Alis butik – köpa receptet cykelhjälm i petg (2114 kr)
- 1:37 köper n2_hjalm för 1750 kr (364 kr)
- 1:46 tjänar pengar till väntar på flaskhalsen för solpark: 364/404 kr → printar designvas i röd petg (1126 kr) (364 kr)
- 1:52 gå till skrivaren (29 m) (364 kr)
- 1:54 printar Designvas i röd PETG (364 kr)
- 1:58 tar ut 1 st ur skrivaren (364 kr)
- 2:04 gå till Ali (29 m) (364 kr)
- 2:04 öppnar Alis butik – sälja (364 kr)
- 2:06 säljer hos Ali: +1126 kr (1490 kr)
- 2:07 tjänar pengar till väntar på flaskhalsen för solpark: 1490/1530 kr → printar designvas i röd petg (1069 kr) (1490 kr)
- 2:09 gå till en tunna (12 m) (1490 kr)
- 2:14 gå till PETG-kvarnen (20 m) (1490 kr)
- 2:14 tömmer det tunga i PETG-kvarnen (1490 kr)
- 2:31 gå till skrivaren (1 m) (1490 kr)
- 2:33 printar Designvas i röd PETG (1490 kr)
- 2:36 tar ut 1 st ur skrivaren (1490 kr)
- 2:43 gå till Ali (31 m) (1490 kr)
- 2:43 öppnar Alis butik – sälja (1490 kr)
- 2:45 säljer hos Ali: +1069 kr (2559 kr)
- 3:00 gå till slyet bakom tippen (51 m) (2559 kr)
- 3:14 tjänar pengar till väntar på pappas motorsåg: 2559/2679 kr → printar designvas i röd petg (1016 kr) (2559 kr)
- 3:18 gå till skrivaren (20 m) (2559 kr)
- 3:20 printar Designvas i röd PETG (2559 kr)
- 3:24 tar ut 1 st ur skrivaren (2559 kr)
- 3:30 gå till Ali (32 m) (2559 kr)
- 3:30 öppnar Alis butik – sälja (2559 kr)
- 3:32 säljer hos Ali: +1016 kr (3575 kr)
- 3:38 tjänar pengar till väntar på pappas motorsåg: 3575/3695 kr → printar designvas i röd petg (965 kr) (3575 kr)
- 3:44 gå till skrivaren (29 m) (3575 kr)
- 3:45 printar Designvas i röd PETG (3575 kr)
- 3:49 tar ut 1 st ur skrivaren (3575 kr)
- 3:55 gå till Ali (29 m) (3575 kr)
- 3:55 öppnar Alis butik – sälja (3575 kr)
- 3:57 säljer hos Ali: +965 kr (4540 kr)
- 4:03 tjänar pengar till väntar på pappas motorsåg: 4540/4660 kr → printar cykelhjälm i petg (1330 kr) (4540 kr)
- 4:09 gå till skrivaren (29 m) (4540 kr)
- 4:10 printar Cykelhjälm i PETG (4540 kr)
- 4:17 tar ut 1 st ur skrivaren (4540 kr)
- 4:23 gå till Ali (29 m) (4540 kr)
- 4:23 öppnar Alis butik – sälja (4540 kr)
- 4:24 säljer hos Ali: +1330 kr (5870 kr)
- 4:37 gå till slyet (motorsåg) (51 m) (5870 kr)
- 4:47 gå till slyet (motorsåg) (4 m) (5870 kr)
- 4:52 gå till slyet (motorsåg) (5 m) (5870 kr)
- 5:02 gå till slyet (motorsåg) (4 m) (5870 kr)
- 5:21 popup: "Ja mamma." (5870 kr)
- 5:27 popup: "Läst" (5870 kr)
- 5:29 gå till Ali (46 m) (5870 kr)
- 5:29 öppnar Alis butik – köpa solcellspark (5870 kr)
- 5:31 köper solpark för 1800 kr (4070 kr)
- 5:37 gå till skrivaren (23 m) (4070 kr)
- 5:39 printar Solcellspark (4 delar) (4070 kr)
- 5:58 plockar 10 skräp på tippen (bär max 16) (4070 kr)
- 6:01 gå till kvarnen (13 m) (4070 kr)
- 6:29 plockar 7 skräp på tippen (bär max 16) (4070 kr)
- 6:31 gå till kvarnen (12 m) (4070 kr)
- 6:49 gå till skrivaren (7 m) (4070 kr)
- 6:50 tar ut 1 st ur skrivaren (4070 kr)
- 6:54 gå till platsen för solcellspark (21 m) (4070 kr)
- 6:55 ställer ut solcellspark (4070 kr)
- 7:15 gå till Ali (46 m) (4070 kr)
- 7:15 öppnar Alis butik – köpa rulltorn xl (4070 kr)
- 7:17 köper petgtorn för 450 kr (3620 kr)
- 7:25 gå till en tunna (35 m) (3620 kr)
- 7:29 gå till PETG-kvarnen (12 m) (3620 kr)
- 7:29 tömmer det tunga i PETG-kvarnen (3620 kr)
- 7:40 gå till skrivaren (3 m) (3620 kr)
- 7:42 printar Rulltorn XL (3 delar) (3620 kr)
- 7:50 tar ut 1 st ur skrivaren (3620 kr)
- 7:50 gå till röda kvarnen (1 m) (3620 kr)
- 8:02 gå till Ali (32 m) (3620 kr)
- 8:02 öppnar Alis butik – köpa tapeter (3620 kr)
- 8:05 köper tapeter för 960 kr (2660 kr)
- 8:10 gå till skrivaren (23 m) (2660 kr)
- 8:12 printar Tapeter (2660 kr)
- 8:15 tar ut 1 st ur skrivaren (2660 kr)
- 8:18 gå till skjulet (bak) (15 m) (2660 kr)
- 8:26 gå till skrivaren (15 m) (2660 kr)
- 8:27 printar Tapeter (2660 kr)
- 8:30 tar ut 1 st ur skrivaren (2660 kr)
- 8:33 gå till skjulet (vanster) (15 m) (2660 kr)
- 8:41 gå till skrivaren (15 m) (2660 kr)
- 8:43 printar Tapeter (2660 kr)
- 8:46 tar ut 1 st ur skrivaren (2660 kr)
- 8:49 gå till skjulet (hoger) (15 m) (2660 kr)
- 9:09 plockar 9 skräp på tippen (bär max 16) (2660 kr)
- 9:12 gå till kvarnen (14 m) (2660 kr)
- 9:18 gå till skrivaren (7 m) (2660 kr)
- 9:20 printar Tapeter (2660 kr)
- 9:23 tar ut 1 st ur skrivaren (2660 kr)
- 9:26 gå till skjulet (fram) (18 m) (2660 kr)
- 9:40 tjänar pengar till spis: 2660/5050 kr → printar designvas i röd petg (917 kr) (2660 kr)
- 9:47 gå till en tunna (33 m) (2660 kr)
- 9:50 gå till PETG-kvarnen (10 m) (2660 kr)
- 9:50 tömmer det tunga i PETG-kvarnen (2660 kr)
- 9:55 gå till skrivaren (3 m) (2660 kr)
- 9:57 printar Designvas i röd PETG (2660 kr)
- 10:01 tar ut 1 st ur skrivaren (2660 kr)
- 10:07 gå till Ali (31 m) (2660 kr)
- 10:07 öppnar Alis butik – sälja (2660 kr)
- 10:09 säljer hos Ali: +947 kr (3607 kr)
- 10:10 tjänar pengar till spis: 3607/5050 kr → printar cykelhjälm i petg (1264 kr) (3607 kr)
- 10:16 gå till skrivaren (29 m) (3607 kr)
- 10:18 printar Cykelhjälm i PETG (3607 kr)
- 10:24 tar ut 1 st ur skrivaren (3607 kr)
- 10:30 gå till Ali (29 m) (3607 kr)
- 10:30 öppnar Alis butik – sälja (3607 kr)
- 10:32 säljer hos Ali: +1264 kr (4871 kr)
- 10:33 tjänar pengar till spis: 4871/5050 kr → printar designvas i röd petg (871 kr) (4871 kr)
- 10:40 gå till en tunna (36 m) (4871 kr)
- 10:44 gå till PETG-kvarnen (12 m) (4871 kr)
- 10:44 tömmer det tunga i PETG-kvarnen (4871 kr)
- 10:49 gå till skrivaren (3 m) (4871 kr)
- 10:51 printar Designvas i röd PETG (4871 kr)
- 10:55 tar ut 1 st ur skrivaren (4871 kr)
- 11:01 gå till Ali (31 m) (4871 kr)
- 11:01 öppnar Alis butik – sälja (4871 kr)
- 11:03 säljer hos Ali: +871 kr (5742 kr)
- 11:04 öppnar Alis butik – köpa spis (5742 kr)
- 11:07 köper spis för 5050 kr (692 kr)
- 11:08 startmenyn syns – fortsätter spelet (692 kr)
- 11:15 gå till ställ in spisen i skjulet (19 m) (692 kr)
- 11:25 gå till sängen (1 m) (692 kr)

</details>

## Dag 8

| Tid | Källa | Vem | Text |
|---|---|---|---|
| 11:28 | vara | ali | n2_hjalm |
| 11:28 | händelse | malKlart | id=sov10 del=Dag 10 – Skrivare L och kylan nasta=kolfkvarn |
| 11:28 | bekräftelse | du | plats |
| 11:28 | tanke | du | KAPITEL 2 KLART! Röda fabriken går – och skjulet klarar kylan. |
| 11:28 | väntar | du | KAPITEL 2 KLART! Röda fabriken går – och skjulet klarar kylan. |
| 11:28 | paket |  | sms |
| 11:28 | väntar | rolf | Dä blir kallt nu o du fyrser int. Respekt. Ja la jukeboxen från dödsbot i lådan. O lite pengar. Den spelar bara dansband. /R *fryser​ |
| 11:28 | MÅL |  | Bygg kolfiberkvarnen i linje 3 |
| 11:29 | autosparning | du | morgon 17 december |
| 0:01 | händelse | dagenBorjar | dag=8 |
| 0:01 | meddelande | du | Nätterna blir kalla. Därför: värme. |
| 0:01 | dagbokkort | du | KAPITEL 3 · 7 dagar till jul · Nätterna blir kalla. Därför: värme. |
| 0:01 | röst | du | KAPITEL 3 · 7 dagar till jul. Nätterna blir kalla. Därför: värme. · STORY |
| 0:07 | väntar | notis:morgon | Webbshopen: 2 paket i natt · +302 kr · Ali vill ha idag: Cykelhjälm i PETG · +50 % |
| 0:07 | händelse | morgonkortStangt | dag=8 |
| 0:07 | paket |  | sms |
| 0:07 | väntar | ali | Ali här. Satt uppe med AI:n hela natten. Ritningen till Kolfiberkvarnen är klar. Kom innan nio, då stänger jag. |
| 0:07 | paket |  | toast |
| 0:07 | väntar | notis:🔥 Varmt och skönt i skjulet trots kylan | 🔥 Varmt och skönt i skjulet trots kylan. |
| 0:07 | paket |  | toast |
| 0:07 | väntar | notis:🤢 Något luktar … Mammas mat har möglat  | 🤢 Något luktar … Mammas mat har möglat och blommorna har vissnat. Trivseln sjunker. |
| 0:07 | sak | du | KAPITEL 2 KLART! Röda fabriken går – och skjulet klarar kylan. |
| 0:07 | notis | tanke | 💭 KAPITEL 2 KLART! Röda fabriken går – och skjulet klarar kylan. |
| 0:07 | röst | du | KAPITEL 2 KLART! Röda fabriken går – och skjulet klarar kylan. · REAKTION |
| 0:07 | väntar | du | Kajakerna på tippen är kolfiber. Det behövs en kvarn som tål det. |
| 0:10 | målruta |  | Bygg kolfiberkvarnen i linje 3 |
| 0:11 | klar | du | KAPITEL 2 KLART! Röda fabriken går – och skjulet klarar kylan. |
| 0:11 | väntar | rolf | ÖJ! Båtklubben skulle rensa förrådet. Ja hjälpte till. Fråga int hur. /R​ |
| 0:11 | paket |  | sms |
| 0:11 | väntar | rolf | Hörru. Grannen står mä kikare i fönstret igen. Bry dej int. /R​ |
| 0:11 | paket |  | sms |
| 0:11 | väntar | rolf | Nämen. Gå int genom gamla grniden bakom tippen. Dä ä floden. /R *grinden​ |
| 0:15 | skratt | du | däcket rullar iväg |
| 0:17 | paket |  | tanke |
| 0:17 | tanke | du | Skylten vid vägen fick röd PETG. Den syns från vägen nu. |
| 0:17 | väntar | du | Skylten vid vägen fick röd PETG. Den syns från vägen nu. |
| 0:17 | sak | notis:morgon | Webbshopen: 2 paket i natt · +302 kr · Ali vill ha idag: Cykelhjälm i PETG · +50 % |
| 0:17 | notis |  | 2 paket i natt · +302 kr |
| 0:17 | notis |  | Cykelhjälm i PETG · +50 % |
| 0:20 | tanke | du | Pappa kommer gående. Han bär på en kasse … |
| 0:20 | väntar | du | Pappa kommer gående. Han bär på en kasse … |
| 0:20 | scenInfo | pappa | Pappa kommer |
| 0:22 | klar | notis:morgon | Webbshopen: 2 paket i natt · +302 kr · Ali vill ha idag: Cykelhjälm i PETG · +50 % |
| 0:22 | struken | notis:🌇 Klockan är 21. Ali slår igen luckan.  | 🌇 Klockan är 21. Ali slår igen luckan. Dagens jobb är klart – gå in i skjulet och sov i sängen. |
| 0:23 | väntar | värld:HMPF. RÖD. | HMPF. RÖD. |
| 0:24 | sak | du | Kajakerna på tippen är kolfiber. Det behövs en kvarn som tål det. |
| 0:24 | pil |  | Bygg kolfiberkvarnen i linje 3 |
| 0:24 | notis | tanke | 💭 Kajakerna på tippen är kolfiber. Det behövs en kvarn som tål det. |
| 0:24 | röst | du | Kajakerna på tippen är kolfiber. Det behövs en kvarn som tål det. · MÅL |
| 0:25 | nick |  | nick:84 |
| 0:28 | väntar | rolf | ÖJ. Ja va int mä mej själv på konditoriet. Förlåt att ja prata så mycke. Bakom husvagnen fanns Birgittas trädgård. Nu ä dä bara nässlor. Ja har int rört den på sju år. Ja kan int. Men om nån annan började … Ja vet int. Du ä ju bra på skräp. MVH ROLF |
| 0:29 | tanke | du | Byggnadsnämnden. Igentejpat. Mycket tejp. |
| 0:29 | struken | du | Pappa kommer gående. Han bär på en kasse … |
| 0:29 | väntar | du | Byggnadsnämnden. Igentejpat. Mycket tejp. |
| 0:29 | paket |  | sms |
| 0:29 | väntar | mamma | Jag har skickat stickade raggsockor (för små) med Rolf. Den ligger i postlådan. |
| 0:30 | klar | du | Kajakerna på tippen är kolfiber. Det behövs en kvarn som tål det. |
| 0:30 | sak | rolf | ÖJ. Ja va int mä mej själv på konditoriet. Förlåt att ja prata så mycke. Bakom husvagnen fanns Birgittas trädgård. Nu ä dä bara nässlor. Ja har int rört den på sju år. Ja kan int. Men om nån annan började … Ja vet int. Du ä ju bra på skräp. MVH ROLF |
| 0:30 | lapp | Brev från Rolf | ÖJ. Ja va int mä mej själv på konditoriet. Förlåt att ja prata så mycke. Bakom husvagnen fanns Birgittas trädgård. Nu ä dä bara nässlor. Ja har int rört den på sju år. Ja kan int. Men om nån annan började … Ja vet int. Du ä ju bra på skräp. MVH ROLF |
| 0:30 | röst | rolf | ÖJ. Ja va int mä mej själv på konditoriet. Förlåt att ja prata så mycke. Bakom husvagnen fanns Birgittas trädgård. Nu ä dä bara nässlor. Ja har int rört den på sju år. Ja kan int. Men om nån annan började … Ja vet int. Du ä ju bra på skräp. MVH ROLF · STORY |
| 0:32 | händelse | printStart | sak=nyckelring |
| 0:33 | händelse | printKlar | sak=nyckelring n=13 |
| 0:33 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 0:35 | händelse | printStart | sak=kruka |
| 0:37 | händelse | printKlar | sak=kruka n=10 |
| 0:38 | händelse | tagitUrPrint | sak=kruka n=1 |
| 0:41 | händelse | printStart | sak=n2_hjalm |
| 0:45 | poolTom | du | 4 repliker använda |
| 0:45 | händelse | printKlar | sak=n2_hjalm n=3 |
| 0:47 | nej | du | Ta ut cykelhjälm i PETG |
| 0:47 | tanke | du | Fickorna är fulla. Jag får lägga något i ryggsäcken först. |
| 0:47 | struken | du | Byggnadsnämnden. Igentejpat. Mycket tejp. |
| 0:47 | väntar | du | Fickorna är fulla. Jag får lägga något i ryggsäcken först. |
| 0:47 | toast | fickskylt | Fulla fickor |
| 0:47 | fullaFickor | du | n2_hjalm |
| 0:47 | kvitto-visas | du | Fickorna är fulla. Jag får lägga något i ryggsäcken först. |
| 0:47 | sak | du | Fickorna är fulla. Jag får lägga något i ryggsäcken först. |
| 0:47 | notis | tanke | 💭 Fickorna är fulla. Jag får lägga något i ryggsäcken först. |
| 0:47 | händelse | tagitUrPrint | sak=n2_hjalm n=1 |
| 0:51 | klar | rolf | ÖJ. Ja va int mä mej själv på konditoriet. Förlåt att ja prata så mycke. Bakom husvagnen fanns Birgittas trädgård. Nu ä dä bara nässlor. Ja har int rört den på sju år. Ja kan int. Men om nån annan började … Ja vet int. Du ä ju bra på skräp. MVH ROLF |
| 0:51 | händelse | brevLast | id=tr_brev |
| 0:53 | sak | rolf | Hörru. Grannen står mä kikare i fönstret igen. Bry dej int. /R​ |
| 0:53 | sms | rolf | Hörru. Grannen står mä kikare i fönstret igen. Bry dej int. /R​ |
| 0:53 | sms-bubbla | rolf | Hörru. Grannen står mä kikare i fönstret igen. Bry dej int. /R​ |
| 0:53 | röst | rolf | Hörru. Grannen står mä kikare i fönstret igen. Bry dej int. /R​ · REAKTION |
| 0:54 | skratt | du | kvarnen rapar |
| 0:57 | toast | guld | 🧵 |
| 0:58 | klar | rolf | Hörru. Grannen står mä kikare i fönstret igen. Bry dej int. /R​ |
| 1:00 | sak | rolf | Nämen. Gå int genom gamla grniden bakom tippen. Dä ä floden. /R *grinden​ |
| 1:00 | sms | rolf | Nämen. Gå int genom gamla grniden bakom tippen. Dä ä floden. /R *grinden​ |
| 1:00 | sms-bubbla | rolf | Nämen. Gå int genom gamla grniden bakom tippen. Dä ä floden. /R *grinden​ |
| 1:00 | röst | rolf | Nämen. Gå int genom gamla grniden bakom tippen. Dä ä floden. /R *grinden​ · REAKTION |
| 1:01 | händelse | printStart | sak=n2_hjalm |
| 1:05 | händelse | printKlar | sak=n2_hjalm n=4 |
| 1:06 | toast | guld | 🧵 |
| 1:06 | händelse | tagitUrPrint | sak=n2_hjalm n=1 |
| 1:07 | klar | rolf | Nämen. Gå int genom gamla grniden bakom tippen. Dä ä floden. /R *grinden​ |
| 1:07 | väntar | du | Hmm… flaggan är uppe på Rolfs postlåda vid grinden. Har det kommit ett brev? |
| 1:07 | sak | du | Hmm… flaggan är uppe på Rolfs postlåda vid grinden. Har det kommit ett brev? |
| 1:07 | röst | du | Hmm… flaggan är uppe på Rolfs postlåda vid grinden. Har det kommit ett brev? · REAKTION |
| 1:15 | klar | du | Hmm… flaggan är uppe på Rolfs postlåda vid grinden. Har det kommit ett brev? |
| 1:20 | struken | notis:🔥 Varmt och skönt i skjulet trots kylan | 🔥 Varmt och skönt i skjulet trots kylan. |
| 1:20 | struken | notis:🤢 Något luktar … Mammas mat har möglat  | 🤢 Något luktar … Mammas mat har möglat och blommorna har vissnat. Trivseln sjunker. |
| 1:20 | struken | värld:HMPF. RÖD. | HMPF. RÖD. |
| 1:21 | webb | du | packade 1 nyckelring |
| 1:30 | sak | du | Skylten vid vägen fick röd PETG. Den syns från vägen nu. |
| 1:30 | notis | tanke | 💭 Skylten vid vägen fick röd PETG. Den syns från vägen nu. |
| 1:30 | röst | du | Skylten vid vägen fick röd PETG. Den syns från vägen nu. · STORY |
| 1:30 | webb | du | packade 1 kruka |
| 1:34 | klar | du | Skylten vid vägen fick röd PETG. Den syns från vägen nu. |
| 1:39 | webb | du | packade 2 n2_hjalm |
| 1:47 | sak | rolf | Dä blir kallt nu o du fyrser int. Respekt. Ja la jukeboxen från dödsbot i lådan. O lite pengar. Den spelar bara dansband. /R *fryser​ |
| 1:47 | sms | rolf | Dä blir kallt nu o du fyrser int. Respekt. Ja la jukeboxen från dödsbot i lådan. O lite pengar. Den spelar bara dansband. /R *fryser​ |
| 1:47 | sms-bubbla | rolf | Dä blir kallt nu o du fyrser int. Respekt. Ja la jukeboxen från dödsbot i lådan. O lite pengar. Den spelar bara dansband. /R *fryser​ |
| 1:47 | röst | rolf | Dä blir kallt nu o du fyrser int. Respekt. Ja la jukeboxen från dödsbot i lådan. O lite pengar. Den spelar bara dansband. /R *fryser​ · STORY |
| 1:53 | struken | info:bra | 📦 Paketet till Kenneth på bilskroten ligger i postlådan – Rolf tar det till posten |
| 1:53 | väntar | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har TAPETER. Och solcellspark. Mer säger jag inte. Gunnar vet. |
| 1:53 | radio | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har TAPETER. Och solcellspark. Mer säger jag inte. Gunnar vet. |
| 1:53 | skratt | du | Radio-Kjelle |
| 1:54 | struken | info:bra | 📦 Paketet till En lärare i Sundsvall ligger i postlådan – Rolf tar det till posten |
| 1:54 | struken | info:bra | 📦 Paketet till Ett kafé i Ystad ligger i postlådan – Rolf tar det till posten |
| 1:58 | klar | rolf | Dä blir kallt nu o du fyrser int. Respekt. Ja la jukeboxen från dödsbot i lådan. O lite pengar. Den spelar bara dansband. /R *fryser​ |
| 1:58 | händelse | printStart | sak=n2_hjalm |
| 2:00 | sak | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har TAPETER. Och solcellspark. Mer säger jag inte. Gunnar vet. |
| 2:00 | notis |  | 📻 Radio Tippen: Radio Tippen, Kjelle här. Skjulet vid tippen har TAPETER. Och solcellspark. Mer säger jag inte. Gunnar vet. |
| 2:00 | röst | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har TAPETER. Och solcellspark. Mer säger jag inte. Gunnar vet. · REAKTION |
| 2:03 | händelse | printKlar | sak=n2_hjalm n=5 |
| 2:03 | händelse | tagitUrPrint | sak=n2_hjalm n=1 |
| 2:03 | skratt | du | falsk tuta |
| 2:09 | klar | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har TAPETER. Och solcellspark. Mer säger jag inte. Gunnar vet. |
| 2:10 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 2:10 | röst | ali | Jag ska lära ut AI på pensionärsföreningen. Tisdagar. De är rädda. Jag var också rädd. · STORY |
| 2:10 | butiksbubbla | ali | Jag ska lära ut AI på pensionärsföreningen. Tisdagar. De är rädda. Jag var också rädd. |
| 2:12 | händelse | salt | sak=n2_hjalm n=1 |
| 2:12 | aliSalt | ali | 1995 |
| 2:12 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 2:13 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 2:14 | skratt | du | Alis dyr-pling |
| 2:14 | struken | info:guld | 3D-modell köpt – printa kolfiberkvarnen |
| 2:14 | händelse | kopt | sak=kolfkvarn |
| 2:14 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 2:21 | struken | ali | Ali här. Satt uppe med AI:n hela natten. Ritningen till Kolfiberkvarnen är klar. Kom innan nio, då stänger jag. |
| 2:27 | skratt | du | kvarnen rapar |
| 2:29 | toast | guld | 🧵 |
| 2:32 | sak | rolf | ÖJ! Båtklubben skulle rensa förrådet. Ja hjälpte till. Fråga int hur. /R​ |
| 2:32 | sms | rolf | ÖJ! Båtklubben skulle rensa förrådet. Ja hjälpte till. Fråga int hur. /R​ |
| 2:32 | sms-bubbla | rolf | ÖJ! Båtklubben skulle rensa förrådet. Ja hjälpte till. Fråga int hur. /R​ |
| 2:32 | röst | rolf | ÖJ! Båtklubben skulle rensa förrådet. Ja hjälpte till. Fråga int hur. /R​ · STORY |
| 2:33 | händelse | printStart | sak=byggsats:kolfkvarn |
| 2:36 | toast | bra | Del 1 av 4 klar |
| 2:38 | toast | bra | Del 2 av 4 klar |
| 2:39 | klar | rolf | ÖJ! Båtklubben skulle rensa förrådet. Ja hjälpte till. Fråga int hur. /R​ |
| 2:41 | toast | bra | Del 3 av 4 klar |
| 2:42 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 2:45 | poolTom | du | 4 repliker använda |
| 2:48 | skratt | du | kvarnen rapar |
| 2:51 | händelse | printKlar | sak=byggsats:kolfkvarn n=1 |
| 2:56 | toast | guld | 🧵 |
| 2:56 | händelse | tagitUrPrint | sak=byggsats:kolfkvarn n=1 |
| 2:59 | händelse | placerat | sak=kolfkvarn |
| 2:59 | händelse | malKlart | id=kolfkvarn del=Dag 11 – Kolfiberlinjen nasta=kolfband |
| 2:59 | bekräftelse | du | plats |
| 2:59 | väntar | du | Kajakerna är för stora att bära. Ett band från tippen. |
| 2:59 | målruta |  | Bygg rullbandet från tippen |
| 2:59 | MÅL |  | Bygg rullbandet från tippen |
| 3:00 | toast | guld | 🧵 |
| 3:00 | sak | du | Kajakerna är för stora att bära. Ett band från tippen. |
| 3:00 | pil |  | Bygg rullbandet från tippen |
| 3:00 | notis | tanke | 💭 Kajakerna är för stora att bära. Ett band från tippen. |
| 3:00 | röst | du | Kajakerna är för stora att bära. Ett band från tippen. · MÅL |
| 3:01 | nick |  | nick:85 |
| 3:02 | väntar | notis:📔 Prestation: Kajakmalaren · +3 respekt | 📔 Prestation: Kajakmalaren · +3 respekt |
| 3:03 | kvittens-bock |  | ✓ Bygg kolfiberkvarnen i linje 3 |
| 3:06 | klar | du | Kajakerna är för stora att bära. Ett band från tippen. |
| 3:17 | sak | mamma | Jag har skickat stickade raggsockor (för små) med Rolf. Den ligger i postlådan. |
| 3:17 | sms | mamma | Jag har skickat stickade raggsockor (för små) med Rolf. Den ligger i postlådan. |
| 3:17 | sms-bubbla | mamma | Jag har skickat stickade raggsockor (för små) med Rolf. Den ligger i postlådan. |
| 3:17 | röst | mamma | Jag har skickat stickade raggsockor (för små) med Rolf. Den ligger i postlådan. · STORY |
| 3:21 | händelse | printStart | sak=n2_hjalm |
| 3:24 | klar | mamma | Jag har skickat stickade raggsockor (för små) med Rolf. Den ligger i postlådan. |
| 3:25 | händelse | printKlar | sak=n2_hjalm n=6 |
| 3:26 | händelse | tagitUrPrint | sak=n2_hjalm n=1 |
| 3:28 | struken | notis:📔 Prestation: Kajakmalaren · +3 respekt | 📔 Prestation: Kajakmalaren · +3 respekt |
| 3:33 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 3:34 | händelse | salt | sak=n2_hjalm n=1 |
| 3:34 | aliSalt | ali | 1895 |
| 3:34 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 3:35 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 3:37 | skratt | du | Alis dyr-pling |
| 3:37 | struken | info:guld | 3D-modell köpt – printa rött rullband från tippen |
| 3:37 | händelse | kopt | sak=kolfband |
| 3:37 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 3:38 | väntar | ali | Din plast luktar ända hit. Det är ett bra tecken. |
| 3:38 | sak | ali | Din plast luktar ända hit. Det är ett bra tecken. |
| 3:38 | röst | ali | Din plast luktar ända hit. Det är ett bra tecken. · SMÅPRAT |
| 3:39 | bubbla |  | Din plast luktar ända hit. Det är ett bra tecken. |
| 3:43 | klar | ali | Din plast luktar ända hit. Det är ett bra tecken. |
| 3:50 | skratt | du | kvarnen rapar |
| 3:52 | toast | guld | 🧵 |
| 3:56 | händelse | printStart | sak=byggsats:kolfband |
| 3:58 | toast | bra | Del 1 av 4 klar |
| 4:01 | toast | bra | Del 2 av 4 klar |
| 4:01 | toast | guld | 🧵 |
| 4:03 | toast | bra | Del 3 av 4 klar |
| 4:05 | händelse | printKlar | sak=byggsats:kolfband n=1 |
| 4:06 | händelse | tagitUrPrint | sak=byggsats:kolfband n=1 |
| 4:08 | händelse | placerat | sak=kolfband |
| 4:08 | tanke | du | Rullbandet går – det hämtar kajaker och kanoter från tippen |
| 4:08 | väntar | du | Rullbandet går – det hämtar kajaker och kanoter från tippen |
| 4:08 | sak | du | Rullbandet går – det hämtar kajaker och kanoter från tippen |
| 4:08 | notis | tanke | 💭 Rullbandet går – det hämtar kajaker och kanoter från tippen |
| 4:08 | röst | du | Rullbandet går – det hämtar kajaker och kanoter från tippen · REAKTION |
| 4:08 | händelse | malKlart | id=kolfband del=Dag 11 – Kolfiberlinjen nasta=kajak3 |
| 4:08 | bekräftelse | du | plats |
| 4:08 | väntar | du | Bandet går. Nu ska kajakerna upp på det. |
| 4:08 | MÅL |  | Mata in kajaker med bandet · 0/3 |
| 4:10 | skratt | du | däcket rullar iväg |
| 4:10 | målruta |  | Mata in kajaker med bandet · 0/3 |
| 4:12 | kvittens-bock |  | ✓ Bygg rullbandet från tippen |
| 4:13 | klar | du | Rullbandet går – det hämtar kajaker och kanoter från tippen |
| 4:14 | sak | du | Bandet går. Nu ska kajakerna upp på det. |
| 4:14 | pil |  | Mata in kajaker med bandet · 0/3 |
| 4:14 | notis | tanke | 💭 Bandet går. Nu ska kajakerna upp på det. |
| 4:14 | röst | du | Bandet går. Nu ska kajakerna upp på det. · MÅL |
| 4:17 | väntar | värld:TUUT! Grann skylt! | TUUT! Grann skylt! |
| 4:19 | klar | du | Bandet går. Nu ska kajakerna upp på det. |
| 4:22 | tanke | du | Den åker själv. Jag står bara och tittar. Det här är framtiden. |
| 4:22 | väntar | du | Den åker själv. Jag står bara och tittar. Det här är framtiden. |
| 4:23 | händelse | printStart | sak=n2_hjalm |
| 4:27 | sak | värld:TUUT! Grann skylt! | TUUT! Grann skylt! |
| 4:27 | bubbla |  | TUUT! Grann skylt! |
| 4:27 | händelse | printKlar | sak=n2_hjalm n=7 |
| 4:28 | händelse | tagitUrPrint | sak=n2_hjalm n=1 |
| 4:30 | klar | värld:TUUT! Grann skylt! | TUUT! Grann skylt! |
| 4:32 | väntar | mamma | Jag har köpt julskinka för två. |
| 4:34 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 4:36 | tanke | du | Den åker själv. Jag står bara och tittar. Det här är framtiden. |
| 4:36 | struken | du | Den åker själv. Jag står bara och tittar. Det här är framtiden. |
| 4:36 | händelse | salt | sak=n2_hjalm n=1 |
| 4:36 | aliSalt | ali | 1800 |
| 4:36 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 4:38 | sak | du | Den åker själv. Jag står bara och tittar. Det här är framtiden. |
| 4:38 | notis | tanke | 💭 Den åker själv. Jag står bara och tittar. Det här är framtiden. |
| 4:38 | röst | du | Den åker själv. Jag står bara och tittar. Det här är framtiden. · STORY |
| 4:43 | klar | du | Den åker själv. Jag står bara och tittar. Det här är framtiden. |
| 4:45 | poolTom | du | 4 repliker använda |
| 4:50 | händelse | malKlart | id=kajak3 del=Dag 11 – Kolfiberlinjen nasta=kolfrulle |
| 4:50 | bekräftelse | du | plats |
| 4:50 | händelse | malKlart | id=kolfrulle del=Dag 11 – Kolfiberlinjen nasta=kolfskrivare |
| 4:50 | bekräftelse | du | plats |
| 4:50 | väntar | du | Kolfibern behöver en egen skrivare. Den bygger jag bredvid kolfiberkvarnen. |
| 4:50 | målruta |  | Spara till kolfiberskrivaren · 2 234 / 11 500 kr |
| 4:50 | MÅL |  | Spara till kolfiberskrivaren · 2 234 / 11 500 kr |
| 4:50 | upplåst | skrivare | kolfskrivare |
| 4:50 | brott | UPPLÅST | kolfskrivare (skrivare 943 av 60) |
| 4:50 | händelse | upplast | id=kolfskrivare flask=skrivare |
| 4:50 | paket |  | sms |
| 4:50 | väntar | ali | Ali här. Kolfiberskrivaren. Den tar bara svartgrått. Den är kräsen, som min fru. |
| 4:50 | sak | du | Kolfibern behöver en egen skrivare. Den bygger jag bredvid kolfiberkvarnen. |
| 4:50 | pil |  | Spara till kolfiberskrivaren · 2 234 / 11 500 kr |
| 4:50 | notis | tanke | 💭 Kolfibern behöver en egen skrivare. Den bygger jag bredvid kolfiberkvarnen. |
| 4:50 | röst | du | Kolfibern behöver en egen skrivare. Den bygger jag bredvid kolfiberkvarnen. · MÅL |
| 4:51 | nick |  | nick:88 |
| 4:54 | kvittens-bock |  | ✓ Mata in kajaker med bandet · 3/3 |
| 4:54 | kvittens-bock |  | ✓ Mal den första svartgrå rullen · 49 % |
| 4:57 | skratt | du | kvarnen rapar |
| 4:57 | klar | du | Kolfibern behöver en egen skrivare. Den bygger jag bredvid kolfiberkvarnen. |
| 5:02 | toast | guld | 🧵 |
| 5:05 | sak | ali | Ali här. Kolfiberskrivaren. Den tar bara svartgrått. Den är kräsen, som min fru. |
| 5:05 | sms | ali | Ali här. Kolfiberskrivaren. Den tar bara svartgrått. Den är kräsen, som min fru. |
| 5:05 | sms-bubbla | ali | Ali här. Kolfiberskrivaren. Den tar bara svartgrått. Den är kräsen, som min fru. |
| 5:05 | röst | ali | Ali här. Kolfiberskrivaren. Den tar bara svartgrått. Den är kräsen, som min fru. · STORY |
| 5:06 | händelse | printStart | sak=n2_hjalm |
| 5:11 | händelse | printKlar | sak=n2_hjalm n=8 |
| 5:11 | händelse | tagitUrPrint | sak=n2_hjalm n=1 |
| 5:15 | klar | ali | Ali här. Kolfiberskrivaren. Den tar bara svartgrått. Den är kräsen, som min fru. |
| 5:18 | brott | RADBRYTNING | för lång rad (48): "Spara till kolfiberskrivaren · 2 234 / 11 500 kr" |
| 5:18 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 5:20 | händelse | salt | sak=n2_hjalm n=1 |
| 5:20 | aliSalt | ali | 1710 |
| 5:20 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 5:30 | väntar | mamma | Mormor frågar om du har träffat någon på soptippen. Jag sa att du har en sopgubbe och en katt. Hon blev jätteglad. |
| 5:31 | väntar | värld:Mjau. | Mjau. |
| 5:32 | sak | värld:Mjau. | Mjau. |
| 5:32 | bubbla |  | Mjau. |
| 5:34 | klar | värld:Mjau. | Mjau. |
| 5:36 | skratt | du | kvarnen rapar |
| 5:37 | toast | guld | 🧵 |
| 5:42 | händelse | printStart | sak=n2_hjalm |
| 5:46 | händelse | printKlar | sak=n2_hjalm n=9 |
| 5:47 | händelse | tagitUrPrint | sak=n2_hjalm n=1 |
| 5:50 | skratt | du | falsk tuta |
| 5:54 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 5:55 | händelse | salt | sak=n2_hjalm n=1 |
| 5:55 | aliSalt | ali | 1625 |
| 5:55 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 5:56 | brott | RADBRYTNING | för lång rad (48): "Spara till kolfiberskrivaren · 3 944 / 11 500 kr" |
| 5:58 | väntar | notis:📔 Prestation: Ingen behöver så många ny | 📔 Prestation: Ingen behöver så många nycklar · +3 respekt |
| 5:58 | brott | RADBRYTNING | för lång rad (48): "Spara till kolfiberskrivaren · 5 569 / 11 500 kr" |
| 5:58 | sak | notis:📔 Prestation: Ingen behöver så många ny | 📔 Prestation: Ingen behöver så många nycklar · +3 respekt |
| 5:58 | notis |  | 📔 Prestation: Ingen behöver så många nycklar · +3 respekt |
| 6:00 | klar | notis:📔 Prestation: Ingen behöver så många ny | 📔 Prestation: Ingen behöver så många nycklar · +3 respekt |
| 6:04 | händelse | printStart | sak=n2_hjalm |
| 6:08 | händelse | printKlar | sak=n2_hjalm n=10 |
| 6:09 | händelse | tagitUrPrint | sak=n2_hjalm n=1 |
| 6:15 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 6:17 | händelse | salt | sak=n2_hjalm n=1 |
| 6:17 | aliSalt | ali | 1544 |
| 6:17 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 6:20 | struken | mamma | Jag har köpt julskinka för två. |
| 6:22 | väntar | bror | Mamma har gått med i en Facebookgrupp: "Föräldrar till barn som flyttat till konstiga ställen". Hon är admin nu. |
| 6:30 | skratt | du | kvarnen rapar |
| 6:33 | toast | guld | 🧵 |
| 6:36 | händelse | printStart | sak=n2_hjalm |
| 6:41 | händelse | printKlar | sak=n2_hjalm n=11 |
| 6:41 | händelse | tagitUrPrint | sak=n2_hjalm n=1 |
| 6:42 | toast | guld | 🧵 |
| 6:44 | brott | RADBRYTNING | för lång rad (48): "Spara till kolfiberskrivaren · 7 113 / 11 500 kr" |
| 6:45 | poolTom | du | 4 repliker använda |
| 6:48 | väntar | ali | Den köper jag. Ge hit. |
| 6:48 | sak | ali | Den köper jag. Ge hit. |
| 6:48 | röst | ali | Den köper jag. Ge hit. · REAKTION |
| 6:48 | upprepning | ali | Den köper jag. Ge hit. |
| 6:48 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 6:50 | händelse | salt | sak=n2_hjalm n=1 |
| 6:50 | aliSalt | ali | 1467 |
| 6:50 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 6:50 | klar | ali | Den köper jag. Ge hit. |
| 6:58 | händelse | printStart | sak=n2_hjalm |
| 7:03 | händelse | printKlar | sak=n2_hjalm n=12 |
| 7:03 | händelse | tagitUrPrint | sak=n2_hjalm n=1 |
| 7:05 | händelse | printStart | sak=n2_hjalm |
| 7:10 | händelse | printKlar | sak=n2_hjalm n=13 |
| 7:10 | händelse | tagitUrPrint | sak=n2_hjalm n=1 |
| 7:17 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 7:18 | händelse | salt | sak=n2_hjalm n=1 |
| 7:18 | aliSalt | ali | 1397 |
| 7:18 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 7:18 | händelse | salt | sak=n2_hjalm n=1 |
| 7:18 | aliSalt | ali | 1397 |
| 7:18 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 7:22 | brott | RADBRYTNING | för lång rad (49): "Spara till kolfiberskrivaren · 11 374 / 11 500 kr" |
| 7:27 | väntar | värld:Mjau. | Mjau. |
| 7:28 | sak | värld:Mjau. | Mjau. |
| 7:28 | bubbla |  | Mjau. |
| 7:30 | klar | värld:Mjau. | Mjau. |
| 7:32 | skratt | du | kvarnen rapar |
| 7:33 | toast | guld | 🧵 |
| 7:38 | händelse | printStart | sak=n2_hjalm |
| 7:39 | toast | guld | 🧵 |
| 7:39 | toast | guld | 🧵 |
| 7:39 | toast | guld | 🧵 |
| 7:39 | toast | guld | 🧵 |
| 7:39 | toast | guld | 🧵 |
| 7:39 | toast | guld | 🧵 |
| 7:39 | toast | guld | 🧵 |
| 7:39 | toast | guld | 🧵 |
| 7:39 | toast | guld | 🧵 |
| 7:40 | toast | guld | 🧵 |
| 7:40 | toast | guld | 🧵 |
| 7:40 | toast | guld | 🧵 |
| 7:40 | toast | guld | 🧵 |
| 7:40 | toast | guld | 🧵 |
| 7:42 | händelse | printKlar | sak=n2_hjalm n=14 |
| 7:43 | händelse | tagitUrPrint | sak=n2_hjalm n=1 |
| 7:50 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 7:51 | händelse | salt | sak=n2_hjalm n=1 |
| 7:51 | aliSalt | ali | 1397 |
| 7:51 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 7:52 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 7:54 | skratt | du | Alis dyr-pling |
| 7:54 | struken | info:guld | 3D-modell köpt – printa kolfiberskrivare |
| 7:54 | händelse | kopt | sak=kolfskrivare |
| 7:54 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 7:56 | morgonkort | ⏸️ Pausad | ⏸️ Pausad · Klicka för att fortsätta. |
| 8:04 | händelse | printStart | sak=byggsats:kolfskrivare |
| 8:06 | toast | bra | Del 1 av 5 klar |
| 8:09 | toast | bra | Del 2 av 5 klar |
| 8:11 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 8:12 | skratt | du | falsk tuta |
| 8:12 | väntar | värld:TUUT! Tjena! | TUUT! Tjena! |
| 8:12 | sak | värld:TUUT! Tjena! | TUUT! Tjena! |
| 8:12 | bubbla |  | TUUT! Tjena! |
| 8:15 | klar | värld:TUUT! Tjena! | TUUT! Tjena! |
| 8:19 | skratt | du | kvarnen rapar |
| 8:20 | väntar | mamma | Mormor frågar om du har träffat någon på soptippen. Jag sa att du har en sopgubbe och en katt. Hon blev jätteglad. |
| 8:20 | toast | bra | Del 3 av 5 klar |
| 8:25 | toast | bra | Del 4 av 5 klar |
| 8:29 | händelse | printKlar | sak=byggsats:kolfskrivare n=1 |
| 8:33 | händelse | tagitUrPrint | sak=byggsats:kolfskrivare n=1 |
| 8:35 | händelse | placerat | sak=kolfskrivare |
| 8:35 | händelse | malKlart | id=kolfskrivare del=Dag 12 – Kolfiberskrivaren nasta=kolfslang |
| 8:35 | bekräftelse | du | plats |
| 8:35 | väntar | du | Rullarna ska fram till skrivaren utan mig. En slang. |
| 8:35 | målruta |  | Bygg slangfördelaren |
| 8:36 | MÅL |  | Bygg slangfördelaren |
| 8:37 | sak | du | Rullarna ska fram till skrivaren utan mig. En slang. |
| 8:37 | pil |  | Bygg slangfördelaren |
| 8:37 | notis | tanke | 💭 Rullarna ska fram till skrivaren utan mig. En slang. |
| 8:37 | röst | du | Rullarna ska fram till skrivaren utan mig. En slang. · MÅL |
| 8:39 | kvittens-bock |  | ✓ Bygg kolfiberskrivaren i linje 3 |
| 8:42 | klar | du | Rullarna ska fram till skrivaren utan mig. En slang. |
| 8:45 | poolTom | du | 4 repliker använda |
| 8:46 | händelse | printStart | sak=n3_stol |
| 8:46 | toast | bra | 🔗 Slangen kopplad |
| 8:48 | struken | mamma | Mormor frågar om du har träffat någon på soptippen. Jag sa att du har en sopgubbe och en katt. Hon blev jätteglad. |
| 8:52 | händelse | printKlar | sak=n3_stol n=1 |
| 8:53 | händelse | tagitUrPrint | sak=n3_stol n=1 |
| 9:00 | väntar | ali | Den köper jag. Ge hit. |
| 9:00 | sak | ali | Den köper jag. Ge hit. |
| 9:00 | röst | ali | Den köper jag. Ge hit. · REAKTION |
| 9:00 | upprepning | ali | Den köper jag. Ge hit. |
| 9:00 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 9:01 | händelse | salt | sak=n3_stol n=1 |
| 9:01 | aliSalt | ali | 16000 |
| 9:01 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 9:02 | klar | ali | Den köper jag. Ge hit. |
| 9:02 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 9:04 | skratt | du | Alis dyr-pling |
| 9:04 | struken | info:guld | 3D-modell köpt – printa slangfördelare |
| 9:04 | händelse | kopt | sak=kolfslang |
| 9:04 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 9:06 | morgonkort | ⏸️ Pausad | ⏸️ Pausad · Klicka för att fortsätta. |
| 9:15 | händelse | printStart | sak=byggsats:kolfslang |
| 9:16 | toast | bra | Del 1 av 3 klar |
| 9:18 | toast | bra | Del 2 av 3 klar |
| 9:20 | händelse | printKlar | sak=byggsats:kolfslang n=1 |
| 9:21 | händelse | tagitUrPrint | sak=byggsats:kolfslang n=1 |
| 9:22 | händelse | placerat | sak=kolfslang |
| 9:22 | tanke | du | Slangfördelaren sitter – alla skrivare i linje 3 får kolfiber samtidigt |
| 9:22 | väntar | du | Slangfördelaren sitter – alla skrivare i linje 3 får kolfiber samtidigt |
| 9:22 | sak | du | Slangfördelaren sitter – alla skrivare i linje 3 får kolfiber samtidigt |
| 9:22 | notis | tanke | 💭 Slangfördelaren sitter – alla skrivare i linje 3 får kolfiber samtidigt |
| 9:22 | röst | du | Slangfördelaren sitter – alla skrivare i linje 3 får kolfiber samtidigt · REAKTION |
| 9:22 | händelse | malKlart | id=kolfslang del=Dag 12 – Kolfiberskrivaren nasta=kolfstol |
| 9:22 | bekräftelse | du | plats |
| 9:22 | händelse | malKlart | id=kolfstol del=Dag 12 – Kolfiberskrivaren nasta=f12-batteribank2 |
| 9:22 | bekräftelse | du | plats |
| 9:22 | väntar | du | Kolfibern drar mycket ström. Jag bygger en batteribank till. |
| 9:22 | MÅL |  | Köp batteribanken |
| 9:22 | upplåst | strom | bank2 |
| 9:22 | brott | UPPLÅST | bank2 (strom 16 av 15, sparat ihop) |
| 9:22 | händelse | upplast | id=bank2 flask=strom |
| 9:22 | paket |  | sms |
| 9:22 | väntar | ali | Ali här. En batteribank till. Kolfibret är hungrigt. Som min svåger. |
| 9:24 | målruta |  | Köp batteribanken |
| 9:26 | kvittens-bock |  | ✓ Bygg slangfördelaren |
| 9:26 | kvittens-bock |  | ✓ Printa en kolfiberstol |
| 9:28 | klar | du | Slangfördelaren sitter – alla skrivare i linje 3 får kolfiber samtidigt |
| 9:28 | sak | du | Kolfibern drar mycket ström. Jag bygger en batteribank till. |
| 9:28 | pil |  | Köp batteribanken |
| 9:28 | notis | tanke | 💭 Kolfibern drar mycket ström. Jag bygger en batteribank till. |
| 9:28 | röst | du | Kolfibern drar mycket ström. Jag bygger en batteribank till. · MÅL |
| 9:29 | nick |  | nick:91 |
| 9:35 | klar | du | Kolfibern drar mycket ström. Jag bygger en batteribank till. |
| 9:37 | brott | TRÄNGSEL 2 | "Ali här. En batteribank till. Kolfibret är hungrig" 2.0 s efter förra meddelandet, 14.7 s efter en klar uppgift |
| 9:37 | sak | ali | Ali här. En batteribank till. Kolfibret är hungrigt. Som min svåger. |
| 9:37 | sms | ali | Ali här. En batteribank till. Kolfibret är hungrigt. Som min svåger. |
| 9:37 | sms-bubbla | ali | Ali här. En batteribank till. Kolfibret är hungrigt. Som min svåger. |
| 9:37 | röst | ali | Ali här. En batteribank till. Kolfibret är hungrigt. Som min svåger. · STORY |
| 9:42 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 9:43 | skratt | du | Alis dyr-pling |
| 9:43 | struken | info:guld | 3D-modell köpt – printa batteribank |
| 9:43 | händelse | kopt | sak=bank |
| 9:43 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 9:43 | klar | ali | Ali här. En batteribank till. Kolfibret är hungrigt. Som min svåger. |
| 9:51 | händelse | printStart | sak=byggsats:bank |
| 9:53 | toast | bra | Del 1 av 2 klar |
| 9:54 | väntar | värld:TUUT! Tjena! | TUUT! Tjena! |
| 9:55 | sak | värld:TUUT! Tjena! | TUUT! Tjena! |
| 9:55 | bubbla |  | TUUT! Tjena! |
| 9:55 | händelse | printKlar | sak=byggsats:bank n=1 |
| 9:55 | händelse | tagitUrPrint | sak=byggsats:bank n=1 |
| 9:55 | skratt | du | falsk tuta |
| 9:58 | klar | värld:TUUT! Tjena! | TUUT! Tjena! |
| 10:02 | händelse | placerat | sak=bank |
| 10:02 | händelse | malKlart | id=f12-batteribank2 del=Dag 12 – Kolfiberskrivaren nasta=sov12 |
| 10:02 | paket |  | lapp |
| 10:02 | kvallsrad | du | Strömmen räcker inte till alla skrivare. |
| 10:02 | bekräftelse | du | plats |
| 10:02 | målruta |  | Sov när du vill |
| 10:02 | MÅL |  | Sov när du vill |
| 10:04 | sak | du | (nytt mål i rutan) |
| 10:04 | pil |  | Sov när du vill |
| 10:04 | klar | du | (nytt mål i rutan) |
| 10:04 | nick |  | nick:92 |
| 10:06 | kvittens-bock |  | ✓ Bygg en batteribank till |
| 10:09 | väntar | notis:🌇 Klockan är 21. Ali slår igen luckan.  | 🌇 Klockan är 21. Ali slår igen luckan. Dagens jobb är klart – gå in i skjulet och sov i sängen. |
| 10:10 | autosparning | du | natt 17 december |
| 10:10 | struken | bror | Mamma har gått med i en Facebookgrupp: "Föräldrar till barn som flyttat till konstiga ställen". Hon är admin nu. |
| 10:13 | webbBetalt | du | 4271 |
| 10:13 | paket |  | sms |
| 10:13 | väntar | rolf | Kajsa har fått lax tre dar i rad. Tack vare dina paket. Hon ä otrevilg mot mej nu. /R *otrevlig​ |
| 10:13 | nattkort | du | 🌙 7 dagar kvar. God natt. zzz… Strömmen räcker inte till alla skrivare. DAGENS PRINTAR Cykelhjälm i PETG × 12 Nyckelring × 1 Blomkruka × 1 Kolfiberstol × 1 Tot |

<details><summary>Botens handlingar dag 8</summary>

- 0:00 — dag 8 börjar — (994 kr)
- 0:11 popup: "FORTSÄTT" (994 kr)
- 0:28 gå till Rolfs postlåda (29 m) (994 kr)
- 0:31 gå till skrivaren (10 m) (994 kr)
- 0:32 printar Nyckelring (994 kr)
- 0:34 tar ut 1 st ur skrivaren (994 kr)
- 0:35 printar Blomkruka (994 kr)
- 0:38 tar ut 1 st ur skrivaren (994 kr)
- 0:39 gå till skrivaren (5 m) (994 kr)
- 0:41 printar Cykelhjälm i PETG (994 kr)
- 0:47 tar ut 1 st ur skrivaren (994 kr)
- 0:47 fulla fickor – lägger hammare i kistan (994 kr)
- 0:51 gå till en tunna (14 m) (994 kr)
- 0:54 gå till PETG-kvarnen (9 m) (994 kr)
- 0:54 tömmer det tunga i PETG-kvarnen (994 kr)
- 0:59 gå till skrivaren (4 m) (994 kr)
- 1:01 printar Cykelhjälm i PETG (994 kr)
- 1:07 tar ut 1 st ur skrivaren (994 kr)
- 1:12 gå till datorn (23 m) (994 kr)
- 1:20 panel: "Webbshopen · Soptippsvägen 1
B" (994 kr)
- 1:30 panel: "Webbshopen · Soptippsvägen 1
B" (994 kr)
- 1:38 panel: "Webbshopen · Soptippsvägen 1
B" (994 kr)
- 1:47 panel: "Webbshopen · Soptippsvägen 1
B" (994 kr)
- 1:53 gå till Rolfs postlåda (paket) (29 m) (994 kr)
- 1:55 webbshop: 3 paket i postlådan (994 kr)
- 1:55 tjänar pengar till kolfiberkvarnen: 994/2700 kr → printar cykelhjälm i petg (1995 kr) (994 kr)
- 1:57 gå till skrivaren (10 m) (994 kr)
- 1:58 printar Cykelhjälm i PETG (994 kr)
- 2:04 tar ut 1 st ur skrivaren (994 kr)
- 2:10 gå till Ali (30 m) (994 kr)
- 2:10 öppnar Alis butik – sälja (994 kr)
- 2:12 säljer hos Ali: +1995 kr (2989 kr)
- 2:13 öppnar Alis butik – köpa kolfiberkvarnen (2989 kr)
- 2:15 köper kolfkvarn för 2700 kr (289 kr)
- 2:23 gå till en tunna (37 m) (289 kr)
- 2:27 gå till PETG-kvarnen (12 m) (289 kr)
- 2:27 tömmer det tunga i PETG-kvarnen (289 kr)
- 2:32 gå till skrivaren (3 m) (289 kr)
- 2:33 printar Kolfiberkvarnen (4 delar) (289 kr)
- 2:45 gå till en tunna (14 m) (289 kr)
- 2:48 gå till PETG-kvarnen (10 m) (289 kr)
- 2:48 tömmer det tunga i PETG-kvarnen (289 kr)
- 2:56 gå till skrivaren (4 m) (289 kr)
- 2:57 tar ut 1 st ur skrivaren (289 kr)
- 2:58 gå till platsen för kolfiberkvarnen (5 m) (289 kr)
- 2:59 ställer ut kolfiberkvarnen (289 kr)
- 3:11 gå till Rolfs postlåda (13 m) (289 kr)
- 3:17 panel: "Rolfs postlåda
Det här låg i l" (3289 kr)
- 3:17 tjänar pengar till rött rullband från tippen: 3289/4750 kr → printar cykelhjälm i petg (1895 kr) (3289 kr)
- 3:19 gå till skrivaren (10 m) (3289 kr)
- 3:21 printar Cykelhjälm i PETG (3289 kr)
- 3:26 tar ut 1 st ur skrivaren (3289 kr)
- 3:33 gå till Ali (30 m) (3289 kr)
- 3:33 öppnar Alis butik – sälja (3289 kr)
- 3:34 säljer hos Ali: +1895 kr (5184 kr)
- 3:35 öppnar Alis butik – köpa rött rullband från tippen (5184 kr)
- 3:38 köper kolfband för 4750 kr (434 kr)
- 3:46 gå till en tunna (38 m) (434 kr)
- 3:50 gå till PETG-kvarnen (11 m) (434 kr)
- 3:50 tömmer det tunga i PETG-kvarnen (434 kr)
- 3:55 gå till skrivaren (3 m) (434 kr)
- 3:56 printar Rött rullband från tippen (4 delar) (434 kr)
- 4:07 tar ut 1 st ur skrivaren (434 kr)
- 4:08 gå till kolfiberkvarnen (5 m) (434 kr)
- 4:20 tjänar pengar till bandet hämtar kajaker: 434/584 kr → printar cykelhjälm i petg (1800 kr) (434 kr)
- 4:21 gå till skrivaren (4 m) (434 kr)
- 4:23 printar Cykelhjälm i PETG (434 kr)
- 4:28 tar ut 1 st ur skrivaren (434 kr)
- 4:34 gå till Ali (32 m) (434 kr)
- 4:34 öppnar Alis butik – sälja (434 kr)
- 4:36 säljer hos Ali: +1800 kr (2234 kr)
- 4:45 tjänar pengar till bandet hämtar kajaker: 2234/2384 kr → printar cykelhjälm i petg (1710 kr) (2234 kr)
- 4:53 gå till en tunna (39 m) (2234 kr)
- 4:57 gå till PETG-kvarnen (12 m) (2234 kr)
- 4:57 tömmer det tunga i PETG-kvarnen (2234 kr)
- 5:05 gå till skrivaren (4 m) (2234 kr)
- 5:06 printar Cykelhjälm i PETG (2234 kr)
- 5:12 tar ut 1 st ur skrivaren (2234 kr)
- 5:18 gå till Ali (31 m) (2234 kr)
- 5:18 öppnar Alis butik – sälja (2234 kr)
- 5:20 säljer hos Ali: +1710 kr (3944 kr)
- 5:24 tjänar pengar till kolfiberskrivaren: 3944/11500 kr → printar cykelhjälm i petg (1625 kr) (3944 kr)
- 5:32 gå till en tunna (40 m) (3944 kr)
- 5:36 gå till PETG-kvarnen (14 m) (3944 kr)
- 5:36 tömmer det tunga i PETG-kvarnen (3944 kr)
- 5:40 gå till skrivaren (3 m) (3944 kr)
- 5:42 printar Cykelhjälm i PETG (3944 kr)
- 5:47 tar ut 1 st ur skrivaren (3944 kr)
- 5:54 gå till Ali (31 m) (3944 kr)
- 5:54 öppnar Alis butik – sälja (3944 kr)
- 5:56 säljer hos Ali: +1625 kr (5569 kr)
- 5:56 tjänar pengar till kolfiberskrivaren: 5569/11500 kr → printar cykelhjälm i petg (1544 kr) (5569 kr)
- 6:02 gå till skrivaren (29 m) (5569 kr)
- 6:04 printar Cykelhjälm i PETG (5569 kr)
- 6:09 tar ut 1 st ur skrivaren (5569 kr)
- 6:15 gå till Ali (29 m) (5569 kr)
- 6:15 öppnar Alis butik – sälja (5569 kr)
- 6:17 säljer hos Ali: +1544 kr (7113 kr)
- 6:18 tjänar pengar till kolfiberskrivaren: 7113/11500 kr → printar cykelhjälm i petg (1467 kr) (7113 kr)
- 6:26 gå till en tunna (40 m) (7113 kr)
- 6:30 gå till PETG-kvarnen (15 m) (7113 kr)
- 6:30 tömmer det tunga i PETG-kvarnen (7113 kr)
- 6:35 gå till skrivaren (3 m) (7113 kr)
- 6:36 printar Cykelhjälm i PETG (7113 kr)
- 6:42 tar ut 1 st ur skrivaren (7113 kr)
- 6:48 gå till Ali (31 m) (7113 kr)
- 6:48 öppnar Alis butik – sälja (7113 kr)
- 6:50 säljer hos Ali: +1467 kr (8580 kr)
- 6:51 tjänar pengar till kolfiberskrivaren: 8580/11500 kr → printar cykelhjälm i petg (1397 kr) (8580 kr)
- 6:57 gå till skrivaren (29 m) (8580 kr)
- 6:58 printar Cykelhjälm i PETG (8580 kr)
- 7:04 tar ut 1 st ur skrivaren (8580 kr)
- 7:05 printar Cykelhjälm i PETG (8580 kr)
- 7:11 tar ut 1 st ur skrivaren (8580 kr)
- 7:17 gå till Ali (29 m) (8580 kr)
- 7:17 öppnar Alis butik – sälja (8580 kr)
- 7:19 säljer hos Ali: +2794 kr (11374 kr)
- 7:19 tjänar pengar till kolfiberskrivaren: 11374/11500 kr → printar cykelhjälm i petg (1397 kr) (11374 kr)
- 7:28 gå till en tunna (41 m) (11374 kr)
- 7:32 gå till PETG-kvarnen (12 m) (11374 kr)
- 7:32 tömmer det tunga i PETG-kvarnen (11374 kr)
- 7:36 gå till skrivaren (4 m) (11374 kr)
- 7:38 printar Cykelhjälm i PETG (11374 kr)
- 7:43 tar ut 1 st ur skrivaren (11374 kr)
- 7:50 gå till Ali (31 m) (11374 kr)
- 7:50 öppnar Alis butik – sälja (11374 kr)
- 7:52 säljer hos Ali: +1397 kr (12771 kr)
- 7:52 öppnar Alis butik – köpa kolfiberskrivare (12771 kr)
- 7:55 köper kolfskrivare för 11500 kr (1271 kr)
- 7:56 startmenyn syns – fortsätter spelet (1271 kr)
- 8:02 gå till skrivaren (29 m) (1271 kr)
- 8:04 printar Kolfiberskrivare (5 delar) (1271 kr)
- 8:15 gå till en tunna (20 m) (1271 kr)
- 8:19 gå till PETG-kvarnen (14 m) (1271 kr)
- 8:19 tömmer det tunga i PETG-kvarnen (1271 kr)
- 8:33 gå till skrivaren (4 m) (1271 kr)
- 8:33 tar ut 1 st ur skrivaren (1271 kr)
- 8:34 gå till platsen för kolfiberskrivare (5 m) (1271 kr)
- 8:35 ställer ut kolfiberskrivare (1271 kr)
- 8:44 tjänar pengar till slangfördelare: 1271/12500 kr → printar kolfiberstol (16000 kr) (1271 kr)
- 8:46 printar Kolfiberstol (1271 kr)
- 8:53 tar ut 1 st ur skrivaren (1271 kr)
- 9:00 gå till Ali (33 m) (1271 kr)
- 9:00 öppnar Alis butik – sälja (1271 kr)
- 9:02 säljer hos Ali: +16000 kr (17271 kr)
- 9:02 öppnar Alis butik – köpa slangfördelare (17271 kr)
- 9:05 köper kolfslang för 12500 kr (4771 kr)
- 9:06 startmenyn syns – fortsätter spelet (4771 kr)
- 9:13 gå till skrivaren (33 m) (4771 kr)
- 9:15 printar Slangfördelare (3 delar) (4771 kr)
- 9:21 tar ut 1 st ur skrivaren (4771 kr)
- 9:22 gå till kolfiberkvarnen (3 m) (4771 kr)
- 9:42 gå till Ali (36 m) (4771 kr)
- 9:42 öppnar Alis butik – köpa batteribank (4771 kr)
- 9:44 köper bank för 1600 kr (3171 kr)
- 9:49 gå till skrivaren (23 m) (3171 kr)
- 9:51 printar Batteribank (2 delar) (3171 kr)
- 9:55 tar ut 1 st ur skrivaren (3171 kr)
- 10:01 gå till platsen för batteribank (26 m) (3171 kr)
- 10:02 ställer ut batteribank (3171 kr)
- 10:10 gå till sängen (21 m) (3171 kr)

</details>

## Dag 9

| Tid | Källa | Vem | Text |
|---|---|---|---|
| 10:13 | vara | ali | n2_vas |
| 10:13 | händelse | malKlart | id=sov12 del=Dag 12 – Kolfiberskrivaren nasta=f13-bygg-gamingboden |
| 10:13 | bekräftelse | du | plats |
| 10:13 | MÅL |  | Bygg gamingboden |
| 0:00 | autosparning | du | morgon 18 december |
| 0:01 | händelse | dagenBorjar | dag=9 |
| 0:01 | meddelande | du | 6 dagar till jul. Utan ett eget rum är det bara ett skjul. |
| 0:01 | dagbokkort | du | Gamingboden. · 6 dagar till jul. Utan ett eget rum är det bara ett skjul. |
| 0:01 | röst | du | 6 dagar till jul. Gamingboden. Utan ett eget rum är det bara ett skjul. · STORY |
| 0:03 | paket |  | sms |
| 0:03 | väntar | rolf | ÖJ! Ny lapp i lådan. Du vet va dä betyder. /R​ |
| 0:08 | väntar | notis:morgon | Webbshopen: 3 paket i natt · +4 271 kr · Ali vill ha idag: Designvas i röd PETG · +50 % |
| 0:08 | händelse | morgonkortStangt | dag=9 |
| 0:08 | väntar | du | En bod för spel. Jag förtjänar det. |
| 0:08 | målruta |  | Bygg gamingboden |
| 0:11 | väntar | mamma | Paketet kom tillbaka. Det står "Okänd mottagare". Är du ens skriven där? Vart ska jag skicka din post? |
| 0:11 | paket |  | lapp → toast |
| 0:11 | lapp | 📔 Dagbok | Mammas paket kom tillbaka: "Okänd mottagare". Det här är mitt hem, men på pappret finns jag inte här. |
| 0:11 | dagbokrad | du | Mammas paket kom tillbaka: "Okänd mottagare". Det här är mitt hem, men på pappret finns jag inte här. |
| 0:11 | väntar | notis:Mammas paket kom tillbaka: "Okänd mottag | Mammas paket kom tillbaka: "Okänd mottagare". Det här är mitt hem, men på pappret finns jag inte här. |
| 0:11 | väntar | notis:💡 Poletten trillar ner: du bor faktiskt | 💡 Poletten trillar ner: du bor faktiskt här. Nytt mål: bli folkbokförd (tavlan vid vägen). |
| 0:11 | sak | notis:Mammas paket kom tillbaka: "Okänd mottag | Mammas paket kom tillbaka: "Okänd mottagare". Det här är mitt hem, men på pappret finns jag inte här. |
| 0:11 | notis | dagbok | Mammas paket kom tillbaka: "Okänd mottagare". Det här är mitt hem, men på pappret finns jag inte här. |
| 0:12 | tanke | du | Rolf har flyttat ut gärdesgården! Ny mark att utforska – men saker ställer jag bara på mark jag äger. |
| 0:12 | väntar | du | Rolf har flyttat ut gärdesgården! Ny mark att utforska – men saker ställer jag bara på mark jag äger. |
| 0:13 | klar | notis:Mammas paket kom tillbaka: "Okänd mottag | Mammas paket kom tillbaka: "Okänd mottagare". Det här är mitt hem, men på pappret finns jag inte här. |
| 0:13 | sak | du | Rolf har flyttat ut gärdesgården! Ny mark att utforska – men saker ställer jag bara på mark jag äger. |
| 0:13 | notis | tanke | 💭 Rolf har flyttat ut gärdesgården! Ny mark att utforska – men saker ställer jag bara på mark jag äger. |
| 0:13 | röst | du | Rolf har flyttat ut gärdesgården! Ny mark att utforska – men saker ställer jag bara på mark jag äger. · REAKTION |
| 0:23 | klar | du | Rolf har flyttat ut gärdesgården! Ny mark att utforska – men saker ställer jag bara på mark jag äger. |
| 0:23 | sak | notis:morgon | Webbshopen: 3 paket i natt · +4 271 kr · Ali vill ha idag: Designvas i röd PETG · +50 % |
| 0:23 | notis |  | 3 paket i natt · +4 271 kr |
| 0:23 | notis |  | Designvas i röd PETG · +50 % |
| 0:27 | klar | notis:morgon | Webbshopen: 3 paket i natt · +4 271 kr · Ali vill ha idag: Designvas i röd PETG · +50 % |
| 0:33 | poolTom | du | 4 repliker använda |
| 0:33 | sak | du | En bod för spel. Jag förtjänar det. |
| 0:33 | pil |  | Bygg gamingboden |
| 0:33 | notis | tanke | 💭 En bod för spel. Jag förtjänar det. |
| 0:33 | röst | du | En bod för spel. Jag förtjänar det. · MÅL |
| 0:33 | nick |  | nick:93 |
| 0:37 | händelse | printStart | sak=n2_vas |
| 0:39 | klar | du | En bod för spel. Jag förtjänar det. |
| 0:40 | händelse | printKlar | sak=n2_vas n=16 |
| 0:41 | händelse | tagitUrPrint | sak=n2_vas n=1 |
| 0:41 | struken | notis:🌇 Klockan är 21. Ali slår igen luckan.  | 🌇 Klockan är 21. Ali slår igen luckan. Dagens jobb är klart – gå in i skjulet och sov i sängen. |
| 0:44 | väntar | värld:Mjau. | Mjau. |
| 0:47 | sak | notis:💡 Poletten trillar ner: du bor faktiskt | 💡 Poletten trillar ner: du bor faktiskt här. Nytt mål: bli folkbokförd (tavlan vid vägen). |
| 0:47 | toast | guld | 💡 Poletten trillar ner: du bor faktiskt här. Nytt mål: bli folkbokförd (tavlan vid vägen). |
| 0:47 | notis | guld | 💡 Poletten trillar ner: du bor faktiskt här. Nytt mål: bli folkbokförd (tavlan vid vägen). |
| 0:49 | skratt | du | kvarnen rapar |
| 0:49 | klar | notis:💡 Poletten trillar ner: du bor faktiskt | 💡 Poletten trillar ner: du bor faktiskt här. Nytt mål: bli folkbokförd (tavlan vid vägen). |
| 0:53 | toast | guld | 🧵 |
| 0:55 | händelse | printStart | sak=n2_vas |
| 0:58 | händelse | printKlar | sak=n2_vas n=17 |
| 0:59 | händelse | tagitUrPrint | sak=n2_vas n=1 |
| 1:00 | toast | guld | 🧵 |
| 1:02 | sak | rolf | ÖJ! Ny lapp i lådan. Du vet va dä betyder. /R​ |
| 1:02 | sms | rolf | ÖJ! Ny lapp i lådan. Du vet va dä betyder. /R​ |
| 1:02 | sms-bubbla | rolf | ÖJ! Ny lapp i lådan. Du vet va dä betyder. /R​ |
| 1:02 | röst | rolf | ÖJ! Ny lapp i lådan. Du vet va dä betyder. /R​ · STORY |
| 1:03 | händelse | printStart | sak=nyckelring |
| 1:03 | händelse | printKlar | sak=nyckelring n=14 |
| 1:04 | nej | du | Ta ut nyckelring |
| 1:04 | tanke | du | Fickorna är fulla. Jag får lägga något i ryggsäcken först. |
| 1:04 | väntar | du | Fickorna är fulla. Jag får lägga något i ryggsäcken först. |
| 1:04 | toast | fickskylt | Fulla fickor |
| 1:04 | fullaFickor | du | nyckelring |
| 1:04 | kvitto-visas | du | Fickorna är fulla. Jag får lägga något i ryggsäcken först. |
| 1:04 | sak | du | Fickorna är fulla. Jag får lägga något i ryggsäcken först. |
| 1:04 | notis | tanke | 💭 Fickorna är fulla. Jag får lägga något i ryggsäcken först. |
| 1:04 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 1:06 | händelse | printStart | sak=nyckelring |
| 1:07 | klar | rolf | ÖJ! Ny lapp i lådan. Du vet va dä betyder. /R​ |
| 1:07 | händelse | printKlar | sak=nyckelring n=15 |
| 1:07 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 1:09 | struken | värld:Mjau. | Mjau. |
| 1:21 | webb | du | packade 2 n2_vas |
| 1:29 | webb | du | packade 2 nyckelring |
| 1:39 | väntar | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått rött rullband från tippen. Och kolfiberskrivare. Skriv in, Gunnar. Du skriver aldrig in. |
| 1:39 | radio | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått rött rullband från tippen. Och kolfiberskrivare. Skriv in, Gunnar. Du skriver aldrig in. |
| 1:39 | skratt | du | Radio-Kjelle |
| 1:39 | sak | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått rött rullband från tippen. Och kolfiberskrivare. Skriv in, Gunnar. Du skriver aldrig in. |
| 1:39 | notis |  | 📻 Radio Tippen: Radio Tippen, Kjelle här. Skjulet vid tippen har fått rött rullband från tippen. Och kolfiberskrivare. Skriv in, Gunnar. Du skriver aldrig in. |
| 1:39 | röst | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått rött rullband från tippen. Och kolfiberskrivare. Skriv in, Gunnar. Du skriver aldrig in. · REAKTION |
| 1:44 | struken | info:bra | 📦 Paketet till Majken, 91, i Skellefteå ligger i postlådan – Rolf tar det till posten |
| 1:44 | struken | info:bra | 📦 Paketet till Någon som bara skrev "hej" ligger i postlådan – Rolf tar det till posten |
| 1:49 | händelse | printStart | sak=n3_stol |
| 1:51 | klar | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått rött rullband från tippen. Och kolfiberskrivare. Skriv in, Gunnar. Du skriver aldrig in. |
| 1:53 | skratt | du | däcket rullar iväg |
| 1:56 | händelse | printKlar | sak=n3_stol n=2 |
| 1:56 | händelse | tagitUrPrint | sak=n3_stol n=1 |
| 1:58 | händelse | printStart | sak=n3_stol |
| 1:59 | sak | mamma | Paketet kom tillbaka. Det står "Okänd mottagare". Är du ens skriven där? Vart ska jag skicka din post? |
| 1:59 | sms | mamma | Paketet kom tillbaka. Det står "Okänd mottagare". Är du ens skriven där? Vart ska jag skicka din post? |
| 1:59 | sms-bubbla | mamma | Paketet kom tillbaka. Det står "Okänd mottagare". Är du ens skriven där? Vart ska jag skicka din post? |
| 1:59 | röst | mamma | Paketet kom tillbaka. Det står "Okänd mottagare". Är du ens skriven där? Vart ska jag skicka din post? · STORY |
| 2:05 | händelse | printKlar | sak=n3_stol n=3 |
| 2:05 | händelse | tagitUrPrint | sak=n3_stol n=1 |
| 2:07 | klar | mamma | Paketet kom tillbaka. Det står "Okänd mottagare". Är du ens skriven där? Vart ska jag skicka din post? |
| 2:07 | händelse | printStart | sak=n3_stol |
| 2:09 | väntar | bud | (tips) |
| 2:09 | sak | bud | (tips) |
| 2:10 | klar | bud | (tips) |
| 2:12 | meddelande | mamma | Har du borstat tänderna idag? Ljug inte. Jag hör om du ljuger. Även på sms. |
| 2:14 | röst | mamma | Har du borstat tänderna idag? Ljug inte. Jag hör om du ljuger. Även på sms. · STORY |
| 2:22 | paket |  | sms |
| 2:22 | väntar | mamma | Bra. Jag tror dig. Nästan. |
| 2:30 | händelse | brevLast | id=m_tandborste |
| 2:31 | händelse | printKlar | sak=n3_stol n=4 |
| 2:32 | händelse | tagitUrPrint | sak=n3_stol n=1 |
| 2:33 | poolTom | du | 4 repliker använda |
| 2:38 | väntar | ali | Har du printat nåt nytt? Visa! |
| 2:38 | sak | ali | Har du printat nåt nytt? Visa! |
| 2:38 | röst | ali | Har du printat nåt nytt? Visa! · SMÅPRAT |
| 2:39 | väntar | ali | Den köper jag. Ge hit. |
| 2:39 | bubbla |  | Har du printat nåt nytt? Visa! |
| 2:39 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 2:39 | butiksbubbla | ali | Min fru säger att jag pratar annorlunda. Snabbare. Hon är orolig. Jag är inte orolig. Jag är vaken. |
| 2:41 | händelse | salt | sak=n3_stol n=1 |
| 2:41 | aliSalt | ali | 16000 |
| 2:41 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 2:41 | händelse | salt | sak=n3_stol n=1 |
| 2:41 | aliSalt | ali | 15200 |
| 2:41 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 2:41 | händelse | salt | sak=n3_stol n=1 |
| 2:41 | aliSalt | ali | 14440 |
| 2:41 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 2:42 | klar | ali | Har du printat nåt nytt? Visa! |
| 2:42 | röst | ali | Min fru säger att jag pratar annorlunda. Snabbare. Hon är orolig. Jag är inte orolig. Jag är vaken. · STORY |
| 2:42 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 2:44 | skratt | du | Alis dyr-pling |
| 2:44 | struken | info:guld | 3D-modell köpt – printa gamingbod (tillbyggnad) |
| 2:44 | händelse | kopt | sak=gamingbod |
| 2:44 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 2:52 | händelse | printStart | sak=byggsats:gamingbod |
| 2:54 | upplåst | skrivare_kolf | trim_kolf1 |
| 2:54 | brott | UPPLÅST | trim_kolf1 (skrivare_kolf 130 av 75) |
| 2:54 | händelse | upplast | id=trim_kolf1 flask=skrivare_kolf |
| 2:54 | paket |  | sms |
| 2:54 | väntar | ali | Ali här. Trim till kolfiberskrivaren. Kolfiber är segt. Skrivaren behöver hjälp. |
| 2:55 | toast | bra | Del 1 av 6 klar |
| 2:58 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 2:58 | väntar | notis:Skrivare L: Tornet är tomt – mal mer så  | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 3:00 | väntar | värld:HMPF. | HMPF. |
| 3:00 | skratt | du | Bengt-Åke nickar |
| 3:00 | scenInfo | bengt | sänker kikaren och nickar |
| 3:06 | sak | ali | Den köper jag. Ge hit. |
| 3:06 | röst | ali | Den köper jag. Ge hit. · REAKTION |
| 3:06 | upprepning | ali | Den köper jag. Ge hit. |
| 3:08 | toast | bra | Del 2 av 6 klar |
| 3:09 | klar | ali | Den köper jag. Ge hit. |
| 3:09 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 3:10 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 3:11 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 3:12 | toast | bra | Del 3 av 6 klar |
| 3:12 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 3:15 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 3:15 | toast | bra | Del 4 av 6 klar |
| 3:16 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 3:17 | sak | notis:Skrivare L: Tornet är tomt – mal mer så  | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 3:17 | notis | fel | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 3:18 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 3:19 | toast | bra | Del 5 av 6 klar |
| 3:19 | klar | notis:Skrivare L: Tornet är tomt – mal mer så  | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 3:21 | struken | värld:HMPF. | HMPF. |
| 3:23 | händelse | printKlar | sak=byggsats:gamingbod n=1 |
| 3:30 | sak | rolf | Kajsa har fått lax tre dar i rad. Tack vare dina paket. Hon ä otrevilg mot mej nu. /R *otrevlig​ |
| 3:30 | sms | rolf | Kajsa har fått lax tre dar i rad. Tack vare dina paket. Hon ä otrevilg mot mej nu. /R *otrevlig​ |
| 3:30 | sms-bubbla | rolf | Kajsa har fått lax tre dar i rad. Tack vare dina paket. Hon ä otrevilg mot mej nu. /R *otrevlig​ |
| 3:30 | röst | rolf | Kajsa har fått lax tre dar i rad. Tack vare dina paket. Hon ä otrevilg mot mej nu. /R *otrevlig​ · STORY |
| 3:30 | händelse | tagitUrPrint | sak=byggsats:gamingbod n=1 |
| 3:30 | paket |  | sms |
| 3:30 | väntar | ali | Ali här. Du printade Gamingbod (tillbyggnad) från min ritning. Och det FUNKAR? Jag har bara sett sånt på YouTube. |
| 3:34 | tanke | du | Gamingboden står klar! Det är ett tomt skal – inred den, flytta in grejerna och bygg ut den. |
| 3:34 | väntar | du | Gamingboden står klar! Det är ett tomt skal – inred den, flytta in grejerna och bygg ut den. |
| 3:34 | händelse | malKlart | id=f13-bygg-gamingboden del=Dag 13 – Gamingboden nasta=f13-stall-in-gamersak |
| 3:34 | bekräftelse | du | plats |
| 3:34 | väntar | bror | Mamma har ringt Skatteverket. Två gånger. De sa att du måste äga där du bor eller ha ett kontrakt. Hon frågade om de kunde göra ett undantag "för det är ju mitt barn". De kunde inte. |
| 3:34 | struken | du | Gamingboden står klar! Det är ett tomt skal – inred den, flytta in grejerna och bygg ut den. |
| 3:34 | väntar | du | Boden är tom. Något att spela på. |
| 3:34 | MÅL |  | Ställ in en gamersak i boden |
| 3:37 | målruta |  | Ställ in en gamersak i boden |
| 3:38 | klar | rolf | Kajsa har fått lax tre dar i rad. Tack vare dina paket. Hon ä otrevilg mot mej nu. /R *otrevlig​ |
| 3:38 | sak | ali | Ali här. Du printade Gamingbod (tillbyggnad) från min ritning. Och det FUNKAR? Jag har bara sett sånt på YouTube. |
| 3:38 | sms | ali | Ali här. Du printade Gamingbod (tillbyggnad) från min ritning. Och det FUNKAR? Jag har bara sett sånt på YouTube. |
| 3:38 | sms-bubbla | ali | Ali här. Du printade Gamingbod (tillbyggnad) från min ritning. Och det FUNKAR? Jag har bara sett sånt på YouTube. |
| 3:38 | röst | ali | Ali här. Du printade Gamingbod (tillbyggnad) från min ritning. Och det FUNKAR? Jag har bara sett sånt på YouTube. · REAKTION |
| 3:38 | kvittens-bock |  | ✓ Bygg gamingboden |
| 3:50 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 3:51 | klar | ali | Ali här. Du printade Gamingbod (tillbyggnad) från min ritning. Och det FUNKAR? Jag har bara sett sånt på YouTube. |
| 3:51 | sak | ali | Ali här. Trim till kolfiberskrivaren. Kolfiber är segt. Skrivaren behöver hjälp. |
| 3:51 | sms | ali | Ali här. Trim till kolfiberskrivaren. Kolfiber är segt. Skrivaren behöver hjälp. |
| 3:51 | sms-bubbla | ali | Ali här. Trim till kolfiberskrivaren. Kolfiber är segt. Skrivaren behöver hjälp. |
| 3:51 | röst | ali | Ali här. Trim till kolfiberskrivaren. Kolfiber är segt. Skrivaren behöver hjälp. · STORY |
| 3:59 | händelse | printStart | sak=kyl |
| 3:59 | skratt | du | falsk tuta |
| 3:59 | väntar | värld:TUUT! Hej grannen! | TUUT! Hej grannen! |
| 3:59 | klar | ali | Ali här. Trim till kolfiberskrivaren. Kolfiber är segt. Skrivaren behöver hjälp. |
| 3:59 | sak | du | Boden är tom. Något att spela på. |
| 3:59 | pil |  | Ställ in en gamersak i boden |
| 3:59 | notis | tanke | 💭 Boden är tom. Något att spela på. |
| 3:59 | röst | du | Boden är tom. Något att spela på. · MÅL |
| 4:04 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 4:04 | klar | du | Boden är tom. Något att spela på. |
| 4:04 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 4:05 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 4:06 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 4:07 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 4:08 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 4:08 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 4:09 | väntar | foto | Boden |
| 4:09 | paket |  | tanke |
| 4:09 | tanke | du | Min egen bod. Här är det ingen som tjatar. |
| 4:09 | väntar | du | Min egen bod. Här är det ingen som tjatar. |
| 4:09 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 4:10 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 4:11 | väntar | bror | Visade bilder på ditt skjul för polarna. Dom trodde det var en Airbnb. Jag sa inte emot. |
| 4:16 | sak | värld:TUUT! Hej grannen! | TUUT! Hej grannen! |
| 4:16 | bubbla |  | TUUT! Hej grannen! |
| 4:17 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 4:19 | klar | värld:TUUT! Hej grannen! | TUUT! Hej grannen! |
| 4:19 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 4:20 | händelse | printKlar | sak=kyl n=1 |
| 4:21 | skratt | du | kvarnen spottar |
| 4:27 | sak | foto | Boden |
| 4:27 | foto | du | Boden |
| 4:27 | händelse | tagitUrPrint | sak=kyl n=1 |
| 4:29 | klar | foto | Boden |
| 4:33 | poolTom | du | 4 repliker använda |
| 4:33 | händelse | placerat | sak=kyl |
| 4:33 | händelse | malKlart | id=f13-stall-in-gamersak del=Dag 13 – Gamingboden nasta=jet14 |
| 4:33 | bekräftelse | du | plats |
| 4:33 | väntar | du | Jetmotorn ska sitta på kolfiberkvarnen. Vad kan gå fel. |
| 4:33 | målruta |  | Montera jetmotorn på kolfiberkvarnen |
| 4:33 | MÅL |  | Montera jetmotorn på kolfiberkvarnen |
| 4:33 | sak | du | Jetmotorn ska sitta på kolfiberkvarnen. Vad kan gå fel. |
| 4:33 | pil |  | Montera jetmotorn på kolfiberkvarnen |
| 4:33 | notis | tanke | 💭 Jetmotorn ska sitta på kolfiberkvarnen. Vad kan gå fel. |
| 4:33 | röst | du | Jetmotorn ska sitta på kolfiberkvarnen. Vad kan gå fel. · MÅL |
| 4:33 | nick |  | nick:95 |
| 4:37 | kvittens-bock |  | ✓ Ställ in en gamersak i boden |
| 4:39 | klar | du | Jetmotorn ska sitta på kolfiberkvarnen. Vad kan gå fel. |
| 4:47 | sak | mamma | Bra. Jag tror dig. Nästan. |
| 4:47 | sms | mamma | Bra. Jag tror dig. Nästan. |
| 4:47 | sms-bubbla | mamma | Bra. Jag tror dig. Nästan. |
| 4:47 | röst | mamma | Bra. Jag tror dig. Nästan. · STORY |
| 4:48 | händelse | printStart | sak=n3_stol |
| 4:51 | klar | mamma | Bra. Jag tror dig. Nästan. |
| 4:55 | händelse | printKlar | sak=n3_stol n=5 |
| 4:55 | händelse | tagitUrPrint | sak=n3_stol n=1 |
| 4:57 | väntar | rolf | Fick en kajak i lasset. Ingen paddel. Typiskt. Ja la den vid grinden åt dig. /R |
| 4:59 | sak | du | Min egen bod. Här är det ingen som tjatar. |
| 4:59 | notis | tanke | 💭 Min egen bod. Här är det ingen som tjatar. |
| 4:59 | röst | du | Min egen bod. Här är det ingen som tjatar. · STORY |
| 5:02 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 5:04 | klar | du | Min egen bod. Här är det ingen som tjatar. |
| 5:04 | händelse | salt | sak=n3_stol n=1 |
| 5:04 | aliSalt | ali | 13718 |
| 5:04 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 5:05 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 5:06 | skratt | du | Alis dyr-pling |
| 5:06 | struken | info:guld | 3D-modell köpt – printa jetmotor med efterbrännare |
| 5:06 | händelse | kopt | sak=jetmotor |
| 5:06 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 5:16 | händelse | printStart | sak=byggsats:jetmotor |
| 5:18 | toast | bra | Del 1 av 4 klar |
| 5:20 | toast | bra | Del 2 av 4 klar |
| 5:22 | toast | bra | Del 3 av 4 klar |
| 5:24 | händelse | printKlar | sak=byggsats:jetmotor n=1 |
| 5:24 | händelse | tagitUrPrint | sak=byggsats:jetmotor n=1 |
| 5:26 | händelse | placerat | sak=jetmotor |
| 5:26 | tanke | du | JETMOTOR! Kolfiberkvarnen mal 6× snabbare. |
| 5:26 | väntar | du | JETMOTOR! Kolfiberkvarnen mal 6× snabbare. |
| 5:26 | sak | du | JETMOTOR! Kolfiberkvarnen mal 6× snabbare. |
| 5:26 | notis | tanke | 💭 JETMOTOR! Kolfiberkvarnen mal 6× snabbare. |
| 5:26 | röst | du | JETMOTOR! Kolfiberkvarnen mal 6× snabbare. · REAKTION |
| 5:26 | händelse | malKlart | id=jet14 del=Dag 14 – Jetmotorn nasta=f14-bygg-leveransladan |
| 5:26 | bekräftelse | du | plats |
| 5:26 | väntar | du | En leveranslåda. Då säljer fabriken själv. |
| 5:26 | MÅL |  | Bygg leveranslådan |
| 5:28 | målruta |  | Bygg leveranslådan |
| 5:29 | klar | du | JETMOTOR! Kolfiberkvarnen mal 6× snabbare. |
| 5:30 | kvittens-bock |  | ✓ Montera jetmotorn på kolfiberkvarnen |
| 5:32 | sak | du | En leveranslåda. Då säljer fabriken själv. |
| 5:32 | pil |  | Bygg leveranslådan |
| 5:32 | notis | tanke | 💭 En leveranslåda. Då säljer fabriken själv. |
| 5:32 | röst | du | En leveranslåda. Då säljer fabriken själv. · MÅL |
| 5:32 | nick |  | nick:96 |
| 5:33 | händelse | printStart | sak=n3_stol |
| 5:37 | klar | du | En leveranslåda. Då säljer fabriken själv. |
| 5:39 | händelse | printKlar | sak=n3_stol n=6 |
| 5:40 | händelse | tagitUrPrint | sak=n3_stol n=1 |
| 5:43 | paket |  | tanke |
| 5:43 | tanke | du | Raggsockorna runt jetmotorn. Äntligen passar de nåt. |
| 5:43 | väntar | du | Raggsockorna runt jetmotorn. Äntligen passar de nåt. |
| 5:43 | skratt | du | raggsockorna |
| 5:45 | sak | bror | Mamma har ringt Skatteverket. Två gånger. De sa att du måste äga där du bor eller ha ett kontrakt. Hon frågade om de kunde göra ett undantag "för det är ju mitt barn". De kunde inte. |
| 5:45 | sms | bror | Mamma har ringt Skatteverket. Två gånger. De sa att du måste äga där du bor eller ha ett kontrakt. Hon frågade om de kunde göra ett undantag "för det är ju mitt barn". De kunde inte. |
| 5:45 | sms-bubbla | bror | Mamma har ringt Skatteverket. Två gånger. De sa att du måste äga där du bor eller ha ett kontrakt. Hon frågade om de kunde göra ett undantag "för det är ju mitt barn". De kunde inte. |
| 5:45 | röst | bror | Mamma har ringt Skatteverket. Två gånger. De sa att du måste äga där du bor eller ha ett kontrakt. Hon frågade om de kunde göra ett undantag "för det är ju mitt barn". De kunde inte. · STORY |
| 5:47 | väntar | ali | Den köper jag. Ge hit. |
| 5:48 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 5:49 | händelse | salt | sak=n3_stol n=1 |
| 5:49 | aliSalt | ali | 13032 |
| 5:49 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 5:50 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 5:52 | skratt | du | Alis dyr-pling |
| 5:52 | struken | info:guld | 3D-modell köpt – printa leveranslåda + autoprint |
| 5:52 | händelse | kopt | sak=utlada |
| 5:52 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 5:59 | händelse | printStart | sak=byggsats:utlada |
| 6:00 | klar | bror | Mamma har ringt Skatteverket. Två gånger. De sa att du måste äga där du bor eller ha ett kontrakt. Hon frågade om de kunde göra ett undantag "för det är ju mitt barn". De kunde inte. |
| 6:02 | toast | bra | Del 1 av 3 klar |
| 6:05 | toast | bra | Del 2 av 3 klar |
| 6:07 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 6:08 | händelse | printKlar | sak=byggsats:utlada n=1 |
| 6:08 | struken | du | Raggsockorna runt jetmotorn. Äntligen passar de nåt. |
| 6:08 | sak | ali | Den köper jag. Ge hit. |
| 6:08 | röst | ali | Den köper jag. Ge hit. · REAKTION |
| 6:08 | upprepning | ali | Den köper jag. Ge hit. |
| 6:08 | tanke | du | Leveranslåda + autoprint ligger i handen. |
| 6:08 | väntar | du | Leveranslåda + autoprint ligger i handen. |
| 6:08 | händelse | tagitUrPrint | sak=byggsats:utlada n=1 |
| 6:08 | klipps | ali | Den köper jag. Ge hit. |
| 6:09 | klar | ali | Den köper jag. Ge hit. |
| 6:09 | sak | du | Leveranslåda + autoprint ligger i handen. |
| 6:09 | notis | tanke | 💭 Leveranslåda + autoprint ligger i handen. |
| 6:09 | röst | du | Leveranslåda + autoprint ligger i handen. · REAKTION |
| 6:12 | klar | du | Leveranslåda + autoprint ligger i handen. |
| 6:16 | händelse | placerat | sak=leveranslada |
| 6:16 | tanke | du | Leveranslådan är på – skrivarna printar vidare av sig själva. |
| 6:16 | väntar | du | Leveranslådan är på – skrivarna printar vidare av sig själva. |
| 6:16 | tanke | du | Leveranslådan står vid skrivaren. Välj en sak på skrivaren och slå på Autoprint – Ali hämtar lådan varje morgon. |
| 6:16 | struken | du | Leveranslådan är på – skrivarna printar vidare av sig själva. |
| 6:16 | väntar | du | Leveranslådan står vid skrivaren. Välj en sak på skrivaren och slå på Autoprint – Ali hämtar lådan varje morgon. |
| 6:16 | monterat | du | byggsats:utlada |
| 6:16 | händelse | monterat | sak=utlada |
| 6:16 | sak | du | Leveranslådan står vid skrivaren. Välj en sak på skrivaren och slå på Autoprint – Ali hämtar lådan varje morgon. |
| 6:16 | notis | tanke | 💭 Leveranslådan står vid skrivaren. Välj en sak på skrivaren och slå på Autoprint – Ali hämtar lådan varje morgon. |
| 6:16 | röst | du | Leveranslådan står vid skrivaren. Välj en sak på skrivaren och slå på Autoprint – Ali hämtar lådan varje morgon. · REAKTION |
| 6:16 | händelse | malKlart | id=f14-bygg-leveransladan del=Dag 14 – Jetmotorn nasta=f14-kop-mutor-rolf |
| 6:16 | bekräftelse | du | plats |
| 6:16 | väntar | du | Rolf tippar mer om han får bullar. Ali har bullar. |
| 6:16 | MÅL |  | Köp mutor till Rolf hos Ali |
| 6:19 | målruta |  | Köp mutor till Rolf hos Ali |
| 6:20 | kvittens-bock |  | ✓ Bygg leveranslådan |
| 6:25 | klar | du | Leveranslådan står vid skrivaren. Välj en sak på skrivaren och slå på Autoprint – Ali hämtar lådan varje morgon. |
| 6:25 | sak | du | Rolf tippar mer om han får bullar. Ali har bullar. |
| 6:25 | pil |  | Köp mutor till Rolf hos Ali |
| 6:25 | notis | tanke | 💭 Rolf tippar mer om han får bullar. Ali har bullar. |
| 6:25 | röst | du | Rolf tippar mer om han får bullar. Ali har bullar. · MÅL |
| 6:31 | klar | du | Rolf tippar mer om han får bullar. Ali har bullar. |
| 6:33 | poolTom | du | 4 repliker använda |
| 6:36 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 6:37 | toast | guld | Mutor till Rolf nivå 1: En kall bira å en femtiolapp. Rolf tippar mer: 3 skräp extra varje gång |
| 6:37 | händelse | kopt | sak=sopbil |
| 6:37 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 6:37 | röst | ali | Nästa nivå kostar mer. Så funkar teknik. Och mitt liv. · STORY |
| 6:37 | butiksbubbla | ali | Nästa nivå kostar mer. Så funkar teknik. Och mitt liv. |
| 6:38 | händelse | malKlart | id=f14-kop-mutor-rolf del=Dag 14 – Jetmotorn nasta=sov14 |
| 6:38 | paket |  | lapp |
| 6:38 | väntar | du | Det drar kallt genom väggarna. |
| 6:38 | bekräftelse | du | plats |
| 6:38 | MÅL |  | Sov när du vill |
| 6:39 | sak | du | (nytt mål i rutan) |
| 6:39 | målruta |  | Sov när du vill |
| 6:39 | pil |  | Sov när du vill |
| 6:40 | klar | du | (nytt mål i rutan) |
| 6:40 | nick |  | nick:98 |
| 6:42 | kvittens-bock |  | ✓ Köp mutor till Rolf hos Ali |
| 6:45 | väntar | notis:🌇 Klockan är 21. Ali slår igen luckan.  | 🌇 Klockan är 21. Ali slår igen luckan. Dagens jobb är klart – gå in i skjulet och sov i sängen. |
| 6:46 | autosparning | du | natt 18 december |
| 6:46 | struken | bror | Visade bilder på ditt skjul för polarna. Dom trodde det var en Airbnb. Jag sa inte emot. |
| 6:46 | struken | rolf | Fick en kajak i lasset. Ingen paddel. Typiskt. Ja la den vid grinden åt dig. /R |
| 6:48 | webbBetalt | du | 2590 |
| 6:48 | nattkort | du | 🌙 6 dagar kvar. God natt. zzz… Det drar kallt genom väggarna. DAGENS PRINTAR Kolfiberstol × 5 Designvas i röd PETG × 2 Nyckelring × 2 Minikylskåp × 1 Totalt 10 |

<details><summary>Botens handlingar dag 9</summary>

- 0:00 — dag 9 börjar — (7442 kr)
- 0:08 popup: "FORTSÄTT" (7442 kr)
- 0:24 gå till Rolfs postlåda (29 m) (7442 kr)
- 0:33 panel: "En lapp från Rolf
Lite olaglig" (7442 kr)
- 0:35 gå till skrivaren (10 m) (7442 kr)
- 0:37 printar Designvas i röd PETG (7442 kr)
- 0:41 tar ut 1 st ur skrivaren (7442 kr)
- 0:45 gå till en tunna (18 m) (7442 kr)
- 0:49 gå till PETG-kvarnen (15 m) (7442 kr)
- 0:49 tömmer det tunga i PETG-kvarnen (7442 kr)
- 0:54 gå till skrivaren (3 m) (7442 kr)
- 0:55 printar Designvas i röd PETG (7442 kr)
- 1:00 tar ut 1 st ur skrivaren (7442 kr)
- 1:01 gå till skrivaren (6 m) (7442 kr)
- 1:03 printar Nyckelring (7442 kr)
- 1:04 tar ut 1 st ur skrivaren (7442 kr)
- 1:04 fulla fickor – lägger r_jukebox i kistan (7442 kr)
- 1:06 printar Nyckelring (7442 kr)
- 1:08 tar ut 1 st ur skrivaren (7442 kr)
- 1:12 gå till datorn (19 m) (7442 kr)
- 1:20 panel: "Webbshopen · Soptippsvägen 1
B" (7442 kr)
- 1:29 panel: "Webbshopen · Soptippsvägen 1
B" (7442 kr)
- 1:37 panel: "Webbshopen · Soptippsvägen 1
B" (7442 kr)
- 1:44 gå till Rolfs postlåda (paket) (29 m) (7442 kr)
- 1:45 webbshop: 2 paket i postlådan (7442 kr)
- 1:45 tjänar pengar till gamingbod (tillbyggnad): 7442/49500 kr → printar kolfiberstol (16000 kr) (7442 kr)
- 1:48 gå till skrivaren (15 m) (7442 kr)
- 1:49 printar Kolfiberstol (7442 kr)
- 1:57 tar ut 1 st ur skrivaren (7442 kr)
- 1:58 printar Kolfiberstol (7442 kr)
- 2:06 tar ut 1 st ur skrivaren (7442 kr)
- 2:07 printar Kolfiberstol (7442 kr)
- 2:22 popup: "Ja." (7442 kr)
- 2:30 popup: "Läst" (7442 kr)
- 2:33 tar ut 1 st ur skrivaren (7442 kr)
- 2:39 gå till Ali (34 m) (7442 kr)
- 2:39 öppnar Alis butik – sälja (7442 kr)
- 2:42 säljer hos Ali: +45640 kr (53082 kr)
- 2:42 öppnar Alis butik – köpa gamingbod (tillbyggnad) (53082 kr)
- 2:45 köper gamingbod för 49500 kr (3582 kr)
- 2:50 gå till skrivaren (23 m) (3582 kr)
- 2:52 printar Gamingbod (tillbyggnad) (6 delar) (3582 kr)
- 3:01 plockar 1 skräp på gården (bär max 16) (3582 kr)
- 3:06 gå till kvarnen (23 m) (3582 kr)
- 3:11 plockar 2 skräp på tippen (bär max 16) (3582 kr)
- 3:14 gå till kvarnen (14 m) (3582 kr)
- 3:30 gå till skrivaren (7 m) (3582 kr)
- 3:31 tar ut 1 st ur skrivaren (3582 kr)
- 3:34 gå till platsen vänster om skjulet (16 m) (3582 kr)
- 3:34 bygger gamingboden (3582 kr)
- 3:50 gå till Ali (20 m) (3582 kr)
- 3:50 öppnar Alis butik – köpa receptet minikylskåp (3582 kr)
- 3:52 Ali har inte kyl (3582 kr)
- 3:57 gå till skrivaren (23 m) (3582 kr)
- 3:59 printar Minikylskåp (3582 kr)
- 4:12 plockar 3 skräp på tippen (bär max 16) (3582 kr)
- 4:15 gå till kvarnen (15 m) (3582 kr)
- 4:27 gå till skrivaren (7 m) (3582 kr)
- 4:28 tar ut 1 st ur skrivaren (3582 kr)
- 4:32 gå till platsen för minikylskåp (20 m) (3582 kr)
- 4:33 ställer ut minikylskåp (3582 kr)
- 4:41 tjänar pengar till jetmotor med efterbrännare: 3582/9900 kr → printar kolfiberstol (13718 kr) (3582 kr)
- 4:47 gå till skrivaren (25 m) (3582 kr)
- 4:48 printar Kolfiberstol (3582 kr)
- 4:56 tar ut 1 st ur skrivaren (3582 kr)
- 5:02 gå till Ali (33 m) (3582 kr)
- 5:02 öppnar Alis butik – sälja (3582 kr)
- 5:04 säljer hos Ali: +13718 kr (17300 kr)
- 5:05 öppnar Alis butik – köpa jetmotor med efterbrännare (17300 kr)
- 5:07 köper jetmotor för 9900 kr (7400 kr)
- 5:15 gå till skrivaren (33 m) (7400 kr)
- 5:16 printar Jetmotor med efterbrännare (4 delar) (7400 kr)
- 5:25 tar ut 1 st ur skrivaren (7400 kr)
- 5:26 gå till kolfiberkvarnen (3 m) (7400 kr)
- 5:31 tjänar pengar till leveranslåda + autoprint: 7400/11000 kr → printar kolfiberstol (13032 kr) (7400 kr)
- 5:31 gå till skrivaren (1 m) (7400 kr)
- 5:33 printar Kolfiberstol (7400 kr)
- 5:40 tar ut 1 st ur skrivaren (7400 kr)
- 5:48 gå till Ali (35 m) (7400 kr)
- 5:48 öppnar Alis butik – sälja (7400 kr)
- 5:49 säljer hos Ali: +13032 kr (20432 kr)
- 5:50 öppnar Alis butik – köpa leveranslåda + autoprint (20432 kr)
- 5:52 köper utlada för 11000 kr (9432 kr)
- 5:58 gå till skrivaren (23 m) (9432 kr)
- 5:59 printar Leveranslåda + autoprint (3 delar) (9432 kr)
- 6:09 tar ut 1 st ur skrivaren (9432 kr)
- 6:16 gå till bygg leveranslådan (7 m) (9432 kr)
- 6:36 gå till Ali (29 m) (9432 kr)
- 6:36 öppnar Alis butik – bjuda Rolf på fika (9432 kr)
- 6:46 gå till sängen (20 m) (9292 kr)

</details>

## Dag 10

| Tid | Källa | Vem | Text |
|---|---|---|---|
| 6:48 | vara | ali | n2_hjalm |
| 6:48 | händelse | malKlart | id=sov14 del=Dag 14 – Jetmotorn nasta=f15-bygg-gamingboden |
| 6:48 | bekräftelse | du | plats |
| 6:48 | händelse | malKlart | id=f15-bygg-gamingboden del=Dag 15 – Fristaden nasta=gamer |
| 6:48 | bekräftelse | du | plats |
| 6:48 | MÅL |  | Inred boden · 1/3 gamersaker |
| 0:00 | autosparning | du | morgon 19 december |
| 0:01 | händelse | dagenBorjar | dag=10 |
| 0:01 | meddelande | du | 5 dagar till jul. Utan boden har jag ingen fristad. |
| 0:01 | dagbokkort | du | Boden ska bli klar. · 5 dagar till jul. Utan boden har jag ingen fristad. |
| 0:01 | röst | du | 5 dagar till jul. Boden ska bli klar. Utan boden har jag ingen fristad. · STORY |
| 0:08 | väntar | notis:morgon | Webbshopen: 2 paket i natt · +2 590 kr · Ali vill ha idag: Cykelhjälm i PETG · +50 % |
| 0:08 | händelse | morgonkortStangt | dag=10 |
| 0:08 | paket |  | sms |
| 0:08 | väntar | ali | Ali här. 🚀 Jetmotor. Med efterbrännare. Till en KVARN. Jag vet inte varför. Jag kunde inte sluta rita. Min fru frågade om jag mår bra. Jag har aldrig mått bättre. Ring inte brandkåren. |
| 0:08 | väntar | du | Boden ska vara full. Tre saker. |
| 0:11 | målruta |  | Inred boden · 1/3 gamersaker |
| 0:13 | sak | du | Boden ska vara full. Tre saker. |
| 0:13 | pil |  | Inred boden · 1/3 gamersaker |
| 0:13 | notis | tanke | 💭 Boden ska vara full. Tre saker. |
| 0:13 | röst | du | Boden ska vara full. Tre saker. · MÅL |
| 0:14 | nick |  | nick:100 |
| 0:18 | klar | du | Boden ska vara full. Tre saker. |
| 0:18 | sak | notis:morgon | Webbshopen: 2 paket i natt · +2 590 kr · Ali vill ha idag: Cykelhjälm i PETG · +50 % |
| 0:18 | notis |  | 2 paket i natt · +2 590 kr |
| 0:18 | notis |  | Cykelhjälm i PETG · +50 % |
| 0:22 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 0:22 | röst | ali | Förut drev jag butiken. Nu bygger jag något. Det är skillnad. Du lärde mig det. Säg inget. Det blir pinsamt. · STORY |
| 0:22 | butiksbubbla | ali | Förut drev jag butiken. Nu bygger jag något. Det är skillnad. Du lärde mig det. Säg inget. Det blir pinsamt. |
| 0:23 | klar | notis:morgon | Webbshopen: 2 paket i natt · +2 590 kr · Ali vill ha idag: Cykelhjälm i PETG · +50 % |
| 0:24 | skratt | du | Alis dyr-pling |
| 0:24 | händelse | kopt | sak=projektor |
| 0:24 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 0:31 | väntar | rolf | ÖJ! Trädgårn står kvar.. Ingen brådska. Nässlorna har inga planer. MVH ROLF​ |
| 0:34 | struken | notis:🌇 Klockan är 21. Ali slår igen luckan.  | 🌇 Klockan är 21. Ali slår igen luckan. Dagens jobb är klart – gå in i skjulet och sov i sängen. |
| 0:38 | toast | skak | handen skakar: fullt |
| 0:40 | väntar | värld:Mjau. | Mjau. |
| 0:42 | sak | du | Det drar kallt genom väggarna. |
| 0:42 | kvallsrad | du | Det drar kallt genom väggarna. |
| 0:42 | klar | du | Det drar kallt genom väggarna. |
| 0:46 | händelse | printStart | sak=projektor |
| 0:51 | sak | rolf | ÖJ! Trädgårn står kvar.. Ingen brådska. Nässlorna har inga planer. MVH ROLF​ |
| 0:51 | sms | rolf | ÖJ! Trädgårn står kvar.. Ingen brådska. Nässlorna har inga planer. MVH ROLF​ |
| 0:51 | sms-bubbla | rolf | ÖJ! Trädgårn står kvar.. Ingen brådska. Nässlorna har inga planer. MVH ROLF​ |
| 0:51 | röst | rolf | ÖJ! Trädgårn står kvar.. Ingen brådska. Nässlorna har inga planer. MVH ROLF​ · STORY |
| 0:51 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 0:52 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 0:53 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 0:53 | skratt | du | kvarnen spottar |
| 0:54 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 0:55 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 0:55 | väntar | notis:Skrivare L: Tornet är tomt – mal mer så  | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 0:56 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 0:57 | händelse | printKlar | sak=projektor n=1 |
| 0:58 | klar | rolf | ÖJ! Trädgårn står kvar.. Ingen brådska. Nässlorna har inga planer. MVH ROLF​ |
| 1:00 | struken | värld:Mjau. | Mjau. |
| 1:03 | skratt | du | falsk tuta |
| 1:06 | sak | notis:Skrivare L: Tornet är tomt – mal mer så  | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 1:06 | notis | fel | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 1:07 | händelse | tagitUrPrint | sak=projektor n=1 |
| 1:08 | klar | notis:Skrivare L: Tornet är tomt – mal mer så  | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 1:12 | händelse | placerat | sak=projektor |
| 1:15 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 1:16 | skratt | du | Alis dyr-pling |
| 1:16 | händelse | kopt | sak=ledpinne |
| 1:16 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 1:25 | händelse | printStart | sak=ledpinne |
| 1:33 | händelse | printKlar | sak=ledpinne n=1 |
| 1:34 | händelse | tagitUrPrint | sak=ledpinne n=1 |
| 1:40 | händelse | placerat | sak=ledpinne |
| 1:40 | händelse | malKlart | id=gamer del=Dag 15 – Fristaden nasta=f15-printa-stall-ut |
| 1:40 | bekräftelse | du | plats |
| 1:40 | väntar | du | En jacuzzi. På en soptipp. Varför inte. |
| 1:40 | målruta |  | Printa en jacuzzi |
| 1:40 | MÅL |  | Printa en jacuzzi |
| 1:40 | sak | du | En jacuzzi. På en soptipp. Varför inte. |
| 1:40 | pil |  | Printa en jacuzzi |
| 1:40 | notis | tanke | 💭 En jacuzzi. På en soptipp. Varför inte. |
| 1:40 | röst | du | En jacuzzi. På en soptipp. Varför inte. · MÅL |
| 1:40 | nick |  | nick:101 |
| 1:42 | poolTom | du | 4 repliker använda |
| 1:44 | kvittens-bock |  | ✓ Inred boden · 3/3 gamersaker |
| 1:45 | klar | du | En jacuzzi. På en soptipp. Varför inte. |
| 1:52 | händelse | printStart | sak=kruka |
| 1:54 | händelse | printStart | sak=kruka |
| 1:55 | händelse | printStart | sak=kruka |
| 1:57 | händelse | printStart | sak=kruka |
| 1:59 | händelse | printStart | sak=kruka |
| 2:01 | händelse | printStart | sak=kruka |
| 2:03 | väntar | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått minikylskåp. Och jetmotor med efterbrännare. Det är stort, Gunnar. |
| 2:03 | radio | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått minikylskåp. Och jetmotor med efterbrännare. Det är stort, Gunnar. |
| 2:03 | skratt | du | Radio-Kjelle |
| 2:03 | sak | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått minikylskåp. Och jetmotor med efterbrännare. Det är stort, Gunnar. |
| 2:03 | notis |  | 📻 Radio Tippen: Radio Tippen, Kjelle här. Skjulet vid tippen har fått minikylskåp. Och jetmotor med efterbrännare. Det är stort, Gunnar. |
| 2:03 | röst | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått minikylskåp. Och jetmotor med efterbrännare. Det är stort, Gunnar. · REAKTION |
| 2:03 | händelse | printStart | sak=kruka |
| 2:05 | händelse | printStart | sak=kruka |
| 2:06 | ljud | kajsa | Mjau |
| 2:13 | klar | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått minikylskåp. Och jetmotor med efterbrännare. Det är stort, Gunnar. |
| 2:15 | struken | ali | Ali här. 🚀 Jetmotor. Med efterbrännare. Till en KVARN. Jag vet inte varför. Jag kunde inte sluta rita. Min fru frågade om jag mår bra. Jag har aldrig mått bättre. Ring inte brandkåren. |
| 2:30 | händelse | printStart | sak=kruka |
| 2:32 | händelse | printStart | sak=kruka |
| 2:33 | händelse | printStart | sak=n3_stol |
| 2:35 | väntar | bud | (tips) |
| 2:35 | sak | bud | (tips) |
| 2:35 | händelse | printStart | sak=kruka |
| 2:36 | klar | bud | (tips) |
| 2:37 | händelse | printStart | sak=kruka |
| 2:38 | meddelande | mamma | Fick du burkarna? Honungen är från Gunnars bigårdar och lingonen plockade jag själv. Ät upp allt! |
| 2:39 | röst | mamma | Fick du burkarna? Honungen är från Gunnars bigårdar och lingonen plockade jag själv. Ät upp allt! · STORY |
| 2:52 | paket |  | sms |
| 2:52 | väntar | mamma | Bra! Pappa tar med fler på torsdag. Jag har 40 burkar kvar i källaren. |
| 3:02 | händelse | brevLast | id=m_burk1 |
| 3:02 | händelse | printStart | sak=kruka |
| 3:03 | händelse | printKlar | sak=n3_stol n=7 |
| 3:03 | händelse | tagitUrPrint | sak=n3_stol n=1 |
| 3:04 | händelse | printStart | sak=kruka |
| 3:07 | sak | mamma | Bra! Pappa tar med fler på torsdag. Jag har 40 burkar kvar i källaren. |
| 3:07 | sms | mamma | Bra! Pappa tar med fler på torsdag. Jag har 40 burkar kvar i källaren. |
| 3:07 | sms-bubbla | mamma | Bra! Pappa tar med fler på torsdag. Jag har 40 burkar kvar i källaren. |
| 3:07 | röst | mamma | Bra! Pappa tar med fler på torsdag. Jag har 40 burkar kvar i källaren. · STORY |
| 3:07 | händelse | printStart | sak=kruka |
| 3:09 | tanke | du | Täppan är rensad. Ali har spaljé och droppslang i röd PETG. |
| 3:09 | väntar | du | Täppan är rensad. Ali har spaljé och droppslang i röd PETG. |
| 3:09 | händelse | printStart | sak=kruka |
| 3:09 | kvitto-visas | du | Täppan är rensad. Ali har spaljé och droppslang i röd PETG. |
| 3:09 | sak | du | Täppan är rensad. Ali har spaljé och droppslang i röd PETG. |
| 3:09 | notis | tanke | 💭 Täppan är rensad. Ali har spaljé och droppslang i röd PETG. |
| 3:11 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 3:11 | händelse | printStart | sak=kruka |
| 3:12 | händelse | salt | sak=n3_stol n=1 |
| 3:12 | aliSalt | ali | 16000 |
| 3:12 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 3:13 | händelse | printStart | sak=kruka |
| 3:14 | klar | mamma | Bra! Pappa tar med fler på torsdag. Jag har 40 burkar kvar i källaren. |
| 3:15 | händelse | printStart | sak=kruka |
| 3:16 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 3:17 | händelse | printStart | sak=kruka |
| 3:17 | skratt | du | Alis dyr-pling |
| 3:17 | händelse | kopt | sak=jacuzzi |
| 3:17 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 3:20 | händelse | printStart | sak=kruka |
| 3:35 | väntar | värld:Mjau. | Mjau. |
| 3:39 | sak | värld:Mjau. | Mjau. |
| 3:39 | bubbla |  | Mjau. |
| 3:39 | händelse | printStart | sak=kruka |
| 3:41 | klar | värld:Mjau. | Mjau. |
| 3:41 | händelse | printKlar | sak=kruka n=32 |
| 3:41 | skratt | du | däcket rullar iväg |
| 3:42 | poolTom | du | 4 repliker använda |
| 3:48 | händelse | printStart | sak=jacuzzi |
| 3:48 | skratt | du | falsk tuta |
| 3:48 | väntar | värld:TUUT! Tjena! | TUUT! Tjena! |
| 3:49 | sak | värld:TUUT! Tjena! | TUUT! Tjena! |
| 3:49 | bubbla |  | TUUT! Tjena! |
| 3:52 | klar | värld:TUUT! Tjena! | TUUT! Tjena! |
| 4:18 | händelse | printKlar | sak=jacuzzi n=1 |
| 4:18 | händelse | malKlart | id=f15-printa-stall-ut del=Dag 15 – Fristaden nasta=f15-stall-ut |
| 4:18 | bekräftelse | du | plats |
| 4:18 | väntar | du | Jacuzzin är klar. Den ställer jag ut på gården. |
| 4:18 | målruta |  | Ställ ut jacuzzin |
| 4:18 | MÅL |  | Ställ ut jacuzzin |
| 4:18 | sak | du | Jacuzzin är klar. Den ställer jag ut på gården. |
| 4:18 | pil |  | Ställ ut jacuzzin |
| 4:18 | notis | tanke | 💭 Jacuzzin är klar. Den ställer jag ut på gården. |
| 4:18 | röst | du | Jacuzzin är klar. Den ställer jag ut på gården. · MÅL |
| 4:19 | händelse | tagitUrPrint | sak=jacuzzi n=1 |
| 4:22 | kvittens-bock |  | ✓ Printa en jacuzzi |
| 4:24 | klar | du | Jacuzzin är klar. Den ställer jag ut på gården. |
| 4:27 | händelse | tagitUrPrint | sak=kruka n=1 |
| 4:33 | händelse | placerat | sak=jacuzzi |
| 4:33 | paket |  | sms → sms → sms → sms |
| 4:33 | väntar | mamma | Mamma här. Du skickade en bild på en jacuzzi? |
| 4:33 | väntar | mamma | …och tapeter. Och en gamingbod med lampor i alla färger. |
| 4:33 | väntar | mamma | Okej. Jag erkänner. Det är finare än hemma. |
| 4:33 | väntar | mamma | Kan jag komma och bada på söndag? Pappa tar med korv. |
| 4:33 | händelse | malKlart | id=f15-stall-ut del=Dag 15 – Fristaden nasta=f15-varldens-basta-fristad |
| 4:33 | bekräftelse | du | plats |
| 4:33 | händelse | malKlart | id=f15-varldens-basta-fristad del=Dag 15 – Fristaden nasta=sov15 |
| 4:33 | paket |  | lapp |
| 4:33 | kvallsrad | du | I natt frös jag. Åtta dagar kvar. |
| 4:33 | bekräftelse | du | plats |
| 4:33 | målruta |  | Sov när du vill |
| 4:33 | MÅL |  | Sov när du vill |
| 4:33 | sak | du | (nytt mål i rutan) |
| 4:33 | pil |  | Sov när du vill |
| 4:33 | klar | du | (nytt mål i rutan) |
| 4:33 | nick |  | nick:104 |
| 4:37 | kvittens-bock |  | ✓ Ställ ut jacuzzin |
| 4:37 | kvittens-bock |  | ✓ Världens bästa fristad · trivsel 310/300 |
| 4:37 | autosparning | du | natt 19 december |
| 4:39 | paket |  | sms |
| 4:39 | väntar | ali | Ali här. Hämtade lådan klockan sex. 21 saker, 1 029 kr på ditt konto. Grossistpris. Jag har också en hyra. |
| 4:39 | nattkort | du | 🌙 5 dagar kvar. God natt. zzz… I natt frös jag. Åtta dagar kvar. DAGENS PRINTAR Blomkruka × 22 Projektor + duk × 1 RGB-ljuspinne × 1 Kolfiberstol × 1 Jacuzzi × |

<details><summary>Botens handlingar dag 10</summary>

- 0:00 — dag 10 börjar — (11882 kr)
- 0:08 popup: "FORTSÄTT" (11882 kr)
- 0:22 gå till Ali (20 m) (11882 kr)
- 0:22 öppnar Alis butik – köpa receptet projektor + duk (11882 kr)
- 0:25 köper projektor för 1350 kr (10532 kr)
- 0:38 plockar 1 skräp på tippen (bär max 16) (10532 kr)
- 0:42 gå till kvarnen (14 m) (10532 kr)
- 0:45 gå till skrivaren (7 m) (10532 kr)
- 0:46 printar Projektor + duk (10532 kr)
- 1:01 plockar 5 skräp på tippen (bär max 16) (10532 kr)
- 1:04 gå till kvarnen (15 m) (10532 kr)
- 1:07 gå till skrivaren (7 m) (10532 kr)
- 1:07 tar ut 1 st ur skrivaren (10532 kr)
- 1:11 gå till platsen för projektor + duk (20 m) (10532 kr)
- 1:12 ställer ut projektor + duk (10532 kr)
- 1:15 gå till Ali (11 m) (10532 kr)
- 1:15 öppnar Alis butik – köpa receptet rgb-ljuspinne (10532 kr)
- 1:17 köper ledpinne för 2250 kr (8282 kr)
- 1:23 gå till skrivaren (25 m) (8282 kr)
- 1:25 printar RGB-ljuspinne (8282 kr)
- 1:34 tar ut 1 st ur skrivaren (8282 kr)
- 1:39 gå till platsen för rgb-ljuspinne (21 m) (8282 kr)
- 1:40 ställer ut rgb-ljuspinne (8282 kr)
- 1:50 gå till skrivaren (18 m) (8282 kr)
- 1:52 printar Blomkruka (8282 kr)
- 2:24 plockar 7 skräp på gården (bär max 16) (8282 kr)
- 2:29 gå till kvarnen (23 m) (8282 kr)
- 2:29 webbshop: 0 paket i postlådan (8282 kr)
- 2:29 tjänar pengar till jacuzzi: 8282/12500 kr → printar kolfiberstol (16000 kr) (8282 kr)
- 2:31 gå till skrivaren (11 m) (8282 kr)
- 2:33 printar Kolfiberstol (8282 kr)
- 2:52 popup: "Tack mamma ❤️" (8282 kr)
- 3:02 popup: "Läst" (8282 kr)
- 3:04 tar ut 1 st ur skrivaren (8282 kr)
- 3:11 gå till Ali (34 m) (8282 kr)
- 3:11 öppnar Alis butik – sälja (8282 kr)
- 3:12 säljer hos Ali: +16000 kr (24282 kr)
- 3:16 öppnar Alis butik – köpa receptet jacuzzi (24282 kr)
- 3:18 köper jacuzzi för 12500 kr (11782 kr)
- 3:34 plockar 8 skräp på tippen (bär max 16) (11782 kr)
- 3:38 gå till kvarnen (17 m) (11782 kr)
- 3:47 gå till skrivaren (5 m) (11782 kr)
- 3:48 printar Jacuzzi (11782 kr)
- 4:20 tar ut 1 st ur skrivaren (11782 kr)
- 4:27 gå till skrivaren (2 m) (11782 kr)
- 4:27 tar ut 1 st ur skrivaren (11782 kr)
- 4:32 gå till platsen för jacuzzi (22 m) (11782 kr)
- 4:33 ställer ut jacuzzi (11782 kr)
- 4:37 gå till sängen (9 m) (11782 kr)

</details>

## Dag 11

| Tid | Källa | Vem | Text |
|---|---|---|---|
| 4:39 | vara | ali | n2_vas |
| 4:39 | händelse | malKlart | id=sov15 del=Dag 15 – Fristaden nasta=m16-kop-tomten-bor |
| 4:39 | bekräftelse | du | plats |
| 4:39 | paket |  | sms |
| 4:39 | väntar | mamma | Pappa såg bilden. Han sa "aha, vad lugnt då". Det betyder att han är jättestolt. |
| 4:39 | paket |  | sms |
| 4:39 | väntar | rolf | Hörde att du har JACUZZI.. Ja tar mä grillen. Och Kajsa. Hon ä en katt. Hon badar int. /R​ |
| 4:39 | tanke | du | KAPITEL 3 KLART! Fabriken sköter sig själv. |
| 4:39 | väntar | du | KAPITEL 3 KLART! Fabriken sköter sig själv. |
| 4:39 | paket |  | sms |
| 4:39 | väntar | rolf | Nämen.. Ja hitta ett flipperspel på mitt hemliga ställe. Dä ä ditt. Sen: Bengt-Åke vill sälja tomten du bor på. Tavlan vid vägen. /R​ |
| 4:40 | MÅL |  | Spara till tomten · 12 811 / 29 500 kr |
| 4:40 | struken | info:guld | 🚧 Rolf har flyttat ut gärdesgården! Ny mark att utforska – men saker ställer jag bara på mark jag äger. |
| 0:00 | autosparning | du | morgon 20 december |
| 0:01 | händelse | dagenBorjar | dag=11 |
| 0:01 | meddelande | du | På pappret finns jag inte. Därför: en egen tomt och ett riktigt hus. |
| 0:01 | dagbokkort | du | KAPITEL 4 · 4 dagar till jul · På pappret finns jag inte. Därför: en egen tomt och ett riktigt hus. |
| 0:01 | röst | du | KAPITEL 4 · 4 dagar till jul. På pappret finns jag inte. Därför: en egen tomt och ett riktigt hus. · STORY |
| 0:07 | väntar | notis:morgon | Ali vill ha idag: Designvas i röd PETG · +50 % |
| 0:08 | händelse | morgonkortStangt | dag=11 |
| 0:08 | väntar | ali | Ali här. Hämtade lådan klockan sex. 21 saker, 1 029 kr på ditt konto. Grossistpris. Jag har också en hyra. |
| 0:08 | sak | du | KAPITEL 3 KLART! Fabriken sköter sig själv. |
| 0:08 | notis | tanke | 💭 KAPITEL 3 KLART! Fabriken sköter sig själv. |
| 0:08 | röst | du | KAPITEL 3 KLART! Fabriken sköter sig själv. · REAKTION |
| 0:08 | väntar | du | Kommunen säljer tomten vid tippen. Ingen annan ville ha den. |
| 0:10 | målruta |  | Spara till tomten · 12 811 / 29 500 kr |
| 0:10 | klar | du | KAPITEL 3 KLART! Fabriken sköter sig själv. |
| 0:13 | struken | ali | Ali här. Hämtade lådan klockan sex. 21 saker, 1 029 kr på ditt konto. Grossistpris. Jag har också en hyra. |
| 0:14 | sak | du | Kommunen säljer tomten vid tippen. Ingen annan ville ha den. |
| 0:14 | pil |  | Spara till tomten · 12 811 / 29 500 kr |
| 0:14 | notis | tanke | 💭 Kommunen säljer tomten vid tippen. Ingen annan ville ha den. |
| 0:14 | röst | du | Kommunen säljer tomten vid tippen. Ingen annan ville ha den. · MÅL |
| 0:15 | paket |  | tanke |
| 0:15 | tanke | du | Jag gjorde en ny skylt vid vägen. Som de har vid riktiga hus. |
| 0:15 | väntar | du | Jag gjorde en ny skylt vid vägen. Som de har vid riktiga hus. |
| 0:15 | paket |  | sms |
| 0:15 | väntar | bror | Pappa körde förbi för att kolla. Två gånger. Han säger att han skulle åt det hållet ändå. Det ska han aldrig. |
| 0:15 | väntar | mamma | Bygger du ett hus till? Du har inte ens dammsugit ditt rum här hemma på fyra år. |
| 0:15 | väntar | notis:📔 Prestation: Mysigt värre · +3 respekt | 📔 Prestation: Mysigt värre · +3 respekt |
| 0:15 | ljud | bom | Bommen fälls upp (vanster) |
| 0:15 | paket |  | brev |
| 0:15 | väntar | gunbritt | Hej. Gun-Britt här, byggnadsnämnden. Tyvärr har ni en skylt utan bygglov. Tyvärr har ni också ett hus utan bygglov. Tyvärr måste ni fylla i blankett 14B. Tyvärr finns den bara på papper. Tyvärr är jag ledsen. /Gun-Britt |
| 0:19 | klar | du | Kommunen säljer tomten vid tippen. Ingen annan ville ha den. |
| 0:20 | sak | notis:morgon | Ali vill ha idag: Designvas i röd PETG · +50 % |
| 0:20 | notis |  | Designvas i röd PETG · +50 % |
| 0:23 | klar | notis:morgon | Ali vill ha idag: Designvas i röd PETG · +50 % |
| 0:37 | sak | du | Jag gjorde en ny skylt vid vägen. Som de har vid riktiga hus. |
| 0:37 | notis | tanke | 💭 Jag gjorde en ny skylt vid vägen. Som de har vid riktiga hus. |
| 0:37 | röst | du | Jag gjorde en ny skylt vid vägen. Som de har vid riktiga hus. · STORY |
| 0:41 | händelse | printStart | sak=n2_vas |
| 0:42 | klar | du | Jag gjorde en ny skylt vid vägen. Som de har vid riktiga hus. |
| 0:44 | händelse | printKlar | sak=n2_vas n=18 |
| 0:44 | struken | notis:📔 Prestation: Mysigt värre · +3 respekt | 📔 Prestation: Mysigt värre · +3 respekt |
| 0:45 | nej | du | Din säng – det är inte kväll än. Gör klart dagens jobb först |
| 0:45 | tanke | du | Fickorna är fulla. Jag får lägga något i ryggsäcken först. |
| 0:45 | väntar | du | Fickorna är fulla. Jag får lägga något i ryggsäcken först. |
| 0:45 | toast | fickskylt | Fulla fickor |
| 0:45 | fullaFickor | du | n2_vas |
| 0:45 | sak | du | Fickorna är fulla. Jag får lägga något i ryggsäcken först. |
| 0:45 | notis | tanke | 💭 Fickorna är fulla. Jag får lägga något i ryggsäcken först. |
| 0:45 | röst | du | Fickorna är fulla. Jag får lägga något i ryggsäcken först. · REAKTION |
| 0:46 | händelse | tagitUrPrint | sak=n2_vas n=1 |
| 0:51 | klar | du | Fickorna är fulla. Jag får lägga något i ryggsäcken först. |
| 0:55 | skratt | du | falsk tuta |
| 0:59 | sak | mamma | Mamma här. Du skickade en bild på en jacuzzi? |
| 0:59 | sms | mamma | Mamma här. Du skickade en bild på en jacuzzi? |
| 0:59 | sms-bubbla | mamma | Mamma här. Du skickade en bild på en jacuzzi? |
| 0:59 | röst | mamma | Mamma här. Du skickade en bild på en jacuzzi? · STORY |
| 1:00 | webb | du | packade 1 kruka |
| 1:03 | klar | mamma | Mamma här. Du skickade en bild på en jacuzzi? |
| 1:08 | paket |  | sms |
| 1:08 | väntar | mamma | Jag har skickat en porslinshund från mormors dödsbo med Rolf. Den ligger i postlådan. |
| 1:08 | paket |  | replik |
| 1:08 | väntar | du | Ryggsäcken. Tryck E så öppnar jag den. |
| 1:08 | paket |  | tanke → tanke |
| 1:08 | tanke | du | Vad har Göran nu? |
| 1:08 | väntar | du | Vad har Göran nu? |
| 1:08 | tanke | du | Guld? Där nere? |
| 1:08 | väntar | du | Guld? Där nere? |
| 1:08 | skratt | du | Göran hittar guld |
| 1:08 | webb | du | packade 1 n2_vas |
| 1:16 | sak | du | Ryggsäcken. Tryck E så öppnar jag den. |
| 1:16 | notis |  | 🎒 Ryggsäcken är full. Något måste ut. |
| 1:16 | röst | du | Ryggsäcken. Tryck E så öppnar jag den. · REAKTION |
| 1:20 | klar | du | Ryggsäcken. Tryck E så öppnar jag den. |
| 1:21 | sak | du | Vad har Göran nu? |
| 1:21 | notis | tanke | 💭 Vad har Göran nu? |
| 1:21 | röst | du | Vad har Göran nu? · STORY |
| 1:23 | struken | info:bra | 📦 Paketet till En fotbollsklubb i Borås ligger i postlådan – Rolf tar det till posten |
| 1:23 | struken | info:bra | 📦 Paketet till Agneta på biblioteket ligger i postlådan – Rolf tar det till posten |
| 1:23 | klar | du | Vad har Göran nu? |
| 1:24 | sak | du | Guld? Där nere? |
| 1:24 | notis | tanke | 💭 Guld? Där nere? |
| 1:24 | röst | du | Guld? Där nere? · STORY |
| 1:26 | klar | du | Guld? Där nere? |
| 1:28 | händelse | printStart | sak=n3_stol |
| 1:35 | händelse | printKlar | sak=n3_stol n=8 |
| 1:35 | händelse | tagitUrPrint | sak=n3_stol n=1 |
| 1:36 | sak | gunbritt | Hej. Gun-Britt här, byggnadsnämnden. Tyvärr har ni en skylt utan bygglov. Tyvärr har ni också ett hus utan bygglov. Tyvärr måste ni fylla i blankett 14B. Tyvärr finns den bara på papper. Tyvärr är jag ledsen. /Gun-Britt |
| 1:36 | lapp | Brev från byggnadsnämnden | Hej. Gun-Britt här, byggnadsnämnden. Tyvärr har ni en skylt utan bygglov. Tyvärr har ni också ett hus utan bygglov. Tyvärr måste ni fylla i blankett 14B. Tyvärr finns den bara på papper. Tyvärr är jag ledsen. /Gun-Britt |
| 1:36 | röst | gunbritt | Hej. Gun-Britt här, byggnadsnämnden. Tyvärr har ni en skylt utan bygglov. Tyvärr har ni också ett hus utan bygglov. Tyvärr måste ni fylla i blankett 14B. Tyvärr finns den bara på papper. Tyvärr är jag ledsen. /Gun-Britt · STORY |
| 1:39 | poolTom | du | 4 repliker använda |
| 1:43 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 1:43 | butiksbubbla | ali | Dina krukor säljer. Tanterna i kvarteret älskar dem. |
| 1:44 | händelse | salt | sak=n3_stol n=1 |
| 1:44 | aliSalt | ali | 16000 |
| 1:44 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 1:45 | väntar | ali | Dina krukor säljer. Tanterna i kvarteret älskar dem. |
| 1:45 | väntar | bud | (tips) |
| 1:54 | klar | gunbritt | Hej. Gun-Britt här, byggnadsnämnden. Tyvärr har ni en skylt utan bygglov. Tyvärr har ni också ett hus utan bygglov. Tyvärr måste ni fylla i blankett 14B. Tyvärr finns den bara på papper. Tyvärr är jag ledsen. /Gun-Britt |
| 1:54 | sak | ali | Dina krukor säljer. Tanterna i kvarteret älskar dem. |
| 1:54 | röst | ali | Dina krukor säljer. Tanterna i kvarteret älskar dem. · STORY |
| 2:00 | klar | ali | Dina krukor säljer. Tanterna i kvarteret älskar dem. |
| 2:00 | sak | bud | (tips) |
| 2:01 | klar | bud | (tips) |
| 2:03 | meddelande | bror | Jag har gjort om ditt rum till gym. Mamma vet inte. Säg inget. |
| 2:04 | röst | bror | Jag har gjort om ditt rum till gym. Mamma vet inte. Säg inget. · STORY |
| 2:14 | paket |  | sms |
| 2:14 | väntar | bror | Bra. Jag har satt upp en räcka i din garderob. Den håller. Typ. |
| 2:22 | händelse | brevLast | id=b_gym |
| 2:27 | sak | rolf | Hörde att du har JACUZZI.. Ja tar mä grillen. Och Kajsa. Hon ä en katt. Hon badar int. /R​ |
| 2:27 | sms | rolf | Hörde att du har JACUZZI.. Ja tar mä grillen. Och Kajsa. Hon ä en katt. Hon badar int. /R​ |
| 2:27 | sms-bubbla | rolf | Hörde att du har JACUZZI.. Ja tar mä grillen. Och Kajsa. Hon ä en katt. Hon badar int. /R​ |
| 2:27 | röst | rolf | Hörde att du har JACUZZI.. Ja tar mä grillen. Och Kajsa. Hon ä en katt. Hon badar int. /R​ · STORY |
| 2:27 | väntar | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått projektor + duk. Och rgb-ljuspinne. Gunnar, du hör väl? |
| 2:27 | radio | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått projektor + duk. Och rgb-ljuspinne. Gunnar, du hör väl? |
| 2:27 | skratt | du | Radio-Kjelle |
| 2:32 | tanke | du | Jag äger marken jag bor på! Inte längre en hobo dweller. |
| 2:32 | väntar | du | Jag äger marken jag bor på! Inte längre en hobo dweller. |
| 2:32 | paket |  | sms |
| 2:32 | väntar | rolf | Jo jo.. Bengt-Åke sa ja! Han ville först ha 59 500 men ja sa att du städat hela hans skräpiga mark gratis. Då blev dä 49.5. Grattis, markägare. /R​ |
| 2:32 | paket |  | sms |
| 2:32 | väntar | mamma | Pappa säger att du har köpt mark? Hur? Vems? Har du skrivit på något? Skicka papperen till mig så läser jag. |
| 2:32 | händelse | malKlart | id=m16-kop-tomten-bor del=Dag 16 – Egen mark nasta=m16-lagg-flagan-bengt |
| 2:32 | bekräftelse | du | plats |
| 2:32 | struken | du | Jag äger marken jag bor på! Inte längre en hobo dweller. |
| 2:32 | väntar | du | Grannen är arg. Flagan lägger jag i Bengt-Åkes postlåda. |
| 2:32 | MÅL |  | Lägg flagan i Bengt-Åkes postlåda |
| 2:35 | målruta |  | Lägg flagan i Bengt-Åkes postlåda |
| 2:35 | pil |  | Lägg flagan i Bengt-Åkes postlåda |
| 2:35 | klar | rolf | Hörde att du har JACUZZI.. Ja tar mä grillen. Och Kajsa. Hon ä en katt. Hon badar int. /R​ |
| 2:35 | sak | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått projektor + duk. Och rgb-ljuspinne. Gunnar, du hör väl? |
| 2:35 | notis |  | 📻 Radio Tippen: Radio Tippen, Kjelle här. Skjulet vid tippen har fått projektor + duk. Och rgb-ljuspinne. Gunnar, du hör väl? |
| 2:35 | röst | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått projektor + duk. Och rgb-ljuspinne. Gunnar, du hör väl? · REAKTION |
| 2:35 | nick |  | nick:106 |
| 2:36 | kvittens-bock |  | ✓ Köp tomten du bor på |
| 2:41 | väntar | notis:📔 Prestation: HMPF · +3 respekt | 📔 Prestation: HMPF · +3 respekt |
| 2:44 | klar | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått projektor + duk. Och rgb-ljuspinne. Gunnar, du hör väl? |
| 2:45 | sak | du | Grannen är arg. Flagan lägger jag i Bengt-Åkes postlåda. |
| 2:45 | notis | tanke | 💭 Grannen är arg. Flagan lägger jag i Bengt-Åkes postlåda. |
| 2:45 | röst | du | Grannen är arg. Flagan lägger jag i Bengt-Åkes postlåda. · MÅL |
| 2:50 | klar | du | Grannen är arg. Flagan lägger jag i Bengt-Åkes postlåda. |
| 2:57 | paket |  | brev |
| 2:57 | väntar | bengt | PAPPA LETADE HELA LIVET. HMPF. GÅ IN DÅ. FÖRSTA KLUMPEN ÄR MIN. DEN SKA TILL PAPPAS GRAV. |
| 2:57 | paket |  | ge → brev |
| 2:57 | väntar |  | (läget ändras) |
| 2:57 | väntar | rolf | Svackan. Ja å Birgitta badade i floden där. Ja har vinkelslipen, men skivan e slut. Printa en kapskiva åt mej, i kolfiber. /R |
| 2:57 | händelse | malKlart | id=m16-lagg-flagan-bengt del=Dag 16 – Egen mark nasta=m16-ge-rolf-kapskiva |
| 2:57 | bekräftelse | du | plats |
| 2:57 | väntar | du | Rolf har hjälpt mig. Han ska få en kapskiva i kolfiber. |
| 2:57 | målruta |  | Ge Rolf en kapskiva i kolfiber |
| 2:57 | MÅL |  | Ge Rolf en kapskiva i kolfiber |
| 2:57 | sak | du | Rolf har hjälpt mig. Han ska få en kapskiva i kolfiber. |
| 2:57 | pil |  | Ge Rolf en kapskiva i kolfiber |
| 2:57 | notis | tanke | 💭 Rolf har hjälpt mig. Han ska få en kapskiva i kolfiber. |
| 2:57 | röst | du | Rolf har hjälpt mig. Han ska få en kapskiva i kolfiber. · MÅL |
| 2:57 | nick |  | nick:107 |
| 2:57 | väntar | foto | Min mark |
| 2:57 | paket |  | tanke |
| 2:57 | tanke | du | Nu kan ingen säga att jag inte hör hemma här. |
| 2:57 | väntar | du | Nu kan ingen säga att jag inte hör hemma här. |
| 3:01 | kvittens-bock |  | ✓ Lägg flagan i Bengt-Åkes postlåda |
| 3:01 | väntar | bror | Tomt här hemma. Ingen som snor mina laddare. Inte för att jag saknar det eller nåt. |
| 3:01 | tanke | du | Något blänker i fönstret där borta. En kikare? |
| 3:01 | väntar | du | Något blänker i fönstret där borta. En kikare? |
| 3:01 | väntar | värld:HMPF. | HMPF. |
| 3:02 | klar | du | Rolf har hjälpt mig. Han ska få en kapskiva i kolfiber. |
| 3:02 | sak | foto | Min mark |
| 3:02 | foto | du | Min mark |
| 3:02 | kvitto-visas | bengt | PAPPA LETADE HELA LIVET. HMPF. GÅ IN DÅ. FÖRSTA KLUMPEN ÄR MIN. DEN SKA TILL PAPPAS GRAV. |
| 3:02 | sak | bengt | PAPPA LETADE HELA LIVET. HMPF. GÅ IN DÅ. FÖRSTA KLUMPEN ÄR MIN. DEN SKA TILL PAPPAS GRAV. |
| 3:02 | lapp | Lapp från Bengt-Åke | PAPPA LETADE HELA LIVET. HMPF. GÅ IN DÅ. FÖRSTA KLUMPEN ÄR MIN. DEN SKA TILL PAPPAS GRAV. |
| 3:05 | klar | foto | Min mark |
| 3:07 | struken | notis:📔 Prestation: HMPF · +3 respekt | 📔 Prestation: HMPF · +3 respekt |
| 3:07 | paket |  | sms |
| 3:07 | väntar | rolf | Hörru.. Kajsa hitta en låda kolfiberrester bakom husvagnen. Hon ville int ha dôm. Grinden. /R​ |
| 3:10 | sak |  | (läget ändras) |
| 3:11 | klar |  | (läget ändras) |
| 3:11 | sak | rolf | Svackan. Ja å Birgitta badade i floden där. Ja har vinkelslipen, men skivan e slut. Printa en kapskiva åt mej, i kolfiber. /R |
| 3:11 | lapp | Brev från Rolf | Svackan. Ja å Birgitta badade i floden där. Ja har vinkelslipen, men skivan e slut. Printa en kapskiva åt mej, i kolfiber. /R |
| 3:11 | röst | rolf | Svackan. Ja å Birgitta badade i floden där. Ja har vinkelslipen, men skivan e slut. Printa en kapskiva åt mej, i kolfiber. /R · STORY |
| 3:21 | händelse | printStart | sak=kapskiva |
| 3:22 | klar | rolf | Svackan. Ja å Birgitta badade i floden där. Ja har vinkelslipen, men skivan e slut. Printa en kapskiva åt mej, i kolfiber. /R |
| 3:24 | struken | värld:HMPF. | HMPF. |
| 3:24 | struken | du | Något blänker i fönstret där borta. En kikare? |
| 3:24 | händelse | printKlar | sak=kapskiva n=1 |
| 3:24 | händelse | tagitUrPrint | sak=kapskiva n=1 |
| 3:27 | väntar | värld:TUUT! Grann skylt! | TUUT! Grann skylt! |
| 3:28 | händelse | malKlart | id=m16-ge-rolf-kapskiva del=Dag 16 – Egen mark nasta=m17-kop-angen-oster |
| 3:28 | bekräftelse | du | plats |
| 3:28 | väntar | du | Kolfiber. Det säljer. Och ängen bredvid är till salu. |
| 3:28 | MÅL |  | Spara till ängen i öster · 5 311 / 27 500 kr |
| 3:28 | målruta |  | Spara till ängen i öster · 5 311 / 27 500 kr |
| 3:28 | sak | du | Kolfiber. Det säljer. Och ängen bredvid är till salu. |
| 3:28 | pil |  | Spara till ängen i öster · 5 311 / 27 500 kr |
| 3:28 | notis | tanke | 💭 Kolfiber. Det säljer. Och ängen bredvid är till salu. |
| 3:28 | röst | du | Kolfiber. Det säljer. Och ängen bredvid är till salu. · MÅL |
| 3:32 | kvittens-bock |  | ✓ Ge Rolf en kapskiva i kolfiber |
| 3:33 | klar | du | Kolfiber. Det säljer. Och ängen bredvid är till salu. |
| 3:33 | händelse | printStart | sak=n3_stol |
| 3:35 | brott | RADBRYTNING | för lång rad (44): "Spara till ängen i öster · 5 311 / 27 500 kr" |
| 3:39 | poolTom | du | 4 repliker använda |
| 3:40 | händelse | printKlar | sak=n3_stol n=9 |
| 3:40 | händelse | tagitUrPrint | sak=n3_stol n=1 |
| 3:42 | sak | du | Nu kan ingen säga att jag inte hör hemma här. |
| 3:42 | notis | tanke | 💭 Nu kan ingen säga att jag inte hör hemma här. |
| 3:42 | röst | du | Nu kan ingen säga att jag inte hör hemma här. · STORY |
| 3:42 | händelse | printStart | sak=n3_stol |
| 3:46 | klar | du | Nu kan ingen säga att jag inte hör hemma här. |
| 3:48 | struken | värld:TUUT! Grann skylt! | TUUT! Grann skylt! |
| 3:49 | skratt | du | plastspagetti |
| 3:49 | händelse | printKlar | sak=n3_stol n=10 |
| 3:49 | paket |  | replik → replik |
| 3:49 | väntar | rolf | Hon älska å bada hä. Gå du. Ja står hä en stund. |
| 3:49 | väntar | rolf | Birgittas. Hon vaska för skoj. Hitta aldrig nåt. |
| 3:49 | sak | rolf | Hon älska å bada hä. Gå du. Ja står hä en stund. |
| 3:49 | notis |  | Rolf: ”Hon älska å bada hä. Gå du. Ja står hä en stund.” |
| 3:49 | röst | rolf | Hon älska å bada hä. Gå du. Ja står hä en stund. · STORY |
| 3:49 | nej | du | Öppna postlådan – Rolf har lämnat: Fynd nivå 3: kolfiberrester + Fynd nivå 3: kolfiberrester + Fynd nivå 3: kolfiberrester |
| 3:49 | toast | fickskylt | Fulla fickor |
| 3:49 | fullaFickor | du | spagetti |
| 3:50 | kvitto-visas | rolf | Birgittas. Hon vaska för skoj. Hitta aldrig nåt. |
| 3:50 | sak | rolf | Birgittas. Hon vaska för skoj. Hitta aldrig nåt. |
| 3:50 | notis |  | Rolf: ”Birgittas. Hon vaska för skoj. Hitta aldrig nåt.” |
| 3:50 | händelse | tagitUrPrint | sak=spagetti n=1 |
| 3:53 | klar | rolf | Hon älska å bada hä. Gå du. Ja står hä en stund. |
| 3:57 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 3:59 | händelse | salt | sak=spagetti n=1 |
| 3:59 | skratt | du | Ali köper konst |
| 3:59 | aliSalt | ali | 3 |
| 3:59 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 3:59 | händelse | salt | sak=n3_stol n=1 |
| 3:59 | aliSalt | ali | 15200 |
| 3:59 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 4:03 | sak | mamma | …och tapeter. Och en gamingbod med lampor i alla färger. |
| 4:03 | sms | mamma | …och tapeter. Och en gamingbod med lampor i alla färger. |
| 4:03 | sms-bubbla | mamma | …och tapeter. Och en gamingbod med lampor i alla färger. |
| 4:03 | röst | mamma | …och tapeter. Och en gamingbod med lampor i alla färger. · STORY |
| 4:08 | händelse | printStart | sak=n3_stol |
| 4:09 | klar | mamma | …och tapeter. Och en gamingbod med lampor i alla färger. |
| 4:15 | händelse | printKlar | sak=n3_stol n=11 |
| 4:15 | händelse | tagitUrPrint | sak=n3_stol n=1 |
| 4:17 | brott | RADBRYTNING | för lång rad (45): "Spara till ängen i öster · 20 514 / 27 500 kr" |
| 4:22 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 4:24 | händelse | salt | sak=n3_stol n=1 |
| 4:24 | aliSalt | ali | 14440 |
| 4:24 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 4:25 | väntar | ali | Jag har en ny hylla. Den lutar. Som jag. |
| 4:25 | sak | ali | Jag har en ny hylla. Den lutar. Som jag. |
| 4:25 | röst | ali | Jag har en ny hylla. Den lutar. Som jag. · SMÅPRAT |
| 4:26 | bubbla |  | Jag har en ny hylla. Den lutar. Som jag. |
| 4:29 | klar | ali | Jag har en ny hylla. Den lutar. Som jag. |
| 4:48 | sak | rolf | Nämen.. Ja hitta ett flipperspel på mitt hemliga ställe. Dä ä ditt. Sen: Bengt-Åke vill sälja tomten du bor på. Tavlan vid vägen. /R​ |
| 4:48 | sms | rolf | Nämen.. Ja hitta ett flipperspel på mitt hemliga ställe. Dä ä ditt. Sen: Bengt-Åke vill sälja tomten du bor på. Tavlan vid vägen. /R​ |
| 4:48 | sms-bubbla | rolf | Nämen.. Ja hitta ett flipperspel på mitt hemliga ställe. Dä ä ditt. Sen: Bengt-Åke vill sälja tomten du bor på. Tavlan vid vägen. /R​ |
| 4:48 | röst | rolf | Nämen.. Ja hitta ett flipperspel på mitt hemliga ställe. Dä ä ditt. Sen: Bengt-Åke vill sälja tomten du bor på. Tavlan vid vägen. /R​ · STORY |
| 4:50 | tanke | du | Ängen i öster är min! Gärdesgården har flyttats – där får jag ställa saker nu. |
| 4:50 | väntar | du | Ängen i öster är min! Gärdesgården har flyttats – där får jag ställa saker nu. |
| 4:50 | paket |  | sms |
| 4:50 | väntar | rolf | Nämen. Ängen ä din. Bengt-Åke frågaed va du ska ha den till. Ja sa solpaneler. Han trodde ja sa "sol-paella". Han va glad ändå. /R *frågade​ |
| 4:50 | händelse | malKlart | id=m17-kop-angen-oster del=Dag 17 – Ängen nasta=m17-vaska-guld-floden |
| 4:50 | bekräftelse | du | plats |
| 4:50 | struken | du | Ängen i öster är min! Gärdesgården har flyttats – där får jag ställa saker nu. |
| 4:50 | väntar | du | Huset kostar mer än jag har. Jag vaskar guld i floden. |
| 4:50 | MÅL |  | Vaska guld i floden |
| 4:52 | målruta |  | Vaska guld i floden |
| 4:52 | pil |  | Vaska guld i floden |
| 4:54 | kvittens-bock |  | ✓ Köp ängen i öster – tavlan vid vägen |
| 4:59 | klar | rolf | Nämen.. Ja hitta ett flipperspel på mitt hemliga ställe. Dä ä ditt. Sen: Bengt-Åke vill sälja tomten du bor på. Tavlan vid vägen. /R​ |
| 4:59 | sak | du | Huset kostar mer än jag har. Jag vaskar guld i floden. |
| 4:59 | notis | tanke | 💭 Huset kostar mer än jag har. Jag vaskar guld i floden. |
| 4:59 | röst | du | Huset kostar mer än jag har. Jag vaskar guld i floden. · MÅL |
| 5:04 | klar | du | Huset kostar mer än jag har. Jag vaskar guld i floden. |
| 5:09 | skratt | du | falsk tuta |
| 5:14 | paket |  | tanke |
| 5:14 | tanke | du | En kapsyl. |
| 5:14 | väntar | du | En kapsyl. |
| 5:14 | sak | du | En kapsyl. |
| 5:14 | notis | tanke | 💭 En kapsyl. |
| 5:14 | röst | du | En kapsyl. · REAKTION |
| 5:14 | händelse | malKlart | id=m17-vaska-guld-floden del=Dag 17 – Ängen nasta=m17-solpark2 |
| 5:14 | bekräftelse | du | plats |
| 5:14 | väntar | du | Ett hus drar mer ström. Jag bygger en solcellspark på ängen. |
| 5:14 | MÅL |  | Köp solcellsparken |
| 5:14 | upplåst | strom | solpark2 |
| 5:14 | brott | UPPLÅST | solpark2 (strom 0 av 15, sparat ihop) |
| 5:14 | händelse | upplast | id=solpark2 flask=strom |
| 5:14 | paket |  | sms |
| 5:14 | väntar | ali | Ali här. Solcellspark nummer två. Ängen är din nu. Sätt den där. |
| 5:16 | paket |  | tanke |
| 5:16 | tanke | du | En kapsyl. Igen. |
| 5:16 | väntar | du | En kapsyl. Igen. |
| 5:16 | klar | du | En kapsyl. |
| 5:16 | målruta |  | Köp solcellsparken |
| 5:18 | paket |  | tanke |
| 5:18 | tanke | du | Det står Rolf & Birgitta 1979 på insidan. |
| 5:18 | väntar | du | Det står Rolf & Birgitta 1979 på insidan. |
| 5:18 | kvittens-bock |  | ✓ Vaska guld i floden |
| 5:19 | hjälp | kontroll | E: Ryggsäcken och kistan – raden är full |
| 5:20 | sak | du | Ett hus drar mer ström. Jag bygger en solcellspark på ängen. |
| 5:20 | pil |  | Köp solcellsparken |
| 5:20 | notis | tanke | 💭 Ett hus drar mer ström. Jag bygger en solcellspark på ängen. |
| 5:20 | röst | du | Ett hus drar mer ström. Jag bygger en solcellspark på ängen. · MÅL |
| 5:20 | nick |  | nick:110 |
| 5:21 | väntar | bud | (tips) |
| 5:26 | klar | du | Ett hus drar mer ström. Jag bygger en solcellspark på ängen. |
| 5:26 | sak | bud | (tips) |
| 5:28 | klar | bud | (tips) |
| 5:30 | meddelande | bror | En GAMINGBOD?! Jag bor i en etta med mögel. Kan jag flytta in? Skämtar. Typ. |
| 5:31 | röst | bror | En GAMINGBOD?! Jag bor i en etta med mögel. Kan jag flytta in? Skämtar. Typ. · STORY |
| 5:41 | paket |  | sms |
| 5:41 | väntar | bror | Seriöst? … Nej. Mamma skulle aldrig sluta prata om det. Men tack. |
| 5:50 | händelse | brevLast | id=b_bod |
| 5:50 | poolTom | du | 4 repliker använda |
| 5:51 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 5:52 | sak | ali | Ali här. Solcellspark nummer två. Ängen är din nu. Sätt den där. |
| 5:52 | sms | ali | Ali här. Solcellspark nummer två. Ängen är din nu. Sätt den där. |
| 5:52 | sms-bubbla | ali | Ali här. Solcellspark nummer två. Ängen är din nu. Sätt den där. |
| 5:52 | röst | ali | Ali här. Solcellspark nummer två. Ängen är din nu. Sätt den där. · STORY |
| 5:53 | skratt | du | Alis dyr-pling |
| 5:53 | struken | info:guld | 3D-modell köpt – printa solcellspark |
| 5:53 | händelse | kopt | sak=solpark |
| 5:53 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 6:01 | klar | ali | Ali här. Solcellspark nummer två. Ängen är din nu. Sätt den där. |
| 6:03 | struken | du | En kapsyl. Igen. |
| 6:11 | sak | du | Det står Rolf & Birgitta 1979 på insidan. |
| 6:11 | notis | tanke | 💭 Det står Rolf & Birgitta 1979 på insidan. |
| 6:11 | röst | du | Det står Rolf & Birgitta 1979 på insidan. · STORY |
| 6:14 | klar | du | Det står Rolf & Birgitta 1979 på insidan. |
| 6:16 | händelse | printStart | sak=byggsats:solpark |
| 6:18 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 6:19 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 6:21 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 6:21 | väntar | notis:Skrivare L: Tornet är tomt – mal mer så  | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 6:23 | toast | bra | Del 1 av 4 klar |
| 6:23 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 6:24 | väntar | värld:Mjau. | Mjau. |
| 6:24 | skratt | du | kvarnen spottar |
| 6:25 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 6:27 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 6:30 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 6:31 | sak | notis:Skrivare L: Tornet är tomt – mal mer så  | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 6:31 | notis | fel | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 6:32 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 6:33 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 6:34 | klar | notis:Skrivare L: Tornet är tomt – mal mer så  | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 6:35 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 6:35 | väntar | bud | (tips) |
| 6:35 | sak | bud | (tips) |
| 6:36 | toast | bra | Del 2 av 4 klar |
| 6:37 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 6:37 | klar | bud | (tips) |
| 6:38 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 6:39 | meddelande | mamma | Kommer du hem på jul? Pappa har redan köpt skinkan. I augusti. Den ligger i frysen och tittar på mig. |
| 6:40 | röst | mamma | Kommer du hem på jul? Pappa har redan köpt skinkan. I augusti. Den ligger i frysen och tittar på mig. · STORY |
| 6:51 | paket |  | sms |
| 6:51 | väntar | mamma | Det säger du nu. |
| 7:02 | händelse | brevLast | id=m_jul |
| 7:03 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 7:04 | sak | mamma | Okej. Jag erkänner. Det är finare än hemma. |
| 7:04 | sms | mamma | Okej. Jag erkänner. Det är finare än hemma. |
| 7:04 | sms-bubbla | mamma | Okej. Jag erkänner. Det är finare än hemma. |
| 7:04 | röst | mamma | Okej. Jag erkänner. Det är finare än hemma. · STORY |
| 7:05 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 7:06 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 7:07 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 7:08 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 7:09 | klar | mamma | Okej. Jag erkänner. Det är finare än hemma. |
| 7:10 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 7:11 | struken | värld:Mjau. | Mjau. |
| 7:11 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 7:12 | toast | bra | Del 3 av 4 klar |
| 7:12 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 7:13 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 7:14 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 7:15 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 7:17 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 7:18 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 7:19 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 7:20 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 7:21 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 7:23 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 7:24 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 7:25 | händelse | printKlar | sak=byggsats:solpark n=1 |
| 7:28 | nej | du | Ta ut solcellspark |
| 7:28 | toast | fickskylt | Fulla fickor |
| 7:28 | fullaFickor | du | byggsats:solpark |
| 7:29 | händelse | tagitUrPrint | sak=byggsats:solpark n=1 |
| 7:39 | händelse | placerat | sak=solpark |
| 7:39 | händelse | malKlart | id=m17-solpark2 del=Dag 17 – Ängen nasta=sov17 |
| 7:39 | paket |  | lapp |
| 7:39 | kvallsrad | du | Nu vet kommunen att jag bor HÄR. Maskinerna står och väntar på mig. I morgon. |
| 7:39 | bekräftelse | du | plats |
| 7:39 | målruta |  | Sov när du vill |
| 7:40 | MÅL |  | Sov när du vill |
| 7:41 | sak | du | (nytt mål i rutan) |
| 7:41 | pil |  | Sov när du vill |
| 7:41 | klar | du | (nytt mål i rutan) |
| 7:41 | nick |  | nick:111 |
| 7:43 | kvittens-bock |  | ✓ Bygg en solcellspark på ängen |
| 7:47 | väntar | notis:🌇 Klockan är 21. Ali slår igen luckan.  | 🌇 Klockan är 21. Ali slår igen luckan. Dagens jobb är klart – gå in i skjulet och sov i sängen. |
| 7:48 | autosparning | du | natt 20 december |
| 7:48 | struken | mamma | Bygger du ett hus till? Du har inte ens dammsugit ditt rum här hemma på fyra år. |
| 7:48 | struken | bror | Tomt här hemma. Ingen som snor mina laddare. Inte för att jag saknar det eller nåt. |
| 7:51 | webbBetalt | du | 1042 |
| 7:51 | nattkort | du | 🌙 4 dagar kvar. God natt. zzz… Nu vet kommunen att jag bor HÄR. Maskinerna står och väntar på mig. I morgon. DAGENS PRINTAR Kolfiberstol × 4 Designvas i röd PE |

<details><summary>Botens handlingar dag 11</summary>

- 0:00 — dag 11 börjar — (12811 kr)
- 0:15 popup: "FORTSÄTT" (12811 kr)
- 0:31 gå till Rolfs postlåda (29 m) (12811 kr)
- 0:37 panel: "Rolfs postlåda
Det här låg i l" (18811 kr)
- 0:40 gå till skrivaren (10 m) (18811 kr)
- 0:41 printar Designvas i röd PETG (18811 kr)
- 0:46 tar ut 1 st ur skrivaren (18811 kr)
- 0:46 fulla fickor – lägger ra_flipper i kistan (18811 kr)
- 0:51 gå till datorn (23 m) (18811 kr)
- 0:59 panel: "Webbshopen · Soptippsvägen 1
B" (18811 kr)
- 1:08 panel: "Webbshopen · Soptippsvägen 1
B" (18811 kr)
- 1:16 panel: "Webbshopen · Soptippsvägen 1
B" (18811 kr)
- 1:23 gå till Rolfs postlåda (paket) (29 m) (18811 kr)
- 1:24 webbshop: 2 paket i postlådan (18811 kr)
- 1:24 tjänar pengar till tomten: 18811/29500 kr → printar kolfiberstol (16000 kr) (18811 kr)
- 1:27 gå till skrivaren (15 m) (18811 kr)
- 1:28 printar Kolfiberstol (18811 kr)
- 1:36 tar ut 1 st ur skrivaren (18811 kr)
- 1:43 gå till Ali (34 m) (18811 kr)
- 1:43 öppnar Alis butik – sälja (18811 kr)
- 1:44 säljer hos Ali: +16000 kr (34811 kr)
- 2:14 popup: "Okej, jag säger inget." (34811 kr)
- 2:22 popup: "Läst" (34811 kr)
- 2:23 gå till Rolfs postlåda (31 m) (34811 kr)
- 2:27 panel: "Rolfs postlåda
Det här låg i l" (34811 kr)
- 2:32 gå till tavlan vid vägen (24 m) (34811 kr)
- 2:32 köper tomten du bor på (29500 kr) (5311 kr)
- 2:57 gå till Bengt-Åkes brevlåda (45 m) (5311 kr)
- 3:20 gå till skrivaren (66 m) (5311 kr)
- 3:21 printar Kapskiva i kolfiber (5311 kr)
- 3:25 tar ut 1 st ur skrivaren (5311 kr)
- 3:28 gå till Rolfs postlåda (16 m) (5311 kr)
- 3:29 tjänar pengar till ängen i öster: 5311/27500 kr → printar kolfiberstol (15200 kr) (5311 kr)
- 3:32 gå till skrivaren (14 m) (5311 kr)
- 3:33 printar Kolfiberstol (5311 kr)
- 3:41 tar ut 1 st ur skrivaren (5311 kr)
- 3:42 printar Kolfiberstol (5311 kr)
- 3:50 tar ut 1 st ur skrivaren (5311 kr)
- 3:50 fulla fickor – lägger burk_porslin i kistan (5311 kr)
- 3:57 gå till Ali (34 m) (5311 kr)
- 3:57 öppnar Alis butik – sälja (5311 kr)
- 3:59 säljer hos Ali: +15203 kr (20514 kr)
- 4:00 tjänar pengar till ängen i öster: 20514/27500 kr → printar kolfiberstol (14440 kr) (20514 kr)
- 4:07 gå till skrivaren (33 m) (20514 kr)
- 4:08 printar Kolfiberstol (20514 kr)
- 4:16 tar ut 1 st ur skrivaren (20514 kr)
- 4:22 gå till Ali (33 m) (20514 kr)
- 4:22 öppnar Alis butik – sälja (20514 kr)
- 4:24 säljer hos Ali: +14440 kr (34954 kr)
- 4:37 gå till Rolfs postlåda (31 m) (34954 kr)
- 4:44 panel: "Rolfs postlåda
Det här låg i l" (34954 kr)
- 4:50 gå till tavlan vid vägen (24 m) (34954 kr)
- 4:50 köper ängen i öster (27500 kr) (7454 kr)
- 5:14 gå till bäcken (50 m) (7454 kr)
- 5:20 vaskar i bäcken (7454 kr)
- 5:41 popup: "Klart du får." (7454 kr)
- 5:50 popup: "Läst" (7454 kr)
- 5:51 gå till Ali (58 m) (7454 kr)
- 5:51 öppnar Alis butik – köpa solcellspark (7454 kr)
- 5:54 köper solpark för 3600 kr (3854 kr)
- 6:08 plockar 7 skräp på tippen (bär max 16) (3854 kr)
- 6:10 gå till kvarnen (12 m) (3854 kr)
- 6:14 gå till skrivaren (7 m) (3854 kr)
- 6:16 printar Solcellspark (4 delar) (3854 kr)
- 6:28 plockar 6 skräp på tippen (bär max 16) (3854 kr)
- 6:31 gå till kvarnen (13 m) (3854 kr)
- 6:51 popup: "Nej. Jag firar här." (3854 kr)
- 7:02 popup: "Läst" (3854 kr)
- 7:28 gå till skrivaren (7 m) (3854 kr)
- 7:29 tar ut 1 st ur skrivaren (3854 kr)
- 7:29 fulla fickor – lägger fynd3 i kistan (3854 kr)
- 7:38 gå till platsen för solcellspark (45 m) (3854 kr)
- 7:39 ställer ut solcellspark (3854 kr)
- 7:48 gå till sängen (24 m) (3854 kr)

</details>

## Dag 12

| Tid | Källa | Vem | Text |
|---|---|---|---|
| 7:51 | vara | ali | n2_hjalm |
| 7:51 | händelse | malKlart | id=sov17 del=Dag 17 – Ängen nasta=m18-bygg-diamantkvarnen |
| 7:51 | bekräftelse | du | plats |
| 7:51 | tanke | du | Jag skulle kunna äta en sopsäck. Nästan. |
| 7:51 | väntar | du | Jag skulle kunna äta en sopsäck. Nästan. |
| 7:51 | MÅL |  | Bygg diamantkvarnen |
| 0:00 | autosparning | du | morgon 21 december |
| 0:01 | händelse | dagenBorjar | dag=12 |
| 0:01 | meddelande | du | 3 dagar till jul. Utan den blir det ingen grund före jul. |
| 0:01 | dagbokkort | du | Diamantkvarnen. · 3 dagar till jul. Utan den blir det ingen grund före jul. |
| 0:01 | röst | du | 3 dagar till jul. Diamantkvarnen. Utan den blir det ingen grund före jul. · STORY |
| 0:03 | paket |  | sms |
| 0:03 | väntar | rolf | Hörru.. Lapp i lådan. Int brådis. Men lite brådis. /R​ |
| 0:08 | väntar | notis:morgon | Webbshopen: 2 paket i natt · +1 042 kr · Ali vill ha idag: Cykelhjälm i PETG · +50 % |
| 0:08 | händelse | morgonkortStangt | dag=12 |
| 0:08 | paket |  | tanke → sms |
| 0:08 | tanke | du | Tre dagar kvar. Och jag är tillbaka där jag började. |
| 0:08 | väntar | du | Tre dagar kvar. Och jag är tillbaka där jag började. |
| 0:08 | väntar | rolf | Jo jo.. Såg att plåten låg på marken. Ja å Ali kömmer o hjälper dej mä ett riktigt hus. /R​ |
| 0:08 | struken | du | Jag skulle kunna äta en sopsäck. Nästan. |
| 0:08 | väntar | du | Guld. Ingen kvarn jag har klarar det. |
| 0:10 | målruta |  | Bygg diamantkvarnen |
| 0:13 | skratt | du | däcket rullar iväg |
| 0:13 | sak | du | Guld. Ingen kvarn jag har klarar det. |
| 0:13 | pil |  | Bygg diamantkvarnen |
| 0:13 | notis | tanke | 💭 Guld. Ingen kvarn jag har klarar det. |
| 0:13 | röst | du | Guld. Ingen kvarn jag har klarar det. · MÅL |
| 0:14 | nick |  | nick:112 |
| 0:17 | klar | du | Guld. Ingen kvarn jag har klarar det. |
| 0:17 | struken | notis:🌇 Klockan är 21. Ali slår igen luckan.  | 🌇 Klockan är 21. Ali slår igen luckan. Dagens jobb är klart – gå in i skjulet och sov i sängen. |
| 0:18 | sak | notis:morgon | Webbshopen: 2 paket i natt · +1 042 kr · Ali vill ha idag: Cykelhjälm i PETG · +50 % |
| 0:18 | notis |  | 2 paket i natt · +1 042 kr |
| 0:18 | notis |  | Cykelhjälm i PETG · +50 % |
| 0:21 | väntar | rolf | Konditoriet på Storgatan har slutat me mazariner. Ja har skrivit ett klagomål. På papper. Me frimärke. /R |
| 0:22 | klar | notis:morgon | Webbshopen: 2 paket i natt · +1 042 kr · Ali vill ha idag: Cykelhjälm i PETG · +50 % |
| 0:33 | sak | du | Tre dagar kvar. Och jag är tillbaka där jag började. |
| 0:33 | notis | tanke | 💭 Tre dagar kvar. Och jag är tillbaka där jag började. |
| 0:33 | röst | du | Tre dagar kvar. Och jag är tillbaka där jag började. · STORY |
| 0:37 | händelse | printStart | sak=n2_hjalm |
| 0:38 | klar | du | Tre dagar kvar. Och jag är tillbaka där jag började. |
| 0:41 | händelse | printKlar | sak=n2_hjalm n=15 |
| 0:42 | händelse | tagitUrPrint | sak=n2_hjalm n=1 |
| 0:44 | händelse | printStart | sak=n2_hjalm |
| 0:47 | sak | bror | Pappa körde förbi för att kolla. Två gånger. Han säger att han skulle åt det hållet ändå. Det ska han aldrig. |
| 0:47 | sms | bror | Pappa körde förbi för att kolla. Två gånger. Han säger att han skulle åt det hållet ändå. Det ska han aldrig. |
| 0:47 | sms-bubbla | bror | Pappa körde förbi för att kolla. Två gånger. Han säger att han skulle åt det hållet ändå. Det ska han aldrig. |
| 0:47 | röst | bror | Pappa körde förbi för att kolla. Två gånger. Han säger att han skulle åt det hållet ändå. Det ska han aldrig. · STORY |
| 0:48 | händelse | printKlar | sak=n2_hjalm n=16 |
| 0:49 | händelse | tagitUrPrint | sak=n2_hjalm n=1 |
| 0:56 | klar | bror | Pappa körde förbi för att kolla. Två gånger. Han säger att han skulle åt det hållet ändå. Det ska han aldrig. |
| 1:03 | webb | du | packade 2 n2_hjalm |
| 1:18 | struken | info:bra | 📦 Paketet till Majvor i Nässjö ligger i postlådan – Rolf tar det till posten |
| 1:24 | händelse | printStart | sak=n3_stol |
| 1:30 | händelse | printKlar | sak=n3_stol n=12 |
| 1:31 | händelse | tagitUrPrint | sak=n3_stol n=1 |
| 1:32 | sak | mamma | Kan jag komma och bada på söndag? Pappa tar med korv. |
| 1:32 | sms | mamma | Kan jag komma och bada på söndag? Pappa tar med korv. |
| 1:32 | sms-bubbla | mamma | Kan jag komma och bada på söndag? Pappa tar med korv. |
| 1:32 | röst | mamma | Kan jag komma och bada på söndag? Pappa tar med korv. · STORY |
| 1:33 | händelse | printStart | sak=n3_stol |
| 1:36 | klar | mamma | Kan jag komma och bada på söndag? Pappa tar med korv. |
| 1:39 | händelse | printKlar | sak=n3_stol n=13 |
| 1:40 | händelse | tagitUrPrint | sak=n3_stol n=1 |
| 1:42 | händelse | printStart | sak=n3_stol |
| 1:45 | väntar | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått solcellspark. Vi tar en låt på det. Den här är till dig, Gunnar. |
| 1:45 | radio | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått solcellspark. Vi tar en låt på det. Den här är till dig, Gunnar. |
| 1:45 | skratt | du | Radio-Kjelle |
| 1:45 | sak | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått solcellspark. Vi tar en låt på det. Den här är till dig, Gunnar. |
| 1:45 | notis |  | 📻 Radio Tippen: Radio Tippen, Kjelle här. Skjulet vid tippen har fått solcellspark. Vi tar en låt på det. Den här är till dig, Gunnar. |
| 1:45 | röst | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått solcellspark. Vi tar en låt på det. Den här är till dig, Gunnar. · REAKTION |
| 1:48 | händelse | printKlar | sak=n3_stol n=14 |
| 1:49 | händelse | tagitUrPrint | sak=n3_stol n=1 |
| 1:53 | skratt | du | falsk tuta |
| 1:55 | klar | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått solcellspark. Vi tar en låt på det. Den här är till dig, Gunnar. |
| 1:56 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 1:56 | röst | ali | Pension? Glöm det. Jag har en kanal nu. Fyrtiotvå följare. Fyrtiotvå, habibi! · STORY |
| 1:56 | butiksbubbla | ali | Pension? Glöm det. Jag har en kanal nu. Fyrtiotvå följare. Fyrtiotvå, habibi! |
| 1:57 | händelse | salt | sak=n3_stol n=1 |
| 1:57 | aliSalt | ali | 16000 |
| 1:57 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 1:58 | händelse | salt | sak=n3_stol n=1 |
| 1:58 | aliSalt | ali | 15200 |
| 1:58 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 1:58 | händelse | salt | sak=n3_stol n=1 |
| 1:58 | aliSalt | ali | 14440 |
| 1:58 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 1:58 | händelse | salt | sak=fynd3 n=1 |
| 1:58 | aliSalt | ali | 120 |
| 1:58 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 1:58 | poolTom | du | 4 repliker använda |
| 1:58 | händelse | salt | sak=fynd3 n=1 |
| 1:58 | aliSalt | ali | 114 |
| 1:58 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 1:58 | händelse | salt | sak=fynd3 n=1 |
| 1:58 | aliSalt | ali | 108 |
| 1:58 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 2:08 | händelse | printStart | sak=n3_stol |
| 2:14 | händelse | printKlar | sak=n3_stol n=15 |
| 2:15 | händelse | tagitUrPrint | sak=n3_stol n=1 |
| 2:17 | sak | bror | Bra. Jag har satt upp en räcka i din garderob. Den håller. Typ. |
| 2:17 | sms | bror | Bra. Jag har satt upp en räcka i din garderob. Den håller. Typ. |
| 2:17 | sms-bubbla | bror | Bra. Jag har satt upp en räcka i din garderob. Den håller. Typ. |
| 2:17 | röst | bror | Bra. Jag har satt upp en räcka i din garderob. Den håller. Typ. · STORY |
| 2:22 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 2:23 | klar | bror | Bra. Jag har satt upp en räcka i din garderob. Den håller. Typ. |
| 2:23 | händelse | salt | sak=n3_stol n=1 |
| 2:23 | aliSalt | ali | 13718 |
| 2:23 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 2:45 | väntar | rolf | Hörru.. Konditoriet på Storgatan har slutat mä mazariner. Ja har skrivit ett klagomål. På papper. Mä frimärke. /R​ |
| 3:02 | sak | rolf | Jo jo.. Bengt-Åke sa ja! Han ville först ha 59 500 men ja sa att du städat hela hans skräpiga mark gratis. Då blev dä 49.5. Grattis, markägare. /R​ |
| 3:02 | sms | rolf | Jo jo.. Bengt-Åke sa ja! Han ville först ha 59 500 men ja sa att du städat hela hans skräpiga mark gratis. Då blev dä 49.5. Grattis, markägare. /R​ |
| 3:02 | sms-bubbla | rolf | Jo jo.. Bengt-Åke sa ja! Han ville först ha 59 500 men ja sa att du städat hela hans skräpiga mark gratis. Då blev dä 49.5. Grattis, markägare. /R​ |
| 3:02 | röst | rolf | Jo jo.. Bengt-Åke sa ja! Han ville först ha 59 500 men ja sa att du städat hela hans skräpiga mark gratis. Då blev dä 49.5. Grattis, markägare. /R​ · STORY |
| 3:26 | klar | rolf | Jo jo.. Bengt-Åke sa ja! Han ville först ha 59 500 men ja sa att du städat hela hans skräpiga mark gratis. Då blev dä 49.5. Grattis, markägare. /R​ |
| 3:47 | sak | mamma | Pappa såg bilden. Han sa "aha, vad lugnt då". Det betyder att han är jättestolt. |
| 3:47 | sms | mamma | Pappa såg bilden. Han sa "aha, vad lugnt då". Det betyder att han är jättestolt. |
| 3:47 | sms-bubbla | mamma | Pappa såg bilden. Han sa "aha, vad lugnt då". Det betyder att han är jättestolt. |
| 3:47 | röst | mamma | Pappa såg bilden. Han sa "aha, vad lugnt då". Det betyder att han är jättestolt. · STORY |
| 3:53 | klar | mamma | Pappa såg bilden. Han sa "aha, vad lugnt då". Det betyder att han är jättestolt. |
| 3:57 | väntar | mamma | Jag hämtar dig på julafton kl 15. Var redo. |
| 3:58 | poolTom | du | 4 repliker använda |
| 4:15 | skratt | du | falsk tuta |
| 4:25 | händelse | printStart | sak=n3_stol |
| 4:31 | händelse | printKlar | sak=n3_stol n=16 |
| 4:32 | sak | rolf | Hörru.. Kajsa hitta en låda kolfiberrester bakom husvagnen. Hon ville int ha dôm. Grinden. /R​ |
| 4:32 | sms | rolf | Hörru.. Kajsa hitta en låda kolfiberrester bakom husvagnen. Hon ville int ha dôm. Grinden. /R​ |
| 4:32 | sms-bubbla | rolf | Hörru.. Kajsa hitta en låda kolfiberrester bakom husvagnen. Hon ville int ha dôm. Grinden. /R​ |
| 4:32 | röst | rolf | Hörru.. Kajsa hitta en låda kolfiberrester bakom husvagnen. Hon ville int ha dôm. Grinden. /R​ · STORY |
| 4:32 | händelse | tagitUrPrint | sak=n3_stol n=1 |
| 4:37 | väntar | bror | Berättade för polarna att min lillebrorsa bygger sitt eget hus. Dom tror jag ljuger. Fortsätt. |
| 4:39 | väntar | ali | Den köper jag. Ge hit. |
| 4:39 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 4:39 | klar | rolf | Hörru.. Kajsa hitta en låda kolfiberrester bakom husvagnen. Hon ville int ha dôm. Grinden. /R​ |
| 4:41 | händelse | salt | sak=n3_stol n=1 |
| 4:41 | aliSalt | ali | 13032 |
| 4:41 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 4:42 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 4:43 | skratt | du | Alis dyr-pling |
| 4:43 | struken | info:guld | 3D-modell köpt – printa diamantkvarn |
| 4:43 | händelse | kopt | sak=diamantkniv |
| 4:43 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 4:45 | morgonkort | ⏸️ Pausad | ⏸️ Pausad · Klicka för att fortsätta. |
| 4:50 | sak | ali | Den köper jag. Ge hit. |
| 4:50 | röst | ali | Den köper jag. Ge hit. · REAKTION |
| 4:50 | upprepning | ali | Den köper jag. Ge hit. |
| 4:53 | klar | ali | Den köper jag. Ge hit. |
| 4:54 | ljud | kajsa | Mjau |
| 5:01 | väntar | notis:📔 Prestation: Städtokig · +3 respekt | 📔 Prestation: Städtokig · +3 respekt |
| 5:01 | sak | notis:📔 Prestation: Städtokig · +3 respekt | 📔 Prestation: Städtokig · +3 respekt |
| 5:01 | notis |  | 📔 Prestation: Städtokig · +3 respekt |
| 5:03 | klar | notis:📔 Prestation: Städtokig · +3 respekt | 📔 Prestation: Städtokig · +3 respekt |
| 5:06 | händelse | printStart | sak=byggsats:diamantkniv |
| 5:09 | toast | bra | Del 1 av 3 klar |
| 5:11 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 5:12 | toast | bra | Del 2 av 3 klar |
| 5:12 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 5:13 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 5:13 | väntar | notis:Skrivare L: Tornet är tomt – mal mer så  | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 5:13 | sak | notis:Skrivare L: Tornet är tomt – mal mer så  | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 5:13 | notis | fel | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 5:15 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 5:16 | klar | notis:Skrivare L: Tornet är tomt – mal mer så  | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 5:16 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 5:17 | händelse | printKlar | sak=byggsats:diamantkniv n=1 |
| 5:27 | händelse | tagitUrPrint | sak=byggsats:diamantkniv n=1 |
| 5:27 | paket |  | sms |
| 5:27 | väntar | ali | Ali här. Jag såg Diamantkvarn på avstånd. Ett streck blev lite snett. Mitt fel. Vackert ändå. |
| 5:29 | tanke | du | Diamantkvarnen sitter! Guldet – kom an. |
| 5:29 | väntar | du | Diamantkvarnen sitter! Guldet – kom an. |
| 5:29 | sak | du | Diamantkvarnen sitter! Guldet – kom an. |
| 5:29 | notis | tanke | 💭 Diamantkvarnen sitter! Guldet – kom an. |
| 5:29 | röst | du | Diamantkvarnen sitter! Guldet – kom an. · REAKTION |
| 5:29 | händelse | malKlart | id=m18-bygg-diamantkvarnen del=Dag 18 – Diamantkvarnen och grunden nasta=m18-mal-rulle-guld |
| 5:29 | bekräftelse | du | plats |
| 5:29 | väntar | du | Diamantkvarnen står. Nu mal jag guldet till en rulle. |
| 5:29 | MÅL |  | Mal en rulle guld |
| 5:31 | målruta |  | Mal en rulle guld |
| 5:32 | klar | du | Diamantkvarnen sitter! Guldet – kom an. |
| 5:33 | kvittens-bock |  | ✓ Bygg diamantkvarnen |
| 5:35 | sak | du | Diamantkvarnen står. Nu mal jag guldet till en rulle. |
| 5:35 | pil |  | Mal en rulle guld |
| 5:35 | notis | tanke | 💭 Diamantkvarnen står. Nu mal jag guldet till en rulle. |
| 5:35 | röst | du | Diamantkvarnen står. Nu mal jag guldet till en rulle. · MÅL |
| 5:35 | nick |  | nick:113 |
| 5:42 | klar | du | Diamantkvarnen står. Nu mal jag guldet till en rulle. |
| 5:43 | paket |  | sms |
| 5:43 | väntar | rolf | Jo jo.. Nån har slängt dunkar som glittrar. Guld, tror ja. Eller glitter. Dôm står vid grinden. MVH ROLF​ |
| 5:43 | paket |  | tanke |
| 5:43 | tanke | du | En tand. Jag tänker inte fråga. |
| 5:43 | väntar | du | En tand. Jag tänker inte fråga. |
| 5:43 | skratt | du | vaskmiss |
| 5:44 | sak | ali | Ali här. Jag såg Diamantkvarn på avstånd. Ett streck blev lite snett. Mitt fel. Vackert ändå. |
| 5:44 | sms | ali | Ali här. Jag såg Diamantkvarn på avstånd. Ett streck blev lite snett. Mitt fel. Vackert ändå. |
| 5:44 | sms-bubbla | ali | Ali här. Jag såg Diamantkvarn på avstånd. Ett streck blev lite snett. Mitt fel. Vackert ändå. |
| 5:44 | röst | ali | Ali här. Jag såg Diamantkvarn på avstånd. Ett streck blev lite snett. Mitt fel. Vackert ändå. · REAKTION |
| 5:45 | paket |  | tanke |
| 5:45 | tanke | du | Grus. Väldigt fint grus. |
| 5:45 | struken | du | En tand. Jag tänker inte fråga. |
| 5:45 | väntar | du | Grus. Väldigt fint grus. |
| 5:45 | skratt | du | vaskmiss |
| 5:47 | paket |  | tanke |
| 5:47 | tanke | du | Bara vatten. Jag är blöt nu. |
| 5:47 | struken | du | Grus. Väldigt fint grus. |
| 5:47 | väntar | du | Bara vatten. Jag är blöt nu. |
| 5:47 | skratt | du | vaskmiss |
| 5:49 | skratt | du | vaskmiss |
| 5:55 | klar | ali | Ali här. Jag såg Diamantkvarn på avstånd. Ett streck blev lite snett. Mitt fel. Vackert ändå. |
| 5:58 | skratt | du | falsk tuta |
| 5:58 | poolTom | du | 4 repliker använda |
| 6:03 | sak | du | Bara vatten. Jag är blöt nu. |
| 6:03 | notis | tanke | 💭 Bara vatten. Jag är blöt nu. |
| 6:03 | röst | du | Bara vatten. Jag är blöt nu. · REAKTION |
| 6:06 | klar | du | Bara vatten. Jag är blöt nu. |
| 6:15 | paket |  | toast → tanke |
| 6:15 | väntar | notis:Kvarnen gav en rulle filament nivå 4 – g | Kvarnen gav en rulle filament nivå 4 – guldkomposit! Den behövs för de finare recepten. |
| 6:15 | tanke | du | guldkomposit. Starkare än vanlig plast – Ali har recept som kräver den. Rolf hittar mer ju mer folk respekterar mig. |
| 6:15 | väntar | du | guldkomposit. Starkare än vanlig plast – Ali har recept som kräver den. Rolf hittar mer ju mer folk respekterar mig. |
| 6:15 | händelse | malKlart | id=m18-mal-rulle-guld del=Dag 18 – Diamantkvarnen och grunden nasta=m18-gjut-grunden-huset |
| 6:15 | bekräftelse | du | plats |
| 6:15 | väntar | du | tillbakablick hem |
| 6:15 | MÅL |  | Spara till grunden · 2 628 / 75 000 kr |
| 6:15 | sak | du | guldkomposit. Starkare än vanlig plast – Ali har recept som kräver den. Rolf hittar mer ju mer folk respekterar mig. |
| 6:15 | notis | tanke | 💭 guldkomposit. Starkare än vanlig plast – Ali har recept som kräver den. Rolf hittar mer ju mer folk respekterar mig. |
| 6:15 | röst | du | guldkomposit. Starkare än vanlig plast – Ali har recept som kräver den. Rolf hittar mer ju mer folk respekterar mig. · REAKTION |
| 6:17 | målruta |  | Spara till grunden · 2 628 / 75 000 kr |
| 6:19 | kvittens-bock |  | ✓ Mal en rulle guld |
| 6:20 | väntar | du | Guldet betalar grunden. Den gjuter jag nu. |
| 6:21 | tillbakablick | du | hem |
| 6:21 | väntar | bror | Pappa gick för att tjacka mjölk och kom hem med en motorsåg. "Den var på rea." Vi har inga träd. |
| 6:21 | väntar | notis:📔 Prestation: Röd tråd · +3 respekt | 📔 Prestation: Röd tråd · +3 respekt |
| 6:25 | klar | du | guldkomposit. Starkare än vanlig plast – Ali har recept som kräver den. Rolf hittar mer ju mer folk respekterar mig. |
| 6:25 | sak | du | Guldet betalar grunden. Den gjuter jag nu. |
| 6:25 | pil |  | Spara till grunden · 2 628 / 75 000 kr |
| 6:25 | notis | tanke | 💭 Guldet betalar grunden. Den gjuter jag nu. |
| 6:25 | röst | du | Guldet betalar grunden. Den gjuter jag nu. · MÅL |
| 6:30 | klar | du | Guldet betalar grunden. Den gjuter jag nu. |
| 6:32 | händelse | printStart | sak=n3_stol |
| 6:38 | sak | mamma | Jag har skickat en porslinshund från mormors dödsbo med Rolf. Den ligger i postlådan. |
| 6:38 | sms | mamma | Jag har skickat en porslinshund från mormors dödsbo med Rolf. Den ligger i postlådan. |
| 6:38 | sms-bubbla | mamma | Jag har skickat en porslinshund från mormors dödsbo med Rolf. Den ligger i postlådan. |
| 6:38 | röst | mamma | Jag har skickat en porslinshund från mormors dödsbo med Rolf. Den ligger i postlådan. · STORY |
| 6:39 | händelse | printKlar | sak=n3_stol n=17 |
| 6:39 | nej | du | 🗑️ Sophållaren: 7/60 skräp · väntar – tratten är full |
| 6:39 | toast | fickskylt | Fulla fickor |
| 6:39 | fullaFickor | du | n3_stol |
| 6:39 | händelse | tagitUrPrint | sak=n3_stol n=1 |
| 6:41 | händelse | printStart | sak=n3_stol |
| 6:45 | klar | mamma | Jag har skickat en porslinshund från mormors dödsbo med Rolf. Den ligger i postlådan. |
| 6:47 | struken | notis:Kvarnen gav en rulle filament nivå 4 – g | Kvarnen gav en rulle filament nivå 4 – guldkomposit! Den behövs för de finare recepten. |
| 6:47 | struken | notis:📔 Prestation: Röd tråd · +3 respekt | 📔 Prestation: Röd tråd · +3 respekt |
| 6:48 | händelse | printKlar | sak=n3_stol n=18 |
| 6:48 | händelse | tagitUrPrint | sak=n3_stol n=1 |
| 6:56 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 6:57 | händelse | salt | sak=n3_stol n=1 |
| 6:57 | aliSalt | ali | 12380 |
| 6:57 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 6:57 | händelse | salt | sak=n3_stol n=1 |
| 6:57 | aliSalt | ali | 11761 |
| 6:57 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 6:58 | händelse | salt | sak=rulle4 n=1 |
| 6:58 | aliSalt | ali | 240 |
| 6:58 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 7:03 | brott | RADBRYTNING | för lång rad (39): "Spara till grunden · 27 009 / 75 000 kr" |
| 7:23 | sak | rolf | Nämen. Ängen ä din. Bengt-Åke frågaed va du ska ha den till. Ja sa solpaneler. Han trodde ja sa "sol-paella". Han va glad ändå. /R *frågade​ |
| 7:23 | sms | rolf | Nämen. Ängen ä din. Bengt-Åke frågaed va du ska ha den till. Ja sa solpaneler. Han trodde ja sa "sol-paella". Han va glad ändå. /R *frågade​ |
| 7:23 | sms-bubbla | rolf | Nämen. Ängen ä din. Bengt-Åke frågaed va du ska ha den till. Ja sa solpaneler. Han trodde ja sa "sol-paella". Han va glad ändå. /R *frågade​ |
| 7:23 | röst | rolf | Nämen. Ängen ä din. Bengt-Åke frågaed va du ska ha den till. Ja sa solpaneler. Han trodde ja sa "sol-paella". Han va glad ändå. /R *frågade​ · STORY |
| 7:35 | klar | rolf | Nämen. Ängen ä din. Bengt-Åke frågaed va du ska ha den till. Ja sa solpaneler. Han trodde ja sa "sol-paella". Han va glad ändå. /R *frågade​ |
| 7:58 | poolTom | du | 4 repliker använda |
| 8:08 | sak | bror | Seriöst? … Nej. Mamma skulle aldrig sluta prata om det. Men tack. |
| 8:08 | sms | bror | Seriöst? … Nej. Mamma skulle aldrig sluta prata om det. Men tack. |
| 8:08 | sms-bubbla | bror | Seriöst? … Nej. Mamma skulle aldrig sluta prata om det. Men tack. |
| 8:08 | röst | bror | Seriöst? … Nej. Mamma skulle aldrig sluta prata om det. Men tack. · STORY |
| 8:16 | klar | bror | Seriöst? … Nej. Mamma skulle aldrig sluta prata om det. Men tack. |
| 8:45 | struken | rolf | Hörru.. Konditoriet på Storgatan har slutat mä mazariner. Ja har skrivit ett klagomål. På papper. Mä frimärke. /R​ |
| 8:53 | sak | mamma | Pappa säger att du har köpt mark? Hur? Vems? Har du skrivit på något? Skicka papperen till mig så läser jag. |
| 8:53 | sms | mamma | Pappa säger att du har köpt mark? Hur? Vems? Har du skrivit på något? Skicka papperen till mig så läser jag. |
| 8:53 | sms-bubbla | mamma | Pappa säger att du har köpt mark? Hur? Vems? Har du skrivit på något? Skicka papperen till mig så läser jag. |
| 8:53 | röst | mamma | Pappa säger att du har köpt mark? Hur? Vems? Har du skrivit på något? Skicka papperen till mig så läser jag. · STORY |
| 9:02 | klar | mamma | Pappa säger att du har köpt mark? Hur? Vems? Har du skrivit på något? Skicka papperen till mig så läser jag. |
| 9:23 | brott | RADBRYTNING | för lång rad (39): "Spara till grunden · 27 009 / 75 000 kr" |
| 9:38 | sak | rolf | Hörru.. Lapp i lådan. Int brådis. Men lite brådis. /R​ |
| 9:38 | sms | rolf | Hörru.. Lapp i lådan. Int brådis. Men lite brådis. /R​ |
| 9:38 | sms-bubbla | rolf | Hörru.. Lapp i lådan. Int brådis. Men lite brådis. /R​ |
| 9:38 | röst | rolf | Hörru.. Lapp i lådan. Int brådis. Men lite brådis. /R​ · STORY |
| 9:45 | klar | rolf | Hörru.. Lapp i lådan. Int brådis. Men lite brådis. /R​ |
| 9:52 | skratt | du | falsk tuta |
| 9:58 | poolTom | du | 4 repliker använda |
| 10:09 | väntar | mamma | Jag hämtar dig på julafton kl 15. Var redo. |
| 10:23 | sak | rolf | Jo jo.. Såg att plåten låg på marken. Ja å Ali kömmer o hjälper dej mä ett riktigt hus. /R​ |
| 10:23 | sms | rolf | Jo jo.. Såg att plåten låg på marken. Ja å Ali kömmer o hjälper dej mä ett riktigt hus. /R​ |
| 10:23 | sms-bubbla | rolf | Jo jo.. Såg att plåten låg på marken. Ja å Ali kömmer o hjälper dej mä ett riktigt hus. /R​ |
| 10:23 | röst | rolf | Jo jo.. Såg att plåten låg på marken. Ja å Ali kömmer o hjälper dej mä ett riktigt hus. /R​ · STORY |
| 10:31 | klar | rolf | Jo jo.. Såg att plåten låg på marken. Ja å Ali kömmer o hjälper dej mä ett riktigt hus. /R​ |
| 10:59 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 11:11 | sak | mamma | Det säger du nu. |
| 11:11 | sms | mamma | Det säger du nu. |
| 11:11 | sms-bubbla | mamma | Det säger du nu. |
| 11:11 | röst | mamma | Det säger du nu. · STORY |
| 11:12 | skratt | du | kvarnen rapar |
| 11:14 | klar | mamma | Det säger du nu. |
| 11:16 | toast | guld | 🧵 |
| 11:18 | händelse | printStart | sak=n2_hjalm |
| 11:23 | händelse | printKlar | sak=n2_hjalm n=17 |
| 11:23 | händelse | tagitUrPrint | sak=n2_hjalm n=1 |
| 11:30 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 11:32 | händelse | salt | sak=n2_hjalm n=1 |
| 11:32 | aliSalt | ali | 1995 |
| 11:32 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 11:33 | brott | RADBRYTNING | för lång rad (39): "Spara till grunden · 27 009 / 75 000 kr" |
| 11:43 | brott | RADBRYTNING | för lång rad (39): "Spara till grunden · 29 004 / 75 000 kr" |
| 11:44 | skratt | du | kvarnen rapar |
| 11:45 | toast | guld | 🧵 |
| 11:47 | händelse | printStart | sak=n2_hjalm |
| 11:52 | händelse | printKlar | sak=n2_hjalm n=18 |
| 11:52 | händelse | tagitUrPrint | sak=n2_hjalm n=1 |
| 11:54 | toast | guld | 🧵 |
| 11:56 | sak | rolf | Jo jo.. Nån har slängt dunkar som glittrar. Guld, tror ja. Eller glitter. Dôm står vid grinden. MVH ROLF​ |
| 11:56 | sms | rolf | Jo jo.. Nån har slängt dunkar som glittrar. Guld, tror ja. Eller glitter. Dôm står vid grinden. MVH ROLF​ |
| 11:56 | sms-bubbla | rolf | Jo jo.. Nån har slängt dunkar som glittrar. Guld, tror ja. Eller glitter. Dôm står vid grinden. MVH ROLF​ |
| 11:56 | röst | rolf | Jo jo.. Nån har slängt dunkar som glittrar. Guld, tror ja. Eller glitter. Dôm står vid grinden. MVH ROLF​ · STORY |
| 11:58 | poolTom | du | 4 repliker använda |
| 11:58 | skratt | du | däcket rullar iväg |
| 11:59 | väntar | ali | Den köper jag. Ge hit. |
| 11:59 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 12:01 | händelse | salt | sak=n2_hjalm n=1 |
| 12:01 | aliSalt | ali | 1895 |
| 12:01 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 12:05 | brott | RADBRYTNING | för lång rad (39): "Spara till grunden · 30 899 / 75 000 kr" |
| 12:05 | väntar | värld:TUUT TUUT! | TUUT TUUT! |
| 12:06 | klar | rolf | Jo jo.. Nån har slängt dunkar som glittrar. Guld, tror ja. Eller glitter. Dôm står vid grinden. MVH ROLF​ |
| 12:09 | händelse | printStart | sak=n2_hjalm |
| 12:14 | händelse | printKlar | sak=n2_hjalm n=19 |
| 12:14 | sak | ali | Den köper jag. Ge hit. |
| 12:14 | röst | ali | Den köper jag. Ge hit. · REAKTION |
| 12:14 | upprepning | ali | Den köper jag. Ge hit. |
| 12:14 | händelse | tagitUrPrint | sak=n2_hjalm n=1 |
| 12:16 | händelse | printStart | sak=n2_hjalm |
| 12:16 | klar | ali | Den köper jag. Ge hit. |
| 12:21 | struken | bror | Pappa gick för att tjacka mjölk och kom hem med en motorsåg. "Den var på rea." Vi har inga träd. |
| 12:21 | händelse | printKlar | sak=n2_hjalm n=20 |
| 12:21 | händelse | tagitUrPrint | sak=n2_hjalm n=1 |
| 12:23 | händelse | printStart | sak=n2_hjalm |
| 12:24 | sak | värld:TUUT TUUT! | TUUT TUUT! |
| 12:24 | bubbla |  | TUUT TUUT! |
| 12:27 | klar | värld:TUUT TUUT! | TUUT TUUT! |
| 12:28 | händelse | printKlar | sak=n2_hjalm n=21 |
| 12:28 | händelse | tagitUrPrint | sak=n2_hjalm n=1 |
| 12:35 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 12:36 | händelse | salt | sak=n2_hjalm n=1 |
| 12:36 | aliSalt | ali | 1800 |
| 12:36 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 12:36 | händelse | salt | sak=n2_hjalm n=1 |
| 12:36 | aliSalt | ali | 1710 |
| 12:36 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 12:37 | händelse | salt | sak=n2_hjalm n=1 |
| 12:37 | aliSalt | ali | 1625 |
| 12:37 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 12:41 | brott | RADBRYTNING | för lång rad (39): "Spara till grunden · 36 034 / 75 000 kr" |
| 12:49 | skratt | du | kvarnen rapar |
| 12:53 | toast | guld | 🧵 |
| 12:56 | händelse | printStart | sak=n2_hjalm |
| 13:00 | händelse | printKlar | sak=n2_hjalm n=22 |
| 13:01 | händelse | tagitUrPrint | sak=n2_hjalm n=1 |
| 13:02 | toast | guld | 🧵 |
| 13:08 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 13:09 | händelse | salt | sak=n2_hjalm n=1 |
| 13:09 | aliSalt | ali | 1544 |
| 13:09 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 13:18 | händelse | printStart | sak=n2_hjalm |
| 13:19 | brott | RADBRYTNING | för lång rad (39): "Spara till grunden · 37 578 / 75 000 kr" |
| 13:22 | händelse | printKlar | sak=n2_hjalm n=23 |
| 13:23 | händelse | tagitUrPrint | sak=n2_hjalm n=1 |
| 13:25 | händelse | printStart | sak=n2_hjalm |
| 13:29 | händelse | printKlar | sak=n2_hjalm n=24 |
| 13:30 | händelse | tagitUrPrint | sak=n2_hjalm n=1 |
| 13:36 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 13:38 | händelse | salt | sak=n2_hjalm n=1 |
| 13:38 | aliSalt | ali | 1467 |
| 13:38 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 13:38 | händelse | salt | sak=n2_hjalm n=1 |
| 13:38 | aliSalt | ali | 1397 |
| 13:38 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 13:38 | skratt | du | falsk tuta |
| 13:45 | struken | mamma | Jag hämtar dig på julafton kl 15. Var redo. |
| 13:47 | väntar | värld:TUUT! Tjena! | TUUT! Tjena! |
| 13:47 | sak | värld:TUUT! Tjena! | TUUT! Tjena! |
| 13:47 | bubbla |  | TUUT! Tjena! |
| 13:50 | klar | värld:TUUT! Tjena! | TUUT! Tjena! |
| 13:50 | skratt | du | kvarnen rapar |
| 13:53 | toast | guld | 🧵 |
| 13:57 | händelse | printStart | sak=n2_hjalm |
| 13:58 | poolTom | du | 4 repliker använda |
| 13:59 | brott | RADBRYTNING | för lång rad (39): "Spara till grunden · 40 442 / 75 000 kr" |
| 14:01 | väntar | bror | Berättade för polarna att min lillebrorsa bygger sitt eget hus. Dom tror jag ljuger. Fortsätt. |
| 14:01 | händelse | printKlar | sak=n2_hjalm n=25 |
| 14:02 | händelse | tagitUrPrint | sak=n2_hjalm n=1 |
| 14:02 | toast | guld | 🧵 |
| 14:08 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 14:10 | händelse | salt | sak=n2_hjalm n=1 |
| 14:10 | aliSalt | ali | 1397 |
| 14:10 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 14:18 | händelse | printStart | sak=n2_hjalm |
| 14:23 | struken | bror | Berättade för polarna att min lillebrorsa bygger sitt eget hus. Dom tror jag ljuger. Fortsätt. |
| 14:23 | händelse | printKlar | sak=n2_hjalm n=26 |
| 14:23 | händelse | tagitUrPrint | sak=n2_hjalm n=1 |
| 14:25 | brott | RADBRYTNING | för lång rad (39): "Spara till grunden · 41 839 / 75 000 kr" |
| 14:25 | händelse | printStart | sak=n2_hjalm |
| 14:30 | händelse | printKlar | sak=n2_hjalm n=27 |
| 14:30 | händelse | tagitUrPrint | sak=n2_hjalm n=1 |
| 14:37 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 14:38 | händelse | salt | sak=n2_hjalm n=1 |
| 14:38 | aliSalt | ali | 1397 |
| 14:38 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 14:39 | händelse | salt | sak=n2_hjalm n=1 |
| 14:39 | aliSalt | ali | 1397 |
| 14:39 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 14:47 | brott | RADBRYTNING | för lång rad (39): "Spara till grunden · 44 633 / 75 000 kr" |
| 14:52 | skratt | du | kvarnen rapar |
| 14:53 | toast | guld | 🧵 |
| 14:55 | händelse | printStart | sak=n2_hjalm |
| 15:00 | händelse | printKlar | sak=n2_hjalm n=28 |
| 15:00 | händelse | tagitUrPrint | sak=n2_hjalm n=1 |
| 15:02 | toast | guld | 🧵 |
| 15:07 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 15:09 | händelse | salt | sak=n2_hjalm n=1 |
| 15:09 | aliSalt | ali | 1397 |
| 15:09 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 15:17 | händelse | printStart | sak=n2_hjalm |
| 15:21 | händelse | printKlar | sak=n2_hjalm n=29 |
| 15:22 | händelse | tagitUrPrint | sak=n2_hjalm n=1 |
| 15:24 | händelse | printStart | sak=n2_hjalm |
| 15:27 | brott | RADBRYTNING | för lång rad (39): "Spara till grunden · 46 030 / 75 000 kr" |
| 15:28 | händelse | printKlar | sak=n2_hjalm n=30 |
| 15:29 | händelse | tagitUrPrint | sak=n2_hjalm n=1 |
| 15:31 | händelse | printStart | sak=n2_hjalm |
| 15:31 | skratt | du | Kajsa i skrivaren |
| 15:35 | händelse | printKlar | sak=n2_hjalm n=31 |
| 15:36 | händelse | tagitUrPrint | sak=n2_hjalm n=1 |
| 15:43 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 15:44 | händelse | salt | sak=n2_hjalm n=1 |
| 15:44 | aliSalt | ali | 1397 |
| 15:44 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 15:44 | händelse | salt | sak=n2_hjalm n=1 |
| 15:44 | aliSalt | ali | 1397 |
| 15:44 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 15:44 | händelse | salt | sak=n2_hjalm n=1 |
| 15:44 | aliSalt | ali | 1397 |
| 15:44 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 15:45 | väntar | ali | AI:n säger hej. Jag säger hej. Det räcker. |
| 15:45 | sak | ali | AI:n säger hej. Jag säger hej. Det räcker. |
| 15:45 | röst | ali | AI:n säger hej. Jag säger hej. Det räcker. · SMÅPRAT |
| 15:46 | bubbla |  | AI:n säger hej. Jag säger hej. Det räcker. |
| 15:50 | klar | ali | AI:n säger hej. Jag säger hej. Det räcker. |
| 15:58 | skratt | du | kvarnen rapar |
| 15:58 | poolTom | du | 4 repliker använda |
| 16:00 | skratt | du | falsk tuta |
| 16:00 | väntar | värld:TUUT TUUT! | TUUT TUUT! |
| 16:00 | sak | värld:TUUT TUUT! | TUUT TUUT! |
| 16:00 | bubbla |  | TUUT TUUT! |
| 16:02 | toast | guld | 🧵 |
| 16:03 | klar | värld:TUUT TUUT! | TUUT TUUT! |
| 16:04 | händelse | printStart | sak=n2_hjalm |
| 16:07 | brott | RADBRYTNING | för lång rad (39): "Spara till grunden · 50 221 / 75 000 kr" |
| 16:08 | händelse | printKlar | sak=n2_hjalm n=32 |
| 16:09 | händelse | tagitUrPrint | sak=n2_hjalm n=1 |
| 16:16 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 16:17 | händelse | salt | sak=n2_hjalm n=1 |
| 16:17 | aliSalt | ali | 1397 |
| 16:17 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 16:27 | väntar | värld:Mjau. | Mjau. |
| 16:27 | sak | värld:Mjau. | Mjau. |
| 16:27 | bubbla |  | Mjau. |
| 16:29 | klar | värld:Mjau. | Mjau. |
| 16:31 | skratt | du | kvarnen rapar |
| 16:33 | toast | guld | 🧵 |
| 16:35 | händelse | printStart | sak=n2_hjalm |
| 16:39 | händelse | printKlar | sak=n2_hjalm n=33 |
| 16:40 | händelse | tagitUrPrint | sak=n2_hjalm n=1 |
| 16:41 | toast | guld | 🧵 |
| 16:47 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 16:48 | händelse | salt | sak=n2_hjalm n=1 |
| 16:48 | aliSalt | ali | 1397 |
| 16:48 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 16:53 | brott | RADBRYTNING | för lång rad (39): "Spara till grunden · 53 015 / 75 000 kr" |
| 16:57 | händelse | printStart | sak=n2_hjalm |
| 17:01 | händelse | printKlar | sak=n2_hjalm n=34 |
| 17:02 | händelse | tagitUrPrint | sak=n2_hjalm n=1 |
| 17:04 | händelse | printStart | sak=n2_hjalm |
| 17:08 | händelse | printKlar | sak=n2_hjalm n=35 |
| 17:09 | händelse | tagitUrPrint | sak=n2_hjalm n=1 |
| 17:11 | händelse | printStart | sak=n2_hjalm |
| 17:15 | händelse | printKlar | sak=n2_hjalm n=36 |
| 17:16 | händelse | tagitUrPrint | sak=n2_hjalm n=1 |
| 17:22 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 17:24 | händelse | salt | sak=n2_hjalm n=1 |
| 17:24 | aliSalt | ali | 1397 |
| 17:24 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 17:24 | händelse | salt | sak=n2_hjalm n=1 |
| 17:24 | aliSalt | ali | 1397 |
| 17:24 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 17:24 | händelse | salt | sak=n2_hjalm n=1 |
| 17:24 | aliSalt | ali | 1397 |
| 17:24 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 17:37 | skratt | du | kvarnen rapar |
| 17:39 | brott | RADBRYTNING | för lång rad (39): "Spara till grunden · 57 206 / 75 000 kr" |
| 17:41 | toast | guld | 🧵 |
| 17:42 | väntar | värld:TUUT! Tjena! | TUUT! Tjena! |
| 17:42 | sak | värld:TUUT! Tjena! | TUUT! Tjena! |
| 17:42 | bubbla |  | TUUT! Tjena! |
| 17:43 | skratt | du | falsk tuta |
| 17:43 | händelse | printStart | sak=n2_hjalm |
| 17:45 | klar | värld:TUUT! Tjena! | TUUT! Tjena! |
| 17:48 | händelse | printKlar | sak=n2_hjalm n=37 |
| 17:48 | händelse | tagitUrPrint | sak=n2_hjalm n=1 |
| 17:50 | toast | guld | 🧵 |
| 17:55 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 17:57 | händelse | salt | sak=n2_hjalm n=1 |
| 17:57 | aliSalt | ali | 1397 |
| 17:57 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 17:58 | poolTom | du | 4 repliker använda |
| 18:05 | händelse | printStart | sak=n2_hjalm |
| 18:05 | skratt | du | Kajsa i skrivaren |
| 18:10 | händelse | printKlar | sak=n2_hjalm n=38 |
| 18:10 | händelse | tagitUrPrint | sak=n2_hjalm n=1 |
| 18:12 | händelse | printStart | sak=n2_hjalm |
| 18:17 | händelse | printKlar | sak=n2_hjalm n=39 |
| 18:17 | händelse | tagitUrPrint | sak=n2_hjalm n=1 |
| 18:24 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 18:25 | händelse | salt | sak=n2_hjalm n=1 |
| 18:25 | aliSalt | ali | 1397 |
| 18:25 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 18:26 | händelse | salt | sak=n2_hjalm n=1 |
| 18:26 | aliSalt | ali | 1397 |
| 18:26 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 18:29 | brott | RADBRYTNING | för lång rad (39): "Spara till grunden · 61 397 / 75 000 kr" |
| 18:37 | väntar | värld:Mjau. | Mjau. |
| 18:37 | sak | värld:Mjau. | Mjau. |
| 18:37 | bubbla |  | Mjau. |
| 18:39 | klar | värld:Mjau. | Mjau. |
| 18:40 | skratt | du | kvarnen rapar |
| 18:43 | toast | guld | 🧵 |
| 18:47 | händelse | printStart | sak=n2_hjalm |
| 18:51 | händelse | printKlar | sak=n2_hjalm n=40 |
| 18:52 | händelse | tagitUrPrint | sak=n2_hjalm n=1 |
| 18:59 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 19:00 | händelse | salt | sak=n2_hjalm n=1 |
| 19:00 | aliSalt | ali | 1397 |
| 19:00 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 19:07 | brott | RADBRYTNING | för lång rad (39): "Spara till grunden · 62 794 / 75 000 kr" |
| 19:09 | händelse | printStart | sak=n2_hjalm |
| 19:13 | händelse | printKlar | sak=n2_hjalm n=41 |
| 19:14 | händelse | tagitUrPrint | sak=n2_hjalm n=1 |
| 19:20 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 19:22 | händelse | salt | sak=n2_hjalm n=1 |
| 19:22 | aliSalt | ali | 1397 |
| 19:22 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 19:36 | skratt | du | kvarnen rapar |
| 19:40 | toast | guld | 🧵 |
| 19:42 | händelse | printStart | sak=n2_hjalm |
| 19:47 | händelse | printKlar | sak=n2_hjalm n=42 |
| 19:47 | händelse | tagitUrPrint | sak=n2_hjalm n=1 |
| 19:48 | skratt | du | däcket rullar iväg |
| 19:49 | toast | guld | 🧵 |
| 19:53 | brott | RADBRYTNING | för lång rad (39): "Spara till grunden · 64 191 / 75 000 kr" |
| 19:54 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 19:56 | händelse | salt | sak=n2_hjalm n=1 |
| 19:56 | aliSalt | ali | 1397 |
| 19:56 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 19:58 | poolTom | du | 4 repliker använda |
| 20:04 | händelse | printStart | sak=n2_hjalm |
| 20:07 | brott | RADBRYTNING | för lång rad (39): "Spara till grunden · 65 588 / 75 000 kr" |
| 20:09 | händelse | printKlar | sak=n2_hjalm n=43 |
| 20:09 | händelse | tagitUrPrint | sak=n2_hjalm n=1 |
| 20:11 | händelse | printStart | sak=n2_hjalm |
| 20:16 | händelse | printKlar | sak=n2_hjalm n=44 |
| 20:16 | händelse | tagitUrPrint | sak=n2_hjalm n=1 |
| 20:23 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 20:24 | händelse | salt | sak=n2_hjalm n=1 |
| 20:24 | aliSalt | ali | 1397 |
| 20:24 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 20:24 | händelse | salt | sak=n2_hjalm n=1 |
| 20:24 | aliSalt | ali | 1397 |
| 20:24 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 20:34 | väntar | värld:Mjau. | Mjau. |
| 20:34 | sak | värld:Mjau. | Mjau. |
| 20:34 | bubbla |  | Mjau. |
| 20:36 | klar | värld:Mjau. | Mjau. |
| 20:37 | brott | RADBRYTNING | för lång rad (39): "Spara till grunden · 68 382 / 75 000 kr" |
| 20:39 | skratt | du | kvarnen rapar |
| 20:42 | toast | guld | 🧵 |
| 20:45 | händelse | printStart | sak=n2_hjalm |
| 20:50 | händelse | printKlar | sak=n2_hjalm n=45 |
| 20:50 | händelse | tagitUrPrint | sak=n2_hjalm n=1 |
| 20:50 | toast | guld | 🧵 |
| 20:57 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 20:59 | händelse | salt | sak=n2_hjalm n=1 |
| 20:59 | aliSalt | ali | 1397 |
| 20:59 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 21:07 | händelse | printStart | sak=n2_hjalm |
| 21:12 | händelse | printKlar | sak=n2_hjalm n=46 |
| 21:12 | händelse | tagitUrPrint | sak=n2_hjalm n=1 |
| 21:14 | händelse | printStart | sak=n2_hjalm |
| 21:19 | händelse | printKlar | sak=n2_hjalm n=47 |
| 21:19 | händelse | tagitUrPrint | sak=n2_hjalm n=1 |
| 21:23 | brott | RADBRYTNING | för lång rad (39): "Spara till grunden · 69 779 / 75 000 kr" |
| 21:26 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 21:27 | händelse | salt | sak=n2_hjalm n=1 |
| 21:27 | aliSalt | ali | 1397 |
| 21:27 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 21:28 | händelse | salt | sak=n2_hjalm n=1 |
| 21:28 | aliSalt | ali | 1397 |
| 21:28 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 21:33 | brott | RADBRYTNING | för lång rad (39): "Spara till grunden · 72 573 / 75 000 kr" |
| 21:36 | väntar | värld:Mjau. | Mjau. |
| 21:36 | sak | värld:Mjau. | Mjau. |
| 21:36 | bubbla |  | Mjau. |
| 21:37 | skratt | du | falsk tuta |
| 21:38 | klar | värld:Mjau. | Mjau. |
| 21:43 | skratt | du | kvarnen rapar |
| 21:44 | toast | guld | 🧵 |
| 21:46 | händelse | printStart | sak=n2_hjalm |
| 21:50 | händelse | printKlar | sak=n2_hjalm n=48 |
| 21:51 | händelse | tagitUrPrint | sak=n2_hjalm n=1 |
| 21:53 | toast | guld | 🧵 |
| 21:58 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 21:58 | poolTom | du | 4 repliker använda |
| 21:59 | händelse | salt | sak=n2_hjalm n=1 |
| 21:59 | aliSalt | ali | 1397 |
| 21:59 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 22:08 | händelse | printStart | sak=n2_hjalm |
| 22:12 | händelse | printKlar | sak=n2_hjalm n=49 |
| 22:13 | händelse | tagitUrPrint | sak=n2_hjalm n=1 |
| 22:15 | brott | RADBRYTNING | för lång rad (39): "Spara till grunden · 73 970 / 75 000 kr" |
| 22:19 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 22:21 | händelse | salt | sak=n2_hjalm n=1 |
| 22:21 | aliSalt | ali | 1397 |
| 22:21 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 22:24 | tanke | du | Grunden till huset på ängen är min! Gärdesgården har flyttats – där får jag ställa saker nu. |
| 22:24 | väntar | du | Grunden till huset på ängen är min! Gärdesgården har flyttats – där får jag ställa saker nu. |
| 22:24 | paket |  | sms |
| 22:24 | väntar | rolf | Nämen.. Grunden ä gjuten. Ja sto å tittade i en timme. Betong ä vackert när den torkar. Säg int dä till nån. MVH ROLF​ |
| 22:24 | sak | du | Grunden till huset på ängen är min! Gärdesgården har flyttats – där får jag ställa saker nu. |
| 22:24 | notis | tanke | 💭 Grunden till huset på ängen är min! Gärdesgården har flyttats – där får jag ställa saker nu. |
| 22:24 | röst | du | Grunden till huset på ängen är min! Gärdesgården har flyttats – där får jag ställa saker nu. · REAKTION |
| 22:24 | händelse | malKlart | id=m18-gjut-grunden-huset del=Dag 18 – Diamantkvarnen och grunden nasta=sov18 |
| 22:24 | paket |  | lapp |
| 22:24 | väntar | du | Allt säljs bara när jag är vaken. |
| 22:24 | bekräftelse | du | plats |
| 22:24 | MÅL |  | Sov när du vill |
| 22:26 | målruta |  | Sov när du vill |
| 22:26 | pil |  | Sov när du vill |
| 22:27 | nick |  | nick:115 |
| 22:28 | kvittens-bock |  | ✓ Gjut grunden till huset |
| 22:31 | väntar | notis:🌇 Klockan är 21. Ali slår igen luckan.  | 🌇 Klockan är 21. Ali slår igen luckan. Dagens jobb är klart – gå in i skjulet och sov i sängen. |
| 22:31 | klar | du | Grunden till huset på ängen är min! Gärdesgården har flyttats – där får jag ställa saker nu. |
| 22:31 | sak | du | (nytt mål i rutan) |
| 22:31 | klar | du | (nytt mål i rutan) |
| 22:37 | autosparning | du | natt 21 december |
| 22:39 | webbBetalt | du | 3839 |
| 22:39 | nattkort | du | 🌙 3 dagar kvar. God natt. zzz… Allt säljs bara när jag är vaken. DAGENS PRINTAR Cykelhjälm i PETG × 35 Kolfiberstol × 7 Totalt 42 printar 💰 Tjänat i dag +149 |

<details><summary>Botens handlingar dag 12</summary>

- 0:00 — dag 12 börjar — (4896 kr)
- 0:08 popup: "FORTSÄTT" (4896 kr)
- 0:25 gå till Rolfs postlåda (31 m) (4896 kr)
- 0:33 panel: "En lapp från Rolf
Lite olaglig" (4896 kr)
- 0:35 gå till skrivaren (10 m) (4896 kr)
- 0:37 printar Cykelhjälm i PETG (4896 kr)
- 0:42 tar ut 1 st ur skrivaren (4896 kr)
- 0:44 printar Cykelhjälm i PETG (4896 kr)
- 0:49 tar ut 1 st ur skrivaren (4896 kr)
- 0:54 gå till datorn (23 m) (4896 kr)
- 1:03 panel: "Webbshopen · Soptippsvägen 1
B" (4896 kr)
- 1:12 panel: "Webbshopen · Soptippsvägen 1
B" (4896 kr)
- 1:18 gå till Rolfs postlåda (paket) (29 m) (4896 kr)
- 1:19 webbshop: 1 paket i postlådan (4896 kr)
- 1:19 tjänar pengar till diamantkvarn: 4896/75000 kr → printar kolfiberstol (16000 kr) (4896 kr)
- 1:22 gå till skrivaren (15 m) (4896 kr)
- 1:24 printar Kolfiberstol (4896 kr)
- 1:31 tar ut 1 st ur skrivaren (4896 kr)
- 1:33 printar Kolfiberstol (4896 kr)
- 1:40 tar ut 1 st ur skrivaren (4896 kr)
- 1:42 printar Kolfiberstol (4896 kr)
- 1:49 tar ut 1 st ur skrivaren (4896 kr)
- 1:56 gå till Ali (34 m) (4896 kr)
- 1:56 öppnar Alis butik – sälja (4896 kr)
- 1:59 säljer hos Ali: +45982 kr (50878 kr)
- 1:59 tjänar pengar till diamantkvarn: 50878/75000 kr → printar kolfiberstol (13718 kr) (50878 kr)
- 2:06 gå till skrivaren (33 m) (50878 kr)
- 2:08 printar Kolfiberstol (50878 kr)
- 2:15 tar ut 1 st ur skrivaren (50878 kr)
- 2:22 gå till Ali (33 m) (50878 kr)
- 2:22 öppnar Alis butik – sälja (50878 kr)
- 2:24 säljer hos Ali: +13718 kr (64596 kr)
- 2:24 tjänar pengar till diamantkvarn: 64596/75000 kr → printar kolfiberstol (13032 kr) (64596 kr)
- 2:24 väntar på kolfiber från bandet (64596 kr)
- 2:32 väntar på kolfiber från bandet (64596 kr)
- 2:40 väntar på kolfiber från bandet (64596 kr)
- 2:48 väntar på kolfiber från bandet (64596 kr)
- 2:56 väntar på kolfiber från bandet (64596 kr)
- 3:04 väntar på kolfiber från bandet (64596 kr)
- 3:12 väntar på kolfiber från bandet (64596 kr)
- 3:20 väntar på kolfiber från bandet (64596 kr)
- 3:28 väntar på kolfiber från bandet (64596 kr)
- 3:36 väntar på kolfiber från bandet (64596 kr)
- 3:44 väntar på kolfiber från bandet (64596 kr)
- 3:52 väntar på kolfiber från bandet (64596 kr)
- 4:00 väntar på kolfiber från bandet (64596 kr)
- 4:08 väntar på kolfiber från bandet (64596 kr)
- 4:23 gå till skrivaren (33 m) (64596 kr)
- 4:25 printar Kolfiberstol (64596 kr)
- 4:32 tar ut 1 st ur skrivaren (64596 kr)
- 4:39 gå till Ali (33 m) (64596 kr)
- 4:39 öppnar Alis butik – sälja (64596 kr)
- 4:41 säljer hos Ali: +13032 kr (77628 kr)
- 4:42 öppnar Alis butik – köpa diamantkvarn (77628 kr)
- 4:44 köper diamantkniv för 75000 kr (2628 kr)
- 4:45 startmenyn syns – fortsätter spelet (2628 kr)
- 4:58 gå till kvarnen (12 m) (2628 kr)
- 5:05 gå till skrivaren (7 m) (2628 kr)
- 5:06 printar Diamantkvarn (3 delar) (2628 kr)
- 5:22 plockar 6 skräp på tippen (bär max 16) (2628 kr)
- 5:25 gå till kvarnen (15 m) (2628 kr)
- 5:27 gå till skrivaren (7 m) (2628 kr)
- 5:28 tar ut 1 st ur skrivaren (2628 kr)
- 5:29 gå till kvarnen (4 m) (2628 kr)
- 5:43 gå till ådern (43 m) (2628 kr)
- 5:51 vaskar guld i ådern (2628 kr)
- 6:07 gå till Rolfs postlåda (48 m) (2628 kr)
- 6:13 panel: "Rolfs postlåda
Det här låg i l" (2628 kr)
- 6:15 gå till kvarnen (guld) (3 m) (2628 kr)
- 6:28 tjänar pengar till grunden: 2628/75000 kr → printar kolfiberstol (12380 kr) (2628 kr)
- 6:30 gå till skrivaren (11 m) (2628 kr)
- 6:32 printar Kolfiberstol (2628 kr)
- 6:39 tar ut 1 st ur skrivaren (2628 kr)
- 6:39 fulla fickor – lägger fynd4 i kistan (2628 kr)
- 6:41 printar Kolfiberstol (2628 kr)
- 6:49 tar ut 1 st ur skrivaren (2628 kr)
- 6:56 gå till Ali (34 m) (2628 kr)
- 6:56 öppnar Alis butik – sälja (2628 kr)
- 6:58 säljer hos Ali: +24381 kr (27009 kr)
- 6:59 tjänar pengar till grunden: 27009/75000 kr → printar kolfiberstol (11200 kr) (27009 kr)
- 6:59 väntar på kolfiber från bandet (27009 kr)
- 7:07 väntar på kolfiber från bandet (27009 kr)
- 7:15 väntar på kolfiber från bandet (27009 kr)
- 7:23 väntar på kolfiber från bandet (27009 kr)
- 7:31 väntar på kolfiber från bandet (27009 kr)
- 7:39 väntar på kolfiber från bandet (27009 kr)
- 7:47 väntar på kolfiber från bandet (27009 kr)
- 7:55 väntar på kolfiber från bandet (27009 kr)
- 8:03 väntar på kolfiber från bandet (27009 kr)
- 8:11 väntar på kolfiber från bandet (27009 kr)
- 8:19 väntar på kolfiber från bandet (27009 kr)
- 8:27 väntar på kolfiber från bandet (27009 kr)
- 8:35 väntar på kolfiber från bandet (27009 kr)
- 8:43 väntar på kolfiber från bandet (27009 kr)
- 8:51 väntar på kolfiber från bandet (27009 kr)
- 8:59 väntar på kolfiber från bandet (27009 kr)
- 9:07 väntar på kolfiber från bandet (27009 kr)
- 9:15 väntar på kolfiber från bandet (27009 kr)
- 9:23 väntar på kolfiber från bandet (27009 kr)
- 9:31 väntar på kolfiber från bandet (27009 kr)
- 9:39 väntar på kolfiber från bandet (27009 kr)
- 9:47 väntar på kolfiber från bandet (27009 kr)
- 9:55 väntar på kolfiber från bandet (27009 kr)
- 10:03 väntar på kolfiber från bandet (27009 kr)
- 10:11 väntar på kolfiber från bandet (27009 kr)
- 10:19 väntar på kolfiber från bandet (27009 kr)
- 10:27 väntar på kolfiber från bandet (27009 kr)
- 10:35 väntar på kolfiber från bandet (27009 kr)
- 10:43 väntar på kolfiber från bandet (27009 kr)
- 10:51 väntar på kolfiber från bandet (27009 kr)
- 10:59 väntar på kolfiber från bandet (27009 kr)
- 10:59 kolfiberstol gick inte att printa – tar nästa (27009 kr)
- 10:59 öppnar Alis butik – sälja (27009 kr)
- 11:01 tjänar pengar till grunden: 27009/75000 kr → printar cykelhjälm i petg (1995 kr) (27009 kr)
- 11:08 gå till en tunna (35 m) (27009 kr)
- 11:12 gå till PETG-kvarnen (13 m) (27009 kr)
- 11:12 tömmer det tunga i PETG-kvarnen (27009 kr)
- 11:17 gå till skrivaren (3 m) (27009 kr)
- 11:18 printar Cykelhjälm i PETG (27009 kr)
- 11:24 tar ut 1 st ur skrivaren (27009 kr)
- 11:30 gå till Ali (31 m) (27009 kr)
- 11:30 öppnar Alis butik – sälja (27009 kr)
- 11:32 säljer hos Ali: +1995 kr (29004 kr)
- 11:33 tjänar pengar till grunden: 29004/75000 kr → printar cykelhjälm i petg (1895 kr) (29004 kr)
- 11:40 gå till en tunna (37 m) (29004 kr)
- 11:44 gå till PETG-kvarnen (13 m) (29004 kr)
- 11:44 tömmer det tunga i PETG-kvarnen (29004 kr)
- 11:46 gå till skrivaren (3 m) (29004 kr)
- 11:47 printar Cykelhjälm i PETG (29004 kr)
- 11:53 tar ut 1 st ur skrivaren (29004 kr)
- 11:59 gå till Ali (31 m) (29004 kr)
- 11:59 öppnar Alis butik – sälja (29004 kr)
- 12:01 säljer hos Ali: +1895 kr (30899 kr)
- 12:02 tjänar pengar till grunden: 30899/75000 kr → printar cykelhjälm i petg (1800 kr) (30899 kr)
- 12:08 gå till skrivaren (29 m) (30899 kr)
- 12:09 printar Cykelhjälm i PETG (30899 kr)
- 12:15 tar ut 1 st ur skrivaren (30899 kr)
- 12:16 printar Cykelhjälm i PETG (30899 kr)
- 12:22 tar ut 1 st ur skrivaren (30899 kr)
- 12:23 printar Cykelhjälm i PETG (30899 kr)
- 12:29 tar ut 1 st ur skrivaren (30899 kr)
- 12:35 gå till Ali (29 m) (30899 kr)
- 12:35 öppnar Alis butik – sälja (30899 kr)
- 12:37 säljer hos Ali: +5135 kr (36034 kr)
- 12:38 tjänar pengar till grunden: 36034/75000 kr → printar cykelhjälm i petg (1544 kr) (36034 kr)
- 12:45 gå till en tunna (37 m) (36034 kr)
- 12:49 gå till PETG-kvarnen (15 m) (36034 kr)
- 12:49 tömmer det tunga i PETG-kvarnen (36034 kr)
- 12:54 gå till skrivaren (3 m) (36034 kr)
- 12:56 printar Cykelhjälm i PETG (36034 kr)
- 13:01 tar ut 1 st ur skrivaren (36034 kr)
- 13:08 gå till Ali (31 m) (36034 kr)
- 13:08 öppnar Alis butik – sälja (36034 kr)
- 13:09 säljer hos Ali: +1544 kr (37578 kr)
- 13:10 tjänar pengar till grunden: 37578/75000 kr → printar cykelhjälm i petg (1467 kr) (37578 kr)
- 13:16 gå till skrivaren (29 m) (37578 kr)
- 13:18 printar Cykelhjälm i PETG (37578 kr)
- 13:23 tar ut 1 st ur skrivaren (37578 kr)
- 13:25 printar Cykelhjälm i PETG (37578 kr)
- 13:30 tar ut 1 st ur skrivaren (37578 kr)
- 13:36 gå till Ali (29 m) (37578 kr)
- 13:36 öppnar Alis butik – sälja (37578 kr)
- 13:38 säljer hos Ali: +2864 kr (40442 kr)
- 13:39 tjänar pengar till grunden: 40442/75000 kr → printar cykelhjälm i petg (1397 kr) (40442 kr)
- 13:46 gå till en tunna (38 m) (40442 kr)
- 13:50 gå till PETG-kvarnen (13 m) (40442 kr)
- 13:50 tömmer det tunga i PETG-kvarnen (40442 kr)
- 13:55 gå till skrivaren (3 m) (40442 kr)
- 13:57 printar Cykelhjälm i PETG (40442 kr)
- 14:02 tar ut 1 st ur skrivaren (40442 kr)
- 14:08 gå till Ali (31 m) (40442 kr)
- 14:08 öppnar Alis butik – sälja (40442 kr)
- 14:10 säljer hos Ali: +1397 kr (41839 kr)
- 14:11 tjänar pengar till grunden: 41839/75000 kr → printar cykelhjälm i petg (1397 kr) (41839 kr)
- 14:17 gå till skrivaren (29 m) (41839 kr)
- 14:18 printar Cykelhjälm i PETG (41839 kr)
- 14:24 tar ut 1 st ur skrivaren (41839 kr)
- 14:25 printar Cykelhjälm i PETG (41839 kr)
- 14:31 tar ut 1 st ur skrivaren (41839 kr)
- 14:37 gå till Ali (29 m) (41839 kr)
- 14:37 öppnar Alis butik – sälja (41839 kr)
- 14:39 säljer hos Ali: +2794 kr (44633 kr)
- 14:40 tjänar pengar till grunden: 44633/75000 kr → printar cykelhjälm i petg (1397 kr) (44633 kr)
- 14:48 gå till en tunna (41 m) (44633 kr)
- 14:52 gå till PETG-kvarnen (12 m) (44633 kr)
- 14:52 tömmer det tunga i PETG-kvarnen (44633 kr)
- 14:54 gå till skrivaren (4 m) (44633 kr)
- 14:55 printar Cykelhjälm i PETG (44633 kr)
- 15:01 tar ut 1 st ur skrivaren (44633 kr)
- 15:07 gå till Ali (31 m) (44633 kr)
- 15:07 öppnar Alis butik – sälja (44633 kr)
- 15:09 säljer hos Ali: +1397 kr (46030 kr)
- 15:10 tjänar pengar till grunden: 46030/75000 kr → printar cykelhjälm i petg (1397 kr) (46030 kr)
- 15:16 gå till skrivaren (29 m) (46030 kr)
- 15:17 printar Cykelhjälm i PETG (46030 kr)
- 15:23 tar ut 1 st ur skrivaren (46030 kr)
- 15:24 printar Cykelhjälm i PETG (46030 kr)
- 15:30 tar ut 1 st ur skrivaren (46030 kr)
- 15:31 printar Cykelhjälm i PETG (46030 kr)
- 15:37 tar ut 1 st ur skrivaren (46030 kr)
- 15:43 gå till Ali (29 m) (46030 kr)
- 15:43 öppnar Alis butik – sälja (46030 kr)
- 15:45 säljer hos Ali: +4191 kr (50221 kr)
- 15:45 tjänar pengar till grunden: 50221/75000 kr → printar cykelhjälm i petg (1397 kr) (50221 kr)
- 15:54 gå till en tunna (41 m) (50221 kr)
- 15:58 gå till PETG-kvarnen (13 m) (50221 kr)
- 15:58 tömmer det tunga i PETG-kvarnen (50221 kr)
- 16:02 gå till skrivaren (4 m) (50221 kr)
- 16:04 printar Cykelhjälm i PETG (50221 kr)
- 16:09 tar ut 1 st ur skrivaren (50221 kr)
- 16:16 gå till Ali (31 m) (50221 kr)
- 16:16 öppnar Alis butik – sälja (50221 kr)
- 16:18 säljer hos Ali: +1397 kr (51618 kr)
- 16:18 tjänar pengar till grunden: 51618/75000 kr → printar cykelhjälm i petg (1397 kr) (51618 kr)
- 16:27 gå till en tunna (42 m) (51618 kr)
- 16:31 gå till PETG-kvarnen (14 m) (51618 kr)
- 16:31 tömmer det tunga i PETG-kvarnen (51618 kr)
- 16:33 gå till skrivaren (4 m) (51618 kr)
- 16:35 printar Cykelhjälm i PETG (51618 kr)
- 16:40 tar ut 1 st ur skrivaren (51618 kr)
- 16:47 gå till Ali (31 m) (51618 kr)
- 16:47 öppnar Alis butik – sälja (51618 kr)
- 16:48 säljer hos Ali: +1397 kr (53015 kr)
- 16:49 tjänar pengar till grunden: 53015/75000 kr → printar cykelhjälm i petg (1397 kr) (53015 kr)
- 16:55 gå till skrivaren (29 m) (53015 kr)
- 16:57 printar Cykelhjälm i PETG (53015 kr)
- 17:02 tar ut 1 st ur skrivaren (53015 kr)
- 17:04 printar Cykelhjälm i PETG (53015 kr)
- 17:09 tar ut 1 st ur skrivaren (53015 kr)
- 17:11 printar Cykelhjälm i PETG (53015 kr)
- 17:16 tar ut 1 st ur skrivaren (53015 kr)
- 17:22 gå till Ali (29 m) (53015 kr)
- 17:22 öppnar Alis butik – sälja (53015 kr)
- 17:24 säljer hos Ali: +4191 kr (57206 kr)
- 17:25 tjänar pengar till grunden: 57206/75000 kr → printar cykelhjälm i petg (1397 kr) (57206 kr)
- 17:34 gå till en tunna (43 m) (57206 kr)
- 17:37 gå till PETG-kvarnen (11 m) (57206 kr)
- 17:37 tömmer det tunga i PETG-kvarnen (57206 kr)
- 17:42 gå till skrivaren (4 m) (57206 kr)
- 17:43 printar Cykelhjälm i PETG (57206 kr)
- 17:49 tar ut 1 st ur skrivaren (57206 kr)
- 17:55 gå till Ali (31 m) (57206 kr)
- 17:55 öppnar Alis butik – sälja (57206 kr)
- 17:57 säljer hos Ali: +1397 kr (58603 kr)
- 17:58 tjänar pengar till grunden: 58603/75000 kr → printar cykelhjälm i petg (1397 kr) (58603 kr)
- 18:04 gå till skrivaren (29 m) (58603 kr)
- 18:05 printar Cykelhjälm i PETG (58603 kr)
- 18:11 tar ut 1 st ur skrivaren (58603 kr)
- 18:12 printar Cykelhjälm i PETG (58603 kr)
- 18:18 tar ut 1 st ur skrivaren (58603 kr)
- 18:24 gå till Ali (29 m) (58603 kr)
- 18:24 öppnar Alis butik – sälja (58603 kr)
- 18:26 säljer hos Ali: +2794 kr (61397 kr)
- 18:27 tjänar pengar till grunden: 61397/75000 kr → printar cykelhjälm i petg (1397 kr) (61397 kr)
- 18:35 gå till en tunna (43 m) (61397 kr)
- 18:40 gå till PETG-kvarnen (18 m) (61397 kr)
- 18:40 tömmer det tunga i PETG-kvarnen (61397 kr)
- 18:45 gå till skrivaren (4 m) (61397 kr)
- 18:47 printar Cykelhjälm i PETG (61397 kr)
- 18:52 tar ut 1 st ur skrivaren (61397 kr)
- 18:59 gå till Ali (31 m) (61397 kr)
- 18:59 öppnar Alis butik – sälja (61397 kr)
- 19:00 säljer hos Ali: +1397 kr (62794 kr)
- 19:01 tjänar pengar till grunden: 62794/75000 kr → printar cykelhjälm i petg (1397 kr) (62794 kr)
- 19:07 gå till skrivaren (29 m) (62794 kr)
- 19:09 printar Cykelhjälm i PETG (62794 kr)
- 19:14 tar ut 1 st ur skrivaren (62794 kr)
- 19:20 gå till Ali (29 m) (62794 kr)
- 19:20 öppnar Alis butik – sälja (62794 kr)
- 19:22 säljer hos Ali: +1397 kr (64191 kr)
- 19:23 tjänar pengar till grunden: 64191/75000 kr → printar cykelhjälm i petg (1397 kr) (64191 kr)
- 19:31 gå till en tunna (44 m) (64191 kr)
- 19:36 gå till PETG-kvarnen (18 m) (64191 kr)
- 19:36 tömmer det tunga i PETG-kvarnen (64191 kr)
- 19:41 gå till skrivaren (4 m) (64191 kr)
- 19:42 printar Cykelhjälm i PETG (64191 kr)
- 19:48 tar ut 1 st ur skrivaren (64191 kr)
- 19:54 gå till Ali (31 m) (64191 kr)
- 19:54 öppnar Alis butik – sälja (64191 kr)
- 19:56 säljer hos Ali: +1397 kr (65588 kr)
- 19:57 tjänar pengar till grunden: 65588/75000 kr → printar cykelhjälm i petg (1397 kr) (65588 kr)
- 20:03 gå till skrivaren (29 m) (65588 kr)
- 20:04 printar Cykelhjälm i PETG (65588 kr)
- 20:10 tar ut 1 st ur skrivaren (65588 kr)
- 20:11 printar Cykelhjälm i PETG (65588 kr)
- 20:17 tar ut 1 st ur skrivaren (65588 kr)
- 20:23 gå till Ali (29 m) (65588 kr)
- 20:23 öppnar Alis butik – sälja (65588 kr)
- 20:25 säljer hos Ali: +2794 kr (68382 kr)
- 20:25 tjänar pengar till grunden: 68382/75000 kr → printar cykelhjälm i petg (1397 kr) (68382 kr)
- 20:35 gå till en tunna (44 m) (68382 kr)
- 20:39 gå till PETG-kvarnen (17 m) (68382 kr)
- 20:39 tömmer det tunga i PETG-kvarnen (68382 kr)
- 20:44 gå till skrivaren (4 m) (68382 kr)
- 20:45 printar Cykelhjälm i PETG (68382 kr)
- 20:51 tar ut 1 st ur skrivaren (68382 kr)
- 20:57 gå till Ali (31 m) (68382 kr)
- 20:57 öppnar Alis butik – sälja (68382 kr)
- 20:59 säljer hos Ali: +1397 kr (69779 kr)
- 21:00 tjänar pengar till grunden: 69779/75000 kr → printar cykelhjälm i petg (1397 kr) (69779 kr)
- 21:06 gå till skrivaren (29 m) (69779 kr)
- 21:07 printar Cykelhjälm i PETG (69779 kr)
- 21:13 tar ut 1 st ur skrivaren (69779 kr)
- 21:14 printar Cykelhjälm i PETG (69779 kr)
- 21:20 tar ut 1 st ur skrivaren (69779 kr)
- 21:26 gå till Ali (29 m) (69779 kr)
- 21:26 öppnar Alis butik – sälja (69779 kr)
- 21:28 säljer hos Ali: +2794 kr (72573 kr)
- 21:29 tjänar pengar till grunden: 72573/75000 kr → printar cykelhjälm i petg (1397 kr) (72573 kr)
- 21:38 gå till en tunna (45 m) (72573 kr)
- 21:43 gå till PETG-kvarnen (20 m) (72573 kr)
- 21:43 tömmer det tunga i PETG-kvarnen (72573 kr)
- 21:45 gå till skrivaren (4 m) (72573 kr)
- 21:46 printar Cykelhjälm i PETG (72573 kr)
- 21:52 tar ut 1 st ur skrivaren (72573 kr)
- 21:58 gå till Ali (31 m) (72573 kr)
- 21:58 öppnar Alis butik – sälja (72573 kr)
- 22:00 säljer hos Ali: +1397 kr (73970 kr)
- 22:00 tjänar pengar till grunden: 73970/75000 kr → printar cykelhjälm i petg (1397 kr) (73970 kr)
- 22:06 gå till skrivaren (29 m) (73970 kr)
- 22:08 printar Cykelhjälm i PETG (73970 kr)
- 22:13 tar ut 1 st ur skrivaren (73970 kr)
- 22:19 gå till Ali (29 m) (73970 kr)
- 22:19 öppnar Alis butik – sälja (73970 kr)
- 22:21 säljer hos Ali: +1397 kr (75367 kr)
- 22:24 gå till tavlan vid vägen (6 m) (75367 kr)
- 22:24 köper grunden till huset på ängen (75000 kr) (367 kr)
- 22:37 gå till sängen (14 m) (367 kr)

</details>

## Dag 13

| Tid | Källa | Vem | Text |
|---|---|---|---|
| 22:39 | vara | ali | n2_vas |
| 22:39 | tanke | du | Nu blir det riktigt kallt. Utan vedkamin och hela väggar fryser du. |
| 22:39 | väntar | du | Nu blir det riktigt kallt. Utan vedkamin och hela väggar fryser du. |
| 22:39 | händelse | malKlart | id=sov18 del=Dag 18 – Diamantkvarnen och grunden nasta=m19-bygg-huset-grunden |
| 22:39 | bekräftelse | du | plats |
| 22:39 | MÅL |  | Spara till huset · 4 206 / 29 000 kr |
| 0:00 | autosparning | du | morgon 22 december |
| 0:01 | händelse | dagenBorjar | dag=13 |
| 0:01 | meddelande | du | 2 dagar till jul. Mamma kommer på julafton. Då ska huset stå. |
| 0:01 | dagbokkort | du | Huset. · 2 dagar till jul. Mamma kommer på julafton. Då ska huset stå. |
| 0:01 | röst | du | 2 dagar till jul. Huset. Mamma kommer på julafton. Då ska huset stå. · STORY |
| 0:07 | väntar | notis:morgon | Webbshopen: 1 paket i natt · +3 839 kr · Ali vill ha idag: Designvas i röd PETG · +50 % |
| 0:08 | händelse | morgonkortStangt | dag=13 |
| 0:08 | sak | du | Nu blir det riktigt kallt. Utan vedkamin och hela väggar fryser du. |
| 0:08 | notis | tanke | 💭 Nu blir det riktigt kallt. Utan vedkamin och hela väggar fryser du. |
| 0:08 | röst | du | Nu blir det riktigt kallt. Utan vedkamin och hela väggar fryser du. · REAKTION |
| 0:08 | väntar | du | Ett riktigt hus. På riktigt. |
| 0:10 | målruta |  | Spara till huset · 4 206 / 29 000 kr |
| 0:13 | klar | du | Nu blir det riktigt kallt. Utan vedkamin och hela väggar fryser du. |
| 0:13 | struken | notis:🌇 Klockan är 21. Ali slår igen luckan.  | 🌇 Klockan är 21. Ali slår igen luckan. Dagens jobb är klart – gå in i skjulet och sov i sängen. |
| 0:14 | sak | du | Ett riktigt hus. På riktigt. |
| 0:14 | pil |  | Spara till huset · 4 206 / 29 000 kr |
| 0:14 | notis | tanke | 💭 Ett riktigt hus. På riktigt. |
| 0:14 | röst | du | Ett riktigt hus. På riktigt. · MÅL |
| 0:17 | klar | du | Ett riktigt hus. På riktigt. |
| 0:18 | sak | notis:morgon | Webbshopen: 1 paket i natt · +3 839 kr · Ali vill ha idag: Designvas i röd PETG · +50 % |
| 0:18 | notis |  | 1 paket i natt · +3 839 kr |
| 0:18 | notis |  | Designvas i röd PETG · +50 % |
| 0:23 | klar | notis:morgon | Webbshopen: 1 paket i natt · +3 839 kr · Ali vill ha idag: Designvas i röd PETG · +50 % |
| 0:24 | händelse | printStart | sak=n2_hjalm |
| 0:28 | händelse | printKlar | sak=n2_hjalm n=50 |
| 0:29 | händelse | tagitUrPrint | sak=n2_hjalm n=1 |
| 0:30 | paket |  | brev |
| 0:30 | väntar | gunbritt | Hej igen. Gun-Britt. Tyvärr kunde jag inte hitta något fel. Bygglovet är godkänt. Jag har stämplat det. Med stjärnor. Tyvärr hade jag bara guldstjärnor. /Gun-Britt |
| 0:30 | skratt | du | Gun-Britts stjärnor |
| 0:30 | sak | gunbritt | Hej igen. Gun-Britt. Tyvärr kunde jag inte hitta något fel. Bygglovet är godkänt. Jag har stämplat det. Med stjärnor. Tyvärr hade jag bara guldstjärnor. /Gun-Britt |
| 0:30 | lapp | Brev från byggnadsnämnden | Hej igen. Gun-Britt. Tyvärr kunde jag inte hitta något fel. Bygglovet är godkänt. Jag har stämplat det. Med stjärnor. Tyvärr hade jag bara guldstjärnor. /Gun-Britt |
| 0:30 | röst | gunbritt | Hej igen. Gun-Britt. Tyvärr kunde jag inte hitta något fel. Bygglovet är godkänt. Jag har stämplat det. Med stjärnor. Tyvärr hade jag bara guldstjärnor. /Gun-Britt · STORY |
| 0:31 | händelse | printStart | sak=n2_hjalm |
| 0:35 | händelse | printKlar | sak=n2_hjalm n=51 |
| 0:36 | händelse | tagitUrPrint | sak=n2_hjalm n=1 |
| 0:39 | händelse | printStart | sak=kruka |
| 0:41 | händelse | printKlar | sak=kruka n=33 |
| 0:41 | nej | du | Din säng – det är inte kväll än. Gör klart dagens jobb först |
| 0:41 | toast | fickskylt | Fulla fickor |
| 0:41 | fullaFickor | du | kruka |
| 0:41 | händelse | tagitUrPrint | sak=kruka n=1 |
| 0:43 | klar | gunbritt | Hej igen. Gun-Britt. Tyvärr kunde jag inte hitta något fel. Bygglovet är godkänt. Jag har stämplat det. Med stjärnor. Tyvärr hade jag bara guldstjärnor. /Gun-Britt |
| 0:54 | sak | du | Allt säljs bara när jag är vaken. |
| 0:54 | kvallsrad | du | Allt säljs bara när jag är vaken. |
| 0:54 | klar | du | Allt säljs bara när jag är vaken. |
| 0:55 | webb | du | packade 2 n2_hjalm |
| 1:03 | sak | rolf | Nämen.. Grunden ä gjuten. Ja sto å tittade i en timme. Betong ä vackert när den torkar. Säg int dä till nån. MVH ROLF​ |
| 1:03 | sms | rolf | Nämen.. Grunden ä gjuten. Ja sto å tittade i en timme. Betong ä vackert när den torkar. Säg int dä till nån. MVH ROLF​ |
| 1:03 | sms-bubbla | rolf | Nämen.. Grunden ä gjuten. Ja sto å tittade i en timme. Betong ä vackert när den torkar. Säg int dä till nån. MVH ROLF​ |
| 1:03 | röst | rolf | Nämen.. Grunden ä gjuten. Ja sto å tittade i en timme. Betong ä vackert när den torkar. Säg int dä till nån. MVH ROLF​ · STORY |
| 1:04 | webb | du | packade 1 kruka |
| 1:16 | väntar | värld:TUUT! Tjena! | TUUT! Tjena! |
| 1:17 | tanke | du | Jag fryser om tårna. |
| 1:17 | väntar | du | Jag fryser om tårna. |
| 1:18 | struken | info:bra | 📦 Paketet till Lasse på bussdepån ligger i postlådan – Rolf tar det till posten |
| 1:19 | struken | info:bra | 📦 Paketet till En pensionär i Kiruna ligger i postlådan – Rolf tar det till posten |
| 1:26 | klar | rolf | Nämen.. Grunden ä gjuten. Ja sto å tittade i en timme. Betong ä vackert när den torkar. Säg int dä till nån. MVH ROLF​ |
| 1:32 | händelse | printStart | sak=n3_stol |
| 1:34 | sak | värld:TUUT! Tjena! | TUUT! Tjena! |
| 1:34 | bubbla |  | TUUT! Tjena! |
| 1:37 | klar | värld:TUUT! Tjena! | TUUT! Tjena! |
| 1:39 | händelse | printKlar | sak=n3_stol n=19 |
| 1:39 | struken | du | Jag fryser om tårna. |
| 1:39 | händelse | tagitUrPrint | sak=n3_stol n=1 |
| 1:46 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 1:46 | poolTom | ali | 4 repliker använda |
| 1:48 | händelse | salt | sak=n3_stol n=1 |
| 1:48 | aliSalt | ali | 16000 |
| 1:48 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 1:57 | händelse | printStart | sak=n3_stol |
| 1:57 | skratt | du | Kajsa i skrivaren |
| 2:04 | händelse | printKlar | sak=n3_stol n=20 |
| 2:04 | händelse | tagitUrPrint | sak=n3_stol n=1 |
| 2:10 | väntar | ali | Ditt skjul syns från kassan. Det ser bättre ut nu. |
| 2:10 | sak | ali | Ditt skjul syns från kassan. Det ser bättre ut nu. |
| 2:10 | röst | ali | Ditt skjul syns från kassan. Det ser bättre ut nu. · SMÅPRAT |
| 2:11 | bubbla |  | Ditt skjul syns från kassan. Det ser bättre ut nu. |
| 2:11 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 2:12 | väntar | kjelle | Inget nytt längs vägen i dag. Bara måsar. Hälsningar till Gunnar. |
| 2:12 | radio | kjelle | Inget nytt längs vägen i dag. Bara måsar. Hälsningar till Gunnar. |
| 2:12 | skratt | du | Radio-Kjelle |
| 2:13 | händelse | salt | sak=n3_stol n=1 |
| 2:13 | aliSalt | ali | 15200 |
| 2:13 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 2:15 | klar | ali | Ditt skjul syns från kassan. Det ser bättre ut nu. |
| 2:19 | paket |  | sms |
| 2:19 | väntar | mamma | Pappa säger att du har byggt ett hus. Med trappa. Är det säkert? Har du räcke? Jag skickar en brandvarnare. Och sylt. |
| 2:19 | tanke | du | Huset står klart på ängen! Två rum och en trappa upp till sovloftet. |
| 2:19 | väntar | du | Huset står klart på ängen! Två rum och en trappa upp till sovloftet. |
| 2:19 | paket |  | sms |
| 2:19 | väntar | rolf | Nämen.. Du har byggt ett HUS. Mä trappa. Ja har aldrig gått i en trappa i ett hus som ja känner nån som äger. Ja kömmer på inflyttningsfest. Ja tar mä Kajsa. /R​ |
| 2:19 | sak | du | Huset står klart på ängen! Två rum och en trappa upp till sovloftet. |
| 2:19 | notis | tanke | 💭 Huset står klart på ängen! Två rum och en trappa upp till sovloftet. |
| 2:19 | röst | du | Huset står klart på ängen! Två rum och en trappa upp till sovloftet. · REAKTION |
| 2:19 | händelse | malKlart | id=m19-bygg-huset-grunden del=Dag 19 – Ett riktigt hus nasta=m19-vindkraft |
| 2:19 | bekräftelse | du | plats |
| 2:19 | väntar | du | Huset drar mer än solen ger. Ett vindkraftverk ska upp på backen. |
| 2:19 | MÅL |  | Spara till vindkraftverket · 6 406 / 9 950 kr |
| 2:22 | målruta |  | Spara till vindkraftverket · 6 406 / 9 950 kr |
| 2:22 | pil |  | Spara till vindkraftverket · 6 406 / 9 950 kr |
| 2:23 | kvittens-bock |  | ✓ Bygg huset på grunden |
| 2:25 | klar | du | Huset står klart på ängen! Två rum och en trappa upp till sovloftet. |
| 2:25 | sak | kjelle | Inget nytt längs vägen i dag. Bara måsar. Hälsningar till Gunnar. |
| 2:25 | notis |  | 📻 Radio Tippen: Inget nytt längs vägen i dag. Bara måsar. Hälsningar till Gunnar. |
| 2:25 | röst | kjelle | Inget nytt längs vägen i dag. Bara måsar. Hälsningar till Gunnar. · REAKTION |
| 2:30 | klar | kjelle | Inget nytt längs vägen i dag. Bara måsar. Hälsningar till Gunnar. |
| 2:32 | sak | du | Huset drar mer än solen ger. Ett vindkraftverk ska upp på backen. |
| 2:32 | notis | tanke | 💭 Huset drar mer än solen ger. Ett vindkraftverk ska upp på backen. |
| 2:32 | röst | du | Huset drar mer än solen ger. Ett vindkraftverk ska upp på backen. · MÅL |
| 2:38 | klar | du | Huset drar mer än solen ger. Ett vindkraftverk ska upp på backen. |
| 2:39 | strömdipp | du | vindkraft |
| 2:39 | paket |  | tanke |
| 2:39 | tanke | du | Det tar stopp. Strömmen räcker inte längre. |
| 2:39 | väntar | du | Det tar stopp. Strömmen räcker inte längre. |
| 2:41 | händelse | printStart | sak=n3_stol |
| 2:41 | toast | fel | Ingen ström – maskinerna drar mer än du får in. Fler solpaneler |
| 2:46 | sak | rolf | Nämen.. Du har byggt ett HUS. Mä trappa. Ja har aldrig gått i en trappa i ett hus som ja känner nån som äger. Ja kömmer på inflyttningsfest. Ja tar mä Kajsa. /R​ |
| 2:46 | sms | rolf | Nämen.. Du har byggt ett HUS. Mä trappa. Ja har aldrig gått i en trappa i ett hus som ja känner nån som äger. Ja kömmer på inflyttningsfest. Ja tar mä Kajsa. /R​ |
| 2:46 | sms-bubbla | rolf | Nämen.. Du har byggt ett HUS. Mä trappa. Ja har aldrig gått i en trappa i ett hus som ja känner nån som äger. Ja kömmer på inflyttningsfest. Ja tar mä Kajsa. /R​ |
| 2:46 | röst | rolf | Nämen.. Du har byggt ett HUS. Mä trappa. Ja har aldrig gått i en trappa i ett hus som ja känner nån som äger. Ja kömmer på inflyttningsfest. Ja tar mä Kajsa. /R​ · STORY |
| 2:49 | skratt | du | falsk tuta |
| 2:54 | upplåst | strom | vindkraft |
| 2:54 | brott | UPPLÅST | vindkraft (strom 15 av 15) |
| 2:54 | händelse | upplast | id=vindkraft flask=strom |
| 2:54 | paket |  | sms |
| 2:54 | väntar | ali | Ali här. Ett vindkraftverk. Begagnat, från en gård i Hälsingland. Vingarna är hela. Nästan. |
| 2:57 | väntar | värld:TUUT! Hej grannen! | TUUT! Hej grannen! |
| 2:58 | brott | RADBRYTNING | för lång rad (45): "Spara till vindkraftverket · 6 406 / 9 950 kr" |
| 3:00 | klar | rolf | Nämen.. Du har byggt ett HUS. Mä trappa. Ja har aldrig gått i en trappa i ett hus som ja känner nån som äger. Ja kömmer på inflyttningsfest. Ja tar mä Kajsa. /R​ |
| 3:08 | sak | du | Det tar stopp. Strömmen räcker inte längre. |
| 3:08 | notis | tanke | 💭 Det tar stopp. Strömmen räcker inte längre. |
| 3:08 | röst | du | Det tar stopp. Strömmen räcker inte längre. · STORY |
| 3:10 | väntar | rolf | Rolfs Rockers spelaed en gång i Folkets park i Hudiksvall. 14 pers. 3 dansade. Bästa kvällen i mitt liv. /R *spelade​ |
| 3:13 | klar | du | Det tar stopp. Strömmen räcker inte längre. |
| 3:17 | tanke | du | Det drar. Från överallt. |
| 3:17 | väntar | du | Det drar. Från överallt. |
| 3:17 | händelse | printKlar | sak=n3_stol n=21 |
| 3:17 | struken | värld:TUUT! Hej grannen! | TUUT! Hej grannen! |
| 3:18 | händelse | tagitUrPrint | sak=n3_stol n=1 |
| 3:21 | sak | du | Det drar. Från överallt. |
| 3:21 | notis | tanke | 💭 Det drar. Från överallt. |
| 3:21 | röst | du | Det drar. Från överallt. · REAKTION |
| 3:23 | klar | du | Det drar. Från överallt. |
| 3:25 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 3:27 | händelse | salt | sak=n3_stol n=1 |
| 3:27 | aliSalt | ali | 14440 |
| 3:27 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 3:28 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 3:29 | skratt | du | Alis dyr-pling |
| 3:29 | struken | info:guld | 3D-modell köpt – printa vindkraftverk |
| 3:29 | händelse | kopt | sak=vindkraft |
| 3:29 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 3:29 | struken | ali | Ali här. Ett vindkraftverk. Begagnat, från en gård i Hälsingland. Vingarna är hela. Nästan. |
| 3:33 | sak | mamma | Pappa säger att du har byggt ett hus. Med trappa. Är det säkert? Har du räcke? Jag skickar en brandvarnare. Och sylt. |
| 3:33 | sms | mamma | Pappa säger att du har byggt ett hus. Med trappa. Är det säkert? Har du räcke? Jag skickar en brandvarnare. Och sylt. |
| 3:33 | sms-bubbla | mamma | Pappa säger att du har byggt ett hus. Med trappa. Är det säkert? Har du räcke? Jag skickar en brandvarnare. Och sylt. |
| 3:33 | röst | mamma | Pappa säger att du har byggt ett hus. Med trappa. Är det säkert? Har du räcke? Jag skickar en brandvarnare. Och sylt. · STORY |
| 3:37 | händelse | printStart | sak=byggsats:vindkraft |
| 3:39 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 3:41 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 3:42 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 3:42 | väntar | notis:Skrivare L: Tornet är tomt – mal mer så  | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 3:43 | klar | mamma | Pappa säger att du har byggt ett hus. Med trappa. Är det säkert? Har du räcke? Jag skickar en brandvarnare. Och sylt. |
| 3:44 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 3:45 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 3:46 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 3:46 | väntar | värld:Mjau. | Mjau. |
| 3:47 | skratt | du | kvarnen spottar |
| 3:47 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 3:49 | toast | bra | Del 1 av 4 klar |
| 3:49 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 3:51 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 3:51 | sak | notis:Skrivare L: Tornet är tomt – mal mer så  | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 3:51 | notis | fel | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 3:52 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 3:53 | klar | notis:Skrivare L: Tornet är tomt – mal mer så  | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 3:54 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 3:56 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 3:58 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 4:00 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 4:02 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 4:03 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 4:04 | sak | värld:Mjau. | Mjau. |
| 4:04 | bubbla |  | Mjau. |
| 4:05 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 4:06 | toast | bra | Del 2 av 4 klar |
| 4:06 | klar | värld:Mjau. | Mjau. |
| 4:06 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 4:08 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 4:09 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 4:11 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 4:12 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 4:13 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 4:14 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 4:16 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 4:17 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 4:18 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 4:19 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 4:20 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 4:22 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 4:22 | toast | bra | Del 3 av 4 klar |
| 4:23 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 4:24 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 4:25 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 4:26 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 4:32 | toast | skak | handen skakar: fullt |
| 4:37 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 4:38 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 4:39 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 4:40 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 4:41 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 4:42 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 4:43 | struken | rolf | Rolfs Rockers spelaed en gång i Folkets park i Hudiksvall. 14 pers. 3 dansade. Bästa kvällen i mitt liv. /R *spelade​ |
| 4:43 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 4:44 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 4:45 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 4:47 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 4:48 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 4:48 | händelse | printKlar | sak=byggsats:vindkraft n=1 |
| 4:55 | händelse | tagitUrPrint | sak=byggsats:vindkraft n=1 |
| 4:55 | paket |  | sms |
| 4:55 | väntar | ali | Ali här. Vindkraftverk – printad. På riktigt. Jag har visat bilden för min fru tre gånger. |
| 4:58 | sak | ali | Ali här. Vindkraftverk – printad. På riktigt. Jag har visat bilden för min fru tre gånger. |
| 4:58 | sms | ali | Ali här. Vindkraftverk – printad. På riktigt. Jag har visat bilden för min fru tre gånger. |
| 4:58 | sms-bubbla | ali | Ali här. Vindkraftverk – printad. På riktigt. Jag har visat bilden för min fru tre gånger. |
| 4:58 | röst | ali | Ali här. Vindkraftverk – printad. På riktigt. Jag har visat bilden för min fru tre gånger. · REAKTION |
| 5:04 | skratt | du | däcket rullar iväg |
| 5:04 | händelse | placerat | sak=vindkraft |
| 5:04 | händelse | malKlart | id=m19-vindkraft del=Dag 19 – Ett riktigt hus nasta=m19-guldskrivare |
| 5:04 | bekräftelse | du | plats |
| 5:04 | väntar | du | Guldet behöver en egen skrivare. Den bygger jag. |
| 5:04 | målruta |  | Köp guldskrivaren |
| 5:04 | MÅL |  | Köp guldskrivaren |
| 5:04 | upplåst | skrivare | guldskrivare |
| 5:04 | brott | UPPLÅST | guldskrivare (skrivare 1902 av 60) |
| 5:04 | händelse | upplast | id=guldskrivare flask=skrivare |
| 5:04 | paket |  | sms |
| 5:04 | väntar | ali | Ali här. Guldskrivaren. Munstycket är av diamant. Tappa den inte. Den är dyrare än min bil. |
| 5:08 | klar | ali | Ali här. Vindkraftverk – printad. På riktigt. Jag har visat bilden för min fru tre gånger. |
| 5:08 | sak | du | Guldet behöver en egen skrivare. Den bygger jag. |
| 5:08 | pil |  | Köp guldskrivaren |
| 5:08 | notis | tanke | 💭 Guldet behöver en egen skrivare. Den bygger jag. |
| 5:08 | röst | du | Guldet behöver en egen skrivare. Den bygger jag. · MÅL |
| 5:08 | nick |  | nick:118 |
| 5:08 | kvittens-bock |  | ✓ Bygg vindkraftverket på backen |
| 5:11 | skratt | du | falsk tuta |
| 5:13 | klar | du | Guldet behöver en egen skrivare. Den bygger jag. |
| 5:17 | tanke | du | Fingrarna vill inte riktigt. |
| 5:17 | väntar | du | Fingrarna vill inte riktigt. |
| 5:21 | sak | du | Fingrarna vill inte riktigt. |
| 5:21 | notis | tanke | 💭 Fingrarna vill inte riktigt. |
| 5:21 | röst | du | Fingrarna vill inte riktigt. · REAKTION |
| 5:24 | klar | du | Fingrarna vill inte riktigt. |
| 5:25 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 5:26 | skratt | du | Alis dyr-pling |
| 5:26 | struken | info:guld | 3D-modell köpt – printa guldskrivaren |
| 5:26 | händelse | kopt | sak=guldskrivare |
| 5:26 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 5:26 | struken | ali | Ali här. Guldskrivaren. Munstycket är av diamant. Tappa den inte. Den är dyrare än min bil. |
| 5:39 | skratt | du | kvarnen rapar |
| 5:43 | toast | guld | 🧵 |
| 5:48 | toast | guld | 🧵 |
| 5:52 | händelse | printStart | sak=byggsats:guldskrivare |
| 5:55 | toast | bra | Del 1 av 5 klar |
| 5:57 | toast | bra | Del 2 av 5 klar |
| 5:59 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 6:07 | skratt | du | kvarnen rapar |
| 6:09 | toast | bra | Del 3 av 5 klar |
| 6:15 | toast | bra | Del 4 av 5 klar |
| 6:20 | händelse | printKlar | sak=byggsats:guldskrivare n=1 |
| 6:25 | väntar | värld:Mjau. | Mjau. |
| 6:25 | sak | värld:Mjau. | Mjau. |
| 6:25 | bubbla |  | Mjau. |
| 6:27 | klar | värld:Mjau. | Mjau. |
| 6:31 | skratt | du | kvarnen rapar |
| 6:33 | händelse | tagitUrPrint | sak=byggsats:guldskrivare n=1 |
| 6:35 | toast | guld | 🧵 |
| 6:37 | händelse | placerat | sak=guldskrivare |
| 6:37 | händelse | malKlart | id=m19-guldskrivare del=Dag 19 – Ett riktigt hus nasta=m19-flytta-in-huset |
| 6:37 | bekräftelse | du | plats |
| 6:37 | väntar | du | Det blir kallt i natt. Värmen i skjulet: 8/9 – tak, dörr, fyra väggar, golv och en vedkamin behövs. |
| 6:37 | väntar | info:fel | 🌡️ Det blir kallt i natt. Värmen i skjulet: 8/9 – tak, dörr, fyra väggar, golv och en vedkamin behövs. |
| 6:37 | struken | du | Det blir kallt i natt. Värmen i skjulet: 8/9 – tak, dörr, fyra väggar, golv och en vedkamin behövs. |
| 6:37 | väntar | du | Huset står. Nu flyttar jag in. |
| 6:37 | MÅL |  | Flytta in i huset |
| 6:38 | sak | info:fel | 🌡️ Det blir kallt i natt. Värmen i skjulet: 8/9 – tak, dörr, fyra väggar, golv och en vedkamin behövs. |
| 6:38 | kvitto-visas | info:fel | 🌡️ Det blir kallt i natt. Värmen i skjulet: 8/9 – tak, dörr, fyra väggar, golv och en vedkamin behövs. |
| 6:38 | toast | fel | 🌡️ Det blir kallt i natt. Värmen i skjulet: 8/9 – tak, dörr, fyra väggar, golv och en vedkamin behövs. |
| 6:39 | målruta |  | Flytta in i huset |
| 6:40 | toast | guld | 🧵 |
| 6:40 | klar | info:fel | 🌡️ Det blir kallt i natt. Värmen i skjulet: 8/9 – tak, dörr, fyra väggar, golv och en vedkamin behövs. |
| 6:41 | kvittens-bock |  | ✓ Bygg guldskrivaren i linje 4 |
| 6:44 | toast | guld | 🧵 |
| 6:46 | sak | du | Huset står. Nu flyttar jag in. |
| 6:46 | pil |  | Flytta in i huset |
| 6:46 | notis | tanke | 💭 Huset står. Nu flyttar jag in. |
| 6:46 | röst | du | Huset står. Nu flyttar jag in. · MÅL |
| 6:50 | klar | du | Huset står. Nu flyttar jag in. |
| 6:51 | tanke | du | Jag har flyttat in! Skjulet blir verkstad – jag bor i ett riktigt hus nu. |
| 6:51 | väntar | du | Jag har flyttat in! Skjulet blir verkstad – jag bor i ett riktigt hus nu. |
| 6:51 | paket |  | sms |
| 6:51 | väntar | mamma | Du har flyttat in i ett hus. Med trappa. Jag har köpt en dörrmatta. Det står "Välkommen" på den. Pappa ville att det skulle stå "Gå hem". Jag sa nej. |
| 6:51 | sak | du | Jag har flyttat in! Skjulet blir verkstad – jag bor i ett riktigt hus nu. |
| 6:51 | notis | tanke | 💭 Jag har flyttat in! Skjulet blir verkstad – jag bor i ett riktigt hus nu. |
| 6:51 | röst | du | Jag har flyttat in! Skjulet blir verkstad – jag bor i ett riktigt hus nu. · REAKTION |
| 6:51 | händelse | malKlart | id=m19-flytta-in-huset del=Dag 19 – Ett riktigt hus nasta=sov19 |
| 6:51 | paket |  | lapp |
| 6:51 | väntar | du | Kvarnen är för långsam. |
| 6:51 | bekräftelse | du | plats |
| 6:51 | MÅL |  | Sov när du vill |
| 6:53 | skratt | du | falsk tuta |
| 6:53 | målruta |  | Sov när du vill |
| 6:55 | kvittens-bock |  | ✓ Flytta in i huset |
| 6:56 | klar | du | Jag har flyttat in! Skjulet blir verkstad – jag bor i ett riktigt hus nu. |
| 6:56 | sak | du | Kvarnen är för långsam. |
| 6:56 | kvallsrad | du | Kvarnen är för långsam. |
| 6:57 | klar | du | Kvarnen är för långsam. |
| 6:57 | sak | du | (nytt mål i rutan) |
| 6:57 | pil |  | Sov när du vill |
| 6:57 | klar | du | (nytt mål i rutan) |
| 6:57 | nick |  | nick:120 |
| 6:58 | väntar | notis:🌇 Klockan är 21. Ali slår igen luckan.  | 🌇 Klockan är 21. Ali slår igen luckan. Dagens jobb är klart – gå in i skjulet och sov i sängen. |
| 7:01 | brott | TRÄNGSEL 2 | "Du har flyttat in i ett hus. Med trappa. Jag har k" 3.3 s efter förra meddelandet, 9.9 s efter en klar uppgift |
| 7:01 | sak | mamma | Du har flyttat in i ett hus. Med trappa. Jag har köpt en dörrmatta. Det står "Välkommen" på den. Pappa ville att det skulle stå "Gå hem". Jag sa nej. |
| 7:01 | sms | mamma | Du har flyttat in i ett hus. Med trappa. Jag har köpt en dörrmatta. Det står "Välkommen" på den. Pappa ville att det skulle stå "Gå hem". Jag sa nej. |
| 7:01 | sms-bubbla | mamma | Du har flyttat in i ett hus. Med trappa. Jag har köpt en dörrmatta. Det står "Välkommen" på den. Pappa ville att det skulle stå "Gå hem". Jag sa nej. |
| 7:01 | röst | mamma | Du har flyttat in i ett hus. Med trappa. Jag har köpt en dörrmatta. Det står "Välkommen" på den. Pappa ville att det skulle stå "Gå hem". Jag sa nej. · STORY |
| 7:04 | autosparning | du | natt 22 december |
| 7:06 | webbBetalt | du | 3844 |
| 7:06 | nattkort | du | 🌙 2 dagar kvar. God natt. zzz… Kvarnen är för långsam. DAGENS PRINTAR Kolfiberstol × 3 Cykelhjälm i PETG × 2 Blomkruka × 1 Totalt 6 printar 💰 Tjänat i dag +49 |
| 7:06 | paket |  | sms |
| 7:06 | väntar | bror | Mamma har googlat "hypotermi". Hon har skickat länken till mig fyra gånger. Skaffa en kamin, för min skull. |

<details><summary>Botens handlingar dag 13</summary>

- 0:00 — dag 13 börjar — (4206 kr)
- 0:07 popup: "FORTSÄTT" (4206 kr)
- 0:22 gå till skrivaren (20 m) (4206 kr)
- 0:24 printar Cykelhjälm i PETG (4206 kr)
- 0:29 tar ut 1 st ur skrivaren (4206 kr)
- 0:31 printar Cykelhjälm i PETG (4206 kr)
- 0:36 tar ut 1 st ur skrivaren (4206 kr)
- 0:37 gå till skrivaren (4 m) (4206 kr)
- 0:39 printar Blomkruka (4206 kr)
- 0:41 tar ut 1 st ur skrivaren (4206 kr)
- 0:41 fulla fickor – lägger n2_hjalm i kistan (4206 kr)
- 0:46 gå till datorn (18 m) (4206 kr)
- 0:54 panel: "Webbshopen · Soptippsvägen 1
B" (4206 kr)
- 1:03 panel: "Webbshopen · Soptippsvägen 1
B" (4206 kr)
- 1:12 panel: "Webbshopen · Soptippsvägen 1
B" (4206 kr)
- 1:18 gå till Rolfs postlåda (paket) (29 m) (4206 kr)
- 1:19 webbshop: 2 paket i postlådan (4206 kr)
- 1:19 tjänar pengar till huset: 4206/29000 kr → printar kolfiberstol (16000 kr) (4206 kr)
- 1:19 väntar på kolfiber från bandet (4206 kr)
- 1:31 gå till skrivaren (15 m) (4206 kr)
- 1:32 printar Kolfiberstol (4206 kr)
- 1:40 tar ut 1 st ur skrivaren (4206 kr)
- 1:46 gå till Ali (34 m) (4206 kr)
- 1:46 öppnar Alis butik – sälja (4206 kr)
- 1:48 säljer hos Ali: +16000 kr (20206 kr)
- 1:49 tjänar pengar till huset: 20206/29000 kr → printar kolfiberstol (15200 kr) (20206 kr)
- 1:56 gå till skrivaren (33 m) (20206 kr)
- 1:57 printar Kolfiberstol (20206 kr)
- 2:05 tar ut 1 st ur skrivaren (20206 kr)
- 2:11 gå till Ali (33 m) (20206 kr)
- 2:11 öppnar Alis butik – sälja (20206 kr)
- 2:13 säljer hos Ali: +15200 kr (35406 kr)
- 2:19 gå till tavlan vid vägen (6 m) (35406 kr)
- 2:19 köper ett riktigt hus på ängen (29000 kr) (6406 kr)
- 2:34 tjänar pengar till väntar på flaskhalsen för vindkraft: 6406/6446 kr → printar kolfiberstol (14440 kr) (6406 kr)
- 2:40 gå till skrivaren (27 m) (6406 kr)
- 2:41 printar Kolfiberstol (6406 kr)
- 3:19 tar ut 1 st ur skrivaren (6406 kr)
- 3:25 gå till Ali (33 m) (6406 kr)
- 3:25 öppnar Alis butik – sälja (6406 kr)
- 3:27 säljer hos Ali: +14440 kr (20846 kr)
- 3:28 öppnar Alis butik – köpa vindkraftverk (20846 kr)
- 3:30 köper vindkraft för 9950 kr (10896 kr)
- 3:36 gå till skrivaren (23 m) (10896 kr)
- 3:37 printar Vindkraftverk (4 delar) (10896 kr)
- 3:48 plockar 3 skräp på tippen (bär max 16) (10896 kr)
- 3:50 gå till kvarnen (10 m) (10896 kr)
- 4:33 plockar 2 skräp på tippen (bär max 16) (10896 kr)
- 4:36 gå till kvarnen (13 m) (10896 kr)
- 4:55 gå till skrivaren (7 m) (10896 kr)
- 4:55 tar ut 1 st ur skrivaren (10896 kr)
- 5:03 gå till platsen för vindkraftverk (40 m) (10896 kr)
- 5:04 ställer ut vindkraftverk (10896 kr)
- 5:25 gå till Ali (45 m) (10896 kr)
- 5:25 öppnar Alis butik – köpa guldskrivaren (10896 kr)
- 5:27 köper guldskrivare för 6900 kr (3996 kr)
- 5:35 gå till en tunna (38 m) (3996 kr)
- 5:39 gå till PETG-kvarnen (15 m) (3996 kr)
- 5:39 tömmer det tunga i PETG-kvarnen (3996 kr)
- 5:50 gå till skrivaren (3 m) (3996 kr)
- 5:52 printar Guldskrivaren (5 delar) (3996 kr)
- 6:03 gå till en tunna (16 m) (3996 kr)
- 6:07 gå till PETG-kvarnen (13 m) (3996 kr)
- 6:07 tömmer det tunga i PETG-kvarnen (3996 kr)
- 6:26 gå till en tunna (17 m) (3996 kr)
- 6:31 gå till PETG-kvarnen (17 m) (3996 kr)
- 6:31 tömmer det tunga i PETG-kvarnen (3996 kr)
- 6:33 gå till skrivaren (4 m) (3996 kr)
- 6:33 tar ut 1 st ur skrivaren (3996 kr)
- 6:36 gå till platsen för guldskrivaren (10 m) (3996 kr)
- 6:37 ställer ut guldskrivaren (3996 kr)
- 6:51 gå till huset (41 m) (3996 kr)
- 7:04 gå till sängen (22 m) (3996 kr)

</details>

## Dag 14

| Tid | Källa | Vem | Text |
|---|---|---|---|
| 7:06 | vara | ali | n2_hjalm |
| 7:06 | händelse | malKlart | id=sov19 del=Dag 19 – Ett riktigt hus nasta=m20-printa-stall-ut |
| 7:06 | bekräftelse | du | plats |
| 7:06 | MÅL |  | Printa en vedkamin |
| 0:00 | autosparning | du | morgon 23 december |
| 0:01 | händelse | dagenBorjar | dag=14 |
| 0:01 | meddelande | du | 1 dag till jul. Det blir kallt i huset. En kamin behövs. |
| 0:01 | dagbokkort | du | En vedkamin. · 1 dag till jul. Det blir kallt i huset. En kamin behövs. |
| 0:01 | röst | du | 1 dag till jul. En vedkamin. Det blir kallt i huset. En kamin behövs. · STORY |
| 0:01 | brott | FEL RÖST | du: 1 dag till jul. En vedkamin. Det blir kallt i huset. En kami |
| 0:08 | väntar | notis:morgon | Webbshopen: 2 paket i natt · +3 844 kr · Ali vill ha idag: Cykelhjälm i PETG · +50 % |
| 0:08 | klar | mamma | Du har flyttat in i ett hus. Med trappa. Jag har köpt en dörrmatta. Det står "Välkommen" på den. Pappa ville att det skulle stå "Gå hem". Jag sa nej. |
| 0:08 | händelse | morgonkortStangt | dag=14 |
| 0:08 | paket |  | toast |
| 0:08 | väntar | notis:🥶 Du frös i natt. Skjulet behöver: en v | 🥶 Du frös i natt. Skjulet behöver: en vedkamin (ritning hos Ali). |
| 0:08 | väntar | du | Minus fjorton. Skjulet var en sak. Huset ska vara varmt. |
| 0:09 | poolTom | du | 4 repliker använda |
| 0:10 | målruta |  | Printa en vedkamin |
| 0:13 | sak | du | Minus fjorton. Skjulet var en sak. Huset ska vara varmt. |
| 0:13 | pil |  | Printa en vedkamin |
| 0:13 | notis | tanke | 💭 Minus fjorton. Skjulet var en sak. Huset ska vara varmt. |
| 0:13 | röst | du | Minus fjorton. Skjulet var en sak. Huset ska vara varmt. · MÅL |
| 0:14 | nick |  | nick:121 |
| 0:19 | klar | du | Minus fjorton. Skjulet var en sak. Huset ska vara varmt. |
| 0:19 | sak | notis:morgon | Webbshopen: 2 paket i natt · +3 844 kr · Ali vill ha idag: Cykelhjälm i PETG · +50 % |
| 0:19 | notis |  | 2 paket i natt · +3 844 kr |
| 0:19 | notis |  | Cykelhjälm i PETG · +50 % |
| 0:24 | klar | notis:morgon | Webbshopen: 2 paket i natt · +3 844 kr · Ali vill ha idag: Cykelhjälm i PETG · +50 % |
| 0:24 | händelse | printStart | sak=n2_hjalm |
| 0:26 | struken | notis:🌇 Klockan är 21. Ali slår igen luckan.  | 🌇 Klockan är 21. Ali slår igen luckan. Dagens jobb är klart – gå in i skjulet och sov i sängen. |
| 0:29 | händelse | printKlar | sak=n2_hjalm n=52 |
| 0:29 | händelse | tagitUrPrint | sak=n2_hjalm n=1 |
| 0:30 | struken | notis:🥶 Du frös i natt. Skjulet behöver: en v | 🥶 Du frös i natt. Skjulet behöver: en vedkamin (ritning hos Ali). |
| 0:31 | skratt | du | tummen på fotot |
| 0:31 | väntar | foto | Ett hus (och min tumme) |
| 0:31 | paket |  | tanke |
| 0:31 | tanke | du | Ett riktigt hus. Vänta bara tills mamma ser det. |
| 0:31 | väntar | du | Ett riktigt hus. Vänta bara tills mamma ser det. |
| 0:31 | väntar | notis:📔 Prestation: Frusen pinne · +3 respekt | 📔 Prestation: Frusen pinne · +3 respekt |
| 0:32 | sak | foto | Ett hus (och min tumme) |
| 0:32 | foto | du | Ett hus (och min tumme) |
| 0:34 | klar | foto | Ett hus (och min tumme) |
| 0:34 | ljud | kajsa | Mjau |
| 0:42 | sak | du | Ett riktigt hus. Vänta bara tills mamma ser det. |
| 0:42 | notis | tanke | 💭 Ett riktigt hus. Vänta bara tills mamma ser det. |
| 0:42 | röst | du | Ett riktigt hus. Vänta bara tills mamma ser det. · STORY |
| 0:45 | händelse | printStart | sak=pall |
| 0:46 | klar | du | Ett riktigt hus. Vänta bara tills mamma ser det. |
| 0:48 | händelse | printKlar | sak=pall n=15 |
| 0:49 | nej | du | Printa · 66 % av rullen |
| 0:49 | toast | fickskylt | Fulla fickor |
| 0:49 | fullaFickor | du | pall |
| 0:49 | händelse | tagitUrPrint | sak=pall n=1 |
| 0:51 | struken | notis:📔 Prestation: Frusen pinne · +3 respekt | 📔 Prestation: Frusen pinne · +3 respekt |
| 1:02 | sak | bror | Mamma har googlat "hypotermi". Hon har skickat länken till mig fyra gånger. Skaffa en kamin, för min skull. |
| 1:02 | sms | bror | Mamma har googlat "hypotermi". Hon har skickat länken till mig fyra gånger. Skaffa en kamin, för min skull. |
| 1:02 | sms-bubbla | bror | Mamma har googlat "hypotermi". Hon har skickat länken till mig fyra gånger. Skaffa en kamin, för min skull. |
| 1:02 | röst | bror | Mamma har googlat "hypotermi". Hon har skickat länken till mig fyra gånger. Skaffa en kamin, för min skull. · STORY |
| 1:03 | webb | du | packade 1 n2_hjalm |
| 1:11 | klar | bror | Mamma har googlat "hypotermi". Hon har skickat länken till mig fyra gånger. Skaffa en kamin, för min skull. |
| 1:12 | webb | du | packade 1 pall |
| 1:26 | struken | info:bra | 📦 Paketet till Någon i Mora ligger i postlådan – Rolf tar det till posten |
| 1:27 | struken | info:bra | 📦 Paketet till Kenneth på bilskroten ligger i postlådan – Rolf tar det till posten |
| 1:32 | händelse | printStart | sak=n3_stol |
| 1:38 | händelse | printKlar | sak=n3_stol n=22 |
| 1:39 | händelse | tagitUrPrint | sak=n3_stol n=1 |
| 1:41 | händelse | printStart | sak=n3_stol |
| 1:41 | skratt | du | Kajsa i skrivaren |
| 1:47 | händelse | printKlar | sak=n3_stol n=23 |
| 1:48 | händelse | tagitUrPrint | sak=n3_stol n=1 |
| 1:50 | händelse | printStart | sak=n3_stol |
| 1:56 | händelse | printKlar | sak=n3_stol n=24 |
| 1:57 | händelse | tagitUrPrint | sak=n3_stol n=1 |
| 1:59 | väntar | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått vindkraftverk. Och guldskrivaren. Skriv in, Gunnar. Du skriver aldrig in. |
| 1:59 | radio | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått vindkraftverk. Och guldskrivaren. Skriv in, Gunnar. Du skriver aldrig in. |
| 1:59 | skratt | du | Radio-Kjelle |
| 1:59 | sak | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått vindkraftverk. Och guldskrivaren. Skriv in, Gunnar. Du skriver aldrig in. |
| 1:59 | notis |  | 📻 Radio Tippen: Radio Tippen, Kjelle här. Skjulet vid tippen har fått vindkraftverk. Och guldskrivaren. Skriv in, Gunnar. Du skriver aldrig in. |
| 1:59 | röst | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått vindkraftverk. Och guldskrivaren. Skriv in, Gunnar. Du skriver aldrig in. · REAKTION |
| 2:04 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 2:04 | poolTom | ali | 4 repliker använda |
| 2:06 | händelse | salt | sak=n3_stol n=1 |
| 2:06 | aliSalt | ali | 16000 |
| 2:06 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 2:06 | händelse | salt | sak=n3_stol n=1 |
| 2:06 | aliSalt | ali | 15200 |
| 2:06 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 2:06 | händelse | salt | sak=n3_stol n=1 |
| 2:06 | aliSalt | ali | 14440 |
| 2:06 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 2:09 | tanke | du | Strumpor. Jag borde ha lyssnat på mamma. |
| 2:09 | väntar | du | Strumpor. Jag borde ha lyssnat på mamma. |
| 2:10 | klar | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått vindkraftverk. Och guldskrivaren. Skriv in, Gunnar. Du skriver aldrig in. |
| 2:15 | händelse | printStart | sak=n3_stol |
| 2:18 | sak | du | Strumpor. Jag borde ha lyssnat på mamma. |
| 2:18 | notis | tanke | 💭 Strumpor. Jag borde ha lyssnat på mamma. |
| 2:18 | röst | du | Strumpor. Jag borde ha lyssnat på mamma. · REAKTION |
| 2:22 | klar | du | Strumpor. Jag borde ha lyssnat på mamma. |
| 2:22 | händelse | printKlar | sak=n3_stol n=25 |
| 2:22 | händelse | tagitUrPrint | sak=n3_stol n=1 |
| 2:29 | väntar | ali | Den köper jag. Ge hit. |
| 2:30 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 2:31 | händelse | salt | sak=n3_stol n=1 |
| 2:31 | aliSalt | ali | 13718 |
| 2:31 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 2:32 | sak | ali | Den köper jag. Ge hit. |
| 2:32 | röst | ali | Den köper jag. Ge hit. · REAKTION |
| 2:32 | upprepning | ali | Den köper jag. Ge hit. |
| 2:34 | klar | ali | Den köper jag. Ge hit. |
| 2:36 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 2:38 | skratt | du | Alis dyr-pling |
| 2:38 | händelse | kopt | sak=kamin |
| 2:38 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 2:47 | händelse | printStart | sak=kamin |
| 2:52 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 2:53 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 2:53 | väntar | notis:Skrivare L: Tornet är tomt – mal mer så  | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 2:53 | sak | notis:Skrivare L: Tornet är tomt – mal mer så  | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 2:53 | notis | fel | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 2:55 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 2:56 | klar | notis:Skrivare L: Tornet är tomt – mal mer så  | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 2:56 | väntar | värld:Mjau. | Mjau. |
| 2:56 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 2:58 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 3:00 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 3:01 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 3:02 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 3:03 | händelse | printKlar | sak=kamin n=1 |
| 3:03 | händelse | malKlart | id=m20-printa-stall-ut del=Dag 20 – Kylan nasta=m20-stall-in-kamin |
| 3:03 | bekräftelse | du | plats |
| 3:03 | väntar | du | Kaminen är klar. Den ställer jag in i skjulet. |
| 3:03 | målruta |  | Ställ in en kamin i skjulet |
| 3:03 | MÅL |  | Ställ in en kamin i skjulet |
| 3:03 | sak | du | Kaminen är klar. Den ställer jag in i skjulet. |
| 3:03 | pil |  | Ställ in en kamin i skjulet |
| 3:03 | notis | tanke | 💭 Kaminen är klar. Den ställer jag in i skjulet. |
| 3:03 | röst | du | Kaminen är klar. Den ställer jag in i skjulet. · MÅL |
| 3:07 | kvittens-bock |  | ✓ Printa en vedkamin |
| 3:07 | klar | du | Kaminen är klar. Den ställer jag in i skjulet. |
| 3:10 | händelse | tagitUrPrint | sak=kamin n=1 |
| 3:15 | händelse | printStart | sak=n3_stol |
| 3:16 | sak | värld:Mjau. | Mjau. |
| 3:16 | bubbla |  | Mjau. |
| 3:18 | klar | värld:Mjau. | Mjau. |
| 3:21 | händelse | printKlar | sak=n3_stol n=26 |
| 3:22 | nej | du | Printa · 1 rulle |
| 3:22 | toast | fickskylt | Fulla fickor |
| 3:22 | fullaFickor | du | n3_stol |
| 3:22 | händelse | tagitUrPrint | sak=n3_stol n=1 |
| 3:24 | händelse | printStart | sak=n3_stol |
| 3:31 | händelse | printKlar | sak=n3_stol n=27 |
| 3:31 | händelse | tagitUrPrint | sak=n3_stol n=1 |
| 3:37 | väntar | ali | Jag har räknat kassan två gånger. Samma summa. Tråkigt. |
| 3:38 | sak | ali | Jag har räknat kassan två gånger. Samma summa. Tråkigt. |
| 3:38 | röst | ali | Jag har räknat kassan två gånger. Samma summa. Tråkigt. · SMÅPRAT |
| 3:39 | bubbla |  | Jag har räknat kassan två gånger. Samma summa. Tråkigt. |
| 3:39 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 3:40 | händelse | salt | sak=n3_stol n=1 |
| 3:40 | aliSalt | ali | 13032 |
| 3:40 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 3:40 | händelse | salt | sak=n3_stol n=1 |
| 3:40 | aliSalt | ali | 12380 |
| 3:40 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 3:44 | klar | ali | Jag har räknat kassan två gånger. Samma summa. Tråkigt. |
| 3:46 | skratt | du | falsk tuta |
| 4:09 | tanke | du | Jag ser min andedräkt. Inomhus. |
| 4:09 | väntar | du | Jag ser min andedräkt. Inomhus. |
| 4:09 | sak | du | Jag ser min andedräkt. Inomhus. |
| 4:09 | notis | tanke | 💭 Jag ser min andedräkt. Inomhus. |
| 4:09 | röst | du | Jag ser min andedräkt. Inomhus. · REAKTION |
| 4:14 | klar | du | Jag ser min andedräkt. Inomhus. |
| 5:52 | skratt | du | däcket rullar iväg |
| 6:06 | händelse | printStart | sak=n3_stol |
| 6:06 | skratt | du | Kajsa i skrivaren |
| 6:09 | poolTom | du | 5 repliker använda |
| 6:12 | händelse | printKlar | sak=n3_stol n=28 |
| 6:13 | händelse | tagitUrPrint | sak=n3_stol n=1 |
| 6:19 | väntar | ali | Den köper jag. Ge hit. |
| 6:19 | sak | ali | Den köper jag. Ge hit. |
| 6:19 | röst | ali | Den köper jag. Ge hit. · REAKTION |
| 6:19 | upprepning | ali | Den köper jag. Ge hit. |
| 6:20 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 6:21 | händelse | salt | sak=n3_stol n=1 |
| 6:21 | aliSalt | ali | 11761 |
| 6:21 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 6:22 | klar | ali | Den köper jag. Ge hit. |
| 6:31 | händelse | printStart | sak=n3_stol |
| 6:37 | händelse | printKlar | sak=n3_stol n=29 |
| 6:38 | händelse | tagitUrPrint | sak=n3_stol n=1 |
| 6:40 | händelse | printStart | sak=n3_stol |
| 6:46 | händelse | printKlar | sak=n3_stol n=30 |
| 6:47 | händelse | tagitUrPrint | sak=n3_stol n=1 |
| 6:54 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 6:56 | händelse | salt | sak=n3_stol n=1 |
| 6:56 | aliSalt | ali | 11200 |
| 6:56 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 6:56 | händelse | salt | sak=n3_stol n=1 |
| 6:56 | aliSalt | ali | 11200 |
| 6:56 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 6:57 | struken | ali | Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar. |
| 7:05 | händelse | printStart | sak=kamin |
| 7:10 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 7:11 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 7:13 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 7:14 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 7:14 | väntar | värld:Mjau. | Mjau. |
| 7:15 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 7:16 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 7:18 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 7:19 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 7:20 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 7:21 | sak | värld:Mjau. | Mjau. |
| 7:21 | bubbla |  | Mjau. |
| 7:21 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 7:22 | händelse | printKlar | sak=kamin n=2 |
| 7:23 | klar | värld:Mjau. | Mjau. |
| 7:23 | skratt | du | kvarnen spottar |
| 7:29 | händelse | tagitUrPrint | sak=kamin n=1 |
| 7:32 | skratt | du | falsk tuta |
| 7:35 | händelse | placerat | sak=kamin |
| 7:35 | händelse | malKlart | id=m20-stall-in-kamin del=Dag 20 – Kylan nasta=m21-bli-folkbokford |
| 7:35 | bekräftelse | du | plats |
| 7:35 | väntar | du | tillbakablick paketet |
| 7:35 | målruta |  | Bli folkbokförd – tavlan vid vägen |
| 7:35 | MÅL |  | Bli folkbokförd – tavlan vid vägen |
| 7:38 | tanke | du | Jag är folkbokförd! Soptippsvägen 1 är min adress. |
| 7:38 | väntar | du | Jag är folkbokförd! Soptippsvägen 1 är min adress. |
| 7:38 | paket |  | sms |
| 7:38 | väntar | rolf | Nämen. Grattis granne. Nu ä du på riktigt. Ja tar mä grillen på lördag. Kajsa oxå. /R​ |
| 7:38 | paket |  | sms |
| 7:38 | väntar | bror | Pappa sa "fint jobbat". Två gånger. Han har aldrig sagt det två gånger. Grattis lillebror. Eller vad du nu är. Du vet. |
| 7:38 | sak | du | Jag är folkbokförd! Soptippsvägen 1 är min adress. |
| 7:38 | notis | tanke | 💭 Jag är folkbokförd! Soptippsvägen 1 är min adress. |
| 7:38 | röst | du | Jag är folkbokförd! Soptippsvägen 1 är min adress. · REAKTION |
| 7:38 | händelse | malKlart | id=m21-bli-folkbokford del=Dag 21 – Folkbokförd nasta=sov21 |
| 7:38 | paket |  | lapp |
| 7:38 | väntar | du | Nu vet Skatteverket att jag bor HÄR. Skjulet är fortfarande ett skjul. |
| 7:38 | bekräftelse | du | plats |
| 7:38 | MÅL |  | Sov när du vill |
| 7:39 | kvittens-bock |  | ✓ Ställ in en kamin i skjulet |
| 7:41 | målruta |  | Sov när du vill |
| 7:41 | tillbakablick | du | paketet |
| 7:42 | kvittens-bock |  | ✓ Bli folkbokförd – tavlan vid vägen |
| 7:44 | klar | du | Jag är folkbokförd! Soptippsvägen 1 är min adress. |
| 7:45 | sak | du | (nytt mål i rutan) |
| 7:45 | pil |  | Sov när du vill |
| 7:45 | klar | du | (nytt mål i rutan) |
| 7:45 | nick |  | nick:124 |
| 7:45 | väntar | notis:🌇 Klockan är 21. Ali slår igen luckan.  | 🌇 Klockan är 21. Ali slår igen luckan. Dagens jobb är klart – gå in i skjulet och sov i sängen. |
| 7:49 | autosparning | du | natt 23 december |
| 7:52 | webbBetalt | du | 2212 |
| 7:52 | nattkort | du | 🌙 1 dag kvar. God natt. zzz… Nu vet Skatteverket att jag bor HÄR. Skjulet är fortfarande ett skjul. DAGENS PRINTAR Kolfiberstol × 9 Vedkamin × 2 Cykelhjälm i P |

<details><summary>Botens handlingar dag 14</summary>

- 0:00 — dag 14 börjar — (7840 kr)
- 0:08 popup: "FORTSÄTT" (7840 kr)
- 0:23 gå till skrivaren (21 m) (7840 kr)
- 0:24 printar Cykelhjälm i PETG (7840 kr)
- 0:30 tar ut 1 st ur skrivaren (7840 kr)
- 0:37 plockar 4 skräp på tippen (bär max 16) (7840 kr)
- 0:40 gå till kvarnen (13 m) (7840 kr)
- 0:43 gå till skrivaren (7 m) (7840 kr)
- 0:45 printar Pall (7840 kr)
- 0:49 tar ut 1 st ur skrivaren (7840 kr)
- 0:49 fulla fickor – lägger n2_hjalm i kistan (7840 kr)
- 0:54 gå till datorn (19 m) (7840 kr)
- 1:02 panel: "Webbshopen · Soptippsvägen 1
B" (7840 kr)
- 1:11 panel: "Webbshopen · Soptippsvägen 1
B" (7840 kr)
- 1:20 panel: "Webbshopen · Soptippsvägen 1
B" (7840 kr)
- 1:26 gå till Rolfs postlåda (paket) (29 m) (7840 kr)
- 1:27 webbshop: 2 paket i postlådan (7840 kr)
- 1:27 tjänar pengar till vedkamin: 7840/58000 kr → printar kolfiberstol (16000 kr) (7840 kr)
- 1:30 gå till skrivaren (15 m) (7840 kr)
- 1:32 printar Kolfiberstol (7840 kr)
- 1:39 tar ut 1 st ur skrivaren (7840 kr)
- 1:41 printar Kolfiberstol (7840 kr)
- 1:48 tar ut 1 st ur skrivaren (7840 kr)
- 1:50 printar Kolfiberstol (7840 kr)
- 1:57 tar ut 1 st ur skrivaren (7840 kr)
- 2:04 gå till Ali (34 m) (7840 kr)
- 2:04 öppnar Alis butik – sälja (7840 kr)
- 2:06 säljer hos Ali: +45640 kr (53480 kr)
- 2:07 tjänar pengar till vedkamin: 53480/58000 kr → printar kolfiberstol (13718 kr) (53480 kr)
- 2:14 gå till skrivaren (33 m) (53480 kr)
- 2:15 printar Kolfiberstol (53480 kr)
- 2:23 tar ut 1 st ur skrivaren (53480 kr)
- 2:30 gå till Ali (33 m) (53480 kr)
- 2:30 öppnar Alis butik – sälja (53480 kr)
- 2:31 säljer hos Ali: +13718 kr (67198 kr)
- 2:36 öppnar Alis butik – köpa receptet vedkamin (67198 kr)
- 2:39 köper kamin för 58000 kr (9198 kr)
- 2:45 gå till skrivaren (23 m) (9198 kr)
- 2:47 printar Vedkamin (9198 kr)
- 2:57 plockar 1 skräp på tippen (bär max 16) (9198 kr)
- 3:00 gå till kvarnen (12 m) (9198 kr)
- 3:10 gå till skrivaren (7 m) (9198 kr)
- 3:10 tar ut 1 st ur skrivaren (9198 kr)
- 3:11 tjänar pengar till receptet vedkamin: 9198/58000 kr → printar kolfiberstol (13032 kr) (9198 kr)
- 3:13 gå till skrivaren (10 m) (9198 kr)
- 3:15 printar Kolfiberstol (9198 kr)
- 3:22 tar ut 1 st ur skrivaren (9198 kr)
- 3:22 fulla fickor – lägger kamin i kistan (9198 kr)
- 3:24 printar Kolfiberstol (9198 kr)
- 3:32 tar ut 1 st ur skrivaren (9198 kr)
- 3:39 gå till Ali (33 m) (9198 kr)
- 3:39 öppnar Alis butik – sälja (9198 kr)
- 3:41 säljer hos Ali: +25412 kr (34610 kr)
- 3:41 tjänar pengar till receptet vedkamin: 34610/58000 kr → printar kolfiberstol (11761 kr) (34610 kr)
- 3:41 väntar på kolfiber från bandet (34610 kr)
- 3:49 väntar på kolfiber från bandet (34610 kr)
- 3:57 väntar på kolfiber från bandet (34610 kr)
- 4:05 väntar på kolfiber från bandet (34610 kr)
- 4:13 väntar på kolfiber från bandet (34610 kr)
- 4:21 väntar på kolfiber från bandet (34610 kr)
- 4:29 väntar på kolfiber från bandet (34610 kr)
- 4:37 väntar på kolfiber från bandet (34610 kr)
- 4:45 väntar på kolfiber från bandet (34610 kr)
- 4:53 väntar på kolfiber från bandet (34610 kr)
- 5:01 väntar på kolfiber från bandet (34610 kr)
- 5:09 väntar på kolfiber från bandet (34610 kr)
- 5:17 väntar på kolfiber från bandet (34610 kr)
- 5:25 väntar på kolfiber från bandet (34610 kr)
- 5:33 väntar på kolfiber från bandet (34610 kr)
- 5:41 väntar på kolfiber från bandet (34610 kr)
- 5:49 väntar på kolfiber från bandet (34610 kr)
- 6:04 gå till skrivaren (33 m) (34610 kr)
- 6:06 printar Kolfiberstol (34610 kr)
- 6:13 tar ut 1 st ur skrivaren (34610 kr)
- 6:20 gå till Ali (33 m) (34610 kr)
- 6:20 öppnar Alis butik – sälja (34610 kr)
- 6:22 säljer hos Ali: +11761 kr (46371 kr)
- 6:22 tjänar pengar till receptet vedkamin: 46371/58000 kr → printar kolfiberstol (11200 kr) (46371 kr)
- 6:29 gå till skrivaren (33 m) (46371 kr)
- 6:31 printar Kolfiberstol (46371 kr)
- 6:38 tar ut 1 st ur skrivaren (46371 kr)
- 6:40 printar Kolfiberstol (46371 kr)
- 6:47 tar ut 1 st ur skrivaren (46371 kr)
- 6:54 gå till Ali (33 m) (46371 kr)
- 6:54 öppnar Alis butik – sälja (46371 kr)
- 6:56 säljer hos Ali: +22400 kr (68771 kr)
- 6:57 öppnar Alis butik – köpa receptet vedkamin (68771 kr)
- 6:58 Ali har inte kamin (68771 kr)
- 7:04 gå till skrivaren (23 m) (68771 kr)
- 7:05 printar Vedkamin (68771 kr)
- 7:17 plockar 2 skräp på tippen (bär max 16) (68771 kr)
- 7:20 gå till kvarnen (14 m) (68771 kr)
- 7:29 gå till skrivaren (7 m) (68771 kr)
- 7:30 tar ut 1 st ur skrivaren (68771 kr)
- 7:34 gå till platsen för vedkamin (22 m) (68771 kr)
- 7:35 ställer ut vedkamin (68771 kr)
- 7:38 gå till tavlan vid vägen (11 m) (68771 kr)
- 7:38 blir folkbokförd (36271 kr)
- 7:49 gå till sängen (11 m) (36271 kr)

</details>

## Dag 15

| Tid | Källa | Vem | Text |
|---|---|---|---|
| 7:52 | vara | ali | n2_vas |
| 7:52 | händelse | malKlart | id=sov21 del=Dag 21 – Folkbokförd nasta=m22-printa-julbordet |
| 7:52 | bekräftelse | du | plats |
| 7:52 | händelse | malKlart | id=m22-printa-julbordet del=Dag 22 – Jul på Soptippsvägen 1 nasta=m22-tand-skylten |
| 7:52 | bekräftelse | du | plats |
| 7:52 | MÅL |  | Skylten med mitt namn på dörren |
| 7:53 | väntar | notis:📔 Prestation: Posten hittar hit · +3 re | 📔 Prestation: Posten hittar hit · +3 respekt |
| 0:00 | autosparning | du | morgon 24 december |
| 0:01 | händelse | dagenBorjar | dag=15 |
| 0:01 | meddelande | du | Julafton. Mamma kommer klockan tre. Skylten ska sitta på dörren. |
| 0:01 | dagbokkort | du | Julafton. · Julafton. Mamma kommer klockan tre. Skylten ska sitta på dörren. |
| 0:01 | röst | du | Julafton. Julafton. Mamma kommer klockan tre. Skylten ska sitta på dörren. · STORY |
| 0:03 | paket |  | sms |
| 0:03 | väntar | rolf | Hörru. Ja har skrivit nåt. Mä blyerts, så ja kan sudda om dä blir fel. Lådan. /R​ |
| 0:08 | väntar | notis:morgon | Webbshopen: 2 paket i natt · +2 212 kr · Ali vill ha idag: Designvas i röd PETG · +50 % |
| 0:08 | händelse | morgonkortStangt | dag=15 |
| 0:08 | paket |  | toast |
| 0:08 | väntar | notis:🔥 Varmt och skönt i skjulet trots kylan | 🔥 Varmt och skönt i skjulet trots kylan. |
| 0:08 | väntar | du | Mamma kommer klockan tre. Skylten med mitt namn ska upp på dörren. |
| 0:11 | målruta |  | Skylten med mitt namn på dörren |
| 0:14 | sak | du | Mamma kommer klockan tre. Skylten med mitt namn ska upp på dörren. |
| 0:14 | pil |  | Skylten med mitt namn på dörren |
| 0:14 | notis | tanke | 💭 Mamma kommer klockan tre. Skylten med mitt namn ska upp på dörren. |
| 0:14 | röst | du | Mamma kommer klockan tre. Skylten med mitt namn ska upp på dörren. · MÅL |
| 0:14 | nick |  | nick:126 |
| 0:15 | poolTom | du | 4 repliker använda |
| 0:20 | klar | du | Mamma kommer klockan tre. Skylten med mitt namn ska upp på dörren. |
| 0:20 | sak | notis:morgon | Webbshopen: 2 paket i natt · +2 212 kr · Ali vill ha idag: Designvas i röd PETG · +50 % |
| 0:20 | notis |  | 2 paket i natt · +2 212 kr |
| 0:20 | notis |  | Designvas i röd PETG · +50 % |
| 0:25 | klar | notis:morgon | Webbshopen: 2 paket i natt · +2 212 kr · Ali vill ha idag: Designvas i röd PETG · +50 % |
| 0:29 | morgonkort | 🏆 Du är hemma | 🏆 Du är hemma · Du klarade det den 24 december. Från hobo dweller vid en soptipp till godsägare och folkbokförd. Mamma är imponerad. Pappa log. Spelet fortsätter – bygg vidare så länge du vill. |
| 0:38 | sak | du | Nu vet Skatteverket att jag bor HÄR. Skjulet är fortfarande ett skjul. |
| 0:38 | kvallsrad | du | Nu vet Skatteverket att jag bor HÄR. Skjulet är fortfarande ett skjul. |
| 0:39 | klar | du | Nu vet Skatteverket att jag bor HÄR. Skjulet är fortfarande ett skjul. |
| 0:41 | struken | notis:🌇 Klockan är 21. Ali slår igen luckan.  | 🌇 Klockan är 21. Ali slår igen luckan. Dagens jobb är klart – gå in i skjulet och sov i sängen. |
| 0:41 | struken | notis:📔 Prestation: Posten hittar hit · +3 re | 📔 Prestation: Posten hittar hit · +3 respekt |
| 0:41 | struken | notis:🔥 Varmt och skönt i skjulet trots kylan | 🔥 Varmt och skönt i skjulet trots kylan. |
| 0:45 | tanke | du | Skylten sitter på dörren. Simulering, Soptippsvägen 1. |
| 0:45 | väntar | du | Skylten sitter på dörren. Simulering, Soptippsvägen 1. |
| 0:45 | sak | du | Skylten sitter på dörren. Simulering, Soptippsvägen 1. |
| 0:45 | notis | tanke | 💭 Skylten sitter på dörren. Simulering, Soptippsvägen 1. |
| 0:45 | röst | du | Skylten sitter på dörren. Simulering, Soptippsvägen 1. · REAKTION |
| 0:45 | händelse | malKlart | id=m22-tand-skylten del=Dag 22 – Jul på Soptippsvägen 1 nasta=m22-oppna-dorren-gasterna |
| 0:45 | bekräftelse | du | plats |
| 0:45 | väntar | du | Skylten sitter. Nu tar jag emot mamma vid dörren. |
| 0:45 | MÅL |  | Ta emot mamma |
| 0:45 | väntar | mamma | Jag kommer kl 15 och hämtar dig. Pappa kör. Var redo. |
| 0:47 | målruta |  | Ta emot mamma |
| 0:49 | kvittens-bock |  | ✓ Skylten med mitt namn på dörren |
| 0:49 | klar | du | Skylten sitter på dörren. Simulering, Soptippsvägen 1. |
| 0:51 | sak | du | Skylten sitter. Nu tar jag emot mamma vid dörren. |
| 0:51 | pil |  | Ta emot mamma |
| 0:51 | notis | tanke | 💭 Skylten sitter. Nu tar jag emot mamma vid dörren. |
| 0:51 | röst | du | Skylten sitter. Nu tar jag emot mamma vid dörren. · MÅL |
| 0:55 | klar | du | Skylten sitter. Nu tar jag emot mamma vid dörren. |
| 0:59 | väntar | du | tillbakablick vadet |
| 1:04 | brott | TRÄNGSEL 2 | "Jag kommer kl 15 och hämtar dig. Pappa kör. Var re" 7.9 s efter förra meddelandet, 19.0 s efter en klar uppgift |
| 1:04 | sak | mamma | Jag kommer kl 15 och hämtar dig. Pappa kör. Var redo. |
| 1:04 | sms | mamma | Jag kommer kl 15 och hämtar dig. Pappa kör. Var redo. |
| 1:04 | sms-bubbla | mamma | Jag kommer kl 15 och hämtar dig. Pappa kör. Var redo. |
| 1:04 | röst | mamma | Jag kommer kl 15 och hämtar dig. Pappa kör. Var redo. · STORY |
| 1:08 | klar | mamma | Jag kommer kl 15 och hämtar dig. Pappa kör. Var redo. |
| 1:15 | tillbakablick | du | vadet |
| 1:16 | väntar | mamma | Det gör du alltid. |
| 1:19 | tanke | du | En bil svänger in vid grinden. |
| 1:19 | väntar | du | En bil svänger in vid grinden. |
| 1:19 | sak | du | En bil svänger in vid grinden. |
| 1:19 | notis | tanke | 💭 En bil svänger in vid grinden. |
| 1:19 | röst | du | En bil svänger in vid grinden. · REAKTION |
| 1:21 | klar | du | En bil svänger in vid grinden. |
| 1:23 | paket |  | replik |
| 1:23 | väntar | bengt | Pappas. Han hade velat att nån använde den. HMPF. |
| 1:25 | väntar | bengt | Pappa grävde här bakom i hela sitt liv. Du har gjort mer på ett halvår. HMPF. |
| 1:25 | skratt | du | Bengt-Åke mjuknar |
| 1:29 | ljud | bom | Bommen fälls upp (hoger) |
| 1:31 | sak | mamma | Det gör du alltid. |
| 1:31 | röst | mamma | Det gör du alltid. · STORY |
| 1:33 | klar | mamma | Det gör du alltid. |
| 2:12 | skratt | du | falsk tuta |
| 2:15 | poolTom | du | 5 repliker använda |
| 2:39 | väntar | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått vedkamin. Det är stort, Gunnar. |
| 2:39 | radio | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått vedkamin. Det är stort, Gunnar. |
| 2:39 | skratt | du | Radio-Kjelle |
| 2:39 | sak | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått vedkamin. Det är stort, Gunnar. |
| 2:39 | notis |  | 📻 Radio Tippen: Radio Tippen, Kjelle här. Skjulet vid tippen har fått vedkamin. Det är stort, Gunnar. |
| 2:39 | röst | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått vedkamin. Det är stort, Gunnar. · REAKTION |
| 2:47 | klar | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått vedkamin. Det är stort, Gunnar. |
| 3:01 | väntar | rolf | Chefen har köpt en kaffemaskin som pratar. Den sa "god morgon Rolf". Ja litar inte på den. /R |
| 3:08 | röst | rolf | Goddag … ja. Ja har kavaj. Fråga int. · STORY |
| 3:13 | röst | ali | Habibi. Roboten säger god jul. Jag lärde den. Säg inget till min fru – hon är här. · STORY |
| 3:21 | röst | berattare | Lasse har en ny termos. Den håller värmen i nitton timmar. Han har testat. Gunnar säger: "Vanilj." · STORY |
| 3:27 | röst | berattare | Bengt-Åke ställer en gran från egen skog i hörnet. Han går inte. · STORY |
| 3:33 | röst | berattare | HMPF. God jul. · STORY |
| 3:36 | röst | bror | Den är inte från mig. Den låg utanför. Typ. · STORY |
| 3:42 | röst | mamma | Jag skulle hämta dig. · STORY |
| 3:47 | röst | mamma | Det är så STÄDAT! · STORY |
| 3:51 | röst | mamma | Vi stannar. Pappa, hämta granen. · STORY |
| 3:57 | röst | pappa | Jaha. · STORY |
| 4:01 | röst | pappa | Taket håller i alla fall. · STORY |
| 4:06 | röst | pappa | Ja ja. Det här kunde varit värre. · STORY |
| 4:11 | röst | berattare | Skinkan från augusti. Granris i en vas. · STORY |
| 4:18 | röst | berattare | Rolf på trummor med två kastruller. Lasse och Gunnar på printade elgitarrer. Det är högt. Det är bra. · STORY |
| 4:29 | röst | berattare | Mamma har med sig en prinsesstårta i stället för skinkan från augusti. · STORY |
| 4:32 | röst | rolf | …Dä ä fredag nånstans. · STORY |
| 4:37 | röst | pappa | Ja ska fatta mej kort. · STORY |
| 4:43 | röst | pappa | Scania byggde sin första lastbil nittonhundraelva. · STORY |
| 4:50 | röst | pappa | Djurgården har vunnit SM tolv gånger. · STORY |
| 4:56 | röst | pappa | Skinkan har legat i frysen sen augusti. · STORY |
| 5:06 | röst | pappa | Ja … är stolt över dej. Aha. Vad lugnt då. · STORY |
| 5:12 | röst | berattare | Mamma gråter. · STORY |
| 5:17 | paket |  | replik → lapp → ge |
| 5:17 | väntar | mamma | Den här är till dig. Öppna den nu. |
| 5:17 | väntar | mamma | Du sa att du skulle fira jul ensam. Jag är glad att du ljög. Kram, Mamma |
| 5:17 | väntar |  | (läget ändras) |
| 5:17 | händelse | malKlart | id=m22-oppna-dorren-gasterna del=Dag 22 – Jul på Soptippsvägen 1 nasta=steg128 |
| 5:17 | bekräftelse | du | plats |
| 5:17 | poolTom | du | 5 repliker använda |
| 5:17 | väntar | du | . |
| 5:18 | MÅL |  | (inga mål) |
| 5:18 | sak | du | . |
| 5:18 | röst | du | . · MÅL |

<details><summary>Botens handlingar dag 15</summary>

- 0:00 — dag 15 börjar — (38483 kr)
- 0:08 popup: "FORTSÄTT" (38483 kr)
- 0:25 gå till Rolfs postlåda (29 m) (38483 kr)
- 0:33 panel: "En lapp från Rolf
Lite olaglig" (38483 kr)
- 0:33 startmenyn syns – fortsätter spelet (38483 kr)
- 0:45 gå till dörren (namnskylten) (50 m) (38483 kr)
- 3:08 gå till mamma vid grinden (35 m) (38483 kr)

</details>
