// story.js – hela spelets ordning (inkorg 58, A-113). Ett steg äger allt som syns och sägs medan det pågår:
// mål, bild, pil, handling (kontrollhjälp och verktyg), start, text per läge för saken, påminnelse, kvitto och det som sägs under steget.
// Ren data och små funktioner, inget Three.js. Funktionerna får (S, G): S = sparläget, G = spelets hjälpfunktioner (se storyHjalp i spel.js).
// Dag 1 ligger här (omgång 1). Dag 2–23 ligger kvar i STEG i spel.js tills omgång 3.
//
// Fälten (alla utom id, mal och klar är frivilliga):
//   mom        momentet i uppgiftsrutan (rubriken över målet)
//   mal        målet i uppgiftsrutan – text eller (S, G) => text
//   bild       bilden i uppgiftsrutan och över pilen – sak-id eller (S, G) => sak-id
//   pil        var pilen pekar (namn som spelet känner, se PIL_MAL i spel.js) – annars stegets bild
//   sak        saken steget gäller (lage(sak) styr texterna i lagen)
//   dialog     inkorg 61 (A-116): allt som sägs i steget av andra och av dig utöver start: [{ id, vem, kanal: 'butik'|'sms'|'tanke', text, svarPa, vet, fore, ger, en, stryksNar }]
//              svarPa = händelsen eller repliken den svarar på ('oppnatButik', 'salt:nyckelring', 'kopt:gammalkvarn', 'steg:powerbank', 'dialog:<id>')
//              vet = det spelaren måste känna till · fore = det repliken bara kan sägas innan spelaren vet · ger = det spelaren vet efteråt · en = en gång per spel
//   startSvarPa/startVet/startFore  samma regler för stegets start: den väntar tills orsaken har visats
//   lasText/butikNamn  (kop-steg) Alis lås-text innan köpet går, och namnet i "Låst – köp X först"
//   handling   vad spelaren gör: spika, lyfta, stallNer, montera, valj, trampa, salj, kop, lagg, veva, printa, ta, sov
//   kraver/ger tillstånd steget behöver och skapar (kontrolleras av verktyg/story-koll.mjs)
//   start      det du säger direkt när steget börjar (null = det som kom precis före säger det redan)
//   lagen      { läge: { tanke } } – sägs en gång per läge medan steget pågår; ersätter start när saken redan är i det läget
//   medan      [{ id, nar(S, G), tanke }] – sägs en gång när villkoret blir sant medan steget pågår
//   pamin      påminnelsen efter 30 s utan framsteg (sedan var 60 s)
//   kvitto     det som sägs när steget blir klart (inom 2 s) – text eller (S, G) => text|null
//   tal        berättarens uppläsning av målet; talSpara: [text, belopp] när pengarna inte räcker
//   las, lapp, forslag  som i STEG (upplåsning, lapp i dagboken, förvald modell)
//   klar       (S, G) => true när steget är gjort

export const LAGEN = ['butiken', 'handen', 'raden', 'ryggan', 'kistan', 'stalld', 'monterad', 'borta'];
export const HANDLINGAR = ['spika', 'lyfta', 'stallNer', 'montera', 'valj', 'trampa', 'salj', 'kop', 'lagg', 'veva', 'printa', 'ta', 'sov', 'ga'];

// tillstånd som finns från start (introt): det du har med dig
export const FRAN_START = ['hammareIRaden', 'generatorIRaden', 'skrivarePaCykeln', 'cykelVidVagen', 'brorsRulle'];

/* inkorg 58 omgång 3: steg som finns varje dag eller varje brev, byggda på ett ställe */
// Rolfs brev: läs brevet → printa gåvan → lägg den i hans postlåda. Tacket ligger i lådan nästa morgon.
function rolf(i, [vara, varanBest]) {
  const v = (G) => G.rolfVara(i), nm = (G) => G.rolfNamn(i);
  return [
    { id: `rolf${i}-brev`, mom: 'Rolfs brev', forDu: ['darfor', i ? 'Rolf har lagt ett nytt brev' : 'Rolf har lagt ett brev'], sak: 'brev', handling: 'ta', pil: 'postlada', startPost: 'rolf:' + i,
      mal: (S) => S.brevVantar?.lapp === 'rolf:' + i ? 'Vänta på sopbilen. Den lämnar något.' : 'Läs brevet i Rolfs postlåda',
      klar: (S, G) => S.rolf.i > i || (S.rolf.i === i && (S.rolf.aktiv || S.post.tillRolf === v(G) || S.rolf.hamtad === i)) },
    { id: `rolf${i}-printa`, mom: 'Rolfs brev', forDu: ['darfor', `Rolf vill ha en ${vara}`], sak: 'gava', handling: 'printa', pil: 'skrivare',
      mal: (S, G) => `Printa ${nm(G)}`,
      klar: (S, G) => S.rolf.i > i || G.harGava(v(G)) || S.rolf.hamtad === i },
    { id: `rolf${i}-ge`, mom: 'Rolfs brev', forDu: ['darfor', `${varanBest} är klar`], sak: 'gava', handling: 'lagg', pil: 'postlada',
      mal: (S, G) => `Ge Rolf ${nm(G)}`,
      klar: (S, G) => S.rolf.i > i || S.post.tillRolf === v(G) || S.rolf.hamtad === i },
  ];
}
// kvällen: sov när du vill. Uppgiften läses upp (ingen egen replik).
function sov(dag, forDu) {
  return { id: 'sov' + dag, forDu, sak: 'sang', handling: 'sov', pil: 'skjul', sov: true, mal: 'Klart för idag – sov när du vill', klar: (S) => S.dag > dag };
}

