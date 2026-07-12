# CAD/机械结构开源动态日报 2026-07-12

> 数据来源: GitHub Search API (110 仓库) | ArXiv cs.GR+cs.CG (0 篇论文) | RSS 新闻 (4 条) | 生成时间: 2026-07-12 02:06 UTC

---

# 📐 CAD / 机械结构开源动态日报
**2026-07-08 · 周三**

---

## 1️⃣ 今日速览

今日 **arXiv cs.GR / cs.CG 无新增论文**，行业注意力集中在两大板块：FreeCAD 社区生态（设计大赛结果 + WIP 周报）与 Bambu Lab 的社群运营（Insta360 联名设计挑战 + 委内瑞拉创客应急响应）。GitHub 端最强的信号是 **"AI Agent × CAD"** 与 **"Web 端几何内核"** 两条主线并行加速——以 `freecad-mcp`、`rhino-mcp`、`Kiln`、`text-to-cad`、`anvilate` 为代表的 MCP / Agent 工具链，与以 `occt-wasm`、`conway`、`chili3d` 为代表的 WASM 化 B-Rep 内核，正在把"自然语言建模"从 demo 推向可落地的工程流水线。

---

## 2️⃣ 行业脉搏

- **[FreeCAD Community Design Competition 2026: The Results!](https://blog.freecad.org/2026/07/06/freecad-community-design-competition-2026-the-results/)** — _FreeCAD Blog_
  社区设计大赛结果出炉，意味着 FreeCAD 在装配级设计、Part Design 工作流的可表达性获得一批高质量验证用例；这是衡量"开源 CAD 是否能产出商业级交付物"的重要风向标。

- **[WIP Wednesday, 8 July 2026](https://blog.freecad.org/2026/07/08/wip-wednesday-8-july-2026/)** — _FreeCAD Blog_
  本周开发进度更新，涵盖核心几何、Gui 与 Workbench 改进，是 FreeCAD 1.x 后续迭代的窗口观察点。

- **[Bambu Lab × Insta360 Luna Ultra Design Challenge on MakerWorld](https://blog.bambulab.com/lets-make-it-bambu-lab-and-insta360-launch-luna-ultra-design-challenge-on-makerworld/)** — _Bambu Lab_
  头部消费级 3D 打印品牌与影像硬件厂商联名发起设计挑战，标志 MakerWorld 已从"切片社区"演进为"硬件+内容"双轮的内容平台。

- **[When Venezuela needed help, the makers moved first](https://blog.bambulab.com/when-venezuela-needed-help-the-makers-moved-first/)** — _Bambu Lab_
  创客群体在突发事件中快速打印救援件的真实案例，体现了分布式数字制造的应急价值，也是 3D 打印"社会接受度"的典型叙事素材。

---

## 3️⃣ 研究前沿

> ⚠️ 今日 cs.GR / cs.CG 板块**无新论文收录**，研究前沿栏目暂停一日。建议关注：上周沉淀的 B-Rep 生成、几何深度学习方向仍处于"模型迭代—工程化对接"阶段，待顶会（SIGGRAPH、SGP）临近时预计将集中释放。

---

## 4️⃣ 重点项目

### 🖥️ CAD 平台与编辑器

- **[FreeCAD/FreeCAD](https://github.com/FreeCAD/FreeCAD)** ⭐ 32,058 · C++
  开源多平台参数化建模标杆，OCCT 内核 + Python 脚本 + 模块化 Workbench 体系，是事实上的"开源 CATIA 替代"候选。

- **[openscad/openscad](https://github.com/openscad/openscad)** ⭐ 9,816 · C++
  程序员友好的脚本式实体建模器，Code-CAD 生态的"原语层"，与 CadQuery/build123d 共享大量下游用户。

- **[xiangechen/chili3d](https://github.com/xiangechen/chili3d)** ⭐ 4,669 · TypeScript
  浏览器端 3D CAD 应用，纯 Web 栈是 Web-CAD 平民化的代表项目；对在线协作、零安装教学场景意义重大。

- **[dune3d/dune3d](https://github.com/dune3d/dune3d)** ⭐ 2,017 · C
  面向精确 3D 建模的现代 CAD，关注约束求解与装配建模，是 Solvespace 系谱中的活跃新血。

### 📐 计算几何与内核

- **[Open-Cascade-SAS/OCCT](https://github.com/Open-Cascade-SAS/OCCT)** ⭐ 2,641 · C++
  工业级开源 3D CAD/CAM/CAE 内核，几乎所有非 SolidWorks 系的开源 CAD 都构建其上，是战略级基础设施。

- **[CGAL/cgal](https://github.com/CGAL/cgal)** ⭐ 5,972 · C++
  几何算法库的事实标准（三角化、布尔、曲线曲面、网格处理），学术与工业几何研究的"瑞士军刀"。

- **[mikedh/trimesh](https://github.com/mikedh/trimesh)** ⭐ 3,616 · Python
  Python 三角网格加载/分析库，是 Code-CAD、生成式设计、网格修复流水线的常用底层。

- **[gkjohnson/three-mesh-bvh](https://github.com/gkjohnson/three-mesh-bvh)** ⭐ 3,418 · JavaScript
  three.js 网格 BVH 加速库，把浏览器端几何查询从 O(n) 拉到对数级，是 Web-CAD/可视化实时性的关键依赖。

### 🧬 创成式与参数化设计

- **[earthtojake/text-to-cad](https://github.com/earthtojake/text-to-cad)** ⭐ 8,015 · JavaScript
  "Agent skills for CAD, robotics and hardware design"——把 CAD 建模封装为 LLM 可调用的工具集，是 text-to-CAD 走向工程化的标志性项目。

- **[Adam-CAD/CADAM](https://github.com/Adam-CAD/CADAM)** ⭐ 4,782 · TypeScript
  开源文本到 CAD 的 Web 应用，自然语言→参数化模型的演示平台，验证了 LLM 在造型任务上的可用边界。

- **[clay-good/anvilate](https://github.com/clay-good/anvilate)** ⭐ 0 · Python
  本地优先的机械工程师设计 Agent：自然语言描述 → 物理校验后的参数化 STEP/DXF，可直插 CATIA/SolidWorks/NX，代表"AI 工程师助手"落地范式。

### 🖨️ 3D 打印与制造

- **[MarlinFirmware/Marlin](https://github.com/MarlinFirmware/Marlin)** ⭐ 17,472 · C++
  RepRap 生态事实标准固件，覆盖 8/32 位 MCU；是消费级与 DIY 打印机最广泛部署的运动控制基线。

- **[OrcaSlicer/OrcaSlicer](https://github.com/OrcaSlicer/OrcaSlicer)** ⭐ 15,084 · C++
  跨品牌 G-code 生成器（Bambu / Prusa / Voron / VzBot / Creality 等），凭借校准与多机型适配成为社区切片新宠。

- **[maziggy/bambuddy](https://github.com/maziggy/bambuddy)** ⭐ 2,508 · Python
  "Your Bambu Lab. No Cloud. Your Rules." 自托管 Bambu 控制中心，从单台到 40 台打印机机阵；是去云化、隐私优先的工厂级切片/监控栈。

### 🔗 文件格式与互操作

- **[f3d-app/f3d](https://github.com/f3d-app/f3d)** ⭐ 4,535 · C++
  快速极简 3D 查看器，支持 STEP/IGES/STL/3MF 等主流 CAD 交换格式，是命令行/CI 流水线预览的标配。

- **[bldrs-ai/conway](https://github.com/bldrs-ai/conway)** ⭐ 22 · TypeScript
  Web 端高性能 IFC + STEP 引擎，把 BIM/ME CAD 互操作能力带入浏览器，与 Share 平台形成完整查看-协作闭环。

- **[andymai/occt-wasm](https://github.com/andymai/occt-wasm)** ⭐ 23 · Rust
  OpenCascade 编译为 WebAssembly，~4MB brotli、TypeScript API、Worker 支持，是 Web-CAD 真正进入"

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*