# OpenClaw 生态日报 2026-09-08

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-09-08 02:32 UTC

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
**日期：2026-09-08**

---

## 1. 今日速览

OpenClaw 项目今日继续保持高强度维护节奏：过去 24 小时共有 **500 条 Issue**（活跃 251 / 关闭 249）与 **500 条 PR**（待合并 301 / 已合并关闭 199）发生更新，但**无新版本发布**。从数据看，项目处于"密集修复 + 升级震荡期"——大量用户反馈 2026.7.x → 2026.8.x 升级引发的网关崩溃、Telegram 子代理消息丢失、SQLite 锁竞争等连锁问题；与此同时，维护团队（特别是 steipete、vincentkoc）正在通过分阶段合并小 PR 的方式拆解大型重构 PR（#140674 已转为 draft 参考），整体维护结构化推进良好。**项目健康度评估：中等偏紧**——核心架构修复占主导，但 0 个新版本意味着尚未走出升级震荡窗口。

---

## 2. 版本发布

**无新版本发布**。

近一个月的版本演进主要集中在 2026.8.x 系列（8.1、8.2）和 2026.9.1/9.2（OCM 管理版本）。结合 Issue #133984、#134896、#139485、#140908 等多条报告，**2026.8.x 升级路径目前存在多项稳定性问题**，建议生产用户暂缓跨大版本升级，等待 2026.9.x 后续补丁或 2026.10 系列。

---

## 3. 项目进展

今日关闭的 199 个 PR 中，包含多项关键修复：

- **PR #141776** `fix(doctor): show backup guidance for unreadable state during repair`（S 尺寸，待维护者检视）—— 修复 `doctor --fix` 对不可读状态数据库仅给出通用维护错误的问题，关联 #141412。[链接](https://github.com/openclaw/openclaw/pull/141776)
- **PR #141746**（已关闭）`fix(release): bind source admission and retain first-hop coverage` —— 修复发布验证流程中三项确定性准入失败。[链接](https://github.com/openclaw/openclaw/pull/141746)
- **PR #141772**（已关闭）`refactor(gateway): share transcript idempotency key reader` —— 维护者要求的内联会话历史与 transcript 消息投影中重复阅读器合并。[链接](https://github.com/openclaw/openclaw/pull/141772)
- **PR #141417**（已关闭）`fix(agents): preserve Code Mode data within context limits` —— 修复 Code Mode 中 JSON 缩进消耗剩余每结果上下文预算导致的截断问题。[链接](https://github.com/openclaw/openclaw/pull/141417)
- **PR #141780** `fix(plugins): release resources after runtime inspection` —— 修复运行时 `plugins inspect` 在报告打印后丢弃未缓存注册表，导致资源无所有者处置的问题。[链接](https://github.com/openclaw/openclaw/pull/141780)

**重要关闭 Issue**：

- **Issue #79077** `Support for Telegram bot-to-bot and guest-bot modes`（15 评论，8 👍）—— 长期未响应的 Telegram 新特性支持请求终于关闭。[链接](https://github.com/openclaw/openclaw/issues/79077)
- **Issue #133984** `2026.7.1-2 → 2026.8.1 leaves Gateway unstartable` —— 升级五重阻塞问题已闭环。[链接](https://github.com/openclaw/openclaw/issues/133984)
- **Issue #134896** `5-blocker gateway restart cascade + doctor --fix self-referential failure` —— 2026.8.1 升级级联故障已闭环。[链接](https://github.com/openclaw/openclaw/issues/134896)
- **Issue #137927** `Internal context block leaks into visible Telegram message text` —— 严重安全问题（runtime context 泄露为可见消息）已闭环。[链接](https://github.com/openclaw/openclaw/issues/137927)

**整体进度评估**：核心问题（gateway 启动失败、Telegram 子代理调度、internal context 泄露）修复推进顺利；大型重构（plugin 资源释放、OAuth 共享刷新、update 检查点）已分阶段拆分进入评审流程。

---

## 4. 社区热点

