# CAD/机械结构开源动态日报 2026-09-05

> 数据来源: GitHub Search API (109 仓库) | ArXiv cs.GR+cs.CG (0 篇论文) | RSS 新闻 (5 条) | 生成时间: 2026-09-05 02:26 UTC

---

# 📐 CAD 与机械结构开源动态日报
*2026 年 1 月 16 日 · 综合 5 条行业新闻 + 0 篇论文 + 109 个活跃仓库*

---

## 一、今日速览

今日开源 CAD/机械设计生态的核心信号是 **"AI 代理 + 标准化内核"双线推进**：FreeCAD 社区通过多个 MCP 服务器（freecad-mcp、freecad-ai）加速 LLM 与参数化建模的融合；Prusa 发布 PrusaSlicer 3.0 预览版标志着切片软件进入新一轮架构迭代；Bambu Lab 在 IoT 安全认证上持续投入，反映消费级 3D 打印厂商对联网合规的重视。今日无 cs.GR/cs.CG 论文入库，但仓库中创成式设计（text-to-cad、CADAM、cad-cae-copilot）与 WebAssembly 化 OCCT（occt-wasm、cadrum、brepjs）形成清晰的新趋势轴线。

---

## 二、行业脉搏

| # | 动态 | 意义 |
|---|------|------|
| 1 | **[WIP Wednesday, 2 September 2026 — FreeCAD Blog](https://blog.freecad.org/2026/09/02/wip-wednesday-2-september-2026/)** | FreeCAD 持续推进的每周开发进度汇总，对参数化建模与装配工作流使用者是核心参考。 |
| 2 | **[PrusaSlicer 3.0 Preview — Built for the Future of 3D Printing](https://blog.prusa3d.com/prusaslicer-3-0-preview-built-for-the-future-of-3d-printing_137672/)** | 新一代切片器架构预览，意味着 Prusa 在多机兼容、引擎性能与生态开放上的方向调整。 |
| 3 | **[One Year On: strengthening IoT Security through Global Certifications — Bambu Lab](https://blog.bambulab.com/one-year-on-strengthening-iot-security-through-global-certifications-and-community-collaboration/)** | 厂商对联网合规和云安全的公开承诺，对家庭/工坊级打印机隐私策略具有参考意义。 |
| 4 | **[Back-to-School 2026 Deals — Prusa Blog](https://blog.prusa3d.com/back-to-school-2026-deals-are-here_137792/)** | 消费市场促销节点，间接反映硬件出货节奏与教育市场渗透。 |
| 5 | **[Meet the 2026 Bambu Lab School Ambassadors — Bambu Lab](https://blog.bambulab.com/meet-the-2026-bambu-lab-school-ambassadors/)** | 厂商推动 K-12 创客生态，长期看有利于开源 CAD/切片工具的入门人群扩大。 |

---

## 三、研究前沿

> ⚠️ **今日无 cs.GR / cs.CG 新论文入库。** 学术动态暂时缺位，请关注后续日报。本期"研究前沿"略过，转而从仓库中提炼具有研究色彩的进展（见下文 WebAssembly 化几何内核、Code-CAD 与生成式部分）。

---

## 四、重点项目

### 🖥️ CAD 平台与编辑器

- **[FreeCAD/FreeCAD](https://github.com/FreeCAD/FreeCAD)** — ⭐33,266 — 开源参数化 3D 建模旗舰，多平台、支持 OCCT 内核，是当前最活跃的多功能 CAD 平台。
- **[pascalorg/editor](https://github.com/pascalorg/editor)** — ⭐21,872 — 浏览器端 3D 建筑项目编辑器，代表"Web 原生 CAD"路线。
- **[openscad/openscad](https://github.com/openscad/openscad)** — ⭐10,133 — 程序化实体建模器，工程师与爱好者群体的事实标准之一。
- **[LibreCAD/LibreCAD](https://github.com/LibreCAD/LibreCAD)** — ⭐6,328 — 跨平台 2D CAD，支持 DXF/DWG 读写，是轻量工程制图的主力替代。
- **[solvespace/solvespace](https://github.com/solvespace/solvespace)** — ⭐4,139 — 紧凑型参数化 2D/3D CAD，体量小、功能完整，适合嵌入式与教育场景。
- **[leozide/leocad](https://github.com/leozide/leocad)** — ⭐2,849 — LEGO 虚拟积木 CAD，体现 CAD 在非工程领域的扩展。

### 📐 计算几何与内核

- **[CGAL/cgal](https://github.com/CGAL/cgal)** — ⭐6,033 — 计算几何算法库，工业级几何处理的事实标准。
- **[cdcseacave/openMVS](https://github.com/cdcseacave/openMVS)** — ⭐4,109 — 开源多视图立体重建库，桥接摄影测量与 CAD。
- **[pyvista/pyvista](https://github.com/pyvista/pyvista)** — ⭐3,794 — 基于 VTK 的 Python 3D 可视化与网格分析，是科学/工程可视化的核心工具。
- **[mikedh/trimesh](https://github.com/mikedh/trimesh)** — ⭐3,668 — Python 三角网格库，轻量且生态丰富，是 STL 处理流水线首选。
- **[Open-Cascade-SAS/OCCT](https://github.com/Open-Cascade-SAS/OCCT)** — ⭐2,836 — 开源 B-Rep 内核，几乎所有现代开源 CAD 的几何底座。
- **[MeshInspector/MeshLib](https://github.com/MeshInspector/MeshLib)** — ⭐815 — 网格布尔运算、修复、重网格化、ICP 对齐，CAD/CAM 后处理利器。
- **[polydera/trueform](https://github.com/polydera/trueform)** — ⭐137 — C++ CSG 引擎，提供快速精确的网格布尔与空间查询。
- **[unageek/kigumi](https://github.com/unageek/kigumi)** — ⭐53 — 三角网格布尔运算新锐项目，强调稳健性。

### 🧬 创成式与参数化设计

- **[earthtojake/text-to-cad](https://github.com/earthtojake/text-to-cad)** — ⭐14,352 — CAD/CAE/CAM 的 Agent Skills 库，是文本到几何 Agent 化的关键基础设施。
- **[ai-collection/ai-collection](https://github.com/ai-collection/ai-collection)** — ⭐9,138 — 生成式 AI 应用全景索引，便于跟踪 AI × 设计工具动态。
- **[Adam-CAD/CADAM](https://github.com/Adam-CAD/CADAM)** — ⭐5,095 — 开源文本到 CAD Web 应用，演示自然语言驱动建模的落地形态。
- **[generative-design/Code-Package-p5.js](https://github.com/generative-design/Code-Package-p5.js)** — ⭐1,014 — 经典创成式设计 p5.js 代码包，仍是设计编程教学标杆。
- **[armpro24-blip/cad-cae-copilot](https://github.com/armpro24-blip/cad-cae-copilot)** — ⭐56 — AI 原生 CAD/CAE 工作台，结合 build123d + OCCT + MCP，Agent 友好的工程级管线。
- **[tanishqbhattad/rhino-mcp](https://github.com/tanishqbhattad/rhino-mcp)** — ⭐17 — Rhino 8 的 MCP 服务器，覆盖 123 个建模工具，是商业 CAD Agent 化的范例。
- **[clay-good/anvilate](https://github.com/clay-good/anvilate)** — ⭐7 — 本地优先的机械设计 Agent，自然语言生成物理校验后的 STEP/DXF，输出可直接喂入 CATIA/SolidWorks/NX。

### 🖨️ 3D 打印与制造

- **[MarlinFirmware/Marlin](https://github.com/MarlinFirmware/Marlin)** — ⭐17,567 — 8/32 位 RepRap 固件事实标准，覆盖大量商用打印机。
- **[OrcaSlicer/OrcaSlicer](https://github.com/OrcaSlicer/OrcaSlicer)** — ⭐15,588 — 跨多机（Bambu、Prusa、Voron、Creality…）G-code 生成器，社区增长极快。
- **[Ultimaker/Cura](https://github.com/Ultimaker/Cura)** — ⭐7,028 — 老牌切片 GUI，基于 Uranium 框架，仍是企业级与教育市场主力。
- **[maziggy/bambuddy](https://github.com/maziggy/bambuddy)** — ⭐2,905 — 自托管 Bambu 指挥中心，去云化、隐私优先的本地化方案。
- **[Donkie/Spoolman](https://github.com/Donkie/Spoolman)** — ⭐2,774 — 3D 打印耗材库存管理，体现打印农场化趋势。
- **[mainsail-crew/mainsail](https://github.com/mainsail-crew/mainsail)** — ⭐2,207 — Klipper 主流 Web 控制前端。
- **[codeofaxel/Kiln](https://github.com/codeofaxel/Kiln)** — ⭐52 — 面向多品牌打印机的 MCP 服务器，AI Agent 完整接管"设计→切片→打印"链路。

### 🔗 文件格式与互操作

- **[f3d-app/f3d](https://github.com/f3d-app/f3d)** — ⭐4,667 — 快速极简 3D 查看器，适合嵌入到 CLI/CI 流水线做格式预览。
- **[fougue/mayo](https://github.com/fougue/mayo)** — ⭐2,145 — 基于 Qt + OCCT 的 CAD 查看与转换器，企业内常用 STEP 检视工具。
- **[sgenoud/replicad](https://github.com/sgenoud/replicad)** — ⭐678 — 浏览器内基于代码构建 3D 模型，推动"Web CAD"概念。
- **[andymai/brepjs](https://github.com/andymai/brepjs)** — ⭐99 — Web 端精确 B-Rep 几何库，是 OCCT 上 Web 的关键抽象层。
- **[lzpel/cadrum](https://github.com/lzpel/cadrum)** — ⭐56 — Rust CAD crate，静态链接 headless OCCT，原生 + WASM 双运行。
- **[andymai/occt-wasm](https://github.com/andymai/occt-wasm)** — ⭐49 — OCCT 编译到 WebAssembly，TypeScript API 干净，~4MB brotli，是"CAD 上浏览器"路线的核心组件。

### 🐍 Code-CAD 与脚本化

- **[CadQuery/cadquery](https://github.com/CadQuery/cadquery)** — ⭐5,689 — 基于 OCCT 的 Python 参数化 CAD 脚本框架，Code-CAD 生态最成熟成员。
- **[gumyr/build123d](https://github.com/gumyr/build123d)** — ⭐3,010 — 下一代 Python CAD 编程库，强调显式拓扑与可读性。
- **[BelfrySCAD/BOSL2](https://github.com/BelfrySCAD/BOSL2)** — ⭐2,342 — OpenSCAD 库，扩展形状、掩膜与变换，降低程序化建模门槛。
- **[partcad/partcad](https://github.com/partcad/partcad)** — ⭐493 — 面向"可制造物理产品"的包管理器 + AI 助手，对标数字主线 (Digital Thread) 概念。
- **[ghbalf/freecad-ai](https://github.com/ghbalf/freecad-ai)** — ⭐466 — FreeCAD 的 AI 助手工作台，自然语言生成 3D 模型。
- **[blwfish/freecad-mcp](https://github.com/blwfish/freecad-mcp)** — ⭐36 — FreeCAD MCP 服务器，32 个工具支持 AI 辅助建模。
- **[ad-si/LuaCAD](https://github.com/ad-si/LuaCAD)** — ⭐120 — Lua 参数化 CAD 建模，Rust 实现，跨语言生态探索。
- **[pzfreo/draftwright](https://github.com/pzfreo/draftwright)** — ⭐59 — 自动从 build123d/STEP 文件生成技术工程图。

---

## 五、生态趋势信号

今日多源数据共同指向三条主线。**第一，AI 代理化已成为开源 CAD 的明确方向**：text-to-cad、CADAM、cad-cae-copilot、rhino-mcp、freecad-ai、freecad-mcp、Kiln 等项目串联出"自然语言/Agent → 参数化几何 → STEP/切片/打印"的完整管线，且普遍采用 MCP 协议作为标准接口，Anvilate 甚至直接对标 CATIA/SolidWorks 的 STEP 输出。**第二，几何内核的 WebAssembly 化

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*