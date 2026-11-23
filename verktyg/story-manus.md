# Soptippsvägen 1 – manuset ur story.js

*Skrivs av `node verktyg/story-manus.mjs`. Ändra i `spel/printa-hem/story.js`, inte här.*

## Dag 1 (kapitel 1)

### 1. Spika upp din adresskylt `skylt`
- **Moment:** Kom igång · **sak:** hammare · **bild:** hammare · **pil:** bradhog
- **Handling:** spika → kontrollhjälp *Klick · Klicka för att spika*
- **Kräver:** hammareIRaden · **ger:** skyltUppe
- **Start (sägs när steget börjar):** "Först borde jag spika upp en skylt, så att alla ser att jag bor HÄR."
  - i läget **ryggan:** "Hammaren ligger i ryggsäcken. Den ska fram."
  - i läget **borta:** "Jag behöver hammaren."
  - medan steget pågår (verktygsbyte): "Hammaren ligger i raden. Hjulet eller 2."
- **Påminnelse:** "Skylten. Hammaren och brädorna vid vägen."
- **Kvitto:** –

### 2. Lasta av skrivaren `lasta`
- **Moment:** Ställ upp skrivaren · **sak:** skrivareS · **bild:** skrivareS · **pil:** vagCykel
- **Handling:** lyfta → kontrollhjälp *Klick · Klicka för att ta upp*
- **Kräver:** skyltUppe, skrivarePaCykeln · **ger:** skrivareLastad
- **Start (sägs när steget börjar):** "Storebrors skrivare står kvar på cykeln vid vägen. Den ska av."
- **Påminnelse:** "Skrivaren ska av cykeln."
- **Kvitto:** "Tung. Den har storebror aldrig burit så långt."
- **Uppläsning:** "Klicka på cykeln och lasta av storebrors skrivare."

### 3. Ställ upp skrivaren `stall`
- **Moment:** Ställ upp skrivaren · **sak:** skrivareS · **bild:** skrivareS · **pil:** startYta
- **Handling:** stallNer → kontrollhjälp *Klick · Ställ ner · R vrid*
- **Kräver:** skrivareLastad · **ger:** skrivareStar
- **Start (sägs när steget börjar):** "Skrivaren ställer jag mot skräpberget. Min första verkstad."
  - i läget **raden:** "Skrivaren ligger i raden. Den ska stå mot skräpberget."
  - i läget **ryggan:** "Skrivaren hamnade i ryggsäcken. Fram med den."
- **Påminnelse:** "Skrivaren ska stå mot skräpberget."
- **Kvitto:** –
- **Uppläsning:** "Skrivaren ska stå mot skräpberget."

### 4. Skrivaren behöver ström `strom`
- **Moment:** Få ström · **sak:** cykelS · **bild:** beror på läget · **pil:** vagCykel
- **Handling:** lyfta → kontrollhjälp *Klick · Klicka för att ta upp*
- **Kräver:** skrivareStar, cykelVidVagen · **ger:** stromIdee
- **Start (sägs när steget börjar):** "Den har ingen ström. Cykeln vid vägen kanske kan ge ström."
- **Påminnelse:** "Cykeln vid vägen. Den kan ge ström."
- **Kvitto:** –

### 5. *(beror på läget)* 'Montera generatorn' / 'Ställ cykel och generator' `bygg`
- **Moment:** Få ström · **sak:** cykelS · **bild:** beror på läget · **pil:** startYta
- **Handling:** stallNer → kontrollhjälp *Klick · Ställ ner · R vrid*
- **Kräver:** stromIdee, generatorIRaden · **ger:** cykelOmbyggd
- **Start (sägs när steget börjar):** *(beror på läget)* 'Nu borde jag koppla på generatorn, så att cykeln gör el.' / 'Cykeln ska stå vid skrivaren. Sen kopplar jag på generatorn.' / 'Cykeln kan ge ström om generatorn sitter på. Båda ska stå vid skrivaren.'
  - i läget **handen:** "Cykeln ska stå vid skrivaren."
  - i läget **stalld:** "Nu borde jag koppla på generatorn, så att cykeln gör el."
- **Påminnelse:** *(beror på läget)* 'Generatorn på cykeln.' / 'Cykeln, sen generatorn.'
- **Kvitto:** –
- **Uppläsning:** "Ställ cykeln och generatorn vid skrivaren."

### 6. Välj vad skrivaren ska printa `valjModell`
- **Moment:** Första printen · **sak:** skrivareS · **bild:** skrivareS · **pil:** skrivare
- **Handling:** valj → kontrollhjälp *Klick · Välj modell på skrivaren*
- **Kräver:** cykelOmbyggd, brorsRulle · **ger:** printJobb
- **Start (sägs när steget börjar):** "Strömmen finns. Nu ska skrivaren veta vad den ska göra, sen trampar jag."
- **Påminnelse:** "Klicka på skrivaren och välj en nyckelring."
- **Kvitto:** "Den piper. Den GÖR något."
- **Uppläsning:** "Klicka på skrivaren och välj vad du vill printa."

### 7. Trampa cykeln `trampa`
- **Moment:** Första printen · **sak:** cykelS · **bild:** cykelS · **pil:** cykel
- **Handling:** trampa → kontrollhjälp *Klicka och håll · Trampa cykeln*
- **Kräver:** printJobb · **ger:** nyckelring1
- **Start (sägs när steget börjar):** "Nu behöver den ström. Trampa."
- **Påminnelse:** "Sätt dig på cykeln och trampa."
- **Kvitto:** *(beror på läget)* 'Klar! Ta ut den innan den ändrar sig.'
- **Uppläsning:** "Trampa!"

### 8. En nyckelring till `rullSlut`
- **Moment:** Första printen · **sak:** nyckelring · **bild:** nyckelring · **pil:** skrivare
- **Handling:** printa → kontrollhjälp *Klick · Välj modell på skrivaren*
- **Kräver:** nyckelring1 · **ger:** rullSlut
- **Start (sägs när steget börjar):** "En nyckelring till, så länge storebrors rulle räcker."
- **Påminnelse:** "En ring till."
- **Kvitto:** –
- **Dialog** (inkorg 61):
  - **bror** (sms, en gång): "VA FAN?! Fick du igång den?? Jag försökte i typ ett år. Den bara pep. 😳" · *svarar på* tagitUrPrint:nyckelring
  - **bror** (sms, en gång): "Sälj grejerna i affären mitt emot, han köper allt." · *svarar på* dialog:brorSms1
  - **ali** (rop, en gång): "Hallå där, nya grannen! Vad är det där du gör?" · *svarar på* tagitUrPrint:nyckelring
- **Uppläsning:** "Printa en nyckelring till."

### 9. Visa ringarna i affären `saljTva`
- **Moment:** Gör egen tråd · **sak:** nyckelring · **bild:** nyckelring · **pil:** ali
- **Handling:** salj → kontrollhjälp *– (hos Ali)*
- **Kräver:** rullSlut · **ger:** kvarnPengar
- **Start (sägs när steget börjar):** "Affären mitt emot. Han verkar nyfiken. Jag visar honom."
- **Påminnelse:** "Han i affären mitt emot ville se ringarna."
- **Kvitto:** –
  - starten väntar på: dialog:aliRop
- **Dialog** (inkorg 61):
  - **ali** (butik, en gång): "Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar." · *svarar på* oppnatButik · *ger* kandAli
  - **ali** (butik, en gång): *(beror på läget)*  · *svarar på* salt:nyckelring · *vet* kandAli · *ger* aliHarKvarn
- **Uppläsning:** "Visa ringarna i affären."

### 10. Köp kvarnen `aliKvarn`
- **Moment:** Gör egen tråd · **sak:** byggsats:gammalkvarn · **bild:** byggsats:gammalkvarn · **pil:** ali
- **Handling:** kop → kontrollhjälp *– (hos Ali)*
- **Kräver:** kvarnPengar · **ger:** kvarnKopt
- **Start (sägs när steget börjar):** "Ali har en gammal kvarn. Den gör tråd av skräp."
- **Påminnelse:** "Kvarnen hos Ali."
- **Kvitto:** –
  - starten väntar på: dialog:aliKvarnErbjud
- **Dialog** (inkorg 61):
  - **ali** (butik, en gång): "Den är din. Pappa hade blivit glad. Han trodde aldrig att nån skulle vilja ha den." · *svarar på* kopt:gammalkvarn
- **Uppläsning:** "Köp kvarnen hos Ali."

### 11. Ställ kvarnen `kvarn`
- **Moment:** Gör egen tråd · **sak:** byggsats:gammalkvarn · **bild:** byggsats:gammalkvarn · **pil:** startYta
- **Handling:** stallNer → kontrollhjälp *Klick · Ställ ner · R vrid*
- **Kräver:** kvarnKopt · **ger:** kvarnStar
- **Start (sägs när steget börjar):** "Kvarnen ställer jag bredvid skrivaren, närmast skräpberget. Där finns skräpet."
  - i läget **handen:** "Kvarnen ska stå vid skrivaren, närmast skräpberget."
  - i läget **raden:** "Kvarnen ligger i raden. Den ska stå vid skrivaren."
  - i läget **ryggan:** "Kvarnen ligger i ryggsäcken. Den ska fram och stå vid skrivaren."
  - i läget **kistan:** "Kvarnen ligger i kistan. Den ska ut och stå vid skrivaren."
