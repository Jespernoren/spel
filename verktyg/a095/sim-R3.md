# Simulering kapitel 1 – körning 1

*Gjord 2026-11-21 09:08 med `verktyg/sim-kapitel1.mjs` + `verktyg/sim-bot.js` (punkt AX). Boten går 4,5 m/s, läser 15 tecken/s, trampar, vevar, plockar, printar, köper och säljer via spelets egna funktioner. Tiderna är speltid.*

## Sammanfattning

| Dag | Minuter | Väntan | Prints (totalt) | Kr vid sömn | Bär | Trivsel |
|---|---|---|---|---|---|---|
| 12 | 14.7 | 0 % | 173 | 69107 | 16 | 202 |
| 13 | 2.4 | 3 % | 174 | 30097 | 16 | 242 |
| 14 | 5.1 | 0 % | 177 | 11347 | 16 | 240 |
| 15 | 4.4 | 8 % | 182 | 2208 | 16 | 307 |
| 16 | 3.1 | 0 % | 185 | 11729 | 16 | 347 |
| 17 | 12.1 | 6 % | 196 | 68926 | 16 | 349 |
| 18 | 0.0 | 0 % | 196 | 72987 | 16 | 349 |

## Flaskhalskartan (EE)

| Dag | bara | mala | trampa | strom | skrivare | inkomst | Upplåst |
|---|---|---|---|---|---|---|---|
| 12 | 0 | 0 | 0 | 0 | 758 | 0 | kolfskrivare (skrivare, 1:49), bank2 (strom, 10:44, reserv) |
| 13 | 3 | 26 | 0 | 0 | 65 | 0 |  |
| 14 | 0 | 0 | 0 | 0 | 189 | 0 |  |
| 15 | 3 | 24 | 0 | 0 | 153 | 0 | trim_kolf1 (skrivare_kolf, 3:04) |
| 16 | 0 | 0 | 0 | 0 | 147 | 1 |  |
| 17 | 3 | 4 | 0 | 0 | 223 | 0 | solpark2 (strom, 5:40, reserv) |
| 18 | 0 | 0 | 0 | 0 | 0 | 0 |  |

TIDIG: 0 · FAST: 0 · upplåst av reserven (målet väntade 3 min): 2

**SKRATT:** 55 roliga ögonblick på 42 min (13.2 per 10 min, mål minst 5)

**Köp:**

- dag 12 5:26 – kolfskrivare (25000 kr)
- dag 12 7:08 – kolfslang (27500 kr)
- dag 12 14:09 – bank (1600 kr)
- dag 13 0:26 – gamingbod (41000 kr)
- dag 14 0:41 – jetmotor (16000 kr)
- dag 14 3:55 – utlada (18500 kr)
- dag 15 0:49 – projektor (950 kr)
- dag 15 1:50 – ledpinne (1000 kr)
- dag 15 2:16 – jacuzzi (5700 kr)
- dag 15 3:27 – fagelbad (60 kr)
- dag 15 3:51 – hogtalare (1450 kr)
- dag 17 9:59 – solpark (4800 kr)

## Storykedjan (kvittens → varför → nytt mål)

| Dag | Tid | Id | Kvittens | Varför | Nytt mål | Tid till målet |
|---|---|---|---|---|---|---|


## Hur länge nya mål väntade (från att förra målet blev klart till att det nya syntes i målrutan)

Snitt 5.3 s · max 28.1 s · över 4 s: 7 · över 8 s: 7 av 24

## Flaggor (20)

- **LUGN** dag 14 0:11: 2.5 s efter BÖRJA DAGEN: [lapp] "Dag 14. Mammas paket kom tillbaka: "Okänd mottagare". Jag bo"
- **LUGN** dag 14 0:11: 2.5 s efter BÖRJA DAGEN: [meddelande] "Dag 14. Mammas paket kom tillbaka: "Okänd mottagare". Jag bo"
- **LUGN** dag 14 0:12: 2.7 s efter BÖRJA DAGEN: [röst] "Dag 14. 8 dagar till jul. Mammas paket kom tillbaka: "Okänd "
- **KROCK** dag 14 0:11: 2.6 s mellan [notis] "Ali vill ha idag: Cykelhjälm i PETG – +50 % hela dagen (1995" och [lapp] "Dag 14. Mammas paket kom tillbaka: "Okänd mottagare". Jag bo"
- **SEN** dag 12 6:45: 15.2 s efter händelsen: ali: "Ali här. Ännu en ritning som blev på riktigt: Kolfiberskrivare. Semest"
- **SEN** dag 13 0:50: 14.0 s efter händelsen: värld:TUUT! Tjena!: "TUUT! Tjena!"
- **SEN** dag 13 1:29: 12.6 s efter händelsen: notis:📔 Prestation: Städtokig · +3 respekt: "📔 Prestation: Städtokig · +3 respekt"
- **SEN** dag 14 3:03: 21.2 s efter händelsen: ali: "Ali här. Du printade Jetmotor med efterbrännare från min ritning. Och "
- **SEN** dag 16 1:04: 34.4 s efter händelsen: notis:📔 Prestation: Mysigt värre · +3 respekt: "📔 Prestation: Mysigt värre · +3 respekt"
- **PAUS** dag 12 1:26: 0.0 s paus före "📦 Paketet till Agneta på biblioteket ligger i pos"
- **PAUS** dag 13 2:14: 0.0 s paus före "Täppan är rensad. Ali har spaljé och droppslang i "
- **PAUS** dag 14 0:32: 0.0 s paus före "🚧 Gärdesgården har flyttats ut! Du får utforska n"
- **PAUS** dag 16 1:21: 0.0 s paus före "📦 Paketet till Någon i Mora ligger i postlådan – "
- **PAUS** dag 17 1:33: 0.0 s paus före "📦 Paketet till En lärare i Sundsvall ligger i pos"
- **DÖD KNAPP** dag 16 2:41: Vad ska jag göra nu? (H) i dn-ruta: täckt av por (div)
- **TEMPO** dag 13 2:23: dag 13 tog 2.4 min (mål 10–15)
- **TEMPO** dag 14 5:04: dag 14 tog 5.1 min (mål 10–15)
- **TEMPO** dag 15 4:24: dag 15 tog 4.4 min (mål 10–15)
- **TEMPO** dag 16 3:07: dag 16 tog 3.1 min (mål 10–15)
- **TEMPO** dag 18 0:00: dag 18 tog 0.0 min (mål 10–15)

Sidfel: inga

## Dag 12

