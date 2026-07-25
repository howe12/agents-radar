# CAD/机械结构开源动态日报 2026-07-25

> 数据来源: GitHub Search API (113 仓库) | ArXiv cs.GR+cs.CG (0 篇论文) | RSS 新闻 (3 条) | 生成时间: 2026-07-25 02:04 UTC

---

# CAD/机械结构开源动态日报

**日期**：2026 年 7 月 23 日（数据源：FreeCAD Blog、Prusa Blog、ArXiv、GitHub Trending）

---

## 一、今日速览

今日开源 CAD 生态呈现两条清晰主线：一是 **FreeCAD 1.1.2 正式发布**，带来新一轮稳定性与兼容性修复，配合 WIP Wednesday 公布的开发进展，FreeCAD 1.x 系列的成熟度正在加速；二是 **AI/MCP 化浪潮持续发酵** —— `freecad-mcp`、`freecad-ai`、`CADAM`、`Text23D`、`Kiln` 等项目围绕"自然语言/Agent 生成 CAD 模型与 G-code"密集更新，将 LLM Agent 与传统建模内核对接形成新范式。同时 Prusa 发布 **Prusament PA11 Natural** 工业级耗材，将 3D 打印拓展至齿轮与运动件等结构件场景。

---

## 二、行业脉搏

