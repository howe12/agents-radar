# CAD & Mechanical Design Open Source Digest 2026-07-08

> Sources: GitHub Search API (CAD, FreeCAD, 3D-printing, generative-design topics) | 115 repos | Generated: 2026-07-08 02:49 UTC

---

# CAD & Mechanical Design Open Source Digest

## 🔥 Today's Highlights

The FreeCAD ecosystem is the dominant force this week, with the core kernel (**FreeCAD/FreeCAD**, 31,971⭐), an MCP server (**neka-nat/freecad-mcp**, 1,258⭐), an AI workbench (**ghbalf/freecad-ai**, 360⭐), a Design-for-Manufacturing workbench, and even a WASM build of the 2D geometric solver all actively shipping. AI-to-CAD agent infrastructure is consolidating: **earthtojake/text-to-cad** (7,792⭐), **Kiln**, and **rhino-mcp** form a clear stack of agent-skills → MCP servers → multi-CAD integration. Web-native STEP/IFC/B-Rep is also crossing an inflection point as OCCT and a pure-Rust kernel (**cadcore**) reach WebAssembly, making browser-based parametric CAD practical for the first time.

---

## 🖥️ CAD Platforms & Editors

- **[FreeCAD/FreeCAD](https://github.com/FreeCAD/FreeCAD)** ⭐31,971 — Flagship open-source parametric 3D modeler; the gravitational center of the week's activity.
- **[openscad/openscad](https://github.com/openscad/openscad)** ⭐9,718 — Programmer's solid modeller; defining the code-CAD paradigm that everything else is being benchmarked against.
- **[gumyr/build123d](https://github.com/gumyr/build123d)** ⭐2,590 — Python CAD library that competes head-on with CadQuery for native scripting workflows.
- **[xiangechen/chili3d](https://github.com/xiangechen/chili3d)** ⭐4,660 — Browser-based 3D CAD for online design; signals where lightweight modeling is heading.
- **[LibreCAD/LibreCAD](https://github.com/LibreCAD/LibreCAD)** ⭐6,051 — Cross-platform 2D CAD with mature DXF/DWG support, still a standard in 2D drafting.
- **[solvespace/solvespace](https://github.com/solvespace/solvespace)** ⭐4,041 — Parametric 2D/3D CAD with constraint solving; essential reference for constraint-based modeling.

## 📐 Computational Geometry & Kernels

- **[Open-Cascade-SAS/OCCT](https://github.com/Open-Cascade-SAS/OCCT)** ⭐2,624 — Open-source B-Rep kernel powering FreeCAD, CadQuery, Mayo, and most modern open CAD.
- **[CGAL/cgal](https://github.com/CGAL/cgal)** ⭐5,971 — Gold-standard computational geometry library; mesh generation, arrangements, boolean ops.
- **[YATSKOVSKYI/cadcore](https://github.com/YATSKOVSKYI/cadcore)** ⭐27 — Pure-Rust CAD kernel with B-Rep, analytic surfaces, and STEP AP203 export — a notable alternative to OCCT's C++.

## 🧬 Generative & Parametric Design

- **[processing/processing4](https://github.com/processing/processing4)** ⭐434 — Creative-coding sketchbook widely used for generative art and parametric visualization in design education.
- **[tanishqbhattad/rhino-mcp](https://github.com/tanishqbhattad/rhino-mcp)** ⭐8 — MCP server exposing 115 Rhino 8 tools to Claude/ChatGPT; bridges generative AI and professional NURBS modeling.

## 🖨️ 3D Printing & Manufacturing

- **[MarlinFirmware/Marlin](https://github.com/MarlinFirmware/Marlin)** ⭐17,471 — De-facto firmware for RepRap-class 3D printers; foundational for the entire 3DP stack.
- **[OrcaSlicer/OrcaSlicer](https://github.com/OrcaSlicer/OrcaSlicer)** ⭐15,035 — Multi-vendor G-code generator (Bambu, Prusa, Voron, Creality) and one of the most active slicers in development.
- **[Sienci-Labs/gsender](https://github.com/Sienci-Labs/gsender)** ⭐356 — Modern grbl/grblHAL CNC controller; the most polished open-source CNC sender of the cycle.
- **[little-did-I-know/Gcode](https://github.com/little-did-I-know/Gcode)** ⭐63 — G-code visualizer, analyzer, and modifier — a missing toolchain layer between slicer and machine.
- **[Donkie/Spoolman](https://github.com/Donkie/Spoolman)** ⭐2,566 — Self-hosted filament inventory; increasingly critical for farm and multi-printer workflows.

## 🔗 File Formats & Interop

- **[earthtojake/text-to-cad](https://github.com/earthtojake/text-to-cad)** ⭐7,792 — The largest agent-skills collection for CAD, robotics, and hardware design — anchor of the text-to-CAD ecosystem.
- **[f3d-app/f3d](https://github.com/f3d-app/f3d)** ⭐4,526 — Fast, minimalist 3D viewer; the standard CLI/quick-look tool for STEP, STL, glTF and friends.
- **[fougue/mayo](https://github.com/fougue/mayo)** ⭐2,092 — Qt + OCCT-based CAD viewer and converter; the desktop interop workhorse.
- **[bldrs-ai/Share](https://github.com/bldrs-ai/Share)** ⭐177 — Browser-native BIM/CAD collaboration viewer supporting IFC, STEP, STL, OBJ, glTF.
- **[bldrs-ai/conway](https://github.com/bldrs-ai/conway)** ⭐22 — High-performance IFC & STEP engine purpose-built for web CAD apps.
- **[andymai/brepjs](https://github.com/andymai/brepjs)** ⭐60 — Exact B-Rep geometry in the browser via WebAssembly — enables real CAD semantics, not just meshes, on the web.
- **[FriendsOfCADability/CADability](https://github.com/FriendsOfCADability/CADability)** ⭐167 — Pure .NET 3D modeling class library with STEP/STL/DXF interop; an under-rated standalone kernel alternative.

## 🐍 Code-CAD & Scripting

- **[CadQuery/cadquery](https://github.com/CadQuery/cadquery)** ⭐5,425 — Python parametric CAD scripting on OCCT; the most established programmatic CAD framework in production use.
- **[CadQuery/CQ-editor](https://github.com/CadQuery/CQ-editor)** ⭐1,194 — PyQt GUI that turns CadQuery into an interactive REPL-driven CAD tool.
- **[neka-nat/freecad-mcp](https://github.com/neka-nat/freecad-mcp)** ⭐1,258 — Model Context Protocol server for FreeCAD — the bridge that makes FreeCAD agent-controllable.
- **[ghbalf/freecad-ai](https://github.com/ghbalf/freecad-ai)** ⭐360 — AI workbench that generates FreeCAD 3D models from natural language prompts.
- **[codeofaxel/Kiln](https://github.com/codeofaxel/Kiln)** ⭐31 — End-to-end MCP server for 3D printing: agents can design, slice, and drive Bambu/Prusa/Klipper/Marlin printers.

---

## 📊 Ecosystem Signal

The clearest theme this week is the **convergence of three previously separate stacks**: (1) AI/LLM agent protocols (MCP), (2) mature open CAD kernels (OCCT, FreeCAD, CadQuery), and (3) a new generation of WASM-compiled geometry engines (brepjs, occt-wasm, planegcs, cadcore). For the first time, a fully open agent can read a STEP file, reason about B-Rep topology, modify geometry, and stream G-code to a printer — all without proprietary dependencies. A second signal is **language diversification**: while Python remains dominant, meaningful CAD tooling now ships in Rust (cadcore, occt-wasm, earcut, iOverlay), TypeScript (tscircuit, chili3d, CADAM), Clojure (ridley), Swift (swift-CAD), and even D (dlib). This polyglot shift matters because each language unlocks a different ecosystem (browsers, embedded, iOS, JVM, Elixir-style scripting). Finally, the **boundary between CAD, CAM, and CAE is dissolving** in open source — FreeCAD-DFM-Workbench, Road (transportation/geomatics), and BillOfMaterials workbenches are turning FreeCAD into a vertical platform rather than a single app.

---

## ⭐ Worth Watching

- **[YATSKOVSKYI/cadcore](https://github.com/YATSKOVSKYI/cadcore)** ⭐27 — Pure-Rust B-Rep kernel with STEP export and no OCCT dependency. If it ships robust boolean ops and fillets, it could become the first credible post-OCCT open kernel in a decade and reshapes the web, embedded, and WASM CAD landscape.
- **[ghbalf/freecad-ai](https://github.com/ghbalf/freecad-ai)** ⭐360 — Natural-language → FreeCAD model generation. The user-experience implications for mechanical design are as large as text-to-code was for software: if a designer can describe a bracket in English and get a manufacturable model back, the entire drafting workflow changes.
- **[codeofaxel/Kiln](https://github.com/codeofaxel/Kiln)** ⭐31 — A single MCP server that closes the loop from agent → design → slicing → driving Bambu, Prusa, Klipper, OctoPrint, and Marlin printers. It is the most concrete realization of "AI makes the part, agent ships the part" so far, and worth tracking as the integration surface for open manufacturing.