# CAD/机械结构开源动态日报 2026-07-11

> 数据来源: GitHub Search API (103 仓库) | ArXiv cs.GR+cs.CG (0 篇论文) | RSS 新闻 (5 条) | 生成时间: 2026-07-11 02:03 UTC

---

# CAD / 机械结构开源动态日报

> 2026-07-08 ｜ 信息源：FreeCAD Blog · Bambu Lab · Hackaday · ArXiv · GitHub Trending

---

## 一、今日速览

FreeCAD 生态本周迎来多项密集更新：官方公布 Q2 2026 资助名单确认开源 CAD 长期资金注入，社区设计大赛结果揭晓，同时 WIP Wednesday 显示 PartDesign 与 Sketcher 工作流仍在持续优化。仓库层面，AI 代理与 CAD 集成的两条主线尤为亮眼——`freecad-mcp`、`Kiln`、`text-to-cad` 等 MCP/Agent 框架加速把大模型装进参数化建模流程；底层几何内核则在向浏览器与 Rust 化迁移（`cadcore`、`occt-wasm`、`brepjs`）。硬件侧，Bambu Lab × Insta360 设计赛与"委内瑞拉 makers 救援"叙事继续把消费级 3D 打印推向主流。

---

## 二、行业脉搏

| # | 动态 | 意义 |
|---|------|------|
| 1 | **[Q2 2026 资助名单公布](https://blog.freecad.org/2026/07/04/q2-2026-grants-announced/)** — FreeCAD 基金会公布新一轮开发资助 | 资金保障直接决定 OCCT 升级、装配模块重写等长期工程的可持续性，是 FreeCAD 追赶商业 CAD 的关键杠杆 |
| 2 | **[FreeCAD 社区设计大赛 2026 结果](https://blog.freecad.org/2026/07/06/freecad-community-design-competition-2026-the-results/)** — 公布年度获奖作品 | 既是开源 CAD 真实生产力的公开"压力测试"，也是新功能/Workbench 实战检验窗口 |
| 3 | **[WIP Wednesday 7月8日](https://blog.freecad.org/2026/07/08/wip-wednesday-8-july-2026/)** — Toponaming、TNP-aware Sketcher、OCCT 7.9 适配等持续推进 | 显示 FreeCAD 仍在啃硬骨头（拓扑命名），这是历史数据可编辑性难题 |
| 4 | **[Bambu Lab × Insta360 Luna Ultra 设计挑战赛](https://blog.bambulab.com/lets-make-it-bambu-lab-and-insta360-launch-luna-ultra-design-challenge-on-makermaker/)** | 跨硬件厂商+平台型赛事，强化 MakerWorld 作为消费打印分发入口的护城河 |
| 5 | **["When Venezuela needed help, the makers moved first"](https://blog.bambulab.com/when-venezuela-needed-help-the-makers-moved-first/)** | 打印机作为应急制造节点的应用案例，推动开源固件 + 远程管控（如 Klipper/Mainsail）的需求 |

---

## 三、研究前沿

> 📭 今日 cs.GR / cs.CG 论文流为空。下一工作日将恢复学术板块。

---

## 四、重点项目

### 🖥️ CAD 平台与编辑器

- **[FreeCAD/FreeCAD](https://github.com/FreeCAD/FreeCAD)** — ⭐32,037
  多平台参数化 3D 模型器的事实标准开源实现，OCCT 内核 + Python 脚本化，是本文生态的核心枢纽。
- **[openscad/openscad](https://github.com/openscad/openscad)** — ⭐9,809
  "程序员的实体建模器"，纯文本描述几何，至今仍是无 GUI 工程化设计流水线的首选入口。
- **[LibreCAD/LibreCAD](https://github.com/LibreCAD/LibreCAD)** — ⭐6,127
  跨平台 2D CAD，DXF/DWG 全功能读写，是机械图纸交付场景的稳定基线。
- **[CadQuery/cadquery](https://github.com/CadQuery/cadquery)** — ⭐5,437
  基于 OCCT 的 Python 参数化脚本框架，把 CAD 变成可被 CI 调用的"几何编译器"。
- **[gumyr/build123d](https://github.com/gumyr/build123d)** — ⭐2,612
  build123d 把 CadQuery 的 builder 模式进一步现代化，对复杂装配体的可读性显著提升。
- **[xiangechen/chili3d](https://github.com/xiangechen/chili3d)** — ⭐4,667
  浏览器端 3D CAD 应用的活跃分支，反映了"零安装 Web CAD"已经成为独立赛道。
- **[neka-nat/freecad-mcp](https://github.com/neka-nat/freecad-mcp)** — ⭐1,275
  为 FreeCAD 暴露 MCP 接口，让 Claude/Cursor 等 LLM Agent 直接驱动参数化建模，是"AI × CAD"范式落地标志项目。
- **[jupytercad/JupyterCAD](https://github.com/jupytercad/JupyterCAD)** — ⭐229
  JupyterLab 内的协同 3D 建模扩展，把 CAD 推到 Notebook 驱动的科研与教学场景。

### 📐 计算几何与内核

- **[CGAL/cgal](https://github.com/CGAL/cgal)** — ⭐5,972
  计算几何算法库的事实标准，覆盖三角化、布尔运算、Arrangement、运动规划等，是科研与商业 CAD 的公共底座。
- **[Open-Cascade-SAS/OCCT](https://github.com/Open-Cascade-SAS/OCCT)** — ⭐2,639
  开源 B-Rep 几何内核，FreeCAD/CadQuery/EzyCad 的共同依赖；其 API 演进直接决定整个 Python CAD 生态上限。
- **[andymai/brepjs](https://github.com/andymai/brepjs)** — ⭐61
  Web 上的精确 B-Rep 几何库，配合 OCCT-WASM 把"浏览器里画有真实拓扑的实体"从设想拉近到产品级。
- **[YATSKOVSKYI/cadcore](https://github.com/YATSKOVSKYI/cadcore)** — ⭐27
  纯 Rust 实现的 B-Rep 内核（无 OCCT、无 C++），并支持 O(N) 切片扫描与 STEP AP203 导出，是去 OCCT 依赖的新尝试。
- **[mapbox/earcut](https://github.com/mapbox/earcut)** — ⭐2,562
  体积最小、速度最快的 JS 多边形三角剖分库，被大量 Web 可视化与切片预览工具直接采用。
- **[iShape-Rust/iOverlay](https://github.com/iShape-Rust/iOverlay)** — ⭐195
  Rust 实现的 2D 多边形布尔运算，覆盖并/差/异或与自相交处理，是轻量级 2D 引擎的几何基石。

### 🖨️ 3D 打印与制造

- **[MarlinFirmware/Marlin](https://github.com/MarlinFirmware/Marlin)** — ⭐17,471
  RepRap 系打印机最广泛部署的固件，8/32 位 MCU 通吃，硬件兼容性与活跃度至今无可替代。
- **[OrcaSlicer/OrcaSlicer](https://github.com/OrcaSlicer/OrcaSlicer)** — ⭐15,075
  兼顾 Bambu、Prusa、Voron、Creality 等主流机型的 G-code 生成器，界面与算法迭代速度领先。
- **[Ultimaker/Cura](https://github.com/Ultimaker/Cura)** — ⭐6,993
  仍是被最广泛部署的开源切片 GUI，Uranium 插件框架使其能够承担企业级产线落地。
- **[maziggy/bambuddy](https://github.com/maziggy/bambuddy)** — ⭐2,502
  去云化、自托管的 Bambu Lab 控制中心，1 台到 40 台机群统一管理，切中"数据主权 + 小作坊"痛点。
- **[mainsail-crew/mainsail](https://github.com/mainsail-crew/mainsail)** — ⭐2,177
  Klipper 的事实标准 Web 控制台，几乎成为 Voron / 树莓派装机必备。
- **[manyfold3d/manyfold](https://github.com/manyfold3d/manyfold)** — ⭐2,071
  自托管的 3D 打印文件 DAM，定位对应"自托管的 Sketchfab"，补齐设计者资产管理一环。
- **[Donkie/Spoolman](https://github.com/Donkie/Spoolman)** — ⭐2,579
  跨机型耗材库存管理系统，让打印小工坊真正把 BOM 跑起来。
- **[Sienci-Labs/gsender](https://github.com/Sienci-Labs/gsender)** — ⭐356
  GRBL/grblHAL CNC 的现代化控制台，反映 CNC 桌面化与软件体验升级趋势。
- **[sameer/svg2gcode](https://github.com/sameer/svg2gcode)** — ⭐425
  Rust 实现的 SVG → G-code，向笔式绘图/激光雕刻/CNC 输出打开"矢量即刀路"的新链路。
- **[sn4k3/UVtools](https://github.com/sn4k3/UVtools)** — ⭐1,589
  MSLA/DLP 切片与文件分析/修复/转换工具，树脂打印侧的必备小工具。

### 🔗 文件格式与互操作

- **[f3d-app/f3d](https://github.com/f3d-app/f3d)** — ⭐4,534
  极简的快速 3D 查看器，支持 STEP/3DS/GLTF/IFC 等几十种格式，是 CI/文档中渲染 CAD 模型的高性价比选择。
- **[bldrs-ai/Share](https://github.com/bldrs-ai/Share)** — ⭐178
  浏览器端 BIM & CAD 协同查看器，IFC/STEP/STL/OBJ/GLTF 通吃，尝试复刻 GitHub for 3D 的协作体验。
- **[bldrs-ai/conway](https://github.com/bldrs-ai/conway)** — ⭐22
  面向 Web CAD 应用的高性能 IFC & STEP 引擎，纯前端读取工业级中性文件，潜力极大。
- **[GitHubDragonFly/GitHubDragonFly.github.io](https://github.com/GitHubDragonFly/GitHubDragonFly.github.io)** — ⭐47
  集合近 30 种 3D 格式的在线查看器，长期维护，是格式兼容性的活字典。

### 🐍 Code-CAD 与脚本化

- **[UMassIonTrappers/PyOpticL](https://github.com/UMassIonTrappers/PyOpticL)** — ⭐130
  把 FreeCAD 当"光路编译器"，用 Python 写出可制造的光机模块，是 Code-CAD 在科研工程化的范例。
- **[earthtojake/text-to-cad](https://github.com/earthtojake/text-to-cad)** — ⭐7,969
  面向 CAD、机器人、硬件设计的 Agent Skill 集，等同于"LLM 做硬件的设计协议层"——本月最值得关注的仓库之一。
- **[codeofaxel/Kiln](https://github.com/codeofaxel/Kiln)** — ⭐30
  首个真正把"AI 描述 → 切片 → 上机"端到端串起来的 MCP 服务器，覆盖 Bambu / Prusa / Klipper / OctoPrint 全栈。
- **[HakanSeven12/Road](https://github.com/HakanSeven12/Road)** — ⭐42
  FreeCAD 的交通与几何工程 Workbench，把开源 CAD 推进到土木/测绘领域。
- **[APEbbers/BillOfMaterials-WB](https://github.com/APEbbers/BillOfMaterials-WB)** — ⭐31
  跨多种装配工作台的 BOM 输出工具，解决"参数化设计 → 制造数据"断点。
- **[ryankembrey/FreeCAD-DFM-Workbench](https://github.com/ryankembrey/FreeCAD-DFM-Workbench)** — ⭐35
  专门把"可制造性设计"做进 FreeCAD，让工艺规则前置到建模阶段。

### 🤖 创成式 / Agent / 脚本化实验

- **[metaember/loupe](https://github.com/metaember/loupe)** — ⭐0
  Code-CAD 的 PR Review 流水线：渲染 + 验证 + 切片预览，意图把 Git 流程接入 3D 打印项目。
- **[moellere/WireStudio](https://github.com/moellere/WireStudio)** — ⭐15
  Agent 驱动的 ESP32/LoRaWAN 设计工作室，同时吐出 ESPHome YAML、KiCad PCB、3D 打印外壳，体现"全栈 Agent 硬件流水线"雏形。

---

## 五、生态趋势信号

资金侧：FreeCAD 基金会 Q2 grants 落地意味着开源 CAD 的资助模式正从众筹/赞助迈向"项目化长期资助"，是开源 CAD 进入工业化拐点的信号。技术侧，三条主线正在合流——**LLM 通过 MCP 直连 CAD 客户端**（freecad-mcp、Kiln、text-to-cad 共振）、**几何内核向 WebAssembly / Rust 化迁移**（occt-wasm、brepjs、cadcore、conway）、**消费级 3D 打印从机器到平台**（Bambu × Insta360、MakerWorld、bambuddy、manyfold 形成数据→分发→运维闭环）。Code-CAD 概念从 CadQuery/build123d 起逐步成为机械工程师的"第二语言"。

---

## 六、值得关注

1. **[freecad-mcp](https://github.com/neka-nat/freecad-mcp) + [Kiln](https://github.com/codeofaxel/Kiln) + [text-to-cad](https://github.com/earthtojake/text-to-cad)** — 三者共同回答一个核心问题：**LLM 何时能从"聊设计"过渡到"做设计"**。MCP 协议 + 参数化建模 + 切片/打印闭环，是 2026 下半年最值得跟踪的工程化方向。
2. **[cadcore](https://github.com/YATSKOVSKYI/cadcore) + [occt-wasm](https://github.com/andymai/occt-wasm) + [conway](https://

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*