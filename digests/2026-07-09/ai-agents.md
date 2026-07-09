# OpenClaw 生态日报 2026-07-09

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-07-09 05:53 UTC

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

# OpenClaw 项目动态日报
**报告日期：2026-07-09**

---

## 1. 今日速览

OpenClaw 仓库在 24 小时内录得 **1,000 条更新**（500 Issues + 500 PRs），活跃度处于历史高位，但**当日无新版本发布**，意味着大量修复尚未进入用户侧。Issues 端 461 条新增/活跃 vs 仅 39 条关闭，**关闭率仅 7.8%**，反映出社区报告量远超维护者处理能力；PR 端 119 条合并/关闭，合并节奏相对健康。热点高度集中于 **subagent 静默丢消息、Session/消息丢失、OAuth 鉴权轮换、Channel 路由（Discord/Feishu/Telegram）、UTF-16 边界截断** 等 P1/P0 级别问题，整体项目处于"修复爬坡期"。

---

## 2. 版本发布

**本日无新版本发布。** 最近一次发版线索出现在多个 bug 报告中（如 #38327 指向 `2026.3.2`、#87109 指向 `2026.5.2`、#43367 指向 `2026.3.8`、#44925 指向 `2026.3.11`），表明官方版本号已推进到 `2026.5.x` 系列，但 7 月初尚未看到 `2026.6.x` 或 `2026.7.x` 的 Release 公告。

---

## 3. 项目进展

当日共有 **119 条 PR 关闭/合并**，重点项目进展如下：

