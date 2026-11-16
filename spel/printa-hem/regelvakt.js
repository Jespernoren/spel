// =============================================================
//  regelvakt.js – EL 29: en kontroll av allt som syns, varje sekund
//  Varje regel är en funktion som returnerar en lista med brott (strängar).
//  Brotten loggas (AX läser dem som flaggor) och visas som en röd rad i testläget (?test).
// =============================================================
export function skapaRegelvakt({ logg, test = false, intervall = 1000 }) {
  const regler = [];
  const sett = new Map();   // flagga|text → senast loggad (ms)
  let rad = null;
  if (test && typeof document !== 'undefined') {
    rad = document.createElement('div');
    rad.style.cssText = 'position:fixed;left:8px;bottom:8px;z-index:9999;max-width:46vw;padding:6px 10px;border-radius:8px;background:rgba(160,20,20,.92);color:#fff;font:700 12px/1.35 system-ui;pointer-events:none;display:none;white-space:pre-line';
    document.body.appendChild(rad);
  }
  const api = {
    /** regel(flagga, fn): fn() → [] eller ['text', …] */
    regel(flagga, fn, { enGang = false } = {}) { regler.push({ flagga, fn, enGang }); },
    /** kör alla regler nu; ger alla aktuella brott */
    kor() {
      const nu = typeof performance !== 'undefined' ? performance.now() : Date.now(), brott = [];
      for (const r of regler) {
        let lista = [];
        try { lista = r.fn() || []; } catch (e) { lista = []; }
        for (const text of lista) {
          brott.push(`${r.flagga}: ${text}`);
          const k = r.flagga + '|' + text, f = sett.get(k);
          if (f != null && (r.enGang || nu - f < 120000)) continue;   // samma brott loggas högst en gång per 2 min
          sett.set(k, nu); logg(r.flagga, text);
        }
      }
      if (rad) { rad.textContent = brott.slice(0, 6).join('\n'); rad.style.display = brott.length ? '' : 'none'; }
      return brott;
    },
    /** rapportera ett brott som upptäcks av en händelse (inte av en regel) */
    brott(flagga, text) { logg(flagga, text); },
    starta() { setInterval(() => api.kor(), intervall); return api; },
  };
  return api;
}