1. **[FreeCAD 1.1.2 released](https://blog.freecad.org/2026/07/23/freecad-1-1-2-released/)**
   1.x 系列小版本迭代，重点修复导入/导出、Part Design、Sketcher 等模块缺陷。建议所有 1.x 用户升级，尤其是依赖 OCCT 内核进行 STEP 交换的项目。

2. **[WIP Wednesday, 22 July 2026](https://blog.freecad.org/2026/07/22/wip-wednesday-22-july-2026/)**
   开发者周报，集中展示 Part/PartDesign、装配体（Assembly）以及 BIM 工作台的合并中变更，是判断 FreeCAD 主干演进方向的一手信号。

3. **[Prusament PA11 Natural: gears & moving parts](https://blog.prusa3d.com/prusament-pa11-natural-material-with-extreme-mechanical-and-chemical-resistance_137458/)**
   尼龙 11（PA11）生物基长链聚酰胺，具备优异的耐磨、耐化学与低吸湿性，特别适合齿轮、轴承、夹具等需要自润滑与抗冲击的应用，扩展桌面级 3D 打印在结构件中的可行性边界。

---

## 三、研究前沿

📭 **今日 ArXiv cs.GR / cs.CG 抓取未返回有效结果**，暂无可推荐论文。建议明日持续关注几何处理、神经隐式表示（NeRF/SDF）、B-Rep 深度学习方向的进展。

---

## 四、重点项目（按分类整理）

### 🖥️ CAD 平台与编辑器

| 项目 | ⭐ | 一句话说明 |
|---|---|---|
| **[FreeCAD/FreeCAD](https://github.com/FreeCAD/FreeCAD)** | 32,345 | 开源参数化 3D 建模标杆，OCCT 内核 + Python 脚本化，今日发布 1.1.2，机械/建筑/BIM 多工作台覆盖。 |
| **[openscad/openscad](https://github.com/openscad/openscad)** | 9,796 | 程序员的实体建模语言，无 GUI 通过代码描述几何，是代码化 CAD 的事实标准之一。 |
| **[Adam-CAD/CADAM](https://github.com/Adam-CAD/CADAM)** | 4,860 | 浏览器端 **Text-to-CAD** 开源应用，代表 LLM 直出可制造几何的新一代入口。 |
| **[xiangechen/chili3d](https://github.com/xiangechen/chili3d)** | 4,699 | 浏览器内 3D CAD，基于 Web 几何内核的在线建模与编辑。 |
| **[neka-nat/freecad-mcp](https://github.com/neka-nat/freecad-mcp)** | 1,437 | 为 FreeCAD 提供 **Model Context Protocol** 服务，使 LLM Agent 可直接调用建模 API，AI 与 CAD 集成的关键桥梁。 |
| **[ghbalf/freecad-ai](https://github.com/ghbalf/freecad-ai)** | 392 | FreeCAD 内置 AI 工作台，自然语言生成 3D 模型，验证"对话式 CAD"在桌面端的可行性。 |

### 📐 计算几何与内核

| 项目 | ⭐ | 一句话说明 |
|---|---|---|
| **[CGAL/cgal](https://github.com/CGAL/cgal)** | 5,987 | C++ 计算几何算法库，曲面重建、布尔运算、网格生成领域的工业标准参考实现。 |
| **[fougue/mayo](https://github.com/fougue/mayo)** | 2,102 | 基于 Qt + OpenCASCADE 的 3D CAD 查看器与转换器，STEP/IGES 桌面端轻量方案。 |
| **[andymai/occt-wasm](https://github.com/andymai/occt-wasm)** | 31 | 将 OpenCASCADE 编译为 WebAssembly + TypeScript API，~4MB brotli，使 Web 端获得 **精确 B-Rep** 能力，是浏览器 CAD 革命的底层拼图。 |

### 🧬 创成式与参数化设计

| 项目 | ⭐ | 一句话说明 |
|---|---|---|
| **[partcad/partcad](https://github.com/partcad/partcad)** | 478 | 面向可制造物理产品的"包管理器 + 数字主线"标准，整合 AI 简化硬件模块化设计流程。 |
| **[tonykoop/makerbench-hwe](https://github.com/tonykoop/makerbench-hwe)** | 0 | 物理世界的 **Agentic Benchmark**：空间推理 + DFM + 3D 制造能力评测，对应 SWE-bench 在软件领域的角色，值得早期关注。 |

### 🖱️ 3D 打印与制造

| 项目 | ⭐ | 一句话说明 |
|---|---|---|
| **[MarlinFirmware/Marlin](https://github.com/MarlinFirmware/Marlin)** | 17,496 | 装机量最大的开源 3D 打印机固件，覆盖 8/32 位 MCU 主流平台。 |
| **[OrcaSlicer/OrcaSlicer](https://github.com/OrcaSlicer/OrcaSlicer)** | 15,204 | 跨品牌 G-code 生成器（Bambu/Prusa/Voron/Creality 等），社区活跃度高、切片算法领先。 |
| **[Ultimaker/Cura](https://github.com/Ultimaker/Cura)** | 6,997 | 历史最悠久的桌面切片 GUI，Uranium 框架对插件生态仍具示范意义。 |
| **[Sienci-Labs/gsender](https://github.com/Sienci-Labs/gsender)** | 360 | GRBL / grblHAL CNC 控制器，配套可视化与连接管理，是 CNC 软件栈重要一环。 |
| **[codeofaxel/Kiln](https://github.com/codeofaxel/Kiln)** | 40 | **3D 打印领域的 MCP Server**：Claude/Codex/Cursor 等 Agent 可直接设计、生成、切片并下发到 Bambu/Prusa/Klipper/Marlin 打印机，是"AI → 实物"端到端链路代表性项目。 |

### 🔗 文件格式与互操作

| 项目 | ⭐ | 一句话说明 |
|---|---|---|
| **[bldrs-ai/conway](https://github.com/bldrs-ai/conway)** | 22 | Web 端高性能 **IFC & STEP 引擎**，为浏览器 BIM/CAD 协作平台提供工业级数据交换能力。 |

### 🐍 Code-CAD 与脚本化

| 项目 | ⭐ | 一句话说明 |
|---|---|---|
| **[CadQuery/cadquery](https://github.com/CadQuery/cadquery)** | 5,499 | 基于 OCCT 的 Python 参数化 CAD 脚本框架，代码即模型，便于版本控制与生成式设计。 |
| **[gumyr/build123d](https://github.com/gumyr/build123d)** | 2,692 | 继承自 CadQuery 理念的下一代 Python CAD 库，API 更现代、表达力更强。 |
| **[Kevoyuan/AgentSCAD](https://github.com/Kevoyuan/AgentSCAD)** | 5 | AI-native CAD Agent：自然语言 → 经验证的 OpenSCAD 工件，含自动几何修复与可制造性校验。 |

---

## 五、生态趋势信号

开源 CAD/机械设计生态正在被三条主线重塑：**① AI Agent 全面下沉到制造链路**——MCP 协议正成为 LLM 调用 CAD 内核、CAM 切片器、3D 打印机固件的统一接口（`freecad-mcp`、`Kiln`、`AgentSCAD`），"对话即设计"从演示走向端到端可执行。**② 几何内核向 WebAssembly 迁移**——`occt-wasm`、`brepjs`、`conway` 等项目证明，OCCT 这一工业级 B-Rep 内核已可在浏览器中高效运行，为"零安装"的协作式 CAD 打开大门。**③ 参数化 + 程序化设计成为创成式主流路径**——CadQuery/build123d/PartCAD 阵营与 Topology Optimization（Altair）形成互补，材料-工艺-几何一体化成为新交付形态。

---

## 六、值得关注

1. **[FreeCAD 1.1.2](https://blog.freecad.org/2026/07/23/freecad-1-1-2-released/) + [neka-nat/freecad-mcp](https://github.com/neka-nat/freecad-mcp)**
   稳定的 FreeCAD 1.x 与活跃的 MCP 集成叠加，意味着 Agent 驱动 FreeCAD 已具备生产可用基础，未来 1~2 个版本值得重点跟踪——尤其关注 Assembly、PartDesign 工作台对 MCP API 的覆盖深度。

2. **[codeofaxel/Kiln](https://github.com/codeofaxel/Kiln) + [CADAM](https://github.com/Adam-CAD/CADAM) + [AgentSCAD](https://github.com/Kevoyuan/AgentSCAD)**
   三个项目分别对应"自然语言 → G-code → 实物"、"文本 → CAD 模型"、"文本 → OpenSCAD 验证件"，共同勾勒出 **Text-to-Part** 全链路。若 DFM 校验、几何修复、切片一体化成熟，将直接冲击中小批量定制制造的服务模式。

3. **[Prusament PA11 Natural](https://blog.prusa3d.com/prusament-pa11-natural-material-with-extreme-mechanical-and-chemical-resistance_137458/)**
   PA11 进入消费级耗材领域，对开源社区意味着：自润滑齿轮、耐化学阀门、低吸湿户外结构件这类"半工业"应用，桌面 3D 打印首次具备量产可行性，相关切片 profile 与设计指南值得机械开源圈跟进。

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*