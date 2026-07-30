# OpenClaw 生态日报 2026-07-30

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-07-30 01:51 UTC

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

# OpenClaw 项目日报 · 2026-07-30

---

## 1. 今日速览

OpenClaw 项目今日维持**高度活跃**的工程节奏：过去 24 小时共有 500 条 Issues 与 500 条 PRs 同步刷新，关闭率分别为 10.2%（51/500）与 19.8%（99/500），整体关闭/合并占比在大型 monorepo 中属于健康水平。**零新版本发布**，但内部已有一批面向 2026.7.x 与 2026.6.x 的修补与重构 PR 在 `maintainer` 流程中流转。Issue 侧高严重度项（`issue-rating: 🦞 diamond lobster` / `🐚 platinum hermit`）占据活跃榜主流，集中暴露 Codex 集成、Active Memory、gateway 主线程稳定性三大主题的连锁缺陷；PR 侧则以小颗粒修补（size XS/S）为主，配合若干 XL 级别的 RFC 0026 Phase 1 落地工作（cron → Automations 命名统一、Pioneer.ai 提供商接入）。

---

## 2. 版本发布

**无新版本发布**。当前最新稳定版仍为 `2026.6.9`（npm `latest`），CI/CodeQL 工作流正在合并面向 `2026.7.x` 的多个修补（参见 §3）。

---

## 3. 项目进展

今日共 **51 个 Issues 关闭** 与 **99 个 PRs 关闭/合并**，亮点包括：