- **Påminnelse:** "Kvarnen ska stå vid skrivaren."
- **Kvitto:** –
- **Uppläsning:** "Ställ kvarnen vid tornet."

### 12. *(beror på läget)* 'Veva kvarnen' / 'Skräp i kvarnen' / 'Gör egen tråd' `flaska`
- **Moment:** Gör egen tråd · **sak:** kvarn · **bild:** – · **pil:** vevYta
- **Handling:** veva → kontrollhjälp *Klicka och håll · Veva kvarnen*
- **Kräver:** kvarnStar · **ger:** trad
- **Start (sägs när steget börjar):** "Skräp i kvarnen, sen vevar jag. Då blir det tråd."
- **Påminnelse:** "Skräp i kvarnen, sen vevar jag."
- **Kvitto:** "Det blir tråd! Riktig plasttråd."
- **Uppläsning:** "Lägg skräpet i kvarnen och veva."

### 13. Printa med egen tråd `egenPrint`
- **Moment:** Gör egen tråd · **sak:** nyckelring · **bild:** nyckelring · **pil:** skrivare
- **Handling:** printa → kontrollhjälp *Klick · Välj modell på skrivaren*
- **Kräver:** trad · **ger:** egenRing
- **Start (sägs när steget börjar):** "Min egen tråd. Nu printar jag en nyckelring av den."
  - medan steget pågår (rulleIHanden): "Min egen tråd. Den ska in i skrivaren."
- **Påminnelse:** "Nu printar jag med min egen tråd."
- **Kvitto:** –
- **Uppläsning:** "Printa en nyckelring av din egen tråd."

### 14. Sälj hos Ali `salj`
- **Moment:** Gör egen tråd · **sak:** nyckelring · **bild:** nyckelring · **pil:** ali
- **Handling:** salj → kontrollhjälp *– (hos Ali)*
- **Kräver:** egenRing · **ger:** saltEgen
- **Start (sägs när steget börjar):** "Ali köper nog den här också."
- **Påminnelse:** "Ali köper det jag printar."
- **Kvitto:** –
  - starten väntar på: vet kandAli
- **Dialog** (inkorg 61):
  - **ali** (butik, en gång): "Nyckelringar igen? Folk tappar sina nycklar hela tiden." · *svarar på* salt:nyckelring · *vet* kandAli
- **Uppläsning:** "Sälj nyckelringarna hos Ali."

### 15. *(beror på läget)* 'byggsats:powerbank' / 'Koppla in powerbanken' / 'Gå till Ali' `powerbank`
- **Moment:** Gör egen tråd · **sak:** byggsats:powerbank · **bild:** byggsats:powerbank · **pil:** ali
- **Handling:** montera → kontrollhjälp *Klick · Klicka för att montera*
- **Kräver:** saltEgen · **ger:** powerbank
- **Start (sägs när steget börjar):** *(beror på läget)* 'Ali har något åt mig. Jag går över vägen till affären.'
  - i läget **handen:** "Powerbanken ska sitta på cykeln."
  - i läget **raden:** "Powerbanken ligger i raden. Den ska på cykeln."
- **Påminnelse:** "Ali har något åt mig."
- **Kvitto:** –
  - starten väntar på: dialog:aliPbKom
- **Dialog** (inkorg 61):
  - **ali** (sms, en gång): "Ali här. Glömde en sak. Kom tillbaka, jag har nåt åt dig." · *svarar på* salt:nyckelring · *vet* kandAli
  - **ali** (butik, en gång): "Jag såg dig cykla. Det ser jobbigt ut. Ta den här. Bra kunder får bonus." · *svarar på* oppnatButik · *vet* kandAli

### 16. Köp skräpgripen `kopGrip`
- **Moment:** Sova · **sak:** byggsats:grip · **bild:** byggsats:grip · **pil:** ali
- **Handling:** kop → kontrollhjälp *– (hos Ali)*
- **Kräver:** powerbank · **ger:** gripRitning
- **Start (sägs när steget börjar):** *(beror på läget)* 'Med en skräpgrip slipper jag böja mig. Ali har en ritning.' / 'Gripen kostar femtio. Fler nyckelringar, alltså.'
  - medan steget pågår (harRad): "Femtio kronor. Nu har jag råd med gripen."
- **Påminnelse:** "Gripen hos Ali."
- **Kvitto:** –
  - starten väntar på: dialog:aliGripSms
- **Dialog** (inkorg 61):
  - **ali** (sms, en gång): "Ali här. Nyckelringen sålde direkt. Jag ville bli ingenjör en gång. Nu har jag låtit en AI rita en skräpgrip. Kom och titta." · *svarar på* malKlart:powerbank · *vet* kandAli · *ger* aliHarGrip
  - **ali** (butik, en gång): "Bra val. Ritningen räcker till en skräpgrip." · *svarar på* kopt:grip
- **Uppläsning:** "Köp en skräpgrip hos Ali. Den kostar femtio kronor."

### 17. *(beror på läget)* 'byggsats:grip' / 'Ta ut gripen' / 'Printa skräpgripen' `printGrip`
- **Moment:** Sova · **sak:** byggsats:grip · **bild:** – · **pil:** skrivare
- **Handling:** printa → kontrollhjälp *Klick · Välj modell på skrivaren*
- **Kräver:** gripRitning · **ger:** grip
- **Start (sägs när steget börjar):** "Ritningen är min. Nu printar jag skräpgripen."
- **Påminnelse:** "Gripen ska printas."
- **Kvitto:** –
- **Uppläsning:** "Printa skräpgripen på skrivaren."

### 18. *(beror på läget)* 'recept:kruka' / 'Printa en blomkruka' / 'Köp krukreceptet' / 'Spara till receptet' / 'Sälj en nyckelring till' `krukaD1`
- **Moment:** Sova · **sak:** kruka · **bild:** kruka · **pil:** skrivare
- **Handling:** printa → kontrollhjälp *Klick · Välj modell på skrivaren*
- **Kräver:** grip · **ger:** kruka1
- **Start (sägs när steget börjar):** "Ali vill ha krukor. Jag printar en blomkruka."
- **Påminnelse:** "En blomkruka åt Ali."
- **Kvitto:** "En kruka. Mamma skulle bli så stolt. Hon får inte veta."
  - starten väntar på: dialog:aliKrukaSms
- **Dialog** (inkorg 61):
  - **ali** (sms, en gång): "Prova en kruka. Folk köper krukor. Ingen vet varför." · *svarar på* upplast:kruka · *vet* kandAli
  - **ali** (butik, en gång): "Blomkruka? Bra val. Folk köper sånt. Jag vet inte varför." · *svarar på* kopt:kruka

### 19. Sälj blomkrukan `saljKruka`
- **Moment:** Sova · **sak:** kruka · **bild:** kruka · **pil:** ali
- **Handling:** salj → kontrollhjälp *– (hos Ali)*
- **Kräver:** kruka1 · **ger:** krukaSald
- **Start (sägs när steget börjar):** "Ali gillar krukor. Han sa det själv."
- **Påminnelse:** "Krukan till Ali."
- **Kvitto:** –
  - starten väntar på: dialog:aliKrukaSms

### 20. Köp sängen `kopSang`
- **Moment:** Sova · **sak:** sang · **bild:** sang · **pil:** ali
- **Handling:** kop → kontrollhjälp *– (hos Ali)*
- **Kräver:** krukaSald · **ger:** sangRitning
- **Start (sägs när steget börjar):** "Jag tänker inte sova på betongen i natt. Ali har en säng. Typ."
  - medan steget pågår (morkt): "Det börjar bli mörkt. Jag kan inte sova på jorden."
- **Påminnelse:** "En säng. Jag behöver pengar till den."
- **Kvitto:** –
- **Dialog** (inkorg 61):
  - **ali** (butik, en gång): "Sov gott, min vän." · *svarar på* kopt:sang
- **Uppläsning:** "Köp 3D-modellen till sängen hos Ali."

### 21. Printa sängen `printSang`
- **Moment:** Sova · **sak:** sang · **bild:** sang · **pil:** skrivare
- **Handling:** printa → kontrollhjälp *Klick · Välj modell på skrivaren*
- **Kräver:** sangRitning · **ger:** sangPrintad
- **Start (sägs när steget börjar):** "En säng tar lång tid. Den är värd det."
- **Påminnelse:** "Sängen ska printas."
- **Kvitto:** "En säng. Jag printade en SÄNG."
- **Uppläsning:** "Printa sängen på skrivaren."

### 22. Sängen i skjulet `sov1`
- **Moment:** Sova · **sak:** sang · **bild:** sang · **pil:** skjul
- **Handling:** sov → kontrollhjälp *Klick · Sov*
- **Kräver:** sangPrintad · **ger:** dag2
- **Start (sägs när steget börjar):** "Sängen ska in i skjulet. Sen sover jag."
- **Påminnelse:** "Sängen in i skjulet. Sen sover jag."
- **Kvitto:** –
- **Uppläsning:** "Ställ sängen i skjulet och sov."

