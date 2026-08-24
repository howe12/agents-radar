# CAD/机械结构开源动态日报 2026-08-24

> 数据来源: GitHub Search API (112 仓库) | ArXiv cs.GR+cs.CG (0 篇论文) | RSS 新闻 (5 条) | 生成时间: 2026-08-24 00:54 UTC

---

# 📅 CAD/机械结构开源动态日报

**日期：2026 年 8 月 21 日**

---

## 1. 今日速览

今日开源 CAD/机械设计生态呈现三大主线：**消费级 3D 打印硬件再升级**（Prusa CORE One+ Gen 2 已正式发货，整机开放订购）；**AI × CAD 集成持续爆发**（Kiln MCP、FreeCAD MCP、Rhino MCP、Anvilate 等多个 AI 代理设计项目近 7 日密集更新）；**浏览器/WebAssembly 化进程加速**（OCCT 编译为 WASM 的 occt-wasm、纯 Rust 内核 cadrum、3D 查看器 conway 都在迭代）。FreeCAD 社区活动与 Q3 资助计划截止提醒同步释出，OSHOP 2026 上 FreeCAD 与 KiCad 的"CAD 大对决"成为开源 EDA/机械设计的标志性事件。

---

## 2. 行业脉搏

| # | 动态 | 意义 |
|---|------|------|
| 1 | [**Prusa CORE One+ (Gen 2) INDX 开始发货，整机开放订购**](https://blog.prusa3d.com/prusa-core-one-gen-2-indx-shipping-has-started-complete-printers-open-for-orders_137623/) | Prusa 继 XL 之后的桌面旗舰完成迭代，CoreXY 平台再次定义消费级 FDM 上限，对开源 Marlin/Klipper 固件生态形成倒逼 |
| 2 | [**FreeCAD & KiCad: CAD showdown at OSHOP 2026**](https://blog.freecad.org/2026/08/21/freecad-and-kicad-cad-showdown-at-oshop-2026/) | 开源机械 CAD 与开源 EDA 首次同台演示，预示"机械-电气-PCB 一体化"工作流（已在 FreeCAD SheetMetal + KiCad 协同场景中酝酿）将进一步成熟 |
| 3 | [**Q3 2026 FreeCAD 资助计划截止日临近**](https://blog.freecad.org/2026/08/20/q3-2026-grant-program-deadline-approaching/) | 资金渠道决定开源 CAD 能否引入全职维护者，是 FreeCAD 1.x 之后进入 2.0 的关键资源杠杆 |
| 4 | [**WIP Wednesday, 19 August 2026**](https://blog.freecad.org/2026/08/19/wip-wednesday-19-august-2026/) | FreeCAD Toponaming、Part/PartDesign 重构等长期议题进入冲刺阶段，影响下游所有 FreeCAD 工作台 |
| 5 | [**Yun Goo — HelixCore 病毒式指尖陀螺背后的设计师**](https://blog.bambulab.com/yun-goo-the-man-behind-the-viral-helixcore-spinner/) | 揭示"参数化指尖陀螺 + 短视频传播 + 桌面打印"已形成新消费级制造范式，对小型独立设计师的工作流具有示范意义 |

---

## 3. 研究前沿

> 📭 **今日 cs.GR / cs.CG 无新增论文。** 学术前沿模块暂缺，建议结合下述开源项目中的研究级贡献（如 Leap71 PicoGK、CGAL、cadcore）作为补充视角。

---

## 4. 重点项目

### 🖥️ CAD 平台与编辑器

| 项目 | ⭐ | 一句话说明 |
|------|---|------------|
| [**FreeCAD/FreeCAD**](https://github.com/FreeCAD/FreeCAD) | 33,035 | 开源多平台参数化 3D 建模的事实标准，OCCT 内核 + Python 脚本 + 多工作台，是机械设计开源生态的根项目 |
| [**openscad/openscad**](https://github.com/openscad/openscad) | 10,007 | "程序员的实体建模器"，纯代码驱动参数化设计，3D 打印社区的事实创作语言 |
| [**xiangechen/chili3d**](https://github.com/xiangechen/chili3d) | 4,754 | 完全运行在浏览器中的 3D CAD，代表"零安装"Web CAD 的新高度 |
| [**solvespace/solvespace**](https://github.com/solvespace/solvespace) | 4,112 | 紧凑型 2D/3D 参数化求解器，几何约束求解算法经典，适合嵌入式与教学场景 |
| [**LibreCAD/LibreCAD**](https://github.com/LibreCAD/LibreCAD) | 6,273 | 跨平台 2D CAD，DXF/DWG 读写完善，轻量化制图首选 |

### 📐 计算几何与内核

| 项目 | ⭐ | 一句话说明 |
|------|---|------------|
| [**Open-Cascade-SAS/OCCT**](https://github.com/Open-Cascade-SAS/OCCT) | 2,793 | 工业级开源 3D CAD/CAM/CAE 平台，FreeCAD、Salome 等众多项目的几何底座 |
| [**CGAL/cgal**](https://github.com/CGAL/cgal) | 6,020 | C++ 计算几何算法库，工业级稳健性，覆盖三角化、布尔运算、网格处理等核心算子 |
| [**cadrum (lzpel)**](https://github.com/lzpel/cadrum) | 54 | Rust 编写的 CAD crate，静态链接无头 OCCT，原生与 WASM 双端运行 |
| [**cadcore (YATSKOVSKYI)**](https://github.com/YATSKOVSKYI/cadcore) | 33 | 纯 Rust B-Rep 内核（无 OCCT、无 C++），展示新一代独立几何内核的可能性 |
| [**leap71/PicoGK**](https://github.com/leap71/PicoGK) | 1,063 | Leap71 的紧凑型计算工程几何内核，面向"生成式工程"大尺度增材制造 |

### 🧬 创成式与参数化设计

| 项目 | ⭐ | 一句话说明 |
|------|---|------------|
| [**connorkapoor/geofield-bracket**](https://github.com/connorkapoor/geofield-bracket) | 9 | 输入箱体+载荷，SE(3) 等变场模型输出"求解器认证"的支架——生成式 + 物理验证一体 |
| [**clay-good/anvilate**](https://github.com/clay-good/anvilate) | 5 | 本地优先机械设计代理：自然语言描述→物理验证的 STEP/DXF + 可编辑 Python 源码，直接对接 SolidWorks/NX 工作流 |
| [**fa-mc/vibe-cading**](https://github.com/fa-mc/vibe-cading) | 5 | CadQuery 驱动，面向人类与 LLM Agent 的 3D 模型生成器，定义"vibe CAD"新范式 |
| [**Zane-0x5a/remotion-director**](https://github.com/Zane-0x5a/remotion-director) | 27 | Claude Code 插件，把"一句话 brief"渲染成完整动效分镜——展示 AI 代理的甲乙环（critic-loop）管线 |

### 🖨️ 3D 打印与制造

| 项目 | ⭐ | 一句话说明 |
|------|---|------------|
| [**MarlinFirmware/Marlin**](https://github.com/MarlinFirmware/Marlin) | 17,549 | 全球装机量最大的 3D 打印机固件，几乎所有商用桌面机的"出厂系统" |
| [**OrcaSlicer/OrcaSlicer**](https://github.com/OrcaSlicer/OrcaSlicer) | 15,468 | 当前最受社区认可的多品牌切片器（Bambu/Prusa/Voron/Creality），特征识别与校准算法领先 |
| [**Ultimaker/Cura**](https://github.com/Ultimaker/Cura) | 7,019 | 老牌切片 GUI，Uranium 框架支撑插件体系，仍是企业与教学主力 |
| [**Sienci-Labs/gsender**](https://github.com/Sienci-Labs/gsender) | 365 | GRBL/grblHAL CNC 一键连接控制软件，是开源 CNC 生态的"类 OctoPrint"角色 |
| [**XRay3D/GERBER_X3**](https://github.com/XRay3D/GERBER_X3) | 253 | 从 Gerber 直接生成 PCB 雕刻刀路 + PDF 转换，PCB-CNC 一体化利基 |
| [**codeofaxel/Kiln**](https://github.com/codeofaxel/Kiln) | 48 | MCP 标准下的 3D 打印服务器，让 Claude/Codex/Cursor 直接完成"设计→切片→打印"闭环 |

### 🔗 文件格式与互操作

| 项目 | ⭐ | 一句话说明 |
|------|---|------------|
| [**f3d-app/f3d**](https://github.com/f3d-app/f3d) | 4,646 | 极简高速的 3D 查看器，STEP/STL/3MF 全支持，CAD 文件预览与脚本化渲染事实标准 |
| [**sgenoud/replicad**](https://github.com/sgenoud/replicad) | 673 | 浏览器内基于代码构建 3D 模型，OpenCascade.js 之上 |
| [**andymai/brepjs**](https://github.com/andymai/brepjs) | 90 | Web 上的精确 B-Rep 几何库，使 CAD 不再依赖 mesh 近似 |
| [**andymai/occt-wasm**](https://github.com/andymai/occt-wasm) | 45 | OCCT 编译到 WebAssembly，~4MB brotli、TypeScript 干净 API、Worker 支持——浏览器 CAD 的"水电煤" |
| [**bldrs-ai/conway**](https://github.com/bldrs-ai/conway) | 22 | 高性能 IFC + STEP 引擎，专为 Web CAD 应用而生 |
| [**bdlucas1/diff3d**](https://github.com/bdlucas1/diff3d) | 71 | STL/OBJ/3MF/STEP 视觉化 3D diff，版本管理与设计审阅利器 |

### 🐍 Code-CAD 与脚本化

| 项目 | ⭐ | 一句话说明 |
|------|---|------------|
| [**CadQuery/cadquery**](https://github.com/CadQuery/cadquery) | 5,644 | 基于 OCCT 的 Python 参数化脚本框架，工程师写"可执行 CAD"的首选 |
| [**gumyr/build123d**](https://github.com/gumyr/build123d) | 2,904 | CadQuery 理念的下一代继承者，语法更清晰，PyScad 风格与 OpenSCAD 双向桥接 |
| [**earthtojake/text-to-cad**](https://github.com/earthtojake/text-to-cad) | 13,809 | LLM Agent 的 CAD/CAE/CAM 技能库，把"语言→几何"标准化为工具调用 |
| [**Adam-CAD/CADAM**](https://github.com/Adam-CAD/CADAM) | 5,014 | 开源 Text-to-CAD Web 应用，让自然语言直出可下载 3D 模型 |
| [**partcad/partcad**](https://github.com/partcad/partcad) | 487 | 物理产品的包管理器（TDP/Digital Thread 标准），用 AI 加速产品全生命周期文档 |
| [**ad-si/LuaCAD**](https://github.com/ad-si/LuaCAD) | 118 | 用 Lua 做参数化 CAD 建模，Rust 内核 + 嵌入式友好 |
| [**jdegenstein/sharp123**](https://github.com/jdegenstein/sharp123) | 5 | build123d 设计的可控角度刀具研磨装置，Code-CAD 解决真实工程问题的范本 |

---

## 5. 生态趋势信号

**AI 代理正在重塑 CAD 工作流**：FreeCAD MCP、Rhino MCP、geofield-bracket、anvilate、vibe-cading、Kiln 在 7 日内同步活跃，表明"自然语言→CAD→CAE→CAM→打印"全链路代理化已从概念走向可运行产品，**MCP 协议成为机械设计 AI 化的隐性标准**。与此同时，**浏览器/WebAssembly 化进入深水区**：OCCT-WASM（4MB brotli）、纯 Rust 内核 cadrum 与 cadcore、chili3d、replicad、bldrs-ai conway 共同把"零安装、可分享、跨平台"的 Web CAD 体验推向生产可用。底层则出现**内核去 C++ 化趋势**——Rust 重写 B-Rep 与 OCCT 的两条技术路线（cadrum 静态链接 OCCT，cadcore 完全自研）正同时演进，预示下一代几何内核可能摆脱三十年 C++ 遗产。打印端，OrcaSlicer 与 Klipper 系（mainsail/fluidd）继续挤压 Marlin 份额，Prusa 旗舰更新验证了 CoreXY 在桌面机市场的统治力。

---

## 6. 值得关注

1. **🧠 [Kiln — 3D 打印的 MCP 服务器](https://github.com/codeofaxel/Kiln)** — 把 MCP 这一 AI 协议从"聊天+工具"扩展到"对话+切片+打印"，是首个跨品牌（Bambu/Creality/Prusa/Klipper/Marlin）通吃的代理入口，未来 CAD+AM 闭环的关键拼图。

2. **🧬 [connorkapoor/geofield-bracket — SE(3) 等变场生成支架](https://github.com/connorkaparo/geofield-bracket)** — 把"SE(3) 等变神经网络 + 浸入式 FEA + 实时 3D 设计师"整合到一个开源项目，代表生成式设计的下一形态——**几何与物理共同优化而非后验验证**，值得长期跟踪。

3. **🧱 [andymai/occt-wasm — OCCT 编译为 WASM](https://github.com/andymai/occt-wasm)** — 4MB brotli 大小、干净 TS API、arena 内存模型，是浏览器承载工业级 B-Rep 的"最后一公里"基础设施。其成熟度直接决定 chili3d、replicad、bldrs-ai conway 等 Web CAD 的天花板。

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*