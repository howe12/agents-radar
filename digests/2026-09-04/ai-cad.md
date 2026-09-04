# CAD/机械结构开源动态日报 2026-09-04

> 数据来源: GitHub Search API (110 仓库) | ArXiv cs.GR+cs.CG (0 篇论文) | RSS 新闻 (6 条) | 生成时间: 2026-09-04 02:25 UTC

---

# CAD/机械结构开源动态日报

**日期：2026-09-02** | 信息源：FreeCAD Blog · Prusa · Bambu Lab · ArXiv cs.GR/cs.CG · GitHub Trending (110 活跃仓库)

---

## 一、今日速览

今日开源 CAD 生态最值得关注的信号集中在三条主线：**版本控制正式进入 FreeCAD 工作流**——History Workbench 借助 Git 为 STEP 模型提供历史追溯；**AI 文本到 CAD 的工程化加速**——text-to-cad 与 cad-cae-copilot 等项目把 LLM Agent、OCCT 实几何与 MCP 协议打通；**切片器与 IoT 安全同步迭代**——PrusaSlicer 3.0 Preview 与 Bambu Lab 全球 IoT 安全认证进展同步落地。整体看，"AI 原生 Code-CAD + 浏览器端 WASM 内核 + Git 化设计溯源"正在成为 2026 下半年的明确方向。

---

## 二、行业脉搏

