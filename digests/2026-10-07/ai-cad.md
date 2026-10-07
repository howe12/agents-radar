# CAD/机械结构开源动态日报 2026-10-07

> 数据来源: GitHub Search API (110 仓库) | ArXiv cs.GR+cs.CG (0 篇论文) | RSS 新闻 (2 条) | 生成时间: 2026-10-07 03:45 UTC

---

# 📊 CAD/机械结构开源动态日报

**日期：** 2026-10-02  
**覆盖范围：** FreeCAD Blog 行业新闻 · GitHub 活跃仓库（110 个，7 天内更新）

---

## 1️⃣ 今日速览

今日 FreeCAD 基金会正式公布 **2026 Q3 资助项目名单**，同时发布的 WIP Wednesday 揭示了多个 Part/Assembly 工作台与拓扑命名机制的进展。GitHub 端近 7 天最活跃的 110 个仓库中，CAD/机械设计相关项目占据主导：FreeCAD 主线（⭐33.9k）、OpenCASCADE（⭐2.96k）、CadQuery、build123d、OrcaSlicer、Marlin 等头部项目持续活跃，**AI/Agent 接入 CAD**（text-to-cad、FreeCAD MCP、anvilate）成为本周期最显著的增量信号。ArXiv cs.GR/cs.CG 本日无新增论文，但 GitHub 上 OCCT-WASM、brepjs、Cadrum 等"Web + 精确 B-Rep"路线持续推进，可视为研究界向工程化落地的关键过渡。

---

## 2️⃣ 行业脉搏

