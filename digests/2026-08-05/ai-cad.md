# CAD/机械结构开源动态日报 2026-08-05

> 数据来源: GitHub Search API (106 仓库) | ArXiv cs.GR+cs.CG (11 篇论文) | RSS 新闻 (1 条) | 生成时间: 2026-08-05 01:55 UTC

---

# CAD / 机械结构开源动态日报

> 覆盖：行业新闻 · ArXiv cs.GR / cs.CG 前沿 · 7 日活跃 GitHub 仓库

---

## 📌 今日速览

- **AI × CAD 研究持续爆发**：今日 ArXiv 多篇论文直接瞄准"机械零件生成与可装配性"——TraceCAD（LLM CAD 的 trace-guided 自我修复）、RL-Lock（强化学习生成互锁装配体）、PartMat（单全局隐变量的材质感知部件分解）——标志 LLM/RL 向"可制造、可装配 CAD"快速收敛。
- **MCP 正在成为 LLM ↔ CAD 的事实标准**：FreeCAD-MCP、Rhino-MCP、Kiln、blwfish/freecad-mcp 等多个仓库近 7 日活跃更新，模型上下文协议（Model Context Protocol）已被开源 CAD / 切片器社区广泛采用作为 AI 代理的标准接入层。
- **浏览器原生 / WASM 化的 CAD 形态基本成型**：andymai/occt-wasm（OCCT 编译至 WASM，纯 TS API，~4MB brotli）、andymai/brepjs、Web B-Rep/STEP/IFC 引擎 bldrs-ai/conway 与 CADAM、Chili3D 形成"无客户端、可在浏览器跑 OCCT 内核"的完整链条。
- **生成式设计进入"可控"阶段**：Fourier-Latent Diffusion for TPMS 用频域潜扩散实现对三周期极小曲面的参数化可控生成，为轻量化点阵结构拓扑优化注入新思路。
- **FreeCAD 主线稳健**：官方发布 [WIP Wednesday, 29 July 2026](https://blog.freecad.org/2026/07/29/wip-wednesday-29-july-2026/)，多工作台与核心修复持续迭代。

---

## 🟢 行业脉搏

1. **FreeCAD 官方 WIP Wednesday（7 月 29 日）** — 核心 C++ 主仓 [FreeCAD/FreeCAD](https://github.com/FreeCAD/FreeCAD) ⭐ 32,620 持续高频提交。[博客](https://blog.freecad.org/2026/07/29/wip-wednesday-29-july-2026/)例行汇总一周合并的 PR、Toponaming/Part Design/Sketcher 等工作台进展，对依赖 FreeCAD 做下游产品（DFM、PyOpticL、光学/插件）的工程师意义重大：版本漂移风险与新 API 可第一时间对账。

2. **AI 代理开始规模化进入 CAD 工作台** — 多仓库侧面印证：ghbalf/freecad-ai、neka-nat/freecad-mcp、revhappy/GPT4FreeCAD、tanishqbhattad/rhino-mcp、codeofaxel/Kiln、clay-good/anvilate、Pan-Chera/Multi-Agent-CAD 等近一周均活跃。意义：自然语言→参数化模型的最短链路已从论文走向 CI 级工具。

3. **Web/WASM 化的开源 CAD 内核已成体系** — [andymai/occt-wasm](https://github.com/andymai/occt-wasm)（OCCT→WASM）、[andymai/brepjs](https://github.com/andymai/brepjs)（Web 精确 B-Rep）、[bldrs-ai/conway](https://github.com/bldrs-ai/conway)（IFC/STEP Web 引擎）、[CADAM](https://github.com/Adam-CAD/CADAM)（text-to-CAD Web）、[Chili3D](https://github.com/xiangechen/chili3d) 等组成"零安装 CAD"链路。

4. **3D 打印自托管与多品牌切片加速整合** — [OrcaSlicer](https://github.com/OrcaSlicer/OrcaSlicer) ⭐15,325 仍是覆盖 Bambu/Prusa/Voron/Creality 等多品牌的主流开源切片器；[maziggy/bambuddy](https://github.com/maziggy/bambuddy)（自托管 Bambu 控制台）、[kiauh](https://github.com/dw-0/kiauh)（Klipper 安装/更新工具）、[Donkie/Spoolman](https://github.com/Donkie/Spoolman) 一同构成"脱云、单机可控"的开源打印栈，对设计-制造一体化场景愈发关键。

5. **零件组件化 / 数字主线方向持续推进** — [PartCAD](https://github.com/partcad/partcad)（⭐481，零件级包管理器、Digital Thread / TDP）持续推进，把"可装配零件文档"作为一等公民，配合 build123d/CadQuery 等 Code-CAD 工具

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*