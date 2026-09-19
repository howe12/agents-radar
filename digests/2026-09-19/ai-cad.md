# CAD/机械结构开源动态日报 2026-09-19

> 数据来源: GitHub Search API (99 仓库) | ArXiv cs.GR+cs.CG (8 篇论文) | RSS 新闻 (5 条) | 生成时间: 2026-09-19 02:39 UTC

---

# 📊 CAD/机械结构开源动态日报

**日期：2026-09-18** · 数据源：FreeCAD Blog、Prusa、Bambu Lab、ArXiv cs.GR/cs.CG、GitHub Trending

---

## 1. 今日速览

今天开源 CAD 生态呈现出明显的"AI 原生 + Web 化"双线推进：FreeCAD 推出 Lens 测试服务器，标志着长期被诟病的测试基础设施开始系统化升级；GitHub 上围绕 FreeCAD/OpenSCAD 的 MCP/AI 集成项目持续涌现（`freecad-mcp`、`freecad-ai`、`Multi-Agent-CAD`、`AgentSCAD`、`Kiln`），文本到 CAD 的范式正从实验走向可用。同时，基于 OpenCASCADE 的 Rust/WASM 重写（`cadrum`、`occt-wasm`、`brepjs`）让 B-Rep 内核首次具备跨平台浏览器级部署能力。学术侧，`S4R` 与 `PART` 两篇论文将 Transformer 引入刚体干涉消除与零件装配检索，是 CAD 装配自动化的重要里程碑。

---

## 2. 行业脉搏

