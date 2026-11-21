# Simulering kapitel 1 – körning 1

*Gjord 2026-11-21 07:59 med `verktyg/sim-kapitel1.mjs` + `verktyg/sim-bot.js` (punkt AX). Boten går 4,5 m/s, läser 15 tecken/s, trampar, vevar, plockar, printar, köper och säljer via spelets egna funktioner. Tiderna är speltid.*

## Sammanfattning

| Dag | Minuter | Väntan | Prints (totalt) | Kr vid sömn | Bär | Trivsel |
|---|---|---|---|---|---|---|
| 12 | 15.5 | 0 % | 175 | 57355 | 16 | 202 |
| 13 | 2.4 | 7 % | 176 | 18345 | 16 | 238 |
| 14 | 10.0 | 0 % | 183 | 3485 | 16 | 236 |
| 15 | 18.1 | 23 % ⚠️ | 533 | 12762 | 16 | 307 |
| 16 | 2.2 | 0 % | 534 | 14761 | 16 | 347 |
| 17 | 19.9 | 15 % | 928 | 70351 | 16 | 349 |
| 18 | 0.0 | 0 % | 928 | 74586 | 16 | 347 |

## Flaskhalskartan (EE)

| Dag | bara | mala | trampa | strom | skrivare | inkomst | Upplåst |
|---|---|---|---|---|---|---|---|
| 12 | 0 | 0 | 0 | 0 | 806 | 0 | kolfskrivare (skrivare, 2:11), bank2 (strom, 11:19, reserv) |
| 13 | 3 | 39 | 0 | 0 | 67 | 0 |  |
| 14 | 1 | 451 | 0 | 0 | 484 | 0 |  |
| 15 | 21 | 79 | 0 | 0 | 107 | 0 |  |
| 16 | 0 | 0 | 0 | 0 | 112 | 0 |  |
| 17 | 10 | 18 | 0 | 0 | 727 | 0 | trim_kolf1 (skrivare_kolf, 1:36), solpark2 (strom, 13:46, reserv) |
| 18 | 0 | 0 | 0 | 0 | 0 | 0 |  |

TIDIG: 0 · FAST: 0 · upplåst av reserven (målet väntade 3 min): 2

**SKRATT:** 87 roliga ögonblick på 68 min (12.8 per 10 min, mål minst 5)

**Köp:**

- dag 12 6:28 – kolfskrivare (25000 kr)
- dag 12 7:44 – kolfslang (27500 kr)
- dag 12 14:53 – bank (1600 kr)
- dag 13 0:33 – gamingbod (41000 kr)
- dag 14 0:47 – jetmotor (16000 kr)
- dag 14 9:08 – utlada (18500 kr)
- dag 15 0:49 – projektor (950 kr)
- dag 15 1:38 – ledpinne (1000 kr)
- dag 15 12:44 – jacuzzi (5700 kr)
- dag 15 16:31 – fagelbad (60 kr)
- dag 15 16:54 – hogtalare (1450 kr)
- dag 17 17:53 – solpark (4800 kr)

## Storykedjan (kvittens → varför → nytt mål)

| Dag | Tid | Id | Kvittens | Varför | Nytt mål | Tid till målet |
|---|---|---|---|---|---|---|


## Hur länge nya mål väntade (från att förra målet blev klart till att det nya syntes i målrutan)

Snitt 6.6 s · max 34.5 s · över 4 s: 8 · över 8 s: 7 av 24

## Flaggor (32)

- **LUGN** dag 14 0:18: 2.5 s efter BÖRJA DAGEN: [lapp] "Dag 14. Mammas paket kom tillbaka: "Okänd mottagare". Jag bo"
- **LUGN** dag 14 0:18: 2.5 s efter BÖRJA DAGEN: [meddelande] "Dag 14. Mammas paket kom tillbaka: "Okänd mottagare". Jag bo"
- **LUGN** dag 14 0:18: 2.7 s efter BÖRJA DAGEN: [röst] "Dag 14. Mammas paket kom tillbaka: "Okänd mottagare". Jag bo"
- **RÖST AVBRUTEN** dag 12 1:44: ali: 3.3 s kvar ← mamma: Jag läste om en man som bodde på en sopt
- **SEN** dag 12 7:21: 15.2 s efter händelsen: ali: "Ali här. Ännu en ritning som blev på riktigt: Kolfiberskrivare. Semest"
- **SEN** dag 14 2:25: 15.9 s efter händelsen: ali: "Ali här. Du printade Jetmotor med efterbrännare från min ritning. Och "
- **SEN** dag 14 2:50: 17.4 s efter händelsen: du: "Raggsockorna runt jetmotorn. Äntligen passar de nåt."
- **SEN** dag 15 4:06: 15.5 s efter händelsen: värld:TUUT! Tjena!: "TUUT! Tjena!"
- **SEN** dag 15 9:48: 13.8 s efter händelsen: värld:Mjau.: "Mjau."
- **SEN** dag 15 10:27: 11.7 s efter händelsen: värld:Mjau.: "Mjau."
- **SEN** dag 15 13:11: 16.4 s efter händelsen: värld:Mjau.: "Mjau."
- **SEN** dag 15 13:45: 11.1 s efter händelsen: värld:Mjau.: "Mjau."
- **SEN** dag 15 15:38: 10.8 s efter händelsen: värld:Mjau.: "Mjau."
- **SEN** dag 15 17:34: 11.5 s efter händelsen: värld:Mjau.: "Mjau."
- **SEN** dag 17 1:44: 24.8 s efter händelsen: helen: "Det där var mitt arkiv."
- **SEN** dag 17 2:24: 16.2 s efter händelsen: helen: "Här låg en soffa i elva år. Nu ligger här en RABATT."
- **SEN** dag 17 7:13: 14.0 s efter händelsen: värld:TUUT! Tjena!: "TUUT! Tjena!"
- **SEN** dag 17 9:15: 13.5 s efter händelsen: värld:Mjau.: "Mjau."
- **PAUS** dag 12 1:25: 0.0 s paus före "📦 Paketet till Agneta på biblioteket ligger i pos"
- **PAUS** dag 14 0:38: 0.0 s paus före "🚧 Gärdesgården har flyttats ut! Du får utforska n"
- **PAUS** dag 14 4:01: 0.0 s paus före "📦 Paketet till Någon i Mora ligger i postlådan – "
- **PAUS** dag 15 3:29: 0.0 s paus före "Täppan är rensad. Ali har spaljé och droppslang i "
- **PAUS** dag 16 0:39: 0.0 s paus före "🏡 Du äger marken du bor på! Inte längre en hobo d"
- **PAUS** dag 17 10:33: 0.0 s paus före "✨ Guld! (1.9 s)"
- **UPPREPNING** dag 14 2:39: info:fel: "Göran snodde cykelhjälm i petg." (förra gången dag 12)
- **UPPREPNING** dag 15 12:59: info:guld: "Marken sjönk. Ett äldre lager kom fram." (förra gången dag 15)
- **TEMPO** dag 12 15:27: dag 12 tog 15.5 min (mål 10–15)
- **TEMPO** dag 13 2:24: dag 13 tog 2.4 min (mål 10–15)
- **TEMPO** dag 15 18:07: dag 15 tog 18.1 min (mål 10–15)
- **TEMPO** dag 16 2:11: dag 16 tog 2.2 min (mål 10–15)
- **TEMPO** dag 17 19:52: dag 17 tog 19.9 min (mål 10–15)
- **TEMPO** dag 18 0:00: dag 18 tog 0.0 min (mål 10–15)

Sidfel: inga

## Dag 12

| Tid | Källa | Vem | Text |
|---|---|---|---|
| 0:00 | MÅL |  | Printa och sälj |
| 0:00 | klar | du | (nytt mål i rutan) |
| 0:00 | MÅL |  | Printa och sälj |
| 0:19 | scenInfo | rolf | Rolf på kaffe |
| 0:20 | händelse | printStart | sak=nyckelring |
| 0:21 | toast | guld | ✅ |
| 0:21 | händelse | printKlar | sak=nyckelring n=27 |
| 0:21 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 0:24 | händelse | printStart | sak=n2_vas |
| 0:27 | toast | guld | ✅ |
| 0:27 | händelse | printKlar | sak=n2_vas n=31 |
| 0:28 | händelse | tagitUrPrint | sak=n2_vas n=1 |
| 0:35 | skratt | du | kvarnen rapar |
| 0:40 | toast | guld | 🧵 |
| 0:42 | händelse | printStart | sak=n2_vas |
| 0:44 | skratt | du | falsk tuta |
| 0:45 | toast | guld | ✅ |
| 0:45 | händelse | printKlar | sak=n2_vas n=32 |
| 0:46 | händelse | tagitUrPrint | sak=n2_vas n=1 |
| 0:47 | toast | guld | 🧵 |
| 0:50 | väntar | bror | Berättade för polarna att min lillebrorsa bygger sitt eget hus. Dom tror jag ljuger. Fortsätt. |
| 0:50 | sak | bror | Berättade för polarna att min lillebrorsa bygger sitt eget hus. Dom tror jag ljuger. Fortsätt. |
| 0:50 | sms | bror | Berättade för polarna att min lillebrorsa bygger sitt eget hus. Dom tror jag ljuger. Fortsätt. |
| 0:50 | sms-bubbla | bror | Berättade för polarna att min lillebrorsa bygger sitt eget hus. Dom tror jag ljuger. Fortsätt. |
| 0:50 | röst | bror | Berättade för polarna att min lillebrorsa bygger sitt eget hus. Dom tror jag ljuger. Fortsätt. · SMÅPRAT |
| 0:57 | klar | bror | Berättade för polarna att min lillebrorsa bygger sitt eget hus. Dom tror jag ljuger. Fortsätt. |
| 1:00 | webb | du | packade 1 nyckelring |
| 1:09 | webb | du | packade 2 n2_vas |
| 1:23 | väntar | info:bra | 📦 Paketet till En fotbollsklubb i Borås ligger i postlådan – Rolf tar det till posten |
| 1:23 | sak | info:bra | 📦 Paketet till En fotbollsklubb i Borås ligger i postlådan – Rolf tar det till posten |
| 1:23 | kvitto-visas | info:bra | 📦 Paketet till En fotbollsklubb i Borås ligger i postlådan – Rolf tar det till posten |
| 1:23 | toast | bra | 📦 Paketet till En fotbollsklubb i Borås ligger i postlådan – Rolf tar det till posten |
| 1:24 | väntar | info:bra | 📦 Paketet till Agneta på biblioteket ligger i postlådan – Rolf tar det till posten |
| 1:25 | klar | info:bra | 📦 Paketet till En fotbollsklubb i Borås ligger i postlådan – Rolf tar det till posten |
| 1:25 | sak | info:bra | 📦 Paketet till Agneta på biblioteket ligger i postlådan – Rolf tar det till posten |
| 1:25 | kvitto-visas | info:bra | 📦 Paketet till Agneta på biblioteket ligger i postlådan – Rolf tar det till posten |
| 1:25 | toast | bra | 📦 Paketet till Agneta på biblioteket ligger i postlådan – Rolf tar det till posten |
| 1:27 | klar | info:bra | 📦 Paketet till Agneta på biblioteket ligger i postlådan – Rolf tar det till posten |
| 1:28 | händelse | printStart | sak=n2_hjalm |
| 1:33 | toast | guld | ✅ |
| 1:33 | händelse | printKlar | sak=n2_hjalm n=4 |
| 1:34 | händelse | tagitUrPrint | sak=n2_hjalm n=1 |
| 1:37 | väntar | bud | (tips) |
| 1:37 | sak | bud | (tips) |
| 1:39 | klar | bud | (tips) |
| 1:41 | röst | ali | Jag gick upp en timme tidigare idag. Inte för butiken. För mig. Jag ritade en lampa. · STORY |
| 1:41 | butiksbubbla | ali | Jag gick upp en timme tidigare idag. Inte för butiken. För mig. Jag ritade en lampa. |
| 1:42 | aliSalt | ali | 1995 |
| 1:43 | meddelande | mamma | Jag läste om en man som bodde på en soptipp. Han blev attackerad av måsar. Finns det måsar där? |
| 1:44 | röst | mamma | Jag läste om en man som bodde på en soptipp. Han blev attackerad av måsar. Finns det måsar där? · STORY |
| 1:44 | röst-avbruten | ali | 3.3 s kvar ← mamma: Jag läste om en man som bodde på en sopt |
| 1:55 | paket |  | sms |
| 1:55 | väntar | mamma | En katt? Är den vaccinerad? Rör den inte. Eller jo. Ge den en macka. |
| 2:05 | händelse | brevLast | id=m_masar |
| 2:07 | sak | mamma | En katt? Är den vaccinerad? Rör den inte. Eller jo. Ge den en macka. |
| 2:07 | sms | mamma | En katt? Är den vaccinerad? Rör den inte. Eller jo. Ge den en macka. |
| 2:07 | sms-bubbla | mamma | En katt? Är den vaccinerad? Rör den inte. Eller jo. Ge den en macka. |
| 2:07 | röst | mamma | En katt? Är den vaccinerad? Rör den inte. Eller jo. Ge den en macka. · STORY |
| 2:11 | upplåst | skrivare | kolfskrivare |
| 2:11 | brott | UPPLÅST | kolfskrivare (skrivare 790 av 75) |
| 2:11 | händelse | upplast | id=kolfskrivare flask=skrivare |
| 2:11 | paket |  | tanke → sms |
| 2:11 | tanke | du | Kolfiberrullarna bara ligger där. Jag har ingen skrivare som tar dem. |
| 2:11 | väntar | du | Kolfiberrullarna bara ligger där. Jag har ingen skrivare som tar dem. |
| 2:11 | väntar | ali | Ali här. Kolfiberskrivaren. Den tar bara svartgrått. Den är kräsen, som min fru. |
| 2:13 | klar | mamma | En katt? Är den vaccinerad? Rör den inte. Eller jo. Ge den en macka. |
| 2:21 | sak | du | Kolfiberrullarna bara ligger där. Jag har ingen skrivare som tar dem. |
| 2:21 | notis | tanke | 💭 Kolfiberrullarna bara ligger där. Jag har ingen skrivare som tar dem. |
| 2:21 | röst | du | Kolfiberrullarna bara ligger där. Jag har ingen skrivare som tar dem. · STORY |
| 2:23 | händelse | printStart | sak=n2_hjalm |
| 2:27 | klar | du | Kolfiberrullarna bara ligger där. Jag har ingen skrivare som tar dem. |
| 2:27 | toast | guld | ✅ |
| 2:27 | händelse | printKlar | sak=n2_hjalm n=5 |
| 2:28 | händelse | tagitUrPrint | sak=n2_hjalm n=1 |
| 2:36 | aliSalt | ali | 1895 |
| 2:50 | skratt | du | kvarnen rapar |
| 2:52 | toast | guld | 🧵 |
| 2:52 | sak | ali | Ali här. Kolfiberskrivaren. Den tar bara svartgrått. Den är kräsen, som min fru. |
| 2:52 | sms | ali | Ali här. Kolfiberskrivaren. Den tar bara svartgrått. Den är kräsen, som min fru. |
| 2:52 | sms-bubbla | ali | Ali här. Kolfiberskrivaren. Den tar bara svartgrått. Den är kräsen, som min fru. |
| 2:52 | röst | ali | Ali här. Kolfiberskrivaren. Den tar bara svartgrått. Den är kräsen, som min fru. · STORY |
| 2:56 | toast | guld | 🧵 |
| 2:56 | händelse | printStart | sak=n2_hjalm |
| 2:59 | klar | ali | Ali här. Kolfiberskrivaren. Den tar bara svartgrått. Den är kräsen, som min fru. |
| 3:01 | toast | guld | ✅ |
| 3:01 | händelse | printKlar | sak=n2_hjalm n=6 |
| 3:02 | händelse | tagitUrPrint | sak=n2_hjalm n=1 |
| 3:07 | väntar | info:fel | Göran snodde cykelhjälm i petg. |
| 3:07 | sak | info:fel | Göran snodde cykelhjälm i petg. |
| 3:07 | kvitto-visas | info:fel | Göran snodde cykelhjälm i petg. |
| 3:07 | toast | fel | Göran snodde cykelhjälm i petg. |
| 3:09 | klar | info:fel | Göran snodde cykelhjälm i petg. |
| 3:19 | händelse | printStart | sak=n2_hjalm |
| 3:23 | skratt | du | falsk tuta |
| 3:23 | väntar | värld:TUUT TUUT! | TUUT TUUT! |
| 3:23 | sak | värld:TUUT TUUT! | TUUT TUUT! |
| 3:23 | bubbla |  | TUUT TUUT! |
| 3:24 | toast | guld | ✅ |
| 3:24 | händelse | printKlar | sak=n2_hjalm n=7 |
| 3:25 | händelse | tagitUrPrint | sak=n2_hjalm n=1 |
| 3:26 | klar | värld:TUUT TUUT! | TUUT TUUT! |
| 3:27 | händelse | printStart | sak=n2_hjalm |
| 3:31 | toast | guld | ✅ |
| 3:31 | händelse | printKlar | sak=n2_hjalm n=8 |
| 3:32 | händelse | tagitUrPrint | sak=n2_hjalm n=1 |
| 3:35 | händelse | printStart | sak=n2_hjalm |
| 3:39 | toast | guld | ✅ |
| 3:39 | händelse | printKlar | sak=n2_hjalm n=9 |
| 3:40 | händelse | tagitUrPrint | sak=n2_hjalm n=1 |
| 3:48 | aliSalt | ali | 1800 |
| 3:48 | aliSalt | ali | 1710 |
| 3:49 | aliSalt | ali | 1625 |
| 3:49 | väntar | ali | Akta pölen. Den har varit där sedan 2014. |
| 3:50 | sak | ali | Akta pölen. Den har varit där sedan 2014. |
| 3:50 | röst | ali | Akta pölen. Den har varit där sedan 2014. · SMÅPRAT |
| 3:51 | bubbla |  | Akta pölen. Den har varit där sedan 2014. |
| 3:53 | klar | ali | Akta pölen. Den har varit där sedan 2014. |
| 4:01 | skratt | du | kvarnen rapar |
| 4:03 | väntar | bror | Visade bilder på ditt skjul för polarna. Dom trodde det var en Airbnb. Jag sa inte emot. |
| 4:05 | toast | guld | 🧵 |
| 4:07 | händelse | printStart | sak=n2_hjalm |
| 4:12 | toast | guld | ✅ |
| 4:12 | händelse | printKlar | sak=n2_hjalm n=10 |
| 4:13 | händelse | tagitUrPrint | sak=n2_hjalm n=1 |
| 4:14 | toast | guld | 🧵 |
| 4:21 | aliSalt | ali | 1544 |
| 4:30 | händelse | printStart | sak=n2_hjalm |
| 4:34 | toast | guld | ✅ |
| 4:34 | händelse | printKlar | sak=n2_hjalm n=11 |
| 4:35 | händelse | tagitUrPrint | sak=n2_hjalm n=1 |
| 4:37 | händelse | printStart | sak=n2_hjalm |
| 4:41 | toast | guld | ✅ |
| 4:41 | händelse | printKlar | sak=n2_hjalm n=12 |
| 4:42 | händelse | tagitUrPrint | sak=n2_hjalm n=1 |
| 4:50 | aliSalt | ali | 1467 |
| 4:50 | aliSalt | ali | 1397 |
| 5:04 | skratt | du | kvarnen rapar |
| 5:07 | toast | guld | 🧵 |
| 5:10 | händelse | printStart | sak=n2_hjalm |
| 5:14 | skratt | du | plastspagetti |
| 5:14 | toast | guld | ✅ |
| 5:14 | händelse | printKlar | sak=n2_hjalm n=13 |
| 5:15 | händelse | tagitUrPrint | sak=spagetti n=1 |
| 5:15 | toast | guld | 🧵 |
| 5:18 | väntar | värld:TUUT TUUT! | TUUT TUUT! |
| 5:18 | sak | värld:TUUT TUUT! | TUUT TUUT! |
| 5:18 | bubbla |  | TUUT TUUT! |
| 5:20 | väntar | rolf | Fick en kajak i lasset. Ingen paddel. Typiskt. Ja la den vid grinden åt dig. /R |
| 5:20 | väntar | bror | Visade bilder på ditt skjul för polarna. Dom trodde det var en Airbnb. Jag sa inte emot. |
| 5:21 | klar | värld:TUUT TUUT! | TUUT TUUT! |
| 5:23 | skratt | du | Ali köper konst |
| 5:23 | aliSalt | ali | 3 |
| 5:32 | händelse | printStart | sak=n2_hjalm |
| 5:36 | skratt | du | plastspagetti |
| 5:36 | toast | guld | ✅ |
| 5:36 | händelse | printKlar | sak=n2_hjalm n=14 |
| 5:37 | händelse | tagitUrPrint | sak=spagetti n=1 |
| 5:39 | händelse | printStart | sak=n2_hjalm |
| 5:43 | toast | guld | ✅ |
| 5:43 | händelse | printKlar | sak=n2_hjalm n=15 |
| 5:44 | händelse | tagitUrPrint | sak=n2_hjalm n=1 |
| 5:52 | aliSalt | ali | 1397 |
| 5:52 | skratt | du | Ali köper konst |
| 5:52 | aliSalt | ali | 3 |
| 5:54 | väntar | mamma | Jag sa till pappa att du bor på en soptipp. Han sa "aha, vad lugnt då" och satte på Formel 1. Lugnt? |
| 6:05 | skratt | du | kvarnen rapar |
| 6:07 | toast | guld | 🧵 |
| 6:11 | händelse | printStart | sak=n2_hjalm |
| 6:12 | toast | guld | 🧵 |
| 6:12 | toast | guld | 🧵 |
| 6:12 | toast | guld | 🧵 |
| 6:12 | toast | guld | 🧵 |
| 6:12 | toast | guld | 🧵 |
| 6:12 | toast | guld | 🧵 |
| 6:12 | toast | guld | 🧵 |
| 6:12 | toast | guld | 🧵 |
| 6:13 | toast | guld | 🧵 |
| 6:13 | toast | guld | 🧵 |
| 6:13 | toast | guld | 🧵 |
| 6:13 | toast | guld | 🧵 |
| 6:13 | toast | guld | 🧵 |
| 6:13 | toast | guld | 🧵 |
| 6:15 | toast | guld | ✅ |
| 6:15 | händelse | printKlar | sak=n2_hjalm n=16 |
| 6:16 | händelse | tagitUrPrint | sak=n2_hjalm n=1 |
| 6:24 | aliSalt | ali | 1397 |
| 6:25 | tanke | du | Allt går trögt på tom mage. |
| 6:25 | väntar | du | Allt går trögt på tom mage. |
| 6:25 | sak | du | Allt går trögt på tom mage. |
| 6:25 | notis | tanke | 💭 Allt går trögt på tom mage. |
| 6:25 | röst | du | Allt går trögt på tom mage. · REAKTION |
| 6:27 | skratt | du | Alis dyr-pling |
| 6:27 | toast | guld | 3D-modell köpt – printa kolfiberskrivare på skrivaren |
| 6:27 | händelse | kopt | sak=kolfskrivare |
| 6:28 | klar | du | Allt går trögt på tom mage. |
| 6:32 | väntar | mamma | Jag har lagt upp en bild på ditt skjul på Facebook. 47 gilla. Faster Inger skrev "Va fint, är det en bastu?" |
| 6:36 | händelse | printStart | sak=byggsats:kolfskrivare |
| 6:39 | toast | bra | Del 1 av 5 klar |
| 6:41 | toast | bra | Del 2 av 5 klar |
| 6:43 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 6:43 | väntar | notis:Skrivare PETG: Tornet är tomt – mal mer  | Skrivare PETG: Tornet är tomt – mal mer så fortsätter den |
| 6:43 | sak | notis:Skrivare PETG: Tornet är tomt – mal mer  | Skrivare PETG: Tornet är tomt – mal mer så fortsätter den |
| 6:43 | notis | fel | Skrivare PETG: Tornet är tomt – mal mer så fortsätter den |
| 6:46 | klar | notis:Skrivare PETG: Tornet är tomt – mal mer  | Skrivare PETG: Tornet är tomt – mal mer så fortsätter den |
| 6:50 | skratt | du | kvarnen rapar |
| 6:51 | skratt | du | falsk tuta |
| 6:51 | toast | bra | Del 3 av 5 klar |
| 6:56 | toast | bra | Del 4 av 5 klar |
| 7:01 | händelse | printKlar | sak=byggsats:kolfskrivare n=1 |
| 7:01 | toast | guld | ✅ |
| 7:04 | händelse | tagitUrPrint | sak=byggsats:kolfskrivare n=1 |
| 7:04 | paket |  | sms |
| 7:04 | väntar | ali | Ali här. Ännu en ritning som blev på riktigt: Kolfiberskrivare. Semesterkassan växer. Livet växer. |
| 7:07 | händelse | placerat | sak=kolfskrivare |
| 7:07 | händelse | malKlart | id=kolfskrivare del=Dag 12 – Kolfiberskrivaren nasta=kolfslang |
| 7:07 | väntar | du | Rullarna ska fram till skrivaren utan mig. En slang. |
| 7:07 | MÅL |  | Bygg slangfördelaren |
| 7:08 | sak | du | Rullarna ska fram till skrivaren utan mig. En slang. |
| 7:08 | målruta |  | Bygg slangfördelaren |
| 7:08 | pil |  | Bygg slangfördelaren |
| 7:08 | notis | tanke | 💭 Rullarna ska fram till skrivaren utan mig. En slang. |
| 7:08 | röst | du | Rullarna ska fram till skrivaren utan mig. En slang. · MÅL |
| 7:08 | nick |  | nick:92 |
| 7:11 | kvittens-bock |  | ✓ Bygg kolfiberskrivaren i linje 3 |
| 7:12 | klar | du | Rullarna ska fram till skrivaren utan mig. En slang. |
| 7:13 | väntar | värld:TUUT! Hej grannen! | TUUT! Hej grannen! |
| 7:16 | händelse | printStart | sak=n3_stol |
| 7:16 | toast | bra | 🔗 Slangen kopplad |
| 7:21 | sak | ali | Ali här. Ännu en ritning som blev på riktigt: Kolfiberskrivare. Semesterkassan växer. Livet växer. |
| 7:21 | sms | ali | Ali här. Ännu en ritning som blev på riktigt: Kolfiberskrivare. Semesterkassan växer. Livet växer. |
| 7:21 | sms-bubbla | ali | Ali här. Ännu en ritning som blev på riktigt: Kolfiberskrivare. Semesterkassan växer. Livet växer. |
| 7:21 | röst | ali | Ali här. Ännu en ritning som blev på riktigt: Kolfiberskrivare. Semesterkassan växer. Livet växer. · REAKTION |
| 7:23 | toast | guld | ✅ |
| 7:23 | händelse | printKlar | sak=n3_stol n=1 |
| 7:23 | händelse | tagitUrPrint | sak=n3_stol n=1 |
| 7:25 | händelse | printStart | sak=n3_stol |
| 7:29 | klar | ali | Ali här. Ännu en ritning som blev på riktigt: Kolfiberskrivare. Semesterkassan växer. Livet växer. |
| 7:31 | struken | värld:TUUT! Hej grannen! | TUUT! Hej grannen! |
| 7:32 | toast | guld | ✅ |
| 7:32 | händelse | printKlar | sak=n3_stol n=2 |
| 7:32 | händelse | tagitUrPrint | sak=n3_stol n=1 |
| 7:41 | aliSalt | ali | 16000 |
| 7:41 | aliSalt | ali | 15200 |
| 7:44 | skratt | du | Alis dyr-pling |
| 7:44 | toast | guld | 3D-modell köpt – printa slangfördelare på skrivaren |
| 7:44 | händelse | kopt | sak=kolfslang |
| 7:46 | morgonkort | ⏸️ Pausad | ⏸️ Pausad · Klicka för att fortsätta. |
| 8:01 | händelse | printStart | sak=byggsats:kolfslang |
| 8:03 | toast | bra | Del 1 av 3 klar |
| 8:04 | toast | bra | Del 2 av 3 klar |
| 8:06 | händelse | printKlar | sak=byggsats:kolfslang n=1 |
| 8:06 | toast | guld | ✅ |
| 8:07 | händelse | tagitUrPrint | sak=byggsats:kolfslang n=1 |
| 8:08 | händelse | placerat | sak=kolfslang |
| 8:08 | väntar | info:guld | Slangfördelaren sitter – alla skrivare i linje 3 får kolfiber samtidigt |
| 8:08 | sak | info:guld | Slangfördelaren sitter – alla skrivare i linje 3 får kolfiber samtidigt |
| 8:08 | kvitto-visas | info:guld | Slangfördelaren sitter – alla skrivare i linje 3 får kolfiber samtidigt |
| 8:08 | toast | guld | Slangfördelaren sitter – alla skrivare i linje 3 får kolfiber samtidigt |
| 8:08 | händelse | malKlart | id=kolfslang del=Dag 12 – Kolfiberskrivaren nasta=kolfstol |
| 8:08 | händelse | malKlart | id=kolfstol del=Dag 12 – Kolfiberskrivaren nasta=f12-batteribank2 |
| 8:08 | MÅL |  | Printa och sälj |
| 8:10 | klar | info:guld | Slangfördelaren sitter – alla skrivare i linje 3 får kolfiber samtidigt |
| 8:10 | målruta |  | Printa och sälj |
| 8:12 | kvittens-bock |  | ✓ Bygg slangfördelaren |
| 8:12 | kvittens-bock |  | ✓ Printa en kolfiberstol |
| 8:12 | sak | du | (nytt mål i rutan) |
| 8:12 | pil |  | Printa och sälj |
| 8:12 | klar | du | (nytt mål i rutan) |
| 8:16 | händelse | printStart | sak=n3_stol |
| 8:23 | toast | guld | ✅ |
| 8:23 | händelse | printKlar | sak=n3_stol n=3 |
| 8:23 | händelse | tagitUrPrint | sak=n3_stol n=1 |
| 8:25 | tanke | du | Jag skulle kunna äta en sopsäck. Nästan. |
| 8:25 | väntar | du | Jag skulle kunna äta en sopsäck. Nästan. |
| 8:25 | sak | du | Jag skulle kunna äta en sopsäck. Nästan. |
| 8:25 | notis | tanke | 💭 Jag skulle kunna äta en sopsäck. Nästan. |
| 8:25 | röst | du | Jag skulle kunna äta en sopsäck. Nästan. · REAKTION |
| 8:28 | klar | du | Jag skulle kunna äta en sopsäck. Nästan. |
| 8:30 | väntar | mamma | Jag sa till pappa att du bor på en soptipp. Han sa "aha, vad lugnt då" och satte på Formel 1. Lugnt? |
| 8:32 | aliSalt | ali | 14440 |
| 8:42 | händelse | printStart | sak=n3_stol |
| 8:48 | skratt | du | plastspagetti |
| 8:48 | toast | guld | ✅ |
| 8:48 | händelse | printKlar | sak=n3_stol n=4 |
| 8:49 | händelse | tagitUrPrint | sak=spagetti n=1 |
| 8:57 | skratt | du | Ali köper konst |
| 8:57 | aliSalt | ali | 3 |
| 9:07 | händelse | printStart | sak=n3_stol |
| 9:13 | toast | guld | ✅ |
| 9:13 | händelse | printKlar | sak=n3_stol n=5 |
| 9:14 | händelse | tagitUrPrint | sak=n3_stol n=1 |
| 9:16 | skratt | du | falsk tuta |
| 9:16 | väntar | värld:TUUT TUUT! | TUUT TUUT! |
| 9:16 | sak | värld:TUUT TUUT! | TUUT TUUT! |
| 9:16 | bubbla |  | TUUT TUUT! |
| 9:19 | klar | värld:TUUT TUUT! | TUUT TUUT! |
| 9:23 | aliSalt | ali | 13718 |
| 9:33 | händelse | printStart | sak=n3_stol |
| 9:39 | toast | guld | ✅ |
| 9:39 | händelse | printKlar | sak=n3_stol n=6 |
| 9:40 | händelse | tagitUrPrint | sak=n3_stol n=1 |
| 9:49 | aliSalt | ali | 13032 |
| 9:59 | händelse | printStart | sak=n3_stol |
| 10:06 | toast | guld | ✅ |
| 10:06 | händelse | printKlar | sak=n3_stol n=7 |
| 10:06 | händelse | tagitUrPrint | sak=n3_stol n=1 |
| 10:15 | aliSalt | ali | 12380 |
| 10:25 | tanke | du | När åt jag senast? Det var nog i går. |
| 10:25 | väntar | du | När åt jag senast? Det var nog i går. |
| 10:25 | sak | du | När åt jag senast? Det var nog i går. |
| 10:25 | notis | tanke | 💭 När åt jag senast? Det var nog i går. |
| 10:25 | röst | du | När åt jag senast? Det var nog i går. · REAKTION |
| 10:28 | klar | du | När åt jag senast? Det var nog i går. |
| 11:19 | upplåst | strom | bank2 |
| 11:19 | brott | RESERV | bank2 (strom 0 av 15) |
| 11:19 | händelse | upplast | id=bank2 flask=strom |
| 11:19 | paket |  | sms |
| 11:19 | väntar | ali | Ali här. En batteribank till. Kolfibret är hungrigt. Som min svåger. |
| 11:19 | sak | ali | Ali här. En batteribank till. Kolfibret är hungrigt. Som min svåger. |
| 11:19 | sms | ali | Ali här. En batteribank till. Kolfibret är hungrigt. Som min svåger. |
| 11:19 | sms-bubbla | ali | Ali här. En batteribank till. Kolfibret är hungrigt. Som min svåger. |
| 11:19 | röst | ali | Ali här. En batteribank till. Kolfibret är hungrigt. Som min svåger. · STORY |
| 11:25 | klar | ali | Ali här. En batteribank till. Kolfibret är hungrigt. Som min svåger. |
| 11:27 | struken | bror | Visade bilder på ditt skjul för polarna. Dom trodde det var en Airbnb. Jag sa inte emot. |
| 11:56 | väntar | mamma | Jag har lagt upp en bild på ditt skjul på Facebook. 47 gilla. Faster Inger skrev "Va fint, är det en bastu?" |
| 12:25 | poolTom | du | 4 repliker använda |
| 12:44 | skratt | du | falsk tuta |
| 14:25 | poolTom | du | 4 repliker använda |
| 14:30 | struken | mamma | Jag sa till pappa att du bor på en soptipp. Han sa "aha, vad lugnt då" och satte på Formel 1. Lugnt? |
| 14:32 | skratt | du | kvarnen rapar |
| 14:33 | toast | guld | 🧵 |
| 14:35 | händelse | printStart | sak=n2_hjalm |
| 14:40 | toast | guld | ✅ |
| 14:40 | händelse | printKlar | sak=n2_hjalm n=17 |
| 14:40 | händelse | tagitUrPrint | sak=n2_hjalm n=1 |
| 14:49 | aliSalt | ali | 1397 |
| 14:52 | skratt | du | Alis dyr-pling |
| 14:52 | toast | guld | 3D-modell köpt – printa batteribank på skrivaren |
| 14:52 | händelse | kopt | sak=bank |
| 15:00 | händelse | printStart | sak=byggsats:bank |
| 15:00 | skratt | du | falsk tuta |
| 15:00 | väntar | värld:TUUT! Hej grannen! | TUUT! Hej grannen! |
| 15:02 | toast | bra | Del 1 av 2 klar |
| 15:04 | händelse | printKlar | sak=byggsats:bank n=1 |
| 15:04 | toast | guld | ✅ |
| 15:04 | händelse | tagitUrPrint | sak=byggsats:bank n=1 |
| 15:04 | sak | värld:TUUT! Hej grannen! | TUUT! Hej grannen! |
| 15:04 | bubbla |  | TUUT! Hej grannen! |
| 15:07 | klar | värld:TUUT! Hej grannen! | TUUT! Hej grannen! |
| 15:11 | händelse | placerat | sak=bank |
| 15:11 | händelse | malKlart | id=f12-batteribank2 del=Dag 12 – Kolfiberskrivaren nasta=sov12 |
| 15:11 | paket |  | lapp |
| 15:11 | lapp | 📔 Dagbok | Dag 12 är slut. Allt säljs bara när jag är vaken. |
| 15:11 | meddelande | du | Dag 12 är slut. Allt säljs bara när jag är vaken. |
| 15:11 | dagbokkort | du | Dag 12 är slut. Allt säljs bara när jag är vaken. |
| 15:11 | målruta |  | Klart för idag – sov när du vill |
| 15:11 | MÅL |  | Klart för idag – sov när du vill |
| 15:11 | röst | du | Dag 12 är slut. Allt säljs bara när jag är vaken. · STORY |
| 15:18 | händelse | brevLast | id=kvall12 |
| 15:18 | väntar | notis:🌇 Klockan är 21. Ali slår igen luckan.  | 🌇 Klockan är 21. Ali slår igen luckan. Dagens jobb är klart – gå in i skjulet och sov i sängen. |
| 15:20 | sak | du | (nytt mål i rutan) |
| 15:20 | pil |  | Klart för idag – sov när du vill |
| 15:20 | klar | du | (nytt mål i rutan) |
| 15:23 | sak | notis:🌇 Klockan är 21. Ali slår igen luckan.  | 🌇 Klockan är 21. Ali slår igen luckan. Dagens jobb är klart – gå in i skjulet och sov i sängen. |
| 15:23 | notis | guld | 🌇 Klockan är 21. Ali slår igen luckan. Dagens jobb är klart – gå in i skjulet och sov i sängen. |
| 15:26 | klar | notis:🌇 Klockan är 21. Ali slår igen luckan.  | 🌇 Klockan är 21. Ali slår igen luckan. Dagens jobb är klart – gå in i skjulet och sov i sängen. |
| 15:29 | webbBetalt | du | 1990 |

