# CAD/机械结构开源动态日报 2026-09-25

> 数据来源: GitHub Search API (109 仓库) | ArXiv cs.GR+cs.CG (16 篇论文) | RSS 新闻 (5 条) | 生成时间: 2026-09-25 02:57 UTC

---

# CAD/机械结构开源动态日报
**日期：2026-09-23 | 第 23 期**

---

## 一、今日速览

今日开源 CAD 生态呈现"**AI 代理 + Web 化 + 几何内核加速**"三条主线交织的格局。FreeCAD 社区连续推出 Lens 测试服务器、Lofting 教程和 WIP 进展，显示出 Part/Body 工作流趋于成熟；Bambu Lab 正式发布 R1 桌面级机型，进一步拉低工业级 3D 打印门槛。学术端，凸分解（CuACD）与神经隐式曲面（M-plicits）双双实现 GPU 端实时化，几何算法正在突破性能瓶颈；GitHub 端 OpenSCAD 生态（BOSL2、NopSCADlib）和 Code-CAD 派系（CadQuery、build123d）持续高活跃度，而 AI-CAD 代理（Kiln、AgentSCAD、Anvilate、text-to-cad）正以 MCP 协议为统一接口快速整合切片机、固件与建模引擎。

---

## 二、行业脉搏

1. **[FreeCAD：WIP Wednesday #23](https://blog.freecad.org/2026/09/23/wip-wednesday-23-september-2026/)** — FreeCAD Blog
   本期合并请求聚焦 Part 工作流优化与 Link/Assembly 性能提升，标志着长期困扰用户的"复杂装配变慢"问题正被系统性解决。

2. **[教程：在 Facebinders 之间进行放样（Lofting）](https://blog.freecad.org/2026/09/21/tutorial-lofting-between-parts-with-facebinders/)** — FreeCAD Blog
   Facebinder + Loft 组合为多实体拓扑桥接提供了简洁方案，对家电外壳、过渡管道等机械结构的快速建模极具价值。

3. **[Lens 测试服务器上线](https://blog.freecad.org/2026/09/18/announcing-lens-test-server/)** — FreeCAD Blog
   FreeCAD 引入新的渲染/可视化测试基础设施（Lens），为后续 PBR 材质、IBL 真实光照与协同审阅奠定底座。

4. **[Bambu Lab 发布 R1](https://blog.bambulab.com/big-job-light-work-bambu-lab-launches-r1/)** — Bambu Lab
   "Big Job. Light Work." 定位为大尺寸轻量化打印机型，配合 OrcaSlicer 与 Bambuddy 等开源切片/管理工具，对家庭工坊与小型车间形成新的"性能/价格"锚点。

5. **[Bambu Lab × Bambū Desserts 跨界合作](https://blog.bambulab.com/when-3d-printing-meets-a-sweet-treat-bambu-lab-and-bambu-desserts-drinks-team-up-for-a-one-of-a-kind-collaboration/)** — Bambu Lab
   体现消费级 3D 打印从"原型制造"向"消费品/零售场景定制"的延伸，工业设计的可制造性（DfM）教育意义大于技术增量。

---

## 三、研究前沿

1. **[CuACD: A Fully GPU-Resident Approximate Convex Decomposition](http://arxiv.org/abs/2609.28731v1)** — Ruoxi Shi, Xinyue Wei 等
   将凸分解（Acd）整体驻留 GPU，可显著加速碰撞检测、布尔运算与 3D 打印切片前置处理，对实时仿真/数字孪生场景至关重要。

2. **[M-plicits: Neural Implicit Surfaces via Nested Multiscale Residuals](http://arxiv.org/abs/2609.28684v1)** — Vinícius da Silva, Isabelle Melo 等
   用嵌套多尺度残差替代标准 SIREN/PE 编码，在保留神经隐式表达光滑性的同时降低训练成本，为"网格 → 隐式 → CSG → 网格"闭环提供了新底座。

3. **[TAPESIM: Efficient Simulation of Adhesive Tape Dispensing for Robotic Manipulation](http://arxiv.org/abs/2609.28766v1)** — Zhaofeng Luo, Xinyu Lu 等
   面向"线束固定/包装封箱"等真实产线任务的高效胶带铺设仿真，将连续柔性体仿真与机器人轨迹规划结合，可直接服务于数字工厂工艺设计。

4. **[OREO: Fidelity Alignment in 3D Generation via On-the-fly Rendering-Editing Optimization](http://arxiv.org/abs/2609.29788v1)** — Zhiyuan Ma, Wenbo Hu 等
   渲染—编辑闭环优化策略，让文/图生 3D 资产具备工业级视觉保真度，对 AI-CAD、AR/VR 装配演示与"AI 出图—人工精修"工作流有实用价值。

5. **[A Collapse Process for Farthest Voronoi Diagrams of Lines in 3D](http://arxiv.org/abs/2609.29865v1)** — Evanthia Papadopoulou, Martin Suderland 等
   3D 直线最远 Voronoi 图的塌缩构造算法，对 CNC 五轴刀具路径优化、机器人视野覆盖与建筑日照分析均为核心几何工具。

---

## 四、重点项目

### 🖥️ CAD 平台与编辑器
- **[FreeCAD/FreeCAD](https://github.com/FreeCAD/FreeCAD)** ⭐33,746 | C++
  开源多平台参数化 3D 建模器标杆，Part/Body/Assembly 三层架构与 OCCT 内核构成工业级基础，是"非商业 CAD"事实标准。
- **[pascalorg/editor](https://github.com/pascalorg/editor)** ⭐24,290 | TypeScript
  开源 3D 建筑编辑器，提供本地 CLI + MCP 工具，专门为人类与 AI 代理双向协作的工作流设计。
- **[openscad/openscad](https://github.com/openscad/openscad)** ⭐10,290 | C++
  "程序员的实体 3D CAD 建模器"，代码即模型，对版本管理、参数化复现与自动化设计天然友好。
- **[LibreCAD/LibreCAD](https://github.com/LibreCAD/LibreCAD)** ⭐6,408 | C++
  跨平台 2D CAD，完整支持 DXF/DWG 读写，是机械 2D 工程图领域的开源主力。
- **[CadQuery/cadquery](https://github.com/CadQuery/cadquery)** ⭐5,830 | Python
  基于 OCCT 的 Python 参数化脚本框架，使 CAD 进入"单元测试 + CI 流水线"时代，对设计自动化意义深远。
- **[xiangechen/chili3d](https://github.com/xiangechen/chili3d)** ⭐4,859 | TypeScript
  完全运行在浏览器中的 3D CAD，免安装、跨平台、便于嵌入 Web 设计协同。
- **[gumyr/build123d](https://github.com/gumyr/build123d)** ⭐3,199 | Python
  与 CadQuery 同源的 Python CAD 编程库，强调"显式几何构造 + 现代 Python 体验"，是 AlgoBuild 类设计的代表。
- **[leozide/leocad](https://github.com/leozide/leocad)** ⭐2,874 | C++
  虚拟 LEGO CAD 软件，属于教育/装配仿真细分赛道，对结构装配验证有借鉴意义。

### 📐 计算几何与内核
- **[google/draco](https://github.com/google/draco)** ⭐7,490 | C++
  Google 主导的 3D 网格/点云压缩库，是 Web 端大规模模型分发的工业标准。
- **[CGAL/cgal](https://github.com/CGAL/cgal)** ⭐6,055 | C++
  计算几何算法库标杆，几乎所有商业 CAD 内核都能找到其身影。
- **[MeshInspector/MeshLib](https://github.com/MeshInspector/MeshLib)** ⭐824 | C++
  3D 几何处理 SDK：布尔、修复、简化、重网格、点云三角化与 ICP 对齐，C++ 内核 + 多语言绑定。
- **[polydera/trueform](https://github.com/polydera/trueform)** ⭐146 | C++
  高速精确网格布尔/空间查询/重排库，C++ + Python + TypeScript 绑定，对浏览器端 B-Rep 操作尤为友好。
- **[iShape-Rust/iOverlay](https://github.com/iShape-Rust/iOverlay)** ⭐210 | Rust
  支持自相交多边形的高鲁棒布尔运算库，纯 Rust 实现，是 2D 工程图/CAM 刀路的可靠底层。

### 🧬 创成式与参数化设计
- **[BelfrySCAD/BOSL2](https://github.com/BelfrySCAD/BOSL2)** ⭐2,375 | OpenSCAD
  OpenSCAD 最大的扩展库之一，提供遮罩、附着器、复杂几何附件，把"代码建模"效率拉高一个数量级。
- **[nophead/NopSCADlib](https://github.com/nophead/NopSCADlib)** ⭐1,636 | OpenSCAD
  面向实际项目（机架、外壳、紧固件）的 OpenSCAD 零件库+框架，强调"可制造零件复用"。
- **[partcad/partcad](https://github.com/partcad/partcad)** ⭐496 | Python
  面向可制造物理产品的"包管理器+数字主线"标准，对企业级 PLM 与硬件供应链数字化意义重大。
- **[Pan-Chera/Multi-Agent-CAD](https://github.com/Pan-Chera/Multi-Agent-CAD)** ⭐1,004 | Python
  通过"约束测试时计算"实现文本到 CAD 的解耦多智能体框架，代表 LLM × CAD 的前沿架构方向。
- **[Kevoyuan/AgentSCAD](https://github.com/Kevoyuan/AgentSCAD)** ⭐15 | TypeScript
  AI 原生 CAD 代理，自然语言 → 经过几何修复与制造校验的 OpenSCAD 产物。
- **[clay-good/anvilate](https://github.com/clay-good/anvilate)** ⭐10 | Python
  本地优先的机械工程师设计代理，自然语言 → 物理校验后的参数化 STEP/DXF，输出可直接进入 CATIA/SolidWorks/NX/AutoCAD。

### 🖨️ 3D 打印与制造
- **[MarlinFirmware/Marlin](https://github.com/MarlinFirmware/Marlin)** ⭐17,592 | C++
  全球绝大多数 3D 打印机的默认固件，8/32 位 MCU 全平台覆盖。
- **[OrcaSlicer/OrcaSlicer](https://github.com/OrcaSlicer/OrcaSlicer)** ⭐15,770 | C++
  支持 Bambu/Prusa/Voron/Creality 等主流机型的开源切片引擎，社区迭代速度极快。
- **[Ultimaker/Cura](https://github.com/Ultimaker/Cura)** ⭐7,046 | Python
  Cura 切片 GUI，基于 Uranium 框架，是消费级桌面机的老牌切片前端。
- **[maziggy/bambuddy](https://github.com/maziggy/bambuddy)** ⭐3,004 | Python
  "Bambu Lab 不上云"自托管方案，把单机/打印农场完全本地化。
- **[Donkie/Spoolman](https://github.com/Donkie/Spoolman)** ⭐2,846 | Python
  3D 打印耗材库存管理服务，补齐"制造端物料数字主线"的关键一环。
- **[Slicer/Slicer](https://github.com/Slicer/Slicer)** ⭐2,637 | C++
  可视化与图像计算平台，医学/CNC/点云处理均广泛使用，3D 打印与逆向工程的强力工具。
- **[codeofaxel/Kiln](https://github.com/codeofaxel/Kiln)** ⭐68 | Python
  开源 3D 打印 MCP 服务器，让 Claude/Codex/Cursor 等代理直接驱动 Bambu/Prusa/Klipper/OctoPrint。

### 🔗 文件格式与互操作
- **[f3d-app/f3d](https://github.com/f3d-app/f3d)** ⭐4,722 | C++
  快速极简的 3D 查看器，支持 STEP/IGES/STL/GLTF 等 40+ 格式，适合 CI/CD 中自动可视化检查。
- **[fougue/mayo](https://github.com/fougue/mayo)** ⭐2,233 | C++
  基于 Qt + OpenCascade 的 3D CAD 查看/转换器，是 Windows 桌面级 STEP/IGES 工具的可靠替代。
- **[CadQuery/CQ-editor](https://github.com/CadQuery/CQ-editor)** ⭐1,244 | Python
  CadQuery 的 PyQt GUI 编辑器，便于交互式调试参数化 CAD 脚本。
- **[bldrs-ai/Share](https://github.com/bldrs-ai/Share)** ⭐188 | JavaScript
  浏览器端 BIM/CAD 协同查看平台，支持 IFC/STEP/STL/OBJ/GLTF，是 Web 装配评审的实用选择。
- **[andymai/occt-wasm](https://github.com/andymai/occt-wasm)** ⭐57 | Rust
  OpenCascade 编译为 WebAssembly（~4MB brotli），干净 TS API + Arena 内存管理，让 B-Rep 真正进入浏览器。
- **[bldrs-ai/conway](https://github.com/bldrs-ai/conway)** ⭐23 | TypeScript
  高性能 IFC & STEP 引擎，专为 Web CAD

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*