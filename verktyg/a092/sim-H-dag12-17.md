# Simulering kapitel 1 – körning 1

*Gjord 2026-11-21 01:03 med `verktyg/sim-kapitel1.mjs` + `verktyg/sim-bot.js` (punkt AX). Boten går 4,5 m/s, läser 15 tecken/s, trampar, vevar, plockar, printar, köper och säljer via spelets egna funktioner. Tiderna är speltid.*

## Sammanfattning

| Dag | Minuter | Väntan | Prints (totalt) | Kr vid sömn | Bär | Trivsel |
|---|---|---|---|---|---|---|
| 12 | 14.4 | 0 % | 168 | 69742 | 16 | 202 |
| 13 | 2.1 | 5 % | 169 | 28842 | 16 | 239 |
| 14 | 5.0 | 0 % | 173 | 10092 | 16 | 237 |
| 15 | 4.0 | 6 % | 178 | 4516 | 16 | 305 |
| 16 | 14.7 | 34 % ⚠️ | 354 | 14689 | 16 | 347 |
| 17 | 18.7 | 0 % | 511 | 79055 | 16 | 347 |

## Flaskhalskartan (EE)

| Dag | bara | mala | trampa | strom | skrivare | inkomst | Upplåst |
|---|---|---|---|---|---|---|---|
| 12 | 0 | 724 | 0 | 0 | 728 | 0 | kolfskrivare (skrivare, 1:42), bank2 (strom, 10:22, reserv) |
| 13 | 2 | 29 | 0 | 0 | 51 | 0 |  |
| 14 | 0 | 171 | 0 | 0 | 198 | 0 |  |
| 15 | 3 | 21 | 0 | 0 | 180 | 0 | trim_kolf1 (skrivare_kolf, 2:34) |
| 16 | 17 | 22 | 0 | 0 | 840 | 0 |  |
| 17 | 0 | 0 | 0 | 0 | 0 | 0 | solpark2 (strom, 5:24, reserv) |

TIDIG: 0 · FAST: 0 · upplåst av reserven (målet väntade 3 min): 2

**SKRATT:** 74 roliga ögonblick på 59 min (12.6 per 10 min, mål minst 5)

**Köp:**

- dag 12 5:13 – kolfskrivare (25000 kr)
- dag 12 6:54 – kolfslang (27500 kr)
- dag 12 13:47 – bank (1600 kr)
- dag 13 0:23 – gamingbod (41000 kr)
- dag 14 0:47 – jetmotor (16000 kr)
- dag 14 3:40 – utlada (18500 kr)
- dag 15 0:39 – projektor (950 kr)
- dag 15 1:18 – ledpinne (1000 kr)
- dag 15 1:48 – jacuzzi (5700 kr)
- dag 15 2:52 – fagelbad (60 kr)
- dag 15 3:16 – hogtalare (1450 kr)
- dag 17 9:59 – solpark (4800 kr)

## Storykedjan (kvittens → varför → nytt mål)

| Dag | Tid | Id | Kvittens | Varför | Nytt mål | Tid till målet |
|---|---|---|---|---|---|---|


## Hur länge nya mål väntade (från att förra målet blev klart till att det nya syntes i målrutan)

Snitt 5.9 s · max 20.9 s · över 4 s: 7 · över 8 s: 6 av 23

## Flaggor (31)

- **LUGN** dag 13 0:21: 4.9 s efter BÖRJA DAGEN: [röst] "Jag har sålt min första egna ritning. Till en man i Örebro. "
- **LUGN** dag 14 0:18: 2.5 s efter BÖRJA DAGEN: [lapp] "Dag 14. Mammas paket kom tillbaka: "Okänd mottagare". Jag bo"
- **LUGN** dag 14 0:18: 2.5 s efter BÖRJA DAGEN: [meddelande] "Dag 14. Mammas paket kom tillbaka: "Okänd mottagare". Jag bo"
- **LUGN** dag 14 0:18: 2.7 s efter BÖRJA DAGEN: [röst] "Dag 14. Mammas paket kom tillbaka: "Okänd mottagare". Jag bo"
- **KROCK** dag 14 0:01: 2.9 s mellan [notis] "📔 Prestation: Städtokig · +3 respekt" och [meddelande] "Dag 14. 8 dagar till jul. Går kvarnen så här långsamt hinner"
- **KROCK** dag 16 0:01: 2.9 s mellan [notis] "🌇 Klockan är 21. Ali slår igen luckan. Dagens jobb är klart" och [meddelande] "På pappret finns jag inte. Därför: en egen tomt och ett rikt"
- **SEN** dag 12 6:30: 11.6 s efter händelsen: du: "Jag skulle kunna äta en sopsäck. Nästan."
- **SEN** dag 12 6:47: 32.3 s efter händelsen: ali: "Ali här. Ännu en ritning som blev på riktigt: Kolfiberskrivare. Semest"
- **SEN** dag 14 2:10: 23.5 s efter händelsen: notis:📔 Prestation: Städtokig · +3 respekt: "📔 Prestation: Städtokig · +3 respekt"
- **SEN** dag 14 2:17: 16.0 s efter händelsen: ali: "Ali här. Du printade Jetmotor med efterbrännare från min ritning. Och "
- **SEN** dag 16 6:02: 12.4 s efter händelsen: värld:Mjau.: "Mjau."
- **SEN** dag 16 8:57: 12.1 s efter händelsen: värld:TUUT TUUT!: "TUUT TUUT!"
- **SEN** dag 16 10:47: 14.6 s efter händelsen: värld:Mjau.: "Mjau."
- **SEN** dag 16 10:58: 17.4 s efter händelsen: värld:TUUT! Hej grannen!: "TUUT! Hej grannen!"
- **SEN** dag 16 11:17: 11.8 s efter händelsen: värld:Mjau.: "Mjau."
- **SEN** dag 17 2:30: 19.9 s efter händelsen: du: "En tand. Jag tänker inte fråga."
- **SEN** dag 17 2:43: 19.3 s efter händelsen: kjelle: "Inget nytt längs vägen i dag. Bara måsar. Hälsningar till Gunnar."
- **SEN** dag 17 13:52: 17.3 s efter händelsen: värld:Mjau.: "Mjau."
- **PAUS** dag 14 0:37: 0.0 s paus före "🚧 Gärdesgården har flyttats ut! Du får utforska n"
- **PAUS** dag 14 2:44: 0.0 s paus före "Göran snodde pall."
- **PAUS** dag 14 4:19: 0.0 s paus före "Leveranslåda + autoprint ligger i handen"
- **PAUS** dag 15 3:22: 0.0 s paus före "Göran har flyttat in. Han sitter på skylten nu."
- **PAUS** dag 16 0:00: 0.0 s paus före "🏆 KAPITEL 3 KLART! Fabriken sköter sig själv."
- **PAUS** dag 16 0:18: 0.0 s paus före "Skylten vid vägen är uppgraderad."
- **PAUS** dag 16 0:36: 0.0 s paus före "Göran lämnade tillbaka pall och resten. Och en bla"
- **UPPREPNING** dag 14 2:44: info:fel: "Göran snodde pall." (förra gången dag 12)
- **UPPREPNING** dag 16 11:06: info:guld: "Marken sjönk. Ett äldre lager kom fram." (förra gången dag 16)
- **TEMPO** dag 13 2:08: dag 13 tog 2.1 min (mål 10–15)
- **TEMPO** dag 14 4:57: dag 14 tog 5.0 min (mål 10–15)
- **TEMPO** dag 15 4:00: dag 15 tog 4.0 min (mål 10–15)
- **TEMPO** dag 17 18:42: dag 17 tog 18.7 min (mål 10–15)

Sidfel: inga

## Dag 12

| Tid | Källa | Vem | Text |
|---|---|---|---|
| 0:00 | MÅL |  | Printa och sälj |
| 0:00 | MÅL |  | Printa och sälj |
| 0:01 | sak | du | (nytt mål i rutan) |
| 0:01 | pil |  | Printa och sälj |
| 0:01 | klar | du | (nytt mål i rutan) |
| 0:21 | scenInfo | rolf | Rolf på kaffe |
| 0:21 | händelse | printStart | sak=kruka |
| 0:23 | skratt | du | kvarnen spottar |
| 0:23 | toast | guld | ✅ |
| 0:23 | händelse | printKlar | sak=kruka n=59 |
| 0:23 | händelse | tagitUrPrint | sak=kruka n=1 |
| 0:36 | webb | du | packade 1 kruka |
| 0:44 | skratt | du | falsk tuta |
| 0:51 | väntar | info:bra | 📦 Paketet till Gun-Britt i Nässjö ligger i postlådan – Rolf tar det till posten |
| 0:51 | sak | info:bra | 📦 Paketet till Gun-Britt i Nässjö ligger i postlådan – Rolf tar det till posten |
| 0:51 | kvitto-visas | info:bra | 📦 Paketet till Gun-Britt i Nässjö ligger i postlådan – Rolf tar det till posten |
| 0:51 | toast | bra | 📦 Paketet till Gun-Britt i Nässjö ligger i postlådan – Rolf tar det till posten |
| 0:53 | klar | info:bra | 📦 Paketet till Gun-Britt i Nässjö ligger i postlådan – Rolf tar det till posten |
| 0:58 | skratt | du | kvarnen rapar |
| 0:59 | skratt | du | däcket rullar iväg |
| 1:01 | toast | guld | 🧵 |
| 1:04 | händelse | printStart | sak=n2_hjalm |
| 1:06 | väntar | värld:TUUT! Hej grannen! | TUUT! Hej grannen! |
| 1:06 | sak | värld:TUUT! Hej grannen! | TUUT! Hej grannen! |
| 1:06 | bubbla |  | TUUT! Hej grannen! |
| 1:08 | toast | guld | ✅ |
| 1:08 | händelse | printKlar | sak=n2_hjalm n=3 |
| 1:09 | klar | värld:TUUT! Hej grannen! | TUUT! Hej grannen! |
| 1:09 | händelse | tagitUrPrint | sak=n2_hjalm n=1 |
| 1:09 | toast | guld | 🧵 |
| 1:14 | väntar | info:fel | Göran snodde pall. |
| 1:14 | sak | info:fel | Göran snodde pall. |
| 1:14 | kvitto-visas | info:fel | Göran snodde pall. |
| 1:14 | toast | fel | Göran snodde pall. |
| 1:16 | klar | info:fel | Göran snodde pall. |
| 1:16 | röst | ali | Pension? Glöm det. Jag har en kanal nu. Fyrtiotvå följare. Fyrtiotvå, habibi! · STORY |
| 1:16 | butiksbubbla | ali | Pension? Glöm det. Jag har en kanal nu. Fyrtiotvå följare. Fyrtiotvå, habibi! |
| 1:18 | aliSalt | ali | 1995 |
| 1:27 | händelse | printStart | sak=n2_hjalm |
| 1:32 | toast | guld | ✅ |
| 1:32 | händelse | printKlar | sak=n2_hjalm n=4 |
| 1:33 | händelse | tagitUrPrint | sak=n2_hjalm n=1 |
| 1:38 | väntar | ali | Tjugofem år bakom disken. Du är det roligaste som hänt. |
| 1:38 | sak | ali | Tjugofem år bakom disken. Du är det roligaste som hänt. |
| 1:38 | röst | ali | Tjugofem år bakom disken. Du är det roligaste som hänt. · SMÅPRAT |
| 1:39 | bubbla |  | Tjugofem år bakom disken. Du är det roligaste som hänt. |
| 1:41 | aliSalt | ali | 1895 |
| 1:42 | upplåst | skrivare | kolfskrivare |
| 1:42 | brott | UPPLÅST | kolfskrivare (skrivare 769 av 75) |
| 1:42 | händelse | upplast | id=kolfskrivare flask=skrivare |
| 1:42 | paket |  | tanke → sms |
| 1:42 | tanke | du | Kolfiberrullarna bara ligger där. Jag har ingen skrivare som tar dem. |
| 1:42 | väntar | du | Kolfiberrullarna bara ligger där. Jag har ingen skrivare som tar dem. |
| 1:42 | väntar | ali | Ali här. Kolfiberskrivaren. Den tar bara svartgrått. Den är kräsen, som min fru. |
| 1:43 | klar | ali | Tjugofem år bakom disken. Du är det roligaste som hänt. |
| 1:45 | väntar | bud | (tips) |
| 1:45 | väntar | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har TAPETER. Vi tar en låt på det. Den här är till dig, Gunnar. |
| 1:45 | radio | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har TAPETER. Vi tar en låt på det. Den här är till dig, Gunnar. |
| 1:45 | skratt | du | Radio-Kjelle |
| 1:45 | sak | bud | (tips) |
| 1:47 | klar | bud | (tips) |
| 1:49 | meddelande | mamma | Kommer du hem på jul? Pappa har redan köpt skinkan. I augusti. Den ligger i frysen och tittar på mig. |
| 1:50 | röst | mamma | Kommer du hem på jul? Pappa har redan köpt skinkan. I augusti. Den ligger i frysen och tittar på mig. · STORY |
| 2:02 | paket |  | sms |
| 2:02 | väntar | mamma | Det säger du nu. |
| 2:13 | händelse | brevLast | id=m_jul |
| 2:14 | sak | du | Kolfiberrullarna bara ligger där. Jag har ingen skrivare som tar dem. |
| 2:14 | notis | tanke | 💭 Kolfiberrullarna bara ligger där. Jag har ingen skrivare som tar dem. |
| 2:14 | röst | du | Kolfiberrullarna bara ligger där. Jag har ingen skrivare som tar dem. · STORY |
| 2:16 | händelse | printStart | sak=n2_hjalm |
| 2:20 | klar | du | Kolfiberrullarna bara ligger där. Jag har ingen skrivare som tar dem. |
| 2:21 | toast | guld | ✅ |
| 2:21 | händelse | printKlar | sak=n2_hjalm n=5 |
| 2:22 | händelse | tagitUrPrint | sak=n2_hjalm n=1 |
| 2:22 | struken | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har TAPETER. Vi tar en låt på det. Den här är till dig, Gunnar. |
| 2:28 | sak | ali | Ali här. Kolfiberskrivaren. Den tar bara svartgrått. Den är kräsen, som min fru. |
| 2:28 | sms | ali | Ali här. Kolfiberskrivaren. Den tar bara svartgrått. Den är kräsen, som min fru. |
| 2:28 | sms-bubbla | ali | Ali här. Kolfiberskrivaren. Den tar bara svartgrått. Den är kräsen, som min fru. |
| 2:28 | röst | ali | Ali här. Kolfiberskrivaren. Den tar bara svartgrått. Den är kräsen, som min fru. · STORY |
| 2:30 | aliSalt | ali | 1800 |
| 2:31 | väntar | mamma | Fick du burkarna? Honungen är från Gunnars bigårdar och lingonen plockade jag själv. Ät upp allt! |
| 2:35 | klar | ali | Ali här. Kolfiberskrivaren. Den tar bara svartgrått. Den är kräsen, som min fru. |
| 2:43 | skratt | du | kvarnen rapar |
| 2:44 | toast | guld | 🧵 |
| 2:49 | toast | guld | 🧵 |
| 2:49 | händelse | printStart | sak=n2_hjalm |
| 2:54 | toast | guld | ✅ |
| 2:54 | händelse | printKlar | sak=n2_hjalm n=6 |
| 2:55 | händelse | tagitUrPrint | sak=n2_hjalm n=1 |
| 3:03 | aliSalt | ali | 1710 |
| 3:12 | händelse | printStart | sak=n2_hjalm |
| 3:13 | sak | mamma | Det säger du nu. |
| 3:13 | sms | mamma | Det säger du nu. |
| 3:13 | sms-bubbla | mamma | Det säger du nu. |
| 3:13 | röst | mamma | Det säger du nu. · STORY |
| 3:16 | klar | mamma | Det säger du nu. |
| 3:16 | toast | guld | ✅ |
| 3:16 | händelse | printKlar | sak=n2_hjalm n=7 |
| 3:18 | händelse | tagitUrPrint | sak=n2_hjalm n=1 |
| 3:20 | händelse | printStart | sak=n2_hjalm |
| 3:21 | väntar | bud | (tips) |
| 3:21 | sak | bud | (tips) |
| 3:23 | klar | bud | (tips) |
| 3:24 | toast | guld | ✅ |
| 3:24 | händelse | printKlar | sak=n2_hjalm n=8 |
| 3:24 | skratt | du | falsk tuta |
| 3:24 | väntar | värld:TUUT! Tjena! | TUUT! Tjena! |
| 3:25 | sak | värld:TUUT! Tjena! | TUUT! Tjena! |
| 3:25 | bubbla |  | TUUT! Tjena! |
| 3:25 | händelse | tagitUrPrint | sak=n2_hjalm n=1 |
| 3:27 | händelse | printStart | sak=n2_hjalm |
| 3:27 | skratt | du | Kajsa i skrivaren |
| 3:28 | klar | värld:TUUT! Tjena! | TUUT! Tjena! |
| 3:30 | meddelande | mamma | Fick du burkarna? Honungen är från Gunnars bigårdar och lingonen plockade jag själv. Ät upp allt! |
| 3:31 | röst | mamma | Fick du burkarna? Honungen är från Gunnars bigårdar och lingonen plockade jag själv. Ät upp allt! · STORY |
| 3:43 | paket |  | sms |
| 3:43 | väntar | mamma | Bra! Pappa tar med fler på torsdag. Jag har 40 burkar kvar i källaren. |
| 3:54 | händelse | brevLast | id=m_burk1 |
| 3:56 | toast | guld | ✅ |
| 3:56 | händelse | printKlar | sak=n2_hjalm n=9 |
| 3:56 | händelse | tagitUrPrint | sak=n2_hjalm n=1 |
| 4:05 | aliSalt | ali | 1625 |
| 4:05 | aliSalt | ali | 1544 |
| 4:05 | aliSalt | ali | 1467 |
| 4:15 | väntar | värld:Mjau. | Mjau. |
| 4:15 | sak | värld:Mjau. | Mjau. |
| 4:15 | bubbla |  | Mjau. |
| 4:18 | klar | värld:Mjau. | Mjau. |
| 4:18 | skratt | du | kvarnen rapar |
| 4:23 | toast | guld | 🧵 |
| 4:27 | toast | guld | 🧵 |
| 4:27 | händelse | printStart | sak=n2_hjalm |
| 4:32 | toast | guld | ✅ |
| 4:32 | händelse | printKlar | sak=n2_hjalm n=10 |
| 4:32 | händelse | tagitUrPrint | sak=n2_hjalm n=1 |
| 4:41 | aliSalt | ali | 1397 |
| 4:49 | händelse | printStart | sak=n2_hjalm |
| 4:54 | toast | guld | ✅ |
| 4:54 | händelse | printKlar | sak=n2_hjalm n=11 |
| 4:54 | händelse | tagitUrPrint | sak=n2_hjalm n=1 |
| 4:56 | händelse | printStart | sak=n2_hjalm |
| 5:01 | toast | guld | ✅ |
| 5:01 | händelse | printKlar | sak=n2_hjalm n=12 |
| 5:01 | händelse | tagitUrPrint | sak=n2_hjalm n=1 |
| 5:09 | aliSalt | ali | 1397 |
| 5:10 | aliSalt | ali | 1397 |
| 5:12 | skratt | du | Alis dyr-pling |
| 5:12 | toast | guld | 3D-modell köpt – printa kolfiberskrivare på skrivaren |
| 5:12 | händelse | kopt | sak=kolfskrivare |
| 5:14 | väntar | rolf | Fick en kajak i lasset. Ingen paddel. Typiskt. Ja la den vid grinden åt dig. /R |
| 5:14 | morgonkort | ⏸️ Pausad | ⏸️ Pausad · Klicka för att fortsätta. |
| 5:35 | skratt | du | kvarnen rapar |
| 5:38 | toast | guld | 🧵 |
| 5:43 | toast | guld | 🧵 |
| 5:47 | toast | guld | 🧵 |
| 5:47 | händelse | printStart | sak=byggsats:kolfskrivare |
| 5:50 | toast | bra | Del 1 av 5 klar |
| 5:51 | väntar | värld:TUUT TUUT! | TUUT TUUT! |
| 5:51 | sak | värld:TUUT TUUT! | TUUT TUUT! |
| 5:51 | bubbla |  | TUUT TUUT! |
| 5:52 | toast | bra | Del 2 av 5 klar |
| 5:54 | väntar | mamma | Sover du ordentligt? Du ser trött ut. Jag vet att jag inte kan se dig. Men jag vet. |
| 5:54 | klar | värld:TUUT TUUT! | TUUT TUUT! |
| 5:55 | toast | bra | Del 3 av 5 klar |
| 5:56 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 6:02 | sak | mamma | Bra! Pappa tar med fler på torsdag. Jag har 40 burkar kvar i källaren. |
| 6:02 | sms | mamma | Bra! Pappa tar med fler på torsdag. Jag har 40 burkar kvar i källaren. |
| 6:02 | sms-bubbla | mamma | Bra! Pappa tar med fler på torsdag. Jag har 40 burkar kvar i källaren. |
| 6:02 | röst | mamma | Bra! Pappa tar med fler på torsdag. Jag har 40 burkar kvar i källaren. · STORY |
| 6:03 | skratt | du | kvarnen rapar |
| 6:06 | toast | bra | Del 4 av 5 klar |
| 6:08 | klar | mamma | Bra! Pappa tar med fler på torsdag. Jag har 40 burkar kvar i källaren. |
| 6:11 | händelse | printKlar | sak=byggsats:kolfskrivare n=1 |
| 6:11 | toast | guld | ✅ |
| 6:14 | händelse | tagitUrPrint | sak=byggsats:kolfskrivare n=1 |
| 6:14 | paket |  | sms |
| 6:14 | väntar | ali | Ali här. Ännu en ritning som blev på riktigt: Kolfiberskrivare. Semesterkassan växer. Livet växer. |
| 6:15 | toast | guld | 🧵 |
| 6:16 | händelse | placerat | sak=kolfskrivare |
| 6:16 | händelse | malKlart | id=kolfskrivare del=Dag 12 – Kolfiberskrivaren nasta=kolfslang |
| 6:16 | väntar | du | Rullarna ska fram till skrivaren utan mig. En slang. |
| 6:16 | målruta |  | Bygg slangfördelaren |
| 6:16 | MÅL |  | Bygg slangfördelaren |
| 6:18 | sak | du | Rullarna ska fram till skrivaren utan mig. En slang. |
| 6:18 | pil |  | Bygg slangfördelaren |
| 6:18 | notis | tanke | 💭 Rullarna ska fram till skrivaren utan mig. En slang. |
| 6:18 | röst | du | Rullarna ska fram till skrivaren utan mig. En slang. · MÅL |
| 6:18 | nick |  | nick:92 |
| 6:19 | tanke | du | Jag skulle kunna äta en sopsäck. Nästan. |
| 6:19 | väntar | du | Jag skulle kunna äta en sopsäck. Nästan. |
| 6:20 | kvittens-bock |  | ✓ Bygg kolfiberskrivaren i linje 3 |
| 6:22 | klar | du | Rullarna ska fram till skrivaren utan mig. En slang. |
| 6:26 | händelse | printStart | sak=n3_stol |
| 6:26 | toast | bra | 🔗 Slangen kopplad |
| 6:30 | sak | du | Jag skulle kunna äta en sopsäck. Nästan. |
| 6:30 | notis | tanke | 💭 Jag skulle kunna äta en sopsäck. Nästan. |
| 6:30 | röst | du | Jag skulle kunna äta en sopsäck. Nästan. · REAKTION |
| 6:32 | toast | guld | ✅ |
| 6:32 | händelse | printKlar | sak=n3_stol n=1 |
| 6:33 | händelse | tagitUrPrint | sak=n3_stol n=1 |
| 6:34 | klar | du | Jag skulle kunna äta en sopsäck. Nästan. |
| 6:35 | händelse | printStart | sak=n3_stol |
| 6:41 | toast | guld | ✅ |
| 6:41 | händelse | printKlar | sak=n3_stol n=2 |
| 6:42 | händelse | tagitUrPrint | sak=n3_stol n=1 |
| 6:47 | sak | ali | Ali här. Ännu en ritning som blev på riktigt: Kolfiberskrivare. Semesterkassan växer. Livet växer. |
| 6:47 | sms | ali | Ali här. Ännu en ritning som blev på riktigt: Kolfiberskrivare. Semesterkassan växer. Livet växer. |
| 6:47 | sms-bubbla | ali | Ali här. Ännu en ritning som blev på riktigt: Kolfiberskrivare. Semesterkassan växer. Livet växer. |
| 6:47 | röst | ali | Ali här. Ännu en ritning som blev på riktigt: Kolfiberskrivare. Semesterkassan växer. Livet växer. · REAKTION |
| 6:51 | aliSalt | ali | 16000 |
| 6:51 | aliSalt | ali | 15200 |
| 6:53 | skratt | du | Alis dyr-pling |
| 6:53 | toast | guld | 3D-modell köpt – printa slangfördelare på skrivaren |
| 6:53 | händelse | kopt | sak=kolfslang |
| 6:56 | klar | ali | Ali här. Ännu en ritning som blev på riktigt: Kolfiberskrivare. Semesterkassan växer. Livet växer. |
| 7:03 | händelse | printStart | sak=byggsats:kolfslang |
| 7:05 | toast | bra | Del 1 av 3 klar |
| 7:07 | toast | bra | Del 2 av 3 klar |
| 7:08 | händelse | printKlar | sak=byggsats:kolfslang n=1 |
| 7:08 | toast | guld | ✅ |
| 7:09 | händelse | tagitUrPrint | sak=byggsats:kolfslang n=1 |
| 7:10 | händelse | placerat | sak=kolfslang |
| 7:10 | väntar | info:guld | Slangfördelaren sitter – alla skrivare i linje 3 får kolfiber samtidigt |
| 7:10 | sak | info:guld | Slangfördelaren sitter – alla skrivare i linje 3 får kolfiber samtidigt |
| 7:10 | kvitto-visas | info:guld | Slangfördelaren sitter – alla skrivare i linje 3 får kolfiber samtidigt |
| 7:10 | toast | guld | Slangfördelaren sitter – alla skrivare i linje 3 får kolfiber samtidigt |
| 7:10 | händelse | malKlart | id=kolfslang del=Dag 12 – Kolfiberskrivaren nasta=kolfstol |
| 7:10 | händelse | malKlart | id=kolfstol del=Dag 12 – Kolfiberskrivaren nasta=f12-batteribank2 |
| 7:11 | MÅL |  | Printa och sälj |
| 7:12 | klar | info:guld | Slangfördelaren sitter – alla skrivare i linje 3 får kolfiber samtidigt |
| 7:12 | målruta |  | Printa och sälj |
| 7:14 | väntar | mamma | Sover du ordentligt? Du ser trött ut. Jag vet att jag inte kan se dig. Men jag vet. |
| 7:14 | kvittens-bock |  | ✓ Bygg slangfördelaren |
| 7:14 | kvittens-bock |  | ✓ Printa en kolfiberstol |
| 7:14 | sak | du | (nytt mål i rutan) |
| 7:14 | pil |  | Printa och sälj |
| 7:15 | klar | du | (nytt mål i rutan) |
| 7:18 | händelse | printStart | sak=n3_stol |
| 7:24 | skratt | du | falsk tuta |
| 7:25 | toast | guld | ✅ |
| 7:25 | händelse | printKlar | sak=n3_stol n=3 |
| 7:25 | händelse | tagitUrPrint | sak=n3_stol n=1 |
| 7:29 | väntar | info:info | Pappa kommer gående. Han bär på en kasse … |
| 7:29 | scenInfo | pappa | Pappa kommer |
| 7:29 | sak | info:info | Pappa kommer gående. Han bär på en kasse … |
| 7:29 | toast |  | Pappa kommer gående. Han bär på en kasse … |
| 7:31 | klar | info:info | Pappa kommer gående. Han bär på en kasse … |
| 7:35 | aliSalt | ali | 14440 |
| 7:44 | händelse | printStart | sak=n3_stol |
| 7:46 | väntar | värld:TUUT TUUT! | TUUT TUUT! |
| 7:46 | sak | värld:TUUT TUUT! | TUUT TUUT! |
| 7:46 | bubbla |  | TUUT TUUT! |
| 7:49 | klar | värld:TUUT TUUT! | TUUT TUUT! |
| 7:50 | toast | guld | ✅ |
| 7:50 | händelse | printKlar | sak=n3_stol n=4 |
| 7:51 | händelse | tagitUrPrint | sak=n3_stol n=1 |
| 8:00 | aliSalt | ali | 13718 |
| 8:10 | händelse | printStart | sak=n3_stol |
| 8:17 | toast | guld | ✅ |
| 8:17 | händelse | printKlar | sak=n3_stol n=5 |
| 8:17 | händelse | tagitUrPrint | sak=n3_stol n=1 |
| 8:19 | tanke | du | När åt jag senast? Det var nog i går. |
| 8:19 | väntar | du | När åt jag senast? Det var nog i går. |
| 8:19 | sak | du | När åt jag senast? Det var nog i går. |
| 8:19 | notis | tanke | 💭 När åt jag senast? Det var nog i går. |
| 8:19 | röst | du | När åt jag senast? Det var nog i går. · REAKTION |
| 8:22 | klar | du | När åt jag senast? Det var nog i går. |
| 8:26 | aliSalt | ali | 13032 |
| 8:36 | händelse | printStart | sak=n3_stol |
| 8:43 | toast | guld | ✅ |
| 8:43 | händelse | printKlar | sak=n3_stol n=6 |
| 8:43 | händelse | tagitUrPrint | sak=n3_stol n=1 |
| 8:52 | aliSalt | ali | 12380 |
| 9:02 | händelse | printStart | sak=n3_stol |
| 9:09 | toast | guld | ✅ |
| 9:09 | händelse | printKlar | sak=n3_stol n=7 |
| 9:09 | händelse | tagitUrPrint | sak=n3_stol n=1 |
| 9:18 | aliSalt | ali | 11761 |
| 9:41 | skratt | du | falsk tuta |
| 10:19 | tanke | du | Magen låter som kvarnen. |
| 10:19 | väntar | du | Magen låter som kvarnen. |
| 10:19 | sak | du | Magen låter som kvarnen. |
| 10:19 | notis | tanke | 💭 Magen låter som kvarnen. |
| 10:19 | röst | du | Magen låter som kvarnen. · REAKTION |
| 10:21 | klar | du | Magen låter som kvarnen. |
| 10:22 | upplåst | strom | bank2 |
| 10:22 | brott | RESERV | bank2 (strom 0 av 15) |
| 10:22 | händelse | upplast | id=bank2 flask=strom |
| 10:22 | paket |  | sms |
| 10:22 | väntar | ali | Ali här. En batteribank till. Kolfibret är hungrigt. Som min svåger. |
| 10:31 | sak | ali | Ali här. En batteribank till. Kolfibret är hungrigt. Som min svåger. |
| 10:31 | sms | ali | Ali här. En batteribank till. Kolfibret är hungrigt. Som min svåger. |
| 10:31 | sms-bubbla | ali | Ali här. En batteribank till. Kolfibret är hungrigt. Som min svåger. |
| 10:31 | röst | ali | Ali här. En batteribank till. Kolfibret är hungrigt. Som min svåger. · STORY |
| 10:37 | klar | ali | Ali här. En batteribank till. Kolfibret är hungrigt. Som min svåger. |
| 12:19 | poolTom | du | 4 repliker använda |
| 13:09 | skratt | du | falsk tuta |
| 13:14 | struken | mamma | Sover du ordentligt? Du ser trött ut. Jag vet att jag inte kan se dig. Men jag vet. |
| 13:30 | händelse | printStart | sak=n2_hjalm |
| 13:31 | väntar | värld:TUUT! Tjena! | TUUT! Tjena! |
| 13:31 | sak | värld:TUUT! Tjena! | TUUT! Tjena! |
| 13:31 | bubbla |  | TUUT! Tjena! |
| 13:34 | klar | värld:TUUT! Tjena! | TUUT! Tjena! |
| 13:34 | toast | guld | ✅ |
| 13:34 | händelse | printKlar | sak=n2_hjalm n=13 |
| 13:35 | händelse | tagitUrPrint | sak=n2_hjalm n=1 |
| 13:43 | aliSalt | ali | 1397 |
| 13:46 | skratt | du | Alis dyr-pling |
| 13:46 | toast | guld | 3D-modell köpt – printa batteribank på skrivaren |
| 13:46 | händelse | kopt | sak=bank |
| 13:54 | händelse | printStart | sak=byggsats:bank |
| 13:56 | toast | bra | Del 1 av 2 klar |
| 13:58 | händelse | printKlar | sak=byggsats:bank n=1 |
| 13:58 | toast | guld | ✅ |
| 13:58 | händelse | tagitUrPrint | sak=byggsats:bank n=1 |
| 14:05 | händelse | placerat | sak=bank |
| 14:05 | händelse | malKlart | id=f12-batteribank2 del=Dag 12 – Kolfiberskrivaren nasta=sov12 |
| 14:05 | paket |  | lapp |
| 14:05 | lapp | 📔 Dagbok | Dag 12 är slut. Allt säljs bara när jag är vaken. |
| 14:05 | meddelande | du | Dag 12 är slut. Allt säljs bara när jag är vaken. |
| 14:05 | dagbokkort | du | Dag 12 är slut. Allt säljs bara när jag är vaken. |
| 14:05 | målruta |  | Klart för idag – sov när du vill |
| 14:05 | MÅL |  | Klart för idag – sov när du vill |
| 14:05 | röst | du | Dag 12 är slut. Allt säljs bara när jag är vaken. · STORY |
| 14:12 | händelse | brevLast | id=kvall12 |
| 14:12 | väntar | notis:🌇 Klockan är 21. Ali slår igen luckan.  | 🌇 Klockan är 21. Ali slår igen luckan. Dagens jobb är klart – gå in i skjulet och sov i sängen. |
| 14:14 | sak | du | (nytt mål i rutan) |
| 14:14 | pil |  | Klart för idag – sov när du vill |
| 14:14 | klar | du | (nytt mål i rutan) |
| 14:17 | sak | notis:🌇 Klockan är 21. Ali slår igen luckan.  | 🌇 Klockan är 21. Ali slår igen luckan. Dagens jobb är klart – gå in i skjulet och sov i sängen. |
| 14:17 | notis | guld | 🌇 Klockan är 21. Ali slår igen luckan. Dagens jobb är klart – gå in i skjulet och sov i sängen. |
| 14:19 | poolTom | du | 4 repliker använda |
| 14:20 | klar | notis:🌇 Klockan är 21. Ali slår igen luckan.  | 🌇 Klockan är 21. Ali slår igen luckan. Dagens jobb är klart – gå in i skjulet och sov i sängen. |
| 14:23 | webbBetalt | du | 100 |

