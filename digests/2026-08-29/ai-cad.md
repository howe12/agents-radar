# CAD/机械结构开源动态日报 2026-08-29

> 数据来源: GitHub Search API (107 仓库) | ArXiv cs.GR+cs.CG (0 篇论文) | RSS 新闻 (3 条) | 生成时间: 2026-08-29 05:09 UTC

---

# CAD/机械结构开源动态日报

**日期：2026-08-28**

---

## 一、今日速览

今日开源 CAD 生态最值得关注的信号集中在三方面：① **Git 原生版本控制正式进入 CAD 工作流** — FreeCAD 的 History Workbench 把分支、合并、追溯带进了 B-Rep 模型历史；② **MCP（Model Context Protocol）正在成为 CAD 的事实标准接入层** — 至少 4 个新仓库围绕 FreeCAD 与 nTopology 构建 AI Agent 工具桥；③ **Code-CAD 与生成式设计的边界进一步消融** — 从 PicoGK 的计算几何核，到 anvilate、vibe-cading 这类"自然语言→STEP 文件"的本地化设计 Agent，开源阵营开始正面回应商用生成式 CAD（如 Augmenta ACP）。论文方面，今日 ArXiv cs.GR / cs.CG 无显著新进展，但仓库活跃度维持高位。

---

## 二、行业脉搏

