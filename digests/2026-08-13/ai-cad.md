# CAD/机械结构开源动态日报 2026-08-13

> 数据来源: GitHub Search API (101 仓库) | ArXiv cs.GR+cs.CG (0 篇论文) | RSS 新闻 (2 条) | 生成时间: 2026-08-13 01:22 UTC

---

# CAD / 机械结构开源动态日报
> 覆盖范围：近 7 天 | 数据来源：FreeCAD Blog、GitHub Trending

---

## 一、今日速览

FreeCAD 生态本周集中活跃——官方宣告 **2026.08.29 线上黑客松**，与社区维护的 **Manyfold** 同步升级对 FreeCAD 文件的缩略图预览能力形成双线配合；同时活跃仓库榜上**"AI × CAD"信号显著增强**：4 个面向语言模型的 CAD/MCP 工具同期迭代，"多智能体文本到 CAD"成为研究代码化的最热方向；底层几何方面，OCCT 的 WASM 编译、自研 B-rep 库 `brepjs` 和 `occt-wasm` 共同勾勒出"浏览器原生 CAD"加速成形的轮廓。

---

## 二、行业脉搏

- 🎉 **[FreeCAD Hackathon 2026.08.29](https://blog.freecad.org/2026/08/10/save-the-date-freecad-hackathon-august-29th-2026/)** — 锁定两周后的线上黑客松，主要议题覆盖 FreeCAD 1.x 路线图、Assembly/Path/Sketcher 等核心工作流与 AI 集成。意义：FreeCAD v1 系列在"长期维护—插件生态—AI 协同"三线同步推进，社区凝聚力进一步增强。

- 🖼️ **[Manyfold：支持 FreeCAD 缩略图](https://blog.freecad.org/2026/08/06/manyfold-now-with-freecad-thumbnails/)** — Manyfold 是面向 3D 打印的资产/文件管理工具，本次新增对 `.FCStd` 源文件的缩略图生成。意义：FreeCAD 从建模端到数字资产端打通可发现性，回应了一直以来开源 CAx 生态被诟病的"源文件可读性—资产可检索性"断点。

- 🧠 **生态层信号——MCP for FreeCAD 双线**：[`neka-nat/freecad-mcp`](https://github.com/neka-nat/freecad-mcp)（⭐1.7k）与 [`blwfish/freecad-mcp`](https://github.com/blwfish/freecad-mcp) 近周同步活跃，加上 [`SimpleCADAPI`](https://github.com/NiJingzhe/SimpleCADAPI)、[`GPT4FreeCAD`](https://github.com/revhappy/GPT4FreeCAD)，"语言模型驱动 FreeCAD" 已经从 PoC 走向明确的 SDK 形态，值得作为行业风向观察。

---

## 三、研究前沿

> cs.GR / cs.CG 今日无新收录论文。但活跃仓库栏中"研究代码化"项目密集涌现，已具备 arXiv 级别的工程化深度，下列五个仓库代表了本周最具研究价值的实现：

- 📐 [**Pan-Chera/Multi-Agent-CAD**](https://github.com/Pan-Chera/Multi-Agent-CAD) ⭐764 — MAC 解耦式多智能体框架，借助 *constrained test-time compute* 在"文本→CAD"任务上同时追求约束满足、特征可编辑性与拓扑稳定性，是把 LLM-agent 思路引向"工程级 CAD"约束的代表性工作。
- 📦 [**earthtojake/text-to-cad**](https://github.com/earthtojake/text-to-cad) ⭐13,332 — 把 CAD/CAE/CAM 抽象为 agent 可复用的 skill 库，可作为后续 prompt/agent 设计的标准化"中间件"基线。
-

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*