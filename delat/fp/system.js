// =============================================================
//  system.js – sparning, butik/uppgraderingar och ljud
// =============================================================

// ---------- Sparning ----------
/**
 * const spar = new Sparning('mitt-spel', { mynt: 0, nivaer: {} });
 * spar.data.mynt += 5; spar.spara();
 */
export class Sparning {
  constructor(spelId, standard = {}, version = 1) {
    this.nyckel = `spar:${spelId}:v${version}`;
    this.standard = standard;
    this.data = structuredClone(standard);
    try {
      const s = localStorage.getItem(this.nyckel);
      if (s) this.data = { ...structuredClone(standard), ...JSON.parse(s) };
    } catch { /* ingen lagring – kör utan sparning */ }
    this._t = null;
  }
  spara(direkt = false) {
    clearTimeout(this._t);
    const gor = () => { try { localStorage.setItem(this.nyckel, JSON.stringify(this.data)); } catch {} };
    direkt ? gor() : (this._t = setTimeout(gor, 400));
  }
  nollstall() {
    this.data = structuredClone(this.standard);
    try { localStorage.removeItem(this.nyckel); } catch {}
  }
}

// ---------- Butik / uppgraderingar ----------
/**
 * const butik = new Butik(spar, [
 *   { id:'borste', namn:'Större borste', ikon:'🧹', priser:[20,60,150], effekt:(niva)=>{...} },
 * ]);
 * Nivå 0 = start. priser[i] = vad nivå i+1 kostar.
 */
export class Butik {
  constructor(sparning, varor) {
    this.spar = sparning;
    this.varor = varor;
    this.spar.data.mynt ??= 0;
    this.spar.data.nivaer ??= {};
    this.varor.forEach((v) => v.effekt?.(this.niva(v.id)));
  }
  get mynt() { return this.spar.data.mynt; }
  set mynt(n) { this.spar.data.mynt = n; this.spar.spara(); }
  niva(id) { return this.spar.data.nivaer[id] || 0; }
  pris(id) {
    const v = this.varor.find((x) => x.id === id);
    return v.priser[this.niva(id)] ?? null; // null = max
  }
  kanKopa(id) { const p = this.pris(id); return p !== null && this.mynt >= p; }
  kop(id) {
    if (!this.kanKopa(id)) return false;
    const v = this.varor.find((x) => x.id === id);
    this.spar.data.mynt -= this.pris(id);
    this.spar.data.nivaer[id] = this.niva(id) + 1;
    v.effekt?.(this.niva(id));
    this.spar.spara();
    return true;
  }
}

// ---------- Ljud (syntetiskt, inga ljudfiler behövs) ----------
let ac = null;
let ljudPa = true;
function ctx() {
  if (!ac) { try { ac = new (window.AudioContext || window.webkitAudioContext)(); } catch { return null; } }
  if (ac.state === 'suspended') ac.resume();
  return ac;
}
function ton(f, d = 0.12, typ = 'sine', vol = 0.12, fordrojning = 0, glid = null) {
  const c = ctx(); if (!c || !ljudPa) return;
  const o = c.createOscillator(), g = c.createGain(), t = c.currentTime + fordrojning;
  o.type = typ; o.frequency.setValueAtTime(f, t);
  if (glid) o.frequency.exponentialRampToValueAtTime(glid, t + d);
  g.gain.setValueAtTime(0, t);
  g.gain.linearRampToValueAtTime(vol, t + 0.008);
  g.gain.exponentialRampToValueAtTime(0.0001, t + d);
  o.connect(g).connect(c.destination);
  o.start(t); o.stop(t + d + 0.02);
}
let brus = null;
function bruss(d = 0.08, frekvens = 1800, vol = 0.05) {
  const c = ctx(); if (!c || !ljudPa) return;
  if (!brus) {
    brus = c.createBuffer(1, c.sampleRate, c.sampleRate);
    const ch = brus.getChannelData(0);
    for (let i = 0; i < ch.length; i++) ch[i] = Math.random() * 2 - 1;
  }
  const s = c.createBufferSource(); s.buffer = brus;
  const f = c.createBiquadFilter(); f.type = 'bandpass'; f.frequency.value = frekvens; f.Q.value = 0.8;
  const g = c.createGain(), t = c.currentTime;
  g.gain.setValueAtTime(vol, t); g.gain.exponentialRampToValueAtTime(0.0001, t + d);
  s.connect(f).connect(g).connect(c.destination);
  s.start(t, Math.random() * 0.5); s.stop(t + d);
}
let sistBorst = 0;
export const ljud = {
  get pa() { return ljudPa; },
  set pa(v) { ljudPa = v; },
  vakna: () => ctx(),
  plock: () => { ton(520, 0.08, 'triangle', 0.12); ton(780, 0.1, 'triangle', 0.1, 0.05); },
  placera: () => { ton(330, 0.1, 'sine', 0.16, 0, 220); bruss(0.05, 900, 0.05); },
  fel: () => { ton(180, 0.18, 'sawtooth', 0.06); ton(140, 0.22, 'sawtooth', 0.05, 0.08); },
  mynt: () => { ton(988, 0.06, 'square', 0.05); ton(1319, 0.12, 'square', 0.05, 0.05); },
  borsta: () => {
    const nu = performance.now();
    if (nu - sistBorst < 70) return;
    sistBorst = nu;
    bruss(0.09, 1400 + Math.random() * 1200, 0.045);
  },
  klar: () => [523, 659, 784, 1047].forEach((f, i) => ton(f, 0.25, 'triangle', 0.12, i * 0.09)),
  stor: () => [392, 523, 659, 784, 1047, 1319].forEach((f, i) => ton(f, 0.35, 'triangle', 0.12, i * 0.1)),
  kop: () => { ton(660, 0.08, 'square', 0.06); ton(880, 0.08, 'square', 0.06, 0.07); ton(1320, 0.15, 'square', 0.06, 0.14); },
};
