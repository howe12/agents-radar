# CAD/机械结构开源动态日报 2026-08-14

> 数据来源: GitHub Search API (99 仓库) | ArXiv cs.GR+cs.CG (0 篇论文) | RSS 新闻 (3 条) | 生成时间: 2026-08-14 01:21 UTC

---

# CAD/机械结构开源动态日报

**日期范围**：2026 年 8 月 · 第 2 周
**信息源**：FreeCAD Blog / Prusa / GitHub Trending（99 个活跃仓库）

---

## 📌 今日速览

今日最显著的信号来自两条主线：**FreeCAD 生态进入密集协作期** —— WIP Wednesday 与 8 月 29 日 Hackathon 同周发布，预示开源参数化建模即将迎来一轮集中迭代；同时 **AI-CAD 与 LLM 代理设计项目持续爆发**，从 GitHub 数据看，最近 7 天仍有 5 个相关项目保持活跃提交（text-to-cad、Cadam、Multi-Agent-CAD、SimpleCADAPI、Kiln）。**Prusa 三大产品同日升级**（XL+、CORE One L+、CORE One+ Gen 2）虽属闭源硬件，但同步推动了 OrcaSlicer、Marlin、Klipper 等开源切片/固件的兼容压力测试。学术侧（ArXiv cs.GR/cs.CG）今日无新增论文。

---

## 🗞️ 行业脉搏

