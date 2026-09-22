# CAD/机械结构开源动态日报 2026-09-22

> 数据来源: GitHub Search API (101 仓库) | ArXiv cs.GR+cs.CG (13 篇论文) | RSS 新闻 (7 条) | 生成时间: 2026-09-22 02:49 UTC

---

# 📐 CAD 与机械结构开源动态日报

---

## 1️⃣ 今日速览

今日 FreeCAD 生态持续活跃，官方博客集中发布教程、新测试服务器与 WIP 周报，反映 1.0 临近阶段在边界建模与协作服务方向的连续打磨；与此同时，论文侧出现两项与机械设计强相关的工作——多机器人路径冲突的层级扫描（Swept-Volume）加速，以及基于弱可见性的 Witness Set 多项式算法，前者可直接对接数字孪生与工厂仿真，后者对应经典 Art Gallery 问题在复杂多边形域上的可见性求解，理论上与 CAD 视域分析、装配可达性研究相通。仓库侧最显著信号是 **AI 驱动文本到 CAD** 与 **MCP/Agent 化**趋势加速：text-to-cad、CADAM、Multi-Agent-CAD、kiln、AgentSCAD、freecad-mcp 等项目共同指向"LLM 直接生成可制造几何"这一新工作流。

---

## 2️⃣ 行业脉搏

- **FreeCAD 教程：用 Facebinder 在两部件间放样（Loft）**——展示了 Part 工作台中"将多个面绑定为一个可放样参考"的进阶建模套路，对叶轮、过渡接头、外壳类零件尤其有用。  
  🔗 https://blog.freecad.org/2026/09/21/tutorial-lofting-between-parts-with-facebinders/

- **FreeCAD 宣布 Lens 测试服务器**——这是 FreeCAD 走向云端协作 / 在线建模的早期基础设施信号，配合 SOC、分享与可视化的产品化路线值得关注。  
  🔗 https://blog.freecad.org/2026/09/18/announcing-lens-test-server/

- **WIP Wednesday（2026-09-16）**——官方例行的核心代码与工作台进展汇编，对跟踪 FreeCAD 1.x 路线图、CAM/Sketcher/Part Design 改进者必备。  
  🔗 https://blog.freecad.org/2026/09/16/wip-wednesday-16-september-2026/

- **Prusament PLA Lightweight：密度仅常规 PLA 的 35%**——通过发泡技术实现大幅减重，针对航空模型、cosplay 与 Drones 等需要轻量化场景，意味着 FDM 适用范围进一步扩展至结构功能件。  
  🔗 https://blog.prusa3d.com/prusament-pla-lw-65-lighter-than-regular-pla-perfect-choice-for-aircraft-cosplay-and-more_138059/

- **Bambu Lab × Bambū Desserts 跨界合作 & 无障碍打印社区项目**——消费级 3D 打印正在通过"食品级应用 + 辅助器具"两个方向破圈，对工业设计 / 个性化辅具研发有借鉴意义。  
  🔗 https://blog.bambulab.com/when-3d-printing-meets-a-sweet-treat-bambu-lab-and-bambu-desserts-drinks-team-up-for-a-one-of-a-kind-collaboration/  
  🔗 https://blog.bambulab.com/seven-organizations-one-maker-community-3d-printing-in-the-service-of-accessibility/

---

## 3️⃣ 研究前沿

- **Witness Set in Weak Visibility Polygons is Polynomial-Time Solvable**（Das 等）——证明 Art Gallery 问题的 Witness Set 在弱可见性多边形中可在多项式时间内求解，为多边形域内视域分析、装配可达性、协作机器臂盲区估计提供了理论基础。  
  🔗 http://arxiv.org/abs/2609.24460v1

- **MR-SPITE: 通过层级 Swept-Volume 近似加速多机器人冲突扫描**（Markowicz 等）——以层级扫掠体替代逐对精确碰撞检测，将多机同步路径的冲突扫描显著加速，直接对接数字孪生、机器人离线编程与多 CNC 协调加工。  
  🔗 http://arxiv.org/abs/2609.23928v1

- **Mira-Scene: 像素对齐布局的生成式 3D 场景**（Sun、Liu 等）——把单图生成的物体稳健地"摆放"进一致场景，对场景级 CAD 装配、机器人仿真环境自动构建有意义。  
  🔗 http://arxiv.org/abs/2609.23796v1

- **Constrained Program Generation for 3D Reaction Animation with a 0.8B Model**（Wang、Luo 等）——用小模型（0.8B）在约束下生成 3D 反应动画，提示"轻量 LLM + 约束解码"在工程可视化方向具备可行性。  
  🔗 http://arxiv.org/abs/2609.24457v1

- **The logarithmic spiral is optimal for shoreline search**（Temerev）——对未知直线岸线搜索问题的对数螺线最优性的计算机辅助证明，对路径规划、扫描测量策略有方法论参考。  
  🔗 http://arxiv.org/abs/2609.24454v1

---

## 4️⃣ 重点项目

