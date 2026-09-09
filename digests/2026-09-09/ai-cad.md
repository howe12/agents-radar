# CAD/机械结构开源动态日报 2026-09-09

> 数据来源: GitHub Search API (116 仓库) | ArXiv cs.GR+cs.CG (0 篇论文) | RSS 新闻 (5 条) | 生成时间: 2026-09-09 02:34 UTC

---

# CAD/机械结构开源动态日报
*2026 年 9 月 · 第 1 期*

---

## 一、今日速览

今日开源 CAD 圈的核心信号集中在 **AI 代理与 CAD 的深度耦合**：FreeCAD 周边涌现出多个 AI 助手/MCP 服务器分支；Prusa 推出仅 5 卷耗材即可混出 45 色 PLA 的工艺方案；Bambu Lab 在云安全合规上的主动布局则暗示桌面级切片工具与云端 IoT 的边界博弈仍在持续。仓库层面，**FreeCAD 生态（MCP、Addon、文档）、OCCT 走向浏览器（WASM/Rust）、Code-CAD 三足鼎立** 的格局愈发清晰。

---

## 二、行业脉搏

| # | 动态 | 要点与意义 |
|---|------|-----------|
| 1 | **[Spotted: A new Microwave Workbench](https://blog.freecad.org/2026/09/08/spotted-a-new-microwave-workbench/)** — *FreeCAD Blog* | FreeCAD 出现新的 "Microwave" 工作台，疑似针对 RF/微波/高频结构的专用建模器，反映社区垂直化深耕。 |
| 2 | **[WIP Wednesday, 2 September 2026](https://blog.freecad.org/2026/09/02/wip-wednesday-2-september-2026/)** — *FreeCAD Blog* | 开发中功能周报，例行呈现 Toponaming、Assembly、CAM 等核心模块迭代节奏。 |
| 3 | **[Prusament PLA ColorMix: 45 色只用 5 卷耗材](https://blog.prusa3d.com/prusament-pla-colormix-print-45-color-shades-using-just-five-filament-spools-and-more_137835/)** — *Prusa Blog* | 通过混色喷头+切片策略，以最小耗材库存实现丰富色域，对个人/教育场景意义显著。 |
| 4 | **[Back-to-School 2026 Deals](https://blog.prusa3d.com/back-to-school-2026-deals-are-here_137792/)** — *Prusa Blog* | 季度促销节点，关注 Prusa 教育市场拓展与硬件迭代节奏。 |
| 5 | **[One Year On: IoT Security through Global Certifications](https://blog.bambulab.com/one-year-on-strengthening-iot-security-through-global-certifications-and-community-collaboration/)** — *Bambu Lab* | 公布全球安全认证进展，回应本地化（self-host）社区诉求；与开源替代品 [bambuddy](https://github.com/maziggy/bambuddy) 的"无云"路线形成有趣对照。 |

---

## 三、研究前沿

> 📭 **今日 ArXiv cs.GR / cs.CG 暂无可用论文数据**。建议关注 OpenCASCADE、CadQuery、CGAL 等仓库的 release notes 与 RFC，作为工业级几何算法演进的一手信号。

---

## 四、重点项目

### 🖥️ CAD 平台与编辑器
- **[FreeCAD/FreeCAD](https://github.com/FreeCAD/FreeCAD)** — ⭐ 33,371
  开源多平台 3D 参数化建模旗舰，今日新 Microwave 工作台进一步丰富垂直行业覆盖。
- **[openscad/openscad](https://github.com/openscad/openscad)** — ⭐ 10,172
  "程序员的实体建模器"，代码驱动范式的标杆，BOSL2 等生态持续壮大。
- **[xiangechen/chili3d](https://github.com/xiangechen/chili3d)** — ⭐ 4,811
  纯浏览器 3D CAD，无需安装即可建模，是 Web CAD 体验的关键拼图。
- **[gumyr/build123d](https://github.com/gumyr/build123d)** — ⭐ 3,055
  Python 端新一代 Code-CAD 框架，对比 CadQuery 提供更现代的建模语义。

### 📐 计算几何与内核
- **[CGAL/cgal](https://github.com/CGAL/cgal)** — ⭐ 6,035
  几何算法"百科全书"，仍是学术界与工业 CAD 的底层依赖。
- **[Open-Cascade-SAS/OCCT](https://github.com/Open-Cascade-SAS/OCCT)** — ⭐ 2,855
  开源 3D CAD/CAM/CAE 平台的事实内核，FreeCAD、KiCad、CadQuery 皆构筑其上。
- **[MeshInspector/MeshLib](https://github.com/MeshInspector/MeshLib)** — ⭐ 820
  现代 3D 网格处理 SDK：布尔、修复、抽稀、重网格、ICP 一站式，多语言绑定契合工程化需求。

### 🧬 创成式与参数化设计
- **[partcad/partcad](https://github.com/partcad/partcad)** — ⭐ 493
  面向可制造产品的"包管理器 + 数字主线"，推动硬件模块化与 AI 增强生命周期。
- **[codeofaxel/Kiln](https://github.com/codeofaxel/Kiln)** — ⭐ 54
  面向 3D 打印的 MCP 服务器，让 Claude/Codex/Cursor 端到端设计—切片—打印，覆盖 Bambu、Klipper、Marlin 等主流栈。

### 🖨️ 3D 打印与制造
- **[MarlinFirmware/Marlin](https://github.com/MarlinFirmware/Marlin)** — ⭐ 17,576
  商业与开源 3D 打印机最广泛部署的固件，是切片结果落地的最后一公里。
- **[OrcaSlicer/OrcaSlicer](https://github.com/OrcaSlicer/OrcaSlicer)** — ⭐ 15,639
  跨品牌 G-code 生成器（Bambu/Prusa/Voron/Creality 等），社区功能迭代极快。
- **[Sienci-Labs/gsender](https://github.com/Sienci-Labs/gsender)** — ⭐ 366
  面向 grbl / grblHAL CNC 的统一控制前端，桌面 CNC 生态的核心入口。

### 🔗 文件格式与互操作
- **[andymai/occt-wasm](https://github.com/andymai/occt-wasm)** — ⭐ 49
  OCCT 编译为 WebAssembly，~4 MB brotli，干净 TypeScript API + Web Worker 支持，是浏览器端 B-Rep 的关键技术底座。
- **[f3d-app/f3d](https://github.com/f3d-app/f3d)** — ⭐ 4,678
  快速极简 3D 查看器，支持 STEP/STL/3MF/IFC 等数十种格式，是流水线"最后一眼"的常用工具。

### 🐍 Code-CAD 与脚本化
- **[CadQuery/cadquery](https://github.com/CadQuery/cadquery)** — ⭐ 5,720
  基于 OCCT 的 Python 参数化脚本框架，长期 Code-CAD 主线，工业管线友好。
- **[neka-nat/freecad-mcp](https://github.com/neka-nat/freecad-mcp)** — ⭐ 2,116
  FreeCAD 的 Model Context Protocol 服务器，让 LLM 代理以结构化方式驱动 FreeCAD，是"AI × CAD"的明星桥梁。
- **[jupytercad/JupyterCAD](https://github.com/jupytercad/JupyterCAD)** — ⭐ 232
  JupyterLab 中的协作 3D 几何建模扩展，把 Notebook 范式带入 CAD 工作流。

---

##

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*