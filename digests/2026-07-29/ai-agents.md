# OpenClaw 生态日报 2026-07-29

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-07-29 02:00 UTC

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

# OpenClaw 项目日报 · 2026-07-29

> 数据周期：过去 24 小时（基于 GitHub Issues / PRs 实时数据）

---

## 1. 今日速览

OpenClaw 今日呈现**高频迭代 + 重大重构并行**的高活跃状态：过去 24 小时共处理 **500 条 Issue 更新**（228 新开/活跃、272 已关闭）和 **500 条 PR 更新**（234 待合并、266 已合并/关闭），并发布了 **v2026.7.2-beta.5** 测试版。Issue 关闭率 **54.4%**、PR 关闭率 **53.2%**，吞吐与历史日基本持平，但 30 个重点 PR 中出现多个由核心维护者 steipete 发起的 **XL 级破坏性重构**，意味着项目处于结构性整理阶段。社区层面，跨平台客户端（Linux/Windows 缺失）仍是关注度最高的长期诉求。

---

## 2. 版本发布

### 🚀 v2026.7.2-beta.5 — *状态安全与恢复*

作为 2026.7.2 系列的第五个 beta 版本，本次发布聚焦**持久化数据安全性**与**崩溃可恢复性**：

| 能力 | 说明 |
|---|---|
| 🛡️ Quarantine Store | 主库损坏时启用隔离存储，保护已持久化数据 |
| 📸 Crash-recoverable SQLite snapshots | SQLite 支持崩溃恢复快照 |
| 📂 Crash-durable filesystem publication | 文件系统发布具备崩溃耐久性 |
| ⛔ Schema-upgrade data-loss rejection | 拒绝可能造成数据丢失的 schema 升级 |
| 🔁 Rollback-writer snapshot recovery | 回滚写入器支持快照恢复 |