<details><summary>Botens handlingar dag 12</summary>

- 0:08 gå till Rolfs postlåda (29 m) (9052 kr)
- 0:16 panel: "En lapp från Rolf
Lite olaglig" (9052 kr)
- 0:18 gå till skrivaren (10 m) (9052 kr)
- 0:20 printar Nyckelring (9052 kr)
- 0:21 tar ut 1 st ur skrivaren (9052 kr)
- 0:23 gå till skrivaren (5 m) (9052 kr)
- 0:24 printar Designvas i röd PETG (9052 kr)
- 0:29 tar ut 1 st ur skrivaren (9052 kr)
- 0:32 gå till en tunna (16 m) (9052 kr)
- 0:35 gå till PETG-kvarnen (10 m) (9052 kr)
- 0:35 tömmer det tunga i PETG-kvarnen (9052 kr)
- 0:40 gå till skrivaren (4 m) (9052 kr)
- 0:42 printar Designvas i röd PETG (9052 kr)
- 0:46 tar ut 1 st ur skrivaren (9052 kr)
- 0:51 gå till datorn (23 m) (9052 kr)
- 0:59 panel: "Webbshopen · Soptippsvägen 1
B" (9052 kr)
- 1:08 panel: "Webbshopen · Soptippsvägen 1
B" (9052 kr)
- 1:17 panel: "Webbshopen · Soptippsvägen 1
B" (9052 kr)
- 1:23 gå till Rolfs postlåda (paket) (29 m) (9052 kr)
- 1:25 webbshop: 2 paket i postlådan (9052 kr)
- 1:25 tjänar pengar till väntar på flaskhalsen för kolfskrivare: 9052/9092 kr → printar cykelhjälm i petg (1995 kr) (9052 kr)
- 1:27 gå till skrivaren (10 m) (9052 kr)
- 1:28 printar Cykelhjälm i PETG (9052 kr)
- 1:34 tar ut 1 st ur skrivaren (9052 kr)
- 1:41 gå till Ali (30 m) (9052 kr)
- 1:41 öppnar Alis butik – sälja (9052 kr)
- 1:43 säljer hos Ali: +1995 kr (11047 kr)
- 1:55 popup: "Bara en katt." (11047 kr)
- 2:05 popup: "Läst" (11047 kr)
- 2:15 tjänar pengar till kolfiberskrivare: 11047/25000 kr → printar cykelhjälm i petg (1895 kr) (11047 kr)
- 2:21 gå till skrivaren (29 m) (11047 kr)
- 2:23 printar Cykelhjälm i PETG (11047 kr)
- 2:29 tar ut 1 st ur skrivaren (11047 kr)
- 2:35 gå till Ali (29 m) (11047 kr)
- 2:35 öppnar Alis butik – sälja (11047 kr)
- 2:37 säljer hos Ali: +1895 kr (12942 kr)
- 2:38 tjänar pengar till kolfiberskrivare: 12942/25000 kr → printar cykelhjälm i petg (1800 kr) (12942 kr)
- 2:46 gå till en tunna (39 m) (12942 kr)
- 2:50 gå till PETG-kvarnen (15 m) (12942 kr)
- 2:50 tömmer det tunga i PETG-kvarnen (12942 kr)
- 2:55 gå till skrivaren (3 m) (12942 kr)
- 2:56 printar Cykelhjälm i PETG (12942 kr)
- 3:03 tar ut 1 st ur skrivaren (12942 kr)
- 3:09 gå till Ali (31 m) (12942 kr)
- 3:09 öppnar Alis butik – sälja (12942 kr)
- 3:12 tjänar pengar till kolfiberskrivare: 12942/25000 kr → printar cykelhjälm i petg (1800 kr) (12942 kr)
- 3:18 gå till skrivaren (29 m) (12942 kr)
- 3:19 printar Cykelhjälm i PETG (12942 kr)
- 3:25 tar ut 1 st ur skrivaren (12942 kr)
- 3:27 printar Cykelhjälm i PETG (12942 kr)
- 3:33 tar ut 1 st ur skrivaren (12942 kr)
- 3:35 printar Cykelhjälm i PETG (12942 kr)
- 3:41 tar ut 1 st ur skrivaren (12942 kr)
- 3:47 gå till Ali (29 m) (12942 kr)
- 3:47 öppnar Alis butik – sälja (12942 kr)
- 3:49 säljer hos Ali: +5135 kr (18077 kr)
- 3:50 tjänar pengar till kolfiberskrivare: 18077/25000 kr → printar cykelhjälm i petg (1544 kr) (18077 kr)
- 3:57 gå till en tunna (35 m) (18077 kr)
- 4:01 gå till PETG-kvarnen (11 m) (18077 kr)
- 4:01 tömmer det tunga i PETG-kvarnen (18077 kr)
- 4:06 gå till skrivaren (3 m) (18077 kr)
- 4:07 printar Cykelhjälm i PETG (18077 kr)
- 4:13 tar ut 1 st ur skrivaren (18077 kr)
- 4:20 gå till Ali (31 m) (18077 kr)
- 4:20 öppnar Alis butik – sälja (18077 kr)
- 4:21 säljer hos Ali: +1544 kr (19621 kr)
- 4:22 tjänar pengar till kolfiberskrivare: 19621/25000 kr → printar cykelhjälm i petg (1467 kr) (19621 kr)
- 4:28 gå till skrivaren (29 m) (19621 kr)
- 4:30 printar Cykelhjälm i PETG (19621 kr)
- 4:35 tar ut 1 st ur skrivaren (19621 kr)
- 4:37 printar Cykelhjälm i PETG (19621 kr)
- 4:42 tar ut 1 st ur skrivaren (19621 kr)
- 4:48 gå till Ali (29 m) (19621 kr)
- 4:48 öppnar Alis butik – sälja (19621 kr)
- 4:50 säljer hos Ali: +2864 kr (22485 kr)
- 4:51 tjänar pengar till kolfiberskrivare: 22485/25000 kr → printar cykelhjälm i petg (1397 kr) (22485 kr)
- 4:59 gå till en tunna (39 m) (22485 kr)
- 5:04 gå till PETG-kvarnen (17 m) (22485 kr)
- 5:04 tömmer det tunga i PETG-kvarnen (22485 kr)
- 5:08 gå till skrivaren (3 m) (22485 kr)
- 5:10 printar Cykelhjälm i PETG (22485 kr)
- 5:15 tar ut 1 st ur skrivaren (22485 kr)
- 5:22 gå till Ali (31 m) (22485 kr)
- 5:22 öppnar Alis butik – sälja (22485 kr)
- 5:23 säljer hos Ali: +3 kr (22488 kr)
- 5:24 tjänar pengar till kolfiberskrivare: 22488/25000 kr → printar cykelhjälm i petg (1397 kr) (22488 kr)
- 5:30 gå till skrivaren (29 m) (22488 kr)
- 5:32 printar Cykelhjälm i PETG (22488 kr)
- 5:37 tar ut 1 st ur skrivaren (22488 kr)
- 5:39 printar Cykelhjälm i PETG (22488 kr)
- 5:44 tar ut 1 st ur skrivaren (22488 kr)
- 5:50 gå till Ali (29 m) (22488 kr)
- 5:50 öppnar Alis butik – sälja (22488 kr)
- 5:52 säljer hos Ali: +1400 kr (23888 kr)
- 5:53 tjänar pengar till kolfiberskrivare: 23888/25000 kr → printar cykelhjälm i petg (1397 kr) (23888 kr)
- 6:01 gå till en tunna (41 m) (23888 kr)
- 6:05 gå till PETG-kvarnen (12 m) (23888 kr)
- 6:05 tömmer det tunga i PETG-kvarnen (23888 kr)
- 6:10 gå till skrivaren (4 m) (23888 kr)
- 6:11 printar Cykelhjälm i PETG (23888 kr)
- 6:17 tar ut 1 st ur skrivaren (23888 kr)
- 6:23 gå till Ali (31 m) (23888 kr)
- 6:23 öppnar Alis butik – sälja (23888 kr)
- 6:25 säljer hos Ali: +1397 kr (25285 kr)
- 6:25 öppnar Alis butik – köpa kolfiberskrivare (25285 kr)
- 6:28 köper kolfskrivare för 25000 kr (285 kr)
- 6:35 gå till skrivaren (29 m) (285 kr)
- 6:36 printar Kolfiberskrivare (5 delar) (285 kr)
- 6:47 gå till en tunna (17 m) (285 kr)
- 6:50 gå till PETG-kvarnen (11 m) (285 kr)
- 6:50 tömmer det tunga i PETG-kvarnen (285 kr)
- 7:04 gå till skrivaren (4 m) (285 kr)
- 7:04 tar ut 1 st ur skrivaren (285 kr)
- 7:06 gå till platsen för kolfiberskrivare (5 m) (285 kr)
- 7:07 ställer ut kolfiberskrivare (285 kr)
- 7:15 tjänar pengar till slangfördelare: 285/27500 kr → printar kolfiberstol (16000 kr) (285 kr)
- 7:16 printar Kolfiberstol (285 kr)
- 7:24 tar ut 1 st ur skrivaren (285 kr)
- 7:25 printar Kolfiberstol (285 kr)
- 7:33 tar ut 1 st ur skrivaren (285 kr)
- 7:39 gå till Ali (33 m) (285 kr)
- 7:39 öppnar Alis butik – sälja (285 kr)
- 7:41 säljer hos Ali: +31200 kr (31485 kr)
- 7:42 öppnar Alis butik – köpa slangfördelare (31485 kr)
- 7:44 köper kolfslang för 27500 kr (3985 kr)
- 7:54 kort: "FORTSÄTTeller tryck Esc" (3985 kr)
- 7:59 gå till skrivaren (33 m) (3985 kr)
- 8:01 printar Slangfördelare (3 delar) (3985 kr)
- 8:07 tar ut 1 st ur skrivaren (3985 kr)
- 8:08 gå till kolfiberkvarnen (3 m) (3985 kr)
- 8:14 tjänar pengar till väntar på flaskhalsen för bank2: 3985/4025 kr → printar kolfiberstol (14440 kr) (3985 kr)
- 8:15 gå till skrivaren (1 m) (3985 kr)
- 8:16 printar Kolfiberstol (3985 kr)
- 8:24 tar ut 1 st ur skrivaren (3985 kr)
- 8:31 gå till Ali (35 m) (3985 kr)
- 8:31 öppnar Alis butik – sälja (3985 kr)
- 8:33 säljer hos Ali: +14440 kr (18425 kr)
- 8:33 tjänar pengar till väntar på flaskhalsen för bank2: 18425/18465 kr → printar kolfiberstol (13718 kr) (18425 kr)
- 8:40 gå till skrivaren (33 m) (18425 kr)
- 8:42 printar Kolfiberstol (18425 kr)
- 8:49 tar ut 1 st ur skrivaren (18425 kr)
- 8:56 gå till Ali (33 m) (18425 kr)
- 8:56 öppnar Alis butik – sälja (18425 kr)
- 8:58 säljer hos Ali: +3 kr (18428 kr)
- 8:58 tjänar pengar till väntar på flaskhalsen för bank2: 18428/18465 kr → printar kolfiberstol (13718 kr) (18428 kr)
- 9:05 gå till skrivaren (33 m) (18428 kr)
- 9:07 printar Kolfiberstol (18428 kr)
- 9:14 tar ut 1 st ur skrivaren (18428 kr)
- 9:21 gå till Ali (33 m) (18428 kr)
- 9:21 öppnar Alis butik – sälja (18428 kr)
- 9:23 säljer hos Ali: +13718 kr (32146 kr)
- 9:25 tjänar pengar till väntar på flaskhalsen för bank2: 32146/32186 kr → printar kolfiberstol (13032 kr) (32146 kr)
- 9:31 gå till skrivaren (33 m) (32146 kr)
- 9:33 printar Kolfiberstol (32146 kr)
- 9:40 tar ut 1 st ur skrivaren (32146 kr)
- 9:47 gå till Ali (33 m) (32146 kr)
- 9:47 öppnar Alis butik – sälja (32146 kr)
- 9:49 säljer hos Ali: +13032 kr (45178 kr)
- 9:51 tjänar pengar till väntar på flaskhalsen för bank2: 45178/45218 kr → printar kolfiberstol (12380 kr) (45178 kr)
- 9:57 gå till skrivaren (33 m) (45178 kr)
- 9:59 printar Kolfiberstol (45178 kr)
- 10:06 tar ut 1 st ur skrivaren (45178 kr)
- 10:13 gå till Ali (33 m) (45178 kr)
- 10:13 öppnar Alis butik – sälja (45178 kr)
- 10:15 säljer hos Ali: +12380 kr (57558 kr)
- 10:17 tjänar pengar till väntar på flaskhalsen för bank2: 57558/57598 kr → printar kolfiberstol (11761 kr) (57558 kr)
- 10:17 väntar på kolfiber från bandet (57558 kr)
- 10:25 väntar på kolfiber från bandet (57558 kr)
- 10:33 väntar på kolfiber från bandet (57558 kr)
- 10:41 väntar på kolfiber från bandet (57558 kr)
- 10:49 väntar på kolfiber från bandet (57558 kr)
- 10:57 väntar på kolfiber från bandet (57558 kr)
- 11:05 väntar på kolfiber från bandet (57558 kr)
- 11:13 väntar på kolfiber från bandet (57558 kr)
- 11:21 väntar på kolfiber från bandet (57558 kr)
- 11:29 väntar på kolfiber från bandet (57558 kr)
- 11:37 väntar på kolfiber från bandet (57558 kr)
- 11:45 väntar på kolfiber från bandet (57558 kr)
- 11:53 väntar på kolfiber från bandet (57558 kr)
- 12:01 väntar på kolfiber från bandet (57558 kr)
- 12:09 väntar på kolfiber från bandet (57558 kr)
- 12:17 väntar på kolfiber från bandet (57558 kr)
- 12:25 väntar på kolfiber från bandet (57558 kr)
- 12:33 väntar på kolfiber från bandet (57558 kr)
- 12:41 väntar på kolfiber från bandet (57558 kr)
- 12:49 väntar på kolfiber från bandet (57558 kr)
- 12:57 väntar på kolfiber från bandet (57558 kr)
- 13:05 väntar på kolfiber från bandet (57558 kr)
- 13:13 väntar på kolfiber från bandet (57558 kr)
- 13:21 väntar på kolfiber från bandet (57558 kr)
- 13:29 väntar på kolfiber från bandet (57558 kr)
- 13:37 väntar på kolfiber från bandet (57558 kr)
- 13:45 väntar på kolfiber från bandet (57558 kr)
- 13:53 väntar på kolfiber från bandet (57558 kr)
- 14:01 väntar på kolfiber från bandet (57558 kr)
- 14:09 väntar på kolfiber från bandet (57558 kr)
- 14:17 väntar på kolfiber från bandet (57558 kr)
- 14:17 kolfiberstol gick inte att printa – tar nästa (57558 kr)
- 14:17 öppnar Alis butik – sälja (57558 kr)
- 14:19 tjänar pengar till väntar på flaskhalsen för bank2: 57558/57598 kr → printar cykelhjälm i petg (1397 kr) (57558 kr)
- 14:27 gå till en tunna (41 m) (57558 kr)
- 14:32 gå till PETG-kvarnen (16 m) (57558 kr)
- 14:32 tömmer det tunga i PETG-kvarnen (57558 kr)
- 14:34 gå till skrivaren (3 m) (57558 kr)
- 14:35 printar Cykelhjälm i PETG (57558 kr)
- 14:41 tar ut 1 st ur skrivaren (57558 kr)
- 14:47 gå till Ali (31 m) (57558 kr)
- 14:47 öppnar Alis butik – sälja (57558 kr)
- 14:49 säljer hos Ali: +1397 kr (58955 kr)
- 14:51 öppnar Alis butik – köpa batteribank (58955 kr)
- 14:53 köper bank för 1600 kr (57355 kr)
- 14:59 gå till skrivaren (23 m) (57355 kr)
- 15:00 printar Batteribank (2 delar) (57355 kr)
- 15:05 tar ut 1 st ur skrivaren (57355 kr)
- 15:10 gå till platsen för batteribank (26 m) (57355 kr)
- 15:11 ställer ut batteribank (57355 kr)
- 15:18 popup: "FORTSÄTT" (57355 kr)
- 15:26 gå till sängen (21 m) (57355 kr)

</details>

## Dag 13

| Tid | Källa | Vem | Text |
|---|---|---|---|
| 15:29 | vara | ali | n2_vas |
| 15:29 | händelse | malKlart | id=sov12 del=Dag 12 – Kolfiberskrivaren nasta=f13-bygg-gamingboden |
| 15:29 | MÅL |  | Bygg gamingboden |
| 0:01 | händelse | dagenBorjar | dag=13 |
| 0:01 | meddelande | du | Dag 13. 9 dagar till jul. Utan ett eget rum är det bara ett skjul. |
| 0:01 | dagbokkort | du | Gamingboden · Dag 13. 9 dagar till jul. Utan ett eget rum är det bara ett skjul. |
| 0:01 | röst | du | Gamingboden. Dag 13. 9 dagar till jul. Utan ett eget rum är det bara ett skjul. · STORY |
| 0:16 | händelse | morgonkortStangt | dag=13 |
| 0:16 | paket |  | sms |
| 0:16 | väntar | ali | Ali här. 🚀 Jetmotor. Med efterbrännare. Till en KVARN. Jag vet inte varför. Jag kunde inte sluta rita. Min fru frågade om jag mår bra. Jag har aldrig mått bättre. Ring inte brandkåren. |
| 0:16 | struken | kedja | d13 |
| 0:16 | väntar | du | En bod för spel. Jag förtjänar det. |
| 0:16 | målruta |  | Bygg gamingboden |
| 0:21 | sak | du | En bod för spel. Jag förtjänar det. |
| 0:21 | pil |  | Bygg gamingboden |
| 0:21 | notis | tanke | 💭 En bod för spel. Jag förtjänar det. |
| 0:21 | röst | du | En bod för spel. Jag förtjänar det. · MÅL |
| 0:24 | klar | du | En bod för spel. Jag förtjänar det. |
| 0:26 | struken | mamma | Jag har lagt upp en bild på ditt skjul på Facebook. 47 gilla. Faster Inger skrev "Va fint, är det en bastu?" |
| 0:31 | röst | ali | Jag ska lära ut AI på pensionärsföreningen. Tisdagar. De är rädda. Jag var också rädd. · STORY |
| 0:31 | butiksbubbla | ali | Jag ska lära ut AI på pensionärsföreningen. Tisdagar. De är rädda. Jag var också rädd. |
| 0:32 | skratt | du | Alis dyr-pling |
| 0:32 | toast | guld | 3D-modell köpt – printa gamingbod (tillbyggnad) på skrivaren |
| 0:32 | händelse | kopt | sak=gamingbod |
| 0:40 | händelse | printStart | sak=byggsats:gamingbod |
| 0:43 | toast | bra | Del 1 av 6 klar |
| 0:47 | toast | bra | Del 2 av 6 klar |
| 0:49 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 0:49 | väntar | notis:Skrivare L: Tornet är tomt – mal mer så  | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 0:53 | väntar | värld:Mjau. | Mjau. |
| 0:54 | poolTom | du | 4 repliker använda |
| 0:56 | sak | notis:Skrivare L: Tornet är tomt – mal mer så  | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 0:56 | notis | fel | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 0:57 | toast | bra | Del 3 av 6 klar |
| 0:58 | klar | notis:Skrivare L: Tornet är tomt – mal mer så  | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 1:00 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 1:00 | struken | notis | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 1:00 | toast | bra | Del 4 av 6 klar |
| 1:01 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 1:01 | struken | notis | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 1:01 | skratt | du | kvarnen spottar |
| 1:04 | väntar | info:fel | Fullt i händerna. |
| 1:04 | sak | info:fel | Fullt i händerna. |
| 1:04 | kvitto-visas | info:fel | Fullt i händerna. |
| 1:04 | toast | fel | Fullt i händerna. |
| 1:04 | toast | bra | Del 5 av 6 klar |
| 1:06 | klar | info:fel | Fullt i händerna. |
| 1:08 | händelse | printKlar | sak=byggsats:gamingbod n=1 |
| 1:08 | toast | guld | ✅ |
| 1:13 | struken | värld:Mjau. | Mjau. |
| 1:15 | händelse | tagitUrPrint | sak=byggsats:gamingbod n=1 |
| 1:15 | väntar | notis:📔 Prestation: Städtokig · +3 respekt | 📔 Prestation: Städtokig · +3 respekt |
| 1:15 | sak | notis:📔 Prestation: Städtokig · +3 respekt | 📔 Prestation: Städtokig · +3 respekt |
| 1:15 | notis |  | 📔 Prestation: Städtokig · +3 respekt |
| 1:17 | klar | notis:📔 Prestation: Städtokig · +3 respekt | 📔 Prestation: Städtokig · +3 respekt |
| 1:19 | väntar | info:guld | Gamingboden står klar! Det är ett tomt skal – inred den, flytta in grejerna och bygg ut den. |
| 1:19 | sak | info:guld | Gamingboden står klar! Det är ett tomt skal – inred den, flytta in grejerna och bygg ut den. |
| 1:19 | kvitto-visas | info:guld | Gamingboden står klar! Det är ett tomt skal – inred den, flytta in grejerna och bygg ut den. |
| 1:19 | toast | guld | Gamingboden står klar! Det är ett tomt skal – inred den, flytta in grejerna och bygg ut den. |
| 1:19 | händelse | malKlart | id=f13-bygg-gamingboden del=Dag 13 – Gamingboden nasta=f13-stall-in-gamersak |
| 1:19 | väntar | du | Boden är tom. Något att spela på. |
| 1:19 | MÅL |  | Ställ in en gamersak i boden |
| 1:21 | klar | info:guld | Gamingboden står klar! Det är ett tomt skal – inred den, flytta in grejerna och bygg ut den. |
| 1:21 | målruta |  | Ställ in en gamersak i boden |
| 1:23 | kvittens-bock |  | ✓ Bygg gamingboden |
| 1:23 | sak | du | Boden är tom. Något att spela på. |
| 1:23 | pil |  | Ställ in en gamersak i boden |
| 1:23 | notis | tanke | 💭 Boden är tom. Något att spela på. |
| 1:23 | röst | du | Boden är tom. Något att spela på. · MÅL |
| 1:23 | nick |  | nick:97 |
| 1:26 | klar | du | Boden är tom. Något att spela på. |
| 1:30 | väntar | info:info | Pappa kommer gående. Han bär på en kasse … |
| 1:30 | scenInfo | pappa | Pappa kommer |
| 1:35 | sak | info:info | Pappa kommer gående. Han bär på en kasse … |
| 1:35 | toast |  | Pappa kommer gående. Han bär på en kasse … |
| 1:37 | klar | info:info | Pappa kommer gående. Han bär på en kasse … |
| 1:37 | väntar | foto | Boden |
| 1:37 | paket |  | tanke |
| 1:37 | tanke | du | Min egen bod. Här är det ingen som tjatar. |
| 1:37 | väntar | du | Min egen bod. Här är det ingen som tjatar. |
| 1:41 | händelse | printStart | sak=kyl |
| 1:45 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 1:45 | väntar | värld:TUUT! Hej grannen! | TUUT! Hej grannen! |
| 1:46 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 1:46 | struken | notis | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 1:47 | sak | foto | Boden |
| 1:47 | foto | du | Boden |
| 1:47 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 1:47 | struken | notis | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 1:48 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 1:48 | struken | notis | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 1:49 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 1:49 | struken | notis | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 1:49 | klar | foto | Boden |
| 1:50 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 1:50 | struken | notis | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 1:51 | ljud | kajsa | Mjau |
| 1:51 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 1:51 | struken | notis | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 1:52 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 1:52 | struken | notis | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 1:53 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 1:53 | struken | notis | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 1:54 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 1:54 | struken | notis | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 1:55 | väntar | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått kolfiberskrivare. Och slangfördelare. Mer säger jag inte. Gunnar vet. |
| 1:55 | radio | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått kolfiberskrivare. Och slangfördelare. Mer säger jag inte. Gunnar vet. |
| 1:55 | skratt | du | Radio-Kjelle |
| 1:55 | sak | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått kolfiberskrivare. Och slangfördelare. Mer säger jag inte. Gunnar vet. |
| 1:55 | notis |  | 📻 Radio Tippen: Radio Tippen, Kjelle här. Skjulet vid tippen har fått kolfiberskrivare. Och slangfördelare. Mer säger jag inte. Gunnar vet. |
| 1:55 | röst | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått kolfiberskrivare. Och slangfördelare. Mer säger jag inte. Gunnar vet. · REAKTION |
| 1:55 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 1:55 | struken | notis | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 1:56 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 1:56 | struken | notis | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 1:57 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 1:57 | struken | notis | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 1:57 | toast | guld | ✅ |
| 1:57 | händelse | printKlar | sak=kyl n=1 |
| 2:05 | klar | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått kolfiberskrivare. Och slangfördelare. Mer säger jag inte. Gunnar vet. |
| 2:05 | händelse | tagitUrPrint | sak=kyl n=1 |
| 2:07 | struken | värld:TUUT! Hej grannen! | TUUT! Hej grannen! |
| 2:12 | händelse | placerat | sak=kyl |
| 2:12 | händelse | malKlart | id=f13-stall-in-gamersak del=Dag 13 – Gamingboden nasta=sov13 |
| 2:12 | paket |  | lapp |
| 2:12 | lapp | 📔 Dagbok | Dag 13 är slut. Kvarnen är för långsam. |
| 2:12 | meddelande | du | Dag 13 är slut. Kvarnen är för långsam. |
| 2:12 | dagbokkort | du | Dag 13 är slut. Kvarnen är för långsam. |
| 2:12 | MÅL |  | Klart för idag – sov när du vill |
| 2:12 | röst | du | Dag 13 är slut. Kvarnen är för långsam. · STORY |
| 2:17 | händelse | brevLast | id=kvall13 |
| 2:17 | målruta |  | Klart för idag – sov när du vill |
| 2:19 | väntar | notis:🌇 Klockan är 21. Ali slår igen luckan.  | 🌇 Klockan är 21. Ali slår igen luckan. Dagens jobb är klart – gå in i skjulet och sov i sängen. |
| 2:19 | sak | du | (nytt mål i rutan) |
| 2:19 | pil |  | Klart för idag – sov när du vill |
| 2:19 | klar | du | (nytt mål i rutan) |

