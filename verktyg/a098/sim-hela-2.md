# Simulering kapitel 1 – körning 1

*Gjord 2026-11-21 11:42 med `verktyg/sim-kapitel1.mjs` + `verktyg/sim-bot.js` (punkt AX). Boten går 4,5 m/s, läser 15 tecken/s, trampar, vevar, plockar, printar, köper och säljer via spelets egna funktioner. Tiderna är speltid.*

## Sammanfattning

| Dag | Minuter | Väntan | Prints (totalt) | Kr vid sömn | Bär | Trivsel |
|---|---|---|---|---|---|---|
| 12 | 10.8 | 0 % | 173 | 69107 | 16 | 202 |
| 13 | 2.4 | 4 % | 174 | 30097 | 16 | 242 |
| 14 | 4.7 | 0 % | 179 | 11350 | 16 | 240 |
| 15 | 4.2 | 9 % | 184 | 4020 | 16 | 307 |
| 16 | 8.2 | 22 % ⚠️ | 499 | 13526 | 16 | 347 |
| 17 | 17.2 | 15 % | 809 | 85388 | 16 | 349 |
| 18 | 2.3 | 1 % | 809 | 66920 | 16 | 349 |
| 19 | 7.9 | 10 % | 818 | 112141 | 16 | 516 |
| 20 | 1.7 | 12 % | 819 | 102627 | 16 | 541 |
| 21 | 0.5 | 0 % | 819 | 95427 | 16 | 541 |
| 22 | 13.3 | 0 % | 829 | 82019 | 16 | 541 |
| 23 | 0.0 | 0 % | 829 | 82019 | 16 | 541 |

## Flaskhalskartan (EE)

| Dag | bara | mala | trampa | strom | skrivare | inkomst | Upplåst |
|---|---|---|---|---|---|---|---|
| 12 | 0 | 0 | 0 | 0 | 771 | 0 | bank2 (strom, 6:53, reserv) |
| 13 | 3 | 26 | 0 | 0 | 64 | 0 |  |
| 14 | 0 | 0 | 0 | 0 | 190 | 0 |  |
| 15 | 4 | 47 | 0 | 0 | 80 | 0 |  |
| 16 | 7 | 10 | 0 | 0 | 446 | 0 | trim_kolf1 (skrivare_kolf, 2:01) |
| 17 | 11 | 20 | 0 | 0 | 561 | 0 | solpark2 (strom, 11:11, reserv) |
| 18 | 1 | 67 | 0 | 0 | 102 | 0 |  |
| 19 | 3 | 37 | 0 | 0 | 319 | 0 | vindkraft (strom, 4:02, reserv), guldskrivare (skrivare, 6:13) |
| 20 | 1 | 2 | 0 | 0 | 46 | 0 |  |
| 21 | 0 | 0 | 0 | 0 | 21 | 0 |  |
| 22 | 0 | 0 | 0 | 0 | 642 | 0 |  |
| 23 | 0 | 0 | 0 | 0 | 0 | 0 |  |

TIDIG: 0 · FAST: 0 · upplåst av reserven (målet väntade 3 min): 3

**SKRATT:** 105 roliga ögonblick på 73 min (14.4 per 10 min, mål minst 5)

**Köp:**

- dag 12 1:46 – kolfskrivare (25000 kr)
- dag 12 3:25 – kolfslang (27500 kr)
- dag 12 10:20 – bank (1600 kr)
- dag 13 0:26 – gamingbod (41000 kr)
- dag 14 0:26 – jetmotor (16000 kr)
- dag 14 3:36 – utlada (18500 kr)
- dag 15 0:43 – projektor (950 kr)
- dag 15 1:40 – ledpinne (1000 kr)
- dag 15 2:06 – jacuzzi (5700 kr)
- dag 15 3:03 – fagelbad (60 kr)
- dag 15 3:27 – hogtalare (1450 kr)
- dag 17 15:25 – solpark (4800 kr)
- dag 18 0:44 – diamantkniv (12000 kr)
- dag 19 4:16 – vindkraft (6050 kr)
- dag 19 6:35 – guldskrivare (4200 kr)
- dag 20 0:42 – kamin (9750 kr)

## Storykedjan (kvittens → varför → nytt mål)

| Dag | Tid | Id | Kvittens | Varför | Nytt mål | Tid till målet |
|---|---|---|---|---|---|---|


## Hur länge nya mål väntade (från att förra målet blev klart till att det nya syntes i målrutan)

Snitt 5.2 s · max 15.7 s · över 4 s: 13 · över 8 s: 12 av 41

## Flaggor (36)

- **LUGN** dag 14 0:12: 2.5 s efter BÖRJA DAGEN: [lapp] "Dag 14. Mammas paket kom tillbaka: "Okänd mottagare". Det hä"
- **KROCK** dag 14 0:15: 2.8 s mellan [lapp] "Dag 14. Mammas paket kom tillbaka: "Okänd mottagare". Det hä" och [notis] "💭 Jetmotorn ska sitta på kolfiberkvarnen. Vad kan gå fel."
- **SEN** dag 12 2:59: 15.5 s efter händelsen: ali: "Ali här. Ännu en ritning som blev på riktigt: Kolfiberskrivare. Semest"
- **SEN** dag 13 1:29: 11.7 s efter händelsen: notis:📔 Prestation: Städtokig · +3 respekt: "📔 Prestation: Städtokig · +3 respekt"
- **SEN** dag 15 2:21: 34.6 s efter händelsen: kjelle: "Radio Tippen, Kjelle här. Skjulet vid tippen har fått jetmotor med eft"
- **SEN** dag 17 3:46: 12.8 s efter händelsen: värld:Mjau.: "Mjau."
- **SEN** dag 18 1:26: 14.5 s efter händelsen: ali: "Ali här. Jag såg Diamantkvarn på avstånd. Ett streck blev lite snett. "
- **SEN** dag 19 6:01: 13.8 s efter händelsen: värld:TUUT! Tjena!: "TUUT! Tjena!"
- **SEN** dag 22 5:59: 55.3 s efter händelsen: notis:📔 Prestation: Jul på tippen · +3 respek: "📔 Prestation: Jul på tippen · +3 respekt"
- **SEN** dag 22 6:52: 89.6 s efter händelsen: kjelle: "Kjelle här, direkt från julfesten! Gunnar, du är här. Säg något till l"
- **SEN** dag 22 7:33: 36.8 s efter händelsen: du: "Det drar. Från överallt."
- **PAUS** dag 14 0:19: 0.0 s paus före "Cykelhjälm i PETG · +50 %"
- **PAUS** dag 16 0:18: 0.0 s paus före "Skylten vid vägen är uppgraderad."
- **PAUS** dag 16 6:45: 0.0 s paus före "📦 Paketet till Kenneth på bilskroten ligger i pos"
- **PAUS** dag 17 7:12: 0.0 s paus före "📦 Paketet till Ett kafé i Ystad ligger i postlåda"
- **PAUS** dag 17 7:59: 0.0 s paus före "✨ Guld! (1.9 s)"
- **PAUS** dag 18 0:17: 0.0 s paus före "Göran lämnade en blank skruv på säljlådan."
- **PAUS** dag 19 1:24: 0.0 s paus före "📦 Paketet till Någon som bara skrev "hej" ligger "
- **PAUS** dag 20 0:15: 0.0 s paus före "2 paket i natt · +236 kr"
- **PAUS** dag 20 0:22: 0.2 s paus före "Göran lämnade en blank skruv på säljlådan."
- **PAUS** dag 21 0:20: 0.0 s paus före "📮 Du är folkbokförd! Soptippsvägen 1 är din adres"
- **PAUS** dag 22 0:16: 0.0 s paus före "Cykelhjälm i PETG · +50 %"
- **PAUS** dag 22 1:13: 0.0 s paus före "🚗 En bil svänger in vid grinden."
- **SPAM** dag 15 4:00: 112 s efter förra: "Skrivare L: Tornet är tomt – mal mer så fortsätter den"
- **UPPREPNING** dag 18 1:34: info:guld: "✨ Guld! (1.9 s)" (förra gången dag 17)
- **UPPREPNING** dag 20 0:22: info:guld: "Göran lämnade en blank skruv på säljlådan." (förra gången dag 18)
- **TEMPO** dag 13 2:21: dag 13 tog 2.4 min (mål 10–15)
- **TEMPO** dag 14 4:43: dag 14 tog 4.7 min (mål 10–15)
- **TEMPO** dag 15 4:11: dag 15 tog 4.2 min (mål 10–15)
- **TEMPO** dag 16 8:11: dag 16 tog 8.2 min (mål 10–15)
- **TEMPO** dag 17 17:12: dag 17 tog 17.2 min (mål 10–15)
- **TEMPO** dag 18 2:15: dag 18 tog 2.3 min (mål 10–15)
- **TEMPO** dag 19 7:51: dag 19 tog 7.9 min (mål 10–15)
- **TEMPO** dag 20 1:39: dag 20 tog 1.7 min (mål 10–15)
- **TEMPO** dag 21 0:28: dag 21 tog 0.5 min (mål 10–15)
- **TEMPO** dag 23 0:01: dag 23 tog 0.0 min (mål 10–15)

Sidfel: inga

## Dag 12

| Tid | Källa | Vem | Text |
|---|---|---|---|
| 0:00 | MÅL |  | Bygg kolfiberskrivaren i linje 3 |
| 0:00 | MÅL |  | Bygg kolfiberskrivaren i linje 3 |
| 0:00 | sak | du | Bygg kolfiberskrivaren i linje 3. |
| 0:00 | pil |  | Bygg kolfiberskrivaren i linje 3 |
| 0:00 | röst | du | Bygg kolfiberskrivaren i linje 3. · MÅL |
| 0:01 | nick |  | nick:91 |
| 0:03 | klar | du | Bygg kolfiberskrivaren i linje 3. |
| 0:11 | skratt | du | kvarnen rapar |
| 0:15 | toast | guld | 🧵 |
| 0:17 | händelse | printStart | sak=n2_hjalm |
| 0:22 | toast | guld | ✅ |
| 0:22 | händelse | printKlar | sak=n2_hjalm n=10 |
| 0:22 | händelse | tagitUrPrint | sak=n2_hjalm n=1 |
| 0:28 | väntar | ali | Har du printat nåt nytt? Visa! |
| 0:28 | sak | ali | Har du printat nåt nytt? Visa! |
| 0:28 | röst | ali | Har du printat nåt nytt? Visa! · SMÅPRAT |
| 0:29 | bubbla |  | Har du printat nåt nytt? Visa! |
| 0:31 | klar | ali | Har du printat nåt nytt? Visa! |
| 0:31 | aliSalt | ali | 1544 |
| 0:34 | väntar | bror | Visade bilder på ditt skjul för polarna. Dom trodde det var en Airbnb. Jag sa inte emot. |
| 0:44 | skratt | du | kvarnen rapar |
| 0:46 | toast | guld | 🧵 |
| 0:50 | händelse | printStart | sak=n2_hjalm |
| 0:51 | toast | guld | 🧵 |
| 0:51 | toast | guld | 🧵 |
| 0:51 | toast | guld | 🧵 |
| 0:51 | toast | guld | 🧵 |
| 0:51 | toast | guld | 🧵 |
| 0:52 | toast | guld | 🧵 |
| 0:52 | toast | guld | 🧵 |
| 0:52 | toast | guld | 🧵 |
| 0:52 | toast | guld | 🧵 |
| 0:52 | toast | guld | 🧵 |
| 0:52 | toast | guld | 🧵 |
| 0:52 | toast | guld | 🧵 |
| 0:52 | toast | guld | 🧵 |
| 0:52 | toast | guld | 🧵 |
| 0:55 | toast | guld | ✅ |
| 0:55 | händelse | printKlar | sak=n2_hjalm n=11 |
| 0:55 | händelse | tagitUrPrint | sak=n2_hjalm n=1 |
| 1:04 | aliSalt | ali | 1467 |
| 1:08 | väntar | rolf | Fick en kajak i lasset. Ingen paddel. Typiskt. Ja la den vid grinden åt dig. /R |
| 1:13 | händelse | printStart | sak=n2_hjalm |
| 1:17 | toast | guld | ✅ |
| 1:17 | händelse | printKlar | sak=n2_hjalm n=12 |
| 1:18 | händelse | tagitUrPrint | sak=n2_hjalm n=1 |
| 1:20 | händelse | printStart | sak=n2_hjalm |
| 1:25 | toast | guld | ✅ |
| 1:25 | händelse | printKlar | sak=n2_hjalm n=13 |
| 1:26 | händelse | tagitUrPrint | sak=n2_hjalm n=1 |
| 1:28 | händelse | printStart | sak=n2_hjalm |
| 1:32 | toast | guld | ✅ |
| 1:32 | händelse | printKlar | sak=n2_hjalm n=14 |
| 1:33 | händelse | tagitUrPrint | sak=n2_hjalm n=1 |
| 1:42 | aliSalt | ali | 1397 |
| 1:42 | aliSalt | ali | 1397 |
| 1:42 | aliSalt | ali | 1397 |
| 1:43 | väntar | mamma | Jag har lagt upp en bild på ditt skjul på Facebook. 47 gilla. Faster Inger skrev "Va fint, är det en bastu?" |
| 1:45 | skratt | du | Alis dyr-pling |
| 1:45 | toast | guld | 3D-modell köpt – printa kolfiberskrivare på skrivaren |
| 1:45 | händelse | kopt | sak=kolfskrivare |
| 2:00 | skratt | du | kvarnen rapar |
| 2:04 | toast | guld | 🧵 |
| 2:09 | toast | guld | 🧵 |
| 2:13 | händelse | printStart | sak=byggsats:kolfskrivare |
| 2:13 | väntar | mamma | Jag sa till pappa att du bor på en soptipp. Han sa "aha, vad lugnt då" och satte på Formel 1. Lugnt? |
| 2:15 | toast | bra | Del 1 av 5 klar |
| 2:18 | toast | bra | Del 2 av 5 klar |
| 2:20 | toast | bra | Del 3 av 5 klar |
| 2:20 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 2:28 | skratt | du | kvarnen rapar |
| 2:33 | toast | bra | Del 4 av 5 klar |
| 2:37 | tanke | du | Jag skulle kunna äta en sopsäck. Nästan. |
| 2:37 | väntar | du | Jag skulle kunna äta en sopsäck. Nästan. |
| 2:37 | sak | du | Jag skulle kunna äta en sopsäck. Nästan. |
| 2:37 | notis | tanke | 💭 Jag skulle kunna äta en sopsäck. Nästan. |
| 2:37 | röst | du | Jag skulle kunna äta en sopsäck. Nästan. · REAKTION |
| 2:37 | händelse | printKlar | sak=byggsats:kolfskrivare n=1 |
| 2:37 | toast | guld | ✅ |
| 2:39 | skratt | du | falsk tuta |
| 2:40 | klar | du | Jag skulle kunna äta en sopsäck. Nästan. |
| 2:42 | toast | guld | 🧵 |
| 2:42 | händelse | tagitUrPrint | sak=byggsats:kolfskrivare n=1 |
| 2:42 | paket |  | sms |
| 2:42 | väntar | ali | Ali här. Ännu en ritning som blev på riktigt: Kolfiberskrivare. Semesterkassan växer. Livet växer. |
| 2:45 | händelse | placerat | sak=kolfskrivare |
| 2:45 | händelse | malKlart | id=kolfskrivare del=Dag 12 – Kolfiberskrivaren nasta=kolfslang |
| 2:45 | väntar | du | Rullarna ska fram till skrivaren utan mig. En slang. |
| 2:45 | målruta |  | Bygg slangfördelaren |
| 2:45 | MÅL |  | Bygg slangfördelaren |
| 2:47 | sak | du | Rullarna ska fram till skrivaren utan mig. En slang. |
| 2:47 | pil |  | Bygg slangfördelaren |
| 2:47 | notis | tanke | 💭 Rullarna ska fram till skrivaren utan mig. En slang. |
| 2:47 | röst | du | Rullarna ska fram till skrivaren utan mig. En slang. · MÅL |
| 2:47 | nick |  | nick:92 |
| 2:47 | väntar | bror | Pappa gick för att tjacka mjölk och kom hem med en motorsåg. "Den var på rea." Vi har inga träd. |
| 2:49 | kvittens-bock |  | ✓ Bygg kolfiberskrivaren i linje 3 |
| 2:51 | klar | du | Rullarna ska fram till skrivaren utan mig. En slang. |
| 2:54 | skratt | du | däcket rullar iväg |
| 2:55 | händelse | printStart | sak=n3_stol |
| 2:55 | toast | bra | 🔗 Slangen kopplad |
| 2:59 | sak | ali | Ali här. Ännu en ritning som blev på riktigt: Kolfiberskrivare. Semesterkassan växer. Livet växer. |
| 2:59 | sms | ali | Ali här. Ännu en ritning som blev på riktigt: Kolfiberskrivare. Semesterkassan växer. Livet växer. |
| 2:59 | sms-bubbla | ali | Ali här. Ännu en ritning som blev på riktigt: Kolfiberskrivare. Semesterkassan växer. Livet växer. |
| 2:59 | röst | ali | Ali här. Ännu en ritning som blev på riktigt: Kolfiberskrivare. Semesterkassan växer. Livet växer. · REAKTION |
| 3:01 | toast | guld | ✅ |
| 3:01 | händelse | printKlar | sak=n3_stol n=1 |
| 3:03 | händelse | tagitUrPrint | sak=n3_stol n=1 |
| 3:05 | händelse | printStart | sak=n3_stol |
| 3:08 | klar | ali | Ali här. Ännu en ritning som blev på riktigt: Kolfiberskrivare. Semesterkassan växer. Livet växer. |
| 3:11 | toast | guld | ✅ |
| 3:11 | händelse | printKlar | sak=n3_stol n=2 |
| 3:12 | händelse | tagitUrPrint | sak=n3_stol n=1 |
| 3:21 | aliSalt | ali | 16000 |
| 3:22 | aliSalt | ali | 15200 |
| 3:24 | skratt | du | Alis dyr-pling |
| 3:24 | toast | guld | 3D-modell köpt – printa slangfördelare på skrivaren |
| 3:24 | händelse | kopt | sak=kolfslang |
| 3:35 | händelse | printStart | sak=byggsats:kolfslang |
| 3:36 | toast | bra | Del 1 av 3 klar |
| 3:38 | toast | bra | Del 2 av 3 klar |
| 3:40 | händelse | printKlar | sak=byggsats:kolfslang n=1 |
| 3:40 | toast | guld | ✅ |
| 3:40 | händelse | tagitUrPrint | sak=byggsats:kolfslang n=1 |
| 3:42 | händelse | placerat | sak=kolfslang |
| 3:42 | väntar | info:guld | Slangfördelaren sitter – alla skrivare i linje 3 får kolfiber samtidigt |
| 3:42 | sak | info:guld | Slangfördelaren sitter – alla skrivare i linje 3 får kolfiber samtidigt |
| 3:42 | kvitto-visas | info:guld | Slangfördelaren sitter – alla skrivare i linje 3 får kolfiber samtidigt |
| 3:42 | toast | guld | Slangfördelaren sitter – alla skrivare i linje 3 får kolfiber samtidigt |
| 3:42 | händelse | malKlart | id=kolfslang del=Dag 12 – Kolfiberskrivaren nasta=kolfstol |
| 3:42 | händelse | malKlart | id=kolfstol del=Dag 12 – Kolfiberskrivaren nasta=f12-batteribank2 |
| 3:42 | MÅL |  | Printa och sälj |
| 3:44 | klar | info:guld | Slangfördelaren sitter – alla skrivare i linje 3 får kolfiber samtidigt |
| 3:44 | målruta |  | Printa och sälj |
| 3:46 | kvittens-bock |  | ✓ Bygg slangfördelaren |
| 3:46 | kvittens-bock |  | ✓ Printa en kolfiberstol |
| 3:46 | sak | du | (nytt mål i rutan) |
| 3:46 | pil |  | Printa och sälj |
| 3:46 | klar | du | (nytt mål i rutan) |
| 3:50 | händelse | printStart | sak=n3_stol |
| 3:56 | toast | guld | ✅ |
| 3:56 | händelse | printKlar | sak=n3_stol n=3 |
| 3:57 | händelse | tagitUrPrint | sak=n3_stol n=1 |
| 4:07 | aliSalt | ali | 14440 |
| 4:16 | händelse | printStart | sak=n3_stol |
| 4:23 | toast | guld | ✅ |
| 4:23 | händelse | printKlar | sak=n3_stol n=4 |
| 4:23 | händelse | tagitUrPrint | sak=n3_stol n=1 |
| 4:32 | aliSalt | ali | 13718 |
| 4:37 | tanke | du | Allt går trögt på tom mage. |
| 4:37 | väntar | du | Allt går trögt på tom mage. |
| 4:37 | sak | du | Allt går trögt på tom mage. |
| 4:37 | notis | tanke | 💭 Allt går trögt på tom mage. |
| 4:37 | röst | du | Allt går trögt på tom mage. · REAKTION |
| 4:39 | klar | du | Allt går trögt på tom mage. |
| 4:42 | händelse | printStart | sak=n3_stol |
| 4:47 | väntar | bror | Visade bilder på ditt skjul för polarna. Dom trodde det var en Airbnb. Jag sa inte emot. |
| 4:49 | toast | guld | ✅ |
| 4:49 | händelse | printKlar | sak=n3_stol n=5 |
| 4:49 | händelse | tagitUrPrint | sak=n3_stol n=1 |
| 4:56 | skratt | du | falsk tuta |
| 4:58 | aliSalt | ali | 13032 |
| 5:09 | händelse | printStart | sak=n3_stol |
| 5:15 | toast | guld | ✅ |
| 5:15 | händelse | printKlar | sak=n3_stol n=6 |
| 5:16 | händelse | tagitUrPrint | sak=n3_stol n=1 |
| 5:24 | aliSalt | ali | 12380 |
| 5:35 | händelse | printStart | sak=n3_stol |
| 5:41 | toast | guld | ✅ |
| 5:41 | händelse | printKlar | sak=n3_stol n=7 |
| 5:42 | händelse | tagitUrPrint | sak=n3_stol n=1 |
| 5:50 | aliSalt | ali | 11761 |
| 6:37 | tanke | du | När åt jag senast? Det var nog i går. |
| 6:37 | väntar | du | När åt jag senast? Det var nog i går. |
| 6:37 | sak | du | När åt jag senast? Det var nog i går. |
| 6:37 | notis | tanke | 💭 När åt jag senast? Det var nog i går. |
| 6:37 | röst | du | När åt jag senast? Det var nog i går. · REAKTION |
| 6:40 | klar | du | När åt jag senast? Det var nog i går. |
| 6:44 | skratt | du | däcket rullar iväg |
| 6:53 | upplåst | strom | bank2 |
| 6:53 | brott | RESERV | bank2 (strom 0 av 15) |
| 6:53 | händelse | upplast | id=bank2 flask=strom |
| 6:53 | paket |  | sms |
| 6:53 | väntar | ali | Ali här. En batteribank till. Kolfibret är hungrigt. Som min svåger. |
| 6:53 | sak | ali | Ali här. En batteribank till. Kolfibret är hungrigt. Som min svåger. |
| 6:53 | sms | ali | Ali här. En batteribank till. Kolfibret är hungrigt. Som min svåger. |
| 6:53 | sms-bubbla | ali | Ali här. En batteribank till. Kolfibret är hungrigt. Som min svåger. |
| 6:53 | röst | ali | Ali här. En batteribank till. Kolfibret är hungrigt. Som min svåger. · STORY |
| 6:59 | klar | ali | Ali här. En batteribank till. Kolfibret är hungrigt. Som min svåger. |
| 7:44 | struken | mamma | Jag har lagt upp en bild på ditt skjul på Facebook. 47 gilla. Faster Inger skrev "Va fint, är det en bastu?" |
| 8:22 | väntar | mamma | Jag sa till pappa att du bor på en soptipp. Han sa "aha, vad lugnt då" och satte på Formel 1. Lugnt? |
| 8:24 | skratt | du | falsk tuta |
| 8:37 | poolTom | du | 4 repliker använda |
| 10:02 | händelse | printStart | sak=n2_hjalm |
| 10:07 | toast | guld | ✅ |
| 10:07 | händelse | printKlar | sak=n2_hjalm n=15 |
| 10:07 | händelse | tagitUrPrint | sak=n2_hjalm n=1 |
| 10:15 | aliSalt | ali | 1397 |
| 10:19 | skratt | du | Alis dyr-pling |
| 10:19 | toast | guld | 3D-modell köpt – printa batteribank på skrivaren |
| 10:19 | händelse | kopt | sak=bank |
| 10:27 | händelse | printStart | sak=byggsats:bank |
| 10:29 | toast | bra | Del 1 av 2 klar |
| 10:31 | händelse | printKlar | sak=byggsats:bank n=1 |
| 10:31 | toast | guld | ✅ |
| 10:31 | händelse | tagitUrPrint | sak=byggsats:bank n=1 |
| 10:31 | skratt | du | kvarnen spottar |
| 10:37 | poolTom | du | 4 repliker använda |
| 10:38 | händelse | placerat | sak=bank |
| 10:38 | händelse | malKlart | id=f12-batteribank2 del=Dag 12 – Kolfiberskrivaren nasta=sov12 |
| 10:38 | paket |  | lapp |
| 10:38 | lapp | 📔 Dagbok | Dag 12 är slut. Allt säljs bara när jag är vaken. |
| 10:38 | kvallsrad | du | Allt säljs bara när jag är vaken. |
| 10:38 | målruta |  | Klart för idag – sov när du vill |
| 10:38 | MÅL |  | Klart för idag – sov när du vill |
| 10:39 | sak | du | (nytt mål i rutan) |
| 10:39 | pil |  | Klart för idag – sov när du vill |
| 10:39 | klar | du | (nytt mål i rutan) |
| 10:40 | skratt | du | falsk tuta |
| 10:45 | väntar | notis:🌇 Klockan är 21. Ali slår igen luckan.  | 🌇 Klockan är 21. Ali slår igen luckan. Dagens jobb är klart – gå in i skjulet och sov i sängen. |
| 10:46 | struken | bror | Pappa gick för att tjacka mjölk och kom hem med en motorsåg. "Den var på rea." Vi har inga träd. |
| 10:48 | webbBetalt | du | 1990 |
| 10:48 | nattkort | du | 🌙 Dag 12 är slut. God natt. zzz… Allt säljs bara när jag är vaken. DAGENS PRINTAR Kolfiberstol × 7 Cykelhjälm i PETG × 6 Totalt 13 printar 💰 Tjänat i dag +116 |

<details><summary>Botens handlingar dag 12</summary>

- 0:05 webbshop: 2 paket i postlådan (18077 kr)
- 0:05 tjänar pengar till kolfiberskrivare: 18077/25000 kr → printar cykelhjälm i petg (1544 kr) (18077 kr)
- 0:07 gå till en tunna (10 m) (18077 kr)
- 0:11 gå till PETG-kvarnen (11 m) (18077 kr)
- 0:11 tömmer det tunga i PETG-kvarnen (18077 kr)
- 0:16 gå till skrivaren (3 m) (18077 kr)
- 0:17 printar Cykelhjälm i PETG (18077 kr)
- 0:23 tar ut 1 st ur skrivaren (18077 kr)
- 0:29 gå till Ali (31 m) (18077 kr)
- 0:29 öppnar Alis butik – sälja (18077 kr)
- 0:31 säljer hos Ali: +1544 kr (19621 kr)
- 0:32 tjänar pengar till kolfiberskrivare: 19621/25000 kr → printar cykelhjälm i petg (1467 kr) (19621 kr)
- 0:40 gå till en tunna (39 m) (19621 kr)
- 0:44 gå till PETG-kvarnen (15 m) (19621 kr)
- 0:44 tömmer det tunga i PETG-kvarnen (19621 kr)
- 0:49 gå till skrivaren (3 m) (19621 kr)
- 0:50 printar Cykelhjälm i PETG (19621 kr)
- 0:56 tar ut 1 st ur skrivaren (19621 kr)
- 1:02 gå till Ali (31 m) (19621 kr)
- 1:02 öppnar Alis butik – sälja (19621 kr)
- 1:04 säljer hos Ali: +1467 kr (21088 kr)
- 1:05 tjänar pengar till kolfiberskrivare: 21088/25000 kr → printar cykelhjälm i petg (1397 kr) (21088 kr)
- 1:11 gå till skrivaren (29 m) (21088 kr)
- 1:13 printar Cykelhjälm i PETG (21088 kr)
- 1:19 tar ut 1 st ur skrivaren (21088 kr)
- 1:20 printar Cykelhjälm i PETG (21088 kr)
- 1:26 tar ut 1 st ur skrivaren (21088 kr)
- 1:28 printar Cykelhjälm i PETG (21088 kr)
- 1:34 tar ut 1 st ur skrivaren (21088 kr)
- 1:40 gå till Ali (29 m) (21088 kr)
- 1:40 öppnar Alis butik – sälja (21088 kr)
- 1:43 säljer hos Ali: +4191 kr (25279 kr)
- 1:44 öppnar Alis butik – köpa kolfiberskrivare (25279 kr)
- 1:46 köper kolfskrivare för 25000 kr (279 kr)
- 1:55 gå till en tunna (39 m) (279 kr)
- 2:00 gå till PETG-kvarnen (17 m) (279 kr)
- 2:00 tömmer det tunga i PETG-kvarnen (279 kr)
- 2:11 gå till skrivaren (3 m) (279 kr)
- 2:13 printar Kolfiberskrivare (5 delar) (279 kr)
- 2:25 gå till en tunna (14 m) (279 kr)
- 2:28 gå till PETG-kvarnen (11 m) (279 kr)
- 2:28 tömmer det tunga i PETG-kvarnen (279 kr)
- 2:42 gå till skrivaren (4 m) (279 kr)
- 2:43 tar ut 1 st ur skrivaren (279 kr)
- 2:44 gå till platsen för kolfiberskrivare (5 m) (279 kr)
- 2:45 ställer ut kolfiberskrivare (279 kr)
- 2:53 tjänar pengar till slangfördelare: 279/27500 kr → printar kolfiberstol (16000 kr) (279 kr)
- 2:55 printar Kolfiberstol (279 kr)
- 3:03 tar ut 1 st ur skrivaren (279 kr)
- 3:05 printar Kolfiberstol (279 kr)
- 3:13 tar ut 1 st ur skrivaren (279 kr)
- 3:20 gå till Ali (33 m) (279 kr)
- 3:20 öppnar Alis butik – sälja (279 kr)
- 3:22 säljer hos Ali: +31200 kr (31479 kr)
- 3:23 öppnar Alis butik – köpa slangfördelare (31479 kr)
- 3:25 köper kolfslang för 27500 kr (3979 kr)
- 3:33 gå till skrivaren (33 m) (3979 kr)
- 3:35 printar Slangfördelare (3 delar) (3979 kr)
- 3:41 tar ut 1 st ur skrivaren (3979 kr)
- 3:42 gå till kolfiberkvarnen (3 m) (3979 kr)
- 3:48 tjänar pengar till väntar på flaskhalsen för bank2: 3979/4019 kr → printar kolfiberstol (14440 kr) (3979 kr)
- 3:48 gå till skrivaren (1 m) (3979 kr)
- 3:50 printar Kolfiberstol (3979 kr)
- 3:58 tar ut 1 st ur skrivaren (3979 kr)
- 4:05 gå till Ali (35 m) (3979 kr)
- 4:05 öppnar Alis butik – sälja (3979 kr)
- 4:07 säljer hos Ali: +14440 kr (18419 kr)
- 4:08 tjänar pengar till väntar på flaskhalsen för bank2: 18419/18459 kr → printar kolfiberstol (13718 kr) (18419 kr)
- 4:15 gå till skrivaren (33 m) (18419 kr)
- 4:16 printar Kolfiberstol (18419 kr)
- 4:24 tar ut 1 st ur skrivaren (18419 kr)
- 4:31 gå till Ali (33 m) (18419 kr)
- 4:31 öppnar Alis butik – sälja (18419 kr)
- 4:32 säljer hos Ali: +13718 kr (32137 kr)
- 4:34 tjänar pengar till väntar på flaskhalsen för bank2: 32137/32177 kr → printar kolfiberstol (13032 kr) (32137 kr)
- 4:41 gå till skrivaren (33 m) (32137 kr)
- 4:42 printar Kolfiberstol (32137 kr)
- 4:50 tar ut 1 st ur skrivaren (32137 kr)
- 4:57 gå till Ali (33 m) (32137 kr)
- 4:57 öppnar Alis butik – sälja (32137 kr)
- 4:58 säljer hos Ali: +13032 kr (45169 kr)
- 5:00 tjänar pengar till väntar på flaskhalsen för bank2: 45169/45209 kr → printar kolfiberstol (12380 kr) (45169 kr)
- 5:07 gå till skrivaren (33 m) (45169 kr)
- 5:09 printar Kolfiberstol (45169 kr)
- 5:16 tar ut 1 st ur skrivaren (45169 kr)
- 5:23 gå till Ali (33 m) (45169 kr)
- 5:23 öppnar Alis butik – sälja (45169 kr)
- 5:25 säljer hos Ali: +12380 kr (57549 kr)
- 5:26 tjänar pengar till väntar på flaskhalsen för bank2: 57549/57589 kr → printar kolfiberstol (11761 kr) (57549 kr)
- 5:33 gå till skrivaren (33 m) (57549 kr)
- 5:35 printar Kolfiberstol (57549 kr)
- 5:42 tar ut 1 st ur skrivaren (57549 kr)
- 5:49 gå till Ali (33 m) (57549 kr)
- 5:49 öppnar Alis butik – sälja (57549 kr)
- 5:51 säljer hos Ali: +11761 kr (69310 kr)
- 5:52 tjänar pengar till väntar på flaskhalsen för bank2: 69310/69350 kr → printar kolfiberstol (11200 kr) (69310 kr)
- 5:52 väntar på kolfiber från bandet (69310 kr)
- 6:00 väntar på kolfiber från bandet (69310 kr)
- 6:08 väntar på kolfiber från bandet (69310 kr)
- 6:16 väntar på kolfiber från bandet (69310 kr)
- 6:24 väntar på kolfiber från bandet (69310 kr)
- 6:32 väntar på kolfiber från bandet (69310 kr)
- 6:40 väntar på kolfiber från bandet (69310 kr)
- 6:48 väntar på kolfiber från bandet (69310 kr)
- 6:56 väntar på kolfiber från bandet (69310 kr)
- 7:04 väntar på kolfiber från bandet (69310 kr)
- 7:12 väntar på kolfiber från bandet (69310 kr)
- 7:20 väntar på kolfiber från bandet (69310 kr)
- 7:28 väntar på kolfiber från bandet (69310 kr)
- 7:36 väntar på kolfiber från bandet (69310 kr)
- 7:44 väntar på kolfiber från bandet (69310 kr)
- 7:52 väntar på kolfiber från bandet (69310 kr)
- 8:00 väntar på kolfiber från bandet (69310 kr)
- 8:08 väntar på kolfiber från bandet (69310 kr)
- 8:16 väntar på kolfiber från bandet (69310 kr)
- 8:24 väntar på kolfiber från bandet (69310 kr)
- 8:32 väntar på kolfiber från bandet (69310 kr)
- 8:40 väntar på kolfiber från bandet (69310 kr)
- 8:48 väntar på kolfiber från bandet (69310 kr)
- 8:56 väntar på kolfiber från bandet (69310 kr)
- 9:04 väntar på kolfiber från bandet (69310 kr)
- 9:12 väntar på kolfiber från bandet (69310 kr)
- 9:20 väntar på kolfiber från bandet (69310 kr)
- 9:28 väntar på kolfiber från bandet (69310 kr)
- 9:36 väntar på kolfiber från bandet (69310 kr)
- 9:44 väntar på kolfiber från bandet (69310 kr)
- 9:52 väntar på kolfiber från bandet (69310 kr)
- 9:52 kolfiberstol gick inte att printa – tar nästa (69310 kr)
- 9:52 öppnar Alis butik – sälja (69310 kr)
- 9:55 tjänar pengar till väntar på flaskhalsen för bank2: 69310/69350 kr → printar cykelhjälm i petg (1397 kr) (69310 kr)
- 10:01 gå till skrivaren (29 m) (69310 kr)
- 10:02 printar Cykelhjälm i PETG (69310 kr)
- 10:08 tar ut 1 st ur skrivaren (69310 kr)
- 10:14 gå till Ali (29 m) (69310 kr)
- 10:14 öppnar Alis butik – sälja (69310 kr)
- 10:15 säljer hos Ali: +1397 kr (70707 kr)
- 10:17 öppnar Alis butik – köpa batteribank (70707 kr)
- 10:20 köper bank för 1600 kr (69107 kr)
- 10:25 gå till skrivaren (23 m) (69107 kr)
- 10:27 printar Batteribank (2 delar) (69107 kr)
- 10:31 tar ut 1 st ur skrivaren (69107 kr)
- 10:37 gå till platsen för batteribank (26 m) (69107 kr)
- 10:38 ställer ut batteribank (69107 kr)
- 10:46 gå till sängen (21 m) (69107 kr)

