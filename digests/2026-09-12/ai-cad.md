# CAD/机械结构开源动态日报 2026-09-12

> 数据来源: GitHub Search API (106 仓库) | ArXiv cs.GR+cs.CG (0 篇论文) | RSS 新闻 (4 条) | 生成时间: 2026-09-12 02:37 UTC

---

# CAD/机械结构开源动态日报

**日期：2026 年 9 月 11 日**

---

## 一、今日速览

今日 CAD 与机械设计开源生态呈现两大主轴：**AI 与 CAD 的深度耦合**（FreeCAD MCP 服务器家族已成系列化产品，覆盖 freecad-mcp、freecad-ai、Kiln、cad-cae-copilot 等十余个项目），以及 **WebAssembly + OCCT 浏览器端 B-Rep 编辑**走向实用化（occt-wasm、brepjs、chili3d、cadrum 共同验证了"无安装、纯前端"的 CAD 路径）。FreeCAD 周边持续高频更新，新增 Microwave Workbench 等工作台扩展；Prusa 推出 PLA ColorMix 五卷料实现 45 色方案，为开源 3D 打印耗材的色彩管理提供新思路。ArXiv cs.GR / cs.CG 今日暂无新论文，但 GitHub 端的几何处理库（CGAL、PyVista、Meshes.jl、three-mesh-bvh）持续活跃。

---

## 二、行业脉搏