## Dag 2 (kapitel 1)

### 1. Köp kvarnmotorn `kopMotor`
- **Moment:** Kvarnmotorn · **sak:** byggsats:kvarnmotor · **bild:** byggsats:kvarnmotor · **pil:** ali
- **Handling:** kop → kontrollhjälp *– (hos Ali)*
- **Kräver:** – · **ger:** –
- **Start (sägs när steget börjar):** "Vevandet tar på armarna. Ali har en motor till kvarnen."
- **Påminnelse:** –
- **Kvitto:** –
- **Uppläsning:** "Köp kvarnmotorn hos Ali."

### 2. Printa kvarnmotorn till kvarnen `monteraMotor`
- **Moment:** Kvarnmotorn · **sak:** byggsats:kvarnmotor · **bild:** byggsats:kvarnmotor · **pil:** kvarn
- **Handling:** montera → kontrollhjälp *Klick · Klicka för att montera*
- **Kräver:** – · **ger:** –
- **Start (sägs när steget börjar):** "Motorn ska sitta där veven sitter. Jag printar den först."
- **Påminnelse:** –
- **Kvitto:** –
- **Uppläsning:** "Printa kvarnmotorn på skrivaren och ta ut den. Då sätter du den direkt på kvarnen."

### 3. Städa gården `n1-stada-klart-garden`
- **Moment:** Städa gården · **sak:** skrap · **bild:** – · **pil:** gard
- **Handling:** ta → kontrollhjälp *Klick*
- **Kräver:** – · **ger:** –
- **Start (sägs när steget börjar):** "Gården är full av skräp. Jag börjar vid skjulet."
- **Påminnelse:** –
- **Kvitto:** –
- **Uppläsning:** "Städa gården. Mal skräpet i kvarnen."

### 4. *(beror på läget)* 'byggsats:korg' / 'Ta på dig sopsäcken' / 'Ta sopsäckarna' / 'Gå till bilen vid skjulet' `kopSack`
- **Moment:** Städa gården · **sak:** byggsats:korg · **bild:** byggsats:korg · **pil:** gard
- **Handling:** ta → kontrollhjälp *Klick*
- **Kräver:** – · **ger:** –
- **Start (sägs när steget börjar):** "En stor bil saktar in vid skjulet. Jag går dit."
  - medan steget pågår (sackar): "Rolf slängde av något åt mig."
- **Påminnelse:** *(beror på läget)* 'Säckarna vid staketet.' / 'Bilen vid skjulet.'
- **Kvitto:** –
- **Dialog** (inkorg 61):
  - **rolf** (rop, en gång): "Tjena. Rolf. Ja kör sopbilen. Tippen där borta ä min. Har vart min sen -87." · *svarar på* rolfStannar · *ger* kandRolf
  - **rolf** (rop, en gång): "Du har städat hela gården. Ingen gör så nuförtin." · *svarar på* dialog:rolfHej · *vet* kandRolf
  - **rolf** (rop, en gång): "Öj… ä dä du som printar grejer? Dom där nyckelringarna?" · *svarar på* dialog:rolfGarden · *vet* kandRolf
  - **du** (rop, en gång): "Ja. Av skräp." · *svarar på* dialog:rolfPrintar · *vet* kandRolf
  - **rolf** (rop, en gång): "Hm. Ja kanske har nåt åt dej. Kolla postlådan vid grinden." · *svarar på* dialog:duAvSkrap · *vet* kandRolf

### 5. *(beror på läget)* ' + i ? ' / ' : i ? ' / 'Kolla Rolfs postlåda vid grinden' `rolf0-brev`
- **Moment:** Rolfs brev · **sak:** brev · **bild:** – · **pil:** postlada
- **Handling:** ta → kontrollhjälp *Klick*
- **Kräver:** – · **ger:** –
- **Start (sägs när steget börjar):** "Det ligger ett brev i postlådan vid grinden. Det läser jag."
- **Påminnelse:** –
- **Kvitto:** –

### 6. *(beror på läget)*  `rolf0-printa`
- **Moment:** Rolfs brev · **sak:** gava · **bild:** – · **pil:** skrivare
- **Handling:** printa → kontrollhjälp *Klick · Välj modell på skrivaren*
- **Kräver:** – · **ger:** –
- **Start (sägs när steget börjar):** "Rolf vill ha en ölhållare. Den printar jag."
- **Påminnelse:** –
- **Kvitto:** –

### 7. *(beror på läget)*  `rolf0-ge`
- **Moment:** Rolfs brev · **sak:** gava · **bild:** – · **pil:** postlada
- **Handling:** lagg → kontrollhjälp *Klick*
- **Kräver:** – · **ger:** –
- **Start (sägs när steget börjar):** "Ölhållaren är klar. Den lägger jag i Rolfs postlåda."
- **Påminnelse:** –
- **Kvitto:** –

### 8. Printa vindsnurran till taket `vindsnurra`
- **Moment:** Vindsnurran · **sak:** byggsats:vindsnurra · **bild:** byggsats:vindsnurra · **pil:** skjul
- **Handling:** montera → kontrollhjälp *Klick · Klicka för att montera*
- **Kräver:** – · **ger:** –
- **Start (sägs när steget börjar):** "En vindsnurra på skjulets tak. Då blir det ström när det blåser."
- **Påminnelse:** –
- **Kvitto:** "Den snurrar! Långsamt. Men den snurrar."

### 9. Bygg en dörr till skjulet `n1-bygg-dorr-skjulet`
- **Moment:** Dörren · **sak:** byggsats:dorr · **bild:** byggsats:dorr · **pil:** skjul
- **Handling:** montera → kontrollhjälp *Klick · Klicka för att montera*
- **Kräver:** – · **ger:** –
- **Start (sägs när steget börjar):** "Det drar från dörrhålet. En dörr kan jag printa."
- **Påminnelse:** –
- **Kvitto:** –

### 10. Sov när du vill `sov2`
- **Moment:** – · **sak:** sang · **bild:** – · **pil:** skjul
- **Handling:** sov → kontrollhjälp *Klick · Sov*
- **Kräver:** – · **ger:** –
- **Start (sägs när steget börjar):** –
- **Påminnelse:** –
- **Kvitto:** –

## Dag 3 (kapitel 1)

### 1. *(beror på läget)* ' + i ? ' / ' : i ? ' / 'Kolla Rolfs postlåda vid grinden' `rolf1-brev`
- **Moment:** Rolfs brev · **sak:** brev · **bild:** – · **pil:** postlada
- **Handling:** ta → kontrollhjälp *Klick*
- **Kräver:** – · **ger:** –
- **Start (sägs när steget börjar):** "Ett nytt brev i Rolfs postlåda. Det läser jag."
- **Påminnelse:** –
- **Kvitto:** –

### 2. Hämta 5 skräp på soptippen `n2-hamta-skrap`
- **Moment:** Rolfs brev · **sak:** skrap · **bild:** – · **pil:** tippen
- **Handling:** ta → kontrollhjälp *Klick*
- **Kräver:** – · **ger:** –
- **Start (sägs när steget börjar):** "Nyckeln till tippen. Där ligger skräpet i högar."
- **Påminnelse:** –
- **Kvitto:** –

### 3. *(beror på läget)*  `rolf1-printa`
- **Moment:** Rolfs brev · **sak:** gava · **bild:** – · **pil:** skrivare
- **Handling:** printa → kontrollhjälp *Klick · Välj modell på skrivaren*
- **Kräver:** – · **ger:** –
- **Start (sägs när steget börjar):** "Rolf vill ha en flasköppnare. Den printar jag."
- **Påminnelse:** –
- **Kvitto:** –

### 4. *(beror på läget)*  `rolf1-ge`
- **Moment:** Rolfs brev · **sak:** gava · **bild:** – · **pil:** postlada
- **Handling:** lagg → kontrollhjälp *Klick*
- **Kräver:** – · **ger:** –
- **Start (sägs när steget börjar):** "Flasköppnaren är klar. Den lägger jag i Rolfs postlåda."
- **Påminnelse:** –
- **Kvitto:** –

### 5. Köp Alis gamla bilbatteri `kopBatteri`
- **Moment:** Bilbatteriet · **sak:** byggsats:cykelbatteri · **bild:** byggsats:cykelbatteri · **pil:** ali
- **Handling:** kop → kontrollhjälp *– (hos Ali)*
- **Kräver:** – · **ger:** –
- **Start (sägs när steget börjar):** "Ali har ett gammalt bilbatteri. Då sparar jag strömmen."
- **Påminnelse:** –
- **Kvitto:** "Nu printar den klart även när jag vilar benen."
- **Uppläsning:** "Köp Alis gamla bilbatteri."

