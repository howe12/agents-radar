# AI 官方内容追踪报告 2026-07-29

> 今日更新 | 新增内容: 9 篇 | 生成时间: 2026-07-29 02:00 UTC

数据来源:
- Anthropic: [anthropic.com](https://www.anthropic.com) — 新增 2 篇（sitemap 共 428 条）
- OpenAI: [openai.com](https://openai.com) — 新增 7 篇（sitemap 共 883 条）

---

# AI 官方内容追踪报告

**追踪日期**：2026-07-29
**覆盖范围**：Anthropic（Claude）、OpenAI 官网增量更新

---

## 一、今日速览

- **Anthropic 发布重大密码学研究突破**：Claude Mythos Preview 首次自主发现加密算法本身的数学缺陷，攻击了后量子签名方案 HAWK 并发现了轮数缩减 AES 的新攻击向量，标志着 AI 从"找实现 bug"迈向"发现数学漏洞"的关键跨越。
- **Dario Amodei 公开声明开源权重立场**：面对美国可能禁止中国开源权重模型的讨论，Anthropic CEO 正式表态从未主张禁止开源权重模型，但强调真正的国家安全担忧来自威权政府构建更强大的 AI。
- **OpenAI 集中发布企业落地内容**：今日 7 条更新几乎全部集中在 business/guides-and-resources 板块，涉及 GPT-5 商业应用、Agent 构建指南、Codex 内部使用案例，明显在推动企业市场内容矩阵。

---

## 二、Anthropic / Claude 内容精选

### 🔬 Research｜前沿研究

#### 1. Discovering cryptographic weaknesses with Claude
- **发布日期**：2026-07-28
- **链接**：[https://www.anthropic.com/research/discovering-cryptographic-weaknesses](https://www.anthropic.com/research/discovering-cryptographic-weaknesses)
- **核心要点**：
  - Frontier Red Team 利用 **Claude Mythos Preview** 发现两类加密算法的**数学层面**缺陷——这与此前发现实现层漏洞是质的飞跃。
  - **第一项**：显著削弱 **HAWK**（为后量子世界设计的数字签名方案）。这是后量子密码学（PQC）领域的重大进展。
  - **第二项**：发现攻击**轮数缩减 AES**（全球最广泛使用的对称加密算法）的新方法。
  - 官方明确：这些发现**目前不影响任何生产系统**，但作为研究突破意义重大。
  - **战略信号**：Anthropic 在 Mythos Preview 阶段展示的"自主发现并利用漏洞"能力，已经从代码层（implementation bugs）进化到算法层（algorithmic/mathematical flaws），这是 AI 科研能力质变的标志性事件。

### 📢 News｜公司公告

#### 2. Our position on open-weights models
- **发布日期**：2026-07-28（署名日期 07-27）
- **链接**：[https://www.anthropic.com/news/position-open-weights-models](https://www.anthropic.com/news/position-open-weights-models)
- **作者**：Dario Amodei, Anthropic CEO
- **核心要点**：
  - **核心澄清**：Anthropic **从未**主张禁止开源权重模型（open-weights models）。
  - **政策立场**：Dario 认为开源权重模型（若无危险能力）是公共品（public good），保护主义禁令无法解决他最严重的国家安全担忧。
  - **真正的担忧**：威权政府（不仅仅是 CCP）构建比美国更强大的 AI 模型，并将其用于永久性军事/压迫优势——这是他在六个月前《The Adolescence of Technology》一文中已经阐述过的立场。
  - **战略信号**：这是 Anthropic 在美中 AI 竞争白热化背景下的**精准定位**——既不站队"全面禁止开源"，也不站队"完全自由开放"，而是以"能力风险"和"地缘竞争"为框架重构叙事。在多家科技公司联署支持开源权重的当下，这篇声明既是澄清也是差异化。

---

## 三、OpenAI 内容精选

> ⚠️ **数据说明**：OpenAI 本日所有 7 条更新均为**仅元数据模式**（标题由 URL 路径推断，无正文内容）。以下仅基于 URL 路径和分类进行客观列举，不进行推测性解读或内容摘要编造。

### 📊 Business / Guides & Resources（全部为分类"business"，发布/更新日期均为 2026-07-28）

| # | 标题（基于 URL 推断） | 链接 | 备注 |
|---|---|---|---|
| 1 | Scientific Computing Agentic AI | [https://openai.com/index/scientific-computing-agentic-ai/](https://openai.com/index/scientific-computing-agentic-ai/) | 元数据受限 |
| 2 | Scientific Computing Agentic AI | [https://openai.com/index/scientific-computing-agentic-ai/](https://openai.com/index/scientific-computing-agentic-ai/) | **疑似重复条目**，URL 完全一致 |
| 3 | Identifying and Scaling AI Use Cases | [https://openai.com/business/guides-and-resources/identifying-and-scaling-ai-use-cases/](https://openai.com/business/guides-and-resources/identifying-and-scaling-ai-use-cases/) | 元数据受限 |
| 4 | Inside GPT-5: Our Best Model For Work | [https://openai.com/business/guides-and-resources/inside-gpt5-our-best-model-for-work/](https://openai.com/business/guides-and-resources/inside-gpt5-our-best-model-for-work/) | 元数据受限 |
| 5 | A Practical Guide to Building AI Agents | [https://openai.com/business/guides-and-resources/a-practical-guide-to-building-ai-agents/](https://openai.com/business/guides-and-resources/a-practical-guide-to-building-ai-agents/) | 元数据受限 |
| 6 | A Practical Guide to Building With AI | [https://openai.com/business/guides-and-resources/a-practical-guide-to-building-with-ai/](https://openai.com/business/guides-and-resources/a-practical-guide-to-building-with-ai/) | 元数据受限 |
| 7 | How OpenAI Uses Codex | [https://openai.com/business/guides-and-resources/how-openai-uses-codex/](https://openai.com/business/guides-and-resources/how-openai-uses-codex/) | 元数据受限 |

**结构性观察**（基于 URL 与分类模式，非内容推断）：
- 7 条更新中，**6 条位于 `/business/guides-and-resources/` 路径下**，1 条（Scientific Computing）位于 `/index/` 根路径。
- URL 关键词集中于：**Agentic AI / GPT-5 / Agents / Codex / Use Cases**——与近期企业 AI 落地主题高度吻合。
- 元数据不足，无法对正文论点、技术细节做进一步分析。

---

## 四、战略信号解读

### 4.1 两家公司近期的技术优先级对比

| 维度 | Anthropic / Claude | OpenAI |
|---|---|---|
| **模型能力前沿** | 通过 Mythos Preview 展示**自主科研能力**（密码学数学发现） | 强调 GPT-5 为"工作最佳模型"（标题暗示） |
| **安全 / 对齐** | Frontier Red Team 是核心叙事支柱 | 本日无明显安全内容露出 |
| **政策 / 治理** | CEO 亲自撰写开源权重立场声明，积极介入公共辩论 | 沉默 |
| **产品化 / 企业落地** | 未在本日增量中体现 | **高度集中**：6/7 条为 business guides-and-resources |
| **生态 / 开源** | 立场声明（明确支持无危险能力的开源权重） | Codex 内部实践分享 |

### 4.2 竞争态势分析

**谁在引领议题：**
- **Anthropic** 正在引领两个高门槛议题——**AI for Science/Cryptanalysis**（AI 自主发现数学漏洞）和 **AI 地缘治理叙事**（Dario 的开权重声明）。前者展示技术深度，后者展示政策影响力。
- **OpenAI** 在本日则专注于**B2B 内容营销矩阵**——大量 "How to / Guide / Use Case / Inside" 类内容，表明其当前阶段的重心在企业渗透与落地普及，而非前沿研究突破。

**谁在跟进：**
- OpenAI 的"Scientific Computing Agentic AI"条目 URL 暗示其也在布局科学计算 agent 方向，这可能是对 Anthropic 的研究突破所做的**对位回应**，但需要正文内容确认。

### 4.3 对开发者与企业用户的潜在影响

- **密码学社区 / 安全研究员**：Anthropic 的密码学发现是头等大事。即便不影响生产系统，HAWK 后量子方案被攻击意味着 NIST PQC 标准化进程可能需要重新评估其候选方案。**建议密切关注 NIST 后量子密码项目的后续公告。**
- **企业 CTO / 采购决策者**：OpenAI 的批量"guides-and-resources"发布（特别是 GPT-5 for Work）显示企业落地方法论正在系统化输出。对于正在评估 AI 落地的企业，这是降低决策门槛的信号——OpenAI 在用内容建立"思想领导力护城河"。
- **政策制定者 / 安全研究者**：Dario 的开权重声明提供了 Anthropic 的清晰立场——区分"能力危险"与"开放生态"，这可能成为未来美中 AI 政策辩论中的重要参照点。

---

## 五、值得关注的细节

### 🔍 5.1 措辞与概念信号

- **"Claude Mythos Preview"** 作为产品代号再次出现在密码学研究中，说明这是 Anthropic 当前最强能力的承载模型，且其能力叙事已从"通用助手"转向"**自主科研 agent**"。
- **"frontier red team"** 反复出现，强调 Anthropic 的安全研究品牌——这是其差异化竞争的核心叙事资产。
- **"post-quantum"（后量子）** 一词出现在 Anthropic 内容中，而 OpenAI 端则无对应安全/密码学内容。**新兴话题首次聚焦**：AI 对密码学基础的威胁进入主流讨论。

### 🔍 5.2 政策动向

- **Dario Amodei 公开信**直接回应"中国开源权重模型禁令"辩论，且明确反对保护主义禁令——这是**美国 AI 头部公司 CEO 罕见的高调政策介入**。
- "The Adolescence of Technology" 被引用作为立场延续证据，说明 Anthropic 在政策叙事上有体系化的中长期框架。

### 🔍 5.3 发布密度异常

- **OpenAI 一天内 6 条 business/guides-and-resources** 集中发布，这是**典型的新版本配套内容矩阵**——很可能与某个商业产品节点（如 GPT-5 企业版、Codex 企业版）相关。**建议关注 OpenAI 未来 48 小时内是否有对应产品发布**。
- OpenAI 列表中出现 **URL 完全相同的重复条目**（Scientific Computing Agentic AI 出现两次），这可能是爬虫抓取异常或官方重复发布，需后续核实。

### 🔍 5.4 主题密集度对比

| 主题 | Anthropic | OpenAI |
|---|---|---|
| 密码学/安全研究 | ★★★ | ☆ |
| 政策/治理 | ★★★ | ☆ |
| 科研 Agent | ★★★（密码学方向） | ★（scientific computing，URL 暗示） |
| 企业落地方法论 | ☆ | ★★★ |
| Agent 构建指南 | ☆ | ★★★ |

**解读**：今日两家呈现**几乎完全互补**的发布画像——Anthropic 走"高端研究 + 政策影响"路线，OpenAI 走"普及落地 + 企业赋能"路线。这与两家既有的市场定位一致，但**对比强度比以往更明显**，可能预示着行业进入"分层竞争"阶段。

---

## 附录：今日新增内容完整索引

### Anthropic 新增（2 篇）
1. [Discovering cryptographic weaknesses with Claude](https://www.anthropic.com/research/discovering-cryptographic-weaknesses) — research — 2026-07-28
2. [Our position on open-weights models](https://www.anthropic.com/news/position-open-weights-models) — news — 2026-07-28

### OpenAI 新增（7 篇）
1. [Scientific Computing Agentic AI](https://openai.com/index/scientific-computing-agentic-ai/) — index — 2026-07-28
2. [Scientific Computing Agentic AI](https://openai.com/index/scientific-computing-agentic-ai/) — index — 2026-07-28（重复）
3. [Identifying and Scaling AI Use Cases](https://openai.com/business/guides-and-resources/identifying-and-scaling-ai-use-cases/) — business — 2026-07-28
4. [Inside GPT-5: Our Best Model For Work](https://openai.com/business/guides-and-resources/inside-gpt5-our-best-model-for-work/) — business — 2026-07-28
5. [A Practical Guide to Building AI Agents](https://openai.com/business/guides-and-resources/a-practical-guide-to-building-ai-agents/) — business — 2026-07-28
6. [A Practical Guide to Building With AI](https://openai.com/business/guides-and-resources/a-practical-guide-to-building-with-ai/) — business — 2026-07-28
7. [How OpenAI Uses Codex](https://openai.com/business/guides-and-resources/how-openai-uses-codex/) — business — 2026-07-28

---

*报告生成完毕。如需对 OpenAI 的仅元数据条目进行正文层深度分析，需要补充抓取任务以获取完整文本。*

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*