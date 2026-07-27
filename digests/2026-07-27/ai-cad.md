# CAD/机械结构开源动态日报 2026-07-27

> 数据来源: GitHub Search API (110 仓库) | ArXiv cs.GR+cs.CG (0 篇论文) | RSS 新闻 (4 条) | 生成时间: 2026-07-27 02:22 UTC

---

# CAD/机械结构开源动态日报
**日期：2026-07-25**

---

## 1. 今日速览

FreeCAD 连续两天内连发 1.1.2 与 1.1.3 两个补丁版本，体现 1.1 系列已进入快速迭代稳定期；同时其生态周边（MCP 服务器、AI 助手、Gears 模块等）持续活跃。GitHub 端的最大信号是 **"AI-Native + WebAssembly + GPU 加速"** 三股力量在 CAD 领域交汇——CADAM/Kiln/AgentSCAD 推动自然语言到 CAD 的转换，brepjs/occt-wasm/cadrum 将 OCCT 内核搬上浏览器，chiselcad 用 Vulkan 重建 CSG 模型器。打印端，Bambu Lab 脱离云端的本地化（bambuddy）与 Prusa 推出面向齿轮与运动件的 PA11 工程线材，反映"专业制造本地化"正在成型。

---

## 2. 行业脉搏

- **FreeCAD 1.1.3 发布** ([FreeCAD Blog](https://blog.freecad.org/2026/07/25/freecad-1-1-3-released/))
  距 1.1.2 仅两天即推出补丁，说明项目组在 1.1 系列上保持高频维护，对依赖 FreeCAD 的下游（addons、MCP、SheetMetal 等）生态意义重大。

- **FreeCAD 1.1.2 发布** ([FreeCAD Blog](https://blog.freecad.org/2026/07/23/freecad-1-1-2-released/))
  1.1 主线累积修复，代表当前推荐生产版本。

- **WIP Wednesday — 2026-07-22** ([FreeCAD Blog](https://blog.freecad.org/2026/07/22/wip-wednesday-22-july-2026/))
  持续的开发进度报告机制，是观察 FreeCAD 内核、Part Design、Assembly 等模块演进的窗口。

- **Prusament PA11 Natural 推出** ([Prusa Blog](https://blog.prusa3d.com/prusament-pa11-natural-material-with-extreme-mechanical-and-chemical-resistance_137458/))
  面向齿轮、传动件等机械功能性部件的尼龙材料，意味着 FDM 工艺正在切入传统注塑/机加工件的应用边界，对开源机械设计的可制造性版图扩张有直接影响。

---

## 3. 研究前沿

> 今日 ArXiv cs.GR / cs.CG 暂无新收录论文。
> 但开源仓库侧的若干项目实质承载了同类研究方向，可与日报"重点项目"对照阅读：

- **brepjs** —— 在浏览器侧重建精确 B-Rep 几何，呼应"B-Rep 上 Web"的图形学议题；
- **trueform** —— 主张"几何领域的 STL"，实现精确布尔与空间查询；
- **chiselcad** —— 基于 Vulkan/Manifold 的 GPU 加速 CSG，对应"实时体素/边界表示"研究方向。

---

## 4. 重点项目

### 🖥️ CAD 平台与编辑器

| 仓库 | ⭐ | 一句话说明 |
|---|---|---|
| [**FreeCAD/FreeCAD**](https://github.com/FreeCAD/FreeCAD) | 32,392 | 开源多平台参数化 3D 建模旗舰，1.1 版本维护活跃。 |
| [**openscad/openscad**](https://github.com/openscad/openscad) | 9,813 | 程序员向实体建模语言，参数化设计的事实标准之一。 |
| [**CadQuery/cadquery**](https://github.com/CadQuery/cadquery) | 5,509 | 基于 OCCT 的 Python 参数化 CAD 脚本框架，机械设计自动化主力工具。 |
| [**LibreCAD/LibreCAD**](https://github.com/LibreCAD/LibreCAD) | 6,153 | 跨平台 2D CAD，DXF/DWG 读写，机械制图基础工具。 |
| [**solvespace/solvespace**](https://github.com/solvespace/solvespace) | 4,063 | 轻量参数化 2D/3D CAD，含约束求解器，适合教学与嵌入。 |
| [**fougue/mayo**](https://github.com/fougue/mayo) | 2,106 | Qt + OpenCascade 的 3D CAD 查看/转换器，桌面端 STEP 互操作工具。 |
| [**leozide/leocad**](https://github.com/leozide/leocad) | 2,832 | 虚拟 LEGO 建模 CAD，Brick 几何与 LDraw 生态代表。 |

### 📐 计算几何与内核

| 仓库 | ⭐ | 一句话说明 |
|---|---|---|
| [**CGAL/cgal**](https://github.com/CGAL/cgal) | 5,987 | 计算几何算法库，工业级几何处理事实标准。 |
| [**pyvista/pyvista**](https://github.com/pyvista/pyvista) | 3,754 | 面向科学与工程的 3D 可视化与网格分析，CAE/CAD 桥接。 |
| [**mikedh/trimesh**](https://github.com/mikedh/trimesh) | 3,637 | Python 三角网格库，机械网格后处理与导出利器。 |
| [**gkjohnson/three-mesh-bvh**](https://github.com/gkjohnson/three-mesh-bvh) | 3,434 | three.js 网格 BVH 加速结构，Web 端几何查询性能核心。 |
| [**mourner/rbush**](https://github.com/mourner/rbush) | 2,760 | 高性能 2D R-tree 空间索引，几何查询基础设施。 |
| [**artem-ogre/CDT**](https://github.com/artem-ogre/CDT) | 1,430 | C++ 约束 Delaunay 三角化，CAD 网格剖分基础件。 |
| [**polydera/trueform**](https://github.com/polydera/trueform) | 129 | "几何领域的 STL"，精确布尔/空间查询/重网格。 |
| [**DGtal-team/DGtal**](https://github.com/DGtal-team/DGtal) | 397 | 数字几何与算法库，离散几何与拓扑工具集。 |

### 🧬 创成式与参数化设计

| 仓库 | ⭐ | 一句话说明 |
|---|---|---|
| [**Adam-CAD/CADAM**](https://github.com/Adam-CAD/CADAM) | 4,879 | 开源 Text-to-CAD Web 应用，自然语言生成几何。 |
| [**partcad/partcad**](https://github.com/partcad/partcad) | 478 | 可制造物理产品的包管理器，提出 Digital Thread 标准。 |
| [**kellerlabs/homeracker**](https://github.com/kellerlabs/homeracker) | 475 | 模块化可 3D 打印机架系统，参数化机架生态典型。 |
| [**codeofaxel/Kiln**](https://github.com/codeofaxel/Kiln) | 40 | 面向 3D 打印的 MCP 服务器，AI Agent 端到端设计—切片—打印。 |
| [**particlesector/chiselcad**](https://github.com/particlesector/chiselcad) | 12 | C++20 + Vulkan + Manifold 的 GPU 加速 CSG 模型器，OpenSCAD 语法兼容。 |
| [**Kevoyuan/AgentSCAD**](https://github.com/Kevoyuan/AgentSCAD) | 5 | AI 原生 CAD Agent，自然语言到 OpenSCAD 制品并自动修复/制造性校验。 |
| [**metaember/loupe**](https://github.com/metaember/loupe) | 0 | Code-CAD 评审流水线：渲染—验证—预览—切片一体化。 |

### 🖨️ 3D 打印与制造

| 仓库 | ⭐ | 一句话说明 |
|---|---|---|
| [**MarlinFirmware/Marlin**](https://github.com/MarlinFirmware/Marlin) | 17,503 | 3D 打印机固件事实标准，8/32 位 MCU 通用。 |
| [**OrcaSlicer/OrcaSlicer**](https://github.com/OrcaSlicer/OrcaSlicer) | 15,228 | 多品牌（X1/P1/Voron/Creality）G-code 生成器，社区主流切片器。 |
| [**Ultimaker/Cura**](https://github.com/Ultimaker/Cura) | 6,999 | 开源切片 GUI，基于 Uranium 框架，商业/教育双栖。 |
| [**dw-0/kiauh**](https://github.com/dw-0/kiauh) | 4,476 | Klipper 安装与更新助手，Linux 平台装机必备。 |
| [**huxingyi/dust3d**](https://github.com/huxingyi/dust3d) | 3,423 | 面向游戏/打印的低多边形 3D 建模工具。 |
| [**maziggy/bambuddy**](https://github.com/maziggy/bambuddy) | 2,648 | 自托管 Bambu Lab 控制中心，无云本地化打印农场方案。 |
| [**voneiden/ocp-freecad-cam**](https://github.com/voneiden/ocp-freecad-cam) | 64 | 基于 FreeCAD 的 CadQuery / build123d CAM 刀路规划。 |

### 🔗 文件格式与互操作

| 仓库 | ⭐ | 一句话说明 |
|---|---|---|
| [**f3d-app/f3d**](https://github.com/f3d-app/f3d) | 4,575 | 快速极简的 3D 查看器，STEP/STL/3MF 多格式支持。 |
| [**bldrs-ai/Share**](https://github.com/bldrs-ai/Share) | 181 | 浏览器端 BIM/CAD 协同查看，IFC/STEP/STL/OBJ/glTF 兼容。 |
| [**usnistgov/STP2X3D**](https://github.com/usnistgov/STP2X3D) | 100 | NIST 出品的 STEP → X3D 转换器。 |
| [**andymai/brepjs**](https://github.com/andymai/brepjs) | 72 | Web 端精确 B-Rep CAD 库。 |
| [**lzpel/cadrum**](https://github.com/lzpel/cadrum) | 48 | Rust 静态链接 OpenCASCADE，支持原生与 WebAssembly。 |
| [**andymai/occt-wasm**](https://github.com/andymai/occt-wasm) | 31 | OCCT 编译为 WebAssembly，TS API + Worker。 |
| [**bldrs-ai/conway**](https://github.com/bldrs-ai/conway) | 22 | Web 端高性能 IFC & STEP 引擎。 |

### 🐍 Code-CAD 与脚本化

| 仓库 | ⭐ | 一句话说明 |
|---|---|---|
| [**gumyr/build123d**](https://github.com/gumyr/build123d) | 2,706 | 与 CadQuery 同源理念的 Python CAD 库，现代 API。 |
| [**neka-nat/freecad-mcp**](https://github.com/neka-nat/freecad-mcp) | 1,459 | FreeCAD 的 Model Context Protocol 服务器，让 LLM 直接驱动 FreeCAD。 |
| [**ghbalf/freecad-ai**](https://github.com/ghbalf/freecad-ai) | 397 | FreeCAD 的 AI 助手工作台，自然语言生成 3D 模型。 |
| [**looooo/freecad.gears**](https://github.com/looooo/freecad.gears) | 346 | FreeCAD 齿轮模块，机械传动件参数化主力。 |
| [**shaise/FreeCAD_SheetMetal**](https://github.com/shaise/FreeCAD_SheetMetal) | 328 | FreeCAD 钣金工作台，板金设计扩展。 |
| [**FreeCAD/FreeCAD-addons**](https://github.com/FreeCAD/FreeCAD-addons) | 1,106 | FreeCAD 插件官方索引（<1.0 旧版）。 |
| [**APEbbers/BillOfMaterials-WB**](https://github.com/APEbbers/BillOfMaterials-WB) | 31 | FreeCAD 装配体 BOM 工作台。 |

---

## 5. 生态趋势信号

"**AI 端到端 + Web 端内核 + GPU 重算**"正在重塑开源 CAD 格局：自然语言到几何（CADAM/AgentSCAD/Kiln/freecad-ai）正与 MCP 协议（freecad-mcp）打通，使 LLM Agent 可以直接调用 FreeCAD/OpenSCAD；brepjs/occt-wasm/cadrum/conway 把 OCCT 完整 B-Rep 内核搬上浏览器，让 CAD 不必安装即可获得 STEP 级精度；chiselcad/trueform 用现代 C++20 + Vulkan + Manifold 重写 CSG，回应传统 OpenSCAD 性能瓶颈。打印侧，Prusa PA11 拓展了 FDM 制造的功能边界，而 bambuddy 等"去云化"项目则回应了

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*