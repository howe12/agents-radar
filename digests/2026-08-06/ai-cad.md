# CAD/机械结构开源动态日报 2026-08-06

> 数据来源: GitHub Search API (99 仓库) | ArXiv cs.GR+cs.CG (0 篇论文) | RSS 新闻 (0 条) | 生成时间: 2026-08-06 01:58 UTC

---

# 📋 CAD/机械结构开源动态日报

**日期**：2025 年 · 第 ____ 期
**数据来源**：行业新闻源（FreeCAD Blog / Prusa / Bambu Lab / OpenCASCADE / Hackaday）、arXiv cs.GR & cs.CG、GitHub Trending（99 个活跃仓库）

---

## 一、今日速览

今日行业新闻与学术预印本双双"空窗"，但 GitHub 上的活跃仓库仍清晰勾勒出几条主线：**AI 与 CAD 的深度融合**（text-to-CAD、MCP for FreeCAD、自然语言驱动建模）正成为最强音；**浏览器端 CAD**（chili3d、occt-wasm、brepjs）继续把 OCCT 等重内核推向 Web；**3D 打印生态**依旧是开源仓库数量的绝对主力，尤以 OrcaSlicer、Marlin、Bambu Lab 自托管为热点。整体来看，"AI 代理 + 开放式内核 + 浏览器即桌面"三方合流正在重塑开源 CAD 工具链的格局。

---

## 二、行业脉搏

> 今日官方新闻源（FreeCAD Blog、Prusa、Bambu Lab、OpenCASCADE、Hackaday）暂无可抓取条目。建议关注次日合并更新。

可结合社区动向侧面观察到的两条信号：
- **FreeCAD 主线仍在密集提交**：FreeCAD 本体近 7 天有活跃推送，配合 neka-nat/freecad-mcp、ghbalf/freecad-ai、blwfish/freecad-mcp 等多个周边项目并行演进，表明"FreeCAD + LLM/MCP"已成为事实上的社区方向。
- **Bambu Lab 自托管生态扩张**：bambuddy（⭐2,744）与 ha-bambulab（⭐2,282）近 7 天均有推送，呼应了"摆脱厂商云、强本地化"的整体诉求。

---

## 三、研究前沿

> 今日 arXiv cs.GR / cs.CG 暂无可抓取条目。建议次日合并窗口追踪。

---

## 四、重点项目

### 🖥️ CAD 平台与编辑器

