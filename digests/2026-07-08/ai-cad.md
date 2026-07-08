# CAD/机械结构开源动态日报 2026-07-08

> 数据来源: GitHub Search API (CAD, FreeCAD, 3D-printing, generative-design 等话题) | 共 115 个仓库 | 生成时间: 2026-07-08 02:49 UTC

---

# 📐 CAD/机械结构开源动态日报

## 🔍 今日速览

本周开源 CAD 生态最显著的趋势是 **AI Agent 与 CAD 的深度耦合**：FreeCAD-MCP、FreeCAD-AI、Rhino-MCP、Kiln（3D 打印 MCP）、MakerBench（物理世界 Agent 基准）等项目集中爆发，标志着自然语言驱动建模正从概念走向工具链。同时，**WebAssembly 化与浏览器 CAD** 持续推进——occt-wasm、brepjs、bldrs-ai/conway、CADAM、chili3d 共同推动 OCCT 内核在 Web 端落地，纯 Rust 实现的 `cadcore` 内核则展现了去 OCCT 化的新可能。切片端 OrcaSlicer、Marlin、Cura 三大主流项目持续活跃，Klipper 周边（kiauh、mainsail、bambuddy）形成完整生态。

---

## ⭐ 重点项目

### 🖥️ CAD 平台与编辑器

