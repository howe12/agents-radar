# CAD/机械结构开源动态日报 2026-09-20

> 数据来源: GitHub Search API (115 仓库) | ArXiv cs.GR+cs.CG (0 篇论文) | RSS 新闻 (6 条) | 生成时间: 2026-09-20 02:51 UTC

---

# CAD/机械结构开源动态日报

> 报告日期：2026-09-18 ｜ 三大信源：行业新闻、ArXiv 论文、GitHub 活跃仓库

---

## 一、今日速览

FreeCAD 团队宣布 **Lens 测试服务器** 上线，意味着这一云端/协作服务进入公测阶段；GitHub 上 FreeCAD 周边 MCP（Model Context Protocol）服务器一周内出现多款活跃项目，标志着"AI Agent × CAD"正在从概念走向可部署的中间层。与此同时，**OCCT 编译到 WebAssembly（occt-wasm）** 已迭代到 ~4MB brotli 的清洁 TypeScript API，使完整 B-Rep 内核首次可以"塞进"浏览器；与之配套的 **text-to-cad、Multi-Agent-CAD、AgentSCAD** 等代码库说明"自然语言出 STEP"已不再是 PPT，而是有了可跑通的链路。3D 打印一侧，Prusa 推出比重仅常规 PLA 35% 的轻量化耗材，Bambu Lab 则持续在教育、无障碍与商业联名方向扩展场景。

---

## 二、行业脉搏

1. **FreeCAD 宣布 Lens 测试服务器**（[FreeCAD Blog](https://blog.freecad.org/2026/09/18/announcing-lens-test-server/)）
   FreeCAD 团队开始为新服务 Lens 招募测试者。Lens 被定位为面向协作与云端能力的补充，意味着官方正在从"纯桌面"向"桌面 + 服务"双轨转型，对用户与第三方插件生态都是重要信号。

2. **FreeCAD WIP Wednesday（9 月 16 日）**（[FreeCAD Blog](https://blog.freecad.org/2026/09/16/wip-wednesday-16-september-2026/)）
   每周开发进展汇总，是观察 Part Design、Sketcher、装配、Toponaming 等长期痛点修复节奏的最佳窗口，反映 FreeCAD 1.0 之后的工程化推进状态。

3. **Prusament PLA Lightweight：比常规 PLA 轻 65%**（[Prusa Blog](https://blog.prusa3d.com/prusament-pla-lw-65-lighter-than-regular-pla-perfect-choice-for-aircraft-cosplay-and-more_138059/)）
   面向航模、Cosplay 与轻量化结构件。其意义不在材料本身，而在于 FDM 在"非承力结构件"上正在蚕食 SLA/激光切割的市场，对结构设计师的多目标优化（重量+成本+可打印性）提出新约束。

4. **Bambu Lab × Bambū Desserts & Drinks 联名**（[Bambu Lab Blog](https://blog.bambulab.com/when-3d-printing-meets-a-sweet-treat-bambu-lab-and-bambu-desserts-drinks-team-up-for-a-one-of-a-kind-collaboration/))
   体现 3D 打印进入消费品定制与品牌联名场景，对小批量个性化和设计-制造一体化工作流具有示范意义。

5. **Bambu Lab × 七家组织 × 无障碍 3D 打印**（[Bambu Lab Blog](https://blog.bambulab.com/seven-organizations-one-maker-community-3d-printing-in-the-service-of-accessibility/))
   打印社区向无障碍辅具的纵深推进。机械结构开源生态的一大隐含价值正是"可参数化复用的本地化制造"，这条新闻是市场侧的回响。

---

## 三、研究前沿

> 📭 **今日 cs.GR / cs.CG 暂无新论文**。建议持续关注 SIGGRAPH、SGP、CGF 与 ArXiv 上 *CAD / geometry processing / text-to-3D* 方向的每日更新，本日报将自动跟进。

（待恢复论文信号后，将优先覆盖：B-Rep 神经隐式重建、面向制造的拓扑优化、约束 Delaunay/Tet 网格鲁棒算法、文本/草图到 CAD 的可微生成等。）

---

## 四、重点项目

### 🖥️ CAD 平台与编辑器

- **[FreeCAD/FreeCAD](https://github.com/FreeCAD/FreeCAD)** — ⭐ 33,643
  开源跨平台参数化 3D 建模器的事实标杆，今日 Lens 测试服务器上线进一步扩展其云协作能力。
- **[openscad/openscad](https://github.com/openscad/openscad)** — ⭐ 10,239
  "程序员的实体建模器"。纯文本描述几何，是代码化 CAD 的鼻祖，对机械结构设计的可复现性贡献巨大。
- **[xiangechen/chili3d](https://github.com/xiangechen/chili3d)** — ⭐ 4,848
  完全运行在浏览器中的 3D CAD，反映 OCCT/Three.js + WASM 路线下"零安装"CAD 编辑器的可行性。
- **[pascalorg/editor](https://github.com/pascalorg/editor)** — ⭐ 24,151
  开源 3D 建筑编辑器，配套本地 CLI 与 MCP 工具，显著降低 AI Agent 操作 BIM/CAD 场景的接入门槛。

### 📐 计算几何与内核

- **[CGAL/cgal](https://github.com/CGAL/cgal)** — ⭐ 6,051
  C++ 计算几何算法库，几乎是所有严肃几何内核（Delaunay、布尔、偏移、曲面重建）的工业参考实现。
- **[MeshInspector/MeshLib](https://github.com/MeshInspector/MeshLib)** — ⭐ 824
  网格布尔、修复、抽稀、重网格、点云三角化与 ICP，提供 C++/Python/C#/JS 绑定，对扫描-建模-制造流水线极具价值。
- **[polydera/trueform](https://github.com/polydera/trueform)** — ⭐ 145
  主张"快速且精确"的网格布尔与空间查询引擎，配套 Python/TypeScript 绑定，是 CSG 在新一代 GPU/CAD 工具栈中的候选底座。

### 🧬 创成式与参数化设计（含 AI Agent CAD）

- **[earthtojake/text-to-cad](https://github.com/earthtojake/text-to-cad)** — ⭐ 16,154
  为 CAD/CAE/CAM 提供的 Agent Skills 库，是 LLM 进入机械设计工作流的"工具箱"层抽象，影响后续标准走向。
- **[Pan-Chera/Multi-Agent-CAD](https://github.com/Pan-Chera/Multi-Agent-CAD)** — ⭐ 994
  解耦的多 Agent 框架，用约束测试期计算（constrained test-time compute）生成文本到 CAD，强调"可验证的生成"。
- **[neka-nat/freecad-mcp](https://github.com/neka-nat/freecad-mcp)** — ⭐ 2,419
  FreeCAD 的 MCP 服务器，把建模操作暴露为 LLM 可调用的协议接口，是 Agent × FreeCAD 最直接的桥梁。
- **[ghbalf/freecad-ai](https://github.com/ghbalf/freecad-ai)** — ⭐ 506
  FreeCAD 内 AI 工作台，自然语言到

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*