### 6. *(beror på läget)* 'byggsats:ryggkorg' / 'Ta ut ryggkorgen' / 'Printa ryggkorgen' `ryggkorg`
- **Moment:** Bära och mala mer · **sak:** byggsats:ryggkorg · **bild:** byggsats:ryggkorg · **pil:** skrivare
- **Handling:** printa → kontrollhjälp *Klick · Välj modell på skrivaren*
- **Kräver:** – · **ger:** –
- **Start (sägs när steget börjar):** "Jag springer för mycket. Med en ryggkorg bär jag sexton saker."
- **Påminnelse:** –
- **Kvitto:** –
- **Uppläsning:** "Printa ryggkorgen på skrivaren."

### 7. Ta på ryggkorgen `ryggkorgPa`
- **Moment:** Bära och mala mer · **sak:** byggsats:ryggkorg · **bild:** byggsats:ryggkorg · **pil:** skrivare
- **Handling:** ta → kontrollhjälp *Klick*
- **Kräver:** – · **ger:** –
- **Start (sägs när steget börjar):** "Ryggkorgen är klar. På med den."
- **Påminnelse:** –
- **Kvitto:** "Nu bär jag sexton skräp."
- **Uppläsning:** "Klicka med ryggkorgen i handen."

### 8. Bygg ett arbetsbord `n2-bygg-arbetsbord`
- **Moment:** Skrivare M · **sak:** byggsats:bord · **bild:** byggsats:bord · **pil:** startYta
- **Handling:** stallNer → kontrollhjälp *Klick · Ställ ner · R vrid*
- **Kräver:** – · **ger:** –
- **Start (sägs när steget börjar):** "Ett arbetsbord bredvid skrivaren. Skrivare M ska stå på det."
- **Påminnelse:** –
- **Kvitto:** –

### 9. Bygg Skrivare M på bordet `n2-bygg-skrivare-m`
- **Moment:** Skrivare M · **sak:** byggsats:skrivare2 · **bild:** byggsats:skrivare2 · **pil:** bord
- **Handling:** stallNer → kontrollhjälp *Klick · Ställ ner · R vrid*
- **Kräver:** – · **ger:** –
- **Start (sägs när steget börjar):** "Skrivare M på bordet. Två skrivare, dubbelt så mycket."
- **Påminnelse:** –
- **Kvitto:** –

### 10. Lägg plåttak på skjulet `n2-lagg-plattak-skjulet`
- **Moment:** Taket · **sak:** byggsats:tak · **bild:** byggsats:tak · **pil:** skjul
- **Handling:** montera → kontrollhjälp *Klick · Klicka för att montera*
- **Kräver:** – · **ger:** –
- **Start (sägs när steget börjar):** "Det regnar in. Plåt på taket, så slipper jag sova i en pöl."
- **Påminnelse:** –
- **Kvitto:** –

### 11. Sov när du vill `sov3`
- **Moment:** – · **sak:** sang · **bild:** – · **pil:** skjul
- **Handling:** sov → kontrollhjälp *Klick · Sov*
- **Kräver:** – · **ger:** –
- **Start (sägs när steget börjar):** –
- **Påminnelse:** –
- **Kvitto:** –

## Dag 4 (kapitel 1)

### 1. *(beror på läget)* ' + i ? ' / ' : i ? ' / 'Kolla Rolfs postlåda vid grinden' `rolf2-brev`
- **Moment:** Rolfs brev · **sak:** brev · **bild:** – · **pil:** postlada
- **Handling:** ta → kontrollhjälp *Klick*
- **Kräver:** – · **ger:** –
- **Start (sägs när steget börjar):** "Ett nytt brev i Rolfs postlåda. Det läser jag."
- **Påminnelse:** –
- **Kvitto:** –

### 2. *(beror på läget)*  `rolf2-printa`
- **Moment:** Rolfs brev · **sak:** gava · **bild:** – · **pil:** skrivare
- **Handling:** printa → kontrollhjälp *Klick · Välj modell på skrivaren*
- **Kräver:** – · **ger:** –
- **Start (sägs när steget börjar):** "Rolf vill ha en grillspade. Den printar jag."
- **Påminnelse:** –
- **Kvitto:** –

### 3. *(beror på läget)*  `rolf2-ge`
- **Moment:** Rolfs brev · **sak:** gava · **bild:** – · **pil:** postlada
- **Handling:** lagg → kontrollhjälp *Klick*
- **Kräver:** – · **ger:** –
- **Start (sägs när steget börjar):** "Grillspaden är klar. Den lägger jag i Rolfs postlåda."
- **Påminnelse:** –
- **Kvitto:** –

### 4. Töm en full kärra i kvarnen `n3-tom-full-karra`
- **Moment:** Kärran · **sak:** karra · **bild:** karra · **pil:** kvarn
- **Handling:** lagg → kontrollhjälp *Klick*
- **Kräver:** – · **ger:** –
- **Start (sägs när steget börjar):** "Kärran rymmer massor. Jag fyller den och tippar allt i kvarnen."
- **Påminnelse:** –
- **Kvitto:** –

### 5. Bygg sophållaren `sophallare`
- **Moment:** Kärran · **sak:** byggsats:matarband · **bild:** byggsats:matarband · **pil:** kvarn
- **Handling:** montera → kontrollhjälp *Klick · Klicka för att montera*
- **Kräver:** – · **ger:** –
- **Start (sägs när steget börjar):** "En sophållare bakom kvarnen. Då matar den sig själv."
- **Påminnelse:** –
- **Kvitto:** "Nu kan jag tömma hela kärran på en gång."

### 6. Printa en pall `pall`
- **Moment:** Pallen · **sak:** pall · **bild:** pall · **pil:** skrivare
- **Handling:** printa → kontrollhjälp *Klick · Välj modell på skrivaren*
- **Kräver:** – · **ger:** –
- **Start (sägs när steget börjar):** "Jag behöver något att sitta på. En pall. Lagom ambitiöst."
- **Påminnelse:** –
- **Kvitto:** –
- **Uppläsning:** "Köp receptet till pallen hos Ali och printa en."

### 7. Bygg en vindsnurra till `vind4`
- **Moment:** Mer vind · **sak:** byggsats:vindsnurra · **bild:** byggsats:vindsnurra · **pil:** skjul
- **Handling:** montera → kontrollhjälp *Klick · Klicka för att montera*
- **Kräver:** – · **ger:** –
- **Start (sägs när steget börjar):** "En vindsnurra till på skjulets tak. Skrivarna vill ha mer ström."
- **Påminnelse:** –
- **Kvitto:** –

### 8. *(beror på läget)*  `n3-isolera-tva-vaggar`
- **Moment:** – · **sak:** byggsats:vaggar · **bild:** byggsats:vaggar · **pil:** skjul
- **Handling:** montera → kontrollhjälp *Klick · Klicka för att montera*
- **Kräver:** – · **ger:** –
- **Start (sägs när steget börjar):** "Det drar genom väggarna. Isolering, och sen blir det varmt."
- **Påminnelse:** –
- **Kvitto:** –

### 9. Sov när du vill `sov4`
- **Moment:** – · **sak:** sang · **bild:** – · **pil:** skjul
- **Handling:** sov → kontrollhjälp *Klick · Sov*
- **Kräver:** – · **ger:** –
- **Start (sägs när steget börjar):** –
- **Påminnelse:** –
- **Kvitto:** –

## Dag 5 (kapitel 1)

### 1. *(beror på läget)* ' + i ? ' / ' : i ? ' / 'Kolla Rolfs postlåda vid grinden' `rolf3-brev`
- **Moment:** Rolfs brev · **sak:** brev · **bild:** – · **pil:** postlada
- **Handling:** ta → kontrollhjälp *Klick*
- **Kräver:** – · **ger:** –
- **Start (sägs när steget börjar):** "Ett nytt brev i Rolfs postlåda. Det läser jag."
- **Påminnelse:** –
- **Kvitto:** –

### 2. *(beror på läget)*  `rolf3-printa`
- **Moment:** Rolfs brev · **sak:** gava · **bild:** – · **pil:** skrivare
- **Handling:** printa → kontrollhjälp *Klick · Välj modell på skrivaren*
- **Kräver:** – · **ger:** –
- **Start (sägs när steget börjar):** "Rolf vill ha en tomte till flaket. Den printar jag."
- **Påminnelse:** –
- **Kvitto:** –

### 3. *(beror på läget)*  `rolf3-ge`
- **Moment:** Rolfs brev · **sak:** gava · **bild:** – · **pil:** postlada
- **Handling:** lagg → kontrollhjälp *Klick*
- **Kräver:** – · **ger:** –
- **Start (sägs när steget börjar):** "Tomten är klar. Den lägger jag i Rolfs postlåda."
- **Påminnelse:** –
- **Kvitto:** –

### 4. *(beror på läget)*  `n4-isolera-de-sista`
- **Moment:** – · **sak:** byggsats:vaggar · **bild:** byggsats:vaggar · **pil:** skjul
- **Handling:** montera → kontrollhjälp *Klick · Klicka för att montera*
- **Kräver:** – · **ger:** –
- **Start (sägs när steget börjar):** "Två väggar kvar i skjulet. Sen är det tätt."
- **Påminnelse:** –
- **Kvitto:** "Det är tätt, det är varmt."

