// =============================================================
//  spelare.js – förstapersonsrörelse
//  Dator: WASD/pilar + mus (pointer lock), Shift = spring, Space = hopp
//  Touch: vänster halva = joystick, höger halva = dra för att titta
// =============================================================
import * as THREE from 'three';

export class Spelare {
  constructor(kamera, dom, opt = {}) {
    this.kamera = kamera;
    this.dom = dom;
    this.pos = new THREE.Vector3(...(opt.start || [0, 0, 0]));
    this.hojd = opt.hojd ?? 1.6;         // ögonhöjd (meter)
    this.radie = opt.radie ?? 0.35;      // kroppens radie för krockar
    this.fart = opt.fart ?? 4;           // meter/sekund
    this.springFaktor = opt.springFaktor ?? 1.7;
    this.hoppKraft = opt.hopp ?? 5;
    this.gravitation = opt.gravitation ?? 15;
    this.kanslighet = opt.kanslighet ?? 0.0022;
    this.granser = opt.granser || null;  // { minX, maxX, minZ, maxZ }
    this.hinder = [];                    // THREE.Box3[] som man inte kan gå igenom
    this.yaw = opt.yaw ?? 0;
    this.pitch = 0;
    this.vy = 0;
    this.paMark = true;
    this.aktiv = false;                  // styrning på/av (t.ex. när meny visas)
    this.arTouch = false;
    this.tangenter = {};
    this.joy = { x: 0, y: 0 };
    this.rorelse = 0;                    // 0..1, används för gung/stegljud
    this.pilarSvanger = opt.pilarSvanger ?? false;  // ← → svänger i stället för att gå i sidled
    this.svangFart = opt.svangFart ?? 2.2;          // radianer/sekund med piltangenterna
    // Reservläge: om webbläsaren nekar muslåsning styr man ändå med musen.
    this.lasFel = false;
    this.harLast = false;               // true när muslåsningen har fungerat minst en gång
    this.musX = null;                    // muspekarens x (0..1) i reservläget
    this.onLasFel = null;                // valfri funktion som körs när reservläget slås på

    kamera.rotation.order = 'YXZ';

    addEventListener('keydown', (e) => {
      this.tangenter[e.code] = true;
      if (this.aktiv && ['Space', 'ArrowUp', 'ArrowDown'].includes(e.code)) e.preventDefault();
    });
    addEventListener('keyup', (e) => { this.tangenter[e.code] = false; });
    addEventListener('blur', () => { this.tangenter = {}; this.musX = null; });
    document.addEventListener('mouseleave', () => { this.musX = null; });
    addEventListener('mousemove', (e) => {
      if (document.pointerLockElement === this.dom) { this.titta(e.movementX, e.movementY); return; }
      if (this.lasFel && this.aktiv && !this.arTouch && e.target === this.dom) {
        this.titta(e.movementX, e.movementY);
        this.musX = e.clientX / innerWidth;
      }
    });
    document.addEventListener('pointerlockerror', () => this.#lasMisslyckades());
    document.addEventListener('pointerlockchange', () => { if (document.pointerLockElement === this.dom) this.harLast = true; });
    this.#touchStyrning();
  }

  /** Fånga musen (anropa från ett klick). */
  lasMus() {
    if (this.arTouch || this.lasFel || document.pointerLockElement === this.dom) return;
    try {
      const r = this.dom.requestPointerLock?.();
      if (r && r.catch) r.catch(() => this.#lasMisslyckades());
    } catch { this.#lasMisslyckades(); }
  }

  // Har låsningen fungerat förut är det bara tillfälligt (t.ex. för snabbt efter Esc) → klicka igen.
  #lasMisslyckades() { if (!this.harLast) this.#aktiveraReserv(); }

  /** Muslåsning fungerar inte här (t.ex. i en inbäddad ruta) → styr med fri mus. */
  #aktiveraReserv() {
    if (this.lasFel) return;
    this.lasFel = true;
    this.dom.style.cursor = 'none';
    this.onLasFel?.();
  }
  get musLast() { return document.pointerLockElement === this.dom; }

  titta(dx, dy) {
    this.yaw -= dx * this.kanslighet;
    this.pitch -= dy * this.kanslighet;
    this.pitch = Math.max(-1.45, Math.min(1.45, this.pitch));
  }

  hopp() {
    if (this.paMark) { this.vy = this.hoppKraft; this.paMark = false; }
  }

  /** Riktningen spelaren tittar åt (enhetsvektor). */
  riktning(ut = new THREE.Vector3()) {
    return this.kamera.getWorldDirection(ut);
  }

  uppdatera(dt) {
    let fx = 0, fz = 0;
    if (this.aktiv) {
      const t = this.tangenter;
      if (t.KeyW || t.ArrowUp) fz += 1;
      if (t.KeyS || t.ArrowDown) fz -= 1;
      if (t.KeyA || (!this.pilarSvanger && t.ArrowLeft)) fx -= 1;
      if (t.KeyD || (!this.pilarSvanger && t.ArrowRight)) fx += 1;
      if (this.pilarSvanger) {
        if (t.ArrowLeft) this.yaw += this.svangFart * dt;
        if (t.ArrowRight) this.yaw -= this.svangFart * dt;
      }
      // reservläge: muspekaren nära kanten fortsätter att svänga
      if (this.lasFel && this.musX !== null) {
        // bara allra närmast kanten, och mjukt, så att vyn inte driver iväg av sig själv
        const kant = 0.06;
        if (this.musX < kant) this.yaw += (1 - this.musX / kant) ** 2 * this.svangFart * dt;
        if (this.musX > 1 - kant) this.yaw -= (1 - (1 - this.musX) / kant) ** 2 * this.svangFart * dt;
      }
      fx += this.joy.x; fz += this.joy.y;
      const len = Math.hypot(fx, fz);
      if (len > 1) { fx /= len; fz /= len; }
      const spring = (t.ShiftLeft || t.ShiftRight) ? this.springFaktor : 1;
      const v = this.fart * spring;
      const s = Math.sin(this.yaw), c = Math.cos(this.yaw);
      const vx = (fx * c - fz * s) * v;
      const vz = (-fx * s - fz * c) * v;
      this.#flytta(vx * dt, vz * dt);
      if (t.Space) this.hopp();
    }
    this.rorelse = Math.min(1, Math.hypot(fx, fz));

    // gravitation
    // man kan landa ovanpå låga saker (bord, lådor) och kliver av dem igen
    const mark = this.#markHojd();          // räknas före fallet, så man inte faller igenom
    this.vy -= this.gravitation * dt;
    this.pos.y += this.vy * dt;
    if (this.pos.y <= mark) { this.pos.y = mark; this.vy = 0; this.paMark = true; }

    this.kamera.position.set(this.pos.x, this.pos.y + this.hojd, this.pos.z);
    this.kamera.rotation.set(this.pitch, this.yaw, 0);
  }

  #flytta(dx, dz) {
    // står man redan fast i något (t.ex. landat i ett hinder) får man alltid gå ut
    const fast = this.#krock();
    this.pos.x += dx; if (!fast && this.#krock()) this.pos.x -= dx;
    this.pos.z += dz; if (!fast && this.#krock()) this.pos.z -= dz;
    const g = this.granser;
    if (g) {
      this.pos.x = Math.max(g.minX + this.radie, Math.min(g.maxX - this.radie, this.pos.x));
      this.pos.z = Math.max(g.minZ + this.radie, Math.min(g.maxZ - this.radie, this.pos.z));
    }
  }

  /** Höjden man står på: golvet (0) eller toppen av ett hinder man är ovanför. */
  #markHojd() {
    const p = this.pos, r = this.radie * 0.6;
    let h = 0;
    for (const b of this.hinder) {
      if (b.max.y > h && b.max.y <= p.y + 0.05 &&
          p.x > b.min.x - r && p.x < b.max.x + r && p.z > b.min.z - r && p.z < b.max.z + r) h = b.max.y;
    }
    return h;
  }

  #krock() {
    const p = this.pos, r = this.radie;
    for (const b of this.hinder) {
      if (p.x > b.min.x - r && p.x < b.max.x + r &&
          p.z > b.min.z - r && p.z < b.max.z + r &&
          p.y < b.max.y - 0.3 && p.y + this.hojd > b.min.y) return true;
    }
    return false;
  }

  // ---------- Touch: joystick + titta ----------
  #touchStyrning() {
    const bas = document.createElement('div');
    const knopp = document.createElement('div');
    bas.className = 'fp-joy'; knopp.className = 'fp-joy-knopp';
    bas.appendChild(knopp);
    document.body.appendChild(bas);
    const R = 55;
    let joyId = null, joyStart = null, tittId = null, tittSist = null;

    const ar = (e) => e.target === this.dom;
    addEventListener('touchstart', (e) => {
      this.arTouch = true;
      document.body.classList.add('fp-touch');
      for (const t of e.changedTouches) {
        if (!ar(t)) continue;
        if (t.clientX < innerWidth / 2 && joyId === null) {
          joyId = t.identifier; joyStart = { x: t.clientX, y: t.clientY };
          bas.style.left = (t.clientX - R) + 'px'; bas.style.top = (t.clientY - R) + 'px';
          bas.style.display = 'block'; knopp.style.transform = 'translate(0,0)';
        } else if (tittId === null) {
          tittId = t.identifier; tittSist = { x: t.clientX, y: t.clientY };
        }
      }
    }, { passive: true });
    addEventListener('touchmove', (e) => {
      for (const t of e.changedTouches) {
        if (t.identifier === joyId) {
          let dx = t.clientX - joyStart.x, dy = t.clientY - joyStart.y;
          const l = Math.hypot(dx, dy);
          if (l > R) { dx = dx / l * R; dy = dy / l * R; }
          knopp.style.transform = `translate(${dx}px,${dy}px)`;
          this.joy.x = dx / R; this.joy.y = -dy / R;
        } else if (t.identifier === tittId) {
          this.titta((t.clientX - tittSist.x) * 2.2, (t.clientY - tittSist.y) * 2.2);
          tittSist = { x: t.clientX, y: t.clientY };
        }
      }
      if (this.aktiv) e.preventDefault();
    }, { passive: false });
    const slut = (e) => {
      for (const t of e.changedTouches) {
        if (t.identifier === joyId) { joyId = null; this.joy.x = this.joy.y = 0; bas.style.display = 'none'; }
        if (t.identifier === tittId) tittId = null;
      }
    };
    addEventListener('touchend', slut);
    addEventListener('touchcancel', slut);
  }
}
