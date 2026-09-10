# CAD/机械结构开源动态日报 2026-09-10

> 数据来源: GitHub Search API (104 仓库) | ArXiv cs.GR+cs.CG (0 篇论文) | RSS 新闻 (3 条) | 生成时间: 2026-09-10 02:36 UTC

---

# CAD/机械结构开源动态日报

**日期：2026-09-08**

---

## 1. 今日速览

今天 CAD 与机械设计领域的开源动态明显呈现出 **"AI 驱动 + 浏览器原生"** 两条主线：新闻层面 FreeCAD 社区贡献了 Microwave Workbench 专用工作台，Prusa 则继续在彩色耗材与教育市场上发力。代码仓库层面亮点集中在 text-to-cad（15k stars）、CadQuery、build123d、chili3d、occt-wasm 等"AI-Agent 可调用的 CAD 栈"，说明 LLM 与符号化 CAD 内核（OCCT）的整合进入加速期。3D 打印侧，Marlin、OrcaSlicer、Cura 等成熟切片生态维持活跃迭代，Bambu Lab 周边自托管工具（bambuddy、ha-bambulab）继续壮大。学术方面今日 ArXiv cs.GR/cs.CG 无新增可纳入日报的论文，CAD 研究前沿将更多依靠仓库级的工程实践来推进。

---

## 2. 行业脉搏

