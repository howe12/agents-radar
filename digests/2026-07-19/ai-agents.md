# OpenClaw 生态日报 2026-07-19

> Issues: 390 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-07-19 02:05 UTC

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

# OpenClaw 项目日报 · 2026-07-19

## 1. 今日速览

OpenClaw 今日处于 **2026.7.2 beta 收尾期**，仓库整体活跃度极高：过去 24 小时共有 390 条 Issues 更新（249 活跃/141 关闭）与 500 条 PRs 更新（264 待合并/236 已合并或关闭），并伴随 1 个新版本 `v2026.7.2-beta.3` 发布。合并/关闭动作大于新开动作（约 377 → 264），表明维护团队正在密集收口回归问题、为稳定版冲刺。今日主线是 **beta release blocker 修复**、**多通道渠道小修小补**、**plugin/SDK 资源使用硬化** 以及一条由 maintainer @steipete 牵头的 XL 级别 **Session Dashboard** 功能合入。

## 2. 版本发布

**v2026.7.2-beta.3** — openclaw 2026.7.2-beta.3 ([GitHub Release](https://github.com/openclaw/openclaw/releases/tag/v2026.7.2-beta.3))

2026.7.2 系列第三个 beta（也是今日唯一一次发布）。官方 Highlights 已截断显示，已知主题包括：

- **Remote coding sessions**：可在云端 worker 上跑 Control UI 会话，可在宿主机的终端中打开 Codex 和 Claude 目录会话，并可在终端中直接 resume OpenCode 与 Pi 会话（参考 PR #107670、#107086、#107200）。
- **Native automation and nodes**：……（摘要被截断）

**破坏性变更/迁移注意**：
- 已知回归 #108435（升级到 2026.7.1 后 Gateway 无法启动）和 #109867（beta.2 状态迁移在创建 `agent_id` 列之前先建索引，阻塞 gateway 启动）— 升级前请备份并先跑 `openclaw doctor --fix`。
- 摘要中提到的"2026.7.2-beta.3"提示发布自动化流程发生了变化，PR #111100（"fix: beta releases require manual reruns after plugin publication"）专门为此设计了回滚/重跑机制，建议关注其最终落地状态。

## 3. 项目进展

今日重要合并/关闭事件（含 Maintainer/Highlight PR）：

- **PR #111100** [OPEN] `fix: beta releases require manual reruns after plugin publication` — @steipete 直接提交，规范了 beta 发布流程中 plugin npm 失败与 ClawHub 异步安全升级竞态的处理（[link](https://github.com/openclaw/openclaw/pull/111100)）。
- **PR #111038** [OPEN] `fix(apps): call chat sessions threads` — Android/iOS/macOS 客户端术语统一为 "chat sessions"，避免 web Control UI 与原生客户端交替显示 "threads/sessions"（[link](https://github.com/openclaw/openclaw/pull/111038)）。
- **PR #110960** [OPEN] `feat(gateway): session dashboard domain — board RPCs, ticketed widgets, dashboard tool, per-agent persistence` — 这是今日 **最大体量的特性 PR**，XL size、P1、维护者 @steipete 直接提交，将"会话看板"作为会话的持久化"面子"，并提供完整的 RPC 协议与 per-agent 持久化（[link](https://github.com/openclaw/openclaw/pull/110960)）。
- **PR #111121** + **#107375** [OPEN] `Durable core PR1/6 + PR2/6` — 一组关于"持久化核心"的 RFC + 实现切片，由 @mjnkao 分 6 个 PR 推进（[PR2](https://github.com/openclaw/openclaw/pull/111121) / [PR1 docs](https://github.com/openclaw/openclaw/pull/107375)）。
- **PR #111119** [CLOSED] `refactor(discord): split message process runtime` — 将 1,358 行的 Discord 消息处理模块拆分到大小合规文件，由 maintainer 提交并当日关闭（[link](https://github.com/openclaw/openclaw/pull/111119)）。
- **PR #111090** [OPEN] `fix(plugins): deep-clone registry snapshot so nested mutations roll back` — 插件注册事务快照改深拷贝，避免嵌套变更泄漏到 live registry（[link](https://github.com/openclaw/openclaw/pull/111090)）。
- **PR #110772** / **#110768** [OPEN] `fix(doctor): bound legacy session store read with size cap` 与 `fix(plugins): bound safeHashFile` — 同步读取设置大小上限，避免恶意/损坏文件 OOM，是平台硬度关键改进（[link](https://github.com/openclaw/openclaw/pull/110772)）。
- **PR #111120** `fix(plugin-sdk): bound Anthropic Vertex ADC credential read` — 限定 ADC 凭据文件读取大小（[link](https://github.com/openclaw/openclaw/pull/111120)）。

**值得并列提及的渠道/集成修复合集**（大量 XS/S 级别维护性 PR）：Tlon（#111081、#111099）、Matrix（#111105）、Line（#111057）、QQBot（#109896）、Discord burst 内存（#110954）、WhatsApp LID ack（#110053）、Feishu 文本/媒体（#102399）、Google Chat 流（#106018）、Bedrock auth 空白（#109680）。这是一波典型的"全渠道收口"，并配合 PR #111122（`fix(sessions): manual compaction deletes transcript history while claiming it was archived`，[link](https://github.com/openclaw/openclaw/pull/111122)）修复了一个相当严重的数据"假归档"问题。

## 4. 社区热点

按评论数与点赞数排序的 24 小时 Issues 顶部：

| # | Issue | 评论 | 👍 | 类型 |
|---|------|------|---|------|
| [#75](https://github.com/openclaw/openclaw/issues/75) | Linux/Windows Clawdbot Apps | **113** | **81** | enhancement |
| [#7707](https://github.com/openclaw/openclaw/issues/7707) | Memory Trust Tagging by Source | 17 | 0 | enhancement / security |
| [#91009](https://github.com/openclaw/openclaw/issues/91009) | Codex PreToolUse hook relay stalls gateway RPC | 14 | 2 | P1 bug |
| [#10659](https://github.com/openclaw/openclaw/issues/10659) | Masked Secrets – Prevent Agent from Accessing Raw API Keys | 13 | 4 | P1 enhancement / security |
| [#79077](https://github.com/openclaw/openclaw/issues/79077) | Telegram bot-to-bot & guest-bot modes (2026-05-07 spec) | 11 | 8 | enhancement |
| [#96975](https://github.com/openclaw/openclaw/issues/96975) | Isolate subagent completion from parent context | 10 | 1 | feature/bug |
| [#11665](https://github.com/openclaw/openclaw/issues/11665) | Webhook hook sessions multi-turn reuse | 10 | 0 | enhancement |
| [#10687](https://github.com/openclaw/openclaw/issues/10687) | Models: fully dynamic model discovery (OpenRouter + beyond) | 9 | 3 | maintainer |
| [#7722](https://github.com/openclaw/openclaw/issues/7722) | Filesystem Sandboxing Config (`tools.fileAccess`) | 9 | 4 | security |
| [#88032](https://github.com/openclaw/openclaw/issues/88032) | Telegram quote/reply as first-class durable contract | 6 | 1 | enhancement |

**主要诉求画像**：
- **平台覆盖缺口**：#75 在本仓库已存在约半年（创建于 2026-01-01），113 条评论 + 81 👍 反映社区对 Linux/Windows 原生客户端的强需求，今日仍在被引用但无 PR 推进。
- **安全/信任模型**：#7707（内存来源信任标签）、#10659（masked secrets 防密钥泄露）、#7722（filesystem sandboxing）、#12219（skill 权限清单 skill.yaml），四项合计 ~40 条评论、9 个 👍，是当前最清晰的安全路线图信号。
- **Telegram 矩阵持续扩张**：#79077 对接 2026-05-07 官方新增的 Guest Bots / Bot-to-Bot，配合 #10944（parseMode）、#109490（terminate:true）、#88032（quote/reply 一等公民），意味着 2026.7.x 整个周期都把 Telegram 当作旗舰渠道。
- **多模型动态发现**：#10687 是 maintainer @joshp123 提的 OpenRouter 动态化模型目录需求，呼应了已合并的 #88548（Copilot live entitlement）。

## 5. Bug 与稳定性

按严重程度（含 release blocker / crash / data-loss）排序的 24 小时重点 bug：

| 严重度 | Issue | 标题 | 状态 |
|------|------|------|------|
| 🔴 **P0 release-blocker** | [#108435](https://github.com/openclaw/openclaw/issues/108435) | 2026.7.1 升级后 gateway 启动失败 | open — 已有反馈但 fix PR 待指认 |
| 🔴 **P0 release-blocker** | [#109867](https://github.com/openclaw/openclaw/issues/109867) | beta.2 状态迁移：索引先于列创建，阻塞 gateway startup | open — 👍 7，社区高优先级 |
| 🟠 **P1 crash** | [#99263](https://github.com/openclaw/openclaw/issues/99263) | Gateway 在 Node 26 + 图片媒体入库时 `ERR_INVALID_STATE` | open, stale |
| 🟠 **P1** | [#91009](https://github.com/openclaw/openclaw/issues/91009) | Codex PreToolUse hook relay 派生 100%+ CPU 子进程 | open |
| 🟠 **P1** | [#109490](https://github.com/openclaw/openclaw/issues/109490) | Codex client-delegated message 工具 `terminate:true` 后应做的工作不再执行 | open |
| 🟠 **P1 / data-loss** | [#99910](https://github.com/openclaw/openclaw/issues/99910) | Memory dreaming 跑时主线程 hang ~10 分钟，短期 recall 无法持久化 | open |
| 🟠 **P1** | [#96242](https://github.com/openclaw/openclaw/issues/96242) | 多条独立路径导致 Telegram 重复消息 | open |
| 🟠 **P1** | [#108238](https://github.com/openclaw/openclaw/issues/108238) | 2026.7.1 把累计 cacheRead 计入 totalTokens，误触发 compaction | open |
| 🟠 **P1** | [#99071](https://github.com/openclaw/openclaw/issues/99071) | Codex Apps plugin discovery 反复全盘扫读，I/O 风暴 | open |
| 🟡 **P1 regression / data-loss** | [#86684](https://github.com/openclaw/openclaw/issues/86684) | `sessions_yield` 后子代理唤醒会以低 context 触发父分支 compaction | open |
| 🟡 **P1** | [#89147](https://github.com/openclaw/openclaw/issues/89147) | Native hook relay 长推理后中途饿死 | open, stale |
| 🟡 **P1** | [#78562](https://github.com/openclaw/openclaw/issues/78562) | v2026.5.5 工具循环反复触发 auto-compaction | open |

**今日已关闭 bug**（表明团队在系统性清理 backlog）：

- [#101763](https://github.com/openclaw/openclaw/issues/101763) `claude-opus-4.8` 漏点导致 model selector 失效 — closed
- [#83184](https://github.com/openclaw/openclaw/issues/83184) Heartbeat `pendingFinalDelivery` 卡死 — closed
- [#86827](https://github.com/openclaw/openclaw/issues/86827) Group chat `failed` 状态静默丢消息 — closed
- [#76233](https://github.com/openclaw/openclaw/issues/76233) exec-approval-followup 与 subagent bundle 释放 race → UNAVAILABLE — closed
- [#49104](https://github.com/openclaw/openclaw/issues/49104) Telegram HTML parse_mode 截断 `<think>` 等标签 — closed
- [#79553](https://github.com/openclaw/openclaw/issues/79553) Wizard 多账号覆盖已有凭据 — closed
- [#88548](https://github.com/openclaw/openclaw/issues/88548) GitHub Copilot 静态模型遮蔽 live entitlement — closed
- [#91592](https://github.com/openclaw/openclaw/issues/91592) `memory_search` scopeHash 不匹配 — closed
- [#85822](https://github.com/openclaw/openclaw/issues/85822) Discord 嵌入式 run 完成 ~48s lane 滞留 — closed
- [#79308](https://github.com/openclaw/openclaw/issues/79308) Telegram 群消息误回 DM — closed
- [#96732](https://github.com/openclaw/openclaw/issues/96732) moonshot/kimi-k2.6 reasoning_content 泄漏 — closed

**回归风险提示**：#108238（cacheRead 误算）与 #109490（terminate:true 后中断）都明确

---

## 横向生态对比

# 2026-07-19 AI 智能体开源生态横向对比分析

> 数据周期：2026-07-18 ~ 2026-07-19 ｜ 涵盖 13 个项目（11 个有动态，2 个零活动）
> 分析对象：OpenClaw · NanoBot · Hermes Agent · NanoClaw · PicoClaw · IronClaw · ZeroClaw · Moltis · CoPaw · LobsterAI · NullClaw

---

## 1. 生态全景

当前 AI 智能体开源生态呈现**"三层分化 + 安全合规主导"**的总体格局：第一层是 **OpenClaw、ZeroClaw、IronClaw** 等已进入"基础设施加固期"的高强度迭代项目，单日处理 50+ PR/Issue，正集中投入渠道一致性、状态持久化与供应链签名；第二层是 **NanoBot、CoPaw、NanoClaw、Moltis** 等处于"质量扫除 + 局部突破"阶段的项目，特点是缺陷密度高、bug-to-fix 闭环率接近 100%、重点投入记忆体系与部署生态；第三层是 **PicoClaw、NullClaw、TinyClaw、ZeptoClaw** 等维护节奏明显放缓、依赖 stale-bot 维持仓库秩序的项目。**今日最显著的横向信号是"安全默认值的工业化"** —— 凭据加密、常量时间比较、文件大小上限、依赖审计、SLSA provenance 五类硬化举措首次在同一周期内跨多个项目同步出现，标志着生态正从"功能可用"转向"生产可托付"。

---

## 2. 各项目活跃度对比

| 项目 | Issues (更新 / 关闭) | PRs (更新 / 合并关闭) | 今日 Release | 活跃度 | 健康度 |
|------|---------------------|---------------------|-------------|--------|--------|
| **OpenClaw** | 390 / 141 | 500 / 236 | v2026.7.2-beta.3 | ⭐⭐⭐⭐⭐ | 高强度冲刺 |
| **ZeroClaw** | 50 / 11 | 50 / 3 | 无 | ⭐⭐⭐⭐⭐ | 高强度迭代 |
| **IronClaw** | 5 / — | 50 / 30 | 无（release PR 待合并） | ⭐⭐⭐⭐ | 架构攻坚 |
| **Hermes Agent** | 50 / 32 | 50 / 6 | 无 | ⭐⭐⭐⭐ | 收敛期 |
| **NanoBot** | 7 / 4 | 30 / 16 | 无 | ⭐⭐⭐⭐ | 稳健维护 |
| **NanoClaw** | 18 / 16 | 26 / 17 | 无 | ⭐⭐⭐⭐ | 收尾加固 |
| **CoPaw** | 11 / — | 7 / 1 | 无 | ⭐⭐⭐ | 良好 |
| **LobsterAI** | 6 (stale) / — | 3 / 2 | 无（2026.7.17 前日） | ⭐⭐ | 积压严重 |
| **Moltis** | 0 / 0 | 3 / 2 | 无 | ⭐⭐ | 轻量活跃 |
| **PicoClaw** | 4 / — | 12 / 8 (多 stale) | 无 | ⭐ | 维护停滞 |
| **NullClaw** | 1 / 0 | 0 / 0 | 无 | ⚠️ | 活跃度低谷 |
| **TinyClaw** | 0 | 0 | 无 | — | 无活动 |
| **ZeptoClaw** | 0 | 0 | 无 | — | 无活动 |

**关键观察**：今日仅 OpenClaw 单日有新版本发布（beta.3），12 个项目处于版本空窗期，说明生态整体处于"合流→测试"的中段而非"冲刺发版"的峰值。

---

## 3. OpenClaw 在生态中的定位

**优势层面**：

1. **规模碾压** —— 单日 390+500 条 Issue/PR 吞吐，是第二梯队（ZeroClaw/Hermes 的 50/50）约 8 倍。这种吞吐本身就是"用户基数 + 集成生态"的具象化体现。
2. **旗舰渠道战略明确** —— Telegram / Discord / Slack / Feishu 全线拥有 first-class 支持；而 Hermes 仅深耕 Telegram+Discord，PicoClaw 连 OAuth 抽象都尚未稳定。
3. **会话层架构领先** —— PR #110960（Session Dashboard + per-agent 持久化）+ Slice B/C 的"Durable Core"组（#107375/#111121），是今日其他项目**没有对标物的特性**。
4. **安全硬化最系统** —— `bound safeHashFile`、`bound ADC credential read`、`plugin registry deep-clone` 这一组 PR 显示 OpenClaw 在资源限制 + 状态机回滚上是**有方法论**的，比 ZeroClaw/IronClaw 的零散硬化更具体系性。

**与同类项目对比**：

| 维度 | OpenClaw | 同类代表 | 差距 |
|------|----------|---------|------|
| 单日吞吐量 | 890 条 | ZeroClaw 100 / IronClaw 55 | 8~16x |
| 客户端覆盖 | Mac/iOS/Android/Web | Hermes 仅 Web+Desktop / Moltis 单一 Web | 全平台 |
| 会话状态化 | Session Dashboard + Durable Core | NanoBot memory 三件套 / ZeroClaw 局部 | 阶段领先 |
| Plugin SDK 硬化 | 深拷贝回滚 + 大小上限 | IronClaw 仅基础 RBAC / ZeroClaw 常量时间 | 体系化 |
| 用户声量 | #75 (113 评论) 等头部品 | NullClaw #868 仅 7 评论 | 单点 100x |

**风险信号**：OpenClaw 同样有两条 P0 release-blocker（#108435、#109867）**未关闭**，体现"迭代越快、阻塞越贵"的规模悖论。

---

## 4. 共同关注的技术方向

下表汇总**至少 3 个项目同时涌现**的需求主线：

| 主题 | 涉及项目 | 共同诉求 |
|------|---------|---------|
| **多渠道体验一致性** | OpenClaw / Hermes / NanoClaw / ZeroClaw / PicoClaw | 跨 Slack/Discord/Telegram 的 ACL、typing、线程上下文化、错误处理统一收敛；OpenClaw 的 `chat sessions` 术语统一（#111038）与 ZeroClaw 的 `allowed_channels`（#6378）是同方向的两端 |
| **供应链与凭据加密** | OpenClaw / NanoClaw / IronClaw / ZeroClaw | NanoClaw #3065 (CWE-306) + IronClaw #6247 (MCP Bearer 明文) + ZeroClaw #8177 (SLSA 签名) + OpenClaw 多条 ADC/safeHash 限读同步告警 |
| **Agent 长期记忆与信任标签** | OpenClaw / NanoBot / IronClaw | OpenClaw #7707 (Memory Trust Tagging) + NanoBot #4621/#4626/#4627 (provenance + eager consolidation) + IronClaw `SafeSummary` 单一化定义 |
| **多 Agent 协作编排** | OpenClaw / NanoBot / IronClaw / PicoClaw | OpenClaw sessions_yield + subagent 修复；NanoBot #4624 subagent 聚合模式；IronClaw RuntimeLane 架构；PicoClaw #2937 Agent Collaboration Bus |
| **本地 / 边缘 / ARM 部署** | NanoBot / NullClaw / ZeroClaw / PicoClaw | Render Blueprint（NanoBot）、Termux/Linkat（NullClaw）、Android/Termux install（ZeroClaw #7911）、ARMv7 9router（PicoClaw #3205）——共同描绘"AI agent 走出服务器"的轮廓 |
| **资源限制与防 DoS** | OpenClaw / NanoBot / PicoClaw | OpenClaw bound safeHashFile / #110772；NanoBot 2000 条消息上限修复 #4956；PicoClaw SplitMessage 死循环 #3264 |
| **跨平台（含 Windows）可靠性** | Hermes / NanoBot / LobsterAI / CoPaw | Hermes #38216 / NanoBot CP936 / CoPaw #6239 PATH 处理 / LobsterAI #1296 长图 —— Windows 仍是最大可靠性洼地 |

---

## 5. 差异化定位分析

| 项目 | 功能侧重 | 目标用户画像 | 架构关键差异 |
|------|---------|------------|------------|
| **OpenClaw** | 全平台 AI Agent OS，会话/插件/渠道一体化 | 企业级 + 重度个人用户，需要多端协同 | Gateway + Durable Core + Plugin SDK，三层抽象 |
| **ZeroClaw** | 隐私优先 + WASM 插件 + 跨渠道 | 隐私敏感 + 边缘/自托管用户 | WASM 插件 OCI 化 + ChaCha20-Poly1305 + SLSA 路线 |
| **IronClaw** | 架构严谨性 + RBAC + 工具能力网关 | 大型工程团队 / 多租户场景 | 重 DTO 收敛、强类型授权链（`authorize()` 单一入口） |
| **Hermes Agent** | 桌面优先 + Skills Hub + 多 Provider | 桌面用户 + Skills 生态消费者 | Skills 时间元数据 + 多 profile（OAuth 共享存储） |
| **NanoBot** | 研究型 Agent + 高可定制 memory | 研究者 / 高级开发者 | Memory 子系统三件套 + aggregated subagent |
| **Moltis** | ACP-first 本地化 + Slack 企业集成 | 隐私/本地部署 + 企业 Slack 用户 | ACP-only setup + 可配置 Slack API base |
| **NanoClaw** | Onboarding UX + 多渠道（Slack/iMessage/WhatsApp） | 非技术终端用户 + 团队协作用户 | Slack Socket Mode + 公网暴露最小化 |
| **CoPaw (QwenPaw)** | 阿里 Qwen 生态 + CLI 可脚本化 | 国内 Qwen 用户 / DevOps 集成 | Driver 并发初始化 + 嵌入式场景 |
| **PicoClaw** | 轻量多 channel prototype | 极简部署 / 树莓派 / 实验 | 强调 OAuth 跨 provider 适配 |
| **LobsterAI** | 网易有道协同 + 错误结构化 | 团队协作 / 教育场景 | "cowork" 错误结构化 UI |
| **NullClaw** | Zig / 移动端构建实验 | 移动端 / Zig 工具链探索者 | Android Termux 构建路径 |

**架构哲学的核心分野**：

- **"收敛派"**：OpenClaw（Durable Core）/ IronClaw（DTO-collapse）/ ZeroClaw（KeySource 抽象）—— 都把架构清晰度列为 P0
- **"扩散派"**：PicoClaw / LobsterAI —— 强调覆盖广度而非深度
- **"实验派"**：NanoBot / NullClaw —— 倾向快速试错型演进

---

## 6. 社区热度与成熟度分层

### 🟢 第一梯队：快速迭代 + 高吞吐

| 项目 | 特征 | 风险 |
|------|------|------|
| **OpenClaw** | beta.3 发布 + 500 PR 吞吐 | P0 release-blocker 双开 |
| **ZeroClaw** | 50+50 同步推进 + 19 个安全 PR | 合并率仅 6%（50→3），待审压力大 |
| **IronClaw** | 9 条架构 PR 集中合入 | 核心贡献者集中度极高（巴士因子风险） |

### 🟡 第二梯队：质量巩固 + 局部突破

| 项目 | 特征 |
|------|------|
| **NanoBot** | 30 PR/16 合并，bug-to-fix 闭环 100%，记忆三件套 + Render 蓝图双线突破 |
| **NanoClaw** | 18/16 + 26/17 关闭率极高，Slack Socket Mode 落地 |
| **Hermes Agent** | 64% Issue 关闭率，但桌面 + Windows 仍是结构性顽疾 |
| **CoPaw** | 修复 PR/Issue ≈ 36%，回归 Bug 24h 内响应 |
| **Moltis** | 小步快跑、企业集成 + ACP 体验双线推进 |

### 🔴 第三梯队：维护停滞 / 积压

| 项目 | 信号 | 建议 |
|------|------|------|
| **L

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目日报 · 2026-07-19

> 数据周期：2026-07-18 ~ 2026-07-19 ｜ 数据源：[HKUDS/nanobot](https://github.com/HKUDS/nanobot)

---

## 1. 今日速览

NanoBot 今日呈现 **高强度维护日** 特征：过去 24 小时内共处理 **30 个 PR**（合并/关闭 16，待合并 14）和 **7 个 Issue**（新开 3，关闭 4），但 **无新版本发布**，说明维护者仍处于"代码合流→测试稳定→再发版"的标准节奏中。今日动作高度集中在**缺陷修复与鲁棒性加固**——多个 PR 围绕 JSON 字段类型强制、消息切片死循环、UTF-8 解码、Windows 兼容等"长尾问题"展开，呈现出一次系统性的质量扫除。同时，已关闭的 #2343（context window 校验）和 #4867（Ollama 提示前缀缓存）属于长期高关注度议题的最终落地。整体健康度：**活跃且稳健**。

---

## 2. 版本发布

**今日无新版本发布。** 最近一次发版距今较短（数据中未显示新 release），合并的 16 个 PR 仍需经历集成测试后再行发版。

---

## 3. 项目进展

今日已关闭/合并的 16 个 PR 中，以下变更对项目走向有较显著影响：

| PR | 类型 | 影响 |
|---|---|---|
| [#4925](https://github.com/HKUDS/nanobot/pull/4925) | **fix(agent)**: 工具结果过大时的引导恢复 | 直接回应 #2343 的诉求——当模型单次工具输出超过下次请求容量时，用有界指令替换原始结果并让 Agent 进入"自我收敛→重试"流程，是核心 Agent loop 的关键增强。 |
| [#4621](https://github.com/HKUDS/nanobot/pull/4621)、[#4626](https://github.com/HKUDS/nanobot/pull/4626)、[#4627](https://github.com/HKUDS/nanobot/pull/4627) | **memory 子系统三件套** | 引入"归档事实的 provenance 上下文"、"可选 eager consolidation"、"consolidation 时保留投递上下文"。三者构成 Nanobot 长期记忆体系的下一阶段迭代。 |
| [#4624](https://github.com/HKUDS/nanobot/pull/4624) | **feat(subagent)**: 聚合结果模式 | 新增 `aggregated` 模式，subagent 完成后按 `session_key` 缓冲，结束后一次性发布汇总消息，对多 subagent 协作场景体验提升明显。 |
| [#4937](https://github.com/HKUDS/nanobot/pull/4937) | **Render 一键部署蓝图** | 新增 Render Blueprint，将 gateway + WebUI 打包为单一 web 服务并支持 session/memory 跨部署持久化，部署门槛显著降低。 |

整体判断：项目在**记忆系统、Agent 容错、部署生态**三个方向同步推进，且彼此互补，是一个明显的"基础设施层"演进周期。

---

## 4. 社区热点

> ⚠️ 数据说明：今日全部 PR 的评论数显示为 `undefined`，本节以**议题影响面**与**用户互动历史**替代纯评论数排序。

### 高讨论/高情绪 Issues

- **[#2343 — run_agent_loop 未校验 contextWindowTokens](https://github.com/HKUDS/nanobot/issues/2343)**（15 条评论，开案 2026-03-22）
  - 长期高关注议题，今日已关闭。代表用户痛点：当 `contextWindowTokens` 与 `maxTokens` 配置不当（如本案例 8192/8192 触发 36748 token 超限）时，Agent 直接报错崩溃而非优雅降级。最终通过 PR #4925 的"工具结果截断 + 重试"机制解决。

- **[#4867 — Ollama 提示前缀精确保留以启用缓存](https://github.com/HKUDS/nanobot/issues/4867)**（5 条评论，开案 2026-07-10）
  - 用户报告本地 Ollama + 32GB VRAM 场景下每次 turn 额外 +60s，因 Nanobot 在每轮拼接提示前缀时引入了微小扰动，导致 Ollama 的 KV-cache 失效。今日关闭，对本地部署用户意义重大。

### 高价值新提案

- **[#4942 — 让 Agent 管理 session 级 local triggers](https://github.com/HKUDS/nanobot/pull/4942)**：使 Agent 在对话中创建/列出/启停当前会话的触发器，是"Agent 即编排者"愿景的重要落地。
- **[#4963 — WebUI 智能体输出与应用发现打磨](https://github.com/HKUDS/nanobot/pull/4963)**：将原始嵌套工具日志统一为单行活动语言，覆盖推理、搜索、shell、文件、记忆、CLI apps、MCP、图像、subagent、自动化、目标、session、未知插件工具等全场景，是用户体验层的一次大整理。

---

## 5. Bug 与稳定性

按严重程度排列：

| 等级 | Issue / PR | 现象 | 已有修复 |
|---|---|---|---|
| 🔴 P1（数据/状态） | [#4980](https://github.com/HKUDS/nanobot/issues/4980) GitStore 在 workspace ≠ CWD 时初始化失败 | Dulwich `porcelain.add()` 接收相对路径导致自动 commit 失败 | ✅ [#4979](https://github.com/HKUDS/nanobot/pull/4979) |
| 🔴 P1（状态丢失） | [#4940](https://github.com/HKUDS/nanobot/issues/4940) legacy 文件名 session 重启后 `workspace_scope` 丢失 | WebUI 侧栏列出但 metadata 静默丢失 | ✅ [#4977](https://github.com/HKUDS/nanobot/pull/4977) |
| 🔴 P1（资源泄漏） | [#4786](https://github.com/HKUDS/nanobot/issues/4786) `SessionManager._cache` 无界增长 | 长期运行 gateway 内存膨胀 | ✅ 已关闭（具体修复 PR 未在数据中列出） |
| 🔴 P1（崩溃） | [#2343](https://github.com/HKUDS/nanobot/issues/2343) contextWindowTokens 未校验 | 超出模型上限后 400 错误直接抛给用户 | ✅ [#4925](https://github.com/HKUDS/nanobot/pull/4925) |
| 🟠 P1（启动） | [#4986](https://github.com/HKUDS/nanobot/pull/4986) [#4985](https://github.com/HKUDS/nanobot/pull/4985) triggers/jobs.json 中 `null` ms 字段触发 TypeError，整库被隔离（quarantine） | 配置中存在显式 `null` 即崩溃 | ✅ 3 个相关 PR（#4983/#4985/#4986）已提交 |
| 🟠 P1（生命周期） | [#4978](https://github.com/HKUDS/nanobot/pull/4978) 长 exec 会话在 shutdown 时进程树未终止 | 残留子进程 | ✅ 修复 PR 已开 |
| 🟠 P1（持久化） | [#4956](https://github.com/HKUDS/nanobot/pull/4956) Session 在持久化边界未执行 2000 条消息上限 | SDK 旁路 ingest 时绕过了 cap | ✅ 修复 PR 已开 |
| 🟡 P2（死循环） | [#4981](https://github.com/HKUDS/nanobot/pull/4981) [#4982](https://github.com/HKUDS/nanobot/pull/4982) Telegram/Feishu `max_len <= 0` 时 markdown 拆分死循环 | 同 #4971 故障模式 | ✅ 修复 PR 已开 |
| 🟡 P2（编码） | [#4975](https://github.com/HKUDS/nanobot/issues/4975) Windows 非 UTF-8 locale 下 subprocess 读取线程崩溃 | CP936/GBK 环境 | ✅ [#4976](https://github.com/HKUDS/nanobot/pull/4976) |
| 🟡 P2（安全） | [#4886](https://github.com/HKUDS/nanobot/issues/4886) Docker Compose 默认授予 `SYS_ADMIN` 并关闭 AppArmor/seccomp | 容器隔离失效 | ✅ 已关闭（具体修复 PR 未在数据中列出） |

**总览**：今日新开 Bug 全部已有对应修复 PR 进入待合并状态，bug-to-fix 闭环率 **100%**，稳定性治理节奏良好。

---

## 6. 功能请求与路线图信号

- **Local triggers for agent（[#4942](https://github.com/HKUDS/nanobot/pull/4942)）**：补齐 Agent 自管理触发器能力，与 cron/heartbeat 形成"远/近/临时"三层触发体系。**路线图纳入概率：高**。
- **RTK 命令改写器（[#4854](https://github.com/HKUDS/nanobot/pull/4854)）**：opt-in 的 exec 层命令重写，在沙箱之前运行。**纳入概率：中**——标记为 conflict，需解决合并冲突。
- **Render 一键部署（[#4937](https://github.com/HKUDS/nanobot/pull/4937)）**：已合并。意味着后续 Fly.io / Railway / Vercel 等同类模板可能陆续到来。
- **WebUI 输出打磨（[#4963](https://github.com/HKUDS/nanobot/pull/4963)）**：标准化"活动语言"是 WebUI 长期演进的关键步骤。
- **Subagent 聚合结果模式（[#4624](https://github.com/HKUDS/nanobot/pull/4624)）**：已合并，预示 multi-agent 编排会被持续投资。
- **Memory opt-in eager consolidation（[#4626](https://github.com/HKUDS/nanobot/pull/4626)）**：长期记忆架构下一阶段的"快速通道"，建议关注其默认开关策略。

---

## 7. 用户反馈摘要

- **本地大模型用户体验**（[#4867](https://github.com/HKUDS/nanobot/issues/4867)）：用户明确表态"对 Ollama + 32GB VRAM **完全不可用**"。场景诉求：**提示前缀必须按字节级稳定以命中 KV-cache**。本议题关闭标志着 NanoBot 对本地推理栈的可用性迈出关键一步。
- **小内存/上下文受限场景**（[#2343](https://github.com/HKUDS/nanobot/issues/2343)）：用户配置 8192/8192 时希望减少历史消息带入而非直接报错。代表一类典型诉求：**Agent 应主动收敛而非被动失败**。PR #4925 已正面回应。
- **WebUI 侧栏状态丢失**（[#4940](https://github.com/HKUDS/nanobot/issues/4940)）：用户使用 `websocket_<uuid>.jsonl` legacy 命名后重启，session 列出但 workspace_scope 消失。诉求：**会话元数据不能因文件名格式迁移而退化**。
- **Windows CLI 体验**（[#4975](https://github.com/HKUDS/nanobot/issues/4975)）：在 CP936/GBK locale 下 UTF-8 输出触发 UnicodeDecodeError。诉求：**默认 UTF-8 跨平台一致性**。
- **容器安全基线**（[#4886](https://github.com/HKUDS/nanobot/issues/4886)）：社区要求 Docker Compose 默认开启 seccomp/AppArmor 而非放空。代表一类**"安全默认值应保守"**的稳健诉求。

满意度方向：缺陷修复密度高、长期议题陆续关闭、用户具体可复现命令都被纳入修复 → **社区满意度处于上升通道**。

---

## 8. 待处理积压

> 以下 PR 开放时间已超 48 小时，且状态非草稿，建议维护者重点关注：

| PR | 标题 | 开放天数 | 状态 |
|---|---|---|---|
| [#4854](https://github.com/HKUDS/nanobot/pull/4854) | feat(exec): add RTK command rewriter | **11 天** | conflict |
| [#4942](https://github.com/HKUDS/nanobot/pull/4942) | feat(triggers): let agents manage session-local triggers | **4 天** |

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目日报
**日期：2026-07-19** | 数据来源：[NousResearch/hermes-agent](https://github.com/nousresearch/hermes-agent)

---

## 1. 今日速览

Hermes Agent 今日呈现出 **"高强度问题收敛 + 大规模 PR 待审"** 的典型特征。过去 24 小时共有 **50 条 Issue** 和 **50 条 PR** 更新，其中 **32 条 Issue 已关闭**、**6 条 PR 已合并/关闭**，关闭率高达 64%。本周期没有新版本发布，但修复路径已基本覆盖了上周遗留的多个 P1/P2 严重 Bug。维护团队重心集中在 **Telegram/Discord Gateway 静默故障、Windows 平台兼容性、桌面端 Crash 与 Vision 模型路由** 四大领域，项目整体健康度评估为 **活跃修复中、待审压力较大**。

---

## 2. 版本发布

⚠️ **本周期无新版本发布**。当前 main 分支处于密集修复窗口期，建议用户保持 `hermes update` 自动同步。

---

## 3. 项目进展

今日共有 6 条 PR 进入合并/关闭通道，其中 4 条为实质性 Bug 修复，2 条为已合入主干的衍生工作：

| PR | 主题 | 关联 Issue | 状态 |
|---|---|---|---|
| [#67248](https://github.com/NousResearch/hermes-agent/pull/67248) | fix(gateway): 去重待处理语音转写回声 | [#61455](https://github.com/NousResearch/hermes-agent/issues/61455) | ✅ CLOSED |
| [#66984](https://github.com/NousResearch/hermes-agent/pull/66984) | fix(agent): 在 turn tail 为 tool-call 行时持久化已交付响应 | #43849 / #44100 | ✅ CLOSED |
| [#67240](https://github.com/NousResearch/hermes-agent/pull/67240) | 同上主题（kshitijk4poor 重提交版本） | 同上 | ✅ CLOSED |
| [#67241](https://github.com/NousResearch/hermes-agent/pull/67241) | fix(telegram): 原因无关的卡死恢复看门狗 + 有界 drain | [#66377](https://github.com/NousResearch/hermes-agent/issues/66377) | ✅ CLOSED |
| [#61519](https://github.com/NousResearch/hermes-agent/pull/61519) | 同主题初版（yu-xin-c） | 同 #61455 | ✅ CLOSED（被 #67248 取代） |
| [#67243](https://github.com/NousResearch/hermes-agent/pull/67243) | xAI Grok OAuth 多 profile 单次刷新令牌共享存储 | [#65394](https://github.com/NousResearch/hermes-agent/issues/65394) | ✅ CLOSED（not-planned） |

**关键推进：**
- **Telegram Gateway "静默失聪"长期故障** [#66377](https://github.com/NousResearch/hermes-agent/issues/66377) 被 [#67241](https://github.com/NousResearch/hermes-agent/pull/67241) 关闭——这是项目近三个月最棘手的高优先级可靠性问题之一。
- **Voice 转写重复投递问题** [#61455](https://github.com/NousResearch/hermes-agent/issues/61455) 经历 #61519 → #67248 两代修复并最终合入。
- **会话持久化不变量**（"delivered final_response ⇒ assistant row in transcript"）的第二轮加固已合入主干。

---

## 4. 社区热点

按评论数排序的最受关注 Issues：

1. **🥇 [#38216](https://github.com/NousResearch/hermes-agent/issues/38216)** — *Hermes Desktop v40.9.3 在 Windows 11 启动崩溃（0x80000003 断点异常）* — **10 条评论**，已关闭。这是历史最久的一条（P1 级），报告者为社区用户 nparkison，反映 Desktop 在 Win11 + AMD Ryzen 平台下的兼容性顽疾。

2. **🥈 [#66829](https://github.com/NousResearch/hermes-agent/issues/66829)** — *桌面端即使主模型原生支持 Vision，仍强制走辅助视觉模型做预处理* — **7 条评论**，OPEN。linfeng961 提出："用户为主模型付费买了 vision 能力，结果主模型只拿到文字描述"——这是模型路由的成本与体验冲突。

3. **🥉 [#66616](https://github.com/NousResearch/hermes-agent/issues/66616)** — *Skills 索引 29.8h 过期（阈值 26h），自动探针失败* — **6 条评论**，OPEN。自动化巡检机器人 nousbot-eng 触发，反映了 Skills Hub `/docs/api/skills-index.json` 的定时重建工作流存在稳定性缺口。

4. **[#66950](https://github.com/NousResearch/hermes-agent/issues/66950)** — *Hermes 身份/记忆文件加载成功，但规则遵从是概率性的，且默认 soul-guard 文件编辑守卫形同虚设* — **5 条评论**，已关闭。这是关于 **Agent 行为对齐可靠性** 的深层次讨论，触及 SOUL.md/MEMORY.md 加载机制与实际合规之间的鸿沟。

5. **[#67120](https://github.com/NousResearch/hermes-agent/issues/67120)** — *更新后通过 SSH 改模型不再传播到 Telegram gateway 现存会话* — **3 条评论**，OPEN。回归类问题，影响实时切换模型的工作流。

**背后诉求分析：** 社区当前呼声集中在三件事——**平台稳定性（Windows）**、**配置变更的实时传播**、**主模型能力不被辅助模型"截胡"**。

---

## 5. Bug 与稳定性

### 🔴 P0/P1 严重（建议立即修复）

| Issue | 标题 | 组件 | 平台 | 修复 PR |
|---|---|---|---|---|
| [#38216](https://github.com/NousResearch/hermes-agent/issues/38216) | Desktop 启动崩溃 0x80000003 | comp/desktop | Windows | ❓ |
| [#66377](https://github.com/NousResearch/hermes-agent/issues/66377) | Telegram 重连阶梯中途卡死，gateway 静默失聪 | comp/plugins | Telegram | ✅ [#67241](https://github.com/NousResearch/hermes-agent/pull/67241) |
| [#66994](https://github.com/NousResearch/hermes-agent/issues/66994) | 安装未完成错误（install.ps1 行 1619） | comp/cli | Windows | ❌ |
| [#67000](https://github.com/NousResearch/hermes-agent/issues/67000) | 安装器日志报错 | comp/cli | Windows | ❌ |
| [#67251](https://github.com/NousResearch/hermes-agent/pull/67251) | **桌面端 v0.17.0 启动崩溃（RangeError 无限递归）** | comp/desktop | 通用 | 🟡 PR 待合 |

### 🟠 P2 中等（影响功能）

- [#66829](https://github.com/NousResearch/hermes-agent/issues/66829) 辅助视觉模型路由 — OPEN，待 repro
- [#67233](https://github.com/NousResearch/hermes-agent/issues/67233) Telegram 无法发图给 LLM — CLOSED（已修复）
- [#66641](https://github.com/NousResearch/hermes-agent/issues/66641) `_resolve_task_provider_model` 忽略 `key_env` → 401 — CLOSED
- [#66755](https://github.com/NousResearch/hermes-agent/issues/66755) 多模态内容 list 触发 TypeError — CLOSED
- [#67120](https://github.com/NousResearch/hermes-agent/issues/67120) 模型变更不传播到 Telegram 现存会话 — OPEN
- [#67187](https://github.com/NousResearch/hermes-agent/issues/67187) MCP 暂停 server 重连后不重新注册工具 — OPEN
- [#51448](https://github.com/NousResearch/hermes-agent/issues/51448) Desktop + LM Studio 原生 Windows 失灵（WSL 下正常） — OPEN
- [#65631](https://github.com/NousResearch/hermes-agent/issues/65631) Provider 错误 SSE 被误判为"空流"无限重试 — OPEN
- [#67083](https://github.com/NousResearch/hermes-agent/issues/67083) 跨 Telegram 线程的 `HERMES_SESSION_KEY` 串扰 — CLOSED
- [#67041](https://github.com/NousResearch/hermes-agent/issues/67041) Discord `/queue` 不接受图片 — CLOSED
- [#66406](https://github.com/NousResearch/hermes-agent/issues/66406) Dashboard 改模型写入默认 profile — CLOSED
- [#66356](https://github.com/NousResearch/hermes-agent/issues/66356) 自更新失败导致 Desktop 永锁 — CLOSED
- [#66957](https://github.com/NousResearch/hermes-agent/issues/66957) `hermes update` 用 `git reset --hard` 致 `.git` 膨胀 — CLOSED

### 🟡 P3 低（体验优化）

- [#67158](https://github.com/NousResearch/hermes-agent/issues/67158) CLI lockfile 未清理，多实例运行产生幽灵锁
- [#67159](https://github.com/NousResearch/hermes-agent/issues/67159) Windows cmd.exe 下 CJK 渲染鬼影
- [#67177](https://github.com/NousResearch/hermes-agent/issues/67177) 长更新阶段无流式进度（已在 [#67251](https://github.com/NousResearch/hermes-agent/pull/67251) 改进）

**稳定性趋势：** 桌面端 / Windows / Telegram 是 Bug 三大温床；Vision 模型与会话状态是第二高频故障域；**好消息是 P1 中最难的静默失聪问题已被 [#67241](https://github.com/NousResearch/hermes-agent/pull/67241) 终结**。

---

## 6. 功能请求与路线图信号

**🟢 已有 PR 跟进、可能纳入下个版本：**

| 提案 | PR 状态 | 路线图信号 |
|---|---|---|
| **Skills 时间元数据 + GC** [#67242](https://github.com/NousResearch/hermes-agent/pull/67242) | OPEN | 引入 `created_at`/`expires_at` 字段，规范 skills 生命周期管理 |
| **Desktop 性能审计批次** [#67245](https://github.com/NousResearch/hermes-agent/pull/67245) / [#67247](https://github.com/NousResearch/hermes-agent/pull/67247) | OPEN | 侧边栏会话切片批量读取、resume 单 SELECT——侧栏性能提升 |
| **Slack 斜杠命令命名空间** [#66163](https://github.com/NousResearch/hermes-agent/pull/66163) | OPEN | 解决与其它 Slack App 共存时的命令路由冲突 |
| **桌面端多语言（德语）** [#67077](https://github.com/NousResearch/hermes-agent/pull/67077) | OPEN | i18n 体系扩展 |
| **Gateway Agent 执行器池可配置** [#65740](https://github.com/NousResearch/hermes-agent/pull/65740) | OPEN | `gateway.agent_executor_workers` 暴露，默认保持 10 |
| **API Server 文件上传** [#67246](https://github.com/NousResearch/hermes-agent/pull/67246) | OPEN | 支持 agent 生成文件经远程 file server 投递 |
| **单 Gateway 多 Agent** [#62944](https://github.com/NousResearch/hermes-agent/pull/62944) | OPEN | 重大架构 rebased（supersedes #25660） |
| **Desktop 启动崩溃修复 + py39 兼容 + profile pin** [#67251](https://github.com/NousResearch/hermes-agent/pull/67251) | OPEN | 影响 v0.17.0 用户的高优先级 hotfix |
| **Provider 就绪性作用域化** [#67237](https://github.com/NousResearch/hermes-agent/pull/67237) | OPEN | 多 profile 全局远程模式下 provider 检测修复 |
| **相对路径 doubled tree 警告** [#67216](https://github.com/NousResearch/hermes-agent/pull/67216) | OPEN | 小模型幻觉输出 `/home/user/dev/...` 致路径重复解析 |
| **Feishu Windows SOCKS 代理修复** [#67250](https://github.com/NousResearch/hermes-agent/pull/67250) | OPEN | Clash/V2Ray 用户 WebSocket 通道修复 |

**🆕 今日新提案（尚无 PR）：**
- **智能模型路由** [#66860](https://github.com/NousResearch/hermes-agent/issues/66860) — 按任务复杂度自动选模型（CLOSED，not-planned，标记为"非计划"）
- **角色化子 agent（继承 SOUL.md + skills + tools）** [#66819](https://github.com/NousResearch/hermes-agent/issues/66819) — 多业务场景用户强烈需求（CLOSED，duplicate）
- **LM Studio JIT 加载** [#67015](https://github.com/NousResearch/hermes-agent/issues/67015) — 不被占用的 VRAM 给后续模型腾位（CLOSED，duplicate）

**判断：** [#67241](https://github.com/NousResearch/hermes-agent/pull/67241)（Telegram 恢复看门狗）、[#67251](https://github.com/NousResearch/hermes-agent/pull/67251)（Desktop 崩溃修复）、[#67245](https://github.com/NousResearch/hermes-agent/pull/67245) + [#67247](https://github.com/NousResearch/hermes-agent/pull/67247)（桌面性能）是下一版本最可能的三个核心变更点。

---

## 7. 用户反馈摘要

**🎯 真实痛点：**

1. **多业务用户身份切换困难** — [#66819](https://github.com/NousResearch/hermes-agent/issues/66819) 报告者 antonbru 是管理营销代理、出租物业、网站开发三个业务的"重度用户"，他非常喜欢 profile 系统保持上下文干净，但始终撞墙在 *跨 profile 委托时无法继承子 profile 的 SOUL/skills/tools* 上。这暴露了 Hermes 在"组织级使用"场景下的能力空白。

2. **Windows 用户被反复"劝退"** — 安装器问题 [#66994](https://github.com/NousResearch/hermes-agent/issues/66994)、[#67000](https://github.com/NousResearch/hermes-agent/issues/67000)、lockfile 幽灵锁 [#67158](https://github.com/NousResearch/hermes-agent/issues/67158)、cmd.exe CJK 渲染鬼影 [#67159](https://github.com/NousResearch/hermes-agent/issues/67159)、启动崩溃 [#38216](https://github.com/NousResearch/hermes-agent/issues/38216)——Windows 是 Hermes 项目长期可靠性债务的高发区。

3. **Telegram Bot"假活"焦虑** — kbarkins 在 [#66377](https://github.com/NousResearch/hermes-agent/issues/66377) 中描述：`hermes-gateway` 进程 "active (running)"

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目日报 — 2026-07-19

## 1. 今日速览

PicoClaw 项目今日处于**低活跃度、自动化清理主导**的状态。过去 24 小时共记录 4 条 Issue 更新和 12 条 PR 更新，但其中绝大部分（8 条 PR）属于依赖升级或被 stale-bot 自动关闭的归档操作，无新版本发布，也没有高互动讨论。值得关注的是，今日新报出 2 个真实 Bug（Issue #3265、#3264），其中 SplitMessage 死循环属于潜在 DoS 风险，需要维护者尽快介入。整体来看，项目主要靠 Dependabot 和社区 PR 推进，核心维护者响应节奏偏慢，stale 标签高频出现是社区健康度的一个隐忧。

---

## 2. 版本发布

**本周期无新版本发布。** 过去 24 小时未见任何 Release tag 或构建产物推送。

---

## 3. 项目进展

今日多数 PR 处于自动关闭或依赖升级状态，真正"向前推进"的功能性 PR 较少。重要进展如下：

### 已关闭（多为 stale-bot 自动归档，非实质合并）

- **[PR #3241](https://github.com/sipeed/picoclaw/pull/3241) `fix(auth): make OAuth refresh provider-correct and concurrency-safe`** —— 作者 As-tsaqib。该 PR 修复了 OAuth 刷新请求的并发安全与 provider 适配问题（OpenAI 改用 JSON、Google 保持 form），并对应关闭了 Issue #3239。属于安全/正确性修复，对应 Issue 也已标记 stale 关闭。
- **[PR #3242](https://github.com/sipeed/picoclaw/pull/3242) `feat(whatsapp): add native typing presence`** —— 作者 As-tsaqib。为 WhatsApp 原生通道添加 typing 指示，对应 Issue #3240 已关闭。这是一个对用户体验有明显改善的功能改进，但因 stale 归档，实际合并状态需进一步确认。
- **[PR #3200](https://github.com/sipeed/picoclaw/pull/3200) `feat(models): add configurable default fallback chain`** —— 添加模型回退链路的 Web UI 与后端持久化支持。
- **[PR #3225](https://github.com/sipeed/picoclaw/pull/3225) `Support agent-specific runtime overrides`** —— 允许在 agents.list 中定义 `max_tokens`、摘要阈值、`split_on_marker` 等 per-agent 参数。
- **[PR #3165](https://github.com/sipeed/picoclaw/pull/3165) `fix(openai_compat): recover Seed XML tool calls`** —— 恢复火山引擎豆包 Seed XML 工具调用解析，对国内 OpenAI 兼容网关用户尤为关键。
- **[PR #2937](https://github.com/sipeed/picoclaw/pull/2937) `Feat/agent collaboration`** —— 大型特性：引入内部 Agent Collaboration Bus，支持持久化邮箱、协作线程、权限感知等。属于重量级架构扩展。

> ⚠️ **注意**：上述标有 `[stale]` 的 PR 很可能由 stale-bot 自动关闭，并不等同于 maintainer 主动 merge。建议核实 GitHub 上的实际合并状态，区分"归档"与"接受"。

### 依赖自动升级（已关闭）

- **[PR #3211](https://github.com/sipeed/picoclaw/pull/3211)** —— eslint 10.4.1 → 10.6.0
- **[PR #3208](https://github.com/sipeed/picoclaw/pull/3208)** —— mautrix 0.27.0 → 0.28.1

---

## 4. 社区热点

由于 Issue/PR 数据中**点赞数全部为 0、评论普遍为 0–1 条**，今日社区讨论度处于明显低位，缺乏真正的高互动话题。可关注的相关链接：

- [Issue #3239](https://github.com/sipeed/picoclaw/issues/3239) OAuth 刷新语义不一致（1 条评论，已关闭）
- [Issue #3240](https://github.com/sipeed/picoclaw/issues/3240) WhatsApp 缺少 typing 反馈（1 条评论，已关闭）
- [PR #2937](https://github.com/sipeed/picoclaw/pull/2937) Agent Collaboration Bus（大型架构特性）

**诉求分析**：以上热度均围绕"通道质量（OAuth/WhatsApp/兼容性网关）"和"Agent 协作能力"，反映出用户希望 PicoClaw 在多通道稳定性与多 Agent 协作场景下进一步成熟。

---

## 5. Bug 与稳定性

### 🔴 高优先级

- **[Issue #3265](https://github.com/sipeed/picoclaw/issues/3265) Gateway startup fails with 'channel deltachat has unknown type deltachat'**（OPEN，今日新开）
  - 报告者：[Cipher208](https://github.com/Cipher208)
  - **影响**：即使未在 config.json 中配置 deltachat，gateway 启动也会失败 —— 这是配置无关的硬性崩溃，会阻塞所有用户的启动流程。
  - **严重程度**：🔴 高 —— 阻断 Gateway 启动，影响所有用户。
  - **是否有 fix PR**：❌ 暂无

- **[Issue #3264](https://github.com/sipeed/picoclaw/issues/3264) [BUG] SplitMessage hangs on an oversized fenced-code info string**（OPEN，今日新开）
  - 报告者：[floze-the-genius](https://github.com/floze-the-genius)
  - **影响**：`channels.SplitMessage` 在代码块 fence 的 info string 跨越切分点时可能陷入死循环（unsplit tail 永远不被消费）。这不仅是功能 Bug，更可能成为拒绝服务攻击向量。
  - **严重程度**：🔴 高 —— 死循环，无明显超时保护，存在被滥用风险。
  - **是否有 fix PR**：❌ 暂无

### 🟢 已修复/关闭的相关问题

- Issue #3239（OAuth 刷新）→ 对应 PR #3241 已关闭（stale 归档）
- Issue #3240（WhatsApp typing）→ 对应 PR #3242 已关闭（stale 归档）

---

## 6. 功能请求与路线图信号

- **[PR #3193](https://github.com/sipeed/picoclaw/pull/3193) Added simplex channel type**（OPEN，未合并）
  - 新增 SimpleX Chat 通道，扩展消息平台覆盖范围。
- **[PR #3205](https://github.com/sipeed/picoclaw/pull/3205) 9router gateway 支持 + Linux ARMv7 build target**（OPEN）
  - 用户场景明确：Raspberry Pi 3 B+ 上 9router 作为 OpenAI 兼容网关。暗示 ARM 边缘部署是真实需求。
- **[PR #3200](https://github.com/sipeed/picoclaw/pull/3200) 模型默认回退链 Web UI** 与 **[PR #3225](https://github.com/sipeed/picoclaw/pull/3225) agent 级别运行时覆盖** 共同指向"模型可观察性与可调性"方向。
- **[PR #2937](https://github.com/sipeed/picoclaw/pull/2937) Agent Collaboration Bus** —— 多 Agent 编排是明显的中长期路线图方向。

**路线图判断**：通道扩展、Agent 协作、Web 可观测性 是当前最清晰的演进轴线；但由于多 PR 因 stale 关闭，能否进入下一版本取决于维护者是否重新打开或重新 cherry-pick。

---

## 7. 用户反馈摘要

由于所有 Issue 评论数 ≤ 1，原始用户声音较稀疏，可提炼的痛点：

- **OAuth/通道语义不一致（[#3239](https://github.com/sipeed/picoclaw/issues/3239)）**：用户发现 PicoClaw 在不同 provider 下硬编码相同请求格式，缺乏 provider-aware 抽象层。
- **WhatsApp 体验不完整（[#3240](https://github.com/sipeed/picoclaw/issues/3240)）**：处理耗时较长时无 typing 反馈，体验粗糙。
- **配置无关启动崩溃（[#3265](https://github.com/sipeed/picoclaw/issues/3265)）**：用户未启用某通道，Gateway 却因此崩溃，反映配置/注册的健壮性不足。
- **消息切分死循环（[#3264](https://github.com/sipeed/picoclaw/issues/3264)）**：用户在处理带代码块的输入时遇到无限挂起。

> 综合来看，用户对"通道稳定性"与"长消息处理鲁棒性"的满意度偏低，是当前最迫切的体验短板。

---

## 8. 待处理积压

**高优先级待维护者关注**：

| 类别 | 链接 | 备注 |
|---|---|---|
| 启动崩溃 Bug | [#3265](https://github.com/sipeed/picoclaw/issues/3265) | 新报，需立即响应 |
| 死循环 Bug | [#3264](https://github.com/sipeed/picoclaw/issues/3264) | 新报，潜在 DoS |
| 安全升级 | [#3248](https://github.com/sipeed/picoclaw/pull/3248) Go 1.25.11→1.25.12 | 修复 GO-2026-5856、GO-2026-4970 两个标准库漏洞 |
| 新通道 | [#3193](https://github.com/sipeed/picoclaw/pull/3193) SimpleX | 社区长期等待 |
| 边缘部署 | [#3205](https://github.com/sipeed/picoclaw/pull/3205) 9router + ARMv7 | 真实用户场景 |
| 路由一致性 | [#3202](https://github.com/sipeed/picoclaw/pull/3202) ID normalization | 长期 stale |

> ⚠️ **风险提示**：本周期共 8 条 PR 关闭，其中大部分为 stale-bot 自动归档而非 maintainer 主动决定。建议维护者复核这些 PR 的实际价值，避免误杀有效贡献（尤其是 #2937 Agent Collaboration Bus、#3200 模型回退链、#3241/#3242 这类与活跃 Issue 关联的功能/修复），必要时重新打开并 merge。

---

*数据来源：PicoClaw GitHub 仓库 (github.com/sipeed/picoclaw)，统计窗口 2026-07-18 ~ 2026-07-19。*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报

**日期**：2026-07-19
**项目**：NanoClaw（github.com/qwibitai/nanoclaw）
**报告人**：AI 开源项目分析师

---

## 1. 今日速览

NanoClaw 在过去 24 小时呈现典型的「批量收尾 + 安全加固」节奏：18 条 Issue 中 16 条被关闭（含一批 E2E 烟雾测试和重复 feature request 的清理），仅 2 条保持 OPEN；PR 端 26 条更新里 17 条已合并/关闭，其中包括一个 GHSA 级别的安全修复 PR。整体活跃度高、维护响应及时，但 ANTHROPIC_BASE_URL path-prefix 这一问题被四个独立 PR（#1100/#1185/#1212/#1267）同时修，说明维护流程对重复 PR 的合并判别有待优化。无新版本发布。

---

## 2. 版本发布

无新版本发布。最近的 Release 未在数据中出现。

---

## 3. 项目进展

今日合并/关闭的重要 PR 集中在三条主线：

### 3.1 凭据代理兼容性修复（ANTHROPIC_BASE_URL path prefix）

四个独立 PR 都试图解决同一问题——credential-proxy 在转发请求时丢失了 `ANTHROPIC_BASE_URL` 的路径前缀，导致使用非根路径代理（如 `https://proxy.example.com/api/claude`）时出现 404：

- [#1100](https://github.com/nanocoai/nanoclaw/pull/1100) — `npulgh`
- [#1185](https://github.com/nanocoai/nanoclaw/pull/1185) — `pengchongfu`（明确针对 MiniMax 类第三方 Anthropic 兼容提供方）
- [#1212](https://github.com/nanocoai/nanoclaw/pull/1212) — `jiangyunpeng`
- [#1267](https://github.com/nanocoai/nanoclaw/pull/1267) — `kk17`

四条今日均已关闭，说明其中至少一条已被合入主干。**这是一个工程信号**：维护者可能需要对贡献指南增加「先于实现搜 Issue/PR」的流程，避免外部兼容性问题被打四个补丁。

### 3.2 Slack 设置用户体验（Onboarding UX）改进

[alipgoldberg](https://github.com/nanocoai/nanoclaw) 提交了一组聚焦 Slack 后安装卡片的 PR，体现维护者对**非技术用户入门体验**的系统性打磨：

- [#2296](https://github.com/nanocoai/nanoclaw/pull/2296) 将设置卡片分阶段标注为 Part 1 / Part 2
- [#2299](https://github.com/nanocoai/nanoclaw/pull/2299) 调整 Slack token 输入顺序，与卡片步骤对齐
- [#2303](https://github.com/nanocoai/nanoclaw/pull/2303) 增加多工作区场景下的 user_not_found 回退查找
- [#2304](https://github.com/nanocoai/nanoclaw/pull/2304) 重写 Step 1 措辞，去除 "expose / webhook server / ngrok" 等术语
- [#2305](https://github.com/nanocoai/nanoclaw/pull/2305) 在 Post-install 卡片前增加可返回确认
- [#2314](https://github.com/nanocoai/nanoclaw/pull/2314) 修复 iMessage 卡片中过期指向 `photon.im`（已变为域名售卖页）的链接，改为 `photon.codes`

### 3.3 关键 Bug 与安全修复

- [PR #2702](https://github.com/nanocoai/nanoclaw/pull/2702) — `mperraillon`：将 Slack adapter 从 HTTP Webhook 模式切换为 Socket Mode，消除公网暴露需求。
- [PR #2496](https://github.com/nanocoai/nanoclaw/pull/2496) — `SebTardif`：修复 `writeOutboundDirect()` 以 readonly 打开 DB 导致 command-gate 拒绝响应永远无法投递给用户的 SILENT FAIL。
- [PR #3077](https://github.com/nanocoai/nanoclaw/pull/3077) — `javexed`：拆分 `rate_limit_event` 与 quota，仅在真正被拒绝时中止 turn。
- [PR #3086](https://github.com/nanocoai/nanoclaw/pull/3086) — `alexandra261`：WhatsApp 发送前校验收件人 JID 是否注册。
- [PR #3084](https://github.com/nanocoai/nanoclaw/pull/3084) — `gavrielc`：清理 #3083 合入时遗留的临时诊断日志。

**综合评估**：今日 NanoClaw 在「稳定性」「安全性」「新用户上手」三个维度同时推进，是质量债集中清偿的一天。

---

## 4. 社区热点

按评论数排序的讨论最活跃条目：

| 排名 | 条目 | 类型 | 评论数 | 概要 |
|------|------|------|--------|------|
| 1 | [#2506](https://github.com/nanocoai/nanoclaw/issues/2506) | Bug | 4 | send_message 去重在 60 秒间隔内静默丢响应 |
| 2 | [#2482](https://github.com/nanocoai/nanoclaw/issues/2482) | Bug | 3 | `su -` 下 wizard 误判 systemd 缺失 |
| 3 | [#2916](https://github.com/nanocoai/nanoclaw/issues/2916) | 闲聊 | 3 | "hi there"（社区巡检时被关闭） |
| 4 | [#3016](https://github.com/nanocoai/nanoclaw/issues/3016) | Bug | 3 | `rate_limit_event` 全部记为 quota error |

**诉求分析**：
- **#2506 与 #3016 都属于「静默失败 + 误导日志」类**，是分布式消息系统里最让运维头疼的故障模式。两者都得到了修复 PR（#3077 解决 #3016，#2506 应在某个被合并的版本中解决），说明社区反馈有效转化为代码改进。
- **#2916 这种 "hi there" Issue** 已被维护者关闭，表明 NanoClaw 仓库近期可能受到 spam 试探，社区巡检机制工作正常。

---

## 5. Bug 与稳定性

按严重程度排列：

### 🔴 高危（安全 / 数据丢失 / 静默失败）

1. **[Issue #2506](https://github.com/nanocoai/nanoclaw/issues/2506) — send_message 去重导致响应静默丢失**（已关闭）
   触发条件：两个 turn 在 60 秒内完成，或查询流式传输中收到后续消息被合并入同一 `processQuery`。客户端超时但无错误。
   ✅ 应已有 fix 落地（Issue 已 CLOSED）。

2. **[PR #3065](https://github.com/nanocoai/nanoclaw/pull/3065) — Loopback webhook 缺少认证 (GHSA-h9g4-589h-68xv, CWE-306)**（OPEN）
   同一主机上任何非特权进程均可对 forwarded-gateway webhook 发起伪造动作请求。`QuantumBreakz` 的修复需要被优先 review。
   ⚠️ **维护者请尽快处理**。

3. **[Issue #2894](https://github.com/nanocoai/nanoclaw/issues/2894) — WhatsApp 入站媒体在 CDN 拉取失败时被静默丢弃**（已关闭）
   Baileys 抛 `Failed to fetch stream` 后 catch 块吞掉异常，附件丢失。需要重发时附带 `reuploadRequest`。

### 🟡 中危（功能异常 / 配置误判）

4. **[Issue #2482](https://github.com/nanocoai/nanoclaw/issues/2482) — systemd 误判（Proxmox LXC `su -`）**（已关闭）
5. **[Issue #1981](https://github.com/nanocoai/nanoclaw/issues/1981) — systemd 误判（headless Linux，Hetzner Ubuntu）**（**OPEN**）— 与 #2482 同根因但场景不同，**尚未看到统一修复方案**。
6. **[Issue #3016](https://github.com/nanocoai/nanoclaw/issues/3016) — 每次 `rate_limit_event` 都记为 quota error**（已关闭）— PR #3077 修复。
7. **[Issue #2784](https://github.com/nanocoai/nanoclaw/issues/2784) — container-runner 仅监测 `index.ts` 的 staleness，错过 `ipc-mcp-stdio.ts` 变更**（已关闭）。
8. **[Issue #3085](https://github.com/nanocoai/nanoclaw/issues/3085) — WhatsApp `engage_mode=mention` 仅对自动补全的 @ 触发，键入文本 @ 不触发，且 `accumulate` 策略掩盖故障**（**OPEN**）— 对应修复 PR [#3087](https://github.com/nanocoai/nanoclaw/pull/3087) 同步待审。
9. **[Issue #2517](https://github.com/nanocoai/nanoclaw/issues/2517) — MGA 引用已归档 `agent_groups`，缺取消归档与 GC**（已关闭）。
10. **[Issue #3086 已修复](https://github.com/nanocoai/nanoclaw/pull/3086)** — WhatsApp 收件人未注册时假成功。

### 🟢 低危（提示/日志改进）

- [PR #3084](https://github.com/nanocoai/nanoclaw/pull/3084) 清理 #3083 的临时诊断日志，已合并。

**稳定性信号**：高危条目几乎都已关闭或被修，OPEN 的 #3065（安全）与 #3085（功能）属于「修复已提交、待 review」状态。

---

## 6. 功能请求与路线图信号

| 需求 | 来源 | 现状 |
|------|------|------|
| 关键词驱动的预 turn 模型路由（零成本） | [#1681](https://github.com/nanocoai/nanoclaw/issues/1681), [#1679](https://github.com/nanocoai/nanoclaw/issues/1679) — `scottgl9` | 两条同主题 Issue 已 CLOSED，未见 PR。可能被驳回或合并为内部 roadmap。 |
| 顶层 `ncl` CLI：列出 / 立即运行 / 暂停 / 取消计划任务 | [#2397](https://github.com/nanocoai/nanoclaw/issues/2397) — `alexli-77` | 已 CLOSED，对应 PR 是否落地待核实。 |
| `ncl groups config` 增加 add-mount / remove-mount 命令 | [#2395](https://github.com/nanocoai/nanoclaw/issues/2395) — `alexli-77`（👍 1） | 已 CLOSED。 |
| `ncc` 主机运维/健康检查 utility skill | [PR #2971](https://github.com/nanocoai/nanoclaw/pull/2971) — `zivisaiah` | OPEN，标记为 Utility skill。 |
| Slack adapter 改用 Socket Mode | [PR #2702](https://github.com/nanocoai/nanoclaw/pull/2702) — `mperraillon` | CLOSED（含合入）。 |
| WhatsApp 收件人预校验 | [PR #3086](https://github.com/nanocoai/nanoclaw/pull/3086) | 已合并。 |

**路线图判断**：`ncl` CLI 的系列缺口（#2397 / #2395）今日双双关闭，说明维护者把「补齐运维接口」列为短中期重点；`ncc` utility skill 进入 review，是新一阶段「把运维操作沉淀为可复用 skill」的信号。Slack Socket Mode + iMessage 链接修正同时合入，意味着**公网暴露最小化**正在成为安装体验的核心主题。

---

## 7. 用户反馈摘要

提炼自 Issues / PRs 中的真实声音：

- **「作为非技术用户，Slack 卡片让人措手不及」**（[#2305](https://github.com/nanocoai/nanoclaw/pull/2305)）：用户花了 5+ 分钟粘贴 token 后撞上 stage 2 公共 URL 墙。"they've spent 5+ minutes pasting tokens, then hit a wall" — 体现维护者已听见这部分抱怨。
- **「多工作区用户从 Day 1 就会遇到 user_not_found」**（[#2303](https://github.com/nanocoai/nanoclaw/pull/2303)）：暗示 NanoClaw 的核心用户画像是「同时有工作 / 个人 workspace 的 Slack 重度用户」。
- **「WhatsApp 群聊里 typed @name 不触发，是反直觉的」**（[#3085](https://github.com/nanocoai/nanoclaw/issues/3085)）：与移动端聊天习惯冲突。
- **「Proxmox LXC / headless Linux 上的 systemd 误判」**（[#2482](https://github.com/nanocoai/nanoclaw/issues/2482), [#1981](https://github.com/nanocoai/nanoclaw/issues/1981)）：容器/无头部署场景被反复提及，#1981 至今仍 OPEN 是一个遗留痛点。
- **「rate_limit_event 噪音让日志没法看」**（[#3016](https://github.com/nanocoai/nanoclaw/issues/3016)）：一位用户报告一周产生 82 条误报，每次都对应正常返回——典型「可信度被反复侵蚀」类反馈。
- **「smoke test / 闲聊型 Issue」**（[#2897](https://github.com/nanocoai/nanoclaw/issues/2897), [#2898](https://github.com/nanocoai/nanoclaw/issues/2898), [#2916](https://github.com

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目动态日报

**日期：2026-07-19**
**数据来源：GitHub (github.com/nullclaw/nullclaw)**

---

## 1. 今日速览

NullClaw 项目今日（2026-07-19）整体活跃度处于**低位**。过去 24 小时内仅产生 1 条 Issue 更新，无 PR 提交，无新版本发布。该 Issue（#868）属于历史遗留的构建环境 Bug，由社区用户在 Android/Termux 平台上报告并持续跟进讨论。从单日数据看，项目开发节奏明显放缓，短期内没有可见的合并进展。

---

## 2. 版本发布

**无新版本发布。**

最近一个可识别的版本为 `v2026.4.17`（由 Issue #868 中报告者提及），距今已接近三个月无新版本产出。建议关注者留意后续是否有版本节奏调整。

---

## 3. 项目进展

**今日无 PR 合并/关闭。**

无任何代码合入或关闭的 PR，项目代码主干今日未见推进。短期内项目向前迈进的步伐几乎为零。

---

## 4. 社区热点

**今日讨论最活跃的 Issue：**

- **[#868](https://github.com/nullclaw/nullclaw/issues/868)** — *\[bug\] zig build fails on Android/Termux (aarch64) with AccessDenied on options.zig linkat*
  - 作者：@NOTJuangamer10
  - 创建：2026-04-23 ｜ 最近更新：2026-07-18
  - 评论数：7 ｜ 👍：0

**分析：** 这是近 24 小时唯一活跃的讨论点，已经积累了 7 条评论，热度集中在 Zig 工具链在移动端（Android via Termux）的兼容性问题。虽然点赞数为 0，但其持续的评论互动表明报告者及关注者希望推动修复。该 Bug 的曝光反映出社区中存在移动端/边缘平台用户群，其需求尚未被官方节奏有效响应。

---

## 5. Bug 与稳定性

| 严重程度 | Issue | 描述 | 平台 | 状态 |
|---------|-------|------|------|------|
| 🔴 高 | [#868](https://github.com/nullclaw/nullclaw/issues/868) | `zig build -Doptimize=ReleaseSmall` 在 Android/Termux aarch64 上链接临时文件失败，错误为 `AccessDenied` 涉及 `options.zig` `linkat` | Android / Termux | OPEN，**暂无修复 PR** |

**详情：** 用户在小米 Redmi Note 9（LineageOS 22.2）上使用 Termux 安装的 Zig 0.16.0 构建 NullClaw `v2026.4.17` 时，构建流程在链接阶段失败。该问题既影响开发体验，也直接阻断了 Android 平台用户的使用路径。距首次报告已近 3 个月，但目前没有任何关联 PR 进入修复流程。

---

## 6. 功能请求与路线图信号

**今日无新增功能请求。**

由于今日 Issue 流极为有限（仅 1 条 Bug 报告），无法从中提取新增的功能需求信号。建议持续观察下一阶段社区讨论以评估路线图走向。

---

## 7. 用户反馈摘要

- **真实使用场景：** 报告者（@NOTJuangamer10）在低端 Android 设备（小米 Redmi Note 9）上通过 Termux 环境尝试构建 NullClaw，说明项目存在**移动端/资源受限平台**用户群。
- **痛点：** Zig 0.16.0 工具链在 Termux 上的 `linkat` 系统调用存在权限/沙箱相关问题，导致 `options.zig` 等关键产物无法链接，构建完全中断。
- **满意度/期望：** 虽无点赞，但从评论活跃度看，报告者愿意持续跟进并提供调试细节（环境、设备、Zig 版本、错误日志），体现出**强烈的修复意愿**，对官方响应有较高期待。
- **现有数据局限：** 由于无法获取评论原文细节，其他社区声音（如是否有 workaround 提议、是否有官方维护者参与）尚不明确。

---

## 8. 待处理积压

| 类型 | 编号 | 标题 | 创建至今 | 提醒 |
|------|------|------|---------|------|
| Bug | [#868](https://github.com/nullclaw/nullclaw/issues/868) | zig build fails on Android/Termux (aarch64) with AccessDenied | ~87 天 | **高优先级提醒**：该 Issue 已存在近 3 个月，评论区仍有持续讨论，但无任何维护者响应或修复 PR 进入流程。建议维护者尽快评估移动端构建支持是否纳入下一版本，并给出明确反馈或时间表，避免社区沉默导致贡献者流失。 |

---

## 项目健康度评估

| 维度 | 评估 | 说明 |
|------|------|------|
| 开发节奏 | ⚠️ 低 | 近 24 小时无 PR、无 Release |
| 社区响应 | ⚠️ 滞后 | 关键 Issue 近 3 个月无维护者回应 |
| Bug 处理 | 🔴 不足 | 唯一活跃 Issue 至今无 fix PR |
| 版本输出 | ⚠️ 停滞 | 最近版本距今约 3 个月 |

**总体判断：** NullClaw 当下处于**活跃度低谷期**。社区贡献意愿仍存在（如 #868 的持续跟进），但官方维护侧的响应明显不足。建议项目维护者集中精力清理积压 Bug、重启版本发布节奏，以恢复社区信心。

---

*本日报基于公开 GitHub 数据生成，仅反映 2026-07-19 当日项目动态快照。*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报

**日期：2026-07-19**
**项目：nearai/ironclaw**
**数据周期：过去 24 小时**

---

## 1. 今日速览

IronClaw 今日呈现**高强度架构重构期**的典型特征：过去 24 小时内共有 **50 条 PR 更新**（30 条已合并/关闭）、**5 条 Issue 更新**，整体活跃度极高。核心贡献者 `ilblackdragon` 集中推进「Reborn 架构简化」Slice B/C 系列工作，重点围绕 `host_api::Resolution` 重构、`authorize()` 授权收敛、`SafeSummary` 单一化定义、`RuntimeLane` 闭包化等关键改造，已连续合入 9 条相关 PR。同时 `hanakannzashi` 推进 Reborn 发布工作流的编译验证流程。社区层面出现一个**安全相关的重要报告**（MCP 头部 Bearer Token 明文持久化），以及繁体中文本地化、Agent-Market 部署分支上游同步等多条社区驱动需求。整体项目健康度良好，但 API 破坏性变更累计较多，需重点关注迁移影响。

---

## 2. 版本发布

⚠️ **无新版本发布。**

但需注意 PR #5598（[ironclaw-ci[bot] chore: release](https://github.com/nearai/ironclaw/pull/5598)）仍处于 OPEN 状态，提议以下版本变更：

| Crate | 当前版本 | 目标版本 | 兼容性 |
|---|---|---|---|
| `ironclaw_common` | 0.4.2 | 0.5.0 | ⚠ API 破坏性变更 |
| `ironclaw_safety` | 0.2.2 | 0.2.3 | ✓ 兼容 |
| `ironclaw_skills` | 0.3.0 | 0.4.0 | ⚠ API 破坏性变更 |
| `ironclaw` | 0.24.0 | 0.29.1 | — |

`ironclaw_common` 存在 failure compact 等破坏性变更，建议下游集成方等待官方迁移说明后再升级。

---

## 3. 项目进展

### 🚀 架构简化（Reborn / Slice B & C）——本日核心推进

由 `ilblackdragon` 主导的架构简化工作今日密集合入 9 条 PR（按合入顺序）：

| PR | 主题 | 影响范围 |
|---|---|---|
| [#6233](https://github.com/nearai/ironclaw/pull/6233) | Slice C W1a：`Authorized` seal 激活 + `RuntimeLane::from_runtime_kind` | 能力路径前置 |
| [#6234](https://github.com/nearai/ironclaw/pull/6234) | 删除 `trust_decision` 死字段（§1.1 mechanism 3） | 清理 |
| [#6235](https://github.com/nearai/ironclaw/pull/6235) | **Slice B**：部署模式改为配置数据，消除 `LocalDev*` 类型家族 | 重大简化 |
| [#6236](https://github.com/nearai/ironclaw/pull/6236) | `SafeSummary` 单一化定义（turns + memory_native → host_api） | 安全关键 |
| [#6237](https://github.com/nearai/ironclaw/pull/6237) | `host_api` result-record 词汇表（`GateRecord` / `DenyRecord`） | §5.2.9 |
| [#6238](https://github.com/nearai/ironclaw/pull/6238) | DTO-collapse 棘轮测试（冻结 mirror DTOs） | 防滑移 |
| [#6239](https://github.com/nearai/ironclaw/pull/6239) | **Slice C W1b**：`authorize()` 委托脚手架抽取 | **安全关键** |
| [#6240](https://github.com/nearai/ironclaw/pull/6240) | `RuntimeAdapter` dyn 闭包为 `RuntimeLane` match | 热路径优化 |
| [#6242](https://github.com/nearai/ironclaw/pull/6242) | `CapabilityOutcome → Resolution` 映射（§3/§5.3） | 映射产物 |
| [#6243](https://github.com/nearai/ironclaw/pull/6243) | 持久化 `GateRecordStore`（§5.2.9） | 状态恢复 |

**进展评估**：架构简化 §3/§4/§5.2.9/§9 多个段落已落地，§5.3 词汇表达成阶段 1（[PR #6254](https://github.com/nearai/ironclaw/pull/6254)）。整体向「DTO 收敛、动态分派消除、授权单一入口」目标稳步推进，**项目向前迈进了实质性一步**。

### 🔧 发布与 CI 基础设施

- [#6188](https://github.com/nearai/ironclaw/pull/6188) — 使 tag-driven release workflow 改为 Reborn 编译专属（#6160 配套），保留 legacy DAG 可见性但硬禁用其 plan 根，便于回滚。风险等级 medium。
- [#6176](https://github.com/nearai/ironclaw/pull/6176) — 在 7 个目标平台上对 Reborn release 二进制进行只读预检，含 `ironclaw[.exe]` 的 `--version` 验证。风险等级 medium。

### 🧹 CLI 体验修复

- [#6211](https://github.com/nearai/ironclaw/pull/6211) — `sergeiest`（新贡献者）修复 `channels list`/`hooks list`/`logs` 三个硬编码假成功 stub，改为显式 "not implemented yet" 错误，但仍保留在 `--help` 与 shell 补全中。

### 🗑️ 关闭的非 Reborn 议题

- [#6143](https://github.com/nearai/ironclaw/issues/6143) — 提议「将 Reborn 提升为 canonical `ironclaw` CLI 并将 v1 隔离为 `ironclaw-v1`」的滚动迁移策略已**关闭**。

---

## 4. 社区热点

### 🔥 最受关注的 Issue

| 排名 | Issue | 评论数 | 👍 | 关注点 |
|---|---|---|---|---|
| 1 | [#6158 zh-TW 本地化](https://github.com/nearai/ironclaw/issues/6158) | 2 | 0 | 用户体验/国际化 |
| 2 | [#6247 MCP Bearer Token 明文](https://github.com/nearai/ironclaw/issues/6247) | 0 | 0 | **安全** |
| 3 | [#6249 Reborn extensions-management API 对齐](https://github.com/nearai/ironclaw/issues/6249) | 0 | 0 | 平台一致性 |
| 4 | [#6248 Reborn 凭据预检](https://github.com/nearai/ironclaw/issues/6248) | 0 | 0 | 安全/可用性 |

**诉求分析**：
- **#6158** 是过去 24 小时评论最多的 Issue，由 `PeterDaveHello` 提出，反映了繁体中文用户在 WebUI v2 中被迫降级到简体中文或英文的痛点。
- **#6247 / #6248** 来自社区贡献者 `kirikov` 与 `henrypark133`，聚焦 MCP 凭据管理与 OAuth 拒绝生命周期，是社区对生产化部署的真实反馈。
- **#6249** 由 `kirikov` 关注的是 v1 gateway 与 Reborn 二进制之间的 API 一致性，属于平台工程诉求。

### 🔥 最受关注的 PR

| 排名 | PR | 关注点 |
|---|---|---|
| 1 | [#6244 Agent-Market 部署分支](https://github.com/nearai/ironclaw/pull/6244) | 商业生态接入 |
| 2 | [#6251 OAuth 拒绝生命周期通道中立化](https://github.com/nearai/ironclaw/pull/6251) | 安全/工作流 |
| 3 | [#6241 Slice C W1c — resume/auth-resume/spawn 路由](https://github.com/nearai/ironclaw/pull/6241) | 架构收敛 |
| 4 | [#6253 交互式架构浏览器 + 图表技能](https://github.com/nearai/ironclaw/pull/6253) | 文档/工具 |

---

## 5. Bug 与稳定性

| 严重度 | 议题 | 描述 | 是否有 Fix PR |
|---|---|---|---|
| 🔴 **高（安全）** | [#6247](https://github.com/nearai/ironclaw/issues/6247) | `McpServerConfig.headers` 中 `Authorization: Bearer …` 以**明文**序列化进 `mcp_servers` settings 行（未加密 DB 备份/导出可见），且 per-job worker mount 同样明文 | ❌ 暂无 |
| 🟡 中 | [#6248](https://github.com/nearai/ironclaw/issues/6248) | 凭据预检缺失：在 approval gate 与 sandbox 启动之间未调用 `RuntimeCredentialAccountResolver::has_account` 探测 `ProductAuthAccount`，已被 auth_resume 设计阻塞 | ❌ 阻塞中 |
| 🟡 中 | [#6249](https://github.com/nearai/ironclaw/issues/6249) | `ironclaw-reborn` 独立二进制缺少 v1 gateway 的 `/api/extensions/install`、`/api/extensions/{name}/activate`、`PATCH /api/extensions/{name}` 端点 | ⚠ 部分由 [#6244](https://github.com/nearai/ironclaw/pull/6244) 覆盖 |
| 🟢 低 | [#6211](https://github.com/nearai/ironclaw/pull/6211) | CLI 中三个硬编码 stub 命令（`channels list`、`hooks list`、`logs`）输出假成功数据 | ✅ 已有 fix PR |

**安全建议**：`McpServerConfig.headers` 明文持久化是本日最值得关注的稳定性/安全问题，建议维护者优先处理（参考 Slack 凭据、gsuite OAuth 等同源问题）。

---

## 6. 功能请求与路线图信号

| 请求 | Issue | 与现有 PR 的关联 | 入版本可能性评估 |
|---|---|---|---|
| 繁体中文（zh-TW）本地化 | [#6158](https://github.com/nearai/ironclaw/issues/6158) | 无相关 PR | 🟢 **高**——i18n 字符串通常低风险 |
| Reborn `extensions-management` API 对齐 v1 | [#6249](https://github.com/nearai/ironclaw/issues/6249) | [#6244](https://github.com/nearai/ironclaw/pull/6244) 部分覆盖 | 🟡 中——取决于 Reborn 路线图 |
| 凭据预检（credential preflight） | [#6248](https://github.com/nearai/ironclaw/issues/6248) | 阻塞于 auth_resume 设计 | 🟡 中 |
| OAuth 拒绝生命周期通道中立化 | [#6251](https://github.com/nearai/ironclaw/pull/6251) | — | 🟢 **高**——已有 PR |
| MCP 凭据加密 | [#6247](https://github.com/nearai/ironclaw/issues/6247) | 无 | 🟢 **高（安全驱动）** |
| 交互式架构浏览器 + 架构图技能 | [#6253](https://github.com/nearai/ironclaw/pull/6253) | — | 🟢 高 |
| §11.9 能力状态机编译期穷尽性测试规范 | [#6252](https://github.com/nearai/ironclaw/pull/6252) | — | 🟢 高 |

---

## 7. 用户反馈摘要

**Issue #6158（zh-TW 本地化）评论摘录**（来自 `PeterDaveHello`）：
- **痛点**：WebUI v2 仅有 zh-CN，对于浏览器首选 zh-TW 的用户而言被迫降级到简体中文或英文，缺乏合适区域选项。
- **场景**：服务于繁体中文用户群体的本地化体验诉求。
- **态度**：建设性提案，语气中性，暂无负面反馈。

**Issue #6247（MCP 凭证明文）隐含诉求**：
- 社区贡献者 `kirikov` 关注 MCP server headers 的凭据生命周期，指出明文持久化会泄露至 DB 备份/导出，体现对**生产级安全合规**的关注。

**Issue #6248（凭据预检）隐含诉求**：
- `henrypark133` 提出在审批前与 sandbox 启动前批量探测 OAuth account，体现对**延迟优化与失败前置**的工程诉求。

**新贡献者信号**：本日 PR #6211 来自新贡献者 `sergeiest`，显示出项目的入门友好度正在改善。

---

## 8. 待处理积压

| 类型 | 编号 | 标题 | 风险 |
|---|---|---|---|
| 🔴 高优先级 PR | [#5598](https://github.com/nearai/ironclaw/pull/5598) | `ironclaw` 0.24.0 → 0.29.1 release（待合并） | 包含 API 破坏性变更，需谨慎评审 |
| 🟡 中优先级 PR | [#6176](https://github.com/nearai/ironclaw/pull/6176) | 7 目标平台 Reborn release 二进制预检 | 阻塞 Reborn release |
| 🟡 中优先级 PR | [#6188](https://github.com/nearai/ironclaw/pull/6188) | release workflow 改为 Reborn compile-only | 阻塞 Reborn release |
| 🟡 中优先级 Issue | [#6247](https://github.com/nearai/ironclaw/issues/6247) | MCP Bearer Token 明文持久化 | **安全** |
| 🟡 中优先级 PR | [#6244](https://github.com/nearai/ironclaw/pull/6244) | Agent-Market 部署分支（XL, medium risk） | 商业生态对接 |
| 🟢 低优先级 PR | [#6241](https://github.com/nearai/ironclaw/pull/6241) | Slice C W1c — 三大入口 `authorize()` 收敛 | 架构关键 |

**维护者提醒**：
- PR #5598（版本发布）已滞留 16 天仍未合并，与今天密集合入的 9 条架构 PR 形成对比，建议优先关闭或推进。
- 安全类 Issue #6247 建议尽早分配 owner，避免在 release 0.29.x 周期外泄。

---

## 📊 健康度指标

| 指标 | 数值 | 评估 |
|---|---|---|
| 24h Issue 活跃度 | 5 | 中等偏低 |
| 24h PR 活跃度 | 50 | **极高** |
| PR 合并率（24h） | 60%（30/50） | **优秀** |
| 新版本发布 | 0 | ⚠ 待跟进 |
| 安全类 Issue 数 | 2 | 需关注 |
| 新贡献者 | 1（`sergeiest`） | 🟢 良好 |
| 核心贡献者集中度 | 极高（`ilblackdragon` 单人 ~10 PR） | ⚠ 巴士因子风险 |

**总结**：IronClaw 当前处于「Reborn 架构简化」的攻坚阶段，PR 流入与合并速度均处于历史高位，代码质量与安全考量扎实。但核心贡献者高度集中、release PR 滞留、存在安全 Issue 三项需重点关注。建议维护者在推进架构 PR 的同时，关注社区贡献与发行节奏的平衡。

---

*报告生成时间：2026-07-19｜数据来源：GitHub REST API*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目日报

**日期：2026-07-19** ｜ **项目：netease-youdao/LobsterAI**

---

## 1. 今日速览

LobsterAI 今日活跃度偏低，整体处于"维护期"状态。6 条 Issues 全部为 4 月 2 日创建的 stale 长期未响应条目，由自动化 bot 触发更新，并非新增社区反馈；3 条 PR 中仅 1 条为本周期新提交（#2358），另 2 条因长期无活动被关闭。版本方面，2026.7.17 已于昨日发布，主要带来协同运行（cowork）错误信息结构化与服务部署数据持久化能力。项目健康度信号：**中等偏弱**——新功能持续推进但社区反馈通道存在显著积压。

---

## 2. 版本发布

### 🚀 LobsterAI 2026.7.17（2026-07-17 发布）

**主要变更：**
- **feat(cowork)**：在错误 UI 中展示结构化的运行失败详情（[#2348](https://github.com/netease-youdao/LobsterAI/pull/2348)）
- **feat(service deployment)**：服务部署数据持久化能力（[#2349](https://github.com/netease-youdao/LobsterAI/pull/2349)）
- **feat(skin)**：皮肤系统更新（提交被截断）

**影响评估：**
- ✅ 无破坏性变更迹象，属于增量改进
- ⚠️ "结构化错误 UI"可能改变现有错误展示逻辑，使用旧截图/文档的教程需更新
- 📦 服务部署数据持久化意味着升级后用户数据应可保留，但建议发布前核对持久化层 schema 兼容性

---

## 3. 项目进展

| 状态 | PR | 说明 |
|------|-----|------|
| 🟢 新增 OPEN | [#2358](https://github.com/netease-youdao/LobsterAI/pull/2358) | **fix(cowork)**: 会话重命名失败时给出本地化反馈提示。修复 #670。 |
| 🔴 已关闭 | [#1353](https://github.com/netease-youdao/LobsterAI/pull/1353) | Agent 技能选择器新增全选/清除功能——因长期无活动被关闭 |
| 🔴 已关闭 | [#1464](https://github.com/netease-youdao/LobsterAI/pull/1464) | IM 多实例重复校验——因长期无活动被关闭 |

**推进评估**：今日实质性推进 = **1 项**（会话重命名 UX 修复）。两个具实际价值的 PR（Agent 技能选择器优化、IM 重复校验）因 3 个月+ 无响应被关闭，属于项目**资源损耗**，建议维护者复盘 stale bot 策略。

---

## 4. 社区热点

今日 Issues/PRs 评论数普遍为 1（均为 bot 自动评论或首次回复），**真正的社区互动有限**。相对受关注的：

- **[Issue #1293](https://github.com/netease-youdao/LobsterAI/issues/1293)** — 自定义 studio 的 HTTP MCP 无法使用（👍 1）
  - 用户诉求：自定义 MCP 服务实际未在 openclaw 引擎中更新，仅 SSE 类型可用。这是 6 条中**唯一获得点赞**的 Issue，反映出 MCP 自定义是真实痛点。
- **[Issue #1302](https://github.com/netease-youdao/LobsterAI/issues/1302)** — 代码块行号显示切换功能请求
  - 用户已给出详细设计稿（含 PlainCodeWithLineNumbers 组件方案），表明社区贡献者参与度高，但维护团队未跟进。

---

## 5. Bug 与稳定性

按严重程度排序：

| 等级 | Issue | 描述 | 是否有 Fix PR |
|------|-------|------|---------------|
| 🔴 P0 | [#1296](https://github.com/netease-youdao/LobsterAI/issues/1296) | 上传 3M 长图解析时页面直接报错，**新任务持续报错导致整体不可用**——阻塞性故障 | ❌ |
| 🟠 P1 | [#1298](https://github.com/netease-youdao/LobsterAI/issues/1298) | 自定义模型连接测试通过，但输入短文本却提示"内容过长"——疑似 token 计数逻辑错误 | ❌ |
| 🟠 P1 | [#1307](https://github.com/netease-youdao/LobsterAI/issues/1307) | 关闭模型提供商编辑面板后，切换其他提供商时面板变只读，**无法继续编辑** | ❌ |
| 🟡 P2 | [#1305](https://github.com/netease-youdao/LobsterAI/issues/1305) | 删除已运行成功的定时任务后，历史记录页标题显示错误 | ❌ |

**稳定性风险提示**：#1296 涉及"整体不可用"，属于必须优先修复的 P0 级故障，但已积压 3 个月未见修复，**风险显著**。

---

## 6. 功能请求与路线图信号

| 信号强度 | 功能 | 来源 | 纳入下一版本可能性评估 |
|---------|------|------|----------------------|
| ⭐⭐⭐ | 代码块行号显示切换 | [#1302](https://github.com/netease-youdao/LobsterAI/issues/1302) | 中等——用户已提供详细实现方案，技术可行性高 |
| ⭐⭐ | 自定义 MCP（HTTP 协议）支持 | [#1293](https://github.com/netease-youdao/LobsterAI/issues/1293) | 高——但属于引擎层改造，工期较长 |
| ⭐⭐ | Agent 技能选择器全选/清除 | [#1353](https://github.com/netease-youdao/LobsterAI/pull/1353)（已关闭） | 高——方案成熟，PR 被关闭后维护者可重新采纳 |
| ⭐ | IM 多实例重复校验 | [#1464](https://github.com/netease-youdao/LobsterAI/pull/1464)（已关闭） | 高——同上，方案已具备 |

---

## 7. 用户反馈摘要

基于 stale Issues 历史评论提炼的真实痛点：

- **🔴 MCP 自定义受限**：用户希望自行接入 HTTP 协议的 MCP，但目前仅 SSE 工作正常。这反映出 LobsterAI 在 MCP 生态扩展性上**落后于行业预期**（MCP 官方主推 HTTP/Streamable）。
- **🔴 大文件/长上下文脆弱**：3M 长图解析即触发崩溃，说明图像处理管线**缺乏大小校验与降级机制**。
- **🟡 自定义模型接入门槛高**：短输入被误判为超长，提示输入校验逻辑未适配不同模型的 context window 差异。
- **🟡 UI 状态管理 Bug**：模型提供商面板的"关闭后无法再编辑"是典型的 React 状态未清理问题，影响**多模型切换工作流**。

**满意度信号**：从近 3 个月仅有 6 条活跃 Issue 来看，社区反馈量本身偏低，可能意味着：
1. 用户基数有限；
2. 用户遇到问题后未在 GitHub 反馈；
3. 或近期新功能满足了大部分需求。

---

## 8. 待处理积压

⚠️ **重点提醒**：今日更新的 6 条 Issues **全部创建于 2026-04-02**，已**积压 107 天**（超过 3 个月），维护团队应优先复盘：

| Issue | 标题 | 创建至今 | 严重度 |
|-------|------|---------|--------|
| [#1296](https://github.com/netease-youdao/LobsterAI/issues/1296) | 3M 长图解析崩溃（整体不可用） | 107 天 | 🔴 P0 |
| [#1293](https://github.com/netease-youdao/LobsterAI/issues/1293) | 自定义 HTTP MCP 无法使用 | 107 天 | 🟠 P1 |
| [#1307](https://github.com/netease-youdao/LobsterAI/issues/1307) | 模型提供商切换后只读 | 107 天 | 🟠 P1 |
| [#1298](https://github.com/netease-youdao/LobsterAI/issues/1298) | 自定义模型短输入误判 | 107 天 | 🟠 P1 |
| [#1305](https://github.com/netease-youdao/LobsterAI/issues/1305) | 定时任务历史标题错误 | 107 天 | 🟡 P2 |
| [#1302](https://github.com/netease-youdao/LobsterAI/issues/1302) | 代码块行号功能请求 | 107 天 | ✨ Feature |

**维护者建议**：
1. 立即评估 [#1296](https://github.com/netease-youdao/LobsterAI/issues/1296) P0 阻塞性问题；
2. 重新评估已关闭的 [#1353](https://github.com/netease-youdao/LobsterAI/pull/1353) 与 [#1464](https://github.com/netease-youdao/LobsterAI/pull/1464)，二者方案成熟可直接 cherry-pick；
3. 考虑调整 stale bot 的关闭阈值（当前 107 天过长），避免优质贡献者流失。

---

> 📊 **数据来源**：GitHub REST API 抓取（Issues/PRs/Releases）
> 📅 **报告生成时间**：2026-07-19

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目日报 · 2026-07-19

---

## 1. 今日速览

Moltis 项目今日整体处于**轻量活跃**状态。过去 24 小时内无新增 Issue、无新版本发布，PR 维度有 3 条更新（2 条已关闭、1 条仍待审）。活跃贡献者 2 位（`penso`、`demyanrogozhin`），其中 `penso` 在同日内关闭了 2 个 PR，涉及 Slack 集成与企业级聊天接入流程的完善。今日没有引入破坏性变更，社区互动指标（👍）较低，整体呈现典型的"小步快跑"维护节奏。

---

## 2. 版本发布

**今日无新版本发布。** 过去 24 小时未见任何 tag 或 release 推送。如需查看历史发布，请参考 [GitHub Releases 页](https://github.com/moltis-org/moltis/releases)。

---

## 3. 项目进展

今日有 **2 个 PR 被关闭**（均为合并或由作者主动关闭），覆盖两条不同产品线：

### 🔀 [PR #1157 — fix(web): support ACP-only chat setup](https://github.com/moltis-org/moltis/pull/1157) ✅
- **作者**：`penso`
- **性质**：Bug 修复 + UX 改进
- **要点**：
  - 在 LLM onboarding 流程中显示已安装的 ACP agents
  - 将"仅 ACP 设置"视为合法配置，而非错误
  - 在 session header 选择器中过滤出具备 ACP 能力的外置 agent
  - 当未配置任何 LLM 模型时，自动选择已安装的 ACP agent
  - 当选定 ACP agent 后，禁用底部 model 选择器以避免误操作
- **意义**：此项修复让纯本地、纯 ACP 架构的用户工作流成为"一等公民"，降低了对 LLM 后端的硬性依赖，对推广 agent-only 部署模式具有战略意义。

### 🔀 [PR #1159 — feat(slack): support configurable API base URL](https://github.com/moltis-org/moltis/pull/1159) ✅
- **作者**：`penso`
- **性质**：功能新增
- **要点**：
  - 在 Slack 账号配置中新增 `api_base_url` 字段，默认值为 `https://slack.com/api`
  - Slack 客户端构造、Socket Mode 启动、Events API 鉴权、外发回复、本地流式响应均统一走配置项
  - onboarding 界面同步新增"Slack API Base URL"配置项
- **意义**：这是面向企业/自托管场景的关键能力，使 Moltis 可以接入 Slack 兼容的私有 IM 网关或代理服务（例如 Mattermost 兼容层或测试桩），显著拓展 B2B 集成能力。

**整体推进评估**：项目今日在 **企业集成（Slack）** 与 **本地化 agent 体验（ACP-only）** 两条主线上各前进了一步，处于稳步迭代节奏。

---

## 4. 社区热点

| 排名 | 条目 | 状态 | 👍 | 链接 |
|---|---|---|---|---|
| 1 | PR #1158 — feat(memory): add zvec vector database memory backend | 🟢 OPEN | 0 | [#1158](https://github.com/moltis-org/moltis/pull/1158) |
| 2 | PR #1159 — feat(slack): support configurable API base URL | ✅ CLOSED | 0 | [#1159](https://github.com/moltis-org/moltis/pull/1159) |
| 3 | PR #1157 — fix(web): support ACP-only chat setup | ✅ CLOSED | 0 | [#1157](https://github.com/moltis-org/moltis/pull/1157) |

> ⚠️ **数据说明**：所有 PR 的评论数与 👍 数均显示为 0 或未提供，意味着今日尚未形成社区讨论热度，**互动深度有限**。建议维护者主动为关键 PR（如 #1158）设置标签并 @ 相关 reviewer 推动评审。

### 热点 PR 深度解读
- **PR #1158**（`demyanrogozhin`）：作者将 Zvec + redb + 自部署 llama-cpp 组合描述为 "experiment / vibe-coded"，属于社区驱动的新尝试，可能预示项目 memory 后端的多样化趋势。
- **PR #1157/#1159**：作者 `penso` 同日连推 2 个 PR，反映其在本项目中的**高频贡献者**身份。

---

## 5. Bug 与稳定性

> 今日**未新增任何 Issue**，因此无法报告用户层面的崩溃或回归报告。

基于已关闭的 PR，可识别出以下**已被修复的稳定性问题**：

| 严重程度 | 问题描述 | 修复 PR | 状态 |
|---|---|---|---|
| 🟡 中 | 当用户未配置 LLM 时，仅启用 ACP agent 会触发 onboarding 错误流程，体验不友好 | [#1157](https://github.com/moltis-org/moltis/pull/1157) | ✅ 已修复 |
| 🟢 低 | Slack 客户端默认硬编码官方 API 端点，无法对接私有/代理网关 | [#1159](https://github.com/moltis-org/moltis/pull/1159) | ✅ 已修复 |

**健康度评估**：今日没有遗留未修复的紧急缺陷报告，项目稳定性处于**良好状态**。

---

## 6. 功能请求与路线图信号

尽管今日无 Issues 提交，PR 内容本身透露出清晰的路线图信号：

### 🧠 Memory 后端多模化（潜在方向）
- **PR #1158** 引入 Zvec 向量数据库作为实验性 memory 后端（基于 `redb` 存储 + 独立 `llama-cpp` 嵌入服务）。
- **可纳入下一版本的可能性**：⭐⭐⭐（中）
- 若经过稳定性验证，未来很可能进入 `full` feature 矩阵，为用户提供 SQLite 之外的轻量级向量方案。

### 💬 Slack 企业集成深化
- **PR #1159** 的 API base URL 配置是后续支持企业 IM 代理的"前置条件"。
- **可纳入下一版本的可能性**：⭐⭐⭐⭐⭐（高，已合并）

### 🤖 ACP-first 本地化体验
- **PR #1157** 把 ACP-only 从"边缘情况"扶正为"主路径"。
- **可纳入下一版本的可能性**：⭐⭐⭐⭐⭐（高，已合并）

---

## 7. 用户反馈摘要

> 📭 今日**无 Issues 评论数据**，社区反馈维度无新增信号。

**可观察到的间接用户诉求**（来自 PR 描述）：
- 用户希望"即使没有 LLM，也能使用本地 ACP agent"——`penso` 在 PR #1157 中明确表达，这是真实的部署痛点。
- 企业自托管用户需要"自定义 Slack 端点"——`penso` 在 PR #1159 中反映，这是企业场景的典型需求。
- 社区用户（`demyanrogozhin`）开始探索非默认 memory 栈（Zvec + redb），表明用户对**可替换后端、可插拔架构**有切实需求。

---

## 8. 待处理积压

| 优先级 | 条目 | 类型 | 创建时间 | 状态 | 链接 |
|---|---|---|---|---|---|
| 🟡 中 | PR #1158 — feat(memory): add zvec vector database memory backend | 试验性新功能 | 2026-07-17 | OPEN，无评审互动 | [#1158](https://github.com/moltis-org/moltis/pull/1158) |

**维护者关注建议**：
1. **PR #1158** 已开放 2 天但无任何评论或反应，建议维护者至少表态（标记 `experimental` / `needs-review` 标签），并与作者沟通是否计划将其纳入主线 `full` feature 集合，避免社区贡献被冷落。
2. **历史 Issue/PR 池**：由于本次数据未提供 24 小时窗口外的 Issue/PR 清单，**无法评估长期积压**。建议建立对超过 30 天无响应的 Issue 周期性 review 机制。

---

## 📊 今日数据看板

| 指标 | 数值 | 趋势 |
|---|---|---|
| 新增 Issue | 0 | ➖ |
| 关闭 Issue | 0 | ➖ |
| 新增 PR | 0 | ➖ |
| 更新 PR | 3 | ⬆️ |
| 已合并/关闭 PR | 2 | ✅ |
| 待合并 PR | 1 | ⏳ |
| 新版本发布 | 0 | ➖ |
| 活跃贡献者 | 2 | ➖ |

---

## 🩺 项目健康度总结

- **代码活跃度**：⭐⭐⭐（中等，PR 维度活跃，Issue 维度静默）
- **社区互动**：⭐⭐（偏低，评论与反应数均为 0）
- **代码质量信号**：⭐⭐⭐⭐（合并的 2 个 PR 描述清晰、变更范围明确）
- **架构演进**：⭐⭐⭐⭐（企业集成、本地化部署、可插拔后端三方向均有推进）
- **风险点**：社区贡献（PR #1158）响应不足，长期可能影响外部贡献者积极性

---

*报告生成时间：2026-07-19｜数据来源：[moltis-org/moltis](https://github.com/moltis-org/moltis)*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw / QwenPaw 项目日报

**报告日期**: 2026-07-19
**数据来源**: agentscope-ai/QwenPaw GitHub Repository
**维护状态**: 活跃

---

## 1. 今日速览

CoPaw 项目今日处于**中高度活跃**状态：24 小时内产生 11 条活跃 Issue、7 条 PR 动态（6 仍待合并，1 已关闭），无新版本发布。今日的工作重心明显集中在 **Bug 修复与稳定性加固**上，至少有 3 个高严重度 Bug 已配套提交了修复 PR，体现出良好的"报告即修复"响应节奏。同时，关于记忆系统增强、CLI 可脚本化、性能优化的 PR 也表明团队在多线并行推进功能演进。

---

## 2. 版本发布

**今日无新版本发布**。最近的稳定版仍为 v2.0.0.post3，发布值班任务 Issue [#6223](https://github.com/agentscope-ai/QwenPaw/issues/6223) 已激活并进行安装验证阶段（4 小时截止窗口）。建议关注值班报告结果。

---

## 3. 项目进展

### ✅ 已关闭 PR
| PR | 说明 |
|---|---|
| [#1071](https://github.com/agentscope-ai/QwenPaw/pull/1071) | **feat: Introduce Mattermost channel integration for message** — 引入 Mattermost 消息渠道集成，作者 2niuhe。首个贡献者提交，但于 2026-07-18 关闭（距创建 2026-03-09 已近 4 个月），未合并原因需进一步确认。 |

### 🔄 关键待合并 PR（已配套 Issue）
- **[#6248](https://github.com/agentscope-ai/QwenPaw/pull/6248)** — `fix: distinguish offload vs cancel to prevent subprocess kill on deadline`，修复 [#6245](https://github.com/agentscope-ai/QwenPaw/issues/6245) 描述的会话永久阻塞回归问题。
- **[#6247](https://github.com/agentscope-ai/QwenPaw/pull/6247)** — `fix(memoryspace): catch OSError in _saved_tool_refs is_file() check`，对应 [#6246](https://github.com/agentscope-ai/QwenPaw/issues/6246) 文件名过长导致 `OSError [Errno 36]` 崩溃。
- **[#6243](https://github.com/agentscope-ai/QwenPaw/pull/6243)** — `fix(embedding): expose use_dimensions toggle for OpenAI-compatible APIs`，解决 [#6242](https://github.com/agentscope-ai/QwenPaw/issues/6242) 的 Console 维度设置未透传问题。**首个贡献者**提交。

### 🚀 功能与性能推进
- **[#6251](https://github.com/agentscope-ai/QwenPaw/pull/6251)** — `feat(cli): add scriptable environment reads`，新增 `qwenpaw env get KEY` 和 `qwenpaw env list --json`，回应 [#4641](https://github.com/agentscope-ai/QwenPaw/issues/4641) 长期诉求（5 月 23 日提出，今日获得正式响应）。
- **[#6238](https://github.com/agentscope-ai/QwenPaw/pull/6238)** — `perf(drivers): initialize handlers concurrently`，Driver 处理器并发初始化（限制 8 并发），多 MCP 配置下启动加速。
- **[#6237](https://github.com/agentscope-ai/QwenPaw/pull/6237)** — `feat(scroll): improve exchange and date-aware history recall`，滚动历史召回支持完整对话回合与日期感知。

**进展评价**：今日净推进约 5 项可识别的修复/功能闭环，团队对回归类 Bug 响应迅速，平均 24 小时内提供 PR。但 [#1071](https://github.com/agentscope-ai/QwenPaw/pull/1071) Mattermost 集成的关闭说明仍不清晰，长期未合并案例值得观察。

---

## 4. 社区热点

按评论数与互动量排序：

| 热度排名 | Issue | 评论 | 关注点 |
|---|---|---|---|
| 🥇 | [#6240](https://github.com/agentscope-ai/QwenPaw/issues/6240) | 3 | 对话末尾异常显示模型内部注释 `<!-- ⟦ NEXT_RID ...`，疑似前端未过滤或模型输出格式失控，**影响所有 Web Console 用户**。 |
| 🥈 | [#6245](https://github.com/agentscope-ai/QwenPaw/issues/6245) | 2 | Shell 命令超时导致会话永久阻塞（**#6056 修复回归**），是企业/Docker 部署场景的严重可用性问题。 |
| 🥉 | [#4641](https://github.com/agentscope-ai/QwenPaw/issues/4641) | 2 | `env set` 后子进程不可见，反映脚本化能力缺口。 |

**诉求分析**：今天的热点集中在**前端体验缺陷（#6240）** 与**长期未修复的核心机制问题（#4641，2 个月）**，显示用户最关心的是"能不能稳定、可脚本化地使用 QwenPaw"。

---

## 5. Bug 与稳定性

按严重程度排序：

### 🔴 P0 - 严重（影响会话可用性）
| Issue | 描述 | Fix PR |
|---|---|---|
| [#6245](https://github.com/agentscope-ai/QwenPaw/issues/6245) | Shell 超时后会话永久阻塞，需重启进程；属于 [#6056](https://github.com/agentscope-ai/QwenPaw/issues/6056) 的回归 | ✅ [#6248](https://github.com/agentscope-ai/QwenPaw/pull/6248) |
| [#6241](https://github.com/agentscope-ai/QwenPaw/issues/6241) | Agent 连续多轮重复输出 + `memory_search` 死循环；现有警告机制无法阻止重复 | ❌ 待修复 |

### 🟠 P1 - 高（功能失效/数据风险）
| Issue | 描述 | Fix PR |
|---|---|---|
| [#6246](https://github.com/agentscope-ai/QwenPaw/issues/6246) | `_saved_tool_refs` 文件名过长导致 `OSError [Errno 36]` 崩溃，可能因 git diff 触发 | ✅ [#6247](https://github.com/agentscope-ai/QwenPaw/pull/6247) |
| [#6242](https://github.com/agentscope-ai/QwenPaw/issues/6242) | Embedding 维度设置未透传至 OpenAI 兼容 API，因 `use_dimensions` 未暴露 | ✅ [#6243](https://github.com/agentscope-ai/QwenPaw/pull/6243) |
| [#6250](https://github.com/agentscope-ai/QwenPaw/issues/6250) | 沙箱不可用时 `SANDBOX_FALLBACK` 硬编码弹审批，无配置可跳过 | ❌ 待修复 |

### 🟡 P2 - 中（环境/部署）
| Issue | 描述 | Fix PR |
|---|---|---|
| [#6240](https://github.com/agentscope-ai/QwenPaw/issues/6240) | 对话末尾出现模型内部注释 | ❌ 待修复 |
| [#6249](https://github.com/agentscope-ai/QwenPaw/issues/6249) | 源码启动 TUI 卡在 warming 状态 | ❌ 待修复 |
| [#6239](https://github.com/agentscope-ai/QwenPaw/issues/6239) | Windows 拼接 PATH 时丢失 `;`，npm globals 丢失 | ❌ 待修复 |

**稳定性评估**：今日 Bug 修复 PR/Issue 比 = **4/11 ≈ 36%**，高于项目历史平均水平，**修复响应健康**。但 #6241 的死循环缺陷涉及核心 Agent 框架，需优先处理。

---

## 6. 功能请求与路线图信号

| 需求 | Issue / PR | 落地可能性 |
|---|---|---|
| **脚本化 env 读取** | [#4641](https://github.com/agentscope-ai/QwenPaw/issues/4641) / [PR #6251](https://github.com/agentscope-ai/QwenPaw/pull/6251) | 🟢 高 — 已有完整 PR，预期合并入下一版本 |
| **记忆隔离（项目概念）** | [#6244](https://github.com/agentscope-ai/QwenPaw/issues/6244) | 🟡 中 — 架构性变更，需路线图决策 |
| **Scroll 历史召回改进** | [PR #6237](https://github.com/agentscope-ai/QwenPaw/pull/6237) | 🟢 高 — 已有 PR |
| **Driver 并发初始化（性能）** | [PR #6238](https://github.com/agentscope-ai/QwenPaw/pull/6238) | 🟢 高 — 性能优化、低风险 |

**信号解读**：用户开始从"功能缺失"向"使用体验细化"转移——记忆隔离、脚本化、日期感知召回都指向**专业用户/集成场景**的需求深化。Mattermost 集成（#1071）的关闭可能意味着团队暂不优先做 IM 渠道扩展。

---

## 7. 用户反馈摘要

- **😟 痛点 1 — 会话被"卡死"无恢复路径**：#6245 用户反馈，Docker/Linux 环境下 shell 超时会"杀死整个会话"，必须重启进程，**企业部署中难以接受**。
- **😟 痛点 2 — 配置文件"看似生效实则失效"**：#6242 用户在 Console 设置 Embedding 维度后，OpenAI 兼容 API 仍未收到该参数，**埋藏较深，调试耗时**。
- **😟 痛点 3 — Web 界面暴露内部实现细节**：#6240 用户在生产对话中突然看到 `<!-- ⟦ NEXT_RID ...` 注释，**严重影响专业形象**。
- **😟 痛点 4 — 源码部署用户文档空白**：#6249 用户 `uv pip install -e .` 后 TUI 卡 warming，日志无明显错误，**新贡献者门槛较高**。
- **😊 满意点**：#4641 用户在 Issue 中长期跟进并提出合理建议（`env get KEY` 或 `--json`），与今日 [#6251](https://github.com/agentscope-ai/QwenPaw/pull/6251) 设计高度吻合，**显示维护者倾听长尾用户**。

---

## 8. 待处理积压

| 类别 | 编号 | 创建日期 | 待办天数 | 备注 |
|---|---|---|---|---|
| 🟡 长期 Issue | [#4641](https://github.com/agentscope-ai/QwenPaw/issues/4641) | 2026-05-23 | **57 天** | 已有对应 PR #6251，建议尽快合并 |
| 🟢 已关闭 PR | [#1071](https://github.com/agentscope-ai/QwenPaw/pull/1071) | 2026-03-09 | 131 天（创建） | Mattermost 集成未合并即关闭，建议补充关闭原因与替代方案 |
| 🟡 缺修复 PR | [#6241](https://github.com/agentscope-ai/QwenPaw/issues/6241) | 2026-07-18 | 1 天 | Agent 死循环为 P0 级，需立即响应 |
| 🟡 缺修复 PR | [#6250](https://github.com/agentscope-ai/QwenPaw/issues/6250) | 2026-07-18 | 1 天 | 沙箱治理架构问题，需要架构层面决策 |

---

## 📊 健康度总评

| 维度 | 评分 | 说明 |
|---|---|---|
| 活跃度 | ⭐⭐⭐⭐ | 11 Issues + 7 PRs，无版本日的高密度开发 |
| 响应速度 | ⭐⭐⭐⭐ | 修复 PR/Issue 比 36%，回归 Bug 当日响应 |
| 社区互动 | ⭐⭐⭐ | 评论数总体偏低，多数 Issue 0-3 评论 |
| 文档质量 | ⭐⭐ | 源码部署用户遇阻、错误提示不友好 |
| 路线清晰度 | ⭐⭐⭐⭐ | 修复-功能-性能多线推进，方向明确 |

**整体健康度：良好（Good）**，今日项目处于**积极修复与迭代周期**，无 P0 级未响应问题，#6241 的 Agent 死循环建议在下一开发窗口前重点处理。

---

*报告生成于 2026-07-19，基于 GitHub 公开数据。*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目日报 · 2026-07-19

> 数据来源：[zeroclaw-labs/zeroclaw](https://github.com/zeroclaw-labs/zeroclaw) 过去 24 小时 GitHub 动态

---

## 1. 今日速览

ZeroClaw 今日维持高强度迭代节奏：Issues/PRs 各更新 50 条，其中 11 条 Issues 已关闭、3 条 PRs 完成合并/关闭，整体问题关闭率约 22%，显示社区与维护团队仍保持有效闭环。议题与 PR 主要聚焦于 **频道适配层（Telegram/Discord/Slack/Lark/Matrix）**、**供应商与代理可靠性**、**供应链与 CI 安全加固**、**WASM 插件架构** 四大方向，无新版本发布，项目处于功能密集演进与基础设施加固并行的阶段。整体健康度良好，**P0/P1 级阻塞型 bug 均有对应修复 PR 在评审或合并中**，但仍有 4 条 P1 级 Issue 处于 OPEN 状态，需要持续关注。

---

## 2. 版本发布

无新版本发布。

---

## 3. 项目进展（今日合并/关闭的重要 PR）

由于本批次可识别的"已合并/关闭"PR 数量为 3 条，以下为今日关闭的代表性 PR（按风险等级与影响面排序）：

| PR | 标题 | 类型 | 价值 |
|---|---|---|---|
| [#7248](https://github.com/zeroclaw-labs/zeroclaw/issues/7248) (Issue 已关闭) | Persist cached input tokens and include them in cost accounting | 增强 / 计费准确性 | **计费链路补齐**：将 Anthropic、OpenAI 兼容后端的 cached prompt token 用量纳入成本核算，减少费用估算偏差 |
| [#5573](https://github.com/zeroclaw-labs/zeroclaw/issues/5573) (Issue 已关闭) | Send Emails via SMTP as a channel for scheduled tasks | 增强 / 频道 | **定时任务邮件投递闭环**：支持 cron 调度结果通过 SMTP 邮件外发，扩展了 ZeroClaw 在"周期性报告"等场景的可用性 |
| [#8056](https://github.com/zeroclaw-labs/zeroclaw/issues/8056) (Issue 已关闭) | CI: required PR gate — cargo audit, lockfile check, npm dependency review | CI / 安全门禁 | **供应链安全基线**：将 `cargo audit`、lockfile 一致性、npm 依赖审查纳入 PR 强制门禁，呼应 #7675 的硬化 CI 战略 |

**整体推进评估**：今日推进以"补齐能力 + 加固安全"为主线，并未引入破坏性架构变更，社区可见的稳健度持续上升。

---

## 4. 社区热点（评论最多 / 互动最活跃）

按评论数排序的前 7 条议题，覆盖**自动化能力可见性**、**供应链合规**、**多频道一致性**与**安全抽象**四条主线：

1. **#5862 [CLOSED · 14 评论]** — [zeroclaw 无法识别自身可执行 `cron` 的能力](https://github.com/zeroclaw-labs/zeroclaw/issues/5862)
   诉求：Agent 在被询问"每晚 8 点做某事"时，不知道自己具备 cron 工具，反映出**工具/能力自描述（capability discoverability）** 的缺口。

2. **#8177 [CLOSED · 12 评论]** — [RFC: 供应链签名 — 硬件 PGP、密封构建、SLSA provenance](https://github.com/zeroclaw-labs/zeroclaw/issues/8177)
   诉求：参照 StageX 模式，对容器镜像与发布产物实施硬件 PGP、多方仲裁、离线签名与 SLSA provenance，是 #7675 第 3 阶段的扩展。

3. **#2079 [CLOSED · 9 评论]** — [Feature: 将 GitHub 恢复为原生 channel](https://github.com/zeroclaw-labs/zeroclaw/issues/2079)
   诉求：让 Agent 能以统一的 channel 接口直接观测与操作 Issues / PRs / 评论 / 评审，减少自建 webhook 黏合代码。

4. **#6378 [CLOSED · 8 评论]** — [Discord Bot 仅在指定频道响应](https://github.com/zeroclaw-labs/zeroclaw/issues/6378)
   诉求：参考 Matrix / Nextcloud Talk 已有的 `allowed_rooms`，为 Discord channel 增加 `allowed_channels` 字段，统一频道级 ACL 范式。

5. **#6055 [OPEN · 7 评论]** — [Slack: 在首次提及时通过 conversations.replies 填充线程上下文](https://github.com/zeroclaw-labs/zeroclaw/issues/6055)
   诉求：在 `strict_mention_in_thread` 开启时，自动把线程历史回填进 Agent 上下文，避免用户每次都要重新 @。

6. **#8424 [OPEN · 7 评论]** — [RFC: 工作区相对禁止路径模式 + 可选 `.zeroclawignore`](https://github.com/zeroclaw-labs/zeroclaw/issues/8424)
   诉求：现有 `forbidden_paths` 只能屏蔽工作区外路径，无法保护 `rust-toolchain.toml`、`.env`、`config.yaml` 等敏感内文件。

7. **#9127 [OPEN · 6 评论]** — [RFC: 抽象 `KeySource` trait — 按来源/部署形态分类主密钥材料](https://github.com/zeroclaw-labs/zeroclaw/issues/9127)
   诉求：在已有 ChaCha20-Poly1305 / `#[secret]` / `#[credential_class]` 体系之上，进一步按来源（硬件/HSM/文件/KMS）对密钥进行语义分类。

**热点背后的共性诉求**：用户希望 ZeroClaw 在**"自动化边界清晰可见"**、**"安全默认值更保守"**、**"跨 channel 行为一致"** 三个维度持续收敛。

---

## 5. Bug 与稳定性

按严重程度（S0 > S1 > S2 > S3）排列，今日报告或仍在跟踪的代表性问题：

| 级别 | Issue | 描述 | 修复 PR 状态 |
|---|---|---|---|
| **S0 数据丢失/安全风险** | [#6672 (已关闭)](https://github.com/zeroclaw-labs/zeroclaw/issues/6672) | 小米 mimo-v2.5 / v2.5-pro 思维链模式下，`reasoning_content` 未在 agentic tool-call 后续轮次前传，导致上下文断裂 | 已关闭（关联修复见 PR 链） |
| **S0 数据丢失/安全风险** | [#6558 (已关闭)](https://github.com/zeroclaw-labs/zeroclaw/issues/6558) | 通义千问 Qwen3.5-plus 调用返回 `405 Method Not Allowed`，所有 provider 全失败 | 已关闭 |
| **S1 工作流阻塞** | [#8505 OPEN](https://github.com/zeroclaw-labs/zeroclaw/issues/8505) | Telegram 渠道配置后 `channels doctor` 仍报未配置，Bot 不响应（quickstart 路径） | **待修复 PR** |
| **S1 工作流阻塞** | [#8559 OPEN](https://github.com/zeroclaw-labs/zeroclaw/issues/8559) | Web Dashboard 关闭聊天窗口后 Agent 任务被误判为用户中断而停摆 | [#7759](https://github.com/zeroclaw-labs/zeroclaw/issues/7759) 在评审中 |
| **S1 工作流阻塞** | [#6002 OPEN](https://github.com/zeroclaw-labs/zeroclaw/issues/6006) | Telegram + llama.cpp 兼容 provider 组合下，消息路由未正确寻址到 assistant（已 stale，但 status:accepted） | 仍需作者响应 |
| **S2 行为降级** | [#6517 已关闭](https://github.com/zeroclaw-labs/zeroclaw/issues/6517) | Kimi + Discord 组合下，长对话触发上下文溢出后产生幻觉/话题漂移 | 已关闭 |
| **S2 行为降级** | [#6724 OPEN](https://github.com/zeroclaw-labs/zeroclaw/issues/6724) | Signal / Voice Call 启用但凭据为空时，supervisor 每 ~2 秒 crashloop | **待修复 PR** |
| **S2 行为降级** | [#7911 OPEN](https://github.com/zeroclaw-labs/zeroclaw/issues/7911) | `install.sh` 在 Android/Termux 上错误选择 generic linux aarch64 产物 | **待修复 PR** |
| **S3 小问题** | [#5862 已关闭](https://github.com/zeroclaw-labs/zeroclaw/issues/5862) | Agent 无法识别自身 cron 能力 | 已关闭 |

**额外安全加固型 PR（已合并/在评审）**：

- [#9110](https://github.com/zeroclaw-labs/zeroclaw/pull/9110) — Lark `verification_token` 比较改用 `constant_time_eq`，规避时序攻击。
- [#9113](https://github.com/zeroclaw-labs/zeroclaw/pull/9113) — OpenAI / OpenAI-compatible 流式 HTTP 客户端补齐空闲 `read_timeout`。
- [#9090](https://github.com/zeroclaw-labs/zeroclaw/pull/9090) — 在唯一一处 canonical chokepoint 强制 tool-call 配对，规避 Anthropic 400 错误。

**稳定性评估**：安全侧修复链路响应迅速；面向终端用户的 P1 阻塞 bug（Telegram 配置、Web Dashboard 中断判定）目前**均已存在对应修复 PR**，预计在下一次版本中消化。

---

## 6. 功能请求与路线图信号

**用户呼声最高的潜在新功能**：

| 主题 | 代表 Issue | 已有/相关 PR | 进入下一版本的概率 |
|---|---|---|---|
| **GitHub 原生 channel** | [#2079](https://github.com/zeroclaw-labs/zeroclaw/issues/2079) | 暂无对应实现 PR | 中（设计草案成熟，但工作量大） |
| **SearXNG 搜索 + DuckDuckGo CAPTCHA 处理** | [#5316](https://github.com/zeroclaw-labs/zeroclaw/issues/5316) | in-progress | 高（已有 status:in-progress 标记） |
| **WASM 插件用 OCI 注册中心做存储/发现** | [#7497](https://github.com/zeroclaw-labs/zeroclaw/issues/7497) | 与 [#8857](https://github.com/zeroclaw-labs/zeroclaw/pull/8857)、[#9142](https://github.com/zeroclaw-labs/zeroclaw/pull/9142) 链路相关 | 高（PR 已在评审） |
| **OpenRouter 模型回退数组** | [#8138](https://github.com/zeroclaw-labs/zeroclaw/issues/8138) | 暂无 | 中（实现面较小） |
| **Slack 线程上下文自动水化** | [#6055](https://github.com/zeroclaw-labs/zeroclaw/issues/6055) | 暂无（关联 #5992） | 中 |
| **Telegram 多消息模式** | [#8445](https://github.com/zeroclaw-labs/zeroclaw/issues/8445) | in-progress | 高 |
| **Hailo-Ollama 原生 provider** | [#9109 PR](https://github.com/zeroclaw-labs/zeroclaw/pull/9109) | PR 已提交 | 高（边缘硬件社区热点） |
| **Gateway 暴露 OpenAI Chat Completions 端点** | [#8486 PR](https://github.com/zeroclaw-labs/zeroclaw/pull/8486) | XL 改动，待作者响应 | 高（生态兼容性需求强烈） |
| **每个聊天独立切换多模型供应商的模型** | [#8600](https://github.com/zeroclaw-labs/zeroclaw/issues/8600) | 暂无 | 中 |
| **Slack / Matrix / Discord 等 channel 维度能力扩展** | [#2467](https://github.com/zeroclaw-labs/zeroclaw/issues/2467) Webhook transforms；[#6378](https://github.com/zeroclaw-labs/zeroclaw/issues/6378) Discord 频道白名单（已关闭） | 部分已关闭 | 中 |

**路线图信号**：维护者当前优先级集中在 **"渠道体验统一 + 插件架构强化 + 供应商兼容性扩张"** 三条主线，OpenAI 兼容协议端点、Hailo-Ollama、WASM 插件 OCI 化最有可能在下个版本中出现。

---

## 7. 用户反馈摘要（提炼自 Issues 评论）

**真实痛点**：

- **能力可见性差**：用户用自然语言下达"每晚 8 点做 X"时，Agent 否认自身具备 cron 工具——典型的"工具元数据未暴露给 LLM"问题（[#5862](https://github.com/zeroclaw-labs/zeroclaw/issues/5862)）。
- **多渠道行为不一致**：Discord 缺少频道白名单、Slack 需要每次重新 @、Telegram 把多轮消息拼接成一条——用户希望有跨渠道一致的 ACL 与流式行为规范（[#6378](https://github.com/zeroclaw-labs/zeroclaw/issues/6378)、[#6055](https://github.com/zeroclaw-labs/zeroclaw/issues/6055)、[#8445](https://github.com/zeroclaw-labs/zeroclaw/issues/8445)）。
- **Web Dashboard 中断语义不清**：用户在关闭聊天窗口或查看文件时被判定为"中断任务"，对长时 Agent 工作流造成阻断（[#8559](https://github.com/zeroclaw-labs/zeroclaw/issues/8559)）。
- **quickstart 路径对 Telegram 用户失败**：配置后 `channels doctor` 仍报未配置，CLI 正常但 Bot 不响应（[#8505](https://github.com/zeroclaw-labs/zeroclaw/issues/8505)）。
- **小米思维链模型信息丢失**：使用 mimo-v2.5 系列 thinking mode 时，`reasoning_content` 在工具调用循环的下一轮未前传，导致 reasoning 上下文断裂（[#6672](https://github.com/zeroclaw-labs/zeroclaw/issues/6672)）。
- **Android/Termux 安装错配**：`install.sh` 没有识别 Termux 环境，选择错误的 linux aarch64 通用二进制（[#7911](https://github.com/zeroclaw-labs/zeroclaw/issues/7911)）。
- **凭据为空导致 crashloop**：用户通过 Dashboard 启用 Signal/Voice Call 但未填写凭据时，supervisor 进入 2 秒一重启的死循环（[#6724](https://github.com/zeroclaw-labs/zeroclaw/issues/6724)）。

**正向反馈 / 期望**：

- Discord、Matrix 渠道对 `allowed_rooms` 类机制的接受度高（[#6378](https://github.com/zeroclaw-labs/zeroclaw/issues/6378)）。
- 用户对 SearXNG 这类隐私友好型搜索替代方案有明确诉求（[#5316](https://github.com/zeroclaw-labs/zeroclaw/issues/5316)）。
- 来自 moltis 的迁移用户希望获得**按聊天粒度切换模型**的能力（[#8600](https://github.com/zeroclaw-labs/zeroclaw/issues/8600) 👍=1）。
- 边缘硬件（Hailo）社区希望有原生 provider 接入而非走 generic compatible 路径（[#9109](https://github.com/zeroclaw-labs/zeroclaw/pull/9109)）。

---

## 8. 待处理积压（提醒维护者关注）

以下 Issue/PR 已 OPEN 较长时间或被标记为 `status:blocked` / `needs-author-action`，建议维护者优先排查：

| 编号 | 标题 | 状态 | 关注理由 |
|---|---|---|---|
| [#2467](https://github.com/zeroclaw-labs/zeroclaw/issues/2467) | Webhook transforms | OPEN, accepted | 自 2026-03 起

</details>

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*