- **[FreeCAD/FreeCAD](https://github.com/FreeCAD/FreeCAD)** ⭐ 31,972
  开源参数化 3D 建模旗舰，基于 OCCT 内核，支持 Python 脚本与工作台扩展，是开源 CAD 生态的事实标准。

- **[openscad/openscad](https://github.com/openscad/openscad)** ⭐ 9,718
  "程序员的实体建模语言"，纯文本描述几何体，是 Code-CAD 与参数化设计的发源地。

- **[LibreCAD/LibreCAD](https://github.com/LibreCAD/LibreCAD)** ⭐ 6,051
  跨平台 2D CAD，完整支持 DXF/DWG 读写，是轻量级工程绘图的可靠选择。

- **[solvespace/solvespace](https://github.com/solvespace/solvespace)** ⭐ 4,041
  参数化 2D/3D CAD，体积小巧、约束求解器强大，适合教学与嵌入式场景。

- **[xiangechen/chili3d](https://github.com/xiangechen/chili3d)** ⭐ 4,660
  浏览器端 3D CAD 应用，展示了纯 Web 在线建模编辑的方向。

- **[Adam-CAD/CADAM](https://github.com/Adam-CAD/CADAM)** ⭐ 4,741
  开源 text-to-CAD Web 应用，自然语言直接生成可编辑 CAD 模型。

### 📐 计算几何与内核

- **[CGAL/cgal](https://github.com/CGAL/cgal)** ⭐ 5,971
  C++ 计算几何算法库的"百科全书"，覆盖三角化、布尔运算、网格处理等核心算法。

- **[Open-Cascade-SAS/OCCT](https://github.com/Open-Cascade-SAS/OCCT)** ⭐ 2,624
  开源 3D CAD/CAM/CAE 平台的事实工业内核，FreeCAD、CadQuery、mayo 等众多项目的底座。

- **[mikedh/trimesh](https://github.com/mikedh/trimesh)** ⭐ 3,612
  Python 三角网格处理库，是科研与逆向工程中网格布尔、修复、STL 处理的主力工具。

- **[gkjohnson/three-mesh-bvh](https://github.com/gkjohnson/three-mesh-bvh)** ⭐ 3,411
  three.js 网格 BVH 加速库，是 Web 端大规模模型可视化与 raycasting 的性能关键。

- **[YATSKOVSKYI/cadcore](https://github.com/YATSKOVSKYI/cadcore)** ⭐ 27
  纯 Rust 实现的 B-Rep CAD 几何内核，无 OCCT、无 C++，代表去 OCCT 化的新探索。

### 🧬 创成式与参数化设计

- **[processing/processing4](https://github.com/processing/processing4)** ⭐ 434
  创意编程语言，常被用于参数化、可视化与生成式艺术的快速原型。

- **[tanishqbhattad/rhino-mcp](https://github.com/tanishqbhattad/rhino-mcp)** ⭐ 8
  Rhino 8 的 MCP 服务器，Claude/ChatGPT/Codex 等 AI 客户端可直接驱动 115 个建模工具。

- **[tonykoop/makerbench-hwe](https://github.com/tonykoop/makerbench-hwe)** ⭐ 0
  面向物理世界的 Agent 基准，测试空间推理与 DFM（面向制造的设计）能力。

### 🖨️ 3D 打印与制造

- **[MarlinFirmware/Marlin](https://github.com/MarlinFirmware/Marlin)** ⭐ 17,471
  RepRap 3D 打印机的工业级固件标准，支持 8/32 位 MCU，覆盖绝大多数市售 3D 打印机。

- **[OrcaSlicer/OrcaSlicer](https://github.com/OrcaSlicer/OrcaSlicer)** ⭐ 15,036
  主流 G-code 生成器，全面适配 Bambu/Prusa/Voron 等热门机型，社区活跃度极高。

- **[Ultimaker/Cura](https://github.com/Ultimaker/Cura)** ⭐ 6,987
  Ultimaker 官方切片 GUI，基于 Uranium 框架，是工业与教育领域装机量最大的切片软件之一。

- **[Sienci-Labs/gsender](https://github.com/Sienci-Labs/gsender)** ⭐ 356
  开源 grbl/grblHAL CNC 控制器，是桌面级 CNC 与激光雕刻的事实 GUI。

- **[huxingyi/dust3d](https://github.com/huxingyi/dust3d)** ⭐ 3,347
  跨平台低多边形 3D 建模工具，专为游戏资产与 3D 打印快速建模设计。

- **[sn4k3/UVtools](https://github.com/sn4k3/UVtools)** ⭐ 1,588
  MSLA/DLP 光固化打印的标定、修复、文件分析工具集。

### 🔗 文件格式与互操作

- **[f3d-app/f3d](https://github.com/f3d-app/f3d)** ⭐ 4,526
  快速极简的 3D 查看器，原生支持 STEP、IGES、STL、glTF 等多种 CAD/网格格式。

- **[bldrs-ai/conway](https://github.com/bldrs-ai/conway)** ⭐ 22
  高性能 Web 端 IFC & STEP 引擎，专为浏览器内 CAD 应用设计。

- **[andymai/occt-wasm](https://github.com/andymai/occt-wasm)** ⭐ 21
  将 OCCT 编译为 WebAssembly（~4MB brotli），提供干净的 TypeScript API，是 Web CAD 的基础设施。

- **[andymai/brepjs](https://github.com/andymai/brepjs)** ⭐ 60
  Web 端精确 B-Rep 几何库，让浏览器内的精确 CAD 建模成为可能。

- **[FriendsOfCADability/CADability](https://github.com/FriendsOfCADability/CADability)** ⭐ 167
  纯 .NET 3D 建模类库，原生支持 STEP/STL/DXF 交换，零外部依赖。

### 🐍 Code-CAD 与脚本化

- **[CadQuery/cadquery](https://github.com/CadQuery/cadquery)** ⭐ 5,425
  基于 OCCT 的 Python 参数化 CAD 脚本框架，是 Code-CAD 生态最成熟的代表。

- **[gumyr/build123d](https://github.com/gumyr/build123d)** ⭐ 2,591
  新一代 Python CAD 编程库，API 更现代，与 CadQuery 互补。

- **[CadQuery/CQ-editor](https://github.com/CadQuery/CQ-editor)** ⭐ 1,194
  CadQuery 的 PyQt GUI 编辑器，提供交互式可视化与即时执行。

- **[jupytercad/JupyterCAD](https://github.com/jupytercad/JupyterCAD)** ⭐ 229
  JupyterLab 扩展，支持 3D 几何建模的协作式 Notebook 流程。

- **[neka-nat/freecad-mcp](https://github.com/neka-nat/freecad-mcp)** ⭐ 1,258
  FreeCAD 的 MCP 服务器，让 LLM 直接操控 FreeCAD 建模流程。

- **[ghbalf/freecad-ai](https://github.com/ghbalf/freecad-ai)** ⭐ 360
  FreeCAD AI 助手工作台，自然语言直接生成 3D 模型。

- **[codeofaxel/Kiln](https://github.com/codeofaxel/Kiln)** ⭐ 31
  开源 3D 打印 MCP 服务器，AI Agent 可完成"设计→切片→打印"全链路。

---

## 🌊 生态趋势信号

CAD 开源生态正经历三股清晰的合流：**其一是"AI Agent × CAD"的协议化**——MCP（Model Context Protocol）成为 LLM 操控 FreeCAD、Rhino、3D 打印机的通用接口，freecad-mcp、rhino-mcp、Kiln 三者并列爆发意味着"自然语言建模"已从 PoC 走向标准化工具链。**其二是"内核 WASM 化"与"Web CAD"的协同**——occt-wasm + brepjs + bldrs-ai/conway + chili3d + CADAM 共同构建出无需安装的浏览器建模体验，而纯 Rust 实现的 cadcore 则提供了摆脱 OCCT C++ 复杂性的另一条路。**其三是"参数化/Code-CAD"向生成式与 DFM 工作流延伸**——MakerBench 将 Agent 能力评测落到"物理世界"，build123d 持续蚕食 CadQuery 现代 API 生态，Kiln 把切片也纳入 Agent 闭环。整体看，CAD 开源正从"替代商业软件"升级为"AI 原生设计基础设施"。

---

## 🎯 值得关注

1. **[neka-nat/freecad-mcp](https://github.com/neka-nat/freecad-mcp)** ⭐ 1,258
   MCP 协议把 FreeCAD 接入 Claude/Cursor 等 AI 客户端，是"AI 建模"走向生产力的关键节点，其 API 设计将影响整个 LLM-CAD 互操作生态。

2. **[andymai/occt-wasm](https://github.com/andymai/occt-wasm)** ⭐ 21
   把工业级 OCCT 内核压缩到 ~4MB 并暴露现代 TypeScript API，是 Web CAD 能否真正替代桌面端的基础设施级项目，长期价值高。

3. **[YATSKOVSKYI/cadcore](https://github.com/YATSKOVSKYI/cadcore)** ⭐ 27
   纯 Rust B-Rep 内核，O(N) 扫描体、STEP AP203 导出、零 OCCT 依赖——若持续成熟，将是开源 CAD 摆脱"必须 link OCCT"枷锁的破局者，值得长期跟踪。