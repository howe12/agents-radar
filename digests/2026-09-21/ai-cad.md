# CAD/机械结构开源动态日报 2026-09-21

> 数据来源: GitHub Search API (105 仓库) | ArXiv cs.GR+cs.CG (0 篇论文) | RSS 新闻 (6 条) | 生成时间: 2026-09-21 02:48 UTC

---

# CAD/机械结构开源动态日报
**日期：2026 年 9 月 18 日**

---

## 1. 今日速览

今天 CAD 开源生态呈现三大主线：一是 **FreeCAD 生态持续扩展**，官方宣布 Lens 测试服务器上线，叠加社区维护的 5+ 个 MCP / AI 插件（freecad-mcp、freecad-ai、SimpleCADAPI 等），FreeCAD 正快速成为 LLM 代理操作 CAD 的事实标准；二是 **Text-to-CAD 工具链全面爆发**，从 earthtojake/text-to-cad 的技能库、Adam-CAD/CADAM 的 Web 应用，到 Clay-Good/anvilate 直出可编辑 STEP 文件，AI 编程式 CAD 走向"工程师可生产"阶段；三是 **浏览器原生 B-Rep 走向成熟**，occt-wasm、brepjs、bldrs-ai/conway 让 STEP 文件无需本地 OCCT 即可在 Web 中重建，chiLi3d 4,800+ Star 与 earthtojake 16,000+ Star 印证该赛道热度。硬件侧 Prusa 推出 65% 减重的 PLA Lightweight，材料革新继续为创成式设计腾出空间。

---

## 2. 行业脉搏

