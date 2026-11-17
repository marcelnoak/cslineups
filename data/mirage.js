/* ============================================================================
   MIRAGE · LINEUPS
   ----------------------------------------------------------------------------
   Wird vom Editor (editor.html) geschrieben, kann aber auch von Hand gepflegt
   werden. Bilder liegen unter  images/mirage/<id>/  (position.webp, lineup-N.webp,
   result.webp, thumb.webp).
============================================================================ */

addLineups([

  {
    id:    "mirage-a-stairs-jungle-smoke",
    map:   "Mirage",
    side:  "T",
    type:  "Smoke",
    title: "A - Stairs & Jungle",
    from:  "T Spawn",
    throwAt: { x: 0.914, y: 0.375 },
    position: { img: "images/mirage/mirage-a-stairs-jungle-smoke/position.webp", note: "" },
    lineups: [
      { img: "images/mirage/mirage-a-stairs-jungle-smoke/lineup-1.webp", label: "Wurf", type: "Smoke", stance: "stand", input: ["MOUSE1","SPACE"], note: "", landAt: { x: 0.537, y: 0.643 } },
      { img: "images/mirage/mirage-a-stairs-jungle-smoke/lineup-2.webp", label: "Wurf 2", type: "Smoke", stance: "stand", input: ["MOUSE1","SPACE"], note: "", landAt: { x: 0.486, y: 0.645 } },
    ],
    result: { img: "images/mirage/mirage-a-stairs-jungle-smoke/result.webp", note: "" },
  },

  {
    id:    "mirage-mid-window-short-con-b-cat-smoke",
    map:   "Mirage",
    side:  "T",
    type:  "Smoke",
    title: "Mid - Window, Short, Con, B Cat",
    from:  "T Spawn",
    position: { img: "images/mirage/mirage-mid-window-short-con-b-cat-smoke/position.webp", note: "" },
    lineups: [
      { img: "images/mirage/mirage-mid-window-short-con-b-cat-smoke/lineup-1.webp", label: "Window", type: "Smoke", stance: "stand", input: ["MOUSE1","SPACE"], note: "" },
      { img: "images/mirage/mirage-mid-window-short-con-b-cat-smoke/lineup-2.webp", label: "Short", type: "Smoke", stance: "stand", input: ["MOUSE1","SPACE"], note: "" },
      { img: "images/mirage/mirage-mid-window-short-con-b-cat-smoke/lineup-3.webp", label: "Con", type: "Smoke", stance: "stand", input: ["MOUSE1","SPACE"], note: "" },
      { img: "images/mirage/mirage-mid-window-short-con-b-cat-smoke/lineup-4.webp", label: "B Cat", type: "Smoke", stance: "stand", input: ["MOUSE1","SPACE"], note: "" },
    ],
    result: [
      { img: "images/mirage/mirage-mid-window-short-con-b-cat-smoke/result.webp", note: "" },
      { img: "images/mirage/mirage-mid-window-short-con-b-cat-smoke/result2.webp", note: "" },
    ],
  },

  {
    id:    "mirage-a-stairs-jungle-smoke-2",
    map:   "Mirage",
    side:  "T",
    type:  "Smoke",
    title: "A - Stairs, Jungle",
    from:  "A Ramp",
    throwAt: { x: 0.81, y: 0.534 },
    position: { img: "images/mirage/mirage-a-stairs-jungle-smoke-2/position.webp", note: "" },
    lineups: [
      { img: "images/mirage/mirage-a-stairs-jungle-smoke-2/lineup-1.webp", label: "Stairs", type: "Smoke", stance: "stand", input: ["MOUSE1","SPACE"], note: "", landAt: { x: 0.536, y: 0.643 } },
      { img: "images/mirage/mirage-a-stairs-jungle-smoke-2/lineup-2.webp", label: "Jungle", type: "Smoke", stance: "stand", input: ["MOUSE1","SPACE"], note: "", landAt: { x: 0.488, y: 0.643 } },
    ],
    result: { img: "images/mirage/mirage-a-stairs-jungle-smoke-2/result.webp", note: "" },
  },

  {
    id:    "mirage-ct-smoke",
    map:   "Mirage",
    side:  "T",
    type:  "Smoke",
    title: "CT",
    from:  "A - Ramp",
    landAt:  { x: 0.452, y: 0.81 },
    throwAt: { x: 0.843, y: 0.53 },
    position: { img: "images/mirage/mirage-ct-smoke/position.webp", note: "" },
    lineups: [
      { img: "images/mirage/mirage-ct-smoke/lineup-1.webp", label: "CT", type: "Smoke", stance: "stand", input: ["MOUSE1","SPACE"], note: "" },
    ],
    result: { img: "images/mirage/mirage-ct-smoke/result.webp", note: "" },
  },

  {
    id:    "mirage-b-window-cat-smoke",
    map:   "Mirage",
    side:  "T",
    type:  "Smoke",
    title: "B - Window, Cat",
    from:  "B - Aps",
    throwAt: { x: 0.599, y: 0.158 },
    position: { img: "images/mirage/mirage-b-window-cat-smoke/position.webp", note: "" },
    lineups: [
      { img: "images/mirage/mirage-b-window-cat-smoke/lineup-1.webp", label: "B Window", type: "Smoke", stance: "stand", input: ["MOUSE1","SPACE"], note: "", landAt: { x: 0.255, y: 0.39 } },
      { img: "images/mirage/mirage-b-window-cat-smoke/lineup-2.webp", label: "B Cat", type: "Smoke", stance: "stand", input: ["MOUSE1"], note: "", landAt: { x: 0.398, y: 0.296 } },
    ],
    result: [
      { img: "images/mirage/mirage-b-window-cat-smoke/result.webp", note: "" },
      { img: "images/mirage/mirage-b-window-cat-smoke/result2.webp", note: "" },
    ],
  },

  {
    id:    "mirage-window-top-mid-smoke",
    map:   "Mirage",
    side:  "T",
    type:  "Smoke",
    title: "Window-Top-mid",
    from:  "Top Mid",
    landAt:  { x: 0.4, y: 0.455 },
    throwAt: { x: 0.698, y: 0.453 },
    position: { img: "images/mirage/mirage-window-top-mid-smoke/position.webp", note: "" },
    lineups: [
      { img: "images/mirage/mirage-window-top-mid-smoke/lineup-1.webp", label: "Wurf", type: "Smoke", stance: "stand", input: ["MOUSE1","CTRL"], note: "" },
    ],
    result: { img: "images/mirage/mirage-window-top-mid-smoke/result.webp", note: "" },
  },

  {
    id:    "mirage-b-cat-from-top-mid-smoke",
    map:   "Mirage",
    side:  "T",
    type:  "Smoke",
    title: "B Cat from Top Mid",
    from:  "Top Mid",
    landAt:  { x: 0.474, y: 0.385 },
    throwAt: { x: 0.701, y: 0.471 },
    position: { img: "images/mirage/mirage-b-cat-from-top-mid-smoke/position.webp", note: "" },
    lineups: [
      { img: "images/mirage/mirage-b-cat-from-top-mid-smoke/lineup-1.webp", label: "Wurf", type: "Smoke", stance: "stand", input: ["MOUSE1"], note: "" },
    ],
    result: { img: "images/mirage/mirage-b-cat-from-top-mid-smoke/result.webp", note: "" },
  },

]);
