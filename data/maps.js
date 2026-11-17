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
   Optional "radar": Top-down-Radarbild (images/radar/<slug>.webp, quadratisch).
      Damit gibt es die Radar-Ansicht; Lande-/Wurfpunkte setzt man im Editor.
   2) data/<slug>.js  anlegen (siehe data/dust2.js als Muster) und Lineups per
      addLineups([ … ])  eintragen.
============================================================================ */

const MAPS = [
  { name: "Dust2",   img: "images/maps/dust2.jpg", radar: "images/radar/dust2.webp" },
  { name: "Inferno", img: "images/maps/inferno.jpg", radar: "images/radar/inferno.webp" },
  { name: "Cache",   img: "images/maps/cache.jpg", radar: "images/radar/cache.webp" },
  { name: "Mirage",  img: "images/maps/mirage.jpg", radar: "images/radar/mirage.webp" },
  { name: "Anubis",  img: "images/maps/anubis.jpg", radar: "images/radar/anubis.webp" },
  { name: "Nuke",    img: "images/maps/nuke.jpg", radar: "images/radar/nuke.webp" },
  { name: "Ancient", img: "images/maps/ancient.jpg", radar: "images/radar/ancient.webp" },
  { name: "Overpass", img: "images/maps/overpass.jpg", radar: "images/radar/overpass.webp" },
  //{ name: "Vertigo", img: "images/maps/vertigo.jpg" },
  //{ name: "Train",   img: "images/maps/train.jpg" },
];

// Von der App befüllt – NICHT direkt bearbeiten. Jede data/<map>.js ruft addLineups().
const LINEUPS = [];
function addLineups(arr){ for (const l of arr) LINEUPS.push(l); }
function mapSlug(name){ return name.toLowerCase().replace(/[^a-z0-9]+/g, ''); }
