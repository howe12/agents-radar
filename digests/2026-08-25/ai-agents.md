# OpenClaw 生态日报 2026-08-25

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-08-25 00:54 UTC

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

# OpenClaw 项目动态日报 · 2026-08-25

> 数据范围：2026-08-24 ~ 2026-08-25（过去 24 小时）
> 数据来源：[openclaw/openclaw](https://github.com/openclaw/openclaw)

---

## 1. 今日速览

OpenClaw 仓库过去 24 小时内呈现 **极高活跃度**：500 条 Issue 更新（新开/活跃 475，关闭 25）和 500 条 PR 更新（待合并 422，合并/关闭 78），并伴随 **v2026.8.1-beta.3** 版本的发布。健康度信号：**活跃度极高但关闭率偏低**——Issues 关闭占比仅 5%，PR 关闭占比 15.6%，反映当前正处于 beta 阶段的大规模回归暴露期。讨论主题高度集中在 **消息投递丢失（message-loss）**、**多 Agent 路由（session-state）**、**认证/Provider 配置（auth-provider）** 三大类别，Issue 标签中 "🦞 diamond lobster"（P1 严重）级占比超过 40%，项目处于 beta 验证关键节点。

---

## 2. 版本发布

### v2026.8.1-beta.3 — 2026-08-25

本次发布的 **Highlights**（官方说明）：

- **GPT-5.6 系列全档推理支持**：Sol、Terra、Luna、Ultra 四个推理档位已贯通 OpenClaw 与 Codex runtime。
- **Control UI 首次运行流程扩展**：验证后的模型设置现可顺接进入 Custodian，并可选进入 channel 设置。
- **Puppeteer 兼容的 CDP relay 支持**：允许已配对 Chrome 会话通过 CDP 中继接入。
- **Explicit ext…**（摘要被截断，建议查阅 [Release Notes 完整条目](https://github.com/openclaw/openclaw/releases/tag/v2026.8.1-beta.3)）

**已知风险**：
- 与之关联的发布验证 Issue [#125626](https://github.com/openclaw/openclaw/issues/125626)（18 条评论）仍处于 OPEN 状态，且 Issue [#128889](https://github.com/openclaw/openclaw/issues/128889) 在该 beta 上确认了 **Windows Session Host worker bundle 哈希校验失败**的回归问题（Unix mode bits 差异导致）。
- 上一版本 beta.2 的现场报告 [#128067](https://github.com/openclaw/openclaw/issues/128067) 总结了 6 类可靠性缺陷，建议升级前对照评估。

**迁移建议**：使用 `agents.ownership: "explicit"` 配置的用户需关注 [#126360](https://github.com/openclaw/openclaw/issues/126360)（AgentSelectionRequiredError）；GitHub Enterprise Cloud (`*.ghe.com`) 租户需关注 [#127287](https://github.com/openclaw/openclaw/issues/127287)（Copilot Integration-Id 兼容性）。

---

## 3. 项目进展

### 今日已合并/关闭的代表性 PR

| PR | 标题 | 影响面 | 链接 |
|---|---|---|---|
| [#128371](https://github.com/openclaw/openclaw/pull/128371) | `fix(release)`：authorize focused beta evidence | 解锁 beta.3 发布阻塞 | [链接](https://github.com/openclaw/openclaw/pull/128371) |
| [#126424](https://github.com/openclaw/openclaw/pull/126424) | `fix(gateway)`：keep conversation delivery within agent bindings | 多 Agent 对话投递 | [链接](https://github.com/openclaw/openclaw/pull/126424) |
| [#125471](https://github.com/openclaw/openclaw/pull/125471) | `fix(models)`：keep Claude CLI OAuth available in Control UI | 认证链路 | [链接](https://github.com/openclaw/openclaw/pull/125471) |
| [#128937](https://github.com/openclaw/openclaw/pull/128937) | `fix`：restore GitHub tools in managed Codex sessions | Codex harness | [链接](https://github.com/openclaw/openclaw/pull/128937) |
| [#123975](https://github.com/openclaw/openclaw/pull/123975) | `fix(scripts)`：clean up tsgo process trees on timeout | 构建稳定性 | [链接](https://github.com/openclaw/openclaw/pull/123975) |
| [#120900](https://github.com/openclaw/openclaw/pull/120900) | `feat(ui)`：review install policy warnings | 安全策略 | [链接](https://github.com/openclaw/openclaw/pull/120900) |
| [#116489](https://github.com/openclaw/openclaw/pull/116489) | `feat(security)`：require acknowledgement for install policy warnings | 安全边界 | [链接](https://github.com/openclaw/openclaw/pull/116489) |
| [#126082](https://github.com/openclaw/openclaw/pull/126082) | Audit exact-bound owner-native lifecycle receipts | 多 Agent 接收方审计 | [链接](https://github.com/openclaw/openclaw/pull/126082) |

### 进入待合并但尚未就绪的高优先级 PR

- [#122425](https://github.com/openclaw/openclaw/pull/122425) `fix(ui)`：支持普通草稿内嵌 slash 命令与 skills（UI 体验修复）
- [#122846](https://github.com/openclaw/openclaw/pull/122846) `agent-core`：每响应工具调用块上限 `maxCallsPerBlock`（防止 loopback 关联缓冲溢出）
- [#118157](https://github.com/openclaw/openclaw/pull/118157) `fix(channels)`：bundled channels 接受 `mediaMaxMb` 覆写
- [#128904](https://github.com/openclaw/openclaw/pull/128904) `fix(config)`：channel schema ownership 遵循 `preferOver`
- [#128732](https://github.com/openclaw/openclaw/pull/128732) `fix(agents)`：保留合法 CLI 会话绑定（已 "ready for maintainer look"）
- [#128608](https://github.com/openclaw/openclaw/pull/128608) `fix`：`/models` 在无关配置变更后失效（已附 screenshot 证据）
- [#128882](https://github.com/openclaw/openclaw/pull/128882) `fix(deepseek)`：DSML 工具调用被当作文本投递
- [#128886](https://github.com/openclaw/openclaw/pull/128886) `fix(code-mode)`：后台 shell `sessionId` 死锁
- [#128903](https://github.com/openclaw/openclaw/pull/128903) `fix(slack)`：拒绝会话外文件下载
- [#128940](https://github.com/openclaw/openclaw/pull/128940) `fix`：诊断 gateway 启动堆耗尽（增量诊断）
- [#128289](https://github.com/openclaw/openclaw/pull/128289) `[codex]`：Browser Session Credential Steward MVP 修复（🔒 安全边界）

**整体进度评估**：今日合并/关闭 PR 主要聚焦 **会话绑定恢复、模型鉴权链路、安全策略显式化、Codex 集成** 四大方向；消息投递与 channel schema 的修复仍在等证据阶段（`📣 needs proof`），预计需 1-2 个迭代周期才能进入下一稳定版。

---

## 4. 社区热点

### 高讨论度 Issue（按评论数）

| Issue | 评论数 | 主题 | 链接 |
|---|---|---|---|
| [#125626](https://github.com/openclaw/openclaw/issues/125626) | 18 | **v2026.8.1-beta.2 发布验证**（维护者标签，发行阻塞） | [链接](https://github.com/openclaw/openclaw/issues/125626) |
| [#67777](https://github.com/openclaw/openclaw/issues/67777) | 12 | Subagent 完成投递丢失（直接 announce 超时 / drain / orphan prune） | [链接](https://github.com/openclaw/openclaw/issues/67777) |
| [#97616](https://github.com/openclaw/openclaw/issues/97616) | 9 | hook/tool 子进程未被回收 → 僵尸累积 | [链接](https://github.com/openclaw/openclaw/issues/97616) |
| [#6757](https://github.com/openclaw/openclaw/issues/6757) | 8 | **Agent 自主触发上下文压缩**（self-compact 工具） | [链接](https://github.com/openclaw/openclaw/issues/6757) |
| [#97680](https://github.com/openclaw/openclaw/issues/97680) | 8 | Beta 标签升级后官方插件仍停留在 latest | [链接](https://github.com/openclaw/openclaw/issues/97680) |
| [#77202](https://github.com/openclaw/openclaw/issues/77202) | 7 | Signal 频道：工具进度可见性 | [链接](https://github.com/openclaw/openclaw/issues/77202) |
| [#126360](https://github.com/openclaw/openclaw/issues/126360) | 7 | `AgentSelectionRequiredError` 在 explicit 多 Agent 下泛滥 | [链接](https://github.com/openclaw/openclaw/issues/126360) |
| [#45508](https://github.com/openclaw/openclaw/issues/45508) | 7 | webchat 自托管 STT/TTS Provider | [链接](https://github.com/openclaw/openclaw/issues/45508) |
| [#114020](https://github.com/openclaw/openclaw/issues/114020) | 7 | Feishu/Telegram 频道 dispatch 失败 | [链接](https://github.com/openclaw/openclaw/issues/114020) |
| [#49259](https://github.com/openclaw/openclaw/issues/49259) | 7 | Dashboard 中清理陈旧孤立会话 | [链接](https://github.com/openclaw/openclaw/issues/49259) |

### 社区诉求分析

1. **发布质量与回归控制**：发布验证类与 beta 残留缺陷占据榜首，反映社区对 **正式 GA 节奏** 的迫切需求。
2. **多 Agent 体系可靠性**：Subagent 完成投递丢失、AgentSelectionRequiredError、dispatch 失败三者指向同一根因——**多 Agent 边界下的生命周期与回执语义**尚不完整（[#76247](https://github.com/openclaw/openclaw/issues/76247) 提议统一 ACK/telemetry 收口）。
3. **多渠道一致性**：Signal、Feishu、Telegram、Discord、QQBot 各自暴露出独立缺陷，社区呼吁 **channel-plugin 一致的 schema 与交付语义**。
4. **自主 Agent 体验**：self-compact、pace-aware rate limiting、context fallback 等增强请求背后是 **Agent 长跑自治** 的真实使用场景。

---

## 5. Bug 与稳定性

### 🔴 P0（最高优先级）

| Issue | 描述 | Fix PR | 链接 |
|---|---|---|---|
| [#108520](https://github.com/openclaw/openclaw/issues/108520) | iOS app 自动更新后 **Talk Mode 与聊天完全失能**（🚨 URGENT） | 无 | [链接](https://github.com/openclaw/openclaw/issues/108520) |
| [#107707](https://github.com/openclaw/openclaw/issues/107707) | Skill Workshop `apply` **将 SKILL.md 覆盖为 proposal 文本**（数据丢失） | 无 | [链接](https://github.com/openclaw/openclaw/issues/107707) |
| [#128289](https://github.com/openclaw/openclaw/pull/128289) | [codex] Browser Session Credential Steward MVP 安全边界修复 | 同号 PR 待合并 | [链接](https://github.com/openclaw/openclaw/pull/128289) |

### 🟠 P1（严重，含 fix PR 的已标注）

| Issue | 描述 | 影响 | Fix PR | 链接 |
|---|---|---|---|---|
| [#67777](https://github.com/openclaw/openclaw/issues/67777) | Subagent 完成投递丢失 | message-loss + session-state | 无 | [链接](https://github.com/openclaw/openclaw/issues/67777) |
| [#97616](https://github.com

---

## 横向生态对比

# AI 智能体与个人 AI 助手开源生态横向对比分析报告

**报告日期**：2026-08-25
**数据周期**：2026-08-24 ~ 2026-08-25
**覆盖项目**：13 个（OpenClaw、NanoBot、Hermes Agent、PicoClaw、NanoClaw、NullClaw、IronClaw、LobsterAI、TinyClaw、Moltis、CoPaw、ZeptoClaw、ZeroClaw）

---

## 1. 生态全景

2026-08-25 当日，AI 智能体/个人 AI 助手开源生态呈现 **"头部高强度迭代、腰部稳定收尾、尾部静默"** 的三层分化格局：OpenClaw 以 500+ Issue/PR 更新和 beta.3 发布保持绝对头部活跃度，Moltis 与 NanoClaw 借版本发布与新通道集成占据第二梯队，IronClaw、Hermes Agent、NanoBot、ZeroClaw 则处于"密集修 bug 但未发布"的质量巩固期；同时 LobsterAI、PicoClaw、NullClaw、ZeptoClaw、TinyClaw 等项目活跃度持续走低，反映出 **生态正从"百花齐放"过渡到"集中收敛"阶段**。技术焦点高度集中在 **多 Agent 生命周期语义、OAuth Provider 矩阵扩张、Channel-Plugin 一致性、Skills/Plugin 生态健康度** 四个跨项目共性议题上，揭示出 AI Agent 正在从"单点工具"走向"生产级协议层"。

---

## 2. 各项目活跃度对比

| 项目 | Issues（开/关） | PRs（待/合） | 版本发布 | 综合活跃度 | 健康度信号 |
|---|---|---|---|---|---|
| **OpenClaw** | 475 / 25 | 422 / 78 | ✅ v2026.8.1-beta.3 | 🔴 极高 | 关闭率偏低（5%/15.6%），beta 回归暴露期 |
| **IronClaw** | 24 / 9 | 18 / 17 | ❌ | 🟢 高 | 修复闭环率高，CI 加速工程进入落地 |
| **Hermes Agent** | 48 / 2 | 39 / 11 | ❌ | 🟢 高 | 零发布与高修复密度不匹配，Desktop 体验仍为痛点 |
| **NanoBot** | 8 / — | 14 / 12 | ❌ | 🟢 中高 | 7+ PR 当日闭环，"小版本级"实质推进 |
| **ZeroClaw** | 43 / 7 | 40 / 5 | ❌ | 🟡 中 | 架构 RFC + 安全硬化并行，无版本动作 |
| **NanoClaw** | 1 / 1 | 18 / 3 | ✅ v2.3.0 | 🟡 中 | v2.3.0 重大变更，但评审积压严重（18 OPEN / 0 评论）|
| **Moltis** | 0 / 2 | 3 / 16 | ✅ 20260824.01 | 🟡 中 | Bug 修复闭环率 100%，发布节奏健康 |
| **LobsterAI** | 0 / 3 | 1 / 10 | ❌ | 🟡 中 | 单日 10 PR 合入但无发版，社区侧静默 |
| **PicoClaw** | 2 / 0 | 1 / 2 | ❌ | ⚪ 偏低 | 2 个长期 PR 集中关闭，疑似 backlog 清理 |
| **ZeptoClaw** | 1 / 0 | 0 / 0 | ❌ | ⚪ 低 | 单 Issue 高质量但无 PR 响应 |
| **NullClaw** | 2 / 0 | 1 / 0 | ❌ | ⚪ 低 | Dependabot PR 积压 71 天，2 个新 Issue 无人响应 |
| **TinyClaw** | 0 / 0 | 0 / 0 | ❌ | ⚫ 无活动 | 24 小时完全静默 |
| **CoPaw** | — | — | — | ⚫ 无数据 | 本周期未提供数据 |

> **关键观察**：当日仅有 **3 个项目发布版本**（OpenClaw、NanoClaw、Moltis），占样本 23%；但贡献了 78% 的总 PR 合并量，**版本发布与代码活跃度高度正相关**。

---

## 3. OpenClaw 在生态中的定位

### 优势对比

| 维度 | OpenClaw | 最接近的竞品 | 差距 |
|---|---|---|---|
| **Issue 活跃度** | 500/日 | IronClaw 24/日 | 20× 量级 |
| **PR 吞吐量** | 500/日 | Hermes Agent 50/日 | 10× 量级 |
| **版本节奏** | beta.3 当日发布 | NanoClaw v2.3.0 | 持平 |
| **多 Agent 抽象** | 完整（ownership/routing/session-state）| Hermes（弱）、NanoBot（弱） | 显著领先 |
| **Channel 矩阵** | Signal/Feishu/Telegram/Discord/QQBot/Slack | NanoClaw（Slack/Mattermost/Dial） | OpenClaw 更广 |
| **P0/P1 严重度比例** | > 40% P1 | Hermes ~25% P1 | 暴露面更广 |

### 技术路线差异

- **OpenClaw** 走 **"重型平台 + 多 Agent + Channel-Plugin + 显式 ownership"** 路线，强调生产级生命周期与回执语义（[#76247](https://github.com/openclaw/openclaw/issues/76247) 提议统一 ACK/telemetry 收口）。
- **NanoBot** 走 **"轻量可观测 + 零 Token 触发 + SQLite 优先"** 路线（[#5508](https://github.com/HKUDS/nanobot/pull/5508)），更适合个人本地化部署。
- **Hermes Agent** 走 **"Desktop-first + Skills 生态"** 路线，但 Desktop 体验仍是 Issue 集中爆发区。
- **IronClaw** 走 **"CI 工程化 + LLM 提示前缀缓存 + WebUI 设计系统统一"** 路线，**底层基础设施投入最重**（[#7001](https://github.com/nearai/ironclaw/pull/7001) 字节级稳定缓存）。
- **ZeroClaw** 走 **"协议化（OpenAI Chat Completions 兼容）+ 安全硬化"** 路线，是生态扩张诉求最强的项目（[#8603](https://github.com/zeroclaw-labs/zeroclaw/issues/8603) 24 条评论）。

### 社区规模对比

OpenClaw 在 Issue/PR 总量上是第二名 IronClaw 的 **10-20 倍**，且维持了 beta 验证所需的临界反馈密度；Hermes Agent 在讨论深度上紧追（[#66616](https://github.com/nousresearch/hermes-agent/issues/66616) 91 条评论仍是生态内单 Issue 历史峰值之一）。

---

## 4. 共同关注的技术方向

### 方向 A：多 Agent 生命周期与回执语义
- **OpenClaw** [#67777](https://github.com/openclaw/openclaw/issues/67777)（投递丢失）、[#126360](https://github.com/openclaw/openclaw/issues/126360)（AgentSelectionRequiredError）、[#76247](https://github.com/openclaw/openclaw/issues/76247)（统一 ACK 提案）
- **Hermes Agent** [#85125](https://github.com/nousresearch/hermes-agent/issues/85125)（统一 deadline 层 RFC，影响 400+ 工单）
- **NanoBot** [#5291](https://github.com/HKUDS/nanobot/pull/5291)（子 Agent 过程 transcript 丢失）

### 方向 B：OAuth/Provider 矩阵扩张
- **Moltis** [#1240](https://github.com/moltis-org/moltis/pull/1240) — 新增 xAI Grok Subscription OAuth（RFC 8628 device-code）
- **OpenClaw** [#125471](https://github.com/openclaw/openclaw/pull/125471) — Claude CLI OAuth 在 Control UI 保留
- **NanoBot** [#5350](https://github.com/HKUDS/nanobot/issues/5350) — QwenCloud 向后兼容 provider 路径
- **ZeroClaw** [#8603](https://github.com/zeroclaw-labs/zeroclaw/issues/8603) — 兼容 OpenAI Chat Completions 协议（生态扩张）

### 方向 C：Channel-Plugin 一致性与 Slack/IM 集成
- **OpenClaw** [#114020](https://github.com/openclaw/openclaw/issues/114020)（Feishu/Telegram dispatch）、[#77202](https://github.com/openclaw/openclaw/issues/77202)（Signal 进度可见性）
- **NanoClaw** v2.3.0 全新 Slack 体验（agent 独立配置）、[#3396](https://github.com/nanocoai/nanoclaw/pull/3396) 模板化创建
- **Moltis** [#1238](https://github.com/moltis-org/moltis/pull/1238) Slack 共享频道工具策略
- **LobsterAI** [#2523](https://github.com/netease-youdao/LobsterAI/pull/2523) IM 图标、[#2525](https://github.com/netease-youdao/LobsterAI/pull/2525) 登录引导

### 方向 D：Skills/Plugin 生态健康度
- **Hermes Agent** [#66616](https://github.com/nousresearch/hermes-agent/issues/66616)（91 条评论，索引 stale 29.8h）、[#25833](https://github.com/nousresearch/hermes-agent/issues/25833)（自创建 skill 正确性）
- **OpenClaw** [#6757](https://github.com/openclaw/openclaw/issues/6757)（self-compact 工具）、[#97680](https://github.com/openclaw/openclaw/issues/97680)（beta 升级后官方插件卡 latest）
- **LobsterAI** [#1195](https://github.com/netease-youdao/LobsterAI/issues/1195)（自建 skill 不可见）

### 方向 E：底层性能与存储优化
- **NanoBot** [#5480](https://github.com/HKUDS/nanobot/pull/5480) + [#5481](https://github.com/HKUDS/nanobot/pull/5481)（类型化 LLM 使用契约）
- **LobsterAI** [#1193](https://github.com/netease-youdao/LobsterAI/pull/1193)（SQLite 写放大消除）
- **IronClaw** [#7001](https://github.com/nearai/ironclaw/pull/7001)（LLM 提示前缀缓存稳定）

---

## 5. 差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 技术架构关键差异 |
|---|---|---|---|
| **OpenClaw** | 多 Agent 协作、Channel 矩阵、生产级可靠性 | 企业/团队级 Agent 部署 | explicit ownership、session-state、P1 严重度闭环 |
| **NanoBot** | 轻量可观测、零 Token 事件触发 | 个人开发者、研究者 | SQLite FTS5、本地优先、usage observer |
| **Hermes Agent** | Desktop 应用、Skills 生态 | 桌面端重度用户 | Electron + Skills Hub + 协议文档站 |
| **IronClaw** | CI 工程化、LLM 缓存、WebUI 设计系统 | 大型团队/企业 | setup-rust composite、字节级前缀缓存 |
| **NanoClaw** | Slack 体验、macOS 路径、多 Runtime | Slack 重度团队 | Apple Container microVM、Mattermost/Dial 适配 |
| **Moltis** | OAuth Provider 矩阵、cron/heartbeat、Browser/Sandbox | 多订阅用户（Coder/Grok） | RFC 8628 device-code、Browserless v2、Obscura stealth |
| **ZeroClaw** | OpenAI 协议兼容、安全硬化、可观测性 | 协议兼容优先的部署者 | Chat Completions profile、delegate 风险隔离 |
| **LobsterAI** | 跨平台缩略图、文件库、SQLite 性能 | 文档/媒体密集型用户 | 16:9 统一缩略图、debounce+batch 写入 |
| **PicoClaw** | TUI、WebUI（路线中） | 极简 CLI 用户 | Go 实现、低资源占用 |
| **NullClaw** | 自托管 Firecrawl、配对流程 | 自部署极客 | Zig 实现、最小依赖 |
| **ZeptoClaw** | REPL/CLI UX 硬化 | CLI 交互用户 | 长会话信号安全处理 |

> **关键差异点**：OpenClaw 是 **唯一在多 Agent + Channel + 安全 + Skills 四个轴同时

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目日报 · 2026-08-25

## 1. 今日速览

NanoBot 在过去 24 小时呈现 **高强度、多线并进** 的开发节奏：8 条新 Issue 集中提交，26 个 PR 更新（14 待合并 / 12 已关闭）。**当日有 7+ 个 PR 完成闭环**，涵盖使用观测重构、会话搜索性能、零 Token 事件触发、Agent 超时保护等关键方向，项目整体处于**功能扩展与稳定性加固并重的活跃期**，社区贡献者也表现出明显的"提案-实现"快速闭环特征（如 yrxeva 同日提交 4 个 Issue 并同步落地 2 个对应 PR）。无版本发布。

---

## 2. 版本发布

无新版本发布。当日合并的改动属于重构/特性合入，预计将在下次 Release 中以小版本形式发布（具体版本号待定）。

---

## 3. 项目进展

当日有 **7 个可见的高价值 PR 已关闭**，整体推动 NanoBot 向"更可观测、更省 Token、更可靠"的方向演进：

| PR | 主题 | 影响 |
|---|---|---|
| [#5480](https://github.com/HKUDS/nanobot/pull/5480) | refactor(providers): 定义类型化 LLM 使用契约 | **基础设施级重构**，统一 OpenAI Chat / Responses / Anthropic / Bedrock 的 token 与缓存语义，替换原先动态 dict |
| [#5481](https://github.com/HKUDS/nanobot/pull/5481) | feat(usage): 统一 provider usage 后端 | 在 #5480 之上落地面向后端观测的统一 usage 记录，是原生栈 #5482 的关键一环 |
| [#5507](https://github.com/HKUDS/nanobot/pull/5507) | feat(session): SQLite FTS5 会话全文检索 | **显著性能改进**，对积累会话提供近实时全文检索，含安全回退机制 |
| [#5508](https://github.com/HKUDS/nanobot/pull/5508) | feat(gateway): 零 Token 条件触发运行时 | **降本关键特性**，让事件驱动任务不再消耗 LLM turn，仅命中条件时才唤醒模型 |
| [#5496](https://github.com/HKUDS/nanobot/pull/5496) | fix(agent): 对无工具请求加超时 | 修复 stuck 的 no-tools 请求占用会话 slot 的回归，提升 wall-clock 保护 |
| [#5506](https://github.com/HKUDS/nanobot/pull/5506) | fix(agent): 尊重所选项目工作区 | 修复 WebUI 选定项目未真正生效的"伪修复"问题，确保 system prompt 与工作区对齐 |
| [#5517](https://github.com/HKUDS/nanobot/pull/5517) | test(exec): 移除 Windows 进程时序竞态 | 用 root-exit / child-ready 握手替换超时前提，CI 稳定性提升 |

> 注：另有 5 个已关闭 PR 未在摘要中展示。

**整体评价**：今日合并内容已覆盖观测、检索、性能、成本、可靠性 5 大维度，可视为一次"小版本级"的实质推进。

---

## 4. 社区热点

**讨论热度**：

- [#5350](https://github.com/HKUDS/nanobot/issues/5350) —— *QwenCloud 向后兼容 provider 路径提案*（2 条评论，作者：evelyn-jialin-zhang）。当前 DashScope 路径仍被广泛使用，提案要求新加一条不破坏现有配置的国际版 QwenCloud 路径，**反映跨区域/多 Provider 用户对兼容性的强诉求**。

**当日关注度高的新提案**（按议题重要性）：

- [#5516](https://github.com/HKUDS/nanobot/issues/5516) —— Telegram 富文本与流式互斥问题，作者 flobo3 提出利用 Bot API 10.1–10.3 drafts 解决；
- [#5505](https://github.com/HKUDS/nanobot/issues/5505) —— **AnySearch 团队主动请缨**，希望成为 NanoBot `web_search` 工具的可选 provider（key-optional + 匿名配额），属于外部集成信号。

---

## 5. Bug 与稳定性

按严重程度排序（**P0 影响核心交互 → P2 影响局部行为**）：

| 等级 | Issue / PR | 描述 | 状态 |
|---|---|---|---|
| 🔴 高 | [#5512](https://github.com/HKUDS/nanobot/issues/5512) | Gateway 重启后 WebUI 永久卡在 spinning，`goal_status: idle` 不下发 | ✅ 已有 Fix PR：[#5514](https://github.com/HKUDS/nanobot/pull/5514)（OPEN，Oxygen56）|
| 🟠 中高 | [#5516](https://github.com/HKUDS/nanobot/issues/5516) | Telegram `rich_messages: true` 与 `streaming: true` 互斥，富文本永远走 HTML 旧路径 | ⏳ 仅提案，无 PR |
| 🟠 中高 | [#5344](https://github.com/HKUDS/nanobot/pull/5344) | Agent 在重复相同工具调用时无循环检测，烧光 `max_iterations` | ✅ Fix PR OPEN（albatrossflyon-coder）|
| 🟡 中 | [#5515](https://github.com/HKUDS/nanobot/pull/5515) | `SendSessionMessageTool` 投递超时的后台任务失败被静默丢弃 | ✅ Fix PR OPEN（pengpengyi92）|
| 🟡 中 | [#5518](https://github.com/HKUDS/nanobot/pull/5518) | 流式 provider 时序仅在统一 usage observer 之后填充，丢首 attempt 数据 | ✅ Fix PR OPEN（chengyongru）|
| 🟡 中 | [#5291](https://github.com/HKUDS/nanobot/pull/5291) | 子 Agent 结束只保留最终公告，过程 transcript 完全丢失 | ⏳ PR OPEN（SomSamantray，~17 天）|
| 🟢 低 | [#5349](https://github.com/HKUDS/nanobot/pull/5349) | 时区差异导致 settings 测试在每天 ~5 小时窗口失败 | ✅ Fix PR OPEN |

当日已闭环的可靠性修复：**#5496（无工具请求超时）**、**#5517（Windows 进程竞态）**、**#5506（项目工作区绑定）**。

---

## 6. 功能请求与路线图信号

当日提交的特性方向高度集中，且 **多处 Issue 已同步配套 PR**（典型 Issue→PR 闭环），可纳入下一版本候选清单：

| 提案 | 配套 PR | 进入下一版本概率 |
|---|---|---|
| [#5509](https://github.com/HKUDS/nanobot/issues/5509) 会话 FTS5 检索 | [#5507](https://github.com/HKUDS/nanobot/pull/5507) ✅ 已关闭 | **极高**（已合入）|
| [#5510](https://github.com/HKUDS/nanobot/issues/5510)

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目日报
**日期：2026-08-25**

---

## 1. 今日速览

Hermes Agent 仓库在过去 24 小时呈现**高强度维护活跃度**：50 条 Issue 更新（48 仍开放、2 关闭）与 50 条 PR 更新（39 待合并、11 已合并/关闭），但**零版本发布**——这意味着大量改动仍处在评审与积压通道。讨论焦点集中在四个方向：技能索引与 skills 生态的健康度、Desktop（Electron）应用的稳定性、跨平台的安装/更新路径安全，以及一个追踪"超时/卡死"问题的架构级 RFC（#85125）。整体看，项目处于"密集修 bug + 推 Desktop 体验"的阶段，**没有新版本意味着用户当前仍暴露在已报告的若干 P1 问题中**。

---

## 2. 版本发布

**今日无新版本发布。**

最新已发布版本仍为此前线路（v0.20.4 / v0.20.5 出现在多个 Bug 报告中），今日所有 PR 尚未进入可发布状态。建议关注者留意 [Hermes Agent Releases](https://github.com/nousresearch/hermes-agent/releases) 以获取下一波修复版本。

---

## 3. 项目进展

今日共 **11 个 PR 关闭/合并**，可识别的实质性进展包括：

| PR | 方向 | 影响 |
|---|---|---|
| [#48069](https://github.com/nousresearch/hermes-agent/pull/48069) 合并 | MCP stdio keepalive 与孤儿调用清理 | 关闭了"MCP 单次调用可阻塞 agent 长达 `tool_timeout`"的高危故障模式 |
| [#94318](https://github.com/nousresearch/hermes-agent/pull/94318) 关闭 | 新增 `skill-sync` skill（基于 SSH/Tailscale） | 拓展技能可移植性，但因流程/作用域争议被关闭，需重构 |

其余已合并 PR 多为小型重构或 docs 类。整体而言，**功能演进以"止血式"修复为主**：MCP 时序竞争、安装更新路径、Windows Git Bash 探测、TUI 编辑器草稿保留、cron 失败 end_reason 标注等都进入了主分支，但 Desktop 大规模 a11y（[#93836](https://github.com/nousresearch/hermes-agent/pull/93836)、[#93838](https://github.com/nousresearch/hermes-agent/pull/93838)）与 Bot Mode session 隔离（[#93580](https://github.com/nousresearch/hermes-agent/pull/93580)）仍待合并。

**进度评价：中等**——修复密度高，但缺乏面向用户可见的"重磅功能"落地。

---

## 4. 社区热点

按评论数排序的热点讨论：

1. **[#66616](https://github.com/nousresearch/hermes-agent/issues/66616)（91 条评论，仍 OPEN）** —— Skills 索引 stale/degraded，自动巡检脚本持续告警（29.8h 旧，限值 26h）。这是仓库中讨论最久、热度最高的工单，反映出 skills 生态的"自动重建 + 文档站消费"链路脆弱。
2. **[#85125](https://github.com/nousresearch/hermes-agent/issues/85125)（20 条评论，仍 OPEN）** —— Tracking Issue：统一 deadline 层（4 阶段架构修复）。社区 triage #84047 已将 77 个标题匹配的 runtime stall 收敛到 7 类机制。这是一个"上层 RFC"，把 400+ timeout/hang 工单压成可一次性解决的根因。
3. **[#25833](https://github.com/nousresearch/hermes-agent/issues/25833)（10 条评论）** —— 自创建 skill 的"机制级正确性保证"缺失。
4. **[#5114](https://github.com/nousresearch/hermes-agent/issues/5114)（7 条评论）** —— Autoresearch skill：自主 git-based 实验回路。
5. **[#93888](https://github.com/nousresearch/hermes-agent/issues/93888)（7 条评论）** —— Desktop 发送 8 字符 runtime ID 给 Remote Gateway 后无法恢复会话。
6. **[#7895](https://github.com/nousresearch/hermes-agent/issues/7895)（4 条评论，👍3）** —— OpenWebUI 集成下 Hermes 不发送生成的图片，是少数获得正向点赞的社区工单。

**背后诉求**：用户强烈希望技能生态（#66616、#25833、#5114）与 Desktop 体验（#93888、#90229、#92818、#91245）能"端到端稳定"，并希望 OpenWebUI 等外部前端集成能补齐协议层缺口。

---

## 5. Bug 与稳定性

按严重程度排序的今日新增/活跃 Bug：

### P1（阻塞/数据安全/崩溃）
- **[#92145](https://github.com/nousresearch/hermes-agent/issues/92145)** — `hermes update` 自动重启阶段触发 ImportError 时会让运行中的服务停留在 stale `sys.modules`。✅ 已有 [#94287](https://github.com/nousresearch/hermes-agent/pull/94287) 修复 PR（拒绝不安全 stash 恢复）。
- **[#94248](https://github.com/nousresearch/hermes-agent/issues/94248)** — macOS arm64 上 Gateway 在 delegate deadline 后 17-72ms 内 SIGSEGV（涉及 Codex SSL read）。✅ 已有 [#94313](https://github.com/nousresearch/hermes-agent/pull/94313) 修复 PR（延迟硬关闭）。
- **[#94264](https://github.com/nousresearch/hermes-agent/issues/94264)** — `hermes update` 恢复含语法错误的本地 Python 后报告"成功"，导致远程 lockout。✅ 已有 [#94287](https://github.com/nousresearch/hermes-agent/pull/94287) 间接覆盖。
- **[#94258](https://github.com/nousresearch/hermes-agent/issues/94258)** — Session transcript 写入时 SQLite `SystemError` 未被重试路径处理。⚠️ 标记为 duplicate，根因可能被其他 PR 吸收。
- **[#94305](https://github.com/nousresearch/hermes-agent/pull/94305)**（PR） — 卡住的 foreground `terminal` 等待会关闭整个 asyncio 计时器，导致 420s / 600s 监控失效。✅ 已有修复 PR（自身）。

### P2（功能受损/数据风险）
- **[#93888](https://github.com/nousresearch/hermes-agent/issues/93888)** — Desktop ↔ Remote Gateway runtime ID 不匹配，无法恢复会话。
- **[#90229](https://github.com/nousresearch/hermes-agent/issues/90229)** / **[#91245](https://github.com/nousresearch/hermes-agent/issues/91245)** — Desktop 右侧文件树卡在 skeleton（Windows 11）。
- **[#92818](https://github.com/nousresearch/hermes-agent/issues/92818)** — 桌面布局跨重启不稳定，缺乏 per-profile 布局。
- **[#93981](https://github.com/nousresearch/hermes-agent/issues/93981)** — 非 loopback `dashboard.public_url` 触发 Desktop WS 鉴权失败。
- **[#92701](https://github.com/nousresearch/hermes-agent/issues/92701)**（CLOSED） — Docker backend 中未消毒的 `task_id` 导致 exit 125。
- **[#56337](https://github.com/nousresearch/hermes-agent/issues/56337)** — Telegram `/cmd@Bot args` 被错误剥离为未知命令。
- **[#94058](https://github.com/nousresearch/hermes-agent/issues/94058)** — Linux venv symlink 触发 `.desktop` Exec 路径断裂。
- **[#94304](https://github.com/nousresearch/hermes-agent/issues/94304)** — `hermes acp` 在 Windows 下 terminal `init_session` 永不返回。
- **[#94001](https://github.com/nousresearch/hermes-agent/issues/94001)** — Desktop 状态栏 context 用量在压缩后过期、跨 session 污染。

### P3 / P4（功能性/边界）
- **[#59499](https://github.com/nousresearch/hermes-agent/issues/59499)**（CLOSED，已落地 main）— Kanban dispatcher 忽略 `max_in_progress_per_profile`。
- **[#93648](https://github.com/nousresearch/hermes-agent/issues/93648)** — Slack 流式输出每轮重复发消息。
- **[#94254](https://github.com/nousresearch/hermes-agent/issues/94254)** — Email channel 关闭后重启仍自动启用。
- **[#94308](https://github.com/nousresearch/hermes-agent/issues/94308)** — Desktop Bot Mode 把内部 sentinel "(empty)" 作为真实消息广播。
- **[#82654](https://github.com/nousresearch/hermes-agent/issues/82654)**（blocked） — Wayland (niri) 全局热键不可用，错误信息误导。

**结论**：约 60% 的 P1/P2 Bug 已有关联修复 PR 或 PR 中已包含修复，社区修复速度较快；但 Desktop 体验类问题（文件树、会话恢复、布局）**尚未在主分支获得根治性修复**。

---

## 6. 功能请求与路线图信号

具有较高落地可能性的功能请求：

- **[#5114 Autoresearch skill](https://github.com/nousresearch/hermes-agent/issues/5114)** — 用户希望 agent 在 ML 研究中自动 git track 实验改进。配套 RFC 与社区兴趣度都较好，**有较大概率纳入下个版本**。
- **[#94251 plan-then-approve mode](https://github.com/nousresearch/hermes-agent/issues/94251)**（duplicate） — "动手前先给计划"，与 Reasonix 类似工作流。社区已在 #94251 反映 `/plan` 仍非内建。
- **[#92885 Desktop preview 独立 color scheme](https://github.com/nousresearch/hermes-agent/issues/92885)** — 用户希望 preview webview 独立于系统 dark mode。
- **[#90654 in-app browser 元素选择器 + agent 页面操作](https://github.com/nousresearch/hermes-agent/issues/90654)** — 闭环"用户指哪儿，agent 就能动哪儿"，利用现有 seams。
- **[#90654 / #94028 / #94322 per-profile passcode lock](https://github.com/nousresearch/hermes-agent/pull/94322)** — Desktop 已开 PR，**近期可落地**。
- **[#94321 Photon iMessage tapback 工具](https://github.com/nousresearch/hermes-agent/pull/94321)** — 已开 PR，opt-in。

**架构级信号**：[#85125 统一 deadline 层](https://github.com/nousresearch/hermes-agent/issues/85125) 是最大体量的 RFC，若落地将从根本上消除 timeout/hang 类 backlog，是项目长期健康的关键。

---

## 7. 用户反馈摘要

从活跃 Issue 评论中提炼的真实痛点：

- **"自动重建失效导致文档站与 API 错位"**（#66616）—— 运维/开发者普遍感受到 Skills Hub 文档与 index.json 不同步的尴尬。
- **"Desktop 启动后文件树永远 loading"**（#90229、#91245）—— Windows 11 用户首屏体验反复栽在 tree skeleton；社区评论出现"我以为是我的网络问题"的自我归因。
- **"`hermes update` 之后 agent 转不了"**（#92145、#94264）—— 远程用户尤其敏感：更新后 gateway 重启但 agent turn 全失败，造成 Telegram/Discord 用户失联。
- **"OpenWebUI 看不到图片"**（#7895）—— 唯一拿到 👍 的工单，反映 OpenAI 兼容协议层的实际需求。
- **"Slack 流式重复发送"**（#93648）—— 用户用词克制："I disabled streaming" 而非 "this is broken"，体现成熟用户对功能降级的容忍。
- **"macOS arm64 反复 SIGSEGV"**（#94248）—— 12 份 native crash 报告，作者明示"生产环境不可接受"。

**满意侧**：Bot Mode session 隔离（[#93580](https://github.com/nousresearch/hermes-agent/pull/93580)）等 PR 收到积极社区 review，说明维护者响应及时。

---

## 8. 待处理积压

建议维护者优先关注的"长期未响应"重要 Issue/PR：

- **[#66616](https://github.com/nousresearch/hermes-agent/issues/66616)** — Skills 索引 watchdog 已 degraded 29.8h+，91 条评论，自动告警仍在失败。**已事实上成为社区 symbol**，需明确 owner。
- **[#25833](https://github.com/nousresearch/hermes-agent/issues/25833)** — 自创建 skill 的机制级正确性，10 条评论但尚未有 RFC 草稿。
- **[#85125](https://github.com/nousresearch/hermes-agent/issues/85125)** — 4 阶段统一 deadline 层 RFC，影响 400+ 工单，需要 maintainer 决策。
- **[#82654](https://github.com/nousresearch/hermes-agent/issues/82654)** — Wayland Quick Entry 热键（blocked），用户已明确报告误导性 'taken' 错误。
- **[#94251](https://github.com/nousresearch/hermes-agent/issues/94251)** — 内建 plan-then-approve 模式（duplicate），社区需求明确但尚未并入路线图讨论。
- **[#7895](https://github.com/nousresearch/hermes-agent/issues/7895)** — OpenWebUI 图片发送问题已存在较长时间，是少数有 👍 的工单，沉默不利于社区信心。
- **[#94258](https://github.com/nousresearch/hermes-agent/issues/94258)** — SQLite SystemError 重试 duplicate 标记，但根因仍未在主分支被显式覆盖。

---

### 📊 项目健康度评估

| 维度 | 评分 | 说明 |
|---|---|---|
| 维护活跃度 | ⭐⭐⭐⭐⭐ | 100 条 Issue/PR 更新，节奏极高 |
| 修复响应速度 | ⭐⭐⭐⭐ | P1 大多有对应修复 PR |
| 发布节奏 | ⭐⭐ | 24 小时 0 release，与修复密度不匹配 |
| 架构健康度 | ⭐⭐⭐ | RFC #85125 是关键拐点，尚未推进 |
| 社区沟通 | ⭐⭐⭐⭐ | 长尾工单仍能被定期更新，但 #66616 等长期未根治 |
| Desktop 体验 | ⭐⭐ | 仍是 Issue 集中爆发区 |

**总体判断**：项目处于"密集迭代但缺少发布节点"的阶段。建议维护者尽快聚合当前 P1 修复（#92145、#94248、#94264、#94305、#94258）发布 patch 版本，以兑现对社区的修复承诺。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报

**日期**：2026-08-25
**数据周期**：过去 24 小时（截至 2026-08-25）
**项目主页**：[github.com/sipeed/picoclaw](https://github.com/sipeed/picoclaw)

---

## 1. 今日速览

PicoClaw 过去 24 小时整体活跃度处于**中等偏低**水平：Issue 端仅有 2 条动态且无任何关闭，PR 端有 3 条更新（其中 2 条已关闭、1 条仍待处理），无新版本发布。最值得关注的进展是 PR #1929（Web 配置安全凭证校验修复）和 PR #1551（合并三个修复 PR）均已关闭，叠加 Issue #3338（Slack 媒体上传失败）仍处于 stale 状态未获响应，整体反映出项目当前在社区反馈响应节奏上有放缓迹象，但代码侧 bug 修复仍在稳步推进。

---

## 2. 版本发布

**今日无新版本发布。** 建议关注 Issue #806 中 WebUI 重构工作的进展，这可能与未来版本规划相关。

---

## 3. 项目进展

### 已关闭 PR

#### ✅ PR #1929 — 修复 Web 配置保存时的安全凭证校验顺序（已关闭）
- **链接**：[sipeed/picoclaw PR #1929](https://github.com/sipeed/picoclaw/pull/1929)
- **作者**：KristjanKruusRIA | 创建于 2026-03-23，2026-08-24 更新后关闭
- **领域**：bug / config / go
- **说明**：原 PR 旨在修复 Web 启动器 `PUT/PATCH /api/config` 在 `.security.yml` 已正确存储 token 的情况下，仍因 `validateConfig()` 先于安全凭证加载而抛出 `channels.pico.token is required` 错误的回归问题。
- **健康度提示**：该 PR 自 3 月创建以来长达 5 个月无实质互动（👍=0）后被关闭，可能为维护者主动关闭（stale 或已被其他方案替代），需在仓库中确认此修复是否已被其他 PR 落地。

#### ✅ PR #1551 — 合并 PR #1428 / #1422 / #1417 的修复（已关闭）
- **链接**：[sipeed/picoclaw PR #1551](https://github.com/sipeed/picoclaw/pull/1551)
- **作者**：xuwei-xy | 创建于 2026-03-14，2026-08-24 关闭
- **说明**：作为合并提交 PR，集中吸收了三个上游修复。👍=0、长期低互动后被关闭，提示该项目历史上长期处于 PR 积压状态。

### 待处理 PR

#### ⏳ PR #3299 — 新增原生 Exa Web 搜索 Provider（[stale]，待处理）
- **链接**：[sipeed/picoclaw PR #3299](https://github.com/sipeed/picoclaw/pull/3299)
- **作者**：kesku | 创建于 2026-07-26
- **说明**：将 Exa 作为原生 `tools.web` / `web_search` provider 接入，支持 `POST /search` 的 `type:"auto"` 模式与 `contents.highlights` 高亮，鉴权走 `X-Api-Key`，时间范围过滤（d/w/m/y）通过 `startPublishedDate` 实现，配置项与现有 provider 保持一致。
- **健康度提示**：已 30 天无评论且被打上 [stale] 标签，如维护者未在窗口期内回应，可能被机器人自动关闭，建议作者补充截图/单元测试以推动合并。

**项目整体推进评估**：今日净增 0 个有效合并 PR（两个关闭 PR 是否包含真实合并尚需确认），功能扩展侧增长有限，项目处于"维护性更新"节奏。

---

## 4. 社区热点

### 🔥 讨论最活跃 Issue

#### #806 — Feature: Add WebUI support (Refactoring now)
- **链接**：[sipeed/picoclaw Issue #806](https://github.com/sipeed/picoclaw/issues/806)
- **作者**：Zepan | 创建于 2026-02-26，2026-08-24 更新
- **互动数据**：💬 10 条评论 | 👍 8 次
- **优先级**：high / 路线图级
- **诉求分析**：提案为非技术用户构建基于浏览器的 WebUI 入口，与现有 TUI 形成互补，是项目面向"零门槛用户"扩张的核心诉求。10 条评论与 8 个 👍 表明社区关注度持续走高，标题"Refactoring now"暗示维护者已在推进该方向。**这是今日最值得跟踪的社区共识性需求。**

### 次活跃

#### #3338 — Slack 不附带图片媒体内容（[stale]）
- **链接**：[sipeed/picoclaw Issue #3338](https://github.com/sipeed/picoclaw/issues/3338)
- **互动数据**：💬 1 条评论 | 👍 0 次
- **现状**：已打 [stale] 标签，存在被自动关闭的风险。

---

## 5. Bug 与稳定性

### 🐛 已报告 Bug 清单（按严重程度排序）

| 优先级 | Issue | 标题 | 状态 | 是否有修复 PR |
|---|---|---|---|---|
| **中** | [#3338](https://github.com/sipeed/picoclaw/issues/3338) | Slack 不附带图片媒体内容（`file.upload.v2: file size cannot be 0`） | [OPEN] [stale] | ❌ 暂无 |
| **低** | [#1929 关联](https://github.com/sipeed/picoclaw/pull/1929) | Web 配置保存时未先应用安全凭证导致校验失败 | 已关闭，需确认是否合并 | ⚠️ PR 已关闭，状态待核实 |

**详情说明**：

- **#3338**：定位为 Slack 通道的媒体上传回归。`SendMedia` 在构造 `slack.UploadFileParameters` 时遗漏 `FileSize` 字段，导致 slack-go SDK 在任何网络调用前即拒绝请求。受影响版本为 picoclaw 0.3.x。**无 fix PR**，社区响应为零，处于 stale 风险中。
- **#1929**：反映 Pico 通道 token 校验时机错误的根因——`validateConfig()` 在安全管理层加载私有字段前先行执行。PR 关闭后建议维护者在 commit log 或 release notes 中确认该修复是否已被采纳，避免重复报告。

**稳定性整体评估**：今日未报告新的崩溃或严重回归，Slack 媒体上传是当前唯一活跃的稳定性隐患。

---

## 6. 功能请求与路线图信号

### 明确的功能诉求

1. **WebUI（#806）** — 已被维护者标记为 "Refactoring now"，意味着很可能纳入下一个里程碑。建议追踪与之相关的子任务（如 Issue/PR #1417/#1422/#1428 的合并情况）。
2. **Exa 搜索 Provider（PR #3299）** — 属于"原生工具扩展"类需求，与现有 web 搜索架构契合度高。如维护者认可该设计，可低成本合并，丰富 `tools.web` provider 矩阵。

### 推断的路线图信号

- 多个长期未动的 PR（#3299、#1929、#1551）在同一天（2026-08-24）集中更新/关闭，可能与维护者阶段性清理 backlog 相关，或预示下一次版本发布前的代码冻结。

---

## 7. 用户反馈摘要

### 痛点

- **非技术用户门槛高**：Issue #806 中明确表达 TUI 对"非技术用户"不够友好，希望有 WebUI 来降低使用门槛，是当前最强烈的社区共识。
- **Slack 通道媒体上传完全失效**：Issue #3338 反映用户在使用 Slack 通道时无法附带图片，影响实际业务沟通场景（如客服、内容分发），且无后续响应。
- **Web 配置保存体验差**：PR #1929 揭示用户即便已在 `.security.yml` 配置正确 token，Web UI 仍报错，对首次使用者极不友好。

### 满意 / 中性反馈

- Issue #806 的 8 个 👍 与 10 条评论显示社区对 WebUI 路线整体持支持态度，无反对声音。
- PR #3299 设计方案完整（鉴权、时间范围、配置项均有覆盖），说明贡献者质量较高，社区贡献文化处于健康状态。

---

## 8. 待处理积压提醒

以下条目长期未获维护者实质响应，**建议优先处理**：

| 类型 | 编号 | 标题 | 创建时间 | 现状 |
|---|---|---|---|---|
| Feature | [#806](https://github.com/sipeed/picoclaw/issues/806) | Add WebUI support | 2026-02-26 | 高优先级路线图项，已 6 个月，需明确里程碑 |
| Bug | [#3338](https://github.com/sipeed/picoclaw/issues/3338) | Slack 媒体上传失败 | 2026-08-17 | [stale] 状态，无 fix PR |
| PR | [#3299](https://github.com/sipeed/picoclaw/pull/3299) | Add native Exa web search provider | 2026-07-26 | [stale] 状态，无 review |
| PR | [#1929](https://github.com/sipeed/picoclaw/pull/1929) | fix security credentials before validation | 2026-03-23 | 已关闭，需确认是否已合并 |
| PR | [#1551](https://github.com/sipeed/picoclaw/pull/1551) | merge #1428 #1422 #1417 | 2026-03-14 | 已关闭，需确认合并内容是否已纳入主线 |

**维护者建议**：建议在 stale-bot 自动关闭前，对 #3299 与 #3338 给出明确反馈或直接评审；对 PR #1929 与 #1551 的关闭原因在仓库中留痕，避免贡献者重复劳动。

---

## 健康度小结

| 维度 | 评级 | 说明 |
|---|---|---|
| 代码合并节奏 | ⚠️ 中 | 今日 2 个 PR 关闭但 merge 状态待确认 |
| Issue 响应速度 | ⚠️ 偏低 | 1 个 Bug Issue 进入 stale 状态 |
| 社区参与度 | ✅ 良好 | WebUI 议题获得 8 👍 / 10 评论 |
| 版本发布节奏 | ⚠️ 待观察 | 今日无新版本，需关注下一发布窗口 |
| 贡献者质量 | ✅ 高 | Exa PR 设计完整、修复 PR 根因分析清晰 |

**总体判断**：PicoClaw 当前处于"维护期"，功能扩展节奏放缓但核心代码质量与社区贡献意愿仍然健康。下一步关键观察点是 WebUI 重构何时落地首个可用版本。

---

*本日报基于 PicoClaw GitHub 公开数据自动生成，仅供参考。*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报

**报告日期**：2026-08-25
**数据周期**：过去 24 小时
**仓库**：[nanocoai/nanoclaw](https://github.com/nanocoai/nanoclaw)

---

## 一、今日速览

NanoClaw 在过去 24 小时内呈现出**高活跃度但偏积压**的状态：共收到 21 条 PR（18 条待合并）、2 条 Issue（1 开 1 关），并发布了 v2.3.0 大版本。PR 提交量明显高于日常均值（约 5–8 条），主要驱动力来自 Slack 新体验的清理落地、macOS 升级路径修正，以及 Mattermost / Dial / Apple Container 等新通道与运行时的并行铺开。维护者侧需重点关注 PR 评审吞吐量与新开放 Issue #3497（better-sqlite3 13 在 macOS 上的崩溃）。

---

## 二、版本发布

### v2.3.0（重大变更，需人工确认）

- **关键变更**：**全新的 Slack 体验**——按 agent 独立配置的 Slack Apps、可从 Slack 内直接生成 agent、UX 升级。详细公告：[Release v2.3.0](https://github.com/qwibitai/nanoclaw/releases/tag/v2.3.0)
- **破坏性变更标注**：`[BREAKING]` 标记，但**并非强制迁移**：经典单 Bot 安装可继续正常运行；新版仅对全新安装以及非 Slack 集成路径触发决策提示。
- **迁移建议**：
  - **现存 Slack 单 Bot 用户**：无需立即操作，可保持经典模式。
  - **新安装 / 非 Slack 场景**：安装器会引导选择新的"按 agent 配置"模式，请提前为每个 agent 准备独立的 Slack App 凭据。
  - **企业用户**：在升级前评估多 App 架构对 OAuth 管理、配额、审计的影响。

---

## 三、项目进展（今日合并/关闭）

| 编号 | 标题 | 类别 | 影响 |
|---|---|---|---|
| [#2474](https://github.com/nanocoai/nanoclaw/pull/2474) | setup: AI-coding-CLI picker（Claude Code / Codex 选择） | Feature | 关闭 | setup 阶段可让用户选择 Claude Code 或 Codex 执行失败步骤交接与无头工具任务，为后续 Aider/Gemini-CLI 等适配器留位。 |
| [#2475](https://github.com/nanocoai/nanoclaw/pull/2475) | codex: 为 codex agent 暴露技能 + persona（与 Claude 对齐） | Feature | 关闭 | 让 Codex agent 看到与 Claude Code 一致的 persona 与技能目录，跨 provider 切换变成纯配置变更。 |
| [#2767](https://github.com/nanocoai/nanoclaw/issues/2767) | Telegram: legacy-Markdown sanitizer 被 `@chat-adapter/telegram@4.30.0` 原生 MarkdownV2 取代 | Cleanup | 关闭（Issue） | 删除 channels 分支上的遗留 sanitize 适配层，依赖上游升级。 |

**整体进度**：3 项收尾动作整体偏"清理 + 对齐"，将 Codex 拉齐到与 Claude 同等的安装/能力体验，释放了此前因为 SDK 限制而搁置的功能。新功能实质性推进主要靠这 21 条待合并 PR 推动（见下文）。

---

## 四、社区热点

按当前数据，评论数最多的是 **#2767**（1 条评论，已关闭）。从议题热度看，今日更像是"集中提交日"而非"集中讨论日"，但有几条 PR 在工程意义上承担关键节点，值得社区关注：

- [#3508](https://github.com/nanocoai/nanoclaw/pull/3508) — **durable host-coordination state（核心基础设施）**：解决进程内协调状态在重启后丢失、毒消息在崩溃循环中无限重试、"rebuild applied"后停止/重启意图丢失等问题。这是 v2.3.0 之后项目能否走向生产可用的关键补丁之一。
- [#3506](https://github.com/nanocoai/nanoclaw/pull/3506) — **macOS 更新事务控制器修复**：6 处真实命中 macOS 安装的缺陷，对 macOS 用户体感影响显著。
- [#3396](https://github.com/nanocoai/nanoclaw/pull/3396) 与 [#3428](https://github.com/nanocoai/nanoclaw/pull/3428) — **Slack 模板化 agent 创建**：与 v2.3.0 新 Slack 体验直接呼应，端到端把 `template` ref 串起来。

**诉求分析**：社区当前关注点集中在三条主线——**Slack 新体验的工程收尾、macOS 安装/更新路径的健壮性、跨 provider（Codex ↔ Claude）的能力对等**。

---

## 五、Bug 与稳定性

按严重程度排列：

1. **🔴 严重（安装即坏）— [#3497](https://github.com/nanocoai/nanoclaw/issues/3497) better-sqlite3@13 在 macOS 上 `new Database()` 段错误**
   - 影响：Node 22 < 22.14.0 的 macOS 安装全部受影响，安装可用性检查 `>=22` 不会拦截，`pnpm test` 无法完成，整库数据库层失效。
   - 是否已有 fix PR：**暂未见**。建议维护者尽快在 setup 中加 Node 版本下限至 22.14.0，或锁定 better-sqlite3 版本。

2. **🟠 高（升级流程）— [#3506](https://github.com/nanocoai/nanoclaw/pull/3506) macOS 上 `/update-nanoclaw` 事务控制器缺陷（6 处）**
   - 影响：macOS 主机升级流程正确性。**已附 PR，待合并**。

3. **🟡 中（功能路径）— [#3505](https://github.com/nanocoai/nanoclaw/pull/3505) 附件未走所选邮箱挂载点**
   - 影响：选错 mailbox mount 时附件错位。**已附 PR，待合并**。

4. **🟡 中（更新路径）— [#3499](https://github.com/nanocoai/nanoclaw/pull/3499) 更新控制器未解析符号链接**
   - 影响：通过软链接安装的仓库更新行为异常。**已附 PR，待合并**。

5. **🟢 低（OneCLI 网关）— [#3302](https://github.com/nanocoai/nanoclaw/pull/3302) OneCLI 默认网关绑定地址错误（#2903）**
   - 影响：docker bridge 地址 `10.0.0.1:10254` 写入 `.env` 但网关容器侧未对齐绑定。**已附 PR，待合并**。

---

## 六、功能请求与路线图信号

今日提交的功能/工程类 PR 数量极高，呈现出明确的路线图意图：

| 方向 | PR 链接 | 状态 |
|---|---|---|
| Slack 新体验 + 模板化创建 | [#3396](https://github.com/nanocoai/nanoclaw/pull/3396)、[#3428](https://github.com/nanocoai/nanoclaw/pull/3428) | 待合并 |
| Apple Container 运行时（macOS microVMs） | [#3503](https://github.com/nanocoai/nanoclaw/pull/3503) | 待合并 |
| Mattermost 通道（适配器 + 安装技能） | [#3502](https://github.com/nanocoai/nanoclaw/pull/3502)、[#3507](https://github.com/nanocoai/nanoclaw/pull/3507) | 待合并 |
| Dial 通道文档与 changelog | [#3501](https://github.com/nanocoai/nanoclaw/pull/3501)、[#3432](https://github.com/nanocoai/nanoclaw/pull/3432) | 待合并 |
| 跨 provider 技能/合约对齐 | [#2337](https://github.com/nanocoai/nanoclaw/pull/2337)、[#2361](https://github.com/nanocoai/nanoclaw/pull/2361) | 待合并 |
| MindsHub provider 文档与安装技能 | [#3493](https://github.com/nanocoai/nanoclaw/pull/3493) | 待合并 |
| 主机协调状态的持久化（基础设施） | [#3508](https://github.com/nanocoai/nanoclaw/pull/3508) | 待合并 |

**路线图判断**：下一版本（v2.4 或 v2.3.x 补丁）大概率会合并 Slack 模板化（#3396/#3428）+ 持久化协调（#3508）+ macOS 更新修复（#3506/#3499）+ better-sqlite3 Node 版本下限修复（#3497）这一组。Apple Container 与 Mattermost 由于变动较大，更可能落在 v2.4 或更晚版本。

---

## 七、用户反馈摘要

今日 Issues/PR 评论量较低，主要信号集中在提交意图本身：

- **安装可用性痛点**（#3497）：用户在 macOS 上安装后才发现 better-sqlite3 13 与 Node 22.x 不兼容，setup 检查未拦截——反映安装前环境校验覆盖面不足，是真实用户"装不上就跑不起来"的硬伤。
- **遗留适配器过剩**（#2767）：channels 分支上的 legacy sanitize 适配层现在变成纯历史负担，社区更愿意依赖上游 `@chat-adapter/telegram@4.30.0` 原生 MarkdownV2 处理——表明用户对**依赖上游而非自维护补丁**的偏好增强。
- **macOS 用户被忽视感**（#3506 描述）：作者明确指出"每个缺陷都是在真实 macOS 安装中命中的"——意味着 macOS 长期是测试薄弱面，社区渴望补齐。
- **跨 provider 平权期待**（#2474/#2475/#2337/#2361）：用户希望 Claude 与 Codex 不存在能力落差，切换应当是配置而非内容改写。

---

## 八、待处理积压与提醒

> ⚠️ **本节列出对维护者最值得优先关注的事项。**

1. **🆘 立即响应 — [#3497](https://github.com/nanocoai/nanoclaw/issues/3497)** better-sqlite3 13 macOS 段错误，新开即阻塞安装。**建议在 24 小时内**通过提升 Node 最低版本至 22.14.0 或回退 better-sqlite3 版本修复。

2. **⏱️ 评审积压** — **18 条 PR 处于 OPEN 状态，0 条评论**。这是非常不健康的信号：维护者响应延迟会迅速抑制贡献者积极性。建议按优先级分组评审：
   - **第一梯队（本周内合并）**：#3506、#3499、#3505、#3302、#3497（fix PR）
   - **第二梯队（功能合并）**：#3396、#3428、#3501、#3432
   - **第三梯队（基础设施/重构）**：#3508、#3503、#3502、#3507

3. **🧹 疑似低质 PR — [#3504](https://github.com/nanocoai/nanoclaw/pull/3504)** "Reconcile Lease Manager, Maintenance Coordinator/Trello, Away Mode, and Lowe's materials from local history"
   - 提交人 [Exclusiveicon](https://github.com/Exclusiveicon)，将 7 个本地未推送的功能分支一次性合并进新分支重建，提交记录混杂（包含 Lease Manager、Trello、Away Mode、Lowe's materials 等明显非 NanoClaw 核心域的内容）。**强烈建议维护者审慎 review**，与项目主线偏离较大，存在被识别为仓库污染或 spam 的风险，必要时应关闭并要求拆分。

4. **🐢 长期挂起** — [#2361](https://github.com/nanocoai/nanoclaw/pull/2361)（2026-05-09 创建，已挂 3 个多月）与 [#2337](https://github.com/nanocoai/nanoclaw/pull/2337)（2026-05-07 创建）。两 PR 都是跨 provider 能力对齐的关键改动，与已合并的 #2474/#2475 同源，但仍在待审，请维护者明确反馈方向。

---

**日报小结**：v2.3.0 把 Slack 体验与多 provider 路线同时推上台面，是 NanoClaw 从"多通道集成"走向"多 provider + 多运行时"的关键里程碑。接下来一周的执行重点应是 **修安装期 bug（#3497）+ 消化评审积压 + 评审 #3508 持久化基础设施**，这三件事若能闭环，v2.4 的发布节奏将非常稳健。

---

*本报告基于 2026-08-24 至 2026-08-25 期间的公开 GitHub 数据自动生成。所有链接指向 nanocoai/nanoclaw 仓库公开页面。*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目日报
**日期：2026-08-25**
**数据来源：GitHub (nullclaw/nullclaw)**

---

## 1. 今日速览

NullClaw 今日活跃度处于**低位**水平。过去 24 小时内仅有 2 条新 Issue 提交和 1 条依赖更新 PR，无版本发布、无 PR 合并、无 Issue 关闭。社区互动几乎为零（所有 Issue 和 PR 的评论数均为 0），表明当前项目处于一个相对平静的阶段。值得关注的是，存在一个积压超过 2 个月的 Dependabot 依赖更新 PR（#956）尚未处理，叠加一条因历史改动（#535）导致配对代码无法查看的 Bug 报告，暴露出**维护响应可能存在一定滞后**。整体来看，项目今日无重大推进，但也未出现负面信号，属于"低频维护期"。

---

## 2. 版本发布

**今日无新版本发布。**

---

## 3. 项目进展

今日**无任何 PR 合并或关闭**。代码层面的实质推进为零，主要进展停留在社区问题反馈与依赖更新提议阶段。

- 待合并的唯一 PR #956 为 Dependabot 自动发起的 Alpine Docker 基础镜像版本升级（3.23 → 3.24），目前已开放约 2 个月（自 2026-06-15），尚无维护者响应。
  👉 [nullclaw/nullclaw PR #956](https://github.com/nullclaw/nullclaw/pull/956)

---

## 4. 社区热点

由于今日所有新提交 Issue 的评论数与点赞数均为 0，**社区热度极低**，暂无明显讨论焦点。可关注的入口包括：

- 🔥 [#993 — make Firecrawl search endpoint configurable for self-hosted instances](https://github.com/nullclaw/nullclaw/issues/993)
  作者 Crymfox 提出希望支持自托管 Firecrawl 实例的端点配置，反映了**自部署用户群体对灵活性配置的真实诉求**。

- 🔥 [#992 — pairing code not visible / not on disk](https://github.com/nullclaw/nullclaw/issues/992)
  作者 heredos 因早期合并的 PR #535 移除了 stdout 输出，导致 6 位配对码仅存于内存，引发**新用户配置 Gateway API 时无从下手**的可用性问题。

---

## 5. Bug 与稳定性

### 🟠 中等严重程度

**[Bug] 配对码不可见，无法完成 Gateway API 配置** — [Issue #992](https://github.com/nullclaw/nullclaw/issues/992)
- **问题描述**：用户配置 Gateway API 时无法获取 6 位配对 token；由于 #535 移除了 stdout 日志输出，配对码仅存在于内存中。
- **影响范围**：影响所有尝试接入 Gateway API 的新用户，属于**配置可用性**问题而非系统崩溃。
- **修复状态**：⚠️ **暂无关联 fix PR**，建议维护者优先处理。

### 🟢 低严重程度 / 非阻塞

**[Enhancement] Firecrawl 搜索端点硬编码** — [Issue #993](https://github.com/nullclaw/nullclaw/issues/993)
- **问题描述**：`src/tools/web_search_providers/firecrawl.zig` 中 `https://api.firecrawl.dev/v1/search` 被硬编码，自托管 Firecrawl 用户无法使用原生 `search_provider: "firecrawl"` 配置。
- **影响范围**：仅影响自托管 Firecrawl 的用户群体。
- **修复状态**：⚠️ **暂无关联 PR**。

---

## 6. 功能请求与路线图信号

今日收到 1 条功能请求，方向明确，属于**可快速落地的小型重构**：

| 请求 | 类型 | 预计工作量 | 优先级建议 |
|------|------|-----------|-----------|
| [#993](https://github.com/nullclaw/nullclaw/issues/993) Firecrawl 端点可配置化 | Enhancement（配置项扩展） | 小（增加一个配置字段即可） | 中 |

**路线图信号分析**：
- 自托管 / 本地化部署的灵活性需求正在累积（自托管 Firecrawl、配对码用户体验），提示项目若希望扩展企业 / 自部署用户群，应在配置层和用户引导层投入更多精力。
- 当前唯一待合并 PR #956 是依赖更新，**无功能性新特性 PR 在流程中**，下个版本（若有）大概率仍以维护性更新为主。

---

## 7. 用户反馈摘要

由于所有 Issue 今日评论数均为 0，**缺乏社区讨论细节**。从两条 Issue 描述中可提炼出以下真实用户痛点：

- 😟 **新用户入门挫败感**（[#992](https://github.com/nullclaw/nullclaw/issues/992)）：
  > *"i've been confused about this issue for the past few days ... couldn't figure out how to get the 6-digit pairing token."*
  
  用户 heredos 明确表达"困惑了好几天"，反映出**配对流程文档或提示缺失**的问题。#535 的初衷可能是出于安全考虑（避免 token 泄露到日志），但未配套提供替代获取路径（如写盘或 CLI 命令），造成新用户"卡壳"。

- 🔧 **自部署用户的灵活性诉求**（[#993](https://github.com/nullclaw/nullclaw/issues/993)）：
  作者 Crymfox 主张将硬编码端点改造为可配置项，体现**开源项目用户对去 SaaS 化 / 去外部依赖**的偏好。

**满意度信号**：无明显满意度反馈；**不满点**集中在配置与引导层面。

---

## 8. 待处理积压 ⚠️

以下为维护者**应优先关注**的长期未响应条目：

| 编号 | 类型 | 标题 | 创建时间 | 开放时长 | 链接 |
|------|------|------|----------|----------|------|
| #956 | PR (dependabot) | ci(deps): bump alpine 3.23 → 3.24 | 2026-06-15 | **约 71 天** | [#956](https://github.com/nullclaw/nullclaw/pull/956) |
| #992 | Issue (bug) | pairing code 不可见 / 未写盘 | 2026-08-24 | 1 天（新） | [#992](https://github.com/nullclaw/nullclaw/issues/992) |
| #993 | Issue (enhancement) | Firecrawl endpoint 可配置化 | 2026-08-24 | 1 天（新） | [#993](https://github.com/nullclaw/nullclaw/issues/993) |

**特别提醒**：
- 🟥 **PR #956 已积压超 2 个月**：虽然是 Dependabot 自动化 PR，Alpine 基础镜像版本滞后可能带来**安全 CVE 累积风险**，建议尽快 review 并合并或关闭。
- 🟧 **Issue #992 涉及新用户体验**：若不及时响应，可能在 Issue 区累积更多类似求助帖。

---

## 📊 项目健康度总评

| 维度 | 评分 | 说明 |
|------|------|------|
| 代码活跃度 | ⭐⭐☆☆☆ | 无合并、无发布 |
| 社区互动 | ⭐☆☆☆☆ | 0 评论、0 点赞 |
| 维护响应速度 | ⭐⭐☆☆☆ | 关键依赖 PR 积压 71 天 |
| 问题处理及时性 | ⭐⭐⭐☆☆ | 新 Issue 均已记录待跟进 |
| 整体健康度 | ⭐☆☆☆ | **稳定但偏冷清**，建议维护者重启一轮 PR review 与用户反馈梳理 |

---

*报告生成时间：2026-08-25｜数据范围：过去 24 小时*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报
**日期：2026-08-25** | 数据来源：[github.com/nearai/ironclaw](https://github.com/nearai/ironclaw)

---

## 1. 今日速览

IronClaw 今日继续保持高强度的迭代节奏：**24 条 Issue 更新（关闭 9 条）+ 35 条 PR 更新（合并/关闭 17 条）**，且 17 条已关闭 PR 中包含多条 XL/XS 规模的 CI 重构、WebUI 优化与缓存性能改进，说明团队正在并行推进基础设施加固与用户体验修复两条主线。议题热度集中在 **Telegram 个人账号链接回路断链**（#7853、#7862、#7841）与 **Onboarding 建议流的端到端闭环**（#7815 + #7816 + #7857 + #7833）两条线；同时 **CI 加速工程**进入 T1/T2 落地阶段，多个 bisect/probe PR 已完成使命关闭。整体看，社区报告的 bug 与产品反馈 issue 数量明显增加（x-ai-product-feedback 标签新增 3 条），用户触达率持续上升。

---

## 2. 版本发布

无新版本发布。最近的版本仍为上一周期推出的 **v1.3.0**（参见 [Issue #7856](https://github.com/nearai/ironclaw/issues/7856) 中提到的部署版本）。从今日关闭的 PR 看（如 #7833 的"Onboarding 建议使用只读工具"），下一个版本（可能为 v1.4.0）的代码已基本就位，但尚未打 tag。

---

## 3. 项目进展（今日合并/关闭的重要 PR）

| PR | 主题 | 规模 | 影响 |
|---|---|---|---|
| [#7821](https://github.com/nearai/ironclaw/pull/7821) | ci: 单一 setup-rust composite（T1） | XL | 将 12 个 workflow 中散落的 43 处 `dtolnay/rust-toolchain` 收归一个 composite action，根治"本地绿 CI 红"的工具链漂移问题 |
| [#7794](https://github.com/nearai/ironclaw/pull/7794) | refactor(webui): 引入共享页面骨架与加载原语 | L | 统一 Automations/Extensions/Admin/Workspace/Settings 等路由的滚动、内边距与骨架屏样式 |
| [#7833](https://github.com/nearai/ironclaw/pull/7833) | feat(suggestions): 基于用户只读工具生成建议 | L | 关闭 [#7812](https://github.com/nearai/ironclaw/issues/7812)，让建议卡能基于用户实际连接的 Gmail 等数据生成（而非脱离上下文的内部 allowlist） |
| [#7001](https://github.com/nearai/ironclaw/pull/7001) | feat(loop): 缓存前缀字节级稳定 | XL | 关闭 [#6985](https://github.com/nearai/ironclaw/issues/6985)，消除"循环控制 nudge 插在 identity 之前、时间戳在 system block 中"对缓存前缀的扰动，提升推理缓存命中率 |
| [#7857](https://github.com/nearai/ironclaw/pull/7857) | fix(webui): 启动建议任务后刷新会话列表 | S | 修复 [#7845](https://github.com/nearai/ironclaw/issues/7845)——激活建议任务后左侧 CONVERSATIONS 列表无对应条目 |
| [#7854](https://github.com/nearai/ironclaw/pull/7854) | fix(webui): 移除 Gateway v2 登录眼眉 | S | 清理 11 个语言包中的 `login.tagline` 键，增加渲染回归测试与"已废弃 locale key"守卫 |
| [#7851](https://github.com/nearai/ironclaw/pull/7851) | Fix main branch CI failures 20260824 | — | 紧急修复 8/24 main 分支 CI 红，构建链回到绿色 |
| [#7852](https://github.com/nearai/ironclaw/pull/7852)、[#7858](https://github.com/nearai/ironclaw/pull/7858) | CI bisect/probe 探针 | XL | 一次性 PR，用于隔离 T1 复合动作引入的 E2E 失败与在 Windows 上预验证；已关闭弃用 |
| [#7257](https://github.com/nearai/ironclaw/pull/7257)、[#7255](https://github.com/nearai/ironclaw/pull/7255) | WebUI 设计系统 + APDD 治理评估 | XL | 两份纯文档提案，分别用于设计系统北星文档与治理框架评估 |

**整体推进评估**：项目在「CI 工程化 + WebUI 设计系统统一 + LLM 提示前缀缓存优化」三个底层能力上完成了实质性跃迁，属于"看不见但极关键"的基础设施升级；同时 Onboarding 流程闭环往前迈了一大步。

---

## 4. 社区热点

按评论数与关注度排序：

1. **[#7812](https://github.com/nearai/ironclaw/issues/7812)（3 条评论，已关闭）** — Onboarding 建议生成目前只持有内部搜索工具，无法触达用户真实数据。社区诉求是让建议"基于用户实际连接的内容"生成，并限制为只读。已被 [#7833](https://github.com/nearai/ironclaw/pull/7833) 实施关闭。
2. **[#7853](https://github.com/nearai/ironclaw/issues/7853)（2 条评论，仍 OPEN）** — Telegram 设置流程引导用户链接个人账号，但 agent 报告"没有可用工具"完成此步骤。是当日用户痛点最集中的问题。
3. **[#7798](https://github.com/nearai/ironclaw/issues/7798)（2 条评论，已关闭）** — CI 加速 T1（setup-rust composite）。由 [#7821](https://github.com/nearai/ironclaw/pull/7821) 落地。
4. **[#7297](https://github.com/nearai/ironclaw/issues/7297)（2 条评论，仍 OPEN，已挂 19 天）** — UI 错误消息累积不清理，每次新 prompt 后旧错误叠加。
5. **[#7742](https://github.com/nearai/ironclaw/issues/7742)（2 条评论，已关闭）** — Automations 创建的 preflight 边界与前置条件呈现。属于 v1.3.0 范畴的功能。

**诉求归纳**：用户与内部测试人员当下最关心两件事——**Onboarding 体验是否真的能基于个人数据**（建议生成要"懂我"）与 **多账号/多渠道（Telegram/Slack）设置是否能走通**。

---

## 5. Bug 与稳定性

| 严重度 | Issue | 描述 | 修复状态 |
|---|---|---|---|
| 🟠 中 | [#7853](https://github.com/nearai/ironclaw/issues/7853) | Telegram 设置可启动个人账号链接但无法完成 | 待修（[#7861](https://github.com/nearai/ironclaw/pull/7861) 正在修复 #7766 引起的指引丢失，但需要更彻底的方案） |
| 🟠 中 | [#7862](https://github.com/nearai/ironclaw/issues/7862) | 未配置 telegram_api_id/api_hash 时设备链接给出通用错误 | 待修 |
| 🟠 中 | [#7842](https://github.com/nearai/ironclaw/issues/7842) | 用户报告请求执行出现通用"invalid result"错误 | 待修（产品反馈转交） |
| 🟡 低 | [#7841](https://github.com/nearai/ironclaw/issues/7841) | Telegram 设置止于"管理员必须配置" | 待修 |
| 🟡 低 | [#7856](https://github.com/nearai/ironclaw/issues/7856) | MCP 工具发现静默跳过 camelCase 工具名 | 待修（1.3.0 部署上验证，影响托管式 HTTP/SSE MCP） |
| 🟡 低 | [#7840](https://github.com/nearai/ironclaw/issues/7840) | Slack 连接引导缺失 | 待修（产品反馈） |
| 🟢 已修 | [#7845](https://github.com/nearai/ironclaw/issues/7845) | 激活建议任务后左侧无条目 | ✅ [#7857](https://github.com/nearai/ironclaw/pull/7857) 已合并 |
| 🟢 已修 | [#7851](https://github.com/nearai/ironclaw/pull/7851) | main 分支 CI 失败 | ✅ 已合并 |

**积压风险点**：[#7297](https://github.com/nearai/ironclaw/issues/7297)（错误消息堆叠）已开 19 天未关闭，属于 UX 体验退化型 bug，建议优先处理。

---

## 6. 功能请求与路线图信号

| Issue | 主题 | 路线图位置 | 现状 |
|---|---|---|---|
| [#7815](https://github.com/nearai/ironclaw/issues/7815) | Onboarding 建议：累计净增量工作关闭 connect→suggest→thread 闭环 | M1-webui-product epic / v1.3.0 收尾 | OPEN；[#7816](https://github.com/nearai/ironclaw/pull/7816) 已提交前端 OOBE drawer 增量（refresh + connect 条目），闭环可见 |
| [#7849](https://github.com/nearai/ironclaw/issues/7849) | extensions: 捆绑 agent-first GSuite CLI | v1.4.0（**已显式标记**） | OPEN；属于 #6879 的子任务，是 Gmail 操作从原始 MIME/base64 抽象化的明确路线信号 |
| [#7825](https://github.com/nearai/ironclaw/issues/7825) | Sandbox egress auth：原生 iron-proxy 配方，退役 GitHub 特化路径 | v1.4.0 方向 | OPEN；[#7810](https://github.com/nearai/ironclaw/pull/7810) 已在路上 |
| [#7818](https://github.com/nearai/ironclaw/pull/7818) | feat(subagent): 后台模式（slice 2b+2c） | R2 后台子代理 | OPEN（XL，低风险）；为 [#7788](https://github.com/nearai/ironclaw/issues/7788) 注入"生产者侧"能力 |
| [#7456](https://github.com/nearai/ironclaw/pull/7456) | fix(reborn): 让持久化存储与 profile 解耦 | Reborn | OPEN（XL）；恢复持久化的租户/workspace 隔离一致性 |
| [#7850](https://github.com/nearai/ironclaw/pull/7850) | feat(automations): 暴露精确运行能力事实 | Automations | OPEN（XL）；[#7742](https://github.com/nearai/ironclaw/issues/7742) 后续 |
| [#7855](https://github.com/nearai/ironclaw/issues/7855) | 新增意大利语支持 | 本地化 | OPEN（小型）；近期同类型已多次出现，体现国际化诉求 |
| [#7516](https://github.com/nearai/ironclaw/pull/7516) | feat(webui): IronHub agent link 的运维面板 | 渠道/WebUI | OPEN（XL，新贡献者首次提交）；把 CLI 内的安装引导搬到 Extensions 页面 |
| [#7859](https://github.com/nearai/ironclaw/pull/7859) | docs: 把 Changelog 移到 navbar tab | 文档 | OPEN（小）；Mintlify 标准模式 |
| [#7860](https://github.com/nearai/ironclaw/issues/7860) | 拆分 `lifecycle_product_service.rs`（1,774 行） | 架构 | OPEN（中型重构）；按 `.claude/rules/architecture.md` 的行数上限要求拆 |

**v1.4.0 信号汇总**：[#7849](https://github.com/nearai/ironclaw/issues/7849) GSuite CLI、subagent 后台模式、R2 storage 解耦是已显式标记的下一版本候选；CI 加速（#7821 + #7817 + #7819 + #7809）的合并预计会落在近期版本。

---

## 7. 用户反馈摘要

来自 x-ai-product-feedback 标签（由 IronClaw 自动转发）：

- **Telegram 设置双重盲区**：用户既被引导"链接个人账号"，又走不通（#7853、#7841、#7862）；当 `telegram_api_id/api_hash` 未配置时，错误仅显示"Something went wrong"，缺少可执行的修复指引。**核心痛点：设置流程"半成功半失败"，没有明确回退或上下文**。
- **Slack 连接引导缺失**（#7840）：用户不知道下一步该去哪里配 Slack，提示文案与导航路径不衔接。
- **请求执行中的"invalid result"**（#7842）：错误过于通用，用户无法判断是输入、权限还是后端故障。
- **Onboarding 建议"接地气"的诉求**（#7812）：用户希望建议能反映

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目日报 · 2026-08-25

> 数据周期：2026-08-24 ~ 2026-08-25（基于 GitHub 公开数据）

---

## 1. 今日速览

LobsterAI 今日整体处于**高活跃的内部迭代日**。过去 24 小时内共有 **11 个 PR 全部完成合并或关闭**（仅 1 个仍 Open），**3 个历史 Issue 因 stale 被自动关闭**，**无新版本发布**。PR 内容高度集中于渲染层与文件库（Library）的体验优化、登录引导、Skills/插件安装流程修复，以及一项重磅的跨平台缩略图渲染器特性。维护团队（主要由 fisherdaddy、liuzhq1986、liugang519 三位贡献者驱动）展现出较快的合入节奏，但社区侧（Issue/讨论）较为沉寂，且尚无新版本发版，建议关注版本发布节奏。

**活跃度评级**：⭐⭐⭐⭐（开发侧高活跃 / 社区侧静默）

---

## 2. 版本发布

⚠️ 今日**无新版本发布**。这是值得注意的信号——尽管今日合入了 10 个面向用户的修复与功能（特别是文件库缩略图系统这一较大改动），但尚未进入发版流水线。建议维护者评估是否需要合并后立即切 RC，或者在下一次统一发版时打包这些变更。

---

## 3. 项目进展（今日已合并/关闭 PR）

| PR | 标题 | 类别 | 影响力 |
|---|---|---|---|
| [#2524](https://github.com/netease-youdao/LobsterAI/pull/2524) | feat(library): 增强跨平台缩略图与本地产物生命周期 | **重大特性** | 🔴 高 |
| [#2522](https://github.com/netease-youdao/LobsterAI/pull/2522) | fix(library): 完善文件分享与收藏交互 | 体验修复 | 🟡 中 |
| [#2528](https://github.com/netease-youdao/LobsterAI/pull/2528) | Feat/credits loading settings UI | 新功能 | 🟡 中 |
| [#2527](https://github.com/netease-youdao/LobsterAI/pull/2527) | fix(skills): 默认回到 marketplace tab | 体验修复 | 🟢 低 |
| [#2525](https://github.com/netease-youdao/LobsterAI/pull/2525) | Liuzhq/login guide | 引导优化 | 🟢 低 |
| [#2523](https://github.com/netease-youdao/LobsterAI/pull/2523) | Liuzhq/add im icon | 图标/UI | 🟢 低 |
| [#2526](https://github.com/netease-youdao/LobsterAI/pull/2526) | chore: update some kits icon url | 杂项 | 🟢 低 |
| [#2521](https://github.com/netease-youdao/LobsterAI/pull/2521) | fix(cowork): preserve message selection for context menu | Bug 修复 | 🟡 中 |
| [#2520](https://github.com/netease-youdao/LobsterAI/pull/2520) | fix(plugins): keep install modal usable with long errors | Bug 修复 | 🟡 中 |
| [#1193](https://github.com/netease-youdao/LobsterAI/pull/1193) | perf(sqlite): 通过 debounce+批处理消除写放大 | **性能优化** | 🔴 高 |

### 重点解读

- **#2524 是今日最大特性**：新增**隔离的跨平台缩略图渲染器**，统一支持图片、视频、PDF、Office、HTML 等格式，统一 16:9 缩略图尺寸与缓存策略；同时修复"已删除任务的延迟事件重新创建资料关系"的数据一致性 bug，并补充了大量设计文档与测试。这是一次**面向生产环境稳定性的大手笔升级**。
- **#1193 是值得关注的性能修复**（注意：与 #2524 同时合入，说明团队在持续打磨底层）：彻底解决 sql.js 在每次单行写入时全量 `db.export()` + `fs.writeFileSync()` 的写放大问题，对长时间运行的会话场景（消息、文件索引、订阅等高频写入）将带来显著 IO 与延迟收益。
- **#2522 / #2520 / #2521 / #2528** 共同指向**用户可见细节的打磨**：文件库分享收藏、插件安装弹窗、上下文菜单、Credits 加载 UI，均是用户高频触达路径。
- **#2525**（登录引导）与 **#2523**（IM 图标）显示团队正在为新的登录/IM 集成做准备，可能是下一版本的大功能预告。

**整体推进度**：项目在「文件库子系统」与「底层 SQLite 存储」两个方向均完成了一次中等级别的跃迁，**综合方向感与质量均属正向**。

---

## 4. 社区热点

今日**无新开 Issue，亦无活跃讨论**。所有关闭的 Issue 均为 4 月初的 stale 历史单。

从历史讨论热度看，过去一个月内相对受关注的 Issue（已关闭）：

- 🔥 **[#1187](https://github.com/netease-youdao/LobsterAI/issues/1187)** — "建议在设置模型 API 的选项中增加上下文窗口大小设置和输出 token 设置"
  - 评论 3 条 / 👍 1 个
  - 用户在 DeepSeek 模型下遭遇 `Context overflow: prompt too large for the model` 报错
  - **诉求本质**：暴露模型上下文窗口与输出 token 配置项，将"模型能力"与"运行时配置"解耦
- 🔥 **[#1195](https://github.com/netease-youdao/LobsterAI/issues/1195)** — "自建 skill 被安装到 OpenClaw 的 skill 目录后，重启 LobsterAI 技能面板无显示"
  - 评论 3 条 / 👍 0 个
  - 必现 bug，影响 Windows 用户
  - **诉求本质**：技能安装路径与技能面板的同步一致性
- 🔥 **[#1192](https://github.com/netease-youdao/LobsterAI/issues/1192)** — "自定义已有工具的默认配置（如浏览器无头模式）"
  - 评论 2 条 / 👍 0 个
  - 用户认为记忆提示指令跟随不稳，希望提供"硬编码默认配置"能力
  - **诉求本质**：工具的运行时默认参数用户可控化

**背后共性**：用户希望获得**对模型与工具更细粒度的运行时控制权**——这与现代 AI Agent 工具"可调可管"的产品趋势一致。

---

## 5. Bug 与稳定性

| 严重程度 | 问题 | 状态 | 修复 PR |
|---|---|---|---|
| 🟡 中 | [#1195](https://github.com/netease-youdao/LobsterAI/issues/1195) 自建 skill 安装后重启不显示 | 已关闭（stale），尚无明确修复 PR | ❌ 待跟进 |
| 🟢 低 | [#1192](https://github.com/netease-youdao/LobsterAI/issues/1192) 已有工具无法写死默认配置（更偏功能诉求） | 已关闭（stale） | ❌ 无 |
| 🟢 低 | [#1187](https://github.com/netease-youdao/LobsterAI/issues/1187) DeepSeek 上下文溢出无 UI 化提示 | 已关闭（stale） | ❌ 无 |

**修复今日合入的隐性 Bug**（来自 PR 摘要）：
- **#2524** 修复了"已删除任务的延迟事件重新创建资料关系"——属于数据一致性回归修复，重要性较高。
- **#2522** 修复了收藏事件重复触发列表刷新、收藏失败回滚不完整等边界问题。
- **#2520** 修复了插件安装失败时错误信息过长导致按钮被遮挡的可用性 bug。
- **#2521** 修复了右键/Ctrl-click 上下文菜单打开前选中态被清除的问题。

**结论**：今日 PR 中夹带了若干真实稳定性改进，但 **Issue 跟踪系统中并未反映新报告的 bug**——建议社区运营引导用户提交新 bug 单，而非让 stale 机制自动清理（可能导致用户挫败感流失）。

---

## 6. 功能请求与路线图信号

| 诉求 | 来源 | 纳入可能性 |
|---|---|---|
| 设置中暴露 **context window / max output tokens** | [#1187](https://github.com/netease-youdao/LobsterAI/issues/1187) | ⭐⭐⭐⭐⭐ 极高——多模型适配已成行业标配，DeepSeek/Claude/GPT 系列上下文差异巨大，**强烈建议下一版本纳入** |
| 工具的**运行时默认配置**（如 browser.headless） | [#1192](https://github.com/netease-youdao/LobsterAI/issues/1192) | ⭐⭐⭐ 中等——产品复杂度提升，但与"插件市场 + 高级设置"方向契合 |
| Skill 安装与面板**同步刷新** | [#1195](https://github.com/netease-youdao/LobsterAI/issues/1195) | ⭐⭐⭐⭐⭐ 极高——属于既有功能的可靠性问题，应在下一版本修掉 |
| **跨平台缩略图**渲染器 | [#2524](https://github.com/netease-youdao/LobsterAI/pull/2524) PR | ✅ 已合入，待发版 |
| **Credits 设置 UI** | [#2528](https://github.com/netease-youdao/LobsterAI/pull/2528) PR | ✅ 已合入，待发版 |

**路线图信号**：从连续合入的"登录引导（#2525）"+"IM 图标（#2523）"+"Credits 加载 UI（#2528）"判断，团队正在为**新的登录/账户体系与 IM 集成**做铺垫，下一个 minor 版本可能将这一波能力一并发布。

---

## 7. 用户反馈摘要

由于今日 Issue 全部为 stale 关闭，**无新增用户评论**。从历史 Issues 提炼的真实痛点：

1. **痛点一：模型参数不可见**
   - 用户（qxjysd）："DeepSeek 模型跑长对话时，Context overflow 直接报错，没有可视化提示上下文大小。"
   - ——反映**专业用户对模型参数透明化**的诉求。

2. **痛点二：自建技能不可见**
   - 用户（blueb0ne）："在 main agent 中创建 skill，让 agent 安装，重启 LobsterAI 后技能面板里无此 skill……必现。"
   - ——指向**技能安装链路与 UI 状态机的同步性 bug**，且出现于 Windows 平台，需关注平台差异。

3. **痛点三：工具行为难控制**
   - 用户（duzhen1996）："浏览器工具会弹窗，我用记忆让它无头模式启动，但大模型指令跟随不好，经常失败。"
   - ——揭示了一个重要产品矛盾：**用户对工具行为的确定性需求 vs LLM 指令跟随的不稳定性**。提供"默认配置写死"是合理的工程化折中。

**满意度信号**：暂无正向反馈（无 thumbs-up 计数高的关闭项），侧面提示社区参与度仍偏弱。

---

## 8. 待处理积压

| 项目 | 类型 | 停留时间 | 优先级提醒 |
|---|---|---|---|
| [#1277](https://github.com/netease-youdao/LobsterAI/pull/1277) dependabot: bump electron 40.2.1 → 43.4.1 | **PR（Open）** | 自 2026-04-02 起 ~145 天 | 🟡 **重要**——Electron 大版本跨度（40→43），含安全与性能修复；长期未合入存在供应链风险，建议尽快评审 |
| [#1187](https://github.com/netease-youdao/LobsterAI/issues/1187) 上下文窗口设置 | 已 stale 关闭 | ~146 天 | 🟡 重新评估——该诉求在多模型时代仍未过时，应转入路线图 |
| [#1195](https://github.com/netease-youdao/LobsterAI/issues/1195) 自建 skill 不可见 | 已 stale 关闭 | ~146 天 | 🔴 **重新评估**——属于"必现"严重 bug，不应因 stale 自动关闭；建议复现并修复 |
| [#1192](https://github.com/netease-youdao/LobsterAI/issues/1192) 自定义工具默认配置 | 已 stale 关闭 | ~146 天 | 🟢 功能诉求，可择机评估 |

> ⚠️ **维护者提醒**：今日关闭的 3 个 Issue 全部带 `[stale]` 标签且超过 145 天未活动。其中 **#1195 是一个必现 bug**，仅因 inactivity 而关闭并不合理——建议重新打开并跟进修复，以维护社区信任。

---

## 📌 综合健康度评估

| 维度 | 评分 | 说明 |
|---|---|---|
| 开发活跃度 | ⭐⭐⭐⭐⭐ | 单日 10 合入，含重大架构改进 |
| 社区活跃度 | ⭐⭐ | 无新 Issue、无新讨论、Issue stale 关闭 |
| 版本节奏 | ⭐⭐ | 单日大量变更尚未触发发版 |
| 文档/测试覆盖 | ⭐⭐⭐⭐ | #2524 明确补充了设计文档与测试，对长期质量有利 |
| 安全/依赖维护 | ⭐⭐ | 依赖升级 PR (#1277) 长期未处理 |
| **综合** | **⭐⭐⭐ (3.0/5)** | **内部研发势能强劲，社区与发版节奏是主要短板** |

---

*报告生成时间：2026-08-25 · 数据来源：netease-youdao/LobsterAI GitHub 公开 API*
*如需追踪特定 PR/Issue 的后续动态，欢迎订阅 GitHub Watch。*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目日报 · 2026-08-25

---

## 1. 今日速览

Moltis 项目在过去 24 小时呈现高强度整合态势：共 **19 个 PR** 完成更新（**16 个关闭/合并**，3 个待合并），**2 个 Issue** 全部关闭，并发布了 **1 个新版本 `20260824.01`**。今日交付的内容横跨 **OAuth 认证扩展（xAI/Grok Subscription）、定时任务（cron）行为修正、多媒体/沙箱稳定性、Browser/MCP/WhatsApp 集成加固**，以及 **Slack 共享频道工具策略**等关键方向。项目整体状态健康，且维护节奏显示出较强的"以收尾与稳定性优先"特征。

---

## 2. 版本发布

### 🚀 版本 `20260824.01` 已发布
📎 链接：[Release 20260824.01](https://github.com/moltis-org/moltis/releases/tag/20260824.01)

此版本聚合了近期关闭的多项修复与新功能，包含但不限于：

| 类别 | 关键变更 |
|---|---|
| **新功能** | 新增 `xai-oauth` 提供商，支持 SuperGrok / SuperGrok Heavy / X Premium+ 订阅者使用 Grok（[#1240](https://github.com/moltis-org/moltis/pull/1240)） |
| **新功能** | 允许在共享 Slack 频道中使用已配置的工具（[#1238](https://github.com/moltis-org/moltis/pull/1238)） |
| **Bug 修复** | Apple 容器标识符长度限制适配（[#1237](https://github.com/moltis-org/moltis/pull/1237)） |
| **Bug 修复** | 心跳任务的 `active_hours` 真正生效、并接受 `end="24:00"`（[#1241](https://github.com/moltis-org/moltis/pull/1241)） |
| **Bug 修复** | Coqui TTS 默认不再误报为 "configured"（[#1242](https://github.com/moltis-org/moltis/pull/1242)） |
| **本地化** | zh-TW（繁体中文）翻译整体更新（[#1225](https://github.com/moltis-org/moltis/pull/1225)） |

> ⚠️ **破坏性变更提示**：默认行为有以下调整，需要用户在升级前注意：
> - **Obscura 浏览器现默认以 `--stealth` 模式启动**（[#1227](https://github.com/moltis-org/moltis/pull/1227)）。如需恢复原有网络行为，请设置 `tools.browser.obscura_stealth = false`。
> - **内置 memory 后端名从 `sqlite` 规范化为 `builtin`**（[#1235](https://github.com/moltis-org/moltis/pull/1235)）。外部脚本或文档如硬编码 `sqlite`，请相应更新。
>
> **迁移建议**：升级前备份配置；升级后通过 `memory.config.get` 接口验证后端名称是否正确解析为 `builtin`；检查 Obscura 相关行为是否符合预期。

---

## 3. 项目进展（今日合并/关闭的重要 PR）

以下是今天关闭的、对项目能力扩展或质量提升有显著影响的 PR：

### 🌟 新能力落地

| PR | 标题 | 价值 |
|---|---|---|
| [#1240](https://github.com/moltis-org/moltis/pull/1240) | feat(providers): add xAI Grok subscription OAuth | 通过 RFC 8628 device-code 登录直接接入 SuperGrok 订阅，无需 API Key，补齐了 OpenAI Codex、GitHub Copilot 之外的第三大 OAuth 阵营 |
| [#1238](https://github.com/moltis-org/moltis/pull/1238) | Allow configured tools in shared Slack channels | 让 Slack 共享频道（非操作员）下允许受策略控制的工具调用，扩大了协作场景 |
| [#1227](https://github.com/moltis-org/moltis/pull/1227) | fix(browser): enable Obscura stealth mode by default | 强化反爬/隐式浏览器能力，默认更安全 |

### 🛡 安全与稳定性加固

| PR | 标题 | 价值 |
|---|---|---|
| [#1237](https://github.com/moltis-org/moltis/pull/1237) | Bound Apple container identifiers to 64 characters | 修复 Apple Container 沙箱因标识符过长无法启动的问题，使用 SHA-256 后缀稳定重试 |
| [#1179](https://github.com/moltis-org/moltis/pull/1179) | fix(gateway): verify node pairing signatures | 节点配对签名校验绑定到服务端颁发的 pending request，阻止调用方伪造 key/challenge |
| [#1236](https://github.com/moltis-org/moltis/pull/1236) | fix(memory): bound local embedding encoder batches | 修复了本地 GGUF 嵌入模块在分块超 512 token 时导致**整个进程崩溃**的严重问题 |
| [#1231](https://github.com/moltis-org/moltis/pull/1231) | fix(mcp): resolve current client after server restart | 解决 MCP 服务重启后旧 client 仍被分发的隐患 |
| [#1234](https://github.com/moltis-org/moltis/pull/1234) | fix(skills): materialize recursive bundled sidecars | 修复预构建包/Docker 镜像中 `skill-creator` 等 bundled skill 的 sidecar 找不到问题 |
| [#1241](https://github.com/moltis-org/moltis/pull/1241) | fix(heartbeat): honor active_hours | 使心跳任务真正遵守 `active_hours` 窗口，并把文档默认的 `"24:00"` 接受为有效值 |

### 🔧 集成改进

| PR | 标题 | 价值 |
|---|---|---|
| [#1228](https://github.com/moltis-org/moltis/pull/1228) | fix(whatsapp): persist inbound files for local tools | 把入站 WhatsApp 文档从"仅元数据"升级为"实际下载到本地"，并补齐照片处理（20MB 上限） |
| [#1229](https://github.com/moltis-org/moltis/pull/1229) | fix(browser): support Browserless v2 containers | 完整支持 Browserless v2 容器协议（含 Base64 `launch` 与 `TIMEOUT`/`CONCURRENT`），向后兼容 v1 |
| [#1235](https://github.com/moltis-org/moltis/pull/1235) | fix(memory): normalize built-in backend config value | 统一 memory 后端名称为 `builtin`，并补全 Rust 端到端测试 |
| [#1242](https://github.com/moltis-org/moltis/pull/1242) | fix(tts): stop treating default Coqui as configured | 修复未配置 TTS 时仍报红色 "coqui not configured" 警告的误判 |
| [#1226](https://github.com/moltis-org/moltis/pull/1226) | fix(cron): deliver scheduled output to the originating chat | 定时任务的输出可被准确送回原始聊天通道，并保留 thread/topic 路由 |
| [#1233](https://github.com/moltis-org/moltis/pull/1233) | fix(whatsapp): bound inbound media downloads while streaming | 为 WhatsApp 入站媒体流式下载设置合理上限 |
| [#1225](https://github.com/moltis-org/moltis/pull/1225) | fix(i18n): update and improve zh-TW Traditional Chinese locale | 全面更新 zh-TW 本地化（重点是 connectors 模块） |

> 📈 **整体评价**：今日合并量属于近一个月较高位，**Bug 修复类占比超过 70%**（12/16），且覆盖了从进程崩溃、安全校验到媒体/工具集成的多个高敏领域。项目健康度处于"密集整理"阶段，**功能扩展（OAuth、Coder sandbox）和底层稳定性同步推进**，节奏良好。

---

## 4. 社区热点

按评论数与外部集成价值筛选：

- **#1239 [已关闭]** [feat(providers): add xAI Grok subscription OAuth](https://github.com/moltis-org/moltis/issues/1239) 💬 2 条评论 · 👍 0
  - 用户诉求：希望 SuperGrok / SuperGrok Heavy / X Premium+ 订阅用户**无需 `XAI_API_KEY`** 即可在 Moltis 中使用 Grok。
  - 现状：对应的 [#1240](https://github.com/moltis-org/moltis/pull/1240) 已同日关闭落地，OAuth 链路采用 RFC 8628 device-code + `cli-chat-proxy.grok.com/v1` 代理方案。

- **#1137 [已关闭]** [bug: Apple Container ID exceeds name limit](https://github.com/moltis-org/moltis/issues/1137) 💬 1 条评论 · 👍 0
  - 用户痛点：Apple 沙箱无法启动，原因为标识符拼接超长。
  - 现状：[#1237](https://github.com/moltis-org/moltis/pull/1237) 同日合并给出修复。

> 🔍 **社区热度分析**：今日 Issues 评论数整体偏低（仅 3 条），说明项目维护链相当高效——**多 Issue 与对应修复 PR 在同一日内闭环**，这是健康社区协作的强信号。需求集中在"更多订阅制模型接入"和"沙箱可移植性"两条主线。

---

## 5. Bug 与稳定性

按严重程度排列（附修复状态）：

| 严重级别 | Issue / PR | 描述 | 修复 PR |
|---|---|---|---|
| 🔴 **Critical** | [#1236](https://github.com/moltis-org/moltis/pull/1236) | 本地 GGUF memory 嵌入在 chunk 超过 512 token 时导致**整个 Moltis 进程直接崩溃** | ✅ **已合并** — 修正 `n_ubatch` 与 token 长度约束 |
| 🔴 **High** | [#1234](https://github.com/moltis-org/moltis/pull/1234) | 预构建包/Docker 中 `skill-creator` 等 bundled skill 的 sidecar 文件读取报 "not found" | ✅ **已合并** — 物化递归 bundled sidecars |
| 🟠 **High** | [#1179](https://github.com/moltis-org/moltis/pull/1179) | 网关节点配对签名校验可被调用方伪造 challenge/key（潜在中间人风险） | ✅ **已合并** — 签名绑定到服务端颁发的 pending request |
| 🟠 **High** | [#1231](https://github.com/moltis-org/moltis/pull/1231) | MCP 服务端重启后，活跃聊天回合继续通过**已关闭的 client** 分发工具调用 | ✅ **已合并** — 维持 server-level persistent client |
| 🟠 **Medium** | [#1237](https://github.com/moltis-org/moltis/pull/1237) | Apple Container 沙箱因 ID > 64 字符无法启动 | ✅ **已合并** |
| 🟠 **Medium** | [#1241](https://github.com/moltis-org/moltis/pull/1241) | Heartbeat `active_hours` 配置被忽略 + `end=24:00` 被判为非法 | ✅ **已合并** |
| 🟡 **Medium** | [#1235](https://github.com/moltis-org/moltis/pull/1235) | memory backend 名称不一致（`sqlite` vs `builtin`） | ✅ **已合并** |
| 🟡 **Medium** | [#1242](https://github.com/moltis-org/moltis/pull/1242) | 未配置 TTS 时 TUI 仍弹红字 "coqui not configured"（UI 误判） | ✅ **已合并** |
| 🟡 **Medium** | [#1226](https://github.com/moltis-org/moltis/pull/1226) | 定时任务输出无法正确投递到发起频道，丢失 thread/topic 上下文 | ✅ **已合并**（被 [#1243](https://github.com/moltis-org/moltis/pull/1243) 接续完善） |
| 🟢 **Low** | [#1233](https://github.com/moltis-org/moltis/pull/1233) | WhatsApp 入站媒体下载未设上限，存在被滥用风险 | ✅ **已合并** |

> 📌 **结论**：今日所有报告的 Bug **均有对应的修复 PR 在当日合并**，Bug 修复闭环率 100%。这种"日报式自闭"是 Moltis 当前质量文化的典型体现。

---

## 6. 功能请求与路线图信号

### 🆕 已落地（含本次）
- **xAI Grok Subscription OAuth**（[Issue #1239](https://github.com/moltis-org/moltis/issues/1239) → [PR #1240](https://github.com/moltis-org/moltis/pull/1240)）— 订阅经济场景。
- **Slack 共享频道受控工具访问**（[PR #1238](https://github.com/moltis-org/moltis/pull/1238)）— 团队协作场景。

### 🛠 进行中（待合并）
- **Coder 远程工作区沙箱**（[PR #1199](https://github.com/moltis-org/moltis/pull/1199)，开放 9 天）— 创建短时 workspace、通过 PTY WebSocket 执行命令；支持模板 ID/名、预设、参数、TTL。**这表明 Moltis 正从"本地沙箱"向"远程云端开发环境"延伸**，极可能进入下一版本路线图。
- **修复工具对象 schema 的 OpenAI-strict 兼容性**（[PR #1232](https://github.com/moltis-org/moltis/pull/1232)，开放 3 天）— 显著影响 OpenAI Codex 工具调用稳定性，应优先合入。
- **修复 cron 投递保留频道上下文**（[PR #1243](https://github.com/moltis-org/moltis/pull/1243)，开放 1 天）— 紧接 #1226 的逻辑改进。

### 🧭 暗示方向
- **更多 OAuth provider**：从 OpenAI Codex、GitHub Copilot 到 xAI-Grok，模式在快速扩张，未来可能涵盖 Claude/Anthropic 等。
- **远程/容器化沙箱**：Coder、Browserless v2、Obscura stealth 三线并发，意味着"运行环境多样化"将持续作为路线图主线。
- **本地化深化**：zh-TW 重大改写并入了 connectors 模块，反映非英语社区在 connectors/i18n 上的投入在加大。

---

## 7. 用户反馈摘要

从已关闭的 Issue 与少量可见评论中提炼：

> 📝 "Subscribers of SuperGrok / X Premium+ shouldn't need to provision an API key just to chat with Grok in Moltis."
> — *来源: [Issue #1239](https://github.com/moltis-org/moltis/issues/1239)*
> 反映诉求：**消费级订阅账户应被原生工具平等支持**，不要强迫付费开发者路径。

> 📝 "Apple Container fails to start — identity-scoped prefix + session UUID exceeds the 64-char identifier limit."
> — *来源: [Issue #1137](https://github.com/moltis-org/moltis/issues/1137)*
> 反映诉求：**跨平台沙箱命名规范需要在 CI/容器侧统一**，Apple macOS 用户被边缘化。

> 📝 "请重视 WhatsApp 入站文件的处理流程——文件/图片只是元数据无法被本地工具使用。"（基于 #1228、#1233 整理）
> 反映诉求：**多通道消息作为真实数据源

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>



</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw 项目日报

**日期**: 2026-08-25
**项目**: [qhkm/zeptoclaw](https://github.com/qhkm/zeptoclaw)
**数据周期**: 过去 24 小时

---

## 1. 今日速览

ZeptoClaw 项目今日活跃度处于**低位**。过去 24 小时内仅有 1 条新 Issue 被开启，无 PR 提交，也无新版本发布。社区互动指标（0 评论、0 👍）显示项目目前处于相对静默期，但单条新 Issue 聚焦于 CLI/REPL 用户体验硬化这一实际痛点，具备明确的产品质量信号。整体而言，项目日节奏放缓，但提交内容质量较高，针对性强。

---

## 2. 版本发布

**今日无新版本发布。**

近期发版节奏提示维护者关注：若项目仍在活跃维护状态，应检查 CI/CD 流水线是否正常，并评估是否需要发布补丁版本以体现项目健康度。

---

## 3. 项目进展

**今日无 PR 合并或关闭，项目代码层面无推进。**

按当前数据，无法量化项目向前推进的步伐。建议维护者主动开启一些低风险的 chore/docs 类 PR，以维持贡献惯性。

---

## 4. 社区热点

**今日热点 Issue:**

### [#650 feat(cli): REPL UX hardening - safe Ctrl+C/Ctrl+D, lone '/' command table](https://github.com/qhkm/zeptoclaw/issues/650)
- **作者**: Suraware
- **状态**: OPEN
- **互动**: 0 评论 / 0 👍
- **创建**: 2026-08-24

**诉求分析**: 用户 Suraware 提出两个具体的 CLI 改进点：
1. **Ctrl+C / Ctrl+D 安全处理**：当前 REPL 在收到中断信号时直接退出（`Err(Interrupted | Eof) => Goodbye!`），会意外销毁进行中的会话，应改为更安全的处理方式（如确认、取消当前输入、回到 prompt 等）。
2. **孤立 `/` 命令处理**：单独的 `/` 被当作未知命令处理，应识别为"打开命令表/帮助面板"的意图。

这两个问题均属于典型的 CLI 体验硬化（UX hardening），反映出真实用户在交互式 Agent 终端场景中的使用痛点——尤其是 AI Agent 这类长会话场景，意外中断的代价更高。

---

## 5. Bug 与稳定性

**今日报告的稳定性相关问题：**

| 严重程度 | 问题 | 编号 | 状态 |
|---------|------|------|------|
| 中 | REPL 在 Ctrl+C/Ctrl+D 时直接退出，销毁进行中会话 | [#650](https://github.com/qhkm/zeptoclaw/issues/650) | OPEN, **无 fix PR** |

**说明**: 虽然作者使用 `feat(cli)` 前缀标记为功能请求，但其中 Ctrl+C 静默退出问题在生产环境中可视为**用户体验性 Bug**——任何用户都可能在长 Agent 会话中误触 Ctrl+C 而丢失全部上下文。建议维护者优先处理。**目前无对应的修复 PR**。

---

## 6. 功能请求与路线图信号

**今日提出的功能请求:**

### REPL 体验硬化（[#650](https://github.com/qhkm/zeptoclaw/issues/650)）

| 维度 | 分析 |
|------|------|
| **请求类型** | CLI/REPL 用户体验改进 |
| **落地难度** | 低-中等（信号处理 + 输入解析，scope 清晰） |
| **优先级评估** | 中-高（影响所有交互式用户） |
| **路线图纳入可能性** | **较高**——Issue 描述详尽、问题定义清晰、复现路径明确，理想情况下可直接转为 PR |

**建议**: 维护者可考虑：
1. 自行认领此 Issue 并实现
2. 在 Issue 中补充设计讨论（Help 弹窗的 UI、确认提示的措辞等）
3. 关联一个 `good first issue` 标签，吸引社区贡献

---

## 7. 用户反馈摘要

由于今日 Issue 评论数与反应数均为 0，**暂无来自社区评论的定性反馈**。

但从 #650 的 Issue 描述中可提炼出以下**用户使用场景与痛点**:

- **使用场景**: 用户通过 `zeptoclaw agent` 进入交互式 REPL 进行长会话 AI Agent 交互。
- **痛点 1（数据丢失风险）**: 误触 Ctrl+C 会立即终止整个 REPL 进程，造成未保存的对话历史、上下文、生成中输出全部丢失。
- **痛点 2（可发现性差）**: 用户输入 `/` 期望查看可用命令列表，却得到 "Unknown command: /"，违背直觉。
- **整体满意度**: 无法直接评估，但从提交此 Issue 的细致程度看，该用户对工具有一定熟练度且具备工程思维，是潜在的高质量贡献者。

---

## 8. 待处理积压

**今日新开启积压:**

| 编号 | 标题 | 风险 | 提醒 |
|------|------|------|------|
| [#650](https://github.com/qhkm/zeptoclaw/issues/650) | feat(cli): REPL UX hardening | **中高** — 影响所有交互式 CLI 用户 | 建议 48 小时内回应，维护者确认 scope 与优先级 |

**历史积压**: 由于本次报告数据未包含 24 小时窗口外的历史 Issue 列表，无法评估整体积压规模。建议：
1. 维护者定期 review 超过 30 天未响应 Issue
2. 对 stale issue 加 `stale` 机器人标记并定期清理

---

## 总结

📊 **项目健康度仪表盘（2026-08-25）**

| 指标 | 数值 | 评估 |
|------|------|------|
| Issues 活跃度 | 1 新开 / 0 关闭 | ⚠️ 偏低 |
| PR 活跃度 | 0 | ⚠️ 静默 |
| 版本发布 | 0 | ⚠️ 需关注发版节奏 |
| 社区互动 | 0 评论 / 0 👍 | ⚠️ 冷启动 |
| 信号质量 | 单 Issue 质量高 | ✅ 正面 |

**核心建议给维护者:**
- 优先响应 [#650](https://github.com/qhkm/zeptoclaw/issues/650)，高 ROI 改进
- 评估是否需要发布补丁版本以维持发版节奏
- 在仓库中贴出 good first issue 标签，吸引新贡献者激活社区

---
*报告生成时间：2026-08-25 | 数据源：GitHub REST API*

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目日报

**报告日期**: 2026-08-25
**数据周期**: 过去 24 小时
**仓库**: [zeroclaw-labs/zeroclaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## 1. 今日速览

ZeroClaw 过去 24 小时继续保持高活跃度，Issues 净增 43 条（关闭 7）、PR 净增 45 条（关闭/合并 5），但**无新版本发布**，说明工程节奏集中在评审与设计层面。讨论热点集中在三大方向：**架构 RFC（Chat Completions profile、单工具 provider round、OIDC 路线图）**、**安全加固（delegate 风险旁路、文件系统边界、shell policy、cron 越权、容器非 root 强制）** 以及 **可观测性/错误链路（daemon 诊断丢 cause、provider 5xx 重复 JSON、转义日志）**。整体看项目处于"硬化 + 协议化"阶段，未见重大回归或紧急 P0，但若干 S2 安全相关 Bug（#10165、#10324）已进入 in-progress，需关注修复节奏。

---

## 2. 版本发布

**无新版本发布**。过去 24 小时无 Release 标签动作。

---

## 3. 项目进展

### 已关闭 Issues（7 条，全部为修复或 RFC 收尾）

| Issue | 类型 | 概要 |
|---|---|---|
| [#10023](https://github.com/zeroclaw-labs/zeroclaw/issues/10023) | bug | 失败日志错误地记录请求模型而非 pin 后的 fallback 模型 |
| [#10251](https://github.com/zeroclaw-labs/zeroclaw/issues/10251) | bug / test | 17 个 `telegram listen_*` 测试用例基于挂钟时间断言，runner 繁忙时易失败 |
| [#9590](https://github.com/zeroclaw-labs/zeroclaw/issues/9590) | bug | `models refresh` 并发执行读-改-写存在丢缓存风险 |
| [#10106](https://github.com/zeroclaw-labs/zeroclaw/issues/10106) | bug | 精确代理选择器错误拒绝 `transcription.*` 等受支持服务 |
| [#10224](https://github.com/zeroclaw-labs/zeroclaw/issues/10224) | bug | 自定义 provider 5xx 错误被双重转义 JSON 化 |
| [#10143](https://github.com/zeroclaw-labs/zeroclaw/issues/10143) | task | 补全 provider-call 账户生命周期契约 |
| [#10190](https://github.com/zeroclaw-labs/zeroclaw/issues/10190) | bug | Reasoning fallback 分类器匹配到无关的复合错误子句 |

> 备注：PR 数据中 "已关闭/合并 5 条" 的具体列表未在数据快照中区分明确标识，但从 PR 状态标签观察，4 个 `status:blocked` / `do-not-merge` 的 PR（[#10241](https://github.com/zeroclaw-labs/zeroclaw/pull/10241)、[#9637](https://github.com/zeroclaw-labs/zeroclaw/pull/9637)、[#9830](https://github.com/zeroclaw-labs/zeroclaw/pull/9830)、[#9948](https://github.com/zeroclaw-labs/zeroclaw/pull/9948)）仍处 OPEN，提示 release 流程严格。

### 关键推进方向

- **依赖与 CI 卫生**：[#10328](https://github.com/zeroclaw-labs/zeroclaw/pull/10328) 清理 `zeroclaw-runtime` 中未使用的 `image`、`indicatif` 依赖；[#10317](https://github.com/zeroclaw-labs/zeroclaw/pull/10317) dependabot 升级 `github/codeql-action/init` 3.36.2 → 4.37.8。
- **维护者流程标准化**：[#10192](https://github.com/zeroclaw-labs/zeroclaw/pull/10192) 对齐 RFC #9990 风险评审策略（docs only, XS），对 label guide / reviewer playbook / FND-003 做统一口径。
- **平台兼容性**：[#10183](https://github.com/zeroclaw-labs/zeroclaw/pull/10183) 修复 Termux 安装路径选择错误（应选 `aarch64-linux-android`），并扩展 canonical detector harness。

整体看：项目今日"向前迈进的步伐"主要落在**安全硬化（filesystem / Git shell / cron / delegate 风险）**、**协议与契约（provider call 计数、视觉模型 alias、Anthropic refusal）**、**安装与运行时卫生（Termux、未用依赖）**三个轴上。

---

## 4. 社区热点

### 评论最多 Issues（Top 5）

1. **[#8603](https://github.com/zeroclaw-labs/zeroclaw/issues/8603)** — *RFC: ZeroClaw Chat Completions profile*（24 条评论，p2，risk:high）
   社区诉求：让 ZeroClaw 兼容 OpenAI Chat Completions 协议，使 Open WebUI / LobeChat / Continue.dev / Aider / LangChain / OpenAI SDK 等客户端可直接接入。属于生态扩张型 RFC，影响 gateway/runtime/architecture。

2. **[#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692)** — *Maintainer decision queue for RFCs and design issues*（14 条评论）
   元层面：维护者希望集中跟踪 RFC 与设计性 issue 的接受/拒绝/拆分/延迟决策，提示社区已经积累相当数量的设计 backlog，亟需规范化收敛流程。

3. **[#7431](https://github.com/zeroclaw-labs/zeroclaw/issues/7431)** — *Add pre-turn tool elicitation hints*（6 条评论，p2，risk:high）
   增强体验：在主 LLM 调用前做轻量意图抽取，把自然语言路由请求自动填入 `send_via`，降低 agent 对 RFC #6969 显式调用的依赖。

4. **[#9512](https://github.com/zeroclaw-labs/zeroclaw/issues/9512)** — *Annotate each bespoke CI gate with motivating issue*（5 条评论）
   可追溯性诉求：`repo-structure`、`zerocode-rpc-boundary`、`nix-hash-drift`、`installer-drift` 等专项 gate 需要附带历史事故引用，避免"为何存在"的知识丢失。

5. **[#7759](https://github.com/zeroclaw-labs/zeroclaw/issues/7759)** — *Decouple gateway WebSocket lifetime from agent turn lifecycle*（4 条评论，p1，risk:high，in-progress）
   关键 UX：客户端断开 WebSocket 不应取消正在进行的 agent turn，恢复连接后应可恢复。属于 Web Chat 高频痛点。

### 评论最多 PRs

数据快照中 PR 评论数列空，但根据状态标签与规模可识别最关键 PR：
- **[#9726](https://github.com/zeroclaw-labs/zeroclaw/pull/9726)** — *fix(runtime): TaskRecord 单一后台生命周期所有者*（XL，risk:high，needs-author-action）— 分布式控制平面一致性核心修复。
- **[#9977](https://github.com/zeroclaw-labs/zeroclaw/pull/9977)** — *fix(tools): 文件系统变更限制在 workspace 内*（XL，risk:high）— 防止 symlink/挂载逃逸到共享数据目录。
- **[#8965](https://github.com/zeroclaw-labs/zeroclaw/pull/8965)** — *feat(skills): declarative auto-activation*（XL，stacked，risk:high）— 技能自动激活与图像轮工具阻断。
- **[#9739](https://github.com/zeroclaw-labs/zeroclaw/pull/9739)** — *feat(zerocode): multi-session panes*（XL，risk:medium）— TUI 多会话面板。

---

## 5. Bug 与稳定性

按严重程度排列：

### S0（数据丢失 / 安全风险）

| Issue | 描述 | Fix PR |
|---|---|---|
| [#10165](https://github.com/zeroclaw-labs/zeroclaw/issues/10165) | **independent delegate 绕过自身 `block_high_risk_commands`** — 即便 delegate profile 自身禁止高危命令，仍可通过独立委托执行 `rm` 等 | 暂未见专用 PR；属 in-progress，需密切关注 |

### S1（高严重 / 安全）

| Issue | 描述 | Fix PR |
|---|---|---|
| [#10165](#)（同上 S0）| — | — |
| [#7759](https://github.com/zeroclaw-labs/zeroclaw/issues/7759) | gateway WebSocket 断连导致 agent turn 被取消 | in-progress，暂无关联 PR 链接 |

### S2（降级行为 / 安全相关）

| Issue | 描述 | Fix PR |
|---|---|---|
| [#9812](https://github.com/zeroclaw-labs/zeroclaw/issues/9812) | provider fallback 携带主 provider 的 model id，永远无法触发并进入 cooldown（`r:needs-repro`，`status:stale`） | 需重激活 |
| [#9363](https://github.com/zeroclaw-labs/zeroclaw/issues/9363) | ZeroCode/Web 本地化后，Config metadata 仍为英文（group / section / heading） | 待处理 |
| [#10068](https://github.com/zeroclaw-labs/zeroclaw/issues/10068) | 交互式 agent 会话上下文硬限 32k tokens，忽略 `max_context_tokens=131072` | in-progress |
| [#10073](https://github.com/zeroclaw-labs/zeroclaw/issues/10073) | `StoragePolicy::Rolling` 高并发场景下有性能回归，提议退役并合并入 `Rotating` + 扩展 `/api/logs` 跨 segment 查询 | in-progress |
| [#10232](https://github.com/zeroclaw-labs/zeroclaw/issues/10232) | daemon 诊断仅记录 `e.to_string()`，丢失底层错误 cause 链 | in-progress |
| [#10178](https://github.com/zeroclaw-labs/zeroclaw/issues/10178) | daemon socket ownership 报错不提示当前拥有者与恢复路径 | in-progress |
| [#10175](https://github.com/zeroclaw-labs/zeroclaw/issues/10175) | Google TTS 的 API key header 未标记 sensitive | in-progress |
| [#10180](https://github.com/zeroclaw-labs/zeroclaw/issues/10180) | ZeroCode paste 直接写入隐藏 composer，绕过其他 surface 的 input ownership 检查 | in-progress |
| [#10324](https://github.com/zeroclaw-labs/zeroclaw/issues/10324) | cron manual trigger 与 run-history 在 agent rename 跨边界下仍是 check-then-act | 待处理 |
| [#9820](https://github.com/zeroclaw-labs/zeroclaw/issues/9820) | calculator 工具：模型输出字面 `<TOOLCALL>` 伪语法而非真正的 function call（NVIDIA NIM / Nemotron-Super-49B 复现） | 待处理 |

### 状态观察

- 已关闭的 7 条 Issue 中 6 条为 bug fix，1 条为 task 推进，说明 Bug 解决率维持在 100% 关闭闭环。
- `#9812` 状态为 `stale` 且 `r:needs-repro`，存在积压风险。
- 部分 in-progress Bug 暂无明确关联 PR 链接（如 #

</details>

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*