# CAD/机械结构开源动态日报 2026-09-15

> 数据来源: GitHub Search API (106 仓库) | ArXiv cs.GR+cs.CG (0 篇论文) | RSS 新闻 (4 条) | 生成时间: 2026-09-15 02:54 UTC

---

# CAD/机械结构开源动态日报

**日期：2026 年 9 月 11 日** | 收录：行业新闻 4 条 · ArXiv 论文 0 篇 · GitHub 仓库 106 个

---

## 一、今日速览

FreeCAD 生态持续扩张：官方周边商店正式上线，WIP Wednesday 同步更新多个工作台进展，并曝光了一个全新的 **Microwave Workbench**（微波/电磁仿真方向）。硬件端 Prusa 发布 **Prusament PLA ColorMix** 五卷混色方案，可在 FDM 切片中复现 45 种渐变色。GitHub 端高活跃信号高度集中在 **FreeCAD AI 集成、Code-CAD、3D 打印切片** 与 **Mesh/CSG 内核** 四个方向，其中 `pascalorg/editor`、`earthtojake/text-to-cad`、`CadQuery/cadquery`、`neka-nat/freecad-mcp` 保持头部热度。综合来看，**"AI Agent + 开源 CAD 内核 + 制造闭环"** 正在成为 2026 年下半年最清晰的产业主线。

---

## 二、行业脉搏

