# CAD/机械结构开源动态日报 2026-07-18

> 数据来源: GitHub Search API (102 仓库) | ArXiv cs.GR+cs.CG (3 篇论文) | RSS 新闻 (2 条) | 生成时间: 2026-07-18 01:53 UTC

---

# 📰 CAD/机械结构开源动态日报
**日期**：2026-07-15 · 星期三

---

## 1. 今日速览

FreeCAD 项目保持高频迭代，WIP Wednesday 同步了核心 Workbench 与建模模块的最新提交，同期上线的轻量 addon **"Banana For Scale!"** 把"习惯性参考尺度"前移到建模对话框，有助于降低团队协作中的尺寸错配。GitHub 端值得关注的信号：**AI‑Native CAD / 文本‑to‑CAD** 工具在近 7 天密集出现（CADAM、Kiln、AgentSCAD、CAD/CAE Copilot），**OCCT → WebAssembly** 推动浏览器原生 CAD 成为新增量（chili3d、replicad、occt‑wasm、bldrs conway）。ArXiv 上 3 篇 cs.GR/CG 论文虽然不以 CAD 为主战场，但"非正态放大几何的多变量反推"对机械振动/流体的响应–几何耦合建模有方法迁移价值。

---

## 2. 行业脉搏

- **FreeCAD WIP Wednesday（2026‑07‑15）**：核心代码库活跃迭代，意味着下游扩展（DFM Workbench、BOM、addFC、FusedFilamentDesign 等）将持续受益于更稳定的 Part/Assembly API。
  🔗 https://blog.freecad.org/2026/07/15/wip-wednesday-15-july-2026/

- **FreeCAD Addon: Banana For Scale**：将"香蕉 ≈ 18 cm"作为建模窗口内的可视化标尺，解决工程沟通中"屏幕上看着差不多"的尺度歧义，是一种轻量但实用的 UX 改进。
  🔗 https://blog.freecad.org/2026/07/12/new-addon-banana-for-scale/

- **OpenSCAD 生态持续扩张**：BOSL2、homeracker、GridFlock、openscad‑amu 等近 7 天均有提交，OpenSCAD 作为"代码即 CAD"代表正成为 AI Agent 的理想输出格式。

- **Bambu Lab 自托管生态成熟**：maziggy/bambuddy（2,555 ⭐）主打 1–40 台机队的本地化管控，与 Klipper/Mainsail 共同构成"摆脱云端"的 3D 打印栈。

---

## 3. 研究前沿

> ⚠️ 今日 ArXiv cs.GR/CG 三篇均**不以 CAD 几何建模**为主要贡献，但对机械设计周边领域有可借鉴价值。

- **Online Neural Space Time Memory for Dynamic Novel View Synthesis**  
  Elmieh, Tsai 等。提出流式多视角视频下的持久场景记忆，解决 NVS 中的"长期一致性 vs 在线更新"权衡。  
  🔗 http://arxiv.org/abs/2607.15271v1  
  *机械设计意义*：可借鉴到 **工业数字孪生 / 设备运转可视重建** 中，让巡检、装配动画、作业回放具备在线可生长的几何–时序记忆。

- **Authoring Narrative Visualization in Motion: Visual Storytelling in Swimming Videos**  
  Zhao, Vuillemot 等。从体育视频中自动化生成数据驱动的镜头叙事。  
  🔗 http://arxiv.org/abs/2607.14924v1  
  *机械设计意义*：方法可迁移到 **产品发布/复杂装配过程的镜头编排**，让机械动画、CAE 演示更易"讲故事"。

- **Inferring Non‑Normal Amplification Geometry from Multivariate Time Series**  
  Saiprasad, Troude 等。从多元时序数据反推非正态放大几何结构。  
  🔗 http://arxiv.org/abs/2607.14786v1  
  *机械设计意义*：对**流体、结构振动、齿轮系统**中的响应–几何耦合反问题提供新工具，潜在意义是"从监测数据反推动力学几何敏感区"。

---

## 4. 重点项目

### 🖥️ CAD 平台与编辑器

