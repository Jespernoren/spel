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
- **Start (sägs när steget börjar):** "Skrivaren behöver ström. Hur fixar jag det här ute?"
- **Påminnelse:** "Ström. Hur får jag ström här ute?"
- **Kvitto:** –

### 5. *(beror på läget)* 'Montera generatorn' / 'Ställ cykel och generator' `bygg`
- **Moment:** Få ström · **sak:** cykelS · **bild:** beror på läget · **pil:** startYta
- **Handling:** stallNer → kontrollhjälp *Klick · Ställ ner · R vrid*
- **Kräver:** stromIdee, generatorIRaden · **ger:** cykelOmbyggd
- **Start (sägs när steget börjar):** *(beror på läget)* 'Nu generatorn på cykeln. Den gör el när hjulet snurrar.' / 'Cykeln… och storebrors generator?'
  - i läget **handen:** "Cykeln ska stå vid skrivaren."
  - i läget **stalld:** "Nu generatorn på cykeln. Den gör el när hjulet snurrar."
- **Påminnelse:** *(beror på läget)* 'Generatorn på cykeln.' / 'Cykeln, sen generatorn.'
- **Kvitto:** –
- **Uppläsning:** "Ställ cykeln och generatorn vid skrivaren."

### 6. Välj vad skrivaren ska printa `valjModell`
- **Moment:** Första printen · **sak:** skrivareS · **bild:** skrivareS · **pil:** skrivare
- **Handling:** valj → kontrollhjälp *Klick · Välj modell på skrivaren*
- **Kräver:** cykelOmbyggd, brorsRulle · **ger:** printJobb
- **Start (sägs när steget börjar):** "Strömmen finns. Nu ska skrivaren veta vad den ska göra, sen trampar jag."
- **Påminnelse:** "Klicka på skrivaren och välj nyckelringen."
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
  - **bror** (sms, en gång): "Sälj den till Ali, han med affären mitt emot. Han köper gamla grejer. Han köpte min gamla mopedhjälm för 20 spänn." · *svarar på* dialog:brorSms1 · *ger* hortAli
- **Uppläsning:** "Printa en nyckelring till."

### 9. Sälj nyckelringarna `saljTva`
- **Moment:** Gör egen tråd · **sak:** nyckelring · **bild:** nyckelring · **pil:** ali
- **Handling:** salj → kontrollhjälp *– (hos Ali)*
- **Kräver:** rullSlut · **ger:** kvarnPengar
- **Start (sägs när steget börjar):** –
- **Påminnelse:** "Affären mitt emot kanske köper ringarna."
- **Kvitto:** –
- **Dialog** (inkorg 61):
  - **ali** (butik, en gång): "Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar." · *svarar på* oppnatButik · *ger* kandAli
  - **ali** (butik, en gång): *(beror på läget)*  · *svarar på* salt:nyckelring · *vet* kandAli · *ger* aliHarKvarn
- **Uppläsning:** "Sälj nyckelringarna hos Ali."

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

### 16. *(beror på läget)* 'Köp skräpgripen' / 'Spara till gripen' `kopGrip`
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
- **Uppläsning:** "Köp en skräpgrip hos Ali. Den kostar femtio kronor." (utan pengar: "Printa och sälj nyckelringar tills du har femtio kronor till gripen.")

### 17. *(beror på läget)* 'byggsats:grip' / 'Ta ut gripen' / 'Printa skräpgripen' `printGrip`
- **Moment:** Sova · **sak:** byggsats:grip · **bild:** – · **pil:** skrivare
- **Handling:** printa → kontrollhjälp *Klick · Välj modell på skrivaren*
- **Kräver:** gripRitning · **ger:** grip
- **Start (sägs när steget börjar):** –
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

### 20. *(beror på läget)* 'Köp sängen' / 'Spara till sängen' `kopSang`
- **Moment:** Sova · **sak:** sang · **bild:** sang · **pil:** ali
- **Handling:** kop → kontrollhjälp *– (hos Ali)*
- **Kräver:** krukaSald · **ger:** sangRitning
- **Start (sägs när steget börjar):** "Jag tänker inte sova på betongen i natt. Ali har en säng. Typ."
  - medan steget pågår (morkt): "Det börjar bli mörkt. Jag kan inte sova på jorden."
- **Påminnelse:** "En säng. Jag behöver pengar till den."
- **Kvitto:** –
- **Dialog** (inkorg 61):
  - **ali** (butik, en gång): "Sov gott, min vän." · *svarar på* kopt:sang
- **Uppläsning:** "Köp 3D-modellen till sängen hos Ali." (utan pengar: "Printa och sälj mer tills du har sextio kronor till sängen.")

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