</details>

## Dag 13

| Tid | Källa | Vem | Text |
|---|---|---|---|
| 10:48 | vara | ali | n2_vas |
| 10:48 | händelse | malKlart | id=sov12 del=Dag 12 – Kolfiberskrivaren nasta=f13-bygg-gamingboden |
| 10:48 | scenInfo | rolf | Rolf på kaffe |
| 10:48 | MÅL |  | Bygg gamingboden |
| 0:01 | händelse | dagenBorjar | dag=13 |
| 0:01 | meddelande | du | Dag 13. 9 dagar till jul. Utan ett eget rum är det bara ett skjul. |
| 0:01 | dagbokkort | du | Gamingboden · Dag 13. 9 dagar till jul. Utan ett eget rum är det bara ett skjul. |
| 0:01 | röst | du | Dag 13. 9 dagar till jul. Gamingboden. Utan ett eget rum är det bara ett skjul. · STORY |
| 0:08 | händelse | morgonkortStangt | dag=13 |
| 0:08 | paket |  | sms |
| 0:08 | väntar | ali | Ali här. 🚀 Jetmotor. Med efterbrännare. Till en KVARN. Jag vet inte varför. Jag kunde inte sluta rita. Min fru frågade om jag mår bra. Jag har aldrig mått bättre. Ring inte brandkåren. |
| 0:08 | struken | kedja | d13 |
| 0:08 | väntar | du | En bod för spel. Jag förtjänar det. |
| 0:08 | målruta |  | Bygg gamingboden |
| 0:09 | väntar | notis:2 paket i natt · +1 990 kr | 2 paket i natt · +1 990 kr |
| 0:10 | väntar | notis:Designvas i röd PETG · +50 % | Designvas i röd PETG · +50 % |
| 0:14 | sak | du | En bod för spel. Jag förtjänar det. |
| 0:14 | pil |  | Bygg gamingboden |
| 0:14 | notis | tanke | 💭 En bod för spel. Jag förtjänar det. |
| 0:14 | röst | du | En bod för spel. Jag förtjänar det. · MÅL |
| 0:17 | klar | du | En bod för spel. Jag förtjänar det. |
| 0:18 | väntar | info:info | Pappa kommer gående. Han bär på en kasse … |
| 0:18 | scenInfo | pappa | Pappa kommer |
| 0:19 | struken | notis:🌇 Klockan är 21. Ali slår igen luckan.  | 🌇 Klockan är 21. Ali slår igen luckan. Dagens jobb är klart – gå in i skjulet och sov i sängen. |
| 0:19 | sak | notis:2 paket i natt · +1 990 kr | 2 paket i natt · +1 990 kr |
| 0:19 | notis |  | 2 paket i natt · +1 990 kr |
| 0:21 | klar | notis:2 paket i natt · +1 990 kr | 2 paket i natt · +1 990 kr |
| 0:23 | sak | notis:Designvas i röd PETG · +50 % | Designvas i röd PETG · +50 % |
| 0:23 | notis |  | Designvas i röd PETG · +50 % |
| 0:24 | röst | ali | Förut drev jag butiken. Nu bygger jag något. Det är skillnad. Du lärde mig det. Säg inget. Det blir pinsamt. · STORY |
| 0:24 | butiksbubbla | ali | Förut drev jag butiken. Nu bygger jag något. Det är skillnad. Du lärde mig det. Säg inget. Det blir pinsamt. |
| 0:25 | skratt | du | Alis dyr-pling |
| 0:25 | toast | guld | 3D-modell köpt – printa gamingbod (tillbyggnad) på skrivaren |
| 0:25 | händelse | kopt | sak=gamingbod |
| 0:26 | klar | notis:Designvas i röd PETG · +50 % | Designvas i röd PETG · +50 % |
| 0:29 | struken | bror | Visade bilder på ditt skjul för polarna. Dom trodde det var en Airbnb. Jag sa inte emot. |
| 0:29 | struken | mamma | Jag sa till pappa att du bor på en soptipp. Han sa "aha, vad lugnt då" och satte på Formel 1. Lugnt? |
| 0:31 | struken | info:info | Pappa kommer gående. Han bär på en kasse … |
| 0:33 | händelse | printStart | sak=byggsats:gamingbod |
| 0:36 | toast | bra | Del 1 av 6 klar |
| 0:40 | toast | bra | Del 2 av 6 klar |
| 0:43 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 0:43 | väntar | notis:Skrivare L: Tornet är tomt – mal mer så  | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 0:50 | sak | notis:Skrivare L: Tornet är tomt – mal mer så  | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 0:50 | notis | fel | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 0:51 | toast | bra | Del 3 av 6 klar |
| 0:52 | klar | notis:Skrivare L: Tornet är tomt – mal mer så  | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 0:52 | ljud | kajsa | Mjau |
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
| 1:02 | händelse | printKlar | sak=byggsats:gamingbod n=1 |
| 1:02 | toast | guld | ✅ |
| 1:09 | händelse | tagitUrPrint | sak=byggsats:gamingbod n=1 |
| 1:13 | väntar | info:guld | Gamingboden står klar! Det är ett tomt skal – inred den, flytta in grejerna och bygg ut den. |
| 1:13 | sak | info:guld | Gamingboden står klar! Det är ett tomt skal – inred den, flytta in grejerna och bygg ut den. |
| 1:13 | kvitto-visas | info:guld | Gamingboden står klar! Det är ett tomt skal – inred den, flytta in grejerna och bygg ut den. |
| 1:13 | toast | guld | Gamingboden står klar! Det är ett tomt skal – inred den, flytta in grejerna och bygg ut den. |
| 1:13 | händelse | malKlart | id=f13-bygg-gamingboden del=Dag 13 – Gamingboden nasta=f13-stall-in-gamersak |
| 1:13 | väntar | du | Boden är tom. Något att spela på. |
| 1:13 | MÅL |  | Ställ in en gamersak i boden |
| 1:15 | klar | info:guld | Gamingboden står klar! Det är ett tomt skal – inred den, flytta in grejerna och bygg ut den. |
| 1:15 | målruta |  | Ställ in en gamersak i boden |
| 1:15 | väntar | notis:📔 Prestation: Städtokig · +3 respekt | 📔 Prestation: Städtokig · +3 respekt |
| 1:17 | kvittens-bock |  | ✓ Bygg gamingboden |
| 1:17 | sak | du | Boden är tom. Något att spela på. |
| 1:17 | pil |  | Ställ in en gamersak i boden |
| 1:17 | notis | tanke | 💭 Boden är tom. Något att spela på. |
| 1:17 | röst | du | Boden är tom. Något att spela på. · MÅL |
| 1:17 | nick |  | nick:97 |
| 1:20 | klar | du | Boden är tom. Något att spela på. |
| 1:29 | sak | notis:📔 Prestation: Städtokig · +3 respekt | 📔 Prestation: Städtokig · +3 respekt |
| 1:29 | notis |  | 📔 Prestation: Städtokig · +3 respekt |
| 1:31 | skratt | du | falsk tuta |
| 1:31 | väntar | foto | Boden |
| 1:31 | paket |  | tanke |
| 1:31 | tanke | du | Min egen bod. Här är det ingen som tjatar. |
| 1:31 | väntar | du | Min egen bod. Här är det ingen som tjatar. |
| 1:31 | klar | notis:📔 Prestation: Städtokig · +3 respekt | 📔 Prestation: Städtokig · +3 respekt |
| 1:34 | händelse | printStart | sak=kyl |
| 1:34 | skratt | du | Kajsa i skrivaren |
| 1:39 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 1:39 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 1:41 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 1:41 | sak | foto | Boden |
| 1:41 | foto | du | Boden |
| 1:42 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 1:43 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 1:44 | klar | foto | Boden |
| 1:44 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 1:45 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 1:46 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 1:46 | skratt | du | däcket rullar iväg |
| 1:46 | poolTom | du | 4 repliker använda |
| 1:47 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 1:48 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 1:48 | skratt | du | kvarnen spottar |
| 1:49 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 1:50 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 1:50 | struken | notis | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 1:51 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 1:51 | struken | notis | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 1:51 | toast | guld | ✅ |
| 1:51 | händelse | printKlar | sak=kyl n=1 |
| 1:52 | sak | du | Min egen bod. Här är det ingen som tjatar. |
| 1:52 | notis | tanke | 💭 Min egen bod. Här är det ingen som tjatar. |
| 1:52 | röst | du | Min egen bod. Här är det ingen som tjatar. · STORY |
| 1:55 | klar | du | Min egen bod. Här är det ingen som tjatar. |
| 2:03 | väntar | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått kolfiberskrivare. Och slangfördelare. Mer säger jag inte. Gunnar vet. |
| 2:03 | radio | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått kolfiberskrivare. Och slangfördelare. Mer säger jag inte. Gunnar vet. |
| 2:03 | skratt | du | Radio-Kjelle |
| 2:04 | sak | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått kolfiberskrivare. Och slangfördelare. Mer säger jag inte. Gunnar vet. |
| 2:04 | notis |  | 📻 Radio Tippen: Radio Tippen, Kjelle här. Skjulet vid tippen har fått kolfiberskrivare. Och slangfördelare. Mer säger jag inte. Gunnar vet. |
| 2:04 | röst | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått kolfiberskrivare. Och slangfördelare. Mer säger jag inte. Gunnar vet. · REAKTION |
| 2:06 | händelse | tagitUrPrint | sak=kyl n=1 |
| 2:09 | väntar | bror | Mamma har gjort lingonsylt i tre dagar. Hela köket är rött. Hon säger att det är till dig. Lycka till. |
| 2:12 | händelse | placerat | sak=kyl |
| 2:12 | händelse | malKlart | id=f13-stall-in-gamersak del=Dag 13 – Gamingboden nasta=sov13 |
| 2:12 | paket |  | lapp |
| 2:12 | väntar | du | Dag 13 är slut. Kvarnen är för långsam. |
| 2:12 | MÅL |  | Klart för idag – sov när du vill |
| 2:15 | klar | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått kolfiberskrivare. Och slangfördelare. Mer säger jag inte. Gunnar vet. |
| 2:16 | målruta |  | Klart för idag – sov när du vill |
| 2:16 | kvittens-bock |  | ✓ Ställ in en gamersak i boden |
| 2:17 | sak | du | (nytt mål i rutan) |
| 2:17 | pil |  | Klart för idag – sov när du vill |
| 2:17 | klar | du | (nytt mål i rutan) |
| 2:19 | väntar | notis:🌇 Klockan är 21. Ali slår igen luckan.  | 🌇 Klockan är 21. Ali slår igen luckan. Dagens jobb är klart – gå in i skjulet och sov i sängen. |
| 2:23 | nattkort | du | 🌙 Dag 13 är slut. God natt. zzz… Kvarnen är för långsam. DAGENS PRINTAR Minikylskåp × 1 Totalt 1 print 💰 Tjänat i dag +0 kr |

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
- 1:02 gå till kvarnen (15 m) (30097 kr)
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
- 2:21 gå till sängen (10 m) (30097 kr)

</details>

## Dag 14

| Tid | Källa | Vem | Text |
|---|---|---|---|
| 2:23 | vara | ali | n2_hjalm |
| 2:23 | händelse | malKlart | id=sov13 del=Dag 13 – Gamingboden nasta=jet14 |
| 2:23 | MÅL |  | Montera jetmotorn på kolfiberkvarnen |
| 0:00 | väntar | info:guld | Täppan är rensad. Ali har spaljé och droppslang i röd PETG. |
| 0:00 | väntar | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått minikylskåp. Skriv in, Gunnar. Du skriver aldrig in. |
| 0:00 | radio | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått minikylskåp. Skriv in, Gunnar. Du skriver aldrig in. |
| 0:00 | skratt | du | Radio-Kjelle |
| 0:01 | händelse | dagenBorjar | dag=14 |
| 0:01 | meddelande | du | Dag 14. 8 dagar till jul. Går kvarnen så här långsamt hinner jag inte till jul. |
| 0:01 | dagbokkort | du | Jetmotorn · Dag 14. 8 dagar till jul. Går kvarnen så här långsamt hinner jag inte till jul. |
| 0:01 | röst | du | Dag 14. 8 dagar till jul. Jetmotorn. Går kvarnen så här långsamt hinner jag inte till jul. · STORY |
| 0:09 | händelse | morgonkortStangt | dag=14 |
| 0:09 | struken | kedja | d14 |
| 0:09 | väntar | du | Jetmotorn ska sitta på kolfiberkvarnen. Vad kan gå fel. |
| 0:10 | väntar | notis:Cykelhjälm i PETG · +50 % | Cykelhjälm i PETG · +50 % |
| 0:12 | väntar | mamma | Paketet kom tillbaka. Det står "Okänd mottagare". Är du ens skriven där? Vart ska jag skicka din post? |
| 0:12 | paket |  | lapp → toast |
| 0:12 | lapp | 📔 Dagbok | Dag 14. Mammas paket kom tillbaka: "Okänd mottagare". Det här är mitt hem, men på pappret finns jag inte här. |
| 0:12 | dagbokrad | du | Mammas paket kom tillbaka: "Okänd mottagare". Det här är mitt hem, men på pappret finns jag inte här. |
| 0:12 | väntar | notis:Mammas paket kom tillbaka: "Okänd mottag | Mammas paket kom tillbaka: "Okänd mottagare". Det här är mitt hem, men på pappret finns jag inte här. |
| 0:12 | väntar | notis:💡 Poletten trillar ner: du bor faktiskt | 💡 Poletten trillar ner: du bor faktiskt här. Nytt mål: bli folkbokförd (tavlan vid vägen). |
| 0:13 | struken | info:guld | Täppan är rensad. Ali har spaljé och droppslang i röd PETG. |
| 0:13 | väntar | info:guld | 🚧 Gärdesgården har flyttats ut! Du får utforska ny mark – men bara ställa saker på mark du äger. |
| 0:13 | målruta |  | Montera jetmotorn på kolfiberkvarnen |
| 0:15 | sak | du | Jetmotorn ska sitta på kolfiberkvarnen. Vad kan gå fel. |
| 0:15 | pil |  | Montera jetmotorn på kolfiberkvarnen |
| 0:15 | notis | tanke | 💭 Jetmotorn ska sitta på kolfiberkvarnen. Vad kan gå fel. |
| 0:15 | röst | du | Jetmotorn ska sitta på kolfiberkvarnen. Vad kan gå fel. · MÅL |
| 0:15 | nick |  | nick:99 |
| 0:19 | klar | du | Jetmotorn ska sitta på kolfiberkvarnen. Vad kan gå fel. |
| 0:19 | struken | info:guld | 🚧 Gärdesgården har flyttats ut! Du får utforska ny mark – men bara ställa saker på mark du äger. |
| 0:19 | struken | notis:🌇 Klockan är 21. Ali slår igen luckan.  | 🌇 Klockan är 21. Ali slår igen luckan. Dagens jobb är klart – gå in i skjulet och sov i sängen. |
| 0:19 | struken | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått minikylskåp. Skriv in, Gunnar. Du skriver aldrig in. |
| 0:19 | sak | notis:Cykelhjälm i PETG · +50 % | Cykelhjälm i PETG · +50 % |
| 0:19 | notis |  | Cykelhjälm i PETG · +50 % |
| 0:22 | klar | notis:Cykelhjälm i PETG · +50 % | Cykelhjälm i PETG · +50 % |
| 0:24 | röst | ali | Pension? Glöm det. Jag har en kanal nu. Fyrtiotvå följare. Fyrtiotvå, habibi! · STORY |
| 0:24 | butiksbubbla | ali | Pension? Glöm det. Jag har en kanal nu. Fyrtiotvå följare. Fyrtiotvå, habibi! |
| 0:25 | skratt | du | Alis dyr-pling |
| 0:25 | toast | guld | 3D-modell köpt – printa jetmotor med efterbrännare på skrivaren |
| 0:25 | händelse | kopt | sak=jetmotor |
| 0:27 | struken | notis:Mammas paket kom tillbaka: "Okänd mottag | Mammas paket kom tillbaka: "Okänd mottagare". Det här är mitt hem, men på pappret finns jag inte här. |
| 0:27 | struken | ali | Ali här. 🚀 Jetmotor. Med efterbrännare. Till en KVARN. Jag vet inte varför. Jag kunde inte sluta rita. Min fru frågade om jag mår bra. Jag har aldrig mått bättre. Ring inte brandkåren. |
| 0:27 | struken | bror | Mamma har gjort lingonsylt i tre dagar. Hela köket är rött. Hon säger att det är till dig. Lycka till. |
| 0:35 | händelse | printStart | sak=byggsats:jetmotor |
| 0:37 | toast | bra | Del 1 av 4 klar |
| 0:38 | sak | du | Dag 13 är slut. Kvarnen är för långsam. |
| 0:38 | lapp | 📔 Dagbok | Dag 13 är slut. Kvarnen är för långsam. |
| 0:38 | kvallsrad | du | Kvarnen är för långsam. |
| 0:38 | klar | du | Dag 13 är slut. Kvarnen är för långsam. |
| 0:39 | toast | bra | Del 2 av 4 klar |
| 0:41 | toast | bra | Del 3 av 4 klar |
| 0:41 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 0:47 | sak | mamma | Paketet kom tillbaka. Det står "Okänd mottagare". Är du ens skriven där? Vart ska jag skicka din post? |
| 0:47 | sms | mamma | Paketet kom tillbaka. Det står "Okänd mottagare". Är du ens skriven där? Vart ska jag skicka din post? |
| 0:47 | sms-bubbla | mamma | Paketet kom tillbaka. Det står "Okänd mottagare". Är du ens skriven där? Vart ska jag skicka din post? |
| 0:47 | röst | mamma | Paketet kom tillbaka. Det står "Okänd mottagare". Är du ens skriven där? Vart ska jag skicka din post? · STORY |
| 0:55 | klar | mamma | Paketet kom tillbaka. Det står "Okänd mottagare". Är du ens skriven där? Vart ska jag skicka din post? |
| 1:03 | sak | notis:💡 Poletten trillar ner: du bor faktiskt | 💡 Poletten trillar ner: du bor faktiskt här. Nytt mål: bli folkbokförd (tavlan vid vägen). |
| 1:03 | toast | guld | 💡 Poletten trillar ner: du bor faktiskt här. Nytt mål: bli folkbokförd (tavlan vid vägen). |
| 1:03 | notis | guld | 💡 Poletten trillar ner: du bor faktiskt här. Nytt mål: bli folkbokförd (tavlan vid vägen). |
| 1:06 | klar | notis:💡 Poletten trillar ner: du bor faktiskt | 💡 Poletten trillar ner: du bor faktiskt här. Nytt mål: bli folkbokförd (tavlan vid vägen). |
| 1:21 | poolTom | du | 4 repliker använda |
| 1:23 | skratt | du | däcket rullar iväg |
| 1:30 | skratt | du | falsk tuta |
| 1:30 | väntar | värld:TUUT TUUT! | TUUT TUUT! |
| 1:30 | sak | värld:TUUT TUUT! | TUUT TUUT! |
| 1:30 | bubbla |  | TUUT TUUT! |
| 1:33 | klar | värld:TUUT TUUT! | TUUT TUUT! |
| 1:36 | händelse | printKlar | sak=byggsats:jetmotor n=1 |
| 1:36 | toast | guld | ✅ |
| 1:45 | händelse | tagitUrPrint | sak=byggsats:jetmotor n=1 |
| 1:45 | paket |  | sms |
| 1:45 | väntar | ali | Ali här. Du printade Jetmotor med efterbrännare från min ritning. Och det FUNKAR? Jag har bara sett sånt på YouTube. |
| 1:46 | händelse | placerat | sak=jetmotor |
| 1:46 | väntar | info:guld | 🚀 JETMOTOR! Kolfiberkvarnen mal 6× snabbare. |
| 1:46 | sak | info:guld | 🚀 JETMOTOR! Kolfiberkvarnen mal 6× snabbare. |
| 1:46 | kvitto-visas | info:guld | 🚀 JETMOTOR! Kolfiberkvarnen mal 6× snabbare. |
| 1:46 | toast | guld | 🚀 JETMOTOR! Kolfiberkvarnen mal 6× snabbare. |
| 1:46 | händelse | malKlart | id=jet14 del=Dag 14 – Jetmotorn nasta=f14-bygg-leveransladan |
| 1:46 | väntar | bror | Mamma har ringt Skatteverket. Två gånger. De sa att du måste äga där du bor eller ha ett kontrakt. Hon frågade om de kunde göra ett undantag "för det är ju mitt barn". De kunde inte. |
| 1:46 | väntar | du | En leveranslåda. Då säljer fabriken själv. |
| 1:46 | MÅL |  | Bygg leveranslådan |
| 1:48 | klar | info:guld | 🚀 JETMOTOR! Kolfiberkvarnen mal 6× snabbare. |
| 1:50 | målruta |  | Bygg leveranslådan |
| 1:50 | kvittens-bock |  | ✓ Montera jetmotorn på kolfiberkvarnen |
| 1:50 | sak | du | En leveranslåda. Då säljer fabriken själv. |
| 1:50 | pil |  | Bygg leveranslådan |
| 1:50 | notis | tanke | 💭 En leveranslåda. Då säljer fabriken själv. |
| 1:50 | röst | du | En leveranslåda. Då säljer fabriken själv. · MÅL |
| 1:51 | nick |  | nick:100 |
| 1:52 | paket |  | tanke |
| 1:52 | tanke | du | Raggsockorna runt jetmotorn. Äntligen passar de nåt. |
| 1:52 | väntar | du | Raggsockorna runt jetmotorn. Äntligen passar de nåt. |
| 1:52 | skratt | du | raggsockorna |
| 1:54 | klar | du | En leveranslåda. Då säljer fabriken själv. |
| 2:02 | skratt | du | kvarnen rapar |
| 2:02 | sak | bror | Mamma har ringt Skatteverket. Två gånger. De sa att du måste äga där du bor eller ha ett kontrakt. Hon frågade om de kunde göra ett undantag "för det är ju mitt barn". De kunde inte. |
| 2:02 | sms | bror | Mamma har ringt Skatteverket. Två gånger. De sa att du måste äga där du bor eller ha ett kontrakt. Hon frågade om de kunde göra ett undantag "för det är ju mitt barn". De kunde inte. |
| 2:02 | sms-bubbla | bror | Mamma har ringt Skatteverket. Två gånger. De sa att du måste äga där du bor eller ha ett kontrakt. Hon frågade om de kunde göra ett undantag "för det är ju mitt barn". De kunde inte. |
| 2:02 | röst | bror | Mamma har ringt Skatteverket. Två gånger. De sa att du måste äga där du bor eller ha ett kontrakt. Hon frågade om de kunde göra ett undantag "för det är ju mitt barn". De kunde inte. · STORY |
| 2:06 | toast | guld | 🧵 |
| 2:08 | händelse | printStart | sak=n2_hjalm |
| 2:12 | toast | guld | ✅ |
| 2:12 | händelse | printKlar | sak=n2_hjalm n=16 |
| 2:13 | händelse | tagitUrPrint | sak=n2_hjalm n=1 |
| 2:16 | händelse | printStart | sak=kruka |
| 2:17 | skratt | du | kvarnen spottar |
| 2:18 | klar | bror | Mamma har ringt Skatteverket. Två gånger. De sa att du måste äga där du bor eller ha ett kontrakt. Hon frågade om de kunde göra ett undantag "för det är ju mitt barn". De kunde inte. |
| 2:18 | toast | guld | ✅ |
| 2:18 | händelse | printKlar | sak=kruka n=60 |
| 2:18 | händelse | tagitUrPrint | sak=kruka n=1 |
| 2:20 | struken | ali | Ali här. Du printade Jetmotor med efterbrännare från min ritning. Och det FUNKAR? Jag har bara sett sånt på YouTube. |
| 2:20 | struken | du | Raggsockorna runt jetmotorn. Äntligen passar de nåt. |
| 2:22 | väntar | värld:Mjau. | Mjau. |
| 2:26 | sak | värld:Mjau. | Mjau. |
| 2:26 | bubbla |  | Mjau. |
| 2:27 | skratt | du | kvarnen rapar |
| 2:28 | klar | värld:Mjau. | Mjau. |
| 2:28 | toast | guld | 🧵 |
| 2:28 | väntar | rolf | Rolfs Rockers spelade en gång i Folkets park i Hudiksvall. 14 pers. 3 dansade. Bästa kvällen i mitt liv. /R |
| 2:30 | händelse | printStart | sak=n2_hjalm |
| 2:33 | väntar | info:fel | Göran snodde blomkruka. |
| 2:33 | sak | info:fel | Göran snodde blomkruka. |
| 2:33 | kvitto-visas | info:fel | Göran snodde blomkruka. |
| 2:33 | toast | fel | Göran snodde blomkruka. |
| 2:34 | skratt | du | plastspagetti |
| 2:34 | toast | guld | ✅ |
| 2:34 | händelse | printKlar | sak=n2_hjalm n=17 |
| 2:35 | klar | info:fel | Göran snodde blomkruka. |
| 2:35 | händelse | tagitUrPrint | sak=spagetti n=1 |
| 2:37 | händelse | printStart | sak=n2_hjalm |
| 2:41 | toast | guld | ✅ |
| 2:41 | händelse | printKlar | sak=n2_hjalm n=18 |
| 2:42 | händelse | tagitUrPrint | sak=n2_hjalm n=1 |
| 2:56 | webb | du | packade 1 n2_hjalm |
| 3:11 | väntar | info:bra | 📦 Paketet till Majvor i Nässjö ligger i postlådan – Rolf tar det till posten |
| 3:11 | sak | info:bra | 📦 Paketet till Majvor i Nässjö ligger i postlådan – Rolf tar det till posten |
| 3:11 | kvitto-visas | info:bra | 📦 Paketet till Majvor i Nässjö ligger i postlådan – Rolf tar det till posten |
| 3:11 | toast | bra | 📦 Paketet till Majvor i Nässjö ligger i postlådan – Rolf tar det till posten |
| 3:13 | klar | info:bra | 📦 Paketet till Majvor i Nässjö ligger i postlådan – Rolf tar det till posten |
| 3:16 | händelse | printStart | sak=n3_stol |
| 3:23 | poolTom | du | 4 repliker använda |
| 3:23 | toast | guld | ✅ |
| 3:23 | händelse | printKlar | sak=n3_stol n=8 |
| 3:23 | händelse | tagitUrPrint | sak=n3_stol n=1 |
| 3:25 | väntar | värld:TUUT TUUT! | TUUT TUUT! |
| 3:25 | sak | värld:TUUT TUUT! | TUUT TUUT! |
| 3:25 | bubbla |  | TUUT TUUT! |
| 3:28 | klar | värld:TUUT TUUT! | TUUT TUUT! |
| 3:32 | aliSalt | ali | 16000 |
| 3:32 | skratt | du | Ali köper konst |
| 3:32 | aliSalt | ali | 3 |
| 3:35 | skratt | du | Alis dyr-pling |
| 3:35 | toast | guld | 3D-modell köpt – printa leveranslåda + autoprint på skrivaren |
| 3:35 | händelse | kopt | sak=utlada |
| 3:43 | händelse | printStart | sak=byggsats:utlada |
| 3:45 | toast | bra | Del 1 av 3 klar |
| 3:48 | toast | bra | Del 2 av 3 klar |
| 3:51 | händelse | printKlar | sak=byggsats:utlada n=1 |
| 3:51 | toast | guld | ✅ |
| 3:51 | väntar | info:guld | Leveranslåda + autoprint ligger i handen |
| 3:51 | händelse | tagitUrPrint | sak=byggsats:utlada n=1 |
| 3:51 | sak | info:guld | Leveranslåda + autoprint ligger i handen |
| 3:51 | kvitto-visas | info:guld | Leveranslåda + autoprint ligger i handen |
| 3:51 | toast | guld | Leveranslåda + autoprint ligger i handen |
| 3:53 | klar | info:guld | Leveranslåda + autoprint ligger i handen |
| 3:57 | händelse | placerat | sak=leveranslada |
| 3:57 | väntar | info:guld | Leveranslådan är på – skrivarna printar vidare av sig själva. |
| 3:57 | struken | info:guld | Leveranslådan är på – skrivarna printar vidare av sig själva. |
| 3:57 | väntar | info:guld | Leveranslådan står vid skrivaren. Välj en sak på skrivaren och slå på Autoprint – Ali hämtar lådan varje morgon. |
| 3:57 | monterat | du | byggsats:utlada |
| 3:57 | händelse | monterat | sak=utlada |
| 3:57 | sak | info:guld | Leveranslådan står vid skrivaren. Välj en sak på skrivaren och slå på Autoprint – Ali hämtar lådan varje morgon. |
| 3:57 | kvitto-visas | info:guld | Leveranslådan står vid skrivaren. Välj en sak på skrivaren och slå på Autoprint – Ali hämtar lådan varje morgon. |
| 3:57 | toast | guld | Leveranslådan står vid skrivaren. Välj en sak på skrivaren och slå på Autoprint – Ali hämtar lådan varje morgon. |
| 3:57 | händelse | malKlart | id=f14-bygg-leveransladan del=Dag 14 – Jetmotorn nasta=f14-kop-mutor-rolf |
| 3:57 | väntar | du | Rolf tippar mer om han får bullar. Ali har bullar. |
| 3:57 | MÅL |  | Köp mutor till Rolf hos Ali |
| 3:59 | klar | info:guld | Leveranslådan står vid skrivaren. Välj en sak på skrivaren och slå på Autoprint – Ali hämtar lådan varje morgon. |
| 3:59 | målruta |  | Köp mutor till Rolf hos Ali |
| 4:01 | kvittens-bock |  | ✓ Bygg leveranslådan |
| 4:01 | sak | du | Rolf tippar mer om han får bullar. Ali har bullar. |
| 4:01 | pil |  | Köp mutor till Rolf hos Ali |
| 4:01 | notis | tanke | 💭 Rolf tippar mer om han får bullar. Ali har bullar. |
| 4:01 | röst | du | Rolf tippar mer om han får bullar. Ali har bullar. · MÅL |
| 4:05 | klar | du | Rolf tippar mer om han får bullar. Ali har bullar. |
| 4:08 | väntar | bud | (tips) |
| 4:08 | sak | bud | (tips) |
| 4:09 | klar | bud | (tips) |
| 4:11 | meddelande | bror | En GAMINGBOD?! Jag bor i en etta med mögel. Kan jag flytta in? Skämtar. Typ. |
| 4:13 | röst | bror | En GAMINGBOD?! Jag bor i en etta med mögel. Kan jag flytta in? Skämtar. Typ. · STORY |
| 4:22 | paket |  | sms |
| 4:22 | väntar | bror | Seriöst? … Nej. Mamma skulle aldrig sluta prata om det. Men tack. |
| 4:31 | händelse | brevLast | id=b_bod |
| 4:34 | toast | guld | Mutor till Rolf nivå 1: En kall bira å en femtiolapp. Rolf tippar mer: 3 skräp extra varje gång |
| 4:34 | händelse | kopt | sak=sopbil |
| 4:34 | röst | ali | Trimmad. Snabbare än min pappa någonsin var. · STORY |
| 4:34 | butiksbubbla | ali | Trimmad. Snabbare än min pappa någonsin var. |
| 4:35 | händelse | malKlart | id=f14-kop-mutor-rolf del=Dag 14 – Jetmotorn nasta=sov14 |
| 4:35 | paket |  | lapp |
| 4:35 | väntar | du | Dag 14 är slut. Skjulet är fortfarande ett skjul. |
| 4:35 | MÅL |  | Klart för idag – sov när du vill |
| 4:36 | sak | du | (nytt mål i rutan) |
| 4:36 | målruta |  | Klart för idag – sov när du vill |
| 4:36 | pil |  | Klart för idag – sov när du vill |
| 4:36 | klar | du | (nytt mål i rutan) |
| 4:39 | kvittens-bock |  | ✓ Köp mutor till Rolf hos Ali |
| 4:45 | webbBetalt | du | 1830 |
| 4:45 | nattkort | du | 🌙 Dag 14 är slut. God natt. zzz… Kvarnen är för långsam. DAGENS PRINTAR Cykelhjälm i PETG × 3 Blomkruka × 1 Kolfiberstol × 1 Totalt 5 printar 💰 Tjänat i dag + |

<details><summary>Botens handlingar dag 14</summary>

- 0:00 — dag 14 börjar — (30097 kr)
- 0:09 popup: "FORTSÄTT" (30097 kr)
- 0:24 gå till Ali (20 m) (30097 kr)
- 0:24 öppnar Alis butik – köpa jetmotor med efterbrännare (30097 kr)
- 0:26 köper jetmotor för 16000 kr (14097 kr)
- 0:34 gå till skrivaren (33 m) (14097 kr)
- 0:35 printar Jetmotor med efterbrännare (4 delar) (14097 kr)
- 0:41 väntar på kolfiber från bandet (14097 kr)
- 0:49 väntar på kolfiber från bandet (14097 kr)
- 0:57 väntar på kolfiber från bandet (14097 kr)
- 1:05 väntar på kolfiber från bandet (14097 kr)
- 1:13 väntar på kolfiber från bandet (14097 kr)
- 1:21 väntar på kolfiber från bandet (14097 kr)
- 1:29 väntar på kolfiber från bandet (14097 kr)
- 1:37 väntar på kolfiber från bandet (14097 kr)
- 1:46 tar ut 1 st ur skrivaren (14097 kr)
- 1:46 gå till kolfiberkvarnen (3 m) (14097 kr)
- 1:59 gå till en tunna (14 m) (14097 kr)
- 2:02 gå till PETG-kvarnen (9 m) (14097 kr)
- 2:02 tömmer det tunga i PETG-kvarnen (14097 kr)
- 2:07 gå till skrivaren (4 m) (14097 kr)
- 2:08 printar Cykelhjälm i PETG (14097 kr)
- 2:14 tar ut 1 st ur skrivaren (14097 kr)
- 2:15 gå till skrivaren (6 m) (14097 kr)
- 2:16 printar Blomkruka (14097 kr)
- 2:19 tar ut 1 st ur skrivaren (14097 kr)
- 2:23 gå till en tunna (19 m) (14097 kr)
- 2:27 gå till PETG-kvarnen (13 m) (14097 kr)
- 2:27 tömmer det tunga i PETG-kvarnen (14097 kr)
- 2:28 gå till skrivaren (4 m) (14097 kr)
- 2:30 printar Cykelhjälm i PETG (14097 kr)
- 2:35 tar ut 1 st ur skrivaren (14097 kr)
- 2:37 printar Cykelhjälm i PETG (14097 kr)
- 2:42 tar ut 1 st ur skrivaren (14097 kr)
- 2:47 gå till datorn (23 m) (14097 kr)
- 2:55 panel: "Webbshopen · Soptippsvägen 1
B" (14097 kr)
- 3:04 panel: "Webbshopen · Soptippsvägen 1
B" (14097 kr)
- 3:11 gå till Rolfs postlåda (paket) (29 m) (14097 kr)
- 3:12 webbshop: 1 paket i postlådan (14097 kr)
- 3:12 tjänar pengar till leveranslåda + autoprint: 14097/18500 kr → printar kolfiberstol (16000 kr) (14097 kr)
- 3:15 gå till skrivaren (15 m) (14097 kr)
- 3:16 printar Kolfiberstol (14097 kr)
- 3:24 tar ut 1 st ur skrivaren (14097 kr)
- 3:31 gå till Ali (34 m) (14097 kr)
- 3:31 öppnar Alis butik – sälja (14097 kr)
- 3:33 säljer hos Ali: +16003 kr (30100 kr)
- 3:33 öppnar Alis butik – köpa leveranslåda + autoprint (30100 kr)
- 3:36 köper utlada för 18500 kr (11600 kr)
- 3:41 gå till skrivaren (23 m) (11600 kr)
- 3:43 printar Leveranslåda + autoprint (3 delar) (11600 kr)
- 3:52 tar ut 1 st ur skrivaren (11600 kr)
- 3:57 gå till bygg leveranslådan (7 m) (11600 kr)
- 4:22 popup: "Klart du får." (11600 kr)
- 4:31 popup: "Läst" (11600 kr)
- 4:32 gå till Ali (29 m) (11600 kr)
- 4:32 öppnar Alis butik – bjuda Rolf på fika (11600 kr)
- 4:42 gå till sängen (20 m) (11350 kr)

