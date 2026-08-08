# OpenClaw 生态日报 2026-08-08

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-08-08 01:07 UTC

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

**日期：2026-08-08**
**仓库：openclaw/openclaw**

---

## 1. 今日速览

OpenClaw 今日维持极高的开发活跃度，过去 24 小时内 Issues 与 PRs 各流出近 500 条记录，其中 Issues 新开/活跃 470 条、关闭仅 30 条，PRs 待合并 411 条、合并/关闭 89 条——**活跃积压与合并比例失衡严重，新问题增速远高于关闭速度**。当日无新版本发布，0 个 Releases，但社区讨论热度持续集中于 **2026.7.2 beta 系列的多项严重回归**（启动慢、嵌入式 runner token 膨胀、DB schema 迁移失败、HTTP 端口不可用）。Codex worker 稳定性加固冲刺仍在进行，叠加 MCP 工具注入失败、聊天分支误判、记忆索引失效等老问题。**整体处于"功能快速叠加 + 稳定性警报"的高风险窗口**，维护者响应压力大。

---

## 2. 版本发布

⚠️ **今日无新版本发布。**

社区当前实际部署版本范围横跨 **2026.4.x → 2026.7.2-beta.7**，多个 P0/P1 问题直接绑定到 2026.7.2-beta 的回归。建议追踪者在合并以下 PR 之前**避免在生产环境升级到 2026.7.2**：
- [#119087](https://github.com/openclaw/openclaw/issues/119087) — Gateway 冷启动回归 ~2.5x
- [#118772](https://github.com/openclaw/openclaw/issues/118772) — 嵌入式 runner sessionEntry.totalTokens 虚高导致过早压缩
- [#119263](https://github.com/openclaw/openclaw/issues/119263) — Agent DB v14→v15 迁移失败，gateway 拒绝启动

---

## 3. 项目进展

### 3.1 今日已合并/关闭的重要 PR 与 Issue

| 编号 | 标题 | 状态 | 影响 |
|---|---|---|---|
| [#119778](https://github.com/openclaw/openclaw/pull/119778) | fix(gateway): return retryable chat send error during transcript rebuild | 已开 (ClawSweeper autogen) | 修复 transcript 重建期间 chat.send 错误降级问题（[#119754](https://github.com/openclaw/openclaw/issues/119754)）|
| [#116277](https://github.com/openclaw/openclaw/issues/116277) | DeepSeek v4 Flash silent reply failure | **CLOSED** | 修复 129 评论高热度故障 |
| [#92884](https://github.com/openclaw/openclaw/issues/92884) | config validate rejects plugin-owned channel schema extensions | **CLOSED** | 放宽 plugin channel schema 校验 |
| [#120400](https://github.com/openclaw/openclaw/pull/120400) | fix(agents): carry complete tool args from content_block_start input | **CLOSED** | Discord 工具行渲染修复 |

### 3.2 重要里程碑推进

- **Codex session continuity** ：[#120405](https://github.com/openclaw/openclaw/pull/120405) 修复跨对话冷重启时丢失会话级文件变更审批的痛点（关联 [#115089](https://github.com/openclaw/openclaw/issues/115089)）。
- **Codex 并发 native hooks 内存优化**：[#120340](https://github.com/openclaw/openclaw/pull/120340) 解决冷 relay 进程耗尽宿主机内存的问题（关闭 [#119565](https://github.com/openclaw/openclaw/issues/119565)）。
- **Branch-switch false positive**：[#116382](https://github.com/openclaw/openclaw/pull/116382) 修复 Control UI 因后台 append 误判"切换了分支"，关闭 [#115700](https://github.com/openclaw/openclaw/issues/115700)。
- **CI lint 回归修复**：连续 [#120399](https://github.com/openclaw/openclaw/pull/120399)、[#120401](https://github.com/openclaw/openclaw/pull/120401) 修复嵌入式 runner registry 测试超 lint 行限制（[CI run #93028604134](https://github.com/openclaw/openclaw/actions/runs/31228750361/job/93028604134)）。
- **空候选模型 fallback**：[#120148](https://github.com/openclaw/openclaw/pull/120148) 修复模型 fallback 链中"空完成"被错误标记为成功的问题（关闭 [#120132](https://github.com/openclaw/openclaw/issues/120132)）。
- **Browser relay 健壮性**：[#120283](https://github.com/openclaw/openclaw/pull/120283) 校验 browser extension WS 帧，防止畸形帧导致 gateway 进程崩溃。

### 3.3 整体推进度评估

**过去 24 小时合并/关闭约 119 条（89 PR + 30 Issue）**，其中真正推动体验修复的高价值 PR 约 8-10 条；多数 PR 仍处于 "📣 needs proof / ⏳ waiting on author" 状态，**实际尚未进入 review 周期**。维护者日吞吐已饱和。

---

## 4. 社区热点

### 4.1 评论数最多的 Issues（Top 10）

| 排名 | 编号 | 评论数 | 👍 | 主题 |
|---|---|---|---|---|
| 1 | [#116277](https://github.com/openclaw/openclaw/issues/116277) | **129** | 0 | DeepSeek v4 Flash 静默回复失败（已关闭）|
| 2 | [#116201](https://github.com/openclaw/openclaw/issues/116201) | 59 | 0 | Realtime voice 资源上界无硬边界 |
| 3 | [#7707](https://github.com/openclaw/openclaw/issues/7707) | 29 | 0 | Memory Trust Tagging by Source（长期未解）|
| 4 | [#77598](https://github.com/openclaw/openclaw/issues/77598) | 23 | 1 | Pash dev agent 行为长时观察笔记 |
| 5 | [#91588](https://github.com/openclaw/openclaw/issues/91588) | 22 | 1 | Gateway 内存泄漏 350MB→15.5GB / OOM |
| 6 | [#22438](https://github.com/openclaw/openclaw/issues/22438) | 18 | 0 | 分层 bootstrap 文件加载 |
| 7 | [#99551](https://github.com/openclaw/openclaw/issues/99551) | 16 | 1 | Codex worker runaway hardening sprint tracker |
| 8 | [#78308](https://github.com/openclaw/openclaw/issues/78308) | 16 | 1 | MCP 工具调用 channel-mediated 审批（Feature）|
| 9 | [#101290](https://github.com/openclaw/openclaw/issues/101290) | 14 | 1 | CLI startup preflight 损坏 SQLite state DB |
| 10 | [#51429](https://github.com/openclaw/openclaw/issues/51429) | 13 | 0 | hardcode 工作路径为 `/Users/wangtao` |

### 4.2 热点诉求解读

- **模型静默失败 + 记忆/上下文管理**：社区最关注的两类痛点高度集中于"消息丢失 / 不可见失败 / 上下文管理粗放"，反映用户对**可观测性与可控性**的强烈诉求。
- **Codex worker hardening** ：[#99551](https://github.com/openclaw/openclaw/issues/99551) 作为 tracker 串联多个子 issue，表明项目已正式进入针对 Codex 集成的可靠性冲刺。
- **数据安全与隐私**：Memory Trust Tagging（[#7707](https://github.com/openclaw/openclaw/issues/7707)）、Context Provenance（[#54373](https://github.com/openclaw/openclaw/issues/54373)）等增强诉求反复被顶起，**安全分级标签是社区长期诉求**。
- **#51429 的持续讨论**：讽刺味十足的"代码被合并前居然 hardcode 了 wangtao 路径"被多次顶起，反映社区对**代码 review 流程与自动化检查**的隐性需求。

---

## 5. Bug 与稳定性

### 5.1 P0（数据丢失 / 启动阻塞）

| 编号 | 标题 | 严重程度 | 修复 PR |
|---|---|---|---|
| [#119263](https://github.com/openclaw/openclaw/issues/119263) | Agent DB v14→v15 migration fails：`no such column: entry_valid`，gateway 拒绝启动 | 🔴 release-blocker | ❌ 暂无 |
| [#118772](https://github.com/openclaw/openclaw/issues/118772) | 2026.7.1+ embedded runner sessionEntry.totalTokens 虚高，4–8% 上下文即过早 compaction（数据丢失）| 🔴 数据丢失 | ❌ 暂无 |
| [#101290](https://github.com/openclaw/openclaw/issues/101290) | CLI preflight 在 gateway 运行中损坏 live SQLite state DB（"database disk image is malformed"，macOS）| 🔴 数据丢失 | ❌ 暂无 |
| [#91588](https://github.com/openclaw/openclaw/issues/91588) | Gateway RSS 350MB→15.5GB / OOM 反复重启 | 🔴 crash-loop | ❌ 暂无 |

### 5.2 P1（功能失效 / 回归 / 安全）

| 编号 | 标题 | 回归? | 修复 PR |
|---|---|---|---|
| [#119087](https://github.com/openclaw/openclaw/issues/119087) | Gateway cold start 2.5x 回归（2026.7.1→2026.7.2-beta.7，1-vCPU 容器）| ✅ | ❌ 暂无 |
| [#117209](https://github.com/openclaw/openclaw/openclaw/issues/117209) | AuthProfileStoreUnreadable sticky — 一次 snapshot 失败后续全部失败 | — | ❌ 暂无 |
| [#119411](https://github.com/openclaw/openclaw/issues/119411) | 记忆 watcher 永不重新索引，`Dirty: no` 但索引低于磁盘 | — | ❌ 暂无 |
| [#115700](https://github.com/openclaw/openclaw/issues/115700) | chat.send 被"thread switched branches"持续拒绝（stale expectedLeafEntryId）| ✅ | ✅ [#116382](https://github.com/openclaw/openclaw/pull/116382) |
| [#116022](https://github.com/openclaw/openclaw/issues/116022) | beta.5 `/new` 重用 stable session ID 且无法恢复 retired Codex binding tombstone | — | ❌ 暂无 |
| [#98435](https://github.com/openclaw/openclaw/issues/98435) | MCP loopback transport 不自动重连，recovered=1 误导 | — | ❌ 暂无 |
| [#119565](https://github.com/openclaw/openclaw/issues/119565) | Codex 并发 native hooks 耗尽宿主机内存 | — | ✅ [#120340](https://github.com/openclaw/openclaw/pull/120340) |
| [#117609](https://github.com/openclaw/openclaw/issues/117609) | 嵌入式 assistant 阶段不重试瞬时错误（长 turn 整轮死亡）| — | 🟡 shape-clear |
| [#108379](https://github.com/openclaw/openclaw/issues/108379) | Xiaomi MiMo 重复 assistant generation（截断前多余叙述）| — | ❌ 暂无 |
| [#119754](https://github.com/openclaw/openclaw/issues/119754) | chat.send 在 transcript rebuild 时返回 INVALID_REQUEST | — | ✅ [#119778](https://github.com/openclaw/openclaw/pull/119778) |
| [#115089](https://github.com/openclaw/openclaw/issues/115089) | Codex 跨会话 cold-restart 丢失审批 | — | ✅ [#120405](https://github.com/openclaw/openclaw/pull/120405) |
| [#120132](https://github.com/openclaw/openclaw/issues/120132) | 模型 fallback 链遇到空完成被记为成功 | — | ✅ [#120148](https://github.com/openclaw/openclaw/pull/120148) |
| [#109145](https://github.com/openclaw/openclaw/issues/109145) | Gateway HTTP 监听但不接受连接（v2026.7.1-beta.5）| ✅ | ❌ 暂无 |
| [#94939](https://github.com/openclaw/openclaw/issues/94939) | 6.x state migration 让 channel conversation-store SQLite 0 字节（MS Teams）| ✅ | 🟡 linked-pr-open |
| [#116201](https://github.com/openclaw/openclaw/issues/116201) | Realtime voice 资源无硬上界 | — | ❌ 暂无 |

### 5.3 其他稳定性问题

- **Windows node.exe 进程泄漏** [#74378](https://github.com/openclaw/openclaw/issues/74378)
- **Windows vitest teardown EBUSY** [#119796](https://github.com/openclaw/openclaw/issues/119796)
- **QQ gateway heartbeat 未校验** → PR [#120279](https://github.com/openclaw/openclaw/pull/120279) 已开
- **CRON 输出未设上限** → PR [#120271](https://github.com/openclaw/openclaw/pull/120271) 已开
- **CRON 长时间 API 500 持续等待不快速失败** [#45494](https://github.com/openclaw/openclaw/issues/45494)
- **provider-payload.jsonl/cache-trace.jsonl 无界增长** [#75380](https://github.com/openclaw/openclaw/issues/75380)

> ⚠️ **结构性观察**：今日 14 个被点名的 P0/P1 Bug 中，**仅 5 个已有明确修复 PR**；DB 迁移、内存泄漏、嵌入式 runner token 计算、CLI preflight 并发写入等四个高严重度问题**均无 PR**，应优先调配维护者资源。

---

## 6. 功能请求与路线图信号

| 诉求 | Issue | 状态信号 | 纳入下版本可能性 |
|---|---|---|---|
| **Memory Trust Tagging by Source** | [#7707](https://github.com/openclaw/openclaw/issues/7707) | 创建 6 个月，仅 29 评论，长期未推进 | ⚠️ 与 RFC 契合但无 PR |
| **Context Provenance 元数据** | [#54373](https://github.com/openclaw/openclaw/issues/54373) | RFC 级提案，7 评论，PR 已 linked | 🟢 高 |
| **MCP channel-mediated 审批（consent envelope）** | [#78308](https://github.com/openclaw/openclaw/issues/78308) | 16 评论，呼声高 | 🟢 高 |
| **分阶段 bootstrap 加载** | [#22438](https://github.com/openclaw/openclaw/issues/22438) | 18 评论，PR linked | 🟡 中 |
| **Pre-reset agentic memory flush** | [#45608](https://github.com/openclaw/openclaw/issues/45608) | 11 评论、4 👍 | 🟢 高，与 compaction 机制对齐 |
| **Azure Foundry GPT Realtime Talk** | [#87325](https://github.com/openclaw/openclaw/issues/87325) | 8 评论，需产品决策 | 🟡 中 |
| **Per-model usage logging** | [#13219](https://github.com/openclaw/openclaw/issues/13219) | 7 评论，PR linked | 🟢 高 |
| **Reaction-triggered agent turns** | [#17840](https://github.com/openclaw/openclaw/issues/17840) | 6 评论，Feature | 🟡 中 |
| **Hook: before_route_inbound_message** | [#81061](https://github.com/openclaw/openclaw/issues/81061) | 7 评论、3 👍 | 🟢 高 |
| **Memory chunker 标题感知 + 实体抽取** | [#44395](https://github.com/openclaw/openclaw/issues/44395) | PR linked | 🟢 高 |
| **Schema-v1 profile requirements (claws)** | [#115962](https://github.com/openclaw/openclaw/pull/115962) | P2 大型 PR，等待作者 | 🟡 中 |
| **智能 session 自动命名** | [#99583](https://github.com/openclaw/openclaw/issues/99583) | 已有 llm-slug-generator 内置能力，6 评论 | 🟢 高（实现成本低）|
| **install policy warnings 需要 acknowledgement** | [#116489](https://github.com/openclaw/openclaw/pull/116489) | P1 大型安全 PR | 🟢 高 |
| **usage-mosaic / session-catalog 边界硬化** | [#120273](https://github.com/openclaw/openclaw/pull/120273) / [#120287](https://github.com/openclaw/openclaw/pull/120287) | 已就绪 | 🟢 高 |

**路线图信号**：下一版本将大概率聚焦 **Codex worker hardening**（[#99551](https://github.com/openclaw/openclaw/issues/99551) tracker） + **2026.7.2 回归修复**，并辅以若干低成本 but 高诉求的 feature（auto-titling、trust tagging、memory flush）。

---

## 7. 用户反馈摘要

- **"Wangtao" 事件（[#51429](https://github.com/openclaw/openclaw/issues/51429)）**：新装

---

## 横向生态对比

# AI 智能体与个人 AI 助手开源生态横向对比分析报告
**报告日期：2026-08-08 ｜ 样本：13 个项目**

---

## 1. 生态全景

当前个人 AI 助手/自主智能体开源生态呈现"**头部高活跃 + 中部稳步迭代 + 尾部静默休眠**"的三层结构。**OpenClaw 与 ZeroClaw 处于第一梯队**，单日 Issue/PR 双 50 条量级，但同时承压最重稳定性问题；**Hermes Agent、IronClaw、CoPaw 构成第二梯队**，处于密集修复与重构期；**NanoBot、NanoClaw、PicoClaw、LobsterAI 为第三梯队**，聚焦特定场景做稳健打磨。**NullClaw、TinyClaw、Moltis、ZeptoClaw 在统计窗口内完全静默**，提示生态已进入明显的优胜劣汰阶段。整体看，社区关注点从"能不能跑起来"转向"**能不能跑得稳、跑得透明、跑得可控**"。

---

## 2. 各项目活跃度对比

| 项目 | 今日 Issue (活跃/关闭) | 今日 PR (待合并/关闭) | Release | 综合健康度 | 当前阶段 |
|---|---|---|---|---|---|
| **OpenClaw** | 470 / 30 | 411 / 89 | ❌ 无 | ⚠️ 中（高活跃但积压严重） | 高风险窗口期 |
| **ZeroClaw** | 45 / 5 | 47 / 3 | ❌ 无 | ⚠️ 中（P1 安全 Bug 密度异常） | 安全治理冲刺 |
| **Hermes Agent** | 44 / 6 | 47 / 3 | ❌ 无 | ✅ 中上 | 重构 + 桌面化 |
| **IronClaw** | 36 / 14 | 38 / 12 | ❌ 无 | ✅ 中上 | 灰度稳定期 |
| **CoPaw (QwenPaw)** | 31 / — | 49 / 22 | ✅ **v2.1.0-beta.2** | ✅ 中上 | 密集修复 |
| **NanoBot** | 10 / — | 10 / 11 | ❌ 无 | ✅ 良好 | 稳步迭代 |
| **LobsterAI** | 4 / 3 | 6 / 6 | ✅ **2026.8.7** | ✅ 良好 | 主动清理积压 |
| **PicoClaw** | 3 / 1 | 12 / 2 | ❌ 无 | ⚠️ 中下（stale 普遍） | 维护响应瓶颈 |
| **NanoClaw** | 0 | 8 / 2 | ❌ 无 | ⚠️ 中（Issue 静默） | 架构升级期 |
| **NullClaw** | — | — | — | ❌ 静默 | 已停滞 |
| **TinyClaw** | — | — | — | ❌ 静默 | 已停滞 |
| **Moltis** | — | — | — | ❌ 静默 | 已停滞 |
| **ZeptoClaw** | — | — | — | ❌ 静默 | 已停滞 |

**关键观察**：
- **仅 2/13 项目今日有 Release**（CoPaw beta 版 + LobsterAI 正式版），版本节奏整体偏慢；
- **OpenClaw 一家的活跃 Issue 数 ≈ 其余 12 个项目之和**，生态高度集中；
- **PicoClaw 与 NanoClaw 的 Issue 区域接近静默**，提示用户反馈入口受阻。

---

## 3. OpenClaw 在生态中的定位

| 维度 | OpenClaw | 同期可比项目 |
|---|---|---|
| **社区规模** | 470 活跃 Issue / 411 待审 PR 单日量级 | ZeroClaw 45 / 47，Hermes 44 / 47 |
| **产品复杂度** | Gateway + Codex worker + 多 Channel + DB schema 多版本迁移 | ZeroClaw / NanoBot 单一架构主线 |
| **路线成熟度** | 已发布 2026.7.x 系列，处于 2026.7.2-beta 回归修复期 | IronClaw 接近 v1.2.0 收口；CoPaw 在 v2.1 beta |
| **核心差异** | **嵌入式 runner + 多 Codex 集成 + 复杂数据库迁移**；issue 编号已突破 12 万 | ZeroClaw 主打 SOP 引擎与硬件；Hermes Agent 主打多 Agent 编排与桌面化 |

**判断**：OpenClaw 仍是生态事实上的"参照系"——其 issue 编号量级、跨平台集成广度、Channel 数量都远超同期项目，但同时也是**风险最集中**的项目（4 个 P0 Bug 暂无 fix PR：DB v14→v15 迁移失败、token 虚高导致数据丢失、SQLite 损坏、350MB→15.5GB 内存泄漏）。相比 ZeroClaw（专注 SOP + 安全）和 Hermes（专注多 Agent + 桌面），OpenClaw 的"全能型网关"路线正在遭遇**复杂度反噬**。

---

## 4. 共同关注的技术方向

下表汇总跨项目高频议题，每项至少 2 个项目共同表达：

| 议题方向 | 涉及项目 | 具体诉求 |
|---|---|---|
| **🪙 Token 消耗可观测性** | NanoBot #5266（社区热度 #1）、OpenClaw `usage-mosaic` PR、ZeroClaw #8933/#7232（OTel 对话相关性） | 用户对"看不见的成本"焦虑远胜"看不见的能力"；按调用记录 token 来源/时间戳成头号需求 |
| **🧠 记忆与会话隔离** | NanoBot #5278/#5279 + #5283（会话历史外置 + per-session 沙箱）、OpenClaw #7707（Memory Trust Tagging）、Hermes #31584（Memory 不应作权威 user-message） | 从"实例级配置"走向"会话级/通道级"细粒度控制，是跨项目共同方向 |
| **📡 Channel 可靠性** | OpenClaw Telegram/微信/QQ、IronClaw Telegram 配对后消息丢失/Slack 用户错乱、NanoBot Telegram 静默停轮询（PR #5156 积压 10 天）、CoPaw Telegram ACL 重置 | 几乎所有项目都在修补 Telegram/Slack/微信三大通道的边缘 case |
| **🪟 Windows 兼容性** | Hermes Agent #80968/#81290/#80569、CoPaw #6775（被 Malware Bytes 误报 Trojan）/#6810（NSIS 文件锁）、OpenClaw #74378（node.exe 泄漏） | Windows 安装/运行/卸载链路是高频投诉来源 |
| **📜 文档与发布同步性** | IronClaw Doc-Truth 流水线（5 个 PR）、OpenClaw 文档 vs 实际行为漂移 | 已上升为基础设施级议题，IronClaw 引入 `docs-live` 分支是行业范式 |
| **🔒 安全纵深防御** | ZeroClaw #9815（forbidden_paths 失效）/#9386（Gemini Key 泄漏）、NanoBot 会话级沙箱、OpenClaw install policy acknowledgement | sandbox / API key sanitize / forbidden_paths 形成共同防线 |
| **🇨🇳 国产模型生态** | CoPaw #6490（Volcengine/MiMo）/#6285（qwen3.8-max-preview）、NanoBot 模型列表、NanoClaw Tavily/AnyDoc | 中文模型与渠道适配是中文社区刚需 |

---

## 5. 差异化定位分析

| 项目 | 核心定位 | 目标用户 | 关键技术栈差异 |
|---|---|---|---|
| **OpenClaw** | 全能型 Agent 网关 | 企业 + 个人混合 | Codex 集成 + 多 DB 版本迁移 + 多 Channel |
| **ZeroClaw** | SOP 驱动 + 安全优先 | 生产/合规环境 | SOP.toml 引擎 + Rust crates 隔离 + 强 sandbox |
| **Hermes Agent** | 多 Agent 编排 + 桌面化 | 重度桌面用户 | Kanban + god-file 拆分 + Windows/Tailscale |
| **IronClaw** | 渐进式工具披露 + Doc-Truth | 文档严谨型团队 | `builtin.skill_activate` 让模型自选工具 + 强制文档校对 |
| **CoPaw (QwenPaw)** | v2.1 桌面 + 中文生态 | 中文桌面用户 | Profile persona 系统 + 多 Provider 互操作 |
| **NanoBot** | 轻量 WebUI + Memory 归档 | 个人开发者 | WebUI thread 路由 + Dream idle session 归档 |
| **LobsterAI** | Cowork 协作 + OpenClaw 兼容 | 团队协作场景 | Markdown LaTeX + IM 分析 + Windows 安装器 |
| **NanoClaw** | 渠道 + 工具 Skill 矩阵 | 企业 IM 用户 | ChannelAdapter v2 契约 + 大量 Skill |
| **PicoClaw** | 极轻量（<10MB RAM） | 低成本硬件用户 | Go 单二进制 + WebRTC/RTP + 本地优先 |

**关键架构分叉点**：
- **Rust vs Go vs TS**：ZeroClaw/Hermes (Rust 系) vs PicoClaw (Go) vs OpenClaw/CoPaw (TS/Node)；
- **本地优先 vs 云端**：PicoClaw/ZeroClaw 强本地 vs OpenClaw/CoPaw 云端为主；
- **Channel 数量**：OpenClaw > NanoClaw > IronClaw > NanoBot ≈ LobsterAI > PicoClaw ≈ ZeroClaw。

---

## 6. 社区热度与成熟度分层

```
┌─────────────────────────────────────────────────────────────┐
│  🔥 高速迭代期 (快速叠加功能 + 修复同时推进)                 │
│     OpenClaw (高风险) │ ZeroClaw │ CoPaw v2.1 beta           │
├─────────────────────────────────────────────────────────────┤
│  🛠  质量巩固期 (重构 + 收口 + 文档/可观测性)                 │
│     IronClaw v1.2 收口 │ Hermes Agent (god-file 拆分)       │
├─────────────────────────────────────────────────────────────┤
│  🌱  稳步迭代期 (小步快跑 + 主动清理积压)                    │
│     NanoBot │ LobsterAI │ NanoClaw                          │
├─────────────────────────────────────────────────────────────┤
│  ⚠️  维护瓶颈期 (功能 PR 积压, Issue 静默)                  │
│     PicoClaw (stale 普遍) │ NanoClaw (Issue 0 活动)         │
├─────────────────────────────────────────────────────────────┤
│  💤  静默休眠期 (24h 无活动)                                 │
│     NullClaw │ TinyClaw │ Moltis │ ZeptoClaw                │
└─────────────────────────────────────────────────────────────┘
```

**成熟度判断依据**：
- **高速迭代期**：Issue 数 ≫ 关闭数（OpenClaw 470/30），说明新问题增速远超维护能力；
- **质量巩固期**：合并率较高且 PR 集中在架构层（IronClaw 12/50=24%，Hermes god-file 拆分 epic）；
- **稳步迭代期**：合并/新开比例健康（LobsterAI 6/7，NanoBot 11/10）；
- **维护瓶颈期**：PR 待合并比例 ≫ 合并（PicoClaw 12/2 = 85% pending）；
- **静默休眠期**：24 小时 0 活动，需警惕项目已事实停摆。

---

## 7. 值得关注的趋势信号

### 7.1 📊 可观测性从"加分项"变为"硬需求"

跨 4 个项目（NanoBot、OpenClaw、ZeroClaw、IronClaw）共同表达：**用户对不可见成本与不可见行为的容忍度已到临界点**。NanoBot 用户 `knoppix2` 的"2 小时百万 token 无可见活动"描述极具代表性。可观测性正成为继功能完整后的下一道分水岭。

### 7.2 🧱 配置可信度危机浮现

ZeroClaw 的 `forbidden_paths` 失效、Anthropic 预算上报 $0.00、SOP 畸形静默丢弃，OpenClaw 的 `no such column: entry_valid` 迁移失败——**共同模式是"配置看起来生效，实则被绕过"**。这迫使行业从"硬编码默认值"走向"显式确认 + 启动期校验 + 失败必报错"的三段式策略。

### 7.3 📜 文档与代码同步进入工业化阶段

IronClaw 推出 `docs-live` 分支 + Doc-Truth 验证流水线（5 个 PR 协同），标志着**文档治理从人工 review 走向自动化流水线**。这是值得所有项目复用的范式：每个 release tag 强制 force-point 文档分支，否则构建失败。

### 7.4 🪟 Windows 已成"质量放大镜"

Hermes、CoPaw、OpenClaw 三个项目均暴露 Windows 链路问题（安装锁、误报 Trojan、node 进程泄漏）。**对面向 C 端用户的项目而言，Windows 体验直接决定留存**，建议在 CI 中强制 Windows runner 测试。

### 7.5 🇨🇳 中文生态形成独立演进路线

CoPaw（Volcengine/MiMo/qwen3.8-max-preview）、NanoBot（DashScope）、LobsterAI（SiliconFlow 模型 ID）共同表明：**中文社区对国产模型与 IM 渠道（飞书、企业微信、QQ、微信公众号）的适配需求远超英文社区**，已形成与英文生态并行的演进路线。

### 7.6 🔄 单点维护者依赖成为隐性风险

ZeroClaw 维护者 JordanTheJet 单人贡献 9 条 PR/Issue、OpenClaw 维护者日吞吐已饱和、CoPaw beta 期间多个核心 PR 积压——**"明星维护者 + 长尾积压"是当前生态的最大结构性脆弱点**。建议各项目建立多人 co-maintainer 机制或明确 RFC 流程。

### 7.7 💡 对 AI 智能体开发者的参考价值

| 启示 | 适用场景 | 行动建议 |
|---|---|---|
| **可观测性先于功能** | 任何 token 计费场景 | 优先实现 per-call token 追踪 + UI 暴露 |
| **配置即代码需配校验** | sandbox / forbidden / 预算 | 启动期 fail-fast + dry-run 校验 |
| **会话级隔离优于实例级** | 多用户/多租户 | session 历史外置 + per-session workspace |
| **文档与发布同流水线** | 频繁发版项目 | 引入 docs-live 分支 + 自动化校对 |
| **Windows CI 不可省** | 桌面/C 端产品 | GitHub Actions Windows runner 强制矩阵 |
| **Channel 边缘 case 是无尽战场** | 多 IM 接入 | 为每个 Channel 建立独立 QA 套件 |

---

**报告小结**：今天的开源 AI 智能体生态呈现出**"功能丰富度已过剩，可控性尚处早期"**的结构性矛盾。OpenClaw 仍是体量最大的事实参照，但 ZeroClaw、IronClaw 在安全与文档治理上的工程化探索代表了下一阶段方向。对技术决策者，建议优先关注**可观测性、会话级隔离、配置可信度**三条主线的项目；对开发者，建议在 Channel 可靠性、Token 计费、文档自动化三个高频痛点上寻找贡献切入点。

*本报告基于 2026-08-08 当日各项目 GitHub 公开数据生成。*

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目日报 — 2026-08-08

> 数据源：[HKUDS/nanobot](https://github.com/HKUDS/nanobot)  GitHub 公开数据
> 报告窗口：2026-08-07 ~ 2026-08-08（UTC）

---

## 一、今日速览

NanoBot 项目今日保持高强度的代码合并节奏，过去 24 小时内共有 **11 个 PR 被合并/关闭、10 个 PR 仍在评审中、10 个 Issue 持续更新**，但未发布新版本。提交最活跃的贡献者 `chengyongru` 单日合并了 6 个 PR，主要集中在 **WebUI 体验打磨、内存（Memory）会话归档、Channel 通道稳健性** 三大方向。社区关注点明显向 **会话隔离与安全（Sandbox / Session 路径）、Token 消耗可观测性、跨 Channel 协议适配** 倾斜，项目整体仍处于"快迭代 + 稳健性修复并重"的健康阶段。

---

## 二、版本发布

⚠️ 过去 24 小时 **无新版本发布**。当前最新版仍为上次发布的版本，建议关注下个 patch 是否会吸收今日批量合并的 WebUI / Memory / Channel 修复。

---

## 三、项目进展（今日合并/关闭的重要 PR）

本轮合并体现出"**问题闭环 + 文档同步**"的特征，11 个 PR 形成若干相互呼应的修复链路：

### 🔧 WebUI 体验一致性
- **[PR #5284](https://github.com/HKUDS/nanobot/pull/5284)** — `refactor(webui): remove legacy session messages route`
  删除未公开支持的 `/api/sessions/{key}/messages` 路由及其周边的媒体水合 / 子代理消息整形代码，统一走 `/webui-thread` 与签名媒体服务，降低前端历史路径复杂度。
- **[PR #5285](https://github.com/HKUDS/nanobot/pull/5285)** — `fix(webui): preserve newly created topic route`
  修复"乐观创建会话"在会话列表确认前的路由丢失问题，补齐了 App 级回归测试。
- **[PR #5268](https://github.com/HKUDS/nanobot/pull/5268)** — `fix(webui): stage out-of-media-root attachments on history reads`
  解决媒体根目录外附件在历史刷新后丢失 `media_urls` 的问题，关闭 Issue #5264。
- **[PR #5281](https://github.com/HKUDS/nanobot/pull/5281)** — `fix(webui): keep activity text crisp while fading edges`
  将活动区滚动端口的遮罩改为指针透明兄弟渐变，保证滚动时文字边缘自然渐隐而不糊化；测试矩阵扩展到 **53 个 WebUI 测试文件 / 939 用例**。
- **[PR #5277](https://github.com/HKUDS/nanobot/pull/5277)** — `feat(webui): expand model preset editor inline`
  模型预设编辑器改为"点击行下方内嵌展开"，宽窄屏交互统一。
- **[PR #5287](https://github.com/HKUDS/nanobot/pull/5287)** — `fix(channels): preserve global progress defaults`
  保留全局 `sendProgress` / `sendToolHints` 默认行为，扩展 `BaseChannel` 钩子让微信等通道维持配额安全默认值，新增 Mattermost 回归用例。

### 🧠 内存（Memory）与会话归档
- **[PR #5280](https://github.com/HKUDS/nanobot/pull/5280)** — `fix(memory): archive short idle sessions for Dream`
  补齐短会话（落在 `retain_recent_legal_suffix` 受保护后缀内）从未生成 `history.jsonl` 的死角，让 Dream 有素材可消化。
- **[PR #5231](https://github.com/HKUDS/nanobot/pull/5231)** — `feat(memory): archive idle sessions for Dream`
  与 #5280 互为补充，从架构上引入 idle 会话归档能力，是上述修复的前置条件。
- **[PR #5272](https://github.com/HKUDS/nanobot/pull/5272)** — `fix(session): preserve proactive channel delivery during session retention trimming`
  修复会话裁剪误删 `_channel_delivery` 类消息的问题，关闭 Issue #5273。

### 📚 文档与依赖引导
- **[PR #5282](https://github.com/HKUDS/nanobot/pull/5282)** — `fix: modernize dependency recovery guidance`
  将 Langfuse / Olostep / 微信支持 / `oauth-cli-kit` 的过时手工安装提示统一替换为 `nanobot plugins enable ...` 标准命令，降低新用户踩坑概率。
- **[PR #5263](https://github.com/HKUDS/nanobot/pull/5263)** — `fix(weixin): harden protocol delivery, streaming, and login`
  对齐 `@tencent-weixin/openclaw-weixin` 2.4.6 协议头、二维码校验、绑定冲突处理，强化外发重试与错误解析，是微信通道近一周最大的一次稳健性升级。

> ✅ **项目健康度判断**：今日合并密度高、回归测试覆盖率上行（尤其 WebUI）、多通道与 Memory 模块均有实质性收敛，整体进度可视作 **稳步前进 ~1 个小版本的工作量**。

---

## 四、社区热点（讨论最活跃的 Issue / PR）

| 排名 | 条目 | 互动量 | 焦点诉求 |
|---|---|---|---|
| 🥇 | [Issue #5266](https://github.com/HKUDS/nanobot/issues/5266) **"Logs about token consumption"** | **10 条评论** | 用户对 token 黑洞的焦虑——2 小时内百万级 token 消耗却"对用户无可见活动"，呼吁可观测性 |
| 🥈 | [Issue #5149](https://github.com/HKUDS/nanobot/issues/5149) **"no audio ?"** | **5 条评论** | WhatsApp 通道无法发送音频，仅能接收 |
| 🥉 | [Issue #5198](https://github.com/HKUDS/nanobot/issues/5198) **"无法在会话内切换模型"** | **3 条评论** | 单会话无法临时换模型，必须全局重配 |
| 4 | [Issue #5276](https://github.com/HKUDS/nanobot/issues/5276) **"session-level temp file isolation"** | **2 条评论** | 多用户/多会话共享 workspace 时的文件隔离诉求 |
| 5 | [Issue #5290](https://github.com/HKUDS/nanobot/issues/5290) **"Deduplicate JSONL write idiom"** | **1 条评论** | 内部代码质量：原子 JSONL 写入逻辑重复三处 |

**诉求归纳**：
- **可观测性 > 功能堆砌**：排名第一的 #5266 揭示，用户对"看不见的成本"远比"看不见的能力"更焦虑，token 记账与请求级 tracing 已成为社区头号需求。
- **会话级可控性**：#5198、#5276、#5278、#5283、#5289 一组 issues 表明，社区正推动从"实例级配置"走向"会话级 / 通道级"细粒度控制，这是项目近期路线图的强信号。

---

## 五、Bug 与稳定性

按严重程度排序：

### 🔴 高严重度（数据/安全/可用性）

| Issue / 现象 | 关联修复 | 状态 |
|---|---|---|
| [Issue #5278](https://github.com/HKUDS/nanobot/issues/5278) **"Session history should not live inside the agent workspace"** —— 会话文件位于 workspace 内，启用了 `restrict_to_workspace` 的代理可读到自己历史 | [PR #5279](https://github.com/HKUDS/nanobot/pull/5279) **fix(session): store session history outside the agent workspace** | **已有 fix PR，待合并** |
| [Issue #5273](https://github.com/HKUDS/nanobot/issues/5273) **会话裁剪误删主动投递消息** | [PR #5272](https://github.com/HKUDS/nanobot/pull/5272) | ✅ 已关闭（已合并） |
| [PR #5156](https://github.com/HKUDS/nanobot/pull/5156) **Telegram 静默停轮询**（生产事故：网络抖动后无任何日志但进程存活） | — | **修复 PR 自 7/29 起已开放 9 天，尚未合并** |

### 🟡 中严重度（功能失效 / 体验降级）

| Issue / 现象 | 关联修复 | 状态 |
|---|---|---|
| [Issue #5149](https://github.com/HKUDS/nanobot/issues/5149) **WhatsApp 无法发送音频** | — | ❌ **无修复 PR，自 7/28 起积压 10 天** |
| [Issue #5198](https://github.com/HKUDS/nanobot/issues/5198) **会话内无法切换模型** | — | ❌ 无修复 PR |
| [Issue #5264](https://github.com/HKUDS/nanobot/issues/5264) **历史接口媒体 URL 丢失** | [PR #5268](https://github.com/HKUDS/nanobot/pull/5268) | ✅ 已关闭 |
| [Issue #5256](https://github.com/HKUDS/nanobot/issues/5256) **`/goal` 触发数十次重复回复** | — | ❌ 无修复 PR |

### 🟢 低严重度（内部 / 体验）

- [Issue #5290](https://github.com/HKUDS/nanobot/issues/5290) JSONL 写入幂等逻辑重复 —— 代码质量类，可后续重构合并。
- [PR #5260](https://github.com/HKUDS/nanobot/pull/5260) `fix(memory): ignore runtime files inside tracked workspace dirs` —— 已开放，待合并。

---

## 六、功能请求与路线图信号

今日 PR/Issue 中明确呈现"**会话级权限 + 通道丰富度 + 可观测性**"三条主线：

| 方向 | 代表条目 | 进入下一版本的概率 |
|---|---|---|
| **会话级沙箱隔离** | [Issue #5276](https://github.com/HKUDS/nanobot/issues/5276) + [PR #5283](https://github.com/HKUDS/nanobot/pull/5283) `feat(workspace): per-session sandbox isolation for non-WebUI channels` | ⭐⭐⭐⭐ 极高（与 #5278/#5279 形成组合拳） |
| **Telegram 贴纸 / 反应** | [Issue #5289](https://github.com/HKUDS/nanobot/issues/5289) `feat(telegram): stickers + agent-initiated reactions` | ⭐⭐⭐ 高 |
| **Matrix 线程会话隔离** | [PR #5286](https://github.com/HKUDS/nanobot/pull/5286) | ⭐⭐⭐ 高（PR 已就绪） |
| **WebUI 临时会话（不留痕）** | [PR #5252](https://github.com/HKUDS/nanobot/pull/5252) `feat(webui): add temporary chat mode` | ⭐⭐⭐ 中高 |
| **Agent 插件系统统一** | [PR #5288](https://github.com/HKUDS/nanobot/pull/5288) `feat(plugins): integrate Agent Plugins with CLI Apps` | ⭐⭐⭐ 中高（影响产品边界） |
| **Computer Use / Browser Tool** | [PR #4276](https://github.com/HKUDS/nanobot/pull/4276) `feat(tools): model-agnostic computer use` | ⭐⭐ 中（功能宏大，需长期打磨） |
| **Token 消耗日志** | [Issue #5266](https://github.com/HKUDS/nanobot/issues/5266) | ⭐⭐⭐⭐ 极高（用户呼声第一） |

---

## 七、用户反馈摘要

来自评论区的真实痛点：

- 😟 **"看不见的账单"**：#5266 评论中，用户 `knoppix2` 形容 2 小时百万级 token 消耗"对用户无可察觉活动"，明确希望"按调用记录 token 来源 / 时间戳"，这是对 NanoBot 商业可用性的核心担忧。
- 😟 **"WhatsApp 单向通"**：#5149 中 `mxnbf` 指出音频接收正常但发送失败，从 `neonize.utils.ffmpeg` 报错看疑似 ffmpeg 路径/格式封装问题。
- 😟 **"模型切换像假按钮"**：#5198 中 `whisperity` 描述 `/model` 命令看似生效，但实际首选项未切换、UI 也没有 SaaS 类产品的"会话级模型下拉"。
- 😊 **"微信通道今天加固了"**：#5263 合并后，微信用户在 PR 讨论中表示 QR 验证与断线重连体验有提升。
- 😐 **"会话裁剪吞掉我的通知"**：#5273 评论里 `ziuus` 与维护者讨论了 `_channel_delivery` 消息在 cron 投递场景下被裁掉的实际问题，目前已被 #5272 修复。
- 🛡️ **"安全收紧方向一致"**：#5278 与 #5279 的互动表明，社区欢迎"session 不再住在 workspace 内"的方向，多数评论者认为是"早就该做的修正"。

---

## 八、待处理积压（提醒维护者关注）

| 条目 | 类型 | 创建日期 | 积压天数 | 备注 |
|---|---|---|---|---|
| [PR #4276](https://github.com/HKUDS/nanobot/pull/4276) `model-agnostic computer use` | 功能 | 2026-06-10 | **59 天** | 大型功能 PR，评审成本高，建议拆分或标记 RFC |
| [PR #5156](https://github.com/HKUDS/nanobot/pull/5156) `telegram polling recovery` | Bug 修复 | 2026-07-29 | **10 天** | 生产可用性相关，建议优先 |
| [Issue #5149](https://github.com/HKUDS/nanobot/issues/5149) WhatsApp 音频发送 | Bug | 2026-07-28 | **11 天** | 影响 WhatsApp 用户的核心场景 |
| [Issue #5198](https://github.com/HKUDS/nanobot/issues/5198) 模型切换 | 功能/体验 | 2026-07-31 | **8 天** | 高呼声，缺少修复 PR |
| [Issue #5266](https://github.com/HKUDS/nanobot/issues/5266) Token 日志 | 可观测性 | 2026-08-06 | 2 天 | 社区热度 #1，建议发起 maintainer 评审 |
| [PR #5260](https://github.com/HKUDS/nanobot/pull/5260) memory ignore runtime files | Bug | 2026-08-05 | 3 天 | 正常评审窗口 |

---

## 📌 维护者建议（基于今日数据）

1. **优先合并 PR #5156**（Telegram 静默停轮询）—— 生产事故级问题，不应超过一周。
2. **尽快决定 PR #5279 / PR #5283 / Issue #5278 走向** —— 形成"会话历史外置 + 会话级沙箱"组合方案，是接下来几个小版本的旗舰级安全/隐私升级。
3.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报

📅 **报告日期**：2026-08-08
📊 **数据来源**：[NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent)

---

## 1. 今日速览

Hermes Agent 仓库今日继续保持高强度的多线推进：**24 小时内 50 条 Issues 更新（44 活跃 / 6 关闭）、50 条 PR 更新（47 待审 / 3 已关闭）**，且无版本发布。Issue/PR 总量近期持续高位运行（编号已突破 #81xxx），反映出 2026 年 8 月版本密集发布前后的活跃维护节奏。社区层面，P1 级稳定性问题（特别是 OAuth/Anthropic 计费上下文、context 压缩过程中副作用丢失、Windows Desktop 安装与运行）成为讨论焦点；重构 Epic（god-file 拆分）以 **60 条评论**高居热度榜首。整体项目健康度评估：**中等偏上** —— 维护者响应迅速，PR 流转顺畅，但 P1 风险积压与 Telegram/Windows 生态适配问题尚未根治。

---

## 2. 版本发布

🚫 **今日无新版本发布**。

近 24 小时所有 PR 均处于开放或刚关闭状态，未触发任何 release/tag 动作。版本节奏维持在 v0.20.0 区间（参见 Issue [#80569](https://github.com/NousResearch/hermes-agent/issues/80569) 中提到的 v0.20.0/2026.08.x），下一个稳定版本值得在 PR 合流节点后关注。

---

## 3. 项目进展

今日有 **3 条 PR 关闭**，其中 2 条为变更/改进、1 条为短期撤回重提。结合今日新增的多条待审 PR，仍可清晰看到仓库在以下方向持续推进：

| 方向 | 代表 PR | 进展说明 |
|------|---------|----------|
| 多 Agent / Kanban | [#81411](https://github.com/NousResearch/hermes-agent/pull/81411) | `fix(kanban): signal the whole process group when terminating workers`，对 [#80280](https://github.com/NousResearch/hermes-agent/issues/80280) 修复再次提交，正确杀进程组避免残留 |
| Agent 行为边界 | [#80808](https://github.com/NousResearch/hermes-agent/pull/80808)（已关闭） → 由 [#81415](https://github.com/NousResearch/hermes-agent/pull/81415) 重提 | "要求 agent 在 incomplete terminal state 给出 actionable handoff" 的逻辑已迭代到 v2 |
| 策略回退 | [#81412](https://github.com/NousResearch/hermes-agent/pull/81412)（已关闭） | "policy fallback delegation to local Qwen" 短期内被关闭，预计会基于评审反馈进行二次拆分 |
| 安装/升级链路 | [#75119](https://github.com/NousResearch/hermes-agent/pull/75119)、[#79599](https://github.com/NousResearch/hermes-agent/pull/79599) | 桌面端 bundled installer + 避免 setup 时升级 optional deps |
| 模型/Provider | [#81418](https://github.com/NousResearch/hermes-agent/pull/81418)、[#81419](https://github.com/NousResearch/hermes-agent/pull/81419)、[#81416](https://github.com/NousResearch/hermes-agent/pull/81416) | 修正 Meta provider id、引入 pip entry-points 发现机制、在选模型时提示 data-training 风险 |

**整体评估**：合并数量偏低，但**新提交 PR 质量与覆盖面极广**——从 MCP 命名长度裁剪（[#81417](https://github.com/NousResearch/hermes-agent/pull/81417)）、Telegram 富消息代码块保留（[#81346](https://github.com/NousResearch/hermes-agent/pull/81346)），到 SSH 远程 cwd 保留（[#81414](https://github.com/NousResearch/hermes-agent/pull/81414)），都体现了主干"修复优先于特性"的倾向。

---

## 4. 社区热点

### 🔥 讨论最活跃的 Issue
1. **[#78647](https://github.com/NousResearch/hermes-agent/issues/78647) — Epic: Shard all 20 god files**（60 评论）
   - 仓库级巨型文件拆分史诗任务，2026-08 新规明确"god files 只能拆分、不得回滚"。
   - 诉求：拆分 20 个超大源文件，建立统一模块接口 —— 反映当前代码体量与可维护性矛盾已成为核心议题。

2. **[#64182](https://github.com/NousResearch/hermes-agent/issues/64182) — Plugin Interface Expansion（July 2026 社区汇总）**（30 评论）
   - 作者：teknium1（核心维护者本人）。归纳 7 月社区想法，作为后续接口扩展的参考计划。

3. **[#17565](https://github.com/NousResearch/hermes-agent/issues/17565) — Feature: Configurable Temperature**（11 评论 / **👍 13**）
   - 用户长期呼吁当前 `_fixed_temperature_for_model()` 硬编码造成事实幻觉问题，需要可暴露给用户的 temperature 配置。

4. **[#31584](https://github.com/NousResearch/hermes-agent/issues/31584) — Memory context 不应作为权威 user-message**（11 评论）
   - 提示注入 / 安全威胁面角度：memory 上下文应被视为背景而非可执行消息。

5. **[#79278](https://github.com/NousResearch/hermes-agent/issues/79278) — Context compression 丢弃 in-flight tool chain**（10 评论，P1）
   - preflight 压缩可能误丢"副作用已发生但结果未回传"的工具链，导致 agent 错误重放非幂等操作。

### 👍 反应最高的 Feature Request
- **#17565（Temperature，👍13）** —— 最热
- [#18374](https://github.com/NousResearch/hermes-agent/issues/18374) — cronjob `get/include_prompt`（👍5）
- [#13332](https://github.com/NousResearch/hermes-agent/issues/13332) — Hybrid Tool Pre-Selection（👍4）
- [#509](https://github.com/NousResearch/hermes-agent/issues/509) — Cognitive Memory Operations（👍4）

**趋势分析**：社区热度集中在"**Agent 内核行为契约**"与"**安全/可观测边界**"两条主轴上 —— 配置可调、上下文安全、tool chain 完整性成为用户最强烈的诉求。

---

## 5. Bug 与稳定性

### P1（高严重度，含已挂接修复 PR）
| Issue | 标题 | 是否有 fix PR | 链接 |
|------|------|-------------|------|
| [#65365](https://github.com/NousResearch/hermes-agent/issues/65365) | OAuth（Claude Pro/Max）：启用 `memory` / `session_search` 工具 schema 确定性触发 HTTP 400 "You're out of extra usage" | ❌ 尚无 | 链接 |
| [#79278](https://github.com/NousResearch/hermes-agent/issues/79278) | Context compression 丢弃 in-flight tool chain，副作用已完成，结果丢失 → agent 重放 | ❌ 尚无 | 链接 |
| [#79624](https://github.com/NousResearch/hermes-agent/issues/79624) | Gateway 重启时超大 session 触发 preflight 压缩直接 exit(1) | ❌ 尚无 | 链接 |

### P2
| Issue | 标题 | 是否有 fix PR | 链接 |
|------|------|-------------|------|
| [#22418](https://github.com/NousResearch/hermes-agent/issues/22418) | macOS Atomic Hermes desktop-gateway 与 CLI `--replace` 冲突，锁 Discord token | ❌ | 链接 |
| [#54523](https://github.com/NousResearch/hermes-agent/issues/54523) | Tailscale 远程 Desktop：异步路由阻塞 asyncio loop 10-25s + Chromium LNA | ❌ | 链接 |
| [#80968](https://github.com/NousResearch/hermes-agent/issues/80968) | Windows / ConPTY：`hermes --tui` 输入后顶部 "gateway exited" | ❌ | 链接 |
| [#81290](https://github.com/NousResearch/hermes-agent/issues/81290) | Windows 副 Desktop 窗口黑屏、无生命周期诊断 | ❌ | 链接 |
| [#80569](https://github.com/NousResearch/hermes-agent/issues/80569) | Windows Desktop：安装/更新后产生重复启动项且会自重启 | ❌ | 链接 |
| [#63485](https://github.com/NousResearch/hermes-agent/issues/63485) | Telegram Bot API 10.1 顶层 `rich_message` 入站被静默丢弃 | 重复 [#81368](https://github.com/NousResearch/hermes-agent/issues/81368) | 链接 |
| [#80507](https://github.com/NousResearch/hermes-agent/issues/80507) | 委派子 Kanban 的 exit guard 耗尽父 turn 预算 | ❌ | 链接 |

### P3 / 已关闭
- ✅ **#11349** [CLOSED] — Discord 文档 vs 实际行为 6 处漂移 + `/voice join` 缺失（9 评论，见 [#11349](https://github.com/NousResearch/hermes-agent/issues/11349)）
- ✅ **#79331** [CLOSED] — Telegram Rich Message 缺代码块复制按钮，由 [#81346](https://github.com/NousResearch/hermes-agent/pull/81346) 修复
- ✅ **#46100** [CLOSED] — Telegram 批/媒体组附件跨 turn 拆分
- 🔁 [#79728](https://github.com/NousResearch/hermes-agent/issues/79728)、[#75444](https://github.com/NousResearch/hermes-agent/issues/75444)、[#80280](https://github.com/NousResearch/hermes-agent/issues/80280) — Kanban block-loop / 进程组残留，**问题集群已聚类**，等 [#81411](https://github.com/NousResearch/hermes-agent/pull/81411) 合并见效

**稳定性结论**：3 条 P1 全部**没有挂接 PR**，是当前最危险的口径，应优先分配维护者带宽。Windows + Telegram 两个生态触点是高频投诉来源。

---

## 6. 功能请求与路线图信号

| Issue | 提议 | 是否已有对应 PR / 趋势 |
|------|------|------------------------|
| [#17565](https://github.com/NousResearch/hermes-agent/issues/17565) | 暴露用户可配置的 `temperature`（👍13） | 仍未接 PR，呼声最高的特性 |
| [#13332](https://github.com/NousResearch/hermes-agent/issues/13332) | Hybrid Tool Pre-Selection（RAG-style 工具 schema 注入） | 暂无，可能与 god-file 拆分在 [#78647](https://github.com/NousResearch/hermes-agent/issues/78647) 中并行推进 |
| [#509](https://github.com/NousResearch/hermes-agent/issues/509) | 认知记忆（LLM 驱动编码/巩固/自适应回忆） | 暂无直接 PR，但 [#31484-tag area/memory](https://github.com/NousResearch/hermes-agent/issues/31584) 已在讨论 memory context 的语义边界 |
| [#64182](https://github.com/NousResearch/hermes-agent/issues/64182) | 插件接口扩展（社区想法汇总） | 跟踪性 issue，预计会派生出多个 PR |
| [#78647](https://github.com/NousResearch/hermes-agent/issues/78647) | Epic: 拆分全部 20 个 god-file | 重构型，可能是下个版本的"基础设施"工作 |
| [#73888](https://github.com/NousResearch/hermes-agent/issues/73888) + [#80383](https://github.com/NousResearch/hermes-agent/issues/80383) | Desktop 区分 explicit workspace / 自动发现 repo / unassigned Home | 已挂接 [#81359](https://github.com/NousResearch/hermes-agent/pull/81359) |
| [#81405](https://github.com/NousResearch/hermes-agent/issues/81405) | 一等公民 Teams（持久多 profile + Quick Chat + Managed Work + channels + 共享能力） | 新开，方向性强，可能成为后续编排层重点 |

**路线图信号**：短期版本大概率聚焦"**稳定性 + 安装与桌面化**"（Kanban 进程组、SSH cwd、Windows/Tailscale、Telegram 兼容、bundled installer），中期方向则是"**插件体系 + 多 Agent Teams**"

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目日报

**日期：2026-08-08**
**项目：[sipeed/picoclaw](https://github.com/sipeed/picoclaw)**

---

## 1. 今日速览

PicoClaw 在过去 24 小时整体处于**中低强度维护状态**：共记录 4 条 Issue 更新（活跃 3、关闭 1）和 14 条 PR 更新（待合并 12、关闭 2），无新版本发布。值得关注的实质性进展来自社区贡献者 grrowl 与 MrTreasure，分别提交了 WhatsApp 405 客户端过期修复和 exec 工具超时修复等关键 PR。值得注意的是，几乎所有 Issue 与多数 PR 均被标记为 **`[stale]`**，提示项目维护响应存在积压，建议维护者尽快 review 近期高优先级 PR。

---

## 2. 版本发布

🚫 今日无新版本发布。最新版本请参考 [Releases 页面](https://github.com/sipeed/picoclaw/releases)。

---

## 3. 项目进展

今日合并/关闭的关键 PR 共 2 条，均为依赖升级；同时有 4 条**功能性 PR 已创建但尚未合并**，对项目运行质量有显著影响。

### ✅ 已关闭 PR（依赖升级）

| PR | 说明 | 影响 |
|---|---|---|
| [#3291](https://github.com/sipeed/picoclaw/pull/3291) | 升级 `github/copilot-sdk/go` 从 0.2.0 → **1.0.8**（主版本跳变） | 引入 1.x API，需关注 changelog 中的破坏性变更 |
| [#3289](https://github.com/sipeed/picoclaw/pull/3289) | 升级 `pion/rtp` 1.10.2 → 1.10.5 | WebRTC/RTP 媒体通道稳定性修复 |

### 🟢 新建待合并 PR（功能性）

- **[#3321](https://github.com/sipeed/picoclaw/pull/3321)** `fix(agent): move dynamic context after history to preserve prefix caching` —— **由 grrowl 提交**
  - 将每请求的动态上下文块（`Current Time / Runtime / Session / Sender`）从系统消息前部移至历史之后，避免破坏 LLM 端 prefix cache 命中率，可显著降低 token 成本与首 token 延迟。

- **[#3320](https://github.com/sipeed/picoclaw/pull/3320)** `fix(deps): bump whatsmeow to unblock WhatsApp "client outdated (405)"`
  - WhatsApp 服务端已拒绝当前锁定的 whatsmeow 版本，连接 ~5 秒后被 drop，且无重连。升级依赖后原生 WhatsApp 通道方可恢复。

- **[#3319](https://github.com/sipeed/picoclaw/pull/3319)** `fix(tools): honor exec timeout and boolean run options`
  - 修复 `exec` 工具声明的 `timeout` 参数被全局超时覆盖、`background`/`pty` 类型错误（被声明为 string，实际为 boolean）的问题。

- **[#3283](https://github.com/sipeed/picoclaw/pull/3283)** `fix(dingtalk): support picture/image message inbound`
  - 为 DingTalk 渠道增加图片/图像消息入站支持，新增 OpenAPI token 缓存与下载/降级逻辑。

整体而言，项目在**依赖治理**与**存量 Bug 修复**两条线同时推进，但维护者尚未对功能性 PR 做出 review 动作。

---

## 4. 社区热点

按评论数与互动量排序：

| 排名 | 编号 | 标题 | 评论 | 👍 | 状态 |
|---|---|---|---|---|---|
| 1 | [#3093](https://github.com/sipeed/picoclaw/issues/3093) | [Feature] I need SimpleX or Tox gateway | 6 | 1 | 已关闭（stale） |
| 2 | [#3302](https://github.com/sipeed/picoclaw/issues/3302) | OAuth 2.1 for MCP servers | 2 | 0 | 开放（stale） |
| 3 | [#3307](https://github.com/sipeed/picoclaw/issues/3307) | Telegram 会话列表/切换命令 | 1 | 0 | 开放（stale） |
| 3 | [#3308](https://github.com/sipeed/picoclaw/issues/3308) | SeaHorse/Channel/Hooks 并发隐患 | 1 | 0 | 开放（stale） |

**诉求分析：**
- **隐私通信场景**（#3093）——用户希望 PicoClaw 作为本地 AI 助手接入 SimpleX/Tox 等去中心化隐私协议，呼应 PicoClaw "本地/低成本/隐私优先" 的产品定位，但因范围过广被关闭。
- **企业级鉴权**（#3302）——MCP server 的 OAuth 2.1 支持对开放给外部用户的部署是必要能力，社区判定为 Nice-to-Have。
- **多渠道体验一致性**（#3307）——Web UI 已具备 session 管理，Telegram 等聊天渠道缺失对应能力，形成体验落差。
- **核心稳定性**（#3308）——来自社区的代码评审，暴露 goroutine 泄漏与并发隐患，关系到 PicoClaw 在低内存设备（<10MB RAM）上的运行稳健性。

---

## 5. Bug 与稳定性

按严重程度排列：

### 🔴 P0 — 通道级功能中断
- **WhatsApp "client outdated (405)"**（[#3320](https://github.com/sipeed/picoclaw/pull/3320)）
  - 现象：socket 连接建立后 ~5s 被服务端 drop，原生 WhatsApp 通道不可用且不重连。
  - **修复 PR 已就绪**（#3320，待合并）。

### 🟠 P1 — 工具执行可靠性
- **exec 工具超时与参数类型错误**（[#3319](https://github.com/sipeed/picoclaw/pull/3319)）
  - 现象：`timeout` 形参被全局值覆盖；`background`/`pty` schema 与实际 boolean 类型不一致。
  - **修复 PR 已就绪**（#3319，待合并）。

### 🟠 P1 — 会话输出污染
- **seahorse tool-call 格式泄漏到用户消息**（[#3279](https://github.com/sipeed/picoclaw/pull/3279)）
  - 现象：`partsToReadableContent` 把工具调用结构泄露到摘要中。
  - **修复 PR 已就绪**（#3279，待合并）。

### 🟡 P2 — 平台能力缺失（非回归）
- **DingTalk 图片消息入站**（[#3283](https://github.com/sipeed/picoclaw/pull/3283)）
  - **修复 PR 已就绪**。

### 🔴 P0 — 并发与内存隐患（社区代码评审）
- **SeaHorse / Channel Manager / Hooks 中的 goroutine 泄漏与并发风险**（[#3308](https://github.com/sipeed/picoclaw/issues/3308)）
  - 在 <10MB RAM 的目标硬件上属于**潜在严重问题**，但目前**尚无对应修复 PR**，需维护者评估并排期。

---

## 6. 功能请求与路线图信号

| 需求 | 跟进 PR | 进入下一版本的可能性 |
|---|---|---|
| MCP Server OAuth 2.1（[#3302](https://github.com/sipeed/picoclaw/issues/3302)） | 暂无 PR | 🟡 中等（被标为 Nice-to-Have） |
| Telegram / 多渠道 session 管理（[#3307](https://github.com/sipeed/picoclaw/issues/3307)） | 暂无 PR | 🟢 高（用户体验落差明显） |
| SimpleX / Tox 通道（[#3093](https://github.com/sipeed/picoclaw/issues/3093)） | 暂无 | 🔴 低（已因 stale 关闭） |
| DashScope TTS + 微信音频发送（[#3270](https://github.com/sipeed/picoclaw/pull/3270)） | **#3270 已实现** | 🟢 高 |
| 默认 fallback model 链可配置（[#3200](https://github.com/sipeed/picoclaw/pull/3200)） | **#3200 已实现** | 🟢 高 |
| 默认模型列表更新至 2026-07（[#3271](https://github.com/sipeed/picoclaw/pull/3271)） | **#3271 已实现** | 🟢 高 |

**信号判断**：维护者当前重心仍在依赖治理与平台适配（如 DashScope/WeChat、DingTalk 图片），尚未显式表态路线图方向；若近期完成 PR review 合并，PicoClaw 的多渠道一致性与模型可用性将获得实质性提升。

---

## 7. 用户反馈摘要

从公开 Issue 评论中可提炼以下真实场景：

- **🔒 隐私优先用户**（#3093）：希望在本地 PicoClaw 之上接入 SimpleX/Wire/Tox 等端到端协议，将其作为"安全网关"。该诉求被社区反复讨论，说明 PicoClaw 在隐私敏感人群中已建立心智，但目前架构未能覆盖。
- **📱 Telegram 重度用户**（#3307）：指出 Web UI 与 Telegram 渠道的 session 管理能力不对等，Telegram 用户无法 list/switch/delete 历史会话，跨设备体验断裂。
- **🧑‍💻 开发者/贡献者**（#3308）：以"代码评审"形式主动反馈并发隐患，表达了对 PicoClaw 长期代码质量的关注；同时也表明社区对 <10MB RAM 目标硬件的稳定性极为敏感。
- **🤖 MCP 集成方**（#3302）：在多租户/对外暴露场景下，OAuth 2.1 是 MCP server 的硬性需求，社区将其归类为 Nice-to-Have 而非 Core，暗示维护者目前更倾向单机/单用户场景。

整体满意度信号偏中性：用户对 PicoClaw 的轻量与可玩性认可，但在多渠道一致性与企业级鉴权上仍有缺口。

---

## 8. 待处理积压

⚠️ **项目存在显著积压，建议维护者优先处理**：

### 🟥 长期未响应的功能性 PR（>7 天）

| PR | 标题 | 创建日 | 等待天数 |
|---|---|---|---|
| [#3200](https://github.com/sipeed/picoclaw/pull/3200) | feat(models): add configurable default fallback chain | 2026-07-01 | **38 天** |
| [#3271](https://github.com/sipeed/picoclaw/pull/3271) | chore(providers): update default model names to 2026-07 latest | 2026-07-20 | 19 天 |
| [#3270](https://github.com/sipeed/picoclaw/pull/3270) | feat: add DashScope TTS provider and WeChat audio file sending | 2026-07-20 | 19 天 |
| [#3279](https://github.com/sipeed/picoclaw/pull/3279) | fix(seahorse): prevent tool-call format leakage | 2026-07-21 | 18 天 |
| [#3283](https://github.com/sipeed/picoclaw/pull/3283) | fix(dingtalk): support picture/image message inbound | 2026-07-22 | 17 天 |

### 🟧 Stale 状态的依赖升级 PR
- [#3306](https://github.com/sipeed/picoclaw/pull/3306)、[#3305](https://github.com/sipeed/picoclaw/pull/3305)、[#3304](https://github.com/sipeed/picoclaw/pull/3304)、[#3303](https://github.com/sipeed/picoclaw/pull/3303) 均为 7 月 30 日创建的 Dependabot 升级，全部被标 `[stale]`。

### 🟨 Stale Issue（全部 4 条活跃 Issue 均为 stale）
- [#3093](https://github.com/sipeed/picoclaw/issues/3093)、[#3302](https://github.com/sipeed/picoclaw/issues/3302)、[#3307](https://github.com/sipeed/picoclaw/issues/3307)、[#3308](https://github.com/sipeed/picoclaw/issues/3308)

**维护建议**：
1. **优先合并 #3320 / #3321 / #3319**——分别解决 WhatsApp 通道中断、prefix cache 命中率、exec 工具可靠性三项高价值修复；
2. **清空 #3200、#3270、#3271**等已沉淀近一个月的 PR，避免贡献者流失；
3. 评估 #3308 的并发隐患是否需要立即处理，特别是在 10 美元硬件、<10MB RAM 的目标场景下。

---

*报告基于 2026-08-07 至 2026-08-08 的 GitHub 公开数据生成。所有链接均指向 sipeed/picocaw 仓库。*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目日报

**日期**：2026-08-08
**仓库**：github.com/qwibitai/nanoclaw
**报告人**：AI 开源项目分析师

---

## 1. 今日速览

NanoClaw 项目今日呈现"PR 主导、Issue 静默"的典型开发期状态——过去 24 小时内共有 **10 条 PR 更新**（其中 8 条仍待合并、2 条已关闭），但 **Issues 区域完全无活动**，无新版本发布。整体活跃度处于中等偏高水平，提交内容以**功能扩展（新 Skill、新渠道集成）和 Bug 修复**为主，core-team 成员（amit-shafnir 等）持续推进 setup 流程与工具型 skill 建设。值得关注的是 **PR #546（旧 Mattermost 集成）正式关闭并由 #3199（v2 架构重写）取代**，标志着项目渠道适配层完成了新一轮架构升级。

---

## 2. 版本发布

**今日无新版本发布。** 上次发布活动不在统计窗口内。建议关注 master 分支即将合并的多个核心 PR（#2909、#3145、#3197），可能预示着下一个小版本（如 0.x.y）即将发布。

---

## 3. 项目进展（已合并/关闭 PR）

### ✅ #3197 — `fix(progress): 失败状态展示具体原因`（已关闭）
- **作者**：tier2tech-tian
- **类型**：Bug Fix
- **亮点**：修复了 agent-runner 上报 `resultSummary` 后，过程卡失败标题仅展示泛化文案的体验问题。改进后失败摘要会展示首条具体原因（如「动作失败：xxx」），并复用脱敏逻辑限制 38 字符。
- **验证情况**：定向测试 274 passed、TypeScript 类型检查通过、主项目 + agent-runner 完整构建通过、全量测试 1427 passed。
- **链接**：[nanocoai/nanoclaw #3197](https://github.com/nanocoai/nanoclaw/pull/3197)

### 🔁 #546 — `Add Mattermost channel skill`（已关闭，被 #3199 取代）
- **作者**：wakqasahmed
- **类型**：旧 PR 清理
- **说明**：原 PR 基于已被废弃的 `Channel/registry.ts` 架构，关闭后由基于新 `ChannelAdapter/channel-registry.ts` 契约的 **#3199** 接力。
- **链接**：[nanocoai/nanoclaw #546](https://github.com/nanocoai/nanoclaw/pull/546)

**项目推进评估**：今日实质性合并/关闭的 PR 主要为 1 项体验优化 + 1 项架构对齐清理，整体向"渠道适配层 v2 标准化"又迈进了一步。

---

## 4. 社区热点

今日所有 PR 的评论数与点赞数均显示为 **0**（API 返回 `undefined`），社区尚未形成有效讨论热度。但从主题分布看，热点集中在三条主线：

| 热点主题 | 相关 PR | 关注度信号 |
|---|---|---|
| **Mattermost 渠道集成 v2 重写** | [#3199](https://github.com/nanocoai/nanoclaw/pull/3199) 取代 [#546](https://github.com/nanocoai/nanoclaw/pull/546) | 反映社区对企业 IM 渠道适配的持续诉求 |
| **Setup 向导与 Agent 模板完善** | [#2909](https://github.com/nanocoai/nanoclaw/pull/2909)（core-team） | 降低新手接入门槛，是官方主推方向 |
| **工具型 Skill 矩阵扩张** | [#3190 Tavily MCP](https://github.com/nanocoai/nanoclaw/pull/3190)、[#3198 AnyDoc](https://github.com/nanocoai/nanoclaw/pull/3198)、[#3050 Dial](https://github.com/nanocoai/nanoclaw/pull/3050) | 第三方贡献者批量提交工具能力 |

**诉求分析**：用户对"开箱即用"（setup 简化）和"能力外延"（Skill 生态）两条路径的需求并存，与项目"渠道 + 工具"双轨扩张的战略吻合。

---

## 5. Bug 与稳定性

| 严重度 | Bug 描述 | 关联 PR | 是否已有 Fix |
|---|---|---|---|
| 🟡 中 | 进程卡失败标题仅展示工具动作（如"执行系统检查失败"），具体原因被吞 | [#3197](https://github.com/nanocoai/nanoclaw/pull/3197) | ✅ **已合并** |
| 🟡 中 | 数据库迁移 020+ 后，现有 wirings 缺少 channel destinations，可能引发运行时解析失败 | [#3145](https://github.com/nanocoai/nanoclaw/pull/3145) | ✅ Fix PR 待合并（migration 021） |
| 🟠 中高 | 未知 slash 命令被归类为 `passthrough`，触发 Agent SDK 误解释为 Claude Code 命令，导致响应被静默丢弃 | [#2346](https://github.com/nanocoai/nanoclaw/pull/2346) | ✅ Fix PR 待合并（**已积压 ~3 个月**） |
| 🟢 低 | 容器挂载缺少 `readonly` 选项，存在权限提升风险 | [#3196](https://github.com/nanocoai/nanoclaw/pull/3196) | ✅ Fix PR 待合并 |

**稳定性总评**：今日未发现新的崩溃/回归报告；既有 Bug 均有修复路径，但 **#2346（slash 命令误处理）自 2026-05-08 开放至今已 92 天未合并**，建议优先 review。

---

## 6. 功能请求与路线图信号

| 提案 | PR/来源 | 可能纳入版本判断 |
|---|---|---|
| **Mattermost 渠道 v2 接入** | [#3199](https://github.com/nanocoai/nanoclaw/pull/3199) | 🔥 **高概率**——已废弃旧实现，新 PR 与 `ChannelAdapter` 契约对齐 |
| **Tavily MCP 搜索工具** | [#3190](https://github.com/nanocoai/nanoclaw/pull/3190) | 🟢 中概率——作为 Utility skill 易合并 |
| **AnyDoc 文档转换工具** | [#3198](https://github.com/nanocoai/nanoclaw/pull/3198)（core-team） | 🔥 **高概率**——core-team 成员提交，优先级有保障 |
| **Dial 渠道接入** | [#3050](https://github.com/nanocoai/nanoclaw/pull/3050) | 🟡 中概率——已开放 ~25 天，仍待 review |
| **首 Agent 模板 setup 向导** | [#2909](https://github.com/nanocoai/nanoclaw/pull/2909)（core-team） | 🔥 **高概率**——核心 setup 体验的 part 2 |
| **只读挂载加固** | [#3196](https://github.com/nanocoai/nanoclaw/pull/3196) | 🟢 中概率——安全类小修通常快速合入 |

**路线图信号**：项目明显在强化 **(a) 渠道生态**（Mattermost、Dial）和 **(b) 工具生态**（Tavily、AnyDoc）两个维度，同时通过 #2909 推进**新手 onboarding**。下一版本大概率会包含至少 1 个新渠道 + 1-2 个新 Skill。

---

## 7. 用户反馈摘要

由于今日 Issues 区域无活动、无评论数据，本节反馈信号主要来自 PR 描述中作者自述的使用场景：

- **失败可观测性诉求**（PR #3197）：用户（contributor tier2tech-tian）指出"agent-runner 已在 `resultSummary` 中上报具体错误，但过程卡失败标题只使用工具动作，导致用户只能看到泛化文案"——说明**当前失败提示粒度过粗**是真实痛点，该 Fix PR 已合并。
- **slash 命令兼容性问题**（PR #2346）：未知命令被 SDK 误解释导致响应被丢弃，反映用户在自定义 Agent 工作流时**对命令空间隔离**有需求。
- **历史迁移数据完整性**（PR #3145）：messaging-group wirings 缺少 destinations，说明**升级链路的数据连续性**需要保障。
- **渠道多样性需求**（PR #3199、#3050）：Mattermost、Dial 渠道请求来自不同贡献者，说明社区部署环境跨越多种企业 IM 平台。

**满意度信号**：PR #3197 在合并前已完成 1427 项全量测试 + 跨层飞书卡片 JSON 测试，作者明显重视质量反馈；这种"测试先行 + 跨层验证"的提交风格对项目健康度是正向贡献。

---

## 8. 待处理积压（提醒维护者关注）

按开放时长排序，**今日仍未合并且积压较久的 PR**：

| PR | 标题 | 开放日期 | 积压天数 | 风险 |
|---|---|---|---|---|
| [#2346](https://github.com/nanocoai/nanoclaw/pull/2346) | fix(formatter): treat unknown slash commands as normal chat | 2026-05-08 | **92 天** | 🟠 slash 命令静默丢消息，影响用户体验 |
| [#2909](https://github.com/nanocoai/nanoclaw/pull/2909) | [core-team] feat(setup): template setup flow | 2026-07-02 | 37 天 | 🟡 core-team 主推，新手体验关键 |
| [#3050](https://github.com/nanocoai/nanoclaw/pull/3050) | feat(setup): add Dial to the channel picker | 2026-07-14 | 25 天 | 🟢 功能扩展，影响面有限 |
| [#3145](https://github.com/nanocoai/nanoclaw/pull/3145) | fix(db): backfill destinations for existing wirings | 2026-07-28 | 11 天 | 🟡 数据库迁移正确性相关，建议优先 review |

**重点提醒**：
- 🔴 **#2346 已积压超 3 个月**，涉及响应静默丢弃的真实 Bug，建议维护者优先处理或给出明确进度反馈，避免贡献者流失。
- 🟡 **#2909 为 core-team 自有 PR**，其积压可能反映 setup 流程的设计争议，建议维护者公开讨论进展。

---

## 附录：今日 PR 全景

| # | 状态 | 标题 | 作者 |
|---|---|---|---|
| [#3199](https://github.com/nanocoai/nanoclaw/pull/3199) | OPEN | Add Mattermost channel integration (v2) | wakqasahmed |
| [#3198](https://github.com/nanocoai/nanoclaw/pull/3198) | OPEN | Add AnyDoc document conversion skill | amit-shafnir |
| [#3197](https://github.com/nanocoai/nanoclaw/pull/3197) | ✅ CLOSED | fix(progress): 失败状态展示具体原因 | tier2tech-tian |
| [#3196](https://github.com/nanocoai/nanoclaw/pull/3196) | OPEN | Fix/add mount readonly | teran13 |
| [#3190](https://github.com/nanocoai/nanoclaw/pull/3190) | OPEN | feat: add Tavily MCP tool skill | manisrinivasan2k1 |
| [#3145](https://github.com/nanocoai/nanoclaw/pull/3145) | OPEN | fix(db): backfill destinations for existing wirings | tlysanhuo |
| [#3050](https://github.com/nanocoai/nanoclaw/pull/3050) | OPEN | feat(setup): add Dial to the channel picker | OmriBenShoham |
| [#2909](https://github.com/nanocoai/nanoclaw/pull/2909) | OPEN | [core-team] feat(setup): template setup flow | amit-shafnir |
| [#2346](https://github.com/nanocoai/nanoclaw/pull/2346) | OPEN | fix(formatter): treat unknown slash commands | SidhayaPravda618 |
| [#546](https://github.com/nanocoai/nanoclaw/pull/546) | ✅ CLOSED | Add Mattermost channel skill（旧） | wakqasahmed |

---

**总体健康度评分**：⭐⭐⭐⭐ (4/5)
- ✅ PR 流转活跃，贡献者来自多个不同成员
- ✅ 已有核心维护者（core-team）持续主导关键特性
- ⚠️ Issues 区域零活动需警惕——可能反映用户上报门槛或项目对外透明度问题
- ⚠️ 个别关键 Bug 修复（#2346）积压超 90 天，需关注 review 周期

> 📌 *本报告基于 2026-08-08 GitHub API 数据生成，数据口径以 PR/Issue 元信息为准。*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报

**报告日期**：2026-08-08
**数据来源**：[github.com/nearai/ironclaw](https://github.com/nearai/ironclaw)

---

## 1. 今日速览

IronClaw 今日进入高强度开发周期，过去 24 小时共产生 **50 条 Issue 更新（36 新开/活跃、14 已关闭）** 与 **50 条 PR 更新（38 待合并、12 已合并/关闭）**，活跃度显著高于常态。值得关注的是，**无新版本发布**，所有变动仍处于代码与文档层面。今日工作高度聚焦于三大主线：（1）渐进式工具披露（progressive tool disclosure）的上线收尾与可观测化；（2）"Doc-Truth" 文档真实性流水线（5 个 PR 系列）；（3）QA Bug Bash 中暴露的 Slack/Telegram/Runner 系列问题的修复与衍生拆分。整体看，项目处于"内部灰度稳定、对外尚未发布新版本"的阶段，社区反馈密集流入。

---

## 2. 版本发布

**今日无新版本发布。** 内部生产已默认开启 progressive tool disclosure（[#6810 已关闭](https://github.com/nearai/ironclaw/issues/6810)），但二进制版本尚未切出。下一次发布预计会聚合文档重构、工具披露度量、沙箱 profile 与 channel delivery tool 等多项工作。

---

## 3. 项目进展

今日合并/关闭的 PR 体现出 **6 条主要推进线**：

| 方向 | PR | 关键内容 |
|------|-----|---------|
| 渐进式工具披露落地 | [#6810](https://github.com/nearai/ironclaw/issues/6810) CLOSED | progressive tool disclosure 成为 Reborn 默认，且不损害日常工具使用 |
| 工具披露度量可观测化 | [#7372](https://github.com/nearai/ironclaw/pull/7372) CLOSED | 锁定宽目录 schema-token 减少下限并使漂移可见 |
| Channel Delivery 双车道模型 | [#7157](https://github.com/nearai/ironclaw/pull/7157) CLOSED | 引入显式 channel delivery 工具，删除旧投递启发式 |
| 沙箱 profile 显式化 | [#7214](https://github.com/nearai/ironclaw/pull/7214) CLOSED | 显式 Docker 与 Railway 用户沙箱 profile，workspace 按租户+用户作用域隔离 |
| 依赖批量更新 | [#7324](https://github.com/nearai/ironclaw/pull/7324) CLOSED | everything-else 组 11 项依赖升级 |
| Skill 选择权归还模型 | [#6938](https://github.com/nearai/ironclaw/pull/6938) OPEN (XL, stacked on #6745) | 主机不再用关键词打分器选技能，由模型通过 `builtin.skill_activate` 决定 |

**整体推进度评估**：今日完成的工作集中在「内功」层面——工具系统语义、沙箱隔离、信道投递架构都在向 v1.2.0 的稳定性收口迈进；但因为无新版本交付，对用户的可感知变化有限。

---

## 4. 社区热点

**最高讨论度 Issues（按评论数）**：

1. [#7340](https://github.com/nearai/ironclaw/issues/7340) — **6 评论** · [OPEN] 无法将模型设置恢复出厂默认值
   - 用户在 Settings → Inference 下更换 provider/model 后找不到还原入口。诉求是设置层应提供 "Reset to defaults" 动作，体现的是 *配置可逆性* 的基本期望。

2. [#6989](https://github.com/nearai/ironclaw/issues/6989) — **4 评论** · [OPEN] Token 计量 BUG：基于 content_ref 字符串长度估算输入 token
   - `ModelWorkRequest::for_assistant` 把引用字符串长度当作 token 数，会严重高估/低估真实成本，归属 pi-harness 适配计划 P1。

3. [#7317](https://github.com/nearai/ironclaw/issues/7317) — **3 评论** · [OPEN] Doc-Truth 验证流水线提案
   - 这是今日 **最关键的元议题**：稳定版与文档不同步曾导致真实破坏性变更（如 `origin_gate_matrix`）。提案已直接催生 5 个 PR（[#7375](https://github.com/nearai/ironclaw/pull/7375)、[#7376](https://github.com/nearai/ironclaw/pull/7376)、[#7378](https://github.com/nearai/ironclaw/pull/7378)、[#7379](https://github.com/nearai/ironclaw/pull/7379)、[#7381](https://github.com/nearai/ironclaw/pull/7381)）。

4. [#7360](https://github.com/nearai/ironclaw/issues/7360)、[#6476](https://github.com/nearai/ironclaw/issues/6476)、[#6590](https://github.com/nearai/ironclaw/issues/6590)、[#7185](https://github.com/nearai/ironclaw/issues/7185)、[#7292](https://github.com/nearai/ironclaw/issues/7292) — 各 **2 评论**
   - 涵盖夜间压力测试缺口、Slack 激活编码错误、Windows serve 启动失败、跨会话记忆丢失、runner 心跳错误，均为今日 QA 与 Champions 反馈的高频痛点。

**讨论背后的诉求**：用户既关注 *基础可用性*（设置可恢复、跨会话记忆稳定、Windows 启动正常），也强烈要求 *文档与发布的同步性*，后者正在通过 Doc-Truth 系列 PR 系统化回应。

---

## 5. Bug 与稳定性

按严重程度排列：

| 级别 | Issue | 状态 | Fix PR | 说明 |
|------|-------|------|--------|------|
| 🔴 P1 | [#6476](https://github.com/nearai/ironclaw/issues/6476) Slack `extension_activate` 编码错误 → 模型幻觉 | **已关闭** | 已修 | 模型把工具失败解释为"需要 admin 权限"，诱骗用户 |
| 🔴 P1 | [#6643](https://github.com/nearai/ironclaw/issues/6643) Telegram 配对后消息不处理 | **已关闭** | 已修 | 衍生 [#7368](https://github.com/nearai/ironclaw/issues/7368) 指向 DeepSeek 类模型延迟根因 |
| 🔴 P1 | [#6644](https://github.com/nearai/ironclaw/issues/6644) Telegram 回复错配给错误用户消息 | **已关闭** | 已修 | |
| 🔴 P1 | [#6475](https://github.com/nearai/ironclaw/issues/6475) Telegram `/pair` 被当作文本处理 | **已关闭** | 已修 | |
| 🔴 P1 | [#7292](https://github.com/nearai/ironclaw/issues/7292) 已安装工具无法使用 / runner 心跳错误 | OPEN | 待跟进 | CoinGecko Demo 模式下复现 |
| 🔴 P1 | [#5456](https://github.com/nearai/ironclaw/issues/5456) Routine run 因 runner lease 过期失败 | OPEN | 待跟进 | 90 秒静默阈值对多工具流程过短 |
| 🔴 P1 | [#7298](https://github.com/nearai/ironclaw/issues/7298) "请求未发送" 与 "runner 失联" 双错误 | OPEN | 待跟进 | |
| 🔴 P1 | [#7295](https://github.com/nearai/ironclaw/issues/7295) Slack 用户身份错乱（DM 发给错误用户） | OPEN | 待跟进 | |
| 🔴 P1 | [#7344](https://github.com/nearai/ironclaw/issues/7344) Slack 已连接但 agent 不识别 | OPEN | 待跟进 | 与 [#7247](https://github.com/nearai/ironclaw/issues/7247)（GitHub 误报已连接）同类根因 |
| 🟠 P1 | [#7246](https://github.com/nearai/ironclaw/issues/7246) / [#7247](https://github.com/nearai/ironclaw/issues/7247) / [#7294](https://github.com/nearai/ironclaw/issues/7294) Agent 幻觉自动化状态/跨 scope 记忆错乱 | OPEN | 部分有 [#6810](https://github.com/nearai/ironclaw/issues/6810) 已关 | "工具状态/记忆查询"链路不稳 |
| 🟠 P1 | [#6989](https://github.com/nearai/ironclaw/issues/6989) Token 计量错误（参考字符串长度） | OPEN | 待跟进 | 计费/限制会失真 |
| 🟠 P1 | [#7074](https://github.com/nearai/ironclaw/issues/7074) 多工具会议研究调用不可用函数失败 | OPEN | 待跟进 | |
| 🟡 中 | [#4874](https://github.com/nearai/ironclaw/issues/4874) WebChat v2 跨主机 HTTP 触发 "Illegal invocation" | **已关闭** | 已修 | |
| 🟡 中 | [#6590](https://github.com/nearai/ironclaw/issues/6590) Windows `serve` 因工作区路径与默认 skill 根重叠失败 | OPEN | 待跟进 | Windows 用户启动阻塞 |
| 🟡 中 | [#7185](https://github.com/nearai/ironclaw/issues/7185) 跨会话记忆不可靠召回 | OPEN | **[#7365](https://github.com/nearai/ironclaw/pull/7365)** 已在审 | Champions 周会上多名测试者独立复现 |
| 🟢 文档 | [#7367](https://github.com/nearai/ironclaw/issues/7367) 文档仍声称 chat 不能连 channel | **已关闭** | Doc-Truth 系列 PR 跟进 | |

**统计**：今日共 **14 条 Issue 被关闭**，其中 5 条为 Telegram/Slack/WebChat QA Bug，呈现 *"QA Bug Bash 长尾清理" + "新 P1 持续涌现"* 的态势。仍有 5+ 条 P1 Bug 处于 OPEN 无对应 fix 状态，需要维护者重点关注。

---

## 6. 功能请求与路线图信号

- **[#7340](https://github.com/nearai/ironclaw/issues/7340) 设置恢复出厂默认值**：最朴素也最该有的功能，预计会作为 v1.2.x 的小补丁很快合入。
- **[#7317](https://github.com/nearai/ironclaw/issues/7317) Doc-Truth 验证流水线**：5 个 PR 已在排队（[#7375](https://github.com/nearai/ironclaw/pull/7375)、[#7376](https://github.com/nearai/ironclaw/pull/7376)、[#7378](https://github.com/nearai/ironclaw/pull/7378)、[#7379](https://github.com/nearai/ironclaw/pull/7379)、[#7381](https://github.com/nearai/ironclaw/pull/7381)），其中 PR #7379 引入 `docs-live` 分支让 release automation 在每个 stable tag 上 force-point，从根上消除文档与二进制发布错位。
- **[#7360](https://github.com/nearai/ironclaw/issues/7360) 扩展压力测试至 builtin / durable write**：第 1 阶段 [PR #7382](https://github.com/nearai/ironclaw/pull/7382) 已开。
- **[#7380](https://github.com/nearai/ironclaw/issues/7380) Epic：在合并前强制持久化状态兼容性**（HIGH 风险）：源于 1.0.0-rc.1 → 1.1.0-rc.1 升级暴露的缺口，SQL 迁移之外还有大量用户态/操作员态需要回归测试。
- **[#7362](https://github.com/nearai/ironclaw/issues/7362) 用户可见错误摘要从 host_api 抽到 per-surface i18n**：清理 65 条硬编码英文句子，支持本地化。
- **[#7383](https://github.com/nearai/ironclaw/issues/7383) chore：跟踪 `tool_disclosure_port.rs`（~4.4k 行）分解**：文件超 3,000 行需要分解追踪 issue（架构规则 #5）。
- **[#7369](https://github.com/nearai/ironclaw/issues/7369) Agent 出错时无法捕获 trace**：UI 缺 trace 按钮，可观测性缺口。

**判断**：v1.2.0 候选清单已较为清晰——工具披露（[#7166](https://github.com/nearai/ironclaw/issues/7166) epic）、channel delivery 后续（[#7377](https://github.com/nearai/ironclaw/pull/7377)）、doc-truth、内存召回（[#7365](https://github.com/nearai/ironclaw/pull/7365)）。但 v1.2.0 何时切版尚无信号。

---

## 7. 用户反馈摘要

- **基础可用性痛点**：用户改完模型设置不能恢复（[#7340](https://github.com/nearai/ironclaw/issues/7340)）；Windows 用户完全无法启动 `serve`（[#6590](https://github.com/nearai/ironclaw/issues/6590)）；runner 90 秒 lease 对真实工作流太苛刻（[#5456](https://github.com/nearai/ironclaw/issues/5456)）。
- **记忆与一致性**：Devon（法律领域，由 Tobias 转述）反映 *跨会话上下文不能召回*（[#7185](https://github.com/nearai/ironclaw/issues/7185)）；Agent 会在没核对真实状态时直接断言自动化"已运行"或工具"已连接"（[#7246](https://github.com/nearai/ironclaw/issues/7246)、[#7247](https://github.com/nearai/ironclaw/issues/7247)、[#7294](https://github.com/nearai/ironclaw/issues/7294)）。这一类"幻觉式确认"正在损害用户对系统的信任。
- **通道体验**：Telegram 配对后消息丢失（[#6643](https://github.com/nearai/ironclaw/issues/6643)），以及 channel 回复可能延迟到 *分钟级*（[#7368](https://github.com/nearai/ironclaw/issues/7368)，DeepSeek-class 模型下尤其明显）。
- **文档失真**：[#6476](https://github.com/nearai/ironclaw/issues/6476) 显示 docs 写"chat 不能连接 channel"直接喂给模型，导致模型拒绝帮助用户连接账号。这条已被切成

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报

**报告日期：2026-08-08**
**项目地址：github.com/netease-youdao/LobsterAI**

---

## 1. 今日速览

LobsterAI 在过去 24 小时整体活跃度处于**中高位**：发布 1 个新版本（2026.8.7），合并/关闭 6 个 PR，同时新开 4 个 Issue 并关闭 3 个历史积压 Issue。社区层面出现了若干较高质量的 Bug 报告和功能建议，维护者响应迅速——尤其是针对 SiliconFlow 等含斜杠模型 ID 的 Provider 失效问题，已在当日内提交 PR #2452 形成完整闭环。综合来看，项目处于**稳定迭代、主动清理积压**的健康状态。

---

## 2. 版本发布

### 🦞 LobsterAI 2026.8.7 已发布

本次发布的主要内容包括：

- **feat(cowork): 新增标题栏会话搜索** — 来源 PR [#2435](https://github.com/netease-youdao/LobsterAI/pull/2435)
- **feat: Markdown LaTeX 数学公式分隔符支持** — 来源 PR [#2449](https://github.com/netease-youdao/LobsterAI/pull/2449)
- **fix(win-installer): 通过 extractor 修复空 watchdog 退出码问题** — 来源 PR [#2446](https://github.com/netease-youdao/LobsterAI/pull/2446)
- **fix(cowork): 修复 Windows 平台全屏代码工具栏点击失效** — 来源 PR [#2450](https://github.com/netease-youdao/LobsterAI/pull/2450)
- **fix(openclaw): 在 config.set 中剥离插件索引管理的键** — 来源 PR [#2445](https://github.com/netease-youdao/LobsterAI/pull/2445)
- **fix(cowork): 修复会话搜索相关问题** — 来源 PR [#2448](https://github.com/netease-youdao/LobsterAI/pull/2448)

同时合并的发布分支 PR [#2451](https://github.com/netease-youdao/LobsterAI/pull/2451) 显示，2026.8.5 发布同步进入 main，整体增强了 Cowork 会话内搜索、数学公式渲染、IM 分析、OpenClaw 配置、插件安装以及 Windows 安装/升级可靠性。

⚠️ **未提及破坏性变更（Breaking Changes）**，未标注迁移注意事项，推测为向后兼容的小版本升级。建议 Windows 用户在升级前保留旧版本安装包以便回滚。

---

## 3. 项目进展

今日合并/关闭的 6 个 PR 体现了三大方向的同步推进：

| 方向 | PR | 影响 |
|------|-----|------|
| **Cowork 体验完善** | [#2450](https://github.com/netease-youdao/LobsterAI/pull/2450)、[#2448](https://github.com/netease-youdao/LobsterAI/pull/2448) | 修复 Windows 全屏点击与会话搜索的可用性问题 |
| **OpenClaw 健壮性** | [#2445](https://github.com/netease-youdao/LobsterAI/pull/2445)、[#2449](https://github.com/netease-youdao/LobsterAI/pull/2449) | 防止配置写入冲突，增强 Markdown 数学公式 |
| **安装器稳定性** | [#2446](https://github.com/netease-youdao/LobsterAI/pull/2446) | 修复 Windows 安装/升级时 watchdog 崩溃 |

整体来看，本日推进可量化为：**3 个产品功能/体验改进** + **3 个稳定性修复**，且全部面向真实用户场景（搜索、安装、跨平台兼容），**项目健康度良好**。

---

## 4. 社区热点

按互动频次与紧迫性排序：

1. **[Issue #2443](https://github.com/netease-youdao/LobsterAI/issues/2443)** — SiliconFlow 等含斜杠模型 ID 的自定义 Provider 在界面中无法选择（评论 1，🆕 今日更新）
   - *诉求本质*：大量 OpenAI 兼容服务商（SiliconFlow、ModelScope 等）使用 `provider/model_id` 命名规范，属于高频痛点。
2. **[Issue #1195](https://github.com/netease-youdao/LobsterAI/issues/1195)** — 自建 Skill 安装后重启不显示（评论 2，stale 4 个月，今日更新）
   - *诉求本质*：Skill 面板是核心能力扩展界面，Bug 阻碍用户使用自建能力。
3. **[Issue #1263](https://github.com/netease-youdao/LobsterAI/issues/1263)** — 定时任务 UI 重复显示且报 API 限流（评论 2，stale，今日已关闭）
   - *诉求本质*：定时任务是高频自动化场景，重复显示会消耗额外 API 配额。
5. **[Issue #1273](https://github.com/netease-youdao/LobsterAI/issues/1273)** — sql.js WASM 高频操作导致内存越界与数据库损坏（评论 2，stale，今日已关闭）
   - *诉求本质*：底层存储引擎稳定性问题，影响所有长时间 Cowork 用户。

---

## 5. Bug 与稳定性

按严重程度排序：

| 严重度 | Issue | 描述 | 是否有修复 PR |
|--------|-------|------|---------------|
| 🔴 **严重（数据丢失风险）** | [#1273](https://github.com/netease-youdao/LobsterAI/issues/1273) | sql.js WASM `memory access out of bounds` 不可恢复崩溃 + `fs.writeFileSync` 非原子写入导致数据库永久损坏 | ❌ 已关闭，但未见修复 PR 链接，存在风险 |
| 🟠 **中（功能阻塞）** | [#2443](https://github.com/netease-youdao/LobsterAI/issues/2443) | 含斜杠的模型 ID（如 `deepseek-ai/DeepSeek-V4-Flash`）无法在 UI 选择 | ✅ PR [#2452](https://github.com/netease-youdao/LobsterAI/pull/2452) 当日提交 |
| 🟡 **中（核心功能失效）** | [#1195](https://github.com/netease-youdao/LobsterAI/issues/1195) | 自建 Skill 重启后不显示 | ❌ 4 个月未修复 |
| 🟡 **中（沉默失败）** | [#2447](https://github.com/netease-youdao/LobsterAI/issues/2447) | 执行无结果也无错误信息 | ❌ 今日新开，待响应 |
| ⚪ **轻** | [#1263](https://github.com/netease-youdao/LobsterAI/issues/1263) | 定时任务重复显示 | ✅ 已关闭 |

**维护建议**：尽管 #1273 已被关闭，但因属于**底层引擎崩溃 + 数据丢失**双重风险，建议在 2026.8.8 后续版本中引入 atomic write（如 `fs.writeFile` + rename）和 WASM 内存监控。

---

## 6. 功能请求与路线图信号

| 功能请求 | Issue | 状态 | 路线图可能性评估 |
|----------|-------|------|----------------|
| **输入框编辑模式**：长 Prompt 编辑痛点，支持 Enter 换行 / Ctrl+Enter 发送 | [#2444](https://github.com/netease-youdao/LobsterAI/issues/2444) | 🆕 今日新开 | ⭐⭐⭐ 高 — 与 Cowork 长文档场景契合，作者给出了两种方案对比 |
| **多 AGENT 绑定不同 IM 机器人与模型** | [#1265](https://github.com/netease-youdao/LobsterAI/issues/1265) | ❌ 已关闭（未实现） | ⭐⭐ 中 — 与"Agent 团队"产品方向一致，但已被关闭，需关注是否进入产品规划 |
| **会话内搜索（已落地）** | [#2435](https://github.com/netease-youdao/LobsterAI/pull/2435) | ✅ 已发布 | ✅ 已纳入 2026.8.7 |
| **Markdown 数学公式支持（已落地）** | [#2449](https://github.com/netease-youdao/LobsterAI/pull/2449) | ✅ 已发布 | ✅ 已纳入 2026.8.7 |

---

## 7. 用户反馈摘要

从 Issues 评论中提炼的真实用户痛点：

- **"长 Prompt 写作体验不佳"**（[#2444](https://github.com/netease-youdao/LobsterAI/issues/2444)）—— 用户明确抱怨"万一换行忘记按 Shift，消息编辑到一半就直接发送了"，反映 Cowork 长文档场景下 Enter/Shift+Enter 的交互模型不友好。
- **"使用 SiliconFlow 时完全无法选择模型"**（[#2443](https://github.com/netease-youdao/LobsterAI/issues/2443)）—— 用户在评论中指出该问题"影响所有模型 ID 带斜杠的 OpenAI 兼容服务商"，揭示该 Bug 的覆盖面比表面看起来更广。
- **"定时任务浪费 API 配额"**（[#1263](https://github.com/netease-youdao/LobsterAI/issues/1263)）—— 用户反馈 UI 上显示两个相同任务都触发 API 调用，说明去重/幂等机制存在漏洞。
- **"执行无反馈"**（[#2447](https://github.com/netease-youdao/LobsterAI/issues/2447)）—— 用户面对"既无结果也无错误"的沉默失败难以排查，反映错误兜底/日志可观测性有改进空间。
- **"底层数据库会永久损坏"**（[#1273](https://github.com/netease-youdao/LobsterAI/issues/1273)）—— 长期 Cowork 用户最担忧的问题，影响留存与信任。

**整体满意度信号**：用户在功能层面对会话搜索、LaTeX 支持等改进表达欢迎（已发布），但在稳定性与跨平台兼容性（Windows 安装、斜杠 ID 解析）方面仍有显著不满。

---

## 8. 待处理积压

以下重要 Issue/PR 长期未响应或状态异常，提醒维护者关注：

| Issue/PR | 创建时间 | 等待时长 | 风险提示 |
|----------|----------|----------|----------|
| [#1195](https://github.com/netease-youdao/LobsterAI/issues/1195) 自建 Skill 重启不显示 | 2026-04-01 | **129 天** | 核心 Skill 面板功能 bug，影响能力扩展用户 |
| [#1265](https://github.com/netease-youdao/LobsterAI/issues/1265) 多 AGENT 绑定 IM 机器人/模型 | 2026-04-02 | **128 天** | 被关闭但未给出明确解释或替代方案，建议给出 Roadmap 回应 |
| [#1273](https://github.com/netease-youdao/LobsterAI/issues/1273) sql.js WASM 崩溃 | 2026-04-02 | **128 天** | 数据丢失级风险，被关闭前应确认已有修复或在后续版本中处理 |
| [#2452](https://github.com/netease-youdao/LobsterAI/pull/2452) preserve provider for slashed model ids | 2026-08-07 | **1 天** | 修复关键 UI Bug，建议优先 review 合并 |

---

## 项目整体健康度评估

| 维度 | 评分 | 说明 |
|------|------|------|
| 活跃度 | ⭐⭐⭐⭐ | 24h 内 7 Issue + 7 PR + 1 Release |
| 响应速度 | ⭐⭐⭐⭐ | SiliconFlow 模型 ID 问题当日提 PR |
| 稳定性 | ⭐⭐⭐ | 仍有底层数据库崩溃风险未根治 |
| 社区沟通 | ⭐⭐⭐ | 关闭 3 个 stale Issue 但未对核心诉求给出明确回应 |
| 路线透明度 | ⭐⭐ | 关闭的功能请求缺乏替代说明 |

**结论**：LobsterAI 当前处于**稳步迭代阶段**，版本节奏稳定（2026.8.5 → 2026.8.7 短时间内连续推进），核心场景持续打磨中。建议下一阶段聚焦：(1) 修复 Issue #1195 与 sql.js 崩溃；(2) 对长期功能请求给出明确的 Roadmap 反馈；(3) 优化 Windows 平台安装与错误兜底的可观测性。

---

*本报告基于 2026-08-08 当日 GitHub 数据生成，所有链接均可直接访问原始 Issue/PR。*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目日报 · 2026-08-08

> 数据来源：[agentscope-ai/QwenPaw](https://github.com/agentscope-ai/QwenPaw) · 统计窗口：过去 24 小时

---

## 1. 今日速览

CoPaw 今日进入 **v2.1.0-beta.2 公测阶段**，仓库活跃度处于近一个月高位：24 小时内 **31 条 Issue 更新、49 条 PR 更新**，并发布 1 个 beta 版本。社区反馈集中在三方面——桌面模式交互回归、Windows 安装/兼容性、Provider 互操作性。整体看项目处于 **"密集修复 + 快速迭代"** 状态，但 v2.1 beta 也引入了若干需尽快处理的回归问题，建议维护者优先关注 Windows 安装链路与 Telegram ACL 状态丢失两个高频痛点。

---

## 2. 版本发布

### v2.1.0-beta.2

主要变更：
- **#6653** 修复 CI 中 real-behavior-proof 章节提取的 fence-aware 逻辑（修复 #6626）。
- **#6xx** 修复 web workspace 启动时 checkpoint 自动快照丢失（修复 checkpoints 自动恢复问题）。

⚠️ **已知问题（基于社区反馈）**：
- 桌面模式左键点击需要双击才能打开应用（#6790）。
- 对话窗口内文本无法选中/复制，只能整段复制（#6797、PR #6802、#6801 已在修复中）。
- Profile 分类硬编码官方 persona 文件，自定义 `.md` 文件无法切换（#6785 → PR #6808）。
- 任务执行期间对话框无法提交新会话（#6796）。
- Agent Kanban 创建返回 405、热重载期间接口短暂 404（#6794）。
- 内置 ACP runner 引用已弃用 npm 包名 `@zed-industries/claude-agent-acp`（#6792）。

**迁移注意事项**：从 v2.0.x 升级到 v2.1.0-beta.2 前请备份 workspace 目录，特别是 `access_control.json`、自定义 `.md` persona 文件以及 `system_prompt_files` 配置——新版本对 Profile 分类与 ACL 存储位置均有改动。

---

## 3. 项目进展

### 已合并/关闭 PR（共 22 条），亮点包括：

| PR | 类型 | 说明 |
|---|---|---|
| [#4694](https://github.com/agentscope-ai/QwenPaw/pull/4694) | Website | 下载页 UI 重构与优化（已关闭） |
| [#6789](https://github.com/agentscope-ai/QwenPaw/issues/6789) | Bug | GitHub 账号解绑流程缺陷处理 |
| [#6790](https://github.com/agentscope-ai/QwenPaw/issues/6790) | UX | v2.1.0-beta.2 桌面模式单击开启反馈 |
| [#6796](https://github.com/agentscope-ai/QwenPaw/issues/6796) | Bug | 2.1 beta2 任务执行时新会话提交失效 |
| [#6797](https://github.com/agentscope-ai/QwenPaw/issues/6797) | UX | 桌面模式文本选择/复制回归 |
| [#6480](https://github.com/agentscope-ai/QwenPaw/issues/6480) | Bug | `nohup`/`&` 后台进程 shell 工具卡住 |
| [#6565](https://github.com/agentscope-ai/QwenPaw/issues/6565) | Bug | 多行 shell 命令换行折叠为空格 |
| [#6773](https://github.com/agentscope-ai/QwenPaw/issues/6773) | Bug | Linux 下 doom-loop/rubric gate 失效 |
| [#6619](https://github.com/agentscope-ai/QwenPaw/issues/6619) | Bug | `ToolCallBlock` 缺少 `extra_content` 导致崩溃 |
| [#6717](https://github.com/agentscope-ai/QwenPaw/issues/6717) | Patrol | 巡检机器人测试用例 |
| [#6787](https://github.com/agentscope-ai/QwenPaw/issues/6787) | Bug | Telegram ACL 在多任务场景下重置 |

**整体判断**：今日合并 PR 多以 bug 收尾为主，社区贡献与官方维护并行推进，#4694 的关闭标志着网站下载页重构告一段落。但仍有 27 条 PR 处于待合并状态，需关注 review 节奏是否会被 v2.1 beta 的 hotfix 需求挤压。

---

## 4. 社区热点

按评论数排序：

1. **[#6116](https://github.com/agentscope-ai/QwenPaw/issues/6116)（8 评论）** — Agent doom loop：单轮内重复触发同一工具调用。当前标记 wontfix 关闭。  
   → **诉求**：用户希望更早（<6 次）触发循环检测，减少 API/Token 浪费。

2. **[#6782](https://github.com/agentscope-ai/QwenPaw/issues/6782)（8 评论，新开）** — Docker 2.0.1 插件市场、应用市场始终"维护中"。  
   → **诉求**：自部署 Docker 用户核心功能不可用，影响插件生态扩展。

3. **[#6732](https://github.com/agentscope-ai/QwenPaw/issues/6732)（6 评论）** — MCP 工具周期性失效，需重启容器恢复。  
   → **诉求**：MCP 连接保活/重连机制缺失，长时间运行场景可靠性差。

4. **[#6490](https://github.com/agentscope-ai/QwenPaw/issues/6490)（4 评论）** — 请求内置 Volcengine Agent Plan 与小米 MiMo Standard API。  
   → **诉求**：国产模型生态拓展。

5. **[#6786](https://github.com/agentscope-ai/QwenPaw/issues/6786)（4 评论）** — Telegram channel 在 multica 新任务时 ACL 白名单被重置，授权用户被拒。  
   → **诉求**：ACL 存储路径/共享机制需要修正（已有 PR #6788 修复）。

**热点背后的共性诉求**：① 部署/运维稳定性（Docker、容器重启、文件锁）；② 国产模型/渠道兼容（飞书、Telegram、企业微信、OneBot）；③ Beta 版本回归管理。

---

## 5. Bug 与稳定性

按严重程度排列：

### 🔴 高严重度（影响核心功能或长会话）

- **[#6768](https://github.com/agentscope-ai/QwenPaw/issues/6768)** — Agent 多步任务完成后进入无限循环，会话阻塞数小时。  
- **[#6775](https://github.com/agentscope-ai/QwenPaw/issues/6775)** — Windows 桌面版被 Malware Bytes 报告 Trojan Loader（疑似误报但导致用户卸载）。  
- **[#6780](https://github.com/agentscope-ai/QwenPaw/issues/6780)** — v2.0.1 空闲几十分钟后回卡死，只能重启进程。  
- **[#6794](https://github.com/agentscope-ai/QwenPaw/issues/6794)** — Agent Kanban 创建 Issue 返回 405，热重载期间 404。  
- **[#6810](https://github.com/agentscope-ai/QwenPaw/issues/6810)** — Windows 安装/更新被浏览器扩展 NM host 锁文件导致 NSIS 报错。  
- **[#6811](https://github.com/agentscope-ai/QwenPaw/issues/6811)** — OpenAI Responses 续写摘要忽略 `disable_thinking`，60s 取消被误报为格式错误。

### 🟡 中严重度（功能降级）

- **[#6782](https://github.com/agentscope-ai/QwenPaw/issues/6782)** — Docker 插件市场维护中。  
- **[#6732](https://github.com/agentscope-ai/QwenPaw/issues/6732)** — MCP 工具周期性失效。  
- **[#6786](https://github.com/agentscope-ai/QwenPaw/issues/6786)** — Telegram ACL 重置（**已有 fix PR [#6788](https://github.com/agentscope-ai/QwenPaw/pull/6788)** ✅）。  
- **[#6785](https://github.com/agentscope-ai/QwenPaw/issues/6785)** — Profile 分类硬编码官方 persona（**已有 fix PR [#6808](https://github.com/agentscope-ai/QwenPaw/pull/6808)** ✅）。  
- **[#6797](https://github.com/agentscope-ai/QwenPaw/issues/6797)** — 桌面模式文本无法选中/复制（**已有 fix PR [#6802](https://github.com/agentscope-ai/QwenPaw/pull/6802)、[#6801](https://github.com/agentscope-ai/QwenPaw/pull/6801)** ✅）。  
- **[#6812](https://github.com/agentscope-ai/QwenPaw/issues/6812)** — Gemini Provider 工具 schema 中 `$schema` 字段被拒绝。  
- **[#6803](https://github.com/agentscope-ai/QwenPaw/issues/6803)** — OpenAI 兼容请求携带 Responses API `input_text` 等私有字段被严格 provider（StepFun）拒绝（**已有 fix PR [#6809](https://github.com/agentscope-ai/QwenPaw/pull/6809)** ✅）。  
- **[#6813](https://github.com/agentscope-ai/QwenPaw/issues/6813)** — `consume_model_response` 抛 `KeyError: '__aiter__'`，聊天自动标题失败。

### 🟢 低严重度（体验问题）

- **[#6790](https://github.com/agentscope-ai/QwenPaw/issues/6790)** — 桌面模式需双击开启。  
- **[#6806](https://github.com/agentscope-ai/QwenPaw/issues/6806)** / **[#6807](https://github.com/agentscope-ai/QwenPaw/issues/6807)** — Windows 下 qwenpaw-creator 插件模型保存与视频生成全失效。  
- **[#6792](https://github.com/agentscope-ai/QwenPaw/issues/6792)** — 内置 ACP runner 使用已弃用 npm 包名。

**健康度评估**：约 60% 今日新增 Bug 已有对应 fix PR 进入 review，但高严重度 Bug（#6768、#6775、#6810）尚未出现对应修复，需维护者优先跟进。

---

## 6. 功能请求与路线图信号

| Issue | 类型 | 状态 | 路线图信号 |
|---|---|---|---|
| [#6490](https://github.com/agentscope-ai/QwenPaw/issues/6490) | 内置 Volcengine Agent Plan + 小米 MiMo API | OPEN | 用户长期诉求，国产模型生态补齐 |
| [#6770](https://github.com/agentscope-ai/QwenPaw/issues/6770) | Chrome tab 生命周期可配置 | OPEN | 与 [#6772](https://github.com/agentscope-ai/QwenPaw/pull/6772)（ReMe 增强）联动，浏览器工具可控性提升 |
| [#6285](https://github.com/agentscope-ai/QwenPaw/issues/6285) | 模型列表添加 qwen3.8-max-preview | OPEN | 模型清单需跟随阿里云发布节奏更新 |
| [#6800](https://github.com/agentscope-ai/QwenPaw/pull/6800) | 智能邮箱管理助手（新 PR） | OPEN（first-time-contributor） | 若合并，将打开 Mailbox 集成方向 |
| [#6772](https://github.com/agentscope-ai/QwenPaw/pull/6772) | ReMe 增强 + Daily Paper + Embedding | OPEN | 记忆服务完整链路升级，含 Cron 调度、Console 配置重构 |

**信号研判**：  
- **记忆系统**是 v2.1 后下一阶段重点（#6772 + #6564 PR 正在推进 Auto-Memory 持久化）。  
- **国产模型**（#6490、#6285）需求累积较久，建议纳入 v2.1.x patch 版本或 v2.2 主线。  
- **Mailbox** (#6800) 作为新方向，若 review 顺利可作为 2.2 候选 feature。

---

## 7. 用户反馈摘要

- **部署/升级痛点**：Windows 安装/更新因文件锁失败（#6810）、桌面版被杀毒误报（#6775）——影响用户留存，需要在安装器层面提示关闭占用进程，并主动与安全厂商沟通白名单。  
- **长时间运行稳定性**：v2.0.1 空闲卡死（#6780）、MCP 定时失效（#6732）——反映后台保活、健康检查机制是用户的硬性需求。  
- **桌面 UX 回归**：v2.1 beta2 文本无法选中复制（#6797）、双击才能打开（#6790）、自定义 persona 文件丢失（#6785）——beta 用户对体验敏感，回归问题需在 GA 前清零。  
- **国产模型/渠道**：Volcengine、MiMo、阿里云新模型跟进（#6490、#6285），以及 OneBot 远程语音/图片支持（PR #6715）——中文生态适配持续是社区主推方向。  
- **Provider 互操作**：StepFun 严格校验（#6803）、Gemini schema 字段（#6812）、OpenAI Responses 摘要（#6811）——多 provider 适配需要统一 sanitization 层（#6809 是良好开端）。  
- **正向信号**：#6800 智能邮箱助手获得 first-time-contributor 投稿，#6804 微信中文审批指令（"允许"/"拒绝"）——社区正围绕"中文渠道 + 智能化助手"主动扩展。

---

## 8. 待处理积压

提醒维护者重点关注：

- **[#6786](https://github.com/agentscope-ai/QwenPaw/issues/6786)**（4 评论）— Telegram ACL 重置，已有 PR #6788 待合并。  
- **[#6770](https://github.com/agentscope-ai/QwenPaw/issues/6770)**（3 评论）— Chrome tab 生命周期，无对应 PR。  
- **[#6490](https://github.com/agentscope-ai/QwenPaw/issues/6490)**（4 评论，创建于 2026-07-27，已 12 天）— 国产模型内置请求，长期未响应。  
- **[#6285](https://github.com/agentscope-ai/QwenPaw/issues/6285)**（3 评论，创建于 2026-07-20，已 19 天）— qwen3.8-max-preview 模型列表更新。  
- **[#6768](https://github.com/agentscope-ai/QwenPaw/issues/6768)** — Agent 完成多步任务后无限循环阻塞，高严重度无对应修复。  
- **PR 侧积压**：27 条待合并 PR，其中 [first-time-contributor] 标签占比可观（[#6799](https://github.com/agentscope-ai/QwenPaw/pull/6799)、[#6750](https://github.com/agentscope-ai/QwenPaw/pull/6750)、[#6808](https://github.com/agentscope-ai/QwenPaw/pull/6808)、[#6725](https://github.com/agentscope-ai/QwenPaw/pull/6725)、[#6688](https://github.com/agentscope-ai/QwenPaw/pull/6688)、[#6615](https://github

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目日报 — 2026-08-08

> 数据来源：GitHub `zeroclaw-labs/zeroclaw` 仓库过去 24 小时动态

---

## 1. 今日速览

ZeroClaw 今日呈现**高强度迭代、高密度 Bug 报告**的双高态势：24 小时内 50 条 Issues、50 条 PR 同时活跃（其中 47 条 PR 仍在待合并队列），无版本发布。议题焦点高度集中在三大方向——**安全漏洞修复**（`forbidden_paths` 失效、API Key 泄漏、shell 对称链接逃逸）、**SOP 执行引擎缺陷**（多个 P1 Bug 集中爆发）、**可观测性与 RFC 治理**（OTel 对话相关性、Agent Plugins 1.0 标准、统合目录合约）。维护者 JordanTheJet 今日个人贡献 9 条 PR/Issue，覆盖 cron、心跳、SOP、安全、桌面守护进程等关键模块，治理参与度极高但同时反映出**单点维护者依赖**风险。

- 📊 Issues: 50 (新开/活跃 45, 已关闭 5)
- 🔀 PRs: 50 (待合并 47, 已合并/关闭 3)
- 🚀 Releases: 0

---

## 2. 版本发布

**无新版本发布。** 项目当前活跃版本线为 `v0.8.4`，本周期所有变更均停留在 PR 评审阶段，未触发新的 release tag。

---

## 3. 项目进展（今日合并/关闭）

| 编号 | 类型 | 标题 | 影响 |
|---|---|---|---|
| [#9836](https://github.com/zeroclaw-labs/zeroclaw/pull/9836) | fix | `transcription`: 本地 Whisper `bearer_token` 改为可选 | 转写后端适配未鉴权的 whisper.cpp loopback 服务，**已 CLOSED** |
| [#8933](https://github.com/zeroclaw-labs/zeroclaw/issues/8933) | RFC | OTel 跨轮次会话相关性 (`gen_ai.conversation.id`) | 可观测性语义对齐 v1.41.0，**已 CLOSED** |
| [#9246](https://github.com/zeroclaw-labs/zeroclaw/issues/9246) | RFC | ZeroCode 迁移期间保留 Todo tracker 配置 | 配置可移植性保障，**已 CLOSED** |
| [#6055](https://github.com/zeroclaw-labs/zeroclaw/issues/6055) | feature | Slack 首提及时回填线程上下文 | 改善 Slack 频道线程连续性，**已 CLOSED** |
| [#7232](https://github.com/zeroclaw-labs/zeroclaw/issues/7232) | RFC | 结构化可观测性增强（OTel 追踪关联 + 桥接重构） | 桥接层架构升级，**已 CLOSED** |
| [#9386](https://github.com/zeroclaw-labs/zeroclaw/issues/9386) | security | Gemini API Key 经 `sanitize_api_error` 泄漏 | **P1 安全漏洞，已 CLOSED**（须确认 fix 是否随 PR 一并发布） |

**整体推进度：** 项目在安全、可观测性、Slack 集成三条线有明确闭环，但多数关键 RFC（Agent Plugins 1.0、统合目录合约、`forbidden_paths` 修复）仍在评审阶段，**实质合并率偏低（3/50 = 6%）**。

---

## 4. 社区热点

按评论活跃度排序，反映社区最关心的议题：

| 排名 | 编号 | 标题 | 评论 | 标签热点 |
|---|---|---|---|---|
| 🥇 | [#8933](https://github.com/zeroclaw-labs/zeroclaw/issues/8933) | OTel 跨轮次会话相关性 | **13** | observability / RFC |
| 🥈 | [#9246](https://github.com/zeroclaw-labs/zeroclaw/issues/9246) | ZeroCode 迁移保留 Todo 配置 | **12** | zerocode / RFC |
| 🥈 | [#5937](https://github.com/zeroclaw-labs/zeroclaw/issues/5937) | 统一 provider 架构与 reqwest 客户端管理 | **12** | provider / refactor |
| 4 | [#8424](https://github.com/zeroclaw-labs/zeroclaw/issues/8424) | 工作区相对 `forbidden_paths` 与 `.zeroclawignore` | **10** | security / RFC |
| 5 | [#8043](https://github.com/zeroclaw-labs/zeroclaw/issues/8043) | 退役独立 `aardvark-sys` crate | **9** | hardware / RFC |
| 6 | [#6055](https://github.com/zeroclaw-labs/zeroclaw/issues/6055) | Slack 线程上下文回填 | **8** | channel:slack |
| 7 | [#7232](https://github.com/zeroclaw-labs/zeroclaw/issues/7232) | 结构化可观测性增强 RFC | **6** | observability / RFC |

**诉求分析：**
- **可观测性**（OTel、trace correlation）连续占据榜首，说明企业级部署对生产追踪能力有强诉求；
- **安全纵深防御**（`.zeroclawignore`、`forbidden_paths`）讨论密集，呼应今日集中爆发的安全 Bug；
- **架构整合**（provider 重构、目录合约）反映长期技术债务压力。

---

## 5. Bug 与稳定性

### 🔴 P1 严重（影响生产可用性 / 安全）

| 编号 | 标题 | 是否已有 fix PR |
|---|---|---|
| [#9386](https://github.com/zeroclaw-labs/zeroclaw/issues/9386) | **Gemini API Key 经错误处理路径泄漏到用户聊天**（CLOSED，但需验证 fix 是否发布） | ⚠️ 需追踪 |
| [#9815](https://github.com/zeroclaw-labs/zeroclaw/issues/9815) | **`forbidden_paths` 对任何 `allowed_roots` 内路径不可达**（安全策略失效） | ❌ 无 |
| [#9816](https://github.com/zeroclaw-labs/zeroclaw/issues/9816) | **Anthropic provider 上报 $0.00 花费，日/月预算上限永不触发** | � 无 |
| [#9786](https://github.com/zeroclaw-labs/zeroclaw/issues/9786) | **畸形 `SOP.toml` 静默丢弃，`sop validate` 误报成功**（CLI 误导） | ❌ 无 |
| [#9805](https://github.com/zeroclaw-labs/zeroclaw/issues/9805) | **SOP `auto` 模式由 channel/cron 触发的运行永远卡在 `running` 状态**（守护进程僵尸槽位） | ⚠️ [#9841](https://github.com/zeroclaw-labs/zeroclaw/pull/9841) 相关 |
| [#9770](https://github.com/zeroclaw-labs/zeroclaw/issues/9770) | **`cron update` 静默丢弃 declarative 作业的六列变更** | ❌ 无 |
| [#9840](https://github.com/zeroclaw-labs/zeroclaw/issues/9840) | **守护进程 `daemon.sock` 启动抢占、退出解链——活守护进程被孤立** | ❌ 无 |
| [#9784](https://github.com/zeroclaw-labs/zeroclaw/issues/9784) | **多步 SOP 代理驱动运行中间被标记失败但无审计事件** | ⚠️ [#9841](https://github.com/zeroclaw-labs/zeroclaw/pull/9841) 相关 |
| [#9832](https://github.com/zeroclaw-labs/zeroclaw/issues/9832) | **`zeroclaw-hardware` 启用 `hardware` feature 时编译失败**（aarch64 / Raspberry Pi） | ❌ 无 |

### 🟡 P2 中等

| 编号 | 标题 | 备注 |
|---|---|---|
| [#9834](https://github.com/zeroclaw-labs/zeroclaw/issues/9834) | `zeroclaw-runtime` 测试因共享进程全局状态间歇失败 | 测试基础设施缺陷 |
| [#9820](https://github.com/zeroclaw-labs/zeroclaw/issues/9820) | `calculator` 工具模型输出字面 `<TOOLCALL>` 伪语法而非真实函数调用 | Llama Nemotron 模型兼容性问题 |
| [#9821](https://github.com/zeroclaw-labs/zeroclaw/issues/9821) | agent 永不调用 `cron` 工具，总回退到 `crontab` shell（被策略拦截） | 工具暴露/选择问题 |
| [#9656](https://github.com/zeroclaw-labs/zeroclaw/issues/9656) | Telegram 打字指示器在审批等待期间持续运行 | 频道 UX 问题 |
| [#9775](https://github.com/zeroclaw-labs/zeroclaw/issues/9775) | OpenRouter 流式请求丢失 `provider_extra` | IN-PROGRESS |

**稳定性评估：** 当日 P1 安全/可用性 Bug **密度异常**（≥9 条），且其中多数**无对应 fix PR**，需立即安排专项 sprint。

---

## 6. 功能请求与路线图信号

### 高优先级 RFC（已具备成熟度，预计纳入近期版本）

- **[#9810](https://github.com/zeroclaw-labs/zeroclaw/issues/9810) — Agent Plugins 1.0 标准加载**
  加载 vendor-neutral `plugin.json` + `skills/` + `mcp.json` 包，是**生态互通的关键**，预计下个主版本引入。

- **[#9346](https://github.com/zeroclaw-labs/zeroclaw/issues/9346) — 统合包/能力/配置/运行态目录合约**
  长期架构议题，已有 #8908/#8909 子项目铺垫，进入 RFC 评审阶段。

- **[#8424](https://github.com/zeroclaw-labs/zeroclaw/issues/8424) — 工作区相对 `forbidden_paths` + `.zeroclawignore`**
  与 #9815 安全 Bug 高度呼应，修复 + 提案合并有望成为下一个安全 patch。

- **[#5937](https://github.com/zeroclaw-labs/zeroclaw/issues/5937) — 统一 provider 架构**
  长期开放（2026-04 创建），影响范围广，需资深维护者主导。

### 中优先级增强

- **[#9824](https://github.com/zeroclaw-labs/zeroclaw/issues/9824) — 简化默认 web 工具集为 `web_fetch` / `web_research` / `http_request`**
  配套 PR [#9833](https://github.com/zeroclaw-labs/zeroclaw/pull/9833) 已提交，**很可能进入下个版本**。

- **[#7130](https://github.com/zeroclaw-labs/zeroclaw/issues/7130) — 工作区级 `forbid(unsafe_code)`，仅 `aardvark-sys` 豁免**
  代码安全基线，成熟度高。

- **[#8043](https://github.com/zeroclaw-labs/zeroclaw/issues/8043) — 退役独立 `aardvark-sys`，并入 `zeroclaw-hardware`**
  依赖整合，叠加 #9832 编译失败，有加速推进动力。

### 今日新提 PR 信号

- **[#9842](https://github.com/zeroclaw-labs/zeroclaw/pull/9842)** — cron/心跳自治轮次的交付合约（信息披露 gap）
- **[#9841](https://github.com/zeroclaw-labs/zeroclaw/pull/9841)** — 驱动 headless SOP 运行 + 5 个评审缺陷修复
- **[#9827](https://github.com/zeroclaw-labs/zeroclaw/pull/9827)** — 阻止 shell 子进程逃逸已验证沙箱
- **[#9839](https://github.com/zeroclaw-labs/zeroclaw/pull/9839)** — 任何 posture 都拒绝不可逆破坏性命令
- **[#9838](https://github.com/zeroclaw-labs/zeroclaw/pull/9838)** — Telegram 审批按钮授权校验
- **[#9835](https://github.com/zeroclaw-labs/zeroclaw/pull/9835)** — 重命名根包 `zeroclawlabs` → `zeroclaw`（crates.io 名回收）

---

## 7. 用户反馈摘要

来自 fabricioartur（Raspberry Pi 5 真实硬件用户，#9820/#9821/#9832 三连提报）：

- **痛点 1：硬件兼容断层** — `zeroclaw-hardware` 启用 feature 后完全编译失败，官方 Dockerfile 路径在 aarch64/Raspberry Pi 上无法走通；
- **痛点 2：模型兼容层缺失** — Llama Nemotron Super 等非主流模型的工具调用格式不被解析，agent 退化为伪 `<TOOLCALL>` 字面输出；
- **痛点 3：工具暴露与意图识别** — 即便 `cron`/`calculator` 显式列入 `allowed_tools`，模型仍选择 shell 子命令路径，被策略拦截后用户面临"工具不可用"。

来自 #9815/#9816 的安全用户：

- **痛点 4：安全配置"看起来存在但实际无效"** — `forbidden_paths` 与 Anthropic 预算上限同时失效，运维对配置的信任被打破；
- **痛点 5：SOP 错误处理静默** — 多条 SOP Bug 体现"运行态假象"：失败被吞掉、僵尸永不退出、配置畸形无报错，运维排障难度高。

社区情绪整体偏**建设性批评**：用户持续提交可复现步骤、版本号、模型名、操作系统等完整上下文，对修复持开放态度，但**对若干 P1 安全 Bug 长期无 fix PR 的状态存在隐性不满**。

---

## 8. 待处理积压（维护者关注提醒）

### 长期未关闭的高价值 Issue

| 编号 | 标题 | 创建日 | 状态 |
|---|---|---|---|
| [#5937](https://github.com/zeroclaw-labs/zeroclaw/issues/5937) | 统一 provider 架构与 reqwest 客户端管理 | 2026-04-20 | OPEN（3 个月）|
| [#7130](https://github.com/zeroclaw-labs/zeroclaw/issues/7130) | 工作区级 `forbid(unsafe_code)` | 2026-06-03 | OPEN |
| [#6663](https://github.com/zeroclaw-labs/zeroclaw/issues/6663) | Telegram 流式工具调用进度 | 2026-05-14 | OPEN（3 个月）|

### 待合并时间较长的关键 PR

| 编号 | 标题 | 创建日 | 风险/规模 |
|---|---|---|---|
| [#8337](https://github.com/zeroclaw-labs/zeroclaw/pull/8337) | Herdr 代理报告集成 | 2026-06-26 | high / XL |
| [#8965](https://github.com/zeroclaw-labs/zeroclaw/pull/8965) | 声明式 skill 自动激活 | 2026-07-11 | high / XL（栈式 PR，依赖 #9563）|

</details>

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*