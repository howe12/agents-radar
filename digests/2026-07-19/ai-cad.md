# CAD/机械结构开源动态日报 2026-07-19

> 数据来源: GitHub Search API (110 仓库) | ArXiv cs.GR+cs.CG (0 篇论文) | RSS 新闻 (2 条) | 生成时间: 2026-07-19 02:05 UTC

---

# CAD/机械结构开源动态日报
**日期：2026 年 7 月 15 日**

---

## 1. 今日速览

今日 FreeCAD 社区进入 WIP 周三活跃期，官方同步上线了"Banana For Scale!"这一趣味度量参照插件，凸显扩展生态持续繁荣。GitHub 端，七天内活跃的 110 个相关仓库反映出三个明显聚焦点：**AI-Agent 驱动的 Code-CAD（AgentSCAD、Kiln、CADAM、cad-cae-copilot、anvilate）** 持续涌现；**浏览器/WASM 化 B-Rep 内核（chili3d、replicad、occt-wasm、cadrum、brepjs、conway）** 呈密集迭代；传统切片与固件（Marlin、OrcaSlicer、Cura）依然保持高 star 的稳态演化。ArXiv 端今日 cs.GR/cs.CG 暂无新增，预示学术界进入"消化期"，但工程社区的代码化、智能化势头不减。

---

## 2. 行业脉搏

