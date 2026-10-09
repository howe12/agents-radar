# CAD/机械结构开源动态日报 2026-10-09

> 数据来源: GitHub Search API (109 仓库) | ArXiv cs.GR+cs.CG (0 篇论文) | RSS 新闻 (4 条) | 生成时间: 2026-10-09 04:04 UTC

---

# CAD/机械结构开源动态日报

**日期：2026 年 10 月 8 日**

---

## 一、今日速览

今日 FreeCAD 生态迎来里程碑式更新——**FreeCAD 26.3 Release Candidate 1** 正式发布，预示着大版本即将进入稳定阶段；与此同时，Q3 拨款项目名单公布，多个核心 Workbench 与底层几何内核改进获得资金支持。GitHub 活跃度方面，AI-CAD 与 Code-CAD 项目持续高速迭代，`freecad-mcp` 突破 2.7k、`build123d` 与 `CadQuery` 生态稳步推进，Rust/WebAssembly 化的 STEP 内核（`occt-wasm`、`cadrum`）正在重塑浏览器端 CAD 的可能。整体来看，开源 CAD 正在从"传统建模器"向 **AI 辅助 + 浏览器化 + 脚本化**三轨并行演进。

---

## 二、行业脉搏

1. **FreeCAD 26.3 Release Candidate 1 发布**
   🔗 https://blog.freecad.org/2026/10/08/freecad-26-3-release-candidate-1/
   首个 RC 版本释出，意味着大版本已具备冻结条件，预示正式版将至。对社区和下游分发者（Linux 发行版、企业打包）而言，这是评估兼容性窗口的重要节点。

2. **WIP Wednesday #2026-10-07：开发中特性集中预览**
   🔗 https://blog.freecad.org/2026/10/07/wip-wednesday-7-october-2026/
   每周一次的 WIP 同步展示了 Part、Assembly、Sketcher 等核心模块的活跃进展，是跟进 FreeCAD 主线变化的第一手资料。

3. **2026 Q3 拨款项目名单公布**
   🔗 https://blog.freecad.org/2026/10/02/2026-q3-grant-program-funded-projects/
   FPA（FreeCAD Project Association）拨款覆盖几何内核改进、装配体、性能优化、文档与翻译等方向，资金流向反映未来 6–12 个月 FreeCAD 的战略重心。

4. **Prusa 万圣节促销：彩色与发光耗材**
   🔗 https://blog.prusa3d.com/get-ready-for-halloween-with-our-spooky-filament-offer_138639/
   节日营销层面动态，反映消费级 3D 打印耗材市场持续围绕 **装饰性、视觉差异化**（夜光、变色、特殊质感）做文章。

> 注：今日 ArXiv cs.GR / cs.CG 类论文 **0 篇**，研究前沿板块暂缺。

---

## 三、研究前沿

⚠️ 今日 **cs.GR / cs.CG 类新论文 0 篇**，无法呈现研究前沿条目。建议明日或本周内关注以下持续热门方向以补足研究侧观察：
- **可微 B-Rep / 可微几何处理**（与 AI-CAD 浪潮紧密相关）
- **神经隐式表示与 CAD 的融合**（如 BrepGen、Sparse-ICP 等后续工作）
- **基于 LLM 的参数化建模语言生成**

---

## 四、重点项目

### 🖥️ CAD 平台与编辑器

- **FreeCAD/FreeCAD** ⭐34,053
  🔗 https://github.com/FreeCAD/FreeCAD
  开源多平台参数化三维建模的事实标准，本周 RC1 发布，正值活跃迭代窗口。

- **OpenSCAD/openscad** ⭐10,399
  🔗 https://github.com/openscad/openscad
  程序员友好的纯文本参数化建模语言，3D 打印社区的根基工具。

- **pascalorg/editor** ⭐24,743
  🔗 https://github.com/pascalorg/editor
  开源 3D 建筑编辑器，原生集成 CLI 与 MCP 工具，面向"AI Agent + 人类"协同工作流。

- **earthtojake/text-to-cad** ⭐18,518
  🔗 https://github.com/earthtojake/text-to-cad
  文字生成 CAD 的代表性框架，赋予 AI Agent 直接产出可制造几何的能力。

- **Adam-CAD/CADAM** ⭐5,222
  🔗 https://github.com/Adam-CAD/CADAM
  浏览器端 text-to-CAD 应用，对应免费、本地化趋势。

- **solvespace/solvespace** ⭐4,186
  🔗 https://github.com/solvespace/solvespace
  轻量 2D/3D 参数化求解器，对教学与嵌入式场景尤为友好。

### 📐 计算几何与内核

- **Open-Cascade-SAS/OCCT** ⭐2,971
  🔗 https://github.com/Open-Cascade-SAS/OCCT
  开源 B-Rep 几何内核的事实工业标准，FreeCAD、CadQuery、build123d、Mayo 等均构建于其上。

- **CGAL/cgal** ⭐6,068
  🔗 https://github.com/CGAL/cgal
  计算几何算法库，覆盖三角化、布尔运算、网格处理等学术级算法实现。

- **MeshInspector/MeshLib** ⭐830
  🔗 https://github.com/MeshInspector/MeshLib
  商用级 3D 网格布尔、修复、抽稀、重网格、点云三角化与 ICP，配多语言绑定。

- **lzpel/cadrum** ⭐66
  🔗 https://github.com/lzpel/cadrum
  Rust 实现的 OCCT 静态链接 + WASM 化方案，浏览器/服务端原生 B-Rep 几何的新路径。

### 🧬 创成式与参数化设计

