# CAD/机械结构开源动态日报 2026-08-04

> 数据来源: GitHub Search API (114 仓库) | ArXiv cs.GR+cs.CG (1 篇论文) | RSS 新闻 (1 条) | 生成时间: 2026-08-04 01:55 UTC

---

# 📅 CAD/机械结构开源动态日报

> 数据采集日期：综合 FreeCAD Blog、ArXiv cs.GR/cs.CG、GitHub Trending

---

## 1. 今日速览

- FreeCAD 项目发布 7 月 29 日 WIP 周报，社区进入持续迭代阶段。
- ArXiv 出现一篇将自回归骨骼绑定（Autoregressive Rigging）模型从角色迁移到**植物骨架重建**的工作 PlantRig，反映骨骼驱动造型范式正在向非生物结构领域渗透。
- GitHub 上 **AI-Copilot/MCP 类工具** 继续高密度冒头：仅今天就有 FreeCAD MCP ×2、Rhino MCP、Multi-Agent CAD、Anvilate、AgentSCAD、Kiln 等 6+ 个项目活跃，体现 **CAD 与大模型协议（Model Context Protocol）的双向打通** 已成主流方向。
- **Code-CAD 与 Web CAD** 双线并进：CadQuery 仍是 Python 端支柱，而 chili3d、CADAM、text-to-cad 三者把"文本到 STEP/B-Rep"推向浏览器与代理端。
- 3D 打印侧 Marlin、OrcaSlicer、Cura 三大老牌项目持续活跃，叠加 Bambu Lab 自托管生态（bambuddy）、MCP 切片网关（Kiln），形成"开源固件 + 开源切片 + AI 控制器"完整闭环。

---

## 2. 行业脉搏

| # | 动态 | 链接 | 意义 |
|---|------|------|------|
| 1 | **FreeCAD WIP Wednesday — 2026/07/29**：社区汇集了 Part Design、Assembly、Sketcher、TechDraw 等多个工作台的进展汇总 | https://blog.freecad.org/2026/07/29/wip-wednesday-29-july-2026/ | FreeCAD 0.21/1.0 路线图关键节点；社区驱动的开源 CAD 仍是最具活力的下游 |
| 2 | **brlt 高 star 仓库中出现多个 KiCad / LibrePCB / tscircuit 相关 EDA 项目**，表明硬件设计的开源重心正向"原理图即代码"方向迁移 | https://github.com/tscircuit/tscircuit | 硬件 EDA 与机械 CAD 在"以代码描述工程对象"上正在趋同 |
| 3 | **bldrs-ai/Share**（BIM/CAD Web 查看器）和 **bldrs-ai/conway**（高性能 IFC&STEP 引擎）持续活跃，揭示**云原生 AEC/机械模型查看器**已成 SaaS 入口 | https://github.com/bldrs-ai/Share , https://github.com/bldrs-ai/conway | STEP/IFC 不再只是交付格式，正在演化为协作平台的数据底座 |
| 4 | **Hyperganic / Augmenta / Generative Engineering** 三家创成式工程公司开源页面同时活跃，标志**"算法化设计 + 加性制造"** 这个赛道在欧洲与北美并行膨胀 | https://github.com/api-evangelist/hyperganic , https://github.com/api-evangelist/augmenta | 创成式工程从研究走向工业落地的拐点信号 |
| 5 | **OCCT-wasm** 把 OpenCASCADE 编译为 ~4MB brotli 的 WebAssembly，标志**OCCT 正式跨过浏览器门槛** | https://github.com/andymai/occt-wasm | B-Rep 几何引擎首次具备可嵌入到任何 Web 应用的轻量交付能力 |

---

## 3. 研究前沿

> 今日 cs.GR / cs.CG 仅命中 1 篇相关论文，附上评述与延伸思考。

**📄 PlantRig — From Bones to Branches: Adaptation of Autoregressive Rigging Models for Plant Skeletal Reconstruction**
- 作者：Nathan Hu, Yang Yang 等
- 链接：http://arxiv.org/abs/2608.01072v1
- **核心贡献**：把原本用于角色铰接（articulated characters）的自回归骨骼绑定模型 UniRig、SkinTokens 改造为植物骨架预测器，可从点云/图像恢复植物的主干—分支拓扑。
- **对 CAD/机械设计的意义**：
  1. **拓扑先验的迁移潜力**：自回归骨架生成在"树状 / 分形 / 管状"机械结构（线缆、管道、管路网络、桁架、轻量化骨架）上有直接借鉴价值，可作为**自动骨架抽取 + 后续 B-Rep 重建管线**的新方法。
  2. **提示"图结构 → 几何"** 这一新范式成熟，工程 CAD 中的装配树、焊接结构、网状管网可受益于同类图神经方法。
  3. 与今日 GitHub 上的 **anvilate、Multi-Agent CAD、AgentSCAD** 等"自然语言/语义→几何"工作互补，构成**几何生成的两个入口**。