<details><summary>Botens handlingar dag 13</summary>

- 0:00 — dag 13 börjar — (59345 kr)
- 0:15 popup: "FORTSÄTT" (59345 kr)
- 0:31 gå till Ali (22 m) (59345 kr)
- 0:31 öppnar Alis butik – köpa gamingbod (tillbyggnad) (59345 kr)
- 0:33 köper gamingbod för 41000 kr (18345 kr)
- 0:39 gå till skrivaren (23 m) (18345 kr)
- 0:40 printar Gamingbod (tillbyggnad) (6 delar) (18345 kr)
- 0:55 gå till kvarnen (28 m) (18345 kr)
- 1:04 plockar 7 skräp på tippen (bär max 16) (18345 kr)
- 1:08 gå till kvarnen (15 m) (18345 kr)
- 1:15 gå till skrivaren (7 m) (18345 kr)
- 1:15 tar ut 1 st ur skrivaren (18345 kr)
- 1:19 gå till platsen vänster om skjulet (16 m) (18345 kr)
- 1:19 bygger gamingboden (18345 kr)
- 1:32 gå till Ali (20 m) (18345 kr)
- 1:32 öppnar Alis butik – köpa receptet minikylskåp (18345 kr)
- 1:33 Ali har inte kyl (18345 kr)
- 1:39 gå till skrivaren (23 m) (18345 kr)
- 1:41 printar Minikylskåp (18345 kr)
- 1:55 plockar 5 skräp på tippen (bär max 16) (18345 kr)
- 1:58 gå till kvarnen (14 m) (18345 kr)
- 2:05 gå till skrivaren (7 m) (18345 kr)
- 2:06 tar ut 1 st ur skrivaren (18345 kr)
- 2:11 gå till platsen för minikylskåp (23 m) (18345 kr)
- 2:12 ställer ut minikylskåp (18345 kr)
- 2:17 popup: "FORTSÄTT" (18345 kr)
- 2:23 gå till sängen (10 m) (18345 kr)

</details>

## Dag 14

| Tid | Källa | Vem | Text |
|---|---|---|---|
| 2:26 | vara | ali | n2_hjalm |
| 2:26 | händelse | malKlart | id=sov13 del=Dag 13 – Gamingboden nasta=jet14 |
| 2:26 | MÅL |  | Montera jetmotorn på kolfiberkvarnen |
| 0:01 | händelse | dagenBorjar | dag=14 |
| 0:01 | meddelande | du | Dag 14. 8 dagar till jul. Går kvarnen så här långsamt hinner jag inte till jul. |
| 0:01 | dagbokkort | du | Jetmotorn · Dag 14. 8 dagar till jul. Går kvarnen så här långsamt hinner jag inte till jul. |
| 0:01 | röst | du | Jetmotorn. Dag 14. 8 dagar till jul. Går kvarnen så här långsamt hinner jag inte till jul. · STORY |
| 0:15 | händelse | morgonkortStangt | dag=14 |
| 0:15 | struken | kedja | d14 |
| 0:15 | väntar | du | Jetmotorn ska sitta på kolfiberkvarnen. Vad kan gå fel. |
| 0:18 | väntar | mamma | Paketet kom tillbaka. Det står "Okänd mottagare". Är du ens skriven där? Vart ska jag skicka din post? |
| 0:18 | paket |  | lapp → toast |
| 0:18 | lapp | 📔 Dagbok | Dag 14. Mammas paket kom tillbaka: "Okänd mottagare". Jag bor ju här. Det här är mitt hem nu. Men på pappret finns jag inte här. Jag måste bli folkbokförd – och då måste jag äga tomten jag bor på och ha ett riktigt hus. |
| 0:18 | meddelande | du | Dag 14. Mammas paket kom tillbaka: "Okänd mottagare". Jag bor ju här. Det här är mitt hem nu. Men på pappret finns jag inte här. Jag måste bli folkbokförd – och då måste jag äga tomten jag bor på och ha ett riktigt hus. |
| 0:18 | dagbokkort | du | Dag 14. Mammas paket kom tillbaka: "Okänd mottagare". Jag bor ju här. Det här är mitt hem nu. Men på pappret finns jag inte här. Jag måste bli folkbokförd – och då måste jag äga tomten jag bor på och ha ett riktigt hus. |
| 0:18 | väntar | notis:💡 Poletten trillar ner: du bor faktiskt | 💡 Poletten trillar ner: du bor faktiskt här. Nytt mål: bli folkbokförd (tavlan vid vägen). |
| 0:18 | röst | du | Dag 14. Mammas paket kom tillbaka: "Okänd mottagare". Jag bor ju här. Det här är mitt hem nu. Men på pappret finns jag inte här. Jag måste bli folkbokförd – och då måste jag äga tomten jag bor på och ha ett riktigt hus. · STORY |
| 0:32 | händelse | brevLast | id=polett |
| 0:32 | målruta |  | Montera jetmotorn på kolfiberkvarnen |
| 0:33 | väntar | info:guld | 🚧 Gärdesgården har flyttats ut! Du får utforska ny mark – men bara ställa saker på mark du äger. |
| 0:33 | sak | du | Jetmotorn ska sitta på kolfiberkvarnen. Vad kan gå fel. |
| 0:33 | pil |  | Montera jetmotorn på kolfiberkvarnen |
| 0:33 | notis | tanke | 💭 Jetmotorn ska sitta på kolfiberkvarnen. Vad kan gå fel. |
| 0:33 | röst | du | Jetmotorn ska sitta på kolfiberkvarnen. Vad kan gå fel. · MÅL |
| 0:34 | nick |  | nick:99 |
| 0:38 | klar | du | Jetmotorn ska sitta på kolfiberkvarnen. Vad kan gå fel. |
| 0:38 | sak | info:guld | 🚧 Gärdesgården har flyttats ut! Du får utforska ny mark – men bara ställa saker på mark du äger. |
| 0:38 | kvitto-visas | info:guld | 🚧 Gärdesgården har flyttats ut! Du får utforska ny mark – men bara ställa saker på mark du äger. |
| 0:38 | toast | guld | 🚧 Gärdesgården har flyttats ut! Du får utforska ny mark – men bara ställa saker på mark du äger. |
| 0:40 | klar | info:guld | 🚧 Gärdesgården har flyttats ut! Du får utforska ny mark – men bara ställa saker på mark du äger. |
| 0:42 | struken | notis:🌇 Klockan är 21. Ali slår igen luckan.  | 🌇 Klockan är 21. Ali slår igen luckan. Dagens jobb är klart – gå in i skjulet och sov i sängen. |
| 0:42 | struken | ali | Ali här. 🚀 Jetmotor. Med efterbrännare. Till en KVARN. Jag vet inte varför. Jag kunde inte sluta rita. Min fru frågade om jag mår bra. Jag har aldrig mått bättre. Ring inte brandkåren. |
| 0:44 | röst | ali | Du vet vad? Jag har pratat om att göra något i trettio år. Du bara gör. Det är irriterande. På ett bra sätt. · STORY |
| 0:44 | butiksbubbla | ali | Du vet vad? Jag har pratat om att göra något i trettio år. Du bara gör. Det är irriterande. På ett bra sätt. |
| 0:46 | skratt | du | Alis dyr-pling |
| 0:46 | toast | guld | 3D-modell köpt – printa jetmotor med efterbrännare på skrivaren |
| 0:46 | händelse | kopt | sak=jetmotor |
| 0:56 | händelse | printStart | sak=byggsats:jetmotor |
| 0:56 | poolTom | du | 4 repliker använda |
| 0:58 | toast | bra | Del 1 av 4 klar |
| 1:00 | sak | du | Min egen bod. Här är det ingen som tjatar. |
| 1:00 | notis | tanke | 💭 Min egen bod. Här är det ingen som tjatar. |
| 1:00 | röst | du | Min egen bod. Här är det ingen som tjatar. · STORY |
| 1:00 | toast | bra | Del 2 av 4 klar |
| 1:02 | toast | bra | Del 3 av 4 klar |
| 1:02 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 1:03 | klar | du | Min egen bod. Här är det ingen som tjatar. |
| 1:12 | sak | mamma | Paketet kom tillbaka. Det står "Okänd mottagare". Är du ens skriven där? Vart ska jag skicka din post? |
| 1:12 | sms | mamma | Paketet kom tillbaka. Det står "Okänd mottagare". Är du ens skriven där? Vart ska jag skicka din post? |
| 1:12 | sms-bubbla | mamma | Paketet kom tillbaka. Det står "Okänd mottagare". Är du ens skriven där? Vart ska jag skicka din post? |
| 1:12 | röst | mamma | Paketet kom tillbaka. Det står "Okänd mottagare". Är du ens skriven där? Vart ska jag skicka din post? · STORY |
| 1:20 | klar | mamma | Paketet kom tillbaka. Det står "Okänd mottagare". Är du ens skriven där? Vart ska jag skicka din post? |
| 1:25 | skratt | du | falsk tuta |
| 1:27 | väntar | bror | Pappa gick för att tjacka mjölk och kom hem med en motorsåg. "Den var på rea." Vi har inga träd. |
| 1:28 | sak | notis:💡 Poletten trillar ner: du bor faktiskt | 💡 Poletten trillar ner: du bor faktiskt här. Nytt mål: bli folkbokförd (tavlan vid vägen). |
| 1:28 | toast | guld | 💡 Poletten trillar ner: du bor faktiskt här. Nytt mål: bli folkbokförd (tavlan vid vägen). |
| 1:28 | notis | guld | 💡 Poletten trillar ner: du bor faktiskt här. Nytt mål: bli folkbokförd (tavlan vid vägen). |
| 1:31 | klar | notis:💡 Poletten trillar ner: du bor faktiskt | 💡 Poletten trillar ner: du bor faktiskt här. Nytt mål: bli folkbokförd (tavlan vid vägen). |
| 1:47 | väntar | värld:TUUT! Tjena! | TUUT! Tjena! |
| 1:47 | sak | värld:TUUT! Tjena! | TUUT! Tjena! |
| 1:47 | bubbla |  | TUUT! Tjena! |
| 1:49 | väntar | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått minikylskåp. Skriv in, Gunnar. Du skriver aldrig in. |
| 1:49 | radio | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått minikylskåp. Skriv in, Gunnar. Du skriver aldrig in. |
| 1:49 | skratt | du | Radio-Kjelle |
| 1:50 | klar | värld:TUUT! Tjena! | TUUT! Tjena! |
| 1:58 | sak | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått minikylskåp. Skriv in, Gunnar. Du skriver aldrig in. |
| 1:58 | notis |  | 📻 Radio Tippen: Radio Tippen, Kjelle här. Skjulet vid tippen har fått minikylskåp. Skriv in, Gunnar. Du skriver aldrig in. |
| 1:58 | röst | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått minikylskåp. Skriv in, Gunnar. Du skriver aldrig in. · REAKTION |
| 1:58 | händelse | printKlar | sak=byggsats:jetmotor n=1 |
| 1:58 | toast | guld | ✅ |
| 2:07 | klar | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått minikylskåp. Skriv in, Gunnar. Du skriver aldrig in. |
| 2:08 | händelse | tagitUrPrint | sak=byggsats:jetmotor n=1 |
| 2:08 | paket |  | sms |
| 2:08 | väntar | ali | Ali här. Du printade Jetmotor med efterbrännare från min ritning. Och det FUNKAR? Jag har bara sett sånt på YouTube. |
| 2:09 | händelse | placerat | sak=jetmotor |
| 2:09 | väntar | info:guld | 🚀 JETMOTOR! Kolfiberkvarnen mal 6× snabbare. |
| 2:09 | sak | info:guld | 🚀 JETMOTOR! Kolfiberkvarnen mal 6× snabbare. |
| 2:09 | kvitto-visas | info:guld | 🚀 JETMOTOR! Kolfiberkvarnen mal 6× snabbare. |
| 2:09 | toast | guld | 🚀 JETMOTOR! Kolfiberkvarnen mal 6× snabbare. |
| 2:09 | händelse | malKlart | id=jet14 del=Dag 14 – Jetmotorn nasta=f14-bygg-leveransladan |
| 2:09 | väntar | bror | Mamma har ringt Skatteverket. Två gånger. De sa att du måste äga där du bor eller ha ett kontrakt. Hon frågade om de kunde göra ett undantag "för det är ju mitt barn". De kunde inte. |
| 2:09 | väntar | du | En leveranslåda. Då säljer fabriken själv. |
| 2:09 | MÅL |  | Bygg leveranslådan |
| 2:11 | klar | info:guld | 🚀 JETMOTOR! Kolfiberkvarnen mal 6× snabbare. |
| 2:13 | målruta |  | Bygg leveranslådan |
| 2:13 | kvittens-bock |  | ✓ Montera jetmotorn på kolfiberkvarnen |
| 2:13 | sak | du | En leveranslåda. Då säljer fabriken själv. |
| 2:13 | pil |  | Bygg leveranslådan |
| 2:13 | notis | tanke | 💭 En leveranslåda. Då säljer fabriken själv. |
| 2:13 | röst | du | En leveranslåda. Då säljer fabriken själv. · MÅL |
| 2:14 | nick |  | nick:100 |
| 2:17 | klar | du | En leveranslåda. Då säljer fabriken själv. |
| 2:22 | händelse | printStart | sak=n2_hjalm |
| 2:25 | sak | ali | Ali här. Du printade Jetmotor med efterbrännare från min ritning. Och det FUNKAR? Jag har bara sett sånt på YouTube. |
| 2:25 | sms | ali | Ali här. Du printade Jetmotor med efterbrännare från min ritning. Och det FUNKAR? Jag har bara sett sånt på YouTube. |
| 2:25 | sms-bubbla | ali | Ali här. Du printade Jetmotor med efterbrännare från min ritning. Och det FUNKAR? Jag har bara sett sånt på YouTube. |
| 2:25 | röst | ali | Ali här. Du printade Jetmotor med efterbrännare från min ritning. Och det FUNKAR? Jag har bara sett sånt på YouTube. · REAKTION |
| 2:26 | toast | guld | ✅ |
| 2:26 | händelse | printKlar | sak=n2_hjalm n=18 |
| 2:27 | händelse | tagitUrPrint | sak=n2_hjalm n=1 |
| 2:33 | paket |  | tanke |
| 2:33 | tanke | du | Raggsockorna runt jetmotorn. Äntligen passar de nåt. |
| 2:33 | väntar | du | Raggsockorna runt jetmotorn. Äntligen passar de nåt. |
| 2:33 | skratt | du | raggsockorna |
| 2:35 | klar | ali | Ali här. Du printade Jetmotor med efterbrännare från min ritning. Och det FUNKAR? Jag har bara sett sånt på YouTube. |
| 2:35 | skratt | du | kvarnen rapar |
| 2:38 | toast | guld | 🧵 |
| 2:39 | väntar | info:fel | Göran snodde cykelhjälm i petg. |
| 2:39 | sak | info:fel | Göran snodde cykelhjälm i petg. |
| 2:39 | kvitto-visas | info:fel | Göran snodde cykelhjälm i petg. |
| 2:39 | toast | fel | Göran snodde cykelhjälm i petg. |
| 2:41 | klar | info:fel | Göran snodde cykelhjälm i petg. |
| 2:42 | händelse | printStart | sak=n2_hjalm |
| 2:46 | toast | guld | ✅ |
| 2:46 | händelse | printKlar | sak=n2_hjalm n=19 |
| 2:46 | toast | guld | 🧵 |
| 2:47 | händelse | tagitUrPrint | sak=n2_hjalm n=1 |
| 2:49 | händelse | printStart | sak=n2_hjalm |
| 2:50 | sak | du | Raggsockorna runt jetmotorn. Äntligen passar de nåt. |
| 2:50 | notis | tanke | 💭 Raggsockorna runt jetmotorn. Äntligen passar de nåt. |
| 2:50 | röst | du | Raggsockorna runt jetmotorn. Äntligen passar de nåt. · REAKTION |
| 2:54 | toast | guld | ✅ |
| 2:54 | händelse | printKlar | sak=n2_hjalm n=20 |
| 2:55 | klar | du | Raggsockorna runt jetmotorn. Äntligen passar de nåt. |
| 2:55 | händelse | tagitUrPrint | sak=n2_hjalm n=1 |
| 2:56 | poolTom | du | 4 repliker använda |
| 2:58 | händelse | printStart | sak=pall |
| 3:02 | toast | guld | ✅ |
| 3:02 | händelse | printKlar | sak=pall n=27 |
| 3:03 | händelse | tagitUrPrint | sak=pall n=1 |
| 3:16 | sak | bror | Mamma har ringt Skatteverket. Två gånger. De sa att du måste äga där du bor eller ha ett kontrakt. Hon frågade om de kunde göra ett undantag "för det är ju mitt barn". De kunde inte. |
| 3:16 | sms | bror | Mamma har ringt Skatteverket. Två gånger. De sa att du måste äga där du bor eller ha ett kontrakt. Hon frågade om de kunde göra ett undantag "för det är ju mitt barn". De kunde inte. |
| 3:16 | sms-bubbla | bror | Mamma har ringt Skatteverket. Två gånger. De sa att du måste äga där du bor eller ha ett kontrakt. Hon frågade om de kunde göra ett undantag "för det är ju mitt barn". De kunde inte. |
| 3:16 | röst | bror | Mamma har ringt Skatteverket. Två gånger. De sa att du måste äga där du bor eller ha ett kontrakt. Hon frågade om de kunde göra ett undantag "för det är ju mitt barn". De kunde inte. · STORY |
| 3:16 | händelse | printStart | sak=pall |
| 3:18 | skratt | du | kvarnen spottar |
| 3:20 | toast | guld | ✅ |
| 3:20 | händelse | printKlar | sak=pall n=28 |
| 3:21 | händelse | tagitUrPrint | sak=pall n=1 |
| 3:25 | väntar | bror | Mamma har gjort lingonsylt i tre dagar. Hela köket är rött. Hon säger att det är till dig. Lycka till. |
| 3:31 | klar | bror | Mamma har ringt Skatteverket. Två gånger. De sa att du måste äga där du bor eller ha ett kontrakt. Hon frågade om de kunde göra ett undantag "för det är ju mitt barn". De kunde inte. |
| 3:35 | skratt | du | däcket rullar iväg |
| 3:35 | webb | du | packade 1 n2_hjalm |
| 3:42 | skratt | du | falsk tuta |
| 3:44 | webb | du | packade 2 pall |
| 3:59 | väntar | info:bra | 📦 Paketet till Gun-Britt i Nässjö ligger i postlådan – Rolf tar det till posten |
| 3:59 | sak | info:bra | 📦 Paketet till Gun-Britt i Nässjö ligger i postlådan – Rolf tar det till posten |
| 3:59 | kvitto-visas | info:bra | 📦 Paketet till Gun-Britt i Nässjö ligger i postlådan – Rolf tar det till posten |
| 3:59 | toast | bra | 📦 Paketet till Gun-Britt i Nässjö ligger i postlådan – Rolf tar det till posten |
| 4:00 | väntar | info:bra | 📦 Paketet till Någon i Mora ligger i postlådan – Rolf tar det till posten |
| 4:01 | klar | info:bra | 📦 Paketet till Gun-Britt i Nässjö ligger i postlådan – Rolf tar det till posten |
| 4:01 | sak | info:bra | 📦 Paketet till Någon i Mora ligger i postlådan – Rolf tar det till posten |
| 4:01 | kvitto-visas | info:bra | 📦 Paketet till Någon i Mora ligger i postlådan – Rolf tar det till posten |
| 4:01 | toast | bra | 📦 Paketet till Någon i Mora ligger i postlådan – Rolf tar det till posten |
| 4:03 | klar | info:bra | 📦 Paketet till Någon i Mora ligger i postlådan – Rolf tar det till posten |
| 4:05 | händelse | printStart | sak=n3_stol |
| 4:07 | väntar | rolf | Rolfs Rockers spelade en gång i Folkets park i Hudiksvall. 14 pers. 3 dansade. Bästa kvällen i mitt liv. /R |
| 4:12 | toast | guld | ✅ |
| 4:12 | händelse | printKlar | sak=n3_stol n=8 |
| 4:13 | händelse | tagitUrPrint | sak=n3_stol n=1 |
| 4:22 | aliSalt | ali | 16000 |
| 4:23 | väntar | ali | Jag stängde nästan. Sedan tänkte jag: kanske kommer du. |
| 4:23 | sak | ali | Jag stängde nästan. Sedan tänkte jag: kanske kommer du. |
| 4:23 | röst | ali | Jag stängde nästan. Sedan tänkte jag: kanske kommer du. · SMÅPRAT |
| 4:24 | bubbla |  | Jag stängde nästan. Sedan tänkte jag: kanske kommer du. |
| 4:27 | väntar | bud | (tips) |
| 4:28 | klar | ali | Jag stängde nästan. Sedan tänkte jag: kanske kommer du. |
| 4:30 | sak | bud | (tips) |
| 4:31 | klar | bud | (tips) |
| 4:33 | meddelande | bror | En GAMINGBOD?! Jag bor i en etta med mögel. Kan jag flytta in? Skämtar. Typ. |
| 4:34 | röst | bror | En GAMINGBOD?! Jag bor i en etta med mögel. Kan jag flytta in? Skämtar. Typ. · STORY |
| 4:43 | paket |  | sms |
| 4:43 | väntar | bror | Seriöst? … Nej. Mamma skulle aldrig sluta prata om det. Men tack. |
| 4:52 | händelse | brevLast | id=b_bod |
| 4:54 | sak | bror | Seriöst? … Nej. Mamma skulle aldrig sluta prata om det. Men tack. |
| 4:54 | sms | bror | Seriöst? … Nej. Mamma skulle aldrig sluta prata om det. Men tack. |
| 4:54 | sms-bubbla | bror | Seriöst? … Nej. Mamma skulle aldrig sluta prata om det. Men tack. |
| 4:54 | röst | bror | Seriöst? … Nej. Mamma skulle aldrig sluta prata om det. Men tack. · STORY |
| 4:56 | poolTom | du | 4 repliker använda |
| 5:00 | klar | bror | Seriöst? … Nej. Mamma skulle aldrig sluta prata om det. Men tack. |
| 5:25 | väntar | mamma | Bygger du ett hus till? Du har inte ens dammsugit ditt rum här hemma på fyra år. |
| 6:56 | poolTom | du | 4 repliker använda |
| 7:29 | skratt | du | falsk tuta |
| 7:44 | skratt | du | däcket rullar iväg |
| 8:50 | händelse | printStart | sak=n2_hjalm |
| 8:54 | toast | guld | ✅ |
| 8:54 | händelse | printKlar | sak=n2_hjalm n=21 |
| 8:55 | händelse | tagitUrPrint | sak=n2_hjalm n=1 |
| 8:56 | poolTom | du | 4 repliker använda |
| 8:57 | väntar | bror | Pappa gick för att tjacka mjölk och kom hem med en motorsåg. "Den var på rea." Vi har inga träd. |
| 9:03 | aliSalt | ali | 1995 |
| 9:04 | aliSalt | ali | 1895 |
| 9:07 | skratt | du | Alis dyr-pling |
| 9:07 | toast | guld | 3D-modell köpt – printa leveranslåda + autoprint på skrivaren |
| 9:07 | händelse | kopt | sak=utlada |
| 9:15 | händelse | printStart | sak=byggsats:utlada |
| 9:18 | toast | bra | Del 1 av 3 klar |
| 9:20 | toast | bra | Del 2 av 3 klar |
| 9:23 | händelse | printKlar | sak=byggsats:utlada n=1 |
| 9:23 | toast | guld | ✅ |
| 9:24 | väntar | info:guld | Leveranslåda + autoprint ligger i handen |
| 9:24 | händelse | tagitUrPrint | sak=byggsats:utlada n=1 |
| 9:24 | sak | info:guld | Leveranslåda + autoprint ligger i handen |
| 9:24 | kvitto-visas | info:guld | Leveranslåda + autoprint ligger i handen |
| 9:24 | toast | guld | Leveranslåda + autoprint ligger i handen |
| 9:26 | klar | info:guld | Leveranslåda + autoprint ligger i handen |
| 9:29 | händelse | placerat | sak=leveranslada |
| 9:29 | väntar | info:guld | Leveranslådan är på – skrivarna printar vidare av sig själva. |
| 9:29 | struken | info:guld | Leveranslådan är på – skrivarna printar vidare av sig själva. |
| 9:29 | väntar | info:guld | Leveranslådan står vid skrivaren. Välj en sak på skrivaren och slå på Autoprint – Ali hämtar lådan varje morgon. |
| 9:29 | monterat | du | byggsats:utlada |
| 9:29 | händelse | monterat | sak=utlada |
| 9:29 | sak | info:guld | Leveranslådan står vid skrivaren. Välj en sak på skrivaren och slå på Autoprint – Ali hämtar lådan varje morgon. |
| 9:29 | kvitto-visas | info:guld | Leveranslådan står vid skrivaren. Välj en sak på skrivaren och slå på Autoprint – Ali hämtar lådan varje morgon. |
| 9:29 | toast | guld | Leveranslådan står vid skrivaren. Välj en sak på skrivaren och slå på Autoprint – Ali hämtar lådan varje morgon. |
| 9:29 | händelse | malKlart | id=f14-bygg-leveransladan del=Dag 14 – Jetmotorn nasta=f14-kop-mutor-rolf |
| 9:29 | väntar | du | Rolf tippar mer om han får bullar. Ali har bullar. |
| 9:30 | MÅL |  | Köp mutor till Rolf hos Ali |
| 9:31 | klar | info:guld | Leveranslådan står vid skrivaren. Välj en sak på skrivaren och slå på Autoprint – Ali hämtar lådan varje morgon. |
| 9:31 | målruta |  | Köp mutor till Rolf hos Ali |
| 9:33 | kvittens-bock |  | ✓ Bygg leveranslådan |
| 9:33 | sak | du | Rolf tippar mer om han får bullar. Ali har bullar. |
| 9:33 | pil |  | Köp mutor till Rolf hos Ali |
| 9:33 | notis | tanke | 💭 Rolf tippar mer om han får bullar. Ali har bullar. |
| 9:33 | röst | du | Rolf tippar mer om han får bullar. Ali har bullar. · MÅL |
| 9:38 | klar | du | Rolf tippar mer om han får bullar. Ali har bullar. |
| 9:46 | skratt | du | falsk tuta |
| 9:47 | toast | guld | Mutor till Rolf nivå 1: En kall bira å en femtiolapp. Rolf tippar mer: 3 skräp extra varje gång |
| 9:47 | händelse | kopt | sak=sopbil |
| 9:47 | röst | ali | Nästa nivå kostar mer. Så funkar teknik. Och mitt liv. · STORY |
| 9:47 | butiksbubbla | ali | Nästa nivå kostar mer. Så funkar teknik. Och mitt liv. |
| 9:49 | händelse | malKlart | id=f14-kop-mutor-rolf del=Dag 14 – Jetmotorn nasta=sov14 |
| 9:49 | paket |  | lapp |
| 9:49 | väntar | du | Dag 14 är slut. Skjulet är fortfarande ett skjul. |
| 9:49 | MÅL |  | Klart för idag – sov när du vill |
| 9:50 | sak | du | (nytt mål i rutan) |
| 9:50 | målruta |  | Klart för idag – sov när du vill |
| 9:50 | pil |  | Klart för idag – sov när du vill |
| 9:50 | klar | du | (nytt mål i rutan) |
| 9:50 | sak | du | Dag 14 är slut. Skjulet är fortfarande ett skjul. |
| 9:50 | kvitto-visas | du | Dag 14 är slut. Skjulet är fortfarande ett skjul. |
| 9:50 | lapp | 📔 Dagbok | Dag 14 är slut. Skjulet är fortfarande ett skjul. |
| 9:50 | meddelande | du | Dag 14 är slut. Skjulet är fortfarande ett skjul. |
| 9:50 | dagbokkort | du | Dag 14 är slut. Skjulet är fortfarande ett skjul. |
| 9:50 | röst | du | Dag 14 är slut. Skjulet är fortfarande ett skjul. · STORY |
| 9:56 | händelse | brevLast | id=kvall14 |
| 9:56 | klar | du | Dag 14 är slut. Skjulet är fortfarande ett skjul. |
| 9:56 | väntar | notis:🌇 Klockan är 21. Ali slår igen luckan.  | 🌇 Klockan är 21. Ali slår igen luckan. Dagens jobb är klart – gå in i skjulet och sov i sängen. |
| 10:01 | struken | bror | Mamma har gjort lingonsylt i tre dagar. Hela köket är rött. Hon säger att det är till dig. Lycka till. |
| 10:01 | struken | mamma | Bygger du ett hus till? Du har inte ens dammsugit ditt rum här hemma på fyra år. |
| 10:03 | webbBetalt | du | 2437 |

