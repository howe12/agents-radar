# CAD/机械结构开源动态日报 2026-08-09

> 数据来源: GitHub Search API (111 仓库) | ArXiv cs.GR+cs.CG (0 篇论文) | RSS 新闻 (2 条) | 生成时间: 2026-08-09 01:12 UTC

---

# CAD/机械结构开源动态日报

**日期：2026 年 8 月 6 日**

---

## 1. 今日速览

今日 CAD 与机械设计开源生态呈现两条主线并行的活跃态势：**一是 FreeCAD 生态的持续完善**（Manyfold 缩略图支持与 WIP Wednesday 披露的多项 Workbench 进展），**二是 AI 辅助设计工具链的快速渗透**——从 text-to-CAD、MCP 服务器到多智能体框架，相关仓库本周密集更新。**与此同时，Web 端 CAD 引擎（brepjs、occt-wasm、chili3d）持续降低几何内核在浏览器中运行的成本**，OCCT-as-a-Service 形态正在成为新的基础设施选项。

---

## 2. 行业脉搏

- **[Manyfold: Now with FreeCAD Thumbnails](https://blog.freecad.org/2026/08/06/manyfold-now-with-freecad-thumbnails/)** — Manyfold 这一开源 3D 打印物料管理系统正式接入 FreeCAD 缩略图渲染，补齐了 STL 之外的 CAD 源文件预览能力，对小批量/装配管理意义显著。

- **[WIP Wednesday, 5 August July 2026](https://blog.freecad.org/2026/08/05/wip-wednesday-5-august-july-2026/)** — FreeCAD 团队每周进展汇总，持续滚动 Part Design、Assembly、TechDraw 等核心 Workbench 的修复与改进，是 FreeCAD 1.x 路线推进的核心信号源。

- **FreeCAD 周边 AI 工具的"功能爆炸"** — 本周同步跃升的 `freecad-mcp`（32 tools）、`freecad-ai`、`GPT4FreeCAD`、`Scan2Sketch-OpenSource`、`FreeCAD-DFM-Workbench` 等仓库，意味着"AI-Native FreeCAD"已经从单点实验走向 Workbench 级别的插件生态。

- **Cloud-Free 3D 打印控制成为显性需求** — `maziggy/bambuddy`（"Your Bambu Lab. No Cloud. Your Rules."）的活跃与 `greghesp/ha-bambulab` 的迭代，反映出对厂商云依赖的反抗与自托管方案的市场化。

- **Web/桌面 3D 引擎栈加速收敛** — `chili3d`（4.7k★）、`brepjs`（精确 B-Rep）、`occt-wasm`（4MB brotli 的 OCCT WASM 版本）共同提示：浏览器正向"完整 CAD 客户端"演进。

---

## 3. 研究前沿

> ⚠️ 今日 cs.GR / cs.CG 领域无新论文上榜（数据源为空）。可关注 **ArXiv 同期大规模 Code-CAD / Text-to-CAD 类工作**的延续，例如 `Pan-Chera/Multi-Agent-CAD`（多智能体约束性文本到 CAD）与 `earthtojake/text-to-cad`（Agent 技能库），两者在 GitHub 上的活跃度本身就是研究落地速度的指标。

---

## 4. 重点项目

### 🖥️ CAD 平台与编辑器

| 仓库 | ⭐ | 一句话 |
|---|---|---|
| **[FreeCAD/FreeCAD](https://github.com/FreeCAD/FreeCAD)** | 32,708 | 开源参数化 3D 建模事实标准，本周持续 WIP 推进，是整个机械设计开源生态的"重力中心"。 |
| **[openscad/openscad](https://github.com/openscad/openscad)** | 9,909 | "程序员的实体造型器"，代码即几何，DSL 范式至今仍是脚本化 CAD 的对照基准。 |
| **[solvespace/solvespace](https://github.com/solvespace/solvespace)** | 4,086 | 极简 2D/3D 参数化求解器，链接关系+约束求解代表另一种工程哲学。 |
| **[xiangechen/chili3d](https://github.com/xiangechen/chili3d)** | 4,724 | 浏览器原生 3D CAD，Web CAD 工具链近一年增长最快的项目之一。 |
| **[CadQuery/cadquery](https://github.com/CadQuery/cadquery)** | 5,575 | 基于 OCCT 的 Python 参数化 CAD 脚本框架，是 Code-CAD 的事实标准。 |

### 📐 计算几何与内核

| 仓库 | ⭐ | 一句话 |
|---|---|---|
| **[Open-Cascade-SAS/OCCT](https://github.com/Open-Cascade-SAS/OCCT)** | 2,733 | Open CASCADE 开源版本，几乎所有现代开源 CAD 几何能力的根。 |
| **[CGAL/cgal](https://github.com/CGAL/cgal)** | 6,004 | 计算几何算法库，是网格处理、布尔运算、几何查询的"瑞士军刀"。 |
| **[cdcseacave/openMVS](https://github.com/cdcseacave/openMVS)** | 4,081 | 开源多视图立体重建库，逆向扫描 → 网格的关键工作流组件。 |
| **[leap71/PicoGK](https://github.com/leap71/PicoGK)** | 1,046 | 紧凑鲁棒的几何内核，专为计算工程（lattice / 创成式设计）轻量化部署。 |
| **[andymai/brepjs](https://github.com/andymai/brepjs)** | 77 | 浏览器侧精确 B-Rep 几何库，正在填补"Web 端没有真 CAD"的历史空白。 |

### 🧬 创成式与参数化设计

| 仓库 | ⭐ | 一句话 |
|---|---|---|
| **[Pan-Chera/Multi-Agent-CAD](https://github.com/Pan-Chera/Multi-Agent-CAD)** | 483 | "MAC"：解耦多智能体 + 受约束测试时计算，把 text-to-CAD 从单次生成推向工程化管线。 |
| **[JuliaTopOpt/TopOpt.jl](https://github.com/JuliaTopOpt/TopOpt.jl)** | 223 | Julia 拓扑优化包，单/多材料、桁架/连续体、2D/3D 统一在同一自动微分框架里。 |
| **[partcad/partcad](https://github.com/partcad/partcad)** | 483 | "可制造物理产品的包管理器"，把数字主线 / TDP 概念带进开源硬件世界。 |
| **[clay-good/anvilate](https://github.com/clay-good/anvilate)** | 4 | 本地优先的机械设计 Agent：自然语言 → 物理校验的 STEP/DXF + 可编辑 Python 源码。 |

### 🖨️ 3D 打印与制造

| 仓库 | ⭐ | 一句话 |
|---|---|---|
| **[MarlinFirmware/Marlin](https://github.com/MarlinFirmware/Marlin)** | 17,519 | RepRap 生态事实标准固件，几乎所有 3D 打印机的"通用语"。 |
| **[OrcaSlicer/OrcaSlicer](https://github.com/OrcaSlicer/OrcaSlicer)** | 15,351 | 面向 Bambu、Prusa、Voron、Creality 等多机型的 G-code 生成器，近年切片器赛道最热。 |
| **[Ultimaker/Cura](https://github.com/Ultimaker/Cura)** | 7,009 | 切片器老牌 GUI，Uranium 框架支撑下的桌面端标杆。 |
| **[Sienci-Labs/gsender](https://github.com/Sienci-Labs/gsender)** | 363 | 控制 grbl / grblHAL CNC 的现代 UI，让小型 CNC 软件栈跟上 3D 打印体验。 |
| **[Donkie/Spoolman](https://github.com/Donkie/Spoolman)** | 2,691 | 3D 打印耗材库存管理，配合 self-hosted 趋势明显的本地化需求。 |

### 🔗 文件格式与互操作

| 仓库 | ⭐ | 一句话 |
|---|---|---|
| **[f3d-app/f3d](https://github.com/f3d-app/f3d)** | 4,612 | 快速极简的 3D 查看器，跨格式预览首选。 |
| **[fougue/mayo](https://github.com/fougue/mayo)** | 2,120 | Qt + OCCT 的 3D CAD 查看与转换器，工程交付环节的实用工具。 |
| **[bldrs-ai/Share](https://github.com/bldrs-ai/Share)** | 181 | 浏览器端 BIM/CAD 协同查看器，原生支持 IFC、STEP、STL、OBJ、GLTF。 |
| **[andymai/occt-wasm](https://github.com/andymai/occt-wasm)** | 39 | OCCT 编译到 WebAssembly（~4MB brotli），让完整几何内核出现在浏览器/Node。 |

### 🐍 Code-CAD 与脚本化

| 仓库 | ⭐ | 一句话 |
|---|---|---|
| **[gumyr/build123d](https://github.com/gumyr/build123d)** | 2,817 | Python CAD 编程库，代数式建模 + OCCT 求解，与 CadQuery 互补。 |
| **[CadQuery/CQ-editor](https://github.com/CadQuery/CQ-editor)** | 1,206 | CadQuery 的 PyQt GUI 编辑器，Code-CAD 的 IDE 形态。 |
| **[pzfreo/draftwright](https://github.com/pzfreo/draftwright)** | 46 | 自动为 build123d 与 STEP 生成工程图，填补 Code-CAD 出图短板。 |
| **[madfam-org/yantra4d](https://github.com/madfam-org/yantra4d)** | 6 | 参数化 OpenSCAD 模型的网络化托管平台（web + WASM 渲染 + STL 导出 + 校验）。 |
| **[codeofaxel/Kiln](https://github.com/codeofaxel/Kiln)** | 43 | 面向 MCP 客户端的 3D 打印 MCP 服务器：Claude/Codex/Cursor 直接出图、出 G-code、打印。 |

---

## 5. 生态趋势信号

三个信号叠加，可以读出未来 12–18 个月的关键方向：

1. **"AI × CAD" 正从 Prompt→STL 的玩具级工具，走向"Workbench + Agent + 物理校验" 的工程化栈**——`Multi-Agent-CAD`、`anvilate`、`freecad-ai`、`Kiln` 的共同特点是：**结构化输出 + 可编辑源码 + 物理/制造校验**，而不是一张图就结束。
2. **Web 端正在获得"完整 CAD 体验"**——`occt-wasm`、`brepjs`、`chili3d`、`bldrs-ai/conway` 形成 WASM + 精确 B-Rep 的事实栈，使得浏览器既能看 IFC/STEP，又能做实体建模，未来"无需安装的 CAD" 将成为可能。
3. **数字主线 / Self-Hosted 治理理念扩散**——从 `bambuddy`、`Spoolman`、`partcad`、`FreeCAD-DFM-Workbench` 看，**用户对"软硬一体云依赖"的反弹**正在催生一批"本地优先 + 可导出 + 可审计"的工具族，与 PLM 思路吻合。

---

## 6. 值得关注

- 🔥 **[Pan-Chera/Multi-Agent-CAD](https://github.com/Pan-Chera/Multi-Agent-CAD)** — 把 text-to-CAD 工程化的代表。约束性测试时计算 + 多智能体解耦，是最接近"工程可用"而不是"概念演示"的方案，建议立刻 clone 试用。
- 🔥 **[occt-wasm + brepjs + chili3d 组合](https://github.com/xiangechen/chili3d)** — 浏览器端完整 CAD 栈正在收敛。如果你所在的团队还在为"Web 端只能看不能改"头疼，这是入场窗口。
- 🔥 **[codeofaxel/Kiln](https://github.com/codeofaxel/Kiln)** — MCP 协议 × 3D 打印 × 多机型支持，是"AI Agent 直接驱动物理设备"的最早一批落地项目之一，机械工程师应尽早评估其安全性与可审计性边界。

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*