**🔹 FreeCAD 官方 Lens 测试服务器上线** — [FreeCAD Blog](https://blog.freecad.org/2026/09/18/announcing-lens-test-server/)
FreeCAD 推出 Lens 公共测试平台，意味着项目从纯本地应用向"云端测试 + 在线协作"演化，对 FreeCAD 走向企业用户、收集真实负载下的回归数据至关重要。

** FreeCAD WIP Wednesday #16** — [FreeCAD Blog](https://blog.freecad.org/2026/09/16/wip-wednesday-16-september-2026/)
常规开发进展汇总，伴随 Lens 上线，社区迭代节奏加快，新功能通常在此栏目先行曝光。

**🔹 Prusament PLA Lightweight：65% 减重** — [Prusa Blog](https://blog.prusa3d.com/prusament-pla-lw-65-lighter-than-regular-pla-perfect-choice-for-aircraft-cosplay-and-more_138059/)
一种密度显著低于常规 PLA 的新耗材，让 FDM 件在无人机骨架、cosplay 头盔、航模等场景首次具备"以塑代轻木/树脂"的可能性，对拓扑优化结果的制造可达性意义重大。

**🔹 Bambu Lab × Bambū Desserts 跨界合作** — [Bambu Lab](https://blog.bambulab.com/when-3d-printing-meets-a-sweet-treat-bambu-lab-and-bambu-desserts-drinks-team-up-for-a-one-of-a-kind-collaboration/)
食品级模具打印商业案例，体现消费级 3D 打印正向小批量定制食品器具渗透。

**🔹 Bambu Lab 七家无障碍组织共建物联网打印社区** — [Bambu Lab](https://blog.bambulab.com/seven-organizations-one-maker-community-3d-printing-in-the-service-of-accessibility/)
开源/低成本制造继续与医疗辅具、康复设备结合，对 DFAM（面向增材的设计）和 DFM 工作流社区（参见 FreeCAD-DFM-Workbench）形成需求拉动。

---

## 3. 研究前沿

> 📭 今日 ArXiv cs.GR / cs.CG 无新提交。略。

---

## 4. 重点项目

### ️ CAD 平台与编辑器

| 仓库 | ⭐ | 一句话说明 |
|---|---|---|
| [FreeCAD/FreeCAD](https://github.com/FreeCAD/FreeCAD) | 33,677 | 开源多平台参数化 3D 建模器事实标准；Lens 上线后正向云端测试演进 |
| [pascalorg/editor](https://github.com/pascalorg/editor) | 24,170 | 开源 3D 建筑编辑器，本地 CLI + MCP 工具，原生面向人与 AI 代理工作流 |
| [earthtojake/text-to-cad](https://github.com/earthtojake/text-to-cad) | 16,191 | CAD/CAE/CAM 代理技能库，将"自然语言→几何"做成可复用工具集 |
| [openscad/openscad](https://github.com/openscad/openscad) | 10,249 | 程序员向参数化 3D CAD，是 LLM 生成代码最稳定的"目标语言"之一 |
| [xiangechen/chili3d](https://github.com/xiangechen/chili3d) | 4,849 | 完全运行在浏览器中的 3D CAD，依赖 WebAssembly OCCT 内核 |
| [solvespace/solvespace](https://github.com/solvespace/solvespace) | 4,165 | 紧凑高效的 2D/3D 参数化求解器，适合约束求解类教学与原型 |
| [Keychron Keyboards-Hardware-Design](https://github.com/Keychron/Keychron-Keyboards-Hardware-Design) | 3,691 | 100+ 键盘鼠标工业设计源文件（STEP/DXF/DWG/PDF），是难得多产的"开放工业设计资产库" |

### 📐 计算几何与内核

| 仓库 |  | 一句话说明 |
|---|---|---|
| [f3d-app/f3d](https://github.com/f3d-app/f3d) | 4,707 | 基于 VTK 的极简快速 3D 查看器，支持 STEP/3MF/GLTF 等 |
| [cdcseacave/openMVS](https://github.com/cdcseacave/openMVS) | 4,127 | 开源多视角立体重建库，是扫描→网格→CAD 反向工程的关键工具 |
| [pyvista/pyvista](https://github.com/pyvista/pyvista) | 3,817 | Python 3D 可视化与网格分析，工程与科研的事实标准 |
| [mikedh/trimesh](https://github.com/mikedh/trimesh) | 3,681 | Python 三角网格加载/布尔/分析库，code-CAD 生态的几何底座 |
| [gkjohnson/three-mesh-bvh](https://github.com/gkjohnson/three-mesh-bvh) | 3,489 | three.js 加速射线检测与空间查询；为浏览器端网格处理奠基 |
| [fougue/mayo](https://github.com/fougue/mayo) | 2,226 | Qt + OpenCascade 的 3D CAD 查看器/转换器，桌面侧 STEP/IGES 互操作利器 |
| [polydera/trueform](https://github.com/polydera/trueform) | 145 | 高性能精确 CSG/网格布尔与重网格化引擎，支持 C++/Python/TS 绑定 |

### 🧬 创成式与参数化设计

| 仓库 | ⭐ | 一句话说明 |
|---|---|---|
| [ai-collection/ai-collection](https://github.com/ai-collection/ai-collection) | 9,167 | 生成式 AI 应用全景索引，是观察"AI × 设计"边界的入口 |
| [Pan-Chera/Multi-Agent-CAD](https://github.com/Pan-Chera/Multi-Agent-CAD) | 996 | MAC：解耦多智能体框架，文本→CAD 通过受限测试时算力获得更稳健的几何 |
| [clay-good/anvilate](https://github.com/clay-good/anvilate) | 10 | 开源本地优先的机械设计代理：自然语言→物理校验→参数化 STEP/Python，源码可编辑 |

### 🖨️ 3D 打印与制造

| 仓库 | ⭐ | 一句话说明 |
|---|---|---|
| [MarlinFirmware/Marlin](https://github.com/MarlinFirmware/Marlin) | 17,589 | 3D 打印机固件事实标准，8/32 位 MCU 全平台覆盖 |
| [OrcaSlicer/OrcaSlicer](https://github.com/OrcaSlicer/OrcaSlicer) | 15,736 | 多机型 G-code 生成器（Bambu/Prusa/Voron/VzBot/RatRig/Creality） |
| [Ultimaker/Cura](https://github.com/Ultimaker/Cura) | 7,042 | Uranium 框架上的开源切片 GUI |
| [maziggy/bambuddy](https://github.com/maziggy/bambuddy) | 2,991 | 自托管 Bambu Lab 控制中心，云无关的私有化农场 |
| [Donkie/Spoolman](https://github.com/Donkie/Spoolman) | 2,837 | 3D 打印耗材库存管理，便于产线/工坊成本核算 |

### 🔗 文件格式与互操作

| 仓库 | ⭐ | 一句话说明 |
|---|---|---|
| [andymai/occt-wasm](https://github.com/andymai/occt-wasm) | 55 | OpenCascade 编译到 WebAssembly（约 4MB brotli），干净 TS API；浏览器原生 B-Rep 的引擎基础 |
| [andymai/brepjs](https://github.com/andymai/brepjs) | 110 | TypeScript Web CAD 库，使用精确 B-Rep 几何，让浏览器代码即能编辑实体 |
| [bldrs-ai/Share](https://github.com/bldrs-ai/Share) | 186 | 浏览器端 BIM/CAD 协同查看器，支持 IFC/STEP/STL/OBJ/GLTF |
| [bldrs-ai/conway](https://github.com/bldrs-ai/conway) | 22 | 高性能 IFC/STEP Web 引擎，为大型 BIM 模型的浏览器端装配打开通路 |
| [NepomukWolf/IFC-Language-Server](https://github.com/NepomukWolf/IFC-Language-Server) | 21 | IFC STEP 的 LSP 实现，给编辑器带来 schema 感知的诊断/补全 |
| [pzfreo/draftwright](https://github.com/pzfreo/draftwright) | 67 | build123d/STEP 的自动化工程图生成，补齐 Code-CAD 出图最后一公里 |

###  Code-CAD 与脚本化

| 仓库 | ⭐ | 一句话说明 |
|---|---|---|
| [gumyr/build123d](https://github.com/gumyr/build123d) | 3,165 | Python CAD 编程库，组合式 API 适配"AI 写代码→工程师审"工作

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*