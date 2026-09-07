# CAD/机械结构开源动态日报 2026-09-07

> 数据来源: GitHub Search API (105 仓库) | ArXiv cs.GR+cs.CG (0 篇论文) | RSS 新闻 (5 条) | 生成时间: 2026-09-07 02:20 UTC

---

# CAD / 机械结构开源动态日报

> 数据日期：2026-09-02 ｜ 信息源：FreeCAD Blog、Prusa、Bambu Lab、ArXiv cs.GR/cs.CG、GitHub Trending

---

## 1. 今日速览

今日 CAD / 机械开源生态最强烈的信号是 **MCP（Model Context Protocol）正在成为 AI 与 CAD 软件对话的事实标准**——FreeCAD、Rhino、3D 打印切片端都在一周内涌入 MCP 服务器。**PrusaSlicer 3.0 预览**勾勒下一代切片软件架构，**Bambu Lab IoT 安全一周年**则把消费级 3D 打印推向合规化轨道。GitHub 端，"**文本生成 CAD / 浏览器原生 CAD / 本地化自托管**"三股力量齐头并进，生态正从"云端 SaaS + 桌面 GUI"二元结构，加速向"AI Agent + 本地工具链"重构。

---

## 2. 行业脉搏

| # | 动态 | 链接 | 意义 |
|---|---|---|---|
| 1 | **PrusaSlicer 3.0 Preview – Built for the Future of 3D Printing** | [prusa3d.com](https://blog.prusa3d.com/prusaslicer-3-0-preview-built-for-the-future-of-3d-printing_137672/) | 大版本预览预示切片软件下一代体验；开源切片器持续对标商业闭源方案 |
| 2 | **Bambu Lab: One Year On – Strengthening IoT Security** | [blog.bambulab.com](https://blog.bambulab.com/one-year-on-strengthening-iot-security-through-global-certifications-and-community-collaboration/) | 全球认证 + 社区协作，回应云端依赖与隐私争议；推动 FFF 行业进入合规时代 |
| 3 | **FreeCAD WIP Wednesday, 2 September 2026** | [blog.freecad.org](https://blog.freecad.org/2026/09/02/wip-wednesday-2-september-2026/) | 滚动式开发摘要，是观察 FreeCAD 主线进度的最佳窗口 |
| 4 | **Meet the 2026 Bambu Lab School Ambassadors** | [blog.bambulab.com](https://blog.bambulab.com/meet-the-2026-bambu-lab-school-ambassadors/) | 校园大使计划扩张教育生态，与"开学季促销"协同卡位校园市场 |
| 5 | **Back-to-School 2026 Deals** | [prusa3d.com](https://blog.prusa3d.com/back-to-school-2026-deals-are-here_137792/) | 季节性商业动作，反映 3D 打印硬件继续向 K12 / 高校渗透 |

---

## 3. 研究前沿

> 今日 ArXiv `cs.GR` / `cs.CG` 抓取为空，无新论文公开。以下用**准研究级开源仓库**作为风向标补位，反映活跃的研究方向：

- **earthtojake/text-to-cad**（14,512⭐）—— 把 LLM Agent 技能与 CAD 几何生成耦合，是"Text-to-CAD"范式的事实骨架。
- **polydera/trueform**（137⭐）—— Rust + C++ 现代 CSG 引擎，对网格布尔、空间查询提出新基线。
- **iShape-Rust/iOverlay**（207⭐）—— 高性能 2D 多边形布尔运算，纯 Rust 实现，提示 Rust 正在重写几何内核。
- **JuliaGeometry/Meshes.jl**（471⭐）—— Julia 生态几何/网格库，象征科学计算语言向 CAD 内核渗透。
- **MeshInspector/MeshLib**（817⭐）—— 工业级网格布尔 / 修复 / 重网格 SDK，已直接被商业 CAD 内核采用。

---

## 4. 重点项目

### 🖥️ CAD 平台与编辑器

- **[FreeCAD/FreeCAD](https

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*