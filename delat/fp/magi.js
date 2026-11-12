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
    this.traMat = tra;
    const stav = new THREE.Mesh(new THREE.CylinderGeometry(0.011, 0.018, 0.46, 10), tra);
    const greppring = new THREE.Mesh(new THREE.TorusGeometry(0.02, 0.006, 8, 16), guld);
    greppring.rotation.x = Math.PI / 2; greppring.position.y = -0.12;
    this.spetsMat = new THREE.MeshStandardMaterial({ color: 0xd9c2ff, emissive: 0x9b6bff, emissiveIntensity: 1.6 });
    this.spets = new THREE.Mesh(new THREE.OctahedronGeometry(0.018), this.spetsMat);
    this.spets.position.y = 0.25;
    // mjukt sken runt spetsen
    const c = document.createElement('canvas'); c.width = c.height = 64;
    const x = c.getContext('2d'), g = x.createRadialGradient(32, 32, 0, 32, 32, 32);
    g.addColorStop(0, 'rgba(255,255,255,1)'); g.addColorStop(0.3, 'rgba(255,255,255,.8)'); g.addColorStop(1, 'rgba(255,255,255,0)');
    x.fillStyle = g; x.fillRect(0, 0, 64, 64);
    this.sken = new THREE.Sprite(new THREE.SpriteMaterial({ map: new THREE.CanvasTexture(c), color: 0xc8a0ff, blending: THREE.AdditiveBlending, depthWrite: false, transparent: true }));
    this.sken.scale.setScalar(0.09);
    this.sken.position.y = 0.25;
    this.ljus = new THREE.PointLight(0xc59bff, 0.6, 2.2);
    this.ljus.position.y = 0.25;
    const inre = new THREE.Group();
    inre.add(stav, greppring, this.spets, this.sken, this.ljus);
    // extra ringar och små stjärnor som snurrar runt spetsen (visas på högre nivåer)
    this.ringar = [0.02, 0.09, 0.16].map((y) => {
      const r = new THREE.Mesh(new THREE.TorusGeometry(0.017, 0.005, 8, 16), guld);
      r.rotation.x = Math.PI / 2; r.position.y = y; r.visible = false; inre.add(r); return r;
    });
    this.snurr = new THREE.Group(); this.snurr.position.y = 0.25; inre.add(this.snurr);
    this.stjarnor = [0, 1, 2].map((i) => {
      const m = new THREE.Mesh(new THREE.OctahedronGeometry(0.008), new THREE.MeshBasicMaterial({ color: 0xffffff }));
      const v = (i / 3) * Math.PI * 2; m.position.set(Math.cos(v) * 0.05, 0, Math.sin(v) * 0.05);
      m.visible = false; this.snurr.add(m); return m;
    });
    this.skenStorlek = 1;
    this.regnbage = false;
    this.niva = 0;
    inre.rotation.set(-1.15, 0, -0.12);       // pekar framåt-upp
    this.inre = inre;
    this.grupp.add(inre);
    this.grupp.position.set(0.26, -0.26, -0.42);
    kamera.add(this.grupp);
    this.tid = 0;
    this.kraft = 0;          // 0..1 hur mycket magi som används just nu (glöd, skak)
    this._v = new THREE.Vector3();
  }

  /**
   * Byt utseende på staven: 0 = trästav, 1 = blå, 2 = guld, 3 = regnbåge.
   * Högre nivå = större spets, starkare sken, fler ringar och snurrande stjärnor.
   */
  sattNiva(n) {
    const N = [
      { tra: 0x5a3417, metall: 0, spets: 0xd9c2ff, sken: 0x9b6bff, storlek: 1, ringar: 0, stjarnor: 0 },
      { tra: 0x1f3c6e, metall: 0.3, spets: 0xbff0ff, sken: 0x3fb6ff, storlek: 1.4, ringar: 1, stjarnor: 0 },
      { tra: 0xd8a93a, metall: 0.85, spets: 0xfff3b0, sken: 0xffb81f, storlek: 1.75, ringar: 2, stjarnor: 2 },
      { tra: 0xf2ecff, metall: 0.6, spets: 0xffffff, sken: 0xff7ae0, storlek: 2.1, ringar: 3, stjarnor: 3, regnbage: true },
    ][Math.max(0, Math.min(3, n))];
    this.niva = n;
    this.traMat.color.setHex(N.tra); this.traMat.metalness = N.metall; this.traMat.roughness = N.metall ? 0.3 : 0.6;
    this.spetsMat.color.setHex(N.spets); this.spetsMat.emissive.setHex(N.sken);
    this.sken.material.color.setHex(N.sken);
    this.ljus.color.setHex(N.sken);
    this.spets.scale.setScalar(N.storlek);
    this.skenStorlek = N.storlek;
    this.ringar.forEach((r, i) => { r.visible = i < N.ringar; });
    this.stjarnor.forEach((s, i) => { s.visible = i < N.stjarnor; s.material.color.setHex(N.sken); });
    this.regnbage = !!N.regnbage;
  }

  /** Spetsens position i världen. */
  spetsPos(ut = this._v) { return this.spets.getWorldPosition(ut); }

  uppdatera(dt, rorelse = 0) {
    this.tid += dt;
    const k = this.kraft;
    this.spets.rotation.y += dt * (1.5 + k * 10);
    this.spetsMat.emissiveIntensity = 1.4 + Math.sin(this.tid * 4) * 0.3 + k * 2.5;
    this.ljus.intensity = 0.5 + k * 2.2;
    this.sken.scale.setScalar((0.08 + k * 0.08 + Math.sin(this.tid * 6) * 0.01) * this.skenStorlek);
    this.snurr.rotation.y += dt * 3;
    this.snurr.rotation.x = Math.sin(this.tid * 1.3) * 0.5;
    if (this.regnbage) {
      const f = (this.tid * 0.25) % 1;
      this.spetsMat.emissive.setHSL(f, 0.9, 0.6);
      this.sken.material.color.setHSL(f, 0.9, 0.65);
      this.ljus.color.setHSL(f, 0.9, 0.6);
      this.stjarnor.forEach((s, i) => s.material.color.setHSL((f + i / 3) % 1, 0.9, 0.65));
    }
    const gung = Math.sin(this.tid * (4 + rorelse * 5)) * 0.008 * (0.4 + rorelse);
    const skak = k * 0.006;
    this.grupp.position.set(
      0.26 + (Math.random() - 0.5) * skak,
      -0.26 + gung + (Math.random() - 0.5) * skak,
      -0.42 - k * 0.04,
    );
  }
}

