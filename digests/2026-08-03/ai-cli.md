# AI CLI 工具社区动态日报 2026-08-03

> 生成时间: 2026-08-03 02:10 UTC | 覆盖工具: 9 个

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

# 2026-08-03 AI CLI 工具横向对比分析报告

---

## 1. 生态全景

当前 AI CLI 工具生态正从"单一模型驱动"加速向"**多 Agent 协作 + 跨端连续性 + 资源可控性**"演进。**会话持久化、子代理可靠性、跨平台一致性**已成为八款主流工具共同面对的三大核心矛盾。**Gemini CLI 与 Qwen Code** 持续高频迭代（nightly 版本稳定输出），**OpenCode / Pi / DeepSeek TUI** 作为新兴力量在架构层（compaction、Fleet、Runtime API）投入明显，而 **Claude Code / OpenAI Codex / Copilot CLI** 处于规模化后的"质量回填期"，主要精力放在修复一致性与回归问题。

---

## 2. 各工具活跃度对比

| 工具 | 新版本 | 今日 Issue（活跃） | 今日 PR | 主要焦点 | 社区成熟度信号 |
|------|--------|---------------------|---------|----------|----------------|
| **Claude Code** | ❌ 无 | ~15（Top 10 + 5 追踪） | 3 | 多端一致性 / Opus 5 effort 回归 | 高热度（👍44、38、20），但 PR 产出少 |
| **OpenAI Codex** | ❌ 无 | 10 | 6 | Linux Desktop 诉求 / Token 浪费 | Linux Desktop 906 👍 长期悬而未决 |
| **Gemini CLI** | ✅ nightly | ~50 | ~50（含 75 项依赖批量升级） | Subagent 可靠性 / Auto Memory | PR 量产，自动化程度极高 |
| **GitHub Copilot CLI** | ❌ 无 | 13 | **0** | 1.0.73 回归 / 会话状态 | PR 静默，Issue 集中爆发 |
| **Kimi Code CLI** | ❌ 无 | 4 | 1（已关闭） | Remote Control / Memory | 社区体量小但需求清晰 |
| **OpenCode** | ❌ 无 | ~15（Top 10 + 5 追踪） | 10 | 资源泄漏 / 新模型 / 桌面端 | PR 节奏稳定，资源类 Issue 居高 |
| **Pi** | ❌ 无 | 34 | 18 | Compaction / 超时 / WezTerm | 开发者主导，PR 合并率高 |
| **Qwen Code** | ✅ nightly | ~30 | ~16 | Web Shell / Daemon / OpenAI 兼容 | 唯一同时有版本 + 大量 PR 的中文系工具 |
| **DeepSeek TUI** | ❌ 无 | 10 | 10 | Runtime API / Fleet / i18n | 进入 v0.9.4 收口期，节奏紧凑 |

**关键观察**：
- **PR 产出 Top 3**：Gemini CLI（≈50，含自动化）、Pi（18）、Qwen Code（≈16）
- **PR 静默工具**：GitHub Copilot CLI（0 PR，但 13 Issue），值得警惕
- **新版本节奏**：仅 Gemini CLI 与 Qwen Code 在过去 24h 有 nightly 推进

---

## 3. 共同关注的功能方向

| 需求方向 | 涉及工具 | 具体诉求 |
|----------|----------|----------|
| **跨设备会话连续性 / Remote Control** | Kimi Code（#1282, 24 👍）、Claude Code（#40175, #83411）、Qwen Code（DaC 模式）、OpenAI Codex（#27565） | 离开桌面继续本地会话、云端存档、跨端同步 |
| **子 Agent 可靠性与权限继承** | Gemini CLI（#22323、#21409、#22093）、Claude Code（#83421）、Kimi Code（#2578）、DeepSeek TUI（#5123） | 误报成功、挂死、绕过权限、403 下工作丢失 |
| **Token / 成本可控性** | OpenAI Codex（#13733、#2916、#31860、#35259）、Claude Code（#83364）、DeepSeek TUI（#1004、#855） | Service Tier、上下文截断、轮询浪费、preview/dryrun |
| **OpenAI 兼容 API 的边角错误处理** | Qwen Code（#8398、#8356、#8382）、OpenAI Codex、Pi（#7062） | `APIUserAbortError` 误判、duplicate tool call id、非标流式响应 |
| **Auto Memory / 跨会话记忆** | Gemini CLI（#26522/23/25/16）、Kimi Code（#1283）、DeepSeek TUI（#5131） | 低信号会话重试、脱敏机制、内存作用域 |
| **MCP 生态深化** | OpenAI Codex（#19425）、Gemini CLI（#28626 SDK 升级）、OpenCode（#40125 per-server trust） | 工具暴露、协议升级、信任粒度 |
| **TUI 终端兼容性** | Pi（WezTerm 簇 #7481/86/90）、Qwen Code（#8385 ConEmu）、Copilot CLI（#4328 WSL2）、Claude Code（#2805 CRLF） | 键盘映射、主题渲染、行尾字符、输入法 |
| **新模型 / 多 Provider 接入** | OpenCode（DeepSeek V4 #39845）、Pi（LLM Gateway #7480、DeepInfra #7501）、Qwen Code（OpenAI 兼容）、DeepSeek TUI（多路由） | 速度、白名单准确性、零留存策略 |

---

## 4. 差异化定位分析

| 工具 | 核心定位 | 目标用户 | 技术路线亮点 |
|------|----------|----------|--------------|
| **Claude Code** | 企业级多端 + 高端模型 (Opus 5) | 专业开发者、付费用户 | 跨 Desktop/Cowork/Mobile/CLI 一体化 |
| **OpenAI Codex** | ChatGPT 生态 + 桌面化 | ChatGPT Pro 用户 | 与 ChatGPT Work / Codex Web 深度集成 |
| **Gemini CLI** | 自动化驱动的快速迭代 | 实验性用户、研究者 | AST-aware 工具 + 76 个 behavioral eval 基建 |
| **GitHub Copilot CLI** | GitHub 工作流 + ACP 协议 | GitHub 重度用户 | 优先 ACP / OpenAI 兼容端点 |
| **Kimi Code CLI** | 远程控制 + 多 Agent 触发 | 移动办公用户 | 外部 Agent 唤醒通道（#2579）|
| **OpenCode** | 开源 + 多 Provider + 桌面 | 隐私敏感 / 自托管用户 | AIRGAP 模式 / SQLite WAL 治理 |
| **Pi** | 终端优先 + 架构严谨 | 极客 / Terminal 控 | 显式 SessionStorage / AbortSignal 全覆盖 |
| **Qwen Code** | Web Shell + Daemon 守护进程 | 中文用户 / 团队协作 | WorkspaceRuntime 五态所有权 / ECS CI |
| **DeepSeek TUI** | Fleet 多租户 + 移动/嵌入 | Subagent 重度用户 | Runtime API 三大资源同补齐 |

**关键差异**：
- **架构层投入**：Pi、DeepSeek TUI、Qwen Code 在做"基础协议与生命周期"重构；Claude Code、OpenAI Codex 在做"上层体验修补"。
- **生态开放度**：OpenCode / Pi / Kimi 倾向开放生态（MCP、扩展、子 Agent 协议）；Claude Code / Copilot 倾向垂直整合。
- **本地化**：Qwen Code（中文项目目录、繁体 i18n）、DeepSeek TUI（750 个 zh-Hant 缺失键）显著领先。

---

## 5. 社区热度与成熟度

### 高活跃 + 高成熟度
- **Gemini CLI**：自动化程度最高，nightly + 75 项依赖升级是工业化标志；同时 P1 Bug（Subagent 误报、Auto Memory 脱敏）显示仍在快速演化。
- **Claude Code**：👍 44 / 评论 38 / 评论 32 等高数值体现用户黏性，但**今日仅 3 PR** 反映 Anthropic 当前投入在更大产品线。

### 高活跃 + 中成熟度
- **Pi**：34 Issue + 18 PR 是当日"开发者驱动"密度最高的项目；`@christianklotz` 一人主导 Session 存储重构是双刃剑。
- **Qwen Code**：唯一在版本 + PR + Web Shell 体验三线同时推进的工具，但 P1 session 丢失（#8400）暴露成熟度短板。

### 高活跃 + 早期阶段
- **OpenCode**：资源泄漏（WAL、临时文件）问题密度极高，说明正从原型走向生产。
- **DeepSeek TUI**：v0.9.4 收口期 + 三大 Runtime API 同日落地，节奏激进。

### 静默风险
- **GitHub Copilot CLI**：0 PR + 13 Issue（多为回归）是**最大警示信号**，特别是 1.0.73 `view` 工具路径回归（#4202）影响所有非交互工作流。
- **Kimi Code CLI**：4 Issue 体量小，Remote Control（#1282）24 👍 显示**高需求低供给**的供需失衡。

---

## 6. 值得关注的趋势信号

### 🔥 信号 1：多 Agent 协作已成"主战场"
8 款工具中 6 款正面对子 Agent 问题（可靠性、权限继承、3rd 方调度）。**"子 Agent 不是 feature，是新的操作系统层"**——Gemini CLI 在做 Subagent 评估基建（#24353 76 个用例），DeepSeek TUI 在做 Fleet 多租户（#5098/5099），Claude Code 在做可视化 Dashboard（#24537）。**开发者参考价值**：评估 AI CLI 时，"子 Agent 编排能力"应优先于"主模型能力"。

### 🔥 信号 2：会话生命周期 = 新的可靠性瓶颈
`#83403`（Desktop 5h 崩溃）、`#71603`（移动端草稿丢失）、`#77010`（Claude Code）、`#8400`（Qwen Code session 静默删除）、`#7164`（并发写入分叉）、`#1425`（大文本卡死）——**会话数据丢失已成最高频 P1 类问题**。**参考价值**：选型时需关注是否提供 session export/import、并发锁、checkpoint 机制。

### 🔥 信号 3：Token 经济学从"省着用"转向"看得见"
OpenAI Codex 4 个相关 Issue（#13733、#2916、#31860、#35259）形成完整链路：Service Tier 缺失 → 上下文截断 → 轮询浪费 → Desktop 状态轮询 19.8%。Claude Code、DeepSeek TUI 也在做 `/dryrun`、statusline 限速数据。**参考价值**：商业项目应优先选择提供 token 可观测性的 CLI（rollout budget units、telemetry）。

### 🔥 信号 4：OpenAI 兼容 API 成事实标准，但边角问题多
Qwen Code（`auth_type=openai`）、OpenAI Codex、DeepSeek TUI、Pi 都在做 OpenAI 兼容。**但** `APIUserAbortError` 误判、duplicate tool call id、非标 finish_reason、Databricks Qwen3 流式异常等问题集中爆发。**参考价值**：接入第三方兼容 API 时，错误分类与重试机制需自建。

### 🔥 信号 5：跨端一致性 vs 终端深度 的张力
WSL2（Copilot #4328）、ConEmu（Qwen #8385）、WezTerm（Pi 簇 #7481-90）、tmux（Copilot #4292）、OneDrive（Codex #35420）——**每个终端/平台组合都可能成为雷区**。**参考价值**：Mac/Linux 优先的团队选择面更广，Windows/WSL2 团队需关注 Copilot CLI、Qwen Code 的修复节奏。

### 🔥 信号 6：Auto Memory 是"下一波 Feature 战"
Gemini CLI 4 个相关 Issue + Kimi Code #1283 + DeepSeek TUI Runtime API /memory，**三周内 Memory 已从"要不要做"进入"怎么做才安全"**阶段。脱敏机制（#26525）、低信号去重（#26522）成为新痛点。**参考价值**：涉及敏感数据上传的工具需先确认 Memory 模块的脱敏策略。

### 🔥 信号 7：ACP（Agent Context Protocol）作为新兴标准浮现
GitHub Copilot CLI（#4335 toolCall.title 暴露高层摘要）、Qwen Code（#8400 ACP 加载失败）都在对接 ACP。**参考价值**：选型时关注 ACP / MCP 双向支持度，这是未来 IDE ↔ Desktop ↔ CLI 互通的钥匙。

---

## 📌 决策建议速查

| 场景 | 优先选择 | 关键理由 |
|------|----------|----------|
| 严肃生产 / 多端同步 | Claude Code + Qwen Code | 跨端一致性投入最大，session 治理最全 |
| 成本敏感 / 大量轮询 | OpenAI

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告
*数据截止 2026-08-03*

---

## 一、热门 Skills 排行（Top 8 PRs）

按社区关注度、Issue 关联数和问题修复影响力排序：

### 1. 🏆 skill-creator 评估循环修复集群（热度最高）
社区当前最核心痛点是 **`run_eval.py` recall=0%** 的连环 bug——多个 PR 同时尝试修复同一问题，反映出技能自举基础设施近乎瘫痪：

- **#1298** [MartinCajiao] — 一站式修复 run_eval 触发检测 + Windows 管道读取 + 并发隔离。状态：OPEN。 [→ 链接](https://github.com/anthropics/skills/pull/1298)
- **#1099** [joshuawowk] — Windows 子进程管道读取崩溃修复。 [→ 链接](https://github.com/anthropics/skills/pull/1099)
- **#1050** [gstreet-ops] — Windows `PATHEXT` + cp1252 编码 1 行修复。 [→ 链接](https://github.com/anthropics/skills/pull/1050)
- **#1323** [Polluelo978] — trigger detection 漏检实际技能名修复。 [→ 链接](https://github.com/anthropics/skills/pull/1323)
- **#1261** [alvingarcia] — 把 eval 临时命令文件隔离出用户项目注册表，避免污染并发会话。 [→ 链接](https://github.com/anthropics/skills/pull/1261)

