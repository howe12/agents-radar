# CAD/机械结构开源动态日报 2026-09-01

> 数据来源: GitHub Search API (115 仓库) | ArXiv cs.GR+cs.CG (7 篇论文) | RSS 新闻 (3 条) | 生成时间: 2026-09-01 03:02 UTC

---

# CAD/机械结构开源动态日报

> 📅 2026-08-28 ｜ 🌐 涵盖：行业新闻 · ArXiv 论文 · GitHub 热门仓库

---

## 一、今日速览

今日开源 CAD 与机械设计生态呈现三大主线：**FreeCAD 正式引入 Git 驱动的文件版本管理（History Workbench）**，标志着开源参数化 CAD 进入"可追溯工程"时代；**ArXiv 多篇几何/形变论文**（Kirigami 统一框架、高斯辐射场的 As-Rigid-As-Possible 形变、层次样条的组合地图）从理论侧推动 CAD 形变与多尺度建模；**GitHub 仓库侧则印证 AI-Agent 与文本生成 CAD 浪潮加速**——`text-to-cad`（14k⭐）、`freecad-mcp`、`freecad-ai`、`Kiln`、`anvilate` 等项目集中爆发，CADAM 等 Web 端 Text-to-CAD 已成落地形态。开源 G-code 工具链同样活跃，浏览器端 3 轴 CNC 模拟器与切片可视化持续涌现。

---

## 二、行业脉搏

