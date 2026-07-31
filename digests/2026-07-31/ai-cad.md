# CAD/机械结构开源动态日报 2026-07-31

> 数据来源: GitHub Search API (96 仓库) | ArXiv cs.GR+cs.CG (0 篇论文) | RSS 新闻 (3 条) | 生成时间: 2026-07-31 02:09 UTC

---

# CAD/机械结构开源动态日报

**日期**：2026-07-29 ｜ **领域**：CAD、计算几何、3D 打印与创成式设计

---

## 一、今日速览

今日开源 CAD 生态呈现三条主线：**FreeCAD 1.1.3 正式发布**，为这条主力参数化建模路线带来稳定性修复；同时 **EMF Camp 2026 上的 FreeCAD E‑Sport 速通挑战赛**把"建模即运动"推到欧洲硬件极客舞台，开发者社区运营日趋成熟。仓库层面，**AI × CAD 的 MCP 化浪潮**全面爆发——FreeCAD、Kiln、CAD/CAE Copilot、Anvilate、ChiselCAD 等多款工具在最近一周集中提交更新，标志"自然语言→几何内核"正成为下一阶段的攻坚点。OpenSCAD 阵营也迎来 GPU 加速（ChiselCAD，基于 Vulkan + Manifold），传统脚本化 CAD 的性能瓶颈正在被打破。

---

## 二、行业脉搏

