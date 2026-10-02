# CAD/机械结构开源动态日报 2026-10-02

> 数据来源: GitHub Search API (100 仓库) | ArXiv cs.GR+cs.CG (0 篇论文) | RSS 新闻 (2 条) | 生成时间: 2026-10-02 03:34 UTC

---

# 📅 CAD/机械结构开源动态日报

**日期：2026 年 9 月 30 日 · 星期三**

---

## 一、今日速览

今日 FreeCAD 1.1.4 正式发布，叠加 WIP Wednesday 持续推进的开发进度，标志着开源参数化 CAD 主线进入稳定迭代节奏；GitHub 端，AI Agent 与 CAD 的"双向奔赴"成为最强信号——blwfish/freecad-mcp、DMontgomery40/mcp-3D-printer-server、codeofaxel/Kiln、PhySpace/SimpleCADAPI 等一批面向 LLM 的 MCP/Agent-native 工具集中活跃；同时 Rust+WASM 路线的浏览器端 CAD 内核（cadrum、occt-wasm、brepjs、OpenCADStudio）正在补齐"本地、可移植、可被代理调用"的最后一公里。

---

## 二、行业脉搏

| # | 动态 | 来源 | 意义 |
|---|------|------|------|
| 1 | **FreeCAD 1.1.4 正式发布** | [FreeCAD Blog](https://blog.freecad.org/2026/09/28/freecad-1-1-4-released/) | 主线版本更新，参数化建模、装配、TechDraw 等核心工作台持续打磨，为下游生态（MCP、AI 插件）提供稳定底座 |
| 2 | **WIP Wednesday #2026-09-30** | [FreeCAD Blog](https://blog.freecad.org/2026/09/30/wip-wednesday-30-september-2026/) | 集中披露进行中的 PR 与新特性，可作为观察 FreeCAD 路线图与社区协同节奏的窗口 |

> 今日 ArXiv cs.GR / cs.CG 暂无新论文，研究前沿章节将聚焦仓库层面所呈现的前沿探索。

---

## 三、研究前沿

> 📭 今日 ArXiv cs.GR / cs.CG 方向无新增论文。改以"仓库侧的前沿工程探索"代为呈现：

- **PhySpace/SimpleCADAPI**（⭐136）—— 面向大语言模型的 **Agent-native CAD SDK**，让 LLM 能创建、检视、重建可编辑的复杂三维模型。
- **andymai/occt-wasm**（⭐58）—— 将 OpenCASCADE 编译为 WebAssembly，提供 ~4MB brotli、TypeScript API、竞技场内存、Web Worker 支持；为"零安装"的浏览器 CAD 提供工业级 B-Rep 内核。
- **andymai/brepjs**（⭐113）—— Web 端精确 **B-Rep 几何**库，与 OCCT-WASM 互补，使前端 CAD 不必再依赖多边形近似。
- **bldrs-ai/conway**（⭐23）—— 高性能 Web 端 **IFC / STEP 引擎**，BIM 与机械 CAD 数据互操作的关键拼图。
- **modelscript/modelscript**（⭐14）—— 多域增量编译器，原生支持 **Modelica / SysML v2 / STEP**，将仿真、CAD、CAE 串成"基于模型的系统工程（MBSE）"流水线。

---

## 四、重点项目

### 🖥️ CAD 平台与编辑器

| 仓库 | ⭐ | 一句话说明 |
|------|---|-----------|
| [FreeCAD/FreeCAD](https://github.com/FreeCAD/FreeCAD) | 33,888 | 开源多平台参数化三维建模器，事实上的"Linux 版 SolidWorks"，是整个 AI/MCP 生态的底座 |
| [openscad/openscad](https://github.com/openscad/openscad) | 10,340 | 程序员专属的实体 3D CAD 建模器，代码即模型，是参数化与可复现设计的经典范式 |
| [pascalorg/editor](https://github.com/pascalorg/editor) | 24,518 | 开源 3D 建筑编辑器，原生 CLI + MCP 工具，面向"AI Agent + 建筑师"协同工作流 |
| [earthtojake/text-to-cad](https://github.com/earthtojake/text-to-cad) | 16,535 | "给 Agent 装上 CAD 超能力"的代表性项目，推动文本到几何的范式落地 |
| [LibreCAD/LibreCAD](https://github.com/LibreCAD/LibreCAD) | 6,437 | 跨平台 2D CAD，DXF/DWG 读写一应俱全，是机械出图工具链的常青树 |
| [solvespace/solvespace](https://github.com/solvespace/solvespace) | 4,178 | 紧凑型 2D/3D 参数化 CAD，约束求解器可直接为 Web/嵌入式场景复用 |
| [huxingyi/dust3d](https://github.com/huxingyi/dust3d) | 3,562 | 跨平台低多边形建模工具，面向游戏与 3D 打印，节点式建模降低创作门槛 |
| [HakanSeven12/OpenCADStudio](https://github.com/HakanSeven12/OpenCADStudio) | 2,392 | Rust 编写的 2D/3D CAD，支持 DWG/DXF 与 GPU 加速渲染，是 Rust-CAD 阵营代表 |
| [Virtastic/freecad-web](https://github.com/Virtastic/freecad-web) | 38 | 真正把 FreeCAD 编译进浏览器（wasm64 + JSPI），"零安装"里程碑 |
| [jackControls/noBS-CAD](https://github.com/jackControls/noBS-CAD) | 14 | Local-first、面向机械工程师的极简开源 CAD，呼应"数据主权"诉求 |

### 📐 计算几何与内核

| 仓库 | ⭐ | 一句话说明 |
|------|---|-----------|
| [CGAL/cgal](https://github.com/CGAL/cgal) | 6,061 | 计算几何算法库的事实标准，Delaunay、布尔运算、网格处理等覆盖最全 |
| [f3d-app/f3d](https://github.com/f3d-app/f3d) | 4,736 | 快速极简的 3D 查看器，VTK 内核，是 STEP/STL/3MF 通用检视利器 |
| [mapbox/earcut](https://github.com/mapbox/earcut) | 2,593 | 最快最小的 JS 多边形三角化库，为 WebGL/浏览器 CAD 提供基础算子 |
| [locationtech/jts](https://github.com/locationtech/jts) | 2,239 | Java 拓扑套件，是 GIS / CAD 布尔运算的可靠底座 |
| [cpmech/gosl](https://github.com/cpmech/gosl) | 1,884 | Go 语言数值与几何库，含 NURBS、3D 插值等，适合服务化后端 |
| [MeshInspector/MeshLib](https://github.com/MeshInspector/MeshLib) | 827 | 商用级 3D 几何处理 SDK：布尔、修复、重网格、偏移、ICP，多语言绑定 |
| [w8r/martinez](https://github.com/w8r/martinez) | 775 | Martinez-Rueda 多边形裁剪算法的高质量 TS 实现 |
| [JuliaGeometry/Meshes.jl](https://github.com/JuliaGeometry/Meshes.jl) | 474 | Julia 计算几何生态核心，对仿真驱动的几何处理极具潜力 |
| [chakravala/Grassmann.jl](https://github.com/chakravala/Grassmann.jl) | 515 | Grassmann-Clifford-Hodge 微分几何代数，面向高阶几何建模 |

### 🧬 创成式与参数化设计

| 仓库 | ⭐ | 一句话说明 |
|------|---|-----------|
| [clay-good/anvilate](https://github.com/clay-good/anvilate) | 10 | 面向机械工程师的本地优先设计 Agent：自然语言 → 物理校验过的参数化 STEP/DXF，并附带可编辑 Python 源码 |
| [rdevaul/yapCAD](https://github.com/rdevaul/yapCAD) | 30 | 高级程序化 CAD 与计算几何系统，Python 3 实现 |
| [autonomous-ai/autonomous-workshop](https://github.com/autonomous-ai/autonomous-workshop) | 21 | 自主 AI 发明家，全天候构思并制造新玩具/游戏，是"生成式制造"的探索样本 |
| [fa-mc/vibe-cading](https://github.com/fa-mc/vibe-cading) | 7 | 基于 CadQuery 的"氛围编程式"3D 模型生成，瞄准人类 + LLM 协同 |
| [YuqingNicole/variant-design-skill](https://github.com/YuqingNicole/variant-design-skill) | 47 | Claude Code 技能：提示词 → 3 个差异设计 → 变体导出，解决"空白画布"难题 |
| [generative-design/Code-Package-p5.js](https://github.com/generative-design/Code-Package-p5.js) | 1,015 | 《Generative Design》配套代码包，p5.js 创成式设计经典教材 |
| [vipenzo/ridley](https://github.com/vipenzo/ridley) | 39 | Clojure 海龟三维建模 + WebXR，支持 VR/AR 中可视化 3D 打印模型 |

### 🖨️ 3D 打印与制造

| 仓库 | ⭐ | 一句话说明 |
|------|---|-----------|
| [MarlinFirmware/Marlin](https://github.com/MarlinFirmware/Marlin) | 17,611 | 3D 打印机固件事实标准，几乎所有创客桌面级机器运行其上 |
| [OrcaSlicer/OrcaSlicer](https://github.com/OrcaSlicer/OrcaSlicer) | 15,818 | 主流多平台切片器，覆盖 Bambu/Prusa/Voron/Creality 等生态 |
| [Ultimaker/Cura](https://github.com/Ultimaker/Cura) | 7,049 | Cura

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*