### 5. *(beror på läget)* 'Ställ datorn i skjulet' / 'Köp Alis pappas gamla dator' `dator`
- **Moment:** – · **sak:** byggsats:webbdator · **bild:** byggsats:webbdator · **pil:** ali
- **Handling:** kop → kontrollhjälp *– (hos Ali)*
- **Kräver:** – · **ger:** –
- **Start (sägs när steget börjar):** "Alis pappas dator. Med den kan jag sälja på nätet."
- **Påminnelse:** –
- **Kvitto:** –

### 6. Printa en lampskärm att sälja `lampskarm`
- **Moment:** – · **sak:** lampskarm · **bild:** lampskarm · **pil:** skrivare
- **Handling:** printa → kontrollhjälp *Klick · Välj modell på skrivaren*
- **Kräver:** – · **ger:** –
- **Start (sägs när steget börjar):** "En lampskärm. Folk betalar för ljus som ser fint ut."
- **Påminnelse:** –
- **Kvitto:** –

### 7. *(beror på läget)*  `mysigt`
- **Moment:** – · **sak:** trivsel · **bild:** beror på läget · **pil:** skjul
- **Handling:** stallNer → kontrollhjälp *Klick · Ställ ner · R vrid*
- **Kräver:** – · **ger:** –
- **Start (sägs när steget börjar):** "Skjulet ska bli mysigt på riktigt. Det är mitt hem nu."
- **Påminnelse:** –
- **Kvitto:** –

### 8. Sätt en tredje vindsnurra på taket `vind5`
- **Moment:** Mer vind · **sak:** byggsats:vindsnurra · **bild:** byggsats:vindsnurra · **pil:** skjul
- **Handling:** montera → kontrollhjälp *Klick · Klicka för att montera*
- **Kräver:** – · **ger:** –
- **Start (sägs när steget börjar):** "En tredje vindsnurra på taket. Skrivare M drar mycket."
- **Påminnelse:** –
- **Kvitto:** –

### 9. Sov när du vill `sov5`
- **Moment:** – · **sak:** sang · **bild:** – · **pil:** skjul
- **Handling:** sov → kontrollhjälp *Klick · Sov*
- **Kräver:** – · **ger:** –
- **Start (sägs när steget börjar):** –
- **Påminnelse:** –
- **Kvitto:** –

## Dag 6 (kapitel 2)

### 1. *(beror på läget)* 'vantar' / 'kommer' / 'Hälsa på pappa vid grinden' / 'Prata med pappa' / 'Pappa kommer förbi idag' `pappa6`
- **Moment:** – · **sak:** pappa · **bild:** – · **pil:** gard
- **Handling:** ga → kontrollhjälp *W A S D*
- **Kräver:** – · **ger:** –
- **Start (sägs när steget börjar):** "Pappa kommer förbi i dag. Jag möter honom vid grinden."
- **Påminnelse:** –
- **Kvitto:** –

### 2. *(beror på läget)* 'Ställ den röda kvarnen i röda linjen' / 'Köp den röda kvarnen hos Ali' `r6-kop-roda-kvarnen`
- **Moment:** – · **sak:** byggsats:petgkvarn · **bild:** byggsats:petgkvarn · **pil:** ali
- **Handling:** kop → kontrollhjälp *– (hos Ali)*
- **Kräver:** – · **ger:** –
- **Start (sägs när steget börjar):** "Tunnorna är röd plast. Bra plast. Den behöver en egen kvarn."
- **Påminnelse:** –
- **Kvitto:** –

### 3. Mal en tunna i röda kvarnen `r6-mal-tunna-roda`
- **Moment:** – · **sak:** sackkarra · **bild:** sackkarra · **pil:** kvarn
- **Handling:** lagg → kontrollhjälp *Klick*
- **Kräver:** – · **ger:** –
- **Start (sägs när steget börjar):** "Den röda kvarnen står. Nu kör jag dit en tunna med kärran."
- **Påminnelse:** –
- **Kvitto:** –

### 4. Sätt en solpanel på skjulets tak `sol6`
- **Moment:** – · **sak:** byggsats:sol · **bild:** byggsats:sol · **pil:** skjul
- **Handling:** montera → kontrollhjälp *Klick · Klicka för att montera*
- **Kräver:** – · **ger:** –
- **Start (sägs när steget börjar):** "Trampandet räcker inte till två skrivare. En solpanel ska upp på skjulets tak."
- **Påminnelse:** –
- **Kvitto:** "Den röda kvarnen drar mer än vinden orkar. Solen får hjälpa till."

### 5. Ge Göran ett eget ställe `goran6`
- **Moment:** – · **sak:** fagelskramma · **bild:** beror på läget · **pil:** gard
- **Handling:** stallNer → kontrollhjälp *Klick · Ställ ner · R vrid*
- **Kräver:** – · **ger:** –
- **Start (sägs när steget börjar):** "Göran snor mina nyckelringar. Han får ett eget ställe, så lämnar han dem i fred."
- **Påminnelse:** –
- **Kvitto:** "Göran har ett hem nu. Bättre än jag hade för en vecka sen."

### 6. Sov när du vill `sov6`
- **Moment:** – · **sak:** sang · **bild:** – · **pil:** skjul
- **Handling:** sov → kontrollhjälp *Klick · Sov*
- **Kräver:** – · **ger:** –
- **Start (sägs när steget börjar):** –
- **Påminnelse:** –
- **Kvitto:** –

## Dag 7 (kapitel 2)

### 1. Bygg PETG-skrivaren `r7-bygg-petg-skrivaren`
- **Moment:** – · **sak:** byggsats:skrivarepetg · **bild:** byggsats:skrivarepetg · **pil:** startYta
- **Handling:** stallNer → kontrollhjälp *Klick · Ställ ner · R vrid*
- **Kräver:** – · **ger:** –
- **Start (sägs när steget börjar):** "Röd plast kräver en egen skrivare. Den vanliga vill inte."
- **Påminnelse:** –
- **Kvitto:** –

### 2. Printa en designvas i röd PETG `r7-printa-designvas-rod`
- **Moment:** – · **sak:** n2_vas · **bild:** n2_vas · **pil:** skrivare
- **Handling:** printa → kontrollhjälp *Klick · Välj modell på skrivaren*
- **Kräver:** – · **ger:** –
- **Start (sägs när steget börjar):** "En vas. Röd. Design. Ali kommer att låtsas att han förstår den."
- **Påminnelse:** –
- **Kvitto:** –

### 3. Sälj designvasen `r7-salj-designvasen`
- **Moment:** – · **sak:** n2_vas · **bild:** n2_vas · **pil:** ali
- **Handling:** salj → kontrollhjälp *– (hos Ali)*
- **Kräver:** – · **ger:** –
- **Start (sägs när steget börjar):** "Vasen till Ali. Han betalar mer för röd."
- **Påminnelse:** –
- **Kvitto:** –

### 4. Bygg säljlådan vid samlingsplatsen `saljlada`
- **Moment:** – · **sak:** byggsats:saljlada · **bild:** byggsats:saljlada · **pil:** gard
- **Handling:** stallNer → kontrollhjälp *Klick · Ställ ner · R vrid*
- **Kräver:** – · **ger:** –
- **Start (sägs när steget börjar):** "En säljlåda. Då slipper jag springa till Ali med varje vas."
- **Påminnelse:** –
- **Kvitto:** "Jag hämtar varje morgon. Du lägger i, jag betalar."

### 5. *(beror på läget)*  `saljlada3`
- **Moment:** – · **sak:** n2_vas · **bild:** n2_vas · **pil:** gard
- **Handling:** salj → kontrollhjälp *– (hos Ali)*
- **Kräver:** – · **ger:** –
- **Start (sägs när steget börjar):** "Vaserna i lådan. Ali hämtar själv."
- **Påminnelse:** –
- **Kvitto:** –

### 6. Sov när du vill `sov7`
- **Moment:** – · **sak:** sang · **bild:** – · **pil:** skjul
- **Handling:** sov → kontrollhjälp *Klick · Sov*
- **Kräver:** – · **ger:** –
- **Start (sägs när steget börjar):** –
- **Påminnelse:** –
- **Kvitto:** –

## Dag 8 (kapitel 2)

### 1. Bygg Skrivare L `r8-bygg-skrivare-l`
- **Moment:** – · **sak:** byggsats:skrivare3 · **bild:** byggsats:skrivare3 · **pil:** startYta
- **Handling:** stallNer → kontrollhjälp *Klick · Ställ ner · R vrid*
- **Kräver:** – · **ger:** –
- **Start (sägs när steget börjar):** "Skrivarna hinner inte med kvarnen. Jag bygger Skrivare L."
- **Påminnelse:** –
- **Kvitto:** –

### 2. Bygg magnetpistolen `r8-bygg-magnetpistolen`
- **Moment:** – · **sak:** byggsats:magnet · **bild:** byggsats:magnet · **pil:** skrivare
- **Handling:** ta → kontrollhjälp *Klick*
- **Kräver:** – · **ger:** –
- **Start (sägs när steget börjar):** "Gripen tar en sak i taget. En magnetpistol tar fler. Den bygger jag."
- **Påminnelse:** –
- **Kvitto:** –

