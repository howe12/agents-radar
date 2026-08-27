# CAD/机械结构开源动态日报 2026-08-27

> 数据来源: GitHub Search API (106 仓库) | ArXiv cs.GR+cs.CG (0 篇论文) | RSS 新闻 (6 条) | 生成时间: 2026-08-27 06:39 UTC

---

# CAD/机械结构开源动态日报

> 数据采集日期：2026-08-27 · 信息源：FreeCAD / Prusa / Bambu Lab Blog、ArXiv、GitHub Trending

---

## 一、今日速览

FreeCAD 生态持续高位运行：WIP Wednesday 26 期、OSHOP 2026 上 FreeCAD 与 KiCad 联袂亮相、Q3 拨款计划截止在即，三件事分别对应开发节奏、跨工具协同与社区资金三个关键维度。硬件侧 Prusa CORE One+ (Gen 2) INDX 已开始正式发货，意味着消费/工业级 FDM 设备进入新一轮迭代周期。GitHub Trending 则呈现一个鲜明信号——**"AI/Agent 原生 CAD"** 正在爆发：`earthtojake/text-to-cad`（⭐13.9k）、`Adam-CAD/CADAM`（⭐5k）、`NiJingzhe/SimpleCADAPI`、`clay-good/anvilate`、`codeofaxel/Kiln` 等新一代文本/意图驱动的 CAD 工具密集出现，与 `FreeCAD-MCP`、`FreeCAD-AI` 形成上下游联动，LLM × 参数化建模的工程化路径首次具备完整雏形。

---

## 二、行业脉搏