### 1. *(beror på läget)* 'Köp kvarnmotorn hos Ali (50 kr)' `kopMotor`
- **Moment:** Kvarnmotorn · **sak:** byggsats:kvarnmotor · **bild:** byggsats:kvarnmotor · **pil:** ali
- **Handling:** kop → kontrollhjälp *– (hos Ali)*
- **Kräver:** – · **ger:** –
- **Start (sägs när steget börjar):** "Vevandet tar på armarna. Ali har en motor till kvarnen."
- **Påminnelse:** –
- **Kvitto:** –
- **Uppläsning:** "Köp kvarnmotorn hos Ali." (utan pengar: "Printa och sälj mer tills du har femtio kronor till kvarnmotorn.")

### 2. Printa kvarnmotorn till kvarnen `monteraMotor`
- **Moment:** Kvarnmotorn · **sak:** byggsats:kvarnmotor · **bild:** byggsats:kvarnmotor · **pil:** kvarn
- **Handling:** montera → kontrollhjälp *Klick · Klicka för att montera*
- **Kräver:** – · **ger:** –
- **Start (sägs när steget börjar):** "Motorn ska sitta där veven sitter. Jag printar den först."
- **Påminnelse:** –
- **Kvitto:** –
- **Uppläsning:** "Printa kvarnmotorn på skrivaren och ta ut den. Då sätter du den direkt på kvarnen."

### 3. *(beror på läget)* 'byggsats:korg' / 'Ta på dig sopsäcken' / 'Kolla vad som flög ut från sopbilen' / 'Städa gården' `kopSack`
- **Moment:** Städa gården · **sak:** byggsats:korg · **bild:** byggsats:korg · **pil:** gard
- **Handling:** ta → kontrollhjälp *Klick*
- **Kräver:** – · **ger:** –
- **Start (sägs när steget börjar):** "Gården är full av skräp. Jag börjar vid skjulet."
- **Påminnelse:** –
- **Kvitto:** –
- **Uppläsning:** "Städa gården. Sopbilen brukar köra förbi vid den här tiden."

### 4. Städa klart gården `n1-stada-klart-garden`
- **Moment:** Städa gården · **sak:** skrap · **bild:** – · **pil:** gard
- **Handling:** ta → kontrollhjälp *Klick*
- **Kräver:** – · **ger:** –
- **Start (sägs när steget börjar):** "Halva gården är ren. Tar jag resten blir det fint på riktigt."
- **Påminnelse:** –
- **Kvitto:** –

### 5. *(beror på läget)* ' + i ? ' / 'Läs brevet i Rolfs postlåda' `rolf0-brev`
- **Moment:** Rolfs brev · **sak:** brev · **bild:** – · **pil:** postlada
- **Handling:** ta → kontrollhjälp *Klick*
- **Kräver:** – · **ger:** –
- **Start (sägs när steget börjar):** –
- **Påminnelse:** –
- **Kvitto:** –

### 6. *(beror på läget)*  `rolf0-printa`
- **Moment:** Rolfs brev · **sak:** gava · **bild:** – · **pil:** skrivare
- **Handling:** printa → kontrollhjälp *Klick · Välj modell på skrivaren*
- **Kräver:** – · **ger:** –
- **Start (sägs när steget börjar):** –
- **Påminnelse:** –
- **Kvitto:** –

### 7. *(beror på läget)*  `rolf0-ge`
- **Moment:** Rolfs brev · **sak:** gava · **bild:** – · **pil:** postlada
- **Handling:** lagg → kontrollhjälp *Klick*
- **Kräver:** – · **ger:** –
- **Start (sägs när steget börjar):** –
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

### 10. Klart för idag – sov när du vill `sov2`
- **Moment:** – · **sak:** sang · **bild:** – · **pil:** skjul
- **Handling:** sov → kontrollhjälp *Klick · Sov*
- **Kräver:** – · **ger:** –
- **Start (sägs när steget börjar):** –
- **Påminnelse:** –
- **Kvitto:** –

## Dag 3 (kapitel 1)

### 1. *(beror på läget)* ' + i ? ' / 'Läs brevet i Rolfs postlåda' `rolf1-brev`
- **Moment:** Rolfs brev · **sak:** brev · **bild:** – · **pil:** postlada
- **Handling:** ta → kontrollhjälp *Klick*
- **Kräver:** – · **ger:** –
- **Start (sägs när steget börjar):** –
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
- **Start (sägs när steget börjar):** –
- **Påminnelse:** –
- **Kvitto:** –

### 4. *(beror på läget)*  `rolf1-ge`
- **Moment:** Rolfs brev · **sak:** gava · **bild:** – · **pil:** postlada
- **Handling:** lagg → kontrollhjälp *Klick*
- **Kräver:** – · **ger:** –
- **Start (sägs när steget börjar):** –
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

### 6. Bygg ryggkorgen – bär 10 skräp `ryggkorg`
- **Moment:** Bära och mala mer · **sak:** byggsats:ryggkorg · **bild:** byggsats:ryggkorg · **pil:** skrivare
- **Handling:** ta → kontrollhjälp *Klick*
- **Kräver:** – · **ger:** –
- **Start (sägs när steget börjar):** "Jag springer för mycket. Med en ryggkorg bär jag tio saker."
- **Påminnelse:** –
- **Kvitto:** –
- **Uppläsning:** "Bygg ryggkorgen. Då bär du tio saker."

