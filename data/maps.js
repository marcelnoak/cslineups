/* ============================================================================
   LINEUP-BUCH · MAP-LISTE + LADE-FRAMEWORK
   ----------------------------------------------------------------------------
   Datenhaltung ist jetzt pro Map aufgeteilt:  data/<map>.js  (z. B. data/dust2.js).
   Diese Datei enthält nur die Map-Liste. Die App lädt zu jeder Map automatisch
   die passende Datei  data/<slug>.js  (slug = Name klein, ohne Sonderzeichen:
   "Dust2" -> dust2, "Cache" -> cache).

   ── NEUE MAP HINZUFÜGEN (2 Schritte, keine index.html-Änderung nötig) ────────
   1) Unten in MAPS einen Eintrag ergänzen. Optionales Vorschaubild unter
      images/maps/<slug>.jpg|webp  ablegen und bei "img" eintragen (sonst weglassen).
   2) data/<slug>.js  anlegen (siehe data/dust2.js als Muster) und Lineups per
      addLineups([ … ])  eintragen.
============================================================================ */

const MAPS = [
  { name: "Dust2",   img: "images/maps/dust2.jpg" },
  { name: "Inferno", img: "images/maps/inferno.jpg" },
  { name: "Cache",   img: "images/maps/cache.jpg" },
  { name: "Mirage",  img: "images/maps/mirage.jpg" },
  { name: "Anubis",  img: "images/maps/anubis.jpg" },
  { name: "Nuke",    img: "images/maps/nuke.jpg" },
  { name: "Ancient", img: "images/maps/ancient.jpg" },
  { name: "Overpass", img: "images/maps/overpass.jpg" },
  //{ name: "Vertigo", img: "images/maps/vertigo.jpg" },
  //{ name: "Train",   img: "images/maps/train.jpg" },
];

// Von der App befüllt – NICHT direkt bearbeiten. Jede data/<map>.js ruft addLineups().
const LINEUPS = [];
function addLineups(arr){ for (const l of arr) LINEUPS.push(l); }
function mapSlug(name){ return name.toLowerCase().replace(/[^a-z0-9]+/g, ''); }
