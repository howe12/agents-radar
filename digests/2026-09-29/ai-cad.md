# CAD/机械结构开源动态日报 2026-09-29

> 数据来源: GitHub Search API (106 仓库) | ArXiv cs.GR+cs.CG (0 篇论文) | RSS 新闻 (4 条) | 生成时间: 2026-09-29 03:41 UTC

---

# CAD/机械结构开源动态日报

**日期：2026-09-28**

---

## 一、今日速览

今日 CAD 与机械设计开源生态呈现三大主线：**FreeCAD 1.1.4 正式发布**，持续巩固其作为开源参数化建模主力平台的地位；**Bambu Lab 推出 R1 大幅面 3D 打印机**，带动切片软件与本地控制工具（BambuBuddy、Mainsail 等）热度上升；**AI Agent 与 CAD 的零边界化趋势进一步加速**——Multi-Agent CAD、FreeCAD MCP、AgentSCAD、anvilate、PhySpace SimpleCADAPI 等新项目集中涌现，"文本→可编辑 B-Rep"正成为下一代 Code-CAD 的共识方向。计算几何内核侧，OCCT 正在通过 WebAssembly（`occt-wasm`、BrepJs）登陆浏览器，未来 Web CAD 的 B-Rep 精度有望追平桌面端。

---

## 二、行业脉搏

