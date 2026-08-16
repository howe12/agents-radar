# CAD/机械结构开源动态日报 2026-08-16

> 数据来源: GitHub Search API (111 仓库) | ArXiv cs.GR+cs.CG (0 篇论文) | RSS 新闻 (4 条) | 生成时间: 2026-08-16 00:55 UTC

---

# CAD / 机械结构开源动态日报

**日期：2026 年 8 月 14 日**

---

## 1. 今日速览

今日 FreeCAD 生态持续发力，**FreeCAD 26.3 "Top 20 新特性"** 演讲及 8 月 29 日 Hackathon 预告双双发布，社区进入年度冲刺阶段；同期 Prusa 发布 XL+、CORE One L+ 等二代产品硬件升级。GitHub 端则呈现"AI × CAD × 本地化"三重叠加：**text-to-cad**、**cad-cae-copilot**、**Kiln**、**MAC (Multi-Agent CAD)** 等一批面向 Agent 的代码化 CAD 项目集中活跃；WebAssembly 版本的 OCCT（`occt-wasm`）、浏览器 B-Rep 引擎 `brepjs`、`bldrs-ai/conway` 等则把"浏览器内可编辑 CAD"推向可生产级别。整体来看，开源 CAD 正在从"几何引擎比拼"过渡到"AI Agent 与本地化工作流的工程化落地"。

---

## 2. 行业脉搏