- **clay-good/anvilate** ⭐10
  🔗 https://github.com/clay-good/anvilate
  本地优先的机械工程师设计 Agent，输出 **物理校验后**的 STEP/DXF + 可编辑 Python 源码，瞄准 CATIA/SolidWorks/NX 工作流入口。

- **BelfrySCAD/BOSL2** ⭐2,396
  🔗 https://github.com/BelfrySCAD/BOSL2
  OpenSCAD 生态最成熟的几何助手库，Beta 中持续扩充形状、掩膜与变换工具集。

- **gumyr/build123d** ⭐3,348
  🔗 https://github.com/gumyr/build123d
  Python 参数化 CAD 编程库，对 CadQuery 生态形成重要补充。

### 🖨️ 3D 打印与制造

- **MarlinFirmware/Marlin** ⭐17,616
  🔗 https://github.com/MarlinFirmware/Marlin
  8/32 位 RepRap 固件标杆，商用 3D 打印机的底层事实标准。

- **OrcaSlicer/OrcaSlicer** ⭐15,900
  🔗 https://github.com/OrcaSlicer/OrcaSlicer
  多机型支持的切片器主流分支，对 Bambu/Prusa/Voron 等社区支持活跃。

- **Ultimaker/Cura** ⭐7,050
  🔗 https://github.com/Ultimaker/Cura
  行业最早的 GUI 切片器之一，仍是教育与企业部署的常选项。

- **codeofaxel/Kiln** ⭐92
  🔗 https://github.com/codeofaxel/Kiln
  开源 3D 打印 MCP 服务器：AI Agent 描述需求 → 生成模型 → 推送至 Bambu/Prusa/Klipper 等设备直打。

### 🔗 文件格式与互操作

- **f3d-app/f3d** ⭐4,744
  🔗 https://github.com/f3d-app/f3d
  极速、极简 3D 视图器，对 STEP/IGES/mesh/glTF 一站式支持。

- **fougue/mayo** ⭐2,283
  🔗 https://github.com/fougue/mayo
  基于 Qt + OpenCascade 的 CAD 查看与转换器，专业桌面工具定位。

- **andymai/occt-wasm** ⭐59
  🔗 https://github.com/andymai/occt-wasm
  把 OCCT 编译到 WebAssembly，~4MB brotli，前端 B-Rep 几何的可行性底座。

- **andymai/brepjs** ⭐114
  🔗 https://github.com/andymai/brepjs
  浏览器端精确 B-Rep 几何 JavaScript 库，与 occt-wasm 配合形成 Web CAD 工具链。

- **angel291592/caddiff** ⭐66
  🔗 https://github.com/angel291592/caddiff
  CAD 装配体的 git diff 工具：两个 STEP 文件比对，输出可视化变更 + 机读变更清单，对版本化设计意义重大。

### 🐍 Code-CAD 与脚本化

- **CadQuery/cadquery** ⭐5,900
  🔗 https://github.com/CadQuery/cadquery
  基于 OCCT 的 Python 参数化 CAD 脚本框架，工业自动化建模主力。

- **neka-nat/freecad-mcp** ⭐2,752
  🔗 https://github.com/neka-nat/freecad-mcp
  FreeCAD 官方生态最活跃的 MCP 服务器，让 LLM 直接驱动 FreeCAD 建模。

- **blwfish/freecad-mcp** ⭐57
  🔗 https://github.com/blwfish/freecad-mcp
  提供 32 个工具的 FreeCAD MCP 变体，覆盖更细粒度的 AI 辅助建模动作。

- **ghbalf/freecad-ai** ⭐552
  🔗 https://github.com/ghbalf/freecad-ai
  FreeCAD 自然语言建模 Workbench，把 AI 直接嵌入 UI 层。

---

## 五、生态趋势信号

三大信息源合并读，**"AI × 开源 CAD"正在从概念演示迈入工程落地**：FreeCAD 26.3 RC1 + Q3 拨款清单共同指向一个更稳定、更工程化的底层平台；与此同时，`text-to-cad`、`CADAM`、`anvilate`、`Kiln`、`freecad-mcp` 等项目形成完整链路——LLM 理解需求 → 生成 OCCT/B-Rep 几何 → 通过 STEP 互操作回流主流 CAD → 由切片/固件直达成品制造。另一条主线是 **OCCT 的 WASM 化**（`occt-wasm`、`cadrum`、`brepjs`），它把"高精度 B-Rep"从 C++ 桌面独占带入浏览器，配合 `f3d`、`Share`、`jupytercad` 等前端层项目，**浏览器即 CAD** 的轮廓已经清晰。可微几何与神经 B-Rep 的学术空缺，与 GitHub 上创成式/Agent 项目的密集活跃形成有趣对照——**应用层先于研究层爆发的现象**，提示学界与产业的下一次对话窗口。

---

## 六、值得关注

1. **FreeCAD 26.3 RC1 的实际差异**
   🔗 https://blog.freecad.org/2026/10/08/freecad-26-3-release-candidate-1/
   正式版前最后的窗口期，建议下游打包者、企业用户在 RC 阶段即完成兼容性测试，避免正式版发布时集中踩坑。

2. **caddiff（CAD 版 git diff）的成熟度**
   🔗 https://github.com/angel291592/caddiff
   STEP 装配体的版本化对比是工程团队长期痛点，若该工具达到生产可用，将改变 CAD 数据协作范式，建议关注其后续路线图与文件格式覆盖范围。

3. **anvilate：物理校验 + 可编辑 Python 源码的 AI-CAD 闭环**
   🔗 https://github.com/clay-good/anvilate
   它直接把"AI 生成"和"机械工程师可审/可改"两件事用 STEP + Python 双产物同时解决，比纯 text-to-mesh 更接近工业可用，值得跟踪其物理校验器的精度上限。

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*