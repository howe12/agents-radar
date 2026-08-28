# CAD/机械结构开源动态日报 2026-08-28

> 数据来源: GitHub Search API (112 仓库) | ArXiv cs.GR+cs.CG (0 篇论文) | RSS 新闻 (3 条) | 生成时间: 2026-08-28 08:29 UTC

---

# CAD/机械结构开源动态日报

**日期：2026-08-27 ｜ 涵盖：行业新闻 · 学术论文 · GitHub 仓库**

---

## 一、今日速览

今日开源 CAD 生态呈现出鲜明的"AI 原生化"与"浏览器化"双主线。FreeCAD 在 OSHOP 2026 上与 KiCad 联袂登场，标志开源电气—机械一体化设计进入公众视野；GitHub 侧，MCP（Model Context Protocol）服务器类工具密集涌现（freecad-mcp、Kiln、SimpleCADAPI、spec-3d-model），LLM 驱动的"自然语言→可编辑三维模型"流水线正快速从演示走向可用。同时，OCCT-WASM、brepjs、PicoGK 等项目推动 CAD 引擎从桌面走向浏览器与嵌入式。今日无可用 cs.GR/cs.CG 论文数据，研究前沿一栏将以仓库侧的技术突破作为替代观察样本。

---

## 二、行业脉搏

