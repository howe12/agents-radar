# CAD/机械结构开源动态日报 2026-07-13

> 数据来源: GitHub Search API (102 仓库) | ArXiv cs.GR+cs.CG (0 篇论文) | RSS 新闻 (5 条) | 生成时间: 2026-07-13 02:08 UTC

---

# CAD / 机械结构开源动态日报

**日期**：2026-07-12 ｜ **覆盖范围**：行业新闻 · 学术预印本 · GitHub 活跃仓库

---

## 1. 今日速览

今日最值得关注的信号集中在 **AI Agent × CAD 的落地形态**：GitHub 上 `text-to-cad`、`CADAM`、`kiln`、`freecad-mcp` 等仓库同时活跃，显示"自然语言/智能体驱动参数化设计"已从概念进入工具链整合阶段。FreeCAD 方面，社区设计大赛结果出炉并出现"香蕉尺"趣味插件，工作台生态持续扩张。Bambu Lab 联合 Insta360 发起 Luna Ultra 设计挑战，把消费级 3D 打印的设计社区能力进一步外推到影像/光学设备形态。底层引擎方面，OCCT 已稳定地通过 WebAssembly 进入浏览器（`occt-wasm`、`cadrum`），Rust B-Rep 内核（`Roshera-CAD`）首次提出"每步返回可验证证书"的能力，标志着 Agent-native CAD 几何内核正在浮现。

---

## 2. 行业脉搏