- **[FreeCAD/FreeCAD](https://github.com/FreeCAD/FreeCAD)** · ⭐32,194  
  开源多平台参数化 3D 建模核心，Part/PartDesign/Assembly/Sketcher 工作台齐备，是大部分开源 DFM、BOM、光学、火箭等垂直 Workbench 的事实底座。

- **[CadQuery/cadquery](https://github.com/CadQuery/cadquery)** · ⭐5,470  
  基于 OCCT 的 Python 参数化 CAD 脚本框架，代码生成 STEP，机械工程师做参数化批量件、自动化设计变体的事实标准之一。

- **[gumyr/build123d](https://github.com/gumyr/build123d)** · ⭐2,655  
  较新的 Python CAD 库，使用面向"模式/代数"思路改进 CadQuery 体验，与 OCCT 内核深度集成。

- **[openscad/openscad](https://github.com/openscad/openscad)** · ⭐9,760  
  "程序员实体建模器"，纯文本描述几何，是 AI‑Agent 生成 CAD 的天然目标语言。

- **[xiangechen/chili3d](https://github.com/xiangechen/chili3d)** · ⭐4,686  
  基于浏览器的 3D CAD 应用，免安装即可建模编辑，是 Web 原生 CAD 阵营的明星项目。

- **[solvespace/solvespace](https://github.com/solvespace/solvespace)** · ⭐4,045  
  2D/3D 参数化 CAD，体量小、可嵌入，机械原理示意、运动副验证场景常用。

- **[leozide/leocad](https://github.com/leozide/leocad)** · ⭐2,827  
  用 CAD 思路搭建虚拟 LEGO 模型，对教育、装配验证、机构演示均有借鉴价值。

### 📐 计算几何与内核

- **[CGAL/cgal](https://github.com/CGAL/cgal)** · ⭐5,980  
  C++ 计算几何算法库，离线/在线几何处理、Delaunay、布尔运算、网格重建的事实标准。

- **[Open‑Cascade‑SAS/OCCT](https://github.com/Open-Cascade-SAS/OCCT)** · ⭐2,655  
  开源 3D CAD/CAM/CAE 平台，几乎所有现代开源参数化 CAD（FreeCAD、CadQuery、build123d 等）共用内核。

- **[polydera/trueform](https://github.com/polydera/trueform)** · ⭐128  
  "几何界的 STL"：C++ 实现的快速精确网格布尔、空间查询、重网格化，提供 Python/TS 绑定。

### 🧬 创成式与参数化设计

- **[Adam-CAD/CADAM](https://github.com/Adam-CAD/CADAM)** · ⭐4,815  
  开源文本→CAD Web 应用，是 AI‑Native CAD 方向最具代表性的项目之一。

- **[BelfrySCAD/BOSL2](https://github.com/BelfrySCAD/BOSL2)** · ⭐2,270  
  OpenSCAD 常用形状/布尔/操作库，把"代码 CAD"的开发效率提升一个量级。

- **[armpro24-blip/cad-cae-copilot](https://github.com/armpro24-blip/cad-cae-copilot)** · ⭐40  
  AI Native CAD/CAE 智能体工作台，对接 build123d/OpenCASCADE，提供 MCP 工具集。

- **[Kevoyuan/AgentSCAD](https://github.com/Kevoyuan/AgentSCAD)** · ⭐5  
  自然语言→校验过的 OpenSCAD 工件，附自动几何修复与制造性校验，针对 Agent 输出做了可靠性兜底。

- **[codeofaxel/Kiln](https://github.com/codeofaxel/Kiln)** · ⭐35  
  开源 3D 打印 MCP Server，AI Agent 直接"画-切-打"，闭环对接 Bambu/Prusa/Klipper/Marlin。

### 🖨️ 3D 打印与制造

- **[MarlinFirmware/Marlin](https://github.com/MarlinFirmware/Marlin)** · ⭐17,478  
  8/32 位 MCU 通用的 3D 打印机固件标杆，商用打印机事实标准。

- **[OrcaSlicer/OrcaSlicer](https://github.com/OrcaSlicer/OrcaSlicer)** · ⭐15,136  
  多品牌 3D 打印机 G‑code 生成器，覆盖 Bambu/Prusa/Voron/Creality 等。

- **[maziggy/bambuddy](https://github.com/maziggy/bambuddy)** · ⭐2,555  
  Bambu Lab 自托管指挥中心，从 1 台到 40 台机队的本地方案。

- **[mainsail-crew/mainsail](https://github.com/mainsail-crew/mainsail)** · ⭐2,179  
  Klipper 的主流 Web 管理界面，远程监控与控制的事实标准。

- **[X](https://github.com/XRay3D/GERBER_X3)Ray3D/GERBER_X3** · ⭐250  
  PCB 板铣削的 G‑code 准备与 PDF 转换工具，CAD→CAM 在 PCB 场景的具体落地。

### 🔗 文件格式与互操作

- **[f3d-app/f3d](https://github.com/f3d-app/f3d)** · ⭐4,555  
  极速极简的 3D 查看器，覆盖 STEP/IGES/STL/OBJ/3MF 等主流格式，CLI/GUI 双形态，是 CI 场景的默认选择。

- **[sgenoud/replicad](https://github.com/sgenoud/replicad)** · ⭐659  
  浏览器中用代码构建 3D 模型的 JS 库，对接 OCCT 风格的 B‑Rep。

- **[bldrs-ai/conway](https://github.com/bldrs-ai/conway)** · ⭐22  
  面向 Web CAD 的高性能 IFC/STEP 解析引擎。

- **[andymai/occt-wasm](https://github.com/andymai/occt-wasm)** · ⭐28  
  把 OCCT 编译到 WebAssembly（~4MB brotli），干净的 TS API，是浏览器 CAD 的关键基础设施。

### 🐍 Code‑CAD 与脚本化

- **[cadquery](https://github.com/CadQuery/cadquery)** · ⭐5,470（同上，参数化 CAD 脚本主力）
- **[build123d](https://github.com/gumyr/build123d)** · ⭐2,655（同上，新一代 Python CAD 库）
- **[UMassIonTrappers/PyOpticL](https://github.com/UMassIonTrappers/PyOpticL)** · ⭐133  
  代码→CAD 的模块化光学实验台工具，是"Code‑CAD 解决领域垂直问题"的范例。

---

## 5. 生态趋势信号

**AI Agent 重塑 CAD 工作流**：自然语言/MCP 接口的 CAD 工具一周内集中涌现（CADAM、Kiln、AgentSCAD、CAD‑CAE Copilot、Anvilate），"代码 CAD + LLM"组合正在把建模门槛从"会脚本"降到"会描述"。**

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*