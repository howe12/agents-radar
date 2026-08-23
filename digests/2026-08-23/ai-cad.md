# CAD/机械结构开源动态日报 2026-08-23

> 数据来源: GitHub Search API (101 仓库) | ArXiv cs.GR+cs.CG (0 篇论文) | RSS 新闻 (5 条) | 生成时间: 2026-08-23 00:56 UTC

---

# 📰 CAD/机械结构开源动态日报
**2026 年 8 月 21 日 · 星期四**

---

## 1. 今日速览

今天开源 CAD 与数字制造领域有三股力量交汇：FreeCAD 在 OSHOP 2026 与 KiCad 同台亮相，凸显其在开源硬件全链路中的位置；Bambu Lab 借势讲解 HelixCore spinner 的爆款设计逻辑，消费级 3D 打印与社区文化持续绑定；GitHub 活跃仓库则清晰显示 **AI 代理 + 浏览器端 CAD + Rust 几何内核** 正在加速融合 —— 既有 FreeCAD MCP、Claude-CodeCad、Anvilate 等"自然语言驱动 CAD"项目密集涌现，也有 chili3d、brepjs、occt-wasm、cadrum 等将几何建模推向浏览器与 WASM 的底层尝试。开源 3D 打印、CNC 与切片生态同步活跃，Marlin、OrcaSlicer、Cura 仍稳居头部。

---

## 2. 行业脉搏

