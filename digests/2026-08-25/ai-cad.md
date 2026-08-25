# CAD/机械结构开源动态日报 2026-08-25

> 数据来源: GitHub Search API (113 仓库) | ArXiv cs.GR+cs.CG (0 篇论文) | RSS 新闻 (5 条) | 生成时间: 2026-08-25 00:54 UTC

---

# CAD/机械结构开源动态日报
**2026-08-21**

---

## 一、今日速览

今日 FreeCAD 生态持续高热：FreeCAD Blog 连发三篇动态，包括 OSHOP 2026 与 KiCad 的 CAD 对决、Q3 资助计划截止提醒以及 WIP Wednesday 进展追踪。消费级 3D 打印端，Prusa 旗舰二代 CORE One+ INDX 已正式开售并交付，Bambu Lab 则借 HelixCore 旋钮爆款聚焦创客生态。GitHub 活跃仓库方面，AI × CAD 融合（MCP/自然语言生成模型）与 Web 原生 CAD（WASM + OCCT）成为最显著的两条主线，FreeCAD/FreeCAD 主仓库依旧稳坐头名，freecad-mcp 类工具进入爆发期。ArXiv cs.GR/cs.CG 今日无新增论文。

---

## 二、行业脉搏

1. **【活动】FreeCAD 与 KiCad：OSHOP 2026 上的开源 CAD 对决**
   [原文链接](https://blog.freecad.org/2026/08/21/freecad-and-kicad-cad-showdown-at-oshop-2026/)
   意义：两个核心开源 CAD/EDA 项目同台亮相，标志着机械-电子协同的开源工作流走向成熟，对跨领域（机械 + PCB）一体化设计的关注者尤为重要。

2. **【资助】FreeCAD Q3 2026 资助计划截止临近**
   [原文链接](https://blog.freecad.org/2026/08/20/q3-2026-grant-program-deadline-approaching/)
   意义：直接影响 FreeCAD 路线图的资金来源，对开源贡献者和下游用户都是重要的"窗口期"信号。

3. **【进展】WIP Wednesday, 19 August 2026**
   [原文链接](https://blog.freecad.org/2026/08/19/wip-wednesday-19-august-2026/)
   意义：例行滚动播报开发进度，是追踪 FreeCAD 短周期迭代与新工作台（BIM、装配、PartDesign）变化的第一手渠道。

4. **【硬件】Prusa CORE One+ (Gen 2) INDX 开始发货，整机接受预订**
   [原文链接](https://blog.prusa3d.com/prusa-core-one-gen-2-indx-shipping-has-started-complete-printers-open-for-orders_137623/)
   意义：旗舰 CORE One 第二代正式进入量产交付阶段，反映高端封闭式 FDM 在 INDX（工业级）方向的产品线扩张，对小型车间与工作室用户具有采购参考价值。

5. **【人物】Yun Goo 与病毒式传播的 HelixCore 旋钮（Bambu Lab）**
   [原文链接](https://blog.bambulab.com/yun-goo-the-man-behind-the-viral-helixcore-spinner/)
   意义：创客社区的"现象级单品"案例，揭示打印生态中"小而美"机械结构件的市场潜力，也展示了用户共创内容对硬件销售的放大效应。

---

## 三、研究前沿

> ⚠️ 今日 ArXiv cs.GR / cs.CG 分类下未采集到新论文，故本节略过。建议后续关注 ACM SIGGRAPH、IEEE VIS 以及 arXiv 中 *cs.CG*、*cs.GR*、*cs.MS* 标签的稳定检索。

---

## 四、重点项目

### 🖥️ CAD 平台与编辑器

1. **[FreeCAD/FreeCAD](https://github.com/FreeCAD/FreeCAD)** — ⭐33,055
   官方源码，跨平台开源参数化 3D 建模器。开源 CAD 的事实标杆，社区与工业用户基础最广。

2. **[xiangechen/chili3d](https://github.com/xiangechen/chili3d)** — ⭐4,765
   浏览器端 3D CAD。Web 原生体验降低了学习与部署门槛。

3. **[solvespace/solvespace](https://github.com/solvespace/solvespace)** — ⭐4,114
   参数化 2D/3D CAD，体积小、约束求解强，适合教学与机电轻量场景。

4. **[openscad/openscad](https://github.com/openscad/openscad)** — ⭐10,010
   程序员导向的实体建模语言，文本→几何工作流的代表，3D 打印社区的事实标准之一。

5. **[LibreCAD/LibreCAD](https://github.com/LibreCAD/LibreCAD)** — ⭐6,276
   2D CAD，DXF/DWG 全兼容，适合图纸与机械制图工作流。

### 📐 计算几何与内核

6. **[CGAL/cgal](https://github.com/CGAL/cgal)** — ⭐6,021
   计算几何算法库，工业级可靠性，是几何处理研究的"基础设施"。

7. **[Open-Cascade-SAS/OCCT](https://github.com/Open-Cascade-SAS/OCCT)** — ⭐2,796
   开源 3D CAD/CAM/CAE 平台，B-Rep 内核的工业级参考实现，几乎所有严肃 Code-CAD 都依赖它。

8. **[pyvista/pyvista](https://github.com/pyvista/pyvista)** — ⭐3,783
   基于 VTK 的 Python 3D 可视化与网格分析，为科研与工程仿真提供高阶抽象。

9. **[mikedh/trimesh](https://github.com/mikedh/trimesh)** — ⭐3,655
   Python 三角网格处理库，STL/3MF/STEP 网格化后处理的利器，常用于打印预处理与仿真前处理。

10. **[MeshInspector/MeshLib](https://github.com/MeshInspector/MeshLib)** — ⭐807
    C++ 网格处理库，修复、布尔、网格质量评估，与 CAD 网格工作流衔接紧密。

### 🧬 创成式与参数化设计

11. **[connorkapoor/geofield-bracket](https://github.com/connorkapoor/geofield-bracket)** — ⭐44
    SE(3)-等变场模型 + 沉浸式 FEA，给定箱体与载荷输出可制造的支架，体现"几何 + 物理 + 可制造性"联合学习的工程价值。

12. **[clay-good/anvilate](https://github.com/clay-good/anvilate)** — ⭐6
    本地优先的机械设计 Agent，自然语言→参数化 STEP/DXF，可直接对接到 CATIA/SolidWorks/NX/AutoCAD 工作流。

13. **[fa-mc/vibe-cading](https://github.com/fa-mc/vibe-cading)** — ⭐5
    CadQuery 驱动的 3D 模型生成器，为 LLM Agent 提供稳定接口，是"vibe coding"在 CAD 领域的早期落地。

14. **[partcad/partcad](https://github.com/partcad/partcad)** — ⭐487
    面向可制造物理产品的"包管理器"与数字主线标准，为参数化硬件的复用与协作提供基础设施。

### 🖨️ 3D 打印与制造

15. **[MarlinFirmware/Marlin](https://github.com/MarlinFirmware/Marlin)** — ⭐17,550
    主流 3D 打印机固件，覆盖 8/32 位 MCU，是大量商业打印机的底层。

16. **[OrcaSlicer/OrcaSlicer](https://github.com/OrcaSlicer/OrcaSlicer)** — ⭐15,480
    多品牌 G-code 生成器，跨 Bambu/Prusa/Voron/VzBot 等生态的核心切片入口。

17. **[Ultimaker/Cura](https://github.com/Ultimaker/Cura)** — ⭐7,019
    老牌开源切片 GUI，基于 Uranium 框架，在桌面端切片软件中长期占主导地位。

18. **[gumyr/build123d](https://github.com/gumyr/build123d)** — ⭐2,911
    Python CAD 编程库，新一代面向 OCCT 的 code-CAD，对参数化与拓扑表达进行了现代化重构。

19. **[Sienci-Labs/gsender](https://github.com/Sienci-Labs/gsender)** — ⭐365
    grbl / grblHAL CNC 控制前端，是桌面 CNC 生态最活跃的开源 GUI 之一。

20. **[XRay3D/GERBER_X3](https://github.com/XRay3D/GERBER_X3)** — ⭐253
    Gerber→G-code 的 PCB 铣削转换工具，桥接 EDA 与 CNC 制造。

### 🔗 文件格式与互操作

21. **[f3d-app/f3d](https://github.com/f3d-app/f3d)** — ⭐4,650
    极速、轻量的 3D 查看器，覆盖 STEP/STL/3MF/IFC/GLTF 等主流格式，适合工程与展示。

22. **[andymai/brepjs](https://github.com/andymai/brepjs)** — ⭐90
    精确 B-Rep 几何的 Web CAD 库，让浏览器获得与 OCCT 同级的实体建模能力。

23. **[andymai/occt-wasm](https://github.com/andymai/occt-wasm)** — ⭐45
    OCCT 编译到 WebAssembly，提供干净的 TS API，是 Web 端精确 CAD 的"内核侧"基础设施。

25. **[lzpel/cadrum](https://github.com/lzpel/cadrum)** — ⭐54
    静态链接、无头 OCCT 的 Rust CAD crate，原生与 WASM 双端运行。

26. **[YATSKOVSKYI/cadcore](https://github.com/YATSKOVSKYI/cadcore)** — ⭐33
    纯 Rust 实现的 CAD 几何内核：B-Rep 拓扑 + 解析曲面 + O(N) 扫描体 + STEP AP203 导出，绕开 OCCT 与 C++。

27. **[sgenoud/replicad](https://github.com/sgenoud/replicad)** — ⭐673
    TypeScript 浏览器端建模库，让 STEP/OCCT 风格的工作流进入前端。

### 🐍 Code-CAD 与脚本化

28. **[CadQuery/cadquery](https://github.com/CadQuery/cadquery)** — ⭐5,649
    基于 OCCT 的 Python 参数化脚本框架，是 Code-CAD 阵营的旗舰。

29. **[neka-nat/freecad-mcp](https://github.com/neka-nat/freecad-mcp)** — ⭐1,890
    FreeCAD 的 MCP（Model Context Protocol）服务器，让大模型可直接调用 FreeCAD 完成建模。

30. **[ghbalf/freecad-ai](https://github.com/ghbalf/freecad-ai)** — ⭐434
    FreeCAD 的 AI 工作台，自然语言→3D 模型的早期实践。

31. **[blwfish/freecad-mcp](https://github.com/blwfish/freecad-mcp)** — ⭐32
    32 个 AI 辅助 3D CAD 建模工具的 MCP 服务。

32. **[codeofaxel/Kiln](https://github.com/codeofaxel/Kiln)** — ⭐48
    面向 3D 打印的 MCP 服务器，把设计→切片→打印全流程接入 AI 客户端。

33. **[tanishqbhattad/rhino-mcp](https://github.com/tanishqbhattad/rhino-mcp)** — ⭐16
    Rhino 8 的 MCP 服务器，115 个 AI 工具覆盖建模、视口、材质、PDF 描图等。

34. **[adam-CAD/CADAM](https://github.com/Adam-CAD/CADAM)** — ⭐5,013
    开源的 text-to-CAD Web 应用。

35. **[earthtojake/text-to-cad](https://github.com/earthtojake/text-to-cad)** — ⭐13,850
    CAD/CAE/CAM Agent 技能库，自然语言驱动几何生成的"基础设施"。

---

## 五、生态趋势信号

从今日素材可以读出三条相互交织的趋势线：**第一，AI × CAD 加速融合**——MCP 协议在 FreeCAD、Rhino、3D 打印切片（Bambu/Klipper/Marlin）端密集落地，自然语言→STEP/OpenSCAD/CadQuery 的端到端工作流正在成形（anvilate、vibe-cading、text-to-cad、Kiln）。**第二，浏览器原生精确 CAD 崛起**——OCCT、CGAL、B-Rep 等传统桌面几何内核被 WASM 化（occt-wasm、cadrum、brepjs），chili3d、f3d、CADAM 等 Web 工具让"无需安装"的高保真建模成为现实。**第三，Python Code-CAD 走向工程化**——build123d、CadQuery、PartCAD 三件套已经覆盖"参数化建模—可制造件管理—物理验证"的完整链条，配合 FreCAD MCP 系列，CAD/CAM 的开发范式正在从 GUI 主导转向"GUI + 脚本 + Agent"的混合模式。

---

## 六、值得关注

1. **[OSHOP 2026：FreeCAD × KiCad 同台](https://blog.freecad.org/2026/08/21/freecad-and-kicad-cad-showdown-at-oshop-2026/)**
   机械-电子协同的开源工作流是 2026 年最具落地价值的趋势之一，建议跟进活动录像与双方发布的联合示例项目，留意是否会出现 STEP↔KiCad 双向工作流。

2. **[geofield-bracket](https://github.com/connorkapoor/geofield-bracket) —— "几何 + 物理 + 可制造性"联合潜空间**
   把 SE(3)-等变场、沉浸式 FEA 与可制造性约束融合的早期实验，代表了"AI 不再只生成像素，而是生成可制造零件"的方向，值得长期观察。

3. **[OCCT-WASM / Cadrum / Brepjs 三连：精确 CAD 上 Web](https://github.com/andymai/occt-wasm)**
   如果 2025–2026 年这批项目完成"几何内核即 Web 库"的最后拼图，BIM/IFC、STEP 协作将从"下载 → 本地打开"走向"链接即查看即改"的全新体验，对 SaaS 与协作 CAD 平台格局将产生深远影响。

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*