### 7. Bygg ett arbetsbord `n2-bygg-arbetsbord`
- **Moment:** Skrivare M · **sak:** byggsats:bord · **bild:** byggsats:bord · **pil:** startYta
- **Handling:** stallNer → kontrollhjälp *Klick · Ställ ner · R vrid*
- **Kräver:** – · **ger:** –
- **Start (sägs när steget börjar):** "Ett arbetsbord bredvid skrivaren. Skrivare M ska stå på det."
- **Påminnelse:** –
- **Kvitto:** –

### 8. Bygg Skrivare M på bordet `n2-bygg-skrivare-m`
- **Moment:** Skrivare M · **sak:** byggsats:skrivare2 · **bild:** byggsats:skrivare2 · **pil:** bord
- **Handling:** stallNer → kontrollhjälp *Klick · Ställ ner · R vrid*
- **Kräver:** – · **ger:** –
- **Start (sägs när steget börjar):** "Skrivare M på bordet. Två skrivare, dubbelt så mycket."
- **Påminnelse:** –
- **Kvitto:** –

### 9. Lägg plåttak på skjulet `n2-lagg-plattak-skjulet`
- **Moment:** Taket · **sak:** byggsats:tak · **bild:** byggsats:tak · **pil:** skjul
- **Handling:** montera → kontrollhjälp *Klick · Klicka för att montera*
- **Kräver:** – · **ger:** –
- **Start (sägs när steget börjar):** "Det regnar in. Plåt på taket, så slipper jag sova i en pöl."
- **Påminnelse:** –
- **Kvitto:** –

### 10. Klart för idag – sov när du vill `sov3`
- **Moment:** – · **sak:** sang · **bild:** – · **pil:** skjul
- **Handling:** sov → kontrollhjälp *Klick · Sov*
- **Kräver:** – · **ger:** –
- **Start (sägs när steget börjar):** –
- **Påminnelse:** –
- **Kvitto:** –

## Dag 4 (kapitel 1)

### 1. *(beror på läget)* ' + i ? ' / 'Läs brevet i Rolfs postlåda' `rolf2-brev`
- **Moment:** Rolfs brev · **sak:** brev · **bild:** – · **pil:** postlada
- **Handling:** ta → kontrollhjälp *Klick*
- **Kräver:** – · **ger:** –
- **Start (sägs när steget börjar):** –
- **Påminnelse:** –
- **Kvitto:** –

### 2. *(beror på läget)*  `rolf2-printa`
- **Moment:** Rolfs brev · **sak:** gava · **bild:** – · **pil:** skrivare
- **Handling:** printa → kontrollhjälp *Klick · Välj modell på skrivaren*
- **Kräver:** – · **ger:** –
- **Start (sägs när steget börjar):** –
- **Påminnelse:** –
- **Kvitto:** –

### 3. *(beror på läget)*  `rolf2-ge`
- **Moment:** Rolfs brev · **sak:** gava · **bild:** – · **pil:** postlada
- **Handling:** lagg → kontrollhjälp *Klick*
- **Kräver:** – · **ger:** –
- **Start (sägs när steget börjar):** –
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

### 9. Klart för idag – sov när du vill `sov4`
- **Moment:** – · **sak:** sang · **bild:** – · **pil:** skjul
- **Handling:** sov → kontrollhjälp *Klick · Sov*
- **Kräver:** – · **ger:** –
- **Start (sägs när steget börjar):** –
- **Påminnelse:** –
- **Kvitto:** –

## Dag 5 (kapitel 1)

### 1. *(beror på läget)* ' + i ? ' / 'Läs brevet i Rolfs postlåda' `rolf3-brev`
- **Moment:** Rolfs brev · **sak:** brev · **bild:** – · **pil:** postlada
- **Handling:** ta → kontrollhjälp *Klick*
- **Kräver:** – · **ger:** –
- **Start (sägs när steget börjar):** –
- **Påminnelse:** –
- **Kvitto:** –

### 2. *(beror på läget)*  `rolf3-printa`
- **Moment:** Rolfs brev · **sak:** gava · **bild:** – · **pil:** skrivare
- **Handling:** printa → kontrollhjälp *Klick · Välj modell på skrivaren*
- **Kräver:** – · **ger:** –
- **Start (sägs när steget börjar):** –
- **Påminnelse:** –
- **Kvitto:** –

### 3. *(beror på läget)*  `rolf3-ge`
- **Moment:** Rolfs brev · **sak:** gava · **bild:** – · **pil:** postlada
- **Handling:** lagg → kontrollhjälp *Klick*
- **Kräver:** – · **ger:** –
- **Start (sägs när steget börjar):** –
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

### 9. Klart för idag – sov när du vill `sov5`
- **Moment:** – · **sak:** sang · **bild:** – · **pil:** skjul
- **Handling:** sov → kontrollhjälp *Klick · Sov*
- **Kräver:** – · **ger:** –
- **Start (sägs när steget börjar):** –
- **Påminnelse:** –
- **Kvitto:** –
