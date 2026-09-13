# OpenClaw 生态日报 2026-09-13

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-09-13 02:36 UTC

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

**日期：2026-09-13** | 数据来源：github.com/openclaw/openclaw

---

## 1. 今日速览

OpenClaw 仓库今日处于**高强度维护与升级治理期**，过去 24 小时共处理 500 条 Issue（269 新开/活跃、231 关闭）与 500 条 PR（259 待合并、241 已合并/关闭），但**无新版本发布**。当日讨论焦点高度集中于三个方向：(1) **2026.9.3 → 2026.9.4 升级链路**——围绕 Doctor 迁移、managed handoff lease、npm 更新失败产生了多条 P0/P1 跟踪单；(2) **Subagent 完成交付链路**——围绕会话/session-yield/owner check 的多处竞态与沉默丢消息问题密集涌现；(3) **MCP 与通道插件的可观测性**——子进程泄漏、stdio 初始化超时、provider-owned 读取门控与 Telegram/WhatsApp/Discord 边缘行为成为热点。整体活跃度极高、维护者响应及时，但 2026.9.x 升级链路的可靠性仍有显著风险敞口。

---

## 2. 版本发布

**今日无新版本发布。** 根据 #145252（[Tracking] 2026.9.3 / 2026.9.4 update, upgrade and recovery reliability），当前主线工作集中在 2026.9.4 的可靠性治理上，多个 blocker 级别的升级失败（#145510、#145782、#145192、#144739、#146612）尚未全部闭环，预计下一稳定版本将先完成这些修复后再发布。

---

## 3. 项目进展

今日多个关键修复已合并/关闭，主要推进如下：

- **#146658 fix: preserve compiler cache reuse after native Mac builds** ([PR](https://github.com/openclaw/openclaw/pull/146658)) — 已关闭，修复原生 Mac 构建后 Swift scratch metadata 导致 TS 声明不必要重编的问题。
- **#146656 fix(plugins): preserve install errors when rollback fails** ([PR](https://github.com/openclaw/openclaw/pull/146656)) — 已关闭，插件安装/回滚失败时保留根因，运维可读性提升。
- **#145266 [Bug]: Git/dev Doctor refreshes Codex from npm and shadows rebuilt bundled plugin** ([Issue](https://github.com/openclaw/openclaw/issues/145266)) — 已关闭，Doctor 误从 npm 覆盖已重建 bundled 插件的修复落地。
- **#146096 Agent whole-file writes accept stale read-derived content and discard intervening workspace updates** ([Issue](https://github.com/openclaw/openclaw/issues/146096)) — 已关闭，修复 agent 整文件写入覆盖并发编辑的数据丢失路径。
- **#144793 claude-cli runs on a token auth profile fail with "Not logged in"** ([Issue](https://github.com/openclaw/openclaw/issues/144793)) — 已关闭，OAuth token profile 单实例串行化修复。
- **#142476 2026.9.3 cron session reaper opens every agent database with synchronous PRAGMA integrity_check** ([Issue](https://github.com/openclaw/openclaw/issues/142476)) — 已关闭，14-76s 阻塞事件循环的根因修复。

此外，多个已开启但处于 maintainer-look 的 PR 进入加速评审阶段（详见第 8 节），预计将在 2026.9.4 之后的下一个 patch 发布。

---

## 4. 社区热点

按评论数排名，最受关注的 5 个讨论：

