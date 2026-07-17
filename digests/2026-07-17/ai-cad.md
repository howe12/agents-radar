# CAD/机械结构开源动态日报 2026-07-17

> 数据来源: GitHub Search API (107 仓库) | ArXiv cs.GR+cs.CG (0 篇论文) | RSS 新闻 (3 条) | 生成时间: 2026-07-17 02:05 UTC

---

# 📐 CAD/机械结构开源动态日报

**日期：2026-07-15**

---

## 1. 今日速览

今日 FreeCAD 社区按惯例发布 WIP 周报并新增 "Banana For Scale" 趣味插件，维持社区驱动节奏；Bambu Lab 联手 Insta360 在 MakerWorld 启动 **Luna Ultra 设计挑战赛**，将消费级 3D 打印与影像硬件社区首次打通。ArXiv cs.GR/cs.CG 今日无新论文，但 GitHub 端 107 个仓库活跃，显示开源 CAD 重心正从"建模器本身"向 **AI 代理化、WebAssembly 化、MCP 工具化** 三条新赛道快速迁移。值得关注的是 earthtojake/text-to-cad（⭐8.2k）、CADAM、AgentSCAD、cad-cae-copilot、Kiln 等多个 AI-CAD 项目同时保持高活跃度，反映"文本/对话生成几何"已进入多路线竞争阶段。

---

## 2. 行业脉搏

