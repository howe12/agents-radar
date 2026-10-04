# CAD/机械结构开源动态日报 2026-10-04

> 数据来源: GitHub Search API (108 仓库) | ArXiv cs.GR+cs.CG (0 篇论文) | RSS 新闻 (3 条) | 生成时间: 2026-10-04 03:46 UTC

---

# 📅 CAD/机械结构开源动态日报

**日期**：2026 年 10 月 2 日（周四）　　**覆盖范围**：行业新闻 · ArXiv 论文 · GitHub 108 个活跃仓库

---

## 一、今日速览

今日开源 CAD 生态最显著的信号集中在 **FreeCAD 1.1.4 正式发布**与 **2026 Q3 资助项目公示**，加上 GitHub 端 **MCP（Model Context Protocol）类工具集中爆发**——FreeCAD、Bambu、Orca 等主流平台均在补齐 AI 代理可调用的工程接口。Code-CAD（CadQuery、build123d、OpenSCAD）依然保持高度活跃，而 GitHub cs.GR/cs.CG 方向今日无新增论文，学术雷达暂时静默。

---

## 二、行业脉搏

1. **FreeCAD 1.1.4 发布**（[原文链接](https://blog.freecad.org/2026/09/28/freecad-1-1-4-released/)）
   作为本轮维护性更新，主要修复回归问题并优化稳定性，是企业用户升级到 1.1 主线的可靠节点。

2. **2026 Q3 资助项目名单公布**（[原文链接](https://blog.freecad.org/2026/10/02/2026-q3-grant-program-funded-projects/)）
   FPA（FreeCAD Project Association）继续以社区资金扶持关键模块开发，是观察 FreeCAD 长期路线的最佳窗口。

3. **WIP Wednesday（9 月 30 日）**（[原文链接](https://blog.freecad.org/2026/09/30/wip-wednesday-30-september-2026/))
   开发者周报汇集 Part、Mesh、Sketcher、Assembly 等工作台进展，是跟踪 FreeCAD 内核演进的"心跳信号"。

> ⚠️ 今日 Prusa / Bambu Lab / OpenCASCADE / Hackaday 频道暂无新动态，下一周期再行汇总。

---

## 三、研究前沿

📭 **今日 cs.GR / cs.CG 暂无新增论文**。

学术雷达本周期静默，但 GitHub 端的 **MCP 服务化**与 **LLM-CAD** 项目（如 `text-to-cad`、`freecad-ai`、`anvilate`、`kiln`）正在以工程实践的形式"提前兑现"学术界关于自然语言驱动 CAD 的若干构想。建议持续关注下一次 ArXiv 抓取，预计将出现大量 Text-to-CAD / LLM-for-CAD 实证工作。

---

## 四、重点项目

### 🖥️ CAD 平台与编辑器

| 仓库 | ⭐ | 一句话说明 |
|---|---|---|
| [**FreeCAD/FreeCAD**](https://github.com/FreeCAD/FreeCAD) | 33,926 | 官方多平台开源参数化 3D 建模器，本体级生态锚点 |
| [**openscad/openscad**](https://github.com/openscad/openscad) | 10,350 | 程序员友好的脚本式实体建模器，硬件创客首选 |
| [**LibreCAD/LibreCAD**](https://github.com/LibreCAD/LibreCAD) | 6,443 | 跨平台 2D CAD，DXF/DWG 读写与多语言界面成熟 |
| [**solvespace/solvespace**](https://github.com/solvespace/solvespace) | 4,180 | 轻量级参数化 2D/3D CAD，约束求解器紧凑高效 |
| [**pascalorg/editor**](https://github.com/pascalorg/editor) | 24,602 | 开源 3D 建筑编辑器，原生集成 CLI 与 MCP 工具，AI 代理友好 |
| [**HakanSeven12/OpenCADStudio**](https://github.com/HakanSeven12/OpenCADStudio) | 2,432 | Rust 编写、支持 DWG/DXF 与 GPU 加速渲染的新生代 CAD |

### 📐 计算几何与内核

| 仓库 | ⭐ | 一句话说明 |
|---|---|---|
| [**CGAL/cgal**](https://github.com/CGAL/cgal) | 6,061 | C++ 计算几何算法库，CAD 内核与几何处理的事实标准 |
| [**cdcseacave/openMVS**](https://github.com/cdcseacave/openMVS) | 4,143 | 面向 SfM/MVS 的稠密重建与网格处理库，逆向工程利器 |
| [**pyvista/pyvista**](https://github.com/pyvista/pyvista) | 3,833 | 基于 VTK 的 Python 3D 网格可视化，工程仿真前后处理常驻工具 |
| [**mikedh/trimesh**](https://github.com/mikedh/trimesh) | 3,691 | Python 三角网格库，装配/打印前处理必备 |
| [**gkjohnson/three-mesh-bvh**](https://github.com/gkjohnson/three-mesh-bvh) | 3,503 | three.js 网格 BVH 加速，空间查询性能跨越式提升 |

### 🧬 创成式与参数化设计

| 仓库 | ⭐ | 一句话说明 |
|---|---|---|
| [**earthtojake/text-to-cad**](https://github.com/earthtojake/text-to-cad) | 16,628 | 为 AI 代理赋予 CAD 超能力的代表性项目，文本→几何方向标杆 |
| [**partcad/partcad**](https://github.com/partcad/partcad) | 500 | 面向可制造零件的"包管理器"，数字主线 / TDP 标准化 |
| [**clay-good/anvilate**](https://github.com/clay-good/anvilate) | 10 | 本地化机械设计代理：自然语言→物理可行参数化 STEP/DXF |
| [**rdevaul/yapCAD**](https://github.com/rdevaul/yapCAD) | 29 | Python 程序化 CAD 与计算几何系统，实验性但思路活跃 |
| [**vykrum/Hywe**](https://github.com/vykrum/Hywe) | 11 | 基于关系/规则的建筑空间构型生成器，参数化设计探索 |

### 🖨️ 3D 打印与制造

| 仓库 | ⭐ | 一句话说明 |
|---|---|---|
| [**MarlinFirmware/Marlin**](https://github.com/MarlinFirmware/Marlin) | 17,613 | 主流 3D 打印机固件，8/32 位 MCU 全平台覆盖 |
| [**OrcaSlicer/OrcaSlicer**](https://github.com/OrcaSlicer/OrcaSlicer) | 15,842 | 主流切片引擎，支持 Bambu/Prusa/Voron/Creality 多平台 |
| [**Ultimaker/Cura**](https://github.com/Ultimaker/Cura) | 7,050 | Ultimaker 出品的切片 GUI，社区装机量最大 |
| [**maziggy/bambuddy**](https://github.com/maziggy/bambuddy) | 3,045 | 自托管 Bambu Lab 打印农场控制中枢，"去云化"代表 |
| [**Sienci-Labs/gsender**](https://github.com/Sienci-Labs/gsender) | 373 | grbl/grblHAL CNC 控制软件，木工/PCB 铣削生态核心 |
| [**XRay3D/GERBER_X3**](https://github.com/XRay3D/GERBER_X3) | 257 | Gerber→G-code 转换 + PDF 输出，专攻 PCB 铣削 |
| [**DMontgomery40/mcp-3D-printer-server**](https://github.com/DMontgomery40/mcp-3D-printer-server) | 244 | 统一 MCP 接口对接 8 家主流切片器/打印机，AI 编排基础设施 |
| [**codeofaxel/Kiln**](https://github.com/codeofaxel/Kiln) | 89 | MCP 驱动的 3D 打印服务器：设计→切片→上机全链路 AI 编排 |

### 🔗 文件格式与互操作

| 仓库 | ⭐ | 一句话说明 |
|---|---|---|
| [**Keychron/Keychron-Keyboards-Hardware-Design**](https://github.com/Keychron/Keychron-Keyboards-Hardware-Design) | 3,727 | 商用级别 STEP/DXF/DWG/PDF 硬件开源参考，工业 4.0 文件交付典范 |
| [**MeshInspector/MeshLib**](https://github.com/MeshInspector/MeshLib) | 828 | 工业级 3D 几何处理 SDK：布尔、修复、抽稀、重网格、ICP |
| [**buganini/Kikakuka**](https://github.com/buganini/Kikakuka) | 78 | KiCad 面板化 + PCB 折弯装配桥接，PCB-CAD 互操作代表 |

### 🐍 Code-CAD 与脚本化

| 仓库 | ⭐ | 一句话说明 |
|---|---|---|
| [**CadQuery/cadquery**](https://github.com/CadQuery/cadquery) | 5,877 | 基于 OCCT 的 Python 参数化 CAD 脚本框架，Code-CAD 事实标准 |
| [**gumyr/build123d**](https://github.com/gumyr/build123d) | 3,283 | 现代 Python CAD 库，build123d 引入的代数式建模范式正在扩散 |
| [**ghbalf/freecad-ai**](https://github.com/ghbalf/freecad-ai) | 539 | FreeCAD 自然语言→3D 模型工作台，GUI 内 AI 化典型路径 |
| [**spkane/freecad-addon-robust-mcp-server**](https://github.com/spkane/freecad-addon-robust-mcp-server) | 243 | FreeCAD 的 MCP 桥接工作台，CAD 进入 Agentic 工作流的桥梁项目 |
| [**Salusoft89/planegcs**](https://github.com/Salusoft89/planegcs) | 106 | FreeCAD 2D 几何求解器的 WebAssembly 封装，浏览器内约束求解 |

---

## 五、生态趋势信号

🔍 **三大趋势并行交汇**：

1. **MCP 化浪潮**：`mcp-3D-printer-server`、`Kiln`、`freecad-addon-robust-mcp-server`、`pascalorg/editor`、`spkane/...` 等项目密集涌现，CAD/CAM 工具正系统性补齐 AI 代理可调用接口，预计 6 个月内将形成事实标准。

2. **AI 代理→可制造几何**：以 `text-to-cad` (16k⭐) 为代表，"自然语言→STEP/DXF" 管线从概念走向落地，`anvilate`、`freecad-ai`、`Kiln` 进一步把"物理可行验证"和"上机切片"纳入闭环。

3. **本地化 / 去云化**：bambuddy、mainsail 等项目反映打印生态对厂商云的反弹情绪；同时 OpenCADStudio (Rust) 等新生代 CAD 试图以高性能 + 开源挑战桌面 CAD 格局。

---

## 六、值得关注

1. **FreeCAD 1.1.4 升级窗口 + Q3 资助名单**：建议同步跟进 Part Design / Assembly 工作台动向，决定是否升级生产环境，并评估 Q3 新资助模块对自身工作流的潜在价值。
3. **MCP-CAD 工具链爆发**（`spkane/freecad-addon-robust-mcp-server`、`DMontgomery40/mcp-3D-printer-server`、`codeofaxel/Kiln`）：这是 CAD 进入"代理可调用"时代的早期形态，机械工程师值得花一个周末跑通一条 MCP 链路，亲眼看配置工程师对自身工作流的改造潜力。
4. **`partcad/partcad`**：可制造零件的"包管理器"思路一旦普及，将颠覆现有 CAD 资源交换方式，类似 npm 对前端生态的影响，值得早期跟踪其标准路线。

---

*日报生成时间：2026-10-02 · 数据源：FreeCAD Blog / ArXiv cs.GR+cs.CG / GitHub Trending*

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*