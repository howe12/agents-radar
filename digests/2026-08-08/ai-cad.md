# CAD/机械结构开源动态日报 2026-08-08

> 数据来源: GitHub Search API (97 仓库) | ArXiv cs.GR+cs.CG (0 篇论文) | RSS 新闻 (2 条) | 生成时间: 2026-08-08 01:07 UTC

---

# CAD/机械结构开源动态日报

> 数据日期：2026-08-06 ｜ 覆盖来源：FreeCAD Blog、GitHub Trending（97 个近 7 天活跃仓库）

---

## 1. 今日速览

今天 FreeCAD 生态延续高活跃度：博客同时推送了 **Manyfold 缩略图支持** 与 **WIP Wednesday 周报** 两条更新，意味着 3D 资产工作流与建模器核心正在同步演进。GitHub 端最显著信号是 **AI × CAD** 与 **浏览器/WASM 原生 CAD** 的双线加速——text-to-cad（13k+⭐）继续保持热度，OCCT 经 WebAssembly 移植（occt-wasm）让浏览器内运行工业级几何内核成为现实。切片与固件侧，Klipper/Marlin 体系下的 Bambu Lab 自托管工具 Bambuddy 与开源 MCP 服务器 Kiln 持续推进"去云化、Agent 化"路线。

---

## 2. 行业脉搏

> 今日新闻源较稀（仅 FreeCAD Blog 两条），以下为全部更新：