### 🖥️ CAD 平台与编辑器
- **FreeCAD/FreeCAD** ⭐33,697｜官方开源多平台 3D 参数化建模器，Part Design / Sketcher / CAM 全栈。  
  🔗 https://github.com/FreeCAD/FreeCAD  
- **OpenSCAD/openscad** ⭐10,255｜程序员友好的"代码即几何"参数化 CAD，是脚本化设计与可复现硬件的事实标准。  
  🔗 https://github.com/openscad/openscad  
- **pascalorg/editor** ⭐24,219｜开源 3D 建筑编辑器，配套 CLI + MCP，面向 AI Agent 与人类协同工作流。  
  🔗 https://github.com/pascalorg/editor  
- **xiangechen/chili3d** ⭐4,852｜纯浏览器端运行的 3D CAD，借助 WASM 与 OCCT 完成核心造型。  
  🔗 https://github.com/xiangechen/chili3d  
- **solvespace/solvespace** ⭐4,165｜轻量参数化 2D/3D CAD，约束求解器是机械装配约束建模的优秀教学蓝本。  
  🔗 https://github.com/solvespace/solvespace  
- **gumyr/build123d** ⭐3,175｜Python 描述式 CAD 编程库，把 CAD 引入现代软件工程与测试流水线。  
  🔗 https://github.com/gumyr/build123d  
- **LibreCAD/LibreCAD** ⭐6,398｜跨平台 2D CAD，DXF/DWG 兼容，适合工程图纸与 2D 草图场景。  
  🔗 https://github.com/LibreCAD/LibreCAD

### 📐 计算几何与内核
- **CGAL/cgal** ⭐6,052｜C++ 计算几何算法库，工业级三角化、布尔、几何处理的事实标准。  
  🔗 https://github.com/CGAL/cgal  
- **MeshInspector/MeshLib** ⭐824｜3D 几何处理 SDK：Mesh Boolean、修复、重网格、偏置、点云三角化，多语言绑定，适合仿真前处理。  
  🔗 https://github.com/MeshInspector/MeshLib  
- **polydera/trueform** ⭐146｜高精度 CSG 引擎：Mesh Boolean、空间查询、Arrangement、Remeshing，Python/TS 绑定。  
  🔗 https://github.com/polydera/trueform  
- **mikedh/trimesh** ⭐3,683｜Python 三角网格库，与 ST

  L/OBJ/3MF/STEP 转换、几何查询配合紧密，是工程脚本化利器。  
  🔗 https://github.com/mikedh/trimesh  
- **pyvista/pyvista** ⭐3,819｜基于 VTK 的科学/工程 3D 可视化与网格分析，几何 QA 报告、仿真后处理首选。  
  🔗 https://github.com/pyvista/pyvista

### 🧬 创成式与参数化设计
- **earthtojake/text-to-cad** ⭐16,236｜面向 CAD/CAE/CAM 的 Agent Skill 集合，把 LLM 拉进工程文件链路。  
  🔗 https://github.com/earthtojake/text-to-cad  
- **Adam-CAD/CADAM** ⭐5,167｜开源文本到 CAD Web 应用，提示工程 → 模型闭环进入 UI 化阶段。  
  🔗 https://github.com/Adam-CAD/CADAM  
- **Pan-Chera/Multi-Agent-CAD** ⭐997｜MAC：解耦的多智能体框架，约束 Test-Time Compute 让文本到 CAD 更稳。  
  🔗 https://github.com/Pan-Chera/Multi-Agent-CAD  
- **codeofaxel/Kiln** ⭐66｜MCP 驱动的 3D 打印服务器：Agent 可完成"描述-建模-切片-打印"的全链路，对端到端无人化设计-制造流水线意义重大。  
  🔗 https://github.com/codeofaxel/Kiln  
- **Kevoyuan/AgentSCAD** ⭐15｜自然语言 → 校验后的 OpenSCAD 工件，自动几何修复与制造可制造性验证。  
  🔗 https://github.com/Kevoyuan/AgentSCAD

### 🖨️ 3D 打印与制造
- **MarlinFirmware/Marlin** ⭐17,590｜3D 打印机固件事实标准，覆盖 8/32 位 MCU，几乎所有商用机均使用或派生。  
  🔗 https://github.com/MarlinFirmware/Marlin  
- **OrcaSlicer/OrcaSlicer** ⭐15,742｜Bambu、Prusa、Voron、Creality 等多品牌切片引擎，活跃的开源切片主线。  
  🔗 https://github.com/OrcaSlicer/OrcaSlicer  
- **Ultimaker/Cura** ⭐7,042｜基于 Uranium 框架的经典切片 GUI，DXF 平台吸附、脚本扩展能力强。  
  🔗 https://github.com/Ultimaker/Cura  
- **Sienci-Labs/gsender** ⭐371｜grbl/grblHAL CNC 控制器一体化前端，把桌面 CNC 工程化做到位。  
  🔗 https://github.com/Sienci-Labs/gsender  
- **sn4k3/UVtools** ⭐1,622｜MSLA/DLP 文件分析、修复、转换与操作工具，处理树脂打印工程问题。  
  🔗 https://github.com/sn4k3/UVtools

