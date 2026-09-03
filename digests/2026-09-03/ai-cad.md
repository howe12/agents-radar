# CAD/机械结构开源动态日报 2026-09-03

> 数据来源: GitHub Search API (110 仓库) | ArXiv cs.GR+cs.CG (0 篇论文) | RSS 新闻 (4 条) | 生成时间: 2026-09-03 02:31 UTC

---

# CAD/机械结构开源动态日报

**日期**：2026 年 8 月 28 日 | **编辑视角**：CAD 与机械设计

---

## 1. 今日速览

FreeCAD 迎来革命性更新——History Workbench 将 Git 引入 CAD 文件版本管理，工程师可以像写代码一样管理模型迭代史。PrusaSlicer 3.0 预览版发布，标志着切片软件进入下一代架构。今日 GitHub 生态中 **Text-to-CAD 与 AI Agent 方向持续爆发**（earthtojake/text-to-cad ⭐14k、CADAM ⭐5k、cad-cae-copilot 等），同时 **Code-CAD 与 WebAssembly 内核**（build123d、CadQuery、occt-wasm、brepjs、cadrum）形成第二增长极，3D 打印切片端则有 OrcaSlicer、Marlin 等持续活跃。ArXiv cs.GR/cs.CG 今日无新论文提交。

---

## 2. 行业脉搏

