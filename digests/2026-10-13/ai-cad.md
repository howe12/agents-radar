# CAD/机械结构开源动态日报 2026-10-13

> 数据来源: GitHub Search API (110 仓库) | ArXiv cs.GR+cs.CG (0 篇论文) | RSS 新闻 (5 条) | 生成时间: 2026-10-13 04:58 UTC

---

# 📋 CAD/机械结构开源动态日报

**日期：2026 年 10 月 9 日**

---

## 1. 今日速览

今日 FreeCAD 生态连发三条动态（26.3 RC1、BIM Meetups 启动、WIP Wednesday），标志主线版本与建筑信息模型双向发力；与此同时，GitHub 上 MCP（Model Context Protocol）相关 CAD 项目本周集中涌现——FreeCAD、Rhino、3D 打印端均出现 AI 助手型服务器，叠加 text-to-CAD 头部品类持续领跑，**AI Agent × CAD** 正在从单点工具走向"协议化、可互操作"的工程流水线。几何内核侧，OCCT 的 Rust/WASM 封装与浏览器原生 B-Rep 引擎成为新的活跃增长点。**今日 ArXiv cs.GR/cs.CG 暂无新论文入库**，研究动态相对平静。

---

## 2. 行业脉搏

- **[FreeCAD 26.3 Release Candidate 1](https://blog.freecad.org/2026/10/08/freecad-26-3-release-candidate-1/)** — 主线版本进入 RC 阶段，意味着 26.3 正式版临近，测试与回归窗口打开，对所有下游工作台和 addon 维护者至关重要。
- **[Announcing FreeCAD BIM meetups](https://blog.freecad.org/2026/10/09/announcing-freecad-bim-meetups/)** — 官方组织 BIM 线下聚会，反映 FreeCAD 在 Arch/BIM 工作方向上的社区化运营正在加强，弥补其相对 IFC/BIM 商业软件的生态短板。
- **[WIP Wednesday, 7 October 2026](https://blog.freecad.org/2026/10/07/wip-wednesday-7-october-2026/)** — 周期性开发周报，可观察 Part/Sketcher/Path 等核心模块的合并进度，是评估 FreeCAD 路线图最直接的窗口。
- **[Bambu Lab 获两项 Parenting Awards](https://blog.bambulab.com/our-3d-printers-just-won-two-parenting-awards/)** — 消费级 3D 打印机品牌继续向家庭/教育场景渗透，对开源切片器与 Klipper 生态的潜在用户基数有间接拉动。
- **[Prusa 万圣节多彩发光耗材促销](https://blog.prusa3d.com/get-ready-for-halloween-with-our-spooky-filament-offer_138639/)** — 节日营销层面信息，提示消费级耗材市场的细分场景正在被持续开发。

---

## 3. 研究前沿

⚠️ **今日 ArXiv cs.GR / cs.CG 类目暂无新论文被抓取**，研究动态一栏空缺。建议明日/下周继续关注以下方向的潜在产出：
- **B-Rep 与 CSG 的神经隐式表示 / 文本驱动三维生成**
- **GPU 加速布尔运算与碰撞检测**
- **基于物理约束的拓扑/尺寸优化**

如需补充，可手动检索 `cs.GR` 与 `cs.CG` 的最新 daily 列表。

---

## 4. 重点项目

### 🖥️ CAD 平台与编辑器

| 仓库 | Star | 说明 |
|---|---|---|
| **[FreeCAD/FreeCAD](https://github.com/FreeCAD/FreeCAD)** | ⭐ 34,223 | 开源多平台参数化 3D 建模器事实标准，26.3 RC 推进中 |
| **[openscad/openscad](https://github.com/openscad/openscad)** | ⭐ 10,435 | "程序员专属"实体建模语言，对脚本化、参数化设计范式影响深远 |
| **[solvespace/solvespace](https://github.com/solvespace/solvespace)** | ⭐ 4,191 | 轻量参数化 2D/3D CAD，约束求解器独立实现，适合嵌入式/教育场景 |
| **[xiangechen/chili3d](https://github.com/xiangechen/chili3d)** | ⭐ 4,906 | 完全运行于浏览器的 3D CAD，免安装、可分享链接，是 Web CAD 阵营代表 |
| **[HakanSeven12/OpenCADStudio](https://github.com/HakanSeven12/OpenCADStudio)** | ⭐ 2,911 | Rust 写的 CAD 应用，含 DWG/DXF 支持与 GPU 加速渲染，体现 CAD 重写语言迁移趋势 |
| **[bherbruck/solidcraft](https://github.com/bherbruck/solidcraft)** | ⭐ 1,149 | 纯 Rust 参数化 3D CAD，桌面/Web/自动化（MCP）三端覆盖，Rust CAD 新生力量 |

### 📐 计算几何与内核

| 仓库 | Star | 说明 |
|---|---|---|
| **[Open-Cascade-SAS/OCCT](https://github.com/Open-Cascade-SAS/OCCT)** | ⭐ 2,996 | 开源 3D CAD/CAM/CAE 平台级几何内核，FreeCAD、KiCad 等均依赖其 |
| **[CGAL/cgal](https://github.com/CGAL/cgal)** | ⭐ 6,076 | 计算几何算法库，几乎所有学术与工业几何处理工具的"标配" |
| **[andymai/brepjs](https://github.com/andymai/brepjs)** | ⭐ 117 | 浏览器端精确 B-Rep 几何库，把 OCCT 能力搬进 Web |
| **[andymai/occt-wasm](https://github.com/andymai/occt-wasm)** | ⭐ 62 | OCCT 编译为 WASM（~4MB brotli），干净的 TS API，是 Web CAD 的底层燃料 |
| **[google/draco](https://github.com/google/draco)** | ⭐ 7,514 | 3D 网格/点云压缩库，传输与存储优化的事实标准 |

### 🧬 创成式与参数化设计

| 仓库 | Star | 说明 |
|---|---|---|
| **[earthtojake/text-to-cad](https://github.com/earthtojake/text-to-cad)** | ⭐ 19,718 | "给 Agent 装上 CAD 超能力"，text-to-CAD 赛道的头部 SDK |
| **[pascalorg/editor](https://github.com/pascalorg/editor)** | ⭐ 24,827 | 开源 3D 建筑编辑器，本地 CLI + MCP 工具，面向人与 AI 代理协作的工作流 |
| **[Adam-CAD/CADAM](https://github.com/Adam-CAD/CADAM)** | ⭐ 5,253 | 开源 text-to-CAD Web 应用，把"自然语言→CAD"封装为零门槛前端 |
| **[tanishqbhattad/rhino-mcp](https://github.com/tanishqbhattad/rhino-mcp)** | ⭐ 30 | Rhino 8 的 MCP 服务器，128 个工具，意图校验能发现"几何合法但语义错误"的隐患 |
| **[clay-good/anvilate](https://github.com/clay-good/anvilate)** | ⭐ 10 | 本地优先、面向机械工程师的设计 Agent，输出**物理验证过的** STEP/DXF 与可编辑 Python 源码——直击工业落地痛点 |
| **[codeofaxel/Kiln](https://github.com/codeofaxel/Kiln)** | ⭐ 92 | 3D 打印方向的 MCP 服务器，覆盖 Bambu/Creality/Prusa/Klipper/Marlin，**设计→切片→打印**一键打通 |

### 🖨️ 3D 打印与制造

| 仓库 | Star | 说明 |
|---|---|---|
| **[MarlinFirmware/Marlin](https://github.com/MarlinFirmware/Marlin)** | ⭐ 17,618 | RepRap 阵营事实标准固件，几乎所有非封闭式 3D 打印机的运行基座 |
| **[OrcaSlicer/OrcaSlicer](https://github.com/OrcaSlicer/OrcaSlicer)** | ⭐ 15,933 | 主流多品牌切片器，对 Bambu/Prusa/Voron/Creality 等支持全面 |
| **[Ultimaker/Cura](https://github.com/Ultimaker/Cura)** | ⭐ 7,051 | 老牌切片 GUI，Uranium 框架仍是行业参考架构 |
| **[mainsail-crew/mainsail](https://github.com/mainsail-crew/mainsail)** | ⭐ 2,225 | Klipper 阵营最流行的 Web 前端，3D 打印"小型工控"代表 |
| **[maziggy/bambuddy](https://github.com/maziggy/bambuddy)** | ⭐ 3,081 | 自托管 Bambu Lab 控制中心，去云化、本地化，对应"数据主权"诉求 |

### 🔗 文件格式与互操作

| 仓库 | Star | 说明 |
|---|---|---|
| **[f3d-app/f3d](https://github.com/f3d-app/f3d)** | ⭐ 4,785 | 快速极简的 3D 查看器，支持 STL/STEP/GLTF 等多格式即开即看 |
| **[fougue/mayo](https://github.com/fougue/mayo)** | ⭐ 2,293 | Qt + OCCT 的 3D CAD 查看与转换器，企业/工程师桌面常见工具 |
| **[bldrs-ai/Share](https://github.com/bldrs-ai/Share)** | ⭐ 189 | 浏览器端 BIM & CAD 协作平台，支持 IFC/STEP/STL/OBJ/GLTF，团队审图友好 |
| **[Travelerrrrrr/LCSC3D](https://github.com/Travelerrrrrr/LCSC3D)** | ⭐ 117 | 立创商城批量 STEP 下载 + Altium 库生成，**国内硬件工程师工作流**利器 |
| **[pzfreo/draftwright](https://github.com/pzfreo/draftwright)** | ⭐ 74 | build123d/STEP 文件自动出工程图，缩短 Code-CAD → 图纸的最后一公里 |

### 🐍 Code-CAD 与脚本化

| 仓库 | Star | 说明 |
|---|---|---|
| **[CadQuery/cadquery](https://github.com/CadQuery/cadquery)** | ⭐ 5,924 | 基于 OCCT 的 Python 参数化 CAD 脚本框架，工业界事实标准 |
| **[gumyr/build123d](https://github.com/gumyr/build123d)** | ⭐ 3,395 | 新一代 Python CAD 编程库，对标/接续 CadQuery，语法更现代 |
| **[BelfrySCAD/BOSL2](https://github.com/BelfrySCAD/BOSL2)** | ⭐ 2,407 | OpenSCAD 函数/附件库，让 OpenSCAD 真正"可工程化" |
| **[Leathong/openscad-LSP](https://github.com/Leathong/openscad-LSP)** | ⭐ 170 | OpenSCAD 的 LSP 实现，补齐 IDE 智能提示/跳转等现代开发体验 |
| **[FrontISTR/FEM_FrontISTR](https://github.com/FrontISTR/FEM_FrontISTR)** | ⭐ 37 | FreeCAD 内的并行非线性 FEM 求解器，将 CAE 能力嫁接到开源 CAD 平台 |

---

## 5. 生态趋势信号

本周最强烈的信号是 **"AI Agent 协议化"**：从 FreeCAD、Rhino 到 Bambu/Creality，**MCP 服务器**正在成为 CAD/3D 打印生态的"USB-C"——不同工具用同一协议对接 Claude/Codex/Gemini/Ollama，本质上是把 LLM 写进了 CAD 工具链的调用层。配合 **text-to-CAD**（text-to-cad、CADAM、anvilate）形成"输入端自然语言化、输出端工程化（STEP/DXF + 可编辑源码）"的双向收敛。**WebAssembly** 是另一条暗线：OCCT-WASM、brepjs、FreeCAD-web、Chili3D 同步活跃，意味着 **CAD 正在脱离"重客户端"**，转向"链接可分享、浏览器即工作台"的协作范式。**Rust 重写潮**（OpenCADStudio、solidcraft、cadrum、openscad-LSP）则指向内核性能与内存安全的长期诉求。

---

## 6. 值得关注

1. **[FreeCAD

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*