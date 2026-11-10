// =============================================================
//  ui.js – hårkors, framstegsmätare, mynt, meddelanden, start/paus,
//  butik och touchknappar. Samlar också "använd"-knappen:
//    dator: vänsterklick eller E  ·  touch: ✋-knappen
// =============================================================
import { ljud } from './system.js';

const CSS = `
.fp-ui{position:fixed;inset:0;pointer-events:none;z-index:20;font-family:system-ui,-apple-system,"Segoe UI",sans-serif;color:#fff;user-select:none;-webkit-user-select:none}
.fp-kors{position:absolute;left:50%;top:50%;width:8px;height:8px;margin:-4px 0 0 -4px;border-radius:50%;background:#fff;box-shadow:0 0 0 2px rgba(0,0,0,.35);transition:transform .12s}
.fp-kors.aktiv{transform:scale(1.8);background:#ffd43b}
.fp-prompt{position:absolute;left:50%;top:calc(50% + 34px);transform:translateX(-50%);background:rgba(10,15,36,.72);padding:7px 14px;border-radius:999px;font-weight:700;font-size:15px;white-space:nowrap;opacity:0;transition:opacity .12s}
.fp-prompt.syns{opacity:1}
.fp-topp{position:absolute;top:max(14px,env(safe-area-inset-top));left:50%;transform:translateX(-50%);display:flex;gap:10px;align-items:center}
.fp-chip{background:rgba(10,15,36,.72);padding:8px 14px;border-radius:14px;font-weight:800;font-size:15px;display:flex;align-items:center;gap:8px;box-shadow:0 4px 14px rgba(0,0,0,.25)}
.fp-bar{width:min(36vw,240px);height:12px;border-radius:999px;background:rgba(255,255,255,.18);overflow:hidden}
.fp-bar i{display:block;height:100%;width:0;background:linear-gradient(90deg,#3de3ff,#7dffb0);transition:width .3s}
.fp-toast{position:absolute;left:50%;top:22%;transform:translate(-50%,0);background:rgba(10,15,36,.85);padding:10px 18px;border-radius:14px;font-weight:800;font-size:18px;opacity:0;transition:opacity .2s,transform .2s;pointer-events:none}
.fp-toast.syns{opacity:1;transform:translate(-50%,-8px)}
.fp-toast.bra{color:#7dffb0}.fp-toast.fel{color:#ff8a8a}.fp-toast.guld{color:#ffd43b}
.fp-hjalp{position:absolute;left:max(14px,env(safe-area-inset-left));bottom:max(14px,env(safe-area-inset-bottom));font-size:12px;opacity:.75;background:rgba(10,15,36,.55);padding:6px 10px;border-radius:10px;line-height:1.6}
.fp-overlay{position:fixed;inset:0;z-index:30;display:grid;place-items:center;background:rgba(8,12,30,.6);backdrop-filter:blur(4px);pointer-events:auto;font-family:system-ui,-apple-system,"Segoe UI",sans-serif;color:#fff}
.fp-overlay[hidden]{display:none}
.fp-ruta{background:rgba(12,18,40,.94);border-radius:22px;padding:28px 32px;max-width:440px;width:calc(100% - 32px);text-align:center;box-shadow:0 20px 60px rgba(0,0,0,.45)}
.fp-ruta h1{font-size:34px;margin:0 0 8px}.fp-ruta p{opacity:.85;line-height:1.55;margin:0 0 18px}
.fp-knapp{font:inherit;font-size:18px;font-weight:800;padding:12px 30px;border:0;border-radius:999px;background:#ffd43b;color:#141a33;cursor:pointer}
.fp-knapp.sek{background:rgba(255,255,255,.12);color:#fff;font-size:14px;padding:8px 16px;margin-top:12px}
.fp-tillbaka{display:block;margin-top:14px;color:#9fc3ff;font-size:14px;text-decoration:none}
.fp-vara{display:flex;align-items:center;gap:12px;text-align:left;background:rgba(255,255,255,.06);border-radius:14px;padding:10px 12px;margin-bottom:10px}
.fp-vara .ik{font-size:28px}.fp-vara .tx{flex:1}.fp-vara b{display:block}.fp-vara small{opacity:.7}
.fp-vara button{font:inherit;font-weight:800;border:0;border-radius:10px;padding:8px 12px;background:#ffd43b;color:#141a33;cursor:pointer;min-width:74px}
.fp-vara button:disabled{background:rgba(255,255,255,.15);color:rgba(255,255,255,.5);cursor:default}
.fp-touchknappar{position:absolute;right:max(16px,env(safe-area-inset-right));bottom:max(20px,env(safe-area-inset-bottom));display:none;gap:12px;align-items:flex-end;pointer-events:auto}
.fp-touch .fp-touchknappar{display:flex}.fp-touch .fp-hjalp{display:none}
.fp-tk{width:62px;height:62px;border-radius:50%;border:0;font-size:26px;background:rgba(10,15,36,.6);color:#fff;box-shadow:0 4px 14px rgba(0,0,0,.3);touch-action:none}
.fp-tk.stor{width:84px;height:84px;font-size:34px;background:rgba(255,212,59,.85)}
.fp-tk.trycks{transform:scale(.92);filter:brightness(1.2)}
.fp-joy{position:fixed;width:110px;height:110px;border-radius:50%;background:rgba(255,255,255,.12);border:2px solid rgba(255,255,255,.3);display:none;z-index:25;pointer-events:none}
.fp-joy-knopp{position:absolute;left:30px;top:30px;width:50px;height:50px;border-radius:50%;background:rgba(255,255,255,.55)}
`;

