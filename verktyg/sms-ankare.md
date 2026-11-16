# Soptippsvägen 1 – Sms med ankare (EL 30)

*Spelchatten · genererad ur koden 2026-11-17 (commit efter `805a025`). Ersätter `claude/soptippsvagen-sms-tidslinje.md`. Varje sms har ett ankare (händelsen det svarar på) och ett fönster. Regelvakten flaggar FEL ORDNING när ett sms visas före sitt ankare eller i fel ordning i en serie.*

## Storysms med händelseankare

| Sms | Från | Ankare | Fönster | Förutsätter (kand) |
|---|---|---|---|---|
| "HUR KUNDE DU BARA GÅ?!?!" | mamma | `lastatAv` (dag 1) | 2,5 min efter | – |
| Brorsans första sms ("Ali …") | bror | första försäljningen | direkt efter målet | Ali |
| Brorsan om Ali (om man inte sålt) | bror | dag 1, efter första printen | tills man har sålt | – |
| Rolfs lapp på sopsäckarna | rolf | sopsäckarna plockas upp (EL 28) | direkt | – (presenterar Rolf) |
| Rolfs brev 0–3 (önskan) | rolf | sopbilen passerar efter förra tacket (EQ 39) | samma dag, ≥ 90 s efter tacket | Rolf |
| Rolfs tack 0–3 | rolf | gåvan hämtad med sopbilen | nästa morgon i lådan | Rolf |
| Rolf "Funkar de??" (första sms:et) | rolf | numret i postlådan (efter tack 1) | 15 s efter | Rolf |
| Rolfs fynd-sms (tack för presenter) | rolf | presenten hämtad | 3 s efter | Rolf, numret |
| Alis upplåsnings-sms (EE) | ali | flaskhalsen når gränsen | direkt efter klagotanken | Ali |
| Alis ritningsnyheter (`ALI_SPECIAL`) | ali | upplåsning / nytt i butiken | samma dag | Ali |
| Mammas burk-sms | mamma | 1, 3, 6, 10, 15, 22 malda burkar | 6 s efter | – |
| Rolf om säljlådan | rolf | säljlådan placerad | 1 s efter | Rolf |
| Kvällens förvarning ("Pappa kommer förbi i morgon") | mamma | sov-målet dag 5 blir aktivt | samma kväll | – |

## Familjen per dag (`FAMILJ`) – morgonpaket, dag 3 och framåt

| Dag | Från | Text |
|---|---|---|
| 1 | mamma | HUR KUNDE DU BARA GÅ?!?! Är du ok?? SVARA NÄR JAG RINGER!! |

## Pool-sms (`SMS_POOL`)

Fria sms kommer bara när bonusbudgeten tillåter (EC 2). Bundna har ett villkor (`nar`) som kollas både när de köas och när de visas, och samma text kommer högst en gång per 5 speldagar.

