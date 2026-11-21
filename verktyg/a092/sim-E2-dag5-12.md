# Simulering kapitel 1 – körning 1

*Gjord 2026-11-21 01:44 med `verktyg/sim-kapitel1.mjs` + `verktyg/sim-bot.js` (punkt AX). Boten går 4,5 m/s, läser 15 tecken/s, trampar, vevar, plockar, printar, köper och säljer via spelets egna funktioner. Tiderna är speltid.*

## Sammanfattning

| Dag | Minuter | Väntan | Prints (totalt) | Kr vid sömn | Bär | Trivsel |
|---|---|---|---|---|---|---|
| 5 | 12.1 | 2 % | 99 | 7052 | 16 | 136 |
| 6 | 9.0 | 2 % | 111 | 7188 | 16 | 148 |
| 7 | 5.5 | 2 % | 115 | 6136 | 16 | 142 |
| 8 | 11.7 | 4 % | 135 | 15222 | 16 | 170 |
| 9 | 10.1 | 6 % | 148 | 21956 | 16 | 174 |
| 10 | 2.5 | 3 % | 148 | 21054 | 16 | 194 |
| 11 | 5.0 | 0 % | 151 | 8769 | 16 | 189 |
| 12 | 0.0 | 0 % | 151 | 9052 | 16 | 189 |

## Flaskhalskartan (EE)

| Dag | bara | mala | trampa | strom | skrivare | inkomst | Upplåst |
|---|---|---|---|---|---|---|---|
| 5 | 6 | 41 | 0 | 1 | 293 | 0 | trim_skrivare3 (skrivare, 0:52), vindsnurra3 (strom, 9:22, reserv) |
| 6 | 3 | 15 | 0 | 0 | 147 | 0 | turbomotor (mala, 6:50), sol (strom, 7:04, reserv) |
| 7 | 2 | 7 | 0 | 0 | 76 | 0 |  |
| 8 | 3 | 13 | 0 | 0 | 53 | 0 | skrivare3 (skrivare, 4:08, reserv), magnet (bara, 6:05), bank (strom, 10:01, reserv) |
| 9 | 2 | 3 | 0 | 0 | 426 | 0 | solpark (strom, 4:36, reserv) |
| 10 | 1 | 7 | 0 | 0 | 62 | 0 |  |
| 11 | 0 | 0 | 0 | 0 | 187 | 0 |  |
| 12 | 0 | 0 | 0 | 0 | 0 | 0 |  |

TIDIG: 0 · FAST: 0 · upplåst av reserven (målet väntade 3 min): 5

**SKRATT:** 73 roliga ögonblick på 56 min (13.1 per 10 min, mål minst 5)

**Köp:**

- dag 5 2:20 – webbdator (300 kr)
- dag 5 3:15 – fonster (90 kr)
- dag 5 3:43 – golv (140 kr)
- dag 5 4:48 – taklampa (90 kr)
- dag 5 9:34 – vindsnurra (133 kr)
- dag 6 1:58 – petgkvarn (1200 kr)
- dag 6 7:34 – sol (400 kr)
- dag 6 8:18 – fagelskramma (40 kr)
- dag 7 0:43 – skrivarepetg (1500 kr)
- dag 7 1:52 – n2_vas (600 kr)
- dag 7 2:36 – saljlada (400 kr)
- dag 8 4:36 – skrivare3 (3500 kr)
- dag 8 6:18 – magnet (2400 kr)
- dag 8 10:29 – bank (800 kr)
- dag 8 11:21 – hylla (150 kr)
- dag 9 0:40 – n2_hjalm (2300 kr)
- dag 9 7:32 – solpark (2400 kr)
- dag 9 9:20 – petgtorn (600 kr)
- dag 10 0:33 – tapeter (800 kr)
- dag 10 2:09 – spis (360 kr)
- dag 11 1:11 – kolfkvarn (6000 kr)
- dag 11 2:49 – kolfband (10500 kr)

## Storykedjan (kvittens → varför → nytt mål)

| Dag | Tid | Id | Kvittens | Varför | Nytt mål | Tid till målet |
|---|---|---|---|---|---|---|
| 7 | 3:13 | saljlada | Jag hämtar varje morgon. Du lägger i, jag betalar. |  | Vaserna i lådan. Ali hämtar själv. | 0.8 s |

## Hur länge nya mål väntade (från att förra målet blev klart till att det nya syntes i målrutan)

Snitt 4.5 s · max 20.9 s · över 4 s: 10 · över 8 s: 10 av 40

## Flaggor (44)

- **KROCK** dag 5 11:04: 1.4 s mellan [bubbla] "Ja kommer hit varje kväll. Förr va vi två på bänken." och [bubbla] "TUUT! Hej grannen!"
- **RÖST AVBRUTEN** dag 6 0:31: mamma: 2.0 s kvar ← pappa: Jaså. Här bor du alltså.
- **SEN** dag 5 3:26: 64.8 s efter händelsen: kjelle: "Radio Tippen, Kjelle här. Skjulet vid tippen har börjat isolera. Och p"
- **SEN** dag 5 4:11: 35.8 s efter händelsen: ali: "Ali här. Fönster – printad. På riktigt. Jag har visat bilden för min f"
- **SEN** dag 6 4:07: 117.4 s efter händelsen: kjelle: "Radio Tippen, Kjelle här. Skjulet vid tippen har isolerade väggar nu. "
- **SEN** dag 6 5:27: 108.8 s efter händelsen: notis:PETG-kvarnen: den första rullen röd PETG: "PETG-kvarnen: den första rullen röd PETG är klar"
- **SEN** dag 6 6:02: 41.5 s efter händelsen: du: "En tandborste. Den har varit på fel ställe."
- **SEN** dag 7 1:49: 16.2 s efter händelsen: ali: "Ali här. Ännu en ritning som blev på riktigt: PETG-skrivare. Semesterk"
- **SEN** dag 10 0:44: 12.2 s efter händelsen: notis:📔 Prestation: Kajakmalaren · +3 respekt: "📔 Prestation: Kajakmalaren · +3 respekt"
- **SEN** dag 10 1:45: 18.6 s efter händelsen: värld:TUUT! Hej grannen!: "TUUT! Hej grannen!"
- **SEN** dag 11 4:25: 15.3 s efter händelsen: värld:TUUT! Hej grannen!: "TUUT! Hej grannen!"
- **SEN** dag 11 4:49: 23.2 s efter händelsen: notis:🌇 Klockan är 21. Ali slår igen luckan. : "🌇 Klockan är 21. Ali slår igen luckan. Dagens jobb är klart – gå in i"
- **PAUS** dag 5 5:05: 0.0 s paus före "Fullt i händerna."
- **PAUS** dag 5 6:48: 0.0 s paus före "📦 Paketet till Lasse på bussdepån ligger i postlå"
- **PAUS** dag 5 9:56: 0.0 s paus före "Dag 5 är slut. Nu vet en mås att jag bor HÄR. Peng"
- **PAUS** dag 6 2:54: 0.0 s paus före "🛒 Säckkärran är i verktygsraden – en tung sak i t"
- **PAUS** dag 6 4:44: 0.0 s paus före "📦 Paketet till En pensionär i Kiruna ligger i pos"
- **PAUS** dag 6 8:01: 0.0 s paus före "Den röda kvarnen drar mer än vinden orkar. Solen f"
- **PAUS** dag 7 5:13: 0.0 s paus före "Dag 7 är slut. Nu vet pappa att jag bor HÄR. Rygge"
- **PAUS** dag 8 11:28: 0.0 s paus före "En hylla. Jag har en hylla. Saker har en plats nu."
- **PAUS** dag 8 11:32: 0.0 s paus före "(nytt mål i rutan)"
- **PAUS** dag 8 11:33: 0.0 s paus före "Dag 8 är slut. Strömmen räcker inte till alla skri"
- **PAUS** dag 9 1:36: 0.0 s paus före "📦 Paketet till Ett kafé i Ystad ligger i postlåda"
- **PAUS** dag 9 9:51: 0.0 s paus före "Dag 9 är slut. Det drar kallt genom väggarna."
- **PAUS** dag 10 0:47: 0.0 s paus före "🧻 Bakväggen tapetserad. 3 kvar."
- **PAUS** dag 10 2:20: 0.0 s paus före "Varm mat. I skjulet. Mamma skulle inte tro det."
- **PAUS** dag 10 2:24: 0.0 s paus före "(nytt mål i rutan)"
- **PAUS** dag 10 2:24: 0.0 s paus före "Dag 10 är slut. I natt frös jag. Tolv dagar kvar."
- **PAUS** dag 11 0:00: 0.0 s paus före "🚧 Gärdesgården har flyttats ut! Du får utforska n"
- **PAUS** dag 11 0:18: 0.0 s paus före "Skylten vid vägen är uppgraderad."
- **PAUS** dag 11 4:34: 0.0 s paus före "📦 Paketet till Någon som bara skrev "hej" ligger "
- **UPPREPNING** dag 7 4:34: info:bra: "📦 1 saker i lådan · Ali hämtar i morgon bitti" (förra gången dag 7)
- **UPPREPNING** dag 7 5:11: info:bra: "📦 1 saker i lådan · Ali hämtar i morgon bitti" (förra gången dag 7)
- **UPPREPNING** dag 9 0:30: info:fel: "Göran snodde blomkruka." (förra gången dag 8)
- **FEL SIFFRA** dag 6 6:07: HUD visar 7 184 kr, du har 7364 kr
- **SEN KVITTENS** dag 6 8:55: 10.3 s sen: ”Göran har ett hem nu. Bättre än jag hade för en ve” (mål klart)
- **FLYTTAD EFTER STÄLL** dag 7 0:44: p:p12 har flyttat sig 0.04 m efter att den ställdes
- **SEN KVITTENS** dag 9 0:20: 2.3 s sen: ”Dag 8 är slut. Strömmen räcker inte till alla skr” (dagbok kvall8)
- **SEN KVITTENS** dag 11 0:16: 2.1 s sen: ”Dag 10 är slut. I natt frös jag. Tolv dagar kvar.” (dagbok kvall10)
- **TEMPO** dag 6 8:57: dag 6 tog 9.0 min (mål 10–15)
- **TEMPO** dag 7 5:27: dag 7 tog 5.5 min (mål 10–15)
- **TEMPO** dag 10 2:32: dag 10 tog 2.5 min (mål 10–15)
- **TEMPO** dag 11 4:59: dag 11 tog 5.0 min (mål 10–15)
- **TEMPO** dag 12 0:00: dag 12 tog 0.0 min (mål 10–15)

Sidfel: inga

## Dag 5

| Tid | Källa | Vem | Text |
|---|---|---|---|
| 0:00 | MÅL |  | Vänta på sopbilen. Den lämnar något. |
| 0:00 | MÅL |  | Vänta på sopbilen. Den lämnar något. |
| 0:01 | toast | guld | ✅ |
| 0:01 | händelse | printKlar | sak=pall n=7 |
| 0:02 | sak | du | (nytt mål i rutan) |
| 0:02 | pil |  | Vänta på sopbilen. Den lämnar något. |
| 0:02 | klar | du | (nytt mål i rutan) |
| 0:04 | händelse | tagitUrPrint | sak=pall n=1 |
| 0:05 | hjälp | kontroll | E: Ryggsäcken och kistan |
| 0:06 | händelse | printStart | sak=pall |
| 0:07 | väntar | info:fel | Göran snodde pall. |
| 0:07 | paket |  | tanke → tanke |
| 0:07 | tanke | du | HALLÅ! Den där måsen tog min grej! |
| 0:07 | väntar | du | HALLÅ! Den där måsen tog min grej! |
| 0:07 | tanke | du | Mamma hade rätt. Säg inget till henne. |
| 0:07 | väntar | du | Mamma hade rätt. Säg inget till henne. |
| 0:07 | paket |  | sms |
| 0:07 | väntar | rolf | Dä ä Göran. Han ä från 2014. Han tar int skräp, bara grejer som e fina. MVH ROLF |
| 0:08 | sak | info:fel | Göran snodde pall. |
| 0:08 | kvitto-visas | info:fel | Göran snodde pall. |
| 0:08 | toast | fel | Göran snodde pall. |
| 0:10 | klar | info:fel | Göran snodde pall. |
| 0:11 | toast | guld | ✅ |
| 0:11 | händelse | printKlar | sak=pall n=8 |
| 0:12 | händelse | tagitUrPrint | sak=pall n=1 |
| 0:19 | aliSalt | ali | 220 |
| 0:20 | sak | du | HALLÅ! Den där måsen tog min grej! |
| 0:20 | notis | tanke | 💭 HALLÅ! Den där måsen tog min grej! |
| 0:20 | röst | du | HALLÅ! Den där måsen tog min grej! · STORY |
| 0:23 | klar | du | HALLÅ! Den där måsen tog min grej! |
| 0:26 | paket |  | ge |
| 0:26 | väntar |  | (läget ändras) |
| 0:26 | skratt | du | falsk tuta |
| 0:32 | händelse | printStart | sak=pall |
| 0:32 | sak | du | Mamma hade rätt. Säg inget till henne. |
| 0:32 | notis | tanke | 💭 Mamma hade rätt. Säg inget till henne. |
| 0:32 | röst | du | Mamma hade rätt. Säg inget till henne. · STORY |
| 0:35 | klar | du | Mamma hade rätt. Säg inget till henne. |
| 0:36 | väntar | mamma | Det har ringt en karl som heter Rolf och frågat om du gillar korv. Vem är det? Varför har han mitt nummer? |
| 0:37 | toast | guld | ✅ |
| 0:37 | händelse | printKlar | sak=pall n=9 |
| 0:38 | händelse | tagitUrPrint | sak=pall n=1 |
| 0:39 | väntar | värld:TUUT! Hej grannen! | TUUT! Hej grannen! |
| 0:45 | aliSalt | ali | 209 |
| 0:46 | sak |  | (läget ändras) |
| 0:46 | brev | rolf | rolf:3 |
| 0:46 | klar |  | (läget ändras) |
| 0:48 | väntar | foto | Göran. Tjuv. |
| 0:48 | paket |  | tanke |
| 0:48 | tanke | du | Okej, Göran. Nästa gång är jag beredd. |
| 0:48 | väntar | du | Okej, Göran. Nästa gång är jag beredd. |
| 0:50 | sak | värld:TUUT! Hej grannen! | TUUT! Hej grannen! |
| 0:50 | bubbla |  | TUUT! Hej grannen! |
| 0:52 | upplåst | skrivare | trim_skrivare3 |
| 0:52 | brott | UPPLÅST | trim_skrivare3 (skrivare 407 av 75) |
| 0:52 | händelse | upplast | id=trim_skrivare3 flask=skrivare |
| 0:52 | paket |  | tanke → sms |
| 0:52 | tanke | du | Fortare. Den kan gå ännu fortare. Jag hör det på den. |
| 0:52 | väntar | du | Fortare. Den kan gå ännu fortare. Jag hör det på den. |
| 0:52 | väntar | ali | Ali här. Sista skrivartrimmen. Efter den går den inte att göra bättre. Då får du bygga en större. |
| 0:53 | klar | värld:TUUT! Hej grannen! | TUUT! Hej grannen! |
| 0:54 | väntar | rolf | Tjo. Flaket ä så trist. En tomte mä luva o skägg, kan du göra en sån? /Rolf 🎅​ |
| 0:54 | paket |  | ge |
| 0:54 | väntar |  | (läget ändras) |
| 0:54 | händelse | malKlart | id=rolf3-brev del=Dag 5 – Tätt och mysigt nasta=rolf3-printa |
| 0:54 | väntar | du | Printa trädgårdstomte till flaket. |
| 0:55 | MÅL |  | Printa trädgårdstomte till flaket |
| 0:55 | sak | rolf | Tjo. Flaket ä så trist. En tomte mä luva o skägg, kan du göra en sån? /Rolf 🎅​ |
| 0:55 | lapp | Brev från Rolf | Tjo. Flaket ä så trist. En tomte mä luva o skägg, kan du göra en sån? /Rolf 🎅​ |
| 0:55 | röst | rolf | Tjo. Flaket ä så trist. En tomte mä luva o skägg, kan du göra en sån? /Rolf 🎅​ · STORY |
| 0:58 | väntar | bror | Pappa har en spellista på Youtube som heter "Sopbilar". 34 videor. Han säger att en Scania V8 är "ren musik". |
| 0:58 | målruta |  | Printa trädgårdstomte till flaket |
| 0:58 | händelse | printStart | sak=tomte |
| 0:58 | händelse | malKlart | id=rolf3-printa del=Dag 5 – Tätt och mysigt nasta=rolf3-ge |
| 0:58 | väntar | du | Ge Rolf trädgårdstomte till flaket. |
| 0:59 | MÅL |  | Ge Rolf trädgårdstomte till flaket |
| 1:01 | klar | rolf | Tjo. Flaket ä så trist. En tomte mä luva o skägg, kan du göra en sån? /Rolf 🎅​ |
| 1:01 | händelse | brevLast | id=rolf:3 |
| 1:02 | målruta |  | Ge Rolf trädgårdstomte till flaket |
| 1:02 | kvittens-bock |  | ✓ Printa trädgårdstomte till flaket |
| 1:03 | struken | du | Printa trädgårdstomte till flaket. |
| 1:03 | sak |  | (läget ändras) |
| 1:04 | klar |  | (läget ändras) |
| 1:04 | sak | du | Ge Rolf trädgårdstomte till flaket. |
| 1:04 | pil |  | Ge Rolf trädgårdstomte till flaket |
| 1:04 | röst | du | Ge Rolf trädgårdstomte till flaket. · MÅL |
| 1:04 | toast | guld | ✅ |
| 1:04 | händelse | printKlar | sak=tomte n=1 |
| 1:05 | händelse | tagitUrPrint | sak=tomte n=1 |
| 1:07 | klar | du | Ge Rolf trädgårdstomte till flaket. |
| 1:10 | händelse | lagtIPostlada | sak=tomte rolf=3 jobb=false |
| 1:10 | struken | kedja | rolf3 |
| 1:10 | händelse | malKlart | id=rolf3-ge del=Dag 5 – Tätt och mysigt nasta=n4-isolera-de-sista |
| 1:10 | väntar | du | Två väggar kvar i skjulet. Sen är det tätt. |
| 1:10 | målruta |  | Isolera de sista väggarna · 2/4 |
| 1:10 | MÅL |  | Isolera de sista väggarna · 2/4 |
| 1:10 | sak | du | Två väggar kvar i skjulet. Sen är det tätt. |
| 1:10 | pil |  | Isolera de sista väggarna · 2/4 |
| 1:10 | notis | tanke | 💭 Två väggar kvar i skjulet. Sen är det tätt. |
| 1:10 | röst | du | Två väggar kvar i skjulet. Sen är det tätt. · MÅL |
| 1:11 | nick |  | nick:53 |
| 1:14 | klar | du | Två väggar kvar i skjulet. Sen är det tätt. |
| 1:14 | kvittens-bock |  | ✓ Ge Rolf trädgårdstomte till flaket |
| 1:19 | händelse | printStart | sak=byggsats:vaggar |
| 1:22 | sak | foto | Göran. Tjuv. |
| 1:22 | foto | du | Göran. Tjuv. |
| 1:23 | händelse | printKlar | sak=byggsats:vaggar n=1 |
| 1:23 | toast | guld | ✅ |
| 1:24 | händelse | tagitUrPrint | sak=byggsats:vaggar n=1 |
| 1:25 | klar | foto | Göran. Tjuv. |
| 1:28 | väntar | info:guld | 🧱 Höger vägg klar. 1 kvar. |
| 1:28 | sak | info:guld | 🧱 Höger vägg klar. 1 kvar. |
| 1:28 | kvitto-visas | info:guld | 🧱 Höger vägg klar. 1 kvar. |
| 1:28 | toast | guld | 🧱 Höger vägg klar. 1 kvar. |
| 1:30 | klar | info:guld | 🧱 Höger vägg klar. 1 kvar. |
| 1:46 | sak | du | Okej, Göran. Nästa gång är jag beredd. |
| 1:46 | notis | tanke | 💭 Okej, Göran. Nästa gång är jag beredd. |
| 1:46 | röst | du | Okej, Göran. Nästa gång är jag beredd. · STORY |
| 1:49 | klar | du | Okej, Göran. Nästa gång är jag beredd. |
| 1:54 | händelse | printStart | sak=byggsats:vaggar |
| 1:58 | sak | du | Fortare. Den kan gå ännu fortare. Jag hör det på den. |
| 1:58 | notis | tanke | 💭 Fortare. Den kan gå ännu fortare. Jag hör det på den. |
| 1:58 | röst | du | Fortare. Den kan gå ännu fortare. Jag hör det på den. · STORY |
| 1:58 | händelse | printKlar | sak=byggsats:vaggar n=1 |
| 1:58 | toast | guld | ✅ |
| 1:59 | händelse | tagitUrPrint | sak=byggsats:vaggar n=1 |
| 2:02 | klar | du | Fortare. Den kan gå ännu fortare. Jag hör det på den. |
| 2:03 | väntar | info:guld | 🧱 Skjulet är tätt! |
| 2:03 | sak | info:guld | 🧱 Skjulet är tätt! |
| 2:03 | kvitto-visas | info:guld | 🧱 Skjulet är tätt! |
| 2:03 | toast | guld | 🧱 Skjulet är tätt! |
| 2:03 | händelse | malKlart | id=n4-isolera-de-sista del=Dag 5 – Tätt och mysigt nasta=dator |
| 2:03 | struken | kedja | vaggar |
| 2:03 | väntar | du | Alis pappas dator. Med den kan jag sälja på nätet. |
| 2:03 | MÅL |  | Köp Alis pappas gamla dator |
| 2:05 | klar | info:guld | 🧱 Skjulet är tätt! |
| 2:07 | målruta |  | Köp Alis pappas gamla dator |
| 2:07 | kvittens-bock |  | ✓ Isolera de sista väggarna · 4/4 |
| 2:07 | sak | du | Alis pappas dator. Med den kan jag sälja på nätet. |
| 2:07 | pil |  | Köp Alis pappas gamla dator |
| 2:07 | notis | tanke | 💭 Alis pappas dator. Med den kan jag sälja på nätet. |
| 2:07 | röst | du | Alis pappas dator. Med den kan jag sälja på nätet. · MÅL |
| 2:08 | nick |  | nick:54 |
| 2:11 | klar | du | Alis pappas dator. Med den kan jag sälja på nätet. |
| 2:13 | väntar | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har börjat isolera. Och pall. Det är stort, Gunnar. |
| 2:13 | radio | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har börjat isolera. Och pall. Det är stort, Gunnar. |
| 2:13 | skratt | du | Radio-Kjelle |
| 2:19 | toast | guld | 🖥️ Datorn är din – ställ den i skjulet |
| 2:19 | händelse | kopt | sak=webbdator |
| 2:19 | röst | ali | Pappas gamla dator. Den har ett modem. Det låter som en fax som gråter. Men du kommer ut på nätet. · STORY |
| 2:19 | butiksbubbla | ali | Pappas gamla dator. Den har ett modem. Det låter som en fax som gråter. Men du kommer ut på nätet. |
| 2:28 | händelse | printStart | sak=byggsats:webbdator |
| 2:28 | händelse | printKlar | sak=byggsats:webbdator n=1 |
| 2:28 | toast | guld | ✅ |
| 2:29 | händelse | tagitUrPrint | sak=byggsats:webbdator n=1 |
| 2:29 | paket |  | tanke |
| 2:29 | tanke | du | Jaha, Rolf har hämtat trädgårdstomte till flaket. |
| 2:29 | väntar | du | Jaha, Rolf har hämtat trädgårdstomte till flaket. |
| 2:29 | sak | du | Jaha, Rolf har hämtat trädgårdstomte till flaket. |
| 2:29 | notis | tanke | 💭 Jaha, Rolf har hämtat trädgårdstomte till flaket. |
| 2:29 | röst | du | Jaha, Rolf har hämtat trädgårdstomte till flaket. · REAKTION |
| 2:33 | klar | du | Jaha, Rolf har hämtat trädgårdstomte till flaket. |
| 2:35 | händelse | placerat | sak=webbdator |
| 2:35 | paket |  | tanke |
| 2:35 | tanke | du | En webbshop. Från ett skjul. Med modem. Varför inte. |
| 2:35 | väntar | du | En webbshop. Från ett skjul. Med modem. Varför inte. |
| 2:35 | händelse | malKlart | id=dator del=Dag 5 – Tätt och mysigt nasta=lampskarm |
| 2:35 | väntar | du | En lampskärm. Folk betalar för ljus som ser fint ut. |
| 2:35 | MÅL |  | Printa en lampskärm att sälja |
| 2:35 | målruta |  | Printa en lampskärm att sälja |
| 2:35 | sak | du | En lampskärm. Folk betalar för ljus som ser fint ut. |
| 2:35 | pil |  | Printa en lampskärm att sälja |
| 2:35 | notis | tanke | 💭 En lampskärm. Folk betalar för ljus som ser fint ut. |
| 2:35 | röst | du | En lampskärm. Folk betalar för ljus som ser fint ut. · MÅL |
| 2:36 | nick |  | nick:55 |
| 2:39 | kvittens-bock |  | ✓ Ställ datorn i skjulet |
| 2:39 | väntar | rolf | Kajsa la en död mus på min kudde. De e kärlek. Hon får lax ikväll. /R |
| 2:40 | klar | du | En lampskärm. Folk betalar för ljus som ser fint ut. |
| 2:48 | sak | ali | Ali här. Sista skrivartrimmen. Efter den går den inte att göra bättre. Då får du bygga en större. |
| 2:48 | sms | ali | Ali här. Sista skrivartrimmen. Efter den går den inte att göra bättre. Då får du bygga en större. |
| 2:48 | sms-bubbla | ali | Ali här. Sista skrivartrimmen. Efter den går den inte att göra bättre. Då får du bygga en större. |
| 2:48 | röst | ali | Ali här. Sista skrivartrimmen. Efter den går den inte att göra bättre. Då får du bygga en större. · STORY |
| 2:51 | skratt | du | falsk tuta |
| 2:51 | väntar | värld:TUUT TUUT! | TUUT TUUT! |
| 2:55 | händelse | printStart | sak=lampskarm |
| 2:56 | klar | ali | Ali här. Sista skrivartrimmen. Efter den går den inte att göra bättre. Då får du bygga en större. |
| 3:01 | toast | guld | ✅ |
| 3:01 | händelse | printKlar | sak=lampskarm n=1 |
| 3:01 | händelse | malKlart | id=lampskarm del=Dag 5 – Tätt och mysigt nasta=mysigt |
| 3:01 | väntar | du | Skjulet ska bli mysigt på riktigt. Det är mitt hem nu. |
| 3:01 | MÅL |  | Gör det mysigt · trivsel 104/130 |
| 3:01 | målruta |  | Gör det mysigt · trivsel 104/130 |
| 3:01 | sak | du | Skjulet ska bli mysigt på riktigt. Det är mitt hem nu. |
| 3:01 | pil |  | Gör det mysigt · trivsel 104/130 |
| 3:01 | notis | tanke | 💭 Skjulet ska bli mysigt på riktigt. Det är mitt hem nu. |
| 3:01 | röst | du | Skjulet ska bli mysigt på riktigt. Det är mitt hem nu. · MÅL |
| 3:01 | händelse | tagitUrPrint | sak=lampskarm n=1 |
| 3:02 | nick |  | nick:56 |
| 3:05 | kvittens-bock |  | ✓ Printa en lampskärm att sälja |
| 3:06 | klar | du | Skjulet ska bli mysigt på riktigt. Det är mitt hem nu. |
| 3:11 | struken | värld:TUUT TUUT! | TUUT TUUT! |
| 3:15 | toast | guld | 3D-modell köpt – printa fönster på skrivaren |
| 3:15 | händelse | kopt | sak=fonster |
| 3:23 | händelse | printStart | sak=byggsats:fonster |
| 3:26 | sak | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har börjat isolera. Och pall. Det är stort, Gunnar. |
| 3:26 | notis |  | 📻 Radio Tippen: Radio Tippen, Kjelle här. Skjulet vid tippen har börjat isolera. Och pall. Det är stort, Gunnar. |
| 3:26 | röst | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har börjat isolera. Och pall. Det är stort, Gunnar. · REAKTION |
| 3:27 | toast | bra | Del 1 av 2 klar |
| 3:30 | händelse | printKlar | sak=byggsats:fonster n=1 |
| 3:30 | toast | guld | ✅ |
| 3:31 | händelse | tagitUrPrint | sak=byggsats:fonster n=1 |
| 3:31 | paket |  | sms |
| 3:31 | väntar | ali | Ali här. Fönster – printad. På riktigt. Jag har visat bilden för min fru tre gånger. |
| 3:34 | klar | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har börjat isolera. Och pall. Det är stort, Gunnar. |
| 3:42 | toast | guld | 3D-modell köpt – printa trägolv på skrivaren |
| 3:42 | händelse | kopt | sak=golv |
| 3:51 | väntar | värld:Mjau. | Mjau. |
| 3:59 | sak | du | En webbshop. Från ett skjul. Med modem. Varför inte. |
| 3:59 | notis | tanke | 💭 En webbshop. Från ett skjul. Med modem. Varför inte. |
| 3:59 | röst | du | En webbshop. Från ett skjul. Med modem. Varför inte. · STORY |
| 4:03 | klar | du | En webbshop. Från ett skjul. Med modem. Varför inte. |
| 4:05 | händelse | printStart | sak=byggsats:golv |
| 4:08 | toast | bra | Del 1 av 3 klar |
| 4:11 | sak | ali | Ali här. Fönster – printad. På riktigt. Jag har visat bilden för min fru tre gånger. |
| 4:11 | sms | ali | Ali här. Fönster – printad. På riktigt. Jag har visat bilden för min fru tre gånger. |
| 4:11 | sms-bubbla | ali | Ali här. Fönster – printad. På riktigt. Jag har visat bilden för min fru tre gånger. |
| 4:11 | röst | ali | Ali här. Fönster – printad. På riktigt. Jag har visat bilden för min fru tre gånger. · REAKTION |
| 4:12 | toast | bra | Del 2 av 3 klar |
| 4:15 | händelse | printKlar | sak=byggsats:golv n=1 |
| 4:15 | toast | guld | ✅ |
| 4:16 | händelse | tagitUrPrint | sak=byggsats:golv n=1 |
| 4:18 | klar | ali | Ali här. Fönster – printad. På riktigt. Jag har visat bilden för min fru tre gånger. |
| 4:20 | struken | värld:Mjau. | Mjau. |
| 4:20 | väntar | info:guld | Trägolv på plats! Trivsel +8 · Ali betalar nu +0 % |
| 4:20 | sak | info:guld | Trägolv på plats! Trivsel +8 · Ali betalar nu +0 % |
| 4:20 | kvitto-visas | info:guld | Trägolv på plats! Trivsel +8 · Ali betalar nu +0 % |
| 4:20 | toast | guld | Trägolv på plats! Trivsel +8 · Ali betalar nu +0 % |
| 4:22 | klar | info:guld | Trägolv på plats! Trivsel +8 · Ali betalar nu +0 % |
| 4:30 | händelse | printStart | sak=pall |
| 4:35 | toast | guld | ✅ |
| 4:35 | händelse | printKlar | sak=pall n=10 |
| 4:36 | händelse | tagitUrPrint | sak=pall n=1 |
| 4:41 | händelse | placerat | sak=pall |
| 4:47 | toast | guld | 3D-modell köpt – printa taklampa med skärm på skrivaren |
| 4:47 | händelse | kopt | sak=taklampa |
| 5:02 | väntar | mamma | Det har ringt en karl som heter Rolf och frågat om du gillar korv. Vem är det? Varför har han mitt nummer? |
| 5:02 | tanke | du | En husvagn mitt i tippen. Och grinden är låst. |
| 5:02 | väntar | du | En husvagn mitt i tippen. Och grinden är låst. |
| 5:02 | sak | du | En husvagn mitt i tippen. Och grinden är låst. |
| 5:02 | notis | tanke | 💭 En husvagn mitt i tippen. Och grinden är låst. |
| 5:02 | röst | du | En husvagn mitt i tippen. Och grinden är låst. · REAKTION |
| 5:02 | väntar | info:fel | Fullt i händerna. |
| 5:05 | klar | du | En husvagn mitt i tippen. Och grinden är låst. |
| 5:05 | sak | info:fel | Fullt i händerna. |
| 5:05 | kvitto-visas | info:fel | Fullt i händerna. |
| 5:05 | toast | fel | Fullt i händerna. |
| 5:07 | klar | info:fel | Fullt i händerna. |
| 5:13 | händelse | printStart | sak=byggsats:taklampa |
| 5:15 | händelse | printKlar | sak=byggsats:taklampa n=1 |
| 5:15 | toast | guld | ✅ |
| 5:16 | händelse | tagitUrPrint | sak=byggsats:taklampa n=1 |
| 5:20 | väntar | info:guld | Taklampa med skärm på plats! Trivsel +6 · Ali betalar nu +0 % |
| 5:20 | sak | info:guld | Taklampa med skärm på plats! Trivsel +6 · Ali betalar nu +0 % |
| 5:20 | kvitto-visas | info:guld | Taklampa med skärm på plats! Trivsel +6 · Ali betalar nu +0 % |
| 5:20 | toast | guld | Taklampa med skärm på plats! Trivsel +6 · Ali betalar nu +0 % |
| 5:22 | klar | info:guld | Taklampa med skärm på plats! Trivsel +6 · Ali betalar nu +0 % |
| 5:24 | scenInfo | du | Lampan tänds |
| 5:30 | händelse | printStart | sak=pall |
| 5:33 | tanke | du | Det börjar kännas som ett hem. På riktigt. |
| 5:33 | notis | tanke | 💭 Det börjar kännas som ett hem. På riktigt. |
| 5:33 | röst | du | Det börjar kännas som ett hem. På riktigt. · REAKTION |
| 5:35 | toast | guld | ✅ |
| 5:35 | händelse | printKlar | sak=pall n=11 |
| 5:36 | händelse | tagitUrPrint | sak=pall n=1 |
| 5:37 | händelse | malKlart | id=mysigt del=Dag 5 – Tätt och mysigt nasta=vind5 |
| 5:37 | lapp | 📔 Dagbok | Lampan lyser. Pappa ska visst komma förbi i morgon. |
| 5:37 | meddelande | du | Lampan lyser. Pappa ska visst komma förbi i morgon. |
| 5:37 | dagbokkort | du | Lampan lyser. Pappa ska visst komma förbi i morgon. |
| 5:37 | väntar | du | En tredje vindsnurra på taket. Skrivare M drar mycket. |
| 5:37 | målruta |  | Printa och sälj |
| 5:37 | MÅL |  | Printa och sälj |
| 5:37 | röst | du | Lampan lyser. Pappa ska visst komma förbi i morgon. · STORY |
| 5:44 | händelse | brevLast | id=klart |
| 5:46 | sak | du | En tredje vindsnurra på taket. Skrivare M drar mycket. |
| 5:46 | pil |  | Printa och sälj |
| 5:46 | notis | tanke | 💭 En tredje vindsnurra på taket. Skrivare M drar mycket. |
| 5:46 | röst | du | En tredje vindsnurra på taket. Skrivare M drar mycket. · MÅL |
| 5:47 | händelse | placerat | sak=pall |
| 5:50 | klar | du | En tredje vindsnurra på taket. Skrivare M drar mycket. |
| 5:58 | händelse | printStart | sak=kruka |
| 6:00 | toast | guld | ✅ |
| 6:00 | händelse | printKlar | sak=kruka n=50 |
| 6:01 | händelse | tagitUrPrint | sak=kruka n=1 |
| 6:03 | händelse | printStart | sak=kruka |
| 6:05 | toast | guld | ✅ |
| 6:05 | händelse | printKlar | sak=kruka n=51 |
| 6:06 | händelse | tagitUrPrint | sak=kruka n=1 |
| 6:08 | händelse | printStart | sak=nyckelring |
| 6:09 | toast | guld | ✅ |
| 6:09 | händelse | printKlar | sak=nyckelring n=24 |
| 6:10 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 6:23 | webb | du | packade 2 kruka |
| 6:26 | skratt | du | falsk tuta |
| 6:32 | webb | du | packade 1 nyckelring |
| 6:46 | väntar | info:bra | 📦 Paketet till Gun-Britt i Nässjö ligger i postlådan – Rolf tar det till posten |
| 6:46 | sak | info:bra | 📦 Paketet till Gun-Britt i Nässjö ligger i postlådan – Rolf tar det till posten |
| 6:46 | kvitto-visas | info:bra | 📦 Paketet till Gun-Britt i Nässjö ligger i postlådan – Rolf tar det till posten |
| 6:46 | toast | bra | 📦 Paketet till Gun-Britt i Nässjö ligger i postlådan – Rolf tar det till posten |
| 6:47 | väntar | info:bra | 📦 Paketet till Lasse på bussdepån ligger i postlådan – Rolf tar det till posten |
| 6:48 | väntar | värld:TUUT! Tjena! | TUUT! Tjena! |
| 6:48 | väntar | rolf | ÖJ! Ja kör dina paket till posten. Ja ska ändå förbi. Ja tar en tia för bensinen. Eller för Kajsas lax. Mest för laxen. /Rolf​ |
| 6:48 | klar | info:bra | 📦 Paketet till Gun-Britt i Nässjö ligger i postlådan – Rolf tar det till posten |
| 6:48 | sak | info:bra | 📦 Paketet till Lasse på bussdepån ligger i postlådan – Rolf tar det till posten |
| 6:48 | kvitto-visas | info:bra | 📦 Paketet till Lasse på bussdepån ligger i postlådan – Rolf tar det till posten |
| 6:48 | toast | bra | 📦 Paketet till Lasse på bussdepån ligger i postlådan – Rolf tar det till posten |
| 6:50 | klar | info:bra | 📦 Paketet till Lasse på bussdepån ligger i postlådan – Rolf tar det till posten |
| 6:50 | händelse | printStart | sak=pall |
| 6:53 | sak | rolf | ÖJ! Ja kör dina paket till posten. Ja ska ändå förbi. Ja tar en tia för bensinen. Eller för Kajsas lax. Mest för laxen. /Rolf​ |
| 6:53 | notis |  | ✉️ ÖJ! Ja kör dina paket till posten. Ja ska ändå förbi. Ja tar en tia för bensinen. Eller för Kajsas lax. Mest för laxen. /Rolf​ |
| 6:53 | röst | rolf | ÖJ! Ja kör dina paket till posten. Ja ska ändå förbi. Ja tar en tia för bensinen. Eller för Kajsas lax. Mest för laxen. /Rolf​ · STORY |
| 6:56 | toast | guld | ✅ |
| 6:56 | händelse | printKlar | sak=pall n=12 |
| 6:56 | händelse | tagitUrPrint | sak=pall n=1 |
| 7:03 | klar | rolf | ÖJ! Ja kör dina paket till posten. Ja ska ändå förbi. Ja tar en tia för bensinen. Eller för Kajsas lax. Mest för laxen. /Rolf​ |
| 7:04 | aliSalt | ali | 198 |
| 7:04 | aliSalt | ali | 20 |
| 7:05 | struken | bror | Pappa har en spellista på Youtube som heter "Sopbilar". 34 videor. Han säger att en Scania V8 är "ren musik". |
| 7:10 | struken | värld:TUUT! Tjena! | TUUT! Tjena! |
| 7:12 | händelse | printStart | sak=pall |
| 7:17 | toast | guld | ✅ |
| 7:17 | händelse | printKlar | sak=pall n=13 |
| 7:18 | händelse | tagitUrPrint | sak=pall n=1 |
| 7:25 | aliSalt | ali | 189 |
| 7:34 | händelse | printStart | sak=pall |
| 7:39 | toast | guld | ✅ |
| 7:39 | händelse | printKlar | sak=pall n=14 |
| 7:40 | händelse | tagitUrPrint | sak=pall n=1 |
| 7:47 | aliSalt | ali | 189 |
| 7:59 | väntar | värld:Mjau. | Mjau. |
| 8:03 | sak | värld:Mjau. | Mjau. |
| 8:03 | bubbla |  | Mjau. |
| 8:05 | klar | värld:Mjau. | Mjau. |
| 8:10 | händelse | printStart | sak=pall |
| 8:16 | toast | guld | ✅ |
| 8:16 | händelse | printKlar | sak=pall n=15 |
| 8:16 | händelse | tagitUrPrint | sak=pall n=1 |
| 8:24 | aliSalt | ali | 189 |
| 8:33 | händelse | printStart | sak=pall |
| 8:38 | toast | guld | ✅ |
| 8:38 | händelse | printKlar | sak=pall n=16 |
| 8:39 | händelse | tagitUrPrint | sak=pall n=1 |
| 8:43 | skratt | du | falsk tuta |
| 8:46 | aliSalt | ali | 189 |
| 8:55 | händelse | printStart | sak=pall |
| 9:00 | toast | guld | ✅ |
| 9:00 | händelse | printKlar | sak=pall n=17 |
| 9:01 | händelse | tagitUrPrint | sak=pall n=1 |
| 9:08 | aliSalt | ali | 189 |
| 9:17 | händelse | printStart | sak=pall |
| 9:22 | toast | guld | ✅ |
| 9:22 | händelse | printKlar | sak=pall n=18 |
| 9:22 | upplåst | strom | vindsnurra3 |
| 9:22 | brott | RESERV | vindsnurra3 (strom 1 av 15) |
| 9:22 | händelse | upplast | id=vindsnurra3 flask=strom |
| 9:22 | paket |  | sms |
| 9:22 | väntar | ali | Ali här. En tredje snurra. Mitt på taket. Sen är taket fullt. Sen får solen ta över. |
| 9:22 | sak | ali | Ali här. En tredje snurra. Mitt på taket. Sen är taket fullt. Sen får solen ta över. |
| 9:22 | sms | ali | Ali här. En tredje snurra. Mitt på taket. Sen är taket fullt. Sen får solen ta över. |
| 9:22 | sms-bubbla | ali | Ali här. En tredje snurra. Mitt på taket. Sen är taket fullt. Sen får solen ta över. |
| 9:22 | röst | ali | Ali här. En tredje snurra. Mitt på taket. Sen är taket fullt. Sen får solen ta över. · STORY |
| 9:23 | händelse | tagitUrPrint | sak=pall n=1 |
| 9:29 | klar | ali | Ali här. En tredje snurra. Mitt på taket. Sen är taket fullt. Sen får solen ta över. |
| 9:30 | aliSalt | ali | 189 |
| 9:33 | toast | guld | 3D-modell köpt – printa vindsnurra till skjultaket på skrivaren |
| 9:33 | händelse | kopt | sak=vindsnurra |
| 9:42 | händelse | printStart | sak=byggsats:vindsnurra |
| 9:45 | händelse | printKlar | sak=byggsats:vindsnurra n=1 |
| 9:45 | toast | guld | ✅ |
| 9:46 | väntar | info:guld | 🌬️ Vindsnurran ligger i handen – klicka på skjulet för att sätta den på taket |
| 9:46 | händelse | tagitUrPrint | sak=byggsats:vindsnurra n=1 |
| 9:46 | sak | info:guld | 🌬️ Vindsnurran ligger i handen – klicka på skjulet för att sätta den på taket |
| 9:46 | kvitto-visas | info:guld | 🌬️ Vindsnurran ligger i handen – klicka på skjulet för att sätta den på taket |
| 9:46 | toast | guld | 🌬️ Vindsnurran ligger i handen – klicka på skjulet för att sätta den på taket |
| 9:48 | klar | info:guld | 🌬️ Vindsnurran ligger i handen – klicka på skjulet för att sätta den på taket |
| 9:54 | händelse | placerat | sak=vindsnurra |
| 9:54 | väntar | info:guld | 🌬️ Vindsnurran sitter på taket – den trampar cykeln åt dig när det blåser |
| 9:54 | monterat | du | byggsats:vindsnurra |
| 9:54 | händelse | monterat | sak=vindsnurra |
| 9:54 | sak | info:guld | 🌬️ Vindsnurran sitter på taket – den trampar cykeln åt dig när det blåser |
| 9:54 | kvitto-visas | info:guld | 🌬️ Vindsnurran sitter på taket – den trampar cykeln åt dig när det blåser |
| 9:54 | toast | guld | 🌬️ Vindsnurran sitter på taket – den trampar cykeln åt dig när det blåser |
| 9:54 | händelse | malKlart | id=vind5 del=Dag 5 – Tätt och mysigt nasta=sov5 |
| 9:54 | paket |  | lapp |
| 9:54 | väntar | du | Dag 5 är slut. Nu vet en mås att jag bor HÄR. Pengarna är borta. Med en mås. |
| 9:54 | paket |  | sms |
| 9:54 | väntar | mamma | Pappa kommer förbi i morgon. Han säger inget men han vill. ❤️ |
| 9:54 | paket |  | sms |
| 9:54 | väntar | mamma | Pappa och jag har lagt undan lite. 1 000 kr. Till något fint i ditt hus. Inte till chips. ❤️ /Mamma |
| 9:54 | tanke | du | Mätt. Varm. Jag skulle kunna bära en kyl. |
| 9:54 | väntar | du | Mätt. Varm. Jag skulle kunna bära en kyl. |
| 9:54 | struken | du | Mätt. Varm. Jag skulle kunna bära en kyl. |
| 9:54 | MÅL |  | Klart för idag – sov när du vill |
| 9:56 | klar | info:guld | 🌬️ Vindsnurran sitter på taket – den trampar cykeln åt dig när det blåser |
| 9:56 | sak | du | Dag 5 är slut. Nu vet en mås att jag bor HÄR. Pengarna är borta. Med en mås. |
| 9:56 | kvitto-visas | du | Dag 5 är slut. Nu vet en mås att jag bor HÄR. Pengarna är borta. Med en mås. |
| 9:56 | lapp | 📔 Dagbok | Dag 5 är slut. Nu vet en mås att jag bor HÄR. Pengarna är borta. Med en mås. |
| 9:56 | meddelande | du | Dag 5 är slut. Nu vet en mås att jag bor HÄR. Pengarna är borta. Med en mås. |
| 9:56 | dagbokkort | du | Dag 5 är slut. Nu vet en mås att jag bor HÄR. Pengarna är borta. Med en mås. |
| 9:56 | röst | du | Dag 5 är slut. Nu vet en mås att jag bor HÄR. Pengarna är borta. Med en mås. · STORY |
| 10:04 | händelse | brevLast | id=kvall5 |
| 10:04 | klar | du | Dag 5 är slut. Nu vet en mås att jag bor HÄR. Pengarna är borta. Med en mås. |
| 10:04 | väntar | notis:🌇 Klockan är 21. Ali slår igen luckan.  | 🌇 Klockan är 21. Ali slår igen luckan. Dagens jobb är klart – gå in i skjulet och sov i sängen. |
| 10:04 | målruta |  | Klart för idag – sov när du vill |
| 10:04 | lapp | Dagbok | Tre dagar. Tänk om tre veckor. |
| 10:04 | röst | du | Tre dagar. Tänk om tre veckor. · REAKTION |
| 10:08 | paket |  | replik |
| 10:08 | väntar | rolf | Hoppa in. Ja ska visa dej en grej. |
| 10:09 | väntar | mamma | Haha, träplankor? |
| 10:09 | väntar | notis:📔 Prestation: Ett hem att bo i · +3 res | 📔 Prestation: Ett hem att bo i · +3 respekt |
| 10:11 | väntar | mamma | Vad är det för skit? Du har ju inte ens tapeter på väggarna. |
| 10:14 | väntar | mamma | Och var är badrummet? Du duschar väl? |
| 10:16 | väntar | mamma | Pappa säger "aha, vad lugnt då". Pappa säger det om allt. |
| 10:17 | skratt | du | falsk tuta |
| 10:18 | väntar | mamma | …men fönstret var fint. Det kommer in ljus i alla fall. ❤️ |
| 10:23 | morgonkort | 📕 Kapitel 2: Ett riktigt hem | 📕 Kapitel 2: Ett riktigt hem · Mamma är inte imponerad. Än. Nästa mål: tapeter , en egen gamingbod med RGB, gamer-inredning – och en jacuzzi . Visa henne. Ali har nya ritningar – och ♾️ trimningar som aldrig tar slut. |
| 10:37 | sak | du | (nytt mål i rutan) |
| 10:37 | pil |  | Klart för idag – sov när du vill |
| 10:37 | klar | du | (nytt mål i rutan) |
| 10:39 | struken | notis:🌇 Klockan är 21. Ali slår igen luckan.  | 🌇 Klockan är 21. Ali slår igen luckan. Dagens jobb är klart – gå in i skjulet och sov i sängen. |
| 10:39 | sak | rolf | Hoppa in. Ja ska visa dej en grej. |
| 10:39 | notis |  | Rolf: ”Hoppa in. Ja ska visa dej en grej.” |
| 10:39 | röst | rolf | Hoppa in. Ja ska visa dej en grej. · STORY |
| 10:42 | klar | rolf | Hoppa in. Ja ska visa dej en grej. |
| 10:44 | struken | notis:📔 Prestation: Ett hem att bo i · +3 res | 📔 Prestation: Ett hem att bo i · +3 respekt |
| 10:51 | sak | mamma | Haha, träplankor? |
| 10:51 | röst | mamma | Haha, träplankor? · STORY |
| 10:51 | scenInfo | rolf | Rolf kör upp till sin bänk |
| 10:53 | klar | mamma | Haha, träplankor? |
| 10:55 | röst | rolf | Kall öl ä viktigt. · STORY |
| 10:55 | bubbla | rolf | Kall öl ä viktigt. |
| 10:57 | skratt | du | däcket rullar iväg |
| 11:03 | röst | rolf | Ja kommer hit varje kväll. Förr va vi två på bänken. · STORY |
| 11:03 | bubbla | rolf | Ja kommer hit varje kväll. Förr va vi två på bänken. |
| 11:04 | bubbla |  | TUUT! Hej grannen! |
| 11:21 | röst | rolf | Dä där ä Bengt-Åke. Vinka int. · STORY |
| 11:21 | bubbla | rolf | Dä där ä Bengt-Åke. Vinka int. |
| 11:36 | röst | rolf | Den ä skyldig mej pengar. · STORY |
| 11:36 | bubbla | rolf | Den ä skyldig mej pengar. |
| 11:45 | väntar | foto | Rolfs bänk |
| 11:45 | paket |  | tanke |
| 11:45 | tanke | du | Han kommer hit varje kväll. Nu vet jag var. |
| 11:45 | väntar | du | Han kommer hit varje kväll. Nu vet jag var. |
| 11:45 | skratt | du | Rolfs bänk |
| 11:51 | sak | mamma | Pappa kommer förbi i morgon. Han säger inget men han vill. ❤️ |
| 11:51 | sms | mamma | Pappa kommer förbi i morgon. Han säger inget men han vill. ❤️ |
| 11:51 | sms-bubbla | mamma | Pappa kommer förbi i morgon. Han säger inget men han vill. ❤️ |
| 11:51 | röst | mamma | Pappa kommer förbi i morgon. Han säger inget men han vill. ❤️ · STORY |
| 11:54 | tanke | du | Det här är nog vad folk kallar att må bra. Konstigt. |
| 11:54 | väntar | du | Det här är nog vad folk kallar att må bra. Konstigt. |
| 11:56 | klar | mamma | Pappa kommer förbi i morgon. Han säger inget men han vill. ❤️ |
| 11:58 | struken | mamma | Det har ringt en karl som heter Rolf och frågat om du gillar korv. Vem är det? Varför har han mitt nummer? |
| 12:04 | sak | mamma | Vad är det för skit? Du har ju inte ens tapeter på väggarna. |
| 12:04 | röst | mamma | Vad är det för skit? Du har ju inte ens tapeter på väggarna. · STORY |
| 12:09 | webbBetalt | du | 224 |