<details><summary>Botens handlingar dag 12</summary>

- 0:09 gå till Rolfs postlåda (29 m) (9687 kr)
- 0:17 panel: "En lapp från Rolf
Lite olaglig" (9687 kr)
- 0:19 gå till skrivaren (10 m) (9687 kr)
- 0:21 printar Blomkruka (9687 kr)
- 0:23 tar ut 1 st ur skrivaren (9687 kr)
- 0:27 gå till datorn (19 m) (9687 kr)
- 0:36 panel: "Webbshopen · Soptippsvägen 1
B" (9687 kr)
- 0:45 panel: "Webbshopen · Soptippsvägen 1
B" (9687 kr)
- 0:51 gå till Rolfs postlåda (paket) (29 m) (9687 kr)
- 0:51 webbshop: 1 paket i postlådan (9687 kr)
- 0:51 tjänar pengar till väntar på flaskhalsen för kolfskrivare: 9687/9727 kr → printar cykelhjälm i petg (1995 kr) (9687 kr)
- 0:53 gå till en tunna (10 m) (9687 kr)
- 0:58 gå till PETG-kvarnen (16 m) (9687 kr)
- 0:58 tömmer det tunga i PETG-kvarnen (9687 kr)
- 1:02 gå till skrivaren (3 m) (9687 kr)
- 1:04 printar Cykelhjälm i PETG (9687 kr)
- 1:10 tar ut 1 st ur skrivaren (9687 kr)
- 1:16 gå till Ali (31 m) (9687 kr)
- 1:16 öppnar Alis butik – sälja (9687 kr)
- 1:18 säljer hos Ali: +1995 kr (11682 kr)
- 1:20 tjänar pengar till väntar på flaskhalsen för kolfskrivare: 11682/11722 kr → printar cykelhjälm i petg (1895 kr) (11682 kr)
- 1:26 gå till skrivaren (29 m) (11682 kr)
- 1:27 printar Cykelhjälm i PETG (11682 kr)
- 1:34 tar ut 1 st ur skrivaren (11682 kr)
- 1:40 gå till Ali (29 m) (11682 kr)
- 1:40 öppnar Alis butik – sälja (11682 kr)
- 1:41 säljer hos Ali: +1895 kr (13577 kr)
- 1:45 tjänar pengar till kolfiberskrivare: 13577/25000 kr → printar cykelhjälm i petg (1800 kr) (13577 kr)
- 2:02 popup: "Nej. Jag firar här." (13577 kr)
- 2:13 popup: "Läst" (13577 kr)
- 2:15 gå till skrivaren (29 m) (13577 kr)
- 2:16 printar Cykelhjälm i PETG (13577 kr)
- 2:22 tar ut 1 st ur skrivaren (13577 kr)
- 2:28 gå till Ali (29 m) (13577 kr)
- 2:28 öppnar Alis butik – sälja (13577 kr)
- 2:30 säljer hos Ali: +1800 kr (15377 kr)
- 2:31 tjänar pengar till kolfiberskrivare: 15377/25000 kr → printar cykelhjälm i petg (1710 kr) (15377 kr)
- 2:39 gå till en tunna (37 m) (15377 kr)
- 2:43 gå till PETG-kvarnen (14 m) (15377 kr)
- 2:43 tömmer det tunga i PETG-kvarnen (15377 kr)
- 2:48 gå till skrivaren (3 m) (15377 kr)
- 2:49 printar Cykelhjälm i PETG (15377 kr)
- 2:55 tar ut 1 st ur skrivaren (15377 kr)
- 3:02 gå till Ali (31 m) (15377 kr)
- 3:02 öppnar Alis butik – sälja (15377 kr)
- 3:03 säljer hos Ali: +1710 kr (17087 kr)
- 3:04 tjänar pengar till kolfiberskrivare: 17087/25000 kr → printar cykelhjälm i petg (1625 kr) (17087 kr)
- 3:10 gå till skrivaren (29 m) (17087 kr)
- 3:12 printar Cykelhjälm i PETG (17087 kr)
- 3:18 tar ut 1 st ur skrivaren (17087 kr)
- 3:20 printar Cykelhjälm i PETG (17087 kr)
- 3:26 tar ut 1 st ur skrivaren (17087 kr)
- 3:27 printar Cykelhjälm i PETG (17087 kr)
- 3:43 popup: "Tack mamma ❤️" (17087 kr)
- 3:54 popup: "Läst" (17087 kr)
- 3:57 tar ut 1 st ur skrivaren (17087 kr)
- 4:03 gå till Ali (29 m) (17087 kr)
- 4:03 öppnar Alis butik – sälja (17087 kr)
- 4:05 säljer hos Ali: +4636 kr (21723 kr)
- 4:06 tjänar pengar till kolfiberskrivare: 21723/25000 kr → printar cykelhjälm i petg (1397 kr) (21723 kr)
- 4:14 gå till en tunna (38 m) (21723 kr)
- 4:18 gå till PETG-kvarnen (12 m) (21723 kr)
- 4:18 tömmer det tunga i PETG-kvarnen (21723 kr)
- 4:26 gå till skrivaren (3 m) (21723 kr)
- 4:27 printar Cykelhjälm i PETG (21723 kr)
- 4:33 tar ut 1 st ur skrivaren (21723 kr)
- 4:39 gå till Ali (31 m) (21723 kr)
- 4:39 öppnar Alis butik – sälja (21723 kr)
- 4:41 säljer hos Ali: +1397 kr (23120 kr)
- 4:42 tjänar pengar till kolfiberskrivare: 23120/25000 kr → printar cykelhjälm i petg (1397 kr) (23120 kr)
- 4:48 gå till skrivaren (29 m) (23120 kr)
- 4:49 printar Cykelhjälm i PETG (23120 kr)
- 4:55 tar ut 1 st ur skrivaren (23120 kr)
- 4:56 printar Cykelhjälm i PETG (23120 kr)
- 5:02 tar ut 1 st ur skrivaren (23120 kr)
- 5:08 gå till Ali (29 m) (23120 kr)
- 5:08 öppnar Alis butik – sälja (23120 kr)
- 5:10 säljer hos Ali: +2794 kr (25914 kr)
- 5:11 öppnar Alis butik – köpa kolfiberskrivare (25914 kr)
- 5:13 köper kolfskrivare för 25000 kr (914 kr)
- 5:22 kort: "FORTSÄTTeller tryck Esc" (914 kr)
- 5:30 gå till en tunna (41 m) (914 kr)
- 5:35 gå till PETG-kvarnen (18 m) (914 kr)
- 5:35 tömmer det tunga i PETG-kvarnen (914 kr)
- 5:46 gå till skrivaren (3 m) (914 kr)
- 5:47 printar Kolfiberskrivare (5 delar) (914 kr)
- 5:59 gå till en tunna (14 m) (914 kr)
- 6:03 gå till PETG-kvarnen (11 m) (914 kr)
- 6:03 tömmer det tunga i PETG-kvarnen (914 kr)
- 6:14 gå till skrivaren (4 m) (914 kr)
- 6:14 tar ut 1 st ur skrivaren (914 kr)
- 6:15 gå till platsen för kolfiberskrivare (5 m) (914 kr)
- 6:16 ställer ut kolfiberskrivare (914 kr)
- 6:24 tjänar pengar till slangfördelare: 914/27500 kr → printar kolfiberstol (16000 kr) (914 kr)
- 6:26 printar Kolfiberstol (914 kr)
- 6:33 tar ut 1 st ur skrivaren (914 kr)
- 6:35 printar Kolfiberstol (914 kr)
- 6:42 tar ut 1 st ur skrivaren (914 kr)
- 6:49 gå till Ali (33 m) (914 kr)
- 6:49 öppnar Alis butik – sälja (914 kr)
- 6:51 säljer hos Ali: +31200 kr (32114 kr)
- 6:52 öppnar Alis butik – köpa slangfördelare (32114 kr)
- 6:54 köper kolfslang för 27500 kr (4614 kr)
- 7:02 gå till skrivaren (33 m) (4614 kr)
- 7:03 printar Slangfördelare (3 delar) (4614 kr)
- 7:10 tar ut 1 st ur skrivaren (4614 kr)
- 7:10 gå till kolfiberkvarnen (3 m) (4614 kr)
- 7:17 tjänar pengar till väntar på flaskhalsen för bank2: 4614/4654 kr → printar kolfiberstol (14440 kr) (4614 kr)
- 7:17 gå till skrivaren (1 m) (4614 kr)
- 7:18 printar Kolfiberstol (4614 kr)
- 7:26 tar ut 1 st ur skrivaren (4614 kr)
- 7:33 gå till Ali (35 m) (4614 kr)
- 7:33 öppnar Alis butik – sälja (4614 kr)
- 7:35 säljer hos Ali: +14440 kr (19054 kr)
- 7:36 tjänar pengar till väntar på flaskhalsen för bank2: 19054/19094 kr → printar kolfiberstol (13718 kr) (19054 kr)
- 7:42 gå till skrivaren (33 m) (19054 kr)
- 7:44 printar Kolfiberstol (19054 kr)
- 7:51 tar ut 1 st ur skrivaren (19054 kr)
- 7:58 gå till Ali (33 m) (19054 kr)
- 7:58 öppnar Alis butik – sälja (19054 kr)
- 8:00 säljer hos Ali: +13718 kr (32772 kr)
- 8:02 tjänar pengar till väntar på flaskhalsen för bank2: 32772/32812 kr → printar kolfiberstol (13032 kr) (32772 kr)
- 8:08 gå till skrivaren (33 m) (32772 kr)
- 8:10 printar Kolfiberstol (32772 kr)
- 8:17 tar ut 1 st ur skrivaren (32772 kr)
- 8:24 gå till Ali (33 m) (32772 kr)
- 8:24 öppnar Alis butik – sälja (32772 kr)
- 8:26 säljer hos Ali: +13032 kr (45804 kr)
- 8:28 tjänar pengar till väntar på flaskhalsen för bank2: 45804/45844 kr → printar kolfiberstol (12380 kr) (45804 kr)
- 8:35 gå till skrivaren (33 m) (45804 kr)
- 8:36 printar Kolfiberstol (45804 kr)
- 8:44 tar ut 1 st ur skrivaren (45804 kr)
- 8:50 gå till Ali (33 m) (45804 kr)
- 8:50 öppnar Alis butik – sälja (45804 kr)
- 8:52 säljer hos Ali: +12380 kr (58184 kr)
- 8:54 tjänar pengar till väntar på flaskhalsen för bank2: 58184/58224 kr → printar kolfiberstol (11761 kr) (58184 kr)
- 9:01 gå till skrivaren (33 m) (58184 kr)
- 9:02 printar Kolfiberstol (58184 kr)
- 9:10 tar ut 1 st ur skrivaren (58184 kr)
- 9:16 gå till Ali (33 m) (58184 kr)
- 9:16 öppnar Alis butik – sälja (58184 kr)
- 9:18 säljer hos Ali: +11761 kr (69945 kr)
- 9:20 tjänar pengar till väntar på flaskhalsen för bank2: 69945/69985 kr → printar kolfiberstol (11200 kr) (69945 kr)
- 9:20 väntar på kolfiber från bandet (69945 kr)
- 9:28 väntar på kolfiber från bandet (69945 kr)
- 9:36 väntar på kolfiber från bandet (69945 kr)
- 9:44 väntar på kolfiber från bandet (69945 kr)
- 9:52 väntar på kolfiber från bandet (69945 kr)
- 10:00 väntar på kolfiber från bandet (69945 kr)
- 10:08 väntar på kolfiber från bandet (69945 kr)
- 10:16 väntar på kolfiber från bandet (69945 kr)
- 10:24 väntar på kolfiber från bandet (69945 kr)
- 10:32 väntar på kolfiber från bandet (69945 kr)
- 10:40 väntar på kolfiber från bandet (69945 kr)
- 10:48 väntar på kolfiber från bandet (69945 kr)
- 10:56 väntar på kolfiber från bandet (69945 kr)
- 11:04 väntar på kolfiber från bandet (69945 kr)
- 11:12 väntar på kolfiber från bandet (69945 kr)
- 11:20 väntar på kolfiber från bandet (69945 kr)
- 11:28 väntar på kolfiber från bandet (69945 kr)
- 11:36 väntar på kolfiber från bandet (69945 kr)
- 11:44 väntar på kolfiber från bandet (69945 kr)
- 11:52 väntar på kolfiber från bandet (69945 kr)
- 12:00 väntar på kolfiber från bandet (69945 kr)
- 12:08 väntar på kolfiber från bandet (69945 kr)
- 12:16 väntar på kolfiber från bandet (69945 kr)
- 12:24 väntar på kolfiber från bandet (69945 kr)
- 12:32 väntar på kolfiber från bandet (69945 kr)
- 12:40 väntar på kolfiber från bandet (69945 kr)
- 12:48 väntar på kolfiber från bandet (69945 kr)
- 12:56 väntar på kolfiber från bandet (69945 kr)
- 13:04 väntar på kolfiber från bandet (69945 kr)
- 13:12 väntar på kolfiber från bandet (69945 kr)
- 13:20 väntar på kolfiber från bandet (69945 kr)
- 13:20 kolfiberstol gick inte att printa – tar nästa (69945 kr)
- 13:20 öppnar Alis butik – sälja (69945 kr)
- 13:22 tjänar pengar till väntar på flaskhalsen för bank2: 69945/69985 kr → printar cykelhjälm i petg (1397 kr) (69945 kr)
- 13:28 gå till skrivaren (29 m) (69945 kr)
- 13:30 printar Cykelhjälm i PETG (69945 kr)
- 13:35 tar ut 1 st ur skrivaren (69945 kr)
- 13:41 gå till Ali (29 m) (69945 kr)
- 13:41 öppnar Alis butik – sälja (69945 kr)
- 13:43 säljer hos Ali: +1397 kr (71342 kr)
- 13:45 öppnar Alis butik – köpa batteribank (71342 kr)
- 13:47 köper bank för 1600 kr (69742 kr)
- 13:53 gå till skrivaren (23 m) (69742 kr)
- 13:54 printar Batteribank (2 delar) (69742 kr)
- 13:59 tar ut 1 st ur skrivaren (69742 kr)
- 14:04 gå till platsen för batteribank (26 m) (69742 kr)
- 14:05 ställer ut batteribank (69742 kr)
- 14:12 popup: "FORTSÄTT" (69742 kr)
- 14:20 gå till sängen (21 m) (69742 kr)

