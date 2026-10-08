# CAD/机械结构开源动态日报 2026-10-08

> 数据来源: GitHub Search API (109 仓库) | ArXiv cs.GR+cs.CG (0 篇论文) | RSS 新闻 (2 条) | 生成时间: 2026-10-08 03:59 UTC

---

# CAD/机械结构开源动态日报

**日期：2026 年 10 月 8 日**

---

## 一、今日速览

今日开源 CAD 生态有两大主线值得关注：一是 **FreeCAD 体系持续扩张**——官方 Blog 同步发布 WIP Wednesday（10/7）与 2026 Q3 资助项目名单，意味着核心代码、第三方 Workbench 与 AI 插件同步进入活跃迭代周期；二是 **AI × CAD 在工程端的"最后一公里"加速落地**——以 [anvilate](https://github.com/clay-good/anvilate)、[variant-design-skill](https://github.com/YuqingNicole/variant-design-skill)、[kiln](https://github.com/codeofaxel/Kiln) 为代表的项目已不再满足于"草图生几何"，而是直连 STEP/PCB/Marlin 切片/打印机的端到端流水线；与此同时，**OCCT 生态进一步向 WebAssembly 渗透**（[occt-wasm](https://github.com/andymai/occt-wasm)、[brepjs](https://github.com/andymai/brepjs)、[cadrum](https://github.com/lzpel/cadrum)），为浏览器内 B-Rep 引擎铺平道路。arXiv cs.GR / cs.CG 今日无新增预印本，研究侧信号暂缺。

---

## 二、行业脉搏

1. **[WIP Wednesday, 7 October 2026 — FreeCAD Blog](https://blog.freecad.org/2026/10/07/wip-wednesday-7-october-2026/)**
   FreeCAD 核心团队的每周开发进展汇总（WIP Wednesday）。意义：这是社区了解 Toponaming/Part Design/Assembly 等长期痛点修复节奏的第一手窗口，反映 FreeCAD 1.x 系列迈向稳定可生产版本的关键期。

2. **[2026 Q3 grant program: funded projects — FreeCAD Blog](https://blog.freecad.org/2026/10/02/2026-q3-grant-program-funded-projects/)**
   FreeCAD 基金会 Q3 资助名单公布，多个 Workbench、UI、文档与教育项目获得资金支持。意义：在 1.0 发布前夕，基金会通过小额资助把"边角功能"转正，是开源 CAD 难得的可持续运营样本，对其他项目（如 OpenSCAD、LibreCAD）具有借鉴价值。

3. **(延伸观察)** **OCCT WebAssembly 化趋势加速**：本周 GitHub 趋势显示 [occt-wasm](https://github.com/andymai/occt-wasm)（⭐59）、[brepjs](https://github.com/andymai/brepjs)（⭐114）、[cadrum](https://github.com/lzpel/cadrum)（⭐66）三条独立技术线均在 7 天内提交，意味着"浏览器内原生 B-Rep 引擎"已从概念验证进入工程可用阶段。

4. **(延伸观察)** **Bambu Lab 去云化生态成型**：在 X1C/H2D 用户对强制云账户反弹的背景下，[bambuddy](https://github.com/maziggy/bambuddy)（⭐3,061）继续活跃迭代，叠加 [Kiln](https://github.com/codeofaxel/Kiln)、[Mainsail](https://github.com/mainsail-crew/mainsail)，"本地优先 + 多固件兼容"正成为消费级 3D 打印新基线。

---

## 三、研究前沿

> ⚠️ **今日 arXiv cs.GR / cs.CG 暂无新增相关预印本。**
>
> 在缺乏当日新论文的情况下，结合仓库侧信号，**以下三个方向在学术界与工程界都处于明显的"产出空窗 → 应用爆发"切换期**，值得持续跟踪：
>
> - **大语言模型驱动的参数化 CAD 生成**（对应 [text-to-cad](https://github.com/earthtojake/text-to-cad)、[CADAM](https://github.com/Adam-CAD/CADAM)、[anvilate](https://github.com/clay-good/anvilate)）。
> - **B-Rep 几何核的 WebAssembly 移植与形式化验证**（对应 [occt-wasm](https://github.com/andymai/occt-wasm)、[brepjs](https://github.com/andymai/brepjs)）。
> - **网格布尔运算与修复的并行/GPU 加速**（对应 [MeshInspector/MeshLib](https://github.com/MeshInspector/MeshLib)、[three-gpu-pathtracer](https://github.com/gkjohnson/three-gpu-pathtracer)）。
>
> 建议后续几日重点关注 SIGGRAPH 2026 截稿前后、IEEE VIS 与 CADCG 会议是否有几何核/参数化方向的预印本放出。

---

## 四、重点项目

### 🖥️ CAD 平台与编辑器

- **[FreeCAD/FreeCAD](https://github.com/FreeCAD/FreeCAD)** ⭐34,016
  开源跨平台参数化 3D 建模旗舰，仍是机械设计领域事实上的"Linux 桌面 CAD"标准，本周动态由官方 Blog 双发印证。

- **[pascalorg/editor](https://github.com/pascalorg/editor)** ⭐24,719
  开源 3D 建筑编辑器，集成本地 CLI、MCP 工具与面向 AI Agent 的工作流；标志着建筑 BIM 开始向"AI 协作编辑器"形态演进。

- **[openscad/openscad](https://github.com/openscad/openscad)** ⭐10,385
  面向程序员的实体建模语言，与 CadQuery/build123d 共同构成 Code-CAD 生态底层；3D 打印用户群体基础最广。

- **[HakanSeven12/OpenCADStudio](https://github.com/HakanSeven12/OpenCADStudio)** ⭐2,518
  用 Rust 重写的 2D/3D CAD 应用，支持 DWG/DXF 与 GPU 加速渲染，是新一代内存安全 CAD 栈的代表探索。

### 📐 计算几何与内核

- **[Open-Cascade-SAS/OCCT](https://github.com/Open-Cascade-SAS/OCCT)** ⭐2,966
  工业级开源 B-Rep/CAM/CAE 几何内核，几乎所有现代开源 CAD（FreeCAD、KiCad-STEP、Mayo、CadQuery、build123d）均依赖其底层，是整个生态的"承重墙"。

- **[CGAL/cgal](https://github.com/CGAL/cgal)** ⭐6,068
  C++ 计算几何算法库（Delaunay、布尔、网格生成、Alpha Shapes），科研与工业几何处理的事实标准。

- **[MeshInspector/MeshLib](https://github.com/MeshInspector/MeshLib)** ⭐830
  3D 几何处理 SDK：高速网格布尔、修复、抽稀、重网格化、点云三角化与 ICP 配准，并提供 Python/C#/JS 绑定——是网格域补齐 OCCT 短板的关键拼图。

### 🧬 创成式与参数化设计

- **[earthtojake/text-to-cad](https://github.com/earthtojake/text-to-cad)** ⭐18,313
  让 AI Agent 拥有 CAD 超能力的 Python 库，是当下"LLM → 几何"流派最受欢迎的桥接项目。

- **[Adam-CAD/CADAM](https://github.com/Adam-CAD/CADAM)** ⭐5,218
  开源 Text-to-CAD Web 应用，对标商业 Autodesk Forma/Fusion 内的生成式模块，提供可自托管替代品。

- **[clay-good/anvilate](https://github.com/clay-good/anvilate)** ⭐10
  本地优先的机械工程师设计 Agent：自然语言 → 物理校验 → 参数化 STEP/DXF → CATIA/SolidWorks/NX/AutoCAD 可编辑源码，是"AI 生成可制造件"的代表性新尝试。

### 🖨️ 3D 打印与制造

- **[OrcaSlicer/OrcaSlicer](https://github.com/OrcaSlicer/OrcaSlicer)** ⭐15,885
  兼容 Bambu、Prusa、Voron、VzBot、RatRig、Creality 等主流机的开源 G-code 生成器，在工程师/创客切片工具中是当下活跃度最高的项目。

- **[maziggy/bambuddy](https://github.com/maziggy/bambuddy)** ⭐3,061
  Bambu Lab 打印机的自托管"指挥中心"，去云化、可管理从单台 A1 到整个打印农场，体现"本地优先"3D 打印趋势。

- **[mainsail-crew/mainsail](https://github.com/mainsail-crew/mainsail)** ⭐2,222
  Klipper 固件的 Web 前端事实标准，与 Moonraker/Fluidd 一起构成开源 3D 打印控制平面。

### 🔗 文件格式与互操作

- **[fougue/mayo](https://github.com/fougue/mayo)** ⭐2,279
  基于 Qt + OpenCascade 的 3D CAD 查看器与转换器，是 STEP/IGES/mesh 跨格式交互链路的轻量桌面工具。

- **[partcad/partcad](https://github.com/partcad/partcad)** ⭐503
  面向"可制造物理产品"的包管理器（Digital Thread / TDP 标准），试图像 npm/pip 一样管理标准件、组件库与设计资产。

- **[andymai/occt-wasm](https://github.com/andymai/occt-wasm)** ⭐59
  将整套 OpenCascade 编译为 WebAssembly（约 4 MB brotli），提供 TypeScript API 与 Web Worker 支持——浏览器内 B-Rep 引擎的使能技术。

### 🐍 Code-CAD 与脚本化

- **[CadQuery/cadquery](https://github.com/CadQuery/cadquery)** ⭐5,896
  基于 OCCT 的 Python 参数化 CAD 脚本框架，是 Code-CAD 生态的"事实工业标准"，广泛用于自动化设计、夹具库与流水线建模。

- **[gumyr/build123d](https://github.com/gumyr/build123d)** ⭐3,341
  新一代 Python CAD 编程库，以"3D 优先 + 显式拓扑"重新组织 API，正在快速取代 CadQuery 的部分设计场景。

- **[pzfreo/draftwright](https://github.com/pzfreo/draftwright)** ⭐71
  从 build123d / STEP 文件自动生成符合 ISO 的工程图（技术图纸），补齐 Code-CAD 流水线中"模型 → 图纸"的最后一环。

---

## 五、生态趋势信号

本周信号呈"**AI × CAD 从绘图向制造下沉**"的清晰迁移：[anvilate](https://github.com/clay-good/anvilate) 把 STEP 直接写进 SolidWorks/NX 工作流，[Kiln](https://github.com/codeofaxel/Kiln) 把 OpenSCAD 接到 Bambu/Klipper/Marlin 切片链路，[variant-design-skill](https://github.com/YuqingNicole/variant-design-skill) 则把生成式探索塞进 Claude Code 的 IDE 插件层——共同特征是"**自然语言 → 可编辑参数化几何 → 物理/工艺验证 → 可制造文件**"。底层支撑侧，OCCT 的 WASM 化（[occt-wasm](https://github.com/andymai/occt-wasm)、[brepjs](https://github.com/andymai/brepjs)）与 Rust 重写潮（[OpenCADStudio](https://github.com/HakanSeven12/OpenCADStudio)、[cadrum](https://github.com/lzpel/cadrum)、[sparrow](https://github.com/JeroenGar/sparrow)）同步加速，预示浏览器内 B-Rep、内存安全几何栈将在 2027 年成为新基线。FreeCAD 通过 Q3 grant 把多个 Workbench 与 AI/UI 改造"正职化"，则是另一种方向：用社区资助机制撑住 Linux 桌面 CAD 的长尾工程能力。

---

## 六、值得关注

1. **[anvilate — Local-first Design Agent for Mechanical Engineers](https://github.com/clay-good/anvilate)**
   值得跟进：它是少数明确把"自然语言 → 物理校验 STEP/DXF → 主流 CAD 可编辑 Python 源码"作为单链路闭环的本地工具，规避了云端 LLM 的 IP/合规风险，对企业研发流程的接入门槛最低；如能跑通复杂装配，将是 2027 年最关键的工程级 AI-CAD 范式之一。

2. **[OCCT WebAssembly 生态（occt-wasm + brepjs + cadrum）](https://github.com/andymai/occt-wasm)**
   值得跟进：三者分别代表"通用编译产物、Web 端 B-Rep 库、Rust crate + WASM"三条独立技术线

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*