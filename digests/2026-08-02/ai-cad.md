# CAD/机械结构开源动态日报 2026-08-02

> 数据来源: GitHub Search API (110 仓库) | ArXiv cs.GR+cs.CG (0 篇论文) | RSS 新闻 (2 条) | 生成时间: 2026-08-02 02:08 UTC

---

# CAD/机械结构开源动态日报

**日期：2026-07-29**

---

## 一、今日速览

FreeCAD 项目进入密集活跃期：Blog 同时发布 WIP Wednesday 与 EMF 2026 电竞速通挑战赛，体现社区在功能迭代与趣味化推广上的双线发力。GitHub 端则呈现明显趋势——**AI × CAD / Code-CAD / 浏览器 CAD** 三大方向正同步加速：`earthtojake/text-to-cad`、`earthtojake/text-to-cad` 以外的多 Agent/MCP 服务器在 FreeCAD、Rhino、build123d 生态全面铺开。OCCT WebAssembly 化（`occt-wasm`、`cadrum`）继续降低浏览器端 B-Rep 引擎门槛，BIM/STEP 的纯前端路径因 `bldrs-ai/conway`、`bldrs-ai/Share` 而走向产品化。OpenSCAD 生态则在 AI Agent（AgentSCAD、Kiln、chiselcad GPU CSG）方向出现明显新分支。

---

## 二、行业脉搏

