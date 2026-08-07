# CAD/机械结构开源动态日报 2026-08-07

> 数据来源: GitHub Search API (114 仓库) | ArXiv cs.GR+cs.CG (0 篇论文) | RSS 新闻 (2 条) | 生成时间: 2026-08-07 02:21 UTC

---

# CAD/机械结构开源动态日报
**2026-08-06**

---

## 📌 今日速览

今日 FreeCAD 生态迎来两项实用改进：Manyfold 集成 FreeCAD 缩略图提升 3D 资源管理体验，WIP Wednesday 同步披露 FreeCAD 主线进展。与此同时，GitHub 趋势显示 **AI 原生 CAD（Text-to-CAD/MCP）和浏览器端 CAD** 仍是双引擎：text-to-cad（⭐12.9k）、CADAM、GPT4FreeCAD、freecad-mcp 等项目持续活跃，Rust 实现的 2D 布尔/三角化库（iOverlay、iTriangle）和 OCCT-WASM 也呈上扬态势，CAD 正从桌面走向浏览器、从手工走向 LLM 协作。ArXiv cs.GR/cs.CG 今日暂无新论文，学术信号可转向开源仓库中正在落地的形式化验证（如 Lean 编写的 3D 网格求交）等替代性观察。

---

## 🗞️ 行业脉搏

