/* ============================================================================
   NUKE · LINEUPS
   ----------------------------------------------------------------------------
   Wird vom Editor (editor.html) geschrieben, kann aber auch von Hand gepflegt
   werden. Bilder liegen unter  images/nuke/<id>/  (position.webp, lineup-N.webp,
   result.webp, thumb.webp).
============================================================================ */

addLineups([

  {
    id:    "nuke-outside-double-truck-smoke",
    map:   "Nuke",
    side:  "T",
    type:  "Smoke",
    title: "Outside Double - Truck",
    from:  "T Spawn",
    throwAt: { x: 0.309, y: 0.568 },
    position: { img: "images/nuke/nuke-outside-double-truck-smoke/position.webp", note: "" },
    lineups: [
      { img: "images/nuke/nuke-outside-double-truck-smoke/lineup-1.webp", label: "Wurf", type: "Smoke", stance: "stand", input: ["MOUSE1","SPACE"], note: "", landAt: { x: 0.612, y: 0.659 } },
      { img: "images/nuke/nuke-outside-double-truck-smoke/lineup-2.webp", label: "Wurf 2", type: "Smoke", stance: "stand", input: ["MOUSE1","SPACE"], note: "", landAt: { x: 0.651, y: 0.673 } },
    ],
    result: { img: "images/nuke/nuke-outside-double-truck-smoke/result.webp", note: "" },
  },

  {
    id:    "nuke-a-pop-t-roof-flash",
    map:   "Nuke",
    side:  "T",
    type:  "Flash",
    title: "A Pop - T Roof",
    from:  "T Roof",
    landAt:  { x: 0.554, y: 0.51 },
    throwAt: { x: 0.475, y: 0.519 },
    position: { img: "images/nuke/nuke-a-pop-t-roof-flash/position.webp", note: "" },
    lineups: [
      { img: "images/nuke/nuke-a-pop-t-roof-flash/lineup-1.webp", label: "Wurf", type: "Flash", stance: "stand", input: ["MOUSE1"], note: "" },
    ],
    result: { img: "images/nuke/nuke-a-pop-t-roof-flash/result.webp", note: "" },
  },

  {
    id:    "nuke-hut-exit-flash",
    map:   "Nuke",
    side:  "T",
    type:  "Flash",
    title: "HUT Exit",
    from:  "HUT",
    landAt:  { x: 0.529, y: 0.523 },
    throwAt: { x: 0.51, y: 0.552 },
    position: { img: "images/nuke/nuke-hut-exit-flash/position.webp", note: "" },
    lineups: [
      { img: "images/nuke/nuke-hut-exit-flash/lineup-1.webp", label: "Wurf", stance: "stand", input: ["MOUSE1"], note: "" },
    ],
    result: { img: "images/nuke/nuke-hut-exit-flash/result.webp", note: "" },
  },

  {
    id:    "nuke-mini-pop-top-mini-flash",
    map:   "Nuke",
    side:  "T",
    type:  "Flash",
    title: "Mini Pop - Top Mini",
    from:  "Top Mini",
    landAt:  { x: 0.626, y: 0.63 },
    throwAt: { x: 0.59, y: 0.632 },
    position: { img: "images/nuke/nuke-mini-pop-top-mini-flash/position.webp", note: "" },
    lineups: [
      { img: "images/nuke/nuke-mini-pop-top-mini-flash/lineup-1.webp", label: "Wurf", type: "Flash", stance: "stand", input: ["MOUSE2"], note: "" },
    ],
    result: { img: "images/nuke/nuke-mini-pop-top-mini-flash/result.webp", note: "" },
  },

  {
    id:    "nuke-mini-waterfall-smoke",
    map:   "Nuke",
    side:  "T",
    type:  "Smoke",
    title: "Mini Waterfall",
    from:  "T Spawn",
    landAt:  { x: 0.597, y: 0.636 },
    throwAt: { x: 0.248, y: 0.553 },
    position: { img: "images/nuke/nuke-mini-waterfall-smoke/position.webp", note: "Man sieht das Eck kaum, aber da ist eins" },
    lineups: [
      { img: "images/nuke/nuke-mini-waterfall-smoke/lineup-1.webp", label: "Wurf", type: "Smoke", stance: "stand", input: ["MOUSE1","SPACE","CTRL"], note: "" },
    ],
    result: { img: "images/nuke/nuke-mini-waterfall-smoke/result.webp", note: "" },
  },

  {
    id:    "nuke-top-hut-molotov",
    map:   "Nuke",
    side:  "T",
    type:  "Molotov",
    title: "Top HUT",
    from:  "T Roof",
    landAt:  { x: 0.54, y: 0.548 },
    throwAt: { x: 0.479, y: 0.541 },
    position: { img: "images/nuke/nuke-top-hut-molotov/position.webp", note: "" },
    lineups: [
      { img: "images/nuke/nuke-top-hut-molotov/lineup-1.webp", label: "Wurf", type: "Molotov", stance: "run", input: ["MOUSE1","W"], note: "1 Schritt" },
    ],
    result: { img: "images/nuke/nuke-top-hut-molotov/result.webp", note: "Rechts top HUT nicht abgedeckt" },
  },

  {
    id:    "nuke-hut-heaven-flash-flash",
    map:   "Nuke",
    side:  "T",
    type:  "Flash",
    title: "HUT & Heaven Flash",
    from:  "T Roof",
    landAt:  { x: 0.578, y: 0.491 },
    throwAt: { x: 0.481, y: 0.516 },
    position: { img: "images/nuke/nuke-hut-heaven-flash-flash/position.webp", note: "" },
    lineups: [
      { img: "images/nuke/nuke-hut-heaven-flash-flash/lineup-1.webp", label: "Wurf", type: "Flash", stance: "stand", input: ["MOUSE1","SPACE"], note: "" },
    ],
    result: { img: "images/nuke/nuke-hut-heaven-flash-flash/result.webp", note: "" },
  },

]);
