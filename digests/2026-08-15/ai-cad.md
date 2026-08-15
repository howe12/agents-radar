# CAD/机械结构开源动态日报 2026-08-15

> 数据来源: GitHub Search API (104 仓库) | ArXiv cs.GR+cs.CG (0 篇论文) | RSS 新闻 (4 条) | 生成时间: 2026-08-15 00:52 UTC

---

# 📅 CAD/机械结构开源动态日报

> 数据日期：2026 年 8 月 14 日 ｜ 来源：FreeCAD Blog、Prusa Blog、ArXiv cs.GR/cs.CG、GitHub Trending

---

## ⚡ 今日速览

FreeCAD 0.26.3 版本即将发布的 "Top 20 新特性" 主题演讲与月底的 FreeCAD Hackathon 形成呼应，标志着 Parametric Modeling 正迎来新一轮功能爆发；同时 Prusa 一次性发布 XL+、CORE One L+ 和 CORE One+ (Gen 2) 三大打印机升级，硬件层面朝着"更高打印质量、更低使用门槛"演进。GitHub 生态侧，**CADAM（★4,983）、Multi-Agent-CAD（★814）、SimpleCADAPI（★95）** 等"文本/智能体驱动 CAD"项目密集刷榜，Code‑CAD 范式与 AI Agent 化设计工具正在快速成型。今日无可用的 cs.GR/cs.CG 论文，但社区仓库的活跃度表明三维建模研究的前沿已大规模迁移至应用层与智能体编排。

---

## 📰 行业脉搏

