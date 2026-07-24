# CAD/机械结构开源动态日报 2026-07-24

> 数据来源: GitHub Search API (115 仓库) | ArXiv cs.GR+cs.CG (0 篇论文) | RSS 新闻 (3 条) | 生成时间: 2026-07-24 02:05 UTC

---

# CAD/机械结构开源动态日报

**日期：2026-07-23** | 监测范围：行业新闻 · ArXiv · GitHub 开源仓库（115 项近 7 日活跃）

---

## 一、今日速览

今日开源 CAD 生态的主线是 **FreeCAD 1.1.2 正式发布**，这是继 1.0 稳定版之后的又一轮迭代，标志着开源参数化建模向成熟工业化迈进。与此同时，**AI 驱动 CAD** 与 **浏览器/WASM 化 CAD 内核** 两股趋势在 GitHub 持续升温：CADAM（text-to-CAD）、FreeCAD-MCP、freecad-ai、Text23D 等"自然语言→三维模型"项目密集迭代，occt-wasm、brepjs、cadrum 等把 OpenCASCADE 完整 B-Rep 能力搬进浏览器的方案同步演化。制造侧，Prusa 发布面向齿轮与运动件的 Prusament PA11 线材，呼应了工业级功能件 FDM 化的大方向。

---

## 二、行业脉搏

