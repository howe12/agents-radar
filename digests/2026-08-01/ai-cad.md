# CAD/机械结构开源动态日报 2026-08-01

> 数据来源: GitHub Search API (109 仓库) | ArXiv cs.GR+cs.CG (0 篇论文) | RSS 新闻 (3 条) | 生成时间: 2026-08-01 02:11 UTC

---

# CAD/机械结构开源动态日报

**日期：2026-07-29 ｜ 编辑：开源情报组**

---

## 一、今日速览

今日 FreeCAD 1.1.3 正式发布，伴随 WIP Wednesday 开发周报与 EMF 营地 E‑Sport 速度赛两条社区动态，开源 CAD 头部项目保持稳定迭代节奏。GitHub 上以 **text-to-cad（12.2k★）** 为代表的 AI‑Agent‑CAD 工具集、以及 **MCP/Code‑CAD 生态**（freecad‑mcp、anvilate、cad‑cae‑copilot）持续涌现，呈现出"自然语言/Agent → STEP/B‑Rep → 制造"流水线正快速成型。ArXiv cs.GR/cs.CG 今日无新增论文，研究前沿信号转弱，需关注下次学术窗口。

---

## 二、行业脉搏

- **FreeCAD 1.1.3 正式发布** — 主线稳定版本迭代，修复一批关键 bug 与 UI 体验问题，是工业用户升级到 1.x 系列后的重要补丁。([链接](https://blog.freecad.org/2026/07/25/freecad-1-1-3-released/))
- **WIP Wednesday (29 July 2026)** — 开发侧每周进展汇总，包含装配、TopoNaming、PartDesign 等核心模块的最新改动，反映主干仍处于功能完善期。([链接](https://blog.freecad.org/2026/07/29/wip-wednesday-29-july-2026/))
- **FreeCAD E‑Sport Speed Run Challenge @ EMF 2026** — 在欧洲最大硬件/开源营地举办"竞速建模"挑战赛，社区运营走向线下化、赛事化，是开源 CAD 破圈的标志性事件。([链接](https://blog.freecad.org/2026/07/27/freecad-e-sport-speed-run-challenge-at-emf-camp-2026/))

> *Prusa / Bambu Lab / OpenCASCADE / Hackaday 今日无新增抓取条目。*

---

## 三、研究前沿

**⚠️ ArXiv cs.GR / cs.CG 今日无新增抓取论文**，研究前沿信号暂缺。建议关注下批窗口中关于 B‑Rep 重建、神经隐式 CAD 表示、Agent‑CAD 评测基准等方向的进展。

---

## 四、重点项目

### 🖥️ CAD 平台与编辑器

- **[FreeCAD/FreeCAD](https://github.com/FreeCAD/FreeCAD)** — ⭐32,516 ｜ 开源参数化 3D 建模标杆，多平台覆盖，PartDesign / Assembly / FEM 工作台构成完整工业链路。
- **[openscad/openscad](https://github.com/openscad/openscad)** — ⭐9,856 ｜ "程序员的实体建模器"，代码即几何的代表，对参数化与可重复建模极具价值。
- **[neka-nat/freecad-mcp](https://github.com/neka-nat/freecad-mcp)** — ⭐1,557 ｜ FreeCAD 的 MCP 服务器，让 LLM 直接操控 3D 建模，是 CAD × Agent 范式的关键基础设施。

### 📐 计算几何与内核

- **[CGAL/cgal](https://github.com/CGAL/cgal)** — ⭐5,993 ｜ C++ 计算几何算法库，工业级三角化/布尔/骨架算法的事实标准。
- **[mikedh/trimesh](https://github.com/mikedh/trimesh)** — ⭐3,639 ｜ Python 三角网格加载与处理库，STL/3MF 流水线后处理首选。
- **[gkjohnson/three-mesh-bvh](https://github.com/gkjohnson/three-mesh-bvh)** — ⭐3,442 ｜ three.js 网格 BVH 加速库，是浏览器端实时 CAD/CAE 可视化底座。
- **[lzpel/cadrum](https://github.com/lzpel/cadrum)** — ⭐51 ｜ Rust CAD 静态链接 OCCT，支持 WASM；新兴内存安全 CAD 内核值得关注。

### 🧬 创成式与参数化设计

- **[earthtojake/text-to-cad](https://github.com/earthtojake/text-to-cad)** — ⭐12,250 ｜ 跨 CAD/CAE/CAM 的 Agent 技能库，是当前规模最大的"自然语言→CAD"基础设施。
- **[armpro24-blip/cad-cae-copilot](https://github.com/armpro24-blip/cad-cae-copilot)** — ⭐43 ｜ AI‑Native 工作台，集成 build123d/OpenCASCADE 与 MCP，强调可编辑参数与确定性评审。
- **[clay-good/anvilate](https://github.com/clay-good/anvilate)** — ⭐4 ｜ 本地优先机械设计 Agent：英文描述 → 物理校验后的 STEP/DXF，可直接喂给主流 CAD。

### 🖨️ 3D 打印与制造

- **[MarlinFirmware/Marlin](https://github.com/MarlinFirmware/Marlin)** — ⭐17,511 ｜ RepRap 生态事实标准固件，8/32 位 MCU 全平台覆盖。
- **[OrcaSlicer/OrcaSlicer](https://github.com/OrcaSlicer/OrcaSlicer)** — ⭐15,288 ｜ 主流切片器，支持 Bambu/Prusa/Voron/VzBot 等多机型，特性迭代极快。
- **[Ultimaker/Cura](https://github.com/Ultimaker/Cura)** — ⭐7,004 ｜ 老牌切片 GUI，Uranium 框架插件生态成熟，企业部署仍占主导。
- **[codeofaxel/Kiln](https://github.com/codeofaxel/Kiln)** — ⭐40 ｜ 开源 3D 打印 MCP 服务器，把 AI Agent 直接接入 Bambu/Creality/Prusa/Klipper 等整机生态。

### 🔗 文件格式与互操作

- **[CadQuery/cadquery](https://github.com/CadQuery/cadquery)** — ⭐5,541 ｜ 基于 OCCT 的 Python 参数化脚本 CAD，Code‑CAD 主流选择。
- **[bldrs-ai/conway](https://github.com/bldrs-ai/conway)** — ⭐22 ｜ 浏览器端高性能 IFC/STEP 引擎，Web‑CAD 互操作基础设施。
- **[andymai/occt-wasm](https://github.com/andymai/occt-wasm)** — ⭐35 ｜ OpenCASCADE 编译到 WebAssembly，~4MB brotli，为纯 Web CAD 提供内核级支持。

### 🐍 Code‑CAD 与脚本化

- **[partcad/partcad](https://github.com/partcad/partcad)** — ⭐481 ｜ 可制造物理产品的"包管理器"，定义模块化硬件与数字主线标准。
- **[pzfreo/draftwright](https://github.com/pzfreo/draftwright)** — ⭐13 ｜ build123d/STEP 自动出工程图，弥补 Code‑CAD 长期缺乏制图输出的短板。

---

## 五、生态趋势信号

本周信号高度集中在 **"AI Agent × 开源 CAD"** 这一交叉点上：text‑to‑cad、freecad‑mcp、anvilate、cad‑cae‑copilot、Kiln 五个活跃仓库形成了从"自然语言描述 → B‑Rep/STEP → 切片/打印"的端到端流水线雏形。底层由 **OCCT‑WASM 化（occt‑wasm、brepjs、cadrum、conway）** 推动，B‑Rep 几何首次具备完整的浏览器与 WASM 可用性，打破了传统桌面 CAD 的垄断；同时 Rust/Go 等现代语言正在从边缘切入 CAD 内核与切片工具链。FreeCAD 1.1.3 与 EMF 赛事则表明社区正以"稳定版本 + 线下破圈"双轨推进，为 Agent 生态提供更可靠的宿主。

---

## 六、值得关注

1. **[earthtojake/text-to-cad](https://github.com/earthtojake/text-to-cad)**（12,250 ★，持续增长）— 当前最大体量的 CAD/CAE/CAM Agent 技能库，是评估"自然语言→可制造几何"能力上限的最佳参考系，建议持续跟踪其评测集与基准。
2. **[andymai/occt-wasm](https://github.com/andymai/occt-wasm) + [bldrs-ai/conway](https://github.com/bldrs-ai/conway) + [lzpel/cadrum](https://github.com/lzpel/cadrum)** — 三者合力把 B‑Rep/STEP 引擎推进到浏览器与 Rust/WASM 端，可能在 12 个月内重构 Web‑CAD 与 CI‑CAD 的格局。
3. **[FreeCAD 1.1.3](https://blog.freecad.org/2026/07/25/freecad-1-1-3-released/) × [freecad-mcp](https://github.com/neka-nat/freecad-mcp)** — FreeCAD 稳定主线与 MCP 服务同时演进，是当前唯一已可投入产线试验的"开源可商用 + AI 可操控"CAD 组合，企业评估值得优先 PoC。

---

*日报生成基于：FreeCAD Blog（3 条）+ GitHub 活跃仓库（109 个，按 7 天推送过滤）+ ArXiv cs.GR/cs.CG（0 篇）。*

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*