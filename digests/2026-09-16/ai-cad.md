# CAD/机械结构开源动态日报 2026-09-16

> 数据来源: GitHub Search API (105 仓库) | ArXiv cs.GR+cs.CG (14 篇论文) | RSS 新闻 (3 条) | 生成时间: 2026-09-16 02:50 UTC

---

# CAD/机械结构开源动态日报
**2026 年 9 月 11 日 · 周五**

---

## 一、今日速览

今日开源 CAD 生态持续呈现 **"AI × CAD" 深度耦合** 的明显信号：FreeCAD 官方周边商店与 WIP 周报双线推进，叠加 GitHub 上多款 FreeCAD MCP/AI 插件（neka-nat、ghbalf、spkane、blwfish）在 7 天内集中活跃更新；同时 3D 零件级生成（KaiNinja）、代码 CAD（vibe-cading、anvilate）与自然语言建模（Kiln）等"文本/智能体 → 实体几何"项目同步升温。学术端，"延迟光渲染"、"3D 高斯泼溅色彩压缩"等论文则把实时可视化与几何压缩推向新阶段。整体看，**几何内核（OCCT/CGAL）+ 智能体协议（MCP）+ 切片制造后端**正在形成新一轮开源 CAD 工具链的雏形。

---

## 二、行业脉搏

