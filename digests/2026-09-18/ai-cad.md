# CAD/机械结构开源动态日报 2026-09-18

> 数据来源: GitHub Search API (107 仓库) | ArXiv cs.GR+cs.CG (0 篇论文) | RSS 新闻 (4 条) | 生成时间: 2026-09-18 02:40 UTC

---

# CAD/机械结构开源动态日报
**日期：2026 年 9 月 16 日** · 信息源：FreeCAD Blog、Bambu Lab、GitHub Trending（CAD/Mesh/3DP 相关）

---

## 一、今日速览

今日 FreeCAD 生态继续保持高频迭代，官方发布 **WIP Wednesday 第 16 期开发进展** 并同步上线周边商店，社区活跃度显著；Bambu Lab 则继续深耕 STEM 教育与无障碍制造两条主线。GitHub 端，**AI × CAD 融合**继续是最大热点——多个 FreeCAD MCP 服务器、Multi-Agent-CAD、Anvilate 等项目集中涌现，标志着"自然语言 → 物理可验证模型"链路正在快速产品化。同时，**Rust 语言原生 CAD 内核**（OpenCADStudio、cadrum、sparrow）逐步成型，与传统 C++/OCCT 路径形成并行赛道。

---

## 二、行业脉搏

1. **FreeCAD 1.x 进入稳定迭代期** — [WIP Wednesday, 16 September 2026](https://blog.freecad.org/2026/09/16/wip-wednesday-16-september-2026/) 汇总了 Toponaming、Part Design、Assembly 等核心模块的最新修复与新功能，预示 1.0 正式发布后社区进入"高频小步快跑"阶段。
2. **FreeCAD 周边商店上线** — [FreeCAD Swag Shop Now Open!](https://blog.freecad.org/2026/09/11/freecad-swag-shop-now-open/) 标志着项目商业化与品牌运营进入新阶段，有助于扩大开发者与赞助者基础。
3. **3D 打印下沉至 STEM 教育** — [3D Printing Workshops: The Summer STEM Series](https://blog.bambulab.com/the-summer-stem-series-3d-printing-workshops/) 反映消费级 3D 打印厂商正系统化布局 K12/高校教育市场。
4. **3D 打印服务无障碍事业** — [Seven Organizations, One Maker Community](https://blog.bambulab.com/seven-organizations-one-maker-community-3d-printing-in-service-of-accessibility/) 展示增材制造在辅助器具领域的落地潜力，是"开源硬件 + 社会公益"的典型范本。

> 注：今日 cs.GR / cs.CG 论文流为空，本期"研究前沿"栏目无新论文可荐，将在下方以仓库侧信号补充观察。

---

## 三、研究前沿

⚠️ 今日 ArXiv cs.GR / cs.CG 抓取无新增条目。考虑到当前 GitHub 仓库中 **"多智能体 CAD""文本到 CAD""物理可验证参数化设计"** 等方向与图形学顶会研究高度同步，建议关注以下仓库侧替代信号：

- **Pan-Chera/Multi-Agent-CAD** ⭐987 — 通过"约束测试时计算"实现多 Agent 解耦的 text-to-CAD 框架，思路与近期 arXiv 上的 agentic 几何生成论文吻合。
- **clay-good/anvilate** ⭐7 — 提出"自然语言 → 物理验证 → 参数化 STEP/DXF"闭环，是 Graph2CAD / Text2CAD 系列工作的工程化实现。
- **earthtojake/text-to-cad** ⭐16,025 — 把 CAD/CAE/CAM 的 Agent Skills 集中库化，对应学术界关于"工具增强 LLM for CAD"的研究方向。

---

## 四、重点项目

### 🖥️ CAD 平台与编辑器

| 仓库 | ⭐ | 一句话说明 |
|---|---|---|
| [FreeCAD/FreeCAD](https://github.com/FreeCAD/FreeCAD) | 33,600 | 开源多平台参数化 3D 建模器事实标准，OCCT 内核 + Python 脚本化，是本次日报最大流量来源。 |
| [openscad/openscad](https://github.com/openscad/openscad) | 10,227 | 程序员友好的脚本式实体建模器，适合参数化零件与代码审查场景。 |
| [solvespace/solvespace](https://github.com/solvespace/solvespace) | 4,163 | 轻量级 2D/3D 参数化 CAD，含约束求解器，适合嵌入式 / 教学场景。 |
| [pascalorg/editor](https://github.com/pascalorg/editor) | 24,019 | 面向 AI Agent 的开源 3D 建筑编辑器，集成 MCP 工具与本地 CLI，代表"Agent-native CAD"形态。 |
| [HakanSeven12/OpenCADStudio](https://github.com/HakanSeven12/OpenCADStudio) | 2,036 | 基于 Rust 的 2D/3D CAD 新尝试，DWG/DXF 支持 + GPU 加速渲染，值得关注语言路线。 |
| [leozide/leocad](https://github.com/leozide/leocad) | 2,867 | LEGO 虚拟建模专用 CAD，长尾但活跃，体现垂直 CAD 的生命力。 |

### 📐 计算几何与内核

| 仓库 | ⭐ | 一句话说明 |
|---|---|---|
| [CGAL/cgal](https://github.com/CGAL/cgal) | 6,049 | C++ 计算几何算法库，CAD/CAE 领域的"瑞士军刀"，三角化、布尔、网格生成等核心能力。 |
| [fougue/mayo](https://github.com/fougue/mayo) | 2,209 | 基于 Qt + OpenCascade 的 3D CAD 查看与转换器，企业级 STEP/IGES 转换路线。 |
| [andymai/occt-wasm](https://github.com/andymai/occt-wasm) | 53 | OpenCascade 编译到 WebAssembly（≈4MB brotli），让 OCCT 内核直接在浏览器运行，是 Web CAD 基础设施。 |
| [MeshInspector/MeshLib](https://github.com/MeshInspector/MeshLib) | 824 | 3D 几何处理 SDK：布尔、抽稀、重网格、点云三角化、ICP 配准，多语言绑定。 |
| [polydera/trueform](https://github.com/polydera/trueform) | 145 | CSG 引擎，精确布尔 + 空间查询 + 重网格，性能对标商业内核。 |

### 🧬 创成式与参数化设计

| 仓库 | ⭐ | 一句话说明 |
|---|---|---|
| [Pan-Chera/Multi-Agent-CAD](https://github.com/Pan-Chera/Multi-Agent-CAD) | 987 | 多 Agent 解耦的 text-to-CAD 框架，引入约束测试时计算，是生成式 CAD 学术落地。 |
| [clay-good/anvilate](https://github.com/clay-good/anvilate) | 7 | 本地优先的机械设计 Agent：自然语言 → 物理验证 → 参数化 STEP，可直插 SolidWorks/CATIA。 |
| [Kevoyuan/AgentSCAD](https://github.com/Kevoyuan/AgentSCAD) | 15 | AI 原生 CAD Agent，自然语言 → OpenSCAD，带几何修复与制造验证。 |
| [fa-mc/vibe-cading](https://github.com/fa-mc/vibe-cading) | 7 | 基于 CadQuery 的 3D 模型生成器，面向人类与 LLM Agent 共用。 |

### 🖨️ 3D 打印与制造

| 仓库 | ⭐ | 一句话说明 |
|---|---|---|
| [MarlinFirmware/Marlin](https://github.com/MarlinFirmware/Marlin) | 17,587 | RepRap 3D 打印机固件事实标准，覆盖 8/32 位 MCU。 |
| [OrcaSlicer/OrcaSlicer](https://github.com/OrcaSlicer/OrcaSlicer) | 15,708 | 主流 G-code 生成器，兼容 Bambu/Prusa/Voron/Creality 等。 |
| [Ultimaker/Cura](https://github.com/Ultimaker/Cura) | 7,039 | 老牌切片 GUI，Uranium 框架核心。 |
| [maziggy/bambuddy](https://github.com/maziggy/bambuddy) | 2,976 | 自托管 Bambu Lab 命令中心，无需云端即可管理打印农场。 |
| [codeofaxel/Kiln](https://github.com/codeofaxel/Kiln) | 63 | 面向 MCP 的开源 3D 打印服务器，AI Agent 直接驱动 Bambu/Prusa/Klipper/Marlin。 |
| [BelfrySCAD/BOSL2](https://github.com/BelfrySCAD/BOSL2) | 2,366 | OpenSCAD 库 v2，零件/掩膜/操作器齐全，降低脚本式 CAD 门槛。 |

### 🔗 文件格式与互操作

| 仓库 | ⭐ | 一句话说明 |
|---|---|---|
| [f3d-app/f3d](https://github.com/f3d-app/f3d) | 4,700 | 快速极简 3D 查看器，支持 STEP/IGES/STL/3MF 等多种格式。 |
| [bldrs-ai/Share](https://github.com/bldrs-ai/Share) | 186 | 浏览器端 BIM/CAD 协同平台，IFC/STEP/STL/OBJ/glTF 全支持。 |
| [andymai/brepjs](https://github.com/andymai/brepjs) | 105 | Web 端精确 B-Rep 几何库，纯 TypeScript，让浏览器具备"工业级 CAD 内核"。 |
| [pyvista/pyvista](https://github.com/pyvista/pyvista) | 3,816 | 基于 VTK 的 Python 3D 可视化与网格分析，科研/工程两栖。 |
| [NepomukWolf/IFC-Language-Server](https://github.com/NepomukWolf/IFC-Language-Server) | 21 | IFC STEP 文件的 LSP 实现，给 BIM 编辑器装上 IDE 级智能提示。 |

### 🐍 Code-CAD 与脚本化

| 仓库 | ⭐ | 一句话说明 |
|---|---|---|
| [CadQuery/cadquery](https://github.com/CadQuery/cadquery) | 5,785 | 基于 OCCT 的 Python 参数化 CAD 脚本框架，机械设计自动化主流选择。 |
| [gumyr/build123d](https://github.com/gumyr/build123d) | 3,137 | 新一代 Python CAD 编程库，语法现代，可与 CadQuery 共生态。 |
| [earthtojake/text-to-cad](https://github.com/earthtojake/text-to-cad) | 16,025 | CAD/CAE/CAM 的 Agent Skills 集合库，Code-CAD × LLM 的胶水层。 |
| [neka-nat/freecad-mcp](https://github.com/neka-nat/freecad-mcp) | 2,390 | FreeCAD MCP 服务器，把 FreeCAD 暴露给 LLM Agent。 |
| [blwfish/freecad-mcp](https://github.com/blwfish/freecad-mcp) | 45 | 另一款 FreeCAD MCP 服务器，提供 32 个 AI 辅助建模工具。 |
| [jupytercad/JupyterCAD](https://github.com/jupytercad/JupyterCAD) | 233 | JupyterLab 内的协同 3D 几何建模扩展，把 Notebook 变成 CAD 前端。 |
| [pzfreo/draftwright](https://github.com/pzfreo/draftwright) | 66 | 自动从 build123d / STEP 生成技术图纸，桥接 3D 模型与 2D 出图。 |
| [partcad/partcad](https://github.com/partcad/partcad) | 493 | 实物零件的包管理器（Digital Thread / TDP），AI 加持的全生命周期工具链。 |
| [tscircuit/tscircuit](https://github.com/tscircuit/tscircuit) | 2,685 | TypeScript + React 直接生成真实电子硬件，是"Code-CAD"在 EDA 领域的同源尝试。 |

### 🧩 FreeCAD 周边生态

| 仓库 | ⭐ | 一句话说明 |
|---|---|---|
| [ghbalf/freecad-ai](https://github.com/ghbalf/freecad-ai) | 503 | FreeCAD 内 AI 助手工作台，自然语言生成 3D 模型。 |
| [shaise/FreeCAD_SheetMetal](https://github.com/shaise/FreeCAD_SheetMetal) | 343 | 钣金工作台，弥补 FreeCAD 在板金展开上的短板。 |
| [looooo/freecad.gears](https://github.com/looooo/freecad.gears) | 360 | 齿轮模块，覆盖直/斜/锥齿轮与蜗杆。 |
| [spkane/freecad-addon-robust-mcp-server](https://github.com/spkane/freecad-addon-robust-mcp-server) | 234 | 稳健版 FreeCAD MCP 服务器与桥接工作台。 |
| [tomate44/CurvesWB](https://github.com/tomate44/CurvesWB) | 155 | 曲线/曲面工作台实验，FreeCAD 向 NURBS 曲面延伸的探索。 |
| [eblanshey/HistoryWorkbench](https://github.com/eblanshey/HistoryWorkbench) | 150 | 追踪 CAD 模型历史并支持 3D/树形 diff 审查，补齐版本管理短板。 |
| [ryankembrey/FreeCAD-DFM-Workbench](https://github.com/ryankembrey/FreeCAD-DFM-Workbench) | 55 | DFM（面向制造的设计）工作台，把可制造性约束前置到建模阶段。 |

---

## 五、生态趋势信号

开源 CAD 当前正在经历三条主线共振：**（1）AI Agent 原生化**——MCP 协议成为 LLM ↔ CAD 的标准握手，FreeCAD 同时涌现 neka-nat、spkane、blwfish、ghbalf 等多套实现，竞争白热化；**（2）WebAssembly 化**——OCCT-WASM、brepjs、Build123d-wasm 等让"浏览器即 CAD"基础设施逐步成熟，配合 tscircuit、Share 等前端 IDE，BIM/CAD 正在复刻"VS Code 化"路径；**（3）Rust 重写浪潮**——OpenCADStudio、cadrum、sparrow、iOverlay 等均选择 Rust，性能与内存安全成为新一代内核语言共识。三股力量叠加，使"自然语言→参数化 STEP→可制造交付物"的全链路开源方案首次具备了工程级可用性。

---

## 六、值得关注

1. **FreeCAD MCP 生态爆发** —— 短短一周内出现至少 4 款 MCP 服务器与 1 款 AI 工作台（[neka-nat/freecad-mcp](https://github.com/neka-nat/freecad-mcp)、[blwfish/freecad-mcp](https://github.com/blwfish/freecad-mcp)、[spkane/freecad-addon-robust-mcp-server](https://github.com/spkane/freecad-addon-robust-mcp-server)、[ghbalf/freecad-ai](https://github.com/ghbalf/freecad-ai)），意味着 FreeCAD 已成为 LLM Agent 接入 CAD 的首选底座，未来 3–6 个月协议/工具收敛值得密切跟进。
2. **OCCT-WASM + brepjs 推动 Web CAD 工业化** —— [andymai/occt-wasm](https://github.com/andymai/occt-wasm) 与 [andymai/brepjs](https://github.com/andymai/brepjs) 正在构建"浏览器内 OCCT"的完整 TypeScript 栈，配合 [bldrs-ai/Share](https://github.com/bldrs-ai/Share) 的 BIM/CAD 协同前端，可能在年底前出现"零安装、纯 Web、可出 STEP"的轻量级 CAD 工作站。
3. **生成式 CAD 走向"物理可验证"** —— [clay-good/anvilate](https://github.com/clay-good/anvilate) 与 [Kevoyuan/AgentSCAD](https://github.com/Kevoyuan/AgentSCAD) 不约而同在 LLM 输出端加入几何修复与制造验证环节，标志着 text-to-CAD 从"看图说话"跨入"工程交付"阶段，是 L4–L5 级工程 Agent 落地的关键信号。

---

*日报由 CAD/机械设计领域分析师整理。如需订阅历史日报或调整关注方向，请告知。*

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*