<details><summary>Botens handlingar dag 5</summary>

- 0:05 tar ut 1 st ur skrivaren (5024 kr)
- 0:05 tjänar pengar till väntar på sopbilen (BO): 5024/5084 kr → printar pall (220 kr) (5024 kr)
- 0:06 printar Pall (5024 kr)
- 0:12 tar ut 1 st ur skrivaren (5024 kr)
- 0:18 gå till Ali (26 m) (5024 kr)
- 0:18 öppnar Alis butik – sälja (5024 kr)
- 0:20 säljer hos Ali: +220 kr (5244 kr)
- 0:25 tjänar pengar till väntar på sopbilen (BO): 5244/5304 kr → printar pall (209 kr) (5244 kr)
- 0:30 gå till skrivaren (24 m) (5244 kr)
- 0:32 printar Pall (5244 kr)
- 0:38 tar ut 1 st ur skrivaren (5244 kr)
- 0:44 gå till Ali (24 m) (5244 kr)
- 0:44 öppnar Alis butik – sälja (5244 kr)
- 0:45 säljer hos Ali: +209 kr (5453 kr)
- 0:54 gå till Rolfs postlåda (31 m) (5453 kr)
- 0:57 gå till skrivaren (8 m) (5453 kr)
- 0:58 printar Trädgårdstomte till flaket (5453 kr)
- 1:05 tar ut 1 st ur skrivaren (5453 kr)
- 1:09 valj tomte: true, vald tomte, post {"l":null,"tr":null,"tm":[]}, nummer false (5453 kr)
- 1:10 gå till Rolfs postlåda (8 m) (5453 kr)
- 1:18 gå till skrivaren (8 m) (5453 kr)
- 1:19 printar Isolerskiva (vägg) (5453 kr)
- 1:24 tar ut 1 st ur skrivaren (5453 kr)
- 1:28 gå till skjulet (hoger) (19 m) (5453 kr)
- 1:43 plockar 3 skräp på tippen (bär max 16) (5453 kr)
- 1:45 gå till kvarnen (11 m) (5453 kr)
- 1:53 gå till skrivaren (5 m) (5453 kr)
- 1:54 printar Isolerskiva (vägg) (5453 kr)
- 1:59 tar ut 1 st ur skrivaren (5453 kr)
- 2:03 gå till skjulet (fram) (19 m) (5453 kr)
- 2:18 gå till Ali (20 m) (5453 kr)
- 2:18 öppnar Alis butik – köpa alis pappas gamla dator (5453 kr)
- 2:20 köper webbdator för 300 kr (5153 kr)
- 2:26 gå till skrivaren (24 m) (5153 kr)
- 2:28 printar Alis pappas gamla dator (5153 kr)
- 2:30 tar ut 1 st ur skrivaren (5153 kr)
- 2:34 gå till platsen för alis pappas gamla dator (21 m) (5153 kr)
- 2:35 ställer ut alis pappas gamla dator (5153 kr)
- 2:45 gå till Ali (16 m) (5153 kr)
- 2:45 öppnar Alis butik – köpa receptet lampskärm (5153 kr)
- 2:47 Ali har inte lampskarm (5153 kr)
- 2:53 gå till skrivaren (24 m) (5153 kr)
- 2:55 printar Lampskärm (5153 kr)
- 3:02 tar ut 1 st ur skrivaren (5153 kr)
- 3:13 gå till Ali (24 m) (5153 kr)
- 3:13 öppnar Alis butik – köpa fönster (5153 kr)
- 3:15 köper fonster för 90 kr (5063 kr)
- 3:22 gå till skrivaren (24 m) (5063 kr)
- 3:23 printar Fönster (2 delar) (5063 kr)
- 3:32 tar ut 1 st ur skrivaren (5063 kr)
- 3:35 gå till skjulet (18 m) (5063 kr)
- 3:35 sätter ett fönster (5063 kr)
- 3:40 gå till Ali (20 m) (5063 kr)
- 3:40 öppnar Alis butik – köpa trägolv (5063 kr)
- 3:43 köper golv för 140 kr (4923 kr)
- 3:55 plockar 3 skräp på tippen (bär max 16) (4923 kr)
- 3:58 gå till kvarnen (15 m) (4923 kr)
- 4:03 gå till skrivaren (5 m) (4923 kr)
- 4:05 printar Trägolv (3 delar) (4923 kr)
- 4:16 tar ut 1 st ur skrivaren (4923 kr)
- 4:20 gå till skjulet (19 m) (4923 kr)
- 4:28 gå till skrivaren (17 m) (4923 kr)
- 4:30 printar Pall (4923 kr)
- 4:36 tar ut 1 st ur skrivaren (4923 kr)
- 4:40 gå till platsen för pall (18 m) (4923 kr)
- 4:41 ställer ut pall (4923 kr)
- 4:45 gå till Ali (15 m) (4923 kr)
- 4:45 öppnar Alis butik – köpa taklampa med skärm (4923 kr)
- 4:48 köper taklampa för 90 kr (4833 kr)
- 5:03 plockar 6 skräp på tippen (bär max 16) (4833 kr)
- 5:05 gå till kvarnen (13 m) (4833 kr)
- 5:11 gå till skrivaren (5 m) (4833 kr)
- 5:13 printar Taklampa med skärm (4833 kr)
- 5:16 tar ut 1 st ur skrivaren (4833 kr)
- 5:20 gå till skjulet (19 m) (4833 kr)
- 5:28 gå till skrivaren (19 m) (4833 kr)
- 5:30 printar Pall (4833 kr)
- 5:36 tar ut 1 st ur skrivaren (4833 kr)
- 5:44 popup: "FORTSÄTT" (4833 kr)
- 5:46 gå till platsen för pall (19 m) (4833 kr)
- 5:47 ställer ut pall (4833 kr)
- 5:56 gå till skrivaren (19 m) (4833 kr)
- 5:58 printar Blomkruka (4833 kr)
- 6:01 tar ut 1 st ur skrivaren (4833 kr)
- 6:03 printar Blomkruka (4833 kr)
- 6:06 tar ut 1 st ur skrivaren (4833 kr)
- 6:08 printar Nyckelring (4833 kr)
- 6:10 tar ut 1 st ur skrivaren (4833 kr)
- 6:14 gå till datorn (18 m) (4833 kr)
- 6:23 panel: "Webbshopen · Soptippsvägen 1
B" (4833 kr)
- 6:32 panel: "Webbshopen · Soptippsvägen 1
B" (4833 kr)
- 6:40 panel: "Webbshopen · Soptippsvägen 1
B" (4833 kr)
- 6:46 gå till Rolfs postlåda (paket) (29 m) (4833 kr)
- 6:47 webbshop: 2 paket i postlådan (4833 kr)
- 6:47 tjänar pengar till väntar på flaskhalsen för vindsnurra3: 4833/4873 kr → printar pall (198 kr) (4833 kr)
- 6:49 gå till skrivaren (8 m) (4833 kr)
- 6:50 printar Pall (4833 kr)
- 6:57 tar ut 1 st ur skrivaren (4833 kr)
- 7:03 gå till Ali (26 m) (4833 kr)
- 7:03 öppnar Alis butik – sälja (4833 kr)
- 7:04 säljer hos Ali: +218 kr (5051 kr)
- 7:05 tjänar pengar till väntar på flaskhalsen för vindsnurra3: 5051/5091 kr → printar pall (189 kr) (5051 kr)
- 7:10 gå till skrivaren (24 m) (5051 kr)
- 7:12 printar Pall (5051 kr)
- 7:18 tar ut 1 st ur skrivaren (5051 kr)
- 7:24 gå till Ali (24 m) (5051 kr)
- 7:24 öppnar Alis butik – sälja (5051 kr)
- 7:25 säljer hos Ali: +189 kr (5240 kr)
- 7:27 tjänar pengar till väntar på flaskhalsen för vindsnurra3: 5240/5280 kr → printar pall (189 kr) (5240 kr)
- 7:32 gå till skrivaren (24 m) (5240 kr)
- 7:34 printar Pall (5240 kr)
- 7:40 tar ut 1 st ur skrivaren (5240 kr)
- 7:46 gå till Ali (24 m) (5240 kr)
- 7:46 öppnar Alis butik – sälja (5240 kr)
- 7:47 säljer hos Ali: +189 kr (5429 kr)
- 7:49 tjänar pengar till väntar på flaskhalsen för vindsnurra3: 5429/5469 kr → printar pall (189 kr) (5429 kr)
- 8:00 plockar 3 skräp på tippen (bär max 16) (5429 kr)
- 8:02 gå till kvarnen (11 m) (5429 kr)
- 8:09 gå till skrivaren (5 m) (5429 kr)
- 8:10 printar Pall (5429 kr)
- 8:17 tar ut 1 st ur skrivaren (5429 kr)
- 8:23 gå till Ali (27 m) (5429 kr)
- 8:23 öppnar Alis butik – sälja (5429 kr)
- 8:24 säljer hos Ali: +189 kr (5618 kr)
- 8:26 tjänar pengar till väntar på flaskhalsen för vindsnurra3: 5618/5658 kr → printar pall (189 kr) (5618 kr)
- 8:31 gå till skrivaren (24 m) (5618 kr)
- 8:33 printar Pall (5618 kr)
- 8:39 tar ut 1 st ur skrivaren (5618 kr)
- 8:44 gå till Ali (24 m) (5618 kr)
- 8:44 öppnar Alis butik – sälja (5618 kr)
- 8:46 säljer hos Ali: +189 kr (5807 kr)
- 8:48 tjänar pengar till väntar på flaskhalsen för vindsnurra3: 5807/5847 kr → printar pall (189 kr) (5807 kr)
- 8:53 gå till skrivaren (24 m) (5807 kr)
- 8:55 printar Pall (5807 kr)
- 9:01 tar ut 1 st ur skrivaren (5807 kr)
- 9:06 gå till Ali (24 m) (5807 kr)
- 9:06 öppnar Alis butik – sälja (5807 kr)
- 9:08 säljer hos Ali: +189 kr (5996 kr)
- 9:10 tjänar pengar till väntar på flaskhalsen för vindsnurra3: 5996/6036 kr → printar pall (189 kr) (5996 kr)
- 9:15 gå till skrivaren (24 m) (5996 kr)
- 9:17 printar Pall (5996 kr)
- 9:23 tar ut 1 st ur skrivaren (5996 kr)
- 9:28 gå till Ali (24 m) (5996 kr)
- 9:28 öppnar Alis butik – sälja (5996 kr)
- 9:30 säljer hos Ali: +189 kr (6185 kr)
- 9:32 öppnar Alis butik – köpa vindsnurra till skjultaket (6185 kr)
- 9:34 köper vindsnurra för 133 kr (6052 kr)
- 9:40 gå till skrivaren (24 m) (6052 kr)
- 9:42 printar Vindsnurra till skjultaket (6052 kr)
- 9:46 tar ut 1 st ur skrivaren (6052 kr)
- 9:54 gå till sätt vindsnurran på taket (18 m) (6052 kr)
- 10:04 popup: "FORTSÄTT" (7052 kr)
- 10:08 panel: "Dagbok
Före och efter
Dag 1
Da" (7052 kr)
- 10:23 telefonscen: "Okej. Kapitel 2 då. 😤" (7052 kr)
- 10:32 kort: "Kör!" (7052 kr)
- 10:51 gå till sopbilen (Rolfs bänk) (39 m) (7052 kr)
- 11:51 tillbaka från Rolfs bänk (7052 kr)
- 12:06 gå till sängen (39 m) (7052 kr)

