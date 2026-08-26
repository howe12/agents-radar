# CAD/机械结构开源动态日报 2026-08-26

> 数据来源: GitHub Search API (105 仓库) | ArXiv cs.GR+cs.CG (4 篇论文) | RSS 新闻 (5 条) | 生成时间: 2026-08-26 00:55 UTC

---

# CAD/机械结构开源动态日报

**2026 年 8 月 21 日 · 星期四**

---

## 一、今日速览

今日开源 CAD 与机械设计领域最值得关注的信号集中在三个方向：**FreeCAD 生态的持续扩张**（Q3 资助计划临近截止、与 KiCad 同台亮相 OSHOP 2026），**AI 驱动的设计代理快速工程化**（text-to-CAD、FreeCAD MCP/AI、生成式支架模型等仓库在过去一周密集推送），以及**WebAssembly 与纯 Rust 几何内核的并行崛起**（occt-wasm、cadrum、brepjs、cadcore 等把 OCCT 搬进浏览器或重写内核）。学术侧，网格质量度量函数的一致性研究为自动重网格化提供了理论基础；社区侧 Prusa CORE One+ Gen 2 正式发货，Bambu Lab HelixCore 病毒视频再次印证消费级 3D 打印的爆发力。

---

## 二、行业脉搏

1. **FreeCAD 与 KiCad 同台亮相 OSHOP 2026**  
   两大开源 EDA/CAD 项目在 OSHOP 2026 进行"showdown"，意味着开源工具链在硬件开发者社区中已具备与商业方案正面竞争的话语权。  
   🔗 https://blog.freecad.org/2026/08/21/freecad-and-kicad-cad-showdown-at-oshop-2026/

2. **Q3 2026 FreeCAD 资助计划截止临近**  
   官方第三季度 grant 窗口即将关闭，对依赖外部赞助的 FreeCAD 模块（AI、Sports、Assembly 等）而言，是决定下半年路线图的关键节点。  
   🔗 https://blog.freecad.org/2026/08/20/q3-2026-grant-program-deadline-approaching/

3. **FreeCAD WIP Wednesday #19**  
   例行的开发进度周报，反映 PartDesign、TechDraw、Assembly 等核心模块的活跃迭代节奏。  
   🔗 https://blog.freecad.org/2026/08/19/wip-wednesday-19-august-2026/

4. **Prusa CORE One+ (Gen 2) INDX 开始发货，整机开放订购**  
   Prusa 新一代 CORE 平台正式从预订转向交付，意味着独立多色（INDX）方案进入消费市场，对 Klipper/OrcaSlicer/Marlin 生态具有外溢效应。  
   🔗 https://blog.prusa3d.com/prusa-core-one-gen-2-indx-shipping-has-started-complete-printers-open-for-orders_137623/

5. **Bambu Lab 专访 Yun Goo：HelixCore 旋转陀螺爆红背后的设计师**  
   HelixCore 病毒打印件的故事印证了消费级 FDM 社区内容生态的成熟，对切片软件（OrcaSlicer、BambuStudio）与模型分享平台（Manyfold、Printables）形成持续供给。  
   🔗 https://blog.bambulab.com/yun-goo-the-man-behind-the-viral-helixcore-spinner/

---

## 三、研究前沿

1. **《An Approach to Study the Structural Consistency of Triangle Badness Functions and Distance Metrics》** — Bowen Liu, Yizhou Wang et al.  
   系统分析有限元/CAE 前处理中三角网格"质量函数"与距离度量的一致性，直接服务于自动重网格化、拓扑优化后处理与 CFD 网格生成。  
   🔗 http://arxiv.org/abs/2608.23267v1

2. **《Riesz Energy Subset Selection in the Euclidean Plane is NP-Hard》** — Michael Emmerich  
   证明 Riesz s-能量点集选择在固定指数下已是 NP-complete，这对**点采样、传感器布置、支撑点拓扑优化**等实际 CAD 任务有重要算法意义——意味着近似/启发式算法将成为常态。  
   🔗 http://arxiv.org/abs/2608.23506v1

3. **《A fast improved quasi-physical dynamic algorithm for efficient wireless coverage in convex polygonal regions》** — Zeping Yi, Yongjun Wang  
   对凸多边形区域的快速无线覆盖算法，方法可迁移到**机械臂可达域、传感器/相机阵列布置**等几何覆盖问题。  
   🔗 http://arxiv.org/abs/2608.23082v1

