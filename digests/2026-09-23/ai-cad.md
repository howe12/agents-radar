# CAD/机械结构开源动态日报 2026-09-23

> 数据来源: GitHub Search API (108 仓库) | ArXiv cs.GR+cs.CG (17 篇论文) | RSS 新闻 (7 条) | 生成时间: 2026-09-23 02:50 UTC

---

# CAD/机械结构开源动态日报

**日期范围**：2026-09-16 ~ 2026-09-21 · **数据源**：FreeCAD/Prusa/Bambu Lab Blog、ArXiv cs.GR/cs.CG、GitHub Trending

---

## 一、今日速览

今日开源 CAD 与机械设计生态呈现三条主线：**FreeCAD 持续演进**（Facebinders 放样教程与 Lens 测试服务器上线），**AI 原生 CAD 进入工具化阶段**（text-to-cad、CadQuery-MCP、SimpleCADAPI、anvilate 等多项目同步推进，STEP 文件已成为 LLM 友好的标准交换格式），以及**浏览器端 B-Rep 内核走向成熟**（occt-wasm 与 brepjs 把 OCCT 真正带进 Web，配合 Share/Conway 正在重塑前端 CAD 工作流。Prusa 与 Bambu Lab 的硬件/材料发布则继续把 3D 打印推向"轻量化 + 大幅面"两端。

---

## 二、行业脉搏