</details>

## Dag 6

| Tid | Källa | Vem | Text |
|---|---|---|---|
| 12:09 | vara | ali | kruka |
| 12:09 | händelse | malKlart | id=sov5 del=Dag 5 – Tätt och mysigt nasta=pappa6 |
| 12:09 | MÅL |  | Pappa kommer förbi idag |
| 12:09 | klar | mamma | Vad är det för skit? Du har ju inte ens tapeter på väggarna. |
| 0:01 | händelse | dagenBorjar | dag=6 |
| 0:01 | meddelande | du | Pengarna tog slut. Därför: en fabrik. |
| 0:01 | dagbokkort | du | KAPITEL 2 · Dag 6. 16 dagar till jul · Pengarna tog slut. Därför: en fabrik. |
| 0:01 | röst | du | KAPITEL 2 · Dag 6. 16 dagar till jul. Pengarna tog slut. Därför: en fabrik. · STORY |
| 0:08 | händelse | morgonkortStangt | dag=6 |
| 0:08 | struken | kedja | d6 |
| 0:08 | struken | du | Det här är nog vad folk kallar att må bra. Konstigt. |
| 0:08 | väntar | du | Pappa kommer förbi idag. |
| 0:08 | väntar | info:fel | Göran snodde lampskärm. |
| 0:11 | målruta |  | Pappa kommer förbi idag |
| 0:13 | sak | du | Pappa kommer förbi idag. |
| 0:13 | pil |  | Pappa kommer förbi idag |
| 0:13 | röst | du | Pappa kommer förbi idag. · MÅL |
| 0:15 | klar | du | Pappa kommer förbi idag. |
| 0:15 | struken | info:fel | Göran snodde lampskärm. |
| 0:17 | väntar | info:info | Pappas bil stannade vid grinden |
| 0:17 | scenInfo | pappa | Pappa kommer |
| 0:19 | tanke | du | Någon från kommunen fotograferade skylten. Länge. |
| 0:19 | väntar | du | Någon från kommunen fotograferade skylten. Länge. |
| 0:19 | väntar | info:guld | Skylten vid vägen är uppgraderad. |
| 0:19 | paket |  | sms |
| 0:19 | väntar | rolf | Tuta två gånger när ja åkte förbi. Hörde du? Dä va ja. MVH ROLF |
| 0:19 | sak | info:guld | Skylten vid vägen är uppgraderad. |
| 0:19 | kvitto-visas | info:guld | Skylten vid vägen är uppgraderad. |
| 0:19 | toast | guld | Skylten vid vägen är uppgraderad. |
| 0:21 | tanke | du | Göran tar mina saker. Kanske han vill ha något eget? |
| 0:21 | väntar | du | Göran tar mina saker. Kanske han vill ha något eget? |
| 0:21 | klar | info:guld | Skylten vid vägen är uppgraderad. |
| 0:27 | paket |  | sms |
| 0:27 | väntar | rolf | Folk pratar gott om dej. Ja hitta röda backar av riktigt bra plast på tippen. Ja la dom vid grinden. /R |
| 0:27 | väntar | rolf | Tomten sitter på flaket nu. En tant vinka tillbaka. Första gången på trettio år. Pengar i lådan. /Rolf |
| 0:30 | sak | mamma | Och var är badrummet? Du duschar väl? |
| 0:30 | röst | mamma | Och var är badrummet? Du duschar väl? · STORY |
| 0:31 | scenInfo | du | Hälsar på pappa |
| 0:31 | röst | pappa | Jaså. Här bor du alltså. · REAKTION |
| 0:31 | röst-avbruten | mamma | 2.0 s kvar ← pappa: Jaså. Här bor du alltså. |
| 0:33 | skratt | du | falsk tuta |
| 0:33 | klar | mamma | Och var är badrummet? Du duschar väl? |
| 0:34 | toast |  | Du: Pappa … jag bor på en soptipp. |
| 0:34 | röst | du | Pappa … jag bor på en soptipp. · REAKTION |
| 0:38 | händelse | placerat | sak=burk_tavla |
| 0:38 | händelse | placerat | sak=burk_honung |
| 0:38 | händelse | placerat | sak=burk_porslin |
| 0:38 | händelse | placerat | sak=burk_tavla3 |
| 0:38 | händelse | placerat | sak=burk_porslin |
| 0:38 | händelse | placerat | sak=burk_kompott |
| 0:38 | toast |  | 🍯 Pappa lade 6 saker från mamma i en hög. |
| 0:38 | röst | pappa | Mamma skickade burkar. Jag bar dem. · REAKTION |
| 0:41 | händelse | placerat | sak=sackkarra |
| 0:41 | röst | pappa | Säckkärra. Den var på rea. · REAKTION |
| 0:55 | bubbla |  | TUUT! Grann skylt! |
| 0:59 | toast |  | Du: …Tack? |
| 0:59 | röst | du | …Tack? · REAKTION |
| 1:01 | skratt | du | falsk tuta |
| 1:05 | röst | rolf | ÖJ! Vem ä du då? · REAKTION |
| 1:08 | röst | pappa | Pappan. · REAKTION |
| 1:10 | röst | rolf | Hörru. Jaså. Rolf. Ja kör bilen. · REAKTION |
| 1:13 | röst | pappa | Scania. Trettiotvåa? · REAKTION |
| 1:16 | röst | rolf | Tjugoåtta. Men hon går som en klocka. · REAKTION |
| 1:20 | röst | rolf | Hörru. Mä en sån kan du ta tunnorna på tippen. Dôm ä av den hårda plasten. Den röda. Den klarar int en köttkvarn. · REAKTION |
| 1:29 | toast |  | Du: Var får man en kvarn som klarar den då? |
| 1:29 | röst | du | Var får man en kvarn som klarar den då? · REAKTION |
| 1:32 | röst | rolf | Ali har en röd kvarn längst in i lagret. Han har aldrig vågat starta den. · REAKTION |
| 1:38 | scenInfo | rolf | Två tunnor vid grinden |
| 1:38 | röst | rolf | Tjo. Ja ställer tunnorna vid grinden när ja tömmer. Du får dôm. · REAKTION |
| 1:43 | röst | pappa | Mm. Hej då då. · REAKTION |
| 1:46 | struken | du | Någon från kommunen fotograferade skylten. Länge. |
| 1:46 | struken | info:info | Pappas bil stannade vid grinden |
| 1:46 | händelse | malKlart | id=pappa6 del=Dag 6 – Röd PETG nasta=r6-kop-roda-kvarnen |
| 1:46 | tanke | du | Inte en enda frusen tå. Rekord. |
| 1:46 | väntar | du | Inte en enda frusen tå. Rekord. |
| 1:46 | struken | du | Inte en enda frusen tå. Rekord. |
| 1:46 | väntar | du | Tunnorna är röd plast. Bra plast. Den behöver en egen kvarn. |
| 1:46 | målruta |  | Köp den röda kvarnen hos Ali |
| 1:46 | MÅL |  | Köp den röda kvarnen hos Ali |
| 1:46 | sak | du | Tunnorna är röd plast. Bra plast. Den behöver en egen kvarn. |
| 1:46 | pil |  | Köp den röda kvarnen hos Ali |
| 1:46 | notis | tanke | 💭 Tunnorna är röd plast. Bra plast. Den behöver en egen kvarn. |
| 1:46 | röst | du | Tunnorna är röd plast. Bra plast. Den behöver en egen kvarn. · MÅL |
| 1:47 | väntar | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har isolerade väggar nu. Och FÖNSTER. Gunnar, du hör väl? |
| 1:47 | radio | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har isolerade väggar nu. Och FÖNSTER. Gunnar, du hör väl? |
| 1:47 | skratt | du | Radio-Kjelle |
| 1:50 | kvittens-bock |  | ✓ Prata med pappa |
| 1:51 | klar | du | Tunnorna är röd plast. Bra plast. Den behöver en egen kvarn. |
| 1:56 | röst | ali | Du säljer på nätet nu? Bra. Ritningarna köper du här. · STORY |
| 1:56 | butiksbubbla | ali | Du säljer på nätet nu? Bra. Ritningarna köper du här. |
| 1:58 | skratt | du | Alis dyr-pling |
| 1:58 | toast | guld | Röda kvarnen är min – den ska stå i röda linjen |
| 1:58 | händelse | kopt | sak=petgkvarn |
| 1:58 | butiksbubbla | ali | Den röda? Jag har aldrig vågat starta den. Ta den. Starta den långt bort från mig. |
| 1:59 | röst | ali | Den röda? Jag har aldrig vågat starta den. Ta den. Starta den långt bort från mig. · STORY |
| 1:59 | tanke | du | Servetter. Massor. Ali flyttar lådan när jag tittar. |
| 1:59 | väntar | du | Servetter. Massor. Ali flyttar lådan när jag tittar. |
| 2:11 | väntar | värld:Mjau. | Mjau. |
| 2:15 | sak | mamma | Pappa säger "aha, vad lugnt då". Pappa säger det om allt. |
| 2:15 | röst | mamma | Pappa säger "aha, vad lugnt då". Pappa säger det om allt. · STORY |
| 2:20 | klar | mamma | Pappa säger "aha, vad lugnt då". Pappa säger det om allt. |
| 2:21 | väntar | rolf | Ja hitta ett helt lass på återvinningen. Ingen ville ha dom. Nu ä dom dina. /R |
| 2:21 | väntar | foto | Pappa och Rolf |
| 2:21 | paket |  | tanke |
| 2:21 | tanke | du | Pappa var här. Han såg vad jag har byggt. |
| 2:21 | väntar | du | Pappa var här. Han såg vad jag har byggt. |
| 2:23 | händelse | printStart | sak=byggsats:petgkvarn |
| 2:23 | väntar | mamma | Jag har bäddat i ditt rum. Ifall. |
| 2:27 | toast | bra | Del 1 av 3 klar |
| 2:28 | sak | mamma | Pappa och jag har lagt undan lite. 1 000 kr. Till något fint i ditt hus. Inte till chips. ❤️ /Mamma |
| 2:28 | sms | mamma | Pappa och jag har lagt undan lite. 1 000 kr. Till något fint i ditt hus. Inte till chips. ❤️ /Mamma |
| 2:28 | sms-bubbla | mamma | Pappa och jag har lagt undan lite. 1 000 kr. Till något fint i ditt hus. Inte till chips. ❤️ /Mamma |
| 2:28 | röst | mamma | Pappa och jag har lagt undan lite. 1 000 kr. Till något fint i ditt hus. Inte till chips. ❤️ /Mamma · STORY |
| 2:31 | toast | bra | Del 2 av 3 klar |
| 2:35 | händelse | printKlar | sak=byggsats:petgkvarn n=1 |
| 2:35 | toast | guld | ✅ |
| 2:35 | händelse | tagitUrPrint | sak=byggsats:petgkvarn n=1 |
| 2:36 | klar | mamma | Pappa och jag har lagt undan lite. 1 000 kr. Till något fint i ditt hus. Inte till chips. ❤️ /Mamma |
| 2:37 | händelse | placerat | sak=petgkvarn |
| 2:37 | händelse | malKlart | id=r6-kop-roda-kvarnen del=Dag 6 – Röd PETG nasta=r6-mal-tunna-roda |
| 2:37 | struken | du | Servetter. Massor. Ali flyttar lådan när jag tittar. |
| 2:37 | väntar | du | Mal en tunna i röda kvarnen. |
| 2:38 | MÅL |  | Mal en tunna i röda kvarnen |
| 2:39 | struken | värld:Mjau. | Mjau. |
| 2:39 | sak | du | Mal en tunna i röda kvarnen. |
| 2:39 | målruta |  | Mal en tunna i röda kvarnen |
| 2:39 | pil |  | Mal en tunna i röda kvarnen |
| 2:39 | röst | du | Mal en tunna i röda kvarnen. · MÅL |
| 2:39 | paket |  | sms |
| 2:39 | väntar | mamma | Jag har skickat virkade grytvantar (lila) med Rolf. Den ligger i postlådan. |
| 2:41 | klar | du | Mal en tunna i röda kvarnen. |
| 2:41 | kvittens-bock |  | ✓ Ställ den röda kvarnen i röda linjen |
| 2:49 | sak | mamma | …men fönstret var fint. Det kommer in ljus i alla fall. ❤️ |
| 2:49 | röst | mamma | …men fönstret var fint. Det kommer in ljus i alla fall. ❤️ · STORY |
| 2:50 | väntar | värld:TUUT! Hej grannen! | TUUT! Hej grannen! |
| 2:54 | väntar | info:guld | 🛒 Säckkärran är i verktygsraden – en tung sak i taget |
| 2:54 | klar | mamma | …men fönstret var fint. Det kommer in ljus i alla fall. ❤️ |
| 2:54 | sak | info:guld | 🛒 Säckkärran är i verktygsraden – en tung sak i taget |
| 2:54 | kvitto-visas | info:guld | 🛒 Säckkärran är i verktygsraden – en tung sak i taget |
| 2:54 | toast | guld | 🛒 Säckkärran är i verktygsraden – en tung sak i taget |
| 2:56 | klar | info:guld | 🛒 Säckkärran är i verktygsraden – en tung sak i taget |
| 3:03 | skratt | du | kvarnen rapar |
| 3:03 | händelse | malKlart | id=r6-mal-tunna-roda del=Dag 6 – Röd PETG nasta=sol6 |
| 3:03 | väntar | du | Printa och sälj. |
| 3:03 | målruta |  | Printa och sälj |
| 3:03 | MÅL |  | Printa och sälj |
| 3:03 | sak | du | Printa och sälj. |
| 3:03 | pil |  | Printa och sälj |
| 3:03 | röst | du | Printa och sälj. · MÅL |
| 3:06 | klar | du | Printa och sälj. |
| 3:07 | kvittens-bock |  | ✓ Mal en tunna i röda kvarnen |
| 3:08 | väntar | notis:PETG-kvarnen: den första rullen röd PETG | PETG-kvarnen: den första rullen röd PETG är klar |
| 3:10 | struken | värld:TUUT! Hej grannen! | TUUT! Hej grannen! |
| 3:10 | händelse | printStart | sak=kruka |
| 3:12 | toast | guld | 🧵 |
| 3:13 | toast | guld | ✅ |
| 3:13 | händelse | printKlar | sak=kruka n=52 |
| 3:13 | händelse | tagitUrPrint | sak=kruka n=1 |
| 3:15 | sak | foto | Rolfs bänk |
| 3:15 | foto | du | Rolfs bänk |
| 3:15 | händelse | printStart | sak=kruka |
| 3:17 | toast | guld | 🧵 |
| 3:18 | klar | foto | Rolfs bänk |
| 3:18 | toast | guld | ✅ |
| 3:18 | händelse | printKlar | sak=kruka n=53 |
| 3:18 | händelse | tagitUrPrint | sak=kruka n=1 |
| 3:20 | händelse | printStart | sak=pall |
| 3:20 | skratt | du | Kajsa i skrivaren |
| 3:26 | toast | guld | ✅ |
| 3:26 | händelse | printKlar | sak=pall n=19 |
| 3:26 | sak | du | Han kommer hit varje kväll. Nu vet jag var. |
| 3:26 | notis | tanke | 💭 Han kommer hit varje kväll. Nu vet jag var. |
| 3:26 | röst | du | Han kommer hit varje kväll. Nu vet jag var. · STORY |
| 3:26 | händelse | tagitUrPrint | sak=pall n=1 |
| 3:29 | klar | du | Han kommer hit varje kväll. Nu vet jag var. |
| 3:31 | ljud | kajsa | Mjau |
| 3:38 | sak | du | Göran tar mina saker. Kanske han vill ha något eget? |
| 3:38 | notis | tanke | 💭 Göran tar mina saker. Kanske han vill ha något eget? |
| 3:38 | röst | du | Göran tar mina saker. Kanske han vill ha något eget? · STORY |
| 3:39 | händelse | printStart | sak=pall |
| 3:42 | klar | du | Göran tar mina saker. Kanske han vill ha något eget? |
| 3:44 | toast | guld | ✅ |
| 3:44 | händelse | printKlar | sak=pall n=20 |
| 3:45 | skratt | du | tummen på fotot |
| 3:45 | väntar | foto | Röd fabrik (och min tumme) |
| 3:45 | paket |  | tanke |
| 3:45 | tanke | du | Två fabriker. Och det blir fler. |
| 3:45 | väntar | du | Två fabriker. Och det blir fler. |
| 3:45 | händelse | tagitUrPrint | sak=pall n=1 |
| 3:46 | tanke | du | Mamma hade varit stolt. Säg inget till henne. |
| 3:46 | väntar | du | Mamma hade varit stolt. Säg inget till henne. |
| 3:46 | sak | du | Mamma hade varit stolt. Säg inget till henne. |
| 3:46 | notis | tanke | 💭 Mamma hade varit stolt. Säg inget till henne. |
| 3:46 | röst | du | Mamma hade varit stolt. Säg inget till henne. · REAKTION |
| 3:47 | väntar | bud | (tips) |
| 3:50 | klar | du | Mamma hade varit stolt. Säg inget till henne. |
| 3:58 | sak | bud | (tips) |
| 3:59 | webb | du | packade 2 kruka |
| 4:00 | klar | bud | (tips) |
| 4:07 | sak | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har isolerade väggar nu. Och FÖNSTER. Gunnar, du hör väl? |
| 4:07 | notis |  | 📻 Radio Tippen: Radio Tippen, Kjelle här. Skjulet vid tippen har isolerade väggar nu. Och FÖNSTER. Gunnar, du hör väl? |
| 4:07 | röst | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har isolerade väggar nu. Och FÖNSTER. Gunnar, du hör väl? · REAKTION |
| 4:07 | webb | du | packade 2 pall |
| 4:16 | klar | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har isolerade väggar nu. Och FÖNSTER. Gunnar, du hör väl? |
| 4:18 | meddelande | mamma | Din bror säger att du har pengar. Du har aldrig haft pengar. Har du sålt en njure? |
| 4:19 | röst | mamma | Din bror säger att du har pengar. Du har aldrig haft pengar. Har du sålt en njure? · STORY |
| 4:30 | paket |  | sms |
| 4:30 | väntar | mamma | Printar. Vad är printar. Är det lagligt? Säg att det är lagligt. |
| 4:40 | händelse | brevLast | id=m_pengar |
| 4:42 | sak | foto | Pappa och Rolf |
| 4:42 | foto | du | Pappa och Rolf |
| 4:44 | väntar | info:bra | 📦 Paketet till Någon i Mora ligger i postlådan – Rolf tar det till posten |
| 4:44 | struken | info:bra | 📦 Paketet till Någon i Mora ligger i postlådan – Rolf tar det till posten |
| 4:44 | väntar | info:bra | 📦 Paketet till En pensionär i Kiruna ligger i postlådan – Rolf tar det till posten |
| 4:44 | klar | foto | Pappa och Rolf |
| 4:44 | sak | info:bra | 📦 Paketet till En pensionär i Kiruna ligger i postlådan – Rolf tar det till posten |
| 4:44 | kvitto-visas | info:bra | 📦 Paketet till En pensionär i Kiruna ligger i postlådan – Rolf tar det till posten |
| 4:44 | toast | bra | 📦 Paketet till En pensionär i Kiruna ligger i postlådan – Rolf tar det till posten |
| 4:45 | skratt | du | falsk tuta |
| 4:46 | klar | info:bra | 📦 Paketet till En pensionär i Kiruna ligger i postlådan – Rolf tar det till posten |
| 4:48 | händelse | printStart | sak=kruka |
| 4:51 | toast | guld | ✅ |
| 4:51 | händelse | printKlar | sak=kruka n=54 |
| 4:51 | händelse | tagitUrPrint | sak=kruka n=1 |
| 4:59 | aliSalt | ali | 105 |
| 4:59 | aliSalt | ali | 80 |
| 4:59 | aliSalt | ali | 76 |
| 5:00 | aliSalt | ali | 72 |
| 5:00 | aliSalt | ali | 180 |
| 5:01 | sak | du | Pappa var här. Han såg vad jag har byggt. |
| 5:01 | notis | tanke | 💭 Pappa var här. Han såg vad jag har byggt. |
| 5:01 | röst | du | Pappa var här. Han såg vad jag har byggt. · STORY |
| 5:04 | klar | du | Pappa var här. Han såg vad jag har byggt. |
| 5:13 | sak | mamma | Jag har skickat virkade grytvantar (lila) med Rolf. Den ligger i postlådan. |
| 5:13 | sms | mamma | Jag har skickat virkade grytvantar (lila) med Rolf. Den ligger i postlådan. |
| 5:13 | sms-bubbla | mamma | Jag har skickat virkade grytvantar (lila) med Rolf. Den ligger i postlådan. |
| 5:13 | röst | mamma | Jag har skickat virkade grytvantar (lila) med Rolf. Den ligger i postlådan. · STORY |
| 5:13 | händelse | printStart | sak=kruka |
| 5:15 | paket |  | tanke |
| 5:15 | tanke | du | En tandborste. Den har varit på fel ställe. |
| 5:15 | väntar | du | En tandborste. Den har varit på fel ställe. |
| 5:15 | skratt | du | kvarnen spottar |
| 5:16 | toast | guld | ✅ |
| 5:16 | händelse | printKlar | sak=kruka n=55 |
| 5:16 | händelse | tagitUrPrint | sak=kruka n=1 |
| 5:19 | klar | mamma | Jag har skickat virkade grytvantar (lila) med Rolf. Den ligger i postlådan. |
| 5:24 | aliSalt | ali | 100 |
| 5:27 | sak | notis:PETG-kvarnen: den första rullen röd PETG | PETG-kvarnen: den första rullen röd PETG är klar |
| 5:27 | notis | guld | PETG-kvarnen: den första rullen röd PETG är klar |
| 5:30 | klar | notis:PETG-kvarnen: den första rullen röd PETG | PETG-kvarnen: den första rullen röd PETG är klar |
| 5:33 | händelse | printStart | sak=kruka |
| 5:36 | toast | guld | ✅ |
| 5:36 | händelse | printKlar | sak=kruka n=56 |
| 5:36 | händelse | tagitUrPrint | sak=kruka n=1 |
| 5:39 | sak | foto | Röd fabrik (och min tumme) |
| 5:39 | foto | du | Röd fabrik (och min tumme) |
| 5:42 | klar | foto | Röd fabrik (och min tumme) |
| 5:44 | aliSalt | ali | 95 |
| 5:47 | väntar | mamma | Mormor frågar om du har träffat någon på soptippen. Jag sa att du har en sopgubbe och en katt. Hon blev jätteglad. |
| 5:50 | sak | du | Två fabriker. Och det blir fler. |
| 5:50 | notis | tanke | 💭 Två fabriker. Och det blir fler. |
| 5:50 | röst | du | Två fabriker. Och det blir fler. · STORY |
| 5:52 | klar | du | Två fabriker. Och det blir fler. |
| 5:53 | händelse | printStart | sak=pall |
| 5:58 | toast | guld | ✅ |
| 5:58 | händelse | printKlar | sak=pall n=21 |
| 5:58 | händelse | tagitUrPrint | sak=pall n=1 |
| 6:02 | sak | du | En tandborste. Den har varit på fel ställe. |
| 6:02 | notis | tanke | 💭 En tandborste. Den har varit på fel ställe. |
| 6:02 | röst | du | En tandborste. Den har varit på fel ställe. · REAKTION |
| 6:05 | klar | du | En tandborste. Den har varit på fel ställe. |
| 6:06 | aliSalt | ali | 180 |
| 6:07 | brott | FEL SIFFRA | HUD visar 7 184 kr, du har 7364 kr |
| 6:15 | händelse | printStart | sak=kruka |
| 6:18 | toast | guld | ✅ |
| 6:18 | händelse | printKlar | sak=kruka n=57 |
| 6:18 | händelse | tagitUrPrint | sak=kruka n=1 |
| 6:26 | aliSalt | ali | 90 |
| 6:41 | väntar | värld:Mjau. | Mjau. |
| 6:47 | sak | värld:Mjau. | Mjau. |
| 6:47 | bubbla |  | Mjau. |
| 6:49 | klar | värld:Mjau. | Mjau. |
| 6:50 | upplåst | mala | turbomotor |
| 6:50 | brott | UPPLÅST | turbomotor (mala 78 av 10) |
| 6:50 | händelse | upplast | id=turbomotor flask=mala |
| 6:50 | paket |  | tanke → sms |
| 6:50 | tanke | du | Kvarnen hinner inte med. Den behöver något… större. |
| 6:50 | väntar | du | Kvarnen hinner inte med. Den behöver något… större. |
| 6:50 | väntar | ali | Ali här. 🔥 TURBOMOTOR. Jag skrev ”turbo, röda ränder, snabbare än min pappa” till AI:n. Den förstod. Ingen annan förstår. Röda ränder. För farten. Det är vetenskap. |
| 6:54 | händelse | printStart | sak=pall |
| 6:57 | sak | du | Kvarnen hinner inte med. Den behöver något… större. |
| 6:57 | notis | tanke | 💭 Kvarnen hinner inte med. Den behöver något… större. |
| 6:57 | röst | du | Kvarnen hinner inte med. Den behöver något… större. · STORY |
| 7:00 | skratt | du | plastspagetti |
| 7:00 | toast | guld | ✅ |
| 7:00 | händelse | printKlar | sak=pall n=22 |
| 7:00 | händelse | tagitUrPrint | sak=spagetti n=1 |
| 7:02 | klar | du | Kvarnen hinner inte med. Den behöver något… större. |
| 7:02 | skratt | du | falsk tuta |
| 7:02 | väntar | värld:TUUT! Tjena! | TUUT! Tjena! |
| 7:04 | upplåst | strom | sol |
| 7:04 | brott | RESERV | sol (strom 0 av 15) |
| 7:04 | händelse | upplast | id=sol flask=strom |
| 7:04 | paket |  | sms |
| 7:04 | väntar | ali | Ali här. ☀️ Solpaneler inne. Gratis ström från solen. Solen jobbar också hela dagen och klagar aldrig. Jag gillar solen. |
| 7:08 | skratt | du | Ali köper konst |
| 7:08 | aliSalt | ali | 3 |
| 7:10 | sak | ali | Ali här. 🔥 TURBOMOTOR. Jag skrev ”turbo, röda ränder, snabbare än min pappa” till AI:n. Den förstod. Ingen annan förstår. Röda ränder. För farten. Det är vetenskap. |
| 7:10 | sms | ali | Ali här. 🔥 TURBOMOTOR. Jag skrev ”turbo, röda ränder, snabbare än min pappa” till AI:n. Den förstod. Ingen annan förstår. Röda ränder. För farten. Det är vetenskap. |
| 7:10 | sms-bubbla | ali | Ali här. 🔥 TURBOMOTOR. Jag skrev ”turbo, röda ränder, snabbare än min pappa” till AI:n. Den förstod. Ingen annan förstår. Röda ränder. För farten. Det är vetenskap. |
| 7:10 | röst | ali | Ali här. 🔥 TURBOMOTOR. Jag skrev ”turbo, röda ränder, snabbare än min pappa” till AI:n. Den förstod. Ingen annan förstår. Röda ränder. För farten. Det är vetenskap. · STORY |
| 7:16 | händelse | printStart | sak=pall |
| 7:21 | toast | guld | ✅ |
| 7:21 | händelse | printKlar | sak=pall n=23 |
| 7:21 | händelse | tagitUrPrint | sak=pall n=1 |
| 7:23 | klar | ali | Ali här. 🔥 TURBOMOTOR. Jag skrev ”turbo, röda ränder, snabbare än min pappa” till AI:n. Den förstod. Ingen annan förstår. Röda ränder. För farten. Det är vetenskap. |
| 7:25 | struken | värld:TUUT! Tjena! | TUUT! Tjena! |
| 7:29 | aliSalt | ali | 171 |
| 7:33 | toast | guld | 3D-modell köpt – printa solpanel på skrivaren |
| 7:33 | händelse | kopt | sak=sol |
| 7:33 | struken | ali | Ali här. ☀️ Solpaneler inne. Gratis ström från solen. Solen jobbar också hela dagen och klagar aldrig. Jag gillar solen. |
| 7:39 | väntar | mamma | Mormor frågar om du har träffat någon på soptippen. Jag sa att du har en sopgubbe och en katt. Hon blev jätteglad. |
| 7:41 | händelse | printStart | sak=byggsats:sol |
| 7:41 | skratt | du | Kajsa i skrivaren |
| 7:45 | toast | bra | Del 1 av 3 klar |
| 7:48 | toast | bra | Del 2 av 3 klar |
| 7:52 | händelse | printKlar | sak=byggsats:sol n=1 |
| 7:52 | toast | guld | ✅ |
| 7:52 | händelse | tagitUrPrint | sak=byggsats:sol n=1 |
| 7:52 | paket |  | sms |
| 7:52 | väntar | ali | Ali här. Jag såg Solpanel på avstånd. Ett streck blev lite snett. Mitt fel. Vackert ändå. |
| 7:56 | sak | mamma | Printar. Vad är printar. Är det lagligt? Säg att det är lagligt. |
| 7:56 | sms | mamma | Printar. Vad är printar. Är det lagligt? Säg att det är lagligt. |
| 7:56 | sms-bubbla | mamma | Printar. Vad är printar. Är det lagligt? Säg att det är lagligt. |
| 7:56 | röst | mamma | Printar. Vad är printar. Är det lagligt? Säg att det är lagligt. · STORY |
| 7:58 | händelse | placerat | sak=sol |
| 7:58 | paket |  | tanke |
| 7:58 | tanke | du | Den röda kvarnen drar mer än vinden orkar. Solen får hjälpa till. |
| 7:58 | väntar | du | Den röda kvarnen drar mer än vinden orkar. Solen får hjälpa till. |
| 7:58 | händelse | malKlart | id=sol6 del=Dag 6 – Röd PETG nasta=goran6 |
| 7:58 | väntar | du | Ge Göran ett eget ställe. |
| 7:58 | MÅL |  | Ge Göran ett eget ställe |
| 8:01 | klar | mamma | Printar. Vad är printar. Är det lagligt? Säg att det är lagligt. |
| 8:01 | sak | du | Den röda kvarnen drar mer än vinden orkar. Solen får hjälpa till. |
| 8:01 | kvitto-visas | du | Den röda kvarnen drar mer än vinden orkar. Solen får hjälpa till. |
| 8:01 | notis | tanke | 💭 Den röda kvarnen drar mer än vinden orkar. Solen får hjälpa till. |
| 8:01 | röst | du | Den röda kvarnen drar mer än vinden orkar. Solen får hjälpa till. · REAKTION |
| 8:02 | målruta |  | Ge Göran ett eget ställe |
| 8:02 | kvittens-bock |  | ✓ Sätt en solpanel på skjulets tak |
| 8:06 | klar | du | Den röda kvarnen drar mer än vinden orkar. Solen får hjälpa till. |
| 8:07 | sak | du | Ge Göran ett eget ställe. |
| 8:07 | pil |  | Ge Göran ett eget ställe |
| 8:07 | röst | du | Ge Göran ett eget ställe. · MÅL |
| 8:07 | nick |  | nick:63 |
| 8:09 | klar | du | Ge Göran ett eget ställe. |
| 8:11 | struken | ali | Ali här. Jag såg Solpanel på avstånd. Ett streck blev lite snett. Mitt fel. Vackert ändå. |
| 8:17 | händelse | kopt | sak=fagelskramma |
| 8:17 | röst | ali | AI:n och jag gjorde den i natt. Printa den. Snälla. · STORY |
| 8:17 | butiksbubbla | ali | Min Fågelskrämma… AI:n och jag gjorde den i natt. Printa den. Snälla. |
| 8:23 | struken | mamma | Jag har bäddat i ditt rum. Ifall. |
| 8:25 | händelse | printStart | sak=fagelskramma |
| 8:30 | toast | guld | ✅ |
| 8:30 | händelse | printKlar | sak=fagelskramma n=1 |
| 8:31 | händelse | tagitUrPrint | sak=fagelskramma n=1 |
| 8:37 | händelse | placerat | sak=fagelskramma |
| 8:37 | paket |  | tanke |
| 8:37 | tanke | du | Göran har ett hem nu. Bättre än jag hade för en vecka sen. |
| 8:37 | väntar | du | Göran har ett hem nu. Bättre än jag hade för en vecka sen. |
| 8:37 | händelse | malKlart | id=goran6 del=Dag 6 – Röd PETG nasta=sov6 |
| 8:37 | paket |  | lapp |
| 8:37 | lapp | 📔 Dagbok | Dag 6 är slut. Nu vet grannen att jag bor HÄR. Han verkar inte glad. Blå plast säljer billigt. I morgon. |
| 8:37 | meddelande | du | Dag 6 är slut. Nu vet grannen att jag bor HÄR. Han verkar inte glad. Blå plast säljer billigt. I morgon. |
| 8:37 | dagbokkort | du | Dag 6 är slut. Nu vet grannen att jag bor HÄR. Han verkar inte glad. Blå plast säljer billigt. I morgon. |
| 8:37 | MÅL |  | Klart för idag – sov när du vill |
| 8:37 | röst | du | Dag 6 är slut. Nu vet grannen att jag bor HÄR. Han verkar inte glad. Blå plast säljer billigt. I morgon. · STORY |
| 8:47 | händelse | brevLast | id=kvall6 |
| 8:47 | sak | du | Göran har ett hem nu. Bättre än jag hade för en vecka sen. |
| 8:47 | kvitto-visas | du | Göran har ett hem nu. Bättre än jag hade för en vecka sen. |
| 8:47 | notis | tanke | 💭 Göran har ett hem nu. Bättre än jag hade för en vecka sen. |
| 8:47 | röst | du | Göran har ett hem nu. Bättre än jag hade för en vecka sen. · REAKTION |
| 8:47 | målruta |  | Klart för idag – sov när du vill |
| 8:48 | väntar | notis:🌇 Klockan är 21. Ali slår igen luckan.  | 🌇 Klockan är 21. Ali slår igen luckan. Dagens jobb är klart – gå in i skjulet och sov i sängen. |
| 8:52 | klar | du | Göran har ett hem nu. Bättre än jag hade för en vecka sen. |
| 8:52 | sak | du | (nytt mål i rutan) |
| 8:52 | pil |  | Klart för idag – sov när du vill |
| 8:53 | klar | du | (nytt mål i rutan) |
| 8:55 | brott | SEN KVITTENS | 10.3 s sen: ”Göran har ett hem nu. Bättre än jag hade för en ve” (mål klart) |
| 8:59 | webbBetalt | du | 658 |

