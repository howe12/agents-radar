# CAD/机械结构开源动态日报 2026-09-11

> 数据来源: GitHub Search API (109 仓库) | ArXiv cs.GR+cs.CG (0 篇论文) | RSS 新闻 (3 条) | 生成时间: 2026-09-11 02:29 UTC

---

# CAD/机械结构开源动态日报

**日期：2026 年 9 月 9 日　|　分析师：CAD & 机械设计领域**

---

## 一、今日速览

今日 CAD 开源生态呈现三条主线：**FreeCAD 持续发力垂直领域工作台**（新 Microwave Workbench 上线），**Prusa 在材料端推出 PLA ColorMix 以 5 卷耗材覆盖 45 色**，**AI/Agent 与 CAD 的深度集成进入工具化爆发期**（MCP 服务器、text-to-cad、CAD/CAE Copilot、anvilate 等密集涌现）。与此同时，WebAssembly 正在让 OCCT 等传统 C++ CAD 内核"上浏览器"成为现实，Code-CAD 范式（CadQuery / build123d / dune3d）也在持续巩固其作为脚本化设计主流的地位。

---

## 二、行业脉搏

- **[WIP Wednesday, 9 September 2026 — FreeCAD Blog](https://blog.freecad.org/2026/09/09/wip-wednesday-9-september-2026/)**
  FreeCAD 社区例行 WIP 进展汇总，反映主分支正在快速迭代，是判断 FreeCAD 演进方向的"窗口"。

- **[Spotted: A new Microwave Workbench — FreeCAD Blog](https://blog.freecad.org/2026/09/08/spotted-a-new-microwave-workbench/)** ⭐
  FreeCAD 出现面向射频/微波工程的专用 Workbench，意味着开源 CAD 正在向"行业垂直 Workbench"模式扩张，对结构-电磁协同设计具有积极意义。

- **[Prusament PLA ColorMix: 5 卷打印 45 色 — Prusa Blog](https://blog.prusa3d.com/prusament-pla-colormix-print-45-color-shades-using-just-five-filament-spools-and-more_137835/)**
  Prusa 通过混色算法把 5 卷基础色耗材扩展为 45 种视觉色，降低多色 3D 打印的材料成本和库存压力，对 FDM 工作流与机械原型设计有直接价值。

> 注：Prusa / Bambu / OpenCASCADE / Hackaday 今日未抓到其他新动态。

---

## 三、研究前沿

**今日 cs.GR / cs.CG 暂无新论文入库。** 建议关注近一周内持续更新的几何处理与 B-Rep 相关方向（布尔、网格修复、稳健谓词），今日仓库侧的多项进展（MeshLib、three-mesh-bvh、iOverlay、occt-wasm）实际上正与该学术方向同频。

---

## 四、重点项目（按分类整理）

### 🖥️ CAD 平台与编辑器

- **[FreeCAD/FreeCAD](https://github.com/FreeCAD/FreeCAD)** ⭐ 33,418　C++
  开源参数化 3D 建模标杆；多工作台架构 + OCCT 内核，是结构机械设计领域事实上的社区底座。

- **[pascalorg/editor](https://github.com/pascalorg/editor)** ⭐ 23,255　TypeScript
  开源 3D 建筑编辑器，集成 CLI、MCP 工具与人/Agent 双工作流，体现 CAD 与 AI Agent 在建筑结构上的早期融合。

- **[openscad/openscad](https://github.com/openscad/openscad)** ⭐ 10,186　C++
  "程序员的实体建模器"，纯代码描述几何，适合可参数化、可版本化的机械零件设计。

- **[xiangechen/chili3d](https://github.com/xiangechen/chili3d)** ⭐ 4,821　TypeScript
  完整运行在浏览器内的 3D CAD，标志 Web CAD 已从"查看器"走向"可编辑建模器"。

- **[dune3d/dune3d](https://github.com/dune3d/dune3d)** ⭐ 2,072　C
  新兴 3D CAD 应用，代码体量轻、路线清晰，是值得关注的"非巨头"开源 CAD 新生力量。

- **[LibreCAD/LibreCAD](https://github.com/LibreCAD/LibreCAD)** ⭐ 6,347　C++
  跨平台 2D CAD，DXF/DWG 读写完整，仍是工程图纸层不可替代的开源选项。

### 📐 计算几何与内核

- **[Open-Cascade-SAS/OCCT](https://github.com/Open-Cascade-SAS/OCCT)** ⭐ 2,864　C++
  工业级 B-Rep / BREP 内核，几乎所有 Python/JS 端 Code-CAD 都依赖它，是开源 CAD 的"地基"。

- **[CGAL/cgal](https://github.com/CGAL/cgal)** ⭐ 6,036　C++
  计算几何算法库，覆盖三角化、布尔、偏移等机械设计与仿真所需的底层算法。

- **[MeshInspector/MeshLib](https://github.com/MeshInspector/MeshLib)** ⭐ 820　C++
  3D 网格处理 SDK：快速布尔、修复、简化、重网格、点云三角化、ICP；多语言绑定，适合工程数据前处理。

- **[gkjohnson/three-mesh-bvh](https://github.com/gkjohnson/three-mesh-bvh)** ⭐ 3,484　JavaScript
  three.js 网格 BVH 加速库，为 Web 端大规模网格 CAD/可视化提供基础结构。

- **[locationtech/jts](https://github.com/locationtech/jts)** ⭐ 2,233　Java
  Java 拓扑套件，2D 矢量几何的事实标准，是 CAD 与 GIS 之间的桥梁。

- **[iShape-Rust/iOverlay](https://github.com/iShape-Rust/iOverlay)** ⭐ 208　Rust
  Rust 实现的 2D 多边形布尔运算库，性能与安全性俱佳，适合嵌入现代 CAD 工具链。

- **[mourner/robust-predicates](https://github.com/mourner/robust-predicates)** ⭐ 341　JavaScript
  数值稳健的几何谓词库，是处理"几乎退化"几何时的关键基础设施。

### 🧬 创成式与参数化设计

- **[earthtojake/text-to-cad](https://github.com/earthtojake/text-to-cad)** ⭐ 15,311　Python
  面向 CAD/CAE/CAM 的 Agent Skills 库，体现"文本驱动设计"作为新范式的工程化方向。

- **[armpro24-blip/cad-cae-copilot](https://github.com/armpro24-blip/cad-cae-copilot)** ⭐ 59　Python
  AI 原生 CAD/CAE/CAX 工作台：text-to-CAD、text-to-CAE，基于 build123d/OCCT 输出可编辑几何与稳定拓扑指针。

- **[clay-good/anvilate](https://github.com/clay-good/anvilate)** ⭐ 7　Python
  本地优先的机械设计 Agent：自然语言 → 物理校验过的 STEP/DXF，附带可编辑 Python 源码，直接对接 CATIA/SolidWorks/NX。

- **[fa-mc/vibe-cading](https://github.com/fa-mc/vibe-cading)** ⭐ 6　Python
  基于 CadQuery 的 3D 模型生成器，面向"人与 LLM Agent 共写 Code-CAD"的 Vibe Coding 模式。

- **[BelfrySCAD/BOSL2](https://github.com/BelfrySCAD/BOSL2)** ⭐ 2,359　OpenSCAD
  OpenSCAD 最成熟的功能扩展库，极大降低参数化机械零件的书写成本。

### 🖨️ 3D 打印与制造

- **[MarlinFirmware/Marlin](https://github.com/MarlinFirmware/Marlin)** ⭐ 17,578　C++
  RepRap 阵营的事实标准固件，覆盖 8/32 位 MCU，几乎所有商用 3D 打印机的底层。

- **[OrcaSlicer/OrcaSlicer](https://github.com/OrcaSlicer/OrcaSlicer)** ⭐ 15,660　C++
  主流多品牌切片器（Bambu / Prusa / Voron / Creality …），是 G-code 生成层最具影响力的开源项目。

- **[Ultimaker/Cura](https://github.com/Ultimaker/Cura)** ⭐ 7,033　Python
  老牌切片 GUI 与 Uranium 框架，仍是行业切片工作流的参考实现。

- **[Donkie/Spoolman](https://github.com/Donkie/Spoolman)** ⭐ 2,801　Python
  3D 打印耗材库存管理系统，在 Prusa ColorMix 等多色方案普及背景下，价值进一步上升。

- **[maziggy/bambuddy](https://github.com/maziggy/bambuddy)** ⭐ 2,942　Python
  Bambu Lab 自托管控制中心，单机到打印农场皆可，回应"去云化、本地可控"的明确需求。

- **[sn4k3/UVtools](https://github.com/sn4k3/UVtools)** ⭐ 1,618　C#
  MSLA/DLP 文件分析、校准、修复与转换，对树脂打印工艺迭代不可或缺。

### 🔗 文件格式与互操作

- **[f3d-app/f3d](https://github.com/f3d-app/f3d)** ⭐ 4,687　C++
  快速极简的 3D 查看器，天然适合 STEP/STL 等工程模型的预览与协作评审。

- **[fougue/mayo](https://github.com/fougue/mayo)** ⭐ 2,152　C++
  基于 Qt + OpenCASCADE 的 3D CAD 查看/转换器，是桌面端 STEP 工作流的可靠选择。

- **[partcad/partcad](https://github.com/partcad/partcad)** ⭐ 493　Python
  "可制造物理产品的包管理器"，对应 Digital Thread / TDP 概念，把机械零件当成可版本化的模块。

- **[andymai/occt-wasm](https://github.com/andymai/occt-wasm)** ⭐ 51　Rust
  把工业级 OCCT 编译为 WebAssembly（~4MB brotli），浏览器即可获得完整 B-Rep 能力。

- **[andymai/brepjs](https://github.com/andymai/brepjs)** ⭐ 101　TypeScript
  Web 端精确 B-Rep 几何的 CAD 库，与 occt-wasm 互补，构成"浏览器原生 CAD"的栈底。

- **[lzpel/cadrum](https://github.com/lzpel/cadrum)** ⭐ 58　Rust
  基于静态链接 OCCT 的 Rust CAD crate，可原生或 WASM 运行，探索 Rust 化 CAD 内核的可能。

- **[bldrs-ai/Share](https://github.com/bldrs-ai/Share)** ⭐ 186　JavaScript
  浏览器端 BIM/CAD 协作查看器，支持 IFC/STEP/STL/OBJ/GLTF，是建筑-结构互操作的入口。

### 🐍 Code-CAD 与脚本化

- **[CadQuery/cadquery](https://github.com/CadQuery/cadquery)** ⭐ 5,741　Python
  基于 OCCT 的 Python 参数化 CAD 脚本框架，是 Code-CAD 生态事实标准之一。

- **[CadQuery/CQ-editor](https://github.com/CadQuery/CQ-editor)** ⭐ 1,235　Python
  CadQuery 的 PyQt GUI 编辑器，让脚本化几何拥有可视化调试界面。

- **[gumyr/build123d](https://github.com/gumyr/build123d)** ⭐ 3,079　Python
  新一代 Python CAD 编程库，以更现代的 API 与 build123d 工作流挑战/补充 CadQuery。

- **[NiJingzhe/SimpleCADAPI](https://github.com/NiJingzhe/SimpleCADAPI)** ⭐ 114　Python
  Agent-native 的 CAD SDK：为大模型提供创建、检查、重建可编辑 3D 模型的能力。

- **[codeofaxel/Kiln](https://github.com/codeofaxel/Kiln)** ⭐ 56　Python
  开源 MCP 服务器，把"AI Agent 设计 → 切片 → 打印"打通到 Bambu / Klipper / Marlin 全栈。

- **[pzfreo/draftwright](https://github.com/pzfreo/draftwright)** ⭐ 64　Python
  自动为 build123d / STEP 文件生成工程图，缓解 Code-CAD 出图困难的痛点。

---

## 五、生态趋势信号

今日多源信号高度一致地指向 **"AI Agent 进入 CAD 全流程"**：text-to-cad、AI-Copilot、anvilate、Kiln、freecad-mcp 等项目集中出现，并明确把"可编辑几何 +

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*