export class FpUI {
  /**
   * @param {object} o
   *  titel, text, hjalp (html), spelare (Spelare), onStart(), onAnvand(bool nere), onButik()
   */
  constructor(o) {
    this.o = o;
    const st = document.createElement('style'); st.textContent = CSS; document.head.appendChild(st);
    const ui = document.createElement('div');
    ui.className = 'fp-ui';
    ui.innerHTML = `
      <div class="fp-kors"></div>
      <div class="fp-prompt"></div>
      <div class="fp-topp">
        <div class="fp-chip"><span class="fp-etikett">Klart</span><div class="fp-bar"><i></i></div><span class="fp-pct">0%</span></div>
        <div class="fp-chip">🪙 <span class="fp-mynt">0</span></div>
      </div>
      <div class="fp-toast"></div>
      <div class="fp-hjalp">${o.hjalp || 'WASD gå · Mus titta · Klick/E använd · Shift spring · Space hopp · B butik'}</div>
      <div class="fp-touchknappar">
        <button class="fp-tk" data-k="butik">🛒</button>
        <button class="fp-tk" data-k="hopp">⤴️</button>
        <button class="fp-tk stor" data-k="anvand">✋</button>
      </div>`;
    document.body.appendChild(ui);
    this.el = (s) => ui.querySelector(s);
    this.ui = ui;

    // Start / paus
    this.overlay = document.createElement('div');
    this.overlay.className = 'fp-overlay';
    document.body.appendChild(this.overlay);
    this.butiksOverlay = document.createElement('div');
    this.butiksOverlay.className = 'fp-overlay';
    this.butiksOverlay.hidden = true;
    document.body.appendChild(this.butiksOverlay);

    this.igang = false;
    this.#input();
    this.visaStart();
  }

  // ---------- Visning ----------
  prompt(text) {
    const p = this.el('.fp-prompt');
    if (text) p.textContent = (this.o.spelare?.arTouch ? '✋ ' : '[E] ') + text;
    p.classList.toggle('syns', !!text);
    this.el('.fp-kors').classList.toggle('aktiv', !!text);
  }
  framsteg(pct, etikett) {
    const p = Math.max(0, Math.min(100, pct));
    this.el('.fp-bar i').style.width = p + '%';
    this.el('.fp-pct').textContent = Math.floor(p) + '%';
    if (etikett) this.el('.fp-etikett').textContent = etikett;
  }
  mynt(n) { this.el('.fp-mynt').textContent = n; }
  toast(text, typ = '') {
    const t = this.el('.fp-toast');
    t.textContent = text; t.className = 'fp-toast syns ' + typ;
    clearTimeout(this._tt); this._tt = setTimeout(() => t.classList.remove('syns'), 1400);
  }

  visaStart(titel = this.o.titel, text = this.o.text, knapp = 'Starta') {
    this.igang = false;
    if (this.o.spelare) this.o.spelare.aktiv = false;
    this.overlay.innerHTML = `<div class="fp-ruta"><h1>${titel}</h1><p>${text}</p>
      <button class="fp-knapp">${knapp}</button>
      ${this.o.onNollstall ? '<br><button class="fp-knapp sek" data-noll>Börja om från början</button>' : ''}
      <a class="fp-tillbaka" href="../../index.html">← Alla spel</a></div>`;
    this.overlay.hidden = false;
    this.overlay.querySelector('.fp-knapp').onclick = () => this.starta();
    const noll = this.overlay.querySelector('[data-noll]');
    if (noll) noll.onclick = () => { if (noll.dataset.saker) { this.o.onNollstall(); } else { noll.dataset.saker = 1; noll.textContent = 'Säker? Tryck igen'; } };
  }

