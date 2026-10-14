# CAD/机械结构开源动态日报 2026-10-14

> 数据来源: GitHub Search API (112 仓库) | ArXiv cs.GR+cs.CG (0 篇论文) | RSS 新闻 (6 条) | 生成时间: 2026-10-14 03:05 UTC

---

# CAD / 机械结构开源动态日报

**日期**：2026-10-13 · **信息源**：FreeCAD Blog / Prusa / Bambu Lab / OpenCASCADE / Hackaday / GitHub Trending

---

## 一、今日速览

FreeCAD 26.3 进入 RC1 阶段，新版主线特性逐步定型；同期 FreeCAD 宣布启动 BIM 主题 Meetup，并展示了用机器学习工作流在 FreeCAD 内优化飞翼气动外形的案例，社区—工具—研究三角的耦合进一步加深。GitHub 端，AI/MCP 与 CAD 工具的"双向对接"仍是过去 7 天最热的演进方向：FreeCAD、3D 打印机、CAD Agent 三类项目都涌现出新的 MCP Server 实现。与此同时，Prusa 推出面向大幅面与材料研发的 Prusament 颗粒料，Bambu Lab 则继续在消费市场端用奖项拓展家庭用户认知。可见今天的核心信号是：**"开源 CAD 的工程化深化 + 生成式/代理式自动化加速渗透"**。

---

## 二、行业脉搏