| 排名 | Issue 标题 | 评论数 | 👍 | 链接 |
|------|-----------|--------|-----|------|
| 1 | Subagent completion silently lost — no retry, no notification, no auto-restart on timeout | 26 | 2 | [#44925](https://github.com/openclaw/openclaw/issues/44925) |
| 2 | Intermittent "Provider completed tool call with malformed JSON arguments" on v2026.8.1 | 17 | 0 | [#135111](https://github.com/openclaw/openclaw/issues/135111) |
| 3 | Telegram bot-to-bot and guest-bot modes（已关闭） | 15 | 8 | [#79077](https://github.com/openclaw/openclaw/issues/79077) |
| 4 | OpenClaw leaks unreaped hook/tool child processes | 16 | 1 | [#97616](https://github.com/openclaw/openclaw/issues/97616) |
| 5 | AgentSelectionRequiredError floods logs under explicit multi-agent ownership | 16 | 0 | [#126360](https://github.com/openclaw/openclaw/issues/126360) |

**热点诉求分析**：

- **#44925（钻石龙虾评分）** 是今日讨论度最高的"沉默丢消息"系列问题：Telegram forum bot 场景下子代理任务有 3 种失败模式（完成通知失败 E31/E42/E45、超时未重试、announce/reconcile 不一致），所有结果都被静默丢弃。这反映了**多代理编排可靠性**是当前用户最核心的痛点。PR #135481（XL，P1）正在尝试解决子代理完成投递到繁忙请求者通道的问题，但尚处于"待证明"状态。

- **#79077（8 👍，最高情绪分）** 虽已关闭，但其代表的 Telegram 平台新特性跟进（Guest Bots、Bot-to-Bot Communication）获得了社区高度关注，反映用户对**多账户/多机器人协作**场景的强需求。

- **#135111** 是新近（9 月 1 日）报告的 2026.8.1 回归问题，模型出现 `malformed JSON arguments` 错误频率约 6 次/次会话，提示**模型适配层在 2026.8 版本存在不稳定回归**。

- **#97616** 反映**进程生命周期管理缺陷**——hook/tool 子进程未被回收，僵尸进程（`openclaw-hooks`、`bash`、`codex`）在主进程下累积并导致运行时性能下降。

---

## 5. Bug 与稳定性

### 🔴 P0 / 钻石龙虾评分（最严重）

| Issue | 描述 | Fix PR |
|-------|------|--------|
| [#89278](https://github.com/openclaw/openclaw/issues/89278) | Codex OAuth 刷新成功但 cron/heartbeat 因 10s 超时失败（2026.6.2 起报告，影响大） | **PR #141477** `fix(auth): fence shared OAuth refresh generations`（XL，评审中） |
| [#111578](https://github.com/openclaw/openclaw/issues/111578) | Gateway auth token 在更新时从 service-env 中丢失（2026.7.1 修复后再次复发） | 待修复 |
| [#140908](https://github.com/openclaw/openclaw/issues/140908) | `doctor --fix` 在 systemd --user 服务账户下因 EACCES 失败，阻塞所有升级后迁移 | 待修复 |
| [#138965](https://github.com/openclaw/openclaw/issues/138965) | 中断的 transcript 重写导致陈旧历史成为活跃对话（已关闭） | 已闭环 |

### 🟠 P1 / 钻石龙虾评分（高严重）

- **#44925** Subagent 静默丢失（无 fix PR，`clawsweeper:no-new-fix-pr`）
- **#115908** Session transcript projection reconcile livelock，阻塞主线程与所有通道传输（无 fix PR）
- **#119720** 同步代理持久化与 transcript 维护在规模上阻塞 Gateway 事件循环（部分已通过 #133925、#134062 修复，但剩余 Gateway 线程问题未关闭）
- **#127229** Telegram watchdog 释放的 durable update 在传输 tracker 安定前被误判为 tombstone
- **#43367** 多代理编排不稳定：并发 add/config 覆盖、session-lock 失败、子任务脱离（无 fix PR）
- **#137613** 预压缩 memory flush 在 CLI 后端（`ownsNativeCompaction` gate）被禁用，存在 `compactionCount` 陷阱
- **#118018** 过期子代理完成被投递到已替换的请求者生命周期
- **#125764** Telegram 适配器网络失败出站发送单次尝试后 dead-letter，announce/completion 回复静默丢失
- **#137332** 混合终端请求者 settle 批处理在所有权检查后无限重试
- **#140455** google-meet 2026.9.2：代理语音在当前 Meet 上失效（圆形 JSON 通话崩溃 + 音频路由验证）
- **#139578** llama.cpp EmbeddingGemma 在 2026.9.2 回归为 server-default ubatch 512
- **#139714** post-core update resume child 接纳永不终结的 update_runs 行（`openclaw status` 永远显示"update in progress"）
- **#139485** 托管升级使网关离线而 finalization 仍处于非终止状态
- **#123265** `role:"custom"` runtime-context carrier 在每次请求中被序列化为尾随 `role:"user"` 消息
- **#117262** SQLite 锁竞争：3 个并发写句柄导致 ~33s 事件循环停顿（DEF-61，无 fix PR）

### 🟡 P2 / 中严重

- **#135111** 模型工具调用 JSON 参数格式错误（2026.8.1 回归）
- **#136183** 命令执行器在 spawn ssh 时挂起（2026.8.1 回归，2026.8.2 持续）
- **#137705** Telegram 流式路径泄露原始 `[label](file:///)` Markdown（安全）
- **#74586** AM embedded run 终止 memory_search 工具调用，被错误归类为超时
- **#48786** Feishu 回复/引用消息中的提及显示为原始 `@_user_N` 占位符
- **#101793** Signal 通道下同一轮中文本被静默丢弃
- **#140497** Discord setup 接受 application ID 作为 bot token，标记为已配置但永不启动（已关闭）

### 🔵 P3 / 低严重

- **#126874** Windows CI 仅运行 10,979 个测试文件中的 66 个，且跳过的 checks-windows 算作通过门
- **#126781** 工具返回后分离托管 Lobster 运行（功能请求）

**回归问题集中点**：2026.8.1 是今日多数 P1 报告的回归来源，#133984、#134896、#135111、#136183 都指向该版本。SQLite 锁竞争与进程/事件循环阻塞类问题未得到根治（#115908、#117262、#119720、#97616）。

---

## 6. 功能请求与路线图信号

### 已有对应 PR 的功能（高纳入概率）

- **#141777** `feat(cron): query and page run history from the CLI` —— CLI 查询与分页运行历史，关闭 #141745。已开放，状态待维护者检视。[链接](https://github.com/openclaw/openclaw/pull/141777)
- **#138679** `Add per-agent daily model spend alerts` —— 每代理每日模型花费警报。自动生成，置信度 0.85。[链接](https://github.com/openclaw/openclaw/pull/138679)
- **#133102** `Add Gandr speech provider (OpenAI compatible TTS)` —— 新增 Gandr 语音提供商。[链接](https://github.com/openclaw/openclaw/pull/133102)
- **#140798** `feat: allow explicitly trusted Discord administrators` —— 允许显式信任的 Discord 管理员。[链接](https://github.com/openclaw/openclaw/pull/140798)
- **#109015** `feat: add title tooltips to composer footer status values` —— Composer 底部状态值添加工具提示。[链接](https://github.com/openclaw/openclaw/pull/109015)
- **#140339** `feat(update): integrate checkpoints and interrupted-update recovery` —— 升级检查点与中断恢复集成（XL 规模，核心升级体验改善）。[链接](https://github.com/openclaw/openclaw/pull/140339)

### 尚无 PR 但需求明显（中等纳入概率）

- **#96675** `Owner-signed responsibility gates` —— 助手记忆/操作/技能/证据重用前的所有者确认门禁。10 评论，2 👍，反映用户对**个人 AI 助手可信赖性**的深层担忧。[链接](https://github.com/openclaw/openclaw/issues/96675)
- **#51441** `feat: expose resolved backend model in session_status and agent runtime` —— 暴露解析后的后端模型。8 评论，1 👍。[链接](https://github.com/openclaw/openclaw/issues/51441)
- **#42276** `Reasoning stream` —— 像 OpenAI/Grok 那样显示推理过程。6 评论。[链接](https://github.com/openclaw/openclaw/issues/42276)
- **#118785** `QA: primary proof for containers and external app SDK` —— 容器与外部 App SDK 的主要 QA 证明跟踪。[链接](https://github.com/openclaw/openclaw/issues/118785)

### 关闭的增强请求

- **#79077** Telegram bot-to-bot / guest-bot 支持（已关闭）
- **#78963** WhatsApp listen-only / hooks-only 模式（已关闭）
- **#41484** 每任务 elevated exec 作用域（已关闭）

**路线图信号**：维护团队当前优先级集中在**稳定性和升级可靠性**（OAuth、SQLite、事件循环、Telegram 子代理投递、managed update finalization）。新功能方面，TTS 提供商扩展（#133102）、per-agent 模型支出告警（#138679）、CLI 历史查询（#141777）、Discord 管理员授权（#140798）正在并行推进。

---

## 7. 用户反馈摘要

从今日高评论 Issue 与 PR 描述中提炼的真实用户痛点：

### 🔥 强烈痛点

1. **"沉默丢消息"是最不可接受的体验** —— 用户反馈子代理完成、announce/reconcile 失败、Telegram 出站 dead-letter 等场景下，**用户完全不知道发生了什么**，没有错误提示、没有重试、没有告警。多个 issue 明确表达："announce/completion replies silently lost"、"results are silently lost"、"setup looks hung instead of failed"。

2. **升级体验"灾难化"** —— 用户 #133984 反馈："Upgrading `2026.7.1-2` → `2026.8.1` left the Gateway unstartable and required roughly a dozen manual repair steps across five independent defects"，#134896 用户描述 5 重阻塞 + 1 个 doctor self-referential 失败。**自动迁移机制（特别是 config-key migrations）的缺失**是升级路径的主要阻碍。

3. **CLI 与 Gateway 不一致** —— #140908 反馈 `doctor --fix` 在 sudo -u 环境下失效；#139714 反馈 post-core update resume child 永远处于"update in progress"；#111578 反馈 OPENCLAW_GATEWAY_AUTH_TOKEN 在 managed launchd 服务环境下反复丢失。**CLI/managed installer/gateway 三层之间的状态一致性**是真实用户痛点。

4. **2026.8.1 是大量回归的源头** —— JSON arguments 格式错误（#135111）、命令执行器 ssh 挂起（#136183）、Provider malformed JSON 错误、doctor --fix 自引用失败——用户希望维护者**公开回归

---

## 横向生态对比

# 个人 AI 助手 / 自主智能体开源生态 · 横向对比分析报告

**数据周期**：2026-09-07 ~ 2026-09-08
**覆盖项目**：13 个（OpenClaw、NanoBot、Hermes Agent、PicoClaw、NanoClaw、NullClaw、IronClaw、LobsterAI、TinyClaw、Moltis、CoPaw、ZeptoClaw、ZeroClaw）

---

## 1. 生态全景

整个生态当前处于 **"功能面已铺开、稳定性与可靠性集中暴露"** 的典型阶段：13 个项目中 10 个有 PR 流转，5 个维持 30+ 条/日的高强度节奏，但**当日无任何项目发布新版本**，说明大多数团队正深陷在回归修复、升级路径、跨表面一致性等"非新功能"债务中。最显著的两大共性信号是：**多代理/子代理编排的"沉默丢消息"问题**（OpenClaw #44925、ZeroClaw #9333/#10121、CoPaw #7559/#7589）成为跨项目的头号可靠性痛点，以及 **Provider / Channel / 模型适配层的碎片化**正在反向催生统一抽象（OpenCode session header、x-opencode-* headers、AgentMail 通道）。

---

## 2. 各项目活跃度对比

| 项目 | Issues (活跃/关闭) | PRs (待合并/已闭) | Release | 健康度 | 核心特征 |
|------|------|------|---------|--------|------|
| **OpenClaw** | 500 (251/249) | 500 (301/199) | 无 | ⭐⭐⭐ 中等偏紧 | 升级震荡期，最大规模，最大风险敞口 |
| **ZeroClaw** | 37 (31/6) | 50 (43/7) | 无 | ⭐⭐⭐⭐ 高负载推进 | ACP/Code 通道可靠性债务 |
| **CoPaw (QwenPaw)** | 41 (25/16) | 43 (28/15) | 无 | ⭐⭐⭐⭐ 高强度迭代 | v2.2.0 集中回归，多 PR 待审 |
| **Hermes Agent** | 50 (44/6) | 50 (46/4) | **v0.21.1** | ⭐⭐⭐⭐ 健康迭代 | Windows Desktop/本地推理双短板 |
| **NanoBot** | ~2 (1 新/1 活跃) | 23 (14/9) | 无 | ⭐⭐⭐⭐ 进展良好 | WebUI/Provider 收敛中 |
| **NanoClaw** | ~4 (3 活跃/2 闭) | 28 (11/17) | 无 | ⭐⭐⭐⭐⭐ 密集收敛 | durable-host 里程碑 PR #3653 合入 |
| **LobsterAI** | 0 | 8 (2/6) | 无 | ⭐⭐⭐⭐ 良好 | 跨平台 + 本地任务库产品化 |
| **IronClaw** | 1 (自动) | 5 (5/0) | 无 | ⭐⭐⭐ 评审积压 | WebUI 微迭代 + Slack 一致性 |
| **PicoClaw** | 1 | 5 (5/0) | 无 | ⭐⭐ 低活跃 | 60% PR stale，QQ 鉴权阻塞 |
| **Moltis** | 0 | 1 (1/0) | 无 | ⭐⭐ 低活跃 | 仅 1 条 cron 边界 Bug |
| **NullClaw** | 0 | 1 (1/0, 85d stale) | 无 | ⭐☆☆ 静默 | Dependabot 独白 |
| **TinyClaw** | 0 | 0 | 无 | ☆ 沉睡 | 24h 全静默 |
| **ZeptoClaw** | 0 | 0 | 无 | ☆ 沉睡 | 24h 全静默 |

**关键观察**：当日合并/关闭 PR 数量前三是 OpenClaw(199)、NanoClaw(17)、CoPaw(15)；但**待合并 PR 绝对值**前三是 OpenClaw(301)、Hermes(46)、ZeroClaw(43)，三者已构成"最大合并积压带"。

---

## 3. OpenClaw 在生态中的定位

### 规模与覆盖面：绝对头部
OpenClaw 以 **500 条 Issue + 500 条 PR / 24h** 的吞吐量稳居生态第一，是次席 Hermes Agent 的 10 倍、ZeroClaw 的 10 倍以上。其覆盖的渠道（Telegram/Discord/Signal/Feishu/WhatsApp/Slack）、Agent 拓扑（cron/subagent/multi-agent）、Provider 矩阵（OAuth/Codex/Anthropic/Bedrock/google-meet 等）远非任何同类项目可比。

### 优势
- **多代理编排唯一规模化落地**：子代理/announce/reconcile 机制是其他项目未涉足的领域
- **平台适配最广**：Windows/macOS/Linux、Electron Desktop、CLI、Managed Installer 四面俱全
- **企业级升级路径**：versioned migration 框架已部分成型（虽 2026.8.1 升级仍暴露出 5 重阻塞）
- **维护结构化**：steipete、vincentkoc 等核心维护者正在用"分阶段 PR 拆分"消化大型重构（#140674 → draft 化），是生态内最成熟的项目治理模式

### 技术路线差异
- **vs. Hermes Agent**：OpenClaw 走"网关中心 + 多代理"路线，Hermes 走"Desktop 中心 + Profile/Project"路线；Hermes 更轻量但 Windows 体验已暴露明显短板（#105145/#103786/#99286/#105498）
- **vs. ZeroClaw**：ZeroClaw 在 ACP/Code Mode + Anthropic 缓存策略上更深入，但缺乏 OpenClaw 的多渠道广度
- **vs. NanoBot / NanoClaw**：两者是"轻量级个人代理"原型，OpenClaw 是"重型多租户网关"，属于**不同物种**
- **vs. LobsterAI**：LobsterAI 是 OpenClaw 的 Desktop 包装层，二者形成上下游关系；LobsterAI 的 #2623/#2622/#1067 都是 OpenClaw 子进程/会话生态的一部分

### 社区规模差距
OpenClaw 的 P0/P1 Issue 评论密度（如 #44925 26 评论、#135111 17 评论、#97616 16 评论）远超同类，反映**用户基础与使用深度均处于绝对领先地位**。但这也意味着 OpenClaw 必须承受"沉默丢消息"等可靠性问题的**最大放大效应**——一旦在 Telegram 子代理场景失败，影响面比 Hermes 的 Windows Bug 严重一个量级。

---

## 4. 共同关注的技术方向

### 4.1 多代理/子代理编排可靠性（最高优先级共识）
- **OpenClaw** #44925（26 评论）、#43367、#118018、#125764
- **ZeroClaw** #9333 / #10121（ACP 转写数据丢失）、#10408（并行 turn）、#10659
- **CoPaw** #7559（409 报错而非入队）、#7589（Heartbeat 反馈环）
- **Hermes Agent** #97681（Bot Group 跨设备接力）

**诉求**：从"尽力而为"转向"可失败上报 + 可重试 + 可观测"，子任务结束通知、announce 通道、dead-letter 必须显式化。

### 4.2 WebUI / Desktop 一致性打磨
- **NanoBot** #5685（首启回退终端）、#5689（计时器跳变）、#5691（KaTeX 多行）
- **IronClaw** #8068/#8069/#8070/#8071（斜杠命令菜单四件套）
- **CoPaw** #7499（图标统一）、#7502（侧边栏重设计）
- **Hermes Agent** #90663（TUI Shift+小写，已修）、#105498（Ctrl+W 焦点串扰）

**信号**：所有项目的 WebUI/Desktop 已进入"功能上线 → 体验收敛"阶段，**首次启动流、错误提示、键盘可达性**成为新一轮打磨重点。

### 4.3 Session / Memory / 上下文窗口的一致性
- **OpenClaw** #137613（预压缩 memory flush 被禁用）、#123265（runtime-context 序列化）
- **NanoBot** #5688（idle compaction 后旧 provider 复用）、#5694（手动 /compact 后 archived history）
- **CoPaw** #7576（RetryChatModel 硬编码 32768）、#7579（assistant 回复从上下文丢失）、#7571（长记忆召回降级）

**诉求**：context budget、provider state、archived history 三者必须在 compaction/cutoff/手动 compact 各路径下保持一致。

### 4.4 Provider / 模型协议适配（OpenCode 缓存硬截止）
- **NanoBot** #5662（OpenCode x-opencode-session header 9/6 硬截止）
- **PicoClaw** #3371（opencode-go provider + session header）
- **ZeroClaw** #10660/#10662/#10663（Anthropic 缓存策略三连发）、#10704~#10708（OpenAI Responses 五连发）

**信号**：上游模型协议变更正在"倒逼"所有 AI 智能体项目重写 provider 层，且每次变更伴随**硬截止日期**（OpenCode 2026-09-06 已生效）。

### 4.5 长寿命生产 Agent 的资源治理
- **NanoClaw** #3735（conversations/ 无界增长）、#3732（轮转失效）、#3741（cron 无状态运行）
- **OpenClaw** #139714（post-core update resume 永不终结）
- **Hermes Agent** 多 surface 跨设备会话接力

**诉求**：retention policy、stateless cron、archive rotation 从"加分项"变成"生产可用前提"。

### 4.6 多通道统一抽象（Channel Proliferation 反向收敛）
- **NanoClaw** #3743（AgentMail 邮件通道）、#3494（手机配对 gbr/1）
- **PicoClaw** #3354（IRCv3 multiline）
- **NanoBot** #5567（飞书渠道流式卡片）

**信号**：通道数量爆发后，"统一消息投递层"成为下一步架构需求。

---

## 5. 差异化定位分析

| 项目 | 形态 | 目标用户 | 核心架构特征 | 部署门槛 |
|------|------|---------|---------|---------|
| **OpenClaw** | 网关中心 + 多代理 | 重度个人/小团队 | 进程内协调 + 持久化 + Managed Installer | 中-高 |
| **NanoBot** | 单代理 CLI + WebUI | 开发者/技术爱好者 | Provider 抽象 + 会话状态机

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目日报 · 2026-09-08

> 数据来源：[github.com/HKUDS/nanobot](https://github.com/HKUDS/nanobot)  
> 统计窗口：过去 24 小时

---

## 一、今日速览

NanoBot 今日呈现出**高密度、多线并进**的开发节奏：过去 24 小时共 23 条 PR 更新，9 条已关闭（含合并），合并/关闭率约 39%，活跃度高于常态。Issues 端仅新增 1 条新需求（#5693），另 1 条历史 Issue（#5567，飞书渠道多轮消息合并）持续活跃讨论。今日工作重心明显落在三块：**WebUI 体验修复**（计时器、首次启动、模型重试状态、KaTeX 多行公式）、**Provider/会话稳定性**（OpenCode 缓存头、模型 failover、idle compaction 状态失效、memory 体积护栏），以及**文档体系整合**（README、WebUI Gallery、Quick Start 与 Personal Agent 指南打通）。整体看，项目在向"可发布质量"快速收敛，p1 级问题正在被消化。

---

## 二、版本发布

无新版本发布。

---

## 三、项目进展（今日合并/关闭 PR）

今日共 7 条关键 PR 关闭/合并，覆盖 CLI、文档、WebUI UX、内存一致性四大方向：

| PR | 标题 | 影响 |
|----|------|------|
| [#5676](https://github.com/HKUDS/nanobot/pull/5676) | feat(cli): add attach-only Desktop target selection | CLI 增加 attach-only Desktop 目标选择能力，Desktop 与 Python 安装解耦，向后兼容原 Python 行为 |
| [#5690](https://github.com/HKUDS/nanobot/pull/5690) | docs: unify personal agent installation with quick start | Personal Agent 文档与 Quick Start 合并维护路径，避免文档分叉 |
| [#5689](https://github.com/HKUDS/nanobot/pull/5689) | fix(webui): keep working timer consistent across first output | 修复"Working"计时器在首个输出前后跳变（13–15s → 1s）的问题，统一基于 prompt timestamp |
| [#5688](https://github.com/HKUDS/nanobot/pull/5688) | fix(memory): invalidate provider state after idle compaction | 修复 idle compaction 后旧 provider history 被复用的回归（Codex 实测仅剩 8 条 replay 消息） |
| [#5504](https://github.com/HKUDS/nanobot/pull/5504) | fix(ui): surface model retry status (NAN-34) | TUI/WebUI 内联展示模型重试倒计时与进度，使用相对时间避免远程客户端时钟依赖 |
| [#5685](https://github.com/HKUDS/nanobot/pull/5685) | fix(webui): resume incomplete model setup in the browser | 首次运行未配模型时不再回退到终端 Quick Start，允许后续在 WebUI Settings 续配 |
| [#5684](https://github.com/HKUDS/nanobot/pull/5684) | docs: refresh README with current WebUI feature gallery | README 增加 WebUI 功能画廊，同步更新相关指南与发布说明 |

**推进评估**：今日一次性清掉了 4 个 WebUI 体验缺陷 + 1 个内存一致性 bug + 1 个文档统一 + 1 个 CLI 能力补全，**项目整体可发布性向前显著迈进一步**，尤其是 WebUI 首次启动与计时器链路已经收敛。

---

## 四、社区热点

今日最值得关注的两条社区话题：

- **[#5567 飞书渠道多轮回复合并](https://github.com/HKUDS/nanobot/issues/5567)** —— 飞书用户核心痛点：当前 agent 会发"工具提示 + 进度 + 最终回复"多条消息，体验割裂。期望整合为**一条流式卡片**，保持"用户一消息 → agent 一消息"的对应关系。**评论数 5 条，是今日讨论最热的 issue**。现有 `send_delta()` 流式卡片机制已可用，缺的是工具调用阶段的状态整合。维护者回复指出需要重新设计 `send()` 通道在流式卡片内的填充策略。

- **[#5693 适配无人零售/IoT 轻量化部署](https://github.com/HKUDS/nanobot/issues/5693)** —— 今日新开的生态合作方向，作者来自"落朵机器人"团队，提出 Ultra-lightweight self-hosted 个人智能体方案，对标边缘设备/智能货柜场景。希望：1) 增加无人零售场景适配；2) 边缘轻量化部署方案；3) 中文文档/示例。**这条信号意义在于 NanoBot 开始被外部生态视为可嵌入的个人 AI 中台**，但具体落地路径尚需评估。

---

## 五、Bug 与稳定性

按严重程度排序：

### 🔴 P1（高优先级，已阻塞体验）

- **[#5580 fix(session): move persistence off event loop](https://github.com/HKUDS/nanobot/pull/5580)** —— 慢存储/文件锁会阻塞 event loop，连带所有会话卡顿。PR 提出统一通过 `nanobot.session.io.call` 派发器下沉到同步 `SessionManager`。**仍在 OPEN**，是当前最值得维护者优先合并的稳定性 PR。
- **[#5662 feat(providers): send x-opencode-session header for OpenCode session](https://github.com/HKUDS/nanobot/pull/5662)** —— OpenCode 官方公告：**2026-09-06 起缺失 `x-opencode-session` header 的请求将丢失 prompt-cache 并可能报错**。本 PR 让 `OpenAICompatProvider` 自动附带该 header。**未合并即线上风险**。

### 🟡 P2（重要缺陷，已部分修复）

- **[#5694 fix: exclude archived history after manual compaction](https://github.com/HKUDS/nanobot/pull/5694)** —— 手动 `/compact` 继承了 idle compaction 的 8 条消息回放窗口，可能在工具密集轮次中放大，下一个请求仍携带大段归档；WebUI 上下文使用率显示旧的请求值。
- **[#5675 fix(providers): allow model failover after runner deadlines](https://github.com/HKUDS/nanobot/pull/5675)** —— 主模型挂起耗尽 runner deadline，`FallbackProvider` 没机会看到 timeout，整个链路被取消，**配置的健康 fallback 永远不会被尝试**。已通过 `AgentRunner.run` 复现。修复 #5674。
- **[#5630 fix(agent): add size guardrails to Dream memory files and requests](https://github.com/HKUDS/nanobot/pull/5630)** —— PR #5622 修复了 Dream 系统 prompt 重复 bug，但同时删除了唯一的 `_DREAM_FILE_EMBED_CAP = 8000` 体积上限，导致 SOUL.md/USER.md/MEMORY.md **无界增长并被注入到每个请求**。
- **[#5692 fix(tools): support recursive glob filters in file searches](https://github.com/HKUDS/nanobot/pull/5692)** —— `find_files` 与 `grep` 中的递归 glob（`**`）当前被 `PurePosixPath.match()` 当作单段通配，**会漏掉 `src/nested/deep/...` 这类嵌套文件**。
- **[#5686 fix(cron): defer timer rearming while jobs execute](https://github.com/HKUDS/nanobot/pull/5686)** —— cron callback 编辑 job store 或被并发任务改写时，`_arm_timer()` 会取消正在执行回调的 timer task，导致 `CancelledError` 提前抛出，**结果与新调度都不会被保存**。
- **[#5691 fix(webui): preserve multiline dollar math with attached delimiters](https://github.com/HKUDS/nanobot/pull/5691)** —— `$$C\n= ...$$` 这类多行公式中，C 被当 fence 元数据，闭合美元符留在公式里，触发红色 KaTeX 错误。

### ✅ 已落地修复（今日关闭）
- [#5688 fix(memory): invalidate provider state after idle compaction](https://github.com/HKUDS/nanobot/pull/5688) ✓
- [#5689 fix(webui): keep working timer consistent across first output](https://github.com/HKUDS/nanobot/pull/5689) ✓
- [#5685 fix(webui): resume incomplete model setup in the browser](https://github.com/HKUDS/nanobot/pull/5685) ✓
- [#5504 fix(ui): surface model retry status (NAN-34)](https://github.com/HKUDS/nanobot/pull/5504) ✓

---

## 六、功能请求与路线图信号

| 请求/提案 | 链接 | 落地判断 |
|---------|------|---------|
| 飞书渠道多轮消息合并为流式卡片 | [#5567](https://github.com/HKUDS/nanobot/issues/5567) | **强烈可纳入下个 minor**：已有 `send_delta()` 基础，缺的是 send() → 流式卡片适配层；多个 PR 已在 WebUI 端演示类似整合思路 |
| WebUI 任务完成提示音 | [#5524](https://github.com/HKUDS/nanobot/issues/5524) → [#5602](https://github.com/HKUDS/nanobot/pull/5602)、[#5547](https://github.com/HKUDS/nanobot/pull/5547) | **两个并行 PR 待合并**，需要维护者选型其一；属于低风险 UX 增强 |
| macOS Seatbelt 沙箱后端 | [#5628](https://github.com/HKUDS/nanobot/pull/5628) | 利用 `/usr/bin/sandbox-exec`、零新依赖；与企业/合规用户强相关，**路线图友好** |
| 无人零售/IoT 轻量化 + 中文文档 | [#5693](https://github.com/HKUDS/nanobot/issues/5693) | **战略性方向但需评估**：依赖架构侧调整（依赖裁剪、文档分支），短期难进 release，可能催生独立 fork |

---

## 七、用户反馈摘要

提炼自 Issues 评论与 PR 描述中的真实场景：

1. **飞书渠道体验割裂（#5567，5 条评论）**：用户在 IM 中看到 agent 一句一句"挤牙膏"地发消息，**专业感与可读性双输**。核心诉求："用户发一条 → agent 回一条"的最小认知单元。
2. **Codex 用户遭遇 idle compaction 失效（#5688）**：成功归档后只剩 8 条 replay 消息，但下一轮仍复用旧 provider history。说明**会话状态机的一致性是高活跃用户最先感知到的问题**。
3. **WebUI 首次启动回退终端（#5685）**：用户在浏览器里点完首跑后没配模型，下次启动又被推回 CLI，**对非技术用户尤其不友好**。
4. **WebUI "Working" 计时跳变（#5689）**：用户看到 13–15s 后突然跳到 1s，怀疑 agent 偷偷重置。**本质是时间源不一致**，已修复。
5. **OpenCode 缓存失效预警（#5662 引用公告）**：OpenCode 官方已发邮件，2026-09-06 起缺 header 的请求报错。社区有人在催合 —— **这是一个"非合即崩"的硬截止**。
6. **无人零售生态接触（#5693）**：首次有外部硬件生态主动对接，**对项目长尾增长是积极信号**，但也说明官方英文文档/英文优先定位与中文生态需求存在落差。

---

## 八、待处理积压（提醒维护者关注）

按对用户的可感知风险排序：

1. **🔴 [PR #5662 OpenCode session header](https://github.com/HKUDS/nanobot/pull/5662)** —— **OpenCode 已硬截止 2026-09-06**，若今日不合并，使用 OpenCode Zen/Go 的用户从今天起将陆续报错。建议**优先 review**。
2. **🔴 [PR #5580 session persistence off event loop](https://github.com/HKUDS/nanobot/pull/5580)** —— 创建于 2026-08-28，已开放 11 天；p1 级稳定性 PR，影响所有长会话用户。
3. **🟡 [Issue #5567 飞书渠道流式卡片](https://github.com/HKUDS/nanobot/issues/5567)** —— 创建于 2026-08-27，5 条评论无明确认领；IM 渠道体验的关键短板。
4. **🟡 [PR #5602 vs #5547 WebUI 提示音双 PR 并行](https://github.com/HKUDS/nanobot/pull/5602)** —— 两个 PR 实现同一需求，社区需维护者裁决方案，避免 review 资源浪费。
5. **🟢 [PR #5628 macOS Seatbelt 沙箱](https://github.com/HKUDS/nanobot/pull/5628)** —— 距上次更新 6 天，企业级安全特性，长期价值高但短期不阻塞。
6. **🟢 [PR #5611 reasoning replay 边界](https://github.com/HKUDS/nanobot/pull/5611)** 与 **[PR #5630 Dream memory 体积护栏](https://github.com/HKUDS/nanobot/pull/5630)** —— 都是 agent 层成本与稳定性相关的 PR，建议尽快安排 review。

---

### 健康度总评

| 维度 | 评分 | 说明 |
|------|------|------|
| 活跃度 | ⭐⭐⭐⭐⭐ | 23 PR / 24h，远超一般项目日均水平 |
| Bug 响应速度 | ⭐⭐⭐⭐ | 多数 P2 bug 24h 内有 PR；P1 仍有 1 条积压 |
| 文档同步 | ⭐⭐⭐⭐ | 今日关闭 2 条文档 PR，README 现代化已推进 |
| 社区对话 | ⭐⭐⭐ | Issues 评论密度偏低，IM 体验等关键问题未及时回复 |
| 发布就绪度 | ⭐⭐⭐ | 待 #5662、#5580 合并即可推进 minor 版本 |

> 📌 **行动建议**：维护者今日若能集中处理 #5662 + #5580 合并，并就 #5602/#5547 提示音方案给出选型裁决，即可具备下一版本发布的稳定基线。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报

**日期：2026-09-08** | **数据来源：github.com/nousresearch/hermes-agent**

---

## 1. 今日速览

Hermes Agent 仓库今日保持高度活跃，过去 24 小时内共刷新 50 条 Issues（44 条活跃 / 6 条关闭）与 50 条 PR（46 条待合并 / 4 条已合并或关闭），并发布了 **v0.21.1 (v2026.9.7)** 补丁版本。讨论热度集中在 **Windows Desktop 稳定性**、**多平台消息投递（bot-chat / cron / Telegram）**、**ACP 适配器现代化**与 **本地推理的资源错误分类** 等方向。整体看，社区反馈密度较高，维护者响应节奏稳定，项目处于 **健康迭代期**，但 Windows 平台与本地资源受限场景下的回归问题仍是当前主要风险敞口。

---

## 2. 版本发布

### v2026.9.7 — Hermes Agent v0.21.1（补丁版）

- **发布日期**：2026-09-07
- **Commit 基线**：`6178e9f4eed8d99f4fc550add939d58c7bed6206`
- **定位**：自 v0.21.0 以来的 main 分支 roll-up，主要服务于 tag 化部署与下游消费者
- **破坏性变更**：无明确声明（patch 版本，按 Semver 约定应保持向后兼容）
- **迁移注意事项**：建议直接替换 tag；下游已锁定 v0.21.0 的消费者可继续观察，无须强制升级
- **关联动态**：今日同时观察到多个用户报告 "升级到 v0.21.0 → v0.21.1 后 Desktop UI 语言被重置"（[#105465](https://github.com/NousResearch/hermes-agent/issues/105465)）等小回归，建议升级前备份 `~/.hermes/config.yaml`

---

## 3. 项目进展

> 今日明确披露已合并/关闭的 PR 数量为 4 条，结合已关闭 Issues 看，本轮推进集中在 **会话投递链路**、**TUI/Desktop 修复** 与 **生命周期扫描器** 三个方向：

- **Cron / Bot Chat 投递链路修复**：[#99956](https://github.com/NousResearch/hermes-agent/issues/99956)（closed）修复了定时任务使用 `deliver: bot-chat` 时，目标 profile 持有交互式会话锁导致投递失败的问题
- **Bot Chat DM 跨 Profile 投递**：[#101060](https://github.com/NousResearch/hermes-agent/issues/101060)（closed）修复 `message_agent` 在派发后无法将消息投递进 Desktop 占有的 Bot Chat 会话（DMs 静默丢失）
- **TUI 大写输入 Bug**：[#90663](https://github.com/NousResearch/hermes-agent/issues/90663)（closed）修复 Ghostty (macOS) 上 Ink TUI 的 Shift+letter 被小写化导致输入丢失
- **上下文压缩器忽略 `context_length`**：[#102644](https://github.com/NousResearch/hermes-agent/issues/102644)（closed）—— `ContextCompressor._resolve_context_length` 现在与 `/model`、`/info` 一致读取 `providers.<name>.models.<id>.context_length`
- **Telegram/Kanban 通知污染会话**：[#92703](https://github.com/NousResearch/hermes-agent/issues/92703)（closed）解决了自动化任务通知被当作 user-role turn 持久化、长期污染会话的问题

**进展评估**：项目在「会话一致性 + 跨表面投递」这一核心链路完成了又一轮收口，是 v0.21.1 之后的重要质量改善。但仍有较多 P1 级 Windows/Desktop 问题未关闭（见下文），下一版本需重点攻坚。

---

## 4. 社区热点

| 排名 | 标题 | 评论数 | 链接 |
|---|---|---|---|
| 1 | [skills-index-watchdog] Skills index is stale or degraded（自动巡检告警，29.8h 超出 26h 上限） | 175（自动 sweeper） | [#66616](https://github.com/NousResearch/hermes-agent/issues/66616) |
| 2 | Bot Group Chats should keep working after Desktop closes | 27 | [#97681](https://github.com/NousResearch/hermes-agent/issues/97681) |
| 3 | [Bug] Projects paradigm (#49037) broke the folder → session → sidebar flow | 14 | [#53004](https://github.com/NousResearch/hermes-agent/issues/53004) |
| 4 | [Bug] TUI (Ink) lowercases Shift+letter in prompt composer on Ghostty（**已关闭**） | 12 | [#90663](https://github.com/NousResearch/hermes-agent/issues/90663) |
| 5 | [Bug] bug Highlights（profile 间 model 切换错误使用主 profile 模型列表） | 10 | [#86146](https://github.com/NousResearch/hermes-agent/issues/86146) |
| 6 | [Bug] Provider memory/resource 400s (oMLX/MLX, local inference) 被错误归类为 `context_overflow` | 9 | [#52261](https://github.com/NousResearch/hermes-agent/issues/52261) |
| 7 | Feature request: per-call model and reasoning_effort overrides on `delegate_task` | 6 | [#80222](https://github.com/NousResearch/hermes-agent/issues/80222) |

**诉求分析**：
- 真正的人为讨论集中在 **多表面/多设备会话接力**（Bot Group 跨设备、Desktop 关闭后 Bot 持续工作、Telegram `/resume` 跨源会话），反映出 Hermes Agent 已逐步走向 "多入口统一后端" 的产品形态
- "Projects 范式"破坏工作流（#53004）说明 P1 级别的回归仍未彻底收敛，社区对 **既有 UX 承诺的稳定性** 较为敏感
- 本地推理（oMLX/MLX）用户的错误分类需求（#52261）表明 Hermes 在本地模型生态中的渗透率在上升，但资源错误处理链路尚需适配

---

## 5. Bug 与稳定性

### 🔴 P1 — 高优先级（建议下个版本必修）

| Issue | 描述 | 平台/组件 | 是否已有 fix PR |
|---|---|---|---|
| [#53004](https://github.com/NousResearch/hermes-agent/issues/53004) | Projects 范式回归导致 folder → session → sidebar 流程失效 | Desktop / Sessions | ❌ |
| [#52261](https://github.com/NousResearch/hermes-agent/issues/52261) | 本地推理 400s 被误判为 `context_overflow` → 触发破坏性压缩/重置循环 | Agent / Local backend / Compression | ❌ |
| [#105145](https://github.com/NousResearch/hermes-agent/issues/105145) | Windows `hermes update` 升级成功后仍报 FAILED (exit 8) —— 工作目录解析错误 | CLI / Desktop / Windows | ❌ |
| [#103786](https://github.com/NousResearch/hermes-agent/issues/103786) | Windows Electron 主线程被 gateway-retry 卡死（AppHangB1），远端 WebSocket 冻结 | Desktop / Windows | ❌ |
| [#99956](https://github.com/NousResearch/hermes-agent/issues/99956) | cron `bot-chat` 投递在目标 profile 持有会话锁时失败（**已关闭**） | Gateway / Cron / Sessions | ✅ 已修复 |
| [#101060](https://github.com/NousResearch/hermes-agent/issues/101060) | `message_agent` 状态报 `sent` 但实际未能投递进 Desktop Bot Chat（**已关闭**） | Tools / TUI / Desktop | ✅ 已修复 |

### 🟡 P2 — 中优先级

| Issue | 描述 | 平台/组件 |
|---|---|---|
| [#94613](https://github.com/NousResearch/hermes-agent/issues/94613) | Install & Update E2E 自 2026-08-13 起持续失败 —— 沙箱 MITM 代理丢弃 npm TLS | Docker / Install-Update |
| [#80625](https://github.com/NousResearch/hermes-agent/issues/80625) | Desktop SSH 远端后端在 Fish shell 账户下失败（👍2） | Desktop / SSH |
| [#102644](https://github.com/NousResearch/hermes-agent/issues/102644) | 压缩器懒加载路径忽略 `context_length`（**已关闭**） | Agent / Compression |
| [#99286](https://github.com/NousResearch/hermes-agent/issues/99286) | Desktop Windows 显示的上下文窗口仅为配置的一半（131,072 vs 262,144） | Agent / Desktop / Windows |
| [#105427](https://github.com/NousResearch/hermes-agent/issues/105427) | Gateway 生命周期扫描器将 Python 目录字面量与解释器二进制误判为风险 | Cron |
| [#105247](https://github.com/NousResearch/hermes-agent/issues/105247) | Group Chat harvest 窗口 < turn cap 导致晚回复丢失 | Desktop / Plugins |
| [#105477](https://github.com/NousResearch/hermes-agent/issues/105477) | `key_cmd` 认证 provider 的 model picker 用空 key 探测，目录坍缩为单模型 | CLI / Auth |
| [#105498](https://github.com/NousResearch/hermes-agent/issues/105498) | Windows Desktop 焦点继承时把外部应用的 Ctrl+W 应用为 "关闭标签页" | Desktop / Windows |
| [#97110](https://github.com/NousResearch/hermes-agent/issues/97110) | TTS 工具将 safe-root 拒绝统一标记为 "受保护凭据/系统路径"，且 BasePlatformAdapter 自动 TTS 吞错 | Gateway / TTS |

### 🟢 P3 — 低优先级（体验类）

| Issue | 描述 |
|---|---|
| [#105465](https://github.com/NousResearch/hermes-agent/issues/105465) | Desktop UI 语言每次 `hermes update` 后被重置为英文（配置仍持久化为 zh） |
| [#105497](https://github.com/NousResearch/hermes-agent/issues/105497) | Desktop 语音会话中 barge-in 转写可能因 `busy` 闭包过期被静默丢弃 |
| [#105383](https://github.com/NousResearch/hermes-agent/issues/105383) | Zed 1.18+ ACP 模型选择器缺失 —— 适配器仍使用旧版 session-models API |
| [#9971](https://github.com/NousResearch/hermes-agent/issues/9971) | 微信 TTS 音频需 OGG → SILK 转码才能渲染为语音气泡 |
| [#105235](https://github.com/NousResearch/hermes-agent/issues/105235) | 流式 TTS 首句可独立调阈值以加速短开场（duplicate） |

**总体稳定性判断**：Windows Desktop + 本地推理双线问题占比最高，且多数 P1 缺少对应 fix PR，建议下一个 patch 版本（v0.21.2）优先攻克 **#53004、#52261、#105145、#103786**。

---

## 6. 功能请求与路线图信号

| 需求 | Issue | 已存在的 PR | 进入下版本可能性 |
|---|---|---|---|
| `delegate_task` 支持每次调用独立指定 model 与 reasoning_effort | [#80222](https://github.com/NousResearch/hermes-agent/issues/80222) | ❌ | ⭐⭐⭐ 中高 —— 已是社区长期诉求 |
| Telegram `/resume` 列出跨表面会话（Desktop/CLI/cron） | [#41220](https://github.com/NousResearch/hermes-agent/issues/41220) | ❌ | ⭐⭐⭐ 与 #97681 形成 "多设备接力" 主线 |
| Bot Group Chat 关闭 Desktop 后继续运行（跨设备接力） | [#97681](https://github.com/NousResearch/hermes-agent/issues/97681) | ❌ | ⭐⭐⭐ 产品级特性，优先级高 |
| Cron `monitor` 任务在投递成功后再提交状态 | — | [#91289](https://github.com/NousResearch/hermes-agent/pull/91289) | ⭐⭐⭐⭐ 已有 PR，可纳入 |
| `pre_llm_call` hook 暴露 `chat_id/chat_name/user_name/chat_type` | — | [#96080](https://github.com/NousResearch/hermes-agent/pull/96080) | ⭐⭐⭐ 已有 PR，多用户场景刚需 |
| 流式 TTS 首句独立 batching | [#105235](https://github.com/NousResearch/hermes-agent/issues/105235) | ❌ | ⭐ TTS 体验优化 |
| Qdrant 同网部署抑制 "insecure connection" 警告 | [#105484](https://github.com/NousResearch/hermes-agent/issues/105484) |  | ⭐⭐ |
| 上下文压缩后重新注入 skill 内容（#84718 提案 1） | [#86421](https://github.com/NousResearch/hermes-agent/issues/86421) | ❌ | ⭐⭐⭐ 直接影响压缩后体验 |
| 捷克语 i18n | — | [#105503](https://github.com/NousResearch/hermes-agent/pull/105503) | ⭐⭐ 常规翻译合并 |

**路线图信号**：社区与维护者的共识明显向 **"会话为第一公民（sessions as first-class citizens）"** 与 **"多表面无缝接力"** 收敛；同时 `monitor`-类 cron 与 hook 扩展也在通过 PR 形式稳步推进。

---

## 7. 用户反馈摘要

**真实用户痛点**：

1. **Windows 体验成最大短板** —— 多位用户（[#105145](https://github.com/NousResearch/hermes-agent/issues/105145)、[#103786](https://github.com/NousResearch/hermes-agent/issues/103786)、[#105498](https://github.com/NousResearch/hermes-agent/issues/105498)、[#99286](https://github.com/NousResearch/hermes-agent/issues/99286)）连续报告升级流程崩溃、主线程卡死、Ctrl+W 焦点串扰、上下文窗口显示错位 —— Windows 已事实上成为 Hermes Desktop 的高风险平台
2. **本地推理用户被错误处理** —— [#52261](https://github.com/NousResearch/hermes-agent/issues/52261) 反映出 Hermes 在与 oML

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报

**报告日期**: 2026-09-08
**数据来源**: [github.com/sipeed/picoclaw](https://github.com/sipeed/picoclaw)

---

## 1. 今日速览

PicoClaw 今日整体处于**低活跃度的稳步推进期**：过去 24 小时内仅有 1 条新 Issue、5 条 PR 更新，且无任何 PR 合并或新版本发布。社区贡献方向集中于**生态扩展**（新增 opencode-go、Keenable 两个 provider）和**协议/通道增强**（IRCv3 multiline、QQ 渠道鉴权问题）。值得注意的是，3 条 PR (#3344, #3353, #3354) 已带 `[stale]` 标签，说明这些 PR 已超过 14 天未推进，维护者响应速度有待提升。

---

## 2. 版本发布

⚠️ **本周期无新版本发布**。

最近可识别的内部版本为 Issue 中提及的 `0.3.1 (nightly)`，但官方未发布对应 GitHub Release。建议关注后续是否产出 `v0.3.1` 正式版或 `v0.4.0` 计划。

---

## 3. 项目进展

### 🚧 今日合并/关闭的重要 PR：**0 条**

5 条 PR 均保持 OPEN 状态，无合并动作。这意味着今日项目**没有实质代码合入主干**，从 CI/CD 与发布节奏角度看属于"间歇日"。

不过，**今日新增的 2 条 PR** (#3371, #3370) 展现了清晰的扩展信号：

| PR | 方向 | 状态 |
|---|---|---|
| [#3371](https://github.com/sipeed/picoclaw/pull/3371) | 新增 opencode-go provider，支持 session header | 今日新建 |
| [#3370](https://github.com/sipeed/picoclaw/pull/3370) | 新增 Keenable 联网搜索 provider | 昨日新建，今日仍有活动 |

---

## 4. 社区热点

### 🔥 今日最活跃议题
**[#3365](https://github.com/sipeed/picoclaw/issues/3365) — QQ channel fails with 401 "Authorization参数格式错误"**
- 作者: @crazysarah | 👍 1 | 评论 1
- 创建: 2026-09-04 | 更新: 2026-09-07
- **根因分析**: 依赖链 `botgo v0.2.1` + `resty >= v2.17.1` 在 `Authorization` header 处理上存在兼容性问题，导致 QQ 渠道鉴权失败
- **影响面**: 所有在 aarch64 设备（如 Orange Pi 3B / RK3566）使用 QQ 渠道的部署
- **用户诉求**: 需要上游 `botgo` 修复或 PicoClaw 端绕过/补丁方案

### 📌 PR 关注度排名
1. [#3371](https://github.com/sipeed/picoclaw/pull/3371) — opencode-go provider（关闭 Issue #3369）
2. [#3370](https://github.com/sipeed/picoclaw/pull/3370) — Keenable web search
3. [#3344](https://github.com/sipeed/picoclaw/pull/3344) — Build Remote Agent 手机配对（gbr/1）
4. [#3354](https://github.com/sipeed/picoclaw/pull/3354) — IRCv3 multiline
5. [#3353](https://github.com/sipeed/picoclaw/pull/3353) — 工具反馈动画生命周期修复

---

## 5. Bug 与稳定性

### 🐛 已知 Bug 清单

| 严重度 | Issue | 描述 | Fix PR | 状态 |
|---|---|---|---|---|
| 🔴 **高** | [#3365](https://github.com/sipeed/picoclaw/issues/3365) | QQ 渠道 401 鉴权失败，依赖 `botgo v0.2.1` + `resty >= v2.17.1` 不兼容 | ❌ 无 | OPEN |
| 🟡 中 | [#3353](https://github.com/sipeed/picoclaw/pull/3353) | 工具反馈动画可能在 lifecycle cleanup 失败时无限期编辑渠道消息 | ✅ 已提议 fix（PR 仍 OPEN） | 待合并 |
| 🟢 低 | IRC multiline 长消息被拆分 | [#3354](https://github.com/sipeed/picoclaw/pull/3354) 提供修复 | ✅ 已提议 fix（PR 仍 OPEN） | 待合并 |

**关键观察**: Issue #3365 是当前最严重的稳定性问题，影响 QQ 渠道完全不可用，且根因在外部依赖（`botgo`），需关注 `tencent-connect/botgo` 上游是否已修复。

---

## 6. 功能请求与路线图信号

### 🛠 用户提出的功能需求

1. **opencode-go provider 支持** → 已在 PR [#3371](https://github.com/sipeed/picoclaw/pull/3371) 实现，自动按模型分流至三个 endpoint family，并稳定 `x-opencode-session` header。**纳入下一版本概率：高**（活跃 PR，closes #3369）
2. **Keenable 联网搜索 provider** → 已在 PR [#3370](https://github.com/sipeed/picoclaw/pull/3370) 实现，无需 API key 即可启用。**纳入下一版本概率：中高**
3. **手机配对作为远端 agent spectator** → PR [#3344](https://github.com/sipeed/picoclaw/pull/3344)（已 stale 16 天）。**纳入概率：低**，需维护者重新激活评审
4. **IRCv3 multiline 消息接收** → PR [#3354](https://github.com/sipeed/picoclaw/pull/3354)（已 stale 8 天）

### 📈 路线图信号
社区正在向**多 provider 生态** + **跨设备/跨协议协同**方向演进。Provider 扩展（LLM + Web Search）是当前最热门的贡献方向。

---

## 7. 用户反馈摘要

### 💬 来自社区的真实声音

**Issue #3365 用户 @crazysarah 反馈**：
- **使用场景**: 在 Orange Pi 3B（RK3566，aarch64）上运行 PicoClaw nightly `0.3.1`，依赖 `botgo v0.2.1` 与间接依赖 `resty v2.17.1`
- **痛点**: QQ 渠道在升级 resty 后完全不可用，报 401 "Authorization参数格式错误"
- **不满点**: 上游 `botgo v0.2.1` 已是最新版本，但问题未修复，PicoClaw 用户被卡在中间层
- **诉求**: 期待 PicoClaw 端提供 workaround 或推动上游修复

**PR #3344 反映的需求**：
- **场景**: 开发者希望用手机 spectate 桌面 agent
- **诉求**: 在不影响现有协议的前提下加入新的 `gbr/1` 配对设备适配器（QR + 8位配对码），仅暴露 127.0.0.1:8788，安全性考量充分

---

## 8. 待处理积压 ⚠️

维护者需重点关注的**长期未响应项目**：

| 类型 | 编号 | 标题 | 未响应时长 | 建议 |
|---|---|---|---|---|
| PR | [#3344](https://github.com/sipeed/picoclaw/pull/3344) | Build Remote Agent phone pairing (gbr/1) | **16 天** | 已 stale，需维护者明确 reject/merge 意图 |
| PR | [#3353](https://github.com/sipeed/picoclaw/pull/3353) | fix(channels): bound tool feedback animations | **8 天** | 关键稳定性修复，建议优先评审 |
| PR | [#3354](https://github.com/sipeed/picoclaw/pull/3354) | feat(irc): assemble IRCv3 multiline messages | **8 天** | 协议增强，建议评审 |
| Issue | [#3365](https://github.com/sipeed/picoclaw/issues/3365) | QQ channel fails with 401 | 4 天 | 高严重度，建议尽快协调上游 |

### 🚨 健康度提示
- **Stale PR 占比**: 3/5 = 60% 的 PR 处于 stale 状态，提示响应链路可能存在瓶颈
- **无合并日**: 连续多日无 PR 合并，可能影响贡献者积极性
- **建议**: 维护者轮值快速 triage（即使 reject 也比沉默更友好），以维持社区活跃度

---

**报告生成说明**: 本报告基于公开 GitHub 数据生成。所有 Issue/PR 链接均可点击直达。如需更深入的单项分析或历史趋势对比，请告知。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目日报

**日期**：2026-09-08
**数据周期**：过去 24 小时
**仓库**：[qwibitai/nanoclaw](https://github.com/qwibitai/nanoclaw)

---

## 1. 今日速览

NanoClaw 今日活跃度处于**高位**，24 小时内共有 **30 条 Issue/PR 流转**，其中 PR 占据绝对主导（28 条），并以 **17:11 的合并/关闭与待合并比**显著推进。最大看点是核心维护者 gavrielc 推动了**"durable host" 整条主干线（#3508–#3528）的集成 PR #3653 成功合入**，将协调状态、唤醒接口、重启可恢复交付、Claim Fencing 等能力一次性落地，属于里程碑式进展。社区侧由 TO-maschenborn 连开 2 条关于**会话存档无界增长与日志轮转失效**的 Issue，指向长期运行场景下的资源治理短板，需要维护者尽快跟进。整体判断：项目处于**密集收敛期**，稳定性与基础设施层获得明显加固。

---

## 2. 版本发布

**无新版本发布**。考虑到 #3653 等多个基础设施级 PR 已合并到主干，预期下一个补丁或次版本（推测为 2.1.54 或 2.2.0）将在近期发布，建议关注 Release 页面：[github.com/qwibitai/nanoclaw/releases](https://github.com/qwibitai/nanoclaw/releases)。

---

## 3. 项目进展

今日合并/关闭的 17 条 PR 中，含多项**面向稳定性与可维护性**的关键变更，呈现"基础设施先行"的特征：

### 🏛️ 核心架构里程碑
- **[#3653] rollup: the durable host — coordination state, wake seam, reconcile queue, restart-honest delivery, claim fencing (#3508–#3528)** —— [链接](https://github.com/qwibitai/nanoclaw/pull/3653)
  gavrielc 一次性合入 #3508–#3528 整条链。**这是本期最重要的合并事件**，标志着 NanoClaw 的协调层从"进程内易失状态"过渡到"持久化 + 进程重启可恢复"。项目向前迈出一大步。

### 🗄️ 数据库与持久层
- **[#3517] feat(db): shadow-write coordination state alongside the in-memory maps** —— [链接](https://github.com/qwibitai/nanoclaw/pull/3517)
  引入 shadow-write 协调机制，将所有易失协调事实双写到 #3508 引入的持久行，in-memory map 仍为权威来源。
- **[#3518] fix(approvals): survive restarts — row-keyed resolution via the gateway-provider seam** —— [链接](https://github.com/qwibitai/nanoclaw/pull/3518)
  审批模块脱离对 Gateway SDK 的直接依赖，并实现进程重启存活。
- **[#3737] fix(db): stop the nested-continuation conformance test from racing its own watchdog** —— [链接](https://github.com/qwibitai/nanoclaw/pull/3737)
  修复 PostgreSQL 上嵌套续接一致性测试与 watchdog 自竞争导致的超时。

### 🔁 任务调度与进程恢复
- **[#1519] fix: prevent duplicate task runs, clean up orphaned tasks, and harden IPC** —— [链接](https://github.com/qwibitai/nanoclaw/pull/1519)
  慢任务（>60s）的重复触发、`once` 孤立任务清理、IPC 加固。开源于 3 月，今日终于合入，属于**长期挂账终于清账**。
- **[#3400] fix(typing): end typing status when the reply is delivered** —— [链接](https://github.com/qwibitai/nanoclaw/pull/3400)
  修复 Slack "正在输入"指示器可能比实际回复持续更久（甚至数分钟）的体验问题。

### 🐳 容器与 CI
- **[#3661] fix(container): retry the Bun install instead of failing the image build** —— [链接](https://github.com/qwibitai/nanoclaw/pull/3661)
  `container/Dockerfile` 中 Bun 安装通过 `curl | bash` 拉取，遇到网络抖动即失败。改为重试，显著降低镜像构建失败率。
- **[#3736] ci: add a gate job and a post-merge run on main** —— [链接](https://github.com/qwibitai/nanoclaw/pull/3736)
  引入 `gate` 任务与 main 分支 post-merge 运行，避免 #3737 那类"上下文不全绿却自动合入"的回归。
- **[#3739] ci(registry-skills): a `registry gate` check + Docker Hub 5xx 韧性** —— [链接](https://github.com/qwibitai/nanoclaw/pull/3739)
  配套增加 `registry gate` 校验与 Docker Hub 抖动下的构建存活能力。

### 📊 整体推进度
今日的合入**显著抬高了"持久化 + 重启可恢复"这条主线的成熟度**，并对 CI 防线做了反思性加固；这是面向 2.2.x 系列打地基的信号。

---

## 4. 社区热点

按社区互动与潜在影响筛选：

| 议题 | 关注点 | 链接 |
|---|---|---|
| **#3735 conversations/ archives grow without bound** | 长期 agent 部署的关键运维痛点 | [Issue](https://github.com/qwibitai/nanoclaw/issues/3735) |
| **#3738 [PR] thread replies from the message being answered** | 修复回复/文件不再落到主频道 | [PR](https://github.com/qwibitai/nanoclaw/pull/3738) |
| **#3743 [PR] AgentMail email channel adapter** | 新增免 MX 记录的邮件通道 | [PR](https://github.com/qwibitai/nanoclaw/pull/3743) |
| **#3729 [PR] Connect the host to its community cell** | 把 Echo/Slack 配置迁入浏览器门户 | [PR](https://github.com/qwibitai/nanoclaw/pull/3729) |

**诉求分析**：
- 用户**正在把 NanoClaw 跑成"长寿命生产代理"**（fleet 部署、长周期任务），因此对**资源治理（存档上限、轮转）**和**重启可恢复**提出了系统性要求；
- **多通道化（邮件、Phone Pairing、Community Portal）**持续是用户最关心的扩展面，#3743 与 #3494 几乎同时涌入；
- **易用性配置（CLI、Web 门户）**正在取代纯 YAML/script 配置成为用户的新预期。

---

## 5. Bug 与稳定性

按严重程度（生产影响面）排序：

| 严重度 | 编号 | 问题 | 状态 |
|---|---|---|---|
| 🔴 高 | [#3735](https://github.com/qwibitai/nanoclaw/issues/3735) | `conversations/` 目录无界增长（无 retention/rotation/cap） | OPEN，**暂无对应 fix PR** |
| 🟠 中-高 | [#3732](https://github.com/qwibitai/nanoclaw/issues/3732) | 长存活 container 的会话轮转永远不会触发 | OPEN，**暂无对应 fix PR** |
| 🟡 中 | [#3742 (PR, 修复 #3690)](https://github.com/qwibitai/nanoclaw/pull/3742) | `ncl groups config add-mount` 的 `--ro` 实际是 no-op，且无法表达可写挂载 | OPEN PR 待审 |
| 🟡 中 | [#3738 (PR)](https://github.com/qwibitai/nanoclaw/pull/3738) | `send_message` / `send_file` 回复落入主频道而非原线程 | OPEN PR 待审 |
| 🟡 中 | [#3740 (PR)](https://github.com/qwibitai/nanoclaw/pull/3740) | 入站路由完成 promise 被丢弃，导致消息可能先标"已处理"再写入失败 | OPEN PR 待审 |
| 🟢 低 | [#3737](https://github.com/qwibitai/nanoclaw/pull/3737) / [#3661](https://github.com/qwibitai/nanoclaw/pull/3661) / [#3400](https://github.com/qwibitai/nanoclaw/pull/3400) | 测试自竞争 / Bun 安装抖动 / Slack typing 残留 | **已修复并合并** ✅ |

**重点提醒**：
- **#3735 + #3732 是同一作者针对"长寿命 agent 会话治理"提出的双联问题**，建议维护者优先关注并以一条主题 PR 集中治理（例如在 `archiveTranscriptFile()` 中加入基于 size/time/count 的 retention 策略，并改造 `maybeRotateContinuation()` 的调用点）；
- #3742 揭示**配置层的语义 bug**（`--ro` 是 no-op 而非显式只读），不仅影响功能还涉及用户对 CLI 行为的信任，需要在 changelog 中显式说明。

---

## 6. 功能请求与路线图信号

今日开放的功能类 PR 反映出几条清晰的演进方向：

1. **多通道生态扩展** 🔌
   - [#3743 AgentMail 邮件通道适配器](https://github.com/qwibitai/nanoclaw/pull/3743) —— 解决自建邮件通道的 DNS/MX 痛点，**纳入下一版本的概率高**。
   - [#3494 Build Remote Agent 手机配对 `gbr/1`](https://github.com/qwibitai/nanoclaw/pull/3494) —— 移动端"围观"桌面代理，开放已 2 周，仍待核心团队评审。

2. **Provider 能力补齐** 🧩
   - [#3733 feat(add-opencode)](https://github.com/qwibitai/nanoclaw/pull/3733) —— 让 OpenCode 在 setup 阶段可选，并提供 self-contained provider skill。

3. **任务模型升级** ⏱️
   - [#3741 feat(tasks): --fresh-session](https://github.com/qwibitai/nanoclaw/pull/3741) —— 让定时任务可选择无状态执行，避免长会话成本线性增长（一周 +15% 的真实数据），**这是企业用户切实痛点，纳入版本概率高**。

4. **A2A（Agent-to-Agent）通信可靠性** 🤝
   - [#3719 fix(a2a): report communication failures](https://github.com/qwibitai/nanoclaw/pull/3719)
   - [#3718 fix(a2a): preserve verified sender identity](https://github.com/qwibitai/nanoclaw/pull/3718)
   - 共同目标：让 agent 间通信具备**可追溯、可失败上报、可身份验证**的语义，配套 #3518 的 approval 重启存活，**构成下一版本 a2a 子系统的可信基线**。

5. **社区化与安装体验** 🌐
   - [#3729 Connect the host to its community cell](https://github.com/qwibitai/nanoclaw/pull/3729) —— 把配置与 perks 管理迁入浏览器门户 + WorkOS 单点登录。

**信号判断**：上述方向与已合入的 durable-host 主线强协同（持久化 + 通道 + a2a 共同形成可商用的"多通道多 agent 主机"形态），**2.2.x 系列大概率围绕"持久化 + 多通道 + 浏览器门户"三条线展开**。

---

## 7. 用户反馈摘要

从 Issue 评论与 PR 描述中提炼：

- 🗣️ **TO-maschenborn（生产部署用户）**：
  > 在 fleet 上 `groups/<folder>/conversations/` 已无法控制增长；短周期定时任务让 container 永不进入 30 分钟 idle，因此 `maybeRotateContinuation()` 永远不会被调用。
  **核心痛点**：长寿命 agent 的"资源卫生"完全缺位，与 #3741 的"长会话成本递增"是同一硬币的两面。

- 🗣️ **#3741 作者 slambert**：
  > 每晚执行相同任务的 agent 都要重读之前所有夜晚的对话，一周内上下文增长 15%。
  **核心痛点**：定时任务缺乏"无状态运行"选项，资源效率受损。

- 🗣️ **#3718 / #3719 作者 Koshkoshinsk**：
  > 接收端拒绝合法消息；单向边的消息以 `from="unknown:agent:<id>"` 出现；agent 间通信失败缺乏对源端的回传。
  **核心痛点**：A2A 信任模型尚不完整，企业内多 agent 协作场景受阻。

- 🗣️ **#3739 描述（维护者自述）**：
  > #3737 在 Registry skills workflow 三个 job 红的情况下自动合入，没有任何 required context 拦住。
  **维护者反思**：CI 防线不足以阻止"上下文不绿"的合并，正在用 #3736/#3739 加固。

**满意度信号**：维护者层面**主动暴露流程缺陷**（#3739），社区层**主动提交修复 PR 而非仅抱怨**（#3718、#3719、#3742、#3741），属于健康协作模式。

---

## 8. 待处理积压

按"开放时长 × 影响面"排序的值得关注项：

| 项 | 类型 | 开放天数（截至 2026-09-08） | 状态 | 链接 |
|---|---|---|---|---|
| **#3494 Build Remote Agent phone pairing** | PR（功能） | **约 16 天**（2026-08-23 起） | OPEN，无评审互动 | [链接](https://github.com/qwibitai/nanoclaw/pull/3494) |
| **#3690 add-mount --rw 修复前置 Issue** | Issue（驱动 #3742） | 待核查 | 已有修复 PR #3742 但 Issue 本身未关 | [PR](https://github.com/qwibitai/nanoclaw/pull/3742) |
| **#3735 conversations/ 无界增长** | Issue | 1 天 | OPEN，无 PR 认领 | [链接](https://github.com/qwibitai/nanoclaw/issues/3735) |
| **#3732 容器长存活致轮转失效** | Issue | 1 天 | OPEN，无 PR 认领 | [链接](https://github.com/qwibitai/nanoclaw/issues/3732) |

**维护者提醒**：
1. **#3494 已挂 2 周以上**，对外部贡献者而言是负面信号，建议维护者至少给出 review 反馈或合并/关闭决定；
2. **#3735 与 #3732 是同一方向的孪生问题**，建议在仓库中新增 `area/retention` / `kind/feature: retention policy` 标签集中追踪；
3. #3742 修复后请同步关闭驱动它的 #3690，避免重复提及。

---

## 📌 项目健康度评估

| 维度 | 评分 | 说明 |
|---|---|---|
| **活跃度** | ⭐⭐⭐⭐⭐ | 24h 30 条流转，PR/Issue 比 14:1，活力充沛 |
| **核心维护** | ⭐⭐⭐⭐⭐ | gavrielc 单日完成里程碑级 rollup |
| **CI/工程纪律** | ⭐⭐⭐⭐ | 主动反思 #3737 事件并加固 (#3736/#3739) |
| **社区响应** | ⭐⭐⭐ | 外部 PR 评审节奏偏慢（#3494 16 天未动） |
| **稳定性方向** | ⭐⭐⭐⭐ | durable-host 主线合入显著抬升基线 |

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目日报
**日期：2026-09-08**

---

## 1. 今日速览

NullClaw 今日活跃度处于**低位**水平。过去 24 小时内无 Issues 更新，无新版本发布，唯一变动来自 Dependabot 自动提交的 Docker 基础镜像依赖升级 PR（#956），仍处于待合并状态。当前项目整体处于**维护性静默期**，无显著功能推进或社区讨论迹象。建议维护者适时介入，清理积压的依赖更新并评估后续路线图。

---

## 2. 版本发布

**无新版本发布。**

过去 24 小时内无 Releases 推送，版本基线保持不变。

---

## 3. 项目进展

### 今日合并/关闭的重要 PR

**无 PR 合并或关闭。**

唯一活跃 PR 仍处于待合并状态：

| PR 编号 | 标题 | 状态 | 链接 |
|---------|------|------|------|
| #956 | ci(deps): bump alpine from 3.23 to 3.24 (docker-images group) | OPEN | [nullclaw/nullclaw#956](https://github.com/nullclaw/nullclaw/pull/956) |

- **提交者**：dependabot[bot]
- **创建时间**：2026-06-15
- **最后更新**：2026-09-07
- **评论数**：0
- **点赞数**：0
- **性质**：纯依赖升级（Alpine 3.23 → 3.24），属常规安全/维护性变更，对运行时无破坏性影响。

**推进评估**：项目今日在功能或修复层面无实质向前推进。

---

## 4. 社区热点

### 今日讨论最活跃的 Issues/PRs

**无活跃讨论。**

- Issues 评论数：0
- PR 评论数：0
- 无反应（👍）互动数据

**分析**：社区今日无任何互动反馈。依赖更新类 PR（#956）虽属"无争议"变更，但长期滞留（已开 85 天）反映出社区参与度不足或维护者响应延迟。

---

## 5. Bug 与稳定性

### 今日报告的 Bug / 崩溃 / 回归问题

**无新增 Bug 报告。**

今日无任何 Issues 提交或更新，无法定位新的稳定性问题。

**遗留风险提示**：
- ⚠️ PR #956（Alpine 升级）已积压 **85 天**（自 2026-06-15 起），Alpine 3.23 已发布一段时间，若 3.23 系列后续出现安全公告，NullClaw 的 Docker 镜像将处于已知风险窗口。建议维护者尽快评估合并或关闭该 PR。

---

## 6. 功能请求与路线图信号

**无新功能请求提交。**

由于 Issues 区域完全静默，无法从用户端获取新需求信号。基于现有数据观察：

- 项目当前活跃内容仅剩 **Dependabot 自动化 PR**，表明开发节奏可能放缓，或已进入稳定维护阶段。
- 维护者若希望推动路线图，建议主动发布 milestone 或 discussion 引导社区反馈。

---

## 7. 用户反馈摘要

**今日无可提炼的用户反馈。**

Issues 区域零活动，PR 评论区亦无用户参与。无痛点、使用场景或满意度信息可供分析。

---

## 8. 待处理积压

### 长期未响应的重要 Issue/PR

| 类型 | 编号 | 标题 | 创建时间 | 持续天数 | 严重程度 | 链接 |
|------|------|------|----------|----------|----------|------|
| PR | #956 | ci(deps): bump alpine from 3.23 to 3.24 | 2026-06-15 | **85 天** | 🟡 中（依赖安全） | [#956](https://github.com/nullclaw/nullclaw/pull/956) |

**提醒维护者**：
- 🔔 PR #956 停留已超过两个月且无任何审查动作，建议明确决策（合并/关闭/拆分），避免依赖积压进一步老化。
- 📌 若项目仍处于活跃维护状态，建议定期（如每两周）巡检 Dependabot PR 队列。

---

## 项目健康度总评

| 维度 | 评分 | 说明 |
|------|------|------|
| 活跃度 | ⭐☆☆☆☆ (1/5) | 仅自动化机器人活跃，无人工提交 |
| 社区参与 | ⭐☆☆☆☆ (1/5) | 零评论、零互动 |
| 维护响应 | ⭐⭐☆☆☆ (2/5) | 依赖 PR 长时间未处理 |
| 稳定性 | ⭐⭐⭐⭐☆ (4/5) | 无新 Bug 报告，但依赖存在潜在滞后 |
| 综合 | ⭐⭐☆☆☆ (2/5) | 项目呈静默维护迹象，建议主动激活 |

> **结论**：NullClaw 今日呈"静默期"特征，无推进亦无衰退。建议维护者聚焦两件事：① 处理积压的 Dependabot PR；② 通过 Discussion 或 Issue 发布下一阶段规划，重新激活社区关注。

---
*报告生成基于 GitHub 公开数据，数据时间窗口为 2026-09-07 至 2026-09-08。*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目日报 · 2026-09-08

> 数据周期：2026-09-07 ~ 2026-09-08（过去 24 小时）
> 数据源：GitHub 公开 API · nearai/ironclaw

---

## 1. 今日速览

IronClaw 今日呈现出**"持续投入但尚未落地"的典型节奏**：仓库内产生了 5 个新 PR 与 1 个新 Issue，但**当日合并/关闭数为 0**，亦无新版本发布。所有 PR 都处于待合并状态，活跃贡献者仅 2 人（`italic-jinxin` 4 个、`be-student` 1 个），均为核心成员（`contributor: core`）。当日 Issue 为机器人生成的"失败分类日榜"（failure taxonomy），属于常规 benchmark 监控产物，不涉及交互性社区问题。整体来看，项目维持小幅迭代，但**闭环效率偏低**，PR 评审/合并环节存在积压迹象。

---

## 2. 版本发布

⚠️ 过去 24 小时**无新版本发布**，最近一次发版距今已有数日以上，建议关注 release 节奏是否回归正常。

---

## 3. 项目进展

⚠️ **今日无任何 PR 被合并或关闭**，以下 5 个 PR 仍处于开放状态：

| PR | 标题 | 作者 | 体积/风险 | 领域 |
|----|------|------|-----------|------|
| [#8071](https://github.com/nearai/ironclaw/pull/8071) | fix(webui): preserve command result card height | italic-jinxin | XS / 低 | WebUI |
| [#8070](https://github.com/nearai/ironclaw/pull/8070) | fix(webui): align slash-command metadata | italic-jinxin | XS / 低 | WebUI（文档） |
| [#8069](https://github.com/nearai/ironclaw/pull/8069) | fix(webui): add dismiss actions to command result cards | italic-jinxin | M / 低 | WebUI |
| [#8068](https://github.com/nearai/ironclaw/pull/8068) | fix(webui): keep the active slash command visible | italic-jinxin | S / 低 | WebUI（文档） |
| [#8076](https://github.com/nearai/ironclaw/pull/8076) | fix(assistant): distinguish disconnected shared channels | be-student | — / 低 | Assistant 集成 |

**主题观察**：5 个 PR 中有 4 个集中在 **WebUI/对话交互体验** 的打磨上——主要围绕 `/` 斜杠命令菜单的可用性（对齐、可见性、可关闭性、卡片高度）展开。这是一组**高度协同的 UI 微迭代**，看起来是 `italic-jinxin` 在做一个有结构的对话交互体验改进包，建议维护者作为整体评审以避免碎片化合并。

PR #8076 是当日唯一一个**非 WebUI** 的提交，针对 Slack 共享频道的"已配对用户断开"与"未配对账户"两种语义混淆进行区分，并涉及 adapter、OpenAI 兼容层与 Slack capability 文档同步，属于**跨层一致性修复**，影响面较 #8069 之外的其他 3 个更大。

**项目整体推进度**：当日的 5 个 PR 推进主要停留在"准备就绪、等待评审"的状态，实质功能/修复尚未落到 main 分支，**净代码推进 ≈ 0 行**（在合并前）。

---

## 4. 社区热点

| 排名 | 指标 | 条目 | 备注 |
|------|------|------|------|
| 🥇 | 评论 0 / 👍 0 | [Issue #8081](https://github.com/nearai/ironclaw/issues/8081) — Daily ironclaw failure taxonomy — 2026-09-07 | 唯一活跃 Issue，但属 benchmark 自动报告 |
| 🥈 | 评论 undefined / 👍 0 | [PR #8069](https://github.com/nearai/ironclaw/pull/8069) | 5 个 PR 中体量最大（M），涉及可访问性 dismiss 行为 |

**分析**：
- 当日**无社区讨论热点**——所有条目评论数均为 0 或未统计，"热度"来自 PR 体积而非互动量。
- Issue #8081 是**自动生成的 failure taxonomy 报告**，由 `pranavraja99` 创建，对 officeqa 等基准的失败样本进行归因（DeepSeek-V4-Flash 等模型出现数值错误）。该 Issue 的诉求不是"修 Bug"，而是**暴露模型质量信号**，应作为长期观测项而非短期响应项。
- 真正具备**用户面向价值**的热点是 PR #8069（dismiss actions on command result cards），它直接改善对话界面交互，符合 WebUI 体验优化的社区期望。

---

## 5. Bug 与稳定性

当日**未收到用户报告的 Bug / 崩溃 / 回归 Issue**。

间接稳定性信号：
- **Issue #8081**（自动）提示 officeqa 基准存在 42 个失败，主要归因为模型质量（数值推理），**非 IronClaw 代码缺陷**。🔗 [Issue #8081](https://github.com/nearai/ironclaw/issues/8081)
- PR #8076 揭示了一个潜在的**用户感知 Bug**：在共享频道场景下，"已配对的对方用户账号已断开"与"未配对陌生账户"被错误归为同一种拒绝路径，可能造成误判与不佳引导。⏳ **已有 fix PR 待合并**（[#8076](https://github.com/nearai/ironclaw/pull/8076)）。

| 严重程度 | Bug | 是否已有 fix PR |
|----------|-----|----------------|
| 中 | 共享频道断开/未配对语义混淆（#8076） | ✅ 已有 PR #8076 待合并 |
| 信息级 | 模型在数值任务上的失败率（#8081） | ❌ 不属代码问题 |

---

## 6. 功能请求与路线图信号

当日没有显式的功能请求 Issue。但从 PR 方向可推断**隐性路线图信号**：

1. **WebUI 对话体验精细化**（强信号，4 个 PR）
   - 斜杠命令菜单的对齐 ([#8070](https://github.com/nearai/ironclaw/pull/8070))、键盘可达性 ([#8068](https://github.com/nearai/ironclaw/pull/8068))、可关闭结果卡片 ([#8069](https://github.com/nearai/ironclaw/pull/8069))、卡片高度稳定 ([#8071](https://github.com/nearai/ironclaw/pull/8071)) 形成完整闭环。
   - 推测下一版本将包含一整套"对话 UI 可用性提升"，建议**合并时按主题批次处理**以减少冲突。

2. **多通道助手一致性**（中等信号，1 个 PR）
   - PR #8076 同步产品层、adapter 层、OpenAI 兼容层与 Slack capability 文档，提示项目正推进**跨 surface 行为一致性**，符合企业/平台化方向。

3. **Benchmark 自动化观测**（持续信号）
   - Issue #8081 表明团队有日更 failure taxonomy 机制，建议在 Roadmap 中明确该观测的目标行动项（如：连续 N 天超过阈值即触发模型回退评估）。

---

## 7. 用户反馈摘要

⚠️ **当日所有开放条目的评论数均为 0**，无新增用户反馈文本。

仅有的可解读信号来自 Issue 标题与摘要：
- **officeqa 失败模式**：DeepSeek-V4-Flash 等模型出现大量"真数 numeric error"——用户（benchmark 使用方）实际痛点为**模型在数值/办公类任务上的精度不足**，IronClaw 作为承载方可在 prompt、tool 编排或模型路由层提供缓解（但 #8081 本身未要求）。

---

## 8. 待处理积压 ⚠️

> 这是本期日报最值得维护者关注的部分。

| 风险点 | 详情 |
|--------|------|
| 🟡 **PR 评审积压** | 5 个 PR 均已创建 2~4 天（[#8068](https://github.com/nearai/ironclaw/pull/8068)、[#8069](https://github.com/nearai/ironclaw/pull/8069)、[#8070](https://github.com/nearai/ironclaw/pull/8070)、[#8071](https://github.com/nearai/ironclaw/pull/8071) 为 9-04 创建，[#8076](https://github.com/nearai/ironclaw/pull/8076) 为 9-06 创建），但**至 9-08 仍无 review 评论、无合并**，节奏偏慢。 |
| 🟡 **WebUI 主题合并策略缺失** | 4 个高度相关的 WebUI PR 由同一作者提出，缺乏 review 反馈可能引发合并冲突。 |
| 🟢 **Issue #8081 无需短期响应** | 属自动观测型 Issue，按既定节奏跟踪即可。 |
| 🟢 **版本发布停摆** | 短期内若无合并动作，版本节奏将持续停滞。 |

**给维护者的具体建议**：
1. 对 `italic-jinxin` 的 4 个 WebUI PR 进行**集中 review**，优先合并 #8069（M 体量、含可访问性变更，影响面最大）。
2. 评估 PR #8076 的跨层一致性变更是否需要在 changelog 中显式提示。
3. 若 release 计划近期执行，建议本周内完成至少 2~3 个 PR 的合并以恢复节奏。

---

*报告生成时间：2026-09-08 · 数据基于 GitHub 公开 API 快照 · 仅反映过去 24 小时窗口*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目日报
**日期：2026-09-08**
**数据来源：[netease-youdao/LobsterAI](https://github.com/netease-youdao/LobsterAI)**

---

## 1. 今日速览

LobsterAI 在过去 24 小时内呈现**高活跃度的内部修复与迭代日**。共产生 8 条 PR 更新（6 条已合并/关闭，2 条仍处于 Open 状态），但 Issues 端无任何更新，呈现典型的"代码侧热、社区侧冷"的工作节奏。合并的 6 个 PR 横跨 Windows 安装器字体、本地任务库的产品交互、OpenClaw 网关子进程修复、内嵌浏览器稳定性及 Windows 测试可移植性等多个模块，表明项目正处在跨平台收尾与体验打磨阶段。整体而言，项目健康度良好，无新增 P0 级别问题，旧 PR 也未出现停滞风险。

---

## 2. 版本发布

今日无新版本发布。

---

## 3. 项目进展

今日 6 个 PR 已成功合并/关闭，是项目近期的合并高峰之一：

- **[#2623](https://github.com/netease-youdao/LobsterAI/pull/2623) — 任务优先排序与网格分组折叠**（作者：liugang519）  
  覆盖 renderer / docs / main / cowork 四大模块。核心改动：按任务最近更新时间统一本地产物的分组与分页；新增任务组、组内文件独立分页、预览、续载、收起能力；加固协议版本与游标校验防过期覆盖；优化折叠控件样式与无障碍支持。同步修复了 macOS 开发模式下网关显示额外 Dock 图标的问题，并补充回归测试与设计文档。**这是今日推进度最大的功能型 PR**。

- **[#2622](https://github.com/netease-youdao/LobsterAI/pull/2622) — 网关子进程 Node 模式继承修复**（作者：liugang519）  
  统一使用 `spawn` 以 Node 模式启动网关，确保工作进程正确继承运行环境；补丁应用失败时强制终止 `postinstall`，避免脏环境；补充启动参数、环境继承与异常退出的测试覆盖。

- **[#2620](https://github.com/netease-youdao/LobsterAI/pull/2620) — NSIS 安装器 CJK 字体现代化**（作者：fisherdaddy）  
  覆盖安装器在 Windows 上的显示质量：用 Windows 10+ 系统 UI 字体替换 NSIS CJK 语言文件内置的 9pt SimSun/PMingLiU/MS PGothic/Gulim 位图字体，配合 DPI 感知安装器解决锯齿问题；通过 `!ifdef` 守护压缩的 `installerLanguages` 列表仍可编译。

- **[#2621](https://github.com/netease-youdao/LobsterAI/pull/2621) — 内嵌浏览器元素引用解析与工具错误透出**（作者：btc69m979y-dotcom）  
  修复 OpenClaw `scrollIntoView` 操作因 snapshot 元素引用被当作字符串导致的 `TypeError`，并将仅以 `Uncaught` 上报的异常转为可定位的错误信息，移除漂浮在浏览器上方的错误提示横幅。

- **[#2617](https://github.com/netease-youdao/LobsterAI/pull/2617) — 内嵌浏览器登录与标签页控制改进**（作者：btc69m979y-dotcom）  
  保存登录提示可手动关闭且在导航/切换 Tab 时自动清除；凭据设置面板在保存新增条目后保持展开；将页面下拉框替换为可滚动 Tab 条，新增"相邻 Tab 选中"和"保留当前页新建空白 Tab"行为。

- **[#2619](https://github.com/netease-youdao/LobsterAI/pull/2619) — Windows 路径可移植性测试修复**（作者：btc69m979y-dotcom）  
  修复在 OpenClaw v2026.8.1 升级分支上 Windows 验收发现的 4 个测试失败（3 个 macOS 安装器 + 1 个缩略图队列优先级）；仅修改测试文件，未触碰生产代码/Runtime/Patches。

**总结**：今日将 LobsterAI 向"跨平台一致性 + 本地产物管理可用性"方向又推进了一步，桌面端在 Windows 安装体验、Mac 开发体验、文件管理 UX 三个维度的体验完整性均得到加强。

---

## 4. 社区热点

Issues 端今日无任何更新，因此社区讨论热度集中在 PR 评论与 React 反馈上，但所有今日 PR 均未收到任何评论或点赞（`👍: 0`），整体偏"提交即合并"的内部协作节奏。

值得关注的两条 Open PR 由于历史较长，存在一定的社区潜在关注：

- **[#1277](https://github.com/netease-youdao/LobsterAI/pull/1277) — Dependabot 升级 electron 40.2.1 → 44.2.0**  
  一次跨越 4 个大版本的 Electron 升级提案，自 2026-04-02 创建至今未合并，属于"高风险但必须做"的依赖治理项。
- **[#1067](https://github.com/netease-youdao/LobsterAI/pull/1067) — 停止为 OpenClaw 心跳自动创建 [OpenClaw] 会话**  
  自 2026-03-30 创建至今未合并，与今日 #2623、#2622 同属 OpenClaw / cowork 链路，但标记为 `[stale]`，暗示社区用户曾反复反馈"幽灵会话"问题。

---

## 5. Bug 与稳定性

按严重程度排列：

| 严重度 | 问题 | 状态 | PR 链接 |
|---|---|---|---|
| **High** | OpenClaw 心跳自动创建 `[OpenClaw]` Cowork 会话，用户删除后反复出现 | **已有修复 PR 但仍未合并（stale）** | [#1067](https://github.com/netease-youdao/LobsterAI/pull/1067) |
| **Medium** | 内嵌浏览器 `scrollIntoView` 因元素引用类型错误抛 `Uncaught`，出现漂浮错误横幅 | **今日已修复并合并** | [#2621](https://github.com/netease-youdao/LobsterAI/pull/2621) |
| **Medium** | 网关子进程未正确继承 Node 模式运行环境，补丁失败导致脏环境 | **今日已修复并合并** | [#2622](https://github.com/netease-youdao/LobsterAI/pull/2622) |
| **Low** | Windows 安装器在高 DPI 下 CJK 字体锯齿 | **今日已修复并合并** | [#2620](https://github.com/netease-youdao/LobsterAI/pull/2620) |
| **Low** | Windows 验收测试在 OpenClaw v2026.8.1 升级分支上 4 例失败（仅测试） | **今日已修复并合并** | [#2619](https://github.com/netease-youdao/LobsterAI/pull/2619) |

**评估**：今日合入的 6 个 PR 中，5 个直接对应稳定性/可移植性修复，稳定性贡献占比超过 80%。**唯一遗留的 High 级问题是 OpenClaw 心跳幽灵会话，建议维护者优先审阅 #1067**。

---

## 6. 功能请求与路线图信号

虽然今日无新 Issue 提出功能请求，但合并的 PR 已透露出明确的产品方向：

- **本地任务库的产品化（#2623）**：从"按时间排序的产物列表"升级为"任务组 + 分页 + 折叠 + 续载"，暗示团队正在把本地任务流从内部工具向用户可感知的产品形态推进。配套的设计文档更新表明这是经过设计的迭代，而非临时修补。
- **多 Tab 内嵌浏览器体验提升（#2617）**：从下拉框 → Tab 条、可关闭的登录提示、相邻 Tab 切换、保留当前页新建 Tab，符合现代浏览器操作习惯，预计会成为后续打开网页/Cowork 流的标准交互。
- **跨平台一致性（#2620 + #2619 + #2622）**：Windows 安装字体、Mac Dock 图标、网关子进程模式 —— 三处分别针对三个不同操作系统的痛点收敛，表明路线图重心已从"功能上线"转向"全平台打磨"。

**下一版本可纳入的信号**：
1. Electron 44 升级（#1277）是潜在下一个大版本必须解决的兼容性风险；
2. OpenClaw 心跳幽灵会话（#1067）已是用户反复抱怨的问题，应优先合入；
3. 任务库的分页/折叠 UX（#2623）已具备作为对外宣传亮点的条件。

---

## 7. 用户反馈摘要

今日 Issues 端无更新，无新增用户评论。以下是从合并 PR 描述中可观察到的**间接用户痛点信号**：

- **用户对"幽灵会话"的疲劳**（[#1067](https://github.com/netease-youdao/LobsterAI/pull/1067)）：删了又出现，说明用户已经多次手动清理；这是非常强的"未解决即流失"信号。
- **用户对浏览器错误提示的困惑**（[#2621](https://github.com/netease-youdao/LobsterAI/pull/2621)）：原实现仅报 `Uncaught`，既无法定位又给用户造成不安全感；这反映出当前内嵌浏览器的可观测性对终端用户不够友好。
- **Windows 高 DPI 用户的视觉体验**（[#2620](https://github.com/netease-youdao/LobsterAI/pull/2620)）：CJK 字体锯齿直接影响安装器第一印象，对中文/日文/韩文用户属于"未装先嫌"的负面体验。

---

## 8. 待处理积压

| 编号 | 类型 | 创建日期 | 标题 | 状态 | 链接 |
|---|---|---|---|---|---|
| #1277 | 依赖升级 | 2026-04-02 | electron 40.2.1 → 44.2.0（4 个大版本跨度） | Open | [链接](https://github.com/netease-youdao/LobsterAI/pull/1277) |
| #1067 | Bug 修复 | 2026-03-30 | 停止为 OpenClaw 心跳自动创建 `[OpenClaw]` 会话（`[stale]`） | Open | [链接](https://github.com/netease-youdao/LobsterAI/pull/1067) |

**提醒维护者**：
- **#1067 已标记 `[stale]`，距今约 5 个月**，对应"用户删除会话后反复出现"这种高频反馈路径，建议优先 review 并合并，避免用户继续体验到已知问题。
- **#1277 距今约 5 个月，Electron 跨度大**，建议安排专门窗口进行验证，否则越拖合并成本越高，且后续安全补丁发布也会受阻。

---

### 附：今日 PR 全景

| 状态 | 编号 | 模块 | 类型 | 链接 |
|---|---|---|---|---|
| ✅ Closed | #2620 | windows/installer | Fix | [链接](https://github.com/netease-youdao/LobsterAI/pull/2620) |
| ✅ Closed | #2623 | renderer/docs/main/cowork | Feat | [链接](https://github.com/netease-youdao/LobsterAI/pull/2623) |
| 🟢 Open | #1277 | deps-dev | Chore | [链接](https://github.com/netease-youdao/LobsterAI/pull/1277) |
| ✅ Closed | #2621 | main/openclaw | Fix | [链接](https://github.com/netease-youdao/LobsterAI/pull/2621) |
| ✅ Closed | #2622 | main/openclaw | Fix | [链接](https://github.com/netease-youdao/LobsterAI/pull/2622) |
| 🟢 Open | #1067 | openclaw | Fix（stale） | [链接](https://github.com/netease-youdao/LobsterAI/pull/1067) |
| ✅ Closed | #2617 | renderer/main/artifacts | Fix | [链接](https://github.com/netease-youdao/LobsterAI/pull/2617) |
| ✅ Closed | #2619 | main | Test | [链接](https://github.com/netease-youdao/LobsterAI/pull/2619) |

---

*报告生成基于 2026-09-08 当日 GitHub 公开数据。*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目日报
**日期：2026-09-08**

---

## 1. 今日速览

Moltis 项目今日活跃度处于低位，过去 24 小时内无新增 Issue、无已合并 PR、无新版本发布。仅有 **1 个待合并 PR（#1262）** 被提出，聚焦于 `cron` 模块中 `active_hours` 配置项在 `end="24:00"` 边界值下的解析 Bug 修复。整体来看，项目处于相对平静的维护阶段，无大规模功能迭代或社区讨论热度信号。维护者可借此窗口处理积压的低复杂度改动。

---

## 2. 版本发布

📭 **今日无新版本发布。**

近期版本节奏仍待观察，建议关注下个发版节点以确认 #1262 等修复是否被纳入。

---

## 3. 项目进展

🚧 **今日无 PR 被合并或关闭。**

今日仅有 1 个新提交的 PR 处于待审核状态，尚未对项目主干产生推进。整体代码仓库状态保持稳定，未有显著演进。

---

## 4. 社区热点

📊 **今日社区讨论热度极低，无评论互动。**

唯一活跃的 PR #1262 尚无评审反馈（评论数：0，👍：0）。这与项目整体活跃度匹配，说明今日社区参与处于静默期。

- 🔗 [PR #1262 - fix(cron): treat active_hours end="24:00" as end-of-day](https://github.com/moltis-org/moltis/pull/1262)

---

## 5. Bug 与稳定性

### 🐛 P2 - 中优先级 Bug（已有修复 PR）

**[Bug] cron 模块 `active_hours` 边界值解析失败导致 fail-open 全时启用**
- **影响范围**：所有依赖 `active_hours` 进行时间窗限制的 cron 任务
- **根因**：`is_within_active_hours` 函数在解析 `end` 时未优先处理 `"24:00"` 这一特殊值；chrono 的 `%H` 格式说明符拒绝 hour 24，导致解析失败。
- **后果**：在文档化的默认配置（`start = "08:00"`, `end = "24:00"`）下，无效配置触发了 fail-open 逻辑，任务在**所有小时**都被视为活跃。
- **影响面**：默认配置用户全部受影响，可能导致预期外的任务在夜间/清晨执行，存在资源浪费与业务逻辑偏差风险。
- **修复状态**：✅ 已有 fix PR（#1262），待合并。
- **严重性判定**：虽然不是崩溃类 Bug，但属于**默认配置安全语义被破坏**，影响开箱即用的行为正确性，建议**优先合并并随下一个补丁版本发布**。

🔗 [PR #1262](https://github.com/moltis-org/moltis/pull/1262)

---

## 6. 功能请求与路线图信号

📭 **今日无新功能请求。**

无相关 Issue 或 PR 涉及新功能提案。路线图信号需观察更长周期内的累计趋势。

---

## 7. 用户反馈摘要

⚠️ **今日无用户反馈产生。**

Issue 与 PR 评论区均无用户互动，难以提炼痛点。建议关注：

- 是否有用户在 Issue 列表中报告 cron 行为异常但尚未升级到 PR 阶段；
- 历史上是否有用户因 `active_hours` 默认配置失效而触发过非预期执行。

---

## 8. 待处理积压

📋 **积压提醒**

| 类型 | 编号 | 标题 | 创建时间 | 状态 |
|------|------|------|----------|------|
| PR | [#1262](https://github.com/moltis-org/moltis/pull/1262) | fix(cron): treat active_hours end="24:00" as end-of-day | 2026-09-07 | 待合并 |

⏳ **维护者关注建议**：

1. **PR #1262** 应作为今日首要跟进项 — Bug 涉及默认配置的安全语义，且修复范围小、风险低，适合快速评审与合并。
2. 当前数据仅显示过去 24 小时的窗口，建议结合周/月维度检查是否存在长期未响应的 Issue（本次报告数据范围内未呈现）。

---

## 📈 项目健康度评估

| 维度 | 状态 | 评估 |
|------|------|------|
| 代码合入节奏 | 🟡 低 | 今日无合并 |
| Issue 响应 | ⚪ 无信号 | 无新 Issue |
| Bug 修复通道 | 🟢 正常 | 有 PR 在路上 |
| 版本发布 | ⚪ 无动作 | 暂无新版本 |
| 社区参与 | 🟡 偏低 | 无评论互动 |

**综合评估**：项目处于**低活跃度的稳态维护期**，无重大异常。唯一值得关注的 #1262 属于**可快速闭环的低风险修复**，维护者宜优先处理以维持默认配置的正确性承诺。

---

*报告生成时间：2026-09-08 | 数据来源：GitHub API | 项目：[moltis-org/moltis](https://github.com/moltis-org/moltis)*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw (agentscope-ai/QwenPaw) 项目日报
**日期：2026-09-08**

---

## 1. 今日速览

项目保持高强度迭代节奏，过去24小时共有 41 条 Issue 更新（25 条活跃、16 条已关闭）和 43 条 PR 更新（28 条待合并、15 条已合并/关闭），**Issue 关闭率 39%、PR 合并/关闭率 35%**，整体活跃度处于较高水位。讨论热点集中在三大方向：(1) v2.2.0 引入的上下文丢失、409 报错、流式超时等稳定性问题；(2) 长期记忆/ReMe 子系统的健康检查、超时、向量召回降级；(3) Console UI 工作目录选择器、多语言、深色模式等回归问题。无新版本发布，社区关注点指向 v2.2.0 → v2.2.x 的快速补丁需求。

---

## 2. 版本发布

无新版本发布。

---

## 3. 项目进展（今日合并/关闭的重要 PR）

| PR | 标题 | 类别 | 影响 |
|----|------|------|------|
| [#6936](https://github.com/agentscope-ai/QwenPaw/pull/6936) | `providers: coerce string-typed tool args emitted as JSON numbers` | Bug 修复 | **修复 MCP 工具调用"数字型字符串被当 number 传入"的长期 issue #6839**，显著提升 MCP 生态兼容性 |
| [#7499](https://github.com/agentscope-ai/QwenPaw/pull/7499) | `console: unify nav and theme-toggle icons with Spark line series` | UI 一致性 | 收口三类异类导航图标，统一为 Spark 细线系列（修复 #7376） |
| [#7530](https://github.com/agentscope-ai/QwenPaw/pull/7530) | `test(console): expand console unit tests (+245 cases, +5.02pp)` | 测试覆盖 | 前端单元测试第四次冲刺，单次新增 245 用例、覆盖率提升 5.02pp |
| [#7603](https://github.com/agentscope-ai/QwenPaw/pull/7603) | `ci: freeze default-branch merges during releases` | CI/CD | **修复 v2.2.0-beta.4 发布期间 PR #7267 被合并导致流程异常的根因**，保护未来发布的不可变性 |
| [#7561](https://github.com/agentscope-ai/QwenPaw/pull/7561) | `refactor(memory): unify automatic memory lifecycle and actions` | 重构（破坏性） | 重写 `MemoryManager` 契约，统一自动捕获/召回/后台执行的归属，**含破坏性变更**，需关注下游插件迁移 |

**整体评估**：今日合并的 PR 覆盖 Bug 修复、UI 一致性、测试强化、CI 防护、内存子系统重构五大维度，且修复了多个高频用户痛点（#6839 MCP 类型强转、#7376 图标风格不一致），说明项目整体在 **稳定性与质量工程层面稳步向前**。

---

## 4. 社区热点

按评论数排序的热门讨论：

1. **🔴 [#7469 ReMe 后台嵌入/索引任务失败](https://github.com/agentscope-ai/QwenPaw/issues/7469)**（5 评论，已关闭）— ReMe 在 OpenAI 兼容 embedding 后端下的 `as_embedding:default` 依赖启动竞争问题，已修复。
2. **🔴 [#7576 RetryChatModel 硬编码 32768 context_size](https://github.com/agentscope-ai/QwenPaw/issues/7576)**（5 评论，开放）— 影响 v2.1.0~v2.2.0 全版本，所有模型被强制 32768 token 窗口触发 CONTEXT_UNFIT。
3. **🔴 [#7579 模型回复意外从上下文丢失](https://github.com/agentscope-ai/QwenPaw/issues/7579)**（5 评论，开放）— QwenPaw 2.2.0 Desktop 后端 assistant 消息持久化但下一轮请求丢失，导致 AI"看不见自己刚说的话"。
4. **🔴 [#7559 任务执行中发消息触发 409](https://github.com/agentscope-ai/QwenPaw/issues/7559)**（5 评论，开放）— 用户期望新消息入队而非报错，反映消息队列与任务锁的交互逻辑分歧。
5. **🟡 [#7597 工具返回图像/PDF 二进制 base64 触发 400](https://github.com/agentscope-ai/QwenPaw/issues/7597)**（4 评论，开放）— 多模态 tool result 与 OpenAI 文件协议不兼容。
6. **🟡 [#6839 MCP 工具数字型字符串被转 number](https://github.com/agentscope-ai/QwenPaw/issues/6839)**（4 评论，已关闭）— 已被 PR #6936 修复。
7. **🟡 [#7587 OpenAI-compat 提供方被 WUSRouter Cloudflare 403](https://github.com/agentscope-ai/QwenPaw/issues/7587)**（4 评论，开放）— 网络层风控绕过问题。
8. **🟡 [#7513 deepseek-v4-pro 与 qwenpaw 工具调用混淆](https://github.com/agentscope-ai/QwenPaw/issues/7513)**（4 评论，开放）— 模型输出越界字符触发工具调用解析错位。

**诉求分析**：高频讨论集中于 **v2.2.0 回归**（context 丢失、409 报错、context_size 硬编码、流式超时不可配），说明该版本引入新行为时未对原有不变量做充分回归测试，社区信任度急需通过补丁版本重建。

---

## 5. Bug 与稳定性

按严重程度排列：

### 🔴 严重（影响核心功能）
| Issue | 描述 | 是否有 Fix PR |
|----|------|---------------|
| [#7579 / #7584](https://github.com/agentscope-ai/QwenPaw/issues/7579) | **模型回复意外从上下文丢失** — 2.2.0 Desktop 助手消息持久化与上下文注入不一致，导致 AI 反复重复执行、死循环、toolcall 闭环。作者明确标注"严重 bug" | ❌ 无 |
| [#7576](https://github.com/agentscope-ai/QwenPaw/issues/7576) | **RetryChatModel 硬编码 32768 context_size** — 影响所有发布版本，所有模型均触发 CONTEXT_UNFIT | ❌ 无 |
| [#7567](https://github.com/agentscope-ai/QwenPaw/issues/7567) | **停止按钮显示停止但任务实际仍在执行** — 前端状态与后端执行状态脱钩，用户刷新页面才看到任务仍在跑 | ❌ 无 |
| [#7589](https://github.com/agentscope-ai/QwenPaw/issues/7589) | **Heartbeat cron 会话反馈环（消息重复堆积）** — High 严重度，agent 失响应约 2 小时，需手动恢复 | ❌ 无 |

### 🟠 高（功能受损）
| Issue | 描述 | 是否有 Fix PR |
|----|------|---------------|
| [#7604](https://github.com/agentscope-ai/QwenPaw/issues/7604) | LLM 流式空闲超时硬编码 30s，Desktop WebUI/envs.json 不可配 | ✅ 已关闭 |
| [#7156](https://github.com/agentscope-ai/QwenPaw/issues/7156) | embedding 健康检查在已 warm 后端仍 5s 超时且硬编码 | ✅ 已关闭 |
| [#6885](https://github.com/agentscope-ai/QwenPaw/issues/6885) | 中文 IME compositionEnd 期间 Console UI 崩溃，消息队列不可用（v2.1.0b2） | ✅ 已关闭 |
| [#7572](https://github.com/agentscope-ai/QwenPaw/issues/7572) | `tool_calls/_coordinator.py::_drain()` 吞掉异常栈，故障无法定位 | ✅ PR [#7578](https://github.com/agentscope-ai/QwenPaw/pull/7578) 已修复 |

### 🟡 中（边界/兼容性）
- [#7597](https://github.com/agentscope-ai/QwenPaw/issues/7597) 工具返回图像/PDF 触发 400（开放）
- [#7587](https://github.com/agentscope-ai/QwenPaw/issues/7587) WUSRouter Cloudflare 403（开放）
- [#7617](https://github.com/agentscope-ai/QwenPaw/issues/7617) PDF DataBlock 永久破坏纯文本 OpenAI-compat 端点（开放）
- [#7620](https://github.com/agentscope-ai/QwenPaw/issues/7620) MCP 401 误判为需 OAuth（开放）
- [#6541](https://github.com/agentscope-ai/QwenPaw/issues/6541) Scroll 压缩在 DeepSeek 上 role=user 误注入（已关闭）
- [#6839](https://github.com/agentscope-ai/QwenPaw/issues/6839) MCP 数字型字符串转 number（已关闭）

**稳定性观察**：4 个严重级 Issue 中 **仅 1 个有关联修复 PR**（#7572 → #7578），其余 3 个核心 bug 仍处于开放状态且无 PR 链接，**属于待办积压风险**，建议维护者优先投入。

---

## 6. 功能请求与路线图信号

| 请求 | Issue / PR | 已有 PR 跟进 | 路线图概率 |
|------|-----------|--------------|-----------|
| **OpenViking 长期记忆后端** | [PR #7613](https://github.com/agentscope-ai/QwenPaw/pull/7613) | ✅ 首次贡献者 PR 已就绪 | 🟢 高 |
| **Reranker UI 配置面板** | [PR #6399](https://github.com/agentscope-ai/QwenPaw/pull/6399) | ✅ 已有对应后端 PR | 🟢 高 |
| **恢复 v2.1.0 工作目录直接输入框** | [#7588](https://github.com/agentscope-ai/QwenPaw/issues/7588)（已关）→ [#7601](https://github.com/agentscope-ai/QwenPaw/issues/7601)（已关） | ⏳ 已收到强烈反馈但未见回归 PR | 🟡 中 |
| **聊天队列绕过防护（409 改为入队）** | [#7559](https://github.com/agentscope-ai/QwenPaw/issues/7559) | ✅ [PR #7610](https://github.com/agentscope-ai/QwenPaw/pull/7610) 已有方案 | 🟢 高 |
| **Console 侧边栏 / 设置体验重设计** | [PR #7502](https://github.com/agentscope-ai/QwenPaw/pull/7502) | ✅ 大型重构 PR 待审 | 🟡 中 |
| **Creator 1.1.2（运行时通知总线、多时间线 A/B、媒体提示、Windows 加固）** | [PR #7486](https://github.com/agentscope-ai/QwenPaw/pull/7486) | ✅ 大型特性 PR 待审 | 🟡 中 |
| **plugin 管理器更新检测** | [PR #7605](https://github.com/agentscope-ai/QwenPaw/pull/7605) | ✅ 已提交 | 🟢 高 |
| **Skills 版本暴露与依赖校验** | [PR #7609](https://github.com/agentscope-ai/QwenPaw/pull/7609) | ✅ 已提交 | 🟢 高 |
| **BiDi（RTL/LTR 混合）渲染** | [PR #7611](https://github.com/agentscope-ai/QwenPaw/pull/7611) | ✅ 首次贡献者 PR | 🟢 高 |
| **macOS Computer Use Helper 重启控制** | [PR #7614](https://github.com/agentscope-ai/QwenPaw/pull/7614) | ✅ 首次贡献者 PR | 🟡 中 |

**路线图判断**：记忆子系统的插件化（#7616、#7606）、OpenViking 后端、Console 侧边栏重设计、插件更新检测等条目已进入 PR 阶段，**v2.2.x 或 v2.3.0 的功能版图已基本成形**。

---

## 7. 用户反馈摘要

**真实痛点：**

- **🗣️ 上下文不稳定的恐慌** — 用户 #xjbsenkfi [#7579](https://github.com/agentscope-ai/QwenPaw/issues/7579) 反馈："会话反复丢失，AI 行为错乱诡异，反复重复执行，上一句话下一句又忘，重复陷入执行工具-工具结果丢失-再次 toolcall 死循环" — 表达了对核心对话连续性的强烈不安。
- **🗣️ 工作目录 UX 回退** — [#7588](https://github.com/agentscope-ai/QwenPaw/issues/7588) / [#7601](https://github.com/agentscope-ai/QwenPaw/issues/7601) 多名用户明确表达："v2.1.0 的对话框可以直接输入路径，按回车就切过去，v2.2.0 砍掉这个设计非常麻烦" — 反映 v2.2.0 的 UX 回归引发实际工作流阻断。
- **🗣️ 长记忆"假象"** — [#7571](https://github.com/agentscope-ai/QwenPaw/issues/7571) 用户反映反复告诉 agent 工作目录规则、过两天又被遗忘，反映长记忆召回准确度与用户预期不匹配。
- **🗣️ Dashboard 性能** — [#7242](https://github.com/agentscope-ai/QwenPaw/issues/7242) 74 个 agent 实例下 Dashboard 加载 6 分钟以上无法使用，限制规模化部署。
- **🗣️ 任务反馈循环** — [#7589](https://github.com/agentscope-ai/QwenPaw/issues/7589) Heartbeat cron 重复消息堆积导致 agent

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报

**报告日期：** 2026-09-08
**数据来源：** [github.com/zeroclaw-labs/zeroclaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## 1. 今日速览

ZeroClaw 仓库今日继续保持**高强度迭代节奏**：过去 24 小时共产生 37 条 Issue 更新（31 条新开/活跃，6 条关闭）和 50 条 PR 更新（43 条待合并，7 条关闭/合并），无新版本发布。活跃贡献者涵盖 Audacity88、NiuBlibing、IftekharUddin、JordanTheJet、rifuki、volodkindv 等核心与外部开发者，社区参与面广。主题集中在三大方向：**Anthropic 缓存策略重构**（TTL、breakpoint 布局、OAuth 前缀）、**ZeroCode / ACP 转写与多会话一致性**（多 S0/S1 数据丢失类 Bug）、以及 **OpenAI Responses 协议扩展**（WebSocket steering、程序化工具调用、异步函数工具）。整体健康度处于"高负载但有节奏推进"状态，无明显停滞迹象。

---

## 2. 版本发布

**今日无新版本发布。** 此前最近一个被广泛引用的稳定基线为 v0.8.5（见 [#10688](https://github.com/zeroclaw-labs/zeroclaw/issues/10688)）。

---

## 3. 项目进展

今日共有 7 条 PR 关闭/合并，其中以下 2 条对项目能力推进最显著：

### ✅ [PR #10638](https://github.com/zeroclaw-labs/zeroclaw/pull/10638) — `fix(gateway): seed the boot default from the first entry that has a model`
由 NiuBlibing 提交的网关引导默认值修复。修复了之前从字面第一个 `providers.models` 条目构建 provider、但当其未声明 `model` 时即报错的问题；改为"首个含 model 的条目"作为种子。

### ✅ [PR #9939](https://github.com/zeroclaw-labs/zeroclaw/pull/9939) — `fix(cost): surface pricing-unavailable so silent $0 caps can't reassure`
由 IftekharUddin 提交的成本可观测性修复。解决了"价格不可用时静默记为 $0，掩盖真实花费"的安全可观测性盲点，`zeroclaw status` 将明确提示记录花费不完整。

### 其他已关闭/合并
- [Issue #8720](https://github.com/zeroclaw-labs/zeroclaw/issues/8720)（12 评论关闭）：Bedrock Nova 2 Lite `cachePoint` 配置支持
- [Issue #10670](https://github.com/zeroclaw-labs/zeroclaw/issues/10670)：heartbeat.target 复合键解析
- [Issue #10660](https://github.com/zeroclaw-labs/zeroclaw/issues/10660)：第三缓存断点策略增强
- [Issue #10688](https://github.com/zeroclaw-labs/zeroclaw/issues/10688)：WhatsApp Web 语音转写接线修复
- [Issue #10326](https://github.com/zeroclaw-labs/zeroclaw/issues/10326)：Reliable 流式错误日志模型名
- [Issue #10693](https://github.com/zeroclaw-labs/zeroclaw/issues/10693)：ZeroCode Enter 提交忽略

**整体评估：** 项目在缓存策略、可观测性、网关默认值等"细节正确性"层面稳步收敛，但 ACP/Code 通道的 S0/S1 数据丢失类问题（见下文）尚未落地修复，是当前最大债务。

---

## 4. 社区热点

### 🔥 [Issue #8720](https://github.com/zeroclaw-labs/zeroclaw/issues/8720) — *Support: Disable cachePoint for Bedrock Nova 2 Lite via config*（12 评论，已关闭）
长期高关注度问题，终于在今日关闭，反映社区对**模型特定配置开关**的诉求——用户希望能够为特定模型关闭缓存机制以规避错误，而非全局禁用。

### 🔥 [Issue #10230](https://github.com/zeroclaw-labs/zeroclaw/issues/10230) — *Daemon startup or reload can overflow during agent initialization*（6 评论，P1）
S1 级别工作流阻塞：从 ZeroCode 应用 Quickstart 配置时，守护进程会在 Tokio runtime worker 上触发栈溢出。涉及运行时/Quickstart 集成层。

### 🔥 [Issue #9333](https://github.com/zeroclaw-labs/zeroclaw/issues/9333) — *Failed ACP turns disappear after switching sessions*（4 评论，P1）
S1 级别 ACP 数据丢失：在 provider 错误导致 turn 失败时，已显示在实时 transcript 中的用户消息与工具活动会在切换会话后消失。

### 🔥 [Issue #10408](https://github.com/zeroclaw-labs/zeroclaw/issues/10408) — *Second message during an active turn starts a parallel run*（3 评论，P1）
S2 级别并发缺陷：同一会话在 agent 处理中再次收到消息时，runtime 启动并行运行而非排队，导致重复工作与重复回复。

### 讨论集中议题
- **ACP 转写持久化**：见 [#10121](https://github.com/zeroclaw-labs/zeroclaw/issues/10121)、[#10659](https://github.com/zeroclaw-labs/zeroclaw/issues/10659)、[#10697](https://github.com/zeroclaw-labs/zeroclaw/issues/10697)（连续多个 P1，反映 ACP 是当前最大痛点）
- **Anthropic 缓存控制**：见 [#10660](https://github.com/zeroclaw-labs/zeroclaw/issues/10660)、[#10662](https://github.com/zeroclaw-labs/zeroclaw/issues/10662)、[#10663](https://github.com/zeroclaw-labs/zeroclaw/issues/10663)（三连发，体系化重构）
- **成本与会话粒度**：见 [#10700](https://github.com/zeroclaw-labs/zeroclaw/issues/10700)（`CostTracker.session_id` 是 daemon 生命周期而非会话）

---

## 5. Bug 与稳定性

### S0 / S1 — 数据丢失 / 工作流阻塞

| 严重度 | 编号 | 标题 | 状态 |
|---|---|---|---|
| S0 | [#10121](https://github.com/zeroclaw-labs/zeroclaw/issues/10121) | Partial Code/ACP turns disappear if process exits before completion | OPEN，无 PR |
| S1 | [#10230](https://github.com/zeroclaw-labs/zeroclaw/issues/10230) | Daemon startup overflow during agent init | OPEN，无 PR |
| S1 | [#9333](https://github.com/zeroclaw-labs/zeroclaw/issues/9333) | Failed ACP turns disappear after switching sessions | OPEN，无 PR |
| S1 | [#10693](https://github.com/zeroclaw-labs/zeroclaw/issues/10693) | ZeroCode silently ignores Enter while showing Connected | 已关闭（当日修复） |
| S1 | [#10659](https://github.com/zeroclaw-labs/zeroclaw/issues/10659) | Budget-exceeded Code turn loses progress after restore | OPEN，无 PR |

**信号：** ACP 通道数据丢失仍是 Top 风险，5 条相关 P1/S0 尚无任何对应 fix PR。

### S2 — 降级行为

| 编号 | 标题 | 关联 PR |
|---|---|---|
| [#10408](https://github.com/zeroclaw-labs/zeroclaw/issues/10408) | Parallel run in same session | 无 |
| [#9940](https://github.com/zeroclaw-labs/zeroclaw/issues/9940) | Cron delivery channel cannot resolve | 无 |
| [#10115](https://github.com/zeroclaw-labs/zeroclaw/issues/10115) | Tool-result truncation is invisible | 无 |
| [#10689](https://github.com/zeroclaw-labs/zeroclaw/issues/10689) | Telegram voice reply skipped when text starts with `[` | 无 |
| [#10694](https://github.com/zeroclaw-labs/zeroclaw/issues/10694) | PowerShell tests time out on Windows | 无 |

### S3 — 较小问题

| 编号 | 标题 | 关联 PR |
|---|---|---|
| [#10702](https://github.com/zeroclaw-labs/zeroclaw/issues/10702) | Token-budget history trim hysteresis gap | 无 |
| [#10104](https://github.com/zeroclaw-labs/zeroclaw/issues/10104) | `zeroclaw-hardware` lib tests never run in CI | 无 |
| [#10690](https://github.com/zeroclaw-labs/zeroclaw/issues/10690) | Integrations page slugifies display name | 无 |
| [#10662](https://github.com/zeroclaw-labs/zeroclaw/issues/10662) | OAuth prefix cache below Anthropic minimum | 无 |

---

## 6. 功能请求与路线图信号

### Anthropic 缓存策略（高优先级方向）

- **[#10660](https://github.com/zeroclaw-labs/zeroclaw/issues/10660)** — 第三 cache breakpoint：上一轮最后消息打标 ✅ 已关闭
- **[#10663](https://github.com/zeroclaw-labs/zeroclaw/issues/10663)** — 可配置 1 小时 prompt-cache TTL
- **[#10662](https://github.com/zeroclaw-labs/zeroclaw/issues/10662)** — OAuth 系统前缀缓存断点优化

三个相关 Issue 集中体现了"Anthropic 缓存利用率与合规边界"的系统性升级需求，预计下个版本会作为整体方案合并。

### OpenAI Responses 协议（Astra 子方向）

由 IftekharUddin 集中提交的五连发，构成完整能力矩阵：

- **[#10708](https://github.com/zeroclaw-labs/zeroclaw/issues/10708)** — OpenAI Responses WebSocket steering
- **[#10707](https://github.com/zeroclaw-labs/zeroclaw/issues/10707)** — 受限程序化工具调用
- **[#10706](https://github.com/zeroclaw-labs/zeroclaw/issues/10706)** — 跨调用路径的不透明推理状态保留
- **[#10705](https://github.com/zeroclaw-labs/zeroclaw/issues/10705)** — `max` 推理强度（GPT-6 Astra）
- **[#10704](https://github.com/zeroclaw-labs/zeroclaw/issues/10704)** — 异步函数工具

**信号：** 这是项目路线图中明确的"对齐 OpenAI 最新协议"批次，极可能并入下个主要版本。

### ZeroCode / TUI

- **[#10695](https://github.com/zeroclaw-labs/zeroclaw/issues/10695)** — 另一客户端修改会话后刷新 ZeroCode
- **[#10697](https://github.com/zeroclaw-labs/zeroclaw/issues/10697)** — ZeroCode ACP 转写保留工具调用前文本

### 文档与站点

- **[#10709](https://github.com/zeroclaw-labs/zeroclaw/issues/10709)** — Astra API-key 与 Codex 订阅设置文档
- **[PR #10711](https://github.com/zeroclaw-labs/zeroclaw/pull/10711)** — 发布文档的 canonical/hreflang/robots/sitemap
- **[PR #10710](https://github.com/zeroclaw-labs/zeroclaw/pull/10710)** — README 与 crate 元数据加官网链接（zeroclaw.com）

### 高风险 PR 待合并（XL/M 规模）

| PR | 标题 | 贡献者 | 风险 |
|---|---|---|---|
| [#8966](https://github.com/zeroclaw-labs/zeroclaw/pull/8966) | 携带 live provider identity 于 usage 事件 | eugeneb50 | High/XL |
| [#10214](https://github.com/zeroclaw-labs/zeroclaw/pull/10214) | 日志 entry-count 旋转 + 多段查询 | NiuBlibing | High/XL |
| [#9283](https://github.com/zeroclaw-labs/zeroclaw/pull/9283) | web_fetch gzip/brotli/deflate 解压 | minato32 | High/XL |
| [#10391](https://github.com/zeroclaw-labs/zeroclaw/pull/10391) | Delegate 文件系统工具目标 workspace | joalvaradon | High/XL |
| [#10611](https://github.com/zeroclaw-labs/zeroclaw/pull/10611) | Anthropic / Bedrock 自适应思维适配 | IftekharUddin | High/XL |
| [#10450](https://github.com/zeroclaw-labs/zeroclaw/pull/10450) | Webhook SSE 流式 chat turns | jstar0 | High/XL |
| [#10640](https://github.com/zeroclaw-labs/zeroclaw/pull/10640) | Telegram 被动群组上下文 | rifuki | Medium/L |
| [#10637](https://github.com/zeroclaw-labs/zeroclaw/pull/10637) | 网关 WS 记忆用 agent 自有 provider | NiuBlibing | High/M |

---

## 7. 用户反馈摘要

从 Issues 评论中提炼的真实用户痛点：

1. **Bedrock Nova 2 Lite 用户**（[#8720](https://github.com/zeroclaw-labs/zeroclaw/issues/8720)）：使用 `us.amazon.nova-2-lite-v1:0` 时随机遭遇缓存错误，**被迫需要模型级缓存开关**，而非全局配置。
2. **WhatsApp Web 用户**（[#10688](https://github.com/zeroclaw-labs/zeroclaw/issues/10688)）：v0.8.5 上"无论怎么配置"都无法转写语音消息；用户已要求提供 v0.8

</details>

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*