# CAD/机械结构开源动态日报 2026-08-11

> 数据来源: GitHub Search API (113 仓库) | ArXiv cs.GR+cs.CG (0 篇论文) | RSS 新闻 (3 条) | 生成时间: 2026-08-11 01:12 UTC

---

# CAD/机械结构开源动态日报

**日期范围**：2026-08-05 ~ 2026-08-10

---

## 一、今日速览

今日开源 CAD 圈的最强信号来自 FreeCAD 生态：官方预告 2026 年 8 月 29 日全球 Hackathon、Manyfold 资产平台加入 FreeCAD 缩略图支持、FreeCAD-MCP 周边工具持续扩张，叠加 `revhappy/GPT4FreeCAD`、`codeofaxel/Kiln` 等 AI-Agent-CAD 项目的密集迭代，**"LLM/MCP × 主流 CAD 内核"**正在从实验走向可用的工程流水线。与此同时，浏览器端 CAD（`xiangechen/chili3d`、`andymai/occt-wasm`、`andymai/brepjs`、`bldrs-ai/conway`）和 Code-CAD（`gumyr/build123d`、`CadQuery/cadquery`）在 WebAssembly、B-rep 引擎和生成式工程三个维度同步加速——开源 CAD 正同时向"AI 化、Web 化、代码化"三条主线汇聚。

---

## 二、行业脉搏

1. **FreeCAD 全球 Hackathon 定档 2026-08-29**
   官方博客预告社区线下+线上协作：https://blog.freecad.org/2026/08/10/save-the-date-freecad-hackathon-august-29th-2026/
   意义：FreeCAD 1.0 之后首次大规模集中冲刺，将直接决定未来 6 个月 Part Design、Assembly、TopoShape 性能瓶颈突破的方向。

2. **Manyfold 现已支持 FreeCAD 缩略图**
   自托管 3D 资产平台 Manyfold 接入 `.FCStd` 缩略图渲染：https://blog.freecad.org/2026/08/06/manyfold-now-with-freecad-thumbnails/
   意义：开源 STL/3MF 资产管理第一次原生"理解"参数化 CAD 文件，是 Printables/Thangs 生态之外的本地化、隐私优先替代方案的重要里程碑。

3. **WIP Wednesday（2026-08-05）**
   FreeCAD 核心开发周报：https://blog.freecad.org/2026/08/05/wip-wednesday-5-august-july-2026/
   意义：高频发布的开发日志持续暴露 TopoNaming、LinkStage3、OCCT 升级等关键底层进展，是评估 FreeCAD 主线稳定性的最佳窗口。

---

## 三、研究前沿

> ⚠️ 今日 **cs.GR / cs.CG** 抓取窗口内无新论文进入追踪列表。最近一次有意义的 arXiv 投稿（`Multi-Agent-CAD` 同期发布的 text-to-CAD 框架）已在下方"重点项目"中以代码仓库形式收录，可在论文索引恢复后回溯跟进。

建议持续关注的交叉方向：
- **Text-to-CAD / Multi-Agent**：参考 `Pan-Chera/Multi-Agent-CAD` 的"constrained test-time compute"思路，预计将影响后续 arXiv 投稿。
- **WebAssembly B-rep 内核**：`andymai/occt-wasm` 与 `andymai/brepjs` 的实验结果极可能成为 2026 Q4 的论文素材。
- **生成式机械设计**：`clay-good/anvilate`、`armpro24-blip/cad-cae-copilot` 背后的"physics-validated parametric STEP"思路，正对应 arXiv 的"design as code verification"方向。

---

## 四、重点项目

### 🖥️ CAD 平台与编辑器

