# CAD/机械结构开源动态日报 2026-09-17

> 数据来源: GitHub Search API (101 仓库) | ArXiv cs.GR+cs.CG (0 篇论文) | RSS 新闻 (2 条) | 生成时间: 2026-09-17 02:54 UTC

---

# CAD/机械结构开源动态日报

> 📅 数据采集：最近 7 天活跃仓库 / 行业新闻 / ArXiv cs.GR + cs.CG

---

## 1. 今日速览

今日 CAD 开源生态最显著的特征是 **"AI Agent 化 CAD" 全面落地**：Star 数最高的仓库 *earthtojake/text-to-cad* 围绕 LLM 代理调用 CAD/CAE/CAM 工具形成生态，配套的 *Multi-Agent-CAD*、*SimpleCADAPI*、*anvilate*、*Kiln*、*AgentSCAD* 等项目从不同角度切入"自然语言→可编辑 STEP"流水线。与此同时，WebAssembly 与浏览器端 B-Rep 内核（*occt-wasm*、*cadrum*、*brepjs*）让 CAD 真正可以在浏览器中精确建模，叠加 IFC/BIM 在浏览器端的协作（*bldrs-ai/Share*、*pascalorg/editor*），CAD 的"网页化、可被 AI 编排"成为当下主线。FreeCAD 开设官方周边商店，标志着开源项目走向可持续运营。ArXiv 今日在 cs.GR/cs.CG 暂未收录新论文，学术动态可关注下文 *Multi-Agent-CAD* 等配套开源工作。

---

## 2. 行业脉搏

