# CAD/机械结构开源动态日报 2026-08-03

> 数据来源: GitHub Search API (116 仓库) | ArXiv cs.GR+cs.CG (0 篇论文) | RSS 新闻 (2 条) | 生成时间: 2026-08-03 02:10 UTC

---

# CAD/机械结构开源动态日报
**日期：2026-07-29**

---

## 一、今日速览

今日 FreeCAD 社区发布了 WIP Wednesday 进度汇总，并宣布在 EMF Camp 2026 上举办"E-Sport 速通挑战赛"，将开源 CAD 推向更广阔的展示舞台。GitHub 活跃仓库显示，**AI × CAD** 方向的整合进一步加速：neka-nat/freecad-mcp 仍居 FreeCAD 生态热度榜首，earthtojake/text-to-cad（12.5k★）持续引领 text-to-CAD 浪潮，而 OCCT 编译到 WebAssembly（occt-wasm）和 brepjs（Web B-Rep 库）则推动了浏览器端精确几何内核的落地。3D 打印侧，Marlin、OrcaSlicer、Cura 三大主力继续迭代，Bambu 自托管方案 bambuddy 持续走热。

---

## 二、行业脉搏

1. **[FreeCAD WIP Wednesday, 29 July 2026](https://blog.freecad.org/2026/07/29/wip-wednesday-29-july-2026/)** — FreeCAD 官方每周开发进度汇总，反映主干仍在持续打磨参数化建模、Part Design 与 Sketcher 模块。

2. **[FreeCAD E-Sport Speed Run Challenge at EMF Camp 2026](https://blog.freecad.org/2026/07/27/freecad-e-sport-speed-run-challenge-at-emf-camp-2026/)** — 在欧洲最大创客营 EMF 上举办"CAD 速通赛"，标志 FreeCAD 社区开始用更年轻化、游戏化的方式推广开源 CAD，扩大用户基本盘。

3. **（论文动态）** — 今日 ArXiv cs.GR/cs.CG 板块暂无新增论文，研究前沿信号需从仓库侧捕捉（见下文）。

---

## 三、研究前沿

今日无 ArXiv cs.GR/cs.CG 新论文入库，研究信号转移至仓库与代码实践层面。可关注的方向性研究议题（基于活跃项目）：
- **大模型驱动参数化 CAD 生成**：Multi-Agent-CAD（MAC）提出约束化 test-time compute 的多智能体文本到 CAD 框架；
- **Web 端精确几何内核**：occt-wasm 把 OCCT 编译到 ~4MB brotli 体积的 WASM 模块，使浏览器具备工业级 B-Rep 能力；
- **网格布尔与几何处理加速**：polydera/trueform 把"STL for geometry"作为口号，提供精确布尔与空间查询。

---

## 四、重点项目

### 🖥️ CAD 平台与编辑器

- **[FreeCAD/FreeCAD](https://github.com/FreeCAD/FreeCAD)** ⭐32,571
  开源多平台参数化 3D 建模器的事实标准，今日仍有活跃提交；本周 WIP 涵盖 Sketcher 与 Part Design 改进。

- **[openscad/openscad](https://github.com/openscad/openscad)** ⭐9,869
  程序员向的 CSG 实体建模语言，OpenSCAD 生态核心；为 AgentSCAD、ChiselCad 等生成式 CAD 提供底层语法。

- **[solvespace/solvespace](https://github.com/solvespace/solvespace)** ⭐4,074
  轻量级 2D/3D 参数化 CAD，适合教学与嵌入式场景；约束求解器仍是同类参考实现。

- **[xiangechen/chili3d](https://github.com/xiangechen/chili3d)** ⭐4,712
  浏览器端 3D CAD 应用，体现"CAD on Web"趋势。

- **[dune3d/dune3d](https://github.com/dune3d/dune3d)** ⭐2,032
  全新 3D CAD 应用，强调实时布尔与参数化工作流。

### 📐 计算几何与内核

- **[Open-Cascade-SAS/OCCT](https://github.com/Open-Cascade-SAS/OCCT)** ⭐2,709
  开源 3D CAD/CAM/CAE 平台底层，FreeCAD、CadQuery、Mayo 等均依赖其 B-Rep 内核。

- **[CGAL/cgal](https://github.com/CGAL/cgal)** ⭐5,993
  C++ 计算几何算法库，提供三角化、布尔、几何内核等高质量实现。

- **[andymai/occt-wasm](https://github.com/andymai/occt-wasm)** ⭐35
  把 OpenCASCADE 编译为 ~4MB brotli 的 WASM，提供 TypeScript API、arena 内存管理与 Web Worker 支持——是浏览器端精确 CAD 的关键拼图。

- **[andymai/brepjs](https://github.com/andymai/brepjs)** ⭐74
  基于 OCCT 的 TypeScript Web CAD 库，提供精确 B-Rep 几何，使前端无需服务端即可进行布尔与建模。

### 🧬 创成式与参数化设计

- **[earthtojake/text-to-cad](https://github.com/earthtojake/text-to-cad)** ⭐12,534
  "A library of agent skills for CAD, CAE and CAM"，为 AI Agent 提供 CAD/CAE/CAM 工具链，是 text-to-CAD 生态的核心枢纽。

- **[armpro24-blip/cad-cae-copilot](https://github.com/armpro24-blip/cad-cae-copilot)** ⭐43
  AI 原生 CAD/CAE/CAX 工作台，基于 build123d/OpenCASCADE 实现可编辑参数与稳定拓扑指针，并暴露 MCP 工具。

- **[Pan-Chera/Multi-Agent-CAD](https://github.com/Pan-Chera/Multi-Agent-CAD)** ⭐4
  多智能体文本到 CAD 生成框架，采用 constrained test-time compute 提升几何正确性。

- **[Kevoyuan/AgentSCAD](https://github.com/Kevoyuan/AgentSCAD)** ⭐5
  把自然语言转为带几何修复与制造校验的 OpenSCAD 工件，是 AI × OpenSCAD 的典型实践。

### 🖨️ 3D 打印与制造

- **[MarlinFirmware/Marlin](https://github.com/MarlinFirmware/Marlin)** ⭐17,515
  RepRap 3D 打印机主流固件，覆盖 8/32 位 MCU，迭代从未停歇。

- **[OrcaSlicer/OrcaSlicer](https://github.com/OrcaSlicer/OrcaSlicer)** ⭐15,307
  支持 Bambu/Prusa/Voron 等多品牌的 G-code 生成器，社区活跃度高。

- **[Ultimaker/Cura](https://github.com/Ultimaker/Cura)** ⭐7,004
  基于 Uranium 框架的成熟切片 GUI，企业级代表。

- **[maziggy/bambuddy](https://github.com/maziggy/bambuddy)** ⭐2,730
  "Your Bambu Lab. No Cloud. Your Rules." 自托管命令中心，反映去云化、隐私可控的 3D 打印需求。

- **[Sienci-Labs/gsender](https://github.com/Sienci-Labs/gsender)** ⭐362
  grbl / grblHAL CNC 控制软件，把桌面 CNC 体验推向易用化。

- **[DMontgomery40/mcp-3D-printer-server](https://github.com/DMontgomery40/mcp-3D-printer-server)** ⭐221
  MCP 协议对接 Orca/OctoPrint/Klipper/Prusa 等多品牌打印机 API，并集成 STL 编辑与切片，是 AI Agent 控制打印机的关键中间层。

### 🔗 文件格式与互操作

- **[fougue/mayo](https://github.com/fougue/mayo)** ⭐2,114
  Qt + OpenCascade 构建的 3D CAD 查看与转换器，企业场景的免费替代方案。

- **[f3d-app/f3d](https://github.com/f3d-app/f3d)** ⭐4,589
  快速极简 3D 查看器，支持多种 CAD/网格格式，适合嵌入管线。

- **[bldrs-ai/Share](https://github.com/bldrs-ai/Share)** ⭐181
  浏览器端 BIM & CAD 协同查看平台，支持 IFC/STEP/STL/OBJ/glTF。

- **[bldrs-ai/conway](https://github.com/bldrs-ai/conway)** ⭐22
  面向 Web CAD 应用的高性能 IFC & STEP 引擎，与 Share 配套。

- **[usnistgov/STP2X3D](https://github.com/usnistgov/STP2X3D)** ⭐100
  NIST 出品的 STEP → X3D 转换器，长寿命的标准格式桥。

### 🐍 Code-CAD 与脚本化

- **[CadQuery/cadquery](https://github.com/CadQuery/cadquery)** ⭐5,546
  基于 OCCT 的 Python 参数化 CAD 脚本框架，机械与硬件自动化设计的标杆。

- **[partcad/partcad](https://github.com/partcad/partcad)** ⭐481
  "Package manager for things"，为可制造物理产品提供数字主线 / TDP 标准，是 AI 时代的"硬件 npm"。

- **[neka-nat/freecad-mcp](https://github.com/neka-nat/freecad-mcp)** ⭐1,584
  FreeCAD 的 MCP（Model Context Protocol）服务器，把 FreeCAD 接入 Claude 等 AI Agent，是当前 FreeCAD 生态最热 AI 集成项目。

- **[ad-si/LuaCAD](https://github.com/ad-si/LuaCAD)** ⭐35
  基于 Lua + OpenSCAD 的 CAD 建模入口，面向嵌入式与教育。

---

## 五、生态趋势信号

当前开源 CAD/机械设计生态正经历三重交汇：**第一**，AI Agent 与 CAD 内核通过 **MCP** 深度绑定，FreeCAD、Rhino、3D 打印机纷纷暴露工具接口（freecad-mcp、mcp-3D-printer-server、rhino-mcp、cad-cae-copilot），text-to-CAD 不再只是 demo。**第二**，**Web 化精确几何** 取得关键突破：OCCT → WASM、B-Rep 库进浏览器，使 STEP/IFC 类工业格式可以在前端原生解析。**第三**，**自托管 + 去云化** 在 3D 打印端成型（bambuddy、Spoolman、mainsail），与云端订阅模式形成对照，反映创客对数据主权的诉求。

---

## 六、值得关注

1. **[neka-nat/freecad-mcp](https://github.com/neka-nat/freecad-mcp) + [DMontgomery40/mcp-3D-printer-server](https://github.com/DMontgomery40/mcp-3D-printer-server)** — MCP 正在成为"CAD × AI"的事实标准协议，前者把 FreeCAD 变成 Agent 可调用的工具集，后者把打印机变成 Agent 可控外设；两项目并行发展将决定 AI 辅助机械设计的接口走向。

2. **[andymai/occt-wasm](https://github.com/andymai/occt-wasm) + [andymai/brepjs](https://github.com/andymai/brepjs)** — 把工业级 OCCT 编译进 ~4MB 的 WASM，使浏览器获得精确布尔与 B-Rep，是"Web CAD"从查看器升级为真正建模器的临界点，对教育、协同、嵌入式 CAD 影响深远。

3. **[earthtojake/text-to-cad](https://github.com/earthtojake/text-to-cad)** — 12.5k★ 的"AI Agent CAD 技能库"，叠加 MAC、AgentSCAD、Kiln 等项目，构成 text-to-CAD 完整工具链，是后续生成式机械设计的底层基础设施，值得长期跟踪其 schema 与评测基准演进。

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*