- **[FreeCAD/FreeCAD](https://github.com/FreeCAD/FreeCAD)** ⭐ 32,748
  官方跨平台参数化 3D 建模器，本周新闻主角，所有 Addon 生态的母体。

- **[openscad/openscad](https://github.com/openscad/openscad)** ⭐ 9,918
  程序员友好的实体建模器；BOSL2、chiselcad 等衍生项目的基础语法源头。

- **[LibreCAD/LibreCAD](https://github.com/LibreCAD/LibreCAD)** ⭐ 6,231
  开源 2D CAD 标杆（DXF/DWG 原生读写），机械制图师替代 AutoCAD LT 的首选。

- **[xiangechen/chili3d](https://github.com/xiangechen/chili3d)** ⭐ 4,724
  浏览器原生 3D CAD 应用，与 OCCT-WASM 路线呼应，是"零安装 CAD"的重要标杆。

- **[solvespace/solvespace](https://github.com/solvespace/solvespace)** ⭐ 4,087
  极简 2D/3D 参数化求解器，对教学、机构运动学和约束求解研究仍具参考价值。

- **[leozide/leocad](https://github.com/leozide/leocad)** ⭐ 2,837
  虚拟乐高建模专用 CAD，体现开源 CAD 在垂直场景的延展能力。

### 📐 计算几何与内核

- **[CGAL/cgal](https://github.com/CGAL/cgal)** ⭐ 6,006
  算法事实标准的计算几何库，三角剖分、曲面重建、布尔运算等机械设计核心算子的参考实现。

- **[Open-Cascade-SAS/OCCT](https://github.com/Open-Cascade-SAS/OCCT)** ⭐ 2,745
  FreeCAD、KiCad-OCC、Mayo、EzyCad 等几乎所有开源 3D CAD 的几何内核基石。

- **[andymai/occt-wasm](https://github.com/andymai/occt-wasm)** ⭐ 40
  OCCT 编译为 ~4MB brotli 的 WebAssembly 包，是浏览器端运行真实工业级 B-rep 内核的关键拼图。

- **[andymai/brepjs](https://github.com/andymai/brepjs)** ⭐ 77
  基于 OCCT-WASM 的 Web 端精确 B-rep 库，让 JS/TS 也能写出可商用的几何操作。

### 🧬 创成式与参数化设计

- **[JuliaTopOpt/TopOpt.jl](https://github.com/JuliaTopOpt/TopOpt.jl)** ⭐ 224
  Julia 自动微分驱动的拓扑优化库，覆盖桁架/连续体、单/多材料 2D/3D，是科研级 generative design 的稳定入口。

- **[armpro24-blip/cad-cae-copilot](https://github.com/armpro24-blip/cad-cae-copilot)** ⭐ 46
  AI 原生 CAD/CAE 工作台，build123d + OCCT + MCP Server 三件套，对"生成式 + 可编辑"的工程化最有示范意义。

- **[clay-good/anvilate](https://github.com/clay-good/anvilate)** ⭐ 4
  本地优先的机械设计 Agent，自然语言→物理验证过的 STEP/DXF，对接 CATIA/SolidWorks/NX。

### 🖨️ 3D 打印与制造

- **[MarlinFirmware/Marlin](https://github.com/MarlinFirmware/Marlin)** ⭐ 17,524
  消费级 3D 打印机事实标准固件，机械精度与运动学调试的参考实现。

- **[OrcaSlicer/OrcaSlicer](https://github.com/OrcaSlicer/OrcaSlicer)** ⭐ 15,368
  兼容 Bambu/Prusa/Voron 等主流机的现代切片引擎，是工艺知识最密集的开源切片器。

- **[Ultimaker/Cura](https://github.com/Ultimaker/Cura)** ⭐ 7,010
  Uranium 框架 + 插件化切片器，对企业切片流水线仍有统治力。

- **[Sienci-Labs/gsender](https://github.com/Sienci-Labs/gsender)** ⭐ 363
  grbl/grblHAL CNC 一键连接与控制，TypeScript 现代化 CNC 控制器的代表。

- **[XRay3D/GERBER_X3](https://github.com/XRay3D/GERBER_X3)** ⭐ 253
  PCB 直接铣削的 G-code 生成器，PCB-CAM 一体化方向。

- **[codeofaxel/Kiln](https://github.com/codeofaxel/Kiln)** ⭐ 45
  3D 打印领域的 MCP Server：AI Agent 一键设计→切片→打印，跨越 Bambu/Prusa/Klipper/Marlin 多固件。

- **[Slicer/Slicer](https://github.com/Slicer/Slicer)** ⭐ 2,575
  医学影像计算平台，对应 CAD 中的逆向工程/扫描重建工作流。

- **[manyfold3d/manyfold](https://github.com/manyfold3d/manyfold)** ⭐ 2,119
  自托管 3D 打印资产平台，刚宣布支持 FreeCAD 缩略图。

### 🔗 文件格式与互操作

- **[f3d-app/f3d](https://github.com/f3d-app/f3d)** ⭐ 4,614
  极简快速的 3D 可视化器，STEP/IGES/STL/3MF 全格式支持的命令行事实标准。

- **[fougue/mayo](https://github.com/fougue/mayo)** ⭐ 2,121
  基于 Qt+OCCT 的 3D CAD 查看/转换器，工程交付环节的轻量 OCCT 前端。

- **[bldrs-ai/Share](https://github.com/bldrs-ai/Share)** ⭐ 181
  浏览器端 BIM/CAD 协同查看，支持 IFC/STEP/STL/glTF，BIM × CAD 互操作代表。

- **[bldrs-ai/conway](https://github.com/bldrs-ai/conway)** ⭐ 22
  Web 端高性能 IFC/STEP 引擎，Web CAD 的关键基础设施。

- **[pzfreo/draftwright](https://github.com/pzfreo/draftwright)** ⭐ 46
  针对 build123d/STEP 自动生成工程图，解决 Code-CAD 长期缺失的"出图"环节。

### 🐍 Code-CAD 与脚本化

- **[CadQuery/cadquery](https://github.com/CadQuery/cadquery)** ⭐ 5,583
  基于 OCCT 的 Python 参数化 CAD 脚本框架，工业 Code-CAD 事实标准。

- **[gumyr/build123d](https://github.com/gumyr/build123d)** ⭐ 2,831
  面向对象的 Python CAD 库，build123d + draftwright + FreeCAD-Like 工作流正在快速成熟。

- **[BelfrySCAD/BOSL2](https://github.com/BelfrySCAD/BOSL2)** ⭐ 2,308
  OpenSCAD 库生态事实标准，把 OpenSCAD 拉到了接近通用 CAD 的工程能力。

- **[partcad/partcad](https://github.com/partcad/partcad)** ⭐ 483
  "制造业的包管理器"：可制造物理产品的数字主线标准（Digital Thread / TDP）。

- **[particlesector/chiselcad](https://github.com/particlesector/chiselcad)** ⭐ 13
  Vulkan + Manifold 加速的 CSG 建模器，OpenSCAD 兼容语法；GPU 加速 CAD 的早期信号。

### 🤖 AI × CAD（横切热点，独立列出）

- **[earthtojake/text-to-cad](https://github.com/earthtojake/text-to-cad)** ⭐ 13,227
  CAD/CAE/CAM 的 Agent Skills 库，是当前 AI-CAD 生态最高 star 的"上层应用"。

- **[Pan-Chera/Multi-Agent-CAD](https://github.com/Pan-Chera/Multi-Agent-CAD)** ⭐ 689
  多 Agent 解耦的 text-to-CAD 框架，约束化的 test-time compute。

- **[neka-nat/freecad-mcp](https://github.com/neka-nat/freecad-mcp)** ⭐ 1,747
  FreeCAD MCP Server，AI 直接操作 FreeCAD 的桥梁。

- **[revhappy/GPT4FreeCAD](https://github.com/revhappy/GPT4FreeCAD)** ⭐ 63
  自然语言→参数化 FreeCAD 几何，支持 Gemini/OpenAI/Claude/Grok/OpenRouter 及本地模型。

- **[blwfish/freecad-mcp](https://github.com/blwfish/freecad-mcp)** ⭐ 20
  MCP Server for FreeCAD，32 个 AI 辅助 3D 建模工具。

---

## 五、生态趋势信号

跨新闻、论文和仓库三方的共同信号：**"开源 CAD 的 LLM/MCP 化

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*