1. **[FreeCAD 1.1.4 发布](https://blog.freecad.org/2026/09/28/freecad-1-1-4-released/)** — _FreeCAD Blog_
   1.1.x 系列的稳定补丁版本，重点修复 Part/PartDesign、Sketcher 与 OCCT 内核兼容性问题，是生产环境升级的推荐版本。

2. **[WIP Wednesday, 23 September 2026](https://blog.freecad.org/2026/09/23/wip-wednesday-23-september-2026/)** — _FreeCAD Blog_
   开发进度周报，揭示了正在推进的 Toponaming 改进、装配工作流与新导入器相关 PR，反映 FreeCAD 在长期痛点上的持续投入。

3. **[Factorio Has Arrived on Printables](https://blog.prusa3d.com/factorio-has-arrived-on-printables_138519/)** — _Prusa Blog_
   Prusa 旗下模型社区 Printables 与 Factorio 游戏方联动，意味着游戏化、IP 化正成为 3D 打印内容平台吸引用户的新路径。

4. **[Big Job. Light Work. Bambu Lab Launches R1](https://blog.bambulab.com/big-job-light-work-bambu-lab-launches-r1/)** — _Bambu Lab_
   Bambu Lab 发布大尺寸/工业级新品 R1，将带动 Klipper/Mainsail、本地化控制（BambuBuddy）等开源工具的二次繁荣，并推动切片端在大件/批量场景的优化。

---

## 三、研究前沿

> 今日 ArXiv cs.GR / cs.CG 频道未抓取到新论文。下方改为精选**与 CAD/机械设计强相关的开源算法项目**，作为研究侧动态的补充观察：

- **Multi-Agent CAD (MAC)**：将文本到 CAD 任务拆解为多智能体协作，通过测试时约束搜索提升几何有效性。
- **AgentSCAD**：以 TypeScript 实现的 AI 原生 CAD Agent，将自然语言请求转换为带几何自修复与制造校验的 OpenSCAD 产物。
- **SimpleCADAPI**：面向 LLM 的 Agent-Native CAD SDK，支持创建、检查与重建复杂可编辑 3D 模型。
- **draftwright**：基于 build123d / STEP 文件的自动技术工程图（视图、剖面、标注）生成，代表"模型→图样"自动化的实用尝试。
- **Variational / Generative Layout 系列项目（Variant Design Skill）**：聚焦"空白画布"问题，使用 Prompt → 多方案生成 → 变体导出的设计探索闭环。

---

## 四、重点项目

### 🖥️ CAD 平台与编辑器

- **[FreeCAD/FreeCAD](https://github.com/FreeCAD/FreeCAD)** ⭐ 33,824
  开源多平台 3D 参数化建模器，C++/Python 架构；是 OCCT + Python 脚本化最成熟的承载平台。

- **[openscad/openscad](https://github.com/openscad/openscad)** ⭐ 10,322
  程序员友好的参数化实体建模语言；纯代码定义几何，与 3D 打印社区生态深度耦合。

- **[solvespace/solvespace](https://github.com/solvespace/solvespace)** ⭐ 4,172
  轻量级 2D/3D 参数化 CAD，约束求解器小巧而精确，适合嵌入式/教育场景。

- **[leozide/leocad](https://github.com/leozide/leocad)** ⭐ 2,877
  LEGO 虚拟拼搭专用 CAD，玩具与教学建模场景的事实标准。

### 📐 计算几何与内核

- **[cdcseacave/openMVS](https://github.com/cdcseacave/openMVS)** ⭐ 4,138
  成熟的开源 SfM/MVS 重建库，扫描点云 → 网格/纹理模型的核心工具。

- **[pyvista/pyvista](https://github.com/pyvista/pyvista)** ⭐ 3,830
  基于 VTK 的 Python 3D 可视化与网格分析库，工程仿真与 CAE 前处理的标准工具。

- **[mikedh/trimesh](https://github.com/mikedh/trimesh)** ⭐ 3,688
  Python 三角网格处理库，几何布尔、剖面、STL/3MF I/O 一站式。

- **[MeshInspector/MeshLib](https://github.com/MeshInspector/MeshLib)** ⭐ 826
  MeshLab 团队新一代 3D 几何处理 SDK：网格布尔、修复、抽稀、重网格、ICP 对齐，支持 C++/Python/C#/JS 多语言绑定。

### 🧬 创成式与参数化设计（AI/Agent 化显著加速）

- **[earthtojake/text-to-cad](https://github.com/earthtojake/text-to-cad)** ⭐ 16,463
  CAD/CAE/CAM 领域的 Agent Skills 集合，是文本→工程模型标准化接口的代表项目。

- **[Pan-Chera/Multi-Agent-CAD](https://github.com/Pan-Chera/Multi-Agent-CAD)** ⭐ 1,009
  MAC 框架：通过多智能体协同 + 测试时约束搜索，将自然语言转换为可制造 CAD 模型。

- **[clay-good/anvilate](https://github.com/clay-good/anvilate)** ⭐ 10
  本地优先的机械设计 Agent：自然语言描述 → 物理校验 + 参数化 STEP/DXF，可直接对接 CATIA/SolidWorks/NX。

- **[Kevoyuan/AgentSCAD](https://github.com/Kevoyuan/AgentSCAD)** ⭐ 15
  AI 原生 OpenSCAD Agent：自然语言 → 带几何修复与制造校验的 OpenSCAD 工件。

### 🖨️ 3D 打印与制造

- **[MarlinFirmware/Marlin](https://github.com/MarlinFirmware/Marlin)** ⭐ 17,606
  8/32 位 MCU 通用的 RepRap 固件，商业 3D 打印机事实标准之一。

- **[OrcaSlicer/OrcaSlicer](https://github.com/OrcaSlicer/OrcaSlicer)** ⭐ 15,795
  跨品牌切片器（Bambu/Prusa/Voron/Creality 等），校准与多机适配能力突出。

- **[Ultimaker/Cura](https://github.com/Ultimaker/Cura)** ⭐ 7,048
  基于 Uranium 框架的开源切片 GUI，老牌但仍活跃。

- **[maziggy/bambuddy](https://github.com/maziggy/bambuddy)** ⭐ 3,029
  自托管 Bambu Lab 控制中心，去云化、本地化的"打印农场"方案。

- **[mainsail-crew/mainsail](https://github.com/mainsail-crew/mainsail)** ⭐ 2,219
  Klipper 的事实标准 Web 前端，是 Voron、Klippain 等社区装机必备。

### 🔗 文件格式与互操作

- **[f3d-app/f3d](https://github.com/f3d-app/f3d)** ⭐ 4,728
  快速、极简的 3D 查看器，对 STEP/IGES/3MF/glb 等工程格式支持完善。

- **[fougue/mayo](https://github.com/fougue/mayo)** ⭐ 2,239
  基于 Qt + OpenCascade 的 3D CAD 查看与转换器，工业级 STEP I/O 体验。

- **[andymai/occt-wasm](https://github.com/andymai/occt-wasm)** ⭐ 58
  OpenCascade 编译为 WebAssembly，提供干净 TS API 与 ~4MB brotli 体积，使浏览器原生 B-Rep 成为可能。

- **[andymai/brepjs](https://github.com/andymai/brepjs)** ⭐ 113
  基于 OCCT-Wasm 的 Web CAD 库，提供精确 B-Rep 几何的浏览器端 API。

- **[bldrs-ai/conway](https://github.com/bldrs-ai/conway)** ⭐ 23
  高性能 IFC & STEP 引擎，面向 Web CAD 应用的 B-Rep/平面模型解析。

### 🐍 Code-CAD 与脚本化

- **[CadQuery/cadquery](https://github.com/CadQuery/cadquery)** ⭐ 5,852
  基于 OCCT 的 Python 参数化 CAD 脚本框架，工程领域 Code-CAD 的事实标准。

- **[gumyr/build123d](https://github.com/gumyr/build123d)** ⭐ 3,227
  新兴 Python CAD 编程库，Builder 模式 + 1:1 OCCT 几何映射，CADQuery 之后的下一代选择。

- **[neka-nat/freecad-mcp](https://github.com/neka-nat/freecad-mcp)** ⭐ 2,537
  FreeCAD 的 MCP（Model Context Protocol）服务端，让 LLM 直接驱动 FreeCAD 进行 3D 建模。

- **[BelfrySCAD/BOSL2](https://github.com/BelfrySCAD/BOSL2)** ⭐ 2,381
  OpenSCAD 的标准扩展库，提供丰富形状、遮罩与操作函数，参数化建模必备。

- **[nophead/NopSCADlib](https://github.com/nophead/NopSCADlib)** ⭐ 1,641
  以 OpenSCAD 建模的零件库 + 项目框架，适合 DIY/3D 打印项目复用。

---

## 五、生态趋势信号

三个独立信息源在今天共同指向同一个方向：**CAD 正在从"桌面 GUI"演化为"可被 Agent 调用的工程 API"**。行业新闻侧 FreeCAD 持续推进稳定性与新工作流，制造端 Bambu Lab R1 推动切片/固件生态再次扩张；而在 GitHub 侧，最密集的增长来自三类项目——LLM→OpenSCAD/STEP 的 Agent（AgentSCAD、anvilate、SimpleCADAPI、Multi-Agent CAD）、FreeCAD/Klipper 的 MCP 接入（neka-nat/freecad-mcp、Kiln、bambuddy），以及把 OCCT 推上浏览器的 WebAssembly 工程（occt-wasm、BrepJs、conway）。这意味着"机械工程 + 生成式 AI"的栈组合正在快速从 Demo 走向可生产：文本不再只生成网格，而是要直接产出可被 CATIA/SolidWorks 打开的 B-Rep。

---

## 六、值得关注

1. **[FreeCAD MCP / Kiln / AgentSCAD 系列](https://github.com/neka-nat/freecad-mcp)** — LLM 与开源 CAD 内核的标准接口正在收敛，MCP 极可能成为"AI 驱动 CAD"的统一协议，建议尽早评估其在企业工作流中的接入方式。

2. **[occt-wasm + BrepJs + Conway](https://github.com/andymai/occt-wasm)** — OCCT 全面登陆浏览器意味着 Web CAD 终于可以丢掉"三角网格近似"标签，提供与桌面端等价的 B-Rep 精度，下一代 SaaS CAD / BIM 协作工具将完全构建在这一栈之上。

3. **[Bambu Lab R1 + BambuBuddy / Mainsail](https://blog.bambulab.com/big-job-light-work-bambu-lab-launches-r1/)** — 大件/工业级硬件上市叠加本地化控制工具，去云化、自托管的"打印农场"将成为中小制造工坊的合理形态，值得关注兼容机型与 Klipper 生态适配节奏。

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*