</details>

## Dag 13

| Tid | Källa | Vem | Text |
|---|---|---|---|
| 14:23 | vara | ali | n2_vas |
| 14:23 | händelse | malKlart | id=sov12 del=Dag 12 – Kolfiberskrivaren nasta=f13-bygg-gamingboden |
| 14:23 | MÅL |  | Bygg gamingboden |
| 0:01 | händelse | dagenBorjar | dag=13 |
| 0:01 | meddelande | du | Dag 13. 9 dagar till jul. Utan ett eget rum är det bara ett skjul. |
| 0:01 | dagbokkort | du | Gamingboden · Dag 13. 9 dagar till jul. Utan ett eget rum är det bara ett skjul. |
| 0:01 | röst | du | Gamingboden. Dag 13. 9 dagar till jul. Utan ett eget rum är det bara ett skjul. · STORY |
| 0:16 | händelse | morgonkortStangt | dag=13 |
| 0:16 | paket |  | sms |
| 0:16 | väntar | ali | Ali här. 🔥 TURBOMOTOR. Jag skrev ”turbo, röda ränder, snabbare än min pappa” till AI:n. Den förstod. Ingen annan förstår. Röda ränder. För farten. Det är vetenskap. |
| 0:16 | struken | kedja | d13 |
| 0:16 | väntar | du | En bod för spel. Jag förtjänar det. |
| 0:16 | målruta |  | Bygg gamingboden |
| 0:21 | röst | ali | Jag har sålt min första egna ritning. Till en man i Örebro. Han skrev bra lampa. Jag har ramat in mejlet. · STORY |
| 0:21 | butiksbubbla | ali | Jag har sålt min första egna ritning. Till en man i Örebro. Han skrev bra lampa. Jag har ramat in mejlet. |
| 0:22 | skratt | du | Alis dyr-pling |
| 0:22 | toast | guld | 3D-modell köpt – printa gamingbod (tillbyggnad) på skrivaren |
| 0:22 | händelse | kopt | sak=gamingbod |
| 0:25 | sak | du | En bod för spel. Jag förtjänar det. |
| 0:25 | pil |  | Bygg gamingboden |
| 0:25 | notis | tanke | 💭 En bod för spel. Jag förtjänar det. |
| 0:25 | röst | du | En bod för spel. Jag förtjänar det. · MÅL |
| 0:26 | nick |  | nick:96 |
| 0:28 | klar | du | En bod för spel. Jag förtjänar det. |
| 0:30 | händelse | printStart | sak=byggsats:gamingbod |
| 0:33 | toast | bra | Del 1 av 6 klar |
| 0:37 | toast | bra | Del 2 av 6 klar |
| 0:40 | toast | bra | Del 3 av 6 klar |
| 0:43 | toast | bra | Del 4 av 6 klar |
| 0:47 | toast | bra | Del 5 av 6 klar |
| 0:50 | händelse | printKlar | sak=byggsats:gamingbod n=1 |
| 0:50 | toast | guld | ✅ |
| 0:51 | händelse | tagitUrPrint | sak=byggsats:gamingbod n=1 |
| 0:54 | väntar | info:guld | Gamingboden står klar! Det är ett tomt skal – inred den, flytta in grejerna och bygg ut den. |
| 0:54 | sak | info:guld | Gamingboden står klar! Det är ett tomt skal – inred den, flytta in grejerna och bygg ut den. |
| 0:54 | kvitto-visas | info:guld | Gamingboden står klar! Det är ett tomt skal – inred den, flytta in grejerna och bygg ut den. |
| 0:54 | toast | guld | Gamingboden står klar! Det är ett tomt skal – inred den, flytta in grejerna och bygg ut den. |
| 0:54 | händelse | malKlart | id=f13-bygg-gamingboden del=Dag 13 – Gamingboden nasta=f13-stall-in-gamersak |
| 0:54 | väntar | du | Boden är tom. Något att spela på. |
| 0:54 | MÅL |  | Ställ in en gamersak i boden |
| 0:56 | klar | info:guld | Gamingboden står klar! Det är ett tomt skal – inred den, flytta in grejerna och bygg ut den. |
| 0:56 | målruta |  | Ställ in en gamersak i boden |
| 0:58 | kvittens-bock |  | ✓ Bygg gamingboden |
| 0:58 | sak | du | Boden är tom. Något att spela på. |
| 0:58 | pil |  | Ställ in en gamersak i boden |
| 0:58 | notis | tanke | 💭 Boden är tom. Något att spela på. |
| 0:58 | röst | du | Boden är tom. Något att spela på. · MÅL |
| 0:59 | nick |  | nick:97 |
| 1:01 | klar | du | Boden är tom. Något att spela på. |
| 1:13 | väntar | foto | Boden |
| 1:13 | paket |  | tanke |
| 1:13 | tanke | du | Min egen bod. Här är det ingen som tjatar. |
| 1:13 | väntar | du | Min egen bod. Här är det ingen som tjatar. |
| 1:13 | sak | foto | Boden |
| 1:13 | foto | du | Boden |
| 1:16 | klar | foto | Boden |
| 1:16 | händelse | printStart | sak=kyl |
| 1:21 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 1:21 | väntar | notis:Skrivare L: Tornet är tomt – mal mer så  | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 1:22 | skratt | du | falsk tuta |
| 1:22 | väntar | värld:TUUT! Tjena! | TUUT! Tjena! |
| 1:32 | sak | du | Min egen bod. Här är det ingen som tjatar. |
| 1:32 | notis | tanke | 💭 Min egen bod. Här är det ingen som tjatar. |
| 1:32 | röst | du | Min egen bod. Här är det ingen som tjatar. · STORY |
| 1:33 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 1:33 | struken | notis | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 1:34 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 1:34 | struken | notis | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 1:35 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 1:35 | struken | notis | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 1:36 | klar | du | Min egen bod. Här är det ingen som tjatar. |
| 1:37 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 1:37 | struken | notis | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 1:38 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 1:38 | struken | notis | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 1:40 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 1:40 | struken | notis | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 1:41 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 1:42 | struken | värld:TUUT! Tjena! | TUUT! Tjena! |
| 1:42 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 1:43 | toast | guld | ✅ |
| 1:43 | händelse | printKlar | sak=kyl n=1 |
| 1:44 | sak | notis:Skrivare L: Tornet är tomt – mal mer så  | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 1:44 | notis | fel | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 1:47 | klar | notis:Skrivare L: Tornet är tomt – mal mer så  | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 1:47 | väntar | notis:📔 Prestation: Städtokig · +3 respekt | 📔 Prestation: Städtokig · +3 respekt |
| 1:50 | händelse | tagitUrPrint | sak=kyl n=1 |
| 1:54 | poolTom | du | 4 repliker använda |
| 1:56 | händelse | placerat | sak=kyl |
| 1:56 | händelse | malKlart | id=f13-stall-in-gamersak del=Dag 13 – Gamingboden nasta=sov13 |
| 1:56 | paket |  | lapp |
| 1:56 | lapp | 📔 Dagbok | Dag 13 är slut. Kvarnen är för långsam. |
| 1:56 | meddelande | du | Dag 13 är slut. Kvarnen är för långsam. |
| 1:56 | dagbokkort | du | Dag 13 är slut. Kvarnen är för långsam. |
| 1:56 | målruta |  | Klart för idag – sov när du vill |
| 1:56 | MÅL |  | Klart för idag – sov när du vill |
| 1:56 | röst | du | Dag 13 är slut. Kvarnen är för långsam. · STORY |
| 2:02 | händelse | brevLast | id=kvall13 |
| 2:03 | väntar | notis:🌇 Klockan är 21. Ali slår igen luckan.  | 🌇 Klockan är 21. Ali slår igen luckan. Dagens jobb är klart – gå in i skjulet och sov i sängen. |
| 2:04 | sak | du | (nytt mål i rutan) |
| 2:04 | pil |  | Klart för idag – sov när du vill |
| 2:04 | klar | du | (nytt mål i rutan) |

<details><summary>Botens handlingar dag 13</summary>

- 0:00 — dag 13 börjar — (69842 kr)
- 0:15 popup: "FORTSÄTT" (69842 kr)
- 0:21 gå till Ali (22 m) (69842 kr)
- 0:21 öppnar Alis butik – köpa gamingbod (tillbyggnad) (69842 kr)
- 0:23 köper gamingbod för 41000 kr (28842 kr)
- 0:28 gå till skrivaren (23 m) (28842 kr)
- 0:30 printar Gamingbod (tillbyggnad) (6 delar) (28842 kr)
- 0:51 tar ut 1 st ur skrivaren (28842 kr)
- 0:54 gå till platsen vänster om skjulet (14 m) (28842 kr)
- 0:54 bygger gamingboden (28842 kr)
- 1:07 gå till Ali (19 m) (28842 kr)
- 1:07 öppnar Alis butik – köpa receptet minikylskåp (28842 kr)
- 1:09 Ali har inte kyl (28842 kr)
- 1:14 gå till skrivaren (23 m) (28842 kr)
- 1:16 printar Minikylskåp (28842 kr)
- 1:32 gå till kvarnen (29 m) (28842 kr)
- 1:38 plockar 3 skräp på tippen (bär max 16) (28842 kr)
- 1:41 gå till kvarnen (14 m) (28842 kr)
- 1:50 gå till skrivaren (7 m) (28842 kr)
- 1:50 tar ut 1 st ur skrivaren (28842 kr)
- 1:55 gå till platsen för minikylskåp (22 m) (28842 kr)
- 1:56 ställer ut minikylskåp (28842 kr)
- 2:02 popup: "FORTSÄTT" (28842 kr)
- 2:08 gå till sängen (9 m) (28842 kr)

</details>

## Dag 14

| Tid | Källa | Vem | Text |
|---|---|---|---|
| 2:10 | vara | ali | n2_hjalm |
| 2:10 | sak | notis:📔 Prestation: Städtokig · +3 respekt | 📔 Prestation: Städtokig · +3 respekt |
| 2:10 | notis |  | 📔 Prestation: Städtokig · +3 respekt |
| 2:10 | händelse | malKlart | id=sov13 del=Dag 13 – Gamingboden nasta=jet14 |
| 2:11 | MÅL |  | Montera jetmotorn på kolfiberkvarnen |
| 0:01 | klar | notis:📔 Prestation: Städtokig · +3 respekt | 📔 Prestation: Städtokig · +3 respekt |
| 0:01 | händelse | dagenBorjar | dag=14 |
| 0:01 | meddelande | du | Dag 14. 8 dagar till jul. Går kvarnen så här långsamt hinner jag inte till jul. |
| 0:01 | dagbokkort | du | Jetmotorn · Dag 14. 8 dagar till jul. Går kvarnen så här långsamt hinner jag inte till jul. |
| 0:01 | röst | du | Jetmotorn. Dag 14. 8 dagar till jul. Går kvarnen så här långsamt hinner jag inte till jul. · STORY |
| 0:15 | händelse | morgonkortStangt | dag=14 |
| 0:15 | struken | kedja | d14 |
| 0:15 | väntar | du | Jetmotorn ska sitta på kolfiberkvarnen. Vad kan gå fel. |
| 0:15 | målruta |  | Montera jetmotorn på kolfiberkvarnen |
| 0:18 | väntar | mamma | Paketet kom tillbaka. Det står "Okänd mottagare". Är du ens skriven där? Vart ska jag skicka din post? |
| 0:18 | paket |  | lapp → toast |
| 0:18 | lapp | 📔 Dagbok | Dag 14. Mammas paket kom tillbaka: "Okänd mottagare". Jag bor ju här. Det här är mitt hem nu. Men på pappret finns jag inte här. Jag måste bli folkbokförd – och då måste jag äga tomten jag bor på och ha ett riktigt hus. |
| 0:18 | meddelande | du | Dag 14. Mammas paket kom tillbaka: "Okänd mottagare". Jag bor ju här. Det här är mitt hem nu. Men på pappret finns jag inte här. Jag måste bli folkbokförd – och då måste jag äga tomten jag bor på och ha ett riktigt hus. |
| 0:18 | dagbokkort | du | Dag 14. Mammas paket kom tillbaka: "Okänd mottagare". Jag bor ju här. Det här är mitt hem nu. Men på pappret finns jag inte här. Jag måste bli folkbokförd – och då måste jag äga tomten jag bor på och ha ett riktigt hus. |
| 0:18 | väntar | notis:💡 Poletten trillar ner: du bor faktiskt | 💡 Poletten trillar ner: du bor faktiskt här. Nytt mål: bli folkbokförd (tavlan vid vägen). |
| 0:18 | röst | du | Dag 14. Mammas paket kom tillbaka: "Okänd mottagare". Jag bor ju här. Det här är mitt hem nu. Men på pappret finns jag inte här. Jag måste bli folkbokförd – och då måste jag äga tomten jag bor på och ha ett riktigt hus. · STORY |
| 0:32 | händelse | brevLast | id=polett |
| 0:33 | väntar | info:guld | 🚧 Gärdesgården har flyttats ut! Du får utforska ny mark – men bara ställa saker på mark du äger. |
| 0:33 | sak | du | Jetmotorn ska sitta på kolfiberkvarnen. Vad kan gå fel. |
| 0:33 | pil |  | Montera jetmotorn på kolfiberkvarnen |
| 0:33 | notis | tanke | 💭 Jetmotorn ska sitta på kolfiberkvarnen. Vad kan gå fel. |
| 0:33 | röst | du | Jetmotorn ska sitta på kolfiberkvarnen. Vad kan gå fel. · MÅL |
| 0:33 | nick |  | nick:99 |
| 0:37 | klar | du | Jetmotorn ska sitta på kolfiberkvarnen. Vad kan gå fel. |
| 0:37 | sak | info:guld | 🚧 Gärdesgården har flyttats ut! Du får utforska ny mark – men bara ställa saker på mark du äger. |
| 0:37 | kvitto-visas | info:guld | 🚧 Gärdesgården har flyttats ut! Du får utforska ny mark – men bara ställa saker på mark du äger. |
| 0:37 | toast | guld | 🚧 Gärdesgården har flyttats ut! Du får utforska ny mark – men bara ställa saker på mark du äger. |
| 0:39 | klar | info:guld | 🚧 Gärdesgården har flyttats ut! Du får utforska ny mark – men bara ställa saker på mark du äger. |
| 0:41 | struken | notis:🌇 Klockan är 21. Ali slår igen luckan.  | 🌇 Klockan är 21. Ali slår igen luckan. Dagens jobb är klart – gå in i skjulet och sov i sängen. |
| 0:44 | röst | ali | Jag ska lära ut AI på pensionärsföreningen. Tisdagar. De är rädda. Jag var också rädd. · STORY |
| 0:44 | butiksbubbla | ali | Jag ska lära ut AI på pensionärsföreningen. Tisdagar. De är rädda. Jag var också rädd. |
| 0:46 | skratt | du | Alis dyr-pling |
| 0:46 | toast | guld | 3D-modell köpt – printa jetmotor med efterbrännare på skrivaren |
| 0:46 | händelse | kopt | sak=jetmotor |
| 0:56 | händelse | printStart | sak=byggsats:jetmotor |
| 0:58 | toast | bra | Del 1 av 4 klar |
| 0:59 | sak | mamma | Paketet kom tillbaka. Det står "Okänd mottagare". Är du ens skriven där? Vart ska jag skicka din post? |
| 0:59 | sms | mamma | Paketet kom tillbaka. Det står "Okänd mottagare". Är du ens skriven där? Vart ska jag skicka din post? |
| 0:59 | sms-bubbla | mamma | Paketet kom tillbaka. Det står "Okänd mottagare". Är du ens skriven där? Vart ska jag skicka din post? |
| 0:59 | röst | mamma | Paketet kom tillbaka. Det står "Okänd mottagare". Är du ens skriven där? Vart ska jag skicka din post? · STORY |
| 1:00 | toast | bra | Del 2 av 4 klar |
| 1:02 | toast | bra | Del 3 av 4 klar |
| 1:02 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 1:07 | klar | mamma | Paketet kom tillbaka. Det står "Okänd mottagare". Är du ens skriven där? Vart ska jag skicka din post? |
| 1:15 | sak | notis:💡 Poletten trillar ner: du bor faktiskt | 💡 Poletten trillar ner: du bor faktiskt här. Nytt mål: bli folkbokförd (tavlan vid vägen). |
| 1:15 | toast | guld | 💡 Poletten trillar ner: du bor faktiskt här. Nytt mål: bli folkbokförd (tavlan vid vägen). |
| 1:15 | notis | guld | 💡 Poletten trillar ner: du bor faktiskt här. Nytt mål: bli folkbokförd (tavlan vid vägen). |
| 1:18 | klar | notis:💡 Poletten trillar ner: du bor faktiskt | 💡 Poletten trillar ner: du bor faktiskt här. Nytt mål: bli folkbokförd (tavlan vid vägen). |
| 1:26 | väntar | rolf | Rolfs Rockers spelade en gång i Folkets park i Hudiksvall. 14 pers. 3 dansade. Bästa kvällen i mitt liv. /R |
| 1:39 | väntar | värld:TUUT! Hej grannen! | TUUT! Hej grannen! |
| 1:39 | sak | värld:TUUT! Hej grannen! | TUUT! Hej grannen! |
| 1:39 | bubbla |  | TUUT! Hej grannen! |
| 1:42 | poolTom | du | 4 repliker använda |
| 1:42 | klar | värld:TUUT! Hej grannen! | TUUT! Hej grannen! |
| 1:54 | händelse | printKlar | sak=byggsats:jetmotor n=1 |
| 1:54 | toast | guld | ✅ |
| 1:59 | händelse | tagitUrPrint | sak=byggsats:jetmotor n=1 |
| 1:59 | paket |  | sms |
| 1:59 | väntar | ali | Ali här. Du printade Jetmotor med efterbrännare från min ritning. Och det FUNKAR? Jag har bara sett sånt på YouTube. |
| 2:01 | händelse | placerat | sak=jetmotor |
| 2:01 | väntar | info:guld | 🚀 JETMOTOR! Kolfiberkvarnen mal 6× snabbare. |
| 2:01 | sak | info:guld | 🚀 JETMOTOR! Kolfiberkvarnen mal 6× snabbare. |
| 2:01 | kvitto-visas | info:guld | 🚀 JETMOTOR! Kolfiberkvarnen mal 6× snabbare. |
| 2:01 | toast | guld | 🚀 JETMOTOR! Kolfiberkvarnen mal 6× snabbare. |
| 2:01 | händelse | malKlart | id=jet14 del=Dag 14 – Jetmotorn nasta=f14-bygg-leveransladan |
| 2:01 | väntar | bror | Mamma har ringt Skatteverket. Två gånger. De sa att du måste äga där du bor eller ha ett kontrakt. Hon frågade om de kunde göra ett undantag "för det är ju mitt barn". De kunde inte. |
| 2:01 | väntar | du | En leveranslåda. Då säljer fabriken själv. |
| 2:01 | MÅL |  | Bygg leveranslådan |
| 2:03 | klar | info:guld | 🚀 JETMOTOR! Kolfiberkvarnen mal 6× snabbare. |
| 2:04 | målruta |  | Bygg leveranslådan |
| 2:05 | kvittens-bock |  | ✓ Montera jetmotorn på kolfiberkvarnen |
| 2:05 | sak | du | En leveranslåda. Då säljer fabriken själv. |
| 2:05 | pil |  | Bygg leveranslådan |
| 2:05 | notis | tanke | 💭 En leveranslåda. Då säljer fabriken själv. |
| 2:05 | röst | du | En leveranslåda. Då säljer fabriken själv. · MÅL |
| 2:05 | nick |  | nick:100 |
| 2:08 | klar | du | En leveranslåda. Då säljer fabriken själv. |
| 2:14 | händelse | printStart | sak=pall |
| 2:17 | sak | ali | Ali här. Du printade Jetmotor med efterbrännare från min ritning. Och det FUNKAR? Jag har bara sett sånt på YouTube. |
| 2:17 | sms | ali | Ali här. Du printade Jetmotor med efterbrännare från min ritning. Och det FUNKAR? Jag har bara sett sånt på YouTube. |
| 2:17 | sms-bubbla | ali | Ali här. Du printade Jetmotor med efterbrännare från min ritning. Och det FUNKAR? Jag har bara sett sånt på YouTube. |
| 2:17 | röst | ali | Ali här. Du printade Jetmotor med efterbrännare från min ritning. Och det FUNKAR? Jag har bara sett sånt på YouTube. · REAKTION |
| 2:18 | toast | guld | ✅ |
| 2:18 | händelse | printKlar | sak=pall n=23 |
| 2:19 | händelse | tagitUrPrint | sak=pall n=1 |
| 2:25 | skratt | du | kvarnen rapar |
| 2:27 | klar | ali | Ali här. Du printade Jetmotor med efterbrännare från min ritning. Och det FUNKAR? Jag har bara sett sånt på YouTube. |
| 2:28 | toast | guld | 🧵 |
| 2:32 | händelse | printStart | sak=n2_hjalm |
| 2:34 | väntar | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått minikylskåp. Skriv in, Gunnar. Du skriver aldrig in. |
| 2:34 | radio | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått minikylskåp. Skriv in, Gunnar. Du skriver aldrig in. |
| 2:34 | skratt | du | Radio-Kjelle |
| 2:35 | sak | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått minikylskåp. Skriv in, Gunnar. Du skriver aldrig in. |
| 2:35 | notis |  | 📻 Radio Tippen: Radio Tippen, Kjelle här. Skjulet vid tippen har fått minikylskåp. Skriv in, Gunnar. Du skriver aldrig in. |
| 2:35 | röst | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått minikylskåp. Skriv in, Gunnar. Du skriver aldrig in. · REAKTION |
| 2:36 | toast | guld | ✅ |
| 2:36 | händelse | printKlar | sak=n2_hjalm n=14 |
| 2:36 | toast | guld | 🧵 |
| 2:37 | händelse | tagitUrPrint | sak=n2_hjalm n=1 |
| 2:38 | väntar | info:fel | Göran snodde pall. |
| 2:39 | händelse | printStart | sak=n2_hjalm |
| 2:44 | klar | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått minikylskåp. Skriv in, Gunnar. Du skriver aldrig in. |
| 2:44 | sak | info:fel | Göran snodde pall. |
| 2:44 | kvitto-visas | info:fel | Göran snodde pall. |
| 2:44 | toast | fel | Göran snodde pall. |
| 2:44 | toast | guld | ✅ |
| 2:44 | händelse | printKlar | sak=n2_hjalm n=15 |
| 2:45 | händelse | tagitUrPrint | sak=n2_hjalm n=1 |
| 2:46 | klar | info:fel | Göran snodde pall. |
| 3:00 | webb | du | packade 2 n2_hjalm |
| 3:08 | paket |  | tanke |
| 3:08 | tanke | du | Raggsockorna runt jetmotorn. Äntligen passar de nåt. |
| 3:08 | väntar | du | Raggsockorna runt jetmotorn. Äntligen passar de nåt. |
| 3:08 | skratt | du | raggsockorna |
| 3:08 | sak | bror | Mamma har ringt Skatteverket. Två gånger. De sa att du måste äga där du bor eller ha ett kontrakt. Hon frågade om de kunde göra ett undantag "för det är ju mitt barn". De kunde inte. |
| 3:08 | sms | bror | Mamma har ringt Skatteverket. Två gånger. De sa att du måste äga där du bor eller ha ett kontrakt. Hon frågade om de kunde göra ett undantag "för det är ju mitt barn". De kunde inte. |
| 3:08 | sms-bubbla | bror | Mamma har ringt Skatteverket. Två gånger. De sa att du måste äga där du bor eller ha ett kontrakt. Hon frågade om de kunde göra ett undantag "för det är ju mitt barn". De kunde inte. |
| 3:08 | röst | bror | Mamma har ringt Skatteverket. Två gånger. De sa att du måste äga där du bor eller ha ett kontrakt. Hon frågade om de kunde göra ett undantag "för det är ju mitt barn". De kunde inte. · STORY |
| 3:12 | skratt | du | falsk tuta |
| 3:14 | väntar | info:bra | 📦 Paketet till Någon i Mora ligger i postlådan – Rolf tar det till posten |
| 3:20 | händelse | printStart | sak=n3_stol |
| 3:23 | klar | bror | Mamma har ringt Skatteverket. Två gånger. De sa att du måste äga där du bor eller ha ett kontrakt. Hon frågade om de kunde göra ett undantag "för det är ju mitt barn". De kunde inte. |
| 3:23 | struken | info:bra | 📦 Paketet till Någon i Mora ligger i postlådan – Rolf tar det till posten |
| 3:23 | struken | du | Raggsockorna runt jetmotorn. Äntligen passar de nåt. |
| 3:26 | toast | guld | ✅ |
| 3:26 | händelse | printKlar | sak=n3_stol n=8 |
| 3:27 | skratt | du | däcket rullar iväg |
| 3:28 | händelse | tagitUrPrint | sak=n3_stol n=1 |
| 3:37 | aliSalt | ali | 16000 |
| 3:39 | skratt | du | Alis dyr-pling |
| 3:39 | toast | guld | 3D-modell köpt – printa leveranslåda + autoprint på skrivaren |
| 3:39 | händelse | kopt | sak=utlada |
| 3:42 | poolTom | du | 4 repliker använda |
| 3:48 | händelse | printStart | sak=byggsats:utlada |
| 3:48 | väntar | bud | (tips) |
| 3:48 | sak | bud | (tips) |
| 3:50 | klar | bud | (tips) |
| 3:50 | toast | bra | Del 1 av 3 klar |
| 3:52 | meddelande | bror | En GAMINGBOD?! Jag bor i en etta med mögel. Kan jag flytta in? Skämtar. Typ. |
| 3:53 | röst | bror | En GAMINGBOD?! Jag bor i en etta med mögel. Kan jag flytta in? Skämtar. Typ. · STORY |
| 4:02 | paket |  | sms |
| 4:02 | väntar | bror | Seriöst? … Nej. Mamma skulle aldrig sluta prata om det. Men tack. |
| 4:12 | händelse | brevLast | id=b_bod |
| 4:13 | toast | bra | Del 2 av 3 klar |
| 4:13 | sak | bror | Seriöst? … Nej. Mamma skulle aldrig sluta prata om det. Men tack. |
| 4:13 | sms | bror | Seriöst? … Nej. Mamma skulle aldrig sluta prata om det. Men tack. |
| 4:13 | sms-bubbla | bror | Seriöst? … Nej. Mamma skulle aldrig sluta prata om det. Men tack. |
| 4:13 | röst | bror | Seriöst? … Nej. Mamma skulle aldrig sluta prata om det. Men tack. · STORY |
| 4:14 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 4:15 | händelse | printKlar | sak=byggsats:utlada n=1 |
| 4:15 | toast | guld | ✅ |
| 4:16 | väntar | info:guld | Leveranslåda + autoprint ligger i handen |
| 4:16 | händelse | tagitUrPrint | sak=byggsats:utlada n=1 |
| 4:19 | klar | bror | Seriöst? … Nej. Mamma skulle aldrig sluta prata om det. Men tack. |
| 4:19 | sak | info:guld | Leveranslåda + autoprint ligger i handen |
| 4:19 | kvitto-visas | info:guld | Leveranslåda + autoprint ligger i handen |
| 4:19 | toast | guld | Leveranslåda + autoprint ligger i handen |
| 4:21 | klar | info:guld | Leveranslåda + autoprint ligger i handen |
| 4:23 | struken | ali | Ali här. 🔥 TURBOMOTOR. Jag skrev ”turbo, röda ränder, snabbare än min pappa” till AI:n. Den förstod. Ingen annan förstår. Röda ränder. För farten. Det är vetenskap. |
| 4:25 | händelse | placerat | sak=leveranslada |
| 4:25 | väntar | info:guld | Leveranslådan är på – skrivarna printar vidare av sig själva. |
| 4:25 | struken | info:guld | Leveranslådan är på – skrivarna printar vidare av sig själva. |
| 4:25 | väntar | info:guld | Leveranslådan står vid skrivaren. Välj en sak på skrivaren och slå på Autoprint – Ali hämtar lådan varje morgon. |
| 4:25 | monterat | du | byggsats:utlada |
| 4:25 | händelse | monterat | sak=utlada |
| 4:25 | sak | info:guld | Leveranslådan står vid skrivaren. Välj en sak på skrivaren och slå på Autoprint – Ali hämtar lådan varje morgon. |
| 4:25 | kvitto-visas | info:guld | Leveranslådan står vid skrivaren. Välj en sak på skrivaren och slå på Autoprint – Ali hämtar lådan varje morgon. |
| 4:25 | toast | guld | Leveranslådan står vid skrivaren. Välj en sak på skrivaren och slå på Autoprint – Ali hämtar lådan varje morgon. |
| 4:25 | händelse | malKlart | id=f14-bygg-leveransladan del=Dag 14 – Jetmotorn nasta=f14-kop-mutor-rolf |
| 4:25 | väntar | du | Rolf tippar mer om han får bullar. Ali har bullar. |
| 4:25 | MÅL |  | Köp mutor till Rolf hos Ali |
| 4:27 | klar | info:guld | Leveranslådan står vid skrivaren. Välj en sak på skrivaren och slå på Autoprint – Ali hämtar lådan varje morgon. |
| 4:27 | målruta |  | Köp mutor till Rolf hos Ali |
| 4:29 | kvittens-bock |  | ✓ Bygg leveranslådan |
| 4:29 | sak | du | Rolf tippar mer om han får bullar. Ali har bullar. |
| 4:29 | pil |  | Köp mutor till Rolf hos Ali |
| 4:29 | notis | tanke | 💭 Rolf tippar mer om han får bullar. Ali har bullar. |
| 4:29 | röst | du | Rolf tippar mer om han får bullar. Ali har bullar. · MÅL |
| 4:33 | klar | du | Rolf tippar mer om han får bullar. Ali har bullar. |
| 4:43 | toast | guld | Mutor till Rolf nivå 1: En kall bira å en femtiolapp. Rolf tippar mer: 3 skräp extra varje gång |
| 4:43 | händelse | kopt | sak=sopbil |
| 4:43 | röst | ali | Trimmad. Snabbare än min pappa någonsin var. · STORY |
| 4:43 | butiksbubbla | ali | Trimmad. Snabbare än min pappa någonsin var. |
| 4:44 | händelse | malKlart | id=f14-kop-mutor-rolf del=Dag 14 – Jetmotorn nasta=sov14 |
| 4:44 | paket |  | lapp |
| 4:44 | väntar | du | Dag 14 är slut. Skjulet är fortfarande ett skjul. |
| 4:44 | MÅL |  | Klart för idag – sov när du vill |
| 4:45 | sak | du | (nytt mål i rutan) |
| 4:45 | målruta |  | Klart för idag – sov när du vill |
| 4:45 | pil |  | Klart för idag – sov när du vill |
| 4:45 | klar | du | (nytt mål i rutan) |
| 4:45 | sak | du | Dag 14 är slut. Skjulet är fortfarande ett skjul. |
| 4:45 | kvitto-visas | du | Dag 14 är slut. Skjulet är fortfarande ett skjul. |
| 4:45 | lapp | 📔 Dagbok | Dag 14 är slut. Skjulet är fortfarande ett skjul. |
| 4:45 | meddelande | du | Dag 14 är slut. Skjulet är fortfarande ett skjul. |
| 4:45 | dagbokkort | du | Dag 14 är slut. Skjulet är fortfarande ett skjul. |
| 4:46 | röst | du | Dag 14 är slut. Skjulet är fortfarande ett skjul. · STORY |
| 4:52 | händelse | brevLast | id=kvall14 |
| 4:52 | klar | du | Dag 14 är slut. Skjulet är fortfarande ett skjul. |
| 4:52 | väntar | notis:🌇 Klockan är 21. Ali slår igen luckan.  | 🌇 Klockan är 21. Ali slår igen luckan. Dagens jobb är klart – gå in i skjulet och sov i sängen. |
| 4:58 | webbBetalt | du | 3584 |

