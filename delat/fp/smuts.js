// =============================================================
//  smuts.js – en yta full av smuts som man kan borsta ren
//  Smutsen är en textur ovanpå golvet. Det man borstar bort blir
//  genomskinligt, och ett rutnät räknar hur många procent som är rent.
// =============================================================
import * as THREE from 'three';

export class Smuts {
  /**
   * @param {number} bredd  meter i x-led
   * @param {number} djup   meter i z-led
   * @param {object} opt    { upplosning, rutnat, farg, mitt:[x,z], hojd, fro }
   */
  constructor(bredd, djup, opt = {}) {
    this.bredd = bredd;
    this.djup = djup;
    this.mitt = opt.mitt || [0, 0];
    this.N = opt.rutnat ?? 64;                      // rutnät för procent-räkning
    this.rena = new Uint8Array(this.N * this.N);
    this.antalRena = 0;

    const upp = opt.upplosning ?? 512;
    this.canvas = document.createElement('canvas');
    this.canvas.width = this.canvas.height = upp;
    this.ctx = this.canvas.getContext('2d');
    this.#ritaSmuts(opt.farg || '#5a4630', opt.fro ?? 1);

    this.textur = new THREE.CanvasTexture(this.canvas);
    this.textur.colorSpace = THREE.SRGBColorSpace;
    const mat = new THREE.MeshStandardMaterial({
      map: this.textur, transparent: true, roughness: 1, depthWrite: false,
      polygonOffset: true, polygonOffsetFactor: -1,
    });
    this.mesh = new THREE.Mesh(new THREE.PlaneGeometry(bredd, djup), mat);
    this.mesh.rotation.x = -Math.PI / 2;
    this.mesh.position.set(this.mitt[0], opt.hojd ?? 0.005, this.mitt[1]);
    this.mesh.receiveShadow = true;
    this.mesh.userData.smuts = this;
  }

  get procent() { return (this.antalRena / (this.N * this.N)) * 100; }
  get klar() { return this.procent >= 99.5; }

  #ritaSmuts(farg, fro) {
    const c = this.ctx, S = this.canvas.width;
    let s = fro * 9301 + 49297;
    const rnd = () => ((s = (s * 9301 + 49297) % 233280) / 233280);
    c.fillStyle = farg;
    c.globalAlpha = 0.85;
    c.fillRect(0, 0, S, S);
    // fläckar och korn för en "smutsig" känsla
    for (let i = 0; i < 900; i++) {
      c.globalAlpha = 0.08 + rnd() * 0.25;
      c.fillStyle = rnd() > 0.5 ? '#3b2d1e' : '#7a6448';
      c.beginPath();
      c.arc(rnd() * S, rnd() * S, 2 + rnd() * S * 0.04, 0, Math.PI * 2);
      c.fill();
    }
    c.globalAlpha = 1;
  }

  /** Världskoordinat → 0..1 på ytan. */
  #uv(x, z) {
    return [
      (x - (this.mitt[0] - this.bredd / 2)) / this.bredd,
      (z - (this.mitt[1] - this.djup / 2)) / this.djup,
    ];
  }

  /**
   * Borsta bort smuts runt en punkt i världen.
   * @returns antal nya rena rutor (bra för att dela ut mynt)
   */
  borsta(x, z, radieMeter) {
    const [u, v] = this.#uv(x, z);
    const S = this.canvas.width;
    const r = (radieMeter / this.bredd) * S;
    const c = this.ctx;
    c.save();
    c.globalCompositeOperation = 'destination-out';
    const g = c.createRadialGradient(u * S, v * S, r * 0.55, u * S, v * S, r);
    g.addColorStop(0, 'rgba(0,0,0,1)');
    g.addColorStop(1, 'rgba(0,0,0,0)');
    c.fillStyle = g;
    c.beginPath(); c.arc(u * S, v * S, r, 0, Math.PI * 2); c.fill();
    c.restore();
    this.textur.needsUpdate = true;
    return this.#markeraRena(u, v, (radieMeter * 0.8) / this.bredd);
  }

  #markeraRena(u, v, ru) {
    const N = this.N;
    let nya = 0;
    const r2 = (ru * N) ** 2;
    const cx = u * N, cy = v * N;
    for (let j = Math.floor(cy - ru * N); j <= Math.ceil(cy + ru * N); j++) {
      for (let i = Math.floor(cx - ru * N); i <= Math.ceil(cx + ru * N); i++) {
        if (i < 0 || j < 0 || i >= N || j >= N) continue;
        if ((i + 0.5 - cx) ** 2 + (j + 0.5 - cy) ** 2 > r2) continue;
        const k = j * N + i;
        if (!this.rena[k]) { this.rena[k] = 1; this.antalRena++; nya++; }
      }
    }
    return nya;
  }

  /** Spara/återställ (för sparning i webbläsaren). */
  exportera() {
    let s = '';
    for (let i = 0; i < this.rena.length; i += 4) {
      s += ((this.rena[i] | (this.rena[i + 1] << 1) | (this.rena[i + 2] << 2) | (this.rena[i + 3] << 3))).toString(16);
    }
    return s;
  }
  importera(s) {
    if (!s) return;
    const N = this.N, S = this.canvas.width, cell = S / N;
    this.ctx.save();
    this.ctx.globalCompositeOperation = 'destination-out';
    for (let k = 0; k < s.length; k++) {
      const b = parseInt(s[k], 16);
      for (let bit = 0; bit < 4; bit++) {
        const idx = k * 4 + bit;
        if (idx < this.rena.length && (b >> bit) & 1) {
          this.rena[idx] = 1; this.antalRena++;
          const i = idx % N, j = Math.floor(idx / N);
          this.ctx.fillRect(i * cell - 1, j * cell - 1, cell + 2, cell + 2);
        }
      }
    }
    this.ctx.restore();
    this.textur.needsUpdate = true;
  }
}