export const STORY = [
  { dag: 1, kapitel: 1, steg: [

    { id: 'skylt', mom: 'Kom igång', sak: 'hammare', handling: 'spika', pil: 'bradhog', bild: 'hammare',
      kraver: ['hammareIRaden'], ger: ['skyltUppe'],
      mal: 'Spika upp din adresskylt',
      start: 'Först borde jag spika upp en skylt, så att alla ser att jag bor HÄR.',
      lagen: { ryggan: { tanke: 'Hammaren ligger i ryggsäcken. Den ska fram.' }, borta: { tanke: 'Jag behöver hammaren.' } },
      pamin: 'Skylten. Hammaren och brädorna vid vägen.',
      kvitto: null,   // dagboksnotisen om skylten är kvittot
      klar: (S) => !!S.skyltUppe },

    { id: 'lasta', mom: 'Ställ upp skrivaren', forDu: ['darfor', 'skylten sitter – nu ska verkstaden upp'], sak: 'skrivareS', handling: 'lyfta', pil: 'vagCykel', bild: 'skrivareS',
      kraver: ['skyltUppe', 'skrivarePaCykeln'], ger: ['skrivareLastad'],
      mal: 'Lasta av skrivaren', tal: 'Klicka på cykeln och lasta av storebrors skrivare.',
      start: 'Storebrors skrivare står kvar på cykeln vid vägen. Den ska av.',
      pamin: 'Skrivaren ska av cykeln.',
      kvitto: 'Tung. Den har storebror aldrig burit så långt.',
      klar: (S) => !!S.skrivareLastad },

    { id: 'stall', mom: 'Ställ upp skrivaren', forDu: ['darfor', 'skrivaren är av cykeln'], sak: 'skrivareS', handling: 'stallNer', pil: 'startYta', bild: 'skrivareS',
      kraver: ['skrivareLastad'], ger: ['skrivareStar'],
      mal: 'Ställ upp skrivaren', tal: 'Skrivaren ska stå mot skräpberget.',
      start: 'Skrivaren ställer jag mot skräpberget. Min första verkstad.',
      lagen: { raden: { tanke: 'Skrivaren ligger i raden. Den ska stå mot skräpberget.' }, ryggan: { tanke: 'Skrivaren hamnade i ryggsäcken. Fram med den.' } },
      pamin: 'Skrivaren ska stå mot skräpberget.',
      kvitto: null,
      klar: (S) => !!S.skrivareStar },

    { id: 'strom', mom: 'Få ström', forDu: ['men', 'skrivaren står men har ingen ström'], sak: 'cykelS', handling: 'lyfta', pil: 'vagCykel',
      bild: (S) => (S.cykelStar || S.cykelBuren) && !S.generatorStar ? 'byggsats:generator' : 'cykelS',
      kraver: ['skrivareStar', 'cykelVidVagen'], ger: ['stromIdee'],
      mal: 'Skrivaren behöver ström',
      start: 'Skrivaren behöver ström. Hur fixar jag det här ute?',
      pamin: 'Ström. Hur får jag ström här ute?',
      klar: (S, G) => !!(S.stromHjalp || (S.skrivareStar && G.valdTyp() === 'byggsats:generator') || S.generatorStar || S.cykelBuren || S.cykelStar || S.cykelOmbyggd) },

    { id: 'bygg', mom: 'Få ström', forDu: ['darfor', 'cykeln och generatorn kan ge ström'], sak: 'cykelS', handling: 'stallNer', pil: 'startYta',
      bild: (S) => (S.cykelStar || S.cykelBuren) ? 'byggsats:generator' : 'cykelS',
      kraver: ['stromIdee', 'generatorIRaden'], ger: ['cykelOmbyggd'],
      mal: (S) => S.cykelStar && S.generatorStar ? 'Montera generatorn' : 'Ställ cykel och generator', tal: 'Ställ cykeln och generatorn vid skrivaren.',
      start: (S) => S.cykelStar ? 'Nu generatorn på cykeln. Den gör el när hjulet snurrar.' : 'Cykeln… och storebrors generator?',   /* inkorg 61: en replik per läge, i den ordning det görs */
      lagen: {
        handen: { tanke: 'Cykeln ska stå vid skrivaren.' },
        stalld: { tanke: 'Nu generatorn på cykeln. Den gör el när hjulet snurrar.' },
      },
      pamin: (S) => S.cykelStar ? 'Generatorn på cykeln.' : 'Cykeln, sen generatorn.',
      kvitto: null,
      klar: (S) => !!S.cykelOmbyggd },

    { id: 'valjModell', mom: 'Första printen', forDu: ['darfor', 'nu finns ström'], sak: 'skrivareS', handling: 'valj', pil: 'skrivare', bild: 'skrivareS', forslag: 'nyckelring',
      kraver: ['cykelOmbyggd', 'brorsRulle'], ger: ['printJobb'],
      mal: 'Välj vad skrivaren ska printa', tal: 'Klicka på skrivaren och välj vad du vill printa.',
      start: 'Strömmen finns. Nu ska skrivaren veta vad den ska göra, sen trampar jag.',
      pamin: 'Klicka på skrivaren och välj nyckelringen.',
      kvitto: 'Den piper. Den GÖR något.',
      klar: (S, G) => G.skrivare().some((x) => x.jobb || x.klar) || G.printat('nyckelring') >= 1 || S.stat.printat >= 1 },

    { id: 'trampa', mom: 'Första printen', forDu: ['men', 'skrivaren stannar utan trampande'], sak: 'cykelS', handling: 'trampa', pil: 'cykel', bild: 'cykelS',
      kraver: ['printJobb'], ger: ['nyckelring1'],
      mal: 'Trampa cykeln', tal: 'Trampa!',
      start: 'Nu behöver den ström. Trampa.',
      pamin: 'Sätt dig på cykeln och trampa.',
      kvitto: (S, G) => G.nyckelringUttagen() ? null : 'Klar! Ta ut den innan den ändrar sig.',
      klar: (S, G) => G.printat('nyckelring') >= 1 || S.stat.printat >= 1 },

    { id: 'rullSlut', mom: 'Första printen', forDu: ['darfor', 'första ringen blev klar'], sak: 'nyckelring', handling: 'printa', pil: 'skrivare', bild: 'nyckelring',
      kraver: ['nyckelring1'], ger: ['rullSlut'],
      mal: 'En nyckelring till', tal: 'Printa en nyckelring till.',
      start: 'En nyckelring till, så länge storebrors rulle räcker.',
      pamin: 'En ring till.',
      dialog: [
        { id: 'brorSms1', vem: 'bror', kanal: 'sms', text: 'VA FAN?! Fick du igång den?? Jag försökte i typ ett år. Den bara pep. 😳', svarPa: 'tagitUrPrint:nyckelring', en: true },
        { id: 'brorSms2', vem: 'bror', kanal: 'sms', text: 'Sälj den till Ali, han med affären mitt emot. Han köper gamla grejer. Han köpte min gamla mopedhjälm för 20 spänn.', svarPa: 'dialog:brorSms1', ger: ['hortAli'], en: true },
      ],
      klar: (S) => !!S.rullSlut || !!S.kvarnKopt },

    { id: 'saljTva', mom: 'Gör egen tråd', forDu: ['men', 'storebrors rulle är slut'], sak: 'nyckelring', handling: 'salj', pil: 'ali', bild: 'nyckelring',
      kraver: ['rullSlut'], ger: ['kvarnPengar'],
      mal: 'Sälj nyckelringarna', tal: 'Sälj nyckelringarna hos Ali.',
      start: null,   // tanken när rullen tar slut säger redan det här
      pamin: 'Affären mitt emot kanske köper ringarna.',
      dialog: [
        { id: 'aliForsta', vem: 'ali', kanal: 'butik', text: 'Hej. Jag är Ali. Pappas butik – min sedan tjugofem år. Jag köper det du printar.', svarPa: 'oppnatButik', fore: ['kandAli'], ger: ['kandAli'], en: true },
        { id: 'aliKvarnErbjud', vem: 'ali', kanal: 'butik', text: (S, G) => `Pappas gamla köttkvarn. Den har malt allt utom kött. ${G.kronorOrd(G.KVARN_PRIS)}, så är den din.`, svarPa: 'salt:nyckelring', vet: ['kandAli'], ger: ['aliHarKvarn'], en: true, stryksNar: (S) => !!S.kvarnKopt },
      ],
      klar: (S, G) => S.mynt >= G.KVARN_PRIS || !!S.kvarnKopt },

    { id: 'aliKvarn', lasText: 'Kommer när storebrors rulle är slut', butikNamn: 'kvarnen', mom: 'Gör egen tråd', forDu: ['darfor', 'ringarna gav pengar till kvarnen'], sak: 'byggsats:gammalkvarn', handling: 'kop', pil: 'ali', bild: 'byggsats:gammalkvarn',
      kraver: ['kvarnPengar'], ger: ['kvarnKopt'],
      mal: 'Köp kvarnen', tal: 'Köp kvarnen hos Ali.',
      start: 'Ali har en gammal kvarn. Den gör tråd av skräp.', startSvarPa: 'dialog:aliKvarnErbjud',
      pamin: 'Kvarnen hos Ali.',
      dialog: [
        { id: 'aliKvarnKopt', vem: 'ali', kanal: 'butik', text: 'Den är din. Pappa hade blivit glad. Han trodde aldrig att nån skulle vilja ha den.', svarPa: 'kopt:gammalkvarn', en: true },
      ],
      klar: (S) => !!S.kvarnKopt },

    { id: 'kvarn', mom: 'Gör egen tråd', forDu: ['darfor', 'kvarnen är köpt'], sak: 'byggsats:gammalkvarn', handling: 'stallNer', pil: 'startYta', bild: 'byggsats:gammalkvarn',
      kraver: ['kvarnKopt'], ger: ['kvarnStar'],
      mal: 'Ställ kvarnen', tal: 'Ställ kvarnen vid tornet.',
      start: 'Kvarnen ställer jag bredvid skrivaren, närmast skräpberget. Där finns skräpet.',
      lagen: {
        handen: { tanke: 'Kvarnen ska stå vid skrivaren, närmast skräpberget.' },
        raden: { tanke: 'Kvarnen ligger i raden. Den ska stå vid skrivaren.' },
        ryggan: { tanke: 'Kvarnen ligger i ryggsäcken. Den ska fram och stå vid skrivaren.' },
        kistan: { tanke: 'Kvarnen ligger i kistan. Den ska ut och stå vid skrivaren.' },
      },
      pamin: 'Kvarnen ska stå vid skrivaren.',
      kvitto: null,
      klar: (S) => !!S.kvarnStar },

    { id: 'flaska', mom: 'Gör egen tråd', forDu: ['darfor', 'kvarnen står – skräpet ska bli tråd'], sak: 'kvarn', handling: 'veva', pil: 'vevYta', lapp: 'malt',
      kraver: ['kvarnStar'], ger: ['trad'],
      mal: (S, G) => S.kvarn.tratt ? 'Veva kvarnen' : G.handSaker() ? 'Skräp i kvarnen' : 'Gör egen tråd', tal: 'Lägg skräpet i kvarnen och veva.',
      start: 'Skräp i kvarnen, sen vevar jag. Då blir det tråd.',
      pamin: 'Skräp i kvarnen, sen vevar jag.',
      kvitto: 'Det blir tråd! Riktig plasttråd.',
      klar: (S, G) => !!S.stat.maltNagot || G.helaRullar() >= 1 },

    { id: 'egenPrint', mom: 'Gör egen tråd', forDu: ['darfor', 'egen tråd finns'], sak: 'nyckelring', handling: 'printa', pil: 'skrivare', bild: 'nyckelring',
      kraver: ['trad'], ger: ['egenRing'],
      mal: 'Printa med egen tråd', tal: 'Printa en nyckelring av din egen tråd.',
      start: 'Min egen tråd. Nu printar jag en nyckelring av den.',
      pamin: 'Nu printar jag med min egen tråd.',
      klar: (S, G) => G.printat('nyckelring') >= 3 || (S.stat.printat || 0) >= 3 },

    { id: 'salj', mom: 'Gör egen tråd', forDu: ['darfor', 'en ring av egen tråd ska säljas'], sak: 'nyckelring', handling: 'salj', pil: 'ali', bild: 'nyckelring',
      kraver: ['egenRing'], ger: ['saltEgen'],
      mal: 'Sälj hos Ali', tal: 'Sälj nyckelringarna hos Ali.',
      start: 'Ali köper nog den här också.', startVet: ['kandAli'],
      pamin: 'Ali köper det jag printar.',
      dialog: [
        { id: 'aliNyckelIgen', vem: 'ali', kanal: 'butik', text: 'Nyckelringar igen? Folk tappar sina nycklar hela tiden.', svarPa: 'salt:nyckelring', vet: ['kandAli'], en: true },
      ],
      klar: (S) => (S.stat.salt || 0) > (S.saltVidKvarn ?? 0) },

    { id: 'powerbank', mom: 'Gör egen tråd', forDu: ['darfor', 'Ali har något åt mig'], sak: 'byggsats:powerbank', handling: 'montera', pil: 'ali', bild: 'byggsats:powerbank',
      kraver: ['saltEgen'], ger: ['powerbank'],
      mal: (S, G) => G.antalInv('byggsats:powerbank') ? 'Koppla in powerbanken' : 'Gå till Ali',
      start: (S) => S.powerbankGiven ? null : 'Ali har något åt mig. Jag går över vägen till affären.', startSvarPa: 'dialog:aliPbKom',
      dialog: [
        { id: 'aliPbKom', vem: 'ali', kanal: 'sms', text: 'Ali här. Glömde en sak. Kom tillbaka, jag har nåt åt dig.', svarPa: 'salt:nyckelring', vet: ['kandAli'], en: true },
        { id: 'aliPowerbank', vem: 'ali', kanal: 'butik', text: 'Jag såg dig cykla. Det ser jobbigt ut. Ta den här. Bra kunder får bonus.', svarPa: 'oppnatButik', vet: ['kandAli'], en: true },
      ],
      lagen: { handen: { tanke: 'Powerbanken ska sitta på cykeln.' }, raden: { tanke: 'Powerbanken ligger i raden. Den ska på cykeln.' } },
      pamin: 'Ali har något åt mig.',
      klar: (S) => !!S.powerbank },

    { id: 'kopGrip', lasText: 'Kommer när kvarnen står', butikNamn: 'gripen', mom: 'Sova', forDu: ['men', 'det tar tid att plocka skräp med händerna'], sak: 'byggsats:grip', handling: 'kop', pil: 'ali', bild: 'byggsats:grip', las: 'grip', lapp: 'ritning',
      kraver: ['powerbank'], ger: ['gripRitning'],
      mal: (S) => S.mynt >= 50 ? 'Köp skräpgripen' : 'Spara till gripen', tal: 'Köp en skräpgrip hos Ali. Den kostar femtio kronor.',
      talSpara: ['Printa och sälj nyckelringar tills du har femtio kronor till gripen.', 50],
      start: (S) => S.mynt >= 50 ? 'Med en skräpgrip slipper jag böja mig. Ali har en ritning.' : 'Gripen kostar femtio. Fler nyckelringar, alltså.', startSvarPa: 'dialog:aliGripSms',
      medan: [{ id: 'harRad', nar: (S) => S.mynt >= 50, tanke: 'Femtio kronor. Nu har jag råd med gripen.' }],
      pamin: 'Gripen hos Ali.',   /* inkorg 61: "femtio kronor" sägs redan när du har råd */
      dialog: [
        { id: 'aliGripSms', vem: 'ali', kanal: 'sms', text: 'Ali här. Nyckelringen sålde direkt. Jag ville bli ingenjör en gång. Nu har jag låtit en AI rita en skräpgrip. Kom och titta.', svarPa: 'malKlart:powerbank', vet: ['kandAli'], ger: ['aliHarGrip'], en: true },
        { id: 'aliForstaRitning', vem: 'ali', kanal: 'butik', text: 'Bra val. Ritningen räcker till en skräpgrip.', svarPa: 'kopt:grip', en: true },
      ],
      klar: (S, G) => S.ritningar.includes('grip') || G.forstaUpp() },

    { id: 'printGrip', mom: 'Sova', forDu: ['darfor', 'modellen är köpt'], sak: 'byggsats:grip', handling: 'printa', pil: 'skrivare',
      kraver: ['gripRitning'], ger: ['grip'],
      mal: (S, G) => G.skrivare().some((x) => x.klar === 'byggsats:grip') ? 'Ta ut gripen' : 'Printa skräpgripen', tal: 'Printa skräpgripen på skrivaren.',
      start: null,   // dagbokssidan om ritningen säger redan det här
      pamin: 'Gripen ska printas.',
      klar: (S, G) => G.forstaUpp() },

    { id: 'krukaD1', mom: 'Sova', forDu: ['men', 'Ali vill inte bara ha nyckelringar'], sak: 'kruka', handling: 'printa', pil: 'skrivare', bild: 'kruka', las: 'kruka',
      kraver: ['grip'], ger: ['kruka1'],
      mal: (S, G) => S.ritningar.includes('recept:kruka') ? 'Printa en blomkruka' : S.krukaErbjuden ? (S.mynt >= G.VAROR.kruka.recept ? 'Köp krukreceptet' : 'Spara till receptet') : 'Sälj en nyckelring till',
      start: 'Ali vill ha krukor. Jag printar en blomkruka.', startSvarPa: 'dialog:aliKrukaSms',
      pamin: 'En blomkruka åt Ali.',
      kvitto: 'En kruka. Mamma skulle bli så stolt. Hon får inte veta.',
      dialog: [
        { id: 'aliKrukaSms', vem: 'ali', kanal: 'sms', text: 'Prova en kruka. Folk köper krukor. Ingen vet varför.', svarPa: 'upplast:kruka', vet: ['kandAli'], en: true },
        { id: 'aliKrukaRecept', vem: 'ali', kanal: 'butik', text: 'Blomkruka? Bra val. Folk köper sånt. Jag vet inte varför.', svarPa: 'kopt:kruka', en: true },
      ],
      klar: (S, G) => G.printat('kruka') >= 1 },

    { id: 'saljKruka', mom: 'Sova', forDu: ['darfor', 'krukan är printad'], sak: 'kruka', handling: 'salj', pil: 'ali', bild: 'kruka',
      kraver: ['kruka1'], ger: ['krukaSald'],
      mal: 'Sälj blomkrukan',
      start: 'Ali gillar krukor. Han sa det själv.', startSvarPa: 'dialog:aliKrukaSms',   /* inkorg 61: "han sa det" – efter hans sms */
      pamin: 'Krukan till Ali.',
      klar: (S) => (S.stat.krukaSald || 0) >= 1 },

    { id: 'kopSang', lasText: 'Kommer när första krukan är såld', butikNamn: 'sängen', mom: 'Sova', forDu: ['men', 'sängen kostar mer än jag har'], sak: 'sang', handling: 'kop', pil: 'ali', bild: 'sang',
      kraver: ['krukaSald'], ger: ['sangRitning'],
      mal: (S, G) => S.mynt >= G.SANG_INSTRUKTION ? 'Köp sängen' : 'Spara till sängen', tal: 'Köp 3D-modellen till sängen hos Ali.',
      talSpara: ['Printa och sälj mer tills du har sextio kronor till sängen.', 'SANG_INSTRUKTION'],
      start: 'Jag tänker inte sova på betongen i natt. Ali har en säng. Typ.',
      medan: [{ id: 'morkt', nar: (S, G) => G.klockan() >= 18 * 60, tanke: 'Det börjar bli mörkt. Jag kan inte sova på jorden.' }],
      pamin: 'En säng. Jag behöver pengar till den.',
      dialog: [
        { id: 'aliSang', vem: 'ali', kanal: 'butik', text: 'Sov gott, min vän.', svarPa: 'kopt:sang', en: true },
      ],
      klar: (S) => S.ritningar.includes('sang') || !!S.sang },

    { id: 'printSang', mom: 'Sova', forDu: ['darfor', 'pengarna räcker till sängen'], sak: 'sang', handling: 'printa', pil: 'skrivare', bild: 'sang',
      kraver: ['sangRitning'], ger: ['sangPrintad'],
      mal: 'Printa sängen', tal: 'Printa sängen på skrivaren.',
      start: 'En säng tar lång tid. Den är värd det.',
      pamin: 'Sängen ska printas.',
      kvitto: 'En säng. Jag printade en SÄNG.',
      klar: (S, G) => G.antalInv('sang') > 0 || !!S.sang },

    { id: 'sov1', mom: 'Sova', forDu: ['darfor', 'sängen är klar'], sak: 'sang', handling: 'sov', pil: 'skjul', bild: 'sang',
      kraver: ['sangPrintad'], ger: ['dag2'],
      mal: 'Sängen i skjulet', tal: 'Ställ sängen i skjulet och sov.',
      start: 'Sängen ska in i skjulet. Sen sover jag.',
      pamin: 'Sängen in i skjulet. Sen sover jag.',
      klar: (S) => !!S.sang && S.dag >= 2 },
  ] },
  // ---------- omgång 3: kapitel 1, dag 2–5 (inkorg 58, A-113) ----------
  { dag: 2, kapitel: 1, steg: [
    { id: 'kopMotor', mom: 'Kvarnmotorn', forDu: ['men', 'vevandet tar på armarna'], sak: 'byggsats:kvarnmotor', handling: 'kop', pil: 'ali', bild: 'byggsats:kvarnmotor', las: 'kvarnmotor', lasText: 'Kommer när vevandet tar för lång tid', butikNamn: 'kvarnmotorn',
      mal: (S) => S.mynt >= 50 ? 'Köp kvarnmotorn hos Ali (50 kr)' : `Printa och sälj mer · ${S.mynt}/50 kr till kvarnmotorn`, tal: 'Köp kvarnmotorn hos Ali.',
      talSpara: ['Printa och sälj mer tills du har femtio kronor till kvarnmotorn.', 50],
      start: 'Vevandet tar på armarna. Ali har en motor till kvarnen.',
      klar: (S) => S.ritningar.includes('kvarnmotor') || !!S.kvarn.motor },
    { id: 'monteraMotor', mom: 'Kvarnmotorn', forDu: ['darfor', 'motorn är köpt'], sak: 'byggsats:kvarnmotor', handling: 'montera', pil: 'kvarn', bild: 'byggsats:kvarnmotor',
      mal: 'Printa kvarnmotorn till kvarnen', tal: 'Printa kvarnmotorn på skrivaren och ta ut den. Då sätter du den direkt på kvarnen.',
      start: 'Motorn ska sitta där veven sitter. Jag printar den först.',
      klar: (S) => !!S.kvarn.motor },
    { id: 'kopSack', mom: 'Städa gården', forDu: ['men', 'gården är full av skräp'], sak: 'byggsats:korg', handling: 'ta', pil: 'gard', bild: 'byggsats:korg',
      mal: (S, G) => G.antalInv('byggsats:korg') ? 'Ta på dig sopsäcken' : G.sackRulleSynlig() && S.sackLagd ? 'Kolla vad som flög ut från sopbilen' : 'Städa gården',
      tal: 'Städa gården. Sopbilen brukar köra förbi vid den här tiden.',
      start: 'Gården är full av skräp. Jag börjar vid skjulet.',
      klar: (S) => !!S.korg || !!S.ryggkorg },
    { id: 'n1-stada-klart-garden', mom: 'Städa gården', forDu: ['darfor', 'halva gården är städad'], sak: 'skrap', handling: 'ta', pil: 'gard', lapp: 'gard',
      mal: 'Städa klart gården',
      start: 'Halva gården är ren. Tar jag resten blir det fint på riktigt.',
      klar: (S, G) => G.gardSkrap() <= G.gardMal() || S.rolf.i >= 1 || !!S.post.tillRolf },
    ...rolf(0, ['ölhållare', 'ölhållaren']),
    { id: 'vindsnurra', mom: 'Vindsnurran', forDu: ['men', 'trampandet tar all tid'], sak: 'byggsats:vindsnurra', handling: 'montera', pil: 'skjul', bild: 'byggsats:vindsnurra', las: 'vindsnurra',
      mal: 'Printa vindsnurran till taket',
      start: 'En vindsnurra på skjulets tak. Då blir det ström när det blåser.',
      kvitto: 'Den snurrar! Långsamt. Men den snurrar.',
      klar: (S, G) => !!S.vindsnurra || G.harPlacerat('sol') },
    { id: 'n1-bygg-dorr-skjulet', mom: 'Dörren', forDu: ['men', 'det blåser in i skjulet'], sak: 'byggsats:dorr', handling: 'montera', pil: 'skjul', bild: 'byggsats:dorr',
      mal: 'Bygg en dörr till skjulet',
      start: 'Det drar från dörrhålet. En dörr kan jag printa.',
      klar: (S) => !!S.hem?.dorr },
    sov(2, ['darfor', 'dörren sitter']),
  ] },
  { dag: 3, kapitel: 1, steg: [
    rolf(1, ['flasköppnare', 'flasköppnaren'])[0],
    { id: 'n2-hamta-skrap', mom: 'Rolfs brev', forDu: ['darfor', 'grinden till tippen är öppen'], sak: 'skrap', handling: 'ta', pil: 'tippen',
      mal: 'Hämta 5 skräp på soptippen',
      start: 'Nyckeln till tippen. Där ligger skräpet i högar.',
      klar: (S) => (S.stat.tipp || 0) >= 5 },
    ...rolf(1, ['flasköppnare', 'flasköppnaren']).slice(1),
    { id: 'kopBatteri', mom: 'Bilbatteriet', forDu: ['men', 'strömmen tar slut när jag slutar trampa'], sak: 'byggsats:cykelbatteri', handling: 'kop', pil: 'ali', bild: 'byggsats:cykelbatteri', las: 'cykelbatteri', lasText: 'Kommer när strömmen tar slut', butikNamn: 'bilbatteriet',
      mal: 'Köp Alis gamla bilbatteri', tal: 'Köp Alis gamla bilbatteri.',
      start: 'Ali har ett gammalt bilbatteri. Då sparar jag strömmen.',
      kvitto: 'Nu printar den klart även när jag vilar benen.',
      klar: (S) => !!S.batteriKopt },
    { id: 'ryggkorg', mom: 'Bära och mala mer', forDu: ['men', 'jag springer för mycket med skräp'], sak: 'byggsats:ryggkorg', handling: 'ta', pil: 'skrivare', bild: 'byggsats:ryggkorg', las: 'ryggkorg',
      mal: 'Bygg ryggkorgen – bär 10 skräp', tal: 'Bygg ryggkorgen. Då bär du tio saker.',
      start: 'Jag springer för mycket. Med en ryggkorg bär jag tio saker.',
      klar: (S) => !!S.ryggkorg },
    { id: 'n2-bygg-arbetsbord', mom: 'Skrivare M', forDu: ['men', 'en skrivare räcker inte'], sak: 'byggsats:bord', handling: 'stallNer', pil: 'startYta', bild: 'byggsats:bord',
      mal: 'Bygg ett arbetsbord',
      start: 'Ett arbetsbord bredvid skrivaren. Skrivare M ska stå på det.',
      klar: (S, G) => G.harPlacerat('bord') },
    { id: 'n2-bygg-skrivare-m', mom: 'Skrivare M', forDu: ['darfor', 'bordet står'], sak: 'byggsats:skrivare2', handling: 'stallNer', pil: 'bord', bild: 'byggsats:skrivare2', las: 'skrivare2', lapp: 'skrivare2',
      mal: 'Bygg Skrivare M på bordet',
      start: 'Skrivare M på bordet. Två skrivare, dubbelt så mycket.',
      klar: (S, G) => G.harPlacerat('skrivare2') },
    { id: 'n2-lagg-plattak-skjulet', mom: 'Taket', forDu: ['men', 'taket läcker'], sak: 'byggsats:tak', handling: 'montera', pil: 'skjul', bild: 'byggsats:tak',
      mal: 'Lägg plåttak på skjulet',
      start: 'Det regnar in. Plåt på taket, så slipper jag sova i en pöl.',
      klar: (S) => !!S.hem?.tak },
    sov(3, ['darfor', 'taket ligger på']),
  ] },
  { dag: 4, kapitel: 1, steg: [
    ...rolf(2, ['grillspade', 'grillspaden']),
    { id: 'n3-tom-full-karra', mom: 'Kärran', forDu: ['darfor', 'kärran rymmer mer än famnen'], sak: 'karra', handling: 'lagg', pil: 'kvarn', bild: 'karra',
      mal: 'Töm en full kärra i kvarnen',
      start: 'Kärran rymmer massor. Jag fyller den och tippar allt i kvarnen.',
      klar: (S) => (S.stat.karraTomt || 0) >= 1 || !!S.kapitelKlart },
    { id: 'sophallare', mom: 'Kärran', forDu: ['men', 'kvarnen väntar på att jag matar den'], sak: 'byggsats:matarband', handling: 'montera', pil: 'kvarn', bild: 'byggsats:matarband', las: 'matarband',
      mal: 'Bygg sophållaren',
      start: 'En sophållare bakom kvarnen. Då matar den sig själv.',
      kvitto: 'Nu kan jag tömma hela kärran på en gång.',
      klar: (S) => !!S.kvarn.band || !!S.kapitelKlart },
    { id: 'pall', mom: 'Pallen', forDu: ['men', 'det finns ingenstans att sitta'], sak: 'pall', handling: 'printa', pil: 'skrivare', bild: 'pall',
      mal: 'Printa en pall', tal: 'Köp receptet till pallen hos Ali och printa en.',
      start: 'Jag behöver något att sitta på. En pall. Lagom ambitiöst.',
      klar: (S, G) => G.printat('pall') >= 1 },
    { id: 'vind4', mom: 'Mer vind', forDu: ['men', 'skrivarna vill ha mer ström'], sak: 'byggsats:vindsnurra', handling: 'montera', pil: 'skjul', bild: 'byggsats:vindsnurra', las: 'vindsnurra2', lapp: 'sol',
      mal: 'Bygg en vindsnurra till',
      start: 'En vindsnurra till på skjulets tak. Skrivarna vill ha mer ström.',
      klar: (S, G) => G.antalSnurror() >= 2 || G.harPlacerat('sol') },
    { id: 'n3-isolera-tva-vaggar', forDu: ['men', 'det drar kallt genom väggarna'], sak: 'byggsats:vaggar', handling: 'montera', pil: 'skjul', bild: 'byggsats:vaggar',
      mal: (S) => `Isolera två väggar · ${Math.min(2, S.hem?.vagg || 0)}/2`,
      start: 'Det drar genom väggarna. Isolering, och sen blir det varmt.',
      klar: (S) => (S.hem?.vagg || 0) >= 2 || !!S.hem?.vaggar },
    sov(4, ['darfor', 'två väggar är isolerade']),
  ] },
  { dag: 5, kapitel: 1, steg: [
    ...rolf(3, ['tomte till flaket', 'tomten']),
    { id: 'n4-isolera-de-sista', forDu: ['men', 'två väggar drar fortfarande'], sak: 'byggsats:vaggar', handling: 'montera', pil: 'skjul', bild: 'byggsats:vaggar',
      mal: (S) => `Isolera de sista väggarna · ${S.hem?.vagg || 0}/4`,
      start: 'Två väggar kvar i skjulet. Sen är det tätt.',
      kvitto: 'Det är tätt, det är varmt.',
      klar: (S) => !!S.hem?.vaggar || (S.hem?.vagg || 0) >= 4 },
    { id: 'dator', forDu: ['darfor', 'Ali säljer pappas gamla dator'], sak: 'byggsats:webbdator', handling: 'kop', pil: 'ali', bild: 'byggsats:webbdator', lasText: 'Kommer när väggarna är tätade', butikNamn: 'datorn',
      mal: (S) => S.datorKopt ? 'Ställ datorn i skjulet' : 'Köp Alis pappas gamla dator',
      start: 'Alis pappas dator. Med den kan jag sälja på nätet.',
      klar: (S, G) => G.harPlacerat('webbdator') },
    { id: 'lampskarm', forDu: ['darfor', 'datorn kan sälja det jag printar'], sak: 'lampskarm', handling: 'printa', pil: 'skrivare', bild: 'lampskarm',
      mal: 'Printa en lampskärm att sälja',
      start: 'En lampskärm. Folk betalar för ljus som ser fint ut.',
      klar: (S, G) => G.printat('lampskarm') >= 1 || (S.saltTot?.lampskarm || 0) >= 1 || G.harPlacerat('lampskarm') },
    { id: 'mysigt', forDu: ['men', 'skjulet är tätt men inte mysigt'], sak: 'trivsel', handling: 'stallNer', pil: 'skjul', bild: (S, G) => G.nastaInred(), bildForslag: true, lapp: 'klart',   // bilden är ett förslag på nästa sak att göra det mysigt med (en pall till går bra)
     
      mal: (S, G) => G.mysigtText(),
      start: 'Skjulet ska bli mysigt på riktigt. Det är mitt hem nu.',
      klar: (S) => !!S.lampaFinal || !!S.kapitelKlart },
    { id: 'vind5', mom: 'Mer vind', forDu: ['men', 'skrivare M drar mycket ström'], sak: 'byggsats:vindsnurra', handling: 'montera', pil: 'skjul', bild: 'byggsats:vindsnurra', las: 'vindsnurra3',
      mal: 'Sätt en tredje vindsnurra på taket',
      start: 'En tredje vindsnurra på taket. Skrivare M drar mycket.',
      klar: (S, G) => G.antalSnurror() >= 3 || G.harPlacerat('sol') },
    { ...sov(5, ['darfor', 'skjulet är mysigt']), k1Slut: true, sms: ['mamma', 'Pappa kommer förbi i morgon. Han säger inget men han vill. ❤️'] },   // kapitel 1 slutar med telefonscenen och sömnen
  ] },
  // dag 6–23 flyttas hit i omgång 3
];

// alla steg i ordning, med dag
export const STORY_STEG = STORY.flatMap((d) => d.steg.map((s) => ({ ...s, dag: d.dag, kapitel: d.kapitel })));
export const storyStegFor = (id) => STORY_STEG.find((s) => s.id === id) || null;
// text (eller funktion) → värde
export const varde = (v, S, G, ...r) => { try { return typeof v === 'function' ? v(S, G, ...r) : v; } catch { return null; } };