| # | 标题 | 来源 | 意义 |
|---|------|------|------|
| 1 | **[History Workbench brings Git powered File Versioning to FreeCAD](https://blog.freecad.org/2026/08/28/history-workbench-brings-git-powered-file-versioning-to-freecad/)** | FreeCAD Blog | 把 Git 分支/合并/差异比对引入参数化模型历史树，首次让"机械工程师像软件工程师一样协作"成为可能，是 FreeCAD 走向工业级 PDM/PLM 工作流的关键一步。 |
| 2 | **[WIP Wednesday, 26 August 2026](https://blog.freecad.org/2026/08/27/wip-wednesday-26-august-2026/)** | FreeCAD Blog | 每周开发快照，记录核心、PartDesign、Sketcher、装配等模块的本周进展，是跟踪上游主干的最佳节拍器。 |
| 3 | **[DIY Summer Sandals by Sofia Rousinovich](https://blog.bambulab.com/diy-summer-sandals-by-sofia-rousinovich/)** | Bambu Lab | 用户案例导向的内容，说明消费级 3D 打印 + 参数化建模已开始渗透柔性/可穿戴结构件设计，与 FreeCAD/CadQuery 工作流天然契合。 |

> 备注：Prusa、OpenCASCADE、Hackaday 今日无重大更新。

---

## 三、研究前沿

今日 ArXiv cs.GR / cs.CG 未抓取到新论文。建议跟踪以下近期被仓库实现转化的研究方向：

- **SE(3)-等变场模型驱动的拓扑优化** — 见 [connorkapoor/geofield-bracket](https://github.com/connorkapoor/geofield-bracket)，将几何+物理+可制造性统一到一个潜变量中，是 CVPR 2025 前后兴起的几何深度学习向工程优化迁移的代表。
- **网格 Boole运算 / 修复的工业化** — 见 [MeshInspector/MeshLib](https://github.com/MeshInspector/MeshLib) 与 [cdcseacave/openMVS](https://github.com/cdcseacave/openMVS)，反映 ICRA/SGP 关于鲁棒几何运算的工程落地。
- **物理引导的体素化生成（VLA 模型）** — 见 [kbangaru-cyber/Brick_by_Brick](https://github.com/kbangaru-cyber/Brick_by_Brick)，机器人操作/VLA 模型开始反向输出 CAD 可重建几何。

---

## 四、重点项目

### �️ CAD 平台与编辑器

| 项目 | ⭐ | 一句话定位 |
|------|---|-----------|
| **[FreeCAD/FreeCAD](https://github.com/FreeCAD/FreeCAD)** | 33,129 | 跨平台开源参数化 3D 建模器，OCCT 内核 + Python 脚本 + PartDesign/Assemby/曲线/光学/VR 等十余个工作台，是开源机械 CAD 的事实标准。 |
| **[openscad/openscad](https://github.com/openscad/openscad)** | 10,042 | 程序员的实体建模语言，以代码描述几何，无 GUI 历史包袱，仍是嵌入式/CNC/参数化夹具领域首选。 |
| **[LibreCAD/LibreCAD](https://github.com/LibreCAD/LibreCAD)** | 6,293 | 成熟 2D CAD（DXF/DWG），轻量、跨平台，是机械 2D 出图与钣金展开层的可靠备选。 |
| **[xiangechen/chili3d](https://github.com/xiangechen/chili3d)** | 4,778 | 浏览器内 3D CAD，TypeScript 实现，配合 OCCT-WASM 让"打开网页就能画三维"成为现实。 |
| **[solvespace/solvespace](https://github.com/solvespace/solvespace)** | 4,120 | 参数化 2D/3D CAD，约束求解器极轻量，连杆机构/凸轮/钣金展开的爱好者首选。 |

### 📐 计算几何与内核

| 项目 | ⭐ | 一句话定位 |
|------|---|-----------|
| **[CGAL/cgal](https://github.com/CGAL/cgal)** | 6,026 | 计算几何算法库的"金标准"，三角化、布尔、Alpha shape、流形/多面体算法覆盖最全，机械+机器人研究的事实底层。 |
| **[Open-Cascade-SAS/OCCT](https://github.com/Open-Cascade-SAS/OCCT)** | 2,808 | 开源 B-Rep/建模/数据交换平台，STEP/IGES 读写、布尔运算、网格化底层，FreeCAD/CadQuery/mayo 等均依赖之。 |
| **[cnr-isti-vclab/meshlab](https://github.com/cnr-isti-vclab/meshlab)** | 5,804 | 开源网格处理系统，扫描件修复、抽稀、重网格化、可视化的桌面端标配。 |
| **[pyvista/pyvista](https://github.com/pyvista/pyvista)** | 3,788 | Python 端的 3D 网格分析与可视化利器，VTK 包装，与 trimesh 互补，适合科研与仿真前处理。 |
| **[mikedh/trimesh](https://github.com/mikedh/trimesh)** | 3,662 | 纯 Python 三角网格库，导入/导出/布尔/分析一站式，机器人/CV→CAD 流水线的事实组件。 |

### 🧬 创成式与参数化设计

| 项目 | ⭐ | 一句话定位 |
|------|---|-----------|
| **[leap71/PicoGK](https://github.com/leap71/PicoGK)** | 1,069 | 紧凑健壮的几何内核，定位"计算工程"，支持体素 + 隐式建模，是轻量级仿生/晶格设计的代表。 |
| **[clay-good/anvilate](https://github.com/clay-good/anvilate)** | 6 | 本地优先的机械工程师设计 Agent：自然语言描述 → 物理校验后的 STEP/DXF + 可编辑 Python 源码，直接对接 CATIA/SolidWorks/NX/AutoCAD，是开源版"Text-to-CAD"代表。 |
| **[fa-mc/vibe-cading](https://github.com/fa-mc/vibe-cading)** | 5 | 基于 CadQuery 的"vibe coding"式 3D 模型生成器，让人类与 LLM Agent 协作出 STEP。 |
| **[connorkapoor/geofield-bracket](https://github.com/connorkapoor/geofield-bracket)** | 46 | 输入盒体+载荷 → SE(3)-等变场模型输出"求解器认证"的支架结构，把前沿几何深度学习研究搬进浏览器。 |

### 🖨️ 3D 打印与制造

| 项目 | ⭐ | 一句话定位 |
|------|---|-----------|
| **[MarlinFirmware/Marlin](https://github.com/MarlinFirmware/Marlin)** | 17,556 | RepRap 系 3D 打印机固件的事实标准，8/32 位 MCU 通吃，工业级稳定性背书。 |
| **[OrcaSlicer/OrcaSlicer](https://github.com/OrcaSlicer/OrcaSlicer)** | 15,514 | 现代 G-code 生成器，覆盖 Bambu/Prusa/Voron/Creality 全平台，是消费级切片的事实新王。 |
| **[Ultimaker/Cura](https://github.com/Ultimaker/Cura)** | 7,025 | Uranium 框架上的经典切片 GUI，材料库、插件生态成熟，工业部署广泛。 |
| **[maziggy/bambuddy](https://github.com/maziggy/bambuddy)** | 2,872 | 自托管 Bambu Lab 指挥中心：从单台 A1 到打印农场，云依赖清零。 |

### 🔗 文件格式与互操作

| 项目 | ⭐ | 一句话定位 |
|------|---|-----------|
| **[earthtojake/text-to-cad](https://github.com/earthtojake/text-to-cad)** | 14,001 | CAD/CAE/CAM 的 Agent Skills 库，把"AI Agent ↔ 工业软件"对接的能力组件化，是当下最热门的接口层。 |
| **[f3d-app/f3d](https://github.com/f3d-app/f3d)** | 4,652 | 极速极简的 3D 查看器，命令行/桌面双形态，STEP/STL/GLTF 全收，是 CI/CD 中可视化检视的首选。 |
| **[fougue/mayo](https://github.com/fougue/mayo)** | 2,137 | 基于 Qt + OCCT 的 3D CAD 查看与转换器，桥接 STEP/IGES/STL 的桌面端实用工具。 |
| **[andymai/occt-wasm](https://github.com/andymai/occt-wasm)** | 48 | OCCT 编译为 WebAssembly，~4MB brotli、TypeScript API、Web Worker 支持，让浏览器直接跑工业级几何核成为可能。 |

### 🐍 Code-CAD 与脚本化

| 项目 | ⭐ | 一句话定位 |
|------|---|-----------|
| **[CadQuery/cadquery](https://github.com/CadQuery/cadquery)** | 5,662 | 基于 OCCT 的 Python 参数化 CAD 脚本框架，工业流水线里"参数化出 STEP"的标配。 |
| **[neka-nat/freecad-mcp](https://github.com/neka-nat/freecad-mcp)** | 1,937 | FreeCAD 的 MCP 服务器，把模型创建/查询暴露给 LLM Agent，Code-CAD × AI 的标杆仓库。 |
| **[gumyr/build123d](https://github.com/gumyr/build123d)** | 2,946 | 现代 Python CAD 编程库，对 CadQuery 的"代数/Builder"范式再设计，更适合复杂装配与可组合建模。 |
| **[BelfrySCAD/BOSL2](https://github.com/BelfrySCAD/BOSL2)** | 2,333 | OpenSCAD 生态最完备的库，掩模、圆角、螺纹、附件一应俱全，仍是 OpenSCAD 项目的工程底座。 |
| **[NiJingzhe/SimpleCADAPI](https://github.com/NiJingzhe/SimpleCADAPI)** | 104 | Agent 原生 CAD SDK，让大模型直接创建、检视、重建可编辑的 3D 模型。 |

---

## 五、生态趋势信号

本周生态最清晰的趋势是 **"AI Agent ↔ CAD 内核"的标准接口层正在收敛到 MCP**。FreeCAD（[neka-nat](https://github.com/neka-nat/freecad-mcp) / [blwfish](https://github.com/blwfish/freecad-mcp) / [sandraschi](https://github.com/sandraschi/freecad-mcp)）、nTopology（[sohumsuthar/ntopology-mcp](https://github.com/sohumsuthar/ntopology-mcp)）、3D 打印（[codeofaxel/Kiln](https://github.com/codeofaxel/Kiln)）几乎在同一周内涌现 MCP 实现，叠加 [earthtojake/text-to-cad](https://github.com/earthtojake/text-to-cad) 作为"通用技能库"，意味着"自然语言→CAD/CAM"流水线在开源阵营开始出现事实标准。

与之并行的另一条主线是 **"CAD 版本控制正式进入 Git 范式"**：FreeCAD 的 History Workbench 解决了参数化建模协作的最后一公里，配合 [bldrs-ai/Share](https://github.com/bldrs-ai/Share) 这类浏览器 BIM/STEP 协作平台，开源 CAD 第一次具备与现代软件工程同等级的协作能力。配合 **[andymai/occt-wasm](https://github.com/andymai/occt-wasm) / [xiangechen/chili3d](https://github.com/xiangechen/chili3d)** 把 OCCT 搬到浏览器，以及 **[clay-good/anvilate](https://github.com/clay-good/anvilate) / [fa-mc/vibe-cading](https://github.com/fa-mc/vibe-cading)** 在本地优先架构下输出物理校验的 STEP，可以看到一个清晰的轮廓：开源 CAD 正从"桌面单机工具"演化为"浏览器 + Agent + Git 协作的分布式工程平台"，与商用 n

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*