| Tid | Källa | Vem | Text |
|---|---|---|---|
| 0:00 | MÅL |  | Printa och sälj |
| 0:00 | MÅL |  | Printa och sälj |
| 0:00 | sak | du | (nytt mål i rutan) |
| 0:00 | pil |  | Printa och sälj |
| 0:01 | klar | du | (nytt mål i rutan) |
| 0:21 | scenInfo | rolf | Rolf på kaffe |
| 0:21 | händelse | printStart | sak=nyckelring |
| 0:22 | toast | guld | ✅ |
| 0:22 | händelse | printKlar | sak=nyckelring n=27 |
| 0:22 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 0:25 | händelse | printStart | sak=n2_vas |
| 0:28 | toast | guld | ✅ |
| 0:28 | händelse | printKlar | sak=n2_vas n=31 |
| 0:29 | händelse | tagitUrPrint | sak=n2_vas n=1 |
| 0:36 | skratt | du | kvarnen rapar |
| 0:41 | toast | guld | 🧵 |
| 0:43 | händelse | printStart | sak=n2_vas |
| 0:44 | skratt | du | falsk tuta |
| 0:46 | toast | guld | ✅ |
| 0:46 | händelse | printKlar | sak=n2_vas n=32 |
| 0:47 | händelse | tagitUrPrint | sak=n2_vas n=1 |
| 0:48 | toast | guld | 🧵 |
| 1:01 | webb | du | packade 1 nyckelring |
| 1:10 | väntar | bror | Berättade för polarna att min lillebrorsa bygger sitt eget hus. Dom tror jag ljuger. Fortsätt. |
| 1:10 | webb | du | packade 2 n2_vas |
| 1:18 | sak | bror | Berättade för polarna att min lillebrorsa bygger sitt eget hus. Dom tror jag ljuger. Fortsätt. |
| 1:18 | sms | bror | Berättade för polarna att min lillebrorsa bygger sitt eget hus. Dom tror jag ljuger. Fortsätt. |
| 1:18 | sms-bubbla | bror | Berättade för polarna att min lillebrorsa bygger sitt eget hus. Dom tror jag ljuger. Fortsätt. |
| 1:18 | röst | bror | Berättade för polarna att min lillebrorsa bygger sitt eget hus. Dom tror jag ljuger. Fortsätt. · SMÅPRAT |
| 1:24 | väntar | info:bra | 📦 Paketet till En fotbollsklubb i Borås ligger i postlådan – Rolf tar det till posten |
| 1:25 | struken | info:bra | 📦 Paketet till En fotbollsklubb i Borås ligger i postlådan – Rolf tar det till posten |
| 1:25 | väntar | info:bra | 📦 Paketet till Agneta på biblioteket ligger i postlådan – Rolf tar det till posten |
| 1:26 | klar | bror | Berättade för polarna att min lillebrorsa bygger sitt eget hus. Dom tror jag ljuger. Fortsätt. |
| 1:26 | sak | info:bra | 📦 Paketet till Agneta på biblioteket ligger i postlådan – Rolf tar det till posten |
| 1:26 | kvitto-visas | info:bra | 📦 Paketet till Agneta på biblioteket ligger i postlådan – Rolf tar det till posten |
| 1:26 | toast | bra | 📦 Paketet till Agneta på biblioteket ligger i postlådan – Rolf tar det till posten |
| 1:28 | klar | info:bra | 📦 Paketet till Agneta på biblioteket ligger i postlådan – Rolf tar det till posten |
| 1:29 | händelse | printStart | sak=n2_hjalm |
| 1:34 | toast | guld | ✅ |
| 1:34 | händelse | printKlar | sak=n2_hjalm n=4 |
| 1:35 | händelse | tagitUrPrint | sak=n2_hjalm n=1 |
| 1:42 | röst | ali | Du vet vad? Jag har pratat om att göra något i trettio år. Du bara gör. Det är irriterande. På ett bra sätt. · STORY |
| 1:42 | butiksbubbla | ali | Du vet vad? Jag har pratat om att göra något i trettio år. Du bara gör. Det är irriterande. På ett bra sätt. |
| 1:43 | aliSalt | ali | 1995 |
| 1:49 | upplåst | skrivare | kolfskrivare |
| 1:49 | brott | UPPLÅST | kolfskrivare (skrivare 790 av 75) |
| 1:49 | händelse | upplast | id=kolfskrivare flask=skrivare |
| 1:49 | paket |  | tanke → sms |
| 1:49 | tanke | du | Kolfiberrullarna bara ligger där. Jag har ingen skrivare som tar dem. |
| 1:49 | väntar | du | Kolfiberrullarna bara ligger där. Jag har ingen skrivare som tar dem. |
| 1:49 | väntar | ali | Ali här. Kolfiberskrivaren. Den tar bara svartgrått. Den är kräsen, som min fru. |
| 1:51 | väntar | bud | (tips) |
| 1:51 | sak | bud | (tips) |
| 1:53 | klar | bud | (tips) |
| 1:54 | händelse | printStart | sak=n2_hjalm |
| 1:55 | meddelande | mamma | Jag läste om en man som bodde på en soptipp. Han blev attackerad av måsar. Finns det måsar där? |
| 1:56 | röst | mamma | Jag läste om en man som bodde på en soptipp. Han blev attackerad av måsar. Finns det måsar där? · STORY |
| 2:07 | paket |  | sms |
| 2:07 | väntar | mamma | En katt? Är den vaccinerad? Rör den inte. Eller jo. Ge den en macka. |
| 2:17 | händelse | brevLast | id=m_masar |
| 2:19 | sak | du | Kolfiberrullarna bara ligger där. Jag har ingen skrivare som tar dem. |
| 2:19 | notis | tanke | 💭 Kolfiberrullarna bara ligger där. Jag har ingen skrivare som tar dem. |
| 2:19 | röst | du | Kolfiberrullarna bara ligger där. Jag har ingen skrivare som tar dem. · STORY |
| 2:21 | toast | guld | ✅ |
| 2:21 | händelse | printKlar | sak=n2_hjalm n=5 |
| 2:22 | händelse | tagitUrPrint | sak=n2_hjalm n=1 |
| 2:25 | klar | du | Kolfiberrullarna bara ligger där. Jag har ingen skrivare som tar dem. |
| 2:30 | aliSalt | ali | 1895 |
| 2:33 | sak | ali | Ali här. Kolfiberskrivaren. Den tar bara svartgrått. Den är kräsen, som min fru. |
| 2:33 | sms | ali | Ali här. Kolfiberskrivaren. Den tar bara svartgrått. Den är kräsen, som min fru. |
| 2:33 | sms-bubbla | ali | Ali här. Kolfiberskrivaren. Den tar bara svartgrått. Den är kräsen, som min fru. |
| 2:33 | röst | ali | Ali här. Kolfiberskrivaren. Den tar bara svartgrått. Den är kräsen, som min fru. · STORY |
| 2:40 | klar | ali | Ali här. Kolfiberskrivaren. Den tar bara svartgrått. Den är kräsen, som min fru. |
| 2:43 | skratt | du | kvarnen rapar |
| 2:45 | toast | guld | 🧵 |
| 2:49 | toast | guld | 🧵 |
| 2:50 | händelse | printStart | sak=n2_hjalm |
| 2:54 | toast | guld | ✅ |
| 2:54 | händelse | printKlar | sak=n2_hjalm n=6 |
| 2:55 | händelse | tagitUrPrint | sak=n2_hjalm n=1 |
| 2:59 | väntar | info:fel | Göran snodde cykelhjälm i petg. |
| 2:59 | sak | info:fel | Göran snodde cykelhjälm i petg. |
| 2:59 | kvitto-visas | info:fel | Göran snodde cykelhjälm i petg. |
| 2:59 | toast | fel | Göran snodde cykelhjälm i petg. |
| 3:01 | klar | info:fel | Göran snodde cykelhjälm i petg. |
| 3:12 | händelse | printStart | sak=n2_hjalm |
| 3:17 | toast | guld | ✅ |
| 3:17 | händelse | printKlar | sak=n2_hjalm n=7 |
| 3:18 | händelse | tagitUrPrint | sak=n2_hjalm n=1 |
| 3:20 | händelse | printStart | sak=n2_hjalm |
| 3:21 | sak | mamma | En katt? Är den vaccinerad? Rör den inte. Eller jo. Ge den en macka. |
| 3:21 | sms | mamma | En katt? Är den vaccinerad? Rör den inte. Eller jo. Ge den en macka. |
| 3:21 | sms-bubbla | mamma | En katt? Är den vaccinerad? Rör den inte. Eller jo. Ge den en macka. |
| 3:21 | röst | mamma | En katt? Är den vaccinerad? Rör den inte. Eller jo. Ge den en macka. · STORY |
| 3:23 | skratt | du | falsk tuta |
| 3:24 | toast | guld | ✅ |
| 3:24 | händelse | printKlar | sak=n2_hjalm n=8 |
| 3:25 | händelse | tagitUrPrint | sak=n2_hjalm n=1 |
| 3:27 | klar | mamma | En katt? Är den vaccinerad? Rör den inte. Eller jo. Ge den en macka. |
| 3:28 | händelse | printStart | sak=n2_hjalm |
| 3:32 | toast | guld | ✅ |
| 3:32 | händelse | printKlar | sak=n2_hjalm n=9 |
| 3:33 | händelse | tagitUrPrint | sak=n2_hjalm n=1 |
| 3:41 | aliSalt | ali | 1800 |
| 3:42 | aliSalt | ali | 1710 |
| 3:42 | aliSalt | ali | 1625 |
| 3:53 | skratt | du | kvarnen rapar |
| 3:58 | toast | guld | 🧵 |
| 4:00 | händelse | printStart | sak=n2_hjalm |
| 4:04 | toast | guld | ✅ |
| 4:04 | händelse | printKlar | sak=n2_hjalm n=10 |
| 4:05 | händelse | tagitUrPrint | sak=n2_hjalm n=1 |
| 4:09 | väntar | bror | Visade bilder på ditt skjul för polarna. Dom trodde det var en Airbnb. Jag sa inte emot. |
| 4:14 | aliSalt | ali | 1544 |
| 4:24 | väntar | värld:Mjau. | Mjau. |
| 4:24 | sak | värld:Mjau. | Mjau. |
| 4:24 | bubbla |  | Mjau. |
| 4:26 | klar | värld:Mjau. | Mjau. |
| 4:27 | skratt | du | kvarnen rapar |
| 4:29 | toast | guld | 🧵 |
| 4:34 | händelse | printStart | sak=n2_hjalm |
| 4:34 | toast | guld | 🧵 |
| 4:34 | toast | guld | 🧵 |
| 4:35 | toast | guld | 🧵 |
| 4:35 | toast | guld | 🧵 |
| 4:35 | toast | guld | 🧵 |
| 4:35 | toast | guld | 🧵 |
| 4:35 | toast | guld | 🧵 |
| 4:35 | toast | guld | 🧵 |
| 4:35 | toast | guld | 🧵 |
| 4:35 | toast | guld | 🧵 |
| 4:35 | toast | guld | 🧵 |
| 4:35 | toast | guld | 🧵 |
| 4:36 | toast | guld | 🧵 |
| 4:36 | toast | guld | 🧵 |
| 4:38 | toast | guld | ✅ |
| 4:38 | händelse | printKlar | sak=n2_hjalm n=11 |
| 4:39 | händelse | tagitUrPrint | sak=n2_hjalm n=1 |
| 4:44 | väntar | ali | Tjugofem år bakom disken. Du är det roligaste som hänt. |
| 4:44 | sak | ali | Tjugofem år bakom disken. Du är det roligaste som hänt. |
| 4:44 | röst | ali | Tjugofem år bakom disken. Du är det roligaste som hänt. · SMÅPRAT |
| 4:45 | bubbla |  | Tjugofem år bakom disken. Du är det roligaste som hänt. |
| 4:47 | aliSalt | ali | 1467 |
| 4:49 | klar | ali | Tjugofem år bakom disken. Du är det roligaste som hänt. |
| 4:51 | väntar | rolf | Fick en kajak i lasset. Ingen paddel. Typiskt. Ja la den vid grinden åt dig. /R |
| 4:56 | händelse | printStart | sak=n2_hjalm |
| 5:00 | toast | guld | ✅ |
| 5:00 | händelse | printKlar | sak=n2_hjalm n=12 |
| 5:01 | händelse | tagitUrPrint | sak=n2_hjalm n=1 |
| 5:03 | händelse | printStart | sak=n2_hjalm |
| 5:07 | toast | guld | ✅ |
| 5:07 | händelse | printKlar | sak=n2_hjalm n=13 |
| 5:08 | händelse | tagitUrPrint | sak=n2_hjalm n=1 |
| 5:10 | händelse | printStart | sak=n2_hjalm |
| 5:14 | toast | guld | ✅ |
| 5:14 | händelse | printKlar | sak=n2_hjalm n=14 |
| 5:15 | händelse | tagitUrPrint | sak=n2_hjalm n=1 |
| 5:18 | väntar | värld:TUUT! Hej grannen! | TUUT! Hej grannen! |
| 5:18 | sak | värld:TUUT! Hej grannen! | TUUT! Hej grannen! |
| 5:18 | bubbla |  | TUUT! Hej grannen! |
| 5:21 | klar | värld:TUUT! Hej grannen! | TUUT! Hej grannen! |
| 5:23 | aliSalt | ali | 1397 |
| 5:23 | aliSalt | ali | 1397 |
| 5:23 | aliSalt | ali | 1397 |
| 5:26 | skratt | du | Alis dyr-pling |
| 5:26 | toast | guld | 3D-modell köpt – printa kolfiberskrivare på skrivaren |
| 5:26 | händelse | kopt | sak=kolfskrivare |
| 5:28 | morgonkort | ⏸️ Pausad | ⏸️ Pausad · Klicka för att fortsätta. |
| 5:36 | väntar | mamma | Jag har lagt upp en bild på ditt skjul på Facebook. 47 gilla. Faster Inger skrev "Va fint, är det en bastu?" |
| 5:47 | skratt | du | kvarnen rapar |
| 5:52 | toast | guld | 🧵 |
| 5:56 | toast | guld | 🧵 |
| 6:00 | händelse | printStart | sak=byggsats:kolfskrivare |
| 6:02 | toast | bra | Del 1 av 5 klar |
| 6:05 | toast | bra | Del 2 av 5 klar |
| 6:07 | toast | bra | Del 3 av 5 klar |
| 6:07 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 6:14 | skratt | du | kvarnen rapar |
| 6:19 | toast | bra | Del 4 av 5 klar |
| 6:20 | väntar | mamma | Jag sa till pappa att du bor på en soptipp. Han sa "aha, vad lugnt då" och satte på Formel 1. Lugnt? |
| 6:23 | händelse | printKlar | sak=byggsats:kolfskrivare n=1 |
| 6:23 | toast | guld | ✅ |
| 6:28 | toast | guld | 🧵 |
| 6:28 | händelse | tagitUrPrint | sak=byggsats:kolfskrivare n=1 |
| 6:28 | paket |  | sms |
| 6:28 | väntar | ali | Ali här. Ännu en ritning som blev på riktigt: Kolfiberskrivare. Semesterkassan växer. Livet växer. |
| 6:31 | händelse | placerat | sak=kolfskrivare |
| 6:31 | händelse | malKlart | id=kolfskrivare del=Dag 12 – Kolfiberskrivaren nasta=kolfslang |
| 6:31 | väntar | du | Rullarna ska fram till skrivaren utan mig. En slang. |
| 6:31 | MÅL |  | Bygg slangfördelaren |
| 6:32 | sak | du | Rullarna ska fram till skrivaren utan mig. En slang. |
| 6:32 | målruta |  | Bygg slangfördelaren |
| 6:32 | pil |  | Bygg slangfördelaren |
| 6:32 | notis | tanke | 💭 Rullarna ska fram till skrivaren utan mig. En slang. |
| 6:32 | röst | du | Rullarna ska fram till skrivaren utan mig. En slang. · MÅL |
| 6:33 | nick |  | nick:92 |
| 6:33 | tanke | du | Allt går trögt på tom mage. |
| 6:33 | väntar | du | Allt går trögt på tom mage. |
| 6:35 | kvittens-bock |  | ✓ Bygg kolfiberskrivaren i linje 3 |
| 6:37 | klar | du | Rullarna ska fram till skrivaren utan mig. En slang. |
| 6:40 | händelse | printStart | sak=n3_stol |
| 6:40 | toast | bra | 🔗 Slangen kopplad |
| 6:45 | sak | ali | Ali här. Ännu en ritning som blev på riktigt: Kolfiberskrivare. Semesterkassan växer. Livet växer. |
| 6:45 | sms | ali | Ali här. Ännu en ritning som blev på riktigt: Kolfiberskrivare. Semesterkassan växer. Livet växer. |
| 6:45 | sms-bubbla | ali | Ali här. Ännu en ritning som blev på riktigt: Kolfiberskrivare. Semesterkassan växer. Livet växer. |
| 6:45 | röst | ali | Ali här. Ännu en ritning som blev på riktigt: Kolfiberskrivare. Semesterkassan växer. Livet växer. · REAKTION |
| 6:47 | toast | guld | ✅ |
| 6:47 | händelse | printKlar | sak=n3_stol n=1 |
| 6:47 | händelse | tagitUrPrint | sak=n3_stol n=1 |
| 6:49 | händelse | printStart | sak=n3_stol |
| 6:53 | klar | ali | Ali här. Ännu en ritning som blev på riktigt: Kolfiberskrivare. Semesterkassan växer. Livet växer. |
| 6:55 | struken | du | Allt går trögt på tom mage. |
| 6:56 | toast | guld | ✅ |
| 6:56 | händelse | printKlar | sak=n3_stol n=2 |
| 6:56 | händelse | tagitUrPrint | sak=n3_stol n=1 |
| 6:59 | skratt | du | falsk tuta |
| 7:05 | aliSalt | ali | 16000 |
| 7:05 | aliSalt | ali | 15200 |
| 7:08 | skratt | du | Alis dyr-pling |
| 7:08 | toast | guld | 3D-modell köpt – printa slangfördelare på skrivaren |
| 7:08 | händelse | kopt | sak=kolfslang |
| 7:10 | morgonkort | ⏸️ Pausad | ⏸️ Pausad · Klicka för att fortsätta. |
| 7:25 | händelse | printStart | sak=byggsats:kolfslang |
| 7:27 | toast | bra | Del 1 av 3 klar |
| 7:29 | toast | bra | Del 2 av 3 klar |
| 7:29 | väntar | värld:TUUT! Hej grannen! | TUUT! Hej grannen! |
| 7:29 | sak | värld:TUUT! Hej grannen! | TUUT! Hej grannen! |
| 7:29 | bubbla |  | TUUT! Hej grannen! |
| 7:31 | händelse | printKlar | sak=byggsats:kolfslang n=1 |
| 7:31 | toast | guld | ✅ |
| 7:31 | händelse | tagitUrPrint | sak=byggsats:kolfslang n=1 |
| 7:32 | klar | värld:TUUT! Hej grannen! | TUUT! Hej grannen! |
| 7:33 | händelse | placerat | sak=kolfslang |
| 7:33 | väntar | info:guld | Slangfördelaren sitter – alla skrivare i linje 3 får kolfiber samtidigt |
| 7:33 | sak | info:guld | Slangfördelaren sitter – alla skrivare i linje 3 får kolfiber samtidigt |
| 7:33 | kvitto-visas | info:guld | Slangfördelaren sitter – alla skrivare i linje 3 får kolfiber samtidigt |
| 7:33 | toast | guld | Slangfördelaren sitter – alla skrivare i linje 3 får kolfiber samtidigt |
| 7:33 | händelse | malKlart | id=kolfslang del=Dag 12 – Kolfiberskrivaren nasta=kolfstol |
| 7:33 | händelse | malKlart | id=kolfstol del=Dag 12 – Kolfiberskrivaren nasta=f12-batteribank2 |
| 7:33 | MÅL |  | Printa och sälj |
| 7:35 | klar | info:guld | Slangfördelaren sitter – alla skrivare i linje 3 får kolfiber samtidigt |
| 7:35 | målruta |  | Printa och sälj |
| 7:37 | kvittens-bock |  | ✓ Bygg slangfördelaren |
| 7:37 | kvittens-bock |  | ✓ Printa en kolfiberstol |
| 7:37 | sak | du | (nytt mål i rutan) |
| 7:37 | pil |  | Printa och sälj |
| 7:37 | klar | du | (nytt mål i rutan) |
| 7:40 | väntar | bror | Pappa gick för att tjacka mjölk och kom hem med en motorsåg. "Den var på rea." Vi har inga träd. |
| 7:41 | händelse | printStart | sak=n3_stol |
| 7:47 | toast | guld | ✅ |
| 7:47 | händelse | printKlar | sak=n3_stol n=3 |
| 7:48 | händelse | tagitUrPrint | sak=n3_stol n=1 |
| 7:57 | aliSalt | ali | 14440 |
| 8:06 | händelse | printStart | sak=n3_stol |
| 8:13 | toast | guld | ✅ |
| 8:13 | händelse | printKlar | sak=n3_stol n=4 |
| 8:13 | händelse | tagitUrPrint | sak=n3_stol n=1 |
| 8:22 | aliSalt | ali | 13718 |
| 8:32 | händelse | printStart | sak=n3_stol |
| 8:33 | tanke | du | Jag skulle kunna äta en sopsäck. Nästan. |
| 8:33 | väntar | du | Jag skulle kunna äta en sopsäck. Nästan. |
| 8:33 | sak | du | Jag skulle kunna äta en sopsäck. Nästan. |
| 8:33 | notis | tanke | 💭 Jag skulle kunna äta en sopsäck. Nästan. |
| 8:33 | röst | du | Jag skulle kunna äta en sopsäck. Nästan. · REAKTION |
| 8:37 | klar | du | Jag skulle kunna äta en sopsäck. Nästan. |
| 8:39 | toast | guld | ✅ |
| 8:39 | händelse | printKlar | sak=n3_stol n=5 |
| 8:39 | händelse | tagitUrPrint | sak=n3_stol n=1 |
| 8:48 | aliSalt | ali | 13032 |
| 8:58 | händelse | printStart | sak=n3_stol |
| 8:58 | skratt | du | Kajsa i skrivaren |
| 9:05 | toast | guld | ✅ |
| 9:05 | händelse | printKlar | sak=n3_stol n=6 |
| 9:05 | händelse | tagitUrPrint | sak=n3_stol n=1 |
| 9:14 | aliSalt | ali | 12380 |
| 9:16 | väntar | bror | Visade bilder på ditt skjul för polarna. Dom trodde det var en Airbnb. Jag sa inte emot. |
| 9:24 | skratt | du | falsk tuta |
| 9:24 | väntar | värld:TUUT! Tjena! | TUUT! Tjena! |
| 9:24 | sak | värld:TUUT! Tjena! | TUUT! Tjena! |
| 9:24 | bubbla |  | TUUT! Tjena! |
| 9:24 | händelse | printStart | sak=n3_stol |
| 9:27 | klar | värld:TUUT! Tjena! | TUUT! Tjena! |
| 9:31 | toast | guld | ✅ |
| 9:31 | händelse | printKlar | sak=n3_stol n=7 |
| 9:31 | händelse | tagitUrPrint | sak=n3_stol n=1 |
| 9:36 | väntar | info:info | Pappa kommer gående. Han bär på en kasse … |
| 9:36 | scenInfo | pappa | Pappa kommer |
| 9:36 | sak | info:info | Pappa kommer gående. Han bär på en kasse … |
| 9:36 | toast |  | Pappa kommer gående. Han bär på en kasse … |
| 9:38 | klar | info:info | Pappa kommer gående. Han bär på en kasse … |
| 9:40 | aliSalt | ali | 11761 |
| 10:33 | tanke | du | När åt jag senast? Det var nog i går. |
| 10:33 | väntar | du | När åt jag senast? Det var nog i går. |
| 10:33 | sak | du | När åt jag senast? Det var nog i går. |
| 10:33 | notis | tanke | 💭 När åt jag senast? Det var nog i går. |
| 10:33 | röst | du | När åt jag senast? Det var nog i går. · REAKTION |
| 10:36 | klar | du | När åt jag senast? Det var nog i går. |
| 10:44 | upplåst | strom | bank2 |
| 10:44 | brott | RESERV | bank2 (strom 0 av 15) |
| 10:44 | händelse | upplast | id=bank2 flask=strom |
| 10:44 | paket |  | sms |
| 10:44 | väntar | ali | Ali här. En batteribank till. Kolfibret är hungrigt. Som min svåger. |
| 10:45 | sak | ali | Ali här. En batteribank till. Kolfibret är hungrigt. Som min svåger. |
| 10:45 | sms | ali | Ali här. En batteribank till. Kolfibret är hungrigt. Som min svåger. |
| 10:45 | sms-bubbla | ali | Ali här. En batteribank till. Kolfibret är hungrigt. Som min svåger. |
| 10:45 | röst | ali | Ali här. En batteribank till. Kolfibret är hungrigt. Som min svåger. · STORY |
| 10:51 | klar | ali | Ali här. En batteribank till. Kolfibret är hungrigt. Som min svåger. |
| 11:36 | struken | mamma | Jag har lagt upp en bild på ditt skjul på Facebook. 47 gilla. Faster Inger skrev "Va fint, är det en bastu?" |
| 12:33 | poolTom | du | 4 repliker använda |
| 12:52 | skratt | du | falsk tuta |
| 13:07 | skratt | du | däcket rullar iväg |
| 13:12 | väntar | mamma | Jag sa till pappa att du bor på en soptipp. Han sa "aha, vad lugnt då" och satte på Formel 1. Lugnt? |
| 13:52 | händelse | printStart | sak=n2_hjalm |
| 13:56 | toast | guld | ✅ |
| 13:56 | händelse | printKlar | sak=n2_hjalm n=15 |
| 13:57 | händelse | tagitUrPrint | sak=n2_hjalm n=1 |
| 14:05 | aliSalt | ali | 1397 |
| 14:08 | skratt | du | Alis dyr-pling |
| 14:08 | toast | guld | 3D-modell köpt – printa batteribank på skrivaren |
| 14:08 | händelse | kopt | sak=bank |
| 14:16 | händelse | printStart | sak=byggsats:bank |
| 14:18 | toast | bra | Del 1 av 2 klar |
| 14:18 | skratt | du | kvarnen spottar |
| 14:20 | händelse | printKlar | sak=byggsats:bank n=1 |
| 14:20 | toast | guld | ✅ |
| 14:20 | händelse | tagitUrPrint | sak=byggsats:bank n=1 |
| 14:27 | händelse | placerat | sak=bank |
| 14:27 | händelse | malKlart | id=f12-batteribank2 del=Dag 12 – Kolfiberskrivaren nasta=sov12 |
| 14:27 | paket |  | lapp |
| 14:27 | lapp | 📔 Dagbok | Dag 12 är slut. Allt säljs bara när jag är vaken. |
| 14:27 | meddelande | du | Dag 12 är slut. Allt säljs bara när jag är vaken. |
| 14:27 | dagbokkort | du | Dag 12 är slut. Allt säljs bara när jag är vaken. |
| 14:27 | målruta |  | Klart för idag – sov när du vill |
| 14:28 | MÅL |  | Klart för idag – sov när du vill |
| 14:28 | röst | du | Dag 12. 10 dagar till jul. Dag 12 är slut. Allt säljs bara när jag är vaken. · STORY |
| 14:34 | händelse | brevLast | id=kvall12 |
| 14:34 | poolTom | du | 4 repliker använda |
| 14:35 | väntar | notis:🌇 Klockan är 21. Ali slår igen luckan.  | 🌇 Klockan är 21. Ali slår igen luckan. Dagens jobb är klart – gå in i skjulet och sov i sängen. |
| 14:36 | sak | du | (nytt mål i rutan) |
| 14:36 | pil |  | Klart för idag – sov när du vill |
| 14:36 | klar | du | (nytt mål i rutan) |
| 14:41 | sak | notis:🌇 Klockan är 21. Ali slår igen luckan.  | 🌇 Klockan är 21. Ali slår igen luckan. Dagens jobb är klart – gå in i skjulet och sov i sängen. |
| 14:41 | notis | guld | 🌇 Klockan är 21. Ali slår igen luckan. Dagens jobb är klart – gå in i skjulet och sov i sängen. |
| 14:43 | struken | bror | Pappa gick för att tjacka mjölk och kom hem med en motorsåg. "Den var på rea." Vi har inga träd. |
| 14:44 | klar | notis:🌇 Klockan är 21. Ali slår igen luckan.  | 🌇 Klockan är 21. Ali slår igen luckan. Dagens jobb är klart – gå in i skjulet och sov i sängen. |
| 14:45 | webbBetalt | du | 1990 |

<details><summary>Botens handlingar dag 12</summary>