- 🧪 **[FreeCAD 推出 Lens 测试服务器](https://blog.freecad.org/2026/09/18/announcing-lens-test-server/)** — 长期困扰 FreeCAD 的回归测试短板有望得到系统性补强，对插件生态和 LTS 发行意义重大。
- 🛠️ **[WIP Wednesday, 16 Sep 2026](https://blog.freecad.org/2026/09/16/wip-wednesday-16-september-2026/)** — FreeCAD 主线开发周报，反映 Part Design、Toponaming、装配等核心模块的活跃进展。
- ✈️ **[Prusament PLA Lightweight：比常规 PLA 轻 65%](https://blog.prusa3d.com/prusament-pla-lw-65-lighter-than-regular-pla-perfect-choice-for-aircraft-cosplay-and-more_138059/)** — 面向飞行器、Cosplay 的低密度长丝，丰富了轻量化结构件的可选材料矩阵。
- 🎓 **[Bambu Lab 夏季 STEM 3D 打印工作坊](https://blog.bambulab.com/the-summer-stem-series-3d-printing-workshops/)** — 厂商级教育下沉，影响下一代 CAD/打印用户构成。
- ♿ **[七家组织、一群创客：3D 打印助力无障碍](https://blog.bambulab.com/seven-organizations-one-maker-community-3d-printing-in-the-service-of-accessibility/)** — 社区驱动的辅助器具项目，反映开源硬件在医疗/无障碍场景的渗透。

---

## 3. 研究前沿

- 📄 **[S4R: Scaling for Rigid-Body Interpenetration Resolution](http://arxiv.org/abs/2609.20524v1)** — 针对程序化装配/生成场景中频繁出现的刚体穿透问题，给出可扩展的 Transformer 求解方案，对自动装配、机构验证意义重大。
- 📄 **[PART: Learning 3D Part Assembly and Retrieval with Transformers](http://arxiv.org/abs/2609.19872v1)** — 统一零件装配与检索任务，为 CAD 装配体的"按语义组合"与零件库检索提供新范式。
- 📄 **[DELUGE: Decompressed Entropy-coded Live Unstructured Geometry Exchange](http://arxiv.org/abs/2609.19750v1)** — 实时粒子流压缩/传输方案，可直接对接 CAE 中的流体、烟雾、颗粒介质仿真。
- 📄 **[LYRIC: Language-Driven Physics-Based Character Control](http://arxiv.org/abs/2609.19688v1)** — 用自然语言驱动物理一致的接触富集控制，对机器人/数字孪生中"语言-机构"链路具有迁移价值。
- 📄 **[Printing the Underdetermined: Multi-solutionness in Figurative Paintings](http://arxiv.org/abs/2609.19782v1)** — 把"3D 重建不存在唯一解"显式建模为可打印多重结果，对创成式 CAD 与逆向工程有方法论启发。

---

## 4. 重点项目

### 🖥️ CAD 平台与编辑器

| 仓库 | ⭐ | 一句话 |
|---|---|---|
| [FreeCAD/FreeCAD](https://github.com/FreeCAD/FreeCAD) | 33,624 | 跨平台开源参数化 3D 建模器事实标准，机械设计生态核心 |
| [openscad/openscad](https://github.com/openscad/openscad) | 10,233 | 程序员友好的脚本式实体建模器，参数化/创成式设计的传统入口 |
| [solvespace/solvespace](https://github.com/solvespace/solvespace) | 4,163 | 轻量级 2D/3D 参数化 CAD，适合教学与嵌入式工具链 |
| [LibreCAD/LibreCAD](https://github.com/LibreCAD/LibreCAD) | 6,388 | 成熟的 2D DXF/DWG 工具，机械制图长尾场景的稳定选择 |
| [jupytercad/JupyterCAD](https://github.com/jupytercad/JupyterCAD) | 233 | JupyterLab 内的协作式 3D 几何建模，把 CAD 拉进 Notebook 工作流 |

### 📐 计算几何与内核

| 仓库 | ⭐ | 一句话 |
|---|---|---|
| [fougue/mayo](https://github.com/fougue/mayo) | 2,219 | 基于 Qt + OpenCASCADE 的 3D CAD 查看与转换器，工业级桌面工具 |
| [lzpel/cadrum](https://github.com/lzpel/cadrum) | 59 | 用 Rust 静态链接 headless OpenCASCADE 的 CAD crate，原生 + WASM 双跑 |
| [andymai/occt-wasm](https://github.com/andymai/occt-wasm) | 54 | OpenCASCADE 编译到 WebAssembly，~4MB brotli，纯浏览器 B-Rep 内核 |
| [pyvista/pyvista](https://github.com/pyvista/pyvista) | 3,817 | Python 3D 网格可视化与分析，CAE/CAD 后处理的事实标准之一 |
| [mikedh/trimesh](https://github.com/mikedh/trimesh) | 3,681 | 三角网格处理库，STL/OBJ 流水线不可或缺的轻量底座 |

### 🧬 创成式与参数化设计

| 仓库 | ⭐ | 一句话 |
|---|---|---|
| [partcad/partcad](https://github.com/partcad/partcad) | 495 | 面向可制造物理产品的包管理器（TDP/Digital Thread），打通 AI 辅助生命周期 |
| [kellerlabs/homeracker](https://github.com/kellerlabs/homeracker) | 503 | 完全模块化的 3D 打印机架系统，参数化结构件的范本 |
| [manyfold3d/manyfold](https://github.com/manyfold3d/manyfold) | 2,165 | 自托管 3D 打印文件数字资产管理，对设计资产沉淀意义重大 |
| [clay-good/anvilate](https://github.com/clay-good/anvilate) | 8 | 本地优先的机械设计代理：自然语言 → 物理校验的 STEP/DXF，覆盖 SolidWorks/NX 工作流 |

### 🖨️ 3D 打印与制造

| 仓库 | ⭐ | 一句话 |
|---|---|---|
| [MarlinFirmware/Marlin](https://github.com/MarlinFirmware/Marlin) | 17,590 | 装机量最大的 3D 打印机固件，机械执行端的开源底座 |
| [OrcaSlicer/OrcaSlicer](https://github.com/OrcaSlicer/OrcaSlicer) | 15,717 | 跨品牌 G-code 生成器，覆盖 Bambu/Prusa/Voron/Creality 等主流机型 |
| [Ultimaker/Cura](https://github.com/Ultimaker/Cura) | 7,040 | 基于 Uranium 的成熟切片 GUI，工业/消费两端的常青树 |
| [sn4k3/UVtools](https://github.com/sn4k3/UVtools) | 1,622 | MSLA/DLP 文件分析、标定、修复与转换，光固化利器 |
| [Sienci-Labs/gsender](https://github.com/Sienci-Labs/gsender) | 370 | grbl/grblHAL CNC 统一控制台，木工/轻量化铣削入口 |
| [protoloft/klipper_z_calibration](https://github.com/protoloft/klipper_z_calibration) | 1,258 | Klipper 自校准 Z 偏移插件，闭环精度的开源实践 |

### 🔗 文件格式与互操作

| 仓库 | ⭐ | 一句话 |
|---|---|---|
| [f3d-app/f3d](https://github.com/f3d-app/f3d) | 4,699 | 快速极简 3D 查看器，STEP/STL/GLTF 一站式预览 |
| [bldrs-ai/Share](https://github.com/bldrs-ai/Share) | 186 | 浏览器端 BIM/CAD 协同平台，原生支持 IFC/STEP/STL/glTF |
| [andymai/brepjs](https://github.com/andymai/bre

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*