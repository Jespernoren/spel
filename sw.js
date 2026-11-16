// =============================================================
//  Service worker för appen "Familjens Spel" (mobil/)
//
//  Gör att spelen fungerar utan internet:
//  - Sidor och spelfiler: hämtas från nätet om det går (så nya versioner syns),
//    annars från telefonens sparade kopia.
//  - Three.js från jsDelivr: sparas första gången och tas sedan från telefonen.
//  Spel med  mobil: false  i spel-lista.js sparas aldrig (t.ex. Soptippsvägen 1 är 115 MB).
// =============================================================
const CACHE_NAMN = 'familjens-spel-v1';   // samma namn som i mobil/app.js
const VANTA_PA_NATET_MS = 2500;           // sedan används sparad kopia

self.window = self;                       // spel-lista.js skriver till window.SPEL
importScripts('spel-lista.js');
const UTESLUTNA = (self.SPEL || []).filter((s) => s.mobil === false).map((s) => `spel/${s.mapp}/`);

const BAS = new URL('./', self.location).pathname; // t.ex. /spel/

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE_NAMN).then((c) => c.addAll([
    'mobil/', 'mobil/index.html', 'mobil/app.js', 'mobil/moln.js', 'mobil/stil.css',
    'mobil/manifest.webmanifest', 'mobil/ikon-192.png', 'index.html', 'spel-lista.js', 'delat/hem.js',
  ]).catch(() => {})));
  self.skipWaiting();
});
self.addEventListener('activate', (e) => e.waitUntil(self.clients.claim()));

function skaSparas(url) {
  if (url.origin === self.location.origin) {
    const vag = url.pathname.slice(BAS.length);
    if (!url.pathname.startsWith(BAS) || vag.startsWith('verktyg/')) return false;
    return !UTESLUTNA.some((u) => vag.startsWith(u));
  }
  return url.hostname === 'cdn.jsdelivr.net' || url.hostname === 'cdnjs.cloudflare.com';
}

self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (!skaSparas(url)) return;                 // vanlig hämtning, ingenting sparas

  // Bibliotek från nätet ändras aldrig (fast version) → telefonen först
  if (url.origin !== self.location.origin) {
    e.respondWith(caches.open(CACHE_NAMN).then(async (c) => {
      const sparad = await c.match(req);
      if (sparad) return sparad;
      const svar = await fetch(req);
      if (svar.ok) c.put(req, svar.clone());
      return svar;
    }));
    return;
  }

  // Egna filer → nätet först, sparad kopia om nätet är långsamt eller borta
  e.respondWith((async () => {
    const c = await caches.open(CACHE_NAMN);
    const fran_natet = fetch(req).then((svar) => {
      if (svar.ok && svar.type === 'basic') c.put(req, svar.clone());
      return svar;
    });
    const sparad = await c.match(req, { ignoreSearch: true });
    if (!sparad) return fran_natet.catch(() => offlineSvar(req));
    const timeout = new Promise((ok) => setTimeout(() => ok(sparad), VANTA_PA_NATET_MS));
    return Promise.race([fran_natet.catch(() => sparad), timeout]);
  })());
});

function offlineSvar(req) {
  if (req.mode === 'navigate') {
    return new Response(`<!doctype html><meta charset="utf-8"><meta name="viewport" content="width=device-width">
      <body style="font-family:system-ui;background:#140d33;color:#fff;display:grid;place-items:center;min-height:100vh;text-align:center;padding:20px">
      <div><div style="font-size:70px">📴</div><h2>Inget internet</h2>
      <p style="color:#b6addf">Det här spelet är inte sparat på telefonen än.<br>Öppna ⚙️ och tryck "Spara alla spel" när du har internet.</p>
      <p><a href="${BAS}mobil/" style="color:#ffd43b;font-size:20px">⬅ Tillbaka</a></p></div>`,
      { headers: { 'Content-Type': 'text/html; charset=utf-8' } });
  }
  return new Response('', { status: 504 });
}
