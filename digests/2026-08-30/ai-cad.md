# CAD/机械结构开源动态日报 2026-08-30

> 数据来源: GitHub Search API (98 仓库) | ArXiv cs.GR+cs.CG (0 篇论文) | RSS 新闻 (3 条) | 生成时间: 2026-08-30 03:00 UTC

---

# 📊 CAD/机械结构开源动态日报
**日期：2026 年 8 月 28 日**

---

## 1. 今日速览

今日的动态高度集中于 **AI/LLM 与 CAD 的深度集成**：FreeCAD 官方发布基于 Git 的 History Workbench，将版本管理从工程团队带入建模工作流本身；而 neka-nat/freecad-mcp（⭐1,940）以及多个 MCP 服务器（blwfish、sandraschi、codeofaxel/Kiln）共同构成 AI Agent 操作几何内核的"控制平面"。同时，WebAssembly 化的 OCCT（occt-wasm、cadrum）与浏览器内 B-Rep 库（brepjs）正加速让浏览器成为可工程化的 CAD 前端。此外，传统仓库层面的活跃推送显示 FreeCAD 周边生态（Ribbon UI、XR Workbench、FusedFilamentDesign）和 OrcaSlicer/Marlin 等制造工具链依旧旺盛。

---

## 2. 行业脉搏

