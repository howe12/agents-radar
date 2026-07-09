# CAD/机械结构开源动态日报 2026-07-09

> 数据来源: GitHub Search API (105 仓库) | ArXiv cs.GR+cs.CG (13 篇论文) | RSS 新闻 (5 条) | 生成时间: 2026-07-09 05:53 UTC

---

# CAD/机械结构开源动态日报
**2026 年 7 月 · 编译自 FreeCAD/Prusa/Bambu Lab、ArXiv cs.GR·cs.CG 与 GitHub Trending**

---

## 1. 今日速览

今日开源 CAD/机械设计生态呈现三条主线交织的图景：**FreeCAD 生态进入"竞赛+拨款"双轮驱动阶段**，2026 社区设计大赛结果与 Q2 拨款同日公布，叠加 WIP Wednesday 持续活跃，长期主义社区建设信号明显；**AI/LLM 驱动的"文本→CAD"与 MCP 协议化正在重塑设计入口**，从 CADAM、anvilate 到 rhino-mcp、freecad-mcp，新一代 Agent 设计栈以每周数十个仓库的速度涌现；**底层几何内核向 WebAssembly 与 Rust 重构推进**，occt-wasm、cadcore（纯 Rust B-Rep）、brepjs 等项目让浏览器与桌面边界进一步模糊。Prusa INDX 创始版出货、Bambu 委内瑞拉 maker 社区报道则把焦点拉回"制造与社区"。

---

## 2. 行业脉搏