1. **[FreeCAD Lens 测试服务器正式启用](https://blog.freecad.org/2026/09/18/announcing-lens-test-server/)** — FreeCAD Blog
   FreeCAD 引入全新的测试基础设施，标志其 CI/质量保障体系走向成熟，对依赖 FreeCAD 做下游产品的开发者意义重大。

2. **[Facebinders 部件间放样（Lofting）教程发布](https://blog.freecad.org/2026/09/21/tutorial-lofting-between-parts-with-facebinders/)** — FreeCAD Blog
   进阶建模教程，演示如何用 Facebinders 在两个独立 Part 之间构建带约束的过渡几何——为复杂壳体、过渡件设计提供了新思路。

3. **[Prusament PLA Lightweight：比常规 PLA 轻 65%](https://blog.prusa3d.com/prusament-pla-lw-65-lighter-than-regular-pla-perfect-choice-for-aircraft-cosplay-and-more_138059/)** — Prusa Blog
   飞行器、cosplay、无人机机架等对质量敏感的应用迎来桌面级轻量化耗材新选择。

4. **[Bambu Lab 推出 R1 大幅面 3D 打印机](https://blog.bambulab.com/big-job-light-work-bambu-lab-launches-r1/)** — Bambu Lab
   "Big Job. Light Work." 定位，大尺寸 + 高效率组合，对工坊级生产、夹具与大型原型件工作流影响显著。

5. **[WIP Wednesday, 16 September 2026](https://blog.freecad.org/2026/09/16/wip-wednesday-16-september-2026/)** — FreeCAD Blog
   FreeCAD 主仓开发周报，反映 PartDesign、Assembly、OCCT 升级等核心模块的并行进展。

---

## 三、研究前沿

1. **[PartLLM: A Unified Multimodal Foundation for 3D Part Segmentation](http://arxiv.org/abs/2609.25832v1)** — Zhe Zhu, Yiheng Zhang et al.
   提出统一多模态基础模型用于 3D 部件分割，可直接用于 B-Rep 模型的语义理解与自动特征命名，对 AI 驱动的 CAD 建模与检索意义重大。

2. **[φ-RIE: From Photorealistic Reconstruction to Interactive Environments](http://arxiv.org/abs/2609.26795v1)** — Runyi Yang, Deheng Zhang et al.
   将 3D Gaussian Splatting 从静态重建扩展为可交互环境，为数字孪生、装配仿真与机械设计评审提供新方法。

3. **[Multiform Longest Edge Bisection of Tetrahedra via Sextuple Permutations](http://arxiv.org/abs/2609.26522v1)** — Agustin Trujillo, Jose Pablo Suarez et al.
   在 R⁶ 空间中重写四面体最长边二分法，可改善自适应网格细化与有限元前处理流程。

4. **[Ultra-fast Neural Inference for Stochastic Gaussian Splatting Denoising](http://arxiv.org/abs/2609.25604v1)** — Chenxiao Hu, Hao Zhang et al.
   面向高斯泼溅的实时神经去噪，渲染速度大幅提升，对 CAD 实时可视化与浏览器端查看器有直接价值。

5. **[Approximation Algorithm for the Min-Cost Bipartite Matching with Penalties](http://arxiv.org/abs/2609.26369v1)** — Eunjin Oh, Seongbin Park et al.
   度量空间下带惩罚的最小权二部匹配近似算法，可应用于装配对齐、焊接路径与夹具布局等组合优化问题。

---

## 四、重点项目

### 🖥️ CAD 平台与编辑器

- **[FreeCAD/FreeCAD](https://github.com/FreeCAD/FreeCAD)** ⭐33,716 · C++
  开源多平台参数化 3D 建模的事实标准；本日报周期内 PartDesign、Assembly 等核心模块持续推进，Lens 测试服务器上线进一步提升稳定性。

- **[pascalorg/editor](https://github.com/pascalorg/editor)** ⭐24,256 · TypeScript
  开源 3D 建筑编辑器，内置本地 CLI 与 MCP 工具，是 AI Agent 直接操控 CAD 的代表性实践。

- **[openscad/openscad](https://github.com/openscad/openscad)** ⭐10,269 · C++
  "程序员的实体建模器"，脚本化 CAD 范式的开创者，与下方 Code-CAD 生态共生。

- **[xiangechen/chili3d](https://github.com/xiangechen/chili3d)** ⭐4,857 · TypeScript
  纯浏览器 3D CAD，配合 OCCT-WASM 实现无需安装的在线建模。

- **[LibreCAD/LibreCAD](https://github.com/LibreCAD/LibreCAD)** ⭐6,403 · C++
  跨平台 2D CAD，支持 DXF/DWG/PDF/SVG，是机械 2D 出图环节的主力开源工具。

- **[gumyr/build123d](https://github.com/gumyr/build123d)** ⭐3,184 · Python
  新一代 Python CAD 编程库，强调"用 Python 像写代码一样构造三维模型"。

- **[leozide/leocad](https://github.com/leozide/leocad)** ⭐2,873 · C++
  LEGO 虚拟积木建模专用 CAD。

- **[LibrePCB/LibrePCB](https://github.com/LibrePCB/LibrePCB)** ⭐2,995 · C++
  直观创新的 EDA 套件，覆盖 PCB 设计，与机械 CAD 形成"机-电"协同。

### 📐 计算几何与内核

- **[f3d-app/f3d](https://github.com/f3d-app/f3d)** ⭐4,715 · C++
  快速极简的 3D 查看器，支持 STEP/IGES/STL/3MF 等多格式。

- **[fougue/mayo](https://github.com/fougue/mayo)** ⭐2,231 · C++
  基于 Qt + OpenCASCADE 的 3D CAD 查看与转换器，企业级可视化的轻量选择。

- **[CGAL/cgal](https://github.com/CGAL/cgal)** ⭐6,054 · C++
  计算几何算法库的事实标准；布尔运算、网格生成、几何内核的学术与工业基石。

- **[MeshInspector/MeshLib](https://github.com/MeshInspector/MeshLib)** ⭐824 · C++
  几何处理 SDK：高速网格布尔、修复、抽稀、重网格化、点云三角化与 ICP。

- **[polydera/trueform](https://github.com/polydera/trueform)** ⭐146 · C++
  专注精确布尔运算、空间查询、排列与重网格化的 CSG 引擎，提供 Python/TS 绑定。

- **[pyvista/pyvista](https://github.com/pyvista/pyvista)** ⭐3,820 · Python
  科学工程级 3D 可视化与网格分析，在 CFD/CAE 后处理与几何验证场景应用广泛。

- **[mikedh/trimesh](https://github.com/mikedh/trimesh)** ⭐3,684 · Python
  三角形网格加载与处理的事实标准 Python 库，适合做模型修复与几何分析脚本。

### 🧬 创成式与参数化设计

- **[earthtojake/text-to-cad](https://github.com/earthtojake/text-to-cad)** ⭐16,284 · Python
  "CAD/CAE/CAM 智能体技能库"，为 AI Agent 提供参数化建模、设计校验与制造准备能力，是 AI 原生 CAD 生态的标杆。

- **[Adam-CAD/CADAM](https://github.com/Adam-CAD/CADAM)** ⭐5,169 · TypeScript
  开源 text-to-CAD Web 应用，让自然语言直接生成可编辑模型。

- **[clay-good/anvilate](https://github.com/clay-good/anvilate)** ⭐10 · Python
  本地优先的机械工程师设计 Agent：从自然语言直接产出经物理校验的 STEP/DXF，并附 Python 源码。

- **[Kevoyuan/AgentSCAD](https://github.com/Kevoyuan/AgentSCAD)** ⭐15 · TypeScript
  AI 原生 CAD Agent，把自然语言请求转换为带几何自检与制造校验的 OpenSCAD 工件。

- **[BelfrySCAD/BOSL2](https://github.com/BelfrySCAD/BOSL2)** ⭐2,374 · OpenSCAD
  OpenSCAD 库 v2，提供丰富形状/掩模/操作器，是 OpenSCAD 走向工程化项目的关键依赖。

- **[madfam-org/yantra4d](https://github.com/madfam-org/yantra4d)** ⭐6 · Python
  参数化 OpenSCAD 模型的 Web 平台：上传 .scad 即得 3D 预览、STL 导出与自动化校验。

### 🖨️ 3D 打印与制造

- **[MarlinFirmware/Marlin](https://github.com/MarlinFirmware/Marlin)** ⭐17,589 · C++
  RepRap 3D 打印机固件事实标准，覆盖 8/32 位 MCU，几乎所有开源打印机生态的根。

- **[OrcaSlicer/OrcaSlicer](https://github.com/OrcaSlicer/OrcaSlicer)** ⭐15,749 · C++
  兼容 Bambu / Prusa / Voron / VzBot / RatRig / Creality 的开源切片软件，本周持续活跃。

- **[Ultimaker/Cura](https://github.com/Ultimaker/Cura)** ⭐7,044 · Python
  基于 Uranium 框架的成熟切片 GUI，是桌面级 3D 打印工作流的默认入口之一。

- **[maziggy/bambuddy](https://github.com/maziggy/bambuddy)** ⭐2,999 · Python
  Bambu Lab 自托管控制中心：从单台 A1 到打印农场，去云化、隐私可控。

- **[Donkie/Spoolman](https://github.com/Donkie/Spoolman)** ⭐2,842 · Python
  3D 打印耗材库存管理工具，与 Klipper/Moonraker 等生态深度集成。

- **[Slicer/Slicer](https://github.com/Slicer/Slicer)** ⭐2,634 · C++
  跨平台医学影像与三维可视化开源平台，3D 打印前处理（医学模型分割）核心工具。

- **[greghesp/ha-bambulab](https://github.com/greghesp/ha-bambulab)** ⭐2,346 · Python
  Bambu Lab 打印机的 Home Assistant 集成。

- **[manyfold3d/manyfold](https://github.com/manyfold3d/manyfold)** ⭐2,171 · Ruby
  3D 打印文件的私有自托管数字资产管理器。

- **[fluidd-core/fluidd](https://github.com/fluidd-core/fluidd)** ⭐1,835 · Vue
  Klipper 固件的主流 Web UI，是打印农场可视化的标配。

- **[sn4k3/UVtools](https://github.com/sn4k3/UVtools)** ⭐1,622 · C#
  MSLA/DLP 树脂打印的文件分析、校验、修复与转换工具集。

### 🔗 文件格式与互操作

- **[bldrs-ai/Share](https://github.com/bldrs-ai/Share)** ⭐186 · JavaScript
  浏览器端 BIM/CAD 协作查看器，支持 IFC、STEP、STL、OBJ、glTF。

- **[bldrs-ai/conway](https://github.com/bldrs-ai/conway)** ⭐22 · TypeScript
  高性能 IFC/STEP Web 引擎，面向 Web CAD 应用。

- **[modelscript/modelscript](https://github.com/modelscript/modelscript)** ⭐14 · TypeScript
  Web 原生、多语言的增量编译器，统一 Modelica、SysML v2 与 STEP，支持跨域仿真验证。

- **[FriendsOfCADability/CADability](https://github.com/FriendsOfCADability/CADability)** ⭐178 · C#
  纯 .NET 3D 建模类库，支持 STEP/STL/DXF 互操作，无需依赖其他 3D 内核。

- **[andymai/occt-wasm](https://github.com/andymai/occt-wasm)** ⭐55 · Rust
  OpenCASCADE 编译为 WebAssembly（约 4MB brotli），配 TS API 与 Arena 内存模型——把 OCCT 真正搬进浏览器的关键基础设施。

- **[andymai/brepjs](https://github.com/andymai/brepjs)** ⭐110 · TypeScript
  Web 端精确 B-Rep 几何库，对前端参数化建模意义重大。

- **[google/draco](https://github.com/google/draco)** ⭐7,488 · C++
  3D 网格与点云压缩库，模型传输与网页端加载的工业级方案。

- **[gkjohnson/three-mesh-bvh](

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*