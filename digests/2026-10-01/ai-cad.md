# CAD/机械结构开源动态日报 2026-10-01

> 数据来源: GitHub Search API (104 仓库) | ArXiv cs.GR+cs.CG (0 篇论文) | RSS 新闻 (3 条) | 生成时间: 2026-10-01 03:34 UTC

---

# CAD/机械结构开源动态日报

**日期：** 2026-09-30  |  **来源：** FreeCAD Blog · Prusa Blog · GitHub Trending · ArXiv

---

## 一、今日速览

今天开源 CAD 生态由 **FreeCAD 1.1.4 补丁版本发布**领衔，主要为 1.1 系列的稳定性修复；同时社区开发者继续围绕 FreeCAD 推出多个 AI/MCP 集成工具（如 `freecad-ai`、`freecad-mcp` 系列），Code-CAD 与 AI 辅助建模的融合明显加深。在制造端，3D 打印切片器（OrcaSlicer、PrusaSlicer 相关生态）与自托管打印农场管理（Bambuddy、mainsail）持续受到关注。Prusa Printables 平台新增 Factorio 主题模型内容，凸显游戏化主题模型资产的社区热度。值得注意的是，cs.GR/cs.CG 论文本日无新增，建议关注后续几何处理与 BVH 优化方向。

---

## 二、行业脉搏

