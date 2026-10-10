# CAD/机械结构开源动态日报 2026-10-10

> 数据来源: GitHub Search API (107 仓库) | ArXiv cs.GR+cs.CG (0 篇论文) | RSS 新闻 (4 条) | 生成时间: 2026-10-10 03:49 UTC

---

# CAD/机械结构开源动态日报

**日期：2026-10-09**

---

## 一、今日速览

今日 FreeCAD 生态集中释放两枚重磅信号——**FreeCAD 26.3 RC1** 进入发布倒计时，同时官方宣布举办 **BIM Meetups** 系列线下活动，标志着开源参数化建模从"通用机械"向"BIM/建筑全产业链"延伸。GitHub 端，**AI × CAD** 赛道持续高密度产出：`text-to-cad`、`CADAM`、`freecad-mcp`、`anvilate`、`Kiln` 等项目活跃更新，MCP（Model Context Protocol）已从概念验证快速落地为生产工具，AI Agent 直接操控 FreeCAD、Bambu、OctoPrint 等成为新范式。**论文侧今日无新增 cs.GR/cs.CG 收录**，开源工程文档的更新节奏明显跑在学术发表之前。

---

## 二、行业脉搏

- **[FreeCAD BIM Meetups 启动](https://blog.freecad.org/2026/10/09/announcing-freecad-bim-meetups/)** — FreeCAD 官方将社区运营下沉到 BIM（建筑信息模型）细分赛道，是与 Revit/Archicad 正面竞争的明确信号；开源 BIM 生态长期缺位，此次线下 Meetup 体系有望补足"开发者—用户—项目落地"链路。
- **[FreeCAD 26.3 RC1 发布](https://blog.freecad.org/2026/10/08/freecad-26-3-release-candidate-1/)** — 主版本进入候选阶段，意味着 Part Design、Assembly、Sketcher 等核心模块的 API 与 UI 已冻结测试，对下游 Workbench（Ribbon、Curves、Cables 等）是一次关键适配窗口。
- **[WIP Wednesday — 2026/10/07](https://blog.freecad.org/2026/10/07/wip-wednesday-7-october-2026/)** — FreeCAD 社区开发周报集中展示了多个核心模块的合并进展，是观察 OCCT 内核升级、Toponaming 修复进度的一手资料。
- **[Prusa 万圣节发光耗材促销](https://blog.prusa3d.com/get-ready-for-halloween-with-our-spooky-filament-offer_138639/)** — 商业动态，反映消费级 FDM 持续走"场景化营销 + 特殊材料"路线，对桌面打印机的多色/特殊材料生态有牵引意义。

---

## 三、研究前沿

> ⚠️ **今日 ArXiv cs.GR / cs.CG 收录 0 篇**，相关研究动态暂缺。建议关注下游开源仓库（CGAL、MeshLib、PyVista）的实现进展作为工程侧风向标。

---

## 四、重点项目

### 🖥️ CAD 平台与编辑器

- **[FreeCAD](https://github.com/FreeCAD/FreeCAD)** ⭐ 34,093
  基于 OCCT 内核的多平台参数化建模器，今日 RC1 发布奠定主版本格局，是开源机械 CAD 的事实标准。

- **[OpenSCAD](https://github.com/openscad/openscad)** ⭐ 10,404
  "程序员的实体建模器"，纯脚本驱动的参数化 CAD，3D 打印社区的事实编程接口。

- **[chili3d](https://github.com/xiangechen/chili3d)** ⭐ 4,898
  完全运行在浏览器中的 3D CAD，TypeScript 实现代表 WebCAD 进入工程实用门槛。

- **[pascalorg/editor](https://github.com/pascalorg/editor)** ⭐ 24,751
  开源 3D 建筑编辑器，配套本地 CLI 与 MCP 工具，明确面向"AI Agent + 人类协同"的工作流。

- **[LibreCAD](https://github.com/LibreCAD/LibreCAD)** ⭐ 6,460
  跨平台 2D CAD，支持 DXF/DWG/PDF/SVG 输出，仍是轻量 2D 工程图的主力替代方案。

- **[Solvespace](https://github.com/solvespace/solvespace)** ⭐ 4,188
  参数化 2D/3D CAD，体积小巧、求解器扎实，适合嵌入式教育与小型装配设计。

### 📐 计算几何与内核

- **[OCCT](https://github.com/Open-Cascade-SAS/OCCT)** ⭐ 2,981
  开源 3D CAD/CAM/CAE 开发平台（Open CASCADE Technology），FreeCAD、CadQuery、Chili3D 等的共同底层。

- **[CGAL](https://github.com/CGAL/cgal)** ⭐ 6,071
  C++ 计算几何算法库，提供三角化、布尔运算、Delaunay 等工业级实现，是几何内核研究的事实参考。

- **[MeshLib](https://github.com/MeshInspector/MeshLib)** ⭐ 830
  3D 几何处理 SDK，聚焦布尔、修复、抽稀、重网格化、ICP 配准，附 Python/C#/JS 多语言绑定，CAE 前处理可直接调用。

- **[google/draco](https://github.com/google/draco)** ⭐ 7,504
  Google 开源 3D 网格/点云压缩库，对 Web 端大模型传输与协作意义重大。

- **[PyVista](https://github.com/pyvista/pyvista)** ⭐ 3,841
  基于 VTK 的 Python 3D 可视化与网格分析库，科研与 CAE 后处理的事实接口。

### 🧬 创成式与参数化设计

- **[earthtojake/text-to-cad](https://github.com/earthtojake/text-to-cad)** ⭐ 18,800
  为 AI Agent 提供 CAD 能力的工具层，把自然语言直接转换为可制造几何，是当前热度最高的"Text-to-CAD"项目。

- **[CADAM](https://github.com/Adam-CAD/CADAM)** ⭐ 5,231
  开源 Text-to-CAD Web 应用，端到端从提示词到三维模型，对工业设计前期的快速概念化极具价值。

- **[BOSL2](https://github.com/BelfrySCAD/BOSL2)** ⭐ 2,395
  OpenSCAD v2 函数库，提供圆角、附着器、掩模等高级原语，把 OpenSCAD 从玩具级提升至工程级。

- **[anvilate](https://github.com/clay-good/anvilate)** ⭐ 10
  本地优先的机械工程师 AI 设计 Agent，输出"物理校验过的 STEP/DXF + 可编辑 Python 源码"，是"AI 出图→商用 CAD 接力"链路的有力尝试。

### 🖨️ 3D 打印与制造

- **[OrcaSlicer](https://github.com/OrcaSlicer/OrcaSlicer)** ⭐ 15,907
  支持 Bambu/Prusa/Voron/VzBot/RatRig/Creality 等主流机型的 G-code 生成器，开源切片的事实新标杆。

- **[MarlinFirmware](https://github.com/MarlinFirmware/Marlin)** ⭐ 17,616
  8/32 位通用的 RepRap 固件，市面大量商用 3D 打印机预装，是开源运动控制生态的根。

- **[Ultimaker/Cura](https://github.com/Ultimaker/Cura)** ⭐ 7,051
  长期主流切片 GUI，基于 Uranium 框架，插件生态丰富。

- **[mcp-3D-printer-server](https://github.com/DMontgomery40/mcp-3D-printer-server)** ⭐ 249
  通过 MCP 协议把 Orca/OctoPrint/Klipper/Prusa/Creality 等打印机 API 统一暴露给 AI Agent，标志"AI 直接控打印"进入实用阶段。

- **[Kiln](https://github.com/codeofaxel/Kiln)** ⭐ 92
  开源 MCP 3D 打印服务器，AI Agent 可跨 Bambu/Creality/Prusa/Klipper/OctoPrint/Marlin 全平台设计→切片→打印。

### 🔗 文件格式与互操作

- **[caddiff](https://github.com/angel291592/caddiff)** ⭐ 84
  "Git diff for CAD assemblies"——输入两份 STEP，输出变更图片与机器可读变更清单，是 CAD 版本控制的关键拼图。

- **[manyfold3d/manyfold](https://github.com/manyfold3d/manyfold)** ⭐ 2,198
  自托管 3D 打印文件数字资产管理器，对本地化打印农场管理有直接价值。

- **[KiCad/kicad-source-mirror](https://github.com/KiCad/kicad-source-mirror)** ⭐ 3,019
  开源 EDA 套件，与 FreeCAD 装配模块联动构成"机械 + 电子"开源闭环。

### 🐍 Code-CAD 与脚本化

- **[CadQuery](https://github.com/CadQuery/cadquery)** ⭐ 5,905
  基于 OCCT 的 Python 参数化 CAD 脚本框架，工业级 Code-CAD 的代表。

- **[build123d](https://github.com/gumyr/build123d)** ⭐ 3,357
  Python CAD 编程库，采用"3D 场景即构建器"的现代 API 设计，与 CadQuery 形成代际互补。

- **[freecad-mcp (neka-nat)](https://github.com/neka-nat/freecad-mcp)** ⭐ 2,767
  FreeCAD 的 MCP Server，将 FreeCAD 能力以协议化方式暴露给 LLM/Agent。

- **[freecad-mcp (blwfish)](https://github.com/blwfish/freecad-mcp)** ⭐ 57
  提供 32 个工具的 AI 辅助 3D CAD 建模 MCP 服务，工具数量与覆盖面在同类中领先。

- **[JupyterCAD](https://github.com/jupytercad/JupyterCAD)** ⭐ 234
  JupyterLab 内的协作式 3D 几何建模扩展，把 CAD 带入"笔记本式工程"工作流。

---

## 五、生态趋势信号

开源 CAD 正在围绕 **AI Agent 化**完成一次集体重构。MCP 协议成为新底座：今日活跃仓库中 `freecad-mcp`、`mcp-3D-printer-server`、`Kiln`、`pascalorg/editor`、`text-to-cad`、`anvilate` 已形成"协议层 → 工具层 → 应用层"的完整栈，LLM 直接驱动 OCCT/FreeCAD/打印机不再是 demo。另一条主线是 **Self-Hosted 反云化**：`bambuddy`、`manyfold3d`、`Spoolman` 等项目共同构建脱离云端的本地打印农场 + 物料管理方案，是对厂商云服务数据锁定的明确回应。**WebCAD** 与 **CAD 版本控制（caddiff）** 两条潜在支线也开始并行成型，前者重塑交付形态，后者补齐工程协作短板。

---

## 六、值得关注

1. **FreeCAD 26.3 RC1 适配窗口期** — 主版本 API/UI 即将冻结，下游 Workbench 维护者（Ribbon、Curves、Cables、DFM、HistoryWorkbench）需在正式版前完成兼容性测试，是贡献与跟踪上游进度的关键节点。
2. **AI Agent × CAD MCP 工具集** — `freecad-mcp` 双仓库合计近 3,000 star，MCP 协议已成开源 CAD 事实新标准接口；任何想做"自然语言/对话式 CAD"的团队，应优先基于 MCP 而不是自建协议，避免被生态边缘化。
3. **caddiff：CAD 版本控制破冰者** — STEP 级别的几何 diff 是工程协同的长期空白（GitHub 仅 84 star 但解决的是行业刚需），一旦工具链成熟，有望催生新的"CAD for Git"平台型机会。

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*