<details><summary>Botens handlingar dag 14</summary>

- 0:00 — dag 14 börjar — (18345 kr)
- 0:15 popup: "FORTSÄTT" (18345 kr)
- 0:32 popup: "FORTSÄTT" (18345 kr)
- 0:44 gå till Ali (20 m) (18345 kr)
- 0:44 öppnar Alis butik – köpa jetmotor med efterbrännare (18345 kr)
- 0:47 köper jetmotor för 16000 kr (2345 kr)
- 0:55 gå till skrivaren (33 m) (2345 kr)
- 0:56 printar Jetmotor med efterbrännare (4 delar) (2345 kr)
- 1:03 väntar på kolfiber från bandet (2345 kr)
- 1:11 väntar på kolfiber från bandet (2345 kr)
- 1:19 väntar på kolfiber från bandet (2345 kr)
- 1:27 väntar på kolfiber från bandet (2345 kr)
- 1:35 väntar på kolfiber från bandet (2345 kr)
- 1:43 väntar på kolfiber från bandet (2345 kr)
- 1:52 väntar på kolfiber från bandet (2345 kr)
- 2:00 väntar på kolfiber från bandet (2345 kr)
- 2:08 tar ut 1 st ur skrivaren (2345 kr)
- 2:09 gå till kolfiberkvarnen (3 m) (2345 kr)
- 2:20 gå till skrivaren (4 m) (2345 kr)
- 2:22 printar Cykelhjälm i PETG (2345 kr)
- 2:28 tar ut 1 st ur skrivaren (2345 kr)
- 2:31 gå till en tunna (17 m) (2345 kr)
- 2:35 gå till PETG-kvarnen (12 m) (2345 kr)
- 2:35 tömmer det tunga i PETG-kvarnen (2345 kr)
- 2:40 gå till skrivaren (4 m) (2345 kr)
- 2:42 printar Cykelhjälm i PETG (2345 kr)
- 2:48 tar ut 1 st ur skrivaren (2345 kr)
- 2:49 printar Cykelhjälm i PETG (2345 kr)
- 2:56 tar ut 1 st ur skrivaren (2345 kr)
- 2:57 gå till skrivaren (6 m) (2345 kr)
- 2:58 printar Pall (2345 kr)
- 3:03 tar ut 1 st ur skrivaren (2345 kr)
- 3:10 plockar 2 skräp på tippen (bär max 16) (2345 kr)
- 3:12 gå till kvarnen (14 m) (2345 kr)
- 3:15 gå till skrivaren (7 m) (2345 kr)
- 3:16 printar Pall (2345 kr)
- 3:21 tar ut 1 st ur skrivaren (2345 kr)
- 3:25 gå till datorn (19 m) (2345 kr)
- 3:34 panel: "Webbshopen · Soptippsvägen 1
B" (2345 kr)
- 3:43 panel: "Webbshopen · Soptippsvägen 1
B" (2345 kr)
- 3:53 panel: "Webbshopen · Soptippsvägen 1
B" (2345 kr)
- 3:59 gå till Rolfs postlåda (paket) (29 m) (2345 kr)
- 4:00 webbshop: 2 paket i postlådan (2345 kr)
- 4:00 tjänar pengar till leveranslåda + autoprint: 2345/18500 kr → printar kolfiberstol (16000 kr) (2345 kr)
- 4:04 gå till skrivaren (15 m) (2345 kr)
- 4:05 printar Kolfiberstol (2345 kr)
- 4:14 tar ut 1 st ur skrivaren (2345 kr)
- 4:20 gå till Ali (34 m) (2345 kr)
- 4:20 öppnar Alis butik – sälja (2345 kr)
- 4:22 säljer hos Ali: +16000 kr (18345 kr)
- 4:23 tjänar pengar till leveranslåda + autoprint: 18345/18500 kr → printar kolfiberstol (15200 kr) (18345 kr)
- 4:23 väntar på kolfiber från bandet (18345 kr)
- 4:31 väntar på kolfiber från bandet (18345 kr)
- 4:43 popup: "Klart du får." (18345 kr)
- 4:52 popup: "Läst" (18345 kr)
- 4:53 väntar på kolfiber från bandet (18345 kr)
- 5:01 väntar på kolfiber från bandet (18345 kr)
- 5:09 väntar på kolfiber från bandet (18345 kr)
- 5:17 väntar på kolfiber från bandet (18345 kr)
- 5:25 väntar på kolfiber från bandet (18345 kr)
- 5:33 väntar på kolfiber från bandet (18345 kr)
- 5:41 väntar på kolfiber från bandet (18345 kr)
- 5:49 väntar på kolfiber från bandet (18345 kr)
- 5:58 väntar på kolfiber från bandet (18345 kr)
- 6:06 väntar på kolfiber från bandet (18345 kr)
- 6:14 väntar på kolfiber från bandet (18345 kr)
- 6:22 väntar på kolfiber från bandet (18345 kr)
- 6:30 väntar på kolfiber från bandet (18345 kr)
- 6:38 väntar på kolfiber från bandet (18345 kr)
- 6:46 väntar på kolfiber från bandet (18345 kr)
- 6:54 väntar på kolfiber från bandet (18345 kr)
- 7:02 väntar på kolfiber från bandet (18345 kr)
- 7:10 väntar på kolfiber från bandet (18345 kr)
- 7:19 väntar på kolfiber från bandet (18345 kr)
- 7:27 väntar på kolfiber från bandet (18345 kr)
- 7:35 väntar på kolfiber från bandet (18345 kr)
- 7:43 väntar på kolfiber från bandet (18345 kr)
- 7:51 väntar på kolfiber från bandet (18345 kr)
- 7:59 väntar på kolfiber från bandet (18345 kr)
- 8:07 väntar på kolfiber från bandet (18345 kr)
- 8:15 väntar på kolfiber från bandet (18345 kr)
- 8:23 väntar på kolfiber från bandet (18345 kr)
- 8:31 väntar på kolfiber från bandet (18345 kr)
- 8:40 väntar på kolfiber från bandet (18345 kr)
- 8:40 kolfiberstol gick inte att printa – tar nästa (18345 kr)
- 8:40 öppnar Alis butik – sälja (18345 kr)
- 8:42 tjänar pengar till leveranslåda + autoprint: 18345/18500 kr → printar cykelhjälm i petg (1995 kr) (18345 kr)
- 8:48 gå till skrivaren (29 m) (18345 kr)
- 8:50 printar Cykelhjälm i PETG (18345 kr)
- 8:56 tar ut 1 st ur skrivaren (18345 kr)
- 9:02 gå till Ali (29 m) (18345 kr)
- 9:02 öppnar Alis butik – sälja (18345 kr)
- 9:04 säljer hos Ali: +3890 kr (22235 kr)
- 9:05 öppnar Alis butik – köpa leveranslåda + autoprint (22235 kr)
- 9:08 köper utlada för 18500 kr (3735 kr)
- 9:13 gå till skrivaren (23 m) (3735 kr)
- 9:15 printar Leveranslåda + autoprint (3 delar) (3735 kr)
- 9:24 tar ut 1 st ur skrivaren (3735 kr)
- 9:29 gå till bygg leveranslådan (7 m) (3735 kr)
- 9:46 gå till Ali (29 m) (3735 kr)
- 9:46 öppnar Alis butik – bjuda Rolf på fika (3735 kr)
- 9:56 popup: "FORTSÄTT" (3485 kr)
- 10:01 gå till sängen (20 m) (3485 kr)

</details>

## Dag 15