| 序号 | 动态 | 意义 |
|---|---|---|
| 🟢 | [**FreeCAD 1.1.2 released**](https://blog.freecad.org/2026/07/23/freecad-1-1-2-released/) — FreeCAD Blog | 1.1 系列首个补丁版本，延续 1.0 稳定版的 API/UI 改进路径，是当前最值得升级的开源参数化建模发行版。 |
| 🟢 | [**WIP Wednesday, 22 July 2026**](https://blog.freecad.org/2026/07/22/wip-wednesday-22-july-2026/) — FreeCAD Blog | 每周开发者进度汇总，可一窥 Part Design、Sketcher、Assembly 等核心 Workbench 的在研特性与 Bug 修复方向。 |
| 🟢 | [**Prusament PA11 Natural：齿轮与运动件专用料**](https://blog.prusa3d.com/prusament-pa11-natural-material-with-extreme-mechanical-and-chemical-resistance_137458/) — Prusa Blog | 尼龙 PA11 具备高耐磨、低吸湿、优良化学与机械耐性，为开源桌面 FDM 设备打开"功能件替代注塑"的大门。 |

---

## 三、研究前沿

> 📭 今日 ArXiv `cs.GR` / `cs.CG` 分类下未抓取到新论文。建议跟进 SIGGRAPH/ACM TOG、Computer-Aided Design 等期刊的近期预印。

可关注的持续性研究方向（基于仓库信号反推）：

1. **GPU 加速 CSG / 可微渲染建模** — `particlesector/chiselcad` 用 Vulkan + Manifold 实现 OpenSCAD 兼容语法，暗示实时布尔运算正走向 GPU 流水线。
2. **AI 几何生成与参数化** — FreeCAD-MCP / freecad-ai / Kiln 等让 LLM 直接操作约束求解器。
3. **Web 端 B-Rep 引擎** — occt-wasm、conway、brepjs 把精确几何带进浏览器，呼应"CAD 即 Web 应用"的趋势。
4. **Mesh Booleans** — `polydera/trueform`、`gkjohnson/three-mesh-bvh` 在三角网格上的快速精确布尔仍是研究热点。
5. **数字孪生/数字主线（Digital Thread）** — `partcad/partcad` 把模块化硬件与 PDM/PLM 流程标准化。

---

## 四、重点项目

### 🖥️ CAD 平台与编辑器

| 项目 | ⭐ | 一句话说明 |
|---|---|---|
| [**FreeCAD/FreeCAD**](https://github.com/FreeCAD/FreeCAD) | 32,321 | 开源多平台参数化 3D 建模旗舰，本次 1.1.2 发布的本体，覆盖 Part Design、Mesh、Sketcher、Path 等全栈场景。 |
| [**openscad/openscad**](https://github.com/openscad/openscad) | 9,790 | "程序员友好的实体建模器"，代码即几何，社区围绕其衍生了大量参数化设计工具链。 |
| [**LibreCAD/LibreCAD**](https://github.com/LibreCAD/LibreCAD) | 6,143 | 跨平台 2D CAD，DXF/DWG 双向读写，是机械制图层面的事实标准之一。 |
| [**Adam-CAD/CADAM**](https://github.com/Adam-CAD/CADAM) | 4,849 | 开源 text-to-CAD Web 应用，自然语言直接生成三维模型，标志 AI × CAD 的可交互形态。 |
| [**xiangechen/chili3d**](https://github.com/xiangechen/chili3d) | 4,700 | 浏览器原生 3D CAD，无需安装即可在线建模与编辑，对教育与轻量化场景意义重大。 |
| [**solvespace/solvespace**](https://github.com/solvespace/solvespace) | 4,059 | 参数化 2D/3D CAD，体积小、可约束求解，常被用于嵌入式/CNC 工装设计。 |
| [**qcad/qcad**](https://github.com/qcad/qcad) | 1,846 | 开源 2D CAD，DXF 原生，可选 DWG 插件，适合机械图纸与制造标注场景。 |

### 📐 计算几何与内核

| 项目 | ⭐ | 一句话说明 |
|---|---|---|
| [**CGAL/cgal**](https://github.com/CGAL/cgal) | 5,986 | 计算几何算法库事实标准（Delaunay、布尔、Mesh 生成等），是大量 CAD/CAE/CAM 工具的算法底座。 |
| [**mikedh/trimesh**](https://github.com/mikedh/trimesh) | 3,634 | Python 三角网格库，负载 STL/OBJ/GLB、布尔、修复等完整管线，常用于逆向工程与 3D 打印预处理。 |
| [**gkjohnson/three-mesh-bvh**](https://github.com/gkjohnson/three-mesh-bvh) | 3,432 | three.js 的 BVH 加速库，把网页端 raycast/空间查询做到工业级性能。 |
| [**polydera/trueform**](https://github.com/polydera/trueform) | 129 | C++ 精确网格布尔 + 重网格库，提供 Python/TS 绑定，是"STL for geometry"理念的代表。 |

### 🧬 创成式与参数化设计

| 项目 | ⭐ | 一句话说明 |
|---|---|---|
| [**partcad/partcad**](https://github.com/partcad/partcad) | 478 | 面向可制造硬件的包管理器 + 数字主线（Digital Thread）标准，AI 加持全生命周期。 |
| [**codeofaxel/Kiln**](https://github.com/codeofaxel/Kiln) | 39 | 3D 打印 MCP 服务器：AI Agent 直接调用模型生成、切片与下发到 Bambu/Prusa/Klipper 等固件。 |
| [**clay-good/anvilate**](https://github.com/clay-good/anvilate) | 3 | 本地优先的机械设计 Agent：自然语言→物理校验的 STEP/DXF，可直连 CATIA/SolidWorks/NX。 |

### 🖨️ 3D 打印与制造

| 项目 | ⭐ | 一句话说明 |
|---|---|---|
| [**MarlinFirmware/Marlin**](https://github.com/MarlinFirmware/Marlin) | 17,494 | 全球装机量最大的开源 3D 打印机固件，覆盖 8/32 位 MCU 与绝大多数商业桌面机。 |
| [**OrcaSlicer/OrcaSlicer**](https://github.com/OrcaSlicer/OrcaSlicer) | 15,195 | 新一代切片软件，对 Bambu/Prusa/Voron/VzBot 等主流机型均有专项配置，是当下切片生态风向标。 |
| [**Ultimaker/Cura**](https://github.com/Ultimaker/Cura) | 6,996 | 老牌切片 GUI，基于 Uranium 框架，行业级插件生态成熟。 |
| [**Sienci-Labs/gsender**](https://github.com/Sienci-Labs/gsender) | 360 | GRBL / grblHAL CNC 的统一控制器，TypeScript 实现，是桌面 CNC 控制端热门选择。 |
| [**maziggy/bambuddy**](https://github.com/maziggy/bambuddy) | 2,602 | 自托管 Bambu Lab 命令中心，1–40 台打印机均可纳管，强调"去云化、本地掌控"。 |

### 🔗 文件格式与互操作

| 项目 | ⭐ | 一句话说明 |
|---|---|---|
| [**f3d-app/f3d**](https://github.com/f3d-app/f3d) | 4,566 | 快速极简的 3D 桌面查看器，支持 STEP/STL/GLTF 等数十种格式，是机械结构快速审阅利器。 |
| [**bldrs-ai/Share**](https://github.com/bldrs-ai/Share) | 180 | 浏览器端 BIM/CAD 协作平台，原生支持 IFC/STEP/STL/OBJ/GLTF。 |
| [**lzpel/cadrum**](https://github.com/lzpel/cadrum) | 45 | Rust 编写的 OpenCASCADE 头链接封装，可原生与 WASM 双跑，把 OCCT 嵌入浏览器。 |
| [**andymai/occt-wasm**](https://github.com/andymai/occt-wasm) | 31 | OpenCASCADE → WebAssembly，干净 TS API，~4MB brotli，是 Web CAD 的内核级基础设施。 |
| [**bldrs-ai/conway**](https://github.com/bldrs-ai/conway) | 22 | 面向 Web 的高性能 IFC/STEP 引擎，配合 conway-geom 几何核心直接驱动前端 CAD 应用。 |

### 🐍 Code-CAD 与脚本化

| 项目 | ⭐ | 一句话说明 |
|---|---|---|
| [**gumyr/build123d**](https://github.com/gumyr/build123d) | 2,686 | Python 参数化 CAD 库，对标 CadQuery，提供更现代的语义与 ALG（约束定位）抽象。 |
| [**ricosjp/truck**](https://github.com/ricosjp/truck) | 1,516 | 纯 Rust CAD 内核，把内存安全与高性能带入 B-Rep 建模领域，是新兴系统级选项。 |
| [**neka-nat/freecad-mcp**](https://github.com/neka-nat/freecad-mcp) | 1,423 | FreeCAD 的 MCP 服务器，让 LLM 直接操作 FreeCAD 完成建模与查询。 |
| [**ghbalf/freecad-ai**](https://github.com/ghbalf/freecad-ai) | 389 | FreeCAD 内嵌 AI Workbench，自然语言 → 3D 模型。 |
| [**andymai/brepjs**](https://github.com/andymai/brepjs) | 72 | Web 端精确 B-Rep 库，配合 OCCT 内核可构建复杂几何的在线 CAD。 |

---

## 五、生态趋势信号

三条主线在今日素材里高度共振：

1. **AI Agent 接管设计入口**：FreeCAD-MCP、freecad-ai、CADAM、Text23D、Kiln、anvilate 等十余个项目都在抢"自然语言→可制造 CAD"的高地。协议层面（MCP）已成事实标准，应用层呈现专业化分工——切片、PDM、CNC 各自拥有 Agent 化版本。
2. **CAD 全面 Web 化**：OCCT WASM 化（occt-wasm / cadrum / brepjs）+ 浏览器 B-Rep 引擎（conway）+ 浏览器前端应用（CADAM / Chili3D / Share）形成完整栈，桌面 CAD 的护城河正在被"零安装、协作友好"侵蚀。
3. **Rust 入侵几何内核**：truck（Rust CAD 内核）、cadrum（OCCT-Rust 绑定）暗示下一代高性能 CAD 内核将摆脱 C++ 的历史包袱，向内存安全与现代构建链靠拢。GPU 侧的 chiselcad（Vulkan CSG）则代表另一条更快但非精确的路线。

---

## 六、值得关注

- 🛰️ **[FreeCAD 1.1.2](https://blog.freecad.org/2026/07/23/freecad-1-1-2-released/)**：开源参数化建模最值得立即跟进的生产版本；若此前停在 0.21 LTS，建议评估迁移。
- 🛰️ **[anvilate / FreeCAD-MCP / Kiln](https://github.com/clay-good/anvilate)**：三者构成"AI 设计 Agent"的三种落地形态——本地优先 + STEP 输出、MCP 标准协议、3D 打印闭环。建议持续追踪其接口协议与几何正确性保证机制。
- 🛰️ **[Prusament PA11 Natural](https://blog.prusa3d.com/prusament-pa11-natural-material-with-extreme-mechanical-and-chemical-resistance_137458/)**：把桌面 FDM 推到"功能件替代注塑"的临界点，对齿轮、传动、外壳等机械结构设计的快速迭代路径影响深远，可结合 `freecad.gears`、`FusedFilamentDesign` 等 FreeCAD 插件做端到端验证。

---

*本报告由开源信号自动汇总生成，链接均为公开信息源原始地址。*

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*