<details><summary>Botens handlingar dag 6</summary>

- 0:00 — dag 6 börjar — (7276 kr)
- 0:15 popup: "FORTSÄTT" (7276 kr)
- 0:21 gå till Rolfs postlåda (28 m) (7276 kr)
- 0:27 panel: "Rolfs postlåda
Det här låg i l" (7676 kr)
- 0:31 gå till pappa (20 m) (7676 kr)
- 0:48 gå till Rolfs postlåda (20 m) (7676 kr)
- 0:56 panel: "Rolfs postlåda
Det här låg i l" (7676 kr)
- 1:00 gå till pappa (19 m) (7676 kr)
- 1:56 gå till Ali (13 m) (7676 kr)
- 1:56 öppnar Alis butik – köpa röda kvarnen (petg) (7676 kr)
- 1:58 köper petgkvarn för 1200 kr (6476 kr)
- 2:11 plockar 5 skräp på tippen (bär max 16) (6476 kr)
- 2:15 gå till kvarnen (14 m) (6476 kr)
- 2:21 gå till skrivaren (5 m) (6476 kr)
- 2:23 printar Röda kvarnen (PETG) (3 delar) (6476 kr)
- 2:35 tar ut 1 st ur skrivaren (6476 kr)
- 2:36 gå till platsen för röda kvarnen (petg) (5 m) (6476 kr)
- 2:37 ställer ut röda kvarnen (petg) (6476 kr)
- 2:45 gå till Rolfs postlåda (9 m) (6476 kr)
- 2:49 panel: "Rolfs postlåda
Det här låg i l" (6476 kr)
- 2:54 gå till säckkärran i högen (21 m) (6476 kr)
- 3:03 gå till PETG-kvarnen (19 m) (6476 kr)
- 3:03 tömmer det tunga i PETG-kvarnen (6476 kr)
- 3:09 gå till skrivaren (5 m) (6476 kr)
- 3:10 printar Blomkruka (6476 kr)
- 3:14 tar ut 1 st ur skrivaren (6476 kr)
- 3:15 printar Blomkruka (6476 kr)
- 3:19 tar ut 1 st ur skrivaren (6476 kr)
- 3:20 printar Pall (6476 kr)
- 3:27 tar ut 1 st ur skrivaren (6476 kr)
- 3:32 plockar 2 skräp på tippen (bär max 16) (6476 kr)
- 3:35 gå till kvarnen (12 m) (6476 kr)
- 3:38 gå till skrivaren (5 m) (6476 kr)
- 3:39 printar Pall (6476 kr)
- 3:46 tar ut 1 st ur skrivaren (6476 kr)
- 3:50 gå till datorn (21 m) (6476 kr)
- 3:58 panel: "Webbshopen · Soptippsvägen 1
B" (6476 kr)
- 4:07 panel: "Webbshopen · Soptippsvägen 1
B" (6476 kr)
- 4:16 panel: "Webbshopen · Soptippsvägen 1
B" (6476 kr)
- 4:30 popup: "Jag säljer saker jag printar." (6476 kr)
- 4:40 popup: "Läst" (6476 kr)
- 4:44 gå till Rolfs postlåda (paket) (29 m) (6476 kr)
- 4:45 webbshop: 2 paket i postlådan (6476 kr)
- 4:45 tjänar pengar till väntar på flaskhalsen för sol: 6476/6516 kr → printar blomkruka (105 kr) (6476 kr)
- 4:46 gå till skrivaren (8 m) (6476 kr)
- 4:48 printar Blomkruka (6476 kr)
- 4:51 tar ut 1 st ur skrivaren (6476 kr)
- 4:57 gå till Ali (26 m) (6476 kr)
- 4:57 öppnar Alis butik – sälja (6476 kr)
- 5:00 säljer hos Ali: +513 kr (6989 kr)
- 5:06 tjänar pengar till väntar på flaskhalsen för sol: 6989/7029 kr → printar blomkruka (100 kr) (6989 kr)
- 5:12 gå till skrivaren (24 m) (6989 kr)
- 5:13 printar Blomkruka (6989 kr)
- 5:17 tar ut 1 st ur skrivaren (6989 kr)
- 5:22 gå till Ali (24 m) (6989 kr)
- 5:22 öppnar Alis butik – sälja (6989 kr)
- 5:24 säljer hos Ali: +100 kr (7089 kr)
- 5:26 tjänar pengar till väntar på flaskhalsen för sol: 7089/7129 kr → printar blomkruka (95 kr) (7089 kr)
- 5:31 gå till skrivaren (24 m) (7089 kr)
- 5:33 printar Blomkruka (7089 kr)
- 5:37 tar ut 1 st ur skrivaren (7089 kr)
- 5:42 gå till Ali (24 m) (7089 kr)
- 5:42 öppnar Alis butik – sälja (7089 kr)
- 5:44 säljer hos Ali: +95 kr (7184 kr)
- 5:46 tjänar pengar till väntar på flaskhalsen för sol: 7184/7224 kr → printar pall (180 kr) (7184 kr)
- 5:51 gå till skrivaren (24 m) (7184 kr)
- 5:53 printar Pall (7184 kr)
- 5:59 tar ut 1 st ur skrivaren (7184 kr)
- 6:04 gå till Ali (24 m) (7184 kr)
- 6:04 öppnar Alis butik – sälja (7184 kr)
- 6:06 säljer hos Ali: +180 kr (7364 kr)
- 6:08 tjänar pengar till väntar på flaskhalsen för sol: 7364/7404 kr → printar blomkruka (90 kr) (7364 kr)
- 6:13 gå till skrivaren (24 m) (7364 kr)
- 6:15 printar Blomkruka (7364 kr)
- 6:19 tar ut 1 st ur skrivaren (7364 kr)
- 6:24 gå till Ali (24 m) (7364 kr)
- 6:24 öppnar Alis butik – sälja (7364 kr)
- 6:26 säljer hos Ali: +90 kr (7454 kr)
- 6:28 tjänar pengar till väntar på flaskhalsen för sol: 7454/7494 kr → printar pall (171 kr) (7454 kr)
- 6:44 plockar 9 skräp på tippen (bär max 16) (7454 kr)
- 6:47 gå till kvarnen (13 m) (7454 kr)
- 6:53 gå till skrivaren (5 m) (7454 kr)
- 6:54 printar Pall (7454 kr)
- 7:00 tar ut 1 st ur skrivaren (7454 kr)
- 7:06 gå till Ali (27 m) (7454 kr)
- 7:06 öppnar Alis butik – sälja (7454 kr)
- 7:08 säljer hos Ali: +3 kr (7457 kr)
- 7:09 tjänar pengar till väntar på flaskhalsen för sol: 7457/7494 kr → printar pall (171 kr) (7457 kr)
- 7:14 gå till skrivaren (24 m) (7457 kr)
- 7:16 printar Pall (7457 kr)
- 7:22 tar ut 1 st ur skrivaren (7457 kr)
- 7:27 gå till Ali (24 m) (7457 kr)
- 7:27 öppnar Alis butik – sälja (7457 kr)
- 7:29 säljer hos Ali: +171 kr (7628 kr)
- 7:31 öppnar Alis butik – köpa solpanel (7628 kr)
- 7:34 köper sol för 400 kr (7228 kr)
- 7:40 gå till skrivaren (24 m) (7228 kr)
- 7:41 printar Solpanel (3 delar) (7228 kr)
- 7:53 tar ut 1 st ur skrivaren (7228 kr)
- 7:57 gå till platsen för solpanel (20 m) (7228 kr)
- 7:58 ställer ut solpanel (7228 kr)
- 8:15 gå till Ali (18 m) (7228 kr)
- 8:15 öppnar Alis butik – köpa receptet fågelskrämma (7228 kr)
- 8:18 köper fagelskramma för 40 kr (7188 kr)
- 8:24 gå till skrivaren (24 m) (7188 kr)
- 8:25 printar Fågelskrämma (7188 kr)
- 8:31 tar ut 1 st ur skrivaren (7188 kr)
- 8:36 gå till platsen för fågelskrämma (20 m) (7188 kr)
- 8:37 ställer ut fågelskrämma (7188 kr)
- 8:47 popup: "FORTSÄTT" (7188 kr)
- 8:56 gå till sängen (7 m) (7188 kr)

</details>

## Dag 7

| Tid | Källa | Vem | Text |
|---|---|---|---|
| 8:59 | vara | ali | pall |
| 8:59 | händelse | malKlart | id=sov6 del=Dag 6 – Röd PETG nasta=r7-bygg-petg-skrivaren |
| 8:59 | MÅL |  | Bygg PETG-skrivaren |
| 0:01 | händelse | dagenBorjar | dag=7 |
| 0:01 | meddelande | du | Dag 7. 15 dagar till jul. Säljer jag inget blir det tomt till jul. |
| 0:01 | dagbokkort | du | PETG-skrivaren · Dag 7. 15 dagar till jul. Säljer jag inget blir det tomt till jul. |
| 0:01 | röst | du | PETG-skrivaren. Dag 7. 15 dagar till jul. Säljer jag inget blir det tomt till jul. · STORY |
| 0:03 | paket |  | sms |
| 0:03 | väntar | rolf | Rolf här. Ja har en grej. Lite känslig. Ja la en lapp i postlådan. Läs den o bränn den sen. /R |
| 0:15 | händelse | morgonkortStangt | dag=7 |
| 0:15 | paket |  | toast |
| 0:15 | väntar | notis:🤢 Något luktar … Mammas mat har möglat  | 🤢 Något luktar … Mammas mat har möglat och blommorna har vissnat. Trivseln sjunker. |
| 0:15 | struken | kedja | d7 |
| 0:15 | väntar | du | Röd plast kräver en egen skrivare. Den vanliga vill inte. |
| 0:19 | målruta |  | Bygg PETG-skrivaren |
| 0:20 | sak | du | Röd plast kräver en egen skrivare. Den vanliga vill inte. |
| 0:20 | pil |  | Bygg PETG-skrivaren |
| 0:20 | notis | tanke | 💭 Röd plast kräver en egen skrivare. Den vanliga vill inte. |
| 0:20 | röst | du | Röd plast kräver en egen skrivare. Den vanliga vill inte. · MÅL |
| 0:21 | nick |  | nick:65 |
| 0:25 | klar | du | Röd plast kräver en egen skrivare. Den vanliga vill inte. |
| 0:34 | struken | notis:🌇 Klockan är 21. Ali slår igen luckan.  | 🌇 Klockan är 21. Ali slår igen luckan. Dagens jobb är klart – gå in i skjulet och sov i sängen. |
| 0:34 | sak | notis:🤢 Något luktar … Mammas mat har möglat  | 🤢 Något luktar … Mammas mat har möglat och blommorna har vissnat. Trivseln sjunker. |
| 0:34 | toast | fel | 🤢 Något luktar … Mammas mat har möglat och blommorna har vissnat. Trivseln sjunker. |
| 0:34 | notis | fel | 🤢 Något luktar … Mammas mat har möglat och blommorna har vissnat. Trivseln sjunker. |
| 0:36 | klar | notis:🤢 Något luktar … Mammas mat har möglat  | 🤢 Något luktar … Mammas mat har möglat och blommorna har vissnat. Trivseln sjunker. |
| 0:40 | röst | ali | Satt med AI:n hela natten igen. Fråga inte vad. Okej, en soffa. Fråga inte. · STORY |
| 0:40 | butiksbubbla | ali | Satt med AI:n hela natten igen. Fråga inte vad. Okej, en soffa. Fråga inte. |
| 0:42 | skratt | du | Alis dyr-pling |
| 0:42 | toast | guld | 3D-modell köpt – printa petg-skrivare på skrivaren |
| 0:42 | händelse | kopt | sak=skrivarepetg |
| 0:44 | brott | FLYTTAD EFTER STÄLL | p:p12 har flyttat sig 0.04 m efter att den ställdes |
| 0:46 | väntar | info:guld | Göran tycker om fågelskrämman. Han sitter på den. |
| 0:46 | sak | info:guld | Göran tycker om fågelskrämman. Han sitter på den. |
| 0:46 | kvitto-visas | info:guld | Göran tycker om fågelskrämman. Han sitter på den. |
| 0:46 | toast | guld | Göran tycker om fågelskrämman. Han sitter på den. |
| 0:48 | klar | info:guld | Göran tycker om fågelskrämman. Han sitter på den. |
| 0:56 | väntar | värld:Mjau. | Mjau. |
| 1:00 | sak | värld:Mjau. | Mjau. |
| 1:00 | bubbla |  | Mjau. |
| 1:01 | skratt | du | kvarnen spottar |
| 1:02 | klar | värld:Mjau. | Mjau. |
| 1:09 | händelse | printStart | sak=byggsats:skrivarepetg |
| 1:13 | toast | bra | Del 1 av 5 klar |
| 1:18 | toast | bra | Del 2 av 5 klar |
| 1:22 | toast | bra | Del 3 av 5 klar |
| 1:27 | toast | bra | Del 4 av 5 klar |
| 1:31 | händelse | printKlar | sak=byggsats:skrivarepetg n=1 |
| 1:31 | toast | guld | ✅ |
| 1:32 | händelse | tagitUrPrint | sak=byggsats:skrivarepetg n=1 |
| 1:32 | paket |  | sms |
| 1:32 | väntar | ali | Ali här. Ännu en ritning som blev på riktigt: PETG-skrivare. Semesterkassan växer. Livet växer. |
| 1:35 | händelse | placerat | sak=skrivarepetg |
| 1:35 | händelse | malKlart | id=r7-bygg-petg-skrivaren del=Dag 7 – PETG-skrivaren nasta=r7-printa-designvas-rod |
| 1:35 | väntar | du | En vas. Röd. Design. Ali kommer att låtsas att han förstår den. |
| 1:35 | MÅL |  | Printa en designvas i röd PETG |
| 1:36 | sak | du | En vas. Röd. Design. Ali kommer att låtsas att han förstår den. |
| 1:36 | målruta |  | Printa en designvas i röd PETG |
| 1:36 | pil |  | Printa en designvas i röd PETG |
| 1:36 | notis | tanke | 💭 En vas. Röd. Design. Ali kommer att låtsas att han förstår den. |
| 1:36 | röst | du | En vas. Röd. Design. Ali kommer att låtsas att han förstår den. · MÅL |
| 1:39 | kvittens-bock |  | ✓ Bygg PETG-skrivaren |
| 1:41 | klar | du | En vas. Röd. Design. Ali kommer att låtsas att han förstår den. |
| 1:49 | sak | ali | Ali här. Ännu en ritning som blev på riktigt: PETG-skrivare. Semesterkassan växer. Livet växer. |
| 1:49 | sms | ali | Ali här. Ännu en ritning som blev på riktigt: PETG-skrivare. Semesterkassan växer. Livet växer. |
| 1:49 | sms-bubbla | ali | Ali här. Ännu en ritning som blev på riktigt: PETG-skrivare. Semesterkassan växer. Livet växer. |
| 1:49 | röst | ali | Ali här. Ännu en ritning som blev på riktigt: PETG-skrivare. Semesterkassan växer. Livet växer. · REAKTION |
| 1:51 | skratt | du | Alis dyr-pling |
| 1:51 | händelse | kopt | sak=n2_vas |
| 1:51 | butiksbubbla | ali | Designvas i röd PETG. Röd. AI:n sa att röd säljer. AI:n har aldrig sålt något. Men okej. |
| 1:53 | väntar | ali | Röd. AI:n sa att röd säljer. AI:n har aldrig sålt något. Men okej. |
| 1:54 | skratt | du | falsk tuta |
| 1:57 | klar | ali | Ali här. Ännu en ritning som blev på riktigt: PETG-skrivare. Semesterkassan växer. Livet växer. |
| 1:59 | sak | ali | Röd. AI:n sa att röd säljer. AI:n har aldrig sålt något. Men okej. |
| 1:59 | röst | ali | Röd. AI:n sa att röd säljer. AI:n har aldrig sålt något. Men okej. · STORY |
| 2:01 | händelse | printStart | sak=n2_vas |
| 2:01 | toast | bra | 🔗 Slangen kopplad |
| 2:04 | toast | guld | ✅ |
| 2:04 | händelse | printKlar | sak=n2_vas n=1 |
| 2:04 | händelse | malKlart | id=r7-printa-designvas-rod del=Dag 7 – PETG-skrivaren nasta=r7-salj-designvasen |
| 2:04 | väntar | du | Vasen till Ali. Han betalar mer för röd. |
| 2:04 | MÅL |  | Sälj designvasen |
| 2:04 | händelse | tagitUrPrint | sak=n2_vas n=1 |
| 2:05 | klar | ali | Röd. AI:n sa att röd säljer. AI:n har aldrig sålt något. Men okej. |
| 2:05 | målruta |  | Sälj designvasen |
| 2:07 | sak | du | Vasen till Ali. Han betalar mer för röd. |
| 2:07 | pil |  | Sälj designvasen |
| 2:07 | notis | tanke | 💭 Vasen till Ali. Han betalar mer för röd. |
| 2:07 | röst | du | Vasen till Ali. Han betalar mer för röd. · MÅL |
| 2:08 | kvittens-bock |  | ✓ Printa en designvas i röd PETG |
| 2:10 | klar | du | Vasen till Ali. Han betalar mer för röd. |
| 2:16 | väntar | värld:TUUT! Tjena! | TUUT! Tjena! |
| 2:18 | väntar | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått pirran. Och röda kvarnen. Vi tar en låt på det. Den här är till dig, Gunnar. |
| 2:18 | radio | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått pirran. Och röda kvarnen. Vi tar en låt på det. Den här är till dig, Gunnar. |
| 2:18 | skratt | du | Radio-Kjelle |
| 2:20 | aliSalt | ali | 790 |
| 2:21 | sak | värld:TUUT! Tjena! | TUUT! Tjena! |
| 2:21 | bubbla |  | TUUT! Tjena! |
| 2:21 | händelse | malKlart | id=r7-salj-designvasen del=Dag 7 – PETG-skrivaren nasta=saljlada |
| 2:21 | struken | kedja | vasSald |
| 2:21 | väntar | du | En säljlåda. Då slipper jag springa till Ali med varje vas. |
| 2:21 | målruta |  | Bygg säljlådan vid samlingsplatsen |
| 2:21 | MÅL |  | Bygg säljlådan vid samlingsplatsen |
| 2:24 | klar | värld:TUUT! Tjena! | TUUT! Tjena! |
| 2:25 | kvittens-bock |  | ✓ Sälj designvasen |
| 2:26 | sak | du | En säljlåda. Då slipper jag springa till Ali med varje vas. |
| 2:26 | pil |  | Bygg säljlådan vid samlingsplatsen |
| 2:26 | notis | tanke | 💭 En säljlåda. Då slipper jag springa till Ali med varje vas. |
| 2:26 | röst | du | En säljlåda. Då slipper jag springa till Ali med varje vas. · MÅL |
| 2:31 | klar | du | En säljlåda. Då slipper jag springa till Ali med varje vas. |
| 2:33 | struken | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått pirran. Och röda kvarnen. Vi tar en låt på det. Den här är till dig, Gunnar. |
| 2:35 | toast | guld | 3D-modell köpt – printa säljlåda på skrivaren |
| 2:35 | händelse | kopt | sak=saljlada |
| 2:51 | toast | skak | handen skakar: fullt |
| 3:02 | händelse | printStart | sak=byggsats:saljlada |
| 3:05 | toast | bra | Del 1 av 2 klar |
| 3:08 | händelse | printKlar | sak=byggsats:saljlada n=1 |
| 3:08 | toast | guld | ✅ |
| 3:09 | händelse | tagitUrPrint | sak=byggsats:saljlada n=1 |
| 3:13 | händelse | placerat | sak=saljlada |
| 3:13 | kvittens | ali | Jag hämtar varje morgon. Du lägger i, jag betalar. |
| 3:13 | väntar | ali | Jag hämtar varje morgon. Du lägger i, jag betalar. |
| 3:13 | paket |  | sms |
| 3:13 | väntar | rolf | Lådan vid fabriken! Ali kommer mä sin lilla bil varje morron. Ja vinkar. Han vinkar int. /R |
| 3:13 | händelse | malKlart | id=saljlada del=Dag 7 – PETG-skrivaren nasta=saljlada3 |
| 3:13 | väntar | du | Vaserna i lådan. Ali hämtar själv. |
| 3:13 | MÅL |  | Lägg 3 vaser i säljlådan · 0/3 |
| 3:14 | väntar | pappa | Scanian står i garaget. Den går inte. Den ska gå. |
| 3:14 | sak | ali | Jag hämtar varje morgon. Du lägger i, jag betalar. |
| 3:14 | notis |  | Jag hämtar varje morgon. Du lägger i, jag betalar. |
| 3:14 | röst | ali | Jag hämtar varje morgon. Du lägger i, jag betalar. · STORY |
| 3:14 | målruta |  | Lägg 3 vaser i säljlådan · 0/3 |
| 3:18 | klar | ali | Jag hämtar varje morgon. Du lägger i, jag betalar. |
| 3:19 | sak | du | Vaserna i lådan. Ali hämtar själv. |
| 3:19 | pil |  | Lägg 3 vaser i säljlådan · 0/3 |
| 3:19 | notis | tanke | 💭 Vaserna i lådan. Ali hämtar själv. |
| 3:19 | röst | du | Vaserna i lådan. Ali hämtar själv. · MÅL |
| 3:19 | nick |  | nick:69 |
| 3:22 | klar | du | Vaserna i lådan. Ali hämtar själv. |
| 3:28 | händelse | printStart | sak=n2_vas |
| 3:31 | toast | guld | ✅ |
| 3:31 | händelse | printKlar | sak=n2_vas n=2 |
| 3:31 | händelse | tagitUrPrint | sak=n2_vas n=1 |
| 3:49 | väntar | info:bra | 📦 1 saker i lådan · Ali hämtar i morgon bitti |
| 3:56 | sak | info:bra | 📦 1 saker i lådan · Ali hämtar i morgon bitti |
| 3:56 | kvitto-visas | info:bra | 📦 1 saker i lådan · Ali hämtar i morgon bitti |
| 3:56 | toast | bra | 📦 1 saker i lådan · Ali hämtar i morgon bitti |
| 3:58 | klar | info:bra | 📦 1 saker i lådan · Ali hämtar i morgon bitti |
| 4:04 | händelse | printStart | sak=n2_vas |
| 4:07 | toast | guld | ✅ |
| 4:07 | händelse | printKlar | sak=n2_vas n=3 |
| 4:07 | händelse | tagitUrPrint | sak=n2_vas n=1 |
| 4:10 | skratt | du | falsk tuta |
| 4:10 | väntar | värld:TUUT! Hej grannen! | TUUT! Hej grannen! |
| 4:11 | sak | värld:TUUT! Hej grannen! | TUUT! Hej grannen! |
| 4:11 | bubbla |  | TUUT! Hej grannen! |
| 4:14 | klar | värld:TUUT! Hej grannen! | TUUT! Hej grannen! |
| 4:27 | väntar | info:bra | 📦 1 saker i lådan · Ali hämtar i morgon bitti |
| 4:34 | sak | info:bra | 📦 1 saker i lådan · Ali hämtar i morgon bitti |
| 4:34 | kvitto-visas | info:bra | 📦 1 saker i lådan · Ali hämtar i morgon bitti |
| 4:34 | toast | bra | 📦 1 saker i lådan · Ali hämtar i morgon bitti |
| 4:36 | klar | info:bra | 📦 1 saker i lådan · Ali hämtar i morgon bitti |
| 4:38 | struken | mamma | Mormor frågar om du har träffat någon på soptippen. Jag sa att du har en sopgubbe och en katt. Hon blev jätteglad. |
| 4:42 | händelse | printStart | sak=n2_vas |
| 4:45 | toast | guld | ✅ |
| 4:45 | händelse | printKlar | sak=n2_vas n=4 |
| 4:45 | händelse | tagitUrPrint | sak=n2_vas n=1 |
| 5:04 | väntar | info:bra | 📦 1 saker i lådan · Ali hämtar i morgon bitti |
| 5:11 | sak | info:bra | 📦 1 saker i lådan · Ali hämtar i morgon bitti |
| 5:11 | kvitto-visas | info:bra | 📦 1 saker i lådan · Ali hämtar i morgon bitti |
| 5:11 | toast | bra | 📦 1 saker i lådan · Ali hämtar i morgon bitti |
| 5:11 | händelse | malKlart | id=saljlada3 del=Dag 7 – PETG-skrivaren nasta=sov7 |
| 5:11 | paket |  | lapp |
| 5:11 | väntar | du | Dag 7 är slut. Nu vet pappa att jag bor HÄR. Ryggen värker av allt bärande. |
| 5:11 | MÅL |  | Klart för idag – sov när du vill |
| 5:13 | klar | info:bra | 📦 1 saker i lådan · Ali hämtar i morgon bitti |
| 5:13 | sak | du | Dag 7 är slut. Nu vet pappa att jag bor HÄR. Ryggen värker av allt bärande. |
| 5:13 | kvitto-visas | du | Dag 7 är slut. Nu vet pappa att jag bor HÄR. Ryggen värker av allt bärande. |
| 5:13 | lapp | 📔 Dagbok | Dag 7 är slut. Nu vet pappa att jag bor HÄR. Ryggen värker av allt bärande. |
| 5:13 | meddelande | du | Dag 7 är slut. Nu vet pappa att jag bor HÄR. Ryggen värker av allt bärande. |
| 5:13 | dagbokkort | du | Dag 7 är slut. Nu vet pappa att jag bor HÄR. Ryggen värker av allt bärande. |
| 5:13 | röst | du | Dag 7 är slut. Nu vet pappa att jag bor HÄR. Ryggen värker av allt bärande. · STORY |
| 5:21 | händelse | brevLast | id=kvall7 |
| 5:21 | klar | du | Dag 7 är slut. Nu vet pappa att jag bor HÄR. Ryggen värker av allt bärande. |
| 5:21 | väntar | notis:🌇 Klockan är 21. Ali slår igen luckan.  | 🌇 Klockan är 21. Ali slår igen luckan. Dagens jobb är klart – gå in i skjulet och sov i sängen. |
| 5:21 | målruta |  | Klart för idag – sov när du vill |
| 5:22 | sak | du | (nytt mål i rutan) |
| 5:22 | pil |  | Klart för idag – sov när du vill |
| 5:22 | klar | du | (nytt mål i rutan) |
| 5:29 | aliSalt | ali | 2141 |

<details><summary>Botens handlingar dag 7</summary>

