# CAD/机械结构开源动态日报 2026-07-30

> 数据来源: GitHub Search API (110 仓库) | ArXiv cs.GR+cs.CG (17 篇论文) | RSS 新闻 (5 条) | 生成时间: 2026-07-30 01:51 UTC

---

# CAD/机械结构开源动态日报

> 数据采集自 FreeCAD Blog、Prusa、ArXiv cs.GR/cs.CG、GitHub Trending 等渠道，覆盖截至今日的开源动态。

---

## 一、今日速览

FreeCAD 在七天内连发 **1.1.2** 与 **1.1.3** 两个补丁版本，迭代节奏明显加快；同时在 EMF Camp 2026 上以"E‑Sport Speed Run"形式把参数化建模搬上电子节舞台。在 AI 方向，**text‑to‑CAD / Code‑CAD** 持续井喷：cad-cae-copilot、anvilate、freecad-mcp、Kiln、text-to-cad 等多仓库提供面向 Claude/Codex 等 Agent 的自然语言→几何接口，底层打通 build123d、OCCT、OpenSCAD 内核并直接输出 STEP。学术侧，**Convex Collision-Free Regions** 用凸可行域显式表示无碰撞空间，对装配仿真、CAM 刀路和机器人路径规划具有直接借鉴价值。

---

## 二、行业脉搏

