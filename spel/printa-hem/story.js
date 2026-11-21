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
      start: (S) => S.cykelStar ? 'Nu generatorn på cykeln.' : 'Cykeln där borta vid vägen kan ge ström, om generatorn sitter på. Båda ska stå vid skrivaren.',
      lagen: {
        handen: { tanke: 'Cykeln ska stå vid skrivaren. Generatorn sätter jag på sen.' },
        stalld: { tanke: 'Nu generatorn på cykeln.' },
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
      klar: (S) => !!S.rullSlut || !!S.kvarnKopt },

    { id: 'saljTva', mom: 'Gör egen tråd', forDu: ['men', 'storebrors rulle är slut'], sak: 'nyckelring', handling: 'salj', pil: 'ali', bild: 'nyckelring',
      kraver: ['rullSlut'], ger: ['kvarnPengar'],
      mal: 'Sälj nyckelringarna', tal: 'Sälj nyckelringarna hos Ali.',
      start: null,   // tanken när rullen tar slut säger redan det här
      pamin: 'Affären mitt emot kanske köper ringarna.',
      klar: (S, G) => S.mynt >= G.KVARN_PRIS || !!S.kvarnKopt },

    { id: 'aliKvarn', lasText: 'Kommer när storebrors rulle är slut', butikNamn: 'kvarnen', mom: 'Gör egen tråd', forDu: ['darfor', 'ringarna gav pengar till kvarnen'], sak: 'byggsats:gammalkvarn', handling: 'kop', pil: 'ali', bild: 'byggsats:gammalkvarn',
      kraver: ['kvarnPengar'], ger: ['kvarnKopt'],
      mal: 'Köp kvarnen', tal: 'Köp kvarnen hos Ali.',
      start: 'Ali har en gammal kvarn. Den gör tråd av skräp.',
      pamin: 'Kvarnen hos Ali.',
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
      start: 'Affären på andra sidan vägen kanske köper sånt här.',
      pamin: 'Ali köper det jag printar.',
      klar: (S) => (S.stat.salt || 0) > (S.saltVidKvarn ?? 0) },

    { id: 'powerbank', mom: 'Gör egen tråd', forDu: ['darfor', 'Ali har något åt mig'], sak: 'byggsats:powerbank', handling: 'montera', pil: 'ali', bild: 'byggsats:powerbank',
      kraver: ['saltEgen'], ger: ['powerbank'],
      mal: (S, G) => G.antalInv('byggsats:powerbank') ? 'Koppla in powerbanken' : 'Gå till Ali',
      start: (S) => S.powerbankGiven ? null : 'Ali har något åt mig. Jag går över vägen till affären.',
      lagen: { handen: { tanke: 'Powerbanken ska sitta på cykeln.' }, raden: { tanke: 'Powerbanken ligger i raden. Den ska på cykeln.' } },
      pamin: 'Ali har något åt mig.',
      klar: (S) => !!S.powerbank },

    { id: 'kopGrip', lasText: 'Kommer när kvarnen står', butikNamn: 'gripen', mom: 'Sova', forDu: ['men', 'det tar tid att plocka skräp med händerna'], sak: 'byggsats:grip', handling: 'kop', pil: 'ali', bild: 'byggsats:grip', las: 'grip', lapp: 'ritning',
      kraver: ['powerbank'], ger: ['gripRitning'],
      mal: (S) => S.mynt >= 50 ? 'Köp skräpgripen' : 'Spara till gripen', tal: 'Köp en skräpgrip hos Ali. Den kostar femtio kronor.',
      talSpara: ['Printa och sälj nyckelringar tills du har femtio kronor till gripen.', 50],
      start: (S) => S.mynt >= 50 ? 'Med en skräpgrip slipper jag böja mig. Ali har en ritning.' : 'Gripen kostar femtio. Fler nyckelringar, alltså.',
      medan: [{ id: 'harRad', nar: (S) => S.mynt >= 50, tanke: 'Femtio kronor. Nu har jag råd med gripen.' }],
      pamin: 'Gripen hos Ali. Femtio kronor.',
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
      start: 'Ali vill ha krukor. Jag printar en blomkruka.',
      pamin: 'En blomkruka åt Ali.',
      kvitto: 'En kruka. Mamma skulle bli så stolt. Hon får inte veta.',
      klar: (S, G) => G.printat('kruka') >= 1 },

    { id: 'saljKruka', mom: 'Sova', forDu: ['darfor', 'krukan är printad'], sak: 'kruka', handling: 'salj', pil: 'ali', bild: 'kruka',
      kraver: ['kruka1'], ger: ['krukaSald'],
      mal: 'Sälj blomkrukan',
      start: 'Ali gillar krukor. Han sa det själv.',
      pamin: 'Krukan till Ali.',
      klar: (S) => (S.stat.krukaSald || 0) >= 1 },

    { id: 'kopSang', lasText: 'Kommer när första krukan är såld', butikNamn: 'sängen', mom: 'Sova', forDu: ['men', 'sängen kostar mer än jag har'], sak: 'sang', handling: 'kop', pil: 'ali', bild: 'sang',
      kraver: ['krukaSald'], ger: ['sangRitning'],
      mal: (S, G) => S.mynt >= G.SANG_INSTRUKTION ? 'Köp sängen' : 'Spara till sängen', tal: 'Köp 3D-modellen till sängen hos Ali.',
      talSpara: ['Printa och sälj mer tills du har sextio kronor till sängen.', 'SANG_INSTRUKTION'],
      start: 'Jag tänker inte sova på betongen i natt. Ali har en säng. Typ.',
      medan: [{ id: 'morkt', nar: (S, G) => G.klockan() >= 18 * 60, tanke: 'Det börjar bli mörkt. Jag kan inte sova på jorden.' }],
      pamin: 'En säng. Jag behöver pengar till den.',
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
  // dag 2–23 flyttas hit i omgång 3
];

// alla steg i ordning, med dag
export const STORY_STEG = STORY.flatMap((d) => d.steg.map((s) => ({ ...s, dag: d.dag, kapitel: d.kapitel })));
export const storyStegFor = (id) => STORY_STEG.find((s) => s.id === id) || null;
// text (eller funktion) → värde
export const varde = (v, S, G, ...r) => { try { return typeof v === 'function' ? v(S, G, ...r) : v; } catch { return null; } };