- 0:00 — dag 7 börjar — (7846 kr)
- 0:15 popup: "FORTSÄTT" (7846 kr)
- 0:25 gå till Rolfs postlåda (29 m) (7846 kr)
- 0:34 panel: "En lapp från Rolf
Lite olaglig" (7846 kr)
- 0:40 gå till Ali (31 m) (7846 kr)
- 0:40 öppnar Alis butik – köpa petg-skrivare (7846 kr)
- 0:43 köper skrivarepetg för 1500 kr (6346 kr)
- 0:57 plockar 4 skräp på tippen (bär max 16) (6346 kr)
- 1:00 gå till kvarnen (13 m) (6346 kr)
- 1:07 gå till skrivaren (5 m) (6346 kr)
- 1:09 printar PETG-skrivare (5 delar) (6346 kr)
- 1:32 tar ut 1 st ur skrivaren (6346 kr)
- 1:34 gå till platsen för petg-skrivare (4 m) (6346 kr)
- 1:35 ställer ut petg-skrivare (6346 kr)
- 1:50 gå till Ali (29 m) (6346 kr)
- 1:50 öppnar Alis butik – köpa receptet designvas i röd petg (6346 kr)
- 1:52 köper n2_vas för 600 kr (5746 kr)
- 1:59 gå till skrivaren (29 m) (5746 kr)
- 2:01 printar Designvas i röd PETG (5746 kr)
- 2:05 tar ut 1 st ur skrivaren (5746 kr)
- 2:18 gå till Ali (29 m) (5746 kr)
- 2:18 öppnar Alis butik – sälja vasen (5746 kr)
- 2:21 säljer hos Ali: +790 kr (6536 kr)
- 2:33 öppnar Alis butik – köpa säljlåda (6536 kr)
- 2:36 köper saljlada för 400 kr (6136 kr)
- 2:52 plockar 7 skräp på tippen (bär max 16) (6136 kr)
- 2:55 gå till kvarnen (16 m) (6136 kr)
- 3:00 gå till skrivaren (5 m) (6136 kr)
- 3:02 printar Säljlåda (2 delar) (6136 kr)
- 3:09 tar ut 1 st ur skrivaren (6136 kr)
- 3:12 gå till platsen för säljlåda (11 m) (6136 kr)
- 3:13 ställer ut säljlåda (6136 kr)
- 3:27 gå till skrivaren (13 m) (6136 kr)
- 3:28 printar Designvas i röd PETG (6136 kr)
- 3:32 tar ut 1 st ur skrivaren (6136 kr)
- 3:34 gå till säljlådan (10 m) (6136 kr)
- 3:41 panel: "Säljlådan
0 saker i lådan
Lägg" (6136 kr)
- 3:49 panel: "Säljlådan
0 saker i lådan
Lägg" (6136 kr)
- 3:56 panel: "Säljlådan
1 saker i lådan
Lägg" (6136 kr)
- 3:56 lägger vaserna i säljlådan (DA) (6136 kr)
- 4:03 gå till skrivaren (10 m) (6136 kr)
- 4:04 printar Designvas i röd PETG (6136 kr)
- 4:08 tar ut 1 st ur skrivaren (6136 kr)
- 4:12 gå till säljlådan (10 m) (6136 kr)
- 4:19 panel: "Säljlådan
1 saker i lådan
Lägg" (6136 kr)
- 4:27 panel: "Säljlådan
1 saker i lådan
Lägg" (6136 kr)
- 4:34 panel: "Säljlådan
2 saker i lådan
Lägg" (6136 kr)
- 4:34 lägger vaserna i säljlådan (DA) (6136 kr)
- 4:40 gå till skrivaren (10 m) (6136 kr)
- 4:42 printar Designvas i röd PETG (6136 kr)
- 4:46 tar ut 1 st ur skrivaren (6136 kr)
- 4:49 gå till säljlådan (10 m) (6136 kr)
- 4:56 panel: "Säljlådan
2 saker i lådan
Lägg" (6136 kr)
- 5:04 panel: "Säljlådan
2 saker i lådan
Lägg" (6136 kr)
- 5:11 panel: "Säljlådan
3 saker i lådan
Lägg" (6136 kr)
- 5:11 lägger vaserna i säljlådan (DA) (6136 kr)
- 5:21 popup: "FORTSÄTT" (6136 kr)
- 5:27 gå till sängen (13 m) (6136 kr)

</details>

## Dag 8

| Tid | Källa | Vem | Text |
|---|---|---|---|
| 5:29 | vara | ali | n2_vas |
| 5:29 | händelse | malKlart | id=sov7 del=Dag 7 – PETG-skrivaren nasta=r8-bygg-skrivare-l |
| 5:29 | MÅL |  | Printa och sälj |
| 0:01 | paket |  | sms |
| 0:01 | väntar | rolf | Grannen står me kikare i fönstret igen. Bry dej int. /R |
| 0:01 | paket |  | sms |
| 0:01 | väntar | ali | Ali här. Kolfiber. Dyrt. Lätt. Jag har ingen kvarn för det. |
| 0:01 | händelse | dagenBorjar | dag=8 |
| 0:01 | meddelande | du | Dag 8. 14 dagar till jul. Utan mer ström står allt still i kylan. |
| 0:01 | dagbokkort | du | Magnetpistolen · Dag 8. 14 dagar till jul. Utan mer ström står allt still i kylan. |
| 0:01 | röst | du | Magnetpistolen. Dag 8. 14 dagar till jul. Utan mer ström står allt still i kylan. · STORY |
| 0:15 | händelse | morgonkortStangt | dag=8 |
| 0:15 | paket |  | sms |
| 0:15 | väntar | ali | Ali här. 🔥 TURBOMOTOR. Jag skrev ”turbo, röda ränder, snabbare än min pappa” till AI:n. Den förstod. Ingen annan förstår. Röda ränder. För farten. Det är vetenskap. |
| 0:15 | struken | kedja | d8 |
| 0:15 | målruta |  | Printa och sälj |
| 0:21 | sak | du | (nytt mål i rutan) |
| 0:21 | pil |  | Printa och sälj |
| 0:21 | händelse | printStart | sak=kruka |
| 0:21 | skratt | du | Kajsa i skrivaren |
| 0:21 | klar | du | (nytt mål i rutan) |
| 0:23 | struken | notis:🌇 Klockan är 21. Ali slår igen luckan.  | 🌇 Klockan är 21. Ali slår igen luckan. Dagens jobb är klart – gå in i skjulet och sov i sängen. |
| 0:23 | struken | ali | Ali här. Kolfiber. Dyrt. Lätt. Jag har ingen kvarn för det. |
| 0:24 | toast | guld | ✅ |
| 0:24 | händelse | printKlar | sak=kruka n=58 |
| 0:24 | händelse | tagitUrPrint | sak=kruka n=1 |
| 0:26 | händelse | printStart | sak=kruka |
| 0:29 | toast | guld | ✅ |
| 0:29 | händelse | printKlar | sak=kruka n=59 |
| 0:30 | händelse | tagitUrPrint | sak=kruka n=1 |
| 0:32 | händelse | printStart | sak=pall |
| 0:37 | toast | guld | ✅ |
| 0:37 | händelse | printKlar | sak=pall n=24 |
| 0:37 | händelse | tagitUrPrint | sak=pall n=1 |
| 0:37 | väntar | info:fel | Göran snodde blomkruka. |
| 0:37 | sak | info:fel | Göran snodde blomkruka. |
| 0:37 | kvitto-visas | info:fel | Göran snodde blomkruka. |
| 0:37 | toast | fel | Göran snodde blomkruka. |
| 0:39 | klar | info:fel | Göran snodde blomkruka. |
| 0:40 | väntar | info:info | Pappa kommer gående. Han bär på en kasse … |
| 0:40 | scenInfo | pappa | Pappa kommer |
| 0:50 | skratt | du | däcket rullar iväg |
| 0:50 | sak | info:info | Pappa kommer gående. Han bär på en kasse … |
| 0:50 | toast |  | Pappa kommer gående. Han bär på en kasse … |
| 0:51 | webb | du | packade 1 pall |
| 0:52 | klar | info:info | Pappa kommer gående. Han bär på en kasse … |
| 1:03 | väntar | bud | (tips) |
| 1:03 | sak | bud | (tips) |
| 1:04 | klar | bud | (tips) |
| 1:06 | meddelande | mamma | Kommer du hem på jul? Pappa har redan köpt skinkan. I augusti. Den ligger i frysen och tittar på mig. |
| 1:07 | röst | mamma | Kommer du hem på jul? Pappa har redan köpt skinkan. I augusti. Den ligger i frysen och tittar på mig. · STORY |
| 1:19 | paket |  | sms |
| 1:19 | väntar | mamma | Det säger du nu. |
| 1:30 | händelse | brevLast | id=m_jul |
| 1:30 | väntar | info:bra | 📦 Paketet till Två syskon i Lund ligger i postlådan – Rolf tar det till posten |
| 1:30 | sak | info:bra | 📦 Paketet till Två syskon i Lund ligger i postlådan – Rolf tar det till posten |
| 1:30 | kvitto-visas | info:bra | 📦 Paketet till Två syskon i Lund ligger i postlådan – Rolf tar det till posten |
| 1:30 | toast | bra | 📦 Paketet till Två syskon i Lund ligger i postlådan – Rolf tar det till posten |
| 1:32 | klar | info:bra | 📦 Paketet till Två syskon i Lund ligger i postlådan – Rolf tar det till posten |
| 1:34 | händelse | printStart | sak=n2_vas |
| 1:37 | toast | guld | ✅ |
| 1:37 | händelse | printKlar | sak=n2_vas n=5 |
| 1:38 | händelse | tagitUrPrint | sak=n2_vas n=1 |
| 1:44 | sak | mamma | Det säger du nu. |
| 1:44 | sms | mamma | Det säger du nu. |
| 1:44 | sms-bubbla | mamma | Det säger du nu. |
| 1:44 | röst | mamma | Det säger du nu. · STORY |
| 1:45 | butiksbubbla | ali | Du igen. Bra. Du är den enda som köper nåt. |
| 1:46 | röst | ali | Du igen. Bra. Du är den enda som köper nåt. · STORY |
| 1:46 | aliSalt | ali | 1185 |
| 1:47 | klar | mamma | Det säger du nu. |
| 1:49 | väntar | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått petg-skrivare. Och säljlåda. Mer säger jag inte. Gunnar vet. |
| 1:49 | radio | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått petg-skrivare. Och säljlåda. Mer säger jag inte. Gunnar vet. |
| 1:49 | skratt | du | Radio-Kjelle |
| 1:57 | skratt | du | kvarnen rapar |
| 1:57 | sak | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått petg-skrivare. Och säljlåda. Mer säger jag inte. Gunnar vet. |
| 1:57 | notis |  | 📻 Radio Tippen: Radio Tippen, Kjelle här. Skjulet vid tippen har fått petg-skrivare. Och säljlåda. Mer säger jag inte. Gunnar vet. |
| 1:57 | röst | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått petg-skrivare. Och säljlåda. Mer säger jag inte. Gunnar vet. · REAKTION |
| 2:01 | toast | guld | 🧵 |
| 2:03 | händelse | printStart | sak=n2_vas |
| 2:06 | toast | guld | ✅ |
| 2:06 | händelse | printKlar | sak=n2_vas n=6 |
| 2:06 | händelse | tagitUrPrint | sak=n2_vas n=1 |
| 2:06 | klar | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått petg-skrivare. Och säljlåda. Mer säger jag inte. Gunnar vet. |
| 2:09 | toast | guld | 🧵 |
| 2:15 | aliSalt | ali | 1126 |
| 2:19 | väntar | rolf | Hittade Birgittas gamla kaffekopp under sängen i husvagnen. Ja dricker inte ur den. Ja bara tittar på den. /R |
| 2:25 | händelse | printStart | sak=n2_vas |
| 2:28 | toast | guld | ✅ |
| 2:28 | händelse | printKlar | sak=n2_vas n=7 |
| 2:28 | händelse | tagitUrPrint | sak=n2_vas n=1 |
| 2:36 | aliSalt | ali | 1069 |
| 2:46 | händelse | printStart | sak=n2_vas |
| 2:49 | toast | guld | ✅ |
| 2:49 | händelse | printKlar | sak=n2_vas n=8 |
| 2:50 | händelse | tagitUrPrint | sak=n2_vas n=1 |
| 2:54 | skratt | du | falsk tuta |
| 2:58 | aliSalt | ali | 1016 |
| 3:01 | väntar | mamma | Sover du ordentligt? Du ser trött ut. Jag vet att jag inte kan se dig. Men jag vet. |
| 3:08 | händelse | printStart | sak=n2_vas |
| 3:08 | skratt | du | däcket rullar iväg |
| 3:11 | toast | guld | ✅ |
| 3:11 | händelse | printKlar | sak=n2_vas n=9 |
| 3:11 | händelse | tagitUrPrint | sak=n2_vas n=1 |
| 3:19 | aliSalt | ali | 965 |
| 3:29 | händelse | printStart | sak=n2_vas |
| 3:32 | skratt | du | plastspagetti |
| 3:32 | toast | guld | ✅ |
| 3:32 | händelse | printKlar | sak=n2_vas n=10 |
| 3:33 | händelse | tagitUrPrint | sak=spagetti n=1 |
| 3:41 | skratt | du | Ali köper konst |
| 3:41 | aliSalt | ali | 3 |
| 3:43 | struken | pappa | Scanian står i garaget. Den går inte. Den ska gå. |
| 3:52 | skratt | du | kvarnen rapar |
| 3:57 | toast | guld | 🧵 |
| 3:59 | händelse | printStart | sak=n2_vas |
| 4:02 | skratt | du | plastspagetti |
| 4:02 | toast | guld | ✅ |
| 4:02 | händelse | printKlar | sak=n2_vas n=11 |
| 4:02 | händelse | tagitUrPrint | sak=spagetti n=1 |
| 4:04 | toast | guld | 🧵 |
| 4:08 | upplåst | skrivare | skrivare3 |
| 4:08 | brott | RESERV | skrivare3 (skrivare 454 av 75) |
| 4:08 | händelse | upplast | id=skrivare3 flask=skrivare |
| 4:08 | paket |  | sms |
| 4:08 | väntar | ali | Ali här. Skrivare L. En meter byggvolym. Jag bad AI:n om något stort. Den gjorde något ENORMT. Den är större än min butik. Nästan. |
| 4:08 | sak | ali | Ali här. Skrivare L. En meter byggvolym. Jag bad AI:n om något stort. Den gjorde något ENORMT. Den är större än min butik. Nästan. |
| 4:08 | sms | ali | Ali här. Skrivare L. En meter byggvolym. Jag bad AI:n om något stort. Den gjorde något ENORMT. Den är större än min butik. Nästan. |
| 4:08 | sms-bubbla | ali | Ali här. Skrivare L. En meter byggvolym. Jag bad AI:n om något stort. Den gjorde något ENORMT. Den är större än min butik. Nästan. |
| 4:08 | röst | ali | Ali här. Skrivare L. En meter byggvolym. Jag bad AI:n om något stort. Den gjorde något ENORMT. Den är större än min butik. Nästan. · STORY |
| 4:11 | skratt | du | Ali köper konst |
| 4:11 | aliSalt | ali | 3 |
| 4:13 | väntar | bror | Mamma har gått med i en Facebookgrupp: "Föräldrar till barn som flyttat till konstiga ställen". Hon är admin nu. |
| 4:19 | klar | ali | Ali här. Skrivare L. En meter byggvolym. Jag bad AI:n om något stort. Den gjorde något ENORMT. Den är större än min butik. Nästan. |
| 4:20 | händelse | printStart | sak=n2_vas |
| 4:23 | toast | guld | ✅ |
| 4:23 | händelse | printKlar | sak=n2_vas n=12 |
| 4:23 | händelse | tagitUrPrint | sak=n2_vas n=1 |
| 4:31 | aliSalt | ali | 917 |
| 4:35 | skratt | du | Alis dyr-pling |
| 4:35 | toast | guld | 3D-modell köpt – printa skrivare l på skrivaren |
| 4:35 | händelse | kopt | sak=skrivare3 |
| 5:07 | händelse | printStart | sak=byggsats:skrivare3 |
| 5:10 | skratt | du | falsk tuta |
| 5:10 | väntar | värld:TUUT! Tjena! | TUUT! Tjena! |
| 5:10 | sak | värld:TUUT! Tjena! | TUUT! Tjena! |
| 5:10 | bubbla |  | TUUT! Tjena! |
| 5:11 | väntar | mamma | Sover du ordentligt? Du ser trött ut. Jag vet att jag inte kan se dig. Men jag vet. |
| 5:12 | toast | bra | Del 1 av 6 klar |
| 5:13 | klar | värld:TUUT! Tjena! | TUUT! Tjena! |
| 5:17 | toast | bra | Del 2 av 6 klar |
| 5:22 | toast | bra | Del 3 av 6 klar |
| 5:25 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 5:38 | väntar | värld:Mjau. | Mjau. |
| 5:41 | sak | värld:Mjau. | Mjau. |
| 5:41 | bubbla |  | Mjau. |
| 5:42 | skratt | du | kvarnen spottar |
| 5:43 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 5:43 | väntar | notis:Skrivare M: Tornet är tomt – mal mer så  | Skrivare M: Tornet är tomt – mal mer så fortsätter den |
| 5:44 | klar | värld:Mjau. | Mjau. |
| 5:45 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 5:45 | toast | bra | Del 4 av 6 klar |
| 5:46 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 5:47 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 5:49 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 5:50 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 5:51 | toast | bra | Del 5 av 6 klar |
| 5:51 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 5:52 | sak | notis:Skrivare M: Tornet är tomt – mal mer så  | Skrivare M: Tornet är tomt – mal mer så fortsätter den |
| 5:52 | notis | fel | Skrivare M: Tornet är tomt – mal mer så fortsätter den |
| 5:52 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 5:54 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 5:54 | klar | notis:Skrivare M: Tornet är tomt – mal mer så  | Skrivare M: Tornet är tomt – mal mer så fortsätter den |
| 5:55 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 5:56 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 5:57 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 5:57 | händelse | printKlar | sak=byggsats:skrivare3 n=1 |
| 5:57 | toast | guld | ✅ |
| 6:02 | händelse | tagitUrPrint | sak=byggsats:skrivare3 n=1 |
| 6:05 | händelse | placerat | sak=skrivare3 |
| 6:05 | händelse | malKlart | id=r8-bygg-skrivare-l del=Dag 8 – Magnetpistolen nasta=r8-bygg-magnetpistolen |
| 6:05 | väntar | du | Plocka skräp och mal det. |
| 6:05 | målruta |  | Plocka skräp och mal det |
| 6:05 | MÅL |  | Plocka skräp och mal det |
| 6:05 | upplåst | bara | magnet |
| 6:05 | brott | UPPLÅST | magnet (bara 14 av 6) |
| 6:05 | händelse | upplast | id=magnet flask=bara |
| 6:05 | paket |  | tanke → sms |
| 6:05 | tanke | du | En tunna i taget på säckkärran. Det måste gå fortare. |
| 6:05 | väntar | du | En tunna i taget på säckkärran. Det måste gå fortare. |
| 6:05 | väntar | ali | Ali här. Jag har inte sovit på tre dygn. 🧲 MAGNETPISTOL. Den drog åt sig min nyckelknippa, min klocka och nästan en tand. Det här är framtiden, min vän. Du kommer gilla den. Jag gillar den. Säg inte till nån att jag gillar nåt. |
| 6:07 | sak | du | Plocka skräp och mal det. |
| 6:07 | pil |  | Bygg magnetpistolen |
| 6:07 | röst | du | Bygg magnetpistolen. · MÅL |
| 6:09 | klar | du | Bygg magnetpistolen. |
| 6:09 | kvittens-bock |  | ✓ Bygg Skrivare L |
| 6:17 | sak | ali | Ali här. Jag har inte sovit på tre dygn. 🧲 MAGNETPISTOL. Den drog åt sig min nyckelknippa, min klocka och nästan en tand. Det här är framtiden, min vän. Du kommer gilla den. Jag gillar den. Säg inte till nån att jag gillar nåt. |
| 6:17 | sms | ali | Ali här. Jag har inte sovit på tre dygn. 🧲 MAGNETPISTOL. Den drog åt sig min nyckelknippa, min klocka och nästan en tand. Det här är framtiden, min vän. Du kommer gilla den. Jag gillar den. Säg inte till nån att jag gillar nåt. |
| 6:17 | sms-bubbla | ali | Ali här. Jag har inte sovit på tre dygn. 🧲 MAGNETPISTOL. Den drog åt sig min nyckelknippa, min klocka och nästan en tand. Det här är framtiden, min vän. Du kommer gilla den. Jag gillar den. Säg inte till nån att jag gillar nåt. |
| 6:17 | röst | ali | Ali här. Jag har inte sovit på tre dygn. 🧲 MAGNETPISTOL. Den drog åt sig min nyckelknippa, min klocka och nästan en tand. Det här är framtiden, min vän. Du kommer gilla den. Jag gillar den. Säg inte till nån att jag gillar nåt. · STORY |
| 6:18 | skratt | du | Alis dyr-pling |
| 6:18 | toast | guld | 3D-modell köpt – printa magnetpistol på skrivaren |
| 6:18 | händelse | kopt | sak=magnet |
| 6:30 | skratt | du | kvarnen rapar |
| 6:31 | toast | guld | 🧵 |
| 6:33 | paket |  | tanke |
| 6:33 | tanke | du | Den bränns. |
| 6:33 | väntar | du | Den bränns. |
| 6:33 | paket |  | tanke |
| 6:33 | tanke | du | Mamma hade rätt. Säg inget. |
| 6:33 | struken | du | Den bränns. |
| 6:33 | väntar | du | Mamma hade rätt. Säg inget. |
| 6:33 | skratt | du | grytvantarna |
| 6:34 | händelse | printStart | sak=byggsats:magnet |
| 6:36 | toast | bra | Del 1 av 3 klar |
| 6:36 | klar | ali | Ali här. Jag har inte sovit på tre dygn. 🧲 MAGNETPISTOL. Den drog åt sig min nyckelknippa, min klocka och nästan en tand. Det här är framtiden, min vän. Du kommer gilla den. Jag gillar den. Säg inte till nån att jag gillar nåt. |
| 6:36 | toast | guld | 🧵 |
| 6:38 | struken | ali | Ali här. 🔥 TURBOMOTOR. Jag skrev ”turbo, röda ränder, snabbare än min pappa” till AI:n. Den förstod. Ingen annan förstår. Röda ränder. För farten. Det är vetenskap. |
| 6:38 | toast | bra | Del 2 av 3 klar |
| 6:40 | händelse | printKlar | sak=byggsats:magnet n=1 |
| 6:40 | toast | guld | ✅ |
| 6:41 | väntar | info:guld | 🧲 Magnetpistolen är klar! Den ligger i verktygsraden – gripen har du kvar på plats 1. |
| 6:41 | händelse | tagitUrPrint | sak=byggsats:magnet n=1 |
| 6:41 | struken | kedja | magnet |
| 6:41 | sak | info:guld | 🧲 Magnetpistolen är klar! Den ligger i verktygsraden – gripen har du kvar på plats 1. |
| 6:41 | kvitto-visas | info:guld | 🧲 Magnetpistolen är klar! Den ligger i verktygsraden – gripen har du kvar på plats 1. |
| 6:41 | toast | guld | 🧲 Magnetpistolen är klar! Den ligger i verktygsraden – gripen har du kvar på plats 1. |
| 6:41 | händelse | malKlart | id=r8-bygg-magnetpistolen del=Dag 8 – Magnetpistolen nasta=r8-mal-tunga-saker |
| 6:41 | händelse | malKlart | id=r8-mal-tunga-saker del=Dag 8 – Magnetpistolen nasta=r8-bygg-batteribank |
| 6:41 | struken | du | Mamma hade rätt. Säg inget. |
| 6:41 | MÅL |  | Printa och sälj |
| 6:43 | klar | info:guld | 🧲 Magnetpistolen är klar! Den ligger i verktygsraden – gripen har du kvar på plats 1. |
| 6:45 | målruta |  | Printa och sälj |
| 6:45 | kvittens-bock |  | ✓ Bygg magnetpistolen |
| 6:45 | kvittens-bock |  | ✓ Mal tunga saker i PETG-kvarnen · 3/3 |
| 6:45 | sak | du | (nytt mål i rutan) |
| 6:45 | pil |  | Printa och sälj |
| 6:45 | klar | du | (nytt mål i rutan) |
| 6:49 | händelse | printStart | sak=n2_vas |
| 6:52 | toast | guld | ✅ |
| 6:52 | händelse | printKlar | sak=n2_vas n=13 |
| 6:52 | händelse | tagitUrPrint | sak=n2_vas n=1 |
| 6:56 | sak | du | En tunna i taget på säckkärran. Det måste gå fortare. |
| 6:56 | notis | tanke | 💭 En tunna i taget på säckkärran. Det måste gå fortare. |
| 6:56 | röst | du | En tunna i taget på säckkärran. Det måste gå fortare. · STORY |
| 7:00 | klar | du | En tunna i taget på säckkärran. Det måste gå fortare. |
| 7:01 | aliSalt | ali | 871 |
| 7:05 | väntar | värld:TUUT! Hej grannen! | TUUT! Hej grannen! |
| 7:08 | sak | värld:TUUT! Hej grannen! | TUUT! Hej grannen! |
| 7:08 | bubbla |  | TUUT! Hej grannen! |
| 7:10 | händelse | printStart | sak=n2_vas |
| 7:11 | klar | värld:TUUT! Hej grannen! | TUUT! Hej grannen! |
| 7:13 | väntar | foto | Magneten |
| 7:13 | paket |  | tanke |
| 7:13 | tanke | du | Nu kommer allt till mig i stället. |
| 7:13 | väntar | du | Nu kommer allt till mig i stället. |
| 7:13 | toast | guld | ✅ |
| 7:13 | händelse | printKlar | sak=n2_vas n=14 |
| 7:13 | händelse | tagitUrPrint | sak=n2_vas n=1 |
| 7:19 | sak | foto | Magneten |
| 7:19 | foto | du | Magneten |
| 7:21 | aliSalt | ali | 830 |
| 7:22 | klar | foto | Magneten |
| 7:30 | sak | du | Nu kommer allt till mig i stället. |
| 7:30 | notis | tanke | 💭 Nu kommer allt till mig i stället. |
| 7:30 | röst | du | Nu kommer allt till mig i stället. · STORY |
| 7:32 | händelse | printStart | sak=n2_vas |
| 7:33 | klar | du | Nu kommer allt till mig i stället. |
| 7:35 | toast | guld | ✅ |
| 7:35 | händelse | printKlar | sak=n2_vas n=15 |
| 7:35 | händelse | tagitUrPrint | sak=n2_vas n=1 |
| 7:43 | aliSalt | ali | 830 |
| 7:57 | skratt | du | kvarnen rapar |
| 8:01 | toast | guld | 🧵 |
| 8:04 | händelse | printStart | sak=n2_vas |
| 8:07 | toast | guld | ✅ |
| 8:07 | händelse | printKlar | sak=n2_vas n=16 |
| 8:07 | händelse | tagitUrPrint | sak=n2_vas n=1 |
| 8:15 | aliSalt | ali | 830 |
| 8:25 | händelse | printStart | sak=n2_vas |
| 8:28 | toast | guld | ✅ |
| 8:28 | händelse | printKlar | sak=n2_vas n=17 |
| 8:29 | väntar | bror | Mamma har gått med i en Facebookgrupp: "Föräldrar till barn som flyttat till konstiga ställen". Hon är admin nu. |
| 8:29 | händelse | tagitUrPrint | sak=n2_vas n=1 |
| 8:37 | aliSalt | ali | 830 |
| 8:38 | skratt | du | falsk tuta |
| 8:50 | skratt | du | kvarnen rapar |
| 8:53 | toast | guld | 🧵 |
| 8:57 | händelse | printStart | sak=n2_vas |
| 9:00 | toast | guld | ✅ |
| 9:00 | händelse | printKlar | sak=n2_vas n=18 |
| 9:00 | väntar | värld:TUUT TUUT! | TUUT TUUT! |
| 9:00 | händelse | tagitUrPrint | sak=n2_vas n=1 |
| 9:00 | sak | värld:TUUT TUUT! | TUUT TUUT! |
| 9:00 | bubbla |  | TUUT TUUT! |
| 9:03 | klar | värld:TUUT TUUT! | TUUT TUUT! |
| 9:09 | aliSalt | ali | 830 |
| 9:19 | händelse | printStart | sak=n2_vas |
| 9:22 | toast | guld | ✅ |
| 9:22 | händelse | printKlar | sak=n2_vas n=19 |
| 9:22 | händelse | tagitUrPrint | sak=n2_vas n=1 |
| 9:30 | aliSalt | ali | 830 |
| 9:40 | händelse | printStart | sak=n2_vas |
| 9:43 | toast | guld | ✅ |
| 9:43 | händelse | printKlar | sak=n2_vas n=20 |
| 9:43 | händelse | tagitUrPrint | sak=n2_vas n=1 |
| 9:52 | aliSalt | ali | 830 |
| 10:01 | upplåst | strom | bank |
| 10:01 | brott | RESERV | bank (strom 0 av 15) |
| 10:01 | händelse | upplast | id=bank flask=strom |
| 10:01 | paket |  | sms |
| 10:01 | väntar | ali | Ali här. Batteribank. Sparar solen till kvällen. Som en kyl, fast för ström. |
| 10:01 | sak | ali | Ali här. Batteribank. Sparar solen till kvällen. Som en kyl, fast för ström. |
| 10:01 | sms | ali | Ali här. Batteribank. Sparar solen till kvällen. Som en kyl, fast för ström. |
| 10:01 | sms-bubbla | ali | Ali här. Batteribank. Sparar solen till kvällen. Som en kyl, fast för ström. |
| 10:01 | röst | ali | Ali här. Batteribank. Sparar solen till kvällen. Som en kyl, fast för ström. · STORY |
| 10:05 | skratt | du | kvarnen rapar |
| 10:07 | klar | ali | Ali här. Batteribank. Sparar solen till kvällen. Som en kyl, fast för ström. |
| 10:10 | toast | guld | 🧵 |
| 10:12 | händelse | printStart | sak=n2_vas |
| 10:15 | toast | guld | ✅ |
| 10:15 | händelse | printKlar | sak=n2_vas n=21 |
| 10:15 | händelse | tagitUrPrint | sak=n2_vas n=1 |
| 10:17 | toast | guld | 🧵 |
| 10:24 | aliSalt | ali | 830 |
| 10:28 | skratt | du | Alis dyr-pling |
| 10:28 | toast | guld | 3D-modell köpt – printa batteribank på skrivaren |
| 10:28 | händelse | kopt | sak=bank |
| 10:38 | väntar | värld:Mjau. | Mjau. |
| 10:48 | sak | värld:Mjau. | Mjau. |
| 10:48 | bubbla |  | Mjau. |
| 10:51 | klar | värld:Mjau. | Mjau. |
| 10:53 | händelse | printStart | sak=byggsats:bank |
| 10:53 | toast | bra | 🔗 Slangen kopplad |
| 10:55 | toast | bra | Del 1 av 2 klar |
| 10:55 | skratt | du | falsk tuta |
| 10:55 | väntar | värld:TUUT! Tjena! | TUUT! Tjena! |
| 10:57 | händelse | printKlar | sak=byggsats:bank n=1 |
| 10:57 | toast | guld | ✅ |
| 10:57 | händelse | tagitUrPrint | sak=byggsats:bank n=1 |
| 10:59 | sak | värld:TUUT! Tjena! | TUUT! Tjena! |
| 10:59 | bubbla |  | TUUT! Tjena! |
| 11:02 | klar | värld:TUUT! Tjena! | TUUT! Tjena! |
| 11:04 | händelse | placerat | sak=bank |
| 11:04 | händelse | malKlart | id=r8-bygg-batteribank del=Dag 8 – Magnetpistolen nasta=hylla8 |
| 11:04 | väntar | du | Bygg hyllan. |
| 11:04 | målruta |  | Bygg hyllan |
| 11:04 | MÅL |  | Bygg hyllan |
| 11:06 | sak | du | Bygg hyllan. |
| 11:06 | pil |  | Bygg hyllan |
| 11:06 | röst | du | Bygg hyllan. · MÅL |
| 11:06 | nick |  | nick:75 |
| 11:08 | klar | du | Bygg hyllan. |
| 11:08 | kvittens-bock |  | ✓ Bygg en batteribank |
| 11:11 | struken | mamma | Sover du ordentligt? Du ser trött ut. Jag vet att jag inte kan se dig. Men jag vet. |
| 11:20 | toast | guld | 🗄️ Hyllan ligger i handen – klicka på skjulet för att sätta upp den |
| 11:20 | händelse | kopt | sak=hylla |
| 11:20 | röst | ali | En hylla. Den lutar lite. Det är karaktär. · STORY |
| 11:20 | butiksbubbla | ali | En hylla. Den lutar lite. Det är karaktär. |
| 11:26 | väntar | info:guld | 🗄️ Hyllan sitter i skjulet – 8 platser till i förrådet |
| 11:26 | monterat | du | byggsats:hylla |
| 11:26 | händelse | monterat | sak=hylla |
| 11:26 | sak | info:guld | 🗄️ Hyllan sitter i skjulet – 8 platser till i förrådet |
| 11:26 | kvitto-visas | info:guld | 🗄️ Hyllan sitter i skjulet – 8 platser till i förrådet |
| 11:26 | toast | guld | 🗄️ Hyllan sitter i skjulet – 8 platser till i förrådet |
| 11:26 | paket |  | tanke |
| 11:26 | tanke | du | En hylla. Jag har en hylla. Saker har en plats nu. |
| 11:26 | väntar | du | En hylla. Jag har en hylla. Saker har en plats nu. |
| 11:26 | händelse | malKlart | id=hylla8 del=Dag 8 – Magnetpistolen nasta=sov8 |
| 11:26 | paket |  | lapp |
| 11:26 | väntar | du | Dag 8 är slut. Strömmen räcker inte till alla skrivare. |
| 11:26 | MÅL |  | Klart för idag – sov när du vill |
| 11:28 | klar | info:guld | 🗄️ Hyllan sitter i skjulet – 8 platser till i förrådet |
| 11:28 | sak | du | En hylla. Jag har en hylla. Saker har en plats nu. |
| 11:28 | kvitto-visas | du | En hylla. Jag har en hylla. Saker har en plats nu. |
| 11:28 | notis | tanke | 💭 En hylla. Jag har en hylla. Saker har en plats nu. |
| 11:28 | röst | du | En hylla. Jag har en hylla. Saker har en plats nu. · REAKTION |
| 11:30 | målruta |  | Klart för idag – sov när du vill |
| 11:30 | kvittens-bock |  | ✓ Bygg hyllan |
| 11:32 | klar | du | En hylla. Jag har en hylla. Saker har en plats nu. |
| 11:32 | sak | du | (nytt mål i rutan) |
| 11:32 | pil |  | Klart för idag – sov när du vill |
| 11:33 | klar | du | (nytt mål i rutan) |
| 11:33 | sak | du | Dag 8 är slut. Strömmen räcker inte till alla skrivare. |
| 11:33 | kvitto-visas | du | Dag 8 är slut. Strömmen räcker inte till alla skrivare. |
| 11:33 | lapp | 📔 Dagbok | Dag 8 är slut. Strömmen räcker inte till alla skrivare. |
| 11:33 | meddelande | du | Dag 8 är slut. Strömmen räcker inte till alla skrivare. |
| 11:33 | dagbokkort | du | Dag 8 är slut. Strömmen räcker inte till alla skrivare. |
| 11:33 | röst | du | Dag 8 är slut. Strömmen räcker inte till alla skrivare. · STORY |
| 11:39 | händelse | brevLast | id=kvall8 |
| 11:39 | klar | du | Dag 8 är slut. Strömmen räcker inte till alla skrivare. |
| 11:39 | väntar | notis:🌇 Klockan är 21. Ali slår igen luckan.  | 🌇 Klockan är 21. Ali slår igen luckan. Dagens jobb är klart – gå in i skjulet och sov i sängen. |
| 11:42 | webbBetalt | du | 261 |