// ---------- Levitation: föremål svävar framför staven ----------
// En sak svävar framför staven. Flera saker snurrar i en magisk ring.
export class Levitation {
  constructor(kamera, { kapacitet = 1 } = {}) {
    this.kamera = kamera;
    this.saker = [];           // det som svävar just nu
    this.kapacitet = kapacitet;
    this.flygande = [];        // föremål på väg till ett mål
    this.avstand = 1.6;        // hur långt fram det svävar
    this.tid = 0;
    this._dir = new THREE.Vector3();
    this._mal = new THREE.Vector3();
    this._h = new THREE.Vector3();
    this._lokalMal = new THREE.Vector3();
  }

  get obj() { return this.saker[0] || null; }      // första saken (bakåtkompatibelt)
  get svavar() { return this.saker.length > 0; }
  get full() { return this.saker.length >= this.kapacitet; }
  get antal() { return this.saker.length; }
  /** Hur stora sakerna är när n stycken svävar (1 = normal). */
  krympning(n) { return n > 1 ? Math.max(0.6, 1 - n * 0.05) : 1; }

  /** Lyft ett föremål (det ska ligga direkt i scenen). Ger false om staven är full. */
  lyft(obj) {
    if (this.full) return false;
    obj.userData.svavStart = this.tid;
    obj.userData.lokal = null;
    this.saker.push(obj);
    return true;
  }

  /** Släpp ett visst föremål, eller det senast lyfta. Returnerar det. */
  slapp(obj) {
    if (!obj) return this.saker.pop() || null;
    const i = this.saker.indexOf(obj);
    if (i >= 0) this.saker.splice(i, 1);
    return obj;
  }