</details>

## Dag 15

| Tid | Källa | Vem | Text |
|---|---|---|---|
| 4:45 | vara | ali | n2_vas |
| 4:45 | händelse | malKlart | id=sov14 del=Dag 14 – Jetmotorn nasta=f15-bygg-gamingboden |
| 4:45 | händelse | malKlart | id=f15-bygg-gamingboden del=Dag 15 – Fristaden nasta=gamer |
| 4:45 | MÅL |  | Inred boden · 1/3 gamersaker |
| 0:01 | händelse | dagenBorjar | dag=15 |
| 0:01 | meddelande | du | Dag 15. 7 dagar till jul. Utan adress finns jag inte på riktigt. |
| 0:01 | dagbokkort | du | Fristaden · Dag 15. 7 dagar till jul. Utan adress finns jag inte på riktigt. |
| 0:01 | röst | du | Dag 15. 7 dagar till jul. Fristaden. Utan adress finns jag inte på riktigt. · STORY |
| 0:03 | paket |  | sms |
| 0:03 | väntar | rolf | Ja har skrivit nåt. Med blyerts, så ja kan sudda om de blir fel. Lådan. /R |
| 0:08 | händelse | morgonkortStangt | dag=15 |
| 0:08 | struken | kedja | d15 |
| 0:08 | väntar | du | Boden ska vara full. Tre saker. |
| 0:09 | väntar | notis:1 paket i natt · +1 830 kr | 1 paket i natt · +1 830 kr |
| 0:10 | väntar | notis:Designvas i röd PETG · +50 % | Designvas i röd PETG · +50 % |
| 0:12 | målruta |  | Inred boden · 1/3 gamersaker |
| 0:14 | sak | du | Boden ska vara full. Tre saker. |
| 0:14 | pil |  | Inred boden · 1/3 gamersaker |
| 0:14 | notis | tanke | 💭 Boden ska vara full. Tre saker. |
| 0:14 | röst | du | Boden ska vara full. Tre saker. · MÅL |
| 0:14 | nick |  | nick:104 |
| 0:16 | klar | du | Boden ska vara full. Tre saker. |
| 0:18 | sak | notis:1 paket i natt · +1 830 kr | 1 paket i natt · +1 830 kr |
| 0:18 | notis |  | 1 paket i natt · +1 830 kr |
| 0:21 | klar | notis:1 paket i natt · +1 830 kr | 1 paket i natt · +1 830 kr |
| 0:23 | sak | notis:Designvas i röd PETG · +50 % | Designvas i röd PETG · +50 % |
| 0:23 | notis |  | Designvas i röd PETG · +50 % |
| 0:25 | klar | notis:Designvas i röd PETG · +50 % | Designvas i röd PETG · +50 % |
| 0:34 | väntar | mamma | Bygger du ett hus till? Du har inte ens dammsugit ditt rum här hemma på fyra år. |
| 0:35 | sak | du | Dag 14 är slut. Skjulet är fortfarande ett skjul. |
| 0:35 | lapp | 📔 Dagbok | Dag 14 är slut. Skjulet är fortfarande ett skjul. |
| 0:35 | kvallsrad | du | Skjulet är fortfarande ett skjul. |
| 0:35 | klar | du | Dag 14 är slut. Skjulet är fortfarande ett skjul. |
| 0:36 | poolTom | du | 4 repliker använda |
| 0:39 | skratt | du | falsk tuta |
| 0:40 | röst | ali | Jag gick upp en timme tidigare idag. Inte för butiken. För mig. Jag ritade en lampa. · STORY |
| 0:40 | butiksbubbla | ali | Jag gick upp en timme tidigare idag. Inte för butiken. För mig. Jag ritade en lampa. |
| 0:42 | skratt | du | Alis dyr-pling |
| 0:42 | händelse | kopt | sak=projektor |
| 0:49 | paket |  | replik |
| 0:49 | väntar | bengt | Pappas. Han hade velat att nån använde den. HMPF. |
| 0:51 | väntar | bengt | Pappa grävde här bakom i hela sitt liv. Du har gjort mer på ett halvår. HMPF. |
| 0:51 | skratt | du | Bengt-Åke mjuknar |
| 0:51 | ljud | bom | Bommen fälls upp (hoger) |
| 0:53 | väntar | info:fel | Göran snodde cykelhjälm i petg. |
| 0:53 | sak | info:fel | Göran snodde cykelhjälm i petg. |
| 0:53 | kvitto-visas | info:fel | Göran snodde cykelhjälm i petg. |
| 0:53 | toast | fel | Göran snodde cykelhjälm i petg. |
| 0:55 | klar | info:fel | Göran snodde cykelhjälm i petg. |
| 1:00 | väntar | värld:TUUT TUUT! | TUUT TUUT! |
| 1:04 | sak | bror | Seriöst? … Nej. Mamma skulle aldrig sluta prata om det. Men tack. |
| 1:04 | sms | bror | Seriöst? … Nej. Mamma skulle aldrig sluta prata om det. Men tack. |
| 1:04 | sms-bubbla | bror | Seriöst? … Nej. Mamma skulle aldrig sluta prata om det. Men tack. |
| 1:04 | röst | bror | Seriöst? … Nej. Mamma skulle aldrig sluta prata om det. Men tack. · STORY |
| 1:07 | händelse | printStart | sak=projektor |
| 1:10 | klar | bror | Seriöst? … Nej. Mamma skulle aldrig sluta prata om det. Men tack. |
| 1:11 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 1:12 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 1:13 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 1:15 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 1:15 | väntar | notis:Skrivare L: Tornet är tomt – mal mer så  | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 1:16 | väntar | värld:Mjau. | Mjau. |
| 1:16 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 1:16 | struken | notis | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 1:17 | skratt | du | kvarnen spottar |
| 1:18 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 1:18 | struken | notis | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 1:18 | toast | guld | ✅ |
| 1:18 | händelse | printKlar | sak=projektor n=1 |
| 1:21 | struken | värld:TUUT TUUT! | TUUT TUUT! |
| 1:26 | sak | bengt | Pappa grävde här bakom i hela sitt liv. Du har gjort mer på ett halvår. HMPF. |
| 1:26 | bubbla |  | Pappa grävde här bakom i hela sitt liv. Du har gjort mer på ett halvår. HMPF. |
| 1:26 | röst | bengt | Pappa grävde här bakom i hela sitt liv. Du har gjort mer på ett halvår. HMPF. · STORY |
| 1:28 | händelse | tagitUrPrint | sak=projektor n=1 |
| 1:33 | klar | bengt | Pappa grävde här bakom i hela sitt liv. Du har gjort mer på ett halvår. HMPF. |
| 1:35 | händelse | placerat | sak=projektor |
| 1:36 | struken | värld:Mjau. | Mjau. |
| 1:39 | skratt | du | Alis dyr-pling |
| 1:39 | händelse | kopt | sak=ledpinne |
| 1:43 | väntar | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått jetmotor med efterbrännare. Det är stort, Gunnar. |
| 1:43 | radio | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått jetmotor med efterbrännare. Det är stort, Gunnar. |
| 1:43 | skratt | du | Radio-Kjelle |
| 1:44 | sak | bengt | Pappas. Han hade velat att nån använde den. HMPF. |
| 1:44 | notis |  | Bengt-Åke: Pappas. Han hade velat att nån använde den. HMPF. |
| 1:44 | röst | bengt | Pappas. Han hade velat att nån använde den. HMPF. · STORY |
| 1:45 | bubbla |  | Pappas. Han hade velat att nån använde den. HMPF. |
| 1:47 | händelse | printStart | sak=ledpinne |
| 1:49 | klar | bengt | Pappas. Han hade velat att nån använde den. HMPF. |
| 1:50 | toast | guld | ✅ |
| 1:50 | händelse | printKlar | sak=ledpinne n=1 |
| 1:51 | händelse | tagitUrPrint | sak=ledpinne n=1 |
| 1:56 | händelse | placerat | sak=ledpinne |
| 1:56 | händelse | malKlart | id=gamer del=Dag 15 – Fristaden nasta=f15-printa-stall-ut |
| 1:56 | väntar | du | En jacuzzi. På en soptipp. Varför inte. |
| 1:56 | målruta |  | Printa och ställ ut en jacuzzi |
| 1:56 | MÅL |  | Printa och ställ ut en jacuzzi |
| 1:56 | sak | du | En jacuzzi. På en soptipp. Varför inte. |
| 1:56 | pil |  | Printa och ställ ut en jacuzzi |
| 1:56 | notis | tanke | 💭 En jacuzzi. På en soptipp. Varför inte. |
| 1:56 | röst | du | En jacuzzi. På en soptipp. Varför inte. · MÅL |
| 1:57 | nick |  | nick:105 |
| 2:00 | klar | du | En jacuzzi. På en soptipp. Varför inte. |
| 2:00 | kvittens-bock |  | ✓ Inred boden · 3/3 gamersaker |
| 2:05 | skratt | du | Alis dyr-pling |
| 2:05 | händelse | kopt | sak=jacuzzi |
| 2:08 | sak | notis:Skrivare L: Tornet är tomt – mal mer så  | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 2:08 | notis | fel | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 2:11 | klar | notis:Skrivare L: Tornet är tomt – mal mer så  | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 2:14 | händelse | printStart | sak=jacuzzi |
| 2:21 | sak | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått jetmotor med efterbrännare. Det är stort, Gunnar. |
| 2:21 | notis |  | 📻 Radio Tippen: Radio Tippen, Kjelle här. Skjulet vid tippen har fått jetmotor med efterbrännare. Det är stort, Gunnar. |
| 2:21 | röst | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått jetmotor med efterbrännare. Det är stort, Gunnar. · REAKTION |
| 2:21 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 2:22 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 2:23 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 2:25 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 2:25 | struken | notis | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 2:26 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 2:26 | struken | notis | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 2:27 | väntar | rolf | Chefen har köpt en kaffemaskin som pratar. Den sa "god morgon Rolf". Ja litar inte på den. /R |
| 2:27 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 2:27 | struken | notis | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 2:29 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 2:29 | struken | notis | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 2:29 | klar | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått jetmotor med efterbrännare. Det är stort, Gunnar. |
| 2:30 | toast | skak | handen skakar: fullt |
| 2:30 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 2:30 | struken | notis | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 2:32 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 2:32 | struken | notis | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 2:33 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 2:33 | struken | notis | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 2:34 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 2:35 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 2:36 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 2:36 | poolTom | du | 4 repliker använda |
| 2:37 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 2:38 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 2:39 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 2:40 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 2:41 | toast | guld | ✅ |
| 2:41 | händelse | printKlar | sak=jacuzzi n=1 |
| 2:47 | händelse | tagitUrPrint | sak=jacuzzi n=1 |
| 2:54 | händelse | placerat | sak=jacuzzi |
| 2:54 | paket |  | sms → sms → sms → sms |
| 2:54 | väntar | mamma | Mamma här. Du skickade en bild på en jacuzzi? |
| 2:54 | väntar | mamma | …och tapeter. Och en gamingbod med lampor i alla färger. |
| 2:54 | väntar | mamma | Okej. Jag erkänner. Det är finare än hemma. |
| 2:54 | väntar | mamma | Kan jag komma och bada på söndag? Pappa tar med korv. |
| 2:54 | händelse | malKlart | id=f15-printa-stall-ut del=Dag 15 – Fristaden nasta=f15-varldens-basta-fristad |
| 2:54 | väntar | du | Världens bästa fristad. |
| 2:54 | målruta |  | Världens bästa fristad · trivsel 291/300 |
| 2:54 | MÅL |  | Världens bästa fristad · trivsel 291/300 |
| 2:54 | sak | du | Världens bästa fristad. |
| 2:54 | pil |  | Världens bästa fristad · trivsel 291/300 |
| 2:54 | röst | du | Världens bästa fristad. · MÅL |
| 2:55 | nick |  | nick:106 |
| 2:55 | skratt | du | falsk tuta |
| 2:57 | klar | du | Världens bästa fristad. |
| 2:58 | kvittens-bock |  | ✓ Printa och ställ ut en jacuzzi |
| 3:02 | händelse | kopt | sak=fagelbad |
| 3:06 | sak | mamma | Mamma här. Du skickade en bild på en jacuzzi? |
| 3:06 | sms | mamma | Mamma här. Du skickade en bild på en jacuzzi? |
| 3:06 | sms-bubbla | mamma | Mamma här. Du skickade en bild på en jacuzzi? |
| 3:06 | röst | mamma | Mamma här. Du skickade en bild på en jacuzzi? · STORY |
| 3:09 | väntar | mamma | Bygger du ett hus till? Du har inte ens dammsugit ditt rum här hemma på fyra år. |
| 3:10 | klar | mamma | Mamma här. Du skickade en bild på en jacuzzi? |
| 3:11 | händelse | printStart | sak=fagelbad |
| 3:15 | toast | guld | ✅ |
| 3:15 | händelse | printKlar | sak=fagelbad n=1 |
| 3:16 | händelse | tagitUrPrint | sak=fagelbad n=1 |
| 3:22 | händelse | placerat | sak=fagelbad |
| 3:25 | toast | guld | Göran har flyttat in. Han sitter på skylten nu. |
| 3:26 | skratt | du | Alis dyr-pling |
| 3:26 | händelse | kopt | sak=hogtalare |
| 3:34 | händelse | printStart | sak=hogtalare |
| 3:38 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 3:43 | väntar | värld:Mjau. | Mjau. |
| 3:50 | sak | värld:Mjau. | Mjau. |
| 3:50 | bubbla |  | Mjau. |
| 3:52 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 3:52 | väntar | notis:Skrivare L: Tornet är tomt – mal mer så  | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 3:52 | klar | värld:Mjau. | Mjau. |
| 3:53 | toast | guld | ✅ |
| 3:53 | händelse | printKlar | sak=hogtalare n=1 |
| 3:59 | händelse | tagitUrPrint | sak=hogtalare n=1 |
| 4:00 | sak | notis:Skrivare L: Tornet är tomt – mal mer så  | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 4:00 | notis | fel | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 4:03 | klar | notis:Skrivare L: Tornet är tomt – mal mer så  | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 4:06 | händelse | placerat | sak=hogtalare |
| 4:06 | händelse | malKlart | id=f15-varldens-basta-fristad del=Dag 15 – Fristaden nasta=sov15 |
| 4:06 | paket |  | lapp |
| 4:06 | lapp | 📔 Dagbok | Dag 15 är slut. På pappret finns jag inte. |
| 4:06 | kvallsrad | du | På pappret finns jag inte. |
| 4:06 | målruta |  | Klart för idag – sov när du vill |
| 4:06 | MÅL |  | Klart för idag – sov när du vill |
| 4:06 | sak | du | (nytt mål i rutan) |
| 4:06 | pil |  | Klart för idag – sov när du vill |
| 4:06 | klar | du | (nytt mål i rutan) |
| 4:07 | väntar | notis:📔 Prestation: Mysigt värre · +3 respekt | 📔 Prestation: Mysigt värre · +3 respekt |
| 4:13 | nattkort | du | 🌙 Dag 15 är slut. God natt. zzz… På pappret finns jag inte. DAGENS PRINTAR Projektor + duk × 1 RGB-ljuspinne × 1 Jacuzzi × 1 Fågelbad × 1 Högtalare × 1 Totalt |

<details><summary>Botens handlingar dag 15</summary>

- 0:00 — dag 15 börjar — (13180 kr)
- 0:08 popup: "FORTSÄTT" (13180 kr)
- 0:25 gå till Rolfs postlåda (29 m) (13180 kr)
- 0:33 panel: "En lapp från Rolf
Lite olaglig" (13180 kr)
- 0:40 gå till Ali (31 m) (13180 kr)
- 0:40 öppnar Alis butik – köpa receptet projektor + duk (13180 kr)
- 0:43 köper projektor för 950 kr (12230 kr)
- 0:55 plockar 2 skräp på tippen (bär max 16) (12230 kr)
- 0:58 gå till kvarnen (13 m) (12230 kr)
- 1:05 gå till skrivaren (7 m) (12230 kr)
- 1:07 printar Projektor + duk (12230 kr)
- 1:23 plockar 7 skräp på tippen (bär max 16) (12230 kr)
- 1:26 gå till kvarnen (14 m) (12230 kr)
- 1:28 gå till skrivaren (7 m) (12230 kr)
- 1:29 tar ut 1 st ur skrivaren (12230 kr)
- 1:33 gå till platsen för projektor + duk (23 m) (12230 kr)
- 1:35 ställer ut projektor + duk (12230 kr)
- 1:38 gå till Ali (11 m) (12230 kr)
- 1:38 öppnar Alis butik – köpa receptet rgb-ljuspinne (12230 kr)
- 1:40 köper ledpinne för 1000 kr (11230 kr)
- 1:46 gå till skrivaren (23 m) (11230 kr)
- 1:47 printar RGB-ljuspinne (11230 kr)
- 1:51 tar ut 1 st ur skrivaren (11230 kr)
- 1:55 gå till platsen för rgb-ljuspinne (17 m) (11230 kr)
- 1:56 ställer ut rgb-ljuspinne (11230 kr)
- 2:04 gå till Ali (9 m) (11230 kr)
- 2:04 öppnar Alis butik – köpa receptet jacuzzi (11230 kr)
- 2:06 köper jacuzzi för 5700 kr (5530 kr)
- 2:12 gå till skrivaren (23 m) (5530 kr)
- 2:14 printar Jacuzzi (5530 kr)
- 2:31 plockar 2 skräp på tippen (bär max 16) (5530 kr)
- 2:34 gå till kvarnen (14 m) (5530 kr)
- 2:47 gå till skrivaren (7 m) (5530 kr)
- 2:48 tar ut 1 st ur skrivaren (5530 kr)
- 2:53 gå till platsen för jacuzzi (21 m) (5530 kr)
- 2:54 ställer ut jacuzzi (5530 kr)
- 3:01 gå till Ali (9 m) (5530 kr)
- 3:01 öppnar Alis butik – köpa receptet fågelbad (5530 kr)
- 3:03 köper fagelbad för 60 kr (5470 kr)
- 3:09 gå till skrivaren (23 m) (5470 kr)
- 3:11 printar Fågelbad (5470 kr)
- 3:17 tar ut 1 st ur skrivaren (5470 kr)
- 3:21 gå till platsen för fågelbad (19 m) (5470 kr)
- 3:22 ställer ut fågelbad (5470 kr)
- 3:24 gå till Ali (10 m) (5470 kr)
- 3:24 öppnar Alis butik – köpa receptet högtalare (5470 kr)
- 3:27 köper hogtalare för 1450 kr (4020 kr)
- 3:33 gå till skrivaren (23 m) (4020 kr)
- 3:34 printar Högtalare (4020 kr)
- 3:47 plockar 2 skräp på tippen (bär max 16) (4020 kr)
- 3:50 gå till kvarnen (13 m) (4020 kr)
- 3:59 gå till skrivaren (7 m) (4020 kr)
- 4:00 tar ut 1 st ur skrivaren (4020 kr)
- 4:05 gå till platsen för högtalare (23 m) (4020 kr)
- 4:06 ställer ut högtalare (4020 kr)
- 4:11 gå till sängen (11 m) (4020 kr)

</details>

## Dag 16