- **[FreeCAD 26.3 Release Candidate 1](https://blog.freecad.org/2026/10/08/freecad-26-3-release-candidate-1/)** — 主版本进入发布候选阶段，意味着一线特性基本冻结；下游工作台、插件与发行版打包者（如 Homebrew）需开始兼容性回归。
- **[Announcing FreeCAD BIM meetups](https://blog.freecad.org/2026/10/09/announcing-freecad-bim-meetups/)** — 官方开始系统性组织 BIM 方向社区活动，IFC/BIM 工作流（Arch workbench）从兴趣小组向工程生态方向升级。
- **[Machine Optimised Flying Wing Design With FreeCAD](https://blog.freecad.org/2026/10/13/machine-optimised-flying-wing-design-with-freecad/)** — 展示了一个 FreeCAD × 机器学习 × CFD 的端到端案例：将参数化几何 + 仿真作为优化回路，是开源 CAD 进入"设计自动化"阶段的代表性样本。
- **[WIP Wednesday, 7 October 2026](https://blog.freecad.org/2026/10/07/wip-wednesday-7-october-2026/)** — 持续反映核心代码仓的活跃补丁节奏，是 FreeCAD 26.3 临发布前质量态势的窗口。
- **[Prusament Pellets: Raw material batches](https://blog.prusa3d.com/prusament-pellets-raw-material-batches-for-large-format-3d-printing-or-small-scale-polymer-research-development_138773/)** — Prusa 把原厂耗材延伸至颗粒料，意在大幅面 FFF 与材料级 R&D，反映 3D 打印在工业端的进一步上探。

---

## 三、研究前沿

> **本日 cs.GR / cs.CG 抓取为 0 篇**。
> 
> 学术侧今日无新论文入库，不过研究动向仍可通过仓库侧的项目沉淀来侧面观察：例如 [`MeshInspector/MeshLib`](https://github.com/MeshInspector/MeshLib)、[`gkjohnson/three-mesh-bvh`](https://github.com/gkjohnson/three-mesh-bvh)、[`artem-ogre/CDT`](https://github.com/artem-ogre/CDT) 等近期仍保持活跃提交，说明网格布尔 / BVH / 约束 Delaunay 这些 CAD/CAE 底层算法依旧是工程化落地的重点。下一次抓取窗口可关注 ACM SIGGRAPH/IEEE VIS 2026 末班车。

---

## 四、重点项目

### 🖥️ CAD 平台与编辑器

- **[FreeCAD/FreeCAD](https://github.com/FreeCAD/FreeCAD)** — ⭐34,261 · C++ · 3dp/freecad
  主流开源参数化 3D CAD，今天 26.3 RC1 候选发版，是 BIM、SheetMetal、机器人仿真等垂直工作台的底座。

- **[openscad/openscad](https://github.com/openscad/openscad)** — ⭐10,440 · C++ · 3dp/openscad
  "程序员友好的实体建模器"，脚本式几何定义在 3D 打印与硬件迭代场景中地位稳固，配合 BOSL2 生态非常活跃。

- **[solvespace/solvespace](https://github.com/solvespace/solvespace)** — ⭐4,195 · C++ · cad
  轻量级 2D/3D 参数化求解器，适合运动学约束教学与小型装配参考。

- **[xiangechen/chili3d](https://github.com/xiangechen/chili3d)** — ⭐4,908 · TypeScript · cad
  纯浏览器内运行的 3D CAD，免安装、跨平台，对 CAD 工具的"轻交付"形态有示范意义。

- **[HakanSeven12/OpenCADStudio](https://github.com/HakanSeven12/OpenCADStudio)** — ⭐2,985 · Rust · cad
  Rust 实现、GPU 加速渲染并支持 DWG/DXF，代表新一代系统级重写 CAD 的探索方向。

- **[pascalorg/editor](https://github.com/pascalorg/editor)** — ⭐24,845 · TypeScript · cad
  开源 3D 建筑编辑器，内置本地 CLI 与 MCP 工具，把 AI Agent 直接接入 BIM 编辑流程。

### 📐 计算几何与内核

- **[CGAL/cgal](https://github.com/CGAL/cgal)** — ⭐6,078 · C++ · geom
  几何算法领域的"事实标准"，几乎所有严肃 CAD/CAM/CAE 项目都间接依赖其曲面与多面体算法。

- **[Open-Cascade-SAS/OCCT](https://github.com/Open-Cascade-SAS/OCCT)** — ⭐3,005 · C++ · cad
  FreeCAD、CadQuery 等开源 CAD 的内核底座，B-Rep / 布尔 / 拓扑能力来源。

- **[google/draco](https://github.com/google/draco)** — ⭐7,516 · C++ · mesh
  Google 开源的 3D 几何压缩库，Web 与 XR 端几何传输的事实标准。

- **[MeshInspector/MeshLib](https://github.com/MeshInspector/MeshLib)** — ⭐832 · C++ · geom
  工业级网格布尔 / 修复 / 简化 / ICP 配准 SDK，绑定 C++/Python/C#/JS，对 CAE 前处理价值显著。

- **[gkjohnson/three-mesh-bvh](https://github.com/gkjohnson/three-mesh-bvh)** — ⭐3,512 · JavaScript · mesh
  three.js 上最常被引用的 BVH 加速结构，浏览器内大规模网格拾取/物理/CAD 校验的基石。

### 🧬 创成式与参数化设计

- **[partcad/partcad](https://github.com/partcad/partcad)** — ⭐505 · Python · openscad
  "可制造物理产品的包管理器 + 数字主线"，是面向开源硬件的标准件/组件化协作的一次尝试。

- **[clay-good/anvilate](https://github.com/clay-good/anvilate)** — ⭐10 · Python · gendesign
  本地优先的机械工程师 AI 设计 Agent，自然语言直接产出物理校验过的 STEP/DXF + 可编辑 Python 源码。

- **[vykrum/Hywe](https://github.com/vykrum/Hywe)** — ⭐11 · F# · gendesign
  基于关系图与约束规则生成建筑空间布局的计算式设计环境，对参数化城市/建筑探索更友好。

- **[fa-mc/vibe-cading](https://github.com/fa-mc/vibe-cading)** — ⭐8 · Python · gendesign
  用 CadQuery 编排面向人类与 LLM Agent 的 3D 模型生成流水线，"vibe coding" 范式的 CAD 版落地。

### 🖨️ 3D 打印与制造

- **[MarlinFirmware/Marlin](https://github.com/MarlinFirmware/Marlin)** — ⭐17,618 · C++ · 3dp
  8/32 位 MCU 上的事实标准 3D 打印机固件，几乎所有 RepRap 与众多商用机型的基线。

- **[OrcaSlicer/OrcaSlicer](https://github.com/OrcaSlicer/OrcaSlicer)** — ⭐15,942 · C++ · 3dp
  兼容 Bambu/Prusa/Voron/Creality 等多品牌的开源切片器，在高阶功能体验上已逼近商业方案。

- **[Ultimaker/Cura](https://github.com/Ultimaker/Cura)** — ⭐7,051 · Python · 3dp
  老牌开源切片 GUI，Uranium 框架被多个衍生项目复用，仍是行业基线工具。

- **[codeofaxel/Kiln](https://github.com/codeofaxel/Kiln)** — ⭐92 · Python · openscad
  一站式的 3D 打印 MCP Server，让 Agent 直接驱动设计→切片→上机，对"全流程自动化"很有参考价值。

- **[DMontgomery40/mcp-3D-printer-server](https://github.com/DMontgomery40/mcp-3D-printer-server)** — ⭐251 · TypeScript · gcode
  用 MCP 把 Orca、Bambu、OctoPrint、Klipper、Duet 等封装成统一接口，含 STL 几何操作。

### 🔗 文件格式与互操作

- **[Keychron/Keychron-Keyboards-Hardware-Design](https://github.com/Keychron/Keychron-Keyboards-Hardware-Design)** — ⭐3,763 · — · 3dp
  工业设计资产的范例：100+ 型号的 STEP / DXF / DWG / PDF 同时开源，是消费硬件"开放设计资产"标杆。

- **[angel291592/caddiff](https://github.com/angel291592/caddiff)** — ⭐95 · Python · freecad
  STEP 装配的 git diff 工具：输入两个 STEP 文件，输出可视化变更图 + 机读变更列表，把版本控制正式带入 CAD。

- **[eblanshey/HistoryWorkbench](https://github.com/eblanshey/HistoryWorkbench)** — ⭐164 · Python · freecad
  在 FreeCAD 中追踪模型演化历史并支持 3D + 树形可视化对比，应对"图纸改了看不出"的协作痛点。

### 🐍 Code-CAD 与脚本化

- **[CadQuery/cadquery](https://github.com/CadQuery/cadquery)** — ⭐5,929 · Python · cad
  基于 OCCT 的 Python 参数化 CAD 脚本框架，是 Code-CAD 生态的事实标准之一。

- **[gumyr/build123d](https://github.com/gumyr/build123d)** — ⭐3,404 · Python · 3dp
  新一代 Python CAD 编程库，引入"Mode"/"BuildLine/BuildSketch"等更现代的 API 体例。

- **[ad-si/LuaCAD](https://github.com/ad-si/LuaCAD)** — ⭐130 · Rust · openscad
  使用 Lua 做参数化 CAD，强调脚本友好与轻量，对喜欢 Lua/Python 这类轻语法的工程师有价值。

-

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*