- **[FreeCAD 1.1.3 released](https://blog.freecad.org/2026/07/25/freecad-1-1-3-released/)** — 1.1 系列的最新补丁版本发布，重点修复回归问题与提升装配/Part 工作流稳定性，是 FreeCAD 从 1.0 大版本走向成熟 LTS 路线的关键节点。**意义**：企业级用户评估 FreeCAD 的"生产可用度"门槛进一步降低。
- **[FreeCAD E‑Sport Speed Run Challenge at EMF camp 2026](https://blog.freecad.org/2026/07/27/freecad-e-sport-speed-run-challenge-at-emf-camp-2026/)** — 在欧洲最大的硬件极客聚会 EMF 上举办限时建模比赛。**意义**：开源 CAD 首次以"电子竞技"形式打入 Maker/硬件圈层，是社区增长策略的创新尝试。
- **[WIP Wednesday, 29 July 2026](https://blog.freecad.org/2026/07/29/wip-wednesday-29-july-2026/)** — 例行开发者进展汇编（Toponaming、OCCT 升级、Assembly 异步等）。**意义**：可一窥 FreeCAD 1.2/2.0 路线图的当前瓶颈与突破方向。

---

## 三、研究前沿

> **说明**：今日 ArXiv `cs.GR` / `cs.CG` 列表为空，无新增预印论文。建议持续追踪 SIGGRAPH、Eurographics、ACM Pacific Graphics 以及 SoCG 的最新成果以补充该栏目。

为不空缺，本期以**仓库层面的"准研究性"贡献**作为替代观察：

- **polydera/trueform (⭐129)** — *"The STL for geometry"*，提供 C++/Python/TS 多语言绑定的精确网格布尔、空间查询与重网格化能力，是工业级 mesh 处理的现代开源替代。
- **iShape-Rust/iOverlay (⭐196) / iTriangle (⭐153)** — Rust 语言实现的 2D 多边形布尔与三角化，强调数值稳定性，是 CAM 刀路、SVG 切割、激光雕刻等场景的底层候选。
- **particlesector/chiselcad (⭐12)** — 用 C++20 + Vulkan + Manifold 实现的 GPU 加速 CSG，OpenSCAD 兼容语法，是脚本化 CAD 走向"秒级渲染"的重要实验。

---

## 四、重点项目

### 🖥️ CAD 平台与编辑器

- **[FreeCAD/FreeCAD](https://github.com/FreeCAD/FreeCAD)** ⭐32,499
  开源多平台参数化 3D 建模器的事实标准；OCCT 内核 + Python 扩展，机械装配/钣金/BIM 工作流生态最完整。
- **[openscad/openscad](https://github.com/openscad/openscad)** ⭐9,850
  程序员友好的脚本化 CSG 建模器，是硬件/创客圈"代码即零件"工作流的核心。
- **[dune3d/dune3d](https://github.com/dune3d/dune3d)** ⭐2,030
  新兴 C++ 编写的 3D CAD 应用，定位"求解器驱动 + 显式约束"，对标商业 CAD 的轻量替代。
- **[neka-nat/freecad-mcp](https://github.com/neka-nat/freecad-mcp)** ⭐1,541
  FreeCAD 的 MCP 服务器，让 LLM/Agent 直接驱动几何内核——AI‑CAD 时代的桥头堡。
- **[ghbalf/freecad-ai](https://github.com/ghbalf/freecad-ai)** ⭐403
  FreeCAD 内的 AI 助手工作台，自然语言生成 3D 模型；与 freecad‑mcp 共同构成两条不同的 AI 集成路线。

### 📐 计算几何与内核

- **[CGAL/cgal](https://github.com/CGAL/cgal)** ⭐5,992
  计算几何算法库标杆（Delaunay、布尔、网格生成、曲面重建），机械/CAD/CAM 研究的"基础设施"。
- **[boostorg/geometry](https://github.com/boostorg/geometry)** ⭐513
  Boost 几何库，泛型几何原语，适用于嵌入式/科学计算管线。
- **[DGtal-team/DGtal](https://github.com/DGtal-team/DGtal)** ⭐398
  数字几何与算法库，离散/拓扑结构处理能力强，适合体素化、3D 扫描分析。
- **[polydera/trueform](https://github.com/polydera/trueform)** ⭐129
  强调"快速且精确"的网格布尔/空间查询/重网格化，多语言绑定，是网格 CAD 互操作的现代栈。

### 🧬 创成式与参数化设计

- **[partcad/partcad](https://github.com/partcad/partcad)** ⭐481
  面向"可制造物理产品"的标准与包管理器（Digital Thread / TDP），AI 增强的模块化硬件设计基础设施。
- **[armpro24-blip/cad-cae-copilot](https://github.com/armpro24-blip/cad-cae-copilot)** ⭐43
  AI 原生 CAD/CAE/CAX 代理，基于 build123d/OpenCASCADE，参数可编辑、拓扑稳定、可判定。
- **[codeofaxel/Kiln](https://github.com/codeofaxel/Kiln)** ⭐40
  3D 打印领域的 MCP 服务器——"描述即打印"，已覆盖 Bambu/Creality/Prusa/Klipper/OctoPrint/Marlin 等主流固件与切片栈。
- **[clay-good/anvilate](https://github.com/clay-good/anvilate)** ⭐4
  本地优先的机械工程师设计代理，自然语言→物理校验过的 STEP/DXF，可直接落入 CATIA/SolidWorks/NX。
- **[particlesector/chiselcad](https://github.com/particlesector/chiselcad)** ⭐12
  GPU 加速 CSG 建模器（Vulkan + Manifold），OpenSCAD 兼容语法——打破脚本化 CAD 的性能天花板。

### 🖨️ 3D 打印与制造

- **[MarlinFirmware/Marlin](https://github.com/MarlinFirmware/Marlin)** ⭐17,508
  RepRap 3D 打印固件事实标准，8/32 位 MCU 通吃，几乎所有商业打印机底层都跑它。
- **[OrcaSlicer/OrcaSlicer](https://github.com/OrcaSlicer/OrcaSlicer)** ⭐15,280
  Bambu/Prusa/Voron/VzBot/RatRig/Creality 全平台 G‑code 生成器，社区版切片器的当前王者。
- **[Ultimaker/Cura](https://github.com/Ultimaker/Cura)** ⭐7,003
  老牌开源切片 GUI，Uranium 框架上的工业级参考实现。
- **[Sienci-Labs/gsender](https://github.com/Sienci-Labs/gsender)** ⭐361
  grbl / grblHAL CNC 控制器，桌面 CNC（LongMill、MillOne 等）的"开箱即用"前端。
- **[DMontgomery40/mcp-3D-printer-server](https://github.com/DMontgomery40/mcp-3D-printer-server)** ⭐219
  把 3D 打印机厂商 API（Orca、Bambu、OctoPrint、Klipper、Duet、Prusa…）统一为 MCP，是 AI Agent 控制打印机的"万能适配器"。
- **[sn4k3/UVtools](https://github.com/sn4k3/UVtools)** ⭐1,594
  MSLA/DLP 光固化打印机的文件分析/校准/修复工具，与 ChituBoard 生态紧密绑定。

### 🔗 文件格式与互操作

- **[manyfold3d/manyfold](https://github.com/manyfold3d/manyfold)** ⭐2,098
  自托管的 3D 打印文件数字资产管理器，应对 STL/3MF 库的去中心化整理与检索需求。
- **[Keychron/Keychron-Keyboards-Hardware-Design](https://github.com/Keychron/Keychron-Keyboards-Hardware-Design)** ⭐3,610
  商业厂商首次以"源可用 + STEP/DXF/DWG/PDF"公开 100+ 键盘/鼠标工业设计资产——**STEP 开源对机械工程师极其实用**。

### 🐍 Code‑CAD 与脚本化

- **[voneiden/ocp-freecad-cam](https://github.com/voneiden/ocp-freecad-cam)** ⭐65
  用 FreeCAD 的 OCCT 内核给 CadQuery/build123d 写 CAM，串起"代码建模→刀路规划"的最后一公里。
- **[jdegenstein/sharp123](https://github.com/jdegenstein/sharp123)** ⭐2
  用 build123d 设计的"控角刀磨系统"——Code‑CAD 直接产出可制造硬件的典型样板。

---

## 五、生态趋势信号

**AI‑native CAD 正式从概念走向工程化**。过去一周最显著的现象是 MCP（Model Context Protocol）协议在 CAD 工具链中的"集体接入"：FreeCAD（neka‑nat、blwfish 双实现）、Kiln、cad‑cae‑copilot、DMontgomery40 的 3D 打印机 MCP、tanishqbhattad 的 Rhino MCP 几乎同步活跃，标志着 CAD 平台正在把"可被 Agent 调用"作为一等公民特性。**GPU 加速与 Rust 重写**正在重塑计算几何层：ChiselCAD 用 Vulkan+Manifold 跑 OpenSCAD 语法，iShape 系列用 Rust 写稳定的布尔与三角化，polydera/trueform 提供多语言绑定的精确 mesh 操作。**本地优先与去云化**叙事回归：bambuddy（自托管 Bambu 农场）、anvilate（本地设计代理）、manyfold3d（自托管文件库）形成一股明显的小型化/隐私化潮流，呼应了制造业对厂商云依赖的警惕。商业侧的 STEP 公开化（Keychron 100+ 型号 STEP/DXF/DWG）则在悄悄拉高开源机械设计的"真实资产"基线。

---

## 六、值得关注

1. **FreeCAD 1.1.3 → 1.2 路线图的关键窗口期**。1.1.3 已稳定，下一步的 Toponaming 持久化、Assembly 异步、OCCT 7.x 升级将决定 FreeCAD 能否在 2027 年真正进入中型企业生产环境。建议持续跟踪 [WIP Wednesday 系列](https://blog.freecad.org/) 与 [neka-nat/freecad-mcp](https://github.com/neka-nat/freecad-mcp) 的 MCP 工具集扩展——后者大概率会成为"AI 操作 FreeCAD"的事实 API 规范。
2. **ChiselCAD 与 polydera/trueform 的"GPU/精确布尔"对决**。传统 CAD 内核的 mesh 布尔不是慢就是不精确，这两者的开源方案如果跑通，将直接撼动 Parasolid/ACIS 在开源生态中的地位，值得用 benchmark 视角长期跟进。
3. **MCP × 制造一体化栈**（Kiln + DMontgomery40 mcp‑3d‑printer + ocp‑freecad‑cam）。三者分别在"打印任务下发""打印机控制""代码化刀路"三端用 MCP 协议打通，未来 6–12 个月极可能出现"一句话描述→带刀路 STEP→切片→上机"的全链路 Agent 工作流，是开源制造业最值得投入的方向之一。

---

*日报由行业新闻、ArXiv 预印与 GitHub Trending 三方信息源综合生成。*

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*