| # | 动态 | 意义 |
|---|------|------|
| 1 | **[FreeCAD 26.3: Top 20 New Features Talk](https://blog.freecad.org/2026/08/14/freecad-26-3-top-20-new-features-talk/)** — FreeCAD Blog | 26.3 大版本进入发布倒计时，Top 20 新特性演讲意味着本年度最重要更新即将公布，是 FreeCAD 用户与贡献者必跟进的节点。 |
| 2 | **[Save the date: FreeCAD Hackathon August 29th 2026](https://blog.freecad.org/2026/08/10/save-the-date-freecad-hackathon-august-29th-2026/)** — FreeCAD Blog | 全球线上/线下同步的开发者集中冲刺，加速 BIM、Assembly、Topological Naming 等长期痛点的解决；值得社区申请议题或贡献 PR。 |
| 3 | **[WIP Wednesday, 12 August July 2026](https://blog.freecad.org/2026/08/12/wip-wednesday-12-august-july-2026/)** — FreeCAD Blog | 进度周报揭示 Part Design、Spreadsheet、TechDraw 等模块最新修复与改进，反映 FreeCAD 在工程化稳定性的持续投入。 |
| 4 | **[Prusa XL+ / CORE One L+ / CORE One+ (Gen 2)](https://blog.prusa3d.com/better-prints-easier-use-prusaxl-core-one-l-and-core-one-gen-2-our-big-product-update_137539/)** — Prusa Blog | Prusa 三款主力机型同步升级，二代硬件表明消费/专业级 FDM 仍处于硬件迭代窗口，配套切片器与固件生态（Klipper、OrcaSlicer）也将受惠。 |

---

## 3. 研究前沿

> ⚠️ 今日 ArXiv cs.GR / cs.CG 无新增可纳入日报的论文。建议关注后续 FreeCAD 26.3 技术演讲中可能披露的算法层面更新（Topological Naming、Assembly 约束求解等）。

---

## 4. 重点项目

### 🖥️ CAD 平台与编辑器

| 仓库 | ⭐ | 一句话说明 |
|------|---|-----------|
| [FreeCAD/FreeCAD](https://github.com/FreeCAD/FreeCAD) | 32,873 | 跨平台开源参数化 3D CAD 标杆，26.3 版本发布窗口已开启，仍是开源机械设计的事实标准。 |
| [openscad/openscad](https://github.com/openscad/openscad) | 9,946 | "程序员的实体建模器"，用代码描述几何，与 Python/Rust/AI Agent 工具链天然契合。 |
| [LibreCAD/LibreCAD](https://github.com/LibreCAD/LibreCAD) | 6,249 | 成熟 2D CAD，支持 DXF/DWG，是工程图与板金展开的轻量首选。 |
| [solvespace/solvespace](https://github.com/solvespace/solvespace) | 4,097 | 极简参数化 2D/3D CAD，约束求解与运动学仿真一体，适合教学与小型机构设计。 |
| [dune3d/dune3d](https://github.com/dune3d/dune3d) | 2,044 | 新兴 3D CAD 应用，专注"真参数化 + 实时约束编辑"体验。 |
| [Slicer/Slicer](https://github.com/Slicer/Slicer) | 2,581 | 医学影像与科学可视化平台，是 CAD ↔ CAE 跨域可视化的重要参考实现。 |

### 📐 计算几何与内核

| 仓库 | ⭐ | 一句话说明 |
|------|---|-----------|
| [Open-Cascade-SAS/OCCT](https://github.com/Open-Cascade-SAS/OCCT) | 2,766 | 几乎所有开源参数化 CAD（FreeCAD、CadQuery、Replicad、Mayo）的几何内核基础，B-Rep / BREP 算法事实标准。 |
| [CGAL/cgal](https://github.com/CGAL/cgal) | 6,011 | C++ 计算几何算法库（Delaunay、网格处理、布尔运算），是 CAD/CAE 研究的"瑞士军刀"。 |
| [mikedh/trimesh](https://github.com/mikedh/trimesh) | 3,649 | Python 三角网格处理库，便于在 Jupyter/CAD 流水线中嵌入网格分析。 |
| [pyvista/pyvista](https://github.com/pyvista/pyvista) | 3,770 | 基于 VTK 的 Python 3D 可视化，与 trimesh、build123d 生态紧密集成。 |
| [gkjohnson/three-mesh-bvh](https://github.com/gkjohnson/three-mesh-bvh) | 3,448 | three.js BVH 加速库，让浏览器端大规模网格的 raycast / 空间查询成为可能。 |
| [gkjohnson/three-gpu-pathtracer](https://github.com/gkjohnson/three-gpu-pathtracer) | 1,809 | 基于 three-mesh-bvh 的 GPU 路径追踪，把 Web CAD 渲染推向照片级。 |
| [artem-ogre/CDT](https://github.com/artem-ogre/CDT) | 1,436 | 高质量约束 Delaunay 三角剖分，对网格生成与 FEM 前处理有重要价值。 |
| [cdcseacave/openMVS](https://github.com/cdcseacave/openMVS) | 4,085 | 多视图立体重建开源库，把扫描/摄影测量数据接入 CAD 逆向工程流水线。 |
| [cnr-isti-vclab/meshlab](https://github.com/cnr-isti-vclab/meshlab) | 5,791 | 老牌网格处理系统，是 STL/OBJ/3D 扫描数据清理与简化的事实标准。 |
| [particlesector/chiselcad](https://github.com/particlesector/chiselcad) | 14 | 新兴 GPU 加速 CSG 模型器，OpenSCAD 兼容语法 + Vulkan + Manifold 内核，潜力值得关注。 |

### 🧬 创成式与参数化设计

| 仓库 | ⭐ | 一句话说明 |
|------|---|-----------|
| [Pan-Chera/Multi-Agent-CAD](https://github.com/Pan-Chera/Multi-Agent-CAD) | 826 | MAC 多智能体框架：解耦的"约束测试时计算"实现 Text-to-CAD，可输出可编辑参数化模型。 |
| [JuliaTopOpt/TopOpt.jl](https://github.com/JuliaTopOpt/TopOpt.jl) | 224 | 基于自动微分与 Julia 的拓扑优化库，覆盖桁架/连续体、单/多材料、2D/3D。 |
| [cad-cae-copilot](https://github.com/armpro24-blip/cad-cae-copilot) | 47 | AI-native CAD/CAE/CAX 工作台：Text-to-CAD + 真实 build123d/OCCT 几何 + 稳定拓扑指针 + MCP Server。 |
| [clay-good/anvilate](https://github.com/clay-good/anvilate) | 4 | 本地优先机械设计 Agent：自然语言 → 物理验证的 STEP/DXF，可直接进入 CATIA/SolidWorks/NX。 |
| [YuqingNicole/variant-design-skill](https://github.com/YuqingNicole/variant-design-skill) | 45 | Claude Code 技能：从 Prompt 出发生成 3 个差异设计方案、再变体、再导出，解决"空白画布"难题。 |
| [spec-3d-model](https://github.com/zhuchaokn/spec-3d-model) | 1 | 基于 BlenderMCP 的 Spec-driven 生成：聊天即可产出可 3D 打印、watertight 验证的零件。 |

### 🖨️ 3D 打印与制造

| 仓库 | ⭐ | 一句话说明 |
|------|---|-----------|
| [OrcaSlicer/OrcaSlicer](https://github.com/OrcaSlicer/OrcaSlicer) | 15,401 | 主流多机型 G-code 生成器，覆盖 Bambu/Prusa/Voron/VzBot/Creality 等，对接 Prusa 二代硬件升级。 |
| [Ultimaker/Cura](https://github.com/Ultimaker/Cura) | 7,014 | 经典切片 GUI，Uranium 插件生态成熟，仍是企业切片工作流的主力。 |
| [mainsail-crew/mainsail](https://github.com/mainsail-crew/mainsail) | 2,195 | Klipper 打印机的事实 Web 控制台，远程运维/打印农场基础设施。 |
| [maziggy/bambuddy](https://github.com/maziggy/bambuddy) | 2,797 | Bambu Lab 自托管控制中心：从单台 A1 到整机打印农场，去云化。 |
| [Sienci-Labs/gsender](https://github.com/Sienci-Labs/gsender) | 363 | GRBL / grblHAL CNC 的现代化控制前端，开源 CNC 生态代表。 |
| [XRay3D/GERBER_X3](https://github.com/XRay3D/GERBER_X3) | 253 | Gerber → CNC 刀路 + PDF 转换工具，打通 PCB-CNC 一体化流程。 |
| [codeofaxel/Kiln](https://github.com/codeofaxel/Kiln) | 46 | 开源 MCP 3D 打印服务器：AI Agent 直接调度 Bambu/Creality/Prusa/Klipper 等全机型切片与打印。 |
| [Donkie/Spoolman](https://github.com/Donkie/Spoolman) | 2,716 | 自托管耗材库存管理，融入打印农场运营必备组件。 |
| [manyfold3d/manyfold](https://github.com/manyfold3d/manyfold) | 2,129 | 自托管 3D 打印文件数字资产管理系统，沉淀个人/团队模型库。 |

### 🔗 文件格式与互操作

| 仓库 | ⭐ | 一句话说明 |
|------|---|-----------|
| [f3d-app/f3d](https://github.com/f3d-app/f3d) | 4,623 | 极简快速的 3D 查看器，支持 STEP、3MF、glTF 等多格式，是"打开 CAD 文件"的标准 CLI/GUI。 |
| [CadQuery/cadquery](https://github.com/CadQuery/cadquery) | 5,604 | 基于 OCCT 的 Python 参数化 CAD 脚本框架，STEP/AMF/STL 全流程互操作。 |
| [fougue/mayo](https://github.com/fougue/mayo) | 2,127 | 基于 Qt + OCCT 的 CAD 查看与转换器，企业内 STEP 审阅与批处理的实用工具。 |
| [andymai/occt-wasm](https://github.com/andymai/occt-wasm) | 43 | OpenCascade 编译为 WebAssembly（~4MB brotli），是浏览器端可编辑 CAD 的关键拼图。 |
| [andymai/brepjs](https://github.com/andymai/brepjs) | 82 | TypeScript B-Rep 几何库，与 occt-wasm 配合可在浏览器内做精确实体建模。 |
| [bldrs-ai/conway](https://github.com/bldrs-ai/conway) | 22 | 高性能 Web IFC & STEP 引擎，BIM/CAD 协同场景的浏览器基础设施。 |
| [bldrs-ai/Share](https://github.com/bldrs-ai/Share) | 181 | 浏览器端 BIM & CAD 协同查看器，支持 IFC/STEP/STL/OBJ/glTF，工程评审利器。 |
| [sgenoud/replicad](https://github.com/sgenoud/replicad) | 668 | 在浏览器中以代码构建 3D 模型，结合 OpenCascade 实现"Web + Code + CAD"。 |

### 🐍 Code-CAD 与脚本化

| 仓库 | ⭐ | 一句话说明 |
|------|---|-----------|
| [earthtojake/text-to-cad](https://github.com/earthtojake/text-to-cad) | 13,470 | AI Agent 的 CAD/CAE/CAM 技能库，Code-CAD + Agent 生态的最大集合。 |
| [gumyr/build123d](https://github.com/gumyr/build123d) | 2,862 | 继 CadQuery 之后的新一代 Python CAD 库，语义更清晰，正在被 cad-cae-copilot 等采用。 |
| [BelfrySCAD/BOSL2](https://github.com/BelfrySCAD/BOSL2) | 2,318 | OpenSCAD 最大的扩展库，把 OpenSCAD 提升到工程级可用度。 |
| [partcad/partcad](https://github.com/partcad/partcad) | 484 | 可制造物理产品的"包管理器"与 Digital Thread 标准，规范模块化硬件复用。 |
| [ad-si/LuaCAD](https://github.com/ad-si/LuaCAD) | 92 | Rust 实现的 Lua 参数化 CAD，把"嵌入式脚本 CAD"带到浏览器外。 |
| [pzfreo/draftwright](https://github.com/pzfreo/draftwright) | 49 | 自动从 build123d / STEP 生成符合规范的技术工程图（drafting）。 |
| [NiJingzhe/SimpleCADAPI](https://github.com/NiJingzhe/SimpleCADAPI) | 96 | 面向 LLM 的 Agent-native CAD SDK：可被语言模型创建、检查与重建可编辑 3D 模型。 |

### 🧩 FreeCAD 生态（附加）

| 仓库 | ⭐ | 一句话说明 |
|------|---|-----------|
| [ghbalf/freecad-ai](https://github.com/ghbalf/freecad-ai) | 427 | FreeCAD 的 AI Workbench，自然语言直接生成 3D 模型。 |
| [shaise/FreeCAD_SheetMetal](https://github.com/shaise/FreeCAD_SheetMetal) | 336 | 板金展开与折弯，弥补 FreeCAD 在板金设计上的短板。 |
| [tomate44/CurvesWB](https://github.com/tomate44/CurvesWB) | 153 | 曲面建模实验 Workbench，复杂曲面/汽车 A 面级试验田。 |
| [mnesarco/MarzWorkbench](https://github.com/mnesarco/MarzWorkbench) | 129 | 吉他参数化设计，垂直行业 Workbench 的样板。 |
| [APEbbers/FreeCAD-Ribbon](https://github.com/APEbbers/FreeCAD-Ribbon) | 127 | Ribbon UI 改造，提升 FreeCAD 易用性与现代化外观。 |
| [davesrocketshop/Rocket](https://github.com/davesrocketshop/Rocket) | 78 | 火箭设计 Workbench，复杂装配与运动学仿真实战。 |
| [blwfish/freecad-mcp](https://github.com/blwfish/freecad-mcp) | 26 | FreeCAD 的 MCP Server（32 工具），让 AI Agent 直接操控 FreeCAD。 |
| [FreeCAD/Addons](https://github.com/FreeCAD/Addons) | 12 | FreeCAD 1.0+ 官方插件索引，生态入口。 |

---

## 5. 生态趋势信号

三个信息源叠加呈现出一条清晰主线：**"AI Agent × 本地化 × Code-CAD" 的三角融合**。

- **Agent 化**：text-to-cad、anvilate、cad-cae-copilot、Kiln、freecad-mcp、Multi-Agent-CAD、spec-3d-model、variant-design-skill 等项目集中爆发，CAD 不再是"GUI

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*