1. **Manyfold 集成 FreeCAD 缩略图预览** — Manyfold 现在可直接渲染 FreeCAD 文件缩略图，3D 资源库浏览体验显著提升，对个人/小型工作室的本地资产检索意义重大。  
   [Manyfold: Now with FreeCAD Thumbnails](https://blog.freecad.org/2026/08/06/manyfold-now-with-freecad-thumbnails/)

2. **FreeCAD WIP Wednesday（8月5日）** — FreeCAD 官方汇总本周开发中（WIP）特性，常规滚动，反映核心主线的活跃度持续。  
   [WIP Wednesday, 5 August 2026](https://blog.freecad.org/2026/08/05/wip-wednesday-5-august-july-2026/)

3. **OpenCASCADE SAS 持续推进 OCCT 主线** — Open-Cascade-SAS/OCCT（⭐2.7k）在 7 天内仍有推送，B-Rep 内核作为 Web/桌面 CAD 的事实底层正在被更多 WASM 化（见 occt-wasm）。

4. **Prusa/Bambu Lab 厂商生态** — OrcaSlicer、Mainsail、Bambuddy、HA-Bambulab 等社区项目持续迭代，桌面 3D 打印进入"切片+固件+控制+耗材管理"的成套开源栈阶段。

5. **AI CAD 商业化加速** — earthtojake/text-to-cad（⭐12.9k）、CADAM、Multi-Agent-CAD、Anvilate 等项目表明 "自然语言 → 可制造 CAD" 已从原型进入工程化，对传统 CAD 工作流形成实质性冲击。

---

## 🔬 研究前沿

**⚠️ 今日 ArXiv cs.GR/cs.CG 无新增论文。** 学术动态空窗期建议关注以下开源侧的前沿落地：

- **形式化验证的几何算法**：Lean 语言实现的 [verified-3d-mesh-intersection](https://github.com/schildep/verified-3d-mesh-intersection)（⭐95），用 93 行规范替代 1000+ 行 AI 生成的网格求交代码，体现"可证明正确"的 CSG/网格操作趋势。
- **GPU 加速 CSG 模型器**：[chiselcad](https://github.com/particlesector/chiselcad)（⭐13）使用 C++20 + Vulkan + Manifold 实现 OpenSCAD 兼容语法，标志着色几何（render-geometry）走向 GPU 化。
- **WebAssembly B-Rep 内核**：[occt-wasm](https://github.com/andymai/occt-wasm)（⭐37）将 OCCT 编译至 ~4MB brotli WASM，纯浏览器中可获得工业级 B-Rep 精度。
- **多智能体 + 测试时算力约束的 Text-to-CAD**：[Multi-Agent-CAD](https://github.com/Pan-Chera/Multi-Agent-CAD)（⭐185）通过解耦多智能体框架与受约束的测试时算力，把 CAD 生成视为搜索问题。

---

## ⭐ 重点项目

### 🖥️ CAD 平台与编辑器
| 项目 | Star | 简介 |
|---|---|---|
| [**FreeCAD/FreeCAD**](https://github.com/FreeCAD/FreeCAD) | ⭐32,666 | 开源多平台参数化 3D 建模器事实标准；最新主线持续集成 AI Workbench、OCCT 升级与新版 Part Design。 |
| [**pascalorg/editor**](https://github.com/pascalorg/editor) | ⭐21,177 | 浏览器端 3D 建筑项目编辑器，CAD-on-Web 的代表产品。 |
| [**earthtojake/text-to-cad**](https://github.com/earthtojake/text-to-cad) | ⭐12,978 | "Agent Skills for CAD/CAE/CAM" — 自然语言驱动的代理式设计库，AI-CAD 入口级基础设施。 |
| [**openscad/openscad**](https://github.com/openscad/openscad) | ⭐9,897 | 程序员的实体 3D CAD 建模器，脚本化 CAD 标杆。 |
| [**xiangechen/chili3d**](https://github.com/xiangechen/chili3d) | ⭐4,720 | 浏览器端 3D CAD 在线建模与编辑，对标桌面端 FreeCAD 的体验。 |
| [**solvespace/solvespace**](https://github.com/solvespace/solvespace) | ⭐4,080 | 轻量参数化 2D/3D CAD，约束求解器思路清晰。 |
| [**gumyr/build123d**](https://github.com/gumyr/build123d) | ⭐2,806 | Python CAD 编程库，面向工程师的"代码建模"现代选择。 |

### 📐 计算几何与内核
| 项目 | Star | 简介 |
|---|---|---|
| [**CGAL/cgal**](https://github.com/CGAL/cgal) | ⭐6,003 | C++ 计算几何算法库，CAD/CAE/机器人路径规划的"瑞士军刀"。 |
| [**Open-Cascade-SAS/OCCT**](https://github.com/Open-Cascade-SAS/OCCT) | ⭐2,730 | 开源 3D CAD/CAM/CAE 平台，工业级 B-Rep 内核。 |
| [**mapbox/earcut**](https://github.com/mapbox/earcut) | ⭐2,570 | 最快最小 JS 多边形三角化库，WebGL CAD 实时预览利器。 |
| [**leap71/PicoGK**](https://github.com/leap71/PicoGK) | ⭐1,045 | 紧凑稳健的计算工程几何内核，面向增材制造与生成式工程。 |
| [**iShape-Rust/iOverlay**](https://github.com/iShape-Rust/iOverlay) | ⭐199 | Rust 实现的 2D 多边形布尔运算库，性能与稳定性俱佳。 |
| [**iShape-Rust/iTriangle**](https://github.com/iShape-Rust/iTriangle) | ⭐155 | 高速、极致稳定的 Rust 2D 三角化库。 |

### 🖨️ 3D 打印与制造
| 项目 | Star | 简介 |
|---|---|---|
| [**MarlinFirmware/Marlin**](https://github.com/MarlinFirmware/Marlin) | ⭐17,516 | RepRap 3D 打印机固件，业界事实标准。 |
| [**OrcaSlicer/OrcaSlicer**](https://github.com/OrcaSlicer/OrcaSlicer) | ⭐15,339 | 多机型 G-code 生成器，覆盖 Bambu/Prusa/Voron 等主流打印机。 |
| [**Ultimaker/Cura**](https://github.com/Ultimaker/Cura) | ⭐7,008 | 开源切片 GUI，行业另一标杆。 |
| [**dw-0/kiauh**](https://github.com/dw-0/kiauh) | ⭐4,480 | Klipper 安装与更新助手，是 Voron/RatRig 用户标配。 |
| [**maziggy/bambuddy**](https://github.com/maziggy/bambuddy) | ⭐2,747 | 自托管 Bambu Lab 控制中心 — 摆脱云依赖的打印农场方案。 |
| [**XRay3D/GERBER_X3**](https://github.com/XRay3D/GERBER_X3) | ⭐252 | PCB 铣削 G-code 准备 + Gerber 转 PDF，机电一体化的边缘利器。 |

### 🔗 文件格式与互操作
| 项目 | Star | 简介 |
|---|---|---|
| [**f3d-app/f3d**](https://github.com/f3d-app/f3d) | ⭐4,605 | 快速极简 3D 查看器，支持 STEP/STL/3MF 等 30+ 格式。 |
| [**fougue/mayo**](https://github.com/fougue/mayo) | ⭐2,118 | 基于 Qt + OCCT 的 3D CAD 查看与转换器。 |
| [**CadQuery/CQ-editor**](https://github.com/CadQuery/CQ-editor) | ⭐1,206 | CadQuery 的 PyQt GUI 编辑器，Code-CAD 首选 IDE。 |
| [**bldrs-ai/Share**](https://github.com/bldrs-ai/Share) | ⭐181 | 浏览器端 BIM/CAD 协同查看器，支持 IFC/STEP/STL/OBJ/glTF。 |
| [**andymai/occt-wasm**](https://github.com/andymai/occt-wasm) | ⭐37 | OCCT → WebAssembly，工业 B-Rep 内核真正"上浏览器"。 |

### 🐍 Code-CAD 与脚本化
| 项目 | Star | 简介 |
|---|---|---|
| [**neka-nat/freecad-mcp**](https://github.com/neka-nat/freecad-mcp) | ⭐1,674 | FreeCAD MCP 服务器，让 LLM 代理直接操控 FreeCAD。 |
| [**ghbalf/freecad-ai**](https://github.com/ghbalf/freecad-ai) | ⭐418 | FreeCAD 内 AI 助手 Workbench，自然语言生成 3D 模型。 |
| [**tomate44/CurvesWB**](https://github.com/tomate44/CurvesWB) | ⭐152 | FreeCAD 曲面 Workbench 实验性扩展。 |
| [**revhappy/GPT4FreeCAD**](https://github.com/revhappy/GPT4FreeCAD) | ⭐63 | 自然语言 → 参数化 FreeCAD 几何，多模型后端 + 结构化输出校验。 |
| [**pzfreo/draftwright**](https://github.com/pzfreo/draftwright) | ⭐46 | build123d / STEP 文件的自动工程图绘制脚本化工具。 |

---

## 📈 生态趋势信号

三条主线在今天的仓库分布中尤为明显：**① AI × CAD 正在变成"标配接口"**——text-to-cad、freecad-mcp、GPT4FreeCAD、freecad-ai、CADAM、Multi-Agent-CAD、Kiln、AgentSCAD、Anvilate 等项目齐头并进，MCP 协议成为 LLM↔CAD 的事实桥梁；**② 浏览器端 CAD 真正可用**——occt-wasm 把工业级 B-Rep 内核压到 4MB，brepjs/Chili3D/Share/Conway 构成前端 B-Rep 栈，桌面与 Web 边界进一步模糊；**③ 工程级几何算法的 Rust 化与形式化验证**——iOverlay/iTriangle 等 Rust 几何库性能 + 安全双优，而 Lean 形式化验证的网格求交则预示"AI 写代码 + 形式化规范"将成为高可信 CAD 工具的新范式。

---

## 👀 值得关注

1. **[text-to-cad](https://github.com/earthtojake/text-to-cad)（⭐12.9k）** — AI × CAD 生态最关键的"入口库"，MCP/Agent 抽象已覆盖 CAD/CAE/CAM 全栈；后续影响所有 LLM 驱动的设计工具。  
2. **[occt-wasm](https://github.com/andymai/occt-wasm)（⭐37）** — 把 OpenCASCADE 编译为 4MB WASM，配合 [chili3d](https://github.com/xiangechen/chili3d)、[brepjs](https://github.com/andymai/brepjs)、[Share](https://github.com/bldrs-ai/Share) 意味着"无插件浏览器端 B-Rep 建模"路径已经打通。  
3. **[verified-3d-mesh-intersection](https://github.com/schildep/verified-3d-mesh-intersection)（⭐95）** — 用 93 行 Lean 规范替代千行 AI 代码，提示未来高可靠 CAD 内核将由"形式化规范 + AI 实现"协同完成。

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*