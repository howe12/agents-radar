# CAD/机械结构开源动态日报 2026-07-08

> 数据来源: GitHub Search API (115 仓库) | ArXiv cs.GR+cs.CG (22 篇论文) | RSS 新闻 (4 条) | 生成时间: 2026-07-08 05:53 UTC

---

# CAD/机械结构开源动态日报
**2026 年 7 月 6 日 · 第 ⌜本期⌝ 期**

---

## 1. 今日速览

今天的素材呈现出一个高度一致的信号：**CAD 正在从"画图工具"走向"AI 协同的工程操作系统"**。行业端,FreeCAD 与 Prusa 分别公布了 2026 社区设计大赛结果与 INDX Founders Edition 出货进展,开源 CAD 与消费级硬件两端均有实质性推进;研究端,**ArtisanCAD** 提出基于"专家知识蒸馏"的工业级 LLM-CAD 代理,而**空间布局联合优化**的工作则把物理耦合系统的拓扑+包装问题做成了可求解的工程问题;项目端,从 FreeCAD/Trimesh/OpenCASCADE 等老牌项目到 **occt-wasm**、**brepjs**、**Swift-CAD**、**loupe** 等新工具,围绕"AI Agent + WebAssembly 几何内核 + Code-CAD 流水线"的主线正在快速收口。

---

## 2. 行业脉搏

- **FreeCAD Community Design Competition 2026 揭晓**:由 FreeCAD Blog 公布的赛事结果不仅是社区汇报,更是开源 CAD 在建筑、机电、消费品等场景下"长尾场景落地能力"的一次集中展示。链接:<https://blog.freecad.org/2026/07/06/freecad-community-design-competition-2026-the-results/>
- **FreeCAD Q2 2026 Grants 公布**:基金拨款方向往往决定下一个季度主线。本次 Q2 资助清单是判断 FreeCAD 路线图优先项最直接的信号(渲染管线、装配、STEP/CAF 等)。链接:<https://blog.freecad.org/2026/07/04/q2-2026-grants-announced/>
- **FreeCAD WIP Wednesday · 2026-07-01**:Work-In-Progress 周报是把握 FreeCAD 主仓即将合并功能的"最前线信号",从 commit 级颗粒度观察 0.22 / 1.0 边界走向。链接:<https://blog.freecad.org/2026/07/01/wip-wednesday-1-july-2026/>
- **Prusa INDX · 2026-07 更新:Founder's Edition 出货**:INDX 转入实际发货阶段,意味着开源硬件从"3D 打印小厂"正式向"工业级物料/夹具/成型生产线"延伸。链接:<https://blog.prusa3d.com/indx_july_2026_update_137377/>

> 备注:本批素材中未含 OpenCASCADE、Bambu Lab、Hackaday 当日新条目,后续如出刊再补。

---

## 3. 研究前沿

从 22 篇 cs.GR / cs.CG 投稿中,以下 4 篇与 CAD / 机械结构主线关联最直接:

- **ArtisanCAD: An Industrial-Level CAD Agent with Expert-Grounded Knowledge Distillation** — Xu et al.
  <http://arxiv.org/abs/2607.05750v1>
  提出面向工业级零件的 LLM-CAD Agent,核心是用"专家知识蒸馏"解决长链建模中的特征依赖与稳健性问题。对 CAD 领域的意义:把自然语言→可靠零件模型的真正瓶颈(特征编辑、历史树一致性)从"演示 demo"升级到了"工业级可评测"水平,FreeCAD/CadQuery 这类可程序化内核最有可能率先受益。

- **A Decomposition-Based Framework for Joint Optimization and Spatial Packaging of Interconnected Systems with Physical Interactions** — Bückmann et al.
  <http://arxiv.org/abs/2607.06087v1>
  针对"互联系统 + 物理耦合"提出分解式联合拓扑优化 + 空间包装。意义:这是把航空、汽车舱内电子冷却类的"几何堆叠+传热耦合"问题切成可并行求解子问题的工程化路径,直接对接 CAD 内的**Packaging / Routing / Layout** 工作流。

- **Generalized altitudes and their bounds** — Dal Poz Kourimska & Wintraecken
  <http://arxiv.org/abs/2607.06187v1>
  把单形(vertex-to-opposite-face)上的高线概念推广到任意顶点对。意义:为内核层几何求解器(B-Rep 中的 point-face projection、offset、point-in-solid 测试)提供更紧的数值下界,有助于鲁棒 Booleans。

- **Shifting is Optimal under Gap-ETH: A Lower Bound Framework for Geometric Approximation Schemes** — Cáceres et al.
  <http://arxiv.org/abs/2607.06069v1>
  在 Gap-ETH 假设下证明 shifting 技巧在运行时间上最优。意义:对工程中"网格/覆盖/近似多边形"的近似 PTAS 提供了复杂度下界指引——在 STL/网格管线、剖分、近似骨架化等模块里,理论最优线已勾勒。

- **Lower Bounds for Approximating the Vietoris-Rips Filtration** — McCabe
  <http://arxiv.org/abs/2607.06524v1>
  给出 Vietoris-Rips 滤链的近似复杂度下界。意义:TDA 在"形状分析 / 制造缺陷检测"链路里越来越被用于点云/网格特征提取;这条边界让工程上选哪种摘要图更加心里有数。

---

## 4. 重点项目

按 6 大主题精选 14 个 7 日内有推送的活跃仓库:

### 🖥️ CAD 平台与编辑器

