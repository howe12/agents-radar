# OpenClaw 生态日报 2026-10-05

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-10-05 03:31 UTC

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
**报告日期：2026-10-05**

---

## 1. 今日速览

OpenClaw 仓库今日呈现**高活跃度、强维护压力**态势——过去 24 小时 Issues/PRs 更新各达 500 条，其中 Issues 关闭 132 条、PR 合并/关闭 203 条，反映维护团队在持续清理积压。当前焦点高度集中于 **2026.9.7/8 版本升级链路稳定性**（连续多日出现 macOS/Windows/Linux 上的回滚失败、激活 Doctor 拒绝、launcher 权限自污染等 P0 阻塞），同时 `claude-cli`、`codex-app`、`memory` 三大子系统的深层回归问题正集中爆发。维护者 `steipete` 单日提交了多组大型清理/重构 PR（含 sessions、Apple、update 生命周期、runtime 等），显示出以"重构优先"推进工程治理的工作节奏。

---

## 2. 版本发布

**今日无新版本发布。** 但从社区反馈看，2026.9.7 → 2026.9.8 的升级链路在多平台仍存在阻断性故障，详见 §5。

---

## 3. 项目进展

今日合并/关闭的 PR 集中体现了**"代码质量治理"与"边缘场景修复"**双线推进：

