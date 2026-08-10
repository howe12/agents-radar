# CAD/机械结构开源动态日报 2026-08-10

> 数据来源: GitHub Search API (101 仓库) | ArXiv cs.GR+cs.CG (0 篇论文) | RSS 新闻 (2 条) | 生成时间: 2026-08-10 01:14 UTC

---

# CAD/机械结构开源动态日报
**2026-08-06**

---

## 📌 今日速览

今日 FreeCAD 生态迎来两项重要更新：Manyfold 资产管理器原生支持 FreeCAD 缩略图预览，显著提升 3D 打印模型在自托管资产库的浏览体验；WIP Wednesday 则披露 FreeCAD 1.1 开发分支持续推进的 Part Design、Sketcher 与装配体改进。GitHub 端近 7 日共 101 个相关仓库活跃更新，最大信号来自 **AI Agent + MCP（Model Context Protocol）范式在 CAD/3D 打印领域的全面爆发**——FreeCAD、OpenSCAD、3D 切片机均出现 MCP 服务器或多智能体框架，传统 GUI 操作正快速被"自然语言→CAD"工作流重构。

---

## 📰 行业脉搏

1. **[Manyfold: Now with FreeCAD Thumbnails](https://blog.freecad.org/2026/08/06/manyfold-now-with-freecad-thumbnails/)** — Manyfold 3D 打印资产管理器集成 FreeCAD 缩略图，文件识别、检索与可视化链路打通；意味着 FreeCAD 文件不再依赖外部查看器，可直接在自托管 web 端预览，是开源数字资产管理（DAM）与 CAD 软件互操作的重要里程碑。

2. **[WIP Wednesday, 5 August 2026](https://blog.freecad.org/2026/08/05/wip-wednesday-5-august-july-2026/)** — FreeCAD 开发周报聚焦 Part Design 与 Topological Naming 改进、Sketcher 稳定性提升以及 Assembly 工作流进展，反映 FreeCAD 1.1 正在补齐参数化设计与大型装配的最后短板。

3. **MCP 服务器生态井喷**（综合观察）— FreeCAD 出现 [neka-nat/freecad-mcp](https://github.com/neka-nat/freecad-mcp)、[blwfish/freecad-mcp](https://github.com/blwfish/freecad-mcp)（32 工具）等多个 MCP 实现；3D 打印领域有 [codeofaxel/Kiln](https://github.com/codeofaxel/Kiln) 同时支持 Bambu、Prusa、Klipper 等主流打印机；Multi-Agent CAD 框架 [Pan-Chera/Multi-Agent-CAD](https://github.com/Pan-Chera/Multi-Agent-CAD) 则把"测试时计算"引入几何生成——AI Agent 正在成为 CAD/制造的"操作系统层"。

---

## 📚 研究前沿

> ⚠️ 今日 ArXiv cs.GR / cs.CG 论文数据为空，本节暂略。建议关注后续是否有与几何生成、拓扑优化、B-rep 重建相关的工作回归。

---

## 🔧 重点项目

### 🖥️ CAD 平台与编辑器
| 仓库 | ⭐ | 说明 |
|------|-----|------|
| [FreeCAD/FreeCAD](https://github.com/FreeCAD/FreeCAD) | 32,729 | 开源参数化 3D 建模事实标准，C++/Python 双栈，是生态枢纽 |
| [openscad/openscad](https://github.com/openscad/openscad) | 9,914 | "程序员的实体建模器"，以代码描述几何，是 Code-CAD 范式原点 |
| [CadQuery/cadquery](https://github.com/CadQuery/cadquery) | 5,580 | 基于 OCCT 的 Python 参数化脚本框架，工业级 Code-CAD 主力 |
| [gumyr/build123d](https://github.com/gumyr/build123d) | 2,823 | 新一代 Python CAD 库，引入显式 Builder/Location/Plane 抽象，提升复杂装配可读性 |
| [solvespace/solvespace](https://github.com/solvespace/solvespace) | 4,086 | 轻量参数化 2D/3D CAD，约束求解器精度高，适合嵌入式场景 |
| [xiangechen/chili3d](https://github.com/xiangechen/chili3d) | 4,724 | 浏览器端 3D CAD，无需安装即可在线建模，web-native CAD 代表 |
| [Adam-CAD/CADAM](https://github.com/Adam-CAD/CADAM) | 4,953 | 开源 text-to-CAD Web 应用，降低生成式建模门槛 |
| [BelfrySCAD/BOSL2](https://github.com/BelfrySCAD/BOSL2) | 2,306 | OpenSCAD 库标准，遮罩/操作器极大扩展 OpenSCAD 能力 |
| [partcad/partcad](https://github.com/partcad/partcad) | 483 | "硬件包管理器"，构建可复用数字主线（Digital Thread/TDP），打通设计→制造 |
| [particlesector/chiselcad](https://github.com/particlesector/chiselcad) | 13 | Vulkan/Manifold 加速的 GPU CSG 建模器，OpenSCAD 语法兼容，性能瓶颈突破 |

### 📐 计算几何与内核
| 仓库 | ⭐ | 说明 |
|------|-----|------|
| [Open-Cascade-SAS/OCCT](https://github.com/Open-Cascade-SAS/OCCT) | 2,737 | 开源 3D CAD/CAM/CAE 平台，FreeCAD、CadQuery、chili3d 等的共同底座 |
| [CGAL/cgal](https://github.com/CGAL/cgal) | 6,004 | 计算几何算法库（Delaunay、布尔运算、网格处理），CAD 底层基础设施 |
| [leap71/PicoGK](https://github.com/leap71/PicoGK) | 1,048 | 紧凑鲁棒的几何内核，面向计算工程与生成式设计 |
| [MeshInspector/MeshLib](https://github.com/MeshInspector/MeshLib) | 805 | 现代 C++ 网格处理库，工业级网格修复与布尔运算 |
| [marcomusy/vedo](https://github.com/marcomusy/vedo) | 2,261 | 基于 VTK 的 Python 3D 科学可视化与分析 |
| [pyvista/pyvista](https://github.com/pyvista/pyvista) | 3,762 | VTK 的 Python 封装，CAE/CFD 后处理与网格分析标配 |
| [1amageek/swift-CAD](https://github.com/1amageek/swift-CAD) | 10 | 原生 Swift CAD 基础，含 B-rep 求值与零拷贝交换/WASM，多端 CAD 的新尝试 |

### 🧬 创成式与参数化设计
| 仓库 | ⭐ | 说明 |
|------|-----|------|
| [Pan-Chera/Multi-Agent-CAD](https://github.com/Pan-Chera/Multi-Agent-CAD) | 621 | 解耦多智能体 text-to-CAD 框架，引入约束测试时计算，几何生成质量显著提升 |
| [JuliaTopOpt/TopOpt.jl](https://github.com/JuliaTopOpt/TopOpt.jl) | 224 | Julia 自动微分驱动的拓扑优化，单/多材料、桁架/连续体全覆盖 |
| [armpro24-blip/cad-cae-copilot](https://github.com/armpro24-blip/cad-cae-copilot) | 46 | AI-native CAD/CAE/CAX 工作台，文本→CAD/CAE，构建 build123d+OCCT 真实几何 |
| [clay-good/anvilate](https://github.com/clay-good/anvilate) | 4 | 本地优先机械工程师设计 Agent，自然语言→物理验证的 STEP/DXF，输出即插即用 |
| [ghbalf/freecad-ai](https://github.com/ghbalf/freecad-ai) | 422 | FreeCAD 内 AI 工作台，自然语言生成 3D 模型 |
| [revhappy/GPT4FreeCAD](https://github.com/revhappy/GPT4FreeCAD) | 63 | 多模型支持的 FreeCAD 参数化几何生成器，支持本地 LLM |
| [kellerlabs/homeracker](https://github.com/kellerlabs/homeracker) | 485 | 模块化 3D 打印机架系统，全开源可参数化定制 |

### 🖨️ 3D 打印与制造
| 仓库 | ⭐ | 说明 |
|------|-----|------|
| [MarlinFirmware/Marlin](https://github.com/MarlinFirmware/Marlin) | 17,520 | RepRap 3D 打印机固件的事实标准，覆盖 8/32 位 MCU |
| [OrcaSlicer/OrcaSlicer](https://github.com/OrcaSlicer/OrcaSlicer) | 15,360 | 主流切片软件，支持 Bambu/Prusa/Voron/Creality 等设备 |
| [Ultimaker/Cura](https://github.com/Ultimaker/Cura) | 7,009 | 老牌开源切片 GUI，Uranium 框架的开源标杆 |
| [Sienci-Labs/gsender](https://github.com/Sienci-Labs/gsender) | 363 | grbl/grblHAL CNC 控制器，开源 CNC 软件生态核心 |
| [XRay3D/GERBER_X3](https://github.com/XRay3D/GERBER_X3) | 253 | Gerber→PCB 铣削 G-code 转换器，CNC 在电子制造领域的延伸 |
| [manyfold3d/manyfold](https://github.com/manyfold3d/manyfold) | 2,117 | 自托管 3D 打印文件资产管理器，今日新增 FreeCAD 缩略图支持 |
| [codeofaxel/Kiln](https://github.com/codeofaxel/Kiln) | 44 | 3D 打印 MCP 服务器，AI Agent 可端到端完成"设计→切片→打印" |
| [donkie/Spoolman](https://github.com/Donkie/Spoolman) | 2,694 | 3D 打印耗材库存管理，与 Klipper/Mainsail 生态深度集成 |
| [mainsail-crew/mainsail](https://github.com/mainsail-crew/mainsail) | 2,193 | Klipper 打印机的 Web 控制面板，开源农场管理标配 |
| [huxingyi/dust3d](https://github.com/huxingyi/dust3d) | 3,447 | 低多边形 3D 建模工具，专为游戏/3D 打印快速原型设计 |
| [rudra496/cnc](https://github.com/rudra496/cnc) | 2 | 浏览器端 3 轴 CNC 仿真器（Next.js + Three.js），CNC 教学/验证利器 |
| [Arley100/nineforge](https://github.com/Arley100/nineforge) | 0 | AI 生成 CNC G-code 的"物理世界单元测试"，硬件落地前的确定性验证层 |

### 🔗 文件格式与互操作
| 仓库 | ⭐ | 说明 |
|------|-----|------|
| [Keychron/Keychron-Keyboards-Hardware-Design](https://github.com/Keychron/Keychron-Hardware-Design) | 3,621 | 100+ 键盘/鼠标 STEP/DXF/DWG 工业设计文件，开放商用 |
| [LibrePCB/LibrePCB](https://github.com/LibrePCB/LibrePCB) | 2,962 | 直观的开源 EDA 套件，PCB 设计全流程 |
| [KiCad/kicad-source-mirror](https://github.com/KiCad/kicad-source-mirror) | 2,874 | 开源 EDA 标杆 KiCad 的 GitHub 镜像 |
| [pascalorg/editor](https://github.com/pascalorg/editor) | 21,247 | 在线 3D 建筑设计项目创建与分享（建筑领域的"开放 CAD 编辑器"） |
| [LibreCAD/LibreCAD](https://github.com/LibreCAD/LibreCAD) | 6,224 | 跨平台 2D CAD，DXF/DWG 原生支持 |

### 🐍 Code-CAD 与脚本化
| 仓库 | ⭐ | 说明 |
|------|-----|------|
| [neka-nat/freecad-mcp](https://github.com/neka-nat/freecad-mcp) | 1,728 | FreeCAD 的 Model Context Protocol 服务器，AI Agent 调度 FreeCAD 的桥梁 |
| [blwfish/freecad-mcp](https://github.com/blwfish/freecad-mcp) | 19 | 含 32 工具的 FreeCAD MCP 服务器，AI 辅助 3D 建模工具集 |
| [Rahix/FusedFilamentDesign](https://github.com/Rahix/FusedFilamentDesign) | 235 | FreeCAD FFF/FDM 3D 打印专用 PartDesign 插件 |
| [APEbbers/FreeCAD-Ribbon](https://github.com/APEbbers/FreeCAD-Ribbon) | 125 | 类 Office Ribbon 风格的可定制 FreeCAD UI |
| [Jayktopus/Scan2Sketch-OpenSource](https://github.com/Jayktopus/Scan2Sketch-OpenSource) | 50 | 平板扫描图→可编辑可校验的 FreeCAD 草图，逆向建模新工具 |
| [UMassIonTrappers/PyOpticL](https://github.com/UMassIonTrappers/PyOpticL) | 142 | 代码→CAD 的模块化光学布局工具，激光/光路设计 Code-CAD |
| [zaphB/freecad.optics_design_workbench](https://github.com/zaphB/freecad.optics_design_workbench) | 14 | FreeCAD 光线追迹/优化工作台，光学正向仿真 |
| [vipenzo/ridley](https://github.com/vipenzo/ridley) | 38 | Clojure 海龟图形 3D 建模 + STL 导出 + WebXR，函数式 Code-CAD 探索 |

---

## 🌐 生态趋势信号

**AI Agent 正在成为 CAD/CAM 的"操作系统层"。** 今日信号高度一致——MCP 协议在 FreeCAD、3D 打印切片机领域同时落地（freecad-mcp 多个实现、Kiln），配合 text-to-CAD（CADAM、GPT4FreeCAD、anvilate、Multi-Agent-CAD）形成完整的"自然语言→几何→制造"链路。**Web-native 与 GPU 加速**两端同步发力：chili3d 把 CAD 搬进浏览器、chiselcad 用 Vulkan/Manifold 把 CSG 性能推上 GPU、CADAM 把 text-to-CAD 搬上 web。

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*