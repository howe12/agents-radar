# CAD & Mechanical Design Open Source Digest 2026-07-07

> Sources: GitHub Search API (CAD, FreeCAD, 3D-printing, generative-design topics) | 96 repos | Generated: 2026-07-07 10:14 UTC

---

# CAD & Mechanical Design Open Source Digest

## Today's Highlights

The FreeCAD ecosystem continues to dominate recent open-source CAD activity, with AI integration taking center stage. **freecad-mcp** (1,253 stars) and **freecad-ai** (359 stars) represent a growing trend of LLM-powered CAD workflows, enabling natural language to 3D model generation. The emergence of **CAD/CAE Copilot** and **text-to-cad** agents signals a paradigm shift toward agent-driven design. Meanwhile, the **bldrs-ai** team continues advancing browser-based CAD with high-performance STEP/IFC engines, and the **cadcore** Rust project proves there's growing interest in pure-Rust geometry kernels outside the OpenCASCADE ecosystem.

---

## Key Projects

### 🖥️ CAD Platforms & Editors

**[FreeCAD/FreeCAD](https://github.com/FreeCAD/FreeCAD)** ⭐31,960
The premier open-source parametric 3D modeler; continues to see active development with its ribbon UI workbench and growing macro ecosystem. Essential for any mechanical design workflow.

**[openscad/openscad](https://github.com/openscad/openscad)** ⭐9,703
The programmers' solid 3D CAD modeler; remains the gold standard for scripted parametric design with a thriving ecosystem of generators and LSP tooling.

**[Adam-CAD/CADAM](https://github.com/Adam-CAD/CADAM)** ⭐4,733
Open-source text-to-CAD web application built on OpenSCAD; makes parametric design accessible through natural language in the browser.

**[jupytercad/JupyterCAD](https://github.com/jupytercad/JupyterCAD)** ⭐229
Collaborative 3D geometry modeling as a JupyterLab extension; bridges the gap between computational notebooks and mechanical CAD for scientific workflows.

**[Salusoft89/planegcs](https://github.com/Salusoft89/planegcs)** ⭐90
WebAssembly wrapper for FreeCAD's 2D geometric constraint solver; enables browser-based sketch solving without native dependencies.

### 📐 Computational Geometry & Kernels

**[CGAL/cgal](https://github.com/CGAL/cgal)** ⭐5,969
The Computational Geometry Algorithms Library; industry-standard for robust geometric algorithms in C++ with applications from mesh generation to Boolean operations.

**[andymai/brepjs](https://github.com/andymai/brepjs)** ⭐60
Exact B-Rep geometry library for the web; brings boundary representation modeling to TypeScript with precision suitable for engineering.

**[YATSKOVSKYI/cadcore](https://github.com/YATSKOVSKYI/cadcore)** ⭐27
Pure-Rust CAD geometry kernel with B-Rep topology and STEP export; demonstrates the feasibility of a non-OCCT, memory-safe geometry kernel for modern systems.

**[andymai/occt-wasm](https://github.com/andymai/occt-wasm)** ⭐21
OpenCASCADE compiled to WebAssembly with a clean TypeScript API; enables serverless CAD operations in the browser at only ~4MB compressed.

### 🧬 Generative & Parametric Design

**[kellerlabs/homeracker](https://github.com/kellerlabs/homeracker)** ⭐456
Fully modular 3D-printable rack-building system; exemplary OpenSCAD-based parametric design that adapts to any component dimensions—perfect for mechanical designers building custom enclosures.

**[armpro24-blip/cad-cae-copilot](https://github.com/armpro24-blip/cad-cae-copilot)** ⭐36
AI-native CAD/CAE/CAX workbench with text-to-CAD and text-to-CAE via build123d/OpenCASCADE; represents the frontier of agent-driven parametric design with stable topology pointers.

**[Architecture-and-Design/ghbalf-freecad-ai](https://github.com/ghbalf/freecad-ai)** ⭐359
AI-powered assistant workbench for FreeCAD generating 3D models from natural language; critical for lowering the barrier to parametric model creation.

### 🖨️ 3D Printing & Manufacturing

**[Sienci-Labs/gsender](https://github.com/Sienci-Labs/gsender)** ⭐355
Cross-platform CNC controller for grbl/grblHAL with intuitive interface; essential for anyone running desktop CNC mills or laser cutters.

**[little-did-I-know/Gcode](https://github.com/little-did-I-know/Gcode)** ⭐63
3D printer G-code visualizer, modifier, and analysis tool; enables inspection and optimization of toolpaths before printing.

**[ryankembrey/FreeCAD-DFM-Workbench](https://github.com/ryankembrey/FreeCAD-DFM-Workbench)** ⭐35
Design for Manufacturing workbench for FreeCAD; bridges design and production by analyzing manufacturability constraints directly in the CAD environment.

### 🔗 File Formats & Interop

**[f3d-app/f3d](https://github.com/f3d-app/f3d)** ⭐4,523
Fast and minimalist 3D viewer supporting STEP, IGES, and dozens of other formats; the Swiss Army knife for quick geometry inspection across any CAD pipeline.

**[fougue/mayo](https://github.com/fougue/mayo)** ⭐2,092
Qt + OpenCascade-based 3D CAD viewer and converter; indispensable for STEP-to-STL, IGES-to-STEP conversion with visualization.

**[bldrs-ai/Share](https://github.com/bldrs-ai/Share)** ⭐177
Browser-based BIM & CAD viewer supporting IFC, STEP, STL, OBJ, and GLTF; enables frictionless model sharing without software installation.

**[bldrs-ai/conway](https://github.com/bldrs-ai/conway)** ⭐22
High-performance IFC & STEP engine for web applications; critical infrastructure for browser-based CAD interoperability.

### 🐍 Code-CAD & Scripting

**[CadQuery/cadquery](https://github.com/CadQuery/cadquery)** ⭐5,423
Python parametric CAD scripting framework based on OCCT; the de-facto standard for programmatic 3D modeling in the Python ecosystem.

**[earthtojake/text-to-cad](https://github.com/earthtojake/text-to-cad)** ⭐7,760
Collection of agent skills for CAD, robotics, and hardware design; demonstrates how LLM agents can orchestrate CadQuery and OpenSCAD for automated design generation.

**[codeofaxel/Kiln](https://github.com/codeofaxel/Kiln)** ⭐31
Open-source MCP server for 3D printing—AI agents design, slice, and print; builds on the code-CAD paradigm by connecting natural language to physical production.

**[metaember/loupe](https://github.com/metaember/loupe)** ⭐0
Code-CAD review pipeline for 3D printing (render, prove, preview, slice); addresses the debugging and validation gap in scripted CAD workflows.

---

## Ecosystem Signal

Three macro-trends define the current open-source CAD landscape:

**AI-Native CAD is accelerating.** Projects like freecad-mcp, freecad-ai, cad-cae-copilot, and Kiln all leverage LLMs to translate natural language into parametric models. The MCP (Model Context Protocol) server pattern is becoming the standard interface—agents talk to CAD tools the same way they talk to IDEs and databases. This suggests 2025 will see widespread adoption of AI copilots in mechanical design workflows.

**Browser-first geometry engines are maturing.** brepjs (exact B-Rep for the web), occt-wasm (OCCT compiled to ~4MB), and Conway (high-performance STEP/IFC engine) collectively enable professional-grade 3D modeling directly in web browsers. The availability of Planegcs (FreeCAD's constraint solver in WebAssembly) and JupyterCAD (collaborative notebooks) points toward a future where cloud CAD rivals desktop CAD.

**Rust enters the geometry kernel space.** cadcore (pure-Rust B-Rep kernel with STEP export) and iOverlay (Rust polygon Boolean operations) demonstrate growing interest in memory-safe geometry computing. While OCCT remains dominant, the Rust ecosystem offers compile-time safety and WASM readiness that appeal to modern web and embedded CAD applications.

---

## Worth Watching

**bldrs-ai/conway** — A high-performance IFC & STEP engine designed for the browser. As BIM and AEC workflows increasingly move to the web, Conway's ability to parse and serve large 3D models efficiently will be critical infrastructure. Its TypeScript-first design makes it immediately usable in modern web applications.

**andymai/brepjs** — Exact B-Rep geometry in pure TypeScript. For mechanical designers who want to build CAD tools without C++ dependencies, brepjs provides the mathematical foundation (NURBS surfaces, topological relationships) needed for professional modeling. Paired with occt-wasm, it opens the door to full-featured browser CAD.

**YATSKOVSKYI/cadcore** — Pure-Rust CAD geometry kernel. While early-stage, cadcore's approach to B-Rep topology with O(N) filament sweep algorithms and STEP AP203 export demonstrates that a non-OCCT, memory-safe kernel is viable. If it gains momentum, it could become the geometry backend for next-generation Rust-based CAD tools and embedded systems.