  /** Mittpunkten där sakerna svävar (framför kameran, lite åt höger och nedåt). */
  malPunkt(ut = this._mal) {
    this.kamera.getWorldDirection(this._dir);
    ut.copy(this.kamera.position).addScaledVector(this._dir, this.avstand);
    this._h.set(-this._dir.z, 0, this._dir.x).normalize();
    ut.addScaledVector(this._h, 0.32);
    ut.y -= 0.32;
    return ut;
  }

  /**
   * Låt ett föremål flyga i en båge till en punkt i världen.
   * opt: { mal:Vector3, rot:Euler|Quaternion (världsrotation), tid:sek, hojd:båghöjd, fordrojning:sek, klar:fn, varjeBild:fn(pos) }
   */
  flyg(obj, opt) {
    const start = obj.position.clone();
    const ctrl = start.clone().lerp(opt.mal, 0.5);
    ctrl.y = Math.max(start.y, opt.mal.y) + (opt.hojd ?? 0.6);
    const q0 = obj.quaternion.clone();
    const q1 = opt.rot instanceof THREE.Quaternion ? opt.rot : new THREE.Quaternion().setFromEuler(opt.rot || new THREE.Euler());
    this.flygande.push({ obj, start, ctrl, slut: opt.mal.clone(), q0, q1, skala0: obj.scale.x, t: 0, tid: opt.tid ?? 0.7, vanta: opt.fordrojning ?? 0, klar: opt.klar, varjeBild: opt.varjeBild });
  }

  uppdatera(dt) {
    this.tid += dt;
    const n = this.saker.length;
    // Positionen räknas i kamerans egna koordinater, så att sakerna följer
    // blicken direkt när man vrider eller går (annars "simmar" de efter).
    this.kamera.updateMatrixWorld();
    this.saker.forEach((o, i) => {
      if (!o.userData.lokal) o.userData.lokal = this.kamera.worldToLocal(o.position.clone());
      const mal = this._lokalMal.set(0.32, -0.32, -this.avstand);
      if (n > 1) {
        // snurra i en ring runt mittpunkten
        const r = 0.28 + n * 0.035;
        const v = this.tid * 0.9 + (i / n) * Math.PI * 2;
        mal.x += Math.cos(v) * r;
        mal.y += Math.sin(v) * r * 0.75;
      }
      const svav = Math.min(1, (this.tid - o.userData.svavStart) / 0.5); // mjuk start
      mal.y += Math.sin(this.tid * 2.4 + i) * 0.04;
      o.userData.lokal.lerp(mal, 1 - Math.exp(-dt * (4 + svav * 8)));
      o.position.copy(o.userData.lokal);
      this.kamera.localToWorld(o.position);
      o.rotation.x += (Math.sin(this.tid * 1.3 + i) * 0.25 - o.rotation.x) * dt * 3;
      o.rotation.y += dt * 0.6;
      o.rotation.z += (0 - o.rotation.z) * dt * 4;
      // många saker i ringen: krymp dem lite så att de inte skymmer sikten
      o.scale.setScalar(o.scale.x + (this.krympning(n) - o.scale.x) * Math.min(1, dt * 5));
    });
    for (let i = this.flygande.length - 1; i >= 0; i--) {
      const f = this.flygande[i];
      if (f.vanta > 0) { f.vanta -= dt; f.start.copy(f.obj.position); continue; }
      f.t = Math.min(1, f.t + dt / f.tid);
      const e = f.t < 0.5 ? 2 * f.t * f.t : 1 - (-2 * f.t + 2) ** 2 / 2; // mjuk in/ut
      const a = 1 - e;
      f.obj.position.set(
        a * a * f.start.x + 2 * a * e * f.ctrl.x + e * e * f.slut.x,
        a * a * f.start.y + 2 * a * e * f.ctrl.y + e * e * f.slut.y,
        a * a * f.start.z + 2 * a * e * f.ctrl.z + e * e * f.slut.z,
      );
      f.obj.quaternion.slerpQuaternions(f.q0, f.q1, e);
      f.obj.scale.setScalar(f.skala0 + (1 - f.skala0) * e);
      f.varjeBild?.(f.obj.position);
      if (f.t >= 1) { this.flygande.splice(i, 1); f.klar?.(f.obj); }
    }
  }
}