⚠️ **迁移注意事项**：beta 版本不建议用于生产；如启用新隔离存储，升级前应完整备份 `~/.openclaw` 数据目录并确认现有 SQLite 数据库结构。详见 [Release v2026.7.2-beta.5](https://github.com/openclaw/openclaw/releases)（标题以 #1 截断，需前往 Release 页确认完整 hash）。

---

## 3. 项目进展

### 已合并 / 已关闭的重点 PR（精选 12 条）

**🔧 稳定性修复**
- **[#114441](https://github.com/openclaw/openclaw/pull/114441)** `fix(cron): completed jobs stay stuck behind slower batch runs`（steipete, L）— 修复 cron 任务因批量调度互相阻塞导致已完成作业被卡住的问题；supersedes #81572。
- **[#113368](https://github.com/openclaw/openclaw/pull/113368)** `fix(telegram): persist update offset only after durable spool write`（carlosjarenom, S, P1）— Telegram 隔离轮询中"偏移量先于持久化"导致更新丢失的回归修复。
- **[#114598](https://github.com/openclaw/openclaw/pull/114598)** `fix(embedded-runner): slide run budget deadline on progress activity`（SunnyShu0925, M, P1）— 嵌入式运行预算在多工具调用时不再丢弃最终输出。
- **[#114442](https://github.com/openclaw/openclaw/pull/114442)** `fix(openai): restrict device-code retries to transient transport errors`（LeonidasLux, S）— 解决 OAuth 设备码流程被瞬态网络错误整体中止的问题。

**🖥️ UI / UX 改进**
- **[#114439](https://github.com/openclaw/openclaw/pull/114439)** `fix(ui): keep agent selection aligned across session switches`（steipete, XL, P1）— 跨 session 切换时智能体选择 / 全局观察者状态保持一致。
- **[#114436](https://github.com/openclaw/openclaw/pull/114436)** `refactor(gateway): derive the agent core-files list from the canonical workspace set`（steipete, S）— 修复 #113621：`HEARTBEAT.md` 已退役但网关仍在同步。
- **[#114443](https://github.com/openclaw/openclaw/pull/114443)** `fix(tui): keep shared conversations synchronized and streaming bounded`（steipete, L）— 关闭 #38829：TUI 多客户端共享会话同步。
- **[#115472](https://github.com/openclaw/openclaw/pull/115472)** `fix(ui): keep disabled microphone picker background neutral`（Patrick-Erichsen, XS）。

**🧱 流程与发布工程**
- **[#114400](https://github.com/openclaw/openclaw/pull/114400)** `fix(release): detect missing bundled providers after npm install`（steipete, S）— 防止发布验证漏检 Ollama / LM Studio 等 bundled provider。
- **[#114429](https://github.com/openclaw/openclaw/pull/114429)** `fix(qa): harden Mantis Telegram proof harness`（steipete, L）。
- **[#114057](https://github.com/openclaw/openclaw/pull/114057)** `docs(tools): fix broken GitHub Copilot CLI docs URL`（santhiprakash）。
- **[#113285](https://github.com/openclaw/openclaw/pull/113285)** `build(deps): bump peekaboo 3.9.6 → 3.9.7`（dependabot）。

### 待合并中的重大变更（代表项目方向）

- **[#115483](https://github.com/openclaw/openclaw/pull/115483)** `refactor: remove duplicate runtime, plugin, and chat paths`（steipete, XL，跨 Discord/Line/Signal/Slack/Feishu/Twitch/Zalouser/Buzz 等 16+ 模块）— 整合重复运行时、Provider 与聊天组件。
- **[#114388](https://github.com/openclaw/openclaw/pull/114388)** `feat(agents)!: remove the stored default agent — sole agent or explicit ownership`（steipete, XL, P2，**破坏性**）— 移除隐式全局默认 agent。
- **[#114151](https://github.com/openclaw/openclaw/openclaw/pull/114151)** `feat(plugins): allow per-turn tool narrowing in prompt hooks` — 插件可在 `before_prompt_build` 中按轮次裁剪工具 schema。
- **[#112811](https://github.com/openclaw/openclaw/pull/112811)** `feat(msteams): support multiple bot accounts`（jimmypuckett, XL, P2）— MS Teams 多机器人账号。
- **[#75165](https://github.com/openclaw/openclaw/pull/75165)** `feat(agents): composable termination algebra + GSAR grounding scorer`（fede-kamel, XL, P2）— 子智能体循环代数化终止条件与基础性评分。
- **[#95847](https://github.com/openclaw/openclaw/pull/95847)** `fix(subagents): credit requester-consumed descendant completions`（kklouzal, XL, P1）— 子智能体交付核算修复。
- **[#115474](https://github.com/openclaw/openclaw/pull/115474)** `fix: prevent duplicate agent turns and slow Codex harness runs`（steipete, L）— 重复用户消息导致 prompt-cache 测量失真。
- **[#115481](https://github.com/openclaw/openclaw/pull/115481)** `fix(sandbox): stop provisioning failures from exhausting fallbacks`（steipete, M）— 关闭 #106516。
- **[#115480](https://github.com/openclaw/openclaw/pull/115480)** `fix: hide credential profiles from model labels`（Patrick-Erichsen, M）。
- **[#115477](https://github.com/openclaw/openclaw/pull/115477)** `fix(ui): preview model picker interactions live`（Patrick-Erichsen, M）。

> 综合判断：项目在 7 月末处于"重构 + 收尾回归"双线推进阶段，整体健康度良好，但 XL 级重构带来的合并风险（compatibility / session-state / message-delivery）需密切关注。

---

## 4. 社区热点

### 🔥 评论 / 反应最高的 Issues

| 排名 | Issue | 评论 | 👍 | 主题 |
|---|---|---|---|---|
| 1 | [#75](https://github.com/openclaw/openclaw/issues/75) | **115** | **80** | Linux/Windows Clawdbot Apps |
| 2 | [#7707](https://github.com/openclaw/openclaw/issues/7707) | 22 | 0 | Memory Trust Tagging by Source |
| 3 | [#91588](https://github.com/openclaw/openclaw/issues/91588) | 20 | 1 | Gateway 内存泄漏（350MB→15.5GB） |
| 4 | [#96857](https://github.com/openclaw/openclaw/issues/96857) | 15 | 4 | Tool 文本输出降级为 "(see attached image)" 占位符 |
| 5 | [#10659](https://github.com/openclaw/openclaw/issues/10659) | 14 | 4 | Masked Secrets 防凭证泄露 |
| 6 | [#115326](https://github.com/openclaw/openclaw/issues/115326) | 11 | 0 | Crash-loop 抑制 Discord/WhatsApp |
| 7 | [#11665](https://github.com/openclaw/openclaw/issues/11665) | 11 | 0 | Webhook hook session 多轮复用 |
| 8 | [#108075](https://github.com/openclaw/openclaw/issues/108075) | 11 | 1 | 2026.7.1 LLM schema 拒收 |
| 9 | [#108182](https://github.com/openclaw/openclaw/issues/108182) | 10 | 2 | Control UI 升级后体验下降 |
| 10 | [#6615](https://github.com/openclaw/openclaw/issues/6615) | 10 | 8 | exec-approvals denylist 支持 |

### 诉求分析

- **#75（Linux/Windows 客户端）**是社区关注**绝对头部**：跨平台覆盖长期缺失，伴随 `clawsweeper:needs-maintainer-review / needs-product-decision` 标签，反映出"决策长期卡在维护者侧"的瓶颈。
- **#10659（Masked Secrets）** 反映用户在 prompt injection 与凭证泄露场景下的真实焦虑；同主题 #7707（memory trust tagging）显示"内容来源可信度"已成为新的安全焦点。
- **#91588（OOM 内存泄漏）**与 #113434（Codex sessions.reset 重用退役 session ID 导致 RAM 耗尽）说明 **Gateway 内存管理仍是 2026.7.x 阶段的核心痛点**。
- **#108182 / #111827** 等 UX 回归类投诉，反映用户在升级到 2026.7.x 后对 Control UI "变好但变浅"的体验落差。

---

## 5. Bug 与稳定性

### 🔴 P0 / P1 严重问题（按严重度排列）

| Issue | 标题 | 标签 | 是否有 fix PR |
|---|---|---|---|
| [#91588](https://github.com/openclaw/openclaw/issues/91588) | **Critical:** Gateway Memory Leak — RSS 从 350MB 增长至 15.5GB | P0, 🐚 platinum hermit | ❌ 尚未发现针对 PR |
| [#115326](https://github.com/openclaw/openclaw/issues/115326) | Crash-loop breaker 永久抑制 Discord/WhatsApp，`channels.start` 报 WS 1006 | bug | ❌ 待处理 |
| [#113434](https://github.com/openclaw/openclaw/issues/

---

## 横向生态对比

# 个人 AI 助手 / 自主智能体开源生态横向对比报告

**报告周期：2026-07-29 ｜ 数据来源：13 个项目 GitHub 公开动态**

---

## 1. 生态全景

2026 年 7 月末的个人 AI 助手/自主智能体开源生态呈现出**「头部领跑 + 长尾分化」**的典型成熟期格局：以 OpenClaw 为代表的少数项目已迈入高频迭代与破坏性重构并行的工程深水区（日处理 Issue+PR 超过 1000 条、beta 版本稳定发版），而 ZeptoClaw / NullClaw / TinyClaw 等项目则进入维护静默期。整体看，社区共识正快速收敛于 **多模型后端可插拔、MCP 协议生态化、Agent 沙箱与凭据治理、可观测性平台化** 四大方向；同时，安全（filesystem TOCTOU、KeySource 抽象、RBAC 分级）与跨平台一致性（Linux/Windows 客户端、PowerShell 兼容性）成为各家共通的高优痛点。生态分化路径已基本明确：**Rust 重安全派（IronClaw/ZeroClaw）**、**TypeScript 重产品派（OpenClaw/NanoBot/Moltis/CoPaw）**、**Python/学术派（Hermes）** 三条技术路线并行演进。

---

## 2. 各项目活跃度对比

| 项目 | Issues 新开/活跃 | Issues 已关闭 | PRs 待合并 | PRs 已合并/关闭 | 新版本发布 | 健康度 |
|------|----------------|--------------|-----------|----------------|-----------|--------|
| **OpenClaw** | 228 | 272 (54.4%) | 234 | 266 (53.2%) | ✅ v2026.7.2-beta.5 | ⭐⭐⭐⭐⭐ |
| **IronClaw** | 50 | 16 (32%) | ~35 | 15 (30%) | ❌ | ⭐⭐⭐⭐ |
| **Hermes Agent** | ~50 | ~7 (14%) | ~43 | ~7 (14%) | ❌ | ⭐⭐⭐⭐ |
| **CoPaw** | 12 | 6 (33%) | 36 | 14 (28%) | ❌ | ⭐⭐⭐⭐ |
| **ZeroClaw** | 49 | 5 (10%) | 50+ | 0 (0%) | ❌ | ⭐⭐⭐ |
| **NanoBot** | 5 | 2 (29%) | 19 | 18 (49%) | ❌ | ⭐⭐⭐⭐ |
| **LobsterAI** | 4 | 0 | 1 | 5 (83%) | ❌ | ⭐⭐⭐ |
| **Moltis** | 0 | 1 | 6 | 2 (25%) | ❌ | ⭐⭐⭐ |
| **NanoClaw** | 1 | 0 | 7 | 4 (36%) | ❌ | ⭐⭐⭐ |
| **PicoClaw** | ~4 | 3 | 7 | 3 (30%) | ❌ | ⭐⭐ |
| **ZeptoClaw** | 0 | 0 | 1 | 1 | ❌ | ⭐ |
| **NullClaw** | 0 | 0 | 0 | 0 | ❌ | ⭐ |
| **TinyClaw** | 0 | 0 | 0 | 0 | ❌ | ⭐ |

**观察**：
- **OpenClaw 单日吞吐量（1000+ 条记录）≈ 其余 12 个项目之和**，处于绝对头部。
- **LobsterAI** 关闭率最高（83%）但绝对量小；**ZeroClaw** 提交活跃但 0 PR 合并，揭示评审瓶颈。
- 13 个项目中仅 **1 个**（OpenClaw）当日有新版本/beta 发布，反映行业整体进入**代码沉淀期**而非发版扩张期。

---

## 3. OpenClaw 在生态中的定位

| 维度 | OpenClaw 现状 | 同类对比 |
|------|--------------|----------|
| **规模** | 单日 500 Issue + 500 PR，6 位数级 PR 总数（#75/#113434 等） | 约为 Hermes/IronClaw 的 10 倍，是 NanoBot 的 27 倍 |
| **版本节奏** | 2026.7.2 已发到 beta.5，月度小版本推进 | LobsterAI 已 2 个月未发版；ZeroClaw 仍停在 0.8.3 |
| **架构成熟度** | 已进入「XL 级破坏性重构」阶段（#115483 整合 16+ 模块运行时；#114388 移除默认 agent） | Hermes 仍在做单模块修复；IronClaw 还在补 error-recovery epic |
| **社区诉求** | 头部诉求为 #75（Linux/Windows 客户端，80 👍），代表「跨平台」长尾 | PicoClaw 的 #3182 Android、CoPaw 的 #6534 Windows NSIS 安装死循环均为同类诉求 |
| **生态位** | **通用 Agent 平台**：覆盖 17+ IM 通道、20+ 模型 Provider、嵌入式 runner | Hermes 偏 TTS/语音；IronClaw 偏安全沙箱；CoPaw 偏多 Agent 隔离 |

**关键差异**：OpenClaw 是唯一同时具备「**高频破坏性重构容忍度**」+「**生产级数据持久化保障**」（v2026.7.2-beta.5 引入 Quarantine Store + 崩溃恢复快照）+「**社区诉求被产品化接收**」三个特征的项目。其余项目要么规模未到、要么仍在单点稳定性建设期。

---

## 4. 共同关注的技术方向

| 方向 | 涉及项目 | 具体诉求 |
|------|---------|----------|
| **多模型后端可插拔** | NanoClaw、ZeroClaw、OpenClaw、Hermes | 摆脱单一供应商锁定：NanoClaw 接入 MiniMax OAuth + Codex 回退 + Copilot SDK；ZeroClaw 推进 Anthropic stored-profile OAuth；Hermes 扩展 Kimi/Claude Agent SDK |
| **MCP 协议生态化** | ZeroClaw、CoPaw、IronClaw、OpenClaw | ZeroClaw 推进 per-server CA 信任 + stdio 多路复用；CoPaw #6524 报 MCP 重连失效；OpenClaw 持续扩展 MCP 工具范围 |
| **凭据/密钥治理** | ZeroClaw、OpenClaw、LobsterAI | ZeroClaw #9127 提议 KeySource trait 抽象；OpenClaw #115480 隐藏 model label 中的凭据；LobsterAI 引入 managed run-safety policy |
| **Agent 沙箱与权限** | IronClaw、ZeroClaw、OpenClaw、Moltis | IronClaw filesystem TOCTOU 修复 + tool-disclosure 收窄；ZeroClaw WASM 插件化隔离；OpenClaw `approval_level` 继承；Moltis per-account operators 列表 |
| **可观测性** | Hermes、Moltis、OpenClaw | Hermes 形成「激活→首次使用→技能生命周期→per-turn」埋点链路；Moltis #1174 引入 Langfuse v4 + OTLP；OpenClaw 通过 embedded-runner 跟踪预算 |
| **多 Agent 协作/隔离** | NanoBot、OpenClaw、CoPaw | NanoBot #5000 提议子 Agent 持久身份；OpenClaw #75165 引入可组合终止代数；CoPaw #6461 报跨智能体隐私泄露 |
| **跨平台一致性** | OpenClaw、NanoBot、LobsterAI、CoPaw | OpenClaw #75（Linux/Win 客户端）；LobsterAI #2396（PowerShell 5.1 兼容性）；CoPaw #6534（Windows NSIS 安装）；NanoBot WebUI reduced-motion |
| **崩溃恢复与数据持久化** | OpenClaw、CoPaw、ZeroClaw | OpenClaw SQLite snapshot + filesystem durability；CoPaw #6520 agent.json 系统性损坏；ZeroClaw #8758 上下文耗尽无终止状态 |

---

## 5. 差异化定位分析

| 项目 | 技术栈 | 核心定位 | 目标用户 | 关键差异化 |
|------|--------|---------|----------|-----------|
| **OpenClaw** | TypeScript | 通用企业级 Agent 平台 | 中大型组织、多 IM 部署 | 通道广度（17+）+ 持久化保障 + 高频重构 |
| **IronClaw** | Rust | 安全优先的 Agent 沙箱 | 金融/政企等高安全场景 | Hermetic 测试平台 + sandbox egress TLS + channel ingress 纵深防御 |
| **ZeroClaw** | Rust | 凭据治理 + WASM 插件化 | 多云/企业混合部署 | KeySource trait 抽象 + runtime-owned 会话 + 统一附件架构 |
| **Hermes Agent** | Python | 语音/Agent 跨端一致体验 | 终端用户、桌面 CLI 用户 | TTS/STT 多 profile + 桌面/CLI/WSL2/Termux 拉齐 |
| **CoPaw** | TypeScript | 多智能体隐私隔离 | 群聊/私聊混合部署场景 | SubAgent 隔离 + Mission Mode 终止控制 + Scroll Context |
| **NanoBot** | TypeScript | 轻量多 Agent 协作 | 进阶个人/小团队 | 多 Agent 协作演进 + Python 原生扩展平台 + LINE 频道 |
| **Moltis** | TypeScript | Slack 优先的运营型 Agent | 客服/Slack 重度团队 | Slack Block Kit + per-message ACK 反应 + ACP 集成 |
| **LobsterAI** | TypeScript | 产品化桌面 Agent | C 端个人用户（Windows 重） | `/btw` 隔离侧聊 + Anthropic Skill 集成 + openclaw 安全合约 |
| **NanoClaw** | TypeScript | 多供应商配额回退 | 自托管 + 成本敏感团队 | MiniMax/Codex/Copilot 多后端矩阵 + WhatsApp 生产验证 |
| **PicoClaw** | - | 轻量运维向 | 极简部署用户 | Anthropic cache_control 修复 + 飞书原生消息 |
| **ZeptoClaw** | Rust | 极简容器化 | 自动化场景 | 仅依赖卫生维护，社区近乎静默 |
| **NullClaw / TinyClaw** | - | 已停止活跃 | — | 无近期动态 |

**架构哲学分水岭**：
- **Rust 派（IronClaw / ZeroClaw / ZeptoClaw）** 强调类型系统+形式化测试+凭据治理
- **TypeScript 派（OpenClaw / NanoBot / Moltis / CoPaw / LobsterAI / NanoClaw / PicoClaw）** 强调产品迭代速度+插件生态+UI 体验
- **Python 派（Hermes）** 强调研究友好+语音模型快速集成

---

## 6. 社区热度与成熟度分层

按活跃度与项目阶段可清晰分为四层：

### 🥇 第一梯队：高频迭代 + 架构重构期
- **OpenClaw**：单日 1000 条流转，XL 级

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目日报 · 2026-07-29

> 数据来源：[github.com/HKUDS/nanobot](https://github.com/HKUDS/nanobot)  
> 统计周期：过去 24 小时

---

## 1. 今日速览

NanoBot 今日呈现**高强度迭代态势**：过去 24 小时内共处理 **37 个 PR**（合并/关闭 18、待合并 19）和 **7 个 Issue**（新开/活跃 5、关闭 2），是近一段时间以来最活跃的工作日之一。当前 PR 流入量远超处理量，积压压力上升。修复类工作集中在回归 Bug（regression fixes）与 WebUI/Channel 稳定性，新增特性涵盖 LINE 频道接入、统一扩展平台与多 Agent 协作方向。项目**整体健康度良好**，但建议维护者关注 PR 评审节奏与 stale 议题清理。

---

## 2. 版本发布

**今日无新版本发布**。从 PR 流水看，多个 p1 级别回归修复（如 `fix(ci)`、WebUI 线程定位、配对存储空值处理、内存归档缺失字段处理）已合并或进入待合状态，预计将在下一次 patch 版本中随附发布。

---

## 3. 项目进展（已合并/关闭 PR 重点摘要）

今日 18 个 PR 完成生命周期，主要推进了 **CI 基础设施加固、WebUI 体验优化、配置可观测性** 三个方向。

| PR | 主题 | 影响领域 | 链接 |
|----|------|---------|------|
| [#5145](https://github.com/HKUDS/nanobot/pull/5145) | fix(ci)：使用 stdin 握手替代计时依赖，批量依赖解析 | CI/CD 稳定性 + 速度提升 | — |
| [#5144](https://github.com/HKUDS/nanobot/pull/5144) | fix(ci)：将 PR 路径检测范围限定到 head SHA | CI 路径检测准确性，避免并发分支干扰 | — |
| [#5143](https://github.com/HKUDS/nanobot/pull/5143) | fix(webui)：推理抽屉展开/折叠动效统一为 600ms | WebUI 视觉一致性 + reduced-motion 适配 | — |
| [#5142](https://github.com/HKUDS/nanobot/pull/5142) | fix(webui)：打开话题时直接定位到最新消息 | WebUI 滚动体验修复 | — |
| [#5110](https://github.com/HKUDS/nanobot/pull/5110) | feat(config)：nanobot status 增加启动诊断 + WebUI 恢复路径 | 配置失败可观测性显著增强 | — |

**整体判断**：今日合并的 PR 并非“大刀阔斧”的架构改造，而是**打磨型改进**——CI 抖动收敛、WebUI 微交互对齐、诊断能力扩展。这类工作对长尾用户体验价值高，但对外部观察者而言版本号变化不明显。

---

## 4. 社区热点

由于今日 PR 评论数普遍为空（多数由自动化流水线或单 PR 单作者提交），热点主要由 **Issue 维度的互动量** 决定。

| 议题 | 评论数 / 👍 | 链接 | 诉求分析 |
|------|------------|------|---------|
| [#5 uv install 安装指引](https://github.com/HKUDS/nanobot/issues/5) | 7 评论 / 3 👍 | 已关闭 | 用户希望官方补充 `uv` 安装方式以提升速度与稳定性，反映出对**更快依赖管理工具链**的强烈需求；今日已正式关闭。 |
| [#5000 多 Agent 协作演进提案](https://github.com/HKUDS/nanobot/issues/5000) | 5 评论 | OPEN | 主张将当前子 Agent 模式从「任务委派」演进为「多 Agent 协作」——子 Agent 应有持久身份与共享任务状态。这是 NanoBot **中长期架构演进的标志性提案**。 |
| [#1332 Token 消耗过大（hello 就要 5k token）](https://github.com/HKUDS/nanobot/issues/1332) | 4 评论 | 已关闭（stale） | 用户对 Prompt 体积与 Token 经济的负面反馈，今日被标记 stale 关闭，**信号被低估**。 |

---

## 5. Bug 与稳定性

按严重程度排序（p1 = 高优回归级）：

| 严重度 | 编号 | 简述 | 是否有对应 fix PR |
|--------|------|------|------------------|
| 🔴 P1 | [#5118](https://github.com/HKUDS/nanobot/issues/5118) | Session 归档时丢失只存于 `media[]` 的媒体绝对路径，**归档后文件不可恢复**（影响 6/17 通道） | ✅ 有 [#5120](https://github.com/HKUDS/nanobot/pull/5120) 与 [#5139](https://github.com/HKUDS/nanobot/pull/5139) 双 PR 待评审 |
| 🔴 P1 | [#5133](https://github.com/HKUDS/nanobot/issues/5133) | `finish_reason='length'` + `tool_calls` + 空内容时被错误路由到「空响应重试」，而非 length 恢复分支 | ❌ 暂未见对应 fix PR |
| 🔴 P1 | [#5138](https://github.com/HKUDS/nanobot/issues/5138) | MCP SDK v2 迁移遗留：stdio 关闭时的 cancel-scope teardown 异常 + stdout 协议污染 | ❌ 跟踪型 Issue，需 MCP SDK 升级配合 |
| 🟡 Medium | [#5149](https://github.com/HKUDS/nanobot/issues/5149) | nanobot 无法通过 WhatsApp **发送**音频（接收正常） | ❌ 无对应 PR |
| 🟢 Low | [#5155 修复](https://github.com/HKUDS/nanobot/pull/5155) | `get_approved` 在 `approved=null` 时崩溃（pairing 存储读取） | ✅ 已修，待合并 |
| 🟢 Low | [#5154 修复](https://github.com/HKUDS/nanobot/pull/5154) | Responses API parser 在含 primitive item 时崩溃 | ✅ 已修，待合并 |
| 🟢 Low | [#5153 修复](https://github.com/HKUDS/nanobot/pull/5153) | `MemoryStore._format_messages` 在 `timestamp=None` 或缺 role 时异常 | ✅ 已修，待合并 |
| 🟢 Low | [#5151 修复](https://github.com/HKUDS/nanobot/pull/5151) | AgentLoop 会话锁永不释放，导致长跑进程内存膨胀 | ✅ 已修，待合并 |
| 🟢 Low | [#5150 修复](https://github.com/HKUDS/nanobot/pull/5150) | 执行会话 stdout/stderr 缓冲区无上限 | ✅ 已修，待合并 |
| 🟢 Low | [#5147 修复](https://github.com/HKUDS/nanobot/pull/5147) | pairing.json 临时读失败会被当成损坏清空全部已批准发件人 | ✅ 已修，待合并 |
| 🟢 Low | [#5146 修复](https://github.com/HKUDS/nanobot/pull/5146) | 单个异常 token-usage 日键污染整页 `/api/settings` | ✅ 已修，待合并 |
| 🟢 Low | [#5152 修复](https://github.com/HKUDS/nanobot/pull/5152) | 子 Agent 兄弟任务仍在运行时，结果被误报为完成 | ✅ 已修，待合并 |

**稳定性观察**：今日报告的 Bug 几乎全部为**「空值/None 路径」与「长跑进程资源泄漏」类**，提示项目在**鲁棒性硬化（hardening）** 阶段。建议维护者优先合并 [#5150](https://github.com/HKUDS/nanobot/pull/5150)、[#5151](https://github.com/HKUDS/nanobot/pull/5151)、[#5155](https://github.com/HKUDS/nanobot/pull/5155) 这类对生产稳定性影响最大的 fix。

---

## 6. 功能请求与路线图信号

| 方向 | 关联 Issue / PR | 进入下版本的可能性 |
|------|----------------|-------------------|
| **多 Agent 协作架构** | [#5000](https://github.com/HKUDS/nanobot/issues/5000) | ⭐⭐⭐⭐ — 标志性提案，已吸引讨论，预计将作为后续 2-3 个版本的重点主题 |
| **统一扩展平台（Python 原生扩展）** | [#5098](https://github.com/HKUDS/nanobot/pull/5098) | ⭐⭐⭐⭐ — 概念清晰、与现有 skills/MCP/App 形成正交，已合并同类 PR 的扩展能力强 |
| **WebUI 技能市场（skill.sh + SkillHub 聚合）** | [#5116](https://github.com/HKUDS/nanobot/pull/5116) | ⭐⭐⭐ — 与 WebUI 体验升级路线契合 |
| **LINE Messaging API 频道** | [#5115](https://github.com/HKUDS/nanobot/pull/5115) | ⭐⭐⭐ — 日本/台湾/泰国/印尼市场刚需，与多通道战略一致 |
| **图像感知模型预设** | [#5148](https://github.com/HKUDS/nanobot/pull/5148) | ⭐⭐⭐ — 配置层增强，补齐多模态落地最后一公里 |
| **稳定资源路径别名** | [#5131](https://github.com/HKUDS/nanobot/pull/5131) | ⭐⭐⭐ — 跨主/子 Agent、技能、内存的统一视图 |

**路线图判断**：本期最具战略意义的三件事是「**多 Agent 协作**」「**扩展平台**」「**LINE 频道**」。前两者将定义 NanoBot 的下一阶段能力边界，后者将直接打开东亚市场。

---

## 7. 用户反馈摘要

| 来源 | 反馈性质 | 提炼 |
|------|---------|------|
| [#5149](https://github.com/HKUDS/nanobot/issues/5149) | 🔴 痛点 | 用户在 WhatsApp 上**只能收到音频、无法发送音频**，ffmpeg 警告提示。场景明确（普通用户使用语音消息），属于**真实使用受阻**而非边角问题。 |
| [#5](https://github.com/HKUDS/nanobot/issues/5) | 👍 满意路径 | `uv` 安装指引获得 3 个 👍 与 7 条评论，说明 Python 社区对 `uv` 已形成明确偏好，安装体验优化直接带来正向口碑。 |
| [#1332](https://github.com/HKUDS/nanobot/issues/1332) | 🔴 痛点（被关闭） | 用户反馈「发 hello 输入 token 就要 5 千多」，并贴出截图质疑 Token 效率。该 Issue 被标 stale 关闭，但反映的是 **Prompt 体积/默认模型选择**的系统性问题，建议维护者即便关闭 Issue，也应在 README 中给出 Token 友好的配置示例。 |
| [#5118](https://github.com/HKUDS/nanobot/issues/5118) | 🟡 数据丢失 | 6/17 通道在归档后**用户上传文件路径不可恢复**。这是典型的「静默数据丢失」，对受影响的用户信任度影响较大。 |
| [#5000](https://github.com/HKUDS/nanobot/issues/5000) | 💡 进阶用户 | 来自更深度使用 NanoBot 的贡献者，诉求点是**子 Agent 的协作能力**，而非基础可用性——表明项目已具备稳定的核心用户基础。 |

**总体判断**：用户对 NanoBot 的**核心功能**满意度较高，抱怨集中在**媒体处理、Token 效率、跨通道一致性**等工程化细节上，反馈符合一个**走向成熟期**的开源项目的典型形态。

---

## 8. 待处理积压与维护者提醒

| 类型 | 编号 | 状态 | 建议 |
|------|------|------|------|
| 🟡 长期 Issue | [#5000](https://github.com/HKUDS/nanobot/issues/5000) | 已开 9 天，5 评论 | **建议维护者正式回应**：明确是否纳入路线图、给出设计草案，或转为 Draft PR / RFC 文档 |
| 🟠 高优 Issue 未配 PR | [#5133](https://github.com/HKUDS/nanobot/issues/5133) | finish_reason 路由错误 | **无对应 fix PR**，需关注——length 截断恢复路径若长期走错分支，会导致模型在工具调用场景下**循环重试** |
| 🟠 高优 Issue 未配 PR | [#5149](https://github.com/HKUDS/nanobot/issues/5149) | WhatsApp 音频发送缺失 | **影响海外用户基本体验**，建议标记 good first issue 吸引贡献 |
| 🟠 高优 Issue 未配 PR | [#5138](https://github.com/HKUDS/nanobot/issues/5138) | MCP SDK v2 迁移 | **依赖上游 SDK 节奏**，维护者应同步制定升级窗口 |
| 🟡 PR 积压 | 19 个 OPEN PR | — | 建议分批集中评审；可优先合并「无 conflict、纯 fix、单文件」类（如 #5155/#5154/#5153）以快速收口 |
| 🟢 已关闭但留有反馈 | [#1332](https://github.com/HKUDS/nanobot/issues/1332) | Token 效率抱怨被 stale 关闭 | 建议在文档中补充 Token 优化建议（如精简系统 Prompt、选择更小模型）以替代关闭 |

---

## 附录：核心数据指标

| 指标 | 数值 |
|------|------|
| Issues 新开/活跃 | 5 |
| Issues 已关闭 | 2 |
| PR 待合并 | 19 |
| PR 已合并/关闭 | 18 |
| 新版本发布 | 0 |
| 待评审高优（p1）PR | 至少 12 个 |
| 报告 Bug 中已有 fix PR 比例 | 约 85%（11/13，含部分 PR 待合并） |

---

*报告生成时间：2026-07-29 ｜ 数据驱动 · 客观专业 · 关注项目健康度*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目日报 · 2026-07-29

> 数据来源：[NousResearch/hermes-agent](https://github.com/nousresearch/hermes-agent) | 报告窗口：过去 24 小时

---

## 1. 今日速览

Hermes Agent 今日保持高强度开发节奏，**24 小时内共 100 条记录更新**（50 Issues + 50 PRs），关闭率 14%，无新版本发布。当日依然以 **TTS / 语音模式相关的 Bug 修复为主线**（多集中在 Desktop 与 CLI 跨 profile 配置、WSL2/Termux/Windows 平台兼容性），同时社区在**网关权限分级（RBAC）**与**Provider 插件架构**两大长期议题上持续输出讨论。整体项目活跃度评级：**高**（高吞吐量、高关闭率、PR 数量与 Issue 数量基本持平，显示出持续集成与 Bug 修复并重的研发节奏）。

---

## 2. 版本发布

无新版本发布。

---

## 3. 项目进展

### 当日已关闭的关键 Issue 与 PR（修复落地）

| 编号 | 类型 | 简介 | 链接 |
|---|---|---|---|
| [#46135](https://github.com/NousResearch/hermes-agent/issues/46135) | Bug·Closed | Desktop 远程 TTS 音频被渲染为 0 秒坏文件 | [Issue](https://github.com/NousResearch/hermes-agent/issues/46135) |
| [#45506](https://github.com/NousResearch/hermes-agent/issues/45506) | Bug·Closed | Desktop 语音模式在非默认 profile 下未应用 profile 级 TTS 配置 | [Issue](https://github.com/NousResearch/hermes-agent/issues/45506) |
| [#67545](https://github.com/NousResearch/hermes-agent/issues/67545) | Bug·Closed | CLI 语音模式 Ctrl+B 热键在 STT/Agent 阶段被忽略 | [Issue](https://github.com/NousResearch/hermes-agent/issues/67545) |
| [#64057](https://github.com/NousResearch/hermes-agent/issues/64057) | Bug·Closed | Desktop TTS 语音选择忽略全局 vs profile 配置差异 | [Issue](https://github.com/NousResearch/hermes-agent/issues/64057) |
| [#8098](https://github.com/NousResearch/hermes-agent/issues/8098) | Bug·Closed | faster-whisper 首启静默下载，CLI 卡在 "Transcribing..." | [Issue](https://github.com/NousResearch/hermes-agent/issues/8098) |
| [#17573](https://github.com/NousResearch/hermes-agent/issues/17573) | Bug·Closed | WSL2 TTS 音频路由问题 | [Issue](https://github.com/NousResearch/hermes-agent/issues/17573) |
| [#56427](https://github.com/NousResearch/hermes-agent/issues/56427) | Bug·Closed | 视频/截图缓存泄漏（与 #16473 同源） | [Issue](https://github.com/NousResearch/hermes-agent/issues/56427) |
| [#66788](https://github.com/NousResearch/hermes-agent/issues/66788) | Test·Closed | 测试套件触发真实 TTS 与 Chrome 副作用 | [Issue](https://github.com/NousResearch/hermes-agent/issues/66788) |
| [#66012](https://github.com/NousResearch/hermes-agent/issues/66012) | Bug·Closed | Desktop 忽略 per-profile TTS 配置（duplicate） | [Issue](https://github.com/NousResearch/hermes-agent/issues/66012) |
| [#31015](https://github.com/NousResearch/hermes-agent/issues/31015) | Bug·Closed | Termux 下 `/voice on` 不可用 | [Issue](https://github.com/NousResearch/hermes-agent/issues/31015) |
| [#38831](https://github.com/NousResearch/hermes-agent/issues/38831) | Bug·Closed | CLI 自动播放 agent TTS 音频 | [Issue](https://github.com/NousResearch/hermes-agent/issues/38831) |
| [#21088](https://github.com/NousResearch/hermes-agent/issues/21088) | Bug·Closed | Python 3.14+ `return in finally` SyntaxWarning | [Issue](https://github.com/NousResearch/hermes-agent/issues/21088) |
| [#73770](https://github.com/NousResearch/hermes-agent/pull/73770) | Bot·Closed | `npm run fix` 自动格式化（CI 闭环） | [PR](https://github.com/NousResearch/hermes-agent/pull/73770) |

**今日可观察到的整体推进方向：**

- **语音栈一致性**：TTS/STT 跨 Desktop、CLI、Termux、WSL2、Windows 的多 profile 行为正在被系统性地拉齐，过去 24 小时关闭的 6-7 条 Issue 均围绕此主题。
- **Gateway 缓存治理**：视频/截图缓存伴随 [#16473](https://github.com/NousResearch/hermes-agent/issues/16473) 的音频缓存一并收尾。
- **可观测性（Observability）**：可观测性系列 PR（[#65329](https://github.com/NousResearch/hermes-agent/pull/65329), [#68883](https://github.com/NousResearch/hermes-agent/pull/68883), [#69437](https://github.com/NousResearch/hermes-agent/pull/69437), [#69416](https://github.com/NousResearch/hermes-agent/pull/69416)）形成"激活 → 首次使用 → 技能生命周期 → per-turn 跟踪"的完整链路，建议在下一个版本中作为单独模块整合呈现。
- **Provider 生态扩展**：Kimi Coding 接口与 Anthropic Messages 兼容（[#25706](https://github.com/NousResearch/hermes-agent/pull/25706)）、本地 STT HTTP 服务（[#62866](https://github.com/NousResearch/hermes-agent/pull/62866)）、Claude Agent SDK 作为 OAuth 订阅运行时（[#65982](https://github.com/NousResearch/hermes-agent/pull/65982)）三条路径并行推进。

---

## 4. 社区热点

### 🔥 讨论最活跃 Issue

1. **[#527](https://github.com/NousResearch/hermes-agent/issues/527) — Gateway Permission Tiers（RBAC）**  
   17 条评论 / 10 👍，创建于 2026-03-06，至今已 4 个月仍开放。提议为 Telegram/Discord/Slack 等 Messenger 平台引入 **Owner/Admin/User/Guest 四级 RBAC**，以解决当前"非全权即全封"的二元授权模型。  
   **诉求分析**：多用户/多 Agent 场景下需要"沙箱化"的能力边界——这是从单用户工具向多租户平台演进的关键缺口。

2. **[#71527](https://github.com/NousResearch/hermes-agent/issues/71527) — Desktop WebSocket 未传递 `?profile=` 参数**  
   7 条评论 / 0 👍，Active Bug。Hermes Desktop 在 WebSocket 握手时丢弃 localStorage 中的 active profile，导致多 profile 路由异常。  
   **诉求分析**：profile 是 Hermes 一等公民，跨客户端/桌面/远程网关的一致性是高频用户痛点。

3. **[#8993](https://github.com/NousResearch/hermes-agent/issues/8993) — v0.8.0 工具调用不稳定 / 幻觉**  
   4 条评论 / 3 👍，长期未关闭。Agent 在 v0.8.0 中频繁不能正确调用 `web_search` 与 FireCrawl，生成无效工具名（`todo:list`、`terminal:command`、`skills_list`）。  
   **诉求分析**：核心 Agent 可靠性问题，影响所有 web 自动化与检索工作流。

### 🔥 重点 PR

- **[#73774](https://github.com/NousResearch/hermes-agent/pull/73774) — perf(desktop): memoize PlatformAvatar + StatusDot**  
  3 个 steady-state 渲染循环中最终确认 1 个是真实 re-render 抖动，针对 messaging 图标的更新频率优化。
- **[#73773](https://github.com/NousResearch/hermes-agent/pull/73773) — fix(photon): cross-PR 碰撞修复**  
  修复昨天 photon 系列的 2 处跨 PR 冲突：U+FFFC 影子问题 + runtime-record fixture。说明昨日 PR 合并存在连锁反应。
- **[#73769](https://github.com/NousResearch/hermes-agent/pull/73769) — fix: aux-slot endpoint persistence, empty-response failure_reason, #72285 docs**  
  三个同步跟进：辅助模型端点持久化、空响应失败原因透传、profile-bound HTTP auth 变更文档化。

---

## 5. Bug 与稳定性

按严重程度排序（综合 P 标签、平台影响范围、是否有修复 PR）：

### P0 / 高严重度（无）

### P1 / 中严重度（无）

### P2 严重度（节选）

| Issue | 标题 | 平台/组件 | 是否有修复 PR |
|---|---|---|---|
| [#8993](https://github.com/NousResearch/hermes-agent/issues/8993) | 工具调用不稳定 / 幻觉 | Agent · Web 工具 | ❌ 仍在 needs-repro |
| [#71527](https://github.com/NousResearch/hermes-agent/issues/71527) | Desktop WebSocket 未传 `?profile=` | Desktop · CLI · MCP | ❌ |
| [#73297](https://github.com/NousResearch/hermes-agent/issues/73297) | `/reset` 后 Memory 丢失（FTS write 未 flush） | Gateway · Telegram | ❌ needs-repro |
| [#73388](https://github.com/NousResearch/hermes-agent/issues/73388) | 非 deferred 工具被反复 `tool_search` 包装 | Agent · MCP | ❌ |
| [#69881](https://github.com/NousResearch/hermes-agent/issues/69881) | Qwen 1M 上下文被识别为 131K，触发过早压缩 | Agent · Qwen Provider | ❌ |
| [#6212](https://github.com/NousResearch/hermes-agent/issues/6212) | Telegram 新会话吐出旧 `[CONTEXT COMPACTION]` 摘要 | Gateway · Telegram | ❌ |
| [#26714](https://github.com/NousResearch/hermes-agent/issues/26714) | Telegram cron 引用注入旧任务 | Gateway · Cron · Telegram | ❌ |
| [#67545](https://github.com/NousResearch/hermes-agent/issues/67545) | CLI 连续录音 Ctrl+B 仅在 `_voice_recording` 阶段生效 | CLI · TTS | ✅ 已关闭 |
| [#25683 注: [#17573](https://github.com/NousResearch/hermes-agent/issues/17573) | WSL2 TTS 路由 | CLI · TTS | ✅ 已关闭 |
| [#27265](https://github.com/NousResearch/hermes-agent/issues/27265) | Discord 长 bot-to-bot 移交丢失未被 mention 的 chunk | Gateway · Discord | ❌ |
| [#33547](https://github.com/NousResearch/hermes-agent/issues/33547) | `send_message` 不信任 plugin 平台的 channel 解析 | Gateway · Plugins | ❌ |
| [#5214](https://github.com/NousResearch/hermes-agent/issues/5214) | 只读/损坏 `config.yaml` 写入崩溃 | CLI · Gateway · Config | ❌ |

### P3 严重度（节选）

| Issue | 标题 | 状态 |
|---|---|---|
| [#62975](https://github.com/NousResearch/hermes-agent/issues/62975) | Podman 安装时 Node sidecar NPM 权限错误 | OPEN |
| [#21685](https://github.com/NousResearch/hermes-agent/issues/21685) | v0.13.0 provider plugin 未与 `/model` picker 完整集成 | OPEN |
| [#51931](https://github.com/NousResearch/hermes-agent/issues/51931) | 嵌套工具 hook 拿不到 `session_id` | OPEN |
| [#38468](https://github.com/NousResearch/hermes-agent/issues/38468) | macOS Desktop 远程 Gateway 启动崩溃（`Object has been destroyed`） | OPEN |

**观察**：P2 中约一半仍处于 needs-repro 状态，**维护者应在样本采集上给用户提供更明确的复现模板**，否则会持续拖慢修复。

---

## 6. 功能请求与路线图信号

### 🔋 已被 PR 跟进的强信号需求

| 需求 | 关联 Issue | 关联 PR | 状态 |
|---|---|---|---|
| Photon 平台本地 iMessage 模式 | — | [#56023](https://github.com/NousResearch/hermes-agent/pull/56023) | PR Open |
| Gateway 终端 webhook 元数据 | — | [#73559](https://github.com/NousResearch/hermes-agent/pull/73559) | PR Open |
| Per-turn waterfall tracing | — | [#65329](https://github.com/NousResearch/hermes-agent/pull/65329) | PR Open |
| Discord Markdown 表格→框线表渲染 | — | [#64301](https://github.com/NousResearch/hermes-agent/pull/64301) | PR Open |
| Claude Agent SDK 作为一等运行时（订阅 OAuth） | [#25267](https://github.com/NousResearch/hermes-agent/issues/25267) | [#65982](https://github.com/NousResearch/hermes-agent/pull/65982) | PR Open |
| Plugin 工具 handler 接收 live agent 上下文 | — | [#7344](https://github.com/NousResearch/hermes-agent/issues/7344) | Issue Open |
| Gateway 权限分级 RBAC | — | [#527](https://github.com/NousResearch/hermes-agent/issues/527) | Issue Open（讨论充分） |

### 💡 路线图整合建议

- **可观测性系列**（teknium1 / afourniernv）将在 v0.13.x 中合并概率高：
  - 基础激活埋点 [#69416](https://github.com/NousResearch/hermes-agent/pull/69416)
  - 首次使用 [#69437](https://github.com/NousResearch/hermes-agent/pull/69437)
  - 技能生命周期 [#68883](https://github.com/NousResearch/hermes-agent/pull/68883)
  - Per-turn 追踪 [#65329](https://github.com/NousResearch/hermes-agent/pull/65329)
- **Provider 矩阵**继续扩张：Kimi Coding [#25706](https://github.com/NousResearch/hermes-agent/pull/25706)、Claude Agent SDK [#65982](https://github.com/Nous

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目日报 · 2026-07-29

> 数据来源：[sipeed/picoclaw](https://github.com/sipeed/picoclaw) GitHub 仓库
> 报告周期：2026-07-28 ~ 2026-07-29 (UTC)

---

## 一、今日速览

PicoClaw 今日整体处于**维护整理状态**：无新版本发布，Issue 端呈现"集中清理陈旧条目"特征（4 条中 3 条已关闭，且均带有 `stale` 标记）；PR 端则延续了多线并行的修复节奏，共 10 条更新，其中 3 条关闭（全部为 fix 类）、7 条仍待合并。**活跃度评分为中等偏低**，社区讨论量与代码提交量较平稳，未见重大事件或紧急 hotfix。需要关注的信号是：长期挂起的安全相关 Feature Issue（#3088 vodozemac 替代 libolm）虽已关闭但讨论热烈，积压的安装脚本迁移 PR（#1951）已超过 4 个月未合并。

---

## 二、版本发布

**今日无新版本发布。** 跳过本节。

---

## 三、项目进展

今日关闭的 3 条 PR 全部聚焦于**已有功能的稳定性与兼容性修复**，未引入破坏性变更，对项目向前推进的贡献以"打磨"为主：

| PR | 标题 | 价值 |
|---|---|---|
| [#3228](https://github.com/sipeed/picoclaw/pull/3228) | fix(anthropic-messages): send SystemParts as system blocks with cache_control | 修复 Anthropic Messages provider 的 prompt caching 链路，之前 SystemParts 被压缩为字符串导致 `cache_control` 标记无法生效、缓存命中率为 0%。属于**成本与性能优化型修复**，对 Claude 用户意义明显。 |
| [#3254](https://github.com/sipeed/picoclaw/pull/3254) | fix(agent): prefer verbatim model matches over provider-alias splits | 修复 `lookupModelConfigByRef` 在 `model_list` 解析中模型别名误匹配的问题，避免早期条目通过 provider-alias 拆分错误胜出。提升模型引用解析的确定性。 |
| [#3256](https://github.com/sipeed/picoclaw/pull/3256) | fix(feishu): send audio and video with native message types | 飞书上传环节已能区分 opus/mp4，但发送环节仍用通用 file 类型。修复后音频视频将以**原生可播放消息**呈现，显著改善飞书用户的多媒体体验。 |

**整体评估**：项目稳步推进，但缺少新功能的合并落地，版本号层面暂无变化。

---

## 四、社区热点

按评论数与互动量排序：

1. **[Issue #3088](https://github.com/sipeed/picoclaw/issues/3088) — [Feature] use vodozemac instead of libolm**（💬 10 / 👍 2，标记为 help wanted / priority: high）
   - **热度最高**的讨论点：用户 `pbsds` 提出以官方替代库 **vodozemac** 替换已被废弃且不安全的 **libolm**，并建议编译期将 libolm 设为可选。
   - 该议题反映出社区对**端到端加密依赖链安全性**的高度关注。虽然 Issue 已 CLOSED，但 10 条评论 + 2 个 👍 表明这是仍未真正"被解决"的需求——更可能是被 stale 机器人自动关闭，而非社区达成共识。

2. **[Issue #3182](https://github.com/sipeed/picoclaw/issues/3182) — [BUG] Android version**（💬 5）
   - Android 用户 `Monessem` 报告服务无法启动、路径设置无法修改。至今仍 OPEN，是移动端的核心体验问题。

3. **[PR #3279](https://github.com/sipeed/picoclaw/pull/3279) — fix(seahorse): prevent tool-call format leakage into LLM summaries**
   - 虽评论数显示为 undefined，但议题描述了 **seahorse 路径下的工具调用格式泄漏**问题，是 #3255 的同源症状，值得作为衍生讨论点关注。

---

## 五、Bug 与稳定性

按严重程度排列：

| 严重度 | Issue | 状态 | 简述 | 是否已有 fix PR |
|---|---|---|---|---|
| 🟠 中 | [#3182](https://github.com/sipeed/picoclaw/issues/3182) Android version | OPEN | Android 端服务无法启动，路径修改无效；附带截图证据 | ❌ 无 |
| 🟢 低（已解决） | [#3255](https://github.com/sipeed/picoclaw/issues/3255) DingTalk 列表预览固定"PicoClaw" | CLOSED | 钉钉会话列表预览始终显示应用名而非消息内容，对话框内正常 | ⚠️ 未见关联 PR |
| 🟢 低（已解决） | [#3300](https://github.com/sipeed/picoclaw/issues/3300) 工具集缺失 read_file 导致死锁 | CLOSED（当日新开即关） | 用户通过 AGENT.md 指令强制读 RULES.md，但 read_file 工具集缺失引发每次对话死锁 | ⚠️ 未见关联 PR |

**观察**：当日新增的 #3300 与 #3255 均为"提交即关闭"，缺乏明确修复说明，社区透明度有待加强；#3182 Android 端问题仍是当前**唯一未解决的用户可见 Bug**。

---

## 六、功能请求与路线图信号

| 功能诉求 | 关联 PR/Issue | 进入下一版本的可能性评估 |
|---|---|---|
| 用 vodozemac 替代 libolm（安全升级） | [#3088](https://github.com/sipeed/picoclaw/issues/3088) | 🟡 **中高** — 官方替代库清晰，标记 help wanted + high priority，但 Issue 已被关闭，需要维护者重新开放或衍生 PR |
| 原生 Exa 网络搜索 provider | [#3299](https://github.com/sipeed/picoclaw/pull/3299) | 🟢 **高** — PR 已就绪，包含 API/配置/范围过滤完整实现，7-26 提交，符合现有 web_search 抽象 |
| 模型回退链配置（Web UI 可视化） | [#3200](https://github.com/sipeed/picoclaw/pull/3200) | 🟢 **高** — 前后端改动完整，已提交多日无 review 阻塞 |
| 安装脚本从 docs 仓库迁移至主仓库 | [#1951](https://github.com/sipeed/picoclaw/pull/1951) | 🟡 **中** — 自 2026-03-24 起挂起 > 4 个月，需要维护者明确归口策略 |
| 项目描述补充并行化说明 | [#3259](https://github.com/sipeed/picoclaw/pull/3259) | 🟢 **极高** — 文档级变更，阻力最小 |

---

## 七、用户反馈摘要

提炼自 Issues 与 PR 描述的真实用户痛点：

- 🔐 **安全焦虑（来自 #3088）**：核心加密依赖 libolm 长期未维护，社区用户主动推动替换决策，反映出**专业用户对底层依赖审计的强烈参与意愿**。
- 📱 **移动端缺位（来自 #3182）**：Android 版本存在服务启动与权限配置上的硬伤，截图证据确凿；说明移动端**目前未达到可用门槛**，与桌面/Web 体验存在断层。
- 💬 **钉钉集成体验（来自 #3255）**：列表预览只显示应用名而非消息内容，会让用户**对消息到达与否产生误判**，影响回复及时性。
- 🔁 **OAuth 远程登录失败（来自 #3280）**：`picoclaw auth login` 在 headless/远程环境下，授权码被消费后流程无法恢复，需手动重头开始；反映出**真实部署场景中认证鲁棒性不足**。
- 🧩 **多渠道一致性（来自 #3256）**：飞书消息类型映射不一致，揭示了**各 IM 渠道适配层仍存在碎片化行为差异**。
- 💰 **Anthropic 成本可见性（来自 #3251）**：cache token 指标被丢弃，运维无法判断 prompt cache 是否生效，反映**生产用户对成本透明度的高需求**。

---

## 八、待处理积压

提醒维护者优先关注的长期挂起项：

| 项 | 类型 | 挂起时间 | 关注理由 |
|---|---|---|---|
| [PR #1951](https://github.com/sipeed/picoclaw/pull/1951) chore: move installation scripts | PR（build） | 2026-03-24 起，约 127 天 | 安装脚本迁移长期阻塞，影响部署文档一致性 |
| [Issue #3088](https://github.com/sipeed/picoclaw/issues/3088) vodozemac 替换 libolm | Feature / 安全 | 创建于 2026-06-09，已被 stale 关闭 | 讨论热度高 + high priority，被自动关闭不应掩盖真实诉求，建议维护者**显式认领或转 PR** |
| [Issue #3182](https://github.com/sipeed/picoclaw/issues/3182) Android version | Bug | 创建于 2026-06-26 | 当前唯一 OPEN 的用户可见 Bug，已积累 5 条评论 |
| [PR #3200](https://github.com/sipeed/picoclaw/pull/3200) 模型回退链配置 | Feature | 2026-07-01 起约 28 天 | 实现完整度高，review 缺位会拖延产品差异化功能落地 |
| [PR #3299](https://github.com/sipeed/picoclaw/pull/3299) Exa 搜索 provider | Feature | 2026-07-26 | 新鲜 PR，需及时 review 防止作者流失 |

---

## 项目健康度综合评估

| 维度 | 评分（5 分制） | 说明 |
|---|---|---|
| 代码提交活跃度 | ⭐⭐⭐ | 当日 10 条 PR 更新，但仅 3 条关闭，缺乏合并节奏 |
| 社区响应度 | ⭐⭐ | 多条高优先级/高讨论度项被 stale 自动关闭，缺少人工介入 |
| Bug 修复效率 | ⭐⭐⭐⭐ | 3 条 fix PR 均在当日关闭，方向正确 |
| 安全与依赖治理 | ⭐⭐ | libolm 议题悬而未决，存在长期技术债 |
| 文档与发布节奏 | ⭐⭐ | 无新版本，PR #3259（描述更新）也未合并 |

**总评**：项目处于**功能沉淀期**，代码修复能力强，但 Issue 治理与 PR review 节奏存在改进空间；建议维护者建立**周度 review 例会**，重点清理 30 天以上的积压项，并对 #3088 类安全议题给出正式回应。

---

*报告生成时间：2026-07-29 ｜ 数据快照：GitHub REST API，过去 24 小时滚动窗口*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目日报

**报告日期：2026-07-29**

---

## 1. 今日速览

NanoClaw 今日保持中等活跃度的开发节奏，过去 24 小时内有 1 条 Issue 活跃、11 条 PR 流转（7 开放 / 4 关闭），但未发布新版本。今日工作呈现两条清晰主线：一是**底层稳定性加固**（容器 PID 1 僵尸进程收割、merge 提交守卫、webhook 配置优先级），二是**多模型后端生态扩张**（MiniMax OAuth 接入、Codex 配额回退、Copilot SDK 提议）。整体来看，项目维护健康，多名贡献者协同推进，PR 关闭率（4/11 ≈ 36%）与 Issue 解决率保持稳定。

---

## 2. 版本发布

⚠️ 今日无新版本发布。最近的合并变更（容器 --init、update-nanoclaw 审计、目的地回填等）仍积压在主分支，等待下一次发版窗口。

---

## 3. 项目进展

今日共 **4 条 PR 关闭**，项目向前迈出了重要一步：

| PR | 类型 | 影响 |
|---|---|---|
| [#3060](https://github.com/nanocoai/nanoclaw/pull/3060) | Bug Fix | 为 agent container 启动添加 `--init` 参数，解决 PID 1 无法收割僵尸进程的问题，并更正了文档中关于 PID 1 的错误说明（`docs/build-and-runtime.md`）。这是容器化 AI agent 的基础稳定性修复。 |
| [#1255](https://github.com/nanocoai/nanoclaw/pull/1255) | Feature | 新增 **MiniMax OAuth (Coding Plan)** 作为模型提供者，免去对 Anthropic API Key 或 Claude OAuth 的依赖。包含 `src/minimax-oauth.ts`（PKCE S256 设备码流程、自动刷新）和登录脚本 `scripts/minimax-login.ts`。 |
| [#2197](https://github.com/nanocoai/nanoclaw/pull/2197) | Bug Fix | `/update-nanoclaw` 在 fork 上执行 `git merge` 时可能静默退化为 single-parent commit，导致代码丢失。现已增加守卫逻辑。 |
| [#1136](https://github.com/nanocoai/nanoclaw/pull/1136) | Feature | 为 `/update-nanoclaw` 新增 **auto-merge 审计**与 **container smoke test** 步骤，专门捕获上游自动合并时无声删除代码的缺陷（曾导致 secrets 丢失事件）。 |

**进展评估**：今日合并集中在两个方向——容器运行时健壮性（#3060、#2197、#1136）与模型后端多元化（#1255）。两者都是 NanoClaw 从「单一 Claude 依赖」走向「生产级多供应商平台」的关键基础设施，进展显著。

---

## 4. 社区热点

今日最热的讨论集中在 **[Issue #1350 — Add GitHub Copilot SDK as alternative AI backend](https://github.com/nanocoai/nanoclaw/issues/1350)**（作者：scottgl9），获得 **8 👍 与 3 条评论**。该 Issue 提议将 GitHub Copilot SDK（支持 GPT-4.1 等模型）作为 Anthropic Claude Agent SDK 的替代后端接入 NanoClaw 的 agent-runner。

**背后诉求分析**：
- 用户希望摆脱对单一供应商（Anthropic）的依赖，避免 API 配额限制与定价风险；
- 不少开发者已订阅 GitHub Copilot，希望复用现有订阅凭证而非额外购买 Claude；
- 与此同时，Open PR [#3057（双引擎配额回退 Claude→Codex）](https://github.com/nanocoai/nanoclaw/pull/3057) 和已合并的 [#1255（MiniMax OAuth）](https://github.com/nanocoai/nanoclaw/pull/1255) 形成了清晰的「**多模型后端矩阵**」信号，社区对供应商可插拔架构的呼声强烈。

---

## 5. Bug 与稳定性

按严重程度排序：

| 严重度 | 问题 | 状态 |
|---|---|---|
| 🔴 高 | **[#2197](https://github.com/nanocoai/nanoclaw/pull/2197)** — `/update-nanoclaw` 在自定义 fork 上静默退化为 single-parent commit，可能导致代码被无声丢弃。 | ✅ 已修复（今日关闭） |
| 🔴 高 | **[#1136](https://github.com/nanocoai/nanoclaw/pull/1136)** — Git 自动合并可能删除代码却不产生冲突标记，曾造成 secrets 丢失。 | ✅ 已修复（今日关闭） |
| 🟠 中 | **[#3060](https://github.com/nanocoai/nanoclaw/pull/3060)** — 容器内 PID 1 无法收割 zombie 进程，长期运行可能泄漏进程表项。 | ✅ 已修复（今日关闭） |
| 🟡 低 | **[#3148](https://github.com/nanocoai/nanoclaw/pull/3148)** — `WEBHOOK_PORT` 未遵循 NanoClaw 标准配置优先级（环境变量 → .env → 默认 3000），关联 [#2901](https://github.com/nanocoai/nanoclaw/issues/2901)。 | 🔧 修复 PR 待合并 |
| 🟡 低 | **[#3146](https://github.com/nanocoai/nanoclaw/pull/3146)** — `scripts/test-v2-host.ts` 与 `scripts/test-v2-group.ts` 因未跟进迁移，已无法运行（启动前即崩溃）。 | 🔧 修复 PR 待合并 |
| 🟡 低 | **[#3143](https://github.com/nanocoai/nanoclaw/pull/3143)** — 已解决的 approval card 丢失标题与请求正文详情，仅显示按钮替换状态。 | 🔧 修复 PR 待合并 |

**整体稳定性观察**：今日一次性关闭了 3 条高严重度 PR（#3060、#2197、#1136），容器与升级路径两个最容易出问题的子系统均得到加固。

---

## 6. 功能请求与路线图信号

- **🤖 多模型后端支持**（高确定信号）
  - [#1350 GitHub Copilot SDK](https://github.com/nanocoai/nanoclaw/issues/1350) — Issue 已获 8 👍，8 👍 是高关注度指标，预计将被纳入下一季度路线图。
  - [#3057 Claude→Codex 配额回退](https://github.com/nanocoai/nanoclaw/pull/3057) — 该 PR 已在生产环境（WhatsApp 部署，自 2026-07-06 起）验证，含数据库迁移 017，是即将合入的高价值特性。

- **🌐 Webhook 部署灵活性**（中确定信号）
  - [#3144 `WEBHOOK_HOST` 可配置绑定地址](https://github.com/nanocoai/nanoclaw/pull/3144) 与 [#3148 `WEBHOOK_PORT` 配置优先级](https://github.com/nanocoai/nanoclaw/pull/3148) 同期出现，反映社区对**反向代理/容器化部署**场景下绑定控制的需求。

- **🗄 数据迁移与目的地回填**
  - [#3145 现有 wirings 补全 destination](https://github.com/nanocoai/nanoclaw/pull/3145)（migration 021）配合 [#3147 destination 回复上下文本地化](https://github.com/nanocoai/nanoclaw/pull/3147)，表明「destination」数据模型正处于重构窗口期。

---

## 7. 用户反馈摘要

- **生产场景痛点**：PR [#3057](https://github.com/nanocoai/nanoclaw/pull/3057) 的描述中提到「在 WhatsApp 生产部署中自 2026-07-06 起运行至今」，说明 NanoClaw 已被真实业务用于客户沟通，对**配额可靠性**有刚性需求。
- **配置体验不满**：Issue #2901（由 #3148 关闭）反映用户对 `.env` 中 `WEBHOOK_PORT` 不生效的困惑，期望 NanoClaw 配置优先级与行业惯例一致。
- **运维风险**：PR [#1136](https://github.com/nanocoai/nanoclaw/pull/1136) 描述中明确提到「曾因自动合并丢失 secrets」，是真实事故驱动的修复——用户对 `/update-nanoclaw` 工作流存在信任危机，本次修复意义重大。
- **多供应商诉求**：Issue [#1350](https://github.com/nanocoai/nanoclaw/issues/1350) 的 8 👍 显示用户对**摆脱 Anthropic 单一锁定**有强烈共情，MiniMax OAuth（#1255）的及时合并恰好印证维护者已听到这一声音。

---

## 8. 待处理积压

以下 Issue/PR 已创建较长时间但今日仍未响应，建议维护者优先关注：

| 编号 | 创建日期 | 积压天数 | 内容 | 链接 |
|---|---|---|---|---|
| #1350 | 2026-03-22 | ~129 天 | **GitHub Copilot SDK 后端**（高 👍，多模型矩阵关键缺口） | [链接](https://github.com/nanocoai/nanoclaw/issues/1350) |
| #3057 | 2026-07-15 | ~14 天 | **双引擎配额回退**（已在生产验证，但未合入主分支） | [链接](https://github.com/nanocoai/nanoclaw/pull/3057) |

**维护者建议**：
1. **#3057** 已实战验证且涉及数据库迁移 017，建议在下一次发版前完成 review；
2. **#1350** 积压近 4 个月且关注度高，可考虑先标记为「accepted」并拆分任务（OAuth 流、模型映射、容器配置）；
3. 今日新增的 6 条 PR（#3143、#3144、#3145、#3146、#3147、#3148）密集集中于「destination + webhook」两个子系统，建议维护者集中 review，避免 merge 冲突。

---

> 📊 **健康度总评**：🟢 良好
> 今日 Bug 修复类 PR 关闭率高（3 条高严重度全部关闭），新功能与基础设施双线推进，社区讨论聚焦于清晰的路线图诉求（多模型后端）。建议重点跟进 #3057 合入与 #1350 状态更新，以保持贡献者社区的节奏感。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 · 2026-07-29

---

## 1. 今日速览

IronClaw 今日整体维持在高强度迭代状态：过去 24 小时共有 **50 条 Issue** 和 **50 条 PR** 处于活跃状态，Issue 关闭率约 **32%**（16/50），PR 关闭/合并率约 **30%**（15/50）。核心主线集中在三大方向：(1) **`#6284` 错误可恢复性收尾**（WS1/WS5/WS9 多个 PR 同步推进），(2) **`#6524` 全链路 e2e 能力覆盖**（WS3/WS4/WS6/WS8 测试脚手架密集合并），(3) **安全边界硬化**（filesystem TOCTOU、sandbox TLS、tool-disclosure allow-set）。同时在 QA 实例（Railway）报告了 **1 个 P1 服务不可用周期性问题** 与多个集成安装类用户痛点，建议维护者优先关注。

---

## 2. 版本发布

**无新版本发布。** 已挂起的发布准备 PR [`#5598`](https://github.com/nearai/ironclaw/pull/5598) 包含以下待发布变更：

| Crate | 版本变化 | 兼容性 |
|---|---|---|
| `ironclaw_common` | 0.4.2 → 0.5.0 | ⚠ API 破坏性变更 |
| `ironclaw_safety` | 0.2.2 → 0.2.3 | ✓ API 兼容 |
| `ironclaw_skills` | 0.3.0 → 0.4.0 | ⚠ API 破坏性变更 |

`ironclaw_common` 已触发 `failure::Error` 的 `copy_impl_added` 警告，迁移时需重新编译所有下游依赖。该 PR 自 7 月 3 日创建至今仍未合并，已积压 **26 天**。

---

## 3. 项目进展

### 3.1 今日合并/关闭的关键 PR

**[`#6816`](https://github.com/nearai/ironclaw/pull/6816) — `fix(channels): centralize ingress and scope manifest commands`**（已关闭）
- 把认证、审批、产品命令分类统一收归到 host-owned 的 channel ingress 路径，Slack/Telegram 等适配器共享
- 引入 fail-closed 的 `[channel] commands = ["..."]` manifest 白名单（缺失或为空 = 不开放命令）
- **意义**：完成 Slack/Telegram 通道侧的纵深防御整合，是后续 provider-neutral messaging 体系的基础

### 3.2 仍在审查中的高质量 PR（按推进意义排序）

| PR | 主题 | 风险 | 推进价值 |
|---|---|---|---|
| [`#6817`](https://github.com/nearai/ironclaw/pull/6817) | 修复 local backend 4 处 TOCTOU 越权（fd-rooted 遍历） | low | 🔒 **关键安全修复**，关闭 sandbox filesystem 攻击面 |
| [`#5659`](https://github.com/nearai/ironclaw/pull/5659) | 工具披露面窄化（3 处泄露向量） | low | 🔒 **生产行为变更**，已积压 24 天，建议加速评审 |
| [`#6740`](https://github.com/nearai/ironclaw/pull/6740) | 沙箱 egress 代理 TLS 终止层（W6 phase 1） | low | 解锁后续 W6 凭据替换与 `sandbox-docker-tests` CI |
| [`#6746`](https://github.com/nearai/ironclaw/pull/6746) | Sandbox Docker 重连/egress 白名单/shell 限制（slice 1/4） | low | 把 ~5,455 行 sandbox 代码从 `sandbox/shell-integration` 合入 main |
| [`#6691`](https://github.com/nearai/ironclaw/pull/6691) | Composition 组装重构 | low | 净减 **9,421 行**，拆分工厂/运行时单体 |
| [`#6832`](https://github.com/nearai/ironclaw/pull/6832) | 错误恢复按 **RUN**（而非 stage）计数 | low | 关闭 `#6284` WS9 的真实缺陷：之前按 stage 重试预算失控 |
| [`#6824`](https://github.com/nearai/ironclaw/pull/6824) | 停止静默重试不可能成功的模型阶段错误 | low | 关闭 `#6284` WS1 中 4 类永久错误被错误归类为可重试的问题 |
| [`#6826`](https://github.com/nearai/ironclaw/pull/6826) | 限流响应不再被误读为鉴权失败 | low | 修复 "rate limited, retry after 4013 ms" 被误判为 `AuthFailed` 的 bug |
| [`#6831`](https://github.com/nearai/ironclaw/pull/6831) | 标准化 messaging 框架（host-owned 16 核心 + 13 保留 ops） | medium | 把 Slack/Telegram 操作语义统一到 host-owned 词表，附 11 类错误分类 |
| [`#6780`](https://github.com/nearai/ironclaw/pull/6780) | IronHub 深度链接注册/安装网关 | low | 重构 `@neo-sky` 的 `#5409`，对应当前 extension-host 布局 |
| [`#6745`](https://github.com/nearai/ironclaw/pull/6745) | 让已安装/agent-authored skill **真正可用** | low | 修复 skill body 从未被注入、技能在 SkillsBench/SkillLearnBench 上失效的问题 |
| [`#6794`](https://github.com/nearai/ironclaw/pull/6794) | WS9 属性边界 + 生成式生命周期测试 | medium | 关闭原本 6-PR 栈（#6782/#6783/#6784/#6787/#6789/#6791），fuzz 三个不可信边界 |

### 3.3 大规模关闭 Issue 群

今日关闭的 16 条 Issue 大多来自 `BenKurrek` 提交的 epic 子任务（涉及 `#6481`–`#6487` 7 个父 epic 下的扩展生命周期、消息标准化、通道治理、关键旅程等子任务），意味着这些 epic 的"定义阶段"已经完成，"实现阶段"被合并到对应的 PR 栈（如 `#6831` messaging、[`#6816`](https://github.com/nearai/ironclaw/pull/6816) channel ingress 等）。**这是阶段性里程碑：项目从"规划"转入"实现"**。

---

## 4. 社区热点

### 4.1 最活跃讨论

| 排名 | Issue | 评论数 | 主题 |
|---|---|---|---|
| 🥇 | [`#6284`](https://github.com/nearai/ironclaw/issues/6284) | **15** | 错误可恢复性"终极目标"——模型能从 100% 错误中恢复 |
| 🥈 | [`#6524`](https://github.com/nearai/ironclaw/issues/6524) | 3 | Hermetic 能力与用户旅程测试平台 |
| 🥉 | [`#6820`](https://github.com/nearai/ironclaw/issues/6820) | 2 | IronHub 信任边界：discovery 失败时 agent 退回未签名 URL |

### 4.2 诉求分析

- **`#6284` 错误可恢复性 epic**：是当前项目最高优先级主线，已有 11 个 PR 围绕其展开（WS1/WS5/WS6/WS9 等）。社区诉求本质是——**当模型看到错误时，必须能继续前进（带因 + 带修复建议 + 留出行动轮次）**。
- **`#6524` Hermetic 测试**：社区希望项目从"零散 happy-path 测试"过渡到"机械可证明的能力覆盖"。今天 WS3/WS4/WS6/WS8 全部落地，这是项目工程成熟度的关键信号。
- **`#6820` IronHub 安全**：agent 在 discovery 失败时**回退到未签名 URL**，这是 trust-boundary bug，已从 `#6754` 拆分独立追踪，体现维护者对安全边界的纪律性。

---

## 5. Bug 与稳定性

按严重程度排列：

| 严重度 | Issue | 描述 | Fix PR |
|---|---|---|---|
| 🔴 **P1** | [`#6805`](https://github.com/nearai/ironclaw/issues/6805) | Railway 实例每 ~30 分钟返回 `service_unavailable` | ❌ 待跟进 |
| 🟠 **P2** | [`#6833`](https://github.com/nearai/ironclaw/issues/6833) | Notion 工具无法安装（无清晰错误） | ❌ 待跟进 |
| 🟠 **P2** | [`#6834`](https://github.com/nearai/ironclaw/issues/6834) | Slack 集成在 near.foundation 账户下 setup 失败 | ❌ 待跟进 |
| 🟠 **P2** | [`#6806`](https://github.com/nearai/ironclaw/issues/6806) | 自动化输出不显示在 Web Chat，用户必须手动跳转 | ❌ 待跟进 |
| 🟠 生产 | [`#6815`](https://github.com/nearai/ironclaw/issues/6815) | turn-state 存储在一次 write-behind flush 失败后**永久锁定**为 degraded，需重启 | ❌ 待跟进 |
| 🟠 安全 | [`#6807`](https://github.com/nearai/ironclaw/issues/6807) | `NetworkTargetPattern` 92 处构造点绕过类型校验 | ❌ 待跟进 |
| 🟠 契约 | [`#6835`](https://github.com/nearai/ironclaw/issues/6835) | MCP 鉴权失败被归类为 `Client` 而非 `AuthRequired`，导致永不触发 re-auth gate | ❌ 待跟进 |
| 🟡 已修复 | [`#6814`](https://github.com/nearai/ironclaw/issues/6814) | 第三方 skill description 含 "API key" 触发 denylist（`ironclaw 1.0.0`） | ❌ 仅 follow-up |

### 稳定性诊断

- **P1 服务不可用周期性问题**（`#6805`）与 **`#6815` turn-state 永久锁死** 强相关（后者是 libSQL QA 实例上观察到的根因）。修复优先级最高，建议合并 [`#6696`](https://github.com/nearai/ironclaw/pull/6696) "Collapse lifecycle state into row-native process journal" 来根治。
- **集成安装失败类**（`#6833`/`#6834`）说明在 1.0.0 发布后，错误传播仍不够友好，需要可观察的失败信号。

---

## 6. 功能请求与路线图信号

| Issue | 主题 | 路线图契合度 | 状态 |
|---|---|---|---|
| [`#6837`](https://github.com/nearai/ironclaw/issues/6837) | 增加最小化 info-level 日志用于增长/使用统计 | ✅ 与"健康度可观测"主题契合 | 待 review |
| [`#6810`](https://github.com/nearai/ironclaw/issues/6810) | 默认开启 progressive tool disclosure，不退化日常工具使用 | ✅ 与 [`#5659`](https://github.com/nearai/ironclaw/pull/5659) tool-disclosure 表面收窄工作互补 | 待 review |
| [`#6811`](https://github.com/nearai/ironclaw/issues/6811) | IronHub 深度链接 + 私有 manifest 源 | ✅ 由 [`#6780`](https://github.com/nearai/ironclaw/pull/6780) 实现 | PR 进行中 |
| [`#6821`](https://github.com/nearai/ironclaw/issues/6821) | IronHub 自由文本匹配被误读为完整目录 | 触发签名目录语义澄清 | 待跟进 |

**预测**：上述功能请求很可能纳入 **Reborn 1.x 下一小版本**（尤其 progressive tool disclosure 与 info-level telemetry）。

---

## 7. 用户反馈摘要

来自 Issue 评论与 bug_bash 实测的真实痛点：

1. **集成安装体验差**（[`#6833`](https://github.com/nearai/ironclaw/issues/6833) / [`#6834`](https://github.com/nearai/ironclaw/issues/6834)）：Notion、Slack 集成安装无清晰错误提示，用户被困在"未完成"状态，**对 1.0.0 体验形成直接负面影响**。
2. **WebUI 自动化结果可见性差**（[`#6806`](https://github.com/nearai/ironclaw/issues/6806)）：自动化运行后结果未回流到 Web Chat，用户必须跳转页面；这与 [`#6508`](https://github.com/nearai/ironclaw/issues/6508)（provider 事件与 canonical 对话历史同步）闭环呼应。
3. **服务稳定性焦虑**（[`#6805`](https://github.com/nearai/ironclaw/issues/6805) / [`#6815`](https://github.com/nearai/ironclaw/issues/6815)）：Railway 实例每 30 分钟一次的不可用 + 修复需手动重启，**对生产可信度构成显著侵蚀**。
4. **第三方 skill denylist 误伤**（[`#6814`](https://github.com/nearai/ironclaw/issues/6814)）：用户自描述含 "API key" 即杀死整个 run，是 [`#5169`](https://github.com/nearai/ironclaw/issues/5169) / [`#5258`](https://github.com/nearai/ironclaw/issues/5258) 的后续——只豁免了 certified skill 而未覆盖 third-party skill。

---

## 8. 待处理积压

提醒维护者关注的"长期挂起"项：

| 类型 | 编号 | 标题 | 积压天数 | 建议 |
|---|---|---|---|---|
| 🔴 PR | [`#5598`](https://github.com/nearai/ironclaw/pull/5598) | chore: release（0.5.0 / 0.2.3 / 0.4.0 三包发布） | **26 天** | 评估是否立即发版，或拆分为 0.4.x 兼容性优先 |
| 🟠 PR | [`#5659`](https://github.com/nearai/ironclaw/pull/5659) | 工具披露面窄化（3 处泄露向量） | 24 天 | 🔒 安全修复，建议 24 小时内落实 review 排期 |
| 🟡 Issue | [`#6284`](https://github.com/nearai/ironclaw/issues/6284) | 错误可恢复性终极目标 | 10 天 | 11 个子 workstream 中已至少 4 个落地 PR，建议同步状态表 |
| 🟡 Issue | [`#6524`](https://github.com/nearai/ironclaw/issues/6524) | Hermetic 测试平台 | 7 天 | WS3/WS4/WS6/WS8 均已交付，建议关闭该 issue 并开启 v2 |

---

## 附录：项目健康度快评

| 维度 | 评分 | 评语 |
|---|---|---|
| **迭代强度** | ⭐⭐⭐⭐⭐ | 50/50 活跃 Issue+PR，密度极高 |
| **Issue 关闭率** | ⭐⭐⭐⭐ | 32%，含 11 条 epic 子任务批量关闭 |
| **安全纪律** | ⭐⭐⭐⭐⭐ | filesystem TOCTOU、tool-disclosure allow-set、NetworkTargetPattern 类型校验主动推进 |
| **稳定性** | ⭐⭐ | P1 服务周期不可用 + turn-state 锁死尚未根治 |
| **发布节奏** | ⭐⭐ | 26 天挂起的 release PR，破坏性变更下游迁移风险 |
| **测试覆盖** | ⭐⭐⭐⭐⭐ | Hermetic 测试平台 WS3/WS4/WS6/WS8 全线落地 |

**

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报

**日期：2026-07-29**
**项目：[netease-youdao/LobsterAI](https://github.com/netease-youdao/LobsterAI)**

---

## 1. 今日速览

LobsterAI 在过去 24 小时整体保持**中高度活跃**：共处理 4 条 Issue 和 6 条 PR，其中 5 条 PR 已完成闭环（合并或关闭），但**无新版本发布**。代码侧贡献集中，主要由 **fisherdaddy**（4 PR）和 **liuzhq1986**（1 PR）两位开发者推动，覆盖安全合约门禁、安装器修复、渲染层调整以及 `/btw` 侧边聊天新功能。社区侧则集中暴露 **Windows / PowerShell 兼容性问题**与**Skill 商用合规疑问**，反映出用户对跨平台一致性与商业授权边界的关注。整体来看，工程节奏稳定但仍存在长尾未响应问题（stale Issue），社区响应效率有改善空间。

---

## 2. 版本发布

**今日无新版本发布。** 最近可观察的版本信号为 Issue #2071 中用户提及的 `2026.5.27`，距今约两个月未发版，建议关注近期合并 PR 是否会在下一构建号中打包。

---

## 3. 项目进展（今日合并/关闭的重要 PR）

| PR | 标题 | 影响模块 | 关键价值 |
|----|------|---------|----------|
| [#2400](https://github.com/netease-youdao/LobsterAI/pull/2400) | fix(openclaw): enforce runtime/config safety-contract gate | openclaw / main / docs / build | **新增运行时构建信息 + 配置合约校验**，确保捆绑的 OpenClaw 运行时无法在缺失"managed run-safety policy"时启动；下线 `prompt-exposure-budget` 终端 kind，减少误停带来的 token 浪费。属于**安全与稳定性关键门控**。 |
| [#2402](https://github.com/netease-youdao/LobsterAI/pull/2402) | fix(update): reject Windows installer redirects | docs / main | 拒绝 Windows 安装器跳转响应中的 `response.url` 信任，修复潜在的供应链/重定向风险。 |
| [#2398](https://github.com/netease-youdao/LobsterAI/pull/2398) | fix(installer): drive Skills backup outcome from helper exit codes | windows installer | 改用 **退出码**而非 stdout 文本比对判定 Skills 备份结果，修复 nsExec::ExecToStack 保留 CRLF 导致的"假成功"误判，消除遗留恢复降级告警。 |
| [#2399](https://github.com/netease-youdao/LobsterAI/pull/2399) | feat(renderer): hide sites nav entry outside test mode | renderer | 非测试模式下隐藏站点导航入口，减少生产环境 UI 噪音。 |
| [#2397](https://github.com/netease-youdao/LobsterAI/pull/2397) | feat(cowork): add isolated /btw side chat | cowork / openclaw / renderer | **新增 /btw 浮动侧边面板**：可编辑、可拖拽、八方向缩放、可中断、支持追问；与主对话隔离，经 OpenClaw utility stream 路由。属于**用户体验级新功能**。 |

> 整体评估：今日 PR 在「**安全门控**」「**Windows 安装体验**」「**侧边协作交互**」三方面均向前推进了一步，项目健康度良好。

---

## 4. 社区热点

| 话题 | Issue / PR | 评论数 | 👍 | 关注点分析 |
|------|-----------|-------|-----|----------|
| **Anthropic Skill 商用合规** | [#2401](https://github.com/netease-youdao/LobsterAI/issues/2401) | 1 | 0 | 用户对 pdf/docs/pptx/xlsx 处理能力是否基于 Anthropic 官方 Skill、其商用授权边界存疑——这是首次出现合规性提问，可能影响付费用户决策。 |
| **插件 ID 不匹配告警** | [#1236](https://github.com/netease-youdao/LobsterAI/issues/1236) | 1 | 0 | 长期存在但 [stale]，反映**配置键命名一致性**这一基础治理缺陷未根治。 |
| **创建定时任务错误** | [#2071](https://github.com/netease-youdao/LobsterAI/issues/2071) | 1 | 0 | [stale] 状态，从 5 月延续至今，是调度模块可靠性信号。 |
| **Windows exec 工具默认 Shell 异常** | [#2396](https://github.com/netease-youdao/LobsterAI/issues/2396) | 0 | 0 | 新鲜报告，证据链完整（环境、日志路径均提供），具备高修复价值。 |

**热点诉求归纳**：① 跨平台一致性（Windows 优先）② 商业授权透明度 ③ 调度/插件基础治理。

---

## 5. Bug 与稳定性

按严重程度排列：

| 严重度 | Issue | 现象 | 是否有 fix PR |
|--------|-------|------|---------------|
| 🔴 **高** | [#2396](https://github.com/netease-youdao/LobsterAI/issues/2396) | exec 工具默认 shell wrapper 为 Windows PowerShell 5.1，导致 Linux 命令、`node -e`、`pwsh -Command` 等内联脚本**静默失败** | ❌ 暂无，今日 PR 多为安装器/安全/UI 类，未触及 shell wrapper |
| 🟡 **中** | [#1236](https://github.com/netease-youdao/LobsterAI/issues/1236) | mcp-bridge 插件 entry key 与 manifest ID 不匹配，每次启动产生配置警告 | ❌ 暂无 |
| 🟡 **中** | [#2071](https://github.com/netease-youdao/LobsterAI/issues/2071) | 创建定时任务报错（截图存档） | ❌ 暂无 |
| 🟢 **低（已修）** | [#2398](https://github.com/netease-youdao/LobsterAI/pull/2398) | nsExec::ExecToStack CRLF 引发 Skills 备份假成功 | ✅ PR #2398 已关闭（合并） |
| 🟢 **低（已修）** | [#2402](https://github.com/netease-youdao/LobsterAI/pull/2402) | Windows 安装器重定向信任漏洞 | ✅ PR #2402 已关闭 |

> **稳定性信号**：今日 5 个合并 PR 中有 3 个直接修复潜在缺陷或安全门控（#2400、#2402、#2398），且均已在同一日闭环，**修复响应速度良好**。

---

## 6. 功能请求与路线图信号

| 需求 | 来源 | 当前状态 | 进入下一版本的概率 |
|------|------|----------|-------------------|
| 模型提供商**官网链接 + API Key 获取引导** | [#1233](https://github.com/netease-youdao/LobsterAI/pull/1233)（基于已关闭的 #731 复活重提） | OPEN，自 2026-04-01 仍 stale | ⚠️ 中等——PR 存在但缺乏评审推动 |
| **`/btw` 隔离侧边聊天** | [#2397](https://github.com/netease-youdao/LobsterAI/pull/2397) | 已关闭（合并） | ✅ **已落地** |
| 非测试模式**隐藏 Sites 导航** | [#2399](https://github.com/netease-youdao/LobsterAI/pull/2399) | 已关闭（合并） | ✅ 已落地 |
| Anthropic Skill 商用合规说明 | [#2401](https://github.com/netease-youdao/LobsterAI/issues/2401) | 待官方回应 | 🆕 新增需求，建议纳入文档/合规 FAQ |

---

## 7. 用户反馈摘要

从 4 条 Issue 的评论与摘要中提炼：

- **痛点 1：跨平台兼容性焦虑（高优）** —— Windows 11 + PowerShell 5.1 默认环境下，exec 工具因 shell wrapper 选择不当导致"静默失败"，用户难以察觉（[#2396](https://github.com/netease-youdao/LobsterAI/issues/2396)）。这反映了 AI Agent 在 Windows 端的**可观测性不足**。
- **痛点 2：商业使用边界不清晰** —— 用户在引入 pdf/docs/pptx/xlsx 能力时，担忧 Skill 商用合规（[#2401](https://github.com/netease-youdao/LobsterAI/issues/2401)），反映**官方文档/合规披露缺位**。
- **痛点 3：调度与插件治理松散** —— 定时任务创建失败、插件 ID 不匹配告警等老问题长期未根治（[#2071](https://github.com/netease-youdao/LobsterAI/issues/2071)、[#1236](https://github.com/netease-youdao/LobsterAI/issues/1236)），影响基础使用信心。
- **正面信号** —— `/btw` 侧边聊天等 PR 的快速合并（[#2397](https://github.com/netease-youdao/LobsterAI/pull/2397)）以及安全合约门禁的引入（[#2400](https://github.com/netease-youdao/LobsterAI/pull/2400)），体现维护团队对**新功能与底层安全**双线推进。

---

## 8. 待处理积压（提醒维护者关注）

| 类型 | 编号 | 创建日期 | 已挂起天数 | 备注 |
|------|------|----------|-----------|------|
| 🟠 Stale PR | [#1233](https://github.com/netease-youdao/LobsterAI/pull/1233) | 2026-04-01 | ~119 天 | 模型提供商链接与 API Key 引导，仍 OPEN，无评审活动 |
| 🟠 Stale Issue | [#1236](https://github.com/netease-youdao/LobsterAI/issues/1236) | 2026-04-01 | ~119 天 | 插件 ID 不匹配告警 |
| 🟠 Stale Issue | [#2071](https://github.com/netease-youdao/LobsterAI/issues/2071) | 2026-05-28 | ~62 天 | 创建定时任务报错 |

> **维护建议**：建议组织一次 stale issue 清理冲刺，重点评估 #1233 PR 是否具备合并条件、#1236/#2071 是否需要回到活跃看板或关闭转文档，以维护社区信任。

---

### 📊 项目健康度总评

| 维度 | 评分 | 说明 |
|------|------|------|
| 代码活跃度 | ⭐⭐⭐⭐ | 6 PR / 日，且闭环率高 |
| 社区响应 | ⭐⭐⭐ | 新 Issue 当日有互动，但 stale 项积累 |
| 稳定性 | ⭐⭐⭐ | 今日修复多项潜在缺陷，但 Windows exec 问题悬而未决 |
| 发布节奏 | ⭐⭐ | 约 2 个月未发版，建议下一节点打包今日合并内容 |
| 透明度 / 合规 | ⭐⭐ | Skill 商用说明缺失，建议补充 |

---

*报告基于 GitHub 公开数据生成，数据时间窗口：2026-07-28 ~ 2026-07-29。*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目日报 · 2026-07-29

---

## 1. 今日速览

Moltis 今日整体活跃度**较高**，开发节奏密集。过去的 24 小时内仓库未发布新版本，但有 1 条 Issue 关闭与 8 条 PR 更新（6 条仍待合并、2 条已关闭）。PR 主题集中在**Slack 通道增强、权限边界收紧、可观测性基础设施、PWA 推送通知**等方向，并完成了一项 Cron 归档会话的 UI 修复提交。提交者高度集中于 `penso`（占 7 条），社区外部贡献仅 1 条（`shixkeli`、`shixi-li`）。综合来看，项目处于多线并进的迭代中期，**功能深度在持续加强，但需关注待合并 PR 的评审吞吐与合并节奏**。

---

## 2. 版本发布

⚠️ 过去 24 小时内**无新版本发布**。

---

## 3. 项目进展

今日**已关闭 / 已合并**的 PR 共 2 条，均为小型但重要的修复与体验改进：

- **[#1172](https://github.com/moltis-org/moltis/pull/1172) `fix(web): hide archived cron sessions by default`**（作者：shixi-li，已关闭）
  - 将"归档会话默认隐藏"的全局偏好同时应用到 Cron 标签页，避免被归档的定时任务会话污染默认视图；
  - 保留"Show archived sessions"开关，并附带 Playwright 回归测试覆盖隐藏 / 显示 / 再隐藏三条路径。
  - ✅ 该 PR 直接回应了今日关闭的 [Issue #1111](https://github.com/moltis-org/moltis/issues/1111)（归档 Cron 会话无可见效果），构成完整的"问题→修复"闭环。

- **[#1171](https://github.com/moltis-org/moltis/pull/1171) `Move ACP selection into the chat model picker`**（作者：penso，已关闭）
  - 将已安装的 ACP 客户端移入编辑器中的模型选择器，与 provider 模型并列；
  - 移除旧的 header ACP 选择器及冗余的"Built-in LLM agent"选项；
  - 保留每会话绑定、ACP 专属自动绑定、不可用客户端处理与推理控制等行为。
  - ✅ 这是 ACP 集成 UX 简化的重要一步，与今日仍 OPEN 的 [PR #1169](https://github.com/moltis-org/moltis/pull/1169) `feat(acp)` 形成上下游协同。

> **项目推进评估**：今日未涉及大型架构变更，但通过 2 条合并 PR 显著改善了 Cron 视图体验与模型选择器 UX。预计项目整体向前推进约 **5-8%**（以仓库全局变更衡量）。

---

## 4. 社区热点

过去 24 小时，**讨论热度整体偏低**——所有 Issue 与 PR 的评论数均为 0 或未公开，无显著点赞数据。但从"主题集中度"与"PR 规模"角度，以下条目构成了当前的关注焦点：

| 排名 | 条目 | 关注点 |
|---|---|---|
| 1 | [PR #1166](https://github.com/moltis-org/moltis/pull/1166) `feat(slack): per-message acknowledgment reactions, phases, reconnect supervision, and Block Kit` | Slack 通道"已收到"反馈信号的真实场景适配 |
| 2 | [PR #1170](https://github.com/moltis-org/moltis/pull/1170) `fix(channels): gate /sh and privileged tools behind a per-account operators list` | 通道发送方的权限边界安全收紧 |
| 3 | [PR #1174](https://github.com/moltis-org/moltis/pull/1174) `Add instrumentation and feedback collection infrastructure` | 后端无关的 Agent 可观测性 + Langfuse v4 导出 |
| 4 | [PR #1169](https://github.com/moltis-org/moltis/pull/1169) `feat(acp): expose Moltis as an ACP agent over stdio` | 将 Moltis 作为 ACP Agent 通过 stdio 暴露 |
| 5 | [PR #1173](https://github.com/moltis-org/moltis/pull/1173) `feat(pwa): make push notifications reliable and non-disruptive` | PWA 推送通知跨标签页与跨设备稳定性 |

**诉求分析**：当前社区关注的诉求可归为三类——
- **运营可靠**（Slack 反馈、推送通知重连）：#1166、#1173
- **安全边界**（operater 列表、acp 隔离）：#1170、#1169
- **可观测性**（instrumentation、Langfuse、OTLP）：#1174

---

## 5. Bug 与稳定性

| 严重程度 | 条目 | 状态 |
|---|---|---|
| 🟡 中 | [Issue #1111](https://github.com/moltis-org/moltis/issues/1111) `[bug] Archiving a cron session has no visible effect` | ✅ 已于 2026-07-28 关闭，相关修复见 [PR #1172](https://github.com/moltis-org/moltis/pull/1172) |

**说明**：今日**没有新的 Bug 报告**，唯一活跃的 Bug（#1111）已在 24 小时内被修复并关闭。从已合并的 [PR #1172](https://github.com/moltis-org/moltis/pull/1172) 描述可见，根因是"已归档会话"的隐藏偏好未在 Cron 标签页生效；修复同时补齐了 Playwright 回归用例，**质量保障到位**。

---

## 6. 功能请求与路线图信号

由于今日 Issue 区仅有 1 条已关闭的 Bug，未出现新的功能请求 Issue。但**通过 PR 流向可推测出项目下一阶段路线图**：

| 方向 | 信号来源 | 预计落地 |
|---|---|---|
| **Slack 通道成熟化** | [PR #1166](https://github.com/moltis-org/moltis/pull/1166) | 即将合并 |
| **权限模型分层** | [PR #1170](https://github.com/moltis-org/moltis/pull/1170) | 即将合并 |
| **ACP 标准化** | [PR #1169](https://github.com/moltis-org/moltis/pull/1169) + [PR #1171](https://github.com/moltis-org/moltis/pull/1171)（已合并） | 持续推进 |
| **可观测性平台化** | [PR #1174](https://github.com/moltis-org/moltis/pull/1174)（Langfuse v4 + OTLP） | 候选中版本 |
| **PWA 体验** | [PR #1173](https://github.com/moltis-org/moltis/pull/1173) | 候选下版本 |
| **基准评测** | [PR #1175](https://github.com/moltis-org/moltis/pull/1175) `Terminal-Bench chat runner` | 新实验性方向 |

> 📌 **核心信号**：项目正在从"功能可用"向"运营可靠、可观测、可评测"演进。下一版本（若有发布）很可能聚焦于 Slack 体验、权限分层与可观测性三件套。

---

## 7. 用户反馈摘要

- [Issue #1111](https://github.com/moltis-org/moltis/issues/1111) 作者 IlyaBizyaev 反馈：**归档 Cron 会话后无任何视觉变化**，归档操作形同虚设。痛点在于用户预期归档会带来"清理视图"的效果，而实际是页面依旧显示已归档条目。
  - 满意度：低 → ✅ 已修复（PR #1172）。
  - 使用场景：定时任务（Cron）会话量较大的重度用户。

- 由于其余条目评论数为 0，**暂无更多可提炼的用户反馈**。建议维护者主动在大型 PR（如 #1174、#1170）下邀请社区试用与评论。

---

## 8. 待处理积压

| 条目 | 状态 | 提醒 |
|---|---|---|
| [PR #1166](https://github.com/moltis-org/moltis/pull/1166) Slack 反馈反应（更新：2026-07-29） | 待合并 | 创建 5 天，Slack 通道关键补丁，建议优先评审 |
| [PR #1170](https://github.com/moltis-org/moltis/pull/1170) 权限分层（更新：2026-07-29） | 待合并 | 安全相关，建议加快评审 |
| [PR #1169](https://github.com/moltis-org/moltis/pull/1169) ACP agent 暴露（更新：2026-07-29） | 待合并 | 与 #1171 上下游协同，建议同步评审 |
| [PR #1174](https://github.com/moltis-org/moltis/pull/1174) Instrumentation（更新：2026-07-29） | 待合并 | 规模较大，建议拆批评审 |
| [PR #1173](https://github.com/moltis-org/moltis/pull/1173) PWA 推送（更新：2026-07-28） | 待合并 | UX 类，需前端维护者介入 |
| [PR #1175](https://github.com/moltis-org/moltis/pull/1175) Terminal-Bench runner（更新：2026-07-28） | 待合并 | 新贡献者（choskeli）首条 PR，建议给予引导 |

> ⚠️ **维护者关注建议**：当前 6 条 OPEN PR 的最后更新日期均集中在 2026-07-28 或 2026-07-29，意味着这些 PR 在过去 24 小时内**仍在被作者积极更新**，但尚未进入评审 / 合并通道。建议本周内集中评审 Slack、权限、ACP 三条主线 PR，避免积压。

---

### 📊 健康度总评

| 维度 | 评分 | 说明 |
|---|---|---|
| 活跃度 | ⭐⭐⭐⭐ | 多 PR 并行迭代 |
| 响应及时性 | ⭐⭐⭐⭐⭐ | 24h 内完成 Bug→PR→关闭闭环 |
| 社区参与 | ⭐⭐ | 高度依赖单一核心贡献者（penso） |
| 评审吞吐 | ⭐⭐ | 6 条 PR 待合并，需关注 |
| 安全态势 | ⭐⭐⭐⭐ | 主动收紧权限边界 |
| 可观测性 | ⭐⭐⭐⭐ | 引入 Langfuse/OTLP 基础设施 |

**整体健康度：良好向优秀演进** ✅

---

*报告基于截至 2026-07-29 的 GitHub 公开数据生成，数据来源：[moltis-org/moltis](https://github.com/moltis-org/moltis)*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报

**报告日期：** 2026-07-29
**数据周期：** 过去 24 小时
**项目：** [agentscope-ai/CoPaw](https://github.com/agentscope-ai/CoPaw)
**当前版本主线：** QwenPaw 2.0.1（AgentScope 2.0.4.post1）

---

## 1. 今日速览

过去 24 小时 CoPaw 仓库保持高频迭代节奏：共记录 18 条 Issue 动态（12 新开/活跃、6 已关闭）与 50 条 PR 动态（36 待合并、14 已合并/关闭），无新版本发布。今日焦点集中在 **隐私与多智能体隔离**（3 个相关 Issue）、**Mission Mode 与 Sub Agent 缺陷**（3 个相关 Issue），以及 **插件系统兼容性回归**。多个高优先级 Bug 已经出现配对的修复 PR（#6533 → #6535），表明维护团队响应速度健康。整体活跃度评估：**高**——Issue 与 PR 流量接近 70 条，远超日常基线，但关闭率（Issues 33%、PR 28%）略有压力。

---

## 2. 版本发布

**本周期无新版本发布。** 当前仍处于 QwenPaw 2.0.1 稳定版与 2.1.0b1 预发布之间的过渡期（参见 PR #6532）。下一次发布窗口预计将整合本日活跃的多个 fix PR（详见第 3、5 节）。

---

## 3. 项目进展

### 已合并/关闭的重要 PR

| PR | 主题 | 影响 |
|-----|------|------|
| [#6532](https://github.com/agentscope-ai/QwenPaw/pull/6532) | 临时禁用插件 max 版本校验 | 解决 2.1.0b1 预发布版本被插件兼容层误判为不兼容的紧急问题 |
| [#6535](https://github.com/agentscope-ai/QwenPaw/pull/6535) | 接受 mission verification kwargs | 修复 Issue [#6533](https://github.com/agentscope-ai/QwenPaw/issues/6533) 的 `/mission` TypeError |
| [#6536](https://github.com/agentscope-ai/QwenPaw/pull/6536) | 删除聊天时清理持久化数据 | 解决 #6299 引发的存储泄漏 |
| [#6330](https://github.com/agentscope-ai/QwenPaw/pull/6330) | 修复 GA、改善官网导航/下载页 UI | 落地 2.0 品牌视觉并补齐埋点 |
| [#5940](https://github.com/agentscope-ai/QwenPaw/pull/5940) | 2.0 首页文案与视觉刷新 | 突出 Agent OS / Terminal UI / Scroll Context / Loop Engineering 四大能力 |
| [#5697](https://github.com/agentscope-ai/QwenPaw/pull/5697) | 增加 Blog 模块、重构 Docs | SEO 与可发现性增强 |
| [#3332](https://github.com/agentscope-ai/QwenPaw/pull/3332) | 贡献者样式修复 | 官网侧打磨 |

**累计推进评估：** 今日在 **Mission 运行时**、**存储生命周期**、**官网品牌一致性** 三条主线均有实质落地，是富有成效的一天。官网侧 PR 集中度极高（yuluo1007 单人贡献 ≥ 8 个 PR 关闭），建议关注 reviewer 负载均衡。

---

## 4. 社区热点

| 排名 | 标题 | 评论 | 👍 | 类型 |
|------|------|------|-----|------|
| 1 | [#6524](https://github.com/agentscope-ai/QwenPaw/issues/6524) MCP 后端重启后客户端无法自动恢复 | 3 | 0 | Bug |
| 2 | [#6473](https://github.com/agentscope-ai/QwenPaw/issues/6473) Agent Kanban 插件安装失败 *（已关闭）* | 3 | 0 | Bug |
| 3 | [#6520](https://github.com/agentscope-ai/QwenPaw/issues/6520) agent.json 系统性损坏 | 2 | 0 | Bug |
| 4 | [#6509](https://github.com/agentscope-ai/QwenPaw/issues/6509) Sub Agent 隔离与单 Agent 会话隔离 | 2 | 0 | Feature |
| 5 | [#6461](https://github.com/agentscope-ai/QwenPaw/issues/6461) 智能体完全隔离（隐私保护） | 2 | **2** | Feature |

**诉求分析：**
- **MCP 容错** 是开发者最高频痛点（#6524）：当远端 MCP Server 重启后，旧 `mcp-session-id` 复用导致整个工具列表查询失败，且必须手动 `list mcp` 才能恢复——这破坏了"长会话代理"的核心价值主张。**目前无修复 PR 关联**，建议优先处理。
- **多智能体隔离** 是用户情感最强的话题（#6461 拿到 2 个 👍）：一位部署者反馈群聊机器人可读取并修改私聊智能体的记忆与设置，构成真实隐私泄露。问题根源是 SubAgent 之间相互透明（#6509）以及 `/mission` 缺乏服务端迭代上限（#6505）共同叠加而成。

---

## 5. Bug 与稳定性

按严重程度排列：

| 严重度 | Issue | 描述 | 是否已有 Fix PR |
|--------|-------|------|----------------|
| 🔴 Critical | [#6534](https://github.com/agentscope-ai/QwenPaw/issues/6534) | Windows NSIS 安装包误判自身为"仍在运行"导致安装死循环 | ❌ 无 |
| 🔴 Critical | [#6520](https://github.com/agentscope-ai/QwenPaw/issues/6520) | agent.json 系统性损坏（BOM、缺失引号、中文双重编码）致全系统失效 | ❌ 无 |
| 🔴 Critical | [#6461](https://github.com/agentscope-ai/QwenPaw/issues/6461) | 智能体未隔离，跨会话隐私泄露 | ❌ 无 |
| 🟠 High | [#6524](https://github.com/agentscope-ai/QwenPaw/issues/6524) | MCP 后端重启后无法自动重连 | ❌ 无 |
| 🟠 High | [#6505](https://github.com/agentscope-ai/QwenPaw/issues/6505) | Mission Mode 无服务端迭代上限，直到余额耗尽才停止 | ❌ 无 |
| 🟠 High | [#6506](https://github.com/agentscope-ai/QwenPaw/issues/6506) | 父会话的 approval_level=OFF 未被子会话继承 | ❌ 无 |
| 🟠 High | [#6474](https://github.com/agentscope-ai/QwenPaw/issues/6474) `view_video` 静默丢弃 DataBlock，模型实际未收到视频 *（已关闭）* | 视频能力形同虚设 | ❌ PR 未明 |
| 🟡 Medium | [#6537](https://github.com/agentscope-ai/QwenPaw/issues/6537) | Skill 标签在重启后丢失（#3270 回归） | ❌ 无 |
| 🟡 Medium | [#6510](https://github.com/agentscope-ai/QwenPaw/issues/6510) | 飞书频道中文路径被 URL 编码致文件 404 | ❌ 无 |
| 🟡 Medium | [#6529](https://github.com/agentscope-ai/QwenPaw/issues/6529) | ACP `new_session` 响应缺 `models` 字段，外部客户端无法发现模型 | ❌ 无 |
| 🟢 Low | [#6533](https://github.com/agentscope-ai/QwenPaw/issues/6533) | `/mission` TypeError | ✅ [#6535](https://github.com/agentscope-ai/QwenPaw/pull/6535) |
| 🟢 Low | [#6512](https://github.com/agentscope-ai/QwenPaw/issues/6512) | `execute_shell_command` 大输出截断（重复 Issue #6513/#6514 已关闭） | ❌ 无 |

**健壮性观察：** 4 条 Critical 级别缺陷全部**仍处于无修复 PR 状态**，且 #6520（数据损坏）与 #6534（安装阻塞）会直接阻止新用户的入门路径，建议立即 triage。

---

## 6. 功能请求与路线图信号

| 功能请求 | Issue | 是否已有相关 PR |
|----------|-------|-----------------|
| 智能体完全隔离（隐私） | [#6461](https://github.com/agentscope-ai/QwenPaw/issues/6461) / [#6509](https://github.com/agentscope-ai/QwenPaw/issues/6509) | ❌ 尚无，可能进入 2.1.0 主线 |
| Sub Agent & 会话隔离 | [#6509](https://github.com/agentscope-ai/QwenPaw/issues/6509) | ❌ 尚无 |
| RobotFramework 语法高亮（Web IDE） | [#6403](https://github.com/agentscope-ai/QwenPaw/issues/6403) | ❌ 已关闭但未确认合并 PR |
| `execute_shell_command` 大输出流式化/落盘 | [#6512](https://github.com/agentscope-ai/QwenPaw/issues/6512) | ❌ 尚无（兄弟 #6513/#6514 已关闭） |

**已有路线信号：**
- **模型发现基础设施**：PR [#6302](https://github.com/agentscope-ai/QwenPaw/pull/6302) 引入 provider 模型安全发现机制——结合 #6529（ACP 缺模型列表）可推断 2.1 版本将"模型可发现性"列为协议层一等公民。
- **Computer-Use 桌面自动化**：PR [#6424](https://github.com/agentscope-ai/QwenPaw/pull/6424)（仍在 OPEN）落地 Windows/macOS 原生 GUI 自动化（无障碍优先 + Tauri 控制），是一项重要的能力扩展，预计合并后将成为主打功能。
- **Scroll Context 增强**：PR [#6237](https://github.com/agentscope-ai/QwenPaw/pull/6237) 与 [#6267](https://github.com/agentscope-ai/QwenPaw/pull/6267) 同向推进 recall 完整性与 overflow 自动重试，长上下文体验将进一步成熟。
- **后台工具调用重构**：PR [#6151](https://github.com/agentscope-ai/QwenPaw/pull/6151) 用 `offload_deadline + kill_deadline` 双截止时间架构替换单 `deadline`，修复三种边界行为。

---

## 7. 用户反馈摘要

**真实痛点场景：**

1. **跨机器人隐私泄露（#6461）**
   - 场景：用户在服务器部署 QwenPaw，将两个智能体分别绑定到一个**私聊 QQ 机器人**和一个**群聊 QQ 机器人**。
   - 痛点：群成员在群里 @ 机器人即可读取私聊机器人的记忆数据，并能通过对话修改私聊智能体的设置。
   - 情绪：**强烈不满**，评论区指出"这非常不合理"。

2. **MCP 后端重启 = 全工具失效（#6524）**
   - 场景：开发者使用 `streamable_http` 连接远程 MCP Server。
   - 痛点：Server 重启后，旧 `mcp-session-id` 被复用，工具列表查询失败，必须手动执行 `list mcp` 重建连接。
   - 情绪：开发者表达为"打破长会话代理的价值"。

3. **Mission Mode 失控（#6505）**
   - 场景：用户运行任务型 Mission，无人工干预。
   - 痛点：Mission 会无限制生成子会话，直到 LLM 账户余额耗尽才停止，**没有服务端迭代上限**。
   - 情绪：成本焦虑 + 安全隐患。

4. **大输出截断（#6512 系列）**
   - 场景：运行股票综合分析脚本生成 15 只个股的技术分析报告（500+ 行 / 15k+ 字符）。
   - 痛点：`execute_shell_command` 返回截断、偶发 `Internal error`。
   - 情绪：专业用户对工具可靠性的信任下降。

5. **Windows 安装阻塞（#6534）**
   - 场景：新用户下载 2.0.1 安装包首次安装。
   - 痛点：报错"QwenPaw Desktop is still running"，点击 Retry 无限循环。
   - 情绪：严重影响第一印象和入门转化。

**满意度信号：**
- 官网侧的 Blog 模块与 GA 修复（PR #5697/#6330/#5940 等批量合并）显示运营侧在快速迭代文档可发现性，间接改善开发者 onboarding。
- #6501（开发安装缺少 test extra）已被关闭，说明对贡献者友好度的关注在兑现。

---

## 8. 待处理积压（提醒维护者关注）

| 项 | 链接 | 创建日期 | 风险 |
|----|------|----------|------|
| [PR #6151](https://github.com/agentscope-ai/QwenPaw/pull/6151) | 后台工具调用重构 | 2026-07-15 | **关键基础设施 PR，开 14 天仍 OPEN**，未见 reviewer 指派，建议优先 review |
| [PR #6237](https://github.com/agentscope-ai/QwenPaw/pull/6237) | Scroll 历史召回改进 | 2026-07-17 | 配合 #6267 形成 Scroll 体验闭环 |
| [PR #6267](https://github.com/agentscope-ai/QwenPaw/pull/6267) | Scroll 溢出自动重试 | 2026-07-20 | 同上 |
| [PR #6302](https://github.com/agentscope-ai/QwenPaw/pull/6302) | 模型发现基础设施 | 2026-07-21 | 解锁 2.1 多 provider 体验，战略价值高 |
| [PR #6331](https://github.com/agentscope-ai/QwenPaw/pull/6331) | 控制台 Node 版本声明 | 2026-07-22 | first-time-contributor，建议快速响应以鼓励新人 |
| [PR #6424](https://github.com/agentscope-ai/QwenPaw/pull/6424) | Computer-Use 桌面自动化 | 2026-07-24 | 影响力大（系统级能力），需细致安全审查 |
| [PR #6497](https://github.com/agentscope-ai/QwenPaw/pull/6497) | 移除旧插件隐式 max 版本 | 2026-07-27 | 与 #6532 同一主题，存在解决方案分散风险，建议合并

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw 项目日报

**日期：2026-07-29**
**仓库：qhkm/zeptoclaw**

---

## 1. 今日速览

ZeptoClaw 今日活跃度处于**极低水平**。过去 24 小时内仅产生 2 条 PR 更新，且全部来自 Dependabot 自动化机器人触发的 Docker 基础镜像版本升级，Issues 板块无任何新增或交互。整体而言，项目今日处于"维护型静默期"——无新版本发布、无功能迭代、无社区讨论涌入。建议维护者评估近期是否存在更主动的路线图推进计划。

---

## 2. 版本发布

**今日无新版本发布。** 距离上一次发版（数据中未体现）已无明显推进信号。

---

## 3. 项目进展

今日唯一推进的事项为依赖项更新闭环：

- **PR #613 已关闭**：Dependabot 将 Rust 基础镜像从 `1.95-slim-trixie` 升级至 `1.96-slim-trixie`。
  🔗 [qhkm/zeptoclaw#613](https://github.com/qhkm/zeptoclaw/pull/613)

该项目在功能层面无实质推进，代码库仅完成了一次例行的 Docker 基础镜像滚动升级，属于基础设施卫生维护，不构成可感知的版本跃迁。

---

## 4. 社区热点

今日**无任何评论、点赞或讨论热度**。两条 PR 均来自 Dependabot 机器人，且 `comments: undefined` 表示评论数为 0、👍 为 0。社区参与度几乎为零，反映出：

- 项目近期可能处于维护低谷期；
- 用户/贡献者活跃度不足，需关注是否存在社区运营层面的失活信号。

---

## 5. Bug 与稳定性

**今日无新 Bug 报告、无崩溃或回归反馈。** Issues 板块连续 24 小时零动态，短期内无新增稳定性风险暴露。建议维护者主动核查：

- 上一版本发版后是否有用户在使用中遇到尚未上报的问题；
- Dependabot 升级的 Rust 1.97 镜像（PR #649）合并后是否需要在 CI 中验证兼容性。

---

## 6. 功能请求与路线图信号

**今日无新增功能请求。** 由于 Issues 板块完全静默，无法从用户侧获取路线图信号。仅能观察到：

- 维护者通过 Dependabot 自动保持依赖新鲜度；
- 项目主要工程活动集中在容器化层（Docker），核心功能层暂无可见动向。

若项目方计划下一阶段迭代，建议主动在 Discussion / Roadmap 中释放信号，避免社区长期处于"无方向感"状态。

---

## 7. 用户反馈摘要

**今日无可分析的用户反馈。** Issues 评论池为空，无法提取真实痛点、使用场景或满意度信号。建议将视线拉长至最近一周/一月窗口进行用户反馈复盘，以弥补单日数据稀疏带来的盲区。

---

## 8. 待处理积压

| 编号 | 类型 | 标题 | 创建时间 | 状态 |
|------|------|------|----------|------|
| [#649](https://github.com/qhkm/zeptoclaw/pull/649) | PR (Dependabot) | chore(deps): bump rust from 1.95-slim-trixie to 1.97-slim-trixie | 2026-07-28 | OPEN，待合并 |

**风险提示：**

- PR #649 跨级跳过 1.96 直接升级至 1.97，与今日刚关闭的 #613 形成版本跳跃，需确认 CI/构建兼容性。
- 项目长期无 Issues 互动，需排查是否存在：
  - 用户已迁移至其他同类项目（如更活跃的 AI Agent 框架）；
  - 模板配置导致 Issue 提交门槛过高；
  - 维护者响应 SLA 不明确导致用户放弃反馈。

**建议维护者关注：** 在 Dependabot 依赖流转之外，补充一条人工 PR 或 Issue 以打破当前零互动状态，重建社区信心。

---

## 健康度总评

| 维度 | 评分 | 说明 |
|------|------|------|
| 代码活跃度 | ⭐⭐☆☆☆ | 仅自动化依赖更新 |
| 社区活跃度 | ⭐☆☆☆☆ | 零 Issues、零评论 |
| 发布节奏 | ⭐⭐☆☆☆ | 无新版本 |
| 维护响应 | ⭐⭐⭐☆☆ | Dependabot 闭环及时 |

**综合判定：项目处于低活跃维护期，依赖卫生良好，但功能层与社区层均出现明显静默，建议加强主动运营。**

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报

**报告日期：** 2026-07-29  
**数据周期：** 过去 24 小时  
**仓库：** [zeroclaw-labs/zeroclaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## 1. 今日速览

ZeroClaw 在过去 24 小时继续保持**高度活跃的工程节奏**：49 条 Issue 更新、50 条 PR 更新，但**无一 PR 合并、无新版本发布**，显示项目处于"大量提案/修复在评审中"的并行推进阶段。今日讨论密度集中在**安全（凭据分类、密钥来源抽象）**、**通道集成（Nextcloud Talk / WhatsApp / Telegram / Slack）** 与**运行时架构（会话归属、WASM 插件、ScopedToolRegistry 重构）** 三大主线。安全相关 Issue 与 PR 占比突出（多带 `risk:high`），且 P1 级问题仍有未修复项。整体健康度：**中等偏稳**——CI 抖动问题已关闭、贡献者参与度高，但合并速率偏低，需要维护者加速评审。

---

## 2. 版本发布

**今日无新版本发布。** 当前 `master` 仍对应二进制报告的 `zeroclaw 0.8.3`（来自 [#9357](https://github.com/zeroclaw-labs/zeroclaw/issues/9357) 的复现信息）。

---

## 3. 项目进展

过去 24 小时**没有 PR 被合并**，但有 **5 条 Issue 被关闭**，代表已落地的进展：

| 类型 | 编号 | 标题 | 意义 |
|---|---|---|---|
| 🐛 Bug | [#9357](https://github.com/zeroclaw-labs/zeroclaw/issues/9357) | `cargo test -p zeroclaw-runtime --lib` 19/20 失败 + 全局互斥锁中毒 | CI 抖动被定位并处置，提升 CI 可信度 |
| 🐛 Bug | [#9474](https://github.com/zeroclaw-labs/zeroclaw/issues/9474) | auth profile store 加载失败（`model_provider` 缺失迁移） | S1 工作流阻断已修复，影响所有 `zeroclaw auth` 子命令 |
| 🧹 任务 | [#9471](https://github.com/zeroclaw-labs/zeroclaw/issues/9471) | 退役 `zeroclaw_root_crate` cron 测试模块 | 代码卫生，删除 591 行死代码 |
| 🐛 Bug | [#9380](https://github.com/zeroclaw-labs/zeroclaw/issues/9380) | `wit/v0` 漂移只在注册时失败 | 插件宿主提前检测世界漂移，减少运行时崩溃 |
| ✨ Feature | [#9178](https://github.com/zeroclaw-labs/zeroclaw/issues/9178) | ACP embedded resource blob + `deliver_file` | 增强 ACP 通道文件交付能力（含稳定 `uri` 用于引用） |

**整体推进评估：** 项目向前迈进了 5 个可量化节点，主要集中在 **认证一致性、CI 稳定性、ACP 协议完整性** 三方面；但 PR 合并速率为 0 反映出评审瓶颈。

---

## 4. 社区热点

### 🔥 评论数最高的 Issues

| 排名 | 编号 | 标题 | 评论数 | 链接 |
|---|---|---|---|---|
| 1 | [#9127](https://github.com/zeroclaw-labs/zeroclaw/issues/9127) | RFC: 抽象 `KeySource` trait — 按来源/部署形态分类主密钥材料 | 8 | [link](https://github.com/zeroclaw-labs/zeroclaw/issues/9127) |
| 2 | [#6157](https://github.com/zeroclaw-labs/zeroclaw/issues/6157) | [Bug] Nextcloud Talk 使用错误的 bot 消息 API | 6 | [link](https://github.com/zeroclaw-labs/zeroclaw/issues/6157) |
| 2 | [#9357](https://github.com/zeroclaw-labs/zeroclaw/issues/9357) | `cargo test` 19/20 失败（已关闭） | 6 | [link](https://github.com/zeroclaw-labs/zeroclaw/issues/9357) |
| 4 | [#8654](https://github.com/zeroclaw-labs/zeroclaw/issues/8654) | skill-review fork panic → daemon SIGSEGV | 5 | [link](https://github.com/zeroclaw-labs/zeroclaw/issues/8654) |
| 5 | [#6724](https://github.com/zeroclaw-labs/zeroclaw/issues/6724) | 空凭据的 Signal/Voice Call 通道让 supervisor crashloop | 4 | [link](https://github.com/zeroclaw-labs/zeroclaw/issues/6724) |
| 5 | [#8850](https://github.com/zeroclaw-labs/zeroclaw/issues/8854) | 把可选通道/工具从编译期特性迁到运行时 WASM 插件 | 4 | [link](https://github.com/zeroclaw-labs/zeroclaw/issues/8850) |

### 诉求分析

- **安全架构升级** 是当下最强诉求：`#9127` 的 `KeySource` trait RFC 显示社区希望把 93 个 `#[secret]` 字段、5 类凭据元数据进一步抽象为**可插拔、可按部署形态（本地/HSM/远程 KMS）分类**的主密钥来源，是凭据治理下一阶段的关键设计。
- **通道可靠性**：Nextcloud Talk、Signal/Voice Call、Telegram（[#9486](https://github.com/zeroclaw-labs/zeroclaw/issues/9486)）均出现"启用但体验崩坏"的形态，说明通道引导（onboarding）路径需要更稳健的失败模式。
- **运行时架构**：`#8850`（WASM 插件化）+ `#9487`（runtime-owned 会话）+ `#9488`（统一附件架构）形成**三位一体的架构演进提案**，由 `JordanTheJet`、`NiuBlibing` 牵头，反映社区对"零重建扩展"和"会话归属清晰"的强烈共识。

---

## 5. Bug 与稳定性

按严重程度排序（⚠️ = 无对应修复 PR 可见）：

### S1 / P1 — 工作流阻断或崩溃

| 严重度 | 编号 | 标题 | 修复状态 |
|---|---|---|---|
| 🔴 S1 | [#9474](https://github.com/zeroclaw-labs/zeroclaw/issues/9474) | auth profile store 加载失败 | ✅ 已关闭（PR 修复） |
| 🔴 S1 | [#8654](https://github.com/zeroclaw-labs/zeroclaw/issues/8654) | skill-review fork panic → SIGSEGV | ⚠️ `in-progress`，无明确 PR |
| 🟠 S2 (P1) | [#9284](https://github.com/zeroclaw-labs/zeroclaw/issues/9284) | `flush_config` 覆盖并发写入 | `in-progress`，相关修复 [#9281](https://github.com/zeroclaw-labs/zeroclaw/pull/9281) 在评审中 |
| 🟠 S2 (P1) | [#9383](https://github.com/zeroclaw-labs/zeroclaw/issues/9383) | npm audit 失败（6 项 high/critical） | ⚠️ 待修复，无可见 PR |
| 🟠 S2 (P1) | [#9492](https://github.com/zeroclaw-labs/zeroclaw/issues/9492) | `auth refresh` 与外部 Codex 客户端轮换冲突 | ⚠️ 待修复 |
| 🟠 S2 (P1) | [#9418 PR](https://github.com/zeroclaw-labs/zeroclaw/pull/9418) | MCP stdio 调用多路复用串扰 | PR 待合并 |

### S2 / P2 — 降级行为

| 编号 | 标题 | 修复 PR |
|---|---|---|
| [#9332](https://github.com/zeroclaw-labs/zeroclaw/issues/9332) | 多模态上下文计量严重低估图像请求 | ⚠️ 无 |
| [#6157](https://github.com/zeroclaw-labs/zeroclaw/issues/6157) | Nextcloud Talk bot API 错误 | ⚠️ 无 |
| [#9397](https://github.com/zeroclaw-labs/zeroclaw/issues/9397) | WhatsApp `allowed_groups` 空列表应拒绝全部 | RFC 待评审 |
| [#9462](https://github.com/zeroclaw-labs/zeroclaw/issues/9462) | `zeroclaw-plugins` 单测在 CI 中被门控跳过 | ⚠️ 无 |
| [#8758](https://github.com/zeroclaw-labs/zeroclaw/issues/8758) | 上下文耗尽后 agent 返回 idle 无终止状态 | `in-progress` |
| [#8760](https://github.com/zeroclaw-labs/zeroclaw/issues/8760) | daemon 自身的 agent 输出污染 daemon stdout | ⚠️ 无 |
| [#9486](https://github.com/zeroclaw-labs/zeroclaw/issues/9486) | 高熵检测误屏蔽 Solana 钱包地址 | ⚠️ 无 |
| [#9465](https://github.com/zeroclaw-labs/zeroclaw/issues/9465) | 通道预检拒绝后只发 reaction 不发文本 | ⚠️ 无 |

**关键观察：** `IftekharUddin` 单人今日提交/更新了大量安全与稳定性 PR（[#9410](https://github.com/zeroclaw-labs/zeroclaw/pull/9410)、[#9418](https://github.com/zeroclaw-labs/zeroclaw/pull/9418)、[#9401](https://github.com/zeroclaw-labs/zeroclaw/pull/9401)、[#9299](https://github.com/zeroclaw-labs/zeroclaw/pull/9299) 等），但目前都标记 `needs-author-action`，需维护者加速 round-trip。

---

## 6. 功能请求与路线图信号

| 提案 | 编号 | 落地路径 |
|---|---|---|
| **可选通道/工具的运行时 WASM 插件化** | [#8850](https://github.com/zeroclaw-labs/zeroclaw/issues/8850) | 已有架构共识，依赖 `zeroclaw-plugins` 工作（[#9380](https://github.com/zeroclaw-labs/zeroclaw/issues/9380) 已关闭修复漂移检测），**进入下一版本的概率高** |
| **Runtime-owned 会话与传输适配器** | [#9487](https://github.com/zeroclaw-labs/zeroclaw/issues/9487) | 新 RFC（昨日创建），配套 [#9488](https://github.com/zeroclaw-labs/zeroclaw/issues/9488) 统一附件架构 |
| **MCP per-server 自定义 CA 信任** | [PR #9405](https://github.com/zeroclaw-labs/zeroclaw/pull/9405) | PR 待合并，企业部署强需求 |
| **SOP 运行作业的操作员取消** | [PR #9476](https://github.com/zeroclaw-labs/zeroclaw/pull/9476) | PR 待合并，Web 仪表盘缺口补齐 |
| **MCP `type:image` 内容块映射到视觉管线** | [#9521](https://github.com/zeroclaw-labs/zeroclaw/issues/9521) | 新提案（昨日创建），与多模态上下文计量（[#9332](https://github.com/zeroclaw-labs/zeroclaw/issues/9332)）协同 |
| **ZeroCode 修饰键语义独立于键字符** | [#9171](https://github.com/zeroclaw-labs/zeroclaw/issues/9171) | 跨平台 UX 一致性诉求 |
| **Slack 生命周期进度展示** | [PR #8985](https://github.com/zeroclaw-labs/zeroclaw/pull/8985) | 已存在超过 2 周的长生命周期 PR，亟待合并 |
| **Anthropic stored-profile OAuth 别名契约** | [#9464](https://github.com/zeroclaw-labs/zeroclaw/issues/9464) | 配套 PR [#9420](https://github.com/zeroclaw-labs/zeroclaw/pull/9420) 已实现，需维护者确认 |

**路线图预判：** WASM 插件化 + Runtime-owned 会话 + 统一附件 三件套构成 0.9 系列的**架构主线**；MCP 安全（CA 信任、stdio 多路复用）与 SOP 运维能力构成**短期高频合并候选**。

---

## 7. 用户反馈摘要

从 Issue 评论与摘要中提炼的真实痛点：

- **😤 凭据迁移阵痛** ([#9474](https://github.com/zeroclaw-labs/zeroclaw/issues/9474))：旧版本写入的 `"provider"` 字段在新版变成必填 `"model_provider"` 而无迁移，用户所有 `zeroclaw auth` 子命令直接失败——典型的升级破坏。
- **😤 Solana 钱包地址被高熵检测误杀** ([#9486](https://github.com/zeroclaw-labs/zeroclaw/issues/9486))：用户在 Telegram 中向 agent 询问自己的钱包地址，输出 `[REDACTED_HIGH_ENTROPY_TOKEN]`，且 `high_entropy_tokens=false` 也不生效。**真实场景痛点**——加密场景与安全检测直接冲突。
- **😤 通道沉默** ([#9465](https://github.com/zeroclaw-labs/zeroclaw/issues/9465))：Telegram 上 agent 拒绝回复时只发一个表情，用户视角"看起来像坏了"。
- **😤 升级后 Slack 长任务无进度** ([PR #8985](https://github.com/zeroclaw-labs/zeroclaw/pull/8985))：长 turn 在 Slack 上表现为"卡死"，用户无法判断是否仍在工作。
- **😤 ACP 多通道下 `ask_user` 发错地方** ([PR #9452](https://github.com/zeroclaw-labs/zeroclaw/pull/9452))：`HashMap` 顺序不确定导致提问跑到外部通道，用户在 RPC/ACP/WS 会话中永远等不到问题。
- **😊 关闭的 CI 抖动修复** ([#9357](https://github.com/zeroclaw-labs/zeroclaw/issues/9357))：AngryPacifist 详尽的复现报告（19/20 + 全局互斥锁中毒分析）得到快速响应，体现项目对测试稳定性的承诺。
- **😊 WASM 世界漂移提前检测** ([#9380](https://github.com/zeroclaw-labs/zeroclaw/issues/9380))：插件生态向前一步，已关闭。

---

## 8. 待处理积压

需要维护者重点关注（按停留时间与严重度）：

| 编号 | 标题 | 停留 | 风险 |
|---|---|---|---|
| [#8654](https://github.com/zeroclaw-labs/zeroclaw/issues/8654) | skill-review fork SIGSEGV（panic=abort 会带走整个 agent 进程） | 2026-07-03 起，**26 天** | 🔴 高 |
| [#6724](https://github.com/zeroclaw-labs/zeroclaw/issues/672

</details>

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*