### 3. *(beror på läget)*  `r8-mal-tunga-saker`
- **Moment:** – · **sak:** magnet · **bild:** – · **pil:** kvarn
- **Handling:** lagg → kontrollhjälp *Klick*
- **Kräver:** – · **ger:** –
- **Start (sägs när steget börjar):** "Mer tungt i den röda kvarnen. Magneten tar tunnorna."
- **Påminnelse:** –
- **Kvitto:** –

### 4. Bygg en batteribank `r8-bygg-batteribank`
- **Moment:** – · **sak:** byggsats:bank · **bild:** byggsats:bank · **pil:** startYta
- **Handling:** stallNer → kontrollhjälp *Klick · Ställ ner · R vrid*
- **Kräver:** – · **ger:** –
- **Start (sägs när steget börjar):** "Strömmen tar slut på natten. Jag bygger en batteribank."
- **Påminnelse:** –
- **Kvitto:** –

### 5. Bygg hyllan `hylla8`
- **Moment:** – · **sak:** byggsats:hylla · **bild:** byggsats:hylla · **pil:** skjul
- **Handling:** montera → kontrollhjälp *Klick · Klicka för att montera*
- **Kräver:** – · **ger:** –
- **Start (sägs när steget börjar):** "Allt ligger på golvet. Jag bygger en hylla."
- **Påminnelse:** –
- **Kvitto:** "En hylla. Jag har en hylla. Saker har en plats nu."

### 6. Sov när du vill `sov8`
- **Moment:** – · **sak:** sang · **bild:** – · **pil:** skjul
- **Handling:** sov → kontrollhjälp *Klick · Sov*
- **Kräver:** – · **ger:** –
- **Start (sägs när steget börjar):** –
- **Påminnelse:** –
- **Kvitto:** –

## Dag 9 (kapitel 2)

### 1. Köp receptet på cykelhjälmen hos Ali `r9-kop-receptet-cykelhjalmen`
- **Moment:** – · **sak:** n2_hjalm · **bild:** n2_hjalm · **pil:** ali
- **Handling:** kop → kontrollhjälp *– (hos Ali)*
- **Kräver:** – · **ger:** –
- **Start (sägs när steget börjar):** "Cykelhjälmar i röd plast. Säljer bra, säger Ali."
- **Påminnelse:** –
- **Kvitto:** –

### 2. Bygg en solcellspark `r9-bygg-solcellspark`
- **Moment:** – · **sak:** byggsats:solpark · **bild:** byggsats:solpark · **pil:** gard
- **Handling:** stallNer → kontrollhjälp *Klick · Ställ ner · R vrid*
- **Kräver:** – · **ger:** –
- **Start (sägs när steget börjar):** "Batterierna räcker inte. Jag bygger en solcellspark."
- **Påminnelse:** –
- **Kvitto:** –

### 3. *(beror på läget)*  `paket9`
- **Moment:** – · **sak:** paket · **bild:** paket · **pil:** skjul
- **Handling:** salj → kontrollhjälp *– (hos Ali)*
- **Kräver:** – · **ger:** –
- **Start (sägs när steget börjar):** "Det har kommit beställningar. Paketen ska iväg från datorn."
- **Påminnelse:** –
- **Kvitto:** –

### 4. Bygg Rulltorn XL vid röda kvarnen `petgtorn9`
- **Moment:** – · **sak:** byggsats:petgtorn · **bild:** byggsats:petgtorn · **pil:** kvarn
- **Handling:** montera → kontrollhjälp *Klick · Klicka för att montera*
- **Kräver:** – · **ger:** –
- **Start (sägs när steget börjar):** "Den röda kvarnen står och väntar på plats för rullarna. Ett större torn."
- **Påminnelse:** –
- **Kvitto:** –

### 5. Sov när du vill `sov9`
- **Moment:** – · **sak:** sang · **bild:** – · **pil:** skjul
- **Handling:** sov → kontrollhjälp *Klick · Sov*
- **Kräver:** – · **ger:** –
- **Start (sägs när steget börjar):** –
- **Påminnelse:** –
- **Kvitto:** –

## Dag 10 (kapitel 2)

### 1. *(beror på läget)*  `tapeter`
- **Moment:** – · **sak:** byggsats:tapeter · **bild:** byggsats:tapeter · **pil:** skjul
- **Handling:** montera → kontrollhjälp *Klick · Klicka för att montera*
- **Kräver:** – · **ger:** –
- **Start (sägs när steget börjar):** "Skjulet ska kännas som ett rum. Tapeter."
- **Påminnelse:** –
- **Kvitto:** –

### 2. Gör skjulet varmt inför kylan `r10-gor-skjulet-varmt`
- **Moment:** – · **sak:** varme · **bild:** – · **pil:** skjul
- **Handling:** montera → kontrollhjälp *Klick · Klicka för att montera*
- **Kräver:** – · **ger:** –
- **Start (sägs när steget börjar):** "Nätterna blir kallare. Tak, dörr och väggar, så klarar jag det."
- **Påminnelse:** –
- **Kvitto:** –

### 3. Bygg spisen och laga en varm måltid `spis10`
- **Moment:** – · **sak:** byggsats:spis · **bild:** beror på läget · **pil:** skjul
- **Handling:** montera → kontrollhjälp *Klick · Klicka för att montera*
- **Kräver:** – · **ger:** –
- **Start (sägs när steget börjar):** "Jag behöver äta något varmt. Först bygger jag en spis."
- **Påminnelse:** –
- **Kvitto:** "Varm mat. I skjulet. Mamma skulle inte tro det."

### 4. Sov när du vill `sov10`
- **Moment:** – · **sak:** sang · **bild:** – · **pil:** skjul
- **Handling:** sov → kontrollhjälp *Klick · Sov*
- **Kräver:** – · **ger:** –
- **Start (sägs när steget börjar):** –
- **Påminnelse:** –
- **Kvitto:** –

## Dag 11 (kapitel 3)

### 1. Bygg kolfiberkvarnen i linje 3 `kolfkvarn`
- **Moment:** – · **sak:** byggsats:kolfkvarn · **bild:** byggsats:kolfkvarn · **pil:** startYta
- **Handling:** stallNer → kontrollhjälp *Klick · Ställ ner · R vrid*
- **Kräver:** – · **ger:** –
- **Start (sägs när steget börjar):** "Kajakerna på tippen är kolfiber. Det behövs en kvarn som tål det."
- **Påminnelse:** –
- **Kvitto:** –

### 2. Bygg rullbandet från tippen `kolfband`
- **Moment:** – · **sak:** byggsats:kolfband · **bild:** byggsats:kolfband · **pil:** tippen
- **Handling:** montera → kontrollhjälp *Klick · Klicka för att montera*
- **Kräver:** – · **ger:** –
- **Start (sägs när steget börjar):** "Kajakerna är för stora att bära. Ett band från tippen."
- **Påminnelse:** –
- **Kvitto:** –

### 3. *(beror på läget)*  `kajak3`
- **Moment:** – · **sak:** kajak · **bild:** – · **pil:** tippen
- **Handling:** lagg → kontrollhjälp *Klick*
- **Kräver:** – · **ger:** –
- **Start (sägs när steget börjar):** "Bandet går. Nu ska kajakerna upp på det."
- **Påminnelse:** –
- **Kvitto:** –

### 4. *(beror på läget)*  `kolfrulle`
- **Moment:** – · **sak:** rulle3 · **bild:** rulle3 · **pil:** kvarn
- **Handling:** veva → kontrollhjälp *Klicka och håll · Veva kvarnen*
- **Kräver:** – · **ger:** –
- **Start (sägs när steget börjar):** "Kvarnen mal. Svartgrått. Det tar sin tid."
- **Påminnelse:** –
- **Kvitto:** –

### 5. Sov när du vill `sov11`
- **Moment:** – · **sak:** sang · **bild:** – · **pil:** skjul
- **Handling:** sov → kontrollhjälp *Klick · Sov*
- **Kräver:** – · **ger:** –
- **Start (sägs när steget börjar):** –
- **Påminnelse:** –
- **Kvitto:** –

## Dag 12 (kapitel 3)

### 1. Bygg kolfiberskrivaren i linje 3 `kolfskrivare`
- **Moment:** – · **sak:** byggsats:kolfskrivare · **bild:** byggsats:kolfskrivare · **pil:** startYta
- **Handling:** stallNer → kontrollhjälp *Klick · Ställ ner · R vrid*
- **Kräver:** – · **ger:** –
- **Start (sägs när steget börjar):** "Kolfibern behöver en egen skrivare. Den bygger jag bredvid kolfiberkvarnen."
- **Påminnelse:** –
- **Kvitto:** –

### 2. Bygg slangfördelaren `kolfslang`
- **Moment:** – · **sak:** byggsats:kolfslang · **bild:** byggsats:kolfslang · **pil:** kvarn
- **Handling:** montera → kontrollhjälp *Klick · Klicka för att montera*
- **Kräver:** – · **ger:** –
- **Start (sägs när steget börjar):** "Rullarna ska fram till skrivaren utan mig. En slang."
- **Påminnelse:** –
- **Kvitto:** –

