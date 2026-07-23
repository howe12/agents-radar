# CAD/机械结构开源动态日报 2026-07-23

> 数据来源: GitHub Search API (105 仓库) | ArXiv cs.GR+cs.CG (0 篇论文) | RSS 新闻 (1 条) | 生成时间: 2026-07-23 02:09 UTC

---

# CAD/机械结构开源动态日报
**2026 年 7 月 22 日 · 周三**

---

## 📌 今日速览

今日 CAD/机械设计开源生态的核心信号是 **"AI Agent × 参数化 CAD" 的深度耦合**——以 FreeCAD MCP Server（1.4k⭐）、freecad-ai、Text23D、anvilate 为代表，自然语言/Agent 驱动的参数化建模工具集中涌现；同时 WebAssembly 化的 OCCT 内核（brepjs、occt-wasm、cadrum、chili3d）正在让浏览器内高精度 B-Rep 建模走向可用；G-code 生态则以 gsender（360⭐）和 Kiln（MCP-to-3D-Printer）为代表的"AI 到刀路"闭环逐步成型。FreeCAD 本周照例发布 WIP Wednesday，开发节奏持续活跃。

---

## 📰 行业脉搏

**① FreeCAD WIP Wednesday #22 (July 2026)** — FreeCAD Blog
🔗 https://blog.freecad.org/2026/07/22/wip-wednesday-22-july-2026/
意义：FreeCAD 项目持续保持周更节奏，集中展示本周核心 PR、PartDesign/Sketcher/Assembly 改进，是评估开源 3D 参数化建模器进展的最权威窗口。

> 备注：本日仅 1 条行业新闻被收录，原材料中 Prusa、Bambu Lab、OpenCASCADE、Hackaday 未提供新条目。

---

## 🔬 研究前沿

**今日 ArXiv cs.GR / cs.CG 论文 0 篇。** 以下仓库中的研究型项目可视为学术成果的工程化映射：

- **particlesector/chiselcad** — 用 C++20 + Vulkan + Manifold 构建 GPU 加速、OpenSCAD 兼容的 CSG 引擎，代表"高性能脚本化建模"研究方向。
- **polydera/trueform** — 网格精确布尔、空间查询、Remeshing，"几何处理的 STL 化"，对仿真/CAM 前处理意义重大。
- **Artem-ogre/CDT** (1.4k⭐) — 约束 Delaunay 三角化的现代 C++ 实现，长期作为几何处理研究的基础设施。

---

## ⭐ 重点项目

### 🖥️ CAD 平台与编辑器