4. **《Three-edge-coloring apex cubic graphs》** — Yuta Inoue, Ken-ichi Kawarabayashi et al.  
   关于顶点多面体/平面图的边着色定理，主要为图论理论贡献，与网格拓扑、装配图可视化有间接关联。  
   🔗 http://arxiv.org/abs/2608.22870v1

---

## 四、重点项目

### 🖥️ CAD 平台与编辑器

- **[FreeCAD/FreeCAD](https://github.com/FreeCAD/FreeCAD)** — ⭐ 33,069  
  跨平台开源参数化 3D 建模旗舰，是 STEP/PartDesign/Path/Sketcher 全流程的中枢，机械结构开源生态的事实标准。

- **[openscad/openscad](https://github.com/openscad/openscad)** — ⭐ 10,016  
  程序员友好的脚本化实体建模器，在参数化零件、可重现设计领域与 FreeCAD 形成互补。

- **[neka-nat/freecad-mcp](https://github.com/neka-nat/freecad-mcp)** — ⭐ 1,902  
  为 FreeCAD 提供 Model Context Protocol 服务，使 LLM/Agent 可直接调用建模 API，是"AI 代理造零件"基础设施的代表。

- **[ghbalf/freecad-ai](https://github.com/ghbalf/freecad-ai)** — ⭐ 436  
  FreeCAD 的 AI 工作台，自然语言 → 3D 模型，对应"text-to-CAD"平民化方向。

### 📐 计算几何与内核

- **[CGAL/cgal](https://github.com/CGAL/cgal)** — ⭐ 6,021  
  C++ 计算几何算法库，涵盖三角化、布尔运算、网格生成，是 CAD/CAE 工具链最常用的算法底座。

- **[cdcseacave/openMVS](https://github.com/cdcseacave/openMVS)** — ⭐ 4,100  
  开源多视图立体重建库，把点云/照片转换为稠密网格，衔接扫描建模与下游 CAD。

- **[pyvista/pyvista](https://github.com/pyvista/pyvista)** — ⭐ 3,784  
  基于 VTK 的 Python 3D 可视化与网格分析库，常用于仿真结果与网格质量检查。

- **[mikedh/trimesh](https://github.com/mikedh/trimesh)** — ⭐ 3,659  
  Python 三角网格处理库，STL/OBJ/3MF 解析、布尔、剖切一应俱全，是脚本化网格流水线的标配。

- **[leap71/PicoGK](https://github.com/leap71/PicoGK)** — ⭐ 1,066  
  紧凑稳健的"计算工程"几何内核，面向 LBM/AM 的隐式几何，与传统 B-Rep 形成路线竞争。

### 🧬 创成式与参数化设计

- **[earthtojake/text-to-cad](https://github.com/earthtojake/text-to-cad)** — ⭐ 13,892  
  CAD/CAE/CAM 的 Agent Skill 库，把大模型与几何生成器串联，是当前 text-to-CAD 生态的标志性项目。

- **[partcad/partcad](https://github.com/partcad/partcad)** — ⭐ 488  
  可制造物理产品的"包管理器"与数字主线（Digital Thread / TDP），把零件像软件包一样版本化管理。

- **[connorkapoor/geofield-bracket](https://github.com/connorkapoor/geofield-bracket)** — ⭐ 46  
  SE(3) 等变隐式场模型 + 浸入式 FEA，输入几何与载荷即可输出求解器验证合格的支架几何，是 AI + 拓扑优化的前沿实验。

### 🖨️ 3D 打印与制造

- **[MarlinFirmware/Marlin](https://github.com/MarlinFirmware/Marlin)** — ⭐ 17,550  
  RepRap 生态最广泛部署的 8/32 位打印机固件，是商业 3D 打印机改装与维修的事实标准。

- **[OrcaSlicer/OrcaSlicer](https://github.com/OrcaSlicer/OrcaSlicer)** — ⭐ 15,490  
  跨厂商（Bambu、Prusa、Voron、VzBot、RatRig、Creality）G-code 生成器，是 Bambu/Prusa 设备用户的首选切片器。

- **[Ultimaker/Cura](https://github.com/Ultimaker/Cura)** — ⭐ 7,020  
  基于 Uranium 框架的切片 GUI，工业/教育市场仍占据重要份额。

- **[Sienci-Labs/gsender](https://github.com/Sienci-Labs/gsender)** — ⭐ 365  
  面向 grbl/grblHAL CNC 的连接与控制前端，对小型 CNC 工作流意义重大。

- **[XRay3D/GERBER_X3](https://github.com/XRay3D/GERBER_X3)** — ⭐ 253  
  将 Gerber 文件转为 CNC 铣削 G-code，把 PCB 设计直接驱动雕刻机，连接 EDA 与制造的桥梁。

### 🔗 文件格式与互操作

- **[f3d-app/f3d](https://github.com/f3d-app/f3d)** — ⭐ 4,650  
  快速极简的 3D 查看器，支持 STEP/STL/3MF/IFC 等数十种格式，是命令行/CI 中预览 CAD 数据的事实工具。

- **[andymai/brepjs](https://github.com/andymai/brepjs)** — ⭐ 90  
  浏览器端精确 B-Rep 几何库，把 OCCT 拓扑带进 Web 应用。

- **[andymai/occt-wasm](https://github.com/andymai/occt-wasm)** — ⭐ 46  
  OpenCASCADE 编译到 WebAssembly，干净 TypeScript API、约 4MB brotli、支持 Web Worker，是浏览器 CAD 的"地基"。

- **[YATSKOVSKYI/cadcore](https://github.com/YATSKOVSKYI/cadcore)** — ⭐ 33  
  纯 Rust 实现 B-Rep 拓扑与解析曲面，支持 STEP AP203 导出，不依赖 OCCT/C++，代表新一代内存安全内核方向。

### 🐍 Code-CAD 与脚本化

- **[CadQuery/cadquery](https://github.com/CadQuery/cadquery)** — ⭐ 5,650  
  基于 OCCT 的 Python 参数化 CAD 脚本框架，是 Code-CAD 阵营的标杆，已被广泛用于自动化零件生成。

- **[gumyr/build123d](https://github.com/gumyr/build123d)** — ⭐ 2,916  
  新一代 Python CAD 编程库，更现代的 API 设计，与 CadQuery 形成竞争与互补。

- **[sgenoud/replicad](https://github.com/sgenoud/replicad)** — ⭐ 673  
  浏览器中用代码构建 3D 模型的 TypeScript 库，承接 OpenJSCAD 血脉。

- **[lzpel/cadrum](https://github.com/lzpel/cadrum)** — ⭐ 55  
  Rust CAD crate，静态链接 headless OCCT，原生 + WebAssembly 双端运行。

- **[pzfreo/draftwright](https://github.com/pzfreo/draftwright)** — ⭐ 53  
  从 build123d 与 STEP 文件自动生成符合标准的技术图纸，弥补 Code-CAD 在出图环节的短板。

---

## 五、生态趋势信号

三个信息源共同指向一条主线：**CAD 正在从"GUI 工具"演化为"可编程几何平台"**。GitHub 端，Code-CAD 栈（CadQuery、build123d、replicad、cadrum、swift-CAD）持续扩容，且无一例外支持 WASM 化部署，意味着几何内核首次具备了"在浏览器里被 LLM 调用"的可能性。与此同时，**AI 代理与 CAD 的双向接口正在标准化**：MCP 协议（freecad-mcp、rhino-mcp、kiln、anvilate）和 Agent Skill 库（text-to-cad）把"自然语言→几何"与"几何→仿真验证"两条流水线串联起来。学术侧，**网格质量度量与点集优化被证明 NP-hard**，暗示未来拓扑优化、传感器布置等任务将以"AI 近似 + 物理校验"为主要交付形态，而 connorkapoor/geofield-bracket 正是这一形态的早期实现。综合来看，开源 CAD 的下一战场不是 GUI 颜值，而是 **几何内核 + AI 代理 + 制造闭环**的三位一体集成度。

---

## 六、值得关注

1. **[earthtojake/text-to-cad](https://github.com/earthtojake/text-to-cad)** — ⭐ 13,892  
   它不是单一工具，而是把 CAD/CAE/CAM 的 Agent Skill 整理成库的"目录式"项目，是判断 text-to-CAD 走向工业化的最佳观察窗口。

2. **[OCCT-WASM 与 Cadcore 的并行推进](https://github.com/andymai/occt-wasm) / [cadcore](https://github.com/YATSKOVSKYI/cadcore)**  
   一边把 OCCT 搬进浏览器（WASM），另一边用纯 Rust 重写内核——两条路线将共同决定未来 5 年浏览器/桌面 CAD 的底层走向，值得密切跟进。

3. **论文《Triangle Badness Functions 的结构性一致性》**  
   把"网格好坏"的判定从经验指标提升为结构性定理，对所有自动重网格化与

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*