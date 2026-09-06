# CAD/机械结构开源动态日报 2026-09-06

> 数据来源: GitHub Search API (101 仓库) | ArXiv cs.GR+cs.CG (0 篇论文) | RSS 新闻 (5 条) | 生成时间: 2026-09-06 02:23 UTC

---

# CAD/机械结构开源动态日报

**日期：2026 年 9 月 2 日** | 数据源：FreeCAD Blog、Prusa、Bambu Lab、OpenCASCADE、Hackaday、ArXiv cs.GR/cs.CG、GitHub

---

## 📌 今日速览

今日开源 CAD 与机械设计生态继续围绕 **AI 辅助建模** 与 **浏览器/Web 化 CAD 体验** 两条主线推进：FreeCAD、OpenSCAD、Rhino 等主流工具已涌现出多套成熟的 MCP（Model Context Protocol）服务器，让 LLM Agent 直接操控 CAD 内核；同时 OCCT 被编译为 WebAssembly，催生了 chili3d、brepjs、occt-wasm 等纯前端 B-Rep 工具。在 3D 打印侧，**PrusaSlicer 3.0 Preview** 与 **Bambu Lab IoT 安全一周年回顾** 释放出切片器架构升级与设备合规化两条信号。整体生态正从"本地 + 桌面"向"云端 + Agent + 跨平台"加速迁移。

---

##  行业脉搏

