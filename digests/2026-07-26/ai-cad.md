# CAD/机械结构开源动态日报 2026-07-26

> 数据来源: GitHub Search API (110 仓库) | ArXiv cs.GR+cs.CG (0 篇论文) | RSS 新闻 (4 条) | 生成时间: 2026-07-26 02:09 UTC

---

# CAD/机械结构开源动态日报

**日期：2026-07-25**

---

## 📌 今日速览

FreeCAD 连续发布 1.1.2 与 1.1.3 两个补丁版本（相隔仅 2 天），同时伴随 7 月 22 日的 WIP 周报，说明 1.1 主线已步入稳定迭代节奏；Prusa 推出专攻齿轮与运动件的 PA11 Natural 长链尼龙材料，与近期 build123d / freecad.gears / loupe 等参数化齿轮项目形成"材料—软件—工作流"闭环。仓库侧没有 cs.GR/cs.CG 论文投稿，但 GitHub 端出现了明显的 **AI-Native CAD** 集群爆发（CADAM、freecad-ai、Text23D、AgentSCAD、Kiln 同步活跃），以及 **OCCT → WebAssembly** 栈（occt-wasm、brepjs、cadrum、conway）的密集更新，几何布尔库 trueform / kigumi 也在持续打磨精确网格布尔运算能力。

---

## 📰 行业脉搏