1. **FreeCAD 周边商店上线** — FreeCAD 基金会推出官方周边（[Swag Shop](https://blog.freecad.org/2026/09/11/freecad-swag-shop-now-open/)），标志着项目进入更成熟的社区运营阶段，也为后续众筹/赞助提供稳定入口。

2. **WIP Wednesday（9 月 9 日）** — [FreeCAD 博客汇总](https://blog.freecad.org/2026/09/09/wip-wednesday-9-september-2026/)了 Part Design、Sketcher、CAM 等模块的最新进展，意味着 FreeCAD 1.x 主线迭代持续推进，对长期使用者的 API 稳定性有参考价值。

3. **Bambu Lab：3D 打印 × 无障碍辅助** — [七家机构一个创客社区](https://blog.bambulab.com/seven-organizations-one-maker-community-3d-printing-in-the-service-of-accessibility/)展示了桌面 3D 打印在矫形辅具、视障工具、教育无障碍领域的真实落地，反映制造型开源硬件正从"原型玩具"走向"社会基础设施"。

---

## 三、研究前沿

1. **KaiNinja：将原生 3D 生成扩展到零件级** — [arxiv 2609.15659](http://arxiv.org/abs/2609.15659v2)
   把 TRELLIS.2 这类单网格生成器拆解为可组合部件，对机械 CAD 中"分件建模→装配"的工作流具有直接借鉴意义，是生成式 CAD 的关键一步。

2. **Delayed-Light Rendering for Superluminal Objects** — [arxiv 2609.16180](http://arxiv.org/abs/2609.16180v1)
   提出有限光速下超光速物体的实时渲染方法，对**机械装配可视化、运动机构仿真**中的相对运动表达有工程价值。

3. **Transforming Harmonic Coefficients for 3D Splat Compression** — [arxiv 2609.15735](http://arxiv.org/abs/2609.15735v1)
   针对 3D Gaussian Splatting 的颜色属性压缩，**显著降低大型扫描/逆向工程模型**的存储与传输成本，对扫描→CAD 链路有实用意义。

4. **Multi-Stage NeRF for 3D Coronary Artery Reconstruction** — [arxiv 2609.15550](http://arxiv.org/abs/2609.15550v1)
   仅用两幅窄角 X 光投影重建冠脉三维结构，是**医学影像→可编辑几何**的典型范式，对专用逆向建模流水线有参考价值。

5. **Greedy Packing of Nested Rings: Tribonacci Floor** — [arxiv 2609.15554](http://arxiv.org/abs/2609.15554v2)
   同宽环嵌套排样算法取得新的理论下界，对**CNC 板材/卷材下料、钣金套料**优化问题的算法层有直接启发。

---

## 四、重点项目

### 🖥️ CAD 平台与编辑器

- **[FreeCAD/FreeCAD](https://github.com/FreeCAD/FreeCAD)** ⭐ 33,553
  官方开源多平台参数化 3D 建模器，C++ 内核 + Python 工作台生态，长期是机械工程师的"开源 SolidWorks 替代"。

- **[openscad/openscad](https://github.com/openscad/openscad)** ⭐ 10,220
  程序员的实体建模语言；纯脚本描述几何，与 Git/CI 友好，是参数化件库与硬件开源协作的事实标准。

- **[pascalorg/editor](https://github.com/pascalorg/editor)** ⭐ 23,960
  开源 3D 建筑编辑器，本地 CLI + MCP 工具同时面向人与 AI agent，展示了"AI 原生 CAD 编辑器"的产品形态。

- **[KiCad/kicad-source-mirror](https://github.com/KiCad/kicad-source-mirror)** ⭐ 2,968
  开源 EDA 标杆，与 FreeCAD 等机械 CAD 通过 STEP/IDF 互操作，是机电一体设计的核心拼图。

- **[gumyr/build123d](https://github.com/gumyr/build123d)** ⭐ 3,115
  基于 OCCT 的现代 Python CAD 编程库，与 CadQuery 互补，强调面向工程项目的可读几何描述。

### 📐 计算几何与内核

- **[CGAL/cgal](https://github.com/CGAL/cgal)** ⭐ 6,047
  C++ 计算几何算法库的事实标准，覆盖三角剖分、布尔运算、网格生成等核心能力，是众多 CAD/CAM/CAE 项目的底座。

- **[pyvista/pyvista](https://github.com/pyvista/pyvista)** ⭐ 3,815
  基于 VTK 的 Python 3D 网格分析与可视化库，把有限元/网格数据接入 Jupyter 工作流，对仿真后处理非常友好。

- **[MeshInspector/MeshLib](https://github.com/MeshInspector/MeshLib)** ⭐ 822
  C++ 3D 几何处理 SDK：网格布尔、修复、简化、重网格、ICP 对齐，提供 Python/C#/JS 绑定，是网格修复流水线的核心组件。

- **[JeroenGar/sparrow](https://github.com/JeroenGar/sparrow)** ⭐ 354
  Rust 实现的不规则条带 2D 排样 SOTA，对钣金/裁剪/包装类排料优化具备工程级性能。

### 🧬 创成式与参数化设计

- **[BelfrySCAD/BOSL2](https://github.com/BelfrySCAD/BOSL2)** ⭐ 2,364
  OpenSCAD 生态最全面的扩展库，把常用附着件、铰链、紧固件等模块化，是 OpenSCAD 用户几乎必备的依赖。

- **[anvilate](https://github.com/clay-good/anvilate)** ⭐ 7
  本地优先的机械设计智能体：自然语言→经过物理校验的 STEP/DXF，输出可直接进入 CATIA/SolidWorks/NX，是"LLM × 工程 CAD"路线的新代表。

- **[vibe-cading](https://github.com/fa-mc/vibe-cading)** ⭐ 7
  基于 CadQuery 的面向人与 LLM agent 的 3D 模型生成器，把代码 CAD 封装为低门槛工作流。

### 🖨️ 3D 打印与制造

- **[UVtools](https://github.com/sn4k3/UVtools)** ⭐ 1,620
  MSLA/DLP 光固化切片领域的事实标准工具箱：文件分析、修复、转换、操作，覆盖树脂打印全流程。

- **[Sienci-Labs/gsender](https://github.com/Sienci-Labs/gsender)** ⭐ 369
  Grbl/grblHAL CNC 的开箱即用控制软件，对桌面铣削用户门槛极低，是开源 CAM 终端的代表性项目。

- **[Kiln](https://github.com/codeofaxel/Kiln)** ⭐ 59
  3D 打印领域的 MCP 服务器：AI agent 直接完成"建模→切片→打印"全链路，覆盖 Klipper、Marlin、OctoPrint、Bambu/Prusa/Creality 等主流后端。

- **[XRay3D/GERBER_X3](https://github.com/XRay3D/GERBER_X3)** ⭐ 254
  PCB Gerber → CNC 铣削 G-code 转换器，桥接电子设计与桌面制造，是机电一体原型制造的实用工具。

### 🔗 文件格式与互操作

- **[CadQuery/cadquery](https://github.com/CadQuery/cadquery)** ⭐ 5,772
  基于 OCCT 的 Python 参数化 CAD 脚本框架；可输出 STEP/STL，是"代码 → 可制造几何"的标杆。

- **[f3d-app/f3d](https://github.com/f3d-app/f3d)** ⭐ 4,695
  极简高性能 3D 查看器，原生支持 STEP/IGES/STL/3MF，是桌面与 CI 流水线的快速检视工具。

- **[fougue/mayo](https://github.com/fougue/mayo)** ⭐ 2,189
  基于 Qt + OCCT 的 CAD 查看与转换器，长生命周期项目，适合企业级 STEP 审阅与转换流水线。

- **[bldrs-ai/Share](https://github.com/bldrs-ai/Share)** ⭐ 186
  浏览器端 BIM/CAD 协作查看器，支持 IFC/STEP/STL/OBJ/GLTF，是 AEC 场景下"轻量化云端 CAD"的代表方案。

- **[andymai/brepjs](https://github.com/andymai/brepjs)** ⭐ 105
  浏览器端精确 B-Rep 几何 Web 库；为前端 STEP 编辑、参数化预览打开了空间。

- **[lzpel/cadrum](https://github.com/lzpel/cadrum)** ⭐ 59
  Rust CAD 库，静态链接、无头 OCCT，原生 + WASM 双端运行，是把 OCCT 引入 WebAssembly 的轻量实现。

### 🐍 Code-CAD 与脚本化

- **[earthtojake/text-to-cad](https://github.com/earthtojake/text-to-cad)** ⭐ 15,913
  CAD/CAE/CAM 智能体技能库，聚合了大量"自然语言/草图 → 几何"的工具集，是 agent-native CAD 生态的入口项目。

- **[neka-nat/freecad-mcp](https://github.com/neka-nat/freecad-mcp)** ⭐ 2,359
  FreeCAD 的 Model Context Protocol 服务器，让 Claude/Cursor 等 LLM 直接驱动 FreeCAD 建模。

- **[ghbalf/freecad-ai](https://github.com/ghbalf/freecad-ai)** ⭐ 497
  FreeCAD 内的 AI 助手工作台，自然语言生成 3D 模型，与 MCP 类项目形成"内置+外置"两条路线。

- **[partcad/partcad](https://github.com/partcad/partcad)** ⭐ 493
  制造业"包管理器"思路：把可制造的物理产品当作可版本化、可依赖管理的工件，连接设计→采购→制造的数字主线。

- **[shaise/FreeCAD_SheetMetal](https://github.com/shaise/FreeCAD_SheetMetal)** ⭐ 342
  FreeCAD 的钣金工作台，是补齐 FreeCAD 制造特性短板的关键扩展之一。

- **[spkane/freecad-addon-robust-mcp-server](https://github.com/spkane/freecad-addon-robust-mcp-server)** ⭐ 230
  FreeCAD 的 Robust MCP 服务器 + Bridge 工作台，更偏向企业级稳定接入。

- **[NiJingzhe/SimpleCADAPI](https://github.com/NiJingzhe/SimpleCADAPI)** ⭐ 120
  面向 LLM 的"agent-native" CAD SDK：让语言模型可创建、检查、重建可编辑的 3D 模型，是 Code-CAD × Agent 趋势的底层接口代表。

---

## 五、生态趋势信号

三条主线在今天同时放大：**MCP 协议正在成为 CAD 的"USB-C"** —— 7 天内 FreeCAD、3D 打印、文本建模三端不约而同接入 MCP，预示 agent 化将成为开源 CAD 工具链的标配；**OCCT / CGAL 的 WASM 化加速浏览器端精确几何** —— cadrum、brepjs、occt-wasm 等让浏览器不再是"只看不动"的终端，而有望演化为可编辑的轻量 CAD；**生成式 CAD 从"单网格"走向"零件级 + 可制造"** —— KaiNinja、vibe-cading、anvilate、text-to-cad 等共同把"AI 出图"从视觉玩具推进到 STEP/Brep 可制造交付。新闻端的"无障碍 3D 打印"则提醒我们：开源制造工具的真正价值在于解决真实工程与社会问题。

---

## 六、值得关注

1. **[text-to-cad](https://github.com/earthtojake/text-to-cad) × [anvilate](https://github.com/clay-good/anvilate) × [SimpleCADAPI](https://github.com/NiJingzhe/SimpleCADAPI)** — 三个项目共同指向"agent-native CAD"赛道：前者提供技能库、中者负责 STEP 输出、后者提供 LLM 友好的 CAD SDK，建议持续关注它们在 STEP/装配树/约束求解上的进展，这将是 2026–2027 年开源 CAD 最值得跟踪的范式。

2. **[Kiln](https://github.com/codeofaxel/Kiln) + [Sienci-Labs/gsender](https://github.com/Sienci-Labs/gsender) + [GERBER_X3](https://github.com/XRay3D/GERBER_X3)** — 制造执行层正在 MCP 化与浏览器化两端同时进展，一旦与 FreeCAD/CadQuery 上游打通，将显著压缩"机械工程师→实物原型"的

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*