| # | 动态 | 意义 |
|---|------|------|
| 1 | **[FreeCAD WIP Wednesday, 26 August 2026](https://blog.freecad.org/2026/08/27/wip-wednesday-26-august-2026/)** | 每周开发进度汇总持续运转，说明 FreeCAD 主线版本（1.0 / 1.1 节奏）仍处于密集迭代期，下游插件生态（SheetMetal、Gears、CurvesWB、Ribbon）需要跟进兼容 |
| 2 | **[FreeCAD × KiCad: CAD Showdown at OSHOP 2026](https://blog.freecad.org/2026/08/21/freecad-and-kicad-cad-showdown-at-oshop-2026/)** | 机械 CAD 与 EDA 在开源阵营首次同台对比，标志着 OSHWA 体系下的"机械 + 电子"全栈开源工作流正走向成熟，对替代 Altium + SolidWorks 商业链具有示范意义 |
| 3 | **[Q3 2026 Grant Program Deadline Approaching](https://blog.freecad.org/2026/08/20/q3-2026-grant-program-deadline-approaching/)** | FreeCAD 基金会持续为关键功能（装配、TopoNaming 稳定性、FEM、OCCT 升级）提供资金，是判断未来 6~12 个月主版本演进方向的先行指标 |
| 4 | **[Prusa CORE One+ (Gen 2) INDX — Shipping Started](https://blog.prusa3d.com/prusa-core-one-gen-2-indx-shipping-has-started-complete-printers-open-for-orders_137623/)** | INDX（工业级）版本开放预订并启动发货，Prusa 将消费级经验向工业/小批量制造延伸，与 Bambu Lab X1/P2 系列、Ultimaker S 系列形成新竞争格局；切片器生态（Marlin/Klipper/OrcaSlicer）需关注 G-code 兼容性变更 |
| 5 | **[Bambu Lab — Yun Goo & HelixCore Spinner](https://blog.bambulab.com/yun-goo-the-man-behind-the-viral-helixcore-spinner/)** | 社区驱动的爆款打印案例，体现消费级 3D 打印的内容/创作者经济仍在扩展，间接推动 OrcaSlicer、Bambuddy、ha-bambulab 等周边工具活跃 |

---

## 三、研究前沿

**今日 cs.GR / cs.CG 方向无新收录论文。**

尽管学术端静默，仓库侧的"研究型 CAD"信号并未停歇：`connorkapoor/geofield-bracket`（46 ⭐）提出 SE(3) 等变场网络 + 沉浸式 FEA 的"输入箱体与载荷 → 输出可制造支架"工作流；`clay-good/anvilate`（6 ⭐）落地"自然语言 → 物理校验 → 参数化 STEP/DXF + 可编辑 Python 源码"的端到端管线；`NiJingzhe/SimpleCADAPI`（102 ⭐）则为 LLM 提供了 Agent 原生的 3D 重建与可编辑模型 SDK。这三类项目共同勾勒出 **生成式工程（Generative Engineering）从论文到工程工具**的迁移路径。

---

## 四、重点项目

### ️ CAD 平台与编辑器

| 项目 | ⭐ | 一句话说明 |
|------|----|------------|
| **[FreeCAD/FreeCAD](https://github.com/FreeCAD/FreeCAD)** | 33,088 | 官方主线，跨平台参数化 3D 建模器；Open CASCADE 内核 + Python 脚本化，是开源 CAD 事实标准 |
| **[openscad/openscad](https://github.com/openscad/openscad)** | 10,026 | 程序化实体建模器，DSL 描述几何；与 3D 打印社区深度绑定，参数化版本控制友好 |
| **[xiangechen/chili3d](https://github.com/xiangechen/chili3d)** | 4,777 | 纯浏览器端 3D CAD，TypeScript 实现；零安装部署，对教学/轻量协作场景具备潜力 |
| **[solvespace/solvespace](https://github.com/solvespace/solvespace)** | 4,118 | 参数化 2D/3D CAD + 运动学求解，体积小、约束求解器高效，适合机构设计与教学 |
| **[LibreCAD/LibreCAD](https://github.com/LibreCAD/LibreCAD)** | 6,284 | 跨平台 2D CAD，DXF/DWG 原生读写；机械制图与建筑平面图的基础工具 |
| **[andymai/brepjs](https://github.com/andymai/brepjs)** | 93 | Web 端精确 B-Rep 几何库；让浏览器获得与 OCCT 同级的边界表示建模能力 |

### 📐 计算几何与内核

| 项目 |  | 一句话说明 |
|------|----|------------|
| **[Open-Cascade-SAS/OCCT](https://github.com/Open-Cascade-SAS/OCCT)** | 2,803 | 开源 3D CAD/CAM/CAE 平台，几何内核事实标准；FreeCAD、KiCad-StepUp、f3d、mayo、cadrum 等都依赖它 |
| **[CGAL/cgal](https://github.com/CGAL/cgal)** | 6,025 | C++ 计算几何算法库；三角化、布尔运算、曲面重建、网格处理的标准实现 |
| **[andymai/occt-wasm](https://github.com/andymai/occt-wasm)** | 47 | OCCT 编译为 WebAssembly（~4MB brotli），提供清洁的 TS API；浏览器内核化 CAD 的关键拼图 |
| **[leap71/PicoGK](https://github.com/leap71/PicoGK)** | 1,068 | 紧凑稳健的计算工程几何内核，面向"软硬件一体"的工业级创成式设计 |

###  创成式与参数化设计

| 项目 | ⭐ | 一句话说明 |
|------|----|------------|
| **[earthtojake/text-to-cad](https://github.com/earthtojake/text-to-cad)** | 13,939 | CAD/CAE/CAM Agent 技能库；标志"LLM × 工程设计"已进入主流关注区 |
| **[Adam-CAD/CADAM](https://github.com/Adam-CAD/CADAM)** | 5,020 | 开源 Text-to-CAD Web 应用，自然语言直接生成可编辑模型 |
| **[NiJingzhe/SimpleCADAPI](https://github.com/NiJingzhe/SimpleCADAPI)** | 102 | Agent 原生 CAD SDK，让 LLM 创建、检查、重建可编辑 3D 模型 |
| **[clay-good/anvilate](https://github.com/clay-good/anvilate)** | 6 | 本地优先设计 Agent：自然语言 → 物理校验 → 参数化 STEP/DXF + Python 源码 |
| **[connorkapoor/geofield-bracket](https://github.com/connorkapoor/geofield-bracket)** | 46 | SE(3) 等变场 + 沉浸式 FEA；输入箱体+载荷即可得求解器认证的结构件 |

### ️ 3D 打印与制造

| 项目 | ⭐ | 一句话说明 |
|------|----|------------|
| **[MarlinFirmware/Marlin](https://github.com/MarlinFirmware/Marlin)** | 17,550 | 8/32 位 MCU 通用 3D 打印机固件，绝大多数 FDM 设备的"出厂默认" |
| **[OrcaSlicer/OrcaSlicer](https://github.com/OrcaSlicer/OrcaSlicer)** | 15,505 | 跨品牌 G-code 生成器（Bambu/Prusa/Voron/Creality…）；消费级切片的事实标杆之一 |
| **[Ultimaker/Cura](https://github.com/Ultimaker/Cura)** | 7,024 | 基于 Uranium 框架的切片 GUI，企业/教育用户基数大 |
| **[maziggy/bambuddy](https://github.com/maziggy/bambuddy)** | 2,861 | Bambu Lab 自托管控制中心，云断网、打印农场管理；与 Prusa CORE One+ INDX 装机场景直接相关 |
| **[Donkie/Spoolman](https://github.com/Donkie/Spoolman)** | 2,744 | 灯丝库存管理系统，多切片器/打印机协同的物料中枢 |

### 🔗 文件格式与互操作

| 项目 | ⭐ | 一句话说明 |
|------|----|------------|
| **[f3d-app/f3d](https://github.com/f3d-app/f3d)** | 4,650 | 极简快速 3D 查看器；CLI/桌面/网页多端，方便嵌入 CI 与文档流程 |
| **[fougue/mayo](https://github.com/fougue/mayo)** | 2,135 | Qt + OCCT 的 3D CAD 查看/转换器；STEP ↔ IGES  mesh 的高质量桥梁 |
| **[partcad/partcad](https://github.com/partcad/partcad)** | 489 | 可制造产品的包管理器（Digital Thread / TDP 标准），把 Git 工作流引入硬件 |
| **[sgenoud/replicad](https://github.com/sgenoud/replicad)** | 675 | 浏览器端基于代码构建 3D 模型的库；与 chili3d/occt-wasm 形成"代码即建模"前端栈 |
| **[bdlucas1/diff3d](https://github.com/bdlucas1/diff3d)** | 72 | STL/OBJ/3MF/STEP 视觉化 3D Diff；版本控制 CAD 文件的关键工具 |

### 🐍 Code-CAD 与脚本化

| 项目 | ⭐ | 一句话说明 |
|------|----|------------|
| **[CadQuery/cadquery](https://github.com/CadQuery/cadquery)** | 5,657 | 基于 OCCT 的 Python 参数化 CAD 脚本框架；机电一体化设计自动化的主力 |
| **[gumyr/build123d](https://github.com/gumyr/build123d)** | 2,931 | 新一代 Python CAD 编程库；与 CadQuery 同源思路，更现代的 API |
| **[codeofaxel/Kiln](https://github.com/codeofaxel/Kiln)** | 49 | 开源 MCP 服务器：AI Agent 在 Bambu/Creality/Prusa/Klipper/Marlin 上设计→切片→打印 |
| **[jdegenstein/sharp123](https://github.com/jdegenstein/sharp123)** | 5 | build123d 设计的可控角度磨刀系统，展示 Code-CAD 落地精密机械设计的能力 |
| **[fa-mc/vibe-cading](https://github.com/fa-mc/vibe-cading)** | 5 | 为人类与 LLM Agent 设计的 CadQuery 3D 模型生成器集合 |

### 🔌 FreeCAD AI/MCP 插件子生态

| 项目 | ⭐ | 一句话说明 |
|------|----|------------|
| **[neka-nat/freecad-mcp](https://github.com/neka-nat/freecad-mcp)** | 1,915 | FreeCAD MCP 服务器，让 LLM 直接驱动 FreeCAD 操作 |
| **[ghbalf/freecad-ai](https://github.com/ghbalf/freecad-ai)** | 440 | FreeCAD AI 工作台，自然语言 → 3D 模型生成 |
| **[blwfish/freecad-mcp](https://github.com/blwfish/freecad-mcp)** | 32 | 32 个 MCP 工具的 FreeCAD 集成方案 |
| **[APEbbers/FreeCAD-Ribbon](https://github.com/APEbbers/FreeCAD-Ribbon)** | 134 | Ribbon UI 主题，大幅降低主流 SolidWorks/Onshape 用户迁移成本 |

---

## 五、生态趋势信号

本周最强烈的信号是 **"LLM Agent 与 CAD 内核深度耦合"** 这一拐点正式出现：一端是 `text-to-cad`、`CADAM`、`SimpleCADAPI`、`anvilate` 等"意图→几何"的上层入口，另一端是 `occt-wasm`、`brepjs`、`cadrum`（Rust+静态链接 OCCT）、`replicad` 等"浏览器/边缘端可调用内核"的基础设施，中间由 `FreeCAD-MCP`、`FreeCAD-AI`、`Kiln` 等 MCP/插件桥接。其次，**机械与电子的开源融合** 在 OSHOP 2026 现场首次被正式"同台对比"，配合 Keychron 公开 STEP/DXF/DWG 工业设计资产的风潮，开源硬件的全栈可复现性进入新阶段。最后，**消费/工业边界进一步模糊**：Prusa CORE One+ INDX 与 Bambu Lab 内容生态并行扩张，催生 `bambuddy`、`ha-bambulab`、`Spoolman` 等运维/集成层工具的持续活跃。

---

## 六、值得关注

1. **`earth

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*