- **FreeCAD 官方周边商店上线**（[FreeCAD Blog](https://blog.freecad.org/2026/09/11/freecad-swag-shop-now-open/)）：作为全球最具影响力的开源参数化 3D 建模项目之一，FreeCAD 通过周边商品获得独立资金来源，有助于摆脱单一捐赠模式、保障长期开发节奏——对整个 LibreCAD、OpenSCAD、SolveSpace 等开源 CAD 生态的可持续化具有示范意义。
- **Bambu Lab：7 家组织共建"3D 打印 + 无障碍"生态**（[Bambu Lab Blog](https://blog.bambulab.com/seven-organizations-one-maker-community-3d-printing-in-the-service-of-accessibility/)）：桌面级 3D 打印正向"个性化辅具/无障碍解决方案"渗透，制造商社区化运营趋势明显，与开源义肢、辅助设备项目（如 e-NABLE 系）形成共振。
- **（信号观察）Prusa、OpenCASCADE、Hackaday 今日未发布与 CAD 内核/工作流强相关的重磅动态**，更多趋势留在项目层体现。

---

## 3. 研究前沿

> ⚠️ 今日 ArXiv cs.GR / cs.CG 暂未捕获新论文。以下以同期开源工作中"具备明确学术方法论贡献"的代表项目补位说明研究前沿：

- **Multi-Agent-CAD（MAC）：面向 text-to-CAD 的解耦多智能体框架** — [Pan-Chera/Multi-Agent-CAD](https://github.com/Pan-Chera/Multi-Agent-CAD)（⭐957）
  提出"约束驱动的测试期计算（constrained test-time compute）"框架，把自然语言到 CAD 的生成分解为几何生成与约束求解两个独立可调模块。对 LLM 驱动的可编辑 CAD 生成具有里程碑意义——避免了端到端模型"只能输出网格、不可参数化编辑"的固有缺陷。
- **text-to-cad：面向 LLM 代理的 CAD/CAE/CAM 技能库** — [earthtojake/text-to-cad](https://github.com/earthtojake/text-to-cad)（⭐15,981）
  标准化了"语言模型调用 CAD"的工具集，是 agent-native CAD 工程化的早期范式，对机械设计自动化的接口设计具有范本价值。
- **anvilate：物理验证的本地优先机械设计代理** — [clay-good/anvilate](https://github.com/clay-good/anvilate)（⭐7）
  输出"自然语言→物理验证→参数化 STEP/DXF"的完整链路，并附 Python 源码，强调工程级可用性而非纯几何生成，对"AI 出图即可投产"具有方法论价值。
- **AgentSCAD：自然语言→验证后的 OpenSCAD 工件** — [Kevoyuan/AgentSCAD](https://github.com/Kevoyuan/AgentSCAD)（⭐13）
  把生成式设计与自动几何修复、制造性校验结合，是 Code-CAD 走向"自愈式生成"的典型代表。

---

## 4. 重点项目

### 🖥️ CAD 平台与编辑器

- **[FreeCAD/FreeCAD](https://github.com/FreeCAD/FreeCAD)** ⭐33,578 — C++
  跨平台开源参数化 3D 建模旗舰，Part Design / Sketcher / FEM 工作流成熟，社区规模与插件生态最广，是工业场景替代商业 CAD 的首选。
- **[pascalorg/editor](https://github.com/pascalorg/editor)** ⭐23,989 — TypeScript
  开源 3D 建筑编辑器，本地 CLI + MCP 工具，面向人机协同设计，把"AI agent 友好"做到 CAD 工具链的一等公民。
- **[openscad/openscad](https://github.com/openscad/openscad)** ⭐10,224 — C++
  程序员的实体建模语言，是 Code-CAD 范式的源头，固件级别稳定、CI/CD 友好。
- **[LibreCAD/LibreCAD](https://github.com/LibreCAD/LibreCAD)** ⭐6,380 — C++
  跨平台 2D CAD，DXF/DWG 兼容，电气/机械制图场景仍不可替代。
- **[solvespace/solvespace](https://github.com/solvespace/solvespace)** ⭐4,160 — C++
  轻量级 2D/3D 参数化建模器，约束求解器教科书级实现，运动学仿真一体化。
- **[HakanSeven12/OpenCADStudio](https://github.com/HakanSeven12/OpenCADStudio)** ⭐2,040 — Rust
  Rust 重写的 2D/3D CAD，GPU 加速渲染 + DWG/DXF 支持，体现新一代系统级语言重写 CAD 的趋势。

### 📐 计算几何与内核

- **[CGAL/cgal](https://github.com/CGAL/cgal)** ⭐6,046 — C++
  学术界事实标准的计算几何库，曲面重建、布尔运算、网格生成质量最高。
- **[locationtech/jts](https://github.com/locationtech/jts)** ⭐2,236 — Java
  2D 拓扑几何事实标准，机械与 GIS 跨界工程的几何运算基础。
- **[artem-ogre/CDT](https://github.com/artem-ogre/CDT)** ⭐1,447 — C++
  高质量约束 Delaunay 三角剖分，是 CAE 前处理/网格生成的关键组件。
- **[MeshInspector/MeshLib](https://github.com/MeshInspector/MeshLib)** ⭐824 — C++
  3D 几何处理 SDK：布尔、修复、抽稀、重网格、点云配准；多语言绑定适合工程流水线。
- **[polydera/trueform](https://github.com/polydera/trueform)** ⭐145 — C++
  精确 CSG 引擎 + 网格布尔 + 空间查询，Rust/C++/Python/TS 全栈绑定，新一代 CSG 库代表。
- **[iShape-Rust/iOverlay](https://github.com/iShape-Rust/iOverlay)** ⭐210 — Rust
  2D 多边形布尔运算，对板金排样、刀路规划、铺料优化极有价值。

### 🧬 创成式与参数化设计

- **[earthtojake/text-to-cad](https://github.com/earthtojake/text-to-cad)** ⭐15,981 — Python
  见"研究前沿"。
- **[Pan-Chera/Multi-Agent-CAD](https://github.com/Pan-Chera/Multi-Agent-CAD)** ⭐957 — Python
  见"研究前沿"。
- **[ghbalf/freecad-ai](https://github.com/ghbalf/freecad-ai)** ⭐498 — Python
  FreeCAD 内的 AI 助手工作台，自然语言直接生成 3D 模型，对 FreeCAD 用户最直接受益。
- **[spkane/freecad-addon-robust-mcp-server](https://github.com/spkane/freecad-addon-robust-mcp-server)** ⭐231 — Python
  把 FreeCAD 暴露为 MCP Server，让 Claude / Cursor 等 agent 直接驱动 FreeCAD 建模。
- **[blwfish/freecad-mcp](https://github.com/blwfish/freecad-mcp)** ⭐45 — Python
  32 个工具的 FreeCAD MCP Server，AI 辅助建模的轻量化入口。

### 🖨️ 3D 打印与制造

- **[MarlinFirmware/Marlin](https://github.com/MarlinFirmware/Marlin)** ⭐17,586 — C++
  全球装机量最大的 3D 打印机固件，机械与电子交叉领域的事实标准。
- **[OrcaSlicer/OrcaSlicer](https://github.com/OrcaSlicer/OrcaSlicer)** ⭐15,701 — C++
  多品牌切片（Bambu / Prusa / Voron / VzBot / Creality），AI 校准与高阶校准功能领先。
- **[Ultimaker/Cura](https://github.com/Ultimaker/Cura)** ⭐7,038 — Python
  行业标杆切片 GUI，Uranium 插件架构为第三方集成提供模板。
- **[maziggy/bambuddy](https://github.com/maziggy/bambuddy)** ⭐2,973 — Python
  Bambu Lab 自托管指挥中心，去云化 + 私有农场管理。
- **[Donkie/Spoolman](https://github.com/Donkie/Spoolman)** ⭐2,825 — Python
  3D 打印耗材库存管理，配合家庭/小作坊级制造数字化。
- **[manyfold3d/manyfold](https://github.com/manyfold3d/manyfold)** ⭐2,164 — Ruby
  自托管 3D 模型资产管理系统，类似"个人版 GrabCAD"。
- **[greghesp/ha-bambulab](https://github.com/greghesp/ha-bambulab)** ⭐2,338 — Python
  Bambu Lab 接入 Home Assistant，打通消费 3D 打印与智能家居自动化的关键桥。
- **[Sienci-Labs/gsender](https://github.com/Sienci-Labs/gsender)** ⭐369 — TypeScript
  开源 CNC 控制软件（grbl / grblHAL），桌面级铣削的事实标准之一。
- **[XRay3D/GERBER_X3](https://github.com/XRay3D/GERBER_X3)** ⭐255 — C++
  PCB 铣削 G-code 生成器，把"嘉立创/CNC 自制 PCB"流程工具化。

### 🔗 文件格式与互操作

- **[f3d-app/f3d](https://github.com/f3d-app/f3d)** ⭐4,699 — C++
  极简快速 3D 查看器，覆盖 STEP/STL/GLTF 等主流 CAD 与可视化格式。
- **[fougue/mayo](https://github.com/fougue/mayo)** ⭐2,201 — C++
  Qt + OpenCascade 构建的 CAD 查看器与转换器，桌面端 B-Rep 可视化利器。
- **[bldrs-ai/Share](https://github.com/bldrs-ai/Share)** ⭐186 — JavaScript
  浏览器端 BIM/CAD 协作平台，IFC/STEP/STL/GLTF 全支持，建筑与机械协同的云协作新范式。
- **[andymai/occt-wasm](https://github.com/andymai/occt-wasm)** ⭐53 — Rust
  OpenCascade 编译到 WebAssembly（~4MB brotli），TypeScript API + Web Worker —— 浏览器内运行完整 B-Rep 内核首次可用。
- **[lzpel/cadrum](https://github.com/lzpel/cadrum)** ⭐59 — Rust
  Rust CAD crate + 静态链接 OCCT，桌面与 WebAssembly 双端运行。
- **[andymai/brepjs](https://github.com/andymai/brepjs)** ⭐105 — TypeScript
  精确 B-Rep 几何的 Web CAD 库，让浏览器中的精确几何运算成为现实。
- **[NepomukWolf/IFC-Language-Server](https://github.com/NepomukWolf/IFC-Language-Server)** ⭐21 — Rust
  IFC / STEP 的 LSP 实现，把 CAD 文件变成 IDE 可识别的"代码"，是 BIM 工程化的全新交互形态。

### 🐍 Code-CAD 与脚本化

- **[CadQuery/cadquery](https://github.com/CadQuery/cadquery)** ⭐5,781 — Python
  基于 OCCT 的 Python 参数化 CAD 脚本框架，工业自动化与 LLM 友好度极高。
- **[gumyr/build123d](https://github.com/gumyr/build123d)** ⭐3,131 — Python
  继 CadQuery 之后更具表达力的 Python CAD 编程库，支持代数/位置/构建器三类范式。
- **[partcad/partcad](https://github.com/partcad/partcad)** ⭐493 — Python
  "可制造物理产品的包管理器"，把硬件设计文档标准化为 TDP（数字线程），AI 增强的全生命周期管理。
- **[NiJingzhe/SimpleCADAPI](https://github.com/NiJingzhe/SimpleCADAPI)** ⭐122 — Python
  面向语言模型的 agent-native CAD SDK，让 LLM 直接生成/检查/重建可编辑 3D 模型。
- **[pzfreo/draftwright](https://github.com/pzfreo/draftwright)** ⭐66 — Python
  build123d 与 STEP 文件的自动工程图生成，把"模型 → 2D 图纸

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*