  starta() {
    ljud.vakna();
    this.overlay.hidden = true;
    this.igang = true;
    if (this.o.spelare) { this.o.spelare.aktiv = true; this.o.spelare.lasMus(); }
    this.o.onStart?.();
  }

  pausa() {
    if (!this.igang || !this.butiksOverlay.hidden) return;
    this.visaStart('Pausad', 'Klicka för att fortsätta.', 'Fortsätt');
  }

  // ---------- Butik ----------
  oppnaButik(butik) {
    this.butik = butik;
    if (this.o.spelare) this.o.spelare.aktiv = false;
    if (document.pointerLockElement) document.exitPointerLock();
    this.butiksOverlay.hidden = false;
    this.#ritaButik();
  }
  stangButik() {
    this.butiksOverlay.hidden = true;
    if (this.igang && this.o.spelare) { this.o.spelare.aktiv = true; this.o.spelare.lasMus(); }
  }
  #ritaButik() {
    const b = this.butik;
    this.butiksOverlay.innerHTML = `<div class="fp-ruta"><h1>🛒 Butik</h1><p>Du har <b>🪙 ${b.mynt}</b></p>
      ${b.varor.map((v) => {
        const niva = b.niva(v.id), pris = b.pris(v.id);
        return `<div class="fp-vara"><span class="ik">${v.ikon}</span><div class="tx"><b>${v.namn}</b>
          <small>${v.beskrivning || ''} · Nivå ${niva}/${v.priser.length}</small></div>
          <button data-id="${v.id}" ${pris === null || !b.kanKopa(v.id) ? 'disabled' : ''}>${pris === null ? 'Max' : '🪙 ' + pris}</button></div>`;
      }).join('')}
      <button class="fp-knapp">Klar</button></div>`;
    this.butiksOverlay.querySelectorAll('[data-id]').forEach((k) => {
      k.onclick = () => {
        if (b.kop(k.dataset.id)) { ljud.kop(); this.mynt(b.mynt); this.toast('Uppgraderad!', 'guld'); this.#ritaButik(); }
      };
    });
    this.butiksOverlay.querySelector('.fp-knapp').onclick = () => this.stangButik();
  }

  // ---------- Input ----------
  #input() {
    const anvand = (nere) => { if (this.igang && this.butiksOverlay.hidden) this.o.onAnvand?.(nere); };
    const canvas = () => this.o.spelare?.dom;

    addEventListener('mousedown', (e) => {
      if (e.button !== 0 || !this.igang) return;
      if (e.target !== canvas()) return;
      if (!this.o.spelare?.musLast) { this.o.spelare?.lasMus(); return; }
      anvand(true);
    });
    addEventListener('mouseup', (e) => { if (e.button === 0) anvand(false); });
    addEventListener('keydown', (e) => {
      if (e.repeat) return;
      if (e.code === 'KeyE') anvand(true);
      if (e.code === 'KeyB' && this.igang) {
        this.butiksOverlay.hidden ? this.o.onButik?.() : this.stangButik();
      }
    });
    addEventListener('keyup', (e) => { if (e.code === 'KeyE') anvand(false); });

    document.addEventListener('pointerlockchange', () => {
      if (!document.pointerLockElement && this.igang && this.butiksOverlay.hidden && !this.o.spelare?.arTouch) this.pausa();
    });

    // touchknappar
    this.ui.querySelectorAll('.fp-tk').forEach((k) => {
      const ner = (e) => {
        e.preventDefault(); k.classList.add('trycks');
        if (k.dataset.k === 'anvand') anvand(true);
        if (k.dataset.k === 'hopp') this.o.spelare?.hopp();
        if (k.dataset.k === 'butik' && this.igang) this.o.onButik?.();
      };
      const upp = (e) => { e.preventDefault(); k.classList.remove('trycks'); if (k.dataset.k === 'anvand') anvand(false); };
      k.addEventListener('touchstart', ner, { passive: false });
      k.addEventListener('touchend', upp, { passive: false });
      k.addEventListener('touchcancel', upp, { passive: false });
    });
  }
}
