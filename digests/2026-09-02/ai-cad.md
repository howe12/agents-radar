# CAD/机械结构开源动态日报 2026-09-02

> 数据来源: GitHub Search API (104 仓库) | ArXiv cs.GR+cs.CG (0 篇论文) | RSS 新闻 (5 条) | 生成时间: 2026-09-02 02:23 UTC

---

# CAD/机械结构开源动态日报

**日期：2026-08-28**

---

## 一、今日速览

今日 CAD/机械设计领域的开源生态被三大主题牵引：**版本控制的工程化**（FreeCAD History Workbench 将 Git 引入 CAD 文件历史）、**AI 原生建模的爆发**（多款 MCP 服务器与 AI 工作台同步亮相，覆盖 FreeCAD/Rhino/nTopology 全链路）、**切片与固件的下一轮迭代**（PrusaSlicer 3.0 预览版开启"未来切片"叙事）。仓库侧，CAD、Code-CAD、几何内核三条主线持续扩张，新兴的本地化设计代理（Anvilate、Kiln、CadQuery 生态）正在将"文本→可制造 STEP"变为现实。

---

## 二、行业脉搏

1. **FreeCAD History Workbench（Git 驱动版本化）** — 将 CAD 模型变更视为可 diff/merge 的 Git 对象，提供 3D 与模型树双视图对比。这对工程级多人协作、长周期项目可追溯性意义重大。
   链接：https://blog.freecad.org/2026/08/28/history-workbench-brings-git-powered-file-versioning-to-freecad/

2. **PrusaSlicer 3.0 Preview** — 官方定义"为 3D 打印未来而生"，意味着切片器正从几何处理向工艺智能、机器学习闭环方向演进，可能重构 FFF/DLP 工作流。
   链接：https://blog.prusa3d.com/prusaslicer-3-0-preview-built-for-the-future-of-3d-printing_137672/

3. **FreeCAD WIP Wednesday（8 月 26 日）** — 持续节奏的开发周报，是观察 FreeCAD 主线核心模块（Part/Sketcher/Assembly）演进与社区贡献的最佳窗口。
   链接：https://blog.freecad.org/2026/08/27/wip-wednesday-26-august-2026/

4. **Bambu Lab School Ambassadors 2026** — 头部 FDM 厂商深化教育生态，意味着消费级 3D 打印将进一步向校园、K12 普及，反向推动桌面级切片/建模工具链下沉。
   链接：https://blog.bambulab.com/meet-the-2026-bambu-lab-school-ambassadors/

5. **DIY Summer Sandals（参数化消费品案例）** — 柔性穿戴件的家用 3D 打印探索，展示参数化设计 + 切片 + 多材料组合的端到端消费场景。
   链接：https://blog.bambulab.com/diy-summer-sandals-by-sofia-rousinovich/

---

## 三、研究前沿

> 📭 **今日 cs.GR / cs.CG 论文数据为空。**  
> 建议持续关注 arXiv `cs.GR`、`cs.CG` 与 `cs.CV`（几何/重建方向）子刊，下一期补充分享。

---

## 四、重点项目

### 🖥️ CAD 平台与编辑器

