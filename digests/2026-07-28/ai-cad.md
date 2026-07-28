# CAD/机械结构开源动态日报 2026-07-28

> 数据来源: GitHub Search API (115 仓库) | ArXiv cs.GR+cs.CG (4 篇论文) | RSS 新闻 (5 条) | 生成时间: 2026-07-28 01:57 UTC

---

# 🛠️ CAD / 机械结构开源动态日报

**日期**：2026‑07‑27　　**主题**：FreeCAD 1.x 快速迭代、AI‑CAD 全面渗透、WebAssembly OCCT 重塑前端 CAD

---

## 1. 今日速览

- **FreeCAD 一周内连发 1.1.2 与 1.1.3 两个版本**，节奏明显加快，表明 1.x 系列已进入稳定维护＋功能微调阶段，配套生态（MCP、AI、SheetMetal、Gears）同步活跃。
- **AI‑to‑CAD 概念正式"工具化"**：FreeCAD‑MCP、Freecad‑AI、CADAM、AgentSCAD、Anvilate、Kiln 等十余个项目把自然语言／大模型接入到 OpenSCAD、CadQuery、build123d、FreeCAD 流水线，"用嘴画图"正在从演示走向生产。
- **OCCT 全面 WASM 化**：`cadrum`（Rust）、`occt‑wasm`（Rust/TS）、`brepjs`（TS）三剑齐发，4MB brotli 的浏览器端 B‑Rep 内核正把 STEP 解析与参数化建模搬到 Web。
- **学术侧**为 CAD 注入新血液：神经最小曲面表示（Neural Minimal Surfaces）与生成式人体头部参数模型（GNM Head）为逆向／造型工具提供了新的可微表达。
- **制造端"去云化"**：`bambuddy`、`ha‑bambulab`、`Spoolman`、`gsender` 形成自托管 3D 打印／CNC 农场栈，与切片端 OrcaSlicer、Marlin 共同构建独立于云厂商的工作流。

---

## 2. 行业脉搏

