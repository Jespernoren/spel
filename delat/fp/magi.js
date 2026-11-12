// =============================================================
//  magi.js – trollstav, levitation och glittergnistor
//  import { Trollstav, Levitation, Gnistor } from '../../delat/fp/magi.js';
// =============================================================
import * as THREE from 'three';

// ---------- Gnistor: billiga partiklar (glitter, damm, stjärnstoft) ----------
export class Gnistor {
  constructor(scen, { max = 600, storlek = 0.05 } = {}) {
    this.max = max;
    this.pos = new Float32Array(max * 3);
    this.farg = new Float32Array(max * 3);
    this.vel = new Float32Array(max * 3);
    this.liv = new Float32Array(max);
    this.livMax = new Float32Array(max);
    this.grav = new Float32Array(max);
    this.mal = new Array(max).fill(null);   // valfri Vector3 som partikeln dras mot
    this.malRadie = new Float32Array(max);
    this.nasta = 0;
    for (let i = 0; i < max; i++) this.pos[i * 3 + 1] = -999;
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(this.pos, 3));
    geo.setAttribute('color', new THREE.BufferAttribute(this.farg, 3));
    const c = document.createElement('canvas'); c.width = c.height = 64;
    const x = c.getContext('2d'), g = x.createRadialGradient(32, 32, 0, 32, 32, 32);
    g.addColorStop(0, 'rgba(255,255,255,1)'); g.addColorStop(0.25, 'rgba(255,255,255,.85)'); g.addColorStop(1, 'rgba(255,255,255,0)');
    x.fillStyle = g; x.fillRect(0, 0, 64, 64);
    this.mat = new THREE.PointsMaterial({
      size: storlek, map: new THREE.CanvasTexture(c), alphaTest: 0.01, vertexColors: true, transparent: true, opacity: 0.95,
      blending: THREE.AdditiveBlending, depthWrite: false, sizeAttenuation: true,
    });
    this.punkter = new THREE.Points(geo, this.mat);
    this.punkter.frustumCulled = false;
    this.punkter.renderOrder = 10;
    scen.add(this.punkter);
    this._c = new THREE.Color();
  }

  /**
   * Skjut ut partiklar.
   * opt: { antal, farger:[hex], fart, spridning, liv, gravitation, riktning:Vector3, mal:Vector3, malRadie }
   */
  skjut(punkt, opt = {}) {
    const n = opt.antal ?? 20, farger = opt.farger ?? [0xffe27a, 0xc58bff, 0x8fe8ff];
    for (let k = 0; k < n; k++) {
      const i = this.nasta; this.nasta = (this.nasta + 1) % this.max;
      const sp = opt.spridning ?? 0.05;
      this.pos[i * 3] = punkt.x + (Math.random() - 0.5) * sp;
      this.pos[i * 3 + 1] = punkt.y + (Math.random() - 0.5) * sp;
      this.pos[i * 3 + 2] = punkt.z + (Math.random() - 0.5) * sp;
      const f = opt.fart ?? 1.5;
      let vx = (Math.random() - 0.5) * 2, vy = (Math.random() - 0.5) * 2, vz = (Math.random() - 0.5) * 2;
      if (opt.riktning) { vx = vx * 0.3 + opt.riktning.x; vy = vy * 0.3 + opt.riktning.y; vz = vz * 0.3 + opt.riktning.z; }
      this.vel[i * 3] = vx * f; this.vel[i * 3 + 1] = vy * f; this.vel[i * 3 + 2] = vz * f;
      this.liv[i] = this.livMax[i] = (opt.liv ?? 0.8) * (0.6 + Math.random() * 0.6);
      this.grav[i] = opt.gravitation ?? 0;
      this.mal[i] = opt.mal || null;
      this.malRadie[i] = opt.malRadie ?? 0.06;
      this._c.setHex(farger[(Math.random() * farger.length) | 0]);
      this.farg[i * 3] = this._c.r; this.farg[i * 3 + 1] = this._c.g; this.farg[i * 3 + 2] = this._c.b;
    }
  }

  uppdatera(dt) {
    for (let i = 0; i < this.max; i++) {
      if (this.liv[i] <= 0) continue;
      this.liv[i] -= dt;
      const j = i * 3;
      if (this.liv[i] <= 0) { this.pos[j + 1] = -999; continue; }
      const m = this.mal[i];
      if (m) { // sugs mot målet (t.ex. stavens spets)
        this.vel[j] += (m.x - this.pos[j]) * 18 * dt;
        this.vel[j + 1] += (m.y - this.pos[j + 1]) * 18 * dt;
        this.vel[j + 2] += (m.z - this.pos[j + 2]) * 18 * dt;
        this.vel[j] *= 0.9; this.vel[j + 1] *= 0.9; this.vel[j + 2] *= 0.9;
        if (Math.hypot(m.x - this.pos[j], m.y - this.pos[j + 1], m.z - this.pos[j + 2]) < this.malRadie[i]) { this.liv[i] = 0; this.pos[j + 1] = -999; continue; }
      }
      this.vel[j + 1] -= this.grav[i] * dt;
      this.pos[j] += this.vel[j] * dt; this.pos[j + 1] += this.vel[j + 1] * dt; this.pos[j + 2] += this.vel[j + 2] * dt;
      // tona ut genom att mörka färgen (additiv blandning → blir osynlig)
      const t = this.liv[i] / this.livMax[i];
      if (t < 0.3) { this.farg[j] *= 0.9; this.farg[j + 1] *= 0.9; this.farg[j + 2] *= 0.9; }
    }
    this.punkter.geometry.attributes.position.needsUpdate = true;
    this.punkter.geometry.attributes.color.needsUpdate = true;
  }
}

