// =============================================================
//  interaktion.js – sikta, plocka upp, bära och använda saker
// =============================================================
import * as THREE from 'three';

const MITT = new THREE.Vector2(0, 0);

/**
 * Interaktor: tittar vad hårkorset pekar på.
 *   registrera(obj, { text, aktivera, kanAktivera })
 *     text:        sträng eller funktion(obj) → sträng som visas ("Plocka upp")
 *     aktivera:    funktion(obj) som körs när man trycker E / klickar / Använd-knappen
 *     kanAktivera: funktion(obj) → true/false (valfri)
 */
export class Interaktor {
  constructor(kamera, scen, { rackvidd = 3 } = {}) {
    this.kamera = kamera;
    this.rackvidd = rackvidd;
    this.ray = new THREE.Raycaster();
    this.mal = [];
    this.hovrad = null;
    this.ram = new THREE.BoxHelper(undefined, 0xffffff);
    this.ram.material.depthTest = false;
    this.ram.material.transparent = true;
    this.ram.material.opacity = 0.9;
    this.ram.renderOrder = 999;
    this.ram.visible = false;
    scen.add(this.ram);
  }

  registrera(obj, info) {
    obj.userData.interaktion = info;
    if (!this.mal.includes(obj)) this.mal.push(obj);
    return obj;
  }

  avregistrera(obj) {
    const i = this.mal.indexOf(obj);
    if (i >= 0) this.mal.splice(i, 1);
    delete obj.userData.interaktion;
    if (this.hovrad === obj) this.hovrad = null;
  }

  /** Strålen från mitten av skärmen (hårkorset). */
  stralFranMitten() {
    this.ray.setFromCamera(MITT, this.kamera);
    return this.ray;
  }

  /** Vad träffar hårkorset bland valfria objekt? Ger { object, point, uv, distance } eller null. */
  traffa(objekt, rackvidd = this.rackvidd) {
    const h = this.stralFranMitten().intersectObjects(objekt, true)[0];
    return h && h.distance <= rackvidd ? h : null;
  }

  uppdatera() {
    this.hovrad = null;
    const traffar = this.stralFranMitten().intersectObjects(this.mal, true);
    for (const h of traffar) {
      if (h.distance > this.rackvidd) break;
      let o = h.object;
      while (o && !o.userData.interaktion) o = o.parent;
      if (!o) continue;
      const info = o.userData.interaktion;
      if (info.kanAktivera && !info.kanAktivera(o)) continue;
      this.hovrad = o;
      break;
    }
    if (this.hovrad) {
      this.ram.setFromObject(this.hovrad);
      this.ram.visible = true;
    } else {
      this.ram.visible = false;
    }
    return this.hovrad;
  }

  /** Text för det man tittar på (för knappen/prompten). */
  get text() {
    if (!this.hovrad) return '';
    const t = this.hovrad.userData.interaktion.text;
    return typeof t === 'function' ? t(this.hovrad) : t || '';
  }

  /** Kör aktivera() på det man tittar på. Returnerar true om något hände. */
  aktivera() {
    if (!this.hovrad) return false;
    this.hovrad.userData.interaktion.aktivera?.(this.hovrad);
    return true;
  }
}

/**
 * Hand: bär saker framför kameran (en stapel).
 *   plocka(obj) → true om det fick plats
 *   lagg() → översta objektet (tas bort ur handen) eller null
 */
export class Hand {
  constructor(kamera, scen, { kapacitet = 1 } = {}) {
    this.kamera = kamera;
    this.scen = scen;
    this.kapacitet = kapacitet;
    this.saker = [];
    if (!kamera.parent) scen.add(kamera);
    this.grupp = new THREE.Group();
    this.grupp.position.set(0.32, -0.32, -0.6);
    kamera.add(this.grupp);
    this.tid = 0;
  }

  get full() { return this.saker.length >= this.kapacitet; }
  get tom() { return this.saker.length === 0; }
  get overst() { return this.saker[this.saker.length - 1] || null; }

  plocka(obj) {
    if (this.full) return false;
    obj.userData.ursprungSkala = obj.userData.ursprungSkala ?? obj.scale.x;
    this.saker.push(obj);
    this.grupp.add(obj);
    this.#ordna();
    return true;
  }

  lagg() {
    const obj = this.saker.pop();
    if (!obj) return null;
    this.grupp.remove(obj);
    obj.scale.setScalar(obj.userData.ursprungSkala ?? 1);
    this.#ordna();
    return obj;
  }

  #ordna() {
    this.saker.forEach((o, i) => {
      o.scale.setScalar((o.userData.ursprungSkala ?? 1) * 0.7);
      o.position.set(0, i * 0.07, -i * 0.01);
      o.rotation.set(0.2, 0.4, 0);
    });
  }

  /** Litet gung när man går. */
  uppdatera(dt, rorelse = 0) {
    this.tid += dt * (4 + rorelse * 6);
    this.grupp.position.y = -0.32 + Math.sin(this.tid) * 0.012 * (0.3 + rorelse);
    this.grupp.position.x = 0.32 + Math.cos(this.tid * 0.5) * 0.008 * rorelse;
  }
}