- 0:09 gå till Rolfs postlåda (29 m) (9052 kr)
- 0:17 panel: "En lapp från Rolf
Lite olaglig" (9052 kr)
- 0:19 gå till skrivaren (10 m) (9052 kr)
- 0:21 printar Nyckelring (9052 kr)
- 0:22 tar ut 1 st ur skrivaren (9052 kr)
- 0:24 gå till skrivaren (5 m) (9052 kr)
- 0:25 printar Designvas i röd PETG (9052 kr)
- 0:30 tar ut 1 st ur skrivaren (9052 kr)
- 0:33 gå till en tunna (16 m) (9052 kr)
- 0:36 gå till PETG-kvarnen (10 m) (9052 kr)
- 0:36 tömmer det tunga i PETG-kvarnen (9052 kr)
- 0:41 gå till skrivaren (4 m) (9052 kr)
- 0:43 printar Designvas i röd PETG (9052 kr)
- 0:47 tar ut 1 st ur skrivaren (9052 kr)
- 0:52 gå till datorn (23 m) (9052 kr)
- 1:00 panel: "Webbshopen · Soptippsvägen 1
B" (9052 kr)
- 1:09 panel: "Webbshopen · Soptippsvägen 1
B" (9052 kr)
- 1:18 panel: "Webbshopen · Soptippsvägen 1
B" (9052 kr)
- 1:24 gå till Rolfs postlåda (paket) (29 m) (9052 kr)
- 1:26 webbshop: 2 paket i postlådan (9052 kr)
- 1:26 tjänar pengar till väntar på flaskhalsen för kolfskrivare: 9052/9092 kr → printar cykelhjälm i petg (1995 kr) (9052 kr)
- 1:28 gå till skrivaren (10 m) (9052 kr)
- 1:29 printar Cykelhjälm i PETG (9052 kr)
- 1:35 tar ut 1 st ur skrivaren (9052 kr)
- 1:42 gå till Ali (30 m) (9052 kr)
- 1:42 öppnar Alis butik – sälja (9052 kr)
- 1:44 säljer hos Ali: +1995 kr (11047 kr)
- 1:47 tjänar pengar till väntar på flaskhalsen för kolfskrivare: 11047/11087 kr → printar cykelhjälm i petg (1895 kr) (11047 kr)
- 1:53 gå till skrivaren (29 m) (11047 kr)
- 1:54 printar Cykelhjälm i PETG (11047 kr)
- 2:07 popup: "Bara en katt." (11047 kr)
- 2:17 popup: "Läst" (11047 kr)
- 2:23 tar ut 1 st ur skrivaren (11047 kr)
- 2:29 gå till Ali (29 m) (11047 kr)
- 2:29 öppnar Alis butik – sälja (11047 kr)
- 2:31 säljer hos Ali: +1895 kr (12942 kr)
- 2:33 tjänar pengar till kolfiberskrivare: 12942/25000 kr → printar cykelhjälm i petg (1800 kr) (12942 kr)
- 2:40 gå till en tunna (36 m) (12942 kr)
- 2:43 gå till PETG-kvarnen (7 m) (12942 kr)
- 2:43 tömmer det tunga i PETG-kvarnen (12942 kr)
- 2:48 gå till skrivaren (4 m) (12942 kr)
- 2:50 printar Cykelhjälm i PETG (12942 kr)
- 2:56 tar ut 1 st ur skrivaren (12942 kr)
- 3:02 gå till Ali (31 m) (12942 kr)
- 3:02 öppnar Alis butik – sälja (12942 kr)
- 3:05 tjänar pengar till kolfiberskrivare: 12942/25000 kr → printar cykelhjälm i petg (1800 kr) (12942 kr)
- 3:11 gå till skrivaren (29 m) (12942 kr)
- 3:12 printar Cykelhjälm i PETG (12942 kr)
- 3:18 tar ut 1 st ur skrivaren (12942 kr)
- 3:20 printar Cykelhjälm i PETG (12942 kr)
- 3:26 tar ut 1 st ur skrivaren (12942 kr)
- 3:28 printar Cykelhjälm i PETG (12942 kr)
- 3:34 tar ut 1 st ur skrivaren (12942 kr)
- 3:40 gå till Ali (29 m) (12942 kr)
- 3:40 öppnar Alis butik – sälja (12942 kr)
- 3:42 säljer hos Ali: +5135 kr (18077 kr)
- 3:43 tjänar pengar till kolfiberskrivare: 18077/25000 kr → printar cykelhjälm i petg (1544 kr) (18077 kr)
- 3:50 gå till en tunna (34 m) (18077 kr)
- 3:53 gå till PETG-kvarnen (11 m) (18077 kr)
- 3:53 tömmer det tunga i PETG-kvarnen (18077 kr)
- 3:58 gå till skrivaren (3 m) (18077 kr)
- 4:00 printar Cykelhjälm i PETG (18077 kr)
- 4:06 tar ut 1 st ur skrivaren (18077 kr)
- 4:12 gå till Ali (31 m) (18077 kr)
- 4:12 öppnar Alis butik – sälja (18077 kr)
- 4:14 säljer hos Ali: +1544 kr (19621 kr)
- 4:15 tjänar pengar till kolfiberskrivare: 19621/25000 kr → printar cykelhjälm i petg (1467 kr) (19621 kr)
- 4:23 gå till en tunna (39 m) (19621 kr)
- 4:27 gå till PETG-kvarnen (15 m) (19621 kr)
- 4:27 tömmer det tunga i PETG-kvarnen (19621 kr)
- 4:32 gå till skrivaren (3 m) (19621 kr)
- 4:34 printar Cykelhjälm i PETG (19621 kr)
- 4:39 tar ut 1 st ur skrivaren (19621 kr)
- 4:46 gå till Ali (31 m) (19621 kr)
- 4:46 öppnar Alis butik – sälja (19621 kr)
- 4:47 säljer hos Ali: +1467 kr (21088 kr)
- 4:48 tjänar pengar till kolfiberskrivare: 21088/25000 kr → printar cykelhjälm i petg (1397 kr) (21088 kr)
- 4:54 gå till skrivaren (29 m) (21088 kr)
- 4:56 printar Cykelhjälm i PETG (21088 kr)
- 5:01 tar ut 1 st ur skrivaren (21088 kr)
- 5:03 printar Cykelhjälm i PETG (21088 kr)
- 5:08 tar ut 1 st ur skrivaren (21088 kr)
- 5:10 printar Cykelhjälm i PETG (21088 kr)
- 5:15 tar ut 1 st ur skrivaren (21088 kr)
- 5:21 gå till Ali (29 m) (21088 kr)
- 5:21 öppnar Alis butik – sälja (21088 kr)
- 5:23 säljer hos Ali: +4191 kr (25279 kr)
- 5:24 öppnar Alis butik – köpa kolfiberskrivare (25279 kr)
- 5:26 köper kolfskrivare för 25000 kr (279 kr)
- 5:36 kort: "FORTSÄTTeller tryck Esc" (279 kr)
- 5:43 gå till en tunna (39 m) (279 kr)
- 5:47 gå till PETG-kvarnen (17 m) (279 kr)
- 5:47 tömmer det tunga i PETG-kvarnen (279 kr)
- 5:58 gå till skrivaren (3 m) (279 kr)
- 6:00 printar Kolfiberskrivare (5 delar) (279 kr)
- 6:11 gå till en tunna (14 m) (279 kr)
- 6:14 gå till PETG-kvarnen (11 m) (279 kr)
- 6:14 tömmer det tunga i PETG-kvarnen (279 kr)
- 6:28 gå till skrivaren (4 m) (279 kr)
- 6:28 tar ut 1 st ur skrivaren (279 kr)
- 6:30 gå till platsen för kolfiberskrivare (5 m) (279 kr)
- 6:31 ställer ut kolfiberskrivare (279 kr)
- 6:39 tjänar pengar till slangfördelare: 279/27500 kr → printar kolfiberstol (16000 kr) (279 kr)
- 6:40 printar Kolfiberstol (279 kr)
- 6:48 tar ut 1 st ur skrivaren (279 kr)
- 6:49 printar Kolfiberstol (279 kr)
- 6:57 tar ut 1 st ur skrivaren (279 kr)
- 7:03 gå till Ali (33 m) (279 kr)
- 7:03 öppnar Alis butik – sälja (279 kr)
- 7:05 säljer hos Ali: +31200 kr (31479 kr)
- 7:06 öppnar Alis butik – köpa slangfördelare (31479 kr)
- 7:08 köper kolfslang för 27500 kr (3979 kr)
- 7:18 kort: "FORTSÄTTeller tryck Esc" (3979 kr)
- 7:24 gå till skrivaren (33 m) (3979 kr)
- 7:25 printar Slangfördelare (3 delar) (3979 kr)
- 7:32 tar ut 1 st ur skrivaren (3979 kr)
- 7:33 gå till kolfiberkvarnen (3 m) (3979 kr)
- 7:39 tjänar pengar till väntar på flaskhalsen för bank2: 3979/4019 kr → printar kolfiberstol (14440 kr) (3979 kr)
- 7:39 gå till skrivaren (1 m) (3979 kr)
- 7:41 printar Kolfiberstol (3979 kr)
- 7:48 tar ut 1 st ur skrivaren (3979 kr)
- 7:55 gå till Ali (35 m) (3979 kr)
- 7:55 öppnar Alis butik – sälja (3979 kr)
- 7:57 säljer hos Ali: +14440 kr (18419 kr)
- 7:58 tjänar pengar till väntar på flaskhalsen för bank2: 18419/18459 kr → printar kolfiberstol (13718 kr) (18419 kr)
- 8:05 gå till skrivaren (33 m) (18419 kr)
- 8:06 printar Kolfiberstol (18419 kr)
- 8:14 tar ut 1 st ur skrivaren (18419 kr)
- 8:20 gå till Ali (33 m) (18419 kr)
- 8:20 öppnar Alis butik – sälja (18419 kr)
- 8:22 säljer hos Ali: +13718 kr (32137 kr)
- 8:24 tjänar pengar till väntar på flaskhalsen för bank2: 32137/32177 kr → printar kolfiberstol (13032 kr) (32137 kr)
- 8:31 gå till skrivaren (33 m) (32137 kr)
- 8:32 printar Kolfiberstol (32137 kr)
- 8:40 tar ut 1 st ur skrivaren (32137 kr)
- 8:46 gå till Ali (33 m) (32137 kr)
- 8:46 öppnar Alis butik – sälja (32137 kr)
- 8:48 säljer hos Ali: +13032 kr (45169 kr)
- 8:50 tjänar pengar till väntar på flaskhalsen för bank2: 45169/45209 kr → printar kolfiberstol (12380 kr) (45169 kr)
- 8:57 gå till skrivaren (33 m) (45169 kr)
- 8:58 printar Kolfiberstol (45169 kr)
- 9:06 tar ut 1 st ur skrivaren (45169 kr)
- 9:13 gå till Ali (33 m) (45169 kr)
- 9:13 öppnar Alis butik – sälja (45169 kr)
- 9:14 säljer hos Ali: +12380 kr (57549 kr)
- 9:16 tjänar pengar till väntar på flaskhalsen för bank2: 57549/57589 kr → printar kolfiberstol (11761 kr) (57549 kr)
- 9:23 gå till skrivaren (33 m) (57549 kr)
- 9:24 printar Kolfiberstol (57549 kr)
- 9:32 tar ut 1 st ur skrivaren (57549 kr)
- 9:39 gå till Ali (33 m) (57549 kr)
- 9:39 öppnar Alis butik – sälja (57549 kr)
- 9:40 säljer hos Ali: +11761 kr (69310 kr)
- 9:42 tjänar pengar till väntar på flaskhalsen för bank2: 69310/69350 kr → printar kolfiberstol (11200 kr) (69310 kr)
- 9:42 väntar på kolfiber från bandet (69310 kr)
- 9:50 väntar på kolfiber från bandet (69310 kr)
- 9:58 väntar på kolfiber från bandet (69310 kr)
- 10:06 väntar på kolfiber från bandet (69310 kr)
- 10:14 väntar på kolfiber från bandet (69310 kr)
- 10:22 väntar på kolfiber från bandet (69310 kr)
- 10:30 väntar på kolfiber från bandet (69310 kr)
- 10:38 väntar på kolfiber från bandet (69310 kr)
- 10:46 väntar på kolfiber från bandet (69310 kr)
- 10:54 väntar på kolfiber från bandet (69310 kr)
- 11:02 väntar på kolfiber från bandet (69310 kr)
- 11:10 väntar på kolfiber från bandet (69310 kr)
- 11:18 väntar på kolfiber från bandet (69310 kr)
- 11:26 väntar på kolfiber från bandet (69310 kr)
- 11:34 väntar på kolfiber från bandet (69310 kr)
- 11:42 väntar på kolfiber från bandet (69310 kr)
- 11:50 väntar på kolfiber från bandet (69310 kr)
- 11:58 väntar på kolfiber från bandet (69310 kr)
- 12:06 väntar på kolfiber från bandet (69310 kr)
- 12:14 väntar på kolfiber från bandet (69310 kr)
- 12:22 väntar på kolfiber från bandet (69310 kr)
- 12:30 väntar på kolfiber från bandet (69310 kr)
- 12:38 väntar på kolfiber från bandet (69310 kr)
- 12:46 väntar på kolfiber från bandet (69310 kr)
- 12:54 väntar på kolfiber från bandet (69310 kr)
- 13:02 väntar på kolfiber från bandet (69310 kr)
- 13:10 väntar på kolfiber från bandet (69310 kr)
- 13:18 väntar på kolfiber från bandet (69310 kr)
- 13:26 väntar på kolfiber från bandet (69310 kr)
- 13:34 väntar på kolfiber från bandet (69310 kr)
- 13:42 väntar på kolfiber från bandet (69310 kr)
- 13:42 kolfiberstol gick inte att printa – tar nästa (69310 kr)
- 13:42 öppnar Alis butik – sälja (69310 kr)
- 13:44 tjänar pengar till väntar på flaskhalsen för bank2: 69310/69350 kr → printar cykelhjälm i petg (1397 kr) (69310 kr)
- 13:50 gå till skrivaren (29 m) (69310 kr)
- 13:52 printar Cykelhjälm i PETG (69310 kr)
- 13:57 tar ut 1 st ur skrivaren (69310 kr)
- 14:03 gå till Ali (29 m) (69310 kr)
- 14:03 öppnar Alis butik – sälja (69310 kr)
- 14:05 säljer hos Ali: +1397 kr (70707 kr)
- 14:07 öppnar Alis butik – köpa batteribank (70707 kr)
- 14:09 köper bank för 1600 kr (69107 kr)
- 14:15 gå till skrivaren (23 m) (69107 kr)
- 14:16 printar Batteribank (2 delar) (69107 kr)
- 14:21 tar ut 1 st ur skrivaren (69107 kr)
- 14:26 gå till platsen för batteribank (26 m) (69107 kr)
- 14:27 ställer ut batteribank (69107 kr)
- 14:34 popup: "FORTSÄTT" (69107 kr)
- 14:43 gå till sängen (21 m) (69107 kr)

</details>

## Dag 13

| Tid | Källa | Vem | Text |
|---|---|---|---|
| 14:45 | vara | ali | n2_vas |
| 14:45 | händelse | malKlart | id=sov12 del=Dag 12 – Kolfiberskrivaren nasta=f13-bygg-gamingboden |
| 14:46 | MÅL |  | Bygg gamingboden |
| 0:01 | händelse | dagenBorjar | dag=13 |
| 0:01 | meddelande | du | Dag 13. 9 dagar till jul. Utan ett eget rum är det bara ett skjul. |
| 0:01 | dagbokkort | du | Gamingboden · Dag 13. 9 dagar till jul. Utan ett eget rum är det bara ett skjul. |
| 0:01 | röst | du | Dag 13. 9 dagar till jul. Gamingboden. Utan ett eget rum är det bara ett skjul. · STORY |
| 0:08 | notis | nytt | Ali vill ha idag: Designvas i röd PETG – +50 % hela dagen (1185 kr just nu)🖥️ Webbshopen: 2 paket levererade · +1 990 kr📈 Igår: 22 printat · 18 sålt |
| 0:08 | händelse | morgonkortStangt | dag=13 |
| 0:08 | paket |  | sms |
| 0:08 | väntar | ali | Ali här. 🚀 Jetmotor. Med efterbrännare. Till en KVARN. Jag vet inte varför. Jag kunde inte sluta rita. Min fru frågade om jag mår bra. Jag har aldrig mått bättre. Ring inte brandkåren. |
| 0:08 | struken | kedja | d13 |
| 0:08 | väntar | du | En bod för spel. Jag förtjänar det. |
| 0:08 | målruta |  | Bygg gamingboden |
| 0:14 | sak | du | En bod för spel. Jag förtjänar det. |
| 0:14 | pil |  | Bygg gamingboden |
| 0:14 | notis | tanke | 💭 En bod för spel. Jag förtjänar det. |
| 0:14 | röst | du | En bod för spel. Jag förtjänar det. · MÅL |
| 0:17 | klar | du | En bod för spel. Jag förtjänar det. |
| 0:19 | struken | bror | Visade bilder på ditt skjul för polarna. Dom trodde det var en Airbnb. Jag sa inte emot. |
| 0:19 | struken | mamma | Jag sa till pappa att du bor på en soptipp. Han sa "aha, vad lugnt då" och satte på Formel 1. Lugnt? |
| 0:24 | röst | ali | Jag har sålt min första egna ritning. Till en man i Örebro. Han skrev bra lampa. Jag har ramat in mejlet. · STORY |
| 0:24 | butiksbubbla | ali | Jag har sålt min första egna ritning. Till en man i Örebro. Han skrev bra lampa. Jag har ramat in mejlet. |
| 0:25 | skratt | du | Alis dyr-pling |
| 0:25 | toast | guld | 3D-modell köpt – printa gamingbod (tillbyggnad) på skrivaren |
| 0:25 | händelse | kopt | sak=gamingbod |
| 0:33 | händelse | printStart | sak=byggsats:gamingbod |
| 0:36 | skratt | du | falsk tuta |
| 0:36 | väntar | värld:TUUT! Tjena! | TUUT! Tjena! |
| 0:36 | toast | bra | Del 1 av 6 klar |
| 0:40 | toast | bra | Del 2 av 6 klar |
| 0:42 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 0:42 | väntar | notis:Skrivare L: Tornet är tomt – mal mer så  | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 0:46 | väntar | värld:Mjau. | Mjau. |
| 0:50 | sak | värld:TUUT! Tjena! | TUUT! Tjena! |
| 0:50 | bubbla |  | TUUT! Tjena! |
| 0:51 | toast | bra | Del 3 av 6 klar |
| 0:51 | skratt | du | kvarnen spottar |
| 0:53 | klar | värld:TUUT! Tjena! | TUUT! Tjena! |
| 0:54 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 0:54 | struken | notis | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 0:54 | toast | bra | Del 4 av 6 klar |
| 0:55 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 0:55 | struken | notis | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 0:58 | väntar | info:fel | Fullt i händerna. |
| 0:58 | sak | info:fel | Fullt i händerna. |
| 0:58 | kvitto-visas | info:fel | Fullt i händerna. |
| 0:58 | toast | fel | Fullt i händerna. |
| 0:58 | toast | bra | Del 5 av 6 klar |
| 1:00 | klar | info:fel | Fullt i händerna. |
| 1:01 | händelse | printKlar | sak=byggsats:gamingbod n=1 |
| 1:01 | toast | guld | ✅ |
| 1:06 | struken | värld:Mjau. | Mjau. |
| 1:08 | sak | notis:Skrivare L: Tornet är tomt – mal mer så  | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 1:08 | notis | fel | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 1:09 | händelse | tagitUrPrint | sak=byggsats:gamingbod n=1 |
| 1:10 | klar | notis:Skrivare L: Tornet är tomt – mal mer så  | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 1:13 | väntar | info:guld | Gamingboden står klar! Det är ett tomt skal – inred den, flytta in grejerna och bygg ut den. |
| 1:13 | sak | info:guld | Gamingboden står klar! Det är ett tomt skal – inred den, flytta in grejerna och bygg ut den. |
| 1:13 | kvitto-visas | info:guld | Gamingboden står klar! Det är ett tomt skal – inred den, flytta in grejerna och bygg ut den. |
| 1:13 | toast | guld | Gamingboden står klar! Det är ett tomt skal – inred den, flytta in grejerna och bygg ut den. |
| 1:13 | händelse | malKlart | id=f13-bygg-gamingboden del=Dag 13 – Gamingboden nasta=f13-stall-in-gamersak |
| 1:13 | väntar | du | Boden är tom. Något att spela på. |
| 1:13 | MÅL |  | Ställ in en gamersak i boden |
| 1:14 | väntar | notis:📔 Prestation: Städtokig · +3 respekt | 📔 Prestation: Städtokig · +3 respekt |
| 1:15 | klar | info:guld | Gamingboden står klar! Det är ett tomt skal – inred den, flytta in grejerna och bygg ut den. |
| 1:16 | målruta |  | Ställ in en gamersak i boden |
| 1:17 | kvittens-bock |  | ✓ Bygg gamingboden |
| 1:17 | sak | du | Boden är tom. Något att spela på. |
| 1:17 | pil |  | Ställ in en gamersak i boden |
| 1:17 | notis | tanke | 💭 Boden är tom. Något att spela på. |
| 1:17 | röst | du | Boden är tom. Något att spela på. · MÅL |
| 1:17 | nick |  | nick:97 |
| 1:18 | väntar | foto | Boden |
| 1:18 | paket |  | tanke |
| 1:18 | tanke | du | Min egen bod. Här är det ingen som tjatar. |
| 1:18 | väntar | du | Min egen bod. Här är det ingen som tjatar. |
| 1:19 | klar | du | Boden är tom. Något att spela på. |
| 1:29 | sak | notis:📔 Prestation: Städtokig · +3 respekt | 📔 Prestation: Städtokig · +3 respekt |
| 1:29 | notis |  | 📔 Prestation: Städtokig · +3 respekt |
| 1:31 | klar | notis:📔 Prestation: Städtokig · +3 respekt | 📔 Prestation: Städtokig · +3 respekt |
| 1:34 | händelse | printStart | sak=kyl |
| 1:39 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 1:39 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 1:41 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 1:41 | sak | foto | Boden |
| 1:41 | foto | du | Boden |
| 1:41 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 1:42 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 1:43 | klar | foto | Boden |
| 1:43 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 1:44 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 1:45 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 1:46 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 1:47 | poolTom | du | 4 repliker använda |
| 1:47 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 1:48 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 1:49 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 1:49 | struken | notis | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 1:50 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 1:50 | struken | notis | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 1:51 | toast | guld | ✅ |
| 1:51 | händelse | printKlar | sak=kyl n=1 |
| 1:51 | sak | du | Min egen bod. Här är det ingen som tjatar. |
| 1:51 | notis | tanke | 💭 Min egen bod. Här är det ingen som tjatar. |
| 1:51 | röst | du | Min egen bod. Här är det ingen som tjatar. · STORY |
| 1:53 | ljud | kajsa | Mjau |
| 1:55 | klar | du | Min egen bod. Här är det ingen som tjatar. |
| 2:04 | väntar | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått kolfiberskrivare. Och slangfördelare. Mer säger jag inte. Gunnar vet. |
| 2:04 | radio | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått kolfiberskrivare. Och slangfördelare. Mer säger jag inte. Gunnar vet. |
| 2:04 | skratt | du | Radio-Kjelle |
| 2:04 | sak | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått kolfiberskrivare. Och slangfördelare. Mer säger jag inte. Gunnar vet. |
| 2:04 | notis |  | 📻 Radio Tippen: Radio Tippen, Kjelle här. Skjulet vid tippen har fått kolfiberskrivare. Och slangfördelare. Mer säger jag inte. Gunnar vet. |
| 2:04 | röst | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått kolfiberskrivare. Och slangfördelare. Mer säger jag inte. Gunnar vet. · REAKTION |
| 2:06 | händelse | tagitUrPrint | sak=kyl n=1 |
| 2:12 | händelse | placerat | sak=kyl |
| 2:12 | händelse | malKlart | id=f13-stall-in-gamersak del=Dag 13 – Gamingboden nasta=sov13 |
| 2:12 | paket |  | lapp |
| 2:12 | väntar | du | Dag 13 är slut. Kvarnen är för långsam. |
| 2:12 | MÅL |  | Klart för idag – sov när du vill |
| 2:14 | väntar | bror | Mamma har gjort lingonsylt i tre dagar. Hela köket är rött. Hon säger att det är till dig. Lycka till. |
| 2:14 | väntar | info:guld | Täppan är rensad. Ali har spaljé och droppslang i röd PETG. |
| 2:14 | klar | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått kolfiberskrivare. Och slangfördelare. Mer säger jag inte. Gunnar vet. |
| 2:14 | sak | info:guld | Täppan är rensad. Ali har spaljé och droppslang i röd PETG. |
| 2:14 | kvitto-visas | info:guld | Täppan är rensad. Ali har spaljé och droppslang i röd PETG. |
| 2:14 | toast | guld | Täppan är rensad. Ali har spaljé och droppslang i röd PETG. |
| 2:16 | målruta |  | Klart för idag – sov när du vill |
| 2:16 | kvittens-bock |  | ✓ Ställ in en gamersak i boden |
| 2:16 | klar | info:guld | Täppan är rensad. Ali har spaljé och droppslang i röd PETG. |
| 2:18 | sak | du | (nytt mål i rutan) |
| 2:18 | pil |  | Klart för idag – sov när du vill |
| 2:19 | klar | du | (nytt mål i rutan) |
| 2:19 | väntar | notis:🌇 Klockan är 21. Ali slår igen luckan.  | 🌇 Klockan är 21. Ali slår igen luckan. Dagens jobb är klart – gå in i skjulet och sov i sängen. |
| 2:24 | skratt | du | däcket rullar iväg |

<details><summary>Botens handlingar dag 13</summary>

- 0:00 — dag 13 börjar — (71097 kr)
- 0:08 popup: "FORTSÄTT" (71097 kr)
- 0:24 gå till Ali (22 m) (71097 kr)
- 0:24 öppnar Alis butik – köpa gamingbod (tillbyggnad) (71097 kr)
- 0:26 köper gamingbod för 41000 kr (30097 kr)
- 0:32 gå till skrivaren (23 m) (30097 kr)
- 0:33 printar Gamingbod (tillbyggnad) (6 delar) (30097 kr)
- 0:49 gå till kvarnen (29 m) (30097 kr)
- 0:58 plockar 7 skräp på tippen (bär max 16) (30097 kr)
- 1:01 gå till kvarnen (15 m) (30097 kr)
- 1:09 gå till skrivaren (7 m) (30097 kr)
- 1:09 tar ut 1 st ur skrivaren (30097 kr)
- 1:13 gå till platsen vänster om skjulet (16 m) (30097 kr)
- 1:13 bygger gamingboden (30097 kr)
- 1:26 gå till Ali (20 m) (30097 kr)
- 1:26 öppnar Alis butik – köpa receptet minikylskåp (30097 kr)
- 1:27 Ali har inte kyl (30097 kr)
- 1:33 gå till skrivaren (23 m) (30097 kr)
- 1:34 printar Minikylskåp (30097 kr)
- 2:04 gå till kvarnen (30 m) (30097 kr)
- 2:06 gå till skrivaren (7 m) (30097 kr)
- 2:06 tar ut 1 st ur skrivaren (30097 kr)
- 2:11 gå till platsen för minikylskåp (23 m) (30097 kr)
- 2:12 ställer ut minikylskåp (30097 kr)
- 2:23 gå till sängen (10 m) (30097 kr)