| # | 动态 | 来源 | 意义 |
|---|------|------|------|
| 1 | **FreeCAD Swag Shop 正式开放** | [FreeCAD Blog](https://blog.freecad.org/2026/09/11/freecad-swag-shop-now-open/) | 社区商业化路径探索迈出实质一步，有助于提升基金会可持续性与品牌辨识度 |
| 2 | **WIP Wednesday #36（9 月 9 日）** | [FreeCAD Blog](https://blog.freecad.org/2026/09/09/wip-wednesday-9-september-2026/) | 主线开发节奏稳定，Sketcher / Part Design / Assembly 等核心模块持续打磨 |
| 3 | **新增 Microwave Workbench** | [FreeCAD Blog](https://blog.freecad.org/2026/09/08/spotted-a-new-microwave-workbench/) | 微波/射频仿真工作台浮现，标志 FreeCAD 向多物理场领域延伸 |
| 4 | **Prusament PLA ColorMix：五卷料打出 45 色** | [Prusa Blog](https://blog.prusa3d.com/prusament-pla-colormix-print-45-color-shades-using-just-five-filament-spools-and-more_137835/) | 通过混色算法降低耗材库存成本，为小型工坊及家庭用户的色彩管理提供经济方案 |

---

## 三、研究前沿

> ⚠️ **今日 ArXiv cs.GR / cs.CG 频道无新增论文。** 不过开源仓库层面已有多项与图形学/几何处理高度相关的活跃项目值得关注（详见第四节"重点项目"中的"📐 计算几何与内核"分类）：
> - [CGAL/cgal](https://github.com/CGAL/cgal) — 计算几何算法库经典范本
> - [pyvista/pyvista](https://github.com/pyvista/pyvista) — 基于 VTK 的 Python 3D 可视化
> - [gkjohnson/three-mesh-bvh](https://github.com/gkjohnson/three-mesh-bvh) — three.js 网格加速光线投射
> - [JuliaGeometry/Meshes.jl](https://github.com/JuliaGeometry/Meshes.jl) — Julia 科学计算几何
> - [iShape-Rust/iOverlay](https://github.com/iShape-Rust/iOverlay) — 高性能 2D 多边形布尔运算

---

## 四、重点项目

### 🖥️ CAD 平台与编辑器

- **[FreeCAD/FreeCAD](https://github.com/FreeCAD/FreeCAD)** — ⭐ 33,435 · 跨平台开源参数化 3D 建模器的事实标准，工作台架构为仿真/CAM/钣金/MCP 扩展提供统一底座
- **[pascalorg/editor](https://github.com/pascalorg/editor)** — ⭐ 23,642 · 开源 3D 建筑编辑器，原生支持本地 CLI 与 MCP 工具，面向"人 + AI 代理"协作工作流
- **[openscad/openscad](https://github.com/openscad/openscad)** — ⭐ 10,193 · "程序员的实体建模器"，DSL 路线标杆，对参数化、可重复构建场景意义重大
- **[LibreCAD/LibreCAD](https://github.com/LibreCAD/LibreCAD)** — ⭐ 6,350 · 跨平台 2D CAD，DXF/DWG 双向兼容，是 2D 工程图纸生态的基础设施
- **[xiangechen/chili3d](https://github.com/xiangechen/chili3d)** — ⭐ 4,828 · 完全运行在浏览器中的 3D CAD，进一步验证 WebAssembly 路线可行性
- **[dune3d/dune3d](https://github.com/dune3d/dune3d)** — ⭐ 2,071 · 轻量化 3D CAD，独立实现约束求解器与几何内核，适合嵌入式/小团队场景

### 📐 计算几何与内核

- **[CGAL/cgal](https://github.com/CGAL/cgal)** — ⭐ 6,037 · 计算几何算法库业界事实标准，Delaunay、布尔运算、最短路径等算法一应俱全
- **[pyvista/pyvista](https://github.com/pyvista/pyvista)** — ⭐ 3,809 · 基于 VTK 的 Python 网格可视化与分析库，CAE 与科研仿真前后处理利器
- **[gkjohnson/three-mesh-bvh](https://github.com/gkjohnson/three-mesh-bvh)** — ⭐ 3,484 · three.js BVH 加速结构，为 Web 端实时几何查询（拾取、碰撞、布尔）提供底层支撑
- **[iShape-Rust/iOverlay](https://github.com/iShape-Rust/iOverlay)** — ⭐ 209 · 高性能 Rust 2D 多边形布尔运算库，对 Web GIS / PCB / 排样至关重要
- **[mourner/robust-predicates](https://github.com/mourner/robust-predicates)** — ⭐ 341 · 鲁棒几何谓词，复杂浮点边界场景下保证数值稳定性的"安全垫"

### 🧬 创成式与参数化设计

- **[earthtojake/text-to-cad](https://github.com/earthtojake/text-to-cad)** — ⭐ 15,369 · CAD/CAE/CAM 智能体技能库，将 LLM 接入工程设计的"中间层标准"
- **[armpro24-blip/cad-cae-copilot](https://github.com/armpro24-blip/cad-cae-copilot)** — ⭐ 59 · AI-native CAD/CAE/CAX 工作台，文本生成可编辑 build123d/OpenCASCADE 几何
- **[clay-good/anvilate](https://github.com/clay-good/anvilate)** — ⭐ 7 · 本地优先的机械设计代理，输出经物理校验、可直入 CATIA/SolidWorks/NX 的 STEP/DXF
- **[BelfrySCAD/BOSL2](https://github.com/BelfrySCAD/BOSL2)** — ⭐ 2,359 · OpenSCAD 大型库，几乎让 OpenSCAD 升级为"高级参数化语言"
- **[autonomous-ai/autonomous-workshop](https://github.com/autonomous-ai/autonomous-workshop)** — ⭐ 12 · 让 AI "白日做梦"式持续发明新玩具/游戏，探索生成式工程的极致形态

### 🖨️ 3D 打印与制造

- **[codeofaxel/Kiln](https://github.com/codeofaxel/Kiln)** — ⭐ 56 · 面向 AI 代理的 3D 打印 MCP 服务器，打通 Bambu / Prusa / Klipper / OctoPrint 全链路
- **[sn4k3/UVtools](https://github.com/sn4k3/UVtools)** — ⭐ 1,620 · MSLA/DLP 文件分析、修复、转换一站式工具，树脂机用户的必备工具
- **[Sienci-Labs/gsender](https://github.com/Sienci-Labs/gsender)** — ⭐ 367 · grbl / grblHAL CNC 统一控制台，DIY 雕刻机/铣床软件栈代表
- **[rudra496/cnc](https://github.com/rudra496/cnc)** — ⭐ 4 · 纯浏览器 3 轴 CNC 仿真器，基于 Next.js + Three.js + react-three-fiber，教育场景价值突出
- **[caiannello/jsVoronoiPCB](https://github.com/caiannello/jsVoronoiPCB)** — ⭐ 59 · 将 PCB 位图转为 Voronoi 镶嵌 G-code，激光雕刻优化降本

### 🔗 文件格式与互操作

- **[CadQuery/cadquery](https://github.com/CadQuery/cadquery)** — ⭐ 5,746 · 基于 OCCT 的 Python 参数化脚本框架，是 Code-CAD 路线的旗舰项目
- **[fougue/mayo](https://github.com/fougue/mayo)** — ⭐ 2,155 · Qt + OpenCascade 桌面端 CAD 查看/转换器，STEP/IGES 互操作利器
- **[bldrs-ai/Share](https://github.com/bldrs-ai/Share)** — ⭐ 186 · 浏览器端 BIM/CAD 协作查看器，原生支持 IFC/STEP/STL/OBJ/glTF
- **[FriendsOfCADability/CADability](https://github.com/FriendsOfCADability/CADability)** — ⭐ 178 · 纯 .NET 3D 建模类库，STEP/STL/DXF 互通，无第三方依赖
- **[lzpel/cadrum](https://github.com/lzpel/cadrum)** — ⭐ 59 · Rust CAD 库，静态链接无头 OCCT，原生 + WebAssembly 双端运行
- **[andymai/occt-wasm](https://github.com/andymai/occt-wasm)** — ⭐ 51 · OCCT 编译为 ~4MB brotli 的 WASM，提供清洁 TypeScript API，是浏览器 B-Rep 的关键拼图
- **[andymai/brepjs](https://github.com/andymai/brepjs)** — ⭐ 101 · Web CAD 精确 B-Rep 几何库，与 occt-wasm 配套形成完整前端栈

### 🐍 Code-CAD 与脚本化

- **[gumyr/build123d](https://github.com/gumyr/build123d)** — ⭐ 3,090 · 现代化 Python CAD 编程库，吸取 OpenSCAD/CadQuery 经验，语义更清晰
- **[neka-nat/freecad-mcp](https://github.com/neka-nat/freecad-mcp)** — ⭐ 2,173 · FreeCAD Model Context Protocol 服务器，是 LLM ↔ FreeCAD 双向通信的事实参考实现
- **[ghbalf/freecad-ai](https://github.com/ghbalf/freecad-ai)** — ⭐ 483 · 自然语言生成 3D 模型的 AI 工作台，让 FreeCAD 支持"对话式建模"
- **[NiJingzhe/SimpleCADAPI](https://github.com/NiJingzhe/SimpleCADAPI)** — ⭐ 114 · 为 LLM 而生的 CAD SDK，创建/检视/重建可编辑的复杂 3D 模型
- **[pzfreo/draftwright](https://github.com/pzfreo/draftwright)** — ⭐ 64 · 自动为 build123d / STEP 文件生成技术图纸，填补 Code-CAD 出图自动化空白
- **[JupyterCAD/JupyterCAD](https://github.com/jupytercad/JupyterCAD)** — ⭐ 233 · JupyterLab 中的协作式 3D 几何建模扩展，把 CAD 引入数据科学工作流

---

## 五、生态趋势信号

**AI-Native CAD 正在形成标准接口层。** 围绕 FreeCAD 的 MCP 服务器家族（neka-nat、spkane、blwfish、sandraschi 等多个 fork 并存迭代）说明"LLM 工具调用 →

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*