| Tid | Källa | Vem | Text |
|---|---|---|---|
| 4:13 | vara | ali | n2_hjalm |
| 4:13 | händelse | malKlart | id=sov15 del=Dag 15 – Fristaden nasta=m16-kop-tomten-bor |
| 4:13 | paket |  | sms |
| 4:13 | väntar | mamma | Pappa såg bilden. Han sa "aha, vad lugnt då". Det betyder att han är jättestolt. |
| 4:13 | paket |  | sms |
| 4:13 | väntar | rolf | Hörde att du har JACUZZI. Ja tar med grillen. Och Kajsa. Hon e en katt. Hon badar inte. /R |
| 4:13 | väntar | info:guld | 🏆 KAPITEL 3 KLART! Fabriken sköter sig själv. |
| 4:13 | paket |  | sms |
| 4:13 | väntar | rolf | Ja hitta ett flipperspel på mitt hemliga ställe. De e ditt. Sen: Bengt-Åke vill sälja tomten du bor på. Tavlan vid vägen. /R |
| 4:13 | MÅL |  | Köp tomten du bor på |
| 0:01 | händelse | dagenBorjar | dag=16 |
| 0:01 | meddelande | du | På pappret finns jag inte. Därför: en egen tomt och ett riktigt hus. |
| 0:01 | dagbokkort | du | KAPITEL 4 · Dag 16. 6 dagar till jul · På pappret finns jag inte. Därför: en egen tomt och ett riktigt hus. |
| 0:01 | röst | du | KAPITEL 4 · Dag 16. 6 dagar till jul. På pappret finns jag inte. Därför: en egen tomt och ett riktigt hus. · STORY |
| 0:07 | händelse | morgonkortStangt | dag=16 |
| 0:07 | struken | kedja | d16 |
| 0:07 | väntar | du | Kommunen säljer tomten vid tippen. Ingen annan ville ha den. |
| 0:08 | väntar | notis:Cykelhjälm i PETG · +50 % | Cykelhjälm i PETG · +50 % |
| 0:11 | målruta |  | Köp tomten du bor på |
| 0:13 | sak | du | Kommunen säljer tomten vid tippen. Ingen annan ville ha den. |
| 0:13 | pil |  | Köp tomten du bor på |
| 0:13 | notis | tanke | 💭 Kommunen säljer tomten vid tippen. Ingen annan ville ha den. |
| 0:13 | röst | du | Kommunen säljer tomten vid tippen. Ingen annan ville ha den. · MÅL |
| 0:16 | struken | info:guld | 🏆 KAPITEL 3 KLART! Fabriken sköter sig själv. |
| 0:16 | väntar | info:guld | Göran lämnade tillbaka pall och resten. Och en blank skruv. |
| 0:16 | väntar | ali | Ali här. Din mås stod på min disk i morse. Han köpte inget. |
| 0:16 | paket |  | brev |
| 0:16 | väntar | gunbritt | Hej. Gun-Britt här, byggnadsnämnden. Tyvärr har ni en skylt utan bygglov. Tyvärr har ni också ett hus utan bygglov. Tyvärr måste ni fylla i blankett 14B. Tyvärr finns den bara på papper. Tyvärr är jag ledsen. /Gun-Britt |
| 0:16 | struken | info:guld | Göran lämnade tillbaka pall och resten. Och en blank skruv. |
| 0:16 | väntar | info:guld | Skylten vid vägen är uppgraderad. |
| 0:16 | paket |  | sms |
| 0:16 | väntar | bror | Pappa körde förbi för att kolla. Två gånger. Han säger att han skulle åt det hållet ändå. Det ska han aldrig. |
| 0:18 | klar | du | Kommunen säljer tomten vid tippen. Ingen annan ville ha den. |
| 0:18 | sak | info:guld | Skylten vid vägen är uppgraderad. |
| 0:18 | kvitto-visas | info:guld | Skylten vid vägen är uppgraderad. |
| 0:18 | toast | guld | Skylten vid vägen är uppgraderad. |
| 0:20 | klar | info:guld | Skylten vid vägen är uppgraderad. |
| 0:22 | struken | notis:📔 Prestation: Mysigt värre · +3 respekt | 📔 Prestation: Mysigt värre · +3 respekt |
| 0:22 | struken | mamma | Bygger du ett hus till? Du har inte ens dammsugit ditt rum här hemma på fyra år. |
| 0:22 | sak | notis:Cykelhjälm i PETG · +50 % | Cykelhjälm i PETG · +50 % |
| 0:22 | notis |  | Cykelhjälm i PETG · +50 % |
| 0:24 | klar | notis:Cykelhjälm i PETG · +50 % | Cykelhjälm i PETG · +50 % |
| 0:34 | sak | gunbritt | Hej. Gun-Britt här, byggnadsnämnden. Tyvärr har ni en skylt utan bygglov. Tyvärr har ni också ett hus utan bygglov. Tyvärr måste ni fylla i blankett 14B. Tyvärr finns den bara på papper. Tyvärr är jag ledsen. /Gun-Britt |
| 0:34 | lapp | Brev från byggnadsnämnden | Hej. Gun-Britt här, byggnadsnämnden. Tyvärr har ni en skylt utan bygglov. Tyvärr har ni också ett hus utan bygglov. Tyvärr måste ni fylla i blankett 14B. Tyvärr finns den bara på papper. Tyvärr är jag ledsen. /Gun-Britt |
| 0:34 | röst | gunbritt | Hej. Gun-Britt här, byggnadsnämnden. Tyvärr har ni en skylt utan bygglov. Tyvärr har ni också ett hus utan bygglov. Tyvärr måste ni fylla i blankett 14B. Tyvärr finns den bara på papper. Tyvärr är jag ledsen. /Gun-Britt · STORY |
| 0:38 | händelse | printStart | sak=nyckelring |
| 0:38 | händelse | printStart | sak=nyckelring |
| 0:39 | händelse | printStart | sak=nyckelring |
| 0:40 | händelse | printStart | sak=nyckelring |
| 0:40 | poolTom | du | 4 repliker använda |
| 0:40 | händelse | printStart | sak=nyckelring |
| 0:41 | händelse | printStart | sak=nyckelring |
| 0:41 | väntar | värld:TUUT! Grann skylt! | TUUT! Grann skylt! |
| 0:42 | händelse | printStart | sak=nyckelring |
| 0:42 | händelse | printStart | sak=nyckelring |
| 0:43 | händelse | printStart | sak=nyckelring |
| 0:44 | händelse | printStart | sak=nyckelring |
| 0:45 | händelse | printStart | sak=nyckelring |
| 0:45 | händelse | printStart | sak=nyckelring |
| 0:46 | händelse | printStart | sak=nyckelring |
| 0:47 | händelse | printStart | sak=nyckelring |
| 0:47 | skratt | du | kvarnen spottar |
| 0:47 | händelse | printStart | sak=nyckelring |
| 0:48 | händelse | printStart | sak=nyckelring |
| 0:49 | händelse | printStart | sak=nyckelring |
| 0:49 | händelse | printStart | sak=nyckelring |
| 0:50 | händelse | printStart | sak=nyckelring |
| 0:51 | händelse | printStart | sak=nyckelring |
| 0:52 | händelse | printStart | sak=nyckelring |
| 0:52 | klar | gunbritt | Hej. Gun-Britt här, byggnadsnämnden. Tyvärr har ni en skylt utan bygglov. Tyvärr har ni också ett hus utan bygglov. Tyvärr måste ni fylla i blankett 14B. Tyvärr finns den bara på papper. Tyvärr är jag ledsen. /Gun-Britt |
| 0:52 | händelse | printStart | sak=nyckelring |
| 0:53 | händelse | printStart | sak=nyckelring |
| 0:54 | händelse | printStart | sak=nyckelring |
| 0:54 | struken | värld:TUUT! Grann skylt! | TUUT! Grann skylt! |
| 0:54 | händelse | printStart | sak=nyckelring |
| 0:55 | händelse | printStart | sak=nyckelring |
| 0:56 | händelse | printStart | sak=nyckelring |
| 0:56 | händelse | printStart | sak=nyckelring |
| 0:57 | händelse | printStart | sak=nyckelring |
| 0:58 | händelse | printStart | sak=nyckelring |
| 0:59 | händelse | printStart | sak=nyckelring |
| 0:59 | händelse | printStart | sak=nyckelring |
| 1:00 | händelse | printStart | sak=nyckelring |
| 1:00 | sak | mamma | …och tapeter. Och en gamingbod med lampor i alla färger. |
| 1:00 | sms | mamma | …och tapeter. Och en gamingbod med lampor i alla färger. |
| 1:00 | sms-bubbla | mamma | …och tapeter. Och en gamingbod med lampor i alla färger. |
| 1:00 | röst | mamma | …och tapeter. Och en gamingbod med lampor i alla färger. · STORY |
| 1:01 | händelse | printStart | sak=nyckelring |
| 1:01 | händelse | printStart | sak=nyckelring |
| 1:02 | händelse | printStart | sak=nyckelring |
| 1:03 | händelse | printStart | sak=nyckelring |
| 1:03 | händelse | printStart | sak=nyckelring |
| 1:04 | händelse | printStart | sak=nyckelring |
| 1:05 | händelse | printStart | sak=nyckelring |
| 1:05 | klar | mamma | …och tapeter. Och en gamingbod med lampor i alla färger. |
| 1:06 | händelse | printStart | sak=nyckelring |
| 1:18 | händelse | printStart | sak=nyckelring |
| 1:19 | händelse | printStart | sak=nyckelring |
| 1:20 | händelse | printStart | sak=nyckelring |
| 1:20 | händelse | printStart | sak=nyckelring |
| 1:21 | händelse | printStart | sak=nyckelring |
| 1:22 | händelse | printStart | sak=nyckelring |
| 1:23 | händelse | printStart | sak=nyckelring |
| 1:23 | händelse | printStart | sak=nyckelring |
| 1:24 | händelse | printStart | sak=nyckelring |
| 1:25 | händelse | printStart | sak=nyckelring |
| 1:25 | händelse | printStart | sak=nyckelring |
| 1:26 | händelse | printStart | sak=nyckelring |
| 1:27 | händelse | printStart | sak=nyckelring |
| 1:27 | händelse | printStart | sak=nyckelring |
| 1:28 | händelse | printStart | sak=nyckelring |
| 1:28 | skratt | du | Kajsa i skrivaren |
| 1:29 | händelse | printStart | sak=nyckelring |
| 1:30 | händelse | printStart | sak=nyckelring |
| 1:30 | paket |  | tanke → tanke |
| 1:30 | tanke | du | Vad har Göran nu? |
| 1:30 | väntar | du | Vad har Göran nu? |
| 1:30 | tanke | du | Guld? Där nere? |
| 1:30 | väntar | du | Guld? Där nere? |
| 1:30 | skratt | du | Göran hittar guld |
| 1:30 | händelse | printStart | sak=nyckelring |
| 1:31 | sak | du | Vad har Göran nu? |
| 1:31 | notis | tanke | 💭 Vad har Göran nu? |
| 1:31 | röst | du | Vad har Göran nu? · STORY |
| 1:31 | händelse | printStart | sak=nyckelring |
| 1:32 | händelse | printStart | sak=nyckelring |
| 1:32 | händelse | printStart | sak=nyckelring |
| 1:33 | händelse | printStart | sak=nyckelring |
| 1:33 | klar | du | Vad har Göran nu? |
| 1:34 | händelse | printStart | sak=nyckelring |
| 1:34 | händelse | printStart | sak=nyckelring |
| 1:35 | händelse | printStart | sak=nyckelring |
| 1:35 | sak | du | Guld? Där nere? |
| 1:35 | notis | tanke | 💭 Guld? Där nere? |
| 1:35 | röst | du | Guld? Där nere? · STORY |
| 1:36 | händelse | printStart | sak=nyckelring |
| 1:37 | händelse | printStart | sak=nyckelring |
| 1:37 | händelse | printStart | sak=nyckelring |
| 1:38 | klar | du | Guld? Där nere? |
| 1:38 | händelse | printStart | sak=nyckelring |
| 1:38 | toast | bra | Startar nästa i kön: nyckelring |
| 1:38 | väntar | notis:Skrivare L: Startar nästa i kön: nyckelr | Skrivare L: Startar nästa i kön: nyckelring |
| 1:39 | händelse | printStart | sak=nyckelring |
| 1:39 | händelse | printStart | sak=nyckelring |
| 1:40 | händelse | printStart | sak=nyckelring |
| 1:41 | händelse | printStart | sak=nyckelring |
| 1:41 | händelse | printStart | sak=nyckelring |
| 1:42 | händelse | printStart | sak=nyckelring |
| 1:43 | händelse | printStart | sak=nyckelring |
| 1:44 | händelse | printStart | sak=nyckelring |
| 1:47 | sak | bror | Pappa körde förbi för att kolla. Två gånger. Han säger att han skulle åt det hållet ändå. Det ska han aldrig. |
| 1:47 | sms | bror | Pappa körde förbi för att kolla. Två gånger. Han säger att han skulle åt det hållet ändå. Det ska han aldrig. |
| 1:47 | sms-bubbla | bror | Pappa körde förbi för att kolla. Två gånger. Han säger att han skulle åt det hållet ändå. Det ska han aldrig. |
| 1:47 | röst | bror | Pappa körde förbi för att kolla. Två gånger. Han säger att han skulle åt det hållet ändå. Det ska han aldrig. · STORY |
| 1:57 | klar | bror | Pappa körde förbi för att kolla. Två gånger. Han säger att han skulle åt det hållet ändå. Det ska han aldrig. |
| 1:59 | struken | notis:Skrivare L: Startar nästa i kön: nyckelr | Skrivare L: Startar nästa i kön: nyckelring |
| 2:01 | upplåst | skrivare_kolf | trim_kolf1 |
| 2:01 | brott | UPPLÅST | trim_kolf1 (skrivare_kolf 112 av 75) |
| 2:01 | händelse | upplast | id=trim_kolf1 flask=skrivare_kolf |
| 2:01 | paket |  | sms |
| 2:01 | väntar | ali | Ali här. Trim till kolfiberskrivaren. Kolfiber är segt. Skrivaren behöver hjälp. |
| 2:03 | händelse | printStart | sak=nyckelring |
| 2:04 | händelse | printStart | sak=nyckelring |
| 2:05 | händelse | printStart | sak=nyckelring |
| 2:06 | händelse | printStart | sak=nyckelring |
| 2:06 | händelse | printStart | sak=nyckelring |
| 2:07 | händelse | printStart | sak=nyckelring |
| 2:08 | händelse | printStart | sak=nyckelring |
| 2:08 | väntar | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått rgb-ljuspinne. Och jacuzzi. Gunnar, du hör väl? |
| 2:08 | radio | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått rgb-ljuspinne. Och jacuzzi. Gunnar, du hör väl? |
| 2:08 | skratt | du | Radio-Kjelle |
| 2:08 | sak | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått rgb-ljuspinne. Och jacuzzi. Gunnar, du hör väl? |
| 2:08 | notis |  | 📻 Radio Tippen: Radio Tippen, Kjelle här. Skjulet vid tippen har fått rgb-ljuspinne. Och jacuzzi. Gunnar, du hör väl? |
| 2:08 | röst | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått rgb-ljuspinne. Och jacuzzi. Gunnar, du hör väl? · REAKTION |
| 2:08 | händelse | printStart | sak=nyckelring |
| 2:09 | händelse | printStart | sak=nyckelring |
| 2:10 | händelse | printStart | sak=nyckelring |
| 2:10 | händelse | printStart | sak=nyckelring |
| 2:11 | händelse | printStart | sak=nyckelring |
| 2:11 | skratt | du | Kajsa i skrivaren |
| 2:12 | händelse | printStart | sak=nyckelring |
| 2:13 | händelse | printStart | sak=nyckelring |
| 2:13 | händelse | printStart | sak=nyckelring |
| 2:14 | händelse | printStart | sak=nyckelring |
| 2:14 | skratt | du | falsk tuta |
| 2:15 | händelse | printStart | sak=nyckelring |
| 2:15 | händelse | printStart | sak=nyckelring |
| 2:16 | händelse | printStart | sak=nyckelring |
| 2:16 | klar | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått rgb-ljuspinne. Och jacuzzi. Gunnar, du hör väl? |
| 2:17 | händelse | printStart | sak=nyckelring |
| 2:17 | händelse | printStart | sak=nyckelring |
| 2:18 | händelse | printStart | sak=nyckelring |
| 2:19 | händelse | printStart | sak=nyckelring |
| 2:20 | händelse | printStart | sak=nyckelring |
| 2:20 | händelse | printStart | sak=nyckelring |
| 2:20 | toast | bra | Startar nästa i kön: nyckelring |
| 2:36 | väntar | värld:TUUT TUUT! | TUUT TUUT! |
| 2:37 | sak | värld:TUUT TUUT! | TUUT TUUT! |
| 2:37 | bubbla |  | TUUT TUUT! |
| 2:38 | väntar | ali | Ali här. Din mås stod på min disk i morse. Han köpte inget. |
| 2:38 | händelse | printStart | sak=nyckelring |
| 2:39 | händelse | printStart | sak=nyckelring |
| 2:39 | händelse | printStart | sak=nyckelring |
| 2:40 | klar | värld:TUUT TUUT! | TUUT TUUT! |
| 2:40 | poolTom | du | 4 repliker använda |
| 2:40 | händelse | printStart | sak=nyckelring |
| 2:41 | händelse | printStart | sak=nyckelring |
| 2:42 | händelse | printStart | sak=nyckelring |
| 2:42 | händelse | printStart | sak=nyckelring |
| 2:43 | händelse | printStart | sak=nyckelring |
| 2:44 | händelse | printStart | sak=nyckelring |
| 2:44 | händelse | printStart | sak=nyckelring |
| 2:45 | händelse | printStart | sak=nyckelring |
| 2:46 | händelse | printStart | sak=nyckelring |
| 2:46 | händelse | printStart | sak=nyckelring |
| 2:47 | händelse | printStart | sak=nyckelring |
| 2:48 | händelse | printStart | sak=nyckelring |
| 2:48 | sak | ali | Ali här. Trim till kolfiberskrivaren. Kolfiber är segt. Skrivaren behöver hjälp. |
| 2:48 | sms | ali | Ali här. Trim till kolfiberskrivaren. Kolfiber är segt. Skrivaren behöver hjälp. |
| 2:48 | sms-bubbla | ali | Ali här. Trim till kolfiberskrivaren. Kolfiber är segt. Skrivaren behöver hjälp. |
| 2:48 | röst | ali | Ali här. Trim till kolfiberskrivaren. Kolfiber är segt. Skrivaren behöver hjälp. · STORY |
| 2:49 | händelse | printStart | sak=nyckelring |
| 2:49 | skratt | du | Kajsa i skrivaren |
| 2:49 | händelse | printStart | sak=nyckelring |
| 2:50 | händelse | printStart | sak=nyckelring |
| 2:51 | händelse | printStart | sak=nyckelring |
| 2:51 | händelse | printStart | sak=nyckelring |
| 2:52 | händelse | printStart | sak=nyckelring |
| 2:53 | händelse | printStart | sak=nyckelring |
| 2:53 | händelse | printStart | sak=nyckelring |
| 2:54 | händelse | printStart | sak=nyckelring |
| 2:55 | klar | ali | Ali här. Trim till kolfiberskrivaren. Kolfiber är segt. Skrivaren behöver hjälp. |
| 2:55 | händelse | printStart | sak=nyckelring |
| 2:56 | händelse | printStart | sak=nyckelring |
| 2:56 | händelse | printStart | sak=nyckelring |
| 2:57 | händelse | printStart | sak=nyckelring |
| 2:58 | händelse | printStart | sak=nyckelring |
| 2:58 | händelse | printStart | sak=nyckelring |
| 2:59 | händelse | printStart | sak=nyckelring |
| 2:59 | toast | bra | Startar nästa i kön: nyckelring |
| 3:00 | händelse | printStart | sak=nyckelring |
| 3:00 | händelse | printStart | sak=nyckelring |
| 3:01 | händelse | printStart | sak=nyckelring |
| 3:01 | skratt | du | Kajsa i skrivaren |
| 3:02 | händelse | printStart | sak=nyckelring |
| 3:03 | händelse | printStart | sak=nyckelring |
| 3:03 | händelse | printStart | sak=nyckelring |
| 3:04 | händelse | printStart | sak=nyckelring |
| 3:05 | händelse | printStart | sak=nyckelring |
| 3:05 | händelse | printStart | sak=nyckelring |
| 3:06 | händelse | printStart | sak=nyckelring |
| 3:07 | händelse | printStart | sak=nyckelring |
| 3:07 | händelse | printStart | sak=nyckelring |
| 3:08 | händelse | printStart | sak=nyckelring |
| 3:09 | händelse | printStart | sak=nyckelring |
| 3:10 | händelse | printStart | sak=nyckelring |
| 3:10 | händelse | printStart | sak=nyckelring |
| 3:25 | händelse | printStart | sak=nyckelring |
| 3:26 | händelse | printStart | sak=nyckelring |
| 3:26 | händelse | printStart | sak=nyckelring |
| 3:27 | händelse | printStart | sak=nyckelring |
| 3:28 | händelse | printStart | sak=nyckelring |
| 3:29 | händelse | printStart | sak=nyckelring |
| 3:29 | händelse | printStart | sak=nyckelring |
| 3:30 | händelse | printStart | sak=nyckelring |
| 3:31 | händelse | printStart | sak=nyckelring |
| 3:31 | händelse | printStart | sak=nyckelring |
| 3:32 | händelse | printStart | sak=nyckelring |
| 3:33 | händelse | printStart | sak=nyckelring |
| 3:33 | sak | mamma | Okej. Jag erkänner. Det är finare än hemma. |
| 3:33 | sms | mamma | Okej. Jag erkänner. Det är finare än hemma. |
| 3:33 | sms-bubbla | mamma | Okej. Jag erkänner. Det är finare än hemma. |
| 3:33 | röst | mamma | Okej. Jag erkänner. Det är finare än hemma. · STORY |
| 3:33 | händelse | printStart | sak=nyckelring |
| 3:34 | händelse | printStart | sak=nyckelring |
| 3:34 | skratt | du | Kajsa i skrivaren |
| 3:35 | händelse | printStart | sak=nyckelring |
| 3:36 | händelse | printStart | sak=nyckelring |
| 3:36 | händelse | printStart | sak=nyckelring |
| 3:37 | klar | mamma | Okej. Jag erkänner. Det är finare än hemma. |
| 3:37 | händelse | printStart | sak=nyckelring |
| 3:38 | händelse | printStart | sak=nyckelring |
| 3:38 | händelse | printStart | sak=nyckelring |
| 3:39 | händelse | printStart | sak=nyckelring |
| 3:40 | händelse | printStart | sak=nyckelring |
| 3:40 | händelse | printStart | sak=nyckelring |
| 3:41 | händelse | printStart | sak=nyckelring |
| 3:42 | händelse | printStart | sak=nyckelring |
| 3:43 | händelse | printStart | sak=nyckelring |
| 3:43 | händelse | printStart | sak=nyckelring |
| 3:44 | händelse | printStart | sak=nyckelring |
| 3:45 | händelse | printStart | sak=nyckelring |
| 3:45 | händelse | printStart | sak=nyckelring |
| 3:45 | toast | bra | Startar nästa i kön: nyckelring |
| 3:46 | händelse | printStart | sak=nyckelring |
| 3:47 | händelse | printStart | sak=nyckelring |
| 3:47 | händelse | printStart | sak=nyckelring |
| 3:48 | händelse | printStart | sak=nyckelring |
| 3:49 | händelse | printStart | sak=nyckelring |
| 3:50 | händelse | printStart | sak=nyckelring |
| 4:04 | händelse | printStart | sak=nyckelring |
| 4:04 | händelse | printStart | sak=nyckelring |
| 4:05 | händelse | printStart | sak=nyckelring |
| 4:06 | händelse | printStart | sak=nyckelring |
| 4:07 | händelse | printStart | sak=nyckelring |
| 4:07 | händelse | printStart | sak=nyckelring |
| 4:08 | händelse | printStart | sak=nyckelring |
| 4:09 | händelse | printStart | sak=nyckelring |
| 4:09 | händelse | printStart | sak=nyckelring |
| 4:10 | händelse | printStart | sak=nyckelring |
| 4:11 | händelse | printStart | sak=nyckelring |
| 4:11 | händelse | printStart | sak=nyckelring |
| 4:12 | händelse | printStart | sak=nyckelring |
| 4:13 | händelse | printStart | sak=nyckelring |
| 4:14 | händelse | printStart | sak=nyckelring |
| 4:14 | händelse | printStart | sak=nyckelring |
| 4:15 | händelse | printStart | sak=nyckelring |
| 4:16 | händelse | printStart | sak=nyckelring |
| 4:16 | händelse | printStart | sak=nyckelring |
| 4:17 | händelse | printStart | sak=nyckelring |
| 4:18 | händelse | printStart | sak=nyckelring |
| 4:18 | skratt | du | Kajsa i skrivaren |
| 4:18 | händelse | printStart | sak=nyckelring |
| 4:19 | händelse | printStart | sak=nyckelring |
| 4:20 | händelse | printStart | sak=nyckelring |
| 4:21 | händelse | printStart | sak=nyckelring |
| 4:21 | händelse | printStart | sak=nyckelring |
| 4:22 | händelse | printStart | sak=nyckelring |
| 4:22 | toast | bra | Startar nästa i kön: nyckelring |
| 4:23 | händelse | printStart | sak=nyckelring |
| 4:23 | händelse | printStart | sak=nyckelring |
| 4:24 | händelse | printStart | sak=nyckelring |
| 4:25 | händelse | printStart | sak=nyckelring |
| 4:25 | händelse | printStart | sak=nyckelring |
| 4:26 | händelse | printStart | sak=nyckelring |
| 4:27 | händelse | printStart | sak=nyckelring |
| 4:28 | händelse | printStart | sak=nyckelring |
| 4:28 | händelse | printStart | sak=nyckelring |
| 4:29 | händelse | printStart | sak=nyckelring |
| 4:30 | händelse | printStart | sak=nyckelring |
| 4:30 | händelse | printStart | sak=nyckelring |
| 4:31 | skratt | du | falsk tuta |
| 4:31 | väntar | värld:TUUT TUUT! | TUUT TUUT! |
| 4:31 | sak | värld:TUUT TUUT! | TUUT TUUT! |
| 4:31 | bubbla |  | TUUT TUUT! |
| 4:31 | händelse | printStart | sak=nyckelring |
| 4:34 | klar | värld:TUUT TUUT! | TUUT TUUT! |
| 4:40 | poolTom | du | 4 repliker använda |
| 4:47 | händelse | printStart | sak=nyckelring |
| 4:48 | händelse | printStart | sak=nyckelring |
| 4:48 | händelse | printStart | sak=nyckelring |
| 4:49 | händelse | printStart | sak=nyckelring |
| 4:49 | skratt | du | Kajsa i skrivaren |
| 4:50 | händelse | printStart | sak=nyckelring |
| 4:51 | händelse | printStart | sak=nyckelring |
| 4:51 | händelse | printStart | sak=nyckelring |
| 4:52 | händelse | printStart | sak=nyckelring |
| 4:53 | händelse | printStart | sak=nyckelring |
| 4:53 | händelse | printStart | sak=nyckelring |
| 4:54 | händelse | printStart | sak=nyckelring |
| 4:55 | händelse | printStart | sak=nyckelring |
| 4:55 | händelse | printStart | sak=nyckelring |
| 4:56 | händelse | printStart | sak=nyckelring |
| 4:57 | händelse | printStart | sak=nyckelring |
| 4:58 | händelse | printStart | sak=nyckelring |
| 4:58 | händelse | printStart | sak=nyckelring |
| 4:59 | händelse | printStart | sak=nyckelring |
| 5:00 | händelse | printStart | sak=nyckelring |
| 5:00 | händelse | printStart | sak=nyckelring |
| 5:01 | händelse | printStart | sak=nyckelring |
| 5:02 | händelse | printStart | sak=nyckelring |
| 5:02 | händelse | printStart | sak=nyckelring |
| 5:03 | händelse | printStart | sak=nyckelring |
| 5:04 | händelse | printStart | sak=nyckelring |
| 5:05 | händelse | printStart | sak=nyckelring |
| 5:05 | skratt | du | Kajsa i skrivaren |
| 5:05 | händelse | printStart | sak=nyckelring |
| 5:06 | händelse | printStart | sak=nyckelring |
| 5:07 | händelse | printStart | sak=nyckelring |
| 5:07 | händelse | printStart | sak=nyckelring |
| 5:08 | händelse | printStart | sak=nyckelring |
| 5:09 | händelse | printStart | sak=nyckelring |
| 5:09 | toast | bra | Startar nästa i kön: nyckelring |
| 5:09 | händelse | printStart | sak=nyckelring |
| 5:10 | händelse | printStart | sak=nyckelring |
| 5:11 | händelse | printStart | sak=nyckelring |
| 5:12 | händelse | printStart | sak=nyckelring |
| 5:12 | händelse | printStart | sak=nyckelring |
| 5:13 | händelse | printStart | sak=nyckelring |
| 5:14 | händelse | printStart | sak=nyckelring |
| 5:14 | händelse | printStart | sak=nyckelring |
| 5:15 | händelse | printStart | sak=nyckelring |
| 5:27 | toast | skak | handen skakar: fullt |
| 5:33 | händelse | printStart | sak=nyckelring |
| 5:34 | händelse | printStart | sak=nyckelring |
| 5:34 | händelse | printStart | sak=nyckelring |
| 5:35 | sak | mamma | Kan jag komma och bada på söndag? Pappa tar med korv. |
| 5:35 | sms | mamma | Kan jag komma och bada på söndag? Pappa tar med korv. |
| 5:35 | sms-bubbla | mamma | Kan jag komma och bada på söndag? Pappa tar med korv. |
| 5:35 | röst | mamma | Kan jag komma och bada på söndag? Pappa tar med korv. · STORY |
| 5:35 | händelse | printStart | sak=nyckelring |
| 5:36 | händelse | printStart | sak=nyckelring |
| 5:36 | händelse | printStart | sak=nyckelring |
| 5:37 | händelse | printStart | sak=nyckelring |
| 5:38 | händelse | printStart | sak=nyckelring |
| 5:39 | händelse | printStart | sak=nyckelring |
| 5:39 | klar | mamma | Kan jag komma och bada på söndag? Pappa tar med korv. |
| 5:39 | händelse | printStart | sak=nyckelring |
| 5:40 | händelse | printStart | sak=nyckelring |
| 5:41 | händelse | printStart | sak=nyckelring |
| 5:41 | händelse | printStart | sak=nyckelring |
| 5:42 | händelse | printStart | sak=nyckelring |
| 5:43 | händelse | printStart | sak=nyckelring |
| 5:43 | händelse | printStart | sak=nyckelring |
| 5:44 | händelse | printStart | sak=nyckelring |
| 5:45 | händelse | printStart | sak=nyckelring |
| 5:46 | händelse | printStart | sak=nyckelring |
| 5:46 | händelse | printStart | sak=nyckelring |
| 5:47 | händelse | printStart | sak=nyckelring |
| 5:48 | händelse | printStart | sak=nyckelring |
| 5:48 | händelse | printStart | sak=nyckelring |
| 5:49 | händelse | printStart | sak=nyckelring |
| 5:50 | händelse | printStart | sak=nyckelring |
| 5:50 | skratt | du | Kajsa i skrivaren |
| 5:50 | händelse | printStart | sak=nyckelring |
| 5:51 | händelse | printStart | sak=nyckelring |
| 5:52 | händelse | printStart | sak=nyckelring |
| 5:52 | toast | bra | Startar nästa i kön: nyckelring |
| 5:53 | händelse | printStart | sak=nyckelring |
| 5:53 | händelse | printStart | sak=nyckelring |
| 5:54 | händelse | printStart | sak=nyckelring |
| 5:55 | händelse | printStart | sak=nyckelring |
| 5:55 | händelse | printStart | sak=nyckelring |
| 5:56 | händelse | printStart | sak=nyckelring |
| 5:57 | händelse | printStart | sak=nyckelring |
| 5:57 | händelse | printStart | sak=nyckelring |
| 5:58 | händelse | printStart | sak=nyckelring |
| 5:59 | händelse | printStart | sak=nyckelring |
| 6:00 | händelse | printStart | sak=nyckelring |
| 6:00 | händelse | printStart | sak=nyckelring |
| 6:01 | händelse | printStart | sak=nyckelring |
| 6:02 | händelse | printStart | sak=nyckelring |
| 6:02 | händelse | printStart | sak=nyckelring |
| 6:03 | händelse | printStart | sak=nyckelring |
| 6:04 | händelse | printStart | sak=nyckelring |
| 6:04 | händelse | printStart | sak=nyckelring |
| 6:19 | skratt | du | däcket rullar iväg |
| 6:19 | webb | du | packade 2 kruka |
| 6:28 | webb | du | packade 2 n2_hjalm |
| 6:43 | väntar | info:bra | 📦 Paketet till En pensionär i Kiruna ligger i postlådan – Rolf tar det till posten |
| 6:43 | sak | info:bra | 📦 Paketet till En pensionär i Kiruna ligger i postlådan – Rolf tar det till posten |
| 6:43 | kvitto-visas | info:bra | 📦 Paketet till En pensionär i Kiruna ligger i postlådan – Rolf tar det till posten |
| 6:43 | toast | bra | 📦 Paketet till En pensionär i Kiruna ligger i postlådan – Rolf tar det till posten |
| 6:44 | väntar | info:bra | 📦 Paketet till Kenneth på bilskroten ligger i postlådan – Rolf tar det till posten |
| 6:45 | klar | info:bra | 📦 Paketet till En pensionär i Kiruna ligger i postlådan – Rolf tar det till posten |
| 6:45 | sak | info:bra | 📦 Paketet till Kenneth på bilskroten ligger i postlådan – Rolf tar det till posten |
| 6:45 | kvitto-visas | info:bra | 📦 Paketet till Kenneth på bilskroten ligger i postlådan – Rolf tar det till posten |
| 6:45 | toast | bra | 📦 Paketet till Kenneth på bilskroten ligger i postlådan – Rolf tar det till posten |
| 6:47 | klar | info:bra | 📦 Paketet till Kenneth på bilskroten ligger i postlådan – Rolf tar det till posten |
| 6:49 | händelse | printStart | sak=n3_stol |
| 6:56 | toast | guld | ✅ |
| 6:56 | händelse | printKlar | sak=n3_stol n=9 |
| 6:57 | händelse | tagitUrPrint | sak=n3_stol n=1 |
| 6:59 | poolTom | du | 4 repliker använda |
| 7:04 | röst | ali | Jag ska lära ut AI på pensionärsföreningen. Tisdagar. De är rädda. Jag var också rädd. · STORY |
| 7:04 | butiksbubbla | ali | Jag ska lära ut AI på pensionärsföreningen. Tisdagar. De är rädda. Jag var också rädd. |
| 7:06 | aliSalt | ali | 16000 |
| 7:06 | aliSalt | ali | 6 |
| 7:10 | väntar | info:guld | 🏡 Du äger marken du bor på! Inte längre en hobo dweller. |
| 7:10 | paket |  | sms |
| 7:10 | väntar | rolf | Bengt-Åke sa ja! Han ville först ha 22 500 men ja sa att du städat hela hans skräpiga mark gratis. Då blev de 12.5. Grattis, markägare. /R |
| 7:10 | paket |  | sms |
| 7:10 | väntar | mamma | Pappa säger att du har köpt mark? Hur? Vems? Har du skrivit på något? Skicka papperen till mig så läser jag. |
| 7:10 | sak | info:guld | 🏡 Du äger marken du bor på! Inte längre en hobo dweller. |
| 7:10 | kvitto-visas | info:guld | 🏡 Du äger marken du bor på! Inte längre en hobo dweller. |
| 7:10 | toast | guld | 🏡 Du äger marken du bor på! Inte längre en hobo dweller. |
| 7:10 | händelse | malKlart | id=m16-kop-tomten-bor del=Dag 16 – Egen mark nasta=m16-lagg-flagan-bengt |
| 7:10 | väntar | du | Lägg flagan i Bengt-Åkes brevlåda. |
| 7:10 | MÅL |  | Lägg flagan i Bengt-Åkes brevlåda |
| 7:12 | klar | info:guld | 🏡 Du äger marken du bor på! Inte längre en hobo dweller. |
| 7:12 | målruta |  | Lägg flagan i Bengt-Åkes brevlåda |
| 7:14 | kvittens-bock |  | ✓ Köp tomten du bor på |
| 7:14 | sak | du | Lägg flagan i Bengt-Åkes brevlåda. |
| 7:14 | pil |  | Lägg flagan i Bengt-Åkes brevlåda |
| 7:14 | röst | du | Lägg flagan i Bengt-Åkes brevlåda. · MÅL |
| 7:17 | klar | du | Lägg flagan i Bengt-Åkes brevlåda. |
| 7:20 | väntar | notis:📔 Prestation: HMPF · +3 respekt | 📔 Prestation: HMPF · +3 respekt |
| 7:24 | väntar | foto | Min mark |
| 7:24 | paket |  | tanke |
| 7:24 | tanke | du | Nu kan ingen säga att jag inte hör hemma här. |
| 7:24 | väntar | du | Nu kan ingen säga att jag inte hör hemma här. |
| 7:25 | sak | notis:📔 Prestation: HMPF · +3 respekt | 📔 Prestation: HMPF · +3 respekt |
| 7:25 | notis |  | 📔 Prestation: HMPF · +3 respekt |
| 7:26 | tanke | du | Något blänker i fönstret där borta. En kikare? |
| 7:26 | väntar | du | Något blänker i fönstret där borta. En kikare? |
| 7:27 | klar | notis:📔 Prestation: HMPF · +3 respekt | 📔 Prestation: HMPF · +3 respekt |
| 7:28 | paket |  | brev |
| 7:28 | väntar | bengt | PAPPA LETADE HELA LIVET. HMPF. GÅ IN DÅ. FÖRSTA KLUMPEN ÄR MIN. DEN SKA TILL PAPPAS GRAV. |
| 7:28 | paket |  | ge → brev |
| 7:28 | väntar |  | (läget ändras) |
| 7:28 | väntar | rolf | Svackan. Ja å Birgitta badade i floden där. Ja har vinkelslipen, men skivan e slut. Printa en kapskiva åt mej, i kolfiber. /R |
| 7:28 | händelse | malKlart | id=m16-lagg-flagan-bengt del=Dag 16 – Egen mark nasta=m16-ge-rolf-kapskiva |
| 7:28 | struken | du | Något blänker i fönstret där borta. En kikare? |
| 7:28 | väntar | du | Ge Rolf en kapskiva i kolfiber. |
| 7:28 | MÅL |  | Ge Rolf en kapskiva i kolfiber |
| 7:29 | sak | du | Ge Rolf en kapskiva i kolfiber. |
| 7:29 | målruta |  | Ge Rolf en kapskiva i kolfiber |
| 7:29 | pil |  | Ge Rolf en kapskiva i kolfiber |
| 7:29 | röst | du | Ge Rolf en kapskiva i kolfiber. · MÅL |
| 7:30 | nick |  | nick:110 |
| 7:32 | kvittens-bock |  | ✓ Lägg flagan i Bengt-Åkes brevlåda |
| 7:32 | klar | du | Ge Rolf en kapskiva i kolfiber. |
| 7:34 | sak | bengt | PAPPA LETADE HELA LIVET. HMPF. GÅ IN DÅ. FÖRSTA KLUMPEN ÄR MIN. DEN SKA TILL PAPPAS GRAV. |
| 7:34 | lapp | Lapp från Bengt-Åke | PAPPA LETADE HELA LIVET. HMPF. GÅ IN DÅ. FÖRSTA KLUMPEN ÄR MIN. DEN SKA TILL PAPPAS GRAV. |
| 7:34 | röst | bengt | PAPPA LETADE HELA LIVET. HMPF. GÅ IN DÅ. FÖRSTA KLUMPEN ÄR MIN. DEN SKA TILL PAPPAS GRAV. · STORY |
| 7:42 | klar | bengt | PAPPA LETADE HELA LIVET. HMPF. GÅ IN DÅ. FÖRSTA KLUMPEN ÄR MIN. DEN SKA TILL PAPPAS GRAV. |
| 7:44 | sak |  | (läget ändras) |
| 7:44 | klar |  | (läget ändras) |
| 7:48 | sak | rolf | Svackan. Ja å Birgitta badade i floden där. Ja har vinkelslipen, men skivan e slut. Printa en kapskiva åt mej, i kolfiber. /R |
| 7:48 | lapp | Brev från Rolf | Svackan. Ja å Birgitta badade i floden där. Ja har vinkelslipen, men skivan e slut. Printa en kapskiva åt mej, i kolfiber. /R |
| 7:48 | röst | rolf | Svackan. Ja å Birgitta badade i floden där. Ja har vinkelslipen, men skivan e slut. Printa en kapskiva åt mej, i kolfiber. /R · STORY |
| 7:54 | paket |  | sms |
| 7:54 | väntar | rolf | Kajsa hitta en låda kolfiberrester bakom husvagnen. Hon ville int ha dom. Grinden. /R |
| 7:55 | händelse | printStart | sak=kapskiva |
| 7:58 | toast | guld | ✅ |
| 7:58 | händelse | printKlar | sak=kapskiva n=1 |
| 7:58 | klar | rolf | Svackan. Ja å Birgitta badade i floden där. Ja har vinkelslipen, men skivan e slut. Printa en kapskiva åt mej, i kolfiber. /R |
| 7:59 | händelse | tagitUrPrint | sak=kapskiva n=1 |
| 7:59 | skratt | du | falsk tuta |
| 8:04 | händelse | malKlart | id=m16-ge-rolf-kapskiva del=Dag 16 – Egen mark nasta=sov16 |
| 8:04 | paket |  | lapp |
| 8:04 | lapp | 📔 Dagbok | Dag 16 är slut. Nu vet kommunen att jag bor HÄR. Det ska blåsa hårt i natt. |
| 8:04 | kvallsrad | du | Nu vet kommunen att jag bor HÄR. Det ska blåsa hårt i natt. |
| 8:04 | MÅL |  | Klart för idag – sov när du vill |
| 8:04 | målruta |  | Klart för idag – sov när du vill |
| 8:04 | sak | du | (nytt mål i rutan) |
| 8:04 | pil |  | Klart för idag – sov när du vill |
| 8:04 | klar | du | (nytt mål i rutan) |
| 8:13 | paket |  | sms |
| 8:13 | väntar | ali | Ali här. Hämtade lådan klockan sex. 313 saker, 3 443 kr på ditt konto. Grossistpris. Jag har också en hyra. |
| 8:13 | webbBetalt | du | 3491 |
| 8:13 | nattkort | du | 🌙 Dag 16 är slut. God natt. zzz… Nu vet kommunen att jag bor HÄR. Det ska blåsa hårt i natt. DAGENS PRINTAR Nyckelring × 313 Kolfiberstol × 1 Kapskiva i kolfib |

<details><summary>Botens handlingar dag 16</summary>

- 0:00 — dag 16 börjar — (4020 kr)
- 0:15 popup: "FORTSÄTT" (4020 kr)
- 0:28 gå till Rolfs postlåda (30 m) (4020 kr)
- 0:34 panel: "Rolfs postlåda
Det här låg i l" (10020 kr)
- 0:36 gå till skrivaren (10 m) (10020 kr)
- 0:38 printar Nyckelring (10020 kr)
- 1:14 plockar 3 skräp på tippen (bär max 16) (10020 kr)
- 1:17 gå till kvarnen (13 m) (10020 kr)
- 1:36 gå till skrivaren (7 m) (10020 kr)
- 1:37 printar Nyckelring (10020 kr)
- 2:00 plockar 12 skräp på tippen (bär max 16) (10020 kr)
- 2:03 gå till kvarnen (15 m) (10020 kr)
- 2:18 gå till skrivaren (7 m) (10020 kr)
- 2:20 printar Nyckelring (10020 kr)
- 2:33 plockar 8 skräp på tippen (bär max 16) (10020 kr)
- 2:36 gå till kvarnen (17 m) (10020 kr)
- 2:57 gå till skrivaren (7 m) (10020 kr)
- 2:59 printar Nyckelring (10020 kr)
- 3:21 plockar 6 skräp på tippen (bär max 16) (10020 kr)
- 3:24 gå till kvarnen (15 m) (10020 kr)
- 3:44 gå till skrivaren (7 m) (10020 kr)
- 3:45 printar Nyckelring (10020 kr)
- 3:59 plockar 4 skräp på tippen (bär max 16) (10020 kr)
- 4:02 gå till kvarnen (16 m) (10020 kr)
- 4:20 gå till skrivaren (7 m) (10020 kr)
- 4:22 printar Nyckelring (10020 kr)
- 4:43 plockar 7 skräp på tippen (bär max 16) (10020 kr)
- 4:46 gå till kvarnen (14 m) (10020 kr)
- 5:07 gå till skrivaren (7 m) (10020 kr)
- 5:08 printar Nyckelring (10020 kr)
- 5:28 plockar 6 skräp på tippen (bär max 16) (10020 kr)
- 5:31 gå till kvarnen (18 m) (10020 kr)
- 5:50 gå till skrivaren (7 m) (10020 kr)
- 5:52 printar Nyckelring (10020 kr)
- 6:10 gå till datorn (19 m) (10020 kr)
- 6:18 panel: "Webbshopen · Soptippsvägen 1
B" (10020 kr)
- 6:28 panel: "Webbshopen · Soptippsvägen 1
B" (10020 kr)
- 6:37 panel: "Webbshopen · Soptippsvägen 1
B" (10020 kr)
- 6:43 gå till Rolfs postlåda (paket) (29 m) (10020 kr)
- 6:45 webbshop: 2 paket i postlådan (10020 kr)
- 6:45 tjänar pengar till tomten du bor på: 10020/12500 kr → printar kolfiberstol (16000 kr) (10020 kr)
- 6:48 gå till skrivaren (15 m) (10020 kr)
- 6:49 printar Kolfiberstol (10020 kr)
- 6:58 tar ut 1 st ur skrivaren (10020 kr)
- 7:04 gå till Ali (34 m) (10020 kr)
- 7:04 öppnar Alis butik – sälja (10020 kr)
- 7:07 säljer hos Ali: +16006 kr (26026 kr)
- 7:10 gå till tavlan vid vägen (6 m) (26026 kr)
- 7:10 köper tomten du bor på (12500 kr) (13526 kr)
- 7:28 gå till Bengt-Åkes brevlåda (42 m) (13526 kr)
- 7:54 gå till skrivaren (66 m) (13526 kr)
- 7:55 printar Kapskiva i kolfiber (13526 kr)
- 7:59 tar ut 1 st ur skrivaren (13526 kr)
- 8:04 gå till Rolfs postlåda (16 m) (13526 kr)
- 8:10 gå till sängen (28 m) (13526 kr)

</details>

## Dag 17