1. **Manyfold 集成 FreeCAD 缩略图** — [FreeCAD Blog](https://blog.freecad.org/2026/08/06/manyfold-now-with-freecad-thumbnails/)
   Manyfold（自托管 3D 模型管理平台）现可直接显示 FreeCAD 原生文件的缩略图，让 `.FCStd` 文件在浏览器管理界面中具备可视化预览能力，降低了 FreeCAD 在多模型资产管理场景下的使用门槛。

2. **WIP Wednesday, 5 August 2026** — [FreeCAD Blog](https://blog.freecad.org/2026/08/05/wip-wednesday-5-august-july-2026/)
   FreeCAD 主分支每周开发进展汇总，涵盖 Part Design、Assembly、TechDraw、CAM 等工作台的最新 PR 合并与新特性落地，是跟踪 FreeCAD 演进最直接的窗口。

---

## 3. 研究前沿

> 今日 ArXiv `cs.GR` / `cs.CG` 类别无新增论文。建议关注：
>
> - 浏览器/WASM 几何内核（[`occt-wasm`](https://github.com/andymai/occt-wasm)、[`brepjs`](https://github.com/andymai/brepjs)、[`bldrs-ai/conway`](https://github.com/bldrs-ai/conway)）正在填补"工业级 B-Rep 上 Web"的长期空白，相关工作具备论文化潜力；
> - 多智能体 / 测试时计算驱动的 CAD 生成（[`Pan-Chera/Multi-Agent-CAD`](https://github.com/Pan-Chera/Multi-Agent-CAD)）预示下一步研究方向将围绕"约束满足 + 几何验证"展开。

---

## 4. 重点项目

### 🖥️ CAD 平台与编辑器

- **[FreeCAD](https://github.com/FreeCAD/FreeCAD)** ⭐ 32,688
  开源多平台参数化 3D 建模器的事实标准，今日博客双更新再次印证其开发热度；仍是机械工程师本地部署的主力选项。

- **[OpenSCAD](https://github.com/openscad/openscad)** ⭐ 9,901
  程序员的实体建模器，DSL 化建模范式的源头；与下方 `build123d`、CadQuery 共同构成 Code-CAD 三足。

- **[chili3d](https://github.com/xiangechen/chili3d)** ⭐ 4,722
  浏览器端 3D CAD 应用，无需安装即可在线建模编辑；代表了"Web 原生 CAD"路线的中坚力量。

### 📐 计算几何与内核

- **[Open CASCADE Technology](https://github.com/Open-Cascade-SAS/OCCT)** ⭐ 2,732
  工业级开源 3D CAD/CAM/CAE 几何内核；Mayo、FreeCAD、EzyCad 等都基于其构建，是开源 CAD 体系的基石。

- **[CGAL](https://github.com/CGAL/cgal)** ⭐ 6,005
  C++ 计算几何算法库，覆盖三角化、布尔运算、网格处理、运动规划等，几乎所有严肃的算法型 CAD 项目都会调用。

- **[occt-wasm](https://github.com/andymai/occt-wasm)** ⭐ 38
  OCCT 经 Rust 编译为 WebAssembly 并暴露 TypeScript API，~4MB brotli 体积即在浏览器获得完整 B-Rep 能力，是 Web CAD 走向工业可用的关键跳板。

### 🧬 创成式与参数化设计

- **[PicoGK](https://github.com/leap71/PicoGK)** ⭐ 1,045
  Leap71 出品的紧凑型隐式几何内核，面向"计算工程"领域，与传统 B-Rep 路线互补，适合晶格、轻量化结构生成。

- **[Multi-Agent-CAD (MAC)](https://github.com/Pan-Chera/Multi-Agent-CAD)** ⭐ 423
  采用"测试时计算 + 多智能体"的文本到 CAD 生成框架，将约束求解与几何验证解耦，代表 LLM 时代 CAD 合规化的前沿探索。

### 🖨️ 3D 打印与制造

- **[Marlin](https://github.com/MarlinFirmware/Marlin)** ⭐ 17,517
  RepRap 系 3D 打印机最普及的开源固件，跨 8 位与 32 位 MCU，社区与商业打印机广泛采用。

- **[OrcaSlicer](https://github.com/OrcaSlicer/OrcaSlicer)** ⭐ 15,344
  覆盖 Bambu、Prusa、Voron、VzBot、Creality 等主流机型的开源切片软件，活跃度高、机器适配广。

- **[Kiln](https://github.com/codeofaxel/Kiln)** ⭐ 42
  面向 3D 打印的开源 MCP 服务器：AI 代理可经其完成"设计→切片→打印"全链路，覆盖 Bambu/Klipper/OctoPrint/Marlin 等生态；是 Agent × 制造的代表性项目。

### 🔗 文件格式与互操作

- **[f3d](https://github.com/f3d-app/f3d)** ⭐ 4,609
  快速极简的 3D 查看器，对 STL/STEP/3MF/GLTF 等格式支持完善，适合工程团队的轻量预览管线。

- **[Mayo](https://github.com/fougue/mayo)** ⭐ 2,119
  基于 Qt + OpenCASCADE 的 3D CAD 查看器与格式转换器，是 STEP/IGES 桌面查看与转出的实用工具。

### 🐍 Code-CAD 与脚本化

- **[build123d](https://github.com/gumyr/build123d)** ⭐ 2,813
  Python CAD 编程库，作为 OpenSCAD 范式的现代继承者，与 CadQuery 一起重新定义"用代码做机械设计"的工作流。

- **[CadQuery CQ-editor](https://github.com/CadQuery/CQ-editor)** ⭐ 1,206
  基于 PyQt 的 CadQuery GUI 编辑器，让 Python 脚本化建模具备可交互界面，是 Code-CAD 工程化的代表性前端。

---

## 5. 生态趋势信号

本周最明显的是 **AI 与 CAD 互操作进入"协议化"阶段**——[`freecad-mcp`](https://github.com/neka-nat/freecad-mcp)、[`blwfish/freecad-mcp`](https://github.com/blwfish/freecad-mcp) 与 [`Kiln`](https://github.com/codeofaxel/Kiln) 一同推动 MCP 成为 CAD/切片的事实通信层；其上又叠加 [`text-to-cad`](https://github.com/earthtojake/text-to-cad)、[`CADAM`](https://github.com/Adam-CAD/CADAM) 等文本到 CAD 框架。**"去云化、本地优先"** 同向汇聚：Bambuddy、ha-bambulab、anvilate 强调私有部署。**Web/WASM 化** 主线成熟于 [`occt-wasm`](https://github.com/andymai/occt-wasm) + [`brepjs`](https://github.com/andymai/brepjs) + Chili3D 三件套，让浏览器承载 B-Rep 不再是研究 demo。

---

## 6. 值得关注

1. **[text-to-cad](https://github.com/earthtojake/text-to-cad)**（13,048⭐）— 极少见的 10k+ 级"CAD/CAE/CAM Agent Skills"库，其封装质量与生态对接（如 build123d/STEP）值得长期跟踪，是 AI-CAD 互操作的潜在事实标准。
2. **[occt-wasm](https://github.com/andymai/occt-wasm)** — 成熟工业内核首次以 WASM 形式开放清洁 TS API，一旦被 Chili3D、Mayo Web 版或新编辑器集成，可能在 6–12 个月内催生首批"浏览器即 DCC"产品。
3. **[Kiln](https://github.com/codeofaxel/Kiln)** — MCP 让 AI 代理

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*