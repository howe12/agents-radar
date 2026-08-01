# OpenClaw 生态日报 2026-08-01

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-08-01 02:11 UTC

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

# OpenClaw 项目日报 · 2026-08-01

> 数据范围：过去 24 小时｜样本：500 Issues + 500 PRs｜生成时间：2026-08-01

---

## 1. 今日速览

OpenClaw 今日仍处于**高活跃、高负载**的工程状态。Issues 端新增/活跃 465 条、关闭 35 条，PRs 端 139 条关闭/合并、361 条仍待处理，**没有任何版本发布**。从内容看，社区关注焦点高度集中在三类问题：**内存/会话状态类稳定性（P0/P1 议题集中爆发）**、**渠道交付链路上的消息丢失/重复**，以及**插件/Secret/Provider 路由的安全与一致性**。PR 端则以"修复关闭"为主，单日 8 个 P1 级 fix-PR 进入合并/关闭通道，说明维护组正在积极消化积压的回归问题，但"新版本未发布"提示用户仍要继续承担 2026.7.x 系列已知缺陷。

---

## 2. 版本发布

**无新版本发布。** 过去 24 小时未生成任何 Release。最新主线版本仍为 2026.7.1（基于多个 issue 报告回退定位，如 [#86519](https://github.com/openclaw/openclaw/issues/86519)、[#116418](https://github.com/openclaw/openclaw/issues/116418)）。建议生产用户关注下一个补丁版本（预计整合 [#117129](https://github.com/openclaw/openclaw/pull/117129)、[#117141](https://github.com/openclaw/openclaw/pull/117141)、[#111107](https://github.com/openclaw/openclaw/pull/111107) 等已 ready PR）。

---

## 3. 项目进展

### 今日关闭/合并的关键 PR

| PR | 标题 | 影响域 | 状态 |
|---|---|---|---|
| [#101414](https://github.com/openclaw/openclaw/pull/101414) | fix(agents): classify Anthropic invalid_request_error as format for failover | 故障转移 | ✅ 已合并 |
| [#108404](https://github.com/openclaw/openclaw/pull/108404) | fix(anthropic): honor server Retry-After on rate-limited turns | 提供商可用性 | ✅ 已合并 |
| [#107943](https://github.com/openclaw/openclaw/pull/107943) | fix(anthropic): preserve Retry-After header for auto-retry backoff | 提供商可用性 | ✅ 已合并 |
| [#101932](https://github.com/openclaw/openclaw/pull/101932) | fix(session): avoid stalls when parent token probing hangs | 会话状态 | ✅ 已合并 |
| [#108963](https://github.com/openclaw/openclaw/pull/108963) | fix(gateway): CLI probes fail with gateway.bind≠loopback | 网关绑定 | ✅ 已合并 |
| [#105170](https://github.com/openclaw/openclaw/pull/105170) | fix(scripts/pr): refuse GraphQL prepare push when rebases rewrite ancestry | 自动化脚本 | ✅ 已合并 |
| [#111888](https://github.com/openclaw/openclaw/pull/111888) | fix(config): reject gateway.port above TCP port range (1–65535) | 配置校验 | ✅ 已合并 |
| [#111107](https://github.com/openclaw/openclaw/pull/111107) | fix(gateway): report correct timeout status when agent --json exits on toolUse | CLI/JSON 输出 | ✅ 已合并 |

**进展评价：** Anthropic 系列两个 Retry-After PR 同日合并，标志**速率限制处理的回归修复闭环**；CLI 探针与 `gateway.bind` 的解耦修复 [#108963](https://github.com/openclaw/openclaw/pull/108963) 解决了 Tailnet/LAN 部署下的运维盲点；父会话 fork 卡死 [#101932](https://github.com/openclaw/openclaw/pull/101932) 与 agent --json 超时状态错误 [#111107](https://github.com/openclaw/openclaw/pull/111107) 提升了大上下文与长时任务的可见性。整体来看，**底层稳定性水位线有显著抬升**，但用户感知最强的 Telegram/Slack/Discord 渠道回归（[#86519](https://github.com/openclaw/openclaw/issues/86519)、[#114137](https://github.com/openclaw/openclaw/issues/114137)、[#77930](https://github.com/openclaw/openclaw/issues/77930)）尚未伴随版本释出。

---

## 4. 社区热点

### 讨论最活跃 Issues

| 排名 | Issue | 评论数 | 👍 | 主题 |
|---|---|---|---|---|
| 🥇 | [#75 Linux/Windows Clawdbot Apps](https://github.com/openclaw/openclaw/issues/75) | **116** | **80** | 平台覆盖 |
| 🥈 | [#91588 Gateway Memory Leak](https://github.com/openclaw/openclaw/issues/91588) | 23 | 1 | 进程稳定性 |
| 🥈 | [#7707 Memory Trust Tagging by Source](https://github.com/openclaw/openclaw/issues/7707) | 23 | 0 | 记忆安全 |
| 4 | [#116201 Realtime voice unbounded state](https://github.com/openclaw/openclaw/issues/116201) | 16 | 0 | 实时语音资源 |
| 5 | [#10659 Masked Secrets](https://github.com/openclaw/openclaw/issues/10659) | 15 | 4 | 凭据隔离 |
| 6 | [#51429 工作路径 hardcode](https://github.com/openclaw/openclaw/issues/51429) | 13 | 0 | 隐私/可信发布 |
| 6 | [#86519 Agent repeats identical replies 2-10x](https://github.com/openclaw/openclaw/issues/86519) | 13 | 1 | Telegram 回归 |
| 8 | [#115908 Transcript projection livelock](https://github.com/openclaw/openclaw/issues/115908) | 12 | 0 | 主线程阻塞 |
| 8 | [#113306 SQLite snapshot restore guarantees](https://github.com/openclaw/openclaw/issues/113306) | 12 | 0 | 数据完整性 |

### 热点诉求解读

- **[#75](https://github.com/openclaw/openclaw/issues/75)**：唯一一个"破百评论"的 issue，呼吁补齐 Linux/Windows 桌面端。80 个 👍 与长期置顶说明这是**项目层面被承认但未排期**的长期诉求。
- **记忆与凭据安全**（[#7707](https://github.com/openclaw/openclaw/issues/7707)、[#10659](https://github.com/openclaw/openclaw/issues/10659)）：社区已经从"功能丰富"转向"信任边界"，反映项目正在进入企业部署阶段。
- **[#51429](https://github.com/openclaw/openclaw/issues/51429)**：开发者路径被硬编码进二进制并发布，这是一类**信任/供应链危机**级反馈，13 条评论集中在"这是怎么过的 review"。

---

## 5. Bug 与稳定性

### 🔴 P0（崩溃/数据丢失）

| Issue | 标题 | 状态 |
|---|---|---|
| [#91588](https://github.com/openclaw/openclaw/issues/91588) | **Gateway Memory Leak** — RSS 350MB→15.5GB → OOM → launchd-handoff 重启循环 | ❌ 无 PR，需 live-repro |

### 🟠 P1（功能失效/严重回归）

| Issue | 标题 | 是否有 fix PR |
|---|---|---|
| [#115908](https://github.com/openclaw/openclaw/issues/115908) | Transcript projection reconcile livelock → 主线程阻塞 | ❌ |
| [#116201](https://github.com/openclaw/openclaw/issues/116201) | Realtime voice unbounded provider/consult state | ❌ |
| [#86519](https://github.com/openclaw/openclaw/issues/86519) | Telegram 重复回复 2-10x（5.20 起回归） | ❌ |
| [#113306](https://github.com/openclaw/openclaw/issues/113306) | SQLite snapshot restore 缺少端到端崩溃与身份保证 | ❌ |
| [#114137](https://github.com/openclaw/openclaw/issues/114137) | Signal 可见回合无排队响应载荷（已写入转录但未投递） | ❌ |
| [#45494](https://github.com/openclaw/openclaw/issues/45494) | Cron agent 任务在 LLM 持续 500 时静默超时 | ❌ |
| [#87109](https://github.com/openclaw/openclaw/issues/87109) | macOS Gateway heap 增长至 1073MB+，cron 任务静默失败 | ❌ |
| [#97616](https://github.com/openclaw/openclaw/issues/97616) | OpenClaw 泄漏未回收的 hook/tool 子进程（僵尸累积） | ❌ |
| [#46786](https://github.com/openclaw/openclaw/issues/46786) | `tools.elevated.enabled: true` 破坏 exec 路由（全部逃逸到网关主机） | ❌ |
| [#51396](https://github.com/openclaw/openclaw/issues/51396) | `clearUnboundScopes` 对非本地 token-auth 客户端过度剥离 operator scope | ❌ |
| [#48810](https://github.com/openclaw/openclaw/issues/48810) | Compaction retry 在 parentId 链上制造孤立 fork | ❌ |
| [#96692](https://github.com/openclaw/openclaw/openclaw/issues/96692) | Slack 线程回复在 origin tuple 丢失后不投递 | ❌ |
| [#53540](https://github.com/openclaw/openclaw/issues/53540) | Embedded runner "Network connection lost"（工具调用大参数超时） | ❌ |
| [#70024](https://github.com/openclaw/openclaw/issues/70024) | 渠道 stopChannel 超时后渠道永久死亡 | ✅ linked-pr-open |
| [#77930](https://github.com/openclaw/openclaw/issues/77930) | Discord channel 在 2026.5.4 加载失败 | ✅ linked-pr-open |
| [#85844](https://github.com/openclaw/openclaw/issues/85844) | 自动更新后运行中的 Gateway 持有陈旧 hashed bundle | ❌ |
| [#114211](https://github.com/openclaw/openclaw/issues/114211) | Matrix 房间代理在"无回复"输出上自循环 | ❌ |
| [#114255](https://github.com/openclaw/openclaw/issues/114255) | 重启中途使会话状态停在 `running`，Telegram spool 永久重试 | ❌ |
| [#116418](https://github.com/openclaw/openclaw/issues/116418) | 2026.7.1 Ollama provider 从未作为主路由选中 | ❌ |
| [#90098](https://github.com/openclaw/openclaw/issues/90098) | Control UI / Gateway 大附件栈溢出 | ✅ linked-pr-open |
| [#115476](https://github.com/openclaw/openclaw/issues/115476) | 压缩触发上下文刷新后重放旧 inbound message_id（Telegram） | ❌ |
| [#109017](https://github.com/openclaw/openclaw/issues/109017) | Anthropic provider 从 picker 消失，静态 catalog 不拉新模型 | ❌ |

### 🟡 P2（重要但不阻塞）

- [#51429 工作路径硬编码](https://github.com/openclaw/openclaw/issues/51429) — 安全/可信发布事件
- [#67419 Bootstrap 文件每回合重复注入，浪费 20-30% tokens](https://github.com/openclaw/openclaw/issues/67419)
- [#115001 Hybrid memory search 返回伪 1.0 相似度](https://github.com/openclaw/openclaw/issues/115001)
- [#116391 WebChat 跨日历史消失](https://github.com/openclaw/openclaw/issues/116391)（已关闭）
- [#116409 每条入站消息双写到转录](https://github.com/openclaw/openclaw/issues/116409)（已关闭）
- [#116868 SQLite 会话回落到 frozen legacy JSONL 并复活已完成任务](https://github.com/openclaw/openclaw/issues/116868)（已关闭）

**健康度评估：** P0/P1 合计 23 个开放 issue，**仅 3 个有 linked PR**，其余均处于"需要 live-repro/需要产品决策/等待维护者审阅"状态。建议维护组优先处理 [#91588](https://github.com/openclaw/openclaw/issues/91588)（内存泄漏）、[#115908](https://github.com/openclaw/openclaw/issues/115908)（liveloop）、[#114255](https://github.com/openclaw/openclaw/issues/114255)（会话卡死 + spool 死循环）——这三类都是生产环境中**最先触发告警的级别**。

---

## 6. 功能请求与路线图信号

### 高需求、已有对应 PR 的功能（路线图可见）

| Issue | 标题 | 对应 PR | 评估 |
|---|---|---|---|
| [#45608 Pre-reset agentic memory flush](https://github.com/openclaw/openclaw/issues/45608) | /new、daily reset 与 compaction 内存 flush 对齐 | — | 复用既有 `runMemoryFlushIfNeeded`，落地成本低 |
| [#45608 / #48810 系列] | compaction 链路健壮性 | [#117141](https://github.com/openclaw/openclaw/pull/117141) 维持 subagent 状态 | 已 ready for maintainer |
| [#9986 Trigger fallback on context-length](https://github.com/openclaw/openclaw/issues/9986) | 上下文超限时触发 fallback | — | 与 Anthropic failover PR [#101414](https://github.com/openclaw/openclaw/pull/101414) 配套推进 |
| [#81913 Stable plugin SDK surface](https://github.com/openclaw/openclaw/issues/81913) | 暴露 `openclaw/plugin-sdk/*` | [#102852](https://github.com/openclaw/openclaw/pull/102852) MissingPublicSurfaceError | 已有进展 |
| [#13219 Per-model usage logging](https://github.com/openclaw/openclaw/issues/13219) | 按模型成本日志 | — | 与 [#10687 dynamic model discovery](https://github.com/openclaw/openclaw/issues/10687) 同源推进 |
| [#111541 Locale context and message rendering](https://github.com/openclaw/openclaw/pull/111541) | 本地化 | [#117157](https://github.com/openclaw/openclaw/pull/117157) 统一翻译 memory | 维护者 steipete 主推，节奏明确 |

### 高需求但**尚未动工**的诉求

|

---

## 横向生态对比

# AI 智能体开源生态横向对比报告
**报告日期：2026-08-01** ｜ **样本：12 个项目** ｜ **数据窗口：过去 24 小时**

---

## 一、生态全景

2026-08-01 当日的开源个人 AI 助手 / 自主智能体生态呈现**"高活跃、低发版"**的典型工程化收敛状态：**10/12 项目今日无版本发布**（仅 LobsterAI 有 `2026.7.31` Release PR 待出），但 **12 个项目共消化了约 320 条 Issue 更新与 240+ 条 PR 更新**，说明整个生态已进入"稳定性补丁期"而非"功能爆发期"。技术焦点高度收敛于四类议题：**记忆与会话状态的持久化与一致性**（OpenClaw、NanoBot、ZeroClaw、LobsterAI、Moltis 均在动 SQLite/compaction/memory 层）、**渠道交付链路的稳定性与安全性**（Telegram/Slack/Discord/Weixin/Signal/Nostr/Matrix/IPC 全面开花）、**面向 Anthropic 等长上下文模型的 prompt-cache 命中率优化**（OpenClaw Retry-After、LobsterAI 前缀缓存、IronClaw cache_control 断点、Hermes MiniMax-M3 thinking 块）、以及**多 profile / 多租户的安全边界与隐私隔离**（IronClaw 跨用户内存泄漏、Moltis node pairing 签名、CoPaw agent.json 损坏、NanoClaw 日志凭据脱敏）。**健康度梯度**清晰：IronClaw、ZeroClaw、LobsterAI、Moltis 处于"质量巩固期"；OpenClaw、Hermes、NanoBot、CoPaw 处于"快速迭代 + 补课期"；PicoClaw、NullClaw、ZeptoClaw、TinyClaw 则呈现出"维护放缓"信号。

---

## 二、各项目活跃度对比

| 项目 | Issues 活跃 / 关闭 | PRs 待合并 / 关闭 | 新版本 | 健康度评级 | 当前阶段 |
|---|---|---|---|---|---|
| **OpenClaw**（核心参照） | 465 / 35 | 361 / 139 | ❌（主线 2026.7.1） | 🔴 负载预警 | 高负载补课 |
| **IronClaw**（nearai） | 38 / — | 50 / **31** | ❌ | 🟢 健康 | 架构重构 WS1.7 |
| **ZeroClaw** | 50 / 5 | 37 / 13 | ❌ | 🟢 健康 | RFC + 修补并行 |
| **Hermes Agent** | 46 / 4 | 49 / 1 | ❌（v0.19.x） | 🟡 PR 积压 | 多线并行迭代 |
| **CoPaw** | 14 / 6 | 28 / 13 | ❌（v2.0.1） | 🟢 健康 | agentscope 升级补丁期 |
| **NanoBot** | 2 / 2 | 10 / 6 | ❌ | 🟢 健康 | SQLite 迁移 + 跨平台 |
| **LobsterAI** | 0 / 4 | 1 / 11 | ⏳（`2026.7.31` PR 待发） | 🟢 健康 | 性能回归闭环 + 体验打磨 |
| **Moltis** | 2 / — | 4 / 2 | ❌ | 🟢 健康 | 安全收敛 + 体验合并 |
| **NanoClaw** | 8 / — | 6 / 4 | ❌ | 🟢 健康 | 多通道 + 容器运行时 |
| **PicoClaw** | 2 / 0 | 3 / **0** | ❌ | 🟡 yellow | 维护放缓 |
| **NullClaw** | 0 / 0 | 1 / 0 | ❌ | ⚪ 静默 | 平稳期 |
| **ZeptoClaw** / **TinyClaw** | 0 | 0 | — | ⚪ 静默 | 无活动 |

**关键观察**：
- **关闭/合并率最高**：IronClaw（31/50 = 62%）、LobsterAI（11/12 = 92%）、CoPaw（13/41 = 32%）、OpenClaw（139/500 = 28%）。
- **PR 积压最重**：OpenClaw（361 待合并）、Hermes Agent（49）、CoPaw（28）、ZeroClaw（37）。
- **P0 安全泄漏未闭环**：仅 3 个项目的安全级 Issue 有 linked fix PR（IronClaw #6900/#6778、CoPaw #6612/NanoClaw #3162、Moltis #1179/#1180 仍待合并）。

---

## 三、OpenClaw 在生态中的定位

| 维度 | OpenClaw | 生态平均水平 | 优势/劣势 |
|---|---|---|---|
| **社区规模** | 日更 465 Issues / 361 PRs | NanoClaw 8/10，Moltis 2/6 | **体量第一**，数量级领先 |
| **发版节奏** | 2026.7.1，无新版本 | LobsterAI 准 release | **落后于** LobsterAI / IronClaw 收敛期 |
| **议题分布** | Telegram 重复回复、Gateway RSS 15.5GB OOM、SQLite 恢复保证、Realtime voice 状态无界 | Hermes 同款渠道问题，但更严重 | **P0/P1 单点问题密度最高** |
| **修复响应** | 8 条 P1 fix-PR/日（Anthropic failover ×2 / Session fork / Gateway bind） | LobsterAI 2 条性能 PR/日 | **单日 fix 吞吐可与 LobsterAI 持平**，但落后于积压规模 |
| **多渠道覆盖** | Telegram / Slack / Discord / Signal / Matrix / WebChat / Embedded runner | Hermes ≈ 同 / NanoClaw 多 | **渠道最广，但回归同步出现在所有渠道** |
| **架构深度** | Config 校验 / Hook 子进程 / Compaction orphan fork / Ollama picker | IronClaw Workspace 拆分更系统 | **深度对齐**，但缺乏 IronClaw 的 Epic 收敛机制 |

**核心定位**：OpenClaw 仍是生态中**用户基数与功能广度的"参照系"**，但 2026.8.1 的工程节奏表明其**已从"功能领先"转向"补课"**——大量 P0/P1 处于"等 live-repro / 等产品决策"状态，提示维护者对**核心稳定性水位线**已落后于 IronClaw、ZeroClaw、LobsterAI 的同期收敛速度。

---

## 四、共同关注的技术方向

### 4.1 记忆与会话状态的持久化重构
**涉及项目**：OpenClaw（#113306 SQLite restore / #48810 compaction orphan fork / #45608 pre-reset flush）、NanoBot（#5173 JSONL → SQLite 迁移）、ZeroClaw（#9048 RFC：会话历史与长期记忆分离）、LobsterAI（#2413+#2415 实时提示词字节稳定 → DeepSeek cache 命中率 57%→100%）、Moltis（#1158 zvec 向量后端）。
**共识诉求**：从"被动压缩"演进到"主动持久化 + 缓存友好"。

### 4.2 Anthropic / 长上下文模型的 prompt-cache 命中率
**涉及项目**：OpenClaw（#101414 failover + #107943 / #108404 Retry-After）、LobsterAI（#2413 / #2415 tool-result 4× 聚合上限）、IronClaw（#6984-#6989 cache_control / nudges / 模型窗口 / token 核算 / 摘要污染）、Hermes（#75779 MiniMax-M3 thinking 块保留）。
**共识诉求**：所有项目均意识到 prompt cache 是**生产级成本与延迟控制点**，而非优化项。

### 4.3 渠道交付链路的"消息丢失 / 重复 / 静默失败"
**涉及项目**：OpenClaw（Telegram ×2-10x、Signal 转录已写未投、Slack origin tuple、Matrix 自循环）、NanoBot（Weixin 死循环、Slack thread 串扰）、NanoClaw（Telegram 配对静默失效 #3162）、Hermes（Telegram typing 卡死、Discord @name 解析、Email gateway 回放）、Moltis（NIP-29 group）、PicoClaw（IRCv3 长消息识别）。
**共识诉求**：所有 IM 适配器都存在"业务正确性 ≠ 协议正确性"的语义层 bug。

### 4.4 沙箱 / 容器运行时的可选化
**涉及项目**：NanoClaw（K8s #2354、Native runner #1732、Apple Container #2588/#2589）、ZeroClaw（Landlock + /dev/null #8973）、OpenClaw（`tools.elevated.enabled` 破坏 exec 路由 #46786）、IronClaw（TOCTOU 加固 #3952 / #4022 HTTP 错误分类）。
**共识诉求**：从"Docker 默认 + 特权通道"向"可插拔沙箱"演进。

### 4.5 多租户 / 多 profile 的安全隔离
**涉及项目**：IronClaw（#6900 跨用户内存泄漏 / #6778 MCP 元数据泄漏 / #6866 共用 home 目录）、NanoClaw（#2923 ask_user_question 来源伪造 / #3161 日志密钥脱敏 / #3162 Telegram 配对密钥）、CoPaw（#6520 agent.json 系统性损坏 / #6612 Msg.content 类型崩溃）、Moltis（#1179 node pairing 签名 / #1180 路径遍历 RCE）、OpenClaw（#7707 记忆信任标记 / #10659 凭据隔离 / #116418 Ollama 主路由被绕过）。
**共识诉求**：默认信任边界需重写为"fail-closed + 按 actor 命名空间"。

### 4.6 Windows / 边缘平台的可用性
**涉及项目**：NanoBot（Termux tzdata #5189、Windows MIME #5190）、Hermes（#75598 / #75724 / #75584 Windows update 链断裂）、PicoClaw（IRC + Firefox Web UI）、CoPaw（#6612 agentscope 兼容性）、OpenClaw（`#75` Linux/Windows Clawdbot desktop 缺位）。
**共识诉求**：跨平台不再是 nice-to-have，而是**生产部署的前置条件**。

### 4.7 子代理能力边界
**涉及项目**：CoPaw（#6588 spawn_subagent batch 必填）、Hermes（#75737 delegate_task 21 toolset 膨胀 / #68348 non-convergence 护栏）、LobsterAI（#2234 sessions_yield 后父 agent finalization）、OpenClaw（#48810 compaction retry 制造孤立 fork）。
**共识诉求**：子代理需要**最小工具集声明 + non-convergence 护栏 + 与父会话的状态隔离**。

---

## 五、差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 技术架构关键差异 |
|---|---|---|---|
| **OpenClaw** | 全栈 + 全渠道 | 个人到中小团队 | 单体仓库 + 多模块松耦合，依赖强插件 |
| **IronClaw** | 多租户 + 企业治理 | SaaS / 团队 / 企业 | Rust 工作空间分层（`ironclaw_*_contracts`）、TOCTOU 沙箱、Epic-driven |
| **ZeroClaw** | 安全优先 + RFC 驱动 | 安全敏感用户 | Landlock 沙箱 + 显式 RFC 治理 |
| **Hermes Agent** | 多 provider + 子代理 | 高频切换 LLM 的开发者 | provider 抽象层 + 工具集权限面 |
| **CoPaw**（agentscope 生态） | 中文场景 + 桌面 + 企业 IM | 中文用户 + 桌面用户 | 重度依赖 AgentScope 框架，与 Feishu / 微信深度集成 |
| **NanoBot** | 极轻量 + 跨平台 | 边缘 / 移动 / 单机 | JSONL→SQLite 单仓单进程 |
| **LobsterAI** | 性能 + UI 打磨 | DeepSeek / 长会话用户 | 字节稳定 + cache-aware prompt projection |
| **Moltis** | 安全加固 + Nostr 工作空间 | Nostr / 自托管用户 | NIP-29 + zvec 实验 + Markdown 可携带性 |
| **NanoClaw** | 容器可插拔 + 多通道 | K8s / Apple Silicon 用户 | 运行时抽象层（Docker / K8s / Apple Container / Native） |
| **PicoClaw** | IRC / Web UI | 小众爱好者 | Go 单进程 + IRCv3 |
| **NullClaw** | CLI Provider 接入 | CLI 极简用户 | spawn-per-request（grok / codex / gemini / claude-cli） |

---

## 六、社区热度与成熟度分层

### 🟢 快速迭代期（功能与稳定性双线同步）
- **IronClaw**（31 PRs/日合并 + Epic 驱动 + 架构重构）
- **LobsterAI**（11/12 PRs 合并 + 性能 PR + 季度级 stale 清理）
- **ZeroClaw**（RFC 治理 + 13 PRs + Bug 当日闭环）
- **CoPaw**（13 PRs + agentscope 2.0.4.post1 兼容性补丁成熟）
- **Moltis**（安全 PR 集中合并 + 体验 PR 落地，**6 周从 Issue 到合并**）

### 🟡 质量巩固期（修补为主，新功能少）
- **OpenClaw**（361 PR 待合并 + 23 个开放 P0/P1 中仅 3 个有 linked fix PR）
- **Hermes Agent**（49 PR 待合并 + 22 个 P2 中仅 2 个有 PR）
- **NanoBot**（3 个超 90 天的 conflict PR 需清理）

### 🟠 维护放缓期（响应延迟、积压明显）
- **PicoClaw**（0 合/关 + 1 条 [stale] Issue 即将自动关闭 + 3 条 PR 1 个月无 review）
- **NullClaw**（仅 1 PR / 3 天无评审）
- **ZeptoClaw / TinyClaw**（24 小时完全静默）

### 综合判断
**IronClaw / LobsterAI / Moltis** 代表了当前生态**最成熟的三种形态**：架构治理型、性能优化型、安全收敛型；**OpenClaw** 仍是体量第一但在积压压力下开始出现治理真空；**NanoClaw** 凭借 K8s/Native Runner 路线开辟了"运行时抽象"差异化赛道。

---

## 七、

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目日报 · 2026-08-01

> 数据来源：[HKUDS/nanobot](https://github.com/HKUDS/nanobot) GitHub 仓库

---

## 📌 今日速览

NanoBot 仓库今日保持中高度活跃，**过去 24 小时共更新 4 个 Issue 与 16 个 PR**，其中 PR 处理节奏显著快于 Issue 端。维护团队集中处理了一批**稳定性回归修复**（Weixin 频道、Slack、WebUI 滚动体验、JSONL→SQLite 迁移）和**跨平台兼容问题**（Termux 时区、Windows MIME 类型）。一个值得关注的新功能 PR（**DeepSeek Responses API 支持**）已进入待审队列，反映出模型提供商适配正在加速。整体来看，项目在 7 月底完成了一次**会话存储架构重大升级**（迁移到 SQLite），并继续向多通道稳定性、多模型支持、WebUI 体验三条主线推进。

- 活跃度评级：**🟢 高活跃**
- 合并/关闭率（PR）：6 / 16 = **37.5%**
- 新增 Issue：2 个（均为 bug），关闭 Issue：2 个
- 积压 PR：仍有 3 个 2-5 个月前提交的 conflict 标记 PR 未处理

---

## 🚀 版本发布

**今日无新版本发布。** 

7 月 30 日合并的 PR #5173（**会话存储从 JSONL 迁移到 SQLite**）尚未触发新版本 tag，预计维护者将在后续发布中将此作为重要变更点。社区应留意潜在的迁移说明。

---

## 📈 项目进展（今日合并/关闭的重要 PR）

| PR | 标题 | 类别 | 影响 |
|---|---|---|---|
| [#5173](https://github.com/HKUDS/nanobot/pull/5173) | `feat(session): migrate session storage from JSONL to SQLite` | 功能/架构 | ⭐ **重大架构升级**：会话运行时存储切换为 `sessions.db`，首次启动时事务化导入历史 JSONL；原 JSONL 文件保留为回滚备份；WebUI 会话列表与 Dream 修剪统一走 `SessionManager`。这是项目数据层的长期债务清理。 |
| [#5196](https://github.com/HKUDS/nanobot/pull/5196) | `fix(weixin): recover refreshed state after session expiry` | Bug 修复 | 修复 Issue #5195：60 分钟暂停结束后重新加载 `account.json`，避免永久死循环（同时关闭了重复的 PR #4223）。 |
| [#5189](https://github.com/HKUDS/nanobot/pull/5189) | `fix(config): install timezone data on all platforms` | Bug 修复 | 安装 `tzdata` 作为 `zoneinfo` 的回退，覆盖 Termux 等无系统时区库的精简 Linux 主机；保留严格的非法时区校验。修复 Issue #5187。 |
| [#5193](https://github.com/HKUDS/nanobot/pull/5193) | `fix(webui): preserve user scroll ownership near tail` | WebUI 修复 | 修正用户在「接近底部阈值」内的滚动所有权，触摸方向按 modifier 跟踪，长会话体验改善。 |
| [#5192](https://github.com/HKUDS/nanobot/pull/5192) | `fix(slack): scope channel thread openers to their own session` | Bug 修复 | 修复 Slack 顶层频道消息开启线程时被错误归入频道级共享会话的回归问题。 |
| [#4223](https://github.com/HKUDS/nanobot/pull/4223) | `fix(weixin): reload session state after pause expiry` | 重复 PR 关闭 | 与 #5196 重复，已 close（维护者合并了 #5196 版本）。 |

**整体评估**：今日是「**稳定性收尾日**」，Weixin 死循环、Slack 会话串扰、WebUI 滚动误判、跨平台时区四类老问题集中落地。叠加 #5173 的 SQLite 迁移，今日净推进的项目进度可视为 **6 个有效 commit 等价的工作量**。

---

## 🔥 社区热点

1. **[Issue #5195 – Weixin 重新扫码登录后立即收到 errcode -14](https://github.com/HKUDS/nanobot/issues/5195)**（2 条评论，已关闭）
   - **诉求**：Weixin 个人微信频道长跑场景下的会话生命周期管理；用户希望扫码重新登录后不应立即陷入 60 分钟暂停。
   - **响应速度**：报告当日即被 PR #5196 修复关闭，响应**极快**。

2. **[Issue #5198 – 同一会话内无法切换模型](https://github.com/HKUDS/nanobot/issues/5198)**（0 评论，仍 OPEN）
   - **诉求**：与云端 SaaS AI 不同，nanobot 把模型「锁定」在实例级别，用户希望 UI 上的模型下拉能真正起作用，`/model` 命令应可在不重启的情况下切换当前会话主模型。
   - **社区情绪**：尚未激发讨论，但属于「基础 UX 期望」问题，预计会吸引关注。

3. **[Issue #5187 – Termux 上 nanobot 无法工作](https://github.com/HKUDS/nanobot/issues/5187)**（0 评论，已关闭）
   - **诉求**：移动端/低端 Android 环境可用性。已由 PR #5189 在报告次日修复。

4. **[PR #5197 – 支持 DeepSeek Responses API](https://github.com/HKUDS/nanobot/pull/5197)**（优先级 P1，OPEN）
   - **诉求**：将 `deepseek-v4-flash` 路由到原生 Responses API，复用现有流式/函数工具/推理项保留机制。

---

## 🐞 Bug 与稳定性

按严重程度排序：

| 严重度 | Issue / PR | 状态 | 说明 |
|---|---|---|---|
| 🔴 **P0/P1** | [#5195](https://github.com/HKUDS/nanobot/issues/5195) Weixin 频道死循环 | ✅ 已修复 (#5196) | 影响生产环境长跑微信机器人 |
| 🔴 **P1** | [#5201](https://github.com/HKUDS/nanobot/pull/5201) `AutoCompact.prepare_session` 崩溃于畸形 `_last_summary` | ⏳ PR 待审 | 会话压缩时崩溃风险 |
| 🔴 **P1** | [#5200](https://github.com/HKUDS/nanobot/pull/5200) `write_stdin(wait_for=...)` 因响应截断丢失目标 | ⏳ PR 待审 | 进程交互可靠性回归 |
| 🟠 **P2** | [#5190](https://github.com/HKUDS/nanobot/issues/5190) Windows 下 JS 模块被以 `text/plain` 提供 | ⏳ 修复 PR #5191 待合并 | Windows 用户启动后白屏 |
| 🟠 **P2** | [#5187](https://github.com/HKUDS/nanobot/issues/5187) Termux 时区 | ✅ 已修复 (#5189) | 移动端可用性 |
| 🟠 **P2** | [#5192](https://github.com/HKUDS/nanobot/pull/5192) Slack 线程会话串扰 | ✅ 已合并 | 多用户隔离问题 |
| 🟡 **UX** | [#5198](https://github.com/HKUDS/nanobot/issues/5198) 无法在会话内换模型 | ❌ 仍 OPEN | 缺解决方案 PR |

**总体观察**：所有报告中的 bug 均在 24 小时内被识别出对应修复 PR 或合并，**bug 流转闭环完整**；唯一卡在 OPEN 状态的 #5198 属于设计层面问题而非代码缺陷。

---

## 💡 功能请求与路线图信号

| 提议 | 现有 PR | 路线信号 |
|---|---|---|
| **DeepSeek Responses API 原生支持** | [#5197 OPEN, P1](https://github.com/HKUDS/nanobot/pull/5197) | 🟢 高概率纳入下个版本，标签为 `new-provider / feature / test` |
| **WebUI Quick Chat / Temporary Chat** | [#5184 OPEN](https://github.com/HKUDS/nanobot/pull/5184) | 🟢 设计完整，进入审查阶段 |
| **WebUI JSONL 会话列表性能优化** | [#5194 OPEN, P2](https://github.com/HKUDS/nanobot/pull/5194) | 🟢 与 #5173 SQLite 迁移协同效应明显 |
| **会话导出/导入/搜索/统计命令** | [#1565 OPEN, conflict](https://github.com/HKUDS/nanobot/pull/1565) | 🟡 自 3 月 5 日起未推进，已标记 conflict |
| **`nanobot skill status` 命令** | [#1319 OPEN, conflict](https://github.com/HKUDS/nanobot/pull/1319) | 🟡 自 2 月 28 日起未推进，已标记 conflict |
| **None 值字符串校验修复** | [#1656 OPEN, conflict](https://github.com/HKUDS/nanobot/pull/1656) | 🟡 自 3 月 7 日起未推进 |
| **会话内切换模型**（Issue #5198） | 暂无 PR | ⚪ 暂无解决方案，需维护者设计 |

---

## 💬 用户反馈摘要

从今日更新 Issue 的评论中提炼：

- **「会话内换模型」是用户期望的标配体验**（Issue #5198）：用户明确将其与 Cloud SaaS AI 对比，认为 nanobot 当前「锁定模型」的设计「不像一个完整 UI」。这是今天唯一**带产品设计色彩**的反馈。
- **Weixin 死循环问题被快速闭环**（Issue #5195，2 条评论）：用户给出了详细的复现路径与根因分析（`account.json` 写入时机问题），属于**高质量 bug report**。
- **Termux/Windows 等边缘平台用户真实存在**（#5187、#5190）：反映出 nanobot 在被尝试部署到非主流环境；维护者已通过 `tzdata` fallback 与 Windows MIME 注册两类修复予以回应，**社区反馈被认真对待**。
- **未观察到明显负面情绪**：今日无 issue 表达抱怨、对维护者失望等语气，整体社区氛围**健康**。

---

## 📋 待处理积压

> 以下条目已等待超过 **3 个月**，建议维护者复盘是否需要 close、rebase 或合并：

| 编号 | 创建日期 | 等待天数 | 标题 | 标签 |
|---|---|---|---|---|
| [#1319](https://github.com/HKUDS/nanobot/pull/1319) | 2026-02-28 | **~124 天** | `feat: add skill status command` | conflict |
| [#1565](https://github.com/HKUDS/nanobot/pull/1565) | 2026-03-05 | **~119 天** | `feat(session): add session export, import, search and stats commands` | conflict |
| [#1656](https://github.com/HKUDS/nanobot/pull/1656) | 2026-03-07 | **~117 天** | `fix(validation): handle None value in string schema validation` | conflict |

⚠️ **重点关注**：#5173 引入的 SQLite 迁移可能已**结构性重构了** #1565 所依赖的会话存储后端，强烈建议维护者审视该 PR 是否需要大幅 rebase 或直接关闭。

同时建议关注今日新增的两个**待合并 P1 修复** [#5201](https://github.com/HKUDS/nanobot/pull/5201) 和 [#5200](https://github.com/HKUDS/nanobot/pull/5200)，它们指向会话压缩与进程执行路径上的稳健性风险，应优先合入下一个 patch 发布。

---

*报告生成时间：2026-08-01 | 数据范围：2026-07-30 ~ 2026-07-31 24 小时窗口*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目日报

**日期**: 2026-08-01
**仓库**: [NousResearch/hermes-agent](https://github.com/nousresearch/hermes-agent)

---

## 1. 今日速览

Hermes Agent 仓库今日呈现**高活跃、多线并行**的状态。过去 24 小时内共更新 100 条记录（50 Issues + 50 PRs），其中 Issues 新开/活跃 46 条、关闭 4 条，PRs 待合并 49 条、合并/关闭 1 条，**当日无新版本发布**。从议题分布看，Bug 报告（约 60%）明显多于功能请求（约 25%）与重构（约 15%），反映出项目处于**功能快速迭代与稳定性修复并存**的阶段。Windows 更新链断裂、平台适配器（Telegram/Discord/Matrix）消息投递异常、安全边界（redaction、session fixation、terminal bypass）三类是今日最集中的痛点。来自开发者 @MaxFreedomPollard 推动的"god-file decomposition"重构行动在 PR #75787、Issues #75754/#75741 上同步展开，显示社区正在有意识地进行代码治理。

---

## 2. 版本发布

⚠️ **今日无新版本发布**。当前主线仍为 v0.19.x（最近一次为 v0.19.0 / 2026.7.20）。考虑到今日 PRs 中已包含多个 Windows update 链路修复（#75763、#75724、#75598、#75584）与 Telegram typing 回归修复（#75768 已关闭），下一补丁版本（推测 v0.19.1 或 v0.19.2）有较高合并可能。

---

## 3. 项目进展

今日仅 1 条 PR 完成合并/关闭流程，结合现有待合并 PR，推进了以下方向：

**已合并/关闭**
- **#75768 [CLOSED]**：[Telegram typing indicator 卡死多 profile](https://github.com/NousResearch/hermes-agent/issues/75768) — 多 profile 场景下 typing indicator 复归已识别为回归问题并关闭，可作为下一个补丁版本的回归修复基线。

**重大待合并 PR（49 条）**

| PR | 内容 | 关联 Issue |
|---|---|---|
| [#69086](https://github.com/NousResearch/hermes-agent/pull/69086) | Compute provider 抽象 PoC（Modal + computer-use） | 架构级新能力 |
| [#75779](https://github.com/NousResearch/hermes-agent/pull/75779) | 修复 MiniMax-M3 /anthropic 端点 thinking 块保留 | [#75725](https://github.com/NousResearch/hermes-agent/issues/75725) |
| [#75763](https://github.com/NousResearch/hermes-agent/pull/75763) | 0.19.1 更新后本地补丁恢复 | Windows update 链路 |
| [#75773](https://github.com/NousResearch/hermes-agent/pull/75773) | 启动时剔除 Python 版本不匹配的 site-packages | 启动稳定性 |
| [#75777](https://github.com/NousResearch/hermes-agent/pull/75777) | 修复 /model provider 切换的 slug 前缀 | 模型切换 UX |
| [#75771](https://github.com/NousResearch/hermes-agent/pull/75771) | 抢救 #34711：poll-loop 守护 + 孤儿 pipe 排空 | 进程工具稳定性 |
| [#75787](https://github.com/NousResearch/hermes-agent/pull/75787) | CLI 会话导航提取到独立 mixin | [#75786](https://github.com/NousResearch/hermes-agent/issues/75786) |
| [#75767](https://github.com/NousResearch/hermes-agent/pull/75767) | 跨会话图片上传使用 UUID 文件名 | 多 profile 隔离 |

整体看，项目在**稳定性回归修复 + 平台适配健壮性 + god-file 重构**三方面同步推进，节奏良好但 PR 积压较多（49 待合并）。

---

## 4. 社区热点

按评论数与反应数综合排序：

1. **[#52261](https://github.com/NousResearch/hermes-agent/issues/52261) — 评论 6**
   *Provider memory/resource 400s (oMLX/MLX, local inference) 被误判为 context_overflow，陷入破坏性压缩/重置循环*
   诉求：本地推理场景下的错误分类（4xx 资源不足 ≠ context 溢出），要求增加更细粒度的失败分类，避免误触发压缩/重置。

2. **[#75598](https://github.com/NousResearch/hermes-agent/issues/75598) — 评论 5**
   *Windows 更新链异常：多 profile 冲突、网关互相干扰*
   诉求：Windows 上 `hermes update` 整体不稳定，反映出 update 流程缺乏 profile 隔离与冲突检测。

3. **[#72776](https://github.com/NousResearch/hermes-agent/issues/72776) — 评论 5 (P1)**
   *非 git 工作区一旦触及任何 git 目录，会话工作区被劫持到无关 git 仓库*
   诉求：cwd 解析逻辑需要严格收敛到用户配置的工作区，避免 git 父目录检测误触。

4. **[#75737 已关闭 / #69086](https://github.com/NousResearch/hermes-agent/issues/75737) — 评论 4**
   *`delegate_task` 子代理工具集过大，子代理系统 prompt 膨胀数千 token*
   诉求：子代理应可声明"最小工具集"，避免每次派发都加载 21 个 toolset。

5. **[#69161](https://github.com/NousResearch/hermes-agent/issues/69161) — 评论 4 👍1**
   *Desktop 默认折叠 thinking/reasoning 块*
   诉求：长 reasoning 流导致窗口抖动，希望引入"默认折叠"显示选项。

6. **[#20717](https://github.com/NousResearch/hermes-agent/issues/20717) — 评论 4 👍2**
   *Dynamic Context Pruning（动态上下文剪枝）*
   诉求：从"被动压缩"演进到"主动剪枝"，让模型在窗口到达前有机会清理过期上下文。

---

## 5. Bug 与稳定性

按优先级 P1 → P2 → P3 排序，标注对应 fix PR 可用性：

### 🔴 高优先级（P1）

| Issue | 标题 | Fix PR |
|---|---|---|
| [#72776](https://github.com/NousResearch/hermes-agent/issues/72776) | Session workspace 被 git 目录劫持 | ❌ 无 |

### 🟠 中优先级（P2）—— 集中爆发

| Issue | 标题 | Fix PR |
|---|---|---|
| [#75598](https://github.com/NousResearch/hermes-agent/issues/75598) | Windows 更新异常（profile 冲突） | ❌ 无 |
| [#66392](https://github.com/NousResearch/hermes-agent/issues/66392) | Linux/X11 KDE Plasma/Qt 整会话崩溃 | ❌ 无 |
| [#70422](https://github.com/NousResearch/hermes-agent/issues/70422) | Desktop 误拖拽 → composer 弹出 | ❌ 无 |
| [#73060](https://github.com/NousResearch/hermes-agent/issues/73060) | `/stop` 仅丢弃队首，FIFO 溢出仍执行 | ❌ 无 |
| [#75724](https://github.com/NousResearch/hermes-agent/issues/75724) | 预更新备份遇非 SQLite `.db` 中止 | ❌ 无 |
| [#75780](https://github.com/NousResearch/hermes-agent/issues/75780) | CLI TTS → mic → STT → agent 反馈环 | ❌ 无 |
| [#75584](https://github.com/NousResearch/hermes-agent/issues/75584) | Windows 0.19.0 中断安装后升级失败 | ✅ PR [#75763](https://github.com/NousResearch/hermes-agent/pull/75763) |
| [#52261](https://github.com/NousResearch/hermes-agent/issues/52261) | 4xx 误判为 context_overflow | ❌ 无 |
| [#43666](https://github.com/NousResearch/hermes-agent/issues/43666) ⚠️安全 | Redaction 在持久化边界（db/compression）存在泄露 | ❌ 无 |
| [#72421](https://github.com/NousResearch/hermes-agent/issues/72421) | Azure Foundry 辅助调用 401 | ❌ 无 |
| [#75684](https://github.com/NousResearch/hermes-agent/issues/75684) | 多路复用 `/memory`、`/skills` 使用默认 profile | ❌ 无 |
| [#36645](https://github.com/NousResearch/hermes-agent/issues/36645) ⚠️安全 | terminal/execute_code 绕过 HERMES_WRITE_SAFE_ROOT | ❌ 无 |
| [#70077](https://github.com/NousResearch/hermes-agent/issues/70077) | Restore checkpoint "session not found" | ❌ 无 |
| [#66084](https://github.com/NousResearch/hermes-agent/issues/66084) | TUI 启动每次都触发 npm reinstall 误判 | ❌ 无 |
| [#7484](https://github.com/NousResearch/hermes-agent/issues/7484) ⚠️安全 | Session ID 可预测导致 session fixation | ❌ 无 |

### 🟡 低优先级（P3）部分

| Issue | 标题 | Fix PR |
|---|---|---|
| [#75725](https://github.com/NousResearch/hermes-agent/issues/75725) | MiniMax-M3 interleave thinking 首轮后停止 | ✅ PR [#75779](https://github.com/NousResearch/hermes-agent/pull/75779) |
| [#74965](https://github.com/NousResearch/hermes-agent/issues/74965) | Telegram 相册跨 turn 切片 | ❌ 无 |
| [#60637](https://github.com/NousResearch/hermes-agent/issues/60637) | Email gateway 启动回放旧未读邮件 | ❌ 无 |
| [#75708](https://github.com/NousResearch/hermes-agent/issues/75708) | mem0 插件忽略 `gateway_session_key` | ❌ 无 |
| [#75647](https://github.com/NousResearch/hermes-agent/issues/75647) | `hermes doctor` 对内置 memory 误报 | ❌ 无 |
| [#75768 已关闭](https://github.com/NousResearch/hermes-agent/issues/75768) | Telegram typing 卡死（回归） | ✅ 已识别修复 |
| [#69203](https://github.com/NousResearch/hermes-agent/issues/69203) | Discord 适配器无 `@Name → <@id>` 解析 | ❌ 无 |

**观察**：在 22 条 P2 中，仅 2 条有对应 PR；3 条安全相关（#43666、#36645、#7484）全部无 fix PR，建议优先关注。

---

## 6. 功能请求与路线图信号

| Feature | 来源 Issue | 已存在 PR | 评估 |
|---|---|---|---|
| 子代理工具集最小化 | [#75737](https://github.com/NousResearch/hermes-agent/issues/75737) | ❌ 已被关闭但无 PR | 需求强、影响 token 成本 → 高优先级候选 |
| 动态上下文剪枝（DCP） | [#20717](https://github.com/NousResearch/hermes-agent/issues/20717) 👍2 | ❌ | 路线图候选 |
| Desktop 折叠 thinking 块 | [#69161](https://github.com/NousResearch/hermes-agent/issues/69161) | ❌ | UI 调整，门槛低 → 近期可能 |
| TUI fenced code 美化 | [#75781](https://github.com/NousResearch/hermes-agent/issues/75781) | ✅ [#75783](https://github.com/NousResearch/hermes-agent/pull/75783) | 大概率并入下个版本 |
| Alibaba 模型新增 | [#19128](https://github.com/NousResearch/hermes-agent/issues/19128) | ❌ | 配置项变更，门槛低 |
| Compute provider 抽象（PoC） |  | ✅ [#69086](https://github.com/NousResearch/hermes-agent/pull/69086) | 架构级 → 评估期 |
| 子代理 non-convergence 护栏 |  | ✅ [#68348](https://github.com/NousResearch/hermes-agent/pull/68348) + [#68350](https://github.com/NousResearch/hermes-agent/pull/68350) | 待决策中 |
| Gmail send `--attach` |  | ✅ [#75784](https://github.com/NousResearch/hermes-agent/pull/75784) 关联 #72896 | 即将合入 |
| Skill 依赖声明（`depends_on`） |  | ✅ [#75782](https://github.com/NousResearch/hermes-agent/pull/75782) 关联 #71853 | 即将合入 |
| Discord 频道流式 TTS |  | ✅ [#75775](https://github.com/NousResearch/hermes-agent/pull/75775) | 能力补齐 |

**路线图信号**：Hermes 正在向"计算可租赁化（Modal/Sandbox）+ 子代理能力边界（工具集裁剪 / non-convergence 护栏）+ 平台适配稳定性（Telegram/Discord/Matrix）"三大轴线演进；动态上下文剪枝代表了一条"主动管理"的体验升级方向。

---

## 7. 用户反馈摘要

**痛点（多 Issue 共同主题）**

1. **Windows update 不稳定，已成系统性问题**
   - #75598、#75724、#75584、#75763 均围绕 Windows 下 `hermes update` 中断、profile 冲突、`hermes.exe` 丢失、node_modules ENOTEMPTY 等。Windows 用户对更新链信心不足。

2. **多 profile 会话串扰**
   - #75684、#75725、#75708、#75780 等指出 mem0/skills/memory 的会话键、profile 路由在多 profile 场景下行为不一致；尤其 `/memory`、`/skills

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报

**报告日期：** 2026-08-01
**数据范围：** 过去 24 小时（2026-07-31）
**项目：** [sipeed/picoclaw](https://github.com/sipeed/picoclaw)

---

## 一、今日速览

PicoClaw 今日活跃度处于**低位水平**。过去 24 小时内共有 2 条 Issue 出现更新、3 条 PR 仍处待合并状态，但**无任何 PR 被合并/关闭**，**无新版本发布**。从互动数据来看，所有条目点赞数均为 0，Issue 评论总量仅 3 条，反映社区参与度有限。其中 1 条 Issue 已被标记为 `[stale]`（长期无响应），提示项目维护节奏需关注。综合评估：**项目处于常规维护期，无显著推进动作**。

---

## 二、版本发布

🚫 **无新版本发布。** 跳过本节。

---

## 三、项目进展

⚠️ **今日无 PR 合并或关闭记录。** 项目代码层面今日无实质推进。

当前开放中、且仍在等待 review 的主要 PR 包括：

| PR | 标题 | 作者 | 创建日期 | 状态 |
|---|---|---|---|---|
| [#3222](https://github.com/sipeed/picoclaw/pull/3222) | refactor(deltachat): cleanup implementation, documentation -200LOC | trufae | 2026-07-03 | OPEN |
| [#3193](https://github.com/sipeed/picoclaw/pull/3193) | Added simplex channel type | dim | 2026-06-27 | OPEN |
| [#3200](https://github.com/sipeed/picoclaw/pull/3200) | feat(models): add configurable default fallback chain | lc6464 | 2026-07-01 | OPEN |

**评估：** 三条 PR 中最早一条已悬置超 1 个月（#3193），但均无任何合并/拒绝动作，提示 reviewer 资源可能紧张或 PR 范围需进一步讨论。建议维护者明确反馈以避免贡献者流失。

---

## 四、社区热点

📊 **互动热度排行（按评论数）**

1. **🥇 Issue #3287** — [Better support long messages in IRC](https://github.com/sipeed/picoclaw/issues/3287)
   - 评论数：**2** | 👍：0
   - 创建于 2026-07-22，活跃至 2026-07-31
   - **讨论焦点：** IRCv3 协议默认 512 字节限制下，长消息被自动拆分，PicoClaw 当前不能正确识别为单一连贯消息。
   - **诉求分析：** 用户希望平台层面实现消息重组逻辑，而非依赖客户端拼接。这是一个涉及协议适配的核心功能改进，社区贡献意愿较高。

2. **🥈 Issue #3292** — [BUG CPU usage too high when focus on input box](https://github.com/sipeed/picoclaw/issues/3292)
   - 评论数：**1** | 👍：0 | ⚠️ 已被标记 `[stale]`
   - **讨论焦点：** 在 Firefox 浏览器 Web 聊天界面聚焦输入框时 CPU 占用异常偏高。

3. **三条 PR 均无评论互动**，社区 reviewer 反馈缺失。

---

## 五、Bug 与稳定性

🐛 **今日报告 / 活跃 Bug 共 1 条**

### 🔴 [Issue #3292](https://github.com/sipeed/picoclaw/issues/3292) — 聊天界面输入框聚焦时 CPU 占用过高
- **严重程度：** 中等（性能问题，不阻塞功能）
- **复现环境：** PicoClaw v0.3.1 / Go 1.26 / Debian Linux x64 / Firefox（Web 通道）/ 模型 deepseek-v4-flash
- **当前状态：** ⚠️ 已被 GitHub 自动标记为 `[stale]`，暂无关联修复 PR
- **建议：** 维护者应优先响应——`[stale]` 标签意味着机器人判定无活动即将自动关闭，需维护者主动介入以保留 issue

**目前尚未出现崩溃、数据丢失或 P0 级严重回归报告。**

---

## 六、功能请求与路线图信号

📌 **用户新功能需求**

### 1. IRC 长消息智能识别 — [Issue #3287](https://github.com/sipeed/picoclaw/issues/3287)
- 用户希望 PicoClaw 在 IRCv3 通道下自动识别并重组超过 512 字节的长消息。
- **纳入下一版本可能性：** 中等。属协议层增强，需设计端到端方案，但社区已讨论 2 轮。

### 2. SimpleX 通道支持 — [PR #3193](https://github.com/sipeed/picoclaw/pull/3193)
- 新增 SimpleX 通道类型（隐私优先的即时通讯协议）。
- **纳入下一版本可能性：** 中等偏低。已开启超 1 个月无 review 反馈，可能存在接口设计争议。

### 3. 模型默认 fallback 链可配置化 — [PR #3200](https://github.com/sipeed/picoclaw/pull/3200)
- Web UI 引入模型降级链配置（设置默认模型 → 添加 fallback 模型 → 排序 → 保存）。
- **纳入下一版本可能性：** 较高。需求明确，UI + 后端 API 全链路实现，典型用户价值型功能。

### 4. DeltaChat 模块重构 — [PR #3222](https://github.com/sipeed/picoclaw/pull/3222)
- 减少约 200 行代码，删除遗留特性、密码登录配置，统一字段命名（`invite_link` → `join_invite_link`）。
- **纳入下一版本可能性：** 较高，但需关注向后兼容性（删除 `invite_link` 字段属破坏性变更）。

---

## 七、用户反馈摘要

🗣️ **从 Issue 评论中提炼的真实用户痛点：**

| 痛点 | 来源 | 情绪 |
|---|---|---|
| IRC 消息被拆碎后 AI 上下文断裂，影响对话连贯性 | #3287 | 😟 失望 / 期待改进 |
| Web 聊天界面输入时 CPU 飙高，体验卡顿 | #3292 | 😤 不满 |
| 长期提交的 PR 无人 review，贡献动力下降 | PR #3193 / #3222 / #3200 | 😐 挫败（隐性反馈） |

**使用场景画像：**
- IRC 高级用户将 PicoClaw 部署在类 IRC 社区机器人场景，依赖长消息上下文。
- Web 端用户对前端性能敏感，CPU 占用问题在生产力场景下尤其不可接受。
- 贡献者群体集中于通道扩展（DeltaChat、SimpleX）和模型管理 UX 方向。

---

## 八、待处理积压

⏰ **长期未响应的重要条目（需维护者重点关注）**

| 编号 | 类型 | 标题 | 创建至今 | 风险 |
|---|---|---|---|---|
| [#3193](https://github.com/sipeed/picoclaw/pull/3193) | PR | Added simplex channel type | **35 天** | 贡献者流失风险 |
| [#3200](https://github.com/sipeed/picoclaw/pull/3200) | PR | feat(models): configurable default fallback chain | **31 天** | 用户期待功能 |
| [#3222](https://github.com/sipeed/picoclaw/pull/3222) | PR | refactor(deltachat): cleanup -200LOC | **29 天** | 含破坏性变更，需维护者决策 |
| [#3292](https://github.com/sipeed/picoclaw/issues/3292) | Issue | [BUG] CPU usage high in input box | 8 天 | 已被 `[stale]` 标记，濒临自动关闭 |

🚨 **维护者行动建议：**
1. 立即响应 #3292 的 `[stale]` 状态，避免有效 bug 报告被自动关闭。
2. 对三条积压 PR 给出明确的 review 反馈或合并时间表。
3. #3222 涉及字段重命名，需提前在 Release Notes 中提示迁移指南。

---

## 📈 项目健康度仪表盘

| 指标 | 当前值 | 健康阈值 | 状态 |
|---|---|---|---|
| 24h 合并 PR 数 | 0 | ≥1 | 🔴 偏低 |
| 24h 关闭 Issue 数 | 0 | ≥1 | 🔴 偏低 |
| 新版本发布 | 0 | 视节奏 | 🟡 正常 |
| 积压 PR 比例 | 100%（3/3） | <30% | 🔴 需关注 |
| `[stale]` Issue | 1 | 0 | 🔴 需响应 |
| 社区互动（24h 评论） | 3 条 | ≥5 | 🟡 偏低 |

**综合评级：🟡 关注 / 黄色预警** — 项目未出现功能性故障，但维护响应节奏放缓，建议维护团队集中清理积压 PR 与 `[stale]` 标记 Issue。

---

*本报告基于 GitHub 公开数据自动生成，所有链接指向 sipeed/picoclaw 仓库。*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报
**日期：2026-08-01**
**项目仓库：** `nanocoai/nanoclaw` (qwibitai/nanoclaw)

---

## 一、今日速览

NanoClaw 今日保持了较高的社区活跃度，**过去 24 小时共有 8 条 Issues 更新、10 条 PR 更新**，其中 PR 已合并/关闭 4 条，无新版本发布。当日议题呈现三大主线：**容器运行时的灵活性扩展**（K8s 原生支持、Apple Container、绕过 Docker 的 Native Runner）、**安全与权限硬化**（ask_user_question 来源校验、host 日志密钥脱敏、Telegram 配对流程健壮性），以及**多通道集成持续扩张**（Hosted iMessage、Dial SMS+语音、Apple Container）。综合来看项目处于「密集迭代期」，但**所有新需求都集中在基础设施层而非核心 agent 逻辑**，维护者需要警惕范围蔓延（scope creep）。

---

## 二、版本发布

⚠️ **今日无新版本发布**。值得关注的信号是 PR #3163（`fix(release): restore the v2.1.54 release path`，作者 glifocat，已关闭）暗示近期发布流程（v2.1.54）出现过回退/恢复操作，社区需关注下一个稳定版本的发布节奏。详见 [PR #3163](https://github.com/qwibitai/nanoclaw/pull/3163)。

---

## 三、项目进展（已合并/关闭 PR）

| PR | 标题 | 作者 | 状态 | 影响 |
|---|---|---|---|---|
| [#3163](https://github.com/nanocoai/nanoclaw/pull/3163) | `fix(release): restore the v2.1.54 release path` | glifocat | CLOSED | 修复 v2.1.54 发布链路，但同日关闭表明可能是流程性修复而非代码合并 |
| [#3165](https://github.com/nanocoai/nanoclaw/pull/3165) | `Codex/copilot changes` | soren5 | CLOSED | 标题模糊、标签为 `[follows-guidelines]`，从快速关闭判断**很可能是 Bot/CI 测试 PR** 被驳回 |
| [#1678](https://github.com/nanocoai/nanoclaw/pull/1678) | `docs(skills): update voice transcription skills for Telegram + Linux` | Saxin | CLOSED | 移除本地 Whisper 仅限 WhatsApp 的限制，**向多通道扩展迈出文档层面一步** |
| [#3076](https://github.com/nanocoai/nanoclaw/pull/3076) | `feat(imessage): unified local+hosted adapter targeting spectrum-ts v11` | invisicat | CLOSED | 当日被 **#3164「Hosted iMessage (Photon)」正式取代**，意味着 iMessage 路线已收敛到 hosted 方案 |

**整体判断：** 项目向前推进了「**多通道统一化（iMessage hosted 取代 local+hosted 双轨）+ 文档扩容（Telegram 语音转写）+ 发布流程稳定性**」三件事，但今日无代码级新能力进入主干，**主要价值在于架构收敛**。

---

## 四、社区热点

按评论/点赞数排序：

1. **[Issue #1184](https://github.com/nanocoai/nanoclaw/issues/1184)** — *Challenges deploying nanoclaw in restricted K8s environments (Sealos)*（3 评论，1 👍）
   提问者 JachinShen 明确表示欣赏「极简、轻量、安全替代臃肿 agent 框架」的定位，但生产部署受限。
   **真实诉求：受限 K8s 环境的官方兼容说明缺失。**

2. **[Issue #1732](https://github.com/nanocoai/nanoclaw/issues/1732)** — *feat: native runner mode — bypass Docker for host-tool access*（3 评论）
   主张容器隔离反而成为 agentic 用例（tmux、有头浏览器、macOS APIs）的硬性阻碍。
   **真实诉求：保留安全模型的同时提供「可信主机直跑」路径。**

3. **[Issue #1225](https://github.com/nanocoai/nanoclaw/issues/1225)** — *Run it without docker*（2 评论）
   Windows / 无 Docker 环境下用户希望零依赖运行。
   **真实诉求：Docker 不应是入门门槛。**

4. **[Issue #2354](https://github.com/nanocoai/nanoclaw/issues/2354)** — *feat: Kubernetes container runtime for agent spawning*（1 评论，1 👍）
   提出将 `CONTAINER_RUNTIME_BIN` 从硬编码 `docker` 改为可插拔，支持 K8s pod 作为 agent 容器。
   **真实诉求：与 #1184 形成强呼应——K8s 部署是当前最热需求。**

**背后共识：** Docker 已经从「默认优势」演变为「部分用户的使用障碍」，**Runtime 抽象层**（K8s / Apple Container / Native）是当前社区最强烈的呼声。

---

## 五、Bug 与稳定性

按严重程度排序：

| 严重度 | Issue | 描述 | 是否有 Fix PR |
|---|---|---|---|
| 🔴 **High** | [#3162](https://github.com/nanocoai/nanoclaw/issues/3162) | **Telegram 配对静默失效**：启动时 `getMe` 一次失败即可永久锁定配对流程，整个进程生命周期内配对码失效且无任何提示 | ❌ **尚无对应修复 PR**，**需立即关注** |
| 🟠 Medium | [#2923](https://github.com/nanocoai/nanoclaw/issues/2923) | `ask_user_question` 卡片可被伪造点击覆写显示文本（即使响应被 origin 校验拒绝，UI 仍被篡改） | ✅ 对应 [PR #2651](https://github.com/nanocoai/nanoclaw/pull/2651) 已 OPEN（强化来源校验） |
| 🟠 Medium | [#2589](https://github.com/nanocoai/nanoclaw/issues/2589) | Apple Container 模式下 `host.docker.internal` 主机名无法解析，且 Apple Container 不支持 `--add-host` | ⏳ [PR #2809](https://github.com/nanocoai/nanoclaw/pull/2809) 部分相关，但未明确覆盖该 hostname 解析 |
| 🟠 Medium | [#2588](https://github.com/nanocoai/nanoclaw/issues/2588) | `skill/apple-container` 分支与 mainline 大面积脱节（已弃用 API、缺失模块、假设错误的运行时），官方 `/convert-to-apple-container` skill **立即失败** | ⏳ 与 #2809 相关，但**分支整合尚无明确 PR** |
| 🟢 Low | [#3161](https://github.com/nanocoai/nanoclaw/pull/3161) | `log.info/warn/error` 数据未经脱敏直接 `JSON.stringify`，**敏感凭据会泄露到 `nanoclaw.log`**（[PR #3161](https://github.com/nanocoai/nanoclaw/pull/3161) 修复中） | ✅ PR #3161 OPEN |

**稳定性警示：** High 级 Bug #3162 出现在当日新建 Issues 中，说明这是新发现的高危回归或长期潜伏问题，**维护者应在 24 小时内回应**。

---

## 六、功能请求与路线图信号

| 需求 | Issue | 现有 PR | 纳入下一版本的概率 |
|---|---|---|---|
| **K8s 作为容器运行时** | [#2354](https://github.com/nanocoai/nanoclaw/issues/2354) | ❌ 无 | ⭐⭐⭐ 高 — 社区两强需求叠加（#1184 + #2354） |
| **Native Runner（绕过 Docker）** | [#1732](https://github.com/nanocoai/nanoclaw/issues/1732) | ❌ 无 | ⭐⭐⭐ 高 — 与 Apple Container 趋势同向 |
| **Apple Container runtime + 远程 OneCLI gateway** | （无独立 Issue） | ✅ [PR #2809](https://github.com/nanocoai/nanoclaw/pull/2809) OPEN | ⭐⭐⭐ 高 — 已成熟到 PR 阶段 |
| **Dial 通道（SMS + AI 语音）** | （无独立 Issue） | ✅ [PR #3041](https://github.com/nanocoai/nanoclaw/pull/3041) OPEN | ⭐⭐ 中 — 外部供应商集成，需审查 |
| **Hosted iMessage（Photon）** | （无独立 Issue） | ✅ [PR #3164](https://github.com/nanocoai/nanoclaw/pull/3164) OPEN（取代 #3076） | ⭐⭐⭐ 高 — 已收敛为单一路线 |
| **安全报告与 triage 政策文档** | （无） | ✅ [PR #2954](https://github.com/nanocoai/nanoclaw/pull/2954) OPEN（核心团队） | ⭐⭐⭐ 极高 — 文档类且作者为核心团队 |

**路线图预测：** 下一版本极有可能聚焦于 **(a) 容器运行时可插拔（Apple Container 落地、K8s 跟进）、(b) 安全基线（来源校验 + 日志脱敏 + 报告流程）、(c) 通道扩张（Hosted iMessage）**。

---

## 七、用户反馈摘要

- 👍 **正面反馈（#1184）**：用户明确赞扬 NanoClaw 的「极简、轻量、安全替代臃肿 agent 框架」的定位，认为「用现有代码 agent 构建精简 Claw」是 brilliant 的设计。说明核心哲学获得认可。
- 😟 **痛点 #1 — Docker 依赖过重（#1225、#1732）**：Windows 与无 Docker 环境的 Linux 用户认为 Docker 是「不必要的入门门槛」；agentic 开发者认为容器隔离反而限制了 tmux、有头浏览器、macOS API 等高价值用例。
- 😟 **痛点 #2 — Apple Container 体验断裂（#2588、#2589）**：官方文档指引的 `/convert-to-apple-container` skill **立即失败**，且 Apple Container 不支持 `host.docker.internal` 与 `--add-host`，导致用户卡在「看似支持但实际不可用」的灰色地带。
- 😟 **痛点 #3 — 静默失败（#3162）**：Telegram 配对在 `getMe` 失败后**无任何错误提示即永久失效**，用户体验极差。
- 😟 **痛点 #4 — 安全信任链不完整（#2923、#3161）**：来源校验未覆盖 UI 层（卡片文本可被篡改），日志未脱敏，凭据泄露到磁盘文件。这两件事合在一起暴露出**「默认信任边界」过宽**的问题。

**净情绪：** 高度认可架构哲学，但对**部署摩擦与生产可用性**存在结构性不满。

---

## 八、待处理积压提醒

下表按「创建时间越久越值得维护者关注」排序：

| Issue / PR | 标题 | 创建日 | 持续天数 | 风险 |
|---|---|---|---|---|
| [#1184](https://github.com/nanocoai/nanoclaw/issues/1184) | K8s Sealos 部署 | 2026-03-17 | **137 天** | 生产部署核心场景，长期无响应可能流失企业用户 |
| [#1225](https://github.com/nanocoai/nanoclaw/issues/1225) | Run it without docker | 2026-03-18 | **136 天** | 用户入门门槛问题，影响新用户增长 |
| [#1732](https://github.com/nanocoai/nanoclaw/issues/1732) | Native runner mode | 2026-04-10 | **113 天** | 与 #1225 互补，是「容器可选化」战略的关键 |
| [#1678](https://github.com/nanocoai/nanoclaw/pull/1678) | docs: voice transcription | 2026-04-06（已 CLOSED 今日） | 117 天 | 已关闭，仅作存档 |
| [#2354](https://github.com/nanocoai/nanoclaw/issues/2354) | K8s container runtime | 2026-05-08 | **85 天** | 与 #1184 共同构成 K8s 路线核心论据 |
| [#2588](https://github.com/nanocoai/nanoclaw/issues/2588) | apple-container 分支脱节 | 2026-05-22 | **71 天** | **官方文档指引立即失败**，严重损害信任 |
| [#2589](https://github.com/nanocoai/nanoclaw/issues/2589) | host.docker.internal 解析失败 | 2026-05-22 | **71 天** | Apple Container 用户基本可用性阻断 |
| [#2651](https://github.com/nanocoai/nanoclaw/pull/2651) | fix(interactive): validate question origin | 2026-05-30（OPEN） | 63 天 | 对应 #2923 安全漏洞，**关键修复 PR 长期未合并** |
| [#2809](https://github.com/nanocoai

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目动态日报

**报告日期**：2026-08-01
**数据来源**：GitHub 仓库 nullclaw/nullclaw

---

## 1. 今日速览

NullClaw 项目今日活跃度处于**低位水平**。过去 24 小时内，仓库无新 Issue、无关闭 Issue、无新版本发布，唯一变动仅有一项 PR 仍处于待合并状态（#981）。整体来看，项目处于平稳维护期，未出现重大功能落地或紧急修复事件，开发者社区互动频率较低，建议关注者留意后续 PR 评审进展。

---

## 2. 版本发布

今日 **无新版本发布**。如需了解历史发布节奏，请参考仓库的 [Releases 页面](https://github.com/nullclaw/nullclaw/releases)。

---

## 3. 项目进展

今日**无 PR 合并或关闭**，项目代码主干未发生变化。

唯一处于活动状态的 PR 为 [#981](https://github.com/nullclaw/nullclaw/pull/981)（feat(provider): add grok-cli provider for xAI Grok CLI），由社区贡献者 valonmulolli 于 2026-07-29 提交，目前仍在 Open 状态，等待维护者评审。该 PR 旨在新增一个基于本地 `grok` CLI 的可选 Provider，延续项目已有的 `codex-cli`、`gemini-cli`、`claude-cli` 模式（spawn-per-request）。如果合并成功，将扩展 NullClaw 对 xAI Grok 模型的接入能力，但**该 PR 尚未合入，今日未产生实质推进**。

---

## 4. 社区热点

由于今日**无 Issue 评论活动、无 PR 新增评论**，社区互动处于静默状态。

唯一可观察到的社区贡献信号是 PR [#981](https://github.com/nullclaw/nullclaw/pull/981)，背后反映的诉求是：
- 用户希望 NullClaw 支持 xAI Grok 模型；
- 倾向于通过本地 CLI 调用的方式接入，避免额外的 API Key 维护成本；
- 期待与现有 CLI 类 Provider（如 Codex、Claude、Gemini CLI）保持一致的接入体验。

该 PR 的 👍 数为 0，表明社区对其关注度有限。

---

## 5. Bug 与稳定性

今日**无 Bug、崩溃或回归报告**。无相关 Issue 被开启或更新，仓库未出现已知的稳定性告警。

---

## 6. 功能请求与路线图信号

今日**无新功能请求 Issue** 被提交。已有的功能扩展信号来自 PR [#981](https://github.com/nullclaw/nullclaw/pull/981)：
- **新增 grok-cli Provider**：覆盖 xAI Grok 模型；
- **架构一致性**：遵循 `codex-cli` / `gemini-cli` / `claude-cli` 的 spawn-per-request 模式；
- **可选依赖**：仅在用户本地安装 `grok` CLI 后才生效，不影响默认安装体验。

> **评估**：从该 PR 的设计来看，新增 CLI 类 Provider 已被项目视为相对成熟的扩展模式，一旦评审通过，被纳入下一版本的概率较高。但目前尚无维护者反馈，落地时间仍不确定。

---

## 7. 用户反馈摘要

今日**无 Issue 评论或 PR 评论产生**，因此无法从用户反馈中提炼具体痛点。

可供参考的间接信号仅有 PR #981 的提交动机——反映出部分用户希望在 NullClaw 中使用 Grok 模型，并偏好 CLI 调用方式。

---

## 8. 待处理积压

| 类型 | 编号 | 标题 | 创建时间 | 状态 | 链接 |
|------|------|------|----------|------|------|
| PR | #981 | feat(provider): add grok-cli provider for xAI Grok CLI | 2026-07-29 | OPEN（3 天未评审） | [#981](https://github.com/nullclaw/nullclaw/pull/981) |

**提醒**：
- PR [#981](https://github.com/nullclaw/nullclaw/pull/981) 已创建 3 天但尚无维护者 review 或评论，建议维护者尽快评估其设计合理性、代码规范与可选依赖声明，避免成为长期挂起项。
- 建议关注者关注该项目是否即将发布新版本，以确认 #981 等待合并内容是否能随之落地。

---

## 附：项目健康度速览

| 指标 | 状态 |
|------|------|
| Issues 活跃度 | 🟢 无积压告警，但同时也无新讨论 |
| PR 流转效率 | 🟡 仅 1 个待合并 PR，3 天未评审 |
| 版本发布节奏 | ⚪ 今日无新版本 |
| 社区互动度 | 🟢 安静，无负面信号 |
| 稳定性 | 🟢 无新 Bug 报告 |

**总体评价**：项目处于**低活跃、平稳期**，无紧急风险，但需关注 PR 评审是否及时推进，避免贡献者流失。

---

*报告由 AI 自动生成，基于公开 GitHub 数据。*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报

**报告日期：2026-08-01**
**数据范围：过去 24 小时**

---

## 1. 今日速览

IronClaw 今日保持高强度工程节奏：过去 24 小时共有 **38 条 Issues** 与 **50 条 PRs** 发生更新，**未发布新版本**。项目当前处于大规模架构重构期（"目标架构 / Target Architecture" 的 WS1 系列拆分已推进至 WS1.7），并叠加一波以 Anthropic prompt cache 命中率为核心的 **pi-harness 性能优化计划**（P0/P1 共 7 条新 Issue 集中立项）。从用户侧看，社区反馈活跃但分歧增多：功能缺陷（CTA 404、邮件认证失败、家目录隔离）持续出现，叠加品牌与术语一致性需求（"Reborn" → "Ironclaw 1.0"、"Tools" vs "Extensions"），提示产品命名已接近"1.0 定型窗口"。**健康度评估：工程节奏强劲、但安全与稳定性信号密集，建议维护者优先处理 P0 跨用户内存泄漏与 prompt-cache 回归测试。**

---

## 2. 版本发布

今日**无新版本发布**。需要留意的是，旧 PR [\#5598](https://github.com/nearai/ironclaw/pull/5598) 仍处于 OPEN 状态，提议将 `ironclaw_common: 0.4.2 → 0.5.0`（⚠ 含 API 破坏性变更）、`ironclaw_safety: 0.2.2 → 0.2.3`、`ironclaw_skills: 0.3.0 → 0.4.0`（⚠ API 破坏性变更）。若该 PR 进入合并窗口，外部扩展作者需关注 `copy_impl_added` 等破坏性变更的适配工作。

---

## 3. 项目进展

今日共 **31 条 PRs 关闭/合并**，以下为推动架构与产品质量的关键合并：

### 🏗️ 目标架构重构（Wave 1 完成度接近 100%）

| PR | 主题 | 影响 |
|---|---|---|
| [\#6967](https://github.com/nearai/ironclaw/pull/6967) ✅ | **WS1.1** — 在 `ironclaw_host_api` 完成 turn 词汇表并退役 turns shim | 中性 turn 词汇正式落地 |
| [\#6975](https://github.com/nearai/ironclaw/pull/6975) ✅ | **WS1.2** — 抽出 `ironclaw_loop_contracts`，翻转 `ironclaw_agent_loop` | 循环层中性契约确立 |
| [\#6977](https://github.com/nearai/ironclaw/pull/6977) ✅ | **WS1.3** — 抽出 `ironclaw_extension_contracts`，关闭双重导入路径 | 扩展层中性契约确立 |
| [\#6980](https://github.com/nearai/ironclaw/pull/6980) 🟢 | **WS1.4**（待合并）— 抽出 `ironclaw_product_contracts` 并落地 ChannelAdapter 半边 | 已 stacked 在 #6977 之上 |
| [\#6981](https://github.com/nearai/ironclaw/pull/6981) 🟢 | **WS1.5**（待合并）— 在 witness grants 后封闭证据铸造（安全敏感） | 待合并 |
| [\#6982](https://github.com/nearai/ironclaw/pull/6982) 🟢 | **WS1.6 + WS1.7**（待合并）— 收窄 `ironclaw_common`，剪除 product→runner 边 | Wave 1 收官 PR |

**注**：Wave 1 的 WS1.6 与 WS1.7 在编码过程中发现原方案"5/6 与 2/2 条款项与代码现状不符"，由 BenKurrek 在 [\#6982](https://github.com/nearai/ironclaw/pull/6982) 中做了实际可行的调整后重新提交——这是健康信号：拒绝僵化执行计划。

### 🔌 扩展生态
- [\#6930](https://github.com/nearai/ironclaw/pull/6930) ✅ `feat(extensions): register hosted MCP servers`（153 文件 +15,002/−1,818）——租户运行时注册托管 MCP 服务器，自动探测 no-auth / Bearer / OAuth；**这是近月最大单 PR**，重新定义了 IronClaw 扩展边界。
- [\#6979](https://github.com/nearai/ironclaw/pull/6979) ✅ 文档同步：使 north-star 文档与 #6930 后的托管 MCP 注册逻辑对齐（5 个 .md，+27/−11）。

### 🐛 关键修复
- [\#6908](https://github.com/nearai/ironclaw/pull/6908) ✅ **管理后台用户列表分页**（修复 [\#6903](https://github.com/nearai/ironclaw/issues/6903)）——保留游标、Load more / 失败重试、最终页隐藏控件。
- [\#4022](https://github.com/nearai/ironclaw/pull/4022) ✅ **HTTP 响应错误从 run-aborting 改为可恢复工具错误**（修复 #4014 引入的回归）——之前会让整个 agent run 直接终止，现已正确归类。
- [\#3952](https://github.com/nearai/ironclaw/pull/3952) ✅ **TOCTOU 加固 LocalFilesystem**（fd-relative openat2/O_NOFOLLOW）——这是多租户生产环境的最高杠杆安全项，每一次租户 FS 资源访问现在都免于内核 TOCTOU 竞争。
- [\#3942](https://github.com/nearai/ironclaw/pull/3942) ✅ `PilotAllowlist` 枚举 + 调用方错误分支测试（#3738 跟进）。

### 📚 文档
- [\#6991](https://github.com/nearai/ironclaw/pull/6991) 🟢 `docs(research): pi agent harness deep dive and IronClaw adoption plan` —— ilblackdragon 提交，对 pi-mono 的深度技术分析与 IronClaw 引入计划，今日 7 条 P0/P1 优化 Issue 均引用本文 §7.3。

---

## 4. 社区热点

按评论数排序的最活跃议题：

1. 🔥 [\#6284](https://github.com/nearai/ironclaw/issues/6284) **[EPIC] error-recoverability endgame** —— 15 条评论
   作者 serrrfirat 提出"模型必须从其所见 100% 的错误中恢复"的契约：(a) 运行存活、(b) 模型可见、(c) 同时携带原因与可成功条件、(d) 模型获得行动回合、(e) 非成功状态绝不静默上报。这是 *recoverability endgame* 级别的高层契约，定位为项目"质量底线"。

2. 🔥 [\#6963](https://github.com/nearai/ironclaw/pull/6963) **Path-keyed CI gates 阻止首个家族 git mv** —— 5 条评论
   BenKurrek 列出 8 项发现缺陷（含 6 项静默 + 2 项显式），主张不能仅靠 PR 内清单行追踪，要求每个 CI/dev gate 解析 `crates/ironclaw_*` 平铺目录。

3. 🔥 [\#6524](https://github.com/nearai/ironclaw/issues/6524) **[EPIC] Hermetic capability and journey testing platform** —— 4 条评论
   核心诉求：**机械回答"每个支持的能力与关键用户旅程是否具备确定性、有意义的覆盖？"** ——指向 IronClaw 测试基建下一阶段方向。

**诉求分析**：社区讨论集中在 *契约式质量保证* 与 *架构可执行性* 两个维度，反映项目从"功能构建期"进入"质量与一致性收口期"。

---

## 5. Bug 与稳定性

### 🔴 P0 / 安全级
| Issue | 描述 | 状态 |
|---|---|---|
| [\#6900](https://github.com/nearai/ironclaw/issues/6900) 🐛🔒 | **共享频道默认 subject 绑定把所有用户折叠到操作员内存命名空间（跨用户内存泄漏）** | OPEN，未见修复 PR；要求共享未路由会话要么 fail-closed，要么按 actor 绑定，永不采用他人身份 |
| [\#6778](https://github.com/nearai/ironclaw/issues/6778) 🔒 | **托管 MCP `tools/list` 发现结果按 extension id 而非按 installation 发布（跨用户元数据泄漏）** | OPEN，未见修复 PR |

### 🟠 P1 / 性能
| Issue | 描述 | 状态 |
|---|---|---|
| [\#6984](https://github.com/nearai/ironclaw/issues/6984) | Cache: 显式放置 Anthropic `cache_control` 断点（rig adapter + OAuth transport） | OPEN |
| [\#6985](https://github.com/nearai/ironclaw/issues/6985) | Cache: 停止变更 prompt 前缀（nudges、timestamp、per-run memory 检索） | OPEN |
| [\#6986](https://github.com/nearai/ironclaw/issues/6986) | Cache: 保持广告 tool 数组字节一致（defer_loading 而非 mid-run promotion） | OPEN |
| [\#6987](https://github.com/nearai/ironclaw/issues/6987) | Cache: 跨 turn 字节相同前缀的回归测试 | OPEN |
| [\#6988](https://github.com/nearai/ironclaw/issues/6988) | Compaction: 从实际模型窗口推算上下文预算（取代硬编码 128k） | OPEN |
| [\#6989](https://github.com/nearai/ironclaw/issues/6989) | Token 核算: 修复 `ModelWorkRequest` 从引用字符串长度而非引用内容估算 | OPEN |
| [\#6990](https://github.com/nearai/ironclaw/issues/6990) | Compaction: 摘要推理不得污染 prompt cache 与 session 亲和 | OPEN |

### 🟡 P2 / 用户报告
| Issue | 描述 | 状态 |
|---|---|---|
| [\#6940](https://github.com/nearai/ironclaw/issues/6940) | **IronHub skill CTA 在所有 skill 返回 404** | OPEN，无修复 PR |
| [\#6972](https://github.com/nearai/ironclaw/issues/6972) | 新账号邮件认证失败 | OPEN |
| [\#6866](https://github.com/nearai/ironclaw/issues/6866) | 所有用户共用同一 home 目录，工作区互相可见（隐私问题） | OPEN |
| [\#6947](https://github.com/nearai/ironclaw/issues/6947) | `classify-test-scope.sh` 把 `ironclaw_product` 误归为 legacy-only | OPEN |
| [\#6978](https://github.com/nearai/ironclaw/issues/6978) | `reborn-tests.yml` 的 `workflow_dispatch` 结构上必失败 roll-up | OPEN |
| [\#6974](https://github.com/nearai/ironclaw/issues/6974) | libSQL `thread_store_writes` 病理：工具密集压力用例 p95 37–135s | OPEN；已从 [\#6973](https://github.com/nearai/ironclaw/issues/6973) 拆出，宿主 Postgres 容量恢复后仍在瓶颈 |
| [\#6976](https://github.com/nearai/ironclaw/issues/6976) | Linux service install 不启用 user lingering（影响无头/VM 安装） | OPEN |

**风险评估**：跨用户内存泄漏 [\#6900](https://github.com/nearai/ironclaw/issues/6900) 与托管 MCP 元数据泄漏 [\#6778](https://github.com/nearai/ironclaw/issues/6778) 均为 P0 安全缺陷且今日无 fix PR 跟进，建议维护者优先派工。

---

## 6. 功能请求与路线图信号

### 用户主动请求
| Issue | 请求 | 路线图可能性 |
|---|---|---|
| [\#6939](https://github.com/nearai/ironclaw/issues/6939) | **Hermes/Openclaw → IronClaw 的迁移工具**（用户不愿从零开始） | 高 ——"1.0 定型窗口"前的关键留存项 |
| [\#6983](https://github.com/nearai/ironclaw/issues/6983) | `hub` 作为 `ironhub` 的别名（IronHub dashboard 兼容性） | 高 ——已与现有 `iron-hub` 别名相邻，CLI 一致性容易补齐 |
| [\#6971](https://github.com/nearai/ironclaw/issues/6971) | 统一 "Tools" vs "Extensions" 术语 | 中 ——影响文档与 UI，需跨团队协调 |
| [\#6854](https://github.com/nearai/ironclaw/issues/6854) | 扩展页描述中 "Reborn" → "Ironclaw 1.0" | 极高 ——纯品牌文案调整，几乎可立即合并 |

### 内部 Epic（已立项）
| Issue | 主题 | 状态 |
|---|---|---|
| [\#6565](https://github.com/nearai/ironclaw/issues/6565) | EPIC: 可靠的 Skill 发现、路由与激活 | OPEN（已由 [\#6941](https://github.com/nearai/ironclaw/issues/6941) 拆出可执行子集） |
| [\#6578](https://github.com/nearai/ironclaw/issues/6578) | EPIC: 管理员管理的 Agent 作为 UserId 主体 | OPEN |
| [\#6524](https://github.com/nearai/ironclaw/issues/6524) | EPIC: Hermetic 能力与用户旅程测试平台 | OPEN |
| [\#6941](https://github.com/nearai/ironclaw/issues/6941) | EPIC 子集: 模型可选可用且自创 skill 真正生效 | OPEN；首 PR [\#6938](https://github.com/nearai/ironclaw/pull/6938) "由模型而非关键词打分器选 skill" 已提交 |

**判断**：迁移工具与品牌一致性为最易在 1.0 前兑现；术语统一（Tools/Extensions）应作为 1.0 文档同步事项。

---

## 7. 用户反馈摘要

来自 Issues 的真实用户声音：

- 😡 **信任与隐私**：tobias.holenstein 反馈"所有用户共享同一 home 目录，能看到彼此工作区"——这是企业/团队用户的关键疑虑 ([#6866](https://github.com/nearai/ironclaw/issues/6866))。
- 😡 **入驻体验**：新用户邮件认证失败 ([#6972](https://github.com/nearai/ironclaw/issues/6972)) ——首次使用即被阻塞，伤害最大。
- 😡 **功能可达性**：IronHub skill CTA 全部 404 ([#6940](https://github.com/nearai/ironclaw/issues/6940)) ——用户已不确定责任归属，提示文档/所有权信息缺失。
- 🤔 **品牌一致性**：扩展页仍使用 "Reborn" 字样与外部 "Ironclaw 1.0" 不一致 ([#6854](https://github.com/nearai/ironclaw/issues/6854))。
- 🤔 **术语困惑**：用户主动询问 "Tools" 与 "Extensions" 的区别与未来走向，关心模型是否稳定 ([#6971](https://github.com/nearai/ironclaw/issues/6971))。
- 🙌 **迁移成本担忧**：现有 Hermes/Openclaw 用户"不愿从干净 slate 重来" ([#6939](https://github.com/nearai/ironclaw/issues/6939)) —— 提示先发优势窗口需快速收敛迁移工具。

**综合判断**：用户满意度

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报
**日期：2026-08-01** ｜ **仓库：[netease-youdao/LobsterAI](https://github.com/netease-youdao/LobsterAI)**

---

## 📌 今日速览

LobsterAI 在过去 24 小时呈现**中等活跃的收尾整理态势**。PR 侧共 12 条更新，其中 11 条已合并/关闭，1 条仍开放（[#2234](https://github.com/netease-youdao/LobsterAI/pull/2234)），表明维护者持续在清理积压并推进发版流程。Issues 侧 4 条全部关闭，且均为早期（4 月）标记为 stale 的功能请求。值得注意的是，**多份关键 PR 均围绕 DeepSeek 缓存命中率与子 agent 调度机制展开**，显示出对长会话性能与多 agent 协同稳定性的重点投入。整体项目健康度良好，处于"修复收尾 + 体验打磨"阶段。

---

## 🚀 版本发布

⚠️ **今日无新版本发布**，但 [PR #2416](https://github.com/netease-youdao/LobsterAI/pull/2416)（`Release/2026.7.31`）已于昨日合并，预示 `2026.7.31` 版本即将发布。该 Release 涉及 `area: docs / main / openclaw` 三大模块，详情尚未在摘要中展开，建议关注发布说明以确认是否包含破坏性变更。

---

## 📈 项目进展

### 关键合并 PR（按重要性排序）

| PR | 主题 | 影响力 |
|---|---|---|
| [#2413](https://github.com/netease-youdao/LobsterAI/pull/2413) | 修复 openclaw 实时提示词中 tool-result 历史跨轮次的字节稳定性 | ⭐⭐⭐ 高 |
| [#2415](https://github.com/netease-youdao/LobsterAI/pull/2415) | 移除实时 tool-result 提示词投影中的聚合字符上限 | ⭐⭐⭐ 高 |
| [#2414](https://github.com/netease-youdao/LobsterAI/pull/2414) | 修复 cowork 侧聊工具协议泄漏问题 | ⭐⭐ 中 |
| [#2417](https://github.com/netease-youdao/LobsterAI/pull/2417) | sites 模块复制成功反馈 | ⭐⭐ 中 |
| [#1321](https://github.com/netease-youdao/LobsterAI/pull/1321) | 修复切换设置标签时遮罩未关闭的问题 | ⭐⭐ 中 |
| [#2416](https://github.com/netease-youdao/LobsterAI/pull/2416) | 2026.7.31 版本发版 PR | ⭐⭐ 中 |

### 🌟 性能关键修复（强烈建议关注）

**[#2413](https://github.com/netease-youdao/LobsterAI/pull/2413) 与 [#2415](https://github.com/netease-youdao/LobsterAI/pull/2415) 共同解决了一个严重的性能回归问题**：

- **背景**：实时提示词投影对 tool-result 历史应用了固定的 4 倍聚合字符上限，每次新增 tool 结果都会重写已缓存的历史段落。
- **影响**：DeepSeek 长会话的**前缀缓存命中率从约 100% 跌至约 57%**，显著增加了延迟与成本。
- **修复**：实时请求传入 `aggregateMaxCharsOverride=null`，让未变更的历史保持字节稳定。
- **意义**：这是过去 24 小时项目最大的实质性进展，对依赖长会话与 DeepSeek 后端的用户体验提升明显。

### 体验打磨

- [#2417](https://github.com/netease-youdao/LobsterAI/pull/2417)：站点 URL 与分享码复用对话复制图标与交互一致性。
- [#2414](https://github.com/netease-youdao/LobsterAI/pull/2414)：清理侧聊结果中的 provider 工具调用标记，返回稳定引导文案。
- [#1321](https://github.com/netease-youdao/LobsterAI/pull/1321)：修复设置页切换标签时遮罩层滞留导致页面"看似只读"的 Bug。

---

## 🔥 社区热点

| 主题 | 链接 | 评论数 / 👍 | 讨论焦点 |
|---|---|---|---|
| Antigravity OAuth 集成 | [PR #172](https://github.com/netease-youdao/LobsterAI/pull/172) | - / 👍0 | 新 provider 接入与代理链路兼容性 |
| 表格长文本截断与 hover 展示 | [Issue #1311](https://github.com/netease-youdao/LobsterAI/issues/1311) | 2 / 👍0 | 表格单元格内的换行/标签保留与全文本可访问性 |
| 侧边栏可拖拽宽度 | [Issue #1314](https://github.com/netease-youdao/LobsterAI/issues/1314) / [PR #1315](https://github.com/netease-youdao/LobsterAI/pull/1315) | 2 / 👍0 | 多端适配与会话标题显示 |
| 快捷键 kbd 可视化 | [Issue #1317](https://github.com/netease-youdao/LobsterAI/issues/1317) / [PR #1318](https://github.com/netease-youdao/LobsterAI/pull/1318) | 2 / 👍0 | 新用户快捷键发现成本 |
| 会话列表骨架屏 | [Issue #1319](https://github.com/netease-youdao/LobsterAI/issues/1319) / [PR #1320](https://github.com/netease-youdao/LobsterAI/pull/1320) | 2 / 👍0 | "加载中"与"空状态"的视觉区分 |

> 📊 **诉求分析**：今日讨论热点集中在**UI 体验细节**——可发现性（快捷键可见）、可适应性（侧边栏宽度）、加载感知（骨架屏）、内容可访问性（表格 hover）。这些都是新用户在初次接触产品时的关键体验节点，体现了社区从"功能可用"向"体验优雅"的关注升级。

---

## 🐛 Bug 与稳定性

按严重程度排序：

| 等级 | 问题 | 状态 |
|---|---|---|
| 🔴 **严重** | DeepSeek 长会话前缀缓存命中率从 ~100% 跌至 ~57%（因 tool-result 聚合 cap 重写历史） | ✅ 已修复（[#2413](https://github.com/netease-youdao/LobsterAI/pull/2413) + [#2415](https://github.com/netease-youdao/LobsterAI/pull/2415)） |
| 🟠 **中高** | sessions_yield 后子 agent 完成事件无法驱动父 agent 继续执行 | ⏳ **未合并**（[PR #2234](https://github.com/netease-youdao/LobsterAI/pull/2234) 仍 OPEN） |
| 🟡 **中等** | cowork 侧聊工具协议标记泄漏至用户视图 | ✅ 已修复（[#2414](https://github.com/netease-youdao/LobsterAI/pull/2414)） |
| 🟡 **中等** | 设置页切换标签时遮罩层（memory editor / model connection-test）未关闭，导致点击穿透失效 | ✅ 已修复（[#1321](https://github.com/netease-youdao/LobsterAI/pull/1321)，修复 #1307） |

> ⚠️ **维护者警示**：[PR #2234](https://github.com/netease-youdao/LobsterAI/pull/2234) 是当前唯一仍 OPEN 的 PR，已被标记 stale，涉及多 agent 并发 finalization 核心逻辑，建议尽快 review。

---

## 💡 功能请求与路线图信号

昨日关闭的 4 条 Issues 全部为功能增强请求：

| 需求 | 对应实现 | 路线图判断 |
|---|---|---|
| 拖拽调整侧边栏宽度（[Issue #1314](https://github.com/netease-youdao/LobsterAI/issues/1314)） | ✅ [PR #1315](https://github.com/netease-youdao/LobsterAI/pull/1315) 已就绪 | 极有可能进入下一版本 |
| 侧边栏按钮显示 kbd 快捷键提示（[Issue #1317](https://github.com/netease-youdao/LobsterAI/issues/1317)） | ✅ [PR #1318](https://github.com/netease-youdao/LobsterAI/pull/1318) 已就绪 | 极有可能进入下一版本 |
| 会话列表骨架屏（[Issue #1319](https://github.com/netease-youdao/LobsterAI/issues/1319)） | ✅ [PR #1320](https://github.com/netease-youdao/LobsterAI/pull/1320) 已就绪 | 极有可能进入下一版本 |
| 表格长文本截断 + hover 全文本（[Issue #1311](https://github.com/netease-youdao/LobsterAI/issues/1311)） | ❌ 暂无对应 PR | 待认领 |

**路线图信号**：3 条 UI 体验类需求已"Issue + PR"配对成熟，仅缺最终 review/合并动作，预计会作为下个版本的"体验打磨"批次集中合入。表格长文本 hover 是当前唯一尚未实现的需求，建议维护者优先指派。

---

## 💬 用户反馈摘要

从 Issues 评论中提炼的真实用户声音：

- **关于应用启动体验**（[#1319](https://github.com/netease-youdao/LobsterAI/issues/1319)）：用户明确反馈"看到'暂无历史记录'的空状态闪烁，甚至误以为历史记录丢失"——说明当前初始化逻辑的 UX 边界不清晰，影响首次印象。
- **关于快捷键发现性**（[#1317](https://github.com/netease-youdao/LobsterAI/issues/1317)）：用户认为"新用户往往需要进入设置页才能发现这些快捷键，发现成本高"——反映新用户引导（onboarding）仍是短板。
- **关于侧边栏宽度**（[#1314](https://github.com/netease-youdao/LobsterAI/issues/1314)）：用户抱怨"小屏用户被挤压，大屏用户希望拓宽"，且"会话标题过长时固定宽度导致截断"——典型多端适配诉求。
- **关于表格展示**（[#1311](https://github.com/netease-youdao/LobsterAI/issues/1311)）：用户希望"换行展示带原始标签"+"hover 展示全文"——表明 AI 输出（含 HTML 标签的 Markdown）的渲染细节影响专业用户判断。

> 📈 **满意度信号**：本次 4 条 Issue 均带详细截图、复现步骤与建议方案（来自贡献者 MaoQianTu、Cathylkx），属于高质量反馈，社区参与成熟度高。

---

## 📋 待处理积压

### 🔴 紧急（建议本周处理）

- **[PR #2234](https://github.com/netease-youdao/LobsterAI/pull/2234)** — `fix(openclaw): cron yield descendant finalization`
  - **状态**：OPEN，已标记 stale
  - **重要性**：涉及多 agent 并发执行核心逻辑，覆盖普通会话并行、cron 并行、cron 串行三种子 agent 场景
  - **风险**：若未及时合并，可能在生产环境引发父 agent 提前终止的隐患
  - **建议**：维护者优先 review 是否可合入 `2026.7.31` 或下一个小版本

### 🟡 关注（用户体验缺口）

- **[Issue #1311](https://github.com/netease-youdao/LobsterAI/issues/1311)** — 表格内容换行与长文本 hover 展示
  - **状态**：已关闭，但**无对应实现 PR**
  - **建议**：如需求仍有效，应重新开启并指派

### 🟢 历史积压清理记录

昨日一次性关闭了 4 条 stale Issues（均创建于 2026-04-02）与 6 条 stale PRs（均创建于 2026-04-02），说明维护者执行了**季度级 stale 标记清理**，仓库活跃度信号清晰。

---

## 📊 总结

LobsterAI 今日整体处于**"高优先级 bug 修复 + UI 体验打磨 + stale 积压清理"**的三轨并行阶段。最值得关注的进展是 DeepSeek 缓存命中率的性能回归被修复，这是对生产用户实际体验影响最大的改动。建议维护者重点跟进 [#2234](https://github.com/netease-youdao/LobsterAI/pull/2234) 的 review 与 `2026.7.31` Release 的发布说明完善。

*报告生成时间：2026-08-01 ｜ 数据来源：GitHub REST API*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报
**日期：2026-08-01**

---

## 1. 今日速览

Moltis 今日活跃度处于**中等偏高**水平，24 小时内有 2 个 Issue 状态变化、6 个 PR 持续推进，**无新版本发布**。社区关注度集中在**安全加固**和**用户体验改进**两大方向：多个 PR 集中修复了网关配对签名验证、模型/zip 路径遍历、频道权限隔离等关键安全问题，体现出项目对安全态势的主动响应；同时，Web 端 Markdown 复制与会话导出功能被顺利合并落地，回应了早期用户需求。整体而言，项目处于"安全收敛 + 功能打磨"的稳健推进阶段。

---

## 2. 版本发布

⚠️ 今日无新版本发布。安全相关 PR（#1179、#1180、#1170）合并后，建议关注后续的 patch 版本发布，建议用户持续追踪 main 分支或升级提示。

---

## 3. 项目进展

### ✅ 已合并/关闭的重要 PR

**PR #1176 — `feat(web): add Markdown copy and session export`** （已关闭）
- **链接**：https://github.com/moltis-org/moltis/pull/1176
- **价值**：在 Web 端复制助手回复时保留原始 Markdown 格式（不再被模型元数据污染），并新增会话级 **"Save as Markdown"** 动作，可加载完整分页历史并导出用户/助手文本及图片引用。
- **意义**：直接兑现了 Issue #1131 的功能诉求，提升了长会话的导出与二次使用体验。

**PR #1168 — `feat(nostr): add NIP-29 group chat support for Buzz channels`** （已关闭）
- **链接**：https://github.com/moltis-org/moltis/pull/1168
- **价值**：为 `moltis-nostr` 模块新增 NIP-29（NIP-42 鉴权的群聊）协议支持，使 Moltis 可对接 Block 开源的 Buzz（基于 Nostr 的自托管工作空间），扩展了智能体协作场景。

### 🔄 持续推进中

- **PR #1170**（channel 操作者权限隔离）：重新设计频道发送者的访问与特权边界，已更新至 8 月 1 日。
- **PR #1179**（node pairing 签名验证）：绑定 `node.pair.verify` 到服务端发放的 pending request，阻止外部密钥注入。
- **PR #1180**（模型与 zip 路径加固）：修复任意文件写入潜在的 RCE 风险。
- **PR #1158**（zvec 向量数据库 memory backend）：基于 zvec + redb 的实验性 memory 后端，以 cargo feature `zvec` 启用。

---

## 4. 社区热点

| 排名 | 主题 | 类型 | 互动度 | 链接 |
|------|------|------|--------|------|
| 🥇 | Markdown 复制与导出功能落地 | PR #1176 / Issue #1131 | 👍 1 | [#1176](https://github.com/moltis-org/moltis/pull/1176) · [#1131](https://github.com/moltis-org/moltis/issues/1131) |
| 🥈 | 群聊能力扩展（NIP-29） | PR #1168 | 高关注 | [#1168](https://github.com/moltis-org/moltis/pull/1168) |
| 🥉 | 安全加固集中提交 | PR #1179 / #1180 | 维护者驱动 | [#1179](https://github.com/tpull#1179) · [#1180](https://github.com/moltis-org/moltis/pull/1180) |

**诉求分析**：用户对**数据可携带性**（Markdown 导出）和**多通道协作**（NIP-29）的需求得到回应；维护者层面则在主动加固安全，体现了项目对生产化部署的重视。

---

## 5. Bug 与稳定性

| 严重度 | Issue | 描述 | 是否有 Fix PR |
|--------|-------|------|---------------|
| 🟡 中 | [#1181](https://github.com/moltis-org/moltis/issues/1181) — GPT 5.6 Luna 兼容性问题 | 用户报告在与 GPT 5.6 Luna 模型交互时出现异常，需更多 session context 复现 | ❌ 暂无 |
| 🔴 高（已修复） | PR #1179（node pairing 签名验证） | 节点配对流程允许调用者自传密钥/challenge，存在认证绕过风险 | ✅ 修复 PR 待合并 |
| 🔴 高（已修复） | PR #1180（路径遍历） | 恶意 zip 或 HuggingFace 仓库可写入 config/credentials/script，存在 RCE 风险 | ✅ 修复 PR 待合并 |
| 🟠 中（已修复） | PR #1170（权限边界） | 频道 senders 通过 allowlist 后可执行 `/sh` 命令等特权操作 | ✅ 修复 PR 待合并 |

**健康度**：三个高/中危安全问题由外部贡献者主动提出并附带修复 PR，是较为理想的"安全协同"模式，但修复尚未合并，**建议维护者优先 review #1179 与 #1180**。

---

## 6. 功能请求与路线图信号

| 需求 | 来源 | 当前状态 | 路线图可能性 |
|------|------|----------|--------------|
| 复制 / 导出 Markdown | Issue #1131（👍 1） | ✅ 已通过 PR #1176 落地 | **已纳入** |
| 群聊 / 工作空间级协作 | PR #1168（NIP-29） | ✅ 已合并 | **已纳入** |
| 多样化向量数据库 memory 后端 | PR #1158（zvec） | 🧪 实验性，默认 `full` feature 启用 | **观察期**：质量达标后可能正式纳入 |
| 操作者权限列表 | PR #1170 | 🔄 审查中 | **下一版本**（与安全 hardening 同步） |

**信号解读**：路线图明显向**安全 + 互操作 + 导出可用性**三角收敛；zvec 后端若稳定，将进一步丰富 memory backend 生态。

---

## 7. 用户反馈摘要

- **Issue #1181（GPT 5.6 Luna）**：用户已按规范完成 preflight checklist（搜索 / 最新版本 / session context），表明社区贡献门槛机制运转良好；等待官方 triage 与模型适配进展。
- **Issue #1131（Markdown 导出）**：用户截图对话中包含代码片段，复制为纯文本导致格式丢失，**痛点清晰且具代表性**；该诉求在约 6 周内（2026-06-17 → 2026-07-30）从提出到合并，**响应速度值得肯定**。
- **PR #1179 / #1180 作者反馈**："I'd like to use Moltis, but I've got a couple of security fixes I'd like to get in before doing so." —— 揭示了潜在用户因安全问题**对生产部署持观望态度**，安全 hardening 将直接转化为实际采用率。

---

## 8. 待处理积压

| 编号 | 类型 | 状态 | 距今 | 链接 |
|------|------|------|------|------|
| #1170 | PR（权限边界） | OPEN | 6 天 | [查看](https://github.com/moltis-org/moltis/pull/1170) |
| #1158 | PR（zvec backend） | OPEN | 15 天 | [查看](https://github.com/moltis-org/moltis/pull/1158) |
| #1181 | Issue（GPT 5.6 Luna bug） | OPEN，新开 | < 1 天 | [查看](https://github.com/moltis-org/moltis/issues/1181) |

**维护者建议**：
1. 🔥 **优先合并 #1179 与 #1180**：两个安全修复直接关系项目可信度与潜在用户采用。
2. 🔥 **加速 #1170 review**：与上述安全修复同属正确性边界，统一合并可形成"安全版本"发布包。
3. 🧪 **评估 #1158**：zvec 后端若维护成本可控，建议在下一个 minor 版本以 feature flag 形式发布供社区测试。

---

**报告生成时间**：2026-08-01 · **数据源**：GitHub API · **项目地址**：https://github.com/moltis-org/moltis

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目日报 | 2026-08-01

> 数据周期：过去 24 小时｜统计来源：GitHub Issues & Pull Requests
> 注：仓库 `agentscope-ai/CoPaw` 在 issues 引用中显示为 QwenPaw，以下统一称 "CoPaw"。

---

## 1. 今日速览

CoPaw 项目进入 **高强度维护与稳定性修复阶段**：过去 24 小时共产生 **20 条 Issue 更新**（14 条活跃/新开、6 条关闭）和 **41 条 PR 更新**（28 条待合并、13 条合并/关闭），活跃度显著高于日常基线，但 **无新版本发布**。当前热度主要由 **agentscope 2.0.4.post1 升级后的连锁兼容问题** 驱动，已开多条 PR 集中修复；同时 `execute_shell_command` 的多项缺陷（UI 冻结、输出截断、超时绕过）成为社区讨论焦点。整体看项目处于"修 bug 优先、暂缓发版"的节奏，健康度良好但版本节奏放缓。

---

## 2. 版本发布

⚠️ **今日无新版本发布**。上一个版本为 v2.0.1，已知与 `agentscope==2.0.4.post1` 存在兼容性问题（详见 #6612），建议维护者评估是否需要快速发布补丁版本。

---

## 3. 项目进展（已合并/关闭的重要 PR）

以下 6 条 PR 已在过去 24 小时内合并或关闭，对应功能/修复已落地：

| PR | 标题 | 修复的 Issue | 意义 |
|---|---|---|---|
| [#6573](https://github.com/agentscope-ai/QwenPaw/pull/6573) | fix(audio): 恢复频道音频消息转写 | #6544 | 修复 Feishu 等频道音频消息 AgentScope 2.0 迁移后静默失败问题 |
| [#6592](https://github.com/agentscope-ai/QwenPaw/pull/6592) | fix(memory): 在 Scroll 上下文淘汰前刷新 Auto-Memory | #6555 | 防止早期会话事件在上下文压缩后永久丢失 |
| [#6602](https://github.com/agentscope-ai/QwenPaw/pull/6602) | Fix: 会话数据完整性（session integrity） | #6558 | 解决 Coding/Chat 模式切换时消息丢失、回复重渲染问题 |
| [#6606](https://github.com/agentscope-ai/QwenPaw/pull/6606) | fix(read_file): 接受数字字符串行范围 | — | 修复 `read_file` 行号范围解析的鲁棒性 |
| [#6604](https://github.com/agentscope-ai/QwenPaw/pull/6604) | docs(memory): 解释 ReMe 自演化知识库 | — | 完善文档：补充 capture/index/consolidate/recall 生命周期说明 |
| [#6563](https://github.com/agentscope-ai/QwenPaw/issues/6563) | CI: `real-behavior-proof` 工作流阻断所有 fork PR | — | 解除贡献者无法通过 CI 的阻塞性问题 |

**总体推进评估**：本轮修复主要集中在 **会话/上下文层（memory + session integrity + audio transcription）**，表明项目正在系统性地补齐 2.0 升级后的"补丁期"。值得肯定的是，Issue → Fix PR 的响应链路已经形成（#6555→#6592/#6564、#6588→#6609、#6589/#6608→#6610、#6612→#6615），平均响应时间小于 24 小时。

---

## 4. 社区热点（讨论最活跃的议题）

### 🔥 讨论热度排行

1. **[#6537](https://github.com/agentscope-ai/QwenPaw/issues/6537)** – Skill 标签重启后消失（#3270 的回归）｜10 条评论
   - `skill.json` 通过 API 保存正确，但启动或构建时 manifest 调和过程会丢失标签。该问题被视为回归，社区情绪偏负面。
2. **[#6601](https://github.com/agentscope-ai/QwenPaw/issues/6601)** – CoPaw 不报空响应错误｜5 条评论
   - 框架层问题：长会话因工具调用累积逼近上下文窗口后，模型空响应却无报错，导致用户长时间对话彻底失声。
3. **[#6563](https://github.com/agentscope-ai/QwenPaw/issues/6563)** – CI 阻断 fork PR｜5 条评论【已关闭】
   - 阻塞所有外部贡献者，影响开源协作活力。
4. **[#6588](https://github.com/agentscope-ai/QwenPaw/issues/6588)** – `spawn_subagent` 单任务模式因 `batch` 必填不可用｜4 条评论
5. **[#6083](https://github.com/agentscope-ai/QwenPaw/issues/6083)** – Desktop 窗口增加工作区产出物快捷访问｜4 条评论
6. **[#6160](https://github.com/agentscope-ai/QwenPaw/issues/6160)** – 为 CoPaw 配备独立 Python 运行环境｜4 条评论

### 热点背后的诉求
- **稳定性焦虑**：高居榜首的两个 issue 都指向"静默失败"——标签丢失、空响应不报错，用户最担心"看不到的错误"。
- **跨平台环境可控性**：Python 环境隔离（#6160）、Windows 平台行为（#6589/#6608/#6203）反映 Windows/非标准 Python 环境用户基数大，但配置兼容性不足。
- **桌面 UX 体验升级**：工作区一键访问（#6083）、全局快捷键（#6607 即将合并）、可折叠思考链（#6260）成为呼声最高的体验改进方向。

---

## 5. Bug 与稳定性

按严重程度排列：

### 🔴 P0 — 核心功能不可用 / 数据损坏

| Issue | 描述 | Fix PR 状态 |
|---|---|---|
| [#6612](https://github.com/agentscope-ai/QwenPaw/issues/6612) | CoPaw 2.0.1 与 agentscope 2.0.4.post1 不兼容：主动响应崩溃（Msg.content 类型）+ 工具权限死锁 | ✅ [#6615](https://github.com/agentscope-ai/QwenPaw/pull/6615) 待合并 |
| [#6520](https://github.com/agentscope-ai/QwenPaw/issues/6520) | `agent.json` 系统性损坏：BOM、缺引号、双重编码，导致系统完全失能 | ✅ [#6528](https://github.com/agentscope-ai/QwenPaw/pull/6528) 待合并 |
| [#6608](https://github.com/agentscope-ai/QwenPaw/issues/6608) | 长时间 shell 命令绕过 `shell_command_timeout` 并永久阻塞飞书会话（孤儿子进程、无 per-channel 总超时） | ✅ [#6610](https://github.com/agentscope-ai/QwenPaw/pull/6610) 待合并 |
| [#6614](https://github.com/agentscope-ai/QwenPaw/issues/6614) | 微信 cron 定时推送"显示 success 但从未送达"（ret=-2 上下文令牌失效），已浪费 ~44M tokens | ❌ 暂无 Fix PR |

### 🟠 P1 — 严重性能/UX 退化

| Issue | 描述 | Fix PR 状态 |
|---|---|---|
| [#6537](https://github.com/agentscope-ai/QwenPaw/issues/6537) | Skill 标签重启消失（回归 #3270） | ❌ 暂无 PR |
| [#6589](https://github.com/agentscope-ai/QwenPaw/issues/6589) | `execute_shell_command` 数万行输出导致 UI 完全冻结 | ✅ [#6610](https://github.com/agentscope-ai/QwenPaw/pull/6610) 待合并（与 #6608 同 PR） |
| [#6588](https://github.com/agentscope-ai/QwenPaw/issues/6588) | `spawn_subagent` 单任务模式因 schema `batch` 必填不可用 | ✅ [#6609](https://github.com/agentscope-ai/QwenPaw/pull/6609) 待合并 |
| [#6601](https://github.com/agentscope-ai/QwenPaw/issues/6601) | 空响应不报错，长会话可能"彻底失去响应" | ❌ 暂无 PR |
| [#6544](https://github.com/agentscope-ai/QwenPaw/issues/6544) | 飞书频道音频消息静默转写失败 | ✅ [#6573](https://github.com/agentscope-ai/QwenPaw/pull/6573) **已合并** |

### 🟡 P2 — 体验/小缺陷

| Issue | 描述 | Fix PR 状态 |
|---|---|---|
| [#6529](https://github.com/agentscope-ai/QwenPaw/issues/6529) | ACP `new_session` 响应缺 `models` 字段，客户端无法发现模型 | ❌ 已关闭但状态待确认 |
| [#6555](https://github.com/agentscope-ai/QwenPaw/issues/6555) | Dream 进程漏掉早期会话事件 | ✅ [#6564](https://github.com/agentscope-ai/QwenPaw/pull/6564) + [#6592](https://github.com/agentscope-ai/QwenPaw/pull/6592) **已合并** |
| [#6558](https://github.com/agentscope-ai/QwenPaw/issues/6558) | 多会话 UI 数据完整性问题 | ✅ [#6602](https://github.com/agentscope-ai/QwenPaw/pull/6602) **已合并** |
| [#6549](https://github.com/agentscope-ai/QwenPaw/issues/6549) | Desktop 输入框被遮挡、发送按钮需滚动 | ✅ 已关闭 |
| [#6587](https://github.com/agentscope-ai/QwenPaw/issues/6587) | 桌面应用名 "CoPaw Desktop" 建议改为 "CoPaw" | ❌ 暂无 PR |

**修复覆盖率**：今日 13 条 bug 类 Issue 中 **7 条已有 Fix PR**（含已合并），覆盖率约 **54%**，剩余 6 条（含 #6614、#6537、#6601、#6529、#6587 等）仍待维护者响应。

---

## 6. 功能请求与路线图信号

### 用户呼声（按 Issue 评论数排序）

| 优先级 | Feature | Issue | 信号强度 |
|---|---|---|---|
| ⭐⭐⭐ | 折叠"思考过程/工具调用"，结果前置 | [#6260](https://github.com/agentscope-ai/QwenPaw/issues/6260) | 👍 1 赞 + 多条评论，趋势明显 |
| ⭐⭐⭐ | Desktop 工作区产出物快捷访问按钮 | [#6083](https://github.com/agentscope-ai/QwenPaw/issues/6083) | 多用户共鸣 |
| ⭐⭐⭐ | 独立 Python 运行环境 | [#6160](https://github.com/agentscope-ai/QwenPaw/issues/6160) | Conda/多版本用户痛点 |
| ⭐⭐ | `execute_shell_command` 大输出自动写文件或流式读取 | [#6512](https://github.com/agentscope-ai/QwenPaw/issues/6512) | 与 #6589 形成组合需求 |
| ⭐⭐ | 统一清理页面（会话/记忆/缓存/工作区） | [#6593](https://github.com/agentscope-ai/QwenPaw/issues/6593) | 长期使用场景 |
| ⭐ | 桌面应用重命名 | [#6587](https://github.com/agentscope-ai/QwenPaw/issues/6587) | 体验小改 |

### 路线图预判（

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目日报 · 2026-08-01

> 数据来源：GitHub Issues & Pull Requests · 报告生成窗口：过去 24 小时

---

## 一、今日速览

- **活跃度高位运行**：过去 24 小时内 50 条 Issues 更新（45 活跃 / 5 关闭），50 条 PR 更新（37 待合并 / 13 关闭），整体处于典型的高强度开发节奏。
- **RFC 讨论密集**：安全、内存、插件运行时等长期架构议题仍是焦点，#9048（14 评论）、#9127（11 评论）等核心 RFC 持续吸引社区深度参与。
- **Bug 修复有进展**：今日关闭两个高影响 Bug —— Signal/Voice Call 通道空凭据导致的 supervisor crashloop（#6724）、Fedora 上 Landlock 阻断 shell 工具（#8973），体现"修复优先"的维护姿态。
- **无新版本发布**：当前阶段以 RFC 收敛与代码合入为主，尚未进入新的发版窗口。
- **健康度判断**：★★★★☆ — Issue/PR 吞吐正常、关闭率合理（关闭/活跃 ≈ 26%）、但部分 P1 安全相关 PR 仍处 `stale-candidate` 状态，需关注（详见第八节）。

---

## 二、版本发布

⚪ 今日无新版本发布。

---

## 三、项目进展

### ✅ 今日关闭/合入的 PR（推进项目向前）

| PR | 标题 | 作者 | 规模 | 影响 |
|----|------|------|------|------|
| [#9279](https://github.com/zeroclaw-labs/zeroclaw/pull/9279) | fix(zerocode): measure picker modals by display width | Audacity88 | XS | 修复 ZeroCode TUI 中 PickerModal 按显示单元计算宽度（而非 Unicode 标量），含 CJK 回归测试 |
| [#9292](https://github.com/zeroclaw-labs/zeroclaw/pull/9292) | fix(zerocode): keep session picker scroll offset for mouse hit-testing | minato32 | XS | 修复 TUI 会话选择器滚动偏移丢失导致的鼠标点击命中错误 |
| [#8438](https://github.com/zeroclaw-labs/zeroclaw/pull/8438) | feat(cron): add shell_output_format config for raw stdout output | Project516 | XL | cron 任务新增 `shell_output_format` 选项，支持原始 stdout 输出 |

### 🐛 今日关闭的 Issue（问题得到解决）

| Issue | 标题 | 严重度 | 链接 |
|-------|------|--------|------|
| [#6724](https://github.com/zeroclaw-labs/zeroclaw/issues/6724) | Signal/Voice Call 通道空凭据导致 supervisor crashloop（每 2 秒重启） | P3, risk:high | [→](https://github.com/zeroclaw-labs/zeroclaw/issues/6724) |
| [#8973](https://github.com/zeroclaw-labs/zeroclaw/issues/8973) | Fedora 上 Landlock 沙箱阻断 shell 访问 `/dev/null` | P1, risk:high | [→](https://github.com/zeroclaw-labs/zeroclaw/issues/8973) |

**整体进度评估**：今日项目稳步推进，主要在 ZeroCode TUI 体验、cron 配置灵活性、通道稳定性三个方向取得可量化进展。

---

## 四、社区热点 🔥

### 讨论最活跃的 Issues（按评论数排序）

1. **#9048 · 14 评论** — [RFC] 将会话历史与智能体策划的长期记忆分离
   - 🏷️ `enhancement` `memory` `runtime` `priority:p2` `risk:high`

</details>

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*