- **[WIP Wednesday, 2 September 2026 — FreeCAD Blog](https://blog.freecad.org/2026/09/02/wip-wednesday-2-september-2022026/)**：FreeCAD 开发进展周报，延续其活跃的开源迭代节奏，是追踪参数化建模内核演进的一手窗口。
- **[PrusaSlicer 3.0 Preview — Built for the Future of 3D Printing](https://blog.prusa3d.com/prusaslicer-3-0-preview-built-for-the-future-of-3d-printing_137672/)**：Prusa 发布 3.0 主版本预览，意味着切片器在多机型协同、AI 参数推荐、打印农场管理等能力上将有重大重构，影响整个消费级 FDM 切片生态。
- **[One Year On: Strengthening IoT Security through Global Certifications — Bambu Lab](https://blog.bambulab.com/one-year-on-strengthening-iot-security-through-global-certifications-and-community-collaboration/)**：Bambu Lab 回顾一年内获得的 IoT 安全国际认证，反映联网 3D 打印机在监管与隐私合规上的趋势。
- **[Meet the 2026 Bambu Lab School Ambassadors — Bambu Lab](https://blog.bambulab.com/meet-the-2026-bambu-lab-school-ambassadors/)**：Bambu 校园大使计划，表明厂商正系统化推进教育市场。
- **[Back-to-School 2026 Deals — Prusa Blog](https://blog.prusa3d.com/back-to-school-2026-deals-are-here_137792/)**：返校季促销，是硬件销售周期的市场风向标。

---

##  研究前沿

> ⚠️ 今日 ArXiv cs.GR / cs.CG 频道未抓取到新增论文。建议关注 OpenCASCADE / CGAL 官方仓库的 commit 与 OpenCASCADE 社区论坛，作为工业级几何内核研究的最近似替代信息源。

---

##  重点项目

### ️ CAD 平台与编辑器

- **[FreeCAD/FreeCAD](https://github.com/FreeCAD/FreeCAD)** ⭐ 33,298 · C++  
  开源参数化 3D 建模标杆，Part Design / Sketcher 工作流持续完善；本周 WIP Wednesday 显示其活跃迭代。
- **[openscad/openscad](https://github.com/openscad/openscad)** ⭐ 10,144 · C++  
  "程序员的实体建模器"，以代码描述几何，是 Code-CAD 范式的经典代表。
- **[xiangechen/chili3d](https://github.com/xiangechen/chili3d)** ⭐ 4,803 · TypeScript  
  纯浏览器运行的 3D CAD，依托 OCCT-WASM 路线，预示未来无安装 CAD 的形态。
- **[solvespace/solvespace](https://github.com/solvespace/solvespace)** ⭐ 4,141 · C++  
  参数化 2D/3D CAD，体量轻巧，适合运动学约束求解器研究。
- **[LibreCAD/LibreCAD](https://github.com/LibreCAD/LibreCAD)** ⭐ 6,332 · C++  
  跨平台 2D CAD，DXF/DWG 兼容性好，是桌面端 2D 设计的成熟选择。

### 📐 计算几何与内核

- **[CGAL/cgal](https://github.com/CGAL/cgal)**  6,034 · C++  
  计算几何算法库黄金标准，覆盖三角化、布尔运算、网格处理等核心能力。
- **[Open-Cascade-SAS/OCCT](https://github.com/Open-Cascade-SAS/OCCT)** ⭐ 2,838 · C++  
  开源 B-Rep 内核的事实标准，FreeCAD、CadQuery、Mayo、chili3d 等均以其为基础。
- **[MeshInspector/MeshLib](https://github.com/MeshInspector/MeshLib)** ⭐ 815 · C++  
  高性能网格布尔、修复、重网格化 SDK，对机械仿真前处理意义重大。
- **[polydera/trueform](https://github.com/polydera/trueform)** ⭐ 137 · C++  
  精确 CSG 与布尔运算引擎，提供 Python/TS 绑定，是新一代几何后端的有力候选。

###  创成式与参数化设计

- **[earthtojake/text-to-cad](https://github.com/earthtojake/text-to-cad)** ⭐ 14,455 · Python  
  "AI 技能库"形态的文本到 CAD 方案，关注 Agent 化 CAD 工作流者必看。
- **[Adam-CAD/CADAM](https://github.com/Adam-CAD/CADAM)** ⭐ 5,101 · TypeScript  
  开源 Text-to-CAD Web 应用，是该方向落地最快的开源前端。
- **[BelfrySCAD/BOSL2](https://github.com/BelfrySCAD/BOSL2)** ⭐ 2,344 · OpenSCAD  
  OpenSCAD 库的事实标准，大幅降低参数化建模的脚本成本。
- **[clay-good/anvilate](https://github.com/clay-good/anvilate)** ⭐ 7 · Python  
  面向机械工程师的本地优先设计 Agent，自然语言生成可编辑 STEP/DXF，方向值得关注。
- **[armpro24-blip/cad-cae-copilot](https://github.com/armpro24-blip/cad-cae-copilot)** ⭐ 56 · Python  
  AI 原生 CAD/CAE/CAX 工作台，基于 build123d + OCCT，融合拓扑指针与确定性评审。

### 🖨️ 3D 打印与制造

- **[MarlinFirmware/Marlin](https://github.com/MarlinFirmware/Marlin)** ⭐ 17,570 · C++  
  消费级 3D 打印机固件之王，覆盖绝大多数 8/32 位平台。
- **[OrcaSlicer/OrcaSlicer](https://github.com/OrcaSlicer/OrcaSlicer)** ⭐ 15,597 · C++  
  跨厂商切片器新势力，兼容 Bambu、Prusa、Voron 等热门机型。
- **[Ultimaker/Cura](https://github.com/Ultimaker/Cura)** ⭐ 7,031 · Python  
  老牌桌面切片器，Uranium 框架可扩展性极强。
- **[Sienci-Labs/gsender](https://github.com/Sienci-Labs/gsender)** ⭐ 366 · TypeScript  
  GRBL / grblHAL CNC 控制器，桥接消费级 CNC 与 PC 工作流。
- **[XRay3D/GERBER_X3](https://github.com/XRay3D/GERBER_X3)** ⭐ 253 · C++  
  PCB 铣削专用 G-code 准备工具，是"3D 打印 + 电子"创客场景的关键一环。

### 🔗 文件格式与互操作

- **[f3d-app/f3d](https://github.com/f3d-app/f3d)**  4,668 · C++  
  快速极简 3D 查看器，原生支持 STEP/IGES/STL/GLTF 等多格式。
- **[fougue/mayo](https://github.com/fougue/mayo)** ⭐ 2,145 · C++  
  基于 Qt + OpenCascade 的 CAD 查看与转换器，是 STEP 数据验证的重要工具。
- **[andymai/occt-wasm](https://github.com/andymai/occt-wasm)** ⭐ 49 · Rust  
  OCCT → WebAssembly 编译产物，体积仅 ~4MB brotli，是浏览器 CAD 革命的底层燃料。
- **[andymai/brepjs](https://github.com/andymai/brepjs)**  99 · TypeScript  
  基于精确 B-Rep 的 Web CAD 库，让前端做"真几何"成为可能。

### 🐍 Code-CAD 与脚本化

- **[CadQuery/cadquery](https://github.com/CadQuery/cadquery)** ⭐ 5,694 · Python  
  基于 OCCT 的 Python 参数化 CAD 脚本框架，工业级使用广泛。
- **[gumyr/build123d](https://github.com/gumyr/build123d)** ⭐ 3,025 · Python  
  新一代 Python CAD 编程库，语义更现代，正在快速取代 CadQuery 的部分用例。
- **[sgenoud/replicad](https://github.com/sgenoud/replicad)** ⭐ 680 · TypeScript  
  浏览器端基于代码的 3D 建模库，与 chili3d 路线互补。
- **[lzpel/cadrum](https://github.com/lzpel/cadrum)** ⭐ 56 · Rust  
  Rust + 静态链接 OCCT 的 CAD crate，可原生与 WASM 运行，潜力可观。
- **[ad-si/LuaCAD](https://github.com/ad-si/LuaCAD)** ⭐ 121 · Rust  
  Lua 脚本化的参数化建模，探索更轻量的 DSL 路线。
- **[neka-nat/freecad-mcp](https://github.com/neka-nat/freecad-mcp)** ⭐ 2,031 · Python  
  FreeCAD MCP 服务器，让 Claude / Cursor 等 Agent 直接操控 FreeCAD 模型。
- **[blwfish/freecad-mcp](https://github.com/blwfish/freecad-mcp)**  36 · Python  
  提供 32 个工具的 FreeCAD MCP 服务，覆盖建模全流程，是 MCP + CAD 范式的代表。
- **[tanishqbhattad/rhino-mcp](https://github.com/tanishqbhattad/rhino-mcp)** ⭐ 17 · C#  
  Rhino 8 的 MCP 桥接，提供 123 个工具，是建筑/工业设计 AI 化的标杆项目。

---

## 📈 生态趋势信号

"AI Agent × CAD"已成为本季度最显著的趋势：FreeCAD、Rhino 等桌面 CAD 通过 **MCP（Model Context Protocol）** 暴露工具集，使 LLM 能直接执行建模操作；同时 **text-to-cad**、**CAD Copilot**、**anvilate** 等项目用自然语言生成可编辑 STEP 文件，标志着创成式设计从"形状生成"走向"可制造、可参数化、可追溯"。底层上，**OCCT → WebAssembly** 的成熟让 chili3d、brepjs、occt-wasm 等纯前端 B-Rep 工具成为现实，CAD 体验正在脱离桌面束缚。打印端，Bambu Lab 一周年 IoT 安全白皮书则提示硬件生态正进入"合规驱动"新阶段。

---

##  值得关注

1. **[PrusaSlicer 3.0 Preview](https://blog.prusa3d.com/prusaslicer-3-0-preview-built-for-the-future-of-3d-printing_137672/)**  
   作为切片器领域最重大的主版本迭代，3.0 的架构与功能方向会直接影响 OrcaSlicer、Cura 等同类项目，建议跟进其 RC 路线图与新增 API。

2. **[cad-cae-copilot](https://github.com/armpro24-blip/cad-cae-copilot) 与 [anvilate](https://github.com/clay-good/anvilate)**  
   这两个项目代表了"AI 直接生成工业可用的 STEP/DXF + 可编辑 Python 源码"的最新尝试，是判断"Text-to-CAD 是否真正落地工业"的关键观测点。

3. **[andymai/occt-wasm](https://github.com/andymai/occt-wasm) 与 [xiangechen/chili3d](https://github.com/xiangechen/chili3d)**  
   浏览器内运行工业级 B-Rep 内核是过去十年 CAD 架构最重要的范式转变之一。一旦稳定，意味着未来 STEP 文件的全流程审阅、批注、协作都可在浏览器内完成。

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*