</details>

## Dag 14

| Tid | Källa | Vem | Text |
|---|---|---|---|
| 2:25 | vara | ali | n2_hjalm |
| 2:25 | händelse | malKlart | id=sov13 del=Dag 13 – Gamingboden nasta=jet14 |
| 2:25 | MÅL |  | Montera jetmotorn på kolfiberkvarnen |
| 0:01 | händelse | dagenBorjar | dag=14 |
| 0:01 | meddelande | du | Dag 14. 8 dagar till jul. Går kvarnen så här långsamt hinner jag inte till jul. |
| 0:01 | dagbokkort | du | Jetmotorn · Dag 14. 8 dagar till jul. Går kvarnen så här långsamt hinner jag inte till jul. |
| 0:01 | röst | du | Dag 14. 8 dagar till jul. Jetmotorn. Går kvarnen så här långsamt hinner jag inte till jul. · STORY |
| 0:09 | notis | nytt | Ali vill ha idag: Cykelhjälm i PETG – +50 % hela dagen (1995 kr just nu)📈 Igår: 1 printat · 0 sålt |
| 0:09 | händelse | morgonkortStangt | dag=14 |
| 0:09 | struken | kedja | d14 |
| 0:09 | väntar | du | Jetmotorn ska sitta på kolfiberkvarnen. Vad kan gå fel. |
| 0:11 | väntar | mamma | Paketet kom tillbaka. Det står "Okänd mottagare". Är du ens skriven där? Vart ska jag skicka din post? |
| 0:11 | paket |  | lapp → toast |
| 0:11 | lapp | 📔 Dagbok | Dag 14. Mammas paket kom tillbaka: "Okänd mottagare". Jag bor ju här. Det här är mitt hem nu. Men på pappret finns jag inte här. Jag måste bli folkbokförd – och då måste jag äga tomten jag bor på och ha ett riktigt hus. |
| 0:11 | meddelande | du | Dag 14. Mammas paket kom tillbaka: "Okänd mottagare". Jag bor ju här. Det här är mitt hem nu. Men på pappret finns jag inte här. Jag måste bli folkbokförd – och då måste jag äga tomten jag bor på och ha ett riktigt hus. |
| 0:11 | dagbokkort | du | Dag 14. Mammas paket kom tillbaka: "Okänd mottagare". Jag bor ju här. Det här är mitt hem nu. Men på pappret finns jag inte här. Jag måste bli folkbokförd – och då måste jag äga tomten jag bor på och ha ett riktigt hus. |
| 0:11 | väntar | notis:💡 Poletten trillar ner: du bor faktiskt | 💡 Poletten trillar ner: du bor faktiskt här. Nytt mål: bli folkbokförd (tavlan vid vägen). |
| 0:12 | röst | du | Dag 14. 8 dagar till jul. Mammas paket kom tillbaka: "Okänd mottagare". Jag bor ju här. Det här är mitt hem nu. Men på pappret finns jag inte här. Jag måste bli folkbokförd – och då måste jag äga tomten jag bor på och ha ett riktigt hus. · STORY |
| 0:26 | händelse | brevLast | id=polett |
| 0:26 | målruta |  | Montera jetmotorn på kolfiberkvarnen |
| 0:27 | väntar | info:guld | 🚧 Gärdesgården har flyttats ut! Du får utforska ny mark – men bara ställa saker på mark du äger. |
| 0:27 | sak | du | Jetmotorn ska sitta på kolfiberkvarnen. Vad kan gå fel. |
| 0:27 | pil |  | Montera jetmotorn på kolfiberkvarnen |
| 0:27 | notis | tanke | 💭 Jetmotorn ska sitta på kolfiberkvarnen. Vad kan gå fel. |
| 0:27 | röst | du | Jetmotorn ska sitta på kolfiberkvarnen. Vad kan gå fel. · MÅL |
| 0:28 | nick |  | nick:99 |
| 0:32 | klar | du | Jetmotorn ska sitta på kolfiberkvarnen. Vad kan gå fel. |
| 0:32 | sak | info:guld | 🚧 Gärdesgården har flyttats ut! Du får utforska ny mark – men bara ställa saker på mark du äger. |
| 0:32 | kvitto-visas | info:guld | 🚧 Gärdesgården har flyttats ut! Du får utforska ny mark – men bara ställa saker på mark du äger. |
| 0:32 | toast | guld | 🚧 Gärdesgården har flyttats ut! Du får utforska ny mark – men bara ställa saker på mark du äger. |
| 0:34 | klar | info:guld | 🚧 Gärdesgården har flyttats ut! Du får utforska ny mark – men bara ställa saker på mark du äger. |
| 0:36 | struken | notis:🌇 Klockan är 21. Ali slår igen luckan.  | 🌇 Klockan är 21. Ali slår igen luckan. Dagens jobb är klart – gå in i skjulet och sov i sängen. |
| 0:36 | struken | ali | Ali här. 🚀 Jetmotor. Med efterbrännare. Till en KVARN. Jag vet inte varför. Jag kunde inte sluta rita. Min fru frågade om jag mår bra. Jag har aldrig mått bättre. Ring inte brandkåren. |
| 0:36 | struken | bror | Mamma har gjort lingonsylt i tre dagar. Hela köket är rött. Hon säger att det är till dig. Lycka till. |
| 0:38 | röst | ali | Min fru säger att jag pratar annorlunda. Snabbare. Hon är orolig. Jag är inte orolig. Jag är vaken. · STORY |
| 0:38 | butiksbubbla | ali | Min fru säger att jag pratar annorlunda. Snabbare. Hon är orolig. Jag är inte orolig. Jag är vaken. |
| 0:40 | skratt | du | Alis dyr-pling |
| 0:40 | toast | guld | 3D-modell köpt – printa jetmotor med efterbrännare på skrivaren |
| 0:40 | händelse | kopt | sak=jetmotor |
| 0:50 | händelse | printStart | sak=byggsats:jetmotor |
| 0:50 | skratt | du | Kajsa i skrivaren |
| 0:52 | toast | bra | Del 1 av 4 klar |
| 0:53 | sak | du | Dag 13 är slut. Kvarnen är för långsam. |
| 0:53 | lapp | 📔 Dagbok | Dag 13 är slut. Kvarnen är för långsam. |
| 0:53 | meddelande | du | Dag 13 är slut. Kvarnen är för långsam. |
| 0:53 | dagbokkort | du | Dag 13 är slut. Kvarnen är för långsam. |
| 0:53 | röst | du | Dag 14. 8 dagar till jul. Dag 13 är slut. Kvarnen är för långsam. · STORY |
| 1:00 | händelse | brevLast | id=kvall13 |
| 1:00 | klar | du | Dag 13 är slut. Kvarnen är för långsam. |
| 1:01 | toast | bra | Del 2 av 4 klar |
| 1:03 | toast | bra | Del 3 av 4 klar |
| 1:03 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 1:08 | sak | mamma | Paketet kom tillbaka. Det står "Okänd mottagare". Är du ens skriven där? Vart ska jag skicka din post? |
| 1:08 | sms | mamma | Paketet kom tillbaka. Det står "Okänd mottagare". Är du ens skriven där? Vart ska jag skicka din post? |
| 1:08 | sms-bubbla | mamma | Paketet kom tillbaka. Det står "Okänd mottagare". Är du ens skriven där? Vart ska jag skicka din post? |
| 1:08 | röst | mamma | Paketet kom tillbaka. Det står "Okänd mottagare". Är du ens skriven där? Vart ska jag skicka din post? · STORY |
| 1:16 | klar | mamma | Paketet kom tillbaka. Det står "Okänd mottagare". Är du ens skriven där? Vart ska jag skicka din post? |
| 1:20 | poolTom | du | 4 repliker använda |
| 1:24 | sak | notis:💡 Poletten trillar ner: du bor faktiskt | 💡 Poletten trillar ner: du bor faktiskt här. Nytt mål: bli folkbokförd (tavlan vid vägen). |
| 1:24 | toast | guld | 💡 Poletten trillar ner: du bor faktiskt här. Nytt mål: bli folkbokförd (tavlan vid vägen). |
| 1:24 | notis | guld | 💡 Poletten trillar ner: du bor faktiskt här. Nytt mål: bli folkbokförd (tavlan vid vägen). |
| 1:27 | klar | notis:💡 Poletten trillar ner: du bor faktiskt | 💡 Poletten trillar ner: du bor faktiskt här. Nytt mål: bli folkbokförd (tavlan vid vägen). |
| 1:41 | väntar | rolf | Rolfs Rockers spelade en gång i Folkets park i Hudiksvall. 14 pers. 3 dansade. Bästa kvällen i mitt liv. /R |
| 2:06 | skratt | du | falsk tuta |
| 2:15 | väntar | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått minikylskåp. Skriv in, Gunnar. Du skriver aldrig in. |
| 2:15 | radio | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått minikylskåp. Skriv in, Gunnar. Du skriver aldrig in. |
| 2:15 | skratt | du | Radio-Kjelle |
| 2:15 | sak | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått minikylskåp. Skriv in, Gunnar. Du skriver aldrig in. |
| 2:15 | notis |  | 📻 Radio Tippen: Radio Tippen, Kjelle här. Skjulet vid tippen har fått minikylskåp. Skriv in, Gunnar. Du skriver aldrig in. |
| 2:15 | röst | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått minikylskåp. Skriv in, Gunnar. Du skriver aldrig in. · REAKTION |
| 2:24 | klar | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått minikylskåp. Skriv in, Gunnar. Du skriver aldrig in. |
| 2:27 | väntar | värld:TUUT! Tjena! | TUUT! Tjena! |
| 2:32 | sak | värld:TUUT! Tjena! | TUUT! Tjena! |
| 2:32 | bubbla |  | TUUT! Tjena! |
| 2:35 | klar | värld:TUUT! Tjena! | TUUT! Tjena! |
| 2:37 | händelse | printKlar | sak=byggsats:jetmotor n=1 |
| 2:37 | toast | guld | ✅ |
| 2:40 | händelse | tagitUrPrint | sak=byggsats:jetmotor n=1 |
| 2:40 | paket |  | sms |
| 2:40 | väntar | ali | Ali här. Du printade Jetmotor med efterbrännare från min ritning. Och det FUNKAR? Jag har bara sett sånt på YouTube. |
| 2:42 | händelse | placerat | sak=jetmotor |
| 2:42 | väntar | info:guld | 🚀 JETMOTOR! Kolfiberkvarnen mal 6× snabbare. |
| 2:42 | sak | info:guld | 🚀 JETMOTOR! Kolfiberkvarnen mal 6× snabbare. |
| 2:42 | kvitto-visas | info:guld | 🚀 JETMOTOR! Kolfiberkvarnen mal 6× snabbare. |
| 2:42 | toast | guld | 🚀 JETMOTOR! Kolfiberkvarnen mal 6× snabbare. |
| 2:42 | händelse | malKlart | id=jet14 del=Dag 14 – Jetmotorn nasta=f14-bygg-leveransladan |
| 2:42 | väntar | bror | Mamma har ringt Skatteverket. Två gånger. De sa att du måste äga där du bor eller ha ett kontrakt. Hon frågade om de kunde göra ett undantag "för det är ju mitt barn". De kunde inte. |
| 2:42 | väntar | du | En leveranslåda. Då säljer fabriken själv. |
| 2:42 | MÅL |  | Bygg leveranslådan |
| 2:44 | klar | info:guld | 🚀 JETMOTOR! Kolfiberkvarnen mal 6× snabbare. |
| 2:45 | målruta |  | Bygg leveranslådan |
| 2:46 | kvittens-bock |  | ✓ Montera jetmotorn på kolfiberkvarnen |
| 2:46 | sak | du | En leveranslåda. Då säljer fabriken själv. |
| 2:46 | pil |  | Bygg leveranslådan |
| 2:46 | notis | tanke | 💭 En leveranslåda. Då säljer fabriken själv. |
| 2:46 | röst | du | En leveranslåda. Då säljer fabriken själv. · MÅL |
| 2:46 | nick |  | nick:100 |
| 2:49 | klar | du | En leveranslåda. Då säljer fabriken själv. |
| 2:55 | händelse | printStart | sak=nyckelring |
| 2:56 | toast | guld | ✅ |
| 2:56 | händelse | printKlar | sak=nyckelring n=28 |
| 2:57 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 2:59 | händelse | printStart | sak=nyckelring |
| 2:59 | toast | guld | ✅ |
| 2:59 | händelse | printKlar | sak=nyckelring n=29 |
| 3:00 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 3:03 | sak | ali | Ali här. Du printade Jetmotor med efterbrännare från min ritning. Och det FUNKAR? Jag har bara sett sånt på YouTube. |
| 3:03 | sms | ali | Ali här. Du printade Jetmotor med efterbrännare från min ritning. Och det FUNKAR? Jag har bara sett sånt på YouTube. |
| 3:03 | sms-bubbla | ali | Ali här. Du printade Jetmotor med efterbrännare från min ritning. Och det FUNKAR? Jag har bara sett sånt på YouTube. |
| 3:03 | röst | ali | Ali här. Du printade Jetmotor med efterbrännare från min ritning. Och det FUNKAR? Jag har bara sett sånt på YouTube. · REAKTION |
| 3:13 | klar | ali | Ali här. Du printade Jetmotor med efterbrännare från min ritning. Och det FUNKAR? Jag har bara sett sånt på YouTube. |
| 3:13 | väntar | mamma | Bygger du ett hus till? Du har inte ens dammsugit ditt rum här hemma på fyra år. |
| 3:13 | paket |  | tanke |
| 3:13 | tanke | du | Raggsockorna runt jetmotorn. Äntligen passar de nåt. |
| 3:13 | väntar | du | Raggsockorna runt jetmotorn. Äntligen passar de nåt. |
| 3:13 | skratt | du | raggsockorna |
| 3:14 | webb | du | packade 1 nyckelring |
| 3:22 | sak | du | Raggsockorna runt jetmotorn. Äntligen passar de nåt. |
| 3:22 | notis | tanke | 💭 Raggsockorna runt jetmotorn. Äntligen passar de nåt. |
| 3:22 | röst | du | Raggsockorna runt jetmotorn. Äntligen passar de nåt. · REAKTION |
| 3:27 | klar | du | Raggsockorna runt jetmotorn. Äntligen passar de nåt. |
| 3:29 | väntar | info:bra | 📦 Paketet till Majvor i Nässjö ligger i postlådan – Rolf tar det till posten |
| 3:29 | sak | info:bra | 📦 Paketet till Majvor i Nässjö ligger i postlådan – Rolf tar det till posten |
| 3:29 | kvitto-visas | info:bra | 📦 Paketet till Majvor i Nässjö ligger i postlådan – Rolf tar det till posten |
| 3:29 | toast | bra | 📦 Paketet till Majvor i Nässjö ligger i postlådan – Rolf tar det till posten |
| 3:31 | klar | info:bra | 📦 Paketet till Majvor i Nässjö ligger i postlådan – Rolf tar det till posten |
| 3:33 | väntar | info:fel | Göran snodde en nyckelring. |
| 3:33 | sak | info:fel | Göran snodde en nyckelring. |
| 3:33 | kvitto-visas | info:fel | Göran snodde en nyckelring. |
| 3:33 | toast | fel | Göran snodde en nyckelring. |
| 3:35 | händelse | printStart | sak=n3_stol |
| 3:35 | klar | info:fel | Göran snodde en nyckelring. |
| 3:41 | toast | guld | ✅ |
| 3:41 | händelse | printKlar | sak=n3_stol n=8 |
| 3:42 | poolTom | du | 4 repliker använda |
| 3:42 | händelse | tagitUrPrint | sak=n3_stol n=1 |
| 3:45 | väntar | bud | (tips) |
| 3:45 | sak | bud | (tips) |
| 3:46 | klar | bud | (tips) |
| 3:48 | sak | bror | Mamma har ringt Skatteverket. Två gånger. De sa att du måste äga där du bor eller ha ett kontrakt. Hon frågade om de kunde göra ett undantag "för det är ju mitt barn". De kunde inte. |
| 3:48 | sms | bror | Mamma har ringt Skatteverket. Två gånger. De sa att du måste äga där du bor eller ha ett kontrakt. Hon frågade om de kunde göra ett undantag "för det är ju mitt barn". De kunde inte. |
| 3:48 | sms-bubbla | bror | Mamma har ringt Skatteverket. Två gånger. De sa att du måste äga där du bor eller ha ett kontrakt. Hon frågade om de kunde göra ett undantag "för det är ju mitt barn". De kunde inte. |
| 3:48 | röst | bror | Mamma har ringt Skatteverket. Två gånger. De sa att du måste äga där du bor eller ha ett kontrakt. Hon frågade om de kunde göra ett undantag "för det är ju mitt barn". De kunde inte. · STORY |
| 3:51 | aliSalt | ali | 16000 |
| 3:54 | skratt | du | Alis dyr-pling |
| 3:54 | toast | guld | 3D-modell köpt – printa leveranslåda + autoprint på skrivaren |
| 3:54 | händelse | kopt | sak=utlada |
| 4:03 | händelse | printStart | sak=byggsats:utlada |
| 4:04 | klar | bror | Mamma har ringt Skatteverket. Två gånger. De sa att du måste äga där du bor eller ha ett kontrakt. Hon frågade om de kunde göra ett undantag "för det är ju mitt barn". De kunde inte. |
| 4:05 | toast | bra | Del 1 av 3 klar |
| 4:06 | meddelande | bror | En GAMINGBOD?! Jag bor i en etta med mögel. Kan jag flytta in? Skämtar. Typ. |
| 4:07 | röst | bror | En GAMINGBOD?! Jag bor i en etta med mögel. Kan jag flytta in? Skämtar. Typ. · STORY |
| 4:16 | paket |  | sms |
| 4:16 | väntar | bror | Seriöst? … Nej. Mamma skulle aldrig sluta prata om det. Men tack. |
| 4:25 | händelse | brevLast | id=b_bod |
| 4:27 | toast | bra | Del 2 av 3 klar |
| 4:30 | händelse | printKlar | sak=byggsats:utlada n=1 |
| 4:30 | toast | guld | ✅ |
| 4:31 | väntar | info:guld | Leveranslåda + autoprint ligger i handen |
| 4:31 | händelse | tagitUrPrint | sak=byggsats:utlada n=1 |
| 4:31 | sak | info:guld | Leveranslåda + autoprint ligger i handen |
| 4:31 | kvitto-visas | info:guld | Leveranslåda + autoprint ligger i handen |
| 4:31 | toast | guld | Leveranslåda + autoprint ligger i handen |
| 4:33 | klar | info:guld | Leveranslåda + autoprint ligger i handen |
| 4:37 | händelse | placerat | sak=leveranslada |
| 4:37 | väntar | info:guld | Leveranslådan är på – skrivarna printar vidare av sig själva. |
| 4:37 | struken | info:guld | Leveranslådan är på – skrivarna printar vidare av sig själva. |
| 4:37 | väntar | info:guld | Leveranslådan står vid skrivaren. Välj en sak på skrivaren och slå på Autoprint – Ali hämtar lådan varje morgon. |
| 4:37 | monterat | du | byggsats:utlada |
| 4:37 | händelse | monterat | sak=utlada |
| 4:37 | sak | info:guld | Leveranslådan står vid skrivaren. Välj en sak på skrivaren och slå på Autoprint – Ali hämtar lådan varje morgon. |
| 4:37 | kvitto-visas | info:guld | Leveranslådan står vid skrivaren. Välj en sak på skrivaren och slå på Autoprint – Ali hämtar lådan varje morgon. |
| 4:37 | toast | guld | Leveranslådan står vid skrivaren. Välj en sak på skrivaren och slå på Autoprint – Ali hämtar lådan varje morgon. |
| 4:37 | händelse | malKlart | id=f14-bygg-leveransladan del=Dag 14 – Jetmotorn nasta=f14-kop-mutor-rolf |
| 4:37 | väntar | du | Rolf tippar mer om han får bullar. Ali har bullar. |
| 4:37 | MÅL |  | Köp mutor till Rolf hos Ali |
| 4:39 | klar | info:guld | Leveranslådan står vid skrivaren. Välj en sak på skrivaren och slå på Autoprint – Ali hämtar lådan varje morgon. |
| 4:39 | målruta |  | Köp mutor till Rolf hos Ali |
| 4:41 | kvittens-bock |  | ✓ Bygg leveranslådan |
| 4:41 | sak | du | Rolf tippar mer om han får bullar. Ali har bullar. |
| 4:41 | pil |  | Köp mutor till Rolf hos Ali |
| 4:41 | notis | tanke | 💭 Rolf tippar mer om han får bullar. Ali har bullar. |
| 4:41 | röst | du | Rolf tippar mer om han får bullar. Ali har bullar. · MÅL |
| 4:42 | skratt | du | falsk tuta |
| 4:45 | klar | du | Rolf tippar mer om han får bullar. Ali har bullar. |
| 4:54 | toast | guld | Mutor till Rolf nivå 1: En kall bira å en femtiolapp. Rolf tippar mer: 3 skräp extra varje gång |
| 4:54 | händelse | kopt | sak=sopbil |
| 4:54 | röst | ali | Nästa nivå kostar mer. Så funkar teknik. Och mitt liv. · STORY |
| 4:54 | butiksbubbla | ali | Nästa nivå kostar mer. Så funkar teknik. Och mitt liv. |
| 4:56 | händelse | malKlart | id=f14-kop-mutor-rolf del=Dag 14 – Jetmotorn nasta=sov14 |
| 4:56 | paket |  | lapp |
| 4:56 | väntar | du | Dag 14 är slut. Skjulet är fortfarande ett skjul. |
| 4:56 | MÅL |  | Klart för idag – sov när du vill |
| 4:57 | sak | du | (nytt mål i rutan) |
| 4:57 | målruta |  | Klart för idag – sov när du vill |
| 4:57 | pil |  | Klart för idag – sov när du vill |
| 4:57 | klar | du | (nytt mål i rutan) |
| 5:00 | kvittens-bock |  | ✓ Köp mutor till Rolf hos Ali |
| 5:03 | väntar | notis:🌇 Klockan är 21. Ali slår igen luckan.  | 🌇 Klockan är 21. Ali slår igen luckan. Dagens jobb är klart – gå in i skjulet och sov i sängen. |
| 5:03 | struken | mamma | Bygger du ett hus till? Du har inte ens dammsugit ditt rum här hemma på fyra år. |
| 5:06 | webbBetalt | du | 21 |