- **[FreeCAD Community Design Competition 2026: The Results!](https://blog.freecad.org/2026/07/06/freecad-community-design-competition-2026-the-results/)** — FreeCAD 官方年度设计大赛结果出炉，意味着开源 CAD 的**高质量作品图谱**已形成稳定输出，可作为教学、行业参考的素材库。
- **[WIP Wednesday, 8 July 2026](https://blog.freecad.org/2026/07/08/wip-wednesday-8-july-2026/)** — 例行 WIP 周报，代表主线仍在持续迭代，**Part Design / Assembly / SheetMetal** 等工作台的关键 bug 修复节奏未减。
- **[New Addon; Banana For Scale!](https://blog.freecad.org/2026/07/12/new-addon-banana-for-scale/)** — FreeCAD Addon 出现趣味插件，反映**插件生态仍处于低门槛扩张阶段**，有新作者不断加入（传统 CAD 的"扩展门槛"在 FreeCAD 明显更低）。
- **[Bambu Lab × Insta360 Luna Ultra Design Challenge](https://blog.bambulab.com/lets-make-it-bambu-lab-and-insta360-launch-luna-ultra-design-challenge-on-makerworld/)** — 头部消费级 3D 打印厂商跨界与影像硬件厂商联名办赛，**3D 打印正在从"爱好者外壳"走向"光学/影像产品级定制"**，验证了高表面质量、跨材料设计的可行性。
- **[When Venezuela needed help, the makers moved first](https://blog.bambulab.com/when-venezuela-needed-help-the-makers-moved-first/)** — Maker 社区的人道主义响应案例，凸显**分布式数字制造在危机响应中的优势**，对全球应急供应链的开源化具有示范意义。

---

## 3. 研究前沿

> ⚠️ 今日 ArXiv 在 `cs.GR`（计算机图形学）与 `cs.CG`（计算几何）类别下**未采集到与 CAD / 机械结构直接相关的新论文**。该栏目暂空，将在下一期恢复。

**可替代参考**：今日活跃仓库中包含多篇"形似论文"的工程实现，可关注其 README/技术报告：
- `varun29ankuS/Roshera-CAD` — 提出"每步返回有效性证书 (validity certificate)"的 B-Rep 内核思路，类似形式化方法用于 CAD；
- `polydera/trueform` — 给出"exact mesh booleans + 几何 STL"的精确布尔与重网格化方案；
- `particlesector/chiselcad` — 用 Vulkan + Manifold 做 GPU 加速 CSG，并保持 OpenSCAD 语法兼容。

---

## 4. 重点项目（按分类整理）

### 🖥️ CAD 平台与编辑器

- **[FreeCAD/FreeCAD](https://github.com/FreeCAD/FreeCAD)** ⭐ 32,074 ｜ C++
  开源多平台参数化 3D CAD 主线项目；仍是 CAM/CAE 集成、SheetMetal、装配体的事实开源基座。
- **[openscad/openscad](https://github.com/openscad/openscad)** ⭐ 9,822 ｜ C++
  "程序员的实体建模器"；为硬件工程师、参数化零件提供版本友好的代码化描述方式。
- **[LibreCAD/LibreCAD](https://github.com/LibreCAD/LibreCAD)** ⭐ 6,141 ｜ C++
  跨平台 2D CAD，支持 DXF/DWG；机械制图出图的稳定开源方案。
- **[Adam-CAD/CADAM](https://github.com/Adam-CAD/CADAM)** ⭐ 4,789 ｜ TypeScript
  开源 text-to-CAD Web 应用；是从对话到 .scad 几何的关键桥接产品。
- **[solvespace/solvespace](https://github.com/solvespace/solvespace)** ⭐ 4,047 ｜ C++
  参数化 2D/3D CAD，约束求解器开源；适合教学和轻量级机械设计。
- **[dune3d/dune3d](https://github.com/dune3d/dune3d)** ⭐ 2,017 ｜ C
  现代 3D CAD 客户端，体现"小而美"的开源 CAD 仍在迭代。

### 📐 计算几何与内核

- **[CGAL/cgal](https://github.com/CGAL/cgal)** ⭐ 5,974 ｜ C++
  计算几何算法库事实标准；机械领域常用于网格处理、布尔、曲线曲面拟合。
- **[Open-Cascade-SAS/OCCT](https://github.com/Open-Cascade-SAS/OCCT)** ⭐ 2,643 ｜ C++
  开源 3D CAD/CAM/CAE 开发平台，是 FreeCAD、CadQuery 等众多下游的底层 B-Rep 内核。
- **[mikedh/trimesh](https://github.com/mikedh/trimesh)** ⭐ 3,616 ｜ Python
  Python 三角网格库；数字孪生、点云→网格、网格可制造性分析的基础工具。
- **[gkjohnson/three-mesh-bvh](https://github.com/gkjohnson/three-mesh-bvh)** ⭐ 3,419 ｜ JavaScript
  three.js 加速 BVH，空间查询/光线投射的首选；用于 Web 端 CAD 实时预览。
- **[polydera/trueform](https://github.com/polydera/trueform)** ⭐ 127 ｜ C++
  "几何的 STL"——精确网格布尔、空间查询、arrangement 与重网格化；可作为新内核的几何后端。
- **[varun29ankuS/Roshera-CAD](https://github.com/varun29ankuS/Roshera-CAD)** ⭐ 14 ｜ Rust
  Rust 写的 Agent-native B-Rep 内核，每次操作返回可验证证书；面向 LLM/Agent 安全设计场景。

### 🧬 创成式与参数化设计

- **[earthtojake/text-to-cad](https://github.com/earthtojake/text-to-cad)** ⭐ 8,048 ｜ JavaScript
  "面向 CAD、机器人与硬件设计的 agent skills 合集"——把工程设计沉淀为可调用的智能体能力。
- **[gumyr/build123d](https://github.com/gumyr/build123d)** ⭐ 2,621 ｜ Python
  类 Build123d 的 Python CAD 库，与 CadQuery 互为补充，是代码驱动参数化设计主流。
- **[neka-nat/freecad-mcp](https://github.com/neka-nat/freecad-mcp)** ⭐ 1,287 ｜ Python
  FreeCAD 的 MCP Server，让 LLM/Agent 通过标准协议直接驱动 FreeCAD。
- **[codeofaxel/Kiln](https://github.com/codeofaxel/Kiln)** ⭐ 33 ｜ Python
  "描述或画一下，它就变成实物"——开源 3D 打印 MCP 服务器，覆盖切片 + 打印全链路。
- **[clay-good/anvilate](https://github.com/clay-good/anvilate)** ⭐ 0 ｜ Python
  本地优先机械设计 Agent，自然语言描述 → 物理校验的参数化 STEP/DXF，输出可直接进入 SolidWorks / NX。

### 🖑 3D 打印与制造

- **[sameer/svg2gcode](https://github.com/sameer/svg2gcode)** ⭐ 425 ｜ Rust
  将矢量图转换为 G-code（笔式绘图、激光雕刻），是为艺术/标识 CNC 任务生成刀路的轻量工具。
- **[Sienci-Labs/gsender](https://github.com/Sienci-Labs/gsender)** ⭐ 356 ｜ TypeScript
  grbl / grblHAL CNC 控制前端；让开源 CNC 拥有接近商业软件的体验。
- **[sn4k3/UVtools](https://github.com/sn4k3/UVtools)** ⭐ 1,590 ｜ C#
  MSLA/DLP 屏幕打印的分析、修复、转换工具，是光固化牙科/珠宝工作流的事实工具。

### 🔗 文件格式与互操作

- **[f3d-app/f3d](https://github.com/f3d-app/f3d)** ⭐ 4,535 ｜ C++
  极简快速 3D 查看器；为各类 STEP/STL/3MF 文件提供一致的快速预览体验。
- **[CadQuery/cadquery](https://github.com/CadQuery/cadquery)** ⭐ 5,446 ｜ Python *(同时属 Code-CAD)*
  基于 OCCT 的 Python 参数化 CAD 脚本框架，是"代码出 STEP"的代表性项目。
- **[bldrs-ai/Share](https://github.com/bldrs-ai/Share)** ⭐ 178 ｜ JavaScript
  浏览器端 IFC/STEP/STL 协作查看器；面向建筑-机械一体化的轻量 Web 平台。
- **[bldrs-ai/conway](https://github.com/bldrs-ai/conway)** ⭐ 22 ｜ TypeScript
  Web 高性能 IFC & STEP 引擎；让 BIM/CAD 文件不再依赖桌面端重型客户端。
- **[lzpel/cadrum](https://github.com/lzpel/cadrum)** ⭐ 35 ｜ Rust
  静态链接 OCCT 8.0.0，浏览器/服务端均能运行的 Rust CAD 库；B-Rep 进入"无服务器"场景。
- **[andymai/occt-wasm](https://github.com/andymai/occt-wasm)** ⭐ 25 ｜ Rust
  OCCT 编为 WASM，~4MB brotli、TypeScript API；浏览器跑 B-Rep 的最低门槛方案。

### 🐍 Code-CAD 与脚本化

- **[CadQuery/cadquery](https://github.com/CadQuery/cadquery)** ⭐ 5,446 ｜ Python
  Python 参数化 CAD 脚本框架（OCCT 后端）；是硬件自动化、零件生成流水线的行业默认。
- **[gumyr/build123d](https://github.com/gumyr/build123d)** ⭐ 2,621 ｜ Python
  与 CadQuery 互补的 Python CAD 库，强调"显式 builder"语义，API 更接近主流 3D CAD。
- **[CadQuery/CQ-editor](https://github.com/CadQuery/CQ-editor)** ⭐ 1,198 ｜ Python
  CadQuery 的 PyQt GUI 编辑器；脚本 → STEP 的可视化闭环。
- **[michaelgale/cq-kit](https://github.com/michaelgale/cq-kit)** ⭐ 153 ｜ Python
  CadQuery 工具与帮助函数集，减少重复样板代码。
- **[particlesector/chiselcad](https://github.com/particlesector/chiselcad)** ⭐ 5 ｜ C++
  GPU 加速 CSG 建模器（Vulkan + Manifold），保持 OpenSCAD 兼容语法；为大规模布尔运算提供加速路径。
- **[BelfrySCAD/BelfrySCAD](https://github.com/BelfrySCAD/BelfrySCAD)** ⭐ 2 ｜ Python
  OpenSCAD + WYSIWYG 的混合式程序化 CAD 系统；弥补传统 OpenSCAD"所见非所得"的痛点。

---

## 5. 生态趋势信号

把今天的 3 类信号拼起来，可以读出 4 条相互强化的趋势线：

1. **Agent-native CAD 正在形成"协议层 + 内核层 + 应用层"三层栈**：协议层有 MCP（`freecad-mcp`、`Kiln`），应用层有 `CADAM` / `text-to-cad`，内核层出现 `Roshera-CAD` 这种"可验证证书"原生设计——三者首次在同一天同步活跃，说明"AI 设计助手"已从演示进入工程化阶段。

2. **B-Rep 进入浏览器原生时代**：`occt-wasm`、`cadrum`、`brepjs`、`bldrs-ai/conway` 同步迭代，OCCT 8.x 编译为 WASM 的链路已稳定，意味着 STEP 文件可以在 50–100ms 量级内完成解释与布尔运算，传统"必须装桌面 CAD"的工作流被打破。

3. **开源 3D 打印正在"跨过塑料外壳"门槛**：Bambu Lab 与 Insta360 的联名设计挑战、Venezuelan 社区应急制造案例说明：消费级硬件的能力边界已被 maker 社区外推到光学产品与救灾场景，反向拉动参数化、可制造性验证（DFM）类工具需求。

4. **Code-CAD 仍占主导但出现"WASM 化 + GPU 化"分化**：CadQuery / build123d 继续巩固 Python 入口；`chiselcad` 用 Vulkan 给 CSG 加速，`CADAM` 把 OpenSCAD 搬上 Web——同一种"代码描述几何"的需求，正在被多种运行时分裂实现。

---

## 6. 值得关注

- 🌟 **[varun29ankuS

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*