<details><summary>Botens handlingar dag 14</summary>

- 0:00 — dag 14 börjar — (28842 kr)
- 0:15 popup: "FORTSÄTT" (28842 kr)
- 0:32 popup: "FORTSÄTT" (28842 kr)
- 0:44 gå till Ali (20 m) (28842 kr)
- 0:44 öppnar Alis butik – köpa jetmotor med efterbrännare (28842 kr)
- 0:47 köper jetmotor för 16000 kr (12842 kr)
- 0:55 gå till skrivaren (33 m) (12842 kr)
- 0:56 printar Jetmotor med efterbrännare (4 delar) (12842 kr)
- 1:03 väntar på kolfiber från bandet (12842 kr)
- 1:11 väntar på kolfiber från bandet (12842 kr)
- 1:19 väntar på kolfiber från bandet (12842 kr)
- 1:27 väntar på kolfiber från bandet (12842 kr)
- 1:35 väntar på kolfiber från bandet (12842 kr)
- 1:43 väntar på kolfiber från bandet (12842 kr)
- 1:51 väntar på kolfiber från bandet (12842 kr)
- 2:00 tar ut 1 st ur skrivaren (12842 kr)
- 2:01 gå till kolfiberkvarnen (3 m) (12842 kr)
- 2:13 gå till skrivaren (11 m) (12842 kr)
- 2:14 printar Pall (12842 kr)
- 2:19 tar ut 1 st ur skrivaren (12842 kr)
- 2:22 gå till en tunna (13 m) (12842 kr)
- 2:25 gå till PETG-kvarnen (7 m) (12842 kr)
- 2:25 tömmer det tunga i PETG-kvarnen (12842 kr)
- 2:30 gå till skrivaren (3 m) (12842 kr)
- 2:32 printar Cykelhjälm i PETG (12842 kr)
- 2:38 tar ut 1 st ur skrivaren (12842 kr)
- 2:39 printar Cykelhjälm i PETG (12842 kr)
- 2:45 tar ut 1 st ur skrivaren (12842 kr)
- 2:50 gå till datorn (23 m) (12842 kr)
- 2:59 panel: "Webbshopen · Soptippsvägen 1
B" (12842 kr)
- 3:08 panel: "Webbshopen · Soptippsvägen 1
B" (12842 kr)
- 3:14 gå till Rolfs postlåda (paket) (29 m) (12842 kr)
- 3:15 webbshop: 1 paket i postlådan (12842 kr)
- 3:15 tjänar pengar till leveranslåda + autoprint: 12842/18500 kr → printar kolfiberstol (16000 kr) (12842 kr)
- 3:18 gå till skrivaren (15 m) (12842 kr)
- 3:20 printar Kolfiberstol (12842 kr)
- 3:28 tar ut 1 st ur skrivaren (12842 kr)
- 3:35 gå till Ali (34 m) (12842 kr)
- 3:35 öppnar Alis butik – sälja (12842 kr)
- 3:37 säljer hos Ali: +16000 kr (28842 kr)
- 3:38 öppnar Alis butik – köpa leveranslåda + autoprint (28842 kr)
- 3:40 köper utlada för 18500 kr (10342 kr)
- 3:46 gå till skrivaren (23 m) (10342 kr)
- 3:48 printar Leveranslåda + autoprint (3 delar) (10342 kr)
- 4:02 popup: "Klart du får." (10342 kr)
- 4:12 popup: "Läst" (10342 kr)
- 4:17 tar ut 1 st ur skrivaren (10342 kr)
- 4:25 gå till bygg leveranslådan (7 m) (10342 kr)
- 4:41 gå till Ali (29 m) (10342 kr)
- 4:41 öppnar Alis butik – bjuda Rolf på fika (10342 kr)
- 4:52 popup: "FORTSÄTT" (10092 kr)
- 4:56 gå till sängen (20 m) (10092 kr)

</details>

## Dag 15

| Tid | Källa | Vem | Text |
|---|---|---|---|
| 4:58 | vara | ali | n2_vas |
| 4:58 | händelse | malKlart | id=sov14 del=Dag 14 – Jetmotorn nasta=f15-bygg-gamingboden |
| 4:58 | händelse | malKlart | id=f15-bygg-gamingboden del=Dag 15 – Fristaden nasta=gamer |
| 4:59 | MÅL |  | Inred boden · 1/3 gamersaker |
| 0:01 | händelse | dagenBorjar | dag=15 |
| 0:01 | meddelande | du | Dag 15. 7 dagar till jul. Utan adress finns jag inte på riktigt. |
| 0:01 | dagbokkort | du | Fristaden · Dag 15. 7 dagar till jul. Utan adress finns jag inte på riktigt. |
| 0:01 | röst | du | Fristaden. Dag 15. 7 dagar till jul. Utan adress finns jag inte på riktigt. · STORY |
| 0:03 | paket |  | sms |
| 0:03 | väntar | rolf | Ja har skrivit nåt. Med blyerts, så ja kan sudda om de blir fel. Lådan. /R |
| 0:15 | händelse | morgonkortStangt | dag=15 |
| 0:15 | struken | kedja | d15 |
| 0:15 | väntar | du | Boden ska vara full. Tre saker. |
| 0:15 | målruta |  | Inred boden · 1/3 gamersaker |
| 0:20 | sak | du | Boden ska vara full. Tre saker. |
| 0:20 | pil |  | Inred boden · 1/3 gamersaker |
| 0:20 | notis | tanke | 💭 Boden ska vara full. Tre saker. |
| 0:20 | röst | du | Boden ska vara full. Tre saker. · MÅL |
| 0:21 | nick |  | nick:104 |
| 0:23 | klar | du | Boden ska vara full. Tre saker. |
| 0:30 | struken | notis:🌇 Klockan är 21. Ali slår igen luckan.  | 🌇 Klockan är 21. Ali slår igen luckan. Dagens jobb är klart – gå in i skjulet och sov i sängen. |
| 0:36 | väntar | ali | Min fru frågar om dig. Jag sa: printar. |
| 0:36 | sak | ali | Min fru frågar om dig. Jag sa: printar. |
| 0:36 | bubbla |  | Min fru frågar om dig. Jag sa: printar. |
| 0:36 | röst | ali | Min fru frågar om dig. Jag sa: printar. · SMÅPRAT |
| 0:37 | butiksbubbla | ali | Förut drev jag butiken. Nu bygger jag något. Det är skillnad. Du lärde mig det. Säg inget. Det blir pinsamt. |
| 0:38 | röst | ali | Förut drev jag butiken. Nu bygger jag något. Det är skillnad. Du lärde mig det. Säg inget. Det blir pinsamt. · STORY |
| 0:38 | skratt | du | Alis dyr-pling |
| 0:38 | händelse | kopt | sak=projektor |
| 0:41 | poolTom | du | 4 repliker använda |
| 0:43 | klar | ali | Min fru frågar om dig. Jag sa: printar. |
| 0:47 | händelse | printStart | sak=projektor |
| 0:48 | väntar | mamma | Bygger du ett hus till? Du har inte ens dammsugit ditt rum här hemma på fyra år. |
| 0:51 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 0:53 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 0:53 | väntar | notis:Skrivare L: Tornet är tomt – mal mer så  | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 0:53 | sak | notis:Skrivare L: Tornet är tomt – mal mer så  | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 0:53 | notis | fel | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 0:53 | skratt | du | kvarnen spottar |
| 0:54 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 0:54 | struken | notis | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 0:55 | klar | notis:Skrivare L: Tornet är tomt – mal mer så  | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 0:56 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 0:56 | struken | notis | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 0:58 | toast | guld | ✅ |
| 0:58 | händelse | printKlar | sak=projektor n=1 |
| 1:06 | händelse | tagitUrPrint | sak=projektor n=1 |
| 1:08 | skratt | du | falsk tuta |
| 1:08 | väntar | värld:TUUT TUUT! | TUUT TUUT! |
| 1:08 | sak | värld:TUUT TUUT! | TUUT TUUT! |
| 1:08 | bubbla |  | TUUT TUUT! |
| 1:11 | klar | värld:TUUT TUUT! | TUUT TUUT! |
| 1:12 | väntar | rolf | Trädgårn står kvar. Ingen brådska. Nässlorna har inga planer. MVH ROLF |
| 1:13 | händelse | placerat | sak=projektor |
| 1:17 | skratt | du | Alis dyr-pling |
| 1:17 | händelse | kopt | sak=ledpinne |
| 1:26 | händelse | printStart | sak=ledpinne |
| 1:26 | skratt | du | Kajsa i skrivaren |
| 1:28 | paket |  | replik |
| 1:28 | väntar | bengt | Pappas. Han hade velat att nån använde den. HMPF. |
| 1:28 | toast | guld | ✅ |
| 1:28 | händelse | printKlar | sak=ledpinne n=1 |
| 1:29 | händelse | tagitUrPrint | sak=ledpinne n=1 |
| 1:30 | väntar | bengt | Pappa grävde här bakom i hela sitt liv. Du har gjort mer på ett halvår. HMPF. |
| 1:30 | skratt | du | Bengt-Åke mjuknar |
| 1:30 | sak | bengt | Pappa grävde här bakom i hela sitt liv. Du har gjort mer på ett halvår. HMPF. |
| 1:30 | röst | bengt | Pappa grävde här bakom i hela sitt liv. Du har gjort mer på ett halvår. HMPF. · STORY |
| 1:31 | bubbla |  | Pappa grävde här bakom i hela sitt liv. Du har gjort mer på ett halvår. HMPF. |
| 1:34 | ljud | bom | Bommen fälls upp (hoger) |
| 1:34 | händelse | placerat | sak=ledpinne |
| 1:34 | händelse | malKlart | id=gamer del=Dag 15 – Fristaden nasta=f15-printa-stall-ut |
| 1:34 | väntar | du | En jacuzzi. På en soptipp. Varför inte. |
| 1:34 | MÅL |  | Printa och ställ ut en jacuzzi |
| 1:36 | klar | bengt | Pappa grävde här bakom i hela sitt liv. Du har gjort mer på ett halvår. HMPF. |
| 1:36 | målruta |  | Printa och ställ ut en jacuzzi |
| 1:38 | sak | du | En jacuzzi. På en soptipp. Varför inte. |
| 1:38 | pil |  | Printa och ställ ut en jacuzzi |
| 1:38 | notis | tanke | 💭 En jacuzzi. På en soptipp. Varför inte. |
| 1:38 | röst | du | En jacuzzi. På en soptipp. Varför inte. · MÅL |
| 1:38 | kvittens-bock |  | ✓ Inred boden · 3/3 gamersaker |
| 1:38 | nick |  | nick:105 |
| 1:41 | klar | du | En jacuzzi. På en soptipp. Varför inte. |
| 1:47 | skratt | du | Alis dyr-pling |
| 1:47 | händelse | kopt | sak=jacuzzi |
| 1:50 | sak | bengt | Pappas. Han hade velat att nån använde den. HMPF. |
| 1:50 | notis |  | Bengt-Åke: Pappas. Han hade velat att nån använde den. HMPF. |
| 1:50 | röst | bengt | Pappas. Han hade velat att nån använde den. HMPF. · STORY |
| 1:51 | bubbla |  | Pappas. Han hade velat att nån använde den. HMPF. |
| 1:54 | klar | bengt | Pappas. Han hade velat att nån använde den. HMPF. |
| 1:56 | händelse | printStart | sak=jacuzzi |
| 2:00 | väntar | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått jetmotor med efterbrännare. Det är stort, Gunnar. |
| 2:00 | radio | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått jetmotor med efterbrännare. Det är stort, Gunnar. |
| 2:00 | skratt | du | Radio-Kjelle |
| 2:04 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 2:05 | sak | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått jetmotor med efterbrännare. Det är stort, Gunnar. |
| 2:05 | notis |  | 📻 Radio Tippen: Radio Tippen, Kjelle här. Skjulet vid tippen har fått jetmotor med efterbrännare. Det är stort, Gunnar. |
| 2:05 | röst | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått jetmotor med efterbrännare. Det är stort, Gunnar. · REAKTION |
| 2:06 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 2:06 | struken | notis | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 2:07 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 2:07 | struken | notis | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 2:08 | ljud | kajsa | Mjau |
| 2:09 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 2:09 | struken | notis | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 2:10 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 2:10 | struken | notis | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 2:12 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 2:12 | struken | notis | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 2:14 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 2:14 | struken | notis | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 2:14 | klar | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått jetmotor med efterbrännare. Det är stort, Gunnar. |
| 2:17 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 2:18 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 2:19 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 2:20 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 2:22 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 2:23 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 2:24 | toast | guld | ✅ |
| 2:24 | händelse | printKlar | sak=jacuzzi n=1 |
| 2:30 | händelse | tagitUrPrint | sak=jacuzzi n=1 |
| 2:34 | upplåst | skrivare_kolf | trim_kolf1 |
| 2:34 | brott | UPPLÅST | trim_kolf1 (skrivare_kolf 111 av 75) |
| 2:34 | händelse | upplast | id=trim_kolf1 flask=skrivare_kolf |
| 2:34 | paket |  | sms |
| 2:34 | väntar | ali | Ali här. Trim till kolfiberskrivaren. Kolfiber är segt. Skrivaren behöver hjälp. |
| 2:34 | sak | ali | Ali här. Trim till kolfiberskrivaren. Kolfiber är segt. Skrivaren behöver hjälp. |
| 2:34 | sms | ali | Ali här. Trim till kolfiberskrivaren. Kolfiber är segt. Skrivaren behöver hjälp. |
| 2:34 | sms-bubbla | ali | Ali här. Trim till kolfiberskrivaren. Kolfiber är segt. Skrivaren behöver hjälp. |
| 2:34 | röst | ali | Ali här. Trim till kolfiberskrivaren. Kolfiber är segt. Skrivaren behöver hjälp. · STORY |
| 2:37 | händelse | placerat | sak=jacuzzi |
| 2:37 | paket |  | sms → sms → sms → sms |
| 2:37 | väntar | mamma | Mamma här. Du skickade en bild på en jacuzzi? |
| 2:37 | väntar | mamma | …och tapeter. Och en gamingbod med lampor i alla färger. |
| 2:37 | väntar | mamma | Okej. Jag erkänner. Det är finare än hemma. |
| 2:37 | väntar | mamma | Kan jag komma och bada på söndag? Pappa tar med korv. |
| 2:37 | händelse | malKlart | id=f15-printa-stall-ut del=Dag 15 – Fristaden nasta=f15-varldens-basta-fristad |
| 2:37 | väntar | du | Världens bästa fristad. |
| 2:38 | MÅL |  | Världens bästa fristad · trivsel 288/300 |
| 2:40 | klar | ali | Ali här. Trim till kolfiberskrivaren. Kolfiber är segt. Skrivaren behöver hjälp. |
| 2:40 | målruta |  | Världens bästa fristad · trivsel 288/300 |
| 2:41 | poolTom | du | 4 repliker använda |
| 2:41 | kvittens-bock |  | ✓ Printa och ställ ut en jacuzzi |
| 2:42 | sak | du | Världens bästa fristad. |
| 2:42 | pil |  | Världens bästa fristad · trivsel 288/300 |
| 2:42 | röst | du | Världens bästa fristad. · MÅL |
| 2:43 | nick |  | nick:106 |
| 2:45 | klar | du | Världens bästa fristad. |
| 2:51 | händelse | kopt | sak=fagelbad |
| 2:56 | skratt | du | däcket rullar iväg |
| 2:59 | händelse | printStart | sak=fagelbad |
| 3:03 | väntar | värld:TUUT TUUT! | TUUT TUUT! |
| 3:03 | sak | värld:TUUT TUUT! | TUUT TUUT! |
| 3:03 | bubbla |  | TUUT TUUT! |
| 3:04 | toast | guld | ✅ |
| 3:04 | händelse | printKlar | sak=fagelbad n=1 |
| 3:04 | väntar | rolf | Chefen har köpt en kaffemaskin som pratar. Den sa "god morgon Rolf". Ja litar inte på den. /R |
| 3:04 | väntar | mamma | Bygger du ett hus till? Du har inte ens dammsugit ditt rum här hemma på fyra år. |
| 3:04 | händelse | tagitUrPrint | sak=fagelbad n=1 |
| 3:06 | klar | värld:TUUT TUUT! | TUUT TUUT! |
| 3:10 | händelse | placerat | sak=fagelbad |
| 3:15 | skratt | du | Alis dyr-pling |
| 3:15 | händelse | kopt | sak=hogtalare |
| 3:19 | sak | mamma | Mamma här. Du skickade en bild på en jacuzzi? |
| 3:19 | sms | mamma | Mamma här. Du skickade en bild på en jacuzzi? |
| 3:19 | sms-bubbla | mamma | Mamma här. Du skickade en bild på en jacuzzi? |
| 3:19 | röst | mamma | Mamma här. Du skickade en bild på en jacuzzi? · STORY |
| 3:20 | väntar | info:guld | Göran har flyttat in. Han sitter på skylten nu. |
| 3:22 | klar | mamma | Mamma här. Du skickade en bild på en jacuzzi? |
| 3:22 | sak | info:guld | Göran har flyttat in. Han sitter på skylten nu. |
| 3:22 | kvitto-visas | info:guld | Göran har flyttat in. Han sitter på skylten nu. |
| 3:22 | toast | guld | Göran har flyttat in. Han sitter på skylten nu. |
| 3:23 | händelse | printStart | sak=hogtalare |
| 3:24 | klar | info:guld | Göran har flyttat in. Han sitter på skylten nu. |
| 3:28 | toast | guld | ✅ |
| 3:28 | händelse | printKlar | sak=hogtalare n=1 |
| 3:32 | väntar | info:fel | Fullt i händerna. |
| 3:32 | sak | info:fel | Fullt i händerna. |
| 3:32 | kvitto-visas | info:fel | Fullt i händerna. |
| 3:32 | toast | fel | Fullt i händerna. |
| 3:34 | klar | info:fel | Fullt i händerna. |
| 3:35 | ljud | kajsa | Mjau |
| 3:41 | händelse | tagitUrPrint | sak=hogtalare n=1 |
| 3:48 | händelse | placerat | sak=hogtalare |
| 3:48 | händelse | malKlart | id=f15-varldens-basta-fristad del=Dag 15 – Fristaden nasta=sov15 |
| 3:48 | paket |  | lapp |
| 3:48 | lapp | 📔 Dagbok | Dag 15 är slut. På pappret finns jag inte. |
| 3:48 | meddelande | du | Dag 15 är slut. På pappret finns jag inte. |
| 3:48 | dagbokkort | du | Dag 15 är slut. På pappret finns jag inte. |
| 3:48 | målruta |  | Klart för idag – sov när du vill |
| 3:48 | MÅL |  | Klart för idag – sov när du vill |
| 3:48 | röst | du | Dag 15 är slut. På pappret finns jag inte. · STORY |
| 3:54 | händelse | brevLast | id=kvall15 |
| 3:55 | väntar | notis:🌇 Klockan är 21. Ali slår igen luckan.  | 🌇 Klockan är 21. Ali slår igen luckan. Dagens jobb är klart – gå in i skjulet och sov i sängen. |
| 3:55 | sak | du | (nytt mål i rutan) |
| 3:55 | pil |  | Klart för idag – sov när du vill |
| 3:56 | klar | du | (nytt mål i rutan) |

