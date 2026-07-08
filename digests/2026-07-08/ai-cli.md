# AI CLI 工具社区动态日报 2026-07-08

> 生成时间: 2026-07-08 06:22 UTC | 覆盖工具: 9 个

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [Gemini CLI](https://github.com/google-gemini/gemini-cli)
- [GitHub Copilot CLI](https://github.com/github/copilot-cli)
- [Kimi Code CLI](https://github.com/MoonshotAI/kimi-cli)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Pi](https://github.com/badlogic/pi-mono)
- [Qwen Code](https://github.com/QwenLM/qwen-code)
- [DeepSeek TUI](https://github.com/Hmbown/DeepSeek-TUI)
- [Claude Code Skills](https://github.com/anthropics/skills)

---

## 横向对比

# AI CLI 工具横向对比分析报告
**数据周期**：2026-07-07 ~ 2026-07-08
**覆盖工具**：9 款（Claude Code / Codex / Gemini CLI / Copilot CLI / Kimi CLI / OpenCode / Pi / Qwen Code / CodeWhale）

---

## 1. 生态全景

2026 年中段的 AI CLI 工具市场已从"模型层差异"收敛为"工程能力差异"——主流玩家普遍完成 v1.x 或 v2.x 迭代，**本日观察显示社区矛盾集中在三个层面**：(1) **多智能体/子代理可靠性**已成跨工具通病；(2) **IDE 与 Windows 平台**仍是公认的薄弱面；(3) **可观测性、数据完整性与远程沙箱策略**正在接管过去"模型行为"的讨论热度。与此同时，OpenCode（v1.17.15）补齐 V2 能力、CodeWhale（v0.8.67）启用品牌重塑与 TTC 自审设计，预示**协议级抽象与白标化（whitelabel）路线**是下个半年的主轴。

---

## 2. 各工具活跃度对比

| 工具 | Release | Issue 活跃 | PR 活跃 | 综合热度信号 |
|------|---------|-----------|---------|-------------|
| **Claude Code** | 2 个（v2.1.203/204） | 49 条 | 6 条 | 🔥 高密度讨论，回归问题暴露 |
| **OpenAI Codex** | 2 个（v0.143.0 / α.39） | ~25 条（10 热门） | 10 条 | 🔥 模型争议 + Windows 集中爆发 |
| **Gemini CLI** | 0 个（nightly 失败） | Top10 高赞 | 10 条 | 🟡 子代理事故成焦点 |
| **GitHub Copilot CLI** | 2 个（v1.0.69 / 69-3） | 28 条 | 2 条 | 🟡 沙箱策略高速迭代，PR 偏少 |
| **Kimi CLI** | 0 个 | 1 条 | 0 条 | ⬇️ 静默期，样本不足 |
| **OpenCode** | 1 个（v1.17.15） | 24 条 | **50 条** | 🔥🔥 PR 活跃度全榜最高 |
| **Pi** | 0 个 | 27 条 | 24 条 | 🔥 集中清积压，TUI 稳态化 |
| **Qwen Code** | 1 个（v0.19.7） | 9 条 | **50 条** | 🔥🔥 PR 活跃度与 OpenCode 并列 |
| **DeepSeek TUI / CodeWhale** | 1 个（v0.8.67） | 30 条 | 34 条 | 🔥🔥 品牌重塑 + TTC 战略级特性 |

> **注**：Kimi CLI 数据样本显著偏低（日更仅 1 Issue / 0 PR），下述趋势分析中将其作为参照点而非参与者。

---

## 3. 共同关注的功能方向

| 方向 | 涉及工具 | 具体诉求 |
|------|----------|----------|
| **🧩 Subagent / 多智能体可靠性** | Claude Code (#75542)、Gemini CLI (#21409/#22323)、Qwen Code (#6505)、CodeWhale (#4094) | 循环检测、状态上报、轨迹可见性、无限挂起；四款工具都在用 P0/P1 级别问题反映同一类痛点。 |
| **🪟 Windows 平台体验** | Claude Code (#70520/#74649)、Codex (#29089/#28919/#30637)、Copilot CLI (#4041/#4046)、CodeWhale (#4202) | 沙箱模块、远程控制、路径乱码、TUI 渲染、中文编码（GBK）；"Windows 二等公民"问题跨厂商。 |
| **🔌 MCP / 插件生态** | Claude Code (#75537)、Codex (#31482)、Copilot CLI (#2643/#4048)、OpenCode (#35860/#35867)、Kimi CLI (#1604) | 热重载、子进程清理、MCP discovery、第三方 catalog 接入（Figma 等设计协作 MCP 持续升温）。 |
| **🖥️ IDE 集成深度** | Claude Code (#47166 JetBrains)、Codex (#17827 status line / #31504 LSP)、Copilot CLI | VS Code 完成通知、状态栏可定制、LSP 跨文件理解，"对标 Claude Code"是显性话术。 |
| **📊 会话历史/可观测性** | Qwen Code (#6501 parentUuid 断裂)、Claude Code (#75535/#75548)、Codex (#31478 日志风暴)、OpenCode (#6680 归档)、CodeWhale (#4093/#4094) | 数据丢失/截断、SSD 损耗、自动归档误杀，**对话可靠性**已取代模型质量成为新焦点。 |
| **🧠 模型适配层与 BYOK** | Claude Code (#67506/#73365 Fable 5)、Codex (#30364 GPT-5.5)、OpenCode (#35863 上下文硬编码)、Pi (#6206 语义模糊)、Copilot CLI (#3954 explore 硬编码) | 模型元数据可信度、计费透明度、参数覆盖路径不一致。 |
| **🔒 沙箱与权限系统** | Claude Code (#75534/#75549)、Codex (#31526 hosted 工具白名单)、Copilot CLI (v1.0.69 核心迭代轴) | host-only 工具集、审批路由集中化、UserPromptSubmit 阻断原因透出。 |

---

## 4. 差异化定位分析

| 工具 | 功能侧重 | 目标用户 | 技术路线特征 |
|------|----------|----------|-------------|
| **Claude Code** | 模型深度 + Agent 可控性 | 高级个人开发者、企业 | **TUI-first + Hook 协议化**，强调 subagent / plugin / IDE 全链路 |
| **OpenAI Codex** | SDK/协议化、生态友好性 | 大型团队、平台集成者 | **Rust 内核 + JSONL 会话协议 + plugin→skills 迁移**，正在严肃补齐"可审计代理" |
| **Gemini CLI** | Agent 调度与评估 | 实验性 / 研究型用户 | **Behavioral Eval 成熟化**（76 项行为评估覆盖 6 模型），Auto Memory 系统进入生产打磨 |
| **GitHub Copilot CLI** | GitHub 工作流 + 沙箱合规 | 企业 CI/CD、安全敏感团队 | **沙箱策略（policy）为核心**，Bun/Tokio 生态，热重载 / BYOK 是下一重点 |
| **OpenCode** | Provider 适配广度 + 桌面端 | 多模型用户、白标开发者 | **V2 协议重构中**（PDF/skills/Tool domain plugin API）；PR 密度全榜第一，社区驱动最强 |
| **Pi** | 流式渲染 + Extension API | Extension 作者、白标产品方（`dn`） | **单一核心维护者（xl0）驱动**，专注 TUI 稳态化 + 给白标场景铺路 |
| **Qwen Code** | 多工作区 + SDK 双端 | 企业 IM 自动化（WeCom）、多项目并行 | **Webhook 触发 + 多工作区路由（Phase 2a）**，subagent 循环检测下沉到子代理内部 |
| **CodeWhale** | Fleet 编排 + TTC 自审 | Dogfood 重度用户、高级实践者 | **lane-* 标签 + canonical packet** 项目管理方法论；TTC（Test-Time Compute）作为战略方向 |
| **Kimi CLI** | （样本不足） | — | — |

**关键分化信号**：
- **"协议化派"**：Codex、OpenCode、Qwen Code 都在把工具调用、Session、MCP 抽象为可序列化协议；
- **"白标派"**：Pi、CodeWhale 把自身定位为可被 fork/重塑的 CLI 框架；
- **"平台派"**：Claude Code、Copilot CLI、Gemini CLI 更依赖 IDE/桌面端绑定与品牌心智。

---

## 5. 社区热度与成熟度

### 5.1 第一梯队：高频迭代 + 战略特性期
- **OpenCode（50 PRs）**、**Qwen Code（50 PRs）**、**CodeWhale（34 PRs）** — PR 流入强度最高，处于"功能边界扩张 + 多线并行"阶段；
- **Claude Code、Codex** — Issue 密度最大（均 49 条级），已进入"成熟期 + 持续争议"模式（模型层 / 平台层）。

### 5.2 第二梯队：稳态修复 + 重点突破
- **Pi（24 PRs / 24 Issues）** — 维护者驱动的稳态化（一日内关闭大量 issue），适合追踪白标/API 演进；
- **Copilot CLI（2 PRs）** — 外部贡献者参与门槛偏高（多为西/中文用户提交），需警惕"品牌信任流失"（#53 半年无回应的隐忧）。

### 5.3 第三梯队：低活跃 / 沉淀期
- **Gemini CLI** — 0 版本发布但子代理问题引发高度关注，处于"问题大于进展"的窗口期；
- **Kimi CLI** — 仅 1 Issue / 0 PR，连续静默，需 7 日/30 日窗口数据再判断。

### 5.4 成熟度判读
- **真正"工程化完成度"**：Claude Code、Codex（虽有缺陷但有持续修复节奏）；
- **"半成品但迭代快"**：OpenCode（V2 迁移中）、CodeWhale（v0.8.x → v0.9.x 铺垫）、Qwen Code（v0.19.x SDK 化）；
- **"生态虚拟化"**：Pi（核心维护者依赖度高）、Copilot CLI（外部贡献门槛高）。

---

## 6. 值得关注的趋势信号

### 🔥 趋势一：Subagent 可靠性成为头部工具的"分水岭"
- **证据链**：Claude Code (#75542)、Gemini CLI (#21409 挂起 + #22323 误报)、Qwen Code (#6505 循环检测)、CodeWhale (#4094 Sub-agent 面板空白)；
- **解读**：多智能体从"加分项"变为"基础设施假设"。Qwen Code 在 #6501/#6502 中给出的"parentUuid 桥接而非截断"是值得借鉴的数据完整性范式；
- **开发者建议**：用 subagent 时务必记录 `parent chain` + `turn context`，避免静默截断；选择 CLI 时优先评估其循环检测覆盖范围（是否下沉到子代理内部）。

### 🔥 趋势二：测试时计算（TTC / 自审）即将主流化
- **证据链**：CodeWhale PR #4201 + #4196/#4199（verify/critique 工具，3 方共识方案）、Codex #17827/#17827（reasoning effort 可配置讨论）；
- **解读**：让 agent 自主决定是否消耗算力做对抗式自审，从"工程技巧"升级为"产品能力"；
- **开发者建议**：在自研 Agent 时预留"二次推理入口"，为将来对接 TTC 工具链做好准备。

### 🔥 趋势三：白标 + Provider 抽象是下半年的战略主轴
- **证据链**：Pi（白标 `dn`）、OpenCode（V2 Tool domain plugin API / MS Entra OAuth）、Codex（hosted tool whitelist + code_mode 切换）；
- **解读**：CLI 工具与"底层模型/平台"的解耦正在加速（Pi #5085 的完整 tool 定义导出就是关键基础设施）；
- **开发者建议**：建立 `~/.config/agent/` 而非硬编码 vendor 配置；优先选择支持 `models.json` 覆盖 + `provider-*` 路由抽象的工具。

### 🔥 趋势四：Windows / 跨平台体验从"边缘话题"升格为"留存问题"
- **证据链**：Codex (4 条 Windows issue)、CodeWhale (#4202 GBK 强制)、Copilot CLI (#4041/#4046)、Claude Code Desktop (#70520/#74649)；
- **解读**：CLI 用户中 Windows + 非英文环境的占比被持续低估，跨平台一致性将成为 2026 下半年厂商竞速点；
- **开发者建议**：CI 中加入 Windows runner 验证；中文/emoji 渲染需在 PR 中强制要求 PowerShell + cmd 截图证据。

### 🔥 趋势五：可观测性与数据完整性挑战"对话信任"
- **证据链**：Codex SQLite 640TB/年（#28224）、Qwen Code 链断裂静默截断 (#6501)、Claude Code 长响应丢弃 (#75535)、CodeWhale Models.dev schema 漂移（5 条串联 issue）；
- **解读**：用户对"agent 说了什么/做了什么"的追溯需求开始压过"agent 能不能做"；
- **开发者建议**：自研时坚持 JSONL 会话日志 + parent 引用完整性 + cost ceiling 三件套，避免被"沉默失败"反噬。

### 🔥 趋势六：模型可配置性成为高级用户决策依据
- **证据链**：Pi (#6206/#6167/#6326 上下文与 compaction 语义群)、Copilot CLI (#3954/#4037 explore 工具硬编码)、OpenCode (#35863 200k 硬编码)；
- **解读**：把 `context_window` 与 `context_budget` 分离开、把 model override 注入到所有内置工具与扩展路径，是高级玩家区分"玩具 CLI"与"生产 CLI"的关键判据；
- **开发者建议**：评估 CLI 时关注：① 是否能让 extension 看到 model override；② 内置工具是否走统一模型解析路径；③ 是否暴露 thinkingLevel 映射。

---

### 📌 决策一句话总结

> **对工具选型者**：若重视"成熟工程底座 + 多 provider 适配"，优先看 **OpenCode / Pi**；若重视"模型深度 + IDE 全链路"，首选 **Claude Code**；若走"企业级 + 安全合规"路线，关注 **Codex / Copilot CLI**；若做"白标/二次开发"，**Pi 的扩展 API + CodeWhale 的 lane 化工法**值得深度跟踪。

> **对自研 Agent 的开发者**：上述六大趋势中，**subagent 可靠性 + TTC 自审 + 数据完整性**是 2026 下半年必须纳入 v1 设计的硬性需求，否则将在用户生产环境中暴露信任成本。

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告
**数据周期：2025-10 ~ 2026-07（截止 2026-07-08）**

---

## 1. 热门 Skills 排行（Top PRs）

> 注：当前数据集中 PR 的评论数未填充，下表以"修复影响面 + 跨平台/多 PR 复现数量 + 最近活跃度"为综合热度排序。

### 🥇 #1298 — skill-creator `run_eval.py` 0% recall 终极修复
- **功能**：修复 `run_eval.py` 始终报告 0% recall 的核心缺陷，包含 Windows 流读取、触发检测、并行 worker 修复
- **讨论热点**：这是一个**跨平台、跨 10+ 独立复现**的 BUG（关联 Issue #556、#1169、#1061），影响所有 skill 描述优化闭环
- **状态**：OPEN（[链接](https://github.com/anthropics/skills/pull/1298)）

### 🥈 #1367 — `self-audit` 通用自审计 Skill
- **功能**：交付前的两层审计：机械文件存在性验证 + 四维推理质量门控，按损害严重度排序
- **讨论热点**：跨技术栈、跨模型的通用质量门控，被视为"AI 输出去幻觉化"的关键拼图
- **状态**：OPEN（[链接](https://github.com/anthropics/skills/pull/1367)）

### 🥉 #514 — `document-typography` 文档排版质量控制
- **功能**：阻止 AI 生成文档的孤字换行、寡头段、编号错位等排版缺陷
- **讨论热点**：面向"提升 Claude 文档输出观感"的普遍痛点，受众面广
- **状态**：OPEN（[链接](https://github.com/anthropics/skills/pull/514)）

### 4️⃣ #83 — `skill-quality-analyzer` + `skill-security-analyzer` 元 Skill
- **功能**：从结构、文档、示例、安全等 5 维度对 Skill 做体检，意图进入 marketplace
- **讨论热点**：与 Issue #492（命名空间安全）形成呼应，反映社区对 Skill 质量与信任体系的系统性诉求
- **状态**：OPEN（[链接](https://github.com/anthropics/skills/pull/83)）

### 5️⃣ #486 — `odt` OpenDocument 读写 Skill
- **功能**：创建/填充/解析 .odt、.ods 文件，覆盖 ISO 标准的开源文档格式
- **讨论热点**：补齐开源办公文档生态，回应欧洲/政府场景对 ODF 格式的强需求
- **状态**：OPEN（[链接](https://github.com/anthropics/skills/pull/486)）

### 6️⃣ #723 — `testing-patterns` 测试模式 Skill
- **功能**：覆盖 Testing Trophy、AAA、React Testing Library、契约测试等完整测试栈
- **讨论热点**：测试生成是代码质量最热门场景之一，新人友好
- **状态**：OPEN（[链接](https://github.com/anthropics/skills/pull/723)）

### 7️⃣ #1302 — `color-expert` 色彩专家 Skill
- **功能**：覆盖 ISCC-NBS/Munsell/XKCD/RAL 等命名体系及 OKLCH/OKLAB/CAM16 色彩空间决策表
- **讨论热点**：前端/设计/数据可视化场景的稀缺专业 Skill
- **状态**：OPEN（[链接](https://github.com/anthropics/skills/pull/1302)）

### 8️⃣ #806 — `sensory` macOS 自动化 Skill
- **功能**：基于 AppleScript 替代基于截图的 computer use，两级权限分级
- **讨论热点**：开辟"无视觉 GUI 自动化"新范式，降低 token 消耗与延迟
- **状态**：OPEN（[链接](https://github.com/anthropics/skills/pull/806)）

---

## 2. 社区需求趋势（来自 Issues 提炼）

| 需求方向 | 代表 Issue | 呼声强度 |
|---------|-----------|---------|
| **🔒 Skill 安全与命名空间治理** | [#492](https://github.com/anthropics/skills/issues/492)（34 评论） | ⭐⭐⭐⭐⭐ |
| **🏢 组织级 Skill 共享/分发** | [#228](https://github.com/anthropics/skills/issues/228)（14 评论，7 👍） | ⭐⭐⭐⭐ |
| **🪟 Windows 跨平台兼容** | [#1061](https://github.com/anthropics/skills/issues/1061)、[#1099](https://github.com/anthropics/skills/pull/1099)、[#1050](https://github.com/anthropics/skills/pull/1050) | ⭐⭐⭐⭐ |
| **🧠 长时 Agent 状态管理** | [#1329](https://github.com/anthropics/skills/issues/1329)（compact-memory） | ⭐⭐⭐ |
| **🛡️ Agent 治理与合规** | [#412](https://github.com/anthropics/skills/issues/412)（agent-governance，CLOSED） | ⭐⭐⭐ |
| **🔌 Skill 协议化/MCP 化** | [#16](https://github.com/anthropics/skills/issues/16) | ⭐⭐ |
| **☁️ 跨平台部署（AWS Bedrock）** | [#29](https://github.com/anthropics/skills/issues/29) | ⭐⭐ |
| **🧹 插件去重/打包卫生** | [#189](https://github.com/anthropics/skills/issues/189)（6 评论，9 👍） | ⭐⭐ |

**关键趋势归纳**：
- **信任基础设施**：单一 Issue 占全部 Issue 评论的近 30%，社区迫切需要"官方/社区 Skill 区分机制"
- **企业化能力**：组织内分发、权限/合规、云平台适配三件套，构成 B 端落地阻碍
- **长时/复杂任务能力**：compact-memory、self-audit 表明社区正在向"多步自治 Agent"演进

---

## 3. 高潜力待合并 Skills

按"近期更新活跃 + 影响面广 + 未合并"筛选：

| PR | Skill | 活跃度信号 | 落地概率 |
|----|------|----------|---------|
| [#1298](https://github.com/anthropics/skills/pull/1298) | run_eval recall 终极修复 | 多 PR 簇拥（#1099/#1050/#1323/#361/#362 同一病灶） | **极高**——阻塞整个描述优化闭环 |
| [#1367](https://github.com/anthropics/skills/pull/1367) | self-audit v1.3.0 | 2 周前更新，概念完整 | 高——通用价值 |
| [#83](https://github.com/anthropics/skills/pull/83) | skill-quality + security analyzer | 长期高关注，契合 #492 | **高**——与命名空间治理强协同 |
| [#723](https://github.com/anthropics/skills/pull/723) | testing-patterns | 1 个月内更新 | 中高 |
| [#486](https://github.com/anthropics/skills/pull/486) | ODT skill | 持续维护中 | 中高 |
| [#514](https://github.com/anthropics/skills/pull/514) | document-typography | 概念清晰，受众广 | 中 |
| [#1302](https://github.com/anthropics/skills/pull/1302) | color-expert | 刚提交，方向稀缺 | 中（需观察维护可持续性） |
| [#806](https://github.com/anthropics/skills/pull/806) | sensory (macOS) | 平台限定但新颖 | 中低（受众受限于 macOS） |

---

## 4. Skills 生态洞察（一句话总结）

> **当前社区最集中的诉求是"建立 Skill 生态的信任与可分发基础设施"——既包括对社区 Skill 冒充官方（#492）的安全恐慌，也包括组织内共享（#228）、跨平台兼容（Windows/Bedrock）以及 Skill 协议化（MCP 化）等落地临门一脚的工程缺口；与此同时，描述优化器（skill-creator）的核心评估回路处于"对噪声优化"的状态，是制约整个生态质量的隐性瓶颈。**

---

# Claude Code 社区动态日报

**日期：2026-07-08**

---

## 📌 今日速览

今日 v2.1.204 版本发布，重点修复了 headless 会话中 SessionStart hook 的流式事件问题，但该版本随即被报告在 macOS 上出现 Agents 视图键盘输入失效的回归问题。社区讨论最热烈的方向集中在 **Opus 4.8 / Fable 5 新模型的稳定性**（模型幻觉、token 计费偏差、advisor 不可用）以及 **TUI 交互体验**（消息队列模式获 135 👍，为近期呼声最高的增强请求）。多个 spell-check 相关的重复 issue 被关闭，反映了 Anthropic 对低价值请求的清理动作。

---

## 🚀 版本发布

### v2.1.204
- 修复 headless 会话中 `SessionStart` hook 事件无法流式传输的问题（导致远程 worker 在 hook 执行中被 idle-reap）

### v2.1.203
- 新增登录即将过期时的告警，避免后台会话意外中断
- 手动权限模式下在 footer 增加灰色 ⏸ 标识，使当前模式始终可见
- 支持会话的额外工作目录（additional working directories）

> ⚠️ 注意：v2.1.204 发布后已被报告存在新回归（见 #75521 Agents 视图键盘失效），建议在生产环境中谨慎升级。

---

## 🔥 社区热点 Issues

| # | Issue | 关注要点 |
|---|-------|----------|
| [#50246](https://github.com/anthropics/claude-code/issues/50246) | **消息队列模式**：Claude 正在执行任务时支持排队后续消息而非强制中断 | **135 👍 / 37 评论** — 近期最热增强请求，反映用户对"不打断当前工作流"的强需求 |
| [#47166](https://github.com/anthropics/claude-code/issues/47166) | **JetBrains 官方级插件** 诉求 | 28 评论，社区长期要求 Claude Code 在 IntelliJ 平台拥有与 VS Code 同等的体验 |
| [#10621](https://github.com/anthropics/claude-code/issues/10621) | Vim 模式下 Plan Mode Q&A 需要双 ESC 才清空消息 | 27 👍 / 21 评论，长期被标 duplicate，反映 Vim 用户痛点持续被搁置 |
| [#73365](https://github.com/anthropics/claude-code/issues/73365) | **Fable 5 advisor 始终显示 unavailable** (v2.1.198) | 31 👍 / 14 评论，新模型集成后出现大量不可用反馈 |
| [#67506](https://github.com/anthropics/claude-code/issues/67506) | **Fable 5 token 消耗与描述不符** | 计费透明度问题，触及用户对成本可预测性的核心诉求 |
| [#74122](https://github.com/anthropics/claude-code/issues/74122) | **TUI 在 tmux 中渲染错乱**（v2.1.200 引入，2.1.199 正常） | 7 评论，干净的回归问题，定位到具体版本 |
| [#75521](https://github.com/anthropics/claude-code/issues/75521) | **v2.1.204 macOS 上 Agents 视图忽略所有键盘输入** | 当日新报告，命中最新版本，需要关注是否会在下个小版本修复 |
| [#75571](https://github.com/anthropics/claude-code/issues/75571) | **VS Code 扩展每 30-40 分钟卡死 90+ 秒**（macOS ARM64） | 子进程在内核 kevent64 正常 idle，怀疑 IDE ↔ CLI 通道死锁 |
| [#75563](https://github.com/anthropics/claude-code/issues/75563) | **Opus 4.8 虚构已完成动作与不存在的用户消息** | 4 份 transcript 已验证，影响 2.1.187–2.1.202 多个版本，模型可信度问题 |
| [#75542](https://github.com/anthropics/claude-code/issues/75542) | **Opus 子代理偶发返回系统提示片段而非执行任务** | Agent tool 可靠性问题，对多代理工作流影响显著 |

---

## 🛠 重要 PR 进展

| # | PR | 内容 |
|---|----|----|
| [#75537](https://github.com/anthropics/claude-code/pull/75537) | **hook-development skill 补齐五种 hook handler 类型** | 修复 `plugin-dev` 教学与 `validate-hook-schema.sh` 漂移问题，覆盖完整 hook 协议 |
| [#75529](https://github.com/anthropics/claude-code/pull/75529) | **code-review 插件文档澄清** | 区分 PR review 插件与内置 `/code-review` skill，命名空间化避免冲突 |
| [#75541](https://github.com/anthropics/claude-code/pull/75541) | **scripts/sweep.ts 修复过期 issue 自动关闭** | 分页拉取 events 并正确处理 unlabeled 场景 |
| [#75252](https://github.com/anthropics/claude-code/pull/75252) | **插件 MCP 配置 scope 说明** | 澄清 plugin `mcpServers` 与用户级 `~/.claude.json` 允许/拒绝列表的关系（#74857 重开版） |
| [#68673](https://github.com/anthropics/claude-code/pull/68673) | **分页逻辑修复** | 在分页页未满时也应跳出，而不仅在空页时跳出 |
| [#73476](https://github.com/anthropics/claude-code/pull/73476) | **README 拼写修正** | "Github" → "GitHub" |

> PR 数量较少（6 条），主要集中于 **文档准确性** 与 **维护脚本健壮性**，无重大功能合入。

---

## 📈 功能需求趋势

从全部 49 条 issue 提炼出社区最关注的五大方向：

1. **IDE 生态扩展**：JetBrains 官方插件（#47166, 28 评论）持续是头号诉求，VS Code 扩展稳定性（#75571 周期性卡死、#68357 统计面板缺失）也被频繁提及。
2. **TUI / 交互体验升级**：消息队列（#50246, 135 👍）、Vim 模式细节（#10621）、tmux 兼容性（#74122）反映出 CLI 用户对"不打断、长会话、终端友好"的强需求。
3. **新模型（Fable 5 / Opus 4.8）落地质量**：advisor 不可用（#73365）、token 计费偏差（#67506）、模型幻觉（#75563, #75546, #75542）三类问题集中爆发。
4. **Desktop 应用能力**：SSH 远程 session 403（#70520）、auto-archive 误杀运行中 subagent（#75548）、Windows HCS 服务缺失（#74649）显示 Desktop 仍处于追赶阶段。
5. **Hooks / 权限系统边界**：UserPromptSubmit 阻断原因未透出到 IDE（#75534）、复合命令权限分解未考虑引号（#75549），安全相关细节持续被挖掘。

---

## 💡 开发者关注点

高频痛点与诉求可归纳为四类：

- **🔴 数据丢失 / 不可恢复**：`#75535` 报告长响应被 TUI 丢弃；`#75548` Desktop 自动归档会终止在飞的后台 subagent —— 这两类问题都涉及用户对"会话可靠性"的基本信任。
- **🔴 模型可靠性**：Opus 4.8 出现**虚构已完成动作、不存在的用户消息、虚假安全告警**（#75563），且问题在多个版本复现，对自动化工作流尤为危险。
- **🟡 网络与连接稳定性**：`#75543` "Connection closed mid-response" 后无法自动恢复，需手动重启；`#75561` `claude --resume` 在 connector discovery 阶段挂死且 SIGINT 不可中断。
- **🟡 行为一致性**：Hooks、权限、统计在 CLI / VS Code / Desktop / `--resume` 四种入口下表现分裂（#75534、#68357、#74122），是开发者构建自动化集成时的主要障碍。

---

*日报基于 2026-07-08 GitHub 公开数据生成，覆盖 2 个 Release、49 条 Issue、6 条 PR。*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报
**日期：2026-07-08**

---

## 1. 今日速览

今日 0.143.0 正式发布，**Remote Plugins 全面默认开启**并集成 npm marketplace 源，跨平台系统代理（macOS/Windows 含 PAC）支持同步落地。社区焦点集中在两条主线：**GPT-5.5 reasoning 推理质量回退** (#30364，热度 158 评 / 252 👍) 与 **SQLite 日志耗尽 SSD 寿命** (#28224，139 评 / 426 👍)——前者涉及模型行为，后者直指 CLI 可观测性设计。同时，**Windows 端问题集中爆发**（sandbox、远程控制、MCP 进程、App 线程顺序），与 IDE 集成增强（LSP、可定制 status line、VS Code 完成通知）形成正反两面。

---

## 2. 版本发布

### 🚀 `rust-v0.143.0`（稳定版）
- **Remote Plugins 默认开启**：catalog 行更丰富，新增 npm marketplace 数据源，远程/本地版本号可见。关联 PR：#30297、#26705、#29375、#30981
- **系统代理支持**：认证与 Responses API 流量现在可走 macOS / Windows 系统代理（含 PAC 脚本）
- 链接：[openai/codex release](https://github.com/openai/codex/releases/tag/rust-v0.143.0)

### 🧪 `rust-v0.143.0-alpha.39`
- 0.143.0 alpha 通道预发布，#31520 中安装脚本相关问题应在后续 alpha 中修复
- 链接：[openai/codex release](https://github.com/openai/codex/releases/tag/rust-v0.143.0-alpha.39)

---

## 3. 社区热点 Issues

| # | 标题 | 热度 | 类别 | 价值解读 |
|---|------|------|------|----------|
| [#30364](https://github.com/openai/codex/issues/30364) | GPT-5.5 Codex reasoning-token 在 516/1034/1552 处聚簇，复杂任务疑似降级 | 158 评 / 252 👍 | model-behavior | 社区认为模型可能对 reasoning token 设置了硬性 boundary，触发效率与质量双降；样本量大，是判断 GPT-5.5 是否"缩水"的关键证据 |
| [#28224](https://github.com/openai/codex/issues/28224) | Codex SQLite 反馈日志理论写入量约 640 TB/年，损耗 SSD | 139 评 / 426 👍 | performance | 早期 PR #29432、#29457 已修复 ~85% 日志（0.142.0 合入），#31478 仍反映残留高频 TRACE 写入 |
| [#14297](https://github.com/openai/codex/issues/14297) | 新版 Codex App 回复前重连 5 次 | 52 评（已 CLOSED） | app | macOS arm 平台复现，已关闭 |
| [#18993](https://github.com/openai/codex/issues/18993) | VS Code 扩展无法打开历史会话 | 43 评 / 53 👍（已 CLOSED） | regression | 1.117.0 回归，社区督促验证 |
| [#17827](https://github.com/openai/codex/issues/17827) | TUI 可定制 status line（对标 Claude Code） | 21 评 / 88 👍 | enhancement | 呼声最高的 UI 增强：token 用量、模型、限速、git 分支等实时显示 |
| [#28507](https://github.com/openai/codex/issues/28507) | "Selected model is at capacity" 频繁触发 | 24 评 / 15 👍 | rate-limits | Pro 5x 用户持续遭遇，疑似容量分配不公 |
| [#29089](https://github.com/openai/codex/issues/29089) | 找不到 codex-windows-sandbox-setup.exe | 13 评 / 10 👍 | windows | Windows 安装/打包路径缺陷 |
| [#17764](https://github.com/openai/codex/issues/17764) | 配额与余额显示不一致 | 9 评 | rate-limits | 0.120.0 至今未解的计量显示问题 |
| [#30137](https://github.com/openai/codex/issues/30137) | GPT-5.5 主观感觉退化为 5.3 | 7 评 | model-behavior | 与 #30364 互相印证 Pro 用户体感 |
| [#31504](https://github.com/openai/codex/issues/31504) | LSP 支持请求：跨文件项目理解 | 3 评 | enhancement | 反映 Codex 在大型代码库中"逐文件逐 shell"工作流的核心短板 |

---

## 4. 重要 PR 进展

| # | 标题 | 方向 | 关键看点 |
|---|------|------|----------|
| [#31526](https://github.com/openai/codex/pull/31526) | 将 hosted 线程工具集限制为服务端注册的工具 | 安全/隔离 | 新增 `server_registered_tools_only` 特性 + 精确 MCP allowlist，避免扩展/协作工具污染 hosted 客户端 |
| [#31460](https://github.com/openai/codex/pull/31460) | 集中化 tool 审批路由（approvals） | 审批/治理 | 用 `ApprovalReviewer` 统一 Guardian、PermissionRequest Hook 与用户审阅分支；保留 hook-first 语义 |
| [#31500](https://github.com/openai/codex/pull/31500) | code-mode 切换到 hosted 为默认 | 架构 | `code_mode_host` 升级为稳定，in-process 运行时变成 opt-out |
| [#31525](https://github.com/openai/codex/pull/31525) | 独立 web search 迁移到 extension-owned turn items | 扩展性 | 借助 #31283 通道，Core 不再感知 extension item，app-server 兼容旧 typed `WebSearch` |
| [#31524](https://github.com/openai/codex/pull/31524) | `codex-protocol` 本地生成 ID 切换到 UUIDv7 | 协议 | 影响 user/agent 消息、hook 提示、context compaction，ID 仍可携带到完整生命周期 |
| [#31482](https://github.com/openai/codex/pull/31482) | 将 plugin commands 迁移为 skills | 插件体系 | 解决 `codex-external-agent-migration` 与 `codex-core-plugins` 的依赖循环 |
| [#31503](https://github.com/openai/codex/pull/31503) | 识别 pnpm 管理的 Codex 安装 | 跨生态 | JS shim 把 pnpm 当作独立运行期，doctor/更新流不再误用 npm |
| [#31295](https://github.com/openai/codex/pull/31295) | 冷启动 skill 加载 macrobenchmark（Bazel） | 性能基准 | 通过合成信任根测端到端 RPC 延迟，1/8/64 技能量级 |
| [#30188](https://github.com/openai/codex/pull/30188) | paginated thread rollout 持久化 `TurnItem` | 协议 | `history_mode = "paginated"` 的新线程在 JSONL 中记录完整 `ItemCompleted(item)` |
| [#31427](https://github.com/openai/codex/pull/31427) | 添加延迟 exec-server transport（用于宏基准） | 性能测试 | 无需 Docker 即可模拟远程执行器网络条件 |

---

## 5. 功能需求趋势

按热度提炼过去 24 小时社区诉求方向：

- **🪟 Windows 平台体验** — 占比最大：sandbox 模块缺失 #29089、远程控制设备消失 #28919 / #30637、MCP 子进程泄漏 #31499、线程顺序错乱 #29561、App 强绑 gpt-5.3-codex #31016、relay 静默断连 #26786。Windows 已稳居"最不被善待的平台"。
- **📈 可观测性与性能** — SQLite 日志风暴 #28224 / #31478、Thinking 状态冗长 #31233、delay transport #31427。从用户侧（SSD 寿命）到 bench 侧（Dev Drive #31357）形成完整生态。
- **🧠 模型质量与配额** — GPT-5.5 推理降级 #30364、#30137、#31523 持续发酵；容量错误 #28507、配额显示 #17764 也未平息。
- **🧩 插件 / Skills 生态** — 0.143 默认开启 Remote Plugins 后，社区重点转向元能力：plugin commands → skills #31482、plugin agent roles #28845、install entry metadata #28798、failure subtype 日志 #31518、hook 命名 #31469。
- **🖥️ IDE 集成深度** — VS Code 完成通知 #31519、LSP 跨文件理解 #31504、可定制 status line #17827 三连击，对标 Claude Code。
- **🌐 Web Search 客户端可读性** — #31525 / #31515 / #31516 / #31379 一条龙 PR，把 URL/标题/snippet 元数据从"内部 transient"透出到 `WebSearchItem.results`。

---

## 6. 开发者关注点

- **痛点 1：GPT-5.5 体验回退** — 大量 Pro/Plus 用户反馈"模型变笨"。社区自发用 `reasoning_output_tokens` 聚簇做量化分析 (#30364)，比单纯体感报告更具说服力。**结论：模型行为透明度亟需官方回应。**
- **痛点 2：本地写入失控** — SQLite 反馈/TRACE 日志在生产机器上"以 TB 计数"写入 (#28224、#31478)，开发者呼吁分层开关、按需开启。0.142.0 缓解 85%，但**残留高优 TRACE 仍未根治**。
- **痛点 3：Windows 沙箱与远程控制** — `codex-windows-sandbox-setup.exe` 缺失、远程控制设备列表莫名消失、relay 长时间无自动重连。**Windows 用户群感受到明显的"二等公民"待遇**。
- **痛点 4：CLI 终端边界条件** — `codex resume` 把 base64 内嵌图片直接倾倒到 IntelliJ 终端 (#31521)、split terminal 触发信任 prompt 立即退出 (#31420)、更新脚本找不到 npm 资产 (#31520) — 终端兼容性是 CLI 迭代中被反复低估的细节。
- **高频需求：LSP 与跨文件理解** — 单文件单 shell 工作流是 Pro 用户共识的瓶颈 (#31504)，LSP 不仅提升质量，也是支持大型 monorepo 的入场券。
- **高频需求：VS Code 体验** — 历史会话打不开 #18993（已修）、无完成通知 #31519、status line 不可定制 #17827 — **VS Code 扩展正在追赶 TUI 已有能力**。
- **安全视角升级** — #31526（hosted 线程工具白名单）+ #31460（审批路由集中化）+ #31469（hook 命名与可识别性）三条线显示 **Codex 正在严肃补齐"可审计代理"短板**。

---

*日报基于 openai/codex 仓库 2026-07-08 当日数据生成。*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报
**日期：2026-07-08**

---

## 📌 今日速览

今日社区焦点集中在 **Agent 子代理（Subagent）行为异常** 与 **夜间版本发布失败** 两件事。Issue #21409「Generalist agent 无限挂起」累计 8 个 👍，是当日最受用户关注的问题；同时 v0.51.0-nightly 发布任务失败（#28308），需关注后续修复。PR 方面，CJK 文本渲染、OAuth SSRF 防护、JSON/IPYNB 文件修复等多个实用补丁活跃提交。

---

## 🚀 版本发布

**无新版本发布。** ⚠️ 注意：v0.51.0-nightly.20260708 发布任务失败，详见 [Issue #28308](https://github.com/google-gemini/gemini-cli/issues/28308)。

---

## 🔥 社区热点 Issues（Top 10）

| # | Issue | 优先级 | 评论/👍 | 关注点 |
|---|-------|--------|---------|--------|
| 1 | [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) Generalist agent hangs | P1 | 7/8 | **最热门**：简单操作（如建文件夹）即触发无限挂起，社区高赞 |
| 2 | [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) Subagent 命中 MAX_TURNS 误报为 GOAL 成功 | P1 | 10/2 | 评论最多，子代理中断状态被错误隐藏，影响调试 |
| 3 | [#28052](https://github.com/google-gemini/gemini-cli/issues/28052) `antigravity.google` URL 多余句点 | P2 | 9/0 | 适合新手的 Good First Issue，登录错误信息链接失效 |
| 4 | [#24353](https://github.com/google-gemini/gemini-cli/issues/24353) 组件级行为评估 | P1 | 7/0 | EPIC 级，已积累 76 项行为评估、覆盖 6 个模型 |
| 5 | [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) AST 感知的文件读取/搜索/映射 | P2 | 7/1 | 探索 AST-aware 工具链，潜在性能/精度提升 |
| 6 | [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) Gemini 不主动使用 skills/sub-agents | P2 | 6/0 | Agent 自主调度能力不足，需显式提示才调用 |
| 7 | [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) Shell 命令完成后仍卡在「Waiting input」 | P1 | 4/3 | 命令执行流卡死，影响日常使用 |
| 8 | [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) Browser subagent 在 Wayland 失败 | P1 | 4/1 | 浏览器子代理在 Linux Wayland 环境下的兼容性问题 |
| 9 | [#26522](https://github.com/google-gemini/gemini-cli/issues/26522) Auto Memory 无限重试低价值会话 | P2 | 5/0 | Auto Memory 索引机制缺陷 |
| 10 | [#21763](https://github.com/google-gemini/gemini-cli/issues/21763) Bug 报告缺少子代理上下文 | P1 | 2/0 | `/bug` 命令未捕获子代理信息，影响问题排查 |

---

## 🛠️ 重要 PR 进展（Top 10）

| # | PR | 类型 | 内容 |
|---|-----|------|------|
| 1 | [#28309](https://github.com/google-gemini/gemini-cli/pull/28309) 改进 Markdown CJK 渲染 | fix | 修复中文/日文/韩文硬换行及 `__bold__` 解析问题 |
| 2 | [#28224](https://github.com/google-gemini/gemini-cli/pull/28224) 截断显示避免切断 emoji | fix | `sanitizeForDisplay` 不再劈开代理对（surrogate pair） |
| 3 | [#28223](https://github.com/google-gemini/gemini-cli/pull/28223) write_file/replace 跳过 LLM 纠错（JSON/IPYNB） | fix | 解决 `.json` 与 `.ipynb` 文件损坏问题 |
| 4 | [#28112](https://github.com/google-gemini/gemini-cli/pull/28112) OAuth 元数据发现增加 SSRF 防护 | fix/security | 与 `web-fetch.ts` 对齐，校验 MCP 返回的 URL |
| 5 | [#28103](https://github.com/google-gemini/gemini-cli/pull/28103) OAuth 令牌交换避免 keep-alive 复用 | fix | 解决 Node 24.17/22.23/26.3 上 CVE-2026-48931 触发的 `Premature close` |
| 6 | [#28304](https://github.com/google-gemini/gemini-cli/pull/28304) 无 Code Assist 层级账户显示明确提示 | fix/privacy | `/privacy` 对 Workspace/无项目账户不再暴露原始后端信息 |
| 7 | [#28219](https://github.com/google-gemini/gemini-cli/pull/28219) 解析带注释的 settings.json | fix | 父进程正确读取含 `//` 注释的 `settings.json`，避免默认回退 |
| 8 | [#28306](https://github.com/google-gemini/gemini-cli/pull/28306) Caretaker Triage Worker 主循环 | feat | Cloud Run Job 调度循环与 Pub/Sub egress 发布器 |
| 9 | [#28305](https://github.com/google-gemini/gemini-cli/pull/28305) Eval 工具调用时间线格式化 | feat/evals | 失败时打印编号化工具调用时间线，含参数/状态/错误 |
| 10 | [#28169](https://github.com/google-gemini/gemini-cli/pull/28169) Eval 覆盖率报告命令 | feat/evals | `npm run eval:coverage` 跨工具注册表检查覆盖度 |

---

## 📈 功能需求趋势

从当日活跃 Issue 提炼出以下社区最关注的方向：

1. **🤖 Agent 子代理体系** — 子代理是最大热点：行为异常（#21409, #22323, #22093）、调度不足（#21968）、轨迹可见性（#22598, #21763）、浏览器子代理稳定性（#21983, #22267, #22232）以及权限失控（#22093）。
2. **🧠 Auto Memory 系统** — 多条 P2 Issue（#26522, #26523, #26525, #26516）集中修复记忆系统的去重、补丁验证、日志脱敏与低信号过滤，反映该子系统正进入生产化打磨阶段。
3. **📊 行为评估（Behavioral Eval）基础设施** — #24353 推进组件级评测，#23313 修复测试恒通过，#28305/#28169 增强可观测性。评估体系趋于成熟。
4. **🌳 AST-aware 工具链** — #22745 与 #22746 探索基于 AST 的代码读取/搜索/映射，目标是减少 token 浪费并提升精度。
5. **🔐 安全与隐私** — OAuth SSRF 防护（#28112）、CVE-2026-48931 兼容（#28103）、Auto Memory 脱敏（#26525）、隐私提示优化（#28304）。
6. **🖥️ 终端渲染与性能** — CJK/emoji 渲染（#28309, #28224）、终端 resize 闪烁（#21924）、外部编辑器退出后刷新（#24935）。

---

## 💬 开发者关注点（痛点与高频需求）

| 类别 | 核心问题 |
|------|---------|
| **Agent 可靠性** | 简单操作触发无限挂起（#21409）、Shell 命令流卡死（#25166）、交互式提示卡住（#22465）。开发者对"能完成任务但不稳定"的体验最敏感。 |
| **子代理管理** | Agent 擅自动用子代理（#22093）、子代理对 skills/子代理调用不足（#21968）、中断状态上报错误（#22323）。子代理的"自治边界"是当前争议焦点。 |
| **可观测性** | Bug 报告缺失子代理上下文（#21763）、`/chat share` 不含子代理轨迹（#22598）、评估失败缺少工具时间线（#28305）。"出了事不知到哪看"是普遍呼声。 |
| **文件操作健壮性** | 模型在随机目录写 tmp 脚本（#23571）、`\n` 转义错误（#22466）、`.ipynb`/`.json` 被 LLM 纠错破坏（#28223）。 |
| **登录与身份** | 错误消息中 URL 含多余句点（#28052）、Workspace 账户隐私提示不友好（#28304）。 |
| **Agent 自认知** | 模型对自身 CLI flag、快捷键、自启动能力不熟（#21432），难以充当用户的"专家引导"。 |

---

*日报基于 github.com/google-gemini/gemini-cli 过去 24 小时数据自动生成。*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报
**日期：2026-07-08**

---

## 1. 今日速览

过去 24 小时，Copilot CLI 围绕 **沙箱策略（Sandbox Policy）** 连续发布 v1.0.69 与 v1.0.69-3 双版本，对文件编辑与 `web_fetch` 的网络隔离规则进行细化；社区侧则出现大量集中在 **MCP/插件系统稳定性、Agent 行为异常、TUI 渲染与 IPv4 沙箱** 的新 Issue 涌入，Issues 活动显著上升（28 条更新）。历史最热的 #53（"恢复 CLI 原生命令"）依然稳居榜首，至今 6 个月未获官方正面回应，社区自建替代品开始扩散。

---

## 2. 版本发布

### v1.0.69（2026-07-07）
- 内置文件编辑标签由 `(sandboxed)` 改为 `(sandbox policy)`，更准确反映其"按策略尽力执行"而非 OS 级沙箱的语义。
- 已安装插件扩展可**无需重启会话**即可热重载。
- 新增 `/plugins` 仪表盘，集中管理插件。

### v1.0.69-3（2026-07-07）
- 内置文件编辑在用户**手动批准**后可绕过沙箱。
- `web_fetch` 强制遵循当前沙箱网络策略（阻断越权出站/本地目标）；当 host 通过 `sandbox.allowBypass` 显式开启时，可在 fetch 弹窗中授权一次性绕过。

📌 **观察**：沙箱策略成为本轮版本迭代的核心轴，相关 API 仍在快速演进，文档与跨平台一致性明显滞后（见 #4046、#4041）。

---

## 3. 社区热点 Issues

> 选取标准：互动量（👍 / 评论）、对核心功能的影响面、是否反映系统性缺陷。

1. **#53 恢复 GitHub Copilot CLI 原生命令** — 👍 75 · 💬 37  
   [链接](https://github.com/github/copilot-cli/issues/53)  
   长期最热议题，开 6 个月无官方响应。社区已分叉出 [`shell-ai`](https://github.com/Deltik/shell-ai) 等替代项目，呈现"用户自行 fork"的罕见态势。

2. **#2643 preToolUse 钩子 `updatedInput` 静默改写命令失败** — 💬 12  
   [链接](https://github.com/github/copilot-cli/issues/2643)  
   即便 hook 返回 `permissionDecision: allow`，仍弹出确认弹窗，破坏插件开发者的"无感改写"工作流。

3. **#3123 `/research` 命令无法写出报告** — 💬 5 · 👍 5  
   [链接](https://github.com/github/copilot-cli/issues/3123)  
   research agent 完成调研后无法调用 `create` 工具落盘，是 Agent 工具注册与权限链路的回归问题。

4. **#2729 `/delegate` 命令忽略指定的源分支与目标分支名** — 💬 3  
   [链接](https://github.com/github/copilot-cli/issues/2729)  
   直接影响多分支协作工作流，分支参数被静默丢弃。

5. **#3440 `session.disconnect()` 不清理 stdio MCP 子进程** — 💬 2（已关闭）  
   [链接](https://github.com/github/copilot-cli/issues/3440)  
   暴露 SDK 资源泄漏风险：仅在 `CopilotClient.stop()` 时子进程才会被回收。

6. **#4053 TUI 在 NFS/GPFS 上"Loading: N skills"挂死**（新）— 💬 1  
   [链接](https://github.com/github/copilot-cli/issues/4053)  
   涉及 Tokio + `which gh` 子进程的 SIGCHLD 竞态，定位到高并发线程下的子进程回收缺陷，对企业/科研 NFS 用户影响显著。

7. **#4054 `/resume` 对非 Git 会话完全失效**（新）— 💬 1  
   [链接](https://github.com/github/copilot-cli/issues/4054)  
   非 git 工作目录下 `repository='/'` 的会话被 git 过滤门挡在外面，是典型的"catch-22"设计缺陷。

8. **#3954 `explore` 工具硬编码 `gpt-5.4-mini`，忽略 BYOK/DeepSeek 配置** — 💬 1 · 👍 1  
   [链接](https://github.com/github/copilot-cli/issues/3954)  
   自 v1.0.65 起的回归，自定义模型端点被绕过，反映内置工具未走统一模型解析路径。

9. **#4049 Docker stdio MCP 服务在 `/new` `/resume` 后重复累积**（新）— 💬 0  
   [链接](https://github.com/github/copilot-cli/issues/4049)  
   同一 CLI 进程内多次会话切换会反复 `docker run`，长期运行将耗尽宿主机资源。

10. **#4047 自定义 Agent 在会话中途回退为 Default**（新）— 💬 0  
    [链接](https://github.com/github/copilot-cli/issues/4047)  
    首轮指定的自定义 agent 在后续推理中失效，session 状态机疑似未持久化 agent 上下文。

---

## 4. 重要 PR 进展

> 过去 24 小时仅有 2 个 PR 被更新，且均无描述信息：

- **#4057 "Install"**（新）— [链接](https://github.com/github/copilot-cli/pull/4057)  
  作者：@EverydayEvertime。尚无内容描述，待关注是否与安装/分发流程相关。

- **#3708 "Add files via upload"** — [链接](https://github.com/github/copilot-cli/pull/3708)  
  作者：@panchofrancisco1987-ui。6 月 7 日创建、无描述，长时间处于停滞状态。

📌 **观察**：PR 数量与活跃度明显低于 Issue 侧，提交者多以中文/西班牙语用户为主，**外部贡献者参与门槛较高**，建议关注后续说明补充。

---

## 5. 功能需求趋势

综合 28 条活跃 Issue，可归纳出当前社区最集中的诉求方向：

| 方向 | 代表性 Issue | 关键诉求 |
|---|---|---|
| **沙箱策略与安全** | #4041、#4046、#4039 | 跨平台一致性、IPv4/IPv6 网络隔离、企业托管插件真实落盘 |
| **插件/MCP 生态** | #4048、#4049、#4039、#2643 | 插件热重载、Skills 转 slash 命令、stdio 子进程清理、交互式输入变量 |
| **自定义模型 / BYOK** | #3954、#4037 | 统一模型解析路径、ACP 模式下支持自有 LLM（JetBrains 需求） |
| **Agent 工作流** | #3123、#2729、#4047 | `/research` 落盘、 `/delegate` 分支、Agent 上下文保持 |
| **TUI/UX** | #4043、#4045、#4051、#4036 | 状态栏遮挡、Ctrl+V 去抖、终端渲染兼容、桌面通知触发逻辑 |
| **非交互模式（CI/SDK）** | #4038、#3440 | 空消息注入、子进程生命周期 |

📈 趋势洞察：**"沙箱 + 插件 + BYOK"** 三者已成为下个版本必须正面回应的核心三角。

---

## 6. 开发者关注点

- **🔧 沙箱策略不稳定**：跨平台体验差异显著（Windows 26300+ 版本号要求、IPv4 沙箱环境下 `web_fetch` 全面失效），与最新 v1.0.69 的策略升级存在摩擦。
- **🔌 插件与 MCP 资源管理**：stdio 子进程不释放、Docker MCP 重复拉起、企业托管插件"已标记但未落盘"等"隐性状态"问题频发。
- **🤖 Agent 行为漂移**：自定义 agent 在会话中回退、`/research` 工具缺失、模型硬编码，反映 Agent 框架的 session 状态机仍不够稳健。
- **⌨️ TUI 细节体验**：macOS 桌面通知、iTerm2 随机串字符、状态栏遮挡 prompt 等问题虽小但高密度出现。
- **🗣️ 社区与官方沟通断层**：最热 Issue #53 已 6 个月无回应，开发者在外部自建工具链，**官方需建立针对高赞 Issue 的定期反馈机制**，避免品牌信任流失。

---

*本日报基于 2026-07-07 ~ 2026-07-08 的 GitHub 公开数据整理生成。*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报

**日期**：2026-07-08
**数据来源**：[MoonshotAI/kimi-cli](https://github.com/MoonshotAI/kimi-cli)

---

## 今日速览

今日 Kimi CLI 仓库社区活动处于低位，过去 24 小时内无新版本发布、无新 PR 提交，仅有 1 条 Issue 获得更新。整体进入沉淀期，建议关注项目后续动态。

---

## 版本发布

> ⚠️ 过去 24 小时内**无新版本发布**，本节省略。
> 建议前往 [Releases 页面](https://github.com/MoonshotAI/kimi-cli/releases) 查看历史版本。

---

## 社区热点 Issues

> 📊 过去 24 小时内仅有 **1 条** Issue 更新活跃，以下为完整呈现。

### 1. [Issue #1604 - Figma MCP Support](https://github.com/MoonshotAI/kimi-cli/issues/1604)

| 项目 | 详情 |
|------|------|
| **状态** | OPEN（增强需求） |
| **作者** | maoxian-1 |
| **创建时间** | 2026-03-27 |
| **最近更新** | 2026-07-07 |
| **互动数据** | 💬 1 条评论 ｜ 👍 2 个反应 |

**需求摘要**：
用户希望 Kimi CLI 支持 [Figma MCP Catalog](https://www.figma.com/mcp-catalog/) 中提供的 Figma MCP 服务，以便在编码工作流中直接调用 Figma 设计资源。该服务目前需要预注册才能使用，用户期待 Kimi CLI 能原生集成或简化接入流程。

**社区反应**：
- 👍 2 次赞同，表明该需求获得了一定关注。
- 💬 1 条评论，可能涉及实现方案或接入方式的讨论。

**为什么值得关注**：
设计-研发协作（Design-to-Code）是当前 AI 编码工具的重要演进方向，集成 Figma MCP 后可在 IDE/CLI 中实现「读 Figma 稿 → 生成代码」闭环，对前端开发者有较高实用价值。

---

## 重要 PR 进展

> ⚠️ 过去 24 小时内**无 PR 更新**，本节省略。
> 建议前往 [Pull Requests 页面](https://github.com/MoonshotAI/kimi-cli/pulls) 跟踪合并动态。

---

## 功能需求趋势

基于过去 24 小时的 Issue 数据，可观察到的社区关注方向如下：

| 趋势方向 | 出现频次 | 代表 Issue | 说明 |
|----------|----------|------------|------|
| **MCP 生态扩展** | 1 | [#1604](https://github.com/MoonshotAI/kimi-cli/issues/1604) | 社区希望接入更多第三方 MCP（如 Figma），扩展 CLI 的工具调用能力。 |
| **设计协作类工具集成** | 1 | [#1604](https://github.com/MoonshotAI/kimi-cli/issues/1604) | 反映出「设计稿 → 代码」自动化链路的需求正在升温。 |

> 💡 **观察**：由于单日 Issue 数据样本极少（仅 1 条），上述趋势仅供参考。建议结合 7 日或 30 日的累计 Issue 做更准确的判断。

---

## 开发者关注点

**痛点**：
- **第三方工具接入门槛高**：Figma MCP 需要预注册才能使用，开发者期望 CLI 工具能提供更顺畅的 MCP 接入体验。
- **设计-编码链路割裂**：从 Issue 内容看，开发者期待在终端中直接消费设计资产，而非切换到多个工具之间。

**高频需求**：
- 🧩 期待 CLI 原生支持更多 **MCP Server**（尤其是设计、开发协作类）。
- 🔌 简化 MCP 的 **注册与认证流程**，降低使用成本。

---

## 附录：数据说明

- **统计窗口**：2026-07-07 ~ 2026-07-08（24 小时）
- **数据样本**：1 条 Issue 更新 ｜ 0 条 PR ｜ 0 个 Release
- **建议**：因单日数据量较少，如需更全面的趋势分析，可扩大统计窗口至 7 天或 30 天。

> 📌 如需订阅自动日报或自定义分析维度，欢迎反馈！

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报

**日期：2026-07-08**

---

## 📌 今日速览

今日 OpenCode 发布 **v1.17.15**，主要修复 Z.ai 上下文溢出错误的归类问题及配置文件读取的健壮性。社区焦点集中在 **V2 版本演进**（PDF 输入、skills 发现、插件 API 扩展）与 **桌面端稳定性**（Windows 长会话内存泄漏、Mac 主进程异常等），同时 Discord 替代平台与品牌重塑（xAI → SpaceXAI）等治理类议题也开始进入讨论。

---

## 🚀 版本发布

### v1.17.15

**Core 修复**
- 更准确地归类 Z.ai 上下文窗口溢出错误，便于上层呈现正确的失败模式（@fengjikui）
- 配置文件读取时，对不可用的配置目录做更优雅的降级处理

**Desktop 改进**
- 恢复模型面板中模型详情的 tooltip 显示

👉 [Release 链接](https://github.com/anomalyco/opencode/releases/tag/v1.17.15)

---

## 🔥 社区热点 Issues

| # | Issue | 热度 | 关注理由 |
|---|-------|------|----------|
| 1 | **[#6680](https://github.com/anomalyco/opencode/issues/6680)** 桌面端查看归档会话 | 💬35 👍22 | 长期高呼声需求，35 条评论 22 赞，社区反复催更；属于会话管理 UX 补全。 |
| 2 | **[#35847](https://github.com/anomalyco/opencode/issues/35847)** Bun Illegal instruction + 12h 后内存泄漏 45GB | 💬4 🆕 | 严重生产事故：Windows 11 长会话 RSS 飙到 42.9 GB，是当前最紧迫的稳定性问题。 |
| 3 | **[#35859](https://github.com/anomalyco/opencode/issues/35859)** 禁用内置 CopilotAuthPlugin 关闭 GitHub OAuth 弹窗 | 💬4 🆕 | 影响每个 Windows 启动体验，且指向编译时硬编码的 `INTERNAL_PLUGINS`，需要架构层解决。 |
| 4 | **[#35863](https://github.com/anomalyco/opencode/issues/35863)** 上下文窗口硬编码 200k，未按 provider 解析 | 💬1 🆕 | 影响自动压缩与溢出判断的准确性，是模型适配层的系统性问题。 |
| 5 | **[#35846](https://github.com/anomalyco/opencode/issues/35846)** `limit >= 19` 时 session 列表崩溃 | 💬3 🆕 | 与多实例并发读写有关，对长期使用者影响明显。 |
| 6 | **[#27871](https://github.com/anomalyco/opencode/issues/27871)** 空 bash 参数 `{}` 仍可提交并中断会话 | 💬5 | 旧版本 `1.15.2` 仍可复现，"空输入工具"系列 bug 的新分支。 |
| 7 | **[#34410](https://github.com/anomalyco/opencode/issues/34410)** TUI 中支持 `@` 和 `/` 触发 skill | 💬1 👍1 | 与今日 `#35854` 闭环呼应，是 TUI 交互增强方向的核心提案。 |
| 8 | **[#35864](https://github.com/anomalyco/opencode/issues/35864)** [2.0] V2 从 `.agents` 目录加载 skills | 💬0 🆕 | 跨 Agent 兼容性问题，影响 V2 切换成本。 |
| 9 | **[#35862](https://github.com/anomalyco/opencode/issues/35862)** [2.0] V2 原生 OpenAI/Anthropic 路由支持 PDF | 💬0 🆕 | 涉及 V2 模型能力声明到 provider 的 lowering 链路。 |
| 10 | **[#35843](https://github.com/anomalyco/opencode/issues/35843)** 为离开 Discord 的用户建立 Matrix 服务器 | 💬0 🆕 | 社区治理方向变化，反映对 Discord 隐私政策的不满。 |

> 注：当日有 **11 条 Issue 已关闭**，涵盖 Windows 计划模式（#34891）、Mac 主进程 JS 异常（#35825）、桌面端相同文件名冲突（#35834）、`Ctrl+V` 失效（#26283）、xAI → SpaceXAI 品牌更新（#35865 已提 PR）等。

---

## 🛠 重要 PR 进展

| PR | 标题 | 价值 |
|----|------|------|
| **[#35311](https://github.com/anomalyco/opencode/pull/35311)** | core: 同一仓库的多个 clone 识别为不同项目 | 一次性关闭 16 条相关 issue，是项目/工作区模型的核心修复。 |
| **[#35869](https://github.com/anomalyco/opencode/pull/35869)** | plugin: 为 V2 插件 API 增加 Tool domain | 让 Effect/Promise 插件以 transform 模式注册/卸载工具，扩展插件生态。 |
| **[#35848](https://github.com/anomalyco/opencode/pull/35848)** | core: 规范化模型输入能力 | 对无元数据的模型默认 text+image 输入，并在 models.dev 与 V1 边界翻译旧 `attachment` 字段，配套修复 #35863。 |
| **[#31351](https://github.com/anomalyco/opencode/pull/31351)** | opencode: 通过 MS Entra ID 与 az cli 增加 Azure OAuth | 为 Azure/Azure Cognitive Services 增加企业级登录方式。 |
| **[#8535](https://github.com/anomalyco/opencode/pull/8535)** | session: 双向游标分页 | 贯穿 server、app、TUI 与 HttpApi 的会话消息分页升级（closes #6548）。 |
| **[#9545](https://github.com/anomalyco/opencode/pull/9545)** | usage: 统一用量追踪 + auth 刷新 | 内建 OAuth 用量追踪（closes #9281），整合 #6905/#7837 并替代 #9301。 |
| **[#35867](https://github.com/anomalyco/opencode/pull/35867)** | skill: 修复 MCP 本地服务器 env 键名 | 把示例中的 `env` 修正为运行时实际的 `environment`（closes #35860）。 |
| **[#35866](https://github.com/anomalyco/opencode/pull/35866)** | docs: xAI 品牌更新为 SpaceXAI | 同步 provider 标签、OAuth 名称、模型目录与文档（closes #35865）。 |
| **[#33547](https://github.com/anomalyco/opencode/pull/33547)** | go: 过滤 `/zen/go/v1/models` 仅展示 oa-compat 模型 | 修 Go 端点误返回全部 lite 模型的问题（closes #33244/#29688）。 |
| **[#35790](https://github.com/anomalyco/opencode/pull/35790)** | desktop: 跳过陈旧的远程会话恢复 | 修复 Windows 启动时错误还原 WSL 远程会话的问题（已 CLOSED）。 |

> 另值得关注：**#31835**（安装脚本 Ctrl+C 后光标隐藏）、**#34741**（韩文 README 润色）、**#35858**（命令面板首次打开闪烁修复，延续 #35349 的方案）。

---

## 📈 功能需求趋势

从当日 24 条 Issue 提炼，社区最关注的方向集中在以下几类：

1. **V2 能力补齐（最密集）**  
   `.agents/skills` 发现、原生 PDF 输入、模型输入能力规范化、V2 插件 Tool domain——V2 切换路径上的关键缺口正在被逐一解决。

2. **模型/Provider 生态扩展**  
   - xAI → SpaceXAI 品牌同步（#35865/#35866）  
   - Azure 通过 Entra ID/az cli OAuth 登录（#31351）  
   - LiteLLM proxy 模型参数透传（#35852）  
   - 自定义 OpenAI 兼容端点自动拉取 model IDs（#35855）  
   - 上下文窗口按 provider 元数据动态解析（#35863）

3. **桌面端稳定性**  
   Bun 长时间会话内存泄漏、Mac 主进程 `Object has been destroyed`、计划模式入口缺失、相同文件名路径冲突——Windows/Mac 平台问题仍是高优先级。

4. **TUI / Skill 交互增强**  
   `/skill:` 前缀层级补全（#35854，已闭环）、`@` 与 `/` 触发 skill（#34410）——开发者对 TUI 效率提升的诉求持续上升。

5. **MCP 与插件**  
   `customize-opencode` skill 中 `env` vs `environment` 的文档/运行时不一致（#35860/#35867），以及 Vestige 等本地 MCP 示例的引入。

6. **本地化与社区治理**  
   韩文（#34741）、葡语（#35836，已合并）等 README/UI 翻译并行推进；Matrix 替代 Discord 的提议（#35843）反映社区对沟通渠道去中心化的诉求。

---

## 💡 开发者关注点

综合当日 issue 反馈与 PR 讨论，开发者痛点集中在：

- **长会话稳定性**：12 小时持续运行触发 Bun `Illegal instruction` panic 与 RSS 飙至 45 GB（#35847），亟需内存治理与崩溃诊断能力。
- **隐式行为难控**：内置 `CopilotAuthPlugin` 不可关闭，每次启动都强弹 GitHub OAuth（#35859），凸显 **编译时硬编码 + 配置层缺位** 的架构问题。
- **多实例/并发安全**：同一数据库存在多个 opencode 实例时，`limit >= 19` 即触发 "Unexpected error"（#35846），暴露 SQLite 读写竞争。
- **模型元数据可信度**：200k 硬编码上下文导致自动压缩过早触发（#35863），开发者更希望系统按 provider 返回值动态解析。
- **平台差异与工作区假设**：删除并以新路径重新添加项目时仍复用陈旧 worktree（#35851）；同名文件路径缓存（#35834）——桌面端"工作区即数据库记录"的模型需要重新审视。
- **V2 迁移摩擦**：skills 必须从 `.opencode/skills/` 加载，与现有 `.agents/skills/` 习惯冲突（#35864）；V2 自定义 MCP 示例使用错误的 `env` 键（#35860）——文档与运行时一致性需要同步治理。
- **沟通渠道选择**：部分开发者出于隐私考虑希望 OpenCode 启用 Matrix/Self-host 等替代 Discord 的方案（#35843）。

---

> 📎 数据范围：GitHub `anomalyco/opencode` 仓库过去 24 小时（截至 2026-07-08）更新的 1 个 Release、24 条 Issue、50 条 PR。

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi 社区动态日报 · 2026-07-08

## 📌 今日速览

过去 24 小时 Pi 仓库异常活跃，共处理 **27 个 Issue** 与 **24 个 PR**，其中绝大多数 Issue 已关闭，反映出维护者在集中清理一批报告与可快速复现的 bug。值得关注的方向集中在三处：**(1)** AI 模型 Provider 的多轮/工具调用兼容性（Gemini thoughtSignature、Azure Responses、DeepInfra/Kimi）；**(2)** TUI 与 Markdown 流式渲染稳定性修复集中合并；**(3)** 对 `extension` 作者的 API/钩子持续增强（tool 定义导出、session 事件、prompt 指南接口）。今日无新版本发布。

---

## 🚀 版本发布

无（过去 24 小时未发布新 Release）。

---

## 🔥 社区热点 Issues（精选 10 条）

| # | 标题 | 状态 | 评论 | 看点 |
|---|------|------|-----|------|
| [#6206](https://github.com/earendil-works/pi/issues/6206) | Clamping to context window prevents artificial context limits, distinct from maxTokens | OPEN | 5 | 触及一个语义性很强的问题：之前的修复把 `max_tokens` 强制收口到 `context_window`，导致用户无法再配置"人为上下文上限"。讨论度高，值得关注结论。 |
| [#6210](https://github.com/earendil-works/pi/issues/6210) | `/scoped-models` cannot select model ids containing brackets | OPEN | 5 | 影响自定义 provider（如 `custom/bracketed-model[1m]`），是 selector 的解析回归，hotfix 级。 |
| [#5501](https://github.com/earendil-works/pi/issues/5501) | tolerate extra keys on edit tool `edits[]` items | CLOSED | 11 | 评论数最多的"老问题"今日关闭：放宽 schema 的 `additionalProperties`，降低因模型误输出冗余键而被拒的概率。 |
| [#6367](https://github.com/earendil-works/pi/issues/6367) | `modelOverrides` 不作用于 extension 注册的 provider | OPEN | 2 | 直接影响 `~/.pi/agent/models.json` 的 `thinkingLevelMap` 覆盖能力；扩展作者尤为关心。 |
| [#6326](https://github.com/earendil-works/pi/issues/6326) | `custom_message` 绕过 compaction keepRecentTokens 预算 | OPEN | 2 | 暴露 `sessionEntryToContextMessages` 在压缩时未正确对 `custom_message` 计入预算，存在上下文膨胀隐患。 |
| [#6395](https://github.com/earendil-works/pi/issues/6395) | README 中 `/reload` 描述与源码不一致（themes vs context files） | OPEN | 2 | 文档问题但代表一类反馈：README 与 `dist/core/slash-commands.js` 已脱节。 |
| [#6167](https://github.com/earendil-works/pi/issues/6167) | `transformMessages` thinking 内容归一化与 `requiresReasoningContentOnAssistantMessages` 互斥 | OPEN | 1 | 跨多 provider（thinking/reasoning）切换时的兼容性问题，影响 Anthropic、DeepSeek、Kimi 等模型稳定性。 |
| [#6414](https://github.com/earendil-works/pi/issues/6414) | `streamProxy` 丢弃 `ToolCall.thoughtSignature`，Gemini 多轮 400 | CLOSED | 1 | 一个**非常隐蔽**的兼容性问题：经过 `streamProxy` 的 Gemini 工具调用第二轮必失败，今日快速关闭（应已修复）。 |
| [#6378](https://github.com/earendil-works/pi/issues/6378) | 模型超出 262K 上限导致 400 错误 | OPEN | 2 | 典型的长上下文场景下的错误处理体验问题；与 `#6206`、`#6326` 共同构成本周上下文/压缩话题群。 |
| [#6412](https://github.com/earendil-works/pi/issues/6412) | 当从 git 直接运行 pi 时显示 git commit / branch / tag | OPEN | 0 | 当日新增的开发者体验型需求，已被 PR #6413 同日跟进——开发者从源码运行 pi 时缺乏版本可见性。 |

> 其余大多为同日关闭的 `[bug, untriaged]` / `[untriaged]` Issue，多为兼容性边界或文档修复，无重大争议。

---

## 🛠 重要 PR 进展（精选 10 条）

| # | 标题 | 状态 | 概要 |
|---|------|------|------|
| [#6413](https://github.com/earendil-works/pi/pull/6413) | feat(coding-agent): show git info in local version | **OPEN** | 紧跟 Issue #6412，从 git checkout 运行 pi 时展示 commit / branch / tag，避免开发与发布版本混淆。**今日唯一 OPEN PR**。 |
| [#6026](https://github.com/earendil-works/pi/pull/6026) | fix(tui): stabilize working status row | inprogress | 修复 TUI 在持续 streaming 时底部 "working" 行抖动/残留（ref #5825），是本周 TUI 稳定性系列修复之一。 |
| [#5846](https://github.com/earendil-works/pi/pull/5846) | fix(tui): stabilize streaming code fence rendering | CLOSED | 流式渲染过程中 ` ``` ` 代码块边界提前闭合/闪现的修复，长期问题的关键补丁。 |
| [#5913](https://github.com/earendil-works/pi/pull/5913) | Stable markdown working | CLOSED | 关联 #5825，markdown 增量化渲染稳定化的备选实现，已合入或被替代。 |
| [#6169](https://github.com/earendil-works/pi/pull/6169) | Disable padding for assistant messages | inprogress | 关闭 #6168，针对 history 视图中的视觉占用裁剪。 |
| [#6175](https://github.com/earendil-works/pi/pull/6175) | fix(coding-agent): emit session name changes to extensions | inprogress | 让 extension 能订阅 session rename 事件，提升多扩展协作体验。 |
| [#5085](https://github.com/earendil-works/pi/pull/5085) | Expose full tool definitions from `getAllTools` | inprogress | Extension 作者一次性拿到完整 tool 定义（含 schema），构建 `/tool` 类调试命令更便利。 |
| [#5711](https://github.com/earendil-works/pi/pull/5711) | feat(coding-agent): add extension prompt guideline API | CLOSED | 给扩展一个稳定的 prompt guideline 注入口，可控地影响系统提示词。 |
| [#6030](https://github.com/earendil-works/pi/pull/6030) | fix(coding-agent): print benchmark timings after TUI stop | CLOSED | 解决在 `PI_STARTUP_BENCHMARK=1` 退出时基准数据丢失，提升开发体验。 |
| [#6063](https://github.com/earendil-works/pi/pull/6063) | Extension stats | CLOSED | 引入扩展统计管线，并顺手修复 `PI_TIMING=1` 退出时 OSC 垃圾输出。 |

> **观察**：大量 PR 由 **xl0** 提交或合并（19/20 条），他是 TUI 流式渲染与扩展 API 两条主线的核心维护者；其余偶有维持者参与（mitsuhiko 等）。

---

## 📈 功能需求趋势

从今日 Issue 流提炼的社区最关注方向：

1. **TUI 与流式渲染稳定性** — 围绕 `5825` 的 PR 集群（code fence、status row、markdown padding）形成本周最大合入主题。
2. **多 Provider 兼容性边界** — Gemini `thoughtSignature`、Azure Responses、DeepInfra/Kimi K2.7、OpenAI Responses `instructions` 缓存失效，构成"模型层"三大类反馈。
3. **Extension API 扩展** — `MainOptions.appName` 运行时覆写（#6411）、`SettingsManager` 工厂（#6398）、session 事件、`tool definition` 导出、prompt guideline API——> 工具都在为"用 pi 做白标 CLI（白标 `dn`）"做准备。
4. **Session / Compaction 模型** — `custom_message` 预算、`--session-id` 静默新建、`store:false` reasoning replay，暴露 v3 JSONL session header 抽象的细节缺陷。
5. **配置 / 文件系统** — `lastChangelogVersion` 脱离配置文件、`auth.json` 在只读介质下锁文件、`open -r` 强制带会话——> 关注多设备、容器化部署场景。
6. **从源码/本地运行** — git 标签显示（#6412/#6413），扩展安装路径与文档不一致（#6400），说明"开发者跑 pi"这一用户群在快速增长。

---

## 🧑‍💻 开发者关注点与痛点

- **文档与实现脱节**：`/reload` 描述（#6395）、扩展安装路径（#6400）、shell alias 多行失效（#6404）显示 README/docs 滞后于代码节奏。
- **跨设备 / 只读环境**：`lastChangelogVersion` 强迫 git 同步（#6415）、`auth.json` 加锁方式与只读盘不兼容（#6406）。
- **Schema 过严降低鲁棒性**：`edits[]` 拒绝多余键（#5501）、partial JSON 直接 salvage（#6284）表明维护者在"严格校验 vs 模型宽容"之间反复权衡。
- **Provider/Proxy 一致性**：`streamProxy`（#6414）、`openai-responses` cache（#6240）、DeepInfra 自定义 channel（#6399）三连说明 proxy 与自定义 provider 仍是兼容性的高发区。
- **扩展作者体验不足**：模型覆盖配置不传给扩展（#6367）、API 缺位（session 名变更 #6174、settings 工厂 #6398、APP_NAME #6411）——> 维护者本周通过 7+ 个 PR 系统性补齐。
- **上下文窗口语义模糊**：用户希望"模型能力上限"和"应用上下文预算"是两件事（#6206），压缩路径中 `custom_message` 该不该计入（#6326）。

---

> **日报小结**：今日是 "**清积压 + TUI 稳态化 + 扩展 API 补全**" 的一天。下个值得关注的信号是 [#6413](https://github.com/earendil-works/pi/pull/6413) 是否能在下一两个工作日内合入，从而为开发者从 git 直接运行 pi 提供版本可见性。

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报

**📅 日期：2026-07-08**

---

## 1. 今日速览

今日 Qwen Code 迎来 v0.19.7 稳定版发布，同期合并通道任务、Webhook 触发、SDK 选项扩展等多项新功能。社区议题高度聚焦**多智能体子代理（Subagent）可靠性**与**会话历史完整性**，围绕 `parentUuid` 链断裂、状态行模型回退、IDE 延迟连接状态陈旧等核心场景展开密集修复。SDK 端也持续向 Python/TypeScript 双端同步暴露控制请求与查询参数，开发者生态进一步成型。

---

## 2. 版本发布

### 🚀 v0.19.7（稳定版）

核心更新：

- **Triage 闸口强化**（[#5723](https://github.com/QwenLM/qwen-code/pull/5723)）：增强 PR triage 流程，新增批量检测、问题存在性校验与红旗模式识别，显著降低低质量 PR 漏入率。
- **Review 路由**（来自 Release notes 摘要）：重构评审流程的智能路由逻辑。
- 同步推进夜间构建 `v0.19.7-nightly.20260708.394c1a289` 与预览版 `v0.19.6-preview.0`。
- 文档更新：将 **WeCom（企业微信）** 加入渠道总览（[#6490](https://github.com/QwenLM/qwen-code/pull/6490)）。

> 💡 建议升级至 v0.19.7，特别关注涉及 PR 提交与多智能体协作的团队。

---

## 3. 社区热点 Issues

| # | 标题 | 状态 | 重要性 |
|---|------|------|--------|
| [#6505](https://github.com/QwenLM/qwen-code/issues/6505) | **子代理无限重复相同工具调用，LoopDetectionService 不触发** | OPEN · P2 | 🔴 关键 |
| [#6501](https://github.com/QwenLM/qwen-code/issues/6501) | **会话历史在 parentUuid 链断裂时静默截断** | OPEN · P2 | 🔴 关键 |
| [#6503](https://github.com/QwenLM/qwen-code/issues/6503) | **斜杠补全在执行命令后被近期使用覆盖正确排序** | OPEN · P2 | 🟠 高 |
| [#6512](https://github.com/QwenLM/qwen-code/issues/6512) | **后台子代理运行后状态行显示 fast 模型** | OPEN · P2 | 🟠 高 |
| [#6507](https://github.com/QwenLM/qwen-code/issues/6507) | **IDE 延迟启动超时时残留陈旧失败状态** | OPEN · P2 | 🟠 高 |
| [#6496](https://github.com/QwenLM/qwen-code/issues/6496) | **Footer 始终显示当前权限/审批模式徽章（含默认）** | CLOSED · 需求 | 🟡 中 |
| [#2757](https://github.com/QwenLM/qwen-code/issues/2757) | v0.13.2 生成 git 提交并推送报错 | CLOSED · Bug | 🟡 中 |
| [#4278](https://github.com/QwenLM/qwen-code/issues/4278) | 任务中断后无法自动续跑 | CLOSED · Bug | 🟡 中 |
| [#3845](https://github.com/QwenLM/qwen-code/issues/3845) | Windows 安装 Qwen Code 失败（模块缺失） | CLOSED · Bug | 🟡 中 |

**重点解读：**

- **#6505**：主代理 LoopDetectionService 不覆盖子代理调用栈，揭示多智能体框架下循环检测需下沉到子代理内部，是 **Roadmap 多智能体** 方向的核心痛点。
- **#6501**：JSONL 会话文件部分写入或存储异常导致的链断裂会触发**静默历史丢失**，对依赖长会话的研发协作影响显著。
- **#6503**：回归 #5577 修复后仍被「最近使用优先」逻辑覆盖，需明确 nameVsAlias 与 recency 的优先级语义。
- **#6512 / #6507**：均与状态显示/连接状态机有关，体现**界面反馈保真度**是当前 UI 层的薄弱点。
- **#3845**：Windows 安装路径问题仍是新手入门高频障碍，建议官方文档补充 PowerShell 前置条件说明。

---

## 4. 重要 PR 进展

| # | 标题 | 影响面 | 类型 |
|---|------|--------|------|
| [#6514](https://github.com/QwenLM/qwen-code/pull/6514) | **fix(cli): 状态行始终跟随会话模型** | 修复 #6512 | Bug 修复 |
| [#6495](https://github.com/QwenLM/qwen-code/pull/6495) | **feat(channels): 支持 Webhook 触发的渠道任务** | 大 | 新功能 |
| [#6472](https://github.com/QwenLM/qwen-code/pull/6472) | **浏览器自动化 MCP 改为外部适配器按需启用** | 中 | 安全/解耦 |
| [#6518](https://github.com/QwenLM/qwen-code/pull/6518) | **fix(cli): /mcp 服务器详情新增 Approve 按钮** | 中 | UX 改进 |
| [#6486](https://github.com/QwenLM/qwen-code/pull/6486) | **feat(cli): 模型切换快捷键（Alt+S / Ctrl+F）** | 大 | 新功能 |
| [#6456](https://github.com/QwenLM/qwen-code/pull/6456) | **feat(core): Agent 工具新增 working_dir 参数固定至 worktree** | 大 | 新功能 |
| [#6491](https://github.com/QwenLM/qwen-code/pull/6491) | **feat(sdk): Python/TS SDK 统一暴露 transport & 查询选项** | 大 | SDK 增强 |
| [#6377](https://github.com/QwenLM/qwen-code/pull/6377) | **fix(shell): 拦截 `kill $(pgrep ...)` 形式的自杀命令** | 中 | 安全修复 |
| [#6511](https://github.com/QwenLM/qwen-code/pull/6511) | **feat(cli): 多工作区会话路由（Phase 2a）** | 大 | 新功能 |
| [#6502](https://github.com/QwenLM/qwen-code/pull/6502) | **fix(session): 桥接断裂 parentUuid 链而非截断** | 修复 #6501 | 数据完整性 |

**重点解读：**

- **#6514 + #6512** 构成一组「状态行保真」修复，#6514 已开放 review，预计同日合入主线。
- **#6495** 把 `qwen serve` 升级为可接收外部 Webhook 的事件中枢，**支持 IM 机器人场景下的端到端自动化**。
- **#6486** 模型切换热键 + **#6491/#6492** SDK 控制请求方法（effort / models / usage / context）共同构建**模型层可观测与可控性**。
- **#6456** 通过 `working_dir` 把子代理固定到既有 worktree，是 Git Worktree 多任务并行工作流的关键拼图。
- **#6377** 通过补充 `pgrep` 命令替换检测，**堵住 Qwen Code 自杀命令的绕过路径**，是 shell 守卫从字符串黑名单走向语义分析的重要一步。
- **#6502** 不再静默丢弃历史而是桥接断裂链，回应了 #6501 的数据完整性焦虑。
- **#6511** Phase 2a 完成后，`qwen serve` 将原生支持多工作区会话注册与路由，是企业级多项目隔离的重要里程碑。

---

## 5. 功能需求趋势

通过对今日 9 条 Issue 与 50 条 PR 的聚类分析，社区需求呈以下五大趋势：

### 🤖 ① 多智能体 / 子代理工程化（热度最高）

- 子代理循环检测下沉（#6505）
-

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI 社区动态日报
**日期：2026-07-08** ｜ **项目：Hmbown/CodeWhale（原 DeepSeek-TUI）**

---

## 一、今日速览

今日社区最核心的信号是 **v0.8.68 正式进入"绿灯放行(stopship)"冲刺阶段**——围绕执行委员会 Issue #4092 派发的 lane 任务集中合并，多个 release-blocker（Fleet 设置面板 #4093、Sub-agent 详情面板 #4094、Ctrl+C 退出 #4090）已通过 PR 合入主线；同时 v0.8.69 重点特性 **agent-callable verify/critique 工具**（#4196 / PR #4199）以"测试时计算(TTC)"为名正式启动设计-实现通道。品牌层面也已正式从 `deepseek-tui` 切换为 **CodeWhale**，v0.8.67 是改名后的首个正式 release。

---

## 二、版本发布

### 🚢 v0.8.67 — CodeWhale 品牌正式启用
- **发布时间**：2026-07-07（过去24小时内为最新 release）
- **核心变更**：
  - **品牌重塑**：`CodeWhale` 成为规范的项目名、命令名、npm 包名与 release-asset 名。
  - **废弃迁移**：原 npm 包 `deepseek-tui` 不再发版，旧 `deepseek` / `deepseek-tui` 用户需按 `docs/REBRAND.md` 迁移。
- **影响**：所有下游引用需同步更新包名/可执行名；TUI 二进制现在以 `codewhale-tui` 调用。

---

## 三、社区热点 Issues（Top 10）

| # | Issue | 状态 | 重要性 |
|---|---|---|---|
| 1 | **#4092** [OPEN] v0.8.68 执行委员会（canonical agent packet） | OPEN · 13 评论 | v0.8.68 唯一的 agent 入口包，定义 lane 排序、依赖与子代理协议；所有里程碑 Issue 必须挂一个 `lane-*` 标签。 |
| 2 | **#3144** [CLOSED] v0.8.64 自然语言自动 review 策略 + pre-push 闸门 | CLOSED · 14 评论 | 借鉴 Cursor SDK / Bugbot 思路，连接"人工审批"与"完全自主"两端，14 条评论是本期最高活跃度之一。 |
| 3 | **#4094** [CLOSED] Sub-agent 详情面板空白并可能冻结 TUI | CLOSED · 4 评论 | release-blocker / lane-stopship；今日 PR #4182 + #4197 已完整修复。 |
| 4 | **#4093** [CLOSED] Fleet 设置模态框是"按 provider 选模型"而非"角色/档案编排器" | CLOSED · 3 评论 | release-blocker / lane-stopship；PR #4181（headless CLI）+ PR #4198（交互式 TUI）已闭环。 |
| 5 | **#4196** [OPEN] agent-callable verify/critique 工具 | OPEN · 1 评论 | TTC 战略级特性：让 agent 自主决定是否消耗测试时算力做对抗式自审，直接对接 v0.8.69。 |
| 6 | **#4137** [OPEN] Fleet profile 应保存 provider / model / thinking effort | OPEN · 2 评论 | lane-fleet；是 #4093 的延伸，决定 Fleet 配置能否真正跨 provider 路由。 |
| 7 | **#4202** [OPEN] 通过 execshell 执行 Python 脚本时编码被强制为 GBK | OPEN · 1 评论 | 用户实测反馈：conda 下 `print(sys.stdout.encoding)` 为 utf-8，codewhale 内却是 gbk；影响 Windows 中文开发者。 |
| 8 | **#4195** [CLOSED] Fleet / sub-agent 的 reasoning-effort 应可配置（Low 默认太死） | CLOSED · 1 评论 | `auto_reasoning.rs:22-24` 把所有 sub-agent 锁死在 `ReasoningEffort::Low`；关闭后留下"何时再开放"的讨论。 |
| 9 | **#4190** [OPEN] 给模型一个可调用的 send-later 工具 | OPEN | 参考 Claude Code Remote 实现的"延迟回拨"原语，可让 agent 安排未来 check-in。 |
| 10 | **#4149** [OPEN] 完成 `parking_lot` 迁移（hot lock sites） | OPEN · lane-perf | `app-server` runtime locks + `runtime_threads` map 尚未迁移；subagent lease 已先行完成。 |

> 其他值得一提：#4185（Models.dev schema 兼容）已被 PR #4191 修复；#4090（PTY/raw 模式下双击 Ctrl+C 不能退出）已被 PR #4180 修复。

---

## 四、重要 PR 进展（Top 10）

| # | PR | 状态 | 关键内容 |
|---|---|---|---|
| 1 | **#4201** [OPEN] `docs/TTC_DESIGN.md` 测试时计算设计 | OPEN | 三方共识方案（verify-tool 贡献者 + GLM 5.2 + 内部分析）：单一共享 CriticEngine + 可调推理强度。**仅设计文档**，代码实现延后到 v0.8.69。 |
| 2 | **#4199** [OPEN] `feat(tools)`：verify/critique 工具 | OPEN | 实现 #4196：模型可选调用、对最近工作做对抗式自审；提升推理档位 + 独立评审员。 |
| 3 | **#4198** [CLOSED] Fleet in-process TUI spawn 启用 profile-pinned provider | CLOSED | 补完 #4093 交互式 TUI 路径：headless CLI（#4181）已修复，TUI 内进程 spawn 现在也走档案钉死的 provider+model 路由。 |
| 4 | **#4197** [CLOSED] sub-agent 详情面板状态覆盖 + artifact handles | CLOSED | 单文件改动 `crates/tui/src/tui/sidebar.rs`，补齐 PR #4182 留下的 4 项 live-activity / 工具调用 / 总结 / 边界历史。 |
| 5 | **#4200** [CLOSED] 修正 Fireworks/Together 元数据 + Models.dev id 规范化 | CLOSED | 一次性修掉两处 release-smoke 的 provider-mapping 问题；`ProviderKind::parse` 加固为下游 `ModelReferenceCard::from_offering` 的稳定接入点。 |
| 6 | **#4192** [CLOSED] TUI transcript 文案打磨批量 PR | CLOSED | 合并 #4142 / #4143 / #4144 / #4145 四个 lane-copy 修复：模式选择器去重、setup hints 合并共享模板、read done · Searching 动词一致性。**纯文案去重，零渲染逻辑改动**。 |
| 7 | **#4191** [CLOSED] 接受当前 live Models.dev schema | CLOSED | 修复 #4185：处理 provider-row `interleaved` 字段同时为 bool 与 object 两种形态（32 行 bool、含 huggingface 等），让 `serde_json::from_str::<ModelsDevCatalog>` 不再炸。 |
| 8 | **#4181** [CLOSED] Fleet setup 改为 role/profile 编排器 | CLOSED | 把"按 provider 选模型"重塑为角色/档案路由；headless CLI 路径闭环。 |
| 9 | **#4182** [CLOSED] sub-agent 详情面板填充实时活动 | CLOSED | 解决 #4094 的"打开就是空白"：补齐工具调用名/状态/精简结果、worker 最终 summary/handoff 与 artifact handle，并做截断保护。 |
| 10 | **#4180** [CLOSED] PTY 退出流程中归一化裸 0x03 字节 | CLOSED | 修复 #4090：把 raw ETX 归一为 canonical Ctrl+C 再走 disposition routing，加端到端回归测试，活动态的 cancel/copy 行为保持不变。 |

> 其他已合入的修复：#4189（CI 仅在 issue open 时自动打 `agent-ready` 标签）、#4183（v0.8.68 playbook 架构交叉链接）、#4088（`--no-mouse-capture` 下保留宿主机原生选区）、#4045（`edit_file` UTF-8 模糊匹配游标不再 panic）、#4033/#4194（强制测试默认 Locale::En，避免本地化字符串断言在非英文设备上失败）。

---

## 五、功能需求趋势

从 30 条 Issues + 34 条 PR 中提炼的社区方向：

| 方向 | 代表 Issue / PR | 信号强度 |
|---|---|---|
| **🧠 测试时计算 (TTC) / 自审能力** | #4196、PR #4199、#4201（设计文档）、#3144（自然语言 review 闸门） | 🔥🔥🔥🔥🔥 战略级；明确列为 v0.8.69 重点，3 方共识方案已落地 |
| **🛠️ Fleet 多 provider 路由与角色编排** | #4093 → #4181 / #4198、#4137、#4195 | 🔥🔥🔥🔥🔥 release-blocker；v0.8.68 阶段最高优先级 lane-fleet |
| **📊 TUI 信息密度与可观测性** | #4094、#1982、#2018、#3818、PR #4182/#4197 | 🔥🔥🔥🔥 详情面板、行内可点击、活动可观察是高发诉求 |
| **🌐 多模型 / 多 provider 兼容** | #2300、#4185、#4186、PR #4200、PR #4191 | 🔥🔥🔥🔥 围绕 Models.dev 真源做链式修复（#4184→#4185→#4187→#4186→#4188） |
| **⚡ 运行时性能 / 锁机制** | #4149（parking_lot 迁移）、#2981（WhaleFlow 异步执行器） | 🔥🔥🔥 v0.9.0 铺垫 |
| **🔒 安全 / 自动化 review 闸门** | #3144、#2261（PowerShell 输入泄漏） | 🔥🔥🔥 偏向 reliability / UX 修复 |
| **🐍 Windows / 跨平台本地化与编码** | #4202（GBK 强制编码）、#4194（Locale::En 强制）、#4088 | 🔥🔥🔥 中文与本地化开发者持续踩坑 |
| **⏰ 计划任务 / 异步回调** | #4190（send-later 工具）、#2973（真实异步执行器替换 Mock） | 🔥🔥 新形态原语，社区期望对齐 Claude Code Remote 等产品 |

---

## 六、开发者关注点（高频痛点）

1. **Fleet "设置即路由" 的体验割裂**：原先 UI 把模型选择藏在 provider 后面，无法直观地把 worker profile 绑到具体模型 + reasoning effort（#4093、#4137、#4193、#4195）。开发者真正要的是"按角色编排"而非"按厂商选模型"。
2. **Sub-agent 在 TUI 里"看不见"**：详情面板打开是空白的、状态字段缺失、worker 活跃时甚至会冻屏（#4094、#1982、#2018），导致 Dogfood 阶段信任成本极高。
3. **多 provider / 真源数据不稳**：Models.dev live schema 与本地解析器频繁漂移（`interleaved` 双形态、Fireworks/Together metadata 错配），导致 catalog 链路需要 5 条串联 issue 修复（#4184–#4188）。
4. **Windows + 中文环境的"隐形 bug"**：execshell Python 输出被强制成 GBK（#4202）、TUI 焦点丢失导致 PowerShell 执行未提交输入（#2261）、本地化测试在非英文设备上断言失败（#4033、#4194）——是中文贡献者反复踩坑的三件套。
5. **Lane 化任务管理提升可预期性**：v0.8.68 引入 `lane-*` 标签 + canonical packet（#4092）+ 仅在 issue open 时打 `agent-ready`（PR #4189），让 milestone triage 进入"按车道排队"的可视化流程，开发者更清楚自己 PR 卡在哪个队列。
6. **TTC / 自审是被低估的需求**：社区主动提议"让模型自己决定要不要花算力做对抗式自审"（#4196），并产出 3 方共识设计文档——表明开发者已经接受"agent 用更多算力换更高正确率"作为新工作模式。

---

> **附：关键链接**
> - 项目主页：github.com/Hmbown/CodeWhale
> - v0.8.68 执行委员会：Issue #4092
> - 品牌迁移指南：`docs/REBRAND.md`
> - TTC 设计文档（PR #4201）：`docs/TTC_DESIGN.md`

</details>