<details><summary>Botens handlingar dag 8</summary>

- 0:00 — dag 8 börjar — (8277 kr)
- 0:15 popup: "FORTSÄTT" (8277 kr)
- 0:19 gå till skrivaren (17 m) (8277 kr)
- 0:21 printar Blomkruka (8277 kr)
- 0:25 tar ut 1 st ur skrivaren (8277 kr)
- 0:26 printar Blomkruka (8277 kr)
- 0:30 tar ut 1 st ur skrivaren (8277 kr)
- 0:32 printar Pall (8277 kr)
- 0:38 tar ut 1 st ur skrivaren (8277 kr)
- 0:42 gå till datorn (18 m) (8277 kr)
- 0:50 panel: "Webbshopen · Soptippsvägen 1
B" (8277 kr)
- 1:00 panel: "Webbshopen · Soptippsvägen 1
B" (8277 kr)
- 1:19 popup: "Nej. Jag firar här." (8277 kr)
- 1:30 popup: "Läst" (8277 kr)
- 1:30 gå till Rolfs postlåda (paket) (29 m) (8277 kr)
- 1:31 webbshop: 1 paket i postlådan (8277 kr)
- 1:31 tjänar pengar till väntar på flaskhalsen för skrivare3: 8277/8317 kr → printar designvas i röd petg (1185 kr) (8277 kr)
- 1:33 gå till skrivaren (10 m) (8277 kr)
- 1:34 printar Designvas i röd PETG (8277 kr)
- 1:38 tar ut 1 st ur skrivaren (8277 kr)
- 1:45 gå till Ali (30 m) (8277 kr)
- 1:45 öppnar Alis butik – sälja (8277 kr)
- 1:47 säljer hos Ali: +1185 kr (9462 kr)
- 1:49 tjänar pengar till väntar på flaskhalsen för skrivare3: 9462/9502 kr → printar designvas i röd petg (1126 kr) (9462 kr)
- 1:52 gå till en tunna (12 m) (9462 kr)
- 1:57 gå till PETG-kvarnen (20 m) (9462 kr)
- 1:57 tömmer det tunga i PETG-kvarnen (9462 kr)
- 2:01 gå till skrivaren (1 m) (9462 kr)
- 2:03 printar Designvas i röd PETG (9462 kr)
- 2:07 tar ut 1 st ur skrivaren (9462 kr)
- 2:13 gå till Ali (31 m) (9462 kr)
- 2:13 öppnar Alis butik – sälja (9462 kr)
- 2:15 säljer hos Ali: +1126 kr (10588 kr)
- 2:17 tjänar pengar till väntar på flaskhalsen för skrivare3: 10588/10628 kr → printar designvas i röd petg (1069 kr) (10588 kr)
- 2:23 gå till skrivaren (29 m) (10588 kr)
- 2:25 printar Designvas i röd PETG (10588 kr)
- 2:29 tar ut 1 st ur skrivaren (10588 kr)
- 2:35 gå till Ali (29 m) (10588 kr)
- 2:35 öppnar Alis butik – sälja (10588 kr)
- 2:37 säljer hos Ali: +1069 kr (11657 kr)
- 2:39 tjänar pengar till väntar på flaskhalsen för skrivare3: 11657/11697 kr → printar designvas i röd petg (1016 kr) (11657 kr)
- 2:45 gå till skrivaren (29 m) (11657 kr)
- 2:46 printar Designvas i röd PETG (11657 kr)
- 2:50 tar ut 1 st ur skrivaren (11657 kr)
- 2:56 gå till Ali (29 m) (11657 kr)
- 2:56 öppnar Alis butik – sälja (11657 kr)
- 2:58 säljer hos Ali: +1016 kr (12673 kr)
- 3:00 tjänar pengar till väntar på flaskhalsen för skrivare3: 12673/12713 kr → printar designvas i röd petg (965 kr) (12673 kr)
- 3:06 gå till skrivaren (29 m) (12673 kr)
- 3:08 printar Designvas i röd PETG (12673 kr)
- 3:12 tar ut 1 st ur skrivaren (12673 kr)
- 3:18 gå till Ali (29 m) (12673 kr)
- 3:18 öppnar Alis butik – sälja (12673 kr)
- 3:20 säljer hos Ali: +965 kr (13638 kr)
- 3:22 tjänar pengar till väntar på flaskhalsen för skrivare3: 13638/13678 kr → printar designvas i röd petg (917 kr) (13638 kr)
- 3:28 gå till skrivaren (29 m) (13638 kr)
- 3:29 printar Designvas i röd PETG (13638 kr)
- 3:33 tar ut 1 st ur skrivaren (13638 kr)
- 3:39 gå till Ali (29 m) (13638 kr)
- 3:39 öppnar Alis butik – sälja (13638 kr)
- 3:41 säljer hos Ali: +3 kr (13641 kr)
- 3:42 tjänar pengar till väntar på flaskhalsen för skrivare3: 13641/13678 kr → printar designvas i röd petg (917 kr) (13641 kr)
- 3:49 gå till en tunna (34 m) (13641 kr)
- 3:52 gå till PETG-kvarnen (10 m) (13641 kr)
- 3:52 tömmer det tunga i PETG-kvarnen (13641 kr)
- 3:57 gå till skrivaren (3 m) (13641 kr)
- 3:59 printar Designvas i röd PETG (13641 kr)
- 4:03 tar ut 1 st ur skrivaren (13641 kr)
- 4:09 gå till Ali (31 m) (13641 kr)
- 4:09 öppnar Alis butik – sälja (13641 kr)
- 4:11 säljer hos Ali: +3 kr (13644 kr)
- 4:12 tjänar pengar till väntar på flaskhalsen för skrivare3: 13644/13678 kr → printar designvas i röd petg (917 kr) (13644 kr)
- 4:18 gå till skrivaren (29 m) (13644 kr)
- 4:20 printar Designvas i röd PETG (13644 kr)
- 4:24 tar ut 1 st ur skrivaren (13644 kr)
- 4:30 gå till Ali (29 m) (13644 kr)
- 4:30 öppnar Alis butik – sälja (13644 kr)
- 4:32 säljer hos Ali: +917 kr (14561 kr)
- 4:34 öppnar Alis butik – köpa skrivare l (14561 kr)
- 4:36 köper skrivare3 för 3500 kr (11061 kr)
- 4:54 plockar 7 skräp på tippen (bär max 16) (11061 kr)
- 4:57 gå till kvarnen (11 m) (11061 kr)
- 5:05 gå till skrivaren (5 m) (11061 kr)
- 5:07 printar Skrivare L (6 delar) (11061 kr)
- 5:38 plockar 9 skräp på tippen (bär max 16) (11061 kr)
- 5:41 gå till kvarnen (15 m) (11061 kr)
- 6:02 gå till skrivaren (5 m) (11061 kr)
- 6:03 tar ut 1 st ur skrivaren (11061 kr)
- 6:04 gå till platsen för skrivare l (5 m) (11061 kr)
- 6:05 ställer ut skrivare l (11061 kr)
- 6:16 gå till Ali (22 m) (11061 kr)
- 6:16 öppnar Alis butik – köpa magnetpistol (11061 kr)
- 6:18 köper magnet för 2400 kr (8661 kr)
- 6:27 gå till en tunna (36 m) (8661 kr)
- 6:30 gå till PETG-kvarnen (11 m) (8661 kr)
- 6:30 tömmer det tunga i PETG-kvarnen (8661 kr)
- 6:32 gå till skrivaren (3 m) (8661 kr)
- 6:34 printar Magnetpistol (3 delar) (8661 kr)
- 6:42 tar ut 1 st ur skrivaren (8661 kr)
- 6:48 tjänar pengar till väntar på flaskhalsen för bank: 8661/8701 kr → printar designvas i röd petg (871 kr) (8661 kr)
- 6:49 printar Designvas i röd PETG (8661 kr)
- 6:53 tar ut 1 st ur skrivaren (8661 kr)
- 6:59 gå till Ali (31 m) (8661 kr)
- 6:59 öppnar Alis butik – sälja (8661 kr)
- 7:01 säljer hos Ali: +871 kr (9532 kr)
- 7:02 tjänar pengar till väntar på flaskhalsen för bank: 9532/9572 kr → printar designvas i röd petg (830 kr) (9532 kr)
- 7:08 gå till skrivaren (29 m) (9532 kr)
- 7:10 printar Designvas i röd PETG (9532 kr)
- 7:14 tar ut 1 st ur skrivaren (9532 kr)
- 7:20 gå till Ali (29 m) (9532 kr)
- 7:20 öppnar Alis butik – sälja (9532 kr)
- 7:22 säljer hos Ali: +830 kr (10362 kr)
- 7:24 tjänar pengar till väntar på flaskhalsen för bank: 10362/10402 kr → printar designvas i röd petg (830 kr) (10362 kr)
- 7:30 gå till skrivaren (29 m) (10362 kr)
- 7:32 printar Designvas i röd PETG (10362 kr)
- 7:36 tar ut 1 st ur skrivaren (10362 kr)
- 7:42 gå till Ali (29 m) (10362 kr)
- 7:42 öppnar Alis butik – sälja (10362 kr)
- 7:43 säljer hos Ali: +830 kr (11192 kr)
- 7:45 tjänar pengar till väntar på flaskhalsen för bank: 11192/11232 kr → printar designvas i röd petg (830 kr) (11192 kr)
- 7:53 gå till en tunna (36 m) (11192 kr)
- 7:57 gå till PETG-kvarnen (12 m) (11192 kr)
- 7:57 tömmer det tunga i PETG-kvarnen (11192 kr)
- 8:02 gå till skrivaren (3 m) (11192 kr)
- 8:04 printar Designvas i röd PETG (11192 kr)
- 8:07 tar ut 1 st ur skrivaren (11192 kr)
- 8:14 gå till Ali (31 m) (11192 kr)
- 8:14 öppnar Alis butik – sälja (11192 kr)
- 8:16 säljer hos Ali: +830 kr (12022 kr)
- 8:18 tjänar pengar till väntar på flaskhalsen för bank: 12022/12062 kr → printar designvas i röd petg (830 kr) (12022 kr)
- 8:24 gå till skrivaren (29 m) (12022 kr)
- 8:25 printar Designvas i röd PETG (12022 kr)
- 8:29 tar ut 1 st ur skrivaren (12022 kr)
- 8:35 gå till Ali (29 m) (12022 kr)
- 8:35 öppnar Alis butik – sälja (12022 kr)
- 8:37 säljer hos Ali: +830 kr (12852 kr)
- 8:39 tjänar pengar till väntar på flaskhalsen för bank: 12852/12892 kr → printar designvas i röd petg (830 kr) (12852 kr)
- 8:47 gå till en tunna (37 m) (12852 kr)
- 8:50 gå till PETG-kvarnen (11 m) (12852 kr)
- 8:50 tömmer det tunga i PETG-kvarnen (12852 kr)
- 8:55 gå till skrivaren (3 m) (12852 kr)
- 8:57 printar Designvas i röd PETG (12852 kr)
- 9:01 tar ut 1 st ur skrivaren (12852 kr)
- 9:07 gå till Ali (31 m) (12852 kr)
- 9:07 öppnar Alis butik – sälja (12852 kr)
- 9:09 säljer hos Ali: +830 kr (13682 kr)
- 9:11 tjänar pengar till väntar på flaskhalsen för bank: 13682/13722 kr → printar designvas i röd petg (830 kr) (13682 kr)
- 9:17 gå till skrivaren (29 m) (13682 kr)
- 9:19 printar Designvas i röd PETG (13682 kr)
- 9:23 tar ut 1 st ur skrivaren (13682 kr)
- 9:29 gå till Ali (29 m) (13682 kr)
- 9:29 öppnar Alis butik – sälja (13682 kr)
- 9:30 säljer hos Ali: +830 kr (14512 kr)
- 9:32 tjänar pengar till väntar på flaskhalsen för bank: 14512/14552 kr → printar designvas i röd petg (830 kr) (14512 kr)
- 9:38 gå till skrivaren (29 m) (14512 kr)
- 9:40 printar Designvas i röd PETG (14512 kr)
- 9:44 tar ut 1 st ur skrivaren (14512 kr)
- 9:50 gå till Ali (29 m) (14512 kr)
- 9:50 öppnar Alis butik – sälja (14512 kr)
- 9:52 säljer hos Ali: +830 kr (15342 kr)
- 9:54 tjänar pengar till väntar på flaskhalsen för bank: 15342/15382 kr → printar designvas i röd petg (830 kr) (15342 kr)
- 10:02 gå till en tunna (38 m) (15342 kr)
- 10:05 gå till PETG-kvarnen (11 m) (15342 kr)
- 10:05 tömmer det tunga i PETG-kvarnen (15342 kr)
- 10:10 gå till skrivaren (3 m) (15342 kr)
- 10:12 printar Designvas i röd PETG (15342 kr)
- 10:16 tar ut 1 st ur skrivaren (15342 kr)
- 10:22 gå till Ali (31 m) (15342 kr)
- 10:22 öppnar Alis butik – sälja (15342 kr)
- 10:24 säljer hos Ali: +830 kr (16172 kr)
- 10:26 öppnar Alis butik – köpa batteribank (16172 kr)
- 10:29 köper bank för 800 kr (15372 kr)
- 10:45 plockar 8 skräp på tippen (bär max 16) (15372 kr)
- 10:48 gå till kvarnen (12 m) (15372 kr)
- 10:51 gå till skrivaren (7 m) (15372 kr)
- 10:53 printar Batteribank (2 delar) (15372 kr)
- 10:58 tar ut 1 st ur skrivaren (15372 kr)
- 11:03 gå till platsen för batteribank (25 m) (15372 kr)
- 11:04 ställer ut batteribank (15372 kr)
- 11:19 gå till Ali (43 m) (15372 kr)
- 11:19 öppnar Alis butik – köpa hylla (15372 kr)
- 11:21 köper hylla för 150 kr (15222 kr)
- 11:26 gå till sätt upp hyllan i skjulet (19 m) (15222 kr)
- 11:39 popup: "FORTSÄTT" (15222 kr)
- 11:40 gå till sängen (1 m) (15222 kr)

</details>

## Dag 9

| Tid | Källa | Vem | Text |
|---|---|---|---|
| 11:42 | vara | ali | ingen |
| 11:42 | händelse | malKlart | id=sov8 del=Dag 8 – Magnetpistolen nasta=r9-kop-receptet-cykelhjalmen |
| 11:42 | MÅL |  | Köp receptet på cykelhjälmen hos Ali |
| 0:01 | vara | ali | n2_vas |
| 0:01 | händelse | dagenBorjar | dag=9 |
| 0:01 | meddelande | du | Dag 9. 13 dagar till jul. Utan fler skrivare hinner jag inte till jul. |
| 0:01 | dagbokkort | du | Solcellsparken · Dag 9. 13 dagar till jul. Utan fler skrivare hinner jag inte till jul. |
| 0:01 | röst | du | Solcellsparken. Dag 9. 13 dagar till jul. Utan fler skrivare hinner jag inte till jul. · STORY |
| 0:03 | paket |  | sms |
| 0:03 | väntar | rolf | Ny lapp i lådan. Du vet vad de betyder. /R |
| 0:15 | händelse | morgonkortStangt | dag=9 |
| 0:15 | paket |  | sms |
| 0:15 | väntar | ali | Ali här. Större ryggsäck. Min son hade den i lumpen. Han kom hem med fler grejer än han åkte iväg med. |
| 0:15 | struken | kedja | d9 |
| 0:15 | väntar | du | Cykelhjälmar i röd plast. Säljer bra, säger Ali. |
| 0:15 | målruta |  | Köp receptet på cykelhjälmen hos Ali |
| 0:16 | väntar | info:fel | Göran snodde blomkruka. |
| 0:20 | brott | SEN KVITTENS | 2.3 s sen: ”Dag 8 är slut. Strömmen räcker inte till alla skr” (dagbok kvall8) |
| 0:21 | sak | du | Cykelhjälmar i röd plast. Säljer bra, säger Ali. |
| 0:21 | pil |  | Köp receptet på cykelhjälmen hos Ali |
| 0:21 | notis | tanke | 💭 Cykelhjälmar i röd plast. Säljer bra, säger Ali. |
| 0:21 | röst | du | Cykelhjälmar i röd plast. Säljer bra, säger Ali. · MÅL |
| 0:21 | nick |  | nick:77 |
| 0:25 | klar | du | Cykelhjälmar i röd plast. Säljer bra, säger Ali. |
| 0:30 | sak | info:fel | Göran snodde blomkruka. |
| 0:30 | kvitto-visas | info:fel | Göran snodde blomkruka. |
| 0:30 | toast | fel | Göran snodde blomkruka. |
| 0:32 | klar | info:fel | Göran snodde blomkruka. |
| 0:34 | struken | notis:🌇 Klockan är 21. Ali slår igen luckan.  | 🌇 Klockan är 21. Ali slår igen luckan. Dagens jobb är klart – gå in i skjulet och sov i sängen. |
| 0:37 | röst | ali | Semester? Jag hade semester 2009. Det regnade. · STORY |
| 0:37 | butiksbubbla | ali | Semester? Jag hade semester 2009. Det regnade. |
| 0:39 | skratt | du | Alis dyr-pling |
| 0:39 | händelse | kopt | sak=n2_hjalm |
| 0:40 | händelse | malKlart | id=r9-kop-receptet-cykelhjalmen del=Dag 9 – Solcellsparken nasta=r9-bygg-solcellspark |
| 0:40 | målruta |  | Printa och sälj |
| 0:40 | MÅL |  | Printa och sälj |
| 0:40 | sak | du | (nytt mål i rutan) |
| 0:40 | pil |  | Printa och sälj |
| 0:41 | klar | du | (nytt mål i rutan) |
| 0:44 | kvittens-bock |  | ✓ Köp receptet på cykelhjälmen hos Ali |
| 0:49 | händelse | printStart | sak=pall |
| 0:52 | toast | guld | ✅ |
| 0:52 | händelse | printKlar | sak=pall n=25 |
| 0:53 | händelse | tagitUrPrint | sak=pall n=1 |
| 0:56 | händelse | printStart | sak=nyckelring |
| 0:56 | toast | guld | ✅ |
| 0:56 | händelse | printKlar | sak=nyckelring n=25 |
| 0:57 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 1:10 | webb | du | packade 1 pall |
| 1:19 | webb | du | packade 1 nyckelring |
| 1:34 | väntar | info:bra | 📦 Paketet till En lärare i Sundsvall ligger i postlådan – Rolf tar det till posten |
| 1:34 | sak | info:bra | 📦 Paketet till En lärare i Sundsvall ligger i postlådan – Rolf tar det till posten |
| 1:34 | kvitto-visas | info:bra | 📦 Paketet till En lärare i Sundsvall ligger i postlådan – Rolf tar det till posten |
| 1:34 | toast | bra | 📦 Paketet till En lärare i Sundsvall ligger i postlådan – Rolf tar det till posten |
| 1:35 | väntar | info:bra | 📦 Paketet till Ett kafé i Ystad ligger i postlådan – Rolf tar det till posten |
| 1:36 | klar | info:bra | 📦 Paketet till En lärare i Sundsvall ligger i postlådan – Rolf tar det till posten |
| 1:36 | sak | info:bra | 📦 Paketet till Ett kafé i Ystad ligger i postlådan – Rolf tar det till posten |
| 1:36 | kvitto-visas | info:bra | 📦 Paketet till Ett kafé i Ystad ligger i postlådan – Rolf tar det till posten |
| 1:36 | toast | bra | 📦 Paketet till Ett kafé i Ystad ligger i postlådan – Rolf tar det till posten |
| 1:38 | klar | info:bra | 📦 Paketet till Ett kafé i Ystad ligger i postlådan – Rolf tar det till posten |
| 1:39 | händelse | printStart | sak=n2_vas |
| 1:42 | toast | guld | ✅ |
| 1:42 | händelse | printKlar | sak=n2_vas n=22 |
| 1:42 | händelse | tagitUrPrint | sak=n2_vas n=1 |
| 1:51 | aliSalt | ali | 1185 |
| 1:54 | väntar | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått skrivare l. Och batteribank. Skriv in, Gunnar. Du skriver aldrig in. |
| 1:54 | radio | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått skrivare l. Och batteribank. Skriv in, Gunnar. Du skriver aldrig in. |
| 1:54 | skratt | du | Radio-Kjelle |
| 1:54 | sak | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått skrivare l. Och batteribank. Skriv in, Gunnar. Du skriver aldrig in. |
| 1:54 | notis |  | 📻 Radio Tippen: Radio Tippen, Kjelle här. Skjulet vid tippen har fått skrivare l. Och batteribank. Skriv in, Gunnar. Du skriver aldrig in. |
| 1:54 | röst | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått skrivare l. Och batteribank. Skriv in, Gunnar. Du skriver aldrig in. · REAKTION |
| 2:00 | händelse | printStart | sak=n2_vas |
| 2:03 | toast | guld | ✅ |
| 2:03 | händelse | printKlar | sak=n2_vas n=23 |
| 2:03 | händelse | tagitUrPrint | sak=n2_vas n=1 |
| 2:04 | klar | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått skrivare l. Och batteribank. Skriv in, Gunnar. Du skriver aldrig in. |
| 2:11 | aliSalt | ali | 1126 |
| 2:21 | händelse | printStart | sak=n2_vas |
| 2:24 | toast | guld | ✅ |
| 2:24 | händelse | printKlar | sak=n2_vas n=24 |
| 2:24 | händelse | tagitUrPrint | sak=n2_vas n=1 |
| 2:30 | väntar | bror | Tomt här hemma. Ingen som snor mina laddare. Inte för att jag saknar det eller nåt. |
| 2:33 | aliSalt | ali | 1069 |
| 2:43 | händelse | printStart | sak=n2_vas |
| 2:44 | struken | bror | Mamma har gått med i en Facebookgrupp: "Föräldrar till barn som flyttat till konstiga ställen". Hon är admin nu. |
| 2:46 | toast | guld | ✅ |
| 2:46 | händelse | printKlar | sak=n2_vas n=25 |
| 2:46 | händelse | tagitUrPrint | sak=n2_vas n=1 |
| 2:54 | aliSalt | ali | 1016 |
| 3:00 | skratt | du | falsk tuta |
| 3:07 | skratt | du | kvarnen rapar |
| 3:11 | toast | guld | 🧵 |
| 3:13 | händelse | printStart | sak=n2_vas |
| 3:15 | skratt | du | däcket rullar iväg |
| 3:16 | toast | guld | ✅ |
| 3:16 | händelse | printKlar | sak=n2_vas n=26 |
| 3:17 | händelse | tagitUrPrint | sak=n2_vas n=1 |
| 3:18 | toast | guld | 🧵 |
| 3:22 | väntar | bud | (tips) |
| 3:22 | sak | bud | (tips) |
| 3:24 | klar | bud | (tips) |
| 3:25 | aliSalt | ali | 965 |
| 3:26 | meddelande | mamma | Har du varma strumpor? Det ska bli kallt! |
| 3:27 | röst | mamma | Har du varma strumpor? Det ska bli kallt! · STORY |
| 3:33 | paket |  | sms |
| 3:33 | väntar | mamma | Bra. Vilka då? De bruna? De bruna har hål. Jag vet att de har hål. |
| 3:40 | händelse | brevLast | id=m_strumpor |
| 3:41 | sak | mamma | Bra. Vilka då? De bruna? De bruna har hål. Jag vet att de har hål. |
| 3:41 | sms | mamma | Bra. Vilka då? De bruna? De bruna har hål. Jag vet att de har hål. |
| 3:41 | sms-bubbla | mamma | Bra. Vilka då? De bruna? De bruna har hål. Jag vet att de har hål. |
| 3:41 | röst | mamma | Bra. Vilka då? De bruna? De bruna har hål. Jag vet att de har hål. · STORY |
| 3:47 | klar | mamma | Bra. Vilka då? De bruna? De bruna har hål. Jag vet att de har hål. |
| 3:57 | händelse | printStart | sak=n2_hjalm |
| 4:01 | toast | guld | ✅ |
| 4:01 | händelse | printKlar | sak=n2_hjalm n=1 |
| 4:02 | händelse | tagitUrPrint | sak=n2_hjalm n=1 |
| 4:10 | aliSalt | ali | 1330 |
| 4:20 | händelse | printStart | sak=n2_vas |
| 4:23 | toast | guld | ✅ |
| 4:23 | händelse | printKlar | sak=n2_vas n=27 |
| 4:24 | händelse | tagitUrPrint | sak=n2_vas n=1 |
| 4:32 | aliSalt | ali | 917 |
| 4:36 | upplåst | strom | solpark |
| 4:36 | brott | RESERV | solpark (strom 0 av 15) |
| 4:36 | händelse | upplast | id=solpark flask=strom |
| 4:36 | paket |  | sms |
| 4:36 | väntar | ali | Ali här. Solcellspark. Sex paneler på rad. Solen jobbar dubbelt nu. |
| 4:36 | sak | ali | Ali här. Solcellspark. Sex paneler på rad. Solen jobbar dubbelt nu. |
| 4:36 | sms | ali | Ali här. Solcellspark. Sex paneler på rad. Solen jobbar dubbelt nu. |
| 4:36 | sms-bubbla | ali | Ali här. Solcellspark. Sex paneler på rad. Solen jobbar dubbelt nu. |
| 4:36 | röst | ali | Ali här. Solcellspark. Sex paneler på rad. Solen jobbar dubbelt nu. · STORY |
| 4:42 | händelse | printStart | sak=n2_hjalm |
| 4:42 | klar | ali | Ali här. Solcellspark. Sex paneler på rad. Solen jobbar dubbelt nu. |
| 4:46 | toast | guld | ✅ |
| 4:46 | händelse | printKlar | sak=n2_hjalm n=2 |
| 4:47 | händelse | tagitUrPrint | sak=n2_hjalm n=1 |
| 4:55 | aliSalt | ali | 1264 |
| 5:18 | väntar | rolf | Konditoriet på Storgatan har slutat me mazariner. Ja har skrivit ett klagomål. På papper. Me frimärke. /R |
| 5:24 | tanke | du | Om man bara hade en… motorsåg. |
| 5:24 | väntar | du | Om man bara hade en… motorsåg. |
| 5:24 | sak | du | Om man bara hade en… motorsåg. |
| 5:24 | notis | tanke | 💭 Om man bara hade en… motorsåg. |
| 5:24 | röst | du | Om man bara hade en… motorsåg. · STORY |
| 5:27 | klar | du | Om man bara hade en… motorsåg. |
| 5:30 | skratt | du | falsk tuta |
| 5:30 | väntar | värld:TUUT TUUT! | TUUT TUUT! |
| 5:34 | skratt | du | kvarnen rapar |
| 5:36 | sak | värld:TUUT TUUT! | TUUT TUUT! |
| 5:36 | bubbla |  | TUUT TUUT! |
| 5:39 | toast | guld | 🧵 |
| 5:39 | klar | värld:TUUT TUUT! | TUUT TUUT! |
| 5:41 | händelse | printStart | sak=n2_vas |
| 5:44 | toast | guld | ✅ |
| 5:44 | händelse | printKlar | sak=n2_vas n=28 |
| 5:44 | händelse | tagitUrPrint | sak=n2_vas n=1 |
| 5:46 | toast | guld | 🧵 |
| 5:53 | aliSalt | ali | 871 |
| 6:03 | händelse | printStart | sak=n2_hjalm |
| 6:07 | toast | guld | ✅ |
| 6:07 | händelse | printKlar | sak=n2_hjalm n=3 |
| 6:08 | händelse | tagitUrPrint | sak=n2_hjalm n=1 |
| 6:16 | aliSalt | ali | 1200 |
| 6:20 | paket |  | ge → brev |
| 6:20 | väntar |  | (läget ändras) |
| 6:20 | väntar | pappa | Äntligen träd. /Pappa |
| 6:21 | struken | ali | Ali här. Större ryggsäck. Min son hade den i lumpen. Han kom hem med fler grejer än han åkte iväg med. |
| 6:26 | sak |  | (läget ändras) |
| 6:26 | klar |  | (läget ändras) |
| 6:26 | händelse | printStart | sak=n2_vas |
| 6:29 | toast | guld | ✅ |
| 6:29 | händelse | printKlar | sak=n2_vas n=29 |
| 6:30 | händelse | tagitUrPrint | sak=n2_vas n=1 |
| 6:30 | sak | pappa | Äntligen träd. /Pappa |
| 6:30 | lapp | Lapp från pappa | Äntligen träd. /Pappa |
| 6:30 | röst | pappa | Äntligen träd. /Pappa · STORY |
| 6:33 | klar | pappa | Äntligen träd. /Pappa |
| 6:38 | aliSalt | ali | 830 |
| 6:52 | ljud | motorsag | Slyet faller |
| 6:56 | ljud | motorsag | Slyet faller |
| 7:02 | ljud | motorsag | Slyet faller |
| 7:07 | ljud | motorsag | Slyet faller |
| 7:12 | ljud | motorsag | Slyet faller |
| 7:17 | ljud | motorsag | Slyet faller |
| 7:17 | paket |  | tanke |
| 7:17 | tanke | du | Där. Perfekt plats för solen. |
| 7:17 | väntar | du | Där. Perfekt plats för solen. |
| 7:17 | sak | du | Där. Perfekt plats för solen. |
| 7:17 | kvitto-visas | du | Där. Perfekt plats för solen. |
| 7:17 | notis | tanke | 💭 Där. Perfekt plats för solen. |
| 7:17 | röst | du | Där. Perfekt plats för solen. · STORY |
| 7:20 | klar | du | Där. Perfekt plats för solen. |
| 7:25 | väntar | värld:TUUT! Hej grannen! | TUUT! Hej grannen! |
| 7:29 | sak | värld:TUUT! Hej grannen! | TUUT! Hej grannen! |
| 7:29 | bubbla |  | TUUT! Hej grannen! |
| 7:31 | skratt | du | Alis dyr-pling |
| 7:31 | toast | guld | 3D-modell köpt – printa solcellspark på skrivaren |
| 7:31 | händelse | kopt | sak=solpark |
| 7:32 | klar | värld:TUUT! Hej grannen! | TUUT! Hej grannen! |
| 7:39 | händelse | printStart | sak=byggsats:solpark |
| 7:42 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 7:42 | skratt | du | kvarnen spottar |
| 7:43 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 7:44 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 7:44 | väntar | notis:Skrivare L: Tornet är tomt – mal mer så  | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 7:44 | sak | notis:Skrivare L: Tornet är tomt – mal mer så  | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 7:44 | notis | fel | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 7:46 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 7:46 | struken | notis | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 7:47 | toast | bra | Del 1 av 4 klar |
| 7:47 | klar | notis:Skrivare L: Tornet är tomt – mal mer så  | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 7:47 | ljud | kajsa | Mjau |
| 7:47 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 7:47 | struken | notis | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 7:49 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 7:49 | struken | notis | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 7:50 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 7:50 | struken | notis | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 7:59 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 7:59 | struken | notis | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 8:00 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 8:02 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 8:03 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 8:04 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 8:05 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 8:06 | toast | bra | Del 2 av 4 klar |
| 8:07 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 8:08 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 8:09 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 8:10 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 8:11 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 8:13 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 8:14 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 8:15 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 8:16 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 8:17 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 8:30 | struken | bror | Tomt här hemma. Ingen som snor mina laddare. Inte för att jag saknar det eller nåt. |
| 8:32 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 8:32 | struken | notis | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 8:33 | toast | bra | Del 3 av 4 klar |
| 8:33 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 8:35 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 8:36 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 8:38 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 8:39 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 8:41 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 8:42 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 8:43 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 8:45 | händelse | printKlar | sak=byggsats:solpark n=1 |
| 8:45 | toast | guld | ✅ |
| 8:52 | händelse | tagitUrPrint | sak=byggsats:solpark n=1 |
| 8:58 | händelse | placerat | sak=solpark |
| 8:58 | struken | kedja | solpark |
| 8:58 | händelse | malKlart | id=r9-bygg-solcellspark del=Dag 9 – Solcellsparken nasta=paket9 |
| 8:58 | händelse | malKlart | id=paket9 del=Dag 9 – Solcellsparken nasta=petgtorn9 |
| 8:58 | skratt | du | falsk tuta |
| 8:58 | väntar | du | Den röda kvarnen står och väntar på plats för rullarna. Ett större torn. |
| 8:58 | målruta |  | Bygg Rulltorn XL vid röda kvarnen |
| 8:58 | MÅL |  | Bygg Rulltorn XL vid röda kvarnen |
| 9:00 | sak | du | Den röda kvarnen står och väntar på plats för rullarna. Ett större torn. |
| 9:00 | pil |  | Bygg Rulltorn XL vid röda kvarnen |
| 9:00 | notis | tanke | 💭 Den röda kvarnen står och väntar på plats för rullarna. Ett större torn. |
| 9:00 | röst | du | Den röda kvarnen står och väntar på plats för rullarna. Ett större torn. · MÅL |
| 9:02 | kvittens-bock |  | ✓ Bygg en solcellspark |
| 9:02 | kvittens-bock |  | ✓ Skicka två paket från datorn · 2/2 |
| 9:06 | klar | du | Den röda kvarnen står och väntar på plats för rullarna. Ett större torn. |
| 9:19 | skratt | du | Alis dyr-pling |
| 9:19 | toast | guld | 3D-modell köpt – printa rulltorn xl på skrivaren |
| 9:19 | händelse | kopt | sak=petgtorn |
| 9:31 | skratt | du | kvarnen rapar |
| 9:32 | toast | guld | 🧵 |
| 9:36 | toast | guld | 🧵 |
| 9:41 | toast | guld | 🧵 |
| 9:41 | händelse | printStart | sak=byggsats:petgtorn |
| 9:41 | toast | guld | 🧵 |
| 9:43 | toast | bra | Del 1 av 3 klar |
| 9:45 | toast | bra | Del 2 av 3 klar |
| 9:48 | händelse | printKlar | sak=byggsats:petgtorn n=1 |
| 9:48 | toast | guld | ✅ |
| 9:49 | händelse | tagitUrPrint | sak=byggsats:petgtorn n=1 |
| 9:49 | händelse | placerat | sak=petgtorn |
| 9:49 | väntar | info:guld | Rulltorn XL – 12 rullar röd PETG får plats |
| 9:49 | sak | info:guld | Rulltorn XL – 12 rullar röd PETG får plats |
| 9:49 | kvitto-visas | info:guld | Rulltorn XL – 12 rullar röd PETG får plats |
| 9:49 | toast | guld | Rulltorn XL – 12 rullar röd PETG får plats |
| 9:49 | händelse | malKlart | id=petgtorn9 del=Dag 9 – Solcellsparken nasta=sov9 |
| 9:49 | paket |  | lapp |
| 9:49 | väntar | du | Dag 9 är slut. Det drar kallt genom väggarna. |
| 9:49 | MÅL |  | Klart för idag – sov när du vill |
| 9:51 | klar | info:guld | Rulltorn XL – 12 rullar röd PETG får plats |
| 9:51 | sak | du | Dag 9 är slut. Det drar kallt genom väggarna. |
| 9:51 | kvitto-visas | du | Dag 9 är slut. Det drar kallt genom väggarna. |
| 9:51 | lapp | 📔 Dagbok | Dag 9 är slut. Det drar kallt genom väggarna. |
| 9:51 | meddelande | du | Dag 9 är slut. Det drar kallt genom väggarna. |
| 9:51 | dagbokkort | du | Dag 9 är slut. Det drar kallt genom väggarna. |
| 9:52 | röst | du | Dag 9 är slut. Det drar kallt genom väggarna. · STORY |
| 9:58 | händelse | brevLast | id=kvall9 |
| 9:58 | klar | du | Dag 9 är slut. Det drar kallt genom väggarna. |
| 9:58 | väntar | notis:🌇 Klockan är 21. Ali slår igen luckan.  | 🌇 Klockan är 21. Ali slår igen luckan. Dagens jobb är klart – gå in i skjulet och sov i sängen. |
| 9:58 | målruta |  | Klart för idag – sov när du vill |
| 9:58 | sak | du | (nytt mål i rutan) |
| 9:58 | pil |  | Klart för idag – sov när du vill |
| 9:58 | klar | du | (nytt mål i rutan) |
| 10:07 | webbBetalt | du | 258 |