### 3. Printa en kolfiberstol `kolfstol`
- **Moment:** – · **sak:** n3_stol · **bild:** n3_stol · **pil:** skrivare
- **Handling:** printa → kontrollhjälp *Klick · Välj modell på skrivaren*
- **Kräver:** – · **ger:** –
- **Start (sägs när steget börjar):** "En kolfiberstol. Lätt som en fjäder, hård som Rolf."
- **Påminnelse:** –
- **Kvitto:** –

### 4. Bygg en batteribank till `f12-batteribank2`
- **Moment:** – · **sak:** byggsats:bank · **bild:** byggsats:bank · **pil:** startYta
- **Handling:** stallNer → kontrollhjälp *Klick · Ställ ner · R vrid*
- **Kräver:** – · **ger:** –
- **Start (sägs när steget börjar):** "Kolfibern drar mycket ström. Jag bygger en batteribank till."
- **Påminnelse:** –
- **Kvitto:** –

### 5. Sov när du vill `sov12`
- **Moment:** – · **sak:** sang · **bild:** – · **pil:** skjul
- **Handling:** sov → kontrollhjälp *Klick · Sov*
- **Kräver:** – · **ger:** –
- **Start (sägs när steget börjar):** –
- **Påminnelse:** –
- **Kvitto:** –

## Dag 13 (kapitel 3)

### 1. Bygg gamingboden `f13-bygg-gamingboden`
- **Moment:** – · **sak:** byggsats:gamingbod · **bild:** byggsats:gamingbod · **pil:** gard
- **Handling:** stallNer → kontrollhjälp *Klick · Ställ ner · R vrid*
- **Kräver:** – · **ger:** –
- **Start (sägs när steget börjar):** "En bod för spel. Jag förtjänar det."
- **Påminnelse:** –
- **Kvitto:** –

### 2. Ställ in en gamersak i boden `f13-stall-in-gamersak`
- **Moment:** – · **sak:** gamer · **bild:** beror på läget · **pil:** gard
- **Handling:** stallNer → kontrollhjälp *Klick · Ställ ner · R vrid*
- **Kräver:** – · **ger:** –
- **Start (sägs när steget börjar):** "Boden är tom. Något att spela på."
- **Påminnelse:** –
- **Kvitto:** –

### 3. Sov när du vill `sov13`
- **Moment:** – · **sak:** sang · **bild:** – · **pil:** skjul
- **Handling:** sov → kontrollhjälp *Klick · Sov*
- **Kräver:** – · **ger:** –
- **Start (sägs när steget börjar):** –
- **Påminnelse:** –
- **Kvitto:** –

## Dag 14 (kapitel 3)

### 1. Montera jetmotorn på kolfiberkvarnen `jet14`
- **Moment:** – · **sak:** byggsats:jetmotor · **bild:** byggsats:jetmotor · **pil:** kvarn
- **Handling:** montera → kontrollhjälp *Klick · Klicka för att montera*
- **Kräver:** – · **ger:** –
- **Start (sägs när steget börjar):** "Jetmotorn ska sitta på kolfiberkvarnen. Vad kan gå fel."
- **Påminnelse:** –
- **Kvitto:** –

### 2. Bygg leveranslådan `f14-bygg-leveransladan`
- **Moment:** – · **sak:** byggsats:utlada · **bild:** byggsats:utlada · **pil:** gard
- **Handling:** montera → kontrollhjälp *Klick · Klicka för att montera*
- **Kräver:** – · **ger:** –
- **Start (sägs när steget börjar):** "En leveranslåda. Då säljer fabriken själv."
- **Påminnelse:** –
- **Kvitto:** –

### 3. Köp mutor till Rolf hos Ali `f14-kop-mutor-rolf`
- **Moment:** – · **sak:** trim:sopbil · **bild:** – · **pil:** ali
- **Handling:** kop → kontrollhjälp *– (hos Ali)*
- **Kräver:** – · **ger:** –
- **Start (sägs när steget börjar):** "Rolf tippar mer om han får bullar. Ali har bullar."
- **Påminnelse:** –
- **Kvitto:** –

### 4. Sov när du vill `sov14`
- **Moment:** – · **sak:** sang · **bild:** – · **pil:** skjul
- **Handling:** sov → kontrollhjälp *Klick · Sov*
- **Kräver:** – · **ger:** –
- **Start (sägs när steget börjar):** –
- **Påminnelse:** –
- **Kvitto:** –

## Dag 15 (kapitel 3)

### 1. Bygg gamingboden `f15-bygg-gamingboden`
- **Moment:** – · **sak:** byggsats:gamingbod · **bild:** byggsats:gamingbod · **pil:** gard
- **Handling:** stallNer → kontrollhjälp *Klick · Ställ ner · R vrid*
- **Kräver:** – · **ger:** –
- **Start (sägs när steget börjar):** "En bod för spel. Jag förtjänar det."
- **Påminnelse:** –
- **Kvitto:** –

### 2. *(beror på läget)*  `gamer`
- **Moment:** – · **sak:** gamer · **bild:** beror på läget · **pil:** gard
- **Handling:** stallNer → kontrollhjälp *Klick · Ställ ner · R vrid*
- **Kräver:** – · **ger:** –
- **Start (sägs när steget börjar):** "Boden ska vara full. Tre saker."
- **Påminnelse:** –
- **Kvitto:** –

### 3. Printa en jacuzzi `f15-printa-stall-ut`
- **Moment:** – · **sak:** jacuzzi · **bild:** jacuzzi · **pil:** skrivare
- **Handling:** printa → kontrollhjälp *Klick · Välj modell på skrivaren*
- **Kräver:** – · **ger:** –
- **Start (sägs när steget börjar):** "En jacuzzi. På en soptipp. Varför inte."
- **Påminnelse:** –
- **Kvitto:** –

### 4. Ställ ut jacuzzin `f15-stall-ut`
- **Moment:** – · **sak:** jacuzzi · **bild:** jacuzzi · **pil:** gard
- **Handling:** stallNer → kontrollhjälp *Klick · Ställ ner · R vrid*
- **Kräver:** – · **ger:** –
- **Start (sägs när steget börjar):** "Jacuzzin är klar. Den ställer jag ut på gården."
- **Påminnelse:** –
- **Kvitto:** –

### 5. *(beror på läget)*  `f15-varldens-basta-fristad`
- **Moment:** – · **sak:** trivsel · **bild:** beror på läget · **pil:** gard
- **Handling:** stallNer → kontrollhjälp *Klick · Ställ ner · R vrid*
- **Kräver:** – · **ger:** –
- **Start (sägs när steget börjar):** "Allt är på plats. Nu gör jag det riktigt mysigt här."
- **Påminnelse:** –
- **Kvitto:** –

### 6. Sov när du vill `sov15`
- **Moment:** – · **sak:** sang · **bild:** – · **pil:** skjul
- **Handling:** sov → kontrollhjälp *Klick · Sov*
- **Kräver:** – · **ger:** –
- **Start (sägs när steget börjar):** –
- **Påminnelse:** –
- **Kvitto:** –

## Dag 16 (kapitel 4)

### 1. Köp tomten du bor på `m16-kop-tomten-bor`
- **Moment:** – · **sak:** mark:egen · **bild:** – · **pil:** gard
- **Handling:** kop → kontrollhjälp *– (hos Ali)*
- **Kräver:** – · **ger:** –
- **Start (sägs när steget börjar):** "Kommunen säljer tomten vid tippen. Ingen annan ville ha den."
- **Påminnelse:** –
- **Kvitto:** –

### 2. Lägg flagan i Bengt-Åkes postlåda `m16-lagg-flagan-bengt`
- **Moment:** – · **sak:** guldflaga · **bild:** guldflaga · **pil:** bengtLada
- **Handling:** lagg → kontrollhjälp *Klick*
- **Kräver:** – · **ger:** –
- **Start (sägs när steget börjar):** "Grannen är arg. Flagan lägger jag i Bengt-Åkes postlåda."
- **Påminnelse:** –
- **Kvitto:** –

### 3. Ge Rolf en kapskiva i kolfiber `m16-ge-rolf-kapskiva`
- **Moment:** – · **sak:** kapskiva · **bild:** kapskiva · **pil:** postlada
- **Handling:** lagg → kontrollhjälp *Klick*
- **Kräver:** – · **ger:** –
- **Start (sägs när steget börjar):** "Rolf har hjälpt mig. Han ska få en kapskiva i kolfiber."
- **Påminnelse:** –
- **Kvitto:** –

### 4. Sov när du vill `sov16`
- **Moment:** – · **sak:** sang · **bild:** – · **pil:** skjul
- **Handling:** sov → kontrollhjälp *Klick · Sov*
- **Kräver:** – · **ger:** –
- **Start (sägs när steget börjar):** –
- **Påminnelse:** –
- **Kvitto:** –

## Dag 17 (kapitel 4)