**🔹 FreeCAD 基金会 2026 Q3 资助项目公布**  
来源：[FreeCAD Blog](https://blog.freecad.org/2026/10/02/2026-q3-grant-program-funded-projects/)  
意义：基金会季度拨款直接决定 FreeCAD 生态的资金流向，Q3 项目落地将影响后续 6–12 个月的路线图（特别是 Part Design、Assembly、Sketch 三大工作台与 i18n/可访问性方向），值得跟踪具体获资项目列表。

**🔹 FreeCAD WIP Wednesday（2026-09-30）**  
来源：[FreeCAD Blog](https://blog.freecad.org/2026/09/30/wip-wednesday-30-september-2026/)  
意义：作为社区每周例行的开发进度汇总，WIP 直接展示了 Part 命名重构、BIM/Arch 改进、Addon 兼容等关键变更，是评估 FreeCAD 1.x 稳定性窗口的重要参考。

**🔹 AI-CAD 与 Agent-CAD 项目矩阵持续扩张**  
虽然不是单条新闻，但 GitHub 活跃榜同步显示 `earthtojake/text-to-cad`（⭐18k）、`neka-nat/freecad-mcp`（⭐2.7k）、`ghbalf/freecad-ai`（⭐548）、`codeofaxel/Kiln`、`clay-good/anvilate` 等项目 7 日内均有推送，反映"自然语言 → 可编辑 CAD 模型"的产品形态正在多线并行。意义：MCP（Model Context Protocol）正在成为 CAD 与 LLM 的事实接口。

**🔹 OCCT WASM / Web B-Rep 化加速**  
`andymai/occt-wasm`（⭐59）与 `andymai/brepjs`（⭐114）持续活跃，意味着 OpenCASCADE 这一工业级 B-Rep 内核正在被多项目反复"装袋"到浏览器与 Serverless 环境，是 Web CAD 进入"工程可用"阶段的重要里程碑。

---

## 3️⃣ 研究前沿

> ⚠️ **本日 ArXiv cs.GR / cs.CG 类别无新增论文。**

这本身是一个信号：在 LLM/Agent 浪潮冲击下，研究端的传统几何处理、网格、B-Rep 主题发表节奏放缓，而工程社区（GitHub）反而承担了"理论→可用工具"的转化角色。下一次论文波动需重点关注以下几个潜在方向：
- **B-Rep 大模型化**（如何让 LLM 输出 STEP/OCCT 可解析的精确几何）
- **基于约束的几何求解**（planegcs 的 WASM 化为代表）
- **生成式设计的可制造性验证**（anvilate 提出的 physics-validated STEP 概念）

建议持续跟踪 SGP、SIGGRAPH、CAD/Graphics 2026 的预印本动向。

---

## 4️⃣ 重点项目

### 🖥️ CAD 平台与编辑器

| 仓库 | Star | 一句话说明 |
|---|:-:|---|
| [**FreeCAD/FreeCAD**](https://github.com/FreeCAD/FreeCAD) | ⭐33,986 | 官方 FreeCAD 主仓库，跨平台开源参数化 3D 建模器，是 OCCT + Python 工作台生态的事实核心。 |
| [**pascalorg/editor**](https://github.com/pascalorg/editor) | ⭐24,695 | 开源 3D 建筑编辑器，原生支持本地 CLI 与 MCP 工具，面向"AI Agent + 建筑师"协同工作流。 |
| [**earthtojake/text-to-cad**](https://github.com/earthtojake/text-to-cad) | ⭐18,048 | 给 AI Agent 装配 CAD 能力的 SDK，是 Agent-CAD 趋势的代表性项目。 |
| [**openscad/openscad**](https://github.com/openscad/openscad) | ⭐10,374 | 程序员向的脚本式实体建模器，是 OpenSCAD 语言规范的参考实现。 |
| [**CadQuery/cadquery**](https://github.com/CadQuery/cadquery) | ⭐5,891 | 基于 OCCT 的 Python 参数化 CAD 脚本框架，机械工程师实现 Design-as-Code 的首选。 |
| [**solvespace/solvespace**](https://github.com/solvespace/solvespace) | ⭐4,183 | 轻量参数化 2D/3D CAD，约束求解器研究价值突出。 |
| [**gumyr/build123d**](https://github.com/gumyr/build123d) | ⭐3,330 | 面向 Python 的现代 CAD 编程库，与 CadQuery 形成互补的 builder 风格 API。 |
| [**Adam-CAD/CADAM**](https://github.com/Adam-CAD/CADAM) | ⭐5,213 | 开源 Text-to-CAD Web 应用，是 text-to-cad 的可视化前端。 |

### 📐 计算几何与内核

| 仓库 | Star | 一句话说明 |
|---|:-:|---|
| [**CGAL/cgal**](https://github.com/CGAL/cgal) | ⭐6,068 | 工业标准 C++ 计算几何算法库，CAD/CAE/GIS 的基石之一。 |
| [**cdcseacave/openMVS**](https://github.com/cdcseacave/openMVS) | ⭐4,146 | 开源 SfM + MVS 三维重建库，是"扫描 → CAD"链路的关键拼图。 |
| [**MeshInspector/MeshLib**](https://github.com/MeshInspector/MeshLib) | ⭐830 | 3D 几何处理 SDK：网格布尔、修复、抽稀、重网格、点云三角化，多语言绑定。 |
| [**mourner/rbush**](https://github.com/mourner/rbush) | ⭐2,784 | 高性能 JS R-tree 空间索引，Web CAD 与 BIM 选型的事实标准。 |
| [**mapbox/earcut**](https://github.com/mapbox/earcut) | ⭐2,598 | 最快的 JS 多边形三角剖分库，是 WebGL 可视化的核心组件。 |
| [**hhoppe/Mesh-processing-library**](https://github.com/hhoppe/Mesh-processing-library) | ⭐976 | 1992–2003 SIGGRAPH 网格处理研究成果的可复现 C++ 实现，研究价值极高。 |
| [**JeroenGar/sparrow**](https://github.com/JeroenGar/sparrow) | ⭐383 | Rust 实现的二维不规则条带排样 SOTA 算法，对钣金/裁剪下料有直接价值。 |

### 🧬 创成式与参数化设计

| 仓库 | Star | 一句话说明 |
|---|:-:|---|
| [**clay-good/anvilate**](https://github.com/clay-good/anvilate) | ⭐10 | 本地优先的机械设计 Agent：自然语言 → 物理校验 → 可编辑 STEP/DXF+Python 源码，直接对接 CATIA/SolidWorks/NX 工作流。 |
| [**rdevaul/yapCAD**](https://github.com/rdevaul/yapCAD) | ⭐29 | 高级程序化 CAD 与计算几何系统，Python 实现，适合科研型几何脚本。 |
| [**vykrum/Hywe**](https://github.com/vykrum/Hywe) | ⭐11 | F# 实现的计算空间设计环境，从关系图/规则/约束生成建筑空间配置。 |

### 🖨️ 3D 打印与制造

| 仓库 | Star | 一句话说明 |
|---|:-:|---|
| [**MarlinFirmware/Marlin**](https://github.com/MarlinFirmware/Marlin) | ⭐17,613 | RepRap 3D 打印机主流固件，支持 8/32 位 MCU，几乎所有商用 FDM 设备的底层。 |
| [**OrcaSlicer/OrcaSlicer**](https://github.com/OrcaSlicer/OrcaSlicer) | ⭐15,873 | 跨品牌 G-code 生成器（Bambu/Prusa/Voron/Creality 等），当前社区切片器的事实标杆。 |
| [**Ultimaker/Cura**](https://github.com/Ultimaker/Cura) | ⭐7,049 | 基于 Uranium 框架的开源切片 GUI，工业级 3D 打印入站工具链。 |
| [**maziggy/bambuddy**](https://github.com/maziggy/bambuddy) | ⭐3,058 | Bambu Lab 自托管管控中心，打破云依赖、面向本地化和打印农场。 |
| [**Donkie/Spoolman**](https://github.com/Donkie/Spoolman) | ⭐2,884 | 3D 打印耗材库存管理，是 AMS/Multi-Material 工作流的关键支撑。 |
| [**mainsail-crew/mainsail**](https://github.com/mainsail-crew/mainsail) | ⭐2,220 | Klipper 3D 打印机的主流 Web UI，Klipper 生态的核心入口。 |
| [**huxingyi/dust3d**](https://github.com/huxingyi/dust3d) | ⭐3,571 | 跨平台低多边形 3D 建模工具，专为 3D 打印与游戏资产而生。 |

### 🔗 文件格式与互操作

| 仓库 | Star | 一句话说明 |
|---|:-:|---|
| [**Open-Cascade-SAS/OCCT**](https://github.com/Open-Cascade-SAS/OCCT) | ⭐2,959 | 开源 3D CAD/CAM/CAE 平台，FreeCAD 与众多衍生项目的几何内核。 |
| [**f3d-app/f3d**](https://github.com/f3d-app/f3d) | ⭐4,742 | 快速极简 3D 查看器，支持 STEP/IGES/STL/OBJ/GLTF，多平台。 |
| [**fougue/mayo**](https://github.com/fougue/mayo) | ⭐2,276 | 基于 Qt + OpenCascade 的 CAD 查看/转换器，工程级桌面工具。 |
| [**andymai/brepjs**](https://github.com/andymai/brepjs) | ⭐114 | 浏览器内精确 B-Rep 几何库，是 Web CAD 工程化的关键拼图。 |
| [**andymai/occt-wasm**](https://github.com/andymai/occt-wasm) | ⭐59 | OpenCascade → WebAssembly，干净 TS API、arena 内存、Worker 支持。 |
| [**lzpel/cadrum**](https://github.com/lzpel/cadrum) | ⭐64 | 静态链接 OCCT 的 Rust CAD crate，原生 + WASM 双目标。 |
| [**bldrs-ai/Share**](https://github.com/bldrs-ai/Share) |

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*