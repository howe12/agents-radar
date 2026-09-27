# CAD/机械结构开源动态日报 2026-09-27

> 数据来源: GitHub Search API (116 仓库) | ArXiv cs.GR+cs.CG (0 篇论文) | RSS 新闻 (4 条) | 生成时间: 2026-09-27 03:05 UTC

---

# CAD/机械结构开源动态日报

> 数据来源：行业新闻 + ArXiv 论文 + GitHub 活跃仓库

---

## 📌 今日速览

今日生态呈现两条主线：一方面，**CAD 与 AI 融合**持续加速——FreeCAD 生态涌现多个 MCP Server 与 AI Workbench，Pascal Org Editor、earthtojake/text-to-cad 等"AI 原生"CAD 项目热度攀升；另一方面，**硬件 + 软件协同发布**仍是焦点，Bambu Lab 推出 R1 大幅面新品，配套生态 bambuddy、ha-bambulab、OrcaSlicer 等正在同步适配。Prusa 与 Factorio 的合作显示模型分享社区正向"游戏化与品牌化"延伸。研究侧 ArXiv cs.GR/cs.CG 今日无新增论文，但开源仓库的更新密度（116 个活跃项目）说明工程实务的前沿仍在工具链打磨层面。

---

## 📰 行业脉搏