<details><summary>Botens handlingar dag 15</summary>

- 0:00 — dag 15 börjar — (13676 kr)
- 0:15 popup: "FORTSÄTT" (13676 kr)
- 0:21 gå till Rolfs postlåda (29 m) (13676 kr)
- 0:30 panel: "En lapp från Rolf
Lite olaglig" (13676 kr)
- 0:37 gå till Ali (31 m) (13676 kr)
- 0:37 öppnar Alis butik – köpa receptet projektor + duk (13676 kr)
- 0:39 köper projektor för 950 kr (12726 kr)
- 0:45 gå till skrivaren (23 m) (12726 kr)
- 0:47 printar Projektor + duk (12726 kr)
- 0:58 plockar 1 skräp på tippen (bär max 16) (12726 kr)
- 1:01 gå till kvarnen (12 m) (12726 kr)
- 1:06 gå till skrivaren (7 m) (12726 kr)
- 1:07 tar ut 1 st ur skrivaren (12726 kr)
- 1:12 gå till platsen för projektor + duk (22 m) (12726 kr)
- 1:13 ställer ut projektor + duk (12726 kr)
- 1:16 gå till Ali (12 m) (12726 kr)
- 1:16 öppnar Alis butik – köpa receptet rgb-ljuspinne (12726 kr)
- 1:18 köper ledpinne för 1000 kr (11726 kr)
- 1:24 gå till skrivaren (23 m) (11726 kr)
- 1:26 printar RGB-ljuspinne (11726 kr)
- 1:30 tar ut 1 st ur skrivaren (11726 kr)
- 1:33 gå till platsen för rgb-ljuspinne (17 m) (11726 kr)
- 1:34 ställer ut rgb-ljuspinne (11726 kr)
- 1:46 gå till Ali (11 m) (11726 kr)
- 1:46 öppnar Alis butik – köpa receptet jacuzzi (11726 kr)
- 1:48 köper jacuzzi för 5700 kr (6026 kr)
- 1:54 gå till skrivaren (23 m) (6026 kr)
- 1:56 printar Jacuzzi (6026 kr)
- 2:12 plockar 2 skräp på tippen (bär max 16) (6026 kr)
- 2:15 gå till kvarnen (13 m) (6026 kr)
- 2:30 gå till skrivaren (7 m) (6026 kr)
- 2:31 tar ut 1 st ur skrivaren (6026 kr)
- 2:36 gå till platsen för jacuzzi (21 m) (6026 kr)
- 2:37 ställer ut jacuzzi (6026 kr)
- 2:49 gå till Ali (11 m) (6026 kr)
- 2:49 öppnar Alis butik – köpa receptet fågelbad (6026 kr)
- 2:52 köper fagelbad för 60 kr (5966 kr)
- 2:57 gå till skrivaren (23 m) (5966 kr)
- 2:59 printar Fågelbad (5966 kr)
- 3:05 tar ut 1 st ur skrivaren (5966 kr)
- 3:09 gå till platsen för fågelbad (19 m) (5966 kr)
- 3:10 ställer ut fågelbad (5966 kr)
- 3:13 gå till Ali (11 m) (5966 kr)
- 3:13 öppnar Alis butik – köpa receptet högtalare (5966 kr)
- 3:16 köper hogtalare för 1450 kr (4516 kr)
- 3:21 gå till skrivaren (23 m) (4516 kr)
- 3:23 printar Högtalare (4516 kr)
- 3:39 gå till kvarnen (30 m) (4516 kr)
- 3:41 gå till skrivaren (7 m) (4516 kr)
- 3:42 tar ut 1 st ur skrivaren (4516 kr)
- 3:47 gå till platsen för högtalare (23 m) (4516 kr)
- 3:48 ställer ut högtalare (4516 kr)
- 3:54 popup: "FORTSÄTT" (4516 kr)
- 4:00 gå till sängen (10 m) (4516 kr)

</details>

## Dag 16

