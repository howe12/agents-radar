# CAD/机械结构开源动态日报 2026-09-14

> 数据来源: GitHub Search API (116 仓库) | ArXiv cs.GR+cs.CG (0 篇论文) | RSS 新闻 (4 条) | 生成时间: 2026-09-14 02:52 UTC

---

# CAD/机械结构开源动态日报

**日期：** 2026-09-11

---

## 📰 今日速览

今日开源 CAD/制造领域呈现三大主线：**FreeCAD 生态持续繁荣**——周边商店正式上线、新 Microwave Workbench 进入视野，配合持续活跃的 AI-MCP 桥接项目（freecad-mcp、freecad-ai、SimpleCADAPI），FreeCAD 正成为"LLM-CAD 集成"事实标准平台；**Web 端 CAD 内核快速成熟**——OCCT-WASM、brepjs、Chili3D、Pascal Editor 等项目从不同路径（精确 B-Rep、纯浏览器 TS、内核编译）推动"零安装"CAD 体验；**生成式设计走向"端到端"落地**——anvilate、Kiln、vibe-cading 等项目把"自然语言→参数化 STEP/G-code→真实制造"链路打通，工业可用性显著提升。3D 打印侧，Prusa ColorMix 以五卷耗材复现 45 色，标志着家用多色打印的成本结构正在被重新定义。

---

##  行业脉搏