- **[WIP Wednesday, 15 July 2026](https://blog.freecad.org/2026/07/15/wip-wednesday-15-july-2026/)** — FreeCAD 官方汇总本周主干与工作台的开发进度（WIP），是观察 FreeCAD 路线图最快的窗口，对用户预判功能落地节点具有直接价值。
- **[New Addon; Banana For Scale!](https://blog.freecad.org/2026/07/12/new-addon-banana-for-scale/)** — FreeCAD 新增"Banana For Scale"插件，借助香蕉实物尺度对照快速估测模型体量，反映社区对"轻量工具、即时反馈"理念的偏好。
- **AI-Agent × CAD 工具链集中爆发**：Kiln（MCP 服务器）、CADAM（Text-to-CAD）、AgentSCAD、cad-cae-copilot、anvilate 等项目在 7 日内均有推送，标志"自然语言/Agent 到可制造几何"的工程闭环正从概念验证走向工具落地。
- **浏览器/WASM B-Rep 引擎形成集群**：chili3d、replicad、occt-wasm、cadrum、conway、brepjs 共同把 OpenCASCADE 能力推进到纯前端，标志着零安装 CAD 正在变成现实。
- **3D 打印栈稳态演化**：Marlin、OrcaSlicer、Cura 主仓活跃，意味着切片与固件仍是创客硬件生态最稳健的迭代前沿。

---

## 3. 研究前沿

> 📭 今日 ArXiv cs.GR / cs.CG **暂无新增** 与 CAD/机械设计直接相关的论文。建议关注近期常被引用的几何处理、网格 BVH、路径追踪方向（three-mesh-bvh、three-gpu-pathtracer、trueform）以观察工程化落地。可待明日再作专项追踪。

---

## 4. 重点项目

### 🖥️ CAD 平台与编辑器

| 仓库 | ⭐ | 一句话说明 |
|---|---|---|
| **[FreeCAD/FreeCAD](https://github.com/FreeCAD/FreeCAD)** | 32,209 | 开源参数化 3D CAD 的旗舰，支持 PartDesign/装配/工程图，对标 SolidWorks/Fusion 的免费替代。 |
| **[openscad/openscad](https://github.com/openscad/openscad)** | 9,763 | "程序员友好"的脚本化实体建模器，参数化设计最早期的标杆，参数驱动几何。 |
| **[xiangechen/chili3d](https://github.com/xiangechen/chili3d)** | 4,689 | 基于浏览器的 3D CAD 应用，把建模能力推向纯前端部署，是 Web-CAD 重要力量。 |
| **[solvespace/solvespace](https://github.com/solvespace/solvespace)** | 4,046 | 轻量化参数 2D/3D CAD，支持约束求解与运动仿真，适合教学与小型装配。 |
| **[LibreCAD/LibreCAD](https://github.com/LibreCAD/LibreCAD)** | 6,117 | 跨平台 2D CAD，DXF/DWG 互读，机械图纸输出首选免费工具。 |

### 📐 计算几何与内核

| 仓库 | ⭐ | 一句话说明 |
|---|---|---|
| **[Open-Cascade-SAS/OCCT](https://github.com/Open-Cascade-SAS/OCCT)** | 2,657 | 开源 3D CAD/CAM/CAE 平台，几何内核（BREP/Bool/CSG）事实标准，是所有 Code-CAD 的底座。 |
| **[CGAL/cgal](https://github.com/CGAL/cgal)** | 5,981 | 计算几何算法库（Delaunay/Mesh/Boolean），研究到工业的桥梁。 |
| **[polydera/trueform](https://github.com/polydera/trueform)** | 128 | 高精度、快速的网格布尔/空间查询/重网格库，多语言绑定，是新一代几何底座的有力候选。 |
| **[mikedh/trimesh](https://github.com/mikedh/trimesh)** | 3,630 | Python 三角网格处理库，研究与工程流水线的"瑞士军刀"，3D 打印切片前处理常用。 |

### 🧬 创成式与参数化设计

| 仓库 | ⭐ | 一句话说明 |
|---|---|---|
| **[Adam-CAD/CADAM](https://github.com/Adam-CAD/CADAM)** | 4,820 | 开源文本到 CAD 的 Web 应用，让"描述即建模"在浏览器中体验。 |
| **[armpro24-blip/cad-cae-copilot](https://github.com/armpro24-blip/cad-cae-copilot)** | 40 | AI-native CAD/CAE/CAX 工作台，基于 build123d+OCCT 的真实几何 + MCP 工具链。 |
| **[clay-good/anvilate](https://github.com/clay-good/anvilate)** | 2 | 本地优先的机械工程设计 Agent，自然语言 → 物理校验过的 STEP/DXF，可直入 CATIA/SolidWorks。 |
| **[PranavChahal/sphaire-web](https://github.com/PranavChahal/sphaire-web)** | 2 | 浏览器原生、AI 辅助的参数化 CAD，基于 OCCT/WASM，开箱即用。 |

### 🖨️ 3D 打印与制造

| 仓库 | ⭐ | 一句话说明 |
|---|---|---|
| **[MarlinFirmware/Marlin](https://github.com/MarlinFirmware/Marlin)** | 17,481 | 8/32 位打印机固件事实标准，覆盖绝大多数消费级/创客级机型，是打印机"操作系统"。 |
| **[OrcaSlicer/OrcaSlicer](https://github.com/OrcaSlicer/OrcaSlicer)** | 15,148 | 跨品牌 G-code 生成器（Bambu/Prusa/Voron/Creality 等），切片智能化代表。 |
| **[Ultimaker/Cura](https://github.com/Ultimaker/Cura)** | 6,997 | 经典开源切片 GUI，依托 Uranium 框架的插件生态。 |

### 🔗 文件格式与互操作

| 仓库 | ⭐ | 一句话说明 |
|---|---|---|
| **[f3d-app/f3d](https://github.com/f3d-app/f3d)** | 4,554 | 极快极简的 3D 查看器，便于在 CI/CAD 流水线中嵌入模型审阅。 |
| **[sgenoud/replicad](https://github.com/sgenoud/replicad)** | 659 | 基于浏览器的代码式 3D 建模库，降低 Code-CAD 上手门槛。 |
| **[andymai/brepjs](https://github.com/andymai/brepjs)** | 69 | 精确 B-Rep 的 Web CAD 库，是浏览器内做"真 CAD"的关键组件。 |
| **[andymai/occt-wasm](https://github.com/andymai/occt-wasm)** | 28 | OpenCASCADE 编译为 WASM（~4MB brotli），为前端应用提供工业级几何内核。 |
| **[bldrs-ai/conway](https://github.com/bldrs-ai/conway)** | 22 | 高性能 IFC/STEP Web 引擎，专为 Web CAD 的全栈协同而生。 |

### 🐍 Code-CAD 与脚本化

| 仓库 | ⭐ | 一句话说明 |
|---|---|---|
| **[CadQuery/cadquery](https://github.com/CadQuery/cadquery)** | 5,472 | 基于 OCCT 的 Python 参数化 CAD 脚本框架，工程流水线化建模的主流选择。 |
| **[gumyr/build123d](https://github.com/gumyr/build123d)** | 2,659 | Python CAD 编程库，强调"使用体验像写代码"，是 CadQuery 之后的下一代 Code-CAD 选项。 |
| **[codeofaxel/Kiln](https://github.com/codeofaxel/Kiln)** | 35 | 面向 MCP 的开源 3D 打印服务器，AI Agent 在 Claude/Codex/Cursor 内即可完成设计→切片→打印闭环。 |
| **[Kevoyuan/AgentSCAD](https://github.com/Kevoyuan/AgentSCAD)** | 5 | AI 原生 CAD Agent，自然语言→校验过的 OpenSCAD 产物，自动化几何修复与制造校验。 |
| **[particlesector/chiselcad](https://github.com/particlesector/chiselcad)** | 10 | C++20 + Vulkan + Manifold 的 GPU 加速 CSG，与 OpenSCAD 语法兼容，探索高性能脚本 CAD。 |

---

## 5. 生态趋势信号

今日生态图谱中有三条相互呼应的趋势线：

① **AI Agent 渗透到 Code-CAD 端到端**：Kiln（MCP 总线）、AgentSCAD（自然语言→OpenSCAD）、CADAM（文本→CAD Web）、cad-cae-copilot（build123d/OCCT + MCP 工具）、anvilate（自然语言→校验 STEP/DXF）几乎同一周内持续迭代，预示"AI Agent 即设计师"开始从演示走向实际工具链；② **浏览器/WASM 化 B-Rep 形成第二战场**：chili3d、replicad、brepjs、occt-wasm、cadrum、conway 共同把 OCCT 工程级内核前移至 Web，让"零安装 CAD / 协作审阅 / 设计嵌入网页"成为现实，对桌面 CAD 商业版形成开源侧挤压；③ **传统切片/固件平稳迭代**：Marlin、OrcaSlicer、Cura 高 star 与持续推送印证"硬件到软件到社区"的最稳态闭环仍是机械设计落地的承重墙。综合看，2026 中段的开源 CAD 已从"工具替代"走向"形态重构"：Code-CAD 与 AI Agent 共同把建模流程改写成"代码流水线"，而 Web/B-Rep 则把分发形态改写成"嵌入式体验"。

---

## 6. 值得关注

1. **Kiln / AgentSCAD / cad-cae-copilot / anvilate 的"AI Agent × CAD"四件套**
   理由：这四个项目在 7 日内均有推送，且都把"自然语言/Agent → 可制造几何"按工程闭环做实（校验/MCP/工具注册），代表 2026 年 CAD 工具链最关键的范式迁移入口，建议优先 star 与试用。

2. **OpenCASCADE 浏览器化集群（occt-wasm + chili3d + brepjs + conway）**
   理由：把工业级 B-Rep 内核前移至 WASM 的组合正在重构 CAD 分发形态，未来"网页即 CAD"、"BIM/STEP Web 协同"的关键拼图都聚于此，对长期项目方做技术选型极具参考价值。

3. **FreeCAD 1.x 的工作台活跃度**
   理由：今日 WIP 周报与趣味插件同步出现，结合主仓 7 日内仍保持活跃推送，FreeCAD 仍是社区规模最大、最值得关注的功能演化主舞台；尤其建议长期关注其装配、Topological Naming 与 TechDraw/SheetMetal 进展。

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*