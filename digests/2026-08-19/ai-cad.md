# CAD/机械结构开源动态日报 2026-08-19

> 数据来源: GitHub Search API (107 仓库) | ArXiv cs.GR+cs.CG (5 篇论文) | RSS 新闻 (3 条) | 生成时间: 2026-08-19 00:52 UTC

---

# 📐 CAD/机械结构开源动态日报

**报告日期**：2026 年 8 月 14 日  
**信息源**：行业新闻（3）、ArXiv 论文（5）、GitHub 活跃仓库（107）

---

## 一、今日速览

FreeCAD 26.3 即将发布，社区博客已放出「Top 20 新特性」演讲内容，预示开放参数化 CAD 平台迎来重大版本更新；与此同时，Prusa 同步升级 XL+、CORE One L+ 等主力机型，软硬件协同迭代节奏加快。论文端在 cs.GR/cs.CG 领域出现了一篇基于**持久同调**的拓扑感知可微三角网重建工作，为 CAD 中常见的网格修复、扫掠重建问题提供了新的数学工具。GitHub 端最显著的趋势是 **AI × CAD** 生态加速扩张——`text-to-cad`、`freecad-ai`、`cadpilot`、`AgentSCAD` 等项目密集更新，MCP 协议正成为 AI Agent 操作 CAD 的事实标准。

---

## 二、行业脉搏