| Tid | Källa | Vem | Text |
|---|---|---|---|
| 10:03 | vara | ali | n2_vas |
| 10:03 | händelse | malKlart | id=sov14 del=Dag 14 – Jetmotorn nasta=f15-bygg-gamingboden |
| 10:03 | händelse | malKlart | id=f15-bygg-gamingboden del=Dag 15 – Fristaden nasta=gamer |
| 10:03 | MÅL |  | Inred boden · 1/3 gamersaker |
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
| 0:25 | struken | notis:🌇 Klockan är 21. Ali slår igen luckan.  | 🌇 Klockan är 21. Ali slår igen luckan. Dagens jobb är klart – gå in i skjulet och sov i sängen. |
| 0:25 | struken | bror | Pappa gick för att tjacka mjölk och kom hem med en motorsåg. "Den var på rea." Vi har inga träd. |
| 0:46 | röst | ali | Jag har sålt min första egna ritning. Till en man i Örebro. Han skrev bra lampa. Jag har ramat in mejlet. · STORY |
| 0:46 | butiksbubbla | ali | Jag har sålt min första egna ritning. Till en man i Örebro. Han skrev bra lampa. Jag har ramat in mejlet. |
| 0:48 | skratt | du | Alis dyr-pling |
| 0:48 | händelse | kopt | sak=projektor |
| 0:49 | väntar | rolf | Trädgårn står kvar. Ingen brådska. Nässlorna har inga planer. MVH ROLF |
| 0:51 | poolTom | du | 4 repliker använda |
| 0:56 | händelse | printStart | sak=projektor |
| 0:57 | paket |  | replik |
| 0:57 | väntar | bengt | Pappas. Han hade velat att nån använde den. HMPF. |
| 0:59 | väntar | bengt | Pappa grävde här bakom i hela sitt liv. Du har gjort mer på ett halvår. HMPF. |
| 0:59 | skratt | du | Bengt-Åke mjuknar |
| 1:00 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 1:01 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 1:01 | väntar | notis:Skrivare L: Tornet är tomt – mal mer så  | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 1:01 | ljud | bom | Bommen fälls upp (hoger) |
| 1:02 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 1:02 | sak | bengt | Pappa grävde här bakom i hela sitt liv. Du har gjort mer på ett halvår. HMPF. |
| 1:02 | bubbla |  | Pappa grävde här bakom i hela sitt liv. Du har gjort mer på ett halvår. HMPF. |
| 1:02 | röst | bengt | Pappa grävde här bakom i hela sitt liv. Du har gjort mer på ett halvår. HMPF. · STORY |
| 1:03 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 1:03 | struken | notis | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 1:04 | ljud | kajsa | Mjau |
| 1:09 | klar | bengt | Pappa grävde här bakom i hela sitt liv. Du har gjort mer på ett halvår. HMPF. |
| 1:16 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 1:16 | struken | notis | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 1:17 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 1:17 | struken | notis | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 1:18 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 1:18 | struken | notis | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 1:19 | toast | guld | ✅ |
| 1:19 | händelse | printKlar | sak=projektor n=1 |
| 1:24 | sak | notis:Skrivare L: Tornet är tomt – mal mer så  | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 1:24 | notis | fel | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 1:26 | händelse | tagitUrPrint | sak=projektor n=1 |
| 1:27 | klar | notis:Skrivare L: Tornet är tomt – mal mer så  | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 1:33 | händelse | placerat | sak=projektor |
| 1:37 | skratt | du | Alis dyr-pling |
| 1:37 | händelse | kopt | sak=ledpinne |
| 1:39 | sak | bengt | Pappas. Han hade velat att nån använde den. HMPF. |
| 1:39 | notis |  | Bengt-Åke: Pappas. Han hade velat att nån använde den. HMPF. |
| 1:39 | röst | bengt | Pappas. Han hade velat att nån använde den. HMPF. · STORY |
| 1:39 | väntar | rolf | Chefen har köpt en kaffemaskin som pratar. Den sa "god morgon Rolf". Ja litar inte på den. /R |
| 1:40 | bubbla |  | Pappas. Han hade velat att nån använde den. HMPF. |
| 1:43 | klar | bengt | Pappas. Han hade velat att nån använde den. HMPF. |
| 1:45 | väntar | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått jetmotor med efterbrännare. Det är stort, Gunnar. |
| 1:45 | radio | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått jetmotor med efterbrännare. Det är stort, Gunnar. |
| 1:45 | skratt | du | Radio-Kjelle |
| 1:45 | händelse | printStart | sak=ledpinne |
| 1:48 | toast | guld | ✅ |
| 1:48 | händelse | printKlar | sak=ledpinne n=1 |
| 1:49 | skratt | du | däcket rullar iväg |
| 1:49 | händelse | tagitUrPrint | sak=ledpinne n=1 |
| 1:54 | sak | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått jetmotor med efterbrännare. Det är stort, Gunnar. |
| 1:54 | notis |  | 📻 Radio Tippen: Radio Tippen, Kjelle här. Skjulet vid tippen har fått jetmotor med efterbrännare. Det är stort, Gunnar. |
| 1:54 | röst | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått jetmotor med efterbrännare. Det är stort, Gunnar. · REAKTION |
| 1:54 | händelse | placerat | sak=ledpinne |
| 1:54 | händelse | malKlart | id=gamer del=Dag 15 – Fristaden nasta=f15-printa-stall-ut |
| 1:54 | väntar | du | En jacuzzi. På en soptipp. Varför inte. |
| 1:54 | målruta |  | Printa och ställ ut en jacuzzi |
| 1:54 | MÅL |  | Printa och ställ ut en jacuzzi |
| 1:58 | kvittens-bock |  | ✓ Inred boden · 3/3 gamersaker |
| 2:02 | klar | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått jetmotor med efterbrännare. Det är stort, Gunnar. |
| 2:04 | sak | du | En jacuzzi. På en soptipp. Varför inte. |
| 2:04 | pil |  | Printa och ställ ut en jacuzzi |
| 2:04 | notis | tanke | 💭 En jacuzzi. På en soptipp. Varför inte. |
| 2:04 | röst | du | En jacuzzi. På en soptipp. Varför inte. · MÅL |
| 2:08 | klar | du | En jacuzzi. På en soptipp. Varför inte. |
| 2:13 | händelse | printStart | sak=pall |
| 2:18 | händelse | printStart | sak=pall |
| 2:23 | väntar | värld:Mjau. | Mjau. |
| 2:24 | händelse | printStart | sak=pall |
| 2:27 | toast | skak | handen skakar: fullt |
| 2:29 | skratt | du | kvarnen spottar |
| 2:30 | händelse | printStart | sak=pall |
| 2:31 | sak | värld:Mjau. | Mjau. |
| 2:31 | bubbla |  | Mjau. |
| 2:33 | klar | värld:Mjau. | Mjau. |
| 2:35 | händelse | printStart | sak=pall |
| 2:41 | händelse | printStart | sak=pall |
| 2:47 | händelse | printStart | sak=pall |
| 2:51 | poolTom | du | 4 repliker använda |
| 2:52 | händelse | printStart | sak=pall |
| 2:58 | händelse | printStart | sak=pall |
| 3:02 | händelse | printStart | sak=pall |
| 3:04 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 3:12 | väntar | värld:Mjau. | Mjau. |
| 3:17 | sak | värld:Mjau. | Mjau. |
| 3:17 | bubbla |  | Mjau. |
| 3:18 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 3:18 | väntar | notis:Skrivare L: Tornet är tomt – mal mer så  | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 3:19 | klar | värld:Mjau. | Mjau. |
| 3:19 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 3:19 | struken | notis | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 3:25 | händelse | printStart | sak=pall |
| 3:27 | sak | notis:Skrivare L: Tornet är tomt – mal mer så  | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 3:27 | notis | fel | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 3:29 | skratt | du | falsk tuta |
| 3:29 | väntar | info:guld | Täppan är rensad. Ali har spaljé och droppslang i röd PETG. |
| 3:29 | klar | notis:Skrivare L: Tornet är tomt – mal mer så  | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 3:29 | sak | info:guld | Täppan är rensad. Ali har spaljé och droppslang i röd PETG. |
| 3:29 | kvitto-visas | info:guld | Täppan är rensad. Ali har spaljé och droppslang i röd PETG. |
| 3:29 | toast | guld | Täppan är rensad. Ali har spaljé och droppslang i röd PETG. |
| 3:30 | händelse | printStart | sak=pall |
| 3:31 | klar | info:guld | Täppan är rensad. Ali har spaljé och droppslang i röd PETG. |
| 3:35 | händelse | printStart | sak=pall |
| 3:40 | händelse | printStart | sak=pall |
| 3:46 | händelse | printStart | sak=pall |
| 3:48 | väntar | värld:Mjau. | Mjau. |
| 3:50 | väntar | värld:TUUT! Tjena! | TUUT! Tjena! |
| 3:52 | händelse | printStart | sak=pall |
| 3:56 | sak | värld:Mjau. | Mjau. |
| 3:56 | bubbla |  | Mjau. |
| 3:57 | händelse | printStart | sak=pall |
| 3:58 | klar | värld:Mjau. | Mjau. |
| 4:04 | händelse | printStart | sak=pall |
| 4:06 | sak | värld:TUUT! Tjena! | TUUT! Tjena! |
| 4:06 | bubbla |  | TUUT! Tjena! |
| 4:09 | klar | värld:TUUT! Tjena! | TUUT! Tjena! |
| 4:09 | händelse | printStart | sak=pall |
| 4:12 | händelse | printStart | sak=pall |
| 4:12 | toast | bra | Startar nästa i kön: pall |
| 4:12 | väntar | notis:Skrivare L: Startar nästa i kön: pall | Skrivare L: Startar nästa i kön: pall |
| 4:17 | sak | notis:Skrivare L: Startar nästa i kön: pall | Skrivare L: Startar nästa i kön: pall |
| 4:17 | notis | bra | Skrivare L: Startar nästa i kön: pall |
| 4:19 | klar | notis:Skrivare L: Startar nästa i kön: pall | Skrivare L: Startar nästa i kön: pall |
| 4:20 | händelse | printStart | sak=pall |
| 4:23 | väntar | värld:Mjau. | Mjau. |
| 4:25 | händelse | printStart | sak=pall |
| 4:29 | sak | värld:Mjau. | Mjau. |
| 4:29 | bubbla |  | Mjau. |
| 4:31 | händelse | printStart | sak=pall |
| 4:31 | klar | värld:Mjau. | Mjau. |
| 4:35 | händelse | printStart | sak=pall |
| 4:35 | toast | bra | Startar nästa i kön: pall |
| 4:42 | händelse | printStart | sak=pall |
| 4:48 | händelse | printStart | sak=pall |
| 4:51 | poolTom | du | 4 repliker använda |
| 4:58 | händelse | printStart | sak=pall |
| 5:04 | händelse | printStart | sak=pall |
| 5:07 | händelse | printStart | sak=pall |
| 5:07 | toast | bra | Startar nästa i kön: pall |
| 5:20 | väntar | värld:Mjau. | Mjau. |
| 5:24 | sak | värld:Mjau. | Mjau. |
| 5:24 | bubbla |  | Mjau. |
| 5:24 | händelse | printStart | sak=pall |
| 5:26 | klar | värld:Mjau. | Mjau. |
| 5:28 | händelse | printStart | sak=pall |
| 5:28 | skratt | du | Kajsa i skrivaren |
| 5:35 | händelse | printStart | sak=pall |
| 5:40 | händelse | printStart | sak=pall |
| 5:45 | skratt | du | falsk tuta |
| 5:45 | väntar | värld:TUUT! Tjena! | TUUT! Tjena! |
| 5:47 | sak | värld:TUUT! Tjena! | TUUT! Tjena! |
| 5:47 | bubbla |  | TUUT! Tjena! |
| 5:49 | händelse | printStart | sak=pall |
| 5:50 | klar | värld:TUUT! Tjena! | TUUT! Tjena! |
| 5:54 | händelse | printStart | sak=pall |
| 6:00 | händelse | printStart | sak=pall |
| 6:04 | händelse | printStart | sak=pall |
| 6:06 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 6:11 | väntar | värld:Mjau. | Mjau. |
| 6:19 | sak | värld:Mjau. | Mjau. |
| 6:19 | bubbla |  | Mjau. |
| 6:20 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 6:21 | klar | värld:Mjau. | Mjau. |
| 6:25 | händelse | printStart | sak=pall |
| 6:31 | händelse | printStart | sak=pall |
| 6:42 | väntar | värld:Mjau. | Mjau. |
| 6:46 | sak | värld:Mjau. | Mjau. |
| 6:46 | bubbla |  | Mjau. |
| 6:48 | klar | värld:Mjau. | Mjau. |
| 6:51 | händelse | printStart | sak=pall |
| 6:51 | poolTom | du | 4 repliker använda |
| 6:54 | händelse | printStart | sak=pall |
| 6:54 | toast | bra | Startar nästa i kön: pall |
| 7:00 | händelse | printStart | sak=nyckelring |
| 7:00 | händelse | printStart | sak=nyckelring |
| 7:01 | händelse | printStart | sak=nyckelring |
| 7:02 | händelse | printStart | sak=nyckelring |
| 7:03 | händelse | printStart | sak=nyckelring |
| 7:03 | händelse | printStart | sak=nyckelring |
| 7:04 | händelse | printStart | sak=nyckelring |
| 7:05 | händelse | printStart | sak=nyckelring |
| 7:05 | händelse | printStart | sak=nyckelring |
| 7:06 | händelse | printStart | sak=nyckelring |
| 7:07 | händelse | printStart | sak=nyckelring |
| 7:07 | händelse | printStart | sak=nyckelring |
| 7:08 | händelse | printStart | sak=nyckelring |
| 7:09 | händelse | printStart | sak=nyckelring |
| 7:10 | händelse | printStart | sak=nyckelring |
| 7:10 | händelse | printStart | sak=nyckelring |
| 7:11 | händelse | printStart | sak=nyckelring |
| 7:12 | händelse | printStart | sak=nyckelring |
| 7:12 | händelse | printStart | sak=nyckelring |
| 7:13 | händelse | printStart | sak=nyckelring |
| 7:14 | händelse | printStart | sak=nyckelring |
| 7:14 | händelse | printStart | sak=nyckelring |
| 7:15 | händelse | printStart | sak=nyckelring |
| 7:16 | händelse | printStart | sak=nyckelring |
| 7:17 | händelse | printStart | sak=nyckelring |
| 7:17 | händelse | printStart | sak=nyckelring |
| 7:18 | händelse | printStart | sak=nyckelring |
| 7:19 | händelse | printStart | sak=nyckelring |
| 7:19 | händelse | printStart | sak=nyckelring |
| 7:20 | händelse | printStart | sak=nyckelring |
| 7:21 | händelse | printStart | sak=nyckelring |
| 7:34 | väntar | värld:Mjau. | Mjau. |
| 7:37 | sak | värld:Mjau. | Mjau. |
| 7:37 | bubbla |  | Mjau. |
| 7:38 | händelse | printStart | sak=nyckelring |
| 7:39 | händelse | printStart | sak=nyckelring |
| 7:40 | klar | värld:Mjau. | Mjau. |
| 7:40 | händelse | printStart | sak=nyckelring |
| 7:40 | väntar | värld:TUUT TUUT! | TUUT TUUT! |
| 7:40 | händelse | printStart | sak=nyckelring |
| 7:41 | händelse | printStart | sak=nyckelring |
| 7:42 | händelse | printStart | sak=nyckelring |
| 7:42 | händelse | printStart | sak=nyckelring |
| 7:43 | händelse | printStart | sak=nyckelring |
| 7:44 | händelse | printStart | sak=nyckelring |
| 7:44 | händelse | printStart | sak=nyckelring |
| 7:45 | händelse | printStart | sak=nyckelring |
| 7:46 | händelse | printStart | sak=nyckelring |
| 7:47 | händelse | printStart | sak=nyckelring |
| 7:47 | skratt | du | Kajsa i skrivaren |
| 7:47 | händelse | printStart | sak=nyckelring |
| 7:48 | sak | värld:TUUT TUUT! | TUUT TUUT! |
| 7:48 | bubbla |  | TUUT TUUT! |
| 7:48 | händelse | printStart | sak=nyckelring |
| 7:49 | händelse | printStart | sak=nyckelring |
| 7:49 | händelse | printStart | sak=nyckelring |
| 7:50 | händelse | printStart | sak=nyckelring |
| 7:51 | klar | värld:TUUT TUUT! | TUUT TUUT! |
| 7:51 | händelse | printStart | sak=nyckelring |
| 7:51 | händelse | printStart | sak=nyckelring |
| 7:52 | händelse | printStart | sak=nyckelring |
| 7:53 | händelse | printStart | sak=nyckelring |
| 7:54 | händelse | printStart | sak=nyckelring |
| 7:54 | händelse | printStart | sak=nyckelring |
| 7:55 | händelse | printStart | sak=nyckelring |
| 7:56 | händelse | printStart | sak=nyckelring |
| 7:56 | händelse | printStart | sak=nyckelring |
| 7:57 | händelse | printStart | sak=nyckelring |
| 7:58 | händelse | printStart | sak=nyckelring |
| 7:58 | händelse | printStart | sak=nyckelring |
| 7:59 | händelse | printStart | sak=nyckelring |
| 7:59 | skratt | du | Kajsa i skrivaren |
| 8:00 | händelse | printStart | sak=nyckelring |
| 8:00 | toast | bra | Startar nästa i kön: nyckelring |
| 8:01 | händelse | printStart | sak=nyckelring |
| 8:01 | händelse | printStart | sak=nyckelring |
| 8:02 | händelse | printStart | sak=nyckelring |
| 8:03 | händelse | printStart | sak=nyckelring |
| 8:03 | händelse | printStart | sak=nyckelring |
| 8:04 | händelse | printStart | sak=nyckelring |
| 8:05 | händelse | printStart | sak=nyckelring |
| 8:05 | händelse | printStart | sak=nyckelring |
| 8:06 | händelse | printStart | sak=nyckelring |
| 8:07 | händelse | printStart | sak=nyckelring |
| 8:08 | händelse | printStart | sak=nyckelring |
| 8:08 | händelse | printStart | sak=nyckelring |
| 8:21 | väntar | värld:Mjau. | Mjau. |
| 8:25 | sak | värld:Mjau. | Mjau. |
| 8:25 | bubbla |  | Mjau. |
| 8:25 | händelse | printStart | sak=nyckelring |
| 8:26 | händelse | printStart | sak=nyckelring |
| 8:27 | händelse | printStart | sak=nyckelring |
| 8:27 | klar | värld:Mjau. | Mjau. |
| 8:27 | händelse | printStart | sak=nyckelring |
| 8:28 | händelse | printStart | sak=nyckelring |
| 8:29 | händelse | printStart | sak=nyckelring |
| 8:30 | händelse | printStart | sak=nyckelring |
| 8:30 | händelse | printStart | sak=nyckelring |
| 8:31 | händelse | printStart | sak=nyckelring |
| 8:32 | händelse | printStart | sak=nyckelring |
| 8:32 | händelse | printStart | sak=nyckelring |
| 8:33 | händelse | printStart | sak=nyckelring |
| 8:34 | händelse | printStart | sak=nyckelring |
| 8:34 | händelse | printStart | sak=nyckelring |
| 8:35 | händelse | printStart | sak=nyckelring |
| 8:36 | händelse | printStart | sak=nyckelring |
| 8:37 | händelse | printStart | sak=nyckelring |
| 8:37 | händelse | printStart | sak=nyckelring |
| 8:38 | händelse | printStart | sak=nyckelring |
| 8:39 | händelse | printStart | sak=nyckelring |
| 8:39 | händelse | printStart | sak=nyckelring |
| 8:40 | händelse | printStart | sak=nyckelring |
| 8:41 | händelse | printStart | sak=nyckelring |
| 8:41 | händelse | printStart | sak=nyckelring |
| 8:42 | händelse | printStart | sak=nyckelring |
| 8:43 | händelse | printStart | sak=nyckelring |
| 8:44 | händelse | printStart | sak=nyckelring |
| 8:44 | toast | bra | Startar nästa i kön: nyckelring |
| 8:44 | händelse | printStart | sak=nyckelring |
| 8:45 | händelse | printStart | sak=nyckelring |
| 8:46 | händelse | printStart | sak=nyckelring |
| 8:46 | händelse | printStart | sak=nyckelring |
| 8:47 | händelse | printStart | sak=nyckelring |
| 8:48 | händelse | printStart | sak=nyckelring |
| 8:48 | händelse | printStart | sak=nyckelring |
| 8:49 | händelse | printStart | sak=nyckelring |
| 8:50 | händelse | printStart | sak=nyckelring |
| 8:51 | händelse | printStart | sak=nyckelring |
| 8:51 | poolTom | du | 4 repliker använda |
| 8:51 | händelse | printStart | sak=nyckelring |
| 9:02 | väntar | värld:Mjau. | Mjau. |
| 9:06 | sak | värld:Mjau. | Mjau. |
| 9:06 | bubbla |  | Mjau. |
| 9:06 | händelse | printStart | sak=nyckelring |
| 9:07 | händelse | printStart | sak=nyckelring |
| 9:08 | händelse | printStart | sak=nyckelring |
| 9:08 | klar | värld:Mjau. | Mjau. |
| 9:08 | händelse | printStart | sak=nyckelring |
| 9:09 | händelse | printStart | sak=nyckelring |
| 9:10 | händelse | printStart | sak=nyckelring |
| 9:10 | händelse | printStart | sak=nyckelring |
| 9:11 | händelse | printStart | sak=nyckelring |
| 9:12 | händelse | printStart | sak=nyckelring |
| 9:13 | händelse | printStart | sak=nyckelring |
| 9:13 | händelse | printStart | sak=nyckelring |
| 9:13 | skratt | du | falsk tuta |
| 9:14 | händelse | printStart | sak=nyckelring |
| 9:15 | händelse | printStart | sak=nyckelring |
| 9:15 | händelse | printStart | sak=nyckelring |
| 9:16 | händelse | printStart | sak=nyckelring |
| 9:17 | händelse | printStart | sak=nyckelring |
| 9:17 | händelse | printStart | sak=nyckelring |
| 9:18 | händelse | printStart | sak=nyckelring |
| 9:19 | händelse | printStart | sak=nyckelring |
| 9:20 | händelse | printStart | sak=nyckelring |
| 9:20 | händelse | printStart | sak=nyckelring |
| 9:21 | händelse | printStart | sak=nyckelring |
| 9:22 | händelse | printStart | sak=nyckelring |
| 9:22 | händelse | printStart | sak=nyckelring |
| 9:23 | händelse | printStart | sak=nyckelring |
| 9:24 | händelse | printStart | sak=nyckelring |
| 9:24 | händelse | printStart | sak=nyckelring |
| 9:25 | händelse | printStart | sak=nyckelring |
| 9:25 | toast | bra | Startar nästa i kön: nyckelring |
| 9:26 | händelse | printStart | sak=nyckelring |
| 9:34 | väntar | värld:Mjau. | Mjau. |
| 9:35 | väntar | värld:TUUT! Tjena! | TUUT! Tjena! |
| 9:43 | toast | skak | handen skakar: fullt |
| 9:48 | sak | värld:Mjau. | Mjau. |
| 9:48 | bubbla |  | Mjau. |
| 9:48 | händelse | printStart | sak=nyckelring |
| 9:49 | händelse | printStart | sak=nyckelring |
| 9:50 | händelse | printStart | sak=nyckelring |
| 9:50 | klar | värld:Mjau. | Mjau. |
| 9:50 | händelse | printStart | sak=nyckelring |
| 9:51 | händelse | printStart | sak=nyckelring |
| 9:52 | händelse | printStart | sak=nyckelring |
| 9:53 | händelse | printStart | sak=nyckelring |
| 9:53 | händelse | printStart | sak=nyckelring |
| 9:54 | händelse | printStart | sak=nyckelring |
| 9:55 | händelse | printStart | sak=nyckelring |
| 9:55 | struken | värld:TUUT! Tjena! | TUUT! Tjena! |
| 9:55 | händelse | printStart | sak=nyckelring |
| 9:55 | skratt | du | Kajsa i skrivaren |
| 9:56 | händelse | printStart | sak=nyckelring |
| 9:57 | händelse | printStart | sak=nyckelring |
| 9:57 | händelse | printStart | sak=nyckelring |
| 9:58 | händelse | printStart | sak=nyckelring |
| 9:59 | händelse | printStart | sak=nyckelring |
| 10:00 | händelse | printStart | sak=nyckelring |
| 10:00 | händelse | printStart | sak=nyckelring |
| 10:01 | händelse | printStart | sak=nyckelring |
| 10:02 | händelse | printStart | sak=nyckelring |
| 10:02 | händelse | printStart | sak=nyckelring |
| 10:03 | händelse | printStart | sak=nyckelring |
| 10:04 | händelse | printStart | sak=nyckelring |
| 10:04 | händelse | printStart | sak=nyckelring |
| 10:05 | händelse | printStart | sak=nyckelring |
| 10:06 | händelse | printStart | sak=nyckelring |
| 10:07 | händelse | printStart | sak=nyckelring |
| 10:07 | händelse | printStart | sak=nyckelring |
| 10:08 | händelse | printStart | sak=nyckelring |
| 10:09 | händelse | printStart | sak=nyckelring |
| 10:09 | händelse | printStart | sak=nyckelring |
| 10:09 | toast | bra | Startar nästa i kön: nyckelring |
| 10:10 | händelse | printStart | sak=nyckelring |
| 10:11 | händelse | printStart | sak=nyckelring |
| 10:15 | väntar | värld:Mjau. | Mjau. |
| 10:22 | toast | skak | handen skakar: fullt |
| 10:27 | sak | värld:Mjau. | Mjau. |
| 10:27 | bubbla |  | Mjau. |
| 10:27 | händelse | printStart | sak=nyckelring |
| 10:28 | händelse | printStart | sak=nyckelring |
| 10:29 | händelse | printStart | sak=nyckelring |
| 10:29 | klar | värld:Mjau. | Mjau. |
| 10:30 | händelse | printStart | sak=nyckelring |
| 10:30 | händelse | printStart | sak=nyckelring |
| 10:31 | händelse | printStart | sak=nyckelring |
| 10:32 | händelse | printStart | sak=nyckelring |
| 10:32 | händelse | printStart | sak=nyckelring |
| 10:33 | händelse | printStart | sak=nyckelring |
| 10:34 | händelse | printStart | sak=nyckelring |
| 10:34 | händelse | printStart | sak=nyckelring |
| 10:35 | händelse | printStart | sak=nyckelring |
| 10:35 | väntar | info:guld | Marken sjönk. Ett äldre lager kom fram. |
| 10:35 | paket |  | sms |
| 10:35 | väntar | rolf | Tjock-TV:n. Ja tittade på Melodifestivalen på en sån. Birgitta röstade på alla. MVH ROLF |
| 10:35 | sak | info:guld | Marken sjönk. Ett äldre lager kom fram. |
| 10:35 | kvitto-visas | info:guld | Marken sjönk. Ett äldre lager kom fram. |
| 10:35 | toast | guld | Marken sjönk. Ett äldre lager kom fram. |
| 10:36 | händelse | printStart | sak=nyckelring |
| 10:37 | händelse | printStart | sak=nyckelring |
| 10:37 | skratt | du | Kajsa i skrivaren |
| 10:37 | händelse | printStart | sak=nyckelring |
| 10:37 | klar | info:guld | Marken sjönk. Ett äldre lager kom fram. |
| 10:38 | händelse | printStart | sak=nyckelring |
| 10:39 | händelse | printStart | sak=nyckelring |
| 10:39 | händelse | printStart | sak=nyckelring |
| 10:40 | händelse | printStart | sak=nyckelring |
| 10:41 | händelse | printStart | sak=nyckelring |
| 10:41 | händelse | printStart | sak=nyckelring |
| 10:42 | händelse | printStart | sak=nyckelring |
| 10:43 | händelse | printStart | sak=nyckelring |
| 10:44 | händelse | printStart | sak=nyckelring |
| 10:44 | händelse | printStart | sak=nyckelring |
| 10:45 | händelse | printStart | sak=nyckelring |
| 10:46 | händelse | printStart | sak=nyckelring |
| 10:46 | händelse | printStart | sak=nyckelring |
| 10:47 | händelse | printStart | sak=nyckelring |
| 10:47 | toast | bra | Startar nästa i kön: nyckelring |
| 10:48 | händelse | printStart | sak=nyckelring |
| 10:48 | händelse | printStart | sak=nyckelring |
| 10:51 | poolTom | du | 4 repliker använda |
| 10:54 | väntar | värld:Mjau. | Mjau. |
| 10:54 | sak | värld:Mjau. | Mjau. |
| 10:54 | bubbla |  | Mjau. |
| 10:56 | klar | värld:Mjau. | Mjau. |
| 11:04 | händelse | printStart | sak=nyckelring |
| 11:04 | händelse | printStart | sak=nyckelring |
| 11:05 | händelse | printStart | sak=nyckelring |
| 11:06 | händelse | printStart | sak=nyckelring |
| 11:06 | händelse | printStart | sak=nyckelring |
| 11:07 | händelse | printStart | sak=nyckelring |
| 11:08 | händelse | printStart | sak=nyckelring |
| 11:08 | händelse | printStart | sak=nyckelring |
| 11:09 | händelse | printStart | sak=nyckelring |
| 11:10 | händelse | printStart | sak=nyckelring |
| 11:11 | händelse | printStart | sak=nyckelring |
| 11:11 | händelse | printStart | sak=nyckelring |
| 11:12 | händelse | printStart | sak=nyckelring |
| 11:13 | händelse | printStart | sak=nyckelring |
| 11:13 | händelse | printStart | sak=nyckelring |
| 11:14 | händelse | printStart | sak=nyckelring |
| 11:15 | händelse | printStart | sak=nyckelring |
| 11:15 | händelse | printStart | sak=nyckelring |
| 11:16 | händelse | printStart | sak=nyckelring |
| 11:17 | händelse | printStart | sak=nyckelring |
| 11:18 | händelse | printStart | sak=nyckelring |
| 11:18 | händelse | printStart | sak=nyckelring |
| 11:19 | händelse | printStart | sak=nyckelring |
| 11:20 | händelse | printStart | sak=nyckelring |
| 11:20 | toast | bra | Startar nästa i kön: nyckelring |
| 11:20 | händelse | printStart | sak=nyckelring |
| 11:21 | händelse | printStart | sak=nyckelring |
| 11:30 | skratt | du | falsk tuta |
| 11:30 | väntar | värld:TUUT! Tjena! | TUUT! Tjena! |
| 11:30 | sak | värld:TUUT! Tjena! | TUUT! Tjena! |
| 11:30 | bubbla |  | TUUT! Tjena! |
| 11:33 | klar | värld:TUUT! Tjena! | TUUT! Tjena! |
| 11:48 | väntar | värld:Mjau. | Mjau. |
| 11:56 | sak | värld:Mjau. | Mjau. |
| 11:56 | bubbla |  | Mjau. |
| 11:57 | händelse | printStart | sak=nyckelring |
| 11:57 | händelse | printStart | sak=nyckelring |
| 11:58 | händelse | printStart | sak=nyckelring |
| 11:58 | klar | värld:Mjau. | Mjau. |
| 11:59 | händelse | printStart | sak=nyckelring |
| 11:59 | händelse | printStart | sak=nyckelring |
| 12:00 | händelse | printStart | sak=nyckelring |
| 12:01 | händelse | printStart | sak=nyckelring |
| 12:01 | händelse | printStart | sak=nyckelring |
| 12:02 | händelse | printStart | sak=nyckelring |
| 12:03 | händelse | printStart | sak=nyckelring |
| 12:04 | händelse | printStart | sak=nyckelring |
| 12:04 | händelse | printStart | sak=nyckelring |
| 12:05 | händelse | printStart | sak=nyckelring |
| 12:06 | händelse | printStart | sak=nyckelring |
| 12:06 | händelse | printStart | sak=nyckelring |
| 12:07 | händelse | printStart | sak=nyckelring |
| 12:07 | skratt | du | Kajsa i skrivaren |
| 12:08 | händelse | printStart | sak=nyckelring |
| 12:08 | händelse | printStart | sak=nyckelring |
| 12:09 | händelse | printStart | sak=nyckelring |
| 12:10 | händelse | printStart | sak=nyckelring |
| 12:11 | händelse | printStart | sak=nyckelring |
| 12:11 | händelse | printStart | sak=nyckelring |
| 12:12 | händelse | printStart | sak=nyckelring |
| 12:13 | händelse | printStart | sak=nyckelring |
| 12:13 | händelse | printStart | sak=nyckelring |
| 12:14 | händelse | printStart | sak=nyckelring |
| 12:15 | händelse | printStart | sak=nyckelring |
| 12:15 | händelse | printStart | sak=nyckelring |
| 12:15 | toast | bra | Startar nästa i kön: nyckelring |
| 12:16 | händelse | printStart | sak=nyckelring |
| 12:17 | händelse | printStart | sak=nyckelring |
| 12:22 | händelse | printStart | sak=n3_stol |
| 12:28 | toast | guld | ✅ |
| 12:28 | händelse | printKlar | sak=n3_stol n=9 |
| 12:29 | händelse | tagitUrPrint | sak=n3_stol n=1 |
| 12:36 | väntar | ali | Min fru frågar om dig. Jag sa: printar. |
| 12:36 | sak | ali | Min fru frågar om dig. Jag sa: printar. |
| 12:36 | röst | ali | Min fru frågar om dig. Jag sa: printar. · SMÅPRAT |
| 12:37 | bubbla |  | Min fru frågar om dig. Jag sa: printar. |
| 12:38 | aliSalt | ali | 16000 |
| 12:39 | klar | ali | Min fru frågar om dig. Jag sa: printar. |
| 12:43 | skratt | du | Alis dyr-pling |
| 12:43 | händelse | kopt | sak=jacuzzi |
| 12:51 | poolTom | du | 4 repliker använda |
| 12:55 | väntar | värld:Mjau. | Mjau. |
| 12:59 | väntar | info:guld | Marken sjönk. Ett äldre lager kom fram. |
| 12:59 | paket |  | sms |
| 12:59 | väntar | rolf | ROLFS ROCKERS. Nittonhundraåttiosju. Vi va STORA i Hudiksvall. En spelning. MVH ROLF |
| 12:59 | sak | info:guld | Marken sjönk. Ett äldre lager kom fram. |
| 12:59 | kvitto-visas | info:guld | Marken sjönk. Ett äldre lager kom fram. |
| 12:59 | toast | guld | Marken sjönk. Ett äldre lager kom fram. |
| 13:01 | händelse | printStart | sak=nyckelring |
| 13:01 | klar | info:guld | Marken sjönk. Ett äldre lager kom fram. |
| 13:01 | händelse | printStart | sak=nyckelring |
| 13:02 | händelse | printStart | sak=nyckelring |
| 13:03 | händelse | printStart | sak=nyckelring |
| 13:03 | händelse | printStart | sak=nyckelring |
| 13:04 | händelse | printStart | sak=nyckelring |
| 13:05 | händelse | printStart | sak=nyckelring |
| 13:06 | händelse | printStart | sak=nyckelring |
| 13:06 | händelse | printStart | sak=nyckelring |
| 13:07 | händelse | printStart | sak=nyckelring |
| 13:11 | sak | värld:Mjau. | Mjau. |
| 13:11 | bubbla |  | Mjau. |
| 13:13 | klar | värld:Mjau. | Mjau. |
| 13:25 | väntar | värld:TUUT! Tjena! | TUUT! Tjena! |
| 13:25 | sak | värld:TUUT! Tjena! | TUUT! Tjena! |
| 13:25 | bubbla |  | TUUT! Tjena! |
| 13:28 | klar | värld:TUUT! Tjena! | TUUT! Tjena! |
| 13:33 | väntar | värld:Mjau. | Mjau. |
| 13:45 | sak | värld:Mjau. | Mjau. |
| 13:45 | bubbla |  | Mjau. |
| 13:45 | händelse | printStart | sak=nyckelring |
| 13:46 | händelse | printStart | sak=nyckelring |
| 13:46 | händelse | printStart | sak=nyckelring |
| 13:47 | klar | värld:Mjau. | Mjau. |
| 13:47 | händelse | printStart | sak=nyckelring |
| 13:48 | händelse | printStart | sak=nyckelring |
| 13:48 | händelse | printStart | sak=nyckelring |
| 13:49 | händelse | printStart | sak=nyckelring |
| 13:50 | händelse | printStart | sak=nyckelring |
| 13:51 | händelse | printStart | sak=nyckelring |
| 13:51 | händelse | printStart | sak=nyckelring |
| 13:52 | händelse | printStart | sak=nyckelring |
| 13:53 | händelse | printStart | sak=nyckelring |
| 13:53 | händelse | printStart | sak=nyckelring |
| 13:54 | händelse | printStart | sak=nyckelring |
| 13:55 | händelse | printStart | sak=nyckelring |
| 13:55 | händelse | printStart | sak=nyckelring |
| 13:56 | händelse | printStart | sak=nyckelring |
| 13:57 | händelse | printStart | sak=nyckelring |
| 13:58 | händelse | printStart | sak=nyckelring |
| 13:58 | händelse | printStart | sak=nyckelring |
| 13:59 | händelse | printStart | sak=nyckelring |
| 14:00 | händelse | printStart | sak=nyckelring |
| 14:00 | händelse | printStart | sak=nyckelring |
| 14:01 | händelse | printStart | sak=nyckelring |
| 14:01 | skratt | du | Kajsa i skrivaren |
| 14:02 | händelse | printStart | sak=nyckelring |
| 14:02 | händelse | printStart | sak=nyckelring |
| 14:03 | händelse | printStart | sak=nyckelring |
| 14:04 | händelse | printStart | sak=nyckelring |
| 14:05 | händelse | printStart | sak=nyckelring |
| 14:05 | händelse | printStart | sak=nyckelring |
| 14:06 | händelse | printStart | sak=nyckelring |
| 14:07 | händelse | printStart | sak=jacuzzi |
| 14:07 | toast | bra | Startar nästa i kön: jacuzzi |
| 14:09 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 14:17 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 14:17 | väntar | notis:Skrivare L: Tornet är tomt – mal mer så  | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 14:17 | sak | notis:Skrivare L: Tornet är tomt – mal mer så  | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 14:17 | notis | fel | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 14:18 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 14:19 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 14:20 | klar | notis:Skrivare L: Tornet är tomt – mal mer så  | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 14:20 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 14:21 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 14:22 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 14:23 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 14:51 | poolTom | du | 4 repliker använda |
| 14:58 | skratt | du | falsk tuta |
| 15:20 | väntar | värld:TUUT! Hej grannen! | TUUT! Hej grannen! |
| 15:20 | sak | värld:TUUT! Hej grannen! | TUUT! Hej grannen! |
| 15:20 | bubbla |  | TUUT! Hej grannen! |
| 15:23 | klar | värld:TUUT! Hej grannen! | TUUT! Hej grannen! |
| 15:27 | väntar | värld:Mjau. | Mjau. |
| 15:38 | sak | värld:Mjau. | Mjau. |
| 15:38 | bubbla |  | Mjau. |
| 15:39 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 15:39 | struken | notis | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 15:40 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 15:40 | klar | värld:Mjau. | Mjau. |
| 15:41 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 15:42 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 15:43 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 15:44 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 15:45 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 15:46 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 15:47 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 15:48 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 15:49 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 15:51 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 15:52 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 15:53 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 15:54 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 15:55 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 15:55 | struken | notis | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 16:05 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 16:05 | struken | notis | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 16:06 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 16:08 | toast | guld | ✅ |
| 16:08 | händelse | printKlar | sak=jacuzzi n=1 |
| 16:15 | händelse | tagitUrPrint | sak=jacuzzi n=1 |
| 16:22 | händelse | placerat | sak=jacuzzi |
| 16:22 | paket |  | sms → sms → sms → sms |
| 16:22 | väntar | mamma | Mamma här. Du skickade en bild på en jacuzzi? |
| 16:22 | väntar | mamma | …och tapeter. Och en gamingbod med lampor i alla färger. |
| 16:22 | väntar | mamma | Okej. Jag erkänner. Det är finare än hemma. |
| 16:22 | väntar | mamma | Kan jag komma och bada på söndag? Pappa tar med korv. |
| 16:22 | händelse | malKlart | id=f15-printa-stall-ut del=Dag 15 – Fristaden nasta=f15-varldens-basta-fristad |
| 16:22 | väntar | du | Världens bästa fristad. |
| 16:22 | målruta |  | Världens bästa fristad · trivsel 291/300 |
| 16:22 | MÅL |  | Världens bästa fristad · trivsel 291/300 |
| 16:22 | sak | du | Världens bästa fristad. |
| 16:22 | pil |  | Världens bästa fristad · trivsel 291/300 |
| 16:22 | röst | du | Världens bästa fristad. · MÅL |
| 16:22 | nick |  | nick:106 |
| 16:24 | klar | du | Världens bästa fristad. |
| 16:26 | kvittens-bock |  | ✓ Printa och ställ ut en jacuzzi |
| 16:30 | händelse | kopt | sak=fagelbad |
| 16:34 | sak | mamma | Mamma här. Du skickade en bild på en jacuzzi? |
| 16:34 | sms | mamma | Mamma här. Du skickade en bild på en jacuzzi? |
| 16:34 | sms-bubbla | mamma | Mamma här. Du skickade en bild på en jacuzzi? |
| 16:34 | röst | mamma | Mamma här. Du skickade en bild på en jacuzzi? · STORY |
| 16:38 | klar | mamma | Mamma här. Du skickade en bild på en jacuzzi? |
| 16:38 | händelse | printStart | sak=fagelbad |
| 16:43 | toast | guld | ✅ |
| 16:43 | händelse | printKlar | sak=fagelbad n=1 |
| 16:44 | händelse | tagitUrPrint | sak=fagelbad n=1 |
| 16:49 | händelse | placerat | sak=fagelbad |
| 16:51 | poolTom | du | 4 repliker använda |
| 16:54 | skratt | du | Alis dyr-pling |
| 16:54 | händelse | kopt | sak=hogtalare |
| 17:01 | väntar | info:guld | Göran har flyttat in. Han sitter på skylten nu. |
| 17:01 | sak | info:guld | Göran har flyttat in. Han sitter på skylten nu. |
| 17:01 | kvitto-visas | info:guld | Göran har flyttat in. Han sitter på skylten nu. |
| 17:01 | toast | guld | Göran har flyttat in. Han sitter på skylten nu. |
| 17:03 | klar | info:guld | Göran har flyttat in. Han sitter på skylten nu. |
| 17:08 | skratt | du | däcket rullar iväg |
| 17:15 | skratt | du | falsk tuta |
| 17:22 | väntar | värld:Mjau. | Mjau. |
| 17:34 | sak | värld:Mjau. | Mjau. |
| 17:34 | bubbla |  | Mjau. |
| 17:36 | klar | värld:Mjau. | Mjau. |
| 17:42 | händelse | printStart | sak=hogtalare |
| 17:46 | toast | guld | ✅ |
| 17:46 | händelse | printKlar | sak=hogtalare n=1 |
| 17:47 | händelse | tagitUrPrint | sak=hogtalare n=1 |
| 17:54 | händelse | placerat | sak=hogtalare |
| 17:54 | händelse | malKlart | id=f15-varldens-basta-fristad del=Dag 15 – Fristaden nasta=sov15 |
| 17:54 | paket |  | lapp |
| 17:54 | lapp | 📔 Dagbok | Dag 15 är slut. På pappret finns jag inte. |
| 17:54 | meddelande | du | Dag 15 är slut. På pappret finns jag inte. |
| 17:54 | dagbokkort | du | Dag 15 är slut. På pappret finns jag inte. |
| 17:54 | målruta |  | Klart för idag – sov när du vill |
| 17:54 | MÅL |  | Klart för idag – sov när du vill |
| 17:54 | röst | du | Dag 15 är slut. På pappret finns jag inte. · STORY |
| 18:00 | händelse | brevLast | id=kvall15 |
| 18:01 | väntar | notis:🌇 Klockan är 21. Ali slår igen luckan.  | 🌇 Klockan är 21. Ali slår igen luckan. Dagens jobb är klart – gå in i skjulet och sov i sängen. |
| 18:01 | sak | du | (nytt mål i rutan) |
| 18:01 | pil |  | Klart för idag – sov när du vill |
| 18:02 | klar | du | (nytt mål i rutan) |
| 18:06 | sak | notis:🌇 Klockan är 21. Ali slår igen luckan.  | 🌇 Klockan är 21. Ali slår igen luckan. Dagens jobb är klart – gå in i skjulet och sov i sängen. |
| 18:06 | notis | guld | 🌇 Klockan är 21. Ali slår igen luckan. Dagens jobb är klart – gå in i skjulet och sov i sängen. |
| 18:08 | klar | notis:🌇 Klockan är 21. Ali slår igen luckan.  | 🌇 Klockan är 21. Ali slår igen luckan. Dagens jobb är klart – gå in i skjulet och sov i sängen. |
| 18:09 | paket |  | sms |
| 18:09 | väntar | ali | Ali här. Hämtade lådan klockan sex. 344 saker, 8 499 kr på ditt konto. Grossistpris. Jag har också en hyra. |

<details><summary>Botens handlingar dag 15</summary>

