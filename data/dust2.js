/* ============================================================================
   DUST2 · LINEUPS
   ----------------------------------------------------------------------------
   Neues Lineup: Block kopieren, ausfüllen. Pro Lineup mindestens:
     • 1× Position   images/dust2/<lineup>/position.webp
     • 1× Lineup     images/dust2/<lineup>/lineup-1.webp   (gern mehrere)
     • 1× Result     images/dust2/<lineup>/result.webp

   Bilder als .webp ablegen. Die Liste nutzt automatisch <lineup>/thumb.webp
   (fehlt es, wird das Result-Bild genommen).

   result kann EIN Bild ODER mehrere sein:
     result: { img: "…/result.webp", note: "…" }                       (ein Bild)
     result: [ { img: "…/result.webp",  note: "…" },
               { img: "…/result2.webp", note: "…" } ]                  (mehrere)
============================================================================ */

addLineups([


  //d2-ashort-waterfall
  {
    id:    "d2-ashort-waterfall",     // eindeutige ID (frei wählbar)
    map:   "Dust2",                   // muss zu einem MAPS-Namen passen
    side:  "T",                       // "T" oder "CT"
    type:  "Smoke",                   // Smoke / Flash / Molotov / HE / Decoy …
    title: "A Short Lurk Waterfall",
    from:  "Short Stairs",            // Anstell-Position (kurze Beschreibung)

    // 1× Position-Screenshot
    position: {
      img:  "images/dust2/ashort-waterfall/position.webp",
      note: "Unten an den Short Stairs anstellen – Blick die Treppe hoch.",
    },

    // ≥1 Lineup-Screenshots (Fadenkreuz setzen, werfen)
    lineups: [
      {
        img:    "images/dust2/ashort-waterfall/lineup-1.webp",
        label:  "Wurf 1",
        stance: "crouch",             // optional: "stand" / "crouch" / "jump" / "run" / "walk"
        input:  ["MOUSE1"],           // Tasten/Maus für den Wurf
        note:   "Fadenkreuz auf die linke obere Ecke des Fensterrahmens.",
      },
      {
        img:    "images/dust2/ashort-waterfall/lineup-2.webp",
        label:  "Wurf 2",
        stance: "stand",
        input:  ["MOUSE1", "MOUSE2"],
        note:   "Fadenkreuz an die Unterkante der Lampenhalterung.",
      },
    ],

    // 1× Result-Screenshot (wo die Utility landet)
    result: {
      img:  "images/dust2/ashort-waterfall/result.webp",
      note: "Smoke deckt A-Short komplett ab.",
    },
  },
  //d2-t-ctcross
  {
    id:    "d2-t-ctcross",
    map:   "Dust2",
    side:  "T",
    type:  "Smoke",
    title: "CT cross",
    from:  "A Long",
    position: {
      img:  "images/dust2/long-ctcross/position.webp",
      note: "Rechts am Container",
    },
    lineups: [
      {
        img:    "images/dust2/long-ctcross/lineup-1.webp",
        label:  "Wurf",
        stance: "stand",
        input:  ["MOUSE1"],
        note:   "Fadenkreuz auf die Antennenspitze.",
      },
    ],
    result: {
      img:  "images/dust2/long-ctcross/result.webp",
      note: "Smoke schließt CT Cross sauber.",
    },
  },
  //d2-t-asite
  {
    id:    "d2-t-asite",
    map:   "Dust2",
    side:  "T",
    type:  "Smoke",
    title: "A Site",
    from:  "A Long",
    position: {
      img:  "images/dust2/long-asite/position.webp",
      note: "Im Eck von Container und Box",
    },
    lineups: [
      {
        img:    "images/dust2/long-asite/lineup-1.webp",
        label:  "Wurf",
        stance: "crouch",
        input:  ["MOUSE1"],
        note:   "",
      },
    ],
    result: {
      img:  "images/dust2/long-asite/result.webp",
      note: "Smoke Liegt auf A Site",
    },
  },
  //d2-t-car
  {
    id:    "d2-t-car",
    map:   "Dust2",
    side:  "T",
    type:  "Molotov",
    title: "Car Molotov",
    from:  "A Long",
    position: {
      img:  "images/dust2/long-car-moli/position.webp",
      note: "Auf der Tonne im Eck",
    },
    lineups: [
      {
        img:    "images/dust2/long-car-moli/lineup-1.webp",
        label:  "Wurf",
        stance: "stand",
        input:  ["MOUSE1", "SPACE"],
        note:   "Oben mittig über dem Schwarzen",
      },
    ],
    result: {
      img:  "images/dust2/long-car-moli/result.webp",
      note: "CT kann noch hinter Car sitzen",
    },
  },
  //d2-t-site-flash
  {
    id:    "d2-t-site-flash",
    map:   "Dust2",
    side:  "T",
    type:  "Flash",
    title: "A Site Flash",
    from:  "A Long",
    position: {
      img:  "images/dust2/long-site-flash/position.webp",
      note: "Auf der Tonne im Eck",
    },
    lineups: [
      {
        img:    "images/dust2/long-site-flash/lineup-1.webp",
        label:  "Wurf",
        stance: "stand",
        input:  ["MOUSE1", "SPACE"],
        note:   "Oben rechts an dem Teil",
      },
    ],
    result: {
      img:  "images/dust2/long-site-flash/result.webp",
      note: "T können bis CT Cross ohne blind zu sein laufen",
    },
  },
  //d2-t-longcorner-flash
  {
    id:    "d2-t-longcorner-flash",
    map:   "Dust2",
    side:  "T",
    type:  "Flash",
    title: "Long Corner Flash",
    from:  "T Car",
    position: {
      img:  "images/dust2/t-longcorner-flash/position.webp",
      note: "Auf Kante",
    },
    lineups: [
      {
        img:    "images/dust2/t-longcorner-flash/lineup-1.webp",
        label:  "Wurf",
        stance: "stand",
        input:  ["MOUSE1", "SPACE"],
        note:   "Eck von Mauer und Schatten",
      },
    ],
    result: {
      img:  "images/dust2/t-longcorner-flash/result.webp",
      note: "Blendet mainly corner, Pit nicht richtig",
    },
  },
  //d2-t-longpop-flash
  {
    id:    "d2-t-longpop-flash",
    map:   "Dust2",
    side:  "T",
    type:  "Flash",
    title: "Long Pop Flash",
    from:  "Long Doors",
    position: {
      img:  "images/dust2/t-longpop-flash/position.webp",
      note: "Crosshiar auf dem runden Teil halten und Sprinten",
    },
    lineups: [
      {
        img:    "images/dust2/t-longpop-flash/lineup-1.webp",
        label:  "Wurf",
        stance: "stand",
        input:  ["MOUSE2", "SPACE"],
        note:   "Kurz vor der Wand den Throw",
      },
    ],
    result: {
      img:  "images/dust2/t-longpop-flash/result.webp",
      note: "Vorne peaken, Flash poppt hinter dir",
    },
  },
  //d2-t-long-flash
  {
    id:    "d2-t-long-flash",
    map:   "Dust2",
    side:  "T",
    type:  "Flash",
    title: "Long Flash",
    from:  "T",
    position: {
      img:  "images/dust2/t-long-flash/position.webp",
      note: "An der Box, auf Höhe des Paketbands",
    },
    lineups: [
      {
        img:    "images/dust2/t-long-flash/lineup-1.webp",
        label:  "Wurf",
        stance: "stand",
        input:  ["MOUSE1", "SPACE"],
        note:   "",
      },
    ],
    result: {
      img:  "images/dust2/t-long-flash/result.webp",
      note: "Blendet Pit, Close, Blue Box. ABER nicht Corner!",
    },
  },
  //d2-t-middoor-smoke
  {
    id:    "d2-t-middoor-smoke",
    map:   "Dust2",
    side:  "T",
    type:  "Smoke",
    title: "Mid Doors Smoke Full",
    from:  "T",
    position: {
      img:  "images/dust2/t-middoor-smoke/position.webp",
      note: "Genau auf Kante",
    },
    lineups: [
      {
        img:    "images/dust2/t-middoor-smoke/lineup-1.webp",
        label:  "Wurf",
        stance: "stand",
        input:  ["MOUSE1", "SPACE"],
        note:   "",
      },
      {
        img:    "images/dust2/t-middoor-smoke/lineup-2.webp",
        label:  "Zoomed",
        stance: "stand",
        input:  [],
        note:   "Unten am Fleck",
      },
    ],
    result: {
      img:  "images/dust2/t-middoor-smoke/result.webp",
      note: "Kann nicht geblockt werden, hat keine Gap über der Smoke",
    },
  },
  //d2-sui-middoor-smoke
  {
    id:    "d2-sui-middoor-smoke",
    map:   "Dust2",
    side:  "T",
    type:  "Smoke",
    title: "Mid Doors Smoke",
    from:  "Suicide",
    position: {
      img:  "images/dust2/sui-middoor-smoke/position.webp",
      note: "Ins Eck",
    },
    lineups: [
      {
        img:    "images/dust2/sui-middoor-smoke/lineup-1.webp",
        label:  "Wurf",
        stance: "stand",
        input:  ["MOUSE1"],
        note:   "",
      },
      {
        img:    "images/dust2/sui-middoor-smoke/lineup-2.webp",
        label:  "Zoomed",
        stance: "stand",
        input:  [],
        note:   "Untere Schraube",
      },
    ],
    result: {
      img:  "images/dust2/sui-middoor-smoke/result.webp",
      note: "Kann geblockt werden, manchmal Gap über der Smoke",
    },
  },
  //d2-t-xbox-smoke
  {
    id:    "d2-t-xbox-smoke",
    map:   "Dust2",
    side:  "T",
    type:  "Smoke",
    title: "X-Box Smoke",
    from:  "T",
    position: {
      img:  "images/dust2/t-xbox-smoke/position.webp",
      note: "Ins Eck",
    },
    lineups: [
      {
        img:    "images/dust2/t-xbox-smoke/lineup-1.webp",
        label:  "Wurf",
        stance: "stand",
        input:  ["MOUSE1", "SPACE"],
        note:   "",
      },
      {
        img:    "images/dust2/t-xbox-smoke/lineup-2.webp",
        label:  "Zoomed",
        stance: "stand",
        input:  [],
        note:   "Ans Eck, etwas rechts vom Schatten",
      },
    ],
    result: {
      img:  "images/dust2/t-xbox-smoke/result.webp",
      note: "",
    },
  },
  //d2-t-bexec-smoke
  {
    id:    "d2-t-bexec-smoke",
    map:   "Dust2",
    side:  "T",
    type:  "Smoke",
    title: "B Execute Smokes",
    from:  "B Outside",
    position: {
      img:  "images/dust2/t-bexec-smoke/position.webp",
      note: "Ins Eck",
    },
    lineups: [
      {
        img:    "images/dust2/t-bexec-smoke/lineup-1.webp",
        label:  "Window",
        stance: "stand",
        input:  ["MOUSE1", "SPACE"],
        note:   "",
      },
      {
        img:    "images/dust2/t-bexec-smoke/lineup-2.webp",
        label:  "Door",
        stance: "stand",
        input:  ["MOUSE1", "SPACE"],
        note:   "",
      },
      {
        img:    "images/dust2/t-bexec-smoke/lineup-3.webp",
        label:  "Plat",
        stance: "stand",
        input:  ["MOUSE1", "SPACE"],
        note:   "",
      },
    ],
    result: {
      img:  "images/dust2/t-bexec-smoke/result.webp",
      note: "Window, Door and Plateau",
    },
  },
  //d2-tun-bpop-flash
  {
    id:    "d2-tun-bpop-flash",
    map:   "Dust2",
    side:  "T",
    type:  "Flash",
    title: "B Pop Flash",
    from:  "Upper",
    position: {
      img:  "images/dust2/tun-bpop-flash/position.webp",
      note: "Ins Eck",
    },
    lineups: [
      {
        img:    "images/dust2/tun-bpop-flash/lineup-1.webp",
        label:  "Wurf",
        stance: "stand",
        input:  ["MOUSE1", "SPACE"],
        note:   "",
      },
      {
        img:    "images/dust2/tun-bpop-flash/lineup-2.webp",
        label:  "Zoomed",
        stance: "stand",
        input:  ["MOUSE1", "SPACE"],
        note:   "",
      },
    ],
    result: {
      img:  "images/dust2/tun-bpop-flash/result.webp",
      note: "B Pop Flash",
    },
  },
  //d2-t-bwindow-smoke
  {
    id:    "d2-t-bwindow-smoke",
    map:   "Dust2",
    side:  "T",
    type:  "Smoke",
    title: "B Window Smoke",
    from:  "Outside B",
    position: {
      img:  "images/dust2/t-bwindow-smoke/position.webp",
      note: "Mittig auf den Schatten",
    },
    lineups: [
      {
        img:    "images/dust2/t-bwindow-smoke/lineup-1.webp",
        label:  "Wurf",
        stance: "stand",
        input:  ["W", "SPACE", "MOUSE1"],
        note:   "Tap W - Jumpthrow ",
      },
      {
        img:    "images/dust2/t-bwindow-smoke/lineup-2.webp",
        label:  "Detailed",
        stance: "stand",
        input:  [],
        note:   "Align with blue stripe",
      },
    ],
    result: {
      img:  "images/dust2/t-bwindow-smoke/result.webp",
      note: "Not 100% consistant",
    },
  },
  //d2-t-bdoor-smoke
  {
    id:    "d2-t-bdoor-smoke",
    map:   "Dust2",
    side:  "T",
    type:  "Smoke",
    title: "B Window Smoke",
    from:  "T",
    position: {
      img:  "images/dust2/t-bdoor-smoke/position.webp",
      note: "Ins Eck",
    },
    lineups: [
      {
        img:    "images/dust2/t-bdoor-smoke/lineup-1.webp",
        label:  "Wurf",
        stance: "stand",
        input:  ["W", "SPACE", "MOUSE1"],
        note:   "",
      },
      {
        img:    "images/dust2/t-bdoor-smoke/lineup-2.webp",
        label:  "Detailed",
        stance: "",
        input:  [],
        note:   "Jumpthrow at this point",
      },
    ],
    result: {
      img:  "images/dust2/t-bdoor-smoke/result.webp",
      note: "",
    },
  },
  //d2-re-bpop-flash
  {
    id:    "d2-re-bpop-flash",
    map:   "Dust2",
    side:  "CT",
    type:  "Flash",
    title: "B Pop Flash",
    from:  "B Doors",
    position: {
      img:  "images/dust2/re-bpop-flash/position.webp",
      note: "Ins Eck",
    },
    lineups: [
      {
        img:    "images/dust2/re-bpop-flash/lineup-1.webp",
        label:  "Wurf",
        stance: "stand",
        input:  ["MOUSE2", "SPACE"],
        note:   "",
      },
      {
        img:    "images/dust2/re-bpop-flash/lineup-2.webp",
        label:  "When door smoked",
        stance: "stand",
        input:  ["MOUSE2", "SPACE"],
        note:   "Align 3Y: unterhalb der Schraube, auf der Kante vom Rahmen",
      },
    ],
    result: {
      img:  "images/dust2/re-bpop-flash/result.webp",
      note: "Retake B Pop Flash",
    },
  },
  //d2-re-bsite-moli
  {
    id:    "d2-re-bsite-moli",
    map:   "Dust2",
    side:  "CT",
    type:  "Flash",
    title: "Retake B Site Molotov",
    from:  "B Window",
    position: {
      img:  "images/dust2/re-bsite-moli/position.webp",
      note: "Ins Eck",
    },
    lineups: [
      {
        img:    "images/dust2/re-bsite-moli/lineup-1.webp",
        label:  "Wurf",
        stance: "stand",
        input:  ["MOUSE1"],
        note:   "Schattenkante mittig",
      },
    ],
    result: {
      img:  "images/dust2/re-bsite-moli/result.webp",
      note: "Retake B Site Molotov",
    },
  },
  //d2-ct-btun-flash
  {
    id:    "d2-ct-btun-flash",
    map:   "Dust2",
    side:  "CT",
    type:  "Flash",
    title: "Anti B Push Flash",
    from:  "B Box",
    position: {
      img:  "images/dust2/ct-btun-flash/position.webp",
      note: "Ins Eck",
    },
    lineups: [
      {
        img:    "images/dust2/ct-btun-flash/lineup-1.webp",
        label:  "Wurf",
        stance: "stand",
        input:  ["MOUSE2"],
        note:   "Äußerstes Loch",
      },
    ],
    result: {
      img:  "images/dust2/ct-btun-flash/result.webp",
      note: "Anti B Push Flash",
    },
  },
  //d2-ct-shortsup-smoke
  {
    id:    "d2-ct-shortsup-smoke",
    map:   "Dust2",
    side:  "CT",
    type:  "Smoke",
    title: "A Short Support Smoke",
    from:  "CT Mid",
    position: {
      img:  "images/dust2/ct-shortsup-smoke/position.webp",
      note: "Mittig am Auto",
    },
    lineups: [
      {
        img:    "images/dust2/ct-shortsup-smoke/lineup-1.webp",
        label:  "Wurf",
        stance: "stand",
        input:  ["MOUSE1", "MOUSE2"],
        note:   "Fenster Links oben",
      },
      {
        img:    "images/dust2/ct-shortsup-smoke/lineup-2.webp",
        label:  "Zoomed",
        stance: "stand",
        input:  ["MOUSE1", "MOUSE2"],
        note:   "Vordere Kante links oben am Fenster",
      },
    ],
    result: {
      img:  "images/dust2/ct-shortsup-smoke/result.webp",
      note: "A Short Support Smoke",
    },
  },
  //d2-ct-sitelong-flash
  {
    id:    "d2-ct-sitelong-flash",
    map:   "Dust2",
    side:  "CT",
    type:  "Flash",
    title: "A Long Flash (Site)",
    from:  "A Site",
    position: {
      img:  "images/dust2/ct-sitelong-flash/position.webp",
      note: "Mittig am Auto",
    },
    lineups: [
      {
        img:    "images/dust2/ct-sitelong-flash/lineup-1.webp",
        label:  "Wurf",
        stance: "stand",
        input:  ["MOUSE1"],
        note:   "2nd power line",
      },
      {
        img:    "images/dust2/ct-sitelong-flash/lineup-2.webp",
        label:  "Zoomed",
        stance: "",
        input:  [],
        note:   "Align with markings",
      },
      {
        img:    "images/dust2/ct-sitelong-flash/lineup-3.webp",
        label:  "Detail Crosshair",
        stance: "",
        input:  [],
        note:   "",
      },
    ],
    result: {
      img:  "images/dust2/ct-sitelong-flash/result.webp",
      note: "A Long Flash, no CT is flashed",
    },
  },
  //d2-ct-long-smoke
  {
    id:    "d2-ct-long-smoke",
    map:   "Dust2",
    side:  "CT",
    type:  "Smoke",
    title: "Long Doors from CT",
    from:  "CT",
    position: {
      img:  "images/dust2/ct-long-smoke/position.webp",
      note: "Ins Eck",
    },
    lineups: [
      {
        img:    "images/dust2/ct-long-smoke/lineup-1.webp",
        label:  "Wurf",
        stance: "stand",
        input:  ["MOUSE1", "SPACE"],
        note:   "",
      },
      {
        img:    "images/dust2/ct-long-smoke/lineup-2.webp",
        label:  "Zoomed",
        stance: "",
        input:  [],
        note:   "",
      },
    ],
    result: {
      img:  "images/dust2/ct-long-smoke/result.webp",
      note: "Long Doors from CT",
    },
  },

]);