### 3.1 Codex 协议与稳定性
- **[PR #102444](https://github.com/openclaw/openclaw/pull/102444)** — Codex app-server 升级到 **0.143.0**，适配已废弃的 `on-failure` 审批策略与扩展的 thread/turn schema。
- **[PR #102396](https://github.com/openclaw/openclaw/pull/102396)** — Codex 事件投影器对未知状态**改为 fail-closed**，并对协议漂移增加告警，关闭 #99269。
- **[PR #102386](https://github.com/openclaw/openclaw/pull/102386)** / **[#102387](https://github.com/openclaw/openclaw/pull/102387)** / **[#102385](https://github.com/openclaw/openclaw/pull/102385)** — Codex 系列沙箱/JRPC/CLI exec 路径补齐 stdout/stderr `error` 监听，避免 EPIPE 转为未处理异常。

### 3.2 安全与鉴权
- **[PR #81185](https://github.com/openclaw/openclaw/pull/81185)**（已开放，待 maintainer 复审，🦞 diamond lobster）— **对 exec 工具结果负载做脱敏**，覆盖前台 tool result、node-host 输出、process poll/log/list，是当前最受关注的安全类 PR。
- **[PR #102438](https://github.com/openclaw/openclaw/pull/102438)** — 修复 OpenAI OAuth **refresh token 轮换被回滚**导致周期性掉登录的严重 bug（closes #102430）。
- **[PR #102416](https://github.com/openclaw/openclaw/pull/102416)** — 收紧 ACP `search` 请求的**路径授权作用域**，仅允许当前工作目录内的路径。
- **[PR #44884](https://github.com/openclaw/openclaw/pull/44884)** — Gateway 公网硬化（IP 访问控制、CORS、限流）。

### 3.3 消息路由与 Channel 修复
- **[PR #96189](https://github.com/openclaw/openclaw/pull/96189)** — Subagent 完成时若无可下发 payload，**主动唤醒通过 `sessions_yield` 等待的父会话**，解决长卡死的 `state=processing` 状态。
- **[PR #102397](https://github.com/openclaw/openclaw/pull/102397)** — Feishu 在同时含文字与 `MEDIA:` 图片的流式卡片回复中**保留前置文字**。
- **[PR #46303](https://github.com/openclaw/openclaw/pull/46303)** — SIGUSR1 reload 前**先排空入站 debounce 缓冲与 followup 队列**，避免配置热重载丢消息。
- **[PR #102372](https://github.com/openclaw/openclaw/pull/102372)** — Slack 支持 **Enterprise Grid 多 Workspace** 事件路由。
- **[PR #102307](https://github.com/openclaw/openclaw/pull/102307)** — 全局 heartbeat 上下文**保留 agent identity**，避免次级 agent heartbeat 误用默认 agent workspace。

### 3.4 编码与国际化
- **[PR #102442](https://github.com/openclaw/openclaw/pull/102442)** / **[#102395](https://github.com/openclaw/openclaw/pull/102395)** / **[#101934](https://github.com/openclaw/openclaw/pull/101934)** — Android 通知、Matrix 截断、Gateway 诊断输出统一改为 **UTF-16 安全截断**，修复 emoji/CJK 出现孤立 surrogate 的问题。

### 3.5 关闭/未合并 PR
- **#102395（Matrix）**、**#102157（Google Meet Calendar）**、**#102105（Google Meet Node Host）**、**#102387（Codex Supervisor）**、**#102385（Codex CLI）** 均显示已关闭，需关注是否已通过其他 PR 合入或被替代。

> **整体进度判断**：项目在"协议适配 + 安全 + 编码健壮性"三条主线都有明确推进，但 P0/P1 用户侧体验问题（subagent 丢失、Discord/Telegram 路由、OAuth 掉线）仍需要至少一次正式发版才能触达终端用户。

---

## 4. 社区热点

### 4.1 讨论最活跃 Issues（按评论数）

| # | Issue | 评论数 | 👍 | 主题 |
|---|---|---|---|---|
| [#25592](https://github.com/openclaw/openclaw/issues/25592) | Tool call 之间的内部文本泄露到 Slack/iMessage 等 channel | **35** | 1 | 🦞 diamond lobster / 影响 message-loss |
| [#9443](https://github.com/openclaw/openclaw/issues/9443) | 请求发布预编译 Android APK（已关闭） | **27** | 4 | 🌊 tidepool / ux-release-blocker |
| [#44925](https://github.com/openclaw/openclaw/issues/44925) | Subagent 完成结果静默丢失（无重试、无通知、无自动重启） | **21** | 1 | 🦞 diamond lobster |
| [#48788](https://github.com/openclaw/openclaw/issues/48788) | 多编码 Content-Disposition 集中式文件名编码工具 | **18** | 1 | 🦞 diamond lobster / data-loss |
| [#48003](https://github.com/openclaw/openclaw/issues/48003) | Steer 模式无法在主会话 turn 中途注入消息 | **15** | 3 | 🦞 diamond lobster |
| [#45740](https://github.com/openclaw/openclaw/issues/45740) | `gh-issues` skill 将不可信 issue body 直接注入子 agent prompt | **14** | 1 | 🦞 diamond lobster / security |
| [#43367](https://github.com/openclaw/openclaw/issues/43367) | 多 agent 编排不稳定（add/config 并发覆盖、session-lock 失败、子作业脱离） | **13** | 1 | 🦞 diamond lobster |
| [#39604](https://github.com/openclaw/openclaw/issues/39604) | `tools.web.fetch.allowPrivateNetwork` 配置项 | **13** | **11** | 🦞 diamond lobster / security |
| [#94228](https://github.com/openclaw/openclaw/issues/94228) | Native Anthropic 回放历史 `thinking` block 长 tool-use 线程被锁死 | **13** | 2 | 🐚 platinum hermit |

### 4.2 热点背后的诉求
- **"#25592 内部文本泄露"** 已是社区最高呼声的 UX 问题——多名用户反映 agent 在错误处理、ack、narration 之间的中间文本会作为"可见消息"投递，破坏对话语义。
- **"#44925 / #48003 / #43367 / #47975 / #96189"** 形成一条紧密相关的 **subagent 链路稳定性** 诉求群：用户已不满足"能跑通"，强烈要求 **retry / 通知 / 自动恢复 / 死锁检测**。
- **"#45740 gh-issues 提示词注入"** 与 **"#45049 模拟 tool call 而非真实调用"** 反映社区对**安全与真实性**的双重担忧——这是 LLM agent 类项目的关键信任点。
- **"#39604 web_fetch 私网访问"** 凭借 👍11 票成为**诉求最强烈的功能请求**，社区希望能在显式 opt-in 的前提下打通本地/内网工具。

---

## 5. Bug 与稳定性

按严重程度排列（参考 issue rating：🦞 diamond lobster > 🐚 platinum hermit > 🦐 gold shrimp）：

### 5.1 🔴 P0 / 影响 Release Blocker
- **[#9443](https://github.com/openclaw/openclaw/issues/9443)** Android 预编译 APK（**已关闭**，27 评论，👍4）— 用户在等待官方 Release artifact。
- **[#48920](https://github.com/openclaw/openclaw/issues/48920)** Live Docs 跑在发布版本之前——`IsolatedSessions` 仅文档存在但 2026.3.13 中不可用，回归性。
- **[#43661](https://github.com/openclaw/openclaw/issues/43661)** Compaction 超时后 session 进入**静默循环**，每 10 分钟重复发送同一条消息给用户。

### 5.2 🟠 P1 严重 Bug
| Issue | 简述 | 关联 Fix PR |
|---|---|---|
| [#25592](https://github.com/openclaw/openclaw/issues/25592) | Tool-call 间文本泄露到 channel | 暂无关联 PR |
| [#44925](https://github.com/openclaw/openclaw/issues/44925) | Subagent 完成静默丢失 | **#96189（部分关闭 #89095）** |
| [#43367](https://github.com/openclaw/openclaw/issues/43367) | 多 agent 编排并发竞态 | 待 PR |
| [#38327](https://github.com/openclaw/openclaw/issues/38327) | `google-vertex/gemini-3.1-pro-preview` 报 "Cannot convert undefined or null to object" | 待 PR |
| [#40001](https://github.com/openclaw/openclaw/issues/40001) | Write 工具无 append 模式，cron 隔离会话覆盖共享 memory 文件 | 待 PR |
| [#41165](https://github.com/openclaw/openclaw/openclaw/issues/41165) | Telegram DM 仍可落入 `agent:main:main`，污染 heartbeat | 待 PR |
| [#47975](https://github.com/openclaw/openclaw/issues/47975) | Subagent 完成后 session 不释放，主会话无响应 | **#96189（部分）** |
| [#47910](https://github.com/openclaw/openclaw/issues/47910) | Provider fallback 不区分失败类别，auth-broken 仍反复重试 | 待 PR |
| [#43996](https://github.com/openclaw/openclaw/issues/43996) | Sandbox 容器在 `no-new-privileges` 下立刻退出 | 待 PR |
| [#94228](https://github.com/openclaw/openclaw/issues/94228) | Anthropic 长会话回放 `thinking` 签名失效，线程永久锁死 | 待 PR |
| [#87109](https://github.com/openclaw/openclaw/issues/87109) | macOS Gateway 堆内存涨至 1GB+，cron 静默失败 | 待 PR |
| [#89278](https://github.com/openclaw/openclaw/issues/89278) | Codex OAuth refresh > 10s，cron/heartbeat 报超时 | **#102438（OpenAI OAuth 修复旁证相关）** |
| [#44905](https://github.com/openclaw/openclaw/issues/44905) | Discord 泄露 `NO_REPLY`、tool-call JSON 等内部痕迹 | 待 PR |
| [#49603](https://github.com/openclaw/openclaw/issues/49603) | PID 仍存活时锁文件未被清理，gateway 重启后死锁 | 待 PR |
| [#41744](https://github.com/openclaw/openclaw/issues/41744) | Feishu read 图片后媒体丢失 | **#102397（旁证）** |
| [#44502](https://github.com/openclaw/openclaw/issues/44502) | Discord preflight / mention-gating 过宽 | 待 PR |
| [#45494](https://github.com/openclaw/openclaw/issues/45494) | Cron 在持续 5xx 时不快速失败，耗尽 timeout | 待 PR |
| [#94846](https://github.com/openclaw/openclaw/issues/94846) | Cron isolated agentTurn 提前恢复后仍判 fatal，跳过下发 | 待 PR |
| [#46786](https://github.com/openclaw/openclaw/issues/46786) | `tools.elevated.enabled=true` 让所有 exec 旁路 sandbox | 待 PR |

### 5.3 🟡 P2 中等 Bug / 体验摩擦
- [#45765](https://github.com/openclaw/openclaw/issues/45765) `OPENCLAW_HOME=~/.openclaw` 产生嵌套目录。
- [#45314](https://github.com/openclaw/openclaw/issues/45314) Abort 响应模板变量未渲染（关联 **PR #45315** 已就绪）。
- [#46252](https://github.com/openclaw/openclaw/issues/46252) Cost dashboard 不统计 `.jsonl.reset.*` 归档，严重低估 `/new` 用户花费。
- [#45718](https://github.com/openclaw/openclaw/issues/45718) Session 每次 run 累积 `skillsSnapshot` / `systemPromptReport`，最终溢出。
- [#86034](https://github.com/openclaw/openclaw/issues/86034) 媒体生成成功但 delivery 失败被误报为生成失败。
- [#46031](https://github.com/openclaw/openclaw/issues/46031) GitHub Copilot provider 忽略 `auth.order`。

### 5.4 🟢 P3 / 体验增强
- [#44910](https://github.com/openclaw/openclaw/issues/44910) OpenAI Codex 报错泄露到 Telegram。
- [#45758](https://github.com/openclaw/openclaw/issues/45758) YAML 配置支持。
- [#42840](https://github.com/openclaw/openclaw/issues/42840) Control UI MathJax/LaTeX（👍9，社区高支持）。

> **稳定性判断**：P0/P1 中已有 **明确关联 fix PR 的不足 1/3**，绝大多数仍处于 `clawsweeper:no-new-fix-pr` 状态，维护者需要排定优先级。

---

## 6. 功能请求与路线图信号

### 6.1 已有或部分已有 PR 配套（落地概率高）
| 需求 | Issue | 状态 |
|---|---|---|
| Slack Enterprise Grid 支持 | [#102372](https://github.com/openclaw/openclaw/pull/102372) | PR 已提交 |
| Webchat inline button 支持 | [#46656](https://github.com/openclaw/openclaw/issues/46656) | 暂无 PR |
| Backup exclude patterns（.gitignore 风格） | [#40786](https://github.com/openclaw/openclaw/issues/40786) | **PR #44288 已就绪** |
| Gateway lifecycle hooks | [#43454](https://github.com/openclaw/openclaw/issues/43454) | 暂无 PR |
| `tools.web.fetch.allowPrivateNetwork` | [#39604](https://github.com/openclaw/openclaw/issues/39604) | 暂无 PR（👍11） |
| Per-agent cost budget 网关级强制 | [#42475](https://github.com/openclaw/openclaw/issues/42475) | 暂无 PR |
| Pre-reset agentic memory flush | [#45608](https://github.com/openclaw/openclaw/issues/45608) | 暂无 PR（👍4） |
| YAML 配置支持 | [#45758](https://github

---

## 横向生态对比

# 个人 AI 助手 / 自主智能体开源生态 · 横向对比分析报告
**报告日期：2026-07-09｜数据周期：过去 24 小时｜覆盖项目：13 个**

---

## 一、生态全景

2026-07-09 的开源 AI Agent 生态呈现典型的 **"高迭代-低发版"双轨状态**：13 个被观测项目中 **仅 CoPaw 1 家发布新版本（v2.0.0-beta.4）**，其余 12 个均停留在 trunk 推进状态，单日 PR 提交量普遍在 30–100 区间。社区讨论焦点高度收敛于 **工具安全加固、多渠道路由可靠性、Subagent/会话状态稳定性、UTF-16/CJK 国际化、Provider 协议兼容** 五大方向，且跨项目形成显著共振（同一类 Bug 在不同仓库独立暴露）。整体来看，生态已进入 **"协议适配 + 安全基线 + 编码健壮性" 的修复爬坡期**，距离下一轮稳定发版窗口仍需 1–2 周。

---

## 二、各项目活跃度对比

| 项目 | Issues (24h) | PRs (24h) | 新版本 | 关闭/合并 PR | 健康度评估 | 当前阶段 |
|---|---|---|---|---|---|---|
| **OpenClaw** | 500 (461 活跃/39 关闭, 7.8% 关闭率) | 500 | ❌ | 119 | 🟠 修复爬坡期 | 大型 P0/P1 积压 |
| **Hermes Agent** | 50 (47/3) | 50 | ❌ | 4 | 🟡 v0.17.0 回归 | Desktop 紧急回滚 |
| **ZeroClaw** | 50 (40/10) | 50 | ❌ | 4 | 🟠 S0/S1 仍 blocked | 协议兼容攻坚 |
| **CoPaw** | 36 (20 关闭) | 47 | ✅ **v2.0.0-beta.4** | 14 | 🟡 Beta 回归中 | 长会话压缩 |
| **NanoBot** | 24 | 21 | ❌ | 9 | 🟢 安全响应优 | WebUI 加固 |
| **NanoClaw** | 2 | 28 | ❌ | 4 | 🟢 高效收敛 | scheduled-tasks |
| **IronClaw** | 20 (5 关闭, 25%) | 50 | ❌ | 12 | 🟡 稳步收敛 | v1 清理 + UX |
| **LobsterAI** | 5 | 10 | ❌ | 10 | 🟢 健康 | 多 Agent 隔离 |
| **PicoClaw** | 2 | 3 | ❌ | 2 | 🟡 关注度低 | 嵌入式/IoT |
| **Moltis** | 0 | 1 | ❌ | 0 | 🟡 静默 | CalDAV panic 待修 |
| **TinyClaw** | 0 | 0 (1 关闭) | ❌ | 1 (未合) | 🔴 静默+安全风险 | 休眠 |
| **NullClaw** | 0 | 0 | — | — | ⚪ 无活动 | — |
| **ZeptoClaw** | 0 | 0 | — | — | ⚪ 无活动 | — |

**关键观察**：
- **OpenClaw 单日 1,000 条更新**约为次高项目（Hermes/ZeroClaw 各 100 条）的 10 倍，是当之无愧的"流量王者"，但 7.8% 的 Issue 关闭率也远低于行业健康线（通常 20–30%）。
- **CoPaw 是当日唯一发版项目**，连续 4 个 beta 的迭代纪律明显优于其他仓库。
- **零活跃仓库（NullClaw/ZeptoClaw/TinyClaw）合计占样本 23%**，反映命名相似生态的明显分化。

---

## 三、OpenClaw 在生态中的定位

### 3.1 优势
- **覆盖面最广**：单日合并 119 条 PR 覆盖 Codex 协议、OAuth 鉴权、Slack Enterprise Grid、Feishu 流式卡片、UTF-16 截断、ACP 路径授权等 **7+ 条独立产品线**，是 Hermes Agent（4 PR）、NanoClaw（4 PR）的近 30 倍。
- **平台矩阵最深**：Discord / Slack / Feishu / Telegram / Matrix / Google Meet / WhatsApp / iMessage 全覆盖，OpenAI / Anthropic / Google Vertex / GitHub Copilot / Codex / Ollama 多 Provider 适配——这是 Hermes Agent（4 通道）、PicoClaw（2–3 通道）等远未能及的。
- **代码侧修复纪律**：当日 7 条 Codex PR（#102386–#102396）连续落地，#96189 subagent 唤醒逻辑、#102438 OAuth refresh 修复均属高质量修复。

### 3.2 与同类对比的劣势
| 维度 | OpenClaw | Hermes Agent | ZeroClaw | NanoBot | NanoClaw |
|---|---|---|---|---|---|
| 社区规模 | 🔥 极大 | 🔥 大 | 🔥 大 | 🟡 中 | 🟡 中 |
| 发版频率 | 🟠 滞后（2026.5.x 后无 release） | 🟠 Desktop 回归 | 🟠 协议 blocked | 🟡 Beta 节奏 | 🟡 节奏稳 |
| 安全响应 | 🟡 中（#81185 待 maintainer） | 🟢 PR #61305 在评 | 🟡 RFC 阶段 | 🟢 <48h 闭环 | 🟡 中 |
| Issue 关闭率 | 🔴 7.8% | 🟢 94% | 🟢 80% | 🟢 中 | 🟢 高 |
| 架构创新 | 🟡 渐进 | 🟡 Desktop UX | 🟢 WASM/OCI | 🟡 渐进 | 🟡 Task-specific |

### 3.3 核心定位判断
**OpenClaw 是"全能型旗舰"**——功能广度无敌，但**用户侧可感知的发版密度严重落后于社区提交速度**，是典型的"commit

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目日报

**📅 2026-07-09 ｜ 📊 数据来源：[HKUDS/nanobot](https://github.com/HKUDS/nanobot)**

---

## 1. 今日速览

NanoBot 今日社区活跃度处于**中等偏高**水平：过去 24 小时共 24 条 Issues 更新、21 条 PRs 更新，无新版本发布。值得关注的是 **3 条由 YLChen-007 提交的高优先级 WebUI 安全漏洞公告**（#4825、#4826、#4827）已在当日被快速响应并通过 #4849、#4856 修复关闭，安全响应链路高效。今日工作重点集中在 **WebUI 安全加固、Agent 运行时装配重构、文档体系优化** 三大方向，同时仍有大量历史 [stale] Issue 待维护者清理。

---

## 2. 版本发布

⚠️ **今日无新版本发布**。距离上一个可观测的活跃开发版本（参考 PR #4460 将 Node 升级到 24、PR #12 引入 Telegram 视觉支持）已有一段开发积累，多个特性（WebUI 差异视图、RTK 命令重写、nano_timer 核心工具等）正在 PR 评审中，下一版本功能密度预计较高。

---

## 3. 项目进展

今日 **9 条 PR 已合并/关闭**，项目在安全、可维护性、用户体验方面均有实质推进：

| PR | 标题 | 意义 |
|---|---|---|
| [#4849](https://github.com/HKUDS/nanobot/pull/4849) | fix(webui): gate bootstrap API token issuance | 🔐 **安全修复 P1** — 拆分 WebUI bootstrap WebSocket 与 REST token，仅在验证 tokenIssueSecret 或静态 token 后才签发 api_token |
| [#4856](https://github.com/HKUDS/nanobot/pull/4856) | fix(webui): restore localhost bootstrap API tokens | 🔐 **安全修复 P1** — 恢复 localhost bootstrap 同时阻止远程未授权访问，文档同步更新 |
| [#4848](https://github.com/HKUDS/nanobot/pull/4848) | refactor(agent): extract turn hook assembly | 🧹 **重构 P2** — 将 turn hook 装配从 AgentLoop 抽离到 turn_hooks 模块，提升可测试性 |
| [#4850](https://github.com/HKUDS/nanobot/pull/4850) | docs: improve search entry pages | 📚 **文档 P2** — README 改造、补充 8 个能力向入口页（chat apps、MCP、WebUI、gateway 等） |
| [#4852](https://github.com/HKUDS/nanobot/pull/4852) | Feature: non-interactive config refresh with `nanobot onboard --refresh` | ⚙️ **增强 P2** — 解决 #4851，支持无人值守配置刷新 |
| [#4460](https://github.com/HKUDS/nanobot/pull/4460) | chore: bump to node 24 | 🔧 **基础设施** — Node 运行时升级到 24 |
| [#12](https://github.com/HKUDS/nanobot/pull/12) | feat: add vision support for image recognition in Telegram | 👁️ **功能** — Telegram 图片 base64 编码 + 多模态识别 |
| [#4854](https://github.com/HKUDS/nanobot/pull/4854) | feat(exec): add RTK command rewriter | 🛡️ **安全/可观测性 P2** — exec 工具新增 RTK 命令重写器（在沙箱前运行） |
| [#4828](https://github.com/HKUDS/nanobot/pull/4828) | feat(webui): add file edit diff progress view | 🎨 **WebUI** — 文件编辑以 GitHub 风格 diff 展示，支持折叠 |

**整体评估**：项目在安全基线和工程化方向有清晰推进，PR #4849/#4856 的快速关闭说明安全响应机制成熟。

---

## 4. 社区热点 🔥

### 讨论最活跃 Issues

| Issue | 标题 | 💬 评论 | 👍 反应 | 状态 |
|---|---|---|---|---|
| [#2463](https://github.com/HKUDS/nanobot/issues/2463) | nanobot does not preserve the exact prompt prefix | **13** | 0 | CLOSED |
| [#1267](https://github.com/HKUDS/nanobot/issues/1267) | zhipu provider does not work? | **6** | 0 | CLOSED |
| [#912](https://github.com/HKUDS/nanobot/issues/912) | Support Task-Specific Model Configuration | 5 | **3** | OPEN |
| [#954](https://github.com/HKUDS/nanobot/issues/954) | Progress streaming leaks internal tool calls | 4 | 1 | CLOSED |
| [#2450](https://github.com/HKUDS/nanobot/issues/2450) | minimax-m2.7 via Ollama Cloud fails on 2nd+ request | 4 | 0 | CLOSED |

**诉求分析**：
- [#2463](https://github.com/HKUDS/nanobot/issues/2463) 是**架构层面**的根本性问题——持久化对话历史 ≠ 真实发送给模型的 prompt prefix，与 OpenAI 的 prompt caching 产生冲突。虽已关闭，但代表一类深层设计张力，值得复盘。
- [#912](https://github.com/HKUDS/nanobot/issues/912)（**3 个 👍**）是当前最受欢迎的开放 Feature Request，反映用户希望对**对话 / 工具调用 / 浏览器**等任务用不同模型以优化成本与质量。

### 安全公告集中爆发

[@YLChen-007](https://github.com/YLChen-007) 在 7 月 7-8 日连续提交 3 条 WebUI 漏洞披露（[#4825](https://github.com/HKUDS/nanobot/issues/4825)、[#4826](https://github.com/HKUDS/nanobot/issues/4826)、[#4827](https://github.com/HKUDS/nanobot/issues/4827)），均已通过 [#4849](https://github.com/HKUDS/nanobot/pull/4849) + [#4856](https://github.com/HKUDS/nanobot/pull/4856) 完成修复。这是社区安全研究的积极信号，建议在 CHANGELOG 中正式致谢。

---

## 5. Bug 与稳定性 🐛

按严重程度排列：

| 严重度 | Issue | 描述 | 是否有 Fix PR |
|---|---|---|---|
| 🔴 **高** | [#2450](https://github.com/HKUDS/nanobot/issues/2450) | minimax-m2.7 通过 Ollama Cloud 首次成功、后续全部 Internal Server Error | ❌ 暂无（已 CLOSED） |
| 🔴 **高** | [#954](https://github.com/HKUDS/nanobot/issues/954) | 进度流（#802）将内部工具调用广播到用户聊天 | ❌ 暂无（已 CLOSED） |
| 🔴 **高** | [#940](https://github.com/HKUDS/nanobot/issues/940) | Agent 沙箱与宿主文件系统隔离 → 无法创建技能/处理媒体 | ❌ 暂无（OPEN，stale） |
| 🟠 **中** | [#1138](https://github.com/HKUDS/nanobot/issues/1138) | restrictToWorkspace 启用时内置技能失效（技能文件在 workspace 之外） | ❌ 暂无（已 CLOSED） |
| 🟠 **中** | [#896](https://github.com/HKUDS/nanobot/issues/896) | Telegram / Discord 媒体文件永不清除，无界磁盘增长 | ❌ 暂无（OPEN，stale） |
| 🟠 **中** | [#1159](https://github.com/HKUDS/nanobot/issues/1159) | bridge 启动握手超时（Baileys 408） | ❌ 暂无（已 CLOSED） |
| 🟠 **中** | [#150](https://github.com/HKUDS/nanobot/issues/150) | WhatsApp + WebSocket Gateway 在 Linux Python 3.12 下连接断开 | ❌ 暂无（已 CLOSED） |
| 🟡 **低** | [#935](https://github.com/HKUDS/nanobot/issues/935) | Remote MCP Streamable HTTP 启动超时（asyncio.CancelledError） | ✅ 相关 PR [#4843](https://github.com/HKUDS/nanobot/pull/4843)、[#4764](https://github.com/HKUDS/nanobot/pull/4764) 正在评审 |
| 🟡 **低** | [#1100](https://github.com/HKUDS/nanobot/issues/1100) | 删除 cron job 后被自动重新添加 | ❌ 暂无（已 CLOSED） |
| 🟡 **低** | [#937](https://github.com/HKUDS/nanobot/issues/937) | exec 工具幻觉严重（用户已停止评估该框架） | ❌ 暂无（已 CLOSED，**需关注**） |

**关键观察**：多数高严重度 Bug 在 CLOSED 状态下未见关联 Fix PR，意味着要么由维护者直接修复，要么被静默关闭——**#937 的用户流失信号需要警惕**。

---

## 6. 功能请求与路线图信号

### 呼声最高的开放请求

| Issue | 标题 | 👍 | 进入下一版本的概率评估 |
|---|---|---|---|
| [#912](https://github.com/HKUDS/nanobot/issues/912) | Task-Specific Model Configuration | 3 | 🟢 **高** — 与 Agent 架构演进契合，符合多模型成本优化趋势 |
| [#240](https://github.com/HKUDS/nanobot/issues/240) | SimpleX Chat 通道支持 | 2 | 🟡 中 — 隐私导向用户群重要扩展 |
| [#936](https://github.com/HKUDS/nanobot/issues/936) | Multi-Tenant Gateway | 0 | 🟡 中 — 企业部署关键能力，但实现复杂 |
| [#931](https://github.com/HKUDS/nanobot/issues/931) | Native Sandbox Interface (Deno/Firecracker) | 0 | 🟢 **高** — 配合今日 [#4854](https://github.com/HKUDS/nanobot/pull/4854) RTK 重写器，sandbox 是清晰演进方向 |
| [#990](https://github.com/HKUDS/nanobot/issues/990) | Pre-handler Hook 零 token 路由 | 0 | 🟡 中 — 性能优化点 |
| [#1118](https://github.com/HKUDS/nanobot/issues/1118) | 面向 Webhook 的 HTTP Server（Nextcloud Talk） | 1 | 🟡 中 |
| [#4851](https://github.com/HKUDS/nanobot/issues/4851) | 非交互式 `nanobot onboard --refresh` | 0 | ✅ **已实现**（PR [#4852](https://github.com/HKUDS/nanobot/pull/4852) 已关闭） |
| [#1006](https://github.com/HKUDS/nanobot/issues/1006) | 子 Agent 控制面（list/kill） | 0 | 🟢 **高** — 子 Agent 是产品核心能力之一，缺失控制面是显著缺口 |

**路线图信号**：安全、sandbox、子 Agent 控制面、Task-specific 模型是用户最迫切的诉求，建议维护者在下次版本规划中重点考虑。

---

## 7. 用户反馈摘要 📣

从 Issues 评论中提炼的真实声音：

- 😟 **生态兼容性失望**（[#1267](https://github.com/HKUDS/nanobot/issues/1267)）：用户订阅智谱 coding plan 后无法在 nanobot 中使用，提示 "Insufficient balance" — 但实际是订阅制，**错误信息误导用户**，影响国内开发者体验。
- 😟 **exec 工具幻觉**（[#937](https://github.com/HKUDS/nanobot/issues/937)）：用户明确表示"已停止评估该框架"，对 SOTA LLM 在 nanobot exec 上的可靠性提出严重质疑。这是**框架可信度的负面信号**。
- 😟 **沙箱透明度**（[#940](https://github.com/HKUDS/nanobot/issues/940)）：Agent 写入文件落到不可见的 sandbox workspace，与用户预期不符，技能创建与媒体处理链路被阻断。
- 😟 **存储泄漏**（[#896](https://github.com/HKUDS/nanobot/issues/896)）：Telegram / Discord 媒体文件持续累积，长期部署将耗尽磁盘。
- 😊 **架构共识**（[#2463](https://github.com/HKUDS/nanobot/issues/2463)）：高质量讨论显示用户对 prompt 缓存语义有深入理解，社区技术水平较高。
- 😊 **安全研究活跃**（[#4825](https://github.com/HKUDS/nanobot/issues/4825) 系列）：社区有能力进行本地攻击面分析并产出可复现的 PoC，反向证明项目的安全透明度获得认可。

---

## 8. 待处理积压 ⏳

以下 [stale] Issue/PR 长期未得到响应，建议维护者专项清理：

| Issue/PR | 标题 | 距今 |
|---|---|---|
| [#2463](https://github.com/HKUDS/nanobot/issues/2463) | 架构问题：prompt prefix 不一致 | ~106 天 |
| [#912](https://github.com/HKUDS/nanobot/issues/912) | Task-Specific Model Configuration（**最受欢迎**） | ~139 天 |
| [#936](https://github.com/HKUDS/nanobot/issues/936) | Multi-Tenant Gateway | ~138 天 |
| [#940](https://github.com/HKUDS/nanobot/issues/940) | Agent 无法访问宿主文件系统 | ~138 天 |
| [#1006](https://github.com/HKUDS/nanobot/issues/1006) | 子 Agent 控制面 MVP | ~137 天 |
| [#240](https://github.com/HKUDS/nanobot/issues/240) | SimpleX Chat 支持（**2 👍**） | ~152 天 |
| [#990](https://github.com/HKUDS/nanobot/issues/990) | 零 token 路由 Pre-handler Hook | ~137 天 |
| [#931](https://github.com/HKUDS/nanobot/issues/931) | 原生 Sandbox Interface | ~138 天 |
| [#2873](https://github.com/HKUDS/nanobot/pull/2873) | Discord 转发引用消息保留 | ~94 天 |
| [#4855](https://github.com/HKUDS/nanobot/pull/4855) | 通道引导式配置流 | ~1 天（**有冲突，需裁决**） |

**提醒**：5 个 P1 级别的开放 PR（[#4840](https://github.com/HKUDS/nanobot/pull/4840) zombie 进程回收、[#4816](https://github.com/HKUDS/nanobot/pull/4816) BaseException 收窄、[#4844](https://github.com/HKUDS/nanobot/pull/4844) 长时任务 gate、[#4847](https://github.com/HKUDS/nanobot/pull/4847) LangSmith 文档、[#4853](https://github.com/HKUDS/nanobot/pull/4853) nano_timer）等待维护者 review，建议优先处理以避免分支漂移。

---

### 📈 项目健康度评分

| 维度 | 评分 | 说明 |
|---|---|---|
| 活跃度 | ⭐⭐⭐⭐ | Issues/PRs 双活跃，社区参与度高 |
| 安全响应 | ⭐⭐⭐⭐⭐ | 漏洞 → 修复链路 < 48 小时 |
| Issue 处理 | ⭐⭐ | 大量 stale 积压，多条高赞请求无回应 |
| 路线图清晰度 | ⭐⭐⭐ | 安全、sandbox、子 Agent 方向信号明确 |
| 用户留存 | ⭐⭐⭐ | exec 幻觉与沙箱隔离问题影响口碑 |

---

> 📌 **总结**：NanoBot 今日在安全加固和工程重构上表现专业，但**历史 Feature Request 响应滞后**与 **exec 工具可靠性问题**是当前最大的两大隐忧。建议下一迭代聚焦：(1) 处理 5 个 P1 PR 的 review 与合并；(2

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目日报 · 2026-07-09

> 数据范围：2026-07-08 ~ 2026-07-09 · 仓库：[NousResearch/hermes-agent](https://github.com/nousresearch/hermes-agent)

---

## 一、今日速览

Hermes Agent 今日维持**高度活跃的工程迭代节奏**：过去 24 小时共更新 Issues 50 条（47 活跃 / 3 关闭）、PR 50 条（46 待合并 / 4 已合并或关闭），新版本发布为 0。修复与新需求大体平衡，工作重心集中在 **Desktop 客户端崩溃回滚、Gateway 多平台适配器（QQBot / WeCom / Telegram）、Dashboard 安全加固、SSE/PTY 会话状态**四条主线。值得关注的是出现多条同源 duplicate issues（QQBot `is_reconnect` 缺失、WeCom 中文文件名 MAX_PATH、桌面托盘隐藏等），反映出近期发布版本回归影响面较广，需要维护者对 v0.17.0 桌面端更新引发的连锁问题进行重点巡检。

---

## 二、版本发布

**无新版本发布。**

注：Issues #61268 提及 `apps/desktop@0.17.0`（构建于 2026-07-09T02:56:59Z）出现 `Composer is not available` 渲染崩溃并触发更新器死循环，该 Issue 已关闭，但建议维护者在下一个桌面端补丁版本中重点回归该路径。

---

## 三、项目进展（已合并 / 已关闭 PR & Issue）

| # | 类型 | 标题 | 价值 |
|---|------|------|------|
| [#28260](https://github.com/nousresearch/hermes-agent/issues/28260) | Issue CLOSED | custom_providers 自签名 HTTPS SSL 校验失败 | 推进自托管代理场景可用性 |
| [#61290](https://github.com/nousresearch/hermes-agent/pull/61290) | PR CLOSED | Dashboard PTY keep-alive 绑定会话 | 修复会话切换复用同一终端的 bug |
| [#61294](https://github.com/nousresearch/hermes-agent/issues/61294) | Issue CLOSED | MCP stdio 子进程环境清洗误删 CBM_CACHE_DIR | 修复 MCP 集成配置丢失 |
| [#61268](https://github.com/nousresearch/hermes-agent/issues/61268) | Issue CLOSED | Desktop 0.17.0 Composer 错误导致 Hermes.exe 重启死循环 | 暴露 v0.17.0 桌面端严重回归 |
| [#61254](https://github.com/nousresearch/hermes-agent/pull/61254) | PR CLOSED | 读取 custom_providers 下 per-model max_tokens | 修复本地代理模型 token 上限被忽略 |

整体看，项目在**会话状态隔离、桌面端回归修复、本地代理配置正确性**三个方向上有实质推进。

---

## 四、社区热点（评论最多 / 反应最强）

| 排名 | 链接 | 关注点 |
|------|------|--------|
| 1. [#59224](https://github.com/nousresearch/hermes-agent/issues/59224)（8 评论） | Classic `/resume` 仅显示 CLI 会话，Desktop/WebUI 会话被隐藏 | 跨端会话发现能力是核心 UX 痛点 |
| 2. [#39534](https://github.com/nousresearch/hermes-agent/issues/39534)（7 评论） | Hermes Desktop Windows 中文输入被截断 | 国际化（i18n）输入回归，影响中文用户核心使用 |
| 3. [#5254](https://github.com/nousresearch/hermes-agent/issues/5254)（4 评论） | LM-Studio 工具调用被切碎重复 | 本地模型 / provider 兼容性 |
| 4. [#28260](https://github.com/nousresearch/hermes-agent/issues/28260)（4 评论，👍 2） | 自签名 HTTPS SSL 校验 | 自托管 LiteLLM / vLLM 用户刚需 |
| 5. [#35419](https://github.com/nousresearch/hermes-agent/issues/35419)（3 评论，👍 2） | Fallback 静默切换，用户无感知 | Discord/Telegram 网关下可靠性可视化诉求 |
| 6. [#18241](https://github.com/nousresearch/hermes-agent/issues/18241)（2 评论，👍 4） | TUI 思考块与工具调用按时间顺序展示 | 推理模型可读性、👍 数最高，社区呼声强烈 |

**洞察**：高赞议题集中于 **会话可视化、推理可解释性、跨端一致性**——这些不是炫技型需求，而是用户每日高频使用的"基本体感"。

---

## 五、Bug 与稳定性

按严重度排序：

### 🔴 严重（影响主流程 / 服务不可用）

- **[#61268](https://github.com/nousresearch/hermes-agent/issues/61268)** Desktop v0.17.0 渲染崩溃 + 更新器死循环 — *已关闭*，但 v0.17.0 桌面用户受影响。
- **[#60715](https://github.com/nousresearch/hermes-agent/issues/60715)** Nous 推理 API 全量超时（22s → 46s → 72s）— 标记 `needs-repro`，疑似网络而非代码侧。
- **[#58596](https://github.com/nousresearch/hermes-agent/issues/58596)** DaemonThreadPoolExecutor 在 Python 3.14 崩溃，`delegate_task` / 技能 fan-out / 内存同步全废 — 暂无 PR。

### 🟠 较高（功能性回归）

- **[#61220](https://github.com/nousresearch/hermes-agent/issues/61220)** Session expiry 未设 `end_reason='session_reset'`，导致过期会话被"复活"且携带完整历史 — 安全 + 状态风险。
- **[#61270](https://github.com/nousresearch/hermes-agent/issues/61270)** Gateway 启动在 Nous Portal OAuth 耗尽时阻塞，无降级路径。
- **[#61207](https://github.com/nousresearch/hermes-agent/issues/61207)** `/plan` 不再写 plan.md（Yolo 模式下无限运行）— 用户规划体验退化。
- **[#35419](https://github.com/nousresearch/hermes-agent/issues/35419)** Fallback 切换无用户可见通知。
- **[#48782](https://github.com/nousresearch/hermes-agent/issues/48782)** WebUI 导入 state.db 会话丢失原始 cwd。
- **[#45360](https://github.com/nousresearch/hermes-agent/issues/45360)** Cron WebUI 出现"仅 prompt"伪会话 + 平台 unknown。
- **[#39838](https://github.com/nousresearch/hermes-agent/issues/39838)** `notification_sources` 配置项文档存在但 gateway 从不读取。
- **[#61195](https://github.com/nousresearch/hermes-agent/issues/61195)** `delegation.base_url` 子代理实际请求仍走 OpenRouter 返回 401。
- **[#5254](https://github.com/nousresearch/hermes-agent/issues/5254)** LM-Studio 工具调用碎片化。

### 🟡 中等（影响体验 / 边缘场景）

- **[#61211](https://github.com/nousresearch/hermes-agent/issues/61211) / [#61212](https://github.com/nousresearch/hermes-agent/issues/61212)** WeCom 中文文件名 percent-encode 超 Windows MAX_PATH（duplicate）。
- **[#39534](https://github.com/nousresearch/hermes-agent/issues/39534)** Desktop Windows 中文截断。
- **[#59986](https://github.com/nousresearch/hermes-agent/issues/59986)** Desktop 左侧栏无法隐藏，滚动时弹出。
- **[#61048](https://github.com/nousresearch/hermes-agent/issues/61048)** Kanban worker 不应用 fallback_providers。
- **[#35419](https://github.com/nousresearch/hermes-agent/issues/35419)** 见上。

### 已合并修复对照

| Bug | 修复 PR |
|-----|---------|
| Dashboard 切换会话复用同一 PTY | [#61290](https://github.com/nousresearch/hermes-agent/pull/61290) ✅ |
| custom_providers per-model max_tokens 忽略 | [#61254](https://github.com/nousresearch/hermes-agent/pull/61254) ✅ |
| MCP stdio 环境变量误删 | [#61294](https://github.com/nousresearch/hermes-agent/issues/61294) ✅ |
| 自签名 HTTPS SSL | [#28260](https://github.com/nousresearch/hermes-agent/issues/28260) ✅ |

仍有 **#61220、#58596、#60715、#61270** 等严重问题处于"已知但未修复"状态，建议维护者优先处理。

---

## 六、功能请求与路线图信号

| 需求 | 链接 | 已存在的相关 PR | 进入下版本的概率 |
|------|------|----------------|----------------|
| TUI 按时间顺序展示思考 + 工具调用 | [#18241](https://github.com/nousresearch/hermes-agent/issues/18241) | — | ⭐⭐⭐（👍 4，推理模型刚需） |
| Telegram Mini App Dashboard | — | [#58282](https://github.com/nousresearch/hermes-agent/pull/58282) | ⭐⭐⭐（已实现，默认关闭） |
| Cron per-job reasoning_effort 覆盖 | [#23524](https://github.com/nousresearch/hermes-agent/issues/23524) | — | ⭐⭐ |
| Desktop 关闭最小化到系统托盘 | [#61246](https://github.com/nousresearch/hermes-agent/issues/61246) | — | ⭐⭐（duplicate，社区高频） |
| Desktop 宠物气泡 + 控制可发现性 | [#61255](https://github.com/nousresearch/hermes-agent/issues/61255) | — | ⭐⭐ |
| Desktop 审批条展示多行 diff | [#61249](https://github.com/nousresearch/hermes-agent/issues/61249) | — | ⭐⭐⭐（与 PR #61315 配套） |
| UI 配置 custom_providers | [#52807](https://github.com/nousresearch/hermes-agent/issues/52807) | — | ⭐⭐ |
| Skill / Pipeline 修饰符独立文档 | [#61289](https://github.com/nousresearch/hermes-agent/issues/61289) | — | ⭐（自学习持久化方向） |
| computer_use Linux DISPLAY 检查 + 可插拔 backend | — | [#61310](https://github.com/nousresearch/hermes-agent/pull/61310), [#61311](https://github.com/nousresearch/hermes-agent/pull/61311) | ⭐⭐⭐（headless 部署刚需） |
| Dashboard 安全加固（CSRF / 凭据隔离） | — | [#61305](https://github.com/nousresearch/hermes-agent/pull/61305) | ⭐⭐⭐ |

**路线图趋势**：Desktop UX 国际化 / 完整化（托盘、宠物、审批可视化）+ Dashboard 安全与移动化（Telegram Mini App、Mobile reconnect）+ 本地 / 自托管 provider 一等公民地位，是未来 1-2 个版本最可能聚焦的三条主线。

---

## 七、用户反馈摘要

- **跨端一致性痛点**：用户期望 `/resume`、会话列表、cron 任务在 CLI / Desktop / WebUI / Telegram 上表现一致，#[#59224](https://github.com/nousresearch/hermes-agent/issues/59224)、[#48782](https://github.com/nousresearch/hermes-agent/issues/48782)、[#45360](https://github.com/nousresearch/hermes-agent/issues/45360) 三条 Issues 共同指向"会话状态是分层的、但用户认为是统一的"。
- **国际化和中文体验**：[#39534](https://github.com/nousresearch/hermes-agent/issues/39534)、[#61211](https://github.com/nousresearch/hermes-agent/issues/61211) 反映中文输入在 Windows Desktop 与 WeCom 两条路径上均有截断 / 路径溢出问题。
- **可靠性可视化缺失**：用户对 fallback 静默切换（[#35419](https://github.com/nousresearch/hermes-agent/issues/35419)）、Nous OAuth 耗尽无降级（[#61270](https://github.com/nousresearch/hermes-agent/issues/61270)）的不满，说明运维可观测性是当前的薄弱环节。
- **自托管 / 本地模型**：vLLM / LiteLLM / Ollama / LM-Studio 用户群体持续增长，SSL 自签名、per-model max_tokens、工具调用碎片化等问题集中在 [#28260](https://github.com/nousresearch/hermes-agent/issues/28260)、[#5254](https://github.com/nousresearch/hermes-agent/issues/5254)、[#61254](https://github.com/nousresearch/hermes-agent/pull/61254)。
- **正面信号**：[#61249](https://github.com/nousresearch/hermes-agent/issues/61249) 中用户对新审批 hook 给出"excellent"评价，说明 Desktop 端近期交互改进获得了认可。

---

## 八、待处理积压提醒

| Issue | 标题 | 打开时长（参考） | 风险标签 |
|-------|------|----------------|---------|
| [#58596](https://github.com/nousresearch/hermes-agent/issues/58596) | DaemonThreadPoolExecutor 在 Python 3.14 崩溃 | 4 天 | 并发核心路径全废，Python 3.14 兼容性 |
| [#61220](https://github.com/nousresearch/hermes-agent/issues/61220) | Session expiry 不写 end_reason，过期会话被复活 | <1 天 | sweeper:risk-session-state |
| [#61270](https://github.com/nousresearch/hermes-agent/issues/61270) | Gateway 启动阻塞在 Nous Portal OAuth | <1 天 | sweeper:risk-security-boundary |
| [#39838](https://github.com/nousresearch/hermes-agent/issues/39838) | notification_sources 文档存在但代码不读 | 1 个月 | 文档与实现脱节 |
| [#35419](https://github.com/nousresearch/hermes-agent/issues/35419) | Fallback 静默切换 | 10 天 | 用户感知层可靠性 |
| [#59224](https://github.com/nousresearch/hermes-agent/issues/59224) | /resume 跨端会话不可见 | 4 天 | UX 核心入口 |
| [#23524](https://github.com/nousresearch/hermes-agent/issues/23524) | per-cron reasoning_effort | 2 个月 | Cron 灵活性 |
| [#52807](https://github.com/nousresearch/hermes-agent/issues/52807) | UI 配置 custom_providers | 13 天 | 自托管入门门槛 |

**建议关注顺序**：安全 / 会话状态类（#61220、#61270、#58596）> 跨端 UX 核心入口（#59224）> 自托管配置（#52807、#39838、#23524）。

---

### 项目健康度评估：🟡 偏正向但存隐患

| 维度 | 评分 | 说明 |
|------|------|------|
| 迭代速度 | ⭐⭐⭐⭐⭐ | 单日 50 Issues + 50 PRs，提交密度极高 |
| 缺陷响应 | ⭐⭐⭐ | 当日新开严重 Bug 多有 PR 对应，但 #58596、#61220 仍 open |
| 社区活跃度 | ⭐⭐⭐⭐ | 高赞议题集中在真实使用痛点 |
| 版本稳定性 | ⭐⭐ | v0.17.0 Desktop 出现可触发更新死循环的严重回归 |
| 安全卫生 | ⭐⭐⭐⭐ | Dashboard 安全加固 PR #61305 即将落地 |

> 维护者建议：下一个补丁版本优先锁定 Desktop v0.17.0 渲染崩溃与会话状态两条主线，并清退 `notification_sources` 这类文档与实现脱节的"僵尸配置"。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报

**日期：2026-07-09**
**项目：sipeed/picoclaw**
**数据周期：过去 24 小时**

---

## 1. 今日速览

PicoClaw 今日整体活跃度处于**中等偏低**水平：共产生 2 条 Issue 更新与 3 条 PR 互动，未有新版本发布。社区关注点集中在 **OpenAI 兼容层在 NanoKVM 设备上的可用性**以及**多通道流式输出能力补齐**两个方面。代码侧推进较为积极——2 个历史较久的增强型 PR（#2278 网关绑定回退、#2251 Grafana Alertmanager 通道）已于今日关闭，新合并/待合入的工作聚焦在**工具安全**与**多通道生态扩展**。综合来看，项目处于稳步迭代期，无重大异常。

---

## 2. 版本发布

⚠️ **无新版本发布**。本周期未观察到任何 Release 标签或 CHANGELOG 更新。

---

## 3. 项目进展

今日共有 **2 条 PR 被关闭**（均为 enhancement 类型，长期挂起后清理），**1 条 PR 仍处于 Open 状态**：

| PR | 标题 | 类型 | 状态 | 链接 |
|---|---|---|---|---|
| #3226 | fix(tools): stop write_file from coaching destructive overwrite | Bug Fix | 🟡 Open | [#3226](https://github.com/sipeed/picoclaw/pull/3226) |
| #2278 | feat(gateway): fallback to wildcard bind with CIDR allowlist when loopback bind fails | Enhancement | 🔴 Closed | [#2278](https://github.com/sipeed/picoclaw/pull/2278) |
| #2251 | feat(channels): add Grafana Alertmanager webhook channel | Enhancement | 🔴 Closed | [#2251](https://github.com/sipeed/picoclaw/pull/2251) |

**主要进展评估：**

- **工具安全加固**：PR #3226 修复了 `write_file` 工具在覆盖已存在文件时反而"提示"模型如何绕过防护的设计缺陷。由于 PicoClaw 没有专门的 memory-write 工具，Agent 通常通过通用文件工具写入 `memory/MEMORY.md`，这一漏洞被明文描述为 "coached the model toward it"，属于**安全语义层面的回退**。该 PR 仍待合并，是今日最值得推进的修复。
- **网关启动鲁棒性**（#2278）：在 loopback 绑定失败时回退到通配符绑定 + CIDR 白名单。该 PR 已关闭，但未明确是合并还是拒收，从状态变化看属于长期挂起后的清理动作。
- **告警生态扩展**（#2251）：新增 Grafana Alertmanager 入站通道，已关闭。该功能强化了 PicoClaw 在 DevOps 告警场景的接收能力，符合"输入通道"扩张的产品路线。

整体而言，今日推进了**工具安全语义**与**生态接入面**两个方向，但因无 release 输出，对终端用户的影响暂未释放。

---

## 4. 社区热点

今日社区关注度集中在两条 Issue 上，互动量虽不大但诉求明确：

- 🔥 **[#3195] OpenAI GPT does not work on NanoKVM with default config**（2 条评论）  
  作者按官方文档配置 `gpt-5.4`，但与 PicoClaw 的所有交互均返回失败。  
  [https://github.com/sipeed/picoclaw/issues/3195](https://github.com/sipeed/picoclaw/issues/3195)  
  **诉求分析**：该 Issue 与 NanoKVM 2.4.0 新特性直接相关，反映出 PicoClaw 在**嵌入式设备**（NanoKVM）场景下的 OpenAI 兼容层可能存在协议、API key 注入或网络可达性的回归——这是 PicoClaw 与 Sipeed 硬件生态交叉的核心场景，影响品牌信任度。

- 🔥 **[#3201] Support streaming output for QQ channel**（1 条评论）  
  作者希望 QQ 通道支持 token 级流式输出，对齐 Telegram 与 Pico WebSocket 已实现的 `StreamingCapable` 能力。  
  [https://github.com/sipeed/picoclaw/issues/3201](https://github.com/sipeed/picoclaw/issues/3201)  
  **诉求分析**：国内即时通讯通道（QQ）体验差距明显，流式输出缺失直接拉低用户对 LLM 响应速度的主观感知。该 Issue 已标记 `[stale]`，但用户诉求真实且实现路径明确（参考 Telegram 实现即可）。

---

## 5. Bug 与稳定性

| 严重程度 | Issue/PR | 描述 | 是否有 Fix PR |
|---|---|---|---|
| 🟠 **中** | [#3195](https://github.com/sipeed/picoclaw/issues/3195) | OpenAI GPT（gpt-5.4）在 NanoKVM 默认配置下完全不可用，官方文档所列供应商配置流程疑似存在回归或缺失步骤 | ❌ 暂无 |
| 🟡 **低** | [#3226](https://github.com/sipeed/picoclaw/pull/3226) | `write_file` 在文件已存在时引导模型进行覆盖，属于安全语义瑕疵而非崩溃类 Bug | ✅ 修复 PR 已提交待合并 |

**稳定性评估**：未观察到崩溃、性能退化或安全 CVE 类问题；当前最关键的稳定性风险点为 #3195，它直接影响 NanoKVM 用户上手体验。

---

## 6. 功能请求与路线图信号

| 需求 | 来源 | 可纳入下版本的概率 | 理由 |
|---|---|---|---|
| QQ 通道流式输出 | [#3201](https://github.com/sipeed/picoclaw/issues/3201) | 🟢 较高 | 实现路径清晰（复用 `StreamingCapable`），且 Telegram/Pico WebSocket 已具备，跨通道一致性诉求强 |
| Grafana Alertmanager 入站通道 | [#2251](https://github.com/sipeed/picoclaw/pull/2251) | 🟡 视合并状态 | PR 已关闭，需要确认是否合并；若未合并则属于路线图候选 |
| Loopback 不可用时的网关绑定回退 | [#2278](https://github.com/sipeed/picoclaw/pull/2278) | 🟡 视合并状态 | 同上 |

**路线图信号总结**：PicoClaw 正在持续扩展**输入通道生态**（Grafana Alertmanager、QQ 等），同时补齐**流式输出一致性**与**工具安全语义**。这两条线索与 Issue/PR 行为高度一致，预计将在后续版本形成系统性输出。

---

## 7. 用户反馈摘要

- **痛点 1：文档-实现脱节（来自 #3195）**  
  用户严格按官方文档配置 gpt-5.4 但全部失败，反映出 PicoClaw 的**配置文档与代码实现存在同步滞后**，尤其在 NanoKVM 这类新增平台上缺乏端到端验证。

- **痛点 2：跨通道体验不一致（来自 #3201）**  
  QQ 通道缺乏流式输出，用户必须等待完整响应，体验明显劣于 Telegram。这反映出**通道实现成熟度分化**——核心通道（Telegram）打磨充分，长尾通道（QQ）跟进不足。

- **使用场景信号**  
  PicoClaw 用户群正从纯聊天机器人场景向 **嵌入式控制（NanoKVM）** 与 **运维告警接入（Grafana Alertmanager）** 双方向扩展，这要求维护者在协议兼容性与 IoT/运维场景的稳定性上投入更多精力。

---

## 8. 待处理积压

⚠️ 以下 Issue/PR 已挂起较长时间，建议维护者优先 review：

- **[#3195 OpenAI GPT 不可用](https://github.com/sipeed/picoclaw/issues/3195)** — 创建于 2026-06-30，距今 9 天。涉及 NanoKVM 新特性 + 官方文档，已产生 2 条用户讨论但无维护者回复。**优先级：高**。
- **[#3201 QQ 流式输出](https://github.com/sipeed/picoclaw/issues/3201)** — 创建于 2026-07-01，已被自动标记 `[stale]`。实现成本低、用户面广，建议解除 stale 并排期。**优先级：中**。
- **[#3226 write_file 安全修复](https://github.com/sipeed/picoclaw/pull/3226)** — 创建于 2026-07-05，提交 4 天未获任何评论或 review。**优先级：高**（安全语义类问题不宜长期搁置）。

---

## 附录：数据指标

| 指标 | 数值 |
|---|---|
| Issue 更新数（24h） | 2 |
| 新开 Issue | 0 |
| 已关闭 Issue | 0 |
| PR 更新数（24h） | 3 |
| 待合并 PR | 1 |
| 已关闭 PR | 2 |
| 新 Release | 0 |
| 累计 Issue 评论 | 3 |
| 累计 PR 👍 | 0 |

> 报告生成时间：2026-07-09  
> 数据源：GitHub REST API（sipeed/picoclaw）

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报
**日期：2026-07-09 | 数据周期：过去 24 小时**

---

## 1. 今日速览

NanoClaw 仓库在过去 24 小时呈现**中高度活跃状态**：2 条新 Issue、28 条 PR 更新（24 条待合并、4 条已关闭），无新版本发布。核心团队（gabi-simons、omri-maya、Koshkoshinsk、glifocat、gavrielc 等）持续推进"scheduled-tasks"系列 PR 的落地（已完成 Part 1/6），同时新增多围绕**稳定性修复、CLI 重构、harness 能力治理**的高质量 PR。社区 Issue 数量虽少但聚焦关键问题，尤其是 opencode provider 的静默丢回复 bug 影响线上体验，需重点关注。

---

## 2. 版本发布

⚠️ 过去 24 小时**无新版本发布**。

---

## 3. 项目进展

今日共 **4 条 PR 已合并/关闭**，标志着几个关键模块向前推进：

### ✅ 已合并/关闭的重要 PR

| PR | 标题 | 作者 | 意义 |
|---|---|---|---|
| [#2980](https://github.com/qwibitai/nanoclaw/pull/2980) | ncl CLI: verb-level args, deep help, server-rendered human view | omri-maya | **scheduled-tasks 系列 Part 1/6**：CLI 引入严格的参数校验、错误修复建议和服务端渲染的人类可读视图，奠定后续 5 个 part 的基础 |
| [#1702](https://github.com/qwibitai/nanoclaw/pull/1702) | fix: break for-await loop on result to prevent IPC message loss | jbaruch | 修复 IPC 消息丢失的长期隐患（PR 自 2026-04-08 起悬置近 3 个月，终于合入） |
| [#2978](https://github.com/qwibitai/nanoclaw/pull/2978) | ci: auto-label PRs from core team members | gabi-simons | 自动化标签流程优化，core-team PR 自动打标，便于 issue triage |

### 📊 进展评估
- **scheduled-tasks 大特性**正式进入迭代轨道（5 part 中已完成 1，#2981 是 Part 2/5）
- **IPC 可靠性**得到历史性修复（#1702），消除潜在消息丢失风险
- **CI 工程化**继续完善（#2978）
- 项目整体**稳步向前**，核心团队执行力强

---

## 4. 社区热点

虽然今日所有 PR/Issue 评论数均为 0（数据快照），但从**话题热度与技术影响力**角度，以下 Issues 和 PRs 最值得关注：

### 🔥 高关注度 Issues

1. **[#2985 opencode provider 静默丢回复 bug](https://github.com/qwibitai/nanoclaw/issues/2985)**
   - 作者：fjnoyp
   - 痛点：在长 agentic turn 中，opencode provider 完成会话但**不投递任何回复、也不抛错**，表现为"机器人无视消息"
   - 影响：严重影响 opencode 用户线上体验，定位为"silent failure"类问题
   - 根因初判：final text snapshot 缺失 session.idle 事件，导致 `answer` 卡在 `message.part.delta` 中未读

2. **[#2984 Discord 线程自动重命名](https://github.com/qwibitai/nanoclaw/issues/2984)**
   - 作者：eagansilverpathmarketing
   - 诉求：为 Discord 适配器增加 `rename_thread` host-side 工具，让 agent 按主题自动重命名线程（替代默认的 `Thread 7/8/2026, 3:28 PM`）
   - 场景：busy server 上大量线程难以快速浏览

### 🔥 高影响力 PRs（按战略价值）

- **[#2981 scheduled-tasks Part 2/5](https://github.com/qwibitai/nanoclaw/pull/2981)** — 完整 `ncl tasks` 资源（取代 #2947），含 isolated sessions / run history / pre-task script gate
- **[#2983 per-group harness capability toggles](https://github.com/qwibitai/nanoclaw/pull/2983)** — agent-teams & workflow 默认关闭，收敛到 NanoClaw 自己的 `schedule_task`
- **[#2982 agent-runner tool allowlist drift guard](https://github.com/qwibitai/nanoclaw/pull/2982)** — 修正 5 个已被上游重命名/移除的工具，加固 SDK 与 CLI 版本对齐
- **[#2979 Discord bare URL masked links fix](https://github.com/qwibitai/nanoclaw/pull/2979)** — 升级 `@chat-adapter/*` + chat 到 4.32.0 修复 Discord 链接渲染
- **[#2742 PR Factory recipe](https://github.com/qwibitai/nanoclaw/pull/2742)** — 长期未合并（创建于 2026-06-11），社区价值的 PR 评审自动化模板

---

## 5. Bug 与稳定性

按严重程度排列：

### 🚨 P0 - 线上功能完全失效
- **[#2985 opencode provider silent no-reply](https://github.com/qwibitai/nanoclaw/issues/2985)**
  - 影响：opencode 用户完全收不到回复，且无任何错误信号
  - 状态：❌ 暂无关联 fix PR
  - **建议：维护者优先排查 session.idle 事件订阅链路**

### ⚠️ P1 - 工具/能力漂移
- **[#2982 agent-runner TOOL_ALLOWLIST drift](https://github.com/qwibitai/nanoclaw/pull/2982)**
  - 问题：`TOOL_ALLOWLIST` 中 5 个工具在 pinned claude-code CLI 2.1.197 已不存在（`Task` → `Agent`、`TodoWrite`、`TeamCreate`、`TeamDelete`、`ToolSearch`）
  - 状态：✅ 已有 fix PR（#2982），并加入 drift guard
  - 影响范围：Claude provider 用户可能遭遇工具调用静默失败

### 🐛 P2 - 历史 bug 修复
- **[#1702 IPC message loss](https://github.com/qwibitai/nanoclaw/pull/1702)** — ✅ 已关闭/合入
- **[#2878 codex stale OpenAI secret reconnect](https://github.com/qwibitai/nanoclaw/pull/2878)** — OneCLI 重连逻辑修复（待合并）
- **[#2913 whatsapp-cloud instance key collision](https://github.com/qwibitai/nanoclaw/pull/2913)** — 注册 key 冲突修复（待合并）

---

## 6. 功能请求与路线图信号

### 📥 新功能请求（今日 Issue）

| 功能 | Issue | 实现可行性 |
|---|---|---|
| Discord 线程自动重命名 | [#2984](https://github.com/qwibitai/nanoclaw/issues/2984) | ⭐⭐⭐⭐ 高 — 提案明确为"small, safe capability"，只需新增 host-side `rename_thread` 工具，建议纳入下个 minor 版本 |

### 🛣️ 路线图信号

根据今日 PR 列表，以下方向**正在被推进**（强烈信号将进入下个版本）：

1. **Scheduled Tasks 全套基础设施**（[#2980](https://github.com/qwibitai/nanoclaw/pull/2980)、[#2981](https://github.com/qwibitai/nanoclaw/pull/2981)）— 5/6 个 PR 中已完成 1 个
2. **Per-group harness capability 治理**（[#2983](https://github.com/qwibitai/nanoclaw/pull/2983)）— 将 NanoClaw 重复实现的能力收敛到自有路径
3. **CLI 升级 + 模板化 setup 向导**（[#2980](https://github.com/qwibitai/nanoclaw/pull/2980)、[#2909](https://github.com/qwibitai/nanoclaw/pull/2909)）— 改善首次用户体验
4. **Add-Teams 流程简化**（[#2958](https://github.com/qwibitai/nanoclaw/pull/2958)）— Azure portal 7 步精简到 2 步
5. **ProviderEvent union 扩展**（[#2770](https://github.com/qwibitai/nanoclaw/pull/2770)）— codex 图像生成支持

---

## 7. 用户反馈摘要

由于数据快照中 Issues/PRs 评论数均为 0，本节基于**摘要文本**提炼用户痛点：

### 😣 用户痛点
- **"机器人不回复我"但没有任何错误提示**（[#2985](https://github.com/qwibitai/nanoclaw/issues/2985)）
  > "the messaging bot **silently posts no reply** on some long agentic turns... it looks like the bot ignored the message"
  - 用户最痛恨的是**silent failure**：比报错更糟糕的是"看起来正常但其实坏了"
  
- **Discord 线程名称不友好**（[#2984](https://github.com/qwibitai/nanoclaw/issues/2984)）
  > "Over a busy server these date-named threads become impossible to scan"
  - 用户希望以"主题"而非"时间"浏览会话

- **PR Factory 长期未合并**（[#2742](https://github.com/qwibitai/nanoclaw/pull/2742)）
  - 创建于 2026-06-11（已 27 天），社区期待的"PR 评审自动化"recipe 仍未落地

### 💡 使用场景信号
- **企业部署**：`DEFAULT_AGENT_PROVIDER` 实例级默认（[#2906](https://github.com/qwibitai/nanoclaw/pull/2906)）表明 NanoClaw 在向多 group 集群场景演进
- **WhatsApp Cloud 接入**：[#2913](https://github.com/qwibitai/nanoclaw/pull/2913)、[#2914](https://github.com/qwibitai/nanoclaw/pull/2914) 显示社区对云版 WhatsApp 集成的需求
- **多 provider 并存**：opencode / claude / codex 三个 provider 同时演进，需要统一的 capability 治理（呼应 #2983）

---

## 8. 待处理积压

提醒维护者关注**长期未合并的重要 PR**：

| PR | 标题 | 创建日期 | 已等待 | 优先级 |
|---|---|---|---|---|
| [#2742](https://github.com/qwibitai/nanoclaw/pull/2742) | PR Factory recipe | 2026-06-11 | **27 天** | 🔥 高（社区战略价值） |
| [#2798](https://github.com/qwibitai/nanoclaw/pull/2798) | chore(release): expand CHANGELOG for v2.1.17 | 2026-06-17 | 21 天 | 中（发布阻塞） |
| [#2770](https://github.com/qwibitai/nanoclaw/pull/2770) | fix(codex): deliver harness file events | 2026-06-14 | 24 天 | 🔥 高（build break 风险） |
| [#2873](https://github.com/qwibitai/nanoclaw/pull/2873) | fix(skills): split pre-flight from credentials (#2868) | 2026-06-27 | 11 天 | 中 |
| [#2878](https://github.com/qwibitai/nanoclaw/pull/2878) | fix(codex): allow reconnect when OneCLI has stale secret | 2026-06-28 | 10 天 | 🔥 高（影响线上 Codex 用户） |
| [#2921](https://github.com/qwibitai/nanoclaw/pull/2921) | fix(compose): gate skill fragments on group skill selection | 2026-07-03 | 5 天 | 中 |

### 📌 维护者建议
1. **优先评审 [#2742](https://github.com/qwibitai/nanoclaw/pull/2742) PR Factory** — 社区期待已久，且能反哺项目自身的 PR review 流程
2. **加急处理 [#2985](https://github.com/qwibitai/nanoclaw/issues/2985) opencode 静默 bug** — 避免用户流失
3. **审查 #2980 → #2981 → 后续 parts 的合并顺序** — scheduled-tasks 系列需要按依赖顺序合入，避免 trunk 长时间 broken

---

## 📊 项目健康度指标

| 维度 | 评分 | 说明 |
|---|---|---|
| 提交活跃度 | ⭐⭐⭐⭐ | 28 条 PR 更新，core team 持续输出 |
| 社区响应速度 | ⭐⭐⭐ | 2 条 Issue 均 0 评论，但创建时间 ≤ 24h |
| 核心稳定性 | ⭐⭐⭐ | opencode provider 有 P0 silent failure 待修复 |
| 路线图清晰度 | ⭐⭐⭐⭐⭐ | scheduled-tasks 6-part 拆分明确 |
| 长期积压 | ⚠️ | PR #2742 等待 27 天，#2770 等待 24 天 |

**总体评估：项目处于"高频迭代+稳步收敛"阶段**，scheduled-tasks 等核心特性即将合入，但 opencode 静默 bug 与若干长期积压 PR 需维护者主动推进。

---

*报告生成时间：2026-07-09 | 数据源：GitHub API*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目日报 · 2026-07-09

> 数据来源：nearai/ironclaw GitHub 仓库过去 24 小时动态

---

## 1. 今日速览

IronClaw 今日进入"高频 bug_bash + 清理 v1 遗产"双线并行阶段。过去 24 小时内共产生 20 条 Issue、50 条 PR 的更新量,活跃度处于项目近期高位。**Issue 关闭率 25%(5/20)、PR 关闭/合并率 24%(12/50)**,整体吞吐量与消化能力基本平衡,但新增 bug 报告(尤其是 routine / 上下文压缩 / Slack 相关 P2 问题)仍高于关闭速度,积压风险初现。技术债务清理方向明确——3 个 v1 旧覆盖率测试相关的 Issue(#5826/#5827/#5828)及对应 PR(#5829/#5830)同步推进,显示团队正在为 Reborn 架构瘦身。

---

## 2. 版本发布

**无新版本发布。**

但值得注意的是 [`chore: release` PR #5598](https://github.com/nearai/ironclaw/pull/5598) 已在排队中,涉及多 crate 版本变更:

| Crate | 变更 | 兼容性 |
|---|---|---|
| `ironclaw_common` | 0.4.2 → 0.5.0 | ⚠ 破坏性变更 |
| `ironclaw_safety` | 0.2.2 → 0.2.3 | ✓ 兼容 |
| `ironclaw_skills` | 0.3.0 → 0.4.0 | ⚠ 破坏性变更 |
| `ironclaw` | 0.24.0 → 0.29.1 | — |
| `ironclaw_skill_learning` | 0.1.0 → 0.1.1 | ✓ 兼容 |

下游依赖方需关注 `ironclaw_common` 与 `ironclaw_skills` 的 API 变更。建议在合并前查阅 PR diff 准备迁移。

---

## 3. 项目进展

今日关闭/合并的 PR 中,以下几项具有里程碑意义:

### 🟢 已闭合/合并的重要 PR

| PR | 标题 | 影响 |
|---|---|---|
| [#5858](https://github.com/nearai/ironclaw/pull/5858) | Trace Commons instance enrollment CLI + hosted-user account login links | 补齐 #5280 "Path B" 流程的运营侧落地能力,管理员可使用 operator invite 引导整个实例加入 Trace Commons |
| [#5759](https://github.com/nearai/ironclaw/pull/5759) | fix: show live tool activity details | 实时展示工具调用详情,直接回应 #5701、#5860 的核心痛点 |
| [#5681](https://github.com/nearai/ironclaw/pull/5681) | fix: keep active approval notifications visible | 修复审批通知闪烁即消失问题,对应 #5553 |
| [#5760](https://github.com/nearai/ironclaw/pull/5760) | fix: hide raw thread ids in sidebar | 侧边栏不再泄漏原始 thread id,提升产品质感 |
| [#5758](https://github.com/nearai/ironclaw/pull/5758) | fix: keep chat image previews opaque | 修正附件/图片预览在运行态下的透明度回归 |

### 🔧 仍在评审中但已显出方向的工作

- **性能优化线**:[#5857 减少 API pre-model 延迟](https://github.com/nearai/ironclaw/pull/5857) 叠加 [#5855 压力测试 harness](https://github.com/nearai/ironclaw/pull/5855),构成"先建度量,后改实现"的稳健闭环。
- **流式输出线**:[#5821 WebUI 投影流式传输](https://github.com/nearai/ironclaw/pull/5821) 启用 NEAR AI Chat 的 `stream: true`,用户首次响应延迟有望明显改善。
- **私有工具/技能**:[#5525](https://github.com/nearai/ironclaw/pull/5525) + [#5780](https://github.com/nearai/ironclaw/pull/5780) 共同推进 SSO 用户的私有工具与管理员安装技能体系。
- **v1 清理线**:[#5829](https://github.com/nearai/ironclaw/pull/5829) / [#5830](https://github.com/nearai/ironclaw/pull/5830) 删除已退役的 v1 覆盖率测试与孤儿 fixture,降低 CI 维护成本。

> **整体进度评估**:项目在"用户体验可见层"(UI 通知、聊天流、活动面板)与"后台能力层"(性能、流式、私有化部署)双向推进,但未完成 PR 与新增 bug 数量基本持平,净推进幅度约 12 项实质性变更,**处于"稳步收敛"而非"加速突破"状态**。

---

## 4. 社区热点

按活跃度排序,今日讨论最热的几个话题:

### 🔥 工具活动面板体验(#5701, #5860)
- [#5701](https://github.com/nearai/ironclaw/issues/5701) **3 条评论** — Activity panel 折叠工具详情,运行中不实时刷新,用户必须等待运行结束才能查看。
- [#5860](https://github.com/nearai/ironclaw/issues/5860) **今日新开** — 同一问题的另一面:用户手动展开运行时,详情也只在调用结束后才填充。

> **背后诉求**:从被动展示转向"可观测的运行态"。用户希望像传统 IDE/CLI 那样看到 agent 正在做什么、用了什么工具、返回了什么。

### 🔥 审批通知丢失(#5553, PR #5681)
- [#5553](https://github.com/nearai/ironclaw/issues/5553) **3 条评论** — 自动化运行需要用户授权时(如 web-access.search 的网络能力),通知闪烁即消失或在通知历史中找不到。

> **背后诉求**:审批是 safety & trust 链路的核心,任何"通知丢失"都会让用户怀疑 agent 是否按预期停在了"安全检查点"。

### 🔥 Daily 失败分类报告(#5859, #5788)
- [#5859](https://github.com/nearai/ironclaw/issues/5859) **今日新开** — 7 月 9 日 pinchbench 44 条非通过,被上游 provider rate-limiting 饱和。
- [#5788](https://github.com/nearai/ironclaw/issues/5788) — 7 月 8 日 pinchbench 3 条非通过,主要是 harness 缺陷叠加一类主导问题。

> **背后诉求**:建立"每天定时归类失败 → 公开归档"的工作流,正在成为项目可见质量信号的一部分。

---

## 5. Bug 与稳定性

按 P 级别排序(降序):

### 🔴 P1
- **[#3535 UI 时间戳错误](https://github.com/nearai/ironclaw/issues/3535)** — ✅ 已关闭(2 个月未解,今日关闭)。环境 hosted-staging v0.28.1,影响聊天消息显示的"收到时间"。关闭动作发生在 #5701 提交之后,推测与 UI 时间处理重构同步修复。

### 🟠 P2(高频聚集,需重点关注)
| Issue | 描述 | 状态 |
|---|---|---|
| [#5836 Routine fails "No thread attached"](https://github.com/nearai/ironclaw/issues/5836) | `ironclaw-issues-slack-summary` 每 5 分钟失败,0% 成功率 | 🆕 今日新开,**无 fix PR** |
| [#5838 Context compaction 错误](https://github.com/nearai/ironclaw/issues/5838) | 多步工具调用成功后,context compaction 阶段失败 | 🆕 今日新开,**无 fix PR** |
| [#5837 Routine 操作按钮不可点](https://github.com/nearai/ironclaw/issues/5837) | "Open run"、"Logs" 渲染但无交互 | 🆕 今日新开,**无 fix PR** |
| [#5834 Slack 断开请求被拒绝](https://github.com/nearai/ironclaw/issues/5834) | agent 错误回应"无法执行" | 🆕 今日新开,🔧 [PR #5851](https://github.com/nearai/ironclaw/pull/5851) Slack 清理统一化正在评审 |
| [#5701 活动面板折叠](https://github.com/nearai/ironclaw/issues/5701) | 工具调用详情被压成一行 | 🔧 [PR #5759 已关闭](https://github.com/nearai/ironclaw/pull/5759) 但 [#5860](https://github.com/nearai/ironclaw/issues/5860) 反映问题并未完全消除 |
| [#5553 审批通知消失](https://github.com/nearai/ironclaw/issues/5553) | 通知闪烁即消失 | 🔧 [PR #5681 已关闭](https://github.com/nearai/ironclaw/pull/5681) |

### 🟡 P3
- [#5835 "Jump to latest" 按钮误显](https://github.com/nearai/ironclaw/issues/5835) — 按钮本不应出现的位置出现,遮挡聊天内容。🆕 今日新开,无 fix PR。
- [#5419 无重命名 automation 选项](https://github.com/nearai/ironclaw/issues/5419) — ✅ 已关闭(预计将由 #5824 或相关 UI 工作间接覆盖)。

### 🔵 自动化报告(已关闭)
- [#4108 Nightly E2E 失败](https://github.com/nearai/ironclaw/issues/4108) — 由 github-actions 关闭。

> **稳定性评估**:**P2 集群性新增 5 条 + 历史 P2 仍在评议**,routine / Slack / 上下文压缩三条线交织,提示 scheduler ↔ thread 绑定、agent capability 推断、context window 管理三处需要同时治理。

---

## 6. 功能请求与路线图信号

### 已被显式实现的潜在需求

| 用户诉求 | 对应 PR | 状态 |
|---|---|---|
| 私有工具安装(SSO 用户) | [#5525](https://github.com/nearai/ironclaw/pull/5525) | 🔄 评审中 |
| 管理员安装 + 私有技能 | [#5780](https://github.com/nearai/ironclaw/pull/5780) | 🔄 评审中 |
| WebChat 附件上限(>10 文件) | (尚无明确 PR,但 [#5820](https://github.com/nearai/ironclaw/issues/5820) 已明确提出) | 📝 跟踪中 |
| Trace Commons 实例级注册 | [#5858](https://github.com/nearai/ironclaw/pull/5858) | ✅ 已关闭 |
| 聊天终端快捷方式可隐藏 | [#5824](https://github.com/nearai/ironclaw/pull/5824) | 🔄 评审中 |
| WebUI 助手文本流式输出 | [#5821](https://github.com/nearai/ironclaw/pull/5821) | 🔄 评审中 |

### 信号解读
- **私有化**是本阶段最明确的路线图主题(技能/工具双轨并行)。
- **流式响应 + 性能** 是另一条主线(API 容量 + WebUI 投影),合并后大概率影响下一个次版本号的用户体感。
- **WebChat 附件上限**(#5820)虽然只是用户一次反馈,但命中了"日常生产力上限",有较高概率被纳入下个 sprint。

---

## 7. 用户反馈摘要

从 Issue 描述与评论中提炼的真实痛点:

1. **"我看不到 agent 在做什么"** — [#5701](https://github.com/nearai/ironclaw/issues/5701) / [#5860](https://github.com/nearai/ironclaw/issues/5860):用户被迫等待运行结束或猜测 agent 行为,体感接近"黑盒批处理"。

2. **"通知为什么消失"** — [#5553](https://github.com/nearai/ironclaw/issues/5553):用户对安全审批链路的可信度受损,担心 agent 在背后自行放行。

3. **"Routnine 一直 100% 失败"** — [#5836](https://github.com/nearai/ironclaw/issues/5836):即便用户已经按部就班创建 routine,scheduler 与 thread 绑定层的缺陷让其完全失效,体验极差。

4. **"我没法断开 Slack"** — [#5834](https://github.com/nearai/ironclaw/issues/5834):用户在隐私与控制层面的挫败感,这是 agent 自治范式与人类控制权的冲突点。

5. **"聊天按钮挡视线 / 位置错"** — [#5835](https://github.com/nearai/ironclaw/issues/5835):UI 细节回归让用户对产品质量产生不信任。

6. **"automation 名字太长没法改"** — [#5419](https://github.com/nearai/ironclaw/issues/5419):基础 CRUD 缺失,典型"agent auto-generate 后用户无法修正"场景。

7. **"附件 10 个限制太死"** — [#5820](https://github.com/nearai/ironclaw/issues/5820):真实工作流连续两次触顶,且超额时静默跳过,完全无提示,UX 双失分。

> **总体满意度信号**:项目处于"骨架稳定、毛刺偏多"阶段,用户对核心 agent 能力满意但对周边 UX 容忍度在下降。

---

## 8. 待处理积压

以下重要 Issue/PR 已超过 24 小时未响应,建议维护者优先关注:

| 编号 | 类型 | 标题 | 静默时间 | 备注 |
|---|---|---|---|---|
| [#5553](https://github.com/nearai/ironclaw/issues/5553) | Issue | 审批通知消失 | 7 天 | 有对应 PR #5681 关闭,需验证是否真的解决了"通知历史中找不到"的部分 |
| [#5701](https://github.com/nearai/ironclaw/issues/5701) | Issue | 活动面板折叠 | 3 天 | PR #5759 已关闭但 #586

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目日报
**日期：2026-07-09**

---

## 1. 今日速览

LobsterAI 今日呈现**高强度合并日**特征：过去 24 小时内有 **10 个 PR 集中关闭/合并**，涵盖 Cowork 协作、OpenClaw 扩展、IM 集成、内存管理与 Windows 平台优化等多个核心模块，活跃度明显高于近期平均水平。Issues 侧 5 开 1 闭，其中一个**关键数据丢失 Bug（USER.md 跨 Agent 覆盖）**已在同日被 PR #2295 修复并合并，闭环速度较快。整体来看，项目处于**集中修复与小步迭代并行推进**的健康状态，但仍存在一批来自 4 月的"stale"功能请求 PR 未得到维护者关注，存在响应滞后风险。

---

## 2. 版本发布

无新版本发布。

---

## 3. 项目进展

今日合入的 10 个 PR 推进了多个关键能力，可分为四类：

**🐛 关键 Bug 修复**
- **#2295**（[链接](https://github.com/netease-youdao/LobsterAI/pull/2295)）— 修复 USER.md Bootstrap 文件未按 Agent 隔离的 Bug。该 Bug 导致用户在任何 Agent 中修改"关于你"或 USER.md 后，所有 Agent 的 USER.md 都会被主 Agent 的版本覆盖。修复后 Bootstrap IPC 接受 `agentId` 参数，config sync 不再向非主 Agent 传播 USER.md。**这是今日最重要的修复，直接闭环了 Issue #2293**。
- **#2299**（[链接](https://github.com/netease-youdao/LobsterAI/pull/2299)）— 子 Agent 工具调用历史同步：抽取共享解析器，让子会话页面能正确展示工具调用与结果，并恢复孤儿工具结果。
- **#2298**（[链接](https://github.com/netease-youdao/LobsterAI/pull/2298)）— IM 频道会话映射按 Agent 隔离，避免不同 Agent 间的会话串扰，同时保留旧版查询兼容。

**🚀 新功能**
- **#2302**（[链接](https://github.com/netease-youdao/LobsterAI/pull/2302)）— Windows 品牌化标题栏（Logo + 名称 + 原生窗口控件），并把折叠侧边栏操作、合撰写按钮、徽标整合进标题栏。
- **#2296**（[链接](https://github.com/netease-youdao/LobsterAI/pull/2296)）— Cowork 权限弹窗可最小化：顶部显示紧凑的"等待确认"条，按会话隔离已最小化的弹窗与侧边栏徽标。
- **#2300**（[链接](https://github.com/netease-youdao/LobsterAI/pull/2300)）— Steer 队列支持附件：排队中的后续消息现在可携带文件、拖拽文件、粘贴文件、选中文本、图片等多种负载，并在排队前对图片做轻量快照。

**🛠 体验优化与本地化**
- **#1397**（[链接](https://github.com/netease-youdao/LobsterAI/pull/1397)）— 会话列表 compact 时间字段（`now`/`26m`/`17h`/`1d`/`3d`）按系统语言本地化，中文用户不再看到英文缩写。
- **#1396**（[链接](https://github.com/netease-youdao/LobsterAI/pull/1396)）— 增强卸载体验：完整清理 `%APPDATA%\LobsterAI` 和 `%LOCALAPPDATA%\LobsterAI`，卸载前检测应用是否运行并给出引导。

**⚙️ OpenClaw 引擎层**
- **#2301**（[链接](https://github.com/netease-youdao/LobsterAI/pull/2301)）— 显式写入 `dreaming.enabled=false`，让 OpenClaw 能协调并移除过期的受管 dream 定时任务。
- **#2297**（[链接](https://github.com/netease-youdao/LobsterAI/pull/2297)）— 内存搜索默认走本地 FTS（trigram）：即便 embedding 搜索关闭也会生成 `memorySearch` 配置；为已有用户提供 gateway 启动期迁移。

**整体评价**：今日 10 个 PR 的合并密度属于近期罕见，跨 main / renderer / openclaw / cowork / docs 五大模块均有产出，项目整体向"多 Agent 隔离 + 内存子系统规范化 + Windows 平台打磨"方向稳步迈进。

---

## 4. 社区热点

今日社区互动量并不算高，但有一个**用户痛点极强**的议题值得关注：

- **#2293 [用户原帖]**（[链接](https://github.com/netease-youdao/LobsterAI/issues/2293)）— *"重启后，多个 Agent 下的 USER.md 被覆盖替换的 BUG？"*，作者 yepcn 报告编辑任一 Agent 的 USER.md 后，其他 Agent 都会被同步覆盖，导致无法为不同 Agent 建立差异化需求。该帖在 7/9 追加了详细复现说明（关闭软件→单独修改 workspace-*/USER.md→重启后被 main agent 覆盖），并怀疑是近期更新引入的回归。
  - **诉求本质**：多 Agent 系统的**数据隔离性**失败，触碰了用户最核心的"为每个 Agent 设定独立人格/规则"的诉求。
  - **值得欣慰的是**：同一天 PR #2295 已落地修复，闭环速度非常理想，是良好的 Bug → PR → 合并节奏范例。

其余 5 个标记为 `[stale]` 的功能请求（#1339、#1341、#1343、#1345，以及 #1394 已关闭）大多仅有 1-2 条评论、0 赞，热度有限，主要由开发者 MaoQianTu 与 zqgittest 发起。

---

## 5. Bug 与稳定性

| 严重程度 | Issue | 描述 | 是否有 Fix PR | 状态 |
|---|---|---|---|---|
| 🔴 高 | [#2293](https://github.com/netease-youdao/LobsterAI/issues/2293) | 多 Agent 共享 USER.md 互相覆盖，导致个性化设定失效 | ✅ [PR #2295](https://github.com/netease-youdao/LobsterAI/pull/2295) 已合并 | 已修复 |
| 🟡 中 | [#1394](https://github.com/netease-youdao/LobsterAI/issues/1394) | 一次性定时任务执行后自动删除，与"可复用"预期不符 | ❌ 仅关闭（标记为 stale），未提供修复 | 关闭未修 |

**回归风险提示**：PR #2295 的修复涉及 main + docs + renderer + openclaw 多模块，修改了 Bootstrap IPC 签名与 config sync 流程，**建议在下一个正式发布版本前重点回归多 Agent 创建/编辑/同步路径**，尤其是升级用户的存量 USER.md 是否能被正确重新分布到各自 workspace。

---

## 6. 功能请求与路线图信号

今日未收到全新功能请求，仍有以下**长期挂着但已具备现成 PR**的功能需求：

| 功能 | Issue | PR 状态 |
|---|---|---|
| 用户消息气泡显示发送时间戳 | [#1339](https://github.com/netease-youdao/LobsterAI/issues/1339) | 🟡 [#1340](https://github.com/netease-youdao/LobsterAI/pull/1340) OPEN，自 4/2 起未获响应，标 stale |
| 输入框 ↑/↓ 方向键回溯历史发送 | [#1341](https://github.com/netease-youdao/LobsterAI/issues/1341) | 🟡 [#1342](https://github.com/netease-youdao/LobsterAI/pull/1342) OPEN，自 4/2 起未获响应，标 stale |
| 搜索弹窗支持消息内容全文检索 | [#1343](https://github.com/netease-youdao/LobsterAI/issues/1343) | ❌ 无 PR |
| 会话详情导出为 Markdown | [#1345](https://github.com/netease-youdao/LobsterAI/issues/1345) | ❌ 无 PR |

**路线图信号**：4 条请求的覆盖面（时间戳、键盘可达性、搜索、导出）都是 **Cowork 会话详情页**的 UX 增强，且都来自同一开发者 MaoQianTu，疑似为有计划的 UX 提案包。**维护者可在下个迭代一次性 review 这些 stale PR**，无论采纳与否都建议给出明确反馈，避免贡献者流失。

---

## 7. 用户反馈摘要

- **yepcn（Issue #2293）**：明确表达"没法对不同 agent 建立不同的需求"的挫败感。用户的核心使用场景是**多角色 Agent 管理**（可能对应不同工作流/客户），任何"全局共享人格"的设计都会破坏这个场景。其在评论中详细复现路径（关闭软件→手工编辑→重启）的行为说明其**技术理解力较强**，属于高价值 Power User。
- **MaoQianTu（4 个 stale Issue）**：用户偏好的改进方向集中在 Cowork 输入与浏览体验：**看见时间戳**、**键盘可达性**、**全文搜索**、**结构化导出**，反映出其希望把 Cowork 当成"长期工作台"而非一次性工具。
- **zqgittest（Issue #1394）**：关注**定时任务的复用性**，希望"跑过一次就删除"的隐式行为显式化或可配置，反映出该用户对调度类功能的预期是**工具型而非消费型**。

整体反馈画像：当前活跃贡献者以**专业用户**为主，关注**数据隔离、可达性、可复现性**这些偏开发者体验的维度，**比一般终端用户对一致性和文档化的要求更高**。

---

## 8. 待处理积压

建议维护者优先关注以下长期未响应的项目：

- **[PR #1340](https://github.com/netease-youdao/LobsterAI/pull/1340)** — 消息气泡时间戳（关联 #1339），已 stale 超 90 天
- **[PR #1342](https://github.com/netease-youdao/LobsterAI/pull/1342)** — 输入框历史导航（关联 #1341），已 stale 超 90 天
- **[Issue #1343](https://github.com/netease-youdao/LobsterAI/issues/1343)** — 全文搜索缺失，无 PR，已 stale
- **[Issue #1345](https://github.com/netease-youdao/LobsterAI/issues/1345)** — Markdown 导出缺失，无 PR，已 stale

> **维护建议**：以上 4 项均集中在 Cowork 体验改进，且由同一活跃贡献者集中提出。一次性 review + 统一反馈（即使拒绝也给出原因），相比放任其继续 stale，对社区健康度更有利。

---

*报告生成时间：2026-07-09｜数据源：netease-youdao/LobsterAI GitHub 公开数据*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

# TinyClaw 项目日报 · 2026-07-09

> 数据来源：GitHub 仓库 [TinyAGI/tinyagi](https://github.com/TinyAGI/tinyagi)
> 统计周期：过去 24 小时（截至 2026-07-09）

---

## 1. 今日速览

过去 24 小时内 TinyClaw 项目动态显著清冷：**无新 Issue 提交、无活跃 Issue、无新版本发布**，唯一可观察的事件是 1 条长期挂起的 PR 被关闭（未合并）。综合评估，今日社区活跃度处于**低位**，仓库整体处于静默期。值得注意的是，被关闭的 PR #44 是一份涉及多模块安全加固的大型补丁，自 2026-02-13 创建后历经近 5 个月才得到处理（最终以关闭告终），这一闭环过程本身值得项目维护者复盘。

---

## 2. 版本发布

今日**无新版本发布**，跳过此节。仓库当前最新可用的正式标签需以 [Releases 页面](https://github.com/TinyAGI/tinyagi/releases) 为准。

---

## 3. 项目进展

### 📌 PR #44 — [已关闭，未合并] Harden channel auth, file safety, and update integrity

- **作者**：coreyone
- **创建时间**：2026-02-13 ｜ **最后更新 / 关闭时间**：2026-07-08
- **链接**：[TinyAGI/tinyagi#44](https://github.com/TinyAGI/tinyagi/pull/44)
- **社区反应**：👍 0 ｜ 评论数据未提供

**变更范围**（来自 PR 摘要）：
- 对 Telegram、Discord、WhatsApp 及队列处理强制启用**发送方白名单**（默认开启）
- **收窄出站文件处理**的权限面
- 强化 **bundle 更新与安装的完整性校验**
- 修复由完整安全/代码审查审计发现的一组问题，覆盖聊天入口、Agent 调用、出站文件处理、更新链四个面向

**进展评估**：
这是仓库中一份典型的"防御纵深"型 PR，但其**未合并而关闭**的状态暗示几种可能：维护者认为范围过大需要拆分、与其他重构冲突、或已有替代方案。建议关注后续是否会出现来自维护者或贡献者的**拆分后继 PR**，以判断安全加固路线图的实际走向。

> ⚠️ 提示：若该 PR 涉及的安全问题在公开审计清单中已披露，关闭未合并不等于消除风险——仓库**是否已通过其他途径缓解**这些问题，建议在仓库或社区渠道向维护者求证。

---

## 4. 社区热点

今日**无活跃 Issue、PR 评论区数据为空、零点赞**，未出现明显讨论热点。PR #44 虽然是仓库内唯一动态事件，但其互动量（👍 0、无可读评论）表明社区参与度极低，无法形成有效反馈循环以指导后续方向。

---

## 5. Bug 与稳定性

**今日无新 Bug 报告、无崩溃或回归问题被提交**。但需要指出：

- 上一节提到的安全加固 PR #44 已关闭未合并，其摘要中明确列出了由审计发现的"聊天入口、Agent 调用、出站文件、更新完整性"四类问题，**这些风险点的修复状态目前不可见**。
- 仓库是否仍存在 Issue 列表中此前已报告但未修复的 Bug，因今日数据未包含历史 Issue 列表，无法在本期日报中量化。👉 [查看全部 Issues](https://github.com/TinyAGI/tinyagi/issues)

**严重程度评估**：在合并 PR 关闭前，其中至少**安全完整性问题**应被视作潜在 P0 / P1 级风险，建议维护者主动声明处置状态。

---

## 6. 功能请求与路线图信号

今日**无新功能请求、无路线图相关讨论**。从仅有的 PR 信号来看：

- **安全/默认安全基线** 被 PR #44 列为诉求重点，但未被纳入主线——这是项目路线图的潜在信号之一，但当前**信号极弱**。
- 缺乏 Issue 层面的需求输入（如多 Agent 协同、新通道、模型适配等），无法描绘清晰的近期路线图方向。

建议维护者主动发起一次 **Discussion / Roadmap RFC** 来打破静默期。

---

## 7. 用户反馈摘要

由于今日**无 Issue 评论、无 PR 评论**，无新用户反馈可提炼。值得关注的是社区层面长期迹象：

- 点赞数为 0、讨论为空通常指向**两个方向之一**：一是项目已趋于稳定无新诉求；二是**新用户触达渠道受阻**，反馈入口不友好。
- 仓库 README、Issue 模板、Discussion 区配置情况未知，建议作为下次活跃度复盘的一项检查项。

---

## 8. 待处理积压

基于当前可见数据：

| 优先级 | 项目 | 状态 | 链接 |
|---|---|---|---|
| 🔴 高 | PR #44 关闭理由说明 — 审计发现的安全问题当前修复状态未对外披露 | 维护者回应缺失 | [PR #44](https://github.com/TinyAGI/tinyagi/pull/44) |
| 🟡 中 | 仓库活跃度走低，缺少 Issue / Discussion 入口信号 | 长期观察项 | [Issues 总览](https://github.com/TinyAGI/tinyagi/issues) |

> 提醒维护者：合并关闭的安全 PR 后，建议在仓库内发一条简短说明（即使仅 2-3 句），告知社区"已通过 commit X / Y 替代解决" 或 "暂不处理，原因 Z"，以避免安全相关不确定性在社区扩散。

---

### 📊 今日数据看板

| 指标 | 数值 | 同比评价 |
|---|---|---|
| 新开 Issue | 0 | ⬇️ 沉寂 |
| 活跃 Issue | 0 | — |
| 关闭 Issue | 0 | — |
| 新开 PR | 0 | — |
| 待合并 PR | 0 | ✅ 队列清空 |
| 关闭/合并 PR | 1（关闭未合并） | ⚠️ 需复盘 |
| 新 Release | 0 | — |

**整体健康度评级**：🌤️ *静默期* — 技术风险面偏大（安全 PR 未合并），社区面平静但缺乏新输入。

---

*本报告由项目数据自动生成，所有判断基于公开可见数据，关于未公开的安全处置细节请直接联系维护者或在仓库内提问。*

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目日报 · 2026-07-09

> 数据来源：[github.com/moltis-org/moltis](https://github.com/moltis-org/moltis)
> 统计周期：2026-07-08 ~ 2026-07-09 (UTC)

---

## 1. 今日速览

Moltis 仓库今日活跃度处于**低位**。过去 24 小时内无新增或活跃 Issues，无新版本发布，仅有 1 条 PR 处于待合并状态（[#1145](https://github.com/moltis-org/moltis/pull/1145)）。整体来看，项目处于相对平静的维护期，没有重大功能迭代或紧急讨论。但值得注意的是，该 PR 涉及一个 **CalDAV 模块的潜在崩溃问题**，是当日唯一的代码变动信号，建议维护者关注并尽快 review。

**健康度评估**：🟡 平稳偏静 — 无新 Issue 涌入、无版本发布、PR 流量稀疏，可能是周末效应或常规维护窗口。需关注待处理 PR 是否及时响应，避免积压。

---

## 2. 版本发布

⚠️ 今日无新版本发布。无需展开。

---

## 3. 项目进展

今日**无 PR 被合并或关闭**，无新功能合入主干。

唯一在跟踪的 PR 是一条**待合并的 Bug 修复**：

- **[#1145 fix(caldav): avoid panic on non-ASCII datetime in normalise_datetime](https://github.com/moltis-org/moltis/pull/1145)**
  - 作者：[@Osamaali313](https://github.com/Osamaali313)
  - 创建时间：2026-07-08
  - 状态：OPEN（待合并）
  - 点赞：0
  - 评价：尚未进入评审阶段，等待维护者反馈

**项目推进度**：约 1 处代码改动在评审队列中，未落地。整体而言，主干今日无实质前进。

---

## 4. 社区热点

今日 Issues 与 PRs 均**无评论互动**，讨论热度为零。

- 无 Issues 评论
- 无 PR 评论（#1145 评论数：undefined）

**诉求分析**：由于缺乏社区互动信号，无法判断当前热点诉求方向。建议维护者在 PR 或相关 Issue 中主动征集 reviewer，加快反馈闭环。

---

## 5. Bug 与稳定性

今日报告/修复的 Bug 共 **1 条**，按严重程度排列如下：

| 严重程度 | 问题 | 来源 | 修复状态 |
|---------|------|------|---------|
| 🔴 高 | `normalise_datetime` 函数在 CalDAV 远端服务器返回非 ASCII 时间值时发生 **panic**（程序崩溃） | [PR #1145](https://github.com/moltis-org/moltis/pull/1145) | ✅ 已有 fix PR 待合并 |

**详细说明**：
- **位置**：`crates/caldav/src/ical.rs` 中的 `normalise_datetime` 函数
- **触发条件**：当 CalDAV 远端服务器返回的时间字符串包含非 ASCII 字符时（例如本地化格式、特殊字符等），DATE 分支的固定字节索引切片与 ASCII 检查不充分，可能引发越界 panic
- **风险场景**：所有使用 CalDAV 同步功能的用户，若其连接的 CalDAV 服务器（如某些自托管方案如 Radicale、Baikal，或部分商业服务）返回非标准时间格式，则可能在同步时直接崩溃应用
- **影响范围**：依赖 CalDAV 集成的功能（个人日历同步场景）
- **Fix 状态**：[PR #1145](https://github.com/moltis-org/moltis/pull/1145) 已提供修复方案，待合并

---

## 6. 功能请求与路线图信号

今日**无新增功能请求**（Issues 数据为空）。

从 PR #1145 来看，开发者的关注点集中在 **CalDAV 模块的健壮性**上，这可能暗示下一版本会加强对第三方日历协议边界场景的处理。建议关注该 PR 是否引发维护者对其他 iCal/CalDAV 路径的额外 review。

---

## 7. 用户反馈摘要

⚠️ 由于今日 Issues 数量为 0、PR 无评论，**无用户反馈信号可供提炼**。

建议：维护者可在下次发布前主动在 Discussions 或 Issue 中征集用户使用反馈，特别是 CalDAV、IMAP、CardDAV 等涉及第三方协议集成的功能。

---

## 8. 待处理积压

| 类型 | 编号 | 标题 | 创建时间 | 待处理时长 | 优先级建议 |
|------|------|------|---------|-----------|----------|
| 🔧 PR | [#1145](https://github.com/moltis-org/moltis/pull/1145) | fix(caldav): avoid panic on non-ASCII datetime | 2026-07-08 | 1 天 | 🔴 高 — 涉及生产环境崩溃风险 |

**维护者提醒**：
- 🔴 **PR #1145** 应优先处理：它修复的是一个真实可复现的 panic 问题，且位于用户高频使用的 CalDAV 路径。延迟合并可能导致更多用户遭遇崩溃。
- 由于今日数据样本极小（0 Issues + 1 PR），暂无法识别其他历史积压项。建议结合 GitHub 项目看板做整体排查。

---

## 📊 数据小结

| 指标 | 今日数值 | 状态 |
|------|---------|------|
| 新开 Issues | 0 | — |
| 已关闭 Issues | 0 | — |
| 待合并 PR | 1 | 🟡 待评审 |
| 已合并 PR | 0 | — |
| 新 Release | 0 | — |
| 社区评论 | 0 | ⚠️ 低活跃 |

**整体判断**：Moltis 今日处于**维护低峰期**，仅有一条重要的 CalDAV 崩溃修复在排队中。项目未出现异常信号，但建议维护者保持每周至少一次的 PR review 节奏，避免单点积压影响响应口碑。

---

*报告生成时间：2026-07-09 | 数据来源：GitHub REST API*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报

**报告日期：2026-07-09**
**项目主页：** [github.com/agentscope-ai/CoPaw](https://github.com/agentscope-ai/CoPaw)

> 注：本期数据中仓库内链接与 issue/PR 标题均显示为 `QwenPaw` 仓库路径，沿用原文链接以保持可追溯性。

---

## 1. 今日速览

CoPaw 仓库今日处于 **v2.0.0 公开测试版密集迭代期**，整体活跃度极高。24 小时内共产生 36 条 Issue 更新与 47 条 PR 更新，并同步发布 **v2.0.0-beta.4** 新版本，重点修复 scroll 压缩过程中的活跃回合保护与召回失败提示问题。当前 Issue 与 PR 仍以 v2.0 beta 系列回归性 Bug、第三方渠道接入（飞书/Matrix/Azure Bot/Zalo）以及桌面端体验改进为三大主线；社区参与度高，单日关闭 20 条 Issue 与 14 条 PR，节奏健康但 v2.0 公开版本仍存在多个高优先级未修复问题，建议维护者重点跟进。

---

## 2. 版本发布

### 🚀 v2.0.0-beta.4

- **发布日期：** 2026-07-09
- **Release PR：** [#5837](https://github.com/agentscope-ai/QwenPaw/pull/5837)（版本号 bump）
- **关键修复（来自合并的 [#5871 等 PR](https://github.com/agentscope-ai/QwenPaw/pulls)）：**
  - **scroll 压缩机制加固**：保护"活跃回合（active turn）"，引入"渐进式压力释放（graduated pressure relief）"，并在上下文召回失败时给出明确错误提示，避免模型在压缩后丢失任务进度。
- **破坏性变更：** beta 阶段不保证稳定，升级前建议备份 `policy.yaml`、记忆索引与会话历史。
- **迁移建议：** 从 beta.3 升级的用户如曾在飞书、Matrix 等渠道遇到认证问题（见 #5868），升级后需重新配置 token；自定义模型中如使用 `preserve_thinking` 字段，请关注 PR #5876 的字段重命名为 `relay_reasoning` 及默认值的变更。

---

## 3. 项目进展

今日合并/关闭的 PR 主要推进了 **v2.0 核心稳定性**与 **多渠道/多模型适配**，整体向前迈进显著：

| PR | 类型 | 影响范围 | 说明 |
|---|---|---|---|
| [#5871](https://github.com/agentscope-ai/QwenPaw/pull/5871) | fix(scroll) | 核心后端 | 在 eviction index 中通过"接缝横幅（seam banner）"锚定活跃回合，避免系统提示词与真实请求因同属 user 消息而被模型混淆（随 v2.0.0-beta.4 发布）。 |
| [#5848](https://github.com/agentscope-ai/QwenPaw/pull/5848) | fix(scroll) | 核心后端 | 修复 1.x 历史会话与未生成 headlined 标记的回合在压缩后索引显示为 `(no milestone)` 的问题，提升旧会话回溯体验。 |
| [#5792](https://github.com/agentscope-ai/QwenPaw/pull/5792) | fix(agents) | AgentScope 2.0 | 修复 `_sanitize_tool_messages` 在修复未配对 tool block 时误删自配对 assistant 消息的回归问题，避免工具调用链路断裂。 |
| [#5876](https://github.com/agentscope-ai/QwenPaw/pull/5876)（已关闭，未合并主干） | refactor | DashScope Provider | 将 `preserve_thinking` 重命名为 `relay_reasoning`，DashScope 默认置为 `False`，减少 reasoning 反复回流导致的死循环（呼应 #5860/#5328）。 |

**整体评估：** v2.0 正在围绕"长会话压缩"、"reasoning 回流"、"工具配对"三大底层问题集中攻关，已发布两轮 beta 修复。

---

## 4. 社区热点

按评论数排序的 TOP 讨论：

1. **[#5757](https://github.com/agentscope-ai/QwenPaw/issues/5757)（13 条评论，OPEN）** — *飞书渠道首条消息可回复，后续消息全部无反应*
   涉及 Docker 与官方 Platform 实例，影响 v1.1.12.post2 用户，是 **飞书渠道最高优先级** 的未解决问题。

2. **[#5846](https://github.com/agentscope-ai/QwenPaw/issues/5846)（10 条评论，已关闭）** — *v2.00b3 关闭审批模式后仍弹审批窗*
   v2.0 公开版核心交互回归，已关闭表明已有修复进入下一轮 beta。

3. **[#5171](https://github.com/agentscope-ai/QwenPaw/issues/5171)（9 条评论，已关闭）** — *上下文压缩将人设文件一并清空*
   长会话人设丢失问题，影响 v1.1.11 用户任务连续性。

4. **[#5379](https://github.com/agentscope-ai/QwenPaw/issues/5379)（8 条评论，OPEN）** — *Python pip 安装启动后立即 Internal Server Error*
   `get_remote_addr(transport)` 报错，安装即失败，**门槛级问题**，对新用户体验影响极大。

5. **[#5162](https://github.com/agentscope-ai/QwenPaw/issues/5162)（7 条评论，已关闭）** — *对话思考逻辑进入死循环*

6. **[#5797](https://github.com/agentscope-ai/QwenPaw/issues/5797)（6 条评论，OPEN）** — *定时任务弹窗提醒需可配置*
   用户明确反对"一刀切关闭弹窗"（#4803 PR），主张开放用户选择权，**社区态度分歧明显**。

7. **[#5725](https://github.com/agentscope-ai/QwenPaw/issues/5725)（5 条评论，OPEN）** — *Console 流式输出浏览器卡顿*

8. **[#5259](https://github.com/agentscope-ai/QwenPaw/issues/5259)（4 条评论，OPEN）** — *Windows 平台向量索引无法持久化*

**诉求分析：** 用户的关注点高度集中在 **v2.0 公开版的稳定性**（飞书渠道、审批弹窗、压缩机制）、**安装/启动门槛**（#5379、#5165、#5166），以及 **桌面端体验细节**（弹窗、托盘、卡顿、记忆索引）。

---

## 5. Bug 与稳定性

按严重程度排列（🔴 严重 / 🟠 高 / 🟡 中）：

### 🔴 严重（影响核心功能或安装启动）

| Issue | 描述 | 版本 | 状态 | 是否有对应 Fix PR |
|---|---|---|---|---|
| [#5379](https://github.com/agentscope-ai/QwenPaw/issues/5379) | pip 安装后启动立即 500 | latest | OPEN | ❌ 未见对应 PR |
| [#5860](https://github.com/agentscope-ai/QwenPaw/issues/5860) | v2.0 对话进度丢失 + 无限循环 | v2.0.0-beta.3 | OPEN | 🟡 [#5870](https://github.com/agentscope-ai/QwenPaw/pull/5870) `preserve_thinking` 默认关闭可缓解 |
| [#5757](https://github.com/agentscope-ai/QwenPaw/issues/5757) | 飞书渠道首条后可静默丢消息 | v1.1.12.post2 | OPEN | ❌ 未见 |
| [#5872](https://github.com/agentscope-ai/QwenPaw/issues/5872) | Docker 内 `browser_use` 因 dbus 失败退出 | latest | OPEN | ❌ 未见 |

### 🟠 高（影响可用性或体验）

| Issue | 描述 | 版本 | 状态 | 是否有对应 Fix PR |
|---|---|---|---|---|
| [#5725](https://github.com/agentscope-ai/QwenPaw/issues/5725) | Console 流式输出卡顿 | v1.1.12.post2 | OPEN | ❌ 未见 |
| [#5259](https://github.com/agentscope-ai/QwenPaw/issues/5259) | Windows 向量索引无法持久化 | latest | OPEN | ❌ 未见 |
| [#5868](https://github.com/agentscope-ai/QwenPaw/issues/5868) | Matrix 频道 token 登录失败 | latest | OPEN | ✅ [#5873](https://github.com/agentscope-ai/QwenPaw/pull/5873) |
| [#5863](https://github.com/agentscope-ai/QwenPaw/issues/5863) | Coding Session 图片显示二进制 | v1.1.12post3 | OPEN | ✅ [#5878](https://github.com/agentscope-ai/QwenPaw/pull/5878) |
| [#5859](https://github.com/agentscope-ai/QwenPaw/issues/5859) | opencode + deepseek 调用失败 | v1.1.12.post3 | OPEN | ❌ 未见 |
| [#5090](https://github.com/agentscope-ai/QwenPaw/issues/5090) | `rm -rf ${HOME}` 安全绕过 | — | （被引用） | ✅ [#5866](https://github.com/agentscope-ai/QwenPaw/pull/5866) |

**稳定性趋势：** 已关闭的 20 条 Issue 中包含 #5846、#5171、#5162、#5052 等多个长期高优 Bug，修复效率可观；但 v2.0 公开版引入的回归（#5860、#5846、#5872）仍是当前最大风险点。

---

## 6. 功能请求与路线图信号

| Feature 请求 | 链接 | 已有 PR 推进？ | 纳入下一版本可能性 |
|---|---|---|---|
| 多 Agent / Swarm 协作 | [#5139](https://github.com/agentscope-ai/QwenPaw/issues/5139) | ❌ 已关闭但争议大 | 🟡 中期方向 |
| 定时任务弹窗可配置 | [#5797](https://github.com/agentscope-ai/QwenPaw/issues/5797) | ❌ 未见 PR | 🟢 高（用户呼声明确） |
| 待审批系统提示音 | [#5852](https://github.com/agentscope-ai/QwenPaw/issues/5852) | ❌ 未见 PR | 🟢 高（叠加 #3302 类似需求） |
| QwenPaw Desktop 关闭最小化到托盘 | [#5312](https://github.com/agentscope-ai/QwenPaw/issues/5312) | ❌ 未见 PR | 🟡 中 |
| 工具审批块折叠与持久化 | [#5107](https://github.com/agentscope-ai/QwenPaw/issues/5107) | ❌ 已关闭，无 PR | 🟡 中 |
| 安全审批 policy 编辑/删除界面 | [#5880](https://github.com/agentscope-ai/QwenPaw/issues/5880) | ❌ 未见 PR | 🟢 高（v2.0 安全策略配套） |
| 可关闭沙箱 | [#5879](https://github.com/agentscope-ai/QwenPaw/issues/5879) | ❌ 未见 PR | 🟢 高（自部署用户刚需） |
| Azure Bot 频道 | — | ✅ [#5849](https://github.com/agentscope-ai/QwenPaw/pull/5849) | 🟢 高（已实现） |
| Zalo Bot 频道 | — | ✅ [#5801](https://github.com/agentscope-ai/QwenPaw/pull/5801) | 🟢 高（已实现） |
| 文本模型视觉回退 | — | ✅ [#5726](https://github.com/agentscope-ai/QwenPaw/pull/5726) | 🟢 高（已实现） |
| JSON 配置 `${ENV_VAR}` 引用 | — | ✅ [#5740](https://github.com/agentscope-ai/QwenPaw/pull/5740) | 🟢 高（已实现） |
| 记忆蒸馏工具插件 | — | ✅ [#4171](https://github.com/agentscope-ai/QwenPaw/pull/4171) | 🟡 待评估 |

**路线图信号总结：** 维护者当前重点在 **多渠道扩展**（Azure、Zalo）+ **模型适配**（视觉回退、env 变量配置、DashScope reasoning）+ **安全加固**（rm 防护、Matrix 认证）。沙箱可控、policy 编辑、提示音等 v2.0 安全体验类需求尚未排期，建议维护者在博客/Roadmap 中明确优先级。

---

## 7. 用户反馈摘要

从今日活跃 Issue 中提炼的代表性用户声音：

- 😡 **对"一刀切关闭"的反感（#5797）：** *"千问不要因噎废食，有人反对，就都关掉了……"* —— 用户明确希望产品在交互决策上保留用户自主权，而非开发团队替用户做选择。
- 😩 **桌面端持久化的可靠性担忧（#5259）：** Windows 用户发现向量索引无法持久化，每次重启都必须"重建记忆索引"——长期记忆形同虚设，影响专业场景使用。
- 😤 **新版本

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目日报 · 2026-07-09

---

## 1. 今日速览

ZeroClaw 项目今日延续了高强度的开发节奏：过去 24 小时共有 **50 条 Issue** 和 **50 条 PR** 更新，其中活跃 Issue 40 条、关闭 10 条，待合并 PR 46 条、已合并/关闭 4 条，社区讨论热度不减。讨论重点集中在 **多 Provider 兼容（Telegram / Xiaomi / Qwen / Anthropic）**、**网关能力扩展（OpenAI 兼容端点、Session 管理、Web Dashboard）** 以及 **架构演进（编译期 feature 转 WASM 运行时插件、OCI 注册中心、SOP 审批链）** 三大方向。**今日无新版本发布**，但合并/关闭的 4 条 PR 修复了多项影响核心流程的 P1 缺陷，项目整体处于"修 bug + 推 RFC 草案"的稳定攻坚期，未出现大规模异常波动。

---

## 2. 版本发布

⚪ **无新版本发布**

近 24 小时内仓库未发布新版本（无 Release tag 变更）。从活跃 tracker [#8071 v0.8.3 runtime execution / agent loop / tools / skills](https://github.com/zeroclaw-labs/zeroclaw/issues/8071) 看，下一版本仍在迭代打磨阶段。

---

## 3. 项目进展

今日 **10 条 Issue 已关闭、4 条 PR 已合并/关闭**，核心落地如下：

### 已关闭/合并的关键修复

| PR/Issue | 标题 | 影响 |
|---|---|---|
| [#8334](https://github.com/zeroclaw-labs/zeroclaw/issues/8334) ⨯ [Skill 路径 bug 已关闭] | `skills install/list/remove` 指向 multi-agent runtime 未加载的 `data_dir` | 影响 "拉取即用" 的核心 skill 流程，属于 P1 高风险 |
| [#6173](https://github.com/zeroclaw-labs/zeroclaw/issues/6173) ⨯ [model_switch 已关闭] | `model_switch` 工具不会跨 turn 持久化，网关/UI 完全忽略 | P1 runtime/daemon 问题 |
| [#8553](https://github.com/zeroclaw-labs/zeroclaw/issues/8553) ⨯ [Secrets 已关闭] | Agent 无法将环境变量（如 `SLACK_BOT_TOKEN`）作为 `http_request` 的 secret | P1 S1 workflow blocked |
| [#4873](https://github.com/zeroclaw-labs/zeroclaw/issues/4873) ⨯ [Feishu 已关闭] | 集成飞书后默认只调用 LLM 而非 Agent | 修复 channel → agent 的回退链路 |
| [#8833](https://github.com/zeroclaw-labs/zeroclaw/pull/8833) | `config set` 自动 alias 物化（providers.* 之外） | 修复 #8834，扩展 dynamic-map 段自动别名创建 |
| [#8866](https://github.com/zeroclaw-labs/zeroclaw/pull/8866) | daemon heartbeat 之间共享 MCP registry | 修复 #5903，解决 stdio MCP 每 tick 重建开销 |
| [#8876](https://github.com/zeroclaw-labs/zeroclaw/pull/8876) | 文档化本地 gate 与 CI 的差异 | 提升贡献者文档 |
| [#8877](https://github.com/zeroclaw-labs/zeroclaw/pull/8877) | 隐藏 desktop sidebar 横向滚动条 | Web UX 修复 |

> 📈 **推进评估**：本次合并重点修复了"**Skill 路径 / 模型切换 / 凭据注入**"三条用户最容易碰到的主链路，体感上有显著提升。但仍有 **多个 P1 等待修复**（见第 5 节），健康度尚需继续巩固。

---

## 4. 社区热点

按评论数排序的活跃 Issues（节选）：

| 评论数 | Issue | 链接 | 核心诉求 |
|---|---|---|---|
| 💬 13 | **#5862 zeroclaw 不知道自己能加 cron** | [link](https://github.com/zeroclaw-labs/zeroclaw/issues/5862) | 工具/能力自描述（agent self-awareness）严重不足，用户直接对话要求"每天 8 点提醒"被拒 |
| 💬 7 | **#6034 单/多轮对话丢失 user message** | [link](https://github.com/zeroclaw-labs/zeroclaw/issues/6034) | P1 S1，自定义 provider 返回 400 致整轮失败，provider 兼容性 |
| 💬 7 | **#8424 RFC: .ignore 文件机制保护工作区文件** | [link](https://github.com/zeroclaw-labs/zeroclaw/issues/8424) | workspace 内部文件（.env, config.yaml）无法被现有 `forbidden_paths` 拦截 |
| 💬 5 | **#6002 Telegram 不明确指代 assistant** | [link](https://github.com/zeroclaw-labs/zeroclaw/issues/6002) | 群聊场景下意图归属判断错误 |
| 💬 5 | **#6672 reasoning_content 未传给 Xiaomi mimo-v2.5** | [link](https://github.com/zeroclaw-labs/zeroclaw/issues/6672) | S0 数据丢失风险，OpenAI-compat 协议层漏字段 |
| 💬 5 | **#8226 per-agent 自定义环境变量** | [link](https://github.com/zeroclaw-labs/zeroclaw/issues/8226) | 多租户 runtime_context / runtime_secrets 隔离 |
| 💬 4 | **#8550 / #8603 OpenAI 兼容 chat completions 端点** | [#8550](https://github.com/zeroclaw-labs/zeroclaw/issues/8550) / [#8603](https://github.com/zeroclaw-labs/zeroclaw/issues/8603) | 接入 Open WebUI / LobeChat 等客户端，**已有实现 PR #8486** |
| 💬 4 | **#8850 将可选 channels/tools 从 compile-time feature 转 runtime WASM 插件** | [link](https://github.com/zeroclaw-labs/zeroclaw/issues/8850) | 减小编译产物大小，ship-default-binary |
| 💬 4 | **#6558 providers error（Qwen 405 Method Not Allowed）** | [link](https://github.com/zeroclaw-labs/zeroclaw/issues/6558) | S0 安全/数据风险，qwen3.5-plus dashscope 接入不可用 |
| 💬 4 | **#6715 清理主仓 ~200 个多余分支** | [link](https://github.com/zeroclaw-labs/zeroclaw/issues/6715) | 仓库卫生 |

**背后诉求归纳**：
1. **协议兼容**：用户希望 ZeroClaw 能"无缝接入"已有 OpenAI 生态（[#8550](https://github.com/zeroclaw-labs/zeroclaw/issues/8550)、[#6034](https://github.com/zeroclaw-labs/zeroclaw/issues/6034)、[#6672](https://github.com/zeroclaw-labs/zeroclaw/issues/6672)）。
2. **能力自描述**：Agent 必须知道自身工具边界（[#5862](https://github.com/zeroclaw-labs/zeroclaw/issues/5862)）。
3. **多租户与隔离**：工作区安全 + agent 级 secrets/env 是 P0 优先级（[#8424](https://github.com/zeroclaw-labs/zeroclaw/issues/8424)、[#8226](https://github.com/zeroclaw-labs/zeroclaw/issues/8226)）。
4. **架构轻量化**：编译特性收编、OCI 化的插件分发（[#8850](https://github.com/zeroclaw-labs/zeroclaw/issues/8850)、[#7497](https://github.com/zeroclaw-labs/zeroclaw/issues/7497)）。

---

## 5. Bug 与稳定性

按严重程度降序：

### 🔴 S0 / S1 致命级（数据丢失 / 主链路阻塞）

| Issue | 严重度 | 状态 | 是否已有 fix PR |
|---|---|---|---|
| [#6672 reasoning_content 丢失（Xiaomi mimo）](https://github.com/zeroclaw-labs/zeroclaw/issues/6672) | S0 | 🟠 OPEN blocked | ❌ 暂无 |
| [#6558 providers error (Qwen 405)](https://github.com/zeroclaw-labs/zeroclaw/issues/6558) | S0 | 🟠 OPEN blocked stale | ❌ 暂无 |
| [#6034 对话丢失 user message](https://github.com/zeroclaw-labs/zeroclaw/issues/6034) | S1 | 🟠 OPEN accepted | ❌ 暂无 |
| [#8553 环境变量无法用作 http_request secret](https://github.com/zeroclaw-labs/zeroclaw/issues/8553) | S1 | ✅ 已关闭 | ✅ 已修 |
| [#6173 model_switch 不持久化](https://github.com/zeroclaw-labs/zeroclaw/issues/6173) | S2 (P1) | ✅ 已关闭 | ✅ 已修 |
| [#8334 skills 子命令写错目录](https://github.com/zeroclaw-labs/zeroclaw/issues/8334) | S2 (P1) | ✅ 已关闭 | ✅ 已修 |

### 🟠 S2 性能与降级

- [#8762](https://github.com/zeroclaw-labs/zeroclaw/issues/8762) Anthropic provider 长 turn 固定超时（120s）
- [#6517](https://github.com/zeroclaw-labs/zeroclaw/issues/6517) 上下文溢出导致幻觉/话题漂移（Kimi/Discord）
- [#8875](https://github.com/zeroclaw-labs/zeroclaw/issues/8875) 配置 degraded-section 警告未展示 parse error
- [#6724](https://github.com/zeroclaw-labs/zeroclaw/issues/6724) Channel supervisor 在所有通道 `enabled=false` 时 ~2s 一次 crash-loop
- [#8578](https://github.com/zeroclaw-labs/zeroclaw/issues/8578) `zerocode` 启动失败但进程不退出
- [#7828](https://github.com/zeroclaw-labs/zeroclaw/issues/7828) Byte-limited 字符串截断的 UTF-8 安全审计（tracker）

### 🟡 S3 小问题

- [#5862](https://github.com/zeroclaw-labs/zeroclaw/issues/5862) cron 能力自描述缺失
- [#4873](https://github.com/zeroclaw-labs/zeroclaw/issues/4873) 飞书只走 LLM 而非 Agent ✅（已修）
- [#7911](https://github.com/zeroclaw-labs/zeroclaw/issues/7911) Android Termux 安装得到 `unknown linux aarch64` 二进制
- [#6002](https://github.com/zeroclaw-labs/zeroclaw/issues/6002) Telegram 意图归属模糊

> 📊 **结论**：今日 4 条 P1 / 核心 bug 已全部消化（[#6173](https://github.com/zeroclaw-labs/zeroclaw/issues/6173)、[#8334](https://github.com/zeroclaw-labs/zeroclaw/issues/8334)、[#8553](https://github.com/zeroclaw-labs/zeroclaw/issues/8553)、[#4873](https://github.com/zeroclaw-labs/zeroclaw/issues/4873)）。但 [#6034](https://github.com/zeroclaw-labs/zeroclaw/issues/6034)（S1）、[#6672](https://github.com/zeroclaw-labs/zeroclaw/issues/6672)（S0）、[#6558](https://github.com/zeroclaw-labs/zeroclaw/issues/6558)（S0）三个 Provider 兼容致命问题仍处于 `status:blocked` 且尚未对接 PR，是下一阶段稳定性的关键瓶颈。

---

## 6. 功能请求与路线图信号

按"明确方向 vs 草案阶段"分类：

### 🟢 已实现或进度靠前（存在 PR / tracker 已 in-progress）

| 需求 | Issue | 对应 PR | 评估 |
|---|---|---|---|
| **OpenAI 兼容 chat completions** | [#8550](https://github.com/zeroclaw-labs/zeroclaw/issues/8550) / [#8603](https://github.com/zeroclaw-labs/zeroclaw/issues/8603) | [#8486](https://github.com/zeroclaw-labs/zeroclaw/pull/8486) XL PR 已 in-progress | **极高概率**纳入下一版本（v0.8.3+） |
| **WASM 运行时插件** | [#8850](https://github.com/zeroclaw-labs/zeroclaw/issues/8850) | 草案阶段 | 路线图核心架构变更 |
| **WEB 多 session 侧栏** | [#7543](https://github.com/zeroclaw-labs/zeroclaw/issues/7543) | 草图 | 单 session 限制是用户高频痛点 |
| **In-flight Web Dashboard 指标** | — | [#8864](https://github.com/zeroclaw-labs/zeroc

</details>

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*