### 1. Köp ängen i öster – tavlan vid vägen `m17-kop-angen-oster`
- **Moment:** – · **sak:** mark:oster · **bild:** – · **pil:** gard
- **Handling:** kop → kontrollhjälp *– (hos Ali)*
- **Kräver:** – · **ger:** –
- **Start (sägs när steget börjar):** "Kolfiber. Det säljer. Och ängen bredvid är till salu."
- **Påminnelse:** –
- **Kvitto:** –

### 2. Vaska guld i floden `m17-vaska-guld-floden`
- **Moment:** – · **sak:** vaskpanna · **bild:** vaskpanna · **pil:** gard
- **Handling:** ta → kontrollhjälp *Klick*
- **Kräver:** – · **ger:** –
- **Start (sägs när steget börjar):** "Huset kostar mer än jag har. Jag vaskar guld i floden."
- **Påminnelse:** –
- **Kvitto:** –

### 3. Bygg en solcellspark på ängen `m17-solpark2`
- **Moment:** – · **sak:** byggsats:solpark · **bild:** byggsats:solpark · **pil:** gard
- **Handling:** stallNer → kontrollhjälp *Klick · Ställ ner · R vrid*
- **Kräver:** – · **ger:** –
- **Start (sägs när steget börjar):** "Ett hus drar mer ström. Jag bygger en solcellspark på ängen."
- **Påminnelse:** –
- **Kvitto:** –

### 4. Sov när du vill `sov17`
- **Moment:** – · **sak:** sang · **bild:** – · **pil:** skjul
- **Handling:** sov → kontrollhjälp *Klick · Sov*
- **Kräver:** – · **ger:** –
- **Start (sägs när steget börjar):** –
- **Påminnelse:** –
- **Kvitto:** –

## Dag 18 (kapitel 4)

### 1. Bygg diamantkvarnen `m18-bygg-diamantkvarnen`
- **Moment:** – · **sak:** byggsats:diamantkniv · **bild:** byggsats:diamantkniv · **pil:** kvarn
- **Handling:** montera → kontrollhjälp *Klick · Klicka för att montera*
- **Kräver:** – · **ger:** –
- **Start (sägs när steget börjar):** "Guld. Ingen kvarn jag har klarar det."
- **Påminnelse:** –
- **Kvitto:** –

### 2. Mal en rulle guld `m18-mal-rulle-guld`
- **Moment:** – · **sak:** fynd4 · **bild:** fynd4 · **pil:** kvarn
- **Handling:** lagg → kontrollhjälp *Klick*
- **Kräver:** – · **ger:** –
- **Start (sägs när steget börjar):** "Diamantkvarnen står. Nu mal jag guldet till en rulle."
- **Påminnelse:** –
- **Kvitto:** –

### 3. Gjut grunden till huset `m18-gjut-grunden-huset`
- **Moment:** – · **sak:** mark:husgrund · **bild:** – · **pil:** gard
- **Handling:** kop → kontrollhjälp *– (hos Ali)*
- **Kräver:** – · **ger:** –
- **Start (sägs när steget börjar):** "Guldet betalar grunden. Den gjuter jag nu."
- **Påminnelse:** –
- **Kvitto:** –

### 4. Sov när du vill `sov18`
- **Moment:** – · **sak:** sang · **bild:** – · **pil:** skjul
- **Handling:** sov → kontrollhjälp *Klick · Sov*
- **Kräver:** – · **ger:** –
- **Start (sägs när steget börjar):** –
- **Påminnelse:** –
- **Kvitto:** –

## Dag 19 (kapitel 4)

### 1. Bygg huset på grunden `m19-bygg-huset-grunden`
- **Moment:** – · **sak:** mark:huset · **bild:** – · **pil:** gard
- **Handling:** kop → kontrollhjälp *– (hos Ali)*
- **Kräver:** – · **ger:** –
- **Start (sägs när steget börjar):** "Ett riktigt hus. På riktigt."
- **Påminnelse:** –
- **Kvitto:** –

### 2. Bygg vindkraftverket på backen `m19-vindkraft`
- **Moment:** – · **sak:** byggsats:vindkraft · **bild:** byggsats:vindkraft · **pil:** gard
- **Handling:** stallNer → kontrollhjälp *Klick · Ställ ner · R vrid*
- **Kräver:** – · **ger:** –
- **Start (sägs när steget börjar):** "Huset drar mer än solen ger. Ett vindkraftverk ska upp på backen."
- **Påminnelse:** –
- **Kvitto:** –

### 3. Bygg guldskrivaren i linje 4 `m19-guldskrivare`
- **Moment:** – · **sak:** byggsats:guldskrivare · **bild:** byggsats:guldskrivare · **pil:** startYta
- **Handling:** stallNer → kontrollhjälp *Klick · Ställ ner · R vrid*
- **Kräver:** – · **ger:** –
- **Start (sägs när steget börjar):** "Guldet behöver en egen skrivare. Den bygger jag."
- **Påminnelse:** –
- **Kvitto:** –

### 4. Flytta in i huset `m19-flytta-in-huset`
- **Moment:** – · **sak:** huset · **bild:** – · **pil:** gard
- **Handling:** ga → kontrollhjälp *W A S D*
- **Kräver:** – · **ger:** –
- **Start (sägs när steget börjar):** "Huset står. Nu flyttar jag in."
- **Påminnelse:** –
- **Kvitto:** –

### 5. Sov när du vill `sov19`
- **Moment:** – · **sak:** sang · **bild:** – · **pil:** skjul
- **Handling:** sov → kontrollhjälp *Klick · Sov*
- **Kräver:** – · **ger:** –
- **Start (sägs när steget börjar):** –
- **Påminnelse:** –
- **Kvitto:** –

## Dag 20 (kapitel 4)

### 1. Printa en vedkamin `m20-printa-stall-ut`
- **Moment:** – · **sak:** kamin · **bild:** kamin · **pil:** skrivare
- **Handling:** printa → kontrollhjälp *Klick · Välj modell på skrivaren*
- **Kräver:** – · **ger:** –
- **Start (sägs när steget börjar):** "Minus fjorton. Skjulet var en sak. Huset ska vara varmt."
- **Påminnelse:** –
- **Kvitto:** –

### 2. Ställ in en kamin i skjulet `m20-stall-in-kamin`
- **Moment:** – · **sak:** kamin · **bild:** – · **pil:** skjul
- **Handling:** stallNer → kontrollhjälp *Klick · Ställ ner · R vrid*
- **Kräver:** – · **ger:** –
- **Start (sägs när steget börjar):** "Kaminen är klar. Den ställer jag in i skjulet."
- **Påminnelse:** –
- **Kvitto:** –

### 3. Sov när du vill `sov20`
- **Moment:** – · **sak:** sang · **bild:** – · **pil:** skjul
- **Handling:** sov → kontrollhjälp *Klick · Sov*
- **Kräver:** – · **ger:** –
- **Start (sägs när steget börjar):** –
- **Påminnelse:** –
- **Kvitto:** –

## Dag 21 (kapitel 4)

### 1. Bli folkbokförd – tavlan vid vägen `m21-bli-folkbokford`
- **Moment:** – · **sak:** folkbok · **bild:** – · **pil:** gard
- **Handling:** ga → kontrollhjälp *W A S D*
- **Kräver:** – · **ger:** –
- **Start (sägs när steget börjar):** "Hus, mark, adress. Det är dags."
- **Påminnelse:** –
- **Kvitto:** –

### 2. Sov när du vill `sov21`
- **Moment:** – · **sak:** sang · **bild:** – · **pil:** skjul
- **Handling:** sov → kontrollhjälp *Klick · Sov*
- **Kräver:** – · **ger:** –
- **Start (sägs när steget börjar):** –
- **Påminnelse:** –
- **Kvitto:** –

## Dag 22 (kapitel 4)

### 1. Julafton `m22-printa-julbordet`
- **Moment:** – · **sak:** julbord · **bild:** julbord · **pil:** skjul
- **Handling:** ga → kontrollhjälp *W A S D*
- **Kräver:** – · **ger:** –
- **Start (sägs när steget börjar):** "Det är julafton. Allt ska vara klart när mamma kommer."
- **Påminnelse:** –
- **Kvitto:** –

### 2. Skylten med mitt namn på dörren `m22-tand-skylten`
- **Moment:** – · **sak:** dorrskylt · **bild:** – · **pil:** skjul
- **Handling:** montera → kontrollhjälp *Klick · Klicka för att montera*
- **Kräver:** – · **ger:** –
- **Start (sägs när steget börjar):** "Mamma kommer klockan tre. Skylten med mitt namn ska upp på dörren."
- **Påminnelse:** –
- **Kvitto:** –

### 3. Ta emot mamma `m22-oppna-dorren-gasterna`
- **Moment:** – · **sak:** mamma · **bild:** – · **pil:** gard
- **Handling:** ga → kontrollhjälp *W A S D*
- **Kräver:** – · **ger:** –
- **Start (sägs när steget börjar):** "Skylten sitter. Nu tar jag emot mamma vid dörren."
- **Påminnelse:** –
- **Kvitto:** –