<details><summary>Botens handlingar dag 9</summary>

- 0:00 — dag 9 börjar — (15483 kr)
- 0:15 popup: "FORTSÄTT" (15483 kr)
- 0:22 gå till Rolfs postlåda (29 m) (15483 kr)
- 0:30 panel: "En lapp från Rolf
Lite olaglig" (15483 kr)
- 0:37 gå till Ali (31 m) (15483 kr)
- 0:37 öppnar Alis butik – köpa receptet cykelhjälm i petg (15483 kr)
- 0:40 köper n2_hjalm för 2300 kr (13183 kr)
- 0:47 gå till skrivaren (23 m) (13183 kr)
- 0:49 printar Pall (13183 kr)
- 0:54 tar ut 1 st ur skrivaren (13183 kr)
- 0:56 printar Nyckelring (13183 kr)
- 0:57 tar ut 1 st ur skrivaren (13183 kr)
- 1:01 gå till datorn (17 m) (13183 kr)
- 1:09 panel: "Webbshopen · Soptippsvägen 1
B" (13183 kr)
- 1:19 panel: "Webbshopen · Soptippsvägen 1
B" (13183 kr)
- 1:28 panel: "Webbshopen · Soptippsvägen 1
B" (13183 kr)
- 1:34 gå till Rolfs postlåda (paket) (29 m) (13183 kr)
- 1:35 webbshop: 2 paket i postlådan (13183 kr)
- 1:35 tjänar pengar till väntar på flaskhalsen för solpark: 13183/13223 kr → printar designvas i röd petg (1185 kr) (13183 kr)
- 1:37 gå till skrivaren (10 m) (13183 kr)
- 1:39 printar Designvas i röd PETG (13183 kr)
- 1:43 tar ut 1 st ur skrivaren (13183 kr)
- 1:49 gå till Ali (30 m) (13183 kr)
- 1:49 öppnar Alis butik – sälja (13183 kr)
- 1:51 säljer hos Ali: +1185 kr (14368 kr)
- 1:52 tjänar pengar till väntar på flaskhalsen för solpark: 14368/14408 kr → printar designvas i röd petg (1126 kr) (14368 kr)
- 1:58 gå till skrivaren (29 m) (14368 kr)
- 2:00 printar Designvas i röd PETG (14368 kr)
- 2:04 tar ut 1 st ur skrivaren (14368 kr)
- 2:10 gå till Ali (29 m) (14368 kr)
- 2:10 öppnar Alis butik – sälja (14368 kr)
- 2:11 säljer hos Ali: +1126 kr (15494 kr)
- 2:14 tjänar pengar till väntar på flaskhalsen för solpark: 15494/15534 kr → printar designvas i röd petg (1069 kr) (15494 kr)
- 2:20 gå till skrivaren (29 m) (15494 kr)
- 2:21 printar Designvas i röd PETG (15494 kr)
- 2:25 tar ut 1 st ur skrivaren (15494 kr)
- 2:31 gå till Ali (29 m) (15494 kr)
- 2:31 öppnar Alis butik – sälja (15494 kr)
- 2:33 säljer hos Ali: +1069 kr (16563 kr)
- 2:35 tjänar pengar till väntar på flaskhalsen för solpark: 16563/16603 kr → printar designvas i röd petg (1016 kr) (16563 kr)
- 2:41 gå till skrivaren (29 m) (16563 kr)
- 2:43 printar Designvas i röd PETG (16563 kr)
- 2:46 tar ut 1 st ur skrivaren (16563 kr)
- 2:52 gå till Ali (29 m) (16563 kr)
- 2:52 öppnar Alis butik – sälja (16563 kr)
- 2:54 säljer hos Ali: +1016 kr (17579 kr)
- 2:56 tjänar pengar till väntar på flaskhalsen för solpark: 17579/17619 kr → printar designvas i röd petg (965 kr) (17579 kr)
- 3:03 gå till en tunna (34 m) (17579 kr)
- 3:07 gå till PETG-kvarnen (11 m) (17579 kr)
- 3:07 tömmer det tunga i PETG-kvarnen (17579 kr)
- 3:12 gå till skrivaren (3 m) (17579 kr)
- 3:13 printar Designvas i röd PETG (17579 kr)
- 3:17 tar ut 1 st ur skrivaren (17579 kr)
- 3:24 gå till Ali (31 m) (17579 kr)
- 3:24 öppnar Alis butik – sälja (17579 kr)
- 3:25 säljer hos Ali: +965 kr (18544 kr)
- 3:33 popup: "Ja mamma." (18544 kr)
- 3:40 popup: "Läst" (18544 kr)
- 3:49 tjänar pengar till väntar på flaskhalsen för solpark: 18544/18584 kr → printar cykelhjälm i petg (1330 kr) (18544 kr)
- 3:55 gå till skrivaren (29 m) (18544 kr)
- 3:57 printar Cykelhjälm i PETG (18544 kr)
- 4:03 tar ut 1 st ur skrivaren (18544 kr)
- 4:09 gå till Ali (29 m) (18544 kr)
- 4:09 öppnar Alis butik – sälja (18544 kr)
- 4:11 säljer hos Ali: +1330 kr (19874 kr)
- 4:13 tjänar pengar till väntar på flaskhalsen för solpark: 19874/19914 kr → printar designvas i röd petg (917 kr) (19874 kr)
- 4:19 gå till skrivaren (29 m) (19874 kr)
- 4:20 printar Designvas i röd PETG (19874 kr)
- 4:24 tar ut 1 st ur skrivaren (19874 kr)
- 4:30 gå till Ali (29 m) (19874 kr)
- 4:30 öppnar Alis butik – sälja (19874 kr)
- 4:32 säljer hos Ali: +917 kr (20791 kr)
- 4:34 tjänar pengar till väntar på flaskhalsen för solpark: 20791/20831 kr → printar cykelhjälm i petg (1264 kr) (20791 kr)
- 4:40 gå till skrivaren (29 m) (20791 kr)
- 4:42 printar Cykelhjälm i PETG (20791 kr)
- 4:48 tar ut 1 st ur skrivaren (20791 kr)
- 4:54 gå till Ali (29 m) (20791 kr)
- 4:54 öppnar Alis butik – sälja (20791 kr)
- 4:56 säljer hos Ali: +1264 kr (22055 kr)
- 5:08 gå till slyet bakom tippen (51 m) (22055 kr)
- 5:29 tjänar pengar till väntar på pappas motorsåg: 22055/22175 kr → printar designvas i röd petg (871 kr) (22055 kr)
- 5:31 gå till en tunna (10 m) (22055 kr)
- 5:34 gå till PETG-kvarnen (9 m) (22055 kr)
- 5:34 tömmer det tunga i PETG-kvarnen (22055 kr)
- 5:39 gå till skrivaren (4 m) (22055 kr)
- 5:41 printar Designvas i röd PETG (22055 kr)
- 5:45 tar ut 1 st ur skrivaren (22055 kr)
- 5:51 gå till Ali (31 m) (22055 kr)
- 5:51 öppnar Alis butik – sälja (22055 kr)
- 5:53 säljer hos Ali: +871 kr (22926 kr)
- 5:55 tjänar pengar till väntar på pappas motorsåg: 22926/23046 kr → printar cykelhjälm i petg (1200 kr) (22926 kr)
- 6:01 gå till skrivaren (29 m) (22926 kr)
- 6:03 printar Cykelhjälm i PETG (22926 kr)
- 6:09 tar ut 1 st ur skrivaren (22926 kr)
- 6:15 gå till Ali (29 m) (22926 kr)
- 6:15 öppnar Alis butik – sälja (22926 kr)
- 6:17 säljer hos Ali: +1200 kr (24126 kr)
- 6:19 tjänar pengar till väntar på pappas motorsåg: 24126/24246 kr → printar designvas i röd petg (830 kr) (24126 kr)
- 6:25 gå till skrivaren (29 m) (24126 kr)
- 6:26 printar Designvas i röd PETG (24126 kr)
- 6:30 tar ut 1 st ur skrivaren (24126 kr)
- 6:36 gå till Ali (29 m) (24126 kr)
- 6:36 öppnar Alis butik – sälja (24126 kr)
- 6:38 säljer hos Ali: +830 kr (24956 kr)
- 6:51 gå till slyet (motorsåg) (51 m) (24956 kr)
- 7:00 gå till slyet (motorsåg) (4 m) (24956 kr)
- 7:06 gå till slyet (motorsåg) (5 m) (24956 kr)
- 7:16 gå till slyet (motorsåg) (4 m) (24956 kr)
- 7:29 gå till Ali (46 m) (24956 kr)
- 7:29 öppnar Alis butik – köpa solcellspark (24956 kr)
- 7:32 köper solpark för 2400 kr (22556 kr)
- 7:37 gå till skrivaren (23 m) (22556 kr)
- 7:39 printar Solcellspark (4 delar) (22556 kr)
- 7:55 plockar 8 skräp på tippen (bär max 16) (22556 kr)
- 7:57 gå till kvarnen (14 m) (22556 kr)
- 8:27 plockar 7 skräp på tippen (bär max 16) (22556 kr)
- 8:30 gå till kvarnen (15 m) (22556 kr)
- 8:52 gå till skrivaren (7 m) (22556 kr)
- 8:53 tar ut 1 st ur skrivaren (22556 kr)
- 8:57 gå till platsen för solcellspark (21 m) (22556 kr)
- 8:58 ställer ut solcellspark (22556 kr)
- 9:17 gå till Ali (46 m) (22556 kr)
- 9:17 öppnar Alis butik – köpa rulltorn xl (22556 kr)
- 9:20 köper petgtorn för 600 kr (21956 kr)
- 9:28 gå till en tunna (34 m) (21956 kr)
- 9:31 gå till PETG-kvarnen (9 m) (21956 kr)
- 9:31 tömmer det tunga i PETG-kvarnen (21956 kr)
- 9:39 gå till skrivaren (3 m) (21956 kr)
- 9:41 printar Rulltorn XL (3 delar) (21956 kr)
- 9:49 tar ut 1 st ur skrivaren (21956 kr)
- 9:49 gå till röda kvarnen (1 m) (21956 kr)
- 9:58 popup: "FORTSÄTT" (21956 kr)
- 10:05 gå till sängen (22 m) (21956 kr)

</details>

## Dag 10

| Tid | Källa | Vem | Text |
|---|---|---|---|
| 10:07 | vara | ali | n2_hjalm |
| 10:07 | väntar | info:guld | Nätterna blir kallare nu – se till att skjulet håller värmen. |
| 10:07 | sak | info:guld | Nätterna blir kallare nu – se till att skjulet håller värmen. |
| 10:07 | kvitto-visas | info:guld | Nätterna blir kallare nu – se till att skjulet håller värmen. |
| 10:07 | toast | guld | Nätterna blir kallare nu – se till att skjulet håller värmen. |
| 10:07 | händelse | malKlart | id=sov9 del=Dag 9 – Solcellsparken nasta=tapeter |
| 10:07 | MÅL |  | Tapetsera skjulet · 0/4 |
| 0:00 | klar | info:guld | Nätterna blir kallare nu – se till att skjulet håller värmen. |
| 0:01 | händelse | dagenBorjar | dag=10 |
| 0:01 | meddelande | du | Dag 10. 12 dagar till jul. Utan väggar fryser jag i natt. |
| 0:01 | dagbokkort | du | Skrivare L och kylan · Dag 10. 12 dagar till jul. Utan väggar fryser jag i natt. |
| 0:01 | röst | du | Skrivare L och kylan. Dag 10. 12 dagar till jul. Utan väggar fryser jag i natt. · STORY |
| 0:15 | händelse | morgonkortStangt | dag=10 |
| 0:15 | paket |  | sms |
| 0:15 | väntar | ali | Ali här. Satt uppe med AI:n hela natten. Ritningen till Tapeter är klar. Kom innan nio, då stänger jag. |
| 0:15 | struken | kedja | d10 |
| 0:15 | väntar | du | Skjulet ska kännas som ett rum. Tapeter. |
| 0:15 | målruta |  | Tapetsera skjulet · 0/4 |
| 0:20 | sak | du | Skjulet ska kännas som ett rum. Tapeter. |
| 0:20 | pil |  | Tapetsera skjulet · 0/4 |
| 0:20 | notis | tanke | 💭 Skjulet ska kännas som ett rum. Tapeter. |
| 0:20 | röst | du | Skjulet ska kännas som ett rum. Tapeter. · MÅL |
| 0:21 | nick |  | nick:82 |
| 0:24 | klar | du | Skjulet ska kännas som ett rum. Tapeter. |
| 0:26 | struken | notis:🌇 Klockan är 21. Ali slår igen luckan.  | 🌇 Klockan är 21. Ali slår igen luckan. Dagens jobb är klart – gå in i skjulet och sov i sängen. |
| 0:29 | väntar | notis:📔 Prestation: Kajakmalaren · +3 respekt | 📔 Prestation: Kajakmalaren · +3 respekt |
| 0:30 | röst | ali | Du printar mina ritningar. Ingen har gjort det förut. Jag är inte rörd. Det är dammet. · STORY |
| 0:30 | butiksbubbla | ali | Du printar mina ritningar. Ingen har gjort det förut. Jag är inte rörd. Det är dammet. |
| 0:32 | skratt | du | Alis dyr-pling |
| 0:32 | toast | guld | 3D-modell köpt – printa tapeter på skrivaren |
| 0:32 | händelse | kopt | sak=tapeter |
| 0:34 | struken | ali | Ali här. Satt uppe med AI:n hela natten. Ritningen till Tapeter är klar. Kom innan nio, då stänger jag. |
| 0:40 | händelse | printStart | sak=byggsats:tapeter |
| 0:42 | händelse | printKlar | sak=byggsats:tapeter n=1 |
| 0:42 | toast | guld | ✅ |
| 0:42 | händelse | tagitUrPrint | sak=byggsats:tapeter n=1 |
| 0:44 | sak | notis:📔 Prestation: Kajakmalaren · +3 respekt | 📔 Prestation: Kajakmalaren · +3 respekt |
| 0:44 | notis |  | 📔 Prestation: Kajakmalaren · +3 respekt |
| 0:46 | väntar | info:guld | 🧻 Bakväggen tapetserad. 3 kvar. |
| 0:47 | klar | notis:📔 Prestation: Kajakmalaren · +3 respekt | 📔 Prestation: Kajakmalaren · +3 respekt |
| 0:47 | sak | info:guld | 🧻 Bakväggen tapetserad. 3 kvar. |
| 0:47 | kvitto-visas | info:guld | 🧻 Bakväggen tapetserad. 3 kvar. |
| 0:47 | toast | guld | 🧻 Bakväggen tapetserad. 3 kvar. |
| 0:49 | klar | info:guld | 🧻 Bakväggen tapetserad. 3 kvar. |
| 0:56 | händelse | printStart | sak=byggsats:tapeter |
| 0:58 | händelse | printKlar | sak=byggsats:tapeter n=1 |
| 0:58 | toast | guld | ✅ |
| 0:58 | händelse | tagitUrPrint | sak=byggsats:tapeter n=1 |
| 1:02 | väntar | info:guld | 🧻 Vänster vägg tapetserad. 2 kvar. |
| 1:02 | sak | info:guld | 🧻 Vänster vägg tapetserad. 2 kvar. |
| 1:02 | kvitto-visas | info:guld | 🧻 Vänster vägg tapetserad. 2 kvar. |
| 1:02 | toast | guld | 🧻 Vänster vägg tapetserad. 2 kvar. |
| 1:04 | klar | info:guld | 🧻 Vänster vägg tapetserad. 2 kvar. |
| 1:11 | händelse | printStart | sak=byggsats:tapeter |
| 1:12 | händelse | printKlar | sak=byggsats:tapeter n=1 |
| 1:12 | toast | guld | ✅ |
| 1:13 | händelse | tagitUrPrint | sak=byggsats:tapeter n=1 |
| 1:17 | väntar | info:guld | 🧻 Höger vägg tapetserad. 1 kvar. |
| 1:17 | sak | info:guld | 🧻 Höger vägg tapetserad. 1 kvar. |
| 1:17 | kvitto-visas | info:guld | 🧻 Höger vägg tapetserad. 1 kvar. |
| 1:17 | toast | guld | 🧻 Höger vägg tapetserad. 1 kvar. |
| 1:19 | klar | info:guld | 🧻 Höger vägg tapetserad. 1 kvar. |
| 1:26 | skratt | du | falsk tuta |
| 1:26 | väntar | värld:TUUT! Hej grannen! | TUUT! Hej grannen! |
| 1:33 | tanke | du | Magen låter som kvarnen. |
| 1:33 | väntar | du | Magen låter som kvarnen. |
| 1:33 | sak | du | Magen låter som kvarnen. |
| 1:33 | notis | tanke | 💭 Magen låter som kvarnen. |
| 1:33 | röst | du | Magen låter som kvarnen. · REAKTION |
| 1:34 | ljud | kajsa | Mjau |
| 1:35 | klar | du | Magen låter som kvarnen. |
| 1:43 | skratt | du | kvarnen spottar |
| 1:45 | sak | värld:TUUT! Hej grannen! | TUUT! Hej grannen! |
| 1:45 | bubbla |  | TUUT! Hej grannen! |
| 1:47 | händelse | printStart | sak=byggsats:tapeter |
| 1:48 | klar | värld:TUUT! Hej grannen! | TUUT! Hej grannen! |
| 1:49 | händelse | printKlar | sak=byggsats:tapeter n=1 |
| 1:49 | toast | guld | ✅ |
| 1:49 | händelse | tagitUrPrint | sak=byggsats:tapeter n=1 |
| 1:53 | väntar | info:guld | Hela skjulet är tapetserat! Klassisk 70-talstapet … Ali säljer snyggare mönster. |
| 1:53 | sak | info:guld | Hela skjulet är tapetserat! Klassisk 70-talstapet … Ali säljer snyggare mönster. |
| 1:53 | kvitto-visas | info:guld | Hela skjulet är tapetserat! Klassisk 70-talstapet … Ali säljer snyggare mönster. |
| 1:53 | toast | guld | Hela skjulet är tapetserat! Klassisk 70-talstapet … Ali säljer snyggare mönster. |
| 1:53 | händelse | malKlart | id=tapeter del=Dag 10 – Skrivare L och kylan nasta=r10-gor-skjulet-varmt |
| 1:53 | händelse | malKlart | id=r10-gor-skjulet-varmt del=Dag 10 – Skrivare L och kylan nasta=spis10 |
| 1:53 | väntar | du | Bygg spisen och laga en varm måltid. |
| 1:54 | MÅL |  | Bygg spisen och laga en varm måltid |
| 1:55 | klar | info:guld | Hela skjulet är tapetserat! Klassisk 70-talstapet … Ali säljer snyggare mönster. |
| 1:55 | målruta |  | Bygg spisen och laga en varm måltid |
| 1:57 | kvittens-bock |  | ✓ Tapetsera skjulet · 4/4 |
| 1:57 | kvittens-bock |  | ✓ Gör skjulet varmt inför kylan |
| 1:57 | sak | du | Bygg spisen och laga en varm måltid. |
| 1:57 | pil |  | Bygg spisen och laga en varm måltid |
| 1:57 | röst | du | Bygg spisen och laga en varm måltid. · MÅL |
| 1:58 | nick |  | nick:84 |
| 2:00 | klar | du | Bygg spisen och laga en varm måltid. |
| 2:03 | väntar | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått solcellspark. Och rulltorn xl. Det är stort, Gunnar. |
| 2:03 | radio | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått solcellspark. Och rulltorn xl. Det är stort, Gunnar. |
| 2:03 | skratt | du | Radio-Kjelle |
| 2:08 | toast | guld | 🍳 Spisen ligger i handen – klicka på skjulet för att ställa in den |
| 2:08 | händelse | kopt | sak=spis |
| 2:08 | röst | ali | Laga inget som luktar fisk. Rolf kommer då. · STORY |
| 2:08 | butiksbubbla | ali | Laga inget som luktar fisk. Rolf kommer då. |
| 2:14 | väntar | info:guld | 🍳 Spisen står i skjulet – maten mättar mer nu |
| 2:14 | monterat | du | byggsats:spis |
| 2:14 | händelse | monterat | sak=spis |
| 2:14 | sak | info:guld | 🍳 Spisen står i skjulet – maten mättar mer nu |
| 2:14 | kvitto-visas | info:guld | 🍳 Spisen står i skjulet – maten mättar mer nu |
| 2:14 | toast | guld | 🍳 Spisen står i skjulet – maten mättar mer nu |
| 2:16 | klar | info:guld | 🍳 Spisen står i skjulet – maten mättar mer nu |
| 2:18 | väntar | info:bra | 😋 Raggmunksrester i folie – lagad på spisen |
| 2:18 | ata | du | burk_raggmunk |
| 2:18 | sak | info:bra | 😋 Raggmunksrester i folie – lagad på spisen |
| 2:18 | kvitto-visas | info:bra | 😋 Raggmunksrester i folie – lagad på spisen |
| 2:18 | toast | bra | 😋 Raggmunksrester i folie – lagad på spisen |
| 2:18 | paket |  | tanke |
| 2:18 | tanke | du | Varm mat. I skjulet. Mamma skulle inte tro det. |
| 2:18 | väntar | du | Varm mat. I skjulet. Mamma skulle inte tro det. |
| 2:18 | händelse | malKlart | id=spis10 del=Dag 10 – Skrivare L och kylan nasta=sov10 |
| 2:18 | paket |  | lapp |
| 2:18 | väntar | du | Dag 10 är slut. I natt frös jag. Tolv dagar kvar. |
| 2:18 | MÅL |  | Klart för idag – sov när du vill |
| 2:20 | klar | info:bra | 😋 Raggmunksrester i folie – lagad på spisen |
| 2:20 | sak | du | Varm mat. I skjulet. Mamma skulle inte tro det. |
| 2:20 | kvitto-visas | du | Varm mat. I skjulet. Mamma skulle inte tro det. |
| 2:20 | notis | tanke | 💭 Varm mat. I skjulet. Mamma skulle inte tro det. |
| 2:20 | röst | du | Varm mat. I skjulet. Mamma skulle inte tro det. · REAKTION |
| 2:22 | målruta |  | Klart för idag – sov när du vill |
| 2:22 | kvittens-bock |  | ✓ Bygg spisen och laga en varm måltid |
| 2:24 | klar | du | Varm mat. I skjulet. Mamma skulle inte tro det. |
| 2:24 | sak | du | (nytt mål i rutan) |
| 2:24 | pil |  | Klart för idag – sov när du vill |
| 2:24 | klar | du | (nytt mål i rutan) |
| 2:24 | sak | du | Dag 10 är slut. I natt frös jag. Tolv dagar kvar. |
| 2:24 | kvitto-visas | du | Dag 10 är slut. I natt frös jag. Tolv dagar kvar. |
| 2:24 | lapp | 📔 Dagbok | Dag 10 är slut. I natt frös jag. Tolv dagar kvar. |
| 2:24 | meddelande | du | Dag 10 är slut. I natt frös jag. Tolv dagar kvar. |
| 2:24 | dagbokkort | du | Dag 10 är slut. I natt frös jag. Tolv dagar kvar. |
| 2:25 | röst | du | Dag 10 är slut. I natt frös jag. Tolv dagar kvar. · STORY |
| 2:31 | händelse | brevLast | id=kvall10 |
| 2:31 | klar | du | Dag 10 är slut. I natt frös jag. Tolv dagar kvar. |
| 2:31 | väntar | notis:🌇 Klockan är 21. Ali slår igen luckan.  | 🌇 Klockan är 21. Ali slår igen luckan. Dagens jobb är klart – gå in i skjulet och sov i sängen. |

