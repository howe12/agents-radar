# CAD/机械结构开源动态日报 2026-07-10

> 数据来源: GitHub Search API (106 仓库) | ArXiv cs.GR+cs.CG (0 篇论文) | RSS 新闻 (5 条) | 生成时间: 2026-07-10 02:25 UTC

---

# CAD / 机械结构开源动态日报

> 2026 年 7 月 · 第 27 周 · 整理自 FreeCAD / Prusa / Bambu Lab 官方博客、ArXiv 与 GitHub Trending

---

## 1. 今日速览

今日 CAD 开源生态呈现出 **"AI 智能体深度嵌入 + WebAssembly 全栈化"** 的双重主线：FreeCAD 接连放出 WIP 周报、设计大赛结果与 Q2 资助公告三连击，社区活力高涨；Prusa 正式宣布 INDX Founder's Edition 开始发货，标志着开源 3D 打印硬件向桌面制造闭环迈进；GitHub 端，**AI-MCP 协议**正在快速重塑 CAD 工具链——FreeCAD、Rhino、3D 打印切片器均出现了可直接被 Claude/Codex 调用的 MCP 服务器，与 text-to-CAD、agentic benchmark 等项目形成完整闭环。

---

## 2. 行业脉搏

- **FreeCAD 2026 社区设计大赛结果揭晓**（[FreeCAD Blog](https://blog.freecad.org/2026/07/06/freecad-community-design-competition-2026-the-results/)）：年度社区大赛获奖作品集中体现了 FreeCAD 在装配体、PartDesign、Arch 与 FEM 等工作台的实际能力上限，是观察"开源参数化建模能做什么"的最佳窗口。
- **FreeCAD Q2 2026 资助名单公布**（[FreeCAD Blog](https://blog.freecad.org/2026/07/04/q2-2026-grants-announced/)）：新一轮资金分配直接关系到 Toponaming、TNP、装配约束求解器等长期痛点；本周 FreeCAD 主仓（[FreeCAD/FreeCAD](https://github.com/FreeCAD/FreeCAD)，⭐32,020）保持高频提交，节奏吻合。
- **Prusa INDX 桌面制造平台进入交付阶段**（[Prusa Blog](https://blog.prusa3d.com/indx_july_2026_update_137377/)）：Founder's Edition 正式出货，意味着多材料/多工艺的桌面一体化制造（FDM + CNC + 激光？）从概念走向实物，是开源桌面硬件向"工厂"形态演进的关键节点。
- **Bambu Lab 报道委内瑞拉 Maker 社区应急响应**（[Bambu Lab Blog](https://blog.bambulab.com/when-venezuela-needed-help-the-makers-moved-first/)）：消费级 3D 打印在人道主义场景中的实战案例，进一步坐实桌面打印机的"分布式制造节点"定位。
- **WIP Wednesday 周报**（[FreeCAD Blog](https://blog.freecad.org/2026/07/08/wip-wednesday-8-july-2026/)）：常规进展汇总，Toponaming 重构、PD 草图稳定性等仍是主战场。

---

## 3. 研究前沿

> **说明**：今日 ArXiv cs.GR / cs.CG 暂未抓取到新论文，但 GitHub 上有若干**研究型 / 数据集型项目**承担了"类论文"角色，列示如下：

- **text-to-cad：CAD / 机器人 / 硬件设计的 Agent Skills 集合**（[earthtojake/text-to-cad](https://github.com/earthtojake/text-to-cad)，⭐7,912）：把"自然语言 → 可制造 CAD 模型"任务拆解为可被 Agent 调用的标准化 skill，是当下 text-to-CAD 领域最重要的开源能力清单。
- **MakerBench-HWE：面向物理世界的 Agentic 基准**（[tonykoop/makerbench-hwe](https://github.com/tonykoop/makerbench-hwe)）：首次提出"为制造而设计（DFM）+ 空间推理 + 3D 制造能力"的数学评分基准，被誉为"机械设计领域的 SWE-bench"，对评估 AI 工程师能力具有奠基意义。
- **伊斯兰几何图案的神经补全**（[ugail/Neural-Completion-of-Islamic-Geometric-Patterns](https://github.com/ugail/Neural-Completion-of-Islamic-Geometric-Patterns)）：通过轨道绑定预测 + 推理时投影强制 N 折旋转对称性，是**几何约束嵌入神经网络**的代表性工作，对装饰性 CAD / 纹理生成有直接价值。
- **pure-Rust 边界表示内核 cadcore**（[YATSKOVSKYI/cadcore](https://github.com/YATSKOVSKYI/cadcore)）：不依赖 OCCT 的 Rust 原生 B-Rep 内核，含 STEP AP203 导出，对"非 C++ 生态 CAD"是重要的研究型基础设施。
- **build123d 实时开发环境 bdbox**（[smkent/bdbox](https://github.com/smkent/bdbox)）：为参数化 Code-CAD 提供类 Jupyter 的热重载体验，间接推动"CAD 即数据科学"研究范式的落地。

---

## 4. 重点项目

### 🖥️ CAD 平台与编辑器

| 仓库 | ⭐ | 一句话说明 |
|---|---|---|
| [FreeCAD/FreeCAD](https://github.com/FreeCAD/FreeCAD) | 32,020 | 跨平台开源参数化建模旗舰，本周 WIP 与资助双线推进，是行业基线。 |
| [openscad/openscad](https://github.com/openscad/openscad) | 9,745 | 程序员友好的脚本式实体建模器，整个 OpenSCAD 生态的根仓库。 |
| [xiangechen/chili3d](https://github.com/xiangechen/chili3d) | 4,664 | 浏览器原生 3D CAD，TypeScript 实现，代表"无安装"CAD 方向。 |
| [solvespace/solvespace](https://github.com/solvespace/solvespace) | 4,044 | 轻量级 2D/3D 参数化 CAD，约束求解器极其纯粹。 |
| [Adam-CAD/CADAM](https://github.com/Adam-CAD/CADAM) | 4,757 | 开源 text-to-CAD Web 应用，连接自然语言与 OpenSCAD 流水线。 |
| [ghbalf/freecad-ai](https://github.com/ghbalf/freecad-ai) | 365 | FreeCAD 自然语言 → 3D 模型 AI 工作台，AI 化主路径之一。 |
| [jupytercad/JupyterCAD](https://github.com/jupytercad/JupyterCAD) | 229 | JupyterLab 协同 3D 建模扩展，把 CAD 带入数据科学工作流。 |

### 📐 计算几何与内核

| 仓库 | ⭐ | 一句话说明 |
|---|---|---|
| [CGAL/cgal](https://github.com/CGAL/cgal) | 5,972 | 计算几何算法库的"事实标准"，覆盖三角化、布尔、网格等。 |
| [Open-Cascade-SAS/OCCT](https://github.com/Open-Cascade-SAS/OCCT) | 2,637 | 开源 B-Rep 内核，绝大多数专业 CAD 软件的底层基石。 |
| [pyvista/pyvista](https://github.com/pyvista/pyvista) | 3,737 | 基于 VTK 的 Python 3D 可视化与网格分析库。 |
| [mikedh/trimesh](https://github.com/mikedh/trimesh) | 3,614 | 纯 Python 三角网格库，STL/3MF/STEP 解析利器。 |
| [gkjohnson/three-mesh-bvh](https://github.com/gkjohnson/three-mesh-bvh) | 3,415 | three.js BVH 加速库，Web 端 CAD/CAE 必备组件。 |

### 🧬 创成式与参数化设计

| 仓库 | ⭐ | 一句话说明 |
|---|---|---|
| [earthtojake/text-to-cad](https://github.com/earthtojake/text-to-cad) | 7,912 | CAD/机器人/硬件设计 Agent Skills 集合，text-to-CAD 枢纽项目。 |
| [clay-good/anvilate](https://github.com/clay-good/anvilate) | 0 | 面向机械工程师的开源本地优先设计 Agent，输出物理验证后的 STEP/DXF。 |
| [tanishqbhattad/rhino-mcp](https://github.com/tanishqbhattad/rhino-mcp) | 8 | Rhino 8 的 MCP 服务器，115 个 AI 工具可直接被 Claude/Codex 调用。 |
| [rdevaul/yapCAD](https://github.com/rdevaul/yapCAD) | 25 | 高级过程式 CAD 与计算几何系统，Python 3 原生。 |
| [tonykoop/makerbench-hwe](https://github.com/tonykoop/makerbench-hwe) | 0 | 物理世界 Agentic 评测基准，DFM + 空间推理数学评分。 |

### 🖨️ 3D 打印与制造

| 仓库 | ⭐ | 一句话说明 |
|---|---|---|
| [MarlinFirmware/Marlin](https://github.com/MarlinFirmware/Marlin) | 17,471 | 3D 打印机固件事实标准，覆盖 8/32 位 MCU。 |
| [OrcaSlicer/OrcaSlicer](https://github.com/OrcaSlicer/OrcaSlicer) | 15,064 | 多品牌切片器，支持 Bambu / Prusa / Voron / VzBot 等。 |
| [Ultimaker/Cura](https://github.com/Ultimaker/Cura) | 6,991 | 老牌开源切片 GUI，Uranium 框架生态核心。 |
| [dw-0/kiauh](https://github.com/dw-0/kiauh) | 4,460 | Klipper 一键安装与更新工具，Klipper 生态入口。 |
| [maziggy/bambuddy](https://github.com/maziggy/bambuddy) | 2,496 | 自托管 Bambu Lab 控制中心，从单机到 40 台农场统一管理。 |
| [codeofaxel/Kiln](https://github.com/codeofaxel/Kiln) | 31 | 3D 打印 MCP 服务器，AI Agent 端到端设计 → 切片 → 打印。 |
| [sn4k3/UVtools](https://github.com/sn4k3/UVtools) | 1,589 | MSLA/DLP 树脂打印文件分析、校准、修复、转换工具集。 |

### 🔗 文件格式与互操作

| 仓库 | ⭐ | 一句话说明 |
|---|---|---|
| [LibreCAD/LibreCAD](https://github.com/LibreCAD/LibreCAD) | 6,079 | 跨平台 2D CAD，DXF/DWG 读写核心，机械制图开源基线。 |
| [LibrePCB/LibrePCB](https://github.com/LibrePCB/LibrePCB) | 2,934 | 现代化 EDA 套件，机械 × 电子协同设计的桥接工具。 |
| [bldrs-ai/Share](https://github.com/bldrs-ai/Share) | 178 | 浏览器端 BIM/CAD 协同查看器，支持 IFC/STEP/STL/OBJ/GLTF。 |
| [Salusoft89/planegcs](https://github.com/Salusoft89/planegcs) | 90 | FreeCAD 2D 几何求解器的 WebAssembly 封装，约束求解上 Web。 |
| [andymai/occt-wasm](https://github.com/andymai/occt-wasm) | 22 | OCCT 编译为 WASM，~4MB brotli，干净 TS API + Web Worker 支持。 |
| [bldrs-ai/conway](https://github.com/bldrs-ai/conway) | 22 | Web 端高性能 IFC & STEP 引擎，浏览器 CAD 的算力底座。 |
| [andymai/brepjs](https://github.com/andymai/brepjs) | 60 | Web 端精确 B-Rep 几何库，TypeScript 原生。 |

### 🐍 Code-CAD 与脚本化

| 仓库 | ⭐ | 一句话说明 |
|---|---|---|
| [CadQuery/cadquery](https://github.com/CadQuery/cadquery) | 5,433 | 基于 OCCT 的 Python 参数化脚本 CAD 框架。 |
| [f3d-app/f3d](https://github.com/f3d-app/f3d) | 4,532 | 快速极简的 3D 查看器，命令行/脚本友好。 |
| [gumyr/build123d](https://github.com/gumyr/build123d) | 2,608 | Python CAD 编程库，代数器 / BuildPart 范式代表。 |
| [CadQuery/CQ-editor](https://github.com/CadQuery/CQ-editor) | 1,196 | CadQuery 的 PyQt GUI 编辑器，IPython 内核驱动。 |
| [BelfrySCAD/BelfrySCAD](https://github.com/BelfrySCAD/BelfrySCAD) | 2 | 混合 OpenSCAD + WYSIWYG 的过程式 CAD 系统，新范式探索。 |
| [moellere/WireStudio](https://github.com/moellere/WireStudio) | 15 | Agent 驱动的 ESP32

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*