| Tid | Källa | Vem | Text |
|---|---|---|---|
| 8:13 | vara | ali | n2_vas |
| 8:13 | händelse | malKlart | id=sov16 del=Dag 16 – Egen mark nasta=m17-kop-angen-oster |
| 8:13 | MÅL |  | Köp ängen i öster – tavlan vid vägen |
| 0:01 | händelse | dagenBorjar | dag=17 |
| 0:01 | meddelande | du | Dag 17. 5 dagar till jul. Utan pengar blir det inget hus före jul. |
| 0:01 | dagbokkort | du | Ängen · Dag 17. 5 dagar till jul. Utan pengar blir det inget hus före jul. |
| 0:01 | röst | du | Dag 17. 5 dagar till jul. Ängen. Utan pengar blir det inget hus före jul. · STORY |
| 0:08 | händelse | morgonkortStangt | dag=17 |
| 0:08 | struken | kedja | d17 |
| 0:08 | paket |  | tanke → sms |
| 0:08 | tanke | du | Fem dagar kvar. Och jag är tillbaka där jag började. |
| 0:08 | väntar | du | Fem dagar kvar. Och jag är tillbaka där jag började. |
| 0:08 | väntar | rolf | Såg att plåten låg på marken. Ja å Ali kommer o hjälper dej me ett riktigt hus. /R |
| 0:08 | väntar | du | Köp ängen i öster – tavlan vid vägen. |
| 0:08 | väntar | notis:2 paket i natt · +3 491 kr | 2 paket i natt · +3 491 kr |
| 0:09 | väntar | notis:Designvas i röd PETG · +50 % | Designvas i röd PETG · +50 % |
| 0:12 | målruta |  | Köp ängen i öster – tavlan vid vägen |
| 0:13 | sak | du | Köp ängen i öster – tavlan vid vägen. |
| 0:13 | pil |  | Köp ängen i öster – tavlan vid vägen |
| 0:13 | röst | du | Köp ängen i öster – tavlan vid vägen. · MÅL |
| 0:16 | klar | du | Köp ängen i öster – tavlan vid vägen. |
| 0:18 | sak | notis:2 paket i natt · +3 491 kr | 2 paket i natt · +3 491 kr |
| 0:18 | notis |  | 2 paket i natt · +3 491 kr |
| 0:21 | klar | notis:2 paket i natt · +3 491 kr | 2 paket i natt · +3 491 kr |
| 0:23 | sak | notis:Designvas i röd PETG · +50 % | Designvas i röd PETG · +50 % |
| 0:23 | notis |  | Designvas i röd PETG · +50 % |
| 0:25 | klar | notis:Designvas i röd PETG · +50 % | Designvas i röd PETG · +50 % |
| 0:32 | struken | ali | Ali här. Din mås stod på min disk i morse. Han köpte inget. |
| 0:32 | struken | ali | Ali här. Hämtade lådan klockan sex. 313 saker, 3 443 kr på ditt konto. Grossistpris. Jag har också en hyra. |
| 0:38 | sak | mamma | Pappa såg bilden. Han sa "aha, vad lugnt då". Det betyder att han är jättestolt. |
| 0:38 | sms | mamma | Pappa såg bilden. Han sa "aha, vad lugnt då". Det betyder att han är jättestolt. |
| 0:38 | sms-bubbla | mamma | Pappa såg bilden. Han sa "aha, vad lugnt då". Det betyder att han är jättestolt. |
| 0:38 | röst | mamma | Pappa såg bilden. Han sa "aha, vad lugnt då". Det betyder att han är jättestolt. · STORY |
| 0:39 | ljud | kajsa | Mjau |
| 0:42 | händelse | printStart | sak=nyckelring |
| 0:43 | händelse | printStart | sak=nyckelring |
| 0:44 | händelse | printStart | sak=nyckelring |
| 0:44 | poolTom | du | 4 repliker använda |
| 0:44 | händelse | printStart | sak=nyckelring |
| 0:45 | händelse | printStart | sak=nyckelring |
| 0:45 | klar | mamma | Pappa såg bilden. Han sa "aha, vad lugnt då". Det betyder att han är jättestolt. |
| 0:46 | händelse | printStart | sak=nyckelring |
| 0:46 | händelse | printStart | sak=nyckelring |
| 0:47 | händelse | printStart | sak=nyckelring |
| 0:48 | händelse | printStart | sak=nyckelring |
| 0:49 | händelse | printStart | sak=nyckelring |
| 0:49 | paket |  | replik → replik |
| 0:49 | väntar | rolf | Hon älska å bada hä. Gå du. Ja står hä en stund. |
| 0:49 | väntar | rolf | Birgittas. Hon vaska för skoj. Hitta aldrig nåt. |
| 0:49 | sak | rolf | Hon älska å bada hä. Gå du. Ja står hä en stund. |
| 0:49 | notis |  | Rolf: ”Hon älska å bada hä. Gå du. Ja står hä en stund.” |
| 0:49 | röst | rolf | Hon älska å bada hä. Gå du. Ja står hä en stund. · STORY |
| 0:49 | händelse | printStart | sak=nyckelring |
| 0:50 | händelse | printStart | sak=nyckelring |
| 0:51 | händelse | printStart | sak=nyckelring |
| 0:51 | händelse | printStart | sak=nyckelring |
| 0:52 | händelse | printStart | sak=nyckelring |
| 0:53 | klar | rolf | Hon älska å bada hä. Gå du. Ja står hä en stund. |
| 0:53 | händelse | printStart | sak=nyckelring |
| 0:53 | händelse | printStart | sak=nyckelring |
| 0:54 | händelse | printStart | sak=nyckelring |
| 0:55 | sak | rolf | Birgittas. Hon vaska för skoj. Hitta aldrig nåt. |
| 0:55 | notis |  | Rolf: ”Birgittas. Hon vaska för skoj. Hitta aldrig nåt.” |
| 0:55 | röst | rolf | Birgittas. Hon vaska för skoj. Hitta aldrig nåt. · STORY |
| 0:55 | händelse | printStart | sak=nyckelring |
| 0:56 | händelse | printStart | sak=nyckelring |
| 0:56 | händelse | printStart | sak=nyckelring |
| 0:57 | händelse | printStart | sak=nyckelring |
| 0:58 | händelse | printStart | sak=nyckelring |
| 0:58 | händelse | printStart | sak=nyckelring |
| 0:59 | klar | rolf | Birgittas. Hon vaska för skoj. Hitta aldrig nåt. |
| 0:59 | händelse | printStart | sak=nyckelring |
| 1:00 | händelse | printStart | sak=nyckelring |
| 1:00 | händelse | printStart | sak=nyckelring |
| 1:01 | händelse | printStart | sak=nyckelring |
| 1:02 | händelse | printStart | sak=nyckelring |
| 1:02 | toast | bra | Startar nästa i kön: nyckelring |
| 1:03 | händelse | printStart | sak=nyckelring |
| 1:03 | händelse | printStart | sak=nyckelring |
| 1:04 | händelse | printStart | sak=nyckelring |
| 1:07 | sak | foto | Min mark |
| 1:07 | foto | du | Min mark |
| 1:10 | klar | foto | Min mark |
| 1:12 | väntar | värld:Mjau. | Mjau. |
| 1:22 | sak | du | Nu kan ingen säga att jag inte hör hemma här. |
| 1:22 | notis | tanke | 💭 Nu kan ingen säga att jag inte hör hemma här. |
| 1:22 | röst | du | Nu kan ingen säga att jag inte hör hemma här. · STORY |
| 1:22 | händelse | printStart | sak=nyckelring |
| 1:23 | händelse | printStart | sak=nyckelring |
| 1:24 | händelse | printStart | sak=nyckelring |
| 1:24 | händelse | printStart | sak=nyckelring |
| 1:25 | händelse | printStart | sak=nyckelring |
| 1:25 | skratt | du | Kajsa i skrivaren |
| 1:26 | klar | du | Nu kan ingen säga att jag inte hör hemma här. |
| 1:26 | händelse | printStart | sak=nyckelring |
| 1:26 | händelse | printStart | sak=nyckelring |
| 1:27 | händelse | printStart | sak=nyckelring |
| 1:28 | händelse | printStart | sak=nyckelring |
| 1:29 | händelse | printStart | sak=nyckelring |
| 1:29 | händelse | printStart | sak=nyckelring |
| 1:30 | händelse | printStart | sak=nyckelring |
| 1:31 | händelse | printStart | sak=nyckelring |
| 1:31 | händelse | printStart | sak=nyckelring |
| 1:32 | händelse | printStart | sak=nyckelring |
| 1:32 | skratt | du | kvarnen spottar |
| 1:32 | struken | värld:Mjau. | Mjau. |
| 1:33 | händelse | printStart | sak=nyckelring |
| 1:33 | händelse | printStart | sak=nyckelring |
| 1:34 | sak | du | Fem dagar kvar. Och jag är tillbaka där jag började. |
| 1:34 | notis | tanke | 💭 Fem dagar kvar. Och jag är tillbaka där jag började. |
| 1:34 | röst | du | Fem dagar kvar. Och jag är tillbaka där jag började. · STORY |
| 1:34 | händelse | printStart | sak=nyckelring |
| 1:35 | händelse | printStart | sak=nyckelring |
| 1:36 | händelse | printStart | sak=nyckelring |
| 1:36 | händelse | printStart | sak=nyckelring |
| 1:37 | händelse | printStart | sak=nyckelring |
| 1:38 | händelse | printStart | sak=nyckelring |
| 1:38 | klar | du | Fem dagar kvar. Och jag är tillbaka där jag började. |
| 1:38 | händelse | printStart | sak=nyckelring |
| 1:39 | händelse | printStart | sak=nyckelring |
| 1:40 | händelse | printStart | sak=nyckelring |
| 1:40 | händelse | printStart | sak=nyckelring |
| 1:41 | händelse | printStart | sak=nyckelring |
| 1:42 | händelse | printStart | sak=nyckelring |
| 1:42 | skratt | du | Kajsa i skrivaren |
| 1:43 | händelse | printStart | sak=nyckelring |
| 1:43 | väntar | kjelle | Inget nytt längs vägen i dag. Bara måsar. Hälsningar till Gunnar. |
| 1:43 | radio | kjelle | Inget nytt längs vägen i dag. Bara måsar. Hälsningar till Gunnar. |
| 1:43 | skratt | du | Radio-Kjelle |
| 1:43 | händelse | printStart | sak=nyckelring |
| 1:43 | toast | bra | Startar nästa i kön: nyckelring |
| 1:44 | händelse | printStart | sak=nyckelring |
| 1:45 | händelse | printStart | sak=nyckelring |
| 1:45 | händelse | printStart | sak=nyckelring |
| 1:46 | sak | kjelle | Inget nytt längs vägen i dag. Bara måsar. Hälsningar till Gunnar. |
| 1:46 | notis |  | 📻 Radio Tippen: Inget nytt längs vägen i dag. Bara måsar. Hälsningar till Gunnar. |
| 1:46 | röst | kjelle | Inget nytt längs vägen i dag. Bara måsar. Hälsningar till Gunnar. · REAKTION |
| 1:52 | klar | kjelle | Inget nytt längs vägen i dag. Bara måsar. Hälsningar till Gunnar. |
| 1:57 | väntar | värld:Mjau. | Mjau. |
| 2:04 | sak | värld:Mjau. | Mjau. |
| 2:04 | bubbla |  | Mjau. |
| 2:04 | händelse | printStart | sak=nyckelring |
| 2:05 | händelse | printStart | sak=nyckelring |
| 2:05 | händelse | printStart | sak=nyckelring |
| 2:06 | klar | värld:Mjau. | Mjau. |
| 2:06 | händelse | printStart | sak=nyckelring |
| 2:07 | händelse | printStart | sak=nyckelring |
| 2:07 | händelse | printStart | sak=nyckelring |
| 2:08 | skratt | du | falsk tuta |
| 2:08 | händelse | printStart | sak=nyckelring |
| 2:09 | händelse | printStart | sak=nyckelring |
| 2:10 | händelse | printStart | sak=nyckelring |
| 2:10 | händelse | printStart | sak=nyckelring |
| 2:11 | händelse | printStart | sak=nyckelring |
| 2:12 | händelse | printStart | sak=nyckelring |
| 2:12 | skratt | du | Kajsa i skrivaren |
| 2:12 | händelse | printStart | sak=nyckelring |
| 2:13 | händelse | printStart | sak=nyckelring |
| 2:14 | händelse | printStart | sak=nyckelring |
| 2:14 | händelse | printStart | sak=nyckelring |
| 2:15 | händelse | printStart | sak=nyckelring |
| 2:16 | händelse | printStart | sak=nyckelring |
| 2:17 | händelse | printStart | sak=nyckelring |
| 2:17 | händelse | printStart | sak=nyckelring |
| 2:18 | händelse | printStart | sak=nyckelring |
| 2:19 | händelse | printStart | sak=nyckelring |
| 2:19 | händelse | printStart | sak=nyckelring |
| 2:20 | händelse | printStart | sak=nyckelring |
| 2:21 | händelse | printStart | sak=nyckelring |
| 2:21 | händelse | printStart | sak=nyckelring |
| 2:22 | händelse | printStart | sak=nyckelring |
| 2:23 | händelse | printStart | sak=nyckelring |
| 2:23 | toast | bra | Startar nästa i kön: nyckelring |
| 2:24 | händelse | printStart | sak=nyckelring |
| 2:24 | händelse | printStart | sak=nyckelring |
| 2:38 | väntar | värld:Mjau. | Mjau. |
| 2:38 | sak | mamma | Pappa säger att du har köpt mark? Hur? Vems? Har du skrivit på något? Skicka papperen till mig så läser jag. |
| 2:38 | sms | mamma | Pappa säger att du har köpt mark? Hur? Vems? Har du skrivit på något? Skicka papperen till mig så läser jag. |
| 2:38 | sms-bubbla | mamma | Pappa säger att du har köpt mark? Hur? Vems? Har du skrivit på något? Skicka papperen till mig så läser jag. |
| 2:38 | röst | mamma | Pappa säger att du har köpt mark? Hur? Vems? Har du skrivit på något? Skicka papperen till mig så läser jag. · STORY |
| 2:42 | händelse | printStart | sak=nyckelring |
| 2:42 | skratt | du | Kajsa i skrivaren |
| 2:43 | händelse | printStart | sak=nyckelring |
| 2:43 | händelse | printStart | sak=nyckelring |
| 2:44 | händelse | printStart | sak=nyckelring |
| 2:44 | poolTom | du | 4 repliker använda |
| 2:45 | händelse | printStart | sak=nyckelring |
| 2:46 | händelse | printStart | sak=nyckelring |
| 2:46 | händelse | printStart | sak=nyckelring |
| 2:47 | händelse | printStart | sak=nyckelring |
| 2:47 | klar | mamma | Pappa säger att du har köpt mark? Hur? Vems? Har du skrivit på något? Skicka papperen till mig så läser jag. |
| 2:48 | händelse | printStart | sak=nyckelring |
| 2:48 | händelse | printStart | sak=nyckelring |
| 2:49 | händelse | printStart | sak=nyckelring |
| 2:49 | struken | värld:Mjau. | Mjau. |
| 2:50 | händelse | printStart | sak=nyckelring |
| 2:50 | händelse | printStart | sak=nyckelring |
| 2:51 | händelse | printStart | sak=nyckelring |
| 2:52 | händelse | printStart | sak=nyckelring |
| 2:53 | händelse | printStart | sak=nyckelring |
| 2:53 | händelse | printStart | sak=nyckelring |
| 2:54 | händelse | printStart | sak=nyckelring |
| 2:55 | händelse | printStart | sak=nyckelring |
| 2:55 | händelse | printStart | sak=nyckelring |
| 2:56 | händelse | printStart | sak=nyckelring |
| 2:57 | händelse | printStart | sak=nyckelring |
| 2:57 | händelse | printStart | sak=nyckelring |
| 2:57 | toast | bra | Startar nästa i kön: nyckelring |
| 2:58 | händelse | printStart | sak=nyckelring |
| 2:59 | händelse | printStart | sak=nyckelring |
| 3:00 | händelse | printStart | sak=nyckelring |
| 3:00 | händelse | printStart | sak=nyckelring |
| 3:01 | händelse | printStart | sak=nyckelring |
| 3:02 | händelse | printStart | sak=nyckelring |
| 3:02 | händelse | printStart | sak=nyckelring |
| 3:03 | händelse | printStart | sak=nyckelring |
| 3:04 | händelse | printStart | sak=nyckelring |
| 3:04 | händelse | printStart | sak=nyckelring |
| 3:05 | händelse | printStart | sak=nyckelring |
| 3:06 | händelse | printStart | sak=nyckelring |
| 3:07 | händelse | printStart | sak=nyckelring |
| 3:07 | händelse | printStart | sak=nyckelring |
| 3:08 | händelse | printStart | sak=nyckelring |
| 3:09 | händelse | printStart | sak=nyckelring |
| 3:09 | händelse | printStart | sak=nyckelring |
| 3:10 | händelse | printStart | sak=nyckelring |
| 3:11 | händelse | printStart | sak=nyckelring |
| 3:11 | händelse | printStart | sak=nyckelring |
| 3:12 | händelse | printStart | sak=nyckelring |
| 3:13 | händelse | printStart | sak=nyckelring |
| 3:14 | händelse | printStart | sak=nyckelring |
| 3:14 | händelse | printStart | sak=nyckelring |
| 3:15 | händelse | printStart | sak=nyckelring |
| 3:16 | händelse | printStart | sak=nyckelring |
| 3:16 | händelse | printStart | sak=nyckelring |
| 3:16 | skratt | du | Kajsa i skrivaren |
| 3:17 | händelse | printStart | sak=nyckelring |
| 3:18 | händelse | printStart | sak=nyckelring |
| 3:18 | händelse | printStart | sak=nyckelring |
| 3:19 | händelse | printStart | sak=nyckelring |
| 3:20 | händelse | printStart | sak=nyckelring |
| 3:21 | händelse | printStart | sak=nyckelring |
| 3:21 | händelse | printStart | sak=nyckelring |
| 3:22 | händelse | printStart | sak=nyckelring |
| 3:23 | händelse | printStart | sak=nyckelring |
| 3:23 | händelse | printStart | sak=nyckelring |
| 3:24 | händelse | printStart | sak=nyckelring |
| 3:25 | händelse | printStart | sak=nyckelring |
| 3:25 | händelse | printStart | sak=nyckelring |
| 3:33 | väntar | värld:Mjau. | Mjau. |
| 3:42 | toast | skak | handen skakar: fullt |
| 3:45 | väntar | rolf | 31 år på bilen och ja har aldrig backat in i nåt. Utom en gång. En brevlåda. Den hade det kommit. /R |
| 3:46 | sak | värld:Mjau. | Mjau. |
| 3:46 | bubbla |  | Mjau. |
| 3:47 | händelse | printStart | sak=nyckelring |
| 3:48 | händelse | printStart | sak=nyckelring |
| 3:48 | händelse | printStart | sak=nyckelring |
| 3:48 | klar | värld:Mjau. | Mjau. |
| 3:49 | händelse | printStart | sak=nyckelring |
| 3:50 | händelse | printStart | sak=nyckelring |
| 3:50 | händelse | printStart | sak=nyckelring |
| 3:51 | händelse | printStart | sak=nyckelring |
| 3:52 | händelse | printStart | sak=nyckelring |
| 3:53 | händelse | printStart | sak=nyckelring |
| 3:53 | händelse | printStart | sak=nyckelring |
| 3:53 | skratt | du | Kajsa i skrivaren |
| 3:54 | händelse | printStart | sak=nyckelring |
| 3:55 | händelse | printStart | sak=nyckelring |
| 3:55 | händelse | printStart | sak=nyckelring |
| 3:56 | händelse | printStart | sak=nyckelring |
| 3:57 | händelse | printStart | sak=nyckelring |
| 3:57 | händelse | printStart | sak=nyckelring |
| 3:58 | händelse | printStart | sak=nyckelring |
| 3:59 | händelse | printStart | sak=nyckelring |
| 4:00 | händelse | printStart | sak=nyckelring |
| 4:00 | händelse | printStart | sak=nyckelring |
| 4:01 | händelse | printStart | sak=nyckelring |
| 4:02 | händelse | printStart | sak=nyckelring |
| 4:02 | händelse | printStart | sak=nyckelring |
| 4:03 | väntar | värld:TUUT! Hej grannen! | TUUT! Hej grannen! |
| 4:03 | sak | värld:TUUT! Hej grannen! | TUUT! Hej grannen! |
| 4:03 | bubbla |  | TUUT! Hej grannen! |
| 4:03 | händelse | printStart | sak=nyckelring |
| 4:04 | händelse | printStart | sak=nyckelring |
| 4:04 | händelse | printStart | sak=nyckelring |
| 4:05 | händelse | printStart | sak=nyckelring |
| 4:06 | klar | värld:TUUT! Hej grannen! | TUUT! Hej grannen! |
| 4:06 | händelse | printStart | sak=nyckelring |
| 4:07 | händelse | printStart | sak=nyckelring |
| 4:07 | händelse | printStart | sak=nyckelring |
| 4:08 | händelse | printStart | sak=nyckelring |
| 4:09 | händelse | printStart | sak=nyckelring |
| 4:09 | händelse | printStart | sak=nyckelring |
| 4:09 | toast | bra | Startar nästa i kön: nyckelring |
| 4:10 | händelse | printStart | sak=nyckelring |
| 4:10 | skratt | du | Kajsa i skrivaren |
| 4:11 | händelse | printStart | sak=nyckelring |
| 4:11 | händelse | printStart | sak=nyckelring |
| 4:12 | händelse | printStart | sak=nyckelring |
| 4:23 | väntar | värld:Mjau. | Mjau. |
| 4:26 | sak | värld:Mjau. | Mjau. |
| 4:26 | bubbla |  | Mjau. |
| 4:26 | händelse | printStart | sak=nyckelring |
| 4:27 | händelse | printStart | sak=nyckelring |
| 4:28 | händelse | printStart | sak=nyckelring |
| 4:28 | klar | värld:Mjau. | Mjau. |
| 4:28 | händelse | printStart | sak=nyckelring |
| 4:29 | händelse | printStart | sak=nyckelring |
| 4:30 | händelse | printStart | sak=nyckelring |
| 4:30 | händelse | printStart | sak=nyckelring |
| 4:31 | händelse | printStart | sak=nyckelring |
| 4:32 | händelse | printStart | sak=nyckelring |
| 4:33 | händelse | printStart | sak=nyckelring |
| 4:33 | händelse | printStart | sak=nyckelring |
| 4:34 | händelse | printStart | sak=nyckelring |
| 4:35 | händelse | printStart | sak=nyckelring |
| 4:35 | händelse | printStart | sak=nyckelring |
| 4:36 | händelse | printStart | sak=nyckelring |
| 4:37 | händelse | printStart | sak=nyckelring |
| 4:37 | händelse | printStart | sak=nyckelring |
| 4:38 | händelse | printStart | sak=nyckelring |
| 4:39 | händelse | printStart | sak=nyckelring |
| 4:40 | händelse | printStart | sak=nyckelring |
| 4:40 | händelse | printStart | sak=nyckelring |
| 4:41 | händelse | printStart | sak=nyckelring |
| 4:42 | händelse | printStart | sak=nyckelring |
| 4:42 | händelse | printStart | sak=nyckelring |
| 4:43 | händelse | printStart | sak=nyckelring |
| 4:44 | händelse | printStart | sak=nyckelring |
| 4:44 | toast | bra | Startar nästa i kön: nyckelring |
| 4:44 | poolTom | du | 4 repliker använda |
| 4:44 | händelse | printStart | sak=nyckelring |
| 4:45 | händelse | printStart | sak=nyckelring |
| 4:53 | toast | skak | handen skakar: fullt |
| 4:58 | händelse | printStart | sak=nyckelring |
| 4:59 | händelse | printStart | sak=nyckelring |
| 5:00 | händelse | printStart | sak=nyckelring |
| 5:01 | händelse | printStart | sak=nyckelring |
| 5:01 | händelse | printStart | sak=nyckelring |
| 5:02 | händelse | printStart | sak=nyckelring |
| 5:03 | händelse | printStart | sak=nyckelring |
| 5:03 | händelse | printStart | sak=nyckelring |
| 5:04 | händelse | printStart | sak=nyckelring |
| 5:05 | händelse | printStart | sak=nyckelring |
| 5:05 | händelse | printStart | sak=nyckelring |
| 5:06 | händelse | printStart | sak=nyckelring |
| 5:07 | händelse | printStart | sak=nyckelring |
| 5:08 | händelse | printStart | sak=nyckelring |
| 5:08 | händelse | printStart | sak=nyckelring |
| 5:09 | händelse | printStart | sak=nyckelring |
| 5:10 | händelse | printStart | sak=nyckelring |
| 5:10 | händelse | printStart | sak=nyckelring |
| 5:11 | händelse | printStart | sak=nyckelring |
| 5:12 | händelse | printStart | sak=nyckelring |
| 5:12 | skratt | du | Kajsa i skrivaren |
| 5:12 | händelse | printStart | sak=nyckelring |
| 5:13 | händelse | printStart | sak=nyckelring |
| 5:14 | händelse | printStart | sak=nyckelring |
| 5:15 | händelse | printStart | sak=nyckelring |
| 5:15 | händelse | printStart | sak=nyckelring |
| 5:16 | händelse | printStart | sak=nyckelring |
| 5:17 | händelse | printStart | sak=nyckelring |
| 5:17 | händelse | printStart | sak=nyckelring |
| 5:18 | händelse | printStart | sak=nyckelring |
| 5:18 | toast | bra | Startar nästa i kön: nyckelring |
| 5:19 | händelse | printStart | sak=nyckelring |
| 5:19 | händelse | printStart | sak=nyckelring |
| 5:20 | händelse | printStart | sak=nyckelring |
| 5:21 | händelse | printStart | sak=nyckelring |
| 5:22 | händelse | printStart | sak=nyckelring |
| 5:22 | händelse | printStart | sak=nyckelring |
| 5:26 | väntar | värld:Mjau. | Mjau. |
| 5:26 | sak | värld:Mjau. | Mjau. |
| 5:26 | bubbla |  | Mjau. |
| 5:29 | klar | värld:Mjau. | Mjau. |
| 5:36 | skratt | du | falsk tuta |
| 5:43 | händelse | printStart | sak=nyckelring |
| 5:44 | händelse | printStart | sak=nyckelring |
| 5:45 | händelse | printStart | sak=nyckelring |
| 5:45 | händelse | printStart | sak=nyckelring |
| 5:46 | händelse | printStart | sak=nyckelring |
| 5:47 | händelse | printStart | sak=nyckelring |
| 5:47 | händelse | printStart | sak=nyckelring |
| 5:48 | händelse | printStart | sak=nyckelring |
| 5:49 | händelse | printStart | sak=nyckelring |
| 5:49 | händelse | printStart | sak=nyckelring |
| 5:50 | händelse | printStart | sak=nyckelring |
| 5:51 | händelse | printStart | sak=nyckelring |
| 5:52 | händelse | printStart | sak=nyckelring |
| 5:52 | händelse | printStart | sak=nyckelring |
| 5:53 | händelse | printStart | sak=nyckelring |
| 5:54 | händelse | printStart | sak=nyckelring |
| 5:54 | händelse | printStart | sak=nyckelring |
| 5:55 | händelse | printStart | sak=nyckelring |
| 5:56 | händelse | printStart | sak=nyckelring |
| 5:56 | händelse | printStart | sak=nyckelring |
| 5:57 | händelse | printStart | sak=nyckelring |
| 5:58 | väntar | värld:TUUT TUUT! | TUUT TUUT! |
| 5:58 | sak | värld:TUUT TUUT! | TUUT TUUT! |
| 5:58 | bubbla |  | TUUT TUUT! |
| 5:58 | händelse | printStart | sak=nyckelring |
| 5:59 | händelse | printStart | sak=nyckelring |
| 5:59 | händelse | printStart | sak=nyckelring |
| 6:00 | händelse | printStart | sak=nyckelring |
| 6:01 | händelse | printStart | sak=nyckelring |
| 6:01 | klar | värld:TUUT TUUT! | TUUT TUUT! |
| 6:01 | händelse | printStart | sak=nyckelring |
| 6:02 | händelse | printStart | sak=nyckelring |
| 6:03 | händelse | printStart | sak=nyckelring |
| 6:03 | händelse | printStart | sak=nyckelring |
| 6:04 | händelse | printStart | sak=nyckelring |
| 6:05 | händelse | printStart | sak=nyckelring |
| 6:06 | händelse | printStart | sak=nyckelring |
| 6:06 | händelse | printStart | sak=nyckelring |
| 6:07 | händelse | printStart | sak=nyckelring |
| 6:08 | händelse | printStart | sak=nyckelring |
| 6:08 | händelse | printStart | sak=nyckelring |
| 6:08 | toast | bra | Startar nästa i kön: nyckelring |
| 6:09 | händelse | printStart | sak=nyckelring |
| 6:10 | händelse | printStart | sak=nyckelring |
| 6:10 | händelse | printStart | sak=nyckelring |
| 6:11 | händelse | printStart | sak=nyckelring |
| 6:19 | skratt | du | kvarnen rapar |
| 6:21 | toast | guld | 🧵 |
| 6:25 | händelse | printStart | sak=n2_hjalm |
| 6:30 | toast | guld | ✅ |
| 6:30 | händelse | printKlar | sak=n2_hjalm n=19 |
| 6:30 | toast | guld | 🧵 |
| 6:31 | nej | du | Ta ut cykelhjälm i petg |
| 6:31 | toast | fickskylt | Fulla fickor |
| 6:31 | fullaFickor | du | n2_hjalm |
| 6:31 | händelse | tagitUrPrint | sak=n2_hjalm n=1 |
| 6:46 | webb | du | packade 1 n2_hjalm |
| 6:55 | webb | du | packade 1 kruka |
| 7:10 | väntar | info:bra | 📦 Paketet till En lärare i Sundsvall ligger i postlådan – Rolf tar det till posten |
| 7:10 | sak | info:bra | 📦 Paketet till En lärare i Sundsvall ligger i postlådan – Rolf tar det till posten |
| 7:10 | kvitto-visas | info:bra | 📦 Paketet till En lärare i Sundsvall ligger i postlådan – Rolf tar det till posten |
| 7:10 | toast | bra | 📦 Paketet till En lärare i Sundsvall ligger i postlådan – Rolf tar det till posten |
| 7:11 | väntar | info:bra | 📦 Paketet till Ett kafé i Ystad ligger i postlådan – Rolf tar det till posten |
| 7:12 | klar | info:bra | 📦 Paketet till En lärare i Sundsvall ligger i postlådan – Rolf tar det till posten |
| 7:12 | sak | info:bra | 📦 Paketet till Ett kafé i Ystad ligger i postlådan – Rolf tar det till posten |
| 7:12 | kvitto-visas | info:bra | 📦 Paketet till Ett kafé i Ystad ligger i postlådan – Rolf tar det till posten |
| 7:12 | toast | bra | 📦 Paketet till Ett kafé i Ystad ligger i postlådan – Rolf tar det till posten |
| 7:14 | klar | info:bra | 📦 Paketet till Ett kafé i Ystad ligger i postlådan – Rolf tar det till posten |
| 7:16 | händelse | printStart | sak=n3_stol |
| 7:23 | toast | guld | ✅ |
| 7:23 | händelse | printKlar | sak=n3_stol n=10 |
| 7:24 | händelse | tagitUrPrint | sak=n3_stol n=1 |
| 7:26 | poolTom | du | 4 repliker använda |
| 7:31 | röst | ali | Jag har sålt min första egna ritning. Till en man i Örebro. Han skrev bra lampa. Jag har ramat in mejlet. · STORY |
| 7:31 | butiksbubbla | ali | Jag har sålt min första egna ritning. Till en man i Örebro. Han skrev bra lampa. Jag har ramat in mejlet. |
| 7:33 | aliSalt | ali | 16000 |
| 7:33 | aliSalt | ali | 120 |
| 7:33 | aliSalt | ali | 114 |
| 7:33 | aliSalt | ali | 108 |
| 7:38 | väntar | info:guld | 🌲 Ängen i öster är din! Gärdesgården har flyttats – där får du ställa saker nu. |
| 7:38 | paket |  | sms |
| 7:38 | väntar | rolf | Ängen e din. Bengt-Åke frågade vad du ska ha den till. Ja sa solpaneler. Han trodde ja sa "sol-paella". Han va glad ändå. /R |
| 7:38 | sak | info:guld | 🌲 Ängen i öster är din! Gärdesgården har flyttats – där får du ställa saker nu. |
| 7:38 | kvitto-visas | info:guld | 🌲 Ängen i öster är din! Gärdesgården har flyttats – där får du ställa saker nu. |
| 7:38 | toast | guld | 🌲 Ängen i öster är din! Gärdesgården har flyttats – där får du ställa saker nu. |
| 7:38 | händelse | malKlart | id=m17-kop-angen-oster del=Dag 17 – Ängen nasta=m17-vaska-guld-floden |
| 7:38 | väntar | du | Vaska guld i floden. |
| 7:38 | MÅL |  | Vaska guld i floden |
| 7:40 | klar | info:guld | 🌲 Ängen i öster är din! Gärdesgården har flyttats – där får du ställa saker nu. |
| 7:40 | målruta |  | Vaska guld i floden |
| 7:42 | kvittens-bock |  | ✓ Köp ängen i öster – tavlan vid vägen |
| 7:42 | sak | du | Vaska guld i floden. |
| 7:42 | pil |  | Vaska guld i floden |
| 7:42 | röst | du | Vaska guld i floden. · MÅL |
| 7:44 | klar | du | Vaska guld i floden. |
| 7:53 | skratt | du | falsk tuta |
| 7:56 | paket |  | tanke |
| 7:56 | tanke | du | En kapsyl. |
| 7:56 | väntar | du | En kapsyl. |
| 7:56 | sak | du | En kapsyl. |
| 7:56 | notis | tanke | 💭 En kapsyl. |
| 7:56 | röst | du | En kapsyl. · REAKTION |
| 7:56 | händelse | malKlart | id=m17-vaska-guld-floden del=Dag 17 – Ängen nasta=m17-solpark2 |
| 7:56 | MÅL |  | Printa och sälj |
| 7:58 | väntar | info:guld | ✨ Guld! (1.9 s) |
| 7:58 | skratt | du | första guldet |
| 7:59 | klar | du | En kapsyl. |
| 7:59 | sak | info:guld | ✨ Guld! (1.9 s) |
| 7:59 | kvitto-visas | info:guld | ✨ Guld! (1.9 s) |
| 7:59 | toast | guld | ✨ Guld! (1.9 s) |
| 8:00 | målruta |  | Printa och sälj |
| 8:00 | kvittens-bock |  | ✓ Vaska guld i floden |
| 8:01 | paket |  | tanke |
| 8:01 | tanke | du | En kapsyl. Igen. |
| 8:01 | väntar | du | En kapsyl. Igen. |
| 8:01 | klar | info:guld | ✨ Guld! (1.9 s) |
| 8:03 | sak | du | (nytt mål i rutan) |
| 8:03 | pil |  | Printa och sälj |
| 8:03 | klar | du | (nytt mål i rutan) |
| 8:09 | sak | du | En kapsyl. Igen. |
| 8:09 | notis | tanke | 💭 En kapsyl. Igen. |
| 8:09 | röst | du | En kapsyl. Igen. · REAKTION |
| 8:12 | klar | du | En kapsyl. Igen. |
| 8:13 | händelse | printStart | sak=n3_stol |
| 8:20 | toast | guld | ✅ |
| 8:20 | händelse | printKlar | sak=n3_stol n=11 |
| 8:21 | nej | du | Ta ut kolfiberstol |
| 8:21 | toast | fickskylt | Fulla fickor |
| 8:21 | fullaFickor | du | n3_stol |
| 8:21 | händelse | tagitUrPrint | sak=n3_stol n=1 |
| 8:31 | aliSalt | ali | 15200 |
| 8:31 | aliSalt | ali | 170 |
| 8:32 | väntar | ali | Tjugofem år bakom disken. Du är det roligaste som hänt. |
| 8:32 | sak | ali | Tjugofem år bakom disken. Du är det roligaste som hänt. |
| 8:32 | röst | ali | Tjugofem år bakom disken. Du är det roligaste som hänt. · SMÅPRAT |
| 8:33 | bubbla |  | Tjugofem år bakom disken. Du är det roligaste som hänt. |
| 8:36 | klar | ali | Tjugofem år bakom disken. Du är det roligaste som hänt. |
| 8:47 | händelse | printStart | sak=n3_stol |
| 8:54 | toast | guld | ✅ |
| 8:54 | händelse | printKlar | sak=n3_stol n=12 |
| 8:55 | händelse | tagitUrPrint | sak=n3_stol n=1 |
| 9:04 | aliSalt | ali | 14440 |
| 9:14 | händelse | printStart | sak=n3_stol |
| 9:21 | toast | guld | ✅ |
| 9:21 | händelse | printKlar | sak=n3_stol n=13 |
| 9:22 | händelse | tagitUrPrint | sak=n3_stol n=1 |
| 9:26 | poolTom | du | 4 repliker använda |
| 9:31 | aliSalt | ali | 13718 |
| 9:42 | händelse | printStart | sak=n3_stol |
| 9:47 | väntar | värld:TUUT! Tjena! | TUUT! Tjena! |
| 9:48 | sak | värld:TUUT! Tjena! | TUUT! Tjena! |
| 9:48 | bubbla |  | TUUT! Tjena! |
| 9:48 | toast | guld | ✅ |
| 9:48 | händelse | printKlar | sak=n3_stol n=14 |
| 9:49 | händelse | tagitUrPrint | sak=n3_stol n=1 |
| 9:51 | klar | värld:TUUT! Tjena! | TUUT! Tjena! |
| 9:58 | aliSalt | ali | 13032 |
| 10:09 | händelse | printStart | sak=n3_stol |
| 10:16 | toast | guld | ✅ |
| 10:16 | händelse | printKlar | sak=n3_stol n=15 |
| 10:17 | händelse | tagitUrPrint | sak=n3_stol n=1 |
| 10:26 | aliSalt | ali | 12380 |
| 10:37 | händelse | printStart | sak=n3_stol |
| 10:43 | toast | guld | ✅ |
| 10:43 | händelse | printKlar | sak=n3_stol n=16 |
| 10:44 | händelse | tagitUrPrint | sak=n3_stol n=1 |
| 10:53 | aliSalt | ali | 11761 |
| 11:11 | upplåst | strom | solpark2 |
| 11:11 | brott | RESERV | solpark2 (strom 0 av 15) |
| 11:11 | händelse | upplast | id=solpark2 flask=strom |
| 11:11 | paket |  | sms |
| 11:11 | väntar | ali | Ali här. Solcellspark nummer två. Ängen är din nu. Sätt den där. |
| 11:11 | sak | ali | Ali här. Solcellspark nummer två. Ängen är din nu. Sätt den där. |
| 11:11 | sms | ali | Ali här. Solcellspark nummer två. Ängen är din nu. Sätt den där. |
| 11:11 | sms-bubbla | ali | Ali här. Solcellspark nummer två. Ängen är din nu. Sätt den där. |
| 11:11 | röst | ali | Ali här. Solcellspark nummer två. Ängen är din nu. Sätt den där. · STORY |
| 11:17 | klar | ali | Ali här. Solcellspark nummer två. Ängen är din nu. Sätt den där. |
| 11:21 | skratt | du | falsk tuta |
| 11:26 | poolTom | du | 4 repliker använda |
| 13:26 | poolTom | du | 4 repliker använda |
| 13:37 | skratt | du | falsk tuta |
| 15:09 | händelse | printStart | sak=n2_vas |
| 15:12 | toast | guld | ✅ |
| 15:12 | händelse | printKlar | sak=n2_vas n=33 |
| 15:12 | händelse | tagitUrPrint | sak=n2_vas n=1 |
| 15:20 | aliSalt | ali | 1185 |
| 15:24 | skratt | du | Alis dyr-pling |
| 15:24 | toast | guld | 3D-modell köpt – printa solcellspark på skrivaren |
| 15:24 | händelse | kopt | sak=solpark |
| 15:26 | poolTom | du | 4 repliker använda |
| 15:32 | väntar | värld:TUUT TUUT! | TUUT TUUT! |
| 15:40 | sak | värld:TUUT TUUT! | TUUT TUUT! |
| 15:40 | bubbla |  | TUUT TUUT! |
| 15:41 | händelse | printStart | sak=nyckelring |
| 15:42 | toast | guld | ✅ |
| 15:42 | händelse | printKlar | sak=nyckelring n=641 |
| 15:43 | klar | värld:TUUT TUUT! | TUUT TUUT! |
| 15:49 | händelse | printStart | sak=byggsats:solpark |
| 15:51 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 15:53 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 15:54 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 15:55 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 15:57 | toast | bra | Del 1 av 4 klar |
| 15:57 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 15:57 | väntar | notis:Skrivare L: Tornet är tomt – mal mer så  | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 15:57 | sak | notis:Skrivare L: Tornet är tomt – mal mer så  | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 15:57 | notis | fel | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 15:58 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 15:58 | struken | notis | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 15:59 | klar | notis:Skrivare L: Tornet är tomt – mal mer så  | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 16:00 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 16:00 | struken | notis | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 16:01 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 16:01 | struken | notis | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 16:02 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 16:02 | struken | notis | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 16:04 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 16:04 | struken | notis | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 16:05 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 16:06 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 16:07 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 16:08 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 16:08 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 16:09 | toast | bra | Del 2 av 4 klar |
| 16:09 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 16:10 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 16:11 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 16:12 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 16:13 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 16:14 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 16:15 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 16:16 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 16:17 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 16:18 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 16:19 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 16:20 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 16:21 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 16:28 | toast | skak | handen skakar: fullt |
| 16:33 | toast | bra | Del 3 av 4 klar |
| 16:34 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 16:36 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 16:38 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 16:40 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 16:42 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 16:44 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 16:46 | händelse | printKlar | sak=byggsats:solpark n=1 |
| 16:46 | toast | guld | ✅ |
| 16:52 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 16:52 | händelse | tagitUrPrint | sak=byggsats:solpark n=1 |
| 16:52 | väntar | info:bra | Tog ut 1 nyckelring, 1 solcellspark |
| 16:52 | sak | info:bra | Tog ut 1 nyckelring, 1 solcellspark |
| 16:52 | kvitto-visas | info:bra | Tog ut 1 nyckelring, 1 solcellspark |
| 16:52 | toast | bra | Tog ut 1 nyckelring, 1 solcellspark |
| 16:54 | klar | info:bra | Tog ut 1 nyckelring, 1 solcellspark |
| 17:03 | händelse | placerat | sak=solpark |
| 17:03 | händelse | malKlart | id=m17-solpark2 del=Dag 17 – Ängen nasta=sov17 |
| 17:03 | paket |  | lapp |
| 17:03 | lapp | 📔 Dagbok | Dag 17 är slut. Fem dagar kvar. Inget tak. |
| 17:03 | kvallsrad | du | Fem dagar kvar. Inget tak. |
| 17:03 | målruta |  | Klart för idag – sov när du vill |
| 17:03 | MÅL |  | Klart för idag – sov när du vill |
| 17:04 | sak | du | (nytt mål i rutan) |
| 17:04 | pil |  | Klart för idag – sov när du vill |
| 17:04 | klar | du | (nytt mål i rutan) |
| 17:05 | skratt | du | falsk tuta |
| 17:10 | väntar | notis:🌇 Klockan är 21. Ali slår igen luckan.  | 🌇 Klockan är 21. Ali slår igen luckan. Dagens jobb är klart – gå in i skjulet och sov i sängen. |
| 17:14 | paket |  | sms |
| 17:14 | väntar | ali | Ali här. Hämtade lådan klockan sex. 300 saker, 3 300 kr på ditt konto. Grossistpris. Jag har också en hyra. |
| 17:14 | webbBetalt | du | 2232 |
| 17:14 | nattkort | du | 🌙 Dag 17 är slut. God natt. zzz… Fem dagar kvar. Inget tak. DAGENS PRINTAR Nyckelring × 301 Kolfiberstol × 7 Cykelhjälm i PETG × 1 Designvas i röd PETG × 1 Tot |