### 2. 🎨 document-typography skill — 文档排版质量控制
**#514** [PGTBoos] — 解决 AI 生成文档的孤儿词（orphan）、寡段落（widow）、编号错位等排版痛点。覆盖所有 Claude 生成文档场景，潜在受益面广。状态：OPEN。 [→ 链接](https://github.com/anthropics/skills/pull/514)

### 3. 🔍 self-audit skill — 输出质量门控
**#1367** [YuhaoLin2005] — "机械验证 + 四维推理审计"双阶段 AI 输出审计技能，呼应社区 Issue #1385 的 Reasoning Quality Gate Pipeline 提案。状态：OPEN。 [→ 链接](https://github.com/anthropics/skills/pull/1367)

### 4. 🧪 testing-patterns skill — 全栈测试方法论
**#723** [4444J99] — Testing Trophy 模型 + 单元测试 + React 组件测试 + Mock 策略的系统化测试技能。状态：OPEN。 [→ 链接](https://github.com/anthropics/skills/pull/723)

### 5. 🛡️ skill-quality-analyzer + skill-security-analyzer
**#83** [eovidiu] — 元技能（meta-skill），从 5 维度评估 Skills 质量，对应社区最关注的 Issue #492 安全话题。状态：OPEN。 [→ 链接](https://github.com/anthropics/skills/pull/83)

### 6. 📄 ODT skill — OpenDocument 完整支持
**#486** [GitHubNewbie0] — 覆盖 .odt/.ods 创建、模板填充、HTML 转换，填补开源办公格式空白。状态：OPEN。 [→ 链接](https://github.com/anthropics/skills/pull/486)

### 7. 🎨 color-expert skill — 色彩知识专家
**#1302** [meodai] — 覆盖 ISCC-NBS / Munsell / OKLCH / OKLAB 等命名系统与色空间决策表，定位"何时用哪个色空间"专家。状态：OPEN。 [→ 链接](https://github.com/anthropics/skills/pull/1302)

### 8. 📋 plan-file-hygiene skill — 规划工件生命周期管理
**#1479** [Palo-Alto-AI-Research-Lab] — 解决规划类文件累积无清理的问题（Issue #1417）。状态：OPEN（最新提交的 PR）。 [→ 链接](https://github.com/anthropics/skills/pull/1479)

---

## 二、社区需求趋势（从 50 条 Issues 中提炼）