- **[FreeCAD Swag Shop Now Open!](https://blog.freecad.org/2026/09/11/freecad-swag-shop-now-open/)** — FreeCAD 周边商店正式开放。意义：开源项目商业化变现路径进一步走通，象征社区规模与品牌成熟度迈上新台阶。
- **[Spotted: A new Microwave Workbench](https://blog.freecad.org/2026/09/08/spotted-a-new-microwave-workbench/)** — FreeCAD 出现面向高频/微波（RF/微波器件）设计的全新 Workbench。意义：将仿真驱动的工作台从结构力学扩展到电磁域，对天线、滤波器、射频封装等设计社区具吸引力。
- **[Prusament PLA ColorMix](https://blog.prusa3d.com/prusament-pla-colormix-print-45-color-shades-using-just-five-filament-spool-and-more_137835/)** — 仅用 5 卷耗材即可混色打印 45 个色阶。意义：颠覆传统多色打印对多台挤出/换料系统的依赖，重塑消费级 FDM 的多色成本曲线。
- **[WIP Wednesday, 9 September 2026](https://blog.freecad.org/2026/09/09/wip-wednesday-9-september-2026/)** — FreeCAD 核心开发周报。意义：稳定反映上游开发节奏，是评估 FreeCAD 1.x / 后续版本演进的窗口。

---

## 🔬 研究前沿

> **注：** 今日 cs.GR / cs.CG 暂无可收录新论文。但仓库生态中涌现了大量"几何算法+AI 代理"的研究级工程实践（见下方项目与趋势分析），建议关注 OpenCASCADE、CGAL、build123d、brepjs 等项目近一周的 commit/issue 动向，作为对学术论文的补充信号。

---

## ️ 重点项目

### 🖥️ CAD 平台与编辑器

- **[FreeCAD/FreeCAD](https://github.com/FreeCAD/FreeCAD)** 33,491  
  开源多平台参数化 3D 建模器事实标准。是工作台扩展、SheetMetal、Assembly、FEM 等生态的母体。

- **[LibreCAD/LibreCAD](https://github.com/LibreCAD/LibreCAD)** 6,361  
  跨平台 2D CAD（DXF/DWG）。机械制图与工程图纸环节的低成本替代品。

- **[QCAD](https://github.com/qcad/qcad)** ⭐1,878  
  开源 2D CAD，支持 DXF 与可选 DWG。适合作为机械平面图纸的轻量引擎。

- **[xiangechen/chili3d](https://github.com/xiangechen/chili3d)** 4,832  
  纯浏览器 3D CAD。是 Web 端原生 CAD 的代表项目之一，零安装可协作。

- **[pascalorg/editor](https://github.com/pascalorg/editor)** ⭐23,881  
  开源 3D 建筑编辑器，原生支持 CLI、MCP、AI 代理工作流。"AI + BIM"双轨范式。

### 📐 计算几何与内核

- **[CGAL/cgal](https://github.com/CGAL/cgal)** 6,041  
  C++ 计算几何算法库。Mesh、曲面、Delaunay、布尔等基础组件，仍是研究/工业 B-Rep 的"地基"。

- **[MeshInspector/MeshLib](https://github.com/MeshInspector/MeshLib)** ⭐821  
  3D 网格布尔、修复、抽稀、重网格化、点云 ICP 配准 SDK，多语言绑定。CAD→打印的中游关键件。

- **[fougue/mayo](https://github.com/fougue/mayo)** 2,177  
  基于 Qt + OpenCascade 的 3D CAD 查看/转换器。STEP/IGES 转换与预览的成熟方案。

- **[f3d-app/f3d](https://github.com/f3d-app/f3d)** 4,690  
  极简快速的 3D 查看器。对 STEP/STL/3MF 等多格式即时预览友好。

- **[andymai/brepjs](https://github.com/andymai/brepjs)** ⭐102  
  浏览器端精确 B-Rep CAD 库。把 OCCT 语义带到 Web，是"Web-native CAD"的算法基础。

- **[lzpel/cadrum](https://github.com/lzpel/cadrum)** ⭐59  
  Rust 编写的 CAD 静态链接+Headless OCCT，支持 WASM。Rust 生态 CAD 引擎的新尝试。

- **[andymai/occt-wasm](https://github.com/andymai/occt-wasm)** ⭐51  
  OpenCascade 编译到 WebAssembly，~4MB brotli，提供 TypeScript API 与 Worker 支持。Web 端精确建模内核的关键拼图。

- **[gkjohnson/three-mesh-bvh](https://github.com/gkjohnson/three-mesh-bvh)** 3,485  
  three.js BVH 加速与空间查询库。Web 端网格加速的事实标准。

- **[pyvista/pyvista](https://github.com/pyvista/pyvista)** ⭐3,812  
  Python 端 3D 可视化与网格分析。是科研/CAD 流水线的可视化层。

### 🧬 创成式与参数化设计

- **[clay-good/anvilate](https://github.com/clay-good/anvilate)** ⭐7  
  本地优先机械设计 Agent：自然语言描述→物理校验→参数化 STEP/DXF，可直入 CATIA/SolidWorks/NX。标志"LLM 直接交付工业文件"的成熟度跃迁。

- **[BelfrySCAD/BOSL2](https://github.com/BelfrySCAD/BOSL2)** ⭐2,363  
  OpenSCAD 通用附加库（形状/掩码/操作器）。参数化建模生态的中流砥柱。

- **[codeofaxel/Kiln](https://github.com/codeofaxel/Kiln)** ⭐57  
  面向 3D 打印的 MCP 服务器：AI Agent 直接设计→切片→驱动 Bambu/Klipper/Marlin 等多品牌打印。"一句话打印"的工程级实现。

- **[fa-mc/vibe-cading](https://github.com/fa-mc/vibe-cading)** ⭐7  
  基于 CadQuery 的 3D 模型生成器，面向 LLM Agent 工作流。

- **[earthtojake/text-to-cad](https://github.com/earthtojake/text-to-cad)** ⭐15,610  
  CAD/CAE/CAM 的 Agent Skill 库。生成式设计走向可复用工具的标志。

- **[NiJingzhe/SimpleCADAPI](https://github.com/NiJingzhe/SimpleCADAPI)** ⭐117  
  面向语言模型的"Agent-native CAD SDK"，支持创建、检视与重建可编辑 3D 模型。

- **[gumyr/build123d](https://github.com/gumyr/build123d)** ⭐3,101  
  Python 编程式 CAD 库。是 Code-CAD 进化的代表，与 CadQuery 并称两大现代 Python CAD 流派。

### 🖨️ 3D 打印与制造

- **[MarlinFirmware/Marlin](https://github.com/MarlinFirmware/Marlin)** ⭐17,579  
  RepRap 3D 打印机固件。8/32 位 MCU 通吃，商业机型装机率最高。

- **[OrcaSlicer/OrcaSlicer](https://github.com/OrcaSlicer/OrcaSlicer)** ⭐15,681  
  支持 Bambu/Prusa/Voron 等多品牌的 G-code 切片器。多色与 AMS 工作流领先。

- **[Sienci-Labs/gsender](https://github.com/Sienci-Labs/gsender)** ⭐369  
  grbl/grblHAL CNC 控制软件。把低门槛 CNC 体验带入桌面制造。

- **[XRay3D/GERBER_X3](https://github.com/XRay3D/GERBER_X3)** ⭐254  
  PCB 铣削 G-code 准备工具，可输出至 PDF。电子—机械一体化的小巧但关键工具。

- **[Slicer/Slicer](https://github.com/Slicer/Slicer)** ⭐2,626  
  跨平台科学可视化与图像计算平台。在医学/科研 3D 打印场景中是事实标准。

- **[Sienci-Labs/Resources](https://github.com/Sienci-Labs/Resources)** 12  
  CNC 维护/装配/G-code/CAM 软件资料合集。教育性资料，适合新手入门。

### 🔗 文件格式与互操作

- **[partcad/partcad](https://github.com/partcad/partcad)** ⭐493  
  制造业"包管理器"，目标是成为可制造物理产品的文档标准（Digital Thread/TDP）。AI 增强的硬件生命周期工具。

- **[bldrs-ai/Share](https://github.com/bldrs-ai/Share)** ⭐186  
  浏览器端 BIM/CAD 查看与协作平台，支持 IFC/STEP/STL/OBJ/GLTF。

- **[pzfreo/draftwright](https://github.com/pzfreo/draftwright)** ⭐66  
  build123d/STEP 文件自动生成工程图。填补 Code-CAD 流水线中"制图输出"的空白。

- **[trailcode/EzyCad](https://github.com/trailcode/EzyCad)** ⭐18  
  基于 OpenGL+ImGui+OCCT 的现代 CAD 应用原型。

- **[NepomukWolf/IFC-Language-Server](https://github.com/NepomukWolf/IFC-Language-Server)** ⭐21  
  IFC STEP 文件的 LSP 实现，给编辑器提供 schema 级诊断、跳转、补全。BIM 工作流的 IDE 化。

### 🐍 Code-CAD 与脚本化

- **[CadQuery/cadquery](https://github.com/CadQuery/cadquery)** ⭐5,761  
  基于 OCCT 的 Python 参数化脚本 CAD 框架。Code-CAD 主流方案之一。

- **[neka-nat/freecad-mcp](https://github.com/neka-nat/freecad-mcp)** ⭐2,259  
  FreeCAD 的 MCP 服务器，让 LLM 直接操控 FreeCAD 进行建模。

- **[ghbalf/freecad-ai](https://github.com/ghbalf/freecad-ai)** ⭐491  
  FreeCAD 内的 AI 助手工作台，自然语言生成 3D 模型。

- **[blwfish/freecad-mcp](https://github.com/blwfish/freecad-mcp)** ⭐44  
  又一 FreeCAD MCP 实现，提供 32 个 AI 辅助建模工具。

- **[jupytercad/JupyterCAD](https://github.com/jupytercad/JupyterCAD)** ⭐233  
  JupyterLab 内的协作式 3D 几何建模扩展。Notebook 与 CAD 融合的典范。

- **[openscad/openscad](https://github.com/openscad/openscad)** ⭐10,206  
  "程序员的实体 3D CAD 建模器"，CSG 经典路线代表。

- **[shaise/FreeCAD_SheetMetal](https://github.com/shaise/FreeCAD_SheetMetal)** ⭐342  
  FreeCAD 钣金工作台，薄板件设计的实用扩展。

---

## 🌐 生态趋势信号

**AI Agent 与 CAD 的深度耦合**已成为本周最显著的趋势——FreeCAD 生态一周内至少出现两个 MCP 实现（neka-nat、blwfish）与一个 AI 工作台（ghbalf），加上 SimpleCADAPI、text-to-cad、Kiln、vibe-cading、anvilate 等项目，从"自然语言→参数化 STEP/G-code"的整条链路被打通，**"LLM 直接交付可制造工业文件"**已不再是概念。

**Web 端精确建模内核走向工程化**：OCCT-WASM、brepjs、cadrum（Rust+WASM）、Chili3D、Pascal Editor 等项目从不同路线把 OpenCascade/B-Rep 语义带进浏览器，意味着未来 CAD 工具可能不再需要本地安装即可提供工业级精度。

**3D 打印走向"自托管与去云化"**：Bambuddy（Bambu Lab 自托管）、mainsail（Klipper Web UI）、Spoolman（本地耗材库存）、ha-bambulab（HA 集成）等项目共同反映出制造者社区对**数据主权与本地化**的偏好。

**生成式设计从"形态生成"走向"工程化交付"**：anvilate 强调"物理校验+可直接进入 CATIA/SolidWorks"、draftwright 强调自动出图、Kiln 强调端到端制造，揭示行业从炫技阶段进入"工程级落地"阶段。

---

## ⭐ 值得关注

1. **[anvilate](https://github.com/clay-good/anvilate)**  
   虽然 Star 不多，但代表"自然语言→物理校验→工业 STEP"链路的关键节点。若其 STEP 兼容性、DXF 转换与物理校验（应力/干涉）能力经得住工业验证，将重塑中小机械团队的"概念→图纸"流程，是生成式机械设计的早期里程碑。

2. **[OCCT-WASM 生态](https://github.com/andymai/occt-wasm) + [brepjs](https://github.com/andymai/brepjs)**  
   同一作者贡献的"Web 端精确 B-Rep 内核+语义库"组合，是 Web-native CAD 能否进入工业可用区的关键底座。Chili3D、Pascal Editor 等上层 Web CAD 项目的天花板将由这一层决定。

3. **FreeCAD × MCP 集群（freecad-mcp × 2 + freecad-ai + SimpleCADAPI）**  
   FreeCAD 在一周内同时涌出多个并行 AI 桥接方案，反映其作为 LLM-CAD 集成平台的"事实标准"地位正在形成。短期内很可能形成统一/分化的格局，建议同步关注其标准化进展（工具描述、错误反馈、Undo/Redo 语义），这将是 Agent-CAD 协议的雏形。

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*