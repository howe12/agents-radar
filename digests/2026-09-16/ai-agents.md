# OpenClaw 生态日报 2026-09-16

> Issues: 483 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-09-16 02:50 UTC

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

# OpenClaw 项目动态日报 · 2026-09-16

## 1. 今日速览

OpenClaw 仓库今日呈现"高活跃度、高积压、无新版本"的状态：24 小时内 Issues 吞吐 483 条（310 新开/活跃 + 173 关闭）、PR 吞吐 500 条（317 待合并 + 183 已关闭），但**未发布任何新版本**。Issue 与 PR 数量比约 1:1，说明仓库持续接收新报问题，但合并节奏（183）已落后于新开节奏（310），净积压在扩大。从内容分布看，**Gateway 主线程性能与稳定性**、**2026.9.3 → 2026.9.4 升级链断裂**、**Codex 集成回归**是今日三大主线，几乎所有 P0 与多数 P1 都集中在这三块。

## 2. 版本发布

**今日无新版本发布。** 鉴于多个 P0/P1 问题（如 [#148866](https://github.com/openclaw/openclaw/issues/148866) 升级后 gateway 进入永久重启循环、[#146637](https://github.com/openclaw/openclaw/issues/146637) 升级在 npm global swap 阶段失败、[#144739](https://github.com/openclaw/openclaw/issues/144739) 升级把 9.3 跑在 schema-17 候选状态上）集中在 2026.9.4 升级路径，**当前用户停留在 2026.9.3/9.4 上需要谨慎跟进修复 PR**。建议关注维护者是否将紧急修复以 2026.9.5 patch 形式发布。

## 3. 项目进展

今日合并/关闭的 PR 中，几个值得关注的推进：

- **[#149472](https://github.com/openclaw/openclaw/pull/149472) [CLOSED]** — `fix: LiteLLM model discovery fails with 404 when baseUrl ends in /v1`（closes [#149471](https://github.com/openclaw/openclaw/issues/149471)）。修复 LiteLLM discovery 在 baseUrl 已含 `/v1` 时拼成 `/v1/v1/models` 的拼写 bug，属典型 onboarding 摩擦问题。
- **[#149544](https://github.com/openclaw/openclaw/pull/149544) [CLOSED]** — `refactor(ai): remove redundant Z.ai thinking predicate test`。纯测试清理，无行为变更。
- **[#149577](https://github.com/openclaw/openclaw/pull/149577) [CLOSED]** — `refactor(copilot): keep session binding storage off the host thread`（XL）。配合 iMessage [#149605](https://github.com/openclaw/openclaw/pull/149605)、Matrix [#149548](https://github.com/openclaw/openclaw/pull/149548)、MCP [#148213](https://github.com/openclaw/openclaw/pull/148213)、session-list registry [#149466](https://github.com/openclaw/openclaw/pull/149466) 这一组同主题 PR，**正在系统性把 SQLite 同步写移出 Gateway 事件循环**——这正是针对 [#119720](https://github.com/openclaw/openclaw/issues/119720)、[#91588](https://github.com/openclaw/openclaw/issues/91588) 等 P0/P1 的结构性回应。
- **[#149413](https://github.com/openclaw/openclaw/pull/149413) / [#149511](https://github.com/openclaw/openclaw/pull/149511) / [#149308](https://github.com/openclaw/openclaw/pull/149308) [OPEN]** — 一组 XL/S 维护者 PR，目标都是削减 Gateway 在健康数据库上的重复 schema 写入与读取开销，呼应 [#119411](https://github.com/openclaw/openclaw/issues/119411) memory watcher 不重新索引、`#143524` SQLite WAL 失控增长。
- **[#149610](https://github.com/openclaw/openclaw/pull/149610) [OPEN]** — `fix(plugins): use vendor logos and one consistent OpenClaw icon`，表面是图标统一，但插件标签同时含 `migrate-hermes`、`migrate-claude`、`cua-computer`、`team-reports` 等多个生态集成，**说明维护团队在并行打磨 Plugin/ClawHub 生态**。

总体判断：**项目正在进入一个由"性能/线程模型"重构主导的工程阶段**，表面新功能 PR 较少（仅 [#149405](https://github.com/openclaw/openclaw/pull/149405) Control UI 部分回复去重、[#147886](https://github.com/openclaw/openclaw/pull/147886) Feishu markdown.tables、[#149615](https://github.com/openclaw/openclaw/pull/149615) openai-completions session affinity headers），但底层性能修复批量推进。

## 4. 社区热点

**今日社区讨论热度集中在 UX/隐私泄露与内存/线程瓶颈两类问题**：

| 排名 | Issue | 评论 | 👍 | 摘要 |
|---|---|---|---|---|
| 1 | [#25592](https://github.com/openclaw/openclaw/issues/25592) | 40 | 1 | Tool call 之间的内部文本泄露到 Slack/iMessage 等渠道（diamond lobster） |
| 2 | [#97616](https://github.com/openclaw/openclaw/issues/97616) | 31 | 1 | 工具/hook 子进程未回收，累积僵尸进程 |
| 3 | [#91588](https://github.com/openclaw/openclaw/issues/91588) | 25 | 1 | Gateway RSS 从 350MB 涨到 15.5GB，OOM 反复触发 launchd-handoff 重启 |
| 4 | [#91009](https://github.com/openclaw/openclaw/issues/91009) | 24 | 2 | Codex PreToolUse native hook relay 派生 CPU 100%+ openclaw-hooks 进程，阻塞 gateway RPC |
| 5 | [#119720](https://github.com/openclaw/openclaw/issues/119720) | 20 | 0 | 同步的 agent 持久化与 transcript 维护阻塞 Gateway 事件循环 |

**用户诉求分析**：
- [#25592](https://github.com/openclaw/openclaw/issues/25592) 反映出**多渠道路由时"内部处理文本"与"用户可见消息"的边界未严格分离**——这是 AI agent + 多消息平台融合产品的根本性问题，社区反应规模最大但 👍 仅 1，暗示问题尚未形成广泛共识或还没人给出来"通用"的修复路径。
- [#91588](https://github.com/openclaw/openclaw/issues/91588) 的 350MB→15.5GB 增长曲线被多个用户独立复现，**说明这是结构性问题而非个案**，且已与 [#97616](https://github.com/openclaw/openclaw/issues/97616)（僵尸进程）、[#91009](https://github.com/openclaw/openclaw/issues/91009)（hook relay 风暴）形成"Gateway 资源被旁路系统耗尽"的同一类病症。
- 👍 数最高的 [#91009](https://github.com/openclaw/openclaw/issues/91009)（2 个）以及今日关闭列表中 [#80520](https://github.com/openclaw/openclaw/issues/80520)（Telegram 静默丢消息，3 个 👍）说明**用户对"消息丢失/UI 幻觉"类问题容忍度最低**。

## 5. Bug 与稳定性

按严重程度排列：

### 🔴 P0（已可稳定复现，多版本受影响）

| Issue | 标题 | 影响版本 | 是否有 fix PR |
|---|---|---|---|
| [#91009](https://github.com/openclaw/openclaw/issues/91009) | Codex PreToolUse hook relay CPU 风暴 + gateway RPC 停滞 | 2026.6.1 起 | ❌ |
| [#143524](https://github.com/openclaw/openclaw/openclaw/issues/143524) | Agent SQLite WAL 1.4–2.8 GB 失控增长，阻塞 gateway 启动 | 2026.9.2/9.3 (Windows) | ❌ |
| [#148866](https://github.com/openclaw/openclaw/issues/148866) [CLOSED] | `gateway.bind=lan` 永久重启循环 | 2026.9.1 + 2026.9.4 | ✅（已关） |
| [#115642](https://github.com/openclaw/openclaw/issues/115642) | Billing cooldown 跨订阅 outage 持续，缺 probe/手动重置 | 持续 | ❌ |
| [#146637](https://github.com/openclaw/openclaw/issues/146637) | 2026.9.3 → 9.4 npm 升级在 global install swap 阶段失败 | 2026.9.3→9.4 | ❌ |
| [#144739](https://github.com/openclaw/openclaw/issues/144739) | 升级时 9.3 跑在 schema-17 候选状态 | 2026.9.3→9.4 | ❌ |
| [#123326](https://github.com/openclaw/openclaw/issues/123326) [CLOSED] | 多 agent Codex 迁移导致 gateway 启动 crash loop | 早期 | ✅（已关） |

### 🟠 P1（回归 / 状态错乱）

| Issue | 标题 | 影响版本 | 是否有 fix PR |
|---|---|---|---|
| [#25592](https://github.com/openclaw/openclaw/issues/25592) | 工具调用间内部文本泄露到消息渠道 | 持续 | ❌（40 评论未解决） |
| [#97616](https://github.com/openclaw/openclaw/issues/97616) | 工具/hook 子进程未回收 | 持续 | ❌ |
| [#91588](https://github.com/openclaw/openclaw/issues/91588) | Gateway 内存泄漏 RSS→15.5GB | 持续 | ❌ |
| [#119720](https://github.com/openclaw/openclaw/issues/119720) | 同步持久化阻塞事件循环 | 持续 | 🔄（

---

## 横向生态对比

# 个人 AI 助手 / 自主智能体开源生态 · 横向对比日报
**报告日期**：2026-09-16｜**对比项目**：13 个

---

## 1. 生态全景

今天的生态整体处于**"重性能治理与多端整合、轻新功能爆发"**的工程化收敛期：13 个项目中有 7 个今日无新版本发布，但 PR/Issue 处理量合计超过 800 条，说明维护者集体把精力投入到了 Gateway 线程模型重构、Provider 兼容性、跨端会话连续性等"基础设施债"上。从总量看，**ZeroClaw（100 条）、OpenClaw（983 条）、Hermes Agent（100 条）、CoPaw（76 条）、NanoClaw（45 条）** 形成第一梯队活跃阵营；**NanoBot** 是当天唯一完成正式 release（v0.3.5）的项目，标志着其三端会话连续性的产品化突破；**LobsterAI** 完成 Release 分支归并但未推 tag，处于版本收口前夜。整体生态并未进入"卷新功能"的扩张期，而是沉淀到了协议、稳定性、可观测性这一层。

---

## 2. 各项目活跃度对比

| 项目 | Issues（新增/活跃 → 关闭） | PRs（待合并 → 已关闭） | 今日 Release | 健康度 | 当前阶段 |
|---|---|---|---|---|---|
| **OpenClaw** | 310 活跃 / 173 关闭 | 317 待 / 183 已关 | ❌ 无 | 🟠 活跃但积压扩大 | 性能/线程重构期 |
| **NanoBot** | 3 活跃 / 0 关闭 | 9 待 / 13 已关 | ✅ **v0.3.5** | 🟢 健康 | 发版收口期 |
| **Hermes Agent** | 25 活跃 / 25 关闭 | 34 待 / 16 已关 | ❌ 无 | 🟡 高频修复 | Kanban / 会话一致性攻坚 |
| **PicoClaw** | 2 活跃 / 0 关闭 | 3 待 / 2 已关 | ❌ 无 | 🔴 响应迟缓 | 低速巡航 |
| **NanoClaw** | 5 活跃 / 0 关闭 | 19 待 / 21 已关 | ❌ 无 | 🟢 中上 | 质量收敛 + 架构统一 |
| **LobsterAI** | 0 新 / 2 关闭 | 10 待 / 20 已关 | ⚠️ Release 分支已并 | 🟢 健康 | 兼容性收口期 |
| **CoPaw (QwenPaw)** | 8 新 / 18 关闭 | 24 待 / 26 已关 | ❌ 无 | 🟢 健康 | 2.2 修 bug → 2.3 功能扩张 |
| **ZeroClaw** | 38 新 / 12 关闭 | 40 待 / 10 已关 | ❌ 无 | 🟡 活跃但需清理 blocked 项 | RFC 收敛 + PR 落地并行 |
| **Moltis** | 1 新 / 0 关闭 | 1 待 / 0 已关 | ❌ 无 | 🟡 平稳 | 维护期 |
| **ZeptoClaw** | 0 / 0 | 18 待 / 0 已关（全 dependabot）| ❌ 无 | 🟡 自动巡检正常 | 依赖维护期 |
| **NullClaw / IronClaw / TinyClaw** | — | — | — | ⚪ 沉寂 | 无活动 |

---

## 3. OpenClaw 在生态中的定位

**OpenClaw 是当前生态中规模最大、问题密度最高、议题最复杂的项目**，单日吞吐近千条，但同时也是**唯一进入"性能瓶颈结构性治理"阶段**的项目：

| 维度 | OpenClaw | 同类对比 |
|---|---|---|
| **规模** | 单日 983 条 Issues/PRs | 约为 ZeroClaw/Hermes 的 10 倍，NanoClaw 的 20 倍 |
| **架构成熟度** | 触及 Gateway 事件循环、SQLite WAL、Codex hook relay 等底层瓶颈 | NanoBot / LobsterAI 仍在解决通道层、Provider 字段层问题 |
| **P0 积压** | 6 条 P0 多数无 fix，2 条已关 | Hermes 1 条 P1、NanoClaw 2 条高、CoPaw 4 条 P0 |
| **生态下游依赖** | LobsterAI 集中发布 13 条 OpenClaw 兼容性修复 PR | 表明 OpenClaw 已成为下游桌面客户端的事实标准运行时 |
| **Plugin/ClawHub 生态** | 持续打磨（PR #149610 涉及多个集成插件）| 远超其他项目，接近"应用商店化"路线 |

**关键差异**：OpenClaw 的痛点集中在**性能/资源（RSS 15.5GB、SQLite WAL 2.8GB）**和**网关生命周期（重启循环、Codex hook 风暴）**，而 NanoBot/NanoClaw/CoPaw 的痛点更多在**Provider 协议兼容**和**通道可靠性**。这意味着 OpenClaw 已越过"功能搭建期"，正在为整个生态趟"大规模 agent runtime"的雷区。

---

## 4. 共同关注的技术方向

跨项目高频涌现的需求，可视为生态共识级技术债：

### 🔴 4.1 Gateway / 事件循环性能
- **OpenClaw** [#91588 RSS→15.5GB]、[#91009 hook CPU 风暴]、[#119720 同步持久化阻塞]、[#97616 僵尸进程]
- **NanoClaw** [#3829 cross-session echo 限缩到 hot set]、[#3813 durable handoff]
- **ZeroClaw** [#9876 ZeroCode turn 状态上报]、[#9503 daemon 子进程清理]
- **NanoBot** [#5782 Dream 调度空转]、[#5774 memory 归档恢复]
- **信号**：从"消息即时投递"转向"消息调度可治理"，session 内 fan-out 是性能瓶颈的主要发源地。

### 🟠 4.2 多通道（Slack/Telegram/Matrix/QQ/Feishu/Email）可靠性
- **NanoBot** [PR #5768 Feishu QR]、[PR #5697 QQ SSRF]、[PR #5778 email SPF/DKIM/DMARC]
- **NanoClaw** [PR #3823 Mattermost 回调鉴权]
- **Hermes** [#110374 Slack 状态指示]、[#111896 Slack 会话键]
- **OpenClaw** [#25592 内部文本泄露到 Slack/iMessage]
- **信号**：跨通道的"消息边界 + 安全边界"已成为产品标配能力，邮箱通道正进入"反钓鱼/防伪造"加固阶段。

### 🟡 4.3 MCP（Model Context Protocol）生态
- **OpenClaw** [PR #148213 MCP 线程模型]
- **CoPaw** [PR #7735 修复 MCP 连接、Issue #7716 升级后无法连接]
- **NanoClaw** [PR #3697 Keenable MCP tool skill]
- **NanoBot**（通过 Provider 字段修复间接影响）
- **信号**：MCP 已从"实验性接入"进入"生产可用性修复期"，HTTP 错误响应解码是普遍踩坑点。

### 🟡 4.4 Session 状态一致性与跨端续接
- **NanoBot v0.3.5** [Browser/Terminal/Chat 三端续接]
- **Hermes** [PR #112163 修复 session_search 幽灵子会话]
- **OpenClaw** [#119720 同步持久化]
- **CoPaw** [#7318 Hub 多租户、#7739 对话栏布局]
- **NanoClaw** [PR #3813 durable handoff 账本]
- **信号**："会话连续性"已成为产品差异化关键点，从单端走向跨端跨设备。

### 🟢 4.5 Provider / 模型协议兼容性
- **NanoBot** [PR #5783 保留 assistant content with tool_calls]
- **CoPaw** [PR #7736 DeepSeek V4 Flash、PR #7636 剥离 PDF document blocks]
- **ZeroClaw** [PR #9420 Anthropic OAuth stored profile、Issue #9464 OAuth alias 契约]
- **Hermes** [PR #112537 probe_api_models 裸数组响应]
- **信号**：OpenAI 兼容协议 + Anthropic OAuth + 多模态 marker 三类适配是当前最频繁的踩坑点。

### 🔒 4.6 安全 / 鉴权 / 合规
- **ZeroClaw** [PR #10259 RPC 主体认证、PR #10746 插件 load-verify、Issue #5869 RUSTSEC]
- **NanoBot** [PR #5697 QQ SSRF、PR #5778 email 认证]
- **CoPaw** [Issue #4037 HTTP gateway 默认鉴权（已关）]
- **NanoClaw** [PR #3823 Mattermost 回调鉴权]
- **Hermes** [Issue #111564 群聊 prompt 注入]
- **信号**：从"功能可用"走向"生产部署合规"，emergency-stop、OIDC peercred、回调鉴权、SPF/DKIM 是新热点。

---

## 5. 差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 架构关键差异 |
|---|---|---|---|
| **OpenClaw** | 全功能 Agent runtime + Plugin 生态 | 高级用户 / 二次开发者 | 多端统一 Gateway + SQLite WAL + Plugin Marketplace |
| **NanoBot** | 三端会话连续性 + 原生 TUI | 个人开发者 / CLI 偏好者 | Browser/Terminal/Chat 三端共享 Agent，PyPI wheel 内置 TUI |
| **Hermes Agent** | Kanban 工作流 + 多平台网关 | 分布式运维 / 任务编排 | Kanban claimer 集群 + 显示层 progress 合并 |
| **NanoClaw** | 通道扩展 + 交付契约 + OpenTelemetry | 邮件/语音密集型企业用户 | Durable handoff 账本 + provider tone 契约 + delivery_mode |
| **LobsterAI** | OpenClaw 桌面封装 + Electron | 中文桌面 AI 助手用户 | Electron + 大量 OpenClaw 兼容补丁 + 广告 UX |
| **CoPaw (QwenPaw)** | Hub 多租户 + Console 工作台 | 团队 / 企业管理员 | 2.2→2.3 演进，Hub 引入多租户 + Advisor 双模型协作 |
| **ZeroClaw** | RFC 驱动 + WASM 插件 + Anthropic 路由 | 协议贡献者 / 高安全场景 | RFC-first 治理 + RUSTSEC 跟踪 + multimodal 一致性 |
| **PicoClaw** | 轻量 config 工具修复 | 小型自托管用户 | pkg/config 子系统为主，问题集中在并发 + 字段丢失 |
| **Moltis** | 自托管 OpenAI 兼容网关 | 私有部署用户 | Cargo + BuildKit cache 优化，体积小 |
| **ZeptoClaw** | 文档站 + Rust 工具链 | 文档阅读者 / 内部依赖 | 纯 dependabot 维护，Astro 7 升级中 |

**关键架构分野**：
- **"事件循环重构派"**（OpenClaw、ZeroClaw、NanoClaw）：把 SQLite 同步写、session fan-out 移出主线程。
- **"多端整合派"**（NanoBot、CoPaw）：产品差异化在 UI/UX 跨端体验。
- **"安全合规派"**（ZeroClaw、NanoBot）：OAuth/peercred/SPF-DKIM/RUSTSEC 是主战场。
- **"桌面封装派"**（LobsterAI）：围绕 OpenClaw 兼容性做增量交付。

---

## 6. 社区热度与成熟度

### 🚀 快速迭代阶段（高频合入，新功能持续涌现）
- **NanoBot v0.3.5**：唯一发版 + 13 PR 合并 + Dream/Provider/WebUI/通道五线齐推
- **CoPaw (QwenPaw)**：26/50 PR 关闭，Hub 多租户 + Advisor + Console 工作台 + DeepSeek V4 Flash 四条主线并行
- **ZeroClaw**：100 条 Issues/PRs，RFC 与实现并行推进，但需关注 #8627（WhatsApp 阻塞）、#5869（RUSTSEC blocked）

### 🛠️ 质量巩固阶段（修 bug + 架构收敛为主）
- **OpenClaw**：性能/线程模型重构主导，净积压在扩大
- **NanoClaw**：21/40 PR 合并，durable handoff + tone 契约 + 通道扩展，质量中上
- **Hermes Agent**：Kanban 错误分类系统性重构（#48000/#41805/#101800 一组），是当前最大攻坚方向
- **LobsterAI**：13 条 OpenClaw 兼容 PR 一日内合入，处于发行前夜

### 😴 维护/沉寂阶段
- **PicoClaw**：2 Issue + 5 PR，维护者响应延迟

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目日报

**报告日期**：2026-09-16  
**数据来源**：[HKUDS/nanobot](https://github.com/HKUDS/nanobot)  
**采样窗口**：过去 24 小时

---

## 1. 今日速览

NanoBot 在 24 小时内呈现**高频合并、低积压**的健康节奏：共 22 个 PR 更新，其中 13 个已合并/关闭，9 个仍待审；Issues 仅 3 条保持活跃、零关闭，整体处于 **v0.3.5 发布收口期**。最值得关注的里程碑是 **v0.3.5 正式发布**——把 Workbench 引入终端、并打通了浏览器/终端/聊天应用三端会话连续性，同时通过 **PR #5785** 把发版流程的端到端检查清单沉淀为可复用模板。Dream 调度模块、Provider 兼容性、QQ/Feishu 信道稳定性、Session 历史检索四条线齐头并进，活跃度评估：**高（Healthy）**。

---

## 2. 版本发布

### 🚀 v0.3.5

**Release**：<https://github.com/HKUDS/nanobot/releases/tag/v0.3.5>  
**发布博文 Issue**：[#5788](https://github.com/HKUDS/nanobot/issues/5788)  
**配套发版 PR**：[#5785](https://github.com/HKUDS/nanobot/pull/5785)（已关闭，含完整 checklist）

**核心更新**

- **Workbench 进入终端**：原生终端客户端 `nanobot` 与浏览器端 `nanobot webui` 共用同一 Agent，会话可在 Browser、Terminal、Chat Apps 三端无缝续接。
- **原生 TUI 打包进 wheel**（[PR #5787](https://github.com/HKUDS/nanobot/pull/5787)，已关闭）：在 PyPI 平台 wheel 中内置原生 TUI，主流平台用户不再需要首次启动时的 GitHub 下载或独立 Bun 安装。
- **发版工艺沉淀**：[PR #5785](https://github.com/HKUDS/nanobot/pull/5785) 把"5 平台 TUI 打包 + source-only fallback + 候选检查"沉淀为端到端 checklist，但本 PR **不触发** tag、Release、PyPI、文档部署，便于先评审工艺。

**破坏性变更**：未在摘要中提及破坏性 API 变更，但以下两点为行为变更，建议升级前关注：

1. **Dream 模块迭代限制回归独立配置**：见 [PR #5782](https://github.com/HKUDS/nanobot/pull/5782)，恢复 `agents.defaults.dream.maxIterations`（默认 15），替代过去被弃用、实际回退到全局 `maxToolIterations=200` 的旧行为。曾在配置里依赖"200 次迭代上限"的用户会感知到行为变化。
2. **Provider 消息历史字段保留**：[PR #5783](https://github.com/HKUDS/nanobot/pull/5783) 停止剥离带 `tool_calls` 的助手 `content` 字段——这是对历史消息的**格式级收紧**，依赖旧"剥离 workaround"的下游若存在将受影响，但 PR 中已确认未发现实际消费者。

**迁移建议**

- 升级后检查 `dream.maxIterations` 配置项是否仍生效；若自定义过该字段，可继续保留。
- 检查 Provider 调用栈中是否存在对"剥离 content 后回放 tool_calls"的隐式依赖（罕见）。
- 留意 QQ / Email 通道：[PR #5780](https://github.com/HKUDS/nanobot/pull/5780) 正在讨论是否关闭自动 compact 通知；如依赖该通知做调试，升级 v0.3.5 后可能已默认关闭。

---

## 3. 项目进展

过去 24 小时合并/关闭的 13 个 PR 围绕**五大战线**推进：

### 🛠️ Dream / 调度稳定性
- **[PR #5782](https://github.com/HKUDS/nanobot/pull/5782)** `fix(dream): enforce configured iteration limit`  
  恢复独立 `dream.maxIterations` 默认 15，修复 [Issue #5781](https://github.com/HKUDS/nanobot/issues/5781) 报告的"1–2 小时空转同一 read_file 调用"问题。这是本次发布中**最直接的用户痛点修复**之一。

### 🌐 WebUI 体验打磨
- **[PR #5786](https://github.com/HKUDS/nanobot/pull/5786)** `refactor(webui): animate segmented control indicator`  
  把分段控件的选中背景替换为单一测量指示器，加入 overshoot 过渡、宽度缓动与 reduced-motion 处理，并复用到 Appearance 主题选择器。
- **[PR #5777](https://github.com/HKUDS/nanobot/pull/5777)** `fix(webui): stop mobile drawer stealing focus to search button`  
  修复手机端抽屉打开时焦点被抢到搜索按钮的问题（[Issue #5770](https://github.com/HKUDS/nanobot/issues/5770)）。
- **[PR #5757](https://github.com/HKUDS/nanobot/pull/5757)** `fix(session): search older pages of persisted conversation history`  
  修复长会话下 `search_sessions` 与 filtered `read_session` 漏搜旧消息的回归——`WebuiSessionAccess._messages()` 此前只取最新一页，命中已决策但被截断。

### 🔌 Provider 与工具链
- **[PR #5783](https://github.com/HKUDS/nanobot/pull/5783)** `fix(providers): preserve assistant content with tool calls`  
  停止剥离带 `tool_calls` 的助手 `content`，覆盖 Mistral 在内的多 Provider，移除已无人使用的兼容开关。
- **[PR #5775](https://github.com/HKUDS/nanobot/pull/5775)** `fix(tools): scope file-read dedup to model context`  
  修复 `read_file` 在上下文被 compact 后仍返回"未变化 stub"的 bug——去重现在要求原始结果在当前请求中完整且内容一致。
- **[PR #5774](https://github.com/HKUDS/nanobot/pull/5774)** `fix(memory): recover archive tool calls before raw fallback`  
  内存归档异常发出 tool calls 时，先用原生续写 + RAW fallback 恢复，避免直接走最差路径。

### 📡 通道可靠性与安全
- **[PR #5787](https://github.com/HKUDS/nanobot/pull/5787)** `build: bundle native TUI in platform wheels`  
  PyPI 安装开箱即用原生 TUI，提升首次启动体验。
- **[PR #5778](https://github.com/HKUDS/nanobot/pull/5778)** `fix(email): require trusted authentication results`  
  邮件发件人验证在共享入站边界强制要求显式配置接收服务、结构化解析 SPF/DKIM/DMARC、并把认证身份与可见发件域对齐。
- **[PR #5768](https://github.com/HKUDS/nanobot/pull/5768)** `fix(feishu): use /page/cli verification URL for QR onboarding`（p1）  
  修复 v0.3.0 上 `nanobot channels login feishu` QR 扫描后页面立即报 "Link expired" 的高优先级问题。
- **[PR #5697](https://github.com/HKUDS/nanobot/pull/5697)** `fix(qq): protect inbound attachment downloads from SSRF`  
  关停 QQ 入站附件 URL 的 SSRF 攻击面：URL 前置校验、协议相对 URL 规范化、禁用重定向、仅接受 HTTP 200，保留现有 c…（截断）。

### 🏗️ 工程基线
- **[PR #5785](https://github.com/HKUDS/nanobot/pull/5785)** `chore(release): prepare v0.3.5`  
  发版工艺基线化。

**整体评估**：v0.3.5 在"Dream 空转、Provider 字段、通道安全、WebUI 易用性、发版工艺"五个维度都有实质推进，项目健康度从中位向高位爬升。

---

## 4. 社区热点

按评论数与互动量排序：

### 🔥 讨论最活跃
- **[Issue #5781](https://github.com/HKUDS/nanobot/issues/5781)**（3 评论）`Dream runs for 1–2 h looping on the same read_file calls`  
  **作者**：[BrianMwangi21](https://github.com/BrianMwangi21) ｜ 标签：`enhancement` `p2`  
  报告 Dream 调度合并任务陷入 25–111 分钟的死循环，模型反复重读相同两个文件。`dream.maxIterations` 被源码标记为 deprecated/ignored，回退到全局 200 次上限。**诉求**：恢复独立可配置的 Dream 迭代上限。  
  **回应状态**：已被 [PR #5782](https://github.com/HKUDS/nanobot/pull/5782) 修复并关闭。

- **[Issue #5784](https://github.com/HKUDS/nanobot/issues/5784)**（1 评论）`QQ: automatic compaction notices are sent as standalone messages`  
  **作者**：[AlfredChaos](https://github.com/AlfredChaos)  
  自部署 QQ 通道用户报告 idle auto-compaction 把 "Compressing context…" / "Context compacted." 作为普通消息推到聊天窗口，与 [Issue #5719](https://github.com/HKUDS/nanobot/issues/5719) 同类噪声。**诉求**：要么折叠/隐藏，要么加配置开关。  
  **回应状态**：与 [PR #5780](https://github.com/HKUDS/nanobot/pull/5780) "stop sending context compaction notifications" 直接相关，作者也提到需要可配置开关。

- **[Issue #5788](https://github.com/HKUDS/nanobot/issues/5788)**（0 评论）`Nanobot 0.3.5 released! Let's go!`  
  发版公告贴，作者 [chengyongru](https://github.com/chengyongru) 直接转发 release link，社区跟进较少，更像是流程性记录。

### 📌 重点关注 PR
- **[PR #5652](https://github.com/HKUDS/nanobot/pull/5652)** `feat(gateway): add signed direct delivery webhook`  
  为 CI/监控/计费等可信系统提供签名 webhook，跳过 agent loop 直接把通知文本投递到 outbound message bus。已被标记 `priority: p2` 与 `conflict`，建议维护者优先解决冲突以推进。

---

## 5. Bug 与稳定性

按严重程度排列（结合 P 标签与影响面）：

| 严重度 | 标识 | 问题 | 状态 | 关联 PR |
|---|---|---|---|---|
| 🟠 P2 | [#5781](https://github.com/HKUDS/nanobot/issues/5781) | Dream 调度 1–2h 空转同 read_file；`dream.maxIterations` 失效 | ✅ 已修 | [#5782](https://github.com/HKUDS/nanobot/pull/5782)（已关闭） |
| 🟠 P2 | [#5770](https://github.com/HKUDS/nanobot/issues/5770) | 移动端抽屉打开抢焦点至搜索按钮 | ✅ 已修 | [#5777](https://github.com/HKUDS/nanobot/pull/5777) |
| 🟠 P2 | [#5747](https://github.com/HKUDS/nanobot/issues/5747)（隐含） | 工具进度在批边界之间崩溃会丢失已完成结果 | 🟡 进行中 | [#5748](https://github.com/HKUDS/nanobot/pull/5748) |
| 🟠 P2 | [#4798](https://github.com/HKUDS/nanobot/issues/4798)（隐含） | 并发会话文件写入交错/丢失更新 | 🟡 进行中 | [#5779](https://github.com/HKUDS/nanobot/pull/5779) |
| 🟠 P2 | [#5749](https://github.com/HKUDS/nanobot/issues/5749)（隐含） | 工具调用缺少稳定的 per-invocation context | 🟡 进行中 | [#5750](https://github.com/HKUDS/nanobot/pull/5750) |
| 🟠 P2 | QQ 通道 auto-compaction 通知刷屏 | [#5784](https://github.com/HKUDS/nanobot/issues/5784) | 🟡 已提 PR | [#5780](https://github.com/HKUDS/nanobot/pull/5780)（作者希望加配置开关） |
| 🔴 P1 | Feishu v0.3.0 QR 登录即时报 "Link expired" | [#5768](https://github.com/HKUDS/nanobot/pull/5768) | ✅ 已修 | [#5768](https://github.com/HKUDS/nanobot/pull/5768)（已关闭） |
| 🟢 长尾 | 邮件发件人验证可被伪造 | [#5778](https://github.com/HKUDS/nanobot/pull/5778) | ✅ 已加固 | [#5778](https://github.com/HKUDS/nanobot/pull/5778)（已关闭） |
| 🟢 长尾 | 长 WebUI 会话搜索漏旧消息 | [#5757](https://github.com/HKUDS/nanobot/pull/5757) | ✅ 已修 | [#5757](https://github.com/HKUDS/nanobot/pull/5757)（已关闭） |
| 🟢 长尾 | `read_file` 在 compact 后返回未变化 stub | [#5775](https://github.com/HKUDS/nanobot/pull/5775) | ✅ 已修 | [#5775](https://github.com/HKUDS/nanobot/pull/5775)（已关闭） |
| 🟢 长尾 | 归档意外发出 tool_calls 时直接走 RAW fallback | [#5774](https://github.com/HKUDS/nanobot/pull/5774) | ✅ 已修 | [#5774](https://github.com/HKUDS/nanobot/pull/5774)（已关闭） |

**结论**：本次 24 小时窗口内 P1 已全部修复；P2 中 Dream 空转、移动端焦点、Feishu QR 三个高频痛点已被解决；剩余 P2 主要集中在**工具层鲁棒性**（并发写、崩溃恢复、调用上下文），是值得下一版本重点关注的"基础设施债"。

---

## 6. 功能请求与路线图信号

### 明确高概率纳入下一版本

- **`copy_file` / `move_file` 文件系统原语** —— [PR #5626](https://github.com/HKUDS/nanobot/pull/5626)（已开 15 天，标记 conflict）  
  作者 [BrianMwangi21](https://github.com/BrianMwangi21) 指出当前工具集只有 read/write/edit/list，复制/移动需要 model 串起 read→write，既慢又容易出错。是 **filesystem 工具的明显缺口**，社区呼声高，建议优先解决冲突。

- **Provider 选择器搜索框** —— [PR #5776](https://github.com/HKUDS/nanobot/pull/5776)  
  Settings → Models 中"添加模型 provider"下拉加搜索过滤，1000+ 模型聚合时代刚需。

- **Signed direct delivery webhook（网关签名投递）** —— [PR #5652](https://github.com/HKUDS/nanobot/pull/5652)（已开 12 天，conflict）  
  面向 CI

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目日报
**日期：2026-09-16**

---

## 一、今日速览

Hermes Agent 今日维持高强度的迭代节奏，过去 24 小时共处理 **50 条 Issue 更新**（其中 25 条已关闭）与 **50 条 PR 更新**（34 条待合并、16 条已合并/关闭）。当前最显著的工作方向集中在 **Kanban 工作流的退出码语义重构** 与 **会话状态一致性修复**——这两类问题在多平台、跨场景的 PR 中反复出现，已构成社区讨论的核心议题。无新版本发布，反映出团队更倾向于在小颗粒度修复上累积变更、降低发布风险。

---

## 二、版本发布

无新版本发布。最新稳定版本仍为近期已发布的 `v0.21.3` 系列。

---

## 三、项目进展

今日合并/关闭的 16 条 PR 中，以下几条对项目稳定性与功能完整性具有实质推进意义：

- **PR #112163**（已关闭）— 修复 `session_search` 不再返回 gateway 启动的 `delegate_task` 子代理记录。解决了会话搜索结果中出现"幽灵子会话"的长期困扰。
- **PR #90987**（已关闭）— 让 `hermes profile alias --remove` 可以清理孤立别名，闭环了 `hermes doctor` 中报告"孤立别名"但无法清理的死路。
- **PR #58687**（已关闭）— 更新/引导编排现在尊重已有配置，避免在已有用户的机器上重复执行重量级浏览器依赖安装。
- **PR #112537**（开放中）— `probe_api_models` 接受裸数组响应，解决 Together.ai 等自定义 OpenAI 兼容 provider 的崩溃问题。
- **PR #112536**（开放中）— URL 安全防护对 TUN 代理 fake-ip 模式的本地代理地址不再一律封禁，修复 Mihomo/Clash、Surge 用户的 SSRF 误伤。
- **PR #111975**（开放中）— 路由 HTTP 400 形式的超尺寸拒绝到图片压缩恢复路径，覆盖 NVIDIA NIM、Alibaba DashScope、Nebius Token Factory。
- **PR #110936**（开放中）— 网关聊天中的压缩提示与心跳可合并到同一条可编辑进度消息，提升 Telegram/Slack 等平台上的用户体验。
- **PR #109708**（开放中）— 新增 `display.tool_progress: full` 选项，可在网关聊天中显示完整工具参数 JSON（带敏感字段遮蔽）。

整体来看，今日的项目演进方向集中在 **健壮性修补**（错误分类、退出码、状态一致性）和 **多平台兼容**（Telegram/Slack/Slack/Webhook/MCP），尚未触及大型新功能落地。

---

## 四、社区热点

按评论数排序，今日讨论最活跃的议题：

1. **#110912 [CLOSED]**（13 评论）— [Nous Portal: full/list price charged on some model routes](https://github.com/NousResearch/hermes-agent/issues/110912)：用户反映 Nous Portal Plus 订阅积分耗尽后，账单跳涨 3 倍且 token 用量未变，疑为折扣路由缺陷。社区诉求集中在"积分状态不应导致价格路径突变"。
2. **#48000 [CLOSED]**（11 评论）— [Kanban workers bypass rate-limit/failure exit-code mapping](https://github.com/NousResearch/hermes-agent/issues/48000)：过时的错误分类导致熔断器永久阻断任务。
3. **#77394 [OPEN]**（5 评论）— [Windows: hermes update still fails on main](https://github.com/NousResearch/hermes-agent/issues/77394)：即使 `#73684` 已合并，"paused" 网关仍持有 `_rust.pyd` 锁导致更新失败。
4. **#68911 [OPEN]**（5 评论）— [Gateway force-redacts standalone E.164 phone numbers](https://github.com/NousResearch/hermes-agent/issues/68911)：单运营商消息助手无法显示客户手机号，缺受信配置 opt-in。
5. **#41805 [CLOSED]**（5 评论）— [Kanban hard usage-limit collapses into crash symptoms](https://github.com/NousResearch/hermes-agent/issues/41805)。
6. **#101800 [CLOSED]**（5 评论）— [Rate-limit exit sentinel is unreachable](https://github.com/NousResearch/hermes-agent/issues/101800)：指出 `KANBAN_RATE_LIMIT_EXIT_CODE = 75` 实际无法被触发。

此外，**#110374**（Slack 状态指示在 slack-sdk ≥ 3.44 后静默失效）凭借 **4 个 👍** 成为今日社区反应最热烈的议题，反映 Slack 用户对实时状态反馈的重视。

---

## 五、Bug 与稳定性

按严重程度归类：

### P1（高严重度）
- **#110912**（已关闭）— Nous Portal 订阅积分耗尽后价格路由异常，账单异常翻倍。[链接](https://github.com/NousResearch/hermes-agent/issues/110912)

### P2（中严重度）
- **#77394 [OPEN]** — Windows 下 `hermes update` 失败，网关进程持有文件锁。**暂未见对应 fix PR**。[链接](https://github.com/NousResearch/hermes-agent/issues/77394)
- **#68911 [OPEN]** — Gateway 强制遮蔽 E.164 电话号，无 trusted-profile opt-in。**暂未见对应 fix PR**。[链接](https://github.com/NousResearch/hermes-agent/issues/68911)
- **#111999 [CLOSED]** — 网络错误恢复创建孤儿会话（`source='unknown'`）。[链接](https://github.com/NousResearch/hermes-agent/issues/111999)
- **#111707 [CLOSED]** — Kanban Codex App Server 因 `hermes-mcp` / `hermes-tools` 命名不一致而初始化失败。[链接](https://github.com/NousResearch/hermes-agent/issues/111707)
- **#112060 [CLOSED]** — Higgsfield MCP OAuth 颁发者不匹配，device-code 流程不可用。[链接](https://github.com/NousResearch/hermes-agent/issues/112060)
- **#111564 [CLOSED]** — 群聊中含 `[OUT-OF-BAND USER MESSAGE]` 字面量的代理输出被误当作用户消息重投。[链接](https://github.com/NousResearch/hermes-agent/issues/111564)（安全问题）
- **#111689 [CLOSED]** — macOS launchd 监控的 dashboard 在 `hermes update` 后产生端口冲突。[链接](https://github.com/NousResearch/hermes-agent/issues/111689)
- **#111896 [CLOSED]** — Slack 同一线程在网关重启后会话键发生迁移导致孤儿化。[链接](https://github.com/NousResearch/hermes-agent/issues/111896)
- **#85817 [OPEN]** — Desktop 命令审批卡片被工具行覆盖无法显示。**暂未见对应 fix PR**。[链接](https://github.com/NousResearch/hermes-agent/issues/85817)

### P3（一般严重度）
- **#110374 [OPEN]** — Slack 工作状态指示静默失效。[链接](https://github.com/NousResearch/hermes-agent/issues/110374)
- **#112482 [OPEN]** — 大会话上下文压缩活锁（200K+ token）。**有相关 fix PR #111975**。[链接](https://github.com/NousResearch/hermes-agent/issues/112482)
- **#112534 [CLOSED]** — `probe_api_models` 在裸数组响应下崩溃。**对应 fix PR #112537 已开放**。[链接](https://github.com/NousResearch/hermes-agent/issues/112534)
- **#112473 [OPEN]** — HTTP 400 形式的超尺寸拒绝未触发图片压缩恢复。**对应 fix PR #111975 已开放**。[链接](https://github.com/NousResearch/hermes-agent/issues/112473)
- **#112137 [OPEN]** — `/branch` 与进行中的回合产生竞争。**暂未见对应 fix PR**。[链接](https://github.com/NousResearch/hermes-agent/issues/112137)
- **#112525 [OPEN]** — MoA fallback 解析的聚合器 slug 被丢弃。**对应 fix PR #112532 已开放**。[链接](https://github.com/NousResearch/hermes-agent/issues/112525)
- **#112518 [OPEN]** — SSH 设置向导无法将端口重置回默认值 22。**暂未见对应 fix PR**。[链接](https://github.com/NousResearch/hermes-agent/issues/112518)
- **#112378 [OPEN]** — `_discard_lockfile_churn` 在只脏 workspace 时回滚根 `package-lock.json`。**暂未见对应 fix PR**。[链接](https://github.com/NousResearch/hermes-agent/issues/112378)
- **#112517 [OPEN]** — Dashboard 把已停止 profile 的历史启动失败呈现为当前错误。**暂未见对应 fix PR**。[链接](https://github.com/NousResearch/hermes-agent/issues/112517)
- **#108804 [OPEN]** — Desktop 更新检查匿名调用 GitHub API，共享/数据中心 IP 受 403 限流。**暂未见对应 fix PR**。[链接](https://github.com/NousResearch/hermes-agent/issues/108804)
- **#112419 [OPEN]** — 空 partial-stream stub 不发出信号导致模型重复丢失动作。**暂未见对应 fix PR**。[链接](https://github.com/NousResearch/hermes-agent/issues/112419)

值得关注的**系统性问题**：Kanban 工作流退出码分类错误（**#48000、#41805、#101800、#44812、#91177、#81437、#80456**）在多个 Issue 中被反复讨论，是当前最值得投入系统性重构的方向。

---

## 六、功能请求与路线图信号

- **#111237 [OPEN]** — *Self-tuning harness：本地可选的 evolver 循环，仅保留统计学显著的脚手架改进。* 与 #111189、#111200 配套，构成"供给侧 + 需求侧"的自我进化双轨。[链接](https://github.com/NousResearch/hermes-agent/issues/111237)
- **#85040 [OPEN]** — *Honcho per-turn observation opt-out phrases*：让用户可配置短语以关闭每轮观察写入。已在 PR 中实现。[链接](https://github.com/NousResearch/hermes-agent/issues/85040)
- **#100606 [OPEN]** — *`hermes doctor --live`：验证配置的模型实际可被服务。* 落地后将填补 doctor 工具的最后盲区。[链接](https://github.com/NousResearch/hermes-agent/issues/100606)
- **#92192 / #93632 [OPEN]** — *印尼语本地化文档（Docusaurus）*：满足 #80392 的国际化扩张要求。[链接](https://github.com/NousResearch/hermes-agent/pull/92192) ｜ [链接](https://github.com/NousResearch/hermes-agent/pull/93632)
- **#110936 / #109708 [OPEN]** — *网关聊天生命周期进度合并 + `display.tool_progress: full`*：两条 PR 共同改善 Telegram/Slack 上的可观测性，预计会成为下一版本的网关体验增强。
- **#112339 [OPEN]** — *将 webhook 触发的 agent 运行视为内部事件*：当模型返回 `[SILENT]` 时不再被替换为"模型未回复"告警。[链接](https://github.com/NousResearch/hermes-agent/pull/112339)

自我调优（#111237）作为新概念引入，尚未配套 PR 实现，处于路线图预研阶段。

---

## 七、用户反馈摘要

从 Issue 评论中提炼的真实用户痛点：

- **账单透明度焦虑**：#110912 的用户作为 Plus 订阅用户，明确表达对"积分耗尽即触发价格路径突变"的不满，希望系统能更可预测地切换到标准计费并提示。
- **Kanban 自动化运维的脆弱性**：多个 Issue（#48000、#41805、#101800、#44812、#81437）显示用户运行了**多主机分布式 claimer 集群**（如 #44812 提到 10 个 claimer 主机、270 个事件、160 个被阻断任务），对生产级看板自动化的可靠性有强烈需求。
- **Slack 集成的实时反馈依赖**：#110374 收获 4 个 👍，反映 Slack 集成用户对"thinking…"状态指示的高度依赖，状态消失直接影响使用感受。
- **本地化诉求**：i18n PR 来自社区贡献者，反映非英语用户对文档本地化的切实需求。
- **安全模型边界争议**：#68911 指出"强制遮蔽手机号"对单运营商助手造成困扰；#111564 报告了群聊注入控制帧字符串的安全问题，提示团队需在 prompt/控制帧边界设计上更严格。

---

## 八、待处理积压

以下长期未关闭且影响面较大的 Issue/PR 建议维护者优先处理：

- **#48000**（创建于 2026-06-17，至今未合并 fix）— Kanban 错误分类的核心问题，是当前最重要的系统性缺陷之一。[链接](https://github.com/NousResearch/hermes-agent/issues/48000)
- **#68911**（创建于 2026-07-21）— 仍处于 OPEN 状态，影响单运营商使用场景。[链接](https://github.com/NousResearch/hermes-agent/issues/68911)
- **#77394**（创建于 2026-08-03）— Windows 用户升级主路径受阻。[链接](https://github.com/NousResearch/hermes-agent/issues/77394)
- **#81437**（创建于 2026-08-08）— Kanban 配额墙 + 守卫任务死锁的双重缺陷。[链接](https://github.com/NousResearch/hermes-agent/issues/81437)
- **#85817**（创建于 2026-08-14）— Desktop 命令审批卡片被遮挡，影响安全确认体验。[链接](https://github.com/NousResearch/hermes-agent/issues/85817)
- **#110374**（创建于 2026-09-13，社区反应最强）— Slack 状态指示静默失效，影响用户体验但无关联 fix PR。[链接](https://github.com/NousResearch/hermes-agent/issues/110374)
- **#108804**（创建于 2026-09-12）— Desktop 更新检查的 GitHub 匿名调用限流问题在共享/数据中心出口场景下持续。[链接](https://github.com/NousResearch/hermes-agent/issues/108804)
- **#44812 / #91177**（创建于 2026-06-12 与 2026-08-21）— 与 #48000 同类的 Kanban 错误分类问题，标记为 duplicate 但根因仍未合并修复。

---

**总体评估**：项目维持高频修复节奏，Kanban 错误分类与多平台集成的鲁棒性是当前两大攻坚方向；自我调优 harness 等新概念浮现，路线图正向"代理自主优化"延伸。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报
**日期：2026-09-16**
**数据来源：GitHub (github.com/sipeed/picoclaw)**

---

## 1. 今日速览

PicoClaw 项目今日整体活跃度处于**低位水平**：过去 24 小时内无新版本发布，Issues 仅 2 条更新、PRs 共 5 条更新（其中 2 条已关闭，3 条仍待合并）。值得注意的是，今日更新的 2 条 Issues 和 2 条 PR 均来自同一贡献者 `sting8k`，且全部围绕 **config 相关 Bug 与修复**，呈现明显的"集中提交"特征。所有活跃 Issue 均被标记为 `[stale]`，缺乏维护者响应，社区互动活跃度不足，需要关注。

---

## 2. 版本发布

⚠️ **今日无新版本发布。** 上一次发版情况不在本次数据范围内。

---

## 3. 项目进展

今日共 **2 条 PR 被关闭/合并**：

### ✅ 已关闭 PR

| 编号 | 标题 | 作者 | 链接 |
|------|------|------|------|
| #1780 | Qq connection stability | xiang33 | [查看](https://github.com/sipeed/picoclaw/pull/1780) |

- 该 PR 提出 QQ 频道稳定参数（重连间隔、重试次数、限流）的可配置化能力，保持向后兼容性。
- 状态为 `[CLOSED]`，由于创建于 2026-03-19、跨度近半年才关闭，**疑似长期搁置后未合并而被关闭**，推进效果存疑。

| 编号 | 标题 | 作者 | 链接 |
|------|------|------|------|
| #3380 | feat(mesh): observability — peer conns/score/bandwidth, activity feed, SSE events (Track 63) | stpinkie | [查看](https://github.com/sipeed/picoclaw/pull/3380) |

- 本日新增并被快速关闭（疑似未合并），内容涉及 libp2p mesh 网络的可观测性增强（连接、评分、带宽、活动流、SSE 事件）。
- 同样 [ ] 关闭而非合并，对项目进展贡献有限。

**评估**：今日合并/推进的实际成果接近于零，项目向前推进的迹象不明显。

---

## 4. 社区热点

今日讨论活跃度普遍偏低，**2 条 Issues 评论数均为 1，PRs 评论数均为 0**。

🔥 值得关注的两个关联条目**（同一作者、同日提交、形成 Issue–PR 修复对子）**：

- 🐞 **Issue #3374** — [Data race in Config.initSensitiveCache can return a nil replacer and panic FilterSensitiveData](https://github.com/sipeed/picoclaw/issues/3374)
  - 涉及并发场景下 `sync.Once` 失效导致 panic 的严重 Bug。

- 🔧 **PR #3375** — [fix(config): guard lazy sensitive-data cache against concurrent init](https://github.com/sipeed/picoclaw/pull/3375)
  - 与 #3374 对应的修复方案，作者在创建 Issue 同日即提交 PR，体现作者自行推动修复的良好实践，但**维护者尚未响应**。

**背后诉求**：用户希望项目解决 config 模块在并发场景下的稳定性问题，以及 `ToolsConfig` 设计缺陷（见 #3372），反映出 config 层是当前稳定性的薄弱环节。

---

## 5. Bug 与稳定性

| 严重等级 | Issue | 描述 | 是否有 Fix PR | 链接 |
|---------|-------|------|--------------|------|
| 🔴 **严重** | #3374 | `Config.initSensitiveCache` 存在数据竞争，并发初始化时 `sync.Once` 被绕过，可能返回 nil replacer 导致 `FilterSensitiveData` panic | ✅ 有（#3375，待合并） | [Issue](https://github.com/sipeed/picoclaw/issues/3374) / [PR](https://github.com/sipeed/picoclaw/pull/3375) |
| 🟠 **高** | #3373 | `SaveConfig` 在 `LoadConfig` → `SaveConfig` 往返过程中静默删除 `model_list` 中第一条之后的所有 `api_keys`，并遗留指向不存在模型的 dangling fallback | ❌ 无对应修复 PR | [Issue](https://github.com/sipeed/picoclaw/issues/3373) |
| 🟡 **中** | PR #3372 | `reaction` 工具配置路径错误：`ToolsConfig.IsToolEnabled("reaction")` 缺乏专属分支且缺少 `reaction` 字段 | ✅ 自身 PR 即修复（待合并） | [PR](https://github.com/sipeed/picoclaw/pull/3372) |

**评估**：3 条问题均集中在 `pkg/config` 模块，**config 子系统或为当前稳定性短板**，建议维护者优先 review #3375、#3372、#3373。

---

## 6. 功能请求与路线图信号

| 类型 | PR | 描述 | 状态 | 链接 |
|------|-----|------|------|------|
| 🆕 新功能 | #3370 | 新增 **Keenable** (`https://keenable.ai`) 作为 `web_search` 提供方，开箱即用无需 API key，仅需设置 `tools.web.keenable.enabled=true` | 待合并 | [PR](https://github.com/sipeed/picoclaw/pull/3370) |
| 🔧 改进 | #3372 | `reaction` 工具可通过 config 启用/禁用，补齐 `ToolsConfig` 字段 | 待合并 | [PR](https://github.com/sipeed/picoclaw/pull/3372) |
| 🔧 改进 | #3380 | mesh 可观测性增强（连接、评分、带宽、SSE 事件） | 已关闭 | [PR](https://github.com/sipeed/picoclaw/pull/3380) |

**路线图信号**：搜索工具生态正在扩展（Keenable 集成），但 mesh 可观测性方向（#3380）今日被关闭，路线图走向需进一步观察。

---

## 7. 用户反馈摘要

由于今日 Issues 评论数均仅为 1，用户反馈信息量较低，可提炼的痛点如下：

- 😟 **静默数据丢失**：#3373 作者反馈 `SaveConfig` 会**无声删除**多余的 `api_key` 并留下悬挂的 fallback 引用，威胁用户凭据安全。属于典型的"用户不主动验证就发现不了"的高危问题。
- 😟 **并发初始化不可靠**：#3374 指出 `sync.Once` 被绕过导致 panic，反映作者对项目并发安全性缺乏信心。
- 😟 **配置驱动能力不足**：多个 PR 反复围绕 config 改造（reaction 工具、sensitive cache、QQ 稳定性），说明社区认为 config 层灵活度欠佳。

**满意点**：暂无明确正向反馈。

---

## 8. 待处理积压

以下 Issue / PR 已创建较长时间但维护者响应不足，建议优先 review：

| 编号 | 类型 | 创建日期 | 距今 | 标题 | 链接 |
|------|------|---------|------|------|------|
| #1780 | PR | 2026-03-19 | ~6 个月 | QQ connection stability | [PR](https://github.com/sipeed/picoclaw/pull/1780) |
| #3373 | Issue | 2026-09-08 | 8 天 | SaveConfig silently deletes api_keys | [Issue](https://github.com/sipeed/picoclaw/issues/3373) |
| #3374 | Issue | 2026-09-08 | 8 天 | Data race in Config.initSensitiveCache | [Issue](https://github.com/sipeed/picoclaw/issues/3374) |
| #3375 | PR | 2026-09-08 | 8 天 | fix(config): guard lazy sensitive-data cache | [PR](https://github.com/sipeed/picoclaw/pull/3375) |
| #3372 | PR | 2026-09-08 | 8 天 | fix(config): make the reaction tool configurable | [PR](https://github.com/sipeed/picoclaw/pull/3372) |
| #3370 | PR | 2026-09-07 | 9 天 | feat(tools): add Keenable web search provider | [PR](https://github.com/sipeed/picoclaw/pull/3370) |

⚠️ **健康度提醒**：所有上述 Issues 均被标记为 `[stale]`，且 Issues 与对应修复 PR 已存在 8 天仍未合并，**维护者响应机制存在延迟风险**，建议项目维护者集中 review config 相关修复批次。

---

## 整体健康度评估

| 维度 | 评分 | 说明 |
|------|------|------|
| 活跃度 | ⭐⭐☆☆☆ | 24h 内 Issues 仅 2、PR 仅 5、无发版 |
| 安全/稳定性 | ⭐⭐⭐☆☆ | 出现严重并发 Bug 与静默数据丢失，但已有对应修复 PR |
| 维护者响应 | ⭐⭐☆☆☆ | 所有活跃 Issue 均被标记 stale，PR 长期未 review |
| 社区互动 | ⭐☆☆☆☆ | 评论数极低，无有效讨论 |
| 路线图清晰度 | ⭐⭐⭐☆☆ | 新功能方向（web 搜索、mesh 可观测性）尚有方向，但缺乏发版节奏 |

**结论**：项目处于**低速巡航状态**，安全相关 Bug 需尽快合并修复 PR（#3375、#3372），建议维护者主动清理积压并恢复对社区 Issue 的响应。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报

**报告日期**：2026-09-16
**项目主页**：[github.com/qwibitai/nanoclaw](https://github.com/qwibitai/nanoclaw)

---

## 1. 今日速览

NanoClaw 今日继续保持高活跃度，过去 24 小时内共产生 **5 条 Issue 更新**与 **40 条 PR 更新**，整体 PR 处理节奏（21 条已关闭/合并 vs 19 条待合并）相对均衡。无新版本发布，核心工作集中在 **交付契约重构、性能优化、Mattermost 安全加固** 以及 **多条新通道/技能的并入**。社区信号显示维护团队（core-team 标签）持续在推动配置层与提供者层（providers）的解耦，多个长期挂起的 setup/install 缺陷被批量清理，项目整体健康度处于中上水平，但仍存在 1 条 28 天未关闭的阻塞性 Issue（#3338）需要关注。

---

## 2. 版本发布

**今日无新版本发布。** 维护工作集中在主干代码合并与缺陷修复，未触发版本号变更。

---

## 3. 项目进展

今日关闭/合并的重要 PR 体现出维护团队在 **性能、安全、代码整洁** 三个方向的同步推进：

| PR | 标题 | 领域 | 意义 |
|---|---|---|---|
| [#3813](https://github.com/qwibitai/nanoclaw/pull/3813) | Add durable handoff safety and mission control | channels / core / cli | 引入宿主拥有的 durable handoff 账本 + Slack 结构化代理间投递，确立 agent-to-agent 交付的可靠性基线 |
| [#3830](https://github.com/qwibitai/nanoclaw/pull/3830) | webhook 测试改用内核分配端口 | core / tests | 修复 `EADDRINUSE` 抖动，CI 稳定性提升 |
| [#3829](https://github.com/qwibitai/nanoclaw/pull/3829) | cross-session echo fan 限缩到 hot set | core / sessions | 把跨会话回声从消息关键路径剥离，唤醒延迟不再随会话数线性增长 |
| [#3827](https://github.com/qwibitai/nanoclaw/pull/3827) | refactor(codex): 走 provider tone 契约 | agent-runner / providers | 通过可选 tone 契约声明 Codex 默认行为，简化 provider 实现 |
| [#3826](https://github.com/qwibitai/nanoclaw/pull/3826) | feat(providers): 声明默认 tone 设置 | agent-runner / providers | 与 #3827 配套，让 Claude、Codex 等 provider 共享同一配置通道 |
| [#3822](https://github.com/qwibitai/nanoclaw/pull/3822) | .gitignore 忽略 .worktrees/ | repository-maintenance | 仓库维护性小补丁 |

**整体评估**：今日合并密度较高且方向集中——性能与会话调度（#3830、#3829）、提供者契约抽象（#3827、#3826）、跨代理交付可靠性（#3813），说明项目正从"功能堆叠"阶段过渡到"质量收敛 + 架构统一"阶段。重要 Issue 同步关闭（#1981、#3354、#3684）也印证了 setup/update 路径的清理在加速。

---

## 4. 社区热点

按评论数与关注度排序：

- **[Issue #3338](https://github.com/qwibitai/nanoclaw/issues/3338)** — Codex WebSocket idle retry is hidden until NanoClaw's 10-minute turn timeout（3 条评论，开 OPEN）
  - **诉求**：Codex CLI 内部 5 分钟 WebSocket idle 重试不暴露给 `codex app-server`，导致 NanoClaw 静默等待 10 分钟才报错，用户体验极差。
  - **背后痛点**：代理失败信号没有从上游 provider 透传，调用方完全被动。

- **[PR #3813](https://github.com/qwibitai/nanoclaw/pull/3813)** — Add durable handoff safety and mission control（已关闭）
  - **关注点**：跨代理交付的端到端可观测性、Slack 桥接的安全加固、有界 bot 跳数与持久化回执。属于核心架构变更，社区关注度高。

- **[PR #3781](https://github.com/qwibitai/nanoclaw/pull/3781)** — feat(agent-runner): enforce tools-only delivery（OPEN）
  - 配套 #3713，是"delivery mode"系列的执行端，影响所有无法稳定输出 final-text envelope 的 provider 接入路径。

- **[PR #3713](https://github.com/qwibitai/nanoclaw/pull/3713)** — feat(config): record a per-agent-group delivery mode（OPEN）
  - 引入 `container_configs.delivery_mode` + 迁移 26，是 #3781 的配置层基础。

- **[Issue #1981](https://github.com/qwibitai/nanoclaw/issues/1981)**（已关闭）— v2 setup 在 headless Linux 上误判 systemd 缺失（2 条评论）
  - 真实生产环境（Hetzner + Ubuntu + 非登录 SSH）下 setup 流程的可靠性问题，命中率高。

---

## 5. Bug 与稳定性

| 严重度 | Issue | 标题 | 状态 | 是否有 Fix |
|---|---|---|---|---|
| 🟠 高 | [#3338](https://github.com/qwibitai/nanoclaw/issues/3338) | Codex WebSocket idle retry 不可见，Telegram 请求静默 10 分钟 | OPEN，**已 28 天未关闭** | ❌ 暂未发现关联 Fix PR |
| 🟠 高 | [#3828](https://github.com/qwibitai/nanoclaw/issues/3828) | `/update-nanoclaw` cutover 阶段：宿主服务被先停，但 agent 容器无法排空 | OPEN，今日新开 | ❌ 暂未发现关联 Fix PR |
| 🟡 中（已修复） | [#1981](https://github.com/qwibitai/nanoclaw/issues/1981) | headless Linux 上 systemd 误判 | CLOSED | ✅ 已处理 |
| 🟡 中（已修复） | [#3354](https://github.com/qwibitai/nanoclaw/issues/3354) | setup 失败时残留 0 字节 channel 文件 + PATH 修复顺序错误 | CLOSED | ✅ 已处理 |
| 🟡 中（已修复） | [#3684](https://github.com/qwibitai/nanoclaw/issues/3684) | `data/` 或 `groups/` 为符号链接时，mutable-state 快照仅存链接不解引用 | CLOSED | ✅ 已处理 |
| 🟢 低（已修复） | [#3830](https://github.com/qwibitai/nanoclaw/pull/3830) | webhook 端口测试 EADDRINUSE 抖动 | PR 已关闭（合并） | — |
| 🟢 低（已修复） | [#3829](https://github.com/qwibitai/nanoclaw/pull/3829) | cross-session echo 拖慢唤醒路径 | PR 已关闭（合并） | — |

**重点关注**：

- **#3828** 是今日新报告的高危缺陷：更新流程的设计本身有死锁风险——宿主先停就再也无法排空 agent 容器。需要维护者重新审视 cutover 阶段的停机顺序。
- **#3338** 暴露的是 provider ↔ host 之间的错误传播契约缺失，可能与 #3827、#3826 的 tone 契约工作一并考虑。

---

## 6. 功能请求与路线图信号

今日 OPEN 状态的 Feature/Skill PR 反映出几条清晰的路线图主线：

### 📡 通道与交付（Channels / Delivery）
- [#3764](https://github.com/qwibitai/nanoclaw/pull/3764) `feat(channels): /add-voice` — 全双工浏览器语音对话（OpenAI GPT-Live-1）
- [#3726](https://github.com/qwibitai/nanoclaw/pull/3726) `feat(channels): add native Proton Mail adapter` — Proton Mail Bridge 集成
- [#3743](https://github.com/qwibitai/nanoclaw/pull/3743) `feat: add AgentMail email channel adapter` — 完全托管的 agent 邮箱通道
- [#3799](https://github.com/qwibitai/nanoclaw/pull/3799) `fix(signal): stage inbound attachments via the session inbox`
- [#3823](https://github.com/qwibitai/nanoclaw/pull/3823) `fix(mattermost): authenticate callbacks and isolate action secrets`
- [#3831](https://github.com/qwibitai/nanoclaw/pull/3831) `docs(mattermost): add callback migration guidance to the skill`

**信号**：邮件（Proton、AgentMail）和语音（Voice）成为下一阶段通道扩展重点；同时 Mattermost 的安全收紧反映了"外部集成回调鉴权"是普遍痛点。

### 🛠️ 工具与技能（Tools / Skills）
- [#3697](https://github.com/qwibitai/nanoclaw/pull/3697) `feat: add Keenable MCP tool skill` — 远程 MCP 工具注册
- [#3796](https://github.com/qwibitai/nanoclaw/pull/3796) `feat(skills): add-telemetry` — OpenTelemetry traces
- [#3825](https://github.com/qwibitai/nanoclaw/pull/3825) `feat(opencode): support authentication through Iron Proxy`

**信号**：可观测性（OTel）+ 远程工具（MCP）+ 统一网关鉴权（Iron Proxy）正在被同步打磨，体现出"agent 容器侧工具链"的产品化方向。

### 🧱 配置与契约（Config / Contract）
- [#3713](https://github.com/qwibitai/nanoclaw/pull/3713) `feat(config): record a per-agent-group delivery mode`
- [#3781](https://github.com/qwibitai/nanoclaw/pull/3781) `feat(agent-runner): enforce tools-only delivery`
- [#3824](https://github.com/qwibitai/nanoclaw/pull/3824) `refactor(gateway): add provider credential connections`

**信号**：从"硬编码 provider 行为"向"运行时契约配置"迁移是当前核心架构主线，#3826/#3827 已落地，后续围绕 gateway 抽象继续推进。

### 📚 文档与小型维护
- [#3724](https://github.com/qwibitai/nanoclaw/pull/3724) `Update retired model id in the add-opencode Anthropic example`（Anthropic 已于 2026-06-15 弃用旧 sonnet id）

**预测**：下一版本（如有 release）大概率会包含 delivery mode（#3713 + #3781）、tone 契约（#3826 + #3827）、Mattermost 安全（#3823 + #3831）三组已闭环的功能；新增通道（Voice / Proton / AgentMail）若评审通过也可能同期发布。

---

## 7. 用户反馈摘要

- **Headless / 非登录 SSH 安装体验差**：#1981、#3354 共同指向 setup 脚本默认假设"交互式登录 shell"，导致 PATH 未就绪、systemctl --user 不可用。这是企业用户（Hetzner、自托管玩家）的高频痛点，今日已批量关闭，但**仍需关注是否在文档/setup 防御性编程中根治**。

- **Codex / WebSocket 失败无可观测性**：#3338 反映出"代理对代理"的失败信号没有标准化透传链路。Telegram 用户面对 10 分钟静默的挫败感会直接影响留存。

- **更新流程的设计性死锁**：#3828 是从 0 到 1 流程缺陷级反馈，宿主与容器的启停顺序需要重新建模，rollback 的语义也要重新设计。

- **Anthropic 模型 id 弃用未跟进**：#3724 表明 skill 文档与上游模型生命周期的同步存在滞后，建议引入"skill 模板自动校验"机制。

- **跨代理交付需要审计与可重放**：#3813 反映出社区对"agent-to-agent 通信的端到端可观测 + 持久化回执"有强烈诉求，简单的消息传递已无法满足合规与调试需要。

---

## 8. 待处理积压

以下为**长期未关闭或需维护者重点关注**的项目：

| 编号 | 类型 | 创建时间 | 停留时长 | 风险 | 链接

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目日报
**日期：2026-09-16**
**项目：netease-youdao/LobsterAI**

---

## 1. 今日速览

LobsterAI 今日呈现**高强度、集中式收尾**的开发节奏：在过去 24 小时内共有 30 个 PR 更新（合并/关闭 20 条，待合并 10 条），Issue 侧则完成 2 条老旧问题的清理（均为 stale 关闭）。**主线工作量集中在 OpenClaw v2026.8.1 升级后的兼容性修复上**——单日合并了约 13 条与 OpenClaw 兼容、网关恢复、历史回放相关的 PR，并由 PR #2687「Release/2026.9.15」作为发行分支归并，说明项目正围绕一个明确的发布节点推进。无新版本（Release）公开，但仓库已进入 2026.9.15 版本的收口阶段。整体活跃度可评为**高**且方向集中。

---

## 2. 版本发布

⚠️ **今日未发布新的 Release Tag**，但有以下重要信号：

- **PR #2687 [Release/2026.9.15](https://github.com/netease-youdao/LobsterAI/pull/2687)** 已 CLOSED，从涉及模块（renderer/build/docs/main/openclaw/cowork）来看，这是一次典型的发行分支合并操作，意味着 v2026.9.15 的代码主干已经合入；正式 Release Tag 尚未推送。
- 下一次发布预计将带来大量 OpenClaw 兼容性改进（详见第 3 节），属于强修复型版本，对用户无破坏性 API 变更。

> 📌 建议关注者查看是否有 Release Tag 跟随仓库发布。

---

## 3. 项目进展

### 3.1 OpenClaw v2026.8.1 兼容性修复集群（重大推进）

今日合并了**一组针对 OpenClaw 升级的连环 PR**，覆盖启动、网关、模型策略、压缩、错误展示、POPO SDK 等多个维度，是本次日报最大进展：

| PR | 主题 | 价值 |
|---|---|---|
| [#2686](https://github.com/netease-youdao/LobsterAI/pull/2686) | 运行时打包本地 workspace 依赖 | 解决 pnpm pack 把 workspace:* 重写为 registry 版本导致本地补丁丢失的问题 |
| [#2685](https://github.com/netease-youdao/LobsterAI/pull/2685) | 保留 OpenClaw 工作区运行时依赖的本地补丁 | 修复 `npm run electron:dev:openclaw` 报 `prepareReplayMessages` 缺失 |
| [#2683](https://github.com/netease-youdao/LobsterAI/pull/2683) | openclaw 兼容性综合修复 | 综合性补丁 |
| [#2684](https://github.com/netease-youdao/LobsterAI/pull/2684) | 启发式输出预算不足导致"成功但无正文" | 修复长会话被错误压缩到 1 token 导致空响应 |
| [#2682](https://github.com/netease-youdao/LobsterAI/pull/2682) | 历史会话回放字段校验 | 防止历史块结构异常导致请求准备阶段崩溃 |
| [#2679](https://github.com/netease-youdao/LobsterAI/pull/2679) | 升级后网关状态的兼容性修复 | 用官方 `openclaw doctor` 做完整修复流程 |
| [#2681](https://github.com/netease-youdao/LobsterAI/pull/2681) | 启动时恢复损坏的 legacy dreaming 状态 | 旧版 `memory/.dreams/` JSON 损坏不再阻断网关启动 |
| [#2678](https://github.com/netease-youdao/LobsterAI/pull/2678) | 保留压缩摘要格式与审计事实 | 长会话压缩不再丢失必要标题/标识 |
| [#2677](https://github.com/netease-youdao/LobsterAI/pull/2677) | 恢复 Cowork 技术错误详情展示 | 修复"技术详情"只显示 provider/model/modelSource 的退化 |
| [#2664](https://github.com/netease-youdao/LobsterAI/pull/2664) | POPO SDK 加载竞态 | 修复 `ERR_REQUIRE_ESM_RACE_CONDITION` 导致 POPO 监听器消失 |

### 3.2 Stale 清理（仓库治理）

约 7 条创建于 **2026-03-31** 的老 PR/Issue 被批量标记 stale 并关闭，包括 [#1149](https://github.com/netease-youdao/LobsterAI/issues/1149)（Vitest 单元测试）、[#1151](https://github.com/netease-youdao/LobsterAI/issues/1151)（URL 拼接 off-by-one）、[#1142](https://github.com/netease-youdao/LobsterAI/pull/1142)（快捷创建技能）、[#1143](https://github.com/netease-youdao/LobsterAI/pull/1143)（Agent 图标不一致）、[#1144](https://github.com/netease-youdao/LobsterAI/pull/1144)（定时任务上次执行时间）、[#1145](https://github.com/netease-youdao/LobsterAI/pull/1145)（团队配置模板导入导出）、[#1146](https://github.com/netease-youdao/LobsterAI/pull/1146)（新建 Agent 未取任务记录）等。这些 5 个多月未被处理的贡献被清理，提升了仓库 backlog 健康度。

**项目整体向前迈进幅度：显著（OpenClaw 兼容性主线告一段落，可视为一次中等规模的版本收口）。**

---

## 4. 社区热点

### 4.1 广告横幅永久关闭（Issue #2342 ↔ PR #2374）

- [Issue #2342](https://github.com/netease-youdao/LobsterAI/issues/2342)（**OPEN，stale**）由用户 @PYUDNG 反馈：v2026.7.15 版本后左下角新增广告 banner，虽然可以点击关闭，但没有彻底关闭的设置项，用户在 Settings 里找不到相关开关。截至今日仅 2 条评论、0 👍，互动偏低但诉求清晰。
- 对应 [PR #2374](https://github.com/netease-youdao/LobsterAI/pull/2374)（**OPEN，stale**）由 @bunnysayzz 提出：**在 Settings → General 中新增"永久隐藏侧边栏广告"的开关**，彻底解决此问题。

**诉求分析**：这是一个典型的"广告 → 永久关闭选项"诉求。用户对临时性关闭按钮的不满，反映了对**主动掌控 UI 干扰**的期望。这种 feature request 在桌面应用社区几乎必然会被纳入版本路线图，PR 本身代码就绪，缺的是维护者 review 与合入。

---

## 5. Bug 与稳定性

按严重程度排列（基于 PR 描述中的影响面判断）：

| 严重度 | 问题 | 状态 |
|---|---|---|
| 🔴 高 | 长会话 Chat Completions 输出 token 被错误压缩至 1，导致协议成功但无正文 | ✅ [PR #2684](https://github.com/netease-youdao/LobsterAI/pull/2684) 已合并 |
| 🔴 高 | 旧版 `memory/.dreams/` JSON 损坏会阻断网关启动 | ✅ [PR #2681](https://github.com/netease-youdao/LobsterAI/pull/2681) 已合并 |
| 🔴 高 | 历史会话块缺失 ID/字段类型错误导致请求准备阶段抛错，任务反复无法继续 | ✅ [PR #2682](https://github.com/netease-youdao/LobsterAI/pull/2682) 已合并 |
| 🟠 中 | Cowork 技术错误详情丢失，仅显示 provider/model/modelSource | ✅ [PR #2677](https://github.com/netease-youdao/LobsterAI/pull/2677) 已合并 |
| 🟠 中 | POPO 2.1.13 SDK 同步 require 与 host ESM 导入竞态，重启后 POPO 账户监听器消失 | ✅ [PR #2664](https://github.com/netease-youdao/LobsterAI/pull/2664) 已合并 |
| 🟡 低 | `buildOpenAIChatCompletionsURL` 处理 Google Gemini `/v1` baseURL 时缺少 `/` 分隔符 | ⚠️ Issue [#1151](https://github.com/netease-youdao/LobsterAI/issues/1151) 已 stale 关闭，未见配套 fix PR 合并 |
| 🟡 低 | `coworkMemoryExtractor` 缺乏 Vitest 单元测试覆盖 | ⚠️ Issue [#1149](https://github.com/netease-youdao/LobsterAI/issues/1149) 已 stale 关闭，建议补回 |

**总评**：所有今日合并的稳定性修复都围绕 OpenClaw 升级兼容性，且均直接由用户反馈/日志驱动，修复质量较高。

---

## 6. 功能请求与路线图信号

### 6.1 明确信号：广告 banner 永久开关

[Issue #2342](https://github.com/netease-youdao/LobsterAI/issues/2342) + [PR #2374](https://github.com/netease-youdao/LobsterAI/pull/2374) 已经形成完整的"用户诉求 → 实现 PR"链路。**纳入下一版本（v2026.9.15 或 v2026.9.x）的概率极高**，只需维护者 review 合入即可。

### 6.2 Stale PR 中的功能诉求（已被关闭，存在重启价值）

虽然 7 条 stale PR 被关闭，但其中包含社区真实的功能需求：

- **团队配置模板导入导出**（[#1145](https://github.com/netease-youdao/LobsterAI/pull/1145)）：企业部署场景刚需，建议重新开放。
- **新建 Agent 自动获取任务记录**（[#1146](https://github.com/netease-youdao/LobsterAI/pull/1146)）：影响新建重名 Agent 后的使用体验。
- **技能管理页面快捷创建技能**（[#1142](https://github.com/netease-youdao/LobsterAI/pull/1142)）：典型 UX 优化。
- **定时任务列表显示上次执行时间**（[#1144](https://github.com/netease-youdao/LobsterAI/pull/1144)）：状态可观测性增强。

### 6.3 开放中的功能 PR

- [PR #2680](https://github.com/netease-youdao/LobsterAI/pull/2680)：保留模型策略不被配置同步覆盖（**OPEN**）
- [PR #2374](https://github.com/netease-youdao/LobsterAI/pull/2374)：永久隐藏广告（**OPEN**）
- [PR #1277](https://github.com/netease-youdao/LobsterAI/pull/1277)：electron 43.5.0 → 44.3.0 升级（**OPEN**，Dependabot）
- [PR #1181](https://github.com/netease-youdao/LobsterAI/pull/1181)：在 Cowork 会话列表中隐藏 OpenClaw 主控会话（**OPEN**）

---

## 7. 用户反馈摘要

- **🤖 广告干扰（[#2342](https://github.com/netease-youdao/LobsterAI/issues/2342)）**：用户在 v2026.7.15 之后首次见到左下角广告 banner，期望"永久关闭"而非每次手动叉掉。痛点关键词：广告、关闭、设置项、版本变化。
- **💬 错误信息可读性退化（[PR #2677](https://github.com/netease-youdao/LobsterAI/pull/2677) 描述）**：升级后错误卡片只显示 provider/model/modelSource，原日志中的 `Cannot read properties of undefined (reading 'trim')` 等脱敏技术详情丢失，调试/反馈效率下降。
- **⛔ 网关启动失败（[PR #2681](https://github.com/netease-youdao/LobsterAI/pull/2681) 描述）**：用户报告"梦境文件 JSON 解析失败阻断启动"，普通重试和重建配置均无法解决。
- **📭 长会话无正文（[PR #2684](https://github.com/netease-youdao/LobsterAI/pull/2684) 描述）**：长会话推理模型"协议成功但没正文，重复续答也无法恢复"——这对生产力用户极具杀伤力。

**满意点**：用户对 OpenClaw 兼容性问题反馈路径顺畅，PR 提交速度快、修复质量高。

---

## 8. 待处理积压

| 项 | 类型 | 状态 | 创建 | 风险 |
|---|---|---|---|---|
| [#2342](https://github.com/netease-youdao/LobsterAI/issues/2342) 广告永久关闭 | Issue | OPEN (stale) | 2026-07-15 | 中：用户高频反馈且已配套 PR #2374 |
| [#2374](https://github.com/netease-youdao/LobsterAI/pull/2374) 广告永久开关实现 | PR | OPEN (stale) | 2026-07-21 | 中：代码就绪待 review，已挂 50 天 |
| [#2680](https://github.com/netease-youdao/LobsterAI/pull/2680) 模型策略保留 | PR | OPEN | 2026-09-15 | 低：当日提交，正常排队 |
| [#1181](https://github.com/netease-youdao/LobsterAI/pull/1181) 隐藏 OpenClaw 主控会话 | PR | OPEN | 2026-04-01 | 中：已挂 168 天仍未合入 |
| [#1277](https://github.com/netease-youdao/LobsterAI/pull/1277) Electron 升级 44.3.0 | PR | OPEN | 2026-04-02 | 中：大型依赖升级，长期不合并会积压技术债 |

**提醒维护者关注**：
- [PR #2374](https://github.com/netease-youdao/LobsterAI/pull/2374) 已伴随用户 Issue [#2342](https://github.com/netease-youdao/LobsterAI/issues/2342) 长达近两个月**，建议尽快 review 合入或反馈修改意见。
- [PR #1181](https://github.com/netease-youdao/LobsterAI/pull/1181) 属于 UX 净改善，长期不响应可能引发贡献者流失。
- [Issue #1149](https://github.com/netease-youdao/LobsterAI/issues/1149) 测试覆盖问题虽被 stale 关闭，但 `coworkMemoryExtractor` 的正则逻辑风险依然存在，建议作为内部技术债跟踪。

---

## 📊 项目健康度评估

| 维度 | 评分 | 说明 |
|---|---|---|
| 开发活跃度 | ⭐⭐⭐⭐⭐ | 单日 30 PR 提交/更新 |
| 修复响应速度 | ⭐⭐⭐⭐ | 用户反馈 → 修复 PR 链路畅通 |
| 社区互动度 | ⭐⭐ | Issue 评论数普遍偏低（多数 ≤2），讨论深度有限 |
| 积压管理 | ⭐⭐⭐ | stale 清理积极，但仍有 50–168 天长期未合入的 PR |
| 路线图清晰度 | ⭐⭐⭐⭐ | 围绕 OpenClaw 兼容性主题明确集中 |

> **结论**：LobsterAI 处于一个**健康的版本收口期**，围绕 OpenClaw v2026.8.1 升级的兼容性工作已基本完成，下一阶段重点是发行版本发布与广告/UI 类用户诉求的回应。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报
**日期：2026-09-16**

---

## 1. 今日速览

Moltis 项目今日活跃度处于**低位水平**。过去 24 小时内仅有 1 个 Issue 被更新、1 个新 PR 被创建，未发生任何 PR 合并或 Issue 关闭，也未发布新版本。整体来看，社区互动与代码交付节奏平缓，但当日提交的 PR #1270 涉及镜像构建优化，属于对开发体验有显著价值的工程改进。综合评估：项目处于**平稳维护状态**，无重大功能落地或紧急修复事件。

---

## 2. 版本发布

今日无新版本发布。本节略。

---

## 3. 项目进展

今日**无 PR 合并或关闭**，未产生已落地的代码变更。

值得关注的在途 PR：

- **#1270** [`feat(build): cache cargo across image builds, and script building the image`](https://github.com/moltis-org/moltis/pull/1270)
  - 作者：Bergmann89 | 创建于 2026-09-15
  - 核心内容：将 cargo target 目录与 crate registry 改为 BuildKit cache mounts，使每次镜像构建仅编译变更部分，链接已有依赖；并附带构建脚本。
  - 预期收益：显著缩短增量构建时间（PR 描述中提到冷构建全量工作空间耗时较长）。
  - 当前状态：**待合并**，尚无评论或评审反馈。

> 评估：虽然尚未合并，但若被接受，将实质性提升 CI 与本地构建效率，属于对开发者工作流友好的"基础设施级"改进。

---

## 4. 社区热点

今日讨论活跃度最高的话题是：

- **#205** [`[Feature]: Allow setting body parameters for custom OpenAI endpoints (and per-model)`](https://github.com/moltis-org/moltis/issues/205)
  - 类型：enhancement（功能增强）
  - 作者：TheGoddessInari
  - 创建于 2026-02-22，**最近更新于 2026-09-15**（即昨日活跃）
  - 评论数：2 | 👍：0

**诉求分析**：用户希望在调用自定义 OpenAI 兼容端点时，能够为端点本身或单个模型灵活设置请求体参数（body parameters）。这一需求反映出 Moltis 用户中存在**多模型、多提供商接入**的进阶场景——可能涉及 fine-tuned 模型、Azure/OpenRouter 等兼容 OpenAI 协议的第三方服务、以及不同模型对采样参数（temperature、top_p、frequency_penalty 等）差异化的诉求。2 条评论表明已存在初步的社区讨论，但关注度（👍=0）仍较低，可能尚未触达更广泛的用户群体。

---

## 5. Bug 与稳定性

**今日无新增 Bug 报告、崩溃或回归问题。**

当前未发现影响项目稳定性的紧急问题。建议持续关注后续是否有用户在新版本使用中暴露问题。

---

## 6. 功能请求与路线图信号

今日涉及的功能请求：

- **#205（开放中，已存在约 7 个月）** — 自定义 OpenAI 端点 body 参数配置（全局 / per-model）
  - 与现有 PR 的关联：暂无直接对应的实现 PR。
  - 落地可能性评估：该需求技术实现成本适中（属于配置层扩展），但因其涉及 LLM 调用核心链路，**维护者需谨慎评估对一致性、错误处理的影响**。建议关注 maintainer 后续表态。

> 由于仓库内暂无与该功能对齐的进行中 PR，短期内大概率不会进入下一版本规划。

---

## 7. 用户反馈摘要

因评论数据有限，仅基于 Issue #205 的 2 条评论提炼：

- **使用场景**：用户在使用 Moltis 接入自定义/自托管 OpenAI 兼容端点时，**默认请求体不足以覆盖其模型或业务需求**。
- **痛点**：当前缺乏灵活的请求体参数定制能力，特别是在**多模型共存**的部署环境下无法做到 per-model 调参。
- **满意度**：尚无明确的正面或负面情绪反馈，👍=0 也反映出该议题目前未获得广泛共鸣。

> 数据样本较小，建议结合后续 issue / discussion 中的用户访谈补充更完整的反馈画像。

---

## 8. 待处理积压

提醒维护者关注以下长期未结项条目：

| 编号 | 类型 | 标题 | 创建时间 | 状态 | 备注 |
|---|---|---|---|---|---|
| [#205](https://github.com/moltis-org/moltis/issues/205) | Enhancement | Allow setting body parameters for custom OpenAI endpoints (and per-model) | 2026-02-22 | OPEN | **已开放约 7 个月**，近日重新活跃，建议维护者明确处理意向（接受 / 推迟 / 关闭） |

> 该 Issue 长期处于"开放但低关注"状态，对外可能传递项目治理响应速度偏弱的信号。建议维护者即使短期内无法实现，也给出官方回应以保持社区沟通透明度。

---

### 报告小结

| 维度 | 状态 |
|---|---|
| 版本发布 | ⬜ 无 |
| PR 合并 |  无 |
| Issue 关闭 |  无 |
| 新增讨论 | 🟡 1 条（enhancement） |
| 新增 PR |  1 条（构建优化，待合并） |
| 紧急 Bug | ⬜ 无 |
| 项目健康度 |  平稳，无异常信号 |

**总体判断**：Moltis 今日处于低活跃的常规维护日，未出现阻塞性问题。建议维护者推进 PR #1270 的评审，并就 #205 给出官方表态，以维持社区信心。

---

*报告基于 Moltis 公开 GitHub 数据自动生成。数据时间窗口：2026-09-15 ~ 2026-09-16。*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目日报 · 2026-09-16

> 仓库：[agentscope-ai/CoPaw](https://github.com/agentscope-ai/CoPaw)（注：Issue 系统中仍以旧名 "QwenPaw" 标识，疑似正在进行品牌迁移）
> 统计周期：过去 24 小时

---

## 1. 今日速览

CoPaw（QwenPaw）继续保持高活跃开发节奏：**过去 24 小时共更新 26 条 Issue 与 50 条 PR**，其中 Issue 关闭率达 69%（18/26），PR 完成率为 52%（26/50），社区响应效率较高。今日无版本发布，但**修复了大量 2.2.0/2.2.1 回归问题**（MCP 连接、PDF 序列化、SSE 流、Web UI 主题、Hub 鉴权等），同时**新功能 PR 集中在 Hub 多租户、Console 工作台、Advisor 模式、DeepSeek V4 Flash 模型能力**等方向。整体来看，项目正从 2.2 版本的"修 bug 阶段"过渡到 2.3 的"功能扩张阶段"，健康度良好。

---

## 2. 版本发布

🚫 **今日无新版本发布**。

社区当前主要版本线：
- **2.2.1**（稳定版，仍是大多数 Issue 的报告版本）
- **2.2.x**（Hub 多租户方向，[#7318](https://github.com/agentscope-ai/QwenPaw/issues/7318) 预告 2.2.0 已上线）
- **2.1.x**（部分用户停留版本，存在兼容性差异）

---

## 3. 项目进展（今日合并/关闭的重要 PR）

| PR | 标题 | 影响范围 | 链接 |
|---|---|---|---|
| **#7741** ✅ | `feat(console): add customizable theme colors` | Console UI 主题持久化、6 套内置配色、实时预览；关闭 [#7406](https://github.com/agentscope-ai/QwenPaw/issues/7406) | [链接](https://github.com/agentscope-ai/QwenPaw/pull/7741) |
| **#7636** ✅ | `fix(agents): strip tool-result PDF document blocks` | 修复 OpenAI 兼容 Chat Completions 端点（vLLM/DeepSeek/DashScope/Zhipu）拒绝 `{"type":"file"}` 的 400 错误；后续修复 [#7689](https://github.com/agentscope-ai/QwenPaw/issues/7689) | [链接](https://github.com/agentscope-ai/QwenPaw/pull/7636) |
| **#7735** ✅ | `fix(mcp): preserve decoded HTTP error responses` | 修复 2.2.x 升级后 MCP 无法连接/注册（[#7716](https://github.com/agentscope-ai/QwenPaw/issues/7716)），避免 HTTPX 二次解压 | [链接](https://github.com/agentscope-ai/QwenPaw/pull/7735) |
| **#7737** ✅ | `fix(skills): expand multi-agent collaboration trigger keywords` | 修复 [#3113](https://github.com/agentscope-ai/QwenPaw/issues/3113)；多 agent 协作技能首轮识别能力 | [链接](https://github.com/agentscope-ai/QwenPaw/pull/7737) |
| **#7736** ✅ | `feat(providers): add DeepSeek V4 Flash capabilities` | 新模型能力上线（图像输入、1M token 上下文、reasoning effort） | [链接](https://github.com/agentscope-ai/QwenPaw/pull/7736) |
| **#7680** ✅ | `fix(agents): diagnose dropped subagent model overrides` | 修复 subAgent 配置丢失静默失败（[#7678](https://github.com/agentscope-ai/QwenPaw/issues/7678) 的关键诊断路径） | [链接](https://github.com/agentscope-ai/QwenPaw/pull/7680) |
| **#7759** ✅ | `fix(console): restore visible link focus indicators` | 修复设计重置后键盘焦点不可见问题（无障碍 A11y 改进） | [链接](https://github.com/agentscope-ai/QwenPaw/pull/7759) |

**整体进展评估**：今日推进了 **7 项关键修复 + 1 项新功能**，涵盖**安全性（[#4037](https://github.com/agentscope-ai/QwenPaw/issues/4037) 已关）、协议兼容性（PDF/MCP）、新模型接入（DeepSeek V4 Flash）、UI 个性化、A11y** 等多条主线，是 2.2.1 收尾阶段的高效一天。

---

## 4. 社区热点

### 🔥 讨论最活跃

| Issue | 标题 | 评论 | 👍 | 状态 |
|---|---|---|---|---|
| [#7318](https://github.com/agentscope-ai/QwenPaw/issues/7318) | QwenPaw Hub 多租户版 2.2.0 路线图征集 | **27** | 4 | OPEN |
| [#7678](https://github.com/agentscope-ai/QwenPaw/issues/7678) | spawn subAgent 全部 timeout 失败 | 7 | 0 | OPEN |
| [#7567](https://github.com/agentscope-ai/QwenPaw/issues/7567) | 停止按钮"假停"——UI 提示停止但任务仍在执行 | 7 | 0 | OPEN |
| [#7739](https://github.com/agentscope-ai/QwenPaw/issues/7739) | 历史对话移至右侧（14 寸屏布局优化） | 6 | 0 | CLOSED |
| [#3871](https://github.com/agentscope-ai/QwenPaw/issues/3871) | Agent 进入无限 "Thinking" 状态（SSE 未关闭） | 5 | 0 | CLOSED |

### 诉求分析

- **#7318（27 评论）**：社区强烈呼吁**多租户/团队协作能力**，用户希望 Hub 能支持管理员托管 Skills、统一 API key、成员配额管理等。这不是"愿景讨论"，而是已有 23+ 相关引用 Issue。
- **#7739（已关）**：与 [#7700](https://github.com/agentscope-ai/QwenPaw/issues/7700) 形成"对话栏位置"之争——左派 vs 右派，**说明 Web UI 在小屏/笔记本上确实存在严重布局拥挤问题**。
- **#7678 / #7567**：体现 2.2.x 版本在**任务生命周期管理**（spawn、stop 按钮、SSE 流）上集中爆发问题，可视为 2.2 系列的稳定性短板。

---

## 5. Bug 与稳定性（按严重程度）

### 🔴 严重（P0 — 数据丢失 / 服务不可用）

| Issue | 描述 | Fix PR | 状态 |
|---|---|---|---|
| [#7678](https://github.com/agentscope-ai/QwenPaw/issues/7678) | 2.2.0 spawn subAgent 全部 timeout，无论 timeout 多长 | [#7680](https://github.com/agentscope-ai/QwenPaw/pull/7680) 部分诊断 / [#7796](https://github.com/agentscope-ai/QwenPaw/pull/7796) 待审 | OPEN |
| [#7567](https://github.com/agentscope-ai/QwenPaw/issues/7567) | 停止按钮假停，409 冲突，刷新仍执行 | — | OPEN |
| [#7786](https://github.com/agentscope-ai/QwenPaw/issues/7786) | 云端/NFS 部署打开文件浏览器，整个进程冻结 5-6 分钟 | — | OPEN |
| [#7775](https://github.com/agentscope-ai/QwenPaw/issues/7775) | 达 max_iters 后无最终答复、无警告、用户看不见"超限" | — | OPEN |

### 🟠 高（P1 — 核心功能异常）

| Issue | 描述 | Fix PR | 状态 |
|---|---|---|---|
| [#7689](https://github.com/agentscope-ai/QwenPaw/issues/7689) | 多模态端点仍发送 PDF `{"type":"file"}` 被拒 | [#7636](https://github.com/agentscope-ai/QwenPaw/pull/7636) ✅ | **已修** |
| [#7716](https://github.com/agentscope-ai/QwenPaw/issues/7716) | 2.2.x 升级后 MCP 无法连接 | [#7735](https://github.com/agentscope-ai/QwenPaw/pull/7735) ✅ | **已修** |
| [#7792](https://github.com/agentscope-ai/QwenPaw/issues/7792) | 微信视频/音频作为 `file://` URL 发送，OpenAI 兼容 API 返回 400 | — | OPEN |
| [#7767](https://github.com/agentscope-ai/QwenPaw/issues/7767) | 守护插件构建：console 附件 stale blob、一次性 cron 误触发、tail-drop、`on_acting` 从不触发 | — | OPEN |
| [#7772](https://github.com/agentscope-ai/QwenPaw/issues/7772) | 配置 newapi 代理后测试模型报错 | — | CLOSED |
| [#7764](https://github.com/agentscope-ai/QwenPaw/issues/7764) | MCP 客户端 `dagu` 因 zlib header 错误保持 inactive | — | CLOSED |
| [#7743](https://github.com/agentscope-ai/QwenPaw/issues/7743) | Hub 模式下文件预览 401 未鉴权 | — | CLOSED |

### 🟡 中（P2 — 兼容性与小屏可用性）

| Issue | 描述 | Fix PR | 状态 |
|---|---|---|---|
| [#5872](https://github.com/agentscope-ai/QwenPaw/issues/5872) | Docker 容器内 `browser_use` dbus 连接失败 | — | CLOSED |
| [#3871](https://github.com/agentscope-ai/QwenPaw/issues/3871) | Agent 完成后进入无限 Thinking（SSE 流未关） | — | CLOSED |
| [#7193](https://github.com/agentscope-ai/QwenPaw/issues/7193) | 2.1 网页版 agent 自动搜索记忆错乱到另一会话 | — | CLOSED |

### 🔒 安全相关

| Issue | 描述 | 状态 |
|---|---|---|
| [#4037](https://github.com/agentscope-ai/QwenPaw/issues/4037) | 工具启用 HTTP 网关默认无鉴权 — 非 loopback 绑定应拒绝 | **CLOSED**（已加防护逻辑，要求 `QWENPAW_AUTH_ENABLED`）|

**总结**：4 条 P0 严重 Bug 中仅有 1 条（subAgent 配置丢失）有部分 fix，**#7567 停止按钮假停、#7786 文件浏览器冻结、#7775 max_iters 静默结束** 三个 P0 仍 OPEN，建议维护者优先处理。

---

## 6. 功能请求与路线图信号

### 高优先级（已有对应 PR 进行中）

| 需求 | 描述 | 对应 PR | 落地概率 |
|---|---|---|---|
| Hub 多租户 / 模型网关 / 成员治理 | [#7318](https://github.com/agentscope-ai/QwenPaw/issues/7318) 27 评论社区共识 | [#7779](https://github.com/agentscope-ai/QwenPaw/pull/7779) 已 OPEN | ⭐⭐⭐⭐⭐（2.2.0 主线） |
| Advisor 模式（强 advisor + 弱 worker 双模型协作） | — | [#7569](https://github.com/agentscope-ai/QwenPaw/pull/7569) 已 OPEN 9 月 5 日起 | ⭐⭐⭐⭐ |
| Console 统一聊天工作台（可定制 Tabs） | — | [#7790](https://github.com/agentscope-ai/QwenPaw/pull/7790) OPEN | ⭐⭐⭐⭐ |
| AgentScopeRuntimeWebUI 1.2 适配 + 队列稳定 | — | [#7382](https://github.com/agentscope-ai/QwenPaw/pull/7382) OPEN | ⭐⭐⭐ |
| QwenPaw-Data App 0.3 数据分析工作流 | — | [#7637](https://github.com/agentscope-ai/QwenPaw/pull/7637) OPEN | ⭐⭐⭐ |
| 自定义 IMAP/SMTP 邮件提供方 | — | [#7791](https://github.com/agentscope-ai/QwenPaw/pull/7791) OPEN | ⭐⭐⭐ |

### 用户新提需求（无 PR）

| 需求 | Issue | 优先级 |
|---|---|---|
| 对话中通过 `//` 模糊搜索调用内置/MCP 工具 | [#7778](https://github.com/agentscope-ai/QwenPaw/issues/7778) / [#7780](https://github.com/agentscope-ai/QwenPaw/issues/7780) / [#7777](https://github.com/agentscope-ai/QwenPaw/issues/7777) （同一作者多次提）| 中 |
| 在线更新改为后台执行（避免停机）| [#7543](https://github.com/agentscope-ai/QwenPaw/issues/7543) | 中 |
| 频道参数（QQ号、电话、工号）透传给 MCP 工具 | [#7650](https://github.com/agentscope-ai/QwenPaw/issues/7650) 标 wontfix | 低 |
| Skills 适用 channel 列表（自定义 channel 限定） | [#7746](https://github.com/agentscope-ai/QwenPaw/issues/7746) | 中 |
| 文件发送后正文展示文件卡片（不藏在工具步骤） | [#7744](https://github.com/agentscope-ai/QwenPaw/issues/7744) | 中 |
| Web Console 文件展示不再误导折叠 | 同上 | — |

**路线图信号**：Hub 多租户、Advisor 模式、Console 工作台、DeepSeek V4 Flash 是 2.3 版本最有可能纳入的 4 大主线。

---

## 7. 用户反馈摘要

### 😟 主要痛点

1. **2.2.x 升级后 MCP 生态断裂**（[#7716](https://github.com/agentscope-ai/QwenPaw/issues/7716)）：多个用户在 2.1.1b3 → 2.2.0/2.2.1 后无法连接自托管 MCP server；这暴露了版本升级的**回归测试覆盖不足**。
2. **Hub 多租户是企业用户的明确呼声**（[#7318](https://github.com/agentscope-ai/QwenPaw/issues/7318) 27 评论）：用户希望管理员统一管理 Skills、API key、成员配额；目前 Hub 仅是个人版延伸。
3. **Web UI 在 14 寸笔记本上拥挤**（[#7739](https://github.com/agentscope-ai/QwenPaw/issues/

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw 项目日报

**日期：2026-09-16**
**仓库：github.com/qhkm/zeptoclaw**

---

## 1. 今日速览

ZeptoClaw 在过去 24 小时内呈现典型的「依赖维护日」特征：社区端无新 Issue 或评论活动，18 条 PR 全部由 **dependabot[bot]** 自动发起且均处于 OPEN 状态，零合并、零关闭、零 Release。核心 Rust 主线无功能性 PR 提交，活跃度评估为**低（基础设施维护级别）**。健康度方面，dependabot 持续按节奏滚动更新 Rust crates、文档站（Astro Starlight）以及 CI 镜像基础层，说明自动化巡检机制运行正常，但需要关注 `astro 6→7`、`base64 0.22→0.23` 这类跨大版本变更对构建链路的潜在影响。

---

## 2. 版本发布

🚫 **今日无新版本发布**。

---

## 3. 项目进展

今日**无功能性 PR 被合并或关闭**。所有 18 条 PR 均处于待审状态：

| 维度 | 数量 | 说明 |
|------|------|------|
| 主线功能 | 0 | 无 |
| 文档/示例 | 0 | 无 |
| 依赖更新 | 18 | 全部由 dependabot 自动发起 |
| 已合并 | 0 | — |
| 已关闭 | 0 | — |

**今日项目功能层面进展为 0**。唯一可视为「向前推进」的信号是：维护者通过 dependabot 配置，**主动批量升级了多处子站（/landing/zeptoclaw/docs、/landing/r8r/docs）的 Astro 7 主版本框架以及 Rust 工具链依赖**，反映出长期方向仍是保持现代栈与安全更新，但还未真正落地。

---

## 4. 社区热点

由于今日 18 条 PR 均无评论、零 👍（reactions）、零互动，**不存在真正意义上的社区热点**。可关注的相对重要的变更如下（按变更幅度排序）：

- 🔥 **PR #695** – astro 6.3.7 → 7.2.2（**跨大版本** `/landing/zeptoclaw/docs`）— [链接](https://github.com/qhkm/zeptoclaw/pull/695)
- 🔥 **PR #686** – astro 6.3.7 → 7.2.2（**跨大版本** `/landing/r8r/docs`）— [链接](https://github.com/qhkm/zeptoclaw/pull/686)
- 🟧 **PR #694** – base64 0.22.1 → 0.23.1（Rust 主线，跨次版本）— [链接](https://github.com/qhkm/zeptoclaw/pull/694)
- 🟧 **PR #696 / #689** – @astrojs/starlight 0.39.2 → 0.41.10 — [#696](https://github.com/qhkm/zeptoclaw/pull/696) · [#689](https://github.com/qhkm/zeptoclaw/pull/689)
- 🟨 **PR #682** – taiki-e/install-action 2.79.7 → 2.87.6（GitHub Actions）— [链接](https://github.com/qhkm/zeptoclaw/pull/682)

诉求分析：所有热点均为机器驱动，**无用户诉求**。但 Astro 7 跨大版本升级通常意味着文档站布局/插件 API 变化，是潜在的关注点。

---

## 5. Bug 与稳定性

**今日未发现用户报告的 Bug、崩溃或回归问题**。

值得维护者留意的间接稳定性信号：

- ⚠️ **PR #680 / #679** – Docker 基础镜像（debian、rust）以 digest 形式升级，且 dependabot 标记 *「Cooldown could not be applied because no publication date was available from the registry」*，建议人工核对上游发布时间，避免引入未充分发布的镜像层。 — [#680](https://github.com/qhkm/zeptoclaw/pull/680) · [#679](https://github.com/qhkm/zeptoclaw/pull/679)
- ⚠️ **PR #694（base64 0.23.x）** 该版本移除/调整了部分旧 API（如 `base64::engine::general_purpose::STANDARD_NO_PAD` 的导出方式有变化），需关注 `cargo build` / CI 链路。 — [链接](https://github.com/qhkm/zeptoclaw/pull/694)
- ℹ️ **PR #687** – docker/login-action 4.6.0 release notes 提到 *"Harden…"*，建议 review 升级带来的 OIDC/凭据行为变化。 — [链接](https://github.com/qhkm/zeptoclaw/pull/687)

均无对应 fix PR，因为这些并非用户提交的缺陷，而是依赖变更本身的风险点。

---

## 6. 功能请求与路线图信号

**今日无新功能请求**。从今日依赖变更可推测的潜在方向：

- 📌 **文档站现代化**：Astro 6→7 + Starlight 0.41 的批量升级，暗示项目正在对齐 Astro 生态主线，下一版本可能伴随文档站重构或主题更新。
- 📌 **Rust 工具链收敛**：clap 4.6、rustls 0.23、tokio-serial 5.5、async-trait 0.1.92 等版本较新且稳定，主线依赖趋于收敛，但 base64 跨版本升级会引入一次小范围的代码审查工作。
- 📌 **CI 性能与安全**：Swatinem/rust-cache、cargo-deny-action、softprops/action-gh-release 等 Actions 的小版本更新，指向持续集成在缓存与供应链审核上的常态化维护。

---

## 7. 用户反馈摘要

⚠️ **今日无任何 Issues 评论数据**，无法提取真实用户痛点。建议维护者主动在仓库开启讨论（Discussions）或在 Issue 中发起 *「用户体验调研」* 标签，以补充日报中的用户视角信息。

---

## 8. 待处理积压

由于今日全部 18 条 dependabot PR **均处于 OPEN 且 0 评论、0 反应**，建议维护者按以下优先级批量处理：

### 🔴 高优先级（涉及跨版本 / 跨子系统）
- [PR #695](https://github.com/qhkm/zeptoclaw/pull/695) – astro 7 升级（zeptoclaw docs）
- [PR #686](https://github.com/qhkm/zeptoclaw/pull/686) – astro 7 升级（r8r docs）
- [PR #694](https://github.com/qhkm/zeptoclaw/pull/694) – base64 跨次版本升级
- [PR #680](https://github.com/qhkm/zeptoclaw/pull/680) – debian 镜像 digest 升级（cooldown 未生效）
- [PR #679](https://github.com/qhkm/zeptoclaw/pull/679) – rust 镜像 digest 升级（cooldown 未生效）

### 🟡 中优先级（小版本 / Patch）
- [PR #696](https://github.com/qhkm/zeptoclaw/pull/696)、[#689](https://github.com/qhkm/zeptoclaw/pull/689) – Starlight 0.41.10
- [PR #693](https://github.com/qhkm/zeptoclaw/pull/693)、[#691](https://github.com/qhkm/zeptoclaw/pull/691) – sharp 0.35.4
- [PR #692](https://github.com/qhkm/zeptoclaw/pull/692) – rustls 0.23.43
- [PR #690](https://github.com/qhkm/zeptoclaw/pull/690) – clap 4.6.6
- [PR #688](https://github.com/qhkm/zeptoclaw/pull/688) – async-trait 0.1.92
- [PR #685](https://github.com/qhkm/zeptoclaw/pull/685) – tokio-serial 5.5.0
- [PR #687](https://github.com/qhkm/zeptoclaw/pull/687) – docker/login-action 4.6.0
- [PR #682](https://github.com/qhkm/zeptoclaw/pull/682) – taiki-e/install-action 2.87.6

### 🟢 低优先级（Patch / 镜像细节）
- [PR #684](https://github.com/qhkm/zeptoclaw/pull/684) – cargo-deny-action 2.1.1
- [PR #683](https://github.com/qhkm/zeptoclaw/pull/683) – Swatinem/rust-cache 2.9.2
- [PR #681](https://github.com/qhkm/zeptoclaw/pull/681) – softprops/action-gh-release 3.0.3

> 💡 **建议**：批量合并同一文件、同一来源的小版本 PR，可减少 CI 触发次数；跨大版本 PR（astro、base64）建议单独 review 并触发完整回归测试。

---

### 📊 数据健康度小结

| 指标 | 状态 |
|------|------|
| 功能产出 | 🟥 零 |
| 自动化维护 | 🟢 强（18 条 dependabot） |
| 社区互动 | 🟥 零 |
| 安全合规 | 🟢 依赖持续更新 |
| 待办积压 | 🟧 18 条 OPEN PR 全部待人工 review |

**结论**：ZeptoClaw 处于「自动化巡检正常、人工功能开发静默」的阶段。建议维护者抽时间集中 review 上述 PR，特别是 astro 7 / base64 0.23 的跨版本升级；同时关注社区渠道缺失的问题——连续多日无用户互动可能意味着外部贡献者入口不够畅通。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目日报 · 2026-09-16

> 数据范围：2026-09-15 ~ 2026-09-16 ｜ 数据源：github.com/zeroclaw-labs/zeroclaw

---

## 1. 今日速览

ZeroClaw 今日保持高强度的工程节奏，**24 小时内活跃 Issue/PR 合计达 100 条**（50 Issues + 50 PRs），新开活跃 38 条、关闭 12 条，PR 待合并 40 条、合并/关闭 10 条，无版本发布。讨论热点集中在三个主题：**安全与合规**（OAuth、emergency-stop、RUSTSEC 依赖修复）、**多模态与 Anthropic 路由**（图片缓存、视觉能力分流、工具返回图片序列化）、**插件化与运行时解耦**（WASM 插件治理、channel/runtime 边界清理）。整体仓库处于 RFC 收敛与 PR 大规模落地并行的关键阶段，健康度评估：**活跃但需关注长期 blocked 项与 CI 抖动**。

---

## 2. 版本发布

⚪ 今日无新版本发布。当前发版工作集中在 PR 合并累积阶段，重点 PR（如 #9109 已合并）正在为下一版本铺路，建议关注 master 端 feature freeze 信号。

---

## 3. 项目进展

今日共 **关闭 12 个 Issue / 10 个 PR**，主要推进方向：

| PR/Issue | 内容 | 影响 |
|---|---|---|
| [#9109](https://github.com/zeroclaw-labs/zeroclaw/pull/9109) | Provider profile 改造（已合并为 `49d2fd7bce`） | 推动 #10172（保留 provider profile 语义）解阻塞 |
| [#9876 (CLOSED)](https://github.com/zeroclaw-labs/zeroclaw/pull/9876) | Zerocode 通过 OSC 标题和进度上报 turn 状态 | 终端侧可观测性增强 |
| [#9503 (CLOSED)](https://github.com/zeroclaw-labs/zeroclaw/issues/9503) | 清理重连生成的 daemon 子进程 | ZeroCode TUI 资源泄漏修复 |
| [#2754 (CLOSED)](https://github.com/zeroclaw-labs/zeroclaw/pull/2754) | 修复 Dockerfile heredoc chown 与未引用变量展开 | 镜像构建可重复性提升 |
| [#10888 (CLOSED)](https://github.com/zeroclaw-labs/zeroclaw/issues/10888) | 工具结果图片序列化不一致导致缓存前缀失效 | 与 #10889、#10778 形成多模态一致性系列修复 |
| [#10272 (CLOSED)](https://github.com/zeroclaw-labs/zeroclaw/issues/10272) | 并行测试下 Hailo 日志断言相关性修复 | CI 稳定性提升 |
| [#10625 (CLOSED)](https://github.com/zeroclaw-labs/zeroclaw/issues/10625) | 非视觉模型下 `[media attachment]` 占位符泄漏 | Matrix 等 channel 的多模态降级路径修复 |
| [#8983 (CLOSED)](https://github.com/zeroclaw-labs/zeroclaw/issues/8983) | 类别作用域的 read_memory_from | 多 agent 内存共享细化 |

**整体判断**：项目在多模态一致性、ZeroCode TUI、CI 性能三条主线上取得实质推进，但没有跨越大版本号的功能合入，下一版本（预计 v0.9.x）仍处于 RFC→实现的中段。

---

## 4. 社区热点

| 排名 | Issue / PR | 评论数 | 关注焦点 |
|---|---|---|---|
| 🥇 | [#6909](https://github.com/zeroclaw-labs/zeroclaw/issues/6909) RFC: Computer-use 桌面屏幕交互与输入控制 | 16 | **维护者接管**的高风险 RFC，已 2 次修订，明确了 bounded approval、execution-time revalidation、sidecar trust 等边界，是桌面 agent 能力的顶层设计文档 |
| 🥈 | [#9106](https://github.com/zeroclaw-labs/zeroclaw/issues/9106) RFC: A2A outbound client (A2ATool) | 11 | 补齐 #3566 拆分的另一半能力（inbound A2AServer 已在 v0.8.2 上线），是 agent 主动协作外部 A2A 协议的关键 |
| 🥉 | [#9346](https://github.com/zeroclaw-labs/zeroclaw/issues/9346) RFC: 统一的 package/capability/config/runtime-state 目录契约 | 9 | 衔接 #8908/#8909 与 #6489，建立产品级统一目录，是插件生态扩张的基础设施 |
| 4 | [#8583](https://github.com/zeroclaw-labs/zeroclaw/issues/8583) Tracker: channel/source 共享边界清理 | 6 | 跨 channel/webhook/streaming 的架构清理 audit 跟踪器 |
| 5 | [#5869](https://github.com/zeroclaw-labs/zeroclaw/issues/5869) rumqttc v0.25.1 RUSTSEC 集群公告 | 5 | **P1 安全** + blocked，唯一阻塞 rustls 全栈升级的依赖钉死点 |
| 6 | [#9464](https://github.com/zeroclaw-labs/zeroclaw/issues/9464) Anthropic OAuth alias 契约 | 4 | 与 #9420 配套的契约文档，定义 `auth_mode = "oauth"` 路径 |
| 7 | [#8850](https://github.com/zeroclaw-labs/zeroclaw/issues/8850) 将可选 channel/tool 从编译期 feature 改为运行时 WASM 插件 | 4 | 缩小默认二进制、为插件生态铺路的具体路径 |

**社区诉求分析**：本周讨论集中在两条结构性主线——**安全/合规契约**（OAuth alias、emergency-stop、RPC 主体认证、WASM 插件验证、零信任浏览器注册）与**生态基础设施**（A2A 出端、统一 catalog、OCI 注册表、WASI host function）。前者关平生产部署合规，后者关系多 agent / 多插件场景下的可扩展性。

---

## 5. Bug 与稳定性

按严重程度排序的当前活跃 Bug：

### 🚨 S1（工作流阻塞）
| Issue | 描述 | 状态 | Fix PR |
|---|---|---|---|
| [#8627](https://github.com/zeroclaw-labs/zeroclaw/issues/8627) | WhatsApp Web 设备绑定被 WhatsApp 新的 passkey/SHORTCAKE 配对门拦截 | OPEN, accepted | ⚠️ 暂无 fix，需要上游协议应对或切换至 `wa-rs` bridge 方案 |
| [#10659](https://github.com/zeroclaw-labs/zeroclaw/issues/10659) | ACP/Code turn 超预算后 session 恢复丢失可见进度 | OPEN, in-progress | ⚠️ 暂无 fix |
| [#5869](https://github.com/zeroclaw-labs/zeroclaw/issues/5869) | rumqttc 钉死导致 5 项 RUSTSEC 公告无法修复 | OPEN, **blocked** | ⚠️ 阻塞于上游 `rumqttc` 升级 |

### ⚠️ S2（降级行为）
| Issue | 描述 | 状态 | Fix PR |
|---|---|---|---|
| [#10885](https://github.com/zeroclaw-labs/zeroclaw/issues/10885) | 同 turn 内不相关工具调用后，工具返回的图片消失 | OPEN, accepted | ⚠️ 暂无（与 #10889、#10888 同一系列） |
| [#9332](https://github.com/zeroclaw-labs/zeroclaw/issues/9332) | ZeroCode 上下文计费对图片密集请求低估严重 | OPEN, in-progress | ⚠️ 暂无 |
| [#10736](https://github.com/zeroclaw-labs/zeroclaw/issues/10736) | 流式失败跳过 advertised 非流式 fallback | OPEN, in-progress | ⚠️ 暂无 |
| [#10889](https://github.com/zeroclaw-labs/zeroclaw/issues/10889) | 消息以图片块结尾时，Anthropic 滚动缓存断点丢失 | OPEN, accepted | ⚠️ 暂无 |
| [#10887](https://github.com/zeroclaw-labs/zeroclaw/issues/10887) | 非视觉模型遇到 marker-shaped 文本即失败整个 turn | OPEN, accepted | ⚠️ 暂无 |
| [#10883](https://github.com/zeroclaw-labs/zeroclaw/issues/10883) | Telegram media-group 监听在并行 CI 下超时 | OPEN, accepted | ⚠️ 暂无 |
| [#9882](https://github.com/zeroclaw-labs/zeroclaw/issues/9882) | `run_model_query` 直派接缝绕过图片内容校验 | OPEN, in-progress | ⚠️ 暂无 |

### 🛡️ 安全相关（已修复 PR）
| PR | 内容 |
|---|---|
| [#10480](https://github.com/zeroclaw-labs/zeroclaw/pull/10480) | 拒绝图片请求时一次性恢复（仅丢弃新图片）|
| [#10259](https://github.com/zeroclaw-labs/zeroclaw/pull/10259) | RPC 上强制 native+peercred 主体认证（XL） |
| [#10746](https://github.com/zeroclaw-labs/zeroclaw/pull/10746) | 插件安装时 load-verify 并给出可操作的 egress 拒绝说明 |

**整体判断**：Anthropic 多模态相关 bug 形成集中爆发（#10885/#10888/#10889/#10887），建议下一版本单独切一个 bugfix patch；CI 性能 PR #10874/#10896 今日双双打开，对 GitHub-hosted runner 紧缺问题直接缓解。

---

## 6. 功能请求与路线图信号

| 信号强度 | 提案 | 关联 PR/Issue | 落地概率评估 |
|---|---|---|---|
| 🟢 强 | `web_research` 子代理委托工具 | [#9833](https://github.com/zeroclaw-labs/zeroclaw/pull/9833) | 高，已是 XL PR，进入 maintainer review |
| 🟢 强 | Web 上传任何文件（RPC parity） | [#10583](https://github.com/zeroclaw-labs/zeroclaw/pull/10583) | 高，PR 形态已就位 |
| 🟢 强 | 持久会话 prompt attachments | [#10407](https://github.com/zeroclaw-labs/zeroclaw/pull/10407) | 中高，needs-author-action |
| 🟢 强 | RPC 主体认证（OIDC + peercred） | [#10259](https://github.com/zeroclaw-labs/zeroclaw/pull/10259), [#10255](https://github.com/zeroclaw-labs/zeroclaw/pull/10255) | 高，#10259 stacked |
| 🟡 中 | Anthropic OAuth stored profile | [#9420](https://github.com/zeroclaw-labs/zeroclaw/pull/9420) | 中，trusted contributor + needs-author-action |
| 🟡 中 | WhatsApp 出站 Markdown 渲染 | [#10475](https://github.com/zeroclaw-labs/zeroclaw/pull/10475) | 中，needs-author-action |
| 🟡 中 | 执行树迭代预算 | [#10351](https://github.com/zeroclaw-labs/zeroclaw/pull/10351) | 中，needs-maintainer-review |
| 🟡 中 | provider profile 语义保留 | [#10172](https://github.com/zeroclaw-labs/zeroclaw/pull/10172) | 中，依赖已合并 |
| 🟡 中 | Zerocode SOP 重命名/解锁只读 | [#10527](https://github.com/zeroclaw-labs/zeroclaw/pull/10527) | 中，stacked PR |
| 🟡 中 | `stream_mode` 默认改 partial | [#10166](https://github.com/zeroclaw-labs/zeroclaw/issues/10166) | 中，行为变化需评估 |
| 🔵 观察 | A2A outbound client (A2ATool) | [#9106](https://github.com/zeroclaw-labs/zeroclaw/issues/9106) | RFC 已 accepted，等待实现 |
| 🔵 观察 | 统一 package/catalog 契约 | [#9346](https://github.com/zeroclaw-labs/zeroclaw/issues/9346) | RFC，已 accepted |
| 🔵 观察 | Computer-use 桌面交互 | [#6909](https://github.com/zeroclaw-labs/zeroclaw/issues/6909) | RFC Rev.2，安全边界讨论中 |
| 🔵 观察 | OCI 兼容的插件注册表 | [#7497](https://github.com/zeroclaw-labs/zeroclaw/issues/7497) | RFC，blocked |
| 🔵 观察 | 能力门控的 WASI 硬件 host function | [#8187](https://github.com/zeroclaw-labs/zeroclaw/issues/8187) | RFC，no-stale |
| 🔵 观察 | 原生 XMPP/Prosody channel | [#9814](https://github.com/zeroclaw-labs/zeroclaw/issues/9814) | RFC，社区驱动型 |

---

## 7. 用户反馈摘要

从 Issues 评论与描述中提炼的真实痛点：

- **🧱 多 agent 内存共享粒度不足**：#8983 反映出"all-or-nothing per agent"的 `read_memory_from` 机制阻挡了多 agent 协作中"摘要者 agent 只读共享、上下文 agent 只读工具结果"这类常规模式。
- **🖼️ 多模态一致性与缓存命中率**：用户实测反映 Anthropic 流中图片块结尾会丢掉 `cache_control` 滚动断点（#10889），以及同 turn 内不相关工具调用会让图片消失（#10885），直接影响长会话 token 成本。
- **📡 WhatsApp 集成断点**：WhatsApp 改用 passkey/SHORTCAKE 配对门后，原生 `whatsapp-web` 模式彻底无法完成设备绑定（#8627），社区强烈依赖该 channel 做私域自动化，短期内需要替代 bridge 方案。
- **🧪 CI 抖动与并行测试不稳定**：#10272（Hailo 日志）和 #10883（Telegram media-group）均反映默认并行目标在 CI 下有非确定性失败；社区对"测试套件本机绿 CI 红"的问题反应明显。
- **🔒 ZeroCode/ACP 状态可见性差**：#10659 指出长 turn 超预算后 session 恢复看不到已完成的工作，是用户对"我刚刚花了 token 跑出来的内容为什么没了

</details>

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*