<details><summary>Botens handlingar dag 17</summary>

- 0:00 — dag 17 börjar — (20460 kr)
- 0:08 popup: "FORTSÄTT" (20460 kr)
- 0:26 gå till Rolfs postlåda (28 m) (20460 kr)
- 0:32 panel: "Rolfs postlåda
Det här låg i l" (20460 kr)
- 0:38 plockar 2 skräp på tippen (bär max 16) (20460 kr)
- 0:41 gå till kvarnen (15 m) (20460 kr)
- 1:00 gå till skrivaren (7 m) (20460 kr)
- 1:02 printar Nyckelring (20460 kr)
- 1:18 plockar 11 skräp på tippen (bär max 16) (20460 kr)
- 1:21 gå till kvarnen (15 m) (20460 kr)
- 1:41 gå till skrivaren (7 m) (20460 kr)
- 1:43 printar Nyckelring (20460 kr)
- 1:59 plockar 9 skräp på tippen (bär max 16) (20460 kr)
- 2:03 gå till kvarnen (17 m) (20460 kr)
- 2:21 gå till skrivaren (7 m) (20460 kr)
- 2:22 printar Nyckelring (20460 kr)
- 2:38 plockar 10 skräp på tippen (bär max 16) (20460 kr)
- 2:40 gå till kvarnen (14 m) (20460 kr)
- 2:56 gå till skrivaren (7 m) (20460 kr)
- 2:57 printar Nyckelring (20460 kr)
- 3:43 plockar 12 skräp på tippen (bär max 16) (20460 kr)
- 3:46 gå till kvarnen (15 m) (20460 kr)
- 4:08 gå till skrivaren (7 m) (20460 kr)
- 4:09 printar Nyckelring (20460 kr)
- 4:22 plockar 4 skräp på tippen (bär max 16) (20460 kr)
- 4:25 gå till kvarnen (15 m) (20460 kr)
- 4:42 gå till skrivaren (7 m) (20460 kr)
- 4:44 printar Nyckelring (20460 kr)
- 4:54 plockar 1 skräp på tippen (bär max 16) (20460 kr)
- 4:58 gå till kvarnen (16 m) (20460 kr)
- 5:16 gå till skrivaren (7 m) (20460 kr)
- 5:18 printar Nyckelring (20460 kr)
- 5:39 plockar 14 skräp på tippen (bär max 16) (20460 kr)
- 5:42 gå till kvarnen (16 m) (20460 kr)
- 6:06 gå till skrivaren (7 m) (20460 kr)
- 6:08 printar Nyckelring (20460 kr)
- 6:15 gå till en tunna (13 m) (20460 kr)
- 6:19 gå till PETG-kvarnen (11 m) (20460 kr)
- 6:19 tömmer det tunga i PETG-kvarnen (20460 kr)
- 6:24 gå till skrivaren (3 m) (20460 kr)
- 6:25 printar Cykelhjälm i PETG (20460 kr)
- 6:31 tar ut 1 st ur skrivaren (20460 kr)
- 6:31 fulla fickor – lägger fynd3 i kistan (20460 kr)
- 6:37 gå till datorn (23 m) (20460 kr)
- 6:45 panel: "Webbshopen · Soptippsvägen 1
B" (20460 kr)
- 6:55 panel: "Webbshopen · Soptippsvägen 1
B" (20460 kr)
- 7:04 panel: "Webbshopen · Soptippsvägen 1
B" (20460 kr)
- 7:10 gå till Rolfs postlåda (paket) (29 m) (20460 kr)
- 7:11 webbshop: 2 paket i postlådan (20460 kr)
- 7:11 tjänar pengar till ängen i öster: 20460/28500 kr → printar kolfiberstol (16000 kr) (20460 kr)
- 7:14 gå till skrivaren (15 m) (20460 kr)
- 7:16 printar Kolfiberstol (20460 kr)
- 7:24 tar ut 1 st ur skrivaren (20460 kr)
- 7:31 gå till Ali (34 m) (20460 kr)
- 7:31 öppnar Alis butik – sälja (20460 kr)
- 7:34 säljer hos Ali: +16342 kr (36802 kr)
- 7:38 gå till tavlan vid vägen (6 m) (36802 kr)
- 7:38 köper ängen i öster (28500 kr) (8302 kr)
- 7:56 gå till bäcken (52 m) (8302 kr)
- 8:03 vaskar i bäcken (8302 kr)
- 8:05 tjänar pengar till väntar på flaskhalsen för solpark2: 8302/8342 kr → printar kolfiberstol (15200 kr) (8302 kr)
- 8:11 gå till skrivaren (31 m) (8302 kr)
- 8:13 printar Kolfiberstol (8302 kr)
- 8:21 tar ut 1 st ur skrivaren (8302 kr)
- 8:21 fulla fickor – lägger vaskpanna i kistan (8302 kr)
- 8:29 gå till Ali (35 m) (8302 kr)
- 8:29 öppnar Alis butik – sälja (8302 kr)
- 8:31 säljer hos Ali: +15370 kr (23672 kr)
- 8:39 tjänar pengar till väntar på flaskhalsen för solpark2: 23672/23712 kr → printar kolfiberstol (14440 kr) (23672 kr)
- 8:45 gå till skrivaren (33 m) (23672 kr)
- 8:47 printar Kolfiberstol (23672 kr)
- 8:55 tar ut 1 st ur skrivaren (23672 kr)
- 9:02 gå till Ali (33 m) (23672 kr)
- 9:02 öppnar Alis butik – sälja (23672 kr)
- 9:04 säljer hos Ali: +14440 kr (38112 kr)
- 9:06 tjänar pengar till väntar på flaskhalsen för solpark2: 38112/38152 kr → printar kolfiberstol (13718 kr) (38112 kr)
- 9:13 gå till skrivaren (33 m) (38112 kr)
- 9:14 printar Kolfiberstol (38112 kr)
- 9:23 tar ut 1 st ur skrivaren (38112 kr)
- 9:29 gå till Ali (33 m) (38112 kr)
- 9:29 öppnar Alis butik – sälja (38112 kr)
- 9:31 säljer hos Ali: +13718 kr (51830 kr)
- 9:33 tjänar pengar till väntar på flaskhalsen för solpark2: 51830/51870 kr → printar kolfiberstol (13032 kr) (51830 kr)
- 9:40 gå till skrivaren (33 m) (51830 kr)
- 9:42 printar Kolfiberstol (51830 kr)
- 9:50 tar ut 1 st ur skrivaren (51830 kr)
- 9:57 gå till Ali (33 m) (51830 kr)
- 9:57 öppnar Alis butik – sälja (51830 kr)
- 9:59 säljer hos Ali: +13032 kr (64862 kr)
- 10:01 tjänar pengar till väntar på flaskhalsen för solpark2: 64862/64902 kr → printar kolfiberstol (12380 kr) (64862 kr)
- 10:08 gå till skrivaren (33 m) (64862 kr)
- 10:09 printar Kolfiberstol (64862 kr)
- 10:17 tar ut 1 st ur skrivaren (64862 kr)
- 10:24 gå till Ali (33 m) (64862 kr)
- 10:24 öppnar Alis butik – sälja (64862 kr)
- 10:26 säljer hos Ali: +12380 kr (77242 kr)
- 10:28 tjänar pengar till väntar på flaskhalsen för solpark2: 77242/77282 kr → printar kolfiberstol (11761 kr) (77242 kr)
- 10:35 gå till skrivaren (33 m) (77242 kr)
- 10:37 printar Kolfiberstol (77242 kr)
- 10:45 tar ut 1 st ur skrivaren (77242 kr)
- 10:52 gå till Ali (33 m) (77242 kr)
- 10:52 öppnar Alis butik – sälja (77242 kr)
- 10:53 säljer hos Ali: +11761 kr (89003 kr)
- 10:56 tjänar pengar till väntar på flaskhalsen för solpark2: 89003/89043 kr → printar kolfiberstol (11200 kr) (89003 kr)
- 10:56 väntar på kolfiber från bandet (89003 kr)
- 11:04 väntar på kolfiber från bandet (89003 kr)
- 11:12 väntar på kolfiber från bandet (89003 kr)
- 11:20 väntar på kolfiber från bandet (89003 kr)
- 11:28 väntar på kolfiber från bandet (89003 kr)
- 11:36 väntar på kolfiber från bandet (89003 kr)
- 11:44 väntar på kolfiber från bandet (89003 kr)
- 11:52 väntar på kolfiber från bandet (89003 kr)
- 12:00 väntar på kolfiber från bandet (89003 kr)
- 12:08 väntar på kolfiber från bandet (89003 kr)
- 12:17 väntar på kolfiber från bandet (89003 kr)
- 12:25 väntar på kolfiber från bandet (89003 kr)
- 12:33 väntar på kolfiber från bandet (89003 kr)
- 12:41 väntar på kolfiber från bandet (89003 kr)
- 12:49 väntar på kolfiber från bandet (89003 kr)
- 12:57 väntar på kolfiber från bandet (89003 kr)
- 13:05 väntar på kolfiber från bandet (89003 kr)
- 13:13 väntar på kolfiber från bandet (89003 kr)
- 13:21 väntar på kolfiber från bandet (89003 kr)
- 13:29 väntar på kolfiber från bandet (89003 kr)
- 13:38 väntar på kolfiber från bandet (89003 kr)
- 13:46 väntar på kolfiber från bandet (89003 kr)
- 13:54 väntar på kolfiber från bandet (89003 kr)
- 14:02 väntar på kolfiber från bandet (89003 kr)
- 14:10 väntar på kolfiber från bandet (89003 kr)
- 14:18 väntar på kolfiber från bandet (89003 kr)
- 14:26 väntar på kolfiber från bandet (89003 kr)
- 14:34 väntar på kolfiber från bandet (89003 kr)
- 14:42 väntar på kolfiber från bandet (89003 kr)
- 14:50 väntar på kolfiber från bandet (89003 kr)
- 14:59 väntar på kolfiber från bandet (89003 kr)
- 14:59 kolfiberstol gick inte att printa – tar nästa (89003 kr)
- 14:59 öppnar Alis butik – sälja (89003 kr)
- 15:01 tjänar pengar till väntar på flaskhalsen för solpark2: 89003/89043 kr → printar designvas i röd petg (1185 kr) (89003 kr)
- 15:07 gå till skrivaren (29 m) (89003 kr)
- 15:09 printar Designvas i röd PETG (89003 kr)
- 15:13 tar ut 1 st ur skrivaren (89003 kr)
- 15:19 gå till Ali (29 m) (89003 kr)
- 15:19 öppnar Alis butik – sälja (89003 kr)
- 15:20 säljer hos Ali: +1185 kr (90188 kr)
- 15:23 öppnar Alis butik – köpa solcellspark (90188 kr)
- 15:25 köper solpark för 4800 kr (85388 kr)
- 15:38 plockar 5 skräp på tippen (bär max 16) (85388 kr)
- 15:40 gå till kvarnen (9 m) (85388 kr)
- 15:48 gå till skrivaren (7 m) (85388 kr)
- 15:49 printar Solcellspark (4 delar) (85388 kr)
- 16:02 plockar 4 skräp på tippen (bär max 16) (85388 kr)
- 16:04 gå till kvarnen (11 m) (85388 kr)
- 16:28 plockar 4 skräp på tippen (bär max 16) (85388 kr)
- 16:31 gå till kvarnen (14 m) (85388 kr)
- 16:52 gå till skrivaren (7 m) (85388 kr)
- 16:53 tar ut 2 st ur skrivaren (85388 kr)
- 17:02 gå till platsen för solcellspark (45 m) (85388 kr)
- 17:03 ställer ut solcellspark (85388 kr)
- 17:12 gå till sängen (24 m) (85388 kr)

</details>

## Dag 18

| Tid | Källa | Vem | Text |
|---|---|---|---|
| 17:14 | vara | ali | n2_hjalm |
| 17:14 | händelse | malKlart | id=sov17 del=Dag 17 – Ängen nasta=m18-bygg-diamantkvarnen |
| 17:14 | MÅL |  | Bygg diamantkvarnen |
| 0:01 | händelse | dagenBorjar | dag=18 |
| 0:01 | meddelande | du | Dag 18. 4 dagar till jul. Utan grund blir det inget hus före jul. |
| 0:01 | dagbokkort | du | Diamantkvarnen och grunden · Dag 18. 4 dagar till jul. Utan grund blir det inget hus före jul. |
| 0:01 | röst | du | Dag 18. 4 dagar till jul. Diamantkvarnen och grunden. Utan grund blir det inget hus före jul. · STORY |
| 0:03 | paket |  | sms |
| 0:03 | väntar | rolf | Kajsa satt på lappen hela natten. Den e lite varm. Lådan. /R |
| 0:09 | händelse | morgonkortStangt | dag=18 |
| 0:09 | struken | kedja | d18 |
| 0:09 | poolTom | du | 4 repliker använda |
| 0:09 | väntar | du | Bygg diamantkvarnen. |
| 0:09 | målruta |  | Bygg diamantkvarnen |
| 0:10 | väntar | notis:2 paket i natt · +2 232 kr | 2 paket i natt · +2 232 kr |
| 0:11 | väntar | notis:Cykelhjälm i PETG · +50 % | Cykelhjälm i PETG · +50 % |
| 0:15 | väntar | info:guld | Göran lämnade en blank skruv på säljlådan. |
| 0:15 | sak | du | Bygg diamantkvarnen. |
| 0:15 | pil |  | Bygg diamantkvarnen |
| 0:15 | röst | du | Bygg diamantkvarnen. · MÅL |
| 0:15 | nick |  | nick:116 |
| 0:17 | klar | du | Bygg diamantkvarnen. |
| 0:17 | sak | info:guld | Göran lämnade en blank skruv på säljlådan. |
| 0:17 | kvitto-visas | info:guld | Göran lämnade en blank skruv på säljlådan. |
| 0:17 | toast | guld | Göran lämnade en blank skruv på säljlådan. |
| 0:19 | paket |  | brev |
| 0:19 | väntar | gunbritt | Hej igen. Gun-Britt. Tyvärr kunde jag inte hitta något fel. Bygglovet är godkänt. Jag har stämplat det. Med stjärnor. Tyvärr hade jag bara guldstjärnor. /Gun-Britt |
| 0:19 | skratt | du | Gun-Britts stjärnor |
| 0:19 | klar | info:guld | Göran lämnade en blank skruv på säljlådan. |
| 0:21 | struken | notis:🌇 Klockan är 21. Ali slår igen luckan.  | 🌇 Klockan är 21. Ali slår igen luckan. Dagens jobb är klart – gå in i skjulet och sov i sängen. |
| 0:21 | struken | ali | Ali här. Hämtade lådan klockan sex. 300 saker, 3 300 kr på ditt konto. Grossistpris. Jag har också en hyra. |
| 0:21 | sak | notis:2 paket i natt · +2 232 kr | 2 paket i natt · +2 232 kr |
| 0:21 | notis |  | 2 paket i natt · +2 232 kr |
| 0:24 | klar | notis:2 paket i natt · +2 232 kr | 2 paket i natt · +2 232 kr |
| 0:26 | sak | notis:Cykelhjälm i PETG · +50 % | Cykelhjälm i PETG · +50 % |
| 0:26 | notis |  | Cykelhjälm i PETG · +50 % |
| 0:28 | klar | notis:Cykelhjälm i PETG · +50 % | Cykelhjälm i PETG · +50 % |
| 0:38 | sak | gunbritt | Hej igen. Gun-Britt. Tyvärr kunde jag inte hitta något fel. Bygglovet är godkänt. Jag har stämplat det. Med stjärnor. Tyvärr hade jag bara guldstjärnor. /Gun-Britt |
| 0:38 | lapp | Brev från byggnadsnämnden | Hej igen. Gun-Britt. Tyvärr kunde jag inte hitta något fel. Bygglovet är godkänt. Jag har stämplat det. Med stjärnor. Tyvärr hade jag bara guldstjärnor. /Gun-Britt |
| 0:38 | röst | gunbritt | Hej igen. Gun-Britt. Tyvärr kunde jag inte hitta något fel. Bygglovet är godkänt. Jag har stämplat det. Med stjärnor. Tyvärr hade jag bara guldstjärnor. /Gun-Britt · STORY |
| 0:42 | poolTom | ali | 4 repliker använda |
| 0:43 | skratt | du | Alis dyr-pling |
| 0:43 | toast | guld | 3D-modell köpt – printa diamantkvarn på skrivaren |
| 0:43 | händelse | kopt | sak=diamantkniv |
| 0:51 | klar | gunbritt | Hej igen. Gun-Britt. Tyvärr kunde jag inte hitta något fel. Bygglovet är godkänt. Jag har stämplat det. Med stjärnor. Tyvärr hade jag bara guldstjärnor. /Gun-Britt |
| 0:51 | händelse | printStart | sak=byggsats:diamantkniv |
| 0:54 | toast | bra | Del 1 av 3 klar |
| 0:56 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 0:57 | toast | bra | Del 2 av 3 klar |
| 0:58 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 0:58 | väntar | notis:Skrivare L: Tornet är tomt – mal mer så  | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 1:00 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 1:00 | struken | notis | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 1:02 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 1:02 | struken | notis | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 1:03 | händelse | printKlar | sak=byggsats:diamantkniv n=1 |
| 1:03 | toast | guld | ✅ |
| 1:06 | sak | notis:Skrivare L: Tornet är tomt – mal mer så  | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 1:06 | notis | fel | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 1:09 | klar | notis:Skrivare L: Tornet är tomt – mal mer så  | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 1:09 | nej | du | Ta ut diamantkvarn |
| 1:09 | toast | fickskylt | Fulla fickor |
| 1:09 | fullaFickor | du | byggsats:diamantkniv |
| 1:10 | händelse | tagitUrPrint | sak=byggsats:diamantkniv n=1 |
| 1:10 | paket |  | sms |
| 1:10 | väntar | ali | Ali här. Jag såg Diamantkvarn på avstånd. Ett streck blev lite snett. Mitt fel. Vackert ändå. |
| 1:12 | väntar | info:guld | Diamantkvarnen sitter! Guldet – kom an. |
| 1:12 | sak | info:guld | Diamantkvarnen sitter! Guldet – kom an. |
| 1:12 | kvitto-visas | info:guld | Diamantkvarnen sitter! Guldet – kom an. |
| 1:12 | toast | guld | Diamantkvarnen sitter! Guldet – kom an. |
| 1:12 | händelse | malKlart | id=m18-bygg-diamantkvarnen del=Dag 18 – Diamantkvarnen och grunden nasta=m18-mal-rulle-guld |
| 1:12 | väntar | du | Mal en rulle guld. |
| 1:12 | MÅL |  | Mal en rulle guld |
| 1:14 | klar | info:guld | Diamantkvarnen sitter! Guldet – kom an. |
| 1:14 | målruta |  | Mal en rulle guld |
| 1:16 | kvittens-bock |  | ✓ Bygg diamantkvarnen |
| 1:16 | sak | du | Mal en rulle guld. |
| 1:16 | pil |  | Mal en rulle guld |
| 1:16 | röst | du | Mal en rulle guld. · MÅL |
| 1:18 | klar | du | Mal en rulle guld. |
| 1:26 | sak | ali | Ali här. Jag såg Diamantkvarn på avstånd. Ett streck blev lite snett. Mitt fel. Vackert ändå. |
| 1:26 | sms | ali | Ali här. Jag såg Diamantkvarn på avstånd. Ett streck blev lite snett. Mitt fel. Vackert ändå. |
| 1:26 | sms-bubbla | ali | Ali här. Jag såg Diamantkvarn på avstånd. Ett streck blev lite snett. Mitt fel. Vackert ändå. |
| 1:26 | röst | ali | Ali här. Jag såg Diamantkvarn på avstånd. Ett streck blev lite snett. Mitt fel. Vackert ändå. · REAKTION |
| 1:29 | väntar | info:guld | ✨ Guld! (1.9 s) |
| 1:29 | skratt | du | första guldet |
| 1:30 | kvitto-visas | info:guld | ✨ Guld! (1.9 s) |
| 1:30 | toast | guld | ✨ Guld! (1.9 s) |
| 1:31 | väntar | info:guld | ✨ Guld! (1.9 s) |
| 1:31 | skratt | du | första guldet |
| 1:32 | kvitto-visas | info:guld | ✨ Guld! (1.9 s) |
| 1:32 | toast | guld | ✨ Guld! (1.9 s) |
| 1:33 | väntar | info:guld | ✨ Guld! (1.9 s) |
| 1:33 | skratt | du | första guldet |
| 1:34 | klar | ali | Ali här. Jag såg Diamantkvarn på avstånd. Ett streck blev lite snett. Mitt fel. Vackert ändå. |
| 1:34 | sak | info:guld | ✨ Guld! (1.9 s) |
| 1:34 | kvitto-visas | info:guld | ✨ Guld! (1.9 s) |
| 1:34 | toast | guld | ✨ Guld! (1.9 s) |
| 1:35 | paket |  | tanke |
| 1:35 | tanke | du | Det står Rolf & Birgitta 1979 på insidan. |
| 1:35 | väntar | du | Det står Rolf & Birgitta 1979 på insidan. |
| 1:36 | klar | info:guld | ✨ Guld! (1.9 s) |
| 1:45 | sak | du | Det står Rolf & Birgitta 1979 på insidan. |
| 1:45 | notis | tanke | 💭 Det står Rolf & Birgitta 1979 på insidan. |
| 1:45 | röst | du | Det står Rolf & Birgitta 1979 på insidan. · STORY |
| 1:47 | paket |  | toast → tanke |
| 1:47 | väntar | notis:Kvarnen gav en rulle filament nivå 4 – g | Kvarnen gav en rulle filament nivå 4 – guldkomposit! Den behövs för de finare recepten. |
| 1:47 | tanke | du | guldkomposit. Starkare än vanlig plast – Ali har recept som kräver den. Rolf hittar mer ju mer folk respekterar mig. |
| 1:47 | väntar | du | guldkomposit. Starkare än vanlig plast – Ali har recept som kräver den. Rolf hittar mer ju mer folk respekterar mig. |
| 1:47 | händelse | malKlart | id=m18-mal-rulle-guld del=Dag 18 – Diamantkvarnen och grunden nasta=m18-gjut-grunden-huset |
| 1:47 | väntar | du | tillbakablick hem |
| 1:47 | MÅL |  | Gjut grunden till huset |
| 1:48 | klar | du | Det står Rolf & Birgitta 1979 på insidan. |
| 1:50 | sak | du | guldkomposit. Starkare än vanlig plast – Ali har recept som kräver den. Rolf hittar mer ju mer folk respekterar mig. |
| 1:50 | notis | tanke | 💭 guldkomposit. Starkare än vanlig plast – Ali har recept som kräver den. Rolf hittar mer ju mer folk respekterar mig. |
| 1:50 | röst | du | guldkomposit. Starkare än vanlig plast – Ali har recept som kräver den. Rolf hittar mer ju mer folk respekterar mig. · REAKTION |
| 1:51 | tillbakablick | du | hem |
| 1:51 | kvittens-bock |  | ✓ Mal en rulle guld |
| 1:53 | väntar | mamma | Jag hämtar dig på julafton kl 15. Var redo. |
| 1:53 | väntar | notis:📔 Prestation: Röd tråd · +3 respekt | 📔 Prestation: Röd tråd · +3 respekt |
| 1:54 | väntar | du | Gjut grunden till huset. |
| 1:54 | målruta |  | Gjut grunden till huset |
| 1:55 | väntar | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått solcellspark. Mer säger jag inte. Gunnar vet. |
| 1:55 | radio | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått solcellspark. Mer säger jag inte. Gunnar vet. |
| 1:55 | skratt | du | Radio-Kjelle |
| 2:00 | klar | du | guldkomposit. Starkare än vanlig plast – Ali har recept som kräver den. Rolf hittar mer ju mer folk respekterar mig. |
| 2:02 | sak | du | Gjut grunden till huset. |
| 2:02 | pil |  | Gjut grunden till huset |
| 2:02 | röst | du | Gjut grunden till huset. · MÅL |
| 2:04 | klar | du | Gjut grunden till huset. |
| 2:06 | väntar | info:guld | 🌲 Grunden till huset på ängen är din! Gärdesgården har flyttats – där får du ställa saker nu. |
| 2:06 | paket |  | sms |
| 2:06 | väntar | rolf | Grunden ä gjuten. Ja sto å tittade i en timme. Betong ä vackert när den torkar. Säg inte de till nån. /R |
| 2:06 | sak | info:guld | 🌲 Grunden till huset på ängen är din! Gärdesgården har flyttats – där får du ställa saker nu. |
| 2:06 | kvitto-visas | info:guld | 🌲 Grunden till huset på ängen är din! Gärdesgården har flyttats – där får du ställa saker nu. |
| 2:06 | toast | guld | 🌲 Grunden till huset på ängen är din! Gärdesgården har flyttats – där får du ställa saker nu. |
| 2:06 | händelse | malKlart | id=m18-gjut-grunden-huset del=Dag 18 – Diamantkvarnen och grunden nasta=sov18 |
| 2:06 | paket |  | lapp |
| 2:06 | väntar | du | Dag 18 är slut. Jag vill bo i ett riktigt hus. I morgon. |
| 2:06 | MÅL |  | Klart för idag – sov när du vill |
| 2:08 | klar | info:guld | 🌲 Grunden till huset på ängen är din! Gärdesgården har flyttats – där får du ställa saker nu. |
| 2:09 | målruta |  | Klart för idag – sov när du vill |
| 2:09 | poolTom | du | 4 repliker använda |
| 2:10 | kvittens-bock |  | ✓ Gjut grunden till huset |
| 2:10 | sak | du | (nytt mål i rutan) |
| 2:10 | pil |  | Klart för idag – sov när du vill |
| 2:10 | klar | du | (nytt mål i rutan) |
| 2:12 | struken | notis:Kvarnen gav en rulle filament nivå 4 – g | Kvarnen gav en rulle filament nivå 4 – guldkomposit! Den behövs för de finare recepten. |
| 2:12 | struken | kjelle | Radio Tippen, Kjelle här. Skjulet vid tippen har fått solcellspark. Mer säger jag inte. Gunnar vet. |
| 2:12 | struken | notis:📔 Prestation: Röd tråd · +3 respekt | 📔 Prestation: Röd tråd · +3 respekt |
| 2:13 | väntar | notis:🌇 Klockan är 21. Ali slår igen luckan.  | 🌇 Klockan är 21. Ali slår igen luckan. Dagens jobb är klart – gå in i skjulet och sov i sängen. |
| 2:14 | skratt | du | falsk tuta |
| 2:17 | nattkort | du | 🌙 Dag 18 är slut. God natt. zzz… Jag vill bo i ett riktigt hus. I morgon. 💰 Tjänat i dag +0 kr |

<details><summary>Botens handlingar dag 18</summary>

- 0:00 — dag 18 börjar — (90920 kr)
- 0:09 popup: "FORTSÄTT" (90920 kr)
- 0:26 gå till Rolfs postlåda (31 m) (90920 kr)
- 0:35 panel: "En lapp från Rolf
Lite olaglig" (90920 kr)
- 0:42 gå till Ali (31 m) (90920 kr)
- 0:42 öppnar Alis butik – köpa diamantkvarn (90920 kr)
- 0:44 köper diamantkniv för 12000 kr (78920 kr)
- 0:50 gå till skrivaren (23 m) (78920 kr)
- 0:51 printar Diamantkvarn (3 delar) (78920 kr)
- 1:04 plockar 3 skräp på tippen (bär max 16) (78920 kr)
- 1:06 gå till kvarnen (12 m) (78920 kr)
- 1:09 gå till skrivaren (7 m) (78920 kr)
- 1:10 tar ut 1 st ur skrivaren (78920 kr)
- 1:10 fulla fickor – lägger g_skruv i kistan (78920 kr)
- 1:12 gå till kvarnen (4 m) (78920 kr)
- 1:29 gå till ådern (43 m) (78920 kr)
- 1:37 vaskar guld i ådern (78920 kr)
- 1:47 gå till kvarnen (guld) (43 m) (78920 kr)
- 2:06 gå till tavlan vid vägen (22 m) (78920 kr)
- 2:06 köper grunden till huset på ängen (12000 kr) (66920 kr)
- 2:15 gå till sängen (12 m) (66920 kr)

</details>

## Dag 19

