# CAD/机械结构开源动态日报 2026-10-12

> 数据来源: GitHub Search API (107 仓库) | ArXiv cs.GR+cs.CG (0 篇论文) | RSS 新闻 (4 条) | 生成时间: 2026-10-12 03:46 UTC

---

# CAD/机械结构开源动态日报

**日期：2026 年 10 月 9 日**

---

## 一、今日速览

今日 CAD 与机械设计开源生态继续围绕"AI 驱动 CAD"与"浏览器/MCP 原生工作流"两条主线发酵：FreeCAD 26.3 进入 RC1 阶段，配合 BIM 线下 meetup 的启动，社区化纵深加速；GitHub 端 text-to-CAD、MCP-for-CAD、本地化 Agent 等方向持续涌现新工具（earthtojake/text-to-cad ⭐19k、codeofaxel/Kiln 等）。ArXiv 本日无 cs.GR/cs.CG 相关新论文，但计算几何库与网格处理 SDK（MeshLib、CGAL、openMVS）仍保持高频迭代。一个清晰的信号是：传统重型 CAD（参数化建模器）正在被"自然语言 + 几何内核 + 制造后处理"三层架构解构重构。

---

## 二、行业脉搏

- **FreeCAD 26.3 Release Candidate 1 发布** — FreeCAD Blog。标志着下一个稳定版本进入收尾阶段，BIM/Arch 模块与 Part/PartDesign 工作流持续打磨，对工业级替代商业 CAD 的用户意义重大。 [🔗](https://blog.freecad.org/2026/10/08/freecad-26-3-release-candidate-1/)
- **FreeCAD BIM meetups 启动公告** — FreeCAD Blog。社区开始走向线下协作，BIM 用户群（建筑/MEP）首次获得有组织的交流渠道，对 FreeCAD 在 AEC 领域的渗透具有里程碑意义。 [🔗](https://blog.freecad.org/2026/10/09/announcing-freecad-bim-meetups/)
- **WIP Wednesday, 7 October 2026** — FreeCAD Blog。展示了大量进行中的新特性与 Workbench 进展，反映 FreeCAD 主仓与生态仓并行开发的活跃度。 [🔗](https://blog.freecad.org/2026/10/07/wip-wednesday-7-october-2026/)
- **Prusa 推出万圣节发光耗材促销** — Prusa Blog。FDM 多色/发光耗材生态继续扩展，间接反映消费级多材料打印的市场动能。 [🔗](https://blog.prusa3d.com/get-ready-for-halloween-with-our-spooky-filament-offer_138639/)

---

## 三、研究前沿

> ⚠️ **本日 ArXiv cs.GR / cs.CG 无新增论文。** 不过开源仓库端出现了多个直接对标研究热点的工程化项目，可视为"工程化研究"的代表：

- **MeshInspector/MeshLib** ⭐832 — 工业级网格布尔运算、修复、重网格、偏移、点云三角化的 SDK，代表"鲁棒网格处理"研究向可生产组件的落地。
- **google/draco** ⭐7,509 — 3D 网格/点云压缩，是几何传输与 Web CAD 流式加载的事实标准。
- **cdcseacave/openMVS** ⭐4,149 — 开源多视图立体三维重建，把 SfM/MVS 研究工程化。
- **gkjohnson/three-mesh-bvh** ⭐3,507 + **three-gpu-pathtracer** ⭐1,904 — BVH 加速的光线追踪渲染器，把实时光线追踪研究搬到浏览器端。
- **Mapbox/earcut** ⭐2,602 — 最快的 JS 多边形三角剖分库，是 Web CAD/BIM 网格化的基础组件。

---

## 四、重点项目

### 🖥️ CAD 平台与编辑器
- **FreeCAD/FreeCAD** ⭐34,179 — 开源多平台参数化 3D 建模器官方仓库，是 CATIA/SolidWorks 替代方案的核心。 [🔗](https://github.com/FreeCAD/FreeCAD)
- **openscad/openscad** ⭐10,426 — 程序员的实体 3D CAD 建模器，代码即模型，适合参数化/可复现设计。 [🔗](https://github.com/openscad/openscad)
- **xiangechen/chili3d** ⭐4,902 — 完全运行于浏览器的 3D CAD，免安装、跨平台。 [🔗](https://github.com/xiangechen/chili3d)
- **solvespace/solvespace** ⭐4,189 — 简洁高效的参数化 2D/3D CAD，约束求解器口碑极佳。 [🔗](https://github.com/solvespace/solvespace)
- **Adam-CAD/CADAM** ⭐5,244 — 开源 text-to-CAD Web 应用，自然语言到 3D 模型。 [🔗](https://github.com/Adam-CAD/CADAM)
- **pascalorg/editor** ⭐24,804 — 开源 3D 建筑编辑器，对标 Archicad/Revit 的 Web 路线。 [🔗](https://github.com/pascalorg/editor)
- **LibreCAD/LibreCAD** ⭐6,466 — 跨平台 2D CAD，DXF/DWG 读写能力强。 [🔗](https://github.com/LibreCAD/LibreCAD)

### 📐 计算几何与内核
- **CGAL/cgal** ⭐6,073 — 计算几何算法库的行业标杆，CAD 内核的常用底层依赖。 [🔗](https://github.com/CGAL/cgal)
- **Open-Cascade-SAS/OCCT** ⭐2,990 — 开源 3D CAD/CAM/CAE 平台，是 FreeCAD、OCC 生态的底层引擎。 [🔗](https://github.com/Open-Cascade-SAS/OCCT)
- **google/draco** ⭐7,509 — 3D 网格/点云压缩库，Web CAD 流式传输基础设施。 [🔗](https://github.com/google/draco)
- **MeshInspector/MeshLib** ⭐832 — 高速网格布尔、修复、重网格、ICP 配准；C++ 核心 + Python/C#/JS 绑定。 [🔗](https://github.com/MeshInspector/MeshLib)
- **pyvista/pyvista** ⭐3,844 — 基于 VTK 的 Python 3D 可视化与网格分析，科学计算/工程仿真常用。 [🔗](https://github.com/pyvista/pyvista)
- **cdcseacave/openMVS** ⭐4,149 — 开源 SfM + MVS 三维重建库，把摄影测量研究工程化。 [🔗](https://github.com/cdcseacave/openMVS)

### 🧬 创成式与参数化设计
- **partcad/partcad** ⭐504 — 数字主线/Digital Thread 标准，模块化硬件的包管理器，AI 增强。 [🔗](https://github.com/partcad/partcad)
- **clay-good/anvilate** ⭐10 — 本地优先的机械设计 Agent，自然语言 → 物理校验后的 STEP/DXF + 可编辑 Python 源码。 [🔗](https://github.com/clay-good/anvilate)
- **Kevoyuan/AgentSCAD** ⭐17 — AI 原生 CAD Agent，自然语言 → 校验过的 OpenSCAD 产物。 [🔗](https://github.com/Kevoyuan/AgentSCAD)
- **Sanidhyavijay24/AeroML** ⭐1 — 机翼气动性能代理模型 + 逆向搜索，典型的"几何-性能"双向创成式设计。 [🔗](https://github.com/Sanidhyavijay24/AeroML)
- **vykrum/Hywe** ⭐11 — 基于关系图与约束的计算式空间设计环境，建筑/工业方案的生成式探索。 [🔗](https://github.com/vykrum/Hywe)
- **marcuswendt/cascade** ⭐8 — 创成式设计的 TypeScript 节点图运行时与可视化工作区。 [🔗](https://github.com/marcuswendt/cascade)

### 🖨️ 3D 打印与制造
- **MarlinFirmware/Marlin** ⭐17,621 — 主流 3D 打印机固件，几乎所有桌面 FDM 设备的底层。 [🔗](https://github.com/MarlinFirmware/Marlin)
- **OrcaSlicer/OrcaSlicer** ⭐15,923 — 多品牌兼容的高级切片器（Bambu/Prusa/Voron…），社区衍生标杆。 [🔗](https://github.com/OrcaSlicer/OrcaSlicer)
- **Ultimaker/Cura** ⭐7,050 — Cura 切片引擎开源版本，行业事实标准之一。 [🔗](https://github.com/Ultimaker/Cura)
- **gumyr/build123d** ⭐3,382 — 基于 OCCT 的下一代 Python CAD 编程库，Code-CAD 新标杆。 [🔗](https://github.com/gumyr/build123d)
- **huxingyi/dust3d** ⭐3,575 — 跨平台低多边形 3D 建模工具，专为游戏/3D 打印而生。 [🔗](https://github.com/huxingyi/dust3d)
- **maziggy/bambuddy** ⭐3,075 — 自托管 Bambu Lab 命令中心，打破云依赖、面向打印农场。 [🔗](https://github.com/maziggy/bambuddy)
- **manyfold3d/manyfold** ⭐2,198 — 自托管 3D 打印文件数字资产管理器，模型库本地化。 [🔗](https://github.com/manyfold3d/manyfold)
- **Donkie/Spoolman** ⭐2,900 — 自托管耗材库存管理，是多色打印与打印农场的关键组件。 [🔗](https://github.com/Donkie/Spoolman)
- **DMontgomery40/mcp-3D-printer-server** ⭐250 — 把 MCP 接入主流切片器/打印机 API，支持 STL 缩放/旋转/剖切等高级操作。 [🔗](https://github.com/DMontgomery40/mcp-3D-printer-server)
- **codeofaxel/Kiln** ⭐92 — 开源 3D 打印 MCP 服务器，AI Agent 从描述到切片到打印全链路。 [🔗](https://github.com/codeofaxel/Kiln)
- **Sienci-Labs/gsender** ⭐377 — grbl/grblHAL CNC 连接与控制，桌面 CNC 用户的事实工具。 [🔗](https://github.com/Sienci-Labs/gsender)

### 🔗 文件格式与互操作
- **KiCad/kicad-source-mirror** ⭐3,025 — KiCad EDA 主分支镜像，是 EDA 与 MCAD 协同的关键。 [🔗](https://github.com/KiCad/kicad-source-mirror)
- **LibrePCB/LibrePCB** ⭐3,015 — 新一代直观 EDA 套件，开源 PCB 设计代表作。 [🔗](https://github.com/LibrePCB/LibrePCB)
- **Keychron/Keychron-Keyboards-Hardware-Design** ⭐3,761 — Keychron 100+ 工业设计 STEP/DXF/DWG/PDF 资源，是消费硬件开源设计的典范。 [🔗](https://github.com/Keychron/Keychron-Keyboards-Hardware-Design)
- **angel291592/caddiff** ⭐51 — Git diff for CAD：两个 STEP 进，变更图片 + 机器可读变更清单出，CAD 版本控制的关键工具。 [🔗](https://github.com/angel291592/caddiff)

### 🐍 Code-CAD 与脚本化
- **CadQuery/cadquery** ⭐5,917 — 基于 OCCT 的 Python 参数化 CAD 脚本框架，工业自动化脚本生成。 [🔗](https://github.com/CadQuery/cadquery)
- **BelfrySCAD/BOSL2** ⭐2,403 — OpenSCAD v2 库，丰富附件与操控器，大幅提升 OpenSCAD 工程化能力。 [🔗](https://github.com/BelfrySCAD/BOSL2)
- **earthtojake/text-to-cad** ⭐19,348 — 为 Agent 提供 CAD 能力的关键 SDK，text-to-CAD 的明星项目。 [🔗](https://github.com/earthtojake/text-to-cad)
- **neka-nat/freecad-mcp** ⭐2,811 — FreeCAD 的 Model Context Protocol 服务器，让 LLM 直接驱动 FreeCAD。 [🔗](https://github.com/neka-nat/freecad-mcp)
- **ghbalf/freecad-ai** ⭐557 — FreeCAD 的 AI 工作台，自然语言生成 3D 模型。 [🔗](https://github.com/ghbalf/freecad-ai)

---

## 五、生态趋势信号

三个信息源共同勾勒出

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*