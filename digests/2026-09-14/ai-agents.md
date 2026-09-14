# OpenClaw 生态日报 2026-09-14

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-09-14 02:52 UTC

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

# OpenClaw 项目日报 · 2026-09-14

## 1. 今日速览

OpenClaw 今日维持高位活跃：24 小时内 Issues 更新 500 条（新开/活跃 259，关闭 241），PR 更新 500 条（待合并 271，合并/关闭 229），但 **零版本发布**。当前仓库处于 **2026.9.2 → 2026.9.3 → 2026.9.4 升级链可靠性攻坚期**，至少 6 个 P0 issue 直指升级失败 / Doctor 拒签 / Windows 平台升级交接问题，维护团队（steipete、vincentkoc、RomneyDa）正在密集提交修复 PR 与回归测试。整体看，社区讨论热度高，但稳定性子项承压，项目健康度评估为 **活跃但波动**。

---

## 2. 版本发布

**无新版本发布。** 当前主线仍为 2026.9.4，存在多个待修复的升级路径缺陷（见 §5）。

---

## 3. 项目进展

今日合并/关闭 229 个 PR，其中可识别的关键推进：

| 方向 | 代表 PR | 说明 |
|---|---|---|
| **升级链路健壮性** | [#147720](https://github.com/openclaw/openclaw/pull/147720)、[#145786](https://github.com/openclaw/openclaw/pull/145786)、[#144811](https://github.com/openclaw/openclaw/pull/144811)、[#147677](https://github.com/openclaw/openclaw/pull/147677) | `fix(update)` 系列：让 update driver 进入 maintenance、等待 startup migration、向重启命令透传 operator timeout、真正显示一次失败原因；同时支持 Windows npm launcher 与 dirty checkout 迁移 |
| **性能 / 冷启动优化** | [#147727](https://github.com/openclaw/openclaw/pull/147727)、[#147672](https://github.com/openclaw/openclaw/pull/147672)（已关闭）、[#147664](https://github.com/openclaw/openclaw/pull/147664)（已关闭）、[#147663](https://github.com/openclaw/openclaw/pull/147663)（已关闭） | 会话历史校验、log redaction、插件调用、SQLite prepared statement 复用，热路径 CPU 与对象分配显著下降 |
| **iOS / Android Cloudflare Access 拥有化** | [#147238](https://github.com/openclaw/openclaw/pull/147238)、[#147305](https://github.com/openclaw/openclaw/pull/147305)、[#147307](https://github.com/openclaw/openclaw/pull/147307)、[#147094](https://github.com/openclaw/openclaw/pull/147094) | 由 vincentkoc 主导，将 browser Access sign-in、profile grant ownership、撤回路径统一到一个 owner |
| **Subagent 可观察性** | [#147571](https://github.com/openclaw/openclaw/pull/147571)、[#147666](https://github.com/openclaw/openclaw/pull/147666)、[#147753](https://github.com/openclaw/openclaw/pull/147753) | 区分"执行中 / 等待子任务 / 等待输入 / 完成但仍在派送结果"；UI 端用统一 claw 动画表达 subagent 状态 |
| **Gateway 协议层** | [#147707](https://github.com/openclaw/openclaw/pull/147707)、[#147070](https://github.com/openclaw/openclaw/pull/147070) | slow-consumer 1008 close frame 在断 socket 前 flush；native upgrade headers 等待逻辑前置到 transport 层 |
| **Voice Call / Voice Stream** | [#147689](https://github.com/openclaw/openclaw/pull/147689) | 显式传递 state runtime 到 manager 与持久化路径，QA maturity run 34681094383 中暴露的两项稳定性缺陷被修复 |
| **文档与 i18n** | [#147377](https://github.com/openclaw/openclaw/pull/147377)、[#132848](https://github.com/openclaw/openclaw/pull/132848)、[#147747](https://github.com/openclaw/openclaw/pull/147747)、[#147578](https://github.com/openclaw/openclaw/pull/147578)（已关闭） | 释义表不再强制为版本号生成条目；SecretRef "default" 别名澄清；QA 自动化 |

**项目整体推进评估**：在升级可靠性、性能冷启动、移动端 Access 认证、subagent 可观察性四个方向有明显收敛，单日合并 PR 数量较高，但 *没有可交付的新版本*，意味着问题修复的累积尚未触发新的 release 切割。

---

## 4. 社区热点

按评论数排序的活跃 Issues：

1. **[#25592](https://github.com/openclaw/openclaw/issues/25592)** — *Text between tool calls leaks to messaging channels*（40 评论，💎 diamond lobster，自 2026-02-24 起长期 OPEN）
   工具调用之间的内部文本（错误处理、ack、narration）被路由到 Slack/iMessage 等用户可见频道。诉求集中在**内部输出与用户消息边界的清晰划分**。

2. **[#97616](https://github.com/openclaw/openclaw/issues/97616)** — *OpenClaw leaks unreaped hook/tool child processes, causing zombie accumulation*（30 评论）
   hook / tool 子进程未被回收，长时间运行后 `openclaw-hooks`、`bash`、`codex` 累积为僵尸，runtime degradation。

3. **[#44925](https://github.com/openclaw/openclaw/issues/44925)** — *Subagent completion silently lost — no retry, no notification, no auto-restart on timeout*（28 评论，💎 diamond lobster）
   E31/E42/E45 等多种失败模式下，subagent 完成信号丢失，用户层既不重试也不通知。社区痛点：**subagent 投递不可靠**。

4. **[#135111](https://github.com/openclaw/openclaw/issues/135111)**（已关闭） — *Intermittent "Provider completed tool call with malformed JSON arguments" on v2026.8.1*（27 评论）
   与版本绑定、不绑定具体文件 / 工具，claude-sonnet-5 上复现 ~6 次。**已关闭但未在摘要中给出修复 PR 链接**，需关注是否真正落地。

5. **[#91009](https://github.com/openclaw/openclaw/issues/91009)** — *Codex PreToolUse native hook relay spawns CPU-bound openclaw-hooks processes and stalls gateway RPC*（23 评论，P0，💎 silver shellfish）
   与 [#97616](https://github.com/openclaw/openclaw/issues/97616) 形成同一根因的两面观察：hook 子进程失控 + Gateway RPC 阻塞。

6. **[#119720](https://github.com/openclaw/openclaw/issues/119720)** — *Synchronous agent persistence and transcript maintenance block the Gateway event loop at scale*（19 评论，💎 diamond lobster）
   早期通过 #140231、#138984 部分修复，但仍被维护者标记为需要持续观察。

**聚合诉求**：内部文本泄漏到消息频道、subagent 完成事件丢失、子进程泄漏——三者共同指向 OpenClaw **"边界（user-visible vs internal）+ 子进程生命周期 + 异步派发"** 三大结构性弱点。

---

## 5. Bug 与稳定性

### 🔴 P0 — 升级链路 / Doctor / 平台级崩溃

| Issue | 标题 | 是否已有 fix PR |
|---|---|---|
| [#145510](https://github.com/openclaw/openclaw/issues/145510) | Update failure: runtime-verification-failed (2026.9.3) | 间接命中 [#147762](https://github.com/openclaw/openclaw/pull/147762)、[#147720](https://github.com/openclaw/openclaw/pull/147720) |
| [#146394](https://github.com/openclaw/openclaw/issues/146394) | Update failure: global-install-failed (2026.9.3) | 待指派 |
| [#146860](https://github.com/openclaw/openclaw/issues/146860) | Windows: managed update handoff cannot obtain process start identity | 待指派 |
| [#147160](https://github.com/openclaw/openclaw/issues/147160) | Update failure: finalize:doctor (2026.9.4) | 间接命中 [#147720](https://github.com/openclaw/openclaw/pull/147720) |
| [#145192](https://github.com/openclaw/openclaw/pull/145192) | 2026.9.2 → 2026.9.4 managed update fails at candidate-Doctor | 部分命中 [#145786](https://github.com/openclaw/openclaw/pull/145786) |
| [#146958](https://github.com/openclaw/openclaw/issues/146958)（已关闭） | Released 2026.9.2 → 2026.9.3 update fails after core switch | 已关闭 |
| [#135776](https://github.com/openclaw/openclaw/issues/135776)（已关闭） | update leaves exact-pinned official channel plugins on previous release | 已关闭 |
| [#91009](https://github.com/openclaw/openclaw/issues/91009) | Codex PreToolUse native hook relay stalls gateway RPC | **无明确 fix PR** |
| [#145252](https://github.com/openclaw/openclaw/issues/145252) | [Tracking] 2026.9.3 / 2026.9.4 update reliability | 跟踪性 issue |
| [#144911](https://github.com/openclaw/openclaw/issues/144911) | MCP server init timeout crashes the Gateway | 标签 `queueable-fix`，**无明确 fix PR** |
| [#143524](https://github.com/openclaw/openclaw/issues/143524) | Agent SQLite WAL grows to 1.4–2.8 GB | **无明确 fix PR** |

### 🟠 P1 — 回归 / 数据丢失 / 消息丢失

- [#141252](https://github.com/openclaw/openclaw/issues/141252)（已关闭） — 2026.9.2 regression: "Reply operation has no active tool authority snapshot"
- [#139847](https://github.com/openclaw/openclaw/issues/139847) — message sent while reply run is active dropped
- [#143334](https://github.com/openclaw/openclaw/issues/143334) — Lost subagent completion delivery parks requester in settle-yield
- [#113701](https://github.com/openclaw/openclaw/issues/113701) — Context Overflow: large tool outputs exceed context window, sessions enter failure loop
- [#101929](https://github.com/openclaw/openclaw/issues/101929) — context-overflow-midturn-precheck estimator over-counts ~2.3-2.6x
- [#118885](https://github.com/openclaw/openclaw/issues/118885) — Redundant full SQLite integrity checks during one startup
- [#146118](https://github.com/openclaw/openclaw/issues/146118) — #123737 superseded-task compaction guard doesn't cover Codex-native
- [#141474](https://github.com/openclaw/openclaw/issues/141474) — Collector child calling sessions_yield strands agents_wait forever
- [#144809](https://github.com/openclaw/openclaw/issues/144809) — claude-cli: turns longer than RUN_STALE_TAKEOVER_MS lose entire reply
- [#135111](https://github.com/openclaw/openclaw/issues/135111)（已关闭） — v2026.8.1 malformed JSON arguments
- [#145563](https://github.com/openclaw/openclaw/issues/145563)（已关闭） — WeChat channel reply dispatch fails with PreparedModelCatalogConfigReplacedError
- [#140162](https://github.com/openclaw/openclaw/issues/140162)（已关闭） — Windows: gateway restart kills ready/slow-booting gateway as "stale process"
- [#137927](https://github.com/openclaw/openclaw/issues/137927)（已关闭） — Internal context block leaks into visible Telegram message
- [#145503](https://github.com/openclaw/openclaw/issues/145503)（已关闭） — skill_workshop tool not registered after 2026.9.3 Workshop migration

### 🟡 P1/P2 — Telegram / 上下文溢出 / 平台特定

- [#143278](https://github.com/openclaw/openclaw/issues/143278) — Heartbeat internal output leaks to Telegram user chat
- [#114612](https://github.com/openclaw/openclaw/issues/114612) — memory_index_chunks + memory_embedding_cache unbounded growth
- [#134993](https://github.com/openclaw/openclaw/issues/134993) — Gateway pegs one CPU core after 2026.8.1 upgrade
- [#139710](https://github.com/openclaw/openclaw/issues/139710) — mid-turn plugin-generation supersede kills system-agent turn
- [#123009](https://github.com/openclaw/openclaw/issues/123009) — Recheck native Codex subscription blocks every 5 minutes
- [#108435](https://github.com/openclaw/openclaw/issues/108435)（已关闭） — update to 2026.7.1: gateway fails to start
- [#87756](https://github.com/openclaw/openclaw/issues/87756) — Lobster workflow hangs on nested /tools/invoke when launched from agent prompt

**整体信号**：升级链路 P0 集中爆发；subagent 派送回归被反复报告；SQLite WAL / memory 表无保留策略是 **沉默但致命** 的长期债务。

---

## 6. 功能请求与路线图信号

| 功能诉求 | Issue | 已有 PR / 实现迹象 |
|---|---|---|
| Sub-agent `announceTarget` 路由选项 | [#27445](https://github.com/openclaw/openclaw/issues/27445)（已关闭） | 已有 linked PR；与 [#147571](https://github.com/openclaw/openclaw/pull/147571) 方向一致 |
| `maxTurns` / `maxToolCalls` 配置项 | [#9912](https://github.com/openclaw/openclaw/issues/9912) | 长期开放（自 2026-02-05），无明确 PR |
| Browser tool `force` 参数 + `evaluate` action | [#60381](https://github.com/openclaw/openclaw/issues

---

## 横向生态对比

# 个人 AI 助手/智能体开源生态横向对比分析报告

**报告周期**：2026-09-13 至 2026-09-14（UTC）
**覆盖项目**：OpenClaw / NanoBot / Hermes Agent / PicoClaw / NanoClaw / NullClaw / IronClaw / LobsterAI / TinyClaw / Moltis / CoPaw / ZeptoClaw / ZeroClaw

---

## 1. 生态全景

2026-09-14 的数据呈现出**典型的"哑铃型"生态结构**：以 OpenClaw 为代表的成熟项目（OpenClaw、ZeroClaw、Hermes Agent）单日仍能维持 500 / 50 / 37 量级的 Issue 与 PR 吞吐，但同时有 4 个项目（PicoClaw、NullClaw、IronClaw、TinyClaw）当日 Issue + PR 总数不足 5 条，已进入纯维护或准休眠状态。**Moltis 是当日唯一完成新版本发布的项目**（v20260913.02），其余 12 个项目均处于"无版本但有提交"或"无提交"的非发布日。社区关注度高度集中在**升级链路可靠性、Subagent 派送可靠性、SQLite/WAL 一致性、跨会话持久记忆**四大共性议题上，且**MemCode CEO Vivek Gupta 24 小时内向至少 4 个项目（LobsterAI、TinyClaw、ZeptoClaw、Moltis）提交了高度同构的"durable memory"集成提案**，表明外部记忆服务正在成为该生态的下一波集成热点。

---

## 2. 各项目活跃度对比

| 项目 | 24h Issue 活跃 | 24h PR 活跃 | 新版本 | 当日合并/关闭 PR | 健康度评估 | 主轴 |
|---|---|---|---|---|---|---|
| **OpenClaw** | 500（259 新/活跃 + 241 关闭） | 500（271 待合并 + 229 关闭） | ❌ | 229 | 🟡 活跃但波动 | 升级链路攻坚 + Subagent 可观察性 |
| **ZeroClaw** | 37（32 活跃 + 5 关闭） | 50（**全部待合并**） | ❌ | 0 | 🟡 高讨论低合并 | RFC 治理改革 + Provider 可靠性 |
| **Hermes Agent** | 50（45 + 5） | 50（49 + 1） | ❌ | 1 | 🟠 承压明显 | SQLite/WAL + macOS 桌面 |
| **CoPaw** | 8 | 19（17 + 2） | ❌ | 2 | 🟢 中等偏好 | 国际化 + 定时任务 + Hub 运维 |
| **NanoClaw** | 5（4 + 1） | 16（14 + 2） | ❌ | 2 | 🟢 稳步迭代 | Fresh Install 体验 + Mattermost 适配器 |
| **NanoBot (HKUDS)** | 0 | 8（6 + 2） | ❌ | 2 | 🟡 中等健康 | 安全加固 + WebUI |
| **Moltis** | 2 | 4（0 + 4） | ✅ v20260913.02 | 4 | 🟢 高效闭环 | 推理控制 + 多通道工具治理 |
| **LobsterAI** | 4 | 5（4 + 1） | ❌ | 1 | 🔴 维护空窗 | P0 安全积压 + 持久记忆 |
| **PicoClaw** | 5（3 + 2 stale） | 4（**全部 stale 关闭**） | ❌ | 0 | 🔴 低活跃 | 多通道适配 + WebUI 性能 |
| **ZeptoClaw** | 1 | 0 | ❌ | 0 | 🟡 静默运营 | 仅外部集成咨询 |
| **TinyClaw** | 1 | 0 | ❌ | 0 | 🟡 静默运营 | 仅外部集成咨询 |
| **IronClaw** | 0 | 5（仅 Dependabot） | ❌ | 0 | 🔴 纯依赖维护 | WASM/Rust 生态跟进 |
| **NullClaw** | 0 | 0 | ❌ | 0 | ⚫ 休眠 | — |

**结构性观察**：在 13 个项目中，仅 **Moltis 一家做到了"当日闭环 + 当日发版"**；OpenClaw 与 ZeroClaw 形成了鲜明对比——前者合并了 229 个 PR 但仍无版本，后者 50 个 PR 全部积压——这反映出不同项目在"主干准入门槛"上的策略差异。

---

## 3. OpenClaw 在生态中的定位

**OpenClaw 是该生态无可争议的"度量衡基准"**：单日 500 / 500 的 Issue+PR 流量约为第二名 ZeroClaw 的 10 倍、第三名 Hermes Agent 的 10 倍，单日合并 229 个 PR 是其余 12 个项目之和的近 4 倍。其在生态中的定位可概括为三点：

| 维度 | OpenClaw 优势 | 与同类的差异 |
|---|---|---|
| **覆盖面** | 同时覆盖 CLI / Desktop / iOS / Android / Gateway / Subagent / Voice Call / Browser Tools | Hermes Agent 偏 Desktop+macOS、CoPaw 偏 Console+Hub、ZeroClaw 偏 CLI+TUI，**无项目具备 OpenClaw 的全平台矩阵** |
| **议题深度** | 升级链路可靠性（6 个 P0）+ Subagent 可观察性 + Voice Stream + Gateway 协议层 | Hermes Agent 集中于 SQLite/WAL；ZeroClaw 集中于 Provider 可靠性；**OpenClaw 的议题分布最广也最深** |
| **社区规模** | steipete、vincentkoc、RomneyDa 等核心维护者形成"三驾马车"，PR 单日合并 229 条 | Hermes Agent 高度依赖 @teknium1 个人，NanoBot 缺少 Issue 入口，PicoClaw/IronClaw 几乎是维护者缺席状态 |
| **路线收敛度** | 在升级链路、性能冷启动、移动端 Access 认证、Subagent 可观察性四个方向已形成明显收敛 | Moltis 单日同时推进"推理档位 + Telegram 策略"，但议题面较窄；NanoClaw 在 Setup 与 Mattermost 两条线收敛，但规模较小 |

**技术路线差异**：OpenClaw 的核心架构选择是 **"managed update + Gateway event loop + 多通道适配器"**，这种"重型 CLI + 后台服务"的形态决定了它在升级链路、Doctor 拒签、跨进程通信上承担了最多的工程复杂度。ZeroClaw 选择"Rust + RPC dispatcher + SOP engine"路线更轻量但也带来了 Windows 栈溢出（#10734）等平台问题；Hermes Agent 走"Desktop + TUI + 跨 profile"路线，避开了大规模升级链路问题但承担了 SQLite WAL 跨平台一致性代价；Moltis 走"快速闭环 + 单日发版"路线，体现了对主干准入门槛的另一种取舍。

---

## 4. 共同关注的技术方向

通过对当日所有项目议题的交叉分析，可识别出 **7 个跨项目共性方向**：

| # | 共性方向 | 涉及项目与代表 Issue |
|---|---|---|
| 1 | **持久化用户/工作区记忆（Durable Memory）** | LobsterAI #2660、TinyClaw #296、ZeptoClaw #678、Moltis #1268（**同一提案方 MemCode CEO Vivek Gupta**） |
| 2 | **SQLite / WAL 跨平台一致性** | Hermes Agent #109966/#109641、OpenClaw #143524（Agent SQLite WAL 增长至 1.4–2.8 GB） |
| 3 | **Subagent 派送可靠性与可观察性** | OpenClaw #44925/#143334/#119720、Hermes Agent #98382 |
| 4 | **升级链路/迁移可靠性** | OpenClaw 6 个 P0（#145510/#146394/#147160/#145192 等）、NanoClaw #3801（更新覆盖本地补丁） |
| 5 | **Provider 路由与外部兼容层稳定性** | ZeroClaw #10603（OpenCode session header）/ #10787（Anthropic 529）/ #10779（OpenCode 429）、Hermes Agent #110442（Ollama 工具名冲突） |
| 6 | **多通道工具策略一致性** | OpenClaw（#143278 Telegram 泄漏）、Hermes Agent #107899（WhatsApp 状态/诊断信息泄露）、Moltis #1264/#1265（Telegram 工具权限对齐 Slack） |
| 7 | **跨平台路径/路径遍历安全** | NanoBot #5633（CVE 级 session key 路径遍历）、LobsterAI #1041/#1042（SSRF + 任意文件读取）、Hermes Agent #110416（会话凭据未脱敏） |

**最值得关注的信号**：方向 #1 的"持久记忆"在 24 小时内被同一个外部提案方向 4 个项目递交，反映出**个人 AI 助手赛道正在形成"本地/外接双层记忆架构"的共识**——本地负责即时上下文与隐私敏感数据，外部负责跨设备、跨会话、跨应用的长程记忆。这是行业级的范式信号。

---

## 5. 差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 技术架构关键差异 |
|---|---|---|---|
| **OpenClaw** | 全平台 Agent OS：CLI + Desktop + 移动端 + Voice + Subagent | 高级个人用户 / 团队 / 跨平台部署 | Node + 多通道适配器 + 升级驱动 + Gateway event loop |
| **ZeroClaw** | CLI/TUI + 强 SOP 引擎 + RFC 治理 | 极客 / 治理驱动型社区 | Rust + RPC dispatcher + SOP workflow engine |
| **Hermes Agent** | Desktop + TUI 深度集成 + 多 profile | macOS 重度桌面用户 / 多身份场景 | Python + Desktop 适配 + profile 隔离 + SQLite WAL |
| **CoPaw** | Console + 多 Bot 通道 + Hub 模式 | 企业运维 / 拉美国际化（新增 pt-BR） | 模块化 plugin + i18n + Hub 管控 |
| **Moltis** | 推理控制 + 多通道治理 + 快速发版 | 高级用户 / 集成方 | 单日发版节奏 + 精细推理档位 |
| **NanoClaw** | Fresh Install 友好 + Mattermost 集成 | 新用户 / 团队聊天场景 | 初始化体验优先 + delivery_mode 配置 |
| **NanoBot (HKUDS)** | WebUI + 安全加固 + 长会话检索 | Web 端用户 / 安全敏感场景 | JsonlSessionStore + 路径校验 |
| **PicoClaw** | 嵌入式 + 轻量 + 多通道 | RV1106 / RISC-V / 资源受限设备 | Go + 低算力适配 + i18n |
| **ZeptoClaw** | "极小 Rust 二进制"+ local-first | 隐私原教旨主义者 | Rust + 本地优先 + 工具/记忆/通道/Sandbox |
| **IronClaw** | WASM 沙箱 + Rust 生态 | WASM 技术栈追随者 | Rust + wasmtime + WASI |
| **LobsterAI** | 多场景研究/文档/幻灯片/视频/Web | 内容创作者 / 企业协作 | Electron + IPC + MemCode 集成意向 |
| **TinyClaw** | Agent 团队跨运行记忆 | "一人公司" / 多 Agent 编排 | — |
| **NullClaw** | — | — | 休眠 |

**架构层面的关键分野**：
- **本地优先 vs 云端协同**：ZeptoClaw、IronClaw 强调 local-first；OpenClaw、Hermes Agent、CoPaw 则默认云端 LLM 接入。
- **重型 vs 轻量**：OpenClaw 是"功能广度优先"的重型代表；PicoClaw、ZeptoClaw 是"嵌入式/小二进制"路线的轻量代表。
- **单进程 vs 多进程**：OpenClaw 的 Gateway event loop 与 ZeroClaw 的 RPC dispatcher 都采用了多进程/多服务架构；NanoBot、PicoClaw 则更倾向单进程简洁设计。
- **社区驱动 vs 公司主导**：LobsterAI（网易有道）、CoPaw（阿里）、Moltis（外部合作方 MemCode 已介入）有明显公司主导痕迹；OpenClaw、ZeroClaw、Hermes Agent 仍以个人/小团队维护者为核心。

---

## 6. 社区热度与成熟度分层

根据"活跃度 × 合并率 × 版本节奏"三维评估，可将 13 个项目划分为四个梯队：

### 🏃 第一梯队：快速迭代期
- **OpenClaw**：500/500 单日吞吐、229 PR 合并、6 个 P0 同步攻坚；**成熟度高但波动剧烈**，是生态的"压舱石"也是最大风险源。
- **ZeroClaw**：50 PR 全部待合并、RFC 治理改革集中讨论；处于"从功能扩张转向治理规范化"的转型期，10+ 个 XL PR 积压提示主干集成

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目日报 · 2026-09-14

> 数据周期：2026-09-13 至 2026-09-14（UTC）
> 数据源：[HKUDS/nanobot](https://github.com/HKUDS/nanobot)

---

## 1. 今日速览

NanoBot 今日整体保持**中等活跃度**，过去 24 小时 Issue 提交数为 0，但 PR 侧仍有 8 条持续推进（其中 6 条保持 Open，2 条已 Closed）。当日工作重心集中在 **Bug 修复与安全加固**：包括会话密钥路径遍历防护（CVE 级，P1）、WebUI 移动端交互优化、跨平台代理清理测试的 hermetic 化，以及 Cron 调度与历史会话检索的回归修复。社区反馈入口暂未激活（无新增 Issue），建议维护者主动外呼以收集使用反馈。

---

## 2. 版本发布

**今日无新版本发布。** 建议关注 PR #5633（安全）、#5757、#5751（Bug 修复）合并后的下一个补丁版本，预计会聚焦稳定性的 minor 升级。

---

## 3. 项目进展

今日有 **2 条 PR 被关闭/合并**（均为 WebUI 体验优化），整体推进了"前端一致性与可用性"这一主线：

- ✅ **PR #5755**：[fix(webui): improve mobile composer and settings navigation](https://github.com/HKUDS/nanobot/pull/5755)（作者：Re-bin）
  - 改进移动端 composer 的响应式布局，控件按宽度自适应
  - 上下文用量面板与设置导航体验优化
  - 不涉及后端与持久化配置，风险可控

- ✅ **PR #5754**：[fix(webui): unify app logos and brand mentions](https://github.com/HKUDS/nanobot/pull/5754)（作者：Re-bin）
  - Apps 目录采用统一紧凑、圆角、全画布 Logo
  - 元数据品牌名（Linear、iTerm2、Draw.io、Google Drive）在消息与 composer 中规范化展示
  - 提升跨应用集成的视觉一致性

> 这两条 PR 均为 WebUI 前端层收敛，**未触达核心 Agent 引擎**，但显著降低了产品在多场景下的视觉与交互摩擦。

---

## 4. 社区热点

| 关注度排序 | PR | 主题 | 链接 |
|---|---|---|---|
| ⭐ P1 安全 | #5633 | 拒绝路径遍历型 session key | [#5633](https://github.com/HKUDS/nanobot/pull/5633) |
| ⭐ 长期未决 | #3245 | Cron 运行态声明持久化 | [#3245](https://github.com/HKUDS/nanobot/pull/3245) |
| 🔥 当日新开 | #5757 | 长会话历史检索分页缺失 | [#5757](https://github.com/HKUDS/nanobot/pull/5757) |
| 🔥 当日新开 | #5756 | 测试夹具跨平台代理清理 | [#5756](https://github.com/HKUDS/nanobot/pull/5756) |

**分析**：社区焦点明显偏向 **可靠性 + 安全**。在 8 条 PR 中有 3 条带 `security` 标签（#5633、#5756、#5756 间接相关），2 条带 `regression` 或 `p2` 优先级标签。这反映出项目已进入 **生产化打磨阶段**，用户开始关注"在边缘场景下的正确性"，而非单纯功能堆叠。

---

## 5. Bug 与稳定性

按严重程度（Critical → Low）排列：

### 🔴 P1 · 路径遍历漏洞修复（已有 fix PR）
- **#5633**：[fix(session): reject session keys with path traversal components](https://github.com/HKUDS/nanobot/pull/5633)
  - **问题**：未受信的 session id（如 `../../etc/passwd`）可绕过会话目录限制，触发任意文件读写
  - **修复**：在 `JsonlSessionStore` 中新增 `validate_session_key()` 并在持久化入口统一拦截
  - **状态**：Open（2026-09-02 创建，今日仍活跃）
  - **建议**：⚠️ 维护者优先 review，关联 issue #5564，建议尽快合入安全补丁版本

### 🟠 P2 · 长会话历史检索静默丢失
- **#5757**：[fix(session): search older pages of persisted conversation history](https://github.com/HKUDS/nanobot/pull/5757)
  - **问题**：`search_sessions` 与过滤后的 `read_session` 仅返回最新一页 transcript，导致长会话中的旧消息被静默遗漏
  - **修复方向**：对 `build_webui_thread_response()` 做分页或全量聚合
  - **状态**：Open，当日新开

### 🟠 P2 · Cron 编辑触发错误重排
- **#5751**：[fix(cron): preserve pending runs when editing automation details](https://github.com/HKUDS/nanobot/pull/5751)
  - **问题**：编辑自动化名称或指令时，即使 schedule 未变更也会重算 `next_run_at`，导致间隔任务被推迟、cron 触发被跳过、一次性任务 `next_run_at_ms=None` 永远不执行
  - **状态**：Open，**无 fix PR 链接的回归测试覆盖**，建议关注

### 🟡 P2 · 跨平台代理测试夹具泄漏
- **#5756**：[test(security): keep proxy-clearing fixtures hermetic on hosts with OS-level proxies](https://github.com/HKUDS/nanobot/pull/5756)
  - **问题**：现有夹具仅清理 `*_PROXY` 环境变量，无法覆盖 Windows 注册表与 macOS SystemConfiguration 中的系统级代理，可能导致 SSRF 防护测试假阴性
  - **状态**：Open，属于测试基础设施加固

### 🟡 P2 · WebUI 远程项目路径
- **#5673**：[fix(webui): support remote project paths and honor picker capabilities](https://github.com/HKUDS/nanobot/pull/5673)
  - **问题**：远程 WebUI 用户在某些情况下仍会触发客户端原生文件选择器
  - **状态**：Open + conflict，需先解决合并冲突

### 🟢 Cron 运行态声明持久化（长期未合入）
- **#3245**：[fix(cron): persist claim before await](https://github.com/HKUDS/nanobot/pull/3245)
  - **状态**：**已 open 148 天**（2026-04-17 → 2026-09-14），带 conflict 标记
  - **价值**：解决 Cron 服务在 await job callback 时崩溃后状态丢失的问题

---

## 6. 功能请求与路线图信号

由于今日无新增 Issue，路线图信号需从 PR 描述中提炼：

| 信号 | 推测方向 | 依据 |
|---|---|---|
| **远程 WebUI 文件选择能力** | 强化"云端托管 nanobot"使用场景 | #5673 已开始支持远程路径与原生 picker 能力协商 |
| **移动端体验升级** | 移动办公 / 移动端控制 | #5755 合并，预示后续会持续投入响应式 UI |
| **多 Apps 集成品牌一致性** | 第三方 App 生态 | #5754 合并，未来或推出官方 Apps 品牌规范 |
| **会话分页/全量检索** | 长任务/长上下文场景 | #5757 直接响应此需求 |

> 综合判断：**下一版本最可能的方向是「WebUI 体验收敛 + 安全加固」的小版本**，而非大型 Agent 能力扩展。

---

## 7. 用户反馈摘要

⚠️ **今日无新增 Issue，无法从评论侧直接抽取用户原声。**

但从 PR 描述中的上下文可推断的典型痛点：

1. **长 WebUI 会话检索不完整**（来自 #5757）：用户搜索历史决策/消息时，旧内容"消失"，影响审计与回溯
2. **编辑自动化任务引发执行跳变**（来自 #5751）：用户调整名称/指令这种"低风险"操作，意外破坏调度预期
3. **远程用户在本地弹出文件选择器**（来自 #5673）：云端部署时的体验割裂
4. **安全告警**：session key 处理暴露路径遍历风险（#5633 / #5564），社区可能尚未广泛感知到该问题严重性

---

## 8. 待处理积压（提醒维护者关注）

| 滞留时间 | PR/Issue | 风险点 | 建议动作 |
|---|---|---|---|
| 🟥 **148 天** | [#3245](https://github.com/HKUDS/nanobot/pull/3245) | 长期 conflict，Cron 可靠性 | 优先 rebase 并合入 |
| 🟧 **9 天** | [#5673](https://github.com/HKUDS/nanobot/pull/5673) | 远程用户体验 + conflict | 解决冲突后合入 |
| 🟧 **12 天** | [#5633](https://github.com/HKUDS/nanobot/pull/5633) | **P1 安全修复**，关联 #5564 | 优先 review，可考虑单独发安全补丁 |
| 🟨 **1 天** | [#5757](https://github.com/HKUDS/nanobot/pull/5757) | 数据丢失类 Bug | 等待 CI / 维护者 review |
| 🟨 **2 天** | [#5751](https://github.com/HKUDS/nanobot/pull/5751) | Cron 行为回归 | 需补充测试 |
| 🟨 **1 天** | [#5756](https://github.com/HKUDS/nanobot/pull/5756) | 安全测试可靠性 | 影响 SSRF 防护正确性验证 |

---

## 健康度评分（自评）

| 维度 | 评分 | 说明 |
|---|---|---|
| 活跃度 | ⭐⭐⭐☆☆ | 有持续 PR 但无 Issue 流入 |
| 安全性 | ⭐⭐⭐⭐☆ | P1 漏洞已有修复在路上 |
| 稳定性 | ⭐⭐⭐☆☆ | 多个 P2 Bug 待修复，Cron 长期 conflict 滞留 |
| 社区参与 | ⭐⭐☆☆☆ | 0 个新增 Issue，外部反馈缺位 |
| 流程纪律 | ⭐⭐⭐⭐☆ | PR 标签体系完善（priority / area / type） |

**总评**：🟡 **中等健康**。技术债在可控范围，但需推动 #5633 与 #3245 落地，并主动激活 Issue 入口以恢复社区反馈回路。

---

*报告生成时间：2026-09-14 · 数据为人工整理自 GitHub 公开接口*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目日报
**日期：2026-09-14**

---

## 1. 今日速览

Hermes Agent 今日社区活跃度处于**高位运行**状态：过去 24 小时内共触发 50 条 Issue 更新（45 条新开/活跃 + 5 条已关闭）和 50 条 PR 更新（49 条待合并 + 1 条已关闭），但**无任何版本发布**。从议题分布看，项目当前主要承压点集中在三方面：**state.db / SQLite 会话状态的跨平台一致性**（macOS WAL 处理、Windows 锁、profile 隔离）、**Desktop / TUI 在 macOS 与 Windows 下的权限与生命周期 bug**，以及**多 profile / 多用户场景下的上下文传播**问题（identity ContextVar、credentials 持久化）。维护者 @teknium1 个人贡献了绝大多数 PR，说明项目的人力瓶颈依然显著。

---

## 2. 版本发布

**今日无新版本发布。** 最近的相关版本为 Issue 中提及的 `v0.21.0` 与 `v0.21.2 (2026.9.11)`，但今天未观察到任何 tagged release 活动。

---

## 3. 项目进展

今日仅 **1 条 PR 进入合并/关闭流程**，推进力度较弱。但有 49 条 PR 处于待合并状态，其中多条与当日活跃 Issue 直接关联，预计将在下一窗口期合并：

| 进展 | PR / Issue | 影响 |
|---|---|---|
| **Closed（合并或关闭）** | 1 条（具体编号未在 Top 20 中列出） | 推进力度有限 |
| **关键修复 PR 就绪** | [#110492](https://github.com/NousResearch/hermes-agent/pull/110492) `fix(approval)` Approvals off 不再对 `computer_use` 提示授权（呼应 #94740） | 修复 Desktop YOLO 模式下多余审批弹窗 |
| **关键修复 PR 就绪** | [#110493](https://github.com/NousResearch/hermes-agent/pull/110493) `fix(gateway)` `_cache_session_source` 保留 transport adapter 引用 | 修复 dataclasses.replace 丢失 weakref 导致的运行时崩溃 |
| **关键修复 PR 就绪** | [#110487](https://github.com/NousResearch/hermes-agent/pull/110487) `fix(gateway)` identity ContextVar 按 turn 传播（SRL-4543） | 修复多用户场景下 `HERMES_SESSION_USER_ID` 丢失问题 |
| **关闭的 Issue** | [#85209](https://github.com/NousResearch/hermes-agent/issues/85209) 模型选择器按模型原生 effort 等级筛选 | 改进 Desktop UX |
| **关闭的 Issue** | [#109024](https://github.com/NousResearch/hermes-agent/issues/109024) 多 profile Docker MEDIA 路径解析 | 修复 named profile 容器路径解析 |
| **关闭的 Issue** | [#89259](https://github.com/NousResearch/hermes-agent/issues/89259) Desktop 辅助任务 reasoning effort 控制 | 已落地 |
| **关闭的 Issue** | [#98114](https://github.com/NousResearch/hermes-agent/issues/98114) 命名 profile `inherit: true` 配置继承 | 模型键可继承 root profile |

**整体评估：**今日仓库向前推进了**有限但有价值的一步**，尤其是 4 条今日新开的修复 PR（#110487、#110492、#110493 等）针对身份上下文、批准门控、adapter 引用等核心稳定性问题，是 0.22 系列的明显信号。

---

## 4. 社区热点

### 讨论最活跃的 Issue（按评论数排序）

| 排名 | Issue | 评论数 | 👍 | 主题 |
|---|---|---|---|---|
| 1 | [#58576](https://github.com/NousResearch/hermes-agent/issues/58576) | 13 | 1 | web_server 事件循环在重 agent 任务下最长阻塞 51 秒（GIL 压力） |
| 2 | [#109966](https://github.com/NousResearch/hermes-agent/issues/109966) | 7 | 0 | state.db WAL generation 在 fleet 重启后长时间持有已删除 inode |
| 3 | [#60789](https://github.com/NousResearch/hermes-agent/issues/60789) | 7 | 0 | `session_search(profile=...)` 静默忽略 profile 参数 |
| 4 | [#88468](https://github.com/NousResearch/hermes-agent/issues/88468) | 7 | 1 | macOS HUD 模式下 `read_window_below` 因 Accessibility/Screen Recording 权限失败 |
| 5 | [#76457](https://github.com/NousResearch/hermes-agent/issues/76457) | 6 | 0 | `hermes config set` 把 list-of-strings 写成 JSON 字符串字面量 |
| 6 | [#98382](https://github.com/NousResearch/hermes-agent/issues/98382) | 6 | 0 | 并发 observer-hook 调用因"running"位复用被误判为超时丢弃 |

### 背后的共同诉求

- **跨平台 SQLite / WAL 可靠性**已成为社区最大的痛点（#109966、#109641、#110316、#107905），多个生产用户在 macOS 与 Linux 上报告"长时间停摆"或"会话状态丢失"。
- **profile / session 状态机的一致性**（#60789、#109641、#110316）反映用户在多 profile 部署中频繁踩坑：参数被静默忽略、跨重启的 WAL 漂移、`messages_read.id` 作为 rowid 而非稳定标识。
- **macOS Desktop 的隐私权限模型**正在成为阻塞性问题（#88468、#109641），多个 macOS 用户在生产环境受影响。

---

## 5. Bug 与稳定性

### 🔴 P1 / 严重（今日活跃）

| Issue | 平台/组件 | 简述 | 是否有对应 Fix PR |
|---|---|---|---|
| [#58576](https://github.com/NousResearch/hermes-agent/issues/58576) | Desktop / Web Server / Gateway / TUI | 重负载下事件循环阻塞长达 51 秒，Desktop UI 冻结 | ❌ 暂无 |
| [#88468](https://github.com/NousResearch/hermes-agent/issues/88468) | Desktop / macOS | HUD `read_window_below` 因 Swift 助手无权限恒失败 | ❌ 暂无 |
| [#98382](https://github.com/NousResearch/hermes-agent/issues/98382) | CLI / Plugins | 并发 observer-hook 因"running"位复用被误判超时丢弃 | ❌ 暂无 |
| [#103363](https://github.com/NousResearch/hermes-agent/issues/103363) | Gateway / Telegram | 0.21.0 升级后 Telegram 自动 topic 重命名静默失效（schema v2→v3 迁移未触发） | ❌ 暂无 |
| [#109641](https://github.com/NousResearch/hermes-agent/issues/109641) | Agent / CLI / Gateway / macOS | 已删除 WAL 预连接拒绝在 macOS 上是 no-op（仅 Linux 实现 holder scan），13 分钟内捕获 4.2 GB 后 16 次停机 | ❌ 暂无 |

### 🟠 P2 / 中等

| Issue | 组件 | 简述 | Fix PR |
|---|---|---|---|
| [#109966](https://github.com/NousResearch/hermes-agent/issues/109966) | CLI / Gateway / Cron | WAL generation 漂移导致新 opener 长时间无法打开 | ❌ 暂无 |
| [#60789](https://github.com/NousResearch/hermes-agent/issues/60789) | Agent | `session_search(profile=...)` 静默搜索当前 profile | ❌ 暂无 |
| [#76457](https://github.com/NousResearch/hermes-agent/issues/76457) | CLI / Gateway / Config | `hermes config set` 将 YAML list 写成字符串 | ❌ 暂无 |
| [#63577](https://github.com/NousResearch/hermes-agent/issues/63577) | CLI / Desktop / Windows | `hermes update` 在 Windows 上丢失本地 commit、杀死活动 chat、desktop 打开时阻塞 | ❌ 暂无 |
| [#74719](https://github.com/NousResearch/hermes-agent/issues/74719) | Desktop / TTS | Sherpa wake word 因缺 `pypinyin` 无法 arm | ❌ 暂无 |
| [#110157](https://github.com/NousResearch/hermes-agent/issues/110157) | CLI / Auth / Desktop / Profile | Codex 全局根凭据解析与模型选择器在 named profile 下不一致 | ❌ 暂无 |
| [#110316](https://github.com/NousResearch/hermes-agent/issues/110316) | Agent / MCP / Sessions | `messages_read.id` 是 rowid 而非稳定标识符，3 条 byte-identical 行跨读取 id 变化 | ❌ 暂无 |
| [#110442](https://github.com/NousResearch/hermes-agent/issues/110442) | Agent / Tools / Ollama | qwen 模型与 `tool_call` bridge 工具名冲突，误路由到模板标签 | ❌ 暂无 |
| [#107899](https://github.com/NousResearch/hermes-agent/issues/107899) | Gateway / WhatsApp | 面向客户的 WhatsApp 会话收到仅限运维的状态/诊断信息 | ❌ 暂无 |
| [#107905](https://github.com/NousResearch/hermes-agent/issues/107905) | CLI / Sessions / Compression | resume guard 计算 compaction-generation 拷贝，4700 条消息会话在 20001 行被拒 | ❌ 暂无 |
| [#110456](https://github.com/NousResearch/hermes-agent/issues/110456) | Agent / Skills | `skill_view` 把 `prompts/` 下的 Markdown 当作 legacy flat skill | ❌ 暂无 |
| [#109982](https://github.com/NousResearch/hermes-agent/issues/109982) | Gateway / TTS / Windows | `sentencepiece 0.2.2` import 时段错误导致 gateway 整体崩溃并进入死循环重启 | ❌ 暂无 |
| [#105427](https://github.com/NousResearch/hermes-agent/issues/105427) | Cron | Gateway lifecycle scanner 误拒 Python 目录字面量与绝对解释器二进制 | ❌ 暂无 |

### 🟡 P3 / 较低

| Issue | 组件 | 简述 |
|---|---|---|
| [#91437](https://github.com/NousResearch/hermes-agent/issues/91437) | Gateway / Plugins / Docker / Desktop | 官方 Docker 镜像缺 `google-cloud-pubsub`，google_chat adapter 误报 SA key 失效 |
| [#110278](https://github.com/NousResearch/hermes-agent/issues/110278) | Tools / Browser / Security | KeePassXC vault 元数据缺少 Unicode TAG 清洗 |
| [#110416](https://github.com/NousResearch/hermes-agent/issues/110416) | Agent / CLI / Security | Session store 未脱敏凭据；approvals 重新打印 |
| [#76947](https://github.com/NousResearch/hermes-agent/issues/76947) | Desktop / Linux | AMD RX 7900 XTX 上 renderer 崩溃循环（exitCode=5） |
| [#110370](https://github.com/NousResearch/hermes-agent/issues/110370) | Skills / Desktop | Desktop 移除 `grounded-citations` 所需的内联引用 |

### 🔒 安全相关

- [#110278](https://github.com/NousResearch/hermes-agent/issues/110278) Unicode TAG 注入 KeePass 元数据
- [#110416](https://github.com/NousResearch/hermes-agent/issues/110416) 会话持久化层凭据未脱敏
- [#92612](https://github.com/NousResearch/hermes-agent/pull/92612) PR 已就绪：MCP OAuth 回调页 `error` 参数反射型 XSS 修复（salvage #6723）

**整体观察：**P1 级别 5 条 Bug 中**全部无对应修复 PR**，且多个与 macOS / WAL / SQLite 强相关，建议维护者优先排期 #109641（macOS holder scan）、#98382（hook running 位）、#103363（Telegram 迁移），三者均有清晰根因。

---

## 6. 功能请求与路线图信号

| 类型 | Issue / PR | 状态 | 路线图概率 |
|---|---|---|---|
| 视频生成扩展 | [#95263](https://github.com/NousResearch/hermes-agent/pull/95263) Wan 3.0 + Wan 3.0 Prime on FAL；[#92720](https://github.com/NousResearch/hermes-agent/pull/92720) Kling 3.0 Standard + Pro on FAL | PR 待合并 | **高**（day-0 集成倾向明显） |
| Skills 生态 | [#98035](https://github.com/NousResearch/hermes-agent/pull/98035) scrollcraft；[#96899](https://github.com/NousResearch/hermes-agent/pull/96899) ai-presenter-video | PR 待合并 | **高** |
| 引用规范化 | [#85106](https://github.com/NousResearch/hermes-agent/issues/85106) RFC：跨检索路径的统一引用注释 | 讨论中 | 中（需设计决策） |
| Desktop UX | [#50750](https://github.com/NousResearch/hermes-agent/issues/50750) 单屏多 agent 窗口 | 长期未推进 | 低 |
| 模型目录 | [#98211](https://github.com/NousResearch/hermes-agent/pull/98211) Anthropic `/v1/models` 翻页 | PR 待合并 | **高** |
| 离线模型清理 | [#99605](https://github.com/NousResearch/hermes-agent/pull/99605) opencode-free 下架 hy3-free 与 laguna-s-2.1-free（401） | PR 待合并 | **高** |
| ACP 协议 | [#95244](https://

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目日报
**日期：2026-09-14**

---

## 1. 今日速览

PicoClaw 项目今日活跃度处于**低-中等水平**。过去 24 小时共有 5 条 Issues 更新（3 条仍开放，2 条因 stale 被关闭）和 4 条 PR 更新（全部已关闭，**无 PR 进入合并队列**）。值得注意的是，所有关闭的 PR 与 Issues 均带有 `[stale]` 标签，提示存在机器人自动清理机制。今日没有新版本发布，项目整体处于「日常维护 + 社区讨论」状态，未出现重大功能推进或紧急修复。

---

## 2. 版本发布

⚪ **今日无新版本发布。**

建议关注已合并修复是否会在后续版本中体现。

---

## 3. 项目进展

今日所有 4 条 PR 均被关闭，未有 PR 成功合并：

| PR | 状态 | 说明 |
|----|------|------|
| [#3348](https://github.com/sipeed/picoclaw/pull/3348) | CLOSED (stale) | 捷克语 i18n 包裹标签补全 |
| [#1545](https://github.com/sipeed/picoclaw/pull/1545) | CLOSED | 批量合并 #1500/#1490/#1488/#1487/#1485 的修复 |
| [#20](https://github.com/sipeed/picoclaw/pull/20) | CLOSED | README 配置示例与实际 schema 校对 |
| [#1268](https://github.com/sipeed/picoclaw/pull/1268) | CLOSED | iMessage 支持 + stop 命令 + 日志 + 隐私脱敏 |

**项目健康度信号**：
- ⚠️ PR #1268 涉及 iMessage 通道这一较受关注的功能，关闭后未见替代 PR，可能影响 macOS 用户接入能力
- ⚠️ PR #1545 作为「批量合并」型 PR 被关闭，说明上游多个修复分支未被接纳，需关注是否存在分流机制
- ⚠️ 多条 PR 与 Issue 被标记 stale 后关闭，提示维护者活跃度有限或自动化清理策略较激进

---

## 4. 社区热点

按评论数与点赞数排序，今日最受关注的 Issues：

1. **#3287 — [Feature] Better support long messages in IRC** (12 评论)  
   🔗 https://github.com/sipeed/picoclaw/issues/3287  
   用户 superuser-does 提出 IRCv3 长消息应被视为单条消息而非多条独立消息。IRC 协议默认 512 字节限制，超长消息会被自动拆分，PicoClaw 当前未做合并处理。该 Issue 评论数最高，体现社区对 IRC 通道体验的关注。

2. **#3281 — [BUG] Web UI chat input is very laggy when history has a little bit long** (11 评论，2 👍)  
   🔗 https://github.com/sipeed/picoclaw/issues/3281  
   用户 xpader 反馈在 PicoClaw 0.3.1 + Go 1.25.11 + Web 通道下，对话历史稍长时输入框就严重卡顿。**评论数与点赞数都较高**，是真实用户痛点。

3. **#3369 — [Feature] Add OpenCode Go session header support** (2 👍)  
    https://github.com/sipeed/picoclaw/issues/3369  
   用户 w33ble 请求为 OpenCode Go（区别于 OpenCode Zen）请求添加 `x-opencode-session` header。尽管评论少，但获 2 个点赞，说明认同度较高。

**诉求分析**：当前社区热点集中在「多通道适配」（IRC、OpenCode Go）与「Web UI 性能」两条主线。

---

## 5. Bug 与稳定性

按严重程度排列：

| 严重度 | Issue | 描述 | 修复 PR |
|--------|-------|------|---------|
| 🟠 中 | [#3281](https://github.com/sipeed/picoclaw/issues/3281) | Web UI 输入框随历史增长卡顿（PicoClaw 0.3.1） | ❌ 暂无 |
| 🟡 低 | [#3350](https://github.com/sipeed/picoclaw/issues/3350) | 嵌入式/低性能设备（RV1106、RISC-V）下 Web UI 打字严重卡顿 | ❌ 已被自动关闭为 stale |
|  低 | [#3351](https://github.com/sipeed/picoclaw/issues/3351) | 自动压缩物理删除 session 原始记录，无真正持久化 | ❌ 已被自动关闭为 stale |

**观察**：Bug #3281（Web UI 卡顿）与已关闭的 #3350 实为同类问题的不同场景描述，但 #3350 在自动清理时被关闭，#3281 仍开放——存在 Issue 重复/分流不充分的问题。维护者应考虑：
- 将 #3350 重新打开并关联到 #3281
- 或将 #3281 的修复范围扩展到嵌入式设备

---

## 6. 功能请求与路线图信号

| Issue | 请求功能 | 已有相关 PR | 纳入下版本可能性 |
|-------|----------|-------------|-----------------|
| [#3287](https://github.com/sipeed/picoclaw/issues/3287) | IRC 长消息合并 | 无 | 中（评论活跃，但无实现 PR） |
| [#3369](https://github.com/sipeed/picoclaw/issues/3369) | OpenCode Go 会话 header | 无 | 中-高（设计明确，社区认同） |

**路线图观察**：
- iMessage 支持（曾由 PR #1268 提出）今日被关闭，需关注是否由维护者主动否决或仅是 stale 清理
- PR #1545 批量合并未成，意味着上游多个小型修复的归宿仍悬而未决

---

## 7. 用户反馈摘要

**真实痛点**：

- **Web UI 性能瓶颈**：多名用户反映历史增长后输入卡顿（#3281, #3350），特别在嵌入式/低算力设备上体验更差。这与 PicoClaw 强调轻量嵌入式定位形成矛盾。
- **持久化不足**：用户 chentianxiong123 指出 `pkg/memory/jsonl.go` 中的 `SetHistory → rewriteJSONL` 会物理覆盖原始日志，压缩即丢失，质疑「持久化」的实际语义。
- **IRC 长消息割裂**：IRC 协议特性导致长消息被自动拆分为多条，PicoClaw 未做合并，用户希望获得类「单条消息」体验。

**使用场景**：
- 嵌入式 AI Agent（RV1106、RISC-V 板子）
- 多通道接入（IRC、Web、iMessage、OpenCode）
- 长期会话管理（隐含持久化诉求）

**满意度信号**：未观察到明确表扬/满意类评论，社区情绪偏中性偏负向。

---

## 8. 待处理积压

**维护者应优先关注的 Issue**：

1. **#3281** — Web UI 卡顿 Bug，11 评论 + 2 👍，距首次报告已近 2 个月（2026-07-21），**无任何相关 PR**  
   🔗 https://github.com/sipeed/picoclaw/issues/3281

2. **#3287** — IRC 长消息支持，12 评论，**自 2026-07-22 起开放**，是当前讨论最活跃的开放 Issue  
   🔗 https://github.com/sipeed/picoclaw/issues/3287

3. **#3369** — OpenCode Go header 支持，虽标 stale 但有 2 👍，社区认同度高  
    https://github.com/sipeed/picoclaw/issues/3369

**PR 积压**：
- **#1268**（iMessage 支持，2026-03-09 提交）— 涉及多模块功能改进，关闭后无替代方案  
  🔗 https://github.com/sipeed/picoclaw/pull/1268
- **#1545**（批量合并，2026-03-14 提交）— 关闭后上游 5 个分支 PR 是否仍需独立评审需澄清  
  🔗 https://github.com/sipeed/picoclaw/pull/1545

**风险提示**：当前 stale 自动清理策略与社区实际活跃节奏可能不匹配，存在「有价值 Issue 被误关」的风险（如 #3350、#3351 与 #3281 高度相关但前两者已被关闭），建议维护者复盘近一周关闭的 stale Issue，确认无重要反馈被埋没。

---

*数据来源：GitHub API · 统计窗口：2026-09-13 至 2026-09-14*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报

**报告日期**：2026-09-14
**项目**：NanoClaw（github.com/qwibitai/nanoclaw）
**数据周期**：过去 24 小时

---

## 一、今日速览

NanoClaw 今日活跃度处于中等偏高水平：过去 24 小时内有 5 条 Issue 更新与 16 条 PR 更新，无新版本发布。核心团队（glifocat、gavrielc）集中精力在 **安装/初始化体验** 与 **Mattermost 适配器** 两条主线，前者修复了 Fresh Install 跳过 Provider Picker 的关键 Bug（#3790 已关闭，对应 #3788 待合并），后者则连续提交了 5 个相关 PR（#3777/#3778/#3780/#3797）。整体提交质量较高，几乎所有 PR 都遵循 `nanoclaw-pr-template:v2` 规范并打上了标准标签，项目处于稳步迭代中。

---

## 二、版本发布

⚠️ **无新版本发布**。从活跃的分支与未合并 PR 来看，下一个版本可能包含以下关键改动：Provider Picker 恢复、Mattermost 适配器系列重构、OpenTelemetry tracing skill、新增 `delivery_mode` 配置。建议维护者评估合入节奏。

---

## 三、项目进展（已合并/关闭）

| PR 编号 | 标题 | 状态 | 意义 |
|---|---|---|---|
| [#3790](https://github.com/qwibitai/nanoclaw/pull/3790) | fix(setup): restore the agent provider picker for fresh installs | ✅ CLOSED | **关键修复**。解决 Fresh Install 直接默认 Claude 导致用户无法选择 Codex 等可安装 Provider 的问题；对应 #3787 |
| [#3792](https://github.com/qwibitai/nanoclaw/pull/3792) | fix(setup): bootstrap pinned Codex CLI for auth | ✅ CLOSED | 允许 Fresh Codex Setup 在主机全局未安装 Codex CLI 的情况下完成认证，避免对特权 npm 安装的依赖；对应 #3791 |

**进展评估**：项目今日在 Setup 链路上有实质性推进，特别是 Provider Picker 与 Codex 引导这两个困扰新用户的问题得到了官方修复；这反映出维护者对 **新手友好度** 的重点投入。

---

## 四、社区热点

虽然今日整体评论量不高（Issues 总评论仅 3 条），但讨论的议题较为集中：

- **[#3787](https://github.com/qwibitai/nanoclaw/issues/3787) Fresh setup skips the provider picker and silently selects Claude**（2 条评论，已关闭）
  - 用户痛点：首次安装者无法选择非 Claude Provider，所有新人被迫走 Claude 默认路径
  - 已被 PR #3790 解决

- **[#3643](https://github.com/qwibitai/nanoclaw/issues/3643) Hardcoded 30-min ABSOLUTE_CEILING_MS cold-kills long local-model turns**（1 条评论）
  - 用户痛点：本地模型长回合被 30 分钟硬编码超时误杀，且缺乏配置开关
  - **尚未有对应 fix PR**，需关注

- **[#3801](https://github.com/qwibitai/nanoclaw/issues/3801) update-nanoclaw validate: channel refresh overwrites files that local patch skills modified**
  - 用户痛点：自定义补丁会被 `update-nanoclaw validate` 自动覆盖，体现更新流程对本地修改的破坏性
  - **尚未有 PR 跟进**

**诉求归纳**：社区目前最关心的是 **(1) 安装流程的可用性** 与 **(2) 升级/更新流程对本地修改的尊重**。前者已有响应，后者尚待修复。

---

## 五、Bug 与稳定性

按严重程度排列：

| 严重度 | Issue | 标题 | 是否有 fix PR |
|---|---|---|---|
| 🔴 高 | [#3643](https://github.com/qwibitai/nanoclaw/issues/3643) | 硬编码 30 分钟 ABSOLUTE_CEILING_MS 误杀本地模型长回合，无配置开关 | ❌ 无 |
| 🟠 中 | [#3791](https://github.com/qwibitai/nanoclaw/issues/3791) | Fresh Codex Setup 要求主机全局安装 CLI | ✅ 已由 #3792 修复（已关闭） |
| 🟠 中 | [#3787](https://github.com/qwibitai/nanoclaw/issues/3787) | Fresh setup 跳过 Provider Picker | ✅ 已由 #3790 修复（已关闭）；#3788 仍 OPEN |
| 🟡 中 | [#3801](https://github.com/qwibitai/nanoclaw/issues/3801) | update-nanoclaw 覆盖本地补丁修改的文件 | ❌ 无 |
| 🟡 中 | [#3800](https://github.com/qwibitai/nanoclaw/issues/3800) | update-nanoclaw 文档遗漏 3 个脚本导致控制器无法加载 | ❌ 无 |
| 🟢 低 | [#3789](https://github.com/qwibitai/nanoclaw/issues/3789) | 驱动 Watch Feed 订阅失败导致 arming 中断 | ✅ 有 PR #3789 待审 |

**稳定性观察**：#3643 是目前唯一未被修复的高严重度 Bug，建议优先处理；本地模型用户群体受影响显著。

---

## 六、功能请求与路线图信号

| PR | 功能 | 路线图可能性 |
|---|---|---|
| [#3713](https://github.com/qwibitai/nanoclaw/pull/3713) | `container_configs.delivery_mode`：为每个 Agent Group 记录投递模式 | ⭐ 高（与 #3781 联动，配套交付能力完善） |
| [#3781](https://github.com/qwibitai/nanoclaw/pull/3781) | agent-runner 强制 tools-only 投递 | ⭐ 高（解决 Provider 无法可靠返回 final-text envelope 的痛点） |
| [#3796](https://github.com/qwibitai/nanoclaw/pull/3796) | `/add-telemetry`：为 Agent Container 导出 OpenTelemetry traces | ⭐⭐ 高（社区首次提出可观测性能力，JHisse 主理） |
| [#3489](https://github.com/qwibitai/nanoclaw/pull/3489) | Codex 结构化 setup-driver 认证 | ⭐ 中（已开放 22 天，需 review 加速） |

**路线图预判**：下一版本大概率会包含 `delivery_mode` 配置 + tools-only 强制投递这一对能力。OpenTelemetry tracing skill 是新增的重要可观测性能力，建议纳入路线图讨论。

---

## 七、用户反馈摘要

从今日活跃 Issue 的描述可提炼出以下真实用户痛点：

1. **新用户首装体验差**：Fresh install 时 Provider Picker 被跳过、Codex setup 要求全局 CLI、systemd linger 在最小化主机上触发 polkit 交互——三类问题集中在「开箱即用」体验上。
   - 来源：#3787、#3791、PR #3798

2. **本地模型用户的"长回合焦虑"**：30 分钟硬编码天花板让用户无法放心跑长任务，且无配置开关（#3643）。这反映出 **可配置性** 与 **本地/远程模型混合使用** 场景的需求。

3. **更新流程破坏性**：用户对 skills 的本地补丁会被 `update-nanoclaw validate` 静默覆盖（#3801）；文档与实际脚本不一致（#3800）。反映出用户希望在升级时保留个性化改动。

4. **Mattermost 集成的"承诺 vs 现实"差距**：多个 #3780、#3797、#3778、#3777 表明 Mattermost 适配器目前存在「看似连接成功但实际未通」「线程回复被错误路由到频道根」等问题。

---

## 八、待处理积压（提醒维护者关注）

| 编号 | 类型 | 标题 | 开放时长 | 提醒 |
|---|---|---|---|---|
| [#3643](https://github.com/qwibitai/nanoclaw/issues/3643) | Bug | 硬编码 30 分钟天花板 | ~17 天 | 🔴 高严重度且无 PR，建议优先响应 |
| [#3489](https://github.com/qwibitai/nanoclaw/pull/3489) | PR | Codex 结构化 setup-driver 认证 | ~22 天 | 由 amit-shafnir 提交，长期未 review |
| [#3463](https://github.com/qwibitai/nanoclaw/pull/3463) | PR | opencode provider 文本回退 | ~22 天 | 修复 #2985 的核心 PR，社区贡献者（wakqasahmed）等待 |
| [#3713](https://github.com/qwibitai/nanoclaw/pull/3713) | PR | per-agent-group delivery mode | ~11 天 | 与 #3781 协同的核心功能 PR |

**风险**：超过 3 周未合并的社区贡献 PR（#3489、#3463）若长期搁置，可能影响社区贡献者积极性；建议维护者给出明确 review 时间线或合并计划。

---

## 附：日报数据卡片

| 指标 | 数值 |
|---|---|
| Issue 活跃数 | 5 |
| Issue 已关闭 | 1 |
| PR 活跃数 | 16 |
| PR 已关闭/合并 | 2 |
| 新版本 | 0 |
| 高严重度未修复 Bug | 1 |
| 长期未合并社区 PR（>3 周） | 2 |
| Mattermost 相关 PR | 5 |
| Setup 相关 PR | 6 |

---

*本日报基于 NanoClaw 仓库 2026-09-13 至 2026-09-14 的公开 GitHub 数据生成，所有链接均指向 `qwibitai/nanoclaw` 仓库。*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目日报

**报告日期**：2026-09-14
**数据周期**：过去 24 小时
**项目仓库**：[nearai/ironclaw](https://github.com/nearai/ironclaw)

---

## 1. 今日速览

IronClaw 项目今日整体处于**低活跃度的维护性状态**。过去 24 小时内无新 Issue 提交、无新版本发布，PR 动态全部由 [Dependabot](https://github.com/dependabot) 自动化依赖更新驱动，未观察到人类开发者的实质性功能提交或讨论互动。项目健康度可视为"正常运行中，但社区参与度偏低"，建议维护者关注自动化 PR 积压与社区互动渠道的激活。

---

## 2. 版本发布

**今日无新版本发布**。Releases 通道保持静默。

---

## 3. 项目进展

今日仅有 1 条 PR 进入关闭状态，但**并非实质性功能落地**，而是依赖批量更新被新版取代：

| PR | 状态 | 说明 |
|----|------|------|
| [#8097](https://github.com/nearai/ironclaw/pull/8097) | CLOSED | dependabot 批量更新 24 个 Rust 依赖；今日被 [#8099](https://github.com/nearai/ironclaw/pull/8099) 的 25 包更新版取代后关闭 |

**核心观察**：项目在功能层面今日**未取得实质性推进**，所有依赖更新 PR 均处于 OPEN 待审状态，尚未合入主干。这意味着主干代码今天处于相对静止状态。

---

## 4. 社区热点

**今日无任何讨论热点**。全部 5 条 PR 的评论数均为 `undefined`、👍 数为 `0`，表明：

- 没有人工 review 互动
- 没有社区用户反馈或讨论
- 缺乏外部贡献者关注

社区参与度需要项目方主动在 Discord、Twitter/X 或其他渠道推送近期进展（如 NEAR AI 生态联动、WASM 工具链升级方向）以激活贡献。

---

## 5. Bug 与稳定性

**今日无 Bug 报告、无崩溃反馈、无回归问题**。

稳定性视角的唯一切面是**依赖更新本身带来的潜在风险**：
- [#8099](https://github.com/nearai/ironclaw/pull/8099) 涉及 `uuid 1.24.0 → 1.26.1`、`base64 0.22.1 → 0.23.1`、`rust_decimal` 等 25 个包的版本跃迁，其中 `base64` 跨 minor 版本更新需重点验证 API 兼容性。
- 建议维护者合并前重点跑 CI 完整测试套件。

---

## 6. 功能请求与路线图信号

**今日无新功能请求提交**，因此无法基于 Issues 推导路线图信号。

但从仍处 OPEN 状态的依赖 PR 可推测项目**当前的技术演进方向**：
- **Rust 生态升级**：[#8099](https://github.com/nearai/ironclaw/pull/8099) 覆盖加密、网络、时间、序列化等多个子领域
- **WASM 运行时跟进**：[#7834](https://github.com/nearai/ironclaw/pull/7834) 持续更新 `wasmtime` / `wit-component` / `wit-parser`，说明 WASM 是核心战略方向
- **异步网络栈稳定**：[#8078](https://github.com/nearai/ironclaw/pull/8078) 更新 `tower-http`、`tokio-tungstenite`

---

## 7. 用户反馈摘要

**今日无可提炼的用户反馈**——没有新的 Issue 评论、没有用户使用场景描述。

**历史遗留信号**：考虑到 Issues 端 24 小时完全静默，且 PR 也无评论，项目方应警惕用户活跃度下降趋势。建议：
1. 在下次版本发布时主动发起社区公告
2. 检查 Discord/Telegram 等社区渠道是否存在未同步至 GitHub 的用户反馈
3. 标记 `good first issue` 吸引新贡献者

---

## 8. 待处理积压

按待审时长排序，今日仍 OPEN 的 PR：

| PR | 待审时长 | 涉及范围 | 风险标签 |
|----|----------|----------|----------|
| [#7834](https://github.com/nearai/ironclaw/pull/7834) | **约 22 天**（自 2026-08-23） | WASM 组：wasmtime、wasmtime-wasi、wit-component、wit-parser | `size: L`、`risk: medium` |
| [#8078](https://github.com/nearai/ironclaw/pull/8078) | 约 8 天 | tower-http、tokio-tungstenite | dependencies |
| [#8079](https://github.com/nearai/ironclaw/pull/8079) | 约 8 天 | GitHub Actions 6 项 | dependencies |
| [#8099](https://github.com/nearai/ironclaw/pull/8099) | 1 天 | Rust everything-else 25 项 | dependencies |

** 重点提醒**：
- **PR #7834 已积压 22 天**，且被 dependabot 自动标记为 `risk: medium`、`size: L`，是当日最值得维护者优先处理的积压项。WASM 工具链更新可能涉及编译 API 变更，长期搁置可能导致后续依赖合并时出现更大冲突。
- 4 条 dependabot PR 同时堆积容易形成"批量合并风险"——一旦某条基础包（如 `tokio`、`wasmtime`）存在不兼容变更，会放大对主干的影响面。建议按风险由低到高分批合并。

---

## 📊 项目健康度仪表盘

| 维度 | 状态 | 评分 |
|------|------|------|
| 代码提交活跃度 | 🟡 仅 bot 活动 | 2/5 |
| 社区互动度 | 🔴 零评论零反应 | 1/5 |
| Issue 响应 |  无新 Issue | N/A |
| 依赖维护及时性 | 🟡 积压 4 条 | 3/5 |
| 发布节奏 | ⚪ 无新版本 | N/A |
| **综合** | **🟡 维护中，互动偏低** | **2/5** |

---

*本日报由 AI 智能体开源项目分析师基于 GitHub 公开数据自动生成。数据来源：[nearai/ironclaw](https://github.com/nearai/ironclaw)*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目日报 · 2026-09-14

> 数据范围：2026-09-13 ~ 2026-09-14（UTC）
> 数据源：[netease-youdao/LobsterAI](https://github.com/netease-youdao/LobsterAI)

---

## 1. 今日速览

LobsterAI 今日活跃度处于**较低水位**：过去 24 小时内无新版本发布，Issues 4 条（全部 OPEN）、PRs 5 条（4 OPEN / 1 CLOSED），且绝大多数条目被标记为 `[stale]`，意味着这些内容多为 3 月份创建后被 stale-bot 重新唤醒，更新本身并不代表社区新讨论。值得关注的是今天出现了一个**全新且具备战略意义**的 Issue #2660（由 MemCode CEO 提出"持久化用户与工作区记忆"提案），以及一个**当日创建、当日关闭**的 PR #2659（Markdown 编辑支持）。整体来看，项目处于维护性阶段，未观察到大规模功能合并或版本推进信号。

---

## 2. 版本发布

**无新版本发布。** 今日未观察到任何 Release tag 变更。

---

## 3. 项目进展

### 当日已关闭的 PR

| PR | 标题 | 状态 | 备注 |
|---|---|---|---|
| [#2659](https://github.com/netease-youdao/LobsterAI/pull/2659) | feat: support markdown editing | CLOSED | 涵盖 renderer / docs / main / artifacts 多个模块，作者 fisherdaddy，当日创建当日关闭，无评论记录 |

**分析**：该 PR 同日创建并被关闭，且无任何评论互动，从节奏判断大概率被维护者判定为不符合项目方向、未达到合并标准或重复提交而被快速关闭。**Markdown 编辑能力** 是社区长期呼声，关闭动作值得后续关注是否会有官方替代方案。

### 待合并的活跃 PR（均为 stale 复活，无新互动）

- [#1038](https://github.com/netease-youdao/LobsterAI/pull/1038) — `fix(proxy)` 流式响应 ReadableStream reader 异常泄漏修复
- [#1042](https://github.com/netease-youdao/LobsterAI/pull/1042) — `fix(security)` 修复 SSRF + 任意文件读取 P0 漏洞（关联 #1041）
- [#1044](https://github.com/netease-youdao/LobsterAI/pull/1044) — `fix(installer)` Windows NSIS 安装路径规范化
- [#1045](https://github.com/netease-youdao/LobsterAI/pull/1045) — `feat(renderer)` Agent 设置面板未保存改动提示

**整体推进度**：过去 24 小时净推进有限，所有待合并 PR 均长期未获评审响应。

---

## 4. 社区热点

| 排名 | 条目 | 互动量 | 类别 |
|---|---|---|---|
| 🥇 | [#2660 Proposal: durable user and workspace memory](https://github.com/netease-youdao/LobsterAI/issues/2660) | 评论 1，👍 0 | 新功能提案 |
| 🥈 | [#1041 SSRF & 任意文件读取漏洞](https://github.com/netease-youdao/LobsterAI/issues/1041) | 评论 1，👍 0 | 安全 |
| 🥉 | [#1046 上下文窗口限制问题](https://github.com/netease-youdao/LobsterAI/issues/1046) | 评论 1，👍 0 | 配置/文档 |
| 4 | [#1047 清除的技能切换 Agent 后仍存在](https://github.com/netease-youdao/LobsterAI/issues/1047) | 评论 1，👍 0 | Bug |

**诉求分析**：

- **#2660（最值得关注）**：由 MemCode 创始人 Vivek Gupta 提交，是当日唯一**全新**且面向未来的提案。提出 LobsterAI 在跨研究、文档、幻灯片、视频、Web 多场景下，需要为用户提供**偏好 / 工作区 / 信源 / 未完成决策的持久化记忆能力**。这是 AI Agent 类产品的核心痛点，具备明确的商业合作信号。
- **#1041**：SSRF + 本地任意文件读取属于严重安全漏洞，且**修复 PR #1042 已经存在**，理论上应当优先合并。

---

## 5. Bug 与稳定性

按严重程度排列：

| 严重度 | 条目 | 描述 | 已有 fix PR |
|---|---|---|---|
| 🔴 **P0 安全** | [#1041](https://github.com/netease-youdao/LobsterAI/issues/1041) | `api:fetch` / `api:stream` IPC 无 URL 校验，主进程 fetch 可被用于 SSRF（探测内网、攻击 169.254.169.254 云元数据）；`dialog:readFileAsDataUrl` 无路径边界，可读取 `/etc/passwd` 等敏感文件 | ✅ [#1042](https://github.com/netease-youdao/LobsterAI/pull/1042) |
|  **高** | [#1038](https://github.com/netease-youdao/LobsterAI/pull/1038) | 流式响应 `ReadableStreamDefaultReader` 在网络中断、服务端提前关闭、上游报错、用户停止会话等场景下未释放，存在连接/句柄泄漏 | ✅ 已含 fix |
| 🟡 **中** | [#1047](https://github.com/netease-youdao/LobsterAI/issues/1047) | 清除某 Agent 的技能后，切换到其他 Agent 再切回，已清除技能仍在 — 状态同步/缓存失效问题 | ❌ 无 |
| 🟡 **中** | [#1044](https://github.com/netease-youdao/LobsterAI/pull/1044) | Windows NSIS 安装器在用户选择盘符根目录（如 `D:\`）时未规范化路径 | ✅ 已含 fix |
| ⚪ **低** | [#1045](https://github.com/netease-youdao/LobsterAI/pull/1045) | Agent 设置面板切换无未保存提醒，误操作丢失改动 | ✅ 已含 fix |

**安全告警**：#1041 / #1042 是当前最紧迫的合并事项，建议维护者优先处理。

---

## 6. 功能请求与路线图信号

| 提案 | 来源 | 进入下版本可能性 | 备注 |
|---|---|---|---|
| [#2660](https://github.com/netease-youdao/LobsterAI/issues/2660) **持久化用户/工作区记忆** | 外部（MemCode CEO） | 🟡 中 | 战略级需求，可能推动架构升级；提案方具备合作意愿 |
| [#2659](https://github.com/netease-youdao/LobsterAI/pull/2659) **Markdown 编辑支持** | 社区 | 🔴 已关闭 | 需求真实存在但当前实现被拒，后续可能以官方形式重提 |
| [#1046](https://github.com/netease-youdao/LobsterAI/issues/1046) **上下文窗口自定义** | 用户 | 🟢 高 | 属于配置文档完善，成本低、收益明确 |
| [#1045](https://github.com/netease-youdao/LobsterAI/pull/1045) **未保存改动提示** | 社区 | 🟢 高 | UX 小改进，已有 PR，待合并 |

---

## 7. 用户反馈摘要

- **多任务连续性缺失**（#2660）：用户希望在 LobsterAI 跨研究/文档/幻灯片/视频/Web 等任务中保留**偏好、工作区、信源、未完成决策**，目前每次会话都要重新交代背景，体验断裂。
- **安全焦虑**（#1041）：安全研究员指出 IPC 层完全缺乏 URL / 路径白名单机制，反映出社区对桌面 AI 应用安全模型的关注。
- **模型能力受限**（#1046）：用户反馈 Qwen3.5-Plus 实际支持 1M context 但 LobsterAI 锁定在 200K，且**官方文档缺失说明**——既是文档短板，也暗示模型路由层存在硬编码。
- **状态一致性 Bug**（#1047）：用户清除技能后切换 Agent 复现"技能复活"，属于典型的本地状态缓存未及时失效问题，影响对 Agent 隔离性的信任。
- **跨平台安装体验**（#1044）：Windows 用户选择盘符根目录安装时路径处理不规范，存在安装失败隐患。

整体用户情绪：功能层面认可，但**安全/配置透明度/状态一致性**方面存在明显不满。

---

## 8. 待处理积压

以下 Issue / PR 已存在约 **5.5 个月**（创建于 2026-03-30），今日仅被 stale-bot 自动唤醒，**仍无维护者实质性响应**：

| 条目 | 类型 | 创建日 | 距今天数 | 紧迫性 |
|---|---|---|---|---|
| [#1042](https://github.com/netease-youdao/LobsterAI/pull/1042) | PR（安全修复） | 2026-03-30 | 168 天 | 🔴 **P0** |
| [#1041](https://github.com/netease-youdao/LobsterAI/issues/1041) | Issue（安全漏洞） | 2026-03-30 | 168 天 |  **P0** |
| [#1038](https://github.com/netease-youdao/LobsterAI/pull/1038) | PR（流泄漏修复） | 2026-03-30 | 168 天 | 🟠 高 |
| [#1044](https://github.com/netease-youdao/LobsterAI/pull/1044) | PR（安装器修复） | 2026-03-30 | 168 天 | 🟡 中 |
| [#1045](https://github.com/netease-youdao/LobsterAI/pull/1045) | PR（UX 改进） | 2026-03-30 | 168 天 | 🟡 中 |
| [#1046](https://github.com/netease-youdao/LobsterAI/issues/1046) | Issue（配置/文档） | 2026-03-30 | 168 天 | 🟡 中 |
| [#1047](https://github.com/netease-youdao/LobsterAI/issues/1047) | Issue（Bug） | 2026-03-30 | 168 天 | 🟡 中 |

**维护者建议**：
1. **优先合并 #1042**（修复 P0 安全漏洞，关联 #1041），同时发布安全公告；
2. 评审 #1038（稳定性，影响所有流式调用路径）；
3. 关闭或合并 #1044 / #1045（低成本、影响面明确的修复与改进）；
4. 对 #1046 补充文档回应；
5. 对 #2660 给出官方立场（accept / defer / reject with reason），避免战略级提案无人回应。

---

## 项目健康度评分（本次评估）

| 维度 | 评分 | 说明 |
|---|---|---|
| 活跃度 | ⭐⭐☆☆☆ | 无版本、无评审、无新互动 |
| 安全响应 | ⭐☆☆☆☆ | P0 漏洞公开 5.5 个月未修 |
| 社区沟通 | ⭐⭐☆☆☆ | stale-bot 唤醒占多数，维护者缺席 |
| 功能推进 | ⭐⭐☆☆☆ | 关闭多于合并，无净推进 |
| 用户满意度 | ⭐⭐⭐☆☆ | 核心能力认可，但痛点长期未响应 |

**综合：项目处于低活跃的"维护空窗期"，安全积压尤为值得关注。**

---

*报告生成时间：2026-09-14 · 数据基于公开 GitHub Issues / Pull Requests*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

# TinyClaw 项目日报
**日期：2026-09-14**
**仓库：[TinyAGI/tinyagi](https://github.com/TinyAGI/tinyagi)**

---

## 1. 今日速览

TinyClaw 今日整体活跃度处于**低位水平**。过去 24 小时内仅有 1 条新 Issue 提交，无 PR 更新，无新版本发布。项目处于"静默期"，社区交互有限。从提交内容看，外部生态合作伙伴（MemCode）正在就核心的"跨任务持久记忆"能力提出协作意向，这或将成为下一个迭代周期的潜在方向。整体而言，项目健康度稳定但推进节奏放缓，建议维护者关注积压响应与社区互动。

---

## 2. 版本发布

无新版本发布，本节略过。

---

## 3. 项目进展

过去 24 小时内**无任何 PR 合并或关闭**，项目代码层面无新进展。

建议关注仓库的现有分支状态与 CI/CD 流水线，确认是否有未同步的本地开发活动。

---

## 4. 社区热点

### 🔥 今日唯一活跃 Issue

**[#296 Could TinyAGI preserve approved context across agent-team runs?](https://github.com/TinyAGI/tinyagi/issues/296)**
- **作者**：memcodeoff（Vivek Gupta，MemCode 创始人 & CEO）
- **创建/更新时间**：2026-09-13
- **状态**：OPEN | 👍 0 | 💬 0

**诉求分析**：
该 Issue 由外部产品方（[MemCode](https://memcode.in)）发起，核心议题是 **agent 团队跨运行（cross-run）的持久上下文保留**。提案者观察到，在"一人公司"场景下，agent 团队中的角色定义、委派任务、操作偏好与已验证结果会在多次运行中反复出现，durable memory 机制可以让团队保持一致性，避免重复配置成本。这是一项典型的 **"跨会话状态管理 + 团队记忆层"** 需求。

**关注度提示**：虽然 Issue 本身尚无评论与点赞，但其代表的需求（持久记忆、上下文复用）在多 agent 编排领域属于热点议题，建议维护者优先评估。

---

## 5. Bug 与稳定性

过去 24 小时内**未报告任何 Bug、崩溃或回归问题**。无稳定性事件。

---

## 6. 功能请求与路线图信号

### 信号 #296：跨运行持久记忆（Durable Memory）

| 维度 | 分析 |
|------|------|
| **需求类型** | 新功能 / 架构增强 |
| **提出方** | 外部合作伙伴（MemCode） |
| **价值场景** | 一人公司、agent 团队长期协作、上下文复用 |
| **技术契合度** | 高 —— 涉及 agent-team 核心运行时，属于底层能力扩展 |
| **纳入下一版本概率** | 中等偏低 —— 需评估与现有 memory/上下文机制的耦合度，且当前无相关 PR 草案 |

**建议**：维护者可考虑：
1. 在 Issue 中回复并征求意见征询（RFI），引导社区进一步细化需求；
2. 评估是否与现有 `memory` / `context-store` 模块冲突；
3. 若方向契合，可创建 `good first issue` 或 RFC 文档推动落地。

---

## 7. 用户反馈摘要

由于今日 Issue 评论数为 0，直接用户反馈有限。但从 #296 的描述中可提炼出以下信号：

- **使用场景**："一人公司"（one-person company）依赖 agent 团队完成多角色任务，用户希望角色/任务/偏好**跨运行可复用**。
- **痛点**：当前每次运行需重新注入已批准的上下文，带来配置冗余与一致性风险。
- **期望**：durable memory 层能持久化"已验证的产出"（validated outcomes），降低重复决策成本。
- **满意/不满意倾向**：Issue 措辞积极，属于**合作型需求**，而非投诉或不满。

---

## 8. 待处理积压

| 类型 | 编号 | 标题 | 状态 | 风险提示 |
|------|------|------|------|---------|
| Issue | [#296](https://github.com/TinyAGI/tinyagi/issues/296) | Could TinyAGI preserve approved context across agent-team runs? | OPEN（新建未响应） | ⚠️ 来自外部合作伙伴，延迟响应可能影响合作意向与社区信任 |

**提醒维护者**：
- #296 为今日唯一新增 Issue，建议**24 小时内**给出初步回复（acknowledge + 下一步计划），以维护社区参与感。
- 仓库无 PR 积压风险，但建议核对是否有已开放但未在统计窗口内的活跃 Issue/PR。

---

## 📊 健康度指标速览

| 指标 | 数值 | 评估 |
|------|------|------|
| Issues 新增/活跃 | 1 | 🟢 正常 |
| Issues 已关闭 | 0 | 🟡 响应待补充 |
| PR 待合并 | 0 | 🟢 无积压 |
| PR 已合并 | 0 | 🟡 代码层无推进 |
| 新版本发布 | 0 | 🟡 静默期 |
| 社区互动（评论/👍） | 0 | 🔴 需激活 |

**整体健康度评级**：**B-（稳定但偏静默）**

---

*报告生成基于 GitHub 公开数据，时间窗口：2026-09-13 至 2026-09-14。如需查看完整 Issue 列表或订阅更新，请访问 [github.com/TinyAGI/tinyagi](https://github.com/TinyAGI/tinyagi)。*

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目日报
**日期：2026-09-14**

---

## 1. 今日速览

Moltis 项目今日保持高活跃度，过去 24 小时内发布了 1 个新版本（`20260913.02`），合并/关闭了 4 个 PR 并处理了 2 个 Issue。社区贡献者 `penso` 表现尤为活跃，主导完成了 Reasoning 默认值持久化、Telegram 工具策略暴露等多项关键改进；`GTanger` 与 Dependabot 也分别贡献了功能增强与依赖更新。整体看，项目维护响应迅速，Issue→PR 闭环效率高（#1259 与 #1264 均在当日/隔日内被对应 PR 解决），目前积压可控，仅有 1 个开放 PR 待合并与 1 个外部功能请求等待评估。

---

## 2. 版本发布

### 🚀 v20260913.02（2026-09-13 发布）

本次为常规补丁版本，虽未提供详细 changelog，但从同期合并的 PR 可推断主要包含以下变更：

- **Reasoning 模块升级**：新增 `max` 推理强度等级，并补充 `xhigh` 的别名 `extra-high`，合并 PR #1253。
- **聊天体验改进**：新增 `chat.reasoning_default` 配置项，允许跨会话持久化默认推理强度，PR #1266（关闭 #1259）。
- **Telegram 集成修复**：共享频道工具权限策略现在与 Slack 对齐，开放 `untrusted_audience` 与 `untrusted_tools` 配置，PR #1265（关闭 #1264）。
- **依赖更新**：通过 Dependabot 升级 babel/astro/js-yaml 等多个 npm 包，PR #1263。

**迁移注意事项**：若已使用 `xhigh` 推理等级，配置可平滑过渡，`extra-high` 为新增兼容别名；若在 Telegram 共享频道中曾遇到工具失效问题，升级后需检查并显式配置 `untrusted_tools` 列表。

🔗 [Release 链接](https://github.com/moltis-org/moltis/releases/tag/20260913.02)

---

## 3. 项目进展

今日合入的 4 个 PR 显著推进了项目的"可控推理 + 多通道工具治理"两大主线：

| PR | 类型 | 影响 |
|---|---|---|
| [#1266](https://github.com/moltis-org/moltis/pull/1266) | Feature | Reasoning 默认值跨会话持久化，闭环 #1259 |
| [#1253](https://github.com/moltis-org/moltis/pull/1253) | Feature | 新增 `max` 推理档位 + OpenAI Codex Responses API 透传 |
| [#1265](https://github.com/moltis-org/moltis/pull/1265) | Bugfix | Telegram 共享频道工具权限与 Slack 对齐，修复 #1264 |
| [#1263](https://github.com/moltis-org/moltis/pull/1263) | Chore | npm 依赖批量升级（babel/astro/js-yaml 等） |

**整体评估**：项目在"细粒度推理控制"与"多通道工具策略一致性"两个方向同步迈进，工程成熟度持续提升。其中 #1266 + #1253 形成组合拳，#1265 反映了 Telegram 集成正在补齐与 Slack 的功能差距。

---

## 4. 社区热点

今日 Issues/PRs 评论数普遍偏低（多数为 0），但按"实际推动力"评估，热度焦点集中在：

- 🔥 **[#1268](https://github.com/moltis-org/moltis/issues/1268)「可选的高级记忆 Provider」** — MemCode CEO Vivek Gupta 提出集成请求，将 Moltis 已有的持久化能力视为合作切入点。这是今日唯一来自外部厂商的实质性接入意向。
- 🔥 **[#1266](https://github.com/moltis-org/moltis/pull/1266)「默认推理强度可配置化」** — 直接对应用户诉求 #1259，体现维护者对体验类 Issue 的快速闭环能力。
- 🔥 **[#1265](https://github.com/moltis-org/moltis/pull/1265)「Telegram 共享频道工具策略暴露」** — 响应 Bug #1264，反映多通道用户的真实痛点。

**诉求分析**：社区目前对"可控的推理行为"和"多通道一致性"两大主题最为关心，前者关乎高级用户对模型行为的精细调节，后者关乎多平台部署时的安全/能力治理。

---

## 5. Bug 与稳定性

| 严重程度 | Issue | 描述 | 修复状态 |
|---|---|---|---|
| 🟡 中 | [#1264](https://github.com/moltis-org/moltis/issues/1264) | Telegram 共享频道中工具完全停止工作 | ✅ 已在 #1265 修复并合并 |

**说明**：今日仅报告 1 个 Bug，已通过 PR #1265 当日闭环。修复涉及 `untrusted_audience`/`untrusted_tools` 在 Telegram 配置、运行时访问、存储序列化、API 响应脱敏四个层面的贯通，整体属于一次性彻底修复，未见回归报告。系统稳定性表现良好。

---

## 6. 功能请求与路线图信号

### 今日新增功能请求

- **[#1268](https://github.com/moltis-org/moltis/issues/1268) 高级记忆 Provider 接入**（MemCode）
  - **信号强度**：⭐⭐⭐⭐ — 来自外部商业方，具备合作落地潜力
  - **契合度**：与 Moltis 现有的 memory/sandbox/MCP 架构高度契合
  - **建议评估点**：是否将记忆后端抽象为可插拔 Provider，定义 trait/interface，避免硬编码

### 闭环中的功能请求

- **[#1259](https://github.com/moltis-org/moltis/issues/1259) 默认推理强度可配置**（CLOSED → #1266）
  - 体现路线图方向：**推理控制粒度持续细化**

### 仍有 1 个待合并 PR

- **[#1267](https://github.com/moltis-org/moltis/pull/1267)** Hooks 全生命周期事件分发（OPEN）
  - 修复 #1255；将 `AgentEnd`/`MessageSending` 等钩子对齐流式/非流式路径
  - 预计将并入下个版本

**路线图推断**：项目正在向"更精细的模型行为控制"（推理档位、Provider 可插拔）与"更统一的通道治理"（Telegram/Slack 能力对齐、生命周期 Hooks）方向演进。

---

## 7. 用户反馈摘要

⚠️ **说明**：今日活跃 Issues 评论数均为 0，无可引用的对话式反馈。以下内容基于 Issue/PR 描述文本提炼：

- **Telegram 共享频道用户**（#1264）：在多人共享频道中遭遇工具完全失效，反映出"默认 deny-all 策略过严"与"配置入口缺失"的双重体验问题。用户对 Slack 上已有的同类配置存在路径依赖。
- **重视模型行为可控的用户**（#1259）：希望为新会话设置默认推理强度并跨会话持久化，暗示高频使用 Moltis 时不希望每次手动调节。
- **企业/产品集成方**（#1268）：MemCode 表达了对"安全 Rust agent server + 内置记忆 + 跨会话召回"组合能力的认可，期望通过高级记忆 Provider 与 Moltis 共建生态。

**总体满意度信号**：从快速闭环的 Issue 节奏看，用户体验类诉求响应迅速，社区情绪偏正面。

---

## 8. 待处理积压

| 类型 | 编号 | 标题 | 风险点 |
|---|---|---|---|
| 🔴 待合并 PR | [#1267](https://github.com/moltis-org/moltis/pull/1267) | hooks: dispatch agent & outbound message lifecycle events | 修复 #1255，跨流式/非流式路径，影响 Hook 生态完整性 |
|  待评估 Issue | [#1268](https://github.com/moltis-org/moltis/issues/1268) | Optional advanced memory provider (MemCode) | 外部合作意向，需要维护者明确接口演进策略 |

**维护者关注建议**：
1. 优先 review #1267，确认 Hook 事件顺序与现有订阅者兼容性。
2. 对 #1268 给出初步回应（哪怕是"我们正在评估 Provider 抽象层"），避免外部合作方流失注意力。

---

## 📊 项目健康度评分（仅供参考）

| 维度 | 评分 | 说明 |
|---|---|---|
| 维护活跃度 | ⭐⭐⭐⭐⭐ | 单日 4 PR 合并 + 1 发布 |
| Issue 响应速度 | ⭐⭐⭐⭐⭐ | 两个 Issue 当日闭环 |
| 社区参与度 | ⭐⭐⭐ | 外部评论偏少，但有外部合作信号 |
| 代码质量信号 | ⭐⭐⭐⭐ | 关注 hooks/配置序列化/响应脱敏，细节到位 |
| 长期积压风险 | ⭐⭐⭐⭐ | 仅 1 个待合并 PR，整体可控 |

---

*报告基于 GitHub 公开数据生成，所有链接均指向 moltis-org/moltis 仓库。*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目日报 · 2026-09-14

> 数据来源：agentscope-ai/CoPaw（GitHub Issues & PRs 近 24 小时数据）
> 报告生成时间：2026-09-14

---

## 1. 今日速览

CoPaw 今日社区活跃度**中等偏高**：过去 24 小时共产生 8 条 Issue 更新与 19 条 PR 更新，PR 数量显著高于 Issue，显示出代码侧推进节奏较快。Issue 侧以**功能增强请求与体验类 Bug 为主**，且多为真实用户使用 v2.2.1 版本过程中发现的具体问题（含移动端交互、Hub 运维、定时任务可靠性等）。PR 侧涵盖 **memory、plugins、providers、runtime、i18n、mcp、console theme** 等多个模块，呈现"齐头并进、分散发力"的特征。**当日无新版本发布**，但已合并 2 个 PR（含 1 项文档修正和 1 项国际化重大补全），整体健康度良好。

---

## 2. 版本发布

**今日无新版本发布。** 最近一次公开版本仍为社区 Issue 中频繁引用的 **v2.2.1**。

---

## 3. 项目进展（已合并/关闭）

| # | 类型 | 标题 | 影响面 |
|---|---|---|---|
| [#7706](https://github.com/agentscope-ai/QwenPaw/pull/7706) | docs | 移除文档中不存在的 `qwenpaw providers` CLI 命令 | 文档准确性修复，避免误导新用户 |
| [#4009](https://github.com/agentscope-ai/QwenPaw/pull/4009) | feat(i18n) | 新增巴西葡萄牙语（pt-BR）本地化 | 国际化覆盖扩张，Console 与官网同步支持 |

此外 Issue [#3429](https://github.com/agentscope-ai/QwenPaw/issues/3429)（在 Docker 镜像中预装 himalaya 等常用 CLI 工具）已**关闭**，建议关注后续是否在 CHANGELOG 中以「Won't fix / Done」形式给出明确说明，避免重复提问。

> 📌 **评价**：今日合并量较少，但文档与 i18n 两项均属"低风险、高边际收益"型提交；pt-BR 的补全为拉美用户打开了正式入口，是一次有意义的生态扩展。

---

## 4. 社区热点（按讨论/反应度）

### 4.1 重点关注 Issue

| Issue | 标题 | 评论数 | 关注度 |
|---|---|---|---|
| [#7709](https://github.com/agentscope-ai/QwenPaw/issues/7709) | 定时任务经常无输出，结果被折叠在步骤或 thinking 中 | 2 | ⭐⭐⭐ |
| [#7739](https://github.com/agentscope-ai/QwenPaw/issues/7739) | 历史对话面板希望可移至右侧 | 2 | ⭐⭐⭐ |
| [#7705](https://github.com/agentscope-ai/QwenPaw/issues/7705) | Agent 工作目录设置不生效、UI 缺乏提示 | 1 | ⭐⭐ |
| [#7707](https://github.com/agentscope-ai/QwenPaw/issues/7707) | 安卓浏览器会话框不支持换行 | 1 | ⭐⭐ |
| [#7740](https://github.com/agentscope-ai/QwenPaw/issues/7740) | Hub 模式下管理员无法为用户重置密码 | 1 | ⭐⭐ |
| [#7693](https://github.com/agentscope-ai/QwenPaw/issues/7693) | Creator 多图生成被"审核通过"打断后永久卡 RUNNING | 1 | ⭐⭐⭐ |

### 4.2 热点诉求分析

- **定时任务可靠性**（#7709）是当前最迫切的产品级问题。用户反映"理应输出的结果经常被折叠在步骤或者 thinking 中"，并附有截图，影响日常使用信任度。
- **多端布局灵活性**（#7739、#7707）正在集中爆发：14 寸笔记本与安卓移动端的布局痛点都被提上桌面，前者要求"历史对话右移"，后者要求"输入框区分换行与提交"。
- **企业/Hub 模式基础运维**（#7740）首次进入视野，说明 Hub 用户群体正在扩大，运维需求开始出现。

---

## 5. Bug 与稳定性

按严重程度排序：

| 严重度 | Issue | 概述 | 已有 fix PR？ |
|---|---|---|---|
| 🔴 高 | [#7693](https://github.com/agentscope-ai/QwenPaw/issues/7693) | Creator 多图项目被"审核通过"打断后任务永久卡在 RUNNING，串行槽未恢复调度 | ❌ 暂无 PR |
| 🟠 中 | [#7709](https://github.com/agentscope-ai/QwenPaw/issues/7709) | 定时任务输出结果经常缺失或被折叠至 thinking 块 | ❌ 暂无 PR |
| 🟠 中 | [#7705](https://github.com/agentscope-ai/QwenPaw/issues/7705) | Agent 工作目录设置不持久；UI 缺乏"基于文件夹的项目会话"入口提示 | ❌ 暂无 PR |
| 🟡 低 | [#7684 (PR)](https://github.com/agentscope-ai/QwenPaw/pull/7684) | 自定义 OpenAI 兼容 provider 的模型发现接口将所有错误统一报为 `provider_unavailable`，HTTP 状态码丢失 | ✅ 已通过 [#7684](https://github.com/agentscope-ai/QwenPaw/pull/7684) 修复（待合并） |
| 🟡 低 | [#7738 (PR)](https://github.com/agentscope-ai/QwenPaw/pull/7738) | 中间件注入的 kwargs（如 `streamIdleTimeoutMs`）未过滤，导致 OpenAI SDK 抛 `TypeError` | ✅ 已通过 [#7738](https://github.com/agentscope-ai/QwenPaw/pull/7738) 修复（待合并） |
| 🟢 已处理 | [#3429](https://github.com/agentscope-ai/QwenPaw/issues/3429) | Docker 镜像预装 CLI 工具 | ✅ Issue 已关闭 |

> ⚠️ **建议**：#7693 与 #7709 均影响核心工作流（Creator 自动化、定时任务），且无对应 fix PR，建议维护者优先响应。

---

## 6. 功能请求与路线图信号

| 功能 | Issue / PR | 落地概率评估 |
|---|---|---|
| Console 可定制主题色 | [PR #7741](https://github.com/agentscope-ai/QwenPaw/pull/7741) 已就绪，含 6 套内置配色 | 🟢 高（PR 已提交，仅待 Review） |
| 历史对话面板右移 | [Issue #7739](https://github.com/agentscope-ai/QwenPaw/issues/7739) | 🟡 中（涉及主布局重构，需排期） |
| 安卓输入框换行 | [Issue #7707](https://github.com/agentscope-ai/QwenPaw/issues/7707) | 🟢 高（仅前端交互改造） |
| Hub 管理员重置用户密码 | [Issue #7740](https://github.com/agentscope-ai/QwenPaw/issues/7740) | 🟡 中（运维刚需，Hub 路线图强信号） |
| Agent 自主上下文管理 | [Issue #7733](https://github.com/agentscope-ai/QwenPaw/issues/7733) | 🟡 中（架构层面，依赖底层 token 策略） |
| 多通道 Bot 统一管理插件 bot-manager | [PR #7702](https://github.com/agentscope-ai/QwenPaw/pull/7702) | 🟢 高（PR 已就绪，解决 WeChat/DingTalk 等多通道碎片化问题） |
| 本地 Hub 管理员引导 | [PR #7696](https://github.com/agentscope-ai/QwenPaw/pull/7696) `qwenpaw hub --init-admin USERNAME` | 🟢 高（远程服务器运维刚需） |
| DeepSeek V4 Flash 能力补全 | [PR #7736](https://github.com/agentscope-ai/QwenPaw/pull/7736) | 🟢 高（模型目录数据更新） |
| ReMeLight memory 独立模型 | [PR #7719](https://github.com/agentscope-ai/QwenPaw/pull/7719) | 🟡 中（成本/性能权衡，社区可能需要讨论） |

---

## 7. 用户反馈摘要

来自 Issue 评论的真实声音：

- **信任度受损**：定时任务输出不稳定（#7709）——"平时的正常对话有时候也会时不时出现这种不显示的情况，有时候是结果被放在 thinking 中，有时候是干脆没有结果"，反映出对核心自动化能力的信任动摇。
- **小屏体验拥挤**（#7739）："在 14 寸笔记本上，各区域内容被折叠，需要滑动才能看清全部，视觉上非常难受"——呼吁布局可配置。
- **移动端输入别扭**（#7707）："安卓下，输入法只有换行按钮，无回车按钮。但现在的会话框又是点击换行就提交"——典型触屏/输入法适配缺失。
- **企业级运维缺口**（#7740）："目前在 Hub 模式下，管理员不能为用户重置密码，建议增加此基础运维功能"——Hub 模式正在从尝鲜走向生产部署。
- **新手引导不足**（#7705）："到底在哪里选择文件夹是基于文件夹的项目会话？没有提示，小白表示很难理解啊"——首次使用路径缺少可发现性。
- **国际化覆盖增强**：[PR #7734](https://github.com/agentscope-ai/QwenPaw/pull/7734) 修复了 pt-BR 中"3860/4275 keys"中已标记翻译但存在缺陷的条目，反映拉美社区参与度持续上升。

---

## 8. 待处理积压（提醒维护者关注）

| # | 类型 | 标题 | 停滞时长 |
|---|---|---|---|
| [#7211](https://github.com/agentscope-ai/QwenPaw/pull/7211) | PR (first-time-contributor, ready-for-human-review) | fix(runtime): 防止注入上下文持久化为用户聊天历史 | **约 24 天** ⚠️ |
| [#7413](https://github.com/agentscope-ai/QwenPaw/pull/7413) | PR | fix(runtime): 流式生成器关闭时保留状态 | 约 15 天 |
| [#7491](https://github.com/agentscope-ai/QwenPaw/pull/7491) | PR | fix(plugins): 保留预发布版本的最小版本排序 | 约 12 天 |
| [#7532](https://github.com/agentscope-ai/QwenPaw/pull/7532) | PR (first-time-contributor) | 修复启用 Langfuse 后工具输出为空 | 约 11 天 |
| [#7632](https://github.com/agentscope-ai/QwenPaw/pull/7632) | PR (first-time-contributor) | fix(runtime): 为未知斜杠命令返回反馈 | 约 6 天 |

> 🔔 **维护者提示**：#7211 已挂起超过 3 周，并已明确标记 `ready-for-human-review`，对首次贡献者尤为友好且影响面（运行时注入上下文污染）较关键，建议优先处理以释放善意反馈循环。

---

### 📊 项目健康度仪表盘

| 指标 | 数值 | 评估 |
|---|---|---|
| 24h Issue 活跃度 | 8 | 🟢 正常 |
| 24h PR 活跃度 | 19 | 🟢 高于均值 |
| Issue 关闭率 | 12.5% (1/8) | 🟡 一般 |
| PR 合并率 | 10.5% (2/19) | 🟡 一般 |
| 长期停滞 PR（>14 天） | 2 | 🟡 关注 |
| 新发布版本 | 0 | 🟢 无紧迫发布需求 |
| 首次贡献者参与 | 7 人次 | 🟢 社区活跃度优秀 |

---

*报告基于 GitHub 公开数据自动生成，仅供参考。链接均指向对应 Issue/PR 页面。*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw 项目动态日报

**日期：2026-09-14**
**仓库：qhkm/zeptoclaw**
**报告生成时间窗口：过去 24 小时**

---

## 1. 今日速览

ZeptoClaw 过去 24 小时社区活跃度处于**低位**，整体呈"静默运营"状态：仅产生 1 条新 Issue，无任何 PR 提交与版本发布。该 Issue 来自外部项目方 [MemCode](https://memcode.in) 的创始人 Vivek Gupta，属于合作/集成咨询性质，而非代码缺陷或功能请求。仓库核心开发节奏暂未受外部干扰，处于相对平稳的维护期。维护者需重点关注外部集成诉求的响应时效，避免潜在合作机会流失。

---

## 2. 版本发布

⚠️ **今日无新版本发布。**

建议关注者同步查看仓库 Tags 与 Releases 页面以获取最新版本信息。

---

## 3. 项目进展

️ **今日无 PR 合并或关闭。**

代码层面无实质性推进。考虑到该项目处于"小而精"的 Rust 本地优先二进制定位，无频繁发版属正常节奏；但若该状态持续超过一周，建议关注 issue tracker 与 milestone 看板，确认是否仍有活跃开发分支。

---

## 4. 社区热点

### 🔥 唯一活跃议题

**[#678 Could ZeptoClaw offer durable memory without weakening its local-first boundary?](https://github.com/qhkm/zeptoclaw/issues/678)**
- 作者：memcodeoff（Vivek Gupta，MemCode 创始人兼 CEO）
- 创建时间：2026-09-13
- 评论数：0 | 👍：0
- 状态：OPEN

**诉求分析：**
此议题并非典型用户反馈，而是 **B2B 合作 / 生态集成的试探**。发起人明确介绍了 ZeptoClaw 的架构特征（tools、memory、channels、providers、sandboxed autonomy 的本地优先 Rust 二进制），并提出核心问题：

> 在不破坏 local-first 边界的前提下，ZeptoClaw 是否能提供"持久化记忆（durable memory）"能力？

这是个人 AI 助手赛道中长期存在的关键张力点——**本地隐私 vs. 跨会话记忆连续性**。MemCode 作为外部记忆层提供商，潜在合作模式可能是：MemCode 提供持久化记忆后端，ZeptoClaw 通过本地优先的同步通道与 MemCode 交互（类似端到端加密），既保留数据主权又获得持久记忆。

**维护者建议：**
即使短期内不准备集成外部记忆服务，也建议回应此议题，明确 ZeptoClaw 在 memory 模块上的设计哲学（纯本地 SQLite？加密同步？plugin interface？），以引导社区预期。

---

## 5. Bug 与稳定性

✅ **今日未报告任何 Bug、崩溃或回归问题。**

过去 24 小时无崩溃报告、性能退化或行为异常反馈，表明项目在稳定性方面处于良好状态。由于样本量小（仅 1 条 Issue），该结论仅代表短期表现。

---

## 6. 功能请求与路线图信号

| 信号源 | 内容 | 评估 |
|---|---|---|
| Issue #678 | 持久化记忆（durable memory）+ local-first 边界保护 | 高价值外部信号，但属于**合作意向**而非具体功能 PR |

**判断依据：**
- 当前仓库**无相关 PR**，无法从代码层面评估纳入下一版本的可能性；
- "durable memory" 已是 LLM Agent 类项目的标配需求（MemGPT、Letta 等均提供），ZeptoClaw 若要保持竞争力，记忆模块的演进路径值得关注；
- 维护者若希望保持仓库"极简"特性，可在 plugin/hook 层面提供扩展点，将持久化记忆作为可选模块而非核心依赖。

---

## 7. 用户反馈摘要

由于今日**无用户使用反馈类 Issue**（仅有 1 条合作咨询），无法提炼真实用户痛点或满意度信号。

**间接观察：**
- 仓库在过去 24 小时内未出现任何新用户提问、错误报告或使用障碍反馈，说明现有用户群可能处于**稳定使用期**或**低活跃度期**；
- 建议结合 GitHub Insights 的活跃独立用户数与 Discussions 区流量，判断是否进入"维护期"。

---

## 8. 待处理积压

### 📌 当前关注项

| 编号 | 类型 | 创建时间 | 等待时长 | 备注 |
|---|---|---|---|---|
| [#678](https://github.com/qhkm/zeptoclaw/issues/678) | 集成咨询 | 2026-09-13 | < 24 小时 | **建议优先响应**，体现维护者对外部合作的开放态度 |

### ⚠️ 历史积压提醒

由于本报告仅基于过去 24 小时数据，**无法识别长期未响应的历史 Issue**。建议：
1. 维护者定期审查 `is:issue is:open updated:<2025-01-01` 过滤条件下的长期未响应议题；
2. 使用 `triage` 或 `needs-response` 标签分类管理。

---

## 📊 项目健康度速览

| 指标 | 当前状态 | 评估 |
|---|---|---|
| 提交活跃度 |  无积压 | 正常维护期 |
| Issue 响应 |  待响应 #678 | 建议 48 小时内回复 |
| PR 处理 | ⚪ 无 PR | 无压力 |
| 版本发布 | ⚪ 今日无发版 | 持续关注 |
| Bug 暴露面 | 🟢 零报告 | 短期稳定 |
| 外部关注度 | 🟡 单一集成咨询 | 维护者态度待表态 |

---

**报告说明：** 本报告基于 GitHub 公开数据生成，数据时效性受 API 同步延迟影响。如需更深入的历史趋势分析或特定模块的代码层评估，请提供更长时间窗口的原始数据。

> 📎 数据来源：[github.com/qhkm/zeptoclaw](https://github.com/qhkm/zeptoclaw)

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报
**日期：2026-09-14**

---

## 1. 今日速览

ZeroClaw 今日社区活跃度处于**中高水平**：过去 24 小时共 37 条 Issue 更新（32 条仍活跃，5 条已关闭）和 50 条 PR 更新（**全部仍处于待合并状态，0 条合并/关闭**），无新版本发布。从议题分布看，项目正处于 **v0.8.5 稳定分支收尾 + RFC 治理改革并行推进期**，重点议题集中在安全/权限策略、Provider 可靠性（OpenCode/Anthropic 兼容层）、ZeroCode/ACP 会话恢复以及 Windows CI 栈溢出等稳定性问题。值得注意的是，50 条 PR 全部待合并、零合并的情况较为罕见，可能反映出维护者正在集中处理 RFC 决策队列（#8692）或等待大型 XL PR 的协同推进。

---

## 2. 版本发布

**无新版本发布。** v0.8.5 稳定化跟踪器 #9459 仍在运行，最新分支仍以 master 上的滚动修复为主。

---

## 3. 项目进展

### 今日关闭的 Issue（5 条已闭环）

| # | 标题 | 影响面 | 结论 |
|---|---|---|---|
| [#10324](https://github.com/zeroclaw-labs/zeroclaw/issues/10324) | cron 手动触发在 agent 重命名后仍存在 check-then-act 跨 agent 边界问题 | 安全/S2 | 已修复 |
| [#10580](https://github.com/zeroclaw-labs/zeroclaw/issues/10580) | Docs 链接 CI 应全仓库检查悬空链接（不仅是新增） | CI/文档 | 已修复 |
| [#10533](https://github.com/zeroclaw-labs/zeroclaw/issues/10533) | `model_routing_config` 拒绝 `custom.*` 槽位 | Provider/P1 | 已修复 |
| [#10721](https://github.com/zeroclaw-labs/zeroclaw/issues/10721) | `knowledge.db_path` 波浪号扩展误为全局替换 | 工具/S2 | 已修复 |
| [#10837](https://github.com/zeroclaw-labs/zeroclaw/issues/10837) | RPC `config/set` 绕过 `Config::validate()`（与 #10320 重复关闭） | 安全 | 已修复 |

### 今日合并/关闭的 PR

**0 条合并，0 条关闭**——所有 50 条 PR 仍处于 OPEN 状态，这是过去 24 小时最显著的特征信号。建议维护者评估是否存在审查积压。

### 重要的"in-progress"修复（Issue 层面推进）

- [#10734](https://github.com/zeroclaw-labs/zeroclaw/issues/10734) `RpcDispatcher::process_line` Windows 栈溢出（2MB 上限 2% 余量）——**in-progress**
- [#10066](https://github.com/zeroclaw-labs/zeroclaw/issues/10066) SOP 引擎在记录输出 schema 拒绝前就推进后续步骤 ——**in-progress**
- [#10603](https://github.com/zeroclaw-labs/zeroclaw/issues/10603) OpenCode providers 漏发 `x-opencode-session` header（S1，👍3）——**in-progress**
- [#10788](https://github.com/zeroclaw-labs/zeroclaw/issues/10788) Code/ACP 失败 turn 丢弃已接受的 prompt 和完成的工具调用 ——**in-progress**

整体看，今日推进了 **5 个已知 Bug 的关闭修复**（CI/工具/Provider 路由三个层面），但**没有进入主干合并的代码变更**，主干集成节奏放缓。

---

## 4. 社区热点

### 评论数最多的 Issue（讨论热度 TOP）

| 排名 | Issue | 标题 | 评论数 | 👍 |
|---|---|---|---|---|
| 🥇 | [#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) | 维护者决策队列（RFC/设计 Issue 接受-拒绝-延期分流） | 15 | 0 |
| 🥈 | [#10549](https://github.com/zeroclaw-labs/zeroclaw/issues/10549) | RFC：简化 RFC 投票流程，移除强制讨论窗口，REVISE 终止当前快照 | 10 | 0 |
| 🥉 | [#10366](https://github.com/zeroclaw-labs/zeroclaw/issues/10366) | RFC：明确 PR 审查证据、新鲜度警告与作者行为边界 | 7 | 0 |
| 4 | [#10734](https://github.com/zeroclaw-labs/zeroclaw/issues/10734) | RpcDispatcher Windows 栈溢出 | 7 | 0 |
| 5 | [#9381](https://github.com/zeroclaw-labs/zeroclaw/issues/9381) | crates.io 发布与 cargo-install 跟踪器 | 5 | 0 |

### 反应数最高的 Issue

- [#10603](https://github.com/zeroclaw-labs/zeroclaw/issues/10603) **👍 3** ——OpenCode providers 漏发 session header，影响 Go 模型可用性并存在账户封禁风险，**社区对该合规性问题关注度最高**。

### 讨论焦点解读

- **元治理改革**（#8692、#10549、#10366）占据前三：社区与维护者正在重新设计 RFC 流程本身，包括讨论窗口、投票规则和"快速合并通道"——这是项目成熟期的典型信号。
- **Windows CI 稳定性** (#10734、#10793)：2MB 栈空间下 `RpcDispatcher::process_line` 接近耗尽，三个非确定性测试失败——表明 Windows 已成为 CI 瓶颈。
- **Provider 可靠性** (#10603、#10736、#10787、#10779)：OpenCode 与 Anthropic 兼容层的多个流式恢复、429 重试、header 缺失问题集中爆发，反映接入外部 provider 的脆弱性。

---

## 5. Bug 与稳定性

### 🔴 P0（最高严重度）

- [#10066](https://github.com/zeroclaw-labs/zeroclaw/issues/10066) **S1 - workflow blocked**：SOP 引擎在 output schema 校验失败时仍推进后续步骤再记录拒绝——破坏 SOP 的 fail-fast 语义。**in-progress，无 fix PR**。

### 🟠 P1（高严重度）

- [#10734](https://github.com/zeroclaw-labs/zeroclaw/issues/10734) `RpcDispatcher::process_line` Windows 栈溢出 (`0xc00000fd`)。**in-progress**。
- [#10603](https://github.com/zeroclaw-labs/zeroclaw/issues/10603) 👍3 OpenCode 漏发 `x-opencode-session`，导致 Go 模型不可用。**in-progress**。
- [#10788](https://github.com/zeroclaw-labs/zeroclaw/issues/10788) Code/ACP 失败 turn 丢弃已持久化的 prompt 与完成的工具交换。**in-progress**。
- [#10785](https://github.com/zeroclaw-labs/zeroclaw/issues/10785) zerocode notification lag 误取消所有运行中的 turn——`begin_notification_resync → session/cancel`。**in-progress**。
- [#10324](https://github.com/zeroclaw-labs/zeroclaw/issues/10324) ✅ **已关闭** cron 重命名窗口期跨 agent 边界问题。
- [#10533](https://github.com/zeroclaw-labs/zeroclaw/issues/10533) ✅ **已关闭** `model_routing_config` 槽位校验分歧。
- [#10635](https://github.com/zeroclaw-labs/zeroclaw/issues/10635) runtime profile 成本限额不反映全局日预算。
- [#10645](https://github.com/zeroclaw-labs/zeroclaw/issues/10645) delegated 子循环缺乏 cost-tracking 上下文。
- [#10828](https://github.com/zeroclaw-labs/zeroclaw/issues/10828) `openai-codex --device-code` 使用过时端点返回 404。

### 🟡 P2（中等严重度）

- [#10736](https://github.com/zeroclaw-labs/zeroclaw/issues/10736) Pre-output 流式失败时跳过声明的非流式 fallback。
- [#10787](https://github.com/zeroclaw-labs/zeroclaw/issues/10787) Anthropic 529 单候选流恢复忽略 `provider_retries`。
- [#10779](https://github.com/zeroclaw-labs/zeroclaw/issues/10779) OpenCode 429 配额耗尽仍以亚秒退避重试。
- [#10793](https://github.com/zeroclaw-labs/zeroclaw/issues/10793) Windows 上三个 advisory 测试同时失败。
- [#10802](https://github.com/zeroclaw-labs/zeroclaw/issues/10802) `session/list-acp` 与 `turn_end` 报告的 `message_count` 不一致。
- [#10821](https://github.com/zeroclaw-labs/zeroclaw/issues/10821) 服务安装的 daemon 不写 stderr tracing，`service logs` 显示陈旧内容。
- [#10822](https://github.com/zeroclaw-labs/zeroclaw/issues/10822) 提议增加 `config/set-many` 原子批写 RPC。

**总结**：今日 8 个 P0/P1 中有 3 个处于 `in-progress` 但**无对应 fix PR 已合并**，说明修复仍在分支上推进；2 个已关闭，3 个等待方案。

---

## 6. 功能请求与路线图信号

### 新提出的 Feature 类 Issue（已 accepted，in-progress）

| Issue | 提议内容 | 配套 PR |
|---|---|---|
| [#10826](https://github.com/zeroclaw-labs/zeroclaw/issues/10826) | ZeroCode session root 显式选择 + 恢复时保留根目录 | 继 PR #10565 之后的 #10609 续作 |
| [#10822](https://github.com/zeroclaw-labs/zeroclaw/issues/10822) | `config/set-many` 原子批写 RPC | 无 PR |
| [#10812](https://github.com/zeroclaw-labs/zeroclaw/issues/10812) | WhatsApp DocumentMessage 携带 `jpegThumbnail`/`pageCount` | 无 PR |

### 较早期但仍未落地的功能 PR

- [#9143](https://github.com/zeroclaw-labs/zeroclaw/pull/9143) **XL**：`feat(channels): route plugin events through shared runtime`（distinguished contributor，blocked）
- [#9109](https://github.com/zeroclaw-labs/zeroclaw/pull/9109) **XL**：Hailo-Ollama 原生 provider（status: blocked, do-not-merge）
- [#10450](https://github.com/zeroclaw-labs/zeroclaw/pull/10450) **XL**：webhook chat 走 SSE 流式响应
- [#9535](https://github.com/zeroclaw-labs/zeroclaw/pull/9535) **XL**：context compaction 按模型窗口比例锚定
- [#10610](https://github.com/zeroclaw-labs/zeroclaw/pull/10610) **XL**：实现 RFC #7155 的 Shell V1 权限策略（Phase 0+1）
- [#10407](https://github.com/zeroclaw-labs/zeroclaw/pull/10407) **XL**：会话级持久化 prompt attachments（最多 4 个，SQLite 后端）
- [#10259](https://github.com/zeroclaw-labs/zeroclaw/pull/10259) **XL**：RPC 强制 principal 身份验证（#8289 stage 3）
- [#10255](https://github.com/zeroclaw-labs/zeroclaw/pull/10255) **XL**：`oidc.<alias>` token 验证 provider（#8289 stage 5）
- [#8965](https://github.com/zeroclaw-labs/zeroclaw/pull/8965) **XL**：技能声明式自动激活 + provider 切换 + 图片轮工具屏蔽
- [#10337](https://github.com/zeroclaw-labs/zeroclaw/pull/10337) **XL**：`git_operations` 遵守 allowed roots（修 #10334）

### 较小型近期 PR（更易合并）

- [#10843](https://github.com/zeroclaw-labs/zeroclaw/pull/10843) Telegram `add_reaction/remove_reaction` 实现 + 不支持频道显式失败
- [#10841](https://github.com/zeroclaw-labs/zeroclaw/pull/10841) 日志 sink 测试仅断言自身记录
- [#10840](https://github.com/zeroclaw-labs/zeroclaw/pull/10840) mdBook 生成 `llms.txt`/`llms-full.txt`
- [#10839](https://github.com/zeroclaw-labs/zeroclaw/pull/10839) 文档补全 `webhook-ingress` capability flag
- [#10838](https://github.com/zeroclaw-labs/zeroclaw/pull/10838) media markers 降级为模型不可回显的散文
- [#10245](https://github.com/zeroclaw-labs/zeroclaw/pull/10245) daemon 监督错误链保留

**路线图信号**：项目路线图明显呈现"**安全治理 + Provider 多样化 + ZeroCode/ACP 会话模型成熟化**"三大主线。10+ 个 XL PR 的积压反映主干集成压力较大。

---

## 7. 用户反馈摘要

从 Issues 评论与新开议题中提炼的真实痛点：

1. **OpenAI device-code 流程不可用** (#10828)：ZeroClaw v0.8.5 中 `openai-codex --device-code` 直接 404，CLI 无法完成设备码登录——影响 on boarding 体验，**新用户无法登录**。
2. **OpenCode Go 模型账户风险** (#10603)：漏发 session header 被 OpenCode 视为多账户滥用，可能触发账户封号。👍3 表明多位用户实际遇到。
3. **WhatsApp 文档预览缺失** (#10812)：PDF 在手机端显示为通用文件卡片，无内联预览。
4. **服务安装 daemon 静默无日志** (#10821)：通过 `zeroclaw service` 安装后 `service logs` 显示陈旧 stderr，用户无法排障——**运维体验受损**。
5. **Cron 重命名竞态** (#10324)：操作员重命名 agent 在窄窗口内可导致跨 agent 边界越权（已修）。
6. **ZeroCode/ACP 大上下文（~200k tokens）误取消** (#10785)：notification 同步逻辑误把 notification lag 转换为 cancel，3 个长会话被同时终止——**长任务可靠性受损**。
7. **波浪号路径全局替换** (#10721)：`knowledge.db_path` 中出现 `~` 字符即被错误展开为 home，knowledge tool 静默丢失数据（已修）。
8. **CLI `config set` 与 RPC `config/set` 绕过校验** (#10320/#10837)：范围类配置可被持久化为非法值而无错误——**对运维高危**，已通过两条 issue 闭环。

用户满意度方面，零 P0 未修复累积 → **用户对外的体感**正在稳步改善（今日 5 个关闭均为有效修复）。

---

## 8. 待处理积压

### ⚠️ 长期未合并的大型 PR（创建已超过 30 天）

| PR | 创建时间 | 等待天数 | 状态 |
|---|---|---|---|
| [#8965](https://github.com/zeroclaw-labs/zeroclaw/pull/8965) 技能声明式自动激活 | 2026-07-11 | ~65 天 | stacked，需作者行动 |
| [#9109](https://github.com/zeroclaw-labs/zeroclaw/pull/9109) Hailo-Ollama 原生支持 | 2026-07-17 | ~59 天 | **blocked, do-not-merge** |
| [#9143](https://github.com/zeroclaw-labs/zeroclaw/pull/9143) plugin 事件共享 runtime | 2026-07-18 | ~58 天 | needs-author-action |
| [#9535](https://github.com/zeroclaw-labs/zeroclaw/pull/9535) context compaction 按模型窗口比例 | 2026-07-29 | ~47 天 | needs-author-action |
| [#9584](https://github.com/zeroclaw-labs/zeroclaw/pull/9584) CLI 插件安装 egress grant ceremony | 2026-07-31 | ~45 天 | distinguished |
| [#9724](https://github.com/zeroclaw-labs/zeroclaw/pull/9724) `always_ask` 跨越 Full autonomy | 2026-08-04 | ~41 天 | needs-maintainer-review（已被 maintainer 接手） |
| [#9753](https://github.com/zeroclaw-labs/zeroclaw/pull/9753) 区分 absent vs empty allowed_tools | 2026-08-04 | ~41 天 | needs-maintainer-review |
| [#10337](https://github.com/zeroclaw-labs/zeroclaw/pull/10337) git operations allowed roots | 2026-08-25 | ~20 天 | needs-author-action |

### ⚠️ 长期活跃但无实质合并的跟踪器

- [#9459](https

</details>

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*