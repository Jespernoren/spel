// Soptippsvägen 1 – punkt AX: en simuleringsbot som spelar kapitel 1 (dag 1–5) som en spelare.
// Laddas i sidan av verktyg/sim-kapitel1.mjs. Tiden är virtuell: setTimeout, setInterval, requestAnimationFrame
// och performance.now går på spelets klocka, så att sms, brev och repliker kommer i rätt ordning och på rätt speltid.
// Boten går (4,5 m/s), plockar, mal, vevar, trampar, printar, köper och säljer via spelets egna funktioner.
// Allt som visas eller läses upp loggas med tid och källa (window.__textLogg i spel.js).
(() => {
  const H = window.__printahem, S = H.S;
  const GA_FART = 5.2;          // m/s, samma som spelaren (FART_UTAN)
  const LASFART = 15;           // tecken per sekund när ett meddelande läses
  const MENY_TID = 1.5;         // sekunder att hitta i en meny
  const V = window.__vt;
  const logg = [], handlingar = [], dagar = [];
  let tid = 0, dagStart = 0, senasteSteg = -1, senasteMal = '';
  const fmt = (s) => `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, '0')}`;
  window.__textLogg = (kalla, vem, text, varfor = '') => {
    text = String(text).replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim(); if (!text) return;
    logg.push({ t: tid - dagStart, tot: tid, dag: S.dag, kalla, vem: String(vem || ''), text, varfor: String(varfor || ''), steg: H.stegText?.() || '', mynt: S.mynt });
  };
  // ui.toast och morgonkortet går via FpUI – fånga dem här
  const toast0 = H.ui.toast.bind(H.ui); H.ui.toast = (t, typ) => { window.__textLogg('toast', typ || '', t); return toast0(t, typ); };
  const start0 = H.ui.visaStart.bind(H.ui); H.ui.visaStart = (titel, text, knapp) => { window.__textLogg('morgonkort', titel, String(titel) + ' · ' + String(text || '')); return start0(titel, text, knapp); };
  const handling = (text) => { handlingar.push({ t: tid - dagStart, tot: tid, dag: S.dag, text, mynt: S.mynt }); if (window.__simUtforlig) console.log(`[sim]   ${fmt(tid - dagStart)} ${text}`); };

  // ---------- tid ----------
  const synligt = (el) => el && !el.hidden && el.offsetParent !== null || (el && !el.hidden && getComputedStyle(el).display !== 'none' && el.isConnected);
  function tick(dt = 0.1) {
    V.fram(dt * 1000);
    if (!H.pausad()) H.uppdatera(dt);
    tid += dt;
    if (S.steg !== senasteSteg) { senasteSteg = S.steg; const m = H.stegText(); if (m !== senasteMal) { senasteMal = m; window.__textLogg('MÅL', '', m || '(inga mål)'); } }
  }
  async function vanta(sek) {
    const slut = tid + sek;
    while (tid < slut) {
      tick(0.1);
      if (Math.round(tid * 10) % 5 === 0) await stangPopups();
      if (Math.round(tid * 10) % 20 === 0) await new Promise((r) => V.verklig(r, 0));
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
  async function ga(x, z, namn) {
    const p = H.spelare.pos, d = Math.hypot(x - p.x, z - p.z);
    if (d < 0.6) return;
    const steg = Math.ceil(d / 2);
    for (let i = 1; i <= steg; i++) { p.set(p.x + (x - p.x) / (steg - i + 1), 0, p.z + (z - p.z) / (steg - i + 1)); await vanta(Math.min(d, 2) / GA_FART); }
    if (namn) handling(`gå till ${namn} (${d.toFixed(0)} m)`);
  }
  async function gaTill(o, avst = 1.4, namn) {
    const m = pos(o), p = H.spelare.pos, d = Math.hypot(m.x - p.x, m.z - p.z);
    if (d <= avst) { titta(m); return; }
    const k = (d - avst) / d; await ga(p.x + (m.x - p.x) * k, p.z + (m.z - p.z) * k, namn); titta(m);
  }
  function titta(m) { const p = H.spelare.pos; H.spelare.yaw = Math.atan2(-(m.x - p.x), -(m.z - p.z)); H.spelare.pitch = -0.3; }
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
    if (i < 0) return false; H.byt(i); return true;
  }

  // ---------- Ali ----------
  const aliPos = () => ({ x: H.ALI.x, z: H.ALI.z - 1.6 });
  async function ali(gor, varfor) {
    const a = aliPos(); await ga(a.x, a.z, 'Ali'); handling('öppnar Alis butik' + (varfor ? ' – ' + varfor : ''));
    iButik = true; H.oppnaMarknad(); await vanta(MENY_TID);
    try { await gor(); await vanta(0.5); } finally { H.ui.stangButik(); iButik = false; } await vanta(0.3);
  }
  function aliKnapp(pre, id) { return [...document.querySelectorAll(`[data-val^="${pre}:"]`)].find((e) => e.dataset.val.endsWith(':' + id)); }
  async function saljAllt(behall = []) {
    let tot = 0;
    for (;;) {
      const k = [...document.querySelectorAll('[data-val^="s:"]')].find((e) => !behall.some((b) => e.dataset.val.endsWith(':' + b)));
      if (!k) break; const fore = S.mynt; k.click(); await vanta(0.6); tot += S.mynt - fore; if (S.mynt === fore) break;
    }
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
      if (!S.kvarn.motor) { await gaTill(H.vevYta, 1.2); H.veva(1.2); }
      else if (S.strom < 1 && H.solEffekt() <= 0) { await strom(5); continue; }   // motorn behöver ström
      vantanIdag += 1; await vanta(1);   // BM: VÄNTAN – står och väntar på printen utan annat att göra
    }
  }
  async function hamtaRulle() {
    if (!H.helaRullar() || !H.rullePlats()) return false;
    return klick(H.rulle, 'rullen vid extrudern');
  }
  // se till att skrivaren har minst `gram` filament
  async function filament(sk, gram, varfor = '') {
    let varv = 0;
    while (sk.fil < gram && varv++ < 40) {
      if (sk.gen === 4) {   // röd PETG: tunga saker i PETG-kvarnen → ta rullarna → ladda
        if (H.antalInv('rulle2')) { valj('rulle2'); await klick(sk.mesh, 'PETG-skrivaren'); handling(`laddar röd PETG (${Math.round(sk.fil)} g)`); continue; }
        if (S.petg.rullar) { const p = H.petgKvarn(); await gaTill(p.mesh, 1.6, 'PETG-kvarnen'); H.byt(0); H.petgAktivera(p); handling('tar röd PETG ur PETG-kvarnen'); continue; }
        if (S.petg.ko > 1) { await vanta(3); continue; }
        if (!(await tungtTillPetg())) return false; continue;
      }
      if (H.antalInv('rulle')) { valj('rulle'); await klick(sk.mesh, 'skrivaren'); handling(`laddar rulle i skrivaren (${Math.round(sk.fil)} g)`); continue; }
      if (H.helaRullar()) { await hamtaRulle(); continue; }
      const tipp = S.tippNyckel && gardsSkrap().length <= H.gardMal();
      const n = await plockaLass({ tippen: tipp });
      if (!n && !H.hand.saker.length) { if (!S.kvarn.tratt) { handling('inget skräp kvar att mala!'); return false; } }
      await tomIKvarnen(); await mal();
    }
    return sk.fil >= gram;
  }
  // ström: trampa vid cykeln tills det räcker
  async function strom(behov = 3) {
    if (H.solEffekt() > 0 || S.strom >= behov) return;
    await gaTill(H.cykel, 1.2, 'cykeln'); let n = 0;
    while (S.strom < Math.min(behov + 4, 11.5) && n++ < 60) { H.trampa(1.1); await vanta(1); }
  }

  // ---------- printa ----------
  const skrivareAlla = (petg = false) => H.skrivare.filter((x) => x.mesh?.visible !== false && (x.gen === 4) === petg);
  // kapitel 2: PETG-skrivaren (gen 4) tar bara röd PETG (nivå 2) – vanliga saker går på de vanliga skrivarna
  const arPetg = (val) => (val?.typ && H.VAROR[val.typ]?.niva === 2) || false;
  const ledig = (val) => { const petg = arPetg(val); const l = skrivareAlla(petg); return l.filter((x) => !x.jobb && !x.klar).sort((a, b) => b.gen - a.gen)[0] || l[0] || skrivareAlla()[0]; };
  async function taUt(sk) { if (!sk.klar) return; const n = H.antalUt(sk); await klick(sk.mesh, 'skrivaren'); handling(`tar ut ${n} st ur skrivaren`); }
  async function printa(val, { vantaKlart = true } = {}) {
    const namn = val.maskin ? H.MASKINER[val.maskin].namn : H.VAROR[val.typ].namn;
    const sk = ledig(val); if (!sk) return false;
    if (sk.klar) await taUt(sk);
    const delar = val.maskin ? (H.MASKINER[val.maskin].delar || 1) : 1;
    const gram = (val.maskin ? H.MASKINER[val.maskin].gram : H.VAROR[val.typ].gram) * delar;
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
      if (sk.fil < 5 && sk.jobb) { await filament(sk, 300); continue; }
      if (H.solEffekt() <= 0 && S.strom < 1.5) { await strom(4); continue; }
      if (S.strom > 6 || H.solEffekt() > 0) {
        if (!H.extruderFull() && S.kvarn.tratt < 3 && gardsSkrap().length) { await plockaLass({}); await tomIKvarnen(); if (!S.kvarn.motor) await mal(); continue; }
      }
      await vanta(1);
    }
  }

  // ---------- köp + printa + använd ----------
  const MASKIN = (id) => H.MASKINER[id];
  async function tjana(mal, varfor) {
    // printa och sälj den bästa saken du har recept på tills du har `mal` kr
    let varv = 0;
    while (S.mynt < mal && varv++ < 30) {
      const kand = Object.keys(H.VAROR).filter((t) => !/^(g_|h_|hf_|ra_|r_|p_|fynd|burk|rulle|n_)/.test(t) && H.VAROR[t].pris > 0 && !H.VAROR[t].lyx && !H.VAROR[t].niva && H.harRecept(t) && (H.VAROR[t].syns?.() ?? true) && !H.VAROR[t].gava && H.VAROR[t].gram > 0);
      kand.sort((a, b) => H.prisNu(b) / H.VAROR[b].tid - H.prisNu(a) / H.VAROR[a].tid);
      const t = kand[0]; if (!t) { handling('inget att printa och sälja!'); return; }
      handling(`tjänar pengar${varfor ? ' till ' + varfor : ''}: ${S.mynt}/${mal} kr → printar ${H.VAROR[t].namn.toLowerCase()} (${H.prisNu(t)} kr)`);
      const sk = ledig(); const antal = Math.max(1, Math.min(4, Math.floor((sk.fil || 0) / H.VAROR[t].gram)));
      for (let i = 0; i < antal && S.mynt + i * H.prisNu(t) < mal; i++) { if (!(await printa({ typ: t }))) break; }
      await ali(() => saljAllt(BEHALL().filter((x) => x !== t)), 'sälja');   // det som printades för pengar säljs (en pall/kruka får vara kvar till trivseln)
    }
  }
  const BEHALL = () => ['sang', 'pall', 'kruka', 'lampskarm', 'fagelholk', ...(H.aktivGava() ? [H.aktivGava()] : [])].filter((t) => !(t === 'kruka' && H.antalInv('kruka') > 2));
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
    const m = MASKIN(id);
    if (m.hem) {
      if (id === 'fonster') { valj(bs); H.taBortInv(bs); await gaTill(H.skjulYta, 2, 'skjulet'); H.sattFonster(); handling('sätter ett fönster'); return true; }
      if (id === 'vaggar' || id === 'tapeter') { const v = ['bak', 'vanster', 'hoger', 'fram'].find((x) => !(id === 'vaggar' ? H.vaggarKlara() : H.tapetKlara()).includes(x)); H.siktaVagg(v); valj(bs); const ok = await klick(H.skjulYta, 'skjulet (' + v + ')', 2.5); H.siktaVagg(null); return ok; }
      valj(bs); return klick(H.skjulYta, 'skjulet', 2.5);
    }
    if (['kvarnmotor', 'stortratt', 'matarband'].includes(id)) { valj(bs); return klick(H.kvarn, 'kvarnen'); }
    if (id.startsWith('spolhallare')) { const sk = skrivareAlla().find((x) => (x.spolNiva || 0) < (id === 'spolhallare' ? 1 : id === 'spolhallare2' ? 2 : 3)) || skrivareAlla()[0]; valj(bs); return klick(sk.mesh, 'skrivaren (spolhållare)'); }
    return placera(bs);
  }
  async function placera(t) {
    const typ = t.startsWith('byggsats:') ? t.split(':')[1] : t;
    let x, z, pa = null;
    const m = H.MASKINER[typ];
    if (m?.kraverBord) { const b = H.placerade.find((p) => p.typ === 'bord' && !p.har); if (!b) { handling('inget ledigt bord'); return false; } x = b.x; z = b.z; pa = b.id; }
    else { const pl = H.nastaPlats(typ); if (pl) { x = pl.x; z = pl.z; } else { const n = H.placerade.length; x = H.SKJUL.x - 2 + (n % 4) * 1.1; z = H.SKJUL.z + H.SKJUL.d / 2 + 1.5 + Math.floor(n / 4) * 1.1; } }
    await ga(x + 1.2, z + 1.2, 'platsen för ' + (m?.namn || H.VAROR[typ]?.namn || typ).toLowerCase()); valj(t); await vanta(1);
    H.taBortInv(t); const p = { id: 'p' + (S.nastaId++), typ, x, z, r: 0, r8: 0, ...(pa ? { pa } : {}) }; H.placera(p);
    handling(`ställer ut ${(m?.namn || H.VAROR[typ]?.namn || typ).toLowerCase()}`); await vanta(0.5); return true;
  }
  async function gePresent(v) {
    if (!H.antalInv(v)) { handling(`har ingen ${v}: post ${JSON.stringify(S.post)} rolf ${JSON.stringify(S.rolf)} steg ${S.steg} pausad ${H.pausad()} med ${H.medEl2?.hidden} ${(H.medEl2?.innerText || "").slice(0, 80)} igang ${H.ui.igang} ov ${H.ui.overlay.hidden} butik ${H.ui.butiksOverlay.hidden} klar ${H.STEG[S.steg].klar()} text ${(H.ui.butiksOverlay.innerText||"").slice(0,80)}`); return false; } const ok = valj(v); handling(`valj ${v}: ${ok}, vald ${H.valdTyp()}, post ${JSON.stringify({ l: S.post.lapp, tr: S.post.tillRolf, tm: S.post.tillMig })}, nummer ${S.rolfNummer}`); return klick(H.postlada, 'Rolfs postlåda');
  }

  // ---------- ett steg ----------
  async function gorSteg() {
    await stangPopups();
    if (S.post.tillMig?.length || S.post.lapp) { await klick(H.postlada, 'Rolfs postlåda'); await stangPopups(); }
    if (H.vantarPaNummer?.()) { await klick(H.postlada, 'Rolfs postlåda (telefonnumret)'); }
    for (const sk of skrivareAlla()) if (sk.klar && !sk.jobb) await taUt(sk);
    if (!S.skyltUppe && S.dag === 1) { await klick(H.bradhog, 'brädhögen'); await vanta(4); return; }
    const id = H.stegId(), txt = H.stegText() || '', st = H.STEG[S.steg];
    if (!st) return 'slut';
    if (st.sov) {
      if (H.sovDags()) { await klick(H.taltSang, 'sängen'); await vantaPaMorgon(); return; }
      handling(`väntar på kvällen (vaken ${Math.round(S.vakenTid || 0)} s)`); await tjana(S.mynt + 60, 'kvällen'); return;
    }
    switch (id) {
      case 'lasta': await klick(H.vagCykel, 'cykeln vid vägen'); return;
      case 'stall': valj('skrivareS'); await klick(H.startYta, 'rutan i linje 1'); return;
      case 'bygg': await klick(H.vagCykel, 'cykeln'); await vanta(3); return;
      case 'trampa': await strom(6); await printa({ typ: 'nyckelring' }); return;
      case 'salj': {
        const sk = H.skrivare.find((x) => x.id === 'g1');
        if (H.antalInv('nyckelring') < 3 && sk.fil >= 100) { await strom(6); await printa({ typ: 'nyckelring' }); return; }
        await ali(() => saljAllt(), 'sälja nyckelringar'); return;
      }
      case 'kop': await ali(async () => { await kopHosAli('gammalkvarn'); if (S.mynt >= 30) await kopHosAli('cykelbatteri'); }, 'kvarnen'); return;
      case 'kvarn': valj('byggsats:gammalkvarn'); await klick(H.startYta, 'kvarnens ruta'); return;
      case 'flaska': { const sk = H.skrivare.find((x) => x.id === 'g1'); await filament(sk, sk.fil + 900); return; }
      case 'kopGrip': await kopMaskin('grip'); return;
      case 'printGrip': if (!H.antalInv('byggsats:grip') && !S.grip) await printa({ maskin: 'grip' }); return;
      case 'kopMotor': await kopMaskin('kvarnmotor'); return;
      case 'monteraMotor': if (!S.kvarn.motor) await printa({ maskin: 'kvarnmotor' }); return;
      case 'kopSang': { if (S.ritningar.includes('sang')) return; if (S.mynt < 60) { await tjana(60, 'sängen'); return; } await ali(async () => { await kopHosAli('sang'); }, 'köpa sängen'); return; }
      case 'printSang': await printa({ typ: 'sang' }); return;
      case 'sov1': valj('sang'); await klick(H.sangSpoke, 'sängplatsen i skjulet', 2); await vantaPaMorgon(); return;
      case 'kopSack': await bygg('korg'); return;
      case 'kruka': if (!H.harRecept('kruka')) await ali(async () => {}, 'krukreceptet'); await printa({ typ: 'kruka' }); return;
      case 'ryggkorg': await bygg('ryggkorg'); return;
      case 'pall': await kopRecept('pall'); await printa({ typ: 'pall' }); if (H.antalInv('pall')) await placera('pall'); return;
    }
    if (/^Städa gården/.test(txt)) { const sk = ledig(); await plockaLass({}); await tomIKvarnen(); await mal(); if (H.helaRullar()) { await hamtaRulle(); if (sk.fil < 1500) { valj('rulle'); await klick(sk.mesh, 'skrivaren'); } } return; }
    if (/^Läs brevet i Rolfs postlåda/.test(txt)) { await klick(H.postlada, 'Rolfs postlåda'); await stangPopups(); return; }
    if (/^Printa /.test(txt) && H.aktivGava()) { const v = H.aktivGava(); if (!H.antalInv(v)) await printa({ typ: v }); return; }
    if (/^Lägg .* i Rolfs postlåda/.test(txt)) { await gePresent(H.aktivGava()); return; }
    if (/^Hämta 5 skräp på soptippen/.test(txt)) { await plockaLass({ tippen: true }); await tomIKvarnen(); await mal(); return; }
    if (/^Mal tunnan i PETG-kvarnen|^Mal tunga saker i PETG-kvarnen/.test(txt)) { await tungtTillPetg(); return; }
    if (/^Printa en designvas/.test(txt)) { if (!H.harRecept('n2_vas')) await kopRecept('n2_vas'); await printa({ typ: 'n2_vas' }); return; }
    if (/^Sälj designvasen/.test(txt)) { if (!H.antalInv('n2_vas')) await printa({ typ: 'n2_vas' }); await ali(() => saljAllt(), 'sälja vasen'); return; }
    if (/^Lägg 3 vaser i säljlådan/.test(txt)) {
      if (!H.antalInv('n2_vas')) { await printa({ typ: 'n2_vas' }); return; }
      const l = H.placerade.find((p) => p.typ === 'saljlada'); if (!l) { handling('ingen säljlåda'); await vanta(3); return; }
      valj('n2_vas'); await gaTill(l.mesh, 1.4, 'säljlådan'); H.saljladaAktivera(l); handling('lägger en vas i säljlådan'); await vanta(1); return;
    }
    if (/^Köp receptet på cykelhjälmen/.test(txt)) { await kopRecept('n2_hjalm'); return; }
    if (/^Printa en lampskärm att sälja/.test(txt)) { if (!H.harRecept('lampskarm')) await kopRecept('lampskarm'); await printa({ typ: 'lampskarm' }); return; }   // CF
    if (/^Lyft en tunna/.test(txt)) {
      valj('karra'); const t = H.skrapLista.filter((x) => x.userData.tung && x.userData.interaktion).sort((a, b) => Math.hypot(a.position.x - H.spelare.pos.x, a.position.z - H.spelare.pos.z) - Math.hypot(b.position.x - H.spelare.pos.x, b.position.z - H.spelare.pos.z))[0];
      if (!t) { handling('ingen tunna att lyfta'); await vanta(5); return; }
      await gaTill(t, 1.2, 'en tunna'); t.userData.interaktion.aktivera(); await vanta(1); handling('lyfter en tunna med kärran'); await klick(H.kvarn, 'kvarnen'); await mal(); H.byt(0); return;
    }
    if (/^Fyll kärran/.test(txt)) {
      valj('karra'); let n = 0;
      while (!H.karraFull(200) && n < 8) { const l = gardsSkrap().length ? gardsSkrap() : tippSkrap(); if (!l.length) break; const p = H.spelare.pos; l.sort((a, b) => Math.hypot(a.position.x - p.x, a.position.z - p.z) - Math.hypot(b.position.x - p.x, b.position.z - p.z)); await gaTill(l[0], 1.0); l[0].userData.interaktion.aktivera(); await vanta(0.6); n++; }
      handling(`fyller kärran med ${n} skräp`); await klick(H.kvarn, 'kvarnen'); await mal(); H.byt(0); return;
    }
    const bild = typeof st.bild === 'function' ? st.bild() : st.bild;
    if (bild?.startsWith('byggsats:')) { const m = bild.split(':')[1]; await bygg(m); return; }
    if (/trivsel/.test(txt)) {
      const t = H.nastaInred();
      if (t.startsWith('byggsats:')) await bygg(t.split(':')[1]);
      else { await kopRecept(t); await printa({ typ: t }); if (H.antalInv(t)) await placera(t); }
      return;
    }
    handling(`vet inte vad jag ska göra: "${txt}"`); await vanta(5);
  }
  // kärran: lyft det närmaste tunga skräpet och tippa det i PETG-kvarnen (finns den inte: vid kvarnen, B51)
  async function tungtTillPetg() {
    valj('karra'); const p0 = H.spelare.pos;
    const t = H.skrapLista.filter((x) => x.userData.tung && x.userData.interaktion).sort((a, b) => Math.hypot(a.position.x - p0.x, a.position.z - p0.z) - Math.hypot(b.position.x - p0.x, b.position.z - p0.z))[0];
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
    dagar.push({ dag, sek: slutDag, mynt: S.mynt, trivsel: H.trivsel(), bar: H.BARA_SKRAP[H.niva()], printat: S.stat.printat, vantan: vantanIdag }); vantanIdag = 0;
    let n = 0; while (n++ < 400 && (S.dag === dag || !H.ui.igang)) { await vanta(0.5); }
    await vanta(1); dagStart = tid; handling(`— dag ${S.dag} börjar —`);
  }

  window.__simBot = {
    async kor(tillDag = 6, maxMin = 120) {
      dagStart = tid; window.__textLogg('MÅL', '', H.stegText());
      const stopp = tid + maxMin * 60; let sista = -1, samma = 0;
      while (S.dag < tillDag && tid < stopp) {   // B55: boten kör vidare in i kapitel 2
        { let w = 0; while (H.pratar?.() && w++ < 120) await vanta(0.1); }   // en spelare lyssnar klart innan hen gör nästa sak
        const fore = S.steg + ':' + S.dag; console.log(`[sim] dag ${S.dag} ${fmt(tid - dagStart)} ${S.mynt} kr · ${H.stegId?.() || ''} · ${(H.stegText() || '').slice(0, 50)}`); await gorSteg();
        if (fore === sista) { await vanta(1); if (++samma > 60) { handling('fastnade: ' + H.stegText()); break; } } else { sista = fore; samma = 0; }
      }
      if (!dagar.some((d) => d.dag === S.dag)) dagar.push({ dag: S.dag, sek: tid - dagStart, mynt: S.mynt, trivsel: H.trivsel(), bar: H.BARA_SKRAP[H.niva()], printat: S.stat.printat, ofardig: true });
      return { logg, handlingar, dagar, kop, tid };
    },
    logg, handlingar, dagar, kop, get tid() { return tid; },
  };
})();
