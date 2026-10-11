# CAD/机械结构开源动态日报 2026-10-11

> 数据来源: GitHub Search API (117 仓库) | ArXiv cs.GR+cs.CG (0 篇论文) | RSS 新闻 (4 条) | 生成时间: 2026-10-11 03:23 UTC

---

# CAD/机械结构开源动态日报
**2026-10-09**

---

## 1. 今日速览

今日 FreeCAD 社区集中放量 — BIM Meetup 启动、26.3 RC1 释出、WIP Wednesday 三连发布，反映项目正同时在**建筑信息模型（AEC）扩展**与**稳定版本迭代**两条主线上推进。ArXiv cs.GR/cs.CG 今日无新论文，但 GitHub 活跃列表透露的信号远不止于此：**Text-to-CAD / Code-CAD 范式持续井喷**（earthtojake/text-to-cad ⭐19k、CADAM ⭐5.2k），**Rust 原生 CAD 内核开始成形**（solvecraft、cadrum），**MCP 协议正在重新定义 CAD/3D 打印与 AI Agent 的边界**（FreeCAD MCP、mcp-3D-printer-server、Kiln）。三条主线交汇处，是 2026 年机械设计工具最值得关注的方向：**"AI 助手能直接驱动 B-Rep 内核并完成自校验"**。

---

## 2. 行业脉搏