<details><summary>Botens handlingar dag 14</summary>

- 0:00 — dag 14 börjar — (30097 kr)
- 0:09 popup: "FORTSÄTT" (30097 kr)
- 0:26 popup: "FORTSÄTT" (30097 kr)
- 0:38 gå till Ali (20 m) (30097 kr)
- 0:38 öppnar Alis butik – köpa jetmotor med efterbrännare (30097 kr)
- 0:41 köper jetmotor för 16000 kr (14097 kr)
- 0:49 gå till skrivaren (33 m) (14097 kr)
- 0:50 printar Jetmotor med efterbrännare (4 delar) (14097 kr)
- 1:00 popup: "FORTSÄTT" (14097 kr)
- 1:03 väntar på kolfiber från bandet (14097 kr)
- 1:11 väntar på kolfiber från bandet (14097 kr)
- 1:19 väntar på kolfiber från bandet (14097 kr)
- 1:28 väntar på kolfiber från bandet (14097 kr)
- 1:36 väntar på kolfiber från bandet (14097 kr)
- 1:44 väntar på kolfiber från bandet (14097 kr)
- 1:52 väntar på kolfiber från bandet (14097 kr)
- 2:00 väntar på kolfiber från bandet (14097 kr)
- 2:08 väntar på kolfiber från bandet (14097 kr)
- 2:16 väntar på kolfiber från bandet (14097 kr)
- 2:24 väntar på kolfiber från bandet (14097 kr)
- 2:32 väntar på kolfiber från bandet (14097 kr)
- 2:41 tar ut 1 st ur skrivaren (14097 kr)
- 2:42 gå till kolfiberkvarnen (3 m) (14097 kr)
- 2:54 gå till skrivaren (11 m) (14097 kr)
- 2:55 printar Nyckelring (14097 kr)
- 2:57 tar ut 1 st ur skrivaren (14097 kr)
- 2:59 printar Nyckelring (14097 kr)
- 3:00 tar ut 1 st ur skrivaren (14097 kr)
- 3:04 gå till datorn (19 m) (14097 kr)
- 3:13 panel: "Webbshopen · Soptippsvägen 1
B" (14097 kr)
- 3:22 panel: "Webbshopen · Soptippsvägen 1
B" (14097 kr)
- 3:29 gå till Rolfs postlåda (paket) (29 m) (14097 kr)
- 3:30 webbshop: 1 paket i postlådan (14097 kr)
- 3:30 tjänar pengar till leveranslåda + autoprint: 14097/18500 kr → printar kolfiberstol (16000 kr) (14097 kr)
- 3:33 gå till skrivaren (15 m) (14097 kr)
- 3:35 printar Kolfiberstol (14097 kr)
- 3:43 tar ut 1 st ur skrivaren (14097 kr)
- 3:50 gå till Ali (34 m) (14097 kr)
- 3:50 öppnar Alis butik – sälja (14097 kr)
- 3:52 säljer hos Ali: +16000 kr (30097 kr)
- 3:53 öppnar Alis butik – köpa leveranslåda + autoprint (30097 kr)
- 3:55 köper utlada för 18500 kr (11597 kr)
- 4:01 gå till skrivaren (23 m) (11597 kr)
- 4:03 printar Leveranslåda + autoprint (3 delar) (11597 kr)
- 4:16 popup: "Klart du får." (11597 kr)
- 4:25 popup: "Läst" (11597 kr)
- 4:31 tar ut 1 st ur skrivaren (11597 kr)
- 4:37 gå till bygg leveranslådan (7 m) (11597 kr)
- 4:53 gå till Ali (29 m) (11597 kr)
- 4:53 öppnar Alis butik – bjuda Rolf på fika (11597 kr)
- 5:03 gå till sängen (20 m) (11347 kr)

</details>

## Dag 15

| Tid | Källa | Vem | Text |
|---|---|---|---|
| 5:06 | vara | ali | n2_vas |
| 5:06 | händelse | malKlart | id=sov14 del=Dag 14 – Jetmotorn nasta=f15-bygg-gamingboden |
| 5:06 | händelse | malKlart | id=f15-bygg-gamingboden del=Dag 15 – Fristaden nasta=gamer |
| 5:06 | MÅL |  | Inred boden · 1/3 gamersaker |
| 0:01 | händelse | dagenBorjar | dag=15 |
| 0:01 | meddelande | du | Dag 15. 7 dagar till jul. Utan adress finns jag inte på riktigt. |
| 0:01 | dagbokkort | du | Fristaden · Dag 15. 7 dagar till jul. Utan adress finns jag inte på riktigt. |
| 0:01 | röst | du | Dag 15. 7 dagar till jul. Fristaden. Utan adress finns jag inte på riktigt. · STORY |
| 0:03 | paket |  | sms |
| 0:03 | väntar | rolf | Ja har skrivit nåt. Med blyerts, så ja kan sudda om de blir fel. Lådan. /R |
| 0:08 | notis | nytt | Ali vill ha idag: Designvas i röd PETG – +50 % hela dagen (1185 kr just nu)🖥️ Webbshopen: 1 paket levererade · +21 kr📈 Igår: 3 printat · 1 sålt |
| 0:08 | händelse | morgonkortStangt | dag=15 |
| 0:08 | struken | kedja | d15 |
| 0:08 | väntar | du | Boden ska vara full. Tre saker. |
| 0:12 | målruta |  | Inred boden · 1/3 gamersaker |
| 0:14 | sak | du | Boden ska vara full. Tre saker. |
| 0:14 | pil |  | Inred boden · 1/3 gamersaker |
| 0:14 | notis | tanke | 💭 Boden ska vara full. Tre saker. |
| 0:14 | röst | du | Boden ska vara full. Tre saker. · MÅL |
| 0:14 | nick |  | nick:104 |
| 0:16 | klar | du | Boden ska vara full. Tre saker. |
| 0:18 | struken | notis:🌇 Klockan är 21. Ali slår igen luckan.  | 🌇 Klockan är 21. Ali slår igen luckan. Dagens jobb är klart – gå in i skjulet och sov i sängen. |
| 0:33 | sak | du | Dag 14 är slut. Skjulet är fortfarande ett skjul. |
| 0:33 | lapp | 📔 Dagbok | Dag 14 är slut. Skjulet är fortfarande ett skjul. |
| 0:33 | meddelande | du | Dag 14 är slut. Skjulet är fortfarande ett skjul. |
| 0:33 | dagbokkort | du | Dag 14 är slut. Skjulet är fortfarande ett skjul. |
| 0:33 | röst | du | Dag 15. 7 dagar till jul. Dag 14 är slut. Skjulet är fortfarande ett skjul. · STORY |
| 0:40 | händelse | brevLast | id=kvall14 |
| 0:40 | klar | du | Dag 14 är slut. Skjulet är fortfarande ett skjul. |
| 0:40 | poolTom | du | 4 repliker använda |
| 0:47 | röst | ali | Pension? Glöm det. Jag har en kanal nu. Fyrtiotvå följare. Fyrtiotvå, habibi! · STORY |
| 0:47 | butiksbubbla | ali | Pension? Glöm det. Jag har en kanal nu. Fyrtiotvå följare. Fyrtiotvå, habibi! |
| 0:48 | skratt | du | Alis dyr-pling |
| 0:48 | händelse | kopt | sak=projektor |
| 0:57 | paket |  | replik |
| 0:57 | väntar | bengt | Pappas. Han hade velat att nån använde den. HMPF. |
| 0:58 | ljud | kajsa | Mjau |
| 0:59 | väntar | bengt | Pappa grävde här bakom i hela sitt liv. Du har gjort mer på ett halvår. HMPF. |
| 0:59 | skratt | du | Bengt-Åke mjuknar |
| 0:59 | sak | bengt | Pappa grävde här bakom i hela sitt liv. Du har gjort mer på ett halvår. HMPF. |
| 0:59 | röst | bengt | Pappa grävde här bakom i hela sitt liv. Du har gjort mer på ett halvår. HMPF. · STORY |
| 1:00 | bubbla |  | Pappa grävde här bakom i hela sitt liv. Du har gjort mer på ett halvår. HMPF. |
| 1:02 | toast | skak | handen skakar: fullt |
| 1:03 | ljud | bom | Bommen fälls upp (hoger) |
| 1:05 | klar | bengt | Pappa grävde här bakom i hela sitt liv. Du har gjort mer på ett halvår. HMPF. |
| 1:14 | händelse | printStart | sak=projektor |
| 1:18 | sak | bror | Seriöst? … Nej. Mamma skulle aldrig sluta prata om det. Men tack. |
| 1:18 | sms | bror | Seriöst? … Nej. Mamma skulle aldrig sluta prata om det. Men tack. |
| 1:18 | sms-bubbla | bror | Seriöst? … Nej. Mamma skulle aldrig sluta prata om det. Men tack. |
| 1:18 | röst | bror | Seriöst? … Nej. Mamma skulle aldrig sluta prata om det. Men tack. · STORY |
| 1:18 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 1:19 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 1:20 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 1:21 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 1:22 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 1:23 | klar | bror | Seriöst? … Nej. Mamma skulle aldrig sluta prata om det. Men tack. |
| 1:23 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 1:24 | toast | guld | ✅ |
| 1:24 | händelse | printKlar | sak=projektor n=1 |
| 1:29 | toast | skak | handen skakar: fullt |
| 1:33 | sak | bengt | Pappas. Han hade velat att nån använde den. HMPF. |
| 1:33 | bubbla |  | Pappas. Han hade velat att nån använde den. HMPF. |
| 1:33 | notis |  | Bengt-Åke: Pappas. Han hade velat att nån använde den. HMPF. |
| 1:33 | röst | bengt | Pappas. Han hade velat att nån använde den. HMPF. · STORY |
| 1:37 | klar | bengt | Pappas. Han hade velat att nån använde den. HMPF. |
| 1:38 | händelse | tagitUrPrint | sak=projektor n=1 |
| 1:44 | händelse | placerat | sak=projektor |
| 1:49 | skratt | du | Alis dyr-pling |
| 1:49 | händelse | kopt | sak=ledpinne |
| 1:57 | händelse | printStart | sak=ledpinne |
| 2:00 | toast | guld | ✅ |
| 2:00 | händelse | printKlar | sak=ledpinne n=1 |
| 2:00 | händelse | tagitUrPrint | sak=ledpinne n=1 |
| 2:06 | händelse | placerat | sak=ledpinne |
| 2:06 | händelse | malKlart | id=gamer del=Dag 15 – Fristaden nasta=f15-printa-stall-ut |
| 2:06 | väntar | du | En jacuzzi. På en soptipp. Varför inte. |
| 2:06 | målruta |  | Printa och ställ ut en jacuzzi |
| 2:06 | MÅL |  | Printa och ställ ut en jacuzzi |
| 2:06 | sak | du | En jacuzzi. På en soptipp. Varför inte. |
| 2:06 | pil |  | Printa och ställ ut en jacuzzi |
| 2:06 | notis | tanke | 💭 En jacuzzi. På en soptipp. Varför inte. |
| 2:06 | röst | du | En jacuzzi. På en soptipp. Varför inte. · MÅL |
| 2:06 | nick |  | nick:105 |
| 2:07 | väntar | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått jetmotor med efterbrännare. Det är stort, Gunnar. |
| 2:07 | radio | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått jetmotor med efterbrännare. Det är stort, Gunnar. |
| 2:07 | skratt | du | Radio-Kjelle |
| 2:09 | klar | du | En jacuzzi. På en soptipp. Varför inte. |
| 2:10 | kvittens-bock |  | ✓ Inred boden · 3/3 gamersaker |
| 2:15 | skratt | du | Alis dyr-pling |
| 2:15 | händelse | kopt | sak=jacuzzi |
| 2:18 | sak | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått jetmotor med efterbrännare. Det är stort, Gunnar. |
| 2:18 | notis |  | 📻 Radio Tippen: Radio Tippen, Kjelle här. Skjulet vid tippen har fått jetmotor med efterbrännare. Det är stort, Gunnar. |
| 2:18 | röst | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått jetmotor med efterbrännare. Det är stort, Gunnar. · REAKTION |
| 2:23 | händelse | printStart | sak=jacuzzi |
| 2:23 | skratt | du | Kajsa i skrivaren |
| 2:26 | klar | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått jetmotor med efterbrännare. Det är stort, Gunnar. |
| 2:30 | skratt | du | kvarnen spottar |
| 2:31 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 2:32 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 2:34 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 2:35 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 2:35 | väntar | notis:Skrivare L: Tornet är tomt – mal mer så  | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 2:35 | sak | notis:Skrivare L: Tornet är tomt – mal mer så  | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 2:35 | notis | fel | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 2:37 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 2:37 | struken | notis | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 2:38 | klar | notis:Skrivare L: Tornet är tomt – mal mer så  | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 2:38 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 2:38 | struken | notis | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 2:39 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 2:39 | struken | notis | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 2:40 | poolTom | du | 4 repliker använda |
| 2:40 | väntar | värld:Mjau. | Mjau. |
| 2:48 | sak | värld:Mjau. | Mjau. |
| 2:48 | bubbla |  | Mjau. |
| 2:49 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 2:49 | struken | notis | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 2:50 | klar | värld:Mjau. | Mjau. |
| 2:51 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 2:53 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 2:55 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 2:56 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 2:58 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 2:59 | toast | guld | ✅ |
| 2:59 | händelse | printKlar | sak=jacuzzi n=1 |
| 3:04 | upplåst | skrivare_kolf | trim_kolf1 |
| 3:04 | brott | UPPLÅST | trim_kolf1 (skrivare_kolf 111 av 75) |
| 3:04 | händelse | upplast | id=trim_kolf1 flask=skrivare_kolf |
| 3:04 | paket |  | sms |
| 3:04 | väntar | ali | Ali här. Trim till kolfiberskrivaren. Kolfiber är segt. Skrivaren behöver hjälp. |
| 3:04 | sak | ali | Ali här. Trim till kolfiberskrivaren. Kolfiber är segt. Skrivaren behöver hjälp. |
| 3:04 | sms | ali | Ali här. Trim till kolfiberskrivaren. Kolfiber är segt. Skrivaren behöver hjälp. |
| 3:04 | sms-bubbla | ali | Ali här. Trim till kolfiberskrivaren. Kolfiber är segt. Skrivaren behöver hjälp. |
| 3:04 | röst | ali | Ali här. Trim till kolfiberskrivaren. Kolfiber är segt. Skrivaren behöver hjälp. · STORY |
| 3:04 | händelse | tagitUrPrint | sak=jacuzzi n=1 |
| 3:10 | klar | ali | Ali här. Trim till kolfiberskrivaren. Kolfiber är segt. Skrivaren behöver hjälp. |
| 3:17 | skratt | du | falsk tuta |
| 3:18 | händelse | placerat | sak=jacuzzi |
| 3:18 | paket |  | sms → sms → sms → sms |
| 3:18 | väntar | mamma | Mamma här. Du skickade en bild på en jacuzzi? |
| 3:18 | väntar | mamma | …och tapeter. Och en gamingbod med lampor i alla färger. |
| 3:18 | väntar | mamma | Okej. Jag erkänner. Det är finare än hemma. |
| 3:18 | väntar | mamma | Kan jag komma och bada på söndag? Pappa tar med korv. |
| 3:18 | händelse | malKlart | id=f15-printa-stall-ut del=Dag 15 – Fristaden nasta=f15-varldens-basta-fristad |
| 3:18 | väntar | du | Världens bästa fristad. |
| 3:18 | målruta |  | Världens bästa fristad · trivsel 291/300 |
| 3:18 | MÅL |  | Världens bästa fristad · trivsel 291/300 |
| 3:18 | sak | du | Världens bästa fristad. |
| 3:18 | pil |  | Världens bästa fristad · trivsel 291/300 |
| 3:18 | röst | du | Världens bästa fristad. · MÅL |
| 3:19 | nick |  | nick:106 |
| 3:20 | klar | du | Världens bästa fristad. |
| 3:22 | kvittens-bock |  | ✓ Printa och ställ ut en jacuzzi |
| 3:26 | händelse | kopt | sak=fagelbad |
| 3:31 | väntar | rolf | Chefen har köpt en kaffemaskin som pratar. Den sa "god morgon Rolf". Ja litar inte på den. /R |
| 3:34 | händelse | printStart | sak=fagelbad |
| 3:38 | väntar | värld:TUUT! Tjena! | TUUT! Tjena! |
| 3:38 | sak | värld:TUUT! Tjena! | TUUT! Tjena! |
| 3:38 | bubbla |  | TUUT! Tjena! |
| 3:39 | toast | guld | ✅ |
| 3:39 | händelse | printKlar | sak=fagelbad n=1 |
| 3:40 | händelse | tagitUrPrint | sak=fagelbad n=1 |
| 3:41 | klar | värld:TUUT! Tjena! | TUUT! Tjena! |
| 3:46 | händelse | placerat | sak=fagelbad |
| 3:50 | skratt | du | Alis dyr-pling |
| 3:50 | händelse | kopt | sak=hogtalare |
| 3:51 | sak | mamma | Mamma här. Du skickade en bild på en jacuzzi? |
| 3:51 | sms | mamma | Mamma här. Du skickade en bild på en jacuzzi? |
| 3:51 | sms-bubbla | mamma | Mamma här. Du skickade en bild på en jacuzzi? |
| 3:51 | röst | mamma | Mamma här. Du skickade en bild på en jacuzzi? · STORY |
| 3:55 | klar | mamma | Mamma här. Du skickade en bild på en jacuzzi? |
| 3:57 | väntar | info:guld | Göran har flyttat in. Han sitter på skylten nu. |
| 3:57 | sak | info:guld | Göran har flyttat in. Han sitter på skylten nu. |
| 3:57 | kvitto-visas | info:guld | Göran har flyttat in. Han sitter på skylten nu. |
| 3:57 | toast | guld | Göran har flyttat in. Han sitter på skylten nu. |
| 3:58 | händelse | printStart | sak=hogtalare |
| 3:59 | klar | info:guld | Göran har flyttat in. Han sitter på skylten nu. |
| 4:03 | toast | guld | ✅ |
| 4:03 | händelse | printKlar | sak=hogtalare n=1 |
| 4:04 | händelse | tagitUrPrint | sak=hogtalare n=1 |
| 4:10 | händelse | placerat | sak=hogtalare |
| 4:10 | händelse | malKlart | id=f15-varldens-basta-fristad del=Dag 15 – Fristaden nasta=sov15 |
| 4:10 | paket |  | lapp |
| 4:10 | lapp | 📔 Dagbok | Dag 15 är slut. På pappret finns jag inte. |
| 4:10 | meddelande | du | Dag 15 är slut. På pappret finns jag inte. |
| 4:10 | dagbokkort | du | Dag 15 är slut. På pappret finns jag inte. |
| 4:10 | målruta |  | Klart för idag – sov när du vill |
| 4:10 | MÅL |  | Klart för idag – sov när du vill |
| 4:10 | röst | du | Dag 15. 7 dagar till jul. Dag 15 är slut. På pappret finns jag inte. · STORY |
| 4:17 | händelse | brevLast | id=kvall15 |
| 4:17 | väntar | notis:🌇 Klockan är 21. Ali slår igen luckan.  | 🌇 Klockan är 21. Ali slår igen luckan. Dagens jobb är klart – gå in i skjulet och sov i sängen. |
| 4:18 | sak | du | (nytt mål i rutan) |
| 4:18 | pil |  | Klart för idag – sov när du vill |
| 4:19 | klar | du | (nytt mål i rutan) |
| 4:23 | sak | notis:🌇 Klockan är 21. Ali slår igen luckan.  | 🌇 Klockan är 21. Ali slår igen luckan. Dagens jobb är klart – gå in i skjulet och sov i sängen. |
| 4:23 | notis | guld | 🌇 Klockan är 21. Ali slår igen luckan. Dagens jobb är klart – gå in i skjulet och sov i sängen. |
| 4:25 | klar | notis:🌇 Klockan är 21. Ali slår igen luckan.  | 🌇 Klockan är 21. Ali slår igen luckan. Dagens jobb är klart – gå in i skjulet och sov i sängen. |