| Id | Från | Ankare (`nar`) | Typ | Text |
|---|---|---|---|---|
| `m_mack` | mamma | `S.dag >= 3` | fri | Jag har städat ditt rum. Det tog TRE DAGAR. Jag hittade en macka från  |
| `m_strumpor` | mamma | `S.dag >= 9 && S.dag <= 10` | fri | Har du VARMA STRUMPOR?? Det ska bli kallt!! |
| `m_masar` | mamma | `S.dag >= 4` | fri | Jag läste om en man som bodde på en soptipp. Han blev attackerad av må |
| `m_pengar` | mamma | `S.mynt >= 3000` | fri | Din bror säger att du har PENGAR. Du har aldrig haft pengar. Har du så |
| `m_sover` | mamma | `S.dag >= 5` | fri | Sover du ordentligt? Du ser trött ut. Jag vet att jag inte kan se dig. |
| `m_jul` | mamma | `S.dag >= 7` | fri | Kommer du hem på jul? Pappa har redan köpt skinkan. I augusti. Den lig |
| `m_facebook` | mamma | `S.dag >= 9` | fri | Jag har lagt upp en bild på ditt skjul på Facebook. 47 gilla. Faster I |
| `m_tandborste` | mamma | `S.dag >= 2` | fri | Har du borstat tänderna idag? Ljug inte. Jag hör om du ljuger. Även på |
| `m_pappa_tv` | mamma | `S.dag >= 4` | fri | Jag sa till pappa att du bor på en SOPTIPP. Han sa "aha, vad lugnt då" |
| `b_pappa_bil` | bror | `S.dag >= 3` | fri | Pappa har tvättat bilen tre gånger den här veckan. Jag sa att du bor p |
| `b_gym` | bror | `S.dag >= 4` | fri | Jag har gjort om ditt rum till gym. Mamma vet inte. Säg inget. |
| `b_pappa_yt` | bror | `S.dag >= 5` | fri | Pappa har en spellista på Youtube som heter "Sopbilar". 34 videor. Han |
| `b_munstycke` | bror | `skrivare.length >= 2` | fri | Tips: håll munstycket rent. Och prata med skrivaren ibland. Inte för a |
| `b_airbnb` | bror | `trivsel() >= 150` | fri | Visade bilder på ditt skjul för polarna. Dom trodde det var en Airbnb. |
| `b_facebook` | bror | `S.dag >= 7` | fri | Mamma har gått med i en Facebookgrupp: "Föräldrar till barn som flytta |
| `b_laddare` | bror | `S.dag >= 4` | fri | Tomt här hemma. Ingen som snor mina laddare. Inte för att jag saknar d |
| `b_pappa_mjolk` | bror | `S.dag >= 6` | fri | Pappa gick för att tjacka mjölk och kom hem med en motorsåg. "Den var  |
| `b_polare` | bror | `S.dag >= 8` | fri | Berättade för polarna att min lillebrorsa bygger sitt eget hus. Dom tr |
| `r_kajak` | rolf | `(S.kapitel // 1) >= 3` | fri | Fick en kajak i lasset. Ingen paddel. Typiskt. Ja la den vid grinden å |
| `r_bulle` | rolf | `S.rolf.i >= 1` | fri | Morgonbulle på kontoret me polarna. Bengt har ny keps. Vi pratade om d |
| `r_kajsa` | rolf | `S.rolf.i >= 1` | fri | Kajsa la en död mus på min kudde. De e kärlek. Hon får lax ikväll. /R |
| `r_kopp` | rolf | `S.rolf.i >= 2` | fri | Hittade Birgittas gamla kaffekopp under sängen i husvagnen. Ja dricker |
| `r_mazarin` | rolf | `S.rolf.i >= 2` | fri | Konditoriet på Storgatan har slutat me mazariner. Ja har skrivit ett k |
| `r_hudik` | rolf | `S.rolf.i >= 3` | fri | Rolfs Rockers spelade en gång i Folkets park i Hudiksvall. 14 pers. 3  |
| `r_maskin` | rolf | `S.rolf.i >= 3` | fri | Chefen har köpt en kaffemaskin som pratar. Den sa "god morgon Rolf". J |
| `r_backa` | rolf | `S.rolf.i >= 4` | fri | 31 år på bilen och ja har aldrig backat in i nåt. Utom en gång. En bre |
| `m_burk1` | mamma | `(S.burkar // 0) >= 2` | fri | Fick du burkarna?? Honungen är från Gunnars bigårdar och lingonen ploc |
| `m_burk2` | mamma | `(S.burkar // 0) >= 8` | fri | Har du ätit upp honungen? Pappa säger att han såg den på golvet. Den s |
| `m_kompott` | mamma | `(S.burkar // 0) >= 4` | fri | Fick du kompotten? Det är rotfruktsgratäng. Potatisen var slut så jag  |
| `b_burk` | bror | `(S.burkar // 0) >= 6` | fri | Mamma har gjort lingonsylt i tre dagar. Hela köket är rött. Hon säger  |
| `r_burk` | rolf | `(S.burkar // 0) >= 10` | fri | Såg alla burkar vid ditt skjul. Försökte ge Kajsa honung. Hon vill int |
| `b_pappa_dryg1` | bror | `(S.burkMalda // 0) >= 2` | fri | Mamma pratar bara om sylten. Pappa har slutat säga "aha, vad lugnt då" |
| `b_pappa_dryg2` | bror | `(S.burkMalda // 0) >= 5` | fri | Pappa sover i garaget. Han säger att det är för att lyssna på motorn.  |
| `r_morgon` | rolf | `S.dag >= 4 && S.rolfNummer` | fri | Kommer direkt från morgonkontoret. Lasse har köpt en ny termos. De va  |
| `r_morgon2` | rolf | `S.dag >= 8 && S.rolfNummer` | fri | Gunnar sa ett helt ord på morgonkontoret idag. "Regn." Lasse tappa kaf |
| `r_prinsess` | rolf | `S.dag >= 6 && S.rolfNummer` | fri | Tryckte i mej en HEL prinsesstårta i ett svagt ögonblick. Ont i magen  |
| `r_bengt1` | rolf | `S.dag >= 3 && S.rolfNummer` | fri | Akta dej för Bengt-Åke. Han äger all mark runt hä. Han sköt mot en älg |
| `r_bengt3` | rolf | `S.dag >= 6 && S.rolfNummer && S.respekt >= 15` | fri | Bengt-Åke frågade om dej. Ja sa att du e en bra unge som städar. Han s |
| `b_bengt` | bror | `(S.bengtSkrik // 0) >= 2` | fri | Mamma såg på Facebook att en gubbe vid soptippen jagat bort en hemtjän |