1. **[FreeCAD WIP Wednesday (9月23日)](https://blog.freecad.org/2026/09/23/wip-wednesday-23-september-2026/)** — FreeCAD 每周开发进度汇总，涉及 Part Design、Assembly、Sketcher 等核心模块的最新提交，是把握开源 CAD 内核演进的最佳窗口。

2. **[Tutorial: Lofting between Parts with Facebinders](https://blog.freecad.org/2026/09/21/tutorial-lofting-between-parts-with-facebinders/)** — 利用 Facebinder 在两个零件之间做放样（Loft），是 FreeCAD 1.x 系列对复杂过渡面建模能力的官方解读，对钣金衔接、过渡件设计有直接价值。

3. **[Bambu Lab Launches R1](https://blog.bambulab.com/big-job-light-work-bambu-lab-launches-r1/)** — Bambu 推出"Big Job. Light Work."定位的 R1 系列，主打大尺寸/大幅面 3D 打印，将带动切片软件、固件、本地化工具链（bambuddy、ha-bambulab、OrcaSlicer）的同步适配。

4. **[Factorio Has Arrived on Printables](https://blog.prusa3d.com/factorio-has-arrived-on-printables_138519/)** — Prusa Printables 引入 Factorio 主题专区，反映 3D 打印内容生态正向"游戏 IP + 用户社区"模式延伸，模型即流量的运营路径愈发明显。

---

## 🔬 研究前沿

> ⚠️ 今日 ArXiv **cs.GR / cs.CG** 暂无新增论文。建议关注昨日或近期缓存，重点跟踪以下方向：
>
> - **几何建模算法**（曲面重建、B-Rep 简化、布尔运算鲁棒性）
> - **神经 CAD / 文本到 CAD**（与今日 GitHub 多 Agent CAD 项目互为印证）
> - **生成式拓扑优化 / 晶格局部化**（往往落在 cs.CE 或 cs.LG 版块）

在论文缺位的日子，建议直接阅读以下开源实现来跟进前沿：
- [`polydera/trueform`](https://github.com/polydera/trueform)（⭐146）— 精确布尔与 CSG 引擎
- [`artem-ogre/CDT`](https://github.com/artem-ogre/CDT)（⭐1,451）— 约束 Delaunay 三角剖分
- [`andymai/occt-wasm`](https://github.com/andymai/occt-wasm)（⭐57）— WebAssembly 版 OpenCascade

---

## 🚀 重点项目

### 🖥️ CAD 平台与编辑器

- **[FreeCAD/FreeCAD](https://github.com/FreeCAD/FreeCAD)** ⭐33,777 · C++
  开源多平台参数化 3D 建模器的事实标准；近期对 Sketcher、Toponaming 持续重构，是 Windows/Linux 工程桌面端的首选。

- **[pascalorg/editor](https://github.com/pascalorg/editor)** ⭐24,328 · TypeScript
  开源 3D 建筑编辑器，原生支持本地 CLI + MCP 工具，面向"人类 + AI Agent"双工作流，是 Bim/CAD 上云的标杆。

- **[earthtojake/text-to-cad](https://github.com/earthtojake/text-to-cad)** ⭐16,402 · Python
  把 CAD/CAE/CAM 能力封装为 AI Agent Skills，是当下 LLM 调用 CAD 的重要入口，与 FreeCAD MCP 共同构成"AI 工程师"工具链。

- **[openscad/openscad](https://github.com/openscad/openscad)** ⭐10,305 · C++
  程序员的实体 3D CAD，建模逻辑完全代码化；与 build123d / CadQuery 形成"代码 CAD"三足鼎立。

- **[Leozide/leocad](https://github.com/leozide/leocad)** ⭐2,877 · C++
  LEGO 虚拟建模专用 CAD，展示了小众细分市场也能跑出长尾开源生态。

### 📐 计算几何与内核

- **[CGAL/cgal](https://github.com/CGAL/cgal)** ⭐6,056 · C++
  计算几何领域的"百科全书库"，覆盖三角化、布尔、曲面重建、运动规划，机械设计与机器人仿真的底层依赖。

- **[polydera/trueform](https://github.com/polydera/trueform)** ⭐146 · C++
  快速、精确的网格布尔（CSG）引擎，提供 Python 与 TypeScript 绑定，是"代码 CAD + 鲁棒布尔"痛点的近期最佳答案。

- **[iShape-Rust/iOverlay](https://github.com/iShape-Rust/iOverlay)** ⭐211 · Rust
  Rust 实现的 2D 多边形布尔运算，支持自相交处理，是浏览器端 2D CAD 内核的新兴选项。

- **[locationtech/jts](https://github.com/locationtech/jts)** ⭐2,237 · Java
  Java 拓扑套件，路径规划 / GIS 与 CAD 之间几何语义转换的常备工具。

### 🧬 创成式与参数化设计

- **[CadQuery/cadquery](https://github.com/CadQuery/cadquery)** ⭐5,843 · Python
  基于 OCCT 的 Python 参数化 CAD 脚本框架，让工程师用代码"装配"零件，是 Code-CAD 流水线的旗舰。

- **[gumyr/build123d](https://github.com/gumyr/build123d)** ⭐3,212 · Python
  面向"拓扑装配思维"的 Python CAD 库，与 build123d 一起正在重塑参数化建模教学生态。

- **[BelfrySCAD/BOSL2](https://github.com/BelfrySCAD/BOSL2)** ⭐2,377 · OpenSCAD
  OpenSCAD 的"标准库"，含丰富遮罩、附加件、布尔助手，是 OpenSCAD 派项目不可或缺的搭子。

- **[Pan-Chera/Multi-Agent-CAD](https://github.com/Pan-Chera/Multi-Agent-CAD)** ⭐1,006 · Python
  解耦的"多 Agent 文本到 CAD"框架，受约束的测试时算力分配，对 LLM 生成可制造几何的最新探索。

- **[partcad/partcad](https://github.com/partcad/partcad)** ⭐497 · Python
  面向可制造物理产品的"包管理器"，主张 TDP/Digital Thread；与 STEP/3MF 互通，是硬件 BOM 化的开源尝试。

### 🖨️ 3D 打印与制造

- **[MarlinFirmware/Marlin](https://github.com/MarlinFirmware/Marlin)** ⭐17,596 · C++
  桌面级 3D 打印机的事实固件标准，生态覆盖 8/32 位 MCU。

- **[OrcaSlicer/OrcaSlicer](https://github.com/OrcaSlicer/OrcaSlicer)** ⭐15,784 · C++
  支持 Bambu / Prusa / Voron / Creality 等几乎所有主流机型的开源切片软件，与 Bambu R1 推出节奏密切联动。

- **[Ultimaker/Cura](https://github.com/Ultimaker/Cura)** ⭐7,046 · Python
  基于 Uranium 框架的切片 GUI 老牌代表，企业与教育市场保有率高。

- **[Sienci-Labs/gsender](https://github.com/Sienci-Labs/gsender)** ⭐372 · TypeScript
  开源 GRBL / grblHAL CNC 控制器桌面端，把 CNC 软件栈拉到可被小型工作室独立维护的位置。

- **[maziggy/bambuddy](https://github.com/maziggy/bambuddy)** ⭐3,013 · Python
  自托管的 Bambu Lab 控制中心，去云化、打印农场化，配合 R1 等大尺寸机型方向契合。

### 🔗 文件格式与互操作

- **[f3d-app/f3d](https://github.com/f3d-app/f3d)** ⭐4,726 · C++
  极速极简的 3D 几何 / STEP / glTF 查看器，作为跨 CAD 系统的"轻客户端"已成事实标准。

- **[bldrs-ai/Share](https://github.com/bldrs-ai/Share)** ⭐188 · JavaScript
  浏览器端 BIM/CAD 查看与协作平台，支持 IFC/STEP/STL/OBJ/glTF，对 Web 化交付链路意义重大。

- **[andymai/brepjs](https://github.com/andymai/brepjs)** ⭐113 · TypeScript
  纯 Web 端精确 B-Rep 几何库，让"网页即可做精确 CAD"成为可能，对在线协作 + Agent CAD 是关键拼图。

- **[andymai/occt-wasm](https://github.com/andymai/occt-wasm)** ⭐57 · Rust → WASM
  OpenCascade 编译为 WebAssembly，仅 ~4MB brotli，是浏览器侧承载工业级几何内核的代表方案。

### 🐍 Code-CAD 与脚本化

- **[gumyr/build123d](https://github.com/gumyr/build123d)** ⭐3,212 · Python — 同上，技术写作与工程交付两栖。
- **[CadQuery/cadquery](https://github.com/CadQuery/cadquery)** ⭐5,843 · Python — 同上，参数化 + STEP 直出工厂级模型。
- **[nophead/NopSCADlib](https://github.com/nophead/NopSCADlib)** ⭐1,636 · OpenSCAD — 完整零件库 + 项目框架，适合机电一体化快速原型。
- **[ad-si/LuaCAD](https://github.com/ad-si/LuaCAD)** ⭐125 · Rust — 用 Lua 写参数化 CAD，新语言绑定趋势的小型示例。
- **[pzfreo/draftwright](https://github.com/pzfreo/draftwright)** ⭐68 · Python — 从 build123d / STEP 自动出工程图，弥补 Code-CAD"制图缺位"的痛点。

---

## 🌐 生态趋势信号

AI 与 CAD 的耦合正在从"插件式"走向"协议化"：FreeCAD MCP、blwfish/freecad-mcp（32 工具）、earthtojake/text-to-cad、codeofaxel/Kiln、Pan-Chera/Multi-Agent-CAD 共同把"自然语言 → 可编辑模型"这一链路工程化。同时，**浏览器作为新 CAD 客户端**的形态日益成熟——andymai/occt-wasm + brepjs + bldrs-ai/Share + pascalorg/editor 把 OCCT 这类工业级内核带到了 WebAssembly 上，配合 MCP 与 Agent 协议，本地、协作、AI 三栈合流。在制造侧，**Bambu R1 的大幅面定位**正在重新激活切片软件、控制台、家庭自动化的开源链条；OrcaSlicer、Marlin、bambuddy、ha-bambulab 形成一个新的"少云、可控、可扩展"阵营。Code-CAD 方面，build123d / CadQuery / draftwright 已经组成"建模 → 导出 STEP → 自动出图"的 Python 流水线雏形，预示着机械工程师的工作流向 Jupyter + Git +

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*