| # | 动态 | 来源 | 意义 |
|---|---|---|---|
| 1 | **FreeCAD History Workbench** 上线，引入 Git 驱动的模型版本管理 | [FreeCAD Blog](https://blog.freecad.org/2026/08/28/history-workbench-brings-git-powered-file-versioning-to-freecad/) | 解决了参数化建模"回不去历史状态"的痛点，使 FreeCAD 具备与代码工程同步的协作能力 |
| 2 | **WIP Wednesday 26 Aug 2026** — FreeCAD 主线功能合并周报 | [FreeCAD Blog](https://blog.freecad.org/2026/08/27/wip-wednesday-26-august-2026/) | 一线窗口了解 Part Design / Sketcher / OCCT 集成进展 |
| 3 | **Bambu Lab: DIY Summer Sandals by Sofia Rousinovich** | [Bambu Lab Blog](https://blog.bambulab.com/diy-summer-sandals-by-sofia-rousinovich/) | 体现消费级 3D 打印在柔性穿戴与多材料结构中的设计探索 |

---

## 3. 研究前沿

> ⚠️ 今日 ArXiv `cs.GR` 与 `cs.CG` 分类无新论文入库。
>
> 但活跃仓库中可见明显的"论文级"研究输出：
> - **andymai/occt-wasm**：将 OpenCASCADE 完整编译为 ~4MB brotli WASM，提供 arena 内存与结构化错误，对浏览器内 B-Rep 工程化具有里程碑意义。
> - **andymai/brepjs**：在 TypeScript 侧建立"精确 B-Rep 几何"的 Web CAD 库，对前端几何内核研究具备参考价值。
> - **leap71/PicoGK**：以紧凑几何内核支撑计算工程（Computational Engineering）研究方向，已成生成式工程标杆。

---

## 4. 重点项目

### 🖥️ CAD 平台与编辑器

- **[FreeCAD/FreeCAD](https://github.com/FreeCAD/FreeCAD)** ⭐ 33,136 — 开源多平台参数化 3D 建模器标杆，所有 AI/MCP 集成的根。
- **[openscad/openscad](https://github.com/openscad/openscad)** ⭐ 10,048 — "程序员的实体建模器"，BOSL2、Physibles 等生态丰富。
- **[solvespace/solvespace](https://github.com/solvespace/solvespace)** ⭐ 4,120 — 轻量参数化 2D/3D CAD，适合装配约束求解教学与嵌入。
- **[Adam-CAD/CADAM](https://github.com/Adam-CAD/CADAM)** ⭐ 5,027 — 开源 Text-to-CAD Web 应用，自然语言生成模型的新入口。
- **[earthtojake/text-to-cad](https://github.com/earthtojake/text-to-cad)](https://github.com/earthtojake/text-to-cad)** ⭐ 14,020 — CAD/CAE/CAM 的 Agent Skills 库，对 LLM 工程化调用至关重要。
- **[NiJingzhe/SimpleCADAPI](https://github.com/NiJingzhe/SimpleCADAPI)** ⭐ 104 — Agent-native CAD SDK，让 LLM 直接构造可编辑 3D 模型。

### 📐 计算几何与内核

- **[Open-Cascade-SAS/OCCT](https://github.com/Open-Cascade-SAS/OCCT)** ⭐ 2,809 — 开源 3D CAD/CAM/CAE 平台，事实上的几何内核标准。
- **[CGAL/cgal](https://github.com/CGAL/cgal)** ⭐ 6,027 — 计算几何算法库，工业级网格/三角/布尔运算的科研底座。
- **[fougue/mayo](https://github.com/fougue/mayo)** ⭐ 2,138 — 基于 Qt + OCCT 的 CAD 查看与转换器，适合快速搭建转换流水线。
- **[andymai/occt-wasm](https://github.com/andymai/occt-wasm)** ⭐ 49 — OCCT 的 WebAssembly 编译产物，浏览器侧获得原生级 B-Rep 能力。
- **[lzpel/cadrum](https://github.com/lzpel/cadrum)** ⭐ 56 — Rust CAD 工具箱，静态链接 headless OCCT，原生与 WASM 双运行。

### 🧬 创成式与参数化设计

- **[leap71/PicoGK](https://github.com/leap71/PicoGK)** ⭐ 1,072 — 紧凑几何内核，专为计算工程与创成式设计而生。
- **[gumyr/build123d](https://github.com/gumyr/build123d)** ⭐ 2,954 — Python CAD 编程库，与 CadQuery 互为补充的现代 Code-CAD 路径。
- **[partcad/partcad](https://github.com/partcad/partcad)** ⭐ 490 — "可制造物理产品的包管理器"，即数字主线/技术数据包（TDP）规范。
- **[clay-good/anvilate](https://github.com/clay-good/anvilate)** ⭐ 6 — 本地优先的机械设计 Agent：自然语言 → 物理验证的参数化 STEP/DXF，输出可直接导入 CATIA/SolidWorks/NX。

### 🖑 3D 打印与制造

- **[MarlinFirmware/Marlin](https://github.com/MarlinFirmware/Marlin)** ⭐ 17,556 — 主流 3D 打印机固件，覆盖 8/32 位 MCU 平台。
- **[OrcaSlicer/OrcaSlicer](https://github.com/OrcaSlicer/OrcaSlicer)** ⭐ 15,522 — 跨厂商 G-code 生成器（Bambu/Prusa/Voron/VzBot/Creality）。
- **[Ultimaker/Cura](https://github.com/Ultimaker/Cura)** ⭐ 7,026 — 经典切片 GUI，Uranium 框架生态完善。
- **[Sienci-Labs/gsender](https://github.com/Sienci-Labs/gsender)** ⭐ 365 — Grbl/grblHAL CNC 控制前端，对桌面铣削用户友好。
- **[fellesverkstedet/Bark-beetle-parametric-toolpaths](https://github.com/fellesverkstedet/Bark-beetle-parametric-toolpaths)** ⭐ 124 — Grasshopper 插件：3D 打印 / CNC / 激光 / 机械臂的统一刀路规划 + 1:1 AR 投影。
- **[codeofaxel/Kiln](https://github.com/codeofaxel/Kiln)** ⭐ 51 — 3D 打印 MCP 服务器：AI Agent 一站式设计→切片→打印，覆盖 Bambu/Creality/Prusa/Klipper/OctoPrint/Marlin。

### 🔗 文件格式与互操作

- **[CadQuery/cadquery](https://github.com/CadQuery/cadquery)** ⭐ 5,667 — 基于 OCCT 的 Python 参数化 CAD 脚本框架，Code-CAD 事实标准之一。
- **[sgenoud/replicad](https://github.com/sgenoud/replicad)** ⭐ 675 — TypeScript 浏览器端 3D 模型代码构建库。
- **[bldrs-ai/Share](https://github.com/bldrs-ai/Share)** ⭐ 185 — 浏览器端 BIM/CAD 协作查看器，支持 IFC/STEP/STL/glTF。

### 🐍 Code-CAD 与脚本化

- **[neka-nat/freecad-mcp](https://github.com/neka-nat/freecad-mcp)** ⭐ 1,940 — FreeCAD MCP（Model Context Protocol）服务器，是 LLM 直接驱动 FreeCAD 的主流桥梁。
- **[APEbbers/FreeCAD-Ribbon](https://github.com/APEbbers/FreeCAD-Ribbon)** ⭐ 136 — FreeCAD 可定制 Ribbon UI，显著改善工程化操作体验。
- **[kwahoo2/freecad-xr-workbench](https://github.com/kwahoo2/freecad-xr-workbench)** ⭐ 35 — FreeCAD 的 VR 工作台，CAD 沉浸式交互实验。
- **[sandraschi/freecad-mcp](https://github.com/sandraschi/freecad-mcp)** ⭐ 20 — 基于 FastMCP 的 FreeCAD 自动化，附带 FluidX3D/OpenFOAM CFD 扩展。

---

## 5. 生态趋势信号

**"Agent + 几何内核"正在成为新的中间层。** 今日活跃推送中，MCP 服务器成群出现（FreeCAD 至少 3 个独立实现，加上 Kiln/ntopology-mcp），预示 CAD 工具正被抽象为可被 LLM 调用的"几何工具 API"。同时，**浏览器即工程终端**的路线日益成熟：occt-wasm、cadrum、brepjs、replicad、CADAM、text-to-cad 共同把 B-Rep 几何推到 WebAssembly 与 Web 端，弱化了传统桌面安装门槛。叠加 **Git 化的 FreeCAD History Workbench** 上线，整条链路呈现"模型即代码 → 版本即 Git → 构造即 Agent 调用"三位一体的演进方向。

---

## 6. 值得关注

1. **[FreeCAD History Workbench](https://blog.freecad.org/2026/08/28/history-workbench-brings-git-powered-file-versioning-to-freecad/) + [FreeCAD/FreeCAD](https://github.com/FreeCAD/FreeCAD)**
   一旦版本管理进入参数化建模器，团队协作与回归测试将发生质变；这是 FreeCAD 走向工业级的关键拼图。

2. **[andymai/occt-wasm](https://github.com/andymai/occt-wasm) 与 [lzpel/cadrum](https://github.com/lzpel/cadrum)**
   WASM 化的 OCCT 让"零安装、专业级几何"在浏览器/移动端成为现实，将直接影响未来 SaaS 化 CAD 产品形态。

3. **[neka-nat/freecad-mcp](https://github.com/neka-nat/freecad-mcp) + [codeofaxel/Kiln](https://github.com/codeofaxel/Kiln) + [clay-good/anvilate](https://github.com/clay-good/anvilate)**
   MCP 协议把 CAD/3D 打印变为 AI Agent 的标准工具集，未来 6–12 个月内或将出现首个"全流程自动化机械设计 Agent"的稳定版本，值得长期跟踪。

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*