| 仓库 | ⭐ | 一句话说明 |
|---|---|---|
| [FreeCAD/FreeCAD](https://github.com/FreeCAD/FreeCAD) | 33,198 | 开源多平台参数化 3D 建模标杆，PartDesign/Sketcher/Assembly 工作台构成机械 CAD 全栈底座 |
| [pascalorg/editor](https://github.com/pascalorg/editor) | 21,816 | Web 端 3D 建筑项目编辑器，代表"浏览器即 CAD 客户端"的产品形态 |
| [openscad/openscad](https://github.com/openscad/openscad) | 10,093 | "程序员的实体建模器"，脚本驱动参数化 CAD 的经典范式 |
| [LibreCAD/LibreCAD](https://github.com/LibreCAD/LibreCAD) | 6,311 | 跨平台 2D CAD，DXF/DWG 读写完备，仍是 2D 工程图迁移首选 |
| [solvespace/solvespace](https://github.com/solvespace/solvespace) | 4,132 | 紧凑型 2D/3D 参数化求解器，适合教学与轻量装配约束 |
| [eblanshey/HistoryWorkbench](https://github.com/eblanshey/HistoryWorkbench) | 138 | 把 Git 引入 FreeCAD，让 CAD 文件具备版本回滚与差异对比能力 |
| [APEbbers/FreeCAD-Ribbon](https://github.com/APEbbers/FreeCAD-Ribbon) | 136 | 为 FreeCAD 提供类 Office/Ribbon UI，对企业级用户体验关键 |

### 📐 计算几何与内核

| 仓库 | ⭐ | 一句话说明 |
|---|---|---|
| [CGAL/cgal](https://github.com/CGAL/cgal) | 6,030 | 计算几何算法库事实标准，覆盖三角化、布尔运算、网格处理等核心算子 |
| [Open-Cascade-SAS/OCCT](https://github.com/Open-Cascade-SAS/OCCT) | 2,826 | 开源 3D CAD/CAM/CAE 平台，FreeCAD、build123d、CadQuery、Mayo 均基于其内核 |
| [cdcseacave/openMVS](https://github.com/cdcseacave/openMVS) | 4,107 | 多视图立体重建库，把图像→网格→CAD 的逆向链路打通 |
| [mikedh/trimesh](https://github.com/mikedh/trimesh) | 3,662 | Python 三角网格主力库，轻量入口完成 STL/OBJ/3MF 加载与布尔 |
| [pyvista/pyvista](https://github.com/pyvista/pyvista) | 3,791 | 基于 VTK 的 3D 可视化与网格分析，CAE 前处理生态关键 |
| [MeshInspector/MeshLib](https://github.com/MeshInspector/MeshLib) | 811 | 工业级网格布尔/修复/抽稀/重网格化 SDK，绑定多语言 |
| [fougue/mayo](https://github.com/fougue/mayo) | 2,142 | Qt + OCCT 构建的 3D CAD 查看器与转换器，专注 STEP/IGES 互操作 |
| [polydera/trueform](https://github.com/polydera/trueform) | 136 | "几何界的 STL"，主打快速精确的网格布尔与空间查询 |
| [unageek/kigumi](https://github.com/unageek/kigumi) | 53 | 三角形网格布尔运算库，应对 CAD/3DP 网格修补常见痛点 |

### 🧬 创成式与参数化设计

| 仓库 | ⭐ | 一句话说明 |
|---|---|---|
| [ai-collection/ai-collection](https://github.com/ai-collection/ai-collection) | 9,138 | 生成式 AI 资源全景索引，是观察 AI×CAD 投资方向的雷达 |
| [leap71/PicoGK](https://github.com/leap71/PicoGK) | 1,076 | 计算工程紧凑几何内核，面向创成式航天/工业设计 |
| [clay-good/anvilate](https://github.com/clay-good/anvilate) | 6 | 本地优先机械设计代理：自然语言 → 物理校验的参数化 STEP/DXF，对接 CATIA/SolidWorks/NX |
| [armpro24-blip/cad-cae-copilot](https://github.com/armpro24-blip/cad-cae-copilot) | 55 | AI 原生 CAD/CAE/CAX 工作台，Text-to-CAD、Text-to-CAE 一体化 |

### 🖨️ 3D 打印与制造

| 仓库 | ⭐ | 一句话说明 |
|---|---|---|
| [MarlinFirmware/Marlin](https://github.com/MarlinFirmware/Marlin) | 17,562 | 3D 打印机固件事实标准，覆盖 8/32 位 MCU 主流平台 |
| [OrcaSlicer/OrcaSlicer](https://github.com/OrcaSlicer/OrcaSlicer) | 15,552 | 现代切片器标杆，跨 Bambu/Prusa/Voron/Creality 生态 |
| [makerspet/oomwoo](https://github.com/makerspet/oomwoo) | 10,046 | 开源扫地机器人，整机级"可制造开源硬件"代表项目 |
| [Ultimaker/Cura](https://github.com/Ultimaker/Cura) | 7,029 | Uranium 框架上的桌面切片 GUI，行业事实参考 |
| [Sienci-Labs/gsender](https://github.com/Sienci-Labs/gsender) | 366 | GRBL/grblHAL CNC 统一控制台，桌面 CNC 软件栈代表 |
| [fellesverkstedet/Bark-beetle-parametric-toolpaths](https://github.com/fellesverkstedet/Bark-beetle-parametric-toolpaths) | 124 | Grasshopper 多工艺刀路插件：3DP/CNC/激光/机器人臂+ AR 投影 |
| [codeofaxel/Kiln](https://github.com/codeofaxel/Kiln) | 52 | 开源 MCP 切片服务器，AI 代理直连 Bambu/Prusa/Klipper 全家桶 |
| [maziggy/bambuddy](https://github.com/maziggy/bambuddy) | 2,896 | 自托管 Bambu Lab 控制中心，去云化打印农场方案 |

### 🐍 Code-CAD 与脚本化

| 仓库 | ⭐ | 一句话说明 |
|---|---|---|
| [CadQuery/cadquery](https://github.com/CadQuery/cadquery) | 5,679 | 基于 OCCT 的 Python 参数化脚本框架，工业级 Code-CAD 主力 |
| [gumyr/build123d](https://github.com/gumyr/build123d) | 2,986 | 现代 Python CAD 编程库，代数/构造混合范式 |
| [BelfrySCAD/BOSL2](https://github.com/BelfrySCAD/BOSL2) | 2,340 | OpenSCAD 工具集大成者，让 .scad 接近现代 CAD 体验 |
| [partcad/partcad](https://github.com/partcad/partcad) | 491 | 制造级零件包管理器，构建"数字主线/TDP"标准 |
| [kellerlabs/homeracker](https://github.com/kellerlabs/homeracker) | 493 | 全模块化可打印机架系统，参数化硬件的代表项目 |
| [blwfish/freecad-mcp](https://github.com/blwfish/freecad-mcp) | 36 | FreeCAD MCP 服务器：32 个 AI 辅助建模工具 |
| [tanishqbhattad/rhino-mcp](https://github.com/tanishqbhattad/rhino-mcp) | 17 | Rhino 8 建筑建模 MCP，123 个工具，含意图校验与几何错误捕获 |
| [sohumsuthar/ntopology-mcp](https://github.com/sohumsuthar/ntopology-mcp) | 2 | nTopology MCP：无头执行 Notebook 块图，直接测量几何结果 |
| [aaronsb/freecad-cli](https://github.com/aaronsb/freecad-cli) | 10 | FreeCAD 命令行解释与脚本化入口，强化 CI/批处理能力 |

---

## 五、生态趋势信号

**AI × CAD 全面进入 MCP 协议时代。** FreeCAD、Rhino、nTopology 三大平台同时出现独立 MCP 服务器，叠加 Kiln、cad-cae-copilot、anvilate 等"代理即建模师"项目，说明 LLM 与 CAD 内核的接入已标准化为"协议 + 工具集"模式，AI 不再只是辅助对话框，而成为可调用内核能力的一等公民。

**Code-CAD 向工业级迁移。** CadQuery 与 build123d 双线推进 OCCT 绑定，BOSL2 把 OpenSCAD 拉近现代体验，PartCAD 则把"零件即包"做成标准——三者从语法、几何、包管理三端把脚本化 CAD 推向工程落地。

**本地优先、去云化制造栈成型。** Bambuddy、gsender、OrcaSlicer、Slicer/Slicer 共同指向一个事实：用户对云端锁定、订阅制切片服务正在用脚投票，自托管控制中心与开源固件正在

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*