- **[FreeCAD/FreeCAD](https://github.com/FreeCAD/FreeCAD)** — ⭐ 32,643
  跨平台开源参数化 3D 建模器（Part Design、Assembly、Path 等多个工作台），是 Linux/CNC 生态的事实标准。

- **[xiangechen/chili3d](https://github.com/xiangechen/chili3d)** — ⭐ 4,719
  基于浏览器的在线 3D CAD 应用，在线模型设计、编辑、分享——进一步把 CAD 客户端迁移到 Web。

- **[openscad/openscad](https://github.com/openscad/openscad)** — ⭐ 9,892
  "程序员的实体建模器"，以脚本描述几何；无数下游（LuaCAD、build123d、AgentSCAD 等）都受益于其 OpenSCAD 语法可移植性。

- **[gumyr/build123d](https://github.com/gumyr/build123d)** — ⭐ 2,793
  基于 OCCT 的 Python CAD 编程库，采用"语义化代数"范式，正在快速取代传统 `OpenSCAD Python` 思路。

- **[solvespace/solvespace](https://github.com/solvespace/solvespace)** — ⭐ 4,076
  轻量级 2D/3D 约束求解参数化 CAD，资源占用极低，常用于嵌入式场景与小型机构设计。

### 📐 计算几何与内核

- **[Open-Cascade-SAS/OCCT](https://github.com/Open-Cascade-SAS/OCCT)** — ⭐ 2,724
  工业级开源 3D CAD/CAM/CAE 几何内核，FreeCAD、Mayo、EzyCad 等均依赖其 STEP/Brep 能力。

- **[CGAL/cgal](https://github.com/CGAL/cgal)** — ⭐ 5,999
  C++ 计算几何算法库（三角剖分、布尔运算、网格处理、运动规划），学术与工业几何工具的"基础装备"。

- **[andymai/occt-wasm](https://github.com/andymai/occt-wasm)** — ⭐ 37
  将 OCCT 完整编译为 WebAssembly（≈4 MB brotli），提供干净的 TypeScript API——浏览器端精确 B-Rep 建模的关键基础设施。

### 🧬 创成式与参数化设计

- **[partcad/partcad](https://github.com/partcad/partcad)** — ⭐ 482
 面向"可制造物理产品"的包管理器与 AI 增强的设计/制造流水线，致力于成为"数字主线/TDP"的事实标准。

- **[xiangechen/chili3d](https://github.com/xiangechen/chili3d)** ⭐4,719 / **[clay-good/anvilate](https://github.com/clay-good/anvilate)** ⭐4 / **[Kevoyuan/AgentSCAD](https://github.com/Kevoyuan/AgentSCAD)** ⭐5
 一组 AI 驱动的"自然语言→参数化 STEP/DXF"代理工具，输出可直接进入 CATIA/SolidWorks/NX 工作流。

### 🖨️ 3D 打印与制造

- **[MarlinFirmware/Marlin](https://github.com/MarlinFirmware/Marlin)** — ⭐ 17,518
 8/32 位 MCU 通用的 RepRap 固件，行业装机量最广的开源 3D 打印机固件。

- **[OrcaSlicer/OrcaSlicer](https://github.com/OrcaSlicer/OrcaSlicer)** — ⭐ 15,331
 支持 Bambu / Prusa / Voron / VzBot / RatRig / Creality 等多平台的 G-code 生成器，对机器调校与多色 AMS 支持尤为出色。

- **[Ultimaker/Cura](https://github.com/Ultimaker/Cura)** — ⭐ 7,007
 基于 Uranium 框架的 3D 打印切片 GUI，是 Python 生态下的主流桌面切片软件。

- **[Sienci-Labs/gsender](https://github.com/Sienci-Labs/gsender)** — ⭐ 363
 一站式连接和控制 grbl / grblHAL CNC 的开源工具，衔接"PC 端 CAM + 桌面 CNC"工作流。

### 🔗 文件格式与互操作

- **[f3d-app/f3d](https://github.com/f3d-app/f3d)** — ⭐ 4,600
 快速、极简的桌面 3D 可视化器，原生支持 STEP / IGES / glTF / 3D Tiles 等，适合做"模型浏览器"嵌入到 CI/CD。

- **[fougue/mayo](https://github.com/fougue/mayo)** — ⭐ 2,116
 基于 Qt + OpenCASCADE 的 3D CAD 查看与转换器，是本地化 STEP ↔ mesh 工作流的中坚。

- **[bldrs-ai/Share](https://github.com/bldrs-ai/Share)** — ⭐ 181
 浏览器端的 BIM / CAD 协作查看器，支持 IFC / STEP / STL / OBJ / glTF——CAD + Web 协作的代表。

### 🐍 Code-CAD 与脚本化

- **[CadQuery/cadquery](https://github.com/CadQuery/cadquery)** — ⭐ 5,560
 基于 OCCT 的 Python 参数化 CAD 脚本框架，是"代码即 CAD"生态中最成熟的项目。

- **[neka-nat/freecad-mcp](https://github.com/neka-nat/freecad-mcp)** — ⭐ 1,642
 为 FreeCAD 提供 Model Context Protocol（MCP）服务端，使 Claude / Cursor / Cline 等 AI 助理可程序化调用 FreeCAD。

- **[earthtojake/text-to-cad](https://github.com/earthtojake/text-to-cad)** — ⭐ 12,909

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*