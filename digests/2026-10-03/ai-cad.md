# CAD/机械结构开源动态日报 2026-10-03

> 数据来源: GitHub Search API (102 仓库) | ArXiv cs.GR+cs.CG (0 篇论文) | RSS 新闻 (3 条) | 生成时间: 2026-10-03 03:18 UTC

---

# CAD/机械结构开源动态日报
**2026 年 10 月 2 日 · 第 37 周**

---

## 📌 今日速览

FreeCAD 1.1.4 正式发布，叠加 2026 Q3 资助项目落地与 WIP Wednesday 周报，显示 FreeCAD 生态正从核心引擎向外延展（AI、ROS、WebAssembly、钣金）多线推进。GitHub 端 102 个活跃仓库以 CAD 平台、计算几何内核和 3D 打印切片三类为主力，但更值得关注的是 AI Agent 与 CAD 融合的密集涌现——`freecad-mcp`、`mcp-3D-printer-server`、`Kiln`、`text-to-cad`、`anvilate`、`vibe-cading`、`SimpleCADAPI` 等项目构成了鲜明的"Agent 原生 CAD"趋势。文件格式侧的"WebAssembly 化 OCCT"（`occt-wasm`、`freecad-web`、`brepjs`）继续把 CAD 推入浏览器。今日 cs.GR/cs.CG 无新增论文，可结合开源项目逆向追踪几何算法趋势。

---

## 🔔 行业脉搏