| 趋势方向 | 代表 Issue | 社区共识 |
|---|---|---|
| 🔒 **安全与信任边界** | [#492](https://github.com/anthropics/skills/issues/492)（43 评论，最高热度） | 社区技能冒充 `anthropic/` 命名空间导致权限滥用，亟需官方审核/签名机制 |
| 🤝 **企业级分发与共享** | [#228](https://github.com/anthropics/skills/issues/228)（16 评论） | 组织内 Skill 共享需绕过手动下载上传；[#16](https://github.com/anthropics/skills/issues/16) 提议暴露为 MCP |
| 🪟 **跨平台稳定性** | [#1061](https://github.com/anthropics/skills/issues/1061)、[#556](https://github.com/anthropics/skills/issues/556) | skill-creator 在 Windows 上完全失效（recall=0%），Unix-first 假设阻碍 Windows 开发者 |
| 🧠 **上下文与内存管理** | [#1487](https://github.com/anthropics/skills/issues/1487)（claude-api 一次性注入 156k tokens）、[#1329](https://github.com/anthropics/skills/issues/1329)（compact-memory 提案） | 大技能贪婪注入 + 长会话内存膨胀成为关键瓶颈 |
| 🏢 **企业生态集成** | [#29](https://github.com/anthropics/skills/issues/29)（Bedrock）、[#1175](https://github.com/anthropics/skills/issues/1175)（SharePoint）、[#181](https://github.com/anthropics/skills/pull/181)（SAP-RPT-1-OSS） | Skills 需打通 AWS / Microsoft / SAP 三大企业栈 |
| 🛡️ **质量门控与治理** | [#1385](https://github.com/anthropics/skills/issues/1385)、[#412](https://github.com/anthropics/skills/issues/412) | 推理质量门、Agent Governance 等"自我审计"类元技能需求强烈 |
| 🧹 **生命周期管理** | [#62](https://github.com/anthropics/skills/issues/62)（Skills 莫名消失）、[#189](https://github.com/anthropics/skills/issues/189)（插件重复 Skills） | 安装/卸载/版本管理缺乏明确机制，用户数据丢失频发 |
| 📚 **文档与最佳实践** | [#202](https://github.com/anthropics/skills/issues/202)（skill-creator 应更新为最佳实践） | 官方 skill-creator 仍像开发者文档，违反 Skills 编写指南 |

---

## 三、高潜力待合并 Skills（OPEN 状态，近期落地概率高）

按 PR 新鲜度 + Issue 协同度筛选：

| PR | Skill | 亮点 | 状态 |
|---|---|---|---|
| [#1479](https://github.com/anthropics/skills/pull/1479) | plan-file-hygiene | 直接对应 Issue #1417，提案者已就位 | OPEN（2026-07-25 最新） |
| [#1367](https://github.com/anthropics/skills/pull/1367) | self-audit | 回应 Issue #1385 质量门控愿景，作者已实现 v1.3.0 | OPEN（2026-06-28） |
| [#1302](https://github.com/anthropics/skills/pull/1302) | color-expert | 知识库完备，覆盖 6+ 命名系统 | OPEN（2026-06-10） |
| [#514](https://github.com/anthropics/skills/pull/514) | document-typography | 普适需求，每份 AI 文档都受益 | OPEN（2026-03-04） |
| [#723](https://github.com/anthropics/skills/pull/723) | testing-patterns | 开发者工作流核心技能 | OPEN（2026-03-22） |
| [#83](https://github.com/anthropics/skills/pull/83) | skill-quality-analyzer + skill-security-analyzer | 紧贴 #492 安全热点 | OPEN（2025-11-06 长期挂起） |
| [#486](https://github.com/anthropics/skills/pull/486) | ODT | 填补开源办公格式空白 | OPEN（2026-03-01） |
| [#210](https://github.com/anthropics/skills/pull/210) | frontend-design 改进 | 提升原 Skill 可执行性 | OPEN（2026-01-05） |

---

## 四、Skills 生态洞察（一句话总结）

> **当前社区最集中的诉求是"Skills 生态的基础设施级信任与可治理性"——围绕 `anthropic/` 命名空间的安全审计（#492）、skill-creator 自举闭环的跨平台可靠性（#556/#1061）、以及上下文注入的内存治理（#1487/#1329），三者共同指向一个尚未被官方显式承认的命题：Skills 生态已从"内容创作"阶段进入"平台工程"阶段，亟需官方提供签名机制、CI 质量门、和分页式资源加载等底层契约。**

---

### 📌 附注：观察到的仓库健康度信号

- **仓库 community health 评分仅 25%**（[#509](https://github.com/anthropics/skills/pull/509) CONTRIBUTING.md 提案所述）
- **多 PR 长期 OPEN**：#83 已挂起 9 个月，#210 挂起 7 个月——反映 PR 评审节奏较慢
- **PR 与 Issue 解耦严重**：同一个 run_eval bug 至少催生 5 个 PR + 3 个 Issue，说明官方对 issue→PR 的引导机制较弱

---

# Claude Code 社区动态日报
**日期：2026-08-03**

---

## 📌 今日速览

今日社区以 **Bug 修复与稳定性议题** 为主线，无新版本发布。值得关注的两大热点：一是 Claude Opus 4.8/5 在 `effort: xhigh/max` 模式下导致 `WebSearch` 工具与 `thinking` 配置大面积报 400 错误（#76689、#83364），已影响多个客户端；二是 Desktop / Cowork / Mobile 多端一致性问题集中爆发，涵盖权限丢失、子模块未初始化、5 小时使用上限附近崩溃等，开发者反馈明显增加。

---

## 🚀 版本发布

过去 24 小时无新 Release。

---

## 🔥 社区热点 Issues（Top 10）

| # | 编号 | 标题 | 评论 / 👍 | 关注点 |
|---|------|------|-----------|--------|
| 1 | [#2805](https://github.com/anthropics/claude-code/issues/2805) | Linux 下持续创建 CRLF 行尾文件 | 44 / 33 | 长存超过一年的经典 Bug，纵使用户在 `CLAUDE.md` 中明确指定仍无效，已严重影响脚本可执行性 |
| 2 | [#32870](https://github.com/anthropics/claude-code/issues/32870) | `claude.exe` 在目录列表时触发 Wof.sys 蓝屏 | 38 / 1 | Windows 内核级崩溃，影响系统稳定性，属最严重 P0 级别 |
| 3 | [#40175](https://github.com/anthropics/claude-code/issues/40175) | Cowork 全局指令保存后静默回滚旧版本 | 32 / 20 | 协作模式下全局配置丢失，破坏团队一致性配置 |
| 4 | [#77966](https://github.com/anthropics/claude-code/issues/77966) | Claude 账号 OAuth 循环跳转 — `state` 参数丢失 | 20 / 14 | IntelliJ 与 Linux 上的鉴权死循环，影响登录可用性 |
| 5 | [#24537](https://github.com/anthropics/claude-code/issues/24537) | **Agent Hierarchy Dashboard** — 多 Agent 工作流可视化（TUI + Desktop） | 14 / 17 | 社区呼声最高的可视化增强，反映多 Agent 协作已成主流用法 |
| 6 | [#66504](https://github.com/anthropics/claude-code/issues/66504) | Commit / PR 自动追加 Session URL 应改为 opt-in | 11 / **44** | 👍 数极高，社区强烈反对默认行为引发的隐私与可读性问题 |
| 7 | [#76689](https://github.com/anthropics/claude-code/issues/76689) | Opus 4.8 + `effortLevel: xhigh` 在 VS Code 报 400 | 10 / 11 | VS Code 扩展 2.1.205–2.1.207 版本回归，多名开发者踩坑 |
| 8 | [#82803](https://github.com/anthropics/claude-code/issues/82803) | 模型陷入单 token 重复 ~32k 次的退化循环 | 4 / 0 | **沉默失败**（无错误抛出）直至 `max_tokens`，跨两个模型世代复现，模型层面缺陷 |
| 9 | [#82588](https://github.com/anthropics/claude-code/issues/82588) | `claude-opus-5` 韩文输出混入错误但合法的谚文音节 | 3 / 0 | 非 mojibake，是模型自身 token 化问题，跨语言质量议题 |
| 10 | [#83403](https://github.com/anthropics/claude-code/issues/83403) | Claude Desktop 在 5 小时限额附近崩溃并需重装 | 3 / 0 | 长会话生命周期管理问题，桌面端持久化体验短板 |

**其他值得追踪**：[#80058 macOS Dispatch 禁用](https://github.com/anthropics/claude-code/issues/80058)、[#71603 移动端草稿丢失](https://github.com/anthropics/claude-code/issues/71603)、[#83342 ugrep 内存膨胀至 9–14 GB](https://github.com/anthropics/claude-code/issues/83342)、[#83421 `bypassPermissions` 未传递给子 Agent](https://github.com/anthropics/claude-code/issues/83421)、[#83364 `WebSearch` 在 xhigh effort 下全 400](https://github.com/anthropics/claude-code/issues/83364)。

---

## 🛠 重要 PR 进展（全部 3 条）

| # | 编号 | 内容 | 类型 |
|---|------|------|------|
| 1 | [#83374](https://github.com/anthropics/claude-code/pull/83374) | 补充 `MessageDisplay` Hook 文档与流式字段说明 | 📚 文档 |
| 2 | [#26056](https://github.com/anthropics/claude-code/pull/26056) | 修复 code-review 插件在无 `--comment` 时仍向 GitHub 发帖的行为 | 🐛 行为修复 |
| 3 | [#48343](https://github.com/anthropics/claude-code/pull/48343) | 修复 `skill-reviewer` frontmatter YAML 解析错误 | 🐛 解析修复 |

> 注：PR 总数仅 3 条且均聚焦 **插件 / Hook 生态** 的文档与防御性加固。

---

## 📈 功能需求趋势

从近 24 小时活跃 Issue 中可提炼以下社区关注方向（按热度排序）：

1. **多 Agent 可视化与编排** — `#24537` Dashboard、`#83421` 子 Agent 权限继承、`#83439` 委托/工作流开关，反映多 Agent 已是核心场景。
2. **模型 Effort Level / Thinking 配置稳定性** — `#76689`、`#83364`、`#82803` 集中指向 `xhigh/max` 与 `thinking` 的边界条件。
3. **Plugin / Hook 生态完善** — `#83374` 文档、`#26056`、`#48343` 修复、`#73673` 自动更新失效，开发者正在为插件系统补漏。
4. **状态栏与监控** — `#81940` 要求 statusline JSON 暴露分级限速数据，Fable 5 上线后分化需求显著。
5. **会话与配置可移植性** — `#77010`、`#83411`、`#40175`、`#83439` 共同指向多端会话同步与 worktree 行为差异。
6. **TUI / UX 体验回退** — `#83444` 要求恢复 `Ctrl+R` 全历史搜索，`#83441` 提议斜杠命令可固定排序。
7. **跨平台一致性** — `#2805`、`#32870`、`#48078`、`#83403` 反复出现在 Linux/macOS/Windows 三端。

---

## 💬 开发者关注点与高频痛点

| 痛点 | 代表 Issue |
|------|-----------|
| **默认行为侵入性过强**（隐私/可读性） | [#66504](https://github.com/anthropics/claude-code/issues/66504) |
| **CLI 与 Desktop 行为不一致**（worktree、子模块、OAuth） | [#40175](https://github.com/anthropics/claude-code/issues/40175) · [#83411](https://github.com/anthropics/claude-code/issues/83411) · [#77966](https://github.com/anthropics/claude-code/issues/77966) |
| **资源占用与沉默失败** | [#83342](https://github.com/anthropics/claude-code/issues/83342) · [#82803](https://github.com/anthropics/claude-code/issues/82803) |
| **权限模式不向下传递** | [#83421](https://github.com/anthropics/claude-code/issues/83421) |
| **模型跨语言/小语种质量抖动** | [#82588](https://github.com/anthropics/claude-code/issues/82588) · [#83442](https://github.com/anthropics/claude-code/issues/83442) |
| **长会话生命周期不可靠**（崩溃/草稿丢失） | [#83403](https://github.com/anthropics/claude-code/issues/83403) · [#71603](https://github.com/anthropics/claude-code/issues/71603) · [#77010](https://github.com/anthropics/claude-code/issues/77010) |
| **插件生态缺位与发现性差** | [#73673](https://github.com/anthropics/claude-code/issues/73673) · [#75523](https://github.com/anthropics/claude-code/issues/75523) |
| **错误信息难以诊断** | [#76689](https://github.com/anthropics/claude-code/issues/76689) · [#83364](https://github.com/anthropics/claude-code/issues/83364) · [#82854](https://github.com/anthropics/claude-code/issues/82854) |

**总结**：今日社区情绪集中在 **"多端/多模型一致性" 与 "Agent 协作下的权限与状态可观测性"** 两条主线上。建议重点关注 Opus 5 + `effort` 配置相关的回归问题，以及 Desktop 端会话生命周期的稳定性修复。

---

*数据来源：[anthropics/claude-code](https://github.com/anthropics/claude-code) Issues & Pull Requests · 统计窗口：2026-08-02 → 2026-08-03*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报
**日期：2026-08-03**

---

## 📌 今日速览

过去 24 小时 Codex 仓库无新版本发布，但社区讨论热度不减。**Linux 桌面版需求**仍以 906 个点赞、197 条评论稳居榜首，多个 **Windows 桌面端 Bug**（性能、Diff 崩溃、Browser Use 闪退）以及 **后台轮询浪费 token** 的资源消耗问题持续引发关注。代码层面有 6 个 PR 更新，重点围绕 **rollout 计量、SQLite 元数据保护、远程执行 HTTP 缓冲上限** 等稳定性改进。

---

## 🚀 版本发布

> 过去 24 小时无新 Release。如需查看最新可用版本，请访问 [GitHub Releases 页](https://github.com/openai/codex/releases)。

---

## 🔥 社区热点 Issues

以下按评论数 + 社区反应综合排序，挑选 10 条最值得关注：

### 1. [#11023 Linux 桌面客户端请求](https://github.com/openai/codex/issues/11023) — ⭐906
- **类型**：[ENHANCEMENT] [APP]
- 作者：Suhaibinator · 评论 197 · 👍 906
- **为何重要**：长期未被解决的高票 enhancement，新 macOS Codex App 在作者机器上几乎不可用 (#10432)，作者希望能在 Linux 桌面使用。**点赞数远高于其他 issue**，是社区呼声最高的跨平台诉求。
- **状态**：Open · 最后更新 2026-08-02

### 2. [#35058 Codex Diff 在 VS Code (macOS) 崩溃](https://github.com/openai/codex/issues/35058) — 💬45
- **类型**：[BUG] [EXTENSION]
- 作者：Furgon · 👍 115
- **问题**：每次 Codex 编辑文件后打开 Codex Diff 标签页都显示 "Oops, an error has occurred"，在 Apple Silicon / VS Code 1.128.0 下任何仓库均可复现。
- **状态**：Open · 更新 2026-08-03（热点）

### 3. [#13733 后台进程轮询消耗大量 token](https://github.com/openai/codex/issues/13733) — 💬35
- **类型**：[BUG] [RATE-LIMITS] [TOOL-CALLS] [SESSION]
- 作者：jitlabs-sg · 👍 30
- **问题**：`cargo build`、`cargo test` 等后台任务每次状态查询都触发一次完整 API round-trip，携带完整会话历史，导致 token 消耗与历史长度 × 轮询次数成正比。
- **状态**：Open · 更新 2026-08-03（持续讨论）

### 4. [#19425 自定义 stdio MCP 工具无法在 Desktop 会话中暴露](https://github.com/openai/codex/issues/19425) — 💬27
- **类型**：[BUG] [MCP] [APP] [APP-SERVER]
- 作者：arbenl · 👍 5
- **问题**：Codex Desktop 通过 `/mcp` 能发现自定义 stdio MCP server 的工具，但 `tools/list` 后工具未暴露给 Desktop 线程或 `tool_search`，疑似 Desktop / App Server `0.124.0-alpha.2` 回归问题。

### 5. [#35420 Windows OneDrive 工作区流反复断连](https://github.com/openai/codex/issues/35420) — 💬26
- **类型**：[BUG] [WINDOWS-OS] [CODEX-WEB] [CONNECTIVITY]
- **问题**：在 Windows + OneDrive 降级状态下，ChatGPT Work / Codex stream 反复出现 "stream disconnected before completion"。社区怀疑与 OneDrive 文件锁机制冲突。

### 6. [#2916 OpenAI Service Tier 支持](https://github.com/openai/codex/issues/2916) — 💬21 ⭐54
- **类型**：[ENHANCEMENT] [CONFIG]
- **问题**：Codex CLI 当前无法控制 OpenAI API service tier，限制成本优化空间。建议新增 `service_tier` 配置项。
- **意义**：长期 enhancement（自 2025-08 创建），热度持续，反映用户对**成本可控性**的强烈需求。

### 7. [#23198 Codex Desktop 在 Windows 下运行极慢](https://github.com/openai/codex/issues/23198) — 💬21 ⭐47
- **类型**：[BUG] [WINDOWS-OS] [APP] [PERFORMANCE]
- **问题**：Windows 桌面端日常使用极慢，问题局限于 Codex 应用本身，与机器性能无关。

### 8. [#31860 GPT-5.6 Sol 上下文被限至 372K](https://github.com/openai/codex/issues/31860) — 💬12
- **类型**：[BUG] [CONTEXT] [APP]
- **问题**：Codex App 模型目录将 GPT-5.6 Sol 的上下文上限封顶在 372K（实际可用 353.4K），但模型规格为 1.05M。订阅为 ChatGPT Pro。
- **意义**：直接影响 Pro 用户能使用的上下文长度，属于 **模型能力被截断** 的关键问题。

### 9. [#35259 Desktop 状态轮询反复进入模型](https://github.com/openai/codex/issues/35259) — 💬11
- **类型**：[BUG] [RATE-LIMITS] [TOOL-CALLS] [APP] [SUBAGENT]
- **问题**：在 Ultra 与多 agent 场景下，Codex Desktop 仅等待或轮询状态就会反复进入模型；某次重置后这类"空操作"轮询占本地 token 量的 **19.8%**。
- **意义**：与 #13733 同源，是 token 浪费问题的桌面端体现。

### 10. [#27565 Claude Code 风格的远程控制](https://github.com/openai/codex/issues/27565) — 💬9 ⭐12
- **类型**：[ENHANCEMENT] [CLI] [APP-SERVER] [REMOTE]
- **问题**：希望支持类似 Claude Code 的 `/remote-control`，无需 SSH 隧道即可在手机端同步 CLI 与移动端的消息。
- **意义**：反映出跨设备远程协作正成为新热点需求。

---

## 🛠️ 重要 PR 进展

过去 24 小时内共 6 个 PR 更新，整理如下：

| # | 标题 | 状态 | 重点 |
|---|------|------|------|
| [#36641](https://github.com/openai/codex/pull/36641) | Capture rollout budget units from response usage | **已合入** | 从 Responses API usage 中解析 `codex_rollout_budget_units` 并写入 `TokenUsage`，但**不出现在序列化协议、JSON Schema 与 TS 类型中**——避免对外破坏 API 兼容。 |
| [#36635](https://github.com/openai/codex/pull/36635) | 在登录完成通知中暴露 onboarding 提示 | **已合入** | 仅放行白名单内的 `.onboarding_entrypoint=life_sciences` 后缀，保持 OAuth state 校验严格性。 |
| [#36632](https://github.com/openai/codex/pull/36632) | Preserve SQLite thread metadata during goal mutations | **已合入** | 修复"设置/清除 thread goal 时覆盖 SQLite-only 元数据（含 thread preview）"的 bug，跳过已索引 rollout 的对账。 |
| [#36544](https://github.com/openai/codex/pull/36544) | Support portable Agent Plugins throughout installation | **已合入** | Agent Plugins 改用 schema 声明的 `plugin.json` 根目录、允许带点号的名称/版本，补齐打包与安装链路对旧 manifest 的假设。 |
| [#31817](https://github.com/openai/codex/pull/31817) | Update models.json | **Open** | 自动化 PR，定期刷新 `models.json`。 |
| [#31781](https://github.com/openai/codex/pull/31781) | Bound executor-controlled HTTP response buffering | **Open · code-reviewed** | **安全相关**：远程 exec-server 不可信，原 256 帧背压上限仍可能被恶意对端塞满 JSON-RPC 消息上限，本 PR 进一步收紧响应缓冲。 |

---

## 📈 功能需求趋势

从过去 24 小时高活跃议题中提炼出以下社区关注方向：

1. **跨平台桌面客户端** —— Linux Desktop 是呼声最高的 enhancement（#11023），Windows 桌面端在性能与稳定性方面问题集中爆发。
2. **成本与配额控制** —— Service Tier 支持（#2916）、上下文截断（#31860）、后台轮询浪费 token（#13733 / #35259）形成"成本焦虑"主线。
3. **VS Code 扩展稳定性** —— Codex Diff 崩溃（#35058、#35481）、Max 推理档位缺失（#35763）等持续困扰 IDE 用户。
4. **MCP 集成深化** —— MCP server 在 Desktop / app-server 上的工具暴露不完整（#19425），影响 Agent 能力扩展。
5. **远程协作 / 多端同步** —— Claude Code 式 `/remote-control`（#27565）以及 Remote 会话同步失败（#36244）表明"端云协同"是新的热门方向。
6. **资源与存储治理** —— 单条 rollout JSONL 膨胀至 10.2 GB（#34863）、app-server 启动时全量加载会话（#22411），反映出长期会话数据治理缺口。
7. **Browser Use / Computer Use 稳定性** —— Windows 下关闭 Browser Tab 导致 Codex 闪退（#34239、#35210、#35985），Computer Use 截图接口受限（#25178）。

---

## 💡 开发者关注点

综合评论与上下文，提炼开发者集中反馈的痛点：

- **🔁 Token 隐形消耗**：多个高赞 issue 指出，**轮询 / 状态等待 / 空工具调用** 会触发完整 API turn。在长会话、Ultra / Subagent 场景下成本急剧放大，开发者期望"心跳类操作"不应触发模型。
- **🪟 Windows 平台仍是重灾区**：从 Sandbox、Computer Use、Browser Use 到 Desktop 性能，Windows 下出现的问题数量与种类远超 macOS/Linux，与 #11023 的高需求形成鲜明反差。
- **🧩 配置可观测性不足**：Service Tier、模型上下文上限、会话保留周期、Permissions 热更新（#33114）等都缺少直观配置项，开发者倾向"少改 CLI，多改 config"。
- **📂 长会话存储爆炸**：JSONL 内嵌 base64 PNG + 全量反序列化（#34863 / #22411）让本地存储与启动时间同时失控，缺少滚动 / 索引 / 外置化策略。
- **🔐 远程执行安全边界**：#31781 PR 直接聚焦 exec-server 的 HTTP 响应缓冲上限，说明社区对 **第三方执行通道** 的资源上限有清晰预期。
- **🧪 IDE ↔ Desktop 能力对齐**：VS Code 扩展缺少 Max 推理档位（#35763）、Diff 视图崩溃（#35058），表明 Desktop 与扩展版本之间存在**功能与版本不一致**问题，开发者期待统一。

---

*日报基于 2026-08-03 GitHub Issues / PR 数据生成。链接均指向 `github.com/openai/codex`。*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报
**日期：2026-08-03**

---

## 📌 今日速览

今日发布 nightly 版本 **v0.55.0-nightly.20260803.gf47d6c6f7**，同期社区迎来大量依赖更新（Dependabot 一次性提交 75 项 npm 依赖升级及多项 GitHub Actions 升级）。功能层面，**Subagent 可靠性**、**Auto Memory 系统**、**Browser Agent 健壮性**仍是社区最热门议题，多个 P1 级 Bug 引发集中讨论。

---

## 🚀 版本发布

| 版本 | 类型 | 说明 |
|---|---|---|
| [v0.55.0-nightly.20260803.gf47d6c6f7](https://github.com/google-gemini/gemini-cli/compare/v0.55.0-nightly.20260802.gf47d6c6f7...v0.55.0-nightly.20260803.gf47d6c6f7) | Nightly | 自动化版本号 bump，无功能性变更日志条目 |

---

## 🔥 社区热点 Issues（Top 10）

### 1. [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) — Subagent 在 MAX_TURNS 后错误报告为 GOAL 成功
- **优先级**：P1 | **评论**：12 | **👍**：2
- **重要性**：`codebase_investigator` 子代理在达到最大轮次后仍报 `status: "success"` + `Termination Reason: "GOAL"`，会掩盖任务中断真相。直接破坏用户对子代理执行结果的信任，是评估体系的关键盲点。

### 2. [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) — Generalist Agent 长时间挂起
- **优先级**：P1 | **评论**：8 | **👍**：8
- **重要性**：社区反馈获 8 赞 8 评论（点赞率最高），用户报告简单任务（如创建文件夹）可挂死长达 1 小时，必须显式禁用子代理委派才能绕过。属于 P1 体验阻塞型 Bug。

### 3. [#19873](https://github.com/google-gemini/gemini-cli/issues/19873) — Zero-Dependency OS 沙箱与执行后意图路由
- **优先级**：P2 | **评论**：8 | **👍**：1
- **重要性**：面向 Gemini 3 模型的「原生 Bash 用户」特性，提出零依赖 OS 沙箱方案以兼顾安全性与模型原生能力，是当前最具战略性的功能提案之一。

### 4. [#24353](https://github.com/google-gemini/gemini-cli/issues/24353) — 组件级评估体系 EPIC
- **优先级**：P1 | **评论**：7
- **重要性**：跟踪构建组件级 behavioral eval 体系（已积累 76 个测试用例，覆盖 6 个模型版本），是保障 agent 质量的底层基建。

### 5. [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) — AST 感知的文件读取/搜索/映射评估
- **优先级**：P2 | **评论**：7 | **👍**：1
- **重要性**：探索基于 AST 的工具调用是否能减少误读、降低 token 消耗、提升 `codebase_investigator` 精度，与性能优化直接相关。

### 6. [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) — Gemini 很少主动使用 Skills 与 Sub-agents
- **优先级**：P2 | **评论**：6
- **重要性**：暴露了 agent 能力「存在但不被调用」的问题，影响 Skills/Sub-agents 体系的投资回报，需提示工程层面的修复。

### 7. [#26522](https://github.com/google-gemini/gemini-cli/issues/26522) — Auto Memory 无限重试低信号会话
- **优先级**：P2 | **评论**：5
- **重要性**：Auto Memory 体系核心问题：低信号会话会反复出现在索引中，导致资源浪费和噪音累积。

### 8. [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) — Shell 命令执行完成后卡在「Waiting input」
- **优先级**：P1 | **评论**：4 | **👍**：3
- **重要性**：高点赞率的 P1 Bug，简单 CLI 命令完成后界面仍卡在等待输入状态，严重影响用户工作流。

### 9. [#26525](https://github.com/google-gemini/gemini-cli/issues/26525) — Auto Memory 缺乏确定性脱敏机制
- **优先级**：P2 | **评论**：4
- **重要性**：本地 transcript 上传至模型前缺乏强保证的密钥脱敏，涉及**安全合规风险**，值得安全团队优先关注。

### 10. [#22093](https://github.com/google-gemini/gemini-cli/issues/22093) — v0.33.0 后子代理绕过权限检查
- **优先级**：P2 | **评论**：3
- **重要性**：用户明确禁用 Agents 模式后，子代理仍被启用，绕过权限控制——**权限系统回退**类问题，安全性影响显著。

---

## 🛠️ 重要 PR 进展（Top 10）

> 今日 PR 以依赖更新为主，机器人自动合并了大量依赖升级。值得关注的功能/修复类 PR 如下：

### 1. [PR #28638](https://github.com/google-gemini/gemini-cli/pull/28638) — 版本号 bump 至 v0.55.0-nightly.20260803
- 自动化发布机器人提交，配套今日 nightly 版本。

### 2. [PR #28626](https://github.com/google-gemini/gemini-cli/pull/28626) — npm 依赖组批量更新（75 项）
- 一次性升级 75 个 npm 包，包含 `@modelcontextprotocol/sdk`（1.23.0→1.29.0）等关键依赖。规模 XL 级别，需关注潜在破坏性变更。

### 3. [PR #28631](https://github.com/google-gemini/gemini-cli/pull/28631) — 升级 `@google/genai` 至 2.13.0
- 跨大版本升级（1.x→2.x），意味着 GenAI SDK 的 API 可能有变化，建议关注配套适配。

### 4. [PR #28628](https://github.com/google-gemini/gemini-cli/pull/28628) — 升级 `@a2a-js/sdk` 至 1.0.0（稳定版）
- A2A 协议 SDK 进入 1.0 稳定版，对 agent 间通信能力有正面影响。

### 5. [PR #28634](https://github.com/google-gemini/gemini-cli/pull/28634) — 升级 `chalk` 至 6.0.0
- ⚠️ 包含**破坏性变更**：需 Node.js 22+。需要确认 CI 矩阵是否同步升级。

### 6. [PR #28632](https://github.com/google-gemini/gemini-cli/pull/28632) — 升级 `eslint` 至 10.8.0
- ESLint 跨大版本升级，需关注规则配置兼容性。

### 7. [PR #28526](https://github.com/google-gemini/gemini-cli/pull/28526) — 修复 VSCode 扩展资源泄漏
- 修复 `gemini.diff.accept` 命令与 `onDidChangeWorkspaceFolders` 监听器未正确注册到 `context.subscriptions` 的问题（[#27790](https://github.com/google-gemini/gemini-cli/issues/27790)），避免插件卸载时的资源泄漏。

### 8. [PR #28624](https://github.com/google-gemini/gemini-cli/pull/28624) — 修复布尔 `thought: true` 泄漏为 `[Thought: true]` 文本
- 修复 [#23525](https://github.com/google-gemini/gemini-cli/issues/23525)，改善 agent 思考过程在前端的展示体验。

### 9. [PR #28535](https://github.com/google-gemini/gemini-cli/pull/28535) — 性能测试改用 `resolveRipgrepPath`
- 适配 ripgrep 解析器 API 变更，恢复性能测试套件的可用性。

### 10. [PR #28534](https://github.com/google-gemini/gemini-cli/pull/28534) — CI: 重试 npm dist-tag 移除
- 修复 nightly 发布流程中 `@google/gemini-cli-core` 大包发布后 `staging-tmp` dist-tag 不可立即查询导致 CI 失败的问题（[#28533](https://github.com/google-gemini/gemini-cli/pull/28533) 失败后修复），提升发布流水线稳定性。

> 备注：[PR #27070](https://github.com/google-gemini/gemini-cli/pull/27070) Virtual List 性能优化（XL 大型 PR）已标记为 Stale 状态，需关注是否会进入下一波收尾冲刺。

---

## 📈 功能需求趋势

从过去 24 小时更新的 50 个 Issue 中提炼出以下社区焦点：

| 趋势方向 | 代表性 Issue | 热度 |
|---|---|---|
| **Subagent/Agent 可靠性** | #22323, #21409, #21968, #22093, #21983, #22186 | ⭐⭐⭐⭐⭐ |
| **Auto Memory 系统健壮性** | #26522, #26523, #26525, #26516 | ⭐⭐⭐⭐ |
| **Browser Agent 鲁棒性** | #22232, #22267, #21983 | ⭐⭐⭐ |
| **AST 感知工具链 / 评估基建** | #22745, #22746, #24353, #21000 | ⭐⭐⭐ |
| **OS 沙箱与安全模型** | #19873, #26525, #22672 | ⭐⭐⭐ |
| **性能/终端渲染** | #21924, #24935, #25166 | ⭐⭐ |
| **工具调用与扩展性** | #24246（>400 工具报错）、#23571（乱写 tmp 脚本） | ⭐⭐ |

---

## 💬 开发者关注点与痛点

1. **Subagent 行为不可靠** —— 多个高赞 Issue 集中反映：子代理会**挂起**、**误报成功**、**绕过权限**。#22323（错误标记 GOAL 成功）和 #21409（挂死 1 小时）是最迫切的稳定性缺陷。
2. **Auto Memory 体系是新的 Bug 集中地** —— 4 个相关 Issue（#26522/26523/26525/26516）来自同一作者（SandyTao520），说明该功能在 5 月上线后尚未充分打磨，**脱敏安全性**与**会话去重**是两大硬伤。
3. **Shell 与终端交互不可控** —— 命令完成却卡在「Waiting input」(#25166)、模型在随机位置生成 tmp 脚本 (#23571)、外部编辑器退出后 terminal 损坏 (#24935)——都是影响日常使用的高频痛点。
4. **权限/安全边界漂移** —— v0.33.0 后子代理被自动启用 (#22093)、Auto Memory 上传前未做强脱敏 (#26525)，反映**新功能上线时权限模型未同步收紧**。
5. **能力调用率不足** —— 自定义 Skills 和 Sub-agents 即使存在也几乎不被主动使用 (#21968)，提示工程层面需要让模型「愿意调用」，否则生态投入难以兑现。
6. **工具规模可扩展性** —— >400 工具触发 400 错误 (#24246)，随着 MCP 生态接入，工具数量爆炸即将到来，需要在客户端做智能筛选。
7. **评估基建投入加大** —— EPIC #24353 已积累 76 个 behavioral eval，#22745/22746 探索 AST-aware 工具，反映团队正系统化建设离线评估能力。

---

> 📅 *本日报基于 2026-08-03 GitHub 数据自动生成。覆盖范围：1 个新版本、50 条更新 Issue、50 条更新 PR。*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报
**日期：2026-08-03**

---

## 📌 今日速览

今日社区动态以 **Bug 报告和回归问题** 为主旋律，特别是 **1.0.73 版本引入的内置 `view` 工具"路径不存在"误报** 持续引发关注（Issue #4202），多名开发者反馈从 1.0.71 升级后出现路径解析异常。同时，多个与 **会话状态恢复（autopilot、stash、session switching）** 和 **跨平台兼容性（WSL2、tmux、Windows 终端）** 相关的新 Issue 集中浮现，提示近期版本在这些交互细节上存在较多回归。

---

## 🚀 版本发布

无新版本发布。

---

## 🔥 社区热点 Issues（Top 10）

| # | 标题 | 状态 | 为什么重要 |
|---|------|------|----------|
| [#4202](https://github.com/github/copilot-cli/issues/4202) | 内置 `view` 工具对已存在文件误报 "Path does not exist"（1.0.73 回归） | OPEN | **高优先级回归 bug**。从 1.0.72 开始出现，1.0.73 仍未修复，影响所有依赖内置 `view` 工具的非交互工作流。已确认 1.0.71 无此问题。3 条评论表明社区在积极复现和定位。 |
| [#4337](https://github.com/github/copilot-cli/issues/4337) | `gpt-5.6-luna` 在 `/models` 中列出但 `/chat/completions` 不可用 | OPEN | **API 一致性问题**，直接影响依赖 OpenAI 兼容接口的第三方工具链（如 MoA/aggregator）。揭示了 Copilot Models API 在新旧端点之间的模型可用性不一致。 |
| [#4329](https://github.com/github/copilot-cli/issues/4329) | 恢复已启用 autopilot 的会话时 autopilot 实际未生效 | OPEN | **安全/可用性双重问题**。状态栏显示已开启但实际未启用，所有需审批的操作将失败。`area:permissions` 与 `area:sessions` 交叉，影响核心交互模式。 |
| [#4336](https://github.com/github/copilot-cli/issues/4336) | 取消的用户输入仍作为有效回合被发送给 agent（autopilot 模式） | OPEN | **语义层面的 bug**：用户主动取消的输入被混入后续消息并以原始时间戳执行，破坏 agent 对"用户意图"的可靠判定。 |
| [#4334](https://github.com/github/copilot-cli/issues/4334) | `Ctrl+S` stash 的提示在切换会话后丢失，pop 恢复为空 | OPEN | **会话状态丢失** 影响日常多任务使用体验，已在 1.0.x 中报告。 |
| [#4328](https://github.com/github/copilot-cli/issues/4328) | WSL2 下 `Ctrl+H` 因 `WT_SESSION` 泄漏被误识别为 `Ctrl+Backspace` | OPEN | **跨平台键盘处理 bug**。`/help` 文档与实际行为不一致，WSL2 用户极易触发，需要明确环境检测或终端降级策略。 |
| [#4292](https://github.com/github/copilot-cli/issues/4292) | tmux 内 Copilot CLI 浅色主题色彩完全错乱 | OPEN | **主题渲染 bug**。脱离 tmux 后正常，疑似终端能力（truecolor/256color）协商问题，对长期使用 tmux 的开发者是高频痛点。 |
| [#4335](https://github.com/github/copilot-cli/issues/4335) | ACP 模式下 `toolCall.title` 暴露高层摘要而非可执行命令 | OPEN | **Agent Context Protocol 兼容性问题**。连接 Zed 等宿主编辑器时，审批弹窗看不到真实 shell 命令，削弱用户对工具调用的可控性与审计能力。 |
| [#4332](https://github.com/github/copilot-cli/issues/4332) | 提供关闭"Memory is disabled"会话提示的方法 | OPEN | **可配置性诉求**。明确指出 `showTipsOnStartup` 等现有开关无法覆盖该通知，开发者希望按使用场景精细控制信息密度。 |
| [#2286](https://github.com/github/copilot-cli/issues/2286) | Windows 平台插件安装支持 git symlink（`core.symlinks=false`） | OPEN | **跨平台安装一致性** 长期未解决的特性请求。Git for Windows 默认禁用 symlink，需在 `copilot plugin install` 流程中显式解析文本存根。 |

---

## 🛠 重要 PR 进展

过去 24 小时无 PR 更新。

---

## 📈 功能需求趋势

从过去 24 小时社区动态可归纳出以下几个最受关注的方向：

1. **🪟 跨平台一致性（Windows / WSL2 / tmux）**
   - WSL2 键盘处理（#4328）、Windows 插件 symlink（#2286）、tmux 主题渲染（#4292）三项并现，说明 Copilot CLI 在 **跨终端/跨平台体验** 仍是高频痛点。

2. **🤖 新模型可用性与 API 兼容性**
   - `gpt-5.6-luna` 出现在 `/models` 但无法经 `/chat/completions` 调用（#4337），反映出社区对 **最新模型 + OpenAI 兼容端点** 的双重要求。

3. **🧠 会话状态与会话管理**
   - 集中在 autopilot 持久化（#4329）、stash/恢复（#4334）、取消输入语义（#4336）三点，提示 **会话连续性 / 状态机** 是当前产品化短板。

4. **🧩 ACP（Agent Context Protocol）集成质量**
   - toolCall.title 暴露高层摘要问题（#4335）暴露 ACP 模式下 **安全可观测性** 的改进空间。

5. **⚙️ 信息密度与可配置性**
   - "Memory is disabled" 提示关闭需求（#4332）反映用户对 **噪音控制 / 个性化设置** 的诉求。

---

## 💬 开发者关注点

通过今日的 Issue 反馈可以梳理出开发者社区的几个核心痛点：

- **回归质量**：1.0.72 → 1.0.73 引入的 `view` 工具路径解析回归（#4202）让升级变成"踩雷"，开发者更倾向锁版本。
- **状态栏与实际行为不一致**：#4329 揭示了 UI 显示与底层启用状态的脱节，破坏信任。
- **终端环境差异**：WSL2 + Windows Terminal + tmux 这类组合是大量开发者的日常环境，但 CLI 在键盘、主题、symlink 等细节上频繁"水土不服"。
- **取消/恢复语义薄弱**：#4336 和 #4334 都指向"我以为我取消/暂存了，但 agent 没认账"，这是 AI CLI 中非常影响生产效率的体验缺陷。
- **API 表层一致性**：`/models` 与 `/chat/completions` 行为不一致（#4337）让依赖 API 的生态工具出现 silent failure，开发者呼吁更明确的模型可用性矩阵。
- **配置粒度不够**：单条提示无法关闭（#4332）这种"小需求"反映出 CLI 缺乏细粒度的 user-facing 设置层。

---

*本日报基于 2026-08-03 过去 24 小时内的 GitHub Issues 数据生成，共追踪 13 条更新 Issue、0 条 PR、0 个新版本。*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报

**日期：2026-08-03** | **数据来源：github.com/MoonshotAI/kimi-cli**

---

## 📌 今日速览

今日社区活跃度集中在 **功能请求** 与 **新工具提案** 两条主线：一方面，开发者对**会话连续性**（记忆系统 #1283）和**跨设备工作流**（远程控制 #1282）呼声不减，前者仍处于社区讨论阶段，后者已获 24 个 👍 高票；另一方面，针对**生产稳定性**的痛点反馈集中爆发，#2578 揭示了 Swarm 并行批处理在 403/超时场景下的工作丢失问题，#2579 则提出用文件系统事件唤醒交互会话的外部触发通道构想。此外，一个新增的 `Monitor` 工具提案 PR #2471 已关闭（未合并），其按行流式输出能力仍值得持续跟踪。

---

## 🚀 版本发布

**今日无新版本发布。** 过去 24 小时内仓库未发布任何 Release tag，建议关注官方 changelog 或下周的版本节点。

---

## 🔥 社区热点 Issues

> 说明：过去 24 小时仅有 4 个 Issue 有更新（无大量历史 Issue 数据可比较），以下按**关注度**与**问题重要性**综合排序。

### 1. [#1283](https://github.com/MoonshotAI/kimi-cli/issues/1283) Memory System - 跨会话持久化上下文
- **作者**：CatKang | **状态**：OPEN | **更新**：2026-08-02
- **关注度**：💬 14 评论 | 👍 0
- **为什么重要**：这是社区长期讨论的核心需求之一。用户希望 Kimi Code CLI 能记住跨会话的有用上下文、项目模式与用户偏好，涵盖 AI 自主管理的自动记忆与用户手动定义的指令两条路径。该功能直接关系到 CLI 的**长期可用性与个性化体验**，是塑造"AI 协作者"心智模型的关键能力。
- **社区反应**：讨论热度较高（14 条评论），但点赞数为 0，可能因功能范围较大、共识尚未形成，仍在需求梳理阶段。

### 2. [#1282](https://github.com/MoonshotAI/kimi-cli/issues/1282) Remote Control - 跨设备继续本地会话
- **作者**：CatKang | **状态**：OPEN | **更新**：2026-08-02
- **关注度**：💬 11 评论 | 👍 **24**（本批次最高）
- **为什么重要**：允许用户在离开桌面后，通过手机/平板/任意浏览器**继续本地 Kimi Code CLI 会话**，保留完整本地环境。该 Feature 完美契合远程办公与移动办公场景，对付费用户/重度使用者极具吸引力。**24 个 👍 是本批 Issue 中最高的社区认可信号**，说明这是被强烈呼吁的"明星需求"。
- **社区反应**：高赞同、低争议，11 条评论中多为场景补充与实现细节讨论。安全模型与认证机制是潜在关注点。

### 3. [#2579](https://github.com/MoonshotAI/kimi-cli/issues/2579) 外部唤醒通道：让外部 Agent 触发交互会话
- **作者**：munich35 | **状态**：OPEN | **更新**：2026-08-02
- **关注度**：💬 0 评论 | 👍 0
- **为什么重要**：提出了一个**非常规但极具想象力的场景** —— 用户本地运行一个"代理邮箱"系统，其他 Agent（通过 SSH 在同机或异机）将 Markdown 消息投递到收件箱目录，使用 `inotifywait` 等文件监听机制**唤醒** Kimi Code CLI 交互会话。这代表了一种新的**多 Agent 协作范式**：CLI 作为响应式终端，被动接收外部指令。
- **社区反应**：新提 Issue，暂无互动；但其描述清晰、用例具体，技术可行性较高，值得维护者关注。

### 4. [#2578](https://github.com/MoonshotAI/kimi-cli/issues/2578) [Swarm] 批处理中途 403/超时导致工作丢失
- **作者**：myagizmaktav | **状态**：OPEN | **更新**：2026-08-02
- **关注度**：💬 0 评论 | 👍 0
- **为什么重要**：暴露了 **Swarm 并行子代理的可靠性缺陷**。当遇到配额错误（HTTP 403 "usage limit"）或固定子代理超时时，受影响的子代理会留下**半成品工作区**（路由文件、样式、服务端函数等中间状态），恢复时既会**重复消耗 token**，又会以**破损的中间树状态**阻塞其他子代理。这是生产环境中的**真实经济损失**与**协作链路断裂**问题。
- **社区反应**：新提 Issue 但描述详尽，复现路径清晰；建议维护者优先评估 checkpoint/快照机制与 403 优雅降级策略。

---

## 🛠️ 重要 PR 进展

> 过去 24 小时仅 1 个 PR 有更新，按重要性列出。

### [#2471](https://github.com/MoonshotAI/kimi-cli/pull/2471) `feat(tools): add Monitor tool for per-line stdout streaming`
- **作者**：Nitjsefnie | **状态**：🔴 **CLOSED**（未合并）
- **创建**：2026-06-22 | **更新**：2026-08-02
- **功能概述**：新增 `Monitor` 工具，作为现有后台任务工具的**流式对照实现**。核心能力是**逐行（per-line）**流式输出 stdout，而非一次性返回完整 buffer。这对**长时间运行的命令**（构建、测试、容器日志、watch 脚本）极为关键 —— 用户可以实时观察输出、及时干预，而非等命令结束才看到结果。
- **未合并原因**：可能是设计评审未通过、维护者倾向于不同方案、或作者主动关闭。该功能方向（实时监控）与 #2578（批处理稳定性）形成呼应，建议持续关注后续是否以新 PR 形式重生或合并进其他工具链。

---

## 📈 功能需求趋势分析

综合本批 4 个 Issue 与近期社区讨论，可归纳出 **五大功能方向**：

| 趋势方向 | 代表 Issue | 社区信号 |
|---------|-----------|---------|
| 🧠 **会话持久化与记忆** | #1283 | 14 条评论，长期高热度 |
| 📱 **跨设备/远程工作流** | #1282 | 24 👍，明星需求 |
| 🔗 **多 Agent 协作与外部触发** | #2579 | 新颖范式，脑洞方向 |
| 🛡️ **Swarm 可靠性与弹性** | #2578 | 生产痛点，经济损失类 |
| 📡 **流式输出与实时监控** | PR #2471 | 长任务体验关键 |

**核心洞察**：
- **"会话连续性"** 是横跨 #1283 与 #1282 的主线需求 —— 用户既希望记忆能跨会话保留，也希望工作流能跨设备延续。两者结合可形成"无缝接力"的完整体验。
- **"生产可靠性"** 正在成为 Swarm 用户的新焦点。#2578 中提到的 token 浪费与树破损问题若不解决，会限制 Swarm 在严肃生产场景中的应用。
- **"被动响应式 CLI"** (#2579) 与 **"流式主动监控"** (#2471) 代表了**输入侧与输出侧**的两条增强路径，互补性强。

---

## 💡 开发者关注点与痛点

通过梳理今日 Issue 与 PR，可以总结出开发者**最迫切的诉求**与**反复出现的痛点**：

1. **🔁 工作流连续性的缺失** — 离开桌面会断线、关闭终端会丢上下文。开发者迫切需要"云端会话存档 + 远程恢复"能力（呼应 #1283、#1282）。

2. **💸 Swarm 模式下的经济损失** — 配额错误导致半成品丢失 + 重复 token 消耗 = **双重浪费**。开发者要求更稳健的 checkpoint 与重试机制（#2578）。

3. **⏱️ 长任务的反馈延迟** — 后台命令必须等待结束才能看到输出，丧失实时干预机会。需要流式 stdout（PR #2471 方向）。

4. **🤖 多 Agent 协作的接口缺失** — 当前 Kimi Code CLI 主要作为"主动发起者"，缺乏被外部 Agent 唤醒、调度、通知的标准化通道（#2579）。

5. **🔐 安全模型的隐忧** — #1282 的远程控制功能隐含认证与端到端加密需求，虽然社区尚未在评论中集中爆发，但属于实现前必须前置设计的环节。

6. **🧩 生态互操作性** — 开发者希望 Kimi Code CLI 能与现有本地工具链（inotify、文件系统、SSH、其他 Agent）松耦合协作，而非封闭的孤岛。

---

**📊 数据小结**
- 今日 Issue 更新：**4 条**（均为 Feature Request / 痛点反馈类）
- 今日 PR 更新：**1 条**（已关闭，未合并）
- 最高 👍 Issue：#1282（24 👍）
- 最高评论 Issue：#1283（14 评论）

> 📝 *日报基于过去 24 小时的 GitHub 公开数据自动生成，仅反映该时间窗内的社区动态。*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报
**日期：2026-08-03**

---

## 📌 今日速览

今日 OpenCode 仓库无新版本发布，但 Issue 与 PR 活跃度依旧高涨。社区讨论焦点集中在 **内存与磁盘资源管理**（SQLite WAL 失控、临时文件泄漏）、**DeepSeek V4 等新模型接入**问题，以及 **桌面端/TUI 稳定性**。值得关注的是，高呼声特性 Speech-to-Text 语音输入（170 👍）今日正式关闭，多项桌面端崩溃与卡死问题（Windows 启动卡住、Mobile 控件重叠）正在集中修复。

---

## 🚀 版本发布

今日无新版本发布。

---

## 🔥 社区热点 Issues

| # | Issue | 状态 | 关注度 | 要点 |
|---|-------|------|--------|------|
| 1 | [#20695 Memory Megathread](https://github.com/anomalyco/opencode/issues/20695) | OPEN | 💬121 👍94 | 官方集中追踪内存问题的"集散地"，要求社区提供 heap 快照以辅助诊断，仍是最热长期议题。 |
| 2 | [#4695 Speech-to-Text Voice Input](https://github.com/anomalyco/opencode/issues/4695) | **CLOSED** | 💬36 👍170 | 呼声最高的特性之一（170 👍），尽管今日关闭，已促成 STT 路线推进。 |
| 3 | [#39845 DeepSeek V4 Flash China opt-in](https://github.com/anomalyco/opencode/issues/39845) | OPEN | 💬11 👍18 | Go 订阅用户中途突然被要求启用"中国托管"选项，疑似策略变更。 |
| 4 | [#39861 Removal of zero-data-retention policy](https://github.com/anomalyco/opencode/issues/39861) | OPEN | 💬8 👍15 | 社区对 OpenCode Go 文档中"零留存策略"被移除表示关切。 |
| 5 | [#23595 system-reminder 漂移导致 llama.cpp 缓存失效](https://github.com/anomalyco/opencode/issues/23595) | OPEN | 💬7 👍11 | `<system-reminder>` 位置变动打乱 prompt 历史，影响本地推理性能。 |
| 6 | [#28089 临时 .so 文件泄漏累积数百 GB](https://github.com/anomalyco/opencode/issues/28089) | OPEN | 💬7 👍7 | 严重资源泄漏，CentOS 7 上 `/tmp` 长期堆积未清理的 ELF 共享库。 |
| 7 | [#37239 service v2 重启陷入静默重试循环](https://github.com/anomalyco/opencode/issues/37239) | OPEN | 💬5 👍0 | `opencode2 service restart` 触发后 `serve --service` 反复失败约 16 次。 |
| 8 | [#38222 Windows Desktop 1.18.4 启动卡死](https://github.com/anomalyco/opencode/issues/38222) | OPEN | 💬6 👍0 | Windows 11 Scoop 安装后桌面端首启无限加载，CLI 正常。 |
| 9 | [#33775 切换 provider 反复要求 API key](https://github.com/anomalyco/opencode/issues/33775) | OPEN | 💬6 👍0 | 即便 auth.json 已有凭据，`/connect` 仍强制重新输入 API key。 |
| 10 | [#40186 TUI 崩溃: undefined is not an object](https://github.com/anomalyco/opencode/issues/40186) | OPEN | 💬2 👍0 | 新近报告的 TUI 运行时 TypeError，疑似 TUI 渲染层问题。 |

**其他值得关注的活跃议题：**
- [#39876 libopentui 临时副本吞噬 207 GiB](https://github.com/anomalyco/opencode/issues/39876) — macOS `$TMPDIR` 堆积约 5.9 万份 dylib。
- [#37495 SQLite WAL 无上限增长 10–15 GB](https://github.com/anomalyco/opencode/issues/37495) — 桌面端多连接持有长读事务，WAL 无法 checkpoint。
- [#37821 SQLite 损坏导致启动崩溃](https://github.com/anomalyco/opencode/issues/37821) — 异常掉电/磁盘故障后无法恢复。
- [#40183 Copilot 每会话重新鉴权](https://github.com/anomalyco/opencode/issues/40183) — `expires:0`、refresh 与 access 相同。
- [#40204 Mobile 提交按钮遮挡模型变体](https://github.com/anomalyco/opencode/issues/40204) — Android WebView 窄屏 UI 缺陷。

---

## 🛠 重要 PR 进展

| # | PR | 状态 | 亮点 |
|---|----|------|------|
| 1 | [#39994 feat: OPENCODE_AIRGAP](https://github.com/anomalyco/opencode/pull/39994) | CLOSED | 新增 `OPENCODE_AIRGAP=1` 开关以彻底禁用自动外网访问，适配内网/隔离环境部署。 |
| 2 | [#40202 fix: 项目选择框支持搜索全部已存项目](https://github.com/anomalyco/opencode/pull/40202) | OPEN | 修复项目列表前缀冲突，搜索范围从最近 5 个扩展到全部已知项目。 |
| 3 | [#40188 feat: 请求级 chat.model 插件钩子](https://github.com/anomalyco/opencode/pull/40188) | OPEN | 在 provider/model/auth 解析前允许插件按请求替换模型，对 A/B 路由/灰度极有价值。 |
| 4 | [#40199 fix: 处理 OpenAI OAuth 被移除的竞态](https://github.com/anomalyco/opencode/pull/40199) | OPEN | 修复"会话中途 OAuth 凭据被替换"导致 Codex 请求被错误改写的 race。 |
| 5 | [#40197 fix: 消除持久化写入放大](https://github.com/anomalyco/opencode/pull/40197) | OPEN | 桌面文档与内容寻址 blob 转入 SQLite WAL，IndexedDB 端保持兼容，配 500ms checkpoint。 |
| 6 | [#40198 fix: Patch 中匹配 Unicode 规范等价字符](https://github.com/anomalyco/opencode/pull/40198) | OPEN | `seekSequence()` 增加 NFC/NFD 等价回退，解决非 NFC 源文件验证失败。 |
| 7 | [#40163 fix: TUI 输入框 Down 箭头可达末尾](https://github.com/anomalyco/opencode/pull/40163) | OPEN | 修复 `cursorOffset` 视列与 `\n`/`\t` 折算差异导致的导航错误。 |
| 8 | [#40125 feat: 每 MCP 服务器独立信任配置](https://github.com/anomalyco/opencode/pull/40125) | OPEN | 关闭 #40111 等 5 个相关 issue，引入 per-server trust 粒度。 |
| 9 | [#40184 feat: Teach 教学模式（WIP）](https://github.com/anomalyco/opencode/pull/40184) | CLOSED | 教学场景的新模式提案（草案），仅含测试文件、待讨论实现。 |
| 10 | [#38200 feat: Solidity 文件高亮支持](https://github.com/anomalyco/opencode/pull/38200) | OPEN | 新增 Solidity 语法高亮，面向 Web3/智能合约开发者。 |

**已合并/关闭的清理类 PR（节选）：**
- [#35008 CLI Esc 中断后排空队列](https://github.com/anomalyco/opencode/pull/35008)
- [#34977 队列中断迭代时避免 resolver 泄漏](https://github.com/anomalyco/opencode/pull/34977)
- [#34976 无 description 的 skill 仍应展示](https://github.com/anomalyco/opencode/pull/34976)
- [#34975 预中止 AbortSignal 监听器泄漏](https://github.com/anomalyco/opencode/pull/34975)
- [#34974 Worker 异常时拒绝悬挂的 RPC](https://github.com/anomalyco/opencode/pull/34974)

---

## 📈 功能需求趋势

1. **语音/多模态输入** — STT 以 170 👍 居首，社区对"懒人输入"场景呼声极高。
2. **新模型与国产化支持** — DeepSeek V4 Flash、GPT-5.6 Luna/Terra、华为盘古类模型相关 issue 显著增多。
3. **本地推理体验** — llama.cpp、缓存命中、`<system-reminder>` 位置稳定性成为本地 LLM 用户核心痛点。
4. **企业/合规能力** — 零留存策略、Airgap 部署、计费与订阅透明度是付费用户主要诉求。
5. **子代理与教学能力** — 子代理中途可中断/引导、Teach 模式等"长流程可控"特性受关注。
6. **MCP 生态治理** — per-server trust、协议兼容性、安全审计成为新热点。
7. **桌面/Web 跨端体验** — 移动端 UI、macOS/Win 菜单冲突、首启 onboarding 流畅度亟需打磨。

---

## 🧑‍💻 开发者关注点

- **稳定性与资源管理**：临时文件泄漏、SQLite WAL 失控、并发 VS Code 实例崩溃等是开发者最频繁反馈的"生产环境"痛点，直接影响可用性。
- **桌面端/CLI 体验割裂**：CLI 正常但 Desktop 异常（启动卡住、Cmd+W 误关窗、tab.close 冲突）反映出 Electron 主进程与渲染层职责不清。
- **鉴权与多 Provider 切换**：`/connect` 反复索要 API key、Copilot 反复重认证、付费未到账等问题暴露出凭据生命周期与 UI 状态同步的不足。
- **可观测性与诊断**：Memory Megathread 主动收集 heap 快照，开发者期待更友好的内置诊断/上报通道。
- **国际化与文档**：DeepSeek 文档 URL 错误、德语翻译缺失等被快速报修，说明社区对多语言支持有持续投入意愿。
- **安全与合规**：STT/OAuth 移除竞态、用户 CSS 注入绕过更新等被提为"CRITICAL SECURITY"，开发者对供应链与权限最小化的敏感度持续提升。

---

*本日报基于 GitHub Issues / Pull Requests 公开数据整理。如需关注具体进展，建议直接订阅对应 issue 的通知。*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi 社区动态日报 · 2026-08-03

## 📌 今日速览

今天 Pi 仓库没有新版本发布，但社区活动依旧活跃。过去 24 小时共更新了 **34 个 Issue** 和 **18 个 PR**，呈现出三条主线：**自动压缩(Compaction)机制的稳定性问题持续发酵**（涉及 #6879、#7020、#7498）、**网络超时与登录冻结的连锁 bug**（#7113、#7505、#7504），以及 **WezTerm 终端渲染相关问题的集中爆发**（#7481、#7486、#7490）。`@christianklotz` 主导的 Session 存储重构仍在稳步推进，多个 PR 已合入主线。

---

## 🚀 版本发布

无新版本发布。

---

## 🔥 社区热点 Issues

| # | Issue | 重要性说明 |
|---|-------|----------|
| [#6879](https://github.com/badlogic/pi-mono/issues/6879) | **[bug] auto-compaction 在 context 超过 100% 后未触发，直至 provider overflow** (10 评论, 👍10) | 本周关注度最高的 bug。`@alexanderkreidich` 反馈在 GPT-5.6 上单轮运行 2 小时，context 越过压缩阈值仍未触发，直到 API 在 373k tokens 处拒绝请求。已成为 compaction 系列问题的"母问题"，多个 PR 在尝试修复。 |
| [#7020](https://github.com/badlogic/pi-mono/issues/7020) | **[bug, inprogress] 压缩后 Pi 有时无法继续** (7 评论) | 长期运行的"协调型" session 更易触发。压缩后 agent 不继续执行——是 compaction 问题的另一面，与 #6879 互补。当前标记为 `inprogress`。 |
| [#7062](https://github.com/badlogic/pi-mono/issues/7062) | **fix(openai-completions): 处理数组 content 和缺失 finish_reason** (6 评论) | 影响 Databricks 上的 Qwen3、gpt-oss 推理模型等非标准流式响应，属于协议兼容性问题，影响多个 provider。 |
| [#7113](https://github.com/badlogic/pi-mono/issues/7113) | **TUI 在 `/login` 后 pi.dev 模型目录不可达时冻结** (4 评论) | `ModelRuntime.login()` 缺少 `AbortSignal` 与 timeout，导致登录后整个 TUI 挂死。与 #7505、#7504 同属"无超时连锁问题"集群。 |
| [#7315](https://github.com/badlogic/pi-mono/issues/7315) | **[CLOSED] Fireworks 请求偶发"Request timed out"** (4 评论) | 已关闭。Node 的 250ms 地址族超时在高延迟路由上会误杀合法 Fireworks 连接。`@muyiyr` 在 PR #7435 中通过将超时提升至 2s 修复。 |
| [#7486](https://github.com/badlogic/pi-mono/issues/7486) | **[CLOSED] WezTerm 开启硬件光标时光标跳动** (3 评论) | `PI_HARDWARE_CURSOR=1`（为修复 #5200）带来新副作用，"Working..." 期间硬件光标跳跃。 |
| [#7323](https://github.com/badlogic/pi-mono/issues/7323) | **[CLOSED] `pi update --models` 在目录瞬时阻塞时整体失败** (3 评论) | 已关闭。缺乏重试机制，单次 HTTPS 阻塞即终止整个刷新流程。 |
| [#7413](https://github.com/badlogic/pi-mono/issues/7413) | **[CLOSED] GitHub Copilot GHE.com 企业账户压缩失败** (3 评论) | `/compact` 在 GHE.com 账户上报 `unknown stamp "prod-cus-01"`，普通聊天正常——典型的认证边界 case。 |
| [#7497](https://github.com/badlogic/pi-mono/issues/7497) | **[CLOSED] Session 发现静默忽略全局目录下的符号链接** (2 评论) | `listSessions()` 在 `~/.pi/agent/sessions/` 下不读取 symlinked 子目录，导致 pi-web 等工具看不到对应 session。 |
| [#7490](https://github.com/badlogic/pi-mono/issues/7490) | **[CLOSED] WezTerm 输入中文时 IME 候选窗闪烁/鬼影** (2 评论) | 同一终端下 codex CLI 正常，仅 pi agent 出问题，定位为 TUI 渲染层的特定回归。 |

---

## 🛠️ 重要 PR 进展

| # | PR | 内容说明 |
|---|-----|---------|
| [#7503](https://github.com/badlogic/pi-mono/pull/7503) | **feat(agent): 实验性内存 session** (christianklotz) | 新增 `Session`/`SessionStorage`/`SessionRepository` 契约与内存后端，通过 `@earendil-works/pi-agent-core/experimental` 暴露。Session 存储重构的关键拼图。 |
| [#7498](https://github.com/badlogic/pi-mono/pull/7498) | **fix(coding-agent): 延迟空闲压缩至下一轮 prompt** (ogulcancelik) | 解决 GPT 模型在 context window 边界附近频繁触发不必要压缩的"奇怪边缘 case"。作者明确标注与 #6879 相关，是该系列修复的有力候选。 |
| [#7480](https://github.com/badlogic/pi-mono/pull/7480) | **feat(ai): 新增 LLM Gateway provider** (RATCHAW) | 将 OpenRouter 风格的 LLM Gateway 作为内置 `openai-completions` provider 接入，含 151 个工具能力模型目录与 OAuth/API key 两种登录方式。已合并。 |
| [#7494](https://github.com/badlogic/pi-mono/pull/7494) | **fix(ai): 保留 Gemini 3 工具调用 ID** (muyiyr) | 修复历史回放时 Gemini 3 因 `requiresToolCallId()` 未覆盖导致的工具调用 ID 丢失——目前仅 Claude 与 GPT-OSS 经 Google 路由被覆盖，新逻辑将 Gemini 3+ 也纳入。 |
| [#7493](https://github.com/badlogic/pi-mono/pull/7493) | **设置 AI_AGENT 用于子进程归属识别** (renaudhartert-db) | 解决 #7132，在 CLI 与 RPC 入口设置 `AI_AGENT=pi`，遵循跨 agent 约定的子进程标识（已被 `@badlogic` lgtm）。 |
| [#7488](https://github.com/badlogic/pi-mono/pull/7488) | **fix(coding-agent): minimal-mode 示例尊重 shellPath** (W0w1F) | 通过 `SettingsManager` 读取 shellPath 修复 Windows 上 minimal-mode 忽略 Git Bash 配置、默认回落到 WSL 的问题。 |
| [#7396](https://github.com/badlogic/pi-mono/pull/7396) | **feat(coding-agent): 新增 server session 后端** (christianklotz) | 为 `PiServer` 提供持久化后端：JSONL 存储、跨进程排他锁、崩溃恢复、协议快照与实时转录投影。属于 session 体系长期重构的核心模块。 |
| [#7330](https://github.com/badlogic/pi-mono/pull/7330) | **fix(coding-agent): 缩放工具返回的图片** (tizmagik) | `processImage()` 此前仅在 `read.ts` 与 `file-processor.ts` 调用，扩展工具/MCP 桥/浏览器产出的图片以原始分辨率入历史。此 PR 统一处理。 |
| [#7482](https://github.com/badlogic/pi-mono/pull/7482) | **fix(tui): WezTerm 上优先 iTerm2 内联图片而非 kitty** (nothankyouzzz) | 修复 #7481：`detectCapabilities()` 将 WezTerm 错误映射为 kitty 协议，导致滚动转录中图片被逐帧擦除至一条。 |
| [#7473](https://github.com/badlogic/pi-mono/pull/7473) | **Revert #7440 (switchable terminal renderers)** (badlogic) | 维护者直接 revert 了昨天合并的可切换终端渲染器 PR，说明该特性稳定性尚未达标；`#7440` 后续大概率会以修订形式回归。 |

---

## 📈 功能需求趋势

从近 24 小时的 Issue 分布可以提炼出以下社区关注方向：

1. **Compactions / 上下文管理（最热门）**
   `#6879`、`#7020`、`#7492`、`#7413`、`#7491`（qwen-token-plan 白名单错配）共同指向：自动压缩触发逻辑、压缩失败诊断、压缩后状态恢复这一整套机制正成为用户痛点。PR `#7498` 是这一方向的直接回应。

2. **网络鲁棒性与超时处理**
   `#7113`、`#7505`、`#7504`、`#7323`、`#7315` 一连串问题表明：**Undici 调度器、IPv6 自动家族选择、`/login` 与 `update --models` 的超时与重试** 是当前可靠性短板。

3. **WezTerm 与多终端兼容性**
   `#7481`、`#7486`、`#7490`、`#7482` 形成一个 WezTerm 专项问题簇——IME 渲染、硬件光标跳动、内联图片降级——反映 WezTerm 用户基数正在增长。

4. **新模型/Provider 支持**
   `#7502`（DeepInfra，已通过 #7501 实现）、`#7480`（LLM Gateway，已合并）、`#7476`（deepseek-v4-flash-0731）、`#7491`（qwen 套餐白名单）——开发者对新模型的接入速度与白名单准确性高度敏感。

5. **扩展系统(Extension)能力扩展**
   `#7484`（扩展发送的斜杠命令未执行）、`#7500`（`askWithFrozenContext`）、`#7472`（`-e` 加载扩展显示异常）、`#7483`（jiti 加载性能）、`#7479`（参数补全）——扩展 API 的"深功能"和性能正成为高级用户的关注点。

6. **TUI/UI 体验打磨**
   `#7495`（滚动时视图跳动）、`#7477`（单行 footer）、`#7485`（tool schemas 双序列化）、`#7440`/`#7473`（可切换渲染器）——交互体验与渲染层精细化。

---

## 💬 开发者关注点

综合 Issues 与 PR 评论，开发者反馈中的高频痛点可归纳为：

- **"压缩机制太脆弱"**——既可能在不必要时浪费 tokens（#7498），又可能在必要时无法触发（#6879），还可能在压缩后丢失上下文（#7020）。当 agent 在长会话中扮演协调者角色时尤为严重。

- **"超时与重试不到位"**——登录、模型刷新、provider 请求、目录获取等几乎所有远程调用都缺乏 `AbortSignal`/timeout 兜底，导致整个 TUI 挂死。`@badlogic` 已通过 `#7435`、`#7482`、`#7488` 等合入逐步修复，但覆盖面仍不足。

- **"扩展系统深水区"**——`sendUserMessage` 跳过命令处理、`askWithFrozenContext` 缺失、加载性能瓶颈等问题说明：**当前扩展 API 适合做轻量胶水，但缺少做"重型插件"（如评审、变体生成）所需的原语**。

- **"诊断信息缺失"**——`#7492` 提到压缩取消原因无法区分用户按键还是内部 abort，`#7323` 失败原因完全不可见——开发者呼吁更细粒度的错误分类与日志。

- **"协议/兼容性边界"**——Databricks/Qwen3 reasoning models、GitHub Copilot GHE 企业版、qwen-token-plan Personal vs Team 白名单、IPv6 blackhole 等边界 case 持续暴露 provider 适配层的鲁棒性问题，需要持续投入。

---

*日报基于 2026-08-02 ~ 2026-08-03 期间 GitHub 数据生成。完整数据请访问 [github.com/badlogic/pi-mono](https://github.com/badlogic/pi-mono)。*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报
**日期：2026-08-03**

---

## 📌 今日速览

今日发布了 nightly 版本 **v0.21.3-nightly.20260803.e1e5b42ce**，核心修复集中在 TUI 文档补全与历史分页。社区讨论焦点明显转向 **Web Shell/Desktop 体验完善**（Live Voice、Session Workflow、Markdown 表格）与 **Serve / Daemon 模式的稳健化**（workspace 所有权、sub-session 并发、credential sanitizer）；同时 Session 管理仍是高频痛点，多个 P1/P2 Bug 涉及并发写入、ACP 加载失败后 session 被静默删除、OpenAI 兼容路径下 `APIUserAbortError` 误判等。

---

## 🚀 版本发布

### v0.21.3-nightly.20260803.e1e5b42ce
- **docs**: 完善 TUI 键盘快捷键参考文档（[#8327](https://github.com/QwenLM/qwen-code/pull/8327)，by @DragonnZhang）
- **fix(core)**: 解除历史分页在 OpenAI 兼容路径下的阻塞（in-flight 流式输出时无法翻页历史记录）
- 详情：[Release v0.21.3-nightly.20260803.e1e5b42ce](https://github.com/QwenLM/qwen-code/releases/tag/v0.21.3-nightly.20260803.e1e5b42ce)

---

## 🔥 社区热点 Issues

| # | 标题 | 优先级 | 状态 | 亮点 |
|---|------|--------|------|------|
| [#8400](https://github.com/QwenLM/qwen-code/issues/8400) | Desktop 0.0.5 / Windows：ACP 加载失败后 session 被静默自动删除（cwd 不匹配触发） | **P1** | OPEN | 高优数据丢失风险；评论 2 |
| [#7164](https://github.com/QwenLM/qwen-code/issues/7164) | 并发 session 写入可分叉 transcript 并隐藏响应 | **P1** | OPEN | 核心数据一致性问题，欢迎 PR（welcome-pr） |
| [#8398](https://github.com/QwenLM/qwen-code/issues/8398) | `isAbortError` 无法识别 OpenAI SDK 的 `APIUserAbortError`，用户取消被误分类 | **P2** | OPEN | 影响最常用的 `auth_type=openai` 路径 |
| [#8356](https://github.com/QwenLM/qwen-code/issues/8356) | `APIUserAbortError` 后，后续 turn 不写入本地 session transcript | **P2** | OPEN | session 持久化的关键缺陷 |
| [#8382](https://github.com/QwenLM/qwen-code/issues/8382) | Duplicate provider tool call id 频发 | **P2** | OPEN | 影响日常使用稳定性 |
| [#8123](https://github.com/QwenLM/qwen-code/issues/8123) | Desktop 客户端 `@` 引用搜索不到同名文件 | P3 | OPEN | 中文用户报告，影响中文项目目录 |
| [#8376](https://github.com/QwenLM/qwen-code/issues/8376) | 建议将 `node.exe` 改为 `qwen-code.exe` 以便外部工具识别 | P3 | OPEN | 社区讨论度高，评论 4 |
| [#8385](https://github.com/QwenLM/qwen-code/issues/8385) | ConEmu/Cmder 下输出全屏闪烁（Windows） | P3 | OPEN | 已有 PR #8406 修复（DEC mode 2026） |
| [#7278](https://github.com/QwenLM/qwen-code/issues/7278) | Better UI：TUI 视觉打磨与品牌升级 | P2 | OPEN | 自动维护，长期 roadmap 跟踪 |
| [#4156](https://github.com/QwenLM/qwen-code/issues/4156) | proposal(serve): `qwen --serve`（Mode A）—— TUI + 进程内 HTTP 守护进程 | — | **CLOSED** | 标志 Stage 1.5b 提案完成；架构方向已明确 |

> **注**：另有 [#6949](https://github.com/QwenLM/qwen-code/issues/6949)（CLOSED，ACP Plan mode 阻塞只读 shell）、[#8207](https://github.com/QwenLM/qwen-code/issues/8207)（CLOSED，JSON-style tool call 泄漏） 等重要 Bug 今日已关闭。

---

## 🛠 重要 PR 进展

| PR | 标题 | 说明 |
|----|------|------|
| [#8408](https://github.com/QwenLM/qwen-code/pull/8408) | **fix(serve)**: `sanitizeProviderWarning` 使用 authority-scoped credential 剥离 | 修复端口截断与密码泄漏两类 sanitizer 缺陷 |
| [#8406](https://github.com/QwenLM/qwen-code/pull/8406) | **fix(cli)**: 为 ConEmu/Cmder 启用同步输出（DEC 2026） | 修复 [#8385](https://github.com/QwenLM/qwen-code/issues/8385) 全屏闪烁；附带 WT_SESSION 检测 |
| [#8405](https://github.com/QwenLM/qwen-code/pull/8405) | **fix(review)**: Maven 生成测试源在 `/review` 中降级 | 避免规则标题被 10+ 生成路径挤掉 |
| [#8407](https://github.com/QwenLM/qwen-code/pull/8407) | **fix(web-shell)**: 防止表格 dialog 关闭后页面滚动跳位 | 键盘焦点保留，回归测试覆盖 |
| [#8404](https://github.com/QwenLM/qwen-code/pull/8404) | **docs**: 文档化 `qwen serve` sub-session 并发设置 | 描述 per-caller / workspace 范围、默认值、接受范围、重启要求 |
| [#8391](https://github.com/QwenLM/qwen-code/pull/8391) | **feat(web-shell)**: Session Workflow 实验性开关 | 默认关闭；启用后将 `plan` 升级为 "Plan & Review" |
| [#8393](https://github.com/QwenLM/qwen-code/pull/8393) | **feat(web-shell)**: plan 审批绑定到 Todo 修订版本 | 防止过期 plan 被错误批准 |
| [#8332](https://github.com/QwenLM/qwen-code/pull/8332) | **feat(cli)**: 附件音频桥接 | 主模型不支持音频时通过批量语音模型转写，明确不可信标记 |
| [#8213](https://github.com/QwenLM/qwen-code/pull/8213) | **feat(serve)**: WorkspaceRuntime 拥有 ACP 子生命周期 | 五态运行时快照 + 工作区单调 epoch + 物理 work leases |
| [#7859](https://github.com/QwenLM/qwen-code/pull/7859) | **feat(web-shell)**: 原生 Live Voice（macOS） | 默认禁用，Codex-parity Live 架构，仅 macOS WebShell 暴露 |
| [#8274](https://github.com/QwenLM/qwen-code/pull/8274) | **feat**: 从任意对话分支（fork） | 不再以"可见消息"作为不安全分支点 |
| [#8386](https://github.com/QwenLM/qwen-code/pull/8386) | **ci**: Windows merge queue 测试迁移至 ECS runner | 默认 `ecs-win`，保留 `windows-2022` fallback |
| [#8171](https://github.com/QwenLM/qwen-code/pull/8171) | **feat(memory)**: 后台 agent turn 限制配置 | `memory.agentMaxTurns` 统一四个 memory agent；`0` 禁用 |
| [#8180](https://github.com/QwenLM/qwen-code/pull/8180) | **feat(telemetry)**: 追踪 tool execution outcomes | 新增 `executionStatus` 与原 terminal status 并存 |

> 另有 [#8311](https://github.com/QwenLM/qwen-code/pull/8311)（已合并，移除 `mobile-mcp` 旧 Hono 依赖并升级 MCP SDK 到 1.30.0）、[#8347](https://github.com/QwenLM/qwen-code/pull/8347)（已合并，扩大 `packages/core` code owner 池）等。

---

## 📈 功能需求趋势

通过对今日 30 条活跃 Issue 的聚类，可识别出五大方向：

1. **Web Shell / Desktop 体验升级**（最高频）
   - Live Voice 原生集成（[#7859](https://github.com/QwenLM/qwen-code/pull/7859)）、Session Workflow 实验门控（[#8391](https://github.com/QwenLM/qwen-code/pull/8391)、[#8389](https://github.com/QwenLM/qwen-code/issues/8389)）、结构化 Review 结果（[#8402](https://github.com/QwenLM/qwen-code/pull/8402)）、Markdown 表格交互（[#8407](https://github.com/QwenLM/qwen-code/pull/8407)）、图片拖拽（[#8321](https://github.com/QwenLM/qwen-code/issues/8321)）。
2. **Serve / Daemon 模式深化**
   - WorkspaceRuntime 拥有权（[#8213](https://github.com/QwenLM/qwen-code/pull/8213)）、sub-session 并发文档（[#8404](https://github.com/QwenLM/qwen-code/pull/8404)）、Plan & Review 守护进程体验（[#8389](https://github.com/QwenLM/qwen-code/issues/8389)）、对话分支（[#8274](https://github.com/QwenLM/qwen-code/pull/8274)）。
3. **多通道 / 集成扩展**
   - Email 通道（IMAP/SMTP）（[#8281](https://github.com/QwenLM/qwen-code/issues/8281)）、安全云部署（[#8291](https://github.com/QwenLM/qwen-code/issues/8291)）、Voice 地址守卫同步（[#8361](https://github.com/QwenLM/qwen-code/issues/8361)）、Desktop voice 安全测试门控（[#8360](https://github.com/QwenLM/qwen-code/issues/8360)）。
4. **性能 / 上下文与模型推理**
   - chat 压缩复用主 prompt-cache 前缀（[#8279](https://github.com/QwenLM/qwen-code/issues/8279)）、fast model 默认关闭 thinking 注入（[#8384](https://github.com/QwenLM/qwen-code/issues/8384)）。
5. **UX 打磨与终端兼容**
   - ConEmu/Cmder 闪烁修复（[#8385](https://github.com/QwenLM/qwen-code/issues/8385) / [#8406](https://github.com/QwenLM/qwen-code/pull/8406)）、`/statusline` 预设配色与实时预览（[#8363](https://github.com/QwenLM/qwen-code/issues/8363)）、TUI 整体视觉升级（[#7278](https://github.com/QwenLM/qwen-code/issues/7278)）、进程名改为 `qwen-code.exe`（[#8376](https://github.com/QwenLM/qwen-code/issues/8376)）。

---

## 💬 开发者关注点

**主要痛点：**

1. **Session 持久化与并发数据一致性**——[#8400](https://github.com/QwenLM/qwen-code/issues/8400)、[#7164](https://github.com/QwenLM/qwen-code/issues/7164)、[#8356](https://github.com/QwenLM/qwen-code/issues/8356) 三连击：ACP 加载失败导致本地 session 被静默删除、并发写入分叉 transcript、`APIUserAbortError` 后 turn 不落盘。开发者最担心的是**生产数据丢失**而非单纯报错。
2. **OpenAI 兼容路径下的边角错误传播**——`isAbortError` 误判（[#8398](https://github.com/QwenLM/qwen-code/issues/8398)）、Duplicate tool call id（[#8382](https://github.com/QwenLM/qwen-code/issues/8382)）、模型放弃 function-calling 后 JSON 参数泄漏（[#8207](https://github.com/QwenLM/qwen-code/issues/8207)）——当 `auth_type=openai` 成为最常用接入方式时，错误分类与重试机制亟需统一。
3. **终端与进程可识别性**——ConEmu/Cmder 闪烁（[#8385](https://github.com/QwenLM/qwen-code/issues/8385)）、`node.exe` 难以被外部工具识别（[#8376](https://github.com/QwenLM/qwen-code/issues/8376)）。开发者希望 Qwen Code 像一等公民终端应用一样被识别与渲染。
4. **Desktop 文件引用能力**——[#8123](https://github.com/QwenLM/qwen-code/issues/8123) 暴露了 Desktop 在文件搜索上的覆盖度问题，特别影响中文项目目录场景。

**高频需求：**

- **更"原生"的 Live Voice / 音频处理**（[#7859](https://github.com/QwenLM/qwen-code/pull/7859)、[#8332](https://github.com/QwenLM/qwen-code/pull/8332)）：从纯 CLI/无头服务扩展到带原生音频能力的 WebShell；
- **可观测性与可治理**——tool-output 预算与制品生命周期硬化（[#7306](https://github.com/QwenLM/qwen-code/issues/7306)）、tool execution telemetry（[#8180](https://github.com/QwenLM/qwen-code/pull/8180)）；
- **CI/CD 自愈**——AutoFix 跳过必修复缺陷（[#8358](https://github.com/QwenLM/qwen-code/issues/8358)）、repo-hygiene 技能自动化（[#7383](https://github.com/QwenLM/qwen-code/issues/7383)）、ECS runner 协调（[#8371](https://github.com/QwenLM/qwen-code/issues/8371)）；
- **灵活的工作流控制**——cooperative pause/resume（[#8320](https://github.com/QwenLM/qwen-code/pull/8320)）、任意对话分支（[#8274](https://github.com/QwenLM/qwen-code/pull/8274)）、background agent 限额（[#8171](https://github.com/QwenLM/qwen-code/pull/8171)）。

> **一句话总结**：今天的 Qwen Code 社区从"功能铺开"过渡到"打磨与稳健化"阶段，**Session 数据安全**、**Web Shell/Desktop 体验闭环**与 **OpenAI 兼容路径下的错误处理**是下一阶段最值得优先关注的三大方向。

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI 社区动态日报

**日期**：2026-08-03
**数据源**：[Hmbown/DeepSeek-TUI](https://github.com/Hmbown/DeepSeek-TUI)
**活跃版本主线**：v0.9.4（开发中） / v0.9.3（已合并重构）

---

## 1. 今日速览

v0.9.4 冲刺进入关键阶段，社区今日聚焦 **Runtime API 扩展**（目标/内存/技能生命周期三大资源齐备）与 **Fleet/Subagent 体系重构**（多层配置阴影、子代理只读合约、Fleet profile 校验）。同时，多个长期挂起的 v0.9.3 重构与 Termux/Android arm64 官方支持议题在今日关闭或进入 QA 阶段，标志 v0.9.3 进入收尾。

---

## 2. 版本发布

⚠️ 过去 24 小时 **无新 Release**。最近一次公开发布仍为 v0.9.3 系列。

---

## 3. 社区热点 Issues

| # | Issue | 重要性与社区反应 |
|---|-------|------------------|
| 1 | [#2934](https://github.com/Hmbown/CodeWhale/issues/2934) 侧边栏会话面板 + 自动恢复 + 历史浏览 | **热度 TOP 1（12 评论）**。当前只能用 `Ctrl+R` 弹窗或 `--continue` 启动切换，体验割裂；已对应 PR #5141，今日提交。 |
| 2 | [#998](https://github.com/Hmbown/CodeWhale/issues/998) 文案展示不全（鼠标悬浮需补全）| 11 评论，UI 细节但高频反馈，已被 `#5143` i18n 覆盖工作间接纳入。 |
| 3 | [#689](https://github.com/Hmbown/CodeWhale/issues/689) `deepseek doctor` 通过但 `run` 无法启动 | 10 评论，**典型"诊断自相矛盾"** 故障，影响首发体验。 |
| 4 | [#4242](https://github.com/Hmbown/CodeWhale/issues/4242) ✅ Termux 真实环境 QA 矩阵 | 9 评论，CLOSED。标志着官方 Android arm64 支持已走过工程 QA。 |
| 5 | [#1004](https://github.com/Hmbown/CodeWhale/issues/1004) `/dryrun` 预览下一次 chat 请求 | 8 评论，V4 Pro 用户痛点明确：**不发送也能看到 payload**，省 token、省时间。 |
| 6 | [#4236](https://github.com/Hmbown/CodeWhale/issues/4236) ✅ Epic：Termux/Android arm64 官方支持 | 7 评论，CLOSED，长期社区诉求落地。 |
| 7 | [#894](https://github.com/Hmbown/CodeWhale/issues/894) 执行过程中图片渲染混乱 | 6 评论，多模态视觉一致性 bug，截图证据充分。 |
| 8 | [#1425](https://github.com/Hmbown/CodeWhale/issues/1425) 大文本处理后会话卡死（子 Agent `agent_wait` 超时）| 6 评论，与 #425 子代理恢复链强相关，反映长任务编排稳定性。 |
| 9 | [#1732](https://github.com/Hmbown/CodeWhale/issues/1732) 合并分析报告保存巨慢 / 缓存命中低 | 6 评论，**持久化 + 缓存策略**双重问题，影响重型使用。 |
| 10 | [#5123](https://github.com/Hmbown/CodeWhale/issues/5123) 🚨 v0.9.4 发布阻塞：Agent spawn 只读合约 | v0.9.4 **release-blocker**，builder/scout 标签代理在只读工具集下自 BLOCKED。今日新建，对应 PR #5136。 |

---

## 4. 重要 PR 进展

| # | PR | 内容要点 |
|---|----|---------|
| 1 | [#5133](https://github.com/Hmbown/CodeWhale/pull/5133) Runtime API 暴露持久化 goal-loop 状态与生命周期 | 新增 `GET/PUT /v1/threads/{id}/goal`、`/continue`、`/cancel` 等端点，托管客户端终于可通过规范边界驱动目标推进。 |
| 2 | [#5129](https://github.com/Hmbown/CodeWhale/pull/5129) Runtime API 技能生命周期端点（install/update/uninstall/trust/audit）| 补齐 v0.9.4 TUI 完整技能管理流程到 HTTP 边界，全部受 `require_runtime_token` 保护。 |
| 3 | [#5131](https://github.com/Hmbown/CodeWhale/pull/5131) Runtime API 内存端点（有界检查 + 生命周期控制）| `/v1/memory` 资源面世，统一托管客户端对内存作用域/出处/清理的访问。 |
| 4 | [#5137](https://github.com/Hmbown/CodeWhale/pull/5137) 多个具名 operator-scoped Fleet 配置（v0.9.4）| 新增 `[fleets.<name>]` 表，旧 `[fleet]` 仍保留向后兼容，回应 #5098 多层阴影问题。 |
| 5 | [#5125](https://github.com/Hmbown/CodeWhale/pull/5125) 暴露 Fleet 配置层阴影并弃用 `[fleet.profiles]` | 修复 `~/.codewhale/agents/<role>.toml` 被工作区静默覆盖的"看不到也警告不了"问题。 |
| 6 | [#5136](https://github.com/Hmbown/CodeWhale/pull/5136) 修复 Fleet 具名代理绑定到已配置角色 | `apply_spawn_profile` 增加 `model`/`model_strength` 校验，杜绝发布阻塞 #5123。 |
| 7 | [#5141](https://github.com/Hmbown/CodeWhale/pull/5141) 侧边栏会话面板（自动恢复 + 历史浏览）| 落实 #2934，引入 `SidebarFocus::Sessions`、自动恢复与浏览会话。 |
| 8 | [#5142](https://github.com/Hmbown/CodeWhale/pull/5142) `task_id` 参数恢复既有子代理 | 落实 #425 `resume_from` 链路，子代理可在 `SpawnRequest` 层级复用上下文。 |
| 9 | [#5143](https://github.com/Hmbown/CodeWhale/pull/5143) 改进 i18n 覆盖（命令/弹窗/控件）| 跟进 #790：750 个 zh-Hant 缺失键分三阶段补齐（composer/config/history/dispatch → approval/elevation → command）。 |
| 10 | [#5140](https://github.com/Hmbown/CodeWhale/pull/5140) 路径化 transcript 句柄与内存硬化 | 把 `default_fleet_max_turns()` 从 `u32::MAX` 改 500，`worker_runtime` 任务预算改为基于角色默认，遏制资源耗尽型工作流。 |

> 另有几条 PR 关闭值得注意：[#5086 `/undo` 限定当前会话 + 新增 `/redo`](https://github.com/Hmbown/CodeWhale/pull/5086)、[#5126 goal-loop 硬编码 10 次上限改为可配置安全背书](https://github.com/Hmbown/CodeWhale/pull/5126)，均属 v0.9.4 安全收口动作。

---

## 5. 功能需求趋势

| 趋势方向 | 代表 Issue / PR | 关注度 |
|---------|----------------|--------|
| **运行时 HTTP API 全资源化**（goal / memory / skill / thread）| #5133、#5129、#5131 | 🔥🔥🔥 三大资源同日补齐，托管客户端战略落地 |
| **Fleet / Subagent 多租户化与硬约束** | #5098、#5099、#5123、#5125、#5136、#5137 | 🔥🔥🔥 角色绑定、模型校验、层阴影警告三连击 |
| **会话管理与侧边栏 UX** | #2934、#5141、#5086 | 🔥🔥 多会话切换、长任务恢复是头号用户痛点 |
| **i18n 国际化（尤其繁体中文）** | #790、#5143 | 🔥🔥 750 个缺失键进入分阶段 PR |
| **移动/嵌入式平台（Termux / Android arm64 / FreeBSD）** | #1097、#4236、#4242 | 🔥🔥 官方支持矩阵扩张 |
| **多 Provider 模型路由**（xAI、Moonshot、NIM、OpenRouter、Copilot ACP）| #1482、#4851、#4997、#5099 | 🔥 解决"模型解析两条链"是基础设施前提 |
| **预览/调试能力** | #1004 `/dryrun`、#855 自动切 profile | 🔥 节省 V4 Pro token 成本 |
| **成本与缓存可观测性** | #4319、#4939（已 CLOSED）| ✅ 已合并 |
| **大文本/长任务稳定性** | #1425、#1732 | ⚠️ 仍 OPEN，子代理超时与持久化慢等待根治 |
| **VS Code 集成与 SSH 沙箱** | #1651、#1829 | ⚠️ 与终端生态冲突，需要隔离方案 |

---

## 6. 开发者关注点

1. **"看不到改了什么"** —— 多层配置（用户级 / 工作区级 / `[fleet]` / `[fleet.profiles]`）之间的静默阴影是今日最强烈的开发者痛点，#5098 直接复现并催生 #5125/#5137 两条结构性修复。
2. **"诊断通过但跑不起来"** —— `#689` 反映 **health check 与真实运行路径的契约不一致**，是首发体验的最大信任损耗点。
3. **"长任务编排的稳定性"** —— 大文本/小说分块、子代理并行、报告合并持久化构成一组强相关 bug（#1425、#1732），与 #425/#5142 的 `resume_from` 链修复构成"治标+治本"组合。
4. **"V4 Pro 太贵"** —— `/dryrun` (#1004) 与自动切 profile (#855) 共同指向 **成本可控性**，社区希望在不牺牲生产力的前提下做实验。
5. **"上下文长度被默认 128K 锁死"** —— 新建 #5134 直接追问如何调到模型支持的 1M，反映 **DeepSeek 长上下文旗舰模型的实际可调性需求**。
6. **"模型解析双实现"** —— `#4851` 揭示 `crates/tui` 与 `crates/config` 各有一份模型解析链，今日合并意味着后续多 Provider 路由不再分裂（#5099 顺势落地）。
7. **"无头环境怎么登录"** —— `#4998` headless OAuth PKCE 已合并，为 CI / 容器 / SSH 场景铺路，是企业化部署的隐形前置。

---

**总评**：今日属于"v0.9.4 收口日"——Runtime API 三大资源到位、Fleet/Subagent 阴影与只读合约两大发布阻塞进入修复轨道、侧边栏会话体验正式立项；v0.9.3 的若干长期重构也在今日关闭。下一阶段重点应观察 #5123、#5099 是否能在 v0.9.4 发布前彻底闭环，以及 #2934/#5141 侧边栏会话面板的交互落地细节。

</details>

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*