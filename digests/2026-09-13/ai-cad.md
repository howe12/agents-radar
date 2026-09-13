# CAD/机械结构开源动态日报 2026-09-13

> 数据来源: GitHub Search API (102 仓库) | ArXiv cs.GR+cs.CG (0 篇论文) | RSS 新闻 (4 条) | 生成时间: 2026-09-13 02:36 UTC

---

# CAD/机械结构开源动态日报
**日期：2026-09-11**

---

## 📌 今日速览

今日 FreeCAD 生态仍是开源 CAD 领域的最大焦点：官方博客更新了 WIP 周报与一个全新的 **Microwave Workbench**（微波/射频工作台），同时 FreeCAD 周边周边商品店上线，社群热度持续走高。GitHub 端，AI Agent 与 CAD 集成的趋势进一步加强——`neka-nat/freecad-mcp`、`codeofaxel/Kiln`、`NiJingzhe/SimpleCADAPI` 等多个项目以 MCP / Agent-native 协议接入 LLM，实现"对话式建模"。3D 打印侧，Prusa 发布 **Prusament PLA ColorMix**，仅用 5 卷耗材即可混出 45 种颜色，对 Maker 配色工作流意义重大。

---

## 📰 行业脉搏

1. **FreeCAD 推出全新 Microwave Workbench** — [Spotted: A new Microwave Workbench](https://blog.freecad.org/2026/09/08/spotted-a-new-microwave-workbench/)  
   面向射频/微波器件设计场景，扩展 FreeCAD 在电子-机械-电磁一体化建模中的适用面。

2. **WIP Wednesday #2026-09-09** — [WIP Wednesday, 9 September 2026](https://blog.freecad.org/2026/09/09/wip-wednesday-9-september-2026/)  
   持续披露 FreeCAD 主线开发进度，是评估 1.0 路线图与日常 commit 质量的第一手资料。

3. **Prusament PLA ColorMix：5 卷耗材 = 45 种配色** — [Prusa Blog](https://blog.prusa3d.com/prusament-pla-colormix-print-45-color-shades-using-just-five-filament-spoools-and-more_137835/)  
   通过混色策略显著降低小批量定制件的颜色管理成本，对 OEM、外观件、教育/创客场景都是好消息。

4. **FreeCAD 周边商品店上线** — [FreeCAD Swag Shop Now Open!](https://blog.freecad.org/2026/09/11/freecad-swag-shop-now-open/)  
   社区变现与品牌建设进一步成熟，侧面反映 FreeCAD 项目进入可持续运营阶段。

---

## 🔬 研究前沿

> **今日 ArXiv cs.GR / cs.CG 暂无新增相关论文。** 建议关注近期延续性方向：基于 B-Rep 的可微渲染、NeRF/SDF 用于 CAD 反向重建、几何深度学习的鲁棒谓词实现。后续日报将持续追踪。

---

## 🛠️ 重点项目

### 🖥️ CAD 平台与编辑器

- **[FreeCAD/FreeCAD](https://github.com/FreeCAD/FreeCAD)** — ⭐33,463  
  跨平台开源参数化 3D 建模器的事实标准，OCCT 内核 + Python 脚本 + 丰富工作台生态。

- **[openscad/openscad](https://github.com/openscad/openscad)** — ⭐10,198  
  "程序员的实体建模器"，以纯代码描述几何，是参数化设计与版本控制的天然形态。

- **[LibreCAD/LibreCAD](https://github.com/LibreCAD/LibreCAD)** — ⭐6,355  
  跨平台 2D CAD，原生 DXF/DWG 读写，是工程图纸场景下最成熟的开源选择。

- **[xiangechen/chili3d](https://github.com/xiangechen/chili3d)** — ⭐4,831  
  纯浏览器端 3D CAD，无安装即用，展示了 Web CAD 与 OpenCascade 集成的新范式。

### 📐 计算几何与内核

- **[CGAL/cgal](https://github.com/CGAL/cgal)** — ⭐6,037  
  计算几何算法库"百科全书"，三角化、布尔运算、最短路径、几何处理的事实工业标准。

- **[MeshInspector/MeshLib](https://github.com/MeshInspector/MeshLib)** — ⭐820  
  C++ 3D 几何处理 SDK：mesh 布尔、修复、抽稀、重网格、点云三角化与 ICP，提供 Python/C#/JS 绑定。

### 🧬 创成式与参数化设计

- **[partcad/partcad](https://github.com/partcad/partcad)** — ⭐493  
  面向"可制造物理产品"的包管理器与数字主线（Digital Thread）标准，致力于模块化硬件设计的复用与协同。

### 🖨️ 3D 打印与制造

- **[MarlinFirmware/Marlin](https://github.com/MarlinFirmware/Marlin)** — ⭐17,578  
  全球装机量最大的 3D 打印机固件，覆盖 8/32 位 MCU 与几乎所有主流机型。

- **[OrcaSlicer/OrcaSlicer](https://github.com/OrcaSlicer/OrcaSlicer)** — ⭐15,677  
  多品牌切片软件，支持 Bambu / Prusa / Voron / Creality 等，代表新一代社区切片器方向。

- **[codeofaxel/Kiln](https://github.com/codeofaxel/Kiln)** — ⭐57  
  开源 MCP 服务器，把 AI Agent（Claude/Codex/Cursor）直接接入 Bambu / Creality / Prusa / Klipper 等全系列打印设备，是"AI → 设计 → 切片 → 打印"闭环的关键拼图。

### 🔗 文件格式与互操作

- **[f3d-app/f3d](https://github.com/f3d-app/f3d)** — ⭐4,688  
  快速极简的 3D 查看器，跨平台、轻量级，是 STEP/STL/OBJ/GIF 等格式预览与演示的事实工具。

- **[andymai/occt-wasm](https://github.com/andymai/occt-wasm)** — ⭐51  
  将完整 OpenCascade (OCCT) 编译为 ~4MB brotli 的 WebAssembly，开启浏览器原生 B-Rep 建模的可能性。

### 🐍 Code-CAD 与脚本化

- **[earthtojake/text-to-cad](https://github.com/earthtojake/text-to-cad)** — ⭐15,461  
  为 CAD/CAE/CAM 场景设计的 Agent Skills 库，把 LLM 与几何生成流程桥接起来。

- **[CadQuery/cadquery](https://github.com/CadQuery/cadquery)** — ⭐5,753  
  基于 OCCT 的 Python 参数化脚本框架，工业级 Code-CAD 主流选项之一。

- **[gumyr/build123d](https://github.com/gumyr/build123d)** — ⭐3,094  
  现代化的 Python CAD 编程库，对 CadQuery 的范式做了大幅改进，与 build123d 生态良好对接。

- **[neka-nat/freecad-mcp](https://github.com/neka-nat/freecad-mcp)** — ⭐2,190  
  FreeCAD MCP 服务器，让 LLM 通过 Model Context Protocol 直接操作 FreeCAD 模型。

---

## 🌱 生态趋势信号

**AI Agent 正在成为开源 CAD/制造工具链的新一层"操作系统"。** 仅今日活跃列表中，就出现了 `neka-nat/freecad-mcp`、`blwfish/freecad-mcp`、`spkane/freecad-addon-robust-mcp-server`、`ghbalf/freecad-ai`、`codeofaxel/Kiln`、`NiJingzhe/SimpleCADAPI`、`earthtojake/text-to-cad` 等近 10 个 AI-CAD 项目，协议上统一收敛到 MCP，定位上覆盖"自然语言→几何"、"AI→切片→打印"、"Agent→B-Rep 重建"三条链路。**浏览器化与 WASM 化是另一条主线**——`chili3d`、`occt-wasm`、`brepjs` 把 OCCT 这一桌面时代内核推进到 Web，让"零安装 B-Rep 建模"成为可能。**Bambu Lab 生态的"去云化"加速**：`bambuddy`、`ha-bambulab`、`thingraph/gcode-viewer` 等本地化工具在切片与可视化层提供替代方案，与 Prusa 的 ColorMix 材料策略形成"硬件材料 + 软件本地化"双轨并行格局。

---

## ⭐ 值得关注

1. **AI Agent × CAD 的"协议统一"窗口期**  
   [neka-nat/freecad-mcp](https://github.com/neka-nat/freecad-mcp) + [codeofaxel/Kiln](https://github.com/codeofaxel/Kiln) + [earthtojake/text-to-cad](https://github.com/earthtojake/text-to-cad) 已分别覆盖建模、打印与 Agent 技能层；MCP 正成为开源 CAD 与 LLM 之间的"事实桥梁"，未来 6 个月谁率先做出稳定的端到端 Agent-CAD 工作流，谁就可能占据下一代交互入口。

2. **[occt-wasm](https://github.com/andymai/occt-wasm) 把 OCCT 装进浏览器**  
   ~4MB brotli 的完整 B-Rep 内核进入 Web 平台，意味着浏览器内 STEP 编辑、在线协作建模、零部署企业级 CAD 都成为可能。这是一项"基础设施级"的进展，建议长期跟踪其性能与 API 稳定性。

3. **Prusament PLA ColorMix 重塑小批量配色经济性**  
   [Prusa Blog](https://blog.prusa3d.com/prusament-pla-colormix-print-45-color-shades-using-just-five-filament-spoools-and-more_137835/) 用 5 卷基色实现 45 种成品色，对 OEM 打样、教育套件、个性化产品是降本利器；同时也会挤压传统单一耗材品牌的差异化空间，值得材料与切片两端共同跟进。

---

*本日报基于 FreeCAD Blog、Prusa Blog、GitHub 102 个近 7 日活跃仓库综合生成。*

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*