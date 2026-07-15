# CAD/机械结构开源动态日报 2026-07-15

> 数据来源: GitHub Search API (112 仓库) | ArXiv cs.GR+cs.CG (7 篇论文) | RSS 新闻 (4 条) | 生成时间: 2026-07-15 01:50 UTC

---

# CAD / 机械结构开源动态日报
**2026-07-13 · 第 7 期**

---

## 一、今日速览

今日的关键词是 **"AI 代理 + Web CAD"**。arXiv 出现多篇关于代理式几何内核、可微分执行器与实时网格重建的研究；GitHub 上 Roshera-CAD 提出"带合法性证书的 B-Rep 引擎"，与 Kiln、FreeCAD-MCP、Anvilate、cad-cae-copilot 共同勾勒出"AI 工程师介入机械设计"的雏形。Bambu Lab 则联合 Insta360 推出 Luna Ultra 设计挑战，社区侧 MakerWorld / FreeCAD 的高频周更（WIP Wednesday）显示两端生态依然活跃。

---

## 二、行业脉搏

1. **Bambu Lab × Insta360 推出 Luna Ultra 设计挑战赛**（[博客](https://blog.bambulab.com/lets-make-it-bambu-lab-and-insta360-launch-luna-ultra-design-challenge-on-makerworld/)）  
   头部消费级 3D 打印厂商与全景相机品牌跨界合作，借助 MakerWorld 把"硬件 + 创意内容"打包，是打印机制造商从硬件销售向"设计-分享-电商"生态延伸的典型路径。

2. **"委内瑞拉危机中的创客救援"**（[博客](https://blog.bambulab.com/when-venezuela-needed-help-the-makers-moved-first/)）  
   展示 3D 打印在人道主义与医疗救援场景的实际价值，凸显分布式制造的本地化能力，也为开源 CAD/打印生态在应急工程领域的应用提供范本。

3. **FreeCAD WIP Wednesday #2026-07-08**（[博客](https://blog.freecad.org/2026/07/08/wip-wednesday-8-july-2026/)）  
   FreeCAD 主线每周开发汇总，反映参数化内核与工作台的迭代节奏，是了解 OCCT 上游、Part Design / Assembly 等模块进展的官方窗口。

4. **FreeCAD 新增「Banana For Scale」插件**（[博客](https://blog.freecad.org/2026/07/12/new-addon-banana-for-scale/)）  
   看似玩笑插件，但反映了 FreeCAD Addon 生态的活跃度——参考物一键放置，对设计评审、装配尺度对比有实际价值。

---

## 三、研究前沿

1. **NeuralActuator: 机器人执行器动力学与外力感知的神经建模**（[arXiv](http://arxiv.org/abs/2607.11734v1)）  
   可微分仿真器通常忽略执行器动力学，NeuralActuator 用神经网络建模关节摩擦/迟滞/扭矩响应，对**机械设计—控制协同**、机电一体化建模意义明显，可用于 CAD 装配体中的运动学闭环评估。

2. **IBPA: 增量球枢法实时自由形态流形网格重建**（[arXiv](http://arxiv.org/abs/2607.11627v1)）  
   针对 ROV/AUV 水下扫描的实时网格重建算法，集成空洞检测。属于**扫描-逆向**链条的核心算法，对现场检测、点云 → STEP/STL 工作流有直接价值。

3. **Adaptive Fluid Cohomology on Surfaces**（[arXiv](http://arxiv.org/abs/2607.12001v1)）  
   在非单连通曲面上模拟无粘不可压缩流体。流体力学 + 拓扑上同调的结合，可应用于**复杂壳体表面流体分析**（如换热器、管道内表面），对 CAE 前处理是潜在的新工具。

4. **RegHead: 非人头部的语义 Blendshape 重建**（[arXiv](http://arxiv.org/abs/2607.12206v1)）  
   前馈配准框架为非人形头部生成可驱动 avatar 的语义 blendshape。意义在**几何注册 + 形变传播**思路——同一思路可迁移到机械零件族建模（齿轮族、紧固件族）的参数化变形。

5. **Toward Inclusive Avatar Design with Limb Differences Through AI**（[arXiv](http://arxiv.org/abs/2607.11512v1)）  
   虽偏 XR/avatar，但体现了**包容性设计 + AI 生成**的趋势，对辅助器具定制（义肢、轮椅辅件）的参数化生成有方法论参考价值。

---

## 四、重点项目

### 🖥️ CAD 平台与编辑器
- **[FreeCAD/FreeCAD](https://github.com/FreeCAD/FreeCAD)** · ⭐32,129  
  跨平台开源参数化 3D 建模器，OCCT 内核 + Python 脚本，行业事实标准。
- **[openscad/openscad](https://github.com/openscad/openscad)** · ⭐9,841  
  "程序员的实体建模器"，纯文本描述几何，适合代码化与版本化。
- **[earthtojake/text-to-cad](https://github.com/earthtojake/text-to-cad)** · ⭐8,127  
  CAD / 机器人 / 硬件设计的 Agent 技能集合，反映 text-to-CAD 工程化趋势。
- **[Adam-CAD/CADAM](https://github.com/Adam-CAD/CADAM)** · ⭐4,802  
  开源 text-to-CAD Web 应用，浏览器内出 STEP/STL。
- **[xiangechen/chili3d](https://github.com/xiangechen/chili3d)** · ⭐4,677  
  浏览器端 3D CAD 应用，TypeScript + WebAssembly 全栈路线。
- **[solvespace/solvespace](https://github.com/solvespace/solvespace)** · ⭐4,045  
  轻量参数化 2D/3D CAD，约束求解器实现经典。
- **[dune3d/dune3d](https://github.com/dune3d/dune3d)** · ⭐2,021  
  新一代约束求解 3D CAD，C 语言实现，体量小。
- **[trailcode/EzyCad](https://github.com/trailcode/EzyCad)** · ⭐12  
  OCCT + ImGui + OpenGL 的现代 C++ CAD 应用范例。

### 📐 计算几何与内核
- **[CGAL/cgal](https://github.com/CGAL/cgal)** · ⭐5,977  
  计算几何算法库，工业级三角化、布尔运算、曲面重建。
- **[Open-Cascade-SAS/OCCT](https://github.com/Open-Cascade-SAS/OCCT)** · ⭐2,647  
  Open CASCADE 开源内核，FreeCAD / CadQuery / chili3d 都依赖它。
- **[mikedh/trimesh](https://github.com/mikedh/trimesh)** · ⭐3,624  
  Python 三角网格库，几何处理与互操作的事实标准。
- **[polydera/trueform](https://github.com/polydera/trueform)** · ⭐128  
  "几何领域的 STL"：精确布尔运算 + 空间查询 + 重网格化，C++/Python/TS。
- **[varun29ankuS/Roshera-CAD](https://github.com/varun29ankuS/Roshera-CAD)** · ⭐15  
  Rust B-Rep 引擎，每个操作返回合法性证书，为 AI 代理提供可验证几何。⭐ 近期最值得关注。
- **[1amageek/swift-CAD](https://github.com/1amageek/swift-CAD)** · ⭐10  
  Swift 原生 CAD 基础 + B-Rep 求值 + WASM 导出，语言生态新拓展。

### 🧬 创成式与参数化设计
- **[armpro24-blip/cad-cae-copilot](https://github.com/armpro24-blip/cad-cae-copilot)** · ⭐39  
  AI 原生 CAD/CAE/CAX 工作台，build123d + OCCT + MCP 服务器，构建"AI 工程师"流水线。
- **[codeofaxel/Kiln](https://github.com/codeofaxel/Kiln)** · ⭐35  
  开源 3D 打印 MCP 服务器，Claude/Codex/Cursor 直接驱动 Bambu / Prusa / Klipper 打印。
- **[rdevaul/yapCAD](https://github.com/rdevaul/yapCAD)** · ⭐25  
  Python 3 编写的进阶程序化 CAD + 计算几何系统。
- **[tonykoop/makerbench-hwe](https://github.com/tonykoop/makerbench-hwe)** · ⭐0  
  物理世界 Agent 基准：空间推理 + DFM + 3D 制造能力，**数学评分而非 LLM 评判**，SWE-bench 的物理对应物。
- **[clay-good/anvilate](https://github.com/clay-good/anvilate)** · ⭐0  
  本地优先机械设计 Agent：自然语言 → 物理校验的 STEP/DXF，可直入 CATIA/SolidWorks/NX。
- **[earlyspark/Codex-CutSmith](https://github.com/earlyspark/Codex-CutSmith)** · ⭐0  
  AI 辅助参数化 CAD：概念+视觉参考 → 激光切割扁平包装 + 装配说明。

### 🖨️ 3D 打印与制造
- **[OrcaSlicer/OrcaSlicer](https://github.com/OrcaSlicer/OrcaSlicer)** · ⭐15,109  
  主流开源切片器，跨多品牌打印机支持，活跃度高。
- **[Ultimaker/Cura](https://github.com/Ultimaker/Cura)** · ⭐6,995  
  老牌切片 GUI，Uranium 框架的工业参考实现。
- **[Keychron/Keychron-Keyboards-Hardware-Design](https://github.com/Keychron/Keychron-Keyboards-Hardware-Design)** · ⭐3,551  
  100+ 键盘鼠标工业设计资产，STEP/DXF/DWG/PDF 开源，**消费品牌开放 CAD 资产的范例**。
- **[makerspet/oomwoo](https://github.com/makerspet/oomwoo)** · ⭐4,299  
  开源扫地机器人，硬件 + 固件 + 控制完整链。
- **[manyfold3d/manyfold](https://github.com/manyfold3d/manyfold)** · ⭐2,081  
  自托管 3D 打印文件资产管理器。
- **[maziggy/bambuddy](https://github.com/maziggy/bambuddy)** · ⭐2,534  
  自托管 Bambu Lab 命令中心，去云化、支持 40 台机群。
- **[sn4k3/UVtools](https://github.com/sn4k3/UVtools)** · ⭐1,590  
  MSLA/DLP 文件分析、校准、修复、转换工具集。
- **[Sienci-Labs/gsender](https://github.com/Sienci-Labs/gsender)** · ⭐359  
  grbl/grblHAL CNC 控制前端。

### 🔗 文件格式与互操作
- **[f3d-app/f3d](https://github.com/f3d-app/f3d)** · ⭐4,542  
  快速极简 3D 查看器，支持 STEP/IGES/STL/3MF 全家桶。
- **[bldrs-ai/Share](https://github.com/bldrs-ai/Share)** · ⭐178  
  浏览器端 BIM/CAD 协同查看，IFC/STEP/STL/OBJ/glTF。
- **[bldrs-ai/conway](https://github.com/bldrs-ai/conway)** · ⭐22  
  面向 Web CAD 的高性能 IFC & STEP 解析引擎。
- **[andymai/brepjs](https://github.com/andymai/brepjs)** · ⭐67  
  浏览器端精确 B-Rep 几何，TypeScript 接口。
- **[andymai/occt-wasm](https://github.com/andymai/occt-wasm)** · ⭐26  
  OCCT 编译为 WebAssembly，~4MB brotli，TypeScript API，Web Worker 支持——**Web CAD 的几何内核底座**。
- **[lzpel/cadrum](https://github.com/lzpel/cadrum)** · ⭐38  
  Rust CAD 库，静态链接 OCCT 8.0，原生 + WASM 双运行。

### 🐍 Code-CAD 与脚本化
- **[CadQuery/cadquery](https://github.com/CadQuery/cadquery)** · ⭐5,454  
  基于 OCCT 的

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*