1. **[WIP Wednesday, 26 August 2026](https://blog.freecad.org/2026/08/27/wip-wednesday-26-august-2026/) — FreeCAD Blog**
   延续已久的"WIP Wednesday"展示本周 FreeCAD 主仓与外围工作台的活跃开发。意义在于让用户每周都能直接观察核心代码、Part Design、装配、Sketcher 等模块的演进，是 FreeCAD 项目透明度与社区参与度的旗舰栏目。

2. **[FreeCAD and KiCad: CAD showdown at OSHOP 2026](https://blog.freecad.org/2026/08/21/freecad-and-kicad-cad-showdown-at-oshop-2026/) — FreeCAD Blog**
   两大开源工具在 OSHOP 2026 同台竞技，FreeCAD 负责机械、KiCad 负责电气。对机械设计领域的意义在于：**机电一体化（mechatronics）开源闭环的成型**——从外壳、连接器到 PCB 全部由开源工具链覆盖，是工业用户评估"开源替代"可行性的关键参照。

3. **[DIY Summer Sandals by Sofia Rousinovich](https://blog.bambulab.com/diy-summer-sandals-by-sofia-rousinovich/) — Bambu Lab**
   Sofia Rousinovich 在 Bambu 官方博客展示可定制 3D 打印凉鞋。意义：消费级桌面 FDM 正在从原型向"个人定制可穿戴"延伸，参数化设计语言（此处为结构化鞋面 lattice）借助桌面打印机进入消费品市场。

---

## 三、研究前沿

> ⚠️ 今日 cs.GR / cs.CG 频道无新论文入库。以下三条替代观察聚焦于**仓库中具备研究属性的项目**，追踪 CAD/CG 领域的工程前沿：

1. **[leap71/PicoGK](https://github.com/leap71/PicoGK)（⭐1,068）** — 由 Leap71（前 Autodesk Bio/Nano 团队）开源的"计算工程"几何内核，已脱离论文形式进入工业可用阶段，是生成式工程（Gendesign）从学术走向产品化的代表。

2. **[connorkapoor/geofield-bracket](https://github.com/connorkapoor/geofield-bracket)（⭐46）** — 提出 SE(3)-等变潜向量用于"几何+物理+可制造性"联合建模，并内置沉浸式 FEA 与在线 3D 设计师；这是当前稀疏的"物理约束生成式结构设计"研究方向的工程实现样本。

3. **[Open-Cascade-SAS/OCCT](https://github.com/Open-Cascade-SAS/OCCT)（⭐2,806）** — OCCT 主仓持续活跃，本周配合多个 wasm/wrapper 项目（occt-wasm、brepjs、replicad）共同构成"浏览器内 B-Rep"基础设施，是几何内核研究的重要观察点。

---

## 四、重点项目

### 🖥️ CAD 平台与编辑器

- **[FreeCAD/FreeCAD](https://github.com/FreeCAD/FreeCAD)** ⭐33,113
  官方 FreeCAD 主仓，跨平台参数化 3D 建模。开源 CAD 事实标准；机械设计社区最重要的基座项目。

- **[openscad/openscad](https://github.com/openscad/openscad)** ⭐10,036
  面向程序员的实体 3D CAD 建模器（脚本驱动）。脚本化 CAD 范式的开山之作，是 code-CAD 文化的源头。

- **[xiangechen/chili3d](https://github.com/xiangechen/chili3d)** ⭐4,777
  完全运行在浏览器中的 3D CAD。证明 OCCT 级几何可在浏览器承载，是 Web-CAD 路线的关键样板。

- **[solvespace/solvespace](https://github.com/solvespace/solvespace)** ⭐4,118
  参数化 2D/3D CAD，体量小、约束求解器独立实现。教学与嵌入式场景首选，对资源受限的机械设计流程极具价值。

- **[Adam-CAD/CADAM](https://github.com/Adam-CAD/CADAM)** ⭐5,023
  开源"文本→CAD" Web 应用。AI 原生 CAD 在 Web 端的代表性落地。

### 📐 计算几何与内核

- **[Open-Cascade-SAS/OCCT](https://github.com/Open-Cascade-SAS/OCCT)** ⭐2,806
  Open CASCADE Technology，B-Rep 几何/拓扑/布尔/扫掠的工业级内核；几乎所有开源 CAD/CAE 都依赖其上游。

- **[CGAL/cgal](https://github.com/CGAL/cgal)** ⭐6,026
  C++ 计算几何算法库。Delaunay、布尔、网格生成等核心算法事实标准，对机械仿真预处理尤为关键。

- **[mikedh/trimesh](https://github.com/mikedh/trimesh)** ⭐3,662
  Python 三角网格库，STL/OBJ/3MF/STEP 输入输出。设计→CAE 流水线中的"网格桥梁"。

### 🧬 创成式与参数化设计

- **[neka-nat/freecad-mcp](https://github.com/neka-nat/freecad-mcp)** ⭐1,929
  FreeCAD 的 MCP 服务器，让 LLM 通过标准化协议直接操控 FreeCAD。是"LLM-CAD"路径的标杆项目。

- **[ghbalf/freecad-ai](https://github.com/ghbalf/freecad-ai)** ⭐442
  FreeCAD 内置 AI 工作台，自然语言生成三维模型。与 MCP 路线互补，是 GUI 侧的 AI 集成样本。

- **[leap71/PicoGK](https://github.com/leap71/PicoGK)** ⭐1,068
  紧凑稳健的计算工程几何内核，承载 Leap71 的"生成式物理硬件"设计方法论。

- **[clay-good/anvilate](https://github.com/clay-good/anvilate)** ⭐6
  本地优先的开源机械设计 Agent，自然语言→物理验证的 STEP/DXF，可直接进入 CATIA/SolidWorks/NX。代表"Agent-native CAD"新范式。

### 🖨️ 3D 打印与制造

- **[MarlinFirmware/Marlin](https://github.com/MarlinFirmware/Marlin)** ⭐17,555
  RepRap 3D 打印机固件事实标准，覆盖 8/32 位 MCU。绝大多数桌面 FDM 硬件依赖。

- **[OrcaSlicer/OrcaSlicer](https://github.com/OrcaSlicer/OrcaSlicer)** ⭐15,508
  跨品牌切片器（Bambu/Prusa/Voron/Creality/VzBot 等）。当下最活跃的消费级切片项目。

- **[Sienci-Labs/gsender](https://github.com/Sienci-Labs/gsender)** ⭐365
  连接 grbl / grblHAL CNC 的 TypeScript 控制软件。开源 CNC 领域的"OctoPrint 等价物"。

- **[XRay3D/GERBER_X3](https://github.com/XRay3D/GERBER_X3)** ⭐253
  为 CNC 铣削 PCB 准备 G-code 并可导出 PDF。打通"电子→机加工"链路的实用工具。

### 🔗 文件格式与互操作

- **[f3d-app/f3d](https://github.com/f3d-app/f3d)** ⭐4,652
  极速极简 3D 查看器，VTK 后端。日常审阅 STEP/3MF/GLB 等格式最便利的开源工具。

- **[fougue/mayo](https://github.com/fougue/mayo)** ⭐2,136
  基于 Qt + OCCT 的 3D CAD 查看器/转换器。工程师在不开 SolidWorks 的情况下处理 STEP/IGES 的首选。

- **[bldrs-ai/Share](https://github.com/bldrs-ai/Share)** ⭐184
  浏览器端 BIM/CAD 协作查看器（IFC/STEP/STL/GLTF）。云协作与轻量化交付的新入口。

### 🐍 Code-CAD 与脚本化

- **[CadQuery/cadquery](https://github.com/CadQuery/cadquery)** ⭐5,659
  基于 OCCT 的 Python 参数化 CAD 脚本框架。code-CAD 在 Python 生态的旗舰；可程序化生成 STEP 文件直接进入制造流程。

- **[earthtojake/text-to-cad](https://github.com/earthtojake/text-to-cad)** ⭐13,971
  CAD/CAE/CAM 的 Agent Skills 库。相当于 LLM 工程师与制造工程师之间的"工具调用规范层"。

- **[andymai/occt-wasm](https://github.com/andymai/occt-wasm)** ⭐48
  OpenCascade 编译到 WebAssembly（≈4 MB brotli），含 TypeScript API 与 Web Worker 支持。把 B-Rep 内核带上 Web。

- **[andymai/brepjs](https://github.com/andymai/brepjs)** ⭐93
  浏览器 Web CAD 库，使用精确 B-Rep 几何。与 occt-wasm 配合可在浏览器内做完整实体建模。

- **[NiJingzhe/SimpleCADAPI](https://github.com/NiJingzhe/SimpleCADAPI)** ⭐104
  Agent-native 的 CAD SDK，专为 LLM 设计：用代码创建/检视/重建可编辑的复杂三维模型。

- **[codeofaxel/Kiln](https://github.com/codeofaxel/Kiln)** ⭐49
  开源 3D 打印 MCP 服务器，覆盖设计→切片→打印全链路，兼容 Bambu/Prusa/Creality/Klipper 等多种固件。MCP 在制造侧的落地代表。

---

## 五、生态趋势信号

开源 CAD/机械设计生态正在从"工具分散"走向"协议聚合"。**MCP（Model Context Protocol）正快速成为 LLM ↔ CAD 工具的事实桥梁**——freecad-mcp、Kiln、SimpleCADAPI、spec-3d-model 在同一周活跃，反映 Agent-native 设计流水线已被工业级用户接受。同时，**B-Rep 引擎全面 WebAssembly 化**（occt-wasm + brepjs + replicad）正在催生"无需安装的浏览器 CAD"产品形态，对 SolidWorks Onshape 模式形成实质性开源竞争。在生成式一侧，**物理约束 + 等变网络 + 沉浸式 FEA**（geofield-bracket、Anvilate、PicoGK）开始打通"自然语言→可制造零件"链路，预示 2026–2027 年将是"AI 机械工程师"工具从 Demo 走向生产的拐点。

---

## 六、值得关注

1. **FreeCAD MCP 与 FreeCAD-AI 的双轨竞争**
   （[neka-nat/freecad-mcp](https://github.com/neka-nat/freecad-mcp) ⭐1,929 vs [ghbalf/freecad-ai](https://github.com/ghbalf/freecad-ai) ⭐442）— 同样瞄准 LLM × FreeCAD，前者押注协议化、后者押注 GUI 集成；其路线分化将决定未来 Agent 与传统 CAD 用户的协作形态，值得持续跟踪。

2. **B-Rep → WebAssembly 基础设施的成熟**
   （[andymai/occt-wasm](https://github.com/andymai/occt-wasm) ⭐48 · [andymai/brepjs](https://github.com/andymai/brepjs) ⭐93 · [sgenoud/replicad](https://github.com/sgenoud/replicad) ⭐676）— OCCT 在浏览器中可用且体积仅 4MB，意味着"完整参数化实体建模 SaaS"的开源实现路径已被打通，可能重塑中小企业 CAD 采购模式。

3. **OSHOP 2026：FreeCAD × KiCad 同台**
   （[CAD showdown](https://blog.freecad.org/2026/08/21/freecad-and-kicad-cad-showdown-at-oshop-2026/)）— 机电一体化开源闭环首次获得主流会议正式背书，是评估"开源工具链替代 Altium Designer + SolidWorks"可行性的关键事件，建议关注会后公开讲稿与现场演示数据。

---

*日报由 CAD/机械结构开源动态追踪系统自动汇编。*

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*