// ---------- Trollstav som syns i handen ----------
export class Trollstav {
  constructor(kamera) {
    this.grupp = new THREE.Group();
    const tra = new THREE.MeshStandardMaterial({ color: 0x5a3417, roughness: 0.6 });
    const guld = new THREE.MeshStandardMaterial({ color: 0xd8a93a, metalness: 0.8, roughness: 0.3 });
    const stav = new THREE.Mesh(new THREE.CylinderGeometry(0.011, 0.018, 0.46, 10), tra);
    const greppring = new THREE.Mesh(new THREE.TorusGeometry(0.02, 0.006, 8, 16), guld);
    greppring.rotation.x = Math.PI / 2; greppring.position.y = -0.12;
    this.spetsMat = new THREE.MeshStandardMaterial({ color: 0xd9c2ff, emissive: 0x9b6bff, emissiveIntensity: 1.6 });
    this.spets = new THREE.Mesh(new THREE.OctahedronGeometry(0.018), this.spetsMat);
    this.spets.position.y = 0.25;
    // mjukt sken runt spetsen
    const c = document.createElement('canvas'); c.width = c.height = 64;
    const x = c.getContext('2d'), g = x.createRadialGradient(32, 32, 0, 32, 32, 32);
    g.addColorStop(0, 'rgba(255,255,255,1)'); g.addColorStop(0.3, 'rgba(200,160,255,.8)'); g.addColorStop(1, 'rgba(160,100,255,0)');
    x.fillStyle = g; x.fillRect(0, 0, 64, 64);
    this.sken = new THREE.Sprite(new THREE.SpriteMaterial({ map: new THREE.CanvasTexture(c), blending: THREE.AdditiveBlending, depthWrite: false, transparent: true }));
    this.sken.scale.setScalar(0.09);
    this.sken.position.y = 0.25;
    this.ljus = new THREE.PointLight(0xc59bff, 0.6, 2.2);
    this.ljus.position.y = 0.25;
    const inre = new THREE.Group();
    inre.add(stav, greppring, this.spets, this.sken, this.ljus);
    inre.rotation.set(-1.15, 0, -0.12);       // pekar framåt-upp
    this.inre = inre;
    this.grupp.add(inre);
    this.grupp.position.set(0.26, -0.26, -0.42);
    kamera.add(this.grupp);
    this.tid = 0;
    this.kraft = 0;          // 0..1 hur mycket magi som används just nu (glöd, skak)
    this._v = new THREE.Vector3();
  }

  /** Spetsens position i världen. */
  spetsPos(ut = this._v) { return this.spets.getWorldPosition(ut); }