- **[FreeCAD and KiCad: CAD showdown at OSHOP 2026](https://blog.freecad.org/2026/08/21/freecad-and-kicad-cad-showdown-at-oshop-2026/)** — FreeCAD 官方 Blog
  FreeCAD 与 KiCad 在开源硬件展 OSHOP 2026 现场对决，象征着"机械 CAD + EDA"协同闭环走向主流，对开源硬件一体化设计意义重大。

- **[Q3 2026 grant program deadline approaching](https://blog.freecad.org/2026/08/20/q3-2026-grant-program-deadline-approaching/)** — FreeCAD 官方 Blog
  FreeCAD 2026 第三季度资助计划截止在即，关系其核心功能（Toponaming、装配体、OCCT 升级等）的下一步走向，是判断项目投入热度的关键指标。

- **[WIP Wednesday, 19 August 2026](https://blog.freecad.org/2026/08/19/wip-wednesday-19-august-2026/)** — FreeCAD 官方 Blog
  例行"开发中周三"汇总，是观察 FreeCAD 主线开发节奏、PR 流向与社区贡献者动向的最直接窗口。

- **[Prusa CORE One+ (Gen 2) INDX Shipping Has Started](https://blog.prusa3d.com/prusa-core-one-gen-2-indx-shipping-has-started-complete-printers-open-for-orders_137623/)** — Prusa 官方 Blog
  Prusa 第二代 CORE One+ 量产发货，定位工业级 INDX 整机，进一步挤压工业级与消费级 3D 打印机之间的边界，对中小批量制造生态有冲击。

- **[Yun Goo — the man behind the viral HelixCore spinner](https://blog.bambulab.com/yun-goo-the-man-behind-the-viral-helixcore-spinner/)** — Bambu Lab 官方 Blog
  Bambu Lab 通过爆款 HelixCore spinner 设计者访谈，展示了"社区爆款反哺平台"的运营策略，也为创成式 / 拓扑几何在消费打印中的传播提供了样本。

---

## 3. 研究前沿

> ⚠️ 今日 cs.GR / cs.CG 论文数据为空，研究前沿暂以"仓库侧最新进展"作为信号源补充。

今日无新增 ArXiv 论文。建议持续关注以下三类研究风向作为补充：
- **基于 LLM 的 CAD 生成与编辑**（text-to-CAD、agent-driven parametric modeling）
- **浏览器/WASM 端的几何内核与 B-Rep 引擎**（occt-wasm、brepjs、cadrum）
- **生成式结构与拓扑优化的工程化落地**（PicoGK、TopOpt.jl）

---

## 4. 重点项目

### 🖥️ CAD 平台与编辑器

- **[FreeCAD/FreeCAD](https://github.com/FreeCAD/FreeCAD)** — ⭐ 33,013
  开源多平台参数化 3D 建模标杆，本次 OSHOP 2026 与 KiCad 同台亮相的主线项目。

- **[openscad/openscad](https://github.com/openscad/openscad)** — ⭐ 10,001
  "程序员的实体 3D CAD"，用代码描述几何，长期被代码化 / LLM 工作流青睐。

- **[xiangechen/chili3d](https://github.com/xiangechen/chili3d)** — ⭐ 4,751
  完全运行在浏览器中的 3D CAD，免安装跨平台，对教学与轻量协作意义显著。

- **[LibreCAD/LibreCAD](https://github.com/LibreCAD/LibreCAD)** — ⭐ 6,272
  跨平台 2D CAD，DXF/DWG 读写齐全，常作为 2D 草图与制造出图环节的备选。

- **[solvespace/solvespace](https://github.com/solvespace/solvespace)** — ⭐ 4,110
  轻量参数化 2D/3D CAD，含约束求解器，适合教学、嵌入式与小尺寸机械设计。

- **[qcad/qcad](https://github.com/qcad/qcad)** — ⭐ 1,864
  面向 Windows/macOS/Linux 的开源 2D CAD，DXF/DWG 一等公民，工程出图场景常用。

### 📐 计算几何与内核

- **[CGAL/cgal](https://github.com/CGAL/cgal)** — ⭐ 6,017
  学术与工业级计算几何 C++ 库，覆盖三角化、布尔运算、几何处理几乎全部算法。

- **[Open-Cascade-SAS/OCCT](https://github.com/Open-Cascade-SAS/OCCT)** — ⭐ 2,788
  开源 3D CAD/CAM/CAE 底层平台，B-Rep 几何的事实标准，是大量 CAD 软件的基石。

- **[leap71/PicoGK](https://github.com/leap71/PicoGK)** — ⭐ 1,060
  紧凑稳健的"计算工程"几何内核，面向生成式工程与先进制造。

- **[YATSKOVSKYI/cadcore](https://github.com/YATSKOVSKYI/cadcore)** — ⭐ 33
  纯 Rust 实现的 B-Rep 内核，含 STEP AP203 导出，是摆脱 OCCT/C++ 依赖的新锐尝试。

- **[andymai/occt-wasm](https://github.com/andymai/occt-wasm)** — ⭐ 45
  OpenCascade 编译为 WebAssembly，配套 TypeScript API，约 4MB brotli，是浏览器端 STEP/B-Rep 处理的使能组件。

### 🧬 创成式与参数化设计

- **[JuliaTopOpt/TopOpt.jl](https://github.com/JuliaTopOpt/TopOpt.jl)** — ⭐ 225
  Julia 上的拓扑优化包，支持单/多材料、桁架/连续体、2D/3D 与自动微分。

- **[fa-mc/vibe-cading](https://github.com/fa-mc/vibe-cading)** — ⭐ 5
  基于 CadQuery 的 3D 模型生成器，专为人类与 LLM Agent 双场景设计。

- **[tanishqbhattad/rhino-mcp](https://github.com/tanishqbhattad/rhino-mcp)** — ⭐ 16
  Rhino 8 的 MCP 服务器，115 个 AI 工具，可被 Claude/ChatGPT 直接驱动。

- **[clay-good/anvilate](https://github.com/clay-good/anvilate)** — ⭐ 5
  本地优先的机械设计 Agent，输出物理校验的 STEP/DXF 与可编辑 Python 源码，可直入 SW/NX。

### 🖱️ 3D 打印与制造

- **[MarlinFirmware/Marlin](https://github.com/MarlinFirmware/Marlin)** — ⭐ 17,548
  几乎所有主流 RepRap 3D 打印机的固件事实标准。

- **[OrcaSlicer/OrcaSlicer](https://github.com/OrcaSlicer/OrcaSlicer)** — ⭐ 15,461
  支持 Bambu / Prusa / Voron / VzBot 等多品牌的切片软件，开源切片头部项目。

- **[Ultimaker/Cura](https://github.com/Ultimaker/Cura)** — ⭐ 7,018
  基于 Uranium 框架的老牌切片 GUI，3D 打印入门生态代表。

- **[maziggy/bambuddy](https://github.com/maziggy/bambuddy)** — ⭐ 2,838
  本地自托管的 Bambu Lab 指挥中心，绕开云服务做整机/打印农场管控。

- **[Sienci-Labs/gsender](https://github.com/Sienci-Labs/gsender)** — ⭐ 364
  连接 grbl / grblHAL CNC 的开源控制软件，个人与小型 CNC 用户首选之一。

- **[XRay3D/GERBER_X3](https://github.com/XRay3D/GERBER_X3)** — ⭐ 253
  将 Gerber 转 PCB 铣削 G-code 的桌面工具，机械 + 电子流程闭环中的重要一环。

- **[rudra496/cnc](https://github.com/rudra496/cnc)** — ⭐ 2
  基于 Next.js + Three.js 的浏览器端 3 轴 CNC / G-code 仿真器，便于教学与离线验证刀路。

### 🔗 文件格式与互操作

- **[f3d-app/f3d](https://github.com/f3d-app/f3d)** — ⭐ 4,644
  快速、极简的 3D 几何查看器，作为多格式预览与脚本化可视化的轻量入口。

- **[sgenoud/replicad](https://github.com/sgenoud/replicad)** — ⭐ 673
  浏览器内基于代码构建 3D 模型的 TypeScript 库，是 Web Code-CAD 的重要底座。

- **[partcad/partcad](https://github.com/partcad/partcad)** — ⭐ 487
  面向"可制造物理产品"的包管理器，类比软件世界的 npm/pip，构建硬件数字主线。

- **[bldrs-ai/Share](https://github.com/bldrs-ai/Share)** — ⭐ 181
  浏览器端 BIM/CAD 协作查看器，支持 IFC / STEP / STL / OBJ / GLTF 等。

- **[andymai/brepjs](https://github.com/andymai/brepjs)** — ⭐ 89
  纯前端 B-Rep 几何的 Web CAD 库，提供精确边界表示而不仅是网格近似。

- **[lzpel/cadrum](https://github.com/lzpel/cadrum)** — ⭐ 54
  Rust 绑定 OCCT 的 CAD crate，原生 + WASM 双形态运行，关注低门槛集成。

### 🐍 Code-CAD 与脚本化

- **[earthtojake/text-to-cad](https://github.com/earthtojake/text-to-cad)** — ⭐ 13,779
  面向 CAD/CAE/CAM 的 Agent Skills 库，是 LLM 驱动机械设计的事实标准之一。

- **[CadQuery/cadquery](https://github.com/CadQuery/cadquery)** — ⭐ 5,639
  基于 OCCT 的 Python 参数化 CAD 脚本框架，工程化最成熟的开源 Code-CAD 之一。

- **[Adam-CAD/CADAM](https://github.com/Adam-CAD/CADAM)** — ⭐ 5,010
  开源 Text-to-CAD Web 应用，把自然语言直接变成可编辑模型。

- **[gumyr/build123d](https://github.com/gumyr/build123d)** — ⭐ 2,897
  Python CAD 编程库，对模型拓扑与几何有更精细的控制，是 CadQuery 的现代替代/补充。

- **[neka-nat/freecad-mcp](https://github.com/neka-nat/freecad-mcp)** — ⭐ 1,879
  FreeCAD 的 MCP 服务器，把 FreeCAD 暴露给 Claude 等 LLM Agent。

- **[ghbalf/freecad-ai](https://github.com/ghbalf/freecad-ai)** — ⭐ 433
  FreeCAD 的 AI 助手工作台，自然语言到 3D 模型生成。

- **[blwfish/freecad-mcp](https://github.com/blwfish/freecad-mcp)** — ⭐ 31
  MCP server for FreeCAD，提供 32 个 AI 辅助建模工具，覆盖视图/草图/零件级操作。

- **[looooo/freecad.gears](https://github.com/looooo/freecad.gears)** — ⭐ 350
  FreeCAD 上的齿轮模块，参数化齿轮设计的成熟插件。

- **[shaise/FreeCAD_SheetMetal](https://github.com/shaise/FreeCAD_SheetMetal)** — ⭐ 336
  FreeCAD 钣金工作台，面向折弯展开与制造出图。

- **[sahil-patel-2011/Claude-CodeCad](https://github.com/sahil-patel-2011/Claude-CodeCad)** — ⭐ 0
  桌面 CAD 代理：将 OpenSCAD CSG 流水线接到 Onshape 的 Windows 原生 Agent。

### 🔌 配套生态

- **[Turfjs/turf](https://github.com/Turfjs/turf)** — ⭐ 10,448
  JS/TS 模块化地理空间引擎，GIS 与 CAD 跨域数据交换的常用桥接工具。

- **[mikedh/trimesh](https://github.com/mikedh/trimesh)** — ⭐ 3,655
  Python 三角网格库，3D 打印与几何分析必备工具。

- **[google/draco](https://github.com/google/draco)** — ⭐ 7,452
  3D 网格压缩/解压库，实时三维传输的事实标准。

---

## 5. 生态趋势信号

今天三方信号拼出三条清晰脉络：

**① "AI Agent 入侵 CAD"已成共识。** 仓库侧 FreeCAD MCP、Claude-CodeCad、Anvilate、freecad-ai、Rhino-MCP、text-to-CAD、CADAM、Vibe-Cading 在同一周内齐刷刷活跃；行业侧 CADAM 5k star、text-to-cad 13.7k star 表明市场已确认这条赛道。MCP（Model Context Protocol）正在成为打通 "LLM ↔

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*