| 类型 | 编号 | 关键推进 |
|---|---|---|
| 安全/稳定性 Bug | [#69943](https://github.com/openclaw/openclaw/issues/69943) | 修复 session-memory hook 持久化聊天模板控制 token 导致的"上下文投毒循环"，避免后续 `/new` 会话出现 role token / NO_REPLY 异常 |
| 升级迁移 | [#95515](https://github.com/openclaw/openclaw/issues/95515) | 修复 `2026.6.8 → 2026.6.9` 升级时向 email 渠道配置写入非法 `groupAllowFrom` 字段的回归 |
| 服务管理 | [#79375](https://github.com/openclaw/openclaw/issues/79375) | 修复升级时遗留 user-level systemd unit 与 system-level unit 互相竞争导致的服务自杀 |
| 插件可观察性 | [#92374](https://github.com/openclaw/openclaw/issues/92374) | 修复插件 `message_sending` hook 在 Telegram 等 `dispatcherOptions.beforeDeliver` 路径上被静默绕过的安全/可扩展性回归 |
| Discord UX | [#87665](https://github.com/openclaw/openclaw/issues/87665) | 修复 Discord 来源的子代理任务默认 `done_only` 导致频道卡在 typing indicator |
| 生命周期扩展 | [#43454](https://github.com/openclaw/openclaw/issues/43454) | Feature: Gateway 生命周期 hook（`onSubagentComplete` / `onToolCallThreshold` / `onTurnComplete`）作为可关闭讨论收尾 |
| 文档/UX | [#116160](https://github.com/openclaw/openclaw/pull/116160) | 明确 `userTimezone` 配置在模型可见时间戳、排队系统事件、heartbeat 活跃时段上的共享语义 |
| UI 重构 | [#116086](https://github.com/openclaw/openclaw/pull/116086) | 修复 Control UI 模型设置页对"已配置连接 / 运行时路由 / 手动凭证"三类概念的混淆，并去重活跃路由 |
| CI 可靠性 | [#116167](https://github.com/openclaw/openclaw/pull/116167) | 串行化 hosted macOS Swift release validation，避免并发执行造成的 job 失败 |
| Discord webhook | [#116155](https://github.com/openclaw/openclaw/pull/116155) | 修复 Discord webhook 在错误响应体空闲时上报通用错误而非请求超时 |

整体上，项目在**安全边界、升级迁移、服务生命周期、可观察性**四条主线上同步推进一档，但活跃 P1 Issue 数量未见明显下降（参见 §5）。

---

## 4. 社区热点

按 24h 评论数排序的 Top 5 议题：

| 排名 | 编号 / 链接 | 评论 | 👍 | 主题 |
|---|---|---|---|---|
| 1 | [#91009](https://github.com/openclaw/openclaw/issues/91009) | 18 | 2 | Codex `PreToolUse` native hook relay 生成 CPU-bound `openclaw-hooks` 进程，阻塞 gateway RPC（2026.6.1，`diamond lobster`） |
| 2 | [#86996](https://github.com/openclaw/openclaw/openclaw/issues/86996) | 15 | 2 | Active Memory + Codex app-server 组合导致 Telegram DM 长延迟、hook 超时、启动中止、gateway 事件循环卡顿（第三方扩展链路，`diamond lobster`） |
| 3 | [#39476](https://github.com/openclaw/openclaw/issues/39476) | 13 | 0 | `A2A sessions_send`：目标 agent 反向调用导致重复消息（`platinum hermit`，3 月开单仍 OPEN） |
| 4 | [#90354](https://github.com/openclaw/openclaw/issues/90354) | 11 | 1 | 提案：为 pre-compaction memory flush 增加 append 大小 / 校验 / 静默失败上限（feature 形式，`diamond lobster`） |
| 5 | [#91363](https://github.com/openclaw/openclaw/issues/91363) | 10 | 6 | Isolated cron 在 `model-call-started` 阶段恒定失败 `LLM request failed`（👍 数最高，单 issue 获 6 赞） |

**背后诉求分析**：

- **Codex 集成已成系统性热点**：Top 2 议题以及 [#86215](https://github.com/openclaw/openclaw/issues/86215)（OAuth 刷新挂死）、[#89278](https://github.com/openclaw/openclaw/issues/89278)（OAuth 刷新通过但 cron/heartbeat 10s 超时）、[#111010](https://github.com/openclaw/openclaw/issues/111010)（detached 子代理 hook relay 丢失）、[#97616](https://github.com/openclaw/openclaw/issues/97616)（hook 子进程泄漏为僵尸）共同指向 Codex app-server / OAuth / hook relay 三层栈的稳定性缺口。
- **Active Memory 与 prompt-cache 冲突成新增长点**：[#91223](https://github.com/openclaw/openclaw/issues/91223) 报告注入后命中率从 99.9% 跌至 22%，直接影响 Anthropic 用户的边际成本。
- **用户对生命周期可编程性的呼声**：[#90354](https://github.com/openclaw/openclaw/issues/90354) + [#81061](https://github.com/openclaw/openclaw/issues/81061) + [#43454](https://github.com/openclaw/openclaw/issues/43454)（已关闭）三连表明用户在 hook 体系中要求 **pre-routing 拦截**、**compaction 守卫** 与 **子代理/turn/tool 阈值回调**。

---

## 5. Bug 与稳定性

按严重程度（`impact` + `issue-rating`）排序的活跃 P0/P1 缺陷（不含已在 §3 关闭项）：

### 🔴 P0（数据/UX 阻断）
- **无新增 P0 open issue**。本日关闭的 [#95515](https://github.com/openclaw/openclaw/issues/95515) 是当前唯一的 P0 存量，已落定。

### 🟠 P1 / `impact:message-loss` & `impact:session-state`
| 编号 | 主题 | 关联 PR |
|---|---|---|
| [#91009](https://github.com/openclaw/openclaw/issues/91009) | Codex hook relay 派生 CPU-bound 进程阻塞 RPC | 无新 fix PR |
| [#86996](https://github.com/openclaw/openclaw/issues/86996) | Active Memory + Codex app-server 综合延迟/超时 | 无新 fix PR（`needs-product-decision`） |
| [#39476](https://github.com/openclaw/openclaw/issues/39476) | A2A `sessions_send` 双向调用重复消息 | 无 fix PR（`needs-live-repro`） |
| [#91363](https://github.com/openclaw/openclaw/issues/91363) | Isolated cron 在 `model-call-started` 阶段必失败 | 无 fix PR（`needs-live-repro`） |
| [#88657](https://github.com/openclaw/openclaw/issues/88657) | DeepSeek V4 Flash via OpenRouter 产出不完整 turn（2026.5.27/28） | 无 fix PR（`needs-live-repro`） |
| [#86215](https://github.com/openclaw/openclaw/issues/86215) | Codex OAuth 刷新挂死小时级不告警 | 无 fix PR（`needs-live-repro`） |
| [#89278](https://github.com/openclaw/openclaw/issues/89278) | Codex OAuth 通过但 cron/heartbeat 触发 10s 刷新超时（回归） | 无 fix PR |
| [#87756](https://github.com/openclaw/openclaw/issues/87756) | Prompt 启动的 Lobster workflow 在嵌套 `/tools/invoke` 上挂死 | 无 fix PR |
| [#92433](https://github.com/openclaw/openclaw/issues/92433) | 子代理 announce 在活跃 run 中被静默丢弃 | 无 fix PR（`fix-shape-clear`） |
| [#86214](https://github.com/openclaw/openclaw/issues/86214) | Codex app-server 在大 `logs_2.sqlite` 下中途关闭 | 无 fix PR |
| [#86034](https://github.com/openclaw/openclaw/issues/86034) | 媒体生成成功但 completion 投递失败（看起来像失败） | 无 fix PR |
| [#90944](https://github.com/openclaw/openclaw/issues/90944) | `sessions_yield` resume 回复未投递，auto-announce 直发原始摘要 | 无 fix PR（`linked-pr-open`） |
| [#91456](https://github.com/openclaw/openclaw/issues/91456) | Telegram DM lane 在发送超时后持续 guard | 无 fix PR（`linked-pr-open`） |
| [#89095](https://github.com/openclaw/openclaw/issues/89095) | 子代理 run 超时未通知父会话 | 无 fix PR |
| [#88955](https://github.com/openclaw/openclaw/issues/88955) | qqbot WebSocket 重连后报 `Outbound not configured`（回归） | 无 fix PR |

### 🟡 P1 / `impact:crash-loop` / 内存/事件循环
- [#112423](https://github.com/openclaw/openclaw/issues/112423) — 大 SQLite transcript 清理阻塞 gateway 事件循环（`silver shellfish`），无新 fix PR。
- [#115908](https://github.com/openclaw/openclaw/issues/115908) — Session transcript projection reconcile 在持续写时 livelock，阻塞主线程与所有 channel transport（7/29 新开，3 日内升温）。
- [#89315](https://github.com/openclaw/openclaw/issues/89315) — gateway 堆在 Linux systemd --user 部署中无界增长，cgroup OOM 杀掉（`silver shellfish`），无 fix PR。
- [#87327](https://github.com/openclaw/openclaw/issues/87327) — Isolated agent 在 runtime-plugins

---

## 横向生态对比

# 个人 AI 助手 / 自主智能体开源生态横向对比报告

**报告日期：2026-07-30 ｜ 数据来源：13 个 GitHub 公开仓库 24 小时动态**

---

## 1. 生态全景

整体生态呈现**「头部高强度架构重构 + 中部快速质量收敛 + 尾部静默待激活」**的三层结构。以 OpenClaw、IronClaw、ZeroClaw 为代表的 monorepo 级项目单日处理 50+ Issues/PRs，主要工作在架构收敛与生产化加固；NanoBot、LobsterAI、CoPaw 等中型项目处于"补漏 + 新特性并行"的活跃期；而 PicoClaw、TinyClaw、ZeptoClaw 等已出现明显的**社区响应断裂**。共性议题集中在**多智能体协作、记忆/会话分层、跨平台通道保真、OAuth 凭据韧性**四条主线，分歧点则在于「平台入口形态」（Desktop / CLI / Web / 移动） 与「信任基座」（自托管 / 链上签名 / 本地 LLM）。

---

## 2. 各项目活跃度对比

| 项目 | 24h Issues | 24h PRs | Release | 健康度 | 当前阶段 |
|---|---|---|---|---|---|
| **OpenClaw** | 500 / 关闭 51（10.2%） | 500 / 关闭 99（19.8%） | ❌ | ⭐⭐⭐⭐ | 高活跃架构修复 |
| **NanoBot** | 5 / 关闭 2 | 33 / 关闭 19 | ❌ | ⭐⭐⭐⭐⭐ | 质量巩固 + 严格类型化 |
| **Hermes Agent** | 50 / 关闭 11 | 50 / 关闭 10 | ❌ | ⭐⭐⭐ | Bug 集中爆发期 |
| **PicoClaw** | 1 | 2 / 关闭 0 | ❌ | ⭐⭐ | 静默期 |
| **NanoClaw** | 1 | 7 / 关闭 4 | ❌ | ⭐⭐⭐⭐ | 积压清理 + 关键功能待合并 |
| **NullClaw** | 1 | 4 / 关闭 2 | ❌ | ⭐⭐⭐ | 修复积压 Bug |
| **IronClaw** | 50 / 关闭 30 | 50 / 关闭 12 | ❌ | ⭐⭐⭐⭐ | Reborn 里程碑收敛 |
| **LobsterAI** | 0 | 15 / 关闭 13 | ✅ 2026.7.24 合入主线 | ⭐⭐⭐⭐ | 正式发版 + 快速迭代 |
| **TinyClaw** | 0 | 0 | ❌ | ⭐ | 无活动 |
| **Moltis** | 0 | 5 / 关闭 2 | ❌ | ⭐⭐⭐ | 内部驱动型开发 |
| **CoPaw (QwenPaw)** | 25 / 关闭 4 | 46 / 关闭 9 | ❌ | ⭐⭐⭐ | 高频回归修复 |
| **ZeptoClaw** | 0 | 0 | ❌ | ⭐ | 无活动 |
| **ZeroClaw** | 50 / 关闭 30 | 50 / 关闭 7 | ❌ | ⭐⭐⭐⭐⭐ | RFC 集中爆发 + v1.0 前收敛 |

> **关键观察**：仅 LobsterAI 完成发版；ZeroClaw / OpenClaw / IronClaw 形成"日吞吐量 50+"的三巨头格局；CoPaw 待合并 37 条 PR 的积压值得关注。

---

## 3. OpenClaw 在生态中的定位

| 维度 | OpenClaw | 同类对照 |
|---|---|---|
| **代码规模** | monorepo 级（500+ 活跃 Issues/PRs/天） | 仅 IronClaw、ZeroClaw 同级 |
| **修复节奏** | 10.2% / 19.8% 关闭率 | 与 ZeroClaw（~15%）、IronClaw（~24%）同区间 |
| **技术广度** | Codex / Active Memory / 生命周期 hook / 多通道（Telegram/Discord/qqbot/email） | IronClaw 偏 Web3 信任层，ZeroClaw 偏协议抽象 |
| **核心痛点** | Codex app-server / OAuth / hook relay 三层栈系统性不稳 | NanoBot 偏会话一致性，Hermes Agent 偏 Desktop |
| **生态位** | 通用型企业级个人助手基础设施 | LobsterAI（中国市场）、Moltis（Slack-first）、NanoBot（多智能体愿景） |

**核心定位**：OpenClaw 是生态中**功能面最广、复杂度最高、社区关注度最密**的核心参照系。其 Codex 集成栈暴露的 hook relay 阻塞、OAuth 刷新挂死、Active Memory 与 prompt-cache 冲突三连问题，实质上揭示了「**大型 monorepo 在第三方 LLM 集成层缺乏稳定性契约**」这一行业共性难题，与 IronClaw 的 Gemini OAuth、ZeroClaw 的 Codex CLI extra args 警告共同构成「Provider 集成脆弱性」主题。

---

## 4. 共同关注的技术方向

### 4.1 多智能体协作范式演进
- **NanoBot** #5000 / #5034：状态图式持久规划与恢复
- **OpenClaw** #91009 / #86996：Codex + Active Memory 子代理链路
- **Hermes Agent** #18715（👍 22）：远程 Agent + 本地工具执行
- **ZeroClaw** #9106：A2A 出站客户端（A2ATool）RFC

### 4.2 记忆与会话分层架构
- **OpenClaw** #90354 / #91223：pre-compaction flush + prompt-cache 冲突（命中率 99.9%→22%）
- **NanoBot** #5118 / #5163：媒体路径丢失、cron 完成态丢失
- **NullClaw** #979：auto_recall / recall_limit / max_context_bytes 可配置化
- **ZeroClaw** #9048（11 评论）：会话历史 vs 长期记忆分离 RFC
- **ZeroClaw** #9103：权威记忆存储与连接器解耦

### 4.3 OAuth / 凭据韧性
- **OpenClaw** #86215 / #89278：Codex OAuth 挂死 / 10s 超时
- **Hermes Agent** #44799：冷却窗口内 refresh token 永久失效
- **IronClaw** #6348（已修）：Gmail 扩展 OAuth 绕过（安全）
- **LobsterAI** #2360：登录重试时本地回调丢失

### 4.4 跨平台通道消息保真
- **Telegram**：OpenClaw #87665（typing 卡住）、NanoBot #5156（静默挂起）、NanoClaw #3151（rich_message 静默丢弃）
- **Slack**：NanoClaw #2904（线程历史丢失）、Moltis #1166（确认反应 / 阶段机）
- **Discord**：OpenClaw #87665、PicoClaw（多 Agent 路由失效）
- **飞书**：Hermes Agent #11874、LobsterAI #2360

### 4.5 数据库 / 文件系统可移植性
- **Hermes Agent**：APFS CoW + ZFS + virtiofs + SQLite WAL 整条修复链（#68545 → #57820 → #71498）
- **OpenClaw** #112423 / #115908：大 SQLite transcript 阻塞事件循环
- **ZeroClaw** #9186：MCP stdio 响应 id 不匹配 / 30s 硬超时 / 整调用持锁

### 4.6 可观测性与安全
- **ZeroClaw** #8933（6 评论）：跨轮次 OTel 会话关联
- **ZeroClaw** #9127（9 评论）：KeySource trait 抽象
- **IronClaw** attested-signing 8 段 PR 集群（#6769→#6822）
- **Moltis** #1174：Langfuse v4 + OTLP 导出

---

## 5. 差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 技术架构特征 |
|---|---|---|---|
| **OpenClaw** | 全功能型个人助手 + 多通道 + 子代理 | 企业/个人通用 | monorepo + Codex 集成 + Active Memory |
| **NanoBot** | 生产级稳定性 + 多智能体演进 | 实战部署用户 | BasedPyright strict / WeakValueDictionary / 状态图规划 |
| **Hermes Agent** | Desktop 整合 + 分布式执行 + Kanban | 桌面端重度用户 | SQLite WAL 跨 FS 适配 + per-turn micro-compaction |
| **IronClaw** | Web3 信任层 + Reborn 架构 + 链上签名 | 加密/Web3 场景 | 9,421 行 composition 拆分 + NoExposureGuard + attested-signing |
| **ZeroClaw** | 协议抽象 + 记忆架构 + 互操作性 | 架构师 / 集成商 | KeySource trait / SOP 中心化 / OTel 会话关联 |
| **LobsterAI** | 国内模型兼容 + cowork 协作 + 侧栏上下文 | 中国市场桌面用户 | Kimi K3 auto 适配 / 选中即上下文 |
| **CoPaw (QwenPaw)** | Computer Use + Creator 插件 + ReMe 记忆 | Qwen/MiniMax 生态 | native desktop GUI 自动化 / MCP 韧性 |
| **Moltis** | Slack-first + ACP 协议 + 可观测性 | Slack 重度团队 | per-account operators 模型 / PWA 推送 |
| **NanoClaw** | 多引擎配额回退 + 跨渠道保真 | 多供应商生产用户 | Claude↔Codex 自动回退 / 预加固镜像 |
| **NullClaw** | 本地 LLM + 调度任务闭环 | 家庭 / 小型团队自托管 | Ollama + paired_token 持久化 |
| **PicoClaw** | 极轻量 + 树莓派 | 边缘 / IoT | dispatch rules 多 Agent |

**关键差异点**：
- **信任基座**：IronClaw 押注链上签名，ZeroClaw 押注协议抽象，NullClaw 押注本地 LLM，OpenClaw 押注 Provider 生态
- **入口形态**：Hermes Agent / CoPaw / LobsterAI 偏 Desktop，NanoBot / Moltis 偏 Web，NanoClaw / NullClaw 偏 CLI/Chat
- **协作范式**：NanoBot 走"持久状态图"，OpenClaw 走"hook relay + 子代理"，ZeroClaw 走"A2A 协议"

---

## 6. 社区热度与成熟度

### 🔥 第一梯队 · 快速迭代阶段（高吞吐 / 架构重构）
- **OpenClaw**：

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目日报 · 2026-07-30

---

## 1. 今日速览

NanoBot 仓库在 24 小时内呈现**高强度开发活跃度**：33 条 PR 更新（19 条已合并/关闭、14 条仍待合并），5 条 Issue 更新（2 条关闭、3 条活跃）。整体工作聚焦于三条主线——**WebUI 体验打磨**（4 条相关 PR 落地）、**内存/会话一致性的回归修复**（多条 P1 修复协同），以及**严格的类型检查基线建立**（BasedPyright strict 模式已合并至主干）。项目无新版本发布，但提交节奏密集，代码健康度明显提升，社区讨论度保持中等水平。

---

## 2. 版本发布

无新版本发布。当前版本线保持稳定，开发活动集中在主干分支的质量改进与新功能落地，为下一版本做铺垫。

---

## 3. 项目进展（已合并/关闭的重要 PR）

| PR | 标题 | 影响 |
|---|---|---|
| [#5158](https://github.com/HKUDS/nanobot/pull/5158) | refactor: enforce BasedPyright strict type checking | **里程碑级**：为 `nanobot/` 全量启用 BasedPyright `strict` 模式，使 273 个 Python 模块成为 strict-clean。这是项目类型安全基线的关键一步 |
| [#5157](https://github.com/HKUDS/nanobot/pull/5157) | fix(memory): expose media references to session consolidation | 修复 #5118，统一媒体面包屑渲染器，避免媒体路径在会话归档时丢失 |
| [#5160](https://github.com/HKUDS/nanobot/pull/5160) | fix(shell): preserve UTF-8 native input on PowerShell 5 | 修复 Windows PowerShell 5.1 上非 ASCII 输入被破坏的问题，新增原生管道 UTF-8 集成测试 |
| [#5116](https://github.com/HKUDS/nanobot/pull/5116) | feat(webui): add skill marketplaces and management | WebUI 新增"Discover"视图，整合 skills.sh 与 SkillHub，支持技能市场浏览、源过滤、安装历史 sparkline |
| [#5162](https://github.com/HKUDS/nanobot/pull/5162) | feat(webui): track optimistic message delivery status | 用户消息状态机升级：`sending` → `accepted` / `failed`，并暴露网关错误详情 |
| [#5164](https://github.com/HKUDS/nanobot/pull/5164) | fix(webui): prevent redundant thread and media reloads | 模型切换不再触发线程重水化，token 轮换不再污染业务数据依赖，取消过期请求 |
| [#5165](https://github.com/HKUDS/nanobot/pull/5165) | fix(webui): avoid false microphone silence errors | 修复 Web Audio 分析器在静音场景下误报录音失败的问题 |

**整体评估**：今日合并明显推动了项目向"生产级稳定性 + 严格类型安全"演进。WebUI 体验从"功能可用"走向"细节可靠"，内存/会话链路的多处回归被系统性收敛。

---

## 4. 社区热点

### 最受关注的 Issue
- **[#5000 推进 subagent 向多智能体协作演进](https://github.com/HKUDS/nanobot/issues/5000)**（6 条评论）  
  作者 @bingqilinweimaotai 提出：当前 subagent 缺乏持久身份、共享任务状态、跨任务通信机制，实质仍是"后台任务委派"。社区讨论聚焦于多 agent 的状态共享与协议设计。配套 PR [#5034 feat(goal): add durable state-graph planning and recovery](https://github.com/HKUDS/nanobot/pull/5034) 已在路上，尝试以"持久状态图规划与恢复"机制回应这一诉求。

### PR 端讨论热点
- **[#5034 feat(goal): add durable state-graph planning and recovery](https://github.com/HKUDS/nanobot/pull/5034)**（P1, conflict）  
  为 `/goal` 流程引入结构化执行计划、依赖状态与失败恢复路径，是多智能体演进方向的关键候选实现。

> 热度反映的诉求：用户希望 NanoBot 突破"单 agent + 子任务"的简单模型，进入真正的多 agent 协作范式。

---

## 5. Bug 与稳定性

### 已修复（P1/P2）
| 等级 | 问题 | 状态 |
|---|---|---|
| **P1** | [#5118](https://github.com/HKUDS/nanobot/issues/5118) 会话归档丢失 `media[]` 中独有路径，文件不可恢复 | ✅ 由 [#5157](https://github.com/HKUDS/nanobot/pull/5157) 修复 |
| **P1** | [#5159](https://github.com/HKUDS/nanobot/issues/5159) Windows PowerShell 5.1 破坏非 ASCII 原生管道输入 | ✅ 由 [#5160](https://github.com/HKUDS/nanobot/pull/5160) 修复 |
| **P1** | Web Audio 误判静音导致录音失败 | ✅ 由 [#5165](https://github.com/HKUDS/nanobot/pull/5165) 修复 |

### 待修复（新开/活跃）
| 等级 | 问题 | 修复 PR |
|---|---|---|
| **P1** | [#5163](https://github.com/HKUDS/nanobot/issues/5163) 手动触发的 cron 在 WebUI 轮询重载时丢失完成状态（仍显示 Failed） | ❌ 暂无对应 PR。`CronService.run_job()` 与 `list_jobs` 等 store 读 API 之间存在竞态 |
| **P2** | [#5164 / #5165 涉及 WebUI 重载冗余](https://github.com/HKUDS/nanobot/pull/5164) | ✅ 已修复 |
| **P1** | [#5156 fix(telegram): recover from silently stalled polling](https://github.com/HKUDS/nanobot/pull/5156) | 生产环境观察：网络抖动后 Telegram bot 永久停止收消息但进程与日志均无异常。**待合并** |
| **P1** | [#5166 fix(agent): expire inherited goal permission outside scope](https://github.com/HKUDS/nanobot/pull/5166) | 安全类：`asyncio.create_task()` 复制 `ContextVar[bool]`，子任务在父作用域退出/撤销后仍保留 `True`。**待合并** |
| **P1** | [#5151 fix(agent): release idle session locks](https://github.com/HKUDS/nanobot/pull/5151) | `AgentLoop._session_locks` 长期持有导致内存泄漏；改用 `WeakValueDictionary`。**待合并** |
| **P1** | [#5150 fix(exec): bound buffered session output](https://github.com/HKUDS/nanobot/pull/5150) | exec 会话的 stdout/stderr 无上界，可能 OOM。**待合并** |
| **P1** | [#5154 fix(providers): handle primitive items safely in Responses API parser](https://github.com/HKUDS/nanobot/pull/5154) | SSE 流中原始类型元素触发 `vars()` 抛 `TypeError`。**待合并** |
| **P1** | [#5146 fix(webui): drop malformed token-usage day keys](https://github.com/HKUDS/nanobot/pull/5146) | 单个非法 day key 导致所有 `/api/settings` 请求失败。**待合并** |
| **P1** | [#5153 fix(memory): handle non-string timestamp and missing role in raw_archive](https://github.com/HKUDS/nanobot/pull/5153) | 历史消息 timestamp 为 `None`/数字、role 缺失时 `_format_messages` 崩溃。**待合并** |
| **P2** | [#4812 fix(memory): use .get() for role key](https://github.com/HKUDS/nanobot/pull/4812) | 与 #5153 重叠，conflict 待解。**待合并** |

### 严重程度总结
- **P1 待合并积压 7 条**，涵盖 exec 缓冲、agent 会话锁、Telegram 静默挂起、Responses API 解析、内存归档、token 用量键校验、目标权限 ContextVar 泄漏。维护者需关注合并节奏，避免回归风险。
- **#5163 cron 完成态丢失** 是今日新出现的**无修复 PR 的 P1 级 bug**，建议优先处理。

---

## 6. 功能请求与路线图信号

| 诉求 | 当前对应 PR | 进入下一版本的概率 |
|---|---|---|
| 多智能体协作（持久身份、共享状态） | [#5034](https://github.com/HKUDS/nanobot/pull/5034) P1 + [#5000](https://github.com/HKUDS/nanobot/issues/5000) | ⭐⭐⭐⭐ 高 — 已有完整 RFC 与实现雏形 |
| Telegram 自托管 Bot API / 企业网关 | [#4919](https://github.com/HKUDS/nanobot/pull/4919) P2 | ⭐⭐⭐ 中 — 实现成熟，等待 review |
| WebUI 技能市场整合（skills.sh + SkillHub） | [#5116](https://github.com/HKUDS/nanobot/pull/5116) ✅ 已合并 | ⭐⭐⭐⭐⭐ 已落地 |
| WebUI 乐观消息状态机 | [#5162](https://github.com/HKUDS/nanobot/pull/5162) ✅ 已合并 | ⭐⭐⭐⭐⭐ 已落地 |
| 基于状态图的目标持久规划与恢复 | [#5034](https://github.com/HKUDS/nanobot/pull/5034) | ⭐⭐⭐⭐ 高 |
| OpenRouter 流量规范化归因 | [#5094](https://github.com/HKUDS/nanobot/pull/5094) | ⭐⭐⭐ 中 |
| 进一步收窄 Pyright 文件级抑制 | [#5161](https://github.com/HKUDS/nanobot/issues/5161) | ⭐⭐⭐⭐ 高 — 与 #5158 strict 化战略一致 |

---

## 7. 用户反馈摘要

从可获取的 Issue/PR 评论中提炼的真实信号：

- **"生产环境观察"型反馈显著增加** —— [#5156](https://github.com/HKUDS/nanobot/pull/5156) 明确标注"Observed in production"，说明 NanoBot 已进入实战部署阶段，用户期望的不是 demo 级稳定性，而是 7×24 不静默挂起的能力。
- **跨平台一致性诉求** —— [#5159](https://github.com/HKUDS/nanobot/issues/5159) 反映 Windows PowerShell 5.1 用户（企业内常见环境）在非 ASCII 输入上反复踩坑，说明 Windows 兼容性仍是高频痛点。
- **会话/记忆丢失引发强烈不信任感** —— [#5118](https://github.com/HKUDS/nanobot/issues/5118)（媒体路径丢失）、[#5163](https://github.com/HKUDS/nanobot/issues/5163)（cron 状态不一致）属于"看似成功实则失败"的隐性 bug，对自动化的可靠性打击较大，用户对此类问题零容忍。
- **多智能体范式期待** —— #5000 的 6 条评论显示，开发者社区希望 NanoBot 走出"主-子代理"的简化模型，拥抱真正的协同智能体生态。
- **正面信号** —— WebUI 技能市场 (#5116)、乐观消息状态 (#5162)、麦克风静音修复 (#5165) 等合并表明维护者积极响应 UX 细节反馈，用户体验持续向好。

---

## 8. 待处理积压

按"对项目健康度影响 × 停滞时长"加权排序：

| 优先级 | Issue/PR | 主题 | 创建日期 | 风险 |
|---|---|---|---|---|
| 🔴 高 | [PR #4919](https://github.com/HKUDS/nanobot/pull/4919) | Telegram 自托管 Bot API 支持 | 2026-07-14 | 阻塞企业用户自部署需求 |
| 🔴 高 | [PR #5034](https://github.com/HKUDS/nanobot/pull/5034) | 状态图式目标规划与恢复 | 2026-07-22 | 承载 #5000 多智能体愿景的关键 PR |
| 🟡 中 | [PR #5094](https://github.com/HKUDS/nanobot/pull/5094) | OpenRouter 规范化归因 | 2026-07-26 | 影响 OpenRouter 渠道识别 |
| 🟡 中 | [Issue #5163](https://github.com/HKUDS/nanobot/issues/5163) | cron 手动执行完成态丢失 | 2026-07-29 | **今日新开、尚无 PR**，需关注 |
| 🟢 低 | [PR #4812](https://github.com/HKUDS/nanobot/pull/4812) | 防御式 `.get('role')` | 2026-07-06 | 与 #5153 存在冲突，需协调 |

**维护者建议**：
1. 优先合并 [#5151](https://github.com/HKUDS/nanobot/pull/5151)、[#5150](https://github.com/HKUDS/nanobot/pull/5150)、[#5166](https://github.com/HKUDS/nanobot/pull/5166) 三条 P1 修复 —— 内存泄漏、exec 缓冲溢出、ContextVar 权限泄漏均属潜在安全/稳定性隐患。
2. [#5139](https://github.com/HKUDS/nanobot/pull/5139) 与 [#5157](https://github.com/HKUDS/nanobot/pull/5157) 同时针对 #5118，需协调避免重复合并。
3. [#4812](https://github.com/HKUDS/nanobot/pull/4812) 与 [#5153](https://github.com/HKUDS/nanobot/pull/5153) 目标重叠，建议合并实现路径。
4. 为无修复 PR 的 [#5163](https://github.com/HKUDS/nanobot/issues/5163) cron 竞态指派 owner。

---

*报告生成时间：2026-07-30 ｜ 数据来源：HKUDS/nanobot GitHub 公开数据*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目日报
**日期：2026-07-30**

---

## 1. 今日速览

Hermes Agent 在过去 24 小时维持了**高强度的双轨活跃度**：50 条 Issue 更新（39 新开/活跃，11 关闭）与 50 条 PR 更新（40 待合并，10 关闭）。本期最大焦点集中在 **SQLite/WAL 数据库在非常规文件系统（APFS、ZFS、virtiofs）下的稳定性** 与 **Desktop 应用更新/进程/配置路径管理**，相关 Issues 形成一个清晰的"配置—执行—锁定"故障链。同时围绕 **上下文压缩（micro-compaction）**、**Memory/InMind 隐式联想召回**、**Vercel AI Gateway 重新引入** 等大粒度功能 PR 同日涌入，表明 v0.19.0 之后的下一里程碑正在快速成形。整体来看，项目处于「Bug 集中爆发 + 大功能 PR 并行」的活跃开发期，无版本发布，但提交与讨论节奏健康，没有出现停滞信号。

---

## 2. 版本发布

无新版本发布。代码主线 `v0.19.0`（2026-07-20）仍是当前已发版基线。

---

## 3. 项目进展

今日关闭/合并 10 条 PR，其中多数针对**配置解析正确性**、**数据库稳定性**、**消息投递去重**与 **Desktop 启动竞态**：

| PR | 主题 | 意义 |
|---|---|---|
| [#74158](https://github.com/NousResearch/hermes-agent/pull/74158) | `fix(gateway): preserve explicit send-image requests from session-wide MEDIA dedup` | 关闭 [#73771](https://github.com/NousResearch/hermes-agent/issues/73771)，修复"用户明确要求再次发送图片被 MEDA 去重吞掉"的语义错误 |
| [#11874](https://github.com/NousResearch/hermes-agent/pull/11874) | `feat(feishu): support outbound @ mention` | 飞书平台补齐出站 @ 解析，与入站解析对齐 |
| [#62792](https://github.com/NousResearch/hermes-agent/pull/62792) | `fix(desktop): Desktop backend uses venv Python on Windows` | 解决 Windows 锁 `.pyd` 导致更新阻塞的根因之一 |

另需注意 [#70619 / #58387 / #51215 / #21807 / #57820](https://github.com/NousResearch/hermes-agent/issues/21807) 等关闭 Issue 是同一系列 `database.journal_mode` / ZFS / APFS 修复链上的进一步落地，说明 **[#68545](https://github.com/NousResearch/hermes-agent/issues/68545)（virtiofs）→ [#57820](https://github.com/NousResearch/hermes-agent/issues/57820)（config 读取 journal_mode）→ [#71498](https://github.com/NousResearch/hermes-agent/issues/71498)（APFS CoW）** 已形成统一的"配置化 SQLite 持久化"路线图。

**整体推进度评估**：项目在「数据库可移植性 + 配置一致性」两条主线上明显前进了约一格版本的工作量；离下一个发版（推测 v0.19.1 修复版或 v0.20.0 特性版）仍有 2–3 周工作量。

---

## 4. 社区热点

按评论数与 👍 数综合排序，今日最受关注的议题：

1. **[#71298](https://github.com/NousResearch/hermes-agent/issues/71298)（13 评论）** — `providers` vs `custom_providers` 双存储导致 CLI/GUI 不一致，模型版本被卡在 profile 内。**诉求**：统一存储路径，消除 CLI 与 Desktop 的语义差异。
2. **[#69551](https://github.com/NousResearch/hermes-agent/issues/69551)（12 评论）** — Desktop SSH remote 模式在非默认 profile 下完全失效，路径硬编码 `~/.hermes/desktop-ssh` 而 token 校验走 profile-scoped `HERMES_HOME`。**诉求**：profile-scoped 路径解析必须贯穿所有子系统。
3. **[#18715](https://github.com/NousResearch/hermes-agent/issues/18715)（12 评论 / 👍 22）** — **远程 Hermes Agent + 本地工具执行**（呼声最高的特性）。**诉求**：模型与执行环境解耦，实现"中心大脑 + 本地执行"模型。
4. **[#41222](https://github.com/NousResearch/hermes-agent/issues/41222)（9 评论 / 👍 16）** — Desktop 内置 Kanban Board。**诉求**：把多代理工作流的核心 UI 收入桌面端，消除 CLI 切换摩擦。
5. **[#18715 与 #41222 综合 👍=38](https://github.com/NousResearch/hermes-agent/issues/18715)** 反映出社区当前最强烈的方向性诉求是**"分布式执行"+"桌面化整合"**，两条诉求彼此互补。

---

## 5. Bug 与稳定性

按严重程度（P0–P3 + `sweeper:` 风险标签）排列：

### 🔴 P0 / 高危（会话级风险）
- **[#60197 [CLOSED]](https://github.com/NousResearch/hermes-agent/issues/60197)** — `/exit` 期间 MCP server 任务抛出 `RuntimeError: Event loop is closed`（MCPServerTask.shutdown）。**已有修复**（CLS 状态），但根因仅被"吞掉"，需关注是否真正解决了 shutdown 序列。

### 🟠 P1（系统/数据完整性）
- **[#74373](https://github.com/NousResearch/hermes-agent/issues/74373)** — `distribution_owned` 不能约束 profile 分发的 copy/update payload。安全/兼容性双向风险。
- **[#44799](https://github.com/NousResearch/hermes-agent/issues/44799)** — Codex OAuth refresh token 在冷却窗口内到期，refresh 链断裂，导致**周配额**等长冷却场景下凭证永久失效。

### 🟡 P2（功能/兼容性）
- **[#53819](https://github.com/NousResearch/hermes-agent/issues/53819)** — `kanban.db` 在并发 worker 下因未序列化写入损坏（需 per-write 序列化）。
- **[#18659](https://github.com/NousResearch/hermes-agent/issues/18659)** — `scan_skill_commands` 在 try 前无条件清空 `_skill_commands`，异常时静默丢失全部 90+ 斜杠命令。**已有讨论方向**（移到 try 内）。
- **[#74267](https://github.com/NousResearch/hermes-agent/issues/74267)** — Windows Desktop updater 误判运行中进程并中止更新。
- **[#74241 [关联 PR #74158]](https://github.com/NousResearch/hermes-agent/issues/73771)** — Session-wide MEDIA dedup 吞掉显式"再发一次"请求（已合并 PR 修复）。
- **[#71498 [CLOSED]](https://github.com/NousResearch/hermes-agent/issues/71498)** — macOS APFS CoW + SQLite WAL 不兼容，子代理初始化触发 I/O 错误。
- **[#67165 [CLOSED]](https://github.com/NousResearch/hermes-agent/issues/67165)** — cua-driver macOS ScreenCaptureKit `display_count=0`，TCC 权限正常时仍失效。
- **[#69663](https://github.com/NousResearch/hermes-agent/issues/69663)** — Desktop 自更新成功后卡在 "An update is finishing…"。
- **[#69678 / 多平台](https://github.com/NousResearch/hermes-agent/issues/69663)** — 多平台的"successful update stuck"模式在 Desktop 上再现。

### ⚪ P3（视觉/小问题）
- **[#38359](https://github.com/NousResearch/hermes-agent/issues/38359)** — TUI 暗色主题下 inline diff 背景与 CLI 不一致。
- **[#73854 [CLOSED]](https://github.com/NousResearch/hermes-agent/issues/73854)** — `test_detach_keeps_draining_into_buffer` 间歇性失败（已修）。
- **[#74456](https://github.com/NousResearch/hermes-agent/issues/74456)** — Hermes Agent 在 Termux 上安装失败（重复 Issue）。

**总结**：数据库/文件系统（APFS、ZFS、virtiofs、SQLite WAL、kanban DB）与 Desktop 进程管理两条线构成当前 Top-1 故障面，需要维护者优先编排。

---

## 6. 功能请求与路线图信号

| 方向 | 关联 Issue / PR | 落地概率 |
|---|---|---|
| **远程 Agent + 本地工具执行** | [#18715](https://github.com/NousResearch/hermes-agent/issues/18715)（👍 22） | 高 — 已有分布式执行讨论基础 |
| **Desktop 内置 Kanban** | [#41222](https://github.com/NousResearch/hermes-agent/issues/41222)（👍 16） | 中高 |
| **Per-turn Micro-compaction** | [PR #74522](https://github.com/NousResearch/hermes-agent/pull/74522)（P0、`sweeper:risk-session-state`） | 极高 — 同日针对 [#72451](https://github.com/NousResearch/hermes-agent/issues/72451) 的"压缩耗尽 attempt budget"问题 |
| **InMind Memory 隐式联想召回** | [PR #74523](https://github.com/NousResearch/hermes-agent/pull/74523) | 高 — 学术型功能首次落库，路线图新方向 |
| **Request-scoped Turn Routing** | [PR #74512](https://github.com/NousResearch/hermes-agent/pull/74512)（P3，全平台统一 lifecycle） | 高 — 但 `needs-decision` 较高，可能需要架构讨论 |
| **Vercel AI Gateway + Sandbox 回归** | [PR #74518](https://github.com/NousResearch/hermes-agent/pull/74518)（恢复 #33067） | 中 — "modernized revert"暗示曾因合规/安全原因撤下，需审查 |
| **RPM 限速前摄性节流** | [#7489](https://github.com/NousResearch/hermes-agent/issues/7489)（👍 5） | 中 — 已有 RFC 雏形 |
| **Slack per-channel reply modes** | [PR #74521](https://github.com/NousResearch/hermes-agent/pull/74521) | 高 |
| **最大化 max_context_length 跨模型保留** | [#70241](https://github.com/NousResearch/hermes-agent/issues/70241) | 中 |
| **Named delegation profiles** | [#71727](https://github.com/NousResearch/hermes-agent/issues/71727) | 中 |
| **GitHub PR 全局 Dashboard** | [#62352](https://github.com/NousResearch/hermes-agent/issues/62352) | 低 — 非核心场景 |

**信号读取**：v0.20 的潜在主题词可能是「**分布式 + 持久化 + 内存改进**」，与 v0.19 的「跨平台一致性 + Provider 扩展」主题形成连续梯度。

---

## 7. 用户反馈摘要

从高互动议题中提炼的真实痛点：

- **配置源不一致是最深痛点**："CLI 看到的 ≠ Desktop 看到的 ≠ 实际生效的"（[#71298](https://github.com/NousResearch/hermes-agent/issues/71298)、[#69551](https://github.com/NousResearch/hermes-agent/issues/69551)、[#70679](https://github.com/NousResearch/hermes-agent/issues/70679)）。用户明确表达期待 `HERMES_HOME` / `~/.hermes` / profile 作用域三者在所有 CLI/GUI/SSH 路径下**统一解析**。
- **更新链路是信任断裂点**："成功的更新反而卡死"——[#73109](https://github.com/NousResearch/hermes-agent/issues/73109) 修复后每次修理留下 1.1 GB 临时 venv；[#69663](https://github.com/NousResearch/hermes-agent/issues/69663)、[#74267](https://github.com/NousResearch/hermes-agent/issues/74267) 形成 Windows / macOS / Linux 三平台一致的更新脆弱面。
- **OAuth 沉默失败**：Codex 用户在"7 天冷却"期间凭证永久失效，没有任何提示（[#44799](https://github.com/NousResearch/hermes-agent/issues/44799)）。
- **磁盘-数据库边界完全用户驱动**：APFS / ZFS / virtio

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目日报
**日期：2026-07-30**

---

## 1. 今日速览

PicoClaw 项目今日活跃度偏低，处于"低强度维护"状态。过去 24 小时内仅产生 1 条新 Issue、2 条 PR 更新，且**无任何 PR 合并、无新版本发布**。新增 Issue (#3301) 聚焦于多 Agent 路由场景下的 `/clear` 与会话自动压缩失效问题，属于会话状态管理的核心 Bug。两条仍在等待合并的 PR 分别覆盖钉钉渠道图片消息接入 (#3283) 与安装脚本迁移 (#1951)。整体来看，社区关注度较前期有所回落，建议维护者关注积压 PR 的处理节奏。

---

## 2. 版本发布

⚠️ **今日无新版本发布。** 最近可追踪的版本仍为 Issue #3301 中用户反馈所使用的 **v0.3.1 (commit 2cf030d2)**。

---

## 3. 项目进展

今日 **0 个 PR 被合并**，项目代码层面无实质性推进。

在等待合并的 PR 中：
- **#3283** — 钉钉渠道图片消息支持（创建于 2026-07-22，标记为 stale，今日仍有更新）
- **#1951** — 安装脚本从 docs 仓库迁移至主仓库（创建于 2026-03-24，已搁置约 4 个月）

两条 PR 均处于停滞状态，未见维护者评审反馈，项目主线推进缓慢。

---

## 4. 社区热点

| 排名 | 议题 | 类型 | 评论数 | 👍 |
|------|------|------|--------|-----|
| 1 | [#3301](https://github.com/sipeed/picoclaw/issues/3301) `/clear` 与会话自动压缩在非默认 Agent 中失效 | Bug | 0 | 0 |
| 2 | [#3283](https://github.com/sipeed/picoclaw/pull/3283) 钉钉图片消息支持 | Feature PR | - | 0 |

**分析**：今日社区热度整体处于低位。Issue #3301 是唯一新开议题，虽暂无评论，但其涉及多 Agent 路由下的会话隔离与状态清理，是平台型功能的**关键缺陷**——一旦用户启用 dispatch rules 将不同 chat 路由到不同 Agent，就会出现会话管理失效，影响生产可用性。该问题具备较高的潜在共鸣度，建议优先响应。

---

## 5. Bug 与稳定性

### 🔴 高优先级

**[#3301 /clear and session auto-compression don't work in chats routed to non-default agent via dispatch rules](https://github.com/sipeed/picoclaw/issues/3301)**
- **报告者**：j-v
- **环境**：PicoClaw v0.3.1 / Raspberry Pi / Discord + Telegram / DeepSeek via OpenCode Go
- **严重程度**：高
- **影响范围**：所有使用 dispatch rules 进行多 Agent 分流的用户
- **症状**：当 chat 被路由到非默认 Agent 时，`/clear` 命令与会话自动压缩均不生效
- **是否有修复 PR**：❌ 暂无

**评估**：该 Bug 影响核心会话控制能力，且复现路径清晰（dispatch rules + 非默认 agent），建议维护者复现并在下个小版本（如 0.3.2）中修复。

---

## 6. 功能请求与路线图信号

### 钉钉渠道图片消息支持 — [PR #3283](https://github.com/sipeed/picoclaw/pull/3283)
- **作者**：MrTreasure
- **状态**：Open (stale)
- **变更要点**：
  - 新增图片消息接入逻辑
  - 增加 OpenAPI access_token 缓存字段（`tokenMu`、`accessToken`、`tokenExpires`）
  - 新增 `getAccessToken`、`downloadInboundPicture`、`keysOf`、`stringValue` 等方法
  - `onChatBotMessageReceived` 支持图片类型并优雅降级
- **路线图可能性**：⭐⭐⭐⭐ 高。钉钉作为国内重要 IM 渠道，图片消息是基本刚需，预计会被纳入下一版本。

### 安装脚本集中化 — [PR #1951](https://github.com/sipeed/picoclaw/pull/1951)
- **作者**：lc6464
- **状态**：Open（已停滞 ~4 个月）
- **变更要点**：将原位于 `picoclaw_docs` 仓库的安装脚本迁移至主仓库
- **路线图可能性**：⭐⭐ 低-中。属工程化整理类变更，不影响功能但有助于降低用户安装门槛；维护者长期未响应，需提醒。

---

## 7. 用户反馈摘要

由于今日 Issue 评论数均为 0，可提炼的反馈有限，但仍可从 Issue #3301 的描述中识别出以下真实场景与痛点：

- **使用场景**：用户在 Raspberry Pi 上运行 PicoClaw，通过 Discord 与 Telegram 多渠道接入，依赖 dispatch rules 实现多 Agent 路由（默认 + 专用 Agent）
- **核心痛点**：会话管理命令（`/clear`）和自动压缩机制在 Agent 分流场景下"失效"，意味着用户无法干净地重置某个 Agent 的会话上下文，可能导致上下文污染或 OOM 风险
- **隐含期望**：用户期待 dispatch rules 与会话状态之间具备**清晰的隔离与可控性**，这也是平台化 Agent 框架的基本要求
- **满意/不满意**：暂无显性评价，但从 Bug 报告本身可推断用户对 v0.3.1 的整体能力是认可的，否则不会投入精力配置 dispatch rules

---

## 8. 待处理积压 ⚠️

| 编号 | 类型 | 创建日期 | 等待时长 | 风险评估 |
|------|------|----------|----------|----------|
| [#1951](https://github.com/sipeed/picoclaw/pull/1951) | PR (build 增强) | 2026-03-24 | **~128 天** | 🟡 中等 — 安装脚本归属问题长期悬而未决，影响新人 Onboarding |
| [#3283](https://github.com/sipeed/picoclaw/pull/3283) | PR (功能) | 2026-07-22 | ~8 天 | 🟢 较低 — 已被标记 stale，建议唤醒或关闭 |
| [#3301](https://github.com/sipeed/picoclaw/issues/3301) | Issue (Bug) | 2026-07-29 | 1 天 | 🔴 高 — 新开即核心缺陷，需尽快响应 |

**维护者建议**：
1. 优先复现并响应 **#3301**，该 Bug 直接影响多 Agent 用户的基础使用体验
2. 对 **#1951**（已搁置 4 个月）做出明确的接受/拒绝决策，避免长期占用审阅队列
3. 唤醒或关闭 **#3283**（已被系统标记 stale），避免后续因长期未维护产生合并冲突

---

## 📊 项目健康度总评

| 维度 | 评分 | 说明 |
|------|------|------|
| 代码推进 | ⭐⭐☆☆☆ | 0 合并，2 PR 等待中 |
| 社区响应 | ⭐⭐⭐☆☆ | 新 Issue 当日已收录，但无维护者互动 |
| 缺陷管理 | ⭐⭐⭐☆☆ | Bug 报告清晰可复现，尚未分配 |
| 版本节奏 | ⭐⭐☆☆☆ | 无新版本，停滞迹象 |
| 路线图清晰度 | ⭐⭐⭐☆☆ | 钉钉图片需求明确，但缺官方表态 |

**结论**：PicoClaw 今日进入"静默期"，无明显推进动作。建议维护者至少在 Bug 报告响应与积压 PR 处理上恢复节奏，以维持社区信心。

---
*报告基于 GitHub 公开数据生成，覆盖窗口：2026-07-29 ~ 2026-07-30*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报

**日期：2026-07-30**
**数据范围：过去 24 小时**

---

## 1. 今日速览

NanoClaw 今日整体处于**中等活跃、偏清理型**的节奏：Issue 侧仅新开 1 条 Telegram Bot API 10.1 兼容性 Bug，PR 侧则一次性关闭了 4 条（其中 2 条为长期滞留 PR），同时仍有 3 条实质性 PR 待合并。无新版本发布。社区讨论度不高，但维护者对历史积压 PR 进行了集中处理，项目整体处于**整理与封板阶段**，技术债清理节奏明显。

- 📊 Issue 活跃度：1 新开 / 0 关闭
- 🔀 PR 活跃度：3 待合并 / 4 关闭
- 🚀 Release：0

---

## 2. 版本发布

**无新版本发布。** 当前处于 PR 集中合并但尚未打版的窗口期，建议关注后续几个大型 PR（特别是 #3057 双引擎配额回退、#3150 镜像获取方式重构）落地后的首个版本。

---

## 3. 项目进展

今日关闭的 4 条 PR 涵盖了**代理执行、容器镜像、轮询循环、Slack 集成**四个不同子系统，呈现出「修复回归 + 架构优化 + 集成增强」的均衡结构：

| PR | 标题 | 领域 | 关闭理由推测 |
|---|---|---|---|
| [#3014](https://github.com/qwibitai/nanoclaw/pull/3014) | fix(agent-runner): bound hasIdenticalSend to the turn in flight | agent-runner | 已合并或作者撤回（创建 19 天后关闭） |
| [#3150](https://github.com/qwibitai/nanoclaw/pull/3150) | setup: fetch a hardened agent image instead of building it | 部署 / 容器 | 同日创建关闭，疑似调整方案 |
| [#2440](https://github.com/qwibitai/nanoclaw/pull/2440) | fix(poll-loop) + feat(agent): session routing fix and pre-compaction notification | 核心轮询 | 合并（2.5 个月长跑 PR 终于落地） |
| [#2904](https://github.com/qwibitai/nanoclaw/pull/2904) | fix(slack): reload thread history from platform on @mention | Slack 集成 | 合并（修复 `mention` 模式下线程历史丢失） |

**关键推进点：**
- **#2440** 的 session routing 修复解决了容器重启后批量消息首条非用户消息时的回复通道错乱问题，是核心稳定性的重要补丁。
- **#2904** 修复了 Slack 在 `engage_mode: 'mention'` 模式下深度线程历史不可见的体验性 Bug。
- **#3150** 虽然当日关闭，但实质上为部署引入了「拉取预加固镜像」的可选项，并未删除本地构建路径，说明团队在**安全与可访问性之间做权衡**。

整体看，项目在 7 月底同时推进了**多个子系统的稳定性修复**，是较健康的收尾节奏。

---

## 4. 社区热点

今日讨论量整体偏低（所有 Issue/PR 的评论数均为 0 或接近 0），但仍有几条值得关注的「重量级」PR 引发了潜在关注：

- 🔥 **[#3057 Dual-engine quota fallback](https://github.com/qwibitai/nanoclaw/pull/3057)** — 作者声明自 2026-07-06 起在 WhatsApp 生产环境大规模验证，提出 Claude→Codex 配额自动回退 + 主动配额预警。属于**大规模生产验证型**功能 PR，社区反响值得观察。
- 🔥 **[#3151 Telegram rich_message 静默丢消息](https://github.com/qwibitai/nanoclaw/issues/3151)** — 虽是 0 评论的新 Issue，但场景典型（粘贴网页富文本触发），潜在受影响用户范围广。

**社区诉求分析：**
- 跨平台（Telegram、Slack、WhatsApp）**消息上下文完整性**正在成为反复出现的痛点（参见 #2904 的 Slack 历史丢失、#2440 的轮询错乱、#3151 的 Telegram 静默丢弃）—— 表明**多渠道消息保真**是社区短期最关心的方向。
- **配额与回退**（#3057）反映出用户在生产环境正面临**多模型供应商依赖单一**的风险，诉求是抗脆弱性。

---

## 5. Bug 与稳定性

按严重程度排序：

### 🔴 High — #3151 Telegram Bot API 10.1 `rich_message` 入站消息内容被静默丢弃

- **链接：** [#3151](https://github.com/qwibitai/nanoclaw/issues/3151)
- **作者：** jonnychesthair-crypto
- **触发条件：** Telegram Bot API **10.1**（2026-06-11）引入 `rich_message` 类型后，从网页粘贴富文本内容时整条消息内容丢失。
- **影响：** 文本、附件、错误日志全部为空，属于**完全静默失败**，对用户毫无反馈。
- **是否有 fix PR：** ❌ 暂无。这是一个由上游 API 升级触发的**兼容性回归**，建议尽快出补丁。
- **根因推测：** 入站解码层未识别新的 `rich_message` 类型字段，落到了未处理分支且未 raise。

### 🟡 Medium — #2904（已关闭）Slack `mention` 模式线程历史不可见

- **链接：** [#2904](https://github.com/qwibitai/nanoclaw/pull/2904)
- 在已有线程中再次 `@` 机器人时，中间的所有人类消息全部丢失。**已通过今日关闭的 PR 修复。**

### 🟡 Medium — #2440（已关闭）容器重启后批内首条非用户消息导致回复通道错乱

- **链接：** [#2440](https://github.com/qwibitai/nanoclaw/pull/2440)
- 影响了 pending 入站消息的路由正确性。**已通过今日关闭的 PR 修复。**

### 🟢 Low — #3014（已关闭）`hasIdenticalSend` 跨 turn 误判

- **链接：** [#3014](https://github.com/qwibitai/nanoclaw/pull/3014)
- 潜在的代理去重逻辑跨 turn 串扰，**已关闭**，建议确认合并到主干。

---

## 6. 功能请求与路线图信号

今日虽无显式的「Feature request」Issue，但通过 PR 标题和描述可以**反推出**当前的产品方向信号：

| 信号 | 来源 | 推断方向 |
|---|---|---|
| 跨模型配额回退（Claude↔Codex） | [#3057](https://github.com/qwibitai/nanoclaw/pull/3057) | **多引擎 / 多供应商可插拔**正在成为路线图主线 |
| 预加固镜像可拉取 | [#3150](https://github.com/qwibitai/nanoclaw/pull/3150)（已关） | **开箱即用安全合规** 是部署侧诉求 |
| Telegram Bot API 10.1 兼容 | [#3151](https://github.com/qwibitai/nanoclaw/issues/3151) | **富消息解析** 需要路由层扩展 |
| `--rw` 挂载参数 | [#3149](https://github.com/qwibitai/nanoclaw/pull/3149) | CLI 灵活度、可调试性 |
| 上下文压缩前主动通知 | [#2440](https://github.com/qwibitai/nanoclaw/pull/2440) | 用户对**长会话可控性**有需求 |

**最有可能纳入下一版本的候选：**
1. **#3057**（双引擎配额回退）—— 已生产验证，影响力大，技术上较独立。
2. **#3145**（迁移 021 backfill destinations）—— 数据库一致性修复，属于「该有就有」的 Hygiene PR。
3. **#3149**（CLI `--rw` 标志）—— 体量小、风险低，可随手合并。

---

## 7. 用户反馈摘要

由于所有今日 Issue / PR **评论数均为 0**，缺乏显式的用户文字反馈。从内容侧可提炼：

- 🟢 **满意面**：作者在 #3057 明确表达对当前 WhatsApp 部署的**生产稳定性有信心**，并愿意将配额回退方案回馈上游。
- 🟢 **满意面**：#3150 显示维护者愿意与外部方（Echo.ai）合作构建硬化镜像，体现**生态合作意愿**。
- 🔴 **不满意面**：
  - **#3151** —— 用户遭遇完全静默丢消息，没有任何 warn / log，对终端用户极度不友好，暴露出新协议类型接入时的**失败语义缺失**。
  - **#2904**（Slack）—— 用户在长线程中 `@bot` 却只能让 bot 看见当时那条消息，体验上等同「失忆」，长期影响 Slack 用户使用 `mention` 模式的意愿。

---

## 8. 待处理积压

提醒维护者关注以下**长期未关闭或影响力较大**的条目：

| 编号 | 类型 | 创建日期 | 已等待 | 建议优先级 |
|---|---|---|---|---|
| [#3057](https://github.com/qwibitai/nanoclaw/pull/3057) | Feature PR — 双引擎配额回退 | 2026-07-15 | **15 天** | 🔴 高（生产验证完毕，影响面大） |
| [#3145](https://github.com/qwibitai/nanoclaw/pull/3145) | Fix PR — migration 021 backfill | 2026-07-28 | 2 天 | 🟡 中 |
| [#3149](https://github.com/qwibitai/nanoclaw/pull/3149) | Fix PR — CLI `--rw` 标志 | 2026-07-29 | 1 天 | 🟢 低 |
| [#3151](https://github.com/qwibitai/nanoclaw/issues/3151) | Bug — Telegram rich_message | 2026-07-29 | 1 天 | 🔴 高（静默失败，需快速响应） |

**维护者建议：**
1. 🔴 立即响应 **#3151**：先确认影响范围，临时打印 warn 日志，再出 fix；这一类「静默吃掉内容」对产品信任伤害最大。
2. 🟡 在 48 小时内对 **#3057** 进行 review 安排，因其涉及多供应商切换，可能影响后续版本规划。
3. 🟢 **#3145 / #3149** 可成对随下一个常规 patch 一并合并。

---

### 健康度总结

| 维度 | 评分 | 说明 |
|---|---|---|
| 活跃度 | ⭐⭐⭐ | 7 条 PR 流动，但评论稀疏 |
| 稳定性 | ⭐⭐ | 出现 1 条静默丢消息的高危 Bug |
| 路线图清晰度 | ⭐⭐⭐⭐ | 多引擎、多渠道、可插拔方向明确 |
| 维护响应 | ⭐⭐⭐⭐ | 当日清掉 2 条历史 PR，响应积极 |
| 社区参与 | ⭐⭐ | 评论数普遍为 0，缺乏外部讨论参与 |

**一句话结论：** 项目处于**多线并行修复 + 重要功能待合并**的关键期，建议优先解决 Telegram 静默丢消息 Bug，并对 #3057 等候已久的生产验证 PR 给出明确 review 时间表。

---

*报告生成时间：2026-07-30 | 数据源：GitHub REST API (Issues & Pull Requests)*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目日报 · 2026-07-30

## 1. 今日速览

NullClaw 在过去 24 小时保持中等活跃度：**1 个 Issue 被更新**、**4 个 PR 流转**（2 关闭、2 仍待合并），**无新版本发布**。社区关注点集中在两个方向：一是 **调度器（scheduler）鉴权失效** 这一长期未解的 Bug，二是围绕 **memory 模块可配置化** 的反复讨论。值得注意的是，PR #961 被关闭后，#979 几乎以相同摘要重新提交，提示维护者可能对前一轮实现不满意或分支策略发生了变化。整体来看，项目处于"功能迭代 + 修复积压 Bug"的并行阶段，节奏健康但仍有 75 天前开立的 Issue 处于未解决状态。

---

## 2. 版本发布

**今日无新版本发布**，跳过此章节。

---

## 3. 项目进展

### 已关闭 PR（2 条）

| PR | 标题 | 作者 | 状态分析 |
|---|---|---|---|
| [#981](https://github.com/nullclaw/nullclaw/pull/981) | feat(provider): add grok-cli provider for xAI Grok CLI | valonmulolli | **已关闭**（非合并）——新增本地 `grok` CLI 代理 Provider，模仿 `codex-cli` 的 spawn-per-request 模式。关闭原因未在摘要中体现，可能是重复提交、维护者拒绝该 Provider 形态或希望走不同设计路径。 |
| [#961](https://github.com/nullclaw/nullclaw/pull/961) | feat(memory): add configurable auto-recall, recall_limit, max_context_bytes | valonmulolli | **已关闭**（非合并）——与 #979 几乎同质化的旧提交。被 #979 取代，提示维护者更倾向接纳新版本。 |

### 仍待合并 PR（2 条）

| PR | 标题 | 作者 | 关键意义 |
|---|---|---|---|
| [#980](https://github.com/nullclaw/nullclaw/pull/980) | **fix(scheduler): persist paired token to disk during /pair** | valonmulolli | **修复 #839**。`/pair` 端点生成的 token 仅驻内存、未落盘，而 cron/schedule 工具依赖 `{config_dir}/paired_token` 进行网关鉴权，导致整个调度链路在重启后或跨进程访问时失效。**这是连接 Issue #915 的关键修复，建议优先合并。** |
| [#979](https://github.com/nullclaw/nullclaw/pull/979) | **feat(memory): add configurable auto-recall, recall_limit, max_context_bytes** | valonmulolli | 在 `memory` 下引入三项 JSON 配置：`auto_recall`（bool，默认 true）、`recall_limit`（u32，默认 5）、`max_context_bytes`。关闭自动记忆召回可避免每次请求触发 FTS5/LIKE 查询，对性能敏感与硬件受限场景有直接价值。 |

**整体推进度**：今日未推动任何代码进入主干分支，但 PR #980 直接关联未关闭的 Bug 链路，#979 是受社区反复诉求驱动的可配置化设计，二者均具备合并潜力。

---

## 4. 社区热点

| 排名 | 条目 | 互动数据 | 链接 |
|---|---|---|---|
| 🥇 | Issue #915 [bug] Problem with scheduler unauthorized | 3 评论 / 1 👍 | [链接](https://github.com/nullclaw/nullclaw/issues/915) |

**诉求分析**：用户在 2026-05-15 开立 #915，描述了其在 Ubuntu + Ollama（外部主机，qwen3.6:27b + RTX 3090）环境下，LLM 与工具调用均工作良好，但 **scheduler 在 Telegram 聊天与其他场景下均失效**。从 PR #980 的描述看，根因极有可能正是 `/pair` 过程中 token 未写入磁盘，导致网关 admin 路由鉴权失败。社区已为该 Issue 点赞，且有 3 条评论交互，反映出 **"自托管大模型用户对定时任务/调度能力的真实需求"**，并非边缘用例。

---

## 5. Bug 与稳定性

| 严重度 | 条目 | 描述 | 已有 Fix PR？ |
|---|---|---|---|
| 🔴 **高** | [Issue #915](https://github.com/nullclaw/nullclaw/issues/915) | 调度器鉴权失败，导致 cron/schedule 工具无法使用，Telegram 集成中也受影响。 | ⚠️ **间接修复候选**：PR #980 修复的是底层 paired token 落盘问题，但二者是否完全等价需要维护者确认 |
| 🟡 **中** | [Issue #839](https://github.com/nullclaw/nullclaw/issues/839)（被 #980 引用） | `/pair` 端点不持久化 token，这是 #915 的潜在根因。 | ✅ PR [#980](https://github.com/nullclaw/nullclaw/pull/980) 待合并 |

**稳定性观察**：当前未报告崩溃或回归问题，最严重的稳定性隐患集中在 **鉴权/凭据持久化** 这一类对部署可靠性影响显著但相对隐蔽的路径上。

---

## 6. 功能请求与路线图信号

| 需求 | 来源 | 进入下一版本的可能性 |
|---|---|---|
| **Grok CLI Provider** | [PR #981](https://github.com/nullclaw/nullclaw/pull/981)（已关闭） | ❌ **较低**——首次提交即被关闭。维护者可能希望走另一形态（如纯 HTTP API 或不同的 Provider 抽象），但作者议题仍持续。 |
| **Memory 系统可配置化**（auto_recall / recall_limit / max_context_bytes） | [PR #979](https://github.com/nullclaw/nullclaw/pull/979)（取代 #961） | 🟢 **较高**——同一议题已迭代两次，且均来自同一活跃贡献者 valonmulolli，表明需求方向明确、实现方案趋于稳定。 |
| **本地 LLM + 调度任务一体化** | [Issue #915](https://github.com/nullclaw/nullclaw/issues/915) | 🟢 **较高**——Ollama + 自托管硬件 + Telegram 的组合是典型家庭/小型团队部署范式，调度能力是闭环关键。 |

**路线图信号**：memory 模块正从"默认开即用"向"细粒度可调"演进，配套的鉴权/持久化基础设施工夫也在补齐。Grok CLI 此路径短期内可能受阻。

---

## 7. 用户反馈摘要

**真实部署场景（来自 #915）**：
- **硬件**：Ubuntu + 外部 Ollama 主机 + RTX 3090，跑 qwen3.6:27b
- **满意点**：LLM 推理、工具调用大多工作正常，本地化部署初见成效
- **痛点**：scheduler 不可用——无论在 Telegram 还是其他入口都失败
- **隐含期待**：用户期望"本地大模型 + 网关 + 自动化任务"形成完整闭环，目前在调度环节断裂

**贡献者反馈（来自 PR 系列）**：
- valonmulolli 在 24 小时内连发 3 个 PR（#979、#980、#981），并自行管理同一议题的迭代（#961 → #979），体现出**对 memory / scheduler / provider 三大模块的深度跟踪**，是项目当前的活跃核心贡献者。

---

## 8. 待处理积压

| 条目 | 开立日期 | 距今 | 提醒 |
|---|---|---|---|
| [Issue #915](https://github.com/nullclaw/nullclaw/issues/915) | 2026-05-15 | **约 75 天** | 🔔 用户已多次反馈且持续互动，需维护者正式回应。PR #980 提供了一线解决希望，建议将其与 #915 关联并在合并后闭环。 |
| [Issue #839](https://github.com/nullclaw/nullclaw/issues/839) | 更早 | 长期 | 🔔 底层 paired token 持久化问题，已被 #980 修复，但仍需在合并后回写关闭说明。 |
| [PR #981](https://github.com/nullclaw/nullclaw/pull/981) | 2026-07-29 | 1 天 | 🔔 关闭原因未在摘要中体现，贡献者 valonmulolli 可能需要反馈以决定是否重提。 |

**维护者行动建议**：
1. **优先评审 PR #980**——它直接关联长期未解的 Issue #915，合并即一键闭环。
2. **评审 PR #979**——memory 可配置化议题已迭代两次，方向成熟。
3. **对 #981 给出明确关闭理由**——避免活跃贡献者陷入"提交-关闭"的循环。
4. **在 #915 中关联 #980**——明确根因链路，提升社区信任度。

---

*报告生成时间：2026-07-30 ｜ 数据来源：GitHub REST API（issues, pulls, releases）*
*项目地址：https://github.com/nullclaw/nullclaw*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报
**日期：2026-07-30**

---

## 1. 今日速览

IronClaw 今日呈现**高强度迭代节奏**：过去 24 小时共更新 50 条 Issue（活跃/新开 20 条，已关闭 30 条）与 50 条 PR（38 条待合并，12 条已合并/关闭），整体活跃度处于历史高位。**Reborn 产品面迁移**仍是核心主线，多个 Epic 级 tracker 被陆续关闭（#3031、#3044、#3045、#3032、#3576、#3169、#3238、#3572、#3607 等），表明核心架构层（M2-M5）已阶段性收敛；同时 **WebUI v2**（@ironclaw/ui 设计系统重构、SSE 流式恢复、命令面板 PR-2）和 **attested-signing 系列**（#6809/#6811/#6813/#6818/#6822 等 Ledger 签名前 8 段）在并行推进。值得关注的是，今日新开多条**生产稳定性 Issue**（turn-state 永久降级、Gemini 工具调用 400、WebUI 命令面板激活守卫、自动化触发执行链路缺陷），显示项目在向生产化迈进过程中暴露了真实运行期的脆弱点。

---

## 2. 版本发布

**今日无新版本发布。**

最近一次版本节奏由 PR #5598（chore: release，2026-07-03 至今仍 OPEN）推进，涉及：
- `ironclaw_common`: 0.4.2 → 0.5.0（**⚠ API breaking**）
- `ironclaw_safety`: 0.2.2 → 0.2.3
- `ironclaw_skills`: 0.3.0 → 0.4.0（**⚠ API breaking**）

⚠️ 该 release PR 已挂起 27 天，建议维护者评估是否合并，或拆分为兼容性更好的子版本。

---

## 3. 项目进展

### 今日合并/关闭的关键 PR 与里程碑

| 类别 | PR/Issue | 说明 |
|---|---|---|
| **里程碑关闭** | [#3031](https://github.com/nearai/ironclaw/issues/3031) | Reborn 产品面迁移 Epic 已关闭 |
| **里程碑关闭** | [#3032](https://github.com/nearai/ironclaw/issues/3032) | Reborn cutover blocker: 无暴露保障层落地 |
| **里程碑关闭** | [#3607](https://github.com/nearai/ironclaw/issues/3607) | Reborn WebUI Beta owner-tracker 完成 |
| **架构重构** | [#6691](https://github.com/nearai/ironclaw/pull/6691) | 重构 composition assembly —— 减少 **9,421 行** 单体代码，拆分 focused builders |
| **运行时配置** | [#3045](https://github.com/nearai/ironclaw/issues/3045) | Reborn runtime presets & effective policy 上线 |
| **本地开发体验** | [#3044](https://github.com/nearai/ironclaw/issues/3044) | 本地开发者 profile 一键启用 |
| **安全审计层** | [#3924](https://github.com/nearai/ironclaw/issues/3924) | NoExposureGuard 组合性、可审计性、覆盖边界 follow-up 关闭 |
| **认证机制** | [#3891](https://github.com/nearai/ironclaw/issues/3891) | 在 AlwaysAllow 之前完成 durable approval-policy port |
| **通道迁移** | [#3581](https://github.com/nearai/ironclaw/issues/3581) | Telegram v1 WASM 通道成功迁移到 Reborn ProductAdapter |
| **事件流** | [#3809](https://github.com/nearai/ironclaw/issues/3809) | EventStreamManager timeline/replay 路径完成 |
| **取消语义** | [#3238](https://github.com/nearai/ironclaw/issues/3238) | Reborn 端到端取消语义定义落地 |
| **进程内核** | [#6666](https://github.com/nearai/ironclaw/issues/6666) | process journal kernel 迁入 `ironclaw_processes` |

### 整体推进度评估

项目今日在三个方向同时取得实质进展：
1. **架构层**：9,421 行 composition 代码被拆分，证明 Reborn 的组装层已具备重构成熟度。
2. **安全层**：dispatch authority（#3608）、approval lease 衰减（#3609）、NoExposureGuard（#3032、#3924）形成完整防护栈。
3. **产品层**：WebUI Beta 的 owner tracker（#3607）和 WASM ProductAdapter 通道迁移（#3581、#3577）已完成 WebUI-first 路径。

---

## 4. 社区热点

### 评论最多的 Issue

| 排名 | 编号 | 标题 | 评论数 |
|---|---|---|---|
| 🥇 | [#3031](https://github.com/nearai/ironclaw/issues/3031) | [EPIC] Reborn product surface migration（已 CLOSED） | 7 |
| 🥈 | [#6524](https://github.com/nearai/ironclaw/issues/6524) | Epic: Hermetic capability and journey testing platform | 4 |
| 🥉 | [#6786](https://github.com/nearai/ironclaw/issues/6786) | [QA] Gemini provider_id 工具调用 400 错误 | 3 |
| 4 | [#3045](https://github.com/nearai/ironclaw/issues/3045) | Reborn runtime presets | 3 |
| 4 | [#3044](https://github.com/nearai/ironclaw/issues/3044) | Reborn local dev profiles | 3 |

### 讨论焦点分析

1. **#3031（Reborn Epic）**：作为产品面迁移的总 tracker，集中了所有 blocker（#3020、#3022、#3032、#3039、#3067），其今日关闭标志着 Reborn 已具备进入 cutover-readiness 评估的条件。
2. **#6524（Hermetic 测试平台 Epic）**：4 条评论表明社区对**确定性能力/路径覆盖**有强烈诉求——当前录制 fixture + Emulate 机制无法回答"每个能力是否有可执行、有意义的覆盖"这一基础问题。
3. **#6786（Gemini 工具调用）**：3 条评论，是 native Gemini provider 的真实 QA 报告，暴露出 built-in tool schema 序列化时的"type" 字段丢失 bug，影响整个 LLM provider 矩阵。

---

## 5. Bug 与稳定性

按严重程度排序：

### 🔴 P0/P1 — 影响生产可用性

| 编号 | 标题 | 状态 | Fix PR |
|---|---|---|---|
| [#6786](https://github.com/nearai/ironclaw/issues/6786) | Gemini provider_id="gemini" 工具调用 400（type 字段为空） | OPEN | 无 |
| [#6880](https://github.com/nearai/ironclaw/issues/6880) | Gemini OAuth 工具调用 400（绕过 shape_tool_schema） | OPEN | 无 |
| [#6815](https://github.com/nearai/ironclaw/issues/6815) | turn-state store 一次 write-behind flush 失败即永久降级，需手动重启 | CLOSED（已修复） | — |
| [#6805](https://github.com/nearai/ironclaw/issues/6805) | Railway 实例约每 30 分钟返回 service_unavailable | CLOSED | — |
| [#6348](https://github.com/nearai/ironclaw/issues/6348) | Gmail 扩展重装后未走 OAuth 即自动授权（**安全风险**） | CLOSED | — |
| [#6790](https://github.com/nearai/ironclaw/issues/6790) | Codex 设备授权未完成时重启会阻塞 WebUI 并隐藏恢复码 | OPEN | 无 |
| [#6720](https://github.com/nearai/ironclaw/issues/6720) | 任务无限运行 + 停止按钮失败 | CLOSED | — |
| [#6806](https://github.com/nearai/ironclaw/issues/6806) | Automations 输出不在 web chat 中显示 | CLOSED | — |

### 🟡 P2 — 体验性问题

- [#6887](https://github.com/nearai/ironclaw/issues/6887)（OPEN）：`ironclaw_reborn_composition` 测试套件并行下间歇性失败（0/3/5/13 次/4 次运行），纯超时而非逻辑缺陷。
- [#5712](https://github.com/nearai/ironclaw/issues/5712)（CLOSED）：`tool_search` 在 narrowed CapabilityAllowSet 下泄露完整 capability catalog —— **安全/数据泄漏问题**。

### 🔴 安全警告

[#6348](https://github.com/nearai/ironclaw/issues/6348)（Gmail OAuth 绕过）和 [#5712](https://github.com/nearai/ironclaw/issues/5712)（tool catalog 泄露）虽已关闭，但其根因属于**身份验证与会话清理**层面的设计问题，建议在后续安全审计中专项排查。

---

## 6. 功能请求与路线图信号

### 已形成明确 Epic/设计文档的强信号

| 编号 | 诉求 | 状态 |
|---|---|---|
| [#6524](https://github.com/nearai/ironclaw/issues/6524) | Hermetic capability & journey testing platform | OPEN，4 条评论，已上升为 Epic |
| [#3577](https://github.com/nearai/ironclaw/issues/3577) | v1 遗留通道 → Reborn 端口的统一追踪 | OPEN |
| [#6877](https://github.com/nearai/ironclaw/issues/6877) | Channel 命令门控：operator-fallback 身份通道需要激活守卫 + door-asymmetry 决策 | OPEN |

### 大型功能集群（待合并）

- **Attested-Signing 系列**（zmanian 主攻）：8 组 stack
  - [#6769](https://github.com/nearai/ironclaw/pull/6769) → [#6809](https://github.com/nearai/ironclaw/pull/6809)（PostgreSQL/libSQL attested stores）→ [#6811](https://github.com/nearai/ironclaw/pull/6811)（provider registration）→ [#6813](https://github.com/nearai/ironclaw/pull/6813)（multi-tenant）→ [#6818](https://github.com/nearai/ironclaw/pull/6818)（Ledger clear-signing product）→ [#6822](https://github.com/nearai/ironclaw/pull/6822)（attested gate resolve）
  - **路线图含义**：IronClaw 正建设完整的"链上签名可信化"产品层，目标用户明显是 Web3 场景。
- **WebUI 设计系统**：[#6836](https://github.com/nearai/ironclaw/pull/6836)（@ironclaw/ui workspace 包）取代了已废弃的 #5563、#6830，标志着设计系统走向正式化。
- **Skill 系统修复**：[#6745](https://github.com/nearai/ironclaw/pull/6745)（XL size, low risk）—— 让已安装/Agent-authored 的 skills 真正可用，由 SkillsBench 基准测试驱动。

### 与下一版本强相关的可能合并项

| PR | 大小 | 风险 | 预期价值 |
|---|---|---|---|
| [#6745](https://github.com/nearai/ironclaw/pull/6745) | XL | low | Skill 系统实测驱动修复 |
| [#6876](https://github.com/nearai/ironclaw/pull/6876) | XL | low | WebUI 平滑流式 + 模型阶段保留 |
| [#6891](https://github.com/nearai/ironclaw/pull/6891) | XL | low | WebUI 命令面板 PR-2（命令列车设计） |
| [#6889](https://github.com/nearai/ironclaw/pull/6889) | XL | medium | CI：WS11 覆盖率 + 关键 mutation gates |
| [#6888](https://github.com/nearai/ironclaw/pull/6888) | XS | low | Provider operation contracts（52 个 reads） |

---

## 7. 用户反馈摘要

从 Issue 评论与描述中提炼的真实痛点：

1. **生产部署脆弱性**（来自 [#6805](https://github.com/nearai/ironclaw/issues/6805)、[#6815](https://github.com/nearai/ironclaw/issues/6815)）
   > "The Railway instance intermittently becomes unavailable, returning 'service_unavailable' for all requests... every 30 minutes"

   用户在云端部署时遭遇**频繁 503 + 一次性 flush 失败即永久降级**，反映出 write-behind 路径缺乏重试与恢复机制。

2. **WebUI 体验断层**（[#6806](https://github.com/nearai/ironclaw/issues/6806)、[#6790](https://github.com/nearai/ironclaw/issues/6790)、[#6720](https://github.com/nearai/ironclaw/issues/6720)）
   > "Couldn't stop this run. It may already be finished..."

   用户对**任务控制权**（开始/停止/取消）、**输出可见性**（automations 不出现在 web chat）、**授权恢复能力**（device flow 阻塞）三方面均有明确失望。

3. **OAuth 信任危机**（[#6348](https://github.com/nearai/ironclaw/issues/6348)）
   > "Reinstalling it automatically grants access to the user's Gmail account without displaying any OAuth or authorization prompt"

   这是**严重的安全信任反馈**，已修复但需追溯其他扩展是否有同类行为。

4. **能力 catalog 透明度**（[#5712](https://github.com/nearai/ironclaw/issues/5712)）
   > "tool_search discloses full unnarrowed capability catalog under narrowed CapabilityAllowSet"

   用户在 narrow 权限下期望看到受限列表，但实际拿到的是完整目录 —— **违反最小权限原则**。

5. **模型兼容性焦虑**（[#6879](https://github.com/nearai/ironclaw/issues/6879)）
   > "Automation runs are hit-or-miss... a trigger fire is executed as a plain interactive chat turn"

   用户在 DeepSeek V4 Flash 等小模型上跑自动化，结果**不稳定**且根因是结构性的（触发器执行链路被当作普通 chat turn），这意味着用户对"自动化作为一等公民"的期待未被满足。

---

## 8. 待处理积压

### 🔴 长期未响应的关键项

| 编号 | 标题 | 等待天数 | 风险 |
|---|---|---|---|
| [#5598](https://github.com/nearai/ironclaw/pull/5598) | chore: release（含 2 个 breaking change） | **27 天** | 阻塞下游 crate 用户 |
| [#3577](https://github.com/nearai/ironclaw/issues/3577) | Track v1 ports for legacy channels | **78 天** | 遗留通道迁移路径 |
| [#6348](https://github.com/nearai/ironclaw/issues/6348) | Gmail OAuth bypass（已 CLOSED 但根因审计缺失） | — | 安全 |
| [#6428](https://github.com/nearai/ironclaw/pull/6428) | bump tokio-ecosystem group | 9 天 | 依赖更新 |
| [#6361](https://github.com/nearai/ironclaw/pull/6361) | bump serialization group | 10 天 | 依赖更新 |

### 📋 维护者建议关注

1. **PR #5598 release 挂起**：含 `ironclaw_common`、`ironclaw_skills` 两个 breaking 版本升级。建议要么合并，要么拆分为兼容性子版本并附迁移指南。
2. **Gemini Provider 双 Issue**（[#6786](https://github.com/nearai/ironclaw/issues/6786)、[#6880](https://github.com/nearai/ironclaw/issues/6880)）：两个不同 Gemini 入口（native + OAuth）出现相同症状（工具 schema `type` 字段为空），根因可能在 `shape_tool_schema` 路径。建议优先处理。
3. **依赖更新积压**：4 个 dependabot PR（#6874、#6428、#6361 等）等待合并，累计 40+ 包更新未落地，可能引入 CVE 风险。
4. **测试平台 Epic (#6524)** 已有 4 条评论且上升为 Epic，但尚无对应 PR —— 这是从 Reborn 迈向生产化的关键基础设施，建议分配 owner。

---

## 附录：项目健康度速览

| 指标 | 数值 | 评估 |
|---|---|---|
| 24h Issue 更新 | 50（活跃 20 / 关闭 30） | 🟢 高吞吐 |
| 24h PR 更新 | 50（待合并 38 / 已合 12） | 🟡 待合并数偏多 |
| 已挂起 PR（>14 天） | ≥2（#5598、#6428、#6361） | 🟡 需关注 |
| P0/P1 未修复 Bug | 5 条（Gemini×2、#6790、#5712、#6887） | 🟡 待处理 |
| 大型 XL PR 集中度 | Reborn WebUI + Signing 系列 | 🟡 合并风险高 |
| 路线图清晰度 | Reborn Epic + WebUI Beta + Signing 8 段 | 🟢 方向明确 |
| 文档/测试 PR 占比 | 多数为 scope: docs | 🟢 治理良好 |

**整体判断**：IronClaw

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目日报
**日期：2026-07-30**

---

## 1. 今日速览

LobsterAI 今日整体活跃度**较高**，过去 24 小时内共有 15 个 PR 更新（13 个已合并/关闭，2 个仍处于 OPEN 状态），但 Issues 端完全静默（0 新开/0 关闭）。今日最重要的动态是 **Release/2026.7.24 版本发布 PR (#2407) 已合入主线**，标志着一次正式发版完成。同时在 cowork 协作模块集中合并了 6 项修复/功能，并在 openclaw 方向做了一次重要的功能回滚（#2403），反映出项目在快速迭代中对线上问题响应迅速。整体项目健康度良好，PR 流转顺畅，但 Issues 通道需要关注以确保用户反馈通路畅通。

---

## 2. 版本发布

🔔 **Release/2026.7.24 已合入主线（PR [#2407](https://github.com/netease-youdao/LobsterAI/pull/2407)）**

虽然数据概览显示"新版本发布：0 个"，但通过 PR 标签 `[Release/2026.7.24]` 及涉及 `area: artifacts` 标签可以确认，今天主线已合入 2026.7.24 发布分支。**注：当前数据中暂无对应的 GitHub Release 标签，建议关注仓库 Releases 页面以获取正式版本号与构建产物**。

本次发版涉及多个核心模块的更新（renderer、main、openclaw、skills、cowork、docs、artifacts、build），覆盖 Windows 平台。建议用户在升级后重点关注：
- cowork 侧栏聊天与导出模态框交互
- IM 消息闪烁与滚动抖动问题是否已解决
- 自动更新检查频率（已从 12 小时调整为 2 小时，见 #2347）

---

## 3. 项目进展

今日合并/关闭的 13 个 PR 中，按模块和重要性梳理如下：

### 🌟 重大功能与发布
- **[#2407](https://github.com/netease-youdao/LobsterAI/pull/2407)** Release/2026.7.24 — 2026.7.24 版本合入主线
- **[#2404](https://github.com/netease-youdao/LobsterAI/pull/2404)** Refactor/kimi k3 auto only compat — Kimi K3 模型 auto 模式兼容性重构（openclaw 方向）
- **[#2403](https://github.com/netease-youdao/LobsterAI/pull/2403)** revert(openclaw): remove run-safety-contract gate — **回滚 PR #2400 引入的 Run Safety 客户端设计**，原因是在 review 中发现 release-blocking 问题（receipt identity keying、false-success followups、compaction runId 处理、字节统计不一致）

### ✨ cowork 模块功能增强
- **[#2405](https://github.com/netease-youdao/LobsterAI/pull/2405)** feat(cowork): add selected text tags to side chat — 侧栏聊天支持选中文本作为可移除上下文标签，支持直接发送与追问编辑，含状态保护与测试
- **[#2406](https://github.com/netease-youdao/LobsterAI/pull/2406)** fix(cowork): improve side chat input handling — 累积选区文本、移除产品级问题长度限制，保留上下文与传输安全检查

### 🔧 稳定性与 Bug 修复（cowork）
- **[#2376](https://github.com/netease-youdao/LobsterAI/pull/2376)** fix(cowork): render export modal above sidebar — 通过 body portal 挂载导出模态框，修复堆叠冲突
- **[#2364](https://github.com/netease-youdao/LobsterAI/pull/2364)** fix(cowork): prevent scroll jumps on session refresh — 按 session ID 作用域刷新事件，保留已加载消息历史
- **[#2363](https://github.com/netease-youdao/LobsterAI/pull/2363)** fix(cowork): prevent periodic IM message flicker — IM 消息对账时比对匹配窗口，保留更早消息
- **[#2346](https://github.com/netease-youdao/LobsterAI/pull/2346)** fix(cowork): open email diagnostics in a new chat — 防止旧历史/IM 会话覆盖新聊天

### 🔐 鉴权与 UI 修复
- **[#2360](https://github.com/netease-youdao/LobsterAI/pull/2360)** fix(auth): preserve local callback across login retries — 复用回调服务器处理重复/并发登录，增加生命周期诊断
- **[#2355](https://github.com/netease-youdao/LobsterAI/pull/2355)** fix(window): align Windows caption button hover colors — Windows 标题栏按钮悬停色与侧栏控件对齐
- **[#2347](https://github.com/netease-youdao/LobsterAI/pull/2347)** chore(updater): reduce automatic update check interval — 自动更新检查间隔从 12h → 2h
- **[#1322](https://github.com/netease-youdao/LobsterAI/pull/1322)** fix(cowork): true LRU eviction for LLM memory judge cache — 修复 LLM 边界判断缓存未实现真正 LRU 的问题（stale 标签，4 月创建，今日终于合并）

**整体评价**：项目今日在 **cowork 协作**、**IM 消息稳定性**、**侧栏聊天 UX** 三个方向有明显推进，#1322 这种 4 月遗留的 stale PR 今日被合入，体现了积压清理工作的进行。

---

## 4. 社区热点

⚠️ **今日 Issues 端完全无新动态（0 新开、0 关闭、0 活跃）**，因此"社区热点"主要由 PR 区域体现：

- **热点 PR [#2405](https://github.com/netease-youdao/LobsterAI/pull/2405)** — 侧栏选中文本标签功能，命中"AI 助手与所选上下文协作"这一行业通用诉求
- **热点 PR [#2403](https://github.com/netease-youdao/LobsterAI/pull/2403)** — openclaw 方向的功能回滚，反映出该模块近期有较活跃的设计讨论

由于无 Issues 数据，**建议关注：用户是否在通过其他渠道（飞书、Discord、官方论坛）反馈问题**，而 GitHub Issues 通道的活跃度需要通过运营手段激活。

---

## 5. Bug 与稳定性

按严重程度排列：

| 严重等级 | Bug 描述 | 修复 PR | 状态 |
|---------|---------|--------|------|
| 🔴 高 | openclaw Run Safety 设计存在 release-blocking 缺陷（receipt identity、false-success、compaction、字节统计） | [#2403](https://github.com/netease-youdao/LobsterAI/pull/2403) | ✅ 已回滚 |
| 🟡 中 | IM 消息周期性闪烁、session 刷新时滚动抖动、导出模态框层级冲突 | [#2363](https://github.com/netease-youdao/LobsterAI/pull/2363) / [#2364](https://github.com/netease-youdao/LobsterAI/pull/2364) / [#2376](https://github.com/netease-youdao/LobsterAI/pull/2376) | ✅ 已修复 |
| 🟡 中 | 登录重试时本地回调丢失（可能导致反复打开回调端口） | [#2360](https://github.com/netease-youdao/LobsterAI/pull/2360) | ✅ 已修复 |
| 🟢 低 | Windows 标题栏按钮悬停色与侧栏不一致 | [#2355](https://github.com/netease-youdao/LobsterAI/pull/2355) | ✅ 已修复 |
| 🟢 低 | 邮件诊断在新聊天打开时被旧会话覆盖 | [#2346](https://github.com/netease-youdao/LobsterAI/pull/2346) | ✅ 已修复 |
| 🟠 仍 OPEN | 定时任务首次执行结果不推送至 UI | [#1232](https://github.com/netease-youdao/LobsterAI/pull/1232) | ⏳ 待合并 |

整体稳定性表现良好：**今日 6 个 bug 中 5 个已修复，1 个关键功能已安全回滚**，1 个长期 bug 的 PR 仍待合并。

---

## 6. 功能请求与路线图信号

由于今日无新 Issue，本节以 PR 隐含的方向判断路线图信号：

- 🤖 **Kimi K3 auto 模式适配**（[#2404](https://github.com/netease-youdao/LobsterAI/pull/2404)）— 表明 openclaw 在持续扩展对国产模型的兼容性，Kimi K3 已成为重点支持对象
- 💬 **侧栏上下文协作**（[#2405](https://github.com/netease-youdao/LobsterAI/pull/2405)、[#2406](https://github.com/netease-youdao/LobsterAI/pull/2406)）— 选中即上下文、可移除标签，趋势向 Cursor/Codeium 风格的"inline 上下文"靠拢
- 🛡️ **Run Safety 安全护栏**（[#2403](https://github.com/netease-youdao/LobsterAI/pull/2403) 回滚）— openclaw 仍试图落地 token-burn / safety-contract 机制，但当前实现有缺陷，未来版本可能以新方案回归
- 🔄 **自动更新频率提升**（[#2347](https://github.com/netease-youdao/LobsterAI/pull/2347)，12h→2h）— 反映团队对快速迭代与用户保持同步的诉求

---

## 7. 用户反馈摘要

⚠️ **今日 Issues 区域无任何评论或反馈数据**，无法直接提取用户痛点。

从 PR 摘要中可间接推断出用户曾反馈的痛点（这些 PR 都是为解决实际问题而合入的）：

- **"侧栏聊天输入过长被截断"** → 推动 [#2406](https://github.com/netease-youdao/LobsterAI/pull/2406) 移除产品级长度限制
- **"会话刷新时聊天列表会跳"** → 推动 [#2364](https://github.com/netease-youdao/LobsterAI/pull/2364) 修复
- **"IM 消息反复闪烁"** → 推动 [#2363](https://github.com/netease-youdao/LobsterAI/pull/2363) 修复
- **"登录失败需重新打开回调"** → 推动 [#2360](https://github.com/netease-youdao/LobsterAI/pull/2360) 修复
- **"定时任务第一次跑没通知"** → 推动 [#1232](https://github.com/netease-youdao/LobsterAI/pull/1232) 提交（仍待合入）

**建议**：项目维护者应主动通过运营渠道（产品内反馈、用户群、调研）补充 GitHub Issues 通道的活跃度，便于社区贡献者参与与公开追踪。

---

## 8. 待处理积压

| PR | 标题 | 打开日期 | 等待时长 | 建议 |
|---|---|---|---|---|
| [#1232](https://github.com/netease-youdao/LobsterAI/pull/1232) | 修复定时任务首次执行结果不推送到 UI | 2026-04-01 | **约 120 天** | ⚠️ 已标 stale，bug 仍影响用户体验，建议尽快 review |
| [#1277](https://github.com/netease-youdao/LobsterAI/pull/1277) | chore(deps-dev): bump the electron group | 2026-04-02 | **约 119 天** | dependabot 升级，electron 40→43，应与 7.24 发版节奏同步 |
| [#1322](https://github.com/netease-youdao/LobsterAI/pull/1322) | fix(cowork): true LRU eviction | 2026-04-02 | 约 119 天 | ✅ 今日已合并 |

**提醒维护者**：
1. **#1232 等待 120 天仍未合并**，涉及定时任务首次执行的核心体验问题，强烈建议优先 review；
2. **#1277 依赖升级等待近 4 个月**，electron 跨多版本升级存在兼容性风险，需评估对 7.24 之后版本的影响；
3. 建议定期清理 stale 标签或自动 close 长期无更新 PR，保持 backlog 健康度。

---

## 总结

LobsterAI 在 2026-07-30 完成了 **2026.7.24 正式发版**，单日合入 13 个 PR，重点推进了 cowork 协作模块的 UX 与稳定性，并安全回滚了一项 openclaw 关键功能。**Issues 通道静默是需要关注的风险信号**——建议项目组在发版后主动引导用户回归 GitHub 反馈，以保持开源协作透明度与社区健康度。

> 📊 **项目健康度评分：7.5 / 10**
> - ✅ 迭代速度：快
> - ✅ 稳定性修复：及时
> - ⚠️ 用户参与：低（Issues 0 活跃）
> - ⚠️ 积压管理：存在 1 个 120 天未合 PR

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目日报

**日期：2026-07-30**
**项目：moltis-org/moltis**（AI 智能体与个人 AI 助手领域）

---

## 1. 今日速览

Moltis 项目今日呈现"PR 高频更新、Issue 静止"的典型功能开发期特征。过去 24 小时内共有 5 个 PR 发生更新，其中 2 个被关闭（关闭前未观察到任何评论或点赞反馈），3 个保持 Open 状态等待维护者审阅；与此同时 Issues 板块完全无新增、无活跃、无关闭。值得关注的信号是：全部 5 个 PR 均由同一贡献者 `penso` 提交，表明项目短期内存在较为集中的个人驱动式开发节奏，外部审阅/反馈机制尚未深度运转（所有 PR 的评论数与 👍 数均为 0）。

---

## 2. 版本发布

无新版本发布。

---

## 3. 项目进展

今日共有 2 个 PR 被关闭（由于数据未标明"已合并"还是"未合并关闭"，以下按等可能性分析）：

- **PR #1169 — feat(acp): expose Moltis as an ACP agent over stdio**
  [🔗 链接](https://github.com/moltis-org/moltis/pull/1169)
  若已合并：意味着 Moltis 现已支持通过 `moltis acp` 命令以 ACP（Agent Communication Protocol）协议在 stdio 上对外暴露，纳入会话隔离、提示/历史/输出/并发上限、最终文本协调等安全约束，扩展了 Moltis 作为可嵌入式 Agent 的能力边界。
  若未合并关闭：该提案将被搁置或转移。

- **PR #1173 — feat(pwa): make push notifications reliable and non-disruptive**
  [🔗 链接](https://github.com/moltis-org/moltis/pull/1173)
  若已合并：PWA 端推送通知能力得到显著增强，包括同会话消息的再次提醒、隐私安全的通用标题、剥离富文本格式、跨标签页/设备的全局未读计数器管理，提升日常使用的稳定性与隐私保护水平。
  若未合并关闭：存在回退风险。

> **健康度提示**：2 个 PR 的关闭结果均缺少公开评论记录，建议关注者在仓库 Discussion 或 commit 日志中确认其最终处置方式。

---

## 4. 社区热点

今日所有 PR 的评论数（undefined）和点赞数均为 0，Issues 板块零活跃，**社区互动处于静默状态**。这一现象可能原因包括：
- 项目仍处于内部开发节奏，外部贡献者/用户尚未大规模接入；
- 上述 PR 多为深度技术重构（Slack 协议、ACP 协议、可观测性基础设施），普通用户难以参与讨论；
- 评价窗口期（PR 创建 3–7 天）尚未结束。

**重点建议纳入关注的开放 PR**：
- 🔗 [PR #1166 — Slack 消息确认反应 / 阶段机 / 重连监督 / Block Kit](https://github.com/moltis-org/moltis/pull/1166)
- 🔗 [PR #1174 — 插桩与反馈收集基础设施（含 Langfuse v4 导出、OTLP 后端）](https://github.com/moltis-org/moltis/pull/1174)
- 🔗 [PR #1170 — /sh 与特权工具按 per-account operators 列表授权](https://github.com/moltis-org/moltis/pull/1170)

---

## 5. Bug 与稳定性

今日 Issues 板块无新 Bug 报告。但从功能安全角度，今日最具"修复/加固"性质的 PR 是：

- **PR #1170 — fix(channels): gate /sh and privileged tools behind a per-account operators list** [🔗 链接](https://github.com/moltis-org/moltis/pull/1170)
  **严重程度：高（安全加固）**
  问题描述：通过访问白名单的频道发送者此前可以触达特权命令与宿主工具，存在权限升级风险。
  修复思路：将"访问"与"权限"显式分离，引入 `per-account operators` 列表在命令、回调、队列重放、聊天执行、外部接口等多层统一强制隔离。
  状态：仍为 Open，**尚无 fix 已合并**，建议优先评审。

- **PR #1166 — feat(slack): Slack 端确认反应与重连监督** [🔗 链接](https://github.com/moltis-org/moltis/pull/1166)
  涉及对断连/重试/回调洪峰/投递失败等异常路径的处理，间接提升 Slack 集成稳定性。

---

## 6. 功能请求与路线图信号

尽管无新增 Issue 表达诉求，但以下 Open PR 揭示了项目下一阶段路线图走向：

| PR | 方向 | 路线图含义 |
|---|---|---|
| [#1166](https://github.com/moltis-org/moltis/pull/1166) | Slack 集成深化（反应协议、Block Kit、阶段机） | Slack 正在成为 Moltis 主交互渠道之一，UX 体验持续被投入 |
| [#1174](https://github.com/moltis-org/moltis/pull/1174) | 可观测性与反馈收集（Langfuse v4、OTLP、reaction 反馈） | 项目进入"产品化运营期"，需要外部追踪、Token 成本归因、用户反馈闭环 |
| [#1170](https://github.com/moltis-org/moltis/pull/1170) | 权限模型细化（operators 列表） | 安全治理逐步从单层 ACL 演进为多角色分层模型 |

若按概率推测，#1174（可观测性）很可能成为下一版本的核心卖点，因为它同时覆盖开发者体验、降本与企业合规需求。

---

## 7. 用户反馈摘要

由于今日无 Issues 评论可供挖掘，用户痛点暂无新增数据点。但从 PR 摘要中可反向归纳出被作者识别到的"隐式用户痛点"：

- **Slack 用户**：缺乏 typing indicator 等可见进度信号，希望通过反应表情获得可靠的进度反馈（PR #1166 摘要中明确写道 *"Slack bots cannot show a typing indicator, so reactions provide the receipt and progress signal"*）。
- **PWA 用户**：推送通知可靠性差，丢失旧消息计数，富文本格式泄漏隐私，跨标签页/设备的未读状态不一致（PR #1173 摘要原文）。
- **多账户管理员**：现有 per-channel allowlist 模型混淆了"允许访问"与"允许操作"，高权限命令被低权限通道误触发（PR #1170 摘要原文）。
- **运维与产品**：缺乏统一的完成事件记录、流式/非流式一致性、provider failover 归因、缓存感知的 token 用量统计（PR #1174 摘要原文）。

---

## 8. 待处理积压

**提醒维护者重点关注**：

- 🔗 [PR #1166](https://github.com/moltis-org/moltis/pull/1166) — Slack 反应/阶段机（创建 6 天，仍 0 评论）
- 🔗 [PR #1170](https://github.com/moltis-org/moltis/pull/1170) — 权限模型修复（创建 4 天，安全相关，建议优先）
- 🔗 [PR #1174](https://github.com/moltis-org/moltis/pull/1174) — 插桩与反馈基础设施（创建 3 天）

**积压风险评估**：
所有 3 个 Open PR 均已存在 3 天以上但未收到审阅评论，存在"个人提交者拥堵在评审队列"的风险。结合今日 2 个 PR 在缺乏公开讨论下被关闭，可能存在"内部提前达成共识再走流程"的治理模式。建议公开 PR 评审记录以提升外部贡献者信心。

---

**总体健康度**：🟡 中性偏积极。代码迭代活跃，但社区互动面窄，外部反馈循环尚未建立，需关注评审透明度与协作开放度。
**报告生成时间**：2026-07-30

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目日报 · 2026-07-30

> 数据来源：GitHub 仓库 agentscope-ai/QwenPaw（按用户指令以 CoPaw 代称）
> 统计窗口：过去 24 小时（2026-07-29 ~ 2026-07-30）

---

## 一、今日速览

CoPaw 今日社区活跃度处于**中高水位**——过去 24 小时共更新 **25 条 Issues**（其中 21 条新开/活跃、4 条已关闭）和 **46 条 PRs**（37 条待合并、9 条已合并/关闭），但**无新版本发布**。从结构上看，**Bug 修复类 PR 占主导**（多数针对 v2.0.1 已暴露问题），且大量修复 PR 显式引用了对应 Issue 编号（如 #6540↔#6407、#6539↔#6372、#6522↔#6374、#6561↔#6557、#6531↔#6529、#6535↔#6533、#6486↔#6476），表明项目处于**"快速响应 + 高频回归修复"**阶段。健康度评估：⭐⭐⭐☆☆（活跃度高，但 PR 积压 37 条需关注）。

---

## 二、版本发布

**今日无新版本发布。** 当前主线版本仍为 v2.0.1，是多数 Issue 报告的目标版本。

---

## 三、项目进展

### 已合并/关闭的 PR（可见部分）
- **#6479** (closed) — `fix(providers): sync MiniMax model baseline with current platform lineup` —— 同步 MiniMax 模型基线，修复因硬编码模型列表漂移导致的多模态探测与内置选择器不一致问题。链接：https://github.com/agentscope-ai/QwenPaw/pull/6479

> 备注：数据汇总显示共有 9 条 PR 合并/关闭，但前 20 热门 PR 中仅 #6479 明确显示 CLOSED；其余 8 条已合并 PR 未进入热门列表，无法逐条列出。

### 重要待合并 PR（具备显著影响）
| PR | 标题 | 关联 Issue |
|---|---|---|
| #6540 | fix(agents): add last-mile tool-message sanitizer | #6407 |
| #6539 | fix(unified_queue): prevent stale consumer from removing recreated queue state | #6372 |
| #6522 | fix: retain dirty flag on token usage flush failure | #6374 |
| #6523 | fix: preserve quoted verify commands in mission arg parsing | #6355 |
| #6561 | fix(mcp): ensure exposed tool names start with a letter | #6557 |
| #6531 | fix(acp): add models field to new_session response | #6529 |
| #6535 | fix(cloudpaw): accept mission verification kwargs | #6533 |
| #6486 | fix(matrix): probe vodozemac E2EE backend so encryption works on Python 3.12 | #6476 |
| #6554 | fix(providers): add MiniMax context windows to the static catalog | — |
| #6500 | fix(browser): make unauthenticated local CDP exposure opt-in（**安全**） | — |
| #6103 | ci(coverage): raise frontend vitest thresholds to current baseline | — |
| #6102 | test(isolation): boundary meta-test pinning the #5813 failure modes | — |

### 功能型 PR
- **#6383** `feat(sandbox): add unelevated sandbox for windows`
- **#6424** `feat(computer-use): native desktop GUI automation for Windows and macOS`（**Computer Use 桌面 GUI 自动化能力**）
- **#6556** `feat(creator): creation checkpoints, home redesign, media recovery, export/import, and bilingual guide`
- **#6398** `feat: add reranker support for ReMe memory search (backend)`
- **#6325** `feat(tools): show built-in tool docs and parameters in Console`
- **#6312** `feat(console): configurable theme/skin module (Task 1 draft)`

**整体判断**：项目进展集中在 **稳定性修复**（回归、竞态、I/O 边界），辅以 **Computer Use / Creator 插件 / Reranker** 等能力扩张，标志着 v2.0.1 进入"补漏 + 新特性并行"阶段。

---

## 四、社区热点

按评论数排序的热门 Issues：

1. **#6537** [Bug] Skill tags disappear on restart (regression of #3270) — 9 条评论
   https://github.com/agentscope-ai/QwenPaw/issues/6537
   > Skill 标签写入 `skill.json` 后在启动/构建过程中被对账逻辑抹掉。**反映诉求**：技能管理持久化的可靠性，用户已建立的元数据不应在重启后丢失。

2. **#6460** QwenPaw 2.0.1 Edge + Wayland 单标签高 CPU 占用 — 4 条评论
   https://github.com/agentscope-ai/QwenPaw/issues/6460
   > 涉及 Wayland + Edge + 大结果集渲染 / WebSocket 推送场景。**反映诉求**：跨设备访问下的渲染性能，怀疑前端轮询或增量渲染缺乏节流。

3. **#6524** [Bug] MCP 后端重启后客户端无法自动恢复 — 3 条评论
   https://github.com/agentscope-ai/QwenPaw/issues/6524
   > `streamable_http` MCP session 失效后仍复用旧 `mcp-session-id`，必须手动 `list mcp` 才能重连。**反映诉求**：MCP 长连接韧性。

4. **#6542** [Feature] 对话闪退导致历史丢失 — 建议内置自动存档机制 — 3 条评论
   https://github.com/agentscope-ai/QwenPaw/issues/6542
   > JSONL 日志非实时写入，闪退时丢失尾部对话。**反映诉求**：数据安全感。

5. **#6056** [Bug] Background offload kills subprocess immediately（**已关闭**） — 3 条评论
   https://github.com/agentscope-ai/QwenPaw/issues/6056
   > LLM 提供的 timeout 被静默忽略。

6. **#6541** [Bug] scroll context compression 在 DeepSeek 上 MODEL_EXECUTION_ERROR — 2 条评论
   https://github.com/agentscope-ai/QwenPaw/issues/6541
   > `[context compressed]` 块以 `role=user` 注入，违反 OpenAI 兼容 API 规范。

7. **#6563** CI bug: 'Real behavior proof' workflow blocks all fork PRs — 2 条评论
   https://github.com/agentscope-ai/QwenPaw/issues/6563
   > 阻塞所有 Fork PR 的 CI 通道，影响贡献者入门。

8. **#6475** [Feature] 希望添加 notice_after_complete 工具 — 2 条评论
   https://github.com/agentscope-ai/QwenPaw/issues/6475
   > 长任务异步通知机制，避免 Agent 阻塞用户对话。

9. **#6534** [Bug] Windows NSIS Installer "still running" 检查触发自身匹配 → 死循环 — 2 条评论
   https://github.com/agentscope-ai/QwenPaw/issues/6534
   > 严重影响 Windows 端安装流程。

**热点诉求归纳**：回归问题（重启丢标签、CI 死循环、安装死循环）+ 跨平台兼容性（Wayland / Windows）+ 连接韧性（MCP / 模型 API） + 用户体验细节（自动存档、异步通知）。

---

## 五、Bug 与稳定性（按严重程度）

### 🔴 P0 — 阻塞 / 数据丢失 / 安全
| Issue | 简述 | 修复 PR |
|---|---|---|
| **#6537** | Skill 标签重启后丢失（回归） | ❌ 暂无 |
| **#6534** | Windows 安装器 NSIS 死循环 | ❌ 暂无 |
| **#6563** | CI 工作流阻塞所有 Fork PR | ❌ 暂无 |
| **#6245** | Session 永久阻塞（#6056 修复的回归，已关闭） | ✅ 已隐含修复（#6056 closed） |
| **#6500** | browser_use 默认暴露未鉴权本地 CDP（**安全风险**） | ✅ **#6500** 修复中 |

### 🟠 P1 — 功能受损 / 体验严重下降
| Issue | 简述 | 修复 PR |
|---|---|---|
| **#6524** | MCP session 失效后无法自愈 | ❌ 暂无 |
| **#6541** | DeepSeek 模型上下文压缩触发错误 | ❌ 暂无 |
| **#6544** | 飞书音频消息静默转写失败 | ❌ 暂无 |
| **#6510** | 飞书频道中文路径被 URL 编码 | ❌ 暂无 |
| **#6557** | MCP 工具名以 `-` 开头致 Kimi 400 错误 | ✅ **#6561** |
| **#6533** | `/mission` TypeError | ✅ **#6535 / #6562** |
| **#6529** | ACP new_session 缺失 models 字段 | ✅ **#6531** |
| **#6496** | 旧插件被隐式 max_version 推导静默禁用（已关闭） | ✅ 已修复 |
| **#6482** | Console 切换 chat/agent 卡顿（已关闭） | ✅ 已修复 |

### 🟡 P2 — UI / 局部可用性
| Issue | 简述 | 修复 PR |
|---|---|---|
| **#6558** | 切换会话消息丢失 / 指令漂移 | ❌ 暂无 |
| **#6559** | 自动 fork 会话淹没列表 | ❌ 暂无 |
| **#6555** | Dream 进程错过被压缩滚出的早段事件 | ❌ 暂无 |
| **#6547** | Coding Mode 编辑器光标错位 | ❌ 暂无 |
| **#6549** | Desktop App 输入框被遮挡 | ❌ 暂无 |
| **#6460** | Edge + Wayland 高 CPU | ❌ 暂无 |
| **#6551** |

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报
**日期：2026-07-30**

---

## 1. 今日速览

ZeroClaw 今日延续了高强度的架构重构节奏——过去 24 小时共有 **50 条 Issues** 与 **50 条 PRs** 进入活跃状态，活跃度评级 **S 级（极高）**。Issues 端以 **架构 RFC** 为绝对主线（11 条 `risk:high` 提案集中讨论），PR 端则呈"批量修复 + 功能落地"双线推进，**7 条 PR 关闭/合并**，0 个版本发布。本日最值得关注的是 SOP 中心化、SOP 鉴权 Webhook、ZeroCode 视口渲染、Doctor 模型缓存等多项关键缺陷/增强进入收尾阶段，项目整体健康度良好，但 RFC 待审队列积压明显。

---

## 2. 版本发布

**无新版本发布。**

---

## 3. 项目进展（今日合并/关闭）

今日共有 **7 条 PR** 完成合并或关闭，是本周内单日推进力度较大的一天：

| PR | 类型 | 关键变更 |
|---|---|---|
| [#9205](https://github.com/zeroclaw-labs/zeroclaw/pull/9205) ⭐ | enhancement | **feat(sop): centralize fan-in ingress adapters**——为 AMQP、HTTP 等外部投递建立统一的 SOP 入口适配层，共享事件转换、负载限额、审计 handle 等基础设施，与 Issue [#8581](https://github.com/zeroclaw-labs/zeroclaw/issues/8581) 形成闭环 |
| [#9542](https://github.com/zeroclaw-labs/zeroclaw/pull/9542) | docs | **docs(security): document untrusted review input**——新增"不可信 GitHub 输入"审查原则，对应 Issue [#9508](https://github.com/zeroclaw-labs/zeroclaw/issues/9508) |
| [#9495](https://github.com/zeroclaw-labs/zeroclaw/pull/9495) | bug | **fix(channels): resolve aliases for one-off sends**——修复 `channel send --channel-id discord.governance` 解析失败问题 |
| [#9469](https://github.com/zeroclaw-labs/zeroclaw/pull/9469) | bug | **fix(runtime): scope peer-agent turns to the recipient's cost context**——修复 peer-agent 转交后任务脱离调用者 task-locals、计费上下文丢失问题 |

另有 3 条 PR 在今日窗口内完成生命周期（未在 Top-20 中展示）。值得关注的 closed Issues 包括：

- [#4830](https://github.com/zeroclaw-labs/zeroclaw/issues/4830) **HMAC 工具执行回执**（feature 提案）——经过 4 个月讨论正式关闭
- [#8581](https://github.com/zeroclaw-labs/zeroclaw/issues/8581) **SOP 集中化入口适配器**——随 PR #9205 一并落地
- [#9186](https://github.com/zeroclaw-labs/zeroclaw/issues/9186) **MCP stdio 三联缺陷**——响应 id 不匹配、30s 硬超时、整调用持锁
- [#9278](https://github.com/zeroclaw-labs/zeroclaw/issues/9278) **context_compression.enabled 默认值与运行时不一致**

**整体判断：** SOP 模块、文档安全规范与少量关键 bug 已向前推进一档，但 RFC 队列中至少 10+ 条高风险提案仍处于等待维护者决议状态。

---

## 4. 社区热点

### 🔥 评论最多 Issues（按活跃度）

1. **[#9048](https://github.com/zeroclaw-labs/zeroclaw/issues/9048)（11 评论）— RFC: 分离会话历史与 Agent 策展的长期记忆**
   作者：Audacity88 | `risk:high` `priority:p2`
   核心矛盾：runtime/gateway/channel 的 autosave 代码把对话轮次当成普通记忆写入 `MemoryCategory::Conversation`，导致会话生命周期与长期记忆生命周期在实现路径上"纠缠"。社区共识倾向分离但需要保留可观测性钩子。

2. **[#9127](https://github.com/zeroclaw-labs/zeroclaw/issues/9127)（9 评论）— RFC: 抽象 `KeySource` trait，按来源/部署形态分类主密钥**
   作者：REL-mame | `risk:high` `priority:p2` `status:in-progress`
   ZeroClaw 已具备 93 个 `#[secret]` 字段、5 类 `#[credential_class]` 元数据，提案统一抽象出 `KeySource` trait 以便多形态（KMS、本地文件、HSM、Vault）切换。

3. **[#4830](https://github.com/zeroclaw-labs/zeroclaw/issues/4830)（7 评论，已关闭）— HMAC 工具执行回执用于幻觉检测**
   作者：singlerider
   为每个工具执行结果生成 HMAC-SHA256 回执，运行时可验证"输出确实是某个工具在某次调用产生的"，用于缓解 Agent 幻觉。已正式关闭。

4. **[#9106](https://github.com/zeroclaw-labs/zeroclaw/issues/9106)（6 评论）— RFC: A2A 出站客户端（A2ATool）**
   作者：kingstar001
   现有 A2AServer 处理入站（v0.8.2），A2ATool 让 ZeroClaw Agent 能主动调用外部 A2A 兼容 Agent。

5. **[#8603](https://github.com/zeroclaw-labs/zeroclaw/issues/8603)（6 评论）— RFC: OpenAI Chat Completions 兼容适配器**
   作者：REL-mame
   让 Open WebUI、LobeChat 等客户端可直接对接 ZeroClaw，无需各自写适配层。

6. **[#8933](https://github.com/zeroclaw-labs/zeroclaw/issues/8933)（6 评论）— RFC: OTel 跨轮次会话关联**
   作者：FTDGRT
   透传不透明 conversation ID，导出 `gen_ai.conversation.id`，让可观测性具备"会话级"而非"轮次级"视角。

7. **[#9103](https://github.com/zeroclaw-labs/zeroclaw/issues/9103)（5 评论）— RFC: 分离权威记忆存储与可选增强连接器**
   作者：yanchenko | `status:in-progress`
   当前 `memory.backend` 同时承担"权威持久化存储"与"连接器接入点"两职，Lucid 被错误建模为后端。提案解耦。

### 反映诉求分析

- **架构层**（记忆、密钥、会话、A2A、MoA、OTel、附件）几乎占据全部头部讨论，反映项目正进入"v1.0 前的架构收敛期"；
- **互操作性**（OpenAI 兼容、A2ATool、Gemini Live）诉求强烈，社区希望 ZeroClaw 不被锁死在自有协议；
- **安全/可观测** RFC 数量明显增加（KeySource、HMAC 回执、OTel 关联、AI PR 审查防注入），体现"生产化"焦虑。

---

## 5. Bug 与稳定性

### 🔴 P1 — 已识别修复路径

| Issue | 标题 | 修复 PR |
|---|---|---|
| [#9340](https://github.com/zeroclaw-labs/zeroclaw/issues/9340) | CLI 创建的 cron 任务硬编码 `delivery.mode = "none"`，结果被静默丢弃 | 待合 PR（未在 Top-20） |
| [#9239](https://github.com/zeroclaw-labs/zeroclaw/issues/9239)（已关闭）| `config patch --json` 两条失败路径泄漏明文错误 | — |
| [#9422](https://github.com/zeroclaw-labs/zeroclaw/issues/9422)（已关闭）| Windows 上 `zeroclaw-config` 单元测试无法编译 | — |

### 🟠 P2 — 需关注

| Issue | 标题 | 修复 PR |
|---|---|---|
| [#6724](https://github.com/zeroclaw-labs/zeroclaw/issues/6724)（2026-05-16 开）| **启用 Signal/Voice Call 但凭证为空 → 监督器约 2s 一次 crashloop** | ❌ 至今无 fix PR |
| [#9486](https://github.com/zeroclaw-labs/zeroclaw/issues/9486) | 高熵检测器误伤 Solana 钱包地址，Telegram 出口被强制 redact | ❌ |
| [#6724](https://github.com/zeroclaw-labs/zeroclaw/issues/6724)、[#9462](https://github.com/zeroclaw-labs/zeroclaw/issues/9462) | `zeroclaw-plugins` lib 单元测试在 `plugins-wasmtime` feature 下不被 CI 执行 | ❌ |
| [#9506](https://github.com/zeroclaw-labs/zeroclaw/issues/9506) | Email 通道无法保留 CC 收件人或真正实现 Reply All | ❌ |

### 🟢 今日合并的 bug 修复 PR

- [#9497](https://github.com/zeroclaw-labs/zeroclaw/pull/9497) **fix(tools): strip Windows verbatim prefix before handing paths to external grep** —— 修复 Git-for-Windows 的 `grep.exe` 把 `\\?\` 解析错误
- [#9314](https://github.com/zeroclaw-labs/zeroclaw/pull/9314) **fix(telegram): advance long-poll offset only after delivery or permanent skip** —— 防止瞬时故障导致消息丢失
- [#9208](https://github.com/zeroclaw-labs/zeroclaw/pull/9208) **fix(runtime): stop per-iteration tool-schema deep clones in the agent loop** —— 显著减少每轮重建 tool spec 的 CPU/内存开销
- [#9075](https://github.com/zeroclaw-labs/zeroclaw/pull/9075) **fix(doctor): persist model catalog to cache on models refresh**
- [#9548](https://github.com/zeroclaw-labs/zeroclaw/pull/9548) **fix(config): warn on risky Codex CLI extra args**
- [#9229](https://github.com/zeroclaw-labs/zeroclaw/pull/9229) **fix(runtime): make interactive Ctrl+C state-aware**
- [#9477](https://github.com/zeroclaw-labs/zeroclaw/pull/9477) **fix(tool-call-parser): recover invocations wrapped in the `<tools>` tag**

**稳定性总结：** 修复 PR 体量大（多见 XL/L 级），覆盖通道、运行时、CLI、配置、安全多面；同时仍有 **#6724 等高风险 bug 已挂起 75 天**，应进入下一轮优先处理。

---

## 6. 功能请求与路线图信号

| 提案 | 关联 PR / 状态 | 入下版本可能性评估 |
|---|---|---|
| **A2A 出站客户端（A2ATool）** [#9106](https://github.com/zeroclaw-labs/zeroclaw/issues/9106) | RFC 阶段 | ⭐⭐⭐ 高，A2A 生态已成趋势 |
| **OpenAI Chat Completions 适配器** [#8603](https://github.com/zeroclaw-labs/zeroclaw/issues/8603) | RFC 阶段，`in-progress` | ⭐⭐⭐⭐ 极高，可显著扩大客户端生态 |
| **Mixture-of-Agents 虚拟模型提供者** [#8568](https://github.com/zeroclaw-labs/zeroclaw/issues/8568) | RFC 阶段 | ⭐⭐⭐ 高，硬任务多视角推理 |
| **Realtime S2S 通道（Gemini Live）** [#8780](https://github.com/zeroclaw-labs/zeroclaw/issues/8780) | RFC 阶段 | ⭐⭐ 中-高，多模态对话场景清晰 |
| **Runtime-owned 会话与传输适配器** [#9487](https://github.com/zeroclaw-labs/zeroclaw/issues/9487) | RFC 阶段 | ⭐⭐⭐⭐ 极高，是 #6864 的具体化 |
| **统一附件架构** [#9488](https://github.com/zeroclaw-labs/zeroclaw/issues/9488) | RFC 阶段 | ⭐⭐⭐ 高 |
| **跨轮次 OTel 会话关联** [#8933](https://github.com/zeroclaw-labs/zeroclaw/issues/8933) | RFC 阶段 | ⭐⭐⭐⭐ 极高，企业级 OTel 必需 |
| **ZeroCode Todo 配置迁移** [#9246](https://github.com/zeroclaw-labs/zeroclaw/issues/9246) | RFC 阶段，`in-progress` | ⭐⭐⭐⭐ 极高，#9013 改造配套 |
| **WASM 插件运行时化通道/工具** [#8850](https://github.com/zeroclaw-labs/zeroclaw/issues/8850) | 跟踪器，`accepted` | ⭐⭐⭐⭐ 极高，默认二进制瘦身关键路径 |
| **Compact skill injection 默认化** [#8313](https://github.com

</details>

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*