| # | 动态 | 意义 |
|---|------|------|
| 1 | [**FreeCAD 1.1.4 发布**](https://blog.freecad.org/2026/09/28/freecad-1-1-4-released/) | FreeCAD 1.1 主线的最新补丁版本，定位为 bug 修复与小型改进，是生产环境用户升级的推荐版本。 |
| 2 | [**WIP Wednesday — 2026-09-30**](https://blog.freecad.org/2026/09/30/wip-wednesday-30-september-2026/) | 社区每周开发进度汇总，反映 FreeCAD 主线在 Part Design、Sketcher、Assembly 等核心 Workbench 的活跃迭代。 |
| 3 | [**Factorio 入驻 Printables**](https://blog.prusa3d.com/factorio-has-arrived-on-printables_138519/) | Prusa 的 Printables 平台引入 Factorio 游戏化主题模型，标志着「游戏资产 → 现实制造」的内容生态扩张。 |

---

## 三、研究前沿

⚠️ 今日 ArXiv cs.GR / cs.CG 频道无新增论文，无法提供前沿论文摘要。

> 建议读者持续关注：路径追踪加速（three-gpu-pathtracer）、大规模网格布尔运算（MeshLib）、约束求解（Solvespace 内核）等方向的最新预印本。

---

## 四、重点项目

### 🖥️ CAD 平台与编辑器

- [**FreeCAD/FreeCAD**](https://github.com/FreeCAD/FreeCAD) — ⭐ 33,871 · C++
  开源参数化 3D 建模标杆，OCCT 内核 + 多工作台架构，是替代商业 CAD 的核心选项。

- [**openscad/openscad**](https://github.com/openscad/openscad) — ⭐ 10,334 · C++
  「程序员友好」的可编程实体建模器，用代码而非鼠标描述几何。

- [**solvespace/solvespace**](https://github.com/solvespace/solvespace) — ⭐ 4,178 · C++
  轻量级参数化 2D/3D CAD，体积约束求解器极具特色。

- [**mlt131220/Astral3D**](https://github.com/mlt131220/Astral3D) — ⭐ 2,508 · JavaScript
  基于 Vue3 + Three.js 的开源三维引擎，集成 BIM 轻量化、CAD 解析与粒子系统，可用于浏览器端 CAD 预览。

- [**HakanSeven12/OpenCADStudio**](https://github.com/HakanSeven12/OpenCADStudio) — ⭐ 2,371 · Rust
  Rust 编写的 CAD 应用，主打 DWG/DXF 兼容 + GPU 加速渲染，是新兴语言栈在 CAD 领域的探索。

- [**Virtastic/freecad-web**](https://github.com/Virtastic/freecad-web) — ⭐ 38 · Python
  FreeCAD 编译到 WebAssembly + JSPI，原生工作台与求解器直接在浏览器运行，是 FreeCAD 上云的里程碑。

### 📐 计算几何与内核

- [**CGAL/cgal**](https://github.com/CGAL/cgal) — ⭐ 6,059 · C++
  计算几何算法库的「事实标准」，覆盖三角化、布尔运算、网格处理等几乎所有几何算法子领域。

- [**cdcseacave/openMVS**](https://github.com/cdcseacave/openMVS) — ⭐ 4,138 · C++
  开源多视图立体重建库，可由图像生成稠密点云与网格，是 CAD 逆向工程的关键工具。

- [**MeshInspector/MeshLib**](https://github.com/MeshInspector/MeshLib) — ⭐ 827 · C++
  3D 几何处理 SDK，主打网格布尔、修复、简化、偏置、点云三角化与 ICP 配准，并绑定多语言绑定。

- [**pyvista/pyvista**](https://github.com/pyvista/pyvista) — ⭐ 3,829 · Python
  基于 VTK 的 Python 3D 可视化与网格分析库，已成为科研 / 工程领域的事实标准可视化工具。

- [**mikedh/trimesh**](https://github.com/mikedh/trimesh) — ⭐ 3,690 · Python
  纯 Python 三角网格库，擅长 STL/OBJ/STEP 文件 I/O 与基础几何查询，适合轻量化 CAD 流水线。

- [**gkjohnson/three-mesh-bvh**](https://github.com/gkjohnson/three-mesh-bvh) — ⭐ 3,500 · JavaScript
  three.js BVH 加速库，把光追与空间查询从 O(n) 降到 O(log n)，对浏览器端大规模网格交互至关重要。

### 🧬 创成式与参数化设计

- [**CadQuery/cadquery**](https://github.com/CadQuery/cadquery) — ⭐ 5,860 · Python
  基于 OCCT 的 Python 参数化 CAD 脚本框架，机械工程师「写代码出 STEP」的事实标准。

- [**gumyr/build123d**](https://github.com/gumyr/build123d) — ⭐ 3,242 · Python
  CadQuery 思路的现代继任者，更友好的几何构造 API，适合 LLM 友好型参数化设计。

- [**BelfrySCAD/BOSL2**](https://github.com/BelfrySCAD/BOSL2) — ⭐ 2,386 · OpenSCAD
  OpenSCAD 最全面的扩展库，显著降低参数化建模门槛。

- [**partcad/partcad**](https://github.com/partcad/partcad) — ⭐ 498 · Python
  制造业「包管理器」概念，把数字主线（Digital Thread）和 AI 引入硬件生命周期管理。

- [**clay-good/anvilate**](https://github.com/clay-good/anvilate) — ⭐ 10 · Python
  本地优先的机械工程师 AI 代理，自然语言 → 物理验证的 STEP/DXF + 可编辑 Python 源码。

### 🖨️ 3D 打印与制造

- [**MarlinFirmware/Marlin**](https://github.com/MarlinFirmware/Marlin) — ⭐ 17,610 · C++
  全球装机量最大的开源 3D 打印固件，兼容 8/32 位 MCU。

- [**OrcaSlicer/OrcaSlicer**](https://github.com/OrcaSlicer/OrcaSlicer) — ⭐ 15,812 · C++
  支持 Bambu / Voron / Prusa / Creality 等主流机器的 G-code 生成器，社区热度极高。

- [**Ultimaker/Cura**](https://github.com/Ultimaker/Cura) — ⭐ 7,049 · Python
  历史最悠久的桌面级开源切片 GUI，Uranium 框架仍是切片器架构标杆。

- [**maziggy/bambuddy**](https://github.com/maziggy/bambuddy) — ⭐ 3,031 · Python
  「Your Bambu Lab. No Cloud. Your Rules.」自托管的 Bambu Lab 命令中心，面向打印农场场景。

- [**DMontgomery40/mcp-3D-printer-server**](https://github.com/DMontgomery40/mcp-3D-printer-server) — ⭐ 243 · TypeScript
  通过 MCP 把 Orca / Bambu / OctoPrint / Klipper / Duet 等主流 3D 打印机 API 统一暴露给 AI 代理，支持 STL 切片与可视化。

- [**Sienci-Labs/gsender**](https://github.com/Sienci-Labs/gsender) — ⭐ 372 · TypeScript
  Grbl / grblHAL CNC 控制软件，对小型 CNC 工作流友好。

- [**codeofaxel/Kiln**](https://github.com/codeofaxel/Kiln) — ⭐ 79 · Python
  开源 MCP 3D 打印服务器，让 AI 代理（Claude / Codex / Cursor）完成「设计 → 生成 → 切片 → 打印」全链路。

### 🐍 Code-CAD 与脚本化 / AI 集成

- [**pascalorg/editor**](https://github.com/pascalorg/editor) — ⭐ 24,425 · TypeScript
  开源 3D 建筑编辑器，原生支持本地 CLI + MCP 工具，人类与 AI 代理共用工作流。

- [**earthtojake/text-to-cad**](https://github.com/earthtojake/text-to-cad) — ⭐ 16,512 · Python
  「Give your agent CAD superpowers.」让 LLM 代理具备生成 CAD 模型的能力。

- [**ghbalf/freecad-ai**](https://github.com/ghbalf/freecad-ai) — ⭐ 532 · Python
  FreeCAD AI 助手工作台，自然语言生成 3D 模型。

- [**PhySpace/SimpleCADAPI**](https://github.com/PhySpace/SimpleCADAPI) — ⭐ 136 · Python
  面向语言模型的「Agent-native CAD SDK」，可创建、检查、重建可编辑 3D 模型。

- [**blwfish/freecad-mcp**](https://github.com/blwfish/freecad-mcp) — ⭐ 55 · Python
  FreeCAD 的 MCP 服务器，提供 32 个 AI 辅助 3D CAD 建模工具。

---

## 五、生态趋势信号

今日素材呈现三条值得关注的趋势线：

1. **AI/MCP 与 CAD 的深度耦合** —— 多只高活跃度仓库（`freecad-ai`、`freecad-mcp`、`text-to-cad`、`SimpleCADAPI`、`Kiln`、`mcp-3D-printer-server`）不约而同地把大模型、Agent、MCP 协议接入 CAD 与 3D 打印流水线。「自然语言 → 可编辑 STEP」正在从 Demo 走向产品级。

2. **本地优先 + 自托管** —— `bambuddy`、`mainsail`、`JuniorOmega`、`anvilate` 等项目共同强调「No Cloud」「local-first」。这是对厂商云服务依赖的明确反制，也符合欧洲及国内对数据合规的需求。

3. **Web 化与跨语言栈** —— `freecad-web`（wasm64+JSPI）将完整 FreeCAD 跑在浏览器；`OpenCADStudio`（Rust）、`pascalorg/editor`（TypeScript）则探索全新语言

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*