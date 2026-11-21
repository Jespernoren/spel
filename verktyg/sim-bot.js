// Soptippsvägen 1 – punkt AX: en simuleringsbot som spelar kapitel 1 (dag 1–5) som en spelare.
// Laddas i sidan av verktyg/sim-kapitel1.mjs. Tiden är virtuell: setTimeout, setInterval, requestAnimationFrame
// och performance.now går på spelets klocka, så att sms, brev och repliker kommer i rätt ordning och på rätt speltid.
// Boten går (4,5 m/s), plockar, mal, vevar, trampar, printar, köper och säljer via spelets egna funktioner.
// Allt som visas eller läses upp loggas med tid och källa (window.__textLogg i spel.js).
(() => {
  const H = window.__printahem, S = H.S;
  /* inkorg 52: TESTKROK I STÄLLET FÖR SPELARE – veva och trampa räknas bara som spelarens om siktet står på veven/cykeln (som med riktig mus) */
  { const traff = (mal) => { const h = H.interaktorObj?.().hovrad; if (!h || !mal) return false; for (let x = h; x; x = x.parent) if (x === mal) return true; return false; };
    for (const [f, mal] of [['veva', () => H.vevYtaObj?.()], ['trampa', () => H.cykelObj?.()]]) { const o = H[f]; if (typeof o === 'function') H[f] = (...a) => { if (!traff(mal())) H.regelvakt?.brott?.('TESTKROK I STÄLLET FÖR SPELARE', `${f} utan att siktet står på ${f === 'veva' ? 'veven' : 'cykeln'}`); return o.apply(H, a); }; } }
  /* A-081 Nybörjarboten (window.__nyborjare): samma händer som AX, men den vet bara det som syns – målrutan, pilen och det som sägs.
     Den går långsammare, läser 60 ms per tecken, följer pilen (inte koden), tittar runt när målet är otydligt, går fel ibland och
     använder bara kontroller som spelet har förklarat. Flaggorna samlas i window.__nyFlaggor. */
  const NY = !!window.__nyborjare;
  const GA_FART = NY ? 3.0 : 5.2;          // m/s, samma som spelaren (FART_UTAN) – nybörjaren går försiktigt
  const LASFART = NY ? 1000 / 60 : 15;   // tecken per sekund när ett meddelande läses (nybörjaren: 60 ms per tecken)
  const MENY_TID = 1.5;         // sekunder att hitta i en meny
  const V = window.__vt;
  const logg = [], handlingar = [], dagar = [];
  let tid = 0, dagStart = 0, senasteSteg = -1, senasteMal = '';
  const fmt = (s) => `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, '0')}`;
  window.__textLogg = (kalla, vem, text, varfor = '') => {
    text = String(text).replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim(); if (!text) return;
    const e = { t: tid - dagStart, tot: tid, dag: S.dag, kalla, vem: String(vem || ''), text, varfor: String(varfor || ''), steg: H.stegText?.() || '', mynt: S.mynt };
    if (kalla === 'sak' || kalla === 'sms-bubbla' || kalla === 'lapp') { try { const ia = inaktuell(text); if (ia) e.inaktuell = ia; } catch {} }
    logg.push(e);
  };
  // EA: AX:s egna villkor – oberoende av spelets. En text som visas fast det här gäller flaggas INAKTUELL.
  const printatAx = (k) => (S.printTot || {})[k] || 0;
  const varaAvNamn = (n) => Object.entries(H.VAROR || {}).find(([, v]) => v.namn === n)?.[0];
  function inaktuell(text) {
    if (/Ström som sparas hade varit/.test(text) && (S.powerbank || S.batteriKopt)) return 'har redan powerbanken/batteriet';
    if (/rita en skräpgrip åt mig/.test(text) && S.ritningar.includes('grip')) return 'gripen är redan köpt';
    if (/Gripen kostar femtio/.test(text) && S.ritningar.includes('grip')) return 'gripen är redan köpt';
    if (/Sälj den till Ali/.test(text) && (S.stat.salt || 0) > 0) return 'har redan sålt';
    if (/Skulle jag kunna göra filament/.test(text) && S.kvarnKopt) return 'kvarnen är redan köpt';
    if (/Nu lägger jag den i Rolfs brevlåda/.test(text) && S.post?.tillRolf) return 'gåvan ligger redan i lådan';
    if (/receptet till blomkrukan/.test(text) && printatAx('kruka') > 0) return 'krukan är redan printad';
    { const m = /3D-modellen till (.+?) låg med i brevet/.exec(text); if (m) { const k = varaAvNamn(m[1]); if (k && (printatAx(k) > 0 || S.post?.tillRolf === k)) return `${m[1]} är redan printad`; } }
    if (/Plocka upp Rolfs sopsäck/.test(text) && S.korg) return 'säcken är redan upplockad';
    if (/behöver nåt å bära i/.test(text) && S.korg) return 'säcken är redan upplockad';
    if (/Den stannar när jag slutar trampa/.test(text) && S.powerbank) return 'har powerbanken';
    return '';
  }
  // ui.toast och morgonkortet går via FpUI – fånga dem här
  const toast0 = H.ui.toast.bind(H.ui); H.ui.toast = (t, typ) => { window.__textLogg('toast', typ || '', t); return toast0(t, typ); };
  const start0 = H.ui.visaStart.bind(H.ui); H.ui.visaStart = (titel, text, knapp) => { window.__textLogg('morgonkort', titel, String(titel) + ' · ' + String(text || '')); return start0(titel, text, knapp); };
  const handling = (text) => { handlingar.push({ t: tid - dagStart, tot: tid, dag: S.dag, text, mynt: S.mynt }); if (window.__simUtforlig) console.log(`[sim]   ${fmt(tid - dagStart)} ${text}`); };

  // ---------- A-081: nybörjarens ögon ----------
  const nyFlaggor = []; window.__nyFlaggor = nyFlaggor;
  const nyFlagga = (typ, text) => { nyFlaggor.push({ dag: S.dag, t: tid - dagStart, tot: tid, typ, text: String(text).slice(0, 160), steg: H.stegId?.() || '' }); if (window.__simUtforlig) console.log(`[sim]   ⚑ ${typ}: ${text}`); };
  let nySlump = 12345; const slump = () => (nySlump = (nySlump * 16807) % 2147483647) / 2147483647;   // samma "misstag" varje körning
  const pilPos = () => (H.malPil?.visible ? H.malPil.getWorldPosition(new H.spelare.pos.constructor()) : null);
  const nyFramsteg = { k: '', t: 0 };
  const nyMalSteg = { steg: -1, t: 0, forsta: 0, forvirrad: false, fast: false, avvek: false };
  // kontroller: första gången en kontroll används måste spelet ha förklarat den (en text som nämner den har visats)
  const KONTROLL = { trampa: /trampa|Trampa|pedal/, veva: /[Vv]eva/, byta: /mushjul|1–9|verktygsraden|Byt sak/, ryggsack: /ryggsäck|Ryggsäck|\bE\b/, vrida: /\bR\b|vrid/i, montera: /[Mm]ontera|skruv/, kasta: /\bQ\b|[Ss]läpp/ };
  const kontrollAnvand = new Set();
  function nyKontroll(namn) {
    if (!NY || kontrollAnvand.has(namn)) return; kontrollAnvand.add(namn);
    const re = KONTROLL[namn]; if (re && !logg.some((e) => re.test(e.text))) nyFlagga('NY SAK UTAN FÖRKLARING', `${namn}: ingen text eller bild har förklarat det innan första gången`);
  }
  if (NY) for (const [f, k] of [['trampa', 'trampa'], ['veva', 'veva'], ['byt', 'byta']]) { const o = H[f]; if (typeof o === 'function') H[f] = (...a) => { nyKontroll(k); return o.apply(H, a); }; }
  async function nyLasMal() {   // läs målrutan (60 ms per tecken) och vänd dig mot pilen innan du gör något
    if (!NY) return;
    if (nyMalSteg.steg !== S.steg) { Object.assign(nyMalSteg, { steg: S.steg, t: tid, forsta: 0, forvirrad: false, fast: false, avvek: false, forstaGa: true }); }
    else return;
    const t = (document.querySelector('.nasta-rubrik')?.textContent || '') + ' ' + (document.querySelector('.nasta-t')?.textContent || '');
    await lasTid(H.lasTid(t.trim()) / 1000);
    const pp = pilPos();
    if (!pp) { handling('nybörjaren ser ingen pil – tittar runt'); for (let i = 0; i < 8; i++) { H.spelare.yaw += Math.PI / 4; await vanta(0.5); } }
    else { titta(pp); await vanta(0.6); }
  }

  // ---------- tid ----------
  const synligt = (el) => el && !el.hidden && el.offsetParent !== null || (el && !el.hidden && getComputedStyle(el).display !== 'none' && el.isConnected);
  function tick(dt = 0.1) {
    V.fram(dt * 1000);
    if (!H.pausad()) H.uppdatera(dt);
    tid += dt;
    if (S.steg !== senasteSteg) { senasteSteg = S.steg; const m = H.stegText(); if (m !== senasteMal) { senasteMal = m; window.__textLogg('MÅL', '', m || '(inga mål)'); if (window.__taBild) bildVantar = { mal: m || '(inga mål)' }; } }
    if (window.__taBild && tid >= nastaBild) { nastaBild = tid + (window.__bildIntervall || 2); bildVantar = bildVantar || {}; }
  }
  /* A-085: inspelning – en bildruta varannan sekund speltid och en skärmdump varje gång målet byts (sim-kapitel1 med INSPELNING=mapp) */
  let nastaBild = 0, bildVantar = null;
  async function taBildOmVantar() {
    if (!bildVantar || !window.__taBild) return;
    const b = bildVantar; bildVantar = null;
    try { H.rendera?.(); } catch {}
    await window.__taBild({ dag: S.dag, t: Math.round((tid - dagStart) * 10) / 10, mal: b.mal || null, steg: H.stegId?.() || '' });
  }
  async function vanta(sek) {
    const slut = tid + sek;
    while (tid < slut) {
      tick(0.1);
      if (Math.round(tid * 10) % 5 === 0) await stangPopups();
      if (Math.round(tid * 10) % 20 === 0) await new Promise((r) => V.verklig(r, 0));
      if (bildVantar) await taBildOmVantar();
    }
  }
  // popups: läs (tid efter längd) och klicka vidare
  let iPopup = false, iButik = false;
  async function stangPopups() {
    if (iPopup) return; iPopup = true;
    try {
      for (let varv = 0; varv < 20; varv++) {
        const med = H.medEl2;
        if (med && !med.hidden && med.innerHTML) {
          const txt = med.innerText || ''; const knappar = [...med.querySelectorAll('button')].filter((b) => !b.disabled && !b.dataset.lasupp && b.offsetParent !== null && !b.classList.contains('ph-rostknapp'));
          if (!knappar.length) { await lasTid(1); continue; }
          await lasTid(Math.min(14, 1.2 + txt.length / LASFART));
          const k = knappar.find((b) => /stäng|ok|fortsätt|läst|klar|tack|lägg på|vidare|svara/i.test(b.textContent)) || knappar[0];
          handling(`popup: "${k.textContent.trim().slice(0, 30)}"`); k.click(); await lasTid(0.3); continue;
        }
        const ov = H.ui.overlay;
        if (ov && !ov.hidden && ov.querySelector('.fp-knapp')) {
          await lasTid(Math.min(10, 1.5 + (ov.innerText || '').length / (LASFART * 2)));
          const k = ov.querySelector('.fp-knapp'); handling(`kort: "${k.textContent.trim()}"`); k.click(); await lasTid(0.3); continue;
        }
        const bo = H.ui.butiksOverlay;
        if (!iButik && bo && !bo.hidden) {   // paneler (Rolfs postlåda, fynd, Helen …): läs och stäng
          await lasTid(Math.min(8, 1.5 + (bo.innerText || '').length / (LASFART * 2)));
          const k = bo.querySelector('[data-fynd-ok], .fp-knapp.primar, button.primar'); handling(`panel: "${(bo.innerText || '').trim().slice(0, 30)}"`);
          if (k) k.click(); else H.ui.stangButik(); await lasTid(0.3); continue;
        }
        // B55: telefonscenen när kapitel 1 är klart (.ph-kap) – vänta tills knappen går att trycka på
        const tel = document.querySelector('.ph-kap'); if (tel) { const k = tel.querySelector('button'); if (k && !k.disabled) { await lasTid(1.5); handling(`telefonscen: "${k.textContent.trim().slice(0, 30)}"`); k.click(); } else await lasTid(1); continue; }
        const kap = document.querySelector('.ph-kapkort button, .ph-rangkort button');
        if (kap) { await lasTid(3); kap.click(); continue; }
        break;
      }
    } finally { iPopup = false; }
  }
  async function lasTid(sek) { const slut = tid + sek; while (tid < slut) { tick(0.1); } await new Promise((r) => V.verklig(r, 0)); }

  // ---------- rörelse och klick ----------
  const pos = (o) => o.getWorldPosition ? o.getWorldPosition(new H.spelare.pos.constructor()) : o;
  let nyGar = false;
  async function ga(x, z, namn) {
    const p = H.spelare.pos, d = Math.hypot(x - p.x, z - p.z);
    if (d < 0.6) return;
    if (NY && !nyGar && nyMalSteg.forstaGa) {   /* A-081: nybörjaren följer pilen (första gången den går efter ett nytt mål) – pekar den någon annanstans går den dit först, tittar sig om och går sedan rätt */
      nyGar = true; nyMalSteg.forstaGa = false;
      try {
        const pp = pilPos();
        if (pp && Math.hypot(pp.x - x, pp.z - z) > 6 && Math.hypot(pp.x - p.x, pp.z - p.z) > 2) {
          if (!nyMalSteg.avvek) { nyMalSteg.avvek = true; nyFlagga('FÖRVIRRAD', `pilen pekar ${Math.hypot(pp.x - x, pp.z - z).toFixed(0)} m från där målet görs (${namn || 'okänt'})`); }
          await ga(pp.x, pp.z, 'dit pilen pekar'); for (let i = 0; i < 4; i++) { H.spelare.yaw += Math.PI / 2; await vanta(0.6); }
        } else if (slump() < 0.08) { const v = slump() * Math.PI * 2; await ga(p.x + Math.cos(v) * 4, p.z + Math.sin(v) * 4, 'fel håll en bit'); await vanta(1); }
      } finally { nyGar = false; }
    }
    const steg = Math.ceil(d / 2);
    for (let i = 1; i <= steg; i++) { p.set(p.x + (x - p.x) / (steg - i + 1), 0, p.z + (z - p.z) / (steg - i + 1)); await vanta(Math.min(d, 2) / GA_FART); }
    if (namn) handling(`gå till ${namn} (${d.toFixed(0)} m)`);
  }
  async function gaTill(o, avst = 1.4, namn) {
    const m = pos(o), p = H.spelare.pos, d = Math.hypot(m.x - p.x, m.z - p.z);
    if (d <= avst) { titta(m); return; }
    const k = (d - avst) / d; await ga(p.x + (m.x - p.x) * k, p.z + (m.z - p.z) * k, namn); titta(m);
  }
  /* inkorg 52: som en spelare – gå runt saken tills siktet står på den (veven syns inte från alla håll) */
  async function siktaPa(o) {
    const traff = () => { const h = H.interaktorObj?.().hovrad; for (let x = h; x; x = x.parent) if (x === o) return true; return false; };
    await vanta(0.15); if (traff()) return true;
    const m = pos(o), p0 = H.spelare.pos.clone();
    for (const r of [1.3, 0.9, 1.8]) for (let i = 0; i < 12; i++) { const v = i * Math.PI / 6; H.spelare.pos.set(m.x + Math.sin(v) * r, p0.y, m.z + Math.cos(v) * r); titta(m); await vanta(0.15); if (traff()) return true; }
    H.spelare.pos.copy(p0); titta(m); return false;
  }
  function titta(m) { const p = H.spelare.pos, d = Math.hypot(m.x - p.x, m.z - p.z) || 1; H.spelare.yaw = Math.atan2(-(m.x - p.x), -(m.z - p.z)); H.spelare.pitch = Math.max(-0.9, Math.min(0.3, Math.atan2((m.y ?? 1.3) - 1.6, d))); }   /* inkorg 52: siktet på saken, inte bara åt rätt håll */
  async function klick(o, namn, avst) {
    await gaTill(o, avst ?? 1.4, namn);
    const ia = o.userData?.interaktion;
    if (!ia) { handling(`kan inte klicka ${namn || '?'}`); return false; }
    if (ia.kanAktivera && !ia.kanAktivera()) { handling(`${namn || '?'} går inte att använda nu`); return false; }
    ia.aktivera(); await vanta(0.5); return true;
  }
  function valj(typ) {
    let i = S.hotbar.findIndex((x) => x?.typ === typ);
    if (i < 0 && H.antalInv(typ)) { const n = H.antalInv(typ); H.taBortInv(typ, n); H.laggTill(typ, n); i = S.hotbar.findIndex((x) => x?.typ === typ); }
    if (i < 0 && H.antalInv(typ)) {   /* AX g37: fulla fickor – lägg en annan sak i kistan så att det man behöver får plats i handen */
      const k = S.hotbar.findIndex((x, j) => j > 0 && x && x.typ !== typ); if (k > 0) { S.kistan.push({ ...S.hotbar[k] }); S.hotbar[k] = null; const n = H.antalInv(typ); H.taBortInv(typ, n); H.laggTill(typ, n); i = S.hotbar.findIndex((x) => x?.typ === typ); }
    }
    if (i < 0) return false; if (i !== S.vald) nyKontroll('byta'); H.byt(i); return true;
  }

  // ---------- Ali ----------
  const aliPos = () => ({ x: H.ALI.x, z: H.ALI.z - 1.6 });
  async function ali(gor, varfor) {
    const a = aliPos(); await ga(a.x, a.z, 'Ali'); handling('öppnar Alis butik' + (varfor ? ' – ' + varfor : ''));
    iButik = true; H.oppnaMarknad(); await vanta(MENY_TID);
    try { await gor(); await vanta(0.5); } finally { H.ui.stangButik(); iButik = false; } await vanta(0.3);
  }
  /* DC: Alis butik på en sida – köpkort [data-dckop=key], säljkort [data-dcs=typ] */
  function aliKnapp(pre, id) { return [...document.querySelectorAll('[data-kopnu]')].find((e) => e.dataset.kopnu === id || e.dataset.kopnu.endsWith(':' + id)); }   /* EM 33: köpknappen sitter på kortet */
  async function saljAllt(behall = []) {   /* EM 33: Sälj en / Sälj allt på korten */
    let tot = 0; const fore = S.mynt;
    if (!behall.length && document.querySelector('[data-saljallt]')) { document.querySelector('[data-saljallt]').click(); await vanta(0.6); }
    else for (let varv = 0; varv < 80; varv++) { const k = [...document.querySelectorAll('[data-saljen]')].find((e) => !behall.includes(e.dataset.saljen)); if (!k) break; k.click(); await vanta(0.2); }
    tot = S.mynt - fore;
    if (tot) handling(`säljer hos Ali: +${tot} kr`);
    return tot;
  }
  async function kopHosAli(id) {
    const k = aliKnapp('k', id); if (!k) { handling(`Ali har inte ${id}`); return false; }
    const fore = S.mynt; k.click(); await vanta(0.8);
    if (S.mynt < fore) { handling(`köper ${id} för ${fore - S.mynt} kr`); kop.push({ dag: S.dag, t: tid - dagStart, id, pris: fore - S.mynt }); return true; }
    handling(`kunde inte köpa ${id} (${S.mynt} kr)`); return false;
  }
  const kop = [];

  // ---------- skräp, kvarnen och rullar ----------
  const kvarnPos = () => pos(H.kvarn);
  const gardsSkrap = () => H.skrapLista.filter((s) => s.userData.interaktion && s.visible !== false && !H.paTippen(s.position.x, s.position.z) && H.kanLyfta(s) && !s.userData.tung);
  const tippSkrap = () => H.skrapLista.filter((s) => s.userData.interaktion && s.visible !== false && H.paTippen(s.position.x, s.position.z) && H.kanLyfta(s) && !s.userData.tung);
  async function plockaLass({ tippen = false, max = 99 } = {}) {
    const kap = H.BARA_SKRAP[H.niva()]; let n = 0;
    if (H.valdTyp() && H.valdTyp() !== 'karra') H.byt(0);
    while (H.hand.saker.length < kap && n < max) {
      const lista = tippen ? tippSkrap() : gardsSkrap(); if (!lista.length) break;
      const p = H.spelare.pos; lista.sort((a, b) => Math.hypot(a.position.x - p.x, a.position.z - p.z) - Math.hypot(b.position.x - p.x, b.position.z - p.z));
      const s = lista[0];
      await gaTill(s, 1.0); H.kamera.position.set(H.spelare.pos.x, 1.6, H.spelare.pos.z);
      if (!s.userData.interaktion) continue;   // någon annan tog den medan boten gick dit
      const fore = H.hand.saker.length; s.userData.interaktion.aktivera(); await vanta(0.6);
      if (H.hand.saker.length === fore) break; n++;
    }
    if (n) handling(`plockar ${n} skräp ${tippen ? 'på tippen' : 'på gården'} (bär max ${kap})`);
    return n;
  }
  async function tomIKvarnen() {
    if (!H.hand.saker.length) return 0;
    const n = H.hand.saker.length; await klick(H.kvarn, 'kvarnen'); return n - H.hand.saker.length;
  }
  async function mal() {
    // veva tills tratten är tom (med motor: vänta medan motorn mal)
    let varv = 0;
    while (S.kvarn.tratt > 0 && !H.extruderFull() && varv++ < 400) {
      if (!S.kvarn.motor) { await gaTill(H.vevYta, 1.2); if (await siktaPa(H.vevYta)) H.veva(1.2); else await vanta(1); }
      else if (S.strom < 1 && H.solEffekt() <= 0) { await strom(5); continue; }   // motorn behöver ström
      vantanIdag += 1; await vanta(1);   // BM: VÄNTAN – står och väntar på printen utan annat att göra
    }
  }
  async function hamtaRulle() {
    if (!H.helaRullar() || !H.rullePlats()) return false;
    return klick(H.rulle, 'rullen vid extrudern');
  }
  // se till att skrivaren har minst `gram` filament
  // DM2: skrivarna drar plasten direkt ur linjens torn – boten mal och lägger rullar i handen i rätt torn
  const fil = (sk) => H.filTillg(sk);
  async function filament(sk, gram, varfor = '') {
    let varv = 0;
    const lin = sk.gen === 5 ? 'kolf' : sk.gen === 4 ? 'rod' : 'bla';
    while (fil(sk) < gram && varv++ < 40) {
      if (fil(sk) >= 1 && (lin === 'bla' ? H.extruderFull() : !H.tornPlats(lin))) return true;   // DM2: tornet är fullt – skrivaren drar mer medan den printar
      if (sk.gen === 5) {
        if (H.antalInv('rulle3') && H.tornPlats('kolf')) { const p = H.kolfKvarn(); valj('rulle3'); await gaTill(p.mesh, 1.6, 'kolfibertornet'); H.kolfAktivera(p); handling('lägger kolfiber i tornet'); continue; }
        handling('väntar på kolfiber från bandet'); if (varv % 5 === 0) console.log(`[sim] väntar på kolfiber (${varv})`); if (varv > 30) return false; await vanta(8); continue;   // inte tjana här: tjana → printa kolfiber → filament → tjana … (oändlig rekursion)
      }
      if (sk.gen === 4) {
        if (H.antalInv('rulle2') && H.tornPlats('rod')) { const p = H.petgKvarn(); valj('rulle2'); await gaTill(p.mesh, 1.6, 'röda tornet'); H.petgAktivera(p); handling('lägger röd PETG i tornet'); continue; }
        if (S.petg.ko > 1 || (S.petg.cont || []).length) { await vanta(3); continue; }
        if (!(await tungtTillPetg())) return false; continue;
      }
      if (H.antalInv('rulle') && H.tornPlats('bla')) { valj('rulle'); await klick(H.rulle, 'blå tornet'); handling('lägger rullen i tornet'); continue; }
      const tipp = S.tippNyckel && gardsSkrap().length <= H.gardMal();
      let n = await plockaLass({ tippen: tipp });
      if (!n && !tipp && S.tippNyckel && !H.hand.saker.length) n = await plockaLass({ tippen: true });
      if (!n && !H.hand.saker.length) { if (!S.kvarn.tratt) { handling('inget skräp kvar att mala – väntar på sopbilen' + (varv === 1 ? ` [skräp ${H.skrapLista.length}: lätta ${H.skrapLista.filter((x) => !x.userData.tung).length}, osynliga ${H.skrapLista.filter((x) => x.visible === false).length}, utan interaktion ${H.skrapLista.filter((x) => !x.userData.interaktion).length}, tippen ${H.skrapLista.filter((x) => H.paTippen(x.position.x, x.position.z)).length}, ej lyftbara ${H.skrapLista.filter((x) => !H.kanLyfta(x)).length}, sorter ${[...new Set(H.skrapLista.filter((x) => x.visible === false || !x.userData.interaktion).map((x) => x.userData.sort))].join('/')}]` : '')); if (varv > 4) return false; await vanta(20); continue; } }
      await tomIKvarnen(); await mal();
    }
    return fil(sk) >= gram || (fil(sk) >= 1 && (lin === 'bla' ? H.extruderFull() : !H.tornPlats(lin)));
  }
  // ström: trampa vid cykeln tills det räcker
  async function strom(behov = 3) {
    if (H.solEffekt() > 0 || S.strom >= behov) return;
    await gaTill(H.cykel, 1.2, 'cykeln'); await siktaPa(H.cykel); let n = 0;
    while (S.strom < Math.min(behov + 4, 11.5, H.stromMax() - 0.2) && n++ < 60) { if (!(await siktaPa(H.cykel))) { await vanta(1); continue; } H.trampa(1.1); await vanta(1); }   /* inkorg 52: trampa bara med siktet på cykeln */
  }

  // ---------- printa ----------
  const skrivareAlla = (petg = false) => H.skrivare.filter((x) => x.mesh?.visible !== false && (petg === 4 ? x.gen === 6 : petg === 3 ? x.gen === 5 : (x.gen === 4) === petg && x.gen !== 5 && x.gen !== 6));   /* A-069: guldskrivaren (gen 6) tar bara guld */
  // kapitel 2: PETG-skrivaren (gen 4) tar bara röd PETG (nivå 2) – vanliga saker går på de vanliga skrivarna
  const arPetg = (val) => { const n = val?.maskin ? H.printLinje(val.maskin) : (val?.typ && H.VAROR[val.typ]?.niva) || 1; return n === 4 ? 4 : n === 3 ? 3 : n === 2; };   // DO: byggsatser printas på sin egen linje
  const ledig = (val) => { const petg = arPetg(val); const l = skrivareAlla(petg).slice().sort((a, b) => b.gen - a.gen);
    const g = val.maskin ? 0 : (H.VAROR[val.typ]?.gram || 0), stor = g >= 2000 && l.some((x) => x.gen >= 2);   /* AX g48: stora saker (kaminen) får inte plats på Skrivare S – ta den största, hellre i kö */
    const fri = l.filter((x) => !x.jobb && !x.klar && (!stor || x.gen >= 2));
    return fri[0] || (stor ? l.find((x) => x.gen >= 2) : null) || l[0] || skrivareAlla()[0]; };
  async function taUt(sk) { if (!sk.klar) return; const n = H.antalUt(sk); await klick(sk.mesh, 'skrivaren'); handling(`tar ut ${n} st ur skrivaren`);
    if (sk.klar && H.antalUt(sk) === n) {   /* AX g50: fulla fickor – lägg en sak i kistan och ta ut igen (kapskivan fastnade dag 16) */
      const k = S.hotbar.findIndex((x, j) => j > 0 && x && x.typ !== sk.klar && !/^(grip|magnet|sackkarra|sopsack|ryggkorg|ryggsack2)$/.test(x.typ));
      if (k > 0) { S.kistan.push({ ...S.hotbar[k] }); handling(`fulla fickor – lägger ${S.hotbar[k].typ} i kistan`); S.hotbar[k] = null; H.ritaHotbar?.(); await klick(sk.mesh, 'skrivaren'); }
    } }
  async function printa(val, { vantaKlart = true } = {}) {
    const namn = val.maskin ? H.MASKINER[val.maskin].namn : H.VAROR[val.typ].namn;
    const sk = ledig(val); if (!sk) return false;
    if (sk.klar) await taUt(sk);
    const delar = val.maskin ? (H.MASKINER[val.maskin].delar || 1) : 1;
    const gram = (val.maskin ? H.MASKINER[val.maskin].gram : H.VAROR[val.typ].gram) * delar;
    if (gram > 2000 || val.maskin) for (const x of H.skrivare) if (x !== sk) x.upprepaPa = false;   /* AX g34: en stor print (jacuzzin) svälter om de andra skrivarna autoprintar samtidigt – A-092: en byggsats också (krukorna åt upp all blå plast dag 17 när tippen var tom) */
    if (!(await filament(sk, Math.min(gram, 1000 * 2)))) return false;   // rullhållaren tar 3 hela rullar – en halv rulle kvar räcker inte för en till
    await gaTill(sk.mesh, 1.4, 'skrivaren'); await vanta(MENY_TID);
    const r = H.startaJobb(sk, val); if (!r) { handling(`kunde inte starta ${namn}`); return false; }
    handling(`printar ${namn}${delar > 1 ? ` (${delar} delar)` : ''}`);
    if (!vantaKlart) return sk;
    await vantaPaPrint(sk);
    await taUt(sk); return true;
  }
  // medan skrivaren jobbar: trampa om det behövs, annars mal skräp och sälj
  async function vantaPaPrint(sk) {
    let varv = 0;
    while (sk.jobb && varv++ < 2000) {
      if (fil(sk) < 5 && sk.jobb) { await filament(sk, 300); continue; }
      if (!S.batteriKopt && !S.powerbank && sk.jobb && H.solEffekt() <= 0) { await gaTill(H.cykel, 1.2, 'cykeln'); if (await siktaPa(H.cykel)) H.trampa(1.1); await vanta(1); continue; }   // DT: utan lagring går skrivaren bara medan man trampar
      if (H.solEffekt() <= 0 && S.strom < 1.5) { await strom(4); continue; }
      if (S.strom > 6 || H.solEffekt() > 0) {
        if (!H.extruderFull() && S.kvarn.tratt < 3 && gardsSkrap().length) { await plockaLass({}); await tomIKvarnen(); if (!S.kvarn.motor) await mal(); continue; }
      }
      await vanta(1);
    }
  }

  // ---------- köp + printa + använd ----------
  const MASKIN = (id) => H.MASKINER[id];
  const tjanaFel = new Set();   /* saker som inte gick att printa (slut på röd PETG) – prövas igen nästa dag */
  async function tjana(mal, varfor) {
    if (tjanaFel.dag !== S.dag) { tjanaFel.clear(); tjanaFel.dag = S.dag; }
    // printa och sälj den bästa saken du har recept på tills du har `mal` kr
    let varv = 0;
    await webbJobb();   // CR: beställningar från webbshoppen först – de betalar mer
    if ((S.kapitel || 1) >= 4 && mal - S.mynt > 5000) for (const sk of H.skrivare) sk.upprepaPa = false;   /* A-042: boten säljer själv hos Ali – autoprinten till leveranslådan ger bara grossistpris en gång per dygn */
    while (S.mynt < mal && varv++ < 30) {
      const kand = Object.keys(H.VAROR).filter((t) => !tjanaFel.has(t) && t !== 'spagetti' && H.VAROR[t].gram > 0 && !/^(g_|h_|hf_|ra_|r_|p_|fynd|burk|rulle|n_)/.test(t) && H.VAROR[t].pris > 0 && !H.VAROR[t].lyx && (!H.VAROR[t].niva || (H.VAROR[t].niva === 2 && H.harPlacerat('skrivarepetg')) || (H.VAROR[t].niva === 3 && H.harPlacerat('kolfskrivare')) || (H.VAROR[t].niva === 4 && H.harPlacerat('guldskrivare') && H.antalInv('rulle4') > 0)) && H.harRecept(t) && (H.VAROR[t].syns?.() ?? true) && !H.VAROR[t].gava && H.VAROR[t].gram > 0);
      kand.sort((a, b) => H.prisNu(b) / H.VAROR[b].tid - H.prisNu(a) / H.VAROR[a].tid);
      const t = kand[0]; if (!t) { handling('inget att printa och sälja – väntar på sopbilen'); tjanaFel.clear(); await vanta(30); return; }
      handling(`tjänar pengar${varfor ? ' till ' + varfor : ''}: ${S.mynt}/${mal} kr → printar ${H.VAROR[t].namn.toLowerCase()} (${H.prisNu(t)} kr)`);
      const sk = ledig({ typ: t }); const antal = Math.max(1, Math.min(4, Math.floor(fil(sk) / H.VAROR[t].gram)));   // BP: även röd PETG
      let gick = 0;
      const lediga = skrivareAlla(arPetg({ typ: t })).filter((x) => !x.jobb);
      if (lediga.length >= 2) {   /* EE: en spelare med flera skrivare kör dem samtidigt – då syns strömmen som flaskhals */
        const startade = []; for (const x of lediga) { if (S.mynt + startade.length * H.prisNu(t) >= mal) break; const sk2 = await printa({ typ: t }, { vantaKlart: false }); if (!sk2) break; startade.push(sk2); }
        let v = 0; while (startade.some((x) => x.jobb) && v++ < 50) await vantaPaPrint(startade.find((x) => x.jobb));
        for (const x of startade) await taUt(x); gick = startade.length;
      } else for (let i = 0; i < antal && S.mynt + i * H.prisNu(t) < mal; i++) { if (!(await printa({ typ: t }))) break; gick++; }
      if (!gick && !H.antalInv(t)) { tjanaFel.add(t); handling(`${H.VAROR[t].namn.toLowerCase()} gick inte att printa – tar nästa`); }
      await ali(() => saljAllt(BEHALL().filter((x) => x !== t)), 'sälja');   // det som printades för pengar säljs (en pall/kruka får vara kvar till trivseln)
    }
  }
  // CR: printa det webbshoppen vill ha, packa vid datorn och lägg paketen i Rolfs postlåda
  let webbDag = 0;
  async function webbJobb() {
    if (!H.webbOrdrar || !H.placerade.some((p) => p.typ === 'webbdator') || webbDag === S.dag) return;
    webbDag = S.dag;
    for (const o of H.webbOrdrar().filter((x) => !x.packad && !x.levererad && H.harRecept(x.typ))) {
      let f = 0; while (H.antalInv(o.typ) < o.antal && f++ < 8) { if (!(await printa({ typ: o.typ }))) break; }
    }
    const dator = H.placerade.find((p) => p.typ === 'webbdator');
    if (H.webbOrdrar().some((x) => !x.packad && !x.levererad && H.antalInv(x.typ) >= x.antal)) {
      await klick(dator.mesh, 'datorn', 1.6); await vanta(0.5);
      for (const b of [...document.querySelectorAll('[data-packa]')]) { if (!b.disabled) { b.click(); await vanta(0.4); } }
      await stangPopups();
    }
    let n = 0; while (H.antalInv('paket') && n++ < 6) { valj('paket'); await klick(H.postlada, 'Rolfs postlåda (paket)'); }
    handling(`webbshop: ${H.webbOrdrar().filter((x) => x.iLadan && !x.levererad).length} paket i postlådan`);
  }
  const BEHALL = () => [...(H.webbOrdrar ? H.webbOrdrar().filter((o) => !o.packad && !o.levererad).map((o) => o.typ) : []), 'sang', 'pall', 'kruka', 'lampskarm', 'fagelholk', ...(H.aktivGava() ? [H.aktivGava()] : [])].filter((t) => !(t === 'kruka' && H.antalInv('kruka') > 2) && !(['pall', 'lampskarm', 'fagelholk'].includes(t) && H.antalInv(t) > 1));   /* fickorna fylls inte av pallar */
  async function kopMaskin(id) {
    if (S.ritningar.includes(id)) return true;
    const pris = H.MASKINER[id].ritning; if (S.mynt < pris) await tjana(pris, H.MASKINER[id].namn.toLowerCase());
    let ok = false; await ali(async () => { ok = await kopHosAli(id); }, 'köpa ' + H.MASKINER[id].namn.toLowerCase()); return ok;
  }
  async function kopRecept(t) {
    if (H.harRecept(t)) return true;
    const pris = H.VAROR[t].recept; if (S.mynt < pris) await tjana(pris, 'receptet ' + H.VAROR[t].namn.toLowerCase());
    let ok = false; await ali(async () => { ok = await kopHosAli(t); }, 'köpa receptet ' + H.VAROR[t].namn.toLowerCase()); return ok;
  }
  async function bygg(id) {
    // köp ritningen, printa byggsatsen och använd den
    const bs = 'byggsats:' + id;
    if (!H.antalInv(bs)) { if (!(await kopMaskin(id))) return false; if (!(await printa({ maskin: id }))) return false; }
    if (!H.antalInv(bs)) return true;   // verktyg och motorer används när de tas ut
    if (H.TA_PA?.[bs] || H.MONTERA?.[bs]) return true;   /* ED13: tas på eller monteras i början av nästa steg */
    const m = MASKIN(id);
    if (m.hem) {
      if (id === 'fonster') { valj(bs); H.taBortInv(bs); await gaTill(H.skjulYta, 2, 'skjulet'); H.sattFonster(); handling('sätter ett fönster'); return true; }
      if (id === 'vaggar' || id === 'tapeter') { const v = ['bak', 'vanster', 'hoger', 'fram'].find((x) => !(id === 'vaggar' ? H.vaggarKlara() : H.tapetKlara()).includes(x)); H.siktaVagg(v); valj(bs); const ok = await klick(H.skjulYta, 'skjulet (' + v + ')', 2.5); H.siktaVagg(null); return ok; }
      valj(bs); return klick(H.skjulYta, 'skjulet', 2.5);
    }
    if (id === 'gamingbod') { valj(bs); await gaTill(H.skjulYta, 4, 'platsen vänster om skjulet'); const ok = H.byggBodTest(); handling(ok ? 'bygger gamingboden' : 'gamingboden fick inte plats'); return ok; }   // boden har en egen placering (spöket), inte placera()
    if (['kvarnmotor', 'stortratt', 'matarband', 'hardkniv', 'diamantkniv'].includes(id)) { valj(bs); return klick(H.kvarn, 'kvarnen'); }   /* AX g47: diamantkvarnen monteras i kvarnen, den ställs inte ut */
    if (['kolfband', 'kolfslang', 'jetmotor'].includes(id)) { const pk = H.placerade.find((p) => p.typ === 'kolfkvarn'); valj(bs); return klick(pk.mesh, 'kolfiberkvarnen'); }
    if (['petgtorn', 'petgcontainer'].includes(id)) { const pk = H.placerade.find((p) => p.typ === 'petgkvarn'); valj(bs); return klick(pk.mesh, 'röda kvarnen'); }
    if (id.startsWith('spolhallare')) { const sk = skrivareAlla().find((x) => (x.spolNiva || 0) < (id === 'spolhallare' ? 1 : id === 'spolhallare2' ? 2 : 3)) || skrivareAlla()[0]; valj(bs); return klick(sk.mesh, 'skrivaren (spolhållare)'); }
    return placera(bs);
  }
  async function placera(t) {
    const typ = t.startsWith('byggsats:') ? t.split(':')[1] : t;
    let x, z, pa = null, hy = 0;
    const m = H.MASKINER[typ];
    if (m?.kraverBord) { const b = H.placerade.find((p) => p.typ === 'bord' && !p.har); if (!b) { handling('inget ledigt bord'); return false; } x = b.x; z = b.z; pa = b.id; }
    else if (typ === 'kamin') { x = H.SKJUL.x + 0.8; z = H.SKJUL.z - 0.6; }   /* AX g50: kaminen ska stå i skjulet (värme 9), inte i raden utanför */
    else { const pl = H.nastaPlats(typ); if (pl) { x = pl.x; z = pl.z; hy = pl.y || 0; } else { const n = H.placerade.length; x = H.SKJUL.x - 2 + (n % 4) * 1.1; z = H.SKJUL.z + H.SKJUL.d / 2 + 1.5 + Math.floor(n / 4) * 1.1; } }
    await ga(x + 1.2, z + 1.2, 'platsen för ' + (m?.namn || H.VAROR[typ]?.namn || typ).toLowerCase()); valj(t); await vanta(1);
    H.taBortInv(t); const p = { id: 'p' + (S.nastaId++), typ, x, z, r: 0, r8: 0, ...(pa ? { pa } : {}), ...(hy ? { hy } : {}) }; H.placera(p);
    handling(`ställer ut ${(m?.namn || H.VAROR[typ]?.namn || typ).toLowerCase()}`); await vanta(0.5); return true;
  }
  async function gePresent(v) {
    if (!H.antalInv(v)) { handling(`har ingen ${v}: post ${JSON.stringify(S.post)} rolf ${JSON.stringify(S.rolf)} steg ${S.steg} pausad ${H.pausad()} med ${H.medEl2?.hidden} ${(H.medEl2?.innerText || "").slice(0, 80)} igang ${H.ui.igang} ov ${H.ui.overlay.hidden} butik ${H.ui.butiksOverlay.hidden} klar ${H.STEG[S.steg].klar()} text ${(H.ui.butiksOverlay.innerText||"").slice(0,80)}`); return false; } const ok = valj(v); handling(`valj ${v}: ${ok}, vald ${H.valdTyp()}, post ${JSON.stringify({ l: S.post.lapp, tr: S.post.tillRolf, tm: S.post.tillMig })}, nummer ${S.rolfNummer}`); return klick(H.postlada, 'Rolfs postlåda');
  }

  // ---------- ett steg ----------
  const foreSett = new Set();
  async function gorSteg() {
    await stangPopups();
    /* A-061: Rolf tutar – hoppa in och åk upp till bänken (dag 3) eller kör statyn dit */
    if ((S.utsikt === 'bjuden' || S.statyBank === 'bjuden') && H.bilFas?.() === 'resaVantar') { await klick(H.sopbil, 'sopbilen (Rolfs bänk)', 2.5); let w = 0; while (H.kameraAk?.() && w++ < 200) await vanta(0.5); await stangPopups(); handling('tillbaka från Rolfs bänk'); return; }
    /* EA: som en riktig spelare – boten gör nästa mål först när det syns i målrutan (högst 60 s) */
    for (let w = 0; w < 120 && H.malSynligt && !H.malSynligt(); w++) await vanta(0.5);
    await nyLasMal();   /* A-081 */
    if (S.post.tillMig?.length || S.post.lapp) { await klick(H.postlada, 'Rolfs postlåda'); await stangPopups(); }
    if (H.vantarPaNummer?.()) { await klick(H.postlada, 'Rolfs postlåda (telefonnumret)'); }
    for (const sk of skrivareAlla()) if (sk.klar && !sk.jobb) await taUt(sk);
    /* ED4: FÖRE – AX:s egna villkor (oberoende av spelets finns()): syns något innan det finns? */
    { const syns = (sel) => { const e = document.querySelector(sel); return !!e && e.getClientRects().length > 0 && getComputedStyle(e).visibility !== 'hidden'; };
      const fore = [];
      if (syns('[data-dn="el"]') && !S.cykelOmbyggd && S.dag === 1) fore.push('EL-mätaren före den ombyggda cykeln');
      if (syns('[data-dn="trivsel"]') && !S.sang && S.dag === 1 && !H.placerade.some((p) => (H.VAROR[p.typ]?.trivsel || H.MASKINER[p.typ]?.trivsel))) fore.push('TRIVSEL före första trivselsaken');
      if (H.vevEl?.classList.contains('syns') && !S.kvarnStar) fore.push('rullmätaren vid kvarnen före kvarnen');
      if (H.startTorn?.visible && !S.skrivareStar && S.dag === 1) fore.push('storebrors rulle i tornet före skrivaren');
      for (const f of fore) if (!foreSett.has(f)) { foreSett.add(f); window.__textLogg('före', '', f); } }
    /* ED13: det som ligger i handen ska på plats – ta på det man bär, montera resten */
    if (H.TA_PA) for (const t of Object.keys(H.TA_PA)) if (H.antalInv(t)) { valj(t); H.taPaVald(); handling('tar på ' + t.replace('byggsats:', '')); await vanta(0.5); }
    if (H.MONTERA) for (const t of Object.keys(H.MONTERA)) { if (!H.antalInv(t)) continue; const m = H.MONTERA[t], mal = m.mal()[0]; if (!mal || m.hinder?.()) continue; valj(t); await klick(mal, m.namn.toLowerCase()); return; }
    if (H.antalInv('korv')) { valj('korv'); H.ata('korv'); }
    if (!S.skyltUppe && S.dag === 1) { valj('hammare'); await klick(H.bradhog, 'brädhögen');   /* A-076 tillägg 12:25: hammaren först */ await vanta(4); return; }
    const id = H.stegId(), st = H.STEG[S.steg], txt = (typeof st?.text !== 'function' && window.__stegKanon?.[id]) || H.stegText() || '';   /* A-069 §5: målet hittas på sitt id – en ändrad måltext gör inget (texter som beror på läget läses som de står) */
    if (!st && S.julFirad) {   /* A-042: efterspelet – köp marken som är kvar när pengarna räcker, tjäna under tiden, sov när dagen är slut */
      if (H.sovDags()) { await klick(H.taltSang, 'sängen'); await vantaPaMorgon(); return; }
      const t = H.MARK_TOMTER.find((x) => ['norr', 'tippkant', 'tippen', 'rolfhus'].includes(x.id) && !(S.mark?.agt || []).includes(x.id) && S.mynt >= x.pris && (S.respekt || 0) >= (x.respekt || 0) && (!x.kraver || (S.mark?.agt || []).includes(x.kraver)));   /* AX 90: bara mark som går att köpa (respekt och ordning) */
      if (t) { await gaTill(H.markTavla, 1.8, 'tavlan vid vägen'); H.kopMark(t.id); handling(`efterspelet: köper ${t.namn.toLowerCase()} (${t.pris} kr)`); await vanta(2); return; }
      handling(`efterspelet: dag ${S.dag}, ${Math.round(S.dagTid || 0)} s`); await tjana(S.mynt + 500, 'efterspelet'); return;
    }
    if (!st) return 'slut';
    if (st.sov && S.utsikt === 'bjuden') { let w = 0; while (H.bilFas?.() !== 'resaVantar' && w++ < 60) await vanta(1); if (H.bilFas?.() === 'resaVantar') return; }
    if (st.sov) {
      if (H.sovDags()) { await klick(H.taltSang, 'sängen'); await vantaPaMorgon(); return; }
      handling(`väntar på kvällen (vaken ${Math.round(S.vakenTid || 0)} s)`); await tjana(S.mynt + 60, 'kvällen'); return;
    }
    /* EE: målet väntar på sin flaskhals – gör det man gör under tiden (plocka, mala, printa, sälja) */
    if (st.las && H.upplast && !H.upplast(st.las)) { await tjana(S.mynt + 40, `väntar på flaskhalsen för ${st.las}`); return; }
    /* A-066: solcellsparkens plats är igenvuxen – gå dit (tanken om motorsågen), vänta på pappas motorsåg, såga bort slyet */
    if (H.stegId() === 'r9-bygg-solcellspark' && !S.slyRojt) {
      const kvar = (H.slyKlumpar || []).filter((k) => !k.borta);
      if (!H.antalInv('motorsag') && S.motorsagFatt) { const ki = (S.kistan || []).findIndex((x) => x?.typ === 'motorsag');   /* AX g77: fulla fickor – sågen hamnade i kistan, hämta den */
        if (ki >= 0) { const k = S.hotbar.findIndex((x, j) => j > 0 && x && x.typ !== 'motorsag'); if (k > 0) { S.kistan.push({ ...S.hotbar[k] }); S.hotbar[k] = null; } S.kistan.splice(ki, 1); H.laggTill('motorsag'); handling('hämtar pappas motorsåg ur kistan'); return; } }
      if (H.antalInv('motorsag') && kvar.length) { valj('motorsag'); await klick(kvar[0].g, 'slyet (motorsåg)', 2.6); await vanta(2.5); return; }
      if (!S.motorsagTanke && kvar.length) { await gaTill(kvar[0].g, 3.2, 'slyet bakom tippen'); await vanta(2); return; }
      await tjana(S.mynt + 120, 'väntar på pappas motorsåg'); return;
    }
    switch (id) {
      case 'saljKruka': if (!H.antalInv('kruka')) { await printa({ typ: 'kruka' }); return; } await ali(() => saljAllt(), 'sälja krukan'); return;   /* EF17 */
      case 'lasta': await klick(H.vagCykel, 'cykeln vid vägen'); return;
      case 'stall': valj('skrivareS'); await klick(H.startYta, 'rutan i linje 1'); return;
      case 'bygg': {   /* A-071: generatorn och cykeln i valfri ordning – boten växlar (udda dagar generatorn först) */
        const genForst = !window.__simCykelForst;
        const stallGen = async () => { valj('byggsats:generator'); await klick(H.startYta, 'generatorns plats'); };
        const stallCykel = async () => { if (!S.cykelBuren && !S.cykelStar) { H.byt(0); await klick(H.vagCykel, 'cykeln (lyfter den)'); return; } valj('cykelS'); await klick(H.startYta, 'cykelns plats'); };
        if (genForst ? !S.generatorStar : S.cykelStar) await stallGen(); else if (!S.cykelStar) await stallCykel(); else if (!S.generatorStar) await stallGen();
        else await vanta(3); return;
      }
      case 'valjModell': case 'trampa': { const sk = H.skrivare[0]; if (sk?.klar) { await taUt(sk); return; } if (sk?.jobb) { await vantaPaPrint(sk); await taUt(sk); return; } await printa({ typ: 'nyckelring' }); return; }   /* A-076 13:20: välj modell först, sedan trampa */
      case 'salj': {
        const sk = H.skrivare.find((x) => x.id === 'g1');
        if (H.antalInv('nyckelring') < 3 && fil(sk) >= 100) { await strom(6); await printa({ typ: 'nyckelring' }); return; }
        await ali(() => saljAllt(), 'sälja nyckelringar'); return;
      }
      case 'saljTva': { const sk = H.skrivare.find((x) => x.id === 'g1'); if (sk?.klar) { await taUt(sk); return; } await ali(() => saljAllt(), 'sälja de två nyckelringarna'); return; }   /* inkorg 18 */
      case 'aliKvarn': { const ok = await kopMaskin('gammalkvarn'); handling(ok ? 'köpte kvarnen' : 'kunde inte köpa kvarnen'); if (!ok) await vanta(2); return; }   /* inkorg 18: kvarnen köps hos Ali */
      case 'rullSlut': { const sk = H.skrivare[0]; if (sk.klar) await taUt(sk); if (!sk.jobb) { await gaTill(sk.mesh, 1.4, 'skrivaren'); await vanta(MENY_TID); handling(H.startaJobb(sk, { typ: 'nyckelring' }) ? 'printar Nyckelring (sista av storebrors rulle)' : 'kunde inte starta nyckelringen'); } await strom(6); for (let i = 0; i < 20 && !S.rullSlut && !S.kvarnKopt; i++) { await strom(2); } return; }   /* A-076: printen hackar när storebrors rulle tar slut */
      case 'egenPrint': { const sk = H.skrivare[0]; if (sk?.klar) { await taUt(sk); return; } if (sk?.jobb) { await strom(6); return; } await strom(6); await printa({ typ: 'nyckelring' }); return; }   /* A-076 */
      case 'strom': if (window.__simStromDirekt) { valj('byggsats:generator'); await vanta(1); return; } await vanta(4); return;   /* A-073: gåtan – boten väntar på hjälpen (STROM_DIREKT: tar generatorn direkt) */
      case 'kopBatteri': await ali(async () => { await kopHosAli('cykelbatteri'); }, 'bilbatteriet'); if (!S.batteriKopt && !H.antalInv('byggsats:cykelbatteri')) await tjana(60, 'bilbatteriet'); return;
      case 'kvarn': valj('byggsats:gammalkvarn'); await klick(H.startYta, 'kvarnens ruta'); return;
      case 'flaska': { if (!H.hand.saker.length) await plockaLass({}); await tomIKvarnen(); await mal(); return; }   /* A-073: kvarnen före skrivaren – mal tills tråden kommer */
      case 'powerbank': await ali(async () => { await vanta(4); }, 'Ali (powerbanken)'); return;   /* ED8 */
      case 'kopGrip': await kopMaskin('grip'); return;
      case 'printGrip': if (!H.antalInv('byggsats:grip') && !S.grip) await printa({ maskin: 'grip' }); return;
      case 'krukaD1': if (H.harRecept('kruka')) { await printa({ typ: 'kruka' }); return; } if (S.krukaErbjuden) { await kopRecept('kruka'); return; } await tjana(S.mynt + 15, 'krukan (Ali erbjuder receptet vid försäljningen)'); return;   // ED
      case 'kopMotor': await kopMaskin('kvarnmotor'); return;
      case 'monteraMotor': if (!S.kvarn.motor) await printa({ maskin: 'kvarnmotor' }); return;
      case 'kopSang': { if (S.ritningar.includes('sang')) return; if (S.mynt < 60) { await tjana(60, 'sängen'); return; } await ali(async () => { await kopHosAli('sang'); }, 'köpa sängen'); return; }
      case 'printSang': await printa({ typ: 'sang' }); return;
      case 'sov1': valj('sang'); await klick(H.sangSpoke, 'sängplatsen i skjulet', 2); await vantaPaMorgon(); return;
      case 'kopSack': if (H.sackRulle?.visible) { await klick(H.sackRulle, 'Rolfs sopsäck'); return; } { await plockaLass({}); await tomIKvarnen(); await mal(); } return;   // CH
      case 'kruka': if (!H.harRecept('kruka')) await kopRecept('kruka'); await printa({ typ: 'kruka' }); return;
      case 'ryggkorg': await bygg('ryggkorg'); return;
      case 'pall': await kopRecept('pall'); await printa({ typ: 'pall' }); if (H.antalInv('pall')) await placera('pall'); return;
    }
    if (/^Städa (klart )?gården/.test(txt)) { if (H.extruderFull() && S.kvarn.tratt >= H.TRATT_MAX - 1) { await tjana(S.mynt + 60, 'kvarnen är full – printa av filamentet'); return; } const sk = ledig(); await plockaLass({}); await tomIKvarnen(); await mal(); return; }
    if (/^Skicka två paket från datorn/.test(txt)) { webbDag = 0; await webbJobb(); await tjana(S.mynt + 60, 'väntar på fler beställningar'); await vanta(2); return; }   // dag 9-målet
    if (/^Sopbilen kommer förbi under dagen|^Rolf lämnar något med sopbilen|^Vänta på sopbilen/.test(txt)) { await tjana(S.mynt + 60, 'väntar på sopbilen (BO)'); await vanta(1); return; }   // BO: gör något vettigt medan brevet är på väg
    if (/^Läs brevet i Rolfs postlåda/.test(txt)) { await klick(H.postlada, 'Rolfs postlåda'); await stangPopups(); return; }
    if (/^Printa /.test(txt) && H.aktivGava() && (st.mom === 'Rolfs brev' || txt.toLowerCase().includes(String(H.VAROR[H.aktivGava()]?.namn || '§').toLowerCase()))) {   /* AX gs3: bara när målet gäller gåvan – inte "Printa vindsnurran" */ const v = H.aktivGava(); if (!H.antalInv(v)) await printa({ typ: v }); return; }
    if (/^Lägg .* i Rolfs postlåda|^Ge Rolf (?!en kapskiva)/.test(txt)) { await gePresent(H.aktivGava()); return; }
    if (/^Hämta 5 skräp på soptippen/.test(txt)) { await plockaLass({ tippen: true }); await tomIKvarnen(); await mal(); return; }
    if (/^Lyft en tunna med säckkärran och mal|^Mal en tunna i röda kvarnen/.test(txt) && !S.sackkarra) { const p = H.placerade.find((x) => x.typ === 'sackkarra'); if (p) { await klick(p.mesh, 'säckkärran i högen'); return; } }
    if (/^Mal tunnan i PETG-kvarnen|^Mal tunga saker i PETG-kvarnen|^Lyft en tunna med säckkärran och mal|^Mal en tunna i röda kvarnen/.test(txt)) { await tungtTillPetg(); return; }
    if (/^Printa och sälj en sak i röd PETG/.test(txt)) { if (!H.harPlacerat('skrivarepetg')) { await bygg('skrivarepetg'); return; } if (!H.harRecept('n2_vas')) await kopRecept('n2_vas'); if (!H.antalInv('n2_vas')) await printa({ typ: 'n2_vas' }); await ali(() => saljAllt(), 'sälja PETG'); return; }   // dag 6
    if (/^Bygg hyllan|^Bygg spisen och laga/.test(txt)) {   // dag 8 och 10: direktköp hos Ali, sedan laga mat
      const id = /hyllan/.test(txt) ? 'hylla' : 'spis', har = id === 'hylla' ? S.hylla : S.spis;
      if (!har) { const pris = H.MASKINER[id].ritning; if (S.mynt < pris) { await tjana(pris, id); return; } await ali(async () => { await kopHosAli(id); }, 'köpa ' + id); return; }
      const b = Object.keys(H.MAT_VARDE || {}).find((t) => t.startsWith('burk_') && H.antalInv(t)); if (b) { H.ata(b); handling('lagar ' + b + ' på spisen'); } await vanta(1); return;
    }
    if (/^Ge Göran ett eget ställe/.test(txt)) { if (!H.harRecept('fagelskramma')) await kopRecept('fagelskramma'); if (!H.antalInv('fagelskramma')) await printa({ typ: 'fagelskramma' }); if (H.antalInv('fagelskramma')) await placera('fagelskramma'); return; }   // dag 6
    if (/^Mata in kajaker med bandet|^Vänta på den första svartgrå rullen/.test(txt)) { await tjana(S.mynt + 150, 'bandet hämtar kajaker'); await vanta(2); return; }   // DF
    if (/^Printa och ställ ut/.test(txt)) {   // generiskt: köp receptet (tjäna först), printa, ställ ut
      const st = H.STEG[S.steg], t = typeof st?.bild === 'function' ? st.bild() : st?.bild;
      if (t && H.VAROR[t]) { if (H.antalInv(t)) { await placera(t); return; } if (!H.harRecept(t)) { if (S.mynt < (H.VAROR[t].recept || 0)) { await tjana(H.VAROR[t].recept, H.VAROR[t].namn.toLowerCase()); return; } await kopRecept(t); return; } if (!H.antalInv(t)) { await printa({ typ: t }); return; } await placera(t); return; }
    }
    if (/^Printa en kolfiberstol/.test(txt)) { await printa({ typ: 'n3_stol' }); return; }
    if (/^Ställ in en gamersak i boden|^Inred boden/.test(txt)) { const t = H.nastaGamer?.(); if (t && !t.startsWith('byggsats:')) { if (!H.harRecept(t)) await kopRecept(t); if (!H.antalInv(t)) await printa({ typ: t }); if (H.antalInv(t)) await placera(t); } else await tjana(S.mynt + 300); return; }
    if (/^Bjud Rolf på fika|^Köp mutor till Rolf/.test(txt)) { const ok = await ali(async () => { const k = [...document.querySelectorAll('[data-kopnu]')].find((b) => /sopbil|fika|mutor/i.test(b.dataset.kopnu)); if (k) { k.click(); await vanta(0.6); } }, 'bjuda Rolf på fika'); if ((H.trimNiva?.('sopbil') || 0) < 1) await tjana(S.mynt + 1500, 'fikat'); return; }
    if (/^Printa en designvas/.test(txt)) { if (!H.harRecept('n2_vas')) await kopRecept('n2_vas'); await printa({ typ: 'n2_vas' }); return; }
    if (/^Sälj designvasen/.test(txt)) { if (!H.antalInv('n2_vas')) await printa({ typ: 'n2_vas' }); await ali(() => saljAllt(), 'sälja vasen'); return; }
    if (/^Lägg 3 vaser i säljlådan/.test(txt)) {
      if (!H.antalInv('n2_vas')) { await printa({ typ: 'n2_vas' }); return; }
      const l = H.placerade.find((p) => p.typ === 'saljlada'); if (!l) { handling('ingen säljlåda'); await vanta(3); return; }
      await gaTill(l.mesh, 1.4, 'säljlådan'); H.saljladaAktivera(l); await vanta(0.5); document.querySelector('[data-dcs="n2_vas"]')?.click(); await vanta(0.4); document.querySelector('[data-ladasalj]')?.click(); await vanta(0.4); await stangPopups(); handling('lägger vaserna i säljlådan (DA)'); await vanta(1); return;
    }
    if (/^Köp receptet på cykelhjälmen/.test(txt)) { await kopRecept('n2_hjalm'); return; }
    if (/^Printa en lampskärm att sälja/.test(txt)) { if (!H.harRecept('lampskarm')) await kopRecept('lampskarm'); await printa({ typ: 'lampskarm' }); return; }   // CF
    if (/^(Hälsa på pappa|Pappa kommer förbi|Prata med pappa)/.test(txt)) {   // CM: vänta in pappa, klicka på honom, plocka säckkärran ur högen
      if (H.pappaBesok.fas === 'vantar') { await klick(H.pappaGubbe, 'pappa', 1.6); return; }
      if (H.pappaBesok.fas === 'pratar' || H.pappaBesok.fas === 'rolfKommer') { await gaTill(H.pappaGubbe, 2.5, 'pappa'); await vanta(2); return; }
      await vanta(2); return;
    }
    if (/^Lyft en tunna|^Mal en tunna i röda/.test(txt) && !S.sackkarra) { const p = H.placerade.find((x) => x.typ === 'sackkarra'); if (p) { await klick(p.mesh, 'säckkärran i högen'); return; } }
    if (/^Lyft en tunna|^Mal en tunna i röda/.test(txt)) {
      valj('sackkarra'); const t = H.skrapLista.filter((x) => x.userData.tung && x.userData.interaktion && x.userData.sort !== 'kajak' && H.kanLyfta(x)).sort((a, b) => Math.hypot(a.position.x - H.spelare.pos.x, a.position.z - H.spelare.pos.z) - Math.hypot(b.position.x - H.spelare.pos.x, b.position.z - H.spelare.pos.z))[0];
      if (!t) { handling('ingen tunna att lyfta'); await vanta(5); return; }
      await gaTill(t, 1.2, 'en tunna'); t.userData.interaktion.aktivera(); await vanta(1); handling('lyfter en tunna med säckkärran'); await klick(H.kvarn, 'kvarnen'); await mal(); H.byt(0); return;
    }
    if (/^Fyll kärran|^Töm en full kärra/.test(txt)) {
      valj('karra'); let n = 0;
      while (!H.karraFull(200) && n < 8) { const l = gardsSkrap().length ? gardsSkrap() : tippSkrap(); if (!l.length) break; const p = H.spelare.pos; l.sort((a, b) => Math.hypot(a.position.x - p.x, a.position.z - p.z) - Math.hypot(b.position.x - p.x, b.position.z - p.z)); await gaTill(l[0], 1.6); { const q = H.spelare.pos, dx = l[0].position.x - q.x, dz = l[0].position.z - q.z; H.spelare.yaw = Math.atan2(-dx, -dz) + (Math.random() - 0.5) * 0.6; } await vanta(0.2); if (H.karraKlick) H.karraKlick(); else l[0].userData.interaktion.aktivera(); await vanta(0.6); n++; }   // CJ: slarvigt sikte
      handling(`fyller kärran med ${n} skräp`); await klick(H.kvarn, 'kvarnen'); await mal(); H.byt(0); return;
    }
    const bild = typeof st.bild === 'function' ? st.bild() : st.bild;
    if (bild?.startsWith('byggsats:')) { const m = bild.split(':')[1]; await bygg(m); return; }
    if (/trivsel/.test(txt)) {
      let t = H.nastaInred();
      if (!t) t = Object.entries(H.VAROR).filter(([, v]) => v.placerbar && v.trivsel > 0 && !v.gava && (!v.syns || v.syns())).sort((a, b) => (a[1].recept || 0) / a[1].trivsel - (b[1].recept || 0) / b[1].trivsel)[0]?.[0];   /* AX g39: inget förslag kvar – ta det som ger mest trivsel per krona */
      if (!t) { await tjana(S.mynt + 300, 'trivseln'); return; }
      if (t.startsWith('byggsats:')) await bygg(t.split(':')[1]);
      else { await kopRecept(t); await printa({ typ: t }); if (H.antalInv(t)) await placera(t); }
      return;
    }
    // ---------- A-042: kapitel 4 – marken, huset, guldet, kaminen, folkbokföringen och julen ----------
    { const MARK = [[/^Köp tomten du bor på/, 'egen'], [/^Köp ängen i öster/, 'oster'], [/^Bygg ett riktigt hus på ängen|^Bygg huset på grunden/, 'huset'], [/^Gjut grunden till huset/, 'husgrund']];
      for (const [re, id] of MARK) if (re.test(txt)) { const t = H.MARK_TOMTER.find((x) => x.id === id);
        if (S.mynt < t.pris) { await tjana(t.pris, t.namn.toLowerCase()); return; }
        await gaTill(H.markTavla, 1.8, 'tavlan vid vägen'); H.kopMark(id); handling(`köper ${t.namn.toLowerCase()} (${t.pris} kr)`); await vanta(2); return; } }
    if (/^Lägg (guld)?flagan i Bengt-Åkes brevlåda/.test(txt)) { if (!H.antalInv('guldflaga')) { await vanta(3); return; } valj('guldflaga'); await klick(H.bengtLada, 'Bengt-Åkes brevlåda', 1.4); H.byt(0); return; }
    if (/^Printa en kapskiva|^Ge Rolf en kapskiva/.test(txt)) { if (!H.antalInv('kapskiva')) { await printa({ typ: 'kapskiva' }); return; } valj('kapskiva'); await klick(H.postlada, 'Rolfs postlåda (kapskivan)', 1.4); H.byt(0); return; }
    if (/^Vaska (guld )?i (bäcken|floden)/.test(txt)) { if (!H.antalInv('vaskpanna')) { await tjana(S.mynt + 300, 'väntar på Rolf'); return; } valj('vaskpanna'); await gaTill(H.ader, 1.2, 'bäcken'); for (let i = 0; i < 3; i++) { H.vaskSlapp(1.9); await vanta(2); } H.byt(0); handling('vaskar i bäcken'); return; }
    if (/^Flytta in i huset/.test(txt)) { await klick(H.storHus, 'huset', 3); await vanta(2); return; }
    if (/^Mal en rulle guld/.test(txt)) {
      if (H.antalInv('fynd4')) { valj('fynd4'); await klick(H.kvarn, 'kvarnen (guld)'); H.byt(0); return; }
      if (H.antalInv('vaskpanna') && H.ader?.visible) { valj('vaskpanna'); await gaTill(H.ader, 1.2, 'ådern'); for (let i = 0; i < 4; i++) { H.vaskSlapp(1.9); await vanta(2); } H.byt(0); handling('vaskar guld i ådern'); return; }
      await tjana(S.mynt + 300, 'väntar på guldet'); return;
    }
    if (/^Gör skjulet varmt inför vintern|^Ställ in en kamin/.test(txt)) { if (!H.harPlacerat('kamin')) { await kopRecept('kamin'); await printa({ typ: 'kamin' }); if (H.antalInv('kamin')) await placera('kamin'); return; }
      const t = H.nastaInred(); if (t?.startsWith('byggsats:')) { await bygg(t.split(':')[1]); return; } await tjana(S.mynt + 300, 'värmen'); return; }
    if (/^Bli folkbokförd/.test(txt)) { await gaTill(H.markTavla, 1.8, 'tavlan vid vägen'); if (H.kanFolkbokfora()) { H.folkbokfor(); handling('blir folkbokförd'); } else await tjana(S.mynt + 500, 'folkbokföringen'); await vanta(2); return; }
    if (/^Printa julbordet/.test(txt)) { await kopRecept('julbord'); await printa({ typ: 'julbord' }); return; }
    /* A-092 §1: julafton – skylten med namnet sitter på dörren (följ pilen), sedan tar man emot mamma vid grinden */
    if (/^Skylten med mitt namn/.test(txt)) { await klick(H.julKrans, 'dörren (namnskylten)', 1.6); await vanta(3); return; }
    if (/^Ta emot mamma/.test(txt)) { const txtAv = (o) => { try { const t = o.userData.interaktion?.text; return String(typeof t === 'function' ? t(o) : t || ''); } catch { return ''; } }; const g = H.interaktor.mal.find((o) => o.visible && /Ta emot mamma/.test(txtAv(o))); if (g) await klick(g, 'mamma vid grinden', 1.8); await vanta(3); for (let i = 0; i < 40 && !S.julFirad; i++) { await stangPopups(); await vanta(3); } return; }
    if (/^Tänd skylten vid vägen/.test(txt)) { await klick(H.adressSkylt, 'skylten vid vägen', 1.8); await vanta(2); return; }
    if (/^Öppna dörren – gästerna kommer/.test(txt)) { await klick(H.julKrans, 'kransen på dörren', 1.6); await vanta(3); for (let i = 0; i < 40 && !S.julFirad; i++) { await stangPopups(); await vanta(3); } return; }
    handling(`vet inte vad jag ska göra: "${txt}"`); await vanta(5);
  }
  // kärran: lyft det närmaste tunga skräpet och tippa det i PETG-kvarnen (finns den inte: vid kvarnen, B51)
  async function tungtTillPetg() {
    valj('sackkarra'); const p0 = H.spelare.pos;
    const t = H.skrapLista.filter((x) => x.userData.tung && x.userData.interaktion && x.userData.sort !== 'kajak' && H.kanLyfta(x)).sort((a, b) => Math.hypot(a.position.x - p0.x, a.position.z - p0.z) - Math.hypot(b.position.x - p0.x, b.position.z - p0.z))[0];
    if (!t) { handling('inget tungt skräp kvar'); await vanta(5); return false; }
    await gaTill(t, 1.2, 'en tunna'); t.userData.interaktion.aktivera(); await vanta(1);
    const p = H.petgKvarn();
    if (p) { await gaTill(p.mesh, 1.6, 'PETG-kvarnen'); H.petgAktivera(p); handling('tömmer det tunga i PETG-kvarnen'); }
    else { await klick(H.kvarn, 'kvarnen'); }
    await vanta(1); H.byt(0); return true;
  }
  let vantanIdag = 0;
  async function vantaPaMorgon() {
    const dag = S.dag; const slutDag = tid - dagStart;
    dagar.push({ dag, sek: slutDag, mynt: S.mynt, trivsel: H.trivsel(), bar: H.BARA_SKRAP[H.niva()], printat: S.stat.printat, vantan: vantanIdag, flask: { ...(S.fh?.dag?.[dag] || {}) } }); vantanIdag = 0;
    let n = 0; while (n++ < 400 && (S.dag === dag || !H.ui.igang)) { await vanta(0.5); if (n % 40 === 0) console.log(`[sim] väntar på morgonen (${n}) dag ${S.dag} igång ${H.ui.igang} paus ${H.pausad()} med ${!H.medEl2?.hidden} kort ${!H.ui.overlay?.hidden} panel ${!H.ui.butiksOverlay?.hidden} ${(document.querySelector('.ph-jul, .ph-kap, .ph-kapkort, .ph-rangkort, .fp-modal')?.className || '')}`); }
    await vanta(1); dagStart = tid; handling(`— dag ${S.dag} börjar —`);
  }

  window.__simBot = {
    del: () => JSON.parse(JSON.stringify({ logg, handlingar, dagar, kop, tid })),   /* AX-rapport efter varje speldag */
    async kor(tillDag = 6, maxMin = 120) {
      dagStart = tid; window.__textLogg('MÅL', '', H.stegText());
      const stopp = tid + maxMin * 60; let sista = -1, samma = 0, stegT = tid;
      while (S.dag < tillDag && tid < stopp) {   // B55: boten kör vidare in i kapitel 2
        { let w = 0; while (H.pratar?.() && w++ < 120) await vanta(0.1); }   // en spelare lyssnar klart innan hen gör nästa sak
        if (window.__simVidSteg) try { await window.__simVidSteg(H.stegId?.() || ''); } catch {}   /* inkorg 44: testerna kan titta på varje steg */
        const fore = S.steg + ':' + S.dag; console.log(`[sim] dag ${S.dag} ${fmt(tid - dagStart)} ${S.mynt} kr · ${H.stegId?.() || ''} · ${(H.stegText() || '').slice(0, 50)} · kö ${H.kanalLage?.().n ?? "?"}`); await gorSteg();
        if (NY && nyMalSteg.steg === S.steg && !H.pausad()) {   /* A-081: framsteg = målet byts. Mer än 30 s → FÖRVIRRAD, mer än 2 min utan en handling → FAST */
          const nyckel = [S.steg, S.stat.plockat, S.stat.printat, S.stat.salt, Math.floor((S.stat.trampat || 0) / 5), S.stat.malt, S.mynt, S.kvarn?.ut | 0].join(':');
          if (nyckel !== nyFramsteg.k) { nyFramsteg.k = nyckel; nyFramsteg.t = tid; }
          const g = tid - nyFramsteg.t;   // tid utan framsteg mot målet (målet byts, något plockas, mals, printas, säljs, trampas eller pengarna ändras)
          if (g > 30 && !nyMalSteg.forvirrad) { nyMalSteg.forvirrad = true; nyFlagga('FÖRVIRRAD', `${Math.round(g)} s utan framsteg på "${(H.stegText() || '').slice(0, 60)}"`); }
          if (g > 120 && !nyMalSteg.fast) { nyMalSteg.fast = true; nyFlagga('FAST', `2 min utan framsteg på "${(H.stegText() || '').slice(0, 60)}"`); }
        }
        if (fore === sista) { await vanta(1); if (++samma > 60 || tid - stegT > (+(window.__simStegMax || 15)) * 60) { handling('fastnade: ' + H.stegText()); break; } } else { sista = fore; samma = 0; stegT = tid; }
      }
      if (!dagar.some((d) => d.dag === S.dag)) dagar.push({ dag: S.dag, sek: tid - dagStart, mynt: S.mynt, trivsel: H.trivsel(), bar: H.BARA_SKRAP[H.niva()], printat: S.stat.printat, ofardig: true });
      return { logg, handlingar, dagar, kop, tid, nyFlaggor, regi: NY || window.__taBild ? (window.__regiLogg || []).slice() : [] };
    },
    logg, handlingar, dagar, kop, get tid() { return tid; },
  };
})();