**1. [FreeCAD 26.3: Top 20 New Features talk](https://blog.freecad.org/2026/08/14/freecad-26-3-top-20-new-features-talk/)** — _FreeCAD Blog_  
FreeCAD 下一个大版本的 20 项关键特性被官方正式宣讲，涵盖装配、原生 OCCT 集成、性能与 UI 等层面，标志开源参数化 CAD 平台的成熟度再上一台阶。

**2. [WIP Wednesday, 12 August July 2026](https://blog.freecad.org/2026/08/12/wip-wednesday-12-august-july-2026/)** — _FreeCAD Blog_  
WIP 周报集中展示了 Part、Assembly、Sketcher、TechDraw 等模块的最新合并与改进，反映出主干代码库活跃度持续高位。

**3. [Better Prints, Easier Use: Prusa XL+, CORE One L+ and CORE One+ (Gen 2)](https://blog.prusa3d.com/better-prints-easier-use-prusa-xl-core-one-l-and-core-one-gen-2-our-big-product-update_137539/)** — _Prusa Blog_  
Prusa 三款主力机型同步迭代，从硬件闭环到固件/切片端协同优化；考虑到这些机器大多运行 Klipper/Marlin 衍生固件，开源生态需跟进新的 G-code 方例与传感器协议。

---

## 四、研究前沿

**1. [Topology-Aware Differentiable Triangle-Soup Reconstruction via Persistent Homology](http://arxiv.org/abs/2608.16848v1)**  
作者：Viritphon Chongpermwattanapol, Nattapat Damnernyut 等。  
将**持久同调（Persistent Homology）**引入可微三角网重建的损失函数，使重建结果在拓扑层面与真值更一致——这对 CAD 逆向工程、网格修复、B-Rep 边界判定有直接价值，是把 TDA 工具下沉到工程几何处理中的代表性工作。

**2. [GPU implementation of a resource-constrained virtual machine](http://arxiv.org/abs/2608.16387v1)**  
作者：Simone Li, Vladislav Brusokas 等。  
在 GPU 上实现轻量级 VM 以对抗"软件膨胀"导致的硬件淘汰，对长期维护的 CAD/CAE 大型代码库（如 OCCT、FreeCAD）有启示——可推动桌面 CAD 在低端硬件上的可访问性。

> 其余 3 篇（per-pixel 渲染难度描述子、KeyID 身份保持视频生成、AnyTalk 语音动画）偏影视/图形方向，对机械 CAD 直接贡献有限，本期略过。

---

## 五、重点项目

### 🖥️ CAD 平台与编辑器

- **[FreeCAD/FreeCAD](https://github.com/FreeCAD/FreeCAD)** ⭐32,939 — C++  
  跨平台开源参数化 3D 建模器的事实标准，26.3 版本即将释出。

- **[openscad/openscad](https://github.com/openscad/openscad)** ⭐9,969 — C++  
  "程序员的实体建模器"，以代码描述几何，是 Code-CAD 流派的开山之作。

- **[solvespace/solvespace](https://github.com/solvespace/solvespace)** ⭐4,106 — C++  
  轻量级参数化 2D/3D CAD，适合嵌入式与教育场景。

- **[LibreCAD/LibreCAD](https://github.com/LibreCAD/LibreCAD)** ⭐6,254 — C++  
  成熟的 2D CAD，DXF/DWG 兼容性强，是工程图场景的事实开源方案。

### 📐 计算几何与内核

- **[Open-Cascade-SAS/OCCT](https://github.com/Open-Cascade-SAS/OCCT)** ⭐2,776 — C++  
  开源 3D CAD/CAM/CAE 内核，几乎所有主流开源 CAD 的几何底座（FreeCAD、CadQuery、Mayo 等）。

- **[CGAL/cgal](https://github.com/CGAL/cgal)** ⭐6,010 — C++  
  计算几何算法库，涵盖三角剖分、布尔运算、Delaunay、流形重建等，CAD/CAE 高阶算法的事实标准。

- **[google/draco](https://github.com/google/draco)** ⭐7,444 — C++  
  Google 维护的 3D 网格/点云压缩库，对 3D 模型网络传输与 Web CAD 意义重大。

- **[mikedh/trimesh](https://github.com/mikedh/trimesh)** ⭐3,651 — Python  
  Python 三角网格处理库，学术研究 → 工程原型的桥梁工具。

- **[pyvista/pyvista](https://github.com/pyvista/pyvista)** ⭐3,773 — Python  
  基于 VTK 的 3D 可视化与网格分析库，是 Jupyter 中进行 CAE 后处理的事实标准。

### 🧬 创成式与参数化设计

- **[JuliaTopOpt/TopOpt.jl](https://github.com/JuliaTopOpt/TopOpt.jl)** ⭐225 — Julia  
  基于自动微分的拓扑优化包，支持桁架/连续体、单/多材料，结合 Julia 高性能，CAE 工程师可关注。

- **[YuqingNicole/variant-design-skill](https://github.com/YuqingNicole/variant-design-skill)** ⭐45 — Shell  
  Claude Code 技能：prompt → 3 种方案 → 变体导出，把"解决空白画布"作为工程化流程。

### 🖨️ 3D 打印与制造

- **[MarlinFirmware/Marlin](https://github.com/MarlinFirmware/Marlin)** ⭐17,543 — C++  
  RepRap 3D 打印机固件的事实标准，覆盖绝大多数消费级机器。

- **[OrcaSlicer/OrcaSlicer](https://github.com/OrcaSlicer/OrcaSlicer)** ⭐15,425 — C++  
  支持 Bambu、Prusa、Voron 等多家机器的高级切片器，开源切片的新势力。

- **[Ultimaker/Cura](https://github.com/Ultimaker/Cura)** ⭐7,015 — Python  
  老牌开源切片 GUI，基于 Uranium 框架，可作为切片软件工程化参考。

- **[Slicer/Slicer](https://github.com/Slicer/Slicer)** ⭐2,582 — C++  
  医学图像/科学可视化的开源平台，与 3D 打印链路衔接紧密。

### 🔗 文件格式与互操作

- **[f3d-app/f3d](https://github.com/f3d-app/f3d)** ⭐4,632 — C++  
  基于 VTK 的轻量级 3D 查看器，跨格式（STEP、3MF、glTF 等）预览的瑞士军刀。

- **[bldrs-ai/Share](https://github.com/bldrs-ai/Share)** ⭐181 — JavaScript  
  浏览器端 BIM/CAD 协同查看器，原生支持 IFC/STEP/STL/OBJ/glTF。

- **[andymai/occt-wasm](https://github.com/andymai/occt-wasm)** ⭐43 — Rust  
  将 OCCT 编译为 WebAssembly，使浏览器内运行真正的 B-Rep 引擎成为可能，是 Web-CAD 关键基础设施。

### 🐍 Code-CAD 与脚本化

- **[CadQuery/cadquery](https://github.com/CadQuery/cadquery)** ⭐5,622 — Python  
  基于 OCCT 的 Python 参数化脚本建模框架，是工程师最常用的"代码出 STEP"工具。

- **[gumyr/build123d](https://github.com/gumyr/build123d)** ⭐2,877 — Python  
  同样基于 OCCT 的现代 Python CAD 库，API 更面向代数/拓扑 3D 范式，被多个 AI-CAD 项目作为后端。

- **[earthtojake/text-to-cad](https://github.com/earthtojake/text-to-cad)** ⭐13,613 — Python  
  CAD/CAE/CAM 的 Agent Skills 库，是"AI 工程师"的工具箱门面。

- **[ghbalf/freecad-ai](https://github.com/ghbalf/freecad-ai)** ⭐427 — Python  
  FreeCAD 的 AI Workbench，从自然语言生成 3D 模型。

- **[LBurny/cadpilot](https://github.com/LBurny/cadpilot)** ⭐6 — Python  
  MCP Server，让 Claude Code/OpenCode 等 AI 客户端可"驾驶" FreeCAD，完成约束草图、参数化特征与装配。

- **[Kevoyuan/AgentSCAD](https://github.com/Kevoyuan/AgentSCAD)** ⭐7 — TypeScript  
  自然语言 → 校验后的 OpenSCAD 代码，含几何修复与制造验证。

---

## 六、生态趋势信号

最显著的信号是 **AI Agent 与 CAD 内核的深度耦合**：本周涌现出 `cadpilot`（MCP→FreeCAD）、`AgentSCAD`（Agent→OpenSCAD）、`text-to-cad`（CAD/CAE/CAM 全链路 Agent Skills）等多个项目，统一使用 **MCP（Model Context Protocol）** 作为 AI 客户端与 CAD 内核之间的桥梁。这意味着"自然语言→可制造 STEP/STL"这一过去停留在 demo 阶段的能力，正在以标准化、可互操作的方式进入生产。第二条主线是 **OCCT 走向浏览器/边缘**——`occt-wasm`、`brepjs`、`replicad`、`bldrs-ai/conway` 等项目合力把 B-Rep 内核搬到 WebAssembly，预示"零安装、浏览器内完整 CAD"的范式正在成熟。第三条主线是 **持久同调等拓扑方法下沉到几何处理**，CAD/CAE 领域正借鉴数学界工具以解决传统损失函数难以表达的拓扑一致性。

---

## 七、值得关注

**① FreeCAD 26.3 的 20 项新特性**  
作为开源参数化 CAD 的旗舰，26.3 将带来装配、原生 OCCT、性能与 UI 的多项重大改进，是工程团队评估"能否将 FreeCAD 纳入生产链路"的关键节点。

**② [Topology-Aware Differentiable Triangle-Soup Reconstruction](http://arxiv.org/abs/2608.16848v1)**  
把 TDA（拓扑数据分析）引入可微渲染管线，是数学工具下沉到几何/重建工程的范例，可关注作者开源代码对逆向工程网格修复的实际可用性。

**③ [occt-wasm](https://github.com/andymai/occt-wasm) + [cadpilot](https://github.com/LBurny/cadpilot)**  
前者解决了"浏览器内核"问题，后者解决了"AI Agent 接口"问题，二者结合很可能在 2026 年底前催生出第一批"浏览器内、AI 驱动、可交付 STEP"的完整产品，值得长期跟踪。

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*