1. **[FreeCAD Swag Shop 正式开张](https://blog.freecad.org/2026/09/11/freecad-swag-shop-now-open/)** — 标志 FreeCAD 基金会进入可持续运营阶段，周边收入将反哺开发与社区活动，对长期生态建设是积极信号。

2. **[WIP Wednesday, 9 September 2026](https://blog.freecad.org/2026/09/09/wip-wednesday-9-september-2026/)** — FreeCAD 主仓及周边 workbench 的周度开发快照，涵盖 Part、Assembly、TechDraw 等核心模块的合并 PR，是追踪 FreeCAD 路线图最权威的窗口。

3. **[Spotted: A new Microwave Workbench](https://blog.freecad.org/2026/09/08/spotted-a-new-microwave-workbench/)** — 新工作台瞄准 RF/微波/电磁仿真，意味着 FreeCAD 正从纯机械建模向 **多物理场耦合** 扩展，未来或与电磁求解器（如 openEMS、FEKO）联动，对天线与微波器件设计意义重大。

4. **[Prusament PLA ColorMix：5 卷料还原 45 种颜色](https://blog.prusa3d.com/prusament-pla-colormix-print-45-color-shades-using-just-five-filament-spools-and-more_137835/)** — 通过切片端 ColorMix 算法 + 物理混色，压缩物料库存；对多色 3D 打印的小批量定制、文创与外观件业务带来降本路径。

---

## 三、研究前沿

> ⚠️ 今日 cs.GR / cs.CG 频道无新收录论文。学术动态留白，建议关注下期回归。

---

## 四、重点项目

### 🖥️ CAD 平台与编辑器

- **[FreeCAD/FreeCAD](https://github.com/FreeCAD/FreeCAD)** — ⭐ 33,521
  开源参数化 3D CAD 事实标准，C++/OpenCascade 内核 + Python 脚本化，是 Linux/教育/中小制造场景的首选替代。

- **[pascalorg/editor](https://github.com/pascalorg/editor)** — ⭐ 23,918
  面向 AI Agent 的开源 3D 建筑编辑器，自带本地 CLI + MCP 工具，反映"AI 原生 CAD"的产品形态已被市场验证。

- **[openscad/openscad](https://github.com/openscad/openscad)** — ⭐ 10,213
  程序员的实体建模语言，纯文本描述几何，是 3D 打印社区和参数化零件的基石工具。

- **[LibreCAD/LibreCAD](https://github.com/LibreCAD/LibreCAD)** — ⭐ 6,367
  跨平台 2D CAD，DXF/DWG 双向读写，机械制图与二维出图的轻量替代。

- **[HakanSeven12/OpenCADStudio](https://github.com/HakanSeven12/OpenCADStudio)** — ⭐ 1,926
  基于 Rust + GPU 加速的 2D/3D CAD 草根项目，象征 Rust 重写 CAD 栈的新尝试，值得关注渲染性能与 DWG 支持进展。

- **[leozide/leocad](https://github.com/leozide/leocad)** — ⭐ 2,867
  LEGO 虚拟建模 CAD，教育与创意场景的活跃长尾。

### 📐 计算几何与内核

- **[CGAL/cgal](https://github.com/CGAL/cgal)** — ⭐ 6,043
  C++ 计算几何算法库事实标准，涵盖三角剖分、布尔运算、Arrangement 等，是学术与商业几何引擎的共同底座。

- **[fougue/mayo](https://github.com/fougue/mayo)** — ⭐ 2,187
  基于 Qt + OpenCascade 的 3D CAD 查看器与格式转换器，企业级 STEP/IGES 互操作的桌面端实用工具。

- **[MeshInspector/MeshLib](https://github.com/MeshInspector/MeshLib)** — ⭐ 822
  3D 网格布尔、修复、抽稀、重网格 SDK，绑定 Python/C#/C/JS，对逆向工程与扫描数据处理关键。

- **[polydera/trueform](https://github.com/polydera/trueform)** — ⭐ 144
  宣称"CSG 引擎"——精确网格布尔 + 空间查询 + 重网格，C++ 核心 + Python/TS 绑定，对实时几何内核有竞争力。

### 🧬 创成式与参数化设计

- **[earthtojake/text-to-cad](https://github.com/earthtojake/text-to-cad)** — ⭐ 15,793
  面向 LLM Agent 的 CAD/CAE/CAM 技能库，是 text-to-CAD 生态最显眼的中枢，定义"AI 怎么画图"的事实接口。

- **[clay-good/anvilate](https://github.com/clay-good/anvilate)** — ⭐ 7
  本地优先的机械设计 Agent：自然语言 → 物理验证后的参数化 STEP/DXF，输出可被 SolidWorks/NX/CATIA 直接编辑，是工业级落地路径的代表。

- **[gumyr/build123d](https://github.com/gumyr/build123d)** — ⭐ 3,107
  Python 现代 CAD 编程库，与 CadQuery 并列，OpenCascade 后端，API 风格更适合工程化项目。

### 🖨️ 3D 打印与制造

- **[OrcaSlicer/OrcaSlicer](https://github.com/OrcaSlicer/OrcaSlicer)** — ⭐ 15,690
  适配 Bambu/Prusa/Voron/VzBot/RatRig/Creality 等主流机型的 G-code 生成器，开源切片的事实头部之一。

- **[Ultimaker/Cura](https://github.com/Ultimaker/Cura)** — ⭐ 7,034
  开源切片 GUI 鼻祖，Uranium 框架 + 插件生态，FDM 入门与教学场景标配。

- **[Sienci-Labs/gsender](https://github.com/Sienci-Labs/gsender)** — ⭐ 369
  grbl/grblHAL CNC 统一控制器，对小型铣削与创客 CNC 用户友好。

- **[XRay3D/GERBER_X3](https://github.com/XRay3D/GERBER_X3)** — ⭐ 254
  PCB Gerber → CNC 铣削 G-code 转换器，机械-电子一体化小型作坊利器。

- **[sn4k3/UVtools](https://github.com/sn4k3/UVtools)** — ⭐ 1,620
  MSLA/DLP 树脂打印文件分析、修复、标定、转换，对光固化用户必备。

### 🔗 文件格式与互操作

- **[mlt131220/Astral3D](https://github.com/mlt131220/Astral3D)** — ⭐ 2,492
  Vue3 + Three.js 的 3D 引擎与编辑器，集成 BIM 轻量化、CAD 文件解析预览与插件系统，面向 Web 端 CAD/BIM 可视化。

- **[mayo](https://github.com/fougue/mayo)** ⭐ 2,187（同上） — 同样承担 STEP/IGES/mesh 互操作职责。

### 🐍 Code-CAD 与脚本化

- **[CadQuery/cadquery](https://github.com/CadQuery/cadquery)** — ⭐ 5,768
  基于 OCCT 的 Python 参数化 CAD 脚本框架，机械工程师做设计自动化、批量出图、与 CI/CD 集成的首选。

- **[BelfrySCAD/BOSL2](https://github.com/BelfrySCAD/BOSL2)** — ⭐ 2,364
  OpenSCAD 函数库 v2，把 OpenSCAD 从"会写代码就能用"提升到"工程级可用"。

- **[partcad/partcad](https://github.com/partcad/partcad)** — ⭐ 493
  面向可制造物理产品的"包管理器"，把零件文档化、复用、AI 检索串成 Digital Thread。

- **[neka-nat/freecad-mcp](https://github.com/neka-nat/freecad-mcp)** — ⭐ 2,319
  FreeCAD 的 MCP（Model Context Protocol）服务器，把 FreeCAD 暴露给 Claude/Cursor 等 LLM Agent；同方向还有 **[blwfish/freecad-mcp](https://github.com/blwfish/freecad-mcp)**（44★，32 工具）与 **[ghbalf/freecad-ai](https://github.com/ghbalf/freecad-ai)**（495★，自然语言生模型），三者构成 FreeCAD AI 化最活跃的三角。

- **[jupytercad/JupyterCAD](https://github.com/jupytercad/JupyterCAD)** — ⭐ 233
  JupyterLab 协同 3D 几何建模扩展，把 CAD 拉进数据科学工作流。

- **[codeofaxel/Kiln](https://github.com/codeofaxel/Kiln)** — ⭐ 57
  3D 打印方向的 MCP 服务器，Agent 从描述/草图一路跑到切片+打印，覆盖 Bambu/Prusa/Klipper/OctoPrint 等主流固件。

---

## 五、生态趋势信号

三条主线正在收束为一条：**开源 CAD 正被重写为 AI Agent 的"工具层"**。FreeCAD 一侧，官方主仓 + Microwave Workbench 拓展多物理场，第三方则集中爆发 MCP/AI 集成（`freecad-mcp` 系列、`freecad-ai`、Kiln）；Web/Agent 一侧，`pascalorg/editor` 与 `earthtojake/text-to-cad` 已具事实标准雏形，`anvilate`、`vibe-cading`、`SimpleCADAPI`、`camfer` 把自然语言 → 可编辑 STEP 的闭环越做越短；底层则由 CadQuery、build123d、OpenCascade、CGAL、Trueform、MeshLib 共同支撑布尔/网格内核。Prusa 的 ColorMix 则提示，**消费级 FDM 的差异化已转移到"材料 × 切片算法"组合**，硬件红利期接近尾声。

---

## 六、值得关注

1. **[FreeCAD Microwave Workbench](https://blog.freecad.org/2026/09/08/spotted-a-new-microwave-workbench/)** — 若该工作台成熟，FreeCAD 将首次具备"机械 + 电磁"原生仿真能力，对 RF/天线/微波器件设计是结构性变化，建议跟进其背后求解器选型与发布节奏。

2. **[clay-good/anvilate](https://github.com/clay-good/anvilate) 与 [earthtojake/text-to-cad](https://github.com/earthtojake/text-to-cad)** — 两者代表"本地优先 + 可编辑 STEP 输出"与"Agent 技能库"两条互补路径，是 text-to-CAD 从 demo 走向工业可用的关键观察点；推荐直接克隆跑通端到端流程。

3. **[codeofaxel/Kiln](https://github.com/codeofaxel/Kiln) 与 [OrcaSlicer/OrcaSlicer](https://github.com/OrcaSlicer/OrcaSlicer)** — 当 AI Agent 直接调用切片+打印机，开源切片软件正从"单机 GUI"演化为"MCP 服务"。OrcaSlicer 若跟进 MCP 暴露，将再次拉开与 Cura 的身位。

---

*日报由开源数据自动聚合生成 · 仅反映公开信息，不构成投资或选型建议*

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*