| # | 动态 | 来源 | 意义 |
|---|---|---|---|
| 1 | [WIP Wednesday, 15 July 2026](https://blog.freecad.org/2026/07/15/wip-wednesday-15-july-2026/) | FreeCAD Blog | FreeCAD 核心开发每周集中亮相，本期通常合并 asm3、TopoNaming、PartDesign 等模块进展，是观察 1.0 路线图的最权威窗口 |
| 2 | [New Addon; Banana For Scale!](https://blog.freecad.org/2026/07/12/new-addon-banana-for-scale/) | FreeCAD Blog | 将"香蕉比例尺"这一 3D 打印圈文化符号引入 FreeCAD，反映 Addon 生态继续向"易用化+社区梗"双向延伸 |
| 3 | [Bambu Lab × Insta360 启动 Luna Ultra 设计挑战赛](https://blog.bambulab.com/lets-make-it-bambu-lab-and-insta360-launch-luna-ultra-design-challenge-on-makerworld/) | Bambu Lab | 头部消费级 FDM 厂商首次与影像硬件品牌联合运营 MakerWorld 创意赛事，标志着 3D 打印进入"硬件 + 内容 + 社区"三位一体竞争 |

---

## 3. 研究前沿

> ⚠️ 今日 ArXiv cs.GR / cs.CG 频道 **无新增论文**。替代关注方向（基于活跃仓库侧）：
>
> - **文本/图像 → 几何的隐式表征**仍是社区主线（earthtojake/text-to-cad、AgentSCAD、cad-cae-copilot 共享同一研究范式）；
> - **GPU 加速 B-Rep / CSG** 由 chiselcad（Vulkan + Manifold + C++20）探索，对应论文级成果值得后续追踪；
> - **Web 端精确几何**（brepjs、occt-wasm、cadrum）背后是"把 OCCT 跑进浏览器"的工程化难题，可关注相关实现报告与基准测试。

---

## 4. 重点项目

### 🖥️ CAD 平台与编辑器

| 项目 | ⭐ | 一句话 |
|---|---|---|
| [FreeCAD/FreeCAD](https://github.com/FreeCAD/FreeCAD) | 32,172 | 开源多平台参数化 3D 建模器事实标准；机械 + BIM + 钣金工作台持续扩展 |
| [openscad/openscad](https://github.com/openscad/openscad) | 9,756 | "程序员专用"Solid 建模器，DSL 化几何描述仍是 Code-CAD 根基 |
| [LibreCAD/LibreCAD](https://github.com/LibreCAD/LibreCAD) | 6,115 | 跨平台 2D CAD，DXF/DWG 读写 + 多语言界面，2D 工程图场景不可替代 |
| [xiangechen/chili3d](https://github.com/xiangechen/chili3d) | 4,683 | 浏览器内 3D CAD，Web 化建模器代表项目 |
| [solvespace/solvespace](https://github.com/solvespace/solvespace) | 4,046 | 轻量 2D/3D 参数化求解器，运动学约束求解能力被多个衍生项目复用 |

### 📐 计算几何与内核

| 项目 | ⭐ | 一句话 |
|---|---|---|
| [CGAL/cgal](https://github.com/CGAL/cgal) | 5,980 | 计算几何算法库"百科全书"，Delaunay/曲面/布尔/运动规划覆盖最广 |
| [Open-Cascade-SAS/OCCT](https://github.com/Open-Cascade-SAS/OCCT) | 2,650 | 开源 3D CAD/CAM/CAE 平台的事实底层，FreeCAD/CadQuery/EzyCad 均基于它 |
| [polydera/trueform](https://github.com/polydera/trueform) | 128 | "几何的 STL"——快速精确的网格布尔 + 空间查询 + 重网格，C++/Python/TS 三端绑定 |
| [mikedh/trimesh](https://github.com/mikedh/trimesh) | 3,629 | Python 三角网格主力库，离散几何管线的事实标准 |

### 🧬 创成式与参数化设计

| 项目 | ⭐ | 一句话 |
|---|---|---|
| [earthtojake/text-to-cad](https://github.com/earthtojake/text-to-cad) | 8,206 | 面向 CAD/机器人/硬件的"代理技能集"，AI-CAD 工具调用层的事实枢纽 |
| [Adam-CAD/CADAM](https://github.com/Adam-CAD/CADAM) | 4,810 | 开源文本→CAD Web 应用，对标商用 GenAI-CAD 产品的开源版本 |
| [armpro24-blip/cad-cae-copilot](https://github.com/armpro24-blip/cad-cae-copilot) | 40 | AI 原生 CAD/CAE/CAX 工作台，基于 build123d+OCCT，提供 MCP 工具服务 |
| [Kevoyuan/AgentSCAD](https://github.com/Kevoyuan/AgentSCAD) | 5 | 自然语言→经过几何修复与制造校验的 OpenSCAD 工件，强调"可落地的 AI-CAD" |

### 🖨️ 3D 打印与制造

| 项目 | ⭐ | 一句话 |
|---|---|---|
| [MarlinFirmware/Marlin](https://github.com/MarlinFirmware/Marlin) | 17,478 | 3D 打印机固件事实标准，8/32 位 MCU 全平台覆盖 |
| [OrcaSlicer/OrcaSlicer](https://github.com/OrcaSlicer/OrcaSlicer) | 15,130 | 多品牌切片主力（Bambu / Prusa / Voron / VzBot…），新一代切片标杆 |
| [Ultimaker/Cura](https://github.com/Ultimaker/Cura) | 6,995 | 经典切片 GUI，Uranium 框架衍生出 MatterControl 等分支 |
| [codeofaxel/Kiln](https://github.com/codeofaxel/Kiln) | 35 | 面向 Claude/Codex/Cursor 的 3D 打印 MCP 服务器，打通"AI 设计→切片→打印"全链路 |

### 🔗 文件格式与互操作

| 项目 | ⭐ | 一句话 |
|---|---|---|
| [f3d-app/f3d](https://github.com/f3d-app/f3d) | 4,552 | 快速极简 3D 查看器，工程交付场景的"轻量看图"首选 |
| [CadQuery/CQ-editor](https://github.com/CadQuery/CQ-editor) | 1,197 | CadQuery 的 PyQt GUI，把 Python 几何脚本变成可交互编辑器 |
| [bldrs-ai/Share](https://github.com/bldrs-ai/Share) | 178 | 浏览器 BIM/CAD 协同查看器，原生支持 IFC/STEP/STL/OBJ/glTF |
| [lzpel/cadrum](https://github.com/lzpel/cadrum) | 39 | Rust CAD 库，静态链接 OCCT 8.0.0，原生 + WASM 双形态 |
| [andymai/occt-wasm](https://github.com/andymai/occt-wasm) | 28 | OCCT → WebAssembly 编译产物，~4MB brotli、TypeScript API、Web Worker 支持 |
| [andymai/brepjs](https://github.com/andymai/brepjs) | 69 | Web 端精确 B-Rep 几何库，是浏览器内做"真 CAD"的关键拼图 |

### 🐍 Code-CAD 与脚本化

| 项目 | ⭐ | 一句话 |
|---|---|---|
| [CadQuery/cadquery](https://github.com/CadQuery/cadquery) | 5,464 | Python 参数化 CAD 脚本框架，基于 OCCT，是工业 Code-CAD 主流 |
| [gumyr/build123d](https://github.com/gumyr/build123d) | 2,647 | build123d 把 CadQuery 思路进一步现代化，定位"A Python CAD programming library" |
| [BelfrySCAD/BOSL2](https://github.com/BelfrySCAD/BOSL2) | 2,270 | OpenSCAD 库的"瑞士军刀"，形状/蒙版/变换大幅降低 OpenSCAD 工程成本 |

---

## 5. 生态趋势信号

🔁 **AI-CAD 进入"多路线并行"阶段**：text-to-cad（代理技能集）、CADAM（Web 文本→CAD）、AgentSCAD（校验式 OpenSCAD）、cad-cae-copilot（CAD/CAE/MCP 工作台）同时活跃，说明"自然语言生成几何"已不再是单点实验，而是 **数据集层 / 应用层 / 工具链层** 三轨并进。

🌐 **WebAssembly 把 OCCT 搬进浏览器**：cadrum、occt-wasm、brepjs、chili3d 共同勾勒出"浏览器即 CAD"的完整栈——前端 UI（WASM 几何）+ 跨语言绑定（Rust/TS/Python），未来 SolidWorks Online、Autodesk Fusion Web 的开源替代品雏形已现。

🔌 **MCP 协议渗透制造执行层**：Kiln（打印 MCP）与 cad-cae-copilot（CAD MCP）共同指向一个事实——**AI 代理正在成为机械设计与制造流程的统一调度层**，这是 GitHub-cad 生态向"AI-native"演进的工程化拐点。

🖨️ **消费级 3D 打印竞争升级为"内容+社区+硬件"**：Bambu Lab × Insta360 跨界挑战赛印证 MakerWorld 已从"模型超市"演化为"硬件营销 + 创作者经济"复合平台。

---

## 6. 值得关注

1. **🌟 AI-CAD 工具栈收敛信号**：[earthtojake/text-to-cad](https://github.com/earthtojake/text-to-cad)（⭐8.2k） + [CADAM](https://github.com/Adam-CAD/CADAM)（⭐4.8k） + [AgentSCAD](https://github.com/Kevoyuan/AgentSCAD) + [cad-cae-copilot](https://github.com/armpro24-blip/cad-cae-copilot) + [Kiln](https://github.com/codeofaxel/Kiln) 同时活跃——下一阶段值得观察的是它们是否会围绕 MCP / Open Agent Skills 等标准协议形成互通，而非各自封闭。

2.

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*