- 0:00 — dag 15 börjar — (5922 kr)
- 0:15 popup: "FORTSÄTT" (5922 kr)
- 0:31 gå till Rolfs postlåda (29 m) (5922 kr)
- 0:39 panel: "En lapp från Rolf
Lite olaglig" (5922 kr)
- 0:46 gå till Ali (31 m) (5922 kr)
- 0:46 öppnar Alis butik – köpa receptet projektor + duk (5922 kr)
- 0:49 köper projektor för 950 kr (4972 kr)
- 0:55 gå till skrivaren (23 m) (4972 kr)
- 0:56 printar Projektor + duk (4972 kr)
- 1:14 gå till kvarnen (29 m) (4972 kr)
- 1:21 plockar 4 skräp på tippen (bär max 16) (4972 kr)
- 1:24 gå till kvarnen (13 m) (4972 kr)
- 1:26 gå till skrivaren (7 m) (4972 kr)
- 1:27 tar ut 1 st ur skrivaren (4972 kr)
- 1:31 gå till platsen för projektor + duk (23 m) (4972 kr)
- 1:33 ställer ut projektor + duk (4972 kr)
- 1:36 gå till Ali (11 m) (4972 kr)
- 1:36 öppnar Alis butik – köpa receptet rgb-ljuspinne (4972 kr)
- 1:38 köper ledpinne för 1000 kr (3972 kr)
- 1:44 gå till skrivaren (23 m) (3972 kr)
- 1:45 printar RGB-ljuspinne (3972 kr)
- 1:49 tar ut 1 st ur skrivaren (3972 kr)
- 1:53 gå till platsen för rgb-ljuspinne (17 m) (3972 kr)
- 1:54 ställer ut rgb-ljuspinne (3972 kr)
- 2:11 gå till skrivaren (17 m) (3972 kr)
- 2:13 printar Pall (3972 kr)
- 2:27 plockar 5 skräp på tippen (bär max 16) (3972 kr)
- 2:31 gå till kvarnen (15 m) (3972 kr)
- 3:00 gå till skrivaren (7 m) (3972 kr)
- 3:02 printar Pall (3972 kr)
- 3:16 gå till kvarnen (30 m) (3972 kr)
- 3:22 plockar 2 skräp på tippen (bär max 16) (3972 kr)
- 3:26 gå till kvarnen (17 m) (3972 kr)
- 3:52 plockar 5 skräp på tippen (bär max 16) (3972 kr)
- 3:55 gå till kvarnen (14 m) (3972 kr)
- 4:11 gå till skrivaren (7 m) (3972 kr)
- 4:12 printar Pall (3972 kr)
- 4:25 plockar 3 skräp på tippen (bär max 16) (3972 kr)
- 4:28 gå till kvarnen (14 m) (3972 kr)
- 4:33 gå till skrivaren (7 m) (3972 kr)
- 4:34 printar Pall (3972 kr)
- 4:52 plockar 12 skräp på tippen (bär max 16) (3972 kr)
- 4:55 gå till kvarnen (15 m) (3972 kr)
- 5:05 gå till skrivaren (7 m) (3972 kr)
- 5:07 printar Pall (3972 kr)
- 5:20 plockar 5 skräp på tippen (bär max 16) (3972 kr)
- 5:23 gå till kvarnen (15 m) (3972 kr)
- 5:26 gå till skrivaren (7 m) (3972 kr)
- 5:28 printar Pall (3972 kr)
- 5:44 plockar 9 skräp på tippen (bär max 16) (3972 kr)
- 5:47 gå till kvarnen (16 m) (3972 kr)
- 6:02 gå till skrivaren (7 m) (3972 kr)
- 6:04 printar Pall (3972 kr)
- 6:15 plockar 2 skräp på tippen (bär max 16) (3972 kr)
- 6:19 gå till kvarnen (17 m) (3972 kr)
- 6:42 plockar 5 skräp på tippen (bär max 16) (3972 kr)
- 6:46 gå till kvarnen (16 m) (3972 kr)
- 6:52 gå till skrivaren (7 m) (3972 kr)
- 6:54 printar Pall (3972 kr)
- 7:00 printar Nyckelring (3972 kr)
- 7:33 plockar 7 skräp på tippen (bär max 16) (3972 kr)
- 7:37 gå till kvarnen (17 m) (3972 kr)
- 7:58 gå till skrivaren (7 m) (3972 kr)
- 7:59 printar Nyckelring (3972 kr)
- 8:21 plockar 6 skräp på tippen (bär max 16) (3972 kr)
- 8:24 gå till kvarnen (16 m) (3972 kr)
- 8:42 gå till skrivaren (7 m) (3972 kr)
- 8:43 printar Nyckelring (3972 kr)
- 9:02 plockar 4 skräp på tippen (bär max 16) (3972 kr)
- 9:05 gå till kvarnen (17 m) (3972 kr)
- 9:23 gå till skrivaren (7 m) (3972 kr)
- 9:25 printar Nyckelring (3972 kr)
- 9:44 plockar 9 skräp på tippen (bär max 16) (3972 kr)
- 9:47 gå till kvarnen (17 m) (3972 kr)
- 10:07 gå till skrivaren (7 m) (3972 kr)
- 10:09 printar Nyckelring (3972 kr)
- 10:22 plockar 4 skräp på tippen (bär max 16) (3972 kr)
- 10:26 gå till kvarnen (18 m) (3972 kr)
- 10:45 gå till skrivaren (7 m) (3972 kr)
- 10:47 printar Nyckelring (3972 kr)
- 10:59 plockar 5 skräp på tippen (bär max 16) (3972 kr)
- 11:03 gå till kvarnen (18 m) (3972 kr)
- 11:18 gå till skrivaren (7 m) (3972 kr)
- 11:20 printar Nyckelring (3972 kr)
- 11:22 inget skräp kvar att mala – väntar på sopbilen [skräp 13: lätta 0, osynliga 0, utan interaktion 0, tippen 13, ej lyftbara 0, sorter ] (3972 kr)
- 11:53 plockar 4 skräp på tippen (bär max 16) (3972 kr)
- 11:56 gå till kvarnen (11 m) (3972 kr)
- 12:13 gå till skrivaren (7 m) (3972 kr)
- 12:15 printar Nyckelring (3972 kr)
- 12:18 webbshop: 0 paket i postlådan (3972 kr)
- 12:18 tjänar pengar till jacuzzi: 3972/5700 kr → printar kolfiberstol (16000 kr) (3972 kr)
- 12:20 gå till skrivaren (10 m) (3972 kr)
- 12:22 printar Kolfiberstol (3972 kr)
- 12:30 tar ut 1 st ur skrivaren (3972 kr)
- 12:37 gå till Ali (33 m) (3972 kr)
- 12:37 öppnar Alis butik – sälja (3972 kr)
- 12:39 säljer hos Ali: +16000 kr (19972 kr)
- 12:41 öppnar Alis butik – köpa receptet jacuzzi (19972 kr)
- 12:44 köper jacuzzi för 5700 kr (14272 kr)
- 12:58 plockar 1 skräp på tippen (bär max 16) (14272 kr)
- 13:00 gå till kvarnen (10 m) (14272 kr)
- 13:06 inget skräp kvar att mala – väntar på sopbilen (14272 kr)
- 13:41 plockar 8 skräp på tippen (bär max 16) (14272 kr)
- 13:44 gå till kvarnen (14 m) (14272 kr)
- 14:05 gå till skrivaren (7 m) (14272 kr)
- 14:07 printar Jacuzzi (14272 kr)
- 14:13 plockar 1 skräp på tippen (bär max 16) (14272 kr)
- 14:16 gå till kvarnen (11 m) (14272 kr)
- 14:23 inget skräp kvar att mala – väntar på sopbilen (14272 kr)
- 14:43 inget skräp kvar att mala – väntar på sopbilen (14272 kr)
- 15:03 inget skräp kvar att mala – väntar på sopbilen (14272 kr)
- 15:34 plockar 7 skräp på tippen (bär max 16) (14272 kr)
- 15:38 gå till kvarnen (17 m) (14272 kr)
- 15:59 plockar 1 skräp på tippen (bär max 16) (14272 kr)
- 16:02 gå till kvarnen (14 m) (14272 kr)
- 16:15 gå till skrivaren (7 m) (14272 kr)
- 16:15 tar ut 1 st ur skrivaren (14272 kr)
- 16:21 gå till platsen för jacuzzi (21 m) (14272 kr)
- 16:22 ställer ut jacuzzi (14272 kr)
- 16:28 gå till Ali (9 m) (14272 kr)
- 16:28 öppnar Alis butik – köpa receptet fågelbad (14272 kr)
- 16:31 köper fagelbad för 60 kr (14212 kr)
- 16:37 gå till skrivaren (23 m) (14212 kr)
- 16:38 printar Fågelbad (14212 kr)
- 16:44 tar ut 1 st ur skrivaren (14212 kr)
- 16:48 gå till platsen för fågelbad (19 m) (14212 kr)
- 16:49 ställer ut fågelbad (14212 kr)
- 16:52 gå till Ali (10 m) (14212 kr)
- 16:52 öppnar Alis butik – köpa receptet högtalare (14212 kr)
- 16:54 köper hogtalare för 1450 kr (12762 kr)
- 16:55 inget skräp kvar att mala – väntar på sopbilen [skräp 13: lätta 0, osynliga 0, utan interaktion 0, tippen 13, ej lyftbara 0, sorter ] (12762 kr)
- 17:31 plockar 5 skräp på tippen (bär max 16) (12762 kr)
- 17:33 gå till kvarnen (13 m) (12762 kr)
- 17:40 gå till skrivaren (7 m) (12762 kr)
- 17:42 printar Högtalare (12762 kr)
- 17:48 tar ut 1 st ur skrivaren (12762 kr)
- 17:52 gå till platsen för högtalare (23 m) (12762 kr)
- 17:54 ställer ut högtalare (12762 kr)
- 18:00 popup: "FORTSÄTT" (12762 kr)
- 18:06 gå till sängen (11 m) (12762 kr)

</details>

## Dag 16

| Tid | Källa | Vem | Text |
|---|---|---|---|
| 18:09 | vara | ali | n2_hjalm |
| 18:09 | händelse | malKlart | id=sov15 del=Dag 15 – Fristaden nasta=m16-kop-tomten-bor |
| 18:09 | paket |  | sms |
| 18:09 | väntar | mamma | Pappa såg bilden. Han sa "aha, vad lugnt då". Det betyder att han är jättestolt. |
| 18:09 | paket |  | sms |
| 18:09 | väntar | rolf | Hörde att du har JACUZZI. Ja tar med grillen. Och Kajsa. Hon e en katt. Hon badar inte. /R |
| 18:09 | väntar | info:guld | 🏆 KAPITEL 3 KLART! Fabriken sköter sig själv. |
| 18:09 | paket |  | sms |
| 18:09 | väntar | rolf | Ja hitta ett flipperspel på mitt hemliga ställe. De e ditt. Sen: Bengt-Åke vill sälja tomten du bor på. Tavlan vid vägen. /R |
| 18:09 | MÅL |  | Köp tomten du bor på |
| 0:01 | struken | info:guld | 🏆 KAPITEL 3 KLART! Fabriken sköter sig själv. |
| 0:01 | väntar | info:guld | Göran lämnade tillbaka pall och resten. Och en blank skruv. |
| 0:01 | väntar | ali | Ali här. Din mås stod på min disk i morse. Han köpte inget. |
| 0:01 | händelse | dagenBorjar | dag=16 |
| 0:01 | meddelande | du | På pappret finns jag inte. Därför: en egen tomt och ett riktigt hus. |
| 0:01 | dagbokkort | du | KAPITEL 4 · Dag 16. 6 dagar till jul · På pappret finns jag inte. Därför: en egen tomt och ett riktigt hus. |
| 0:01 | röst | du | KAPITEL 4 · Dag 16. 6 dagar till jul. På pappret finns jag inte. Därför: en egen tomt och ett riktigt hus. · STORY |
| 0:07 | händelse | morgonkortStangt | dag=16 |
| 0:07 | struken | kedja | d16 |
| 0:07 | väntar | du | Kommunen säljer tomten vid tippen. Ingen annan ville ha den. |
| 0:10 | paket |  | tanke |
| 0:10 | tanke | du | Grinden. Det är Helen, hör jag på stegen. |
| 0:10 | väntar | du | Grinden. Det är Helen, hör jag på stegen. |
| 0:10 | väntar | rolf | Helen ä tillbaka. Hon va hä före mej. Före alla. Var snäll mot henne. Hon biter int. Inte längre. /R |
| 0:11 | målruta |  | Köp tomten du bor på |
| 0:13 | sak | du | Kommunen säljer tomten vid tippen. Ingen annan ville ha den. |
| 0:13 | pil |  | Köp tomten du bor på |
| 0:13 | notis | tanke | 💭 Kommunen säljer tomten vid tippen. Ingen annan ville ha den. |
| 0:13 | röst | du | Kommunen säljer tomten vid tippen. Ingen annan ville ha den. · MÅL |
| 0:15 | paket |  | brev |
| 0:15 | väntar | gunbritt | Hej. Gun-Britt här, byggnadsnämnden. Tyvärr har ni en skylt utan bygglov. Tyvärr har ni också ett hus utan bygglov. Tyvärr måste ni fylla i blankett 14B. Tyvärr finns den bara på papper. Tyvärr är jag ledsen. /Gun-Britt |
| 0:18 | klar | du | Kommunen säljer tomten vid tippen. Ingen annan ville ha den. |
| 0:18 | struken | info:guld | Göran lämnade tillbaka pall och resten. Och en blank skruv. |
| 0:18 | struken | ali | Ali här. Hämtade lådan klockan sex. 344 saker, 8 499 kr på ditt konto. Grossistpris. Jag har också en hyra. |
| 0:26 | sak | du | Grinden. Det är Helen, hör jag på stegen. |
| 0:26 | notis | tanke | 💭 Grinden. Det är Helen, hör jag på stegen. |
| 0:26 | röst | du | Grinden. Det är Helen, hör jag på stegen. · STORY |
| 0:29 | klar | du | Grinden. Det är Helen, hör jag på stegen. |
| 0:37 | väntar | info:guld | Skylten vid vägen är uppgraderad. |
| 0:37 | paket |  | sms |
| 0:37 | väntar | bror | Pappa körde förbi för att kolla. Två gånger. Han säger att han skulle åt det hållet ändå. Det ska han aldrig. |
| 0:37 | sak | info:guld | Skylten vid vägen är uppgraderad. |
| 0:37 | kvitto-visas | info:guld | Skylten vid vägen är uppgraderad. |
| 0:37 | toast | guld | Skylten vid vägen är uppgraderad. |
| 0:38 | väntar | info:guld | 🏡 Du äger marken du bor på! Inte längre en hobo dweller. |
| 0:38 | paket |  | sms |
| 0:38 | väntar | rolf | Bengt-Åke sa ja! Han ville först ha 22 500 men ja sa att du städat hela hans skräpiga mark gratis. Då blev de 12.5. Grattis, markägare. /R |
| 0:38 | paket |  | sms |
| 0:38 | väntar | mamma | Pappa säger att du har köpt mark? Hur? Vems? Har du skrivit på något? Skicka papperen till mig så läser jag. |
| 0:38 | händelse | malKlart | id=m16-kop-tomten-bor del=Dag 16 – Egen mark nasta=m16-lagg-flagan-bengt |
| 0:38 | väntar | du | Lägg flagan i Bengt-Åkes brevlåda. |
| 0:38 | MÅL |  | Lägg flagan i Bengt-Åkes brevlåda |
| 0:39 | klar | info:guld | Skylten vid vägen är uppgraderad. |
| 0:39 | sak | info:guld | 🏡 Du äger marken du bor på! Inte längre en hobo dweller. |
| 0:39 | kvitto-visas | info:guld | 🏡 Du äger marken du bor på! Inte längre en hobo dweller. |
| 0:39 | toast | guld | 🏡 Du äger marken du bor på! Inte längre en hobo dweller. |
| 0:40 | poolTom | du | 4 repliker använda |
| 0:41 | väntar | notis:📔 Prestation: HMPF · +3 respekt | 📔 Prestation: HMPF · +3 respekt |
| 0:41 | väntar | notis:📔 Prestation: Mysigt värre · +3 respekt | 📔 Prestation: Mysigt värre · +3 respekt |
| 0:41 | klar | info:guld | 🏡 Du äger marken du bor på! Inte längre en hobo dweller. |
| 0:41 | målruta |  | Lägg flagan i Bengt-Åkes brevlåda |
| 0:42 | kvittens-bock |  | ✓ Köp tomten du bor på |
| 0:43 | sak | du | Lägg flagan i Bengt-Åkes brevlåda. |
| 0:43 | pil |  | Lägg flagan i Bengt-Åkes brevlåda |
| 0:43 | röst | du | Lägg flagan i Bengt-Åkes brevlåda. · MÅL |
| 0:43 | nick |  | nick:109 |
| 0:46 | klar | du | Lägg flagan i Bengt-Åkes brevlåda. |
| 0:54 | sak | mamma | …och tapeter. Och en gamingbod med lampor i alla färger. |
| 0:54 | sms | mamma | …och tapeter. Och en gamingbod med lampor i alla färger. |
| 0:54 | sms-bubbla | mamma | …och tapeter. Och en gamingbod med lampor i alla färger. |
| 0:54 | röst | mamma | …och tapeter. Och en gamingbod med lampor i alla färger. · STORY |
| 0:57 | väntar | foto | Min mark |
| 0:57 | paket |  | tanke |
| 0:57 | tanke | du | Nu kan ingen säga att jag inte hör hemma här. |
| 0:57 | väntar | du | Nu kan ingen säga att jag inte hör hemma här. |
| 0:58 | klar | mamma | …och tapeter. Och en gamingbod med lampor i alla färger. |
| 0:59 | paket |  | tanke → tanke |
| 0:59 | tanke | du | Vad har Göran nu? |
| 0:59 | väntar | du | Vad har Göran nu? |
| 0:59 | tanke | du | Guld? Där nere? |
| 0:59 | väntar | du | Guld? Där nere? |
| 0:59 | skratt | du | Göran hittar guld |
| 1:00 | sak | du | Vad har Göran nu? |
| 1:00 | notis | tanke | 💭 Vad har Göran nu? |
| 1:00 | röst | du | Vad har Göran nu? · STORY |
| 1:03 | klar | du | Vad har Göran nu? |
| 1:05 | sak | du | Guld? Där nere? |
| 1:05 | notis | tanke | 💭 Guld? Där nere? |
| 1:05 | röst | du | Guld? Där nere? · STORY |
| 1:07 | klar | du | Guld? Där nere? |
| 1:16 | paket |  | brev |
| 1:16 | väntar | bengt | PAPPA LETADE HELA LIVET. HMPF. GÅ IN DÅ. FÖRSTA KLUMPEN ÄR MIN. DEN SKA TILL PAPPAS GRAV. |
| 1:16 | paket |  | ge → brev |
| 1:16 | väntar |  | (läget ändras) |
| 1:16 | väntar | rolf | Svackan. Ja å Birgitta badade i floden där. Ja har vinkelslipen, men skivan e slut. Printa en kapskiva åt mej, i kolfiber. /R |
| 1:16 | händelse | malKlart | id=m16-lagg-flagan-bengt del=Dag 16 – Egen mark nasta=m16-ge-rolf-kapskiva |
| 1:16 | väntar | du | Ge Rolf en kapskiva i kolfiber. |
| 1:16 | MÅL |  | Ge Rolf en kapskiva i kolfiber |
| 1:16 | målruta |  | Ge Rolf en kapskiva i kolfiber |
| 1:16 | sak | du | Ge Rolf en kapskiva i kolfiber. |
| 1:16 | pil |  | Ge Rolf en kapskiva i kolfiber |
| 1:16 | röst | du | Ge Rolf en kapskiva i kolfiber. · MÅL |
| 1:17 | nick |  | nick:110 |
| 1:19 | klar | du | Ge Rolf en kapskiva i kolfiber. |
| 1:20 | kvittens-bock |  | ✓ Lägg flagan i Bengt-Åkes brevlåda |
| 1:21 | sak | bengt | PAPPA LETADE HELA LIVET. HMPF. GÅ IN DÅ. FÖRSTA KLUMPEN ÄR MIN. DEN SKA TILL PAPPAS GRAV. |
| 1:21 | lapp | Lapp från Bengt-Åke | PAPPA LETADE HELA LIVET. HMPF. GÅ IN DÅ. FÖRSTA KLUMPEN ÄR MIN. DEN SKA TILL PAPPAS GRAV. |
| 1:21 | röst | bengt | PAPPA LETADE HELA LIVET. HMPF. GÅ IN DÅ. FÖRSTA KLUMPEN ÄR MIN. DEN SKA TILL PAPPAS GRAV. · STORY |
| 1:28 | klar | bengt | PAPPA LETADE HELA LIVET. HMPF. GÅ IN DÅ. FÖRSTA KLUMPEN ÄR MIN. DEN SKA TILL PAPPAS GRAV. |
| 1:30 | sak |  | (läget ändras) |
| 1:31 | klar |  | (läget ändras) |
| 1:35 | sak | rolf | Svackan. Ja å Birgitta badade i floden där. Ja har vinkelslipen, men skivan e slut. Printa en kapskiva åt mej, i kolfiber. /R |
| 1:35 | lapp | Brev från Rolf | Svackan. Ja å Birgitta badade i floden där. Ja har vinkelslipen, men skivan e slut. Printa en kapskiva åt mej, i kolfiber. /R |
| 1:35 | röst | rolf | Svackan. Ja å Birgitta badade i floden där. Ja har vinkelslipen, men skivan e slut. Printa en kapskiva åt mej, i kolfiber. /R · STORY |
| 1:45 | händelse | printStart | sak=kapskiva |
| 1:45 | klar | rolf | Svackan. Ja å Birgitta badade i floden där. Ja har vinkelslipen, men skivan e slut. Printa en kapskiva åt mej, i kolfiber. /R |
| 1:47 | struken | notis:📔 Prestation: HMPF · +3 respekt | 📔 Prestation: HMPF · +3 respekt |
| 1:47 | struken | notis:📔 Prestation: Mysigt värre · +3 respekt | 📔 Prestation: Mysigt värre · +3 respekt |
| 1:47 | toast | guld | ✅ |
| 1:47 | händelse | printKlar | sak=kapskiva n=1 |
| 1:48 | händelse | tagitUrPrint | sak=kapskiva n=1 |
| 1:52 | händelse | malKlart | id=m16-ge-rolf-kapskiva del=Dag 16 – Egen mark nasta=sov16 |
| 1:52 | paket |  | lapp |
| 1:52 | lapp | 📔 Dagbok | Dag 16 är slut. Nu vet Helen att jag bor HÄR. Det ska blåsa hårt i natt. |
| 1:52 | meddelande | du | Dag 16 är slut. Nu vet Helen att jag bor HÄR. Det ska blåsa hårt i natt. |
| 1:52 | dagbokkort | du | Dag 16 är slut. Nu vet Helen att jag bor HÄR. Det ska blåsa hårt i natt. |
| 1:52 | MÅL |  | Klart för idag – sov när du vill |
| 1:52 | röst | du | Dag 16 är slut. Nu vet Helen att jag bor HÄR. Det ska blåsa hårt i natt. · STORY |
| 2:00 | händelse | brevLast | id=kvall16 |
| 2:00 | målruta |  | Klart för idag – sov när du vill |
| 2:00 | väntar | notis:🌇 Klockan är 21. Ali slår igen luckan.  | 🌇 Klockan är 21. Ali slår igen luckan. Dagens jobb är klart – gå in i skjulet och sov i sängen. |
| 2:02 | sak | du | (nytt mål i rutan) |
| 2:02 | pil |  | Klart för idag – sov när du vill |
| 2:02 | klar | du | (nytt mål i rutan) |
| 2:05 | sak | gunbritt | Hej. Gun-Britt här, byggnadsnämnden. Tyvärr har ni en skylt utan bygglov. Tyvärr har ni också ett hus utan bygglov. Tyvärr måste ni fylla i blankett 14B. Tyvärr finns den bara på papper. Tyvärr är jag ledsen. /Gun-Britt |
| 2:05 | lapp | Brev från byggnadsnämnden | Hej. Gun-Britt här, byggnadsnämnden. Tyvärr har ni en skylt utan bygglov. Tyvärr har ni också ett hus utan bygglov. Tyvärr måste ni fylla i blankett 14B. Tyvärr finns den bara på papper. Tyvärr är jag ledsen. /Gun-Britt |
| 2:05 | röst | gunbritt | Hej. Gun-Britt här, byggnadsnämnden. Tyvärr har ni en skylt utan bygglov. Tyvärr har ni också ett hus utan bygglov. Tyvärr måste ni fylla i blankett 14B. Tyvärr finns den bara på papper. Tyvärr är jag ledsen. /Gun-Britt · STORY |

<details><summary>Botens handlingar dag 16</summary>

- 0:00 — dag 16 börjar — (21261 kr)
- 0:15 popup: "FORTSÄTT" (21261 kr)
- 0:26 gå till Rolfs postlåda (30 m) (21261 kr)
- 0:32 panel: "Rolfs postlåda
Det här låg i l" (27261 kr)
- 0:38 gå till tavlan vid vägen (24 m) (27261 kr)
- 0:38 köper tomten du bor på (12500 kr) (14761 kr)
- 1:16 gå till Bengt-Åkes brevlåda (45 m) (14761 kr)
- 1:43 gå till skrivaren (66 m) (14761 kr)
- 1:45 printar Kapskiva i kolfiber (14761 kr)
- 1:49 tar ut 1 st ur skrivaren (14761 kr)
- 1:52 gå till Rolfs postlåda (kapskivan) (16 m) (14761 kr)
- 2:00 popup: "FORTSÄTT" (14761 kr)
- 2:10 gå till sängen (28 m) (14761 kr)

</details>

## Dag 17