<details><summary>Botens handlingar dag 15</summary>

- 0:00 — dag 15 börjar — (11368 kr)
- 0:08 popup: "FORTSÄTT" (11368 kr)
- 0:24 gå till Rolfs postlåda (29 m) (11368 kr)
- 0:33 panel: "En lapp från Rolf
Lite olaglig" (11368 kr)
- 0:40 popup: "FORTSÄTT" (11368 kr)
- 0:47 gå till Ali (31 m) (11368 kr)
- 0:47 öppnar Alis butik – köpa receptet projektor + duk (11368 kr)
- 0:49 köper projektor för 950 kr (10418 kr)
- 1:03 plockar 3 skräp på tippen (bär max 16) (10418 kr)
- 1:05 gå till kvarnen (12 m) (10418 kr)
- 1:12 gå till skrivaren (7 m) (10418 kr)
- 1:14 printar Projektor + duk (10418 kr)
- 1:29 plockar 2 skräp på tippen (bär max 16) (10418 kr)
- 1:32 gå till kvarnen (13 m) (10418 kr)
- 1:38 gå till skrivaren (7 m) (10418 kr)
- 1:38 tar ut 1 st ur skrivaren (10418 kr)
- 1:43 gå till platsen för projektor + duk (23 m) (10418 kr)
- 1:44 ställer ut projektor + duk (10418 kr)
- 1:47 gå till Ali (11 m) (10418 kr)
- 1:47 öppnar Alis butik – köpa receptet rgb-ljuspinne (10418 kr)
- 1:50 köper ledpinne för 1000 kr (9418 kr)
- 1:55 gå till skrivaren (23 m) (9418 kr)
- 1:57 printar RGB-ljuspinne (9418 kr)
- 2:01 tar ut 1 st ur skrivaren (9418 kr)
- 2:05 gå till platsen för rgb-ljuspinne (17 m) (9418 kr)
- 2:06 ställer ut rgb-ljuspinne (9418 kr)
- 2:13 gå till Ali (9 m) (9418 kr)
- 2:13 öppnar Alis butik – köpa receptet jacuzzi (9418 kr)
- 2:16 köper jacuzzi för 5700 kr (3718 kr)
- 2:22 gå till skrivaren (23 m) (3718 kr)
- 2:23 printar Jacuzzi (3718 kr)
- 2:44 plockar 6 skräp på tippen (bär max 16) (3718 kr)
- 2:47 gå till kvarnen (14 m) (3718 kr)
- 3:04 gå till skrivaren (7 m) (3718 kr)
- 3:05 tar ut 1 st ur skrivaren (3718 kr)
- 3:17 gå till platsen för jacuzzi (21 m) (3718 kr)
- 3:18 ställer ut jacuzzi (3718 kr)
- 3:25 gå till Ali (9 m) (3718 kr)
- 3:25 öppnar Alis butik – köpa receptet fågelbad (3718 kr)
- 3:27 köper fagelbad för 60 kr (3658 kr)
- 3:33 gå till skrivaren (23 m) (3658 kr)
- 3:34 printar Fågelbad (3658 kr)
- 3:41 tar ut 1 st ur skrivaren (3658 kr)
- 3:45 gå till platsen för fågelbad (19 m) (3658 kr)
- 3:46 ställer ut fågelbad (3658 kr)
- 3:48 gå till Ali (10 m) (3658 kr)
- 3:48 öppnar Alis butik – köpa receptet högtalare (3658 kr)
- 3:51 köper hogtalare för 1450 kr (2208 kr)
- 3:57 gå till skrivaren (23 m) (2208 kr)
- 3:58 printar Högtalare (2208 kr)
- 4:04 tar ut 1 st ur skrivaren (2208 kr)
- 4:09 gå till platsen för högtalare (20 m) (2208 kr)
- 4:10 ställer ut högtalare (2208 kr)
- 4:17 popup: "FORTSÄTT" (2208 kr)
- 4:23 gå till sängen (11 m) (2208 kr)

</details>

## Dag 16

| Tid | Källa | Vem | Text |
|---|---|---|---|
| 4:26 | vara | ali | n2_hjalm |
| 4:26 | händelse | malKlart | id=sov15 del=Dag 15 – Fristaden nasta=m16-kop-tomten-bor |
| 4:26 | paket |  | sms |
| 4:26 | väntar | mamma | Pappa såg bilden. Han sa "aha, vad lugnt då". Det betyder att han är jättestolt. |
| 4:26 | paket |  | sms |
| 4:26 | väntar | rolf | Hörde att du har JACUZZI. Ja tar med grillen. Och Kajsa. Hon e en katt. Hon badar inte. /R |
| 4:26 | väntar | info:guld | 🏆 KAPITEL 3 KLART! Fabriken sköter sig själv. |
| 4:26 | paket |  | sms |
| 4:26 | väntar | rolf | Ja hitta ett flipperspel på mitt hemliga ställe. De e ditt. Sen: Bengt-Åke vill sälja tomten du bor på. Tavlan vid vägen. /R |
| 4:26 | MÅL |  | Köp tomten du bor på |
| 0:01 | händelse | dagenBorjar | dag=16 |
| 0:01 | meddelande | du | På pappret finns jag inte. Därför: en egen tomt och ett riktigt hus. |
| 0:01 | dagbokkort | du | KAPITEL 4 · Dag 16. 6 dagar till jul · På pappret finns jag inte. Därför: en egen tomt och ett riktigt hus. |
| 0:01 | röst | du | KAPITEL 4 · Dag 16. 6 dagar till jul. På pappret finns jag inte. Därför: en egen tomt och ett riktigt hus. · STORY |
| 0:07 | notis | nytt | Ali vill ha idag: Cykelhjälm i PETG – +50 % hela dagen (1995 kr just nu)📈 Igår: 5 printat · 0 sålt |
| 0:07 | händelse | morgonkortStangt | dag=16 |
| 0:07 | struken | kedja | d16 |
| 0:07 | väntar | du | Kommunen säljer tomten vid tippen. Ingen annan ville ha den. |
| 0:11 | målruta |  | Köp tomten du bor på |
| 0:13 | sak | du | Kommunen säljer tomten vid tippen. Ingen annan ville ha den. |
| 0:13 | pil |  | Köp tomten du bor på |
| 0:13 | notis | tanke | 💭 Kommunen säljer tomten vid tippen. Ingen annan ville ha den. |
| 0:13 | röst | du | Kommunen säljer tomten vid tippen. Ingen annan ville ha den. · MÅL |
| 0:15 | väntar | notis:📔 Prestation: Mysigt värre · +3 respekt | 📔 Prestation: Mysigt värre · +3 respekt |
| 0:18 | klar | du | Kommunen säljer tomten vid tippen. Ingen annan ville ha den. |
| 0:18 | struken | info:guld | 🏆 KAPITEL 3 KLART! Fabriken sköter sig själv. |
| 0:32 | toast | guld | Göran lämnade tillbaka pall och resten. Och en blank skruv. |
| 0:32 | väntar | ali | Ali här. Din mås stod på min disk i morse. Han köpte inget. |
| 0:32 | paket |  | brev |
| 0:32 | väntar | gunbritt | Hej. Gun-Britt här, byggnadsnämnden. Tyvärr har ni en skylt utan bygglov. Tyvärr har ni också ett hus utan bygglov. Tyvärr måste ni fylla i blankett 14B. Tyvärr finns den bara på papper. Tyvärr är jag ledsen. /Gun-Britt |
| 0:33 | väntar | info:guld | Skylten vid vägen är uppgraderad. |
| 0:33 | paket |  | sms |
| 0:33 | väntar | bror | Pappa körde förbi för att kolla. Två gånger. Han säger att han skulle åt det hållet ändå. Det ska han aldrig. |
| 0:34 | sak | info:guld | Skylten vid vägen är uppgraderad. |
| 0:34 | kvitto-visas | info:guld | Skylten vid vägen är uppgraderad. |
| 0:34 | toast | guld | Skylten vid vägen är uppgraderad. |
| 0:36 | klar | info:guld | Skylten vid vägen är uppgraderad. |
| 0:37 | poolTom | du | 4 repliker använda |
| 0:37 | skratt | du | kvarnen rapar |
| 0:38 | sak | gunbritt | Hej. Gun-Britt här, byggnadsnämnden. Tyvärr har ni en skylt utan bygglov. Tyvärr har ni också ett hus utan bygglov. Tyvärr måste ni fylla i blankett 14B. Tyvärr finns den bara på papper. Tyvärr är jag ledsen. /Gun-Britt |
| 0:38 | lapp | Brev från byggnadsnämnden | Hej. Gun-Britt här, byggnadsnämnden. Tyvärr har ni en skylt utan bygglov. Tyvärr har ni också ett hus utan bygglov. Tyvärr måste ni fylla i blankett 14B. Tyvärr finns den bara på papper. Tyvärr är jag ledsen. /Gun-Britt |
| 0:38 | röst | gunbritt | Hej. Gun-Britt här, byggnadsnämnden. Tyvärr har ni en skylt utan bygglov. Tyvärr har ni också ett hus utan bygglov. Tyvärr måste ni fylla i blankett 14B. Tyvärr finns den bara på papper. Tyvärr är jag ledsen. /Gun-Britt · STORY |
| 0:41 | toast | guld | 🧵 |
| 0:43 | händelse | printStart | sak=n2_hjalm |
| 0:48 | toast | guld | ✅ |
| 0:48 | händelse | printKlar | sak=n2_hjalm n=16 |
| 0:49 | nej | du | Ta ut cykelhjälm i petg |
| 0:49 | toast | fickskylt | Fulla fickor |
| 0:49 | fullaFickor | du | n2_hjalm |
| 0:50 | händelse | tagitUrPrint | sak=n2_hjalm n=1 |
| 0:50 | toast | guld | 🧵 |
| 0:56 | klar | gunbritt | Hej. Gun-Britt här, byggnadsnämnden. Tyvärr har ni en skylt utan bygglov. Tyvärr har ni också ett hus utan bygglov. Tyvärr måste ni fylla i blankett 14B. Tyvärr finns den bara på papper. Tyvärr är jag ledsen. /Gun-Britt |
| 1:04 | sak | notis:📔 Prestation: Mysigt värre · +3 respekt | 📔 Prestation: Mysigt värre · +3 respekt |
| 1:04 | notis |  | 📔 Prestation: Mysigt värre · +3 respekt |
| 1:05 | webb | du | packade 2 n2_hjalm |
| 1:07 | klar | notis:📔 Prestation: Mysigt värre · +3 respekt | 📔 Prestation: Mysigt värre · +3 respekt |
| 1:13 | paket |  | tanke → tanke |
| 1:13 | tanke | du | Vad har Göran nu? |
| 1:13 | väntar | du | Vad har Göran nu? |
| 1:13 | tanke | du | Guld? Där nere? |
| 1:13 | väntar | du | Guld? Där nere? |
| 1:13 | skratt | du | Göran hittar guld |
| 1:14 | sak | du | Vad har Göran nu? |
| 1:14 | notis | tanke | 💭 Vad har Göran nu? |
| 1:14 | röst | du | Vad har Göran nu? · STORY |
| 1:17 | klar | du | Vad har Göran nu? |
| 1:19 | skratt | du | falsk tuta |
| 1:19 | sak | du | Guld? Där nere? |
| 1:19 | notis | tanke | 💭 Guld? Där nere? |
| 1:19 | röst | du | Guld? Där nere? · STORY |
| 1:20 | väntar | info:bra | 📦 Paketet till Någon i Mora ligger i postlådan – Rolf tar det till posten |
| 1:21 | klar | du | Guld? Där nere? |
| 1:21 | sak | info:bra | 📦 Paketet till Någon i Mora ligger i postlådan – Rolf tar det till posten |
| 1:21 | kvitto-visas | info:bra | 📦 Paketet till Någon i Mora ligger i postlådan – Rolf tar det till posten |
| 1:21 | toast | bra | 📦 Paketet till Någon i Mora ligger i postlådan – Rolf tar det till posten |
| 1:23 | klar | info:bra | 📦 Paketet till Någon i Mora ligger i postlådan – Rolf tar det till posten |
| 1:26 | händelse | printStart | sak=n3_stol |
| 1:32 | toast | guld | ✅ |
| 1:32 | händelse | printKlar | sak=n3_stol n=9 |
| 1:34 | händelse | tagitUrPrint | sak=n3_stol n=1 |
| 1:37 | sak | mamma | …och tapeter. Och en gamingbod med lampor i alla färger. |
| 1:37 | sms | mamma | …och tapeter. Och en gamingbod med lampor i alla färger. |
| 1:37 | sms-bubbla | mamma | …och tapeter. Och en gamingbod med lampor i alla färger. |
| 1:37 | röst | mamma | …och tapeter. Och en gamingbod med lampor i alla färger. · STORY |
| 1:41 | röst | ali | Jag ska lära ut AI på pensionärsföreningen. Tisdagar. De är rädda. Jag var också rädd. · STORY |
| 1:41 | butiksbubbla | ali | Jag ska lära ut AI på pensionärsföreningen. Tisdagar. De är rädda. Jag var också rädd. |
| 1:42 | klar | mamma | …och tapeter. Och en gamingbod med lampor i alla färger. |
| 1:43 | aliSalt | ali | 16000 |
| 1:43 | aliSalt | ali | 15 |
| 1:43 | aliSalt | ali | 6 |
| 1:43 | väntar | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått rgb-ljuspinne. Och jacuzzi. Gunnar, du hör väl? |
| 1:43 | radio | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått rgb-ljuspinne. Och jacuzzi. Gunnar, du hör väl? |
| 1:43 | skratt | du | Radio-Kjelle |
| 1:45 | sak | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått rgb-ljuspinne. Och jacuzzi. Gunnar, du hör väl? |
| 1:45 | notis |  | 📻 Radio Tippen: Radio Tippen, Kjelle här. Skjulet vid tippen har fått rgb-ljuspinne. Och jacuzzi. Gunnar, du hör väl? |
| 1:45 | röst | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått rgb-ljuspinne. Och jacuzzi. Gunnar, du hör väl? · REAKTION |
| 1:53 | klar | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått rgb-ljuspinne. Och jacuzzi. Gunnar, du hör väl? |
| 1:57 | väntar | info:guld | 🏡 Du äger marken du bor på! Inte längre en hobo dweller. |
| 1:57 | paket |  | sms |
| 1:57 | väntar | rolf | Bengt-Åke sa ja! Han ville först ha 22 500 men ja sa att du städat hela hans skräpiga mark gratis. Då blev de 12.5. Grattis, markägare. /R |
| 1:57 | paket |  | sms |
| 1:57 | väntar | mamma | Pappa säger att du har köpt mark? Hur? Vems? Har du skrivit på något? Skicka papperen till mig så läser jag. |
| 1:57 | sak | info:guld | 🏡 Du äger marken du bor på! Inte längre en hobo dweller. |
| 1:57 | kvitto-visas | info:guld | 🏡 Du äger marken du bor på! Inte längre en hobo dweller. |
| 1:57 | toast | guld | 🏡 Du äger marken du bor på! Inte längre en hobo dweller. |
| 1:57 | händelse | malKlart | id=m16-kop-tomten-bor del=Dag 16 – Egen mark nasta=m16-lagg-flagan-bengt |
| 1:57 | väntar | du | Lägg flagan i Bengt-Åkes brevlåda. |
| 1:57 | MÅL |  | Lägg flagan i Bengt-Åkes brevlåda |
| 1:59 | klar | info:guld | 🏡 Du äger marken du bor på! Inte längre en hobo dweller. |
| 1:59 | målruta |  | Lägg flagan i Bengt-Åkes brevlåda |
| 2:01 | kvittens-bock |  | ✓ Köp tomten du bor på |
| 2:01 | sak | du | Lägg flagan i Bengt-Åkes brevlåda. |
| 2:01 | pil |  | Lägg flagan i Bengt-Åkes brevlåda |
| 2:01 | röst | du | Lägg flagan i Bengt-Åkes brevlåda. · MÅL |
| 2:04 | klar | du | Lägg flagan i Bengt-Åkes brevlåda. |
| 2:07 | väntar | notis:📔 Prestation: HMPF · +3 respekt | 📔 Prestation: HMPF · +3 respekt |
| 2:12 | sak | notis:📔 Prestation: HMPF · +3 respekt | 📔 Prestation: HMPF · +3 respekt |
| 2:12 | notis |  | 📔 Prestation: HMPF · +3 respekt |
| 2:14 | klar | notis:📔 Prestation: HMPF · +3 respekt | 📔 Prestation: HMPF · +3 respekt |
| 2:15 | paket |  | brev |
| 2:15 | väntar | bengt | PAPPA LETADE HELA LIVET. HMPF. GÅ IN DÅ. FÖRSTA KLUMPEN ÄR MIN. DEN SKA TILL PAPPAS GRAV. |
| 2:15 | paket |  | ge → brev |
| 2:15 | väntar |  | (läget ändras) |
| 2:15 | väntar | rolf | Svackan. Ja å Birgitta badade i floden där. Ja har vinkelslipen, men skivan e slut. Printa en kapskiva åt mej, i kolfiber. /R |
| 2:15 | händelse | malKlart | id=m16-lagg-flagan-bengt del=Dag 16 – Egen mark nasta=m16-ge-rolf-kapskiva |
| 2:15 | väntar | du | Ge Rolf en kapskiva i kolfiber. |
| 2:15 | målruta |  | Ge Rolf en kapskiva i kolfiber |
| 2:15 | MÅL |  | Ge Rolf en kapskiva i kolfiber |
| 2:16 | sak | du | Ge Rolf en kapskiva i kolfiber. |
| 2:16 | pil |  | Ge Rolf en kapskiva i kolfiber |
| 2:16 | röst | du | Ge Rolf en kapskiva i kolfiber. · MÅL |
| 2:17 | nick |  | nick:110 |
| 2:19 | kvittens-bock |  | ✓ Lägg flagan i Bengt-Åkes brevlåda |
| 2:19 | klar | du | Ge Rolf en kapskiva i kolfiber. |
| 2:21 | sak | bengt | PAPPA LETADE HELA LIVET. HMPF. GÅ IN DÅ. FÖRSTA KLUMPEN ÄR MIN. DEN SKA TILL PAPPAS GRAV. |
| 2:21 | lapp | Lapp från Bengt-Åke | PAPPA LETADE HELA LIVET. HMPF. GÅ IN DÅ. FÖRSTA KLUMPEN ÄR MIN. DEN SKA TILL PAPPAS GRAV. |
| 2:21 | röst | bengt | PAPPA LETADE HELA LIVET. HMPF. GÅ IN DÅ. FÖRSTA KLUMPEN ÄR MIN. DEN SKA TILL PAPPAS GRAV. · STORY |
| 2:27 | skratt | du | tummen på fotot |
| 2:27 | väntar | foto | Min mark (och min tumme) |
| 2:27 | paket |  | tanke |
| 2:27 | tanke | du | Nu kan ingen säga att jag inte hör hemma här. |
| 2:27 | väntar | du | Nu kan ingen säga att jag inte hör hemma här. |
| 2:28 | klar | bengt | PAPPA LETADE HELA LIVET. HMPF. GÅ IN DÅ. FÖRSTA KLUMPEN ÄR MIN. DEN SKA TILL PAPPAS GRAV. |
| 2:29 | paket |  | sms |
| 2:29 | väntar | rolf | Kajsa hitta en låda kolfiberrester bakom husvagnen. Hon ville int ha dom. Grinden. /R |
| 2:30 | sak |  | (läget ändras) |
| 2:31 | klar |  | (läget ändras) |
| 2:35 | sak | rolf | Svackan. Ja å Birgitta badade i floden där. Ja har vinkelslipen, men skivan e slut. Printa en kapskiva åt mej, i kolfiber. /R |
| 2:35 | lapp | Brev från Rolf | Svackan. Ja å Birgitta badade i floden där. Ja har vinkelslipen, men skivan e slut. Printa en kapskiva åt mej, i kolfiber. /R |
| 2:35 | röst | rolf | Svackan. Ja å Birgitta badade i floden där. Ja har vinkelslipen, men skivan e slut. Printa en kapskiva åt mej, i kolfiber. /R · STORY |
| 2:37 | poolTom | du | 4 repliker använda |
| 2:41 | brott | DÖD KNAPP | Vad ska jag göra nu? (H) i dn-ruta: täckt av por (div) |
| 2:42 | händelse | printStart | sak=kapskiva |
| 2:45 | toast | guld | ✅ |
| 2:45 | händelse | printKlar | sak=kapskiva n=1 |
| 2:45 | klar | rolf | Svackan. Ja å Birgitta badade i floden där. Ja har vinkelslipen, men skivan e slut. Printa en kapskiva åt mej, i kolfiber. /R |
| 2:45 | händelse | tagitUrPrint | sak=kapskiva n=1 |
| 2:50 | händelse | malKlart | id=m16-ge-rolf-kapskiva del=Dag 16 – Egen mark nasta=sov16 |
| 2:50 | paket |  | lapp |
| 2:50 | lapp | 📔 Dagbok | Dag 16 är slut. Nu vet kommunen att jag bor HÄR. Det ska blåsa hårt i natt. |
| 2:50 | meddelande | du | Dag 16 är slut. Nu vet kommunen att jag bor HÄR. Det ska blåsa hårt i natt. |
| 2:50 | dagbokkort | du | Dag 16 är slut. Nu vet kommunen att jag bor HÄR. Det ska blåsa hårt i natt. |
| 2:51 | MÅL |  | Klart för idag – sov när du vill |
| 2:51 | röst | du | Dag 16. 6 dagar till jul. Dag 16 är slut. Nu vet kommunen att jag bor HÄR. Det ska blåsa hårt i natt. · STORY |
| 3:00 | händelse | brevLast | id=kvall16 |
| 3:00 | målruta |  | Klart för idag – sov när du vill |
| 3:00 | väntar | notis:🌇 Klockan är 21. Ali slår igen luckan.  | 🌇 Klockan är 21. Ali slår igen luckan. Dagens jobb är klart – gå in i skjulet och sov i sängen. |
| 3:01 | sak | du | (nytt mål i rutan) |
| 3:01 | pil |  | Klart för idag – sov när du vill |
| 3:02 | klar | du | (nytt mål i rutan) |
| 3:06 | sak | bror | Pappa körde förbi för att kolla. Två gånger. Han säger att han skulle åt det hållet ändå. Det ska han aldrig. |
| 3:06 | sms | bror | Pappa körde förbi för att kolla. Två gånger. Han säger att han skulle åt det hållet ändå. Det ska han aldrig. |
| 3:06 | sms-bubbla | bror | Pappa körde förbi för att kolla. Två gånger. Han säger att han skulle åt det hållet ändå. Det ska han aldrig. |
| 3:06 | röst | bror | Pappa körde förbi för att kolla. Två gånger. Han säger att han skulle åt det hållet ändå. Det ska han aldrig. · STORY |
| 3:08 | webbBetalt | du | 4027 |

