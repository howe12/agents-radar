# AI CLI 工具社区动态日报 2026-09-12

> 生成时间: 2026-09-12 02:37 UTC | 覆盖工具: 9 个

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
**数据日期：2026-09-12**

---

## 一、生态全景

2026 年 9 月的 AI CLI 赛道已进入**"可靠性竞赛"阶段**：主流厂商（Anthropic、OpenAI、Google、GitHub、阿里、Moonshot）和开源力量（OpenCode、Pi）并行迭代，但社区反馈的重心已从"能不能跑起来"转向"能不能长时间稳定跑"。**Windows / WSL2 平台质量**成为跨厂商共性短板（5 款工具同日出现相关高赞 Issue），**MCP / Skill / Hook 等扩展协议**则从加分项升级为核心依赖，相关稳定性问题集中爆发。同时，**长会话上下文管理**、**跨设备 Remote Control**、**安全与权限边界**三类议题共同塑造了下半年的产品演进方向。

---

## 二、各工具活跃度对比

| 工具 | 今日版本 | Issues 活跃 | PR 更新 | 当日核心议题 |
|------|---------|------------|---------|------------|
| **Claude Code** | v2.1.269 | 50+（Top10 选录）| 1（已关闭）| Function Hooks、Windows 桌面、Skills 系统、Remote Control 自愈 |
| **OpenAI Codex** | rust-v0.155.0-alpha.3.10（4 个 alpha 连发）| 10（精选）| 10（含 #44957、#44952 等）| GPT-6 Astra 异常、Windows 沙箱链、跨端同步、人格弃用 |
| **Gemini CLI** | v0.61.0-nightly.20260912 | 10（精选）| 10（5 closed / 5 open）| Subagent 可靠性、Auto Memory、间接提示词注入防护 |
| **GitHub Copilot CLI** | v1.0.84-5 | 32 | 0 | MCP 稳定性、Skill 发现、Windows/WSL2、长会话 OOM |
| **Kimi Code CLI** | 无 | 2 | 0 | Linux/WSL2 硬死锁 #2640、CentOS 7.9 MCP |
| **OpenCode** | 无（V2.0 RC）| 10（精选）| 10（多 closed）| V2 发布流水线、TUI i18n、SQLite schema、插件 API |
| **Pi** | 无 | 10（精选）| 10（含 mitsuhiko 系列）| Windows 平台、扩展 API、provider 中立性、system message delta |
| **Qwen Code** | v0.23.3-nightly.20260911 | 10（精选）| 10 | TUI 静默崩溃、多供应商兼容、Web Shell 产品化、安全审计 |
| **DeepSeek TUI / Codewhale** | 无 | 10（精选）| 10（5 closed）| TUI 模态裁剪、子 agent 429 自适应、tar.xz 归档、provider 中立化 |

**观察**：当日发布密度 = Anthropic ≥ OpenAI ≥ Google ≥ GitHub > Alibaba > 开源社区。GitHub Copilot CLI 当日 **0 PR 更新** 与 32 条新 issue 形成鲜明反差，提示 triage 阶段积压；Kimi 处于低活跃期但暴露出高危死锁问题。

---

## 三、共同关注的功能方向