> 备注：今日 ArXiv 仅 1 篇相关命中，意味着研究侧的产出稀薄；建议读者关注即将到来的 SIGGRAPH / Eurographics 季的预印本。

---

## 4. 重点项目

### 🖥️ CAD 平台与编辑器

| 仓库 | ⭐ | 一句话价值 |
|------|---:|-----------|
| [FreeCAD/FreeCAD](https://github.com/FreeCAD/FreeCAD) | 32,601 | 最成熟的开源参数化 3D CAD，C++ 核心 + Python 脚本，对机械工程师的全流程覆盖最完整 |
| [earthtojake/text-to-cad](https://github.com/earthtojake/text-to-cad) | 12,696 | 把"AI Agent 技能"封装成统一的 CAD/CAE/CAM 调用接口，是 **AI × CAD 中间层的事实标准** |
| [openscad/openscad](https://github.com/openscad/openscad) | 9,879 | "程序员的实体建模器"，用脚本描述几何，可复现性强，仍是 Linux 下 Code-CAD 首选 |
| [LibreCAD/LibreCAD](https://github.com/LibreCAD/LibreCAD) | 6,202 | 跨平台 2D CAD（DXF/DWG 双向），机械图纸出图场景不可替代 |
| [CadQuery/cadquery](https://github.com/CadQuery/cadquery) | 5,554 | 基于 OCCT 的 Python 参数化脚本框架——工程师用代码写机械结构的标杆 |
| [CADAM](https://github.com/Adam-CAD/CADAM) | 4,925 | 开源的 **Text-to-CAD Web 应用**，把自然语言翻译成可编辑模型 |
| [xiangechen/chili3d](https://github.com/xiangechen/chili3d) | 4,716 | 浏览器内的 3D CAD 编辑器，零安装即可建模 |
| [solvespace/solvespace](https://github.com/solvespace/solvespace) | 4,075 | 参数化 2D/3D + 运动学约束求解，轻量级装配验证利器 |

### 📐 计算几何与内核

| 仓库 | ⭐ | 一句话价值 |
|------|---:|-----------|
| [CGAL/cgal](https://github.com/CGAL/cgal) | 5,997 | 计算几何算法库，覆盖三角剖分、布尔、凸包等几乎所有底层算法，是学术/工业几何处理的基石 |
| [Open-Cascade-SAS/OCCT](https://github.com/Open-Cascade-SAS/OCCT) | 2,712 | 开源 B-Rep 建模内核，几乎所有非商用 CAD 项目的"几何心脏" |
| [mapbox/earcut](https://github.com/mapbox/earcut) | 2,571 | 最快最小的 JS 多边形三角化库，适合把 2D 工程图直接接入 WebGL 可视化管线 |
| [iShape-Rust/iOverlay](https://github.com/iShape-Rust/iOverlay) | 197 | 支持自相交多边形的高鲁棒布尔运算；可用于复杂零件轮廓数控刀路预处理 |
| [andymai/occt-wasm](https://github.com/andymai/occt-wasm) | 37 | OCCT → WebAssembly，~4MB brotli + TypeScript 干净 API；**让任何 Web 应用都能用上工业级 B-Rep** |
| [andymai/brepjs](https://github.com/andymai/brepjs) | 74 | 基于 OCCT 的 Web 端精确 B-Rep 几何库，是浏览器内 CAD 的"基础设施层" |

### 🧬 创成式与参数化设计

| 仓库 | ⭐ | 一句话价值 |
|------|---:|-----------|
| [Hyperganic](https://github.com/api-evangelist/hyperganic) | — | 慕尼黑/新加坡团队，浏览器内隐式建模 + 格子拓扑优化，对**轻量化零件 3D 打印**直接交付 |
| [Augmenta](https://github.com/api-evangelist/augmenta) | — | 多伦多生成式 AI 公司，建筑 MEP 自动化——机械工程师做管路自动布线可借鉴其思路 |
| [Generative Engineering](https://github.com/api-evangelist/generative-engineering) | — | 伦敦创成式工程平台，并行生成-仿真-验证数千种方案 |
| [armpro24-blip/cad-cae-copilot](https://github.com/armpro24-blip/cad-cae-copilot) | 43 | AI-native CAD/CAE/CAX 工作台，**真实 build123d/OpenCASCADE 几何 + 可编辑参数 + MCP 服务器** |
| [clay-good/anvilate](https://github.com/clay-good/anvilate) | 5 | 本地优先的设计 Agent，自然语言 → **物理校验过的 STEP/DXF**，可直接导入 CATIA/SolidWorks/NX |
| [Pan-Chera/Multi-Agent-CAD](https://github.com/Pan-Chera/Multi-Agent-CAD) | 4 | 解耦的多智能体 Text-to-CAD 框架，提出"约束推理时计算"思路 |
| [deepak-jha-kgp/lemma-design](https://github.com/deepak-jha-kgp/lemma-design) | 3 | 把"概略需求 → 多方案原型 → 可保真测试"的迭代流水线化 |

### 🖨️ 3D 打印与制造

| 仓库 | ⭐ | 一句话价值 |
|------|---:|-----------|
| [MarlinFirmware/Marlin](https://github.com/MarlinFirmware/Marlin) | 17,518 | RepRap/FDM 固件的事实标准，市售 3D 打印机绝大多数出厂预装 |
| [OrcaSlicer/OrcaSlicer](https://github.com/OrcaSlicer/OrcaSlicer) | 15,316 | 面向 Bambu/Prusa/Voron 等主流机的 G-code 切片器，已成为高性能切片新标杆 |
| [Ultimaker/Cura](https://github.com/Ultimaker/Cura) | 7,006 | 老牌切片 GUI + Uranium 框架，对中小企业工位仍是默认 |
| [dw-0/kiauh](https://github.com/dw-0/kiauh) | 4,480 | Klipper 安装/更新助手，Klipper 生态的标准入口 |
| [Sienci-Labs/gsender](https://github.com/Sienci-Labs/gsender) | 362 | 一站式 grbl/grblHAL CNC 控制前端 |
| [XRay3D/GERBER_X3](https://github.com/XRay3D/GERBER_X3) | 252 | **PCB 板铣 G-code 生成器**，把 ECAD 输出直接交给桌面 CNC |
| [DMontgomery40/mcp-3D-printer-server](https://github.com/DMontgomery40/mcp-3D-printer-server) | 221 | 打通 Orca/OctoPrint/Klipper/Prusa/Creality 的 **MCP 控制器**，并支持 STL 缩放/旋转/分割/底座扩展 |
| [maziggy/bambuddy](https://github.com/maziggy/bambuddy) | 2,738 | 自托管 Bambu Lab 控制中心，**告别云端依赖** |
| [codeofaxel/Kiln](https://github.com/codeofaxel/Kiln) | 42 | 面向 AI Agent 的端到端 3D 打印 MCP 服务器，从自然语言到送入 Bambu/Creality/Klipper |
| [Greghesp/ha-bambulab](https://github.com/greghesp/ha-bambulab) | 2,280 | Home Assistant + Bambu Lab 集成，打通 3D 打印与智能家居的最后一公里 |
| [Slicer/Slicer](https://github.com/Slicer/Slicer) | 2,563 | 医学影像/科学可视化老牌 3D 软件，对**医疗 CAD 与逆向工程**显著相关 |

### 🔗 文件格式与互操作

| 仓库 | ⭐ | 一句话价值 |
|------|---:|-----------|
| [f3d-app/f3d](https://github.com/f3d-app/f3d) | 4,591 | 极简快速 3D 查看器，支持 STEP/STL/3MF 等几十种格式，CI/CD 渲染/审阅常用 |
| [partcad/partcad](https://github.com/partcad/partcad) | 481 | 机械零件的"包管理器"，提倡**模块化硬件设计 + 数字主线（Digital Thread）** |
| [bldrs-ai/Share](https://github.com/bldrs-ai/Share) | 181 | 浏览器 BIM/CAD 协作查看器，支持 IFC/STEP/STL/OBJ/glTF |
| [FriendsOfCADability/CADability](https://github.com/FriendsOfCADability/CADability) | 169 |

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*