1. **#97616 — OpenClaw leaks unreaped hook/tool child processes**（30 评论，👍 1）
   [Issue #97616](https://github.com/openclaw/openclaw/issues/97616)
   长期未关闭的 P1 回归，hook/tool 子进程未被回收，僵尸进程在 `openclaw` 主进程下持续累积，造成运行时性能退化；评论区的核心诉求是希望引入"统一的子进程 reap 调度器 + 可观测性接口"，而不是临时打补丁。

2. **#44925 — Subagent completion silently lost — no retry, no notification, no auto-restart on timeout**（27 评论，👍 2）
   [Issue #44925](https://github.com/openclaw/openclaw/issues/44925)
   Telegram forum bot 场景下子代理完成结果在 E31/E42/E45 等多个失败模式下静默丢失；用户强烈希望补齐"完成结果必须可观察"的契约，并要求增加 dashboard 上的失败事件可视化。

3. **#142585 — 2026.9.3 Doctor refuses valid legacy workspace setup and attestation import**（17 评论，👍 0）
   [Issue #142585](https://github.com/openclaw/openclaw/issues/142585)
   2026.7.x → 2026.9.3 升级路径下 Doctor 拒绝合法的 legacy workspace；社区要求维护者给出**可审计的回滚/旁路路径**，而非仅提示 refusal。

4. **#78308 — Channel-mediated approval for MCP tool calls (consent envelope)**（16 评论，👍 1）
   [Issue #78308](https://github.com/openclaw/openclaw/issues/78308)
   功能请求热度持续：希望 MCP tool 调用复用现有的 `/approve <id>` 通道审批管道，回应跨副作用（发邮件、写 vault 等）操作的授权 UX 痛点。

5. **#144911 — MCP server init timeout crashes the Gateway**（13 评论，👍 0）
   [Issue #144911](https://github.com/openclaw/openclaw/issues/144911)
   30s `initialize` 超时触发 child cleanup 路径未处理 promise rejection，导致整个 Gateway 进程被拖垮——典型的"未捕获异常放大成全局故障"模式。

> 整体诉求指向三个共性方向：**可观察性**（silently lost / silently finalizes）、**契约明确化**（subagent 完成必须可被路由或可见）、**升级可靠性**（Doctor 决策的"可解释+可旁路"）。

---

## 5. Bug 与稳定性

按严重程度排序，今日活跃的 P0/P1 关键 Bug：

### P0（升级/会话级阻塞）

- **#145252 [Tracking] 2026.9.3 / 2026.9.4 update, upgrade and recovery reliability** ([Issue](https://github.com/openclaw/openclaw/issues/145252)) — 跟踪单，聚合多个升级失败案例。
- **#145510 Update failure: runtime-verification-failed (2026.9.3)** ([Issue](https://github.com/openclaw/openclaw/issues/145510)) — win32/x64 上 9.3→9.4 在 runtime-verification 阶段失败；**尚无关联 fix PR**。
- **#145782 Update failure: repairing (2026.9.3)** ([Issue](https://github.com/openclaw/openclaw/issues/145782)) — darwin/arm64 repairing 阶段失败；**尚无关联 fix PR**。
- **#145929 Auth profile logout/write permanently fails with lock-may-be-busy** ([Issue](https://github.com/openclaw/openclaw/issues/145929)) — 自更新被打断后 auth 存储锁永远不可用，**无 fix PR**。
- **#145192 2026.9.2 → 2026.9.4 managed update fails at candidate-Doctor on v1 handoff lease** ([Issue](https://github.com/openclaw/openclaw/issues/145192)) — 与 #144742/#144208 路径耦合；**无 fix PR**。
- **#144739 2026.9.3 → 2026.9.4 npm update runs 2026.9.3 against schema-17 candidate state** ([Issue](https://github.com/openclaw/openclaw/issues/144739)) — 候选态被旧版本以错误 schema 处理，**无 fix PR**。
- **#143334 Lost subagent completion delivery parks requester in settle-yield and starves queued user messages** ([Issue](https://github.com/openclaw/openclaw/issues/143334)) — Telegram group-topic 中完成投递丢失，**无 fix PR**。
- **#140620 In-place upgrade 2026.7.1-2 → 2026.9.2: session-transcript reconciliation stalls**（已关闭，[Issue](https://github.com/openclaw/openclaw/issues/140620)）— 1500 个 transcript 仅导入 27 个后停滞；已关闭但 #145252 仍在跟踪同源问题。

### P1（功能退化/丢消息/崩溃）

- **#144911 MCP server init timeout crashes the Gateway**（13 评论，[Issue](https://github.com/openclaw/openclaw/issues/144911)）— 未处理 promise rejection 拖垮 Gateway；**无 fix PR**。
- **#97616 OpenClaw leaks unreaped hook/tool child processes**（30 评论，[Issue](https://github.com/openclaw/openclaw/issues/97616)）— 长期未修复的回归。
- **#142585 Doctor refuses valid legacy workspace**（17 评论，[Issue](https://github.com/openclaw/openclaw/issues/142585)）— 升级迁移阻断。
- **#136183 Command executor hangs when spawning ssh — SIGTERM while waiting for banner** ([Issue](https://github.com/openclaw/openclaw/issues/136183)) — 2026.8.1 起的回归；**无 fix PR**。
- **#139847 message sent while a reply run is active is dropped — "Reply operation has no active tool authority snapshot"** ([Issue](https://github.com/openclaw/openclaw/issues/139847)) — 2026.9.2 回归，**无 fix PR**。
- **#137332 mixed terminal requester-settle batches retry forever after ownership check** ([Issue](https://github.com/openclaw/openclaw/issues/137332)) — **无 fix PR**。
- **#141474 Collector child calling sessions_yield strands agents_wait forever; outputSchema silently inert on claude-cli** ([Issue](https://github.com/openclaw/openclaw/issues/141474)) — D2 是无界 hang；**无 fix PR**。
- **#132765 agents_wait ignores timeoutSeconds — dies after ~60s as a tool error instead of returning pending** ([Issue](https://github.com/openclaw/openclaw/issues/132765)) — **无 fix PR**。
- **#144502 WhatsApp mobile can't play TTS voice notes (48 kHz + Lavf vendor tag)** ([Issue](https://github.com/openclaw/openclaw/issues/144502)) — Linked PR 已开启但未合并；**部分修复在 #144352 关联路径上**。
- **#106704 sessions_yield on a subagent's first turn silently finalizes the run as ok with an empty result** ([Issue](https://github.com/openclaw/openclaw/issues/106704)) — 工具描述与行为不一致，**无 fix PR**。
- **#115367 Provider-owned read gate requires `origin: bundled`, but all privileged chat surfaces ship as external plugins** ([Issue](https://github.com/openclaw/openclaw/issues/115367)) — 安全策略与生态现实错位；**无 fix PR**。
- **#135858 opencode-go local catalog snapshot doesn't project provider.npm→api override** ([Issue](https://github.com/openclaw/openclaw/issues/135858)) — muse-spark-1.2-contributor 解析失效；**无 fix PR**。
- **#92285 Parent subagent task and TaskFlow remain stale_running after child becomes lost** ([Issue](https://github.com/openclaw/openclaw/issues/92285)) — 任务注册表与 TaskFlow 状态不一致，**无 fix PR**。
- **#140455 google-meet 2026.9.2: agent voice broken on current Meet — circular-JSON in-call crash** ([Issue](https://github.com/openclaw/openclaw/issues/140455)) — **无 fix PR**。

**整体观察**：今日 500 条 Issue 中相当一部分属于升级回归与会话/Subagent 投递链路的连锁 Bug；除 #142476/#146096/#144793/#145266 已修复外，**多数 P0/P1 仍处于等待 maintainer 评审或新 fix PR 阶段**。

---

## 6. 功能请求与路线图信号

今日活跃的功能请求与已开启的修复性 PR 共同勾勒出下一版本的可能方向：

### 通道审批与安全 UX

- **#78308 Channel-mediated approval for MCP tool calls (consent envelope)** ([Issue](https://github.com/openclaw/openclaw/issues/78308)) — 16 评论，功能热度高，复用现有 `/approve <id>` 通道；**关联 PR 未开启**。
- **#83440 feat(cli): resolve pending exec approvals** ([PR](https://github.com/openclaw/openclaw/pull/83440)) — CLI 端新增 `approvals pending/resolve` 子命令，与 #78308 方向互补。
- **#114158 fs-safe hardcoded 0o600 file mode ignores umask — breaks shared workspaces** ([Issue](https://github.com/openclaw/openclaw/issues/114158)) — 共享工作区权限问题，**无 fix PR**。
- **#117243 Enabled, allow-listed plugin excluded from gateway demand-driven startup scope is invisible on every diagnostic surface** ([Issue](https://github.com/openclaw/openclaw/issues/117243)) — 插件加载可观测性需求，**无 fix PR**。

### 会话/Subagent 编排

- **#121309 fix(subagents): honor archive retention for completed delete-cleanup runs** ([PR](https://github.com/openclaw/openclaw/pull/121309)) — XL 规模，子代理 `cleanup: "delete"` 应受 `archiveAfterMinutes` 约束。
- **#146255 feat(safety): add data-loss protection for agent database schema migrations** ([PR](https://github.com/openclaw/openclaw/pull/146255)) — **横跨 100+ 标签**的大规模安全 PR，覆盖 `gateway install --force` 重置 SQLite 的风险；标记为 P1，是 2026.9.x 升级链路最关键的安全补强。
- **#146291 fix(config): preserve root and recovery backups after failed saves** ([PR](https://github.com/openclaw/openclaw/pull/146291)) — 修复 #145983 引入

---

## 横向生态对比

# 个人 AI 助手与智能体开源生态横向分析报告
**数据周期：2026-09-13（过去 24 小时）**

---

## 1. 生态全景

当前个人 AI 助手 / 自主智能体开源生态呈现**"高强度并发迭代、但普遍处于可靠性巩固期"**的鲜明特征：12 个观察项目中**仅 1 个完全无活动**（TinyClaw、ZeptoClaw 双双沉寂），其余 10 个项目 24 小时内累计处理 **≈ 660 条 Issue 与 700+ 条 PR**，却**无任何项目发布新版本**。技术重心明显从"功能爆发"转向"契约明确化、可观测性、升级可靠性"——MCP 通道稳定性、Subagent 投递链路、配置/Profile 管理、跨平台守护进程、Provider 故障切换成为社区共识痛点。这反映出该生态已度过 MVP 阶段，正进入"治理大于扩张"的成熟期。

---

## 2. 各项目活跃度对比

| 项目 | 今日 Issue | 今日 PR | 关闭 PR | Release | 健康度 | 当前阶段 |
|---|---|---|---|---|---|---|
| **OpenClaw** | 500 (269/231) | 500 (259/241) | 241 | ❌ | ⭐⭐⭐☆☆ | 高强度维护·升级治理 |
| **ZeroClaw** | 25 (19/6) | 50 (38/12) | 12 | ❌ | ⭐⭐⭐⭐☆ | 主动修复·发布硬化 |
| **Hermes Agent** | 50 (47/3) | 50 (48/2) | 2 | ❌ | ⭐⭐⭐☆☆ | 修大于进·巩固期 |
| **NanoClaw** | 5 | 25 (14/11) | 11 | ❌ | ⭐⭐⭐⭐☆ | Setup 打磨 + 新功能开放 |
| **CoPaw** | 16 (14/2) | 6 (6/0) | 0 | ❌ | ⭐⭐⭐☆☆ | 2.x 回归修复 |
| **NanoBot** | 4 (3/1) | 20 (11/9) | 9 | ❌ | ⭐⭐⭐⭐☆ | WebUI 优化 + 集成扩展 |
| **LobsterAI** | 6 (6/0) | 10 (8/2) | 2 | ❌ | ⭐⭐☆☆☆ | 全量 stale·响应放缓 |
| **PicoClaw** | 4 | 3 (3/0) | 0 | ❌ | ⭐⭐☆☆☆ | 官网证书过期·停滞 |
| **Moltis** | 0 | 3 (2/1) | 1 | ❌ | ⭐⭐⭐☆☆ | 低频维护 |
| **IronClaw** | 0 | 2 (1/1) | 1 | ❌ | ⭐⭐⭐☆☆ | 增量硬化 |
| **NullClaw** | 0 | 1 (0/1) | 1 | ❌ | ⭐⭐⭐☆☆ | 稳健休整 |
| **TinyClaw** | 0 | 0 | 0 | ❌ | ⭐☆☆☆☆ | 完全沉寂 |
| **ZeptoClaw** | 0 | 0 | 0 | ❌ | ⭐☆☆☆☆ | 完全沉寂 |

**关键观察**：
- OpenClaw 以 1000 条/天的处理量**一骑绝尘**，但 PR 关闭率仅 48%，反映升级可靠性治理是重负；
- ZeroClaw 是唯一 PR 关闭率健康（24%）的高活跃项目，体现发布工程纪律；
- LobsterAI 与 PicoClaw 健康度垫底，前者 6 条 Issue 全部 stale，后者甚至出现 **TLS 证书过期 3 天** 的 P0 事件。

---

## 3. OpenClaw 在生态中的定位

| 维度 | OpenClaw | 生态均值（除 OpenClaw） | 定位判断 |
|---|---|---|---|
| 日处理 Issue 量 | **500** | ≈ 11 | 9–45 倍于同类 |
| 日处理 PR 量 | **500** | ≈ 14 | 35 倍于同类 |
| 社区规模信号 | 6 个 Issue 评论 ≥13，#97616 长尾 30 评论 | Hermes 峰值 4 评论 | **唯一具备"明星 issue"讨论深度的项目** |
| 技术覆盖广度 | MCP / Subagent / 通道 / Cron / Profile / Desktop 全部活跃 | 多数项目聚焦 1–2 个模块 | **事实上的生态参照实现** |
| 修复成熟度 | P1 长尾（#97616 进程泄漏 / #44925 子代理丢失）长期未闭环 | 项目周期更短，难形成长尾 | **已暴露的治理问题反而成为行业警示** |

**优势**：社区规模、议题覆盖广度、技术决策的可见性（PR/Issue 高度交叉引用）都遥遥领先，是该生态的 **de facto 标准参照**。

**劣势**：**P0/P1 积压显著**（#97616 30 评论无 fix、#145252 升级追踪单尚未闭环），Subagent 完成投递链路存在系统级静默失败模式（#44925 / #143334 / #141474），升级治理本身成为最大的可靠性风险源。

**技术路线差异**：OpenClaw 走"**重 agent 编排 + 多通道统一 Gateway**"路线，与 ZeroClaw（重发布工程与契约化）、CoPaw（重 Desktop + 持久化）、NanoBot（重 WebUI + 提供商生态）形成清晰分工。

---

## 4. 共同关注的技术方向

以下方向在 **≥3 个项目**同步浮现，构成生态级共识：

| 方向 | 涉及项目 | 共性诉求 |
|---|---|---|
| **MCP 通道可靠性** | OpenClaw、NullClaw、CoPaw、ZeroClaw | stdio 响应超时无界（NullClaw#996 已修）、`initialize` 超时拖垮 Gateway（OpenClaw#144911）、Java SDK `jsonRpcError` 兼容（CoPaw#7728）、HTTP/SSE 单次握手中毒（ZeroClaw#10807） |
| **Subagent / 会话投递可观测性** | OpenClaw、LobsterAI、CoPaw | 完成结果静默丢失（OpenClaw#44925/#143334）、子代理 `cleanup: delete` 不受 retention 约束（OpenClaw#121309）、会话+模型同时丢失（CoPaw#7724/#7708） |
| **配置 / Profile 加载的可观测性** | OpenClaw、CoPaw、Hermes、ZeroClaw | YAML 静默回退（Hermes#102945）、WebUI 误判 custom provider 无效（Hermes#107918）、`WEBHOOK_PORT` 静默忽略（NanoClaw#2901）、配置写了不生效（ZeroClaw#10534） |
| **跨通道一致性** | OpenClaw、Moltis、ZeroClaw、LobsterAI | Telegram/WhatsApp/Discord 边缘行为差异、Slack→Telegram 工具策略回填（Moltis#1265）、Telegram voice 误判（ZeroClaw#10689） |
| **Provider / 模型故障切换** | NanoBot、CoPaw、OpenClaw | NanoBot#5675 修复主模型挂起不触发 fallback、CoPaw#7664 独立 ReMeLight 模型降本、OpenClaw 跨 Provider-owned read gate 错位 |
| **升级与迁移可靠性** | OpenClaw、ZeroClaw、Hermes | OpenClaw 2026.9.x 升级多 blocker、ZeroClaw v0.8.6 发布管线硬化、Hermes `hermes update` 静默吞掉 sibling profile 迁移 |
| **Web UI / Desktop 体验落差** | NanoBot、Hermes、PicoClaw、CoPaw | NanoBot 无头登录提示缺失（#5726 已闭环）、Hermes Desktop session 双渲染（#76443）、PicoClaw 长会话输入卡顿（#3281）、CoPaw 内存以 ~1MB/s 增长（#7722） |
| **安全基线升温** | Hermes、ZeroClaw、OpenClaw | Hermes `/yolo` 非管理员旁路（#109495）、state.db 文件权限（#109509）、ZeroClaw 插件出口权限 ADR-014、OpenClaw provider-owned read gate 错位（#115367） |

---

## 5. 差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 技术架构特征 |
|---|---|---|---|
| **OpenClaw** | 全栈 Agent 编排 + 多通道 | 中大型部署 / 集成商 | 重 Gateway + 多插件生态 |
| **ZeroClaw** | 发布工程 + 契约化状态 | 重视 CI/CD 的工程团队 | Rust、强测试、Tauri Desktop |
| **Hermes Agent** | Kanban + Cron + 跨时区 | 自托管 + 桌面用户 | Rust + Web Dashboard + 多 provider |
| **NanoClaw** | Setup 易用性 + Coding Container | 新用户 + 远程开发 | macOS/Linux 优先，setup 向导 |
| **NanoBot** | WebUI + 提供商矩阵 | 终端/低性能环境用户 | Python，大历史回放增量缓存 |
| **CoPaw** | Desktop + 持久化 | 多设备管家式部署 | Electron，统一 Driver 机制 |
| **Moltis** | 多通道 + LLM 路由 | Telegram/Slack 重度用户 | Rust，OpenAI 兼容路由表 |
| **LobsterAI** | 桌面 + 定时任务 + 网关 | 中文桌面用户 | Electron + openclaw 子模块 |
| **PicoClaw** | 轻量 IRC/Web UI | IRC 协议用户 | Go 1.25 |
| **IronClaw** | 共享频道适配 | Slack 协作场景 | Node，OpenAI 兼容适配层 |
| **NullClaw** | MCP stdio / 资源回收 | 嵌入式 / runtime 集成商 | Zig，强超时与进程组语义 |

**关键差异化洞察**：
- **语言选型呈分化**：Rust 系（OpenClaw/ZeroClaw/Hermes/Moltis）强调性能与可靠性；Python/JS 系（NanoBot/LobsterAI/CoPaw）侧重生态敏捷；Zig（NullClaw）和 Go（PicoClaw）探索小众但工程化的路径。
- **"Coding Container"作为新共识**：NanoClaw 推出 Code Mode + Voice + Community Portal，CoPaw 强调 Desktop 持久化、ZeroClaw 主推 lifecycle mutations，三者殊途同归——**智能体正在从"对话工具"演化为"持续运行的开发容器"**。
- **Provider 抽象两极化**：NanoBot 走"OpenAI 兼容路由表"（低成本扩展），Hermes 走"Bearer 端点 + 多种族协议"（深度集成），反映生态对"模型无关性"的实现路径仍未统一。

---

## 6. 社区热度与成熟度分层

### 🔥 第一梯队：快速迭代 / 高强度治理
- **OpenClaw**：500/500 的吞吐量，但 60% PR 处于 maintainer-look，**典型的"重构期阵痛"**。
- **ZeroClaw**：50 PR/天 + 24% 关闭率，且发布管线主动硬化（#10814），是当前**健康度最高的迭代期项目**。

### 🟠 第二梯队：质量巩固 / Bug 集中修复
- **Hermes Agent**：50+50 但关闭率仅 4%，议题集中在配置/Profile/session 三大反复暴露面，**v0.21 重构后正在消化回归**。
- **CoPaw**：6 条 PR 全部 open、4 条 P0/P1 无 fix，**2.2.x 升级带来明显回归潮**。
- **NanoClaw**：25 PR 中 11 个已合并（44% 关闭率），setup 链路 10 个 fix PR 一次性扫除，**项目刚完成 Setup 质量跃升**。

### 🟡 第三梯队：低频维护 / 稳健休整
- **NanoBot**：20 PR + 9 已合并（45% 关闭率），WebUI 四线同步打磨，**中等活跃度下的体验优化**。
- **IronClaw / NullClaw / Moltis**：1–3 PR/天，单 PR 质量高（常附带 7,000+ 测试通过），**典型的小批量精修模式**。

### 🔴 第四梯队：响应停滞 / 风险信号
- **LobsterAI**：所有 Issue 带 stale 标签，**维护者响应节奏明显放缓**。
- **PicoClaw**：TLS 证书过期 3 天未处理 + 2 条 stale Issue 滞留 50+ 天，**社区信任已受损**。
- **TinyClaw / ZeptoClaw**：完全无活动 24 小时，**疑似停止维护**。

---

## 7. 值得关注的趋势信号

### 趋势一：从"功能爆发"转向"契约化"
**信号**：OpenClaw#78308（通道审批 consent envelope）、IronClaw#8098（state-derived lineage 钉死测试）、ZeroClaw ADR-014（plugin egress authority）。
**启示**：AI 智能体进入"行为可锁定"阶段，开发者应在 PR 中**优先为关键路径补充反向回归测试**，而非继续叠加功能。

### 趋势二：MCP 正在成为"事实上的工具协议标准"
**信号**：4 个项目（OpenClaw、NullClaw、CoPaw、ZeroClaw）当日均报 MCP 相关 Bug，NullClaw#996 / CoPaw#7728 / OpenClaw#144911 集中爆发。
**启示**：构建自有 MCP stdio/SSE 客户端时，**超时、初始化握手、错误包络兼容性**是三大必踩坑，建议直接参考 NullClaw#996 的 `timeout_ms + 进程组级终止` 模式。

### 趋势三："Coding Container"成为产品新形态
**信号**：NanoClaw Code Mode（持久化编程会话）+ Community Portal、CoPaw Desktop 持久化、ZeroClaw 强化 agent lifecycle mutations。
**启示**：传统 Chat Loop 产品形态已触顶，下一波差异化集中在 **「沙箱 + 持久化会话 + 远程门户」** 三件套，对应工程能力是 runner / containers / sandbox verbs / boundary approvals 的端到端整合。

### 趋势四：跨通道一致性是体验决定性因素
**信号**：Moltis 把 Slack 已支持的工具策略回填到 Telegram、ZeroClaw 修复 Telegram voice `[` 前缀误判、CoPaw 修复 Telegram 审批卡片 markdown 渲染。
**启示**：当一个智能体支持 ≥2 个通道时，**任何一个通道的体验短板都会被放大为整体评价短板**。建议将"通道间能力对齐检查表"纳入发布前置流程。

### 趋势五：安全基线从"事后

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报
**日期：2026-09-13**

---

## 一、今日速览

NanoBot 今日继续保持高强度的开发节奏，过去 24 小时内共有 **20 个 PR** 更新（11 个待合并、9 个已关闭/合并）和 **4 个 Issue** 更新（3 个活跃、1 个已关闭），但**无新版本发布**。从 PR 分布看，**WebUI 体验优化**（大历史回放、流式刷新、无头登录、设置目录）和**运行时稳健性**（路径穿越、模型故障切换、批量边界持久化）成为两大主线，第三方集成（DaoXE 网关、Linear 原生通道、Telegram 自托管、Office365 OAuth）也在密集推进。整体健康度良好，Bug 修复响应迅速，但仍有数个 PR 处于长期待合并状态。

---

## 二、版本发布

无新版本发布。

---

## 三、项目进展

今日有 9 个 PR 关闭/合并（按主题归类）：

### ️ WebUI 体验优化（5 个 PR，密集提交）

| PR | 标题 | 作者 | 影响 |
|---|---|---|---|
| [#5743](https://github.com/HKUDS/nanobot/pull/5743) | simplify settings catalog controls and headings | Re-bin | 设置目录重构，默认日历视图、任务并入紧凑工具栏 |
| [#5735](https://github.com/HKUDS/nanobot/pull/5735) | make headless login self-explanatory | chengyongru | 检测 text-only 浏览器（links/lynx/w3m），打印 SSH 手动接管提示 |
| [#5738](https://github.com/HKUDS/nanobot/pull/5738) | reduce long-text streaming refresh overhead | chengyongru | 推理预览限 512 UTF-16 代码单元，避免代理对分裂 |
| [#5745](https://github.com/HKUDS/nanobot/pull/5745) | make large history replay incremental and cached | chengyongru | 后端历史回放按消息/记录/字节预算限流，首屏 40 条 + 缓存 |
| [#5739](https://github.com/HKUDS/nanobot/pull/5739) | Dev (CI/CD) | starwithcoder | CI/CD 改进 |

**整体进展**：WebUI 在「大型会话重放」「长文本流式渲染」「无环境登录」「设置导航」四条线同步打磨，用户在终端/低性能环境下使用 nano bot 的体验将明显改善。

### 🔌 提供商与故障切换

- [#5746](https://github.com/HKUDS/nanobot/pull/5746) `feat(providers): add DaoXE gateway provider`（seven7763）— 新增 DaoXE 网关提供方。
- [#5675](https://github.com/HKUDS/nanobot/pull/5675) `fix(providers): allow model failover after runner deadlines`（be-student，修复 [#5674](https://github.com/HKUDS/nanobot/issues/5674)）— 主模型挂起导致整个链路被取消、健康的 fallback 未被尝试的回归问题修复。
- [#5613](https://github.com/HKUDS/nanobot/pull/5613) `fix(provider): clean up replayed items before sending them to providers`（kkkhoo）— 清理 Chat 历史中的 provider-generated item IDs 和不支持字段，避免 Responses API 失败。

### 🔧 其他

- [#5752](https://github.com/HKUDS/nanobot/pull/5752) `Codex/integrations stability upstream`（szymongalka）— Codex 集成稳定性上游同步。

---

## 四、社区热点

> 今日评论/反应最多的条目：

| 排名 | 条目 | 类型 | 评论数 | 👍 | 关键诉求 |
|---|---|---|---|---|---|
| 1 | [#5726](https://github.com/HKUDS/nanobot/issues/5726) Startup initial password? | Issue (P1) | 2 | 0 | 无头服务器用户对初始登录密码缺乏指引 |
| 2 | [#5721](https://github.com/HKUDS/nanobot/issues/5721) Durable memory across sessions? | Issue | 1 | 0 | 跨部署、跨会话的持久记忆后端集成诉求 |

**诉求分析**：
- **入门可发现性**仍是新用户最大障碍（[#5726](https://github.com/HKUDS/nanobot/issues/5726)），text-only 浏览器场景下用户甚至无法定位登录入口。幸运的是 [#5735](https://github.com/HKUDS/nanobot/pull/5735) 已被合并闭环。
- **企业级持久记忆**（[#5721](https://github.com/HKUDS/nanobot/issues/5721)）由 MemCode 创始人提出，希望以 opt-in 形式提供托管或自管的共享记忆后端，反映出 nanobot 用户群正向"多部署、跨实例"演进。

---

## 五、Bug 与稳定性

按严重程度排序：

| 严重度 | 条目 | 状态 | 是否有 fix PR |
|---|---|---|---|
| 🔴 **P1** | [#5633](https://github.com/HKUDS/nanobot/pull/5633) reject session keys with path traversal components | OPEN | ✅ 自身即为 fix（修复 [#5564](https://github.com/HKUDS/nanobot/issues/5564)），新增 `validate_session_key()` 校验会话 key 转文件路径时的越界 |
|  **P1** | [#5726](https://github.com/HKUDS/nanobot/issues/5726) Startup initial password? | **CLOSED** | ✅ 由 [#5735](https://github.com/HKUDS/nanobot/pull/5735) 关闭 |
| 🟠 **P2** | [#5748](https://github.com/HKUDS/nanobot/pull/5748) persist partial tool progress at batch boundaries | OPEN | ✅ 自身即为 fix（修复 [#5747](https://github.com/HKUDS/nanobot/issues/5747)），解决多 tool 调用期间网关崩溃导致已完成结果与未执行无法区分的 crash-consistency 窗口 |
|  **P2** | [#5751](https://github.com/HKUDS/nanobot/pull/5751) preserve pending runs when editing automation details | OPEN | ✅ 自身即为 fix，编辑自动化名称/指令时不应重算下次执行时间，避免一次性任务被永久跳过 |
| 🟠 **P2** | [#5605](https://github.com/HKUDS/nanobot/pull/5605) only mark `\Seen` on messages that are actually delivered | OPEN | ✅ 自身即为 fix，IMAP 在过滤阶段过早标记已读导致被丢弃的消息也丢失已读状态 |

**总结**：今日 5 个 Bug 相关条目中，1 个已闭环，4 个 fix PR 待合并；P1 级别路径穿越漏洞修复（[#5633](https://github.com/HKUDS/nanobot/pull/5633)）建议维护者优先审阅。

---

## 六、功能请求与路线图信号

### 新提交的功能请求
- [#5749](https://github.com/HKUDS/nanobot/issues/5749) **Expose stable tool invocation context for idempotent side effects**（xiexiahao）— 工具实现需要拿到 provider tool_call_id 以做幂等去重。对应 PR [#5750](https://github.com/HKUDS/nanobot/pull/5750) 已同日提交，方案为 `ToolInvocationContext`（基于 ContextVar）。**纳入下一版本概率：高**。
- [#5747](https://github.com/HKUDS/nanobot/issues/5747) **Recovery: persist completed tool results at execution-batch boundaries**（xiexiahao）— 配套 PR [#5748](https://github.com/HKUDS/nanobot/pull/5748) 已提交，闭环崩溃一致性窗口。**纳入下一版本概率：高**。
- [#5721](https://github.com/HKUDS/nanobot/issues/5721) **Durable memory across sessions**（memcodeoff）— 商业级持久记忆后端，需进一步讨论权限与数据隔离模型。

### 待合并的功能 PR（可能进入下一版本）

| PR | 模块 | 亮点 |
|---|---|---|
| [#5750](https://github.com/HKUDS/nanobot/pull/5750) | tools | 工具调用上下文稳定化 |
| [#5748](https://github.com/HKUDS/nanobot/pull/5748) | recovery | 崩溃恢复粒度细化 |
| [#5602](https://github.com/HKUDS/nanobot/pull/5602) | webui | 完成提示音（用户友好增强） |
| [#5388](https://github.com/HKUDS/nanobot/pull/5388) | agent | MCP 模式字节预算（控制模型可见工具数） |

### 长期演进的集成矩阵
- [#5495](https://github.com/HKUDS/nanobot/pull/5495) Linear 原生 Agent 通道（OAuth + PKCE + 签名 Webhook）
- [#4919](https://github.com/HKUDS/nanobot/pull/4919) Telegram 自托管 Bot API 端点
- [#5609](https://github.com/HKUDS/nanobot/pull/5609) Office365/Outlook OAuth（替代即将弃用的基本认证）
- [#5606](https://github.com/HKUDS/nanobot/pull/5606) 邮箱按收件人别名过滤

---

## 七、用户反馈摘要

来自今日评论的真实痛点：

1. **入门用户被"无浏览器+无密码提示"双重卡住**（[#5726](https://github.com/HKUDS/nanobot/issues/5726)，gardiol）："installed nanobot on a headless server. Now, by default it start with links that has no JS support… i have no idea which password i should be writing in the web ui to proceed"。场景：无头服务器 + text-only 浏览器（links）。✅ 已由 [#5735](https://github.com/HKUDS/nanobot/pull/5735) 闭环：检测 text-only 浏览器后切换至 SSH 手动接管提示。
2. **企业用户希望记忆可跨部署共享**（[#5721](https://github.com/HKUDS/nanobot/issues/5721)，memcodeoff）：MemCode 创始人在 Issue 中自我介绍并提议作为 opt-in 集成。反映出 nanobot 用户中已有早期集成商在寻求 B2B 合作机会。
3. **Bug 报告者特征**：今日 Issue 报告者多位为活跃贡献者（xiexiahao 同步提 issue + PR），形成"问题→修复"闭环，体现了健康的开发者贡献文化。

---

## 八、待处理积压（提醒维护者关注）

> 已开放超过 30 天的 PR，按打开时间排序：

| PR | 标题 | 创建日期 | 待审阅天数 | 备注 |
|---|---|---|---|---|
| [#4919](https://github.com/HKUDS/nanobot/pull/4919) | feat(telegram): support custom Bot API base URL | 2026-07-14 | ~60 天 | 自托管 Telegram 通道，企业网关用户刚需 |
| [#5388](https://github.com/HKUDS/nanobot/pull/5388) | feat(agent): budget model-visible MCP schemas | 2026-08-13 | ~30 天 | 控制模型上下文消耗，建议优先 review |
| [#5495](https://github.com/HKUDS/nanobot/pull/5495) | feat(channels): add native Linear agent channel | 2026-08-23 | ~20 天 | 通道层重要扩展，但被标记 conflict |

**建议**：
- [#4919](https://github.com/HKUDS/nanobot/pull/4919) 已被搁置近 2 个月，建议维护者确认是否能进入合并窗口或标记为 RFC 阶段；
- 标 `conflict` 的多个 PR（[#5495](https://github.com/HKUDS/nanobot/pull/5495)、[#5609](https://github.com/HKUDS/nanobot/pull/5609)、[#5606](https://github.com/HKUDS/nanobot/pull/5606)、[#5605](https://github.com/HKUDS/nanobot/pull/5605)、[#5633](https://github.com/HKUDS/nanobot/pull/5633)、[#5388](https://github.com/HKUDS/nanobot/pull/5388)）可能存在相互 rebase 需求，建议批量处理。

---

## 附录：今日数据指标

| 指标 | 数值 |
|---|---|
| 活跃 Issue | 3 |
| 已关闭 Issue | 1 |
| 待合并 PR | 11 |
| 已关闭/合并 PR | 9 |
| 新版本 | 0 |
| P1 Bug PR（已关闭） | 1 |
| P1 Bug PR（待合并） | 1 |
| 关闭率（PR） | 45% |

**项目健康度评估**：⭐⭐⭐⭐☆（4/5）
开发活跃度高，Bug 响应迅速，PR/Issue 闭环率健康；但无版本发布意味着累积的修复与功能尚未交付到用户手中，建议在下一次发布周期内整合今日已关闭 PR 并推进关键 P1 安全修复（[#5633](https://github.com/HKUDS/nanobot/pull/5633)）。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目日报

**日期**：2026-09-13
**数据周期**：过去 24 小时
**项目仓库**：[NousResearch/hermes-agent](https://github.com/nousresearch/hermes-agent)

---

## 1. 今日速览

Hermes Agent 今日维持高强度迭代节奏：过去 24 小时内共 **50 条 Issue 更新**（含 47 条活跃、3 条关闭）与 **50 条 PR 更新**（48 条待合并、2 条已合并/关闭），但**无新版本发布**。讨论焦点高度集中在 **配置/Profile 管理、Web Dashboard/Desktop TUI、Cron 调度、Provider 兼容性** 四大方向，安全相关（`/yolo` 越权、state.db 文件权限）也首次进入当日热点 PR 队列。整体来看，项目处于"修大于进"的密集修复期，多个跨模块 Bug 表明近期重构带来的回归风险正在暴露，但 PR 并发响应速度良好，社区贡献者活跃度健康。

---

## 2. 版本发布

**无新版本发布**。当前主线版本仍为近期已发布的 v0.21.x 系列（Issue #109111 提及 v0.21.2 / 2026.9.11，#108383 提及 v0.21.1，#109521 提及 v0.20.6）。

---

## 3. 项目进展

今日合并/关闭的 PR 共 **2 条**，结合活跃 PR 推进的方向，项目在以下方面有明显进展：

| 方向 | 代表 PR | 推进内容 |
|------|---------|---------|
| **跨时区 Cron 可靠性** | [#109532](https://github.com/NousResearch/hermes-agent/pull/109532) | cron 调度现在能跨 DST 保持挂钟小时、保留真实 elapsed 间隔；汇集两位社区贡献者 PR 修复 + 上游 qwen-code#11723 防御补丁 |
| **Kanban 状态机正确性** | [#109334](https://github.com/NousResearch/hermes-agent/pull/109334) | `initial_status="blocked"` 的任务不再被 board read / dispatcher tick 静默提升为 `ready` |
| **后台 PTY 不再挂死** | [#100775](https://github.com/NousResearch/hermes-agent/pull/100775) | port openai/codex#41436：device-status / window-size 等终端探测查询现在得到有界回复 |
| **Cron 脚本编码鲁棒性** | [#105597](https://github.com/NousResearch/hermes-agent/pull/105597) | POSIX `no_agent` 脚本输出改为 `errors='lossy'`，避免单个非 UTF-8 字节让整次 cron run 失败 |
| **插件 schema 校验** | [#107825](https://github.com/NousResearch/hermes-agent/pull/107825) | 端口 pi#9300：插件注册时直接拒绝畸形 schema，避免污染整个 provider 请求 |

整体而言，今天的项目进展集中在 **可靠性与边界情况修复**（DST、PTY 探测、Unicode 编码、Schema 校验），而非新功能推进——这是项目在大量功能铺开后的典型"巩固期"信号。

---

## 4. 社区热点

按评论数排序，今日社区讨论最活跃的话题如下：

| 排名 | Issue/PR | 标题 | 评论数 | 关注度信号 |
|----|----------|------|--------|-----------|
| 🥇 | [#107918](https://github.com/NousResearch/hermes-agent/issues/107918) | Web Dashboard TUI 误显示 "Setup Required"（valid custom provider） | 4 👍1 | 唯一获 👍 的 Issue，跨 CLI/TUI/Auth/Config/Dashboard 五标签，影响 self-hosted 用户 |
| 🥈 | [#102945](https://github.com/NousResearch/hermes-agent/issues/102945) | config.yaml 解析失败静默回退默认 | 4 | 安全/可观测性诉求：第三方安装器一旦破坏 YAML，用户所有覆盖配置悄悄丢失 |
| 🥉 | [#76443](https://github.com/NousResearch/hermes-agent/issues/76443) | Desktop mid-turn 切换窗口/会话导致进度重复渲染 | 3 | 跨 session state 恢复的 live + journal twin 问题 |
| #4 | [#104851](https://github.com/NousResearch/hermes-agent/issues/104851) | computer_use 元素 token 在 cua-driver 0.23.2+ 缺失 | 3 | 上游依赖升级带来的兼容性回归 |
| #5 | [#109480](https://github.com/NousResearch/hermes-agent/issues/109480) | WebUI 切换 Profile 后 gateway 状态错乱 | 3 | 与 #102945、#107918 形成"配置层"集中投诉群 |
| #6 | [#109375](https://github.com/NousResearch/hermes-agent/issues/109375) | 短生命周期 runtime 下 Skill 后台审查丢失 | 3 | Kanban / Group Bot Chat 场景下的状态保持 |

**背后诉求分析**：今日热点呈现明显的 **"配置层与状态层" 集中爆发**——5 条高评论 Issue 中 3 条涉及配置/Profile，2 条涉及 session/journal 状态。这反映出项目在 v0.21 重构后，配置加载路径和会话恢复路径的边界条件尚未完全收敛，是维护者下周应优先关注的"主题包"。

---

## 5. Bug 与稳定性

### 🔴 P1 — 关键路径（建议立即修复）

- **[#107918](https://github.com/NousResearch/hermes-agent/issues/107918)** Web Dashboard TUI 误判自定义 Provider 配置无效
  - 影响：所有 self-hosted + 自定义 endpoint 用户无法用 Web UI
  - Fix PR：暂无
  
### 🟠 P2 — 重要功能受损

| Issue | 描述 | 是否有 Fix PR |
|-------|------|---------------|
| [#102945](https://github.com/NousResearch/hermes-agent/issues/102945) | config.yaml YAML 解析失败静默回退默认 | ❌ 暂无 |
| [#76443](https://github.com/NousResearch/hermes-agent/issues/76443) | Desktop mid-turn 窗口/会话切换重复渲染 | ❌ 暂无 |
| [#104851](https://github.com/NousResearch/hermes-agent/issues/104851) | computer_use 元素 token 兼容性 | ❌ 暂无 |
| [#109480](https://github.com/NousResearch/hermes-agent/issues/109480) | Profile 切换后 WebUI 状态错乱 | ❌ 暂无 |
| [#105560](https://github.com/NousResearch/hermes-agent/issues/105560) | Windows computer_use capture 推断错误的 bounds_scale | ❌ 暂无 |
| [#109073](https://github.com/NousResearch/hermes-agent/issues/109073) | 主 gateway session 被 `_delegate_from` 污染，Telegram DM 永久从会话列表消失 | ❌ 暂无 |
| [#109518](https://github.com/NousResearch/hermes-agent/issues/109518) | cron `enabled_toolsets` 无法限制 `delegate_task` 子 agent 工具集 | ❌ 暂无 |
| [#109495](https://github.com/NousResearch/hermes-agent/issues/109495) | Gateway `/yolo` 旁路 admin policy（非管理员可启用危险命令审批绕过） | ✅ [#109503](https://github.com/NousResearch/hermes-agent/pull/109503) 待合并 |
| [#109521](https://github.com/NousResearch/hermes-agent/issues/109521) | Discord adapter 静默宕机数小时（无 crash、无日志、watchdog 不触发） | ❌ 暂无 |
| [#109482](https://github.com/NousResearch/hermes-agent/issues/109482) | `hermes update` 静默吞掉 sibling profile 配置迁移失败 | ❌ 暂无 |
| [#109527](https://github.com/NousResearch/hermes-agent/issues/109527) | Telegram DM topics 移动端照片无 topic 标记，落入默认 lane | ❌ 暂无 |
| [#109089](https://github.com/NousResearch/hermes-agent/issues/109089) | `a2a_call` 420s 硬超时，无法通过 `a2a_agents.<peer>.timeout` 调节 | ❌ 暂无 |

### 🟡 P3 — 一般问题

包括 #109148（Desktop composer "Queue message" 按钮 idle 时无响应）、#109069（A2A 消息体在 authoring 时被截断但仍被交付为成功）、#109375、#109205（推理-only 干净停止走过整个空响应阶梯）、#109510（Desktop 流式思考预览展开时 transcript 滚动失效）等。

### ✅ 今日已关闭

- [#87359](https://github.com/NousResearch/hermes-agent/issues/87359) Windows Desktop `hermes update` 期间误报 "boot failed"（false positive）
- [#92535](https://github.com/NousResearch/hermes-agent/issues/92535) 成功的 Git 更新在 stale-module purge 时丢失 receipt
- [#107026](https://github.com/NousResearch/hermes-agent/issues/107026) Windows Dashboard "Hermes could not safely reserve this session"

**稳定性观察**：今日 P1/P2 Bug 数量可观，**配置加载、session state、provider 兼容性** 是三大反复出现的痛点；Discord adapter 静默宕机（#109521）尤其值得关注——无日志、无 watchdog 触发意味着监控盲区。

---

## 6. 功能请求与路线图信号

| 提议 | 链接 | 状态判断 |
|------|------|---------|
| **浏览器工具组合调用 + 缓存**（合并 navigate+snapshot、task 级命令上下文） | [#11117](https://github.com/NousResearch/hermes-agent/issues/11117) | 长期优化诉求，PR [#109307](https://github.com/NousResearch/hermes-agent/pull/109307) 中引入的 **system-atlas** 显示出"组合化、可视化"方向，但浏览器工具组合尚未进入 PR 队列，**有进入 v0.22 路线图的可能** |
| **Anthropic Messages 兼容 Bearer 端点**（xKiro） | [#109333](https://github.com/NousResearch/hermes-agent/pull/109333) | PR 已 open，**进入下个版本概率高** |
| **Cron resnap 跟随全局 default 变更**（不 pin） | [#106496](https://github.com/NousResearch/hermes-agent/pull/106496) | PR 已 open，**进入下个版本概率高** |
| **HEIC/HEIF/AVIF 图片解码**（iPhone 照片） | [#106408](https://github.com/NousResearch/hermes-agent/pull/106408) | PR 已 open，**进入下个版本概率高** |
| **assistant reasoning traces 可搜索** | [#109092](https://github.com/NousResearch/hermes-agent/issues/109092) | 当前 FTS 索引不含 reasoning，**值得作为长期能力纳入** |
| **/yolo admin 策略边界检查**（安全） | [#109495](https://github.com/NousResearch/hermes-agent/issues/109495) / [#109503](https://github.com/NousResearch/hermes-agent/pull/109503) | **安全必修**，进入下版本概率极高 |
| **state.db owner-only 权限**（安全） | [#109509](https://github.com/NousResearch/hermes-agent/pull/109509) | 集合 #102878 + #59716 + goose#11613，**安全必修**，高概率随下版本 |
| **Gateway Windows 升级到 taskkill /T /F** | [#91186](https://github.com/NousResearch/hermes-agent/pull/91186) | PR open 自 8/21，长期未合并，**值得提速** |

---

## 7. 用户反馈摘要

从 Issue 评论与描述中提炼的真实用户痛点：

- **🔧 配置脆弱性是最大痛点**：多位用户报告 config.yaml 被外部工具（第三方 installer、IDE 插件）破坏后，Hermes 不报错而静默回退默认值——`#102945` 的报告者明确指出 "所有用户覆盖配置悄悄丢失，且仅一行 stderr warning"。这与 `#107918`（自托管用户用 Web Dashboard 配 custom provider）共同表明**配置层缺少可观测性**。
- **🌐 Web UI / Desktop 体验落差**：用户反复对比 "CLI `hermes chat` 在同 gateway 上正常，但 Web Dashboard stuck 'Setup Required'"（#108383），反映出 **Web 层在配置检测、profile 切换、bot 模式侧边栏可达性（#109067 PR）** 上落后于 CLI。
- **🤖 Telegram / Discord 适配器稳定性差**：用户报告 Telegram DM topics 在移动端发送图片丢失 topic 标记（#109527），Discord adapter 静默宕机数小时且 watchdog 不触发（#109521）——前者是数据完整性 bug，后者是**监控盲区**，对生产部署影响严重。
- **🪟 Windows 平台持续承压**：今日 P2/P3 Windows 相关 Issue 占多数（#105560、#107026、#109506、#87359 已关闭），加上 PR #91186 长期未合，**Windows 用户的整体体验仍是项目短板**。
- **🔐 安全诉求升温**：`#109495`（`/yolo` 非管理员旁路）与 `#109509`（state.db 文件权限）首次进入当日热点 PR 队列，社区对 **multi-tenant / shared-host 部署的安全基线** 越来越敏感。
- **🤝 贡献生态健康**：今日 PR 中多次出现 "salvage of #XXX + #YYY + port of ZZZ" 模式（如 #109509、#109532、#106402、#106408），说明维护者（teknium1）在积极把分散的社区贡献整合进主线，**协作流程运转良好**。

---

## 8. 待处理积压提醒

以下 Issue / PR 已长期未响应，建议维护者优先 review：

| 类型 | 编号 | 标题 | 创建时间 | 滞留时长 |
|------|------|------|----------|----------|
| 🔴 PR | [#91186](https://github.com/NousResearch/hermes-agent/pull/91186) | fix(gateway): escalate to taskkill /T /F on Windows | 2026-08-21 | **23 天** |
| 🟠 Issue | [#11117](https://github.com/NousResearch/hermes-agent/issues/11117) | Reduce browser tool overhead with compound navigate+snapshot | 2026-04-16 | **150 天**（最早 Issue 之一） |
| 🟡 Issue | [#76443](https://github.com/NousResearch/hermes-agent/issues/76443) | Desktop mid-turn 窗口/会话切换重复渲染 | 2026-08-01 | **43 天** |
| 🟡 Issue | [#104851](https://github.com/NousResearch/hermes-agent/issues/104851) | computer_use element_token cua-driver 0.23.2+ 兼容性 | 2026-09-07 | 6 天 |
| 🟡 PR | [#96122](https://github.com/NousResearch/hermes-agent/pull/96122) | fix(title): reject truncated structured output | 2026-08-27 | **17 天** |
| 🟡 PR | [#106496](https://github.com/NousResearch/hermes-agent/pull/106496) | feat(cron): resnap adopts changed global default | 2026-09-09 | 4 天 |

**重点关注**：
- **PR #91186** 滞留 23 天未合，涉及 Windows gateway 关键恢复路径，已影响多次用户 crash 报告
- **Issue #11117** 是 4 月份开启的性能优化长尾 Issue，反映浏览器工具开销问题长期未得到根治
- **Issue #76443** 滞留 43 天，Desktop session state 反复出现 twin rendering 问题

---

## 📊 项目健康度总评

| 维度 | 评分 | 说明 |
|------|------|------|
| **活跃度** | ⭐⭐⭐⭐⭐ | 50 Issue + 50 PR 更新，无任何停滞迹象 |
| **响应速度** | ⭐⭐⭐⭐ | 维护者同日回应多线程推进，但 P1 (#107918) 仍无 fix PR |
| **稳定性** | ⭐⭐⭐ | P2 配置/session 相关 Bug 集中暴露，跨模块回归风险上升 |
| **安全

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目日报
**日期：2026-09-13**

---

## 1. 今日速览

PicoClaw 今日整体活跃度处于**较低水平**：过去 24 小时内无版本发布、无 PR 合并或关闭，仅有 4 条 Issue 被更新、3 条 PR 处于待合并状态。最值得关注的当属一条 **CRITICAL 级问题** —— 项目官网 `picoclaw.io` 的 TLS 证书已于 2026-09-10 过期，导致所有浏览器和 TLS 客户端拒绝连接，站点处于不可用状态。其余动态以功能请求和文档/认证相关的待审 PR 为主，社区讨论热度集中在 IRC 长消息处理与 Web UI 输入卡顿两个长期未解决的议题上。

---

## 2. 版本发布

🚫 **今日无新版本发布。**

---

## 3. 项目进展

过去 24 小时 **无 PR 被合并或关闭**，3 条 PR 仍处于待处理状态：

| PR | 标题 | 状态 | 说明 |
|---|---|---|---|
| [#3378](https://github.com/sipeed/picoclaw/pull/3378) | fix(auth): use configured scopes instead of hardcoded default in RefreshAccessToken | 待合并 | 修复 OAuth 刷新 token 时硬编码 scope 覆盖 provider 配置的 bug |
| [#3368](https://github.com/sipeed/picoclaw/pull/3368) | docs: add Parallel Search MCP setup example | 待合并 (stale) | 文档增强：Parallel Search MCP 配置示例 |
| [#3367](https://github.com/sipeed/picoclaw/pull/3367) | docs: add Pilot MCP setup example | 待合并 (stale) | 文档增强：Pilot Protocol MCP 配置示例 |

**评估**：项目今日在代码层面几乎处于"停滞"状态，没有新功能落地或缺陷被合入修复。PR #3378 是一个小但明确的安全/正确性修复，建议维护者优先 review。

---

## 4. 社区热点

按评论数排序，今日最活跃的讨论如下：

1. **[#3287 — [Feature] Better support long messages in IRC](https://github.com/sipeed/picoclaw/issues/3287)**
   - 💬 12 条评论 | 👍 0 | 标记 stale
   - **诉求**：IRCv3 默认限制单条消息 512 字节，超长消息会被客户端自动换行分割；用户希望 PicoClaw 能识别并合并这些被分割的消息，视为单一语义单元处理。
   - **背后场景**：长文本对话在 IRC 渠道下的可读性与上下文完整性。

2. **[#3281 — [BUG] Web UI chat input is very laggy when history has a little bit long](https://github.com/sipeed/picoclaw/issues/3281)**
   - 💬 11 条评论 | 👍 2 | 标记 stale
   - **诉求**：Web UI 在会话历史较长时，输入框存在明显卡顿，影响日常交互体验。
   - **背后场景**：频繁使用 Web UI 的用户在长会话场景下的可用性问题。

3. **[#3377 — [CRITICAL] TLS certificate for picoclaw.io expired on 2026-09-10](https://github.com/sipeed/picoclaw/issues/3377)**
   - 💬 0 条评论 | 👍 1 | 新开
   - **诉求**：项目官网证书过期，站点全面不可用，属于紧急运维事件。

> 注：两个 stale 议题均存在一周以上仍未进入处理流程，社区参与度（👍 普遍偏低）也表明可能未获得维护者足够关注。

---

## 5. Bug 与稳定性

按严重程度排列：

### 🔴 P0 — Critical
- **[#3377](https://github.com/sipeed/picoclaw/issues/3377)**: `picoclaw.io` TLS 证书已于 2026-09-10 过期，**整个官网对所有访客不可用**。
  - 影响范围：所有通过浏览器或 TLS 客户端访问项目首页的用户。
  - **是否已有 fix PR**：❌ 无。**需维护者立即处理**（替换/续期证书），通常无需代码改动。

### 🟠 P1 — High
- **[#3281](https://github.com/sipeed/picoclaw/issues/3281)**: Web UI 输入卡顿（PicoClaw v0.3.1 / Go 1.25.11）。
  - 复现路径：打开会话 → 累积一定聊天历史 → 在输入框打字明显延迟。
  - **是否已有 fix PR**：❌ 无。

### 🟢 P2 — Low（但涉及安全正确性）
- **[#3378](https://github.com/sipeed/picoclaw/pull/3378)**：OAuth `RefreshAccessToken` 硬编码 scope，覆盖了 `OAuthProviderConfig.Scopes` 配置，可能导致 provider 特定权限丢失。
  - **已有 PR 修复，待合并**。

---

## 6. 功能请求与路线图信号

### 明确的新功能请求
- **[#3366 — [Feature] Add support for OpenAI compatible providers](https://github.com/sipeed/picoclaw/issues/3366)**
  - 提议新增 "OpenAI Compatible" provider 类型，以支持自建路由（如 9Router）等任意 OpenAI 协议兼容服务。
  - 实现路径清晰：复制现有 OpenAI provider 即可。
  - **路线图可能性**：⭐⭐⭐ 高。该需求实现成本低、复用现有接口，可显著扩展生态兼容性，建议纳入近期版本。

- **[#3287 — IRC 长消息支持](https://github.com/sipeed/picoclaw/issues/3287)**
  - 涉及 IRC 协议层语义处理，实现复杂度中等。
  - **路线图可能性**：⭐⭐ 中等。需协议适配与测试用例，社区 stale 状态可能影响推进。

### 与 PR 相关的文档扩展信号
- PR #3367（[Pilot MCP](https://github.com/sipeed/picoclaw/pull/3367)）与 PR #3368（[Parallel Search MCP](https://github.com/sipeed/picoclaw/pull/3368)）反映出 **MCP（Model Context Protocol）生态集成** 正在成为社区投入方向，建议维护者关注 MCP 文档体系的整体规划。

---

## 7. 用户反馈摘要

从 Issues 评论与摘要中可提炼以下真实痛点：

- **🔴 官网不可达带来的信任损伤**：用户 [dimonb](https://github.com/sipeed/picoclaw/issues/3377) 反馈证书过期导致官网全面 503/证书错误，新用户在通过仓库链接进入官网时会立即遭遇失败印象。
- **🟠 长会话 Web UI 体验下降**：用户 [xpader](https://github.com/sipeed/picoclaw/issues/3281) 反馈仅"略长"的历史就会触发输入卡顿，提示可能存在前端渲染/虚拟滚动或状态管理瓶颈；2 个 👍 说明有同类困扰用户。
- **🟡 IRC 用户对消息原子性的强诉求**：在 #3287 中用户期望消息"语义完整性"，反映出 PicoClaw 在 IRC 等受限渠道下的多模态对话体验仍有较大改进空间。
- **🟢 自托管用户的扩展诉求**：#3366 表明用户群体中已有自托管/路由化部署需求，对"provider 可插拔"有明确期望。

**整体满意度信号**：以 Issue 关注度（👍 普遍 ≤2）和 stale 标记来看，社区当前对项目响应速度**评价偏低**，核心痛点长期未关闭。

---

## 8. 待处理积压（提醒维护者关注）

以下 Issue/PR 已存在超过 20 天，标记为 stale，建议优先 review：

| 类型 | 编号 | 标题 | 创建日期 | 等待天数 |
|---|---|---|---|---|
| Issue | [#3287](https://github.com/sipeed/picoclaw/issues/3287) | IRC 长消息支持 | 2026-07-22 | ~53 天 |
| Issue | [#3281](https://github.com/sipeed/picoclaw/issues/3281) | Web UI 输入卡顿 | 2026-07-21 | ~54 天 |
| PR | [#3367](https://github.com/sipeed/picoclaw/pull/3367) | docs: Pilot MCP 示例 | 2026-09-04 | ~9 天 |
| PR | [#3368](https://github.com/sipeed/picoclaw/pull/3368) | docs: Parallel Search MCP 示例 | 2026-09-05 | ~8 天 |

**重点提醒**：
- ⚠️ **#3377（TLS 证书）属紧急运维事项，请今日处理**。
- 两个 stale Issue (#3281, #3287) 社区互动较活跃但长期无进展，建议至少给出 triage 评论或纳入路线图。
- PR #3378（auth fix）影响 OAuth 正确性，建议尽快合并；两条文档 PR (#3367, #3368) 可作为低风险批次合并。

---

## 📊 项目健康度速览

| 指标 | 状态 | 备注 |
|---|---|---|
| 版本发布节奏 | 🟡 | 今日无发布 |
| PR 处理速度 | 🔴 | 3 条待合并，含 stale |
| Issue 响应速度 | 🔴 | 多条 stale 议题 >50 天未关闭 |
| 紧急事件处理 | 🔴 | TLS 证书过期未处理 |
| 社区参与度 | 🟡 | 讨论存在但点赞/参与偏低 |

**总评**：项目在功能层面持续吸引社区贡献（OpenAI 兼容 provider、MCP 文档等），但**维护响应链存在明显积压**，今日最优先事项为修复 `picoclaw.io` 证书。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目日报 · 2026-09-13

> 数据周期：过去 24 小时 | 项目：`qwibitai/nanoclaw` | 仓库健康度：🟢 **高度活跃**

---

## 1. 今日速览

NanoClaw 仓库在过去 24 小时内共处理 **25 个 PR 与 5 个 Issue**，整体活跃度极高。**main 分支以修复 Setup/安装链路上的多处 Bug 为主线**，glifocat 一人连续合入 8 个 setup-related fix PR，集中解决了 `WEBHOOK_PORT`、SQLite 迁移并发、registry 拷贝失败、Linux fallback service 启动等长期隐患。同时，"Code Mode 持久化编程会话"与"Voice Channel（GPT-Live-1 全双工通话）"两大新功能 PR 已开放评审，标志项目从 Chat Loop 向真正的"AI Agent Coding 容器平台"演进。无新版本发布，下一版本预计吸纳本批次 setup 修复与 voice/code-mode 功能。

---

## 2. 版本发布

🚫 **无新版本发布**。当前 `main` 分支累积了大量 setup 修复与两个新功能 PR（Voice / Code Mode），按节奏下一个版本标签可能在数日内产出，建议关注 tags 推送。

---

## 3. 项目进展（已合并/关闭的重要 PR）

过去 24 小时共有 **11 个 PR 进入已合并/关闭状态**，其中 10 个由核心维护者 glifocat 提交，集中打磨安装与启动链路：

| PR | 主题 | 类别 | 意义 |
|---|---|---|---|
| [#3770](https://github.com/qwibitai/nanoclaw/pull/3770) | **fix(webhook): honor WEBHOOK_PORT from .env** | Bug fix | 修复了 Issue #2901 报告的 `.env` 中 `WEBHOOK_PORT` 被静默忽略的问题，配置语义与文档对齐 |
| [#3766](https://github.com/qwibitai/nanoclaw/pull/3766) | **fix(db): recheck migrations under SQLite write lock** | Bug fix | 关闭 Issue #3765，解决 fresh setup 时 host 与 CLI-agent initializer 并发触发 SQLite 迁移导致失败 |
| [#3768](https://github.com/qwibitai/nanoclaw/pull/3768) | **fix(setup): start and verify the Linux fallback service** | Bug fix | Linux nohup fallback 现在会真正启动并验证，setup 向导可达首个 agent |
| [#3776](https://github.com/qwibitai/nanoclaw/pull/3776) | **fix(setup): run downloaded installers with the system shell by absolute path** | Bug fix | 修复 exe.dev 镜像自 2026-09-09 起 `sh` PATH 解析异常导致的 installer 失败 |
| [#3763](https://github.com/qwibitai/nanoclaw/pull/3763) | **fix(add-opencode): drop the pre-cli-tools Dockerfile guard** | Bug fix | 清理 upgrade/remove 残留的过期 Dockerfile guard 测试，关闭 Issue #3762 |
| [#3774](https://github.com/qwibitai/nanoclaw/pull/3774) | **fix: persist OneCLI gateway files across restarts** | Bug fix | OneCLI 证书/Credential 重启后 `EISDIR` 问题修复 |
| [#3767](https://github.com/qwibitai/nanoclaw/pull/3767) | **fix(setup): preserve files when registry copies fail** | Bug fix | registry copy 失败不再截断已有文件，允许重试 |
| [#3773](https://github.com/qwibitai/nanoclaw/pull/3773) | **fix(setup): fetch explicit registry tracking refs** | Bug fix | 单分支 clone 下 channel/provider tracking ref 缺失问题 |
| [#3758](https://github.com/qwibitai/nanoclaw/pull/3758) | **fix(setup): skip portal reminders the operator already answered** | UX fix | 避免 portal perk 重复询问已答问题 |
| [#3754](https://github.com/qwibitai/nanoclaw/pull/3754) | **fix(setup): print one portal link for the not-enrolled browser handoff** | UX fix | 未注册 portal handoff 链接由双链接简化单链接 |
| [#3782](https://github.com/qwibitai/nanoclaw/pull/3782) | **gateway providers: pass the session's container name** | Refactor | `GatewayProviderInput` 增 `containerName` 字段（已关闭，未提及是否合并） |

**整体推进评估**：setup 链路的健壮性提升了一个台阶，过去长期被忽略的几个环境变量、并发竞态、文件残留问题在 24 小时内被系统性扫除。项目健康度评分可视为 **显著改善**。

---

## 4. 社区热点（评论与讨论最活跃的条目）

> 注：今日数据中各条目评论数普遍较低（多为 0–1 条），但有以下值得关注的开放议题：

- **Issue [#3787](https://github.com/qwibitai/nanoclaw/issues/3787) – Fresh setup skips the provider picker and silently selects Claude**
  - 状态：OPEN · 已有 1 条评论
  - 关注点：fresh install 无法选择 Codex 等其他 provider，setup 流程回归。
  - 已有配套修复 PR [#3788](https://github.com/qwibitai/nanoclaw/pull/3788)（glifocat），闭环在即。
  - 背后诉求：用户期望 setup 真正"可选"，而非被默认 Claude 路径劫持，反映项目在多 provider 战略上不能让 Claude 获得隐性优先级。

- **Issue [#3785](https://github.com/qwibitai/nanoclaw/issues/3785) – channels branch 与 main 不一致**
  - 状态：OPEN · 0 评论
  - 关注点：`channels` 分支的 Slack adapter 引用了 `extractSlackRawText`，但 main 未合并该 core 变更，分支管理存在治理风险。
  - 背后诉求：贡献者希望降低贡献摩擦，分支与 main 同步机制需要更明确。

- **PR [#3783](https://github.com/qwibitai/nanoclaw/pull/3783) – feat(code-mode): persistent coding sessions**
  - gavrielc 一次性开放面积最大的功能 PR，涉及 runner / containers / sessions / security / ncl-cli 等多个 area。
  - 背后诉求：把"对话"演化为"持久化编程会话"，是 AI agent 平台化的标志性 PR。

---

## 5. Bug 与稳定性

按严重程度排序：

| 级别 | Issue / PR | 描述 | 修复状态 |
|---|---|---|---|
| 🟠 中 | [#3787](https://github.com/qwibitai/nanoclaw/issues/3787) | Fresh install 跳过 provider picker 静默选 Claude | 已有 [#3788](https://github.com/qwibitai/nanoclaw/pull/3788) 待合并 |
|  中 | [#3765](https://github.com/qwibitai/nanoclaw/issues/3765) | Fresh setup 并发 SQLite 迁移失败 | ✅ 已修复（[#3766](https://github.com/qwibitai/nanoclaw/pull/3766)） |
| 🟠 中 | [#2901](https://github.com/qwibitai/nanoclaw/issues/2901) | `.env` 中 `WEBHOOK_PORT` 被忽略 | ✅ 已修复（[#3770](https://github.com/qwibitai/nanoclaw/pull/3770)） |
| 🟡 低 | [#3762](https://github.com/qwibitai/nanoclaw/issues/3762) | add-opencode 残留过期 Dockerfile 测试 | ✅ 已修复（[#3763](https://github.com/qwibitai/nanoclaw/pull/3763)） |
| 🟡 低 | [#3785](https://github.com/qwibitai/nanoclaw/issues/3785) | `channels` 分支引用 main 不存在的 API | ⏳ 待处理（分支同步问题） |

**回归风险**：setup 路径在过去 24 小时改动密集（10 个 fix PR 触及 install/registry/webhook/db/service/shell），建议发布下一个版本前补一轮端到端 fresh install 冒烟测试。

---

## 6. 功能请求与路线图信号

已开放评审的功能型 PR（共 14 个待合并 PR 中含 4 个核心 feature）：

| PR | 功能 | 路线图判断 |
|---|---|---|
| [#3783](https://github.com/qwibitai/nanoclaw/pull/3783) | **Code Mode**：持久化编程会话（runner + sandbox verbs + boundary approvals） | 🟢 高确定性，但面积大、需要多轮 review，可能拆分为多个子 PR 进入下一大版本 |
| [#3784](https://github.com/qwibitai/nanoclaw/pull/3784) | **Community Portal**：opt-in 远程 SSH 终端 + 编程会话聊天面板 | 🟢 与 #3783 协同，构成"远程 Coding Container"完整故事 |
| [#3764](https://github.com/qwibitai/nanoclaw/pull/3764) + [#3772](https://github.com/qwibitai/nanoclaw/pull/3772) | **/add-voice**：基于 OpenAI GPT-Live-1 的浏览器全双工语音通道 | 🟢 Voice adapter 与 skill 已成对提交，与 #3785 反映的 channels 整合诉求契合 |
| [#3489](https://github.com/qwibitai/nanoclaw/pull/3489) | **Codex structured setup-driver auth** | 🟡 已开 3 周+，与 #3788 修复的 provider picker 一起构成 Codex 完整 onboarding |
| [#3786](https://github.com/qwibitai/nanoclaw/pull/3786) | **typing indicator 跟随 runner turn state** |  UX 改进，确定性高 |

**路线图信号**：项目正从 "Chat Loop" 演进为 **"Multi-modal Coding Agent Platform"**（Code + Voice + Portal），与 Issue #3787 / #3785 反映的"多 provider / 多 channel 治理"诉求相互呼应。

---

## 7. 用户反馈摘要

- **痛点：多 provider 体验不一致**（Issue [#3787](https://github.com/qwibitai/nanoclaw/issues/3787)）—— 用户期望在 fresh install 时自主选择 provider，而不是被引导至 Claude；这是首次有公开 issue 直接质疑 Claude 默认路径的公平性。
- **痛点：fresh install 失败模式多**（Issue [#3765](https://github.com/qwibitai/nanoclaw/issues/3765) + PR [#3776](https://github.com/qwibitai/nanoclaw/pull/3776)）—— 报告集中在 macOS / Linux 上 SQLite 并发迁移、exe.dev 镜像 shell PATH 异常、Linux fallback service 不启动，构成"首装体验差"的负面口碑风险。
- **痛点：环境变量与文档不一致**（Issue [#2901](https://github.com/qwibitai/nanoclaw/issues/2901)）—— 用户按文档把 `WEBHOOK_PORT` 写在 `.env` 却被静默忽略，反映配置文件加载语义需要更明确的优先级文档。
- **满意信号**：Issue #2901 历经 2 个月（2026-07-01 → 2026-09-12）得到修复，#3762/#3765 在报告当日即有 PR 关联并 24 小时内合入，说明项目对用户报告响应速度较快。

---

## 8. 待处理积压

| 编号 | 类型 | 滞留时长 | 提示 |
|---|---|---|---|
| [#3489](https://github.com/qwibitai/nanoclaw/pull/3489) | Open PR · Codex setup-driver auth | **~21 天**（2026-08-23 起） | 核心功能 PR，建议维护者安排 review；与 #3788 修复的 provider picker 互补 |
| [#3750](https://github.com/qwibitai/nanoclaw/pull/3750) | Open PR · fix(update) extract scripts/ tree | **~5 天**（2026-09-08 起） | 修复 `/update-nanoclaw` 在 `git archive` 缺文件时崩溃，影响升级体验 |
| [#3785](https://github.com/qwibitai/nanoclaw/issues/3785) | Open Issue · channels 分支与 main 漂移 | **~1 天** | 分支治理风险，可能影响后续 voice/chat 适配器合并 |
| [#3787](https://github.com/qwibitai/nanoclaw/issues/3787) | Open Issue · provider picker 缺失 | **~1 天** | 已有 PR [#3788](https://github.com/qwibitai/nanoclaw/pull/3788) 待合并，建议同日 merge 并 close |

**维护者建议**：
1. 优先合并 [#3788](https://github.com/qwibitai/nanoclaw/pull/3788) 并关闭 [#3787](https://github.com/qwibitai/nanoclaw/issues/3787)。
2. 解决 [#3785](https://github.com/qwibitai/nanoclaw/issues/3785) 涉及的 channels 分支同步策略，避免后续 voice PR 合并受阻。
3. 给 [#3489](https://github.com/qwibitai/nanoclaw/pull/3489) Codex auth PR 安排一次评审轮次，避免进一步积压。

---

*报告生成时间：2026-09-13 · 数据源：GitHub REST API · 链接前缀 `https://github.com/qwibitai/nanoclaw` 已省略*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目日报 — 2026-09-13

> 数据来源：[github.com/nullclaw/nullclaw](https://github.com/nullclaw/nullclaw) | 报告生成：AI 智能体开源项目分析

---

## 1. 今日速览

NullClaw 今日呈现**低活跃、静默维护**状态。过去 24 小时内仓库无新增 Issue、无新版本发布，PR 流转也仅有 1 条关闭记录（[#996](https://github.com/nullclaw/nullclaw/pull/996)），整体仓库处于功能稳定期而非功能爆发期。从健康度角度看，PR #996 关闭前通过了 7,373 项测试，构建优化模式（ReleaseSmall）也成功编译，说明项目 CI/CD 与测试体系运转良好，但仍需关注社区活跃度——连续零 Issue 流入可能意味着推广放缓或用户基数有限，维护者宜主动发布进展公告以拉动反馈。

---

## 2. 版本发布

**今日无新版本发布。** 当前最新 Release 仍为上一次发布版本（具体版本号需访问 [Releases 页](https://github.com/nullclaw/nullclaw/releases) 确认）。建议关注者在下一窗口期留意维护者是否会基于 PR #996 等累积修复发布补丁版本。

---

## 3. 项目进展

### ✅ 已关闭 PR

| PR | 标题 | 作者 | 影响范围 | 链接 |
|---|---|---|---|---|
| [#996](https://github.com/nullclaw/nullclaw/pull/996) | fix(mcp): bound stdio response waits | [be-student](https://github.com/be-student) | MCP stdio 传输层 | 关闭（已合并或弃闭） |

**详细说明：**
PR #996 修复了 Issue #991 报告的 **MCP（Model Context Protocol）stdio 通道响应等待无界**的问题。该修复包含三个关键改进：

1. **引入 `timeout_ms` 上限** — 对 stdio MCP 响应读取施加超时约束，避免进程被无响应远端永久挂起。
2. **进程组级终止** — 当请求超时时，主动终止服务端进程组，从内核层面彻底释放资源。
3. **失败初始化清理** — 初始化失败时清理已生成的子进程，杜绝孤儿进程。

**验证状态：** `zig build test --summary all` 显示 **7,373 项测试通过，9 项跳过**，`zig build -Doptimize=ReleaseSmall` 构建成功，整体置信度较高。

**项目意义：** 这是一项**纯稳定性 / 可靠性增强**，未引入新 API 或破坏性变更。MCP 通道作为智能体连接外部工具/数据源的关键路径，本次修复显著提升了长连接、慢响应场景下的资源回收能力，是生产环境部署的重要兜底。

---

## 4. 社区热点

> 今日无新增 Issue，PR #996 评论数与反应数均为 0。

社区讨论热度处于**历史低位**。这与昨日形成对比（昨日 PR #996 仍在更新中），表明该修复已经收敛、未引起额外讨论。建议维护者：
- 主动在 [Discussions](https://github.com/nullclaw/nullclaw/discussions) 发布 PR #996 修复说明，以触达潜在受影响用户。
- 评估是否需要在 README 或 CHANGELOG 中突出 MCP 超时机制，方便用户感知。

---

## 5. Bug 与稳定性

### 🔧 今日已修复

| 严重度 | Bug | 关联 PR | 状态 |
|---|---|---|---|
| **中-高** | MCP stdio 响应等待无界，可能导致进程挂起与孤儿进程 | [#996](https://github.com/nullclaw/nullclaw/pull/996) → 修复 [#991](https://github.com/nullclaw/nullclaw/issues/991) | ✅ 已关闭 |

### ⚠️ 评估
- 原 Bug [#991](https://github.com/nullclaw/nullclaw/issues/991) 的严重度定位为「中-高」：在生产场景中，stdio MCP 长连接若无超时保护，可能累积大量挂起进程，最终耗尽 fd 或内存。社区若在生产中部署 NullClaw 作为 AI Agent runtime，需尽快升级到包含此修复的版本。
- **无新增 Bug 报告**，仓库当前稳定性面良好。

---

## 6. 功能请求与路线图信号

> 今日无新功能请求 Issue。

**间接信号：** PR #996 虽属修复，但其中 `timeout_ms` 字段的引入暗示 MCP 客户端配置层面正在**向「可调超时」演进**。这一方向可能为后续功能（如用户级超时配置、全局 MCP 健康检查、心跳保活）埋下伏笔。维护者可在 Roadmap 中考虑：
- MCP 连接池与自动重连
- 多 MCP 服务器并行调度的超时策略
- stdio / SSE / HTTP 三种传输的可观测性指标（p50/p99 延迟）

---

## 7. 用户反馈摘要

> 今日 Issues 区无新评论，无法获取新的用户痛点样本。

**历史画像（基于 PR #996 上下文推断）：**
- **使用场景：** 至少一部分用户已将 NullClaw 部署为对接外部 MCP stdio 服务（如本地脚本、知识库 CLI）的 AI 智能体运行时。
- **痛点：** 在远端 stdio MCP 服务响应慢或静默挂起时，NullClaw 缺乏超时回收能力，被迫需要外部看门狗。
- **期望：** 内建超时机制 + 失败清理（已在 #996 中落地）。

---

## 8. 待处理积压

由于今日 Issues 与 PR 区域均无新增动态，**无法识别新的长期未响应项**。但仍建议维护者关注：

| 项目 | 关注点 | 建议行动 |
|---|---|---|
| [Issue #991](https://github.com/nullclaw/nullclaw/issues/991) | 虽已被 #996 修复，但若原报告者未收到关闭通知，需补充回复致谢 | 关闭 Issue 并注明修复版本号 |
| 旧 Issue / PR 池 | 本日数据未列出存量，建议每周一次盘点长期 (>30 天) 未响应项 | 引入 bot 自动 ping stale issue |

---

## 📊 项目健康度评分（今日快照）

| 维度 | 评分 | 说明 |
|---|---|---|
| 代码活跃度 | ⭐⭐☆☆☆ | PR 流转稀疏，无新功能推进 |
| 测试覆盖 | ⭐⭐⭐⭐⭐ | 7,373 测试通过，CI 严格 |
| 社区互动 | ⭐⭐☆☆☆ | 零评论、零 Issue |
| 稳定性 | ⭐⭐⭐⭐☆ | 关键超时 bug 已修复 |
| 发布节奏 | ⭐⭐☆☆☆ | 无近期发布 |

**综合判断：** 项目处于**「稳健休整期」**——核心功能质量有保障，但社区活跃度需要维护者主动激活。下一阶段若能配合版本发布与功能迭代公告，可进一步提升项目可见度与贡献者吸引力。

---

*本报告由 AI 自动生成，数据基于 GitHub 公开 API 抓取。如需更深度分析（如贡献者分布、commit 频率、依赖变更），请提供扩展数据集。*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报

**报告日期**：2026-09-13
**数据来源**：[nearai/ironclaw](https://github.com/nearai/ironclaw)

---

## 1. 今日速览

IronClaw 今日整体活跃度处于**低位运行**状态。过去 24 小时内无新 Issue 提交、无版本发布，PR 流量仅 2 条（1 条新增待审、1 条关闭）。从提交时间分布看，PR #8076 自 9 月 6 日创建以来经历了 6 天迭代周期，于今日关闭，呈现出"小批量、慢节奏"的迭代特征。结合连续多日零 Issue、零 Release 的数据，项目当前处于**维护期 / 内修期**，而非密集功能开发期。建议关注维护者对 PR #8098 的审阅进展，以判断下一阶段开发节奏。

---

## 2. 版本发布

本周期内**无新版本发布**，跳过本节。

---

## 3. 项目进展

### ✅ 已合并 / 关闭的重要 PR

**PR #8076 — `fix(assistant): distinguish disconnected shared channels`** ([链接](https://github.com/nearai/ironclaw/pull/8076))
- **作者**：be-student
- **状态**：CLOSED（2026-09-12 更新）
- **核心变更**：
  - 区分"已配对但断连的共享频道"与"未配对账户"，避免误判
  - 为用户消息与 bot 命令分别渲染频道特定的引导文案
  - 在 product、adapter 与 OpenAI-compatible 三个接入层保持拒绝分类的一致性
  - 同步更新 Slack 能力声明
- **项目意义**：这是一次跨层级的体验一致性修复，触及产品面、适配层与对外接口面，说明维护者重视**多端一致性与错误状态的可解释性**，对依赖 OpenAI 兼容接口的下游用户尤为友好。

### 📊 项目推进评估

今日的项目推进主要落在"健壮性修补"而非"功能扩张"维度，可视为一次小步前进（incremental hardening），距离里程碑式进展仍有距离。

---

## 4. 社区热点

### 🔥 今日值得关注的 PR

**PR #8098 — `test(turns): pin state-derived lineage drop`** ([链接](https://github.com/nearai/ironclaw/pull/8098))
- **作者**：huiq777
- **状态**：OPEN（待合并）
- **创建/更新时间**：2026-09-12
- **讨论度**：👍 0，暂无评论

**分析**：该 PR 实质是为 `TurnRunState` 派生快照中"血统字段（lineage）"的主动丢弃行为**钉死测试**——既补充了对应的反向回归测试，也明确声明从状态派生的快照会刻意省略 depth、activation provenance、descendant cap 三项元数据。这反映出社区（或贡献者）在尝试**形式化/契约化状态语义边界**，诉求背后是希望"派生状态"与"原始元数据"的可观测差异可被锁定，避免未来重构悄悄改变行为。

> 备注：因数据中评论字段为 `undefined`，实际讨论热度无法精确量化，以上基于点赞数与时间新鲜度推断。

---

## 5. Bug 与稳定性

| 严重程度 | 问题 | 关联 PR / Issue | 是否有 fix |
|---|---|---|---|
| 🟡 中 | 配对用户的共享频道断连状态与未配对账户无法区分，导致错误提示歧义 | [PR #8076](https://github.com/nearai/ironclaw/pull/8076) | ✅ 已有（已关闭） |

- **新增 Bug 报告**：0 条
- **回归风险信号**：PR #8098 的存在暗示社区在主动防止 `TurnRunState` 派生路径上的潜在回归，说明此前可能存在过类似问题被修复但缺少反向保护测试的情况。建议维护者尽快 review，将该测试纳入主线以巩固防线。

---

## 6. 功能请求与路线图信号

由于今日无新增 Issue，**无明确的新功能请求**。但从已存在的两个 PR 中可观察到以下**路线图暗示**：

1. **状态契约化趋势**（PR #8098）：社区开始为运行时派生状态建立"白盒测试"，这通常预示项目进入**稳定化阶段**，后续可能延伸至更广泛的状态语义文档化。
2. **多端一致性维护**（PR #8076）：Slack adapter、product 面、OpenAI 兼容面被同步更新，说明维护者将"跨接入层一致性"视为持续投入方向，下一阶段大概率仍会围绕此方向扩展至其他 channel adapter（如 Telegram、Discord 等如有的话）。

---

## 7. 用户反馈摘要

因今日 Issues 数据为空，且两个 PR 的评论字段均显示 `undefined`，**无法从评论中提炼真实用户痛点**。可观察到的**间接信号**：

- PR #8076 跨 6 天关闭，期间多次更新，说明维护者与贡献者进行了多轮交互（虽然具体内容未在数据中呈现），协作密度处于中等水平。
- 两位贡献者（be-student、huiq777）均在 24 小时内有动作，**贡献者活跃度正常**，但**外部用户参与度偏低**。

---

## 8. 待处理积压

| 类型 | 编号 | 标题 | 创建时间 | 风险提示 |
|---|---|---|---|---|
| 待合并 PR | [#8098](https://github.com/nearai/ironclaw/pull/8098) | test(turns): pin state-derived lineage drop | 2026-09-12 | 🟢 低风险测试类 PR，建议 48 小时内 review 合并，避免与后续重构冲突 |
| 长期未响应 | — | 无（数据范围内未发现长期挂起项） | — | — |

**给维护者的提醒**：
- PR #8098 属于"行为锁定型"测试，价值在于防止回归，建议优先处理。
- 当前 Issue 队列为空，无积压风险；但建议主动在 Discussions 或 Issue 中抛出下一阶段路线图征集，以激活社区。

---

## 📈 项目健康度速评

| 维度 | 评级 | 说明 |
|---|---|---|
| 开发活跃度 | 🟡 中低 | 仅 2 条 PR，0 Issue |
| 代码质量信号 | 🟢 良好 | 有测试补充 + 跨层一致性修复 |
| 社区参与度 | 🟡 待提升 | 无新 Issue 讨论，PR 评论缺席 |
| 发布节奏 | ⚪ 信息不足 | 连续无 Release，需结合更长周期判断 |
| 维护者响应 | 🟢 健康 | PR #8076 在 6 天内闭环 |

---

*本报告基于 2026-09-13 当日 GitHub 数据生成，仅反映数据可观测范围内的活动。*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目日报

**报告日期**：2026-09-13
**数据周期**：过去 24 小时
**项目地址**：[netease-youdao/LobsterAI](https://github.com/netease-youdao/LobsterAI)

---

## 1. 今日速览

LobsterAI 今日整体活跃度处于**中等偏低**水平：过去 24 小时有 6 条 Issue 出现更新、10 条 PR 出现更新，但无新版本发布。值得注意的是，**所有 6 条活跃 Issue 均带有 `[stale]` 标签**，表明它们大多为历史积压问题在 bot 机制下被重新标记活跃，并非新增问题或新讨论带来的自然热度。PR 端则有 2 条已被关闭（#2657、#2658），为项目带来小幅正向推进。综合来看，项目处于"**维护与积压清理阶段**"，核心代码改动活跃，但社区互动（评论、👍）非常有限。

---

## 2. 版本发布

**无新版本发布。** 今日未检测到任何 Release tag 变动。如需了解最新已发布版本，请查阅仓库 Releases 页面：[Releases](https://github.com/netease-youdao/LobsterAI/releases)。

---

## 3. 项目进展

过去 24 小时共有 **2 条 PR 被关闭**（均为 fisherdaddy 提交），标志着以下工作已完成或被放弃：

### ✅ 已关闭 PR

| PR | 标题 | 作者 | 影响范围 | 状态 |
|---|---|---|---|---|
| [#2658](https://github.com/netease-youdao/LobsterAI/pull/2658) | fix: openclaw subagent yield empty response | fisherdaddy | docs / main / openclaw | 已关闭（今日创建并关闭） |
| [#2657](https://github.com/netease-youdao/LobsterAI/pull/2657) | fix: resolve thumbnail rendering and native dependency build issues | fisherdaddy | renderer / build / docs / main / openclaw | 已关闭（昨日关闭） |

**推进评估**：
- #2658 涉及 openclaw subagent 返回空响应的修复，属于 AI 会话链路关键问题，但 PR 在创建当日即被关闭，未合并也未留下可追溯的处理记录，**透明度不足**。
- #2657 同时覆盖了缩略图渲染与原生依赖构建问题，范围较广，关闭前可能因范围过大被拆分或转为独立 PR。

> ⚠️ **健康度提示**：单日合并 0 条、关闭 2 条（且原因不明），意味着今日仓库代码库**净增长为 0**。建议维护者在 PR 关闭时补充说明，便于社区理解处理方向。

---

## 4. 社区热点

**互动度整体偏低**。今日所有活跃 Issue 的评论数均为 1、👍 数均为 0，未出现明显讨论热点的工单。以下为话题度相对集中的条目（按 Issue 编号聚类）：

### 焦点话题 1：openclaw AI 会话稳定性（双工单）

- **Issue** [#1051](https://github.com/netease-youdao/LobsterAI/issues/1051) — *fix(openclaw): 两处竞态条件导致 AI 会话永久无法启动*（MaoQianTu）
- **对应修复 PR** [#1052](https://github.com/netease-youdao/LobsterAI/pull/1052) — 同作者提交，但仍未合并

**诉求分析**：用户痛点集中在 AI 会话"死锁"——必须重启应用才能恢复，是典型的"不可恢复错误"，严重程度较高。

### 焦点话题 2：认证与会话强制登出

- **Issue** [#1048](https://github.com/netease-youdao/LobsterAI/issues/1048) — *fetchWithAuth 并发 401 时双重消费 refreshToken*
- **对应修复 PR** [#1049](https://github.com/netease-youdao/LobsterAI/pull/1049)

**诉求分析**：刷新 token 被并发消费后用户被强制下线，属于高频触发的可用性问题（在多 IPC 调用并发场景下），影响登录态稳定性。

> 上述两组工单均形成了 **"Issue + PR" 配套**，反映出提交者（MaoQianTu）已具备较强的问题诊断与修复能力，但目前都停留在 `[stale]` 状态等待合并。

---

## 5. Bug 与稳定性

按严重程度排序：

### 🔴 高严重度（影响核心功能可用性）

| 严重度 | Issue | 标题 | 已有 Fix PR？ |
|---|---|---|---|
| 🔴 P0 | [#1048](https://github.com/netease-youdao/LobsterAI/issues/1048) | fetchWithAuth 并发 401 时双重消费 refreshToken，导致用户被强制登出 | ✅ [#1049](https://github.com/netease-youdao/LobsterAI/pull/1049) |
| 🔴 P0 | [#1051](https://github.com/netease-youdao/LobsterAI/issues/1051) | openclaw 两处竞态条件导致 AI 会话永久无法启动 | ✅ [#1052](https://github.com/netease-youdao/LobsterAI/pull/1052) |

### 🟠 中等严重度（影响用户操作）

| 严重度 | Issue | 标题 | 已有 Fix PR？ |
|---|---|---|---|
| 🟠 P1 | [#1053](https://github.com/netease-youdao/LobsterAI/issues/1053) | Modal 关闭按钮无反应（顶部栏拖拽区拦截） | ✅ [#1054](https://github.com/netease-youdao/LobsterAI/pull/1054) |
| 🟠 P1 | [#1066](https://github.com/netease-youdao/LobsterAI/issues/1066) | 心跳对话未过滤，给用户造成困惑 | ❌ 无对应 PR |

### 🟡 低严重度（体验或配置问题）

| 严重度 | Issue | 标题 | 已有 Fix PR？ |
|---|---|---|---|
| 🟡 P2 | [#1062](https://github.com/netease-youdao/LobsterAI/issues/1062) | 定时任务修改时间后与标题描述不符 | ❌ 无直接修复 PR |
| 🟡 P2 | [#1061](https://github.com/netease-youdao/LobsterAI/issues/1061) | 网关端口与 OpenClaw 端口冲突，无法修改 | ❌ 无对应 PR |

**统计**：6 条 Bug 中 **3 条已有配套修复 PR**（均处于 OPEN 状态未合并），**3 条仍处于"无修复"状态**。建议优先合并高严重度对应的 PR，以快速止血。

---

## 6. 功能请求与路线图信号

### 新功能 PR（待合并）

- **PR** [#1065](https://github.com/netease-youdao/LobsterAI/pull/1065) — *feat(scheduled-task): allow binding task to existing cowork session*
  - 作者：mmengLong
  - 内容：在定时任务创建/编辑表单中新增**会话选择器**，允许用户将定时任务绑定到已存在的 cowork 会话，而非每次都启动新会话。
  - 路线图信号：⭐⭐⭐⭐
  - 评估：这是今日**唯一的新功能类 PR**，契合用户对"定时任务复用已有上下文"的诉求（与 #1062 标题/时间不一致问题形成呼应），具备合并价值。

### 隐含的功能诉求

| 关联 Issue | 诉求 |
|---|---|
| [#1061](https://github.com/netease-youdao/LobsterAI/issues/1061) | 网关端口可配置化（避免与 OpenClaw 冲突）—— 暗示需要更完善的端口管理 UI/配置入口 |
| [#1062](https://github.com/netease-youdao/LobsterAI/issues/1062) | 定时任务 UI 需要更严格的"标题/时间一致性校验"逻辑 |

---

## 7. 用户反馈摘要

由于所有 Issue 评论数均为 1 且 👍 均为 0，**直接用户声音较为稀薄**。从 Issue 文本中可提炼以下痛点：

### 主要痛点

1. **AI 会话"死锁"**（[#1051](https://github.com/netease-youdao/LobsterAI/issues/1051)）：openclaw 网关客户端初始化失败后，session 进入永久错误状态，**用户唯一恢复手段是重启应用**。属于"不可自愈"故障。
2. **认证被强制登出**（[#1048](https://github.com/netease-youdao/LobsterAI/issues/1048)）：并发请求触发 refreshToken 双重消费，刷新失败即被踢出登录态，影响所有依赖登录态的 IPC 调用。
3. **UI 拖拽区遮挡按钮**（[#1053](https://github.com/netease-youdao/LobsterAI/issues/1053)）：用户报告"添加 Agent → 选择技能"流程下 Modal 变高后无法关闭**任何 Modal**（用户推测是全局问题）。
4. **系统心跳噪音**（[#1066](https://github.com/netease-youdao/LobsterAI/issues/1066)）：内部日志/对话被错误地暴露给用户，造成困惑。
5. **端口冲突不可调**（[#1061](https://github.com/netease-youdao/LobsterAI/issues/1061)）：用户因 8080 等默认端口冲突而无法启动核心功能。
6. **定时任务标题与时间不同步**（[#1062](https://github.com/netease-youdao/LobsterAI/issues/1062)）：编辑时间后 UI 标题未联动更新。

### 使用场景画像

- 多为**桌面端 Electron 应用**用户（Mac/Windows），使用 openclaw cowork 调度与定时任务等高阶功能。
- 部分用户已深入使用到 IPC 并发、网关代理等底层能力，反映项目具备一定技术深度用户群体。

### 满意度信号

- **未观察到正面反馈或满意度表态**。
- 仓库缺少 issue template 的明确引导（从现有 issue 格式推断），建议增设模板以收集结构化复现信息。

---

## 8. 待处理积压

**健康度警示**：当前所有活跃 Issue 与绝大多数 PR 均带 `[stale]` 标签，说明**仓库维护者响应节奏明显放缓**。具体情况：

### 长期未响应 Issue

| Issue | 创建时间 | 距今 | 严重度 | 状态 |
|---|---|---|---|---|
| [#1048](https://github.com/netease-youdao/LobsterAI/issues/1048) | 2026-03-30 | ~5.5 个月 | 🔴 P0 | OPEN / stale |
| [#1051](https://github.com/netease-youdao/LobsterAI/issues/1051) | 2026-03-30 | ~5.5 个月 | 🔴 P0 | OPEN / stale |
| [#1053](https://github.com/netease-youdao/LobsterAI/issues/1053) | 2026-03-30 | ~5.5 个月 | 🟠 P1 | OPEN / stale |
| [#1061](https://github.com/netease-youdao/LobsterAI/issues/1061) | 2026-03-30 | ~5.5 个月 | 🟡 P2 | OPEN / stale |
| [#1062](https://github.com/netease-youdao/LobsterAI/issues/1062) | 2026-03-30 | ~5.5 个月 | 🟡 P2 | OPEN / stale |
| [#1066](https://github.com/netease-youdao/LobsterAI/issues/1066) | 2026-03-30 | ~5.5 个月 | 🟠 P1 | OPEN / stale |

### 长期未合并 PR

共有 **8 条 OPEN PR** 处于 stale 状态，其中 5 条已有对应 Issue：
- [#1049](https://github.com/netease-youdao/LobsterAI/pull/1049) ⇄ [#1048](https://github.com/netease-youdao/LobsterAI/issues/1048)
- [#1052](https://github.com/netease-youdao/LobsterAI/pull/1052) ⇄ [#1051](https://github.com/netease-youdao/LobsterAI/issues/1051)
- [#1054](https://github.com/netease-youdao/LobsterAI/pull/1054) ⇄ [#1053](https://github.com/netease-youdao/LobsterAI/issues/1053)
- [#1056](https://github.com/netease-youdao/LobsterAI/pull/1056) — 清理生产代码 debug 日志
- [#1057](https://github.com/netease-youdao/LobsterAI/pull/1057) — 过滤 LLM judge 思考块
- [#1058](https://github.com/netease-youdao/LobsterAI/pull/1058) — 防止定时任务 JSONL 写入失败导致数据丢失
- [#1059](https://github.com/netease-youdao/LobsterAI/pull/1059) — Windows 默认浏览器检测修复
- [#1065](https://github.com/netease-youdao/LobsterAI/pull/1065) — 定时任务绑定已有会话

### 给维护者的建议

1. **优先审阅 P0 配套 PR**：[#1049](https://github.com/netease-youdao/LobsterAI/pull/1049) 与 [#1052](https://github.com/netease-youdao/LobsterAI/pull/1052) 直接解决强制登出与 AI 死锁，影响面大。
2. **批量合并低风险 PR**：如 [#1056](https://github.com/netease-youdao/LobsterAI/pull/1056)（清理 debug 日志）与 [#1054](https://github.com/netease-youdao/LobsterAI/pull/1054)（CSS 修复）属低风险改动，可快速消化积压。
3. **为无修复的 Issue 创建跟踪任务**：#1061、#1062、#1066 当前无对应 PR，建议明确认领人或纳入路线图。
4. **改进 stale bot 策略**：当前所有 issue 都被打上 stale，但维护者未跟进，可考虑关闭长期无回复的 P2/P3 issue 以聚焦资源。

---

## 总结

| 维度 | 评分 | 说明 |
|---|---|---|
| 代码提交活跃度 | ⭐⭐⭐ | 有 8 条待合并 PR + 2 条关闭，但合并量为 0 |
| Issue 响应度 |

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报

**日期：2026-09-13**
**数据周期：过去 24 小时**

---

## 1. 今日速览

Moltis 今日整体活跃度较低，处于**低频维护状态**。过去 24 小时内无 Issues 互动，无新版本发布，但代码侧有 3 个 PR 出现状态变化，其中 1 个被关闭，2 个仍待合并。提交内容集中在**平台集成完善**（新增 LLM 路由提供商）和**安全/协议约束**（TLS ALPN 收紧）两条主线，反映出项目当前处于**收尾与生态扩展并行**的阶段。整体健康度良好，核心维护工作有序推进，但社区讨论面偏静默，需关注长期开放 PR 的合并节奏。

---

## 2. 版本发布

无新版本发布。

---

## 3. 项目进展

### ✅ 已关闭：PR #1261 — TLS 协议约束收紧

- **链接**：[moltis-org/moltis#1261](https://github.com/moltis-org/moltis/pull/1261)
- **作者**：be-student
- **状态变化**：OPEN → CLOSED（2026-09-12 更新）

**核心变更**：
- 在 TLS 握手阶段仅广播 HTTP/1.1 作为 ALPN 协议，避免在不支持 RFC 8441（WebSocket over HTTP/2）的情况下出现协议协商歧义
- 在 TLS 配置测试中固定 ALPN 列表，防止回归
- 在贡献者文档中明确协议约束

**验证结果**：`cargo test -p moltis-tls` 全部 18 个用例通过。

**项目意义**：这是对长期 Issue [#245](https://github.com/moltis-org/moltis/issues/245) 的关闭响应，属于**底层协议安全性与可预测性**改进，是一次"防御性收尾"。未发现该 PR 是合并还是未合并关闭（状态为 CLOSED 而非 MERGED），建议关注其后续走向——若为未合并关闭，维护者可能需要另行方案；若已合并，则代表 moltis-tls 模块进入更稳定的协议契约。

### 🆕 新增待合并：PR #1265 — Telegram 共享聊天工具策略控制

- **链接**：[moltis-org/moltis#1265](https://github.com/moltis-org/moltis/pull/1265)
- **作者**：penso
- **创建时间**：2026-09-12

**核心变更**：修复 Issue [#1264](https://github.com/moltis-org/moltis/issues/1264)，将 Slack 已支持的 `untrusted_audience` 与 `untrusted_tools` 工具策略字段在 Telegram 通道上完整暴露，覆盖配置、运行时访问、存储序列化、脱敏 API 响应四个层面。

**项目意义**：这是一个**通道间功能对齐**型修复，使 Telegram 用户获得与 Slack 同等的细粒度工具调用控制能力，体现项目对多通道一致性的重视。

---

## 4. 社区热点

由于过去 24 小时 Issues 互动为 0，PR 评论数据为空（`comments: undefined`），社区讨论热度处于近 24 小时最低水平。

值得关注的"长时间积热"PR 是 **#1143**——自 7 月 2 日创建至 9 月 12 日仍有更新，已挂起 70 余天仍未合并：

- **链接**：[moltis-org/moltis#1143](https://github.com/moltis-org/moltis/pull/1143)
- **诉求**：将 Requesty（[requesty.ai](https://requesty.ai)）作为类 OpenAI 兼容提供商接入，复用 `openrouter` 的表驱动配置模式，base URL 为 `https://router.requesty.ai/v1`

**分析**：Requesty 是一个 OpenAI 兼容的 LLM 路由聚合服务，与项目既有的 OpenRouter 集成结构高度一致，理论上合并成本极低。长期挂起可能意味着维护者正在等待代码评审资源或更广泛的提供商集成策略评估。

---

## 5. Bug 与稳定性

| 严重程度 | 编号 | 描述 | 状态 | 修复 PR |
|---------|------|------|------|--------|
| 🟡 中 | [#1264](https://github.com/moltis-org/moltis/issues/1264) | Telegram 通道缺失 Slack 已支持的工具策略控制字段（`untrusted_audience`、`untrusted_tools`），导致 Telegram 用户在共享聊天场景下无法配置工具权限 | 已有 fix | [#1265](https://github.com/moltis-org/moltis/pull/1265) OPEN |
| 🟢 低 | [#245](https://github.com/moltis-org/moltis/issues/245) | TLS 握手阶段 ALPN 协议列表未约束，可能在不支持的场景下协商到非预期协议 | 已有 PR | [#1261](https://github.com/moltis-org/moltis/pull/1261) CLOSED（需确认合并状态） |

整体而言，过去 24 小时**无新增崩溃或回归类报告**，已存在的两条 Issue 均已有对应修复提交。

---

## 6. 功能请求与路线图信号

### 📡 新增 LLM 提供商请求（PR 形式）

- **Requesty 接入**（PR #1143）— 由社区贡献者 Thibaultjaigu 主动提交
- **信号**：项目对 OpenAI 兼容协议的提供商接入采用**表驱动 + 复用模式**，社区开发者可在低门槛下扩展生态。这暗示维护者倾向"接入层薄、模型路由可选"的策略。

### 🔧 多通道功能对齐

- PR #1265 体现了项目当前阶段的一项隐含路线图：**让所有外部通道（Telegram、Slack 等）的安全/权限配置能力对齐**。Slack 先实现的功能正向 Telegram 回填，未来若接入 Discord、Matrix 等通道，预计会延续这一模式。

### ⚠️ 长期未落地信号

- PR #1143 自 7 月起未合并，提示维护者可能在**重构提供商抽象层**，或暂时搁置非头部提供商集成。若属于前者，未来或有更大规模的"多提供商统一注册"重构 PR 出现。

---

## 7. 用户反馈摘要

**注**：因过去 24 小时 Issues 评论为空，无新直接用户反馈可提炼。从 PR 描述与既有 Issue 内容可推断出以下**用户场景与痛点**：

1. **多通道一致性痛点**：Telegram 用户曾因缺失工具策略控制（无法限制未受信受众的工具调用范围）而向 Slack 看齐——表明**跨平台部署用户**对权限模型统一性有明确诉求。
2. **聚合路由需求**：PR #1143 反映出有用户希望在不管理多套 API Key 的前提下，通过 Requesty 这类统一路由服务对接多家上游模型。
3. **底层协议可预测性**：TLS ALPN 收紧的诉求说明项目被部署在**对协议行为有严格合规要求的环境**（可能涉及企业网关、审计场景）。

---

## 8. 待处理积压

| 编号 | 类型 | 创建时间 | 已挂起 | 风险评估 |
|------|------|---------|--------|---------|
| [#1143](https://github.com/moltis-org/moltis/pull/1143) | PR (OPEN) | 2026-07-02 | ~72 天 | 🟡 中——长期挂起的社区贡献，可能打击贡献者积极性，且阻塞 Requesty 用户的接入需求 |
| [#1265](https://github.com/moltis-org/moltis/pull/1265) | PR (OPEN) | 2026-09-12 | 1 天 | 🟢 低——新提交，等待首轮评审 |
| [#1261](https://github.com/moltis-org/moltis/pull/1261) | PR (CLOSED) | 2026-09-06 | — | 🟢 低——已关闭，需确认是合并还是撤销关闭 |

**维护者建议关注项**：
- **PR #1143** 是当前最显眼的积压项，建议优先安排评审或向贡献者反馈当前阻塞原因
- **PR #1261** 关闭状态需明确（merged / closed without merge），以便社区理解 TLS 模块当前契约
- **Issue 互动为 0** 连续 24 小时属于正常范围，但若持续数周应警惕社区活跃度下滑

---

*报告生成时间：2026-09-13 · 数据来源：GitHub REST API · 覆盖周期：UTC-24h*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报
**日期：2026-09-13**

> 注：仓库 `agentscope-ai/CoPaw` 的 Issue 与 PR 仍以 `QwenPaw` 为命名标识，下文统一沿用仓库内的标题与链接表述。

---

## 1. 今日速览

CoPaw 在过去 24 小时内活跃度处于 **中等偏高** 水平：共产生 16 条 Issue 更新（14 条活跃/2 条关闭）以及 6 条待合并 PR，且无新版本发布。当前 Bug 报告高度集中在 **2.2.0 / 2.2.1** 这一版本窗口，主要涉及 MCP 连接、内存泄漏与桌面端稳定性，可见 2.x 升级带来了一波明显的回归潮。值得注意的是，社区响应效率较高，**多数高严重度 Bug 已对应提交了修复 PR**（如 #7721↔#7725、#7728↔#7729、#7726↔#7732、#7664↔#7719），形成「Bug 即日有 Fix」的良性节奏，但所有 PR 仍处于待合并状态，合并与发版节奏是接下来的关键观察点。

---

## 2. 版本发布

**无新版本发布。** 最近一次版本窗口为用户上报的 `2.2.0 / 2.2.1 / 2.2.1-beta.2 / 2.2.1b1`，本期所有 Bug 报告均围绕该窗口展开，强烈建议维护者在下一版本（例如 `2.2.2` 或 `2.2.1-hotfix`）集中打包本日已就绪的修复 PR。

---

## 3. 项目进展

本期共 6 条 PR 全部处于 **OPEN / 待合并** 状态，尚未推进至合并队列，但提交质量较高，**4 条直接对应今日新开的 Issue**，体现出较强的 issue→PR 闭环能力：

| PR | 标题 | 关联 Issue | 类型 |
|---|---|---|---|
| [#7732](https://github.com/agentscope-ai/QwenPaw/pull/7732) | fix(acp): select permission options by protocol kind | [#7726](https://github.com/agentscope-ai/QwenPaw/issues/7726) | ACP 权限匹配修复 |
| [#7729](https://github.com/agentscope-ai/QwenPaw/pull/7729) | fix(mcp): recognize Java jsonRpcError envelope on discover probe | [#7728](https://github.com/agentscope-ai/QwenPaw/issues/7728) | MCP 兼容 Java SDK |
| [#7725](https://github.com/agentscope-ai/QwenPaw/pull/7725) | fix(workspace): replace blocking watchfiles.awatch SSE watcher | [#7721](https://github.com/agentscope-ai/QwenPaw/issues/7721) | **关键修复：解决大仓库冻结整个 server** |
| [#7723](https://github.com/agentscope-ai/QwenPaw/pull/7723) | fix(console): emit an error event when stream_one fails | — | Console 流式错误可见性 |
| [#7719](https://github.com/agentscope-ai/QwenPaw/pull/7719) | feat(memory): allow a separate model for ReMeLight memory writing | [#7664](https://github.com/agentscope-ai/QwenPaw/issues/7664) | **降本关键特性** |
| [#7718](https://github.com/agentscope-ai/QwenPaw/pull/7718) | fix(telegram): render approval-card markdown via HTML parse_mode | — | Telegram 审批卡片渲染 |

**整体推进评估**：本期仓库在「修复」与「特性补强」两侧都有实质推进，但**没有任何 PR 进入合并队列**，距离用户能拿到修复版本还有 1–2 个发版周期的延迟，是当前最显著的瓶颈。

---

## 4. 社区热点

按评论数排序，最受关注的 Issue / PR 如下：

1. **[#7571](https://github.com/agentscope-ai/QwenPaw/issues/7571)** · `4 comments` · `@xiaohushi512` · 长时间跨版本持续讨论（创建于 9-5，多次更新）。反映插件开发场景下 Agent 路径记忆混乱，导致文件污染和源码覆盖事故。
2. **[#7724](https://github.com/agentscope-ai/QwenPaw/issues/7724)** · `3 comments` · 会话丢失叠加模型丢失，桌面端关键数据可靠性受到质疑。
3. **[#7484](https://github.com/agentscope-ai/QwenPaw/issues/7484)** · `3 comments` · A2A 协议时间表，明确诉求而非 Bug。
4. **[#7708](https://github.com/agentscope-ai/QwenPaw/issues/7708)** · `3 comments` · 已设置大模型无故丢失，与 #7724 同源。
5. **[#7715](https://github.com/agentscope-ai/QwenPaw/issues/7715)** · `3 comments` · Daily Paper 静默失败，错误信息误导排查。
6. **[#7582](https://github.com/agentscope-ai/QwenPaw/issues/7582)** · `2 comments` · 插件商店 UX 体验（已关闭，但诉求真实）。

**社区诉求归纳**：
- **可靠性焦虑**：用户连续遭遇会话/模型丢失（#7724、#7708），怀疑是底层持久化或迁移逻辑问题。
- **多端运维成本高**：`@One-sixth` 在 #7582 中提到在多台机器维护管家式部署，强烈需要一键更新与更新通知。
- **协议扩展预期**：`@qixinbo` 在 #7484 中明示了对 A2A / ACP 时间表的关注，提示维护者应主动同步 Roadmap。

---

## 5. Bug 与稳定性

按严重度自高至低排序：

| 严重度 | Issue | 描述 | 已有 Fix PR？ |
|---|---|---|---|
| 🔴 Critical | [#7722](https://github.com/agentscope-ai/QwenPaw/issues/7722) | 容器内存以 ~1MB/s 增长直至 OOM，三条路径叠加（无界流缓冲 / keep-alive 实例堆积 / doom-loop gate 绕过） | ❌ 暂无 |
| 🔴 Critical | [#7721](https://github.com/agentscope-ai/QwenPaw/issues/7721) | 工作区浏览器打开含大仓库时整个 server 冻结（`watchfiles.awatch` 同步阻塞） | ✅ [#7725](https://github.com/agentscope-ai/QwenPaw/pull/7725) |
| 🟠 High | [#7724](https://github.com/agentscope-ai/QwenPaw/issues/7724) | 会话与模型双双丢失 | ❌ 暂无 |
| 🟠 High | [#7716](https://github.com/agentscope-ai/QwenPaw/issues/7716) | 升级 2.2.x 后 MCP 无法连接（2.1.1b3 工作正常） | ❌ 暂无 |
| 🟠 High | [#7728](https://github.com/agentscope-ai/QwenPaw/issues/7728) | MCP `server/discover` 探测 Java SDK 返回 HTTP 500 + 非标 `jsonRpcError` 包络，导致 Driver 构建失败 | ✅ [#7729](https://github.com/agentscope-ai/QwenPaw/pull/7729) |
| 🟠 High | [#7708](https://github.com/agentscope-ai/QwenPaw/issues/7708) | 配置好的大模型无故丢失，需退出重选 | ❌ 暂无（与 #7724 同源） |
| 🟡 Medium | [#7727](https://github.com/agentscope-ai/QwenPaw/issues/7727) | kimi-code 的 Write 工具绕过越界写保护（`_paths` 抽取未识别） | ❌ 暂无 |
| 🟡 Medium | [#7726](https://github.com/agentscope-ai/QwenPaw/issues/7726) | ACP `trusted:true` 静默回退为交互式审批 | ✅ [#7732](https://github.com/agentscope-ai/QwenPaw/pull/7732) |
| 🟡 Medium | [#7720](https://github.com/agentscope-ai/QwenPaw/issues/7720) | Creator 插件将分镜阻塞隐藏在 `BLOCKED / GATED` 之后 | ❌ 暂无 |
| 🟡 Medium | [#7715](https://github.com/agentscope-ai/QwenPaw/issues/7715) | Daily Paper 在 arxiv 不可达时静默失败、错误被掩盖 | ❌ 暂无 |

**结论**：4/10 Bug 已有现成 PR 等待合并；其余 6 个（特别是两条 Critical 与 MCP 升级回归）尚无对应修复，建议优先处理 #7722、#7721、#7716 这三个直接影响可用性的问题。

---

## 6. 功能请求与路线图信号

| 诉求 | Issue / PR | 状态 / 评估 |
|---|---|---|
| ReMeLight 独立记忆模型（节省昂贵主模型 Token） | [#7664](https://github.com/agentscope-ai/QwenPaw/issues/7664) + [#7719](https://github.com/agentscope-ai/QwenPaw/pull/7719) | **高概率进入下一版本**：PR 已就绪 |
| A2A 协议（基于 2.x 统一 Driver 机制） | [#7484](https://github.com/agentscope-ai/QwenPaw/issues/7484) | **路线图级**：维护者需给出官方时间表 |
| 插件商店一键更新 / 更新通知 / 不再闪回列表 | [#7582](https://github.com/agentscope-ai/QwenPaw/issues/7582) | 已关闭但属于持续诉求，建议规划 |
| Files 面板显示 dot 文件开关 | [#7731](https://github.com/agentscope-ai/QwenPaw/issues/7731) | 小改动，可纳入下个小版本 |
| 插件目录离线降级（CDN 失败时返回空目录+error 而非 500） | [#7730](https://github.com/agentscope-ai/QwenPaw/issues/7730) | 兼具 Bug 与 Feature 性质 |

**路线图信号**：社区对**多协议扩展**（A2A / ACP）、**跨设备运维体验**、**成本优化（轻量记忆模型）**三个方向的关注度最高，与仓库 2.x 架构文档里强调的「统一 Driver」基调高度吻合。

---

## 7. 用户反馈摘要

从活跃 Issue 的原话中可提炼以下真实痛点：

- **痛点 A — 持久化不可信**：「明明有的（模型），只能退出去…正常使用，没有什么特殊流程，好几次了。」 → #7708。会话丢失（#7724）也属于同一类抱怨，用户开始怀疑版本升级引入了回归。
- **痛点 B — Agent 在多路径上下文下「记不住」**：「嫌 agent 运行时总是产生 TODO 文件在 ABC 路径都有…反复强调还是会记不住。」 → #7571。暴露了 workspace 约束机制薄弱的问题。
- **痛点 C — 部署事故**：「用脚本自动部署插件，把没开发的 A 路径代码把 C 运行时的给覆盖了，发生了好几次。」 → #7571。已影响到实际生产脚本。
- **痛点 D — 错误信息误导**：「提示…'completed with no returned content'…实际错误是 `httpx.ConnectError`」 → #7715。用户在排查上花费额外成本。
- **痛点 E — 多机

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目日报 · 2026-09-13

## 1. 今日速览

ZeroClaw 今日呈现**高强度运维与发布硬化**特征：过去 24 小时共 25 个 Issue 更新（含 19 个活跃、6 个关闭）、50 个 PR 更新（38 个待合并、12 个已合并/关闭），无新版本发布。维护者 **Audacity88** 与发布工程师 **JordanTheJet** 占据主导：前者处理运行时数据丢失与 ACP 状态机相关 P1 缺陷，后者集中提交 4 个面向 v0.8.6 的发布管线修复 PR（[#10815](https://github.com/zeroclaw-labs/zeroclaw/pull/10815)、[#10816](https://github.com/zeroclaw-labs/zeroclaw/pull/10816)、[#10817](https://github.com/zeroclaw-labs/zeroclaw/pull/10817)、[#10818](https://github.com/zeroclaw-labs/zeroclaw/pull/10818)），并新开 [#10814](https://github.com/zeroclaw-labs/zeroclaw/issues/10814) 跟踪"发布效率与可重复发布"批次。社区关注点高度集中于 **Windows CI 稳定性、S0 级内存数据丢失、ZeroCode TUI 体验**，项目整体健康度处于"主动修复 + 防御性硬化"阶段。

---

## 2. 版本发布

**无新版本发布。** 当前公开版本仍为 [v0.8.5](https://github.com/zeroclaw-labs/zeroclaw/releases)。维护团队正围绕 [Issue #10814](https://github.com/zeroclaw-labs/zeroclaw/issues/10814) 推进发布管线改进，旨在缩短 v0.8.6 准备与回滚时间，预期下一窗口将基于硬化后的工作流发布。

---

## 3. 项目进展

### 已关闭/合并的重要 PR

| PR | 标题 | 影响 |
|---|---|---|
| [#10169](https://github.com/zeroclaw-labs/zeroclaw/pull/10169) | docs(adr): ADR-014 plugin egress authority | 插件出口权限架构决策记录归档，闭合 RFC #8398 设计入口 |
| [#8862](https://github.com/zeroclaw-labs/zeroclaw/pull/8862) | feat(gateway): add governed plugin webhook ingress | 已 rebase 至 `ae8fc3ab18` 并完成合并；为后续 [#8949](https://github.com/zeroclaw-labs/zeroclaw/pull/8949) typed challenge replies 提供基础 |
| [#8949](https://github.com/zeroclaw-labs/zeroclaw/pull/8949) | feat(gateway): add typed plugin webhook challenge replies | 在 #8862 之上加入 GET 验证挑战；网关入口安全模型趋于完整 |

### 已关闭的重要 Issue（6 个）

| Issue | 主题 | 状态 |
|---|---|---|
| [#10534](https://github.com/zeroclaw-labs/zeroclaw/issues/10534) | bounded delegates silently strip the delegate tool | 关闭（由 [#9753](https://github.com/zeroclaw-labs/zeroclaw/pull/9753) 修复闭环） |
| [#10689](https://github.com/zeroclaw-labs/zeroclaw/issues/10689) | Telegram voice reply skipped on `[` prefix | 关闭 |
| [#10277](https://github.com/zeroclaw-labs/zeroclaw/issues/10277) | Pin zerorelay image base tags by digest | 关闭（CI 镜像供应链加固） |
| [#10731](https://github.com/zeroclaw-labs/zeroclaw/issues/10731) | `zeroclaw service logs` prints nothing on macOS/Windows/OpenRC | 关闭 |
| [#10699](https://github.com/zeroclaw-labs/zeroclaw/issues/10699) | cost ledger cache writes at plain input rate | 关闭（定价模型补齐 cache_write 字段） |
| [#10436](https://github.com/zeroclaw-labs/zeroclaw/issues/10436) | Native OpenRouter streaming uses total request timeout | 关闭 |

**进展评估：** 关闭/合并的 9 个工作项（3 PR + 6 Issue）合计覆盖了**网关入口安全、镜像供应链、成本账本、跨平台守护进程日志、provider 流式超时、delegation 工具剥离**等历史痛点，项目净问题趋势向好。

---

## 4. 社区热点

按 Issue 评论密度排序：

- **[#10734](https://github.com/zeroclaw-labs/zeroclaw/issues/10734)** — *RpcDispatcher::process_line 接近 2MB 栈警戒线*（6 评论，P1，已 in-progress）
  讨论焦点：Windows 栈溢出触发 `0xc00000fd`，暴露 `process_line_session_new_creates_session_on_two_mega...` 测试在 `Advisory Windows nextest` 上不稳定。深层诉求是**消除 advisory job 的隐式栈限制假设**。
- **[#10788](https://github.com/zeroclaw-labs/zeroclaw/issues/10788)** — *Failed Code/ACP turn 丢弃已接受的 prompt 与工具交换*（2 评论，P1，zerocode）
  反映 ACP 持久化层语义模糊：失败回合应保留部分产物还是整体回滚？是面向"防误用"还是"防数据丢失"的设计抉择。
- **[#10534](https://github.com/zeroclaw-labs/zeroclaw/issues/10534)** — *bounded delegates silently strip the delegate tool*（2 评论，P2，已关闭）
  表达对 `delegation_policy/max_delegation_depth` 配置"被静默忽略"的强烈不满。
- **[#10689](https://github.com/zeroclaw-labs/zeroclaw/issues/10689)** — *Telegram voice reply skipped on `[` prefix*（2 评论，P2，已关闭）
  ElevenLabs v3 audio tag 与 TTS 文本判定路径冲突，社区希望保留音频标签语义。
- **[#10277](https://github.com/zeroclaw-labs/zeroclaw/issues/10277)** — *Pin zerorelay image base tags by digest*（1 评论，P2，已关闭）
  来源 #10142 review 的供应链跟进项，体现社区对**镜像不可变基座**的共识。

> 整体诉求集中在：**栈与进程模型可靠性**、**ACP 失败语义**、**配置即承诺**、**镜像供应链可重现**。

---

## 5. Bug 与稳定性

### S0 — 数据丢失 / 安全风险（最高优先级）

| Issue | 描述 | 状态 | 是否有修复 PR |
|---|---|---|---|
| [#10797](https://github.com/zeroclaw-labs/zeroclaw/issues/10797) | `MarkdownMemory::store` 并发覆盖丢失条目（snapshot+无锁写入） | accepted，in-progress | 暂未见公开修复 PR（高优先，需立即补） |

### S1 — 工作流阻塞

| Issue | 描述 | 状态 | 是否有修复 PR |
|---|---|---|---|
| [#10807](https://github.com/zeroclaw-labs/zeroclaw/issues/10807) | MCP 连接一次失败恢复即永久中毒（HTTP/SSE 短暂不可达后只做一次 reset+handshake） | 新开 | 暂未见 PR |

### S2 — 行为降级

| Issue | 描述 | 状态 | 是否有修复 PR |
|---|---|---|---|
| [#10788](https://github.com/zeroclaw-labs/zeroclaw/issues/10788) | Failed Code/ACP turn 丢弃已接受 prompt 与完成工具交换 | in-progress | 暂未见 PR |
| [#10785](https://github.com/zeroclaw-labs/zeroclaw/issues/10785) | zerocode 通知延迟误触发 `session/cancel`，三个 ~200k token 会话被同时取消 | in-progress | 暂未见 PR |
| [#10787](https://github.com/zeroclaw-labs/zeroclaw/issues/10787) | Reliable provider 单候选流恢复忽略 `provider_retries`，529 仅 1 次立即重试无退避 | in-progress | 暂未见 PR |
| [#10795](https://github.com/zeroclaw-labs/zeroclaw/issues/10795) | `zeroclaw agent` 交互 REPL 未启用 `IUTF8`，Backspace 按字节删除多字节字符 | accepted | 暂未见 PR |
| [#10731](https://github.com/zeroclaw-labs/zeroclaw/issues/10731) | `service logs` 在 macOS/Windows/OpenRC 健康守护进程下无输出 | accepted → **已关闭** | ✅ |
| [#10436](https://github.com/zeroclaw-labs/zeroclaw/issues/10436) | Native OpenRouter streaming 总请求超时切断活跃响应 | **已关闭** | ✅ |
| [#10689](https://github.com/zeroclaw-labs/zeroclaw/issues/10689) | Telegram voice reply 以 `[` 开头时被静默跳过 | **已关闭** | ✅ |
| [#10699](https://github.com/zeroclaw-labs/zeroclaw/issues/10699) | 成本账本对 cache-write 错按 input 价计费 | **已关闭** | ✅ |
| [#10534](https://github.com/zeroclaw-labs/zeroclaw/issues/10534) | bounded delegates 静默剥离 delegate 工具 | **已关闭** | ✅（由 [#9753](https://github.com/zeroclaw-labs/zeroclaw/pull/9753) 闭环） |

### S3 — 小问题

| Issue | 描述 | 状态 |
|---|---|---|
| [#10734](https://github.com/zeroclaw-labs/zeroclaw/issues/10734) | RpcDispatcher Windows 栈溢出（advisory job） | in-progress（评论最多） |
| [#10793](https://github.com/zeroclaw-labs/zeroclaw/issues/10793) | Windows 三个测试孤立失败（与代码无关） | in-progress |
| [#10794](https://github.com/zeroclaw-labs/zeroclaw/issues/10794) | `publish_contract::published_crates_never_include_files_outside_their_own_directory` Windows 失败 | in-progress |
| [#10805](https://github.com/zeroclaw-labs/zeroclaw/issues/10805) | control_plane liveness 测试在 Windows 上与 teardown 竞态 | in-progress |
| [#10796](https://github.com/zeroclaw-labs/zeroclaw/issues/10796) | ZeroCode chat input 忽略 Delete 键 | accepted（good first issue） |
| [#10802](https://github.com/zeroclaw-labs/zeroclaw/issues/10802) | `session/list-acp` 与 `turn_end` 报告不同 `message_count` | accepted，in-progress |

> **关键风险**：S0 [#10797](https://github.com/zeroclaw-labs/zeroclaw/issues/10797) markdown memory 数据丢失目前**无公开修复 PR**，且直接面向用户长期记忆——这是当前最值得维护者立即响应的卡点。

---

## 6. 功能请求与路线图信号

| 需求 | 来源 Issue | 是否已有相关 PR | 路线图概率 |
|---|---|---|---|
| 可配置 Telegram 未授权发送方提示，感知授权路径 | [#10400](https://github.com/zeroclaw-labs/zeroclaw/issues/10400) | 无 | 中（已 in-progress，下个迭代大概率纳入） |
| WhatsApp PDF 文档填充 `DocumentMessage.jpegThumbnail` 以便手机端预览 | [#10812](https://github.com/zeroclaw-labs/zeroclaw/issues/10812) | 无 | 高（实现成本低、生态反馈明确） |
| ZeroCode daemon 启动诊断本地化（含 socket-path 超时提示） | [#10789](https://github.com/zeroclaw-labs/zeroclaw/issues/10789) | 无 | 高（good first issue） |
| 文档：Windows 守护进程 reload-refusal 后恢复说明按平台分述 | [#10792](https://github.com/zeroclaw-labs/zeroclaw/issues/10792) | 无 | 高（good first issue） |
| 本地 RPC writer 终态失败后下线连接 | [#10791](https://github.com/zeroclaw-labs/zeroclaw/issues/10791) | [#10262](https://github.com/zeroclaw-labs/zeroclaw/pull/10262)（已合并，此为延展） | 中 |
| Single-candidate 流恢复尊重 `provider_retries` | [#10787](https://github.com/zeroclaw-labs/zeroclaw/issues/10787) | 无 | 高（与 provider reliability 路线契合） |

**路线图观察：** 维护者 [Audacity88](https://github.com/Audacity88) 主导的 agent lifecycle mutations（[#10621](https://github.com/zeroclaw-labs/zeroclaw/pull/10621)，size XL）与 history trim 重构（[#10696](https://github.com/zeroclaw-labs/zeroclaw/pull/10696)）说明 v0.8.6 之后的方向是**"统一会话生命周期 + provider 容错 + 可重现发布"** 三位一体。

---

## 7. 用户反馈摘要

受 Issue 评论密度所限，提炼自 25 条更新中的描述信号：

- **可靠性诉求最强烈**：[#10785](https://github.com/zeroclaw-labs/zeroclaw/issues/10785) 报告的"3 个 ~200k-token 会话被毫秒级同时取消"事件暴露出 zerocode 在长上下文协作下的脆弱性，用户期望运行中 turn 不被通知恢复流程意外打断。
- **配置一致性诉求**：[#10534](https://github.com/zeroclaw-labs/zeroclaw/issues/10534) 中"配置写了但不生效"的静默失败是用户最不满意的体验——其修复 PR [#9753](https://github.com/zeroclaw-labs/zeroclaw/pull/9753) 通过 risk-profile schema 区分 absent vs empty 进行了根治。
- **多平台一致性**：[#10731](https://github.com/zeroclaw-labs/zeroclaw/issues/10731)（日志不可见）、[#10795](https://github.com/zeroclaw-labs/zeroclaw/issues/10795)（Backspace 行为）、[#10734](https://github.com/zeroclaw

</details>

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*