# CAD/机械结构开源动态日报 2026-07-29

> 数据来源: GitHub Search API (101 仓库) | ArXiv cs.GR+cs.CG (0 篇论文) | RSS 新闻 (5 条) | 生成时间: 2026-07-29 02:00 UTC

---

# 📅 CAD / 机械结构开源动态日报
*2026-07-28 · 第 [146] 期*

---

## 🗞️ 今日速览

今日 FreeCAD 项目连发 1.1.2 与 1.1.3 两个补丁版本，叠加 EMF Camp 2026 的"E‑Sport Speed Run"社区活动，显示 1.1 分支正在以周节奏快速迭代并培育用户社区；与此同时，Prusa 推出专为齿轮/运动件的 PA11 Natural 材料，将工程级 3D 打印的"硬件—材料—模型"链条进一步闭合。GitHub 端最显著的趋势是 **AI × Code‑CAD** 与 **浏览器原生 B‑Rep**：OCCT 编译为 WASM、brepjs、cadrum、conway 等项目让 STEP/IFC 不再依赖桌面端，而 Kiln、AgentSCAD、anvilate、freecad‑ai、freecad‑mcp 等 MCP/Agent 框架则把自然语言直接接到 G‑code 输出。整体信号：CAD 正在从"GUI 工具"分裂为"GUI + Code + Agent"三轨并行的生态。cs.GR/cs.CG 方向今日 0 篇新论文，但算法层的新动作体现在 `schildep/verified-3d-mesh-intersection`（Lean 形式化证明的网格求交）等仓库中。

---

## 📰 行业脉搏

