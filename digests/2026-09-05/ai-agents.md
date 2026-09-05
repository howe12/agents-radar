# OpenClaw 生态日报 2026-09-05

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-09-05 02:26 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [PicoClaw](https://github.com/sipeed/picoclaw)
- [NanoClaw](https://github.com/qwibitai/nanoclaw)
- [NullClaw](https://github.com/nullclaw/nullclaw)
- [IronClaw](https://github.com/nearai/ironclaw)
- [LobsterAI](https://github.com/netease-youdao/LobsterAI)
- [TinyClaw](https://github.com/TinyAGI/tinyagi)
- [Moltis](https://github.com/moltis-org/moltis)
- [CoPaw](https://github.com/agentscope-ai/CoPaw)
- [ZeptoClaw](https://github.com/qhkm/zeptoclaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## OpenClaw 项目深度报告

# OpenClaw 项目动态日报 · 2026-09-05

---

## 1. 今日速览

OpenClaw 仓库过去 24 小时呈现**高活跃、高吞吐**的状态：Issues 侧 462 条新开/活跃、38 条已关闭，PR 侧 363 条待审、137 条合并/关闭。**无新版本发布**，但提交量与讨论热度维持在高位，社区仍在围绕 2026.7.x / 2026.8.x 系列的回归问题集中发力。整体健康度评估：**中等偏紧**——核心稳定性议题（Gateway 启动失败、session livelock、子代理协调）持续占据榜首，同时关闭率（Issues 7.6%、PRs 27.4%）说明维护团队仍在积极推进但**积压明显**。

---

## 2. 版本发布

**无新版本发布。** 当前主线版本仍为 2026.8.x 系列，最近被反复提及的回归基线版本包括 2026.7.1-2、2026.8.1、2026.7.2-beta.7。

---

## 3. 项目进展

### 今日合并 / 关闭

| 类型 | 编号 | 标题 | 关键意义 |
|---|---|---|---|
| PR #137131 (CLOSED) | [openclaw/openclaw#137131](https://github.com/openclaw/openclaw/pull/137131) | feat(catalog): hydrate published models from models.dev | 试图让目录自动同步上游新增模型；因 author 仍在迭代被关闭而非合并，状态 ⏳ waiting on author |
| PR #137527 (CLOSED) | [openclaw/openclaw#137527](https://github.com/openclaw/openclaw/pull/137527) | fix: make Doctor issue reporting private and recoverable | 修复 Doctor 报告 URL 泄露 SQLite 恢复失败信息的问题；同样处 ⏳ 等待作者 |
| Issue #107814 (CLOSED) | [openclaw/openclaw#107814](https://github.com/openclaw/openclaw/issues/107814) | gpt-5.3-codex-spark emits empty arguments for required tool calls | 旧版 gpt-5.3-codex-spark 空参 bug 已关闭 |
| Issue #131807 (CLOSED) | [openclaw/openclaw#131807](https://github.com/openclaw/openclaw/issues/131807) | System-agent conversations share one Codex session key | Diamond Lobster 级别关键 bug 关闭，PR 修复路径已被打通 |

### 重要 Open PRs（已 ready / 等候 maintainer）

- **PR #138059** [openclaw/openclaw#138059](https://github.com/openclaw/openclaw/pull/138059) `feat(agents): allow bounded recursive session spawning by default` — XL 级变更，默认放开子代理递归生成（深度 5），👀 ready for maintainer look，🚨 compatibility 风险。
- **PR #135889** [openclaw/openclaw#135889](https://github.com/openclaw/openclaw/pull/135889) `feat(cron): run provenance, job kinds, agentTurn token budget, typed completion causes` — XL 级，对运维透明化是关键改进，附截图证明。
- **PR #136833** [openclaw/openclaw#136833](https://github.com/openclaw/openclaw/pull/136833) `fix(sessions): reject placement-incompatible model changes before persisting` — P1，修复远程节点 worker 模型切换持久化错位。
- **PR #136639** [openclaw/openclaw#136639](https://github.com/openclaw/openclaw/pull/136639) `fix(sessions): preserve conversations under maintenance pressure` — XL 级，把可恢复会话上限从 500 提升到 5000，👀 ready。
- **PR #130741** [openclaw/openclaw#130741](https://github.com/openclaw/openclaw/pull/130741) `fix(agents): reconcile subagents through scoped session owner` — Diamond Lobster 评级，OpenAI Swarm 压力测试下稳定性的关键修复。
- **PR #138696** [openclaw/openclaw#138696](https://github.com/openclaw/openclaw/pull/138696) `fix: preserve OAuth inference and gateway rebuilds` — 与 #138595 互锁，修复 OAuth 选择与 rootful Docker skill 挂载点。
- **PR #138627** [openclaw/openclaw#138627](https://github.com/openclaw/openclaw/pull/138627) `fix(gateway): keep webhook ingress retryable during hot reload` — P1，热重载期间 webhook 503 + Retry-After。

整体看，**Agent 会话/子代理一致性**与**运维透明性**是当前主线推进的两个最清晰的方向。

---

## 4. 社区热点

### 评论数 TOP 5

| 排名 | 编号 | 标题 | 评论 | 👍 | 链接 |
|---|---|---|---|---|---|
| 1 | #22438 | Tiered bootstrap file loading for progressive context control | 18 | 0 | [#22438](https://github.com/openclaw/openclaw/issues/22438) |
| 2 | #38327 | "Cannot convert undefined or null to object" 2026.3.2 + gemini-3.1-pro | 16 | 3 | [#38327](https://github.com/openclaw/openclaw/issues/38327) |
| 3 | #108435 | Gateway fails to start after 2026.7.1 update | 15 | 3 | [#108435](https://github.com/openclaw/openclaw/issues/108435) |
| 3 | #115908 | Session transcript projection can livelock | 15 | 0 | [#115908](https://github.com/openclaw/openclaw/issues/115908) |
| 3 | #69208 | Umbrella: duplicate transcript / replay / context assembly | 15 | 0 | [#69208](https://github.com/openclaw/openclaw/issues/69208) |

### 👍 点赞 TOP

- **#48920** [Live Docs are ahead of release](https://github.com/openclaw/openclaw/issues/48920) — 4 👍，Platinum Hermit 评级，`Heartbeat IsolatedSessions` 文档先于发布，社区要求文档版本治理。
- **#38327 / #108435**（3 👍）— 实际用户痛点：升级即崩。

### 热点诉求分析

1. **Token 预算焦虑**（#22438、#14785）：每次会话硬吃 ~3,500 token 的工具 schema + bootstrap 文件，是高频优化诉求。
2. **升级路径断点**（#108435、#92241、#48920）：从 5.x→6.x、6.x→7.x→8.x 多次出现回归、模块路径陈旧、文档脱节，社区**对升级可靠性高度敏感**。
3. **多 Agent 一致性**（#69208、#43367、#118018、#84662）：umbrella 议题表明这是横跨多个 channel、跨多版本的系统性 bug，而非孤例。
4. **Slack / Matrix / Telegram channel 一致性**：Slack DM (#131150)、Matrix room (#114211)、Telegram (#88032) 三类通道的"消息静默丢失"问题持续被点名。

---

## 5. Bug 与稳定性

按严重度排序（评级越高越严重），重点标注是否已有 fix PR：

### 🔴 P0 / Platinum Hermit · 严重回归

| Issue | 标题 | fix PR | 链接 |
|---|---|---|---|
| **#48920** | Live Docs are ahead of release | ❌ 无 | [#48920](https://github.com/openclaw/openclaw/issues/48920) |

### 🟠 P1 / Diamond Lobster · 多通道/多路径数据丢失/崩溃循环

| Issue | 标题 | fix PR | 链接 |
|---|---|---|---|
| #38327 | "Cannot convert undefined or null to object" gemini-3.1-pro | ❌ 无 | [#38327](https://github.com/openclaw/openclaw/issues/38327) |
| #108435 | Gateway fails to start after 2026.7.1 update | ❌ 无 | [#108435](https://github.com/openclaw/openclaw/issues/108435) |
| #115908 | Session transcript projection livelock | ❌ 无 | [#115908](https://github.com/openclaw/openclaw/issues/115908) |
| #69208 | Umbrella: duplicate transcript / replay / context assembly | ❌ 无 | [#69208](https://github.com/openclaw/openclaw/issues/69208) |
| #43367 | Multi-agent orchestration: overwrites / lock failures / detached child | ❌ 无 | [#43367](https://github.com/openclaw/openclaw/issues/43367) |
| #113306 | SQLite snapshot restore lacks end-to-end crash / identity guarantees | ❌ 无 | [#113306](https://github.com/openclaw/openclaw/issues/113306) |
| #114211 | Matrix room agents loop on no-reply / restart recovery / stale replay | ❌ 无 | [#114211](https://github.com/openclaw/openclaw/issues/114211) |
| #114234 | Usage-cost refresh lock frozen after restart with reused PID | ❌ 无 | [#114234](https://github.com/openclaw/openclaw/issues/114234) |
| #118018 | Stale subagent completion delivered into replaced requester lifecycle | ❌ 无 | [#118018](https://github.com/openclaw/openclaw/issues/118018) |
| #119720 | Synchronous SQLite agent.write blocks event loop; no ANALYZE after mass delete | ❌ 无 | [#119720](https://github.com/openclaw/openclaw/issues/119720) |
| #112259 | Inbound channel turn silently dropped: zero-payload, no retry/DLQ | ❌ 无 | [#112259](https://github.com/openclaw/openclaw/issues/112259) |
| #90944 | sessions_yield reply not delivered; auto-announce mirror wins | ❌ 无 | [#90944](https://github.com/openclaw/openclaw/issues/90944) |
| #131150 | Slack DMs dropped after restart: prepareSlackMessage null pre-gate | ❌ 无 | [#131150](https://github.com/openclaw/openclaw/issues/131150) |
| #138272 | Android Talk realtime drops with "no live response owner" | ❌ 无 | [#138272](https://github.com/openclaw/openclaw/issues/138272) |

### 🟡 P1 / Gold Shrimp · Provider / 模型层回归

| Issue | 标题 | fix PR | 链接 |
|---|---|---|---|
| #135111 | "Provider completed tool call with malformed JSON arguments" on v2026.8.1 (claude-sonnet-5) | ❌ 无 | [#135111](https://github.com/openclaw/openclaw/issues/135111) |
| #119333 | codex: request_user_input exposed in Default mode but rejected | ❌ 无 | [#119333](https://github.com/openclaw/openclaw/issues/119333) |
| #84662 | Codex app-server stores runtime context in native history → input growth | ❌ 无 | [#84662](https://github.com/openclaw/openclaw/issues/84662) |
| #71689 | Tasks registry restore fails on malformed SQLite image | ❌ 无 | [#71689](https://github.com/openclaw/openclaw/issues/71689) |
| #119992 | message tool per-turn send budget: duplicate-answer storms | ❌ 无 | [#119992](https://github.com/openclaw/openclaw/issues/119992) |
| #129314 | Hidden "next-turn runtime context" leaked as standalone visible turn | ❌ 无 | [#129314](https://github.com/openclaw/openclaw/issues/129314) |
| #120162 | Safeguard compaction: qualityGuard retry shares timeout budget | ❌ 无 | [#120162](https://github.com/openclaw/openclaw/issues/120162) |
| #118793 | Claude CLI session-limit dies without triggering fallback chain | ❌ 无 | [#118793](https://github.com/openclaw/openclaw/issues/118793) |

### 🟢 P2 / Silver Shellfish · 行为 / 体验类

| Issue | 标题 | fix PR | 链接 |
|---|---|---|---|
| #53628 | ${XDG_CONFIG_HOME} not processed installing a skill | ❌ 无 | [#53628](https://github.com/openclaw/openclaw/issues/53628) |
| #97616 | OpenClaw leaks unreaped hook/tool child processes (zombies) | ❌ 无 | [#97616](https://github.com/openclaw/openclaw/issues/97616) |
| #88079 | WebChat reasoning_content not streamed for Kimi/DeepSeek | ❌ 无 | [#88079](https://github.com/openclaw/openclaw/issues/88079) |
| #114154 | bundle-mcp passes policy but agent sessions never bundle it | ❌ 无 | [#114154](https://github.com/openclaw/openclaw/issues/114154) |
| #119087 | Gateway cold start regressed ~2.5x from 2026.7.1→2026.7.2 on 1-vCPU | ❌ 无 | [#119087](https://github.com/openclaw/openclaw/issues/119087) |

### 关键观察

- **绝大多数 P1 / Diamond Lobster 级别 Issue 仍无对应 fix PR**，仅少数处于 `clawsweeper:linked-pr-open` 状态。
- **Session / Agent / Channel 三层状态机**的并发边界仍是高发区，#69208 umbrella 议题若不收敛，相关 Diamond Lobster 列表只会继续增长。
- **Provider 层 OAuth / 模型元信息**成为新增长点（#118793、#135111、#94719 PR 中试图修复的 Anthropic `claudeCodeVersion` 陈旧问题）。

---

## 6. 功能请求与路线图信号

| 需求 | Issue | 已有相关 PR | 评估 |
|---|---|---|---|
| 分层 bootstrap 文件加载，控制 context | [#22438](https://github.com/openclaw/openclaw/issues/22438) | 无 | 趋势明显，#14785 同样诉求；若进入路线图应作为 token 预算优化组合拳 |
| 工具 schema token 开销降低 ~3,500 tok/session | [#14785](https://github.com/openclaw/openclaw/issues/14785) | 无 | 同上 |
| 必选 onboarding：memory / embedding 配置 | [#16670](https://github.com/openclaw/openclaw/issues/16670) | 无 | 几乎确定会被采纳；零配置 memory 体验 |
| 暴露后端真实模型到 session_status | [#51441](https://github.com/openclaw/openclaw/issues/51441) | 无 | 与 LiteLLM 路由代理深度用户高度相关 |
| Agent 自主触发 context 压缩（self-compact） | [#6757](https://github.com/openclaw/openclaw/issues/6757) | 无 | 长期存在，倾向被排到 2026.x 末期 |
| Fallback 审批模式 + 模型归因 | [#33975](https://github.com/openclaw/openclaw/issues/33975) | 无 | 与 provider failover 可观测性一脉相承 |
| Cron 运行溯源 / 任务泳道 UI | [#88032 类似方向](https://github.com/openclaw/openclaw/issues/88032) | [#135889](https://github.com/openclaw/openclaw/pull/135889) / [#135890](https://github.com/openclaw/openclaw/pull/135890) | **强信号**：两个 PR 都直接回应，已 ready |
| TUI emoji / unicode 关闭（无障碍） | [#9637](https://github.com/openclaw/openclaw/issues/9637) | 无 | 易实现，性价比高 |
| Telegram quote/reply 作为一等公民合约 | [#88032](https://github.com/openclaw/openclaw/issues/88032) | 无 | 与 channel 稳定性议题绑定 |
| Session Startup message 可配置 | [#45501](https://github.com/openclaw/openclaw/issues/45501) | 无 | 易实现 |
| 把 context 占用 % 注入 system prompt | [#38568](https://github.com/openclaw/openclaw/issues/38568) | 无 | 与 #22438 关联 |
| 生视频 URL 物化安全文档 | [#132601](https://github.com/openclaw/openclaw/issues/132601) | 无 | 安全合规向 |

**最可能被纳入下一版本的信号**：CRON 运行溯源 + 任务泳道（两条 PR 路径已就位）+ Memory/Embedding 必选 onboarding + context token 优化。

---

## 7. 用户反馈摘要

提炼自 Issue 评论与摘要：

- **升级即崩**：#108435、#92241、#48920 三连击表明，用户对 5.x→6.x、7.x→8.x 的跨版本升级缺乏信任。#48920 单独 4 👍 是文档先于发布的强信号。
- **Provider OAuth / 模型标识是

---

## 横向生态对比

# AI 智能体与个人 AI 助手开源生态横向对比报告
**报告日期：2026-09-05 ｜ 覆盖 13 个项目**

---

## 1. 生态全景

本周期开源生态呈现**"两端分化、中段拥挤"**的结构性特征：一端是 OpenClaw、ZeroClaw、Hermes Agent 等规模化项目进入**深度治理与安全硬化期**（OpenClaw 单日触达 462 条 Issue、363 条 PR，ZeroClaw 单日关闭 10 个安全/治理相关 Issue）；另一端是 TinyClaw、ZeptoClaw 出现**零活跃**静默化，Moltis、NullClaw 进入**低频迭代间隔**。中段的 CoPaw、NanoBot、PicoClaw、LobsterAI、NanoClaw、IronClaw 普遍处于**功能打磨 + Bug 收敛**的并行节奏，单日 PR 流转量集中在 13–35 条区间，其中 LobsterAI 是本周期唯一保持**连续发版**的项目（48h 内连发 2026.9.3 与 2026.9.4）。整体看，生态正从"能力扩张"转向"质量收敛"，**安全、可观测、跨渠道一致性**成为共同焦点。

---

## 2. 各项目活跃度对比

| 项目 | Issues（活跃/关闭） | PRs（待审/已关） | Release | 健康度 | 阶段特征 |
|---|---|---|---|---|---|
| **OpenClaw** | 462 / 38 | 363 / 137 |  | 🟡 中等偏紧 | 高吞吐、强积压 |
| **ZeroClaw** | 24 / 10 | 43 / 7 |  | 🟢 良好 | RFC 治理、安全优先 |
| **Hermes Agent** | 50 / 2 | 49 / 1 |  | 🟢 良好 | 多机部署、SSH 回归 |
| **CoPaw (QwenPaw)** | 17 / 10 | 21 / 14 | ❌ |  良好 | 2.2 修尾 + Hub 规划 |
| **NanoBot** | 5 / — | 21 / 8 | ❌ | 🟢 良好 | TUI/WebUI 打磨 |
| **PicoClaw** | 4 / 0 | 2 / 20 | ❌ | 🟢 良好 | 渠道稳定性批量修复 |
| **LobsterAI** | 0 / 1 | 5 / 28 | ✅ 2026.9.3 + 2026.9.4 | 🟢 良好 | 高频发版 |
| **NanoClaw** | 2 / 0 | 15 / 3 | ❌ | 🟡 3.5/5 | Provider 重构 + Skills 治理 |
| **IronClaw** | 7 / — | 9 / 4 | ❌ | 🟢 良好 | R 系列路线图执行 |
| **Moltis** | 1 / 0 | 1 / 0 | ❌ |  静默 | 低频迭代 |
| **NullClaw** | 1 / 0 | 0 / 0 | ❌ |  静默 | 仅 1 条 Firecrawl 端点请求 |
| **TinyClaw** | 0 / 0 | 0 / 0 | ❌ |  静默 | 24h 无活动 |
| **ZeptoClaw** | 0 / 0 | 0 / 0 | ❌ |  静默 | 24h 无活动 |

**关键观察**：
- **OpenClaw** 单日 Issue 量是第二位 ZeroClaw 的 ~19 倍，单日 PR 量是 ~7 倍，社区规模仍断层领先；
- **PicoClaw** 出现"4 Issue vs 20 关闭 PR"的极度不平衡，呈现典型的维护侧批量清理日；
- **LobsterAI** 是本周期唯一发版的项目，体现商业化产品的节奏优势。

---

## 3. OpenClaw 在生态中的定位

### 优势
- **规模与压力测试深度**：单日 462 Issue + 363 PR 表明其用户基数与场景覆盖远超同类，**OpenAI Swarm 压力测试**下的子代理协调（#130741、#138059）是其他项目尚未触达的边界。
- **架构完整性**：Agent / Session / Channel / Gateway / Provider 五层结构清晰，**Diamond Lobster 评级体系**显示已建立正式的事件分级治理。
- **协议广度**：在 MCP、Telegram、Slack、Matrix、Codex、Anthropic、OpenAI、xAI、Ollama 等多协议/多 Provider 上都有 in-flight 集成。

### 劣势与差异
- **稳定性债务最重**：14 条 Diamond Lobster 级 P1 中绝大多数**无对应 fix PR**，session livelock（#115908）、multi-agent 协调（#43367、#118018）、channel 一致性（#112259、#131150、#114211）三大类问题形成系统性 bug 海。
- **关闭率偏低**：Issue 关闭率 7.6%、PR 关闭率 27.4%，与 NanoBot（"报告即修复"）和 IronClaw（6 条 Bug 4 条当日修）形成鲜明对比。
- **版本节奏放缓**：v2026.8.x 主线已无新版本，2026.7.1 → 2026.7.2 → 2026.8.1 的连续回归使用户对升级路径信任受损（#48920、#92241、#108435）。

### 与同类对标
| 维度 | OpenClaw | ZeroClaw | Hermes Agent | CoPaw |
|---|---|---|---|---|
| 核心场景 | 多 Agent + 多 Channel | 桌面代理 + 运行时治理 | 多机部署 + Desktop | 个人 → 团队 Hub |
| 安全治理 | 评级系统（事后） | RFC 驱动（前摄） | Issue triage | 白名单强制 |
| Provider 策略 | 广兼容 | 严格校验 | 本地+云混部 | 多租户隔离 |
| 状态机复杂度 | 最高（5 层） | 中（runtime 拥有） | 中（Desktop+Server） | 中（Hub+Runtime） |

---

## 4. 共同关注的技术方向

### 4.1 多渠道稳定性（命中 ≥ 4 个项目）
**Slack / Matrix / Telegram / Feishu / Mattermost** 在 OpenClaw（#131150、#114211、#88032）、NanoBot（飞书 #5567、Mattermost 缓存 #5663）、PicoClaw（Telegram #2090/#2092、Slack #2089、飞书 #2091）、CoPaw（飞书 #7534）、Hermes（Slack #103354）均出现消息丢失、重复触发、consumer 卡死等结构性 bug。**核心诉求：channel 应被降级为可插拔适配器，而非状态机主路径**。

### 4.2 Provider/模型协议合规（命中 ≥ 5 个项目）
- **OpenCode `x-opencode-session` header**：NanoBot #5661（P1，明日截止）+ ZeroClaw #10603（S1）出现**跨项目同型 bug**，上游强制要求该 header 否则报错/丢缓存；
- **Anthropic Claude Code OAuth**：OpenClaw #118793、ZeroClaw、IronClaw 均在被"claudeCodeVersion 陈旧"问题困扰；
- **Codex 凭据池误判**：OpenClaw #119333 + Hermes #103349 同步出现 `request_user_input` 在 Default mode 被拒 / Codex 凭据被误判为 429；
- **OpenAI 兼容层 strict mode**：PicoClaw #1683、OpenClaw #135111、NanoClaw（Provider 契约重构 PR #3584/#3586/#3588）共同收敛到"剥离 `strict: true`、统一定义 Provider 契约"。

### 4.3 Session/State 持久化（命中 ≥ 5 个项目）
- **SQLite 损坏**：Hermes #103339（4 天 7 次 WAL 损坏，lazy flock gate 方案）、OpenClaw #113306、#119720、LobsterAI #1071（6 个月未修复的 3 项数据完整性缺陷）；
- **Conversation 转录**：`PreCompact` 触发 OOM 崩溃循环（NanoClaw #3716）、transcript projection livelock（OpenClaw #115908）、compaction 预算永不重装（Hermes #103355）形成**长会话稳定性三角**；
- **环境变量丢失**：NanoClaw #3714 揭示 operator 级别 ENV 无法传入 session 容器，CoPaw #7559、#7567 的 runtime 锁状态机不同步是同根问题的不同表现。

### 4.4 工具/MCP 生态（命中 ≥ 4 个项目）
- **PicoClaw** 双 MCP 文档 PR（#3367 Pilot、#3368 Parallel Search）、**NanoBot** `copy_file`/`move_file` 工具集（#5626）、**CoPaw** MCP tool_call_timeout 默认 300s（#6874，开放 58 天）、**NanoBot** MCP OAuth 注册表无界（#5665）。**共识：MCP 是事实标准，但治理（超时、限速、安全）远未跟上**。

### 4.5 Token 预算与上下文优化（命中 ≥ 3 个项目）
- **OpenClaw** #22438 / #14785（每次会话硬吃 ~3,500 token 的工具 schema + bootstrap 文件）；
- **NanoBot** 通过 PR #5660 提供生成速度与上下文用量弹窗，对标 DeepSeek Harness；
- **CoPaw** #7183 workspace-scoped preload，缩减工作区首次工具发现成本；
- **OpenClaw** #38568 提议把 context 占用 % 注入 system prompt。

### 4.6 多 Agent / 子代理协调（命中 ≥ 3 个项目）
- OpenClaw #138059（默认放开子代理递归深度 5）、#130741（OpenAI Swarm 压力修复）、#69208 umbrella；
- Hermes #103346（operator-defined worker profiles）、#103136（原生异步用户输入）；
- CoPaw #7318（Hub 多租户 → 多 Agent 协作）+ IronClaw R 系列（Subagent R2/R3/R4 里程碑）。

---

## 5. 差异化定位分析

| 项目 | 核心定位 | 目标用户 | 关键架构特征 | 商业化信号 |
|---|---|---|---|---|
| **OpenClaw** | 通用多 Agent 平台 | 高级开发者 / 复杂自动化 | 5 层状态机 + Diamond Lobster 分级 | 间接（生态） |
| **ZeroClaw** | 桌面代理 + 强治理 | 安全敏感企业 | Rust + RFC 治理 + runtime-owned session | 间接 |
| **Hermes Agent** | 多机 Bot 部署 | Homelab / VPS / 笔记本多端 | Desktop + Server 双形态 + Bot Group Chat | 间接 |
| **CoPaw (QwenPaw)** | 个人 → 团队 Hub | 中小企业 / 协作团队 | 多租户 + MCP 治理 + 移动端草案 | 间接（Hub 收费空间） |
| **NanoBot** | 单用户 TUI/WebUI 体验对标 DeepSeek | 个人开发者 | OpenTUI 0.5.x + 可观测性 | 无 |
| **PicoClaw** | 多渠道 + 多 Provider 稳定性 | 跨平台部署者 | 严格模式容错 + OpenAI 兼容层 | 无 |
| **NanoClaw** | Operator-优先的 Skills 治理 | 自托管运维 / 企业 | Skills 安装审计 + Provider canon | 直接（Zapier MCP 路径） |
| **LobsterAI** | 商业级个人助手 | C 端付费用户 | Electron + 应用内浏览器 + 订阅恢复 | 直接（订阅 + 付费） |
| **IronClaw** | 渐进式 Subagent

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目日报
**日期**：2026-09-05
**数据来源**：[HKUDS/nanobot](https://github.com/HKUDS/nanobot)

---

## 1. 今日速览

NanoBot 在过去 24 小时保持了较高的开发活跃度，共产生 **5 条 Issue 更新** 和 **29 条 PR 更新**，但 **无新版本发布**。从数据结构看，今日工作高度集中于**稳定性与资源治理**（多个缓存无界增长修复）与**渠道/Provider 集成**（OpenCode session header、aimlapi gateway、Mattermost 缓存）。21 条待合并 PR 形成一定积压，建议维护者集中评审。

---

## 2. 版本发布

🚫 **今日无新版本发布**。

---

## 3. 项目进展（已合并/关闭 PR）

今日共 **8 条 PR 合并/关闭**，整体方向偏向 TUI/WebUI 体验优化与协议层重构。

| PR | 主题 | 价值 |
|---|---|---|
| [#5639](https://github.com/HKUDS/nanobot/pull/5639) | 稳定 session labels、TUI 流式输出与配对提示 | 升级 OpenTUI 0.5.3 → 0.5.10，修复流式围栏代码不可见问题 |
| [#5660](https://github.com/HKUDS/nanobot/pull/5660) | WebUI 上下文用量弹窗新增模型生成速度显示 | 闭环用户诉求 [#5631](https://github.com/HKUDS/nanobot/issues/5631) |
| [#5657](https://github.com/HKUDS/nanobot/pull/5657) | 重构 WebUI 出站线路编码 | 提取类型化 encoder 与共享 send_payload 原语 |

📌 **推进小结**：UI 层人机交互质量持续打磨，可观测性（速度/上下文）正逐步对齐 DeepSeek Harness 等同类产品的体验基线。

---

## 4. 社区热点

### 🏆 最高互动 Issue
- [#5567](https://github.com/HKUDS/nanobot/issues/5567) — **飞书渠道多轮回复整合为单条流式卡片消息**（4 条评论，OPEN）
  - 核心诉求：消除 agent 单次请求产生多条碎片消息的体验问题
  - 涉及 `send_delta()` / `send()` 调用时序与 CardKit 流式卡片能力复用

### 🆕 最新紧急诉求
- [#5661](https://github.com/HKUDS/nanobot/issues/5661) — **OpenCode Zen/Go 必须携带 `x-opencode-session` header**（OPEN，关联 PR [#5662](https://github.com/HKUDS/nanobot/pull/5662)，**P1**）
  - ⚠️ **截止时间 2026-09-06**，缺少该 header 的请求将报错并失去 prompt cache 优化

### 📈 Provider 生态拓展
- [#5666](https://github.com/HKUDS/nanobot/pull/5666) — **aimlapi.com 作为 OpenAI-compatible gateway 接入**，提供 50/50 营收分成合作方案

💡 **诉求分析**：当前社区诉求明显集中于"**渠道体验一致性**"（飞书、mattermost、WebUI）与"**Provider 协议合规性**"（OpenCode header、aimlapi gateway）。

---

## 5. Bug 与稳定性

| 严重度 | Issue/PR | 描述 | 是否已有 fix PR |
|---|---|---|---|
| 🔴 **P1 / 截止明日** | [#5661](https://github.com/HKUDS/nanobot/issues/5661) → [#5662](https://github.com/HKUDS/nanobot/pull/5662) | OpenCode Zen/Go 请求头缺失将导致 2026-09-06 起报错 | ✅ 已修复待合并 |
| 🟡 **P2 / 资源泄漏** | [#5665](https://github.com/HKUDS/nanobot/pull/5665) | MCP 浏览器 OAuth 流程注册表无界增长 | ✅ PR 已提交 |
| 🟡 **P2 / 资源泄漏** | [#5664](https://github.com/HKUDS/nanobot/pull/5664) | `AutoCompact._summaries` 空闲会话摘要缓存无界 | ✅ PR 已提交 |
| 🟡 **P2 / 资源泄漏** | [#5663](https://github.com/HKUDS/nanobot/pull/5663) | Mattermost 线程上下文缓存 `Set` 无界 | ✅ PR 已提交 |
| 🟢 已关闭 | [#5645](https://github.com/HKUDS/nanobot/issues/5645) | 0.3.0 缺失 Current Time runtime-context block（与 0.2.2 行为差异） | ✅ 已关闭 |
| 🟢 已关闭 | [#5644](https://github.com/HKUDS/nanobot/issues/5644) | WebUI 渠道 locale registry 并发加载丢失 locale | ✅ 已关闭 |
| 🟡 **P2** | [#5648](https://github.com/HKUDS/nanobot/pull/5648) | WebUI 生成 session title 时未校验 session 元数据（[#5647](https://github.com/HKUDS/nanobot/issues/5647)） | ✅ PR 待合并 |
| 🟡 **P2** | [#5658](https://github.com/HKUDS/nanobot/pull/5658) | WebSocket envelope 缺 `webui: true` 时不生成 session title | ✅ PR 待合并 |
| 🟡 **P2** | [#5490](https://github.com/HKUDS/nanobot/pull/5490) | WebUI 多请求轮次 token 聚合显示不清 | ✅ PR 待合并（含 conflict） |
| 🟢 **功能缺失** | [#5431](https://github.com/HKUDS/nanobot/pull/5431) | `AgentLoop.schedule_background` 未上报后台任务失败 | ✅ PR 待合并 |
| 🟢 **数据完整性** | [#5379](https://github.com/HKUDS/nanobot/pull/5379) | `history.jsonl` 内存整合（consolidation）输入丢失 | ✅ PR 待合并 |

📊 **观察**：今日三大"缓存无界增长"修复呈现明显的**模式化**——`McpOAuthManager`、`AutoCompact._summaries`、Mattermost `_thread_context_attempted` 均缺乏上限/淘汰策略，建议维护者系统性审查其他长期持有集合的代码路径。

---

## 6. 功能请求与路线图信号

### 🤝 渠道能力增强
- **飞书流式卡片整合**（[#5567](https://github.com/HKUDS/nanobot/issues/5567)）— 复用现有 CardKit 流式卡片能力，预期进入下一开发周期
- **Channel 上下文压缩可见化**（[#5656](https://github.com/HKUDS/nanobot/pull/5656)）— 新增 `/compact` 与结构化 lifecycle 事件
- **后台模型重试状态可视化**（[#5504](https://github.com/HKUDS/nanobot/pull/5504)）— TUI/WebUI 双端倒计时与重试进度（已标记 NAN-34）

### 🛠️ Agent 工具集扩展
- **新增 `copy_file` / `move_file` 工具**（[#5626](https://github.com/HKUDS/nanobot/pull/5626)）— 填补文件系统原语缺口，避免链式 `read_file → write_file` 的低效调用

### 📡 Provider 生态
- **aimlapi.com 接入**（[#5666](https://github.com/HKUDS/nanobot/pull/5666)）— 1000+ 模型聚合网关
- **Codex Langfuse tracing**（[#5520](https://github.com/HKUDS/nanobot/pull/5520)）— 补齐可观测性

### 🫀 Runtime Context 与配置
- **运行时 ephemeral block opt-out**（[#5659](https://github.com/HKUDS/nanobot/pull/5659)）— 让 session 常量信息避免持久化重放（[#5586](https://github.com/HKUDS/nanobot/issues/5586)）
- **Heartbeat `isolatedSession` 配置**（[#4551](https://github.com/HKUDS/nanobot/pull/4551)）— 允许心跳共享目标会话上下文
- **Heartbeat `modelOverride` 配置**（[#4549](https://github.com/HKUDS/nanobot/pull/4549)）— 允许为心跳指定更便宜模型

🔮 **路线图判断**：以上多数 PR 已具备 P2 标签及回归用例，建议作为 **0.3.x 增量** 或 **0.4.0 minor release** 候选。

---

## 7. 用户反馈摘要

> 💬 来自 [#5631](https://github.com/HKUDS/nanobot/issues/5631) — *"能够直观看到模型的速度和上下文信息，类似 deepseek harness"*
> → 体现用户对**模型透明度**与**对标头部产品体验**的明确期待，PR [#5660](https://github.com/HKUDS/nanobot/pull/5660) 已直接闭环。

> 💬 来自 [#5567](https://github.com/HKUDS/nanobot/issues/5567) — 飞书用户痛点描述详细（4 条评论），涉及工具提示/进度消息/最终回复三阶段
> → 反映 IM 渠道用户对**消息粒度**敏感，期待"一问一答"的自然对话节奏。

> 💬 来自 [#5645](https://github.com/HKUDS/nanobot/issues/5645) — 用户从 0.2.2 升级到 0.3.0 后发现 `Current Time` runtime-context 默认行为变更
> → 暴露**版本升级时的隐式行为变更**风险，建议维护者补充 CHANGELOG 与迁移说明。

> 💬 来自 [#5666](https://github.com/HKUDS/nanobot/pull/5666) — *"我们已准备好所有技术工作，希望成为内置选项"* + 营收分成提议
> → 社区正从"被动使用"转向"主动共建生态"。

---

## 8. 待处理积压（提醒维护者关注）

⚠️ **PR 积压**：21 条待合并 PR，建议按优先级分批评审。

### 🚨 紧急（建议今日处理）
- [#5662](https://github.com/HKUDS/nanobot/pull/5662) — **P1**，OpenCode session header，**明天（2026-09-06）截止**

### ⏳ 长期未响应（创建 > 60 天）
- [#4551](https://github.com/HKUDS/nanobot/pull/4551) — `isolated_session` heartbeat 配置（创建于 2026-06-26，**已搁置 71 天**）
- [#4549](https://github.com/HKUDS/nanobot/pull/4549) — `model_override` heartbeat 配置（创建于 2026-06-26，**已搁置 71 天**）
- [#5379](https://github.com/HKUDS/nanobot/pull/5379) — memory consolidation 修复（创建于 2026-08-13，**23 天**）
- [#5431](https://github.com/HKUDS/nanobot/pull/5431) — 后台任务失败上报（创建于 2026-08-18，**18 天**）
- [#5490](https://github.com/HKUDS/nanobot/pull/5490) — WebUI token 聚合显示（创建于 2026-08-22，**14 天**，含 conflict）
- [#5520](https://github.com/HKUDS/nanobot/pull/5520) — Codex Langfuse tracing（创建于 2026-08-24，**12 天**）
- [#5504](https://github.com/HKUDS/nanobot/pull/5504) — 模型重试状态可视化（创建于 2026-08-24，**12 天**，NAN-34 ticket）
- [#5626](https://github.com/HKUDS/nanobot/pull/5626) — `copy_file` / `move_file` 工具（创建于 2026-09-01，**4 天**）

### 📋 维护建议
1. **优先合入 P1 PR #5662** 以避免 2026-09-06 起 OpenCode 用户报错
2. 集中评审 **三组缓存无界 PR（#5663/#5664/#5665）** ——同一类问题可批量处理
3. 排查 heartbeat 相关 [#4549](https://github.com/HKUDS/nanobot/pull/4549)/[#4551](https://github.com/HKUDS/nanobot/pull/4551) 是否可打包发布
4. 关注 [#5490](https://github.com/HKUDS/nanobot/pull/5490) conflict 状态，及时与作者 rebase
5. 建议在 0.3.x → 0.4.0 升级文档中补充 **runtime-context 默认行为变更**说明（回应 [#5645](https://github.com/HKUDS/nanobot/issues/5645)）

---

📈 **项目健康度评估**：🟢 **良好** — 开发活跃度高，Issue 流转迅速（P2 资源类问题已实现"报告即修复"），但 PR 评审节奏有积压迹象。Provider 生态与可观测性建设是当前亮点，建议尽快处理明日截止的 P1 项以维护外部用户信任。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目日报
**日期：2026-09-05**

---

## 1. 今日速览

Hermes Agent 今日维持高强度开发节奏，过去 24 小时共有 **50 条 Issue** 和 **50 条 PR** 更新（活跃度极高），但 **无新版本发布**，仓库仍处于密集合并前的代码审查阶段。讨论焦点集中在三块：**(a) Desktop SSH 远程模式 401 鉴权回归**（多份重复 issue + 修复 PR 已就位）、**(b) SessionDB / state.db 多进程写入导致的 WAL 损坏**（已出现实锤复现 + 修复 PR）、**(c) Bot Group Chat 跨网关持续性**（feature 集大成 PR #98307 进入 review）。社区以 P1 安全/兼容性 bug 为主，多名外部贡献者集中提交了针对近期回归的修复，整体项目处于「快速清积压」状态。

---

## 2. 版本发布

 **今日无新版本发布**。最近一次可识别版本基线为 **v2026.8.31**（commit `29112be`，见 #103302）和 **v0.21.0**（commit `b0ab2e163`，见 #103230 / #102110），上游主干推进至 `71f8c60f` / `f159e58`。从 PR 提交密度判断，下一次版本标签（可能为 v0.21.1 或 v2026.9.x）大概率将在 SSH 401 / state.db 修复落地后发布。

---

## 3. 项目进展

### 已关闭的 Issue（今日净减少 2 个活跃问题）

| # | 标题 | 说明 |
|---|------|------|
| [#93958](https://github.com/NousResearch/hermes-agent/issues/93958) | Desktop 本地 spawn 在 macOS 上立即以 code 0 退出 | 父 watchdog / 就绪生命周期问题；👍=1，已结案 |
| [#103313](https://github.com/NousResearch/hermes-agent/issues/103313) | Desktop SSH 远程模式 401（mount_spa 注入过期 token） | 标记为 **duplicate**，与 #102930 / #103054 合并跟踪 |

### 已合并/关闭 PR（1 条）

数据概览中标记 1 条 PR 已合并/关闭（具体编号未在摘要中明示，但合并节奏表明评审流水线畅通，49 条 PR 待合并主要处于 "ready-for-review" 状态）。

### 实质性功能推进（按影响面排序）

- **[#98307](https://github.com/NousResearch/hermes-agent/pull/98307)** `feat(bot-mode): complete Group Chat continuity, control, and files` — 来自 @dokterdok 的「Group Chat 现场构建」大合集，串联 #97681 的 bot group chats 需求：跨 gateway 消息/文件互通、Desktop 关闭后仍运行、Owner 控制面板、文件支持。**这是今日对项目愿景推进最大的 PR**。
- **[#103358](https://github.com/NousResearch/hermes-agent/pull/103358)** `perf(prefix-cache): pin workspace snapshot and memory block` — 解决 compaction 边界后前缀缓存失效（#103326），同时处理 volatile memory 漂移 + 上游 Tier 2 git 探测抖动。
- **[#103353](https://github.com/NousResearch/hermes-agent/pull/103353)** `feat(local-models): add advanced runtime and gateway routes` — 为本地模型引入 context、inference slots、KV cache 类型、MTP 设置的预览与生效路径，并在 gateway 上安全发布。
- **[#103346](https://github.com/NousResearch/hermes-agent/pull/103346)** `feat(delegation): operator-defined worker profiles` — 子代理委托引入命名 worker profile（provider / model / reasoning / fallback），两阶段落地。
- **[#103354](https://github.com/NousResearch/hermes-agent/pull/103354)** `feat(slack): add durable thread leave and rejoin` — Slack 线程持久化静音/退出/重新加入，支持 allowlist 失败安全。
- **[#103136](https://github.com/NousResearch/hermes-agent/pull/103136)** `feat: add native asynchronous user input` — Hermes 原生异步结构化用户输入 API（1–5 个问题、durable request_id），打通 Agent API + Desktop。
- **[#61218](https://github.com/NousResearch/hermes-agent/pull/61218)** `feat(matrix): add compact matrix/matrix_admin tools` — Matrix 适配器以工具形式暴露 reactions / history / presence / 管理操作（仍 OPEN，自 7 月起 review 中）。
- **[#103357](https://github.com/NousResearch/hermes-agent/pull/103357)** `fix(desktop): wrap transcript output instead of horizontal scroll` — 修复 #101311，Desktop 转录区改为纯竖向滚动。
- **[#103356](https://github.com/NousResearch/hermes-agent/pull/103356)** `fix(auth): stop healthy Codex pool accounts from appearing quota-exhausted` — 修复 #103349，处理 Codex 凭据池毫秒级 `last_error_reset_at` 被误判为 429。

整体而言，今日 **项目向前推进显著**：至少 8 个面向用户的功能/性能 PR 进入待合并，Bot Group Chat 这一长期愿景性议题终于有了"完整现场构建"的 PR。

---

## 4. 社区热点

### 🔥 讨论最活跃

| 排名 | Issue / PR | 评论数 | 主题 |
|------|-----------|--------|------|
| 1 | [#66616](https://github.com/NousResearch/hermes-agent/issues/66616) | **157** | `skills-index-watchdog` 自动化探针报告索引陈旧（29.8h > 26h 阈值）— 由 sweeper bot 自动维护，**反映 ops 自动化已建立但 Skills Hub 的 cron 工作流（`skills-index.yml` / `deploy-site.yml`）存在偶发不执行**。社区诉求：要么提高 cron 鲁棒性，要么延长限值并提供手动 rebuild 入口。|
| 2 | [#97681](https://github.com/NousResearch/hermes-agent/issues/97681) | **23** | "Bot Group Chats should keep working after Desktop closes" — 强烈共识帖：用户在多机（笔记本 / homelab / VPS）部署 bot，希望 Desktop 关闭后群聊仍能运转。PR #98307 即为对此的全面应答。 |
| 3 | [#102930](https://github.com/NousResearch/hermes-agent/issues/102930) | **6** 👍=1 | Desktop SSH 模式 401 回归（d3630f8532 引入），**有多份重复 issue**（#103054、#103313 已 closed/duplicate）。 |
| 4 | [#103015](https://github.com/NousResearch/hermes-agent/issues/103015) | **5** | GPT-6 Astra 模型全链路兼容性 tracker（上游 `b0ab2e163a…` 尚未暴露该模型目录）。 |
| 5 | [#103339](https://github.com/NousResearch/hermes-agent/issues/103339) | **3** | state.db 在 4 天内被损坏 7 次的"实锤"复现 + lazy flock 单写者 gate 提案。 |

**诉求分析**：社区当前的真实痛点集中于 **(1) 多机部署下的会话/凭据一致性**、(2) 新引入的 refactor（"whole-codebase simplification" #102117）带来的回归、(3) 越来越复杂的模型/Provider 矩阵（GPT-6 Astra、Codex、本地 Qwen3.8、DeepSeek）下的认证与配额管理。

---

## 5. Bug 与稳定性

### 🔴 P1（高严重度 — 影响生产/安全/数据完整性）

| Issue | 标题 | 是否有修复 PR | 备注 |
|-------|------|--------------|------|
| [#102930](https://github.com/NousResearch/hermes-agent/issues/102930) | Desktop SSH 模式 401（`d3630f8532` 引入，token 是 import-time 快照） | ⚠️ 仅 duplicate (#103313 已 closed)，**尚无独立 fix PR 在今日列表中可见** | 影响所有 Linux 远程 SSH 用户 |
| [#103054](https://github.com/NousResearch/hermes-agent/issues/103054) | Dashboard stale session token（duplicate） | ❌ | 与 #102930 同源 |
| [#103339](https://github.com/NousResearch/hermes-agent/issues/103339) | 多 profile host 上 `doctor --fix` / `repair_state_db_schema` / `hosted_rooms` 触发 state.db WAL 损坏 | ✅ **#103359**（重新加宽 12 个 mixin 文件的 SessionDB 锁门控） | 4 天 7 次损坏，**lazy flock 单写者 gate** 提案已附实现思路 |
| [#98022](https://github.com/NousResearch/hermes-agent/issues/98022) | `hermes update` 在 stale `update_receipts/latest.json` 时无尽重启 | ❌ | 关联 #95294 / #91277 / #92145 |
| [#90318](https://github.com/NousResearch/hermes-agent/issues/90318) | `hermes auth reset` 被 binding cooldown 压制（DeepSeek 充值后无法恢复） | ✅ **PR #90318** | 安全边界 P1 |

###  P2（影响核心体验）

| Issue | 标题 | 是否有修复 PR |
|-------|------|--------------|
| [#96418](https://github.com/NousResearch/hermes-agent/issues/96418) | Loopback 绑定禁用 WS keepalive ping，反代后每死连接泄漏 PTY 子进程 | ❌ |
| [#102170](https://github.com/NousResearch/hermes-agent/issues/102170) | Agent 在 PC / Atlas profile 同步后混淆 active gateway | ❌ |
| [#102110](https://github.com/NousResearch/hermes-agent/issues/102110) | Local Model 不工作（Qwen3.8 27B-UD-Q4_K_M） | ❌，关联 #102619 |
| [#102619](https://github.com/NousResearch/hermes-agent/issues/102619) | Desktop 把 27B 模型标为"Too big for this machine"（M5 Max 128GB） | ❌ |
| [#101311](https://github.com/NousResearch/hermes-agent/issues/101311) | macOS Desktop 输出区出现横向滚动条 | ✅ **#103357** |
| [#102302](https://github.com/NousResearch/hermes-agent/issues/103302) | subagent worktree 隔离静默退化为共享 cwd 并污染父 repo `.gitignore` |  |
| [#103287](https://github.com/NousResearch/hermes-agent/issues/103287) | `/steer` 无活跃 run 时确认 queued 但静默遗留文本 | ❌ |
| [#103230](https://github.com/NousResearch/hermes-agent/issues/103230) | Desktop profile wake 请求在 3 槽队列中无限期挂起 | ❌ |
| [#103257](https://github.com/NousResearch/hermes-agent/issues/103257) | `hermes cron` / `webhook` 子命令失败时仍 exit 0 |  |
| [#103244](https://github.com/NousResearch/hermes-agent/issues/103244) | Windows Git Bash 把 `2>NUL` 变成工作区里字面量 `NUL` 文件 | ❌ |
| [#103349](https://github.com/NousResearch/hermes-agent/issues/103349) | Codex 池毫秒级 `last_error_reset_at` 误判健康凭据为 429 | ✅ **#103356** |
| [#103287](https://github.com/NousResearch/hermes-agent/issues/103287) | `/steer` 静默遗留 | ❌ |
| [#103349](https://github.com/NousResearch/hermes-agent/issues/103349) | Codex 凭据误判 | ✅ #103356 |
| [#103355](https://github.com/NousResearch/hermes-agent/issues/103355) | LCM 上下文引擎下压缩尝试预算永不重装 | ❌ |

### 🟢 P3 / 边缘 / 历史回归

- [#101311](https://github.com/NousResearch/hermes-agent/issues/101311) Desktop macOS 横向滚动 ✅ #103357 修复
- [#103303](https://github.com/NousResearch/hermes-agent/issues/103303) kanban `decompose_triage_task` scratch 兄弟节点共享根 workspace_path
- [#103303](https://github.com/NousResearch/hermes-agent/issues/103303) 同上
- [#103244](https://github.com/NousResearch/hermes-agent/issues/103244) Windows Git Bash NUL 设备误处理
- [#9730](https://github.com/NousResearch/hermes-agent/issues/9730) Docker sandbox `--init` 在受限主机上 O_PM 拒绝（自 2026-04 起未结，仍 OPEN）
- [#24740](https://github.com/NousResearch/hermes-agent/issues/24740) Honcho sessionStrategy 被自动会话标题覆盖（自 2026-05 起）
- [#102408](https://github.com/NousResearch/hermes-agent/issues/102408) Windows 上技能同步把 `.DS_Store` 当用户修改冻结包更新
- [#100610](https://github.com/NousResearch/hermes-agent/issues/100610) UI 内无法安装 pip 包（podman quadlet 环境）
- [#101311](https://github.com/NousResearch/hermes-agent/issues/101311) macOS Desktop 横向滚动（已修）

### 稳定性趋势判断
- 🔴 **SSH 401 回归已形成 issue 簇**（#102930 + #103054 + #103313），但**今日 PR 列表中未见直接的 fix PR**（PR 提交者可能尚未跟进）— 这是 0.21.x 紧急版本最大的隐患。
- 🟡 **`refactor: whole-codebase simplification` (#102117) 的回归波仍在继续**（state.db mixin 数量从 4 涨到 12 引发 #103359、SSH token 变 import-time 快照 #102930）。
- 🟢 **跨平台（Windows + macOS）+ 多 profile + 容器化**三类部署场景下的问题密度明显增加，建议下个版本单独开 "deployment hardening" changelog 段。

---

## 6. 功能请求与路线图信号

| PR / Issue | 内容 | 路线图概率 |
|------------|------|------------|
| [#103015](https://github.com/NousResearch/hermes-agent/issues/103015) + [#103246](https://github.com/NousResearch/hermes-agent/issues/103246) | GPT-6 Astra 全链路支持（含异步请求约束、native compaction）| 🟢 高 — 已有 tracker + 后续 #103019 / #103183 依赖链 |
| [#103360](https://github.com/NousResearch/hermes-agent/issues/103360) | Desktop 独占 Group Chat 管理 API |  高 — 与 #98307 PR 配套，方向一致 |
| [#100428](https://github.com/NousResearch/hermes-agent/issues/100428) | `browser_exec` 按本地 session 选择 headed 模式 | 🟡 中 — 配置扩展，非架构变更 |
| [#103346](https://github.com/NousResearch/hermes-agent/pull/103346) | 子代理 worker profile | 🟢 高（已 PR） |
| [#102631](https://github.com/NousResearch/hermes-agent/pull/102631) | Kanban 任务创建下拉框改为按 assignee 限定 skills | 🟢 高（已 PR） |
| [#95377](https://github.com/NousResearch/hermes-agent/pull/95377) | `excel_line` Excel 长期记忆插件 | 🟡 中 — 社区插件，需维护者 review 标记 invalid |
| [#98307](https://github.com/NousResearch/hermes-agent/pull/98307) | Bot Group Chat 完整现场构建 | 🟢 高

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报

**日期：2026-09-05**
**项目：sipeed/picoclaw**
**数据周期：过去 24 小时**

---

## 1. 今日速览

PicoClaw 今日呈现典型的"批量清理日"特征：过去 24 小时内共有 22 个 PR 被处理，其中 20 个已合并/关闭，仅 2 个处于 OPEN 状态待审；同期 Issue 端活跃度较低（4 条新开/活跃，0 条关闭）。重点合入内容覆盖 Telegram/Slack/Feishu 三大渠道的稳定性修复、OpenAI 兼容层（含 xAI、Azure AI Foundry）的能力补齐，以及默认开放 Bot 的安全审计强化。社区反馈方向集中在 Web UI 性能与渠道兼容性，整体健康度良好，但存在明显的积压清理痕迹（多条 PR 标注 `[stale]` 才被关闭）。

**活跃度评级：⭐⭐⭐⭐ 高（维护侧持续推进，但用户侧活跃度一般）**

---

## 2. 版本发布

**本周期无新版本发布。**

最近一次发版为 0.3.1（nightly），今日合并的多项修复（Web UI 性能、QQ 渠道鉴权、Telegram 流式重复消息等）尚未进入新的版本号体系，预计将在下一个 nightly 或 stable 版本中体现。

---

## 3. 项目进展

今日 20 个 PR 完成合并/关闭，项目在以下方向取得实质推进：

### 🛠️ 渠道稳定性（Channels）
- **[#2092](https://github.com/sipeed/picoclaw/pull/2092)** `fix(telegram): avoid duplicate messages on streaming edit timeouts` — 修复 Telegram 流式投递中占位编辑超时导致的重复消息问题。
- **[#2090](https://github.com/sipeed/picoclaw/pull/2090)** `fix(telegram): resolve streaming redundant drafts and routing` — 修复 Forum/Topic 路由错乱及最终消息残留草稿问题。
- **[#1855](https://github.com/sipeed/picoclaw/pull/1855)** `fix(identity): support negative integers in isNumeric for Telegram group IDs` — 修正负数群组/频道 ID 被误判的问题。
- **[#2089](https://github.com/sipeed/picoclaw/pull/2089)** `fix(slack): resolve mention race condition and unify chatID logic` — 修复 Slack `message` + `app_mention` 重复触发与会话碎片化。
- **[#2091](https://github.com/sipeed/picoclaw/pull/2091)** `fix(feishu): resolve group mention detection by probing bot name` — 飞书群组 @ 检测回退机制。

### 🤖 模型提供方（Providers）
- **[#1683](https://github.com/sipeed/picoclaw/pull/1683)** `feat(openai_compat): implement strict mode compatibility for third-party providers` — 自动剥离 `strict: true`，为 Ollama/vLLM/DeepSeek/Groq 提供容错。
- **[#1858](https://github.com/sipeed/picoclaw/pull/1858)** `fix(providers): add thinking and reasoning fallback for OpenAI-compatible providers (Ollama)` — 解决 DeepSeek-R1 类推理模型在 Ollama 上的输出丢失问题。
- **[#1860](https://github.com/sipeed/picoclaw/pull/1860)** `fix(providers): add Azure AI Foundry host recognition` — 识别 `*.services.ai.azure.com`，启用 prompt caching 与原生搜索。
- **[#2260](https://github.com/sipeed/picoclaw/pull/2260)** `feat(providers): add xAI compat support` — 新增 xAI 提供方。
- **[#2240](https://github.com/sipeed/picoclaw/pull/2240)** `feat(providers): support GitHub Copilot stdio transport` — GitHub Copilot stdio 支持。
- **[#2522](https://github.com/sipeed/picoclaw/pull/2522)** `fix(openai_compat): request stream usage` — OpenAI/Azure OpenAI 启用 `stream_options.include_usage`。

### 🧠 Agent 核心
- **[#1854](https://github.com/sipeed/picoclaw/pull/1854)** `fix(agent): occurrence-aware tool call id sanitization` — 解决 Anthropic/Cerebras 上的 400 Bad Request。
- **[#2014](https://github.com/sipeed/picoclaw/pull/2014)** `fix(agent): include SystemParts in token estimation` — token 估算更准，降低上下文溢出风险。
- **[#2016](https://github.com/sipeed/picoclaw/pull/2016)** `fix(providers): improve context overflow detection` — 增强 Anthropic/ZhipuAI/GLM 上下文溢出识别。

### 🔒 安全与工具
- **[#2088](https://github.com/sipeed/picoclaw/pull/2088)** `fix(channels): add security audit for open-by-default bots` — 警告空 `allow_from` 风险。
- **[#2298](https://github.com/sipeed/picoclaw/pull/2298)** `fix(exec): fail closed on ambiguous script preflight` — exec 脚本预检"失败闭合"策略。
- **[#3337](https://github.com/sipeed/picoclaw/pull/3337)** `Fix/mcp failure hangs agent loop` — MCP 服务器不可达时不再挂死 Agent 主循环。

### 📚 文档
- **[#3368](https://github.com/sipeed/picoclaw/pull/3368)** `docs: add Parallel Search MCP setup example` — 新增 Parallel Search MCP 配置示例。
- **[#3367](https://github.com/sipeed/picoclaw/pull/3367)** `docs: add Pilot MCP setup example` — 新增 Pilot Protocol MCP 配置示例。

**进展评估：今日是一次跨多领域的大规模整合日，Telegram/Slack/Feishu 三大主流渠道的稳定性有显著提升，模型提供方生态更加完善，Agent 核心的健壮性也得到加强。**

---

## 4. 社区热点

### 最活跃 Issues

| 排名 | Issue | 标题 | 评论数 | 👍 |
|---|---|---|---|---|
| 🥇 | [#3287](https://github.com/sipeed/picoclaw/issues/3287) | Better support long messages in IRC | 10 | 0 |
| 🥈 | [#3281](https://github.com/sipeed/picoclaw/issues/3281) | Web UI chat input is very laggy when history has a little bit long | 9 | 2 |

### 最活跃 PR（评论最多）

今日 PR 列表的 `评论数` 字段均为 `undefined`（即 0 条讨论），表明这些 PR 都是相对独立、争议较小的修复，合并阻力小。

### 诉求分析

- **IRC 长消息**（[#3287](https://github.com/sipeed/picoclaw/issues/3287)）：用户希望 PicoClaw 能识别 IRCv3 协议下的自动分片（512 字节切片）并重组为一条逻辑消息，反映了 PicoClaw 在 IRC 这一传统渠道上的语义理解短板。
- **Web UI 输入卡顿**（[#3281](https://github.com/sipeed/picoclaw/issues/3281)）：影响 0.3.1 版本 Web 用户，长会话历史下输入框卡顿，需要前端虚拟滚动或渲染优化。👍=2 说明该问题已获得社区关注。
- **OpenAI 兼容提供方**（[#3366](https://github.com/sipeed/picoclaw/issues/3366)）：用户希望支持自定义 OpenAI 兼容端点（如 9Router 等自托管路由器）。

---

## 5. Bug 与稳定性

### 🔴 高优先级（用户感知强烈）

1. **Web UI 输入卡顿**
   - Issue: [#3281](https://github.com/sipeed/picoclaw/issues/3281)
   - 影响：所有使用 0.3.1 Web UI、聊天历史较长的用户
   - 修复 PR：**暂无** ⚠️
   - 状态：标记为 BUG，待维护者响应

2. **QQ 渠道 401 鉴权失败**
   - Issue: [#3365](https://github.com/sipeed/picoclaw/issues/3365)
   - 根因：`botgo v0.2.1` 与 `resty v2.17.1` 兼容性问题，导致 `Authorization` 参数格式错误
   - 设备：Orange Pi 3B（RK3566 aarch64）
   - 修复 PR：**暂无** ⚠️
   - 状态：今日新开，需要上游 `botgo` 配合修复

### 🟡 中优先级

3. **Telegram 流式重复消息** — 已由 [#2092](https://github.com/sipeed/picoclaw/pull/2092)、[#2090](https://github.com/sipeed/picoclaw/pull/2090) 修复 ✅
4. **Telegram Forum 路由错乱** — 已由 [#2090](https://github.com/sipeed/picoclaw/pull/2090) 修复 ✅
5. **Slack mention 重复触发** — 已由 [#2089](https://github.com/sipeed/picoclaw/pull/2089) 修复 ✅
6. **飞书 @ 误判** — 已由 [#2091](https://github.com/sipeed/picoclaw/pull/2091) 修复 ✅
7. **MCP 失败挂死 Agent** — 已由 [#3337](https://github.com/sipeed/picoclaw/pull/3337) 修复 ✅
8. **Anthropic 工具调用 400** — 已由 [#1854](https://github.com/sipeed/picoclaw/pull/1854) 修复 ✅

### 严重程度总结

| 严重级别 | 未修复 | 已修复 |
|---|---|---|
| 🔴 高 | 2 | 0 |
| 🟡 中 | 0 | 6 |
| 🟢 低 | 0 | 多项 |

**整体稳定性显著提升，但仍有两个高优先级 Bug 待处理：Web UI 性能与 QQ 渠道鉴权。**

---

## 6. 功能请求与路线图信号

| 需求 | Issue | 与已有 PR 的契合度 | 入选下版本可能性 |
|---|---|---|---|
| 自定义 OpenAI 兼容端点 | [#3366](https://github.com/sipeed/picoclaw/issues/3366) | 与 [#1683](https://github.com/sipeed/picoclaw/pull/1683)（openai_compat strict mode）路径一致，基础已具备 | 🟢 高 |
| IRC 长消息合并 | [#3287](https://github.com/sipeed/picoclaw/issues/3287) | 无直接相关 PR，需新增协议层处理 | 🟡 中（取决于维护者对 IRC 渠道的优先级判断） |
| Pilot MCP / Parallel Search MCP 文档 | 文档 PR [#3367](https://github.com/sipeed/picoclaw/pull/3367) / [#3368](https://github.com/sipeed/picoclaw/pull/3368) | 文档示例，可能随下版本一并发布 | 🟢 高 |

**信号解读：**
- 文档侧 MCP 生态正在快速扩张（Pilot、Parallel Search 已成新示例）；
- 模型层方向明确：**广兼容 + 严格模式容错**（xAI、Azure AI Foundry、Ollama 推理模型同步推进）；
- 渠道侧进入"打磨期"，从功能扩展转向稳定性与一致性修复。

---

## 7. 用户反馈摘要

### 🎯 真实痛点

- **Web 端长会话卡顿**（[#3281](https://github.com/sipeed/picoclaw/issues/3281)）：9 条评论，用户普遍反映 v0.3.1 的 Web UI 在历史稍长时输入字符都有明显延迟，影响日常使用体验。社区建议方向包括虚拟列表、消息懒渲染、分页加载等。
- **IRC 长消息被错误切分**（[#3287](https://github.com/sipeed/picoclaw/issues/3287)）：10 条评论，10 评论 0 点赞说明讨论热烈但关注度未上升，核心矛盾是 PicoClaw 把 IRC 客户端自动切分的同一条消息当作多条独立消息处理，破坏上下文。
- **QQ 渠道完全不可用**（[#3365](https://github.com/sipeed/picoclaw/issues/3365)）：新开 Issue，用户在 RK3566 设备上无法连接 QQ，根因指向上游依赖 `botgo`/`resty`，用户希望 PicoClaw 给出 workaround。

### 😊 满意方向（从 PR 合入节奏推断）

- MCP 生态集成持续扩展（用户对 Pilot/Parallel Search 等新型 MCP 服务有明确兴趣）；
- 多平台渠道（Telegram/Slack/Feishu）的稳定改进获得快速响应；
- 模型提供方覆盖面（xAI、Azure AI Foundry、Ollama）持续增长。

### 😞 不满方向

- Web UI 长期未优化（v0.3.1 已发布仍未解决）；
- 部分用户依赖的 QQ 渠道遇到上游依赖兼容问题，缺乏变通方案；
- IRC 等小众渠道的需求优先级不高。

---

## 8. 待处理积压

### 🔥 维护者需重点关注的长期未响应 Issue

| Issue | 标题 | 创建日期 | 最新更新 | 持续天数 |
|---|---|---|---|---|
| [#3287](https://github.com/sipeed/picoclaw/issues/3287) | IRC 长消息合并 | 2026-07-22 | 2026-09-04 | ~45 天，10 评论无解 |
| [#3281](https://github.com/sipeed/picoclaw/issues/3281) | Web UI 输入卡顿 | 2026-07-21 | 2026-09-04 | ~45 天，高频反馈，👍=2，无修复 |

### 📌 今日仍处 OPEN 的 PR（待合并）

| PR | 标题 | 类型 | 备注 |
|---|---|---|---|
| [#3368](https://github.com/sipeed/picoclaw/pull/3368) | docs: add Parallel Search MCP setup example | 文档 | 今日新开，等待 review |
| [#3367](https://github.com/sipeed/picoclaw/pull/3367) | docs: add Pilot MCP setup example | 文档 | 昨日新开，等待 review |

### ⚠️ 历史 stale PR 清理提示

今日关闭的多条 PR（如 [#3337](https://github.com/sipeed/picoclaw/pull/3337)、[#1683](https://github.com/sipeed/picoclaw/pull/1683)、[#1854](https://github.com/sipeed/picoclaw/pull/1854)、[#1858](https://github.com/sipeed/picoclaw/pull/1858)、[#2090](https://github.com/sipeed/picoclaw/pull/2090)、[#2089](https://github.com/sipeed/picoclaw/pull/2089)、[#2091](https://github.com/sipeed/picoclaw/pull/2091)、[#2240](https://github.com/sipeed/picoclaw/pull/2240)、[#2260](https://github.com/sipeed/picoclaw/pull/2260)、[#2298](https://github.com/sipeed/picoclaw/pull/2298)、[#2522](https://github.com/sipeed/picoclaw/pull/2522) 等）均为 `[stale]` 状态，表明项目存在一定程度的 PR 积压。

**[#1541](https://github.com/sipeed/picoclaw/pull/1541)** `fix: merge PR #1536 #1535 #1531` — 这是一条合并多个早期修复的"合并 PR"，跨度从 2026-03 到 2026-09，今日才被关闭，侧面印证了项目历史上积压了较多改动。建议维护者建立更频繁的 stale 清理与批量合入机制。

---

## 📊 综合健康度评分

| 维度 | 评分 | 说明 |
|---|---|---|
| 🚀 开发活跃度 | ⭐⭐⭐⭐ | 22 PR 处理，多领域推进 |
| 🐛 Bug 响应速度 | ⭐⭐⭐ | 6 项渠道 Bug 当日修复，但 Web UI/QQ 卡 45 天 |
| 💬 社区互动 | ⭐⭐⭐ | Issues 评论活跃，但 PR review 偏冷淡（多数 0 评论） |
| 📚 文档更新 | ⭐⭐⭐⭐ | 主动扩展 MCP 生态文档 |
| 🔒 安全意识 | ⭐⭐⭐⭐⭐ | 主动加固开放 Bot 与 exec 预检 |

**总评：项目处于稳健的迭代打磨期，渠道与模型层的稳定性显著提升，但 Web UI 性能与 QQ 鉴权两个高优先级 Bug 急需维护者关注。**

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目日报 · 2026-09-05

---

## 1. 今日速览

NanoClaw 今日维持高强度迭代节奏，过去 24 小时共出现 **2 条新 Issue** 与 **18 条 PR 更新**（其中 15 条待合并、3 条关闭），但**无新版本发布**。从结构上看，活跃贡献高度集中在核心维护者 **zvi-fried** 名下，围绕"Provider 契约重构 + Skills 安装加固"两大主题推进了大量中长期待合并的 PR；同时新冒出的 **#3716（生产 OOM 崩溃循环）** 是一例需要立即关注的高优先级稳定性问题。整体项目处于"架构重构集中落地 + 关键缺陷同步修复"的并行阶段，社区健康度良好，但维护者审阅负荷显著偏高。

---

## 2. 版本发布

 **无新版本发布**。过去 24 小时未发布任何 Release tag。最近一次版本动作仅为已关闭的 [PR #2403](https://github.com/qwibitai/nanoclaw/pull/2403)，即用显式 Release workflow 替换 `bump-version` 脚本并加入并发保护，这表明团队正在为后续发版流程做收尾改造。

---

## 3. 项目进展

今日**关闭/合并的 PR 共 3 条**，全部为修复类与 CI 改造类，未包含功能新增：

| PR | 标题 | 意义 |
|---|---|---|
| [#2403](https://github.com/qwibitai/nanoclaw/pull/2403) | ci: replace bump-version with explicit Release workflow + concurrency guard | 改用显式 Release workflow 并增加并发保护，避免多次发布时竞态。**CI/发布基础设施加固。** |
| [#2232](https://github.com/qwibitai/nanoclaw/pull/2232) | fix(chat-sdk-bridge): fall back to URL fetch for adapters without fetchData | 修复没有 `fetchData` 能力的适配器回退到 URL 抓取，提升兼容性。 |
| [#2231](https://github.com/qwibitai/nanoclaw/pull/2231) | feat(chat-sdk-bridge): add sendAsRaw flag to bypass adapter Markdown round-trip | 允许发送原始消息绕过适配器的 Markdown 往返解析，对消息保真度提升明显。 |

**整体进展评估**：今日合入的均为"修边、补漏"型补丁，并非新增用户可见能力。项目真正在向前推进的核心工作——**Provider 契约重构** 与 **Skills 安装流程加固**——仍沉淀在 10+ 条由 zvi-fried 提交、跨度长达数周的开放 PR 中，尚未进入主线。这些工作如果集中合入，将带来一次较大的架构层面跃迁（详见第 6 节）。

---

## 4. 社区热点

按评论数与近期更新密度排序，当前最值得关注的活跃话题：

1. **[Issue #3716](https://github.com/qwibitai/nanoclaw/issues/3716) — PreCompact 对话存档触发 OOM 崩溃循环**（2 条评论）
   - 作者 DawoudIO，附带了**生产环境真实崩溃**的证据。
   - 受关注原因：直接命中 NanoClaw 在长会话场景下的稳定性短板，影响付费/严肃用户。
2. **[Issue #3714](https://github.com/qwibitai/nanoclaw/issues/3714) — Operator 环境变量覆盖无法传入 session 容器**（0 条评论）
   - 作者 nilsborg，标记为 [#1820](https://github.com/qwibitai/nanoclaw/issues/1820) 的后续 follow-up。
   - 话题本身具有"环境配置可观察性"属性，会吸引运维类用户共鸣。
3. **[PR #3592](https://github.com/qwibitai/nanoclaw/pull/3592) — 为 agent group 新增 core-owned `speed` 推理档位**
   - 跨多个 area（agent-runner / configuration / ncl-cli），是少数面向终端用户可见的新属性；面向 agent 调用方有审批门控，符合"operator 优先"路线。
4. **[PR #3720](https://github.com/qwibitai/nanoclaw/pull/3720) — Skills 源码安装能力 + 受保护恢复**
   - 直接解决"如何给 agent 加新能力"的核心用户痛点，且默认关闭、要求 operator 显式启用 Git 检出，安全性叙事完整，社区反馈预期较高。

**热点背后的诉求归纳**：
- **稳定性 > 功能**：OOM、env 变量丢失、mount 绕过（#3680）这一类"看不见的运行时故障"权重最高。
- **可控安装体验**：#3720 / #3721 / #3715 三条 PR 都指向同一个方向——让安装新工具/MCP/Skill 变得**显式、可审计、可回滚**。
- **多 Provider 一致性**：zvi-fried 一连串 Provider 契约 PR 反映的是"OpenCode / Codex / Cursor 不同 provider 行为发散"的内部统一诉求。

---

## 5. Bug 与稳定性 ️

按严重程度排序（均出现在最近 24-48 小时窗口）：

| 级别 | Issue/PR | 现象 | 是否有 Fix |
|---|---|---|---|
| 🔴 **P0 - 生产崩溃** | [#3716](https://github.com/qwibitai/nanoclaw/issues/3716) | `PreCompact` hook 每次触发都写入全新、未轮转的全量会话文件，直接撑爆内存 → **OOM 崩溃循环** | ❌ 暂无 fix PR，需立即关注 |
| 🟠 **P1 - 安全绕过** | [PR #3680](https://github.com/qwibitai/nanoclaw/pull/3680) | `validateSpec` 中 allowlisted-extra mount 存在绕过路径，可挂载未授权目录 | ✅ 已提交 fix（prathish-ks），待合并 |
|  **P1 - 容器配置丢失** | [#3714](https://github.com/qwibitai/nanoclaw/issues/3714) | 3 个 operator 级别环境变量（自动压缩窗口、转录轮转）从未被注入 session 容器 |  暂无 fix PR |
| 🟡 **P2 - A2A 路由** | [PR #3718](https://github.com/qwibitai/nanoclaw/pull/3718) | agent-to-agent 消息发送方身份丢失 → 合法请求被拒 | ✅ 已提交 fix（Koshkoshinsk） |
| 🟡 **P2 - A2A 反馈缺失** | [PR #3719](https://github.com/qwibitai/nanoclaw/pull/3719) | 通信失败、审批延迟、永久投递失败均不会回告源 chat | ✅ 已提交 fix（Koshkoshinsk） |
| 🟢 **P3 - 提示注入** | [PR #3717](https://github.com/qwibitai/nanoclaw/pull/3717) | 嵌入 payload 可关闭当前 prompt 块并伪造结构边界（prompt 注入风险） | ✅ 已提交 fix（petrolette） |

**维护建议**：#3716 与 #3714 均无对应修复 PR，建议维护者在本周内确认归属并指派 owner，否则 #3716 可能在长会话用户群中持续放大影响。

---

## 6. 功能请求与路线图信号

### 直接对应的开放功能 PR（高度可能被纳入下一版本）

- **[#3592](https://github.com/qwibitai/nanoclaw/pull/3592) `speed` 推理档位**：与 `model` / `effort` 并列的 core-owned 属性，对用户可见、可命令行配置 → **进入 vNext 的可能性：极高**。
- **[#3720](https://github.com/qwibitai/nanoclaw/pull/3720) `ncl skills list / plan / apply`**：受 operator 门控的 source 安装能力，叙事与"可控安装"主线一致 → **可能性：极高**。
- **[#3721](https://github.com/qwibitai/nanoclaw/pull/3721) Skills 显式调用 + 操作员策略**：与 #3720 强绑定，几乎会同步落地 → **可能性：极高**。
- **[#3715](https://github.com/qwibitai/nanoclaw/pull/3715) Zapier MCP 工具 Skill**：operator 侧 skill，避免把私有 token 写入 NanoClaw 配置 → **可能性：高**（与"安全接入第三方 SaaS"路线一致）。
- **[#3355](https://github.com/qwibitai/nanoclaw/pull/3355) + [#3356](https://github.com/qwibitai/nanoclaw/pull/3356) Cursor Agent SDK 接入**：Provider 系列扩展 → **可能性：高**（但需等 #3586 合同定型）。

### 间接暗示的路线图信号

- **Provider 契约重构**（[#3586](https://github.com/qwibitai/nanoclaw/pull/3586) / [#3591](https://github.com/qwibitai/nanoclaw/pull/3591) / [#3588](https://github.com/qwibitai/nanoclaw/pull/3588) / [#3584](https://github.com/qwibitai/nanoclaw/pull/3584) / [#3722](https://github.com/qwibitai/nanoclaw/pull/3722)）：这一系列 PR 共同说明团队正在从"每个 provider 自由发挥"转向"core-owned canon + provider 声明式事实"。**这是底层架构级变更，预计会作为某一里程碑版本（如 0.x → 1.x）的合并节点**。

---

## 7. 用户反馈摘要

从 Issue 文本与摘要可提炼的真实使用场景与痛点：

- **长会话用户（DawoudIO, #3716）**：在生产环境触发 `PreCompact` 后，conversation-archive 目录无任何轮转/上限机制，导致内存耗尽进入崩溃循环。**核心诉求：会话存档必须有界、必须可清理。**
- **自托管运维（nilsborg, #3714）**：operator 在宿主机上设置的 `CLAUDE_CODE_AUTO_COMPACT_*` 等环境变量根本不会传到容器内，等价于"功能存在但不可用"。**核心诉求：环境变量链路应打通，或在文档中明确禁用。**
- **多 Provider 用户（社区, 间接）**：从 zvi-fried 集中提交的 6 条 Provider PR 可以反推——用户在不同 provider（Codex / OpenCode / Cursor）之间切换时，行为不一致、配置项命名不统一。**核心诉求：跨 provider 的一致体验。**
- **Agent-to-Agent 集成方（Koshkoshinsk, #3718/#3719）**：现网部署中 agent 消息送达后无法识别真实发送方，错误诊断信息缺失。**核心诉求：失败可见、可调试、可追溯。**

**满意度信号**：目前没有"赞扬/满意"类反馈被记录，主要为问题报告与改进建议。这与项目当前仍处于"密集迭代 + 暴露真实生产问题"的阶段相符，**属于健康的产品反馈分布**。

---

## 8. 待处理积压 ⚠️

以下 PR 跨越数周仍未合并，建议维护者本周内集中评审，避免"维护者单点瓶颈"：

| PR | 提交日期 | 已等待 | 主题 | 关注理由 |
|---|---|---|---|---|
| [#3355](https://github.com/qwibitai/nanoclaw/pull/3355) | 2026-08-19 | ~17 天 | `/add-cursor` provider install skill | 与 #3356 互相阻塞 |
| [#3356](https://github.com/qwibitai/nanoclaw/pull/3356) | 2026-08-19 | ~17 天 | Cursor Agent SDK provider payload | 同上 |
| [#3584](https://github.com/qwibitai/nanoclaw/pull/3584) | 2026-08-27 | ~9 天 | Codex provider 契约实施 | Provider 重组主线 |
| [#3586](https://github.com/qwibitai/nanoclaw/pull/3586) | 2026-08-27 | ~9 天 | setup provider 契约与安装校验 | Provider 重组主线（基础） |
| [#3588](https://github.com/qwibitai/nanoclaw/pull/3588) | 2026-08-27 | ~9 天 | OpenCode provider 契约实施 | Provider 重组主线 |
| [#3591](https://github.com/qwibitai/nanoclaw/pull/3591) | 2026-08-27 | ~9 天 | 从 core-owned canon 渲染 provider 指令 | Provider 重组主线 |
| [#3592](https://github.com/qwibitai/nanoclaw/pull/3592) | 2026-08-28 | ~8 天 | `speed` 推理档位 | 用户可感知的新功能 |
| [#3680](https://github.com/qwibitai/nanoclaw/pull/3680) | 2026-08-30 | ~6 天 | 关闭 mount allowlist 绕过 | **安全修复，应优先** |

**维护者提示**：以上 8 条 PR 中有 **6 条由 zvi-fried 一人提交**，且其中至少 5 条是相互依赖的 Provider 架构重构。建议核心维护组（core-team）在本周内组织一次集中评审 + 合并，避免单点延误拖累整条 Provider 主线。

---

### 📊 今日数据看板

| 指标 | 数值 |
|---|---|
| 新开/活跃 Issues | 2 |
| 已关闭 Issues | 0 |
| 待合并 PR | 15 |
| 已关闭 PR | 3 |
| 新版本发布 | 0 |
| 核心维护者 PR 占比 | ~70%（zvi-fried） |
| 🔴 P0 级未修复 Bug | 1 |
| 🟠 P1 级未修复 Bug | 2 |

> **总体健康度评分**：⭐⭐⭐☆☆（3.5/5）  
> 亮点：架构重构系统性强、A2A 与安全问题响应快；扣分项：P0 OOM 无 fix 跟进、核心维护者集中度过高、无新版本产出。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目日报

**日期：2026-09-05**
**数据周期：过去 24 小时**

---

## 1. 今日速览

NullClaw 今日整体活跃度处于**低位运行**状态。过去 24 小时内仅有 1 条 Issue 获得更新（#993），无 PR 提交、合并或关闭，也无新版本发布。社区互动节奏放缓，项目处于相对静默的维护期。从健康度角度看，仓库未出现异常告警、Bug 激增或突发讨论，但 Issues/PRs 通道均无新增流入，说明社区反馈流处于阶段性低谷。维护者当前无需应对紧急事务，但建议关注积压 Issue 的响应节奏。

---

## 2. 版本发布

无新版本发布。本节略。

---

## 3. 项目进展

过去 24 小时内**无 PR 合并或关闭**，项目代码层面今日无实质性推进。仓库的 `main` 分支处于等待状态，未有功能落地或回退发生。建议维护者关注是否有长期筹备中的 PR 处于可合并临界点，以保持代码基线活力。

---

## 4. 社区热点

今日唯一活跃条目为：

- **#993 – [enhancement] feat: make Firecrawl search endpoint configurable for self-hosted instances**
  - 作者：Crymfox | 创建：2026-08-24 | 最近更新：2026-09-04 | 评论数：1 | 👍：0
  - 链接：https://github.com/nullclaw/nullclaw/issues/993
  - **诉求分析**：当前内置的 Firecrawl 搜索提供者（`src/tools/web_search_providers/firecrawl.zig`）将 API 端点硬编码为 `https://api.firecrawl.dev/v1/search`，导致自托管（self-hosted）部署无法复用原生 `search_provider: "firecrawl"` 配置。该请求本质上是希望补齐配置灵活性的"最后一公里"，属于典型的企业/隐私敏感场景需求。
  - **热度评估**：互动量较低（仅 1 条评论、0 个 👍），但话题具有明确的工程价值，针对性强，可能在后续获得更多共鸣。

---

## 5. Bug 与稳定性

过去 24 小时**未报告新的 Bug、崩溃或回归问题**。项目当前未观测到稳定性异常。如后续出现性能或功能缺陷报告，建议优先关注：

- 搜索提供者链路的网络异常处理（与 #993 相关场景的潜在隐患）
- Zig 编译器版本升级带来的兼容性问题（项目以 Zig 编写，长期看是潜在风险点）

---

## 6. 功能请求与路线图信号

| 优先级信号 | Issue | 描述 | 路线图可能性 |
|---|---|---|---|
| ⭐⭐⭐ 中高 | [#993](https://github.com/nullclaw/nullclaw/issues/993) | Firecrawl 端点可配置化 | **高**——实现成本低（仅需读取环境变量/配置项替换硬编码字符串），且与"自托管支持"项目定位高度契合 |

**判断依据**：该 Issue 的改动范围局限在单个 Zig 文件的一行常量替换，PR diff 极小，技术风险低；属于"低成本高价值"的增强，建议维护者在下一个 minor 版本（如有 release 计划）中优先纳入。由于目前无对应 PR 提交，尚无法判断社区是否会主动推进实现。

---

## 7. 用户反馈摘要

基于 #993 的 1 条评论可提炼如下信号：

- **痛点场景**：存在自托管 Firecrawl 实例的用户（典型为企业内网部署、隐私合规要求高的场景）当前被官方客户端"排斥"，必须改源码或绕路使用其他搜索提供者。
- **隐含期待**：用户希望 NullClaw 在保持开箱即用的同时，提供合理的配置扩展点，避免"硬编码 SaaS 端点"这类 vendor lock-in 式的设计。
- **满意度信号**：暂无负面反馈，但也未见对现有 firecrawl 实现的肯定评论，整体社区情绪呈中性、观望。

---

## 8. 待处理积压

| Issue | 标题 | 创建距今 | 状态 | 提醒建议 |
|---|---|---|---|---|
| [#993](https://github.com/nullclaw/nullclaw/issues/993) | feat: make Firecrawl search endpoint configurable | ~12 天 | OPEN | 已超 10 天无实质性进展，建议维护者**至少给出意向回复**（acknowledgment），避免贡献者流失 |

**整体积压评估**：仓库当前活跃 Issue 极少，#993 是唯一一条值得标记的"待响应"条目。项目维护者压力较低，建议利用这段静默期：

1. 对 #993 做出 triage 回复（标记为 `good first issue` 或直接给出实现方向）
2. 清理/关闭已 stale 的历史 Issue
3. 准备下一个版本的 changelog 与发布说明

---

## 附录：项目健康度看板

| 指标 | 当前值 | 评估 |
|---|---|---|
| 24h Issue 活跃度 | 1 | 🟢 正常（偏低） |
| 24h PR 流动 | 0 | 🟡 静默 |
| 24h Releases | 0 | 🟡 静默 |
| 待处理 Issue（已知） | ≥1 | 🟢 极低积压 |
| 最新版本时间 | 未知 | ⚠️ 建议核实 |

---

*本报告基于公开 GitHub 数据自动生成。数据快照时间：2026-09-05。*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目日报 · 2026-09-05

> 数据来源：[nearai/ironclaw](https://github.com/nearai/ironclaw) | 报告窗口：过去 24 小时

---

## 1. 今日速览

IronClaw 今日活跃度处于**中高位**：过去 24 小时共出现 **7 条 Issue 更新** 与 **13 条 PR 更新**，新版本发布为 0。从结构上看，仓库处于两路并行的密集整理期——**thisisjoshford** 推动 Telegram 集成的若干长期缺陷闭环（命令清单、配对流程、错误信息），**italic-jinxin** 则一次性提交 4 个 WebUI 斜杠命令菜单的 UX 缺陷及其对应修复 PR。整体看，这是一个"修 bug + 打磨体验"为主、稳健收敛的一天，没有大规模重构或新功能落地。

---

## 2. 版本发布

**无新版本发布。**

---

## 3. 项目进展

今日有 **4 条 PR 已合并/关闭**，均集中在缺陷修复与稳定性改进，未涉及破坏性变更。

| PR | 标题 | 作者 | 影响范围 |
|---|---|---|---|
| [#8073](https://github.com/nearai/ironclaw/pull/8073) | fix(device-link): 显示"管理员未配置"而非归咎用户账号 | thisisjoshford | Telegram 个人账号链接流程 |
| [#8054](https://github.com/nearai/ironclaw/pull/8054) | fix(assistant): 在命令准入前先做配对检查 | thisisjoshford | Telegram 首次接触体验 |
| [#8062](https://github.com/nearai/ironclaw/pull/8062) | fix(llm): 在 OpenAI 请求路径发送对话缓存键 | henrypark133 | LLM 网关性能与一致性 |
| [#8060](https://github.com/nearai/ironclaw/pull/8060) | ci(nextest): 给全树架构扫描预留充足超时 | henrypark133 | CI 基础设施 |

**亮点**：
- **#8054** 修复了一个影响新用户首次接触的体验裂缝——未配对用户首次 `/start` 直接拿到命令清单（看起来像"可用的机器人功能"），而非配对提示。该修复将配对/绑定查询前置到命令准入之前，让首条消息自然引导到 connect 流程。
- **#8062** 在 loop-host 网关处派生一个**域分离（domain-separated）的伪匿名 prompt-cache key**，并在 OpenAI Responses / 兼容 Chat Completions 全路径携带，可显著降低长对话与 tool-loop 迭代中的重复 token 成本。
- **#8060** 将三项 `reborn_*_location_scan` 全树扫描从 176.8s（接近 180s 上限）下移到不会压垮 CI 的安全区间，是一次安静的"稳定性债务清理"。

---

## 4. 社区热点

由于多数 Issue 仍处于"提交即分配、PR 同步落地"状态，**评论与点赞密度都很低**（绝大多数为 0 评论、0 👍）。今日热点更多体现在"同一作者在同一窗口内批量产出"上，反映的是**内部节奏**而非外部讨论。

按作者聚合活跃度：

| 作者 | 活跃度 | 代表作 |
|---|---|---|
| **thisisjoshford** | 高（3 PR + 2 Issue 已关闭 + 1 新 Issue） | [#8054](https://github.com/nearai/ironclaw/pull/8054) / [#8073](https://github.com/nearai/ironclaw/pull/8073) / [#8074](https://github.com/nearai/ironclaw/issues/8074) |
| **italic-jinxin** | 高（4 Issue + 4 PR） | [#8063](https://github.com/nearai/ironclaw/issues/8063) / [#8064](https://github.com/nearai/ironclaw/issues/8064) / [#8065](https://github.com/nearai/ironclaw/issues/8065) / [#8066](https://github.com/nearai/ironclaw/issues/8066) |
| **henrypark133** | 中（2 PR 关闭，2 PR 进行中） | [#8062](https://github.com/nearai/ironclaw/pull/8062) / [#8067](https://github.com/nearai/ironclaw/pull/8067) |
| **jlwaugh**（new contributor） | 低但有信号 | [#8059](https://github.com/nearai/ironclaw/pull/8059) |

**诉求分析**：
- **italic-jinxin** 集中的 4 个 Issue 暴露出"**斜杠命令菜单这一交互区一直没有被系统化打磨**"——结果卡片会折叠、元数据不对齐、没有关闭按钮、键盘导航会丢失当前项。这是非常典型的"功能做完后再做细节打磨"阶段。
- **thisisjoshford** 的工作则集中在 **Telegram 通道的 onboarding 文案与错误降级**，反映用户从"看到了机器人"到"完成配对"再到"开始使用"的整条路径中仍存在多处语义不友好的边缘情况。

---

## 5. Bug 与稳定性

按严重程度排列：

### 🔴 高 — 用户首次接触即触发
- **[#7956](https://github.com/nearai/ironclaw/issues/7956)**（已关闭）— Telegram 未配对用户首次 `/start` 拿到命令清单而非连接提示。✅ 已通过 [#8054](https://github.com/nearai/ironclaw/pull/8054) 修复。
- **[#7955](https://github.com/nearai/ironclaw/issues/7955)**（已关闭）— 管理员未配置 `telegram_api_id/hash` 时显示通用"Something went wrong"，错误归咎于用户。✅ 已通过 [#8073](https://github.com/nearai/ironclaw/pull/8073) 修复。

### 🟡 中 — 已识别修复路径、PR 待合并
- **[#8066](https://github.com/nearai/ironclaw/issues/8066)** — 命令结果卡片在累积后会被压扁成只剩边框。修复 PR [#8071](https://github.com/nearai/ironclaw/pull/8071) OPEN。
- **[#8065](https://github.com/nearai/ironclaw/issues/8065)** — 斜杠命令菜单元数据对齐不一致。修复 PR [#8070](https://github.com/nearai/ironclaw/pull/8070) OPEN。
- **[#8064](https://github.com/nearai/ironclaw/issues/8064)** — 命令结果卡片缺失关闭动作。修复 PR [#8069](https://github.com/nearai/ironclaw/pull/8069) OPEN。
- **[#8063](https://github.com/nearai/ironclaw/issues/8063)** — 斜杠命令菜单键盘导航丢失可见项。修复 PR [#8068](https://github.com/nearai/ironclaw/pull/8068) OPEN。

### 🟡 中 — 无修复
- **[#8074](https://github.com/nearai/ironclaw/issues/8074)**（OPEN）— 已配对用户在未连接的共享频道被拒时，错误文案错用了"未配对用户"的 connect 提示。这是一个文案路由问题（不同上下文用了同一模板），尚未关联修复 PR。

### 🟢 低 — 后端/基础设施
- **[#8059](https://github.com/nearai/ironclaw/pull/8059)**（OPEN）— `POST /api/v1/responses/{id}/cancel` 在进行中与已完成两种状态下都返回 `400 invalid_request`，且运行不停止；`reason` 字段硬编码值与解析器不匹配。这是 Responses API 的可用性缺陷，新贡献者 jlwaugh 提交修复。

---

## 6. 功能请求与路线图信号

| 信号 | 来源 | 已有 PR？ | 落地概率判断 |
|---|---|---|---|
| **Telegram Bot API 命令菜单自动注册**（`/model`、`/status`、`/new`、`/stop`、`/interrupt`） | [#8072](https://github.com/nearai/ironclaw/pull/8072) (size: L) | 已是 PR | **高**——单一贡献者驱动，scope 清晰，预计短期可合 |
| **命令结果卡片可关闭** | [#8064](https://github.com/nearai/ironclaw/issues/8064) / [#8069](https://github.com/nearai/ironclaw/pull/8069) | 是 | 高 |
| **斜杠命令菜单键盘 / 指针导航自动滚动** | [#8063](https://github.com/nearai/ironclaw/issues/8063) / [#8068](https://github.com/nearai/ironclaw/pull/8068) | 是 | 高 |
| **Subagent 后台投递自愈**（boot/periodic sweep，R4） | [#8067](https://github.com/nearai/ironclaw/pull/8067) (size: XL) | 是 | 中——R 系列规划中的独立里程碑，需 review 走完 |
| **Subagent 并发子任务上限（R2 遗留）** | [#8061](https://github.com/nearai/ironclaw/pull/8061) (size: M) | 是 | 中 |

**值得关注的子主题**：henrypark133 正在系统化推进 **Subagent R 系列债务清理**（R2 并发上限、R3 child-gate 卡片复放验证、R4 boot/periodic 自愈），呈现出"按里程碑逐项交付"的节奏——这是路线图执行力的良好信号。

---

## 7. 用户反馈摘要

由于几乎所有 Issue 评论数均为 0、点赞数均为 0，**直接用户反馈稀缺**。可提炼的"准反馈"主要来自 Issue 描述本身反映出的开发者视角痛点：

- **新用户首屏体验混乱**（#7956, #8074）：未配对与已配对但未连接这两种不同语义状态，在共享频道被映射到了同一份"请连接你的账号"的文案。这反映出当前 manifest 模板在**用户上下文维度缺乏精细路由**。
- **运维配置缺失时的错误归因错误**（#7955）：管理员未配 `api_id/hash` 时，终端用户被告知"你的账号链接出问题"——这是典型的"错误降级链路没有按责任方切分"的 UX 反模式，#8073 已修正。
- **命令卡片是临时面板却不能关闭**（#8064）：用户反复执行 `/model`、`/status` 等命令后，结果卡片不断累积，**消耗对话空间**——反映出当前把"命令结果"和"消息"混在同一渲染流的架构决策开始反噬体验。
- **Telegram 用户希望的可见性**：#8072 显式把 Bot API 的 chat menu button 接到 manifest，意味着**频道侧声明的命令应当自动出现在 Telegram 的汉堡菜单里**，这是符合用户预期的。

> 📌 注：由于评论与点赞数据稀疏，本节提炼以 Issue 描述为依据。建议关注者后续在 Issue 上互动以沉淀更多一手信号。

---

## 8. 待处理积压

| 项 | 类型 | 状态 | 关注点 |
|---|---|---|---|
| **[#8074](https://github.com/nearai/ironclaw/issues/8074)** | Issue（OPEN） | 新提交，无关联 PR | 配对用户文案路由 bug，与 #7955/#7956 同一族，建议 thisisjoshford 关注 |
| **[#8072](https://github.com/nearai/ironclaw/pull/8072)** | PR（OPEN, size: L） | 待 review | Bot API 命令菜单注册，size 大但 risk 低，需要核心维护者过目 |
| **[#8059](https://github.com/nearai/ironclaw/pull/8059)** | PR（OPEN） | 新贡献者首次提交 | Responses API cancel 永远失败，是一个 **API 层面的关键缺陷**，建议优先 review |
| **[#8067](https://github.com/nearai/ironclaw/pull/8067)** | PR（OPEN, size: XL） | R 系列主线 | Subagent 后台投递 boot-pass，size: XL + 涉及 subagent lifecycle，需要架构级 review |
| **[#8061](https://github.com/nearai/ironclaw/pull/8061)** | PR（OPEN, size: M） | R 系列债务 | 含 R3 3b 验证 + R2 上限，建议拆分 review |
| **[#7988](https://github.com/nearai/ironclaw/pull/7988)** | PR（OPEN） | 自动生成 | `Codebase Graph Refresh` 自动化 PR，自 8 月 29 日起挂起 7 天，需例行合并 |

---

## 📊 项目健康度评估

| 维度 | 评分 | 说明 |
|---|---|---|
| **Commit / Merge 节奏** | ⭐⭐⭐⭐ | 4 关闭 / 9 待合并，比例健康，无积压 |
| **Bug 响应速度** | ⭐⭐⭐⭐ | 6 条 Telegram/WebUI Bug 中 4 条当日配对修复 PR，2 条已落地 |
| **功能演进** | ⭐⭐⭐ | 无新版本，无新模块，专注缺陷修复与体验打磨 |
| **社区互动** | ⭐⭐ | Issue/PR 评论与点赞近乎为零，需培养社区参与氛围 |
| **架构清晰度** | ⭐⭐⭐⭐ | R 系列路线图（Subagent R2/R3/R4）按里程碑推进，信号良好 |

**一句话总结**：今天的 IronClaw 是一个**修补匠式的高效一天**——没有大动作，但把"用户首次接触的尴尬"和"斜杠命令菜单的细节"两处长期粗糙面在 24 小时内整体推进了一格。下一步值得关注的，是 R 系列 PR 的合并节奏与 #8059 这类 API 层关键缺陷的修复路径。

---
*报告生成于 2026-09-05，数据基于 GitHub 公开事件。*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报
**日期：2026-09-05**
**仓库：** [netease-youdao/LobsterAI](https://github.com/netease-youdao/LobsterAI)

---

## 1. 今日速览

LobsterAI 项目在过去 24 小时内呈现**高强度集中发版**特征：连续两天发布 `2026.9.3` 与 `2026.9.4` 两个版本，伴随 **33 条 PR 流转**（28 条已合并/关闭，5 条待处理），单日合并量显著高于项目平均水平。开发节奏集中于浏览器内嵌能力、协同（cowork）登录体验、订阅恢复引导与 IM 机器人卡片优化四大主线。Issue 端活跃度偏低（仅 1 条陈旧问题被重新激活），社区讨论热度主要体现在发布窗口与 PR 评审。整体判断：**项目处于持续迭代与产品打磨期，节奏健康**。

---

## 2. 版本发布

### 📦 v2026.9.4（2026-09-04 发布）
合并 PR：[#2618](https://github.com/netease-youdao/LobsterAI/pull/2618)

**主要更新：**
- **浏览器功能升级** ([#2602](https://github.com/netease-youdao/LobsterAI/pull/2602))：恢复交互式应用内浏览器（in-app browser），支持保存凭据、页面导航、可关闭 Tab 等操作。
- **更新流程优化** ([#2609](https://github.com/netease-youdao/LobsterAI/pull/2609))：安装前与退出前增加确认弹窗，避免用户误操作导致数据丢失或更新中断。
- **其他**：发布流程完善，包含 renderer/main/artifacts 等多模块协同修复与文档更新。

**破坏性变更：** 无明显破坏性变更记录。

**迁移注意：** Windows 平台下应用内浏览器相关功能依赖 Electron 启动器，若使用 Unicode 路径请同步参考 [#2615](https://github.com/netease-youdao/LobsterAI/pull/2615) 的修复说明。

---

### 📦 v2026.9.3（2026-09-03 发布）

**主要更新：**
- **协同模式登录引导** ([#2573](https://github.com/netease-youdao/LobsterAI/pull/2573))：未登录用户提交聊天消息前显示登录提示。
- **应用内浏览器** ([#2574](https://github.com/netease-youdao/LobsterAI/pull/2574))：新增交互式应用内浏览器模块。
- **Onboarding 流程**：新增初始用户引导逻辑与埋点。

---

## 3. 项目进展（今日已合并/关闭重要 PR）

| 类别 | PR | 说明 |
|------|----|------|
| 🚀 **发版** | [#2618](https://github.com/netease-youdao/LobsterAI/pull/2618) | v2026.9.4 发布主干合并 |
| 🌐 **浏览器** | [#2616](https://github.com/netease-youdao/LobsterAI/pull/2616) | 限制 Skill 审计执行时长，避免 CI 因 npm audit 端点异常而阻塞 |
|  **浏览器** | [#2615](https://github.com/netease-youdao/LobsterAI/pull/2615) | Windows 启动器改为 UTF-8 读取路径，修复含 Unicode 路径场景下的浏览器 MCP 启动失败 |
| 🌐 **浏览器** | [#2617](https://github.com/netease-youdao/LobsterAI/pull/2617) | 改进应用内登录提示与 Tab 控件（**仍 OPEN**，下一版本候选） |
| 💬 **协同** | [#2612](https://github.com/netease-youdao/LobsterAI/pull/2612) | 登录刷新期间保留模型显示，避免列表瞬时为空导致误操作 |
| 💬 **协同** | [#2573](https://github.com/netease-youdao/LobsterAI/pull/2573) | 未登录用户提交消息前显示登录弹窗 |
| 📤 **发布/订阅** | [#2613](https://github.com/netease-youdao/LobsterAI/pull/2613) | 完善订阅恢复引导、资源状态同步与埋点 |
| ⚙️ **配置** | [#2614](https://github.com/netease-youdao/LobsterAI/pull/2614) | 测试模式服务端 API 地址回退至标准内网环境 |
| 🖱️ **基础体验** | [#2503](https://github.com/netease-youdao/LobsterAI/pull/2503) | Electron 文本输入控件注册标准编辑右键菜单（Cut/Copy/Paste/Select All） |
| 🧩 **Skills** | [#2501](https://github.com/netease-youdao/LobsterAI/pull/2501) | 技能升级进度浮层改为挂载到 `document.body`，覆盖整个应用 Shell |
| 🤖 **IM** | [#2599](https://github.com/netease-youdao/LobsterAI/pull/2599) | 多实例机器人卡片布局优化（最多两列响应式） |
| 📊 **分析埋点** | [#2596](https://github.com/netease-youdao/LobsterAI/pull/2596) | 跟踪聊天登录 CTA 点击事件，完善 onboarding 分析 |
| 🌐 **i18n** | [#2603](https://github.com/netease-youdao/LobsterAI/pull/2603) | 语音配额耗尽提示文案改用新的「免费试用订阅」措辞 |
| ️ **侧边栏** | [#2532](https://github.com/netease-youdao/LobsterAI/pull/2532) | 免费 Token 提示 5 秒后淡出，鉴权状态变更时清理定时器 |
| 🔌 **插件** | [#2520](https://github.com/netease-youdao/LobsterAI/pull/2520) | 插件安装弹窗支持长错误日志滚动，新增关闭按钮与 IPC 错误防护 |
| 🖱️ **协同** | [#2521](https://github.com/netease-youdao/LobsterAI/pull/2521) | 右键上下文菜单触发前保留消息文本选中状态 |

**整体判断：** 今日合并内容覆盖了**产品体验打磨**（编辑菜单、上下文菜单、技能升级浮层）、**商业链路闭环**（订阅恢复引导）、**稳定性**（CI 超时、Unicode 路径、模型显示保护）三大方向，**未涉及大型架构变更**。属于典型的发版前整合日。

---

## 4. 社区热点

由于 Issue 端活跃度极低，今日社区讨论主要围绕发布窗口内的 PR 评审。从 PR 标签与贡献者分布看：

- **最活跃贡献者**：`liuzhq1986`（约 12+ 条 PR 流转，占当日 PR 总量的 36%以上），承担了发版主干、协同、IM、i18n、侧边栏等多条线。
- **次活跃贡献者**：`btc69m979y-dotcom`（聚焦应用内浏览器与 CI 优化）、`liugang519`（订阅恢复与配置）。
- **热点诉求分析**：
  - 用户对**应用内浏览器**作为独立模块的能力诉求强烈（`2026.9.3` 新增后 `2026.9.4` 即优化 Tab 与登录反馈，说明用户反馈已回流至开发端）。
  - **订阅/付费链路**问题（[#2613](https://github.com/netease-youdao/LobsterAI/pull/2613)）得到集中修复，反映商业化用户对**续费后资源未恢复**的痛点较为普遍。

---

## 5. Bug 与稳定性

| 严重度 | 问题 | 状态 |
|--------|------|------|
| 🔴 **高** | SQLite `ON DELETE CASCADE` 失效导致孤儿消息累积 — 见 [Issue #1071](https://github.com/netease-youdao/LobsterAI/issues/1071) | **未修复**，已陈旧 6 个月 |
| 🔴 **高** | SQLite `save()` 非原子写入，崩溃后数据库损坏 — 见 [Issue #1071](https://github.com/netease-youdao/LobsterAI/issues/1071) | **未修复**，已陈旧 6 个月 |
|  **中** | `storeInitPromise` 初始化超时后导致功能永久故障 — 见 [Issue #1071](https://github.com/netease-youdao/LobsterAI/pull) | **未修复**，已陈旧 6 个月 |
|  **中** | Windows 路径含 Unicode 时浏览器 MCP 启动失败 — 见 [PR #2615](https://github.com/netease-youdao/LobsterAI/pull/2615) | ✅ **已修复** |
|  **中** | npm audit 端点异常导致 Skill CI 阻塞 — 见 [PR #2616](https://github.com/netease-youdao/LobsterAI/pull/2616) | ✅ **已修复** |
| 🟢 **低** | 登录刷新期间模型列表瞬时为空 — 见 [PR #2612](https://github.com/netease-youdao/LobsterAI/pull/2612) | ✅ **已修复** |

**重点关注：** [Issue #1071](https://github.com/netease-youdao/LobsterAI/issues/1071) 报告中提到的 SQLite 三个数据完整性缺陷相互关联，可能在生产环境造成**数据丢失或功能永久不可用**。该 Issue 自 2026-03-30 创建后虽被标记 `[stale]` 但未关闭，且 `👍: 0`、`评论: 1` 的低互动数据可能掩盖了真实严重性，**建议维护者优先 review**。

---

## 6. 功能请求与路线图信号

- **应用内浏览器的能力扩展**（已纳入 `2026.9.4`）：登录反馈可关闭、Tab 滚动条、相邻 Tab 关闭行为（[#2617](https://github.com/netease-youdao/LobsterAI/pull/2617) 仍 OPEN，极有可能进入 `2026.9.5`）。
- **订阅恢复链路完善**（#2613）：包含「自动恢复」与「订阅后重新部署」两种模式区分、定价页返回后刷新、恢复入口埋点等，**显示出明显的商业化变现推进**。
- **Skills/插件生态稳定化**：CI 审计超时加固（#2616）、安装弹窗长错误处理（#2520）、升级进度浮层（#2501）三条 PR 集中修复开发者侧体验，**预示项目在向第三方扩展生态方向加大投入**。
- **IM 多机器人协作**（#2599, #2523）：机器人卡片布局与图标完善，**IM 集成仍是产品重点方向**。

---

## 7. 用户反馈摘要

由于 Issue 端评论量极低（Issue #1071 仅 1 条评论），今日可观测的用户反馈主要来自 PR 描述中的动机说明与代码 review 暗示：

- **「登录刷新时模型短暂消失令人困惑」** — 来自 [#2612](https://github.com/netease-youdao/LobsterAI/pull/2612)：用户在登录态切换瞬间看到空列表，可能误以为配置丢失。
- **「订阅过期后资源不自动恢复」** — 来自 [#2613](https://github.com/netease-youdao/LobsterAI/pull/2613)：付费用户对续费/重新订阅后的体验恢复链路有明显不满。
- **「插件安装失败时按钮被长错误日志遮挡」** — 来自 [#2520](https://github.com/netease-youdao/LobsterAI/pull/2520)：第三方插件开发者在安装报错时无法操作。
- **「Windows 用户名含中文时浏览器启动失败」** — 来自 [#2615](https://github.com/netease-youdao/LobsterAI/pull/2615)：国际化环境下的兼容性问题。

**满意度信号：** 连续两日发版、应用内浏览器快速迭代与多个体验细节打磨，表明团队对用户反馈的响应速度较快。

---

## 8. 待处理积压

| 项目 | 链接 | 状态 | 风险 |
|------|------|------|------|
| SQLite 存储层 3 项数据完整性缺陷 | [Issue #1071](https://github.com/netease-youdao/LobsterAI/issues/1071) | 陈旧 6 个月，OPEN，无修复 PR | 🔴 数据丢失风险 |
| 应用内浏览器登录与 Tab 控件优化 | [PR #2617](https://github.com/netease-youdao/LobsterAI/pull/2617) | OPEN，等待评审 | 🟢 优先级中等 |

**维护者提醒：** Issue #1071 的严重性（涉及**数据完整性**与**功能永久故障**）与目前的低互动度（0 👍, 1 评论）形成错配，建议在下一个迭代周期内安排一次**安全/稳定性专项 review**。该 Issue 已接近半年未响应，存在用户信任流失风险。

---

> **日报小结：** LobsterAI 在 9 月初进入密集发版期，`2026.9.3 → 2026.9.4` 连续两个版本覆盖了浏览器、协同、订阅、IM 等核心场景。开发侧活跃度高、合并节奏快，但 Issue 端存在的长期未处理数据完整性问题应当被优先关注，以避免随用户量增长演变为重大事故。
>
> 📅 下一份日报预计于 2026-09-06 同步更新。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目日报 — 2026-09-05

---

## 1. 今日速览

Moltis 项目今日活跃度处于**较低水平**。过去 24 小时内仅有 1 条新 Issue 提出（#1259，关于推理/思考级别持久化配置的功能增强请求）以及 1 条待合并 PR（#1258，为 external-agents 模块新增 AGY CLI 直接流式传输支持）。无新版本发布，无已关闭或合并的 Issue/PR。整体来看，社区进入一个相对安静的迭代间隔期，但提交内容均指向 **多代理体验与模型推理控制** 这两个方向，方向性较为一致。

---

## 2. 版本发布

**今日无新版本发布。** 最近窗口内未观察到任何 Release 标签的发布动作。

---

## 3. 项目进展

今日**无 PR 合并或关闭**，因此无直接的代码合并进展可以汇报。

值得关注的开放中 PR：

- **[#1258 feat(external-agents): add direct AGY streaming](https://github.com/moltis-org/moltis/pull/1258)**
  - 作者：GTanger
  - 状态：OPEN（待合并）
  - 内容：为 `external-agents` 模块增加对官方 `agy` CLI 的一级流式传输支持，复用其已有的 Google OAuth 会话，避免强依赖 Gemini CLI 或独立 API Key；同时将 AGY 版本化的 `stream-json` 输出翻译为 Moltis 的文本、推理（reasoning）、通知（notice）、工具调用、子代理、用量统计与可恢复会话事件。
  - 意义：这是项目在**降低外部代理接入门槛**与**统一事件流协议**方向上的进一步延伸。如顺利合并，将显著简化使用 Google OAuth 登录用户接入 AGY 的路径。

---

## 4. 社区热点

今日讨论量极低，仅 1 条新 Issue 且评论数为 0、点赞为 0，但仍可视为今日**唯一热点**：

- **[#1259 [Feature]: Configurable default reasoning/thinking level (persist across sessions)](https://github.com/moltis-org/moltis/issues/1259)**
  - 作者：Scentedtiger
  - 创建时间：2026-09-05
  - 标签：`enhancement`, `Feature`
  - 诉求：用户希望能够**全局配置默认的推理/思考级别（reasoning level）**，并让其**跨会话持久化**。当前模型行为（无思考 / 低 / 中 / 高）可能需要每次会话重新设置，用户期望一次设定、全局生效。
  - 反映诉求：这是典型的"配置项缺失导致重复操作"类需求，体现出 Moltis 用户对**会话间一致性体验**的重视，也暗示了设置中心或全局偏好体系仍有完善空间。

---

## 5. Bug 与稳定性

**今日未报告任何 Bug、崩溃或回归问题。** 无相关修复 PR 出现。短期内未观察到对稳定性产生负面影响的信号。

---

## 6. 功能请求与路线图信号

今日唯一的功能请求为：

- **[#1259 可配置的默认推理/思考级别（跨会话持久化）](https://github.com/moltis-org/moltis/issues/1259)**

**纳入下一版本的概率评估：中等偏上。** 理由如下：
- 该需求实现成本不高，主要涉及持久化存储（配置文件或数据库）和 UI 设置入口；
- 与当前 OpenAI o-series、Claude extended thinking、Gemini thinking 等模型能力日益普及的趋势一致；
- 不依赖 #1258 这类较重的架构变更，可独立实现。

建议维护者将其纳入下一迭代周期的"配置与偏好"主题批次，与其他全局默认设置（如默认模型、默认温度等）一并推进，以降低碎片化改动。

---

## 7. 用户反馈摘要

由于今日 Issue/PR 评论区均为空，**无新的用户评论反馈**可供提炼。可观察到的间接信号：

- **#1259** 反映出用户对"每次重新设置思考级别"的痛点，说明产品的**全局偏好系统**在体验上尚未完全到位；
- **#1258** 反映出贡献者对"避免用户配置额外 API Key"的关注，说明社区认可**零摩擦接入外部代理**是产品竞争力的一部分。

---

## 8. 待处理积压

在本次数据窗口内，仅有两条新增开放项（#1258、#1259），尚未观察到长期未响应的积压项。建议维护者重点关注：

- **[#1258 feat(external-agents): add direct AGY streaming](https://github.com/moltis-org/moltis/pull/1258)** — 这是提升外部代理易用性的关键 PR，若合并可显著拓展用户接入路径，建议在短期内安排 Review。
- **[#1259 Configurable default reasoning/thinking level](https://github.com/moltis-org/moltis/issues/1259)** — 单一用户功能请求，但与产品体验闭环紧密相关，建议至少给出回应性评论（如标记为 acknowledged、规划版本或请求补充用例），以维持社区参与感。

---

### 总体健康度评估

| 维度 | 评估 |
|------|------|
| 活跃度 | ★★☆☆☆ （低） |
| 代码合并节奏 | ★☆☆☆☆ （无） |
| 社区参与 | ★★☆☆☆ （仅 1 个 Issue，0 评论） |
| 方向一致性 | ★★★★☆ （代理能力 + 推理配置两条主线清晰） |
| 风险信号 | 低（无 Bug 报告） |

> 报告生成时间：2026-09-05｜数据来源：GitHub Issues / Pull Requests / Releases 公开 API

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw (QwenPaw) 项目日报 · 2026-09-05

> 数据周期：过去 24 小时 | 项目：[agentscope-ai/CoPaw](https://github.com/agentscope-ai/CoPaw)（仓库别名 QwenPaw）

---

## 1. 今日速览

CoPaw 仓库在过去 24 小时内继续保持高活跃度：共产生 **27 条 Issue 更新**（17 条新开/活跃、10 条关闭）和 **35 条 PR 更新**（21 条待合并、14 条已合并/关闭），但**无新版本发布**。从议题分布看，社区关注点集中在三个方向：**多租户 Hub 的规划讨论**（#7318 成为当日最高互动议题）、**Desktop 与 Web 端的一致性问题**（右键菜单、Loop 模式、产物展示等体验回归），以及 **2.2.x 稳定性的若干回归 Bug**（MCP 工具白名单失效、Volcengine Ark API 兼容、ReMe 后台任务失败、409/停止按钮无效等）。整体而言，项目处于 2.2 稳定版的密集迭代与修尾阶段，健康度良好。

---

## 2. 版本发布

⚠️ **今日无新版本发布。** 当前主线版本仍为 **2.2 / 2.2.0-beta.7 / 2.2.1b1**，多个与 2.2.x 相关的 Bug 已合入修复 PR（见下文），预计近期会发布 2.2.1 正式版或 2.2.2 补丁。

---

## 3. 项目进展（今日合并/关闭的 PR）

| PR | 状态 | 主题 | 影响 |
|---|---|---|---|
| [#7504](https://github.com/agentscope-ai/QwenPaw/pull/7504) | ✅ CLOSED | fix(mcp): 在 agent runtime path 上强制执行 MCP per-tool whitelist | **修复 #7470**：2.0 Driver 重构后 `card.config.tools` 仅用于展示，agent 工具箱仍能调用被禁用的 MCP 工具，本次通过为 MCP capability 打 `enabled` 标签解决。安全层面的一次重要回归修复。 |
| [#7183](https://github.com/agentscope-ai/QwenPaw/pull/7183) | ✅ CLOSED | feat(skills): workspace-scoped preload 配置 | 落地 #7182 的设计：Skills 默认按需加载，workspace 可对受信任的核心技能开启 `preload`，减少每轮首次调用的工具发现成本。 |
| [#7560](https://github.com/agentscope-ai/QwenPaw/pull/7560) | ✅ CLOSED | fix(console): preserve selected loop mode query | 修复 Loop 模式下 `beforeSubmit` 丢失 query、重复拼接前缀的问题，配套解决 #7552（前端 Loop 选择未传至后端）和 #7555（Loop 选择刷新后回退默认）两个 UX 体验问题。 |

**项目进展评估：** 这三项合并/关闭均为低风险但高信号：补齐了 2.0 驱动重构中遗留的**安全漏洞**（MCP 白名单失效）与**多端一致性 Bug**（Loop 模式 / 工作区 Skill 预加载）。这说明团队正以"先修回归，再加新特性"的节奏推进 2.2 稳定版。

---

## 4. 社区热点（按互动量排序）

| 排名 | Issue / PR | 评论 | 👍 | 主题 |
|---|---|---|---|---|
| 🥇 | [#7318](https://github.com/agentscope-ai/QwenPaw/issues/7318) | **22** | 3 | **QwenPaw Hub 多租户版 2.2.0 讨论**：从个人 AI 向团队协作演进的规划帖，社区建议集中于多用户访问、admin 管理的技能、审计日志、Hub DB 共享等。 |
| 🥈 | [#7505](https://github.com/agentscope-ai/QwenPaw/issues/7505) | 12 | 0 | 局域网 LM Studio + Qwen3.8 模型下，频繁 client disconnect 触发 LLM 重试直到超时。 |
|  | [#6921](https://github.com/agentscope-ai/QwenPaw/issues/6921) | 12 | 0 | 多步任务执行中规划输出后无提示停止（已关闭）。 |
| 4 | [#7469](https://github.com/agentscope-ai/QwenPaw/issues/7469) | 5 | 0 | ReMe 后台 embedding/indexing 因 `as_embedding:default accessed before start()` 静默失败，新记忆未入库。 |
| 5 | [#7559](https://github.com/agentscope-ai/QwenPaw/issues/7559) | 4 | 0 | 任务执行中发新消息触发 409 报错，而非入队。 |

**背后诉求：** 用户对"多用户团队协作"和"长任务连续性"两个方向的呼声最为强烈——前者推动 Hub 演进，后者（多步任务中断、新消息阻塞）暴露出当前 runtime 在**会话锁**与**任务调度**上的一致性问题。

---

## 5. Bug 与稳定性

按严重程度排列，标注是否已有修复 PR：

### 🔴 高严重度

1. **[#7470](https://github.com/agentscope-ai/QwenPaw/issues/7470) — MCP per-tool whitelist 在 agent runtime path 上未生效** ✅ 已有 PR [#7504](https://github.com/agentscope-ai/QwenPaw/pull/7504) 修复（已合并）。属于**安全级**回归。

2. **[#7534](https://github.com/agentscope-ai/QwenPaw/issues/7534) — 飞书 DM 会话 queue consumer 卡死，新消息无法进入**：高优先级卡片消息占用 consumer 后不返回，session 静默无响应。 暂无明确修复 PR。

3. **[#7567](https://github.com/agentscope-ai/QwenPaw/issues/7567) — 停止按钮显示已停止但实际仍在执行**（已关闭 close-and-review-later）：用户已点击停止且 UI 状态消失，但后台任务继续，刷新页面仍能看到执行中。❌ 暂无修复 PR，与 #7559 的 409 错误疑似同一根因（runtime 锁状态机不同步）。

4. **[#7496](https://github.com/agentscope-ai/QwenPaw/issues/7496) — CRITICAL 类型规则被直接拒绝而非触发询问**（已关闭）：governance 策略 `evaluate()` 实现与产品文档描述不一致。❌ 暂无修复 PR。

### 🟡 中严重度

5. **[#7549](https://github.com/agentscope-ai/QwenPaw/issues/7549) — Volcengine Ark Responses API 400 "MissingParameter: partial"**：当 `input` 以 assistant 文本 turn 结尾时被拒绝。❌ 暂无修复 PR。影响国内火山引擎用户关键路径。

6. **[#7469](https://github.com/agentscope-ai/QwenPaw/issues/7469) — ReMe 后台 embedding 任务静默失败**：依赖 `as_embedding:default` 未启动导致新记忆丢失。❌ 暂无修复 PR。

7. **[#7554](https://github.com/agentscope-ai/QwenPaw/issues/7554) — Windows shell 子进程继承控制台 stdin 导致共享 cmd 卡死**：缺少 `CREATE_NEW_PROCESS_GROUP` 与 `stdin=DEVNULL`。❌ 暂无修复 PR。

8. **[#7367](https://github.com/agentscope-ai/QwenPaw/issues/7367) — `_load_builtin_channels()` 无条件 import 全部 18 个渠道模块**，仅启用 console 时启动仍需 30-45 秒（`lark_oapi` 单包 18.5 秒）。❌ 暂无修复 PR。

9. **[#7505](https://github.com/agentscope-ai/QwenPaw/issues/7505) — 局域网 LLM Server 频繁 client disconnect 重试超时**：影响本地模型集成体验。❌ 暂无修复 PR。

### 🟢 低严重度（已关闭）

10. **[#7545](https://github.com/agentscope-ai/QwenPaw/issues/7545) — 桌面端右键复制缺失**（已关闭）
11. **[#7510](https://github.com/agentscope-ai/QwenPaw/issues/7510) — `/memory/status` 在 2.2.0-beta.7 Desktop 返回 500**（已关闭）
12. **[#6921](https://github.com/agentscope-ai/QwenPaw/issues/6921) — 多步任务中途静默停止**（已关闭）
13. **[#7023](https://github.com/agentscope-ai/QwenPaw/issues/7023) — 启动期 Playwright Chromium 安装阻塞 60s**（已关闭）

---

## 6. 功能请求与路线图信号

| 需求 | Issue / PR | 可能性评估 |
|---|---|---|
| **多租户 Hub（团队协作、admin 技能管理）** | [#7318](https://github.com/agentscope-ai/QwenPaw/issues/7318) | ⭐⭐⭐⭐⭐ 已在 PR [#7566](https://github.com/agentscope-ai/QwenPaw/pull/7566) 中推进 runtime lifecycle 非阻塞启动，作为 Hub 基础设施。 |
| **原生移动端（iOS/Android）** | [PR #7378](https://github.com/agentscope-ai/QwenPaw/pull/7378) | ⭐⭐⭐⭐ Expo/React Native 草案已提交（DO NOT MERGE），方向明确，进入设计阶段。 |
| **闲时任务调度（利用模型低谷折扣 / Batch API）** | [#7568](https://github.com/agentscope-ai/QwenPaw/issues/7568) | ⭐⭐ 成本优化方向，提案清晰，待产品评估。 |
| **PawPort 跨 Agent 导入（Codex / Qoder → QwenPaw）** | [PR #6960](https://github.com/agentscope-ai/QwenPaw/pull/6960) | ⭐⭐⭐ 体验导向，已提交端到端导入流程。 |
| **关系型存储后端（PostgreSQL / MySQL）** | [#7558](https://github.com/agentscope-ai/QwenPaw/issues/7558) | ⭐⭐ 针对 K8s/Swarm 高可用场景，长期需求。 |
| **Skill 版本与依赖元数据** | [#7557](https://github.com/agentscope-ai/QwenPaw/issues/7557) | ⭐⭐⭐ 多 Agent 舰队运维痛点。 |
| **MCP 驱动 fallback 链** | [#7556](https://github.com/agentscope-ai/QwenPaw/issues/7556) | ⭐⭐⭐ 多 agent 部署场景。 |
| **Console 侧边栏与设置重设计** | [PR #7502](https://github.com/agentscope-ai/QwenPaw/pull/7502) | ⭐⭐⭐ UX 改进，已提交。 |
| **可选关闭 About 身份签名行** | [PR #7551](https://github.com/agentscope-ai/QwenPaw/pull/7551) | ⭐⭐ 首次贡献者 PR。 |
| **MCP tool_call_timeout（默认 300s）** | [PR #6874](https://github.com/agentscope-ai/QwenPaw/pull/6874) | ⭐⭐⭐⭐ 长期开放 PR，已可审查。 |
| **Creator 1.1.2 创作者插件大版本** | [PR #7486](https://github.com/agentscope-ai/QwenPaw/pull/7486) | ⭐⭐⭐ 创作者向插件更新（多时间轴 T2V/I2V/S2V、媒体提示词、进程内锁、Windows 加固、Docker 部署）。 |

---

## 7. 用户反馈摘要

**真实痛点提炼（来自 Issue 评论）：**

- 🔸 **"任务控制不可信"**：多个用户反馈停止按钮失效（#7567）、新消息被 409 拒绝（#7559）、中途静默停止（#6921）——核心是 **runtime session 锁状态机与 UI 不同步**，是当前 2.2 最突出的体验问题。
- 🔸 **"多端行为不一致"**：桌面端右键无复制（#7545）、Loop 模式选择刷新后回退（#7555）、Desktop 启动慢 60 秒（#7023）——反映 Web/Desktop/CLI 三端尚未对齐 UX 细节。
-  **"长任务与多步执行"**：社区对"能否让 agent 不要规划完一句话就停下"的需求非常强烈（#6921 评论 12 条），是高频痛点。
- 🔸 **"本地模型集成"**：局域网 LM Studio、Volcengine Ark 等本地/国产模型供应商仍存在兼容性问题（#7505、#7549），影响本地化场景。
- 🔸 **"飞书等渠道的稳定性"**：#7534 暴露飞书 DM 单 consumer 卡死后 session 静默死锁，多渠道长跑场景的健壮性仍需提升。

**满意度信号：**
- 👍 多个用户对 Hub 多租户方向表达期待（#7318 拿到 3 个 👍），社区参与规划讨论意愿高。
- 👍 MCP whitelist 修复（#7504）从安全角度补齐了用户信任。
- 👎 没有任何"今日特别满意"型 Issue 出现，整体处于"修尾期焦虑"。

---

## 8. 待处理积压（提醒维护者关注）

| 类型 | Issue / PR | 开放天数 | 状态 |
|---|---|---|---|
| 🟥 长期开放 PR | [#6874 feat(mcp): tool call timeout](https://github.com/agentscope-ai/QwenPaw/pull/6874) | ~58 天 | 仍在 Under Review，建议优先合并。 |
| 🟥 长期开放 PR | [#6960 feat(pawport): import flow](https://github.com/agentscope-ai/QwenPaw/pull/6960) |

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目日报 · 2026-09-05

> 数据来源：[zeroclaw-labs/zeroclaw](https://github.com/zeroclaw-labs/zeroclaw) 过去 24 小时活动
> 报告生成时间：2026-09-05

---

## 1. 今日速览

ZeroClaw 仓库在 2026-09-05 呈现出 **"治理密集、安全优先"** 的典型成熟期特征：24 小时内共触达 **34 条 Issue**（24 活跃 / 10 已关闭）与 **50 条 PR**（43 待合并 / 7 已关闭），但**无新版本发布**——这与 v0.8.5 周线稳定化窗口已于 8 月 30 日收官（[Issue #9459](https://github.com/zeroclaw-labs/zeroclaw/issues/9459)）的节奏相符。**当日最显著的事件是 WhatsApp Web 安全漏洞闭环**（[Issue #9348](https://github.com/zeroclaw-labs/zeroclaw/issues/9348) + [#9397](https://github.com/zeroclaw-labs/zeroclaw/issues/9397)），连同若干 P1 工具执行与运行时缺陷（[#9421](https://github.com/zeroclaw-labs/zeroclaw/issues/9421)、[#9882](https://github.com/zeroclaw-labs/zeroclaw/issues/9882)）持续推动社区聚焦"安全可信"这一主题；同时 [RFC #9487](https://github.com/zeroclaw-labs/zeroclaw/issues/9487)（运行时拥有的会话与传输适配器）以 32 条评论稳坐讨论榜首，标志着 0.9.x 架构方向仍在持续打磨。整体健康度评估：**良好偏中位**——安全债与 RFC 治理并进，但缺少版本产出。

---

## 2. 版本发布

**无新版本发布**。

v0.8.5 稳定化线已按计划于 2026-08-30 收尾（[Tracker #9459](https://github.com/zeroclaw-labs/zeroclaw/issues/9459)）。从仓库动态来看，下一个版本应进入 [RFC #10330](https://github.com/zeroclaw-labs/zeroclaw/issues/10330) 中跟踪的"已接受 RFC 实现索引"驱动阶段，但仍需等待 maintainer 对多项重大 RFC（特别是 #9487、#6909）做出投票与快照决定。

---

## 3. 项目进展

当日共有 **7 条 PR** 进入已合并/已关闭状态，连同 **10 条 Issue** 关闭，主要方向集中在 **依赖收敛、安全加固、可观测性增强与文档补全**：

| 方向 | 关键事项 | 说明 |
|---|---|---|
| **安全闭环** | 关闭 [Issue #9348](https://github.com/zeroclaw-labs/zeroclaw/issues/9348) 与 [#9397](https://github.com/zeroclaw-labs/zeroclaw/issues/9397) | WhatsApp Web 在 `mode = business` 下默认回复所有 DM/群组、`allowed_groups` 为空等同于 permit-all 的 S1 级安全风险被 RFC 化明确收口 |
| **依赖收敛** | 关闭 [PR #10153](https://github.com/zeroclaw-labs/zeroclaw/pull/10153)（port to whatsapp-rust 0.7.0）与 [PR #10587](https://github.com/zeroclaw-labs/zeroclaw/pull/10587)（rust-all 49 项更新） | 6 个 git-pinned 依赖替换为 crates.io 0.7.0 版本，使 `zeroclaw-channels` 可对外发布；同时打开 [PR #10629](https://github.com/zeroclaw-labs/zeroclaw/pull/10629) 接力 42 项 rust-all 更新 |
| **运行时修复** | 关闭 [Issue #10357](https://github.com/zeroclaw-labs/zeroclaw/issues/10357)（工具错误体丢失）、[#10223](https://github.com/zeroclaw-labs/zeroclaw/issues/10223)（ZeroCode Ctrl+C 重连阻塞）、[#10390](https://github.com/zeroclaw-labs/zeroclaw/issues/10390)（Chat 面板阻塞导航） | 修复工具调用错误信息回传、ZeroCode 重连期间的输入可用性、TUI 模式切换时序问题 |
| **可观测性** | 关闭 [Issue #8650](https://github.com/zeroclaw-labs/zeroclaw/issues/8650)（ZeroCode 诊断中显示已解析日志路径） | 提升现场问题排查效率 |
| **UX 一致性** | 关闭 [Issue #9171](https://github.com/zeroclaw-labs/zeroclaw/issues/9171)（ZeroCode 修饰键语义）、[#9529](https://github.com/zeroclaw-labs/zeroclaw/issues/9529)（TodoWrite tracker 可见关闭按钮） | 让 TUI 行为不再与按键字符耦合、提供显式关闭入口 |
| **发布工程** | 关闭 [PR #10158](https://github.com/zeroclaw-labs/zeroclaw/pull/10158)（workspace 发到 crates.io） | 标记 23-crate 发布集合可发布、保留桌面打包与维护者工具为内部工件 |
| **文档** | 关闭 [Issue #10571](https://github.com/zeroclaw-labs/zeroclaw/issues/10571)（Social Channels 添加 Twitch 章节） | 补齐缺失的频道指南 |

此外，[PR #10630](https://github.com/zeroclaw-labs/zeroclaw/pull/10630) 修复了 [Issue #10532](https://github.com/zeroclaw-labs/zeroclaw/issues/10532)——让降级配置的 `migrate` 建议绑定到**实际运行**的守护进程可执行文件，避免因 PATH 不同导致的迁移失效，体现对运维陷阱的关注。

---

## 4. 社区热点

### 🔥 Top 讨论排行

1. **[Issue #9487](https://github.com/zeroclaw-labs/zeroclaw/issues/9487)** — *RFC: Runtime-owned conversation sessions and transport surface adapters* (32 💬)
   当前最热的架构级讨论，已进入 **Revision 5**（实质性替换 Revision 4 投票快照），需要 maintainer 重新开启投票窗口并做快照。讨论核心：会话/传输关注点如何从 agent 层下沉到 runtime 层，以及 ACP 适配器的安全边界。

2. **[Issue #6909](https://github.com/zeroclaw-labs/zeroclaw/issues/6909)** — *RFC: Computer-use support for desktop screen interaction* (16 💬)
   创建于 2026-05-25、已修订至 Revision 2，定义了**有界审批单元、执行时再校验、会话武装、sidecar 信任**等关键安全边界。这是项目"桌面代理"愿景的奠基石 RFC。

3. **[Issue #9397](https://github.com/zeroclaw-labs/zeroclaw/issues/9397)** — *RFC: WhatsApp Web `allowed_groups` 空列表视为 permit-none* (14 💬)
   与下方 #9348 配对，已被接受为 `status:accepted` 状态，是当日安全治理的标志性决议。

4. **[Issue #10050](https://github.com/zeroclaw-labs/zeroclaw/issues/10050)** — *RFC: Verbatim channel send over the gateway, without an agent turn* (13 💬)
   在 47 条 `/api/*` 路径之外新增"不经 agent turn 的直发"网关通道，反映社区对"轻量、可审计、不触发 LLM 推理"运维操作的明确诉求。

5. **[Issue #9530](https://github.com/zeroclaw-labs/zeroclaw/issues/9530)** — *RFC: Define risk precedence for test-only changes* (9 💬)
   关于 `risk:low` 在高风险路径上的冲突解释——维护者与贡献者文档不一致，体现项目对**风险标签治理**的精细化追求。

### 💡 背后诉求归纳
- **架构所有权**：希望 runtime 拥有会话状态、通道作为可插拔适配器（#9487）
- **桌面代理能力**：希望在严格安全边界内引入计算机使用（#6909）
- **显式许可语义**：所有"默认拒绝"的安全策略必须可被代码与文档双重证明（#9348、#9397、#9882）
- **运维可绕过 LLM**：网关直发通道的诉求说明用户在大量场景下不需要 agent 推理

---

## 5. Bug 与稳定性

### 🔴 S1（阻塞工作流，高风险）

| Issue | 描述 | 严重程度 | 状态 | 是否有 fix PR |
|---|---|---|---|---|
| [#9882](https://github.com/zeroclaw-labs/zeroclaw/issues/9882) | 图像标记绕过 `run_model_query` 直派路径上的内容校验（Anthropic 多模态安全） | S1 / risk:high | accepted | ❌ 暂无 |
| [#9421](https://github.com/zeroclaw-labs/zeroclaw/issues/9421) | 不完整的终端响应会被上报为成功 | S1 / risk:high | in-progress | ❌ 暂无 |
| [#10609](https://github.com/zeroclaw-labs/zeroclaw/issues/10609) | `zerocode` 忽略启动目录，将 cwd 强制锁定为代理工作区 | S1 | in-progress | ❌ 暂无 |
| [#10603](https://github.com/zeroclaw-labs/zeroclaw/issues/10603) | OpenCode 提供商从不发送 `x-opencode-session` 头部（破坏 Go 模型、可能引发账号标记） | S1 / risk:high | in-progress | ❌ 暂无（👍1） |
| [#10593](https://github.com/zeroclaw-labs/zeroclaw/issues/10593) | `backup.schedule_cron` 在无代理认领 `__builtin_backup` 时静默不调度 | S1 | in-progress | ❌ 暂无 |

### 🟡 S2（降级行为）

| Issue | 描述 | 状态 |
|---|---|---|
| [#10594](https://github.com/zeroclaw-labs/zeroclaw/issues/10594) | cron 在作业未运行时无任何记录，"静默不执行"不可见 | in-progress |
| [#10626](https://github.com/zeroclaw-labs/zeroclaw/issues/10626) | TTS 将 Markdown 与 emoji 按字面朗读 | 新开 OPEN |
| [#10625](https://github.com/zeroclaw-labs/zeroclaw/issues/10625) | 非视觉模型下 `[media attachment]` 占位符直接送达用户 | 新开 OPEN |

### 🟢 S3（小问题）

- **[Issue #10585](https://github.com/zeroclaw-labs/zeroclaw/issues/10585)**: 新的日志 sink 在默认并行 runner 下与迁移测试产生竞态；属于类型测试（type:test）问题。
- **[Issue #10579](https://github.com/zeroclaw-labs/zeroclaw/issues/10579)** / **[#10580](https://github.com/zeroclaw-labs/zeroclaw/issues/10580)**: 文档死链——Reference 部分链接的 CLI/Config 页缺失，仍在 ToC 中并被 39 处引用；增强建议：CI 应扫描仓库全量死链而非仅改动行。

### ✅ 当日已闭环的 Bug
[Issue #10357](https://github.com/zeroclaw-labs/zeroclaw/issues/10357)（工具错误体丢弃）、[#10223](https://github.com/zeroclaw-labs/zeroclaw/issues/10223)（ZeroCode 重连期 Ctrl+C 丢失）、[#10390](https://github.com/zeroclaw-labs/zeroclaw/issues/10390)（Chat 面板阻塞导航）、[#9348](https://

</details>

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*