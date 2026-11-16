# Instruktioner för Claude i det här repot

Jesper är nybörjare på kod. Spelen byggs ofta för och tillsammans med hans barn.

## Regler
- **Inget byggsteg.** Ren HTML + JavaScript-moduler. Three.js laddas via importmap från jsDelivr (`three@0.170.0`). Lägg inte till npm, bundlers eller ramverk.
- **Ett spel = en mapp** under `spel/<mappnamn>/` med `index.html` + `spel.js`. Mappnamn: små bokstäver, bindestreck, inga åäö.
- Nya spel utgår från `spel/_mall/`. Använd `delat/motor.js` för scen, loop, styrning, HUD, meny och rekord i stället för att skriva om det.
- Registrera varje nytt spel i `spel-lista.js` så att det syns i spelhallen. Fristående HTML-spel (äldre spel) läggs som `spel/<mapp>/index.html` och behöver inte motor.js.
- Rekord sparas i localStorage under nyckeln `rekord:<mapp>`, så att spelhallen kan visa dem.
- Behöver flera spel samma sak: lägg den i `delat/` och dokumentera den i README-tabellen.
- Bakåtkompatibilitet: ändra inte befintliga funktioner i `delat/motor.js` så att gamla spel går sönder.
- **Svenska** i UI-text och kommentarer. Variabelnamn på svenska utan åäö (`hoger`, `poang`).
- Lägg justerbara värden (fart, svårighet) som konstanter överst i `spel.js` med kommentarer, så att de är lätta att leka med.
- Spelen ska fungera med tangentbord **och** touch (mobil/surfplatta).
- Relativa sökvägar överallt, eftersom sajten ligger under `/<repo-namn>/` på GitHub Pages.
- Äldre spel byggda som React-artefakter (.tsx) konverteras till en fristående index.html med `verktyg/bygg-react.sh` (esbuild, React bakas in). Lägg till `<script src="../../delat/hem.js"></script>` före `</body>` i fristående spel så att 🏠-knappen tillbaka till spelhallen finns.
- Charlies Poolparty (originalet) styrs bara med tangentbord och ska lämnas orört. Vidareutveckling sker i `spel/charlies-poolparty-2/` (touch, 6 banor, stjärnor). Där ligger spellogiken i `spel.js` (räknar i pixlar 960×540) och all 3D-grafik i `grafik.js` (Three.js, 1 enhet = 40 px). Banornas nåbarhet kan testas med testkrokarna på `window.__poolparty2` (steg, ogonblick, aterstall).
- Förstapersonsspel (städa/sortera/samla) bygger på `delat/fp/` (Spelare, Interaktor, Hand, Smuts, Sparning, Butik, ljud, FpUI). Utgå från `spel/testrummet/` (Trollstaven) som mall. `Interaktor.blockerare` (t.ex. väggar) stoppar siktet och `Smuts.raknaSomRen(...)` räknar golv under väggar som rent. Magi finns i `delat/fp/magi.js` (Trollstav, Levitation med `kapacitet` för flera saker samtidigt och `flyg(..., { fordrojning })`, Gnistor) och `ljud.saga(text)` läser upp svensk text. Exponera spelets objekt på `window.__<spelid>` så att det kan testas automatiskt.
- Undantag: Soptippsvägen 1 (spel/printa-hem) är bara för dator med tangentbord och mus (beslut 2026-11-15). Lägg inte tillbaka touch. (`Spelare` och `FpUI` tar `touch: false`.)
- Testa alltid i headless Chrome (Playwright) före leverans: inga sidfel, och klicka igenom kärnloopen.
- Styrning i förstapersonsspel: muslåsning nekas ibland (inbäddade rutor, vissa webbläsare). `Spelare` växlar då automatiskt till reservläge (fri mus styr vyn, kanterna svänger, klick används direkt). Barnvänliga val: `new Spelare(..., { pilarSvanger: true })` (← → svänger, ↑ ↓ går) och `new FpUI({ escPausar: true })` (Esc pausar/fortsätter). Printa Hem har egen Esc-hantering och använder inte `escPausar`.
- Mobilappen **Familjens Spel** ligger i `mobil/` (PWA för Android, `sw.js` i roten för offline). Nya spel syns där automatiskt; sätt `mobil: false` i `spel-lista.js` för spel som bara funkar på dator. Kör `python3 verktyg/mobil-filer.py` efter nya/ändrade spel. Familjens topplista bygger på `rekord:<mapp>`, så spara ett rekord i nya spel om de ska ha topplista. Ändra inte `familjens-spel`-raden i `index.html` (den skickar tillbaka till appen).
- Alla spel har `<script src="../../delat/rost.js"></script>` först i `<head>` (rösten säger annars "versal Ö"). Lägg in den i nya spel också (finns i `_mall`).
- Nya spel för appen ska vara mobilvänliga på riktigt: stående telefon, bara tryck/dra, ingen styrning med joystick, stora knappar.
