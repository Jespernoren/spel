// miljo.js – skogen och marken runt tomten. Flera trädsorter, buskar, stenar,
// stubbar, gräs och blommor. Allt får slumpad storlek, lutning och färgton
// så att det inte ser upprepat ut. Träden vajar lite i vinden.
import * as THREE from 'three';

// ---------- Justerbara värden ----------
const ANTAL_TRAD = 190;        // träd runt tomten
const ANTAL_BUSKAR = 90;
const ANTAL_STENAR = 55;
const ANTAL_STUBBAR = 18;
const ANTAL_GRAS = 900;        // grästuvor (instansierade, billiga)
const ANTAL_BLOMMOR = 260;
const VIND = 0.025;            // hur mycket träden vajar (radianer)

export function byggMiljo({ scen, TOMT, TIPP, ALI, fri }) {
  let fro = 11;
  const rnd = () => ((fro = (fro * 9301 + 49297) % 233280) / 233280);
  const mellan = (a, b) => a + rnd() * (b - a);
  // skifta färgton i sRGB (three.js offsetHSL blandar färgrymder och gör färgen mörkare för varje anrop)
  const hsl = {};
  const skifta = (c, dh, ds, dl) => { c.getHSL(hsl, THREE.SRGBColorSpace); return c.setHSL(hsl.h + dh, Math.min(1, Math.max(0, hsl.s + ds)), Math.min(0.9, Math.max(0.05, hsl.l + dl)), THREE.SRGBColorSpace); };
  const ton = (hex, spann = 0.08) => skifta(new THREE.Color(hex), mellan(-spann, spann) * 0.4, mellan(-spann, spann), mellan(-spann, spann));
  const mat = (c, extra = {}) => new THREE.MeshStandardMaterial({ color: c, roughness: 0.9, flatShading: true, ...extra });
  const skugga = (m) => { m.castShadow = true; return m; };   // tar inte emot skugga (ger svarta acne-ytor på platta former)
  // lite skrynkla på geometrin så att formerna inte blir perfekta
  const skrynkla = (geo, styrka) => { const p = geo.attributes.position; for (let i = 0; i < p.count; i++) { p.setXYZ(i, p.getX(i) * (1 + mellan(-styrka, styrka)), p.getY(i) * (1 + mellan(-styrka, styrka) * 0.5), p.getZ(i) * (1 + mellan(-styrka, styrka))); } geo.computeVertexNormals(); return geo; };

  // ledig plats? (inte på vägen, marknaden eller tippen – och inte för nära tomten)
  const ledig = (x, z, marg = 0) => {
    if (Math.abs(x) < TOMT + 1.5 + marg && Math.abs(z) < TOMT + 1.5 + marg) return false;
    if (z > TOMT - 0.5 && z < TOMT + 7) return false;
    if (Math.abs(x - ALI.x) < 9 && z > TOMT && z < TOMT + 13) return false;
    if (Math.hypot(x - TIPP.x, z - TIPP.z) < TIPP.r + 4) return false;
    return fri ? fri(x, z) : true;
  };
  const plats = (rMin, rMax, marg) => { for (let f = 0; f < 30; f++) { const a = rnd() * Math.PI * 2, r = rMin + rnd() * (rMax - rMin), x = Math.cos(a) * r, z = Math.sin(a) * r; if (ledig(x, z, marg)) return [x, z]; } return null; };

  // ---------- Marken: fläckigt gräs, mörkare och ljusare partier, lite jord ----------
  {
    const geo = new THREE.PlaneGeometry(160, 160, 96, 96); geo.rotateX(-Math.PI / 2);
    const p = geo.attributes.position, farg = [];
    const bas = new THREE.Color(0x7fae5a), mork = new THREE.Color(0x5f8f45), ljus = new THREE.Color(0x9cc06a), jord = new THREE.Color(0x8b7a55);
    const brus = (x, z) => Math.sin(x * 0.11 + Math.sin(z * 0.07) * 2) * 0.5 + Math.sin(z * 0.13 - x * 0.05) * 0.35 + Math.sin((x + z) * 0.31) * 0.15;
    for (let i = 0; i < p.count; i++) {
      const x = p.getX(i), z = p.getZ(i), n = brus(x, z), c = bas.clone();
      if (n > 0.35) c.lerp(mork, Math.min(1, (n - 0.35) * 1.6)); else if (n < -0.3) c.lerp(ljus, Math.min(1, (-n - 0.3) * 1.8));
      if (Math.sin(x * 0.23 + 1) * Math.sin(z * 0.19) > 0.82) c.lerp(jord, 0.55);
      skifta(c, 0, 0, (rnd() - 0.5) * 0.03);
      farg.push(c.r, c.g, c.b);
    }
    geo.setAttribute('color', new THREE.Float32BufferAttribute(farg, 3));
    const m = new THREE.Mesh(geo, new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 1 }));
    m.receiveShadow = true; scen.add(m);
  }

  const trad = [];
  const stamBrun = 0x6b4a2f;

  // ---------- Trädsorter ----------
  function gran(s) {
    const g = new THREE.Group(), h = mellan(4, 8) * s, farg = ton(0x2f6b3a, 0.12);
    { const st = skugga(new THREE.Mesh(new THREE.CylinderGeometry(0.12 * s, 0.22 * s, 1.4 * s, 6), mat(ton(stamBrun)))); st.position.y = 0.7 * s; g.add(st); }
    const lager = 3 + Math.floor(rnd() * 2);
    for (let i = 0; i < lager; i++) {
      const k = i / lager, rad = (1.5 - k * 0.95) * mellan(0.85, 1.15) * s, hh = h / lager * 1.5;
      const kon = skugga(new THREE.Mesh(skrynkla(new THREE.ConeGeometry(rad, hh, 7 + Math.floor(rnd() * 3)), 0.08), mat(skifta(farg.clone(), 0, 0, i * 0.025))));
      kon.position.y = 1.1 * s + k * h * 0.78 + hh / 2; kon.rotation.y = rnd() * 3; g.add(kon);
    }
    return g;
  }
  function tall(s) {
    const g = new THREE.Group(), h = mellan(5, 8.5) * s;
    const stam = skugga(new THREE.Mesh(new THREE.CylinderGeometry(0.11 * s, 0.2 * s, h, 6), mat(ton(0x9a5a35, 0.1))));
    stam.position.y = h / 2; stam.rotation.z = mellan(-0.06, 0.06); g.add(stam);
    const krona = ton(0x3a6a35, 0.12);
    const n = 3 + Math.floor(rnd() * 3);
    for (let i = 0; i < n; i++) {
      const b = skugga(new THREE.Mesh(skrynkla(new THREE.IcosahedronGeometry(mellan(0.8, 1.4) * s, 0), 0.15), mat(skifta(krona.clone(), 0, 0, mellan(-0.04, 0.04)))));
      b.scale.y = 0.55; b.position.set(mellan(-0.9, 0.9) * s, h - mellan(0, 1.4) * s, mellan(-0.9, 0.9) * s); g.add(b);
    }
    return g;
  }
  function bjork(s) {
    const g = new THREE.Group(), h = mellan(3.5, 6) * s;
    const stam = skugga(new THREE.Mesh(new THREE.CylinderGeometry(0.08 * s, 0.14 * s, h, 6), mat(0xe8e4dc)));
    stam.position.y = h / 2; stam.rotation.z = mellan(-0.1, 0.1); g.add(stam);
    for (let i = 0; i < 5; i++) { const f = new THREE.Mesh(new THREE.BoxGeometry(0.2 * s, 0.05 * s, 0.03), mat(0x2a2a2a)); f.position.set(0, mellan(0.3, h * 0.8), 0.1 * s); f.rotation.y = rnd() * 6; stam.add(f); f.position.y -= h / 2; }
    const lov = ton(0x8fbf4a, 0.1);
    const n = 3 + Math.floor(rnd() * 3);
    for (let i = 0; i < n; i++) {
      const b = skugga(new THREE.Mesh(skrynkla(new THREE.IcosahedronGeometry(mellan(0.6, 1.0) * s, 1), 0.12), mat(skifta(lov.clone(), 0, 0, mellan(-0.05, 0.05)))));
      b.scale.y = mellan(1.1, 1.5); b.position.set(mellan(-0.5, 0.5) * s, h * mellan(0.75, 1.0), mellan(-0.5, 0.5) * s); g.add(b);
    }
    return g;
  }
  function lovtrad(s) {
    const g = new THREE.Group(), h = mellan(2.5, 4) * s;
    const stam = skugga(new THREE.Mesh(new THREE.CylinderGeometry(0.16 * s, 0.28 * s, h, 7), mat(ton(stamBrun))));
    stam.position.y = h / 2; g.add(stam);
    for (const sida of [-1, 1]) { const gren = skugga(new THREE.Mesh(new THREE.CylinderGeometry(0.05 * s, 0.09 * s, 1.2 * s, 5), mat(ton(stamBrun)))); gren.position.set(sida * 0.35 * s, h * 0.8, 0); gren.rotation.z = -sida * 0.7; g.add(gren); }
    const lov = ton(rnd() < 0.15 ? 0xb8862e : 0x4f8a3a, 0.12);    // ibland ett gulnande träd
    const n = 4 + Math.floor(rnd() * 4);
    for (let i = 0; i < n; i++) {
      const b = skugga(new THREE.Mesh(skrynkla(new THREE.IcosahedronGeometry(mellan(0.9, 1.5) * s, 1), 0.14), mat(skifta(lov.clone(), 0, 0, mellan(-0.05, 0.05)))));
      b.position.set(mellan(-1.1, 1.1) * s, h + mellan(0, 1.4) * s, mellan(-1.1, 1.1) * s); g.add(b);
    }
    return g;
  }
  const SORTER = [[gran, 0.42], [tall, 0.22], [bjork, 0.2], [lovtrad, 0.16]];
  const valjSort = () => { let r = rnd(); for (const [f, w] of SORTER) { if ((r -= w) < 0) return f; } return gran; };

  for (let i = 0; i < ANTAL_TRAD; i++) {
    // glesare nära tomten, tätare längre ut, några dungar
    const pos = plats(TOMT + 4, TOMT + 34, 2); if (!pos) continue;
    const [x, z] = pos, s = mellan(0.75, 1.3);
    const t = valjSort()(s);
    t.position.set(x, 0, z); t.rotation.y = rnd() * Math.PI * 2;
    t.userData.fas = rnd() * 10; t.userData.lut = mellan(-0.04, 0.04);
    t.rotation.z = t.userData.lut;
    scen.add(t); trad.push(t);
    // en dunge: ibland ett par småträd av samma sort runt om
    if (rnd() < 0.18) for (let k = 0; k < 2; k++) {
      const x2 = x + mellan(-2.5, 2.5), z2 = z + mellan(-2.5, 2.5); if (!ledig(x2, z2, 2)) continue;
      const u = valjSort()(s * mellan(0.45, 0.7)); u.position.set(x2, 0, z2); u.rotation.y = rnd() * 6; u.userData.fas = rnd() * 10; u.userData.lut = 0; scen.add(u); trad.push(u);
    }
  }

  // ---------- Buskar ----------
  for (let i = 0; i < ANTAL_BUSKAR; i++) {
    const pos = plats(TOMT + 2.5, TOMT + 32, 0); if (!pos) continue;
    const g = new THREE.Group(), farg = ton(rnd() < 0.3 ? 0x5a8f3c : 0x3f7a3a, 0.14), n = 2 + Math.floor(rnd() * 3);
    for (let k = 0; k < n; k++) { const b = skugga(new THREE.Mesh(skrynkla(new THREE.IcosahedronGeometry(mellan(0.35, 0.7), 0), 0.18), mat(farg))); b.position.set(mellan(-0.5, 0.5), mellan(0.2, 0.45), mellan(-0.5, 0.5)); b.scale.y = 0.75; g.add(b); }
    if (rnd() < 0.3) for (let k = 0; k < 6; k++) { const bar = new THREE.Mesh(new THREE.SphereGeometry(0.05, 5, 4), mat(rnd() < 0.5 ? 0xc0303a : 0x3a3a8a)); bar.position.set(mellan(-0.5, 0.5), mellan(0.35, 0.7), mellan(-0.5, 0.5)); g.add(bar); }   // lingon och blåbär
    g.position.set(pos[0], 0, pos[1]); g.rotation.y = rnd() * 6; scen.add(g);
  }

  // ---------- Stenar och stubbar ----------
  for (let i = 0; i < ANTAL_STENAR; i++) {
    const pos = plats(TOMT + 2, TOMT + 34, 0); if (!pos) continue;
    const s = rnd() < 0.12 ? mellan(0.9, 1.6) : mellan(0.15, 0.5);   // några stora stenblock
    const m = skugga(new THREE.Mesh(skrynkla(new THREE.DodecahedronGeometry(s, 0), 0.25), mat(ton(0x8a8a85, 0.08))));
    m.scale.y = mellan(0.45, 0.8); m.position.set(pos[0], s * 0.25, pos[1]); m.rotation.set(rnd(), rnd() * 6, rnd()); scen.add(m);
    if (s > 0.8) { const mossa = new THREE.Mesh(skrynkla(new THREE.DodecahedronGeometry(s * 0.7, 0), 0.2), mat(0x6f8f3a)); mossa.scale.set(1, 0.3, 1); mossa.position.set(pos[0], s * 0.55, pos[1]); scen.add(mossa); }
  }
  for (let i = 0; i < ANTAL_STUBBAR; i++) {
    const pos = plats(TOMT + 3, TOMT + 30, 0); if (!pos) continue;
    if (rnd() < 0.5) {
      const st = skugga(new THREE.Mesh(new THREE.CylinderGeometry(mellan(0.2, 0.3), mellan(0.28, 0.38), mellan(0.25, 0.5), 8), mat(ton(stamBrun))));
      st.position.set(pos[0], 0.15, pos[1]); scen.add(st);
      const topp = new THREE.Mesh(new THREE.CircleGeometry(0.24, 8), mat(0xc9a36a)); topp.rotation.x = -Math.PI / 2; topp.position.set(pos[0], st.geometry.parameters.height / 2 + 0.151, pos[1]); scen.add(topp);
    } else {   // en vindfälld stock
      const l = mellan(2, 4), st = skugga(new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.22, l, 7), mat(ton(0x5d4330))));
      st.rotation.set(0, rnd() * 6, Math.PI / 2); st.position.set(pos[0], 0.2, pos[1]); scen.add(st);
    }
  }

  // ---------- Gräs och blommor (instansierade) ----------
  {
    const geo = new THREE.ConeGeometry(0.07, 0.35, 3); geo.translate(0, 0.17, 0);
    const im = new THREE.InstancedMesh(geo, new THREE.MeshStandardMaterial({ roughness: 1, flatShading: true }), ANTAL_GRAS);
    const o = new THREE.Object3D(), c = new THREE.Color(); let n = 0;
    for (let i = 0; i < ANTAL_GRAS && n < ANTAL_GRAS; i++) {
      const pos = plats(TOMT + 1.6, TOMT + 36, -1); if (!pos) continue;
      // tuvor: tre strån tätt ihop
      for (let k = 0; k < 3 && n < ANTAL_GRAS; k++) {
        o.position.set(pos[0] + mellan(-0.12, 0.12), 0, pos[1] + mellan(-0.12, 0.12)); o.rotation.set(mellan(-0.3, 0.3), rnd() * 6, mellan(-0.3, 0.3)); o.scale.setScalar(mellan(0.6, 1.4)); o.updateMatrix();
        im.setMatrixAt(n, o.matrix); im.setColorAt(n, skifta(c.set(0x6a9a40), mellan(-0.03, 0.04), 0, mellan(-0.08, 0.08))); n++;
      }
    }
    im.count = n; im.receiveShadow = true; scen.add(im);
  }
  {
    const geo = new THREE.SphereGeometry(0.06, 5, 4); geo.translate(0, 0.14, 0);
    const im = new THREE.InstancedMesh(geo, new THREE.MeshStandardMaterial({ roughness: 0.7 }), ANTAL_BLOMMOR);
    const o = new THREE.Object3D(), c = new THREE.Color(), FARGER = [0xffffff, 0xf5d23a, 0x9b6ad6, 0xe85a8a, 0x5a8ae8];
    let n = 0, farg = 0, kvar = 0;
    for (let i = 0; i < ANTAL_BLOMMOR; i++) {
      if (kvar-- <= 0) { farg = FARGER[Math.floor(rnd() * FARGER.length)]; kvar = 5 + Math.floor(rnd() * 8); }   // blommor i små fält med samma färg
      const pos = plats(TOMT + 2, TOMT + 30, -1); if (!pos) continue;
      o.position.set(pos[0], 0, pos[1]); o.scale.setScalar(mellan(0.7, 1.3)); o.updateMatrix();
      im.setMatrixAt(n, o.matrix); im.setColorAt(n, c.set(farg)); n++;
    }
    im.count = n; scen.add(im);
  }

  // vinden: träden vajar lite, i otakt
  function uppdatera(tid) {
    const v = VIND * (0.7 + Math.sin(tid * 0.13) * 0.3);
    for (const t of trad) { const f = t.userData.fas; t.rotation.z = t.userData.lut + Math.sin(tid * 0.9 + f) * v; t.rotation.x = Math.sin(tid * 0.7 + f * 1.3) * v * 0.6; }
  }
  return { uppdatera, trad };
}