| # | 动态 | 意义 |
|---|---|---|
| 1 | **[FreeCAD 1.1.3 released](https://blog.freecad.org/2026/07/25/freecad-1-1-3-released/)** | 1.x 第三个补丁版本发布，修复 + 微功能迭代；说明 FreeCAD 已进入"周级发版"的可持续节奏，降低下游发行版打包风险。 |
| 2 | **[FreeCAD 1.1.2 released](https://blog.freecad.org/2026/07/23/freecad-1-1-2-released/)** | 与 1.1.3 仅隔 2 天，反映出上游 CI 与 issue 响应机制高度成熟，是企业评估生产可用的重要信号。 |
| 3 | **[FreeCAD E‑Sport Speed Run Challenge at EMF camp 2026](https://blog.freecad.org/2026/07/27/freecad-e-sport-speed-run-challenge-at-emf-camp-2026/)** | 首次以"电竞"形式推广参数化建模比赛，把"建模速度与规范性"作为可观赏的技能项，有助于吸引年轻开发者、扩大社区。 |
| 4 | **[Prusament PA11 Natural: The perfect choice for printing gears and moving parts](https://blog.prusa3d.com/prusament-pa11-natural-material-with-extreme-mechanical-and-chemical-resistance_137458/)** | 推出耐化学、极高韧性的 PA11 线材；为 3D 打印的**功能件 / 齿轮**提供商业级材料参考，影响打印件选型与设计许用应力。 |
| 5 | **[WIP Wednesday, 22 July 2026](https://blog.freecad.org/2026/07/22/wip-wednesday-22-july-2026/)** | 工作进展周报：Assembly、Part Design、OCCT 升级、AppImage 构建等多条主线并行，是了解 FreeCAD 路线图的"每周必读"。 |

---

## 3. 研究前沿

| # | 论文 | 对 CAD / 机械设计的贡献 |
|---|---|---|
| 1 | **[Neural Representation of Minimal Surfaces (Jiayin Sun, Albert Chern)](http://arxiv.org/abs/2607.23437v1)** — *cs.GR* | 提出最小曲面的**神经网络连续表达**，不依赖网格或 PINN 离散。可用于薄膜结构、仿生蒙皮、可微曲面优化与高阶 CAD 建模，是"可微几何"在工业曲面上的潜在范式。 |
| 2 | **[GNM Head: A Generative aNthropometric Model of the human head (Ploumpis, Bednarik et al.)](http://arxiv.org/abs/2607.23687v1)** — *cs.GR* | 生成式人体头部参数模型，结合生物统计与生成式深度模型，可驱动**人体工学头盔、座椅、虚拟试穿**等场景，对人因 CAD 是直接利好。 |
| 3 | **[A Fixed‑Parameter Algorithm for Extending Upward Planar Drawings (Chekan, Ganian et al.)](http://arxiv.org/abs/2607.23549v1)** — *cs.CG* | 对 DAG 上向平面图绘制扩展问题给出 FPT 算法，可应用于**装配爆炸图、电气原理图、BOM 树**的自动布局，提升工程图表达效率。 |
| 4 | **[Paged Geophylogenies: External Labeling with Tree Constraints (Depian, van Dijk et al.)](http://arxiv.org/abs/2607.23559v1)** — *cs.CG* | 把"外部标注 + 树结构约束"的可视化推到生产级，对 CAD 中的**版本树、设计变更标注、PLM 历史图**有借鉴价值。 |

---

## 4. 重点项目

### 🖥️ CAD 平台与编辑器

| 仓库 | ⭐ | 一句话价值 |
|---|---|---|
| **[FreeCAD/FreeCAD](https://github.com/FreeCAD/FreeCAD)** | 32,417 | 跨平台开源参数化 3D CAD 标杆；本周边发 1.1.2/1.1.3，1.x 系列稳固，社区生态（MCP / AI / SheetMetal）最完整。 |
| **[openscad/openscad](https://github.com/openscad/openscad)** | 9,823 | "程序员的实体建模器"，脚本化纯函数式 CAD；AgentSCAD、chiselcad、AI 工具链围绕其语法构建。 |
| **[solvespace/solvespace](https://github.com/solvespace/solvespace)** | 4,064 | 极轻量 2D/3D 参数化 CAD，单文件 ~5MB，适合嵌入式、HUD、教学与机械原理示意。 |
| **[CadQuery/cadquery](https://github.com/CadQuery/cadquery)** | 5,518 | 基于 OCCT 的 Python 参数化脚本框架，机械工程师"用代码建模"的事实标准。 |
| **[LibreCAD/LibreCAD](https://github.com/LibreCAD/LibreCAD)** | 6,159 | 跨平台 2D CAD，DXF/DWG 兼容完整；仍是 2D 工程图与制造业出图主力。 |

### 📐 计算几何与内核

| 仓库 | ⭐ | 一句话价值 |
|---|---|---|
| **[Open-Cascade-SAS/OCCT](https://github.com/Open-Cascade-SAS/OCCT)** | 2,684 | 开源 B‑Rep 内核之王，FreeCAD、CadQuery、Mayo、cadrum 等的底座；本周边缘扩展活跃。 |
| **[CGAL/cgal](https://github.com/CGAL/cgal)** | 5,991 | 计算几何算法库的"事实标准"，覆盖三角化、布尔、偏移、几何核；CAD 与仿真研究必备。 |
| **[polydera/trueform](https://github.com/polydera/trueform)** | 129 | "几何界的 STL"——精确网格布尔 + 空间查询 + 重网格，性能与精度兼具的现代替代品。 |

### 🧬 创成式与参数化设计

| 仓库 | ⭐ | 一句话价值 |
|---|---|---|
| **[Adam-CAD/CADAM](https://github.com/Adam-CAD/CADAM)** | 4,887 | 开源 Web 端文本 → CAD 应用，提示词到几何模型；代表 GenAI 进入主流 CAD 体验的趋势。 |
| **[clay-good/anvilate](https://github.com/clay-good/anvilate)** | 3 | 面向机械工程师的本地优先设计 Agent，自然语言直接产出**物理校验后的 STEP/DXF**，并给出可编辑 Python 源码，是"AI‑First CAD"的典型雏形。 |
| **[Kevoyuan/AgentSCAD](https://github.com/Kevoyuan/AgentSCAD)** | 5 | AI‑Native CAD Agent：自然语言 → 经验证的 OpenSCAD 工件 + 自动几何修复 + 制造验证。 |

### 🖨️ 3D 打印与制造

| 仓库 | ⭐ | 一句话价值 |
|---|---|---|
| **[MarlinFirmware/Marlin](https://github.com/MarlinFirmware/Marlin)** | 17,502 | 商业与桌面级 3D 打印机的事实固件，8/32 位 MCU 全覆盖。 |
| **[OrcaSlicer/OrcaSlicer](https://github.com/OrcaSlicer/OrcaSlicer)** | 15,249 | 跨品牌切片器（Bambu / Prusa / Voron / VzBot / Creality），社区迭代极快。 |
| **[Ultimaker/Cura](https://github.com/Ultimaker/Cura)** | 7,001 | 老牌切片 GUI，基于 Uranium 框架，插件生态成熟。 |
| **[maziggy/bambuddy](https://github.com/maziggy/bambuddy)** | 2,663 | 自托管 Bambu Lab 集群管理，1 ~ 40 台机器的"私有云"控制中心。 |

### 🔗 文件格式与互操作

| 仓库 | ⭐ | 一句话价值 |
|---|---|---|
| **[f3d-app/f3d](https://github.com/f3d-app/f3d)** | 4,578 | 快速极简的 3D 桌面查看器，STEP/IGES/STL/3MF 等多格式一键预览，工程评审利器。 |
| **[andymai/occt-wasm](https://github.com/andymai/occt-wasm)** | 32 | OCCT 编译到 WASM，~4MB brotli，干净 TypeScript API + Web Worker；浏览器内做 B‑Rep 操作的里程碑。 |
| **[andymai/brepjs](https://github.com/andymai/brepjs)** | 73 | 基于 OCCT 的 Web 端精确 B‑Rep 几何库，前端 CAD 应用的下一代底座。 |
| **[bldrs-ai/conway](https://github.com/bldrs-ai/conway)** | 22 | 高性能 IFC + STEP Web 引擎，让 BIM/CAD 在浏览器里跑得动。 |

### 🐍 Code‑CAD 与脚本化

| 仓库 | ⭐ | 一句话价值 |
|---|---|---|
| **[gumyr/build123d](https://github.com/gumyr/build123d)** | 2,713 | CadQuery 作者推出的 Python CAD 编程库，定位"面向对象的 3D 建模"，近年增长最猛的 Code‑CAD 库。 |
| **[neka-nat/freecad-mcp](https://github.com/neka-nat/freecad-mcp)** | 1,472 | FreeCAD 的 MCP 服务器，让 Claude/Cursor 等 LLM 直接驱动 FreeCAD 进行建模

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*