1. **[History Workbench brings Git powered File Versioning to FreeCAD](https://blog.freecad.org/2026/08/28/history-workbench-brings-git-powered-file-versioning-to-freecad/)** — FreeCAD 引入 Git 驱动的文件版本管理，对应仓库 [eblanshey/HistoryWorkbench](https://github.com/eblanshey/HistoryWorkbench) 已达 140 ⭐。意义在于把"机械设计与软件工程 DevOps"对齐，团队协作和审计追溯第一次有了原生支持。

2. **[PrusaSlicer 3.0 Preview – Built for the Future of 3D Printing](https://blog.prusa3d.com/prusaslicer-3-0-preview-built-for-the-future-of-3d-printing_137672/)** — Prusa 公开下一代切片器架构预览，结合 [OrcaSlicer](https://github.com/OrcaSlicer/OrcaSlicer) 15.5k ⭐ 与 Bambu/Prusa/Voron 多机兼容趋势，标志切片器进入"参数化、可组合、AI 友好"的新阶段。

3. **[WIP Wednesday, 2 September 2026](https://blog.freecad.org/2026/09/02/wip-wednesday-2-september-2026/)** — FreeCAD 社区例行开发进展汇总，对应主线仓库 [FreeCAD/FreeCAD](https://github.com/FreeCAD/FreeCAD) 33.2k ⭐，反映主仓持续活跃。

4. **[One Year On: IoT Security through Global Certifications and Community Collaboration](https://blog.bambulab.com/one-year-on-strengthening-iot-security-through-global-certifications-and-community-collaboration/)** — Bambu Lab 公布 IoT 安全合规里程碑，配合社区自托管项目 [maziggy/bambuddy](https://github.com/maziggy/bambuddy)（2.9k ⭐，"你的 Bambu，无云端"），体现"云依赖 + 本地控制权"两条路并行演进。

5. **[Back-to-School 2026 Deals](https://blog.prusa3d.com/back-to-school-2026-deals-are-here_137792/)** 与 **[Meet the 2026 Bambu Lab School Ambassadors](https://blog.bambulab.com/meet-the-2026-bambu-lab-school-ambassadors/)** — 行业向教育市场下沉的开源硬件普惠信号，配套 [FreeCAD](https://github.com/FreeCAD/FreeCAD) / [OpenSCAD](https://github.com/openscad/openscad) 等入门工具进一步降低教学门槛。

---

## 三、研究前沿

> 今日 ArXiv `cs.GR` / `cs.CG` 通道未抓到相关论文投递，学术信号暂缺。
> 替代视角：从今日活跃仓库与新闻可观察到几条与图形学/几何处理同源的研究主线正在"工程化"——
>
> - **B-Rep 几何的 WASM 化与浏览器原生 CAD**：[andymai/occt-wasm](https://github.com/andymai/occt-wasm)（49 ⭐）、[andymai/brepjs](https://github.com/andymai/brepjs)（97 ⭐）把 OCCT 精确边界表示推到 ~4MB brotli 的 WebAssembly，呼应图形学"轻量化精确几何"长期目标。
> - **网格布尔与鲁棒几何处理**：[polydera/trueform](https://github.com/polydera/trueform)（137 ⭐）、[unageek/kigumi](https://github.com/unageek/kigumi)（53 ⭐）、[MeshInspector/MeshLib](https://github.com/MeshInspector/MeshLib)（815 ⭐）——传统 CGAL 级研究正以现代 C++/多语言绑定走向生产。
> - **生成式工程**：[earthtojake/text-to-cad](https://github.com/earthtojake/text-to-cad)（14.3k ⭐）等仓库将拓扑/参数指针、稳定引用等 CVPR/ICRA 级思想下沉为 Agent 可调用工具，可视作 Text-to-3D 学术成果的"工业着陆点"。

---

## 四、重点项目

### 🖥️ CAD 平台与编辑器

| 项目 | ⭐ | 一句话价值 |
|---|---|---|
| [FreeCAD/FreeCAD](https://github.com/FreeCAD/FreeCAD) | 33,237 | 开源参数化建模事实标准，OCCT 内核 + PartDesign 工作流，今日新闻主角 |
| [openscad/openscad](https://github.com/openscad/openscad) | 10,119 | 程序化实体建模经典 DSL，BOSL2 / LuaCAD 等生态围绕其扩展 |
| [LibreCAD/LibreCAD](https://github.com/LibreCAD/LibreCAD) | 6,326 | 跨平台 2D CAD，DXF/DWG 兼容，是机械制图轻量首选 |
| [solvespace/solvespace](https://github.com/solvespace/solvespace) | 4,137 | 参数化 2D/3D 约束求解器，教学/小型机构件优秀 |
| [bldrs-ai/Share](https://github.com/bldrs-ai/Share) | 186 | 浏览器端 BIM/CAD 协同查看器（IFC/STEP/STL/glTF），Web CAD 协同代表 |

### 📐 计算几何与内核

| 项目 | ⭐ | 一句话价值 |
|---|---|---|
| [CGAL/cgal](https://github.com/CGAL/cgal) | 6,032 | 计算几何算法库，CAD/机器人/地理通用底层 |
| [Open-Cascade-SAS/OCCT](https://github.com/Open-Cascade-SAS/OCCT) | 2,831 | 开源 B-Rep/CAM/CAE 平台，FreeCAD/CadQuery/Mayo 共用内核 |
| [pyvista/pyvista](https://github.com/pyvista/pyvista) | 3,793 | 基于 VTK 的 Python 3D 可视化与网格分析，CAE 可视化利器 |
| [mikedh/trimesh](https://github.com/mikedh/trimesh) | 3,666 | Python 三角网格加载/分析，是 3DP/逆向工程管线标配 |
| [MeshInspector/MeshLib](https://github.com/MeshInspector/MeshLib) | 815 | 高速网格布尔/修复/抽稀/重网格，C++ 多语言绑定，工业级 |
| [polydera/trueform](https://github.com/polydera/trueform) | 137 | 现代 C++ 几何 STL，主打精确布尔与空间查询 |

### 🧬 创成式与参数化设计

| 项目 | ⭐ | 一句话价值 |
|---|---|---|
| [earthtojake/text-to-cad](https://github.com/earthtojake/text-to-cad) | 14,272 | AI Agent 技能库，把 LLM 对接 CAD/CAE/CAM 全流程 |
| [Adam-CAD/CADAM](https://github.com/Adam-CAD/CADAM) | 5,089 | 开源 Text-to-CAD Web 应用，自然语言到 3D 模型 |
| [armpro24-blip/cad-cae-copilot](https://github.com/armpro24-blip/cad-cae-copilot) | 56 | AI 原生 CAD/CAE 工作台，build123d+OCCT 实几何 + MCP 工具 |
| [tanishqbhattad/rhino-mcp](https://github.com/tanishqbhattad/rhino-mcp) | 17 | Rhino 8 的 MCP 服务器，123 个 AI 建模工具 |
| [clay-good/anvilate](https://github.com/clay-good/anvilate) | 7 | 本地优先机械设计 Agent，输出物理验证过的 STEP/DXF |

### 🖨️ 3D 打印与制造

| 项目 | ⭐ | 一句话价值 |
|---|---|---|
| [MarlinFirmware/Marlin](https://github.com/MarlinFirmware/Marlin) | 17,564 | 3D 打印机固件事实标准，8/32 位 MCU 全平台 |
| [OrcaSlicer/OrcaSlicer](https://github.com/OrcaSlicer/OrcaSlicer) | 15,574 | 多厂牌兼容 G-code 生成器（Bambu/Prusa/Voron 等） |
| [Ultimaker/Cura](https://github.com/Ultimaker/Cura) | 7,029 | 主流桌面级切片 GUI，Uranium 框架 |
| [maziggy/bambuddy](https://github.com/maziggy/bambuddy) | 2,901 | Bambu Lab 自托管中控，单机到农场级本地化方案 |
| [Donkie/Spoolman](https://github.com/Donkie/Spoolman) | 2,769 | 3D 打印耗材库存管理，数字料仓 |
| [Slicer/Slicer](https://github.com/Slicer/Slicer) | 2,612 | 医学影像/科学可视化平台，常用于生物制造研究 |
| [codeofaxel/Kiln](https://github.com/codeofaxel/Kiln) | 52 | MCP 切片/打印服务器，AI Agent 直驱 Bambu/Marlin/Klipper |

### 🔗 文件格式与互操作

| 项目 | ⭐ | 一句话价值 |
|---|---|---|
| [f3d-app/f3d](https://github.com/f3d-app/f3d) | 4,665 | 极简快速 3D 查看器，跨格式预览（STEP/STL/GLTF 等） |
| [fougue/mayo](https://github.com/fougue/mayo) | 2,145 | Qt+OCCT 的 CAD 查看与格式转换桌面工具 |
| [FriendsOfCADability/CADability](https://github.com/FriendsOfCADability/CADability) | 177 | 纯 .NET 3D 建模类库，STEP/STL/DXF 交换 |
| [andymai/brepjs](https://github.com/andymai/brepjs) | 97 | TypeScript Web 端精确 B-Rep 几何库 |
| [andymai/occt-wasm](https://github.com/andymai/occt-wasm) | 49 | OCCT → WASM，浏览器端运行工业级内核 |
| [lzpel/cadrum](https://github.com/lzpel

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*