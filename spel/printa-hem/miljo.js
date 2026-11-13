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
const ANTAL_BLOMMOR = 0;
const VIND = 0.025;            // hur mycket träden vajar (radianer)

export function byggMiljo({ scen, TOMT, TIPP, ALI, fri, grans }) {
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
    // inget stort växer där spelaren kan gå – skogen börjar precis utanför (Rolf öppnar mer senare)
    if (grans && marg >= 0 && x > grans.minX - 1.5 && x < grans.maxX + 1.5 && z > grans.minZ - 1.5 && z < grans.maxZ + 1.5) return false;
    if (z > TOMT - 0.5 && z < TOMT + 7) return false;
    if (Math.abs(x - ALI.x) < 9 && z > TOMT && z < TOMT + 13) return false;
    if (Math.hypot(x - TIPP.x, z - TIPP.z) < TIPP.r + 4) return false;
    return fri ? fri(x, z) : true;
  };
  const plats = (rMin, rMax, marg) => { for (let f = 0; f < 30; f++) { const a = rnd() * Math.PI * 2, r = rMin + rnd() * (rMax - rMin), x = Math.cos(a) * r, z = Math.sin(a) * r; if (ledig(x, z, marg)) return [x, z]; } return null; };

  let mark = null, markBas = null;
  const lovLista = [];   // lövträdens kronor – byter färg på hösten, faller på vintern
  const barrLista = [];   // marken – spelet siktar mot den när man ställer ut saker
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
    geo.setAttribute('color', new THREE.Float32BufferAttribute(farg, 3)); markBas = Float32Array.from(farg);
    const m = new THREE.Mesh(geo, new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 1 }));
    m.receiveShadow = true; scen.add(m); mark = m;
  }

  const trad = [];
  const allt = [];   // allt som kan röjas bort när man köper mark: [objekt, x, z]
  const lagg = (o, x, z) => { scen.add(o); allt.push([o, x, z]); return o; };
  const stamBrun = 0x6b4a2f;

  // ---------- Trädsorter ----------
  function gran(s) {
    const g = new THREE.Group(), h = mellan(4, 8) * s, farg = ton(0x2f6b3a, 0.12);
    { const st = skugga(new THREE.Mesh(new THREE.CylinderGeometry(0.12 * s, 0.22 * s, 1.4 * s, 6), mat(ton(stamBrun)))); st.position.y = 0.7 * s; g.add(st); }
    const lager = 3 + Math.floor(rnd() * 2);
    for (let i = 0; i < lager; i++) {
      const k = i / lager, rad = (1.5 - k * 0.95) * mellan(0.85, 1.15) * s, hh = h / lager * 1.5;
      const kon = skugga(new THREE.Mesh(skrynkla(new THREE.ConeGeometry(rad, hh, 7 + Math.floor(rnd() * 3)), 0.08), mat(skifta(farg.clone(), 0, 0, i * 0.025))));
      kon.position.y = 1.1 * s + k * h * 0.78 + hh / 2; kon.rotation.y = rnd() * 3; g.add(kon); barrLista.push([kon, kon.material.color.clone()]);
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
      b.scale.y = mellan(1.1, 1.5); b.position.set(mellan(-0.5, 0.5) * s, h * mellan(0.75, 1.0), mellan(-0.5, 0.5) * s); g.add(b); lovLista.push([b, b.material.color.clone(), rnd()]);
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
      b.position.set(mellan(-1.1, 1.1) * s, h + mellan(0, 1.4) * s, mellan(-1.1, 1.1) * s); g.add(b); lovLista.push([b, b.material.color.clone(), rnd()]);
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
    lagg(t, x, z); trad.push(t);
    // en dunge: ibland ett par småträd av samma sort runt om
    if (rnd() < 0.18) for (let k = 0; k < 2; k++) {
      const x2 = x + mellan(-2.5, 2.5), z2 = z + mellan(-2.5, 2.5); if (!ledig(x2, z2, 2)) continue;
      const u = valjSort()(s * mellan(0.45, 0.7)); u.position.set(x2, 0, z2); u.rotation.y = rnd() * 6; u.userData.fas = rnd() * 10; u.userData.lut = 0; lagg(u, x2, z2); trad.push(u);
    }
  }

  // ---------- Buskar ----------
  for (let i = 0; i < ANTAL_BUSKAR; i++) {
    const pos = plats(TOMT + 2.5, TOMT + 32, 0); if (!pos) continue;
    const g = new THREE.Group(), farg = ton(rnd() < 0.3 ? 0x5a8f3c : 0x3f7a3a, 0.14), n = 2 + Math.floor(rnd() * 3);
    for (let k = 0; k < n; k++) { const b = skugga(new THREE.Mesh(skrynkla(new THREE.IcosahedronGeometry(mellan(0.35, 0.7), 0), 0.18), mat(farg))); b.position.set(mellan(-0.5, 0.5), mellan(0.2, 0.45), mellan(-0.5, 0.5)); b.scale.y = 0.75; g.add(b); }
    if (rnd() < 0.3) for (let k = 0; k < 6; k++) { const bar = new THREE.Mesh(new THREE.SphereGeometry(0.05, 5, 4), mat(rnd() < 0.5 ? 0xc0303a : 0x3a3a8a)); bar.position.set(mellan(-0.5, 0.5), mellan(0.35, 0.7), mellan(-0.5, 0.5)); g.add(bar); }   // lingon och blåbär
    g.position.set(pos[0], 0, pos[1]); g.rotation.y = rnd() * 6; lagg(g, pos[0], pos[1]);
  }

  // ---------- Stenar och stubbar ----------
  for (let i = 0; i < ANTAL_STENAR; i++) {
    const pos = plats(TOMT + 2, TOMT + 34, 0); if (!pos) continue;
    const s = rnd() < 0.12 ? mellan(0.9, 1.6) : mellan(0.15, 0.5);   // några stora stenblock
    const m = skugga(new THREE.Mesh(skrynkla(new THREE.DodecahedronGeometry(s, 0), 0.25), mat(ton(0x8a8a85, 0.08))));
    m.scale.y = mellan(0.45, 0.8); m.position.set(pos[0], s * 0.25, pos[1]); m.rotation.set(rnd(), rnd() * 6, rnd()); lagg(m, pos[0], pos[1]);
    if (s > 0.8) { const mossa = new THREE.Mesh(skrynkla(new THREE.DodecahedronGeometry(s * 0.7, 0), 0.2), mat(0x6f8f3a)); mossa.scale.set(1, 0.3, 1); mossa.position.set(pos[0], s * 0.55, pos[1]); lagg(mossa, pos[0], pos[1]); }
  }
  for (let i = 0; i < ANTAL_STUBBAR; i++) {
    const pos = plats(TOMT + 3, TOMT + 30, 0); if (!pos) continue;
    if (rnd() < 0.5) {
      const st = skugga(new THREE.Mesh(new THREE.CylinderGeometry(mellan(0.2, 0.3), mellan(0.28, 0.38), mellan(0.25, 0.5), 8), mat(ton(stamBrun))));
      st.position.set(pos[0], 0.15, pos[1]); lagg(st, pos[0], pos[1]);
      const topp = new THREE.Mesh(new THREE.CircleGeometry(0.24, 8), mat(0xc9a36a)); topp.rotation.x = -Math.PI / 2; topp.position.set(pos[0], st.geometry.parameters.height / 2 + 0.151, pos[1]); lagg(topp, pos[0], pos[1]);
    } else {   // en vindfälld stock
      const l = mellan(2, 4), st = skugga(new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.22, l, 7), mat(ton(0x5d4330))));
      st.rotation.set(0, rnd() * 6, Math.PI / 2); st.position.set(pos[0], 0.2, pos[1]); lagg(st, pos[0], pos[1]);
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

  // ---------- Gärdesgård runt området man får vara i – Rolf öppnar mer senare ----------
  // arga skyltar: dödskallar, djävulshorn och serietidningssvordomar (#@!%&)
  const ARGA = [['PRIVAT MARK!', 'HÅLL ER BORTA FÖR FAN!', 'dod'], ['FÖRSVINN!', 'JÄVLA INKRÄKTARE', 'horn'], ['BETRÄDES EJ!', 'ÄGAREN ÄR FÖRBANNAD', 'dod'], ['VÄND OM', 'FÖR HELVETE!', 'horn'], ['VARNING', 'FÖR ÄGAREN', 'dod'], ['%&#@!', 'BORT FRÅN MITT STAKET', 'horn'], ['INGEN', 'ÅTERVÄNDO', 'dod'], ['DRA ÅT HELVETE', '/BENGT-ÅKE', 'horn'], ['SKITUNGAR', 'OCH SOPGUBBAR: STICK!', 'dod']];
  const argTex = {};
  function argTextur(n) {
    if (argTex[n]) return argTex[n];
    const [a, b, bild] = ARGA[n], cv = document.createElement('canvas'); cv.width = 256; cv.height = 160; const c = cv.getContext('2d');
    c.fillStyle = n % 3 === 0 ? '#f2d64b' : '#f4ecd8'; c.fillRect(0, 0, 256, 160);
    c.strokeStyle = '#1a1a1a'; c.lineWidth = 8; c.strokeRect(6, 6, 244, 148);
    // dödskalle eller djävulshorn
    c.fillStyle = '#1a1a1a'; c.save(); c.translate(40, 80);
    if (bild === 'dod') { c.beginPath(); c.arc(0, -8, 22, 0, Math.PI * 2); c.fill(); c.fillRect(-12, 8, 24, 14); c.fillStyle = n % 3 === 0 ? '#f2d64b' : '#f4ecd8'; c.beginPath(); c.arc(-8, -10, 6, 0, 7); c.arc(8, -10, 6, 0, 7); c.fill(); c.fillRect(-7, 12, 3, 8); c.fillRect(-1, 12, 3, 8); c.fillRect(5, 12, 3, 8); c.fillStyle = '#1a1a1a'; c.lineWidth = 6; c.beginPath(); c.moveTo(-26, 26); c.lineTo(26, 40); c.moveTo(26, 26); c.lineTo(-26, 40); c.strokeStyle = '#1a1a1a'; c.stroke(); }
    else { c.fillStyle = '#b01818'; c.beginPath(); c.arc(0, 4, 20, 0, Math.PI * 2); c.fill(); c.beginPath(); c.moveTo(-16, -8); c.quadraticCurveTo(-30, -30, -20, -42); c.lineTo(-8, -14); c.fill(); c.beginPath(); c.moveTo(16, -8); c.quadraticCurveTo(30, -30, 20, -42); c.lineTo(8, -14); c.fill(); c.fillStyle = '#fff'; c.fillRect(-10, -2, 7, 4); c.fillRect(3, -2, 7, 4); c.fillStyle = '#1a1a1a'; c.fillRect(-8, 12, 16, 3); }
    c.restore();
    c.fillStyle = '#b01818'; c.textAlign = 'center'; c.font = 'bold 30px sans-serif'; c.fillText(a, 150, 70); c.fillStyle = '#1a1a1a'; c.font = 'bold 18px sans-serif'; c.fillText(b, 150, 106);
    const tx = new THREE.CanvasTexture(cv); tx.colorSpace = THREE.SRGBColorSpace; return (argTex[n] = tx);
  }
  function argSkylt(n) {
    const g = new THREE.Group(), tra = mat(0x6a4a2a);
    const p = skugga(new THREE.Mesh(new THREE.BoxGeometry(0.08, 1.7, 0.08), tra)); p.position.y = 0.85; g.add(p);
    const sk = new THREE.Mesh(new THREE.PlaneGeometry(1.0, 0.62), new THREE.MeshStandardMaterial({ map: argTextur(n % ARGA.length), side: THREE.DoubleSide })); sk.position.set(0, 1.45, 0.05); g.add(sk);
    return g;
  }
  const staket = new THREE.Group();
  function byggStaket(grans) {
    while (staket.children.length) staket.remove(staket.children[0]);
    if (!grans) return;
    const tra = mat(0x7a5a3a), bomMat = mat(0xd03030), vitMat = mat(0xf2f2f2);
    const g = { x1: grans.minX - 0.6, x2: grans.maxX + 0.6, z1: grans.minZ - 0.6, z2: grans.maxZ + 0.6 };
    const vagZ = TOMT + 3, vagB = 2.8;
    const sida = (xa, za, xb, zb) => {
      const l = Math.hypot(xb - xa, zb - za), n = Math.max(1, Math.round(l / 2.2)), vinkel = -Math.atan2(zb - za, xb - xa);
      for (let i = 0; i < n; i++) {
        const t0 = i / n, t1 = (i + 1) / n, x0 = xa + (xb - xa) * t0, z0 = za + (zb - za) * t0, x1 = xa + (xb - xa) * t1, z1 = za + (zb - za) * t1;
        const mx = (x0 + x1) / 2, mz = (z0 + z1) / 2;
        if (Math.abs(mz - vagZ) < vagB && Math.abs(xb - xa) < 0.01) continue;   // vägen: bom i stället (nedan)
        const s1 = skugga(new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.07, 1.2, 5), tra)); s1.position.set(x0, 0.6, z0); s1.rotation.z = mellan(-0.05, 0.05); staket.add(s1);
        // gärdesgård: snedställda slanor mellan stolparna
        for (let k = 0; k < 4; k++) {
          const sl = new THREE.Mesh(new THREE.BoxGeometry(l / n * 1.05, 0.05, 0.05), tra);
          const u = (k + 0.5) / 4; sl.position.set(x0 + (x1 - x0) * u, 0.55, z0 + (z1 - z0) * u);
          sl.rotation.set(0, vinkel, 0.55); sl.scale.x = 0.3; staket.add(sl);
        }
        const rail = new THREE.Mesh(new THREE.BoxGeometry(l / n, 0.06, 0.06), tra); rail.position.set(mx, 0.95, mz); rail.rotation.y = vinkel; staket.add(rail);
      }
    };
    sida(g.x1, g.z1, g.x2, g.z1); sida(g.x1, g.z2, g.x2, g.z2); sida(g.x1, g.z1, g.x1, g.z2); sida(g.x2, g.z1, g.x2, g.z2);
    // röd-vita bommar där vägen går ut
    for (const x of [g.x1, g.x2]) {
      const bom = new THREE.Group(); bom.position.set(x, 0, vagZ);
      for (const dz of [-vagB - 0.3, vagB + 0.3]) { const st = skugga(new THREE.Mesh(new THREE.BoxGeometry(0.16, 1.1, 0.16), vitMat)); st.position.set(0, 0.55, dz); bom.add(st); }
      for (let k = 0; k < 8; k++) { const d = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.12, (vagB * 2 + 0.6) / 8), k % 2 ? vitMat : bomMat); d.position.set(0, 0.95, -vagB - 0.3 + (k + 0.5) * (vagB * 2 + 0.6) / 8); bom.add(d); }
      staket.add(bom);
    }
    // Bengt-Åkes arga skyltar längs hela staketet – han är en riktigt ilsken markägare
    for (const [sx, sz, sr, langd, axel] of [[g.x1, g.z1, 0, g.x2 - g.x1, 'x'], [g.x1, g.z2, Math.PI, g.x2 - g.x1, 'x'], [g.x1, g.z1, Math.PI / 2, g.z2 - g.z1, 'z'], [g.x2, g.z1, -Math.PI / 2, g.z2 - g.z1, 'z']]) {
      for (let d = 6; d < langd - 3; d += 9 + (Math.floor(d) % 4)) {
        const x = axel === 'x' ? sx + d : sx, z = axel === 'z' ? sz + d : sz;
        if (axel === 'z' && Math.abs(z - vagZ) < vagB + 1) continue;
        const sk = argSkylt(Math.floor(d * 7 + sx * 3 + sz) >>> 0);
        sk.position.set(x, 0, z); sk.rotation.y = sr + mellan(-0.12, 0.12); sk.rotation.z = mellan(-0.08, 0.08); staket.add(sk);
      }
    }
  }
  byggStaket(grans);
  scen.add(staket);
  // röj bort träd, buskar och stenar inom ett område (köpt mark)
  function rojUt(r) {
    for (const [o, x, z] of allt) if (x > r.minX - 1.2 && x < r.maxX + 1.2 && z > r.minZ - 1.2 && z < r.maxZ + 1.2) o.visible = false;
    for (let i = trad.length - 1; i >= 0; i--) if (!trad[i].visible) trad.splice(i, 1);
  }

  // vinden: träden vajar lite, i otakt
  function uppdatera(tid) {
    const v = VIND * (0.7 + Math.sin(tid * 0.13) * 0.3);
    for (const t of trad) { const f = t.userData.fas; t.rotation.z = t.userData.lut + Math.sin(tid * 0.9 + f) * v; t.rotation.x = Math.sin(tid * 0.7 + f * 1.3) * v * 0.6; }
  }
  // ---------- Årstider: sommar, höst, vinter ----------
  const HOST = [new THREE.Color(0xe0a020), new THREE.Color(0xd06020), new THREE.Color(0xb03a20), new THREE.Color(0xc8b030)];
  const SNO = new THREE.Color(0xf4f6fa);
  let snoFall = null;
  function satArstid(a) {
    for (const [m, bas, r] of lovLista) {
      if (a === 'sommar') { m.visible = true; m.material.color.copy(bas); }
      else if (a === 'host') { m.visible = r > 0.15; m.material.color.copy(bas).lerp(HOST[Math.floor(r * 4) % 4], 0.85); }
      else { m.visible = r > 0.9; m.material.color.copy(HOST[1]).lerp(new THREE.Color(0x6a4a2a), 0.6); }
    }
    for (const [m, bas] of barrLista) m.material.color.copy(bas).lerp(SNO, a === 'vinter' ? 0.35 : 0);
    if (mark && markBas) {
      const c = mark.geometry.attributes.color, mal = a === 'vinter' ? SNO : a === 'host' ? new THREE.Color(0x9a8a50) : null;
      for (let i = 0; i < c.count; i++) { const x = new THREE.Color(markBas[i * 3], markBas[i * 3 + 1], markBas[i * 3 + 2]); if (mal) x.lerp(mal, a === 'vinter' ? 0.82 : 0.4); c.setXYZ(i, x.r, x.g, x.b); }
      c.needsUpdate = true;
    }
    if (a === 'vinter' && !snoFall) {
      const n = 1500, pos = new Float32Array(n * 3);
      for (let i = 0; i < n; i++) { pos[i * 3] = mellan(-25, 25); pos[i * 3 + 1] = mellan(0, 18); pos[i * 3 + 2] = mellan(-25, 25); }
      const geo = new THREE.BufferGeometry(); geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
      snoFall = new THREE.Points(geo, new THREE.PointsMaterial({ color: 0xffffff, size: 0.08, transparent: true, opacity: 0.85, depthWrite: false })); scen.add(snoFall);
    }
    if (snoFall) snoFall.visible = a === 'vinter';
  }
  function uppdateraSno(dt, kamera) {
    if (!snoFall?.visible) return;
    snoFall.position.set(kamera.position.x, 0, kamera.position.z);
    const p = snoFall.geometry.attributes.position;
    for (let i = 0; i < p.count; i++) { let y = p.getY(i) - dt * (0.8 + (i % 7) * 0.12); if (y < 0) y += 18; p.setY(i, y); p.setX(i, p.getX(i) + Math.sin(y + i) * dt * 0.15); }
    p.needsUpdate = true;
  }
  return { uppdatera, trad, mark, staket, byggStaket, rojUt, satArstid, uppdateraSno };
}