1. **[WIP Wednesday — FreeCAD Blog](https://blog.freecad.org/2026/08/12/wip-wednesday-12-august-july-2026/)**
   社区 WIP 周更，汇总主分支与外延工具链的并行进展，是跟踪 FreeCAD 1.x 路线图最权威的窗口。

2. **[FreeCAD Hackathon · 2026-08-29](https://blog.freecad.org/2026/08/10/save-the-date-freecad-hackathon-august-29th-2026/)**
   8 月底线上/线下协作冲刺。鉴于主仓本周仍在活跃提交，Hackathon 极可能聚焦 PartDesign 重构、Toponaming 与 Assembly 体验三大长期痛点。

3. **[Prusa XL+ / CORE One L+ / CORE One+ (Gen 2)](https://blog.prusa3d.com/better-prints-easier-use-prusa-xl-core-one-l-and-core-one-gen-2-our-big-product-update_137539/)**
   Prusa 一次性推出三款主力产品迭代，"打印更佳+操控更简"指向自动化校准与多材料工作流。**开源意义**：会迫使 OrcaSlicer、Mainsail、Klipper 等上游快速跟进新机型 G-code 配置文件和 Input Shaper 校准流程。

---

## 🔬 研究前沿

> ArXiv cs.GR / cs.CG **今日无新增论文**，研究前沿部分以仓库侧的新兴学术成果补位。

| 关注点 | 项目 / 论文 | 贡献 |
|---|---|---|
| 中曲线（Midcurve）神经化 | **[MidcurveNN](https://github.com/yogeshhk/MidcurveNN)** ⭐43 | 用 GAN / Graph / LLM 三种范式并行求解 2D 多边形中曲线，是**创成式 CAD 与板壳类零件自动简化**的前沿探索。 |
| 几何 / 内核 Web 化 | **[occt-wasm](https://github.com/andymai/occt-wasm)** ⭐43 | OCCT 编译为 WASM，~4MB brotli，结构化错误 + Worker 支持。**意义**：把工业级 B-Rep 内核搬进浏览器，是 Web CAD 的关键拼图。 |
| 多智能体 CAD | **[Multi-Agent-CAD (MAC)](https://github.com/Pan-Chera/Multi-Agent-CAD)** ⭐799 | 解耦多智能体框架，通过约束化 test-time compute 实现文本到 CAD 生成。**意义**：从单 LLM 直接生成几何走向"规划 + 校验 + 修复"链路，是 AI-CAD 工程化方向的关键一步。 |

---

## ⭐ 重点项目

### 🖥️ CAD 平台与编辑器

- **[FreeCAD](https://github.com/FreeCAD/FreeCAD)** ⭐32,832 — 开源多平台参数化 3D 建模器标杆；本周活跃提交，Hackathon 临近，生态扩张期。
- **[earthtojake/text-to-cad](https://github.com/earthtojake/text-to-cad)** ⭐13,379 — LLM Agent 的 CAD/CAE/CAM 技能库，是当前 **AI-CAD 接口的事实标准**。
- **[openscad/openscad](https://github.com/openscad/openscad)** ⭐9,935 — 程序员的实体建模器；纯脚本化使 CI/CD 友好的参数化设计管线成为可能。
- **[Adam-CAD/CADAM](https://github.com/Adam-CAD/CADAM)** ⭐4,980 — 开源 text-to-CAD Web 应用，AI-CAD 平民化入口。
- **[solvespace/solvespace](https://github.com/solvespace/solvespace)** ⭐4,095 — 轻量参数化 2D/3D CAD，约束求解器可独立复用。
- **[LibreCAD/LibreCAD](https://github.com/LibreCAD/LibreCAD)** ⭐6,243 — 跨平台 2D CAD，DXF/DWG 全栈读写，工程图归档首选。

### 📐 计算几何与内核

- **[CGAL/cgal](https://github.com/CGAL/cgal)** ⭐6,008 — 计算几何算法库黄金标准，三角剖分、布尔、偏移、凸包等核心原语库。
- **[f3d-app/f3d](https://github.com/f3d-app/f3d)** ⭐4,623 — 快速极简 3D 查看器，工程文件轻量预览的事实标准之一。
- **[Open-Cascade-SAS/OCCT](https://github.com/Open-Cascade-SAS/OCCT)** ⭐2,756 — 工业级 B-Rep / CAM / CAE 平台，FreeCAD、Mayo、f3d 等共享底层。
- **[fougue/mayo](https://github.com/fougue/mayo)** ⭐2,124 — Qt+OCCT 的 3D CAD 查看与转换工具，企业级 STEP 兼容替代品。
- **[artem-ogre/CDT](https://github.com/artem-ogre/CDT)** ⭐1,436 — 受约束 Delaunay 三角剖分，CAE 网格划分前置利器。

### � 创成式与参数化设计

- **[gumyr/build123d](https://github.com/gumyr/build123d)** ⭐2,848 — Python CAD 编程库，对标 CadQuery 但 API 更现代；与 OpenSCAD 生态通过 draftwright 桥接。
- **[BelfrySCAD/BOSL2](https://github.com/BelfrySCAD/BOSL2)** ⭐2,315 — OpenSCAD 通用库，把 OpenSCAD 从"玩具"升级到"工程"。
- **[partcad/partcad](https://github.com/partcad/partcad)** ⭐484 — 可制造物理产品的包管理器（Digital Thread / TDP），**模块化硬件版本化**的关键基础设施。
- **[NiJingzhe/SimpleCADAPI](https://github.com/NiJingzhe/SimpleCADAPI)** ⭐92 — Agent-native CAD SDK，让 LLM 直接创建可编辑的 3D 模型（而不仅是 STL），对机械设计意义重大。
- **[revhappy/GPT4FreeCAD](https://github.com/revhappy/GPT4FreeCAD)** �63 — 自然语言生成参数化 FreeCAD 几何，结构化校验 + 可编辑特征树。

### 🖨️ 3D 打印与制造

- **[MarlinFirmware/Marlin](https://github.com/MarlinFirmware/Marlin)** ⭐17,531 — 8/32 位 3D 打印机固件，工业事实标准。
- **[OrcaSlicer/OrcaSlicer](https://github.com/OrcaSlicer/OrcaSlicer)** ⭐15,386 — 主流多机型 G-code 生成器，Bambu/Prusa/Voron 全支持，Prusa 新机发布后兼容性压力焦点。
- **[Ultimaker/Cura](https://github.com/Ultimaker/Cura)** ⭐7,011 — Uranium 框架上的开源切片 GUI。
- **[maziggy/bambuddy](https://github.com/maziggy/bambuddy)** ⭐2,789 — 自托管 Bambu Lab 控制中心，**反云端化、可私有部署打印农场**的代表。
- **[mainsail-crew/mainsail](https://github.com/mainsail-crew/mainsail)** ⭐2,194 — Klipper 主流 Web 前端。
- **[Sienci-Labs/gsender](https://github.com/Sienci-Labs/gsender)** ⭐363 — GRBL/grblHAL CNC 控制器，CNC 与 3D 打印融合方向。
- **[codeofaxel/Kiln](https://github.com/codeofaxel/Kiln)** ⭐46 — **AI Agent → 设计 → 切片 → 打印**端到端 MCP 服务器；将多品牌打印机接入同一 AI 工作流。

### � 文件格式与互操作

- **[tscircuit/tscircuit](https://github.com/tscircuit/tscircuit)** ⭐2,487 — 用 TypeScript + React 描述真实电子电路，硬件描述的代码化趋势。
- **[KiCad/kicad-source-mirror](https://github.com/KiCad/kicad-source-mirror)** ⭐2,883 — EDA 主流通用平台镜像；与机械 CAD 通过 STEP/VRML 互操作。
- **[LibrePCB/LibrePCB](https://github.com/LibrePCB/LibrePCB)** ⭐2,965 — 创新型 EDA 套件，UI 现代。
- **[bldrs-ai/Share](https://github.com/bldrs-ai/Share)** ⭐181 — 浏览器端 BIM/CAD 协作查看器，支持 IFC、STEP、STL、GLTF。
- **[bldrs-ai/conway](https://github.com/bldrs-ai/conway)** ⭐22 — Web 高性能 IFC & STEP 引擎，是浏览器内"原生 CAD 体验"的底层拼图。
- **[andymai/occt-wasm](https://github.com/andymai/occt-wasm)** ⭐43 — OCCT WASM 化，浏览器内做精确 B-Rep。
- **[andymai/brepjs](https://github.com/andymai/brepjs)** ⭐81 — 基于 occt-wasm 的 TypeScript Web CAD 库，B-Rep 几何可前端编程。

### 🐍 Code-CAD 与脚本化

- **[CadQuery/cadquery](https://github.com/CadQuery/cadquery)** ⭐5,600 — 基于 OCCT 的 Python 参数化脚本框架，Code-CAD 老牌标杆。
- **[Pan-Chera/Multi-Agent-CAD](https://github.com/Pan-Chera/Multi-Agent-CAD)** ⭐799 — 多智能体解耦 + 约束化 test-time compute，文本到可编辑 CAD。
- **[pzfreo/draftwright](https://github.com/pzfreo/draftwright)** ⭐47 — build123d/STEP 自动出图，把"模型 → 工程图"自动化。
- **[blwfish/freecad-mcp](https://github.com/blwfish/freecad-mcp)** ⭐25 — FreeCAD 的 MCP 服务器，32 个 AI 辅助建模工具，把 FreeCAD 接入 Claude/Cursor 等代理工作流。

---

## � 生态趋势信号

今天的 99 个活跃仓库揭示了三条清晰主线。**第一，AI-CAD 进入"协议化"阶段**：text-to-cad 沉淀技能库、freecad-mcp 提供 MCP 工具、SimpleCADAPI 沉淀 Agent SDK、Multi-Agent-CAD 拆解多智能体链路、Cadam 落地 Web —— "LLM + 可编辑 CAD"已经形成事实标准接口。**第二，B-Rep 内核正在 Web 化**：OCCT 通过 occt-wasm/brepjs/conway 走出 C++ 桌面，进入浏览器，IFC/STEP 在线协作正成为新默认形态。**第三，开源制造栈向"自托管 + 反云端"延伸**：bambuddy、Mainsail、Spoolman、Manyfold 共同描绘了一个无云依赖的本地打印农场蓝图，与 Prusa 等厂商的"全云化"路线形成张力。

---

## 👀 值得关注

1. **[FreeCAD Hackathon · 2026-08-29](https://blog.freecad.org/2026/08/10/save-the-date-freecad-hackathon-august-29th-2026/)** — 主仓本周活跃 + 即将冲刺，大概率集中在 PartDesign 重构、Toponaming 与 Assembly；这是判断 FreeCAD 1.x 下一里程碑的最佳观察窗口。

2. **[andymai/occt-wasm](https://github.com/andymai/occt-wasm)** ⭐43 — OCCT WASM 化是 Web CAD 的"最后一公里"：精确 B-Rep 几何一旦在浏览器内可用，浏览器内的 IFC/STEP 编辑与多端协作将成为可能，影响下游 Share、conway、brepjs 等所有 Web CAD 项目的上限。

3. **[Pan-Chera/Multi-Agent-CAD (MAC)](https://github.com/Pan-Chera/Multi-Agent-CAD)** ⭐799 — 从"LLM 直接吐 STL"到"多智能体规划 + 校验 + 修复"是 AI-CAD 工程化的关键跃迁，决定了未来 1-2 年 AI 能否在严肃机械设计场景落地。

---

*日报由 FreeCAD Blog / Prusa / GitHub Trending 三源聚合生成。下次更新：明日。*

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*