| # | 动态 | 来源 | 意义 |
|---|------|------|------|
| 1 | **History Workbench brings Git powered File Versioning to FreeCAD** | [FreeCAD Blog](https://blog.freecad.org/2026/08/28/history-workbench-brings-git-powered-file-versioning-to-freecad/) | Git 式版本控制首次深度集成进 CAD 主线，解决参数化模型"改一处炸一处"的协作痛点，是工程数字化协作的关键基础设施 |
| 2 | **PrusaSlicer 3.0 Preview – Built for the Future of 3D Printing** | [Prusa Blog](https://blog.prusa3d.com/prusaslicer-3-0-preview-built-for-the-future-of-3d-printing_137672/) | 大版本预告意味着底层架构重构，可能涉及多色/多材料算法、AI 切片、Web/云端协同 |
| 3 | **Bambu Lab: One Year On – strengthening IoT Security through Global Certifications and Community Collaboration** | [Bambu Lab Blog](https://blog.bambulab.com/one-year-on-strengthening-iot-security-through-global-certifications-and-community-collaboration/) | 闭源打印机在 IoT 安全合规上的进展，与开源切片/固件生态形成对照，值得跟踪 |
| 4 | **Meet the 2026 Bambu Lab School Ambassadors** | [Bambu Lab Blog](https://blog.bambulab.com/meet-the-2026-bambu-lab-school-ambassadors/) | 行业生态向教育渗透，3D 打印 + CAD 在 K12/高校进一步普及 |

---

## 3. 研究前沿

⚠️ **今日 ArXiv cs.GR / cs.CG 无新增论文。** 建议关注持续火热的 Text-to-CAD、AI 辅助几何重建（神经隐式、B-Rep 生成）以及 WebAssembly 几何内核方向，相关进展通常以开源代码仓库（见下文）形式先于论文发布。

---

## 4. 重点项目

### 🖥️ CAD 平台与编辑器

- **[FreeCAD/FreeCAD](https://github.com/FreeCAD/FreeCAD)** — ⭐33,216 | C++
  开源多平台参数化 3D 建模器的事实标准，零件设计/装配/工程图全流程覆盖，是个人工程师与中小企业的默认起点。

- **[openscad/openscad](https://github.com/openscad/openscad)** — ⭐10,105 | C++
  程序员友好的实体建模器，用代码描述几何，可重复、可版本化，是 Code-CAD 文化原点。

- **[solvespace/solvespace](https://github.com/solvespace/solvespace)** — ⭐4,133 | C++
  轻量参数化 2D/3D CAD，支持约束求解，运动副仿真能力强，适合教学与小型机构设计。

- **[LibreCAD/LibreCAD](https://github.com/LibreCAD/LibreCAD)** — ⭐6,318 | C++
  跨平台 2D CAD，DXF/DWG 读写完善，机械工程图与替代 AutoCAD LT 的开源方案。

- **[leozide/leocad](https://github.com/leozide/leocad)** — ⭐2,849 | C++
  虚拟乐高 CAD，体现"专业领域+CAD"垂直应用的样貌，可借鉴的领域建模思路。

- **[pascalorg/editor](https://github.com/pascalorg/editor)** — ⭐21,837 | TypeScript
  Web 端 3D 建筑项目编辑器，反映建筑 CAD 在浏览器侧的产品形态演进。

### 📐 计算几何与内核

- **[Open-Cascade-SAS/OCCT](https://github.com/Open-Cascade-SAS/OCCT)** — ⭐2,830 | C++
  开源 3D CAD/CAM/CAE 平台级几何内核，FreeCAD、CadQuery、build123d 等众多工具的底层基石。

- **[CGAL/cgal](https://github.com/CGAL/cgal)** — ⭐6,031 | C++
  计算几何算法库（Delaunay、曲面重建、布尔等），CAD/物理仿真/地理信息通用底层。

- **[mikedh/trimesh](https://github.com/mikedh/trimesh)** — ⭐3,663 | Python
  Python 三角网格处理的事实标准，与 CAD 模型到打印网格的转换链路紧密相关。

- **[gkjohnson/three-mesh-bvh](https://github.com/gkjohnson/three-mesh-bvh)** — ⭐3,471 | JavaScript
  three.js 网格 BVH 加速，空间查询/光线投射/碰撞，支撑 Web 端 CAD 可视化实时性。

- **[MeshInspector/MeshLib](https://github.com/MeshInspector/MeshLib)** — ⭐813 | C++
  3D 几何处理 SDK：网格布尔、修复、抽稀、重网格、点云三角化、ICP，多语言绑定。

- **[pyvista/pyvista](https://github.com/pyvista/pyvista)** — ⭐3,792 | Python
  基于 VTK 的 3D 可视化与网格分析，对工程仿真结果可视化尤为友好。

### 🧬 创成式与参数化设计

- **[earthtojake/text-to-cad](https://github.com/earthtojake/text-to-cad)** — ⭐14,172 | Python
  "CAD/CAE/CAM 的 Agent 技能库"，为 LLM Agent 提供调用 CAD 内核的接口规范，是 AI+CAD 生态的枢纽。

- **[Adam-CAD/CADAM](https://github.com/Adam-CAD/CADAM)** — ⭐5,080 | TypeScript
  开源 Text-to-CAD Web 应用，把自然语言生成几何模型变成可在线体验的产品。

- **[armpro24-blip/cad-cae-copilot](https://github.com/armpro24-blip/cad-cae-copilot)** — ⭐55 | Python
  AI 原生 CAD/CAE/CAX 工作台：Text-to-CAD / Text-to-CAE、build123d+OCCT 真实几何、可编辑参数、稳定拓扑指针、确定性评审 + MCP 工具。

- **[clay-good/anvilate](https://github.com/clay-good/anvilate)** — ⭐6 | Python
  本地优先机械设计 Agent：自然语言→物理验证过的参数化 STEP/DXF，导出兼容 SolidWorks/NX/AutoCAD，并附可编辑 Python 源码。

- **[tanishqbhattad/rhino-mcp](https://github.com/tanishqbhattad/rhino-mcp)** — ⭐17 | C#
  Rhino 8 MCP 服务器，123 个工具覆盖体量、拱顶、PDF 描图等，对建筑建模场景尤其完善。

- **[codeofaxel/Kiln](https://github.com/codeofaxel/Kiln)** — ⭐52 | Python
  3D 打印 MCP 服务器：让 Claude/Codex/Cursor 直接驱动 Bambu、Prusa、Klipper、Marlin 全流程。

- **[partcad/partcad](https://github.com/partcad/partcad)** — ⭐492 | Python
  面向"可制造物理产品"的包管理器 + 数字主线（DTI/TDP），AI 增强的全生命周期工作流。

- **[blwfish/freecad-mcp](https://github.com/blwfish/freecad-mcp)** — ⭐36 | Python
  FreeCAD MCP 服务器，32 个工具让 LLM 直接生成/修改 3D 几何，是 FreeCAD+AI 的代表性接入。

### 🖨️ 3D 打印与制造

- **[MarlinFirmware/Marlin](https://github.com/MarlinFirmware/Marlin)** — ⭐17,562 | C++
  全球装机量最大的 RepRap 固件，8/32 位 MCU 全覆盖，开源 3D 打印生态的"事实标准"。

- **[OrcaSlicer/OrcaSlicer](https://github.com/OrcaSlicer/OrcaSlicer)** — ⭐15,566 | C++
  新一代 G-code 生成器，支持 Bambu、Prusa、Voron、VzBot、RatRig、Creality 多平台，社区迭代速度领先。

- **[Ultimaker/Cura](https://github.com/Ultimaker/Cura)** — ⭐7,029 | Python
  开源切片 GUI，基于 Uranium 框架，桌面 3D 打印工作流的事实前端之一。

- **[maziggy/bambuddy](https://github.com/maziggy/bambuddy)** — ⭐2,896 | Python
  自托管 Bambu Lab 控制中心，去云化方案，满足数据合规与打印农场管理需求。

- **[Donkie/Spoolman](https://github.com/Donkie/Spoolman)** — ⭐2,765 | Python
  3D 打印耗材库存管理，对打印农场与多人协作必备。

- **[mainsail-crew/mainsail](https://github.com/mainsail-crew/mainsail)** — ⭐2,205 | Vue
  Klipper 固件的流行 Web 前端，体现 3D 打印 UI 向 Web 化迁移。

- **[makerspet/oomwoo](https://github.com/makerspet/oomwoo)** — ⭐10,101 | Python
  开源真空扫地机器人，整机结构+嵌入式+固件一体的"产品级"开源硬件范例。

- **[manyfold3d/manyfold](https://github.com/manyfold3d/manyfold)** — ⭐2,150 | Ruby
  自托管 3D 模型资产管理平台，对个人/工作室模型库管理友好。

### 🔗 文件格式与互操作

- **[f3d-app/f3d](https://github.com/f3d-app/f3d)** — ⭐4,665 | C++
  快速极简 3D 查看器，跨平台、命令行友好，工程师日常快速预览 STEP/IGES/STL 的利器。

- **[fougue/mayo](https://github.com/fougue/mayo)** — ⭐2,143 | C++
  Qt + OpenCascade 构建的 3D CAD 查看/转换器，工业级 STEP 阅读与格式转换。

- **[sgenoud/replicad](https://github.com/sgenoud/replicad)** — ⭐677 | TypeScript
  浏览器内通过代码构建 3D 模型的库，把 OCCT 能力搬到 Web。

- **[andymai/occt-wasm](https://github.com/andymai/occt-wasm)** — ⭐49 | Rust
  OpenCascade 编译为 WebAssembly，~4MB brotli、TypeScript API、Worker 支持，是浏览器 CAD 的底层基建。

- **[andymai/brepjs](https://github.com/andymai/brepjs)** — ⭐96 | TypeScript
  Web 端精确 B-Rep 几何库，配合 occt-wasm 提供前端 CAD 能力。

- **[lzpel/cadrum](https://github.com/lzpel/cadrum)** — ⭐56 | Rust
  用静态链接、无头 OCCT 构建的 Rust CAD crate，原生 + WebAssembly 双端运行。

- **[bldrs-ai/Share](https://github.com/bldrs-ai/Share)** — ⭐186 | JavaScript
  浏览器 BIM/CAD 协作平台，支持 IFC/STEP/STL/OBJ/GLTF，反映建筑 CAD 在协作方向的产品形态。

- **[FriendsOfCADability/CADability](https://github.com/FriendsOfCADability/CADability)** — ⭐176 | C#
  纯 .NET 3D 建模与几何分析库，自带交互 UI，STEP/STL/DXF 互通。

- **[GitHubDragonFly/GitHubDragonFly.github.io](https://github.com/GitHubDragonFly/GitHubDragonFly.github.io)** — ⭐48 | HTML
  浏览器侧超全 3D/图像格式查看器，覆盖 STEP/IGES/IFC/BREP/3MF 等几十种格式。

### 🐍 Code-CAD 与脚本化

- **[CadQuery/cadquery](https://github.com/CadQuery/cadquery)** — ⭐5,681 | Python
  基于 OCCT 的 Python 参数化 CAD 脚本框架，工程师用 Python 写零件、装配、导出 STEP。

- **[gumyr/build123d](https://github.com/gumyr/build123d)** — ⭐2,992 | Python
  新一代 Python CAD 编程库，代数/构造子混合范式，参数化与拓扑变更鲁棒性显著提升。

- **[BelfrySCAD/BOSL2](https://github.com/BelfrySCAD/BOSL2)** — ⭐2,341 | OpenSCAD
  OpenSCAD 库的事实标准，附件丰富、文档完善，让 OpenSCAD 工程级使用成为可能。

- **[BelfrySCAD/BelfrySCAD](https://github.com/BelfrySCAD/BelfrySCAD)** — ⭐6 | Python
  OpenSCAD + WYSIWYG 的混合过程式 CAD 系统，探索代码与 GUI 融合的路径。

- **[ad-si/LuaCAD](https://github.com/ad-si/LuaCAD)** — ⭐119 | Rust
  用 Lua 进行参数化 CAD 建模，新兴语言绑定扩展了 Code-CAD 生态。

- **[

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*