# CAD/机械结构开源动态日报 2026-07-08

> 数据来源: GitHub Search API (105 仓库) | ArXiv cs.GR+cs.CG (22 篇论文) | RSS 新闻 (5 条) | 生成时间: 2026-07-08 06:22 UTC

---

# CAD / 机械结构开源动态日报

> 📅 2026 年 7 月 · 第 1 期 · 综合行业新闻 · ArXiv 论文 · GitHub 仓库

---

## 1️⃣ 今日速览

- **FreeCAD 生态持续活跃**：2026 社区设计大赛结果公布与 Q2 拨款同时落地，显示开源参数化建模平台正同时获得社区参与度与资金可持续性的双重支撑。
- **CAD 智能体研究取得工业级突破**：ArXiv 论文 *ArtisanCAD* 提出基于"专家知识蒸馏"的长流程程序化建模智能体，将自然语言到工业 CAD 的鸿沟大幅缩短。
- **浏览器原生 CAD 正在变成现实**：OCCT 编译为 WebAssembly（`occt-wasm`）、纯 JavaScript B-Rep 库（`brepjs`）、高性能 IFC/STEP Web 引擎（`bldrs-ai/conway`）三大项目同周活跃，Web CAD 栈已基本齐备。
- **AI 代理正在打通"语言 → 设计 → 制造"全链路**：`Kiln`、`WireStudio`、`rhino-mcp`、`freecad-mcp` 等 MCP 服务器从打印、PCB、ESP32 嵌入式等不同侧面把大模型引入工程流水线。
- **物理世界首个设计基准出现**：`MakerBench` 把 SWE-bench 范式移植到空间推理与 DFM，为评价生成式工程 AI 提供客观、可自动打分的尺子。

---

## 2️⃣ 行业脉搏

| # | 动态 | 意义 |
|---|------|------|
| 1 | [**FreeCAD Community Design Competition 2026: The Results!**](https://blog.freecad.org/2026/07/06/freecad-community-design-competition-2026-the-results/) | 全球开源 CAD 社区创作力的集中检阅，是 FreeCAD 生态活力的最直接信号。 |
| 2 | [**Q2 2026 grants announced**](https://blog.freecad.org/2026/07/04/q2-2026-grants-announced/) | 资金持续注入，FreeCAD 在 v1.0 后的长期维护与新功能开发获得稳定保障，对企业级用户是关键信心指标。 |
| 3 | [**WIP Wednesday, 1 July 2026**](https://blog.freecad.org/2026/07/01/wip-wednesday-1-july-2026/) | 公开的开发中（WIP）功能集合，是观察 FreeCAD 路线图与底层技术走向（Assembly、Toponaming、PDN）的一手窗口。 |
| 4 | [**Prusa: State of INDX – July 2026 Update: Founder's Edition Shipping**](https://blog.prusa3d.com/indx_july_2026_update_137377/) | 商业 3D 打印头部企业的新产品线落地，对消费/桌面 FFF 市场格局与开源固件（Klipper/Marlin）生态均会产生联动影响。 |
| 5 | [**Bambu Lab: When Venezuela needed help, the makers moved first**](https://blog.bambulab.com/when-venezuela-needed-help-the-makers-moved-first/) | 商业打印品牌叙事中的"创客社区力量"主题，反映出 3D 打印作为分布式制造基础设施在人道主义场景中的真实价值。 |

---

## 3️⃣ 研究前沿

1. **ArtisanCAD: An Industrial-Level CAD Agent with Expert-Grounded Knowledge Distillation** — [arxiv.org/abs/2607.05750v1](http://arxiv.org/abs/2607.05750v1)
   提出面向工业零件的"长流程程序化建模 + 专家轨迹蒸馏"智能体，把"自然语言→可加工 CAD 模型"推到工业可用水平，是 LLM-CAD 融合方向目前最有落地价值的工作。

2. **A Decomposition-Based Framework for Joint Optimization and Spatial Packaging of Interconnected Systems with Physical Interactions** — [arxiv.org/abs/2607.06087v1](http://arxiv.org/abs/2607.06087v1)
   把"含物理耦合（接触、摩擦、运动学）的互联系统"进行联合布局优化与空间打包，对航空航天舱内布局、机器人机体集成设计有直接借鉴意义。

3. **Generalized altitudes and their bounds** — [arxiv.org/abs/2607.06187v1](http://arxiv.org/abs/2607.06187v1)
   将单纯形的"顶点-对面"高线概念推广到任意顶点-顶点对，并给出严格界。对网格质量度量、CAE 单元质量评估器设计具有理论价值。

4. **Lower Bounds for Approximating the Vietoris-Rips Filtration** — [arxiv.org/abs/2607.06524v1](http://arxiv.org/abs/2607.06524v1)
   给出了 VR 滤流近似复杂度的下界，对基于拓扑数据分析（TDA）的形状识别、点云重建与 CAD 逆向工程中的关键算法选择提供理论指导。

5. **Shifting is Optimal under Gap-ETH: A Lower Bound Framework for Geometric Approximation Schemes** — [arxiv.org/abs/2607.06069v1](http://arxiv.org/abs/2607.06069v1)
   证明在 Gap-ETH 假设下 *shifting* 是几何 PTAS 的最优框架，为几何近似算法的复杂度研究树立了新的基准。

---

## 4️⃣ 重点项目

### 🖥️ CAD 平台与编辑器

- **FreeCAD / FreeCAD** ⭐ **31,977** — [github.com/FreeCAD/FreeCAD](https://github.com/FreeCAD/FreeCAD)
  跨平台、参数化、开源 3D 建模的事实标准，是装配、CAE、BIM、FEM 等下游应用的共同基座。

- **openscad / openscad** ⭐ **9,718** — [github.com/openscad/openscad](https://github.com/openscad/openscad)
  "程序员的实体建模器"，代码即模型，是参数化与可复现设计的代表性范式。

- **LibreCAD / LibreCAD** ⭐ **6,052** — [github.com/LibreCAD/LibreCAD](https://github.com/LibreCAD/LibreCAD)
  跨平台 2D CAD，DXF/DWG 兼容，是机械 2D 绘图最成熟的轻量级开源选择。

- **xiangechen / chili3d** ⭐ **4,660** — [github.com/xiangechen/chili3d](https://github.com/xiangechen/chili3d)
  浏览器内 3D CAD，把 OCCT 范式搬到 Web，是"无需安装即可建模"的代表项目。

- **solvespace / solvespace** ⭐ **4,041** — [github.com/solvespace/solvespace](https://github.com