1. **[FreeCAD 1.1.3 发布](https://blog.freecad.org/2026/07/25/freecad-1-1-3-released/)** — 继 1.1.2 后又一批修复，涵盖装配、Part Design、Sketcher 等关键模块稳定性改进；意味着 1.1 LTS 系列正式进入密集质量打磨期。

2. **[FreeCAD 1.1.2 发布](https://blog.freecad.org/2026/07/23/freecad-1-1-2-released/)** — 同一系列前一补丁，重点修复了 OCCT 升级引入的几何回归问题，提示用户尽快升级。

3. **[WIP Wednesday, 22 July 2026](https://blog.freecad.org/2026/07/22/wip-wednesday-22-july-202-6/)** — 开发者周报，重点关注 Toponaming、TNP（Topological Naming Problem）方案推进，以及 Assembly、Part workbench 的重构进展。

4. **[Prusament PA11 Natural：齿轮与运动件专用耗材](https://blog.prusa3d.com/prusament-pa11-natural-material-with-extreme-mechanical-and-chemical-resistance_137458/)** — 突出机械/化学耐性与自润滑特性，对应"功能件直接打印"趋势，与 freecad.gears、build123d 等参数化齿轮设计工具形成上下游呼应。

---

## 🔬 研究前沿

> 今日 cs.GR / cs.CG 无新论文提交（可能为周末抓取窗口空档）。建议持续关注下周 arXiv 更新，特别是几何处理、拓扑优化与神经隐式表示相关的方向。

---

## ⭐ 重点项目

### 🖥️ CAD 平台与编辑器

- **[FreeCAD/FreeCAD](https://github.com/FreeCAD/FreeCAD)** ⭐32,371 — 开源参数化 3D 建模的事实标准；1.1.x 系列快速迭代直接利好装配与 Part Design 工作流。
- **[LibreCAD/LibreCAD](https://github.com/LibreCAD/LibreCAD)** ⭐6,146 — 跨平台 2D CAD，长期稳定的 DXF/DWG 替代方案。
- **[solvespace/solvespace](https://github.com/solvespace/solvespace)** ⭐4,062 — 轻量级 2D/3D 参数化建模器，约束求解引擎对教学与嵌入式场景极具价值。
- **[xiangechen/chili3d](https://github.com/xiangechen/chili3d)** ⭐4,702 — 浏览器端 3D CAD，对"Web CAD 协作"路径具有示范意义。

### 📐 计算几何与内核

- **[CGAL/cgal](https://github.com/CGAL/cgal)** ⭐5,987 — 计算几何算法库的权威实现，覆盖三角化、布尔、曲面重建等核心算法。
- **[polydera/trueform](https://github.com/polydera/trueform)** ⭐129 — 精确网格布尔 + 空间查询 + 重网格；面向生产级"网格即几何"管线。
- **[unageek/kigumi](https://github.com/unageek/kigumi)** ⭐51 — 三角网格上的"无畏"布尔运算，与 trueform 共同推动鲁棒网格布尔开源化。
- **[artem-ogre/CDT](https://github.com/artem-ogre/CDT)** ⭐1,429 — 高质量约束 Delaunay 三角化，常被 Code-CAD / 切片软件用作底层网格生成器。
- **[locationtech/jts](https://github.com/locationtech/jts)** ⭐2,221 — Java 拓扑套件，2D 矢量几何的事实标准库。
- **[pyvista/pyvista](https://github.com/pyvista/pyvista)** ⭐3,754 — 3D 网格可视化与分析，CAE/科学计算前端利器。
- **[mikedh/trimesh](https://github.com/mikedh/trimesh)** ⭐3,636 — Python 三角网格加载与处理，Code-CAD 与逆向工程的核心依赖。

### 🧬 创成式与参数化设计

- **[FreeCAD/FreeCAD-addons](https://github.com/FreeCAD/FreeCAD-addons)** ⭐1,106 — FreeCAD 1.0 之前的扩展索引（仍被广泛引用）。
- **[processing/processing4](https://github.com/processing/processing4)** ⭐447 — 创意编程平台，常用于生成式艺术与设计教学。
- **[golanlevin/DrawingWithMachines](https://github.com/golanlevin/DrawingWithMachines)** ⭐150 — CMU "用机器绘画"课程资源，机械 + 创成式艺术的交叉范本。

### 🖨️ 3D 打印与制造

- **[MarlinFirmware/Marlin](https://github.com/MarlinFirmware/Marlin)** ⭐17,498 — RepRap 阵营最广泛部署的 3D 打印机固件。
- **[OrcaSlicer/OrcaSlicer](https://github.com/OrcaSlicer/OrcaSlicer)** ⭐15,221 — 多品牌兼容的开源切片软件标杆（Bambu / Prusa / Voron 等）。
- **[openscad/openscad](https://github.com/openscad/openscad)** ⭐9,802 — 程序员向参数化 3D CAD 建模语言的事实标准。
- **[Ultimaker/Cura](https://github.com/Ultimaker/Cura)** ⭐6,998 — 老牌切片 GUI，工业与桌面端使用率极高。
- **[gumyr/build123d](https://github.com/gumyr/build123d)** ⭐2,698 — Python CAD 编程库，对标 OpenSCAD 的现代 Pythonic 范式。
- **[donkie/Spoolman](https://github.com/Donkie/Spoolman)** ⭐2,633 — 3D 打印耗材库存管理，与多农场切片器集成。
- **[voneiden/ocp-freecad-cam](https://github.com/voneiden/ocp-freecad-cam)** ⭐63 — CadQuery / build123d → FreeCAD CAM 桥接，参数化刀路的关键工具。
- **[Rahix/FusedFilamentDesign](https://github.com/Rahix/FusedFilamentDesign)** ⭐232 — FreeCAD PartDesign 的 FFF 专用插件，打印可制造性设计（DFM）助手。

### 🔗 文件格式与互操作

- **[CadQuery/cadquery](https://github.com/CadQuery/cadquery)** ⭐5,506 — 基于 OCCT 的 Python 参数化 CAD 脚本框架，工业级 STEP 输出。
- **[f3d-app/f3d](https://github.com/f3d-app/f3d)** ⭐4,573 — 极速轻量 3D 查看器，支持 STEP/IGES/STL/glTF 等主流格式。
- **[fougue/mayo](https://github.com/fougue/mayo)** ⭐2,105 — Qt + OCCT 的 CAD 查看/转换器，工程桌面工具。
- **[andymai/occt-wasm](https://github.com/andymai/occt-wasm)** ⭐31 — OCCT 编译到 WebAssembly，~4MB brotli，使浏览器内可执行 B-Rep 运算。
- **[andymai/brepjs](https://github.com/andymai/brepjs)** ⭐72 — 精确 B-Rep 几何的 Web CAD 库，与 occt-wasm 共同构成 Web 端 CAD 技术栈。
- **[bldrs-ai/conway](https://github.com/bldrs-ai/conway)** ⭐22 — 高性能 IFC & STEP 的 Web 引擎，BIM + 机械 CAD 在线协作基础设施。
- **[lzpel/cadrum](https://github.com/lzpel/cadrum)** ⭐46 — Rust CAD crate，静态链接 headless OCCT，原生 + WASM 双运行。

### 🐍 Code-CAD 与脚本化

- **[neka-nat/freecad-mcp](https://github.com/neka-nat/freecad-mcp)** ⭐1,451 — FreeCAD 的 MCP（Model Context Protocol）服务端，让 LLM 代理直接驱动 FreeCAD。
- **[looooo/freecad.gears](https://github.com/looooo/freecad.gears)** ⭐345 — FreeCAD 齿轮模块，配套 PA11 等工程塑料，可直接参数化齿轮件。
- **[metaember/loupe](https://github.com/metaember/loupe)** ⭐0 — "Code-CAD 评审流水线"：渲染 → 证明 → 预览 → 切片一体化，针对 3D 打印场景。
- **[zqf3229294/Text23D](https://github.com/zqf3229294/Text23D)** ⭐16 — 自然语言 → 参数化 3D 机械 CAD 的 AI 辅助平台。
- **[codeofaxel/Kiln](https://github.com/codeofaxel/Kiln)** ⭐40 — 面向 Bambu / Prusa / Klipper 等多机型的 3D 打印 MCP 服务器，让 AI Agent 完成设计→切片→打印闭环。

---

## 🌱 生态趋势信号

三条主线正在汇聚：**第一条是 AI-Native CAD**，freecad-ai、Text23D、CADAM、AgentSCAD、Kiln 同步活跃，配合 freecad-mcp 把 FreeCAD 直接接入 LLM 工作流，文本→几何→制造的全链路正在打通；**第二条是 OCCT 的 Web 化迁移**，occt-wasm + brepjs + cadrum + conway 形成完整浏览器内 B-Rep 栈，叠加 chili3d 在前端编辑层的成熟，预示 Web CAD 从"只读查看"迈向"可写可工程"；**第三条是工程件直接打印**，Prusa PA11 + freecad.gears + FusedFilamentDesign + ocp-freecad-cam 把"参数化设计 → 功能件制造"的链路进一步实用化。三条线共享同一个底层假设：开源 CAD 正在从"原型玩具"升级为"可投产的工程基础设施"。

---

## 👀 值得关注

1. **[FreeCAD 1.1.x 连续补丁 + WIP Toponaming 进展](https://blog.freecad.org/2026/07/25/freecad-1-1-3-released/)** — Topological Naming Problem 是装配与参数化修改的长期痛点，TNP 方案的落地将显著提升 FreeCAD 在真实产品工程中的可用性，建议跟进后续 1.1.4 / 1.2 路线图。

2. **[OCCT → WebAssembly 矩阵（occt-wasm / brepjs / cadrum / conway）](https://github.com/andymai/occt-wasm)** — 浏览器内 B-Rep + STEP 引擎意味着未来可能不再需要本地安装 CAD 软件即可完成参数化建模，值得评估在团队协作 / 客户审阅场景中的落地价值。

3. **[AI-CAD 工具链（freecad-ai、CADAM、AgentSCAD、Kiln）](https://github.com/CadQuery/cadquery)** — 自然语言 → 几何 → 切片/打印的端到端方案正快速从 demo 走向可用，建议尽早试用 freecad-mcp 与 Kiln，评估其在内部设计自动化流水线中的整合可能。

---

*本日报由多源信息聚合整理，所有链接均来自原始素材，欢迎转发与讨论。*

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*