- **[FreeCAD 26.3 Release Candidate 1](https://blog.freecad.org/2026/10/08/freecad-26-3-release-candidate-1/)** — 26.x 系列首个 RC，意味着 FreeCAD 1.0 重构后第二个长期支持节奏正式进入 QA 阶段，对 OEM 和下游 Linux 发行版的打包时机尤为关键。
- **[Announcing FreeCAD BIM meetups](https://blog.freecad.org/2026/10/09/announcing-freecad-bim-meetups/)** — FreeCAD BIM 工作组（BIMWB）正式启动线下 Meetup 网络，是开源 BIM/IFC 工作流走向实体社区、与 BlenderBIM 互补的关键一步。
- **[WIP Wednesday, 7 October 2026](https://blog.freecad.org/2026/10/07/wip-wednesday-7-october-2026/)** — 本期合并涉及的 Part/Assembly、Sketcher、TechDraw 三大模块继续打磨，进一步收敛 RC 阶段剩余缺陷。
- **[Prusa 万圣节促销](https://blog.prusa3d.com/get-ready-for-halloween-with-our-spooky-filament-offer_138639/)** — 多色夜光耗材套装促销，对消费级打印机 + 多材料工程用户具参考价值（PLA/PETG/Glow 复合体系的工艺边界）。

---

## 3. 研究前沿

> 📭 今日 ArXiv cs.GR / cs.CG **无新增论文**。研究侧暂时缺位，仍以仓库侧动向为主线。

---

## 4. 重点项目

### 🖥️ CAD 平台与编辑器

| 仓库 | ⭐ | 说明 |
|---|---|---|
| **[FreeCAD/FreeCAD](https://github.com/FreeCAD/FreeCAD)** | 34,133 | 开源多平台三维参数化建模旗舰；BIM/Part Design/Path/Sketcher/Assembly 全栈，对教学与企业自托管流水线价值持续放大。 |
| **[xiangechen/chili3d](https://github.com/xiangechen/chili3d)** | 4,901 | 完全运行在浏览器中的三维 CAD（WebGL/TS），是"零安装"协同与 SaaS CAD 路线的有力候选。 |
| **[openscad/openscad](https://github.com/openscad/openscad)** | 10,414 | "程序员的实体建模器"，配合 BOSL2 仍是参数化/可重用件库最稳定的 DSL 路线。 |
| **[solvespace/solvespace](https://github.com/solvespace/solvespace)** | 4,188 | 体积小、求解器准确，支持约束传播；适合运动学校核与嵌入式工程化部署。 |
| **[bherbruck/solvecraft](https://github.com/bherbruck/solvecraft)** | 135 | **纯 Rust 干净室复刻 Fusion 360**，已支持桌面/浏览器 + MCP；代表"闭源 CAD 开源化"的新一波尝试，值得长期跟踪。 |

### 📐 计算几何与内核

| 仓库 | ⭐ | 说明 |
|---|---|---|
| **[Open-Cascade-SAS/OCCT](https://github.com/Open-Cascade-SAS/OCCT)** | 2,984 | 现代开源 CAD/CAM/CAE 几何内核的事实标准；cadquery / build123d / FreeCAD Part 均依赖之。 |
| **[CGAL/cgal](https://github.com/CGAL/cgal)** | 6,072 | 计算几何算法权威实现：三角化、Bool、Arrangement、Mesh 处理，是研究/工业代码复用首选。 |
| **[google/draco](https://github.com/google/draco)** | 7,505 | 3D 网格/点云压缩库，对 AR/VR/Web 传输大模型与 STEP→Mesh 流水线降本意义重大。 |
| **[pyvista/pyvista](https://github.com/pyvista/pyvista)** | 3,842 | VTK 的 Pythonic 封装；科研/CAD 后处理、CAE 可视化、热仿真结果呈现首选。 |

### 🧬 创成式与参数化设计

| 仓库 | ⭐ | 说明 |
|---|---|---|
| **[earthtojake/text-to-cad](https://github.com/earthtojake/text-to-cad)** | 19,008 | "给你的 Agent 装上 CAD 超能力" — 自然语言→参数化模型，已成为 AI Agent 工作流的事实接口组件。 |
| **[Adam-CAD/CADAM](https://github.com/Adam-CAD/CADAM)** | 5,238 | 开源 Text-to-CAD Web 应用，是 text-to-cad 最完整的前端实现，适合作为产品形态参照。 |
| **[JeroenGar/sparrow](https://github.com/JeroenGar/sparrow)** | 388 | Rust 实现的二维不规则排样 SOTA，对钣金/CNC/切割/包装等排版场景直接可投产。 |
| **[partcad/partcad](https://github.com/partcad/partcad)** | 504 | "硬件的包管理器"，聚焦 TDP（Technical Data Package）/Digital Thread 标准；面向参数化件的复用与版本化。 |
| **[clay-good/anvilate](https://github.com/clay-good/anvilate)** | 10 | Local-first 的机械设计 Agent：英语描述→物理校验的 STEP/DXF，输出可编辑 Python 源码后端，对**端到端工程交付**极具冲击力。 |

### 🖨️ 3D 打印与制造

| 仓库 | ⭐ | 说明 |
|---|---|---|
| **[MarlinFirmware/Marlin](https://github.com/MarlinFirmware/Marlin)** | 17,618 | 八位/三十二位 MCU 通吃的 RepRap 固件事实标准；3D 打印机出货量最大的底座。 |
| **[OrcaSlicer/OrcaSlicer](https://github.com/OrcaSlicer/OrcaSlicer)** | 15,917 | Bambu/Prusa/Voron/VzBot/RatRig/Creality 跨品牌切片器，对**多机型农场**高优先级。 |
| **[maziggy/bambuddy](https://github.com/maziggy/bambuddy)** | 3,071 | 自托管 Bambu Lab 云替代：从单机到整个打印农场的本地控制中心，"反云锁定"代表项目。 |
| **[codeofaxel/Kiln](https://github.com/codeofaxel/Kiln)** | 92 | **MCP 服务器 for 3D 打印**：设计→切片→打印一站式对接 Bambu/Creality/Prusa/Klipper/OctoPrint，是 Agentic 制造的代表入口。 |
| **[DMontgomery40/mcp-3D-printer-server](https://github.com/DMontgomery40/mcp-3D-printer-server)** | 250 | MCP ↔ 主流 3D 打印 API（Orca/Bambu

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*