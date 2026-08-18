# CAD/机械结构开源动态日报 2026-08-18

> 数据来源: GitHub Search API (102 仓库) | ArXiv cs.GR+cs.CG (0 篇论文) | RSS 新闻 (3 条) | 生成时间: 2026-08-18 00:51 UTC

---

# CAD/机械结构开源动态日报
**日期：2026 年 8 月 14 日**

---

## 一、今日速览

今日开源 CAD 与机械设计领域呈现"AI 代理深化 + 制造硬件升级"双主线。FreeCAD 26.3 公布 Top 20 新特性讲座，标志开源参数化建模进入新一轮成熟期；Prusa 一口气推出 XL+、CORE One L+、CORE One+ (Gen 2) 三款桌面打印设备迭代，主打"Better Prints, Easier Use"。仓库层面，CadQuery、build123d、FreeCAD-AI、AgentSCAD 等 Code-CAD 与 AI 代理类项目持续活跃；OrcaSlicer、Marlin、gsender 等制造侧工具也保持高频更新。整体看，"自然语言→可编辑几何"的端到端流水线正在加速落地。

---

## 二、行业脉搏

- 🎯 **[FreeCAD 26.3: Top 20 New Features talk](https://blog.freecad.org/2026/08/14/freecad-26-3-top-20-new-features-talk/)** — FreeCAD 26.3 即将发布，开发团队以"Top 20 新特性"形式集中展示关键改进，对开源参数化 CAD 用户而言是年度最重要的事件之一。
- 🛠️ **[WIP Wednesday, 12 August July 2026](https://blog.freecad.org/2026/08/12/wip-wednesday-12-august-july-2026/)** — FreeCAD 开发进度周报，反映 PR、Assembly、PartDesign、Tux 等多个 workbench 正在被持续打磨。
- 🖨️ **[Prusa XL+、CORE One L+ 与 CORE One+ (Gen 2) 大型产品升级](https://blog.prusa3d.com/better-prints-easier-use-prusa-xl-core-one-l-and-core-one-gen-2-our-big-product-update_137539/)** — Prusa 同代三线齐发，主题为"Better Prints, Easier Use"，聚焦打印质量与易用性，对消费级/小型工坊市场具有风向标意义。

---

## 三、研究前沿

> 📭 今日 cs.GR / cs.CG 论文抓取结果为 **0 篇**，建议关注 ArXiv 列表恢复后的几何建模、网格处理与生成式设计相关方向。

为弥补缺口，从活跃仓库中提炼出与"研究前沿"高度相关的三条线索：

- 🧠 **多代理 + 约束测试时计算** —— [Pan-Chera/Multi-Agent-CAD (⭐841)](https://github.com/Pan-Chera/Multi-Agent-CAD) 提出"约束测试时计算"框架，将复杂 CAD 任务拆分到多个专门 Agent，本质上是一篇可复现工程级 text-to-CAD 研究。
- 🧬 **基于自动微分与无结构网格的拓扑优化** —— [JuliaTopOpt/TopOpt.jl (⭐225)](https://github.com/JuliaTopOpt/TopOpt.jl) 在 Julia 中提供连续/二值、单/多材料、桁架/连续体的拓扑优化，是当前最活跃的开源结构优化研究平台之一。
- 🤖 **MCP-server 化 CAD Copilot** —— [armpro24-blip/cad-cae-copilot (⭐47)](https://github.com/armpro24-blip/cad-cae-copilot) 把 build123d/OpenCASCADE 几何、参数、拓扑指针封装为 MCP 工具，让 LLM 真正"按可编辑指针"修改模型，体现 LLM × 工程几何的研究前沿方向。

---

## 四、重点项目

### 🖥️ CAD 平台与编辑器

| 仓库 | Star | 简介 |
|---|---|---|
| [FreeCAD/FreeCAD](https://github.com/FreeCAD/FreeCAD) | ⭐32,912 | 官方开源多平台 3D 参数化建模器，是 26.3 版本的核心承载项目，对整个开源 CAD 生态具有基础设施意义。 |
| [pascalorg/editor](https://github.com/pascalorg/editor) | ⭐21,518 | TypeScript 构建的 Web 端 3D 建筑/产品协作编辑器，反映 CAD 向"云端+浏览器"迁移的大趋势。 |
| [earthtojake/text-to-cad](https://github.com/earthtojake/text-to-cad) | ⭐13,554 | "CAD/CAE/CAM agent skills" 库，是当下最受欢迎的 LLM-to-CAD 中间件，把 AI 能力封装为可被代理调用的设计技能。 |
| [openscad/openscad](https://github.com/openscad/openscad) | ⭐9,958 | 程序员友好的纯脚本 3D CAD 建模器，是 Code-CAD 与参数化生成的文化发源地。 |
| [LibreCAD/LibreCAD](https://github.com/LibreCAD/LibreCAD) | ⭐6,249 | 跨平台 2D CAD，支持 DXF/DWG 读写，是 2D 工程图生态的事实标准之一。 |
| [solvespace/solvespace](https://github.com/solvespace/solvespace) | ⭐4,105 | 轻量级参数化 2D/3D CAD，约束求解器质量在同类开源项目中表现突出。 |
| [Adam-CAD/CADAM](https://github.com/Adam-CAD/CADAM) | ⭐4,995 | 开源 text-to-CAD Web 应用，是浏览器端"说句话就出模型"理念的代表实现。 |
| [NiJingzhe/SimpleCADAPI](https://github.com/NiJingzhe/SimpleCADAPI) | ⭐96 | 面向 LLM 的 Agent-native CAD SDK，专注让语言模型生成可被工程软件继续编辑的复杂 3D 模型。 |

### 📐 计算几何与内核

| 仓库 | Star | 简介 |
|---|---|---|
| [CGAL/cgal](https://github.com/CGAL/cgal) | ⭐6,009 | C++ 计算几何算法库，是工业级 CAD/CAM 几何内核的事实标准之一。 |
| [cnr-isti-vclab/meshlab](https://github.com/cnr-isti-vclab/meshlab) | ⭐5,793 | 开源网格处理系统，覆盖扫描仪数据清洗、修复、可视化全流程。 |
| [pyvista/pyvista](https://github.com/pyvista/pyvista) | ⭐3,772 | 基于 VTK 的 Python 3D 网格可视化与分析库，常用于科研与工程 CAE 后处理。 |
| [mikedh/trimesh](https://github.com/mikedh/trimesh) | ⭐3,650 | Python 三角网格加载与处理库，是 3D 打印准备、几何修复的关键工具。 |
| [Open-Cascade-SAS/OCCT](https://github.com/Open-Cascade-SAS/OCCT) | ⭐2,773 | Open CASCADE 几何/建模/CAE 平台，FreeCAD、CadQuery 等的共同内核。 |
| [gkjohnson/three-gpu-pathtracer](https://github.com/gkjohnson/three-gpu-pathtracer) | ⭐1,809 | three.js GPU 路径追踪渲染器，为 Web CAD 提供接近照片级的可视化质量。 |
| [MeshInspector/MeshLib](https://github.com/MeshInspector/MeshLib) | ⭐807 | 现代 C++ 网格处理库，定位 OCCT 网格模块的替代/补充方案。 |
| [artem-ogre/CDT](https://github.com/artem-ogre/CDT) | ⭐1,436 | 高性能 C++ 约束 Delaunay 三角剖分库，是数值仿真与网格生成前置环节。 |

### 🧬 创成式与参数化设计

| 仓库 | Star | 简介 |
|---|---|---|
| [Pan-Chera/Multi-Agent-CAD](https://github.com/Pan-Chera/Multi-Agent-CAD) | ⭐841 | 多代理 + 约束测试时计算的 text-to-CAD 框架，把生成式设计从"单模型直出"推进到"多 Agent 协作 + 可校验"。 |
| [JuliaTopOpt/TopOpt.jl](https://github.com/JuliaTopOpt/TopOpt.jl) | ⭐225 | Julia 自动微分驱动的拓扑优化包，覆盖桁架/连续体、单/多材料，对轻量化结构设计极具研究价值。 |
| [YuqingNicole/variant-design-skill](https://github.com/YuqingNicole/variant-design-skill) | ⭐45 | Claude Code 上的"变体设计"技能：从提示词到 3 个不同方案，对早期概念发散阶段很有意义。 |
| [clay-good/anvilate](https://github.com/clay-good/anvilate) | ⭐4 | 本地优先的机械设计 Agent，输出物理校验过的参数化 STEP/DXF，可直接进入 CATIA/SolidWorks/NX。 |

### 🖨️ 3D 打印与制造

| 仓库 | Star | 简介 |
|---|---|---|
| [MarlinFirmware/Marlin](https://github.com/MarlinFirmware/Marlin) | ⭐17,541 | 装机量最大的开源 3D 打印机固件，覆盖 8/32 位 MCU，是消费级与 DIY 3D 打印的事实标准。 |
| [OrcaSlicer/OrcaSlicer](https://github.com/OrcaSlicer/OrcaSlicer) | ⭐15,418 | 跨品牌 G-code 生成器（Bambu/Prusa/Voron/Creality 等），是当前最活跃的社区切片软件之一。 |
| [Ultimaker/Cura](https://github.com/Ultimaker/Cura) | ⭐7,015 | Ultimaker 主导的开源切片 GUI，Uranium 框架被多个项目复用，工业/教育用户基数大。 |
| [huxingyi/dust3d](https://github.com/huxingyi/dust3d) | ⭐3,467 | 面向游戏与 3D 打印的低多边形快速建模工具，强调"几分钟出可打印模型"。 |
| [Sienci-Labs/gsender](https://github.com/Sienci-Labs/gsender) | ⭐364 | grbl/grblHAL CNC 控制软件，是桌面 CNC 领域的代表性开源 sender。 |
| [XRay3D/GERBER_X3](https://github.com/XRay3D/GERBER_X3) | ⭐253 | Gerber→PCB 铣削 G-code 工具，可直出 PDF，对 PCB 爱好者与小型 PCB 厂有重要意义。 |
| [Donkie/Spoolman](https://github.com/Donkie/Spoolman) | ⭐2,726 | 自托管 3D 打印耗材库存管理系统，是打印农场数字化的关键基础设施。 |
| [maziggy/bambuddy](https://github.com/maziggy/bambuddy) | ⭐2,810 | "你的 Bambu Lab、你的规则"——Bambu Lab 自托管控制中心，回应"去云化"潮流。 |

### 🔗 文件格式与互操作

| 仓库 | Star | 简介 |
|---|---|---|
| [bdlucas1/diff3d](https://github.com/bdlucas1/diff3d) | ⭐71 | STL/OBJ/3MF/STEP 快速可视化 3D diff 工具，对版本管理、模型回归测试非常实用。 |
| [ghbalf/freecad-ai](https://github.com/ghbalf/freecad-ai) | ⭐428 | FreeCAD 的 AI 助手 workbench，自然语言直接生成 3D 模型，是 FreeCAD 生态与 LLM 衔接的代表项目。 |
| [tomate44/CurvesWB](https://github.com/tomate44/CurvesWB) | ⭐153 | FreeCAD 曲面 workbench 实验，弥补 FreeCAD 在 NURBS 高级曲面方面的短板。 |
| [edwardvmills/Silk](https://github.com/edwardvmills/Silk) | ⭐95 | 专注低阶 NURBS 与接缝连续性的曲面建模工具集，对工业级 A 级曲面工作流有补充意义。 |

### 🐍 Code-CAD 与脚本化

| 仓库 | Star | 简介 |
|---|---|---|
| [CadQuery/cadquery](https://github.com/CadQuery/cadquery) | ⭐5,616 | 基于 OCCT 的 Python 参数化 CAD 脚本框架，是 Code-CAD 工业应用的事实标准之一。 |
| [gumyr/build123d](https://github.com/gumyr/build123d) | ⭐2,871 | 现代 Python CAD 编程库，API 更面向组合式/函数式风格，是 CadQuery 的强力挑战者。 |
| [partcad/partcad](https://github.com/partcad/partcad) | ⭐485 | "零件包管理器 + Digital Thread"，把可制造物理产品做成可版本化、可复用的模块。 |
| [codeofaxel/Kiln](https://github.com/codeofaxel/Kiln) | ⭐47 | 3D 打印 MCP 服务器，AI 代理可以"描述→生成→切片→打印"全流程串起来，支持 Bambu/Prusa/Klipper/Marlin 等。 |
| [particlesector/chiselcad](https://github.com/particlesector/chiselcad) | ⭐14 | C++20 + Vulkan + Manifold 实现的 GPU 加速 CSG 建模器，OpenSCAD 兼容语法，速度远超解释器版本。 |
| [Kevoyuan/AgentSCAD](https://github.com/Kevoyuan/AgentSCAD) | ⭐7 | AI 原生 OpenSCAD Agent：自然语言→带几何修复与制造校验的 OpenSCAD 产物。 |
| [ad-si/LuaCAD](https://github.com/ad-si/LuaCAD) | ⭐106 | Rust 内核 + Lua 脚本的参数化 CAD 建模，体现"嵌入式脚本 + 高性能内核"的另一种路线。 |
| [zhuchaokn/spec-3d-model](https://github.com/zhuchaokn/spec-3d-model) | ⭐1 | 基于 BlenderMCP 的"对话驱动 3D 打印件设计"，强调规格驱动、参数化、watertight 校验。 |

---

## 五、生态趋势信号

今日素材共同勾勒出三条主线：**第一，"AI Agent 接管几何生成"已从演示走向工程化**——text-to-cad、CADAM、freecad-ai、Kiln、AgentSCAD、anvilate、Multi-Agent-CAD 等项目不约而同地把 LLM 接到 OCCT/build123d/OpenSCAD 内核上，并加上几何修复、可编辑指针、MCP 工具封装等"工程护栏"。**第二，"去云化 / 本地优先"在制造侧全面铺开**——Prusa 仍走易用路线，但 Bambuddy、Spoolman、gsender、Kiln 等开源工具共同强调"你的机器、你的规则、你的数据"。**第三，几何内核层级开始被重新组合**——chiselcad（Vulkan+Manifold）、LuaCAD（Rust+OCCT 类逻辑）、MeshLib、three-gpu-pathtracer 等暗示新一代"高性能 GPU/原生模块 + 友好脚本层"的混合架构正在浮现，可能在未来 1–2 年挑战纯 OCCT 体系。

---

## 六、值得关注

- 📌 **[FreeCAD 26.3 Top 20 新特性讲座](https://blog.freecad.org/2026/08/14/freecad

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*