# CAD/机械结构开源动态日报 2026-10-05

> 数据来源: GitHub Search API (110 仓库) | ArXiv cs.GR+cs.CG (0 篇论文) | RSS 新闻 (3 条) | 生成时间: 2026-10-05 03:31 UTC

---

# CAD/机械结构开源动态日报

**日期：2026年10月（基于 FreeCAD Blog 最新动态）**

---

## 一、今日速览

今日 FreeCAD 生态迎来**1.1.4 维护版本发布**，加上 Q3 Grant 计划资助名单与 WIP Wednesday 周报，FreeCAD 主线仍处于密集迭代期。GitHub 上 AI-CAD 融合趋势持续发酵——**text-to-cad（16.9k★）、freecad-ai、MCP 类桥接服务器**等仓库活跃，标志自然语言驱动 CAD 生成正在从概念走向工程化。同时 **OCCT 编译为 WASM（occt-wasm、cadrum、brepjs）** 推动浏览器内 B-Rep 建模成为现实。arXiv 今日 cs.GR/cs.CG 无新论文。

---

## 二、行业脉搏

1. **[FreeCAD 1.1.4 released](https://blog.freecad.org/2026/09/28/freecad-1-1-4-released/)** — 1.1 系列的 Bug 修复版本，稳定性提升意味着 1.1 主线趋于成熟，为后续 1.2 特性版本铺路。

2. **[2026 Q3 grant program: funded projects](https://blog.freecad.org/2026/10/02/2026-q3-grant-program-funded-projects/)** — FreeCAD 基金会季度资助落地，表明资金机制稳定运转，可持续投入新特性与代码维护。

3. **[WIP Wednesday, 30 September 2026](https://blog.freecad.org/2026/09/30/wip-wednesday-30-september-2026/)** — 开发周报集中展示了 Toponaming、装配、ToDo 等工作流进展，是 FreeCAD 短期路线图的真实脉搏。

> ⚠️ 今日新闻全部来自 FreeCAD Blog，尚未捕获 Prusa、Bambu Lab、OpenCASCADE、Hackaday 的最新动态，建议关注后续报道。

---

## 三、研究前沿

📭 **arXiv cs.GR / cs.CG 今日无新论文收录**。

建议关注方向：基于语言模型的形状生成（SDF / mesh）、神经隐式场与 B-Rep 融合、可微 CAD、几何深度学习的拓扑损失函数等仍是 2026 年几何与图形学研究的活跃议题。

---

## 四、重点项目

### 🖥️ CAD 平台与编辑器

| 仓库 | Star | 简介 |
|------|------|------|
| **[FreeCAD/FreeCAD](https://github.com/FreeCAD/FreeCAD)** | 33,940 | 开源多平台参数化 3D 建模器，机械设计领域的事实标准之一；1.1.4 发布与多项 MCP 桥接扩展正在降低 AI 接入门槛。 |
| **[openscad/openscad](https://github.com/openscad/openscad)** | 10,357 | "程序员的实体建模器"，以代码描述几何——参数化、可复现、易版本控制，硬件设计圈的事实标准。 |
| **[partcad/partcad](https://github.com/partcad/partcad)** | 500 | 面向制造零件的包管理器与"数字主线"标准，目标是让硬件像软件一样被复用与分发。 |

### 📐 计算几何与内核

| 仓库 | Star | 简介 |
|------|------|------|
| **[CGAL/cgal](https://github.com/CGAL/cgal)** | 6,062 | C++ 计算几何算法库的事实标准，Delaunay、布尔运算、曲面重建等核心能力是 CAD/CAM 内核组件的基石。 |
| **[MeshInspector/MeshLib](https://github.com/MeshInspector/MeshLib)** | 829 | 高速网格布尔、修复、抽稀、点云三角化与 ICP 配准，多语言绑定，对逆向工程与 3D 扫描后处理意义重大。 |
| **[cdcseacave/openMVS](https://github.com/cdcseacave/openMVS)** | 4,144 | 开源 MVS/SfM 重建库，从图像到稠密点云/网格，是扫描到 CAD 流水线的重要一环。 |
| **[mikedh/trimesh](https://github.com/mikedh/trimesh)** | 3,691 | Python 三角网格处理主力库，STL/OBJ/3MF 解析 + 布尔、剖切、凸包等，便于在 Python 流水线做几何后处理。 |

### 🧬 创成式与参数化设计

| 仓库 | Star | 简介 |
|------|------|------|
| **[earthtojake/text-to-cad](https://github.com/earthtojake/text-to-cad)** | 16,921 | "给你的 Agent CAD 超能力"——自然语言生成 STEP/几何，是当前 AI-CAD 工程化最热的项目。 |
| **[clay-good/anvilate](https://github.com/clay-good/anvilate)** | 10 | 本地优先的机械设计 Agent，自然语言生成经物理校验的 STEP/DXF 与可编辑 Python 源码，输出兼容 CATIA/SolidWorks/NX。 |
| **[ghbalf/freecad-ai](https://github.com/ghbalf/freecad-ai)** | 543 | FreeCAD 内的 AI 助手工作台，让自然语言直接生成 3D 模型，是 FreeCAD 走向 LLM 时代的关键扩展。 |

### 🖨️ 3D 打印与制造

| 仓库 | Star | 简介 |
|------|------|------|
| **[MarlinFirmware/Marlin](https://github.com/MarlinFirmware/Marlin)** | 17,615 | 3D 打印机固件的事实标准，覆盖 8/32 位 MCU，被海量商用机型采用。 |
| **[OrcaSlicer/OrcaSlicer](https://github.com/OrcaSlicer/OrcaSlicer)** | 15,858 | 跨厂商 G-code 生成器（Bambu、Prusa、Voron、Creality…），是新一代切片软件的标杆。 |
| **[Sienci-Labs/gsender](https://github.com/Sienci-Labs/gsender)** | 373 | grbl/grblHAL CNC 的连接与控制软件，桌面 CNC 工作流的友好前端。 |
| **[DMontgomery40/mcp-3D-printer-server](https://github.com/DMontgomery40/mcp-3D-printer-server)** | 245 | 把主流 3D 打印机 API 接入 MCP 协议，让 LLM Agent 直接控制打印任务——AI × 制造的桥接件。 |

### 🔗 文件格式与互操作

| 仓库 | Star | 简介 |
|------|------|------|
| **[f3d-app/f3d](https://github.com/f3d-app/f3d)** | 4,742 | 极简快速的 3D 查看器，原生支持 STEP、IGES、STL、glTF 等多种格式，工程交付必备工具。 |
| **[fougue/mayo](https://github.com/fougue/mayo)** | 2,276 | 基于 Qt + OpenCascade 的 CAD 查看器/转换器，把 OCCT 内核打包为可用的桌面工具。 |
| **[andymai/occt-wasm](https://github.com/andymai/occt-wasm)** | 58 | 把 OpenCascade 编译到 WebAssembly，~4MB brotli，纯前端 B-Rep 引擎，浏览器即 CAD。 |
| **[andymai/brepjs](https://github.com/andymai/brepjs)** | 114 | 基于 OCCT-WASM 的 Web CAD 库，提供精确 B-Rep 几何 API；浏览器内做参数化建模成为可能。 |

### 🐍 Code-CAD 与脚本化

| 仓库 | Star | 简介 |
|------|------|------|
| **[CadQuery/cadquery](https://github.com/CadQuery/cadquery)** | 5,880 | 基于 OCCT 的 Python 参数化 CAD 脚本框架，机械工程师做设计自动化的核心武器。 |
| **[gumyr/build123d](https://github.com/gumyr/build123d)** | 3,304 | 新一代 Python CAD 编程库，API 更现代，与 CadQuery 互补，覆盖 3D 打印场景。 |
| **[CadQuery/CQ-editor](https://github.com/CadQuery/CQ-editor)** | 1,253 | CadQuery 的 PyQt 图形化编辑器，让 Code-CAD 也能"可视化"调试。 |

---

## 五、生态趋势信号

本周的 110 个活跃仓库透露出三条强信号：

1. **AI × CAD 从 Demo 走向工程化**——text-to-cad、freecad-ai、anvilate、vibe-cading、local-ai-cad-agent、MCP-3D-printer-server 等密集涌现，自然语言生成 STEP 与 LLM 直接控制打印机/CNC 已成为明确的赛道。
2. **浏览器即 CAD

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*