1. **🟢 [History Workbench 为 FreeCAD 带来 Git 驱动的文件版本管理](https://blog.freecad.org/2026/08/28/history-workbench-brings-git-powered-file-versioning-to-freecad/)** — FreeCAD Blog
   第三方工作台将 Git 作为底层历史引擎，实现模型差异比较与变更回溯。这意味着 FreeCAD 首次具备"工程师级的版本控制"能力，对团队协作、PLM 集成与设计审计具有里程碑意义。

2. **🟢 [WIP Wednesday — 2026 年 8 月 26 日](https://blog.freecad.org/2026/08/27/wip-wednesday-26-august-2026/)** — FreeCAD Blog
   例行的 FreeCAD 开发进度周报，涵盖 PartDesign、装配、Sketcher、OCCT 升级等核心模块的合并进展，反映 FreeCAD 主干在 1.0 路线上的稳定推进。

3. **🟢 [DIY Summer Sandals by Sofia Rousinovich](https://blog.bambulab.com/diy-summer-sandals-by-sofia-rousinovich/)** — Bambu Lab
   创作者展示了使用 Bambu 设备一体化打印穿戴产品的工艺，体现消费级 3D 打印正在从"原型"向"柔性消费品"延伸，对参数化鞋垫、人体工学构件的设计反馈链有参考价值。

4. **🟢 HistoryWorkbench 仓库 [eblanshey/HistoryWorkbench](https://github.com/eblanshey/HistoryWorkbench)（⭐137）**
   对应上述 FreeCAD Blog 新闻的源代码仓库：基于 3D 与 Feature Tree 双视图对比的变更审查工具，是 Git+CFD/CAE 协同的可复用范式。

---

## 三、研究前沿

1. **[Domain-Varying 2D Green's Functions for Cage-based Deformation](http://arxiv.org/abs/2608.31003v1)** — Dong Xiao, Renjie Chen 等
   将"控制笼形变"从均匀 Green 函数推广到域可变形式，提供更强的局部控制能力。对**角色绑定、骨骼动画驱动的 CAD 几何编辑**（例如汽车 A 面修型、装配体姿态微调）具有直接应用价值。

2. **[A unified geometric design framework for kirigami structures](http://arxiv.org/abs/2608.30032v1)** — Qinghai Jiang, Gary P. T. Choi
   系统性地统一了 Kirigami（剪纸超材料）的几何设计方法。对**柔性电子、折展机构、可展开结构**等机械创新设计场景提供参数化框架，可与参数化 CAD 工具直接对接。

3. **[As-Rigid-As-Possible Deformation of Gaussian Radiance Fields](http://arxiv.org/abs/2608.29538v1)** — Xinhao Tong, Tianjia Shao 等
   将 ARAP 形变推广到 3DGS 辐射场，是数字孪生与逆向工程的桥梁。对**基于 NeRF/3DGS 的扫描件局部修改、CAD 化重建**具有重要推进作用。

4. **[Proximity3D: Shape from Capacitive Proximity on Sensing Manifold](http://arxiv.org/abs/2608.30344v1)** — Hao Chen, Chenming Wu 等
   提出基于电容感应的非接触式三维重建方法，跳出传统图像/深度的平面传感假设。对**柔性机器人、不可见内部结构、人机交互式建模**提供新传感模态。

5. **[Combinatorial maps for hierarchical splines](http://arxiv.org/abs/2608.29545v1)** — Caleb B. Goates, Kendrick M. Shepherd 等
   在等几何分析（IGA）中为层次样条引入组合地图数据结构，提升多尺度自适应分析的拓扑稳健性。对**CAE 与 CAD 双向耦合、复杂装配体多分辨率仿真**意义显著。

6. **[Unfolding Overlaps of the Exceptional Regular Polytopes](http://arxiv.org/abs/2608.30285v1)** — Satyan L. Devadoss, Matthew Harvey 等
   给出了 24-cell、120-cell、600-cell 三种 4D 特殊正多胞体的显式棱展开。数学纯度极高，对**4D 几何可视化、机器人构型空间研究**提供理论基础。

---

## 四、重点项目

### 🖥️ CAD 平台与编辑器

| 仓库 | Star | 核心价值 |
|---|---|---|
| [FreeCAD/FreeCAD](https://github.com/FreeCAD/FreeCAD) | ⭐33,176 | 跨平台开源参数化 3D 模型器，机械设计领域事实标准之一；与 OCCT 内核深度绑定，支持 STEP/IGES。 |
| [pascalorg/editor](https://github.com/pascalorg/editor) | ⭐21,800 | 面向建筑方案的 3D 编辑器，TypeScript 实现，证明 Web 端复杂 CAD 编辑已具备生产级体验。 |
| [earthtojake/text-to-cad](https://github.com/earthtojake/text-to-cad) | ⭐14,084 | 提供面向 AI Agent 的 CAD/CAE/CAM 技能库，是 LLM 调用 CAD 工具的事实中间层。 |
| [openscad/openscad](https://github.com/openscad/openscad) | ⭐10,080 | "程序员的实体建模器"，文本驱动的参数化 CAD 原型，是 Code-CAD 文化的源头。 |
| [Adam-CAD/CADAM](https://github.com/Adam-CAD/CADAM) | ⭐5,066 | 开源 Text-to-CAD Web 应用，将自然语言直接转 3D 模型，体现 AI 原生 CAD 走向大众化。 |
| [gumyr/build123d](https://github.com/gumyr/build123d) | ⭐2,975 | Python CAD 编程库，结合 BuildPart/BuildSketch 范式，是 CadQuery 之后的下一代 Code-CAD 候选。 |
| [solvespace/solvespace](https://github.com/solvespace/solvespace) | ⭐4,131 | 轻量级 2D/3D 参数化 CAD，约束求解器干净，适合嵌入式、教育场景。 |
| [Keychron/Keychron-Keyboards-Hardware-Design](https://github.com/Keychron/Keychron-Keyboards-Hardware-Design) | ⭐3,663 | 工业级键盘 STEP/DXF/DWG/PDF 公开资产，体现"开源硬件数字主线"最佳实践。 |

### 📐 计算几何与内核

| 仓库 | Star | 核心价值 |
|---|---|---|
| [CGAL/cgal](https://github.com/CGAL/cgal) | ⭐6,028 | C++ 计算几何算法库的事实标准，Delaunay、网格处理、布尔运算在 CAD/CAE 中广泛调用。 |
| [Open-Cascade-SAS/OCCT](https://github.com/Open-Cascade-SAS/OCCT) | ⭐2,820 | 开源 B-Rep 几何内核，FreeCAD、CadQuery、Mayo 等几乎所有开源 CAD 都依赖之。 |
| [pyvista/pyvista](https://github.com/pyvista/pyvista) | ⭐3,789 | 基于 VTK 的 Python 3D 可视化与网格分析，对仿真前处理与科学可视化友好。 |
| [mikedh/trimesh](https://github.com/mikedh/trimesh) | ⭐3,662 | 纯 Python 三角网格库，几何导入/导出/布尔接口轻量；3D 打印预处理常用。 |
| [MeshInspector/MeshLib](https://github.com/MeshInspector/MeshLib) | ⭐811 | 高速网格布尔、修复、重网格、ICP，配 Python/C#/C/JS 绑定，是逆向工程实用工具。 |
| [LiangliangNan/Easy3D](https://github.com/LiangliangNan/Easy3D) | ⭐1,652 | 轻量高效的 C++/Python 3D 数据处理与渲染库，适合研究与产品集成两端。 |

### 🧬 创成式与参数化设计

| 仓库 | Star | 核心价值 |
|---|---|---|
| [leap71/PicoGK](https://github.com/leap71/PicoGK) | ⭐1,076 | 紧凑稳健的几何内核，面向"计算工程"，与 Leap71 的仿生工程实践配套。 |
| [partcad/partcad](https://github.com/partcad/partcad) | ⭐491 | 可制造物理产品的"包管理器+数字主线"，尝试为硬件建立类似 npm 的协作层。 |
| [clay-good/anvilate](https://github.com/clay-good/anvilate) | ⭐6 | 本地优先的机械设计 Agent，自然语言 → 物理校验的 STEP/DXF，可直接接入主流 CAD。 |
| [codeofaxel/Kiln](https://github.com/codeofaxel/Kiln) | ⭐51 | 开源 3D 打印 MCP 服务器，AI Agent 一站式设计→切片→打印，覆盖 Bambu/Prusa/Klipper/Marlin。 |

### 🖨️ 3D 打印与制造

| 仓库 | Star | 核心价值 |
|---|---|---|
| [MarlinFirmware/Marlin](https://github.com/MarlinFirmware/Marlin) | ⭐17,559 | RepRap 阵营事实标准固件，覆盖 8/32 位 MCU，几乎所有商用桌面机衍生于此。 |
| [OrcaSlicer/OrcaSlicer](https://github.com/OrcaSlicer/OrcaSlicer) | ⭐15,546 | 主流 G-code 生成器，跨 Bambu/Prusa/Voron/VzBot/Creality 生态。 |
| [Ultimaker/Cura](https://github.com/Ultimaker/Cura) | ⭐7,028 | 历史悠久、消费级 3D 打印切片 GUI 标杆，基于 Uranium 框架。 |
| [Sienci-Labs/gsender](https://github.com/Sienci-Labs/gsender) | ⭐366 | GRBL/grblHAL CNC 的连接与控制面板，降低桌面 CNC 上手门槛。 |
| [fellesverkstedet/Bark-beetle-parametric-toolpaths](https://github.com/fellesverkstedet/Bark-beetle-parametric-toolpaths) | ⭐124 | Grasshopper 插件，将几何直接生成 3D 打印/CNC/激光/机器人刀路，并支持 AR 投影预览。 |

### 🔗 文件格式与互操作

| 仓库 | Star | 核心价值 |
|---|---|---|
| [CadQuery/cadquery](https://github.com/CadQuery/cadquery) | ⭐5,672 | 基于 OCCT 的 Python 参数化脚本框架，是 Code-CAD 工业化的代表作。 |
| [f3d-app/f3d](https://github.com/f3d-app/f3d) | ⭐4,658 | 快速极简的 3D 查看器，跨多格式，是 CAD 资产快速预览的事实标准。 |
| [fougue/mayo](https://github.com/fougue/mayo) | ⭐2,141 | 基于 Qt+OCCT 的 CAD 查看/转换器，轻量替代大型 CAD 浏览器。 |
| [sgenoud/replicad](https://github.com/sgenoud/replicad) | ⭐676 | 浏览器内构建 3D 模型的 TypeScript 库，Web 端 Code-CAD 的代表。 |
| [bldrs-ai/Share](https://github.com/bldrs-ai/Share) | ⭐185 | 浏览器端 BIM/CAD 协同查看器，支持 IFC/STEP/STL/OBJ

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*