| PR | 主题 | 影响 |
|---|---|---|
| [#165236](https://github.com/openclaw/openclaw/pull/165236) | refactor(runtime): deslop impossible internal states（XL，已关闭） | 移除多处"重复校验已保证形状"的多余检查，提升代码可读性 |
| [#165302](https://github.com/openclaw/openclaw/pull/165302) | refactor(cli): simplify command option plumbing（已关闭） | 收敛 CLI 命令注册路径 |
| [#151037](https://github.com/openclaw/openclaw/pull/151037) | fix(browser): recover after harmless Chrome extension cleanup fails（已关闭） | 修复 Chrome 扩展清理瞬时失败导致 worker 永久暂停 |
| [#165290](https://github.com/openclaw/openclaw/pull/165290) | perf(process): reduce Gateway fork costs for Git and TLS | 大型 Linux 网关降低 PR 元数据读取与 HTTPS 证书生成的 fork 开销 |
| [#165203](https://github.com/openclaw/openclaw/pull/165203) | perf(gateway): share opted-in read responses across connections | `cron.list` / `sessions.list` / `models.list` 等读操作可跨连接复用响应 |
| [#165298](https://github.com/openclaw/openclaw/pull/165298) | perf(test): avoid repeated suspension reader pool restarts | 33 个 suspension 测试运行更快 |
| [#165217](https://github.com/openclaw/openclaw/pull/165217) | refactor(sessions): compose compute and fork paths on the incognito actor | 推进 sessions 内核重构（P7f2 路线图节点） |
| [#165307](https://github.com/openclaw/openclaw/pull/165307) | refactor(apple): deslop shared and macOS native services | Apple/macOS 原生壳瘦身 |
| [#165306](https://github.com/openclaw/openclaw/pull/165306) | refactor(update): deslop immutable update lifecycle | 更新生命周期去重，保留外部行为 |

**进展评估：** 大量 PR 标注为 "status: 👀 ready for maintainer look" 或 "📣 needs proof"，说明工程积压得到显著缓解，但仍需维护者二次确认或补充证据；项目整体在**收敛边缘状态、提升测试与运行效率**方向稳健前进，但用户可见的"阻塞性问题修复"节奏被版本链路问题牵制。

---

## 4. 社区热点

**评论数 Top Issues（按热度排序）：**

| Issue | 标题 | 评论 | 👍 |
|---|---|---|---|
| [#42475](https://github.com/openclaw/openclaw/issues/42475) | [Feature] Per-agent cost budget enforcement at the gateway level | 25 | 1 |
| [#97616](https://github.com/openclaw/openclaw/issues/97616) | [Bug] OpenClaw leaks unreaped hook/tool child processes（僵尸进程累积） | 17 | 1 |
| [#150635](https://github.com/openclaw/openclaw/issues/150635) | [Bug] short-term recall retention 驱逐召回条目 → dreaming deep phase 无法 promote | 17 | 0 |
| [#114612](https://github.com/openclaw/openclaw/issues/114612) | [memory-core] SQLite 无界增长（`memory_index_chunks` + `memory_embedding_cache` 无保留策略） | 16 | 0 |
| [#121661](https://github.com/openclaw/openclaw/issues/121661) | CLI-backed subagent announce-wake：模型伪造 tool calls 及其输出 | 15 | 0 |
| [#161976](https://github.com/openclaw/openclaw/issues/161976) | WhatsApp DM 在重启时于 durable registry handoff 反复失败 | 14 | 0 |
| [#143632](https://github.com/openclaw/openclaw/issues/143632) | iMessage 入站消息被重投 2-3 次，dedupe 未生效 | 12 | 0 |
| [#143278](https://github.com/openclaw/openclaw/issues/143278) | Heartbeat 内部输出泄漏到 Telegram 用户聊天 | 12 | 0 |
| [#144291](https://github.com/openclaw/openclaw/issues/144291) | Config 热重载中止所有在飞 agent turn | 12 | 0 |
| [#144502](https://github.com/openclaw/openclaw/issues/144502) | WhatsApp 无法播放 TTS 语音（"audio unavailable"） | 12 | 0 |

**诉求分析：**
- **成本/资源治理** 是头部需求（#42475：网关层每日/每月预算），反映多 agent 部署下运维者对"防失控消费"的迫切需求；
- **内存子系统可持续性**（SQLite 增长、recall 驱逐）与 **CLI 后端信任边界**（伪造 tool call、scope 继承）成为第二大议题焦点；
- **多通道可靠性**（WhatsApp、Telegram、Signal、iMessage）持续高频出现，提示通道层仍是 OpenClaw 当前最不稳定的用户接触面。

---

## 5. Bug 与稳定性

### 🔴 P0 — 发布阻断（Release Blocker）

| Issue | 现象 | Fix PR? |
|---|---|---|
| [#164396](https://github.com/openclaw/openclaw/issues/164396) | Windows 11 + Node 22 LTS 全新安装 2026.9.8 后无法连接本地网关 | ❌ 未见 |
| [#143752](https://github.com/openclaw/openclaw/issues/143752) | 中断的包激活可能"搁浅" canonical CLI，无 package-only 重放路径 | ❌ 未见 |
| [#164066](https://github.com/openclaw/openclaw/issues/164066) | 2026.9.8 托管更新仍回滚（#160671/#163803 在 main，未合入 9.8） | ❌ 已被标记"在 main 已修"，但发布构建未带入 |
| [#164074](https://github.com/openclaw/openclaw/issues/164074) | 原始更新恢复卡在 publication-complete，retained previous package fingerprint 变化时无法继续 | ❌ 未见 |
| [#144447](https://github.com/openclaw/openclaw/issues/144447) | Git/dev 更新在 macOS 上以 managed-service-preflight 结束，未激活候选 | ❌ 未见 |
| [#157415](https://github.com/openclaw/openclaw/issues/157415) | `Doctor --fix` 拒绝为外部安装的 acpx/codex 执行 post-session 插件迁移 | ❌ 未见 |
| [#143334](https://github.com/openclaw/openclaw/issues/143334) | Lost subagent completion delivery 使请求方卡在 settle-yield | ❌ 未见 |
| [#164422](https://github.com/openclaw/openclaw/issues/164422) | macOS 非 root 更新自污染 launcher 组（wheel），自阻 package-swap（已关闭但根因被复盘） | ⚠️ 关闭 |
| [#158390](https://github.com/openclaw/openclaw/issues/158390) | plugin-captures tmp 目录未 GC，磁盘无限增长 | ❌ 未见 |

### 🟠 P1 — 高优先级

| Issue | 现象 | Fix PR? |
|---|---|---|
| [#97616](https://github.com/openclaw/openclaw/issues/97616) | Hook/tool 子进程未被 reap，累积僵尸进程致运行时降级 | ❌ 未见 |
| [#161379](https://github.com/openclaw/openclaw/issues/161379) | Gateway 在 prepared model catalog refresh loop 中独占一个 CPU 核 | ❌ 未见 |
| [#161976](https://github.com/openclaw/openclaw/issues/161976) | WhatsApp DM 重启 handoff 失败 | ❌ 未见 |
| [#162119](https://github.com/openclaw/openclaw/issues/162119) | Codex 模型就地切换后间歇性 403 owner-verification | ❌ 未见 |
| [#118839](https://github.com/openclaw/openclaw/issues/118839) | 重启恢复回归："restart recovery claim changed before agent adoption"（WebChat→Telegram） | ❌ 未见 |
| [#164074](https://github.com/openclaw/openclaw/issues/164074) | 同上（P0 列表） | — |
| [#162637](https://github.com/openclaw/openclaw/issues/162637) | Native Codex 子完成交付前失败（`SESSION_WORK_START_CHANGED`） | ❌ 未见 |
| [#157126](https://github.com/openclaw/openclaw/issues/157126) | claude-cli MCP bridge 继承首发 scope，重启恢复后 owner turns 失 `operator.admin` | ❌ 未见 |
| [#164972](https://github.com/openclaw/openclaw/issues/164972) | claude-cli multi-agent teams：clarification/follow-up/parent context 矩阵可见性下全面失效 | ❌ 未见 |
| [#149239](https://github.com/openclaw/openclaw/issues/149239) | `session placement turn settlement is closed` 被喂入 fallback 循环 | ❌ 未见 |
| [#154572](https://github.com/openclaw/openclaw/issues/154572) | `sessions_spawn` → claude-cli-runtime 子进程必败（`SessionTranscriptWriterClaimReboundError`） | ❌ 未见 |

### 🟡 P1/P2 — 中等回归 | 中等重要

| Issue | 现象 | Fix PR? |
|---|---|---|
| [#84037](https://github.com/openclaw/openclaw/issues/84037) | Codex app-server 稳态 CPU 与 helper 进程开销过高 | ❌ 未见 |
| [#143757](https://github.com/openclaw/openclaw/issues/143757) | Windows Scheduled Task 默认配置无法无人值守运行网关 | ❌ 未见 |
| [#143581](https://github.com/openclaw/openclaw/issues/143581) | Signal 入站消息卡在 spool retry ~23h，重启前不投递 | ❌ 未见 |
| [#144502](https://github.com/openclaw/openclaw/issues/144502) | WhatsApp TTS 语音 48 kHz + Lavf vendor tag 无法播放 | ❌ 未见 |
| [#143632](https://github.com/openclaw/openclaw/issues/143632) | iMessage 入站消息重复 2-3 次进入会话上下文 | ❌ 未见 |
| [#142271](https://github.com/openclaw/openclaw/issues/142271) | CLI 后端 cron `agentTurn` 在 secret egress proxy 激活时无法运行 | ❌ 未见 |
| [#150498](https://github.com/openclaw/openclaw/issues/150498) | Subagent announce run 丢失 child report，失败时绕过请求方 | ❌ 未见 |
| [#145309](https://github.com/openclaw/openclaw/issues/145309) | claude-cli 后端忽略 `CLAUDE_CONFIG_DIR` | ✅ [#164551 关联](https://github.com/openclaw/openclaw/pull/164551)（需证明） |
| [#163029](https://github.com/openclaw/openclaw/issues/163029) | 2026.9.7 仍存在中波重载外部插件（每波 40–70s 主线程停顿），即 #160658 之后 | ❌ 未见 |
| [#160959](https://github.com/openclaw/openclaw/issues/160959) | 大型外部插件 capture 阻塞事件循环数分钟（2026.9.6 回归） | ❌ 未见 |

**总体观察：** 大量 P0/P1 仍处 **"无 fix PR"** 状态；合并中的 PR 多为通用性能/重构，**针对上述回归的针对性修复** 仍待提交或维护者 look。

---

## 6. 功能请求与路线图信号

| Feature | Issue | 已关联 PR / 状态 |
|---|---|---|
| **Per-agent cost budget**（网关层每日/每月上限） | [#42475](https://github.com/openclaw/openclaw/issues/42475) | 无 PR，标记 `clawsweeper:needs-product-decision` |
| **Per-agent `agentToAgent` + session visibility 范围控制** | [#59149](https://github.com/openclaw/openclaw/issues/59149) | 无 PR，长期 `needs-product-decision / security-review` |
| **按源目录而非 agent 索引 memory**（同 workspace 多 agent 共享向量库） | [#95724](https://github.com/openclaw/openclaw/issues/95724) | 无 PR，但与 [#114612](https://github.com/openclaw/openclaw/issues/114612) SQLite 无界增长互补 |
| **Bounded launch contract for Swarm `agents.run`** | [#156632](https://github.com/openclaw/openclaw/issues/156632) | 配套实现 PR [#155442](https://github.com/openclaw/openclaw/pull/155442)（未在本批 Top PR 列表，但已声明 Implementation） |
| **Dead-lettered ingress 事件可恢复/可配置**（#120419 续） | [#120422](https://github.com/openclaw/openclaw/issues/120422) | 已关闭，但社区仍在反馈延迟信息流损失 |

**判断 ——
- 与"多 agent 编排"和"运行期消费/安全治理"相关的需求热度持续，**很可能进入 2026.10 路线图**；
- "memory 索引去重 / 共享" 与 "SQLite 无界增长" 是同一问题的两面，**合并修复优先级高**，但目前无明确 PR 入选；
- "bounded launch contract" 已附 PR，更易纳入下一版本。

---

## 7. 用户反馈摘要

**运维/部署侧痛点：**
- 升级体验不稳定：用户从 2026.9.5/9.6 → 9.7/9.8 在 macOS（#164422、#144447）、Linux（#164074）、Windows（#164396、#143757）均遇到回滚/激活失败/launcher 自污染，**严重影响生产可用性**；
- Docker/Podman 沙箱（#162914）、systemd 用户服务、Windows Scheduled Task 多种部署目标均出现"无人值守启动失败"或"长时间阻塞"问题（#160959、#163029）；
- 插件外部化后自助托管困难：自建容器无法让 `openKeyedStore` 信任自托管 channel（#92516）。

**消息/通道侧痛点：**
- WhatsApp（DM handoff、TTS 语音）、Telegram（heartbeat 内部输出泄漏）、Signal（spool retry 23h）、iMessage（重复投递）—— 用户最直接的体验是**消息丢失或延迟**，且修复散落在多个 issue 中；
- 多通道协作时（多发送者）后到消息可抢占先到消息（[#165164](https://github.com/openclaw/openclaw/pull/165164) 修复中）。

**会话/内存子系统痛点：**
- "short-term recall 驱逐召回条目 → dreaming deep phase 不 promote"（#150635）导致用户感知记忆系统不工作；
- SQLite 无界增长（#114612）令生产实例磁盘压力长期累积；
- `session placement turn settlement is closed` 进入 fallback 循环（#149239）令 displacing 入站消息"丢 run"。

**CLI 后端信任/安全痛点：**
- `claude-cli` MCP bridge 继承首发 scope 导致 `owner turn` 失权限（#157126）；
- CLI-backed 子 agent announce-wake 被设计为 tool-free，但模型伪造 tool call（#121

---

## 横向生态对比

# 个人 AI 助手/智能体开源生态横向对比分析报告

**报告日期**：2026-10-05
**覆盖项目**：10 个活跃项目 + 3 个无活动项目（合计 13 个）
**核心参照**：OpenClaw

---

## 1. 生态全景

当前个人 AI 助手/自主智能体开源生态处于**"高速迭代 + 稳定性阵痛"并行**的阶段：14 个采样项目中 10 个有活跃信号，3 个已完全停摆；功能侧（多 agent 编排、MCP 工具、本地模型、Provider 兼容）持续高速推进，但**所有头部项目都存在未解决的 P0/S0 级稳定性问题**——版本升级链路故障、通道投递丢失、静默失败三类症状在 7 个项目中反复出现。命名上的"Claw 系"繁衍（OpenClaw / PicoClaw / NanoClaw / NullClaw / IronClaw / ZeptoClaw / ZeroClaw / TinyClaw）暗示社区已经形成事实性的"参考实现家族"，但分化方向日益明显。

---

## 2. 各项目活跃度对比

| 项目 | Issues (新/活跃) | PRs (新/活跃) | 今日 Release | 健康度评估 | 关键特征 |
|---|---|---|---|---|---|
| **OpenClaw** | ~500 / 500 | ~500 / 500 | ❌ | 🟡 高活跃/高阻塞 | 维护者集中（steipete），P0 大量未修，发布链路反复出问题 |
| **ZeroClaw** | ~43 / 43 | ~50 / 50 | ❌ | 🟡 高活跃/有 S0 | 1 起 S0 数据丢失 + 5 起 S1，未打 tag |
| **NanoClaw** | ~8 / 8 (全 OPEN) | ~24 / 15 OPEN | ✅ **v2026.10.0-rc.1** | 🟢 唯一发版 | 日历版本体系首版，Issue 关闭率 = 0% |
| **Hermes Agent** | ~50 / 50 | ~50 / 50 | ❌ | 🟠 净流入 44 PR | 修复 PR 远超合并速度，积压加重 |
| **NanoBot** | ~7 / 7 | ~52 / 14 关闭 | ❌ | 🟢 中高活跃/闭环好 | 14/52 PR 当日关闭，3/7 Issue 当日关闭 |
| **CoPaw** | ~11 / 10 OPEN | ~10 / 9 OPEN | ❌ | 🟠 中等偏高 | 0 合并、5 进入 review，多 P0 审批/启动 bug |
| **PicoClaw** | ~3 / 3 OPEN | ~5 / 5 已合并 | ❌ | 🟢 单日合并密集 | 5 个核心 fix 一次性合并，x1F916 单点贡献 |
| **NullClaw** | ~4 / 2 OPEN | ~11 / 5 OPEN | ❌ | 🟠 单维护者风险 | 10/11 PR 来自 vernonstinebaker |
| **IronClaw** | 0 | ~5 / 4 OPEN (dependabot) | ❌ | 🔴 仅依赖机器人 | 42 天无人工活动，wasm PR 严重超期 |
| **LobsterAI** | ~5 / 3 stale OPEN | ~6 / 3 OPEN | ❌ | 🟡 中低活跃 | 6 个月前核心 Bug 仍未关闭 |
| TinyClaw / Moltis / ZeptoClaw | — | — | — | ⚫ 无活动 | 已停滞 |

---

## 3. OpenClaw 在生态中的定位

### 优势维度
- **绝对体量碾压**：当日 500/500 的 Issues/PRs 更新量是第二梯队（ZeroClaw、Hermes Agent）的 **~10 倍**，反映最广泛的用户基础与最丰富的边缘场景暴露；
- **治理框架成熟**：已具备 per-agent budget、agentToAgent 可见性、bounded launch contract、swarm 编排等高级抽象，处于多 agent 平台化的**领先位置**；
- **生态外溢**：LobsterAI 主动打通"到 OpenClaw 的 MCP 工具透传"（PR #2710），说明 OpenClaw 已被外部项目当作**事实下游**。

### 短板与风险
- **P0 修复比例最低**：9 个 P0 中仅 1 个关闭（#164422），其余 8 个仍处于"未挂 PR / 未合入发布构建"状态；
- **维护者单点**：steipete 单日提交多组 XL 重构，**bus factor 风险显著**；
- **发布链路反噬**：连续多版本（9.6/9.7/9.8）出现跨平台回滚/激活失败，严重损害生产可用性口碑；
- **代码质量 PR 与用户痛点脱节**：今日合并的几乎全是 "deslop"、"perf"、"refactor" 类型，**针对性修复 P0 阻塞的 PR 仍待提交**。

### 与同类的差异化
| 维度 | OpenClaw | NanoBot | Hermes Agent | ZeroClaw |
|---|---|---|---|---|
| 实现语言 | TS/Node 主，Rust 辅助 | Python | Python | Rust |
| 架构侧重 | 多 agent 网关 + 长会话 | Subagent + Provider 兼容 | 模型层 + Skills | 安全沙箱 + 网关解耦 |
| 治理成熟度 | ⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐⭐ |
| 边缘稳定性 | ⭐⭐（P0 积压） | ⭐⭐⭐⭐ | ⭐⭐（P1/P2 密集） | ⭐⭐⭐（有 S0） |

---

## 4. 共同关注的技术方向

| 方向 | 涉及项目 | 共性诉求 |
|---|---|---|
| **Token 成本可观测性** | OpenClaw #42475、NanoBot #5266、ZeroClaw #11515 | 多 agent 部署下需要按调用维度追溯成本、防失控消费；OpenClaw 推动网关层预算，NanoBot 用户曾"2 小时百万 token"恐慌 |
| **通道投递可靠性** | OpenClaw（WhatsApp/Telegram/Signal/iMessage）、NanoClaw（Telegram #3569/#4030/#4033）、LobsterAI（定时任务 #850/#837）、ZeroClaw（Slack #11416）、PicoClaw（QQ #3394） | 消息丢失/延迟/重投是**用户感知最强**的痛点，几乎每个有通道能力的项目都在同时修 |
| **更新/升级链路** | OpenClaw（9.7→9.8 三平台失败）、NanoClaw（macOS #4021）、PicoClaw（ARM #3399）、NullClaw（Docker #1017） | 升级即"高风险动作"是普遍痛点，反映**发布工程被低估** |
| **内存/会话子系统可持续性** | OpenClaw（#114612、#150635）、NanoClaw（#3643）、NanoBot（#5900）、ZeroClaw（#11420） | SQLite 无界增长、长会话硬编码超时、上下文压缩噪音，是长期运行的共同隐患 |
| **静默失败可观测性** | NullClaw（#1018）、Hermes Agent（#102945、#123926、#125091）、ZeroClaw（#11515） | "exit 0 + 无日志 + 输出被破坏"被多个项目用户独立标记为最痛体验 |
| **Provider 兼容矩阵** | CoPaw（#7599/#7026）、ZeroClaw（#9190/#11371）、OpenClaw（#162119）、NanoBot（#6005） | 新模型/网关接入常引发 kwargs 透传、session header、rotate_key 等边缘缺陷 |
| **插件/扩展信任边界** | OpenClaw（#157126、#121661）、CoPaw（#7840）、NanoBot（#5388） | MCP bridge scope 继承、事件循环共享、schema 字节预算成为共同安全议题 |

---

## 5. 差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 架构关键差异 |
|---|---|---|---|
| **OpenClaw** | 全栈多 agent 网关 | 企业/重度个人用户 | 完整 sessions + memory + swarm + 网关预算 |
| **NanoBot** | 轻量 Subagent + Provider | 个人开发者 | "subagent 工具"统一、Provider 兼容层精细打磨 |
| **Hermes Agent** | 模型层 + Skills 生态 | 研究者/模型玩家 | PM 托管 Python + 本地 GGUF 路由（#119194） |
| **PicoClaw** | 边缘 Agent + 多通道 | 嵌入式/中文社区 | ARM 32 位修复 + OneBot/QQ/DingTalk 通道 |
| **NanoClaw** | 生产级发布治理 | 运维/多部署用户 | 日历版本 + stable/beta 双通道 + release-following update |
| **NullClaw** | Zig 实现的紧凑网关 | 性能敏感/移动端用户 | 2 MiB 重栈 + Discord/Telegram/MAX 三栈修复 |
| **IronClaw** | WASM 沙箱运行时 | 安全敏感场景 | wasmtime/wit-parser 依赖长期卡 PR（42 天） |
| **LobsterAI** | MCP 工具消费侧 | 工具生态构建者 | toolFilter + 并行工具调用 + 工具选择器 UI |
| **CoPaw** | Console/前端集成 | 桌面端用户 | Console chunk + lazy-route + WebView2 缓存治理 |
| **ZeroClaw** | 安全严格 + Rust runtime | 审计/合规场景 | Seatbelt + ZeroCode TUI + cost ledger |

**关键观察**：项目分化已从"是否做 agent"演进到"以何种姿态面对生产"——OpenClaw 走**功能堆栈**路线、ZeroClaw 走**安全边界**路线、NanoClaw 走**发布工程**路线、NullClaw 走**极致运行时**路线、CoPaw/LobsterAI 走**消费侧 UX** 路线。

---

## 6. 社区热度与成熟度分层

### 🚀 第一梯队：高速迭代（功能扩张为主）
- **OpenClaw / ZeroClaw / Hermes Agent / NanoBot**：日处理量 50+ 起，合并/关闭日净流入量大，**功能 PR 多但阻塞 PR 多**，处于"边修边发"状态；
- 共同特征：fix PR 与功能 PR 比例约 6:4，**但 P0/S0 修复速度跟不上问题暴露速度**。

### 🛠️ 第二梯队：质量巩固（修复为主）
- **PicoClaw / NullClaw / CoPaw**：单日合并 1-5 个 PR，**几乎全是 bugfix**，功能 PR 极少；
- 共同特征：处于"清账期"——PicoClaw 一次清完 5 个核心回归，NullClaw 在做通道栈与 CLI 流式输出加固，CoPaw 集中在 Console 启动容错。

### 🌱 第三梯队：低活跃/停滞
- **IronClaw** 仅 dependabot 在动；**LobsterAI** 有核心 bug 6 个月未关；**TinyClaw / Moltis / ZeptoClaw** 已 24h 零活动。

### 📊 成熟度评估
| 成熟度 | 项目 | 证据 |
|---|---|---|
| **生产可用** | NanoClaw（唯一正式发版）、NanoBot（闭环率高） | 有 RC、有合并节奏 |
| **准生产** | OpenClaw、ZeroClaw | 体量大但 P0/S0 拖累 |
| **早期/边缘** | PicoClaw、NullClaw、CoPaw、Hermes Agent | 修复密度高但功能未完整 |
| **沉睡** | IronClaw、LobsterAI、TinyClaw、Moltis、ZeptoClaw | 无维护者活动 |

---

## 7. 值得关注的趋势信号

### 趋势 ①：**多 agent 治理从"能跑"走向"敢用"**
- OpenClaw #42475（per-agent budget）、#59149（scope 可见性）、#156632（bounded launch contract）三者构成完整治理框架；
- Hermes Agent #100944（Kanban worker capability 粒度）、ZeroClaw #7951（effort-based 路由）指向同一方向；
- **对开发者的参考**：构建多 agent 系统时，**预算、scope、可见性**必须与编排逻辑同步设计，而非事后补丁。

### 趋势 ②：**"沉默失败"成为头号工程债**
- 至少 4 个项目（NullClaw、Hermes Agent、ZeroClaw、CoPaw）独立用户明确点名"exit 0 + 无错误 + 输出被破坏"是最痛体验；
- NullClaw PR #1004（脱敏错误体日志）、ZeroClaw #11515（cost ledger 残写处理）、OpenClaw #11518（approval provenance）共同指向**审计可追溯**是下一阶段共识需求；
- **对开发者的参考**：在 fail-closed 路径上区分"用户拒绝"、"缺输入"、"系统错"是必须项，

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目日报 · 2026-10-05

> 数据来源：[HKUDS/nanobot](https://github.com/HKUDS/nanobot) | 统计周期：过去 24 小时

---

## 一、今日速览

NanoBot 在过去 24 小时呈现出 **中等偏高的开发活跃度**，仓库当日共有 52 个 PR 更新和 7 个 Issue 更新，处理节奏紧凑——14 个 PR 已关闭，3 个 Issue 已关闭，闭环效率较高。整体代码变更集中在三个方向：**WebUI 交互细节打磨**（侧边栏焦点管理、移动端抽屉行为）、**Provider/Channel 行为修正**（temperature 字段保留、回退模型通知、单元格读取）以及 **Session/Subagent 一致性**（删除后状态保护、消息归属）。无新版本发布，说明维护团队在大量修复 PR 落地后倾向于继续累积再发版。

---

## 二、版本发布

🚫 **今日无新版本发布**。近期合并的多个修复（[#6005](https://github.com/HKUDS/nanobot/pull/6005)、[#6058](https://github.com/HKUDS/nanobot/pull/6058)、[#6059](https://github.com/HKUDS/nanobot/pull/6059)、[#6061](https://github.com/HKUDS/nanobot/pull/6061) 等）大概率会合并到下一个补丁版本中。

---

## 三、项目进展

### ✅ 今日已合并/关闭的重要 PR

| PR | 类型 | 关键内容 |
|----|------|---------|
| [#6005](https://github.com/HKUDS/nanobot/pull/6005) | Bug Fix (p2) | **Provider 修复**：保留兼容推理模型的 `temperature`，修复了 [#6002](https://github.com/HKUDS/nanobot/issues/6002) 中 `OpenAICompatProvider` 对所有 38 个 openai_compat provider 错误地丢弃 temperature 的问题 |
| [#5985](https://github.com/HKUDS/nanobot/pull/5985) | Feature (p2) | **Subagent 增强**：引入会话拥有的子代理创建、消息、检视、取消与实时观察能力，统一 `subagent` 工具 |
| [#6058](https://github.com/HKUDS/nanobot/pull/6058) | UI Fix | WebUI：恢复侧边栏菜单 Escape 关闭后的键盘焦点连续性 |
| [#6059](https://github.com/HKUDS/nanobot/pull/6059) | UI Fix | 侧边栏"Move to"子菜单 Escape 后焦点回退到操作按钮 |
| [#6061](https://github.com/HKUDS/nanobot/pull/6061) | UI Fix | 移动端：点击当前主题时自动关闭侧边栏抽屉 |
| [#6054](https://github.com/HKUDS/nanobot/pull/6054) | Docs | 修正 memory 指南中的 Git 仓库路径与历史搜索示例 |

### 📊 项目推进度评估
- **用户体验层**：WebUI 键盘导航、移动端体验显著改善，6 个相关 PR 集中处理。
- **底层稳健性**：Provider/Session/Subagent 三条主线都有推进，回归风险逐步收敛。
- **代码可观测性**：[#5846](https://github.com/HKUDS/nanobot/pull/5846) 为 BUILD 子阶段补充调试时间事件，未合并但方向有价值。

---

## 四、社区热点

### 🔥 高讨论度 Issue

1. **[#5266 - Token 消耗日志增强](https://github.com/HKUDS/nanobot/issues/5266)**（13 条评论）
   - 用户反馈：2 小时内百万级 token 被消耗却无明显活动。
   - 社区诉求：希望按调用维度记录 token 消耗以便定位异常来源。
   - 状态：长期未关闭，反映出 token 计费透明度是 **高频痛点**。

2. **[#6031 - 回退模型通知 chat 渠道](https://github.com/HKUDS/nanobot/issues/6031)**
   - 用户痛点：当模型跨 provider 回退时，聊天渠道（QQ、Telegram、Discord、Slack）用户无感知。
   - 已有关联 PR：[#6062](https://github.com/HKUDS/nanobot/pull/6062) 正在跟进，闭环速度快。

3. **[#5900 - 静默上下文压缩 + WeChat 渠道轮询日志降噪](https://github.com/HKUDS/nanobot/issues/5900)**（已关闭）
   - 体现了用户在自动化后台任务中希望"静默执行"的需求。

### 💡 社区诉求分析
用户当前最集中的三类需求：
- **可观测性**：token、模型调用、构建时延需要更细粒度日志；
- **跨渠道一致性**：WebUI 上的体验（如模型切换提示）需要扩散到所有聊天渠道；
- **后台任务静默化**：context compaction、idle dream、heartbeat 等不应打扰用户。

---

## 五、Bug 与稳定性

### 🐛 新报告 / 活跃 Bug（按严重程度排序）

| 严重度 | Issue | 描述 | 是否有修复 PR |
|--------|-------|------|--------------|
| **P1** | [#5266](https://github.com/HKUDS/nanobot/issues/5266) | Token 消耗异常高，缺乏定位手段 | ❌ 无 |
| **P2** | [#6008](https://github.com/HKUDS/nanobot/issues/6008) | WebUI 侧边栏初次 fetch 失败后状态被静默清空，用户后续操作可"重建"已删除项 | ✅ [#6009](https://github.com/HKUDS/nanobot/pull/6009) 修复已提交 |
| **P2** | [#6031](https://github.com/HKUDS/nanobot/issues/6031) | 模型回退对聊天渠道无通知 | ✅ [#6062](https://github.com/HKUDS/nanobot/pull/6062) 修复已提交 |
| **P2** | [#6029](https://github.com/HKUDS/nanobot/issues/6029) | 后台 idle/dream 触发 context 压缩时向活跃聊天渠道广播状态 | ❌ 无（与 #5900 相关） |
| **P3** | [#6024](https://github.com/HKUDS/nanobot/issues/6024) | Obsidian CLI 在 nanobot 下无法定位（`XDG_RUNTIME_DIR` 未传递） | ✅ 已关闭 |

### ⚠️ 回归风险提示
- [#5204](https://github.com/HKUDS/nanobot/pull/5204)（重构 Responses capabilities，p1）涉及 OpenAI / GitHub Copilot / DeepSeek 的能力声明，长期 conflict 状态，建议关注合并窗口。
- [#5846](https://github.com/HKUDS/nanobot/pull/5846)（BUILD 子阶段延迟追踪）虽未合并，但能为未来性能问题定位提供基础。

---

## 六、功能请求与路线图信号

| 提议 | 来源 | 可纳入下一版本概率 |
|------|------|--------------------|
| **Token 消耗细粒度日志** | [#5266](https://github.com/HKUDS/nanobot/issues/5266) | ⭐⭐⭐ 高（讨论充分，影响成本控制） |
| **聊天渠道回退模型通知** | [#6031](https://github.com/HKUDS/nanobot/issues/6031) + [#6062](https://github.com/HKUDS/nanobot/pull/6062) | ⭐⭐⭐⭐ 极高（PR 已就绪） |
| **后台 compaction 静默化** | [#6029](https://github.com/HKUDS/nanobot/issues/6029)、[#5900](https://github.com/HKUDS/nanobot/issues/5900) | ⭐⭐⭐⭐ 高（用户共鸣强） |
| **定时任务选择目标聊天** | [#6057](https://github.com/HKUDS/nanobot/pull/6057) | ⭐⭐⭐ 中（PR 已开，conflict 待解） |
| **本地可信 WebUI 扩展机制** | [#6032](https://github.com/HKUDS/nanobot/pull/6032) | ⭐⭐ 中（p2 + 安全考量） |
| **MCP schema 字节预算** | [#5388](https://github.com/HKUDS/nanobot/pull/5388) | ⭐⭐ 中（默认关闭，影响范围可控） |
| **session 焦点跨 turn 持久化** | [#5537](https://github.com/HKUDS/nanobot/pull/5537) | ⭐⭐⭐ 中（解决了 #3292） |

---

## 七、用户反馈摘要

### 😣 主要痛点
1. **Token 不透明**（[#5266](https://github.com/HKUDS/nanobot/issues/5266)）：用户对不可控的成本极度焦虑，2 小时百万级消耗触发恐慌，希望按调用维度追溯。
2. **跨渠道体验不一致**：WebUI 与 QQ/Telegram/Slack 等聊天渠道在"模型回退"等关键事件通知上脱节，用户感觉自己被当作次等公民。
3. **后台任务噪音**：idle/dream/heartbeat 周期触发的 context 压缩会主动发消息，对话被打断。

### 😊 满意点
- 移动端侧边栏交互的快速修复（[#6058](https://github.com/HKUDS/nanobot/pull/6058)、[#6059](https://github.com/HKUDS/nanobot/pull/6059)、[#6061](https://github.com/HKUDS/nanobot/pull/6061)）显示出维护者对细节的响应速度。
- Subagent 体系（[#5985](https://github.com/HKUDS/nanobot/pull/5985)）持续完善，生态逐步成型。

### 🔍 真实使用场景线索
- **Linux + Wayland + Obsidian** 桌面环境用户（[#6024](https://github.com/HKUDS/nanobot/issues/6024)）反映出 nanobot 已渗透到知识管理场景。
- **Telegram 群组 topic** 用户对 `topic_id` 暴露和 typing 状态话题感知有明确需求（[#5803](https://github.com/HKUDS/nanobot/pull/5803)）。

---

## 八、待处理积压

> 维护者重点关注候选

| Issue/PR | 标题 | 闲置时长 | 建议 |
|----------|------|----------|------|
| [#5266](https://github.com/HKUDS/nanobot/issues/5266) | Token 消耗日志 | ~60 天 | 讨论充分但缺认领，建议维护者明确优先级 |
| [#5388](https://github.com/HKUDS/nanobot/pull/5388) | MCP schema 预算 | ~53 天 | 与 #5298 相关，需维护者决策是否合并 |
| [#5152](https://github.com/HKUDS/nanobot/pull/5152) | Subagent 部分完成标记 | ~69 天 | 子代理语义完善，长期 conflict |
| [#5204](https://github.com/HKUDS/nanobot/pull/5204) | Responses capabilities 重构 | ~65 天 | p1 重要，conflict 需协调 |
| [#5545](https://github.com/HKUDS/nanobot/pull/5545) | Session 删除后过期写保护 | ~40 天 | 与 [#5483](https://github.com/HKUDS/nanobot/pull/5483) 主题重叠，可合并评审 |
| [#5483](https://github.com/HKUDS/nanobot/pull/5483) | 防止删除会话被延迟消息重建 | ~44 天 | 同上，建议合并评审 |

### 📌 维护者建议
1. **优先闭环已就绪修复**：[#6009](https://github.com/HKUDS/nanobot/pull/6009)、[#6062](https://github.com/HKUDS/nanobot/pull/6062)、[#6060](https://github.com/HKUDS/nanobot/pull/6060) 都已具备合并条件，可在本周内发版。
2. **Token 透明度议题**：[#5266](https://github.com/HKUDS/nanobot/issues/5266) 讨论密度高但迟迟未进入实施阶段，建议立项。
3. **Conflict PR 集中清理**：当前 38 个待合并 PR 中多标 `[conflict]`，建议发起一轮 rebase 协调周。

---

## 📈 项目健康度总评

| 维度 | 评分 | 说明 |
|------|------|------|
| 开发活跃度 | ⭐⭐⭐⭐ | 52 个 PR 更新、7 个 Issue 更新 |
| 闭环效率 | ⭐⭐⭐⭐ | 14/52 PR 当日关闭，3/7 Issue 当日关闭 |
| 用户响应速度 | ⭐⭐⭐⭐ | 高评论 Issue 多在 24 小时内有相关 PR 跟进 |
| 长期积压治理 | ⭐⭐ | 多张长期未合并的 conflict PR 提示合并瓶颈 |
| 版本节奏 | ⭐⭐⭐ | 修复频繁但未发版，预计短期内会推出补丁版本 |

---

*日报生成基于公开 GitHub 数据，如需深入分析某个特定主题或 PR，请告知。*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目日报 · 2026-10-05

## 1. 今日速览

Hermes Agent 仓库今日保持高强度迭代节奏：过去 24 小时 Issues/PRs 各 50 条更新，其中 Issues 关闭 4 条、PRs 关闭/合并 6 条，无新版本发布。**当日 PR 净流入 44 条待合并**，核心团队（@teknium1、@liuhao1024、@jonpol01 等）今日集中提交了 9 条修复 PR，涉及 PM/Update、本地模型、gateway、Sessions、Skills、插件目录等多个长期受损面。项目处于 **"密集修复期"**，主线仍围绕 v0.21.x 系列稳定化推进，但 0 release 发出版本信号偏弱，需关注合入速度与回归控制。

---

## 2. 版本发布

**无新版本发布**（24 小时内）。

注意：当前上游大量 fix 涉及 PM（Package Manager）布局、SSH profile、bot 模式 worker 启动、uv lock 等基础设施级变更，**强烈建议在合并前通过 release candidate 集中验证**，避免 0.21.5→0.21.6 出现新一轮回归。

---

## 3. 项目进展

今日 **6 条 PR 关闭/合并**，但从内容看多数为 invalid 关闭或过期 PR 清理，并非实质性功能落地。值得标记的"实质性推进"：

| PR | 标题 | 推进意义 |
|---|---|---|
| [#133072](https://github.com/NousResearch/hermes-agent/pull/133072) | Add pdf-surgeon 社区插件目录条目 | 插件目录生态扩展 |
| [#128140](https://github.com/NousResearch/hermes-agent/pull/128140) | 拒绝的 hub install/update/uninstall 现在返回非零退出码 | 修复 Desktop 静默失败根因之一 |
| [#133048](https://github.com/NousResearch/hermes-agent/pull/133048) | `pilk` 排除 newer 解决 [silk] 解析 | 关闭但被标 invalid，#[126194](https://github.com/NousResearch/hermes-agent/issues/126194) 仍 open，治标未完成

**整体评估**：今日为"积压 PR 集中提交日"，**PR 净流入远超合并速度**，积压明显加重。维护者应优先批量 review 由 @liuhao1024、@teknium1 提交的配套修复群。

---

## 4. 社区热点

按评论数排序的 Top 讨论：

| 排名 | Issue | 评论数 | 👍 | 主题 |
|---|---|---|---|---|
| 1 | [#123926](https://github.com/NousResearch/hermes-agent/issues/123926) | 17 | 0 | 插件启动时因 `_evict_modules` 遍历 `sys.modules` 报 `dictionary changed size during iteration`，随机子集平台集成静默丢失 |
| 2 | [#40239](https://github.com/NousResearch/hermes-agent/issues/40239) | 13 | **4** | 桌面端增加 pt-BR 本地化（backend/TUI 已有 357+ 行翻译，desktop UI 缺位） |
| 3 | [#125746](https://github.com/NousResearch/hermes-agent/issues/125746) | 6 | 0 | 同 #123926 的并发 discover_and_load 触发场景，已标 duplicate |
| 4 | [#125649](https://github.com/NousResearch/hermes-agent/issues/125649) | 6 | 0 | Kanban dispatcher worker 在 PM 托管 Python 下 `ModuleNotFoundError` 立即崩溃 |
| 5 | [#88994](https://github.com/NousResearch/hermes-agent/issues/88994) | 5 | 0 | SSH remote profile 回归（30299efa3 引入）已持续 ~6 周 |
| 6 | [#102945](https://github.com/NousResearch/hermes-agent/issues/102945) | 5 | 0 | 损坏的 config.yaml 静默回退到默认，用户覆盖全失效 |
| 7 | [#125091](https://github.com/NousResearch/hermes-agent/issues/125091) | 5 | 0 | Desktop Bot Mode `message_agent` 启动前 `No module named 'ruamel'` |
| 8 | [#125654](https://github.com/NousResearch/hermes-agent/issues/125654) | 5 | 0 | Bot-to-bot 投递 runner 在 payload interpreter 上启动，无 PM 依赖目录 |
| 9 | [#133013](https://github.com/NousResearch/hermes-agent/issues/133013) | 4 | 0 | sessions CLI 需展示筛选列并支持绝对日期排序 |
| 10 | [#130396](https://github.com/NousResearch/hermes-agent/issues/130396) | 4 | 0 | **已关闭** - Desktop markdown 表格重复渲染 |

**诉求分析**：
- **基础设施并发缺陷集中爆发**：`_evict_modules` 遍历 + 字典并发修改 + ruamel 缺失三个症状，本质都指向"PM 托管 Python 与各子系统集成时缺一致的依赖与锁约定"。
- **i18n 呼声强**：#40239 获 4 票（今日最高），巴西/葡语用户群是迄今最有组织的诉求方。
- **Sessions CLI 可用性**：用户从"能筛"推进到"能看清筛了什么"，反映 CLI 在高级筛选场景下透明度不足。

---

## 5. Bug 与稳定性

按严重程度排列（**P1 → P2 → P3**）：

### P1（最高严重度）
- [#132934](https://github.com/NousResearch/hermes-agent/issues/132934) — 长 CLI 会话中，模型将自身 compaction handoff 内容作为 assistant 回复发出，千字级复读，破坏会话摘要分类。**暂无 PR**。

### P2（核心功能受阻）
| Issue | 描述 | 是否有 Fix PR |
|---|---|---|
| [#125649](https://github.com/NousResearch/hermes-agent/issues/125649) | Kanban worker 在 PM Python 下启动即死 | ❌ 待补 |
| [#88994](https://github.com/NousResearch/hermes-agent/issues/88994) | SSH remote profile 回归（6 周未根治） | ✅ [#133070](https://github.com/NousResearch/hermes-agent/pull/133070)（仅 ownership 部分） |
| [#102945](https://github.com/NousResearch/hermes-agent/issues/102945) | config.yaml 损坏静默回退 | ❌ 待补 |
| [#125091](https://github.com/NousResearch/hermes-agent/issues/125091) | Desktop Bot Mode 缺 ruamel | ❌ 待补 |
| [#125654](https://github.com/NousResearch/hermes-agent/issues/125654) | Bot-to-bot 投递 runner 无 PM 依赖目录 | ❌ 待补 |
| [#119194](https://github.com/NousResearch/hermes-agent/issues/119194) | Ternary-Bonsai GGUF (1.58-bit) 被 planner 跳过 | ❌ 待补 |
| [#102725](https://github.com/NousResearch/hermes-agent/issues/102725) | 同 base_url 多 custom_providers 始终 heal 到第一个 | ❌ 待补 |
| [#132935](https://github.com/NousResearch/hermes-agent/issues/132935) | `/model --provider openai-codex` 中途切换报成功却未 rebind | ❌ 待补 |
| [#131991](https://github.com/NousResearch/hermes-agent/issues/131991) | Windows 桌面最小化到托盘后窗口死锁 | ❌ 待补 |
| [#120069](https://github.com/NousResearch/hermes-agent/issues/120069) | Claude Opus 5.5 不接受 `thinking.type=disabled` | ✅ **已关闭** |

### P3（一般 Bug）
- [#123926](https://github.com/NousResearch/hermes-agent/issues/123926) — ✅ [#132888](https://github.com/NousResearch/hermes-agent/pull/132888) 已提交 fix
- [#125746](https://github.com/NousResearch/hermes-agent/issues/125746) — 与上同根因（dup）
- [#125503](https://github.com/NousResearch/hermes-agent/issues/125503) — Termux bionic Python bundle 路径不匹配（dup）
- [#125923](https://github.com/NousResearch/hermes-agent/issues/125923) — `pre_gateway_dispatch` 在 busy-queue 路径被跳过（dup）
- [#133037](https://github.com/NousResearch/hermes-agent/issues/133037) — mmproj GGUFs 被当作可服务模型列出
- [#133008](https://github.com/NousResearch/hermes-agent/issues/133008) — Kanban triage 分解时子任务早于父任务派发
- [#128870](https://github.com/NousResearch/hermes-agent/issues/128870) — Desktop 重复渲染 — ✅ **已关闭**
- [#130396](https://github.com/NousResearch/hermes-agent/issues/130396) — Desktop markdown 表格重复渲染 — ✅ **已关闭**

**严重程度信号**：P1 1 条 + P2 ≥10 条 + P3 ≥10 条，**当前 Bug 密度偏高**，且大量依赖"PM/包/依赖布局"单一根因。**修复 PR 覆盖比例仅约 30%**。

---

## 6. 功能请求与路线图信号

按热度排序：

| 优先级信号 | 提案 | 已有 PR | 纳入下一版本概率 |
|---|---|---|---|
| 🔥🔥🔥 强 | [#40239](https://github.com/NousResearch/hermes-agent/issues/40239) Desktop pt-BR i18n | 无 | 高（翻译资源已存在） |
| 🔥🔥🔥 强 | [#133013](https://github.com/NousResearch/hermes-agent/issues/133013) sessions CLI 列出筛选列 | 无 | 高 |
| 🔥🔥 中 | [#133057](https://github.com/NousResearch/hermes-agent/issues/133057) `hermes cron cancel` 终止运行中的 cron | 无 | 中 |
| 🔥🔥 中 | [#100944](https://github.com/NousResearch/hermes-agent/issues/100944) Kanban worker profile 细粒度 capability | 无 | 中 |
| 🔥🔥 中 | [#133010](https://github.com/NousResearch/hermes-agent/issues/133010) browser_exec 在 Docker sandbox 内执行 | 无 | 低（架构改造） |
| 🔥 中 | [#37253](https://github.com/NousResearch/hermes-agent/issues/37253) 关闭硬编码 system prompt 注入 | 无 | 中 |
| 🔥 中 | [#132963](https://github.com/NousResearch/hermes-agent/issues/132963) `config set` 支持 list-type 命名项 | 无 | 中 |
| 💡 已有 PR | 调整 `/model` list cap | ✅ [#124162](https://github.com/NousResearch/hermes-agent/pull/124162) | 高 |
| 💡 已有 PR | Anthropic 兼容代理保留签名 thinking blocks | ✅ [#123021](https://github.com/NousResearch/hermes-agent/pull/123021) | 中 |

**路线图信号**：项目下一阶段会明显侧重"**诊断透明度**"（sessions CLI/config set/错误信息更可操作）+ "**安全与沙箱边界**"（Docker sandbox、SSH profile、shell-hook consent）。

---

## 7. 用户反馈摘要

从 Issues 评论中提炼的真实痛点：

1. **"静默失败"是头号怨念**：用户在多个 Issue（#123926、#102945、#125091、#125654、#132814、#131991、#128870）反复强调"只有一行 WARNING/没有错误提示"，反映日志可观测性需要系统级整改。

2. **PM（Package Manager）的边界仍在渗漏**：用户用 PM 托管 Python 跑出 `ModuleNotFoundError`，说明 PM 与 gateway/dispatcher/bot runner 之间的"启动上下文协议"还没收敛。@teknium1 在 [#133071](https://github.com/NousResearch/hermes-agent/pull/133071) 中也承认 update 阶段行计数不一致。

3. **桌面端 vs CLI 行为分裂**：多起 Issue 出现"CLI 跑得好，Desktop 跑挂"，集中在 Bot Mode、SSH profile、hub install action。@teknium1 的 [#133068](https://github.com/NousResearch/hermes-agent/pull/133068) 与 [#128140](https://github.com/NousResearch/hermes-agent/pull/128140) 直指 Desktop hub 静默问题。

4. **i18n 不对称**：用户已经自发翻译了 backend/TUI，但 desktop 仍是英文门槛，社区愿意做贡献但缺协作入口。

5. **隐含满意点**：#130396、#128870、#120069 三个 Bug 均在 24h 内关闭，且 #130396 与 #128870 复现路径明确（带帧级证据），说明有经验的外部 contributor 与核心团队配合顺畅。

---

## 8. 待处理积压

**长期未响应/未被根治的高优先级 Issue**（按打开时长排序）：

| Issue | 打开日 | 主题 | 风险 |
|---|---|---|---|
| [#37253](https://github.com/NousResearch/hermes-agent/issues/37253) | 2026-06-02 | 关闭硬编码 system prompt 注入 | P3，**4 个月** |
| [#40239](https://github.com/NousResearch/hermes-agent/issues/40239) | 2026-06-06 | Desktop pt-BR i18n | P3，**4 个月**，4 👍 |
| [#59562](https://github.com/NousResearch/hermes-agent/pull/59562) (PR) | 2026-07-06 | Telegram FIFO 队列中途照片丢消息 | P2，**3 个月**，待合并 |
| [#72082](https://github.com/NousResearch/hermes-agent/issues/72082) | 2026-07-26 | Background self-improvement 越权写文件 | P2，**2.5 个月** |
| [#88994](https://github.com/NousResearch/hermes-agent/issues/88994) | 2026-08-18 | SSH remote profile 回归 | P2，**6 周**，今日仅部分 PR |
| [#100944](https://github.com/NousResearch/hermes-agent/issues/100944) | 2026-09-02 | Kanban profile capability 粒度 | P3，

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报

**报告日期**：2026-10-05
**数据来源**：[github.com/sipeed/picoclaw](https://github.com/sipeed/picoclaw)

---

## 1. 今日速览

PicoClaw 在过去 24 小时内呈现**中等偏高的维护活跃度**。PR 端尤为亮眼：贡献者 **x1F916** 集中提交并合并了 **5 项关键修复 PR**，覆盖 Agent 上下文管理、配置持久化、ARM 32 位更新器、通道 Reload 安全性和异步工具结果路由等多个核心模块，整体推进了约一个里程碑级别的稳定性改进。Issue 端相对安静，新开 3 条仍以 QQ 机器人接口兼容性、CLA 签名检测等待维护者响应为主。**当前仓库存在 2 个待合并 PR 与 3 个待处理 Issue，社区反馈通道整体畅通。**

---

## 2. 版本发布

**无新版本发布。** 上一稳定版本为 v0.3.1（参考 Issue #3382 中提到的 commit `2cf030d2`），如当前 PR 合入速率持续，预计下一版本（v0.3.2 或 v0.4.0）将集中体现今日合并的稳定性修复。

---

## 3. 项目进展

今日共 **5 项 PR 成功合入主线**（均来自 x1F916），形成了一组针对 v0.3.x 已知问题的系统性修复包：

| PR | 模块 | 修复内容 | 价值评估 |
|---|---|---|---|
| [#3402](https://github.com/sipeed/picoclaw/pull/3402) | `fix(agent)` | 解决路由 Agent（非默认）在上下文管理器 `Assemble` 中错用 `registry.GetDefaultAgent()` 的问题（[#3316](https://github.com/sipeed/picoclaw/pull/3316) 的 rebase 重提） | 🟢 高 — 修复多 Agent 路由正确性 |
| [#3400](https://github.com/sipeed/picoclaw/pull/3400) | `fix(config)` | 修复 `expandMultiKeyModels` 仅保留首个 key 且丢失 `Enabled` 标志的回归 | 🟢 高 — 避免自动保存销毁多 key 配置 |
| [#3399](https://github.com/sipeed/picoclaw/pull/3399) | `fix(updater)` | 32 位 ARM 设备 `picoclaw update` 误装 arm64 包（别名 `"arm"` 是 `"arm64"` 子串） | 🟢 高 — 修复 Raspberry Pi 等设备升级路径 |
| [#3401](https://github.com/sipeed/picoclaw/pull/3401) | `fix(channels)` | `Manager.Reload` 在通道实例为 nil 时 panic，修复未就绪通道的优雅跳过逻辑 | 🟢 高 — 防止网关启动/重载崩溃 |
| [#3403](https://github.com/sipeed/picoclaw/pull/3403) | `fix(agent)` | `spawn` 异步工具结果统一回投到默认 Agent 主会话，导致跨会话串扰 | 🟢 高 — 多 Agent 隔离关键修复 |

**项目整体向前迈进评估**：⭐⭐⭐⭐☆（4/5）。这一波修复覆盖了配置、Agent、通道、更新器四个核心子系统的回归/panic 问题，对生产环境稳定运行意义重大。但仍有 2 项 [stale] PR 被关闭（[#3353](https://github.com/sipeed/picoclaw/pull/3353)、[#3233](https://github.com/sipeed/picoclaw/pull/3233)），建议维护者复盘 stale 机制是否过于激进。

---

## 4. 社区热点

按互动量与潜在影响排序：

1. **[#3392 CLAassistant 不识别签名](https://github.com/sipeed/picoclaw/issues/3392)**（评论 2）
   - 关联 PR [#3381](https://github.com/sipeed/picoclaw/pull/3381)（Switch OpenAI to responses API，评论待补充）
   - 诉求本质：贡献者认为 CLA 助手未正确识别其签名，可能阻塞 PR 合入流程。
   - **建议维护者优先响应**，否则可能影响外部贡献者积极性。

2. **[#3394 QQ 机器人接口未同步更新](https://github.com/sipeed/picoclaw/issues/3394)**（评论 2）
   - QQ 聊天通道与上游机器人接口出现版本漂移，影响 QQ 用户接入。
   - 中文社区用户占比较高，需维护者回应以维持信任。

3. **[#3395 OneBot 自动 emoji 应答希望可关闭](https://github.com/sipeed/picoclaw/issues/3395)**（评论 1） + 对应实现 PR [#3396](https://github.com/sipeed/picoclaw/pull/3396)
   - 用户 ycsqwan 提议为 `OneBotChannel.ReactToMessage` 增加 `reaction_enabled` 开关（默认 `false`），并已自提 PR。
   - **Issue 与 PR 同作者，社区驱动型改进典型范式**，合入门槛低。

---

## 5. Bug 与稳定性

按严重程度排列：

| 严重度 | Issue | 描述 | 状态 | 是否有 Fix PR |
|---|---|---|---|---|
| 🔴 **P0 - Panic** | [#3382](https://github.com/sipeed/picoclaw/issues/3382) | DingTalk Stream SDK 重连时 `send on closed channel`（client.go:161），在 v0.3.1 仍可复现，与历史 #973 相同 | ✅ **已 CLOSED**（标记 [stale]） | ❌ 无合并修复，仅通过 stale 机制关闭 |
| 🟠 **P1 - 功能失效** | [#3394](https://github.com/sipeed/picoclaw/issues/3394) | QQ 聊天通道接口未跟上上游机器人 API 变更 | 🟡 OPEN（待响应） | ❌ 暂无 |
| 🟠 **P1 - 流程阻塞** | [#3392](https://github.com/sipeed/picoclaw/issues/3392) | CLAassistant 未识别签名，可能影响 PR 合入 | 🟡 OPEN（待响应） | 关联 [#3381](https://github.com/sipeed/picoclaw/pull/3381) 待合并 |

**关于 #3382 的警示**：DingTalk panic 已被 [stale] 标记关闭，但并未提供真正修复。这与 [#3401](https://github.com/sipeed/picoclaw/pull/3401) 中修复的通道 Reload panic 同属"panic on lifecycle"类问题，建议维护者重启此 issue 并关联 #3401 的修复思路进行回归。

---

## 6. 功能请求与路线图信号

| 需求 | Issue / PR | 落地概率 | 备注 |
|---|---|---|---|
| OneBot 自动应答 emoji 可关闭 | [#3395](https://github.com/sipeed/picoclaw/issues/3395) + [#3396](https://github.com/sipeed/picoclaw/pull/3396) | 🟢 **高** | PR 已就绪、变更最小（默认 `false`、向后兼容），合入阻力小 |
| OpenAI Provider 切换到 Responses API | [#3381](https://github.com/sipeed/picoclaw/pull/3381) | 🟡 中 | 是 OpenAI 官方推荐的新接口，但需评估迁移成本与现有 completions 用户兼容性；CLA 助手未识别可能延误合入 |

**信号解读**：当前 PR 列表中 OpenAI responses API 切换属于**较大架构变更**，建议作为 v0.4.0 的标志性功能；而 OneBot toggle 属于**轻量配置开关**，适合随下一次补丁版本合入。

---

## 7. 用户反馈摘要

从 Issue 评论与 PR 描述中提炼的真实用户痛点：

- 😤 **多 Agent 隔离失效**（[#3403](https://github.com/sipeed/picoclaw/pull/3403)）：用户反馈 `spawn` 工具的结果会跑到默认 Agent 的主会话中，导致**不同聊天/用户的结果互相串扰**——这是企业级多租户场景的硬伤。
- 😤 **配置自动保存引发数据丢失**（[#3400](https://github.com/sipeed/picoclaw/pull/3400)）：v0/v1/v2 配置迁移后被自动保存破坏，多 key fallback 失效且 `Enabled` 标志丢失。
- 😤 **嵌入式设备升级通道错误**（[#3399](https://github.com/sipeed/picoclaw/pull/3399)）：Raspberry Pi 等 32 位 ARM 设备执行 `picoclaw update` 后**架构错乱**，对嵌入式社区体验较差。
- 😤 **OneBot 强制 emoji 应答污染群聊**（[#3395](https://github.com/sipeed/picoclaw/issues/3395)）：每次群消息都触发 `set_msg_emoji_like(289)`，用户希望**默认关闭、按需开启**。
- 😐 **QQ 通道与上游 API 脱节**（[#3394](https://github.com/sipeed/picoclaw/issues/3394)）：QQ 机器人接口已更新但 PicoClaw 未跟进。

**整体满意度评估**：核心 Agent 引擎健壮性受开发者信赖，但**周边通道（OneBot/QQ/DingTalk）与发布工程（更新器、配置迁移）**是当前主要投诉来源。

---

## 8. 待处理积压

提醒维护者关注的长期未响应/未合入项：

| 编号 | 类型 | 创建日期 | 当前状态 | 建议动作 |
|---|---|---|---|---|
| [#3392](https://github.com/sipeed/picoclaw/issues/3392) | Issue - BUG | 2026-09-25 | OPEN 10 天 | 🔴 **优先响应**，否则打击外部贡献者 |
| [#3394](https://github.com/sipeed/picoclaw/issues/3394) | Issue - BUG | 2026-09-26 | OPEN 9 天 | 🟠 分配标签、确认负责人 |
| [#3395](https://github.com/sipeed/picoclaw/issues/3395) | Issue - Feature | 2026-09-27 | OPEN 8 天 | 🟢 PR [#3396](https://github.com/sipeed/picoclaw/pull/3396) 已就绪，可快速合入 |
| [#3396](https://github.com/sipeed/picoclaw/pull/3396) | PR | 2026-09-27 | OPEN 8 天，[stale] | 🟢 等待 review，建议在 7 天内处理以避免进入 stale 流程 |
| [#3381](https://github.com/sipeed/picoclaw/pull/3381) | PR - Feature | 2026-09-17 | OPEN 18 天 | 🟠 重大 API 变更，需维护者深度评估 |
| [#3382](https://github.com/sipeed/picoclaw/issues/3382) | Issue - BUG | 2026-09-20 | CLOSED via stale | 🔴 **重新开启**，生产环境 panic 未真正修复 |

**维护者建议**：本周末前对 #3392、#3381 给出明确进展反馈，对 #3396 启动 review，避免新一轮 stale 关闭潮。

---

**报告生成时间**：2026-10-05
**下次报告**：2026-10-06
**数据完整性说明**：本报告基于截至 2026-10-04 的 GitHub API 快照生成，部分时间戳为仓库相对时间。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目日报

**日期：2026-10-05**
**项目：qwibitai/nanoclaw**
**数据周期：过去 24 小时**

---

## 1. 今日速览

NanoClaw 项目今日进入 **2026.10.0-rc.1 发布候选窗口**，围绕新日历版本号体系与发布通道（stable/beta）完成了多项配套改动，仓库活跃度处于近期高位：过去 24 小时共 **24 条 PR 更新（15 待合并 / 9 已合并或关闭）** 与 **8 条 Issues 活跃更新（全部为开放状态）**。维护团队在 Telegram 适配器、本地模型容器、macOS 更新链路三个方向集中提交了修复，整体呈现出"发布前稳定性收尾"特征。值得注意的是，所有 Issues 仍然 OPEN，0 条关闭，社区反馈的修复闭环尚未形成。

---

## 2. 版本发布

### 🆕 v2026.10.0-rc.1（2026-10-04 发布）
🔗 [Release PR #4025](https://github.com/qwibitai/nanoclaw/pull/4025)

**关键变化：**

| 项目 | 说明 |
|---|---|
| **版本号体系** | 首次切换到日历版本 `YYYY.M.PATCH`，`package.json` 由 `2.4.0` → `2026.10.0-rc.1` |
| **更新源** | `/update-nanoclaw` 默认安装 **已发布 release**，不再跟随 `main` 分支最新提交 |
| **更新通道** | 新增环境变量 `NANOCLAW_UPDATE_CHANNEL`：默认 `stable`（最新 annotated `vX.Y.Z` tag）；`beta` 通道（更晚的 `-rc.N` tag）接收此 RC |
| **破坏性变更** | OneCLI 升级路径在 Linux 安装上存在行为差异（[PR #4028](https://github.com/qwibitai/nanoclaw/pull/4028)） |
| **文档更新** | `RELEASING.md` 新增日历版本说明；OneCLI 升级指南检测 `ONECLI_URL` 网关 |

**迁移注意事项：**
- 使用 OneCLI 的 Linux 部署用户需注意默认网关地址已变更，旧版 `127.0.0.1:10254` 不可用。
- 升级前确认 `.env` 中 `NANOCLAW_UPDATE_CHANNEL` 设置是否符合预期（避免误升级到 RC）。
- macOS 用户升级流程在 2.3.0 → 2.4.0 路径曾出现 I/O error 5 回滚（[Issue #4021](https://github.com/qwibitai/nanoclaw/issues/4021)），建议先评估回滚预案。

---

## 3. 项目进展（今日合并/关闭的 PR）

| 类别 | PR | 影响范围 | 核心价值 |
|---|---|---|---|
| 📚 Release | [#4025](https://github.com/qwibitai/nanoclaw/pull/4025) | 全局 | 首个 RC，正式启用日历版本与发布通道 |
| ✨ Feature | [#3986](https://github.com/qwibitai/nanoclaw/pull/3986) | `area/setup-installation`, `area/skills` | `/update-nanoclaw` 默认跟随 release tag 而非 `main` 头，提升稳定性 |
| 🔒 Security | [#4024](https://github.com/qwibitai/nanoclaw/pull/4024) | `area/channels`, `area/skills` | WhatsApp `/add-whatsapp` 升级到 Baileys **7.0.0-rc.14**，规避消息伪造漏洞 [GHSA-qvv5-jq5g-4cgg](https://github.com/advisories/GHSA-qvv5-jq5g-4cgg) |
| 🔒 Security | [#3998](https://github.com/qwibitai/nanoclaw/pull/3998) | `area/agent-runner`, `area/containers` | 容器内 Chromium 信任 TLS 检查网关的 CA（修复 Chromium 忽略 `NODE_EXTRA_CA_CERTS`） |
| 🐛 Bugfix | [#3999](https://github.com/qwibitai/nanoclaw/pull/3999) | `area/providers`, `area/agent-runner` | 让文档化的 `CLAUDE_CODE_AUTO_COMPACT_WINDOW` 真正生效 |
| 🐛 Bugfix | [#3983](https://github.com/qwibitai/nanoclaw/pull/3983) | `area/core` | 日志器在 BigInt/循环引用场景保留嵌套 `toJSON` 脱敏 |
| 📚 Docs | [#4028](https://github.com/qwibitai/nanoclaw/pull/4028) | `area/skills` | OneCLI 升级指南适配 Linux 网关地址 |
| ✨ Feature | [#4023](https://github.com/qwibitai/nanoclaw/pull/4023) | 多区域 | "Checklist shopping buttons" 交互改进 |
| ❔ Unclear | 未列出（24 条中 9 条关闭，此处含已展示 8 条） | — | 数据中可计的关闭 PR 数量已对齐 |

**进展评估：** 今日合并动作高度集中在"发布通道 + 安全补丁"两大方向，是 RC 发布前的典型收尾动作。功能层面没有大型新特性进入 `main`，符合 RC 阶段"冻结功能、聚焦质量"的预期。

---

## 4. 社区热点

按评论数与更新时间综合排序，今日最值得关注的 Issue/PR：

1. **[Issue #3569](https://github.com/qwibitai/nanoclaw/issues/3569)** — *Telegram 下划线消息投递失败*（评论数 1，跨度 39 天）
   - 全仓库 Telegram 安装的 `@chat-adapter/telegram@4.29.0` 对奇数个 MarkdownV2 标记的整条消息直接丢弃，上游 4.32.0 已修复，但 trunk 仍锁定旧版本。
   - **诉求本质：** 维护团队对上游适配器的版本升级响应滞后，社区每日受影响面大。

2. **[Issue #3223](https://github.com/qwibitai/nanoclaw/issues/3223)** — *调度任务错误静默丢弃*（今日更新）
   - 由调度任务触发的 Agent turn 抛错后，错误被当作"chat"消息复制 routing 字段，但任务消息本身没有 routing，导致消息路由失败且操作者收不到通知。
   - **诉求本质：** 运营可观测性缺口，调度任务的失败"看不见"。

3. **[Issue #3301](https://github.com/qwibitai/nanoclaw/issues/3301)** — *Chat 会话内的任务"单门"投递*（今日更新）
   - 自 #2988（2.1.48）的"one-door task delivery"后，会话内的任务行被切到任务模式，日志/回复/列表均异常。
   - **诉求本质：** 会话与任务两个数据通道的语义边界被打破，回滚或重构请求强烈。

4. **[Issue #3643（priority/high）](https://github.com/qwibitai/nanoclaw/issues/3643)** — *硬编码 30 分钟天花板中断长本地模型会话*（今日更新）
   - 本地模型后端长会话被 `ABSOLUTE_CEILING_MS=1800000` 中断，且无配置项调节。
   - **诉求本质：** 本地 LLM 用户场景被压缩到 30 分钟，违背通用 Agent 平台定位。

5. **[PR #4009](https://github.com/qwibitai/nanoclaw/pull/4009)** — *CI 不再自动合入 agent-image pin bump*
   - 维护者决定图片管线只开 PR、不再 auto-merge，属于治理结构调整，值得跟踪。

---

## 5. Bug 与稳定性

按严重程度排序（所有 Issue 均为开放状态，无关闭记录）：

| 严重度 | Issue / 标题 | 影响 | 已有 fix PR？ |
|---|---|---|---|
| 🔴 **High** | [#3643](https://github.com/qwibitai/nanoclaw/issues/3643) 硬编码 30 分钟天花板，长本地模型 turn 被中断 | 本地 LLM 用户的核心工作流 | ❌ 未见 |
| 🟠 **Medium** | [#3569](https://github.com/qwibitai/nanoclaw/issues/3569) Telegram 含奇数下划线的消息整条丢弃 | Telegram 通道用户体验 | ⚠️ 间接：[#4031](https://github.com/qwibitai/nanoclaw/pull/4031)（getUpdates deadline）、[#4029](https://github.com/qwibitai/nanoclaw/pull/4029)（mailto 链接），但版本升级 PR 暂未出现 |
| 🟠 **Medium** | [#3223](https://github.com/qwibitai/nanoclaw/issues/3223) 调度任务错误静默丢弃 | 自动化场景的盲区 | ❌ 未见 |
| 🟠 **Medium** | [#3301](https://github.com/qwibitai/nanoclaw/issues/3301) Chat 会话内任务"单门"投递 | 数据完整性 | ❌ 未见 |
| 🟡 **Low** | [#4020](https://github.com/qwibitai/nanoclaw/issues/4020) `escapeXml` 永不反转，回复中 `&` 显示为 `&amp;` | 文本保真 | ❌ 未见 |
| 🟡 **Low** | [#4021](https://github.com/qwibitai/nanoclaw/issues/4021) macOS `stopService` 在 host 退出前返回，re-bootstrap I/O error 5 | macOS 升级链路 | ❌ 未见 |
| 🟡 **Low** | [#4033](https://github.com/qwibitai/nanoclaw/pull/4033) poll-loop 后接轮转导致 `in_reply_to` 串位 | 回复路由 | ❌ 未见（Issue 仍 OPEN） |

**健康度信号：** 24h 内有 **9 条 PR 已合并/关闭**，但 **Issues 关闭数 = 0**。新开 Issues 全部为新报告，尚未形成"Issue → PR → 合并"的闭环。维护者可能将精力集中于 RC 发布，建议后续重点关注 Issue 关闭率回升。

---

## 6. 功能请求与路线图信号

| 需求 | 来源 | 现有 PR | 纳入下版本可能性 |
|---|---|---|---|
| 让 Agent 重启并清理其创建的子 Agent（解决 `cli_scope: group` 限制） | [Issue #4027](https://github.com/qwibitai/nanoclaw/issues/4027) | [#4026](https://github.com/qwibitai/nanoclaw/pull/4026)（`groups restart --id` 修复，已开放） | ⭐⭐⭐⭐ 高：相关 PR 已提交 |
| 永久投递失败时通知 Agent（避免 Agent 误以为已发送） | [Issue（隐含于 #4032 描述）](https://github.com/qwibitai/nanoclaw/pull/4032) | [#4032](https://github.com/qwibitai/nanoclaw/pull/4032) | ⭐⭐⭐⭐ 高 |
| Telegram `ask_question` 长选项列表换行 | [Issue 隐含] | [#4030](https://github.com/qwibitai/nanoclaw/pull/4030) | ⭐⭐⭐ 中 |
| Telegram 频道匿名广播作者信任（`sender_chat`） | [#2991](https://github.com/qwibitai/nanoclaw/issues/2991)（修复 PR） | [#3450](https://github.com/qwibitai/nanoclaw/pull/3450)（已开放 44 天） | ⭐⭐⭐ 中 |
| `update-skills` 报告本地 adapter 真实状态 | [Issue 隐含] | [#3642](https://github.com/qwibitai/nanoclaw/pull/3642)（已开放 38 天） | ⭐⭐ 中 |
| Channels 分支 merge 主干（**架构层面**） | — | [#4000](https://github.com/qwibitai/nanoclaw/pull/4000)（463 commits，需用 merge commit 而非 squash） | ⭐⭐ 低（操作风险大） |

**路线图观察：** 短期内（2026.10.0 GA）将主要集中在 Telegram 适配器收尾、安全依赖升级与发布通道稳定。`#3642`、`#3450` 这类 30 天以上的开放 PR 显示有"陈年需求尚未合并"的风险，需维护者主动筛选。

---

## 7. 用户反馈摘要

- **真实痛点：**
  - **Telegram 投递不可靠** — 多名用户在不同语义层面遇到 Telegram 适配器问题（下划线 / 选项过多 / 长轮询挂起 / 频道身份），形成对单一通道的集中抱怨。
  - **本地模型用户被边缘化** — [#3643](https://github.com/qwibitai/nanoclaw/issues/3643) 反映硬编码 30 分钟上限让本地 LLM 场景几乎不可用，社区诉求是"开放配置 seam"。
  - **调度任务的可观测性缺失** — [#3223](https://github.com/qwibitai/nanoclaw/issues/3223) 直接关系到"我设置的自动任务到底跑没跑、错没错"，属于运营刚需。

- **使用场景：**
  - 协调型 Agent 经常创建子 Agent，但当前无法跨子 Agent 管理（[#4027](https://github.com/qwibitai/nanoclaw/issues/4027)）。
  - macOS 用户的本地升级体验不顺畅（[#4021](https://github.com/qwibitai/nanoclaw/issues/4021)）。
  - 容器化场景对 TLS 检查网关信任链敏感（[#

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目日报 · 2026-10-05

---

## 1. 今日速览

NullClaw 在过去 24 小时内呈现出**高强度、单维护者驱动的修复周期**特征：共处理 4 条 Issue（2 关闭 / 2 新开）和 11 条 PR（6 关闭 / 5 待合并），合并节奏明显高于日常均值，且无新版本发布。所有 PR 均已绑定明确的目标或 Issue。值得关注的两个信号是：(a) 同日提交的 4 条新 Bug（#1017、#1018、#1020、#1021）均已有对应修复 PR 在评审中，显示出"问题-修复"的快速闭环能力；(b) 几乎所有动作都由 `vernonstinebaker` 一人完成，外围贡献者（`Arthur031221`、`googio`）仅参与辅助性 PR，存在维护者集中度风险。

---

## 2. 版本发布

**无新版本发布。** 当前修复主要面向通道层（Discord/Telegram/MAX）、HTTP 传输、Docker 镜像、CLI 流式输出与 Git 钩子，建议下一版本（patch 级）以 bugfix 集合形式统一打包发布。

---

## 3. 项目进展（已合并 / 关闭 PR）

| PR | 标题 | 领域 | 影响 |
|----|------|------|------|
| [#1010](https://github.com/nullclaw/nullclaw/pull/1010) | fix(discord): ignore messages the bot itself posted | Discord 通道 | 修复 `allow_bots=true` 时的自回复回环（"每一轮触发下一轮"），是稳定性与噪声控制的双重改进 |
| [#1002](https://github.com/nullclaw/nullclaw/pull/1002) | fix(channels): run HTTPS typing workers on the heavy runtime stack | Discord / Telegram / MAX | Zig TLS 在 512 KiB 栈上溢出导致网关崩溃，扩展到 2 MiB 重栈彻底解决 |
| [#1006](https://github.com/nullclaw/nullclaw/pull/1006) | fix(cli): append streamed stdout instead of overwriting offset zero | CLI 流式输出 | macOS 管道上首字节被换行覆盖的回归已修复，24 处定点写全部改为追加 |
| [#954](https://github.com/nullclaw/nullclaw/pull/954) | fix(channels): preserve outbound ownership on allocation failures | 出站投递 | 分配失败场景下的所有权与重试加固（早期 cron 投递修复已在 main，本次保留剩余改动） |
| [#966](https://github.com/nullclaw/nullclaw/pull/966) | fix(http): secure buffered curl fallback on Android | HTTP / Termux | 修复 aarch64-linux-android 上 DNS 解析失败回落到 curl 的路径 |
| [#1007](https://github.com/nullclaw/nullclaw/pull/1007) | docs: explain the diagnostics logging flags | 文档 | 中英配置文档补全日志开关说明，明确"内容日志仅限调试环境" |

**整体评估**：今天合并的 6 个 PR 中，5 个属于 bugfix / 健壮性修复，1 个为文档完善。通道层栈溢出与 Discord 自回环属于此前积累的潜在崩溃源，合并后显著抬升了网关在 Discord/Telegram 上的稳定性下限；HTTP/Android 与 CLI 修复则补齐了 Termux 与 macOS 上的边缘体验。**项目在通道与传输底层的健壮性上向前迈出了实质一步，但功能侧几乎没有新进展。**

---

## 4. 社区热点

**最活跃 Issue：[#941](https://github.com/nullclaw/nullclaw/issues/941) "Agent-type cron jobs don't spawn a subprocess"**（7 条评论，👍 0）

- 创建于 2026-05-31，关闭于 2026-10-05，**生命周期长达约 4 个月**
- 核心矛盾：`schedule` + `job_type=agent` + Telegram 投递的组合，cron 被标记为完成但 agent 子进程未启动，消息从未到达 Telegram
- 反映出的需求：用户期望**带交付通道的定时 agent 任务**是一等公民，而不仅是"任务存在即完成"

**新晋讨论：[#1018](https://github.com/nullclaw/nullclaw/issues/1018) "BUG: Termux — agent output silently corrupted"**（2 条评论）

- 用户对"exit 0 + 无日志 + 输出被破坏"的**静默损坏**表达了明显不满——这正是最难排查的一类问题
- 同日被关闭（应与 [#966](https://github.com/nullclaw/nullclaw/pull/966) 的合并直接相关）

> **诉求归纳**：用户既需要通道的端到端可达性（agent → 消息真的送达），也需要失败时的**显式信号**（错误必须可见、可定位）。当前 release 在"沉默失败"方面仍有改进空间。

---

## 5. Bug 与稳定性

按严重程度（Critical → Minor）排序：

| 等级 | Issue | 描述 | 修复 PR |
|------|-------|------|---------|
| 🔴 Critical | [#1017](https://github.com/nullclaw/nullclaw/issues/1017) | Docker 镜像网关启动即 `AccessDenied`，`/nullclaw-data` 属于 `root:root`，uid 65534 无法写入 | [PR #1023](https://github.com/nullclaw/nullclaw/pull/1023)（OPEN，采用 #1017 评论中 @O96a 提供的方案） |
| 🔴 Critical | [#1018](https://github.com/nullclaw/nullclaw/issues/1018) | Termux 上 `nullclaw agent` 输出被破坏，**静默失败** | [PR #966](https://github.com/nullclaw/nullclaw/pull/966) ✅ 已合并 |
| 🟠 High | [#1020](https://github.com/nullclaw/nullclaw/issues/1020) | `.githooks/pre-push` 在 git worktree 下必失败，`GIT_DIR` 污染测试子进程 | [PR #1021](https://github.com/nullclaw/nullclaw/pull/1021)（OPEN） |
| 🟡 Medium | [#941](https://github.com/nullclaw/nullclaw/issues/941) | Agent cron 子进程未启动，Telegram 永不投递 | 已关闭（修复路径未在本次 PR 中显式提及，建议关注后续 commit） |

**分析**：4 条新 Bug 中 3 条已有对应 PR，且 1 条已合并——修复覆盖率 75%。但 [#1017](https://github.com/nullclaw/nullclaw/issues/1017) 影响**所有从 Docker 镜像启动的用户**，属于发布阻塞级别，建议在下一版本发布前合并 [#1023](https://github.com/nullclaw/nullclaw/pull/1023)。

---

## 6. 功能请求与路线图信号

**新增功能 PR：[#1022](https://github.com/nullclaw/nullclaw/pull/1022) "feat(web_search): add Serply as a search provider"**（作者：googio）

- 在 `src/tools/web_search_providers/serply.zig` 中以与 `brave.zig` 一致的模式接入 Serply（Google SERP API）
- 标志着 `web_search` 工具开始走向**多提供商化**，从单点 Brave 走向可插拔架构
- **进入下一版本概率：高**。该 PR 改动局部、模式与已有实现对齐，符合当前"小步快跑"节奏

**潜在的次版本信号**：
- 通道层栈预算调整（#1002）暗示维护者意识到 Zig 运行时栈边界需要**统一治理**，未来可能抽象出 `heavy_runtime.zig` 之类的公共设施
- `web_search` 多提供商 + Discord/Telegram/MAX 三栈修复，说明项目正在**横向扩展通道与工具的同时，纵向夯实底层**——下一版本标签很可能是 `0.x.y` 类型的稳定性 patch

---

## 7. 用户反馈摘要

从 Issue 评论与描述中可提炼的真实信号：

- **痛点 A — 沉默失败最难排查**（[#1018](https://github.com/nullclaw/nullclaw/issues/1018)）
  > "scrambled fragment ... exit 0 ... nothing indicates anything went wrong"
  
  用户对**缺乏错误信号**的容忍度极低。即使有 PR #1004（OPEN）正在做"provider 非 2xx 时记录脱敏响应体"，说明维护者已注意到这一问题并主动补救。

- **痛点 B — Docker 镜像默认不可用**（[#1017](https://github.com/nullclaw/nullclaw/issues/1017)）
  > "The published Docker image cannot run its gateway"
  
  对"开箱即用"的容器化体验期望强烈。已有 [PR #1023](https://github.com/nullclaw/nullclaw/pull/1023) 在评审，但用户已对"为何 CI 没发现"产生隐含质疑。

- **痛点 C — Worktree 工作流被破坏**（[#1020](https://github.com/nullclaw/nullclaw/issues/1020)）
  > "Worktrees are this repo's documented workflow"
  
  用户**按官方文档操作却被阻断**，这是比功能缺失更严重的信任损耗。[PR #1021](https://github.com/nullclaw/nullclaw/pull/1021) 已就位。

- **场景信号**：Termux（移动终端）、Docker（部署）、worktree（贡献者）三类用户同时反馈问题，说明 NullClaw 的实际使用面比"个人 AI 助手"标签更宽——**边缘环境与协作流正在成为真实使用场景**。

---

## 8. 待处理积压

| 类型 | 编号 | 标题 | 状态 | 提醒 |
|------|------|------|------|------|
| 长期 Issue | [#941](https://github.com/nullclaw/nullclaw/issues/941) | Agent cron 子进程未启动 | 已关闭（5/31 → 10/5，4 个月） | 建议维护者关联提交到 commit hash，方便用户验证修复点 |
| 长期 PR | [#1004](https://github.com/nullclaw/nullclaw/pull/1004) | fix(providers): log scrubbed provider error bodies on non-2xx | OPEN，自 9/24 起 | 11 天未合并，与"沉默失败"主题强相关，建议优先 review |
| 评审中 | [#1023](https://github.com/nullclaw/nullclaw/pull/1023) | fix(docker): keep HOME writable | OPEN | **发布阻塞级**，影响所有 Docker 用户 |
| 评审中 | [#1021](https://github.com/nullclaw/nullclaw/pull/1021) | fix(hooks): clear inherited GIT_DIR | OPEN | 影响所有贡献者，建议尽快合并 |
| 功能 PR | [#1022](https://github.com/nullclaw/nullclaw/pull/1022) | feat(web_search): add Serply provider | OPEN | 改动局部，可与稳定性 patch 同期发布 |

**维护者风险提示**：截至今日，11 条 PR 中 10 条由 `vernonstinebaker` 发起或提交。在 Issues 与 PR 同时高活跃的窗口下，建议关注 maintainer 负荷，必要时显式标记 `good first issue` 或 `help wanted` 以吸引外围贡献。

---

*报告基于 2026-10-05 当日 GitHub 数据生成。所有链接均指向 `github.com/nullclaw/nullclaw` 对应 Issue / PR 页面。*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目日报

**报告日期**：2026-10-05
**数据来源**：[nearai/ironclaw](https://github.com/nearai/ironclaw)
**数据周期**：过去 24 小时

---

## 1. 今日速览

IronClaw 项目在过去 24 小时内整体处于**低活跃度的依赖维护期**。仓库共记录到 5 条 PR 更新，全部来自 `dependabot[bot]`，无任何新 Issue 提交，无新版本发布，也无人工触发的功能或修复工作。已关闭 PR 1 条（#8078），其余 4 条仍待合并。社区互动维度（评论、Reaction、Issue 讨论）今日完全沉寂，仅可观察到底层依赖基础设施的常规更新行为。

**活跃度评估**：⭐☆☆☆☆（极低，仅依赖机器人维护）

---

## 2. 版本发布

**无新版本发布。** 过去 24 小时未触发任何 Release 或 Tag。

---

## 3. 项目进展

今日仅有 1 条 PR 进入闭合状态：

| PR | 状态 | 内容 | 推进评估 |
|---|---|---|---|
| [#8078](https://github.com/nearai/ironclaw/pull/8078) | 已关闭 | dependabot 升级 tokio-ecosystem 组（`tower-http` 0.7.0 → 0.7.1，另有 1 项更新） | 常规 patch 级依赖升级，对运行时行为无实质影响 |

其余 4 条仍处于 OPEN 状态的 PR 均停留在"待 review/合并"队列，未对主干功能产生推进。具体包括：
- [#8123](https://github.com/nearai/ironclaw/pull/8123) — tokio-ecosystem 组更新 3 项（`tokio-test` 0.4.5 → 0.4.6 等）
- [#8114](https://github.com/nearai/ironclaw/pull/8114) — everything-else 组批量更新 31 项依赖（影响面广，包含 `thiserror`、`uuid`、`base64` 等核心 crate）
- [#8103](https://github.com/nearai/ironclaw/pull/8103) — GitHub Actions 组更新 8 项（含 `anthropics/claude-code-action` 与 `actions/setup-node` 大版本跳变 4 → 7）
- [#7834](https://github.com/nearai/ironclaw/pull/7834) — wasm 组更新 4 项（`wasmtime`、`wit-parser` 等）

**整体推进度**：项目功能层今日无明显进展，仅依赖层面有小幅前移。

---

## 4. 社区热点

今日无任何 Issues 或 PR 产生评论、讨论或 Reaction 数据。

**社区热度**：❄️❄️❄️（冰点）

值得注意的是 [#8114](https://github.com/nearai/ironclaw/pull/8114) 涉及 31 项依赖批量变更，属于潜在的高风险合并点——按常理应触发维护者 review 与讨论，但目前仍 0 评论、0 👍。这并非"无热点"，而是**"无人响应"**，建议维护者介入。

---

## 5. Bug 与稳定性

**今日无 Bug 报告、崩溃或回归问题记录。**

无相关 Issues，也无对应的修复 PR。仓库稳定性信号缺失（缺乏用户反馈样本），无法从外部反馈评估当前版本质量。

---

## 6. 功能请求与路线图信号

**今日无新增功能请求。**

无 Issues 输入意味着无法从用户侧捕捉路线图信号。仅能从待合并 PR 推断维护方向：
- [#8103](https://github.com/nearai/ironclaw/pull/8103) 中 `actions/setup-node` 从 4.x 升至 7.0.0、`anthropics/claude-code-action` 持续追新，暗示项目 CI/CD 体系正逐步现代化；
- [#8114](https://github.com/nearai/ironclaw/pull/8114) 中 `uuid` 1.24 → 1.26、`thiserror` 2.0.20 → 2.0.21 等小幅迭代，反映基础 crate 在稳步跟进上游。

---

## 7. 用户反馈摘要**

无任何 Issues 评论可供分析。

**真实用户痛点**：无法提炼（缺乏数据样本）。

---

## 8. 待处理积压

| 编号 | 类型 | 创建时间 | 距今天数 | 关注优先级 | 说明 |
|---|---|---|---|---|---|
| [#7834](https://github.com/nearai/ironclaw/pull/7834) | dependabot PR | 2026-08-23 | **42 天** | ⚠️ 高 | wasm 组（`wasmtime`、`wit-parser` 等 4 项）长期未合并，对 WASM 相关能力演进构成阻塞 |
| [#8103](https://github.com/nearai/ironclaw/pull/8103) | dependabot PR | 2026-09-20 | 15 天 | 中 | Actions 组，含 `setup-node` 4 → 7 的大版本跳变，需人工确认 breaking change |
| [#8114](https://github.com/nearai/ironclaw/pull/8114) | dependabot PR | 2026-09-27 | 8 天 | 中 | 批量 31 项依赖，风险面较广 |
| [#8123](https://github.com/nearai/ironclaw/pull/8123) | dependabot PR | 2026-10-04 | 1 天 | 低 | 刚创建，可近期处理 |

**维护者提醒**：
1. **#7834 已积压 42 天**，远超 dependabot 通常的处理周期，建议优先 review；
2. 4 条 OPEN PR 全部 0 评论、0 Reaction，**缺乏 reviewer 响应**，可能反映维护者带宽紧张或仓库进入低维护阶段；
3. 建议在合并 #8103 前对 `4.0.2 → 7.0.0` 这类主版本跳变单独验证 CI 兼容性。

---

## 附录：项目健康度速览

| 维度 | 状态 | 说明 |
|---|---|---|
| Issue 处理流 | 🟢 | 无积压 Issue（但同样无新 Issue） |
| PR 合并流 | 🟡 | 4 条 dependabot PR 排队中，#7834 超期严重 |
| 社区参与 | 🔴 | 24h 内 0 条人工评论或 Reaction |
| 版本节奏 | ⚪ | 今日无发布 |
| 安全更新 | 🟡 | 依赖批量更新待合并，存在潜在 CVE 修复积压风险 |

---

*本报告由 AI 自动生成，数据基于 GitHub 公开 API 抓取，建议结合人工 review 辅助决策。*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目日报
**日期：2026-10-05 | 数据周期：过去 24 小时**

---

## 1. 今日速览

LobsterAI 项目在过去 24 小时内整体活跃度处于**中等偏低**水平，无新版本发布。Issues 方面共 5 条更新，其中 3 条仍处 OPEN 状态且均被标记为 `[stale]`，2 条已关闭；PR 方面共 6 条更新，3 条 OPEN 均来自开发者 `alison-xx`，3 条已关闭。开发者侧聚焦在 **renderer / cowork / artifacts** 模块的体验优化，核心贡献者 `alison-xx` 单日提交 3 个修复/特性 PR，体现了持续投入；但社区侧（Issues）长期存在定时任务、Agent Engine 稳定性等未被解决的痛点，2 个 Issue 因 stale 被自动关闭，说明社区响应机制有待加强。

---

## 2. 版本发布

⚠️ **无新版本发布。** 过去 24 小时无任何 Release 标签或版本更新。

---

## 3. 项目进展

今日有 **3 个 PR 已关闭**（其中 #2710 与 #2789 属于功能特性，#1008 为历史积压），主要推进了以下方向：

### 🔧 MCP 工具能力打通 OpenClaw
- **PR #2710**（已关闭）：`feat(mcp): pass per-server toolFilter and parallel tool calls to OpenClaw`
  - 作者：alison-xx
  - 推进了 MCP 服务器的工具过滤（toolFilter）与并行调用（supportsParallelToolCalls）能力向 OpenClaw 的透传，补齐了用户只能使用全部工具而无法按会话裁剪的短板。🔗 [netease-youdao/LobsterAI#2710](https://github.com/netease-youdao/LobsterAI/pull/2710)

### 🧩 MCP 工具选择器
- **PR #2789**（已关闭）：`feat: mcp tool picker`
  - 作者：fisherdaddy
  - 与 #2710 配套的 UI/逻辑层 PR，为用户提供可视化的 MCP 工具选择界面。🔗 [netease-youdao/LobsterAI#2789](https://github.com/netease-youdao/LobsterAI/pull/2789)

### 📚 历史积压关闭
- **PR #1008**（已关闭，stale）：`feat(preset-agents): add 6 new preset agent templates`
  - 作者：BucleLiu
  - 3 月份提交的预设 Agent 模板扩充提案，今日被关闭（推测为已合并或放弃）。🔗 [netease-youdao/LobsterAI#1008](https://github.com/netease-youdao/LobsterAI/pull/1008)

**整体评估**：MCP 工具生态从配置层到 UI 层均完成了闭环，这是当日最具实质性的功能推进。

---

## 4. 社区热点

⚠️ **今日活跃度偏低。** Issues 板块无高互动（最高评论数仅 2 条），所有条目均标记为 `[stale]`。从议题本身的影响力来看，最值得关注的是：

| 排序 | Issue | 评论数 | 关注原因 |
|------|-------|--------|----------|
| 🥇 | [#1003 Notion MCP 问题](https://github.com/netease-youdao/LobsterAI/issues/1003) | 2 | 涉及 MCP Bridge 层的环境变量传递缺陷，影响 Notion 集成的可用性 |
| 🥈 | [#850 定时任务关闭后仍触发](https://github.com/netease-youdao/LobsterAI/issues/850) | 2 | 用户期望与产品行为不符的典型案例 |
| 🥉 | [#1007 Agent Engine 无限重启](https://github.com/netease-youdao/LobsterAI/issues/1007) | 2 | 反映系统稳定性问题且缺少可复现的解决路径 |
| 4 | [#856 模型切换及文档更新](https://github.com/netease-youdao/LobsterAI/issues/856) | 1 | 文档滞后影响新功能（openclaw）落地 |
| 5 | [#837 定时任务异常后失败](https://github.com/netease-youdao/LobsterAI/issues/837) | 1 | 锁屏场景下的定时任务可靠性 |

**热点诉求分析**：社区关注呈现三大方向：(1) **定时任务可靠性**（#850、#837）；(2) **MCP 集成稳健性**（#1003）；(3) **文档与功能同步**（#856）。三者均指向产品"看起来能用，但关键时刻掉链子"的体验痛点。

---

## 5. Bug 与稳定性

按严重程度划分：

### 高严重度（影响核心功能可用性）

1. **【Bug】定时任务关闭后仍触发执行** — [#850](https://github.com/netease-youdao/LobsterAI/issues/850)
   - 状态：OPEN（stale）｜创建 2026-03-25
   - 影响：定时任务的状态控制失效，可能引发非预期的 AI 调用、资源消耗。
   - 是否有 fix PR：**暂无对应修复 PR**

2. **【Bug】定时任务触发异常后持续失败，需重启恢复** — [#837](https://github.com/netease-youdao/LobsterAI/issues/837)
   - 状态：OPEN（stale）｜创建 2026-03-25
   - 影响：锁屏场景下首次异常后任务彻底不可用，缺乏自动恢复机制。
   - 是否有 fix PR：**暂无对应修复 PR**

3. **【Bug】Agent Engine 无限重启** — [#1007](https://github.com/netease-youdao/LobsterAI/issues/1007)
   - 状态：CLOSED（stale）｜创建 2026-03-29
   - 影响：核心 Agent 引擎陷入重启循环；用户无明确配置解决方案。
   - 是否有 fix PR：**无对应修复**，且因 stale 被自动关闭，未解决实际问题。

### 中严重度（功能无法使用）

4. **Notion MCP 环境变量未透传 → 401 鉴权失败** — [#1003](https://github.com/netease-youdao/LobsterAI/issues/1003)
   - 状态：CLOSED（stale）｜创建 2026-03-28
   - 影响：Notion MCP 集成完全不可用；用户多次修改环境变量名仍无效。
   - 是否有 fix PR：**无对应修复**，因 stale 被自动关闭。

### PR 修复的次级 Bug
- **PR #2792**（OPEN）：协作模式长问题提示/上下文 tooltip 可读性 — 🔗 [#2792](https://github.com/netease-youdao/LobsterAI/pull/2792)
- **PR #2791**（OPEN）：artifacts 模块对缩写路径的误识别修复 — 🔗 [#2791](https://github.com/netease-youdao/LobsterAI/pull/2791)

---

## 6. 功能请求与路线图信号

| 请求 | 状态 | 与现有 PR 关联 |
|------|------|----------------|
| **不同任务使用不同模型**（#856） | OPEN（stale） | 当前 PR #2790（`feat(renderer): group model choices`）正在做模型分组展示，但仅是"选择"层优化，并未实现 per-task 模型路由。**强烈建议纳入下一版本路线图**。 |
| **OpenClaw 使用文档补充**（#856） | OPEN（stale） | 与 PR #2710（已关闭）配套：MCP 能力已打通 OpenClaw，但官方文档未跟上。**建议作为发行注记同步发布**。 |
| **6 个新预设 Agent 模板**（#1008 PR） | 已关闭（stale） | 已存在但因 stale 关闭，结果不明，建议维护者确认是否已合并。 |
| **MCP 工具选择器**（PR #2789） | 已关闭 | ✅ 已实质落地（与 #2710 配套）。 |

---

## 7. 用户反馈摘要

从 Issues 评论中可提炼以下真实用户声音：

- 🔴 **痛点 1：定时任务"假关闭"**
  用户 `Robincs` 在 #850 中明确反馈"定时任务关闭后，还是会触发执行"，预期与实际行为严重不符，**说明状态控制存在 UI 与后端不同步问题**。

- 🔴 **痛点 2：锁屏场景下定时任务"假死"**
  用户 `Aireed` 在 #837 中描述了具体复现路径：每半小时触发的定时任务，在电脑锁屏状态下异常后"后续的定时任务都不能成功"，**缺乏异常后的自愈机制**。

- 🟡 **痛点 3：MCP 配置"看起来对，实际错"**
  用户 `cv696` 在 #1003 中尝试了多种环境变量名后仍失败，指出问题"可能出在 LobsterAI 的 MCP Bridge 层，不是配置问题"，**反映了底层实现的可靠性问题**。

- 🟡 **痛点 4：Agent Engine 无限重启无解**
  用户 `HsiYaTung` 在 #1007 中"请教遇到这种情况，怎么修改配置文件解决"，**说明官方文档/支持渠道未能提供清晰的故障排除指引**。

- 🟢 **痛点 5：新功能学习成本高**
  用户 `fppmax-nb` 在 #856 中提到"近期增加的 openclaw 功能，不知道是怎么使用的"，**反映出文档与功能发布的同步性较差**。

---

## 8. 待处理积压

### ⏰ 6 个月以上未关闭的关键 Issue

| Issue | 标题 | 创建日期 | 当前状态 |
|-------|------|----------|----------|
| [#837](https://github.com/netease-youdao/LobsterAI/issues/837) | 定时任务触发异常后一直失败 | 2026-03-25 | OPEN（stale） |
| [#850](https://github.com/netease-youdao/LobsterAI/issues/850) | 定时任务关闭后还会触发 | 2026-03-25 | OPEN（stale） |
| [#856](https://github.com/netease-youdao/LobsterAI/issues/856) | 模型切换及文档更新 | 2026-03-25 | OPEN（stale） |

### ⚠️ 因 stale 被自动关闭但实质未解决的问题

- [#1003 Notion MCP 环境变量](https://github.com/netease-youdao/LobsterAI/issues/1003) — 已关闭，但根因（Bridge 层 env 透传）未确认是否修复。
- [#1007 Agent Engine 无限重启](https://github.com/netease-youdao/LobsterAI/issues/1007) — 已关闭，用户配置层面的解决方案未提供。

### 🔔 维护者建议

1. **重新评估 stale 关闭机制**：上述 2 个被自动关闭的 Issue 均未实际解决，自动关闭可能掩盖真实问题；建议增加"是否有替代方案"的判定。
2. **回复核心 Issue #837、#850**：两个定时任务相关的 Bug 已存在 6 个月以上，且无对应修复 PR，建议优先安排排期。
3. **确认 PR #1008 状态**：该 PR 涉及 6 个新预设 Agent 模板扩展，建议维护者明确是否合并或关闭并说明原因。

---

## 📊 项目健康度总评

| 维度 | 评分 | 说明 |
|------|------|------|
| 代码提交活跃度 | ⭐⭐⭐⭐ | 核心开发者 alison-xx 单日 3 个 PR，节奏良好 |
| Issue 响应率 | ⭐⭐ | 多条核心 Bug 未关闭，stale 标记泛滥 |
| 版本发布节奏 | ⬇️ | 今日无版本发布 |
| 功能推进 | ⭐⭐⭐⭐ | MCP 工具链路闭环，体验层 PR 在持续打磨 |
| 文档同步性 | ⭐⭐ | 新功能（OpenClaw）文档明显滞后 |
| 整体健康度 | **⭐⭐⭐ (中等)** | 开发侧活跃，但社区响应与稳定性修复需加强 |

---

*报告生成时间：2026-10-05 | 数据来源：netease-youdao/LobsterAI GitHub Repository*

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

# CoPaw 项目动态日报 · 2026-10-05

> 数据周期：2026-10-04 → 2026-10-05（UTC+24h）
> 数据源：`agentscope-ai/QwenPaw`（注：仓库中 Issue/PR 元数据均标注为 QwenPaw，对应 CoPaw 主仓库）

---

## 1. 今日速览

CoPaw 项目在过去 24 小时保持中等偏高活跃度：共 **11 条 Issue 更新**（1 关闭 / 10 仍开）+ **10 条 PR 更新**（1 关闭 / 9 仍开），**0 个新版本发布**。讨论焦点集中在三个方向——**Provider 适配层稳定性**（OpenCode/Moonshot/OpenAI 兼容网关）、**Console 启动容错**（启动卡死 / lazy-route 失败）、**插件子系统的环境隔离**（pip 子进程、事件循环共享）。整体处于**问题集中暴露 + 修复 PR 同步推进**的迭代窗口，但尚无版本可发，建议维护者优先合入已经在审的"低风险 S/M 类"PR 以解锁下一个 beta。

活跃度评估：🟡 **中等偏高**——未出现合并事件，但 5 个 PR 进入或经过一轮审阅意见。

---

## 2. 版本发布

⛔ **无新版本发布**。当前最新公开构建仍是 `v2.2.2b4`，多份新 Issue 直接关联该版本（#8109、#8106、#8105、#8092），说明该 beta 仍存在较明显缺陷，不建议用户用于生产。

---

## 3. 项目进展

### 已关闭
- **PR #7299** `fix(console): reject conflicting chat payloads`（@crown-sports，first-time contributor）于 10-04 关闭。👀 注：状态从 *Under Review* 直接关闭，未标记为 *Merged*，疑似被驳回或作者撤回，但所讨论的"`TaskTracker.attach_or_start()` 对重复 chat payload 处理不当"问题尚未在仓库内得到其他修复，属于**隐患遗留**。👉 https://github.com/agentscope-ai/QwenPaw/pull/7299

### 仍处于 Review 的关键 PR（均新增评论/审阅活动）
| PR | 主题 | 状态 | 关联 Issue |
|---|---|---|---|
| #7869 | fix(providers): connection check 携带 session header | Under Review | #7899（已闭合，承接修复）|
| #7962 | fix(providers): Moonshot 枚举工具 schema 的 `type` | Review 中 | #7959 |
| #7774 | fix(hub): 从 runtime 派生启动 provisioner 白名单 | Under Review | — |
| #7738 | fix(providers): 过滤 OpenAI 未知 kwargs | Under Review | — |
| #8107 | fix(plugins): pip 子进程环境净化 | **first-time**, size/S | #8106 ✅ |
| #8102 | fix(console): 启动 chunk 失败可重试 + watchdog | size/M | #8094 ✅ |
| #8108 | fix(console): lazy-route 失败后可重试 | size/S | #7815 |

👉 **推进结论**：今日净合并数为 0，但**修复链路已建立**——#8106→#8107、#8094→#8102、#7815→#8108 形成三组"Issue → fix PR"对，**只要这几个 PR 在 48h 内合并，下个补丁版本的可发版素材已就绪**。

---

## 4. 社区热点

按评论数排序：
1. **#7722** [Bug] 内存耗尽三条复合路径（unbounded buffer + keep-alive 堆叠 + doom-loop gate 绕过）— 6 评论，0 👍。作者 @Nobodyanonymou-s 提交了**可控复现 + 最小修复**。👉 https://github.com/agentscope-ai/QwenPaw/issues/7722
2. **#7840** [Bug] 插件与宿主共用事件循环，一次同步调用冻结整个实例 40s — 5 评论。👉 https://github.com/agentscope-ai/QwenPaw/issues/7840
3. **#7026** [Bug] deepseek-v4-pro 自动注入 `chat_template_kwargs` 未走 `extra_body`，openai SDK TypeError — 3 评论。👉 https://github.com/agentscope-ai/QwenPaw/issues/7026
4. **#7599** [Bug] opencode go 套餐模型一直返回 `MissingSessionID` — 3 评论。👉 https://github.com/agentscope-ai/QwenPaw/issues/7599

**诉求分析**：
- **底层架构问题**（#7722、#7840）热度最高但 👍 数均为 0，反映用户**对维护者能否跟进缺乏信心**——这两个 issue 都已经开了 2-3 周（9 月上中旬），但讨论停留在"提方案"阶段，无明确 triage 反馈。
- **Provider 适配类**（#7026、#7599）虽评论少但**高频复现**，影响所有模型切换用户。

---

## 5. Bug 与稳定性

按严重程度排序：

### 🔴 P0 / 严重（功能不可用）
| ID | 症状 | 是否有 fix PR |
|---|---|---|
| #8105 | 工具审批按钮**全部走拒绝分支**，审批形同虚设，只能等超时 | ❌ 无 |
| #8109 | **流错误后 agent→agent 调用上下文 100% 丢失**（v2.2.2b4，Console 前端） | ❌ 无（issue 已 CLOSED，但未见修复 commit 关联）|
| #7722 | 容器内存约 1MB/s 增长直至 OOM/挂死（三路径叠加） | ⚠️ 作者自带修复草案，未合入 |
| #7840 | 插件同步 I/O 冻结整个实例 ~40s | ❌ 无 |

### 🟠 P1 / 重要（功能性 bug）
| ID | 症状 | 是否有 fix PR |
|---|---|---|
| #8106 | 容器内插件安装失败（`PIP_TARGET` 泄漏 + `PYTHONPATH` 污染 stdlib） | ✅ **#8107**（first-time contributor，待 merge）|
| #8094 | 升级后 WebView2 缓存陈旧导致 Console **永久卡在 LOADING CONSOLE**，无重试无错误展示 | ✅ **#8102**（待 merge）|
| #8092 | 阿里系网关内容审查误判 `data_inspection_failed` → 归类 bad_request，**无重试无 fallback 直接杀回合** | ❌ 无 |
| #8108 | lazy-route chunk 失败后**永远卡在失败页**，再次跳转仍失败 | ✅ **#8108 PR 自带**（待 merge）|

### 🟡 P2 / 一般
- #7026（deepseek SDK TypeError）、#7599（opencode MissingSessionID）— Provider 适配，#7738 PR 部分覆盖 kwargs 过滤场景。

---

## 6. 功能请求与路线图信号

| 需求 | 提出方 | 关联 PR | 进入下一版本的概率 |
|---|---|---|---|
| **fallback 静默切换需通知用户**（observability）| @veveyluo 在 #8103 | 无 | ⭐⭐⭐ 强信号：#8103 形式专业、给出真实场景，下版本若做 observability 很可能采纳 |
| **聊天记录向上滚动加载**（history pagination）| @auwc #7542 | #7542（XXXL 大 PR，待审）| ⭐⭐ 大改动，需拆 PR；下个补丁不会进，应在 minor 版本规划 |
| **OpenCode 需要每个 session 注入 `x-opencode-session` header** | @Shj451148969 #8104 | ✅ #7869（已实现）| ✅ 已被 PR #7869 解决，建议文档更新即可 |

**路线图信号**：可观测性（#8103）+ 历史会话 UX（#7542）形成两个独立、用户已主动出 PR 的方向，建议维护者在下次社区会议/Roadmap 上正式表态。

---

## 7. 用户反馈摘要

从 Issue 评论与描述中提炼的真实声音：

- 😤 **"审批按钮失效，无论点同意还是拒绝都走拒绝"**（#8105）—— 用户：**"审批形同虚设"**。这是高敏感操作（删除/外部动作），出错会直接破坏用户对自动化的信任。
- 😤 **"升级后控制台永远卡死，没有报错也看不到重试"**（#8094）—— 用户**对升级路径缺乏信心**。
- 😤 **"stream 一断整个 agent 会话全部丢失"**（#8109）—— 多 agent 编排用户最致命的痛点之一。
- 😤 **"模型 fallback 了用户却不知道"**（#8103）—— 用户想要**透明的运行时可观测性**。
- 😐 **"opencode go 套餐用不了"**（#7599）—— 表明 Provider 兼容矩阵仍有缺口。
- 🙂 **正向信号**：多名 first-time contributor（@Tlrenhb / @LUOSENGWA / @tunglambk / @lumenfield / @crown-sports）当日提交修复 PR，社区贡献活跃度在上升。

---

## 8. 待处理积压

维护者请优先 review 以下长期未合入/未响应的高价值项：

| ID | 类型 | 标题 | 停留时长 | 建议动作 |
|---|---|---|---|---|
| **#7026** | Bug | deepseek-v4-pro chat_template_kwargs TypeError | **52 天**（08-14 起）| ⏰ Triage + 决定是否并入 #7738（kwargs 过滤）|
| **#7840** | Bug | 插件事件循环隔离缺失 | 18 天 | ⏰ 立项——属架构问题，建议单独 epic |
| **#7722** | Bug | 内存耗尽三路径 | 23 天 | ✅ 作者已给最小 fix，Triage 即可推进 |
| **PR #7542** | Feat | 聊天记录向上滚动 | 31 天，XXXL | 📦 拆分为小 PR 或转为 draft |
| **PR #7299** | — | 已关闭但问题未解 | 已关闭 | 📌 重新提一个明确的 fix PR 或明确说明驳回理由 |
| **PR #7774** | Fix | hub 启动 provisioner 白名单派生 | 21 天 Under Review | ⏰ 需要 maintainer 决策 |

---

### 📊 健康度评分（本期）

| 维度 | 评分 | 说明 |
|---|---|---|
| Issue 响应速度 | 🟡 中 | 新 Issue 24h 内已被对应 PR 关联，但老 Issue 长期无人 triage |
| PR review 吞吐 | 🟡 中 | 0 合并 / 5 进入 review，存在 review backlog |
| Release 节奏 | 🔴 弱 | 24h 无版本，beta 版已知 P0 bug 未修复 |
| 社区贡献意愿 | 🟢 强 | first-time contributor 占比 ≥40%，生态活跃 |
| 架构稳定性 | 🔴 弱 | 内存/事件循环/会话丢失三类问题均属深层架构 |

**总评：🟡 中等偏低**——建议本周内合并 #8102/#8107/#8108 至少 2 个，并发版 `v2.2.2b5` 修复 P0 类审批与启动问题，恢复用户对 beta 通道的信任。

---

*本报告由 AI 项目分析师基于 GitHub 公开数据自动生成。如需调整维度或重点，请联系维护者。*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报
**报告日期：2026-10-05**

---

## 1. 今日速览

ZeroClaw 在过去 24 小时维持了极高的开发活跃度，共 43 条 Issues 更新与 50 条 PRs 更新，但**无新版本发布**，所有变更仍集中在 master 分支与待评审的 PR 池中。社区当前重心明显偏向 **v0.8.6 缺陷清剿**（配置/隧道/ZeroCode 终端交互）以及 **v0.9.0 运行时/网关解耦架构**（[#7432](https://github.com/zeroclaw-labs/zeroclaw/issues/7432)），其中 1 起 **S0 级数据丢失缺陷**（[#10495](https://github.com/zeroclaw-labs/zeroclaw/issues/10495)）与 5 起 **S1 级工作流阻塞缺陷**正在被多个 PR 联合修复。整体来看，项目处于"集中收口 + 架构升级"并行的关键期，CI/合并节奏较快但缺少跨里程碑的正式发布。

---

## 2. 版本发布

**无新版本发布。** 过去 24 小时内 GitHub Releases 通道为空，最新公开进展仅以 PR 形式合并至 master，未产出可分发的 tag。社区关注的 v0.8.6 / v0.9.0 节奏由 [#7432](https://github.com/zeroclaw-labs/zeroclaw/issues/7432) 这类 tracker 集中管理，尚未触发 cut。

---

## 3. 项目进展

今日有 2 篇 PR 处于 CLOSED 状态，对应了关键 bug 修复与流程沉淀：

- **[#11518 fix(approval): preserve CLI input failure provenance](https://github.com/zeroclaw-labs/zeroclaw/pull/11518)** —— 已关闭。修复了无终端 + stdin EOF 时，runtime 的 fail-closed 被误报为 "Denied by user" 的问题（对应 issue [#11335](https://github.com/zeroclaw-labs/zeroclaw/issues/11335)）。该 PR 让模型与审计日志可以区分"运维"与"缺失输入"，是 fail-closed 语义正确性的重要一步。
- **[#11521 docs(runtime): record the Core Team approval of the composition exception](https://github.com/zeroclaw-labs/zeroclaw/pull/11521)** —— 已关闭。把 #11092 中由 IftekharUddin 给出的 runtime 组合例外审批登记入文档，替换过期 cell，体现治理留痕。

另有大量待合并 PR 推动了以下进展：
- **运行时能力边界**：[#11526](https://github.com/zeroclaw-labs/zeroclaw/pull/11526)（XL，让 supplied 工具成为完整注册表，新增 `ToolSource::uses_native_registry` 语义）。
- **配置安全防御**：[#11527](https://github.com/zeroclaw-labs/zeroclaw/pull/11527)（M，拒绝未经验证的全量保存覆盖既有文件，与 S0 缺陷 #10495 配套）。
- **隧道发布**：[#11530](https://github.com/zeroclaw-labs/zeroclaw/pull/11530) + [#11531](https://github.com/zeroclaw-labs/zeroclaw/pull/11531)（让 tailscale 隧道正确暴露 WSS/enrollment 端点，并修正端口 443 的 URL 报告）。
- **ZeroCode TUI 稳定性**：[#11528](https://github.com/zeroclaw-labs/zeroclaw/pull/11528)（终端丢失退出 + SIGTERM 处理）、[#11529](https://github.com/zeroclaw-labs/zeroclaw/pull/11529)（Linux 剪贴板本地写入器，与 #11418 配套）。
- **Provider 协议补齐**：[#11468](https://github.com/zeroclaw-labs/zeroclaw/pull/11468)（Ollama / llama.cpp 的 `think` 与 `runtime.reasoning_enabled` 透传）。
- **测试基线硬化**：[#11534](https://github.com/zeroclaw-labs/zeroclaw/pull/11534)、[#11533](https://github.com/zeroclaw-labs/zeroclaw/pull/11533)（并行测试下的 RPC、delegate、bootstrap WARN 隔离）。

总体上，**功能维度**（配置/隧道/Provider/ZeroCode）和**工程维度**（CAP/测试稳定性）双线推进，但因未打 tag，外部用户尚未获得可升级产物。

---

## 4. 社区热点

按评论数与👍数排序，最受关注的 Issues 如下：

| 排名 | Issue | 评论 | 👍 | 关注点 |
|---|---|---|---|---|
| 1 | [#9965](https://github.com/zeroclaw-labs/zeroclaw/issues/9965) | 14 | 0 | 并行运行时门下的可执行测试夹具硬化 |
| 2 | [#5287](https://github.com/zeroclaw-labs/zeroclaw/issues/5287) | 9 | 2 | 紧凑 local_small runtime profile 与 prompt budget 契约 |
| 3 | [#7432](https://github.com/zeroclaw-labs/zeroclaw/issues/7432) | 6 | 0 | v0.8.6 / v0.9.0 运行时+网关交付 tracker |
| 4 | [#10495](https://github.com/zeroclaw-labs/zeroclaw/issues/10495) | 5 | 0 | Config::save() 静默清空 config.toml（S0） |
| 5 | [#11420](https://github.com/zeroclaw-labs/zeroclaw/issues/11420) | 4 | 0 | SQLite 会话每条消息 created_at 被反复重写 |

**诉求分析：**
- **#5287（👍=2）** 是今天少有的获得社区点赞的 Issue，反映"本地小模型 + 防止系统指令泄漏到用户可见输出"是 local-first 用户群的真实诉求，与 [#7951](https://github.com/zeroclaw-labs/zeroclaw/issues/7951) 的 effort-based 路由路线图形成共振。
- **#7432** 作为双版本 tracker 本身就承载了社区对里程碑透明度的期待，#10892、#10570、#10673 等子任务都挂在它下面，是 v0.9.0 架构演进的事实协调中心。
- **#9965** 的高评论数说明在多线程测试下生成可执行 shim 后再 spawn 是反复出现的脆弱模式，需要从 fixture 协议层面收敛，而不仅是单点修。

---

## 5. Bug 与稳定性

按严重度分级（合并 S0→S3），并标注是否已有对应修复 PR：

### S0 — 数据丢失 / 安全风险
- **[#10495 Config::save() 用空白文件替换已填充 config.toml**（S0）](https://github.com/zeroclaw-labs/zeroclaw/issues/10495) — 工作区测试运行将 109KB 配置替换为 702B 残壳。**已配 PR：[#11527](https://github.com/zeroclaw-labs/zeroclaw/pull/11527)**（拒绝未经验证的全量保存），仍在评审。

### S1 — 工作流阻塞
- **[#11525 quickstart 在 Android/Termux 失败](https://github.com/zeroclaw-labs/zeroclaw/issues/11525)** — Agent 持久化配置失败，未挂出对应 PR。
- **[#11418 ZeroCode "Copy" 一键按钮失效](https://github.com/zeroclaw-labs/zeroclaw/issues/11418)** — **已配 PR：[#11529](https://github.com/zeroclaw-labs/zeroclaw/pull/11529)**（Linux 本地剪贴板写入器 + 结果回报）。
- **[#10673 ZeroCode Code pane ACP turn 持久化](https://github.com/zeroclaw-labs/zeroclaw/issues/10673)** — 失败/取消 turn 未落库，#9333 残余切片，**未挂 PR**。
- **[#10876 网关认证段配置写入但未生效](https://github.com/zeroclaw-labs/zeroclaw/issues/10876)** — 需 daemon 重载，部分已交付，CLI 暴露 + 文档仍 open。
- **[#10536 macOS Seatbelt 忽略 allowed_roots](https://github.com/zeroclaw-labs/zeroclaw/issues/10536)** — Shell 命令触发 "Operation not permitted"，**未挂 PR**。

### S2 — 行为降级
- **[#11420 SQLite session 每条消息 created_at 被覆写](https://github.com/zeroclaw-labs/zeroclaw/issues/11420)** — 每轮整段重写导致时间戳失真，**未挂 PR**。
- **[#9190 Reliable provider key 轮换只选不应用](https://github.com/zeroclaw-labs/zeroclaw/issues/9190)** — rotate_key_after_rate_limit_locked 选下一个 key 后未真正切换，**未挂 PR**。
- **[#11371 MCP 嵌套对象被序列化为字符串](https://github.com/zeroclaw-labs/zeroclaw/issues/11371)** — `{allowMultiple:false}` 变 `"\"{...}\""`，**未挂 PR**。
- **[#11515 cost ledger 丢弃残写记录仅 WARN](https://github.com/zeroclaw-labs/zeroclaw/issues/11515)** — 汇总仍显示完整，存在合规风险，**未挂 PR**。
- **[#11517 Web chat 中途刷新丢失用户 prompt](https://github.com/zeroclaw-labs/zeroclaw/issues/11517)** — 水合快照早于正在运行的 turn，**未挂 PR**。
- **[#11335（已关闭）CLI approval 无终端/EOF 错报为用户拒绝](https://github.com/zeroclaw-labs/zeroclaw/issues/11335)** — **已配 PR：[#11518](https://github.com/zeroclaw-labs/zeroclaw/pull/11518)**（已关闭，修复已落地）。

### S3 — 小问题
- **[#11416 Slack "is thinking…" 自 v0.8.5 起不再显示](https://github.com/zeroclaw-labs/zeroclaw/issues/11416)** — 在普通频道线程里回归，疑似 #8985 的副作用，**未挂 PR**。
- **[#10702 token-budget 历史裁剪在第一个容纳的 turn 处硬断](https://github.com/zeroclaw-labs/zeroclaw/issues/10702)** — 与 #10674 消息数裁剪同型滞后缺陷，**未挂 PR**。
- **[#11484 ZeroCode Agent 关闭重复工具防护](https://github.com/zeroclaw-labs/zeroclaw/issues/11484)** — 重复 web_fetch 同 URL 成功，**未挂 PR**。

> 注：**#10728 npm audit 失败（js-yaml 高危）** 仍 open，[`js-yaml`](https://github.com/zeroclaw-labs/zeroclaw/issues/10728) 间接依赖需更新，CI 已被审计报告阻断。

---

## 6. 功能请求与路线图信号

**与 v0.8.6 强相关的功能/修复型 PR：**
- **[#11468 Ollama/llama.cpp thinking 控制](https://github.com/zeroclaw-labs/zeroclaw/pull/11468)** —— 进一步打通本地推理的 `think` 与 reasoning 开关，是 #5287（local_small profile）的前置依赖。
- **[#11532 cap structured Agent 系统 prompt](https://github.com/zeroclaw-labs/zeroclaw/pull/11532)** —— 把 `max_system_prompt_chars` 应用到网关结构化路径，与本地小模型契约直接相关。

**与 v0.9.0 架构相关的功能 PR：**
- **[#11526 供能边界（XL）](https://github.com/zeroclaw-labs/zeroclaw/pull/11526)** —— 让 supplied 工具成为完整注册表，为 #10892 / #7432 的"规范 config generation + per-target 应用账本"打地基。
- **[#11111 bounded SOP RPC 放置例外](https://github.com/zeroclaw-labs/zeroclaw/pull/11111)** —— 在 zeroclaw-kernel IPC 抽取前允许使用现有手动 `sops.run` 处理器，是过渡期架构协议。
- **[#10504 typed stop taxonomy for turn-path aborts](https://github.com/zeroclaw-labs/zeroclaw/pull/10504)** —— agent-loop 主题重构，需要 maintainer review，目前处于 parking-lot。

**新增长期功能请求：**
- **[#7951 Effort-based 本地/云端模型路由](https://github.com/zeroclaw-labs/zeroclaw/issues/7951)** —— 简单/低延迟 turn 走本地，困难 turn 升级到云，与 #5287 的 prompt budget 契约互补。
- **[#11442 退役遗留原生工具适配器](https://github.com/zeroclaw-labs/zeroclaw/issues/11442)** —— 把产品型 SaaS 集成通过 skills / plugins / MCP 提供，是生态迁移策略。
- **[#8527 大文件改走 channel 附件](https://github.com/zeroclaw-labs/zeroclaw/issues/8527)** —— agent 大段 HTML / 代码不再直接粘贴到聊天。
- **[#10698 Web 引导式 cron 编辑器](https://github.com/zeroclaw-labs/zeroclaw/pull/10698)** —— 替换原始 cron 文本框，但仍保留 6/7 字段与 at/every，parking-lot。
- **[#10768 Sendblue iMessage/SMS channel](https://github.com/zeroclaw-labs/zeroclaw/pull/10768)** —— 给非 Apple 主机一条 iMessage 通道（XL 高风险）。

**信号判断：** 短期内最有可能进入 v0.8.6 的，是 [#11527](https://github.com/zeroclaw-labs/zeroclaw/pull/11527)（堵 S0）、[#11518](https://github.com/zeroclaw-labs/zeroclaw/pull/11518)（已关闭的审批语义）、[#11530](https://github.com/zeroclaw-labs/zeroclaw/pull/11530)/[#11531](https://github.com/zeroclaw-labs/zeroclaw/pull/11531)（tailscale 隧道完整暴露）。[#11468](https://github.com/zeroclaw-labs/zeroclaw/pull/11468) 与 [#11532](https://github.com/zeroclaw-labs/zeroclaw/pull/11532) 与 [#5287](https://github.com/zeroclaw-labs/zer

</details>

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*