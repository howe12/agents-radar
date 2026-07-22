# AI 官方内容追踪报告 2026-07-22

> 今日更新 | 新增内容: 13 篇 | 生成时间: 2026-07-22 02:02 UTC

数据来源:
- Anthropic: [anthropic.com](https://www.anthropic.com) — 新增 12 篇（sitemap 共 420 条）
- OpenAI: [openai.com](https://openai.com) — 新增 1 篇（sitemap 共 872 条）

---

# AI 官方内容追踪报告
**追踪日期：2026-07-22　|　覆盖公司：Anthropic（Claude）、OpenAI**

---

## 1. 今日速览

今日新增内容呈现出一个不寻常的结构：Anthropic 一举收录了过去近一年（2025-09 至 2026-07）共 **12 篇**里程碑式发布文章，涵盖 Sonnet 4.5 → Opus 4.8 的完整模型迭代周期以及 Agent Skills、Claude Design、Small Business、Teachers 等多条产品线。这意味着今天并不是"单日发布日"，而是 Anthropic 内容资产的**首次全量回填**。核心信号如下：

- **模型迭代显著加速**：在 10 个月内，Opus 从 4.5 推到 4.8（4 个大版本）、Sonnet 从 4.5 推到 5.0、Haiku 完成 4.5 补位，节奏已逼近每 2–3 个月一次重大更新。
- **"Agentic" 成为统一叙事**：几乎每篇发布都在强调 tool use、autonomous workflows、long-running agents；Agent SDK、Skills 开放标准、Claude Code 的 dynamic workflows 三条产品线共同指向"Agent 操作系统"的定位。
- **垂直市场加速渗透**：Design（设计师）、Small Business（中小企业）、Teachers（K-12 教育）三条独立产品线落地，体现从"通用模型"向"行业解决方案"的纵深扩展。
- **价格持续断崖式下探**：Opus 4.5 将 Opus 级能力定价降至 **$5/$25 per million tokens**，叠加 Fast mode 与 Haiku 4.5，形成多维度定价矩阵。

OpenAI 方面今日仅新增一条索引条目（董事会人事变动），无正文可分析。

---

## 2. Anthropic / Claude 内容精选

> 说明：以下条目以"原文实际发布日期"为时间轴梳理；除特别注明外，均为 2026-07-22 当日批量收录。

### 2.1 模型发布线

#### Claude Sonnet 4.5（2025-09-29）
- **链接**：[https://www.anthropic.com/news/claude-sonnet-4-5](https://www.anthropic.com/news/claude-sonnet-4-5)
- 自称"全球最佳编程模型 / 构建复杂代理的最强模型 / 使用计算机的最佳模型"，在推理与数学上也有显著提升。同步发布 Claude Code 的 checkpoints（回滚）、VS Code 原生扩展、context editing、memory tool，以及 **Claude Agent SDK**——首次将 Anthropic 内部基础设施对外开放。

#### Claude Haiku 4.5（2025-10-15）
- **链接**：[https://www.anthropic.com/news/claude-haiku-4-5](https://www.anthropic.com/news/claude-haiku-4-5)
- 以 5 个月前 Sonnet 4 的性能水平提供 **1/3 成本 + 2× 速度**；在某些任务（如 computer use）甚至超越 Sonnet 4。Sonnet 4.5 可"编排多个 Haiku 4.5 并行执行子任务"，确立了"大模型编排 + 小模型跑量"的代理调度范式，完成 Opus/Sonnet/Haiku 三档金字塔的最后一块拼图。

#### Claude Opus 4.5（2025-11-24）
- **链接**：[https://www.anthropic.com/news/claude-opus-4-5](https://www.anthropic.com/news/claude-opus-4-5)
- 自称"全球最佳编码 / 代理 / 计算机使用模型"。**价格从原量级下调至 $5/$25 per million tokens**，首次将 Opus 级能力下沉至中小团队预算。同步更新 Claude Developer Platform、Claude Code，以及 Excel / Chrome / Desktop 集成。

#### Claude Opus 4.6（2026-02-05）
- **链接**：[https://www.anthropic.com/news/claude-opus-4-6](https://www.anthropic.com/news/claude-opus-4-6)
- Opus 级首次引入 **1M token 上下文**（beta）。在 Terminal-Bench 2.0、Humanity's Last Exam、GDPval-AA、BrowseComp 上达到 state-of-the-art。文中**直接点名 OpenAI GPT-5.2**，在 GDPval-AA 上**领先约 144 Elo**，领先自家 Opus 4.5 约 190 点——这是 Anthropic 历史上最"进攻性"的对比表述。

#### Claude Sonnet 4.6（2026-02-17）
- **链接**：[https://www.anthropic.com/news/claude-sonnet-4-6](https://www.anthropic.com/news/claude-sonnet-4-6)
- 同步支持 1M token 上下文；成为 claude.ai 与 Claude Cowork 的默认模型（Free / Pro）。早期用户在大量任务上**偏好 Sonnet 4.6 超过 Opus 4.5**——意味着 Sonnet 在 3 个月内已反超前代 Opus，"能力下沉"曲线非常陡峭。

#### Claude Opus 4.7（2026-04-16）
- **链接**：[https://www.anthropic.com/news/claude-opus-4-7](https://www.anthropic.com/news/claude-opus-4-7)
- 在最难软件工程任务、长时运行一致性、自验证能力上显著提升；视觉能力升级（更高分辨率图像）。文章同时披露两条重要信息：
  - **"Claude Mythos Preview"**——一款比 Opus 4.7 更强但未公开发布的"前沿模型分支"
  - **"Project Glasswing"**——AI 与网络安全研究项目（"glasswing"即玻璃翼蝴蝶，暗示透明度）
- 安全策略上首次明示：在训练阶段对网络安全能力做了 **"differentially reduce"**（差异化降级），并采用 **"分级发布"**（Mythos Preview 限量 → Opus 4.7 广泛）作为治理范式。

#### Claude Opus 4.8（2026-05-28）
- **链接**：[https://www.anthropic.com/news/claude-opus-4-8](https://www.anthropic.com/news/claude-opus-4-8)
- 全面提升 benchmark + 更可靠的判断力（"better judgment"）。同步三大新功能：
  - **effort control**：用户在 claude.ai 上可控制 Claude 投入任务的工作量
  - **dynamic workflows**（Claude Code 新功能）：处理超大规模问题
  - **Fast mode**：2.5× 速度，价格降为之前的 1/3
- 早期测试者引述："asks the right questions, catches its own mistakes, pushes back when a plan isn't sound"。

#### Claude Sonnet 5（2026-06-30）
- **链接**：[https://www.anthropic.com/news/claude-sonnet-5](https://www.anthropic.com/news/claude-sonnet-5)
- 自称"最具 agentic 能力的 Sonnet"，**性能接近 Opus 4.8 但价格更低**。网络安全能力相比 Opus 模型显著降低（主动降级）。成为 Free / Pro 默认模型。Sonnet 与 Opus 之间的能力差距被进一步压缩。

### 2.2 产品与生态

#### Agent Skills（2025-10-16，2025-12-18 更新）
- **链接**：[https://www.anthropic.com/news/skills](https://www.anthropic.com/news/skills)
- Skills 定义为"包含指令、脚本、资源的文件夹"，Claude 按需加载；特性：**Composable / Portable / Efficient**。2025-12 更新引入组织级管理、合作伙伴目录，并将 Skills **作为开放标准发布，支持跨平台移植**——Anthropic 试图把 Skills 打造成 Agent 时代的"插件开放标准"。

#### Claude Design by Anthropic Labs（2026-04-17）
- **链接**：[https://www.anthropic.com/news/claude-design-anthropic-labs](https://www.anthropic.com/news/claude-design-anthropic-labs)
- 由 **Anthropic Labs**（内部孵化品牌，类 Google Labs / Microsoft Garage）推出，搭载 Opus 4.7 视觉能力，面向设计师 / 创始人 / PM / 营销人员，支持原型设计、产品线框图与团队设计系统的自动遵循。**"Anthropic Labs" 品牌首次公开亮相**。

#### Claude for Small Business（2026-05-13）
- **链接**：[https://www.anthropic.com/news/claude-for-small-business](https://www.anthropic.com/news/claude-for-small-business)
- 一键集成 Intuit QuickBooks、PayPal、HubSpot、Canva、Docusign、Google Workspace、Microsoft 365，可执行薪资规划、月结、销售活动、催收发票等场景。包装为"public benefit mission"的一部分——Anthropic 首次明确以**中小企业**（占美国 GDP 44%）为目标客户画像。

#### Claude for Teachers（2026-07-14）
- **链接**：[https://www.anthropic.com/news/claude-for-teachers](https://www.anthropic.com/news/claude-for-teachers)
- 为美国 K-12 验证教师**免费**提供高级 Claude 能力、教学技能库；接入 **Learning Commons**，映射全美 50 州学术标准及子级学习能力。继 OpenAI ChatGPT for Education 与 Microsoft Copilot for Education 之后，Anthropic 通过"循证课程"差异化切入 K-12 教育市场。

### 2.3 首次全量时间线里程碑

| 时间 | 里程碑 | 战略意义 |
|---|---|---|
| 2025-09-29 | Sonnet 4.5 + Claude Code 重大更新 + **Agent SDK** | 输出内部基础设施 |
| 2025-10-15 | Haiku 4.5 | 完成三档模型金字塔 |
| 2025-10-16 | Agent Skills | 提出开放 Skills 标准 |
| 2025-11-24 | Opus 4.5 + 价格降至 **$5/$25** | Opus 级能力价格断崖式下探 |
| 2026-02-05 | Opus 4.6 + **1M context** | 长上下文标配，正面对标 GPT-5.2 |
| 2026-02-17 | Sonnet 4.6 + 1M context | 能力下沉加速，Sonnet 反超前代 Opus |
| 2026-04-16 | Opus 4.7 + Project Glasswing + Mythos Preview | 分级安全发布范式 |
| 2026-04-17 | Claude Design（Anthropic Labs） | 内部孵化品牌亮相 |
| 2026-05-13 | Claude for Small Business | 中小企业市场切入 |
| 2026-05-28 | Opus 4.8 + 动态工作量控制 | 推理成本可调产品化 |
| 2026-06-30 | Sonnet 5 | 进一步缩小与 Opus 能力差距 |
| 2026-07-14 | Claude for Teachers | K-12 教育市场切入 |

---

## 3. OpenAI 内容精选

⚠️ **数据受限说明**：OpenAI 今日仅新增一条索引条目，且仅有 URL 元数据，无正文内容可供分析。以下仅基于客观元数据进行列举，不进行推测性解读。

#### David Velez / Robin Vince 加入 OpenAI 董事会
- **链接**：[https://openai.com/index/david-

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*