| 仓库 | ⭐ | 说明 |
|---|---|---|
| [**FreeCAD/FreeCAD**](https://github.com/FreeCAD/FreeCAD) | 32,301 | 官方开源多平台 3D 参数化建模器，是本日报覆盖最广的生态根 |
| [**openscad/openscad**](https://github.com/openscad/openscad) | 9,785 | "程序员的实体 3D CAD"，代码即模型的范式标杆 |
| [**xiangechen/chili3d**](https://github.com/xiangechen/chili3d) | 4,697 | 浏览器端 3D CAD 应用，推动在线建模走向主流 |
| [**solvespace/solvespace**](https://github.com/solvespace/solvespace) | 4,054 | 参数化 2D/3D CAD，约束求解器的轻量典范 |
| [**LibreCAD/LibreCAD**](https://github.com/LibreCAD/LibreCAD) | 6,139 | 跨平台 2D CAD，DXF/DWG 兼容最完整 |
| [**qcad/qcad**](https://github.com/qcad/qcad) | 1,846 | 开源 2D CAD，支持 DXF 与可选 DWG |

### 🧮 计算几何与内核

| 仓库 | ⭐ | 说明 |
|---|---|---|
| [**CGAL/cgal**](https://github.com/CGAL/cgal) | 5,984 | 计算几何算法库的金标准，Delaunay/布尔/曲面重建等 |
| [**mikedh/trimesh**](https://github.com/mikedh/trimesh) | 3,634 | Python 三角网格加载/分析库，CAD-仿真桥梁 |
| [**gkjohnson/three-mesh-bvh**](https://github.com/gkjohnson/three-mesh-bvh) | 3,431 | three.js 网格 BVH 加速，光线追踪/空间查询基石 |
| [**gkjohnson/three-gpu-pathtracer**](https://github.com/gkjohnson/three-gpu-pathtracer) | 1,788 | 基于 BVH 的 GPU 路径追踪，构建 Web CAD 可视化 |
| [**polydera/trueform**](https://github.com/polydera/trueform) | 129 | "几何处理领域的 STL"——精确网格布尔与重网格化 |
| [**ricardosjp/truck**](https://github.com/ricosjp/truck) | 1,515 | Rust 编写的现代 CAD 内核，安全 + 高性能的新路线 |
| [**particlesector/chiselcad**](https://github.com/particlesector/chiselcad) | 11 | Vulkan + Manifold 加速的 OpenSCAD 兼容 CSG，GPU 端脚本化建模 |

### 🧬 创成式与参数化设计

| 仓库 | ⭐ | 说明 |
|---|---|---|
| [**ghbalf/freecad-ai**](https://github.com/ghbalf/freecad-ai) | 388 | FreeCAD 内置 AI Workbench，自然语言生成 3D 模型 |
| [**mnesarco/MarzWorkbench**](https://github.com/mnesarco/MarzWorkbench) | 128 | FreeCAD 吉他设计专用 Workbench，垂直行业模板 |
| [**davesrocketshop/Rocket**](https://github.com/davesrocketshop/Rocket) | 76 | FreeCAD 火箭设计 Workbench，工程级垂直应用 |
| [**ryankembrey/FreeCAD-DFM-Workbench**](https://github.com/ryankembrey/FreeCAD-DFM-Workbench) | 36 | 可制造性设计（DFM）Workbench，CAD→制造闭环 |
| [**clay-good/anvilate**](https://github.com/clay-good/anvilate) | 3 | 本地优先设计 Agent，文本→物理验证的 STEP/DXF |

### 🖨️ 3D 打印与制造

| 仓库 | ⭐ | 说明 |
|---|---|---|
| [**Sienci-Labs/gsender**](https://github.com/Sienci-Labs/gsender) | 360 | grbl/grblHAL CNC 控制 + G-code 发送，桌面机加工主流工具 |
| [**Rahix/FusedFilamentDesign**](https://github.com/Rahix/FusedFilamentDesign) | 232 | FreeCAD FFF/FDM 3D 打印专用 PartDesign 插件 |
| [**codeofaxel/Kiln**](https://github.com/codeofaxel/Kiln) | 39 | 开源 MCP-for-3D-Printing 服务，AI Agent 直连 Bambu/Prusa/Klipper |
| [**kellerlabs/homeracker**](https://github.com/kellerlabs/homeracker) | 473 | OpenSCAD 模块化 3D 打印机架系统 |

### 🔗 文件格式与互操作

| 仓库 | ⭐ | 说明 |
|---|---|---|
| [**f3d-app/f3d**](https://github.com/f3d-app/f3d) | 4,565 | 快速极简 3D 查看器，STEP/STL/glTF 全支持 |
| [**atteneder/glTFast**](https://github.com/atteneder/glTFast) | 1,475 | Unity 高效 glTF 导入导出，CAD-实时渲染桥梁 |
| [**LibreDWG/libredwg**](https://github.com/LibreDWG/libredwg) | 1,504 | DWG 官方镜像，CAD 互操作性基础设施 |
| [**bldrs-ai/Share**](https://github.com/bldrs-ai/Share) | 179 | 浏览器 BIM/CAD 协同查看器，IFC/STEP/STL/OBJ/glTF 支持 |
| [**bldrs-ai/conway**](https://github.com/bldrs-ai/conway) | 22 | Web 端高性能 IFC & STEP 引擎，B-Rep-on-Browser |
| [**andymai/occt-wasm**](https://github.com/andymai/occt-wasm) | 31 | OpenCASCADE 编译为 WASM（~4MB brotli），浏览器内核级 CAD |
| [**lzpel/cadrum**](https://github.com/lzpel/cadrum) | 45 | Rust 静态链接无头 OCCT，可原生与 WASM 双部署 |
| [**andymai/brepjs**](https://github.com/andymai/brepjs) | 72 | Web 端精确 B-Rep CAD 库，几何精度不再妥协 |

### 🐍 Code-CAD 与脚本化

| 仓库 | ⭐ | 说明 |
|---|---|---|
| [**CadQuery/cadquery**](https://github.com/CadQuery/cadquery) | 5,490 | 基于 OCCT 的 Python 参数化 CAD 脚本框架 |
| [**gumyr/build123d**](https://github.com/gumyr/build123d) | 2,681 | 现代 Python CAD 编程库（CadQuery 演进方向） |
| [**partcad/partcad**](https://github.com/partcad/partcad) | 476 | 硬件/可制造产品的包管理器，"数字主线"标准 |
| [**neka-nat/freecad-mcp**](https://github.com/neka-nat/freecad-mcp) | 1,414 | FreeCAD MCP Server，让 LLM 直接操控参数化建模 |
| [**zqf3229294/Text23D**](https://github.com/zqf3229294/Text23D) | 16 | 对话式 AI 辅助机械设计，从自然语言生成参数化 CAD |
| [**nerd-sniped/GitPDM**](https://github.com/nerd-sniped/GitPDM) | 29 | 基于 Git 的开源 PDM，FreeCAD 版本管理解决方案 |
| [**shaise/FreeCAD_SheetMetal**](https://github.com/shaise/FreeCAD_SheetMetal) | 328 | 钣金设计 Workbench，扩展 FreeCAD 工程能力 |
| [**looooo/freecad.gears**](https://github.com/looooo/freecad.gears) | 345 | FreeCAD 齿轮模块，机械传动设计利器 |

---

## 🌐 生态趋势信号

开源 CAD 正经历三条清晰主线：(1) **LLM/Agent 化**——MCP 协议让 Claude/Codex/Cursor 等能直接读写 FreeCAD、OpenSCAD、3D 打印机，"自然语言→参数化模型→刀路→打印" 端到端工作流成为现实，代表项目为 freecad-mcp、freecad-ai、Text23D、Kiln、anvilate；(2) **浏览器化与 WASM 化**——OCCT 被编译为 ~4MB 的 brotli 模块（occt-wasm、brepjs、cadrum、conway），使得 B-Rep 精度的 CAD 不再受本地安装束缚，chili3d 与 bldrs-ai Share 进一步把协作带入 Web；(3) **新内核语言爆发**——Rust（truck、cadrum）、C++20+Vulkan（chiselcad）、TypeScript（replicad、brepjs）成为新一代 CAD 内核的实验场，传统 C++/OCCT 一家独大格局被打破。三股力量交汇，标志开源机械设计正从"工具复刻"走向"范式重写"。

---

## 🎯 值得关注

1. **AI Agent × FreeCAD 闭环的成熟度**：**freecad-mcp**（1.4k⭐）已建立模型上下文协议层的稳定接入，**freecad-ai**（388⭐）提供 Workbench 形式的能力封装，**Kiln**（39⭐）进一步把同一思路延伸到 3D 打印——三者组合已构成"文本→CAD→切片→上机"的最小可行闭环。建议关注其 Prompt 兼容性、参数化可编辑性与制造可制造性（DFM）的边界。

2. **OCCT-on-WASM 的工程拐点**：**occt-wasm**（~4MB brotli）+ **brepjs** + **cadrum** + **conway** 共同表明 OCCT 已具备 Web 端生产可用性。下一阶段值得追踪：是否会出现一个"Web-native、对标 FreeCAD、但更轻量"的全功能 CAD 编辑器——chili3d 是当前最接近的候选。

3. **新内核语言的分化竞争**：Rust（**truck**、cadrum）走"安全 + 静态分发"路线，C++20 + Vulkan（**chiselcad**）走"GPU 加速 CSG"路线。它们可能在未来 12–18 个月内挑战 OCCT 在轻量场景的主导地位，尤其影响 Code-CAD、Web-CAD 和嵌入式 CAD 方向。

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*