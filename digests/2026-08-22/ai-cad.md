# CAD/机械结构开源动态日报 2026-08-22

> 数据来源: GitHub Search API (110 仓库) | ArXiv cs.GR+cs.CG (1 篇论文) | RSS 新闻 (5 条) | 生成时间: 2026-08-22 00:52 UTC

---

# CAD / 机械结构开源动态日报

> 报告日期：2026-08-21 · 覆盖：行业新闻 5 条 · ArXiv 论文 1 篇 · GitHub 活跃仓库 110 个

---

## 一、今日速览

今日开源 CAD 生态的核心信号是 **AI 代理与 CAD 的深度融合**：以 FreeCAD / Rhino 为主的两类 MCP 服务器持续涌现，叠加 text-to-CAD 工具链的成熟，LLM 已能在 OCCT 与 build123d 之上直接产出可制造模型。3D 打印端，Prusa CORE One+ (Gen 2) 整机开售标志着消费级 CoreXY 进入"打印即量产"阶段；同时，Self-Hosted（bambuddy、manyfold3d）和 Klipper 前端（mainsail、fluidd）继续保持高活跃度，凸显 **去云化、本地优先** 的制造栈趋势。学术侧，Erik Demaine 团队关于多面体折叠网（polyomino nets）的研究延续了计算几何与折纸工程的传统，为可展曲面与拓扑结构优化提供了新工具。

---

## 二、行业脉搏