| # | 动态 | 来源 | 意义 |
|---|------|------|------|
| 1 | **[FreeCAD 1.1.4 正式发布](https://blog.freecad.org/2026/09/28/freecad-1-1-4-released/)** | FreeCAD Blog | 稳定分支持续维护，意味 1.x 系列趋于成熟，企业与教学应用可降低采纳风险 |
| 2 | **[2026 Q3 资助项目公布](https://blog.freecad.org/2026/10/02/2026-q3-grant-program-funded-projects/)** | FreeCAD Blog | 社区资金定向投流到 FreeCAD 关键瓶颈（装配、TopoNaming、Part Design），预计 1.2/2.0 周期内可见收益 |
| 3 | **[WIP Wednesday (2026-09-30)](https://blog.freecad.org/2026/09/30/wip-wednesday-30-september-2026/)** | FreeCAD Blog | 滚动展示主分支进展，是评估"开发版可用性"和"PR 合并节奏"的窗口 |

> 注：今日新闻来源全部来自 FreeCAD Blog，未见 Prusa / Bambu Lab / OpenCASCADE 官方公告。

---

## 🔬 研究前沿

**📭 今日 cs.GR / cs.CG 无新增论文。**

可作为替代的"工程化研究"信号出现在 GitHub：
- **[`text-to-cad`](https://github.com/earthtojake/text-to-cad)** (⭐16,553)：用 LLM 直接生成可编辑 CAD 模型，已成 Agent-CAD 范式的事实参考实现
- **[`MeshLib`](https://github.com/MeshInspector/MeshLib)** (⭐828)：布尔运算、修复、重网格化、点云三角化的 C++/Python SDK，是网格法向工业级问题的"研究级工具箱"
- **[`occt-wasm`](https://github.com/andymai/occt-wasm)** (⭐58) + **[`freecad-web`](https://github.com/Virtastic/freecad-web)** (⭐39)：将 OpenCASCADE 内核编译到浏览器，是"B-rep in browser"路线的工程化对照
- **[`brepjs`](https://github.com/andymai/brepjs)** (⭐113)：TypeScript 端的精确 B-Rep 库，使几何算法研究可在浏览器复现

---

## 🚀 重点项目

### 🖥️ CAD 平台与编辑器

| 仓库 | ⭐ | 一句话 |
|------|---|---------|
| **[FreeCAD/FreeCAD](https://github.com/FreeCAD/FreeCAD)** | 33,903 | 跨平台开源参数化建模的事实标准，配合 1.1.4 发布进入稳定可用阶段 |
| **[openscad/openscad](https://github.com/openscad/openscad)** | 10,343 | "程序员的实体建模器"，脚本化 CAD 的奠基项目，机械设计自动化教学首选 |
| **[earthtojake/text-to-cad](https://github.com/earthtojake/text-to-cad)** | 16,553 | 给 Agent 装上 CAD 超能力——文本/图像→可编辑 STEP/几何，开源版"自然语言建模"代表 |
| **[pascalorg/editor](https://github.com/pascalorg/editor)** | 24,579 | 开源 3D 建筑编辑器，原生支持 CLI + MCP，是"建筑 CAD × Agent"双轨设计的范例 |
| **[CadQuery/cadquery](https://github.com/CadQuery/cadquery)** | 5,872 | 基于 OCCT 的 Python 参数化脚本框架，把 B-Rep 建模降维到一行 Python |
| **[solvespace/solvespace](https://github.com/solvespace/solvespace)** | 4,180 | 极致精简的 2D/3D 参数化约束求解器，机械原理验证与教学利器 |
| **[gumyr/build123d](https://github.com/gumyr/build123d)** | 3,251 | CadQuery 精神的继任者——面向 OO 的现代 Python CAD 库 |
| **[HakanSeven12/OpenCADStudio](https://github.com/HakanSeven12/OpenCADStudio)** | 2,406 | 用 Rust 重写 2D/3D CAD + GPU 渲染，展示了"现代 CAD 重构"的另一种可能 |

### 📐 计算几何与内核

| 仓库 | ⭐ | 一句话 |
|------|---|---------|
| **[CGAL/cgal](https://github.com/CGAL/cgal)** | 6,062 | 计算几何算法的事实标准库，覆盖三角化、布尔、凸包、网格等所有 CAD 底层问题 |
| **[MeshInspector/MeshLib](https://github.com/MeshInspector/MeshLib)** | 828 | 工业级网格布尔/修复/重网格化 SDK，是"网格法→CAD"逆向工程的引擎层 |
| **[w8r/martinez](https://github.com/w8r/martinez)** | 775 | Martinez-Rueda 多边形布尔算法的高质量 TS 实现，常被前端 CAD 项目复用 |
| **[andymai/occt-wasm](https://github.com/andymai/occt-wasm)** | 58 | OpenCASCADE 编译到 WebAssembly，~4MB brotli，使浏览器原生 B-Rep 成为现实 |

### 🧬 创成式与参数化设计

| 仓库 | ⭐ | 一句话 |
|------|---|---------|
| **[ai-collection/ai-collection](https://github.com/ai-collection/ai-collection)** | 9,179 | 生成式 AI 应用全景索引，CAD × GenAI 趋势的"信号雷达" |
| **[generative-design/Code-Package-p5.js](https://github.com/generative-design/Code-Package-p5.js)** | 1,015 | 《Generative Design》配套代码，参数化生成设计的经典学习入口 |
| **[clay-good/anvilate](https://github.com/clay-good/anvilate)** | 10 | "本地优先"机械设计 Agent——自然语言→物理校验→可直接进入 CATIA/SolidWorks 的 STEP |

### 🖨️ 3D 打印与制造

| 仓库 | ⭐ | 一句话 |
|------|---|---------|
| **[MarlinFirmware/Marlin](https://github.com/MarlinFirmware/Marlin)** | 17,613 | 8/32 位 3D 打印机固件事实标准，市售机器广泛搭载 |
| **[OrcaSlicer/OrcaSlicer](https://github.com/OrcaSlicer/OrcaSlicer)** | 15,836 | 跨品牌 G-code 生成器，覆盖 Bambu/Prusa/Voron/Creality 等主流机型 |
| **[Ultimaker/Cura](https://github.com/Ultimaker/Cura)** | 7,049 | 老牌切片 GUI，基于 Uranium 框架，企业部署经验丰富 |
| **[maziggy/bambuddy](https://github.com/maziggy/bambuddy)** | 3,042 | Bambu Lab 自托管控制中心，去云化 + 打印农场管理 |
| **[mainsail-crew/mainsail](https://github.com/mainsail-crew/mainsail)** | 2,219 | Klipper 最流行的 Web 界面，把浏览器作为 3D 打印机的"主控台" |
| **[DMontgomery40/mcp-3D-printer-server](https://github.com/DMontgomery40/mcp-3D-printer-server)** | 244 | 把 MCP 协议接入 OctoPrint/Klipper/Orca/Prusa/Creality，32 工具 STL 操作 + 切片 |
| **[codeofaxel/Kiln](https://github.com/codeofaxel/Kiln)** | 88 | 开源 3D 打印 MCP 服务器：AI Agent 端到端设计→切片→打印，对接 Bambu/Creality/Prusa/Klipper |

### 🔗 文件格式与互操作

| 仓库 | ⭐ | 一句话 |
|------|---|---------|
| **[f3d-app/f3d](https://github.com/f3d-app/f3d)** | 4,737 | 快速极简 3D 查看器，支持 STEP/IGES/STL/glTF 等 30+ 格式 |
| **[fougue/mayo](https://github.com/fougue/mayo)** | 2,270 | Qt + OCCT 构建的 3D CAD 查看器与转换器，企业级 STEP 处理 |
| **[bldrs-ai/Share](https://github.com/bldrs-ai/Share)** | 188 | 浏览器端 BIM/CAD 协作平台，原生支持 IFC/STEP/STL/OBJ |
| **[pzfreo/draftwright](https://github.com/pzfreo/draftwright)** | 79 | build123d/STEP 文件的自动化技术出图，对"Code-CAD→工程图"闭环至关重要 |

### 🐍 Code-CAD 与脚本化

| 仓库 | ⭐ | 一句话 |
|------|---|---------|
| **[CadQuery/cadquery](https://github.com/CadQuery/cadquery)** | 5,872 | Python 参数化 CAD 脚本的事实标准，OCCT 包装层 |
| **[gumyr/build123d](https://github.com/gumyr/build123d)** | 3,251 | CadQuery 风格 + 现代 OOP，是 build123d 生态的"主心骨" |
| **[BelfrySCAD/BOSL2](https://github.com/BelfrySCAD/BOSL2)** | 2,386 | OpenSCAD 的"标准库 2.0"，弥补 OpenSCAD 在复杂模型上的短板 |
| **[partcad/partcad](https://github.com/partcad/partcad)** | 500 | 制造业的包管理器——"数字主线 / TDP"标准，硬件模块化设计基础设施 |
| **[PhySpace/SimpleCADAPI](https://github.com/PhySpace/SimpleCADAPI)** | 136 | Agent 原生 CAD SDK，LM 可创建/检视/重建可编辑 3D 模型 |
| **[fa-mc/vibe-cading](https://github.com/fa-mc/vibe-cading)** | 7 | "Vibe Coding"风格的 3D 模型生成器，让 LLM Agent 直接产出 CadQuery 模型 |

---

## 🌐 生态趋势信号

**三股力量正在加速合流。** 第一，**Agent 原生 CAD** 全面爆发：今日活跃列表中，`text-to-cad`、`freecad-mcp`、`SimpleCADAPI`、`mcp-3D-printer-server`、`Kiln`、`anvilate`、`vibe-cading`、`variant-design-skill` 至少 8 个项目围绕"LLM ↔ CAD/切片器"对接，覆盖建模、出图、切片、农场调度全链路，MCP 协议已成为事实通信层。第二，**浏览器化 B-Rep** 走向工程可用：`occt-wasm`、`freecad-web`、`brepjs`、`f3d`、`bldrs-ai/Share` 共同把 OCCT 内核搬进浏览器，使"零安装 CAD"从演示走向生产。第三，**本地优先 / 去云化** 与 AI 并行：`anvilate`、`JuniorOmega`、`bambuddy` 强调本地推理与本地控制，对工业隐私/合规场景形成与 SaaS 化 CAD 的对照。综合看，开源 CAD 正从"工具替代"阶段跃迁到"Agent 协作 + Web 化 + 本地 AI"的下一周期。

---

## 👀 值得关注

1. **[FreeCAD 1.1.4 发布 + Q3 资助落地](https://blog.freecad.org/2026/09/28/freecad-1-1-4-released/)**：稳定分支成熟度叠加定向资金（装配、TopoNaming），意味着未来 6 个月内 FreeCAD 在企业/教学场景的可用性可能出现跳跃。
2. **[occt-wasm / freecad-web / brepjs 三角](https://github.com/andymai/occt-wasm)**：三条独立路径在浏览器内运行精确 B-Rep，1~2 年内很可能合并出"开源 Web CAD"事实标准，建议提前评估对内部工具链的影响。
3. **[Kiln + mcp-3D-printer-server + bambuddy](https://github.com/codeofaxel/Kiln)**：当 Agent 能直接调切片器与打印机，3D 打印从"手工艺"正式迈入"自动化生产线"——值得立刻评估其在内部原型流水线中的位置。

---

*日报由 FreeCAD Blog、GitHub 活跃仓库、arXiv cs.GR/cs.CG 三方数据合成。*

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*