### 🔗 文件格式与互操作
- **f3d-app/f3d** ⭐4,711｜快速极简的 3D 检视器，支持 STEP/IGES/3MF/STL/glTF，工程师本地预览首选。  
  🔗 https://github.com/f3d-app/f3d  
- **fougue/mayo** ⭐2,227｜Qt + OpenCascade 构建的 CAD 检视器/转换器，C++ 出色的 CAD 桌面端参考实现。  
  🔗 https://github.com/fougue/mayo  
- **bldrs-ai/Share** ⭐186｜浏览器端 BIM/CAD 协作平台，原生支持 IFC/STEP/STL/OBJ/glTF。  
  🔗 https://github.com/bldrs-ai/Share  
- **bldrs-ai/conway** ⭐22｜面向 Web 的高性能 IFC/STEP 引擎，构建纯前端 CAD 应用的底层。  
  🔗 https://github.com/bldrs-ai/conway  
- **andymai/occt-wasm** ⭐55｜OpenCascade 编译为 WASM（~4MB brotli），浏览器内运行工业级 B-Rep 几何。  
  🔗 https://github.com/andymai/occt-wasm  
- **partcad/partcad** ⭐496｜可制造物理产品（Digital Thread / TDP）的包管理器，把"零件即依赖"引入硬件工程。  
  🔗 https://github.com/partcad/partcad

### 🐍 Code-CAD 与脚本化
- **CadQuery/CQ-editor** ⭐1,241｜CadQuery 的 PyQt 图形前端，Python 写参数化模型 + 实时 3D 检视。  
  🔗 https://github.com/CadQuery/CQ-editor  
- **NiJingzhe/SimpleCADAPI** ⭐125｜面向 LLM 的 Agent-native CAD SDK：创建、检视、重建可编辑 3D 模型。  
  🔗 https://github.com/NiJingzhe/SimpleCADAPI  
- **andymai/brepjs** ⭐110｜TypeScript Web CAD 库，支持精确 B-Rep 几何，可直接对接前端建模器。  
  🔗 https://github.com/andymai/brepjs  
- **pzfreo/draftwright** ⭐67｜自动化工件技术图生成（build123d + STEP），把模型变成出图文档。  
  🔗 https://github.com/pzfreo/draftwright  
- **jonnor/projects** ⭐43｜Jupyter Notebook 中的 FreeCAD 小项目集合，体现 Notebook-as-CAD 流水线。  
  🔗 https://github.com/jonnor/projects

### 🛰️ FreeCAD 专项（生态最热）
- **neka-nat/freecad-mcp** ⭐2,436｜FreeCAD 的 MCP 服务器，让 LLM 直接读写模型树。  
  🔗 https://github.com/neka-nat/freecad-mcp  
- **blwfish/freecad-mcp** ⭐48｜32 工具集成的 MCP 版本，偏 AI 辅助建模。  
  🔗 https://github.com/blwfish/freecad-mcp  
- **ghbalf/freecad-ai** ⭐512｜AI 助手 Workbench，自然语言 → 3D 模型。  
  🔗 https://github.com/ghbalf/freecad-ai  
- **jupytercad/JupyterCAD** ⭐233｜JupyterLab 协同 3D 几何建模扩展，模型可纳入 Notebook 流程。  
  🔗 https://github.com/jupytercad/JupyterCAD  
- **ryankembrey/FreeCAD-DFM-Workbench** ⭐60｜面向可制造性设计（DFM）的 FreeCAD 工作台。  
  🔗 https://github.com/ryankembrey/FreeCAD-DFM-Workbench

---

## 5️⃣ 生态趋势信号

"**几何 + 模型上下文协议（MCP）+ 大语言模型（LLM）**"的三角正在重构开源 CAD 工作流。仓库侧，freecad-mcp、text-to-cad、CADAM、Multi-Agent-CAD、Kiln、AgentSCAD 在过去 7 天集中活跃，意味着"自然语言→可制造 B-Rep→切片→上机"这一闭环正在从单点工具演化为可组合技能库；论文侧的多机器人 Swept-Volume、弱可见性多项式算法为装配可达性与仿真加速提供新的算法养分；而 FreeCAD 官方对协作/云端基础设施（Lens）与教程体系（WIP、Loft 系列）的持续投入，配合 OCCT 编译为 WASM（occt-wasm、chili3d、conway）正在让"浏览器即工作台"成为现实。整体上，开源 CAD 的下一站是 **Agent 化、协作化与浏览器原生化**。

---

## 6️⃣ 值得关注

1. **FreeCAD 1.x + MCP 生态融合（freecad-mcp 系列 + FreeCAD AI Workbench）**——这是判断"LLM 是否能成为可靠 CAD 共创者"的关键节点；MCP 标准化后，模型对参数/约束/历史树的访问稳定性将决定大批量企业采用速度。  
   🔗 https://github.com/neka-nat/freecad-mcp  ·  https://github.com/ghbalf/freecad-ai

2. **浏览器原生 CAD 引擎（occt-wasm + brepjs + conway + chili3d）**——若 B-Rep 几何能在浏览器以 ~4MB brotli

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*