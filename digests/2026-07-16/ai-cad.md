# CAD/机械结构开源动态日报 2026-07-16

> 数据来源: GitHub Search API (112 仓库) | ArXiv cs.GR+cs.CG (5 篇论文) | RSS 新闻 (3 条) | 生成时间: 2026-07-16 02:01 UTC

---

# 📊 CAD/机械结构开源动态日报

**日期：2026-07-15**　|　**覆盖范围：行业新闻 · ArXiv 论文 · GitHub 仓库**

---

## 1️⃣ 今日速览

今天开源 CAD 生态呈现三条主线交织：**FreeCAD 主线按部就班推进**（WIP 周报 + 趣味新插件），**消费级 3D 打印社区与影像品牌联姻**（Bambu Lab × Insta360 设计挑战赛），而 **GitHub 上"AI/Agent 驱动 CAD"已成最密集赛道**——text-to-CAD、MCP 服务器、生成式几何内核项目持续涌现。学术侧，神经隐式重建与生成式建模继续深化对曲面与有机结构的表现能力。整体看，"AI Native CAD + 浏览器/WASM 几何内核 + 制造端开放"是当下最值得追踪的三角。

---

## 2️⃣ 行业脉搏

| # | 动态 | 来源 | 意义 |
|---|------|------|------|
| 1 | **FreeCAD WIP Wednesday 周报** | [FreeCAD Blog](https://blog.freecad.org/2026/07/15/wip-wednesday-15-july-2026/) | 跟踪主分支最新合并，了解 Part/Assembly/PartDesign 等工作台演进方向 |
| 2 | **新插件 "Banana For Scale"** | [FreeCAD Blog](https://blog.freecad.org/2026/07/12/new-addon-banana-for-scale/) | 经典香蕉参照物进入 CAD，社区式度量教学的轻量化尝试 |
| 3 | **Bambu Lab × Insta360 联合设计挑战赛** | [Bambu Lab Blog](https://blog.bambulab.com/lets-make-it-bambu-lab-and-insta360-launch-luna-ultra-design-challenge-on-makerworld/) | 消费级 3D 打印生态与影像硬件厂商的跨界联动，MakerWorld 模型社区的运营深化 |

---

## 3️⃣ 研究前沿

### 📄 重点推荐

| 论文 | 链接 | 对 CAD/机械的贡献 |
|------|------|------------------|
| **CASA-SDF**: Curriculum-Aware Spatial Adaptation with Curvature-Guided Density | [arXiv:2607.13492](http://arxiv.org/abs/2607.13492v1) | 在神经隐式表面重建中引入曲率引导的自适应采样密度，对**复杂机械曲面、倒角、锐边重建**更鲁棒，可服务于逆向工程 |
| **TreeSRNF**: Square-Root Normal Fields for Tree-like 3D Objects | [arXiv:2607.13456](http://arxiv.org/abs/2607.13456v1) | 用平方根法向场统一描述植物/管道/分支结构的几何与拓扑变异，为**管网、桁架、进化结构**的生成式建模提供新框架 |
| **Bake It Till You Make It**: Ultrafast Spatial Texture-Atlas Splatting | [arXiv:2607.13808](http://arxiv.org/abs/2607.13808v1) | 3D Gaussian Splatting 的纹理图谱极速烘焙，**让 CAD 模型在 Web 端实现接近实时的照片级可视化**，对 Web CAD/AR 装配有直接价值 |

### 📄 次要关注

| 论文 | 链接 | 价值 |
|------|------|------|
| **Volumetric Inverse Rendering via Neural Radiative Transfer** | [arXiv:2607.13695](http://arxiv.org/abs/2607.13695v1) | 体积介质光学参数反演，对**散射材料/半透明机械部件**的视觉仿真有意义 |
| **ThinkBLOX**: 3D Indoor Scene Generation with Progressive Reasoning | [arXiv:2607.13539](http://arxiv.org/abs/2607.13539v1) | 渐进式推理生成室内场景，与**装配布局、BIM 协同设计**思路相通 |

---

## 4️⃣ 重点项目（按分类整理）

### 🖥️ CAD 平台与编辑器

| 项目 | ⭐ | 一句话说明 |
|------|---|------------|
| [**FreeCAD/FreeCAD**](https://github.com/FreeCAD/FreeCAD) | 32,149 | 开源参数化 3D CAD 标杆，覆盖机械设计全流程（Part、Assembly、Sketcher 等） |
| [**openscad/openscad**](https://github.com/openscad/openscad) | 9,851 | 程序化实体建模器，工程师与极客最爱的"代码即几何"工作流 |
| [**earthtojake/text-to-cad**](https://github.com/earthtojake/text-to-cad) | 8,166 | AI Agent 专用的 CAD/机器人/硬件设计技能集合，AI-CAD 生态入口 |
| [**LibreCAD/LibreCAD**](https://github.com/LibreCAD/LibreCAD) | 6,159 | 跨平台 2D CAD，DXF/DWG 读写能力强，制造业图纸替代方案 |
| [**Adam-CAD/CADAM**](https://github.com/Adam-CAD/CADAM) | 4,806 | 开源 text-to-CAD Web 应用，AI 生成 3D 模型 |
| [**xiangechen/chili3d**](https://github.com/xiangechen/chili3d) | 4,681 | 浏览器端 3D CAD，零安装即可建模 |
| [**solvespace/solvespace**](https://github.com/solvespace/solvespace) | 4,046 | 轻量级参数化 2D/3D CAD，约束求解器高效 |
| [**dune3d/dune3d**](https://github.com/dune3d/dune3d) | 2,021 | 全新 3D CAD 应用，强调多视图约束建模 |

### 📐 计算几何与内核

| 项目 | ⭐ | 一句话说明 |
|------|---|------------|
| [**CGAL/cgal**](https://github.com/CGAL/cgal) | 5,979 | 计算几何算法库，工业级 2D/3D 几何处理的事实标准 |
| [**Open-Cascade-SAS/OCCT**](https://github.com/Open-Cascade-SAS/OCCT) | 2,648 | 开源 3D CAD/CAM/CAE 平台，FreeCAD、Salome 等众多下游项目的基石 |
| [**polydera/trueform**](https://github.com/polydera/trueform) | 128 | C++/Python/TS 多语言绑定的高速精确网格布尔运算，**Booleans 重度用户的福音** |
| [**lzpel/cadrum**](https://github.com/lzpel/cadrum) | 38 | Rust + WASM 静态链接 OCCT 8.0.0，**浏览器原生 B-Rep 内核** |
| [**andymai/occt-wasm**](https://github.com/andymai/occt-wasm) | 27 | OCCT 编译为 WASM（~4MB brotli），让 Web CAD 获得 B-Rep 精度 |
| [**varun29ankuS/Roshera-CAD**](https://github.com/varun29ankuS/Roshera-CAD) | 16 | Rust B-Rep 内核，每步操作返回"有效性证书"，专为 AI Agent 防错设计 |

### 🧬 创成式与参数化设计

| 项目 | ⭐ | 一句话说明 |
|------|---|------------|
| [**armpro24-blip/cad-cae-copilot**](https://github.com/armpro24-blip/cad-cae-copilot) | 40 | AI-Native CAD/CAE 工作台，支持 text-to-CAD/text-to-CAE，build123d + OCCT 真实几何输出 |
| [**codeofaxel/Kiln**](https://github.com/codeofaxel/Kiln) | 35 | 开源 MCP 服务器，让 Claude/Codex/Cursor 直接设计→切片→打印 |
| [**clay-good/anvilate**](https://github.com/clay-good/anvilate) | 2 | 本地优先机械设计 Agent，自然语言 → 物理校验过的 STEP/DXF |

### 🖨️ 3D 打印与制造

| 项目 | ⭐ | 一句话说明 |
|------|---|------------|
| [**OrcaSlicer/OrcaSlicer**](https://github.com/OrcaSlicer/OrcaSlicer) | 15,118 | 当下最活跃的开源切片器，Bambu/Prusa/Voron 全机型覆盖 |
| [**Ultimaker/Cura**](https://github.com/Ultimaker/Cura) | 6,995 | 老牌切片 GUI，Uranium 框架，插件生态成熟 |
| [**neka-nat/freecad-mcp**](https://github.com/neka-nat/freecad-mcp) | 1,308 | FreeCAD MCP 服务器，把 FreeCAD 接入 LLM Agent 工作流 |
| [**sameer/svg2gcode**](https://github.com/sameer/svg2gcode) | 426 | SVG → G-code，笔式绘图机/激光雕刻/CNC 多用途 |
| [**Sienci-Labs/gsender**](https://github.com/Sienci-Labs/gsender) | 359 | grbl/grblHAL CNC 控制上位机，开源 CNC 工作流入口 |

### 🔗 文件格式与互操作

| 项目 | ⭐ | 一句话说明 |
|------|---|------------|
| [**f3d-app/f3d**](https://github.com/f3d-app/f3d) | 4,549 | 极速极简 3D 查看器，STEP/STL/3MF 全格式，命令行/CI 友好 |
| [**bldrs-ai/Share**](https://github.com/bldrs-ai/Share) | 178 | 浏览器端 BIM & CAD 协作平台，支持 IFC/STEP/STL/OBJ/gITF |
| [**bldrs-ai/conway**](https://github.com/bldrs-ai/conway) | 22 | 高性能 IFC & STEP Web 引擎，面向 Web CAD 应用 |

### 🐍 Code-CAD 与脚本化

| 项目 | ⭐ | 一句话说明 |
|------|---|------------|
| [**CadQuery/cadquery**](https://github.com/CadQuery/cadquery) | 5,459 | 基于 OCCT 的 Python 参数化 CAD 脚本框架，机械工程师自动化利器 |
| [**gumyr/build123d**](https://github.com/gumyr/build123d) | 2,645 | 新一代 Python CAD 编程库，Build123d 范式比 CadQuery 更直观 |
| [**BelfrySCAD/BOSL2**](https://github.com/BelfrySCAD/BOSL2) | 2,269 | OpenSCAD 通用形状/掩膜/操作库，降低程序化建模门槛 |
| [**CadQuery/CQ-editor**](https://github.com/CadQuery/CQ-editor) | 1,197 | CadQuery 的 PyQt GUI 编辑器，所见即所得调试 |
| [**michaelgale/cq-kit**](https://github.com/michaelgale/cq-kit) | 153 | CadQuery 工具与助手集合，模块化建模提速 |

---

## 5️⃣ 生态趋势信号

今天的素材透露三个清晰信号：

**① AI Agent 进入几何内核层**。从 [`Roshera-CAD`](https://github.com/varun29ankuS/Roshera-CAD) 的"操作即证书"设计，到 [`Kiln`](https://github.com/codeofaxel/Kiln) / [`freecad-mcp`](https://github.com/neka-nat/freecad-mcp) / [`anvilate`](https://github.com/clay-good/anvilate) 等 MCP 服务器遍地开花，社区正在把"LLM 不能被几何内核欺骗"这件事当作一等公民对待。这与 [`text-to-cad`](https://github.com/earthtojake/text-to-cad)、[`CADAM`](https://github.com/Adam-CAD/CADAM) 等上层 Agent 工具形成端到端栈。

**② 浏览器化与 WASM 化加速**。OCCT/CGAL 级内核通过 [`occt-wasm`](https://github.com/andymai/occt-wasm)、[`cadrum`](https://github.com/lzpel/cadrum) 进入浏览器；前端层 [`chili3d`](https://github.com/xiangechen/chili3d)、[`Share`](https://github.com/bldrs-ai/Share)、[`conway`](https://github.com/bldrs-ai/conway) 涌现，"免安装 + 协作"成为新的产品形态。

**③ 学术前沿向"几何质量 + 智能重建"靠拢**。[`CASA-SDF`](http://arxiv.org/abs/2607.13492v1) 把曲率引导引入神经隐式重建，直接对应

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*