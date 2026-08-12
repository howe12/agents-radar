# CAD/机械结构开源动态日报 2026-08-12

> 数据来源: GitHub Search API (100 仓库) | ArXiv cs.GR+cs.CG (0 篇论文) | RSS 新闻 (3 条) | 生成时间: 2026-08-12 01:20 UTC

---

# CAD/机械结构开源动态日报

**日期：2026 年 8 月 10 日**

---

## 1. 今日速览

今日 FreeCAD 社区预告将于 8 月 29 日举办全球黑客松，社区开发节奏持续活跃；GitHub 上 CAD 与 LLM 的融合正成为最强信号——`freecad-mcp`、`text-to-cad`、`Multi-Agent-CAD`、`Kiln` 等项目从自然语言/Agent 直驱机械建模的各个方向同时推进。同时，OCCT 通过 `occt-wasm` 走进浏览器，传统重内核 CAD 正在"前端化"。3D 切片与固件生态（Marlin、OrcaSlicer、Cura）保持高强度迭代，机械设计的代码化、AI 化、Web 化趋势并行加速。

---

## 2. 行业脉搏

- 🎉 **[Save the date: FreeCAD Hackathon August 29th 2026](https://blog.freecad.org/2026/08/10/save-the-date-freecad-hackathon-august-29th-2026/)** — FreeCAD 官方公布 8 月底黑客松日程，是 v1.x 路线推进与新插件协作的关键窗口。
- 🖼️ **[Manyfold: Now with FreeCAD Thumbnails](https://blog.freecad.org/2026/08/06/manyfold-now-with-freecad-thumbnails/)** — Manyfold 自托管 3D 资产库新增 FreeCAD 工程图缩略图支持，模型资产管理向"原生预览"迈进。
- 🛠️ **[WIP Wednesday, 5 August 2026](https://blog.freecad.org/2026/08/05/wip-wednesday-5-august-july-2026/)** — 开发者周报反映 PartDesign、Sketcher、Assembly 等核心工作台持续打磨，是了解 FreeCAD 内核演进的一手资料。

> 今日无 cs.GR / cs.CG 论文新增，但下方"重点项目"中包含多篇 arXiv 风格（开源发布 + 可验证复现）的几何/CAD 研究成果。

---

## 3. 研究前沿

今日 ArXiv cs.GR / cs.CG 无新增论文。但开源仓库中出现了多个具备"准论文"价值的几何与创成式设计成果：

- **[Pan-Chera/Multi-Agent-CAD](https://github.com/Pan-Chera/Multi-Agent-CAD)** ⭐734：将文本到 CAD 的生成任务拆解为多智能体协作框架，强调"约束下的测试时计算"，对生成式工程的可控性研究具有直接参考价值。
- **[Roshera-CAD](https://github.com/varun29ankuS/Roshera-CAD)** ⭐3：以 Rust 实现的 B-Rep 几何内核，主张每个操作返回"结构不变式验证证书"，失败即报错而非近似——为 CAD 引擎的形式化验证提供了新路径。
- **[ChiselCAD](https://github.com/particlesector/chiselcad)** ⭐13：基于 C++20、Vulkan 与 Manifold 的 GPU 加速 CSG 建模器，OpenSCAD 兼容语法，挑战传统 CPU 几何流水线的吞吐极限。

---

## 4. 重点项目

### 🖥️ CAD 平台与编辑器

| 项目 | Star | 简介 |
|---|---|---|
| [**FreeCAD/FreeCAD**](https://github.com/FreeCAD/FreeCAD) | ⭐32,778 | 官方主线，多平台参数化 3D 建模器，机械设计开源生态的事实标准。 |
| [**openscad/openscad**](https://github.com/openscad/openscad) | ⭐9,923 | "程序员的实体建模器"，代码即几何，是参数化、教育与可复现设计的标杆。 |
| [**solvespace/solvespace**](https://github.com/solvespace/solvespace) | ⭐4,090 | 轻量级 2D/3D 参数化 CAD，约束求解器强，适合嵌入教学与小型机构场景。 |
| [**dune3d/dune3d**](https://github.com/dune3d/dune3d) | ⭐2,036 | 新兴 3D CAD，强调建模流与简洁界面，约束求解路线值得关注。 |

### 📐 计算几何与内核

| 项目 | Star | 简介 |
|---|---|---|
| [**Open-Cascade-SAS/OCCT**](https://github.com/Open-Cascade-SAS/OCCT) | ⭐2,749 | 开源 3D CAD/CAM/CAE 平台底座，FreeCAD、KiCad、Slicer 等众多项目的几何基石。 |
| [**mikedh/trimesh**](https://github.com/mikedh/trimesh) | ⭐3,646 | Python 三角网格库，3D 打印与机械仿真前处理必备工具，活跃度极高。 |

### 🧬 创成式与参数化设计

| 项目 | Star | 简介 |
|---|---|---|
| [**earthtojake/text-to-cad**](https://github.com/earthtojake/text-to-cad) | ⭐13,277 | 面向 CAD/CAE/CAM 的 Agent Skills 库，是当前最大体量的"自然语言→机械设计"开源工程。 |
| [**Pan-Chera/Multi-Agent-CAD**](https://github.com/Pan-Chera/Multi-Agent-CAD) | ⭐734 | 多智能体解耦框架，结合约束测试时计算，把生成式 CAD 从单模型转向协同推理。 |

### 🖨️ 3D 打印与制造

| 项目 | Star | 简介 |
|---|---|---|
| [**MarlinFirmware/Marlin**](https://github.com/MarlinFirmware/Marlin) | ⭐17,524 | 全球最广泛部署的开源 3D 打印固件，8/32 位 MCU 全平台兼容。 |
| [**OrcaSlicer/OrcaSlicer**](https://github.com/OrcaSlicer/OrcaSlicer) | ⭐15,375 | 主流切片器，深度支持 Bambu / Prusa / Voron / RatRig / Creality 等多机型。 |
| [**Ultimaker/Cura**](https://github.com/Ultimaker/Cura) | ⭐7,011 | 老牌切片 GUI，工业级插件生态，是打印工作流的事实参考实现。 |

### 🔗 文件格式与互操作

| 项目 | Star | 简介 |
|---|---|---|
| [**f3d-app/f3d**](https://github.com/f3d-app/f3d) | ⭐4,616 | 极简高速 3D 检视器，跨格式（STEP/3MF/STL/GLTF 等），CI/CD 与工程可视化利器。 |
| [**andymai/occt-wasm**](https://github.com/andymai/occt-wasm) | ⭐41 | 把 OCCT 编译到 WebAssembly，~4MB brotli、零拷贝 API，把 STEP 解析带进浏览器。 |

### 🐍 Code-CAD 与脚本化

| 项目 | Star | 简介 |
|---|---|---|
| [**CadQuery/cadquery**](https://github.com/CadQuery/cadquery) | ⭐5,592 | 基于 OCCT 的 Python 参数化脚本框架，工业自动化与生成式建模首选。 |
| [**gumyr/build123d**](https://github.com/gumyr/build123d) | ⭐2,837 | 现代化 Python CAD 库，融合实模式/边界模式与 3D 打印工作流，文档与社区双双活跃。 |
| [**neka-nat/freecad-mcp**](https://github.com/neka-nat/freecad-mcp) | ⭐1,758 | FreeCAD 的 Model Context Protocol 服务器，让 LLM 工具链直接操控 FreeCAD 实体。 |

---

## 5. 生态趋势信号

**CAD × LLM × MCP 正在成为最强风口**：`freecad-mcp`（1.7k⭐）、`blwfish/freecad-mcp`、`codeofaxel/Kiln`、`revhappy/GPT4FreeCAD`、`earthtojake/text-to-cad` 五个独立项目同一窗口活跃，意味着"自然语言 / Agent 驱动机械建模"正从单点实验走向多协议、多后端的协议化阶段。与此同时，**OCCT 的 WASM 化**（`occt-wasm`、`bldrs-ai/conway`）与传统 **Web CAD 检视器**（`bldrs-ai/Share`、`f3d`）合力，把"重型 CAD"前端化——未来机械设计的协作、审阅、生成将越来越发生在浏览器内。**形式化验证内核**（`Roshera-CAD`）与 **GPU 加速 CSG**（`ChiselCAD`）则代表了底层几何引擎向"可信 + 高性能"演进的两个新支线。

---

## 6. 值得关注

1. 🤖 **[Multi-Agent-CAD](https://github.com/Pan-Chera/Multi-Agent-CAD)** — 把"约束满足 + 测试时计算"引入文本到 CAD，可能成为生成式机械设计从"演示"走向"可用工程件"的范式参考，建议持续追踪其论文与基准。
2. 🧠 **[FreeCAD MCP 生态](https://github.com/neka-nat/freecad-mcp)** — 32 个 AI 工具直接驱动 FreeCAD，是当前把 LLM 真正落到参数化建模流程里最完整的开源接口，建议关注其与 CadQuery / build123d 工具链的协同。
3. 🌐 **[occt-wasm](https://github.com/andymai/occt-wasm)** — OCCT 进入浏览器意味着 STEP/IGES 文件可以在网页端被精确解析与编辑，是"Web 原生 CAD"的关键拼图，值得在内部 PoC 中验证其内存与吞吐。

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*