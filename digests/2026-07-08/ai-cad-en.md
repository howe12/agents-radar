# CAD & Mechanical Design Open Source Digest 2026-07-08

> Sources: GitHub Search API (105 repos) | ArXiv cs.GR+cs.CG (22 papers) | RSS News (5 items) | Generated: 2026-07-08 06:22 UTC

---

# CAD & Mechanical Design Open Source Digest
*July 2026 Edition*

---

## Today's Highlights

This week showcases a striking convergence of AI-driven design tools, kernel innovation, and community momentum in open-source CAD. The **ArtisanCAD paper** signals the arrival of industrial-grade AI agents capable of long-horizon procedural modeling — a thesis being actively realized in the wild by projects like **Kiln** and **CADAM**. Meanwhile, **FreeCAD's 2026 competition results and Q2 grants** demonstrate the project's maturing ecosystem, even as the **Pure-Rust CAD kernel "cadcore"** and the **WebAssembly OCCT port** point to a future where CAD kernels are no longer tied to C++ desktops. Prusa's **INDX Founder's Edition** is shipping, and the maker community continues to flex in humanitarian contexts (Bambu/Venezuela).

---

## Industry Pulse

- **[FreeCAD Community Design Competition 2026: The Results!](https://blog.freecad.org/2026/07/06/freecad-community-design-competition-2026-the-results/)** — The flagship showcase for open-source parametric design is back with winners, demonstrating the breadth of what the FreeCAD community can build across workbenches.
- **[Q2 2026 grants announced](https://blog.freecad.org/2026/07/04/q2-2026-grants-announced/)** — Sustained funding for FreeCAD contributors signals long-term project health and continued investment in core kernel and UI work.
- **[State of INDX – July 2026 Update: Founder's Edition Shipping + What's Next](https://blog.prusa3d.com/indx_july_2026_update_137377/)** — Prusa's INDX tool-changing platform is moving from beta to shipped hardware — a meaningful milestone for the open hardware ecosystem.
- **[When Venezuela needed help, the makers moved first](https://blog.bambulab.com/when-venezuela-needed-help-the-makers-moved-first/)** — A reminder that 3D printing is increasingly a humanitarian logistics tool, with Bambu Lab printers showing up where traditional supply chains fail.
- **[WIP Wednesday, 1 July 2026](https://blog.freecad.org/2026/07/01/wip-wednesday-1-july-2026/)** — Recurring development log surfacing active FreeCAD branches; the heartbeat of the project's contributors.

---

## Research Frontier

- **[ArtisanCAD: An Industrial-Level CAD Agent with Expert-Grounded Knowledge Distillation](http://arxiv.org/abs/2607.05750v1)** — Targets long-horizon procedural CAD modeling with robust feature dependencies; the most directly relevant paper this week for anyone building AI-driven CAD tools. *Why it matters:* bridges the gap between toy text-to-CAD demos and the "feature trees with 200 operations" reality of industrial parts.
- **[A Decomposition-Based Framework for Joint Optimization and Spatial Packaging of Interconnected Systems with Physical Interactions](http://arxiv.org/abs/2607.06087v1)** — Combines topology/layout optimization with system-level spatial packaging constraints. *Why it matters:* addresses the hard industrial problem of fitting multi-body mechatronic assemblies into tight envelopes while respecting physical coupling.
- **[Generalized altitudes and their bounds](http://arxiv.org/abs/2607.06187v1)** — Extends vertex-to-opposite-face altitudes of a simplex to arbitrary point pairs, with explicit bounds. *Why it matters:* foundational for mesh quality, finite element preconditioning, and CAD constraint solvers that reason about simplex-shaped elements.
- **[Shifting is Optimal under Gap-ETH: A Lower Bound Framework for Geometric Approximation Schemes](http://arxiv.org/abs/2607.06069v1)** — Proves a conditional lower bound matching the running time of the classical shifting technique for PTASes. *Why it matters:* clarifies the theoretical ceiling for approximation algorithms in mesh partitioning, covering, and geometric packing problems common in CAD layout.
- **[Lower Bounds for Approximating the Vietoris-Rips Filtration](http://arxiv.org/abs/2607.06524v1)** — Hardness results for Vietoris-Rips persistent homology, a core tool in topological data analysis. *Why it matters:* relevant to shape-matching, reverse engineering, and design retrieval pipelines increasingly being explored in CAD research.

---

## Key Projects

### 🖥️ CAD Platforms & Editors

- **[FreeCAD/FreeCAD](https://github.com/FreeCAD/FreeCAD)** ⭐31,977 — The flagship open-source parametric modeler; the gravitational center of the entire ecosystem and now backed by grant-funded development.
- **[openscad/openscad](https://github.com/openscad/openscad)** ⭐9,718 — The programmers' solid 3D CAD modeler; the lingua franca for code-CAD and 3D-printable parametric parts.
- **[gumyr/build123d](https://github.com/gumyr/build123d)** ⭐2,594 — A Python CAD library using the Algebraic-Platonic paradigm; the most ergonomic modern code-CAD alternative to OpenSCAD.
- **[CadQuery/cadquery](https://github.com/CadQuery/cadquery)** ⭐5,425 — Python parametric CAD scripting on top of OCCT; the de-facto standard for programmatic STEP-generating pipelines.
- **[solvespace/solvespace](https://github.com/solvespace/solvespace)** ⭐4,041 — Lean 2D/3D parametric constraint solver; the proof that a small team can ship a useful CAD kernel.
- **[xiangechen/chili3d](https://github.com/xiangechen/chili3d)** ⭐4,660 — Browser-based 3D CAD; signals the move of CAD authoring into the browser.

### 📐 Computational Geometry & Kernels

- **[Open-Cascade-SAS/OCCT](https://github.com/Open-Cascade-SAS/OCCT)** ⭐2,625 — The open-source B-Rep kernel that powers FreeCAD, CadQuery, and much of the world's open STEP handling.
- **[CGAL/cgal](https://github.com/CGAL/cgal)** ⭐5,971 — The gold-standard C++ library for computational geometry; mesh generation, arrangements, convex hulls.
- **[pyvista/pyvista](https://github.com/pyvista/pyvista)** ⭐3,734 — Python 3D visualization and mesh analysis built on VTK; the glue between CAD kernels and scientific visualization.
- **[mikedh/trimesh](https://github.com/mikedh/trimesh)** ⭐3,613 — Fast, dependency-light Python triangular mesh library; the workhorse for STL/OBJ pipelines.
- **[gkjohnson/three-mesh-bvh](https://github.com/gkjohnson/three-mesh-bvh)** ⭐3,411 — BVH-accelerated spatial queries for three.js meshes; underlies modern interactive web CAD viewers.
- **[YATSKOVSKYI/cadcore](https://github.com/YATSKOVSKYI/cadcore)** ⭐27 — Pure-Rust B-Rep kernel with STEP AP203 export; no OCCT, no C++ — a credible path to a modern, embeddable kernel.
- **[andymai/occt-wasm](https://github.com/andymai/occt-wasm)** ⭐21 — OCCT compiled to WebAssembly with a clean TypeScript API; makes serious B-Rep geometry available in the browser.

### 🧬 Generative & Parametric Design

- **[earthtojake/text-to-cad](https://github.com/earthtojake/text-to-cad)** ⭐7,802 — A collection of agent skills for CAD, robotics, and hardware design; the most-starred generative-design resource in the digest.
- **[tonykoop/makerbench-hwe](https://github.com/tonykoop/makerbench-hwe)** ⭐0 — Math-graded, not LLM-judged: an agentic benchmark for spatial reasoning, DFM, and 3D-maker capability. *Worth bookmarking.*
- **[metaember/loupe](https://github.com/metaember/loupe)** ⭐0 — A code-CAD review pipeline: render it, prove it, slice it. Codifies the missing CI step for parametric model repositories.

### 🖨️ 3D Printing & Manufacturing

- **[MarlinFirmware/Marlin](https://github.com/MarlinFirmware/Marlin)** ⭐17,471 — The dominant open-source 3D-printer firmware; the bedrock of the RepRap ecosystem.
- **[OrcaSlicer/OrcaSlicer](https://github.com/OrcaSlicer/OrcaSlicer)** ⭐15,039 — Community-led G-code generator supporting Bambu, Prusa, Voron, VzBot, RatRig, and Creality.
- **[Ultimaker/Cura](https://github.com/Ultimaker/Cura)** ⭐6,988 — The veteran slicer with the deepest plugin ecosystem, built on the Uranium framework.
- **[codeofaxel/Kiln](https://github.com/codeofaxel/Kiln)** ⭐31 — The open-source MCP server for 3D printing: AI agents that design, slice, and print on Bambu, Prusa, Creality, Klipper, and Marlin printers. *Worth watching.*

### 🔗 File Formats & Interop

- **[f3d-app/f3d](https://github.com/f3d-app/f3d)** ⭐4,527 — Fast, minimalist 3D viewer with broad format support; the first thing to reach for when you have a mystery STEP/3MF file.
- **[fougue/mayo](https://github.com/fougue/mayo)** ⭐2,092 — Qt + OCCT-based CAD viewer/converter; the practical desktop STEP inspection tool.
- **[bldrs-ai/conway](https://github.com/bldrs-ai/conway)** ⭐22 — High-performance IFC/STEP engine for web-based CAD applications; the format-interop story for browsers.
- **[bldrs-ai/Share](https://github.com/bldrs-ai/Share)** ⭐177 — Browser-based BIM/CAD viewer supporting IFC, STEP, STL, OBJ, and glTF — open collaboration around STEP and IFC files in the browser.

### 🐍 Code-CAD & Scripting

- **[neka-nat/freecad-mcp](https://github.com/neka-nat/freecad-mcp)** ⭐1,260 — A Model Context Protocol server for FreeCAD; the bridge that lets Claude, Cursor, and other agents drive FreeCAD directly.
- **[ghbalf/freecad-ai](https://github.com/ghbalf/freecad-ai)** ⭐360 — AI assistant workbench for FreeCAD that generates 3D models from natural language; complementary to MCP.
- **[Adam-CAD/CADAM](https://github.com/Adam-CAD/CADAM)** ⭐4,741 — The most-starred open-source text-to-CAD web application; a direct implementation of the ArtisanCAD thesis.
- **[andymai/brepjs](https://github.com/andymai/brepjs)** ⭐60 — Web CAD library with exact B-Rep geometry; TypeScript-native shape modeling for the browser.
- **[1amageek/swift-CAD](https://github.com/1amageek/swift-CAD)** ⭐9 — Native Swift CAD foundation with parametric IR and B-Rep evaluation, plus WebAssembly export; widens the code-CAD language palette.
- **[BelfrySCAD/BelfrySCAD](https://github.com/BelfrySCAD/BelfrySCAD)** ⭐2 — Hybrid OpenSCAD + WYSIWYG procedural CAD system; an attempt to give OpenSCAD live visual editing.
- **[vipenzo/ridley](https://github.com/vipenzo/ridley)** ⭐35 — Clojure-based turtle-graphics 3D modeler with real-time preview and WebXR; a creative-code take on code-CAD.

---

## Ecosystem Signal

Three reinforcing currents are reshaping open-source CAD this quarter. **First, the kernel is unbundling**: pure-Rust (`cadcore`) and WebAssembly OCCT (`occt-wasm`) ports suggest the days of "you must use C++ on a desktop to do real B-Rep" are numbered. **Second, AI agents are graduating from demos to protocols**: MCP servers for FreeCAD, MCP servers for Rhino, and the ArtisanCAD paper all point to a standardized interface layer between LLMs and CAD kernels — the same role MCP plays for code. **Third, the boundary between code-CAD and slicer is dissolving**: Kiln's "design → slice → print in one agent loop" and Loupe's "render → prove → slice → review" CI pipeline both treat the print outcome as a first-class build artifact. The Prusa INDX shipping and Bambu Venezuela story confirm that the open hardware side is healthy enough to absorb this software-side ambition.

---

## Worth Watching

1. **[ArtisanCAD](http://arxiv.org/abs/2607.05750v1) + the [FreeCAD-MCP](https://github.com/neka-nat/freecad-mcp) + [Kiln](https://github.com/codeofaxel/Kiln) cluster** — The most consequential pattern of the quarter: an industrial-grade CAD agent paper landing in the same week as production MCP servers and end-to-end AI-to-print pipelines. If even one of these matures, the workflow of "describe a part → receive a manufactured part" becomes a one-prompt reality for hobbyists within 12 months.

2. **[cadcore (Pure-Rust CAD kernel)](https://github.com/YATSKOVSKYI/cadcore) + [occt-wasm](https://github.com/andymai/occt-wasm)** — A credible two-front push to free CAD kernels from the C++ desktop monopoly. Together they enable embedded, mobile, and browser-native parametric modeling with real STEP output — a structural shift, not a feature release.

3. **[tonykoop/makerbench-hwe](https://github.com/tonykoop/makerbench-hwe)** — Math-graded, *not* LLM-judged: an agentic benchmark for spatial reasoning and design-for-manufacturing. The lack of a serious DFM benchmark has been the single biggest gap holding back serious evaluation of AI design tools. This may be the "SWE-bench moment" for physical-world AI.