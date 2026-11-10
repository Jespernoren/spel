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
- Förstapersonsspel (städa/sortera/samla) bygger på `delat/fp/` (Spelare, Interaktor, Hand, Smuts, Sparning, Butik, ljud, FpUI). Utgå från `spel/testrummet/` som mall. Exponera spelets objekt på `window.__<spelid>` så att det kan testas automatiskt.
- Testa alltid i headless Chrome (Playwright) före leverans: inga sidfel, och klicka igenom kärnloopen.