| # | 事件 | 意义 |
|---|------|------|
| 1 | **FreeCAD 1.1.3 发布**（[blog.freecad.org](https://blog.freecad.org/2026/07/25/freecad-1-1-3-released/)） | 1.1 分支的周节奏 bugfix，说明 1.x 稳定线已进入"高频小步快跑"阶段，生态伙伴可放心基于此版本构建 Addon。 |
| 2 | **FreeCAD 1.1.2 发布**（[blog.freecad.org](https://blog.freecad.org/2026/07/23/freecad-1-1-2-released/)） | 与 1.1.3 间隔仅 2 天，提示上游可能在针对 Toponaming / Sketcher / Part 等老问题集中攻关。 |
| 3 | **FreeCAD E‑Sport Speed Run @ EMF Camp 2026**（[blog.freecad.org](https://blog.freecad.org/2026/07/27/freecad-e-sport-speed-run-challenge-at-emf-camp-2026/)） | 首次以"竞速建模"形式做社区推广，对标 Blender 大会文化，有利于扩大开源 CAD 在硬核爱好者外的认知。 |
| 4 | **WIP Wednesday, 22 July 2026**（[blog.freecad.org](https://blog.freecad.org/2026/07/22/wip-wednesday-22-july-2026/)） | 持续性开发者 show case，Toponaming、OCCT 7.x 升级、Assembly/LinkStage3 仍是主线。 |
| 5 | **Prusament PA11 Natural：齿轮/运动件用材**（[blog.prusa3d.com](https://blog.prusa3d.com/prusament-pa11-natural-material-with-extreme-mechanical-and-chemical-resistance_137458/)） | 尼龙系列新品，对工程师而言意义在于：FFF 桌面机现在可以打印带自润滑、低吸水、耐化学性的工程件，进一步压缩"金属切削 → 3D 打印"的适用边界。 |

---

## 🔬 研究前沿

> ⚠️ **本期 cs.GR / cs.CG 论文源无新数据**（过去 24h ArXiv 该赛道 0 篇可纳入条目）。
> 但若把视角放宽到"算法 + 实现"层面的仓库，仍可观察到几个值得关注的硬技术动向：

- **形式化验证的网格求交** — [`schildep/verified-3d-mesh-intersection`](https://github.com/schildep/verified-3d-mesh-intersection)（Lean，67⭐）：用 93 行规范取代 1000+ 行 AI 写的求交代码，面向机械/医学网格的布尔运算可信赖性问题。
- **GPU 加速的 CSG + OpenSCAD 兼容** — [`particlesector/chiselcad`](https://github.com/particlesector/chiselcad)（C++20 + Vulkan + Manifold）：把脚本化 CAD 推到 GPU 路径，回应 OpenSCAD 慢的长期痛点。
- **WEB 上的精确 B‑Rep** — [`andymai/brepjs`](https://github.com/andymai/brepjs)（TypeScript）与 [`andymai/occt-wasm`](https://github.com/andymai/occt-wasm)（Rust → WASM）：把 OCCT 的 NURBS / B‑Rep 精度带到浏览器，对在线 CAD、BIM viewer 协作具有范式意义。
- **基于 CUDA/Manifold 的快速网格布尔** — [`polydera/trueform`](https://github.com/polydera/trueform)（C++ + Python/TS 绑定）：被称为"geometry 领域的 STL"，把精确布尔 + 重网格做成商品化库。

---

## ⭐ 重点项目（按类别）

### 🖥️ CAD 平台与编辑器

| 仓库 | Star | 一句话 |
|------|------|--------|
| [**FreeCAD/FreeCAD**](https://github.com/FreeCAD/FreeCAD) | ⭐ 32,447 | 多平台、参数化 3D 建模的开源旗舰；Part/Sketcher/Path/FEM 全栈，是工业级 OA CAD 的最大公约数。 |
| [**earthtojake/text-to-cad**](https://github.com/earthtojake/text-to-cad) | ⭐ 11,530 | "CAD / 机器人 / 硬件" Agent skills 集合，把 LLM 直接接到真实工程模型与制造，AI‑native CAD 的事实入口。 |
| [**openscad/openscad**](https://github.com/openscad/openscad) | ⭐ 9,829 | 程序员的实体建模语言，可被脚本/CI 流水线调用，参数化设计的事实 DSL。 |
| [**LibreCAD/LibreCAD**](https://github.com/LibreCAD/LibreCAD) | ⭐ 6,162 | 跨平台 2D CAD（DXF/DWG），机械图纸场景的轻量替代。 |
| [**Adam-CAD/CADAM**](https://github.com/Adam-CAD/CADAM) | ⭐ 4,894 | 浏览器内的 text‑to‑CAD Web 应用，文本直接生成 OpenSCAD 模型。 |
| [**solvespace/solvespace**](https://github.com/solvespace/solvespace) | ⭐ 4,068 | 参数化 2D/3D CAD，运动约束求解器强劲，适合机构/连杆/凸轮场景。 |

### 📐 计算几何与内核

| 仓库 | Star | 一句话 |
|------|------|--------|
| [**CGAL/cgal**](https://github.com/CGAL/cgal) | ⭐ 5,992 | 计算几何算法库"百科全书"，机械/CAD 几何稳定性的事实标准。 |
| [**Open-Cascade-SAS/OCCT**](https://github.com/Open-Cascade-SAS/OCCT) | ⭐ 2,688 | 开源 3D CAD/CAM/CAE 平台基础，几乎所有现代开源 CAD 的 B‑Rep 源头。 |
| [**artem-ogre/CDT**](https://github.com/artem-ogre/CDT) | ⭐ 1,432 | C++ 受约束 Delaunay 三角剖分，工程网格划分/路径规划的常用积木。 |
| [**boostorg/geometry**](https://github.com/boostorg/geometry) | ⭐ 513 | Boost 几何库，泛型、跨域（地理/几何/图像），工业 C++ 项目的默认兜底。 |
| [**polydera/trueform**](https://github.com/polydera/trueform) | ⭐ 129 | "geometry 领域的 STL"：快速精确的网格布尔 + 空间查询 + 重网格化，C++/Python/TS 三端绑定。 |
| [**lzpel/cadrum**](https://github.com/lzpel/cadrum) | ⭐ 48 | 用 Rust 把 headless OCCT 静态链接并跑进 WebAssembly，"CAD 无桌面"路线的代表。 |
| [**andymai/occt-wasm**](https://github.com/andymai/occt-wasm) | ⭐ 33 | OCCT → WASM，4MB brotli + Web Worker + 结构化错误，让精确 B‑Rep 进入 Web。 |

### 🧬 创成式与参数化设计

| 仓库 | Star | 一句话 |
|------|------|--------|
| [**partcad/partcad**](https://github.com/partcad/partcad) | ⭐ 479 | 物理产品的"包管理器 + 数字主线"，把制造信息、CAD 模型、生命周期数据串成可复用资产。 |
| [**kellerlabs/homeracker**](https://github.com/kellerlabs/homeracker) | ⭐ 476 | 全模块化、可 3D 打印的机架系统，参数化设计"长尾"的典型样板。 |
| [**codeofaxel/Kiln**](https://github.com/codeofaxel/Kiln) | ⭐ 40 | 开源 MCP server，让 Claude/Codex/Cursor 直接驱动 Bambu/Prusa/Creality/Klipper 等打印机设计与切片。 |
| [**clay-good/anvilate**](https://github.com/clay-good/anvilate) | ⭐ 4 | 本地优先的机械工程师 Agent：自然语言 → 物理校验过的 STEP/DXF，并附带可编辑 Python 源。 |
| [**Kevoyuan/AgentSCAD**](https://github.com/Kevoyuan/AgentSCAD) | ⭐ 5 | 把自然语言转成"自检 + 自修复"的 OpenSCAD 工件，并做几何修复与制造可行性校验。 |

### 🖨️ 3D 打印与制造

| 仓库 | Star | 一句话 |
|------|------|--------|
| [**MarlinFirmware/Marlin**](https://github.com/MarlinFirmware/Marlin) | ⭐ 17,505 | 8/32 位 MCU 的 RepRap 固件事实标准，几乎所有消费级/工业级 FDM 的底层。 |
| [**OrcaSlicer/OrcaSlicer**](https://github.com/OrcaSlicer/OrcaSlicer) | ⭐ 15,256 | 覆盖 Bambu/Prusa/Voron/VzBot/RatRig/Creality 的多机型 G‑code 生成器。 |
| [**Ultimaker/Cura**](https://github.com/Ultimaker/Cura) | ⭐ 7,001 | Uranium 框架上的桌面切片 GUI，行业最广泛部署的切片前端之一。 |
| [**cnr-isti-vclab/meshlab**](https://github.com/cnr-isti-vclab/meshlab) | ⭐ 5,769 | 开源网格处理系统，打印前修补/简化/重拓扑的事实工具。 |
| [**maziggy/bambuddy**](https://github.com/maziggy/bambuddy) | ⭐ 2,683 | 自托管的 Bambu Lab 控制中枢，去云化、单机到 40 台农场均可管理。 |
| [**greghesp/ha-bambulab**](https://github.com/greghesp/ha-bambulab) | ⭐ 2,272 | Home Assistant 集成，把 Bambu Lab 纳入家庭自动化与监控。 |
|

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*