  uppdatera(dt, rorelse = 0) {
    this.tid += dt;
    const k = this.kraft;
    this.spets.rotation.y += dt * (1.5 + k * 10);
    this.spetsMat.emissiveIntensity = 1.4 + Math.sin(this.tid * 4) * 0.3 + k * 2.5;
    this.ljus.intensity = 0.5 + k * 2.2;
    this.sken.scale.setScalar(0.08 + k * 0.08 + Math.sin(this.tid * 6) * 0.01);
    const gung = Math.sin(this.tid * (4 + rorelse * 5)) * 0.008 * (0.4 + rorelse);
    const skak = k * 0.006;
    this.grupp.position.set(
      0.26 + (Math.random() - 0.5) * skak,
      -0.26 + gung + (Math.random() - 0.5) * skak,
      -0.42 - k * 0.04,
    );
  }
}

// ---------- Levitation: ett föremål svävar framför staven ----------
export class Levitation {
  constructor(kamera) {
    this.kamera = kamera;
    this.obj = null;           // det som svävar just nu
    this.flygande = [];        // föremål på väg till ett mål
    this.avstand = 1.6;        // hur långt fram det svävar
    this.tid = 0;
    this._dir = new THREE.Vector3();
    this._mal = new THREE.Vector3();
  }

  get svavar() { return !!this.obj; }

  /** Lyft ett föremål (det ska ligga direkt i scenen). */
  lyft(obj) {
    this.obj = obj;
    obj.userData.svavStart = this.tid;
  }

  /** Släpp och returnera föremålet som svävar. */
  slapp() { const o = this.obj; this.obj = null; return o; }

  /** Var föremålet ska sväva just nu (framför kameran, lite nedanför blicken). */
  malPunkt(ut = this._mal) {
    this.kamera.getWorldDirection(this._dir);
    ut.copy(this.kamera.position).addScaledVector(this._dir, this.avstand);
    // lite åt höger och nedåt så att boken inte skymmer hårkorset
    const hoger = this._h || (this._h = new THREE.Vector3());
    hoger.set(-this._dir.z, 0, this._dir.x).normalize();
    ut.addScaledVector(hoger, 0.32);
    ut.y -= 0.32;
    return ut;
  }

  /**
   * Låt ett föremål flyga i en båge till en punkt i världen.
   * opt: { mal:Vector3, rot:Euler|Quaternion (världsrotation), tid:sek, hojd:båghöjd, klar:fn, varjeBild:fn(pos) }
   */
  flyg(obj, opt) {
    const start = obj.position.clone();
    const ctrl = start.clone().lerp(opt.mal, 0.5);
    ctrl.y = Math.max(start.y, opt.mal.y) + (opt.hojd ?? 0.6);
    const q0 = obj.quaternion.clone();
    const q1 = opt.rot instanceof THREE.Quaternion ? opt.rot : new THREE.Quaternion().setFromEuler(opt.rot || new THREE.Euler());
    this.flygande.push({ obj, start, ctrl, slut: opt.mal.clone(), q0, q1, t: 0, tid: opt.tid ?? 0.7, klar: opt.klar, varjeBild: opt.varjeBild });
  }

  uppdatera(dt) {
    this.tid += dt;
    const o = this.obj;
    if (o) {
      const mal = this.malPunkt();
      const svav = Math.min(1, (this.tid - o.userData.svavStart) / 0.5); // mjuk start
      mal.y += Math.sin(this.tid * 2.4) * 0.05;
      o.position.lerp(mal, 1 - Math.exp(-dt * (4 + svav * 6)));
      o.rotation.x += (Math.sin(this.tid * 1.3) * 0.25 - o.rotation.x) * dt * 3;
      o.rotation.y += dt * 0.6;
      o.rotation.z += (0 - o.rotation.z) * dt * 4;
    }
    for (let i = this.flygande.length - 1; i >= 0; i--) {
      const f = this.flygande[i];
      f.t = Math.min(1, f.t + dt / f.tid);
      const e = f.t < 0.5 ? 2 * f.t * f.t : 1 - (-2 * f.t + 2) ** 2 / 2; // mjuk in/ut
      const a = 1 - e;
      f.obj.position.set(
        a * a * f.start.x + 2 * a * e * f.ctrl.x + e * e * f.slut.x,
        a * a * f.start.y + 2 * a * e * f.ctrl.y + e * e * f.slut.y,
        a * a * f.start.z + 2 * a * e * f.ctrl.z + e * e * f.slut.z,
      );
      f.obj.quaternion.slerpQuaternions(f.q0, f.q1, e);
      f.varjeBild?.(f.obj.position);
      if (f.t >= 1) { this.flygande.splice(i, 1); f.klar?.(f.obj); }
    }
  }
}