<details><summary>Botens handlingar dag 10</summary>

- 0:00 — dag 10 börjar — (22214 kr)
- 0:15 popup: "FORTSÄTT" (22214 kr)
- 0:30 gå till Ali (21 m) (22214 kr)
- 0:30 öppnar Alis butik – köpa tapeter (22214 kr)
- 0:33 köper tapeter för 800 kr (21414 kr)
- 0:39 gå till skrivaren (23 m) (21414 kr)
- 0:40 printar Tapeter (21414 kr)
- 0:43 tar ut 1 st ur skrivaren (21414 kr)
- 0:46 gå till skjulet (bak) (15 m) (21414 kr)
- 0:54 gå till skrivaren (15 m) (21414 kr)
- 0:56 printar Tapeter (21414 kr)
- 0:58 tar ut 1 st ur skrivaren (21414 kr)
- 1:02 gå till skjulet (vanster) (15 m) (21414 kr)
- 1:09 gå till skrivaren (15 m) (21414 kr)
- 1:11 printar Tapeter (21414 kr)
- 1:13 tar ut 1 st ur skrivaren (21414 kr)
- 1:17 gå till skjulet (hoger) (15 m) (21414 kr)
- 1:35 plockar 8 skräp på tippen (bär max 16) (21414 kr)
- 1:38 gå till kvarnen (13 m) (21414 kr)
- 1:45 gå till skrivaren (7 m) (21414 kr)
- 1:47 printar Tapeter (21414 kr)
- 1:50 tar ut 1 st ur skrivaren (21414 kr)
- 1:53 gå till skjulet (fram) (18 m) (21414 kr)
- 2:07 gå till Ali (20 m) (21414 kr)
- 2:07 öppnar Alis butik – köpa spis (21414 kr)
- 2:09 köper spis för 360 kr (21054 kr)
- 2:14 gå till ställ in spisen i skjulet (19 m) (21054 kr)
- 2:18 lagar burk_raggmunk på spisen (21054 kr)
- 2:31 popup: "FORTSÄTT" (21054 kr)
- 2:31 gå till sängen (1 m) (21054 kr)

</details>

## Dag 11

| Tid | Källa | Vem | Text |
|---|---|---|---|
| 2:34 | vara | ali | n2_vas |
| 2:34 | händelse | malKlart | id=sov10 del=Dag 10 – Skrivare L och kylan nasta=kolfkvarn |
| 2:34 | väntar | info:guld | 🏆 KAPITEL 2 KLART! Röda fabriken går – och skjulet klarar kylan. |
| 2:34 | paket |  | sms |
| 2:34 | väntar | rolf | Dä blir kallt nu o du fryser int. Respekt. Ja la jukeboxen från dödsbot i lådan. O lite pengar. Den spelar bara dansband. /R |
| 2:34 | MÅL |  | Bygg kolfiberkvarnen i linje 3 |
| 2:34 | sak | info:guld | 🏆 KAPITEL 2 KLART! Röda fabriken går – och skjulet klarar kylan. |
| 2:34 | kvitto-visas | info:guld | 🏆 KAPITEL 2 KLART! Röda fabriken går – och skjulet klarar kylan. |
| 2:34 | toast | guld | 🏆 KAPITEL 2 KLART! Röda fabriken går – och skjulet klarar kylan. |
| 2:34 | väntar | info:guld | 🚧 Gärdesgården har flyttats ut! Du får utforska ny mark – men bara ställa saker på mark du äger. |
| 0:00 | klar | info:guld | 🏆 KAPITEL 2 KLART! Röda fabriken går – och skjulet klarar kylan. |
| 0:00 | sak | info:guld | 🚧 Gärdesgården har flyttats ut! Du får utforska ny mark – men bara ställa saker på mark du äger. |
| 0:00 | kvitto-visas | info:guld | 🚧 Gärdesgården har flyttats ut! Du får utforska ny mark – men bara ställa saker på mark du äger. |
| 0:00 | toast | guld | 🚧 Gärdesgården har flyttats ut! Du får utforska ny mark – men bara ställa saker på mark du äger. |
| 0:01 | händelse | dagenBorjar | dag=11 |
| 0:01 | meddelande | du | Nätterna blir kalla. Därför: värme. |
| 0:01 | dagbokkort | du | KAPITEL 3 · Dag 11. 11 dagar till jul · Nätterna blir kalla. Därför: värme. |
| 0:01 | röst | du | KAPITEL 3 · Dag 11. 11 dagar till jul. Nätterna blir kalla. Därför: värme. · STORY |
| 0:07 | klar | info:guld | 🚧 Gärdesgården har flyttats ut! Du får utforska ny mark – men bara ställa saker på mark du äger. |
| 0:07 | händelse | morgonkortStangt | dag=11 |
| 0:07 | paket |  | sms |
| 0:07 | väntar | ali | Ali här. Satt uppe med AI:n hela natten. Ritningen till Kolfiberkvarnen är klar. Kom innan nio, då stänger jag. |
| 0:07 | paket |  | toast |
| 0:07 | väntar | notis:🔥 Varmt och skönt i skjulet trots kylan | 🔥 Varmt och skönt i skjulet trots kylan. |
| 0:07 | struken | kedja | d11 |
| 0:07 | väntar | du | Kajakerna på tippen är kolfiber. Det behövs en kvarn som tål det. |
| 0:11 | målruta |  | Bygg kolfiberkvarnen i linje 3 |
| 0:13 | sak | du | Kajakerna på tippen är kolfiber. Det behövs en kvarn som tål det. |
| 0:13 | pil |  | Bygg kolfiberkvarnen i linje 3 |
| 0:13 | notis | tanke | 💭 Kajakerna på tippen är kolfiber. Det behövs en kvarn som tål det. |
| 0:13 | röst | du | Kajakerna på tippen är kolfiber. Det behövs en kvarn som tål det. · MÅL |
| 0:13 | nick |  | nick:86 |
| 0:16 | ljud | bom | Bommen fälls upp (vanster) |
| 0:16 | brott | SEN KVITTENS | 2.1 s sen: ”Dag 10 är slut. I natt frös jag. Tolv dagar kvar.” (dagbok kvall10) |
| 0:16 | väntar | info:guld | Skylten vid vägen är uppgraderad. |
| 0:17 | väntar | bud | (tips) |
| 0:17 | paket |  | sms |
| 0:17 | väntar | rolf | Gå int genom gamla grinden bakom tippen. Där e floden. /R |
| 0:18 | klar | du | Kajakerna på tippen är kolfiber. Det behövs en kvarn som tål det. |
| 0:18 | sak | info:guld | Skylten vid vägen är uppgraderad. |
| 0:18 | kvitto-visas | info:guld | Skylten vid vägen är uppgraderad. |
| 0:18 | toast | guld | Skylten vid vägen är uppgraderad. |
| 0:20 | klar | info:guld | Skylten vid vägen är uppgraderad. |
| 0:22 | väntar | värld:HMPF. RÖD. | HMPF. RÖD. |
| 0:22 | struken | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått solcellspark. Och rulltorn xl. Det är stort, Gunnar. |
| 0:22 | struken | notis:🌇 Klockan är 21. Ali slår igen luckan.  | 🌇 Klockan är 21. Ali slår igen luckan. Dagens jobb är klart – gå in i skjulet och sov i sängen. |
| 0:22 | struken | notis:🔥 Varmt och skönt i skjulet trots kylan | 🔥 Varmt och skönt i skjulet trots kylan. |
| 0:22 | sak | bud | (tips) |
| 0:24 | klar | bud | (tips) |
| 0:26 | meddelande | mamma | Fick du burkarna? Honungen är från Gunnars bigårdar och lingonen plockade jag själv. Ät upp allt! |
| 0:27 | röst | mamma | Fick du burkarna? Honungen är från Gunnars bigårdar och lingonen plockade jag själv. Ät upp allt! · STORY |
| 0:39 | paket |  | sms |
| 0:39 | väntar | mamma | Bra! Pappa tar med fler på torsdag. Jag har 40 burkar kvar i källaren. |
| 0:49 | händelse | brevLast | id=m_burk1 |
| 0:51 | struken | värld:HMPF. RÖD. | HMPF. RÖD. |
| 0:51 | sak | mamma | Bra! Pappa tar med fler på torsdag. Jag har 40 burkar kvar i källaren. |
| 0:51 | sms | mamma | Bra! Pappa tar med fler på torsdag. Jag har 40 burkar kvar i källaren. |
| 0:51 | sms-bubbla | mamma | Bra! Pappa tar med fler på torsdag. Jag har 40 burkar kvar i källaren. |
| 0:51 | röst | mamma | Bra! Pappa tar med fler på torsdag. Jag har 40 burkar kvar i källaren. · STORY |
| 0:57 | klar | mamma | Bra! Pappa tar med fler på torsdag. Jag har 40 burkar kvar i källaren. |
| 1:02 | väntar | rolf | Båtklubben skulle rensa förrådet. Ja hjälpte till. Fråga inte hur. /R |
| 1:08 | röst | ali | Jag visade AI:n din skrivare. Den sa: bygg något eget, Ali. Jag sa: jag är femtioåtta. Den sa: och? · STORY |
| 1:08 | butiksbubbla | ali | Jag visade AI:n din skrivare. Den sa: bygg något eget, Ali. Jag sa: jag är femtioåtta. Den sa: och? |
| 1:10 | skratt | du | Alis dyr-pling |
| 1:10 | toast | guld | 3D-modell köpt – printa kolfiberkvarnen på skrivaren |
| 1:10 | händelse | kopt | sak=kolfkvarn |
| 1:13 | struken | ali | Ali här. Satt uppe med AI:n hela natten. Ritningen till Kolfiberkvarnen är klar. Kom innan nio, då stänger jag. |
| 1:21 | väntar | värld:TUUT! Grann skylt! | TUUT! Grann skylt! |
| 1:22 | skratt | du | kvarnen rapar |
| 1:22 | toast | guld | 🧵 |
| 1:23 | sak | värld:TUUT! Grann skylt! | TUUT! Grann skylt! |
| 1:23 | bubbla |  | TUUT! Grann skylt! |
| 1:26 | klar | värld:TUUT! Grann skylt! | TUUT! Grann skylt! |
| 1:27 | toast | guld | 🧵 |
| 1:32 | händelse | printStart | sak=byggsats:kolfkvarn |
| 1:34 | toast | bra | Del 1 av 4 klar |
| 1:37 | toast | bra | Del 2 av 4 klar |
| 1:39 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 1:41 | tanke | du | Byggnadsnämnden. Igentejpat. Mycket tejp. |
| 1:41 | väntar | du | Byggnadsnämnden. Igentejpat. Mycket tejp. |
| 1:41 | sak | du | Byggnadsnämnden. Igentejpat. Mycket tejp. |
| 1:41 | notis | tanke | 💭 Byggnadsnämnden. Igentejpat. Mycket tejp. |
| 1:41 | röst | du | Byggnadsnämnden. Igentejpat. Mycket tejp. · REAKTION |
| 1:45 | klar | du | Byggnadsnämnden. Igentejpat. Mycket tejp. |
| 1:45 | skratt | du | kvarnen rapar |
| 1:47 | toast | bra | Del 3 av 4 klar |
| 1:51 | händelse | printKlar | sak=byggsats:kolfkvarn n=1 |
| 1:51 | toast | guld | ✅ |
| 1:53 | händelse | tagitUrPrint | sak=byggsats:kolfkvarn n=1 |
| 1:55 | toast | guld | 🧵 |
| 1:56 | händelse | placerat | sak=kolfkvarn |
| 1:56 | händelse | malKlart | id=kolfkvarn del=Dag 11 – Kolfiberlinjen nasta=kolfband |
| 1:56 | väntar | du | Kajakerna är för stora att bära. Ett band från tippen. |
| 1:56 | målruta |  | Bygg rullbandet från tippen |
| 1:56 | MÅL |  | Bygg rullbandet från tippen |
| 1:57 | väntar | bud | (tips) |
| 1:58 | sak | du | Kajakerna är för stora att bära. Ett band från tippen. |
| 1:58 | pil |  | Bygg rullbandet från tippen |
| 1:58 | notis | tanke | 💭 Kajakerna är för stora att bära. Ett band från tippen. |
| 1:58 | röst | du | Kajakerna är för stora att bära. Ett band från tippen. · MÅL |
| 1:58 | nick |  | nick:87 |
| 2:00 | kvittens-bock |  | ✓ Bygg kolfiberkvarnen i linje 3 |
| 2:01 | väntar | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har TAPETER. Gunnar, du hör väl? |
| 2:01 | radio | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har TAPETER. Gunnar, du hör väl? |
| 2:01 | skratt | du | Radio-Kjelle |
| 2:02 | klar | du | Kajakerna är för stora att bära. Ett band från tippen. |
| 2:04 | sak | bud | (tips) |
| 2:06 | klar | bud | (tips) |
| 2:08 | meddelande | mamma | Fick du kompotten? Det är rotfruktsgratäng. Potatisen var slut så jag tog kålrot, palsternacka och lite selleri. Värm i ugnen! Har du ugn? |
| 2:09 | röst | mamma | Fick du kompotten? Det är rotfruktsgratäng. Potatisen var slut så jag tog kålrot, palsternacka och lite selleri. Värm i ugnen! Har du ugn? · STORY |
| 2:22 | paket |  | sms |
| 2:22 | väntar | mamma | Ingen ugn. Jag skickar en ugn med pappa. … Pappa säger att den inte får plats i bilen. Ät den kall då. |
| 2:36 | händelse | brevLast | id=m_kompott |
| 2:37 | väntar | du | Hmm… flaggan är uppe på Rolfs brevlåda vid grinden. Har det kommit ett brev? |
| 2:38 | struken | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har TAPETER. Gunnar, du hör väl? |
| 2:38 | sak | du | Hmm… flaggan är uppe på Rolfs brevlåda vid grinden. Har det kommit ett brev? |
| 2:38 | röst | du | Hmm… flaggan är uppe på Rolfs brevlåda vid grinden. Har det kommit ett brev? · REAKTION |
| 2:39 | väntar | rolf | ÖJ. Ja va int mä mej själv på konditoriet. Förlåt att ja prata så mycke. Bakom husvagnen fanns Birgittas trädgård. Nu ä dä bara nässlor. Ja har int rört den på sju år. Ja kan int. Men om nån annan började … Ja vet int. Du ä ju bra på skräp. MVH ROLF |
| 2:44 | klar | du | Hmm… flaggan är uppe på Rolfs brevlåda vid grinden. Har det kommit ett brev? |
| 2:46 | sak | rolf | ÖJ. Ja va int mä mej själv på konditoriet. Förlåt att ja prata så mycke. Bakom husvagnen fanns Birgittas trädgård. Nu ä dä bara nässlor. Ja har int rört den på sju år. Ja kan int. Men om nån annan började … Ja vet int. Du ä ju bra på skräp. MVH ROLF |
| 2:46 | lapp | Brev från Rolf | ÖJ. Ja va int mä mej själv på konditoriet. Förlåt att ja prata så mycke. Bakom husvagnen fanns Birgittas trädgård. Nu ä dä bara nässlor. Ja har int rört den på sju år. Ja kan int. Men om nån annan började … Ja vet int. Du ä ju bra på skräp. MVH ROLF |
| 2:46 | röst | rolf | ÖJ. Ja va int mä mej själv på konditoriet. Förlåt att ja prata så mycke. Bakom husvagnen fanns Birgittas trädgård. Nu ä dä bara nässlor. Ja har int rört den på sju år. Ja kan int. Men om nån annan började … Ja vet int. Du ä ju bra på skräp. MVH ROLF · STORY |
| 2:48 | skratt | du | Alis dyr-pling |
| 2:48 | toast | guld | 3D-modell köpt – printa rött rullband från tippen på skrivaren |
| 2:48 | händelse | kopt | sak=kolfband |
| 2:51 | paket |  | sms |
| 2:51 | väntar | mamma | Jag har skickat stickade raggsockor (för små) med Rolf. Den ligger i postlådan. |
| 3:01 | skratt | du | kvarnen rapar |
| 3:02 | toast | guld | 🧵 |
| 3:05 | händelse | printStart | sak=byggsats:kolfband |
| 3:07 | klar | rolf | ÖJ. Ja va int mä mej själv på konditoriet. Förlåt att ja prata så mycke. Bakom husvagnen fanns Birgittas trädgård. Nu ä dä bara nässlor. Ja har int rört den på sju år. Ja kan int. Men om nån annan började … Ja vet int. Du ä ju bra på skräp. MVH ROLF |
| 3:07 | händelse | brevLast | id=tr_brev |
| 3:07 | toast | bra | Del 1 av 4 klar |
| 3:08 | toast | guld | 🧵 |
| 3:08 | toast | guld | 🧵 |
| 3:09 | toast | bra | Del 2 av 4 klar |
| 3:12 | toast | bra | Del 3 av 4 klar |
| 3:14 | toast | guld | 🧵 |
| 3:14 | händelse | printKlar | sak=byggsats:kolfband n=1 |
| 3:14 | toast | guld | ✅ |
| 3:14 | toast | guld | 🧵 |
| 3:15 | händelse | tagitUrPrint | sak=byggsats:kolfband n=1 |
| 3:17 | händelse | placerat | sak=kolfband |
| 3:17 | väntar | info:guld | Rullbandet går – det hämtar kajaker och kanoter från tippen |
| 3:17 | sak | info:guld | Rullbandet går – det hämtar kajaker och kanoter från tippen |
| 3:17 | kvitto-visas | info:guld | Rullbandet går – det hämtar kajaker och kanoter från tippen |
| 3:17 | toast | guld | Rullbandet går – det hämtar kajaker och kanoter från tippen |
| 3:17 | händelse | malKlart | id=kolfband del=Dag 11 – Kolfiberlinjen nasta=kajak3 |
| 3:17 | väntar | du | Bandet går. Nu ska kajakerna upp på det. |
| 3:17 | MÅL |  | Mata in kajaker med bandet · 0/3 |
| 3:19 | klar | info:guld | Rullbandet går – det hämtar kajaker och kanoter från tippen |
| 3:20 | målruta |  | Mata in kajaker med bandet · 0/3 |
| 3:21 | kvittens-bock |  | ✓ Bygg rullbandet från tippen |
| 3:21 | sak | du | Bandet går. Nu ska kajakerna upp på det. |
| 3:21 | pil |  | Mata in kajaker med bandet · 0/3 |
| 3:21 | notis | tanke | 💭 Bandet går. Nu ska kajakerna upp på det. |
| 3:21 | röst | du | Bandet går. Nu ska kajakerna upp på det. · MÅL |
| 3:23 | skratt | du | falsk tuta |
| 3:24 | klar | du | Bandet går. Nu ska kajakerna upp på det. |
| 3:31 | tanke | du | Den åker själv. Jag står bara och tittar. Det här är framtiden. |
| 3:31 | väntar | du | Den åker själv. Jag står bara och tittar. Det här är framtiden. |
| 3:33 | sak | mamma | Ingen ugn. Jag skickar en ugn med pappa. … Pappa säger att den inte får plats i bilen. Ät den kall då. |
| 3:33 | sms | mamma | Ingen ugn. Jag skickar en ugn med pappa. … Pappa säger att den inte får plats i bilen. Ät den kall då. |
| 3:33 | sms-bubbla | mamma | Ingen ugn. Jag skickar en ugn med pappa. … Pappa säger att den inte får plats i bilen. Ät den kall då. |
| 3:33 | röst | mamma | Ingen ugn. Jag skickar en ugn med pappa. … Pappa säger att den inte får plats i bilen. Ät den kall då. · STORY |
| 3:37 | händelse | printStart | sak=pall |
| 3:41 | toast | guld | ✅ |
| 3:41 | händelse | printKlar | sak=pall n=26 |
| 3:41 | klar | mamma | Ingen ugn. Jag skickar en ugn med pappa. … Pappa säger att den inte får plats i bilen. Ät den kall då. |
| 3:42 | nej | du | Ta ut pall |
| 3:42 | tanke | du | Fickorna är fulla. Jag får lägga något i ryggsäcken först. |
| 3:42 | väntar | du | Fickorna är fulla. Jag får lägga något i ryggsäcken först. |
| 3:42 | toast | fickskylt | Fulla fickor |
| 3:42 | fullaFickor | du | pall |
| 3:42 | händelse | tagitUrPrint | sak=pall n=1 |
| 3:43 | väntar | mamma | Jag har köpt julskinka för två. |
| 3:43 | sak | du | Den åker själv. Jag står bara och tittar. Det här är framtiden. |
| 3:43 | notis | tanke | 💭 Den åker själv. Jag står bara och tittar. Det här är framtiden. |
| 3:43 | röst | du | Den åker själv. Jag står bara och tittar. Det här är framtiden. · STORY |
| 3:44 | väntar | värld:TUUT! Hej grannen! | TUUT! Hej grannen! |
| 3:45 | händelse | printStart | sak=nyckelring |
| 3:45 | toast | guld | ✅ |
| 3:45 | händelse | printKlar | sak=nyckelring n=26 |
| 3:46 | nej | du | Ta ut nyckelring |
| 3:46 | tanke | du | Fickorna är fulla. Jag får lägga något i ryggsäcken först. |
| 3:46 | struken | du | Fickorna är fulla. Jag får lägga något i ryggsäcken först. |
| 3:46 | toast | fickskylt | Fulla fickor |
| 3:46 | fullaFickor | du | nyckelring |
| 3:46 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 3:49 | klar | du | Den åker själv. Jag står bara och tittar. Det här är framtiden. |
| 3:51 | sak | du | Fickorna är fulla. Jag får lägga något i ryggsäcken först. |
| 3:51 | notis | tanke | 💭 Fickorna är fulla. Jag får lägga något i ryggsäcken först. |
| 3:51 | röst | du | Fickorna är fulla. Jag får lägga något i ryggsäcken först. · REAKTION |
| 3:56 | klar | du | Fickorna är fulla. Jag får lägga något i ryggsäcken först. |
| 3:59 | händelse | malKlart | id=kajak3 del=Dag 11 – Kolfiberlinjen nasta=kolfrulle |
| 3:59 | händelse | malKlart | id=kolfrulle del=Dag 11 – Kolfiberlinjen nasta=sov11 |
| 3:59 | paket |  | lapp |
| 3:59 | lapp | 📔 Dagbok | Dag 11 är slut. Maskinerna står och väntar på mig. I morgon. |
| 3:59 | meddelande | du | Dag 11 är slut. Maskinerna står och väntar på mig. I morgon. |
| 3:59 | dagbokkort | du | Dag 11 är slut. Maskinerna står och väntar på mig. I morgon. |
| 3:59 | målruta |  | Klart för idag – sov när du vill |
| 3:59 | MÅL |  | Klart för idag – sov när du vill |
| 3:59 | röst | du | Dag 11 är slut. Maskinerna står och väntar på mig. I morgon. · STORY |
| 4:07 | händelse | brevLast | id=kvall11 |
| 4:07 | väntar | notis:🌇 Klockan är 21. Ali slår igen luckan.  | 🌇 Klockan är 21. Ali slår igen luckan. Dagens jobb är klart – gå in i skjulet och sov i sängen. |
| 4:08 | paket |  | replik |
| 4:08 | väntar | du | Ryggsäcken. Tryck E så öppnar jag den. |
| 4:08 | webb | du | packade 1 pall |
| 4:16 | sak | du | (nytt mål i rutan) |
| 4:16 | pil |  | Klart för idag – sov när du vill |
| 4:16 | klar | du | (nytt mål i rutan) |
| 4:16 | webb | du | packade 1 nyckelring |
| 4:25 | sak | värld:TUUT! Hej grannen! | TUUT! Hej grannen! |
| 4:25 | bubbla |  | TUUT! Hej grannen! |
| 4:28 | klar | värld:TUUT! Hej grannen! | TUUT! Hej grannen! |
| 4:32 | väntar | info:bra | 📦 Paketet till Majken, 91, i Skellefteå ligger i postlådan – Rolf tar det till posten |
| 4:32 | sak | info:bra | 📦 Paketet till Majken, 91, i Skellefteå ligger i postlådan – Rolf tar det till posten |
| 4:32 | kvitto-visas | info:bra | 📦 Paketet till Majken, 91, i Skellefteå ligger i postlådan – Rolf tar det till posten |
| 4:32 | toast | bra | 📦 Paketet till Majken, 91, i Skellefteå ligger i postlådan – Rolf tar det till posten |
| 4:32 | väntar | info:bra | 📦 Paketet till Någon som bara skrev "hej" ligger i postlådan – Rolf tar det till posten |
| 4:34 | klar | info:bra | 📦 Paketet till Majken, 91, i Skellefteå ligger i postlådan – Rolf tar det till posten |
| 4:34 | sak | info:bra | 📦 Paketet till Någon som bara skrev "hej" ligger i postlådan – Rolf tar det till posten |
| 4:34 | kvitto-visas | info:bra | 📦 Paketet till Någon som bara skrev "hej" ligger i postlådan – Rolf tar det till posten |
| 4:34 | toast | bra | 📦 Paketet till Någon som bara skrev "hej" ligger i postlådan – Rolf tar det till posten |
| 4:36 | klar | info:bra | 📦 Paketet till Någon som bara skrev "hej" ligger i postlådan – Rolf tar det till posten |
| 4:36 | händelse | printStart | sak=n2_vas |
| 4:40 | toast | guld | ✅ |
| 4:40 | händelse | printKlar | sak=n2_vas n=30 |
| 4:40 | händelse | tagitUrPrint | sak=n2_vas n=1 |
| 4:48 | aliSalt | ali | 1185 |
| 4:49 | aliSalt | ali | 30 |
| 4:49 | sak | notis:🌇 Klockan är 21. Ali slår igen luckan.  | 🌇 Klockan är 21. Ali slår igen luckan. Dagens jobb är klart – gå in i skjulet och sov i sängen. |
| 4:49 | notis | guld | 🌇 Klockan är 21. Ali slår igen luckan. Dagens jobb är klart – gå in i skjulet och sov i sängen. |
| 4:52 | klar | notis:🌇 Klockan är 21. Ali slår igen luckan.  | 🌇 Klockan är 21. Ali slår igen luckan. Dagens jobb är klart – gå in i skjulet och sov i sängen. |
| 4:58 | struken | mamma | Jag har köpt julskinka för två. |
| 5:00 | webbBetalt | du | 283 |
| 5:00 | paket |  | sms |
| 5:00 | väntar | rolf | Kajsa har fått lax tre dar i rad. Tack vare dina paket. Hon e otrevlig mot mej nu. /R |

<details><summary>Botens handlingar dag 11</summary>

- 0:00 — dag 11 börjar — (21054 kr)
- 0:15 popup: "FORTSÄTT" (21054 kr)
- 0:39 popup: "Tack mamma ❤️" (21054 kr)
- 0:49 popup: "Läst" (21054 kr)
- 0:56 gå till Rolfs postlåda (29 m) (21054 kr)
- 1:01 panel: "Rolfs postlåda
Det här låg i l" (24054 kr)
- 1:08 gå till Ali (31 m) (24054 kr)
- 1:08 öppnar Alis butik – köpa kolfiberkvarnen (24054 kr)
- 1:11 köper kolfkvarn för 6000 kr (18054 kr)
- 1:19 gå till en tunna (38 m) (18054 kr)
- 1:22 gå till PETG-kvarnen (7 m) (18054 kr)
- 1:22 tömmer det tunga i PETG-kvarnen (18054 kr)
- 1:30 gå till skrivaren (4 m) (18054 kr)
- 1:32 printar Kolfiberkvarnen (4 delar) (18054 kr)
- 1:42 gå till en tunna (13 m) (18054 kr)
- 1:45 gå till PETG-kvarnen (9 m) (18054 kr)
- 1:45 tömmer det tunga i PETG-kvarnen (18054 kr)
- 1:53 gå till skrivaren (4 m) (18054 kr)
- 1:54 tar ut 1 st ur skrivaren (18054 kr)
- 1:55 gå till platsen för kolfiberkvarnen (5 m) (18054 kr)
- 1:56 ställer ut kolfiberkvarnen (18054 kr)
- 2:22 popup: "Jag har ingen ugn." (18054 kr)
- 2:36 popup: "Läst" (18054 kr)
- 2:39 gå till Rolfs postlåda (13 m) (18054 kr)
- 2:46 gå till Ali (32 m) (18054 kr)
- 2:46 öppnar Alis butik – köpa rött rullband från tippen (18054 kr)
- 2:49 köper kolfband för 10500 kr (7554 kr)
- 2:58 gå till en tunna (39 m) (7554 kr)
- 3:01 gå till PETG-kvarnen (11 m) (7554 kr)
- 3:01 tömmer det tunga i PETG-kvarnen (7554 kr)
- 3:03 gå till skrivaren (4 m) (7554 kr)
- 3:05 printar Rött rullband från tippen (4 delar) (7554 kr)
- 3:15 tar ut 1 st ur skrivaren (7554 kr)
- 3:17 gå till kolfiberkvarnen (5 m) (7554 kr)
- 3:29 gå till Rolfs postlåda (13 m) (7554 kr)
- 3:33 panel: "Rolfs postlåda
Det här låg i l" (7554 kr)
- 3:36 gå till skrivaren (10 m) (7554 kr)
- 3:37 printar Pall (7554 kr)
- 3:42 tar ut 1 st ur skrivaren (7554 kr)
- 3:42 fulla fickor – lägger hammare i kistan (7554 kr)
- 3:45 printar Nyckelring (7554 kr)
- 3:46 tar ut 1 st ur skrivaren (7554 kr)
- 3:46 fulla fickor – lägger pall i kistan (7554 kr)
- 3:51 gå till datorn (19 m) (7554 kr)
- 3:59 panel: "Webbshopen · Soptippsvägen 1
B" (7554 kr)
- 4:07 popup: "FORTSÄTT" (7554 kr)
- 4:16 panel: "Webbshopen · Soptippsvägen 1
B" (7554 kr)
- 4:25 panel: "Webbshopen · Soptippsvägen 1
B" (7554 kr)
- 4:32 gå till Rolfs postlåda (paket) (29 m) (7554 kr)
- 4:33 webbshop: 2 paket i postlådan (7554 kr)
- 4:33 tjänar pengar till bandet hämtar kajaker: 7554/7704 kr → printar designvas i röd petg (1185 kr) (7554 kr)
- 4:35 gå till skrivaren (10 m) (7554 kr)
- 4:36 printar Designvas i röd PETG (7554 kr)
- 4:40 tar ut 1 st ur skrivaren (7554 kr)
- 4:47 gå till Ali (30 m) (7554 kr)
- 4:47 öppnar Alis butik – sälja (7554 kr)
- 4:49 säljer hos Ali: +1215 kr (8769 kr)
- 4:58 gå till sängen (20 m) (8769 kr)

</details>

## Dag 12

| Tid | Källa | Vem | Text |
|---|---|---|---|
| 5:00 | vara | ali | n2_hjalm |
| 5:00 | händelse | malKlart | id=sov11 del=Dag 11 – Kolfiberlinjen nasta=kolfskrivare |
| 5:01 | MÅL |  | Printa och sälj |

<details><summary>Botens handlingar dag 12</summary>

- 0:00 — dag 12 börjar — (9052 kr)

</details>
