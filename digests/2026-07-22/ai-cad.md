# CAD/机械结构开源动态日报 2026-07-22

> 数据来源: GitHub Search API (109 仓库) | ArXiv cs.GR+cs.CG (0 篇论文) | RSS 新闻 (1 条) | 生成时间: 2026-07-22 02:02 UTC

---

# CAD/机械结构开源动态日报
**2026 年 7 月 15 日 · 星期三**

---

## 一、今日速览

今日开源 CAD 生态呈现出**"AI 代理 + 浏览器原生"双主线加速**的态势：FreeCAD 社区持续推进 WIP 迭代，浏览器端 Web CAD 项目（Chili3D、Cadam、replicad、occt-wasm）密集更新；与此同时，**面向 LLM/Agent 的 CAD MCP 服务器、AI 文本生成 STEP 模型、本地优先的设计 Agent** 等项目集中涌现，标志 CAD 工具正从"手工参数化"迈向"对话式工程"。底层几何方面，Rust 系 CAD 内核（truck、cadrum、trueform）与 WASM 版 OpenCASCADE 形成新的互操作栈，STEP/IFC 在 Web 端的解析与共享愈发成熟。

---

## 二、行业脉搏

- 📰 **[WIP Wednesday, 15 July 2026 — FreeCAD Blog](https://blog.freecad.org/2026/07/15/wip-wednesday-15-july-2026/)**
  FreeCAD 官方持续披露正在进行中的开发进展（WIP Wednesday 系列），展示新工作台、Part/OCCT 内核改进及 AI 插件对接情况，是观察 FreeCAD 路线图最权威的窗口。

> ⚠️ 今日仅获取到 1 条行业新闻（Prusa / Bambu Lab / OpenCASCADE / Hackaday 当日未抓取到符合条件的更新）。建议读者直接访问 [FreeCAD Blog](https://blog.freecad.org/)、[OpenCASCADE 官网](https://dev.opencascade.org/)、[Hackaday 3D 打印板块](https://hackaday.com/) 以补充行业动态。

---

## 三、研究前沿

> 📭 今日 **cs.GR / cs.CG 论文源未获取到新增条目**（共 0 篇）。
>
> 建议关注以下长期方向以弥补空窗：
> - B-Rep 神经隐式表示（BrepNet、CapriNet 后续）
> - 大模型驱动的 CAD 代码生成（CadQuery LLM 评测、Text2CAD）
> - 几何深度学习驱动的网格布尔/参数化
> - 可微分 CAD / 可微渲染用于结构拓扑优化

可访问 [ArXiv cs.GR](https://arxiv.org/list/cs.GR/recent) 与 [cs.CG](https://arxiv.org/list/cs.CG/recent) 自行追踪。

---

## 四、重点项目

### 🖥️ CAD 平台与编辑器

| 仓库 | ⭐ | 一句话意义 |
|---|---|---|
| **[FreeCAD/FreeCAD](https://github.com/FreeCAD/FreeCAD)** | 32,275 | 跨平台开源参数化 3D 建模标杆，基于 OCCT，是社区生态的事实底座 |
| **[openscad/openscad](https://github.com/openscad/openscad)** | 9,781 | 程序员友好的脚本式实体建模工具，3D 打印社区装机量极大 |
| **[LibreCAD/LibreCAD](https://github.com/LibreCAD/LibreCAD)** | 6,135 | 跨平台开源 2D CAD，DXF/DWG 读写齐全，适合机械制图入门替代 |
| **[CadQuery/cadquery](https://github.com/CadQuery/cadquery)** | 5,486 | 基于 OCCT 的 Python 参数化 CAD 脚本框架，Code-CAD 事实标准之一 |
| **[solvespace/solvespace](https://github.com/solvespace/solvespace)** | 4,049 | 轻量级 2D/3D 参数化约束求解器，机械连杆/草图教学首选 |
| **[Adam-CAD/CADAM](https://github.com/Adam-CAD/CADAM)** | 4,836 | 开源文本到 CAD 的 Web 应用，代表自然语言驱动建模的新方向 |
| **[xiangechen/chili3d](https://github.com/xiangechen/chili3d)** | 4,696 | 浏览器原生 3D CAD 编辑器，把传统桌面 CAD 搬上 Web |
| **[tscircuit/tscircuit](https://github.com/tscircuit/tscircuit)** | 2,340 | 用 TypeScript + React 描述真实电子电路，打通机电软一体化链路 |

### 📐 计算几何与内核

| 仓库 | ⭐ | 一句话意义 |
|---|---|---|
| **[CGAL/cgal](https://github.com/CGAL/cgal)** | 5,984 | C++ 计算几何算法库的金标准，Delaunay/曲面重建/布尔运算等 |
| **[mikedh/trimesh](https://github.com/mikedh/trimesh)** | 3,634 | Python 三角网格加载与处理库，3D 打印切片前处理高频使用 |
| **[gkjohnson/three-mesh-bvh](https://github.com/gkjohnson/three-mesh-bvh)** | 3,431 | three.js 网格加速 BVH，Web 端大规模网格查询性能关键 |
| **[artem-ogre/CDT](https://github.com/artem-ogre/CDT)** | 1,426 | 高质量约束 Delaunay 三角剖分，网格生成/有限元前处理常用 |
| **[ricosjp/truck](https://github.com/ricosjp/truck)** | 1,515 | Rust 写的现代 CAD 内核，关注内存安全与几何算法新实现 |
| **[polydera/trueform](https://github.com/polydera/trueform)** | 129 | "几何的 STL"——快速精确的网格布尔/空间查询，C++ 含 Python/TS 绑定 |
| **[unageek/kigumi](https://github.com/unageek/kigumi)** | 51 | 面向三角网格的稳健布尔运算库，弥补 CGAL 在纯网格场景的不足 |

### 🧬 创成式与参数化设计

| 仓库 | ⭐ | 一句话意义 |
|---|---|---|
| **[gumyr/build123d](https://github.com/gumyr/build123d)** | 2,669 | Python 现代参数化 CAD 库，与 CadQuery 同源分叉，主打清晰建模范式 |
| **[smkent/bdbox](https://github.com/smkent/bdbox)** | 4 | build123d 模型的实时开发环境，方便参数化调试 |
| **[codeofaxel/Kiln](https://github.com/codeofaxel/Kiln)** | 38 | 面向 AI Agent 的 3D 打印 MCP 服务器：描述需求 → 设计 → 切片 → 打印 |
| **[Kevoyuan/AgentSCAD](https://github.com/Kevoyuan/AgentSCAD)** | 5 | AI 原生 CAD Agent：自然语言 → 校验后的 OpenSCAD + 自动几何修复 |
| **[clay-good/anvilate](https://github.com/clay-good/anvilate)** | 2 | 本地优先机械设计 Agent：自然语言 → 物理校验的 STEP/DXF + Python 源码 |

### 🖨️ 3D 打印与制造

| 仓库 | ⭐ | 一句话意义 |
|---|---|---|
| **[MarlinFirmware/Marlin](https://github.com/MarlinFirmware/Marlin)** | 17,488 | 全球装机量最大的开源 3D 打印机固件，覆盖 8/32 位 MCU |
| **[OrcaSlicer/OrcaSlicer](https://github.com/OrcaSlicer/OrcaSlicer)** | 15,180 | 主流开源 G-code 切片器，兼容 Bambu/Prusa/Voron/Creality 全系 |
| **[Ultimaker/Cura](https://github.com/Ultimaker/Cura)** | 6,998 | 老牌开源切片 GUI，基于 Uranium 框架，是工业/桌面切片参考 |
| **[huxingyi/dust3d](https://github.com/huxingyi/dust3d)** | 3,416 | 低多边形建模工具，直出可用于 3D 打印的网格 |
| **[maziggy/bambuddy](https://github.com/maziggy/bambuddy)** | 2,583 | 自托管 Bambu Lab 命令中心，单机到 40 台打印农场管理 |
| **[Donkie/Spoolman](https://github.com/Donkie/Spoolman)** | 2,619 | 3D 打印耗材库存管理，与 Klipper/Mainsail 配套使用 |

### 🔗 文件格式与互操作

| 仓库 | ⭐ | 一句话意义 |
|---|---|---|
| **[f3d-app/f3d](https://github.com/f3d-app/f3d)** | 4,563 | 极速极简的 3D 查看器，STE/STEP/STL/3MF 全格式预览 |
| **[sgenoud/replicad](https://github.com/sgenoud/replicad)** | 660 | 浏览器代码化 3D 建模库，TS+WebCAD 生态补充 |
| **[partcad/partcad](https://github.com/partcad/partcad)** | 476 | 物理零件包管理器，标准化的数字主线/技术数据包 |
| **[bldrs-ai/Share](https://github.com/bldrs-ai/Share)** | 179 | 浏览器端 BIM/CAD 协同查看器，支持 IFC/STEP/STL/OBJ/glTF |
| **[andymai/occt-wasm](https://github.com/andymai/occt-wasm)** | 30 | OpenCASCADE 编译到 WebAssembly，体积 ~4MB，Web CAD 真正内核化 |
| **[bldrs-ai/conway](https://github.com/bldrs-ai/conway)** | 22 | Web 端高性能 IFC & STEP 引擎，让浏览器成为合格 CAD 前端 |
| **[lzpel/cadrum](https://github.com/lzpel/cadrum)** | 45 | Rust CAD crate，静态链接无头 OCCT，原生 + WASM 双端运行 |

### 🐍 Code-CAD 与脚本化

| 仓库 | ⭐ | 一句话意义 |
|---|---|---|
| **[microsoft/maker.js](https://github.com/microsoft/maker.js)** | 2,015 | 面向 CNC/激光切割的 2D 矢量建模库，TypeScript 友好 |
| **[neka-nat/freecad-mcp](https://github.com/neka-nat/freecad-mcp)** | 1,393 | FreeCAD 的 MCP 服务器，让 LLM 直接驱动 FreeCAD 建模 |
| **[ghbalf/freecad-ai](https://github.com/ghbalf/freecad-ai)** | 387 | FreeCAD AI 工作台：自然语言生成 3D 模型 |
| **[zqf3229294/Text23D](https://github.com/zqf3229294/Text23D)** | 16 | 文本驱动的机械 CAD 探索平台，对话式生成参数化模型 |
| **[PranavChahal/sphaire-web](https://github.com/PranavChahal/sphaire-web)** | 3 | 浏览器原生 AI 辅助参数化 CAD，OCCT + WASM 内核 |
| **[andymai/brepjs](https://github.com/andymai/brepjs)** | 72 | Web 端 B-Rep 精确几何库，TypeScript API |

---

## 五、生态趋势信号

**1. AI Agent 正在重塑 CAD 交互范式。** 今日活跃仓库里，与 LLM/Agent 强相关的项目至少有 6 个：`freecad-mcp`、`freecad-ai`、`Text23D`、`Kiln`、`AgentSCAD`、`anvilate`、`sphaire-web`，且形态多样——有的是 MCP 服务器、有的是 AI 工作台、有的是端到端打印 Agent。这印证了"**自然语言 → 校验后 STEP/OpenSCAD**"流水线正在被多个团队同时押注。

**2. 浏览器 / WASM 成为 CAD 的第二战场。** `chili3d`、`occt-wasm`、`replicad`、`brepjs`、`conway`、`sphaire-web` 在最近 7 天均有推送，配合 Rust 系内核（`truck`、`cadrum`）和 WebGPU 加速的 CSG 引擎（`chiselcad`），Web CAD 已从"查看器"迈向"真正可建模"。

**3. 几何底层栈呈现 Rust 化 + WASM 化**。`trueform`（C++ 核 + Python/TS 绑定）、`kigumi`（网格布尔）、`truck`（纯 Rust CAD 内核）共同推动新一代高性能、可嵌入的几何库出现，与 CGAL 形成互补。

**4. STEP/IFC 成为 Web 端"通用语言"。** `f3d`、`conway`、`partcad`、`bldrs-ai/Share` 共同把 STEP 从专业工具的交换格式升级为浏览器原生资产，**机械设计与 BIM 的边界在 Web 上首次模糊**。

**5. 制造闭环向"本地化、自托管"倾斜。** `bambuddy`、`ha-bambulab`、`Spoolman`、`kiauh` 围绕 Klipper/Bambu 生态构建去云化控制栈，反映 3D 打印用户对厂商云依赖的反思。

---

## 六、值得关注

1. **🌐 [xiangechen/chili3d](https://github.com/xiangechen/chili3d) ⭐4,696**
   浏览器原生 3D CAD 编辑器，Star 数近 5k 且近 7 天活跃。代表"无需安装、即开即用"Web CAD 的成熟度跃迁，值得跟踪其几何内核选型与协同功能路线。

2. **🤖 [codeofaxel/Kiln](https://github.com/codeofaxel/Kiln) ⭐38**
   端到端 AI → 切片 → 打印的 MCP 服务器，串联 Bambu / Prusa / Klipper / Marlin。一旦协议被 Claude/Cursor 等客户端广泛采纳，将成为**首个工业级"对话即制造"开源标准**，对硬件创业团队极具示范意义。

3. **🧠 [neka-nat/freecad-mcp](https://github.com/neka-nat/freecad-mcp) ⭐1,393**
   FreeCAD 的 MCP 接入，Star 数已破千且仍在上涨。它让任何 LLM 客户端能直接驱动 FreeCAD 完成参数化建模，是验证"AI 是否真能落进机械工程师工作流"的关键探针——建议立刻试用并关注其稳定性、撤销/版本控制等工程化短板。

---

*📌 备注：今日论文与行业新闻源数据偏稀，建议次日补充 ArXiv 与 Prusa/Bambu Lab 官方博客的抓取；本报告所有链接均可点击访问原始仓库或文章。*

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*