- **[FreeCAD/FreeCAD](https://github.com/FreeCAD/FreeCAD)** ⭐ 31,975
  官方源,跨平台参数化 3D 建模的事实开源标准。今日日报其他动态均围绕它展开。

- **[xiangechen/chili3d](https://github.com/xiangechen/chili3d)** ⭐ 4,660
  浏览器端 3D CAD,Web 化建模栈的关键一环,对"协作 + AI Agent 接管视口"尤其友好。

- **[LibreCAD/LibreCAD](https://github.com/LibreCAD/LibreCAD)** ⭐ 6,052
  2D CAD 主力,DXF/DWG 读写的稳定兜底,常被用于图纸级 DFM 流程入口。

- **[solvespace/solvespace](https://github.com/solvespace/solvespace)** ⭐ 4,041
  参数化 2D/3D CAD 的轻量标杆,几何求解器演示级样本。

- **[f3d-app/f3d](https://github.com/f3d-app/f3d)** ⭐ 4,527
  快速极简 3D viewer,STEP/STL 等格式的桌面/Batch 渲染前端,常作切片与仿真的"前哨"。

### 📐 计算几何与内核

- **[CGAL/cgal](https://github.com/CGAL/cgal)** ⭐ 5,971
  C++ 计算几何的"百科全书",机械设计中的布尔、骨架化、剖分、点云处理默认依赖。

- **[Open-Cascade-SAS/OCCT](https://github.com/Open-Cascade-SAS/OCCT)** ⭐ 2,625
  开源 B-Rep 几何内核,FreeCAD / CadQuery / EzyCad / mayo 等生态几乎全部直接用到。

### 🧬 创成式与参数化设计

- **[earthtojake/text-to-cad](https://github.com/earthtojake/text-to-cad)** ⭐ 7,802
  "Agent Skills for CAD/robotics/hardware"集合,把模型→抓取→打印串成一个 AI 流水线的入口。

- **[Adam-CAD/CADAM](https://github.com/Adam-CAD/CADAM)** ⭐ 4,741
  开源 text-to-CAD Web App,直接对应今日研究前沿中 ArtisanCAD 的产品化延伸。

- **[tonykoop/makerbench-hwe](https://github.com/tonykoop/makerbench-hwe)** ⭐ 0(新)
  "MakerBench"——把 SWE-bench 思路搬到物理设计领域,做**数学评分**而非 LLM 自评的 DFM/空间推理基准。

### 🖨️ 3D 打印与制造

- **[MarlinFirmware/Marlin](https://github.com/MarlinFirmware/Marlin)** ⭐ 17,471
  3D 打印固件的事实标准,与今日 Prusa 硬件发货形成上下游呼应。

- **[OrcaSlicer/OrcaSlicer](https://github.com/OrcaSlicer/OrcaSlicer)** ⭐ 15,038
  跨品牌切片器,可把 AI 生成的 STL/3MF 直接送进 Bambu/Prusa/Voron 等机器。

- **[sn4k3/UVtools](https://github.com/sn4k3/UVtools)** ⭐ 1,588
  MSLA/DLP 专用的文件分析、修复与转换工具,对光固化工艺前处理关键。

### 🔗 文件格式与互操作

- **[andymai/occt-wasm](https://github.com/andymai/occt-wasm)** ⭐ 21
  把 OCCT 编译到 WASM(~4MB brotli),为浏览器内**精确** B-Rep 提供底层。

- **[andymai/brepjs](https://github.com/andymai/brepjs)** ⭐ 60
  浏览器侧基于 occt-wasm 的精确 B-Rep 几何库,被 chili3d / 各类 Web CAD 拉来直接当作内核。

- **[bldrs-ai/conway](https://github.com/bldrs-ai/conway)** ⭐ 22
  高性能 IFC & STEP Web 引擎,工业交付与 BIM 协作的关键拼图。

- **[1amageek/swift-CAD](https://github.com/1amageek/swift-CAD)** ⭐ 9
  原生 Swift 的参数化 CAD:IR + B-Rep 评估 + 零拷贝交换 + WebAssembly 支持,CAD 内核多语言生态的又一个端点。

- **[YATSKOVSKYI/cadcore](https://github.com/YATSKOVSKYI/cadcore)** ⭐ 27
  纯 Rust 的 B-Rep 内核,AP203 STEP 导出、无 OCCT 依赖,代表"非 C++ 内核"路线。

### 🐍 Code-CAD 与脚本化

- **[CadQuery/cadquery](https://github.com/CadQuery/cadquery)** ⭐ 5,425
  基于 OCCT 的 Python 参数化 CAD 脚本框架,机械工程师最常用的"代码建模"入口。

- **[gumyr/build123d](https://github.com/gumyr/build123d)** ⭐ 2,593
  Python CAD 编程库的"现代分支",语义更接近真正 3D 建模心智模型,正在蚕食传统 OpenSCAD 思维。

- **[neka-nat/freecad-mcp](https://github.com/neka-nat/freecad-mcp)** ⭐ 1,260
  FreeCAD 的 MCP Server,把 FreeCAD 接到 Claude/Codex 等 Agent 客户端。

- **[ghbalf/freecad-ai](https://github.com/ghbalf/freecad-ai)** ⭐ 360
  FreeCAD 内 AI 工作台,直接用自然语言生成 3D 模型——本日报"AI × CAD"主题的代表性实现。

- **[jupytercad/JupyterCAD](https://github.com/jupytercad/JupyterCAD)** ⭐ 229
---
*Generated by agents-radar | MiniMax-M3*