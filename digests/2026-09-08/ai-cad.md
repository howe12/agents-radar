# CAD/机械结构开源动态日报 2026-09-08

> 数据来源: GitHub Search API (117 仓库) | ArXiv cs.GR+cs.CG (0 篇论文) | RSS 新闻 (5 条) | 生成时间: 2026-09-08 02:32 UTC

---

# CAD/机械结构开源动态日报

**日期**：2026-09-02 ｜ **覆盖仓库**：117 个活跃项目

---

## 1. 今日速览

今日生态呈现三条主线叠加的格局：**3D打印切片软件进入新世代**——PrusaSlicer 3.0 预览发布，预示切片引擎正向云端配置、AI辅助与多机适配演进；**AI 原生 CAD 工作流走向成熟**——text-to-CAD、CadQuery MCP、FreeCAD-AI 等项目持续密集迭代，参数化 B-Rep 与 LLM Agent 的边界正在被重新定义；**浏览器内全栈 CAD 成为现实**——OCCT-WASM、Chili3D、replicad 等把 OpenCASCADE 内核完整搬到 WebAssembly，让"打开网页就能做 B-Rep"不再是空话。学术端今日 cs.GR/cs.CG 论文缺席，但开源仓库本身已成为前沿研究的载体。

---

## 2. 行业脉搏

- **[PrusaSlicer 3.0 Preview – Built for the Future of 3D Printing](https://blog.prusa3d.com/prusaslicer-3-0-preview-built-for-the-future-of-3d-printing_137672/)** — Prusa Blog
  PrusaSlicer 跨入 3.0，预示切片核心将引入新架构并优化多机适配，是与 OrcaSlicer/Cura 形成三方竞争的关键更新。

- **[WIP Wednesday, 2 September 2026](https://blog.freecad.org/2026/09/02/wip-wednesday-2-september-2026/)** — FreeCAD Blog
  社区每周开发进展汇总，反映 FreeCAD 在 Part Design、Assembly、Sketcher 等核心工作台的活跃修复节奏。

- **[One Year On: strengthening IoT Security through Global Certifications and Community Collaboration](https://blog.bambulab.com/one-year-on-strengthening-iot-security-through-global-certifications-and-community-collaboration/)** — Bambu Lab
  拓竹回顾 IoT 安全治理一周年，对应开源社区 `ha-bambulab`、`bambuddy` 等本地化方案的诉求。

- **[Meet the 2026 Bambu Lab School Ambassadors](https://blog.bambulab.com/meet-the-2026-bambu-lab-school-ambassadors/)** — Bambu Lab
  校园大使计划启动，反映 3D 打印厂商正主动培育 K-12 与高校生态，长远利好开源切片/Firmware 社区。

> 备注：Prusa 同期发布的 [Back-to-School 2026 Deals](https://blog.prusa3d.com/back-to-school-2026-deals-are-here_137792/) 为促销活动，未列入动态分析。

---

## 3. 研究前沿

⚠️ 今日 ArXiv **cs.GR / cs.CG 类目无新增预印本**，学术侧产出空窗。

学术端静默时，开源仓库本身正在承担"前沿实验场"的角色——例如 `text-to-cad`、`CADAM`、`cad-cae-copilot`、`anvilate`、`vibe-cading` 等项目正在探索 LLM Agent 与 B-Rep 拓扑的耦合方式，而 `OCCT-WASM`、`Chili3D`、`brepjs`、`replicad` 则在重新定义几何内核的部署形态。这些仓库的 commit 节奏即是当下"非正式发表"的研究脉络。

---

## 4. 重点项目

### 🖥️ CAD 平台与编辑器

- **[FreeCAD/FreeCAD](https://github.com/FreeCAD/FreeCAD)** — ⭐ 33,347
  开源多平台参数化 3D 建模器的事实标准，Part Design / Sketcher / Assembly 工作台覆盖机械设计全流程，是 `freecad-mcp`、`freecad-ai` 等 AI 集成的承载底座。

- **[openscad/openscad](https://github.com/openscad/openscad)** — ⭐ 10,162
  程序员友好的实体建模语言，几乎所有参数化开源硬件项目（机械键盘、机箱、夹具）都基于它或其衍生库（如 BOSL2、PartCAD）。

- **[xiangechen/chili3d](https://github.com/xiangechen/chili3d)** — ⭐ 4,806
  完全运行在浏览器中的 3D CAD，配合 `occt-wasm` 把 OpenCASCADE B-Rep 引擎搬到 Web，代表"零安装 CAD"的下一代形态。

- **[LibreCAD/LibreCAD](https://github.com/LibreCAD/LibreCAD)** — ⭐ 6,341
  跨平台 2D CAD，主导 DXF/DWG 开源读写，是机械 2D 工程图与钣金展开的核心工具。

### 📐 计算几何与内核

- **[Open-Cascade-SAS/OCCT](https://github.com/Open-Cascade-SAS/OCCT)** — ⭐ 2,849
  开源 3D CAD/CAM/CAE 平台基石，FreeCAD、cadquery、mayo、Chili3D 均构建于其上，是整个开源 CAD 生态的几何底层。

- **[CGAL/cgal](https://github.com/CGAL/cgal)** — ⭐ 6,035
  计算几何算法库（Delaunay、凸包、布尔、网格生成等），广泛用于 CAD 拓扑优化、机器人路径规划、地理信息系统。

- **[polydera/trueform](https://github.com/polydera/trueform)** — ⭐ 137
  新一代精确网格布尔/CSG 引擎，提供 C++/Python/TypeScript 绑定，是 `trimesh`、`pyvista` 之外对 Mesh 工程师的强力补充。

- **[cdcseacave/openMVS](https://github.com/cdcseacave/openMVS)** — ⭐ 4,111
  开源多视图立体重建库，把照片/点云转化为可编辑网格，是逆向扫描到 CAD 工作流的关键中间件。

### 🧬 创成式与参数化设计

- **[earthtojake/text-to-cad](https://github.com/earthtojake/text-to-cad)** — ⭐ 14,594
  面向 CAD/CAE/CAM 的 Agent Skills 库，让 LLM 可以经结构化接口操作参数化模型，是目前 text-to-CAD 方向最具生态整合度的项目

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*