# CAD/机械结构开源动态日报 2026-08-31

> 数据来源: GitHub Search API (101 仓库) | ArXiv cs.GR+cs.CG (0 篇论文) | RSS 新闻 (3 条) | 生成时间: 2026-08-31 02:55 UTC

---

# CAD/机械结构开源动态日报

**日期：2026-08-28**

---

## 一、今日速览

今日开源 CAD 生态最显著的信号来自 **FreeCAD**——同时上线 Git 驱动的 `History Workbench` 文件版本管理与 WIP 周报更新，意味着大型装配体的工程协作开始具备"代码级"的演进追溯能力。与此同时，AI/LLM 接入 CAD 的边界在持续扩张：`freecad-mcp`、`freecad-ai`、`text-to-cad`、`Kiln`、`anvilate` 等多个 MCP/Agent 框架活跃迭代，自然语言到 STEP/Brep 的端到端链路逐步成型。WebAssembly 侧的 `occt-wasm`、`brepjs` 与 `CADAM` 共同把 OCCT 几何内核推向了浏览器原生 B-Rep 时代。ArXiv 今日无新增 cs.GR/cs.CG 论文，但仓库层的活跃度已透露出"AI 代理 × 参数化脚本 × 浏览器几何内核"三条主线正在加速交汇。

---

## 二、行业脉搏