- 🏆 **[FreeCAD Community Design Competition 2026: The Results!](https://blog.freecad.org/2026/07/06/freecad-community-design-competition-2026-the-results/)** — FreeCAD 官方公布 2026 年社区设计大赛获奖作品。这是开源参数化建模领域最具规模的年度赛事之一，结果往往会成为后续功能需求与社区 Workbench 演进的风向标。

- 💰 **[Q2 2026 grants announced](https://blog.freecad.org/2026/07/04/q2-2026-grants-announced/)** — FreeCAD 基金会公布二季度拨款名单。结合 Q1 已批出的项目，可看出 OCCT 升级、Assembly、TechDraw、Path（CAM）等工作台是重点资助方向，对依赖 FreeCAD 做工程交付的团队意味着未来 6 个月的功能成熟度可期。

- 🛠️ **[WIP Wednesday, 8 July 2026](https://blog.freecad.org/2026/07/08/wip-wednesday-8-july-2026/)** — 每周的 WIP 集中展示了 Part Design、Assembly、Sketcher、Addon 等多条线的合并请求与功能预览，是判断 FreeCAD 主干走向的最短路径。

- 📦 **[State of INDX – July 2026 Update: Founder's Edition Shipping](https://blog.prusa3d.com/indx_july_2026_update_137377/)** — Prusa 新一代 INDX 切片/打印生态进入 Founders Edition 实物发货阶段，意味着 Prusa 正从"开源切片器 + 打印机公司"向"打印操作系统"延伸，对 Klipper/Mainsail/OrcaSlicer 等开源切片栈构成新的竞争。

- 🤝 **[When Venezuela needed help, the makers moved first](https://blog.bambulab.com/when-venezuela-needed-help-the-makers-moved-first/)** — Bambu Lab 报道拉美 maker 在断电断网环境下的本地化制造救援，反映出消费级 3D 打印在人道/社区场景的渗透，也是评估"去云化、本地化"控制栈（bambuddy、Klipper）需求侧的信号。

---

## 3. 研究前沿

- 📊 **[Benchmarking and Engineering Data Structures for Spherical Range Queries](http://arxiv.org/abs/2607.07367v1)** — Bläsius 等人对球形范围查询的数据结构进行系统基准与工程化优化。**对 CAD 的意义**：球形查询是点云处理、BVH 构造、装配体邻接分析的核心原语，本文的实测数据可被直接用于大型装配体的快速邻接搜索。

- 📏 **[$`(5+\epsilon)`$-Approximation of Fréchet Distance in Strongly Subquadratic Time](http://arxiv.org/abs/2607.06864v1)** — Liu & Wang 给出连续与离散 Fréchet 距离的随机近似算法，强次二次时间复杂度。**对 CAD/CAM 的意义**：曲线比较、刀具路径相似度检测、扫描路径规划等任务长期受限于 O(n²) 瓶颈，本算法为离线批量比对和在线检测打开了新窗口。

- 🔺 **[Simplicial subdivision of simplices of arbitrary dimension in spaces of constant curvature with bounded quality](http://arxiv.org/abs/2607.06801v1)** — Boissonnat 等人将 1942 年 Freudenthal 单纯形细分结果推广到常曲率空间，并给出有界质量保证。**对 CAD/CAE 的意义**：高质量四面体/单纯形网格是 FEM、碰撞检测与路径规划的几何基础，本工作对非欧场景（球面、曲面参数域）下的网格生成尤其重要。

- 🧮 **[Generalized altitudes and their bounds](http://arxiv.org/abs/2607.06187v1)** — Dal Poz Kourimska & Wintraecken 推广单纯形的"高"概念至任意顶点对面组合。**对 CAD 的意义**：高线（altitude）直接决定退化判定、网格外接球半径与 sliver 单元检测质量，可被 CGAL/OpenCASCADE 类内核的网格优化器吸收。

- 🎯 **[SPEAR: A Simulator for Photorealistic Embodied AI Research](http://arxiv.org/abs/2607.06701v1)** — Roberts 等人发布的具身 AI 仿真平台，强调真实感与可交互。**对机械设计的意义**：在工业机器人、装配仿真、数字孪生场景中，与现有 CAD 资产对接后，可形成"CAD 模型 → 物理一致渲染 → 机器人策略训练"闭环，是数字工厂仿真的潜在新基座。

---

## 4. 重点项目

### 🖥️ CAD 平台与编辑器

- **[FreeCAD/FreeCAD](https://github.com/FreeCAD/FreeCAD)** · ⭐ 31,999 · C++ · 官方维护的开源多平台参数化 3D 建模器，是当下与商业 SolidWorks/Fusion 直接竞争的"全功能"开源方案。
- **[openscad/openscad](https://github.com/openscad/openscad)** · ⭐ 9,725 · C++ · "程序员的实体建模器"，以脚本描述几何；是参数化与可复现设计的标杆。
- **[xiangechen/chili3d](https://github.com/xiangechen/chili3d)** · ⭐ 4,663 · TypeScript · 浏览器端 3D CAD 应用，代表 CAD 客户端向 Web 全面迁移的趋势。
- **[Adam-CAD/CADAM](https://github.com/Adam-CAD/CADAM)** · ⭐ 4,751 · TypeScript · 开源 Text-to-CAD Web 应用，与 LLM 协同形成新设计入口。
- **[earthtojake/text-to-cad](https://github.com/earthtojake/text-to-cad)** · ⭐ 7,865 · JavaScript · "CAD、机器人、硬件设计"的 Agent Skills 集合，是 Agent 时代的 CAD 工具注册表雏形。
- **[solvespace/solvespace](https://github.com/solvespace/solvespace)** · ⭐ 4,042 · C++ · 参数化 2D/3D CAD，约束求解器的轻量代表。
- **[LibreCAD/LibreCAD](https://github.com/LibreCAD/LibreCAD)** · ⭐ 6,061 · C++ · 跨平台 2D CAD，DXF/DWG 读写与可定制的 GUI。

### 📐 计算几何与内核

- **[CGAL/cgal](https://github.com/CGAL/cgal)** · ⭐ 5,972 · C++ · 计算几何算法库的事实标准，被众多商业与开源 CAD 内核依赖。
- **[Open-Cascade-SAS/OCCT](https://github.com/Open-Cascade-SAS/OCCT)** · ⭐ 2,630 · C++ · 开源 B-Rep 内核，FreeCAD、Salome、Mayo 等的底座。
- **[pyvista/pyvista](https://github.com/pyvista/pyvista)** · ⭐ 3,736 · Python · 基于 VTK 的 3D 可视化与网格分析，CAE/CFD/CAD 后处理桥梁。
- **[mikedh/trimesh](https://github.com/mikedh/trimesh)** · ⭐ 3,614 · Python · 三角网格的加载/分析/布尔库，3D 打印预处理常用工具。
- **[gkjohnson/three-mesh-bvh](https://github.com/gkjohnson/three-mesh-bvh)** · ⭐ 3,413 · JavaScript · three.js 网格 BVH，支撑浏览器端高效空间查询与光线投射。
- **[iShape-Rust/iOverlay](https://github.com/iShape-Rust/iOverlay)** · ⭐ 195 · Rust · 2D 多边形布尔运算，纯 Rust 高性能实现，象征 CAD 内核语言栈迁移。

### 🧬 创成式与参数化设计

- **[clay-good/anvilate](https://github.com/clay-good/anvilate)** · ⭐ 0 · Python · 本地优先的机械设计 Agent：自然语言描述 → 物理校验的 STEP/DXF，输出可直接落入 CATIA/SolidWorks/NX。
- **[tanishqbhattad/rhino-mcp](https://github.com/tanishqbhattad/rhino-mcp)** · ⭐ 8 · C# · Rhino 8 的 MCP 服务器，开放 115 个 AI 工具，标志主流 CAD 走向 LLM 协议化。
- **[PillarChairman/Altair-Inspire-Engineering-Design-Complete](https://github.com/PillarChairman/Altair-Inspire-Engineering-Design-Complete)** · ⭐ 10 · 拓扑优化与生成式设计的工程交付参考集合。
- **[tonykoop/makerbench-hwe](https://github.com/tonykoop/makerbench-hwe)** · ⭐ 0 · Python · 面向物理世界的 Agent 基准：空间推理、DFM 与 3D 制造能力评估。

### 🖨️ 3D 打印与制造

- **[MarlinFirmware/Marlin](https://github.com/MarlinFirmware/Marlin)** · ⭐ 17,468 · C++ · 3D 打印机固件事实标准，覆盖 8/32 位 MCU 与众多商业机型。
- **[OrcaSlicer/OrcaSlicer](https://github.com/OrcaSlicer/OrcaSlicer)** · ⭐ 15,052 · C++ · 跨厂商 G-code 生成器，连接 Bambu、Prusa、Voron、VzBot、RatRig、Creality。
- **[Ultimaker/Cura](https://github.com/Ultimaker/Cura)** · ⭐ 6,990 · Python · 基于 Uranium 框架的开源切片 GUI。
- **[dw-0/kiauh](https://github.com/dw-0/kiauh)** · ⭐ 4,460 · Python · Klipper 安装与更新助手，Klipper 生态入口工具。
- **[mainsail-crew/mainsail](https://github.com/mainsail-crew/mainsail)** · ⭐ 2,174 · Vue · Klipper 最流行的 Web 前端，是浏览器端打印控制的事实标准。
- **[Donkie/Spoolman](https://github.com/Donkie/Spoolman)** · ⭐ 2,570 · Python · 3D 打印耗材库存管理，小而美的开源 ERP 组件。
- **[maziggy/bambuddy](https://github.com/maziggy/bambuddy)** · ⭐ 2,490 · Python · 自托管 Bambu Lab 控制中心，应对"去云化"诉求；可管理 1–40 台机器。

### 🔗 文件格式与互操作

- **[f3d-app/f3d](https://github.com/f3d-app/f3d)** · ⭐ 4,530 · C++ · 快速极简的 3D 查看器，支持 STEP、glTF、3MF 等主流格式。
- **[fougue/mayo](https://github.com/fougue/mayo)** · ⭐ 2,094 · C++ · 基于 Qt + OCCT 的 3D CAD 查看与转换器。
- **[CadQuery/CQ-editor](

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*