| Tid | Källa | Vem | Text |
|---|---|---|---|
| 4:02 | vara | ali | n2_hjalm |
| 4:02 | sak | notis:🌇 Klockan är 21. Ali slår igen luckan.  | 🌇 Klockan är 21. Ali slår igen luckan. Dagens jobb är klart – gå in i skjulet och sov i sängen. |
| 4:02 | notis | guld | 🌇 Klockan är 21. Ali slår igen luckan. Dagens jobb är klart – gå in i skjulet och sov i sängen. |
| 4:02 | händelse | malKlart | id=sov15 del=Dag 15 – Fristaden nasta=m16-kop-tomten-bor |
| 4:02 | paket |  | sms |
| 4:02 | väntar | mamma | Pappa såg bilden. Han sa "aha, vad lugnt då". Det betyder att han är jättestolt. |
| 4:02 | paket |  | sms |
| 4:02 | väntar | rolf | Hörde att du har JACUZZI. Ja tar med grillen. Och Kajsa. Hon e en katt. Hon badar inte. /R |
| 4:02 | väntar | info:guld | 🏆 KAPITEL 3 KLART! Fabriken sköter sig själv. |
| 4:02 | paket |  | sms |
| 4:02 | väntar | rolf | Ja hitta ett flipperspel på mitt hemliga ställe. De e ditt. Sen: Bengt-Åke vill sälja tomten du bor på. Tavlan vid vägen. /R |
| 4:02 | MÅL |  | Köp tomten du bor på |
| 0:00 | klar | notis:🌇 Klockan är 21. Ali slår igen luckan.  | 🌇 Klockan är 21. Ali slår igen luckan. Dagens jobb är klart – gå in i skjulet och sov i sängen. |
| 0:00 | sak | info:guld | 🏆 KAPITEL 3 KLART! Fabriken sköter sig själv. |
| 0:00 | kvitto-visas | info:guld | 🏆 KAPITEL 3 KLART! Fabriken sköter sig själv. |
| 0:00 | toast | guld | 🏆 KAPITEL 3 KLART! Fabriken sköter sig själv. |
| 0:01 | händelse | dagenBorjar | dag=16 |
| 0:01 | meddelande | du | På pappret finns jag inte. Därför: en egen tomt och ett riktigt hus. |
| 0:01 | dagbokkort | du | KAPITEL 4 · Dag 16. 6 dagar till jul · På pappret finns jag inte. Därför: en egen tomt och ett riktigt hus. |
| 0:01 | röst | du | KAPITEL 4 · Dag 16. 6 dagar till jul. På pappret finns jag inte. Därför: en egen tomt och ett riktigt hus. · STORY |
| 0:07 | klar | info:guld | 🏆 KAPITEL 3 KLART! Fabriken sköter sig själv. |
| 0:07 | händelse | morgonkortStangt | dag=16 |
| 0:07 | struken | kedja | d16 |
| 0:07 | väntar | du | Kommunen säljer tomten vid tippen. Ingen annan ville ha den. |
| 0:11 | målruta |  | Köp tomten du bor på |
| 0:13 | sak | du | Kommunen säljer tomten vid tippen. Ingen annan ville ha den. |
| 0:13 | pil |  | Köp tomten du bor på |
| 0:13 | notis | tanke | 💭 Kommunen säljer tomten vid tippen. Ingen annan ville ha den. |
| 0:13 | röst | du | Kommunen säljer tomten vid tippen. Ingen annan ville ha den. · MÅL |
| 0:18 | väntar | info:guld | Skylten vid vägen är uppgraderad. |
| 0:18 | paket |  | sms |
| 0:18 | väntar | bror | Pappa körde förbi för att kolla. Två gånger. Han säger att han skulle åt det hållet ändå. Det ska han aldrig. |
| 0:18 | väntar | notis:📔 Prestation: Mysigt värre · +3 respekt | 📔 Prestation: Mysigt värre · +3 respekt |
| 0:18 | klar | du | Kommunen säljer tomten vid tippen. Ingen annan ville ha den. |
| 0:18 | sak | info:guld | Skylten vid vägen är uppgraderad. |
| 0:18 | kvitto-visas | info:guld | Skylten vid vägen är uppgraderad. |
| 0:18 | toast | guld | Skylten vid vägen är uppgraderad. |
| 0:20 | klar | info:guld | Skylten vid vägen är uppgraderad. |
| 0:22 | struken | mamma | Bygger du ett hus till? Du har inte ens dammsugit ditt rum här hemma på fyra år. |
| 0:34 | sak | notis:📔 Prestation: Mysigt värre · +3 respekt | 📔 Prestation: Mysigt värre · +3 respekt |
| 0:34 | notis |  | 📔 Prestation: Mysigt värre · +3 respekt |
| 0:36 | väntar | info:guld | Göran lämnade tillbaka pall och resten. Och en blank skruv. |
| 0:36 | väntar | ali | Ali här. Din mås stod på min disk i morse. Han köpte inget. |
| 0:36 | klar | notis:📔 Prestation: Mysigt värre · +3 respekt | 📔 Prestation: Mysigt värre · +3 respekt |
| 0:36 | sak | info:guld | Göran lämnade tillbaka pall och resten. Och en blank skruv. |
| 0:36 | kvitto-visas | info:guld | Göran lämnade tillbaka pall och resten. Och en blank skruv. |
| 0:36 | toast | guld | Göran lämnade tillbaka pall och resten. Och en blank skruv. |
| 0:38 | händelse | printStart | sak=kruka |
| 0:38 | klar | info:guld | Göran lämnade tillbaka pall och resten. Och en blank skruv. |
| 0:39 | skratt | du | kvarnen spottar |
| 0:40 | paket |  | brev |
| 0:40 | väntar | gunbritt | Hej. Gun-Britt här, byggnadsnämnden. Tyvärr har ni en skylt utan bygglov. Tyvärr har ni också ett hus utan bygglov. Tyvärr måste ni fylla i blankett 14B. Tyvärr finns den bara på papper. Tyvärr är jag ledsen. /Gun-Britt |
| 0:40 | händelse | printStart | sak=kruka |
| 0:40 | poolTom | du | 4 repliker använda |
| 0:42 | händelse | printStart | sak=kruka |
| 0:43 | händelse | printStart | sak=kruka |
| 0:44 | skratt | du | falsk tuta |
| 0:45 | händelse | printStart | sak=kruka |
| 0:47 | händelse | printStart | sak=kruka |
| 0:49 | sak | bror | Pappa körde förbi för att kolla. Två gånger. Han säger att han skulle åt det hållet ändå. Det ska han aldrig. |
| 0:49 | sms | bror | Pappa körde förbi för att kolla. Två gånger. Han säger att han skulle åt det hållet ändå. Det ska han aldrig. |
| 0:49 | sms-bubbla | bror | Pappa körde förbi för att kolla. Två gånger. Han säger att han skulle åt det hållet ändå. Det ska han aldrig. |
| 0:49 | röst | bror | Pappa körde förbi för att kolla. Två gånger. Han säger att han skulle åt det hållet ändå. Det ska han aldrig. · STORY |
| 0:49 | händelse | printStart | sak=kruka |
| 0:50 | ljud | kajsa | Mjau |
| 0:58 | klar | bror | Pappa körde förbi för att kolla. Två gånger. Han säger att han skulle åt det hållet ändå. Det ska han aldrig. |
| 1:03 | händelse | printStart | sak=kruka |
| 1:05 | händelse | printStart | sak=kruka |
| 1:06 | väntar | värld:TUUT! Grann skylt! | TUUT! Grann skylt! |
| 1:07 | händelse | printStart | sak=kruka |
| 1:09 | händelse | printStart | sak=kruka |
| 1:11 | händelse | printStart | sak=kruka |
| 1:13 | händelse | printStart | sak=kruka |
| 1:13 | sak | gunbritt | Hej. Gun-Britt här, byggnadsnämnden. Tyvärr har ni en skylt utan bygglov. Tyvärr har ni också ett hus utan bygglov. Tyvärr måste ni fylla i blankett 14B. Tyvärr finns den bara på papper. Tyvärr är jag ledsen. /Gun-Britt |
| 1:13 | lapp | Brev från byggnadsnämnden | Hej. Gun-Britt här, byggnadsnämnden. Tyvärr har ni en skylt utan bygglov. Tyvärr har ni också ett hus utan bygglov. Tyvärr måste ni fylla i blankett 14B. Tyvärr finns den bara på papper. Tyvärr är jag ledsen. /Gun-Britt |
| 1:13 | röst | gunbritt | Hej. Gun-Britt här, byggnadsnämnden. Tyvärr har ni en skylt utan bygglov. Tyvärr har ni också ett hus utan bygglov. Tyvärr måste ni fylla i blankett 14B. Tyvärr finns den bara på papper. Tyvärr är jag ledsen. /Gun-Britt · STORY |
| 1:15 | händelse | printStart | sak=kruka |
| 1:18 | händelse | printStart | sak=kruka |
| 1:20 | händelse | printStart | sak=kruka |
| 1:22 | händelse | printStart | sak=kruka |
| 1:22 | skratt | du | Kajsa i skrivaren |
| 1:24 | händelse | printStart | sak=kruka |
| 1:26 | händelse | printStart | sak=kruka |
| 1:28 | väntar | info:guld | Täppan är rensad. Ali har spaljé och droppslang i röd PETG. |
| 1:28 | händelse | printStart | sak=kruka |
| 1:32 | paket |  | tanke → tanke |
| 1:32 | tanke | du | Vad har Göran nu? |
| 1:32 | väntar | du | Vad har Göran nu? |
| 1:32 | tanke | du | Guld? Där nere? |
| 1:32 | väntar | du | Guld? Där nere? |
| 1:32 | skratt | du | Göran hittar guld |
| 1:32 | klar | gunbritt | Hej. Gun-Britt här, byggnadsnämnden. Tyvärr har ni en skylt utan bygglov. Tyvärr har ni också ett hus utan bygglov. Tyvärr måste ni fylla i blankett 14B. Tyvärr finns den bara på papper. Tyvärr är jag ledsen. /Gun-Britt |
| 1:33 | sak | info:guld | Täppan är rensad. Ali har spaljé och droppslang i röd PETG. |
| 1:33 | kvitto-visas | info:guld | Täppan är rensad. Ali har spaljé och droppslang i röd PETG. |
| 1:33 | toast | guld | Täppan är rensad. Ali har spaljé och droppslang i röd PETG. |
| 1:35 | klar | info:guld | Täppan är rensad. Ali har spaljé och droppslang i röd PETG. |
| 1:36 | ljud | kajsa | Mjau |
| 1:37 | struken | värld:TUUT! Grann skylt! | TUUT! Grann skylt! |
| 1:37 | sak | du | Vad har Göran nu? |
| 1:37 | notis | tanke | 💭 Vad har Göran nu? |
| 1:37 | röst | du | Vad har Göran nu? · STORY |
| 1:39 | klar | du | Vad har Göran nu? |
| 1:41 | sak | du | Guld? Där nere? |
| 1:41 | röst | du | Guld? Där nere? · STORY |
| 1:42 | händelse | printStart | sak=kruka |
| 1:42 | notis | tanke | 💭 Guld? Där nere? |
| 1:43 | händelse | printStart | sak=kruka |
| 1:43 | skratt | du | Kajsa i skrivaren |
| 1:44 | klar | du | Guld? Där nere? |
| 1:46 | händelse | printStart | sak=kruka |
| 1:48 | händelse | printStart | sak=kruka |
| 1:50 | händelse | printStart | sak=kruka |
| 1:52 | händelse | printStart | sak=kruka |
| 1:54 | händelse | printStart | sak=kruka |
| 1:54 | sak | mamma | …och tapeter. Och en gamingbod med lampor i alla färger. |
| 1:54 | sms | mamma | …och tapeter. Och en gamingbod med lampor i alla färger. |
| 1:54 | sms-bubbla | mamma | …och tapeter. Och en gamingbod med lampor i alla färger. |
| 1:54 | röst | mamma | …och tapeter. Och en gamingbod med lampor i alla färger. · STORY |
| 1:56 | händelse | printStart | sak=kruka |
| 1:58 | händelse | printStart | sak=kruka |
| 1:59 | klar | mamma | …och tapeter. Och en gamingbod med lampor i alla färger. |
| 2:00 | händelse | printStart | sak=kruka |
| 2:02 | händelse | printStart | sak=kruka |
| 2:18 | väntar | ali | Ali här. Din mås stod på min disk i morse. Han köpte inget. |
| 2:20 | händelse | printStart | sak=kruka |
| 2:22 | händelse | printStart | sak=kruka |
| 2:24 | händelse | printStart | sak=kruka |
| 2:26 | väntar | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått rgb-ljuspinne. Och jacuzzi. Gunnar, du hör väl? |
| 2:26 | radio | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått rgb-ljuspinne. Och jacuzzi. Gunnar, du hör väl? |
| 2:26 | skratt | du | Radio-Kjelle |
| 2:26 | sak | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått rgb-ljuspinne. Och jacuzzi. Gunnar, du hör väl? |
| 2:26 | notis |  | 📻 Radio Tippen: Radio Tippen, Kjelle här. Skjulet vid tippen har fått rgb-ljuspinne. Och jacuzzi. Gunnar, du hör väl? |
| 2:26 | röst | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått rgb-ljuspinne. Och jacuzzi. Gunnar, du hör väl? · REAKTION |
| 2:26 | händelse | printStart | sak=kruka |
| 2:28 | händelse | printStart | sak=kruka |
| 2:30 | händelse | printStart | sak=kruka |
| 2:33 | händelse | printStart | sak=kruka |
| 2:34 | klar | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått rgb-ljuspinne. Och jacuzzi. Gunnar, du hör väl? |
| 2:35 | händelse | printStart | sak=kruka |
| 2:37 | händelse | printStart | sak=kruka |
| 2:40 | poolTom | du | 4 repliker använda |
| 2:41 | händelse | printStart | sak=kruka |
| 2:42 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 2:42 | väntar | notis:Skrivare L: Tornet är tomt – mal mer så  | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 2:42 | sak | notis:Skrivare L: Tornet är tomt – mal mer så  | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 2:42 | notis | fel | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 2:44 | klar | notis:Skrivare L: Tornet är tomt – mal mer så  | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 2:45 | ljud | kajsa | Mjau |
| 3:00 | händelse | printStart | sak=kruka |
| 3:00 | skratt | du | Kajsa i skrivaren |
| 3:01 | skratt | du | falsk tuta |
| 3:01 | väntar | värld:TUUT TUUT! | TUUT TUUT! |
| 3:01 | sak | värld:TUUT TUUT! | TUUT TUUT! |
| 3:01 | bubbla |  | TUUT TUUT! |
| 3:03 | händelse | printStart | sak=kruka |
| 3:04 | klar | värld:TUUT TUUT! | TUUT TUUT! |
| 3:04 | händelse | printStart | sak=kruka |
| 3:07 | händelse | printStart | sak=kruka |
| 3:09 | händelse | printStart | sak=kruka |
| 3:11 | händelse | printStart | sak=kruka |
| 3:12 | händelse | printStart | sak=kruka |
| 3:14 | händelse | printStart | sak=kruka |
| 3:16 | händelse | printStart | sak=kruka |
| 3:18 | händelse | printStart | sak=kruka |
| 3:23 | väntar | värld:Mjau. | Mjau. |
| 3:32 | sak | värld:Mjau. | Mjau. |
| 3:32 | bubbla |  | Mjau. |
| 3:33 | händelse | printStart | sak=kruka |
| 3:34 | klar | värld:Mjau. | Mjau. |
| 3:35 | händelse | printStart | sak=kruka |
| 3:37 | händelse | printStart | sak=kruka |
| 3:39 | händelse | printStart | sak=kruka |
| 3:42 | händelse | printStart | sak=kruka |
| 3:44 | händelse | printStart | sak=kruka |
| 3:46 | händelse | printStart | sak=kruka |
| 3:48 | händelse | printStart | sak=kruka |
| 3:51 | händelse | printStart | sak=kruka |
| 3:54 | händelse | printStart | sak=kruka |
| 3:54 | sak | mamma | Okej. Jag erkänner. Det är finare än hemma. |
| 3:54 | sms | mamma | Okej. Jag erkänner. Det är finare än hemma. |
| 3:54 | sms-bubbla | mamma | Okej. Jag erkänner. Det är finare än hemma. |
| 3:54 | röst | mamma | Okej. Jag erkänner. Det är finare än hemma. · STORY |
| 3:55 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 3:55 | struken | notis | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 3:58 | klar | mamma | Okej. Jag erkänner. Det är finare än hemma. |
| 4:08 | toast | skak | handen skakar: fullt |
| 4:09 | väntar | värld:Mjau. | Mjau. |
| 4:13 | sak | värld:Mjau. | Mjau. |
| 4:13 | bubbla |  | Mjau. |
| 4:15 | klar | värld:Mjau. | Mjau. |
| 4:15 | händelse | printStart | sak=kruka |
| 4:17 | händelse | printStart | sak=kruka |
| 4:19 | händelse | printStart | sak=kruka |
| 4:23 | händelse | printStart | sak=kruka |
| 4:25 | händelse | printStart | sak=kruka |
| 4:26 | händelse | printStart | sak=kruka |
| 4:28 | händelse | printStart | sak=kruka |
| 4:30 | händelse | printStart | sak=kruka |
| 4:32 | händelse | printStart | sak=kruka |
| 4:34 | händelse | printStart | sak=kruka |
| 4:37 | händelse | printStart | sak=kruka |
| 4:39 | händelse | printStart | sak=kruka |
| 4:40 | poolTom | du | 4 repliker använda |
| 4:41 | händelse | printStart | sak=kruka |
| 4:41 | skratt | du | Kajsa i skrivaren |
| 4:46 | väntar | värld:Mjau. | Mjau. |
| 4:56 | väntar | värld:TUUT TUUT! | TUUT TUUT! |
| 4:56 | sak | värld:TUUT TUUT! | TUUT TUUT! |
| 4:56 | bubbla |  | TUUT TUUT! |
| 4:56 | händelse | printStart | sak=kruka |
| 4:59 | händelse | printStart | sak=kruka |
| 4:59 | klar | värld:TUUT TUUT! | TUUT TUUT! |
| 5:01 | händelse | printStart | sak=kruka |
| 5:03 | händelse | printStart | sak=kruka |
| 5:05 | händelse | printStart | sak=kruka |
| 5:06 | struken | värld:Mjau. | Mjau. |
| 5:07 | händelse | printStart | sak=kruka |
| 5:18 | väntar | värld:Mjau. | Mjau. |
| 5:22 | sak | värld:Mjau. | Mjau. |
| 5:22 | bubbla |  | Mjau. |
| 5:23 | händelse | printStart | sak=kruka |
| 5:24 | klar | värld:Mjau. | Mjau. |
| 5:26 | händelse | printStart | sak=kruka |
| 5:28 | händelse | printStart | sak=kruka |
| 5:30 | händelse | printStart | sak=kruka |
| 5:32 | händelse | printStart | sak=kruka |
| 5:34 | händelse | printStart | sak=kruka |
| 5:36 | händelse | printStart | sak=kruka |
| 5:38 | händelse | printStart | sak=kruka |
| 5:38 | skratt | du | Kajsa i skrivaren |
| 5:43 | händelse | printStart | sak=kruka |
| 5:44 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 5:44 | väntar | notis:Skrivare L: Tornet är tomt – mal mer så  | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 5:44 | sak | notis:Skrivare L: Tornet är tomt – mal mer så  | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 5:44 | notis | fel | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 5:47 | klar | notis:Skrivare L: Tornet är tomt – mal mer så  | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 5:50 | väntar | värld:Mjau. | Mjau. |
| 5:57 | toast | skak | handen skakar: fullt |
| 6:02 | sak | värld:Mjau. | Mjau. |
| 6:02 | bubbla |  | Mjau. |
| 6:04 | händelse | printStart | sak=kruka |
| 6:04 | klar | värld:Mjau. | Mjau. |
| 6:06 | händelse | printStart | sak=kruka |
| 6:09 | händelse | printStart | sak=kruka |
| 6:10 | händelse | printStart | sak=kruka |
| 6:12 | sak | mamma | Kan jag komma och bada på söndag? Pappa tar med korv. |
| 6:12 | sms | mamma | Kan jag komma och bada på söndag? Pappa tar med korv. |
| 6:12 | sms-bubbla | mamma | Kan jag komma och bada på söndag? Pappa tar med korv. |
| 6:12 | röst | mamma | Kan jag komma och bada på söndag? Pappa tar med korv. · STORY |
| 6:13 | händelse | printStart | sak=kruka |
| 6:15 | händelse | printStart | sak=kruka |
| 6:17 | klar | mamma | Kan jag komma och bada på söndag? Pappa tar med korv. |
| 6:27 | händelse | printStart | sak=kruka |
| 6:29 | skratt | du | falsk tuta |
| 6:30 | händelse | printStart | sak=kruka |
| 6:32 | händelse | printStart | sak=kruka |
| 6:34 | händelse | printStart | sak=kruka |
| 6:36 | händelse | printStart | sak=kruka |
| 6:38 | händelse | printStart | sak=kruka |
| 6:40 | poolTom | du | 4 repliker använda |
| 6:40 | händelse | printStart | sak=kruka |
| 6:44 | skratt | du | däcket rullar iväg |
| 6:50 | väntar | värld:TUUT! Tjena! | TUUT! Tjena! |
| 6:53 | sak | värld:TUUT! Tjena! | TUUT! Tjena! |
| 6:53 | bubbla |  | TUUT! Tjena! |
| 6:53 | händelse | printStart | sak=kruka |
| 6:56 | klar | värld:TUUT! Tjena! | TUUT! Tjena! |
| 6:56 | händelse | printStart | sak=kruka |
| 6:58 | händelse | printStart | sak=kruka |
| 7:00 | händelse | printStart | sak=kruka |
| 7:02 | händelse | printStart | sak=kruka |
| 7:04 | händelse | printStart | sak=kruka |
| 7:06 | händelse | printStart | sak=kruka |
| 7:08 | händelse | printStart | sak=kruka |
| 7:10 | händelse | printStart | sak=kruka |
| 7:12 | händelse | printStart | sak=kruka |
| 7:14 | händelse | printStart | sak=kruka |
| 7:14 | skratt | du | Kajsa i skrivaren |
| 7:16 | händelse | printStart | sak=kruka |
| 7:32 | händelse | printStart | sak=kruka |
| 7:34 | händelse | printStart | sak=kruka |
| 7:36 | händelse | printStart | sak=kruka |
| 7:38 | händelse | printStart | sak=kruka |
| 7:41 | händelse | printStart | sak=kruka |
| 7:43 | händelse | printStart | sak=kruka |
| 7:44 | händelse | printStart | sak=kruka |
| 7:46 | händelse | printStart | sak=kruka |
| 7:48 | händelse | printStart | sak=kruka |
| 7:50 | händelse | printStart | sak=kruka |
| 7:53 | händelse | printStart | sak=kruka |
| 7:54 | händelse | printStart | sak=kruka |
| 7:56 | händelse | printStart | sak=kruka |
| 8:00 | händelse | printStart | sak=kruka |
| 8:01 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 8:01 | väntar | notis:Skrivare L: Tornet är tomt – mal mer så  | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 8:01 | sak | notis:Skrivare L: Tornet är tomt – mal mer så  | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 8:01 | notis | fel | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 8:04 | klar | notis:Skrivare L: Tornet är tomt – mal mer så  | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 8:07 | väntar | värld:Mjau. | Mjau. |
| 8:14 | sak | mamma | Pappa såg bilden. Han sa "aha, vad lugnt då". Det betyder att han är jättestolt. |
| 8:14 | sms | mamma | Pappa såg bilden. Han sa "aha, vad lugnt då". Det betyder att han är jättestolt. |
| 8:14 | sms-bubbla | mamma | Pappa såg bilden. Han sa "aha, vad lugnt då". Det betyder att han är jättestolt. |
| 8:14 | röst | mamma | Pappa såg bilden. Han sa "aha, vad lugnt då". Det betyder att han är jättestolt. · STORY |
| 8:20 | klar | mamma | Pappa såg bilden. Han sa "aha, vad lugnt då". Det betyder att han är jättestolt. |
| 8:22 | struken | ali | Ali här. Din mås stod på min disk i morse. Han köpte inget. |
| 8:24 | händelse | printStart | sak=kruka |
| 8:26 | händelse | printStart | sak=kruka |
| 8:27 | struken | värld:Mjau. | Mjau. |
| 8:28 | händelse | printStart | sak=kruka |
| 8:30 | händelse | printStart | sak=kruka |
| 8:32 | händelse | printStart | sak=kruka |
| 8:34 | händelse | printStart | sak=kruka |
| 8:36 | händelse | printStart | sak=kruka |
| 8:38 | händelse | printStart | sak=kruka |
| 8:40 | poolTom | du | 4 repliker använda |
| 8:40 | händelse | printStart | sak=kruka |
| 8:45 | skratt | du | falsk tuta |
| 8:45 | väntar | värld:TUUT TUUT! | TUUT TUUT! |
| 8:57 | sak | värld:TUUT TUUT! | TUUT TUUT! |
| 8:57 | bubbla |  | TUUT TUUT! |
| 8:58 | händelse | printStart | sak=kruka |
| 9:00 | händelse | printStart | sak=kruka |
| 9:00 | klar | värld:TUUT TUUT! | TUUT TUUT! |
| 9:02 | händelse | printStart | sak=kruka |
| 9:04 | händelse | printStart | sak=kruka |
| 9:06 | händelse | printStart | sak=kruka |
| 9:09 | händelse | printStart | sak=kruka |
| 9:11 | händelse | printStart | sak=kruka |
| 9:14 | händelse | printStart | sak=kruka |
| 9:15 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 9:15 | struken | notis | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 9:28 | toast | skak | handen skakar: fullt |
| 9:30 | väntar | värld:Mjau. | Mjau. |
| 9:33 | sak | värld:Mjau. | Mjau. |
| 9:33 | bubbla |  | Mjau. |
| 9:34 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 9:34 | struken | notis | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 9:35 | klar | värld:Mjau. | Mjau. |
| 9:36 | händelse | printStart | sak=kruka |
| 9:39 | händelse | printStart | sak=kruka |
| 9:41 | händelse | printStart | sak=kruka |
| 9:43 | händelse | printStart | sak=kruka |
| 9:45 | händelse | printStart | sak=kruka |
| 9:47 | händelse | printStart | sak=kruka |
| 9:49 | händelse | printStart | sak=kruka |
| 10:02 | väntar | info:guld | Marken sjönk. Ett äldre lager kom fram. |
| 10:02 | paket |  | sms |
| 10:02 | väntar | rolf | Tjock-TV:n. Ja tittade på Melodifestivalen på en sån. Birgitta röstade på alla. MVH ROLF |
| 10:02 | sak | info:guld | Marken sjönk. Ett äldre lager kom fram. |
| 10:02 | kvitto-visas | info:guld | Marken sjönk. Ett äldre lager kom fram. |
| 10:02 | toast | guld | Marken sjönk. Ett äldre lager kom fram. |
| 10:04 | klar | info:guld | Marken sjönk. Ett äldre lager kom fram. |
| 10:09 | händelse | printStart | sak=kruka |
| 10:11 | händelse | printStart | sak=kruka |
| 10:13 | händelse | printStart | sak=kruka |
| 10:15 | händelse | printStart | sak=kruka |
| 10:17 | händelse | printStart | sak=kruka |
| 10:19 | händelse | printStart | sak=kruka |
| 10:21 | händelse | printStart | sak=kruka |
| 10:23 | händelse | printStart | sak=kruka |
| 10:25 | händelse | printStart | sak=kruka |
| 10:29 | händelse | printStart | sak=kruka |
| 10:30 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 10:30 | väntar | notis:Skrivare L: Tornet är tomt – mal mer så  | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 10:30 | sak | notis:Skrivare L: Tornet är tomt – mal mer så  | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 10:30 | notis | fel | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 10:33 | klar | notis:Skrivare L: Tornet är tomt – mal mer så  | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 10:33 | väntar | värld:Mjau. | Mjau. |
| 10:40 | poolTom | du | 4 repliker använda |
| 10:40 | väntar | värld:TUUT! Hej grannen! | TUUT! Hej grannen! |
| 10:47 | sak | värld:Mjau. | Mjau. |
| 10:47 | bubbla |  | Mjau. |
| 10:50 | klar | värld:Mjau. | Mjau. |
| 10:50 | händelse | printStart | sak=kruka |
| 10:52 | händelse | printStart | sak=kruka |
| 10:54 | händelse | printStart | sak=kruka |
| 10:56 | händelse | printStart | sak=kruka |
| 10:58 | sak | värld:TUUT! Hej grannen! | TUUT! Hej grannen! |
| 10:58 | bubbla |  | TUUT! Hej grannen! |
| 10:59 | händelse | printStart | sak=kruka |
| 11:01 | klar | värld:TUUT! Hej grannen! | TUUT! Hej grannen! |
| 11:01 | händelse | printStart | sak=kruka |
| 11:05 | väntar | värld:Mjau. | Mjau. |
| 11:06 | väntar | info:guld | Marken sjönk. Ett äldre lager kom fram. |
| 11:06 | paket |  | sms |
| 11:06 | väntar | rolf | ROLFS ROCKERS. Nittonhundraåttiosju. Vi va STORA i Hudiksvall. En spelning. MVH ROLF |
| 11:06 | sak | info:guld | Marken sjönk. Ett äldre lager kom fram. |
| 11:06 | kvitto-visas | info:guld | Marken sjönk. Ett äldre lager kom fram. |
| 11:06 | toast | guld | Marken sjönk. Ett äldre lager kom fram. |
| 11:08 | klar | info:guld | Marken sjönk. Ett äldre lager kom fram. |
| 11:12 | händelse | printStart | sak=kruka |
| 11:14 | händelse | printStart | sak=kruka |
| 11:15 | händelse | printStart | sak=kruka |
| 11:17 | sak | värld:Mjau. | Mjau. |
| 11:17 | bubbla |  | Mjau. |
| 11:18 | händelse | printStart | sak=kruka |
| 11:19 | klar | värld:Mjau. | Mjau. |
| 11:20 | händelse | printStart | sak=kruka |
| 12:13 | skratt | du | falsk tuta |
| 12:24 | händelse | printStart | sak=n2_vas |
| 12:27 | toast | guld | ✅ |
| 12:27 | händelse | printKlar | sak=n2_vas n=33 |
| 12:27 | nej | du | Ta ut designvas i röd petg |
| 12:27 | toast | fickskylt | Fulla fickor |
| 12:27 | fullaFickor | du | n2_vas |
| 12:28 | händelse | tagitUrPrint | sak=n2_vas n=1 |
| 12:43 | webb | du | packade 2 n2_vas |
| 12:58 | väntar | info:bra | 📦 Paketet till Kenneth på bilskroten ligger i postlådan – Rolf tar det till posten |
| 12:58 | sak | info:bra | 📦 Paketet till Kenneth på bilskroten ligger i postlådan – Rolf tar det till posten |
| 12:58 | kvitto-visas | info:bra | 📦 Paketet till Kenneth på bilskroten ligger i postlådan – Rolf tar det till posten |
| 12:58 | toast | bra | 📦 Paketet till Kenneth på bilskroten ligger i postlådan – Rolf tar det till posten |
| 13:00 | klar | info:bra | 📦 Paketet till Kenneth på bilskroten ligger i postlådan – Rolf tar det till posten |
| 13:03 | händelse | printStart | sak=n3_stol |
| 13:09 | poolTom | du | 4 repliker använda |
| 13:10 | toast | guld | ✅ |
| 13:10 | händelse | printKlar | sak=n3_stol n=9 |
| 13:11 | händelse | tagitUrPrint | sak=n3_stol n=1 |
| 13:18 | röst | ali | Ibland sätter jag på radion bara för att höra någon annan säga i dag. Det känns som sällskap. · STORY |
| 13:18 | butiksbubbla | ali | Ibland sätter jag på radion bara för att höra någon annan säga i dag. Det känns som sällskap. |
| 13:20 | aliSalt | ali | 16000 |
| 13:20 | aliSalt | ali | 180 |
| 13:20 | aliSalt | ali | 171 |
| 13:20 | aliSalt | ali | 162 |
| 13:20 | aliSalt | ali | 154 |
| 13:21 | aliSalt | ali | 6 |
| 13:24 | väntar | info:guld | 🏡 Du äger marken du bor på! Inte längre en hobo dweller. |
| 13:24 | paket |  | sms |
| 13:24 | väntar | rolf | Bengt-Åke sa ja! Han ville först ha 22 500 men ja sa att du städat hela hans skräpiga mark gratis. Då blev de 12.5. Grattis, markägare. /R |
| 13:24 | paket |  | sms |
| 13:24 | väntar | mamma | Pappa säger att du har köpt mark? Hur? Vems? Har du skrivit på något? Skicka papperen till mig så läser jag. |
| 13:24 | sak | info:guld | 🏡 Du äger marken du bor på! Inte längre en hobo dweller. |
| 13:24 | kvitto-visas | info:guld | 🏡 Du äger marken du bor på! Inte längre en hobo dweller. |
| 13:24 | toast | guld | 🏡 Du äger marken du bor på! Inte längre en hobo dweller. |
| 13:24 | händelse | malKlart | id=m16-kop-tomten-bor del=Dag 16 – Egen mark nasta=m16-lagg-flagan-bengt |
| 13:24 | väntar | du | Lägg flagan i Bengt-Åkes brevlåda. |
| 13:24 | MÅL |  | Lägg flagan i Bengt-Åkes brevlåda |
| 13:26 | klar | info:guld | 🏡 Du äger marken du bor på! Inte längre en hobo dweller. |
| 13:26 | målruta |  | Lägg flagan i Bengt-Åkes brevlåda |
| 13:28 | kvittens-bock |  | ✓ Köp tomten du bor på |
| 13:28 | sak | du | Lägg flagan i Bengt-Åkes brevlåda. |
| 13:28 | pil |  | Lägg flagan i Bengt-Åkes brevlåda |
| 13:28 | röst | du | Lägg flagan i Bengt-Åkes brevlåda. · MÅL |
| 13:31 | klar | du | Lägg flagan i Bengt-Åkes brevlåda. |
| 13:39 | sak | mamma | Pappa säger att du har köpt mark? Hur? Vems? Har du skrivit på något? Skicka papperen till mig så läser jag. |
| 13:39 | sms | mamma | Pappa säger att du har köpt mark? Hur? Vems? Har du skrivit på något? Skicka papperen till mig så läser jag. |
| 13:39 | sms-bubbla | mamma | Pappa säger att du har köpt mark? Hur? Vems? Har du skrivit på något? Skicka papperen till mig så läser jag. |
| 13:39 | röst | mamma | Pappa säger att du har köpt mark? Hur? Vems? Har du skrivit på något? Skicka papperen till mig så läser jag. · STORY |
| 13:42 | paket |  | brev |
| 13:42 | väntar | bengt | PAPPA LETADE HELA LIVET. HMPF. GÅ IN DÅ. FÖRSTA KLUMPEN ÄR MIN. DEN SKA TILL PAPPAS GRAV. |
| 13:42 | paket |  | ge → brev |
| 13:42 | väntar |  | (läget ändras) |
| 13:42 | väntar | rolf | Svackan. Ja å Birgitta badade i floden där. Ja har vinkelslipen, men skivan e slut. Printa en kapskiva åt mej, i kolfiber. /R |
| 13:42 | händelse | malKlart | id=m16-lagg-flagan-bengt del=Dag 16 – Egen mark nasta=m16-ge-rolf-kapskiva |
| 13:42 | väntar | du | Ge Rolf en kapskiva i kolfiber. |
| 13:42 | MÅL |  | Ge Rolf en kapskiva i kolfiber |
| 13:45 | målruta |  | Ge Rolf en kapskiva i kolfiber |
| 13:46 | kvittens-bock |  | ✓ Lägg flagan i Bengt-Åkes brevlåda |
| 13:48 | klar | mamma | Pappa säger att du har köpt mark? Hur? Vems? Har du skrivit på något? Skicka papperen till mig så läser jag. |
| 13:50 | sak | du | Ge Rolf en kapskiva i kolfiber. |
| 13:50 | pil |  | Ge Rolf en kapskiva i kolfiber |
| 13:50 | röst | du | Ge Rolf en kapskiva i kolfiber. · MÅL |
| 13:50 | nick |  | nick:110 |
| 13:52 | väntar | notis:📔 Prestation: HMPF · +3 respekt | 📔 Prestation: HMPF · +3 respekt |
| 13:52 | klar | du | Ge Rolf en kapskiva i kolfiber. |
| 13:54 | sak | bengt | PAPPA LETADE HELA LIVET. HMPF. GÅ IN DÅ. FÖRSTA KLUMPEN ÄR MIN. DEN SKA TILL PAPPAS GRAV. |
| 13:54 | lapp | Lapp från Bengt-Åke | PAPPA LETADE HELA LIVET. HMPF. GÅ IN DÅ. FÖRSTA KLUMPEN ÄR MIN. DEN SKA TILL PAPPAS GRAV. |
| 13:54 | röst | bengt | PAPPA LETADE HELA LIVET. HMPF. GÅ IN DÅ. FÖRSTA KLUMPEN ÄR MIN. DEN SKA TILL PAPPAS GRAV. · STORY |
| 13:56 | paket |  | sms |
| 13:56 | väntar | rolf | Kajsa hitta en låda kolfiberrester bakom husvagnen. Hon ville int ha dom. Grinden. /R |
| 14:02 | klar | bengt | PAPPA LETADE HELA LIVET. HMPF. GÅ IN DÅ. FÖRSTA KLUMPEN ÄR MIN. DEN SKA TILL PAPPAS GRAV. |
| 14:04 | struken | notis:📔 Prestation: HMPF · +3 respekt | 📔 Prestation: HMPF · +3 respekt |
| 14:04 | sak |  | (läget ändras) |
| 14:04 | klar |  | (läget ändras) |
| 14:06 | väntar | foto | Min mark |
| 14:06 | paket |  | tanke |
| 14:06 | tanke | du | Nu kan ingen säga att jag inte hör hemma här. |
| 14:06 | väntar | du | Nu kan ingen säga att jag inte hör hemma här. |
| 14:08 | sak | rolf | Svackan. Ja å Birgitta badade i floden där. Ja har vinkelslipen, men skivan e slut. Printa en kapskiva åt mej, i kolfiber. /R |
| 14:08 | lapp | Brev från Rolf | Svackan. Ja å Birgitta badade i floden där. Ja har vinkelslipen, men skivan e slut. Printa en kapskiva åt mej, i kolfiber. /R |
| 14:08 | röst | rolf | Svackan. Ja å Birgitta badade i floden där. Ja har vinkelslipen, men skivan e slut. Printa en kapskiva åt mej, i kolfiber. /R · STORY |
| 14:09 | händelse | printStart | sak=kapskiva |
| 14:09 | skratt | du | Kajsa i skrivaren |
| 14:12 | toast | guld | ✅ |
| 14:12 | händelse | printKlar | sak=kapskiva n=1 |
| 14:12 | händelse | tagitUrPrint | sak=kapskiva n=1 |
| 14:19 | klar | rolf | Svackan. Ja å Birgitta badade i floden där. Ja har vinkelslipen, men skivan e slut. Printa en kapskiva åt mej, i kolfiber. /R |
| 14:24 | händelse | malKlart | id=m16-ge-rolf-kapskiva del=Dag 16 – Egen mark nasta=sov16 |
| 14:24 | paket |  | lapp |
| 14:24 | lapp | 📔 Dagbok | Dag 16 är slut. Nu vet kommunen att jag bor HÄR. Det ska blåsa hårt i natt. |
| 14:24 | meddelande | du | Dag 16 är slut. Nu vet kommunen att jag bor HÄR. Det ska blåsa hårt i natt. |
| 14:24 | dagbokkort | du | Dag 16 är slut. Nu vet kommunen att jag bor HÄR. Det ska blåsa hårt i natt. |
| 14:24 | MÅL |  | Klart för idag – sov när du vill |
| 14:24 | röst | du | Dag 16 är slut. Nu vet kommunen att jag bor HÄR. Det ska blåsa hårt i natt. · STORY |
| 14:32 | händelse | brevLast | id=kvall16 |
| 14:32 | målruta |  | Klart för idag – sov när du vill |
| 14:32 | väntar | notis:🌇 Klockan är 21. Ali slår igen luckan.  | 🌇 Klockan är 21. Ali slår igen luckan. Dagens jobb är klart – gå in i skjulet och sov i sängen. |
| 14:34 | sak | du | (nytt mål i rutan) |
| 14:34 | pil |  | Klart för idag – sov när du vill |
| 14:34 | klar | du | (nytt mål i rutan) |
| 14:37 | sak | foto | Min mark |
| 14:37 | foto | du | Min mark |
| 14:38 | skratt | du | falsk tuta |
| 14:40 | klar | foto | Min mark |
| 14:41 | paket |  | sms |
| 14:41 | väntar | ali | Ali här. Hämtade lådan klockan sex. 173 saker, 8 477 kr på ditt konto. Grossistpris. Jag har också en hyra. |
| 14:41 | webbBetalt | du | 2554 |