| Tid | Källa | Vem | Text |
|---|---|---|---|
| 2:17 | vara | ali | n2_vas |
| 2:17 | händelse | malKlart | id=sov18 del=Dag 18 – Diamantkvarnen och grunden nasta=m19-bygg-huset-grunden |
| 2:17 | MÅL |  | Bygg huset på grunden |
| 0:01 | händelse | dagenBorjar | dag=19 |
| 0:01 | meddelande | du | Dag 19. 3 dagar till jul. Utan hus kommer mamma och hämtar mig. |
| 0:01 | dagbokkort | du | Ett riktigt hus · Dag 19. 3 dagar till jul. Utan hus kommer mamma och hämtar mig. |
| 0:01 | röst | du | Dag 19. 3 dagar till jul. Ett riktigt hus. Utan hus kommer mamma och hämtar mig. · STORY |
| 0:09 | händelse | morgonkortStangt | dag=19 |
| 0:09 | struken | kedja | d19 |
| 0:09 | väntar | du | Bygg huset på grunden. |
| 0:09 | väntar | notis:Designvas i röd PETG · +50 % | Designvas i röd PETG · +50 % |
| 0:12 | målruta |  | Bygg huset på grunden |
| 0:14 | sak | du | Bygg huset på grunden. |
| 0:14 | pil |  | Bygg huset på grunden |
| 0:14 | röst | du | Bygg huset på grunden. · MÅL |
| 0:16 | klar | du | Bygg huset på grunden. |
| 0:18 | struken | notis:🌇 Klockan är 21. Ali slår igen luckan.  | 🌇 Klockan är 21. Ali slår igen luckan. Dagens jobb är klart – gå in i skjulet och sov i sängen. |
| 0:18 | sak | notis:Designvas i röd PETG · +50 % | Designvas i röd PETG · +50 % |
| 0:18 | notis |  | Designvas i röd PETG · +50 % |
| 0:21 | klar | notis:Designvas i röd PETG · +50 % | Designvas i röd PETG · +50 % |
| 0:21 | paket |  | sms |
| 0:21 | väntar | mamma | Pappa säger att du har byggt ett hus. Med trappa. Är det säkert? Har du räcke? Jag skickar en brandvarnare. Och sylt. |
| 0:21 | väntar | info:guld | 🏡 Huset står klart på ängen! Två rum och en trappa upp till sovloftet. |
| 0:21 | paket |  | sms |
| 0:21 | väntar | rolf | Du har byggt ett HUS. Me trappa. Ja har aldrig gått i en trappa i ett hus som ja känner nån som äger. Ja kommer på inflyttningsfest. Ja tar me Kajsa. /R |
| 0:21 | sak | info:guld | 🏡 Huset står klart på ängen! Två rum och en trappa upp till sovloftet. |
| 0:21 | kvitto-visas | info:guld | 🏡 Huset står klart på ängen! Två rum och en trappa upp till sovloftet. |
| 0:21 | toast | guld | 🏡 Huset står klart på ängen! Två rum och en trappa upp till sovloftet. |
| 0:21 | händelse | malKlart | id=m19-bygg-huset-grunden del=Dag 19 – Ett riktigt hus nasta=m19-vindkraft |
| 0:22 | MÅL |  | Printa och sälj |
| 0:23 | klar | info:guld | 🏡 Huset står klart på ängen! Två rum och en trappa upp till sovloftet. |
| 0:25 | målruta |  | Printa och sälj |
| 0:25 | kvittens-bock |  | ✓ Bygg huset på grunden |
| 0:25 | sak | du | (nytt mål i rutan) |
| 0:25 | pil |  | Printa och sälj |
| 0:26 | klar | du | (nytt mål i rutan) |
| 0:28 | struken | mamma | Jag hämtar dig på julafton kl 15. Var redo. |
| 0:32 | händelse | printStart | sak=kruka |
| 0:34 | toast | guld | ✅ |
| 0:34 | händelse | printKlar | sak=kruka n=61 |
| 0:35 | nej | du | Ta ut blomkruka |
| 0:35 | toast | fickskylt | Fulla fickor |
| 0:35 | fullaFickor | du | kruka |
| 0:35 | sak | du | Dag 18 är slut. Jag vill bo i ett riktigt hus. I morgon. |
| 0:35 | lapp | 📔 Dagbok | Dag 18 är slut. Jag vill bo i ett riktigt hus. I morgon. |
| 0:35 | kvallsrad | du | Jag vill bo i ett riktigt hus. I morgon. |
| 0:35 | händelse | tagitUrPrint | sak=kruka n=1 |
| 0:35 | klar | du | Dag 18 är slut. Jag vill bo i ett riktigt hus. I morgon. |
| 0:37 | händelse | printStart | sak=kruka |
| 0:39 | toast | guld | ✅ |
| 0:39 | händelse | printKlar | sak=kruka n=62 |
| 0:40 | händelse | tagitUrPrint | sak=kruka n=1 |
| 0:42 | händelse | printStart | sak=nyckelring |
| 0:42 | toast | guld | ✅ |
| 0:42 | händelse | printKlar | sak=nyckelring n=642 |
| 0:43 | nej | du | Ta ut nyckelring |
| 0:43 | toast | fickskylt | Fulla fickor |
| 0:43 | fullaFickor | du | nyckelring |
| 0:44 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 0:47 | sak | mamma | Pappa säger att du har byggt ett hus. Med trappa. Är det säkert? Har du räcke? Jag skickar en brandvarnare. Och sylt. |
| 0:47 | sms | mamma | Pappa säger att du har byggt ett hus. Med trappa. Är det säkert? Har du räcke? Jag skickar en brandvarnare. Och sylt. |
| 0:47 | sms-bubbla | mamma | Pappa säger att du har byggt ett hus. Med trappa. Är det säkert? Har du räcke? Jag skickar en brandvarnare. Och sylt. |
| 0:47 | röst | mamma | Pappa säger att du har byggt ett hus. Med trappa. Är det säkert? Har du räcke? Jag skickar en brandvarnare. Och sylt. · STORY |
| 0:57 | klar | mamma | Pappa säger att du har byggt ett hus. Med trappa. Är det säkert? Har du räcke? Jag skickar en brandvarnare. Och sylt. |
| 0:57 | webb | du | packade 2 kruka |
| 1:06 | webb | du | packade 2 nyckelring |
| 1:22 | väntar | info:bra | 📦 Paketet till Majken, 91, i Skellefteå ligger i postlådan – Rolf tar det till posten |
| 1:22 | sak | info:bra | 📦 Paketet till Majken, 91, i Skellefteå ligger i postlådan – Rolf tar det till posten |
| 1:22 | kvitto-visas | info:bra | 📦 Paketet till Majken, 91, i Skellefteå ligger i postlådan – Rolf tar det till posten |
| 1:22 | toast | bra | 📦 Paketet till Majken, 91, i Skellefteå ligger i postlådan – Rolf tar det till posten |
| 1:22 | väntar | info:bra | 📦 Paketet till Någon som bara skrev "hej" ligger i postlådan – Rolf tar det till posten |
| 1:24 | klar | info:bra | 📦 Paketet till Majken, 91, i Skellefteå ligger i postlådan – Rolf tar det till posten |
| 1:24 | sak | info:bra | 📦 Paketet till Någon som bara skrev "hej" ligger i postlådan – Rolf tar det till posten |
| 1:24 | kvitto-visas | info:bra | 📦 Paketet till Någon som bara skrev "hej" ligger i postlådan – Rolf tar det till posten |
| 1:24 | toast | bra | 📦 Paketet till Någon som bara skrev "hej" ligger i postlådan – Rolf tar det till posten |
| 1:26 | klar | info:bra | 📦 Paketet till Någon som bara skrev "hej" ligger i postlådan – Rolf tar det till posten |
| 1:28 | händelse | printStart | sak=n3_stol |
| 1:28 | väntar | notis:☀️ Skrivaren går på solkraft – du behöve | ☀️ Skrivaren går på solkraft – du behöver inte trampa! |
| 1:34 | skratt | du | plastspagetti |
| 1:34 | toast | guld | ✅ |
| 1:34 | händelse | printKlar | sak=n3_stol n=17 |
| 1:35 | händelse | tagitUrPrint | sak=spagetti n=1 |
| 1:38 | sak | notis:☀️ Skrivaren går på solkraft – du behöve | ☀️ Skrivaren går på solkraft – du behöver inte trampa! |
| 1:38 | notis | guld | ☀️ Skrivaren går på solkraft – du behöver inte trampa! |
| 1:41 | klar | notis:☀️ Skrivaren går på solkraft – du behöve | ☀️ Skrivaren går på solkraft – du behöver inte trampa! |
| 1:43 | poolTom | ali | 4 repliker använda |
| 1:44 | skratt | du | Ali köper konst |
| 1:44 | aliSalt | ali | 3 |
| 1:45 | aliSalt | ali | 240 |
| 1:45 | aliSalt | ali | 6 |
| 1:45 | aliSalt | ali | 170 |
| 1:45 | aliSalt | ali | 162 |
| 1:46 | väntar | ali | Du ser trött ut. Det är bra. Det betyder jobb. |
| 1:50 | poolTom | du | 4 repliker använda |
| 1:55 | händelse | printStart | sak=n3_stol |
| 1:57 | väntar | värld:TUUT TUUT! | TUUT TUUT! |
| 1:57 | sak | värld:TUUT TUUT! | TUUT TUUT! |
| 1:57 | bubbla |  | TUUT TUUT! |
| 2:00 | klar | värld:TUUT TUUT! | TUUT TUUT! |
| 2:01 | toast | guld | ✅ |
| 2:01 | händelse | printKlar | sak=n3_stol n=18 |
| 2:03 | händelse | tagitUrPrint | sak=n3_stol n=1 |
| 2:12 | aliSalt | ali | 16000 |
| 2:22 | händelse | printStart | sak=n3_stol |
| 2:29 | toast | guld | ✅ |
| 2:29 | händelse | printKlar | sak=n3_stol n=19 |
| 2:30 | händelse | tagitUrPrint | sak=n3_stol n=1 |
| 2:39 | aliSalt | ali | 15200 |
| 2:50 | händelse | printStart | sak=n3_stol |
| 2:56 | toast | guld | ✅ |
| 2:56 | händelse | printKlar | sak=n3_stol n=20 |
| 2:57 | händelse | tagitUrPrint | sak=n3_stol n=1 |
| 3:06 | aliSalt | ali | 14440 |
| 3:17 | händelse | printStart | sak=n3_stol |
| 3:24 | toast | guld | ✅ |
| 3:24 | händelse | printKlar | sak=n3_stol n=21 |
| 3:25 | händelse | tagitUrPrint | sak=n3_stol n=1 |
| 3:30 | skratt | du | falsk tuta |
| 3:31 | väntar | rolf | Ja kände lukten från sopbilen. FRÅN SOPBILEN. Vad har du där borta? /R |
| 3:34 | aliSalt | ali | 13718 |
| 3:44 | händelse | printStart | sak=n3_stol |
| 3:45 | skratt | du | däcket rullar iväg |
| 3:50 | poolTom | du | 4 repliker använda |
| 3:51 | toast | guld | ✅ |
| 3:51 | händelse | printKlar | sak=n3_stol n=22 |
| 3:52 | händelse | tagitUrPrint | sak=n3_stol n=1 |
| 3:52 | väntar | värld:TUUT TUUT! | TUUT TUUT! |
| 3:52 | sak | värld:TUUT TUUT! | TUUT TUUT! |
| 3:52 | bubbla |  | TUUT TUUT! |
| 3:55 | klar | värld:TUUT TUUT! | TUUT TUUT! |
| 4:01 | aliSalt | ali | 13032 |
| 4:02 | upplåst | strom | vindkraft |
| 4:02 | brott | RESERV | vindkraft (strom 0 av 15) |
| 4:02 | händelse | upplast | id=vindkraft flask=strom |
| 4:02 | paket |  | sms |
| 4:02 | väntar | ali | Ali här. Ett vindkraftverk. Begagnat, från en gård i Hälsingland. Vingarna är hela. Nästan. |
| 4:03 | sak | ali | Ali här. Ett vindkraftverk. Begagnat, från en gård i Hälsingland. Vingarna är hela. Nästan. |
| 4:03 | sms | ali | Ali här. Ett vindkraftverk. Begagnat, från en gård i Hälsingland. Vingarna är hela. Nästan. |
| 4:03 | sms-bubbla | ali | Ali här. Ett vindkraftverk. Begagnat, från en gård i Hälsingland. Vingarna är hela. Nästan. |
| 4:03 | röst | ali | Ali här. Ett vindkraftverk. Begagnat, från en gård i Hälsingland. Vingarna är hela. Nästan. · STORY |
| 4:11 | klar | ali | Ali här. Ett vindkraftverk. Begagnat, från en gård i Hälsingland. Vingarna är hela. Nästan. |
| 4:15 | skratt | du | Alis dyr-pling |
| 4:15 | toast | guld | 3D-modell köpt – printa vindkraftverk på skrivaren |
| 4:15 | händelse | kopt | sak=vindkraft |
| 4:23 | händelse | printStart | sak=byggsats:vindkraft |
| 4:25 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 4:26 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 4:26 | väntar | notis:Skrivare L: Tornet är tomt – mal mer så  | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 4:27 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 4:27 | struken | notis | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 4:27 | sak | notis:Skrivare L: Tornet är tomt – mal mer så  | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 4:27 | notis | fel | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 4:28 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 4:28 | struken | notis | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 4:29 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 4:29 | struken | notis | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 4:29 | klar | notis:Skrivare L: Tornet är tomt – mal mer så  | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 4:30 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 4:30 | struken | notis | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 4:31 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 4:31 | struken | notis | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 4:32 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 4:32 | struken | notis | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 4:32 | skratt | du | kvarnen spottar |
| 4:33 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 4:33 | struken | notis | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 4:34 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 4:34 | struken | notis | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 4:34 | toast | bra | Del 1 av 4 klar |
| 4:35 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 4:35 | struken | notis | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 4:41 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 4:41 | struken | notis | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 4:42 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 4:43 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 4:44 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 4:46 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 4:47 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 4:48 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 4:48 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 4:49 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 4:50 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 4:51 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 4:52 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 4:53 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 4:54 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 4:55 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 4:56 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 5:00 | väntar | värld:Mjau. | Mjau. |
| 5:09 | sak | värld:Mjau. | Mjau. |
| 5:09 | bubbla |  | Mjau. |
| 5:11 | toast | bra | Del 2 av 4 klar |
| 5:11 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 5:12 | klar | värld:Mjau. | Mjau. |
| 5:13 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 5:14 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 5:16 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 5:18 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 5:20 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 5:21 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 5:23 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 5:25 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 5:26 | toast | bra | Del 3 av 4 klar |
| 5:26 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 5:28 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 5:30 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 5:32 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 5:33 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 5:35 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 5:37 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 5:43 | väntar | värld:Mjau. | Mjau. |
| 5:47 | skratt | du | falsk tuta |
| 5:47 | väntar | värld:TUUT! Tjena! | TUUT! Tjena! |
| 5:50 | poolTom | du | 4 repliker använda |
| 5:51 | sak | värld:Mjau. | Mjau. |
| 5:51 | bubbla |  | Mjau. |
| 5:52 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 5:52 | struken | notis | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 5:53 | klar | värld:Mjau. | Mjau. |
| 5:53 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 5:54 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 5:56 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 5:57 | händelse | printKlar | sak=byggsats:vindkraft n=1 |
| 5:57 | toast | guld | ✅ |
| 6:01 | sak | värld:TUUT! Tjena! | TUUT! Tjena! |
| 6:01 | bubbla |  | TUUT! Tjena! |
| 6:03 | händelse | tagitUrPrint | sak=byggsats:vindkraft n=1 |
| 6:03 | paket |  | sms |
| 6:03 | struken | ali | Du ser trött ut. Det är bra. Det betyder jobb. |
| 6:03 | väntar | ali | Ali här. Vindkraftverk – printad. På riktigt. Jag har visat bilden för min fru tre gånger. |
| 6:04 | klar | värld:TUUT! Tjena! | TUUT! Tjena! |
| 6:12 | sak | ali | Ali här. Vindkraftverk – printad. På riktigt. Jag har visat bilden för min fru tre gånger. |
| 6:12 | sms | ali | Ali här. Vindkraftverk – printad. På riktigt. Jag har visat bilden för min fru tre gånger. |
| 6:12 | sms-bubbla | ali | Ali här. Vindkraftverk – printad. På riktigt. Jag har visat bilden för min fru tre gånger. |
| 6:12 | röst | ali | Ali här. Vindkraftverk – printad. På riktigt. Jag har visat bilden för min fru tre gånger. · REAKTION |
| 6:13 | händelse | placerat | sak=vindkraft |
| 6:13 | händelse | malKlart | id=m19-vindkraft del=Dag 19 – Ett riktigt hus nasta=m19-guldskrivare |
| 6:13 | målruta |  | Printa och sälj |
| 6:13 | upplåst | skrivare | guldskrivare |
| 6:13 | brott | UPPLÅST | guldskrivare (skrivare 2363 av 75) |
| 6:13 | händelse | upplast | id=guldskrivare flask=skrivare |
| 6:13 | paket |  | tanke → sms |
| 6:13 | tanke | du | Guldrullarna ligger där och glänser. Ingen av skrivarna klarar dem. |
| 6:13 | väntar | du | Guldrullarna ligger där och glänser. Ingen av skrivarna klarar dem. |
| 6:13 | väntar | ali | Ali här. Guldskrivaren. Munstycket är av diamant. Tappa den inte. Den är dyrare än min bil. |
| 6:17 | kvittens-bock |  | ✓ Bygg vindkraftverket på backen |
| 6:19 | klar | ali | Ali här. Vindkraftverk – printad. På riktigt. Jag har visat bilden för min fru tre gånger. |
| 6:21 | sak | du | (nytt mål i rutan) |
| 6:21 | pil |  | Bygg guldskrivaren i linje 4 |
| 6:22 | klar | du | Bygg guldskrivaren i linje 4. |
| 6:22 | nick |  | nick:122 |
| 6:30 | sak | du | Guldrullarna ligger där och glänser. Ingen av skrivarna klarar dem. |
| 6:30 | notis | tanke | 💭 Guldrullarna ligger där och glänser. Ingen av skrivarna klarar dem. |
| 6:30 | röst | du | Guldrullarna ligger där och glänser. Ingen av skrivarna klarar dem. · STORY |
| 6:34 | skratt | du | Alis dyr-pling |
| 6:34 | toast | guld | 3D-modell köpt – printa guldskrivaren på skrivaren |
| 6:34 | händelse | kopt | sak=guldskrivare |
| 6:35 | klar | du | Guldrullarna ligger där och glänser. Ingen av skrivarna klarar dem. |
| 6:37 | struken | ali | Ali här. Guldskrivaren. Munstycket är av diamant. Tappa den inte. Den är dyrare än min bil. |
| 6:48 | skratt | du | kvarnen rapar |
| 6:49 | toast | guld | 🧵 |
| 6:52 | händelse | printStart | sak=byggsats:guldskrivare |
| 6:55 | toast | bra | Del 1 av 5 klar |
| 6:55 | toast | guld | 🧵 |
| 6:57 | toast | bra | Del 2 av 5 klar |
| 7:00 | toast | guld | 🧵 |
| 7:00 | toast | bra | Del 3 av 5 klar |
| 7:03 | toast | bra | Del 4 av 5 klar |
| 7:04 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 7:06 | väntar | värld:Mjau. | Mjau. |
| 7:06 | sak | värld:Mjau. | Mjau. |
| 7:06 | bubbla |  | Mjau. |
| 7:09 | klar | värld:Mjau. | Mjau. |
| 7:11 | skratt | du | kvarnen rapar |
| 7:16 | händelse | printKlar | sak=byggsats:guldskrivare n=1 |
| 7:16 | toast | guld | ✅ |
| 7:19 | händelse | tagitUrPrint | sak=byggsats:guldskrivare n=1 |
| 7:23 | händelse | placerat | sak=guldskrivare |
| 7:23 | händelse | malKlart | id=m19-guldskrivare del=Dag 19 – Ett riktigt hus nasta=m19-flytta-in-huset |
| 7:23 | väntar | du | Flytta in i huset. |
| 7:23 | målruta |  | Flytta in i huset |
| 7:23 | MÅL |  | Flytta in i huset |
| 7:24 | sak | du | Flytta in i huset. |
| 7:24 | pil |  | Flytta in i huset |
| 7:24 | röst | du | Flytta in i huset. · MÅL |
| 7:26 | klar | du | Flytta in i huset. |
| 7:27 | kvittens-bock |  | ✓ Bygg guldskrivaren i linje 4 |
| 7:37 | väntar | info:guld | 🏡 Du har flyttat in! Skjulet blir verkstad – du bor i ett riktigt hus nu. |
| 7:37 | paket |  | sms |
| 7:37 | väntar | mamma | Du har flyttat in i ett hus. Med trappa. Jag har köpt en dörrmatta. Det står "Välkommen" på den. Pappa ville att det skulle stå "Gå hem". Jag sa nej. |
| 7:37 | sak | info:guld | 🏡 Du har flyttat in! Skjulet blir verkstad – du bor i ett riktigt hus nu. |
| 7:37 | kvitto-visas | info:guld | 🏡 Du har flyttat in! Skjulet blir verkstad – du bor i ett riktigt hus nu. |
| 7:37 | toast | guld | 🏡 Du har flyttat in! Skjulet blir verkstad – du bor i ett riktigt hus nu. |
| 7:37 | händelse | malKlart | id=m19-flytta-in-huset del=Dag 19 – Ett riktigt hus nasta=sov19 |
| 7:37 | paket |  | lapp |
| 7:37 | väntar | du | Dag 19 är slut. Det blir kallare för varje natt. |
| 7:37 | MÅL |  | Klart för idag – sov när du vill |
| 7:39 | klar | info:guld | 🏡 Du har flyttat in! Skjulet blir verkstad – du bor i ett riktigt hus nu. |
| 7:41 | målruta |  | Klart för idag – sov när du vill |
| 7:41 | kvittens-bock |  | ✓ Flytta in i huset |
| 7:41 | sak | du | (nytt mål i rutan) |
| 7:41 | pil |  | Klart för idag – sov när du vill |
| 7:41 | klar | du | (nytt mål i rutan) |
| 7:43 | sak | du | Dag 19 är slut. Det blir kallare för varje natt. |
| 7:43 | lapp | 📔 Dagbok | Dag 19 är slut. Det blir kallare för varje natt. |
| 7:43 | kvallsrad | du | Det blir kallare för varje natt. |
| 7:43 | klar | du | Dag 19 är slut. Det blir kallare för varje natt. |
| 7:44 | väntar | notis:🌇 Klockan är 21. Ali slår igen luckan.  | 🌇 Klockan är 21. Ali slår igen luckan. Dagens jobb är klart – gå in i skjulet och sov i sängen. |
| 7:47 | skratt | du | tummen på fotot |
| 7:47 | väntar | foto | Ett hus (och min tumme) |
| 7:47 | paket |  | tanke |
| 7:47 | tanke | du | Ett riktigt hus. Vänta bara tills mamma ser det. |
| 7:47 | väntar | du | Ett riktigt hus. Vänta bara tills mamma ser det. |
| 7:50 | poolTom | du | 4 repliker använda |
| 7:53 | webbBetalt | du | 236 |
| 7:53 | nattkort | du | 🌙 Dag 19 är slut. God natt. zzz… Det blir kallare för varje natt. DAGENS PRINTAR Kolfiberstol × 6 Blomkruka × 2 Nyckelring × 1 Totalt 9 printar 💰 Tjänat i dag |

<details><summary>Botens handlingar dag 19</summary>

- 0:00 — dag 19 börjar — (66920 kr)
- 0:08 popup: "FORTSÄTT" (66920 kr)
- 0:21 gå till tavlan vid vägen (11 m) (66920 kr)
- 0:21 köper ett riktigt hus på ängen (17500 kr) (49420 kr)
- 0:31 gå till skrivaren (15 m) (49420 kr)
- 0:32 printar Blomkruka (49420 kr)
- 0:35 tar ut 1 st ur skrivaren (49420 kr)
- 0:35 fulla fickor – lägger fynd4 i kistan (49420 kr)
- 0:37 printar Blomkruka (49420 kr)
- 0:40 tar ut 1 st ur skrivaren (49420 kr)
- 0:42 printar Nyckelring (49420 kr)
- 0:44 tar ut 1 st ur skrivaren (49420 kr)
- 0:44 fulla fickor – lägger kruka i kistan (49420 kr)
- 0:48 gå till datorn (17 m) (49420 kr)
- 0:56 panel: "Webbshopen · Soptippsvägen 1
B" (49420 kr)
- 1:06 panel: "Webbshopen · Soptippsvägen 1
B" (49420 kr)
- 1:15 panel: "Webbshopen · Soptippsvägen 1
B" (49420 kr)
- 1:22 gå till Rolfs postlåda (paket) (29 m) (49420 kr)
- 1:23 webbshop: 2 paket i postlådan (49420 kr)
- 1:23 tjänar pengar till väntar på flaskhalsen för vindkraft: 49420/49460 kr → printar kolfiberstol (16000 kr) (49420 kr)
- 1:26 gå till skrivaren (15 m) (49420 kr)
- 1:28 printar Kolfiberstol (49420 kr)
- 1:36 tar ut 1 st ur skrivaren (49420 kr)
- 1:43 gå till Ali (34 m) (49420 kr)
- 1:43 öppnar Alis butik – sälja (49420 kr)
- 1:45 säljer hos Ali: +581 kr (50001 kr)
- 1:46 tjänar pengar till väntar på flaskhalsen för vindkraft: 50001/50041 kr → printar kolfiberstol (16000 kr) (50001 kr)
- 1:53 gå till skrivaren (33 m) (50001 kr)
- 1:55 printar Kolfiberstol (50001 kr)
- 2:03 tar ut 1 st ur skrivaren (50001 kr)
- 2:10 gå till Ali (33 m) (50001 kr)
- 2:10 öppnar Alis butik – sälja (50001 kr)
- 2:12 säljer hos Ali: +16000 kr (66001 kr)
- 2:14 tjänar pengar till väntar på flaskhalsen för vindkraft: 66001/66041 kr → printar kolfiberstol (15200 kr) (66001 kr)
- 2:21 gå till skrivaren (33 m) (66001 kr)
- 2:22 printar Kolfiberstol (66001 kr)
- 2:31 tar ut 1 st ur skrivaren (66001 kr)
- 2:37 gå till Ali (33 m) (66001 kr)
- 2:37 öppnar Alis butik – sälja (66001 kr)
- 2:39 säljer hos Ali: +15200 kr (81201 kr)
- 2:41 tjänar pengar till väntar på flaskhalsen för vindkraft: 81201/81241 kr → printar kolfiberstol (14440 kr) (81201 kr)
- 2:48 gå till skrivaren (33 m) (81201 kr)
- 2:50 printar Kolfiberstol (81201 kr)
- 2:58 tar ut 1 st ur skrivaren (81201 kr)
- 3:05 gå till Ali (33 m) (81201 kr)
- 3:05 öppnar Alis butik – sälja (81201 kr)
- 3:07 säljer hos Ali: +14440 kr (95641 kr)
- 3:09 tjänar pengar till väntar på flaskhalsen för vindkraft: 95641/95681 kr → printar kolfiberstol (13718 kr) (95641 kr)
- 3:15 gå till skrivaren (33 m) (95641 kr)
- 3:17 printar Kolfiberstol (95641 kr)
- 3:25 tar ut 1 st ur skrivaren (95641 kr)
- 3:32 gå till Ali (33 m) (95641 kr)
- 3:32 öppnar Alis butik – sälja (95641 kr)
- 3:34 säljer hos Ali: +13718 kr (109359 kr)
- 3:36 tjänar pengar till väntar på flaskhalsen för vindkraft: 109359/109399 kr → printar kolfiberstol (13032 kr) (109359 kr)
- 3:43 gå till skrivaren (33 m) (109359 kr)
- 3:44 printar Kolfiberstol (109359 kr)
- 3:53 tar ut 1 st ur skrivaren (109359 kr)
- 4:00 gå till Ali (33 m) (109359 kr)
- 4:00 öppnar Alis butik – sälja (109359 kr)
- 4:01 säljer hos Ali: +13032 kr (122391 kr)
- 4:13 öppnar Alis butik – köpa vindkraftverk (122391 kr)
- 4:16 köper vindkraft för 6050 kr (116341 kr)
- 4:21 gå till skrivaren (23 m) (116341 kr)
- 4:23 printar Vindkraftverk (4 delar) (116341 kr)
- 4:38 plockar 11 skräp på tippen (bär max 16) (116341 kr)
- 4:40 gå till kvarnen (11 m) (116341 kr)
- 5:06 plockar 9 skräp på tippen (bär max 16) (116341 kr)
- 5:09 gå till kvarnen (14 m) (116341 kr)
- 5:47 plockar 10 skräp på tippen (bär max 16) (116341 kr)
- 5:50 gå till kvarnen (12 m) (116341 kr)
- 6:03 gå till skrivaren (7 m) (116341 kr)
- 6:04 tar ut 1 st ur skrivaren (116341 kr)
- 6:12 gå till platsen för vindkraftverk (40 m) (116341 kr)
- 6:13 ställer ut vindkraftverk (116341 kr)
- 6:33 gå till Ali (45 m) (116341 kr)
- 6:33 öppnar Alis butik – köpa guldskrivaren (116341 kr)
- 6:35 köper guldskrivare för 4200 kr (112141 kr)
- 6:44 gå till en tunna (36 m) (112141 kr)
- 6:48 gå till PETG-kvarnen (15 m) (112141 kr)
- 6:48 tömmer det tunga i PETG-kvarnen (112141 kr)
- 6:50 gå till skrivaren (3 m) (112141 kr)
- 6:52 printar Guldskrivaren (5 delar) (112141 kr)
- 7:07 gå till en tunna (15 m) (112141 kr)
- 7:11 gå till PETG-kvarnen (11 m) (112141 kr)
- 7:11 tömmer det tunga i PETG-kvarnen (112141 kr)
- 7:19 gå till skrivaren (4 m) (112141 kr)
- 7:19 tar ut 1 st ur skrivaren (112141 kr)
- 7:22 gå till platsen för guldskrivaren (10 m) (112141 kr)
- 7:23 ställer ut guldskrivaren (112141 kr)
- 7:37 gå till huset (41 m) (112141 kr)
- 7:50 gå till sängen (22 m) (112141 kr)

</details>

## Dag 20

| Tid | Källa | Vem | Text |
|---|---|---|---|
| 7:53 | vara | ali | n2_hjalm |
| 7:53 | väntar | info:guld | Nu blir det riktigt kallt. Utan vedkamin och hela väggar fryser du. |
| 7:53 | händelse | malKlart | id=sov19 del=Dag 19 – Ett riktigt hus nasta=m20-printa-stall-ut |
| 7:53 | MÅL |  | Printa och ställ ut en vedkamin |
| 0:01 | händelse | dagenBorjar | dag=20 |
| 0:01 | meddelande | du | Dag 20. 2 dagar till jul. Utan kamin får mamma rätt. |
| 0:01 | dagbokkort | du | Kylan · Dag 20. 2 dagar till jul. Utan kamin får mamma rätt. |
| 0:01 | röst | du | Dag 20. 2 dagar till jul. Kylan. Utan kamin får mamma rätt. · STORY |
| 0:03 | paket |  | sms |
| 0:03 | väntar | rolf | Ett litet uppdrag. Inget farligt. Nästan inget farligt. Lådan. /R |
| 0:07 | händelse | morgonkortStangt | dag=20 |
| 0:07 | struken | kedja | d20 |
| 0:07 | väntar | du | Printa och ställ ut en vedkamin. |
| 0:08 | väntar | notis:2 paket i natt · +236 kr | 2 paket i natt · +236 kr |
| 0:09 | väntar | notis:Cykelhjälm i PETG · +50 % | Cykelhjälm i PETG · +50 % |
| 0:11 | målruta |  | Printa och ställ ut en vedkamin |
| 0:12 | sak | du | Printa och ställ ut en vedkamin. |
| 0:12 | pil |  | Printa och ställ ut en vedkamin |
| 0:12 | röst | du | Printa och ställ ut en vedkamin. · MÅL |
| 0:13 | nick |  | nick:125 |
| 0:15 | klar | du | Printa och ställ ut en vedkamin. |
| 0:15 | struken | info:guld | Nu blir det riktigt kallt. Utan vedkamin och hela väggar fryser du. |
| 0:15 | struken | notis:🌇 Klockan är 21. Ali slår igen luckan.  | 🌇 Klockan är 21. Ali slår igen luckan. Dagens jobb är klart – gå in i skjulet och sov i sängen. |
| 0:15 | sak | notis:2 paket i natt · +236 kr | 2 paket i natt · +236 kr |
| 0:15 | notis |  | 2 paket i natt · +236 kr |
| 0:18 | klar | notis:2 paket i natt · +236 kr | 2 paket i natt · +236 kr |
| 0:20 | sak | notis:Cykelhjälm i PETG · +50 % | Cykelhjälm i PETG · +50 % |
| 0:20 | notis |  | Cykelhjälm i PETG · +50 % |
| 0:22 | klar | notis:Cykelhjälm i PETG · +50 % | Cykelhjälm i PETG · +50 % |
| 0:22 | väntar | info:guld | Göran lämnade en blank skruv på säljlådan. |
| 0:22 | sak | info:guld | Göran lämnade en blank skruv på säljlådan. |
| 0:22 | kvitto-visas | info:guld | Göran lämnade en blank skruv på säljlådan. |
| 0:22 | toast | guld | Göran lämnade en blank skruv på säljlådan. |
| 0:24 | klar | info:guld | Göran lämnade en blank skruv på säljlådan. |
| 0:34 | sak | foto | Ett hus (och min tumme) |
| 0:34 | foto | du | Ett hus (och min tumme) |
| 0:37 | klar | foto | Ett hus (och min tumme) |
| 0:39 | poolTom | ali | 4 repliker använda |
| 0:41 | skratt | du | Alis dyr-pling |
| 0:41 | händelse | kopt | sak=kamin |
| 0:45 | sak | mamma | Du har flyttat in i ett hus. Med trappa. Jag har köpt en dörrmatta. Det står "Välkommen" på den. Pappa ville att det skulle stå "Gå hem". Jag sa nej. |
| 0:45 | sms | mamma | Du har flyttat in i ett hus. Med trappa. Jag har köpt en dörrmatta. Det står "Välkommen" på den. Pappa ville att det skulle stå "Gå hem". Jag sa nej. |
| 0:45 | sms-bubbla | mamma | Du har flyttat in i ett hus. Med trappa. Jag har köpt en dörrmatta. Det står "Välkommen" på den. Pappa ville att det skulle stå "Gå hem". Jag sa nej. |
| 0:45 | röst | mamma | Du har flyttat in i ett hus. Med trappa. Jag har köpt en dörrmatta. Det står "Välkommen" på den. Pappa ville att det skulle stå "Gå hem". Jag sa nej. · STORY |
| 0:49 | händelse | printStart | sak=kamin |
| 0:53 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 0:53 | skratt | du | kvarnen spottar |
| 0:54 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 0:55 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 0:56 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 0:57 | klar | mamma | Du har flyttat in i ett hus. Med trappa. Jag har köpt en dörrmatta. Det står "Välkommen" på den. Pappa ville att det skulle stå "Gå hem". Jag sa nej. |
| 0:58 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 0:58 | väntar | notis:Skrivare L: Tornet är tomt – mal mer så  | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 0:59 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 0:59 | struken | notis | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 1:02 | väntar | värld:Mjau. | Mjau. |
| 1:13 | sak | du | Ett riktigt hus. Vänta bara tills mamma ser det. |
| 1:13 | notis | tanke | 💭 Ett riktigt hus. Vänta bara tills mamma ser det. |
| 1:13 | röst | du | Ett riktigt hus. Vänta bara tills mamma ser det. · STORY |
| 1:15 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 1:15 | struken | notis | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 1:17 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 1:17 | klar | du | Ett riktigt hus. Vänta bara tills mamma ser det. |
| 1:19 | toast | fel | Tornet är tomt – mal mer så fortsätter den |
| 1:20 | toast | guld | ✅ |
| 1:20 | händelse | printKlar | sak=kamin n=1 |
| 1:23 | struken | värld:Mjau. | Mjau. |
| 1:26 | sak | notis:Skrivare L: Tornet är tomt – mal mer så  | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 1:26 | notis | fel | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 1:26 | skratt | du | falsk tuta |
| 1:28 | klar | notis:Skrivare L: Tornet är tomt – mal mer så  | Skrivare L: Tornet är tomt – mal mer så fortsätter den |
| 1:28 | nej | du | Ta ut vedkamin |
| 1:28 | toast | fickskylt | Fulla fickor |
| 1:28 | fullaFickor | du | kamin |
| 1:29 | händelse | tagitUrPrint | sak=kamin n=1 |
| 1:36 | händelse | placerat | sak=kamin |
| 1:36 | händelse | malKlart | id=m20-printa-stall-ut del=Dag 20 – Kylan nasta=m20-stall-in-kamin |
| 1:36 | händelse | malKlart | id=m20-stall-in-kamin del=Dag 20 – Kylan nasta=sov20 |
| 1:36 | paket |  | lapp |
| 1:36 | lapp | 📔 Dagbok | Dag 20 är slut. Jag finns inte på riktigt här än. |
| 1:36 | kvallsrad | du | Jag finns inte på riktigt här än. |
| 1:36 | målruta |  | Klart för idag – sov när du vill |
| 1:36 | MÅL |  | Klart för idag – sov när du vill |
| 1:36 | sak | du | (nytt mål i rutan) |
| 1:36 | pil |  | Klart för idag – sov när du vill |
| 1:36 | klar | du | (nytt mål i rutan) |
| 1:41 | nattkort | du | 🌙 Dag 20 är slut. God natt. zzz… Jag finns inte på riktigt här än. DAGENS PRINTAR Vedkamin × 1 Totalt 1 print 💰 Tjänat i dag +0 kr |

<details><summary>Botens handlingar dag 20</summary>

- 0:00 — dag 20 börjar — (112377 kr)
- 0:07 popup: "FORTSÄTT" (112377 kr)
- 0:24 gå till Rolfs postlåda (31 m) (112377 kr)
- 0:32 panel: "En lapp från Rolf
Lite olaglig" (112377 kr)
- 0:39 gå till Ali (31 m) (112377 kr)
- 0:39 öppnar Alis butik – köpa receptet vedkamin (112377 kr)
- 0:42 köper kamin för 9750 kr (102627 kr)
- 0:47 gå till skrivaren (23 m) (102627 kr)
- 0:49 printar Vedkamin (102627 kr)
- 1:10 plockar 10 skräp på tippen (bär max 16) (102627 kr)
- 1:13 gå till kvarnen (14 m) (102627 kr)
- 1:28 gå till skrivaren (7 m) (102627 kr)
- 1:29 tar ut 1 st ur skrivaren (102627 kr)
- 1:29 fulla fickor – lägger g_skruv i kistan (102627 kr)
- 1:35 gå till platsen för vedkamin (22 m) (102627 kr)
- 1:36 ställer ut vedkamin (102627 kr)
- 1:39 gå till sängen (2 m) (102627 kr)

</details>

## Dag 21

| Tid | Källa | Vem | Text |
|---|---|---|---|
| 1:41 | vara | ali | n2_vas |
| 1:41 | händelse | malKlart | id=sov20 del=Dag 20 – Kylan nasta=m21-bli-folkbokford |
| 1:41 | MÅL |  | Bli folkbokförd – tavlan vid vägen |
| 0:01 | händelse | dagenBorjar | dag=21 |
| 0:01 | meddelande | du | Dag 21. 1 dag till jul. Utan adress finns jag inte, hur fint huset än är. |
| 0:01 | dagbokkort | du | Folkbokförd · Dag 21. 1 dag till jul. Utan adress finns jag inte, hur fint huset än är. |
| 0:01 | röst | du | Dag 21. 1 dag till jul. Folkbokförd. Utan adress finns jag inte, hur fint huset än är. · STORY |
| 0:09 | händelse | morgonkortStangt | dag=21 |
| 0:09 | paket |  | toast |
| 0:09 | väntar | notis:🔥 Varmt och skönt i skjulet trots kylan | 🔥 Varmt och skönt i skjulet trots kylan. |
| 0:09 | struken | kedja | d21 |
| 0:09 | väntar | du | tillbakablick paketet |
| 0:09 | väntar | notis:Designvas i röd PETG · +50 % | Designvas i röd PETG · +50 % |
| 0:12 | poolTom | du | 4 repliker använda |
| 0:14 | väntar | du | Bli folkbokförd – tavlan vid vägen. |
| 0:14 | målruta |  | Bli folkbokförd – tavlan vid vägen |
| 0:14 | sak | du | Bli folkbokförd – tavlan vid vägen. |
| 0:14 | pil |  | Bli folkbokförd – tavlan vid vägen |
| 0:14 | röst | du | Bli folkbokförd – tavlan vid vägen. · MÅL |
| 0:16 | väntar | info:guld | 📮 Du är folkbokförd! Soptippsvägen 1 är din adress. |
| 0:16 | paket |  | sms |
| 0:16 | väntar | rolf | Grattis granne. Nu e du på riktigt. Ja tar me grillen på lördag. Kajsa oxå. /R |
| 0:16 | paket |  | sms |
| 0:16 | väntar | bror | Pappa sa "fint jobbat". Två gånger. Han har aldrig sagt det två gånger. Grattis lillebror. Eller vad du nu är. Du vet. |
| 0:16 | händelse | malKlart | id=m21-bli-folkbokford del=Dag 21 – Folkbokförd nasta=sov21 |
| 0:16 | paket |  | lapp |
| 0:16 | väntar | du | Dag 21 är slut. Nu vet Skatteverket att jag bor HÄR. I morgon är det julafton. |
| 0:16 | MÅL |  | Klart för idag – sov när du vill |
| 0:17 | tillbakablick | du | paketet |
| 0:17 | klar | du | Bli folkbokförd – tavlan vid vägen. |
| 0:20 | målruta |  | Klart för idag – sov när du vill |
| 0:20 | kvittens-bock |  | ✓ Bli folkbokförd – tavlan vid vägen |
| 0:20 | sak | du | (nytt mål i rutan) |
| 0:20 | pil |  | Klart för idag – sov när du vill |
| 0:20 | klar | du | (nytt mål i rutan) |
| 0:20 | sak | info:guld | 📮 Du är folkbokförd! Soptippsvägen 1 är din adress. |
| 0:20 | kvitto-visas | info:guld | 📮 Du är folkbokförd! Soptippsvägen 1 är din adress. |
| 0:20 | toast | guld | 📮 Du är folkbokförd! Soptippsvägen 1 är din adress. |
| 0:22 | klar | info:guld | 📮 Du är folkbokförd! Soptippsvägen 1 är din adress. |
| 0:23 | väntar | notis:🌇 Klockan är 21. Ali slår igen luckan.  | 🌇 Klockan är 21. Ali slår igen luckan. Dagens jobb är klart – gå in i skjulet och sov i sängen. |
| 0:24 | struken | notis:🔥 Varmt och skönt i skjulet trots kylan | 🔥 Varmt och skönt i skjulet trots kylan. |
| 0:25 | sak | notis:Designvas i röd PETG · +50 % | Designvas i röd PETG · +50 % |
| 0:25 | notis |  | Designvas i röd PETG · +50 % |
| 0:25 | väntar | notis:📔 Prestation: Posten hittar hit · +3 re | 📔 Prestation: Posten hittar hit · +3 respekt |
| 0:27 | klar | notis:Designvas i röd PETG · +50 % | Designvas i röd PETG · +50 % |
| 0:29 | nattkort | du | 🌙 Dag 21 är slut. God natt. zzz… Nu vet Skatteverket att jag bor HÄR. I morgon är det julafton. 💰 Tjänat i dag +0 kr |

<details><summary>Botens handlingar dag 21</summary>