- **🆚 FreeCAD 与 KiCad 在 OSHOP 2026 同台对决** — 两款开源旗舰首次以"showdown"形式同场竞技，机械-电子协同设计（mechtronic）流程即将迎来工具链层面的官方对照。 [链接](https://blog.freecad.org/2026/08/21/freecad-and-kicad-cad-showdown-at-oshop-2026/)

- **💰 FreeCAD Q3 2026 资助计划截止倒计时** — 季度 grant 是 FreeCAD Part Design / Toponaming 等核心模块迭代的重要资金来源，社区贡献者应关注时间节点。 [链接](https://blog.freecad.org/2026/08/20/q3-2026-grant-program-deadline-approaching/)

- **🛠️ WIP Wednesday #19 — FreeCAD 工作台进展速览** — Topological Naming、装配约束、Part Design 改进等仍是焦点；社区通过周报机制推进透明化开发。 [链接](https://blog.freecad.org/2026/08/19/wip-wednesday-19-august-2026/)

- **🖨️ Prusa CORE One+ (Gen 2) INDX 整机开售** — Prusa 第二代 CoreXY 整机正式发货，补齐其封闭式高产能打印产品线，对 Voron、Bambu 的中端市场形成直接竞争。 [链接](https://blog.prusa3d.com/prusa-core-one-gen-2-indx-shipping-has-started-complete-printers-open-for-orders_137623/)

- **🎡 HelixCore Spinner 设计者 Yun Goo 专访** — 拓竹博客揭示了现象级 3D 打印模型背后的设计-切片-社区传播链路，对独立设计师变现与模型 SEO 具参考意义。 [链接](https://blog.bambulab.com/yun-goo-the-man-behind-the-viral-helixcore-spinner/)

---

## 三、研究前沿

> 今日 ArXiv cs.GR / cs.CG 仅检索到 1 篇与 CAD/几何直接相关的论文，整理如下：

- **Polyomino Nets Covering Three Different Boxes of Area 106 and Related Results**
  *Erik D. Demaine, Jenny Diomidova et al.* — [arXiv:2608.19910v1](http://arxiv.org/abs/2608.19910v1)
  通过计算机搜索证明存在可折叠为 2～3 种不同长方体的 polyomino 展开图。该工作延续了 Demaine 团队在 *折纸工程（origami engineering）* 与 *多面体展开* 的传统，对可展面板设计、空间展开结构（如太阳能阵列、可折叠家具）以及拓扑优化的离散构型搜索有直接启发意义；同时其搜索算法可借鉴用于 STEP/STEP-NC 工件布局优化。

> 备注：当前 cs.GR/cs.CG 当日新发文中与 CAD/机械设计强相关条目较少，建议关注本周内图形学顶会（SIGGRAPH、SGP）后续接收的成果。

---

## 四、重点项目

### 🖥️ CAD 平台与编辑器

- **[FreeCAD/FreeCAD](https://github.com/FreeCAD/FreeCAD)** ⭐ 32,995 · C++ · Free 开源多平台 3D 参数化建模器的官方源码，作为 OCCT + Python 生态的事实标准。
- **[openscad/openscad](https://github.com/openscad/openscad)** ⭐ 9,995 · C++ · "程序员的实体 3D CAD 建模器"，代码化参数化设计的奠基项目。
- **[xiangechen/chili3d](https://github.com/xiangechen/chili3d)** ⭐ 4,751 · TypeScript · 完全运行于浏览器中的 3D CAD，是 Web-CAD 阵营的代表实现。
- **[LibreCAD/LibreCAD](https://github.com/LibreCAD/LibreCAD)** ⭐ 6,266 · C++ · 跨平台 2D CAD，原生支持 DXF/DWG，是机械制图工具链的轻量选择。
- **[leozide/leocad](https://github.com/leozide/leocad)** ⭐ 2,842 · C++ · 虚拟 LEGO 建模 CAD，是约束建模在玩具领域的有趣应用。

### 📐 计算几何与内核

- **[Open-Cascade-SAS/OCCT](https://github.com/Open-Cascade-SAS/OCCT)** ⭐ 2,786 · C++ · 开源 3D CAD/CAM/CAE 平台级几何内核，FreeCAD、CadQuery 等均构建其上。
- **[CGAL/cgal](https://github.com/CGAL/cgal)** ⭐ 6,016 · C++ · 计算几何算法库，CAD/CAE 领域求解布尔运算、网格生成等问题的工业级工具。
- **[google/draco](https://github.com/google/draco)** ⭐ 7,450 · C++ · 3D 几何网格/点云压缩库，显著降低大型装配体在线传输与存储成本。

### 🧬 创成式与参数化设计

- **[earthtojake/text-to-cad](https://github.com/earthtojake/text-to-cad)** ⭐ 13,755 · Python · 为 CAD/CAE/CAM 场景设计的 Agent Skills 集合，是 LLM 驱动机械设计的关键基础设施。
- **[Adam-CAD/CADAM](https://github.com/Adam-CAD/CADAM)** ⭐ 5,009 · TypeScript · 开源 Text-to-CAD Web 应用，把自然语言直接映射为可制造模型。
- **[clay-good/anvilate](https://github.com/clay-good/anvilate)** ⭐ 5 · Python · 本地优先的机械设计代理：自然语言→物理校验后的参数化 STEP/DXF，输出兼容 CATIA/SolidWorks/NX。
- **[BelfrySCAD/BOSL2](https://github.com/BelfrySCAD/BOSL2)** ⭐ 2,327 · OpenSCAD · 极大扩展 OpenSCAD 形状库与操作语义，是 OpenSCAD 生态的"标准库"。

### 🖨️ 3D 打印与制造

- **[MarlinFirmware/Marlin](https://github.com/MarlinFirmware/Marlin)** ⭐ 17,547 · C++ · 8/32 位通用 RepRap 固件，工业级 3D 打印机的事实底层。
- **[OrcaSlicer/OrcaSlicer](https://github.com/OrcaSlicer/OrcaSlicer)** ⭐ 15,452 · C++ · 支持 Bambu/Prusa/Voron/Creality 等主流机的 G-code 生成器，社区切片器新标杆。
- **[Ultimaker/Cura](https://github.com/Ultimaker/Cura)** ⭐ 7,015 · Python · 基于 Uranium 框架的开源切片 GUI，行业参考实现。
- **[maziggy/bambuddy](https://github.com/maziggy/bambuddy)** ⭐ 2,835 · Python · 自托管的 Bambu Lab 指挥中心，体现去云化、本地优先的 3D 打印管控趋势。
- **[mainsail-crew/mainsail](https://github.com/mainsail-crew/mainsail)** ⭐ 2,200 · Vue · Klipper 主流 Web UI，与 Klipper 固件配套组成完整远程控制栈。

### 🔗 文件格式与互操作

- **[andymai/occt-wasm](https://github.com/andymai/occt-wasm)** ⭐ 45 · Rust · OpenCascade 编译到 WebAssembly，提供干净的 TS API，是浏览器内 B-Rep 几何的基石。
- **[bldrs-ai/conway](https://github.com/bldrs-ai/conway)** ⭐ 22 · TypeScript · Web 端高性能 IFC & STEP 引擎，让 BIM/CAD 模型可在浏览器内原生解析。
- **[bldrs-ai/Share](https://github.com/bldrs-ai/Share)** ⭐ 181 · JavaScript · 基于浏览器的 BIM/CAD 协作查看器，支持 IFC/STEP/STL/OBJ/GLTF 互读。
- **[f3d-app/f3d](https://github.com/f3d-app/f3d)** ⭐ 4,643 · C++ · 快速极简 3D 查看器，覆盖 STEP/3MF/STL/3D Tiles 等数十种格式的本地查看。

### 🐍 Code-CAD 与脚本化

- **[CadQuery/cadquery](https://github.com/CadQuery/cadquery)** ⭐ 5,636 · Python · 基于 OCCT 的 Python 参数化脚本框架，是 Code-CAD 流水线的代表实现。
- **[gumyr/build123d](https://github.com/gumyr/build123d)** ⭐ 2,891 · Python · Python CAD 编程库，采用 algebraic/semantic 建模风格，几何表达力强。
- **[neka-nat/freecad-mcp](https://github.com/neka-nat/freecad-mcp)** ⭐ 1,873 · Python · FreeCAD 的 MCP 服务端，让 LLM 代理直接操作 FreeCAD 会话。
- **[tanishqbhattad/rhino-mcp](https://github.com/tanishqbhattad/rhino-mcp)** ⭐ 16 · C# · Rhino 8 的 MCP 服务器，配套 115 个 AI 工具，展示 LLM 对成熟 CAD 的深度接入。
- **[pzfreo/draftwright](https://github.com/pzfreo/draftwright)** ⭐ 51 · Python · 为 build123d / STEP 模型自动生成符合规范的技术工程图，填补 Code-CAD 出图短板。

---

## 五、生态趋势信号

**「AI 代理 × 几何内核 × 浏览器」三方汇聚，正重塑开源 CAD 的入口形态。** 一方面，FreeCAD 与 Rhino 的 MCP 服务器同时进入主流视野，意味着 LLM 已在工程级别真正"动手"——能建模、出 STEP、截图、生成 PDF；另一方面，OCCT/IFC/STEP 被逐一编译进 WebAssembly（occt-wasm、conway），让 B-Rep 几何首次具备纯前端能力，为 chili3d、Share、brepjs 等 Web-CAD 提供了与桌面端对等的几何底座。在 print 层，Prusa 整机开售 + 自托管 Bambu 工具（bambuddy、manyfold3d）同步推进，反映出"打印设备商品化、控制系统本地化"的两极分化。学术与开源工程之间，Demaine 团队的 polyomino nets 提示：可展/折叠结构仍是值得长期关注的算法金矿，对未来 deployable structure 与薄板折弯设计有直接落地价值。

---

## 六、值得关注

1. **🚨 Prusa CORE One+ (Gen 2) 整机开售** — [链接](https://blog.prusa3d.com/prusa-core-one-gen-2-indx-shipping-has-started-complete-printers-open-for-orders_137623/)
   第二代 CoreXY 整机意味着 Prusa 直面 Bambu 的中端市场冲击，价格/性能/封闭体验三角将被重新定义，对整机生态与第三方切片/固件兼容性影响深远。

2. **🧠 occt-wasm + FreeCAD/Rhino MCP 同步推进** — [occt-wasm](https://github.com/andymai/occt-wasm) · [freecad-mcp](https://github.com/neka-nat/freecad-mcp) · [rhino-mcp](https://github.com/tanishqbhattad/rhino-mcp)
   WebAssembly 几何内核与 LLM-MCP 协议两端同时成熟，意味着"浏览器 + 自然语言 → 可制造 STEP"链路已具备落地条件，值得立刻试用并评估其在自家流水线中的接入点。

3. **📐 Demaine 团队 polyomino nets 新结果** — [arXiv:2608.19910v1](http://arxiv.org/abs/2608.19910v1)
   折叠成多个不同长方体的展开图，背后的离散搜索方法可被借鉴到 STEP-NC 装夹布局、薄板展开等工业问题；建议跟踪团队后续工作及开源代码发布。

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*