<details><summary>Botens handlingar dag 16</summary>

- 0:00 — dag 16 börjar — (4516 kr)
- 0:15 popup: "FORTSÄTT" (4516 kr)
- 0:28 gå till Rolfs postlåda (30 m) (4516 kr)
- 0:34 panel: "Rolfs postlåda
Det här låg i l" (10516 kr)
- 0:36 gå till skrivaren (10 m) (10516 kr)
- 0:38 printar Blomkruka (10516 kr)
- 1:01 gå till kvarnen (30 m) (10516 kr)
- 1:10 plockar 6 skräp på tippen (bär max 16) (10516 kr)
- 1:13 gå till kvarnen (14 m) (10516 kr)
- 1:36 plockar 4 skräp på tippen (bär max 16) (10516 kr)
- 1:39 gå till kvarnen (12 m) (10516 kr)
- 2:16 plockar 11 skräp på tippen (bär max 16) (10516 kr)
- 2:19 gå till kvarnen (17 m) (10516 kr)
- 2:39 gå till skrivaren (7 m) (10516 kr)
- 2:41 printar Blomkruka (10516 kr)
- 2:53 plockar 9 skräp på tippen (bär max 16) (10516 kr)
- 2:56 gå till kvarnen (16 m) (10516 kr)
- 3:28 plockar 2 skräp på tippen (bär max 16) (10516 kr)
- 3:31 gå till kvarnen (14 m) (10516 kr)
- 3:52 gå till skrivaren (7 m) (10516 kr)
- 3:54 printar Blomkruka (10516 kr)
- 4:09 plockar 10 skräp på tippen (bär max 16) (10516 kr)
- 4:12 gå till kvarnen (18 m) (10516 kr)
- 4:52 plockar 7 skräp på tippen (bär max 16) (10516 kr)
- 4:55 gå till kvarnen (15 m) (10516 kr)
- 5:18 plockar 7 skräp på tippen (bär max 16) (10516 kr)
- 5:21 gå till kvarnen (15 m) (10516 kr)
- 5:41 gå till skrivaren (7 m) (10516 kr)
- 5:43 printar Blomkruka (10516 kr)
- 5:58 plockar 8 skräp på tippen (bär max 16) (10516 kr)
- 6:01 gå till kvarnen (17 m) (10516 kr)
- 6:23 plockar 3 skräp på tippen (bär max 16) (10516 kr)
- 6:26 gå till kvarnen (16 m) (10516 kr)
- 6:49 plockar 5 skräp på tippen (bär max 16) (10516 kr)
- 6:52 gå till kvarnen (16 m) (10516 kr)
- 7:25 plockar 6 skräp på tippen (bär max 16) (10516 kr)
- 7:29 gå till kvarnen (16 m) (10516 kr)
- 7:59 gå till skrivaren (7 m) (10516 kr)
- 8:00 printar Blomkruka (10516 kr)
- 8:16 plockar 11 skräp på tippen (bär max 16) (10516 kr)
- 8:20 gå till kvarnen (17 m) (10516 kr)
- 8:53 plockar 6 skräp på tippen (bär max 16) (10516 kr)
- 8:57 gå till kvarnen (16 m) (10516 kr)
- 9:12 gå till skrivaren (7 m) (10516 kr)
- 9:14 printar Blomkruka (10516 kr)
- 9:29 plockar 9 skräp på tippen (bär max 16) (10516 kr)
- 9:32 gå till kvarnen (17 m) (10516 kr)
- 10:03 plockar 10 skräp på tippen (bär max 16) (10516 kr)
- 10:06 gå till kvarnen (17 m) (10516 kr)
- 10:27 gå till skrivaren (7 m) (10516 kr)
- 10:29 printar Blomkruka (10516 kr)
- 10:45 plockar 8 skräp på tippen (bär max 16) (10516 kr)
- 10:47 gå till kvarnen (9 m) (10516 kr)
- 11:11 gå till kvarnen (15 m) (10516 kr)
- 11:21 inget skräp kvar att mala – väntar på sopbilen (10516 kr)
- 11:41 inget skräp kvar att mala – väntar på sopbilen (10516 kr)
- 12:01 inget skräp kvar att mala – väntar på sopbilen (10516 kr)
- 12:21 inget skräp kvar att mala – väntar på sopbilen (10516 kr)
- 12:23 gå till skrivaren (6 m) (10516 kr)
- 12:24 printar Designvas i röd PETG (10516 kr)
- 12:28 tar ut 1 st ur skrivaren (10516 kr)
- 12:28 fulla fickor – lägger ra_flipper i kistan (10516 kr)
- 12:33 gå till datorn (23 m) (10516 kr)
- 12:42 panel: "Webbshopen · Soptippsvägen 1
B" (10516 kr)
- 12:51 panel: "Webbshopen · Soptippsvägen 1
B" (10516 kr)
- 12:58 gå till Rolfs postlåda (paket) (29 m) (10516 kr)
- 12:58 webbshop: 1 paket i postlådan (10516 kr)
- 12:58 tjänar pengar till tomten du bor på: 10516/12500 kr → printar kolfiberstol (16000 kr) (10516 kr)
- 13:01 gå till skrivaren (15 m) (10516 kr)
- 13:03 printar Kolfiberstol (10516 kr)
- 13:11 tar ut 1 st ur skrivaren (10516 kr)
- 13:18 gå till Ali (34 m) (10516 kr)
- 13:18 öppnar Alis butik – sälja (10516 kr)
- 13:21 säljer hos Ali: +16673 kr (27189 kr)
- 13:24 gå till tavlan vid vägen (6 m) (27189 kr)
- 13:24 köper tomten du bor på (12500 kr) (14689 kr)
- 13:42 gå till Bengt-Åkes brevlåda (42 m) (14689 kr)
- 14:08 gå till skrivaren (66 m) (14689 kr)
- 14:09 printar Kapskiva i kolfiber (14689 kr)
- 14:13 tar ut 1 st ur skrivaren (14689 kr)
- 14:24 gå till Rolfs postlåda (16 m) (14689 kr)
- 14:32 popup: "FORTSÄTT" (14689 kr)
- 14:38 gå till sängen (28 m) (14689 kr)

</details>

## Dag 17

| Tid | Källa | Vem | Text |
|---|---|---|---|
| 14:41 | vara | ali | n2_vas |
| 14:41 | händelse | malKlart | id=sov16 del=Dag 16 – Egen mark nasta=m17-kop-angen-oster |
| 14:41 | MÅL |  | Köp ängen i öster – tavlan vid vägen |
| 0:01 | händelse | dagenBorjar | dag=17 |
| 0:01 | meddelande | du | Dag 17. 5 dagar till jul. Utan pengar blir det inget hus före jul. |
| 0:01 | dagbokkort | du | Ängen · Dag 17. 5 dagar till jul. Utan pengar blir det inget hus före jul. |
| 0:01 | röst | du | Ängen. Dag 17. 5 dagar till jul. Utan pengar blir det inget hus före jul. · STORY |
| 0:15 | händelse | morgonkortStangt | dag=17 |
| 0:15 | struken | kedja | d17 |
| 0:15 | paket |  | tanke → sms |
| 0:15 | tanke | du | Fem dagar kvar. Och jag är tillbaka där jag började. |
| 0:15 | väntar | du | Fem dagar kvar. Och jag är tillbaka där jag började. |
| 0:15 | väntar | rolf | Såg att plåten låg på marken. Ja å Ali kommer o hjälper dej me ett riktigt hus. /R |
| 0:15 | väntar | du | Köp ängen i öster – tavlan vid vägen. |
| 0:19 | målruta |  | Köp ängen i öster – tavlan vid vägen |
| 0:20 | sak | du | Köp ängen i öster – tavlan vid vägen. |
| 0:20 | pil |  | Köp ängen i öster – tavlan vid vägen |
| 0:20 | röst | du | Köp ängen i öster – tavlan vid vägen. · MÅL |
| 0:24 | klar | du | Köp ängen i öster – tavlan vid vägen. |
| 0:26 | poolTom | du | 4 repliker använda |
| 0:32 | sak | du | Nu kan ingen säga att jag inte hör hemma här. |
| 0:32 | notis | tanke | 💭 Nu kan ingen säga att jag inte hör hemma här. |
| 0:32 | röst | du | Nu kan ingen säga att jag inte hör hemma här. · STORY |
| 0:36 | klar | du | Nu kan ingen säga att jag inte hör hemma här. |
| 0:36 | händelse | printStart | sak=n2_vas |
| 0:38 | struken | notis:🌇 Klockan är 21. Ali slår igen luckan.  | 🌇 Klockan är 21. Ali slår igen luckan. Dagens jobb är klart – gå in i skjulet och sov i sängen. |
| 0:39 | toast | guld | ✅ |
| 0:39 | händelse | printKlar | sak=n2_vas n=34 |
| 0:39 | händelse | tagitUrPrint | sak=n2_vas n=1 |
| 0:44 | sak | du | Fem dagar kvar. Och jag är tillbaka där jag började. |
| 0:44 | notis | tanke | 💭 Fem dagar kvar. Och jag är tillbaka där jag började. |
| 0:44 | röst | du | Fem dagar kvar. Och jag är tillbaka där jag började. · STORY |
| 0:46 | paket |  | replik → replik |
| 0:46 | väntar | rolf | Hon älska å bada hä. Gå du. Ja står hä en stund. |
| 0:46 | väntar | rolf | Birgittas. Hon vaska för skoj. Hitta aldrig nåt. |
| 0:48 | klar | du | Fem dagar kvar. Och jag är tillbaka där jag började. |
| 0:53 | sak | rolf | Hon älska å bada hä. Gå du. Ja står hä en stund. |
| 0:53 | notis |  | Rolf: ”Hon älska å bada hä. Gå du. Ja står hä en stund.” |
| 0:53 | röst | rolf | Hon älska å bada hä. Gå du. Ja står hä en stund. · STORY |
| 0:54 | webb | du | packade 1 n2_vas |
| 0:57 | klar | rolf | Hon älska å bada hä. Gå du. Ja står hä en stund. |
| 1:03 | sak | rolf | Birgittas. Hon vaska för skoj. Hitta aldrig nåt. |
| 1:03 | notis |  | Rolf: ”Birgittas. Hon vaska för skoj. Hitta aldrig nåt.” |
| 1:03 | röst | rolf | Birgittas. Hon vaska för skoj. Hitta aldrig nåt. · STORY |
| 1:07 | klar | rolf | Birgittas. Hon vaska för skoj. Hitta aldrig nåt. |
| 1:09 | väntar | info:bra | 📦 Paketet till Två syskon i Lund ligger i postlådan – Rolf tar det till posten |
| 1:09 | sak | info:bra | 📦 Paketet till Två syskon i Lund ligger i postlådan – Rolf tar det till posten |
| 1:09 | kvitto-visas | info:bra | 📦 Paketet till Två syskon i Lund ligger i postlådan – Rolf tar det till posten |
| 1:09 | toast | bra | 📦 Paketet till Två syskon i Lund ligger i postlådan – Rolf tar det till posten |
| 1:11 | klar | info:bra | 📦 Paketet till Två syskon i Lund ligger i postlådan – Rolf tar det till posten |
| 1:14 | händelse | printStart | sak=n3_stol |
| 1:21 | toast | guld | ✅ |
| 1:21 | händelse | printKlar | sak=n3_stol n=10 |
| 1:22 | händelse | tagitUrPrint | sak=n3_stol n=1 |
| 1:30 | poolTom | ali | 4 repliker använda |
| 1:31 | aliSalt | ali | 120 |
| 1:31 | aliSalt | ali | 114 |
| 1:32 | aliSalt | ali | 108 |
| 1:32 | aliSalt | ali | 16000 |
| 1:35 | väntar | info:guld | 🌲 Ängen i öster är din! Gärdesgården har flyttats – där får du ställa saker nu. |
| 1:35 | paket |  | sms |
| 1:35 | väntar | rolf | Ängen e din. Bengt-Åke frågade vad du ska ha den till. Ja sa solpaneler. Han trodde ja sa "sol-paella". Han va glad ändå. /R |
| 1:35 | sak | info:guld | 🌲 Ängen i öster är din! Gärdesgården har flyttats – där får du ställa saker nu. |
| 1:35 | kvitto-visas | info:guld | 🌲 Ängen i öster är din! Gärdesgården har flyttats – där får du ställa saker nu. |
| 1:35 | toast | guld | 🌲 Ängen i öster är din! Gärdesgården har flyttats – där får du ställa saker nu. |
| 1:35 | händelse | malKlart | id=m17-kop-angen-oster del=Dag 17 – Ängen nasta=m17-vaska-guld-floden |
| 1:35 | väntar | du | Vaska guld i floden. |
| 1:35 | MÅL |  | Vaska guld i floden |
| 1:37 | klar | info:guld | 🌲 Ängen i öster är din! Gärdesgården har flyttats – där får du ställa saker nu. |
| 1:37 | målruta |  | Vaska guld i floden |
| 1:39 | kvittens-bock |  | ✓ Köp ängen i öster – tavlan vid vägen |
| 1:39 | sak | du | Vaska guld i floden. |
| 1:39 | pil |  | Vaska guld i floden |
| 1:39 | röst | du | Vaska guld i floden. · MÅL |
| 1:41 | klar | du | Vaska guld i floden. |
| 1:43 | paket |  | sms |
| 1:43 | väntar | rolf | Nån har slängt dunkar som glittrar. Guld, tror ja. Eller glitter. Dom står vid grinden. /R |
| 1:43 | paket |  | sms |
| 1:43 | väntar | mamma | Jag har skickat porslinshund från mormors dödsbo med Rolf. Den ligger i postlådan. |
| 1:56 | sak | mamma | Jag har skickat porslinshund från mormors dödsbo med Rolf. Den ligger i postlådan. |
| 1:56 | sms | mamma | Jag har skickat porslinshund från mormors dödsbo med Rolf. Den ligger i postlådan. |
| 1:56 | sms-bubbla | mamma | Jag har skickat porslinshund från mormors dödsbo med Rolf. Den ligger i postlådan. |
| 1:56 | röst | mamma | Jag har skickat porslinshund från mormors dödsbo med Rolf. Den ligger i postlådan. · STORY |
| 2:03 | klar | mamma | Jag har skickat porslinshund från mormors dödsbo med Rolf. Den ligger i postlådan. |
| 2:06 | paket |  | tanke |
| 2:06 | tanke | du | En kapsyl. |
| 2:06 | väntar | du | En kapsyl. |
| 2:06 | händelse | malKlart | id=m17-vaska-guld-floden del=Dag 17 – Ängen nasta=m17-solpark2 |
| 2:06 | målruta |  | Printa och sälj |
| 2:06 | MÅL |  | Printa och sälj |
| 2:07 | sak | du | (nytt mål i rutan) |
| 2:07 | pil |  | Printa och sälj |
| 2:07 | klar | du | (nytt mål i rutan) |
| 2:08 | paket |  | tanke |
| 2:08 | tanke | du | En kapsyl. Igen. |
| 2:08 | struken | du | En kapsyl. |
| 2:08 | väntar | du | En kapsyl. Igen. |
| 2:10 | kvittens-bock |  | ✓ Vaska guld i floden |
| 2:11 | paket |  | tanke |
| 2:11 | tanke | du | En tand. Jag tänker inte fråga. |
| 2:11 | väntar | du | En tand. Jag tänker inte fråga. |
| 2:11 | skratt | du | vaskmiss |
| 2:18 | sak | du | En kapsyl. Igen. |
| 2:18 | notis | tanke | 💭 En kapsyl. Igen. |
| 2:18 | röst | du | En kapsyl. Igen. · REAKTION |
| 2:21 | väntar | kjelle | Inget nytt längs vägen i dag. Bara måsar. Hälsningar till Gunnar. |
| 2:21 | radio | kjelle | Inget nytt längs vägen i dag. Bara måsar. Hälsningar till Gunnar. |
| 2:21 | skratt | du | Radio-Kjelle |
| 2:21 | händelse | printStart | sak=n3_stol |
| 2:21 | klar | du | En kapsyl. Igen. |
| 2:26 | poolTom | du | 4 repliker använda |
| 2:27 | toast | guld | ✅ |
| 2:27 | händelse | printKlar | sak=n3_stol n=11 |
| 2:28 | nej | du | Ta ut kolfiberstol |
| 2:28 | toast | fickskylt | Fulla fickor |
| 2:28 | fullaFickor | du | n3_stol |
| 2:29 | händelse | tagitUrPrint | sak=n3_stol n=1 |
| 2:30 | sak | du | En tand. Jag tänker inte fråga. |
| 2:30 | notis | tanke | 💭 En tand. Jag tänker inte fråga. |
| 2:30 | röst | du | En tand. Jag tänker inte fråga. · REAKTION |
| 2:33 | klar | du | En tand. Jag tänker inte fråga. |
| 2:38 | aliSalt | ali | 15200 |
| 2:39 | aliSalt | ali | 170 |
| 2:39 | aliSalt | ali | 162 |
| 2:43 | sak | kjelle | Inget nytt längs vägen i dag. Bara måsar. Hälsningar till Gunnar. |
| 2:43 | notis |  | 📻 Radio Tippen: Inget nytt längs vägen i dag. Bara måsar. Hälsningar till Gunnar. |
| 2:43 | röst | kjelle | Inget nytt längs vägen i dag. Bara måsar. Hälsningar till Gunnar. · REAKTION |
| 2:48 | klar | kjelle | Inget nytt längs vägen i dag. Bara måsar. Hälsningar till Gunnar. |
| 2:48 | händelse | printStart | sak=n3_stol |
| 2:55 | toast | guld | ✅ |
| 2:55 | händelse | printKlar | sak=n3_stol n=12 |
| 2:56 | händelse | tagitUrPrint | sak=n3_stol n=1 |
| 2:57 | väntar | rolf | 31 år på bilen och ja har aldrig backat in i nåt. Utom en gång. En brevlåda. Den hade det kommit. /R |
| 3:05 | aliSalt | ali | 14440 |
| 3:16 | händelse | printStart | sak=n3_stol |
| 3:16 | skratt | du | Kajsa i skrivaren |
| 3:22 | toast | guld | ✅ |
| 3:22 | händelse | printKlar | sak=n3_stol n=13 |
| 3:23 | händelse | tagitUrPrint | sak=n3_stol n=1 |
| 3:32 | aliSalt | ali | 13718 |
| 3:38 | skratt | du | falsk tuta |
| 3:43 | händelse | printStart | sak=n3_stol |
| 3:50 | toast | guld | ✅ |
| 3:50 | händelse | printKlar | sak=n3_stol n=14 |
| 3:51 | händelse | tagitUrPrint | sak=n3_stol n=1 |
| 4:00 | aliSalt | ali | 13032 |
| 4:11 | händelse | printStart | sak=n3_stol |
| 4:17 | skratt | du | plastspagetti |
| 4:17 | toast | guld | ✅ |
| 4:17 | händelse | printKlar | sak=n3_stol n=15 |
| 4:18 | händelse | tagitUrPrint | sak=spagetti n=1 |
| 4:26 | poolTom | du | 4 repliker använda |
| 4:27 | skratt | du | Ali köper konst |
| 4:27 | aliSalt | ali | 3 |
| 4:37 | händelse | printStart | sak=n3_stol |
| 4:43 | toast | guld | ✅ |
| 4:43 | händelse | printKlar | sak=n3_stol n=16 |
| 4:45 | händelse | tagitUrPrint | sak=n3_stol n=1 |
| 4:54 | aliSalt | ali | 12380 |
| 5:04 | händelse | printStart | sak=n3_stol |
| 5:11 | skratt | du | plastspagetti |
| 5:11 | toast | guld | ✅ |
| 5:11 | händelse | printKlar | sak=n3_stol n=17 |
| 5:12 | händelse | tagitUrPrint | sak=spagetti n=1 |
| 5:21 | skratt | du | Ali köper konst |
| 5:21 | aliSalt | ali | 3 |
| 5:24 | upplåst | strom | solpark2 |
| 5:24 | brott | RESERV | solpark2 (strom 0 av 15) |
| 5:24 | händelse | upplast | id=solpark2 flask=strom |
| 5:24 | paket |  | sms |
| 5:24 | väntar | ali | Ali här. Solcellspark nummer två. Ängen är din nu. Sätt den där. |
| 5:24 | sak | ali | Ali här. Solcellspark nummer två. Ängen är din nu. Sätt den där. |
| 5:24 | sms | ali | Ali här. Solcellspark nummer två. Ängen är din nu. Sätt den där. |
| 5:24 | sms-bubbla | ali | Ali här. Solcellspark nummer två. Ängen är din nu. Sätt den där. |
| 5:24 | röst | ali | Ali här. Solcellspark nummer två. Ängen är din nu. Sätt den där. · STORY |
| 5:29 | klar | ali | Ali här. Solcellspark nummer två. Ängen är din nu. Sätt den där. |
| 5:47 | skratt | du | däcket rullar iväg |
| 5:54 | skratt | du | falsk tuta |
| 6:00 | struken | ali | Ali här. Hämtade lådan klockan sex. 173 saker, 8 477 kr på ditt konto. Grossistpris. Jag har också en hyra. |
| 6:26 | poolTom | du | 4 repliker använda |
| 8:26 | poolTom | du | 4 repliker använda |
| 9:22 | skratt | du | falsk tuta |
| 9:27 | väntar | ali | Radion säger regn. Radion säger alltid regn. |
| 9:27 | sak | ali | Radion säger regn. Radion säger alltid regn. |
| 9:27 | röst | ali | Radion säger regn. Radion säger alltid regn. · SMÅPRAT |
| 9:28 | bubbla |  | Radion säger regn. Radion säger alltid regn. |
| 9:31 | klar | ali | Radion säger regn. Radion säger alltid regn. |
| 9:39 | skratt | du | kvarnen rapar |
| 9:42 | toast | guld | 🧵 |
| 9:43 | händelse | printStart | sak=n2_vas |
| 9:44 | väntar | värld:TUUT! Hej grannen! | TUUT! Hej grannen! |
| 9:44 | sak | värld:TUUT! Hej grannen! | TUUT! Hej grannen! |
| 9:44 | bubbla |  | TUUT! Hej grannen! |
| 9:46 | toast | guld | ✅ |
| 9:46 | händelse | printKlar | sak=n2_vas n=35 |
| 9:46 | händelse | tagitUrPrint | sak=n2_vas n=1 |
| 9:47 | klar | värld:TUUT! Hej grannen! | TUUT! Hej grannen! |
| 9:49 | toast | guld | 🧵 |
| 9:55 | aliSalt | ali | 1185 |
| 9:59 | skratt | du | Alis dyr-pling |
| 9:59 | toast | guld | 3D-modell köpt – printa solcellspark på skrivaren |
| 9:59 | händelse | kopt | sak=solpark |
| 10:15 | skratt | du | kvarnen spottar |
| 10:15 | händelse | printStart | sak=kruka |
| 10:18 | händelse | printStart | sak=kruka |
| 10:20 | händelse | printStart | sak=kruka |
| 10:22 | händelse | printStart | sak=kruka |
| 10:24 | händelse | printStart | sak=kruka |
| 10:26 | poolTom | du | 4 repliker använda |
| 10:26 | händelse | printStart | sak=kruka |
| 10:28 | händelse | printStart | sak=kruka |
| 10:33 | väntar | värld:Mjau. | Mjau. |
| 10:36 | sak | värld:Mjau. | Mjau. |
| 10:36 | bubbla |  | Mjau. |
| 10:38 | händelse | printStart | sak=kruka |
| 10:38 | klar | värld:Mjau. | Mjau. |
| 10:40 | händelse | printStart | sak=kruka |
| 10:42 | händelse | printStart | sak=kruka |
| 10:44 | händelse | printStart | sak=kruka |
| 10:44 | skratt | du | Kajsa i skrivaren |
| 10:46 | händelse | printStart | sak=kruka |
| 10:49 | händelse | printStart | sak=kruka |
| 10:51 | händelse | printStart | sak=kruka |
| 10:53 | händelse | printStart | sak=kruka |
| 10:55 | händelse | printStart | sak=kruka |
| 11:10 | händelse | printStart | sak=kruka |
| 11:12 | händelse | printStart | sak=kruka |
| 11:14 | händelse | printStart | sak=kruka |
| 11:16 | händelse | printStart | sak=kruka |
| 11:18 | händelse | printStart | sak=kruka |
| 11:20 | händelse | printStart | sak=kruka |
| 11:23 | händelse | printStart | sak=kruka |
| 11:25 | händelse | printStart | sak=kruka |
| 11:36 | händelse | printStart | sak=kruka |
| 11:38 | händelse | printStart | sak=kruka |
| 11:39 | skratt | du | falsk tuta |
| 11:39 | väntar | värld:TUUT TUUT! | TUUT TUUT! |
| 11:39 | sak | värld:TUUT TUUT! | TUUT TUUT! |
| 11:39 | bubbla |  | TUUT TUUT! |
| 11:40 | händelse | printStart | sak=kruka |
| 11:42 | klar | värld:TUUT TUUT! | TUUT TUUT! |
| 11:42 | händelse | printStart | sak=kruka |
| 11:44 | händelse | printStart | sak=kruka |
| 11:46 | händelse | printStart | sak=kruka |
| 11:48 | händelse | printStart | sak=kruka |
| 11:50 | händelse | printStart | sak=kruka |
| 11:52 | händelse | printStart | sak=kruka |
| 11:54 | händelse | printStart | sak=kruka |
| 11:56 | händelse | printStart | sak=kruka |
| 11:58 | händelse | printStart | sak=kruka |
| 12:00 | händelse | printStart | sak=kruka |
| 12:02 | händelse | printStart | sak=kruka |
| 12:05 | händelse | printStart | sak=kruka |
| 12:16 | händelse | printStart | sak=kruka |
| 12:18 | händelse | printStart | sak=kruka |
| 12:20 | händelse | printStart | sak=kruka |
| 12:22 | händelse | printStart | sak=kruka |
| 12:24 | händelse | printStart | sak=kruka |
| 12:26 | händelse | printStart | sak=kruka |
| 12:26 | poolTom | du | 4 repliker använda |
| 12:28 | händelse | printStart | sak=kruka |
| 12:30 | händelse | printStart | sak=kruka |
| 12:32 | händelse | printStart | sak=kruka |
| 12:34 | händelse | printStart | sak=kruka |
| 12:36 | händelse | printStart | sak=kruka |
| 12:41 | väntar | värld:Mjau. | Mjau. |
| 12:50 | sak | värld:Mjau. | Mjau. |
| 12:50 | bubbla |  | Mjau. |
| 12:51 | händelse | printStart | sak=kruka |
| 12:52 | klar | värld:Mjau. | Mjau. |
| 12:53 | händelse | printStart | sak=kruka |
| 12:55 | händelse | printStart | sak=kruka |
| 12:57 | händelse | printStart | sak=kruka |
| 12:59 | händelse | printStart | sak=kruka |
| 13:01 | händelse | printStart | sak=kruka |
| 13:03 | händelse | printStart | sak=kruka |
| 13:14 | händelse | printStart | sak=kruka |
| 13:16 | händelse | printStart | sak=kruka |
| 13:18 | händelse | printStart | sak=kruka |
| 13:20 | händelse | printStart | sak=kruka |
| 13:22 | händelse | printStart | sak=kruka |
| 13:25 | händelse | printStart | sak=kruka |
| 13:27 | händelse | printStart | sak=kruka |
| 13:28 | händelse | printStart | sak=kruka |
| 13:31 | händelse | printStart | sak=kruka |
| 13:34 | väntar | värld:TUUT! Hej grannen! | TUUT! Hej grannen! |
| 13:35 | väntar | värld:Mjau. | Mjau. |
| 13:41 | sak | värld:TUUT! Hej grannen! | TUUT! Hej grannen! |
| 13:41 | bubbla |  | TUUT! Hej grannen! |
| 13:43 | händelse | printStart | sak=kruka |
| 13:44 | klar | värld:TUUT! Hej grannen! | TUUT! Hej grannen! |
| 13:45 | händelse | printStart | sak=kruka |
| 13:47 | händelse | printStart | sak=kruka |
| 13:49 | händelse | printStart | sak=kruka |
| 13:51 | händelse | printStart | sak=kruka |
| 13:52 | sak | värld:Mjau. | Mjau. |
| 13:52 | bubbla |  | Mjau. |
| 13:53 | händelse | printStart | sak=kruka |
| 13:54 | klar | värld:Mjau. | Mjau. |
| 13:56 | händelse | printStart | sak=kruka |
| 14:12 | händelse | printStart | sak=kruka |
| 14:14 | händelse | printStart | sak=kruka |
| 14:16 | händelse | printStart | sak=kruka |
| 14:19 | händelse | printStart | sak=kruka |
| 14:21 | händelse | printStart | sak=kruka |
| 14:23 | händelse | printStart | sak=kruka |
| 14:25 | händelse | printStart | sak=kruka |
| 14:26 | poolTom | du | 4 repliker använda |
| 14:27 | händelse | printStart | sak=kruka |
| 14:29 | händelse | printStart | sak=kruka |
| 14:46 | händelse | printStart | sak=kruka |
| 14:48 | händelse | printStart | sak=kruka |
| 14:48 | skratt | du | Kajsa i skrivaren |
| 14:51 | händelse | printStart | sak=kruka |
| 14:52 | händelse | printStart | sak=kruka |
| 14:55 | händelse | printStart | sak=kruka |
| 14:57 | händelse | printStart | sak=kruka |
| 14:59 | händelse | printStart | sak=kruka |
| 15:01 | händelse | printStart | sak=kruka |
| 15:03 | händelse | printStart | sak=kruka |
| 15:05 | händelse | printStart | sak=kruka |
| 15:07 | skratt | du | falsk tuta |
| 15:20 | väntar | värld:Mjau. | Mjau. |
| 15:25 | sak | värld:Mjau. | Mjau. |
| 15:25 | bubbla |  | Mjau. |
| 15:25 | händelse | printStart | sak=kruka |
| 15:27 | klar | värld:Mjau. | Mjau. |
| 15:27 | händelse | printStart | sak=kruka |
| 15:29 | väntar | värld:TUUT! Tjena! | TUUT! Tjena! |
| 15:30 | händelse | printStart | sak=kruka |
| 15:32 | händelse | printStart | sak=kruka |
| 15:34 | händelse | printStart | sak=kruka |
| 15:35 | sak | värld:TUUT! Tjena! | TUUT! Tjena! |
| 15:35 | bubbla |  | TUUT! Tjena! |
| 15:36 | händelse | printStart | sak=kruka |
| 15:38 | händelse | printStart | sak=kruka |
| 15:38 | klar | värld:TUUT! Tjena! | TUUT! Tjena! |
| 15:40 | händelse | printStart | sak=kruka |
| 15:42 | händelse | printStart | sak=kruka |
| 15:44 | händelse | printStart | sak=kruka |
| 16:00 | händelse | printStart | sak=kruka |
| 16:02 | händelse | printStart | sak=kruka |
| 16:04 | händelse | printStart | sak=kruka |
| 16:06 | händelse | printStart | sak=kruka |
| 16:08 | händelse | printStart | sak=kruka |
| 16:10 | händelse | printStart | sak=kruka |
| 16:12 | händelse | printStart | sak=kruka |
| 16:14 | händelse | printStart | sak=kruka |
| 16:16 | händelse | printStart | sak=kruka |
| 16:16 | skratt | du | Kajsa i skrivaren |
| 16:26 | poolTom | du | 4 repliker använda |
| 16:35 | händelse | printStart | sak=kruka |
| 16:37 | händelse | printStart | sak=kruka |
| 16:39 | händelse | printStart | sak=kruka |
| 16:41 | händelse | printStart | sak=kruka |
| 16:43 | händelse | printStart | sak=kruka |
| 16:45 | händelse | printStart | sak=kruka |
| 16:48 | händelse | printStart | sak=kruka |
| 16:49 | händelse | printStart | sak=kruka |
| 16:52 | händelse | printStart | sak=kruka |
| 16:54 | händelse | printStart | sak=kruka |
| 16:56 | händelse | printStart | sak=kruka |
| 16:58 | väntar | värld:Mjau. | Mjau. |
| 16:58 | sak | värld:Mjau. | Mjau. |
| 16:58 | bubbla |  | Mjau. |
| 17:00 | klar | värld:Mjau. | Mjau. |
| 17:17 | händelse | printStart | sak=kruka |
| 17:19 | händelse | printStart | sak=kruka |
| 17:22 | händelse | printStart | sak=kruka |
| 17:23 | händelse | printStart | sak=kruka |
| 17:24 | skratt | du | falsk tuta |
| 17:24 | väntar | värld:TUUT! Tjena! | TUUT! Tjena! |
| 17:24 | sak | värld:TUUT! Tjena! | TUUT! Tjena! |
| 17:24 | bubbla |  | TUUT! Tjena! |
| 17:25 | händelse | printStart | sak=kruka |
| 17:27 | klar | värld:TUUT! Tjena! | TUUT! Tjena! |
| 17:27 | händelse | printStart | sak=kruka |
| 17:29 | händelse | printStart | sak=kruka |
| 17:32 | händelse | printStart | sak=kruka |
| 17:34 | händelse | printStart | sak=kruka |
| 17:36 | händelse | printStart | sak=kruka |
| 17:38 | händelse | printStart | sak=kruka |
| 17:40 | händelse | printStart | sak=kruka |
| 17:42 | händelse | printStart | sak=kruka |
| 17:47 | väntar | värld:Mjau. | Mjau. |
| 17:56 | sak | värld:Mjau. | Mjau. |
| 17:56 | bubbla |  | Mjau. |
| 17:57 | händelse | printStart | sak=kruka |
| 17:59 | klar | värld:Mjau. | Mjau. |
| 17:59 | händelse | printStart | sak=kruka |
| 18:01 | händelse | printStart | sak=kruka |
| 18:03 | händelse | printStart | sak=kruka |
| 18:05 | händelse | printStart | sak=kruka |
| 18:07 | händelse | printStart | sak=kruka |
| 18:26 | poolTom | du | 4 repliker använda |
| 18:28 | händelse | printStart | sak=kruka |
| 18:30 | händelse | printStart | sak=kruka |
| 18:32 | händelse | printStart | sak=kruka |
| 18:34 | händelse | printStart | sak=kruka |
| 18:36 | händelse | printStart | sak=kruka |
| 18:38 | händelse | printStart | sak=kruka |
| 18:41 | händelse | printStart | sak=kruka |
| 18:41 | skratt | du | Kajsa i skrivaren |