<details><summary>Botens handlingar dag 16</summary>

- 0:00 — dag 16 börjar — (2208 kr)
- 0:15 popup: "FORTSÄTT" (2208 kr)
- 0:26 gå till Rolfs postlåda (30 m) (2208 kr)
- 0:32 panel: "Rolfs postlåda
Det här låg i l" (8208 kr)
- 0:33 gå till en tunna (5 m) (8208 kr)
- 0:37 gå till PETG-kvarnen (11 m) (8208 kr)
- 0:37 tömmer det tunga i PETG-kvarnen (8208 kr)
- 0:42 gå till skrivaren (3 m) (8208 kr)
- 0:43 printar Cykelhjälm i PETG (8208 kr)
- 0:50 tar ut 1 st ur skrivaren (8208 kr)
- 0:50 fulla fickor – lägger ra_flipper i kistan (8208 kr)
- 0:55 gå till datorn (23 m) (8208 kr)
- 1:04 panel: "Webbshopen · Soptippsvägen 1
B" (8208 kr)
- 1:13 panel: "Webbshopen · Soptippsvägen 1
B" (8208 kr)
- 1:20 gå till Rolfs postlåda (paket) (29 m) (8208 kr)
- 1:21 webbshop: 1 paket i postlådan (8208 kr)
- 1:21 tjänar pengar till tomten du bor på: 8208/12500 kr → printar kolfiberstol (16000 kr) (8208 kr)
- 1:24 gå till skrivaren (15 m) (8208 kr)
- 1:26 printar Kolfiberstol (8208 kr)
- 1:34 tar ut 1 st ur skrivaren (8208 kr)
- 1:41 gå till Ali (34 m) (8208 kr)
- 1:41 öppnar Alis butik – sälja (8208 kr)
- 1:43 säljer hos Ali: +16021 kr (24229 kr)
- 1:57 gå till tavlan vid vägen (6 m) (24229 kr)
- 1:57 köper tomten du bor på (12500 kr) (11729 kr)
- 2:15 gå till Bengt-Åkes brevlåda (42 m) (11729 kr)
- 2:41 gå till skrivaren (66 m) (11729 kr)
- 2:42 printar Kapskiva i kolfiber (11729 kr)
- 2:46 tar ut 1 st ur skrivaren (11729 kr)
- 2:50 gå till Rolfs postlåda (16 m) (11729 kr)
- 3:00 popup: "FORTSÄTT" (11729 kr)
- 3:06 gå till sängen (28 m) (11729 kr)

</details>

## Dag 17

| Tid | Källa | Vem | Text |
|---|---|---|---|
| 3:08 | vara | ali | n2_vas |
| 3:08 | händelse | malKlart | id=sov16 del=Dag 16 – Egen mark nasta=m17-kop-angen-oster |
| 3:09 | MÅL |  | Köp ängen i öster – tavlan vid vägen |
| 0:01 | händelse | dagenBorjar | dag=17 |
| 0:01 | meddelande | du | Dag 17. 5 dagar till jul. Utan pengar blir det inget hus före jul. |
| 0:01 | dagbokkort | du | Ängen · Dag 17. 5 dagar till jul. Utan pengar blir det inget hus före jul. |
| 0:01 | röst | du | Dag 17. 5 dagar till jul. Ängen. Utan pengar blir det inget hus före jul. · STORY |
| 0:08 | notis | nytt | Ali vill ha idag: Designvas i röd PETG – +50 % hela dagen (1185 kr just nu)🖥️ Webbshopen: 1 paket levererade · +4 027 kr📈 Igår: 3 printat · 3 sålt |
| 0:08 | klar | bror | Pappa körde förbi för att kolla. Två gånger. Han säger att han skulle åt det hållet ändå. Det ska han aldrig. |
| 0:08 | händelse | morgonkortStangt | dag=17 |
| 0:08 | struken | kedja | d17 |
| 0:08 | paket |  | tanke → sms |
| 0:08 | tanke | du | Fem dagar kvar. Och jag är tillbaka där jag började. |
| 0:08 | väntar | du | Fem dagar kvar. Och jag är tillbaka där jag började. |
| 0:08 | väntar | rolf | Såg att plåten låg på marken. Ja å Ali kommer o hjälper dej me ett riktigt hus. /R |
| 0:08 | väntar | du | Köp ängen i öster – tavlan vid vägen. |
| 0:11 | målruta |  | Köp ängen i öster – tavlan vid vägen |
| 0:12 | skratt | du | däcket rullar iväg |
| 0:13 | sak | du | Köp ängen i öster – tavlan vid vägen. |
| 0:13 | pil |  | Köp ängen i öster – tavlan vid vägen |
| 0:13 | röst | du | Köp ängen i öster – tavlan vid vägen. · MÅL |
| 0:16 | klar | du | Köp ängen i öster – tavlan vid vägen. |
| 0:18 | struken | notis:🌇 Klockan är 21. Ali slår igen luckan.  | 🌇 Klockan är 21. Ali slår igen luckan. Dagens jobb är klart – gå in i skjulet och sov i sängen. |
| 0:18 | struken | ali | Ali här. Din mås stod på min disk i morse. Han köpte inget. |
| 0:31 | sak | du | Nu kan ingen säga att jag inte hör hemma här. |
| 0:31 | notis | tanke | 💭 Nu kan ingen säga att jag inte hör hemma här. |
| 0:31 | röst | du | Nu kan ingen säga att jag inte hör hemma här. · STORY |
| 0:33 | paket |  | replik → replik |
| 0:33 | väntar | rolf | Hon älska å bada hä. Gå du. Ja står hä en stund. |
| 0:33 | väntar | rolf | Birgittas. Hon vaska för skoj. Hitta aldrig nåt. |
| 0:34 | klar | du | Nu kan ingen säga att jag inte hör hemma här. |
| 0:35 | händelse | printStart | sak=n2_hjalm |
| 0:36 | sak | rolf | Hon älska å bada hä. Gå du. Ja står hä en stund. |
| 0:36 | notis |  | Rolf: ”Hon älska å bada hä. Gå du. Ja står hä en stund.” |
| 0:36 | röst | rolf | Hon älska å bada hä. Gå du. Ja står hä en stund. · STORY |
| 0:39 | toast | guld | ✅ |
| 0:39 | händelse | printKlar | sak=n2_hjalm n=17 |
| 0:40 | nej | du | Ta ut cykelhjälm i petg |
| 0:40 | toast | fickskylt | Fulla fickor |
| 0:40 | fullaFickor | du | n2_hjalm |
| 0:40 | klar | rolf | Hon älska å bada hä. Gå du. Ja står hä en stund. |
| 0:41 | händelse | tagitUrPrint | sak=n2_hjalm n=1 |
| 0:42 | sak | rolf | Birgittas. Hon vaska för skoj. Hitta aldrig nåt. |
| 0:42 | notis |  | Rolf: ”Birgittas. Hon vaska för skoj. Hitta aldrig nåt.” |
| 0:42 | röst | rolf | Birgittas. Hon vaska för skoj. Hitta aldrig nåt. · STORY |
| 0:43 | händelse | printStart | sak=n2_vas |
| 0:46 | toast | guld | ✅ |
| 0:46 | händelse | printKlar | sak=n2_vas n=33 |
| 0:46 | nej | du | Ta ut designvas i röd petg |
| 0:46 | toast | fickskylt | Fulla fickor |
| 0:46 | fullaFickor | du | n2_vas |
| 0:46 | klar | rolf | Birgittas. Hon vaska för skoj. Hitta aldrig nåt. |
| 0:47 | händelse | tagitUrPrint | sak=n2_vas n=1 |
| 0:49 | händelse | printStart | sak=n2_vas |
| 0:52 | toast | guld | ✅ |
| 0:52 | händelse | printKlar | sak=n2_vas n=34 |
| 0:52 | händelse | tagitUrPrint | sak=n2_vas n=1 |
| 0:55 | sak | mamma | Okej. Jag erkänner. Det är finare än hemma. |
| 0:55 | sms | mamma | Okej. Jag erkänner. Det är finare än hemma. |
| 0:55 | sms-bubbla | mamma | Okej. Jag erkänner. Det är finare än hemma. |
| 0:55 | röst | mamma | Okej. Jag erkänner. Det är finare än hemma. · STORY |
| 0:59 | klar | mamma | Okej. Jag erkänner. Det är finare än hemma. |
| 1:07 | sak | foto | Min mark (och min tumme) |
| 1:07 | foto | du | Min mark (och min tumme) |
| 1:07 | webb | du | packade 1 n2_hjalm |
| 1:09 | klar | foto | Min mark (och min tumme) |
| 1:16 | webb | du | packade 2 n2_vas |
| 1:25 | sak | du | Fem dagar kvar. Och jag är tillbaka där jag började. |
| 1:25 | notis | tanke | 💭 Fem dagar kvar. Och jag är tillbaka där jag började. |
| 1:25 | röst | du | Fem dagar kvar. Och jag är tillbaka där jag började. · STORY |
| 1:29 | klar | du | Fem dagar kvar. Och jag är tillbaka där jag började. |
| 1:31 | väntar | info:bra | 📦 Paketet till Kenneth på bilskroten ligger i postlådan – Rolf tar det till posten |
| 1:31 | sak | info:bra | 📦 Paketet till Kenneth på bilskroten ligger i postlådan – Rolf tar det till posten |
| 1:31 | kvitto-visas | info:bra | 📦 Paketet till Kenneth på bilskroten ligger i postlådan – Rolf tar det till posten |
| 1:31 | toast | bra | 📦 Paketet till Kenneth på bilskroten ligger i postlådan – Rolf tar det till posten |
| 1:32 | väntar | info:bra | 📦 Paketet till En lärare i Sundsvall ligger i postlådan – Rolf tar det till posten |
| 1:33 | klar | info:bra | 📦 Paketet till Kenneth på bilskroten ligger i postlådan – Rolf tar det till posten |
| 1:33 | sak | info:bra | 📦 Paketet till En lärare i Sundsvall ligger i postlådan – Rolf tar det till posten |
| 1:33 | kvitto-visas | info:bra | 📦 Paketet till En lärare i Sundsvall ligger i postlådan – Rolf tar det till posten |
| 1:33 | toast | bra | 📦 Paketet till En lärare i Sundsvall ligger i postlådan – Rolf tar det till posten |
| 1:35 | klar | info:bra | 📦 Paketet till En lärare i Sundsvall ligger i postlådan – Rolf tar det till posten |
| 1:37 | händelse | printStart | sak=n3_stol |
| 1:44 | toast | guld | ✅ |
| 1:44 | händelse | printKlar | sak=n3_stol n=10 |
| 1:45 | händelse | tagitUrPrint | sak=n3_stol n=1 |
| 1:48 | tanke | du | Allt går trögt på tom mage. |
| 1:48 | väntar | du | Allt går trögt på tom mage. |
| 1:48 | sak | du | Allt går trögt på tom mage. |
| 1:48 | notis | tanke | 💭 Allt går trögt på tom mage. |
| 1:48 | röst | du | Allt går trögt på tom mage. · REAKTION |
| 1:50 | klar | du | Allt går trögt på tom mage. |
| 1:52 | skratt | du | falsk tuta |
| 1:52 | röst | ali | Förut drev jag butiken. Nu bygger jag något. Det är skillnad. Du lärde mig det. Säg inget. Det blir pinsamt. · STORY |
| 1:52 | butiksbubbla | ali | Förut drev jag butiken. Nu bygger jag något. Det är skillnad. Du lärde mig det. Säg inget. Det blir pinsamt. |
| 1:54 | aliSalt | ali | 16000 |
| 1:54 | aliSalt | ali | 120 |
| 1:55 | aliSalt | ali | 114 |
| 1:55 | väntar | kjelle | Inget nytt längs vägen i dag. Bara måsar. Hälsningar till Gunnar. |
| 1:55 | radio | kjelle | Inget nytt längs vägen i dag. Bara måsar. Hälsningar till Gunnar. |
| 1:55 | skratt | du | Radio-Kjelle |
| 1:55 | aliSalt | ali | 108 |
| 1:57 | sak | kjelle | Inget nytt längs vägen i dag. Bara måsar. Hälsningar till Gunnar. |
| 1:57 | notis |  | 📻 Radio Tippen: Inget nytt längs vägen i dag. Bara måsar. Hälsningar till Gunnar. |
| 1:57 | röst | kjelle | Inget nytt längs vägen i dag. Bara måsar. Hälsningar till Gunnar. · REAKTION |
| 2:01 | väntar | rolf | 31 år på bilen och ja har aldrig backat in i nåt. Utom en gång. En brevlåda. Den hade det kommit. /R |
| 2:03 | klar | kjelle | Inget nytt längs vägen i dag. Bara måsar. Hälsningar till Gunnar. |
| 2:06 | väntar | info:guld | 🌲 Ängen i öster är din! Gärdesgården har flyttats – där får du ställa saker nu. |
| 2:06 | paket |  | sms |
| 2:06 | väntar | rolf | Ängen e din. Bengt-Åke frågade vad du ska ha den till. Ja sa solpaneler. Han trodde ja sa "sol-paella". Han va glad ändå. /R |
| 2:06 | sak | info:guld | 🌲 Ängen i öster är din! Gärdesgården har flyttats – där får du ställa saker nu. |
| 2:06 | kvitto-visas | info:guld | 🌲 Ängen i öster är din! Gärdesgården har flyttats – där får du ställa saker nu. |
| 2:06 | toast | guld | 🌲 Ängen i öster är din! Gärdesgården har flyttats – där får du ställa saker nu. |
| 2:06 | händelse | malKlart | id=m17-kop-angen-oster del=Dag 17 – Ängen nasta=m17-vaska-guld-floden |
| 2:06 | väntar | du | Vaska guld i floden. |
| 2:07 | MÅL |  | Vaska guld i floden |
| 2:08 | klar | info:guld | 🌲 Ängen i öster är din! Gärdesgården har flyttats – där får du ställa saker nu. |
| 2:08 | målruta |  | Vaska guld i floden |
| 2:10 | kvittens-bock |  | ✓ Köp ängen i öster – tavlan vid vägen |
| 2:10 | sak | du | Vaska guld i floden. |
| 2:10 | pil |  | Vaska guld i floden |
| 2:10 | röst | du | Vaska guld i floden. · MÅL |
| 2:13 | klar | du | Vaska guld i floden. |
| 2:25 | väntar | info:guld | ✨ Guld! (1.9 s) |
| 2:25 | skratt | du | första guldet |
| 2:25 | sak | info:guld | ✨ Guld! (1.9 s) |
| 2:25 | kvitto-visas | info:guld | ✨ Guld! (1.9 s) |
| 2:25 | toast | guld | ✨ Guld! (1.9 s) |
| 2:25 | händelse | malKlart | id=m17-vaska-guld-floden del=Dag 17 – Ängen nasta=m17-solpark2 |
| 2:25 | MÅL |  | Printa och sälj |
| 2:27 | klar | info:guld | ✨ Guld! (1.9 s) |
| 2:27 | målruta |  | Printa och sälj |
| 2:27 | paket |  | tanke |
| 2:27 | tanke | du | En kapsyl. |
| 2:27 | väntar | du | En kapsyl. |
| 2:29 | kvittens-bock |  | ✓ Vaska guld i floden |
| 2:29 | sak | du | (nytt mål i rutan) |
| 2:29 | pil |  | Printa och sälj |
| 2:29 | klar | du | (nytt mål i rutan) |
| 2:29 | paket |  | tanke |
| 2:29 | tanke | du | En kapsyl. Igen. |
| 2:29 | struken | du | En kapsyl. |
| 2:29 | väntar | du | En kapsyl. Igen. |
| 2:37 | sak | du | En kapsyl. Igen. |
| 2:37 | notis | tanke | 💭 En kapsyl. Igen. |
| 2:37 | röst | du | En kapsyl. Igen. · REAKTION |
| 2:39 | händelse | printStart | sak=n3_stol |
| 2:40 | klar | du | En kapsyl. Igen. |
| 2:46 | toast | guld | ✅ |
| 2:46 | händelse | printKlar | sak=n3_stol n=11 |
| 2:47 | nej | du | Ta ut kolfiberstol |
| 2:47 | toast | fickskylt | Fulla fickor |
| 2:47 | fullaFickor | du | n3_stol |
| 2:48 | händelse | tagitUrPrint | sak=n3_stol n=1 |
| 2:55 | sak | mamma | Kan jag komma och bada på söndag? Pappa tar med korv. |
| 2:55 | sms | mamma | Kan jag komma och bada på söndag? Pappa tar med korv. |
| 2:55 | sms-bubbla | mamma | Kan jag komma och bada på söndag? Pappa tar med korv. |
| 2:55 | röst | mamma | Kan jag komma och bada på söndag? Pappa tar med korv. · STORY |
| 2:57 | aliSalt | ali | 15200 |
| 2:57 | aliSalt | ali | 170 |
| 3:00 | klar | mamma | Kan jag komma och bada på söndag? Pappa tar med korv. |
| 3:10 | händelse | printStart | sak=n3_stol |
| 3:17 | toast | guld | ✅ |
| 3:17 | händelse | printKlar | sak=n3_stol n=12 |
| 3:18 | händelse | tagitUrPrint | sak=n3_stol n=1 |
| 3:24 | väntar | ali | Har du ätit? Jag frågar för att din mamma ringer. |
| 3:24 | sak | ali | Har du ätit? Jag frågar för att din mamma ringer. |
| 3:24 | röst | ali | Har du ätit? Jag frågar för att din mamma ringer. · SMÅPRAT |
| 3:25 | bubbla |  | Har du ätit? Jag frågar för att din mamma ringer. |
| 3:27 | aliSalt | ali | 14440 |
| 3:28 | klar | ali | Har du ätit? Jag frågar för att din mamma ringer. |
| 3:39 | händelse | printStart | sak=n3_stol |
| 3:45 | toast | guld | ✅ |
| 3:45 | händelse | printKlar | sak=n3_stol n=13 |
| 3:46 | händelse | tagitUrPrint | sak=n3_stol n=1 |
| 3:48 | poolTom | du | 4 repliker använda |
| 3:55 | aliSalt | ali | 13718 |
| 4:06 | händelse | printStart | sak=n3_stol |
| 4:09 | skratt | du | falsk tuta |
| 4:09 | väntar | värld:TUUT! Grann skylt! | TUUT! Grann skylt! |
| 4:09 | sak | värld:TUUT! Grann skylt! | TUUT! Grann skylt! |
| 4:09 | bubbla |  | TUUT! Grann skylt! |
| 4:12 | klar | värld:TUUT! Grann skylt! | TUUT! Grann skylt! |
| 4:13 | toast | guld | ✅ |
| 4:13 | händelse | printKlar | sak=n3_stol n=14 |
| 4:14 | händelse | tagitUrPrint | sak=n3_stol n=1 |
| 4:23 | aliSalt | ali | 13032 |
| 4:34 | händelse | printStart | sak=n3_stol |
| 4:40 | toast | guld | ✅ |
| 4:40 | händelse | printKlar | sak=n3_stol n=15 |
| 4:41 | händelse | tagitUrPrint | sak=n3_stol n=1 |
| 4:50 | aliSalt | ali | 12380 |
| 4:55 | sak | mamma | Pappa såg bilden. Han sa "aha, vad lugnt då". Det betyder att han är jättestolt. |
| 4:55 | sms | mamma | Pappa såg bilden. Han sa "aha, vad lugnt då". Det betyder att han är jättestolt. |
| 4:55 | sms-bubbla | mamma | Pappa såg bilden. Han sa "aha, vad lugnt då". Det betyder att han är jättestolt. |
| 4:55 | röst | mamma | Pappa såg bilden. Han sa "aha, vad lugnt då". Det betyder att han är jättestolt. · STORY |
| 5:01 | händelse | printStart | sak=n3_stol |
| 5:02 | klar | mamma | Pappa såg bilden. Han sa "aha, vad lugnt då". Det betyder att han är jättestolt. |
| 5:08 | skratt | du | plastspagetti |
| 5:08 | toast | guld | ✅ |
| 5:08 | händelse | printKlar | sak=n3_stol n=16 |
| 5:09 | händelse | tagitUrPrint | sak=spagetti n=1 |
| 5:18 | skratt | du | Ali köper konst |
| 5:18 | aliSalt | ali | 3 |
| 5:40 | upplåst | strom | solpark2 |
| 5:40 | brott | RESERV | solpark2 (strom 0 av 15) |
| 5:40 | händelse | upplast | id=solpark2 flask=strom |
| 5:40 | paket |  | sms |
| 5:40 | väntar | ali | Ali här. Solcellspark nummer två. Ängen är din nu. Sätt den där. |
| 5:40 | sak | ali | Ali här. Solcellspark nummer två. Ängen är din nu. Sätt den där. |
| 5:40 | sms | ali | Ali här. Solcellspark nummer två. Ängen är din nu. Sätt den där. |
| 5:40 | sms-bubbla | ali | Ali här. Solcellspark nummer två. Ängen är din nu. Sätt den där. |
| 5:40 | röst | ali | Ali här. Solcellspark nummer två. Ängen är din nu. Sätt den där. · STORY |
| 5:46 | klar | ali | Ali här. Solcellspark nummer två. Ängen är din nu. Sätt den där. |
| 5:48 | poolTom | du | 4 repliker använda |
| 6:55 | sak | mamma | Pappa säger att du har köpt mark? Hur? Vems? Har du skrivit på något? Skicka papperen till mig så läser jag. |
| 6:55 | sms | mamma | Pappa säger att du har köpt mark? Hur? Vems? Har du skrivit på något? Skicka papperen till mig så läser jag. |
| 6:55 | sms-bubbla | mamma | Pappa säger att du har köpt mark? Hur? Vems? Har du skrivit på något? Skicka papperen till mig så läser jag. |
| 6:55 | röst | mamma | Pappa säger att du har köpt mark? Hur? Vems? Har du skrivit på något? Skicka papperen till mig så läser jag. · STORY |
| 7:04 | klar | mamma | Pappa säger att du har köpt mark? Hur? Vems? Har du skrivit på något? Skicka papperen till mig så läser jag. |
| 7:37 | skratt | du | falsk tuta |
| 7:48 | poolTom | du | 4 repliker använda |
| 9:36 | skratt | du | kvarnen rapar |
| 9:40 | toast | guld | 🧵 |
| 9:43 | händelse | printStart | sak=n2_vas |
| 9:46 | toast | guld | ✅ |
| 9:46 | händelse | printKlar | sak=n2_vas n=35 |
| 9:46 | händelse | tagitUrPrint | sak=n2_vas n=1 |
| 9:47 | toast | guld | 🧵 |
| 9:48 | poolTom | du | 4 repliker använda |
| 9:53 | skratt | du | falsk tuta |
| 9:54 | aliSalt | ali | 1185 |
| 9:58 | skratt | du | Alis dyr-pling |
| 9:58 | toast | guld | 3D-modell köpt – printa solcellspark på skrivaren |
| 9:58 | händelse | kopt | sak=solpark |
| 10:07 | händelse | printStart | sak=byggsats:solpark |
| 10:08 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 10:14 | väntar | värld:Mjau. | Mjau. |
| 10:20 | sak | värld:Mjau. | Mjau. |
| 10:20 | bubbla |  | Mjau. |
| 10:21 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 10:21 | väntar | notis:Skrivare L: Tornet är tomt – mal mer så  | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 10:22 | klar | värld:Mjau. | Mjau. |
| 10:22 | skratt | du | kvarnen spottar |
| 10:22 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 10:24 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 10:25 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 10:27 | toast | bra | Del 1 av 4 klar |
| 10:27 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 10:28 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 10:30 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 10:30 | sak | notis:Skrivare L: Tornet är tomt – mal mer så  | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 10:30 | notis | fel | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 10:31 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 10:32 | klar | notis:Skrivare L: Tornet är tomt – mal mer så  | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 10:32 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 10:34 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 10:35 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 10:37 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 10:38 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 10:39 | toast | bra | Del 2 av 4 klar |
| 10:40 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 10:41 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 10:42 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 10:50 | väntar | värld:Mjau. | Mjau. |
| 10:54 | sak | värld:Mjau. | Mjau. |
| 10:54 | bubbla |  | Mjau. |
| 10:54 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 10:54 | struken | notis | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 10:55 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 10:56 | klar | värld:Mjau. | Mjau. |
| 10:56 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 10:57 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 10:58 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 10:59 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 11:00 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 11:01 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 11:02 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 11:03 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 11:04 | toast | bra | Del 3 av 4 klar |
| 11:04 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 11:05 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 11:06 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 11:07 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 11:08 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 11:10 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 11:23 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 11:23 | struken | notis | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 11:24 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 11:26 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 11:27 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 11:28 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 11:29 | händelse | printKlar | sak=byggsats:solpark n=1 |
| 11:29 | toast | guld | ✅ |
| 11:37 | händelse | tagitUrPrint | sak=byggsats:solpark n=1 |
| 11:48 | händelse | placerat | sak=solpark |
| 11:48 | händelse | malKlart | id=m17-solpark2 del=Dag 17 – Ängen nasta=sov17 |
| 11:48 | paket |  | lapp |
| 11:48 | lapp | 📔 Dagbok | Dag 17 är slut. Fem dagar kvar. Inget tak. |
| 11:48 | meddelande | du | Dag 17 är slut. Fem dagar kvar. Inget tak. |
| 11:48 | dagbokkort | du | Dag 17 är slut. Fem dagar kvar. Inget tak. |
| 11:48 | målruta |  | Klart för idag – sov när du vill |
| 11:48 | MÅL |  | Klart för idag – sov när du vill |
| 11:48 | röst | du | Dag 17. 5 dagar till jul. Dag 17 är slut. Fem dagar kvar. Inget tak. · STORY |
| 11:54 | händelse | brevLast | id=kvall17 |
| 11:54 | poolTom | du | 4 repliker använda |
| 11:55 | väntar | notis:🌇 Klockan är 21. Ali slår igen luckan.  | 🌇 Klockan är 21. Ali slår igen luckan. Dagens jobb är klart – gå in i skjulet och sov i sängen. |
| 11:56 | sak | du | (nytt mål i rutan) |
| 11:56 | pil |  | Klart för idag – sov när du vill |
| 11:56 | klar | du | (nytt mål i rutan) |
| 12:01 | sak | notis:🌇 Klockan är 21. Ali slår igen luckan.  | 🌇 Klockan är 21. Ali slår igen luckan. Dagens jobb är klart – gå in i skjulet och sov i sängen. |
| 12:01 | notis | guld | 🌇 Klockan är 21. Ali slår igen luckan. Dagens jobb är klart – gå in i skjulet och sov i sängen. |
| 12:03 | klar | notis:🌇 Klockan är 21. Ali slår igen luckan.  | 🌇 Klockan är 21. Ali slår igen luckan. Dagens jobb är klart – gå in i skjulet och sov i sängen. |
| 12:06 | webbBetalt | du | 4061 |