1. **[FreeCAD 26.3: Top 20 新特性演讲](https://blog.freecad.org/2026/08/14/freecad-26-3-top-20-new-features-talk/)** — 官方即将发布的 26.3 版本被浓缩为 "20 项最关键改进"，演讲面向开发者和高级用户。对生态而言是本年度最重要的功能预告窗口。
2. **[FreeCAD Hackathon — 8 月 29 日](https://blog.freecad.org/2026/08/10/save-the-date-freecad-hackathon-august-29th-2026/)** — 紧接版本发布，社区以"集中攻关"形式加速 Workbench、UI、性能瓶颈的修复，是观察 FreeCAD 方向与寻找贡献契机的最佳入口。
3. **[WIP Wednesday, 12 August](https://blog.freecad.org/2026/08/12/wip-wednesday-12-august-july-2026/)** — 开发者周报流式汇总，揭示 PartDesign、装配（Assembly）以及拓扑命名问题（Topological Naming）等长期痛点的最新进展。
4. **[Prusa XL+ / CORE One L+ / CORE One+ (Gen 2) 产品升级](https://blog.prusa3d.com/better-prints-easier-use-prusa-xl-core-one-l-and-core-one-gen-2-our-big-product-update_137539/)** — Prusa 三大主力产品集体迭代，意味着 CoreXY 与封闭式 FDM 正向"开箱即用 + 工业级一致性"收敛，对开源固件与切片软件（如 Klipper、OrcaSlicer、Mainsail）的工作流造成直接影响。

---

## 🔬 研究前沿

> 今日 cs.GR / cs.CG 抓取窗口内未捕获到新论文。以下基于本周 GitHub 活跃仓库中的"研究/学术类项目"作为补充观察：

- **多智能体文本到 CAD**：[Pan-Chera/Multi-Agent-CAD](https://github.com/Pan-Chera/Multi-Agent-CAD)（★814） — 提出了"约束型测试时计算"框架，把复杂 CAD 生成拆解为多智能体协同决策，与 Marigold 等真实图像模型共享思路。
- **机械拓扑优化**：[JuliaTopOpt/TopOpt.jl](https://github.com/JuliaTopOpt/TopOpt.jl)（★224） — 基于自动微分的连续/离散、单/多材料、桁架/连续体拓扑优化，覆盖 2D/3D 非结构网格。
- **PCB 铣削 G-code 几何准备**：[XRay3D/GERBER_X3](https://github.com/XRay3D/GERBER_X3)（★253） — 既是工具也是研究：将 Gerber 转换为 CNC 铣削刀路并支持 PDF 输出，体现 CAM 方向对"几何+工艺"耦合的最新工程实践。
- **CSG 与 OpenSCAD 兼容的 GPU 加速建模器**：[particlesector/chiselcad](https://github.com/particlesector/chiselcad)（★14） — 基于 Vulkan + Manifold 的开源 CSG 实现，向 OpenSCAD 语法靠拢，是把"脚本建模"扩展到实时/GPU 端的探索性工作。
- **基于 B-Rep 的 Web CAD 库**：[andymai/brepjs](https://github.com/andymai/brepjs)（★81） — 以 TypeScript 精确表达 B-Rep 几何，配合 [occt-wasm](https://github.com/andymai/occt-wasm)（★43）将 OpenCascade 完整移植到 WebAssembly，是浏览器侧 CAD 内核研究的关键一步。

---

## 🚀 重点项目

### 🖥️ CAD 平台与编辑器

- **[FreeCAD/FreeCAD](https://github.com/FreeCAD/FreeCAD)** · ⭐32,858 · 开源多平台参数化 3D 建模器的事实标准，PartDesign、装配、Sketcher 三大核心工作台构成 CAD/CAM/CAE 一体化底座，今日新特性与 Hackathon 都将驱动其下一轮迭代。
- **[openscad/openscad](https://github.com/openscad/openscad)** · ⭐9,941 · 程序化实体建模经典工具，是脚本化 CAD 范式的源头；其语法在 ChiselCAD、LuaCAD、BOSL2 等衍生生态中持续扩散。
- **[Adam-CAD/CADAM](https://github.com/Adam-CAD/CADAM)** · ⭐4,983 · 开源的"文本生成 CAD" Web 应用，体现了将大模型与 CAD 操作直接对接的工程化尝试。
- **[dune3d/dune3d](https://github.com/dune3d/dune3d)** · ⭐2,039 · 轻量级 3D CAD 应用，面向快速原型设计；说明独立、小型 CAD 内核项目在细分领域仍有生命力。

### 📐 计算几何与内核

- **[CGAL/cgal](https://github.com/CGAL/cgal)** · ⭐6,010 · 计算几何算法库的标杆，Delaunay、布尔运算、曲面重建等模块被工业与学术界广泛复用。
- **[cdcseacave/openMVS](https://github.com/cdcseacave/openMVS)** · ⭐4,085 · 开源多视图立体重建库，把摄影测量 / 点云到网格的工程流水线工具化。
- **[pyvista/pyvista](https://github.com/pyvista/pyvista)** · ⭐3,770 · 基于 VTK 的 Python 3D 可视化与网格分析库，是科学计算 + CAD 后处理衔接的高粘性工具。
- **[mikedh/trimesh](https://github.com/mikedh/trimesh)** · ⭐3,649 · Python 三角网格库，为生成式设计、CAE 前处理提供轻量几何底座。
- **[gkjohnson/three-mesh-bvh](https://github.com/gkjohnson/three-mesh-bvh)** · ⭐3,448 · three.js 的 BVH 加速结构，支撑 Web 端实时光线求交与空间查询，是浏览器内 CAD 应用的基础组件。

### 🧬 创成式与参数化设计

- **[Pan-Chera/Multi-Agent-CAD](https://github.com/Pan-Chera/Multi-Agent-CAD)** · ⭐814 · 把"约束 + 测试时计算"引入文本到 CAD 生成流程，显著提升复杂零件的可编辑性与设计确定性。
- **[JuliaTopOpt/TopOpt.jl](https://github.com/JuliaTopOpt/TopOpt.jl)** · ⭐224 · Julia 生态中的现代拓扑优化库，可与自动微分生态无缝对接，适合科研与教学。
- **[armpro24-blip/cad-cae-copilot](https://github.com/armpro24-blip/cad-cae-copilot)** · ⭐47 · AI 原生 CAD/CAE 工作台，文本 → CAD/CAE、可编辑 build123d + OpenCASCADE 几何、对 MCP 提供工具调用，反映"AI 工程师副驾"的产品形态。
- **[clay-good/anvilate](https://github.com/clay-good/anvilate)** · ⭐4 · 本地优先的机械设计 Agent，输出可通过物理校验的参数化 STEP/DXF，主打"无云端 + 离线优先"。

### 🖨️ 3D 打印与制造

- **[OrcaSlicer/OrcaSlicer](https://github.com/OrcaSlicer/OrcaSlicer)** · ⭐15,394 · 当下增长最快、覆盖机型最广的开源切片引擎（Bambu、Prusa、Voron、Creality…），正成为非 Prusa 官方切片的事实选项。
- **[Ultimaker/Cura](https://github.com/Ultimaker/Cura)** · ⭐7,013 · 老牌开源切片 GUI 标杆，搭配 Uranium 框架。
- **[makerspet/oomwoo](https://github.com/makerspet/oomwoo)** · ⭐8,525 · 开源真空吸尘机器人硬件与代码，展现了同一套 CAD/CAM 流水线在家电整机产品化中的复用。
- **[huxingyi/dust3d](https://github.com/huxingyi/dust3d)** · ⭐3,463 · 跨平台低多边形建模工具，面向游戏与 3D 打印。
- **[codeofaxel/Kiln](https://github.com/codeofaxel/Kiln)** · ⭐46 · 开源 MCP 服务器，把"AI Agent → 设计 → 切片 → 打印"流水线统一接入 Bambu / Prusa / Klipper / OctoPrint / Marlin 等几乎所有主流固件。
- **[Sienci-Labs/gsender](https://github.com/Sienci-Labs/gsender)** · ⭐363 · GRBL/grblHAL CNC 控制与可视化发送器，对桌面铣削生态尤为关键。

### 🔗 文件格式与互操作

- **[earthtojake/text-to-cad](https://github.com/earthtojake/text-to-cad)** · ⭐13,432 · 面向 LLM 的 CAD/CAE/CAM Agent Skills 库，把"格式理解 + 工程语义"打包成可被智能体直接调用的工具集。
- **[CadQuery/cadquery](https://github.com/CadQuery/cadquery)** · ⭐5,601 · 基于 OCCT 的 Python 参数化脚本 CAD 框架，是 STEP 兼容 Code‑CAD 的代表。
- **[f3d-app/f3d](https://github.com/f3d-app/f3d)** · ⭐4,623 · 极致轻量的 3D 查看器，支持 STEP/IGES/STL/3MF 等几乎所有 CAD 输出格式。
- **[fougue/mayo](https://github.com/fougue/mayo)** · ⭐2,125 · Qt + OpenCascade 打造的 3D CAD 查看与转换器，定位类似"开源 CAD 转换工作站"。
- **[bldrs-ai/Share](https://github.com/bldrs-ai/Share)** · ⭐181 · 基于浏览器的 BIM/CAD 查看与协作平台，原生支持 IFC/STEP/STL，对 AEC + 机械协同意义明显。
- **[andymai/occt-wasm](https://github.com/andymai/occt-wasm)** · ⭐43 · OpenCascade 编译到 WebAssembly（≈4MB brotli），带 TypeScript API + Web Worker，是 Web CAD 内核底层的关键拼图。

### 🐍 Code‑CAD 与脚本化

- **[gumyr/build123d](https://github.com/gumyr/build123d)** · ⭐2,854 · Python CAD 编程库的现代典范，被 Anvilate、AI-CAE Copilot 等众多 AI 项目选作几何后端。
- **[sgenoud/replicad](https://github.com/sgenoud/replicad)** · ⭐668 · 浏览器内 3D 建模的 TypeScript 库，组件化、与 OpenCascade WebAssembly 紧密耦合。
- **[BelfrySCAD/BOSL2](https://github.com/BelfrySCAD/BOSL2)** · ⭐2,316 · 让 OpenSCAD 易用性大幅提升的几何库，是 OpenSCAD 工具链的事实扩展。
- **[partcad/partcad](https://github.com/partcad/partcad)** · ⭐484 · "零件包管理器"，把可制造物理零件当作可版本化、可复用的资产，对应"数字主线 (Digital Thread)"概念。
- **[pzfreo/draftwright](https://github.com/pzfreo/draftwright)** · ⭐47 · 自动为 build123d / STEP 生成工程图，直接对接制造端的图纸交付缺口。
- **[zhuchaokn/spec-3d-model](https://github.com/zhuchaokn/spec-3d-model)** · ⭐1 · 在 BlenderMCP 上做的"规格驱动、可 3D 打印验证"小型化尝试，思路与 Anvilate/Kiln 同源。

---

## 📈 生态趋势信号

当下的开源 CAD 生态正在快速向**三大方向**收敛：
1. **Agent‑Native CAD** —— CADAM、Multi-Agent‑CAD、earthtojake/text‑to‑cad、build123d‑based CoPilots 等项目密集出现，证明 LLM/MCP 正在重塑"提示词 → 参数化几何"的标准接口；
2. **OCCT 上 Web** —— occt‑wasm、Mayo、Share、replicad、brepjs 共同把 OpenCascade 推向浏览器，让 CAD 内核第一次具备真正的跨平台部署能力；
3. **Code‑CAD 与 AI 切片一体化** —— Kiln、spec‑3d‑model、Anvilate 等项目把"建模 → 物理验证 → 切片 → 打印"压缩到一条脚本流水线，与 Prusa 硬件端的"更易用"迭代形成呼应。

与此同时，**FreeCAD 的版本冲刺 + Hackathon** 与 **Prusa 三机同步升级**，暗示传统参数化 CAD 与桌面制造软件都在主动向 AI/Agent 工作流让路，旧生态与新范式的边界正在被快速重画。

---

## 🔭 值得关注

1. **FreeCAD 26.3 与 8/29 Hackathon** —— 同一窗口内版本发布 + 社区集中攻关，是参与 Patch、查看 Topological Naming / Assembly 进展、提出新 Workbench 需求的最佳时机。([演讲](https://blog.freecad.org/2026/08/14/freecad-26-3-top-20-new-features-talk/) ｜ [Hackathon](https://blog.freecad.org/2026/08/10/save-the-date-freecad-hackathon-august-29th-2026/))
2. **Agent‑Native CAD 的事实标准之争** —— CADAM、text‑to‑cad、anvilate

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*