<details><summary>Botens handlingar dag 17</summary>

- 0:00 — dag 17 börjar — (25720 kr)
- 0:15 popup: "FORTSÄTT" (25720 kr)
- 0:25 gå till Rolfs postlåda (28 m) (25720 kr)
- 0:32 panel: "Rolfs postlåda
Det här låg i l" (25720 kr)
- 0:34 gå till skrivaren (10 m) (25720 kr)
- 0:36 printar Designvas i röd PETG (25720 kr)
- 0:40 tar ut 1 st ur skrivaren (25720 kr)
- 0:45 gå till datorn (23 m) (25720 kr)
- 0:53 panel: "Webbshopen · Soptippsvägen 1
B" (25720 kr)
- 1:03 panel: "Webbshopen · Soptippsvägen 1
B" (25720 kr)
- 1:09 gå till Rolfs postlåda (paket) (29 m) (25720 kr)
- 1:10 webbshop: 1 paket i postlådan (25720 kr)
- 1:10 tjänar pengar till ängen i öster: 25720/28500 kr → printar kolfiberstol (16000 kr) (25720 kr)
- 1:13 gå till skrivaren (15 m) (25720 kr)
- 1:14 printar Kolfiberstol (25720 kr)
- 1:23 tar ut 1 st ur skrivaren (25720 kr)
- 1:30 gå till Ali (34 m) (25720 kr)
- 1:30 öppnar Alis butik – sälja (25720 kr)
- 1:32 säljer hos Ali: +16342 kr (42062 kr)
- 1:35 gå till tavlan vid vägen (6 m) (42062 kr)
- 1:35 köper ängen i öster (28500 kr) (13562 kr)
- 1:48 gå till Rolfs postlåda (27 m) (13562 kr)
- 1:56 panel: "Rolfs postlåda
Det här låg i l" (13562 kr)
- 2:06 gå till bäcken (49 m) (13562 kr)
- 2:13 vaskar i bäcken (13562 kr)
- 2:13 tjänar pengar till väntar på flaskhalsen för solpark2: 13562/13602 kr → printar kolfiberstol (15200 kr) (13562 kr)
- 2:19 gå till skrivaren (31 m) (13562 kr)
- 2:21 printar Kolfiberstol (13562 kr)
- 2:29 tar ut 1 st ur skrivaren (13562 kr)
- 2:29 fulla fickor – lägger vaskpanna i kistan (13562 kr)
- 2:37 gå till Ali (35 m) (13562 kr)
- 2:37 öppnar Alis butik – sälja (13562 kr)
- 2:39 säljer hos Ali: +15532 kr (29094 kr)
- 2:40 tjänar pengar till väntar på flaskhalsen för solpark2: 29094/29134 kr → printar kolfiberstol (14440 kr) (29094 kr)
- 2:47 gå till skrivaren (33 m) (29094 kr)
- 2:48 printar Kolfiberstol (29094 kr)
- 2:57 tar ut 1 st ur skrivaren (29094 kr)
- 3:03 gå till Ali (33 m) (29094 kr)
- 3:03 öppnar Alis butik – sälja (29094 kr)
- 3:05 säljer hos Ali: +14440 kr (43534 kr)
- 3:07 tjänar pengar till väntar på flaskhalsen för solpark2: 43534/43574 kr → printar kolfiberstol (13718 kr) (43534 kr)
- 3:14 gå till skrivaren (33 m) (43534 kr)
- 3:16 printar Kolfiberstol (43534 kr)
- 3:24 tar ut 1 st ur skrivaren (43534 kr)
- 3:31 gå till Ali (33 m) (43534 kr)
- 3:31 öppnar Alis butik – sälja (43534 kr)
- 3:33 säljer hos Ali: +13718 kr (57252 kr)
- 3:35 tjänar pengar till väntar på flaskhalsen för solpark2: 57252/57292 kr → printar kolfiberstol (13032 kr) (57252 kr)
- 3:42 gå till skrivaren (33 m) (57252 kr)
- 3:43 printar Kolfiberstol (57252 kr)
- 3:51 tar ut 1 st ur skrivaren (57252 kr)
- 3:58 gå till Ali (33 m) (57252 kr)
- 3:58 öppnar Alis butik – sälja (57252 kr)
- 4:00 säljer hos Ali: +13032 kr (70284 kr)
- 4:02 tjänar pengar till väntar på flaskhalsen för solpark2: 70284/70324 kr → printar kolfiberstol (12380 kr) (70284 kr)
- 4:09 gå till skrivaren (33 m) (70284 kr)
- 4:11 printar Kolfiberstol (70284 kr)
- 4:19 tar ut 1 st ur skrivaren (70284 kr)
- 4:26 gå till Ali (33 m) (70284 kr)
- 4:26 öppnar Alis butik – sälja (70284 kr)
- 4:27 säljer hos Ali: +3 kr (70287 kr)
- 4:28 tjänar pengar till väntar på flaskhalsen för solpark2: 70287/70324 kr → printar kolfiberstol (12380 kr) (70287 kr)
- 4:35 gå till skrivaren (33 m) (70287 kr)
- 4:37 printar Kolfiberstol (70287 kr)
- 4:45 tar ut 1 st ur skrivaren (70287 kr)
- 4:52 gå till Ali (33 m) (70287 kr)
- 4:52 öppnar Alis butik – sälja (70287 kr)
- 4:54 säljer hos Ali: +12380 kr (82667 kr)
- 4:56 tjänar pengar till väntar på flaskhalsen för solpark2: 82667/82707 kr → printar kolfiberstol (11761 kr) (82667 kr)
- 5:03 gå till skrivaren (33 m) (82667 kr)
- 5:04 printar Kolfiberstol (82667 kr)
- 5:13 tar ut 1 st ur skrivaren (82667 kr)
- 5:19 gå till Ali (33 m) (82667 kr)
- 5:19 öppnar Alis butik – sälja (82667 kr)
- 5:21 säljer hos Ali: +3 kr (82670 kr)
- 5:22 tjänar pengar till väntar på flaskhalsen för solpark2: 82670/82707 kr → printar kolfiberstol (11761 kr) (82670 kr)
- 5:22 väntar på kolfiber från bandet (82670 kr)
- 5:30 väntar på kolfiber från bandet (82670 kr)
- 5:38 väntar på kolfiber från bandet (82670 kr)
- 5:46 väntar på kolfiber från bandet (82670 kr)
- 5:55 väntar på kolfiber från bandet (82670 kr)
- 6:03 väntar på kolfiber från bandet (82670 kr)
- 6:11 väntar på kolfiber från bandet (82670 kr)
- 6:19 väntar på kolfiber från bandet (82670 kr)
- 6:27 väntar på kolfiber från bandet (82670 kr)
- 6:35 väntar på kolfiber från bandet (82670 kr)
- 6:43 väntar på kolfiber från bandet (82670 kr)
- 6:51 väntar på kolfiber från bandet (82670 kr)
- 6:59 väntar på kolfiber från bandet (82670 kr)
- 7:07 väntar på kolfiber från bandet (82670 kr)
- 7:16 väntar på kolfiber från bandet (82670 kr)
- 7:24 väntar på kolfiber från bandet (82670 kr)
- 7:32 väntar på kolfiber från bandet (82670 kr)
- 7:40 väntar på kolfiber från bandet (82670 kr)
- 7:48 väntar på kolfiber från bandet (82670 kr)
- 7:56 väntar på kolfiber från bandet (82670 kr)
- 8:04 väntar på kolfiber från bandet (82670 kr)
- 8:12 väntar på kolfiber från bandet (82670 kr)
- 8:20 väntar på kolfiber från bandet (82670 kr)
- 8:28 väntar på kolfiber från bandet (82670 kr)
- 8:37 väntar på kolfiber från bandet (82670 kr)
- 8:45 väntar på kolfiber från bandet (82670 kr)
- 8:53 väntar på kolfiber från bandet (82670 kr)
- 9:01 väntar på kolfiber från bandet (82670 kr)
- 9:09 väntar på kolfiber från bandet (82670 kr)
- 9:17 väntar på kolfiber från bandet (82670 kr)
- 9:25 väntar på kolfiber från bandet (82670 kr)
- 9:25 kolfiberstol gick inte att printa – tar nästa (82670 kr)
- 9:25 öppnar Alis butik – sälja (82670 kr)
- 9:28 tjänar pengar till väntar på flaskhalsen för solpark2: 82670/82707 kr → printar designvas i röd petg (1185 kr) (82670 kr)
- 9:35 gå till en tunna (38 m) (82670 kr)
- 9:39 gå till PETG-kvarnen (13 m) (82670 kr)
- 9:39 tömmer det tunga i PETG-kvarnen (82670 kr)
- 9:41 gå till skrivaren (3 m) (82670 kr)
- 9:43 printar Designvas i röd PETG (82670 kr)
- 9:47 tar ut 1 st ur skrivaren (82670 kr)
- 9:53 gå till Ali (31 m) (82670 kr)
- 9:53 öppnar Alis butik – sälja (82670 kr)
- 9:55 säljer hos Ali: +1185 kr (83855 kr)
- 9:57 öppnar Alis butik – köpa solcellspark (83855 kr)
- 9:59 köper solpark för 4800 kr (79055 kr)
- 10:13 plockar 7 skräp på tippen (bär max 16) (79055 kr)
- 10:15 gå till kvarnen (7 m) (79055 kr)
- 10:34 plockar 4 skräp på tippen (bär max 16) (79055 kr)
- 10:36 gå till kvarnen (9 m) (79055 kr)
- 11:05 plockar 8 skräp på tippen (bär max 16) (79055 kr)
- 11:08 gå till kvarnen (13 m) (79055 kr)
- 11:32 plockar 4 skräp på tippen (bär max 16) (79055 kr)
- 11:34 gå till kvarnen (10 m) (79055 kr)
- 12:12 plockar 2 skräp på tippen (bär max 16) (79055 kr)
- 12:15 gå till kvarnen (11 m) (79055 kr)
- 12:47 plockar 9 skräp på tippen (bär max 16) (79055 kr)
- 12:50 gå till kvarnen (14 m) (79055 kr)
- 13:09 plockar 3 skräp på tippen (bär max 16) (79055 kr)
- 13:12 gå till kvarnen (15 m) (79055 kr)
- 13:38 plockar 3 skräp på tippen (bär max 16) (79055 kr)
- 13:40 gå till kvarnen (13 m) (79055 kr)
- 14:08 plockar 10 skräp på tippen (bär max 16) (79055 kr)
- 14:11 gå till kvarnen (14 m) (79055 kr)
- 14:42 plockar 10 skräp på tippen (bär max 16) (79055 kr)
- 14:45 gå till kvarnen (16 m) (79055 kr)
- 15:21 plockar 16 skräp på tippen (bär max 16) (79055 kr)
- 15:25 gå till kvarnen (16 m) (79055 kr)
- 15:54 plockar 8 skräp på tippen (bär max 16) (79055 kr)
- 15:57 gå till kvarnen (16 m) (79055 kr)
- 16:30 plockar 10 skräp på tippen (bär max 16) (79055 kr)
- 16:34 gå till kvarnen (17 m) (79055 kr)
- 17:12 plockar 16 skräp på tippen (bär max 16) (79055 kr)
- 17:15 gå till kvarnen (18 m) (79055 kr)
- 17:53 plockar 6 skräp på tippen (bär max 16) (79055 kr)
- 17:56 gå till kvarnen (15 m) (79055 kr)
- 18:23 plockar 10 skräp på tippen (bär max 16) (79055 kr)
- 18:27 gå till kvarnen (17 m) (79055 kr)
- 18:41 inget skräp kvar att mala – väntar på sopbilen (79055 kr)
- 18:42 fastnade: Bygg en solcellspark på ängen (79055 kr)

</details>