| 功能方向 | 涉及工具 | 具体诉求 |
|---------|---------|---------|
| **🪟 Windows / WSL2 平台质量** | Claude Code、Codex、Copilot CLI、Kimi、Pi、Qwen Code | 进程锁 (#42776)、always-on-top (#85891)、CPU 高占用 (Copilot #3700)、硬死锁 (Kimi #2640)、shell 别名 (Pi #9504)、ConPTY 泄漏 (Qwen #11352) |
| **🔌 MCP 协议稳定性** | Claude Code、Copilot CLI、OpenCode、Qwen Code | OAuth 刷新 (Copilot #4795)、stdio 孤立进程 (Claude #93087)、RFC 9728 合规 (OpenCode #34592)、FastMCP 协议差异 (Copilot #4370) |
| **🧠 Skills / Hooks / Plugins 体系** | Claude Code、Copilot CLI、OpenCode、Pi、Qwen Code | disable-model-invocation 副作用 (Claude #78523、Copilot #4438)、AGENTS.md 跨仓库泄漏 (Copilot #4822)、Function Hooks (Claude #91870)、system message delta (Pi #9116/9117) |
| **⏱️ 长会话稳定性** | Claude Code、Copilot CLI、Pi、DeepSeek TUI | 4 GiB 堆 OOM (Copilot #4699)、Esc 60s 冻结 (Pi #9410)、CLAUDE_ENV_FILE 膨胀 (Claude #78146)、context 告警失效 (DeepSeek #5620) |
| **🔒 安全与权限边界** | Claude Code、Copilot CLI、Gemini CLI、Qwen Code、DeepSeek TUI | agent 文本冒充用户 (Claude #81955)、文档示例执行 (Claude #93748)、build 文件间接注入 (Gemini #29250)、遥测未脱敏 (Qwen #11666)、子 agent 绕过 deny 规则 (DeepSeek #6097) |
| **🔁 跨设备 / 跨会话链路** | Claude Code、Codex、Copilot CLI、DeepSeek TUI | Remote Control 自愈 (Claude #90189/#80969/#91915)、跨端线程丢失 (Codex #43124/#28340)、session/memory import (Copilot v1.0.84-5)、tar.xz 全保真导出 (DeepSeek #6056) |
| **🌐 多供应商/多模型兼容** | Codex、OpenCode、Qwen Code、Pi | GPT-6 Astra (Codex)、Bedrock Mantle (Pi #8572)、ZHIPU/GLM 字段注入 (Qwen #11590)、OpenRouter slug 解析 (OpenCode #48117) |

---

## 四、差异化定位分析

| 工具 | 核心定位 | 技术路线 | 目标用户 |
|------|---------|---------|---------|
| **Claude Code** | **插件生态领导者** | Function Hooks 即将交付，Plugin eval 套件成熟 | 重度依赖工作流定制、需要细粒度权限控制的企业与个人开发者 |
| **OpenAI Codex** | **多端一体化 Agent** | TUI/App/IDE/iOS/Android 全平台共享 app-server 状态机 | 跨设备工作、需要 Computer Use 的高阶用户 |
| **Gemini CLI** | **Google 生态+沙箱安全** | Gemini 3 模型原生 bash + 沙箱边界强化 + AST 感知工具 | Google Cloud 用户、注重大型 monorepo 上下文的研究者 |
| **GitHub Copilot CLI** | **GitHub 原生集成** | 与 VS Code/Extensions 深度耦合，semantic JSONL 跨工具会话交换 | GitHub 平台重度用户、企业 PR/CI 工作流 |
| **Kimi Code CLI** | **轻量中文优化** | 当前低活跃迭代（仅 2 issue）| 中文长文档处理场景（产品定位待 0.42 稳定后观察）|
| **OpenCode** | **开源+可扩展 TUI** | V2.0 重写进行中，插件 API 暴露 session/event 流 | 偏好自托管、需要自定义 provider/插件的开发者 |
| **Pi** | **provider 中立+扩展友好** | provider 能力声明机制（`compat.supportsPromptCacheKey`）| 多模型切换、研究型用户、扩展作者 |
| **Qwen Code** | **多供应商+企业集成** | DingTalk/ACP/Web Shell/VSCode 集成 + 多模型网关 | 国内企业、需要 Web Shell/IDE 远程集成的团队 |
| **DeepSeek TUI / Codewhale** | **会话资产化** | 全保真 tar.xz 归档、provider-neutral 内部字段、MemCode 等第三方记忆层集成 | 长会话归档需求、多模型混用的实验性场景 |

---

## 五、社区热度与成熟度

### 第一梯队 · 高活跃 + 大体量
- **Claude Code**：50+ 活跃 issue，单 issue 评论数过百，PR 仓库与 Issue 仓库分离（主仓低 PR 流量）
- **OpenAI Codex**：单日 4 个 alpha 连发，10 PR 同步推进，节奏最快

### 第二梯队 · 高活跃 + 中等体量
- **Gemini CLI**：Nightly 节奏稳定，安全与 agent 体系并重
- **GitHub Copilot CLI**：32 issue 但 0 PR，处于"triage 阶段"，回归管理偏弱
- **Qwen Code**：国内社区，夜版节奏快，安全/隐私议题高密度

### 第三梯队 · 中等活跃
- **OpenCode**：典型"V2 发布前夜"型活动，外部贡献者活跃
- **Pi**：以 mitsuhiko 为核心，小而精，扩展 API 演进清晰

### 第四梯队 · 低活跃 / 风险信号
- **DeepSeek TUI / Codewhale**：低版本号（0.9.x）但架构演进明确（crate 拆分 EPIC-005）
- **Kimi Code CLI**：当日仅 2 issue，但 #2640 硬死锁属高危信号，需密切关注

**成熟度判断**：Claude Code（v2.1）、GitHub Copilot CLI（v1.0.84）已步入稳定主线；OpenAI Codex、Gemini CLI、Qwen Code 处于 nightly/alpha 高频迭代；OpenCode、Pi 处于 V2/能力扩展关键期；Kimi 节奏偏慢。

---

## 六、值得关注的趋势信号

### 1. **从"功能覆盖"到"长会话可靠性"的范式转移**
多家工具的 Top Issue 集中在长会话链路（OOM、死锁、上下文告警失效、进程泄漏）。CLI 已从"补全工具"演化为"长期运行的 Agent 进程"，可靠性工程（信号处理、进程回收、内存预算）成为新的核心壁垒。

### 2. **MCP / Skills / Hooks 成为新的协议战场**
- 协议碎片化：FastMCP、Atlassian OAuth、RFC 9728 合规等子问题在多家工具复现
- 语义模糊：`disable-model-invocation`、`disable-model` 这类配置在不同厂商实现不一（Claude #78523、Copilot #4438）
- **对开发者的参考价值**：构建 MCP server / Skill 时须显式声明兼容性矩阵，依赖单一厂商 API 的扩展将面临快速贬值

### 3. **Windows 平台进入"必答题"阶段**
5+ 工具同日出现 Windows 相关高赞 Issue，且多数已积压 2-6 个月。Anthropic 在主仓高密度 Issue 流中未给出系统化路线，**意味着 Windows 质量仍是 2026 H2 最重要的差异化机会**。

### 4. **"Provider 中立"成为架构演进共识**
- Pi 引入 `compat.supportsPromptCacheKey` 等能力声明
- DeepSeek TUI 内部字段去品牌化（`DeepSeekClient` → provider-neutral）
- OpenCode 通过 OpenRouter slug 后缀透传
- **趋势**：单一模型绑定逐步让位于"适配器+能力声明"模式，对应用层抽象是利好

### 5. **会话成为可移植资产**
- Copilot CLI v1.0.84-5 引入 semantic JSONL session/memory import
- DeepSeek TUI #6056 合并 tar.xz 全保真归档
- Claude Code Function Hooks 即将上线
- **趋势**：CLI 工具之间的"上下文互操作"标准正在形成，未来可能出现跨厂商的会话迁移层

### 6. **安全议题从"被动响应"走向"主动建模"**
Gemini #29250（构建文件间接提示词注入）、Claude #93748（文档示例执行）、Qwen #11666（遥测未脱敏）、DeepSeek #6097（子 agent 绕过 deny）——这些案例都不是传统 XSS/CSRF，而是 **Agent 在长自治场景下的权限委托与上下文污染** 问题。建议跟踪 Anthropic、OpenAI、Google 官方对此类边界的正式表述，作为企业落地 Agent 的合规参考。

---

**报告说明**：以上分析基于 2026-09-12 公开 GitHub 数据快照，建议结合 7 日/30 日趋势综合判断；版本号、Issue/PR 链接均为发布日实际状态。

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告
**数据截止 2026-09-12 · 数据源：github.com/anthropics/skills**

---

## 一、热门 Skills 排行（Top PR）

> 注：PR 评论数数据缺失，本排行综合"近期活跃度、关联 Issue 热度、修复影响面"综合判定。

### 🥇 #1298 — fix(skill-creator): 修复 run_eval.py 0% recall 长期 Bug
- **作者**: MartinCajiao | **状态**: OPEN | **最近更新**: 2026-09-11
- **功能**: 修复 skill 描述优化循环中的核心评估脚本 `run_eval.py` 永远报 `recall=0%` 的问题
- **讨论热点**: 关联 [Issue #556](https://github.com/anthropics/skills/issues/556)（12 评论、7 👍、10+ 独立复现）。`run_loop.py` 与 `improve_description.py` 整套优化管线目前实质上在"对着噪声调参"
- **价值**: 阻塞所有 skill description 自动优化工作流，是当前社区最痛的工程问题之一
- 🔗 [PR #1298](https://github.com/anthropics/skills/pull/1298)

### 🥈 #1734 — Detect orphaned docx comments
- **作者**: rohitjain25 | **状态**: OPEN | **最近更新**: 2026-09-11
- **功能**: 检测 Word 文档中"孤立批注"（无对应正文锚点的注释）
- **讨论热点**: 文档处理场景下长期被忽视的质量问题；社区对 docx skill 的健壮性持续关注（参见 #538、#541）
- 🔗 [PR #1734](https://github.com/anthropics/skills/pull/1734)

### 🥉 #514 — Add document-typography skill
- **作者**: PGTBoos | **状态**: OPEN（自 2026-03 起长期 pending）
- **功能**: 防止 AI 生成文档的排版缺陷——孤词换行（1–6 字落到下一行）、孤行段落、编号错位
- **讨论热点**: 击中"AI 出文档不专业"的普遍痛点；半年未合并是社区关注焦点
- 🔗 [PR #514](https://github.com/anthropics/skills/pull/514)

### 4️⃣ #1742 — fix(mcp-builder): 支持 mcp>=2 streamable_http_client
- **作者**: Kuldeeep18 | **状态**: OPEN | **最近更新**: 2026-09-11
- **功能**: 适配 MCP SDK 2.0 中 `streamablehttp_client → streamable_http_client` 的重命名及自定义 header 配置方式
- **讨论热点**: 修复 [Issue #1668](https://github.com/anthropics/skills/issues/1668)；mcp-builder 是官方核心 skill，依赖面广
- 🔗 [PR #1742](https://github.com/anthropics/skills/pull/1742)

### 5️⃣ #1628 — Add Hivemind: 零成本多 Agent 编排 Skill
- **作者**: Hanishchow | **状态**: OPEN
- **功能**: 让 Claude Code 将机械任务委派给运行免费模型的 headless opencode worker，自己只做规划/评审/合并
- **讨论热点**: 提出"昂贵模型的 context 是稀缺资源"的新设计哲学；与 Issue #228（组织内 skill 共享）形成互补
- 🔗 [PR #1628](https://github.com/anthropics/skills/pull/1628)

### 6️⃣ #1367 — self-audit: 交付前自审计（机械校验 + 四维推理质量门）
- **作者**: YuhaoLin2005 | **状态**: OPEN
- **功能**: 先做机械性文件存在性校验，再按"损伤严重度"优先级做四维推理审计
- **讨论热点**: 关联 [Issue #1385](https://github.com/anthropics/skills/issues/1385) "Reasoning Quality Gate Pipeline" 提案，是社区提议的"前置校准 → 对抗评审 → 交付验证"三门管道的核心组件
- 🔗 [PR #1367](https://github.com/anthropics/skills/pull/1367)

### 7️⃣ #83 — Add skill-quality-analyzer & skill-security-analyzer
- **作者**: eovidiu | **状态**: OPEN
- **功能**: 五维质量分析 + 安全分析两款 meta-skill，准备纳入 marketplace
- **讨论热点**: 与 [Issue #492](https://github.com/anthropics/skills/issues/492)（社区 skill 冒充 anthropic 命名空间的安全问题，43 评论、2 👍）直接呼应
- 🔗 [PR #83](https://github.com/anthropics/skills/pull/83)

### 8️⃣ #486 — Add ODT skill（OpenDocument）
- **作者**: GitHubNewbie0 | **状态**: OPEN
- **功能**: ODT/ODS 创建、模板填充、解析为 HTML，补齐 LibreOffice 开放文档格式
- **讨论热点**: 开源/ISO 格式需求；与 PR #538/#541（docx 健壮性修复）共同构成"文档格式全覆盖"主线
- 🔗 [PR #486](https://github.com/anthropics/skills/pull/486)

---

## 二、社区需求趋势（Issues 信号提炼）

按评论热度排序的 Issues 揭示出 **5 条明确需求主线**：

| 趋势 | 代表 Issue | 评论 | 👍 |
|---|---|---|---|
| 🛡️ **Skill 安全/命名空间治理** | [#492](https://github.com/anthropics/skills/issues/492) 社区 skill 冒充 anthropic 命名空间造成信任边界滥用 | **43** | 2 |
| 🏢 **企业级共享与协作** | [#228](https://github.com/anthropics/skills/issues/228) 组织内 skill 一键共享（取代 Slack 传文件 + 手动上传） | **16** | 8 |
| 🧪 **评测/调试基建** | [#556](https://github.com/anthropics/skills/issues/556) run_eval.py 0% 触发率 + [#1390](https://github.com/anthropics/skills/issues/1390) mcp-builder 评分 0/N + [#1487](https://github.com/anthropics/skills/issues/1487) claude-api 一次注入 156k token | 12 / 4 / 4 | 7 / 0 / 0 |
| 🧠 **质量门/审计能力** | [#1385](https://github.com/anthropics/skills/issues/1385) Reasoning Quality Gate Pipeline + [#1329](https://github.com/anthropics/skills/issues/1329) compact-memory 紧凑记忆符号 | 4 / 9 | 1 / 0 |
| 📦 **互操作与生态整合** | [#16](https://github.com/anthropics/skills/issues/16) Skills 暴露为 MCPs + [#29](https://github.com/anthropics/skills/issues/29) 与 AWS Bedrock 集成 + [#189](https://github.com/anthropics/skills/issues/189) plugin 内容重复 | 4 / 4 / 6 | 0 / 0 / 9 |

**新兴方向**：Agent Governance (#412，已关闭但被引述）、Self-Audit（#1367 + #1385）、Multi-Agent Orchestration（#1628 Hivemind）。

---

## 三、高潜力待合并 PR（社区活跃 / 近期高频更新）

按"最近 7 天有活动 × 影响面大 × 关联高热 Issue"筛选：

| PR | Skill / 修复 | 关键点 | 链接 |
|---|---|---|---|
| #1298 | skill-creator 评估修复 | 阻塞所有 description 优化，已被 10+ 用户复现 | [🔗](https://github.com/anthropics/skills/pull/1298) |
| #1734 | docx 孤立批注检测 | 2026-09-11 更新，文档质量刚需 | [🔗](https://github.com/anthropics/skills/pull/1734) |
| #1742 | mcp-builder 兼容 mcp>=2 | 2026-09-11 更新，影响所有 MCP 集成用户 | [🔗](https://github.com/anthropics/skills/pull/1742) |
| #1724 | mcp-builder 评测默认模型升级到 claude-sonnet-5 | 模型代际同步，争议小 | [🔗](https://github.com/anthropics/skills/pull/1724) |
| #1607 | claude-api skill 标注已退役模型 ID | 关闭 #1603，立刻可用 | [🔗](https://github.com/anthropics/skills/pull/1607) |
| #1628 | Hivemind 多 Agent 编排 | 新范式 Skill，差异化强 | [🔗](https://github.com/anthropics/skills/pull/1628) |
| #1367 | self-audit 质量门 | 配套 #1385 提案体系 | [🔗](https://github.com/anthropics/skills/pull/1367) |
| #83 | quality/security analyzer | 直接对应 #492 安全诉求 | [🔗](https://github.com/anthropics/skills/pull/83) |
| #514 | document-typography | 半年长尾关注，合并概率随时触发 | [🔗](https://github.com/anthropics/skills/pull/514) |

---

## 四、Skills 生态洞察

> **当前社区最集中的诉求是——"Skill 工程的工业化"：既要可信（命名空间与安全治理）、又要可评估（评测管线不再产出噪声）、还要可协作（组织内一键共享），并开始向"多 Agent 编排与自审计"等更高阶能力延伸。**

---

# Claude Code 社区动态日报
**2026-09-12**

---

## 1. 今日速览

- **v2.1.269 发布**：新增 `claude plugin eval`（插件评测套件，可生成 JSON + HTML 报告）和 `/output-style [name]` 命令（支持在 Remote Control、Cloud 等场景中切换输出样式），插件生态进一步成熟。
- **Function Hooks 进入"weeks"交付窗口**：Anthropic 官方在 #91870 评论区确认 Function Hooks 将在数周内上线，引发 161 条讨论、95 👍，是当下最热的功能话题。
- **Windows 生态持续承压**：在昨日最活跃的 30 条 Issue 中，超过 60% 与 Windows / Desktop 相关；多个高赞 Bug（孤儿进程锁、always-on-top、Cowork 共享故障）仍未关闭。

---

## 2. 版本发布

### v2.1.269（2026-09-12）

**主要变更**：

| 新增 | 说明 |
|---|---|
| `claude plugin eval` | 针对插件运行评测套件，输出可复现的评分结果（JSON + HTML）。执行 `claude plugin eval --help` 查看用法 |
| `/output-style [name]` | 列出并切换输出样式，覆盖 Remote Control、Cloud、ot（otel / 其他）场景 |

完整变更日志：[anthropics/claude-code](https://github.com/anthropics/claude-code) Release v2.1.269

---

## 3. 社区热点 Issues

> 选取维度：评论数、点赞数、技术代表性、解决时效性。

### 🔥 #91870 — Function Hooks：让插件强大 10 倍（OPEN，161 评论，95 👍）
作者：[poteat](https://github.com/anthropics/claude-code/issues/91870)
Anthropic 团队在 9/9 社区更新中承诺"数周内交付 Function Hooks"，表示该功能的设计已被社区的高质量反馈实质性塑形。是当前最有希望的近期大功能。

### 🔥 #42776 — Windows Desktop 无法重启（OPEN，178 评论，88 👍）
作者：[RonGamzu](https://github.com/anthropics/claude-code/issues/42776)
Desktop 在 Windows 上因孤儿进程文件锁导致 relaunch 失败，是过去 24h 评论数最多的 Issue；被官方标记为 `[invalid]`，但仍持续讨论。

### 🚨 #85891 — Claude Desktop 在 Win11 强制 always-on-top（OPEN，99 评论，236 👍）
作者：[kylealty-boop](https://github.com/anthropics/claude-code/issues/85891)
点赞数是当日所有 Issue 最高的，反映用户强烈诉求；与 macOS 的同源问题 #66516 形成跨平台对应。

### ⚠️ #92984 — Windows 更新 KB5124008 导致 Cowork Plan9 共享全挂（OPEN，99 评论，54 👍）
作者：[tomokuri8](https://github.com/anthropics/claude-code/issues/92984)
卸载 KB 可恢复。属于 Windows 系统更新与 Cowork 文件系统层的兼容性问题，对企业用户影响显著。

### 🛠 #49917 — Desktop Windows 安装失败：AddPackage HRESULT 0x80073CF6（OPEN，42 评论）
作者：[ARHAEEM](https://github.com/anthropics/claude-code/issues/49917)
旧版本残留导致的安装包不一致状态，影响升级路径；常见于企业内批量部署场景。

### 🔒 #93748 — Skill 文档中的 `` !`cmd` `` 示例被当作命令执行（CLOSED，1 评论）
作者：[yolo-jared](https://github.com/anthropics/claude-code/issues/93748)
**严重安全隐患**：仅作为文档示例出现的 bash 语法在加载时即被实时执行。当日即关闭，说明响应迅速，建议关注回溯修复。

### 📋 #81955 — Agent 文本以"用户权威"身份重新进入上下文（OPEN，2 评论）
作者：[miheico](https://github.com/anthropics/claude-code/issues/81955)
调度提示与压缩摘要中的内容被错误地标注为用户输入；属于上下文安全/权限边界问题，与 #75378、#78785 同源。

### 🪝 #78523 — `disable-model-invocation: true` 让 `/skill-name` 也失效（OPEN，4 评论，5 👍）
作者：[JeroenUMC](https://github.com/anthropics/claude-code/issues/78523)
本意为"禁用模型自动调用"的前置配置却把显式调用也禁了，影响 Skills 系统的可用性。

### 🔌 #93087 — Stdio MCP 服务器在会话结束时被孤立（OPEN，3 评论）
作者：[kenspc](https://github.com/anthropics/claude-code/issues/93087)
未完成连接或排队的 MCP server 不会随会话结束被终止，进程泄漏。

### 📡 #90189 / #80969 / #91915 — Remote Control 在 Desktop 更新 / 重启后断连（OPEN，共 6 评论）
- [sachah #90189](https://github.com/anthropics/claude-code/issues/90189)：要求"Codex 风格 always-on"自动保持连接
- [twoface2316 #80969](https://github.com/anthropics/claude-code/issues/80969)：自动启用逻辑被 `isFirstTurn` 门控，恢复会话永远连不上
- [relmer #91915](https://github.com/anthropics/claude-code/issues/91915)：空闲触发自动更新后无头机器失联

> 这三个 Issue 共同指向一个用户痛点：**Remote Control 在 Desktop 生命周期事件后无法自愈**。

---

## 4. 重要 PR 进展

> 过去 24h 仅 1 条 PR 更新，处于较低活跃度。

### #42205 — `fix(hookify): normalize tool matcher parsing`（CLOSED）
作者：[Balajitechlabs](https://github.com/anthropics/claude-code/pull/42205)
修复 Hookify 工具 matcher 解析中对分隔符周围空格的 trim 问题（典型如 `Edit space-or Write` 现在可正确匹配）。提升 Hook 系统的配置容错性。

> 📉 **PR 活跃度观察**：当日仅有 1 条 PR 处于更新状态，且为已关闭的修复；说明 PR 流量主要流向外部插件/扩展仓库，主仓库仍以 Issue 反馈为主。

---

## 5. 功能需求趋势

通过 50 条活跃 Issue 提炼：

| 趋势方向 | 代表 Issue | 信号强度 |
|---|---|---|
| **插件 / Hook 体系扩展** | #91870（Function Hooks）、#42205（matcher 解析） | ⭐⭐⭐⭐⭐ |
| **Desktop / Remote Control 可靠性** | #90189、#80969、#91915、#93288、#93349 | ⭐⭐⭐⭐⭐ |
| **Windows 平台兼容性** | #42776、#85891、#92984、#49917、#78146 | ⭐⭐⭐⭐ |
| **Skills 系统精细化** | #78523（disable 副作用）、#93748（安全执行） | ⭐⭐⭐⭐ |
| **上下文与权限边界** | #81955、#77533（ScheduleWakeup 授权链） | ⭐⭐⭐ |
| **MCP / 工具调用生命周期** | #93087（孤儿进程）、#87327（Chrome 扩展断连） | ⭐⭐⭐ |
| **非 ASCII 路径 / 国际化** | #93743（项目存储 slug 冲突） | ⭐⭐ |

**结论**：社区关注重心已从"能否跑起来"转向"**能否长时间可靠运行**"——尤其是 Remote Control 这类跨设备、跨会话的长时间链路。

---

## 6. 开发者关注点

### 🔴 高频痛点

1. **Desktop 自更新会破坏 Remote Control 桥接**
   多个 Issue 串联出同一根因：auto-update 路径上 `isFirstTurn` 门控、`remoteControlAtStartup` 配置被吞、headless 机器无人在场恢复。对应 #80969、#90189、#91915、#93288。

2. **Windows Hook 环境变量无限膨胀**
   #78146：长会话中 `CLAUDE_ENV_FILE` 在每次 compact 后被追加，到一定行数后 `export` 行被截断，所有 bash 命令以 `e: command not found`（exit 127）失败 —— Bash 工具永久卡死。

3. **Skill 安全边界与文档示例冲突**
   #93748 暴露了 Markdown 渲染层与执行层未隔离的风险；属于跨用户的潜在提权/任意命令执行面。

4. **项目存储在非 ASCII 路径下冲突**
   #93743：Korean 等字符在 slug 化时被坍缩为同一 `-`，不同项目可能落到同一目录，破坏记忆与上下文隔离。

### 🟡 中频需求

- **功能请求**
  - `/output-style` 一键切换（已在 v2.1.269 部分落地）
  - Function Hooks（即将发布）
  - Desktop 麦克风快捷键（#92402）
  - 手机端 Remote Control 会话续命（#93349）

- **体验改进**
  - 折叠控制对 `/` 开头消息的误识别（#93052）
  - Cowork 云沙箱 egress allowlist 与账号设置不一致（#93525）
  - Worktree 隔离下复合命令被一律拒绝（#87959）

### 💡 值得关注的安全议题

`#81955`（agent 文本冒充用户）、`#77533`（scheduled task 自授权链路无溯源）、`#93748`（文档示例被实时执行）三者勾勒出 Claude Code 当前在**长期自治 / 跨会话权限委托**场景下的安全边界挑战，建议优先跟踪 Anthropic 的官方回应。

---

*日报生成基于 github.com/anthropics/claude-code 在 2026-09-12 的公开数据。链接均为 GitHub Issue / PR 永久地址。*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报
**日期：2026-09-12**

---

## 📌 今日速览

Codex 进入 **0.155.0-alpha** 阶段高频迭代，单日内连发 4 个 alpha 小版本（.7 → .10），开发节奏明显加快。今日社区关注的焦点高度集中在两个方向：**GPT-6 Astra 模型异常行为**（多用户报告拒绝无害提示并返回 `invalid_prompt`）以及 **Windows 平台的沙箱/浏览器控制稳定性问题**。与此同时，官方持续推进"人格选择"功能的弃用与 TUI/Agent 控制中心的体验重构。

---

## 🚀 版本发布

| 版本 | 说明 |
|---|---|
| `rust-v0.155.0-alpha.3.7` | alpha 迭代 |
| `rust-v0.155.0-alpha.3.8` | alpha 迭代 |
| `rust-v0.155.0-alpha.3.9` | alpha 迭代 |
| `rust-v0.155.0-alpha.3.10` | alpha 迭代（最新） |

> 4 个 alpha 版本均在 24 小时内发布，说明 0.155.0 系列正在密集收尾，建议关注后续稳定版与官方 changelog。

---

## 🔥 社区热点 Issues

1. **[#42215](https://github.com/openai/codex/issues/42215) — Windows ChatGPT Work 项目上下文同步失败** ⭐ 评论 31
   ChatGPT Windows 桌面版在已有 Project 内启动 Local Chat 时，文件系统阶段反复报错 "Could not use this project for a local chat"。影响 23 个源文件的项目，尚未收敛。

2. **[#20730](https://github.com/openai/codex/issues/20730) — WSL 环境下自定义 Pets 加载失败** 👍 30
   自定义 Pets 功能在 WSL 环境因 Windows/Linux 路径归一化问题彻底失效，是高赞但被搁置数月的旧 issue。

3. **[#43410](https://github.com/openai/codex/issues/43410) — Windows 浏览器控制不支持 API Key 认证** 👍 13
   通过 API Key 认证时，浏览器扩展首次操作直接抛 `unsupported Codex auth method: apikey`，影响 Windows 平台无 ChatGPT 订阅的开发者用户。

4. **[#25744](https://github.com/openai/codex/issues/25744) — macOS Computer Use/MCP 进程泄漏**
   长会话下 Codex for macOS 累积 Computer Use 与 MCP helper 进程并产生僵尸子进程，引发 HID 延迟与 WindowServer/TCC 卡顿。

5. **[#40596](https://github.com/openai/codex/issues/40596) — Windows Codex App unified exec 启动失败**
   终端启动报 `helper_unknown_error: setup refresh had errors`，影响 Windows App 用户执行命令。

6. **[#43124](https://github.com/openai/codex/issues/43124) — macOS 桌面历史投影错位**
   长会话在桌面 UI 只显示旧的星期四消息，后续三天消息丢失，迁移逻辑返回 `already_paginated`。

7. **[#37856](https://github.com/openai/codex/issues/37856) — VS Code 扩展线程所有权残留** 👍 8
   VS Code Web 渲染进程重连后留下 stale owner，导致另一端显示 "open in another application"，是 app-server 状态机问题。

8. **[#42214](https://github.com/openai/codex/issues/42214) — Windows Computer Use 无法控制原生应用**
   `cua.getApp is not a function`，Windows Computer Use 开启但无法操控原生桌面应用。

9. **[#43237](https://github.com/openai/codex/issues/43237) — GPT-6 Astra 拒绝 `hi` 等提示**
   即便是孤立 CLI + 最小后端复现，Astra 仍返回 `invalid_prompt`，问题可跨 Linux/macOS 复现，影响新模型可用性。

10. **[#28340](https://github.com/openai/codex/issues/28340) — Codex iOS 间歇性打不开运行中的任务** 👍 13
    ChatGPT iOS 端 Codex mobile 间歇性无法打开正在执行的任务会话，多端一致性受质疑。

---

## 🛠 重要 PR 进展

1. **[#44957](https://github.com/openai/codex/pull/44957) — Agent Command Center 增加按模型分组**
   支持 `Ctrl+S` 在 project / status / **model** 三种维度间循环分组任务，页脚显示当前分组。

2. **[#44952](https://github.com/openai/codex/pull/44952) — 语音字幕跨说话人更新与历史交接保持可见**
   修复完成态语音字幕在排队历史插入前消失，以及交错的 user/assistant 更新互相覆盖的问题。

3. **[#44948](https://github.com/openai/codex/pull/44948) — 异步问答与插件刷新的上下文快照**
   新增多轮场景覆盖 `request_user_input_async` 与插件配置热加载，便于回归测试。

4. **[#44946](https://github.com/openai/codex/pull/44946) — 弃用 Friendly/Pragmatic 人格选择**
   模型指令模板转为字面常量，`supports_personality` 返回 `false`，与 #44935、#44930 联动收尾。

5. **[#44945](https://github.com/openai/codex/pull/44945) — TUI Windows 沙箱设置改走 App Server**
   使用 `windowsSandbox/setupStart` 统一提权/非提权路径，完成通知回流，保留待审批预设。

6. **[#44944](https://github.com/openai/codex/pull/44944) — 对存量 app-server 线程强制 managed provider 要求**
   防止 managed 规则变更后老线程沿用过期的 `model_provider` 配置。

7. **[#44942](https://github.com/openai/codex/pull/44942) — 明确 Windows VC++ 运行时的语音包提示**
   标识 `bin/vcruntime140.dll`，补充微软许可与下载链接。

8. **[#44939](https://github.com/openai/codex/pull/44939) — Windows 沙箱设置识别远端执行主机**
   TUI 在配置远程执行器沙箱时不再误判本地文件，并据本地 app server 就绪状态决定提权流程。

9. **[#44938](https://github.com/openai/codex/pull/44938) — 无 install URL 的连接器鉴权失败检测**
   导出 `is_connector_auth_failure_from_tool_result`，即便没有安装链接也能识别鉴权失败。

10. **[#44935](https://github.com/openai/codex/pull/44935) — 移除 TUI 中的人格选择**
    移除 `/personality` 命令、选择弹窗、tooltip 及持久化逻辑，用户回合不再附带人格 override。

> 另值得关注：#44934 引入 **GPT-6 Astra** 在远程压缩与 Code Mode 工具下的快照场景；#44922 将语音原生运行时打包进 Windows release。

---

## 📈 功能需求趋势

| 方向 | 体现 |
|---|---|
| **新模型可用性（GPT-6 Astra）** | 多个 issue 集中报 Astra `invalid_prompt` 误拒，#43237、#44649、#44700、#43342 形成串联 |
| **Windows 沙箱/权限体系** | #40596、#36475、#29782、#30839、#44736、#42215 一再指向 sandbox helper、apply_patch、setup refresh 链条不稳 |
| **跨端同步与历史重建** | #43124、#43017、#43434、#28340 暴露 macOS/iOS/Android/Windows 之间线程状态不一致 |
| **Agent/TUI 体验重构** | 命令中心按模型分组、上下文快照、连接器鉴权检测、语音体验打磨同时进行 |
| **人格（Personality）退场** | #44946/#44935/#44930 三 PR 合力将人格选择从 TUI 与模板中移除 |
| **模型选择/配置粒度** | #24237 提议项目级配置可关闭全局/用户 skill；#43342 指 `/model` 隐藏可用 Astra |

---

## 🧑‍💻 开发者关注点

1. **GPT-6 Astra 模型稳定性**：开发者最关心的新模型频繁对 `hi`、`你好` 等无害输入返回 `invalid_prompt`，且跨 CLI/App 一致复现，**回归测试覆盖不足**已成共识。
2. **Windows 沙箱链路**：从 `codex-windows-sandbox-setup.exe` 的 COM+ 报错、unified exec helper 初始化失败、SSH 下 pipe 超时，到 .sandbox-bin 的 ACL 拒绝，开发者普遍希望**统一一次提权/就绪反馈通路**（官方本周 PR #44939、#44945 正是回应）。
3. **跨设备同步的可信度**：macOS Desktop 历史回退、Android Remote 漏线程、iOS 偶发打不开、Windows + Mobile Remote 出现"穿越到旧 checkpoint"——开发者对**云端会话状态机**的鲁棒性信心下降。
4. **API Key + Windows 浏览器控制**：非订阅用户的开发流程被 `apikey` 鉴权拦截，期望补齐独立分支（#43410）。
5. **Skills/Pets 配置粒度**：WSL 下自定义 Pets 因路径归一化失效（#20730 高赞但久未解决），同时 #24237 呼唤更细的项目级 skill 配置隔离。
6. **TUI 终端兼容性**：kitty 下 Astra composer sparkle 动画阻断鼠标选词（#44398），Konsole 用户希望复用 kitty 协议支持 Pets（#34092）——**终端模拟器差异**仍是高频踩坑点。
7. **效率工具细节**：VS Code 扩展线程所有权残留（#37856）、/model 隐藏可用模型（#43342）、语音字幕/计表在静默样本下丢失（#44928）——体验打磨仍集中在 app-server 与 TUI 状态机。

---

*报告基于 GitHub 公开数据生成；如需关注某个具体方向或模型，欢迎在评论区提出。*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报

**日期：2026-09-12**

---

## 1. 今日速览

今日 Gemini CLI 发布 `v0.61.0-nightly.20260912` 版本，核心亮点是**多项安全加固**：包括阻止通过构建文件修改实施的间接提示词注入攻击，以及沙盒文件系统边界强化。社区焦点集中在 **Subagent 可靠性问题**（如 generalist agent 挂起、MAX_TURNS 后错误上报成功）和 **Auto Memory 系统的多个缺陷** 集中爆发，值得关注。

---

## 2. 版本发布

### v0.61.0-nightly.20260912.g9c1b0a610

本次 nightly 版本合并了关键的安全修复：

- **PR #29250**：防止受限工作区模式下通过构建文件（如 `Makefile`、`package.json`）或外部命令参数进行**间接提示词注入攻击**，重构 `shell`、`edit`、`write_file` 等内置执行路径以校验工作区边界。
- **PR #29214 / #29283**：强化沙盒文件系统边界，将运行时状态与宿主机配置目录隔离，对 Docker/Podman/runsc/LXC/macOS Seatbelt 统一处理。

📦 [Release 链接](https://github.com/google-gemini/gemini-cli/pull/29291)

---

## 3. 社区热点 Issues（Top 10）

| # | Issue | 关键看点 | 评论 | 👍 |
|---|-------|---------|------|-----|
| 1 | [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) | **Subagent 在达到 MAX_TURNS 后被错误上报为 GOAL 成功**，中断信号被掩盖（p1 bug） | 13 | 2 |
| 2 | [#19873](https://github.com/google-gemini/gemini-cli/issues/19873) | **零依赖 OS 沙盒 + 执行后意图路由**：充分利用 Gemini 3 模型的 bash 原生能力（p2 enhancement） | 9 | 1 |
| 3 | [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) | **Generalist agent 永久挂起**，连简单的文件夹创建都卡死（p1 bug，👍=8，热度高） | 8 | 8 |
| 4 | [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) | **AST 感知的文件读取/搜索/映射**：精准读取方法边界、降低 token 噪音（EPIC 级别） | 7 | 1 |
| 5 | [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) | **Gemini 不主动使用自定义 skills 和子代理**，缺乏对能力清单的自我调用意识（p2 bug） | 6 | 0 |
| 6 | [#26525](https://github.com/google-gemini/gemini-cli/issues/26525) | **Auto Memory 缺乏确定性脱敏**：转录内容在重写前已进入模型上下文，存在密钥泄露风险（security/p2） | 5 | 0 |
| 7 | [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) | **Shell 命令执行后挂起在 "Waiting input"**，即使命令已完成（p1 bug） | 4 | 3 |
| 8 | [#22232](https://github.com/google-gemini/gemini-cli/issues/22232) | **Browser agent 弹性增强**：需要自动接管锁定会话和锁恢复机制（p3 feature） | 4 | 0 |
| 9 | [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) | **Browser 子代理在 Wayland 下失败**（p1 bug，影响 Linux 桌面用户） | 4 | 1 |
| 10 | [#20079](https://github.com/google-gemini/gemini-cli/issues/20079) | **~/.gemini/agents/ 下的 symlink 不被识别为子代理**（p2 bug，阻碍 dotfiles 管理工作流） | 4 | 0 |

> **趋势观察**：今日更新最频繁的 issues 几乎全部集中在 **agent/subagent 可靠性** 和 **Auto Memory 系统缺陷** 两大主题，Sandbox 安全与 AST 工具增强是中长期演进方向。

---

## 4. 重要 PR 进展（Top 10）

| PR | 主题 | 关键变更 | 状态 |
|----|------|---------|------|
| [#29250](https://github.com/google-gemini/gemini-cli/pull/29250) | ️ 防止构建文件间接提示词注入 | 重构 shell/edit/write_file 路径校验工作区边界（size/xl） | ✅ Closed（已合入 v0.61 nightly） |
| [#29214](https://github.com/google-gemini/gemini-cli/pull/29214) / [#29283](https://github.com/google-gemini/gemini-cli/pull/29283) | ️ 沙盒文件系统隔离 | 隔离宿主机配置目录、统一 realpath 路径解析 | ✅ Closed |
| [#29201](https://github.com/google-gemini/gemini-cli/pull/29201) | 🛡️ 跨确认重试保留已批准的 shell 命令 | 修复 TOML 自定义命令多 `!{...}` 时陷入无限循环确认（fixes #29197，p1） |  Open |
| [#29217](https://github.com/google-gemini/gemini-cli/pull/29217) | ⚙️ 不再覆盖显式 `--model gemini-2.5-flash` | `isFlashModel()` 误匹配导致显式版本被悄悄重写为 3.5 Flash（p1） | 🔄 Open |
| [#29287](https://github.com/google-gemini/gemini-cli/pull/29287) | 🚀 `--yolo` 映射为 `allowedTools: ["*"]` 通配策略 | 移除硬编码 `ApprovalMode.YOLO` 状态，统一策略引擎（fixes #11303） | ✅ Closed |
| [#29286](https://github.com/google-gemini/gemini-cli/pull/29286) |  RobustAutonomousAgent 集成 Google 搜索工具 | 增强 agent 自主信息获取能力（p1） | 🔄 Open |
| [#29282](https://github.com/google-gemini/gemini-cli/pull/29282) |  登录后立即持久化 OAuth 凭证 | 避免重复触发 Google 登录流程（security/p2） | 🔄 Open |
| [#29200](https://github.com/google-gemini/gemini-cli/pull/29200) | 🛡️ MCP 运行时策略一致性 | 显式空 `mcp.allowed` 列表视为 fail-closed；大小写不敏感匹配（enterprise/p2） |  Open |
| [#29203](https://github.com/google-gemini/gemini-cli/pull/29203) | 🛡️ 剥离带额外标志的 shell 包装器 | 修复 `bash -c` / `powershell` 后跟额外参数时的策略旁路（security/p2） | 🔄 Open |
| [#29205](https://github.com/google-gemini/gemini-cli/pull/29205) |  MCP 提示词文本直接提交 | 取消 JSON 编码包裹，保留原始引号与换行（core/agent/p2） | 🔄 Open |

> 另有 **PR #29208**（malformed `agents.json` 优雅降级）、**#29118**（`.git` 后缀仅在末尾剥离）、**#29114**（`handleExit` 重入保护）、**#29211**（React state updater 内禁止 setState）已 Closed，值得关注稳定性修复成果。

---

## 5. 功能需求趋势

从 Issues 关键词聚合，社区关注的演进方向主要集中在：

1. ** 安全与沙盒强化**（热度最高）
   - 工作区边界、shell 包装器剥离、MCP 策略、OAuth 凭证持久化、Auto Memory 脱敏
   - 代表：#26525, #29203, #29201, #29250

2. **🤖 Agent / Subagent 体系成熟**
   - 子代理轨迹可见性、bug report 上下文、自动技能调用、local subagent sprint
   - 代表：#22323, #21968, #22598, #21763, #20195

3. ** AST 感知的代码理解**
   - 用 tilth/glyph 类工具替代暴力 grep，提升精度与 token 经济性
   - 代表：#22745, #22746, #19561（"Tactful Extraction"）

4. **🌐 Browser Agent 健壮性**
   - Wayland 兼容、session 接管、配置覆盖生效、锁恢复
   - 代表：#21983, #22232, #22267

5. **💾 Auto Memory 与持久化任务**
   - 替代易失的 WriteToDo、用文件 CRUD 实现跨会话任务跟踪
   - 代表：#18836, #26516, #26522, #26523, #21335

6. **🛠️ IDE / 终端 UX**
   - 终端 resize 无闪烁渲染、修复 \n 转义缺陷、交互式提示挂起
   - 代表：#21924, #22466, #22465

---

## 6. 开发者关注点

从高赞与高频 issue 提炼出的核心痛点：

- **⏳ 可靠性 > 功能性**：开发者最在意的不是新特性，而是**已有功能别卡死**——generalist agent 挂起、shell 命令永久等待输入、子代理错误上报成功，这些"沉默失败"严重影响信任度。
- ** Wayland / Linux 桌面兼容性**成为高频抱怨源，Browser Agent 在非 X11 环境下直接失败。
- ** 跨会话状态丢失**：`/compress` 不持久化、Auto Memory 反复重试低信号会话、task tracker 仍依赖 LLM 上下文——开发者期望"文件系统即真相源"。
- ** 符号链接、dotfiles 仓库**等真实工作流与当前 agent 发现机制存在冲突，阻碍配置共享。
- **⚠️ 模型自我破坏行为**：agent 在 git 操作中偶发使用 `reset --force`，对生产数据存在风险，需要更稳健的安全护栏（#22672）。
- **🔧 工具数量上限**：超过约 128~400 个工具时直接 400 错误，开发者希望 agent 能智能裁剪上下文中启用的工具集（#24246）。

---

*📊 数据来源：google-gemini/gemini-cli GitHub 仓库（Issues 50 条 / PRs 19 条 / Releases 1 条，统计窗口：过去 24 小时）*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报
**日期：2026-09-12**

---

## 📌 今日速览

今天发布了 **v1.0.84-5** 预发版本，新增了基于 semantic JSONL 交换格式的 session/memory 导入命令，并统一了 shell 补全机制。社区讨论焦点集中在 **MCP 集成稳定性**（OAuth 刷新、`/clear` 后连接丢失）、**Skill 发现机制的若干边界 bug**（`disable-model-invocation`、AGENTS.md 跨仓库泄漏），以及 **Windows/WSL2 平台的多项长期未解问题**（CPU 高占用、安装 401 错误、插件更新失败）。过去 24 小时内仓库新增 32 条 issue 讨论，**0 条 PR 更新**，显示当前开发重心可能集中在问题分类与 triage 而非合并。

---

## 🚀 版本发布

### v1.0.84-5（过去 24 小时内发布）

**Added（新增）**
- 新增 `session` 和 `memory` 的导入命令，支持 semantic JSONL interchange format，便于跨会话/跨工具迁移上下文与历史。

**Improved（改进）**
- Shell 补全现在基于 CLI 自身解析用的同一套语法生成：`copilot <TAB>` 在子命令旁同时展示根级 flags，每个子命令仅展示自身选项，补全准确性和一致性显著提升。
- Command 相关改进（详情见 release notes）。

🔗 [查看 Release](https://github.com/github/copilot-cli/releases/tag/v1.0.84-5)

---

## 🔥 社区热点 Issues（Top 10）

> 按评论数 + 👍 数综合排序，反映社区关注度与问题严重性

### 1. [#4438] Skill 在 `disable-model-invocation: true` 时完全不可达
**作者**：grammy-jiang　|　💬 5　👍 7  
技能 frontmatter 设置 `disable-model-invocation: true` 后，`copilot skill list` 仍能列出，但模型 `skill()` 工具返回 `Skill not found`。**与 v1.0.84-5 的 Skill 系统直接相关**——一旦设计意图是"仅手动调用"，应保证显式 `/skill` 路径可达。这是一个**语义与实现不一致**的 bug，影响所有使用 Skill 隔离模型自动调用的项目。

### 2. [#4095] Windows 插件更新失败：Access is denied (os error 5)
**作者**：FBakkensen　|　💬 2　👍 **21**  
在 VS Code 运行时执行 `copilot plugin update` 失败，因为 Copilot 扩展持有了 `installed-plugins` 目录的 watcher 句柄。**这是本期获赞最高的 issue**，反映大量 Windows 用户的痛点，影响 CLI 与桌面应用的协同。

### 3. [#4035] Voice Installer 调用私有 Azure Artifacts feed 导致 401
**作者**：gregeva　|　💬 5　👍 0  
`/voice` 启用时尝试从 `pkgs.dev.azure.com` 下载 `Microsoft.AI.Foundry.Local.Core 1.2.3`，该包实际可在 nuget.org 公开获取。**今日新发 #4814 是同一问题的复现报告**，表明该 bug 仍持续影响新用户安装。

### 4. [#4753] v1.0.83 session resume 取消进行中的 stdio MCP 连接
**作者**：indeherb　|　 5　👍 1  
恢复会话时，握手超时从 v1.0.82 的 ~16s 缩短到 ~1s，导致尚未初始化的 MCP server 被静默丢弃直至会话结束。是 v1.0.83 引入的 **明确回归**，且与今日新发的 #4818（`/clear` 后 HTTP MCP stranded）形成同一根因群。

### 5. [#3700] WSL2：CLI 闲置时 MainThread 飙至 215% CPU
**作者**：neerajdixit-msft2　|　 4　👍 2  
**[High severity]** v1.0.60 起出现 WSL2 回归（#2208 的二次回归），每次冷启动后立即可复现，TUI 流式输出完全冻结，必须重启 CLI。是 **Windows + WSL 用户最高优先级的稳定性问题**之一。

### 6. [#1168] 单次请求内反复弹窗授权（Authorization Fatigue）
**作者**：Alan-Jowett　|　💬 4　👍 2  
一条简单指令（"修复 PR 727"）触发了十几次授权弹窗。该 issue 自 1 月创建至今仍未解决，反映 **权限策略粒度不足** 与 **per-action 信任未持久化** 两个长期设计痛点。

### 7. [#4764] `/permissions assisted` 约 1 小时后失效
**作者**：trydis　|　💬 4　👍 0  
1.0.83 版本中，auto-approval 模式运行约 60 分钟后必须重启会话才能恢复。强烈怀疑与 token/会话 TTL 同步有关，**社区怀疑是 v1.0.83 系列引入的会话机制变更的副作用**。

### 8. [#4795] Atlassian MCP OAuth 回调 URL 端口不匹配
**作者**：rhodla02　|　💬 3　👍 3  
本地回调端口为随机值，但 OAuth provider 注册端口为 33418，导致 Atlassian MCP 完全无法登录。**远程 MCP 生态兼容性问题**典型案例。

### 9. [#4699] 长 `--resume` 会话 V8 堆 OOM 崩溃（4 GiB 上限）
**作者**：pedoch　|　💬 3　👍 5  
14 小时内连续崩溃 3 次，均在 4 GiB 堆上限。同时 Node 诊断转储写入 **当前工作目录**，污染项目目录。**这是 `--resume` 长会话稳定性的硬性瓶颈**，与 #2436 跨会话上下文查询需求相呼应。

### 10. [#4370] FastMCP 因不实现 `server/discover` 而初始化失败
**作者**：cobey　|　💬 3　👍 3  
Copilot CLI 1.0.79-1 在 MCP initialize 前发送 `server/discover`，FastMCP 返回 `-32602 Invalid request parameters`，被 CLI 当作致命错误。**MCP 协议兼容性问题**，影响所有使用 FastMCP 框架的服务器实现者。

---

## 📝 重要 PR 进展

> 过去 24 小时内仓库 **无任何 PR 更新**。以下列出与今日热点 issues 直接相关的待修复方向，可视为社区期望的 PR 主题：

| 主题 | 关联 Issue | 期望方向 |
|------|-----------|---------|
| Skill 不可达修复 | #4438, #4637 | 修正 `disable-model-invocation` 路径，slash 显式调用应绕过模型查询 |
| MCP `server/discover` 容错 | #4370 | 将"未知方法"视为成功而非失败 |
| MCP session handoff 保留 | #4753, #4818 | 恢复 v1.0.82 的 ~16s 握手窗口；保留 HTTP MCP 长连接 |
| AGENTS.md 边界收敛 | #4822 | 遵循 git 仓库边界，禁用跨仓库 ancestor walk |
| WSL2 MainThread 修复 | #3700 | 复审 TTY/事件循环实现 |
| Voice installer feed 修复 | #4035, #4814 | 切换到 nuget.org 公共源，移除私有 feed 硬编码 |
| ask_user 多选渲染 | #4817 | 修复 tool-call 参数泄漏到前序字符串参数 |
| 4 GiB 堆上限可调 | #4699 | 暴露 `--max-old-space-size` 或自适应 |
| Windows 插件锁 | #4095 | VS Code extension 释放 watcher 或采用 rename 策略 |
| 跨会话上下文查询 | #2436 | 引入 `/context query` 或语义检索跨 session 能力 |

🔗 [查看 PR 列表](https://github.com/github/copilot-cli/pulls)

---

##  功能需求趋势

从过去 24 小时的 32 条 issue 提炼出**六大需求方向**：

### 1. 🤖 MCP 生态稳定性（占比约 30%）
- OAuth/Entra ID scope 处理（#4464、#4795、#4818）
- 服务器协议兼容性（#4370、#4636）
- 会话切换/恢复时的连接生命周期（#4753、#4818）
**结论**：MCP 已从"加分项"变为"核心依赖"，但链路中至少存在 5 个独立稳定性子系统待加固。

### 2. 🧠 Skill / Custom Instructions 系统（占比约 20%）
- Skill 可达性边界（#4438、#4637）
- AGENTS.md 路径收敛（#4822）
- 列表输出可读性（#4823）
- 跨会话上下文（#2436）
**结论**：Skill 抽象正在快速迭代，但**语义边界（manual-only、scope 隔离、跨仓库边界）尚未稳定**。

### 3. 🪟 Windows / WSL2 平台质量（占比约 20%）
- WSL2 CPU 占用（#3700）
- Windows 插件锁（#4095）
- Voice 安装 401（#4035、#4814）
- PATH 环境变量被破坏（#4816）
- 沙箱不支持 25H2（#4652）
**结论**：Windows 仍是平台短板，且多数问题已积累 2-4 个月未闭环。

### 4. ⚡ 性能与内存（占比约 10%）
- 长会话 OOM（#4699）
- TUI 渲染冻结（#3700）
**结论**：随着 `--resume` 和 session/memory import 新功能上线，**会话体积膨胀问题被进一步放大**。

### 5. 🎛️ 可扩展性 / Hooks / 模型选择
- 会话结束 hook（#4820）
- OpenAI Flex tier 支持（#4821）
- 自定义 status line（#4813）
- Ctrl-T 队列执行（#4824）
**结论**：社区希望 CLI 向"可编排的 Agent 平台"演进，对 hook、状态栏、成本控制有强需求。

### 6. 🔒 安全策略粒度
- Authorization fatigue（#1168）
- Exfiltration protection 过激（#4065）
**结论**：现有防护策略"宁错杀不放过"的取向，与开发流畅性诉求存在张力。

---

## ️ 开发者关注点

综合社区反馈，开发者最迫切的诉求可归纳为 **五个高频痛点**：

| 痛点 | 体现问题 | 优先级 |
|------|---------|--------|
| **MCP 不可靠** | 连接丢失、OAuth 卡死、协议差异 | 🔴 P0 |
| **Windows 体验** | 安装失败、文件锁、CPU 飙升、PATH 损坏 | 🔴 P0 |
| **会话规模受限** | OOM 崩溃、context window 不足、缺乏跨会话检索 | 🟠 P1 |
| **Skill/Instruction 语义模糊** | 边界规则不一致导致"silent failure" |  P1 |
| **权限/防护误伤** | 反复授权、合法内容被拦截 | 🟡 P2 |

**值得注意的信号**：
- v1.0.84-5 引入的 **session/memory import（semantic JSONL）** 表明团队正在为"跨会话/跨工具上下文迁移"打基础，与 #2436、#4699 两条长期需求方向高度吻合。
- 大量 issue 标题包含 `[triage]` 标签，**说明 triage 阶段积压明显**，但过去 24 小时 PR 数为 0，可能预示修复尚未合入或团队正在做 release freeze。
- 多个 Windows/WSL bug 已存在 90+ 天（如 #3700 创建于 2026-06-05），**回归管理** 应作为下个 sprint 的重点。

---

> 📊 **数据范围**：2026-09-11 ~ 2026-09-12 · 来源：[github.com/github/copilot-cli](https://github.com/github/copilot-cli)  
> 📰 本日报由 AI 工具分析生成，仅供开发参考。

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报

**日期：2026-09-12**

---

## 📌 今日速览

今日社区动态相对平静，仓库在过去 24 小时内无新版本发布、无 PR 更新，但有两起值得关注的事件：一条新提交的 **Linux/WSL2 硬死锁严重 Bug**（#2640）引发关注，以及一条存在近半年的 **CentOS 7.9 MCP 连接失败问题**（#1388）被关闭。建议 Linux/WSL2 用户留意 #2640 的进展，并关注其对版本 0.42.0 稳定性的影响。

---

## 🚀 版本发布

**今日无新版本发布。** 最近一次发版情况请关注 [GitHub Releases](https://github.com/MoonshotAI/kimi-cli/releases)。

---

## 🔥 社区热点 Issues

> 今日数据范围内仅有 2 条 Issues 更新（过去 24 小时活跃），以下为全部条目：

### 1. #2640 — Linux/WSL2 下 kimi CLI 0.42.0 随机硬死锁 ⛔ HIGH PRIORITY
- **状态**：OPEN · 创建：2026-09-11 · 评论：0 · 👍：0
- **重要性**：⚠️ **严重性最高**。用户报告在 Linux/WSL2 环境下长时间运行 TUI 后随机卡死，且 SIGTERM/SIGQUIT 均无法终止进程，甚至会拖垮 SSH 会话，属于典型的不可恢复死锁（hard deadlock）问题，影响所有 Linux/WSL2 平台用户。
- **建议**：Linux/WSL2 用户暂缓升级到 0.42.0，或运行中保留可断开的终端窗口；建议附上 strace / py-spy 栈信息帮助定位。
- 🔗 [查看 Issue](https://github.com/MoonshotAI/kimi-cli/issues/2640)

### 2. #1388 — CentOS 7.9 下 MCP 连接失败（已关闭）
- **状态**：CLOSED · 创建：2026-03-10 · 更新：2026-09-11 · 评论：0 · 👍：0
- **重要性**：该问题自 2026-03 开放至今约半年，描述在 CentOS 7.9 终端下运行 `kimicode` 出现 `mcp connect failed` 错误。今日被标记为 CLOSED，疑似已被修复或在更新版本中解决，但因评论数为 0，关闭原因（fixed / wontfix / stale）尚不明确，建议相关用户验证。
- 🔗 [查看 Issue](https://github.com/MoonshotAI/kimi-cli/issues/1388)

---

## 🔧 重要 PR 进展

**今日无 PR 更新。** 最近 PR 进展请关注 [Pull Requests](https://github.com/MoonshotAI/kimi-cli/pulls)。

---

## 📈 功能需求趋势

由于今日 Issues 数量极少（仅 2 条），趋势样本不足。但从仅有的两条记录可初步观察：

| 方向 | 信号 |
|------|------|
| **平台兼容性与稳定性** | ️ 上升 — #2640 反映 Linux/WSL2 长会话稳定性问题突出 |
| **企业级老旧系统支持** | ➡️ 平 — #1388 关注 CentOS 7.9（已 EOL 的 RHEL 7 衍生版）兼容性 |
| **MCP 协议可靠性** | ➡️ 平 — #1388 涉及 MCP server 连接链路，但样本不足以下定论 |

**注**：要获得更准确的趋势判断，建议结合过去 7 / 30 天的 Issue 标签分布综合分析。

---

##  开发者关注点

综合今日数据，开发者社区的反馈集中于以下两个高频痛点：

1. **🔒 进程可恢复性 / 信号处理缺陷**
   0.42.0 在 Linux/WSL2 下的硬死锁（#2640）暴露了 CLI 在长时间运行场景下信号处理（signal handling）与资源释放机制的潜在缺陷。开发者期望 CLI 至少能响应 SIGTERM/SIGINT 实现优雅退出，避免拖死宿主 SSH 会话。

2. **🐧 旧版 Linux 发行版的兼容性边界**
   CentOS 7.9（#1388）属于已停止官方维护的发行版，GLIBC / OpenSSL 版本较旧。MCP 客户端在 TLS 握手或 socket 行为上可能与现代发行版存在差异。社区希望明确项目对老旧发行版的最低支持策略（如最低 glibc 版本、是否提供静态二进制等）。

3. **📢 沟通透明度**（次要）
   #1388 关闭时评论数为 0，关闭原因不透明。建议维护者在关闭 Issue 时附上简短的解决说明或 commit 引用，降低后续用户的排查成本。

---

> 📊 **日报小结**：今日为低活跃度周期，核心风险点是 **#2640 的 Linux/WSL2 死锁问题**，建议版本 0.42.0 用户密切跟踪。如需更全面的趋势分析，可扩展数据范围至近 7 天。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报
**日期：2026-09-12**

---

## 一、今日速览

今日社区活动集中在 **OpenCode V2.0 正式发布前的收尾工作**：发布流水线、Windows 签名、Docker 制品路径、文档稳定包迁移等多项关键 PR 已合并关闭。与此同时，多个 **高优先级 V2 缺陷**（工具参数损坏、SQLite schema 不一致、子仓库配置加载）正在被集中修复。TUI 国际化（阿拉伯语/RTL）、插件 API 扩展、新命令 `/visualize` 与侧边栏导航是今日最具看点的功能进展。

---

## 二、版本发布

**今日无新版本发布。** 当前主线仍为已发布的 v1.17.18，V2.0 处于发布候选修复阶段（多个发布流水线 PR 已合并）。

---

## 三、社区热点 Issues

| # | 标题 | 状态 | 热度 | 摘要 |
|---|------|------|------|------|
| [#18001](https://github.com/anomalyco/opencode/issues/18001) | /loop 命令：自动化迭代任务 | CLOSED | 👍43 / 💬12 | 呼声最高的自动化特性之一，支持定时/循环执行任务，今日已关闭。 |
| [#47902](https://github.com/anomalyco/opencode/issues/47902) | [V2] 工具调用参数跨调用损坏 | **OPEN** | 💬4 | 严重缺陷：单个 V2 会话内多次连续调用后，参数出现截断、字段混淆、序列化标记残留，且 schema 校验未拦截。 |
| [#27328](https://github.com/anomalyco/opencode/issues/27328) | 本地服务器意外崩溃 | CLOSED | 💬9 | 授予权限后 TUI 冻结，服务端崩溃需重启恢复，影响模型访问。 |
| [#34215](https://github.com/anomalyco/opencode/issues/34215) | 桌面端启动卡死（global.dat 179MB） | CLOSED | 👍6 / 💬3 | 历史 prompt 中的 base64 PDF 导致全局数据库膨胀，引发分钟级卡死与 GB 级内存占用。 |
| [#36539](https://github.com/anomalyco/opencode/issues/36539) | [V2] 子仓库无法合并全局/共享配置 | CLOSED | 💬5 | 后台服务在子 git 仓库中启动时，未加载 `OPENCODE_CONFIG_DIR` 指向的共享工作区配置。 |
| [#36709](https://github.com/anomalyco/opencode/issues/36709) | 1.4.17 → 1.17.18 SQLite schema 不一致 | CLOSED | 💬2 | 从旧版本升级后 schema 与全新建库不一致，存在数据迁移风险。 |
| [#34592](https://github.com/anomalyco/opencode/issues/34592) | MCP OAuth token 刷新缺 resource 参数 | CLOSED | 💬4 | Atlassian 等遵循 RFC 9728 的 OAuth 服务因缺少 `resource` 参数返回 401。 |
| [#17344](https://github.com/anomalyco/opencode/issues/17344) | 自定义会话 ID（--session） | CLOSED | 👍12 / 💬5 | 提升外部脚本与项目管理工作流的体验。 |
| [#47237](https://github.com/anomalyco/opencode/issues/47237) | opencode provider: Muse Spark 报 Invalid upload | **OPEN** | 💬3 | 同 provider 下其他免费模型正常，问题疑在上游 Concurrency。 |
| [#47344](https://github.com/anomalyco/opencode/issues/47344) | 开箱即用发现 vLLM 模型 | **OPEN** | 👍1 / 💬2 | 当前需手写 OpenAI-compatible provider 配置，社区期望内置自动发现。 |

---

## 四、重要 PR 进展

| # | 标题 | 状态 | 要点 |
|---|------|------|------|
| [#48587](https://github.com/anomalyco/opencode/pull/48587) | TUI 原生阿拉伯语/RTL 支持 | OPEN | 一次性关闭 4 个长期 RTL/i18n issue，补齐双向文本渲染路径。 |
| [#48586](https://github.com/anomalyco/opencode/pull/48586) | 新增交互式 /visualize 命令 | OPEN | 配合 issue #48585，agent 可触发交互式可视化生成。 |
| [#48576](https://github.com/anomalyco/opencode/pull/48576) | 文档迁移到 V2 稳定包 | **CLOSED** | 安装/客户端/SDK/插件/命令示例全部从 `@beta` 切换到 `@opencode/*`。 |
| [#48568](https://github.com/anomalyco/opencode/pull/48568) | latest 版本剔除 Node CLI | **CLOSED** | 实验性 Node CLI 不再随 `latest` 渠道发布，dev/beta 不受影响。 |
| [#48571](https://github.com/anomalyco/opencode/pull/48571) | 修复 V2 Docker 制品路径 | **CLOSED** | 修正 `cli-linux-*` 制品目录未拷贝导致的部分 npm 包缺失问题。 |
| [#48567](https://github.com/anomalyco/opencode/pull/48567) | 主 Windows CLI 签名收窄 | **CLOSED** | 防止独立 Node 可执行文件误入 Azure SignTool 流程。 |
| [#48566](https://github.com/anomalyco/opencode/pull/48566) | 启用 V2 Windows CLI 签名 | **CLOSED** | 与上一条配套，确保 V2 主 CLI 走完整签名链路。 |
| [#43460](https://github.com/anomalyco/opencode/pull/43460) | 用 schema 自有实例解码插件工具输入 | OPEN | 修复 effect 版本不一致导致的工具输入解码失败。 |
| [#46690](https://github.com/anomalyco/opencode/pull/46690) | 插件 API 暴露会话表单/列表/全局事件流 | OPEN | 为 Telegram bot 等外部插件提供更完整的会话控制能力。 |
| [#48117](https://github.com/anomalyco/opencode/pull/48117) | 解析 OpenRouter 路由修饰后缀 | OPEN | 支持 `:floor`、`:nitro`、`:exacto`、`:online` 等 slug 后缀。 |

---

## 五、功能需求趋势

从本周 issue 与 PR 提取出的社区关注方向：

1. **自动化与脚本化工作流**：`/loop`（#18001）、自定义会话 ID（#17344）、动态写库（#36635）、`/visualize`（#48585/#48586）——开发者希望 OpenCode 像 shell/CLI 一样可编排。
2. **V2.0 发布质量**：子仓库配置（#36539）、SQLite schema（#36709）、Bedrock/Ollama/OpenRouter 协议兼容性（#34592、#36638、#48117）已构成发布阻塞清单。
3. **桌面端/TUI 体验**：启动性能（#34215）、Manage Models 布局（#36056）、Pinyin/AltGr 输入（#35884、#36607）、RTL 文本（#48587）。
4. **插件生态扩展**：会话表单、全局事件流（#46690）、状态栏自定义（#36625）。
5. **本地/自托管模型易用性**：vLLM 自动发现（#47344）、Ollama 思考变体参数透传（#36638）。
6. **多语言文档**：意大利语文档过期（#48565）触发"过期翻译隐藏/回退"机制讨论。

---

## 六、开发者关注点

| 类别 | 痛点 | 代表 issue/PR |
|------|------|---------------|
| **稳定性** | 本地服务器崩溃、TUI 冻结、工具参数损坏 | #27328、#47902 |
| **性能** | 桌面端启动分钟级卡死、global.dat 膨胀 | #34215 |
| **配置可预期性** | OPENCODE_CONFIG 优先级与文档不符、AGENTS.md 继承无文档 | #36663、#36699 |
| **平台兼容** | Windows 大小写权限、Pinyin IME 卡死、AltGr 失效 | #36690、#36607、#35884 |
| **第三方集成** | MCP OAuth RFC 9728 合规、provider header 透传 | #34592、#36619 |
| **可观测性** | 缺少 context 使用率告警、status bar 插件点 | #32567、#36625 |
| **文档治理** | 非英语文档滞后且缺乏回退策略 | #48565 |
| **安全误报** | opencode.log 被火绒误判为木马 | #36634 |

---

**总结**：今日是典型的"V2 发布前夜"型社区活动——核心维护者集中合并发布流水线修复（thdxr 一人多 PR），同时外部贡献者聚焦 TUI 国际化、插件 API 扩展和新命令。下一步建议重点跟踪 #47902（V2 工具参数损坏）的修复进展，以及 V2.0 的最终发布时间窗口。

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi 社区动态日报 · 2026-09-12

## 📌 今日速览

今日 Pi 社区焦点高度集中在 **Windows 平台兼容性** 上——多条新提交的 Issue 暴露了 Pi 在非 Latin 键盘布局、Windows Store shell 别名、`find` 工具的 Windows 路径分隔符、RPC 模式崩溃等方面的系统性短板。同期，@mitsuhiko 提交的"会话中段 system message 增量投递"系列 PR 取得关键进展，为多轮对话中的 prompt/tool 变更提供更清晰的传输语义。此外，多个 PR 已快速闭环修复对应 Issue，显示出维护团队对社区反馈的高响应度。

---

## 🚀 版本发布

**过去 24 小时无新版本发布。**

---

## 🔥 社区热点 Issues

### 1. [#7547](https://github.com/earendil-works/pi-mono/issues/7547) Windows 下使用 Pi 的现状与问题汇总（62 评论）
维护者 @petrroll 发起的"集中式"调研帖，旨在梳理 Pi 在 Windows 上的多种运行方式、常见 bug 与文档盲点。**重要性**：这是当前社区讨论最热的根话题，所有 Windows 相关 Issue 几乎都汇流至此；62 条评论表明大量开发者依赖 Windows 工作流。

### 2. [#9323](https://github.com/earendil-works/pi-mono/issues/9323) 改进 Fireworks 特定配置（14 评论）
针对 Fireworks provider 的 last-read 行为 bug，对应 `env-api-keys.ts` 同步鉴权检查的潜在缺陷。社区反馈显示其影响所有使用环境变量配置 provider 的用户。

### 3. [#5323](https://github.com/earendil-works/pi-mono/issues/5323) 改进 Vertex + GCP 元数据服务器支持（9 评论）
长期未结的 issue：Vertex 鉴权的同步 `existsSync` 检查在元数据服务器场景下失败。社区需要异步且更可靠的鉴权判定。

### 4. [#7321](https://github.com/earendil-works/pi-mono/issues/7321) Termux 等无 bracketed paste 支持的终端上多行粘贴失败
影响 Android 用户的高频操作——`\r` 触发 submit 而非插入换行。已给出根因分析，等待 fix。

### 5. [#9410](https://github.com/earendil-works/pi-mono/issues/9410) 大会话下按 Esc 中断流式输出导致 ~60s TUI 完全冻结
在 ~465k token 上下文中按 Esc 触发长达 58 秒的"⠸ Working"卡死，期间编辑器无响应。**重要性**：直接影响大上下文工作流的可用性。

### 6. [#9262](https://github.com/earendil-works/pi-mono/issues/9262) find 工具对 Windows 路径分隔符（`src\**\*.ts`）静默返回空结果
代理或用户复制原生 Windows 路径模式后无任何错误提示，得到空结果导致误判文件不存在。**重要性**：典型的"静默失败"陷阱。

### 7. [#7658](https://github.com/earendil-works/pi-mono/issues/7658) 扩展 API 缺少持久化 API-key 凭证（auth.json）的能力
扩展可注册 provider 但无法程序化写入 `auth.json`，限制了自定义鉴权流程的构建。

### 8. [#6108](https://github.com/earendil-works/pi-mono/issues/6108) Release 二进制在 /reload 时重复执行扩展依赖副作用
Linux release 中 `@plannotator/pi-extension` 重复注册主题，说明依赖模块副作用在 reload 时未被缓存。**重要性**：影响所有依赖模块初始化副作用的扩展。

### 9. [#9045](https://github.com/earendil-works/pi-mono/issues/9045) `--mode` 接受未知值时静默忽略
脚本用户传 `--mode yaml` 时既不报错也不生效，回退到 text/interactive mode，缺乏诊断信息。

### 10. [#9510](https://github.com/earendil-works/pi-mono/issues/9510) / [#9509](https://github.com/earendil-works/pi-mono/issues/9509) Alt+字母键绑定在非 Latin 键盘布局下完全失效
俄语/西里尔等布局下 `Alt+V`（pasteImage）毫无反馈。终端发送的是 `ESC + 西里尔字符` 而非 `ESC + latin char`。**重要性**：影响全球非英语开发者群体的基础交互。

---

## 🛠 重要 PR 进展

### 1. [#9116](https://github.com/earendil-works/pi-mono/pull/9116) feat(ai): 新增会话中段 system message（mitsuhiko，已关闭）
为 pi-ai 增加"会话中段 system role"能力，是 #8998 拆分的第一层。后续 PR #9117 将其接入 coding agent，实现扩展中途改变 prompt/tools 时通过增量 system message 投递，而非整体重写顶层 prompt。**架构层面重要演进**。

### 2. [#9117](https://github.com/earendil-works/pi-mono/pull/9117) feat(coding-agent): 将 prompt/tool 变更作为 system message delta 投递（mitsuhiko，已关闭）
#9116 的下一层，将 coding agent 真正切换到 delta 模型——工具集变更不再"扰动"主 prompt 历史。

### 3. [#9505](https://github.com/earendil-works/pi-mono/pull/9505) fix(ai): openai-completions 流式路径正确应用 model.samplingParams（已关闭）
修复 #9506：之前 `streamSimple` 走 `buildBaseOptions` 合并 `samplingParams`，但 tool-capable `stream` 路径只读 `options.samplingParams`，导致 `models.json` 中配置的 vLLM/llama.cpp repetition_penalty、dry multiplier 等引擎参数被丢弃。

### 4. [#9504](https://github.com/earendil-works/pi-mono/pull/9504) fix(coding-agent): 接受 Windows Store shell 别名（OPEN）
用 `accessSync(F_OK)` 替代 `existsSync()`，绕开 Node 在 Windows Store 别名上抛 EACCES 的问题（nodejs/node#36790）。

### 5. [#9501](https://github.com/earendil-works/pi-mono/pull/9501) fix(coding-agent): 统一从安装目录解析 Windows shell（OPEN）
@petrroll 主导，统一文档化 Pi 在 Windows 下定位 PowerShell 的逻辑，大幅改善跨版本 Windows 的 shell 发现。

### 6. [#9489](https://github.com/earendil-works/pi-mono/pull/9489) fix(bedrock-converse): 按模型族归一化 usage.input（已关闭）
修复 #8752：Bedrock Converse 下 `inputTokens` 在 Claude 模型上为净输入（含 cache 命中分离到独立字段），其他族为毛输入。统一语义以便配额与计费统计。

### 7. [#9488](https://github.com/earendil-works/pi-mono/pull/9488) fix(ai): 添加规范的 Codex turn 归属（OPEN）
新增 provider-neutral 的 `requestIdentity` 流选项，让一个用户输入组内的多次请求（工具续传、重试、steering、compaction 恢复）可在服务端可靠关联。

### 8. [#9442](https://github.com/earendil-works/pi-mono/pull/9442) fix(ai): 为兼容代理启用 prompt cache key（OPEN）
默认短 retention 下 Chat Completions 不发送 `prompt_cache_key`，导致兼容代理无法接收会话级缓存键。新增 `compat.supportsPromptCacheKey` 显式 opt-in。

### 9. [#8572](https://github.com/earendil-works/pi-mono/pull/8572) feat(ai): Amazon Bedrock Mantle 支持（OPEN，WIP）
新增 Bedrock Mantle API 表面支持，承接 GPT-5.x 等通过 Mantle 发布的模型，关闭 #5363。

### 10. [#9483](https://github.com/earendil-works/pi-mono/pull/9483) 工具 cwd 解析改为 opt-in `customCwd` + `ctx.cwd` 回退（已关闭）
基于 #8627 合并后的反馈，将显式 cwd 重命名为 `customCwd` 表达意图，保持向后兼容。

**其他值得关注**：
- [#9478](https://github.com/earendil-works/pi-mono/pull/9478) 自动压缩输入的每条消息字符上限（已关闭，修复 #9476）
- [#9468](https://github.com/earendil-works/pi-mono/pull/9468) 延迟扩展重载（`requestReload`，settle 时合并且永不在 turn 中）
- [#8708](https://github.com/earendil-works/pi-mono/pull/8708) 解析 fd/rg release 版本不再走 GitHub API（已关闭，绕开匿名配额限制）
- [#9491](https://github.com/earendil-works/pi-mono/pull/9491) 文档"提升度"评估：现有 provider / OpenAI 兼容 / 自定义流式 provider 三套 eval

---

## 📈 功能需求趋势

| 方向 | 典型信号 |
|---|---|
| **Windows 平台体验** | #7547、#9262、#9490、#9507、#9509、#9510、#9493 — 已占当前 issue 池的近半数 |
| **扩展 API 完善** | #7658（auth.json 持久化）、#6930（oauth HTML 公开）、#9462（notify 竞态）、#9511（事件 hook 类型未导出） |
| **Provider 兼容性** | #9323（Fireworks）、#9508（OpenAI 兼容拒绝 400）、#9506（samplingParams 丢失）、#9489（Bedrock 计量归一化）、#8572（Bedrock Mantle） |
| **MCP / 工具发现** | #9480（mcp connect 不刷新 tools/list）、#9205（示例使用不存在的 flag） |
| **大上下文性能** | #9410（Esc 60s 冻结）、#8371（compaction 无界）、#9478（单消息 6.6MB web_fetch 误触发压缩） |
| **可观测性 / 集成** | #9469（非阻塞事件导出到 webhook/MQ）、#9488（Codex turn 归属） |
| **启动 / 资源加载** | #9493（banner 与实际 prompt 过滤不一致）、#9475（拆分启动与恢复改进） |

---

## 💬 开发者关注点

1. **"静默失败"是最高频痛点**：#9262（Windows glob 返回空集无报错）、#9045（`--mode` 吞掉未知值）、#9480（MCP tools 不刷新无提示）—— 多个 bug 都因失败无任何输出而难以察觉，社区呼吁引入更强的诊断通道（diagnostics / unknownFlags）。

2. **扩展作者的"边界"焦虑**：`ctx.ui.notify` 的 last-wins 语义、auth.json 无写入路径、事件 hook 类型不导出——开发者希望官方给出"扩展可以做 / 不能做"的更清晰契约。

3. **大上下文会话的稳定性**：从 #9410 的 60s 冻结到 #8371 的 compaction 死锁，再到 #9478 的单消息巨型结果误触发再次压缩——长会话已是真实工作流场景，急需在估算与中断路径上做加固。

4. **Windows 不再是"二等公民"**：以 @petrroll 为核心，团队明显加大 Windows 投入（PR #9501、#9504，Issue #7547 收集反馈），但键盘布局、路径分隔符、shell 发现等"碎片化"问题需要系统性方案而非逐个修补。

5. **provider 中立性 vs 模型特定行为**：samplingParams、cache key、turn attribution、usage 归一化——每接入一个新 provider 就暴露一类语义不一致，社区希望建立更通用的"provider 能力声明"机制（如 PR #9442 的 `compat.supportsPromptCacheKey`）。

---

*日报基于 github.com/badlogic/pi-mono 2026-09-12 数据自动整理。*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报 · 2026-09-12

---

## 一、今日速览

Qwen Code 今日发布 **v0.23.3-nightly.20260911** 版本，重点清理 DingTalk 频道过时的后台响应聚合逻辑。社区方面，TUI 在多后台 Agent 并发完成时静默崩溃的 **P1 缺陷（React #185 死循环，#11500）** 持续升温；同时，多个 **数据隐私/安全类 Bug**（遥测上传未脱敏、日志泄露请求体、模型切换串号）进入修复或评审阶段。VSCode 远端、Web Shell、ACP 桥接三个集成面均有重要 PR 落地，Windows ConPTY 与 Git hook 进程回收链问题取得实质进展。

---

## 二、版本发布

### v0.23.3-nightly.20260911.aaa6a32aae

Nightly 通道发布，提交 `aaa6a32aae`。本次变更：

- **refactor(dingtalk)**: 移除过时的后台响应聚合逻辑（#11570 by @qqqys）
- **feat(channels)!**: 开始清理 DingTalk 频道历史遗留的能力定义（Breaking Change 进行中）

📦 [Release v0.23.3-nightly.20260911](https://github.com/QwenLM/qwen-code/releases/tag/v0.23.3-nightly.20250911.aaa6a32aae)

---

## 三、社区热点 Issues（10 条精选）

### 🔴 P1 严重缺陷

| # | 标题 | 状态 | 关注点 |
|---|------|------|--------|
| [#11500](https://github.com/QwenLM/qwen-code/issues/11500) | TUI 在多后台 Agent 完成时静默退出（React #185 useBoxMetrics 死循环）| OPEN · 7 评论 | 影响所有使用 background agent 的会话，恢复后仅提示 "Previous session appears..."，无错误信息；属于高频复现的稳定性问题 |
| [#11352](https://github.com/QwenLM/qwen-code/issues/11352) | Windows web-terminal PTY 退出后泄漏 conhost.exe | OPEN · 6 评论 | 已定位到 inbox ConPTY 后端，shell 侧由 #11497 修复；web-terminal PTY 仍待跟进 |
| [#11556](https://github.com/QwenLM/qwen-code/issues/11556) | vscode-ide-companion 0.23.1 在 Remote-SSH 下 webview 卡加载 | OPEN · 5 评论 | VSCode 客户端与远端服务器跨架构（x64↔aarch64）场景，0.23.x 升级回归 |
| [#11590](https://github.com/QwenLM/qwen-code/issues/11590) | Qwen Code 自动注入 `metadata` 字段致第三方模型 400 | OPEN · 4 评论 | 对 ZHIPU/GLM-5.3-Flash 等非 Qwen 模型完全不可用，是**多供应商生态**的核心障碍 |
| [#11610](https://github.com/QwenLM/qwen-code/issues/11610) | Hook 契约与 Claude Code 不对齐（stdout、stop_hook_active、超时单位、matcher）| OPEN · 3 评论 | 决定 qwen-code hook 体系能否直接复用 Claude Code 生态扩展 |

### 🟠 P2 缺陷与改进

| # | 标题 | 状态 | 关注点 |
|---|------|------|--------|
| [#11665](https://github.com/QwenLM/qwen-code/issues/11665) | Responses 清理破坏 reasoning/tool-call 相邻性 | OPEN · 4 评论 | OpenAI Responses 管道 `reasoning` 与 `function_call` 必须绑定为单位，目前会被独立清理 |
| [#8138](https://github.com/QwenLM/qwen-code/issues/8138) | worktree 内设置写入项目根 .qwen 而非 worktree 自己的 .qwen | OPEN · 6 评论 | 影响所有使用 `agent isolation:'worktree'` 的用户，配置污染严重 |
| [#11564](https://github.com/QwenLM/qwen-code/issues/11564) | web_search 引用源需要真实页面标题 | OPEN · 4 评论 | 从 #11490 拆出，已进行两轮 review，需要设计决策 |
| [#11024](https://github.com/QwenLM/qwen-code/issues/11024) | Worktree session 生命周期清理（含 Part 4A 残余）| OPEN · 4 评论 | Items 1/2 已合入 main，残余点尚未验证 |

### 🔒 安全/隐私

| # | 标题 | 状态 | 关注点 |
|---|------|------|--------|
| [#11666](https://github.com/QwenLM/qwen-code/issues/11666) | 遥测在 `logPrompts=false` 时仍导出完整请求内容 | OPEN · 3 评论 | `LoggingContentGenerator.logApiRequest` 直接写入 `api_request.request_text`，已分配给 #11670 修复 |

---

## 四、重要 PR 进展（10 条精选）

| PR | 模块 | 说明 |
|----|------|------|
| [#11669](https://github.com/QwenLM/qwen-code/pull/11669) | fix(core) | 阻断仓库自身 `.git/config` 中配置的外部程序被自动 git 调用执行 —— **安全关键**，直接关闭一条 supply-chain 路径 |
| [#11643](https://github.com/QwenLM/qwen-code/pull/11643) | fix(core) | web-terminal PTY 切换到打包的 ConPTY 后端，修复 #11352 中 web-shell 侧的 conhost.exe 泄漏 |
| [#11623](https://github.com/QwenLM/qwen-code/pull/11623) | fix(core) | Windows 上回收"父进程退出仍存活"的 hook 进程树，关闭 #11163 系列的安全口子 |
| [#11679](https://github.com/QwenLM/qwen-code/pull/11679) | fix(live) | 修复 Windows 上 qwen-live 测试套件因目录权限位被 monitor debug 存档拒绝初始化的回归 |
| [#11653](https://github.com/QwenLM/qwen-code/pull/11653) | fix(acp-bridge) | 拒绝 libuv 报告的 "unlimited" cgroup 哨兵值，避免 ACP 子进程 V8 old-space 失控 |
| [#11683](https://github.com/QwenLM/qwen-code/pull/11683) | fix(cua) | 修复 OSWorld 跑测中 CUA SDK 的工具失败与冗余恢复路径（macOS 快捷键、REPL 状态机等）|
| [#11636](https://github.com/QwenLM/qwen-code/pull/11636) | feat | 为后台结果执行引入 daemon 端生命周期，含自动续跑、权限/取消/重放/usage 全链路 |
| [#10906](https://github.com/QwenLM/qwen-code/pull/10906) | feat(web-shell) | 在 Web Shell 任务详情面板内直读 Shell + Monitor 捕获输出，新增 live-session-owner 范围的尾部接口 |
| [#11163](https://github.com/QwenLM/qwen-code/pull/11163) | feat(web-shell) | 工作区分支面板新增 "Manage Remotes"，支持 fetch/push URL 展示、增删（两步确认）|
| [#9466](https://github.com/QwenLM/qwen-code/pull/9466) | refactor | 将 rewind 映射锚定到稳定的 prompt 身份，跨 session resume、headless `-p --resume` 等场景不再因 turn 重排而错位 |

> 另有多条 CLI 修复（#11562 一次性提醒不混入用户消息、#11658 OpenTUI 确认弹窗 viewport 收容、#11647 ACP 设置回退到 `getTargetDir()`）与 CI 改进（#11134 macOS E2E 引入预算门控重试、#11291 无 HTTP 状态的上游错误自动重试）持续落地。

---

## 五、功能需求趋势

通过对过去 24h 内 50 条 Issues 与 50 条 PR 的归纳，社区关注点呈现以下趋势：

1. **多供应商模型兼容** —— Qwen Code 与 DashScope 聚合网关对非 Qwen 模型（如 ZHIPU/GLM、Anthropic、OpenAI 直连）的字段兼容性问题成为新增焦点（#11590、#9453 串联反映）。
2. **安全/隐私一致性** —— 遥测、日志、内存中 `thoughtSignature` 等 opaque 字段的导出策略正在被系统性审计（#11666、#11667、#11682、#11198）。
3. **Web Shell 产品化** —— git 远程管理、元数据懒加载、shell/monitor 任务输出查看（#11163、#11644、#10906）说明 Web Shell 正从"能用"走向"可日常使用"。
4. **Worktree 与 Session 生命周期** —— owned-worktree 清理、命名 session、standalone session 等提案已分阶段落地（#11024、#10103、#8908、#9490）。
5. **Hook 引擎对齐 Claude Code** —— 单纯事件派发已与上游对齐，下一步是契约细节（stdout 文本、`stop_hook_active`、matcher、common input）（#11610）。
6. **OpenAI Responses 管道稳定性** —— reasoning 关联、tool-call 相邻性、模型切换串号（#11665、#9453、#11590）形成一组彼此关联的问题。
7. **CI/CD 基础设施工艺化** —— CVE 审计、ECS runner 翻新、macOS E2E 预算重试（#10850、#11633、#11134）表明工程团队正在系统化提升流水线鲁棒性。

---

## 六、开发者关注点

基于评论、👍 数与跨议题关联度，社区痛点可归纳为四类：

- **崩溃可见性差**：TUI 静默退出（#11500）、shell 进程泄漏（#11352）等"无错误地消失"现象反复出现，开发者呼吁补充最小诊断日志与 CLI 端"Previous session appears..."之外的明确提示。
- **Windows 平台一致性**：conhost 泄漏、hook 进程树回收、Remote-SSH webview 卡加载、目录权限位校验失败等多条 P1 都集中在 Windows，反映出该平台仍处于追赶状态。
- **隐私默认值的信任成本**：开发者对 `logPrompts=false` 的实际生效范围格外敏感（#11666、#11667、#11198），希望导出策略有明确文档而非依赖代码追踪。
- **多模型/多 IDE 生态对齐**：与 Claude Code 的 hook 契约、与第三方模型厂商的字段约定、与 VSCode Remote 的兼容，三条线交织，决定 Qwen Code 在"Agent 工具"定位中的可替换性。

---

> 数据口径：基于 GitHub `QwenLM/qwen-code` 仓库 2026-09-11 ~ 2026-09-12 之间更新过的 Releases / Issues / PRs。Nightly 版本号与发行说明以仓库实际为准。

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI 社区动态日报
**日期：2026-09-12**

---

## 📌 今日速览

今日 Codewhale（原 DeepSeek-TUI）仓库更新密集，社区焦点集中在 **TUI 体验细节打磨** 与 **Sub-agent / 会话管理的可靠性** 上：包括 `request_user_input` 模态框裁剪、并行测试 flaky、恢复会话 ENOENT 等关键 bug；同时多模型适配持续推进（GLM-5.3 forced-thinking、Gemini thought signatures），并正式合并了 session tar.xz 归档导出能力。

---

## 🚀 版本发布

**今日无新版本发布。**

---

## 🔥 社区热点 Issues（按讨论热度精选）

### 1. [#5316 EPIC-005: CodeWhale TUI Crate Decomposition](https://github.com/Hmbown/Codewhale/issues/5316) — 22 💬
**核心**：当前最重要的架构级 umbrella issue，关联 Linear 上 C03–C10 核心执行计划，决定了 `codewhale-tui` crate 拆分的整体路径与依赖顺序。
**社区反应**：讨论度最高，是核心架构演进的「指挥棒」。

### 2. [#5620 [bug] 上下文压力告警瞬时失效，Agent 不主动应对](https://github.com/Hmbown/Codewhale/issues/5620) — 15 💬
**核心**：上下文压缩前的预警信号丢失，Agent 没有主动降级策略；中危等级，会静默降低对话质量。
**重要性**：直接关系到长会话稳定性，是 v0.9.x 系列的安全基线问题。

### 3. [#5929 [bug] codewhale-tui lib 测试并行 flake](https://github.com/Hmbown/Codewhale/issues/5929) — 6 💬
**核心**：6 个测试在负载下 flake、隔离下通过，导致每次完整测试需要 25 分钟矩阵重跑。
**重要性**：CI 效率瓶颈，影响合并节奏。

### 4. [#6025 DeepSeek V4 Pro 服务将于 9/14 12:00 (Beijing) 下线](https://github.com/Hmbown/Codewhale/issues/6025) — 4 💬
**核心**：官方通知：Pro 模型将路由到 V4.1 Flash 并按 Flash 价计费。
**重要性**：跨厂商迁移信号，所有依赖 Pro 的用户/集成方需要尽快评估。

### 5. [#6102 [bug] 恢复中断会话失败（ENOENT）](https://github.com/Hmbown/Codewhale/issues/6102) — 4 💬
**核心**：`codewhale resume` 时解析 runtime store 目录出现双重路径问题，触发 `os error 2`。
**重要性**：影响日常使用路径的可靠性。

### 6. [#6045 [fix] TUI 用户输入模态框裁剪问题](https://github.com/Hmbown/Codewhale/issues/6045) — 4 💬
**核心**：`request_user_input` 对话框在 141×38 终端下选项被截断、底层对话被遮挡、无回退导航。
**重要性**：TUI UX 的核心交互路径，亟需统一契约。

### 7. [#5856 [release-blocker] Computer-use 插件](https://github.com/Hmbown/Codewhale/issues/5856) — 3 💬
**核心**：内置 bundle 的发布验收路径仍未走完，插件安装仪式并非 build-in 方案的接受路径。
**重要性**：当前 release blocker，发布前必须清掉。

### 8. [#6017 Codewhale 是否可支持跨会话持久记忆？](https://github.com/Hmbown/Codewhale/issues/6017) — 3 💬
**核心**：MemCode CEO 提议作为可选记忆层集成。
**重要性**：反映「持久记忆」是社区与外部厂商共同关注的产品方向。

### 9. [#6097 [bug] sub-agent 工具循环未执行 typed `permissions.toml` deny 规则](https://github.com/Hmbown/Codewhale/issues/6097) — 1 💬
**核心**：父会话的 deny 规则在子 agent 中被绕过，构成真实安全绕过。
**重要性**：高危安全问题，权限模型必须覆盖整棵执行树。

### 10. [#6101 [enhancement] 工具审批提示加超时（默认拒绝）](https://github.com/Hmbown/Codewhale/issues/6101) — 1 💬
**核心**：`await_tool_approval` 完全没有超时，存在无人值守时的挂起风险。
**重要性**：补齐 unattended 场景下的可恢复性。

---

## 🛠️ 重要 PR 进展

### 1. [#6055 [OPEN] feat(subagent): 速率限制自适应的子 agent 启动调度](https://github.com/Hmbown/Codewhale/pull/6055)
将固定容量 `Semaphore` 升级为可感知上游 429 的自适应调度，缓解共享 provider 下的雪崩。

### 2. [#6096 [OPEN] feat(commands): 在 TUI session-export 中采用 capability shapes (FEAT-025)](https://github.com/Hmbown/Codewhale/pull/6096)
EPIC-006 / FEAT-025 推进，把 `/export`（别名 `/daochu`）迁移到可移植命令契约，纯结构改造、无用户行为变化。

### 3. [#6100 [OPEN] feat(web_search): 新增 Serply 搜索 provider](https://github.com/Hmbown/Codewhale/pull/6100)
按 Sofya adapter 形态新增 `provider = "serply"`，通过 `X-Api-Key` 调用，丰富 Web 工具能力。

### 4. [#6056 [CLOSED] feat(session): 将完整保真会话归档导出为 tar.xz](https://github.com/Hmbown/Codewhale/pull/6056)
新增 `session_export` 模块的 `write_session_archive`，CLI 与嵌入式 host 均可调用，与 `/export` markdown 互补。

### 5. [#6053 [CLOSED] feat(tools): 允许 ToolResult 通过 metadata.images 携带图像](https://github.com/Hmbown/Codewhale/pull/6053)
约定 `metadata["images"]` 为文件路径数组，引擎自动挂载 PNG/JPEG/GIF/WebP（≤5 MB）给多模态模型。

### 6. [#6054 [CLOSED] feat(execpolicy): 增强 deny 匹配表达能力](https://github.com/Hmbown/Codewhale/pull/6054)
四项加固：cmd.exe 单字母 `/` 旗标、heredoc/多行、`>`/`>>` 重定向前缀、嵌套 shell 引用语义。

### 7. [#6051 [CLOSED] fix(zai): 尊重 GLM-5.3 forced-thinking 控制](https://github.com/Hmbown/Codewhale/pull/6051)
适配 Z.ai 与 BigModel：禁用 `disabled`、`reasoning_effort` 仅接受 low/high/max，并迁移老 payload。

### 8. [#6052 [CLOSED] fix(tui): 模型面文档与工具门控对齐](https://github.com/Hmbown/Codewhale/pull/6052)
五项审计修复：finance 绕过网络策略、`Network` 能力声明被忽略等漏洞。

### 9. [#6081 [CLOSED] fix(client): 解释缺失的 Gemini thought_signature](https://github.com/Hmbown/Codewhale/pull/6081)
网关重放工具调用时若丢失 `thought_signature`，引导用户切换至内置 `google` provider 或保留签名网关。

### 10. [#6057 [CLOSED] chore(deps): 安全依赖升级 2026-09-11](https://github.com/Hmbown/Codewhale/pull/6057)
夜间安全扫描批量合并 9 个 Dependabot npm 告警，无 Cargo / CodeQL 改动。

> 其余合并的依赖升级：`flate2 1.1.10` [#6107](https://github.com/Hmbown/Codewhale/pull/6107)、`encoding_rs 0.8.40` [#6104](https://github.com/Hmbown/Codewhale/pull/6104)、`lru 0.18.4` [#6106](https://github.com/Hmbown/Codewhale/pull/6106)、`rustls 0.23.44` [#6105](https://github.com/Hmbown/Codewhale/pull/6105)、`dirs 7.0.0` [#6103](https://github.com/Hmbown/Codewhale/pull/6103)、`js-yaml 4.3.2` [#6026](https://github.com/Hmbown/Codewhale/pull/6026) / [#6027](https://github.com/Hmbown/Codewhale/pull/6027)，以及中文文档相对链接修复 [#6080](https://github.com/Hmbown/Codewhale/pull/6080)。

---

## 📈 功能需求趋势

| 方向 | 代表 Issue | 趋势解读 |
|---|---|---|
| **TUI UX 契约化** | #6045、#4402、#6014 | 模态框、通知焦点、会话选择器的「可见、可逆、可恢复」体验成为高频补丁方向 |
| **会话/Sub-agent 可靠性** | #5620、#6102、#5929、#6097、#6055 | 多 agent 并行下的 429、上下文压缩、断点恢复是稳定性三大痛点 |
| **持久记忆 / 第三方插件** | #6017、#6050 | 跨会话记忆、MemoryBackend 通用接口（mem0 / causal-memory）成为外部集成热点 |
| **新模型适配** | #6025、#6051、#6081、#4168 | DeepSeek V4 Pro 下线、GLM-5.3 forced-thinking、Gemini 签名、用户自定义模型——provider 多样化是长期方向 |
| **安全/权限模型** | #6054、#6097、#6098、#6099 | `permissions.toml` / `execpolicy` 的覆盖范围正从主交互扩展到 exec、子 agent、heredoc 边界 |
| **调试与可观测性** | #3981 | Debug Adapter Protocol 表面被提上 0.8.68 路线 |
| **文档与本地化** | #6080、#4754 | 中英文档相对路径、`/workflows` 实时监控等「文档 = 产品」的诉求在上升 |

---

## 💡 开发者关注点

1. **并行执行下的稳定性** —— 共享 provider 上的 429、子 agent 启动调度、6 个 lib 测试 flake，开发者最在意「能不能在 CI 上稳定跑通」。
2. **TUI 真实终端适配** —— 多次出现的「141×38 终端下选项被截断、无法回退」表明开发者在真实生产终端而非演示环境下遇到 UX 退化。
3. **权限/执行策略的一致性** —— `permissions.toml` 与 execpolicy 在 exec 路径和子 agent 中的覆盖盲区，是安全敏感用户首要担忧。
4. **会话可恢复性** —— `codewhale resume` ENOENT、tar.xz 全保真导出，反映「会话是资产」的产品心智已形成。
5. **Provider 中立化迁移** —— `DeepSeekClient` 重命名为 provider-neutral、内部字段同步去品牌化，叠加 DeepSeek Pro 下线，提示架构层正在主动减少对单一厂商的绑定。
6. **多模态 / Computer-use** —— ToolResult.metadata.images 约定和 Computer-use 插件验收，反映对「模型可以看见屏幕」的预期正在落地。

---

*报告基于 2026-09-11 ~ 2026-09-12 之间的 GitHub 数据生成，覆盖 Hmbown/Codewhale 仓库（原 DeepSeek-TUI）的 Issues 与 PRs。*

</details>

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*