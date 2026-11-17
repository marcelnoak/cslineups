/* ============================================================================
   CACHE · LINEUPS
   ----------------------------------------------------------------------------
   Vorlage unten kopieren, ausfüllen, Kommentar-Zeichen entfernen.
   Bilder ablegen unter  images/cache/<lineup>/ (position.webp, lineup-1.webp, result.webp)

   Bilder als .webp ablegen. Die Liste nutzt automatisch <lineup>/thumb.webp
   (fehlt es, wird das Result-Bild genommen).

   result kann EIN Bild ODER mehrere sein:
     result: { img: "…/result.webp", note: "…" }                       (ein Bild)
     result: [ { img: "…/result.webp",  note: "…" },
               { img: "…/result2.webp", note: "…" } ]                  (mehrere)
============================================================================ */

addLineups([

  {
    id:    "cache-z-smoke",
    map:   "Cache",
    side:  "T",
    type:  "Smoke",
    title: "Z",
    from:  "T Spawn",
    landAt:  { x: 0.291, y: 0.579 },
    throwAt: { x: 0.789, y: 0.58 },
    position: { img: "images/cache/z-smoke/position.webp", note: "" },
    lineups: [
      { img: "images/cache/z-smoke/lineup-1.webp", label: "Wurf", stance: "stand", input: ["W","SPACE","MOUSE1"], note: "Bis Ende Zebrastreifen laufen" },
    ],
    result: { img: "images/cache/z-smoke/result.webp", note: "Z Smoke" },
  },

  {
    id:    "cache-mid-left-smoke",
    map:   "Cache",
    side:  "T",
    type:  "Smoke",
    title: "Mid left",
    from:  "Garage",
    landAt:  { x: 0.42, y: 0.557 },
    throwAt: { x: 0.664, y: 0.523 },
    position: { img: "images/cache/mid-left-smoke/position.webp", note: "" },
    lineups: [
      { img: "images/cache/mid-left-smoke/lineup-1.webp", label: "Wurf", stance: "stand", input: ["MOUSE1"], note: "Kombi Smoke, allein useless" },
      { img: "images/cache/mid-left-smoke/lineup-2.webp", label: "Zoomed", stance: "", input: [], note: "" },
    ],
    result: { img: "images/cache/mid-left-smoke/result.webp", note: "Mid left Smoke" },
  },

  {
    id:    "cache-mid-right-smoke",
    map:   "Cache",
    side:  "T",
    type:  "Smoke",
    title: "Mid right",
    from:  "Garage",
    landAt:  { x: 0.422, y: 0.51 },
    throwAt: { x: 0.664, y: 0.543 },
    position: { img: "images/cache/mid-right-smoke/position.webp", note: "" },
    lineups: [
      { img: "images/cache/mid-right-smoke/lineup-1.webp", label: "Wurf", stance: "stand", input: ["MOUSE1"], note: "Kombi Smoke, allein useless" },
      { img: "images/cache/mid-right-smoke/lineup-2.webp", label: "Zoomed", stance: "", input: [], note: "" },
    ],
    result: { img: "images/cache/mid-right-smoke/result.webp", note: "Mid right Smoke" },
  },

  {
    id:    "cache-a-quad-smoke",
    map:   "Cache",
    side:  "T",
    type:  "Smoke",
    title: "Quad Smoke",
    from:  "Garage",
    landAt:  { x: 0.361, y: 0.22 },
    throwAt: { x: 0.583, y: 0.485 },
    position: { img: "images/cache/a-quad-smoke/position.webp", note: "" },
    lineups: [
      { img: "images/cache/a-quad-smoke/lineup-1.webp", label: "Wurf", stance: "stand", input: ["MOUSE1","SPACE"], note: "" },
      { img: "images/cache/a-quad-smoke/lineup-2.webp", label: "Zoomed", stance: "", input: [], note: "" },
    ],
    result: { img: "images/cache/a-quad-smoke/result.webp", note: "Quad smoke, can plant in" },
  },

  {
    id:    "cache-a-sitewall-smoke",
    map:   "Cache",
    side:  "T",
    type:  "Smoke",
    title: "A Site Wall",
    from:  "Long A",
    landAt:  { x: 0.339, y: 0.335 },
    throwAt: { x: 0.59, y: 0.296 },
    position: { img: "images/cache/a-sitewall-smoke/position.webp", note: "Ins Eck" },
    lineups: [
      { img: "images/cache/a-sitewall-smoke/lineup-1.webp", label: "Waterfall Cross", stance: "stand", input: ["MOUSE1","MOUSE2","SPACE"], note: "Waterfall Cross Smoke" },
      { img: "images/cache/a-sitewall-smoke/lineup-1.webp", label: "Backsite", stance: "", input: ["W","MOUSE1","MOUSE2","SPACE"], note: "W Tap - to complete wall" },
    ],
    result: { img: "images/cache/a-sitewall-smoke/result.webp", note: "" },
  },

  {
    id:    "cache-a-sup-flash",
    map:   "Cache",
    side:  "T",
    type:  "Flash",
    title: "A Site Support Flash",
    from:  "Long A",
    landAt:  { x: 0.443, y: 0.278 },
    throwAt: { x: 0.592, y: 0.373 },
    position: { img: "images/cache/a-sup-flash/position.webp", note: "Ins Eck" },
    lineups: [
      { img: "images/cache/a-sup-flash/lineup-1.webp", label: "Wurf", stance: "stand", input: ["MOUSE1","SPACE"], note: "" },
    ],
    result: { img: "images/cache/a-sup-flash/result.webp", note: "Flash A Site from Long A" },
  },

  {
    id:    "cache-b-head-moli",
    map:   "Cache",
    side:  "T",
    type:  "Molotov",
    title: "Headshot Molotov",
    from:  "Toxic",
    landAt:  { x: 0.298, y: 0.777 },
    throwAt: { x: 0.502, y: 0.836 },
    position: { img: "images/cache/b-head-moli/position.webp", note: "Ins Eck" },
    lineups: [
      { img: "images/cache/b-head-moli/lineup-1.webp", label: "Wurf", stance: "stand", input: ["MOUSE1"], note: "" },
    ],
    result: { img: "images/cache/b-head-moli/result.webp", note: "Moli Headshot/Default from Toxic" },
  },

  {
    id:    "cache-b-heaven-smoke",
    map:   "Cache",
    side:  "T",
    type:  ["Smoke","HE","Molotov"],
    title: "Heaven Smoke",
    from:  "Toxic",
    throwAt: { x: 0.467, y: 0.838 },
    position: { img: "images/cache/b-heaven-smoke/position.webp", note: "Ins Eck" },
    lineups: [
      { img: "images/cache/b-heaven-smoke/lineup-1.webp", label: "Smoke", stance: "stand", input: ["MOUSE1"], note: "", landAt: { x: 0.289, y: 0.702 } },
      { img: "images/cache/b-heaven-smoke/lineup-2.webp", label: "additional Molotov", stance: "stand", input: ["MOUSE1"], note: "", landAt: { x: 0.363, y: 0.829 } },
      { img: "images/cache/b-heaven-smoke/lineup-3.webp", label: "additional HE", stance: "stand", input: ["MOUSE1"], note: "", landAt: { x: 0.332, y: 0.829 } },
    ],
    result: [
      { img: "images/cache/b-heaven-smoke/result.webp", note: "Heaven Smoke, but watch out push right side heaven" },
      { img: "images/cache/b-heaven-smoke/result2.webp", note: "Additional HE/Molotov" },
    ],
  },

  {
    id:    "cache-b-ct-smoke",
    map:   "Cache",
    side:  "T",
    type:  ["Smoke"],
    title: "B CT Smoke",
    from:  "B Main",
    landAt:  { x: 0.264, y: 0.738 },
    throwAt: { x: 0.424, y: 0.72 },
    position: { img: "images/cache/b-ct-smoke/position.webp", note: "Ins Eck" },
    lineups: [
      { img: "images/cache/b-ct-smoke/lineup-1.webp", label: "Smoke", stance: "stand", input: ["W","MOUSE1"], note: "Release Smoke at this point" },
    ],
    result: { img: "images/cache/b-ct-smoke/result.webp", note: "" },
  },

]);
