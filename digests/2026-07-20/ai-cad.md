# CAD/机械结构开源动态日报 2026-07-20

> 数据来源: GitHub Search API (116 仓库) | ArXiv cs.GR+cs.CG (0 篇论文) | RSS 新闻 (1 条) | 生成时间: 2026-07-20 02:25 UTC

---

# CAD/机械结构开源动态日报
**日期：2026 年 7 月 15 日（周三）**

---

## 1. 今日速览

今日 FreeCAD 社区如期发布 WIP Wednesday 进展速报，多个核心 Workbench 持续迭代；ArXiv cs.GR/cs.CG 今日无新增论文，相关研究处于"间歇期"。GitHub 活跃仓库生态继续向 **Web 原生 CAD**、**AI 驱动的文本到几何生成**、**WASM 化 OpenCASCADE 内核** 三大方向集中：Adam-CAD/CADAM、chili3d、bldrs-ai/conway、andymai/occt-wasm 等项目并行推进；Text23D、anvilate、AgentSCAD 等"自然语言 → STEP/OpenSCAD"管线在 star 数量与活跃度上均有增长，反映出生成式工程正从概念验证迈向"本地化、可验证、可编辑"阶段。

---

## 2. 行业脉搏

> 今日仅 1 条新闻入选。

- **[WIP Wednesday, 15 July 2026 — FreeCAD Blog](https://blog.freecad.org/2026/07/15/wip-wednesday-15-july-202-wip-wednesday-15-july-2026/)**  
  FreeCAD 官方汇总本周核心 Workbench（Part、PartDesign、Sketcher、Assembly 等）的合并请求、Bug 修复与新功能预览。  
  **意义**：作为开源参数化建模的事实标准之一，FreeCAD 的 WIP 周报是观察"非商业 CAD 工具链成熟度"的关键窗口。本期条目通常涉及 OCCT 内核升级、Topological Naming 稳定性、Assembly 4 集成等核心议题，对评估下游 build123d、CadQuery、KiCad-StepUp 等生态有直接参考价值。

---

## 3. 研究前沿

> 今日 cs.GR / cs.CG 暂无新论文。

学术端今日处于"信息空窗"。结合近期仓库动向，**隐含的研究热点**主要集中在：
- 文本/草图驱动的参数化 CAD 生成（自然语言 → 拓扑合法 B-Rep）；
- 浏览器端的高性能 B-Rep 引擎（WASM 编译、GPU 加速 CSG）；
- 神经符号几何（neural-symbolic geometry）下的制造可制造性验证。

明日及本周末可重点关注 SIGGRAPH 2026 前置预印本与 Eurographics 2027 投递窗口。

---

## 4. 重点项目

### 🖥️ CAD 平台与编辑器
| 仓库 | Star | 核心贡献 |
|---|---|---|
| **[FreeCAD/FreeCAD](https://github.com/FreeCAD/FreeCAD)** | 32,234 | 跨平台开源参数化 3D 建模器，事实标准的"非商业 CATIA 替代"，生态辐射 build123d、CadQuery、SheetMetal 等数十个 Workbench。 |
| **[Adam-CAD/CADAM](https://github.com/Adam-CAD/CADAM)** | 4,822 | 开源 **Text-to-CAD** Web 应用，将自然语言直接转化为可编辑的 3D 模型，代表 LLM-CAD 落地路径。 |
| **[xiangechen/chili3d](https://github.com/xiangechen/chili3d)** | 4,689 | 浏览器内 3D CAD 编辑器，零安装即可完成建模，验证"Web 优先"对工程师日常协作的吸引力。 |
| **[solvespace/solvespace](https://github.com/solvespace/solvespace)** | 4,046 | 轻量级 2D/3D 参数化求解器，以极小体积提供约束求解能力，常用于嵌入式与教学场景。 |
| **[leozide/leocad](https://github.com/leozide/leocad)** | 2,827 | LEGO 虚拟拼搭 CAD，3D 打印与教育领域标杆，验证"专业域 CAD + 趣味模型库"模式。 |

### 📐 计算几何与内核
| 仓库 | Star | 核心贡献 |
|---|---|---|
| **[CGAL/cgal](https://github.com/CGAL/cgal)** | 5,982 | 计算几何算法库黄金标准，Delaunay、布尔运算、曲面重建等模块被 OpenSCAD、build123d 间接依赖。 |
| **[pyvista/pyvista](https://github.com/pyvista/pyvista)** | 3,749 | 基于 VTK 的 Python 3D 网格/点云可视化与几何分析库，已成为科研 CAE/CAD 流水线的"瑞士军刀"。 |
| **[mikedh/trimesh](https://github.com/mikedh/trimesh)** | 3,631 | Python 三角网格处理库，纯 Python 接口覆盖 STL/OBJ/3MF 读写与布尔运算，是制造前处理的高频依赖。 |
| **[gkjohnson/three-mesh-bvh](https://github.com/gkjohnson/three-mesh-bvh)** | 3,424 | three.js 的 BVH 加速库，为 Web 端大规模网格射线追踪、碰撞检测提供工业级性能。 |
| **[polydera/trueform](https://github.com/polydera/trueform)** | 128 | 新兴 C++ 几何库，强调"快速且精确"的布尔运算、空间查询与重网格化，定位为"几何 STL"。 |

### 🧬 创成式与参数化设计
| 仓库 | Star | 核心贡献 |
|---|---|---|
| **[partcad/partcad](https://github.com/partcad/partcad)** | 476 | 面向可制造物理产品的"包管理器 + Digital Thread"，是连接 CAD 零件库与采购、制造流水线的中间层。 |
| **[clay-good/anvilate](https://github.com/clay-good/anvilate)** | 2 | 本地优先设计 Agent：自然语言 → 物理验证的 STEP/DXF，直接对接 CATIA/SolidWorks/NX，输出可编辑 Python 源码。 |
| **[Kevoyuan/AgentSCAD](https://github.com/Kevoyuan/AgentSCAD)** | 5 | AI 原生 CAD Agent：自然语言 → 验证后的 OpenSCAD 产物，含自动几何修复与制造可制造性校验。 |
| **[1400130-collab/gearforge](https://github.com/1400130-collab/gearforge)** | 1 | 标准渐开线齿轮/同步带轮/花键生成器，零依赖浏览器端运行，激光切割用 SVG/DXF 即下即用。 |

### 🖨️ 3D 打印与制造
| 仓库 | Star | 核心贡献 |
|---|---|---|
| **[MarlinFirmware/Marlin](https://github.com/MarlinFirmware/Marlin)** | 17,481 | 8/32 位 MCU 通用 3D 打印机固件，工业级 3D 打印生态的事实底层。 |
| **[OrcaSlicer/OrcaSlicer](https://github.com/OrcaSlicer/OrcaSlicer)** | 15,154 | 主流多品牌切片器（Bambu/Prusa/Voron/Creality），同时承载社区特征工程与校准生态。 |
| **[Ultimaker/Cura](https://github.com/Ultimaker/Cura)** | 6,996 | Uranium 框架之上的桌面端切片 GUI，长期被 OEM 集成作为默认切片引擎。 |
| **[sameer/svg2gcode](https://github.com/sameer/svg2gcode)** | 427 | Rust 实现的 SVG→G-code 转换器，聚焦笔式绘图仪与激光雕刻，是 CAM 入门与小型工作流高频工具。 |
| **[Sienci-Labs/gsender](https://github.com/Sienci-Labs/gsender)** | 359 | 桌面端 GRBL/grblHAL 控制器，是业余与小型工坊 CNC 的主流前端。 |
| **[maziggy/bambuddy](https://github.com/maziggy/bambuddy)** | 2,563 | 自托管的 Bambu Lab 命令中心：脱离云端控制 1–40 台打印机，对数据主权与工坊部署有现实意义。 |

### 🔗 文件格式与互操作
| 仓库 | Star | 核心贡献 |
|---|---|---|
| **[f3d-app/f3d](https://github.com/f3d-app/f3d)** | 4,555 | 极速极简的 3D 桌面查看器，原生支持 STEP/IGES/3MF/glTF，是工程师"无 CAD 环境"快速预览首选。 |
| **[KiCad/kicad-source-mirror](https://github.com/KiCad/kicad-source-mirror)** | 2,820 | 主流开源 EDA 的 GitHub 镜像，STEP 导出与 3D 模型协同是 ECAD-MCAD 融合的代表性实践。 |
| **[bldrs-ai/conway](https://github.com/bldrs-ai/conway)** | 22 | 面向 Web 的高性能 IFC & STEP 引擎，对浏览器 BIM/建筑与机械协同意义重大。 |
| **[andymai/occt-wasm](https://github.com/andymai/occt-wasm)** | 28 | OpenCASCADE 编译至 WebAssembly，~4MB brotli，干净 TS API、Worker 支持，是 Web 端"真 B-Rep"的关键基础设施。 |
| **[lzpel/cadrum](https://github.com/lzpel/cadrum)** | 42 | Rust 封装的静态链接、headless OCCT 库，可原生与 WASM 双目标运行，便于服务端批量几何处理。 |

### 🐍 Code-CAD 与脚本化
| 仓库 | Star | 核心贡献 |
|---|---|---|
| **[CadQuery/cadquery](https://github.com/CadQuery/cadquery)** | 5,478 | 基于 OCCT 的 Python 参数化 CAD 脚本框架，工程师/程序员友好，是"CAD as Code"的事实标杆。 |
| **[gumyr/build123d](https://github.com/gumyr/build123d)** | 2,660 | 新一代 Python CAD 库，改进了 CadQuery 的 API 风格，引入"BuildPart/BuildSketch/BuildLine"上下文模式，社区增长迅速。 |
| **[BelfrySCAD/BOSL2](https://github.com/BelfrySCAD/BOSL2)** | 2,272 | OpenSCAD 的"标准库"，覆盖常用机械特征（倒角、齿轮、紧固件、曲线），大幅提升 OpenSCAD 的工程化能力。 |
| **[codeofaxel/Kiln](https://github.com/codeofaxel/Kiln)** | 35 | 面向 AI Agent 的 3D 打印 MCP 服务器：自然语言/草图 → 切片 → 跨平台打印（Bambu/Prusa/Klipper/OctoPrint）。 |

---

## 5. 生态趋势信号

今天 116 个活跃仓库共同勾勒出三条清晰趋势：

**(1) 浏览器即工作台。** 从 chili3d、CADAM（Web 端 Text-to-CAD）、bldrs-ai/conway（IFC/STEP Web 引擎）到 andymai/occt-wasm、lzpel/cadrum（OCCT 的 WASM 化）——一条"OCCT 编译到浏览器 → 完整 B-Rep 能力上 Web → 协作与 AI 集成变得容易"的链路正在成形。这对中小团队替代 SolidWorks 桌面端授权具有现实意义。

**(2) AI 从"出图"走向"出可制造零件"。** Text23D、anvilate、AgentSCAD、Kiln、WireStudio 等项目不再仅生成视觉草图，而是要求产物 **可制造（STEP/DXF/OpenSCAD 源码）**、**可物理验证**、**可在主流 CAD 中二次编辑**。这意味着 LLM-CAD 的竞争点已从"几何正确性"升级到"工程可交付"。

**(3) 本地化与数据主权。** bambuddy（脱离 Bambu 云）、anvilate（local-first）、Spoolman（自托管耗材库存）共同指向"3D 打印与设计工具从 SaaS 回归自托管"的诉求，预计在 2026 年下半年会有更多企业内网部署需求。

---

## 6. 值得关注

- 🔥 **[Adam-CAD/CADAM](https://github.com/Adam-CAD/CADAM)**（⭐4,822）  
  开源 Text-to-CAD Web 应用，体量与社区速度已超过多数同类闭源产品，是观察"LLM + 参数化建模"前端落地的最直接窗口，建议持续跟踪其几何校验与导出格式进展。

- 🔥 **[clay-good/anvilate](https://github.com/clay-good/anvilate)**（⭐2，仍处早期）  
  "自然语言 → 物理验证的 STEP 文件 + 可编辑 Python 源码"直插 CATIA/SolidWorks/NX 工作流，是工程师侧最关心的形态之一；其"physics-validated"管线的真实成熟度决定它能否从玩具走向生产。

- 🔥 **[andymai/occt-wasm](https://github.com/andymai/occt-wasm)**（⭐28，但基础设施级）  
  OCCT 编译到 WASM 是整个 Web 端 CAD 革命的"水电煤"。一旦该基础设施稳定，浏览器内运行完整 B-Rep 布尔运算、曲面修剪的体验将成现实，所有上层 Web CAD 项目（CADAM、chili3d、conway、replicad）都从中

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*