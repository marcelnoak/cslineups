/* ============================================================================
   INFERNO · LINEUPS
   ----------------------------------------------------------------------------
   Wird vom Editor (editor.html) geschrieben, kann aber auch von Hand gepflegt
   werden. Bilder liegen unter  images/inferno/<id>/  (position.webp, lineup-N.webp,
   result.webp, thumb.webp).
============================================================================ */

addLineups([

  {
    id:    "inferno-ct-banana1-smoke",
    map:   "Inferno",
    side:  "T",
    type:  "Smoke",
    title: "CT + Flash - Banana1",
    from:  "Banana",
    throwAt: { x: 0.44, y: 0.455 },
    position: { img: "images/inferno/inferno-ct-banana1-smoke/position.webp", note: "" },
    lineups: [
      { img: "images/inferno/inferno-ct-banana1-smoke/lineup-1.webp", label: "Wurf", type: "Smoke", stance: "stand", input: ["MOUSE1"], note: "", landAt: { x: 0.604, y: 0.235 } },
      { img: "images/inferno/inferno-ct-banana1-smoke/lineup-2.webp", label: "B Site Pop Flash", type: "Flash", stance: "stand", input: ["MOUSE1","SPACE"], note: "Mittig oben, linkes Fass", landAt: { x: 0.524, y: 0.279 } },
    ],
    result: [
      { img: "images/inferno/inferno-ct-banana1-smoke/result.webp", note: "" },
      { img: "images/inferno/inferno-ct-banana1-smoke/result2.webp", note: "" },
    ],
  },

  {
    id:    "inferno-coffins-half-wall-smoke",
    map:   "Inferno",
    side:  "T",
    type:  "Smoke",
    title: "Coffins - half wall",
    from:  "Banana",
    landAt:  { x: 0.52, y: 0.145 },
    throwAt: { x: 0.511, y: 0.408 },
    position: { img: "images/inferno/inferno-coffins-half-wall-smoke/position.webp", note: "" },
    lineups: [
      { img: "images/inferno/inferno-coffins-half-wall-smoke/lineup-1.webp", label: "Coffins", type: "Smoke", stance: "stand", input: ["MOUSE1","SPACE"], note: "" },
    ],
    result: { img: "images/inferno/inferno-coffins-half-wall-smoke/result.webp", note: "" },
  },

  {
    id:    "inferno-top-mid-t-ramp-smoke",
    map:   "Inferno",
    side:  "T",
    type:  "Smoke",
    title: "Top Mid - T Ramp",
    from:  "T Ramp",
    landAt:  { x: 0.687, y: 0.67 },
    throwAt: { x: 0.246, y: 0.684 },
    position: { img: "images/inferno/inferno-top-mid-t-ramp-smoke/position.webp", note: "" },
    lineups: [
      { img: "images/inferno/inferno-top-mid-t-ramp-smoke/lineup-1.webp", label: "Wurf", type: "Smoke", stance: "stand", input: ["MOUSE1","SPACE"], note: "" },
    ],
    result: { img: "images/inferno/inferno-top-mid-t-ramp-smoke/result.webp", note: "" },
  },

  {
    id:    "inferno-top-mid-flash",
    map:   "Inferno",
    side:  "T",
    type:  "Flash",
    title: "Top Mid",
    from:  "Lower Mid",
    landAt:  { x: 0.687, y: 0.682 },
    throwAt: { x: 0.502, y: 0.638 },
    position: { img: "images/inferno/inferno-top-mid-flash/position.webp", note: "" },
    lineups: [
      { img: "images/inferno/inferno-top-mid-flash/lineup-1.webp", label: "Wurf", stance: "stand", input: ["MOUSE1"], note: "" },
    ],
    result: { img: "images/inferno/inferno-top-mid-flash/result.webp", note: "" },
  },

  {
    id:    "inferno-boiler-flash",
    map:   "Inferno",
    side:  "T",
    type:  "Flash",
    title: "Boiler",
    from:  "Lower Mid",
    landAt:  { x: 0.66, y: 0.707 },
    throwAt: { x: 0.504, y: 0.639 },
    position: { img: "images/inferno/inferno-boiler-flash/position.webp", note: "" },
    lineups: [
      { img: "images/inferno/inferno-boiler-flash/lineup-1.webp", label: "Boiler", type: "Flash", stance: "run", input: ["MOUSE1","W"], note: "2-3 Schritte dann throw" },
    ],
    result: { img: "images/inferno/inferno-boiler-flash/result.webp", note: "" },
  },

  {
    id:    "inferno-moto-lower-mid-smoke",
    map:   "Inferno",
    side:  "T",
    type:  "Smoke",
    title: "Moto - Lower Mid",
    from:  "Lower Mid",
    landAt:  { x: 0.873, y: 0.613 },
    throwAt: { x: 0.502, y: 0.639 },
    position: { img: "images/inferno/inferno-moto-lower-mid-smoke/position.webp", note: "" },
    lineups: [
      { img: "images/inferno/inferno-moto-lower-mid-smoke/lineup-1.webp", label: "Moto", type: "Smoke", stance: "stand", input: ["MOUSE1","SPACE"], note: "" },
    ],
    result: { img: "images/inferno/inferno-moto-lower-mid-smoke/result.webp", note: "" },
  },

  {
    id:    "inferno-short-exit-smoke",
    map:   "Inferno",
    side:  "T",
    type:  "Smoke",
    title: "Short Exit",
    from:  "2nd Mid",
    landAt:  { x: 0.868, y: 0.792 },
    throwAt: { x: 0.467, y: 0.811 },
    position: { img: "images/inferno/inferno-short-exit-smoke/position.webp", note: "Tendenziell bisschen rechts" },
    lineups: [
      { img: "images/inferno/inferno-short-exit-smoke/lineup-1.webp", label: "Wurf", stance: "stand", input: ["MOUSE1"], note: "Oberste Blume" },
    ],
    result: { img: "images/inferno/inferno-short-exit-smoke/result.webp", note: "" },
  },

  {
    id:    "inferno-balcony-exit-smoke",
    map:   "Inferno",
    side:  "T",
    type:  "Smoke",
    title: "Balcony Exit",
    from:  "Carpet",
    landAt:  { x: 0.825, y: 0.784 },
    throwAt: { x: 0.741, y: 0.826 },
    position: { img: "images/inferno/inferno-balcony-exit-smoke/position.webp", note: "" },
    lineups: [
      { img: "images/inferno/inferno-balcony-exit-smoke/lineup-1.webp", label: "Wurf", stance: "stand", input: ["MOUSE1"], note: "" },
    ],
    result: { img: "images/inferno/inferno-balcony-exit-smoke/result.webp", note: "" },
  },

  {
    id:    "inferno-balcony-exit-flash",
    map:   "Inferno",
    side:  "T",
    type:  "Flash",
    title: "balcony exit",
    from:  "Carpet",
    landAt:  { x: 0.825, y: 0.784 },
    throwAt: { x: 0.773, y: 0.824 },
    position: { img: "images/inferno/inferno-balcony-exit-flash/position.webp", note: "" },
    lineups: [
      { img: "images/inferno/inferno-balcony-exit-flash/lineup-1.webp", label: "Wurf", stance: "stand", input: ["MOUSE1"], note: "" },
    ],
    result: { img: "images/inferno/inferno-balcony-exit-flash/result.webp", note: "Pit nicht flashed wenn er nur Short schaut" },
  },

  {
    id:    "inferno-long-lower-mid-smoke",
    map:   "Inferno",
    side:  "T",
    type:  "Smoke",
    title: "Top Mid L - lower mid",
    from:  "Lower Mid",
    landAt:  { x: 0.696, y: 0.634 },
    throwAt: { x: 0.458, y: 0.684 },
    position: { img: "images/inferno/inferno-long-lower-mid-smoke/position.webp", note: "" },
    lineups: [
      { img: "images/inferno/inferno-long-lower-mid-smoke/lineup-1.webp", label: "Wurf", type: "Smoke", stance: "stand", input: ["MOUSE1"], note: "" },
    ],
    result: { img: "images/inferno/inferno-long-lower-mid-smoke/result.webp", note: "" },
  },

  {
    id:    "inferno-top-mid-l-2nd-mid-smoke",
    map:   "Inferno",
    side:  "T",
    type:  "Smoke",
    title: "Top Mid L/R - 2nd Mid",
    from:  "2nd Mid",
    throwAt: { x: 0.556, y: 0.768 },
    position: { img: "images/inferno/inferno-top-mid-l-2nd-mid-smoke/position.webp", note: "" },
    lineups: [
      { img: "images/inferno/inferno-top-mid-l-2nd-mid-smoke/lineup-1.webp", label: "Top Mid L", type: "Smoke", stance: "stand", input: ["MOUSE1"], note: "", landAt: { x: 0.696, y: 0.636 } },
      { img: "images/inferno/inferno-top-mid-l-2nd-mid-smoke/lineup-2.webp", label: "Top Mid R", type: "Smoke", stance: "stand", input: ["MOUSE1","MOUSE2","SPACE"], note: "", landAt: { x: 0.694, y: 0.707 } },
    ],
    result: [
      { img: "images/inferno/inferno-top-mid-l-2nd-mid-smoke/result.webp", note: "" },
      { img: "images/inferno/inferno-top-mid-l-2nd-mid-smoke/result2.webp", note: "" },
    ],
  },

  {
    id:    "inferno-new-box-molotov",
    map:   "Inferno",
    side:  "T",
    type:  "Molotov",
    title: "New box",
    from:  "Car",
    landAt:  { x: 0.431, y: 0.267 },
    throwAt: { x: 0.511, y: 0.367 },
    position: { img: "images/inferno/inferno-new-box-molotov/position.webp", note: "" },
    lineups: [
      { img: "images/inferno/inferno-new-box-molotov/lineup-1.webp", label: "Newbox Jump", type: "Molotov", stance: "stand", input: ["MOUSE1","SPACE"], note: "" },
      { img: "images/inferno/inferno-new-box-molotov/lineup-2.webp", label: "Newbox Normal", type: "Molotov", stance: "stand", input: ["MOUSE1"], note: "Deckt nicht komplett hinter newbox" },
    ],
    result: { img: "images/inferno/inferno-new-box-molotov/result.webp", note: "" },
  },

  {
    id:    "inferno-fountain-flash",
    map:   "Inferno",
    side:  "T",
    type:  "Flash",
    title: "Fountain",
    from:  "Half Wall",
    landAt:  { x: 0.477, y: 0.213 },
    throwAt: { x: 0.506, y: 0.414 },
    position: { img: "images/inferno/inferno-fountain-flash/position.webp", note: "" },
    lineups: [
      { img: "images/inferno/inferno-fountain-flash/lineup-1.webp", label: "Wurf", type: "Flash", stance: "stand", input: ["MOUSE1"], note: "Mittig über der Leiter" },
    ],
    result: { img: "images/inferno/inferno-fountain-flash/result.webp", note: "Poppt hinter der Säule" },
  },

  {
    id:    "inferno-half-wall-ct-spawn-smoke",
    map:   "Inferno",
    side:  "CT",
    type:  "Smoke",
    title: "Half Wall - CT Spawn",
    from:  "CT Spawn",
    landAt:  { x: 0.483, y: 0.414 },
    throwAt: { x: 0.923, y: 0.285 },
    position: { img: "images/inferno/inferno-half-wall-ct-spawn-smoke/position.webp", note: "" },
    lineups: [
      { img: "images/inferno/inferno-half-wall-ct-spawn-smoke/lineup-1.webp", label: "Wurf", type: "Smoke", stance: "stand", input: ["MOUSE1","SPACE"], note: "" },
    ],
    result: { img: "images/inferno/inferno-half-wall-ct-spawn-smoke/result.webp", note: "" },
  },

  {
    id:    "inferno-b-banana-support-smoke",
    map:   "Inferno",
    side:  "T",
    type:  "Smoke",
    title: "B Banana Support",
    from:  "A Short",
    landAt:  { x: 0.569, y: 0.301 },
    throwAt: { x: 0.785, y: 0.788 },
    position: { img: "images/inferno/inferno-b-banana-support-smoke/position.webp", note: "" },
    lineups: [
      { img: "images/inferno/inferno-b-banana-support-smoke/lineup-1.webp", label: "Wurf", stance: "stand", input: ["MOUSE1","W","SPACE"], note: "W Tap" },
    ],
    result: { img: "images/inferno/inferno-b-banana-support-smoke/result.webp", note: "" },
  },

  {
    id:    "inferno-banana-retake-flash",
    map:   "Inferno",
    side:  "T",
    type:  "Flash",
    title: "Banana Retake",
    from:  "Coffin",
    throwAt: { x: 0.527, y: 0.156 },
    position: { img: "images/inferno/inferno-banana-retake-flash/position.webp", note: "" },
    lineups: [
      { img: "images/inferno/inferno-banana-retake-flash/lineup-1.webp", label: "Wurf", type: "Flash", stance: "stand", input: ["MOUSE1"], note: "", landAt: { x: 0.544, y: 0.349 } },
      { img: "images/inferno/inferno-banana-retake-flash/lineup-2.webp", label: "Wurf 2", type: "Flash", stance: "stand", input: ["MOUSE1","SPACE"], note: "Mittig über der Pflanze", landAt: { x: 0.493, y: 0.365 } },
    ],
    result: { img: "images/inferno/inferno-banana-retake-flash/result.webp", note: "" },
  },

]);