| Tid | Källa | Vem | Text |
|---|---|---|---|
| 2:12 | vara | ali | n2_vas |
| 2:12 | händelse | malKlart | id=sov16 del=Dag 16 – Egen mark nasta=m17-kop-angen-oster |
| 2:13 | MÅL |  | Köp ängen i öster – tavlan vid vägen |
| 0:01 | händelse | dagenBorjar | dag=17 |
| 0:01 | meddelande | du | Dag 17. 5 dagar till jul. Utan pengar blir det inget hus före jul. |
| 0:01 | dagbokkort | du | Ängen · Dag 17. 5 dagar till jul. Utan pengar blir det inget hus före jul. |
| 0:01 | röst | du | Ängen. Dag 17. 5 dagar till jul. Utan pengar blir det inget hus före jul. · STORY |
| 0:03 | paket |  | sms |
| 0:03 | väntar | rolf | Kajsa satt på lappen hela natten. Den e lite varm. Lådan. /R |
| 0:15 | händelse | morgonkortStangt | dag=17 |
| 0:15 | struken | kedja | d17 |
| 0:15 | paket |  | tanke → sms |
| 0:15 | tanke | du | Fem dagar kvar. Och jag är tillbaka där jag började. |
| 0:15 | väntar | du | Fem dagar kvar. Och jag är tillbaka där jag började. |
| 0:15 | väntar | rolf | Såg att plåten låg på marken. Ja å Ali kommer o hjälper dej me ett riktigt hus. /R |
| 0:15 | klar | gunbritt | Hej. Gun-Britt här, byggnadsnämnden. Tyvärr har ni en skylt utan bygglov. Tyvärr har ni också ett hus utan bygglov. Tyvärr måste ni fylla i blankett 14B. Tyvärr finns den bara på papper. Tyvärr är jag ledsen. /Gun-Britt |
| 0:15 | väntar | du | Köp ängen i öster – tavlan vid vägen. |
| 0:19 | målruta |  | Köp ängen i öster – tavlan vid vägen |
| 0:20 | sak | du | Köp ängen i öster – tavlan vid vägen. |
| 0:20 | pil |  | Köp ängen i öster – tavlan vid vägen |
| 0:20 | röst | du | Köp ängen i öster – tavlan vid vägen. · MÅL |
| 0:24 | klar | du | Köp ängen i öster – tavlan vid vägen. |
| 0:26 | struken | notis:🌇 Klockan är 21. Ali slår igen luckan.  | 🌇 Klockan är 21. Ali slår igen luckan. Dagens jobb är klart – gå in i skjulet och sov i sängen. |
| 0:26 | struken | ali | Ali här. Din mås stod på min disk i morse. Han köpte inget. |
| 0:32 | sak | foto | Min mark |
| 0:32 | foto | du | Min mark |
| 0:34 | klar | foto | Min mark |
| 0:40 | poolTom | du | 4 repliker använda |
| 0:42 | sak | du | Nu kan ingen säga att jag inte hör hemma här. |
| 0:42 | notis | tanke | 💭 Nu kan ingen säga att jag inte hör hemma här. |
| 0:42 | röst | du | Nu kan ingen säga att jag inte hör hemma här. · STORY |
| 0:44 | händelse | printStart | sak=nyckelring |
| 0:45 | händelse | printStart | sak=nyckelring |
| 0:45 | händelse | printStart | sak=nyckelring |
| 0:46 | klar | du | Nu kan ingen säga att jag inte hör hemma här. |
| 0:46 | händelse | printStart | sak=nyckelring |
| 0:47 | händelse | printStart | sak=nyckelring |
| 0:48 | händelse | printStart | sak=nyckelring |
| 0:48 | händelse | printStart | sak=nyckelring |
| 0:49 | händelse | printStart | sak=nyckelring |
| 0:50 | händelse | printStart | sak=nyckelring |
| 0:50 | paket |  | replik → replik |
| 0:50 | väntar | rolf | Hon älska å bada hä. Gå du. Ja står hä en stund. |
| 0:50 | väntar | rolf | Birgittas. Hon vaska för skoj. Hitta aldrig nåt. |
| 0:50 | sak | rolf | Hon älska å bada hä. Gå du. Ja står hä en stund. |
| 0:50 | notis |  | Rolf: ”Hon älska å bada hä. Gå du. Ja står hä en stund.” |
| 0:50 | röst | rolf | Hon älska å bada hä. Gå du. Ja står hä en stund. · STORY |
| 0:50 | händelse | printStart | sak=nyckelring |
| 0:50 | skratt | du | Kajsa i skrivaren |
| 0:51 | händelse | printStart | sak=nyckelring |
| 0:52 | händelse | printStart | sak=nyckelring |
| 0:52 | skratt | du | falsk tuta |
| 0:52 | händelse | printStart | sak=nyckelring |
| 0:53 | händelse | printStart | sak=nyckelring |
| 0:54 | klar | rolf | Hon älska å bada hä. Gå du. Ja står hä en stund. |
| 0:54 | händelse | printStart | sak=nyckelring |
| 0:55 | händelse | printStart | sak=nyckelring |
| 0:55 | händelse | printStart | sak=nyckelring |
| 0:56 | sak | rolf | Birgittas. Hon vaska för skoj. Hitta aldrig nåt. |
| 0:56 | notis |  | Rolf: ”Birgittas. Hon vaska för skoj. Hitta aldrig nåt.” |
| 0:56 | röst | rolf | Birgittas. Hon vaska för skoj. Hitta aldrig nåt. · STORY |
| 0:56 | händelse | printStart | sak=nyckelring |
| 0:56 | skratt | du | kvarnen spottar |
| 0:57 | händelse | printStart | sak=nyckelring |
| 0:57 | händelse | printStart | sak=nyckelring |
| 0:58 | händelse | printStart | sak=nyckelring |
| 0:59 | händelse | printStart | sak=nyckelring |
| 0:59 | händelse | printStart | sak=nyckelring |
| 1:00 | klar | rolf | Birgittas. Hon vaska för skoj. Hitta aldrig nåt. |
| 1:00 | händelse | printStart | sak=nyckelring |
| 1:01 | händelse | printStart | sak=nyckelring |
| 1:02 | händelse | printStart | sak=nyckelring |
| 1:02 | händelse | printStart | sak=nyckelring |
| 1:03 | händelse | printStart | sak=nyckelring |
| 1:04 | händelse | printStart | sak=nyckelring |
| 1:04 | händelse | printStart | sak=nyckelring |
| 1:05 | händelse | printStart | sak=nyckelring |
| 1:06 | händelse | printStart | sak=nyckelring |
| 1:06 | händelse | printStart | sak=nyckelring |
| 1:07 | händelse | printStart | sak=nyckelring |
| 1:08 | händelse | printStart | sak=nyckelring |
| 1:08 | sak | mamma | Okej. Jag erkänner. Det är finare än hemma. |
| 1:08 | sms | mamma | Okej. Jag erkänner. Det är finare än hemma. |
| 1:08 | sms-bubbla | mamma | Okej. Jag erkänner. Det är finare än hemma. |
| 1:08 | röst | mamma | Okej. Jag erkänner. Det är finare än hemma. · STORY |
| 1:09 | händelse | printStart | sak=nyckelring |
| 1:09 | händelse | printStart | sak=nyckelring |
| 1:10 | händelse | printStart | sak=nyckelring |
| 1:10 | skratt | du | Kajsa i skrivaren |
| 1:11 | händelse | printStart | sak=nyckelring |
| 1:11 | händelse | printStart | sak=nyckelring |
| 1:12 | klar | mamma | Okej. Jag erkänner. Det är finare än hemma. |
| 1:12 | händelse | printStart | sak=nyckelring |
| 1:13 | händelse | printStart | sak=nyckelring |
| 1:13 | händelse | printStart | sak=nyckelring |
| 1:14 | väntar | värld:TUUT! Grann skylt! | TUUT! Grann skylt! |
| 1:14 | händelse | printStart | sak=nyckelring |
| 1:15 | händelse | printStart | sak=nyckelring |
| 1:16 | händelse | printStart | sak=nyckelring |
| 1:16 | händelse | printStart | sak=nyckelring |
| 1:17 | händelse | printStart | sak=nyckelring |
| 1:18 | händelse | printStart | sak=nyckelring |
| 1:18 | händelse | printStart | sak=nyckelring |
| 1:19 | händelse | printStart | sak=nyckelring |
| 1:19 | väntar | helen | Det där var mitt arkiv. |
| 1:20 | händelse | printStart | sak=nyckelring |
| 1:20 | händelse | printStart | sak=nyckelring |
| 1:21 | händelse | printStart | sak=nyckelring |
| 1:22 | händelse | printStart | sak=nyckelring |
| 1:23 | händelse | printStart | sak=nyckelring |
| 1:23 | händelse | printStart | sak=nyckelring |
| 1:24 | händelse | printStart | sak=nyckelring |
| 1:25 | händelse | printStart | sak=nyckelring |
| 1:25 | sak | du | Fem dagar kvar. Och jag är tillbaka där jag började. |
| 1:25 | notis | tanke | 💭 Fem dagar kvar. Och jag är tillbaka där jag började. |
| 1:25 | röst | du | Fem dagar kvar. Och jag är tillbaka där jag började. · STORY |
| 1:25 | händelse | printStart | sak=nyckelring |
| 1:26 | händelse | printStart | sak=nyckelring |
| 1:26 | skratt | du | Kajsa i skrivaren |
| 1:27 | händelse | printStart | sak=nyckelring |
| 1:27 | händelse | printStart | sak=nyckelring |
| 1:28 | händelse | printStart | sak=nyckelring |
| 1:29 | händelse | printStart | sak=nyckelring |
| 1:29 | klar | du | Fem dagar kvar. Och jag är tillbaka där jag började. |
| 1:30 | händelse | printStart | sak=nyckelring |
| 1:30 | händelse | printStart | sak=nyckelring |
| 1:31 | händelse | printStart | sak=nyckelring |
| 1:32 | händelse | printStart | sak=nyckelring |
| 1:34 | struken | värld:TUUT! Grann skylt! | TUUT! Grann skylt! |
| 1:36 | upplåst | skrivare_kolf | trim_kolf1 |
| 1:36 | brott | UPPLÅST | trim_kolf1 (skrivare_kolf 143 av 75) |
| 1:36 | händelse | upplast | id=trim_kolf1 flask=skrivare_kolf |
| 1:36 | paket |  | sms |
| 1:36 | väntar | ali | Ali här. Trim till kolfiberskrivaren. Kolfiber är segt. Skrivaren behöver hjälp. |
| 1:36 | väntar | värld:Mjau. | Mjau. |
| 1:44 | sak | helen | Det där var mitt arkiv. |
| 1:44 | röst | helen | Det där var mitt arkiv. · REAKTION |
| 1:45 | händelse | printStart | sak=nyckelring |
| 1:45 | bubbla |  | Det där var mitt arkiv. |
| 1:45 | händelse | printStart | sak=nyckelring |
| 1:46 | händelse | printStart | sak=nyckelring |
| 1:47 | klar | helen | Det där var mitt arkiv. |
| 1:47 | händelse | printStart | sak=nyckelring |
| 1:47 | händelse | printStart | sak=nyckelring |
| 1:48 | händelse | printStart | sak=nyckelring |
| 1:49 | händelse | printStart | sak=nyckelring |
| 1:50 | händelse | printStart | sak=nyckelring |
| 1:50 | händelse | printStart | sak=nyckelring |
| 1:50 | skratt | du | Kajsa i skrivaren |
| 1:51 | händelse | printStart | sak=nyckelring |
| 1:52 | händelse | printStart | sak=nyckelring |
| 1:52 | händelse | printStart | sak=nyckelring |
| 1:53 | händelse | printStart | sak=nyckelring |
| 1:54 | händelse | printStart | sak=nyckelring |
| 1:54 | händelse | printStart | sak=nyckelring |
| 1:55 | händelse | printStart | sak=nyckelring |
| 1:56 | händelse | printStart | sak=nyckelring |
| 1:57 | struken | värld:Mjau. | Mjau. |
| 1:57 | händelse | printStart | sak=nyckelring |
| 1:57 | sak | bror | Pappa körde förbi för att kolla. Två gånger. Han säger att han skulle åt det hållet ändå. Det ska han aldrig. |
| 1:57 | sms | bror | Pappa körde förbi för att kolla. Två gånger. Han säger att han skulle åt det hållet ändå. Det ska han aldrig. |
| 1:57 | sms-bubbla | bror | Pappa körde förbi för att kolla. Två gånger. Han säger att han skulle åt det hållet ändå. Det ska han aldrig. |
| 1:57 | röst | bror | Pappa körde förbi för att kolla. Två gånger. Han säger att han skulle åt det hållet ändå. Det ska han aldrig. · STORY |
| 1:57 | händelse | printStart | sak=nyckelring |
| 1:58 | händelse | printStart | sak=nyckelring |
| 1:59 | händelse | printStart | sak=nyckelring |
| 1:59 | händelse | printStart | sak=nyckelring |
| 1:59 | skratt | du | Kajsa i skrivaren |
| 2:00 | händelse | printStart | sak=nyckelring |
| 2:01 | händelse | printStart | sak=nyckelring |
| 2:01 | händelse | printStart | sak=nyckelring |
| 2:02 | händelse | printStart | sak=nyckelring |
| 2:03 | händelse | printStart | sak=nyckelring |
| 2:04 | händelse | printStart | sak=nyckelring |
| 2:04 | toast | bra | Startar nästa i kön: nyckelring |
| 2:04 | väntar | rolf | 31 år på bilen och ja har aldrig backat in i nåt. Utom en gång. En brevlåda. Den hade det kommit. /R |
| 2:06 | klar | bror | Pappa körde förbi för att kolla. Två gånger. Han säger att han skulle åt det hållet ändå. Det ska han aldrig. |
| 2:08 | väntar | helen | Här låg en soffa i elva år. Nu ligger här en RABATT. |
| 2:10 | väntar | kjelle | Inget nytt längs vägen i dag. Bara måsar. Hälsningar till Gunnar. |
| 2:10 | radio | kjelle | Inget nytt längs vägen i dag. Bara måsar. Hälsningar till Gunnar. |
| 2:10 | skratt | du | Radio-Kjelle |
| 2:10 | sak | kjelle | Inget nytt längs vägen i dag. Bara måsar. Hälsningar till Gunnar. |
| 2:10 | notis |  | 📻 Radio Tippen: Inget nytt längs vägen i dag. Bara måsar. Hälsningar till Gunnar. |
| 2:10 | röst | kjelle | Inget nytt längs vägen i dag. Bara måsar. Hälsningar till Gunnar. · REAKTION |
| 2:13 | ljud | kajsa | Mjau |
| 2:15 | klar | kjelle | Inget nytt längs vägen i dag. Bara måsar. Hälsningar till Gunnar. |
| 2:18 | händelse | printStart | sak=nyckelring |
| 2:18 | händelse | printStart | sak=nyckelring |
| 2:19 | händelse | printStart | sak=nyckelring |
| 2:20 | händelse | printStart | sak=nyckelring |
| 2:20 | händelse | printStart | sak=nyckelring |
| 2:21 | händelse | printStart | sak=nyckelring |
| 2:22 | händelse | printStart | sak=nyckelring |
| 2:22 | händelse | printStart | sak=nyckelring |
| 2:23 | händelse | printStart | sak=nyckelring |
| 2:24 | händelse | printStart | sak=nyckelring |
| 2:24 | sak | helen | Här låg en soffa i elva år. Nu ligger här en RABATT. |
| 2:24 | notis |  | Helen ropar: ”Här låg en soffa i elva år. Nu ligger här en RABATT.” |
| 2:24 | röst | helen | Här låg en soffa i elva år. Nu ligger här en RABATT. · REAKTION |
| 2:25 | händelse | printStart | sak=nyckelring |
| 2:25 | händelse | printStart | sak=nyckelring |
| 2:25 | skratt | du | Kajsa i skrivaren |
| 2:26 | händelse | printStart | sak=nyckelring |
| 2:27 | händelse | printStart | sak=nyckelring |
| 2:27 | händelse | printStart | sak=nyckelring |
| 2:28 | händelse | printStart | sak=nyckelring |
| 2:29 | klar | helen | Här låg en soffa i elva år. Nu ligger här en RABATT. |
| 2:29 | händelse | printStart | sak=nyckelring |
| 2:29 | händelse | printStart | sak=nyckelring |
| 2:30 | händelse | printStart | sak=nyckelring |
| 2:31 | händelse | printStart | sak=nyckelring |
| 2:32 | händelse | printStart | sak=nyckelring |
| 2:32 | händelse | printStart | sak=nyckelring |
| 2:33 | händelse | printStart | sak=nyckelring |
| 2:34 | händelse | printStart | sak=nyckelring |
| 2:34 | händelse | printStart | sak=nyckelring |
| 2:35 | händelse | printStart | sak=nyckelring |
| 2:36 | händelse | printStart | sak=nyckelring |
| 2:36 | händelse | printStart | sak=nyckelring |
| 2:37 | händelse | printStart | sak=nyckelring |
| 2:38 | händelse | printStart | sak=nyckelring |
| 2:39 | händelse | printStart | sak=nyckelring |
| 2:39 | händelse | printStart | sak=nyckelring |
| 2:39 | toast | bra | Startar nästa i kön: nyckelring |
| 2:40 | händelse | printStart | sak=nyckelring |
| 2:40 | poolTom | du | 4 repliker använda |
| 2:41 | händelse | printStart | sak=nyckelring |
| 2:41 | händelse | printStart | sak=nyckelring |
| 2:42 | sak | ali | Ali här. Trim till kolfiberskrivaren. Kolfiber är segt. Skrivaren behöver hjälp. |
| 2:42 | sms | ali | Ali här. Trim till kolfiberskrivaren. Kolfiber är segt. Skrivaren behöver hjälp. |
| 2:42 | sms-bubbla | ali | Ali här. Trim till kolfiberskrivaren. Kolfiber är segt. Skrivaren behöver hjälp. |
| 2:42 | röst | ali | Ali här. Trim till kolfiberskrivaren. Kolfiber är segt. Skrivaren behöver hjälp. · STORY |
| 2:42 | händelse | printStart | sak=nyckelring |
| 2:43 | händelse | printStart | sak=nyckelring |
| 2:43 | händelse | printStart | sak=nyckelring |
| 2:44 | händelse | printStart | sak=nyckelring |
| 2:45 | händelse | printStart | sak=nyckelring |
| 2:46 | händelse | printStart | sak=nyckelring |
| 2:46 | händelse | printStart | sak=nyckelring |
| 2:47 | händelse | printStart | sak=nyckelring |
| 2:48 | händelse | printStart | sak=nyckelring |
| 2:48 | klar | ali | Ali här. Trim till kolfiberskrivaren. Kolfiber är segt. Skrivaren behöver hjälp. |
| 3:08 | händelse | printStart | sak=nyckelring |
| 3:09 | händelse | printStart | sak=nyckelring |
| 3:09 | skratt | du | falsk tuta |
| 3:09 | väntar | värld:TUUT! Hej grannen! | TUUT! Hej grannen! |
| 3:09 | sak | värld:TUUT! Hej grannen! | TUUT! Hej grannen! |
| 3:09 | bubbla |  | TUUT! Hej grannen! |
| 3:09 | händelse | printStart | sak=nyckelring |
| 3:10 | händelse | printStart | sak=nyckelring |
| 3:11 | händelse | printStart | sak=nyckelring |
| 3:12 | händelse | printStart | sak=nyckelring |
| 3:12 | klar | värld:TUUT! Hej grannen! | TUUT! Hej grannen! |
| 3:12 | händelse | printStart | sak=nyckelring |
| 3:13 | händelse | printStart | sak=nyckelring |
| 3:14 | händelse | printStart | sak=nyckelring |
| 3:14 | händelse | printStart | sak=nyckelring |
| 3:15 | händelse | printStart | sak=nyckelring |
| 3:16 | händelse | printStart | sak=nyckelring |
| 3:16 | händelse | printStart | sak=nyckelring |
| 3:17 | händelse | printStart | sak=nyckelring |
| 3:18 | händelse | printStart | sak=nyckelring |
| 3:19 | händelse | printStart | sak=nyckelring |
| 3:19 | händelse | printStart | sak=nyckelring |
| 3:20 | händelse | printStart | sak=nyckelring |
| 3:21 | händelse | printStart | sak=nyckelring |
| 3:21 | händelse | printStart | sak=nyckelring |
| 3:22 | händelse | printStart | sak=nyckelring |
| 3:23 | händelse | printStart | sak=nyckelring |
| 3:23 | händelse | printStart | sak=nyckelring |
| 3:24 | händelse | printStart | sak=nyckelring |
| 3:25 | händelse | printStart | sak=nyckelring |
| 3:26 | händelse | printStart | sak=nyckelring |
| 3:26 | händelse | printStart | sak=nyckelring |
| 3:27 | sak | mamma | Kan jag komma och bada på söndag? Pappa tar med korv. |
| 3:27 | sms | mamma | Kan jag komma och bada på söndag? Pappa tar med korv. |
| 3:27 | sms-bubbla | mamma | Kan jag komma och bada på söndag? Pappa tar med korv. |
| 3:27 | röst | mamma | Kan jag komma och bada på söndag? Pappa tar med korv. · STORY |
| 3:27 | händelse | printStart | sak=nyckelring |
| 3:28 | händelse | printStart | sak=nyckelring |
| 3:28 | händelse | printStart | sak=nyckelring |
| 3:29 | händelse | printStart | sak=nyckelring |
| 3:30 | händelse | printStart | sak=nyckelring |
| 3:30 | skratt | du | Kajsa i skrivaren |
| 3:30 | händelse | printStart | sak=nyckelring |
| 3:30 | toast | bra | Startar nästa i kön: nyckelring |
| 3:31 | händelse | printStart | sak=nyckelring |
| 3:31 | klar | mamma | Kan jag komma och bada på söndag? Pappa tar med korv. |
| 3:32 | händelse | printStart | sak=nyckelring |
| 3:33 | händelse | printStart | sak=nyckelring |
| 3:33 | händelse | printStart | sak=nyckelring |
| 3:34 | händelse | printStart | sak=nyckelring |
| 3:35 | händelse | printStart | sak=nyckelring |
| 3:35 | händelse | printStart | sak=nyckelring |
| 3:36 | händelse | printStart | sak=nyckelring |
| 3:37 | händelse | printStart | sak=nyckelring |
| 3:37 | händelse | printStart | sak=nyckelring |
| 3:38 | händelse | printStart | sak=nyckelring |
| 3:39 | händelse | printStart | sak=nyckelring |
| 3:51 | väntar | värld:Mjau. | Mjau. |
| 3:59 | sak | värld:Mjau. | Mjau. |
| 3:59 | bubbla |  | Mjau. |
| 3:59 | händelse | printStart | sak=nyckelring |
| 4:00 | händelse | printStart | sak=nyckelring |
| 4:01 | händelse | printStart | sak=nyckelring |
| 4:01 | klar | värld:Mjau. | Mjau. |
| 4:01 | händelse | printStart | sak=nyckelring |
| 4:02 | händelse | printStart | sak=nyckelring |
| 4:03 | händelse | printStart | sak=nyckelring |
| 4:04 | händelse | printStart | sak=nyckelring |
| 4:04 | händelse | printStart | sak=nyckelring |
| 4:05 | händelse | printStart | sak=nyckelring |
| 4:06 | händelse | printStart | sak=nyckelring |
| 4:06 | händelse | printStart | sak=nyckelring |
| 4:07 | händelse | printStart | sak=nyckelring |
| 4:08 | händelse | printStart | sak=nyckelring |
| 4:08 | händelse | printStart | sak=nyckelring |
| 4:09 | händelse | printStart | sak=nyckelring |
| 4:10 | händelse | printStart | sak=nyckelring |
| 4:11 | händelse | printStart | sak=nyckelring |
| 4:11 | händelse | printStart | sak=nyckelring |
| 4:12 | händelse | printStart | sak=nyckelring |
| 4:13 | händelse | printStart | sak=nyckelring |
| 4:13 | händelse | printStart | sak=nyckelring |
| 4:13 | skratt | du | Kajsa i skrivaren |
| 4:14 | händelse | printStart | sak=nyckelring |
| 4:15 | händelse | printStart | sak=nyckelring |
| 4:15 | händelse | printStart | sak=nyckelring |
| 4:16 | händelse | printStart | sak=nyckelring |
| 4:17 | händelse | printStart | sak=nyckelring |
| 4:18 | händelse | printStart | sak=nyckelring |
| 4:18 | händelse | printStart | sak=nyckelring |
| 4:19 | händelse | printStart | sak=nyckelring |
| 4:20 | händelse | printStart | sak=nyckelring |
| 4:20 | händelse | printStart | sak=nyckelring |
| 4:21 | händelse | printStart | sak=nyckelring |
| 4:22 | händelse | printStart | sak=nyckelring |
| 4:22 | händelse | printStart | sak=nyckelring |
| 4:23 | händelse | printStart | sak=nyckelring |
| 4:23 | toast | bra | Startar nästa i kön: nyckelring |
| 4:24 | händelse | printStart | sak=nyckelring |
| 4:25 | händelse | printStart | sak=nyckelring |
| 4:25 | händelse | printStart | sak=nyckelring |
| 4:40 | poolTom | du | 4 repliker använda |
| 4:41 | händelse | printStart | sak=nyckelring |
| 4:42 | händelse | printStart | sak=nyckelring |
| 4:42 | händelse | printStart | sak=nyckelring |
| 4:43 | händelse | printStart | sak=nyckelring |
| 4:44 | händelse | printStart | sak=nyckelring |
| 4:44 | händelse | printStart | sak=nyckelring |
| 4:45 | händelse | printStart | sak=nyckelring |
| 4:46 | händelse | printStart | sak=nyckelring |
| 4:46 | händelse | printStart | sak=nyckelring |
| 4:47 | händelse | printStart | sak=nyckelring |
| 4:48 | händelse | printStart | sak=nyckelring |
| 4:49 | händelse | printStart | sak=nyckelring |
| 4:49 | händelse | printStart | sak=nyckelring |
| 4:50 | händelse | printStart | sak=nyckelring |
| 4:51 | händelse | printStart | sak=nyckelring |
| 4:51 | händelse | printStart | sak=nyckelring |
| 4:52 | händelse | printStart | sak=nyckelring |
| 4:52 | toast | bra | Startar nästa i kön: nyckelring |
| 4:52 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 5:04 | väntar | värld:TUUT! Hej grannen! | TUUT! Hej grannen! |
| 5:04 | sak | värld:TUUT! Hej grannen! | TUUT! Hej grannen! |
| 5:04 | bubbla |  | TUUT! Hej grannen! |
| 5:07 | klar | värld:TUUT! Hej grannen! | TUUT! Hej grannen! |
| 5:29 | händelse | printStart | sak=nyckelring |
| 5:30 | händelse | printStart | sak=nyckelring |
| 5:30 | händelse | printStart | sak=nyckelring |
| 5:31 | sak | mamma | Pappa såg bilden. Han sa "aha, vad lugnt då". Det betyder att han är jättestolt. |
| 5:31 | sms | mamma | Pappa såg bilden. Han sa "aha, vad lugnt då". Det betyder att han är jättestolt. |
| 5:31 | sms-bubbla | mamma | Pappa såg bilden. Han sa "aha, vad lugnt då". Det betyder att han är jättestolt. |
| 5:31 | röst | mamma | Pappa såg bilden. Han sa "aha, vad lugnt då". Det betyder att han är jättestolt. · STORY |
| 5:31 | händelse | printStart | sak=nyckelring |
| 5:32 | händelse | printStart | sak=nyckelring |
| 5:32 | händelse | printStart | sak=nyckelring |
| 5:33 | händelse | printStart | sak=nyckelring |
| 5:34 | händelse | printStart | sak=nyckelring |
| 5:34 | händelse | printStart | sak=nyckelring |
| 5:35 | händelse | printStart | sak=nyckelring |
| 5:36 | händelse | printStart | sak=nyckelring |
| 5:37 | händelse | printStart | sak=nyckelring |
| 5:37 | händelse | printStart | sak=nyckelring |
| 5:38 | klar | mamma | Pappa såg bilden. Han sa "aha, vad lugnt då". Det betyder att han är jättestolt. |
| 5:38 | händelse | printStart | sak=nyckelring |
| 5:39 | händelse | printStart | sak=nyckelring |
| 5:39 | händelse | printStart | sak=nyckelring |
| 5:40 | händelse | printStart | sak=nyckelring |
| 5:41 | händelse | printStart | sak=nyckelring |
| 5:41 | händelse | printStart | sak=nyckelring |
| 5:42 | händelse | printStart | sak=nyckelring |
| 5:43 | händelse | printStart | sak=nyckelring |
| 5:44 | händelse | printStart | sak=nyckelring |
| 5:44 | händelse | printStart | sak=nyckelring |
| 5:45 | händelse | printStart | sak=nyckelring |
| 5:46 | händelse | printStart | sak=nyckelring |
| 5:46 | händelse | printStart | sak=nyckelring |
| 5:47 | händelse | printStart | sak=nyckelring |
| 6:02 | händelse | printStart | sak=nyckelring |
| 6:02 | händelse | printStart | sak=nyckelring |
| 6:03 | händelse | printStart | sak=nyckelring |
| 6:04 | händelse | printStart | sak=nyckelring |
| 6:04 | händelse | printStart | sak=nyckelring |
| 6:05 | händelse | printStart | sak=nyckelring |
| 6:06 | händelse | printStart | sak=nyckelring |
| 6:06 | händelse | printStart | sak=nyckelring |
| 6:07 | händelse | printStart | sak=nyckelring |
| 6:08 | händelse | printStart | sak=nyckelring |
| 6:09 | händelse | printStart | sak=nyckelring |
| 6:09 | händelse | printStart | sak=nyckelring |
| 6:10 | händelse | printStart | sak=nyckelring |
| 6:11 | händelse | printStart | sak=nyckelring |
| 6:11 | händelse | printStart | sak=nyckelring |
| 6:12 | händelse | printStart | sak=nyckelring |
| 6:13 | händelse | printStart | sak=nyckelring |
| 6:13 | händelse | printStart | sak=nyckelring |
| 6:13 | toast | bra | Startar nästa i kön: nyckelring |
| 6:14 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 6:37 | skratt | du | falsk tuta |
| 6:40 | poolTom | du | 4 repliker använda |
| 6:59 | väntar | värld:TUUT! Tjena! | TUUT! Tjena! |
| 7:00 | väntar | värld:Mjau. | Mjau. |
| 7:13 | sak | värld:TUUT! Tjena! | TUUT! Tjena! |
| 7:13 | bubbla |  | TUUT! Tjena! |
| 7:14 | händelse | printStart | sak=nyckelring |
| 7:15 | händelse | printStart | sak=nyckelring |
| 7:15 | händelse | printStart | sak=nyckelring |
| 7:16 | klar | värld:TUUT! Tjena! | TUUT! Tjena! |
| 7:16 | händelse | printStart | sak=nyckelring |
| 7:17 | händelse | printStart | sak=nyckelring |
| 7:17 | händelse | printStart | sak=nyckelring |
| 7:18 | händelse | printStart | sak=nyckelring |
| 7:19 | händelse | printStart | sak=nyckelring |
| 7:19 | händelse | printStart | sak=nyckelring |
| 7:20 | struken | värld:Mjau. | Mjau. |
| 7:20 | händelse | printStart | sak=nyckelring |
| 7:21 | händelse | printStart | sak=nyckelring |
| 7:22 | händelse | printStart | sak=nyckelring |
| 7:22 | händelse | printStart | sak=nyckelring |
| 7:23 | händelse | printStart | sak=nyckelring |
| 7:24 | händelse | printStart | sak=nyckelring |
| 7:24 | händelse | printStart | sak=nyckelring |
| 7:25 | händelse | printStart | sak=nyckelring |
| 7:26 | händelse | printStart | sak=nyckelring |
| 7:26 | händelse | printStart | sak=nyckelring |
| 7:27 | händelse | printStart | sak=nyckelring |
| 7:28 | händelse | printStart | sak=nyckelring |
| 7:29 | händelse | printStart | sak=nyckelring |
| 7:29 | händelse | printStart | sak=nyckelring |
| 7:30 | händelse | printStart | sak=nyckelring |
| 7:31 | händelse | printStart | sak=nyckelring |
| 7:31 | sak | mamma | Pappa säger att du har köpt mark? Hur? Vems? Har du skrivit på något? Skicka papperen till mig så läser jag. |
| 7:31 | sms | mamma | Pappa säger att du har köpt mark? Hur? Vems? Har du skrivit på något? Skicka papperen till mig så läser jag. |
| 7:31 | sms-bubbla | mamma | Pappa säger att du har köpt mark? Hur? Vems? Har du skrivit på något? Skicka papperen till mig så läser jag. |
| 7:31 | röst | mamma | Pappa säger att du har köpt mark? Hur? Vems? Har du skrivit på något? Skicka papperen till mig så läser jag. · STORY |
| 7:31 | händelse | printStart | sak=nyckelring |
| 7:32 | händelse | printStart | sak=nyckelring |
| 7:33 | händelse | printStart | sak=nyckelring |
| 7:33 | händelse | printStart | sak=nyckelring |
| 7:34 | händelse | printStart | sak=nyckelring |
| 7:35 | händelse | printStart | sak=nyckelring |
| 7:36 | händelse | printStart | sak=nyckelring |
| 7:36 | händelse | printStart | sak=nyckelring |
| 7:37 | händelse | printStart | sak=nyckelring |
| 7:38 | händelse | printStart | sak=nyckelring |
| 7:38 | händelse | printStart | sak=nyckelring |
| 7:39 | händelse | printStart | sak=nyckelring |
| 7:40 | händelse | printStart | sak=nyckelring |
| 7:40 | klar | mamma | Pappa säger att du har köpt mark? Hur? Vems? Har du skrivit på något? Skicka papperen till mig så läser jag. |
| 7:40 | händelse | printStart | sak=nyckelring |
| 7:41 | händelse | printStart | sak=nyckelring |
| 7:42 | händelse | printStart | sak=nyckelring |
| 7:46 | väntar | värld:Mjau. | Mjau. |
| 7:55 | sak | värld:Mjau. | Mjau. |
| 7:55 | bubbla |  | Mjau. |
| 7:56 | händelse | printStart | sak=nyckelring |
| 7:57 | händelse | printStart | sak=nyckelring |
| 7:58 | klar | värld:Mjau. | Mjau. |
| 7:58 | händelse | printStart | sak=nyckelring |
| 7:58 | händelse | printStart | sak=nyckelring |
| 7:59 | händelse | printStart | sak=nyckelring |
| 8:00 | händelse | printStart | sak=nyckelring |
| 8:00 | händelse | printStart | sak=nyckelring |
| 8:01 | händelse | printStart | sak=nyckelring |
| 8:02 | händelse | printStart | sak=nyckelring |
| 8:03 | händelse | printStart | sak=nyckelring |
| 8:03 | skratt | du | Kajsa i skrivaren |
| 8:03 | händelse | printStart | sak=nyckelring |
| 8:04 | händelse | printStart | sak=nyckelring |
| 8:05 | händelse | printStart | sak=nyckelring |
| 8:05 | händelse | printStart | sak=nyckelring |
| 8:06 | händelse | printStart | sak=nyckelring |
| 8:07 | händelse | printStart | sak=nyckelring |
| 8:07 | händelse | printStart | sak=nyckelring |
| 8:08 | händelse | printStart | sak=nyckelring |
| 8:09 | händelse | printStart | sak=nyckelring |
| 8:09 | toast | bra | Startar nästa i kön: nyckelring |
| 8:40 | poolTom | du | 4 repliker använda |
| 8:54 | skratt | du | falsk tuta |
| 8:54 | väntar | värld:TUUT! Hej grannen! | TUUT! Hej grannen! |
| 9:02 | väntar | värld:Mjau. | Mjau. |
| 9:04 | sak | värld:TUUT! Hej grannen! | TUUT! Hej grannen! |
| 9:04 | bubbla |  | TUUT! Hej grannen! |
| 9:05 | händelse | printStart | sak=nyckelring |
| 9:05 | händelse | printStart | sak=nyckelring |
| 9:06 | händelse | printStart | sak=nyckelring |
| 9:07 | händelse | printStart | sak=nyckelring |
| 9:07 | klar | värld:TUUT! Hej grannen! | TUUT! Hej grannen! |
| 9:07 | händelse | printStart | sak=nyckelring |
| 9:08 | händelse | printStart | sak=nyckelring |
| 9:09 | händelse | printStart | sak=nyckelring |
| 9:10 | händelse | printStart | sak=nyckelring |
| 9:10 | händelse | printStart | sak=nyckelring |
| 9:11 | händelse | printStart | sak=nyckelring |
| 9:12 | händelse | printStart | sak=nyckelring |
| 9:12 | händelse | printStart | sak=nyckelring |
| 9:13 | händelse | printStart | sak=nyckelring |
| 9:14 | händelse | printStart | sak=nyckelring |
| 9:14 | händelse | printStart | sak=nyckelring |
| 9:14 | skratt | du | Kajsa i skrivaren |
| 9:15 | sak | värld:Mjau. | Mjau. |
| 9:15 | bubbla |  | Mjau. |
| 9:15 | händelse | printStart | sak=nyckelring |
| 9:16 | händelse | printStart | sak=nyckelring |
| 9:17 | händelse | printStart | sak=nyckelring |
| 9:17 | händelse | printStart | sak=nyckelring |
| 9:17 | klar | värld:Mjau. | Mjau. |
| 9:18 | händelse | printStart | sak=nyckelring |
| 9:19 | händelse | printStart | sak=nyckelring |
| 9:19 | händelse | printStart | sak=nyckelring |
| 9:20 | händelse | printStart | sak=nyckelring |
| 9:21 | händelse | printStart | sak=nyckelring |
| 9:21 | händelse | printStart | sak=nyckelring |
| 9:22 | händelse | printStart | sak=nyckelring |
| 9:23 | händelse | printStart | sak=nyckelring |
| 9:24 | händelse | printStart | sak=nyckelring |
| 9:24 | händelse | printStart | sak=nyckelring |
| 9:25 | händelse | printStart | sak=nyckelring |
| 9:31 | händelse | printStart | sak=nyckelring |
| 9:32 | händelse | printStart | sak=nyckelring |
| 9:33 | händelse | printStart | sak=nyckelring |
| 9:34 | händelse | printStart | sak=nyckelring |
| 9:34 | händelse | printStart | sak=nyckelring |
| 9:34 | skratt | du | Kajsa i skrivaren |
| 9:35 | händelse | printStart | sak=nyckelring |
| 9:36 | händelse | printStart | sak=nyckelring |
| 9:36 | händelse | printStart | sak=nyckelring |
| 9:37 | händelse | printStart | sak=nyckelring |
| 9:38 | händelse | printStart | sak=nyckelring |
| 9:38 | toast | guld | ✅ |
| 9:38 | händelse | printKlar | sak=nyckelring n=716 |
| 9:42 | händelse | printStart | sak=n3_stol |
| 9:48 | toast | guld | ✅ |
| 9:48 | händelse | printKlar | sak=n3_stol n=10 |
| 9:49 | nej | du | Ta ut kolfiberstol |
| 9:49 | toast | fickskylt | Fulla fickor |
| 9:49 | fullaFickor | du | n3_stol |
| 9:50 | händelse | tagitUrPrint | sak=n3_stol n=1 |
| 9:56 | väntar | ali | Kom in och titta. Titta är gratis. Nästan. |
| 9:56 | sak | ali | Kom in och titta. Titta är gratis. Nästan. |
| 9:56 | röst | ali | Kom in och titta. Titta är gratis. Nästan. · SMÅPRAT |
| 9:57 | bubbla |  | Kom in och titta. Titta är gratis. Nästan. |
| 9:57 | butiksbubbla | ali | Pension? Glöm det. Jag har en kanal nu. Fyrtiotvå följare. Fyrtiotvå, habibi! |
| 9:58 | röst | ali | Pension? Glöm det. Jag har en kanal nu. Fyrtiotvå följare. Fyrtiotvå, habibi! · STORY |
| 9:59 | aliSalt | ali | 16000 |
| 9:59 | aliSalt | ali | 1330 |
| 9:59 | aliSalt | ali | 1264 |
| 10:00 | aliSalt | ali | 6 |
| 10:02 | klar | ali | Kom in och titta. Titta är gratis. Nästan. |
| 10:09 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 10:13 | väntar | info:guld | 🌲 Ängen i öster är din! Gärdesgården har flyttats – där får du ställa saker nu. |
| 10:13 | paket |  | sms |
| 10:13 | väntar | rolf | Ängen e din. Bengt-Åke frågade vad du ska ha den till. Ja sa solpaneler. Han trodde ja sa "sol-paella". Han va glad ändå. /R |
| 10:13 | sak | info:guld | 🌲 Ängen i öster är din! Gärdesgården har flyttats – där får du ställa saker nu. |
| 10:13 | kvitto-visas | info:guld | 🌲 Ängen i öster är din! Gärdesgården har flyttats – där får du ställa saker nu. |
| 10:13 | toast | guld | 🌲 Ängen i öster är din! Gärdesgården har flyttats – där får du ställa saker nu. |
| 10:13 | händelse | malKlart | id=m17-kop-angen-oster del=Dag 17 – Ängen nasta=m17-vaska-guld-floden |
| 10:13 | väntar | du | Vaska guld i floden. |
| 10:13 | MÅL |  | Vaska guld i floden |
| 10:15 | klar | info:guld | 🌲 Ängen i öster är din! Gärdesgården har flyttats – där får du ställa saker nu. |
| 10:15 | målruta |  | Vaska guld i floden |
| 10:17 | kvittens-bock |  | ✓ Köp ängen i öster – tavlan vid vägen |
| 10:17 | sak | du | Vaska guld i floden. |
| 10:17 | pil |  | Vaska guld i floden |
| 10:17 | röst | du | Vaska guld i floden. · MÅL |
| 10:19 | klar | du | Vaska guld i floden. |
| 10:31 | paket |  | tanke |
| 10:31 | tanke | du | En kapsyl. |
| 10:31 | väntar | du | En kapsyl. |
| 10:31 | sak | du | En kapsyl. |
| 10:31 | notis | tanke | 💭 En kapsyl. |
| 10:31 | röst | du | En kapsyl. · REAKTION |
| 10:31 | händelse | malKlart | id=m17-vaska-guld-floden del=Dag 17 – Ängen nasta=m17-solpark2 |
| 10:31 | MÅL |  | Printa och sälj |
| 10:33 | väntar | info:guld | ✨ Guld! (1.9 s) |
| 10:33 | skratt | du | första guldet |
| 10:33 | klar | du | En kapsyl. |
| 10:33 | sak | info:guld | ✨ Guld! (1.9 s) |
| 10:33 | kvitto-visas | info:guld | ✨ Guld! (1.9 s) |
| 10:33 | toast | guld | ✨ Guld! (1.9 s) |
| 10:35 | målruta |  | Printa och sälj |
| 10:35 | kvittens-bock |  | ✓ Vaska guld i floden |
| 10:35 | struken | info:guld | ✨ Guld! (1.9 s) |
| 10:35 | skratt | du | första guldet |
| 10:35 | klar | info:guld | ✨ Guld! (1.9 s) |
| 10:37 | sak | du | (nytt mål i rutan) |
| 10:37 | pil |  | Printa och sälj |
| 10:38 | klar | du | (nytt mål i rutan) |
| 10:40 | poolTom | du | 4 repliker använda |
| 10:48 | händelse | printStart | sak=n3_stol |
| 10:54 | skratt | du | plastspagetti |
| 10:54 | toast | guld | ✅ |
| 10:54 | händelse | printKlar | sak=n3_stol n=11 |
| 10:55 | nej | du | Ta ut plastspagetti (modern konst) |
| 10:55 | toast | fickskylt | Fulla fickor |
| 10:55 | fullaFickor | du | spagetti |
| 10:56 | händelse | tagitUrPrint | sak=spagetti n=1 |
| 11:05 | skratt | du | Ali köper konst |
| 11:05 | aliSalt | ali | 3 |
| 11:06 | aliSalt | ali | 170 |
| 11:06 | aliSalt | ali | 162 |
| 11:15 | händelse | printStart | sak=n3_stol |
| 11:22 | toast | guld | ✅ |
| 11:22 | händelse | printKlar | sak=n3_stol n=12 |
| 11:23 | händelse | tagitUrPrint | sak=n3_stol n=1 |
| 11:32 | aliSalt | ali | 15200 |
| 11:43 | händelse | printStart | sak=n3_stol |
| 11:49 | toast | guld | ✅ |
| 11:49 | händelse | printKlar | sak=n3_stol n=13 |
| 11:50 | händelse | tagitUrPrint | sak=n3_stol n=1 |
| 11:59 | aliSalt | ali | 14440 |
| 12:10 | händelse | printStart | sak=n3_stol |
| 12:17 | toast | guld | ✅ |
| 12:17 | händelse | printKlar | sak=n3_stol n=14 |
| 12:18 | händelse | tagitUrPrint | sak=n3_stol n=1 |
| 12:22 | skratt | du | falsk tuta |
| 12:27 | aliSalt | ali | 13718 |
| 12:38 | händelse | printStart | sak=n3_stol |
| 12:38 | skratt | du | Kajsa i skrivaren |
| 12:40 | poolTom | du | 4 repliker använda |
| 12:43 | väntar | värld:TUUT! Hej grannen! | TUUT! Hej grannen! |
| 12:44 | sak | värld:TUUT! Hej grannen! | TUUT! Hej grannen! |
| 12:44 | bubbla |  | TUUT! Hej grannen! |
| 12:44 | toast | guld | ✅ |
| 12:44 | händelse | printKlar | sak=n3_stol n=15 |
| 12:45 | händelse | tagitUrPrint | sak=n3_stol n=1 |
| 12:47 | klar | värld:TUUT! Hej grannen! | TUUT! Hej grannen! |
| 12:54 | aliSalt | ali | 13032 |
| 13:05 | händelse | printStart | sak=n3_stol |
| 13:12 | toast | guld | ✅ |
| 13:12 | händelse | printKlar | sak=n3_stol n=16 |
| 13:13 | händelse | tagitUrPrint | sak=n3_stol n=1 |
| 13:22 | aliSalt | ali | 12380 |
| 13:46 | upplåst | strom | solpark2 |
| 13:46 | brott | RESERV | solpark2 (strom 0 av 15) |
| 13:46 | händelse | upplast | id=solpark2 flask=strom |
| 13:46 | paket |  | sms |
| 13:46 | väntar | ali | Ali här. Solcellspark nummer två. Ängen är din nu. Sätt den där. |
| 13:46 | sak | ali | Ali här. Solcellspark nummer två. Ängen är din nu. Sätt den där. |
| 13:46 | sms | ali | Ali här. Solcellspark nummer två. Ängen är din nu. Sätt den där. |
| 13:46 | sms-bubbla | ali | Ali här. Solcellspark nummer två. Ängen är din nu. Sätt den där. |
| 13:46 | röst | ali | Ali här. Solcellspark nummer två. Ängen är din nu. Sätt den där. · STORY |
| 13:51 | klar | ali | Ali här. Solcellspark nummer två. Ängen är din nu. Sätt den där. |
| 14:38 | skratt | du | falsk tuta |
| 14:40 | poolTom | du | 4 repliker använda |
| 16:26 | skratt | du | däcket rullar iväg |
| 16:40 | poolTom | du | 4 repliker använda |
| 17:37 | händelse | printStart | sak=n2_vas |
| 17:40 | toast | guld | ✅ |
| 17:40 | händelse | printKlar | sak=n2_vas n=33 |
| 17:40 | händelse | tagitUrPrint | sak=n2_vas n=1 |
| 17:49 | aliSalt | ali | 1185 |
| 17:53 | skratt | du | Alis dyr-pling |
| 17:53 | toast | guld | 3D-modell köpt – printa solcellspark på skrivaren |
| 17:53 | händelse | kopt | sak=solpark |
| 18:06 | skratt | du | falsk tuta |
| 18:18 | händelse | printStart | sak=byggsats:solpark |
| 18:21 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 18:22 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 18:24 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 18:25 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 18:25 | väntar | notis:Skrivare L: Tornet är tomt – mal mer så  | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 18:27 | toast | bra | Del 1 av 4 klar |
| 18:27 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 18:27 | struken | notis | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 18:28 | väntar | värld:TUUT! Tjena! | TUUT! Tjena! |
| 18:29 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 18:29 | struken | notis | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 18:29 | väntar | värld:Mjau. | Mjau. |
| 18:30 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 18:30 | struken | notis | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 18:32 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 18:32 | struken | notis | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 18:33 | toast | skak | handen skakar: fullt |
| 18:33 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 18:33 | struken | notis | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 18:35 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 18:35 | struken | notis | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 18:36 | sak | notis:Skrivare L: Tornet är tomt – mal mer så  | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 18:36 | notis | fel | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 18:37 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 18:38 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 18:39 | toast | bra | Del 2 av 4 klar |
| 18:39 | klar | notis:Skrivare L: Tornet är tomt – mal mer så  | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 18:39 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 18:40 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 18:40 | poolTom | du | 4 repliker använda |
| 18:41 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 18:42 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 18:44 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 18:45 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 18:46 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 18:47 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 18:48 | struken | värld:TUUT! Tjena! | TUUT! Tjena! |
| 18:49 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 18:49 | struken | värld:Mjau. | Mjau. |
| 18:50 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 18:51 | toast | bra | Del 3 av 4 klar |
| 18:51 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 18:52 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 18:54 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 18:55 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 18:56 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 18:57 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 18:58 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 19:00 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 19:05 | väntar | värld:Mjau. | Mjau. |
| 19:11 | sak | värld:Mjau. | Mjau. |
| 19:11 | bubbla |  | Mjau. |
| 19:13 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 19:13 | struken | notis | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 19:13 | klar | värld:Mjau. | Mjau. |
| 19:15 | händelse | printKlar | sak=byggsats:solpark n=1 |
| 19:15 | toast | guld | ✅ |
| 19:23 | händelse | tagitUrPrint | sak=byggsats:solpark n=1 |
| 19:34 | händelse | placerat | sak=solpark |
| 19:34 | händelse | malKlart | id=m17-solpark2 del=Dag 17 – Ängen nasta=sov17 |
| 19:34 | paket |  | lapp |
| 19:34 | lapp | 📔 Dagbok | Dag 17 är slut. Nu vet kommunen att jag bor HÄR. Fem dagar kvar. Inget tak. |
| 19:34 | meddelande | du | Dag 17 är slut. Nu vet kommunen att jag bor HÄR. Fem dagar kvar. Inget tak. |
| 19:34 | dagbokkort | du | Dag 17 är slut. Nu vet kommunen att jag bor HÄR. Fem dagar kvar. Inget tak. |
| 19:34 | målruta |  | Klart för idag – sov när du vill |
| 19:34 | MÅL |  | Klart för idag – sov när du vill |
| 19:34 | röst | du | Dag 17 är slut. Nu vet kommunen att jag bor HÄR. Fem dagar kvar. Inget tak. · STORY |
| 19:42 | händelse | brevLast | id=kvall17 |
| 19:42 | väntar | notis:🌇 Klockan är 21. Ali slår igen luckan.  | 🌇 Klockan är 21. Ali slår igen luckan. Dagens jobb är klart – gå in i skjulet och sov i sängen. |
| 19:44 | sak | du | (nytt mål i rutan) |
| 19:44 | pil |  | Klart för idag – sov när du vill |
| 19:44 | klar | du | (nytt mål i rutan) |
| 19:47 | sak | notis:🌇 Klockan är 21. Ali slår igen luckan.  | 🌇 Klockan är 21. Ali slår igen luckan. Dagens jobb är klart – gå in i skjulet och sov i sängen. |
| 19:47 | notis | guld | 🌇 Klockan är 21. Ali slår igen luckan. Dagens jobb är klart – gå in i skjulet och sov i sängen. |
| 19:50 | klar | notis:🌇 Klockan är 21. Ali slår igen luckan.  | 🌇 Klockan är 21. Ali slår igen luckan. Dagens jobb är klart – gå in i skjulet och sov i sängen. |
| 19:54 | paket |  | sms |
| 19:54 | väntar | ali | Ali här. Hämtade lådan klockan sex. 385 saker, 4 235 kr på ditt konto. Grossistpris. Jag har också en hyra. |