- **FreeCAD 新工作台：Microwave Workbench** — 社区贡献的射频/微波器件专用建模工作台，扩展了 FreeCAD 在电子硬件协同设计场景下的覆盖能力，反映开源 CAD 模块化生态持续外延。🔗 [Spotted: A new Microwave Workbench](https://blog.freecad.org/2026/09/08/spotted-a-new-microwave-workbench/)
- **Prusament PLA ColorMix：5 卷耗材生成 45 种色彩** — 通过混色切片策略实现耗材的色彩组合爆炸式增长，显著降低了多色打印的耗材成本，对消费级 FDM 工作流有直接价值。🔗 [Prusament PLA ColorMix](https://blog.prusa3d.com/prusament-pla-colormix-print-45-color-shades-using-just-five-filament-spoools-and-more_137835/)
- **Prusa Back-to-School 2026 促销** — 教育市场对桌面 3D 打印机的拉动仍在持续，是开源硬件商业化生态扩张的常规信号。🔗 [Back-to-School 2026 Deals Are Here!](https://blog.prusa3d.com/back-to-school-2026-deals-are-here_137792/)

---

## 3. 研究前沿

⚠️ 今日 ArXiv cs.GR / cs.CG 抓取窗口内未获取到值得纳入日报的预印论文。建议关注 earthtojake/text-to-cad、cad-cae-copilot、NiJingzhe/SimpleCADAPI 等项目以了解当前"语言到几何"生成式 CAD 的工程进展。

---

## 4. 重点项目

### 🖥️ CAD 平台与编辑器
- **FreeCAD/FreeCAD** ⭐33,396  
  官方开源多平台参数化 3D 建模器，长期事实标准的开源 CAD。🔗 https://github.com/FreeCAD/FreeCAD
- **openscad/openscad** ⭐10,176  
  "程序员的实体建模器"，基于代码的 CSG 范式经典代表。🔗 https://github.com/openscad/openscad
- **CadQuery/cadquery** ⭐5,730  
  基于 OCCT 的 Python 参数化 CAD 脚本框架，是 LLM Agent 生成可编辑 B-Rep 模型的首选入口。🔗 https://github.com/CadQuery/cadquery
- **xiangechen/chili3d** ⭐4,819  
  完全运行在浏览器中的 3D CAD，展示了 Web 端原生建模的可行性。🔗 https://github.com/xiangechen/chili3d
- **gumyr/build123d** ⭐3,068  
  新一代 Python CAD 编程库，强调面向对象的建模范式与可读性。🔗 https://github.com/gumyr/build123d
- **dune3d/dune3d** ⭐2,071  
  轻量级 3D CAD 应用，适合作为独立建模工具的参考实现。🔗 https://github.com/dune3d/dune3d
- **sgenoud/replicad** ⭐682  
  在浏览器中通过代码构建 3D 模型的库，桥接前端生态。🔗 https://github.com/sgenoud/replicad

### 📐 计算几何与内核
- **CGAL/cgal** ⭐6,034  
  C++ 计算几何算法库的标杆，几乎覆盖所有几何处理需求。🔗 https://github.com/CGAL/cgal
- **Open-Cascade-SAS/OCCT** ⭐2,858  
  工业级开源 CAD/CAM/CAE 内核，几乎所有现代开源 CAD 的几何底座。🔗 https://github.com/Open-Cascade-SAS/OCCT
- **MeshInspector/MeshLib** ⭐820  
  高速网格布尔运算、修复、重网格化的 C++ SDK，多语言绑定。🔗 https://github.com/MeshInspector/MeshLib
- **f3d-app/f3d** ⭐4,685  
  快速简洁的 3D 网格/STEP 浏览器，跨平台轻量可视化首选。🔗 https://github.com/f3d-app/f3d
- **lzpel/cadrum** ⭐58  
  Rust + 静态链接 OCCT 的 CAD crate，原生与 WASM 双形态运行。🔗 https://github.com/lzpel/cadrum
- **andymai/occt-wasm** ⭐51  
  OpenCASCADE 编译为 WebAssembly（~4MB brotli），为浏览器端精确 B-Rep 几何奠基。🔗 https://github.com/andymai/occt-wasm

### 🧬 创成式与参数化设计
- **earthtojake/text-to-cad** ⭐15,074  
  为 CAD/CAE/CAM 智能体（Agent）提供的技能库，是当前 text-to-geometry 生态的明星项目。🔗 https://github.com/earthtojake/text-to-cad
- **BelfrySCAD/BOSL2** ⭐2,353  
  OpenSCAD 通用库，包含大量常用形状、蒙板与变换操作，大幅降低参数化建模门槛。🔗 https://github.com/BelfrySCAD/BOSL2
- **partcad/partcad** ⭐493  
  "零件级包管理器 + 数字主线"，把可制造产品当作可版本化的模块进行管理。🔗 https://github.com/partcad/partcad
- **ad-si/LuaCAD** ⭐122  
  基于 Lua 的参数化 CAD 建模方案。🔗 https://github.com/ad-si/LuaCAD
- **armpro24-blip/cad-cae-copilot** ⭐58  
  AI 原生 CAD/CAE Copilot，支持文本生成 build123d/OCCT 几何且参数可编辑。🔗 https://github.com/armpro24-blip/cad-cae-copilot
- **clay-good/anvilate** ⭐7  
  本地优先的机械工程师设计 Agent：自然语言 → 物理校验的 STEP/DXF。🔗 https://github.com/clay-good/anvilate
- **fa-mc/vibe-cading** ⭐5  
  "Vibe-CAD" 风格的 CadQuery 生成器，面向人类与 LLM Agent 双用户。🔗 https://github.com/fa-mc/vibe-cading

### 🖨️ 3D 打印与制造
- **MarlinFirmware/Marlin** ⭐17,575  
  装机量最大的开源 3D 打印机固件，覆盖 8/32 位 MCU。🔗 https://github.com/MarlinFirmware/Marlin
- **OrcaSlicer/OrcaSlicer** ⭐15,645  
  支持 Bambu/Prusa/Voron 等多品牌的 G-code 生成器，社区活跃度高。🔗 https://github.com/OrcaSlicer/OrcaSlicer
- **Ultimaker/Cura** ⭐7,032  
  经典切片 GUI，构建在 Uranium 框架之上。🔗 https://github.com/Ultimaker/Cura
- **maziggy/bambuddy** ⭐2,935  
  自托管 Bambu Lab 命令中心，绕过云端实现本地控制。🔗 https://github.com/maziggy/bambuddy
- **Donkie/Spoolman** ⭐2,798  
  3D 打印耗材库存管理系统。🔗 https://github.com/Donkie/Spoolman
- **Slicer/Slicer** ⭐2,621  
  跨平台医学影像可视化与计算平台（3D Slicer），在生物医学 CAD 领域地位独特。🔗 https://github.com/Slicer/Slicer
- **sn4k3/UVtools** ⭐1,618  
  MSLA/DLP 文件分析、校准、修复与转换工具。🔗 https://github.com/sn4k3/UVtools
- **mainsail-crew/mainsail** ⭐2,209  
  Klipper 打印机的主流 Web 控制面板。🔗 https://github.com/mainsail-crew/mainsail
- **Sienci-Labs/gsender** ⭐366  
  grbl / grblHAL CNC 控制软件。🔗 https://github.com/Sienci-Labs/gsender
- **XRay3D/GERBER_X3** ⭐253  
  PCB Gerber 转 CNC G-code 的开源工具。🔗 https://github.com/XRay3D/GERBER_X3

### 🔗 文件格式与互操作
- **bldrs-ai/Share** ⭐186  
  浏览器端 BIM/CAD 协作平台，支持 IFC、STEP、STL、OBJ、glTF。🔗 https://github.com/bldrs-ai/Share
- **FriendsOfCADability/CADability** ⭐178  
  纯 .NET 实现的 3D 建模库，不依赖第三方几何库。🔗 https://github.com/FriendsOfCADability/CADability
- **NiJingzhe/SimpleCADAPI** ⭐113  
  为 LLM 设计的"Agent 原生 CAD SDK"，支持创建、检视与重建可编辑 3D 模型。🔗 https://github.com/NiJingzhe/SimpleCADAPI
- **andymai/brepjs** ⭐101  
  浏览器中的 Web CAD 库，支持精确 B-Rep 几何。🔗 https://github.com/andymai/brepjs
- **fel88/CascadeDesktop** ⭐77  
  OpenCASCADE 桌面 GUI 查看/编辑器。🔗 https://github.com/fel88/CascadeDesktop
- **pzfreo/draftwright** ⭐63  
  基于 build123d 与 STEP 的自动工程图生成工具。🔗 https://github.com/pzfreo/draftwright

### 🐍 Code-CAD 与脚本化
- **CadQuery/cadquery** ⭐5,730  
  Python 参数化 CAD 脚本框架，基于 OCCT。🔗 https://github.com/CadQuery/cadquery
- **gumyr/build123d** ⭐3,068  
  Python CAD 编程库，对象化建模体验更佳。🔗 https://github.com/gumyr/build123d
- **CadQuery/CQ-editor** ⭐1,233  
  CadQuery 的 PyQt GUI 编辑器。🔗 https://github.com/CadQuery/CQ-editor
- **partcad/partcad** ⭐493  
  模块化硬件设计与制造的包管理器。🔗 https://github.com/partcad/partcad
- **madfam-org/yantra4d** ⭐6  
  OpenSCAD 参数化模型的开源 Web 平台，支持 STL 导出与自动化校验。🔗 https://github.com/madfam-org/yantra4d

---

## 5. 生态趋势信号

今天仓库列表揭示了三条清晰趋势：① **OCCT WASM 化进入"产品级"**——occt-wasm、brepjs、cadrum、SimpleCADAPI 共同把精确 B-Rep 几何搬到浏览器/Agent 中，"无 OCCT 不 CAD"的格局正在被 WebAssembly 重构；② **Agent 原生 CAD 工具栈成熟**——text-to-cad、cad-cae-copilot、anvilate、vibe-cading 集体出现，意味着"文本→可编辑 STEP/DXF"不再是论文噱头而开始产出可用 SDK；③ **3D 打印"去云化"**——bambuddy、Spoolman、mainsail 等自托管工具持续火热，反映用户在隐私、稳定性与可控性上的需求上升。综合来看，开源 CAD 正从"单机工具"演化为"可被 Agent 调用、可在浏览器运行、可自托管"的新一代工程基础设施。

---

## 6. 值得关注

1. **earthtojake/text-to-cad**（⭐15k）—— 当前最热的"LLM ↔ CAD"技能库，未来 text-to-geometry 工作流的接口标准很可能从这里衍生。🔗 https://github.com/earthtojake/text-to-cad
2. **andymai/occt-wasm** 与 **NiJingzhe/SimpleCADAPI** —— OCCT 在浏览器/Agent 侧的落地路径已打通，对

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*