<details><summary>Botens handlingar dag 17</summary>

- 0:00 — dag 17 börjar — (15756 kr)
- 0:08 popup: "FORTSÄTT" (15756 kr)
- 0:24 gå till Rolfs postlåda (28 m) (15756 kr)
- 0:31 panel: "Rolfs postlåda
Det här låg i l" (15756 kr)
- 0:33 gå till skrivaren (10 m) (15756 kr)
- 0:35 printar Cykelhjälm i PETG (15756 kr)
- 0:41 tar ut 1 st ur skrivaren (15756 kr)
- 0:41 fulla fickor – lägger fynd3 i kistan (15756 kr)
- 0:43 printar Designvas i röd PETG (15756 kr)
- 0:47 tar ut 1 st ur skrivaren (15756 kr)
- 0:47 fulla fickor – lägger n2_hjalm i kistan (15756 kr)
- 0:49 printar Designvas i röd PETG (15756 kr)
- 0:53 tar ut 1 st ur skrivaren (15756 kr)
- 0:58 gå till datorn (23 m) (15756 kr)
- 1:06 panel: "Webbshopen · Soptippsvägen 1
B" (15756 kr)
- 1:15 panel: "Webbshopen · Soptippsvägen 1
B" (15756 kr)
- 1:25 panel: "Webbshopen · Soptippsvägen 1
B" (15756 kr)
- 1:31 gå till Rolfs postlåda (paket) (29 m) (15756 kr)
- 1:33 webbshop: 2 paket i postlådan (15756 kr)
- 1:33 tjänar pengar till ängen i öster: 15756/28500 kr → printar kolfiberstol (16000 kr) (15756 kr)
- 1:36 gå till skrivaren (15 m) (15756 kr)
- 1:37 printar Kolfiberstol (15756 kr)
- 1:46 tar ut 1 st ur skrivaren (15756 kr)
- 1:52 gå till Ali (34 m) (15756 kr)
- 1:52 öppnar Alis butik – sälja (15756 kr)
- 1:55 säljer hos Ali: +16342 kr (32098 kr)
- 2:06 gå till tavlan vid vägen (6 m) (32098 kr)
- 2:06 köper ängen i öster (28500 kr) (3598 kr)
- 2:25 gå till bäcken (52 m) (3598 kr)
- 2:31 vaskar i bäcken (3598 kr)
- 2:31 tjänar pengar till väntar på flaskhalsen för solpark2: 3598/3638 kr → printar kolfiberstol (15200 kr) (3598 kr)
- 2:38 gå till skrivaren (31 m) (3598 kr)
- 2:39 printar Kolfiberstol (3598 kr)
- 2:48 tar ut 1 st ur skrivaren (3598 kr)
- 2:48 fulla fickor – lägger vaskpanna i kistan (3598 kr)
- 2:56 gå till Ali (35 m) (3598 kr)
- 2:56 öppnar Alis butik – sälja (3598 kr)
- 2:58 säljer hos Ali: +15370 kr (18968 kr)
- 3:02 tjänar pengar till väntar på flaskhalsen för solpark2: 18968/19008 kr → printar kolfiberstol (14440 kr) (18968 kr)
- 3:08 gå till skrivaren (33 m) (18968 kr)
- 3:10 printar Kolfiberstol (18968 kr)
- 3:18 tar ut 1 st ur skrivaren (18968 kr)
- 3:25 gå till Ali (33 m) (18968 kr)
- 3:25 öppnar Alis butik – sälja (18968 kr)
- 3:27 säljer hos Ali: +14440 kr (33408 kr)
- 3:30 tjänar pengar till väntar på flaskhalsen för solpark2: 33408/33448 kr → printar kolfiberstol (13718 kr) (33408 kr)
- 3:37 gå till skrivaren (33 m) (33408 kr)
- 3:39 printar Kolfiberstol (33408 kr)
- 3:47 tar ut 1 st ur skrivaren (33408 kr)
- 3:54 gå till Ali (33 m) (33408 kr)
- 3:54 öppnar Alis butik – sälja (33408 kr)
- 3:56 säljer hos Ali: +13718 kr (47126 kr)
- 3:58 tjänar pengar till väntar på flaskhalsen för solpark2: 47126/47166 kr → printar kolfiberstol (13032 kr) (47126 kr)
- 4:05 gå till skrivaren (33 m) (47126 kr)
- 4:06 printar Kolfiberstol (47126 kr)
- 4:14 tar ut 1 st ur skrivaren (47126 kr)
- 4:21 gå till Ali (33 m) (47126 kr)
- 4:21 öppnar Alis butik – sälja (47126 kr)
- 4:23 säljer hos Ali: +13032 kr (60158 kr)
- 4:25 tjänar pengar till väntar på flaskhalsen för solpark2: 60158/60198 kr → printar kolfiberstol (12380 kr) (60158 kr)
- 4:32 gå till skrivaren (33 m) (60158 kr)
- 4:34 printar Kolfiberstol (60158 kr)
- 4:42 tar ut 1 st ur skrivaren (60158 kr)
- 4:49 gå till Ali (33 m) (60158 kr)
- 4:49 öppnar Alis butik – sälja (60158 kr)
- 4:50 säljer hos Ali: +12380 kr (72538 kr)
- 4:53 tjänar pengar till väntar på flaskhalsen för solpark2: 72538/72578 kr → printar kolfiberstol (11761 kr) (72538 kr)
- 4:59 gå till skrivaren (33 m) (72538 kr)
- 5:01 printar Kolfiberstol (72538 kr)
- 5:09 tar ut 1 st ur skrivaren (72538 kr)
- 5:16 gå till Ali (33 m) (72538 kr)
- 5:16 öppnar Alis butik – sälja (72538 kr)
- 5:18 säljer hos Ali: +3 kr (72541 kr)
- 5:19 tjänar pengar till väntar på flaskhalsen för solpark2: 72541/72578 kr → printar kolfiberstol (11761 kr) (72541 kr)
- 5:19 väntar på kolfiber från bandet (72541 kr)
- 5:27 väntar på kolfiber från bandet (72541 kr)
- 5:35 väntar på kolfiber från bandet (72541 kr)
- 5:43 väntar på kolfiber från bandet (72541 kr)
- 5:51 väntar på kolfiber från bandet (72541 kr)
- 5:59 väntar på kolfiber från bandet (72541 kr)
- 6:07 väntar på kolfiber från bandet (72541 kr)
- 6:16 väntar på kolfiber från bandet (72541 kr)
- 6:24 väntar på kolfiber från bandet (72541 kr)
- 6:32 väntar på kolfiber från bandet (72541 kr)
- 6:40 väntar på kolfiber från bandet (72541 kr)
- 6:48 väntar på kolfiber från bandet (72541 kr)
- 6:56 väntar på kolfiber från bandet (72541 kr)
- 7:04 väntar på kolfiber från bandet (72541 kr)
- 7:12 väntar på kolfiber från bandet (72541 kr)
- 7:20 väntar på kolfiber från bandet (72541 kr)
- 7:28 väntar på kolfiber från bandet (72541 kr)
- 7:37 väntar på kolfiber från bandet (72541 kr)
- 7:45 väntar på kolfiber från bandet (72541 kr)
- 7:53 väntar på kolfiber från bandet (72541 kr)
- 8:01 väntar på kolfiber från bandet (72541 kr)
- 8:09 väntar på kolfiber från bandet (72541 kr)
- 8:17 väntar på kolfiber från bandet (72541 kr)
- 8:25 väntar på kolfiber från bandet (72541 kr)
- 8:33 väntar på kolfiber från bandet (72541 kr)
- 8:41 väntar på kolfiber från bandet (72541 kr)
- 8:49 väntar på kolfiber från bandet (72541 kr)
- 8:58 väntar på kolfiber från bandet (72541 kr)
- 9:06 väntar på kolfiber från bandet (72541 kr)
- 9:14 väntar på kolfiber från bandet (72541 kr)
- 9:22 väntar på kolfiber från bandet (72541 kr)
- 9:22 kolfiberstol gick inte att printa – tar nästa (72541 kr)
- 9:22 öppnar Alis butik – sälja (72541 kr)
- 9:24 tjänar pengar till väntar på flaskhalsen för solpark2: 72541/72578 kr → printar designvas i röd petg (1185 kr) (72541 kr)
- 9:32 gå till en tunna (36 m) (72541 kr)
- 9:36 gå till PETG-kvarnen (13 m) (72541 kr)
- 9:36 tömmer det tunga i PETG-kvarnen (72541 kr)
- 9:41 gå till skrivaren (3 m) (72541 kr)
- 9:43 printar Designvas i röd PETG (72541 kr)
- 9:46 tar ut 1 st ur skrivaren (72541 kr)
- 9:53 gå till Ali (31 m) (72541 kr)
- 9:53 öppnar Alis butik – sälja (72541 kr)
- 9:55 säljer hos Ali: +1185 kr (73726 kr)
- 9:57 öppnar Alis butik – köpa solcellspark (73726 kr)
- 9:59 köper solpark för 4800 kr (68926 kr)
- 10:05 gå till skrivaren (23 m) (68926 kr)
- 10:07 printar Solcellspark (4 delar) (68926 kr)
- 10:16 plockar 2 skräp på tippen (bär max 16) (68926 kr)
- 10:19 gå till kvarnen (13 m) (68926 kr)
- 10:50 plockar 5 skräp på tippen (bär max 16) (68926 kr)
- 10:53 gå till kvarnen (15 m) (68926 kr)
- 11:18 plockar 8 skräp på tippen (bär max 16) (68926 kr)
- 11:21 gå till kvarnen (14 m) (68926 kr)
- 11:37 gå till skrivaren (7 m) (68926 kr)
- 11:37 tar ut 1 st ur skrivaren (68926 kr)
- 11:47 gå till platsen för solcellspark (45 m) (68926 kr)
- 11:48 ställer ut solcellspark (68926 kr)
- 11:54 popup: "FORTSÄTT" (68926 kr)
- 12:04 gå till sängen (24 m) (68926 kr)

</details>

## Dag 18

| Tid | Källa | Vem | Text |
|---|---|---|---|
| 12:06 | vara | ali | n2_hjalm |
| 12:06 | händelse | malKlart | id=sov17 del=Dag 17 – Ängen nasta=m18-bygg-diamantkvarnen |
| 12:06 | MÅL |  | Bygg diamantkvarnen |

<details><summary>Botens handlingar dag 18</summary>

- 0:00 — dag 18 börjar — (72987 kr)

</details>
