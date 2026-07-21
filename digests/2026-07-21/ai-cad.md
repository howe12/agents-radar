# CAD/机械结构开源动态日报 2026-07-21

> 数据来源: GitHub Search API (100 仓库) | ArXiv cs.GR+cs.CG (0 篇论文) | RSS 新闻 (1 条) | 生成时间: 2026-07-21 02:04 UTC

---

# CAD/机械结构开源动态日报
*2026 年 7 月 15 日*

---

## 1. 今日速览

今日动态以"AI 与 CAD 的双向渗透"为主线：FreeCAD 社区发布 WIP Wednesday 进展，多个开源仓库持续推进 MCP（Model Context Protocol）接入，自然语言到 STEP 的生成链路在多个项目并行落地。与此同时，浏览器原生 CAD 引擎（基于 WebAssembly 编译的 OCCT）成为新一波基础设施热点，3D 打印切片侧则以 Bambu Lab 局域网化（bambuddy）与 Klipper 生态稳步推进。计算几何与网格布尔运算性能继续受到工业级关注。

---

## 2. 行业脉搏

- **[FreeCAD Blog — WIP Wednesday, 15 July 2026](https://blog.freecad.org/2026/07/15/wip-wednesday-15-july-2026/)**
  FreeCAD 官方例行发布本周开发进度汇总。意义：作为开源参数化 3D CAD 的事实标准，其核心装配（Assembly）、Part Design 与 Sketcher 工作台的进展直接决定下游数十个扩展工作台（如 SheetMetal、Rocket、DFM）的可用性。

- **MCP 协议成为 CAD 与 LLM 之间的"标准握手"**
  `neka-nat/freecad-mcp`、`codeofaxel/Kiln` 等项目均以 MCP 为接入层。意义：把 CAD 工具从 GUI/CLI 扩展为可被任意 Agent 调用的工具，是 LLM 真正进入机械设计闭环的关键一步。

- **浏览器原生 CAD 引擎加速成熟**
  `andymai/occt-wasm`、`lzpel/cadrum`、`bldrs-ai/conway` 分别在 OCCT→WASM 编译、纯 Rust 内核、IFC/STEP 解析侧推进。意义：把 OpenCASCADE 完整 B-Rep 能力装进浏览器，将彻底改变 CAD 的分发形态。

- **Bambu Lab 生态加速"去云化"**
  `maziggy/bambuddy`、`greghesp/ha-bambulab` 提供本地化、私有化部署方案。意义：响应制造业对数据主权与离线生产的需求，3D 打印机管理正在从云端走向自托管。

- **生成式设计与 AI Agent 向 CAD 工业栈渗透**
  `clay-good/anvilate`、`zqf3229294/Text23D`、`PranavChahal/sphaire-web`、`Kevoyuan/AgentSCAD` 共同呈现"自然语言 → 参数化 STEP/DXF"路径。意义：传统 CATIA/SolidWorks/NX 工作流首次出现可被 AI 直驱的可行替代链。

---

## 3. 研究前沿

> 今日 cs.GR / cs.CG 论文数据为空，建议关注往期综述类资源（如 [`PARKCHEOLHEE-lab/papers-for-generative-design`](https://github.com/PARKCHEOLHEE-lab/papers-for-generative-design)）跟踪长期趋势。

---

## 4. 重点项目

### 🖥️ CAD 平台与编辑器
- **[FreeCAD/FreeCAD](https://github.com/FreeCAD/FreeCAD)** — ⭐ 32,250
  开源多平台参数化 3D 建模器的事实标准；今日 WIP Wednesday 持续推进 Part Design / Sketcher / Assembly。

- **[CadQuery/cadquery](https://github.com/CadQuery/cadquery)** — ⭐ 5,483
  基于 OCCT 的 Python 参数化 CAD 脚本框架；Code-CAD 生态的旗舰。

- **[gumyr/build123d](https://github.com/gumyr/build123d)** — ⭐ 2,664
  新一代 Python CAD 编程库，引入显式 `BuildLine` / `BuildPart` 上下文；与 CadQuery 形成互补。

- **[xiangechen/chili3d](https://github.com/xiangechen/chili3d)** — ⭐ 4,694
  浏览器端 3D CAD 在线建模与编辑应用，体现 Web CAD 的成熟度。

- **[Adam-CAD/CADAM](https://github.com/Adam-CAD/CADAM)** — ⭐ 4,831
  开源 Text-to-CAD Web 应用，把自然语言直接映射为可编辑模型。

- **[solvespace/solvespace](https://github.com/solvespace/solvespace)** — ⭐ 4,047
  轻量级参数化 2D/3D CAD，适合嵌入式、教育场景与快速约束求解。

### 📐 计算几何与内核
- **[CGAL/cgal](https://github.com/CGAL/cgal)** — ⭐ 5,981
  计算几何算法库的权威实现，覆盖三角化、布尔运算、网格处理、运动规划。

- **[polydera/trueform](https://github.com/polydera/trueform)** — ⭐ 128
  面向工业级几何布尔、空间查询与重网格的现代 C++ 库；提供 Python/TS 绑定，号称"几何领域的 STL"。

- **[andymai/occt-wasm](https://github.com/andymai/occt-wasm)** — ⭐ 30
  OpenCASCADE 编译至 WebAssembly，提供 ~4MB brotli 体积、TypeScript API 与 Web Worker 支持——浏览器原生 B-Rep 引擎的关键底座。

- **[bldrs-ai/conway-geom](https://github.com/bldrs-ai/conway-geom)** — ⭐ 5
  面向 Web 端 CAD 的高性能几何 WASM 内核，承接 conway IFC/STEP 引擎。

- **[JuliaGeometry/Meshes.jl](https://github.com/JuliaGeometry/Meshes.jl)** — ⭐ 460
  Julia 生态下的计算几何库，对科研与仿真-几何耦合场景友好。

### 🧬 创成式与参数化设计
- **[PranavChahal/sphaire-web](https://github.com/PranavChahal/sphaire-web)** — ⭐ 3
  浏览器原生、AI 辅助的 OpenCascade 参数化 CAD。

- **[Kevoyuan/AgentSCAD](https://github.com/Kevoyuan/AgentSCAD)** — ⭐ 5
  AI-Native CAD Agent，自然语言到 OpenSCAD 产物，自动几何修复与制造验证。

- **[TimStuhler/splitflap-board](https://github.com/TimStuhler/splitflap-board)** — ⭐ 1
  Blender 内的参数化翻页显示屏生成器，输出带动画契约的 glTF/GLB。

### 🖨️ 3D 打印与制造
- **[MarlinFirmware/Marlin](https://github.com/MarlinFirmware/Marlin)** — ⭐ 17,486
  全球装机量最高的开源 3D 打印机固件。

- **[OrcaSlicer/OrcaSlicer](https://github.com/OrcaSlicer/OrcaSlicer)** — ⭐ 15,166
  支持 Bambu / Prusa / Voron / VzBot / RatRig / Creality 的多机型 G-code 生成器。

- **[Ultimaker/Cura](https://github.com/Ultimaker/Cura)** — ⭐ 6,998
  基于 Uranium 框架的开源切片 GUI，行业事实标准之一。

- **[maziggy/bambuddy](https://github.com/maziggy/bambuddy)** — ⭐ 2,571
  Bambu Lab 自托管命令中心，支持 1–40 台设备的本地化部署。

- **[codeofaxel/Kiln](https://github.com/codeofaxel/Kiln)** — ⭐ 36
  开源 3D 打印 MCP 服务器，让 AI Agent（Claude/Codex/Cursor）直接驱动设计→切片→打印全链路。

- **[sameer/svg2gcode](https://github.com/sameer/svg2gcode)** — ⭐ 427
  Rust 实现的 SVG → G-code 转换器，面向笔式绘图仪、激光雕刻与轻量 CNC。

### 🔗 文件格式与互操作
- **[partcad/partcad](https://github.com/partcad/partcad)** — ⭐ 476
  面向可制造物理产品的"包管理器 + 数字主线"，为 STEP/3MF 等资产建立可复用链路。

- **[bldrs-ai/conway](https://github.com/bldrs-ai/conway)** — ⭐ 22
  面向 Web CAD 的高性能 IFC & STEP 引擎，与 conway-geom 配套。

- **[sgenoud/replicad](https://github.com/sgenoud/replicad)** — ⭐ 659
  在浏览器中通过代码构建 OpenCASCADE 级 3D 模型的 TypeScript 库。

- **[FriendsOfCADability/CADability](https://github.com/FriendsOfCADability/CADability)** — ⭐ 168
  纯 .NET 3D 建模类库，原生支持 STEP/STL/DXF，可无第三方依赖运行。

### 🐍 Code-CAD 与脚本化
- **[neka-nat/freecad-mcp](https://github.com/neka-nat/freecad-mcp)** — ⭐ 1,375
  FreeCAD 的 MCP 服务器，让 LLM 直接调用 Part Design / Sketcher API。

- **[zqf3229294/Text23D](https://github.com/zqf3229294/Text23D)** — ⭐ 16
  AI 辅助机械设计平台，支持对话式生成与精炼 3D 参数化 CAD 模型。

- **[clay-good/anvilate](https://github.com/clay-good/anvilate)** — ⭐ 2
  Local-First 机械设计 Agent，自然语言 → 物理校验后的参数化 STEP/DXF，可直接进入 CATIA/SolidWorks/NX/AutoCAD。

- **[zaphB/freecad.optics_design_workbench](https://github.com/zaphB/freecad.optics_design_workbench)** — ⭐ 13
  FreeCAD 上的物理准确正向光线追迹与光学优化工作台。

- **[mnesarco/MarzWorkbench](https://github.com/mnesarco/MarzWorkbench)** — ⭐ 129
  FreeCAD 吉他设计专用工作台，体现 Code-CAD 在垂直领域的深耕。

---

## 5. 生态趋势信号

今天的 100 个活跃仓库清晰呈现出三条交叉趋势：

**① AI Agent × CAD 标准化接入层（MCP）正在形成。** `freecad-mcp` 与 `Kiln` 同时选择 MCP 作为 Agent↔CAD 的协议，意味着 CAD 工具正从"GUI+CLI"向"Tool-callable Function"演化，未来任何 LLM 都可被同一套协议驱动 FreeCAD、3D 打印切片机乃至 CNC

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*