1. **[WIP Wednesday, 29 July 2026 — FreeCAD Blog](https://blog.freecad.org/2026/07/29/wip-wednesday-29-july-2026/)**
   每周核心开发进度盘点，对 FreeCAD 主分支的 Part Design、Sketcher、Assembly 等模块的实时改动具有风向标意义，是跟进上游变化最直接的信源。

2. **[FreeCAD E‑Sport Speed Run Challenge at EMF camp 2026 — FreeCAD Blog](https://blog.freecad.org/2026/07/27/freecad-e-sport-speed-run-challenge-at-emf-camp-2026/)**
   将 CAD 操作搬到线下电子音乐节舞台做"竞速"，是 FOSS CAD 罕见的社区运营创新，说明项目方开始以"电竞化"吸引非工程背景受众，扩张潜在用户池。

3. **AI 代理对 CAD 的全面渗透（仓库端信号）**
   FreeCAD-MCP（多家并行实现）、Rhino-MCP、CadQuery‑CAE‑Copilot、Kiln（3D 打印 MCP）、Multi‑Agent‑CAD 等项目集体活跃，标志"MCP 协议 + 传统 CAD 内核"已成事实标准栈。

4. **浏览器内 CAD/BIM 引擎成熟度跃升**
   `bldrs-ai/conway`（IFC & STEP 高性能 Web 引擎）与 `andymai/occt-wasm`（约 4MB brotli 的 OCCT WASM）几乎同期活跃，意味着 STEP 解析与 B-Rep 计算可在浏览器以工业级精度完成。

5. **OpenSCAD GPU 化与 AI 化双轨并行**
   `particlesector/chiselcad`（Vulkan + Manifold CSG）与 `Kevoyuan/AgentSCAD`（自然语言→OpenSCAD）代表两条新路径：性能侧用 GPU 重写 CSG，交互侧用 LLM 生成脚本。

---

## 三、研究前沿

> ⚠️ **今日无新增 cs.GR / cs.CG 相关论文。**
> 仓库动态中体现的研究热点替代了学术侧的输出：构建几何内核的 WASM 化（WASM B-Rep）、基于 LLM 的多 Agent 文本到 CAD（`Pan-Chera/Multi-Agent-CAD`）、以及约束测试时计算（constrained test-time compute）等方向，主要以开源项目形式率先落地，论文侧尚有跟进空间。建议关注 ICCP / SIGGRAPH / SPM 等会议 2026 年下半年动态。

---

## 四、重点项目

### 🖥️ CAD 平台与编辑器

- **[FreeCAD/FreeCAD](https://github.com/FreeCAD/FreeCAD)** ⭐32,541 — 开源参数化 3D 建模标杆，覆盖 Part Design、Sketcher、Assembly、FEM、Path 等多工作台，是机械设计开源生态的中枢。

- **[openscad/openscad](https://github.com/openscad/openscad)** ⭐9,861 — 程序化实体建模语言的事实标准，对科研、可重复构件、参数化教学场景不可替代。

- **[LibreCAD/LibreCAD](https://github.com/LibreCAD/LibreCAD)** ⭐6,185 — 跨平台 2D CAD，DXF/DWG 读写完整，是机械制图替代 AutoCAD LT 的首选 FOSS。

- **[xiangechen/chili3d](https://github.com/xiangechen/chili3d)** ⭐4,711 — 浏览器端 3D CAD 应用，定位 Web 原生建模，与 chili3d.io 商业化联动。

- **[solvespace/solvespace](https://github.com/solvespace/solvespace)** ⭐4,074 — 2D/3D 参数化求解器，轻量、约束求解稳健，适合做嵌入式 CAD 与教学。

- **[dune3d/dune3d](https://github.com/dune3d/dune3d)** ⭐2,031 — 新兴 3D CAD 应用，采用多视图约束建模，UI/UX 现代，是 OpenSCAD 与 FreeCAD 之间的中间形态。

- **[trailcode/EzyCad](https://github.com/trailcode/EzyCad)** ⭐14 — OCCT + ImGui + OpenGL 构建的极简 CAD，演示了"无 Qt 现代栈"如何快速复用 OCCT 几何内核。

### 📐 计算几何与内核

- **[Open-Cascade-SAS/OCCT](https://github.com/Open-Cascade-SAS/OCCT)** ⭐2,704 — 全球 FOSS CAD 的 B-Rep 几何内核底座，FreeCAD、CadQuery、Mayo、EzyCad 均构建其上。

- **[CGAL/cgal](https://github.com/CGAL/cgal)** ⭐5,993 — 计算几何算法库（Delaunay、布尔运算、网格生成等），CAD/机器人/地理通用几何底座。

- **[pyvista/pyvista](https://github.com/pyvista/pyvista)** ⭐3,757 — VTK 的 Python 封装，用于科学/工程 3D 可视化与网格分析，对 CAE 后处理友好。

- **[mikedh/trimesh](https://github.com/mikedh/trimesh)** ⭐3,638 — Python 三角网格库，轻量、API 友好，是 STL/OBJ 流水线的事实标准。

- **[MeshInspector/MeshLib](https://github.com/MeshInspector/MeshLib)** ⭐800 — 工业级网格处理库（修复、BVH、布尔），与 CAD/3D 打印/CFD 衔接紧密。

- **[cnr-isti-vclab/meshlab](https://github.com/cnr-isti-vclab/meshlab)** ⭐5,772 — 网格处理老牌系统，适合点云/网格清洗与可视化。

- **[JuliaGeometry/Meshes.jl](https://github.com/JuliaGeometry/Meshes.jl)** ⭐458 — Julia 生态的计算几何库，对科研流水线友好。

### 🧬 创成式与参数化设计

- **[earthtojake/text-to-cad](https://github.com/earthtojake/text-to-cad)** ⭐12,394 — 面向 CAD/CAE/CAM 的 Agent Skill 库，自然语言→机械设计流水线的代表性项目，star 量级遥遥领先。

- **[armpro24-blip/cad-cae-copilot](https://github.com/armpro24-blip/cad-cae-copilot)** ⭐43 — AI 原生 CAD/CAE 工作台，底层 build123d + OCCT，输出参数可编辑、带稳定拓扑指针，文本到几何链路完整。

- **[Pan-Chera/Multi-Agent-CAD](https://github.com/Pan-Chera/Multi-Agent-CAD)** ⭐4 — 解耦的多 Agent 框架，提出 constrained test-time compute 用于文本到 CAD 生成，是当前学术味道最浓的创成式项目。

- **[clay-good/anvilate](https://github.com/clay-good/anvilate)** ⭐4 — 本地优先的机械设计 Agent：自然语言→物理校验后的参数化 STEP/DXF，可直接导入商业 CAD。

- **[Kevoyuan/AgentSCAD](https://github.com/Kevoyuan/AgentSCAD)** ⭐5 — 自然语言→可校验的 OpenSCAD 工件，带几何修复与制造性校验，专攻 OpenSCAD 生态。

### 🖨️ 3D 打印与制造

- **[MarlinFirmware/Marlin](https://github.com/MarlinFirmware/Marlin)** ⭐17,515 — 全球装机量最大的 3D 打印机固件，覆盖 8/32 位 MCU 平台。

- **[OrcaSlicer/OrcaSlicer](https://github.com/OrcaSlicer/OrcaSlicer)** ⭐15,296 — 当前活跃度最高的开源切片软件，支持 Bambu、Prusa、Voron、Creality 等主流机型。

- **[Ultimaker/Cura](https://github.com/Ultimaker/Cura)** ⭐7,004 — 老牌切片 GUI，基于 Uranium 框架，插件生态成熟。

- **[maziggy/bambuddy](https://github.com/maziggy/bambuddy)** ⭐2,721 — 自托管 Bambu Lab 打印农场管理平台，绕开云依赖。

- **[Slicer/Slicer](https://github.com/Slicer/Slicer)** ⭐2,557 — 医学影像/科学可视化的多平台平台，对 CT→3D 模型流程重要。

- **[codeofaxel/Kiln](https://github.com/codeofaxel/Kiln)** ⭐41 — 3D 打印 MCP 服务器，AI Agent 可设计→切片→打印覆盖 Bambu、Prusa、Klipper/Moonraker、OctoPrint、Marlin 全链路。

- **[particlesector/chiselcad](https://github.com/particlesector/chiselcad)** ⭐13 — Vulkan+Manifold 的 GPU 加速 OpenSCAD 兼容 CSG 建模器，OpenSCAD 生态的性能革新。

### 🔗 文件格式与互操作

- **[f3d-app/f3d](https://github.com/f3d-app/f3d)** ⭐4,587 — 极简快速 3D 查看器，支持 STEP、STL、OBJ、GLTF 等，是 CLI/CI 流水线预览的事实选择。

- **[fougue/mayo](https://github.com/fougue/mayo)** ⭐2,113 — Qt+OCCT 的 3D CAD 查看器与转换器，工业级 STEP/IGES 互操作体验。

- **[usnistgov/STP2X3D](https://github.com/usnistgov/STP2X3D)** ⭐100 — NIST 出品的 STEP→X3D 转换器，权威格式桥梁。

- **[bldrs-ai/Share](https://github.com/bldrs-ai/Share)** ⭐181 — 浏览器 BIM/CAD 协同查看器，IFC/STEP/STL/GLTF 一站式。

- **[bldrs-ai/conway](https://github.com/bldrs-ai/conway)** ⭐22 — 面向 Web CAD 的高性能 IFC & STEP 引擎，与 Share 配套。

- **[andymai/occt-wasm](https://github.com/andymai/occt-wasm)** ⭐35 — Rust 编译的 OCCT WASM（~4MB brotli），配合 TS API 是浏览器 B-Rep 计算的关键拼图。

- **[andymai/brepjs](https://github.com/andymai/brepjs)** ⭐73 — 浏览器端精确 B-Rep 几何 Web 库，基于 occt-wasm。

### 🐍 Code-CAD 与脚本化

- **[CadQuery/cadquery](https://github.com/CadQuery/cadquery)** ⭐5,542 — 基于 OCCT 的 Python 参数化 CAD 脚本框架，机械设计流水线的事实标准。

- **[partcad/partcad](https://github.com/partcad/partcad)** ⭐481 — 面向可制造物理产品的包管理器（Digital Thread / TDP 概念），与 AI 协同，致力于硬件设计的模块化复用。

- **[lzpel/cadrum](https://github.com/lzpel/cadrum)** ⭐52 — Rust 编写的 CAD Crate，静态链接无头 OCCT，原生 + WASM 双运行。

- **[neka-nat/freecad-mcp](https://github.com/neka-nat/freecad-mcp)** ⭐1,569 — FreeCAD 的 MCP 服务器，AI Agent 操作 FreeCAD 的最早成熟实现。

- **[ghbalf/freecad-ai](https://github.com/ghbalf/freecad-ai)** ⭐407 — FreeCAD 的 AI 助手工作台，自然语言→3D 模型。

- **[pzfreo/draftwright](https://github.com/pzfreo/draftwright)** ⭐14 — 自动为 build123d / STEP 文件生成技术工程图，弥补 Code-CAD 在 2D 出图方向的短板。

---

## 五、生态趋势信号

**三大主线正在合流：AI Agent、MCP 协议与浏览器 CAD 内核。** 今日仓库动态最显著的信号是**"

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*