- 0:00 — dag 21 börjar — (102627 kr)
- 0:08 popup: "FORTSÄTT" (102627 kr)
- 0:16 gå till tavlan vid vägen (12 m) (102627 kr)
- 0:16 blir folkbokförd (95427 kr)
- 0:27 gå till sängen (11 m) (95427 kr)

</details>

## Dag 22

| Tid | Källa | Vem | Text |
|---|---|---|---|
| 0:29 | vara | ali | n2_hjalm |
| 0:29 | händelse | malKlart | id=sov21 del=Dag 21 – Folkbokförd nasta=m22-printa-julbordet |
| 0:29 | händelse | malKlart | id=m22-printa-julbordet del=Dag 22 – Jul på Soptippsvägen 1 nasta=m22-tand-skylten |
| 0:30 | MÅL |  | Skylten med mitt namn på dörren |
| 0:01 | händelse | dagenBorjar | dag=22 |
| 0:01 | meddelande | du | Julafton. Utan skylt på dörren kör mamma hem med mig. |
| 0:01 | dagbokkort | du | Jul på Soptippsvägen 1 · Julafton. Utan skylt på dörren kör mamma hem med mig. |
| 0:01 | röst | du | Julafton. Jul på Soptippsvägen 1. Utan skylt på dörren kör mamma hem med mig. · STORY |
| 0:08 | händelse | morgonkortStangt | dag=22 |
| 0:08 | struken | kedja | d22 |
| 0:08 | väntar | du | Skylten med mitt namn på dörren. |
| 0:09 | väntar | notis:Cykelhjälm i PETG · +50 % | Cykelhjälm i PETG · +50 % |
| 0:09 | väntar | mamma | Jag kommer kl 15 och hämtar dig. Pappa kör. Var redo. |
| 0:09 | väntar | info:guld | Göran lämnade en blank skruv på säljlådan. |
| 0:12 | målruta |  | Skylten med mitt namn på dörren |
| 0:14 | sak | du | Skylten med mitt namn på dörren. |
| 0:14 | pil |  | Skylten med mitt namn på dörren |
| 0:14 | röst | du | Skylten med mitt namn på dörren. · MÅL |
| 0:16 | klar | du | Skylten med mitt namn på dörren. |
| 0:16 | struken | info:guld | Göran lämnade en blank skruv på säljlådan. |
| 0:16 | struken | notis:🌇 Klockan är 21. Ali slår igen luckan.  | 🌇 Klockan är 21. Ali slår igen luckan. Dagens jobb är klart – gå in i skjulet och sov i sängen. |
| 0:16 | struken | notis:📔 Prestation: Posten hittar hit · +3 re | 📔 Prestation: Posten hittar hit · +3 respekt |
| 0:16 | sak | notis:Cykelhjälm i PETG · +50 % | Cykelhjälm i PETG · +50 % |
| 0:16 | notis |  | Cykelhjälm i PETG · +50 % |
| 0:19 | klar | notis:Cykelhjälm i PETG · +50 % | Cykelhjälm i PETG · +50 % |
| 0:24 | väntar | info:guld | Skylten sitter på dörren. Simulering, Soptippsvägen 1. |
| 0:24 | sak | info:guld | Skylten sitter på dörren. Simulering, Soptippsvägen 1. |
| 0:24 | kvitto-visas | info:guld | Skylten sitter på dörren. Simulering, Soptippsvägen 1. |
| 0:24 | toast | guld | Skylten sitter på dörren. Simulering, Soptippsvägen 1. |
| 0:24 | händelse | malKlart | id=m22-tand-skylten del=Dag 22 – Jul på Soptippsvägen 1 nasta=m22-oppna-dorren-gasterna |
| 0:24 | väntar | du | Ta emot mamma. |
| 0:24 | MÅL |  | Ta emot mamma |
| 0:26 | klar | info:guld | Skylten sitter på dörren. Simulering, Soptippsvägen 1. |
| 0:27 | målruta |  | Ta emot mamma |
| 0:28 | kvittens-bock |  | ✓ Skylten med mitt namn på dörren |
| 0:28 | sak | du | Ta emot mamma. |
| 0:28 | pil |  | Ta emot mamma |
| 0:28 | röst | du | Ta emot mamma. · MÅL |
| 0:29 | morgonkort | 🏆 Du är hemma | 🏆 Du är hemma · Du klarade det på dag 22. Från hobo dweller vid en soptipp till godsägare och folkbokförd. Mamma är imponerad. Pappa log. Spelet fortsätter – bygg vidare så länge du vill. |
| 0:30 | klar | du | Ta emot mamma. |
| 0:43 | sak | du | Dag 21 är slut. Nu vet Skatteverket att jag bor HÄR. I morgon är det julafton. |
| 0:43 | lapp | 📔 Dagbok | Dag 21 är slut. Nu vet Skatteverket att jag bor HÄR. I morgon är det julafton. |
| 0:43 | kvallsrad | du | Nu vet Skatteverket att jag bor HÄR. I morgon är det julafton. |
| 0:44 | klar | du | Dag 21 är slut. Nu vet Skatteverket att jag bor HÄR. I morgon är det julafton. |
| 0:59 | väntar | du | tillbakablick vadet |
| 1:08 | sak | mamma | Jag kommer kl 15 och hämtar dig. Pappa kör. Var redo. |
| 1:08 | sms | mamma | Jag kommer kl 15 och hämtar dig. Pappa kör. Var redo. |
| 1:08 | sms-bubbla | mamma | Jag kommer kl 15 och hämtar dig. Pappa kör. Var redo. |
| 1:08 | röst | mamma | Jag kommer kl 15 och hämtar dig. Pappa kör. Var redo. · STORY |
| 1:09 | tillbakablick | du | vadet |
| 1:10 | väntar | mamma | Det är du alltid. |
| 1:12 | väntar | info:bra | 🚗 En bil svänger in vid grinden. |
| 1:13 | klar | mamma | Jag kommer kl 15 och hämtar dig. Pappa kör. Var redo. |
| 1:13 | sak | info:bra | 🚗 En bil svänger in vid grinden. |
| 1:13 | kvitto-visas | info:bra | 🚗 En bil svänger in vid grinden. |
| 1:13 | toast | bra | 🚗 En bil svänger in vid grinden. |
| 1:15 | klar | info:bra | 🚗 En bil svänger in vid grinden. |
| 1:24 | sak | mamma | Det är du alltid. |
| 1:24 | röst | mamma | Det är du alltid. · STORY |
| 1:27 | klar | mamma | Det är du alltid. |
| 1:40 | tanke | du | Jag fryser om tårna. |
| 1:40 | väntar | du | Jag fryser om tårna. |
| 1:40 | sak | du | Jag fryser om tårna. |
| 1:40 | notis | tanke | 💭 Jag fryser om tårna. |
| 1:40 | röst | du | Jag fryser om tårna. · REAKTION |
| 1:43 | klar | du | Jag fryser om tårna. |
| 1:45 | skratt | du | däcket rullar iväg |
| 1:52 | skratt | du | falsk tuta |
| 1:53 | sak | bror | Pappa sa "fint jobbat". Två gånger. Han har aldrig sagt det två gånger. Grattis lillebror. Eller vad du nu är. Du vet. |
| 1:53 | sms | bror | Pappa sa "fint jobbat". Två gånger. Han har aldrig sagt det två gånger. Grattis lillebror. Eller vad du nu är. Du vet. |
| 1:53 | sms-bubbla | bror | Pappa sa "fint jobbat". Två gånger. Han har aldrig sagt det två gånger. Grattis lillebror. Eller vad du nu är. Du vet. |
| 1:53 | röst | bror | Pappa sa "fint jobbat". Två gånger. Han har aldrig sagt det två gånger. Grattis lillebror. Eller vad du nu är. Du vet. · STORY |
| 2:03 | klar | bror | Pappa sa "fint jobbat". Två gånger. Han har aldrig sagt det två gånger. Grattis lillebror. Eller vad du nu är. Du vet. |
| 3:00 | röst | rolf | Goddag … ja. Ja har kavaj. Fråga int. · STORY |
| 3:04 | röst | ali | Habibi. Roboten säger god jul. Jag lärde den. Säg inget till min fru – hon är här. · STORY |
| 3:13 | röst | berattare | Lasse har en ny termos. Den håller värmen i nitton timmar. Han har testat. Gunnar säger: "Vanilj." · STORY |
| 3:20 | röst | berattare | Bengt-Åke ställer en gran från egen skog i hörnet. Han går inte. · STORY |
| 3:25 | röst | berattare | HMPF. God jul. · STORY |
| 3:28 | röst | bror | Den är inte från mig. Den låg utanför. Typ. · STORY |
| 3:32 | röst | mamma | Jag skulle hämta dig. · STORY |
| 3:36 | röst | mamma | Det är så STÄDAT! · STORY |
| 3:41 | röst | mamma | Vi stannar. Pappa, hämta granen. · STORY |
| 3:45 | röst | pappa | Jaha. · STORY |
| 3:48 | röst | pappa | Taket håller i alla fall. · STORY |
| 3:51 | röst | pappa | Ja ja. Det här kunde varit värre. · STORY |
| 3:55 | röst | berattare | Skinkan från augusti. Granris i en vas. · STORY |
| 3:59 | röst | berattare | Göran sitter på fönsterblecket och tittar på skinkan. · STORY |
| 4:04 | röst | berattare | Rolf på trummor med två kastruller. Lasse och Gunnar på printade elgitarrer. Det är högt. Det är bra. · STORY |
| 4:11 | röst | berattare | Mamma har med sig en prinsesstårta i stället för skinkan från augusti. · STORY |
| 4:20 | röst | rolf | …Dä ä fredag nånstans. · STORY |
| 4:25 | röst | pappa | Ja ska fatta mej kort. · STORY |
| 4:31 | röst | pappa | Scania byggde sin första lastbil nittonhundraelva. · STORY |
| 4:37 | röst | pappa | Djurgården har vunnit SM tolv gånger. · STORY |
| 4:41 | röst | pappa | Skinkan har legat i frysen sen augusti. · STORY |
| 4:46 | röst | pappa | Ja … är stolt över dej. Aha. Vad lugnt då. · STORY |
| 4:51 | röst | berattare | Mamma gråter. · STORY |
| 4:54 | paket |  | replik → lapp → ge |
| 4:54 | väntar | mamma | Den här är till dig. Öppna den nu. |
| 4:54 | väntar | mamma | Du sa att du skulle fira jul ensam. Jag är glad att du ljög. Kram, Mamma |
| 4:54 | väntar |  | (läget ändras) |
| 4:54 | händelse | malKlart | id=m22-oppna-dorren-gasterna del=Dag 22 – Jul på Soptippsvägen 1 nasta=steg133 |
| 4:54 | tanke | du | Jag ser min andedräkt. Inomhus. |
| 4:54 | väntar | du | Jag ser min andedräkt. Inomhus. |
| 4:54 | struken | du | Jag ser min andedräkt. Inomhus. |
| 4:54 | väntar | du | . |
| 4:54 | MÅL |  | (inga mål) |
| 4:54 | sak | du | . |
| 4:54 | röst | du | . · MÅL |
| 4:56 | klar | du | . |
| 4:58 | kvittens-bock |  | ✓ Ta emot mamma |
| 4:59 | väntar | info:guld | 🌲 Marken runt tippen är din! Gärdesgården har flyttats – där får du ställa saker nu. |
| 4:59 | paket |  | sms |
| 4:59 | väntar | rolf | Marken runt tippen e din. Bengt-Åke sa att han e glad att bli av me den. Han kalla den "stenåkern". Ja kallar den "framtiden". /R |
| 4:59 | sak | info:guld | 🌲 Marken runt tippen är din! Gärdesgården har flyttats – där får du ställa saker nu. |
| 4:59 | kvitto-visas | info:guld | 🌲 Marken runt tippen är din! Gärdesgården har flyttats – där får du ställa saker nu. |
| 4:59 | toast | guld | 🌲 Marken runt tippen är din! Gärdesgården har flyttats – där får du ställa saker nu. |
| 5:01 | klar | info:guld | 🌲 Marken runt tippen är din! Gärdesgården har flyttats – där får du ställa saker nu. |
| 5:03 | väntar | info:guld | 🗑️ Tippen är din. Rolf kör åt dig nu. |
| 5:03 | paket |  | sms |
| 5:03 | väntar | rolf | Du äger tippen nu. Ja kör fortfarande sopbilen. Men nu e du chefen. Rudolf ä sur. Hä hä. Kajsa bryr sej int. /R |
| 5:03 | sak | info:guld | 🗑️ Tippen är din. Rolf kör åt dig nu. |
| 5:03 | kvitto-visas | info:guld | 🗑️ Tippen är din. Rolf kör åt dig nu. |
| 5:03 | toast | guld | 🗑️ Tippen är din. Rolf kör åt dig nu. |
| 5:03 | väntar | notis:📔 Prestation: Jul på tippen · +3 respek | 📔 Prestation: Jul på tippen · +3 respekt |
| 5:05 | klar | info:guld | 🗑️ Tippen är din. Rolf kör åt dig nu. |
| 5:07 | väntar | info:guld | 🏠 Rolf har ett riktigt hus! Garaget står vid tippen. |
| 5:07 | paket |  | sms |
| 5:07 | väntar | rolf | Ja vet int va ja ska säja. Ja har bott i husvagnen sen 2009. Nu har ja en VERANDA. Kajsa har redan pinkat i hörnet. De betyder att hon gillar de. Tack. /R |
| 5:07 | sak | info:guld | 🏠 Rolf har ett riktigt hus! Garaget står vid tippen. |
| 5:07 | kvitto-visas | info:guld | 🏠 Rolf har ett riktigt hus! Garaget står vid tippen. |
| 5:07 | toast | guld | 🏠 Rolf har ett riktigt hus! Garaget står vid tippen. |
| 5:07 | väntar | foto | Alla |
| 5:07 | paket |  | tanke |
| 5:07 | tanke | du | Alla är här. Hos mig. |
| 5:07 | väntar | du | Alla är här. Hos mig. |
| 5:09 | klar | info:guld | 🏠 Rolf har ett riktigt hus! Garaget står vid tippen. |
| 5:10 | väntar | info:guld | Skylten vid vägen är uppgraderad. |
| 5:10 | paket |  | sms |
| 5:10 | väntar | rolf | Kommunen satt upp en RIKTI skylt. Ja grät int. Kajsa grät. MVH ROLF |
| 5:10 | sak | info:guld | Skylten vid vägen är uppgraderad. |
| 5:10 | kvitto-visas | info:guld | Skylten vid vägen är uppgraderad. |
| 5:10 | toast | guld | Skylten vid vägen är uppgraderad. |
| 5:11 | paket |  | sms |
| 5:11 | väntar | mamma | Pappa och Rolf bygger verandan. De har pratat Scania i tre timmar. Ingen av dem har sagt något annat. Jag tror de är lyckliga. |
| 5:11 | väntar | kjelle | Kjelle här, direkt från julfesten! Gunnar, du är här. Säg något till lyssnarna! |
| 5:11 | radio | kjelle | Kjelle här, direkt från julfesten! Gunnar, du är här. Säg något till lyssnarna! |
| 5:11 | skratt | du | Radio-Kjelle |
| 5:12 | klar | info:guld | Skylten vid vägen är uppgraderad. |
| 5:14 | väntar | info:guld | 🌲 Backen i norr är din! Gärdesgården har flyttats – där får du ställa saker nu. |
| 5:14 | sak | info:guld | 🌲 Backen i norr är din! Gärdesgården har flyttats – där får du ställa saker nu. |
| 5:14 | kvitto-visas | info:guld | 🌲 Backen i norr är din! Gärdesgården har flyttats – där får du ställa saker nu. |
| 5:14 | toast | guld | 🌲 Backen i norr är din! Gärdesgården har flyttats – där får du ställa saker nu. |
| 5:15 | väntar | värld:HMPF. Backen. Den är brant. De | HMPF. Backen. Den är brant. Den passar er. |
| 5:16 | klar | info:guld | 🌲 Backen i norr är din! Gärdesgården har flyttats – där får du ställa saker nu. |
| 5:17 | väntar | gunnar | Vanilj. |
| 5:17 | radio | gunnar | Vanilj. |
| 5:17 | skratt | du | Gunnar svarar |
| 5:28 | sak | mamma | Den här är till dig. Öppna den nu. |
| 5:28 | notis |  | Mamma: ”Den här är till dig. Öppna den nu.” |
| 5:28 | röst | mamma | Den här är till dig. Öppna den nu. · STORY |
| 5:29 | skratt | du | kvarnen rapar |
| 5:31 | klar | mamma | Den här är till dig. Öppna den nu. |
| 5:32 | toast | guld | 🧵 |
| 5:35 | paket |  | sms |
| 5:35 | väntar | chefen | Rudolf. Jag går i pension. Espressomaskinen står på din bänk. Inga böter. |
| 5:35 | händelse | printStart | sak=n2_hjalm |
| 5:36 | struken | värld:HMPF. Backen. Den är brant. De | HMPF. Backen. Den är brant. Den passar er. |
| 5:40 | toast | guld | ✅ |
| 5:40 | händelse | printKlar | sak=n2_hjalm n=20 |
| 5:40 | sak | mamma | Du sa att du skulle fira jul ensam. Jag är glad att du ljög. Kram, Mamma |
| 5:40 | lapp | Brev från Mamma | Du sa att du skulle fira jul ensam. Jag är glad att du ljög. Kram, Mamma |
| 5:40 | röst | mamma | Du sa att du skulle fira jul ensam. Jag är glad att du ljög. Kram, Mamma · STORY |
| 5:41 | nej | du | Ta ut cykelhjälm i petg |
| 5:41 | toast | fickskylt | Fulla fickor |
| 5:41 | fullaFickor | du | n2_hjalm |
| 5:42 | händelse | tagitUrPrint | sak=n2_hjalm n=1 |
| 5:44 | händelse | printStart | sak=n2_hjalm |
| 5:46 | klar | mamma | Du sa att du skulle fira jul ensam. Jag är glad att du ljög. Kram, Mamma |
| 5:46 | händelse | brevLast | id=mammajul |
| 5:48 | toast | guld | ✅ |
| 5:48 | händelse | printKlar | sak=n2_hjalm n=21 |
| 5:49 | händelse | tagitUrPrint | sak=n2_hjalm n=1 |
| 5:53 | händelse | printStart | sak=nyckelring |
| 5:53 | toast | guld | ✅ |
| 5:53 | händelse | printKlar | sak=nyckelring n=643 |
| 5:54 | nej | du | Ta ut nyckelring |
| 5:54 | toast | fickskylt | Fulla fickor |
| 5:54 | fullaFickor | du | nyckelring |
| 5:54 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 5:54 | sak |  | (läget ändras) |
| 5:54 | paket |  | sms |
| 5:54 | väntar | pappa | 👍 ❤️ |
| 5:54 | klar |  | (läget ändras) |
| 5:57 | händelse | printStart | sak=nyckelring |
| 5:57 | toast | guld | ✅ |
| 5:57 | händelse | printKlar | sak=nyckelring n=644 |
| 5:58 | händelse | tagitUrPrint | sak=nyckelring n=1 |
| 5:59 | sak | notis:📔 Prestation: Jul på tippen · +3 respek | 📔 Prestation: Jul på tippen · +3 respekt |
| 5:59 | notis |  | 📔 Prestation: Jul på tippen · +3 respekt |
| 6:01 | klar | notis:📔 Prestation: Jul på tippen · +3 respek | 📔 Prestation: Jul på tippen · +3 respekt |
| 6:11 | sak | foto | Alla |
| 6:11 | foto | du | Alla |
| 6:13 | klar | foto | Alla |
| 6:18 | händelse | printStart | sak=n3_stol |
| 6:22 | sak | du | Alla är här. Hos mig. |
| 6:22 | notis | tanke | 💭 Alla är här. Hos mig. |
| 6:22 | röst | du | Alla är här. Hos mig. · STORY |
| 6:24 | klar | du | Alla är här. Hos mig. |
| 6:25 | toast | guld | ✅ |
| 6:25 | händelse | printKlar | sak=n3_stol n=23 |
| 6:26 | nej | du | Ta ut kolfiberstol |
| 6:26 | toast | fickskylt | Fulla fickor |
| 6:26 | fullaFickor | du | n3_stol |
| 6:27 | händelse | tagitUrPrint | sak=n3_stol n=1 |
| 6:34 | sak | mamma | Pappa och Rolf bygger verandan. De har pratat Scania i tre timmar. Ingen av dem har sagt något annat. Jag tror de är lyckliga. |
| 6:34 | sms | mamma | Pappa och Rolf bygger verandan. De har pratat Scania i tre timmar. Ingen av dem har sagt något annat. Jag tror de är lyckliga. |
| 6:34 | sms-bubbla | mamma | Pappa och Rolf bygger verandan. De har pratat Scania i tre timmar. Ingen av dem har sagt något annat. Jag tror de är lyckliga. |
| 6:34 | röst | mamma | Pappa och Rolf bygger verandan. De har pratat Scania i tre timmar. Ingen av dem har sagt något annat. Jag tror de är lyckliga. · STORY |
| 6:34 | poolTom | ali | 4 repliker använda |
| 6:36 | aliSalt | ali | 16000 |
| 6:36 | aliSalt | ali | 6 |
| 6:36 | aliSalt | ali | 6 |
| 6:44 | klar | mamma | Pappa och Rolf bygger verandan. De har pratat Scania i tre timmar. Ingen av dem har sagt något annat. Jag tror de är lyckliga. |
| 6:52 | sak | kjelle | Kjelle här, direkt från julfesten! Gunnar, du är här. Säg något till lyssnarna! |
| 6:52 | notis |  | 📻 Radio Tippen: Kjelle här, direkt från julfesten! Gunnar, du är här. Säg något till lyssnarna! |
| 6:52 | röst | kjelle | Kjelle här, direkt från julfesten! Gunnar, du är här. Säg något till lyssnarna! · REAKTION |
| 6:54 | tanke | du | Det drar. Från överallt. |
| 6:54 | väntar | du | Det drar. Från överallt. |
| 6:55 | händelse | printStart | sak=n3_stol |
| 6:59 | klar | kjelle | Kjelle här, direkt från julfesten! Gunnar, du är här. Säg något till lyssnarna! |
| 7:01 | toast | guld | ✅ |
| 7:01 | händelse | printKlar | sak=n3_stol n=24 |
| 7:02 | händelse | tagitUrPrint | sak=n3_stol n=1 |
| 7:07 | sak | gunnar | Vanilj. |
| 7:07 | notis |  | 📻 Gunnar: Vanilj. |
| 7:07 | röst | gunnar | Vanilj. · STORY |
| 7:10 | klar | gunnar | Vanilj. |
| 7:11 | aliSalt | ali | 15200 |
| 7:14 | skratt | du | falsk tuta |
| 7:19 | sak | chefen | Rudolf. Jag går i pension. Espressomaskinen står på din bänk. Inga böter. |
| 7:19 | sms | chefen | Rudolf. Jag går i pension. Espressomaskinen står på din bänk. Inga böter. |
| 7:19 | sms-bubbla | chefen | Rudolf. Jag går i pension. Espressomaskinen står på din bänk. Inga böter. |
| 7:19 | röst | chefen | Rudolf. Jag går i pension. Espressomaskinen står på din bänk. Inga böter. · STORY |
| 7:22 | händelse | printStart | sak=n3_stol |
| 7:25 | klar | chefen | Rudolf. Jag går i pension. Espressomaskinen står på din bänk. Inga böter. |
| 7:29 | toast | guld | ✅ |
| 7:29 | händelse | printKlar | sak=n3_stol n=25 |
| 7:30 | händelse | tagitUrPrint | sak=n3_stol n=1 |
| 7:33 | sak | du | Det drar. Från överallt. |
| 7:33 | notis | tanke | 💭 Det drar. Från överallt. |
| 7:33 | röst | du | Det drar. Från överallt. · REAKTION |
| 7:36 | klar | du | Det drar. Från överallt. |
| 7:39 | aliSalt | ali | 14440 |
| 7:49 | händelse | printStart | sak=n3_stol |
| 7:56 | toast | guld | ✅ |
| 7:56 | händelse | printKlar | sak=n3_stol n=26 |
| 7:57 | händelse | tagitUrPrint | sak=n3_stol n=1 |
| 8:03 | väntar | ali | Älgen var här i morse. Han köpte inget heller. |
| 8:03 | sak | ali | Älgen var här i morse. Han köpte inget heller. |
| 8:03 | röst | ali | Älgen var här i morse. Han köpte inget heller. · SMÅPRAT |
| 8:04 | bubbla |  | Älgen var här i morse. Han köpte inget heller. |
| 8:06 | aliSalt | ali | 13718 |
| 8:07 | klar | ali | Älgen var här i morse. Han köpte inget heller. |
| 8:16 | sak | pappa | 👍 ❤️ |
| 8:16 | sms | pappa | 👍 ❤️ |
| 8:16 | sms-bubbla | pappa | 👍 ❤️ |
| 8:16 | röst | pappa | 👍 ❤️ · STORY |
| 8:18 | händelse | printStart | sak=n3_stol |
| 8:19 | klar | pappa | 👍 ❤️ |
| 8:24 | toast | guld | ✅ |
| 8:24 | händelse | printKlar | sak=n3_stol n=27 |
| 8:25 | händelse | tagitUrPrint | sak=n3_stol n=1 |
| 8:33 | aliSalt | ali | 13032 |
| 8:54 | tanke | du | Fingrarna vill inte riktigt. |
| 8:54 | väntar | du | Fingrarna vill inte riktigt. |
| 8:54 | sak | du | Fingrarna vill inte riktigt. |
| 8:54 | notis | tanke | 💭 Fingrarna vill inte riktigt. |
| 8:54 | röst | du | Fingrarna vill inte riktigt. · REAKTION |
| 8:57 | klar | du | Fingrarna vill inte riktigt. |
| 9:31 | skratt | du | falsk tuta |
| 10:54 | tanke | du | Strumpor. Jag borde ha lyssnat på mamma. |
| 10:54 | väntar | du | Strumpor. Jag borde ha lyssnat på mamma. |
| 10:54 | sak | du | Strumpor. Jag borde ha lyssnat på mamma. |
| 10:54 | notis | tanke | 💭 Strumpor. Jag borde ha lyssnat på mamma. |
| 10:54 | röst | du | Strumpor. Jag borde ha lyssnat på mamma. · REAKTION |
| 10:58 | klar | du | Strumpor. Jag borde ha lyssnat på mamma. |
| 12:49 | skratt | du | kvarnen rapar |
| 12:53 | toast | guld | 🧵 |
| 12:54 | poolTom | du | 5 repliker använda |
| 12:55 | väntar | notis:🌇 Klockan är 21. Ali slår igen luckan.  | 🌇 Klockan är 21. Ali slår igen luckan. Dagens jobb är klart – gå in i skjulet och sov i sängen. |
| 12:55 | sak | notis:🌇 Klockan är 21. Ali slår igen luckan.  | 🌇 Klockan är 21. Ali slår igen luckan. Dagens jobb är klart – gå in i skjulet och sov i sängen. |
| 12:55 | notis | guld | 🌇 Klockan är 21. Ali slår igen luckan. Dagens jobb är klart – gå in i skjulet och sov i sängen. |
| 12:56 | händelse | printStart | sak=n2_hjalm |
| 12:57 | klar | notis:🌇 Klockan är 21. Ali slår igen luckan.  | 🌇 Klockan är 21. Ali slår igen luckan. Dagens jobb är klart – gå in i skjulet och sov i sängen. |
| 12:59 | skratt | du | falsk tuta |
| 13:00 | toast | guld | ✅ |
| 13:00 | händelse | printKlar | sak=n2_hjalm n=22 |
| 13:01 | händelse | tagitUrPrint | sak=n2_hjalm n=1 |
| 13:09 | aliSalt | ali | 1995 |
| 13:09 | aliSalt | ali | 1895 |
| 13:09 | aliSalt | ali | 1800 |
| 13:18 | nattkort | du | 🌙 Dag 22 är slut. God natt. zzz… Nu vet Skatteverket att jag bor HÄR. I morgon är det julafton. DAGENS PRINTAR Kolfiberstol × 5 Cykelhjälm i PETG × 3 Nyckelrin |

<details><summary>Botens handlingar dag 22</summary>

- 0:00 — dag 22 börjar — (95427 kr)
- 0:08 popup: "FORTSÄTT" (95427 kr)
- 0:24 gå till dörren (namnskylten) (22 m) (95427 kr)
- 0:38 kort: "Fortsätt bygga" (95427 kr)
- 3:00 gå till mamma vid grinden (35 m) (95427 kr)
- 4:59 gå till tavlan vid vägen (3 m) (95427 kr)
- 4:59 efterspelet: köper marken runt tippen (18500 kr) (76927 kr)
- 5:03 efterspelet: köper rolfs soptipp (37000 kr) (39927 kr)
- 5:07 efterspelet: köper garage och hus åt rolf (25000 kr) (14927 kr)
- 5:14 efterspelet: köper backen i norr (11000 kr) (3927 kr)
- 5:18 efterspelet: dag 22, 24 s (3927 kr)
- 5:25 gå till en tunna (33 m) (3927 kr)
- 5:29 gå till PETG-kvarnen (12 m) (3927 kr)
- 5:29 tömmer det tunga i PETG-kvarnen (3927 kr)
- 5:34 gå till skrivaren (4 m) (3927 kr)
- 5:35 printar Cykelhjälm i PETG (3927 kr)
- 5:42 tar ut 1 st ur skrivaren (3927 kr)
- 5:42 fulla fickor – lägger g_skruv i kistan (3927 kr)
- 5:44 printar Cykelhjälm i PETG (3927 kr)
- 5:50 tar ut 1 st ur skrivaren (3927 kr)
- 5:51 gå till skrivaren (6 m) (3927 kr)
- 5:53 printar Nyckelring (3927 kr)
- 5:54 tar ut 1 st ur skrivaren (3927 kr)
- 5:54 fulla fickor – lägger n2_hjalm i kistan (3927 kr)
- 5:57 printar Nyckelring (3927 kr)
- 5:58 tar ut 1 st ur skrivaren (3927 kr)
- 6:02 gå till datorn (19 m) (3927 kr)
- 6:11 panel: "Slut på berättelsen
Efterspele" (3927 kr)
- 6:12 webbshop: 0 paket i postlådan (3927 kr)
- 6:12 tjänar pengar till efterspelet: 3927/4427 kr → printar kolfiberstol (16000 kr) (3927 kr)
- 6:17 gå till skrivaren (22 m) (3927 kr)
- 6:18 printar Kolfiberstol (3927 kr)
- 6:27 tar ut 1 st ur skrivaren (3927 kr)
- 6:27 fulla fickor – lägger nyckelring i kistan (3927 kr)
- 6:34 gå till Ali (33 m) (3927 kr)
- 6:34 öppnar Alis butik – sälja (3927 kr)
- 6:36 säljer hos Ali: +16012 kr (19939 kr)
- 6:46 efterspelet: dag 22, 112 s (19939 kr)
- 6:46 tjänar pengar till efterspelet: 19939/20439 kr → printar kolfiberstol (15200 kr) (19939 kr)
- 6:53 gå till skrivaren (33 m) (19939 kr)
- 6:55 printar Kolfiberstol (19939 kr)
- 7:03 tar ut 1 st ur skrivaren (19939 kr)
- 7:10 gå till Ali (33 m) (19939 kr)
- 7:10 öppnar Alis butik – sälja (19939 kr)
- 7:12 säljer hos Ali: +15200 kr (35139 kr)
- 7:14 efterspelet: dag 22, 139 s (35139 kr)
- 7:14 tjänar pengar till efterspelet: 35139/35639 kr → printar kolfiberstol (14440 kr) (35139 kr)
- 7:20 gå till skrivaren (33 m) (35139 kr)
- 7:22 printar Kolfiberstol (35139 kr)
- 7:30 tar ut 1 st ur skrivaren (35139 kr)
- 7:37 gå till Ali (33 m) (35139 kr)
- 7:37 öppnar Alis butik – sälja (35139 kr)
- 7:39 säljer hos Ali: +14440 kr (49579 kr)
- 7:41 efterspelet: dag 22, 167 s (49579 kr)
- 7:41 tjänar pengar till efterspelet: 49579/50079 kr → printar kolfiberstol (13718 kr) (49579 kr)
- 7:48 gå till skrivaren (33 m) (49579 kr)
- 7:49 printar Kolfiberstol (49579 kr)
- 7:58 tar ut 1 st ur skrivaren (49579 kr)
- 8:04 gå till Ali (33 m) (49579 kr)
- 8:04 öppnar Alis butik – sälja (49579 kr)
- 8:06 säljer hos Ali: +13718 kr (63297 kr)
- 8:09 efterspelet: dag 22, 195 s (63297 kr)
- 8:09 tjänar pengar till efterspelet: 63297/63797 kr → printar kolfiberstol (13032 kr) (63297 kr)
- 8:16 gå till skrivaren (33 m) (63297 kr)
- 8:18 printar Kolfiberstol (63297 kr)
- 8:25 tar ut 1 st ur skrivaren (63297 kr)
- 8:32 gå till Ali (33 m) (63297 kr)
- 8:32 öppnar Alis butik – sälja (63297 kr)
- 8:34 säljer hos Ali: +13032 kr (76329 kr)
- 8:35 efterspelet: dag 22, 221 s (76329 kr)
- 8:35 tjänar pengar till efterspelet: 76329/76829 kr → printar kolfiberstol (12380 kr) (76329 kr)
- 8:35 väntar på kolfiber från bandet (76329 kr)
- 8:43 väntar på kolfiber från bandet (76329 kr)
- 8:51 väntar på kolfiber från bandet (76329 kr)
- 8:59 väntar på kolfiber från bandet (76329 kr)
- 9:07 väntar på kolfiber från bandet (76329 kr)
- 9:15 väntar på kolfiber från bandet (76329 kr)
- 9:23 väntar på kolfiber från bandet (76329 kr)
- 9:31 väntar på kolfiber från bandet (76329 kr)
- 9:39 väntar på kolfiber från bandet (76329 kr)
- 9:47 väntar på kolfiber från bandet (76329 kr)
- 9:55 väntar på kolfiber från bandet (76329 kr)
- 10:04 väntar på kolfiber från bandet (76329 kr)
- 10:12 väntar på kolfiber från bandet (76329 kr)
- 10:20 väntar på kolfiber från bandet (76329 kr)
- 10:28 väntar på kolfiber från bandet (76329 kr)
- 10:36 väntar på kolfiber från bandet (76329 kr)
- 10:44 väntar på kolfiber från bandet (76329 kr)
- 10:52 väntar på kolfiber från bandet (76329 kr)
- 11:00 väntar på kolfiber från bandet (76329 kr)
- 11:08 väntar på kolfiber från bandet (76329 kr)
- 11:16 väntar på kolfiber från bandet (76329 kr)
- 11:24 väntar på kolfiber från bandet (76329 kr)
- 11:32 väntar på kolfiber från bandet (76329 kr)
- 11:40 väntar på kolfiber från bandet (76329 kr)
- 11:48 väntar på kolfiber från bandet (76329 kr)
- 11:56 väntar på kolfiber från bandet (76329 kr)
- 12:04 väntar på kolfiber från bandet (76329 kr)
- 12:12 väntar på kolfiber från bandet (76329 kr)
- 12:20 väntar på kolfiber från bandet (76329 kr)
- 12:28 väntar på kolfiber från bandet (76329 kr)
- 12:36 väntar på kolfiber från bandet (76329 kr)
- 12:36 kolfiberstol gick inte att printa – tar nästa (76329 kr)
- 12:36 öppnar Alis butik – sälja (76329 kr)
- 12:38 tjänar pengar till efterspelet: 76329/76829 kr → printar cykelhjälm i petg (1995 kr) (76329 kr)
- 12:45 gå till en tunna (36 m) (76329 kr)
- 12:49 gå till PETG-kvarnen (13 m) (76329 kr)
- 12:49 tömmer det tunga i PETG-kvarnen (76329 kr)
- 12:54 gå till skrivaren (3 m) (76329 kr)
- 12:56 printar Cykelhjälm i PETG (76329 kr)
- 13:01 tar ut 1 st ur skrivaren (76329 kr)
- 13:07 gå till Ali (31 m) (76329 kr)
- 13:07 öppnar Alis butik – sälja (76329 kr)
- 13:10 säljer hos Ali: +5690 kr (82019 kr)
- 13:15 gå till sängen (20 m) (82019 kr)

</details>

## Dag 23

| Tid | Källa | Vem | Text |
|---|---|---|---|
| 13:18 | vara | ali | n2_vas |

<details><summary>Botens handlingar dag 23</summary>

- 0:00 — dag 23 börjar — (82019 kr)

</details>
