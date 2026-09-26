# CAD/机械结构开源动态日报 2026-09-26

> 数据来源: GitHub Search API (102 仓库) | ArXiv cs.GR+cs.CG (7 篇论文) | RSS 新闻 (5 条) | 生成时间: 2026-09-26 03:00 UTC

---

# 📐 CAD 与机械设计开源动态日报

**日期：2026-09-23** ｜ 覆盖范围：行业新闻 / ArXiv cs.GR + cs.CG / GitHub 活跃仓库

---

## 1. 今日速览

今日 CAD 开源生态呈现三大主线：**消费级硬件迭代加速**（Bambu Lab R1 发布与跨界营销）、**AI-CAD 融合持续深化**（text-to-cad、Multi-Agent CAD、MCP 服务器家族再添新成员）、**几何内核 WebAssembly 化**（OCCT-WASM、Conway 等项目让 STEP/IFC 在浏览器原生运行成为现实）。与此同时，Voronoi 图与曲面图算法研究继续为 CAD 内核提供理论弹药，而 FreeCAD、OpenSCAD、OrcaSlicer 等核心项目的活跃开发态势印证了开源 CAD/3D 打印栈进入稳态成熟期。

---

## 2. 行业脉搏

| # | 标题 | 来源 | 要点与意义 |
|---|------|------|-----------|
| 1 | **[Big Job. Light Work. Bambu Lab Launches R1](https://blog.bambulab.com/big-job-light-work-bambu-lab-launches-r1/)** | Bambu Lab | 大幅面轻量级 3D 打印机新品发布，继续巩固 Bambu 在消费级市场的产品矩阵，可能改变大尺寸打印的成本曲线。 |
| 2 | **[WIP Wednesday, 23 September 2026](https://blog.freecad.org/2026/09/23/wip-wednesday-23-september-2026/)** | FreeCAD Blog | 每周开发进度汇总，是 FreeCAD 1.x 路线图兑现情况的官方窗口，关注 PartDesign / Sketcher / Assembly 进展。 |
| 3 | **[Tutorial: Lofting between Parts with Facebinders](https://blog.freecad.org/2026/09/21/tutorial-lofting-between-parts-with-facebinders/)** | FreeCAD Blog | 利用 Facebinder 进行跨实体放样的高级建模技巧发布，扩展了 FreeCAD 在复杂曲面过渡场景下的工作流。 |
| 4 | **[Factorio Has Arrived on Printables](https://blog.prusa3d.com/factorio-has-arrived-on-printables_138519/)** | Prusa Blog | 热门游戏 IP 与 Printables 平台联动，反映 Prusa 在内容生态运营与社区运营上的持续投入。 |
| 5 | **[Bambu Lab × Bambū Desserts 跨界合作](https://blog.bambulab.com/when-3d-printing-meets-a-sweet-treat-bambu-lab-and-bambu-desserts-drinks-team-up-for-a-one-of-a-kind-collaboration/)** | Bambu Lab | 3D 打印与餐饮品牌联名，凸显硬件厂商通过跨界营销拓展 C 端用户教育的策略。 |

---

## 3. 研究前沿

| # | 论文 | 链接 | 贡献要点 |
|---|------|------|----------|
| 1 | **A Collapse Process for Farthest Voronoi Diagrams of Lines in Three Dimensions** <br> Papadopoulou, Suderland et al. | [arxiv.org/abs/2609.29865](http://arxiv.org/abs/2609.29865v1) | 提出三维空间中直线集合的最远 Voronoi 图的高效构造算法，对 CNC 刀具路径规划、机器人运动避障有直接应用价值。 |
| 2 | **Endpoint Covering of Axis-Parallel Segments: Bichromatic and Monochromatic One-Center** <br> Ghosh, Acharyya et al. | [arxiv.org/abs/2609.29821](http://arxiv.org/abs/2609.29821v1) | 轴平行线段集合的端点覆盖一中心问题新解法，适配 PCB 走线、机构轨迹最优化等机械设计场景。 |
| 3 | **OREO: Fidelity Alignment in 3D Generation via On-the-fly Rendering-Editing Optimization** <br> Ma, Hu et al. | [arxiv.org/abs/2609.29788](http://arxiv.org/abs/2609.29788v1) | 通过即时渲染-编辑闭环优化提升生成 3D 资产视觉保真度，对生成式 CAD / 数字孪生资产生成流程有借鉴意义。 |
| 4 | **Linear-Time FPT Algorithm for Surface Disjoint Paths via Surface Cutting** <br> Cho, Oh et al. | [arxiv.org/abs/2609.29324](http://arxiv.org/abs/2609.29324v1) | 在有界欧拉亏格曲面上给出 k-不相交路径问题的线性时间 FPT 算法，为拓扑驱动的装配/布线验证提供理论工具。 |
| 5 | **WildHSR: Metric Feed-Forward 4D People-Scene Reconstruction from a 3D Foundation Model** <br> Bright, Zelek | [arxiv.org/abs/2609.29106](http://arxiv.org/abs/2609.29106v1) | 从三维基础模型前馈恢复度量尺度的人-场景 4D 重建，对工业现场扫描、人机工程仿真具参考价值。 |

---

## 4. 重点项目

### 🖥️ CAD 平台与编辑器

- **[FreeCAD/FreeCAD](https://github.com/FreeCAD/FreeCAD)** ⭐ **33,758** ｜ C++
  开源多平台三维参数化建模器的事实标准，是机械结构开源生态的"基座"。
- **[pascalorg/editor](https://github.com/pascalorg/editor)** ⭐ **24,311** ｜ TypeScript
  开源三维建筑编辑器，内置 CLI 与 MCP 工具，是 AI Agent 友好的新型 CAD 形态代表。
- **[openscad/openscad](https://github.com/openscad/openscad)** ⭐ **10,296** ｜ C++
  "程序员的实体 3D CAD 建模器"，是代码式 CAD 工作流的开创者。
- **[LibreCAD/LibreCAD](https://github.com/LibreCAD/LibreCAD)** ⭐ **6,412** ｜ C++
  跨平台二维 CAD，支持 DXF/DWG，是工程图纸层面的成熟替代。
- **[HakanSeven12/OpenCADStudio](https://github.com/HakanSeven12/OpenCADStudio)** ⭐ **2,280** ｜ Rust
  Rust 编写的 2D/3D CAD 应用，DWG/DXF 支持 + GPU 加速渲染，展示了 Rust 在 CAD 领域的新可能。

### 📐 计算几何与内核

- **[google/draco](https://github.com/google/draco)** ⭐ **7,492** ｜ C++
  谷歌开源的 3D 网格/点云压缩库，工业级 Web 传输与存储基础组件。
- **[CGAL/cgal](https://github.com/CGAL/cgal)** ⭐ **6,056** ｜ C++
  计算几何算法库的权威实现，是学术与工业 CAD 内核的几何算法来源。
- **[pyvista/pyvista](https://github.com/pyvista/pyvista)** ⭐ **3,826** ｜ Python
  基于 VTK 的 Python 三维可视化与网格分析库，是仿真与后处理的主力工具。
- **[mikedh/trimesh](https://github.com/mikedh/trimesh)** ⭐ **3,688** ｜ Python
  轻量级 Python 三维网格库，是 STL/3MF 处理、3D 打印前置处理的常用底座。
- **[MeshInspector/MeshLib](https://github.com/MeshInspector/MeshLib)** ⭐ **826** ｜ C++
  几何布尔运算、修复、重网格化、点云三角化的工业级 SDK，多语言绑定。
- **[polydera/trueform](https://github.com/polydera/trueform)** ⭐ **146** ｜ C++
  CSG 引擎：精确网格布尔运算、空间查询、排列与重网格化，CPU 性能突出。

### 🧬 创成式与参数化设计

- **[earthtojake/text-to-cad](https://github.com/earthtojake/text-to-cad)** ⭐ **16,371** ｜ Python
  面向 CAD/CAE/CAM 的 Agent 技能库，是自然语言到工程模型转换的代表性项目。
- **[Pan-Chera/Multi-Agent-CAD](https://github.com/Pan-Chera/Multi-Agent-CAD)** ⭐ **1,004** ｜ Python
  解耦式多智能体文本到 CAD 生成框架，引入约束测试时计算，提升生成可控性。
- **[PhySpace/SimpleCADAPI](https://github.com/PhySpace/SimpleCADAPI)** ⭐ **130** ｜ Python
  面向语言模型的 Agent 原生 CAD SDK，可创建、检视并重建可编辑的三维模型。
- **[partcad/partcad](https://github.com/partcad/partcad)** ⭐ **496** ｜ Python
  物理产品的"包管理器"，打造可制造件的 Digital Thread / TDP 标准。
- **[Kevoyuan/AgentSCAD](https://github.com/Kevoyuan/AgentSCAD)** ⭐ **15** ｜ TypeScript
  AI 原生 CAD Agent，将自然语言转换为可验证的 OpenSCAD 几何并自动修复。

### 🖨️ 3D 打印与制造

- **[MarlinFirmware/Marlin](https://github.com/MarlinFirmware/Marlin)** ⭐ **17,595** ｜ C++
  RepRap 阵营事实标准固件，覆盖 8/32 位 MCU，被大量商用打印机采用。
- **[OrcaSlicer/OrcaSlicer](https://github.com/OrcaSlicer/OrcaSlicer)** ⭐ **15,778** ｜ C++
  多品牌切片器（Bambu/Prusa/Voron/Creality），社区版本迭代极快。
- **[Ultimaker/Cura](https://github.com/Ultimaker/Cura)** ⭐ **7,046** ｜ Python
  基于 Uranium 框架的成熟切片 GUI，桌面端 3D 打印工作流经典入口。
- **[Sienci-Labs/gsender](https://github.com/Sienci-Labs/gsender)** ⭐ **372** ｜ TypeScript
  grbl / grblHAL CNC 的连接与控制前端，与 CAD/CAM 后处理形成闭环。
- **[Donkie/Spoolman](https://github.com/Donkie/Spoolman)** ⭐ **2,851** ｜ Python
  3D 打印耗材库存管理系统，体现打印农场化与运营化的趋势。
- **[codeofaxel/Kiln](https://github.com/codeofaxel/Kiln)** ⭐ **68** ｜ Python
  面向 AI Agent 的 3D 打印 MCP 服务器：描述/绘制→切片→打印，覆盖 Bambu/Prusa/Klipper/Marlin 等多协议。

### 🔗 文件格式与互操作

- **[f3d-app/f3d](https://github.com/f3d-app/f3d)** ⭐ **4,724** ｜ C++
  快速极简三维查看器，是 STEP/IGES/STL 在桌面与 CI 中预览的事实工具。
- **[CadQuery/CQ-editor](https://github.com/CadQuery/CQ-editor)** ⭐ **1,244** ｜ Python
  CadQuery 的 PyQt GUI，把参数化脚本与交互建模无缝结合。
- **[andymai/brepjs](https://github.com/andymai/brepjs)** ⭐ **113** ｜ TypeScript
  基于精确 B-Rep 几何的 Web CAD 库，是浏览器端 CAD 引擎的代表性尝试。
- **[andymai/occt-wasm](https://github.com/andymai/occt-wasm)** ⭐ **57** ｜ Rust
  OpenCascade 编译为 WebAssembly，~4MB brotli 体积 + 干净 TS API，使浏览器原生 CAD 成为可能。
- **[bldrs-ai/conway](https://github.com/bldrs-ai/conway)** ⭐ **23** ｜ TypeScript
  面向 Web CAD 的高性能 IFC & STEP 引擎，AEC 场景的浏览器化基础设施。
- **[NepomukWolf/IFC-Language-Server](https://github.com/NepomukWolf/IFC-Language-Server)** ⭐ **22** ｜ Rust
  IFC STEP 文件的 LSP 实现，让 BIM 模型在编辑器中获得类代码的开发体验。

### 🐍 Code-CAD 与脚本化

- **[CadQuery/cadquery](https://

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*