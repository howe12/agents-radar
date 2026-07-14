# CAD/机械结构开源动态日报 2026-07-14

> 数据来源: GitHub Search API (106 仓库) | ArXiv cs.GR+cs.CG (0 篇论文) | RSS 新闻 (4 条) | 生成时间: 2026-07-14 01:54 UTC

---

# CAD/机械结构开源动态日报
**日期：2026 年 7 月 14 日（周二）**

---

## 1. 今日速览

今日开源 CAD 生态呈现 **"AI Agent 全面渗透 + Web/边缘化 CAD 加速"** 的双重主线：仓库层面出现多个面向 LLM/MCP 的原生 CAD/CAE 工具（text-to-cad、CAD/CAE Copilot、Anvilate），OCCT/几何内核向 WebAssembly 与 Swift 等新语言栈的迁移也持续推进（occt-wasm、cadrum、swift-CAD、brepjs）。行业层面，Bambu Lab 联合 Insta360 发起 Luna Ultra 设计挑战，并复盘委内瑞拉危机中 Maker 社区的快速响应，提示"消费级 3D 打印 + 创作者经济"进一步成熟。学术方面 cs.GR/cs.CG 今日无新论文提交，研发信号主要来自代码仓库。

---

## 2. 行业脉搏

- 🥇 **[FreeCAD 发布 "Banana For Scale" 插件](https://blog.freecad.org/2026/07/12/new-addon-banana-for-scale/)** — 经典参照物梗在 FreeCAD 中"原生化"，降低新手尺寸直观判断门槛，体现社区对**轻量化、幽默化**工作流扩展的偏好。
- 🥈 **[WIP Wednesday, 8 July 2026](https://blog.freecad.org/2026/07/08/wip-wednesday-8-july-2026/)** — FreeCAD 主线 WIP 周报，开发进展涉及 Part/Assembly/Path 等核心模块，是评估 FreeCAD 1.x 路线的最直接窗口。
- 🥉 **[Bambu Lab × Insta360 "Luna Ultra" 设计挑战](https://blog.bambulab.com/lets-make-it-bambu-lab-and-insta360-launch-luna-ultra-design-challenge-on-makerworld/)** — 头部 FDM 厂商与影像硬件品牌跨界共创，进一步打通"拍摄-设计-打印"内容闭环。
- 🏅 **[委内瑞拉救援中的 Maker 响应](https://blog.bambulab.com/when-venezuela-needed-help-the-makers-moved-first/)** — Maker 社区在人道主义危机中快速打印医疗/救援部件的案例，反映**分布式数字制造**在应急场景中的成熟度。

> 附：原素材列出 Prusa、OpenCASCADE、Hackaday 等来源，但今日无对应条目提交。

---

## 3. 研究前沿

**今日 cs.GR / cs.CG 无新论文入库。** 暂无学术新进展可供点评。

---

## 4. 重点项目

### 🖥️ CAD 平台与编辑器

| 仓库 | ⭐ | 一句话说明 |
|---|---|---|
| [FreeCAD/FreeCAD](https://github.com/FreeCAD/FreeCAD) | 32,101 | 跨平台开源参数化 3D 建模旗舰，OCCT 内核 + Python 脚本生态，机械/建筑/CAx 多领域事实标准之一。 |
| [openscad/openscad](https://github.com/openscad/openscad) | 9,827 | "程序员向"实体建模语言，参数化与代码可审计性极强，是 Code-CAD 范式的发源地。 |
| [earthtojake/text-to-cad](https://github.com/earthtojake/text-to-cad) | 8,088 | 面向 AI Agent 的 CAD/机器人/硬件设计 skill 集合，是**Agent 时代机械设计的"工具描述层"**。 |
| [Adam-CAD/CADAM](https://github.com/Adam-CAD/CADAM) | 4,798 | 浏览器内 Text-to-CAD Web 应用，把自然语言直接转为 OpenSCAD/STEP。 |
| [f3d-app/f3d](https://github.com/f3d-app/f3d) | 4,538 | 轻量极速 3D 查看器，支持 STEP/IGES/STL/3MF 全套工程格式，**可作为 CAD 流水线末端的统一预览器**。 |
| [bldrs-ai/Share](https://github.com/bldrs-ai/Share) | 178 | 浏览器端 BIM/CAD 协作查看器（IFC/STEP/STL/OBJ/GLTF），契合 Web 协同评审趋势。 |

### 📐 计算几何与内核

| 仓库 | ⭐ | 一句话说明 |
|---|---|---|
| [CGAL/cgal](https://github.com/CGAL/cgal) | 5,976 | C++ 计算几何算法库，工业级稳健，覆盖三角化、布尔、偏移、网格处理，机械/路径规划研究的事实底层。 |
| [polydera/trueform](https://github.com/polydera/trueform) | 128 | "The STL for Geometry"：精确布尔 + 空间查询 + 重网格，C++/Python/TS 三栈绑定，是新一代几何库代表。 |
| [lzpel/cadrum](https://github.com/lzpel/cadrum) | 37 | Rust 静态链接 OCCT 8.0.0，本地与浏览器（WASM）双跑，**把 OCCT 带入 Rust + Web 时代**。 |
| [andymai/occt-wasm](https://github.com/andymai/occt-wasm) | 26 | OCCT 编译为 ~4MB brotli WASM，提供类型化 TS API + Web Worker，是 Web CAD 内核的优选基础。 |
| [andymai/brepjs](https://github.com/andymai/brepjs) | 65 | 浏览器内**精确 B-Rep** 几何库，让 STEP 级精度几何在 Web 中可用。 |
| [mikedh/trimesh](https://github.com/mikedh/trimesh) | 3,621 | Python 网格处理/分析/导入导出库，是 STL/OBJ 处理流水线的瑞士军刀。 |
| [gkjohnson/three-mesh-bvh](https://github.com/gkjohnson/three-mesh-bvh) | 3,420 | three.js 的 BVH 加速与空间查询，**Web 端大规模网格交互的事实标准**。 |

### 🧬 创成式与参数化设计

| 仓库 | ⭐ | 一句话说明 |
|---|---|---|
| [armpro24-blip/cad-cae-copilot](https://github.com/armpro24-blip/cad-cae-copilot) | 38 | AI-native CAD/CAE/CAX 工作台：text-to-CAD + 真实 build123d/OCCT 几何 + 可编辑参数 + MCP server，**Agent 时代工程软件新范式**。 |
| [clay-good/anvilate](https://github.com/clay-good/anvilate) | 0 | 本地优先的机械设计 Agent，自然语言 → 物理校验的 STEP/DXF，**直接对接 CATIA/SolidWorks/NX** 流程。 |
| [tonykoop/makerbench-hwe](https://github.com/tonykoop/makerbench-hwe) | 0 | 物理世界的 Agent 基准（空间推理 + DFM + 3D-Maker），**机械设计领域的"SWE-bench"**，数学可自动判分。 |
| [api-evangelist/augmenta](https://github.com/api-evangelist/augmenta) | 0 | 面向电气/建筑 MEP 自动化的生成式 Spatial AI，**GenDesign × 建筑机电**的早期样本。 |
| [yogeshhk/MidcurveNN](https://github.com/yogeshhk/MidcurveNN) | 43 | 用神经网络从薄壁多边形提取中轴线，板金/桁架/加筋结构的智能骨架生成。 |

### 🖨️ 3D 打印与制造

| 仓库 | ⭐ | 一句话说明 |
|---|---|---|
| [MarlinFirmware/Marlin](https://github.com/MarlinFirmware/Marlin) | 17,474 | 3D 打印机固件事实标准，覆盖 8/32 位 MCU，**全球大量商业机型预装**。 |
| [OrcaSlicer/OrcaSlicer](https://github.com/OrcaSlicer/OrcaSlicer) | 15,102 | 支持 Bambu/Prusa/Voron 等多品牌的高质量 G-code 生成器，社区切片器新王者。 |
| [Ultimaker/Cura](https://github.com/Ultimaker/Cura) | 6,996 | 工业/桌面双栖切片 GUI，基于 Uranium 框架，**OEM 集成最广**的切片前端。 |
| [dw-0/kiauh](https://github.com/dw-0/kiauh) | 4,462 | Klipper 安装/更新助手，是 Klipper 装机流的"装机精灵"。 |
| [sn4k3/UVtools](https://github.com/sn4k3/UVtools) | 1,590 | MSLA/DLP 文件分析/校准/修复/转换工具，**光固化工艺必备**。 |
| [codeofaxel/Kiln](https://github.com/codeofaxel/Kiln) | 35 | 开源 3D 打印 MCP Server：AI Agent 可设计 + 切片 + 打印 + 控多品牌打印机，**打印机的"Function Calling 接口"**。 |
| [Sienci-Labs/gsender](https://github.com/Sienci-Labs/gsender) | 358 | grbl / grblHAL CNC 统一控制前端，桌面铣削事实 GUI 之一。 |

### 🔗 文件格式与互操作

| 仓库 | ⭐ | 一句话说明 |
|---|---|---|
| [CadQuery/cadquery](https://github.com/CadQuery/cadquery) | 5,448 | 基于 OCCT 的 Python 参数化 CAD 脚本框架，**Code-CAD 工业级代表**。 |
| [CadQuery/CQ-editor](https://github.com/CadQuery/CQ-editor) | 1,197 | CadQuery 的 PyQt GUI 编辑器，交互式脚本 CAD 体验。 |
| [neka-nat/freecad-mcp](https://github.com/neka-nat/freecad-mcp) | 1,291 | FreeCAD 的 MCP（Model Context Protocol）服务端，**让 LLM 真正"动手"FreeCAD**。 |
| [1amageek/swift-CAD](https://github.com/1amageek/swift-CAD) | 10 | 原生 Swift CAD 基础：参数化 IR + B-Rep 求值 + 零拷贝交换 + WASM，**CAD 进入 Apple 生态** 的入口。 |
| [bldrs-ai/conway](https://github.com/bldrs-ai/conway) | 22 | Web 端高性能 IFC & STEP 引擎，BIM/CAD 在浏览器内的解析与渲染底座。 |
| [GitHubDragonFly/GitHubDragonFly.github.io](https://github.com/GitHubDragonFly/GitHubDragonFly.github.io) | 47 | 一站式 30+ 格式 Web 3D 查看器（STEP/IGES/IFC/3MF/3DM/BREP/…），**格式兼容性问题排查利器**。 |

### 🐍 Code-CAD 与脚本化

| 仓库 | ⭐ | 一句话说明 |
|---|---|---|
| [gumyr/build123d](https://github.com/gumyr/build123d) | 2,629 | Python CAD 编程库，**面向机械/3D 打印的现代 Code-CAD 体验**，与 CadQuery 形成"函数式 vs Builder"两种风格。 |
| [michaelgale/cq-kit](https://github.com/michaelgale/cq-kit) | 153 | CadQuery 工具集/辅助库，扩展标准件与建模语义。 |
| [UMassIonTrappers/PyOpticL](https://github.com/UMassIonTrappers/PyOpticL) | 131 | 代码 → CAD 的模块化光学实验台布局工具，**Code-CAD 在科研装备中的样板**。 |
| [vipenzo/ridley](https://github.com/vipenzo/ridley) | 36 | Clojure 脚本的 turtle-graphics 3D 建模 + WebXR 预览 + STL 导出，函数式 CAD 的轻量尝试。 |
| [shaise/FreeCAD_SheetMetal](https://github.com/shaise/FreeCAD_SheetMetal) | 323 | FreeCAD 钣金工作台，**板金展开/折弯/工程图** 的关键扩展之一。 |
| [ryankembrey/FreeCAD-DFM-Workbench](https://github.com/ryankembrey/FreeCAD-DFM-Workbench) | 35 | FreeCAD 的 DFM（面向制造的设计）工作台，**把制造约束前移到设计阶段**。 |

---

## 5. 生态趋势信号

今天的素材串联出三条相互强化的趋势线：

1. **AI Agent 成为 CAD 的"新用户"**：仓库端 text-to-cad（skill 层）、CAD/CAE Copilot（带 OCCT 真几何）、Anvilate（自然语言 → STEP）、Kiln/FreeCAD-MCP（执行层）形成"接口-建模-出图-打印"全栈 Agent 通路；行业端 MakerWorld 推出"AI × 影像"的设计挑战进一步把生成式设计推向消费创作者。
2. **OCCT / B-Rep 全面"前端化"**：cadrum（Rust+WASM）、occt-wasm、brepjs、swift-CAD、conway、bldrs-ai/Share 共同把传统厚重的 C++ 几何内核搬运到 Web、Worker、Apple 平台，预示**专业 CAD 走向"任意端、任意语言"**。
3. **可验证性取代 LLM 自评**：MakerBench-HWE（数学可判分的 DFM/3D 基准）、Anvilate（"物理校验"）、Kiln（直接驱动打印机）反映出社区对"AI 出图能否被工程信任"的焦虑正在被工程化指标回应，**未来

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*