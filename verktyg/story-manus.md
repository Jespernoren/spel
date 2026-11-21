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
