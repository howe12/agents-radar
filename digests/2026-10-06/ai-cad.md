# CAD/机械结构开源动态日报 2026-10-06

> 数据来源: GitHub Search API (110 仓库) | ArXiv cs.GR+cs.CG (0 篇论文) | RSS 新闻 (2 条) | 生成时间: 2026-10-06 04:19 UTC

---

# CAD/机械结构开源动态日报

**日期**：2026-10-02 · **覆盖**：FreeCAD Blog + ArXiv cs.GR/cs.CG + GitHub 活跃仓库

---

## 📌 今日速览

今日 FreeCAD 基金会公布 2026 Q3 资助项目名单，叠加 WIP Wednesday 中披露的多项 Addon 进展，社区治理与功能迭代同步加速；GitHub 端则呈现出 **"AI-Agent × CAD"** 的强势聚合——MCP（Model Context Protocol）正快速成为 FreeCAD、OpenSCAD 与 3D 打印流水线的统一接入层，Kiln、freecad-mcp、freecad-ai、text-to-cad、anvilate 等项目密集冒头；硬件切片侧，OrcaSlicer 与 Bambu Lab 自托管生态（bambuddy）继续主导多机型切片与本地化控制，机械设计正从"软件+插件"向"智能体+工作流"演进。

---

## 📰 行业脉搏

