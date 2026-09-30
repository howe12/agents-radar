# CAD/机械结构开源动态日报 2026-09-30

> 数据来源: GitHub Search API (114 仓库) | ArXiv cs.GR+cs.CG (0 篇论文) | RSS 新闻 (3 条) | 生成时间: 2026-09-30 03:29 UTC

---

# CAD/机械结构开源动态日报

**日期**：2026-09-28

---

## 一、今日速览

今日最值得关注的动态集中在 **AI 代理与 CAD 的深度融合**：FreeCAD 1.1.4 正式发布，新版本继续打磨参数化建模核心；与此同时，GitHub 上涌现出多个 FreeCAD / OCCT 的 MCP（Model Context Protocol）服务器项目，AI 代理调用 CAD 内核、生成 B-Rep 模型的链路正在快速成型。此外，文本到 CAD（text-to-CAD）、WebAssembly 化 OCCT 内核、浏览器端 G-code 可视化等方向本周均有活跃提交，AI × CAD × 制造的"代理化"工作流日趋成熟。

---

## 二、行业脉搏

- **[FreeCAD 1.1.4 released](https://blog.freecad.org/2026/09/28/freecad-1-1-4-released/)** — FreeCAD Blog
  作为开源参数化 CAD 的事实标准，1.1.4 是 1.1 系列的又一定版更新，重点修复与稳定性增强。鉴于其 33k+ star 的体量与活跃的 addon 生态，每一次点版本升级都直接影响下游 BIM、PCB 弯折、机器人等垂直工作流。

- **[WIP Wednesday, 23 September 2026](https://blog.freecad.org/2026/09/23/wip-wednesday-23-september-2026/)** — FreeCAD Blog
  FreeCAD 社区的"开发中周三"系列是观察 OCCT 集成、Part Design / Sketcher 改进、Topological Naming 等核心议题最直观的窗口，对二次开发者和下游 addon 作者尤为重要。

- **[Factorio Has Arrived on Printables](https://blog.prusa3d.com/factorio-has-arrived-on-printables_138519/)** — Prusa Blog
  Prusa 旗下 Printables 平台正式引入 Factorio（异星工厂）相关 3D 打印模型，标志着模型市场与游戏 IP 的进一步互通；对社区型模型分发平台而言，跨界内容生态扩展是新的增长信号。

---

## 三、研究前沿

> 今日 ArXiv cs.GR / cs.CG 无新收录论文。该栏目将持续追踪几何处理、B-Rep 重建、神经隐式场等方向，下一期刊发。

---

## 四、重点项目

### 🖥️ CAD 平台与编辑器

- **[FreeCAD/FreeCAD](https://github.com/FreeCAD/FreeCAD)** ⭐ 33,853
  开源多平台参数化 3D 建模器，基于 OCCT 内核；仍是当之无愧的生态基座。

- **[openscad/openscad](https://github.com/openscad/openscad)** ⭐ 10,328
  "程序员的实体 3D CAD 建模器"，以代码描述几何，是参数化/创成式设计的另一极。

- **[LibreCAD/LibreCAD](https://github.com/LibreCAD/LibreCAD)** ⭐ 6,428
  跨平台 2D CAD，DXF/DWG 读写能力强，适合机械制图替代 AutoCAD LT 场景。

- **[solvespace/solvespace](https://github.com/solvespace/solvespace)** ⭐ 4,175
  参数化 2D/3D CAD，体量轻巧，适合教学与嵌入式场景。

- **[Virtastic/freecad-web](https://github.com/Virtastic/freecad-web)** ⭐ 37
  将 FreeCAD 编译为 wasm64 + JSPI 运行在浏览器中；"零安装"的 FreeCAD 对客户演示和协作极具价值。

### 📐 计算几何与内核

- **[google/draco](https://github.com/google/draco)** ⭐ 7,496
  Google 开源的 3D 网格/点云压缩库，大幅降低 web 端 3D 数据传输成本。

- **[pyvista/pyvista](https://github.com/pyvista/pyvista)** ⭐ 3,829
  基于 VTK 的 Python 3D 可视化与网格分析库，是科研/CAD 后处理事实标准之一。

- **[MeshInspector/MeshLib](https://github.com/MeshInspector/MeshLib)** ⭐ 826
  3D 几何处理 SDK：mesh 布尔运算、修复、抽稀、重网格化、点云三角化、ICP，提供 C++/Python/C# 多语言绑定。

- **[andymai/occt-wasm](https://github.com/andymai/occt-wasm)** ⭐ 58
  OpenCascade (OCCT) 编译到 WebAssembly，~4MB brotli，提供 TypeScript API 与 Web Worker 支持——把工业级 B-Rep 内核搬到浏览器。

- **[andymai/brepjs](https://github.com/andymai/brepjs)** ⭐ 113
  基于 OCCT-WASM 的 Web 端精确 B-Rep CAD 库，让浏览器获得与桌面级同源的几何精度。

### 🧬 创成式与参数化设计

- **[earthtojake/text-to-cad](https://github.com/earthtojake/text-to-cad)** ⭐ 16,487
  "给智能体赋予 CAD 超能力"——文本到可编辑 CAD 模型生成的最具影响力的开源实现。

- **[ghbalf/freecad-ai](https://github.com/ghbalf/freecad-ai)** ⭐ 531
  FreeCAD 内 AI 工作台：用自然语言生成 3D 模型，把 AI 直接嵌入建模界面。

- **[PhySpace/SimpleCADAPI](https://github.com/PhySpace/SimpleCADAPI)** ⭐ 136
  面向 LLM 的"代理原生"CAD SDK，用于创建、检查、重建可编辑 3D 模型。

- **[Pan-Chera/Multi-Agent-CAD](https://github.com/Pan-Chera/Multi-Agent-CAD)** ⭐ 1,013
  MAC：解耦的多智能体 text-to-CAD 框架，通过受限测试时算力提升几何质量。

- **[clay-good/anvilate](https://github.com/clay-good/anvilate)** ⭐ 10
  本地优先的机械设计代理：自然语言 → 物理校验过的参数化 STEP/DXF，可直接落入 CATIA/SolidWorks/NX。

- **[partcad/partcad](https://github.com/partcad/partcad)** ⭐ 498
  面向可制造物理产品的"包管理器"，AI 增强的数字主线/Digital Thread 标准。

### 🖨️ 3D 打印与制造

- **[MarlinFirmware/Marlin](https://github.com/MarlinFirmware/Marlin)** ⭐ 17,610
  RepRap 3D 打印机最广泛使用的固件，覆盖 8/32 位 MCU；商用打印机改装与新机型调校的基线参考。

- **[OrcaSlicer/OrcaSlicer](https://github.com/OrcaSlicer/OrcaSlicer)** ⭐ 15,806
  Bambu/Prusa/Voron/VzBot/RatRig/Creality 多机型 G-code 生成器，是当前切片软件社区主流。

- **[Ultimaker/Cura](https://github.com/Ultimaker/Cura)** ⭐ 7,048
  基于 Uranium 框架的桌面切片 GUI，仍是 FDM 切片的事实参考实现。

- **[codeofaxel/Kiln](https://github.com/codeofaxel/Kiln)** ⭐ 79
  开源 3D 打印 MCP 服务器：AI 代理可设计、生成、切片并打印，覆盖 Bambu/Creality/Prusa/Klipper/Marlin 全栈。

- **[Sienci-Labs/gsender](https://github.com/Sienci-Labs/gsender)** ⭐ 372
  简洁易用的 grbl / grblHAL CNC 控制器，专攻轻量 CNC 工作流。

- **[DMontgomery40/mcp-3D-printer-server](https://github.com/DMontgomery40/mcp-3D-printer-server)** ⭐ 240
  将 MCP 协议接入 Orca/Bambu/OctoPrint/Klipper/Duet/Repetier/Prusa/Creality，附 STL 缩放/旋转/剖切/底延与切片能力。

- **[thingraph/gcode-viewer](https://github.com/thingraph/gcode-viewer)** ⭐ 2
  浏览器端 3D G-code 可视化器，本地解析、零上传，兼容 Bambu Studio / OrcaSlicer / PrusaSlicer / Cura 主流切片输出。

### 🔗 文件格式与互操作

- **[f3d-app/f3d](https://github.com/f3d-app/f3d)** ⭐ 4,730
  快速极简的 3D 视器，多格式支持，是命令行/脚本流水线查看模型的高频工具。

- **[fougue/mayo](https://github.com/fougue/mayo)** ⭐ 2,264
  基于 Qt + OpenCascade 的 3D CAD 查看器与转换器，工业级 STEP 读写。

- **[bldrs-ai/conway](https://github.com/bldrs-ai/conway)** ⭐ 23
  高性能 Web 端 IFC/STEP 引擎，面向浏览器 CAD/BIM 应用。

- **[pzfreo/draftwright](https://github.com/pzfreo/draftwright)** ⭐ 70
  为 build123d 与 STEP 文件自动生成技术图纸（工程图），补齐参数化 CAD 的"出图"短板。

### 🐍 Code-CAD 与脚本化

- **[CadQuery/cadquery](https://github.com/CadQuery/cadquery)** ⭐ 5,857
  基于 OCCT 的 Python 参数化 CAD 脚本框架，工业级 B-Rep 编程接口。

- **[gumyr/build123d](https://github.com/gumyr/build123d)** ⭐ 3,234
  现代 Python CAD 编程库，吸取 CadQuery/OpenSCAD 之长，被 draftwright 等下游工具链采纳。

- **[BelfrySCAD/BOSL2](https://github.com/BelfrySCAD/BOSL2)** ⭐ 2,383
  OpenSCAD 的"标准库"v2：遮罩、附件、操作器扩展，显著提升 OpenSCAD 工程化能力。

- **[ad-si/LuaCAD](https://github.com/ad-si/LuaCAD)** ⭐ 125
  以 Lua 进行参数化 CAD 建模，Rust 性能内核；为嵌入式/嵌入式脚本场景提供新选择。

- **[jdegenstein/nice123d](https://github.com/jdegenstein/nice123d)** ⭐ 13
  基于 NiceGUI 的 build123d 定制器、编辑器与查看器，演示了 OCP 内核项目的可视化路径。

---

## 五、生态趋势信号

从今日信号看，开源 CAD/机械设计生态正被三股力量同时重塑：**(1) 协议化**——MCP 已成为 AI 代理调用 CAD 内核的事实接口，FreeCAD、3D 打印机、G-code 生成器纷纷"接入代理"；**(2) 浏览器化**——OCCT/brepjs、FreeCAD-Web、Conway 等把工业级 B-Rep 搬到 wasm，CAD 正在走出桌面客户端；**(3) 语义化**——text-to-CAD、自然语言 → STEP/DXF 等项目让"需求→可制造模型"链路人机可读。三者叠加，正在塑造"LLM 即 CAD 用户"的新工作流范式。

---

## 六、值得关注

- **[FreeCAD 1.1.4 发布与 MCP 生态](https://github.com/neka-nat/freecad-mcp)**
  FreeCAD 主线更新叠加四五个并行演进的 MCP 服务器（neka-nat、spkane、blwfish、sandraschi），意味着 AI 代理对参数化模型的"读写+编辑闭环"已从演示走向可用，对 CAD 二次开发范式影响深远，值得作为长期主线持续跟进。

- **[OCCT-WASM / brepjs 驱动的 Web CAD](https://github.com/andymai/occt-wasm)**
  工业级 B-Rep 内核以 ~4MB brotli 体量进入浏览器，且保持精确几何；这是"Web 原生 CAD"的真正拐点，对未来 SaaS 化 CAD、协作评审与在线出图具有结构性意义。

- **[codeofaxel/Kiln](https://github.com/codeofaxel/Kiln) 等打印 MCP 工具链**
  从设计 → 切片 → 打印机全链路打通 MCP，覆盖 Bambu/Creality/Prusa/Klipper/Marlin；意味着"AI 直接开车打印机"开始具备工程落地可能，对小型制造工坊与远程打印农场尤其值得关注。

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*