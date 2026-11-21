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
  constructor(kamera, scen, { rackvidd = 3, baraSynliga = false } = {}) {
    this.kamera = kamera;
    this.rackvidd = rackvidd;
    this.baraSynliga = baraSynliga;   // true: dolda saker (visible = false, även en förälder) går inte att använda
    this.ray = new THREE.Raycaster();
    this.mal = [];
    this.blockerare = [];   // väggar m.m. som stoppar siktet (valfritt)
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
    const lista = this.blockerare.length ? this.mal.concat(this.blockerare) : this.mal;
    const traffar = this.stralFranMitten().intersectObjects(lista, true);
    // Mjuka träffytor (userData.autoTraff): den första träffen gäller, men en mindre sak vars yta strålen når
    // innan den träffar något på riktigt är mer precis och vinner (hammaren på brädhögen, inte hela högen).
    let storlek = Infinity;
    for (const h of traffar) {
      if (h.distance > this.rackvidd) break;
      if (this.blockerare.length && this.#arBlockerare(h.object)) break;
      let o = h.object;
      while (o && !o.userData.interaktion) o = o.parent;
      if (!o) continue;
      if (this.baraSynliga && !this.#synlig(o)) continue;
      const info = o.userData.interaktion;
      if (info.kanAktivera && !info.kanAktivera(o)) continue;
      const mjuk = !!h.object.userData.autoTraff || h.object.material?.colorWrite === false;   // osynliga träffytor (auto eller för hand) är mjuka
      if (!this.hovrad) { this.hovrad = o; storlek = this.#storlek(o); if (!mjuk) break; continue; }
      if (o !== this.hovrad) { const st = this.#storlek(o); if (st < storlek) { this.hovrad = o; storlek = st; } }
      if (!mjuk) break;
    }
    // sikteHjalp (grader): missar strålen, eller träffar den något mycket större, gäller den sak vars träffyta ligger närmast mitten av siktet
    if (this.sikteHjalp > 0) {
      const k = this.#narmastIKonen();
      if (k && !this.hovrad) this.hovrad = k;
      else if (k && k !== this.hovrad && this.#storlek(k) * 4 < storlek) this.hovrad = k;   // en liten sak i siktet går före en mycket större bakom/runt den
    }
    if (this.hovrad) {
      this.ram.setFromObject(this.ramFranTraff && this.hovrad.autoTraffYta ? this.hovrad.autoTraffYta : this.hovrad);   // ramFranTraff: ramen visar exakt var klicket når (den osynliga träffytan)
      this.ram.visible = !this.utanRam && !this.hovrad.userData.interaktion?.utanRam;   // utanRam: platsen visas på annat sätt (t.ex. en kontur), eller spelet har ingen ram alls
    } else {
      this.ram.visible = false;
    }
    return this.hovrad;
  }

  #narmastIKonen() {
    const r = this.ray.ray, max = this.sikteHjalp * Math.PI / 180, c = new THREE.Vector3(), d = new THREE.Vector3();
    let bast = null, bv = max;
    for (const o of this.mal) {
      const y = o.autoTraffYta; if (!y || !o.userData.interaktion) continue;
      if (this.baraSynliga && !this.#synlig(o)) continue;
      y.getWorldPosition(c); d.subVectors(c, r.origin); const avst = d.length();
      if (avst > this.rackvidd || avst < 0.2) continue;
      const v = d.angleTo(r.direction); if (v >= bv) continue;
      const info = o.userData.interaktion; if (info.kanAktivera && !info.kanAktivera(o)) continue;
      if (this.blockerare.length) { const b = new THREE.Raycaster(r.origin, d.clone().normalize(), 0, avst).intersectObjects(this.blockerare, true)[0]; if (b) continue; }
      bast = o; bv = v;
    }
    return bast;
  }

  #storlek(o) {
    const g = o.autoTraffYta?.geometry?.parameters || (o.isMesh && o.geometry?.type === 'BoxGeometry' ? o.geometry.parameters : null);   // en egen träffyta (t.ex. veven på kvarnen) har sin egen storlek, så att den går före den stora saken den sitter på
    return g ? g.width * g.height * g.depth : Infinity;
  }

  #synlig(o) {
    for (; o; o = o.parent) if (!o.visible) return false;
    return true;
  }

  #arBlockerare(o) {
    for (; o; o = o.parent) if (this.blockerare.includes(o)) return true;
    return false;
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