- **[FreeCAD 1.1.3 released](https://blog.freecad.org/2026/07/25/freecad-1-1-3-released/)** — _FreeCAD Blog_
  继 1.1.2 之后仅两天再次发布补丁，说明 1.1 系列已进入稳定收敛阶段，主流工作台（Part、Sketcher、Assembly）正在密集修复拓扑指针、参数化重算等回归问题。

- **[FreeCAD 1.1.2 released](https://blog.freecad.org/2026/07/23/freecad-1-1-2-released/)** — _FreeCAD Blog_
  与 1.1.3 配套的修复版本，重点处理 OCCT 升级带来的边界表示 (B-Rep) 兼容性问题，建议所有 build123d / CadQuery 用户同步升级。

- **[FreeCAD E‑Sport Speed Run Challenge at EMF camp 2026](https://blog.freecad.org/2026/07/27/freecad-e-sport-speed-run-challenge-at-emf-camp-2026/)** — _FreeCAD Blog_
  在欧洲最大硬件黑客松 EMF Camp 上举办"限时建模赛"，把工程软件推广形式娱乐化，对开源 CAD 社区生态建设具有示范意义。

- **[WIP Wednesday, 29 July 2026](https://blog.freecad.org/2026/07/29/wip-wednesday-29-july-2026/)** — _FreeCAD Blog_
  本周 WIP 显示 Toponaming、Assembly、Sketch 三大模块均有 PR 推进，是 FreeCAD 长期被诟病的"对象重命名/拓扑断裂"问题的攻坚期。

- **[Prusament PA11 Natural](https://blog.prusa3d.com/prusament-pa11-natural-material-with-extreme-mechanical-and-chemical-resistance_137458/)** — _Prusa Blog_
  尼龙 PA11 因低吸湿、高耐磨和耐化学性，被官方推荐用于齿轮、轴承等运动件。这意味着 DFM 工具（如 FreeCAD-DFM）需要尽快引入 PA/PET/CF 等工程塑料的工艺约束模型。

---

## 三、研究前沿

- **[Convex Collision-Free Regions](http://arxiv.org/abs/2607.26901v1)** — Kikuchi & Kanai
  用**凸可行域**显式刻画局部无碰撞空间，区别于传统距离场/惩罚力方法。在装配路径规划、机器人避障、CAM 刀路碰撞检测中可直接替代 SDF，加快收敛并保证严格无碰撞。

- **[StructureGS: Structure-aware Gaussian Splatting for Articulated Object Reconstruction](http://arxiv.org/abs/2607.26889v1)** — Lee et al.
  针对铰接物体的 3DGS 重建引入结构先验，可同时恢复多个运动部件的几何与关节拓扑。对机械臂、家电、汽车内饰等**逆向工程 → CAD 重构**流水线是关键技术储备。

- **[AtlasLC: Fast Codec-Ready Compression of Object-Centric 3D Gaussian Splatting](http://arxiv.org/abs/2607.26525v1)** — Kim et al.
  为 3DGS 提供面向编解码器的流式压缩方案，可降低扫描重建结果的体积——这对"实景→B-Rep"管线中网格/高斯资产的管理具有工程价值。

- **[Wonder: Video World Model Done Better](http://arxiv.org/abs/2607.26037v1)** — Xu et al.
  实时、相机可控的视频世界模型，可用于 CAD 设计评审中**物理交互与外观预览**的快速生成，是工业可视化环节的新工具候选。

- **[The Parameterized Complexity of Problems on Outer k‑Planar Graphs](http://arxiv.org/abs/2607.26936v1)** — Ren & Bodlaender
  对 outer k‑planar 图上的组合问题给出固定参数可解性结果，对板件排样 (nesting)、VLSI 布局、布线图等 NP‑hard 工程优化问题提供理论边界。

---

## 四、重点项目

### 🖥️ CAD 平台与编辑器

- **[FreeCAD/FreeCAD](https://github.com/FreeCAD/FreeCAD)** ⭐ 32,472
  跨平台开源参数化建模标杆，本周双版本更新。仍是 build123d、cad-cae-copilot、freecad-mcp 等下游项目的几何底座。

- **[openscad/openscad](https://github.com/openscad/openscad)** ⭐ 9,842
  "程序员的实体建模器"，以脚本描述几何。AgentSCAD、Kiln、BelfrySCAD 等 AI/混合工作流都围绕其语法扩展。

- **[solvespace/solvespace](https://github.com/solvespace/solvespace)** ⭐ 4,069
  轻量级参数化 2D/3D CAD，约束求解器独立可移植，适合嵌入式场景与教学。

- **[earthtojake/text-to-cad](https://github.com/earthtojake/text-to-cad)** ⭐ 11,866
  面向 CAD / 机器人 / 硬件设计的 Agent Skills 集合，为 Claude/Cursor 等 LLM 提供结构化建模知识，是 text-to-CAD 入口型项目。

- **[armpro24-blip/cad-cae-copilot](https://github.com/armpro24-blip/cad-cae-copilot)** ⭐ 42
  AI‑native 工作台：text‑to‑CAD/CAE 直接输出 build123d + OpenCASCADE 几何，附带稳定拓扑指针、确定性 critique 和 MCP server，是本周最具代表性的"AI × CAD"端到端栈。

- **[neka-nat/freecad-mcp](https://github.com/neka-nat/freecad-mcp)** ⭐ 1,521
  FreeCAD 的 Model Context Protocol 服务端，让任意支持 MCP 的 LLM 客户端直接操作 FreeCAD 文档树。

### 📐 计算几何与内核

- **[Open-Cascade-SAS/OCCT](https://github.com/Open-Cascade-SAS/OCCT)** ⭐ 2,694
  开源 3D CAD/CAM/CAE 平台基石，B-Rep、布尔运算、STEP/IGES 读写全部依赖它。FreeCAD、CadQuery、f3d、Mayo、EzyCad 的共同底座。

- **[CGAL/cgal](https://github.com/CGAL/cgal)** ⭐ 5,990
  C++ 计算几何算法库，覆盖三角化、布尔、Alpha Shape、运动规划等，是学术与工业 CAD/机器人开发的"事实标准"。

- **[cnr-isti-vclab/meshlab](https://github.com/cnr-isti-vclab/meshlab)** ⭐ 5,770
  开源网格处理系统，覆盖扫描数据清理、修复、重网格化，是逆向工程→打印的关键环节。

- **[pyvista/pyvista](https://github.com/pyvista/pyvista)** ⭐ 3,755
  Python 3D 可视化与网格分析库，与 trimesh、VTK 协同，是科研仿真和 CAD 快速可视化的首选。

- **[mikedh/trimesh](https://github.com/mikedh/trimesh)** ⭐ 3,638
  Python 三角网格加载/处理库，常用于 STEP→mesh 后的下游分析。

### 🧬 创成式与参数化设计

- **[clay-good/anvilate](https://github.com/clay-good/anvilate)** ⭐ 4
  面向机械工程师的本地优先设计 Agent：自然语言 → **物理验证过的参数化 STEP/DXF**，可直接落入 CATIA/SolidWorks/NX/AutoCAD，并附带可编辑 Python 源码。

- **[codeofaxel/Kiln](https://github.com/codeofaxel/Kiln)** ⭐ 40
  开源 MCP 服务器：让 AI Agent 完成"设计 → 切片 → 打印"全链路，覆盖 Bambu/Creality/Prusa/Klipper/OctoPrint 等主流生态。

- **[Kevoyuan/AgentSCAD](https://github.com/Kevoyuan/AgentSCAD)** ⭐ 5
  将自然语言转换为**经过几何修复和制造验证**的 OpenSCAD 工件，与 Kiln 形成"OpenSCAD 路径"对照。

- **[BelfrySCAD/BelfrySCAD](https://github.com/BelfrySCAD/BelfrySCAD)** ⭐ 2
  OpenSCAD + WYSIWYG 的混合过程式 CAD 系统，致力于降低脚本式建模的入门门槛。

### 🖨️ 3D 打印与制造

- **[MarlinFirmware/Marlin](https://github.com/MarlinFirmware/Marlin)** ⭐ 17,506
  全球应用最广的 RepRap 固件，3D 打印底层控制的事实标准。

- **[OrcaSlicer/OrcaSlicer](https://github.com/OrcaSlicer/OrcaSlicer)** ⭐ 15,271
  跨厂商 G-code 生成器 (Bambu/Prusa/Voron/VzBot/Creality 等)，本周活跃度高，是工程材料 (如 PA11) 工艺落地的关键软件层。

- **[Ultimaker/Cura](https://github.com/Ultimaker/Cura)** ⭐ 7,003
  基于 Uranium 框架的开源切片 GUI，工程化与插件生态成熟。

- **[maziggy/bambuddy](https://github.com/maziggy/bambuddy)** ⭐ 2,691
  自托管 Bambu Lab 控制中枢，单机到 40 台集群均可管理，体现"去云化"的私有农场趋势。

- **[Donkie/Spoolman](https://github.com/Donkie/Spoolman)** ⭐ 2,652
  3D 打印耗材库存管理，配合 Prusament PA11 等多材料场景可做材料全生命周期追溯。

### 🔗 文件格式与互操作

- **[f3d-app/f3d](https://github.com/f3d-app/f3d)** ⭐ 4,578
  基于 Qt + VTK 的极简 3D 查看器，支持 STEP/IGES/STL/3MF 等数十种格式，是 CAD 文件审阅的"瑞士军刀"。

- **[fougue/mayo](https://github.com/fougue/mayo)** ⭐ 2,107
  基于 Qt + OpenCascade 的 3D CAD 查看/转换器，专业面向 STEP/IGES 工作流。

- **[partcad/partcad](https://github.com/partcad/partcad)** ⭐ 479
  面向可制造物理产品的包管理器，致力于构建"数字主线 / TDP"标准，对零部件复用和供应链级 PDM 具有战略意义。

- **[bldrs-ai/conway](https://github.com/bldrs-ai/conway)** ⭐ 22
  面向 Web 的高性能 IFC & STEP 引擎，与 bldrs-ai/Share 共同构建浏览器原生 BIM/CAD 协作平台。

- **[andymai/occt-wasm](https://github.com/andymai/occt-wasm)** ⭐ 35
  OpenCascade 编译为 WebAssembly (~4MB brotli) 并提供干净的 TypeScript API，让 B-Rep 级精确建模在浏览器中成为可能。

### 🐍 Code-CAD 与脚本化

- **[CadQuery/cadquery](https://github.com/CadQuery/cadquery)** ⭐ 5,529
  基于 OCCT 的 Python 参数化脚本框架，是 build123d 上游的事实标准，被工业用户大量用于自动化建模。

- **[andymai/brepjs](https://github.com/andymai/brepjs)** ⭐ 73
  Web 端的精确 B-Rep CAD 库，把 OCCT 能力以原生 JS 接口暴露

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*