<details><summary>Botens handlingar dag 17</summary>

- 0:00 — dag 17 börjar — (14761 kr)
- 0:15 popup: "FORTSÄTT" (14761 kr)
- 0:32 gå till Rolfs postlåda (28 m) (14761 kr)
- 0:40 panel: "En lapp från Rolf
Lite olaglig" (14761 kr)
- 0:43 gå till skrivaren (10 m) (14761 kr)
- 0:44 printar Nyckelring (14761 kr)
- 1:24 gå till kvarnen (22 m) (14761 kr)
- 1:41 plockar 7 skräp på tippen (bär max 16) (14761 kr)
- 1:44 gå till kvarnen (12 m) (14761 kr)
- 2:01 gå till skrivaren (7 m) (14761 kr)
- 2:03 printar Nyckelring (14761 kr)
- 2:13 plockar 3 skräp på tippen (bär max 16) (14761 kr)
- 2:16 gå till kvarnen (15 m) (14761 kr)
- 2:37 gå till skrivaren (7 m) (14761 kr)
- 2:39 printar Nyckelring (14761 kr)
- 3:03 plockar 11 skräp på tippen (bär max 16) (14761 kr)
- 3:06 gå till kvarnen (16 m) (14761 kr)
- 3:28 gå till skrivaren (7 m) (14761 kr)
- 3:30 printar Nyckelring (14761 kr)
- 3:55 plockar 9 skräp på tippen (bär max 16) (14761 kr)
- 3:58 gå till kvarnen (15 m) (14761 kr)
- 4:21 gå till skrivaren (7 m) (14761 kr)
- 4:23 printar Nyckelring (14761 kr)
- 4:37 plockar 5 skräp på tippen (bär max 16) (14761 kr)
- 4:40 gå till kvarnen (16 m) (14761 kr)
- 4:50 gå till skrivaren (7 m) (14761 kr)
- 4:51 printar Nyckelring (14761 kr)
- 4:53 inget skräp kvar att mala – väntar på sopbilen [skräp 15: lätta 0, osynliga 0, utan interaktion 0, tippen 15, ej lyftbara 1, sorter ] (14761 kr)
- 5:25 plockar 8 skräp på tippen (bär max 16) (14761 kr)
- 5:28 gå till kvarnen (14 m) (14761 kr)
- 5:57 plockar 4 skräp på tippen (bär max 16) (14761 kr)
- 6:00 gå till kvarnen (16 m) (14761 kr)
- 6:11 gå till skrivaren (7 m) (14761 kr)
- 6:13 printar Nyckelring (14761 kr)
- 6:14 inget skräp kvar att mala – väntar på sopbilen [skräp 15: lätta 0, osynliga 0, utan interaktion 0, tippen 15, ej lyftbara 1, sorter ] (14761 kr)
- 6:34 inget skräp kvar att mala – väntar på sopbilen (14761 kr)
- 7:09 plockar 10 skräp på tippen (bär max 16) (14761 kr)
- 7:12 gå till kvarnen (15 m) (14761 kr)
- 7:51 plockar 3 skräp på tippen (bär max 16) (14761 kr)
- 7:55 gå till kvarnen (19 m) (14761 kr)
- 8:07 gå till skrivaren (7 m) (14761 kr)
- 8:09 printar Nyckelring (14761 kr)
- 8:10 inget skräp kvar att mala – väntar på sopbilen [skräp 15: lätta 0, osynliga 0, utan interaktion 0, tippen 15, ej lyftbara 1, sorter ] (14761 kr)
- 8:30 inget skräp kvar att mala – väntar på sopbilen (14761 kr)
- 9:02 plockar 5 skräp på tippen (bär max 16) (14761 kr)
- 9:04 gå till kvarnen (10 m) (14761 kr)
- 9:27 plockar 3 skräp på tippen (bär max 16) (14761 kr)
- 9:31 gå till kvarnen (17 m) (14761 kr)
- 9:38 inget skräp kvar att mala – väntar på sopbilen (14761 kr)
- 9:38 webbshop: 0 paket i postlådan (14761 kr)
- 9:38 tjänar pengar till ängen i öster: 14761/28500 kr → printar kolfiberstol (16000 kr) (14761 kr)
- 9:40 gå till skrivaren (11 m) (14761 kr)
- 9:42 printar Kolfiberstol (14761 kr)
- 9:50 tar ut 1 st ur skrivaren (14761 kr)
- 9:50 fulla fickor – lägger vaskpanna i kistan (14761 kr)
- 9:57 gå till Ali (34 m) (14761 kr)
- 9:57 öppnar Alis butik – sälja (14761 kr)
- 10:00 säljer hos Ali: +18600 kr (33361 kr)
- 10:09 gå till skrivaren (23 m) (33361 kr)
- 10:09 tar ut 1 st ur skrivaren (33361 kr)
- 10:13 gå till tavlan vid vägen (14 m) (33361 kr)
- 10:13 köper ängen i öster (28500 kr) (4861 kr)
- 10:31 gå till bäcken (49 m) (4861 kr)
- 10:37 vaskar i bäcken (4861 kr)
- 10:40 tjänar pengar till väntar på flaskhalsen för solpark2: 4861/4901 kr → printar kolfiberstol (15200 kr) (4861 kr)
- 10:46 gå till skrivaren (31 m) (4861 kr)
- 10:48 printar Kolfiberstol (4861 kr)
- 10:56 tar ut 1 st ur skrivaren (4861 kr)
- 10:56 fulla fickor – lägger vaskpanna i kistan (4861 kr)
- 11:04 gå till Ali (35 m) (4861 kr)
- 11:04 öppnar Alis butik – sälja (4861 kr)
- 11:06 säljer hos Ali: +335 kr (5196 kr)
- 11:07 tjänar pengar till väntar på flaskhalsen för solpark2: 5196/5236 kr → printar kolfiberstol (15200 kr) (5196 kr)
- 11:14 gå till skrivaren (33 m) (5196 kr)
- 11:15 printar Kolfiberstol (5196 kr)
- 11:24 tar ut 1 st ur skrivaren (5196 kr)
- 11:30 gå till Ali (33 m) (5196 kr)
- 11:30 öppnar Alis butik – sälja (5196 kr)
- 11:32 säljer hos Ali: +15200 kr (20396 kr)
- 11:34 tjänar pengar till väntar på flaskhalsen för solpark2: 20396/20436 kr → printar kolfiberstol (14440 kr) (20396 kr)
- 11:41 gå till skrivaren (33 m) (20396 kr)
- 11:43 printar Kolfiberstol (20396 kr)
- 11:51 tar ut 1 st ur skrivaren (20396 kr)
- 11:58 gå till Ali (33 m) (20396 kr)
- 11:58 öppnar Alis butik – sälja (20396 kr)
- 12:00 säljer hos Ali: +14440 kr (34836 kr)
- 12:02 tjänar pengar till väntar på flaskhalsen för solpark2: 34836/34876 kr → printar kolfiberstol (13718 kr) (34836 kr)
- 12:09 gå till skrivaren (33 m) (34836 kr)
- 12:10 printar Kolfiberstol (34836 kr)
- 12:18 tar ut 1 st ur skrivaren (34836 kr)
- 12:25 gå till Ali (33 m) (34836 kr)
- 12:25 öppnar Alis butik – sälja (34836 kr)
- 12:27 säljer hos Ali: +13718 kr (48554 kr)
- 12:29 tjänar pengar till väntar på flaskhalsen för solpark2: 48554/48594 kr → printar kolfiberstol (13032 kr) (48554 kr)
- 12:36 gå till skrivaren (33 m) (48554 kr)
- 12:38 printar Kolfiberstol (48554 kr)
- 12:46 tar ut 1 st ur skrivaren (48554 kr)
- 12:53 gå till Ali (33 m) (48554 kr)
- 12:53 öppnar Alis butik – sälja (48554 kr)
- 12:54 säljer hos Ali: +13032 kr (61586 kr)
- 12:57 tjänar pengar till väntar på flaskhalsen för solpark2: 61586/61626 kr → printar kolfiberstol (12380 kr) (61586 kr)
- 13:03 gå till skrivaren (33 m) (61586 kr)
- 13:05 printar Kolfiberstol (61586 kr)
- 13:13 tar ut 1 st ur skrivaren (61586 kr)
- 13:20 gå till Ali (33 m) (61586 kr)
- 13:20 öppnar Alis butik – sälja (61586 kr)
- 13:22 säljer hos Ali: +12380 kr (73966 kr)
- 13:24 tjänar pengar till väntar på flaskhalsen för solpark2: 73966/74006 kr → printar kolfiberstol (11761 kr) (73966 kr)
- 13:24 väntar på kolfiber från bandet (73966 kr)
- 13:32 väntar på kolfiber från bandet (73966 kr)
- 13:40 väntar på kolfiber från bandet (73966 kr)
- 13:48 väntar på kolfiber från bandet (73966 kr)
- 13:56 väntar på kolfiber från bandet (73966 kr)
- 14:04 väntar på kolfiber från bandet (73966 kr)
- 14:13 väntar på kolfiber från bandet (73966 kr)
- 14:21 väntar på kolfiber från bandet (73966 kr)
- 14:29 väntar på kolfiber från bandet (73966 kr)
- 14:37 väntar på kolfiber från bandet (73966 kr)
- 14:45 väntar på kolfiber från bandet (73966 kr)
- 14:53 väntar på kolfiber från bandet (73966 kr)
- 15:01 väntar på kolfiber från bandet (73966 kr)
- 15:09 väntar på kolfiber från bandet (73966 kr)
- 15:17 väntar på kolfiber från bandet (73966 kr)
- 15:25 väntar på kolfiber från bandet (73966 kr)
- 15:34 väntar på kolfiber från bandet (73966 kr)
- 15:42 väntar på kolfiber från bandet (73966 kr)
- 15:50 väntar på kolfiber från bandet (73966 kr)
- 15:58 väntar på kolfiber från bandet (73966 kr)
- 16:06 väntar på kolfiber från bandet (73966 kr)
- 16:14 väntar på kolfiber från bandet (73966 kr)
- 16:22 väntar på kolfiber från bandet (73966 kr)
- 16:30 väntar på kolfiber från bandet (73966 kr)
- 16:38 väntar på kolfiber från bandet (73966 kr)
- 16:46 väntar på kolfiber från bandet (73966 kr)
- 16:55 väntar på kolfiber från bandet (73966 kr)
- 17:03 väntar på kolfiber från bandet (73966 kr)
- 17:11 väntar på kolfiber från bandet (73966 kr)
- 17:19 väntar på kolfiber från bandet (73966 kr)
- 17:27 väntar på kolfiber från bandet (73966 kr)
- 17:27 kolfiberstol gick inte att printa – tar nästa (73966 kr)
- 17:27 öppnar Alis butik – sälja (73966 kr)
- 17:30 tjänar pengar till väntar på flaskhalsen för solpark2: 73966/74006 kr → printar designvas i röd petg (1185 kr) (73966 kr)
- 17:36 gå till skrivaren (29 m) (73966 kr)
- 17:37 printar Designvas i röd PETG (73966 kr)
- 17:41 tar ut 1 st ur skrivaren (73966 kr)
- 17:47 gå till Ali (29 m) (73966 kr)
- 17:47 öppnar Alis butik – sälja (73966 kr)
- 17:49 säljer hos Ali: +1185 kr (75151 kr)
- 17:51 öppnar Alis butik – köpa solcellspark (75151 kr)
- 17:53 köper solpark för 4800 kr (70351 kr)
- 18:09 plockar 9 skräp på tippen (bär max 16) (70351 kr)
- 18:11 gå till kvarnen (9 m) (70351 kr)
- 18:17 gå till skrivaren (7 m) (70351 kr)
- 18:18 printar Solcellspark (4 delar) (70351 kr)
- 18:34 plockar 8 skräp på tippen (bär max 16) (70351 kr)
- 18:36 gå till kvarnen (11 m) (70351 kr)
- 19:07 plockar 6 skräp på tippen (bär max 16) (70351 kr)
- 19:11 gå till kvarnen (14 m) (70351 kr)
- 19:23 gå till skrivaren (7 m) (70351 kr)
- 19:23 tar ut 1 st ur skrivaren (70351 kr)
- 19:33 gå till platsen för solcellspark (45 m) (70351 kr)
- 19:34 ställer ut solcellspark (70351 kr)
- 19:42 popup: "FORTSÄTT" (70351 kr)
- 19:51 gå till sängen (24 m) (70351 kr)

</details>

## Dag 18

| Tid | Källa | Vem | Text |
|---|---|---|---|
| 19:54 | vara | ali | n2_hjalm |
| 19:54 | händelse | malKlart | id=sov17 del=Dag 17 – Ängen nasta=m18-bygg-diamantkvarnen |
| 19:54 | MÅL |  | Bygg diamantkvarnen |

<details><summary>Botens handlingar dag 18</summary>

- 0:00 — dag 18 börjar — (74586 kr)

</details>
