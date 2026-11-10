# 🎮 Noréns spelhall

Enkla 3D-spel som körs direkt i webbläsaren. Byggda med [Three.js](https://threejs.org), utan installation och utan byggsteg.
Publiceras automatiskt med GitHub Pages.

## Struktur

```
index.html          ← spelhallen: startsida med filter per spelare, senast spelat, rekord
spel-lista.js       ← listan över spel (lägg till nya här)
delat/
  motor.js          ← gemensam kod: scen, kamera, ljus, styrning, meny, rekord
  stil.css          ← gemensam stil: HUD, menyer
  extra.js/.css     ← tillägg: paus-meny (Esc), touch-knappar, ljud och röst (används av Slalom)
spel/
  _mall/            ← mall för nya spel (kopiera denna)
  slalom/           ← ett spel = en mapp med index.html + spel.js
```

## Göra ett nytt spel (3 steg)

1. **Kopiera** mappen `spel/_mall` till `spel/mitt-spel` (bara små bokstäver, inga mellanslag eller åäö i mappnamnet)
2. **Ändra** `SPEL_ID` i `spel/mitt-spel/spel.js` till `'mitt-spel'` och bygg spelet där
3. **Lägg till** spelet i `spel-lista.js` (kopiera ett befintligt block):
   ```js
   { mapp: "mitt-spel", namn: "Mitt spel", ikon: "🚀", beskrivning: "Kort text",
     typ: "Plattform", spelare: ["Charlie"], farg: ["#ff5fa2", "#ffc46b"], status: "klar" },
   ```
   `status: "snart"` visar spelet gråtonat med etiketten *Snart*. `ny: true` ger etiketten *Ny!*.

**Lägga in ett färdigt HTML-spel** (t.ex. ett gammalt Claude-spel): skapa `spel/<mapp>/`, lägg filen där som `index.html` och sätt `status: "klar"` i listan. Spelet behöver inte använda motor.js.

Pusha till `main` så ligger spelet live efter ungefär en minut.

## Vad finns i motor.js?

| Funktion | Gör |
|---|---|
| `skapaSpel({ bakgrund, dimma })` | Skapar scen, kamera, ljus och renderare |
| `startaLoop(uppdatera, {...})` | Kör `uppdatera(dt)` varje bildruta |
| `knappar` | `vanster`, `hoger`, `upp`, `ner`, `hopp` (tangentbord + touch) |
| `skapaHud()` | Text uppe till vänster: `hud('Poäng: 5')` |
| `visaMeny({ titel, text, knapp, onStart })` | Start- eller game over-skärm |
| `rekord('spelnamn')` | `.hamta()` / `.spara(poang)`, sparas i webbläsaren |
| `slump(min, max)`, `begransa(v, min, max)` | Små hjälpfunktioner |

## Vad finns i extra.js?

Fristående tillägg (rör inte motor.js). Länka `delat/extra.css` i spelets index.html.

| Funktion | Gör |
|---|---|
| `knappar(karta, touch)` | Egna tangenter + stora touch-knappar, `tryckt('hopp')` ger sant en gång |
| `visaMeny({ titel, text, html, knappar })` | Meny med flera knappar, t.ex. paus- eller resultatskärm |
| `lyssnaPaus(fn)` | Esc, P och ⏸-knapp anropar `fn` |
| `tillHallen()` | Tillbaka till spelhallen |
| `skapaLjud()` | `ton`, `brus`, `loop` (t.ex. vind), `tala('Kör!')` på svenska, `vaxla()` ljud på/av |
| `hamta(nyckel)`, `spara(nyckel, v)` | localStorage med JSON |
| `slump(fro)` | Slump med frö: samma frö ger samma bana |

## Förstapersonsmotorn (delat/fp/)

För 3D-spel där man går runt och gör saker (städa, sortera, samla). Importera allt på en rad:
```js
import { Spelare, Interaktor, Hand, Smuts, Sparning, Butik, ljud, FpUI } from '../../delat/fp/index.js';
```

| Del | Gör |
|---|---|
| `Spelare` | Gå med WASD/pilar + mus, Shift spring, Space hopp. Touch: joystick vänster, titta höger. `hinder` (Box3) och `granser` för väggar |
| `Interaktor` | Det hårkorset pekar på. `registrera(obj, { text, aktivera, kanAktivera })`, `traffa([mesh])` för ytor |
| `Hand` | Bära saker framför kameran (`plocka`, `lagg`, `kapacitet`) |
| `Smuts` | Smutsig yta som borstas ren (`borsta(x,z,radie)`, `procent`, spara/ladda) |
| `Sparning` | Sparar automatiskt i webbläsaren (`data`, `spara()`, `nollstall()`) |
| `Butik` | Mynt + uppgraderingar med nivåer och effekter |
| `ljud` | Syntetiska ljud: plock, placera, borsta, mynt, klar, fel, köp |
| `FpUI` | Hårkors, framstegsmätare, mynt, meddelanden, start/paus, butik, touchknappar |

Se `spel/testrummet/spel.js` för ett komplett exempel som använder allt.

## Dela ett spel

Direktlänk: lägg till `#mappnamn` på spelhallens adress, t.ex. `.../index.html#slalom`.

## Testa lokalt

Spelen använder JavaScript-moduler, så de fungerar inte om man bara dubbelklickar på filen. Välj ett av:
- **VS Code:** installera tillägget *Live Server*, högerklicka på `index.html` → *Open with Live Server*
- **Terminal:** `python3 -m http.server` i mappen och öppna http://localhost:8000
- Eller pusha och testa direkt på GitHub Pages-länken

## Publicera (en gång)

Repo → **Settings → Pages** → Source: *Deploy from a branch* → Branch: `main` / `(root)` → Save.