- **🔧 [FreeCAD History Workbench 上线 Git 驱动版本管理](https://blog.freecad.org/2026/08/28/history-workbench-brings-git-powered-file-versioning-to-freecad/)** — FreeCAD Blog  
  将 Git 引入 CAD 文件版本控制，对装配体、协同设计和工程审计具有里程碑意义，工程变更从此可 diff、可追溯、可回滚。

- **📋 [WIP Wednesday, 26 August 2026](https://blog.freecad.org/2026/08/27/wip-wednesday-26-august-2026/)** — FreeCAD Blog  
  FreeCAD 核心开发例行更新，反映 PartDesign、Assembly、Spreadsheet 等模块仍处于密集迭代期。

- **👡 [DIY Summer Sandals by Sofia Rousinovich](https://blog.bambulab.com/diy-summer-sandals-by-sofia-rousinovich/)** — Bambu Lab  
  消费级 3D 打印走向柔性穿戴件，展示了 FDM 在非刚性、贴合人体几何上的工艺边界。

---

## 三、研究前沿

今日 ArXiv cs.GR / cs.CG 暂无新论文。以下两个项目级"研究产出"可作为前沿观察的替代指标：

- **[andymai/occt-wasm](https://github.com/andymai/occt-wasm)** — 将工业级 OCCT 内核编译为 ~4MB brotli 的 WebAssembly，为浏览器内 B-Rep 精确几何运算奠定基础设施，对 Web CAD、云端 CAM、协作可视化是关键拼图。

- **[leap71/PicoGK](https://github.com/leap71/PicoGK)** — Leap71 团队提出的紧凑型 Computational Engineering 几何内核，聚焦于隐式几何与生成式工程，代表"内核即服务"的新设计哲学。

---

## 四、重点项目

### 🖥️ CAD 平台与编辑器

| 项目 | ⭐ | 简介 |
|---|---|---|
| **[FreeCAD/FreeCAD](https://github.com/FreeCAD/FreeCAD)** | 33,160 | 开源多平台参数化 3D 建模器的事实标准，PartDesign/装配/Sketcher 体系成熟，是开源机械设计生态的基石。 |
| **[openscad/openscad](https://github.com/openscad/openscad)** | 10,062 | 程序员友好的脚本式实心建模器，配合 BOSL2 形成代码化参数化设计生态。 |
| **[gumyr/build123d](https://github.com/gumyr/build123d)** | 2,963 | Python 现代 CAD 编程库，融合语义化建模与 OCCT，是新一代 Code-CAD 的代表。 |
| **[neka-nat/freecad-mcp](https://github.com/neka-nat/freecad-mcp)** | 1,950 | 通过 MCP 将 FreeCAD 接入 LLM，让 AI 代理能够直接操控 3D 建模会话。 |
| **[ghbalf/freecad-ai](https://github.com/ghbalf/freecad-ai)** | 446 | 自然语言生成 3D 模型的 AI 助手工作台，降低非程序员使用 FreeCAD 的门槛。 |
| **[NiJingzhe/SimpleCADAPI](https://github.com/NiJingzhe/SimpleCADAPI)** | 105 | 面向语言模型的"代理原生"CAD SDK，让 LLM 能够创建、检查并重建可编辑的复杂 3D 模型。 |

### 📐 计算几何与内核

| 项目 | ⭐ | 简介 |
|---|---|---|
| **[CGAL/cgal](https://github.com/CGAL/cgal)** | 6,028 | 计算几何算法库，工业/学术界的算法参考实现，覆盖三角化、布尔运算、几何搜索等。 |
| **[Open-Cascade-SAS/OCCT](https://github.com/Open-Cascade-SAS/OCCT)** | 2,813 | 开源 3D CAD/CAM/CAE 开发平台，是 FreeCAD、Mayo、cadrum 等众多项目的几何内核底座。 |
| **[MeshInspector/MeshLib](https://github.com/MeshInspector/MeshLib)** | 811 | 高性能网格布尔运算、修复、重网格化、点云三角化与 ICP 配准，几何处理 SDK 的工业级方案。 |

### 🧬 创成式与参数化设计

| 项目 | ⭐ | 简介 |
|---|---|---|
| **[earthtojake/text-to-cad](https://github.com/earthtojake/text-to-cad)** | 14,053 | CAD/CAE/CAM 的 Agent 技能库，桥接 LLM 与多种 CAD/CAM 后端，是自然语言设计的"操作系统"。 |
| **[BelfrySCAD/BOSL2](https://github.com/BelfrySCAD/BOSL2)** | 2,336 | OpenSCAD 工具库 2.0，提供丰富形状与操作器，让 OpenSCAD 真正胜任复杂工程建模。 |
| **[partcad/partcad](https://github.com/partcad/partcad)** | 491 | 可制造物理产品的"包管理器"，将"数字主线/TDP"标准化，是设计资产复用的基础设施。 |
| **[clay-good/anvilate](https://github.com/clay-good/anvilate)** | 6 | 本地优先的机械设计代理：自然语言描述 → 物理校验 → 可投递到主流商业 CAD 的 STEP/DXF。 |

### 🖨️ 3D 打印与制造

| 项目 | ⭐ | 简介 |
|---|---|---|
| **[Sienci-Labs/gsender](https://github.com/Sienci-Labs/gsender)** | 365 | GRBL/grblHAL CNC 控制器，对小型 CNC 与木工/铣削工作流极具实用价值。 |
| **[Rahix/FusedFilamentDesign](https://github.com/Rahix/FusedFilamentDesign)** | 241 | FreeCAD PartDesign 的 FFF/FDM 增材制造插件，针对 3D 打印工艺优化建模实践。 |
| **[fellesverkstedet/Bark-beetle-parametric-toolpaths](https://github.com/fellesverkstedet/Bark-beetle-parametric-toolpaths)** | 124 | Grasshopper 数字制造插件，桥接 Rhino 设计端与 3D 打印/CNC/激光/机器人臂等执行端。 |
| **[codeofaxel/Kiln](https://github.com/codeofaxel/Kiln)** | 51 | 面向 3D 打印的开源 MCP 服务器：AI 代理可设计、生成、切片并操控 Bambu/Prusa/Klipper 等多种打印机。 |
| **[rudra496/cnc](https://github.com/rudra496/cnc)** | 3 | 浏览器端三轴 CNC 仿真器，零安装、100% 客户端运行，是 G-code 教学与可视化的轻量工具。 |

### 🔗 文件格式与互操作

| 项目 | ⭐ | 简介 |
|---|---|---|
| **[f3d-app/f3d](https://github.com/f3d-app/f3d)** | 4,656 | 快速极简的 3D 查看器，支持 STEP/IGES/STL/GLTF 等多种格式，是几何资产预览的事实工具。 |
| **[fougue/mayo](https://github.com/fougue/mayo)** | 2,140 | Qt + OCCT 构建的 3D CAD 查看器与转换器，企业级 STEP 互操作能力的开源替代。 |
| **[sgenoud/replicad](https://github.com/sgenoud/replicad)** | 675 | 浏览器内通过代码构建 3D 模型的库，让 Web 应用原生具备 STEP/Brep 级建模能力。 |
| **[andymai/brepjs](https://github.com/andymai/brepjs)** | 95 | TypeScript 精确 B-Rep 几何库，与 occt-wasm 共同推动浏览器 CAD 内核的实用化。 |

### 🐍 Code-CAD 与脚本化

| 项目 | ⭐ | 简介 |
|---|---|---|
| **[CadQuery/cadquery](https://github.com/CadQuery/cadquery)** | 5,669 | 基于 OCCT 的 Python 参数化 CAD 脚本框架，是机械工程师自动化建模的主力工具。 |
| **[pzfreo/draftwright](https://github.com/pzfreo/draftwright)** | 55 | 基于 build123d 与 STEP 的自动化工程图生成，把 Code-CAD 延伸到符合制图标准的出图环节。 |

---

## 五、生态趋势信号

**AI 代理正在成为 CAD 的新交互层**：今日活跃仓库中，`freecad-mcp`、`freecad-ai`、`text-to-cad`、`Kiln`、`anvilate`、`SimpleCADAPI`、`ntopology-mcp` 形成清晰趋势——MCP（Model Context Protocol）已成为 LLM ↔ CAD/CAM 的标准握手协议。**与此同时，OCCT 的 WASM 化是另一条主线**：`occt-wasm`、`brepjs`、`replicad` 共同把工业级 B-Rep 内核搬进浏览器，使 Web 端具备 STEP 级精确建模能力，云端 CAD 的边界被重新定义。**第三股力量是"版本治理"**：FreeCAD History Workbench 将 Git 引入 CAD 文件，是对装配体工程协作痛点的直接回应，预示"CAD-as-Code"将逐步走向主流工程团队的工作流。

---

## 六、值得关注

- 🟢 **[FreeCAD History Workbench](https://blog.freecad.org/2026/08/28/history-workbench-brings-git-powered-file-versioning-to-freecad/)** — Git 化 CAD 版本管理正在重塑开源工程协作模式，建议持续关注其稳定化与生态适配进展。

- 🟢 **[andymai/occt-wasm](https://github.com/andymai/occt-wasm)** + **[brepjs](https://github.com/andymai/brepjs)** — Web 端获得工业级 B-Rep 能力是 2026 年最具长期影响的底层突破之一，将驱动新一代浏览器 CAD、CAM 与协作工具的出现。

- 🟢 **[earthtojake/text-to-cad](https://github.com/earthtojake/text-to-cad)** — 作为拥有 14k+ star 的"CAD Agent 技能库"事实标准，是观察 LLM ↔ CAD 工作流成熟度的最佳窗口。

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*