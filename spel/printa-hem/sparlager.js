// inkorg 75 (A-130): sparningen som inte försvinner.
// Allt som har med lagringen att göra, utom själva spelläget: IndexedDB som andra lager bredvid localStorage,
// koll av om lagringen är tillfällig (privat fönster), och fil in/ut. spel.js använder det före `new Sparning`.
//
// IndexedDB 'printahem-spar', en tabell 'kv' med nycklarna:
//   senaste  – { json, tid, lsFel }  en spegel av huvudsparningen (lsFel: localStorage gick inte att skriva, t.ex. fullt)
//   auto     – [{ dag, nar, tid, mynt, json }]  de tre automatiska sparningarna (senaste, gårdagens, förrgårdens)
//   dagar    – [{ dag, tid, mal, trivsel, respekt, mynt, data }]  bokmärkena per dag (låg förut i localStorage och fyllde den)
//   trasiga  – [{ tid, raw, fel }]  sparningar som inte gick att läsa, sparade undan

const DB_NAMN = 'printahem-spar', TABELL = 'kv';
let dbLofte = null;
function oppna() {
  if (dbLofte) return dbLofte;
  dbLofte = new Promise((res) => {
    try {
      const r = indexedDB.open(DB_NAMN, 1);
      r.onupgradeneeded = () => { try { r.result.createObjectStore(TABELL); } catch {} };
      r.onsuccess = () => res(r.result);
      r.onerror = () => res(null); r.onblocked = () => res(null);
    } catch { res(null); }
    setTimeout(() => res(null), 2500);   /* en låst eller trasig databas får aldrig hindra spelet från att starta */
  });
  return dbLofte;
}
export async function idbHamta(nyckel) {
  const db = await oppna(); if (!db) return null;
  return new Promise((res) => {
    try { const r = db.transaction(TABELL).objectStore(TABELL).get(nyckel); r.onsuccess = () => res(r.result ?? null); r.onerror = () => res(null); } catch { res(null); }
    setTimeout(() => res(null), 2500);
  });
}
export async function idbSpara(nyckel, varde) {
  const db = await oppna(); if (!db) return false;
  return new Promise((res) => {
    try { const t = db.transaction(TABELL, 'readwrite'); t.objectStore(TABELL).put(varde, nyckel); t.oncomplete = () => res(true); t.onerror = () => res(false); t.onabort = () => res(false); } catch { res(false); }
  });
}

/* En sparning är giltig om den är ett objekt med spelets grundfält i rätt form. Allt annat räknas som trasigt. */
export function giltigSparning(d) {
  if (!d || typeof d !== 'object' || Array.isArray(d)) return false;
  const tal = (v) => v == null || Number.isFinite(v);
  const lista = (v) => v == null || Array.isArray(v);
  return tal(d.steg) && tal(d.dag) && tal(d.mynt) && lista(d.hotbar) && lista(d.lappar) && lista(d.placerade) && (d.kvarn == null || typeof d.kvarn === 'object');
}
export function lasJson(raw) {
  if (raw == null) return { finns: false };
  try { const d = JSON.parse(raw); return giltigSparning(d) ? { finns: true, data: d } : { finns: true, fel: 'sparningen har fel form' }; }
  catch (e) { return { finns: true, fel: String(e?.message || e).slice(0, 160) }; }
}

/* Är lagringen tillfällig? Privat fönster/inkognito raderar allt när fönstret stängs.
   Chromium: kvoten i inkognito är liten (2 GB i våra tester, vanligt fönster tiotals GB).
   Firefox och Safari: OPFS (navigator.storage.getDirectory) nekas i privata fönster. */
export async function lagringsKoll() {
  const ut = { lsOk: true, bestandig: false, kvot: null, privat: false, skal: [] };
  try { localStorage.setItem('__lagringstest', '1'); localStorage.removeItem('__lagringstest'); } catch { ut.lsOk = false; ut.skal.push('localStorage går inte att skriva'); }
  const vanta = (p, ms, v) => Promise.race([p, new Promise((r) => setTimeout(() => r(v), ms))]);
  try { ut.bestandig = !!(await vanta(navigator.storage?.persisted?.() ?? Promise.resolve(false), 800, false)); } catch {}
  if (!ut.bestandig) { try { ut.bestandig = !!(await vanta(navigator.storage?.persist?.() ?? Promise.resolve(false), 1200, false)); } catch {} }
  try { ut.kvot = (await vanta(navigator.storage?.estimate?.() ?? Promise.resolve(null), 800, null))?.quota ?? null; } catch {}
  if (!ut.bestandig && ut.kvot != null && performance?.memory && ut.kvot < 4e9) ut.skal.push(`liten kvot (${Math.round(ut.kvot / 1e6)} MB)`);
  try { if (navigator.storage?.getDirectory) await vanta(navigator.storage.getDirectory(), 800, null); } catch (e) { ut.skal.push('OPFS nekas: ' + (e?.name || e)); }
  ut.privat = !ut.bestandig && ut.skal.length > 0;
  return ut;
}

/* Spara en text som fil på datorn (en nedladdning). */
export function sparaFil(namn, text, typ = 'application/octet-stream') {
  try {
    const u = URL.createObjectURL(new Blob([text], { type: typ }));
    const a = document.createElement('a'); a.href = u; a.download = namn; a.click();   /* läggs inte i sidan: spelets observatörer på body gör att Chrome tappar filnamnet */
    setTimeout(() => URL.revokeObjectURL(u), 4000); return true;
  } catch { return false; }
}
/* Låt spelaren välja en fil och läs den som text (null om man avbryter). */
export function valjFil(accept = '.json,application/json') {
  return new Promise((res) => {
    const i = document.createElement('input'); i.type = 'file'; i.accept = accept; i.style.display = 'none';
    i.onchange = () => { const f = i.files?.[0]; i.remove(); if (!f) return res(null); f.text().then((t) => res({ namn: f.name, text: t }), () => res(null)); };
    document.body.appendChild(i); i.click();
    addEventListener('focus', () => setTimeout(() => { if (!i.files?.length) { i.remove(); } }, 1500), { once: true });
  });
}
export const filDatum = (t = new Date()) => `${t.getFullYear()}-${String(t.getMonth() + 1).padStart(2, '0')}-${String(t.getDate()).padStart(2, '0')}`;
export const filNamnDel = (s) => String(s || 'spelare').normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') || 'spelare';