| # | 动态 | 链接 | 意义 |
|---|------|------|------|
| 1 | **FreeCAD 基金会公布 2026 Q3 资助项目** | [blog.freecad.org](https://blog.freecad.org/2026/10/02/2026-q3-grant-program-funded-projects/) | 揭示基金会下一阶段战略投资方向（推测涉及 Part Design、Tesselation、Addon 生态），社区路线图可期 |
| 2 | **WIP Wednesday（2026-09-30）多 Workbench 进展汇总** | [blog.freecad.org](https://blog.freecad.org/2026/09/30/wip-wednesday-30-september-2026/) | 看板式同步 SheetMetal、Curves、Assembly、DFM 等工作台增量，验证模块化路线的协同效率 |
| 3 | *（来自仓库信号）* **MCP 协议成 CAD 新标配** | 见仓库清单 | freecad-mcp / freecad-addon-robust-mcp-server / Kiln 三大 MCP 服务器近 7 日均有推送，AI Agent 直接驱动 CAD/3D 打印的范式正在落地 |
| 4 | *（来自仓库信号）* **Bambu Lab 本地化反云浪潮** | [maziggy/bambuddy](https://github.com/maziggy/bambuddy) | 单机到打印农场级自托管方案出现，云端切片依赖被进一步削弱 |

> 注：原素材中 Prusa、Bambu Lab、OpenCASCADE 官方博客与 ArXiv cs.GR/cs.CG 今日均未抓到新内容，已在"研究前沿"中以替代视角补充。

---

## 🔬 研究前沿

⚠️ **今日 ArXiv cs.GR / cs.CG 暂无新论文**（监控窗口内 0 条收录）。学术动态缺位的同时，GitHub 上出现了多个 **可工程化落地** 的几何算法与处理库，可作为今日研究侧的"工程代理信号"：

| 项目 | 对应学术方向 | 链接 |
|------|------------|------|
| **CGAL** — 计算几何算法库（含三角剖分、布尔运算、Alpha Shape） | 经典算法工业化 | [CGAL/cgal](https://github.com/CGAL/cgal) |
| **MeshLib** — 网格布尔、修复、重网格、ICP 配准 | 3D 几何处理 | [MeshInspector/MeshLib](https://github.com/MeshInspector/MeshLib) |
| **three-mesh-bvh** — BVH 加速光线投射 / 空间查询 | 实时碰撞 / 光线追踪 | [gkjohnson/three-mesh-bvh](https://github.com/gkjohnson/three-mesh-bvh) |
| **fogleman/sdf** — SDF（有符号距离场）网格生成 | 隐式建模、3D 打印体素 | [fogleman/sdf](https://github.com/fogleman/sdf) |
| **Salusoft89/planegcs** — FreeCAD 二维几何求解器 WASM 封装 | 约束求解 / 浏览器化 | [Salusoft89/planegcs](https://github.com/Salusoft89/planegcs) |

---

## 🚀 重点项目

### 🖥️ CAD 平台与编辑器

| 仓库 | ⭐ | 一句话 |
|------|----|--------|
| [FreeCAD/FreeCAD](https://github.com/FreeCAD/FreeCAD) | 33,965 | 开源参数化 3D 建模旗舰，基于 OCCT 内核，是 Linux/CAD-Addon 生态的事实底座 |
| [openscad/openscad](https://github.com/openscad/openscad) | 10,368 | "程序员的实体建模器"，代码驱动几何，可复现性极强，适合科研与自动化 |
| [LibreCAD/LibreCAD](https://github.com/LibreCAD/LibreCAD) | 6,446 | 跨平台 2D CAD，DXF/DWG 读写能力覆盖工程图交换全流程 |
| [solvespace/solvespace](https://github.com/solvespace/solvespace) | 4,183 | 轻量参数化 2D/3D CAD，约束求解快，机械装配原理验证利器 |
| [dune3d/dune3d](https://github.com/dune3d/dune3d) | 2,094 | 新一代直接建模 3D CAD，2D→3D 工作流干净，对小团队友好 |
| [leozide/leocad](https://github.com/leozide/leocad) | 2,883 | LEGO 虚拟拼搭 CAD，零件库可生产化，是消费级异型装配的灵感来源 |

### 📐 计算几何与内核

| 仓库 | ⭐ | 一句话 |
|------|----|--------|
| [CGAL/cgal](https://github.com/CGAL/cgal) | 6,065 | 计算几何"百科全书"，算法覆盖三角化、布尔、偏置、Alpha Shape 等 |
| [Open-Cascade-SAS/OCCT](https://github.com/Open-Cascade-SAS/OCCT) | 2,955 | Open CASCADE 几何内核，多种商业/开源 CAD 的底层引擎 |
| [pyvista/pyvista](https://github.com/pyvista/pyvista) | 3,831 | VTK 的 Python 封装，科研级 3D 可视化与网格分析 |
| [mikedh/trimesh](https://github.com/mikedh/trimesh) | 3,691 | 三角网格 Python 标准库，导入/布尔/剖切一应俱全 |
| [fougue/mayo](https://github.com/fougue/mayo) | 2,277 | Qt + OCCT 3D CAD 查看/转换器，企业级 STEP/IGES 桥接 |
| [fogleman/sdf](https://github.com/fogleman/sdf) | 2,009 | SDF 网格生成库，隐式建模与 3D 打印直接对口 |

### 🧬 创成式与参数化设计

| 仓库 | ⭐ | 一句话 |
|------|----|--------|
| [partcad/partcad](https://github.com/partcad/partcad) | 501 | 零件级"包管理器 + 数字主线"，把可制造硬件模块化、工程化交付 |
| [BelfrySCAD/BOSL2](https://github.com/BelfrySCAD/BOSL2) | 2,391 | OpenSCAD 最强附加库，把程序化建模复杂度拉低一个数量级 |
| [kellerlabs/homeracker](https://github.com/kellerlabs/homeracker) | 515 | 完全模块化 3D 打印机架系统，参数化结构件库的范本 |
| [yawkat/GridFlock](https://github.com/yawkat/GridFlock) | 113 | Gridfinity 拼插底板生成器，展示参数化+拓扑拼接的工业化玩法 |
| [avdstaaij/gdpc](https://github.com/avdstaaij/gdpc) | 34 | Minecraft 程序化生成框架，可借鉴其约束驱动生成思路 |

### 🖨️ 3D 打印与制造（G-code / 切片 / 固件）

| 仓库 | ⭐ | 一句话 |
|------|----|--------|
| [MarlinFirmware/Marlin](https://github.com/MarlinFirmware/Marlin) | 17,613 | RepRap 阵营事实标准固件，8/32 位 MCU 全平台覆盖 |
| [OrcaSlicer/OrcaSlicer](https://github.com/OrcaSlicer/OrcaSlicer) | 15,867 | 多机型 G-code 生成器（Bambu / Prusa / Voron / VzBot / RatRig / Creality），切片"瑞士军刀" |
| [Ultimaker/Cura](https://github.com/Ultimaker/Cura) | 7,050 | 老牌切片 GUI，基于 Uranium 框架，跨厂商切片事实标准之一 |
| [Sienci-Labs/gsender](https://github.com/Sienci-Labs/gsender) | 373 | grbl / grblHAL CNC 的易用上位机，木工/轻量铣削利器 |
| [sameer/svg2gcode](https://github.com/sameer/svg2gcode) | 442 | Rust 实现的 SVG → G-code 转换器，矢量雕刻/激光雕刻/笔式绘图通用 |
| [XRay3D/GERBER_X3](https://github.com/XRay3D/GERBER_X3) | 258 | PCB 铣削 G-code 准备 + Gerber → PDF，PCB-CAM 工作流完整 |
| [maziggy/bambuddy](https://github.com/maziggy/bambuddy) | 3,054 | Bambu Lab 全自托管控制中心，单机到打印农场皆可 |
| [mainsail-crew/mainsail](https://github.com/mainsail-crew/mainsail) | 2,220 | Klipper 主流 Web 界面，远程打印/监控标配 |
| [Donkie/Spoolman](https://github.com/Donkie/Spoolman) | 2,883 | 自托管耗材库存管理，3D 打印"ERP"基础设施 |
| [codeofaxel/Kiln](https://github.com/codeofaxel/Kiln) | 91 | **MCP 服务器形式**的 3D 打印入口，AI Agent 一句话即设计-切片-打印 |

### 🔗 文件格式与互操作

| 仓库 | ⭐ | 一句话 |
|------|----|--------|
| [KiCad/kicad-source-mirror](https://github.com/KiCad/kicad-source-mirror) | 3,008 | EDA 开源旗舰，机械-电子协同设计的电气侧枢纽 |
| [HakanSeven12/OpenCADStudio](https://github.com/HakanSeven12/OpenCADStudio) | 2,465 | Rust 写的原生 2D/3D CAD，GPU 加速渲染，DWG/DXF 支持 |
| [fougue/mayo](https://github.com/fougue/mayo) | 2,277 | STEP/IGES/STL 跨格式查看与转换（详见上节） |
| [buganini/Kikakuka](https://github.com/buganini/Kikakuka) | 78 | KiCad Workspace + FreeCAD 桥，把 PCB 折弯/装配直接带入三维空间 |
| [tscircuit/tscircuit](https://github.com/tscircuit/tscircuit) | 2,797 | TypeScript + React 描述真实电子电路，CAD/电子"代码化"的边界探索 |

### 🐍 Code-CAD 与脚本化（含 AI-CAD 融合）

| 仓库 | ⭐ | 一句话 |
|------|----|--------|
| [CadQuery/cadquery](https://github.com/CadQuery/cadquery) | 5,888 | 基于 OCCT 的 Python 参数化脚本框架，工业自动化主力 |
| [gumyr/build123d](https://github.com/gumyr/build123d) | 3,317 | CadQuery 之上的 Python CAD 库，API 更现代，适合 LLM 调用 |
| [pascalorg/editor](https://github.com/pascalorg/editor) | 24,638 | 开源 3D 建筑编辑器，本地 CLI + **MCP 工具**，人机协作范式典型 |
| [earthtojake/text-to-cad](https://github.com/earthtojake/text-to-cad) | 17,511 | "给 Agent 加 CAD 超能力"，自然语言 → 可编辑几何 |
| [ghbalf/freecad-ai](https://github.com/ghbalf/freecad-ai) | 543 | FreeCAD 自然语言工作台，AI 直接驱动原生建模流程 |
| [spkane/freecad-addon-robust-mcp-server](https://github.com/spkane/freecad-addon-robust-mcp-server) | 246 | FreeCAD 健壮 MCP 服务器 + Workbench 桥接 |
| [blwfish/freecad-mcp](https://github.com/blwfish/freecad-mcp) | 57 | 32 个工具的 FreeCAD MCP 服务器，AI 辅助 3D 建模全覆盖 |
| [PhySpace/SimpleCADAPI](https://github.com/PhySpace/SimpleCADAPI) | 140 | Agent 原生 CAD SDK，让 LLM 创造/检视/重建可编辑 3D 模型 |
| [clay-good/anvilate](

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*