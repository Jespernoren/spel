// =============================================================
//  MOLNET – familjens gemensamma topplista
//
//  Fyll i DATABAS_URL med adressen till er Firebase Realtime Database,
//  t.ex. 'https://familjens-spel-default-rtdb.europe-west1.firebasedatabase.app'
//
//  Tom adress = poängen sparas bara på den här telefonen.
//  Allt sparas alltid lokalt först och skickas upp när det finns internet.
// =============================================================
export const DATABAS_URL = '';

const ROT = 'familjens-spel';           // mappen i databasen
const KO_NYCKEL = 'familj:ko';          // ändringar som väntar på internet
const MOLN_NYCKEL = 'familj:moln';      // senaste kopian från molnet

const las = (n, std) => { try { const v = localStorage.getItem(n); return v === null ? std : JSON.parse(v); } catch { return std; } };
const skriv = (n, v) => { try { localStorage.setItem(n, JSON.stringify(v)); } catch {} };

export const molnPa = () => !!DATABAS_URL;

// Lägg en ändring i kön. sokvag = t.ex. 'poang/slalom/charlie', varde = { poang, tid }
export function koa(sokvag, varde) {
  const ko = las(KO_NYCKEL, {});
  ko[sokvag] = varde;
  skriv(KO_NYCKEL, ko);
}

// Skicka allt i kön. Returnerar true om kön är tom efteråt.
export async function skicka() {
  const ko = las(KO_NYCKEL, {});
  if (!molnPa() || !Object.keys(ko).length) return !Object.keys(ko).length;
  try {
    // PATCH med flera sökvägar på en gång (Firebase "multi-path update")
    const r = await fetch(`${DATABAS_URL}/${ROT}.json`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(ko),
    });
    if (!r.ok) return false;
    // Ta bara bort det vi skickade (något nytt kan ha kommit under tiden)
    const nu = las(KO_NYCKEL, {});
    for (const k of Object.keys(ko)) if (JSON.stringify(nu[k]) === JSON.stringify(ko[k])) delete nu[k];
    skriv(KO_NYCKEL, nu);
    return true;
  } catch { return false; }
}

// Hämta hela familjens data. Faller tillbaka på senaste kopian om nätet saknas.
export async function hamta() {
  if (!molnPa()) return null;
  try {
    const r = await fetch(`${DATABAS_URL}/${ROT}.json`, { cache: 'no-store' });
    if (!r.ok) throw new Error(r.status);
    const data = (await r.json()) || {};
    skriv(MOLN_NYCKEL, data);
    return data;
  } catch {
    return las(MOLN_NYCKEL, null);
  }
}
