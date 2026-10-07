# OpenClaw 生态日报 2026-10-07

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-10-07 03:45 UTC

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
**报告日期：2026-10-07** | 数据来源：github.com/openclaw/openclaw

---

## 📌 今日速览

OpenClaw 今日呈现**高度活跃但稳定压力较大**的状态：过去24小时共有 500 条 Issues 更新（413 新开/活跃、87 已关闭）和 500 条 PR 更新（365 待合并、135 已合并/关闭），但**无新版本发布**。当前主线（2026.9.6 / 2026.9.5）被多条 P0 级 Bug 集中困扰——集中在 Gateway 启动挂起、原生内存泄漏、SQLite 锁竞争、模型目录丢失、升级失败等"系统可用性"层面，且多个问题跨越 8 月、9 月版本持续存在，反映出近期发版的质量波动较为突出。社区关注度持续走高，最高单 Issue 评论数达 31 条（#44925），多个 P0 议题出现大量技术细节交换，提示社区正在协助定位 root cause。

---

## 🚀 版本发布

**今日无新版本发布。**

当前最新稳定版仍为 **2026.9.6**（部分 issue 提及 2026.9.5），但其上报告了多条回归性问题（见下文 §5）。

---

## 📈 项目进展

今日**已关闭的 87 条 Issues**与**已合并/关闭的 135 条 PRs** 中，重点进展包括：

### 重大关闭 / 修复
- **#157126 [CLOSED, 🦞 安全相关]**：[`claude-cli` MCP bridge 在 restart-recovery 后继承原请求 scope，导致 owner turn 丢失 `operator.admin`](https://github.com/openclaw/openclaw/issues/157126)——loopback 桥继承 `AsyncLocalStorage` scope 引发权限继承错误，已被标记修复并需要安全 review。
- **#154114 [CLOSED, P0]**：[`openclaw update` 在 candidate rehearsal 阶段报 "No usable, authenticated, tool-capable inference route"](https://github.com/openclaw/openclaw/issues/154114)，属于标记 `not-repro-on-main` 的更新路径问题，已关闭。
- **#157319 [CLOSED, P0, 🦞]**：[2026.9.6 升级出现 `state-migrated-no-rollback` + codex 插件阻塞 catalog 刷新](https://github.com/openclaw/openclaw/issues/157319)，关闭前获得 8 条评论。
- **#150132 [CLOSED, P1, 🦞]**：[`claude-cli` 的 `--include-partial-messages` 增量受限于冻结的 8 MiB 每轮 stdout 上限，长工具轮次（约 10–13 万字符代码）丢失最终回复](https://github.com/openclaw/openclaw/issues/150132)——已附 PR (`clawsweeper:linked-pr-open`)。

### 活跃维护者今日动作
核心维护者 **steipete** 今日提交了多条高质量 PR，体现主线持续打磨：
- [PR #166435](https://github.com/openclaw/openclaw/pull/166435) — 修复工具 CLI 退出时 `EPROCESSGROUP_CLEANUP_FAILED` 误报
- [PR #166403](https://github.com/openclaw/openclaw/pull/166403) — `board.get` 在主机负载下降低读延迟
- [PR #166434](https://github.com/openclaw/openclaw/pull/166434) — 模型登录重检避免不必要的 catalog workers
- [PR #166364](https://github.com/openclaw/openclaw/pull/166364) — 核心命令/回复/通道/插件帮助函数去重（`refactor(core): deslop redundant options and state`）
- [PR #166412](https://github.com/openclaw/openclaw/pull/166412) — 修复 agent executor 闲置退役时启动完整性证明丢失
- [PR #166432](https://github.com/openclaw/openclaw/pull/166432)（vincentkoc）— 简化 prepared-text helpers

### 整体评估
项目**代码侧仍在积极维护**（steipete 等核心维护者持续提交），但**版本主线质量信号转弱**——从近 1 个月大量"2026.9.4 → 2026.9.5 → 2026.9.6 升级失败 / 启动挂起 / 数据丢失"类 P0 报告看，发版节奏与回归控制存在压力。建议关注下一补丁版本的发布以恢复主线健康度。

---

## 🔥 社区热点（评论最多 / 高反应）

| 排名 | 编号 | 标题 | 评论 | 👍 | 链接 |
|---|---|---|---|---|---|
| 1 | #44925 | Subagent 完成静默丢失——无重试、无通知、超时无自动恢复（[🦞 diamond lobster]）| 31 | 2 | [链接](https://github.com/openclaw/openclaw/issues/44925) |
| 2 | #149538 | main (1611ca6d)：Gateway ready 但永不服务；event loop 被饿死 / 632 节点集群 | 24 | 0 | [链接](https://github.com/openclaw/openclaw/issues/149538) |
| 3 | #159662 | `prepared-model-catalog.worker.js`：无界内存泄漏 ~4-5 GB/h | 20 | 1 | [链接](https://github.com/openclaw/openclaw/issues/159662) |
| 4 | #97616 | 子进程泄漏 → 累积 zombie + 运行时退化 | 18 | 1 | [链接](https://github.com/openclaw/openclaw/issues/97616) |
| 5 | #152981 | Gateway 启动在 `sidecars.model-runtime` 挂起约 17 分钟 | 17 | 0 | [链接](https://github.com/openclaw/openclaw/issues/152981) |
| 6 | #79902 | 基于 database-first runtime 增加 SQLite transcript/session 接口 | 15 | 2 | [链接](https://github.com/openclaw/openclaw/issues/79902) |
| 7 | #43367 | 多 agent 编排不稳定（并发覆盖 / session lock 失败 / detached child） | 15 | 1 | [链接](https://github.com/openclaw/openclaw/issues/43367) |
| 8 | #127229 | Telegram：durable update 在 transport tracker 落定前被误标 tombstone | 15 | 1 | [链接](https://github.com/openclaw/openclaw/issues/127229) |
| 9 | #136183 | SSH 启动 hang，2026.8.x 回归 | 14 | 0 | [链接](https://github.com/openclaw/openclaw/issues/136183) |
| 10 | #96975 | 隔离子 agent 完成事件从父级上下文，默认仅回 `status + child session link` | 13 | 1 | [链接](https://github.com/openclaw/openclaw/issues/96975) |
| 11 | #44130 | TUI 自动滚动仍干扰阅读（2026.3.8 仍存在）| 7 | **3** | [链接](https://github.com/openclaw/openclaw/issues/44130) |

### 热点诉求分析
- **subagent 编排是当前最热的社区痛点**：#44925 / #43367 / #96975 / #154834 / #154891 等多条 Issue 围绕 subagent 完成交付失败、上下文污染、热重载副作用展开，反映**长任务编排的"完成语义"在分布式场景下尚未收敛**。
- **更新 / 安装生命周期是信任问题**：#152981 / #152992 / #154114 / #154924 / #157319 / #134619 / #152804 集中暴露升级链上的多种失败模式，社区迫切希望稳定可回滚的升级路径。
- **反应数（👍）最高的 #44130** 揭示了一个长期被忽视但用户感知强烈的体验问题——TUI 自动滚动，已"stale"但仍获 3 个 👍，说明维护者尚未识别该体验问题的严重性。

---

## 🐛 Bug 与稳定性

### P0 严重（生产可用性事件）
| 编号 | 简述 | 状态 | Fix PR | 链接 |
|---|---|---|---|---|
| **#149538** | Gateway ready 后 event loop 饿死，`/health` 全部超时，RSS 持续上涨至 OOM；632 节点 fleet 复现 | OPEN | ❌ | [链接](https://github.com/openclaw/openclaw/issues/149538) |
| **#159662** | `prepared-model-catalog.worker.js` 单调内存泄漏，~4-5 GB/h，与 provider 无关 | OPEN | ❌ | [链接](https://github.com/openclaw/openclaw/issues/159662) |
| **#152981** | 2026.9.5 Gateway 启动在 `sidecars.model-runtime` 挂起 17 分钟最终失败 | OPEN | ❌ | [链接](https://github.com/openclaw/openclaw/issues/152981) |
| **#152804** | 2026.9.5 回归：`minimax-portal` 升级后丢失 model catalog，heartbeat 报 `Unknown model: minimax-portal/MiniMax-M3` | OPEN | ❌ | [链接](https://github.com/openclaw/openclaw/issues/152804) |
| **#160386** | 2026.9.6 大 session 库导致 SQLite I/O 压力 + WebUI RPC 超时 + `STATE_DATABASE_READ_ADMISSION_INVALIDATED` | OPEN | ❌ | [链接](https://github.com/openclaw/openclaw/issues/160386) |
| **#148307** | 464 MB agent DB，session 回收 9–47 s 超过 5 s busy timeout → `database is locked` | OPEN | ❌ | [链接](https://github.com/openclaw/openclaw/issues/148307) |
| **#152965** | 非通道插件热重载会处置所有通道插件 → 切断活动流、丢失入站消息 | OPEN | ❌ | [链接](https://github.com/openclaw/openclaw/issues/152965) |
| **#152992** | Windows：`openclaw update` 在 candidate snapshot 阶段 `mkdir ENOENT`（含非法 `?` 字符） | OPEN | ❌ | [链接](https://github.com/openclaw/openclaw/issues/152992) |
| **#155191** | 2026.9.5 原生内存泄漏 ~1 GiB / 30 s（V8 heap 稳定） | OPEN | ❌ | [链接](https://github.com/openclaw/openclaw/issues/155191) |
| **#134619** | 升级至 8.1 完全破坏现有安装与主要功能 | OPEN | ❌ | [链接](https://github.com/openclaw/openclaw/issues/134619) |
| **#157126** | claude-cli MCP bridge 继承请求 scope，restart-recovery 后 owner turn 丢失 `operator.admin` | **CLOSED** | ✅（已 close） | [链接](https://github.com/openclaw/openclaw/issues/157126) |

### P1 严重（功能性 / 回归）
- **#44925**（🦞）Subagent 完成静默丢失——影响消息丢失、session state，已开 31 条评论未有关闭 PR。
- **#97616**（🦪）hook/tool 子进程未 reap，zombie 累积——回归问题。
- **#127229**（🦞）Telegram durable update 被误标 tombstone——在 transport tracker 落定前误判丢失。
- **#136183**（🦪）SSH banner 交换 hang→SIGTERM，2026.8.x 回归。
- **#133946**（🦪）Native SSH sandbox exec abort 后同 session 后续调用 wedge（#110704 / #102006 修复后仍复现）。
- **#133985**（🦪）`deps.refreshOpenAICodexToken is not a function` → codex auth 失败，级联影响 google-calendar / gmail 插件。
- **#83959**（🦪）Codex app-server 启动重试耗尽，备用 server 仍未就绪。
- **#154891**（🦪）回滚后的 config 热重载仍通过 `PluginInstanceUnavailableError` 永久性 brick 不相关插件。
- **#130955**（🦐）`openclaw memory index` 在恰好 2 个文件后永久 stall。
- **#154114**（CLOSED, P0）update candidate rehearsal 误报 — 已关。
- **#157319**（CLOSED, P0）2026.9.6 upgrade verification 失败 — 已关。

### 稳定性趋势
**关键观察**：连续三个版本（8.1、2026.9.4、2026.9.5、2026.9.6）均报告严重回归 / 升级路径失败，且多数 P0 至今无对应 fix PR。这反映近期发布节奏可能偏激进，**建议维护者在下一个补丁版本（2026.9.7 或 2026.10）前暂停 minor 推进，集中修复 P0**。

---

## 💡 功能请求与路线图信号

| 议题 | 简述 | 链接 | 路线图可能性 |
|---|---|---|---|
| **#79902** | 在 database-first runtime 之上提供 SQLite transcript/session 接口（高级消费者构建）| [链接](https://github.com/openclaw/openclaw/issues/79902) | 🟢 高——已有 stale PR 关联 |
| **#96975** | 隔离 subagent 完成事件从父级上下文（默认仅返回 status + child session link）| [链接](https://github.com/openclaw/openclaw/issues/96975) | 🟡 中——已存在相关 PR 链 |
| **#73537** | 为 release 标签增加"生产就绪"稳定性标识 | [链接](https://github.com/openclaw/openclaw/issues/73537) | 🟢 高（用户长期痛点，与近期发版混乱强相关）|
| **#49259** | Dashboard Sessions 中可清理陈旧孤立会话 | [链接](https://github.com/openclaw/openclaw/issues/49259) | 🟡 中 |
| **#49381** | Feishu：主模型 rate-limit 切换备模型后产生重复最终回复 | [链接](https://github.com/openclaw/openclaw/issues/49381) | 🟡 中（已有讨论）|
| **#45501** | `session.resetPrompt` —— 可配置 session 启动消息 | [链接](https://github.com/openclaw/openclaw/issues/45501) | 🟡 中 |
| **#54373** | Context Provenance：注入上下文段增加 source/volatility 元数据 | [链接](https://github.com/openclaw/openclaw/issues/54373) | 🟠 探讨阶段 |
| **#45390** | Session TTL / max lifetime 自动轮换 | [链接](https://github.com/openclaw/openclaw/issues/45390) | 🟡 中（已有 PR 链）|
| **#53654** | Discord：支持 `messageUpdate`/`messageDelete`（编辑重处理 / 删除取消）| [链接](https://github.com/openclaw/openclaw/issues/53654) | 🟡 中（👍=3 强信号）|
| **#56349** | 不可绕过的出站策略强制（pre-send guarantee，🛡️ 安全增强）| [链接](https://github.com/openclaw/openclaw/issues/56349) | 🟠 探讨阶段，security review 需 |
| **#64721** | Cron tool schema 缺少 model/timeout/contextTokens/maxSpendUsd 字段 | [链接](https://github.com/openclaw/openclaw/issues/64721) | 🟢 高（小改动高收益）|
| **#85461** | 捕获图片生成 provider usage 元数据（OpenAI/Azure/LiteLLM/fal）| [链接](https://github.com/openclaw/openclaw/issues/85461) | 🟠 探索阶段 |
| **#48918** | 用户级 Skill 偏好 / 约定支持 | [链接](https://github.com/openclaw/openclaw/issues/48918) | 🟡 中 |
| **#113706** | Memory Wiki 批量操作（bounded）| [链接](https://github.com/openclaw/openclaw/issues/113706) | 🟢 高（已 linked PR）|
| **#72717** | SQLite FTS 索引为 `wiki_search` 提升合成查询性能 | [链接](https://github.com/openclaw/openclaw/issues/72717) | 🟢 高 |
| **#121821** | Control UI 中"在默认应用中打开"本地文件（明确用户点击触发）| [链接](https://github.com/openclaw/openclaw/issues/121821) | 🟠 探索阶段，security review 需 |

**信号解读**：subagent 完成语义、多通道能力扩展、Session 生命周期管理与上下文可追溯性是社区最关心的中长期方向；其中 `production-readiness stability label`（#73537

---

## 横向生态对比

# 个人 AI 助手 / 自主智能体开源生态 · 横向对比日报

**报告日期**：2026-10-07 ｜ **覆盖项目**：13 个 ｜ **数据来源**：各项目 GitHub 公开动态

---

## 1. 生态全景

2026-10-07 的开源 AI 智能体生态呈现明显的**"两极分化 + 命名收敛"**态势：以 OpenClaw 为代表的"Claw"系列已成为事实上的生态锚点（OpenClaw 单日 1000+ 工单位远超第二名 ZeroClaw 的 90），但其主线质量信号转弱（连续 4 个版本报告 P0 回归）；与此同时，ZeroClaw、NullClaw 等次梯队项目正在以"质量收敛 + 安全硬化"的方式快速追赶。多个项目（IronClaw / TinyClaw / Moltis / ZeptoClaw）24 小时零活动，提示生态已进入**优胜劣汰期**——活跃项目普遍围绕"更新鲁棒性、subagent 编排、跨通道一致性、成本可观测"四大共性痛点展开迭代，社区共识正在形成。

---

## 2. 各项目活跃度对比

| 项目 | Issues | PRs | 已关闭 | Release | 健康度 | 关键特征 |
|---|---|---|---|---|---|---|
| **OpenClaw** | 500 (413活/87关) | 500 (365待/135合) | 222 | ❌ | 🟡 中等 | 流量最大，但 P0 积压，4 个版本连续回归 |
| **ZeroClaw** | 40 (7关) | 50 (4关) | 11 | ❌ | 🟢 良好 | v0.8.6/v0.9.0 里程碑管理，Issue tracker 化 |
| **Hermes Agent** | 50 (45活/5关) | 50 (0合) | 5 | ❌ | 🟡 中等 | 高活跃但 PR 全部 OPEN，审阅压力极大 |
| **NanoBot** | 4 | 10 (3关) | 3 | ❌ | 🟢 良好 | P0 Bug 当日闭环（#6085→#6086） |
| **NanoClaw** | 3 (全 OPEN) | 16 (5合/11待) | 5 | ❌ | 🟢 良好 | 「投递语义」修复集中，31% 合并率 |
| **NullClaw** | 0 | 14 (4合/10待) | 4 | ❌ | 🟡 偏内 | 单作者驱动，并发/内存安全同日闭环 |
| **LobsterAI** | 50 (全 stale 关) | 9 (6合/3待) | 56 | ❌ | 🟡 治理 | stale bot 批量清理，基于 OpenClaw 引擎 |
| **CoPaw** | 1 | 2 (全待) | 0 | ❌ | 🟡 中等 | 平稳期，单一贡献者驱动 |
| **PicoClaw** | 5 | 70 (全关/0待) | 70 | ❌ | 🔴 停滞 | 主线 0 进展，社区 fork 公告频繁 |
| **IronClaw** | 0 | 0 | 0 | ❌ | ⚪ 静默 | 24h 无活动 |
| **TinyClaw** | 0 | 0 | 0 | ❌ | ⚪ 静默 | 24h 无活动 |
| **Moltis** | 0 | 0 | 0 | ❌ | ⚪ 静默 | 24h 无活动 |
| **ZeptoClaw** | 0 | 0 | 0 | ❌ | ⚪ 静默 | 24h 无活动 |

**总体观察**：当日 **11/13** 项目无新版本发布，整体进入"修多于发"的沉淀期；**4 个项目 24h 零活动**，生态实际活跃参与者 ≈ **9 个**。

---

## 3. OpenClaw 在生态中的定位

### 3.1 社区规模优势（压倒性）
OpenClaw 当日 1000 条工单位 = ZeroClaw（90）+ Hermes（100）+ NanoClaw（19）+ NullClaw（14）+ LobsterAI（59）+ NanoBot（14）+ CoPaw（3）的 **3.4 倍**。最高单 Issue 评论 31 条（#44925）、维护者 steipete 单日 6 条高质量 PR，体现生态龙头的人力厚度。

### 3.2 衍生项目对 OpenClaw 的依赖
- **LobsterAI**：PR 标题明确出现 `fix(openclaw): ...`（如 #2804 macOS 符号链接），确认其为 OpenClaw 引擎的消费方。
- **PicoClaw**：社区 fork（afjcjsbx）反复公告"活跃维护"，反映下游用户对 OpenClaw 协议/能力的强需求。

### 3.3 质量信号转弱（隐忧）
- 连续 4 个版本（8.1 / 9.4 / 9.5 / 9.6）报告严重回归
- **11 条 P0 中仅 1 条（#157126）关闭**，其余 OPEN 且无对应 Fix PR
- 9.6 升级后 SQLite 锁竞争、原生内存泄漏 ~1 GiB/30s（#155191）、Gateway 启动 17 分钟挂起（#152981）等核心可用性问题**无修复时间表**

### 3.4 与 ZeroClaw 的差异
| 维度 | OpenClaw | ZeroClaw |
|---|---|---|
| 发布节奏 | 频繁但欠收口 | 慢但有 tracker (#7432) |
| 安全硬化 | 多个 P0 安全 issue 未修 | 当日合并 Windows key ACL（#11451）|
| 通道架构 | 多 P0 通道 Bug（Telegram tombstone 等） | SOP/channel 工具统一工厂 (#11595) |
| 沙箱 | 部分跨平台适配 | 全面 Seatbelt/Firejail/Bubblewrap 三端硬化 |

---

## 4. 共同关注的技术方向

### 4.1 🔥 更新/安装生命周期鲁棒性（**6 项目涉及**）
- **OpenClaw**：`openclaw update` 多路径失败（#154114, #152981, #152992, #157319）
- **NanoClaw**：OneCLI 升级指南回滚错误（#4041）、setup commit 丢失（#4051）
- **Hermes Agent**：更新导致插件破损（#125437 pain cluster，#123926、#134115、#133992、#113294 一簇）
- **LobsterAI**：stale bot 误关用户 Issue（#2803 修复）
- **PicoClaw**：Go CVE 升级 PR 长期未合并（#3248、#2818）
- **ZeroClaw**：`Config::save()` 覆盖 109KB → 702B 空壳（#10495，S0）

**核心诉求**：可回滚、可恢复、原子化的升级路径；CI 治理（stale bot、dependabot）需主动维护。

### 4.2 🔥 Subagent 编排完成语义（**4 项目涉及**）
- **OpenClaw** #44925（31 评论）：subagent 静默丢失；#43367 并发覆盖；#96975 完成事件污染父级
- **Hermes Agent** #97681（40 评论，旗舰议题）：跨网关 Bot 协作愿景
- **PicoClaw** #2937：Agent Collaboration Bus（已就绪未合并）
- **ZeroClaw** #1044/#1045/#1046：Agent loop 卫生（同日闭环）

**核心诉求**：分布式 subagent 完成交付的"语义可观测性"——是当前最热的架构级痛点。

### 4.3 🔥 成本控制与可观测性（**3 项目涉及**）
- **OpenClaw** #83959 / #56349：codex 备用 server、不可绕过的出站策略
- **ZeroClaw** #11515 / #11585：cost ledger torn-write 仅 WARN；触发 `daily_limit_usd` 后必须重启 daemon
- **Hermes Agent** #132817 / #119163：429 凭据冷却"看不见"，无 `auth reset` 入口

**核心诉求**：成本事件可恢复、可观测，配置与运行状态对齐。

### 4.4 🔥 通道语义保真（**6+ 项目涉及**）
- **OpenClaw**：Telegram tombstone（#127229）、Feishu 双回复（#49381）、Discord messageUpdate（#53654）
- **NanoBot**：Slack 双消息压缩提示（#6084）、Matrix 不使用 reply（#5274）、DingTalk sender name（#1420）
- **ZeroClaw** #11554：`[IMAGE:...]` 每轮重发幻影；#10926 Matrix 路由错；#11553 通道去抖提案
- **Hermes Agent**：Telegram `/reasoning --global` 无参数（#134257）
- **LobsterAI**：钉钉配额（#197）、微信公众号（#52）

**核心诉求**：尊重各 IM 平台的原生语义，而非"通用回退"。

### 4.5 🔥 沙箱与安全硬化（**3 项目涉及**）
- **ZeroClaw**：Seatbelt `allowed_roots` 被忽略（#10536）、Firejail/Bubblewrap 检测失败回落（#11538/39/40，S0/S1）
- **OpenClaw**：claude-cli MCP scope 权限继承（#157126 已修）、SQLite 锁
- **NullClaw**：A2A bearer principal 隔离（#1012，多租户串扰）

### 4.6 🔥 上下文/记忆子系统（**4 项目涉及**）
- **OpenClaw**：SQLite FTS wiki_search（#72717）、Memory Wiki 批量操作（#113706）
- **NanoBot**：静默 idleCompact（#6029）、Heartbeat 评估器可配（#6083）
- **NullClaw** #1001/#1005：auto_recall/recall_limit/max_context_bytes 可配置；归档分片误召回
- **ZeroClaw** #9887：大图降采样而非丢弃

---

## 5. 差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 技术架构特征 |
|---|---|---|---|
| **OpenClaw** | 全功能个人 AI 助手 + 多通道 + subagent 编排 | 高级用户 / 团队 / 跨平台桌面用户 | 通用 + 庞大插件生态；当前在 SQLite/原生内存/升级链上承压 |
| **ZeroClaw** | 安全硬化 + 多通道 SOP + 成本控制 | 重视安全与可观测性的运维用户 | Rust 实现；Seatbelt/Firejail/Bubblewrap 三端沙箱；v0.8.6/v0.9.0 milestone 化管理 |
| **Hermes Agent** | 跨网关 Bot 协作 + Desktop UI | 团队 / 多账号池用户 | Desktop + MCP；愿景驱动（#97681）；PR 审阅积压严重 |
| **NanoClaw** | 投递可靠性 + 群组机器人 + Windows/macOS 安装 | IM 重度用户 / 长跑任务场景 | "投递语义闭环"专项收敛；OneCLI 绑定 |
| **NanoBot** | WebUI 体验 + 多渠道（Slack/Matrix/DingTalk）+ Provider 兼容 | 偏好 Web 管理的中国大陆用户 | Provider-first；Bug 响应快（1 日闭环） |
| **NullClaw** | Agent loop 卫生 + 内存安全 + A2A 安全 | 系统级开发者 / 多租户场景 | Zig 实现；单作者驱动；并发/生命周期硬化 |
| **LobsterAI** | Computer Use + Win/Mac 全平台桌面 + 国产 IM | 中国大陆普通桌面用户 | 基于 OpenClaw 引擎；偏 UI/UX；商业化探索 |
| **CoPaw** | 推理强度控制 + 自定义 Provider 能力模板 | Qwen 系列模型用户 | 平稳期；PR SLA 缺失 |
| **PicoClaw** | （停滞） | 历史用户 | 待 fork 迁移 |
| **IronClaw / TinyClaw / Moltis / ZeptoClaw** | — | — | 当前无活动 |

---

## 6. 社区热度与成熟度分层

### 🟢 快速迭代层（高活跃 + 强收口）
- **ZeroClaw**：当日 11 个关闭项 + tracker 化交付，**最健康**。
- **NanoBot**：P0 Bug 1 日闭环率 100%。
- **NanoClaw**：31% PR 合并率 + 投递链路专项修复。

### 🟡 质量巩固层（高活跃但有积压）
- **OpenClaw**：流量冠军但 P0 积压 10 条未修，发版节奏需要暂停。
- **Hermes Agent**：50 条 PR 全 OPEN，需批量评审否则贡献者疲劳。
- **NullClaw**：技术深度高但社区参与度极低，单点风险显著。

### 🟠 治理恢复层（流量靠 stale bot 撑）
- **LobsterAI**：stale bot 清理驱动指标；活跃 Issue 评论密度尚可但 Issue 被批量关停。

### 🔴 停滞/衰退层
- **PicoClaw**：70 PR 全关、0 待合，主线事实停滞，社区 fork 公告频繁。
- **IronClaw / TinyClaw / Moltis / ZeptoClaw**：连续静默，**生态淘汰风险**。

### 成熟度判断框架
| 信号 | OpenClaw | ZeroClaw | NanoClaw | Hermes | NullClaw | PicoClaw |
|---|---|---|---|---|---|---|
| 单一维护者依赖 | 🟢 多维护者 | 🟢 多 | 🟢 多 | 🟢 多 | 🔴 单点 | ⚪ 不明 |
| 修复响应 SLA | 🔴 P0 长期挂起 | 🟢 当日 | 🟢 当日 | 🟡 中等 | 🟢 同日 | 🔴 不响应 |
| 文档与代码一致 | 🟡 中 | 🟢 中 | 🟢 高 | 🟡 中 | 🟢 中（中英双语） | ⚪ 不明 |
| 安全响应 | 🔴 多 P0 安全 issue OPEN | 🟢 ACL 即时硬化 | 🟡 中 | 🟡 中 | 🟢 多租户隔离 PR 就绪 | 🔴 CVE PR 未合并 |

---

## 7. 值得关注的趋势信号

### 7.1 趋势一：**"Claw"命名收敛 = 生态锚点确立**
13 个项目中 **7 个带 Claw 命名**（OpenClaw / PicoClaw / NanoClaw / NullClaw / IronClaw / TinyClaw / ZeptoClaw / ZeroClaw），加上 Hermes Agent 与 OpenClaw 的从属关系（LobsterAI），提示 OpenClaw 协议/接口正在成为事实标准。**对开发者的参考价值**：基于 OpenClaw API 构建的下游应用可享受生态溢出红利。

### 7.2 趋势二：**"安全硬化"成为差异化主战场**
ZeroClaw（沙箱三端 + 配置原子写）、NullClaw（A2A bearer principal）、OpenClaw（多 P0 安全 issue OPEN）形成鲜明对比。**对开发者的参考价值**：生产级 AI Agent 必须将"沙箱失败可见性 + 配置 round-trip 校验 + 多租户隔离"列为 P0 而非 P2。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目日报

**日期：2026-10-07**
**数据来源：github.com/HKUDS/nanobot**

---

## 1. 今日速览

NanoBot 项目今日保持中等活跃度，过去 24 小时共有 4 个新开/活跃 Issue 和 10 个 PR 流转（其中 7 个待合并、3 个已关闭）。无新版本发布，社区活动主要集中在 **WebUI 体验打磨**、**多渠道集成（Slack/Matrix/DingTalk）** 与 **Provider 兼容性修复** 三个方向。值得关注的信号是：当日新报的 DeepSeek websearch 严重 Bug（#6085）已在同日得到修复 PR（#6086），维护响应效率较高；多渠道"上下文压缩提示信息冗余/泄露"问题形成聚集（#6029、#6084），反映出该方向的用户痛点正在显现。

---

## 2. 版本发布

⚠️ **无新版本发布**。当前最新版仍为社区提及的 `nanobot-ai 0.3.5`（来自 Issue #6088 的版本号信息）。

---

## 3. 项目进展

今日共有 **3 个 PR 被关闭**，整体向前推进了若干功能与质量改进：

| PR | 标题 | 关闭类型 | 影响范围 |
|---|---|---|---|
| [#6080](https://github.com/HKUDS/nanobot/pull/6080) | feat(webui): show commit and prefill bug report diagnostics | 已关闭 | WebUI → 设置 → 关于 页面优化，显示连接的网关短提交哈希，并预填 Bug 报告模板，降低用户提交反馈门槛 |
| [#6057](https://github.com/HKUDS/nanobot/pull/6057) | feat(webui): choose the chat for scheduled tasks | 已关闭 | WebUI 调度任务：允许切换执行会话，**运行与回复在同一会话**，避免跨会话转发语义混乱 |
| [#1420](https://github.com/HKUDS/nanobot/pull/1420) | Fix: Add sender name context to DingTalk messages | 已关闭 | DingTalk 渠道修复：Agent 现在能获取发送者真实姓名（而非仅 staffId），显著改善中文环境下的上下文识别 |

**进度评估**：合并/关闭的 3 个 PR 涵盖两个渠道适配（DingTalk）、一项 WebUI 功能增强（调度任务选会话）和一项 WebUI 诊断体验优化，整体属于 **稳定性与可用性** 维度的稳步推进，单日推进幅度约 30%。

---

## 4. 社区热点

**讨论最活跃条目**：

- 🔥 **[#6029](https://github.com/HKUDS/nanobot/issues/6029)** — *Feature Request: Allow silent context compaction*（npike，2 评论，p2）
  - 核心诉求：后台 idleCompact / 心脏跳动 / dream 周期触发的上下文压缩不应向活跃用户广播 "Compressing context…" 类状态消息，避免噪声和误操作
  - 与 [#6084](https://github.com/HKUDS/nanobot/issues/6084)（Slack 双消息问题）形成 **同类痛点聚类**，建议维护者统一处理

- 🔥 **[#5274](https://github.com/HKUDS/nanobot/issues/5274)** — *Matrix: messages should reply using Matrix reply feature*（whisperity，1 评论，**今日关闭**）
  - 长期讨论后被关闭，暗示可能已通过其他渠道实现，或转为内部 backlog

**分析**：今日的社区焦点集中在 **"自动化行为的可见性"** 与 **"多渠道语义保真"** 两个维度。前者关乎噪声控制，后者关乎平台原生交互的尊重。

---

## 5. Bug 与稳定性

按严重程度排列：

| 严重等级 | Issue | 描述 | 修复状态 |
|---|---|---|---|
| 🔴 **P0（功能完全不可用）** | [#6085](https://github.com/HKUDS/nanobot/issues/6085) | 开启 DeepSeek websearch 后所有渠道的 LLM 调用均报错：`tools[23].type: unknown variant 'web_search'` | ✅ **已有修复 PR** [#6086](https://github.com/HKUDS/nanobot/pull/6086)（drakeo338），在 `_merge_chat_extra_body` 中过滤 Responses-only 的 web_search 条目 |
| 🟠 **P1（用户体验降级）** | [#6084](https://github.com/HKUDS/nanobot/issues/6084) | Slack 渠道 Socket Mode 下，每次压缩产生两条永久消息："Compressing context…" + "Context compacted." | ❌ 暂无修复 PR，**建议与 #6029 一并解决**（增加 `showCompactionNotices` 配置） |
| 🟡 **P2（视觉/可访问性）** | [#6088](https://github.com/HKUDS/nanobot/issues/6088) | WebUI 暗色模式下 Delete 按钮对比度低，红色背景 `--destructive: 0 62.8% 30.6%` 在深色背景上几乎不可读 | ❌ 暂无 PR，属于无障碍合规风险 |
| ⚪ **P3（长尾渠道）** | #5274（已关闭） | Matrix 不使用平台原生 reply 机制 | ✅ 已关闭 |

**总结**：当前阻塞性 Bug（DeepSeek websearch）从报告到修复 PR 仅耗时 1 天，**响应链路健康**。

---

## 6. 功能请求与路线图信号

| 提案 | 关联 PR | 预计纳入概率 |
|---|---|---|
| 静默上下文压缩 / 可关闭广播（#6029） | 无 | 🟢 高 — 与 Slack 同类问题（#6084）叠加，且实现成本低（新增开关即可） |
| WebUI 本地受信扩展点 #6032 | [#6032](https://github.com/HKUDS/nanobot/pull/6032) | 🟡 中 — 标签含 `security` 和 `conflict`，合并前需设计评审 |
| 新 Provider：Opper（#5845） | [#5845](https://github.com/HKUDS/nanobot/pull/5845) | 🟡 中 — 仿 Eden AI / OrcaRouter gateway 模板实现，技术风险低，但需主理人确认是否合入官方 registry |
| Heartbeat 评估器模型可配置（#6083） | [#6083](https://github.com/HKUDS/nanobot/pull/6083) | 🟢 高 — 解决不同模型成本/能力差异，符合既有的 `modelPresets` 设计哲学 |
| WebUI 层级分隔符重构（#6087） | [#6087](https://github.com/HKUDS/nanobot/pull/6087) | 🟢 高 — 纯 UI 重构，无破坏性 |

**路线图信号**：下一版本大概率将围绕 **"上下文压缩行为可配置"** 与 **"WebUI 体验精细化"** 双线推进。

---

## 7. 用户反馈摘要

从 Issues 评论与摘要中提炼的真实痛点：

- 💬 **自动化噪声污染**（npike, ccaryotakis）：后台 idle/dream 循环产生的前台消息被视为"打扰"，用户希望 **默认安静、可按需开启调试可见性**。
- 💬 **平台原生交互缺失**（whisperity）：Matrix 不使用 reply 特性、Slack 压缩消息分裂为两条，用户期待 **遵守各 IM 平台的语义规范**，而非"通用回退"。
- 💬 **诊断能力不足**（chengyongru PR #6080 的动机）：不同源码版本在用户视角"看起来一致"，缺少 commit hash，**Bug 反馈缺乏环境上下文**，现已通过 #6080 部分缓解。
- 💬 **WebUI 无障碍合规**（zshanpatel）：暗色模式下破坏性操作按钮对比度不足，影响 **WCAG AA 合规** 与夜间使用场景。
- ✅ **正面反馈信号**：DeepSeek Bug 从报告到修复极快（1 天），表明维护者对 Provider 兼容性问题保持敏感。

---

## 8. 待处理积压

提醒维护者关注的长期未响应条目：

| 编号 | 类型 | 创建日期 | 等待天数 | 状态 |
|---|---|---|---|---|
| [#5845](https://github.com/HKUDS/nanobot/pull/5845) | PR — Add Opper as built-in provider | 2026-09-21 | **16 天** | OPEN，标签 `new-provider`，等待主理人确认 gateway 准入策略 |
| [#6032](https://github.com/HKUDS/nanobot/pull/6032) | PR — WebUI 本地扩展点 | 2026-10-04 | 3 天 | OPEN，含 `conflict` 标记，需要 rebase 与安全评审 |
| [#6029](https://github.com/HKUDS/nanobot/issues/6029) | Issue — 静默压缩 | 2026-10-04 | 3 天 | OPEN，已有 2 条评论但无 PR 跟进，**建议在 #6084 集中处理时一并回复** |

⚠️ **特别提示**：[#1420](https://github.com/HKUDS/nanobot/pull/1420)（DingTalk sender name）虽已关闭，但提交日期为 2026-03-02，等待时长约 7 个月才合并，**长尾渠道类 PR 的审阅节奏**值得复盘改进。

---

## 附录：项目健康度仪表盘

| 维度 | 评分 | 说明 |
|---|---|---|
| 维护响应速度 | 🟢 优秀 | P0 Bug 当日闭环（#6085 → #6086） |
| 合并吞吐 | 🟡 一般 | 10 个 PR 中仅 3 个关闭 |
| 版本节奏 | 🟡 待观察 | 今日无新版本发布，需关注 0.3.5 之后是否进入 0.3.6 或 0.4.0 周期 |
| 社区活跃度 | 🟢 良好 | 4 个新 Issue 覆盖功能、UI、Provider、渠道，话题多元 |
| 无障碍/可访问性 | 🔴 不足 | 暗色模式对比度问题（#6088）尚无修复计划 |

---

*报告基于公开 GitHub 数据自动生成。*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目日报
**日期：2026-10-07**

---

## 1. 今日速览

Hermes Agent 仓库今日呈现典型的"高活跃度、高积压"状态：过去 24 小时内共有 50 条 Issues 与 50 条 PRs 更新，新开/活跃 Issues 45 条、已关闭 5 条，PRs 全部处于待合并状态（0 合并/0 关闭），且无新版本发布。社区讨论密度集中在网关（gateway）、桌面端（desktop）与更新流程（install-update）三大主题，尤其是**跨网关 Bot 协作**与**更新后插件/环境破损**两条主线最受关注。整体健康度评估：**中等**——开发节奏良好，但 PR 合并速率跟不上 Issue 流入，维护者审阅压力较大。

---

## 2. 版本发布

今日无新版本发布。

---

## 3. 项目进展

今日**无 PR 合并或关闭**，但有 5 条 Issues 已关闭，反映出维护者主要精力仍在"清旧账"阶段：

- **#88994**（CLOSED，5 评论）：修复 SSH 远程 profile 当本地 profile 名 ≠ 远程 `remoteProfile` 时断连的回归问题。
- **#49769**（CLOSED，3 评论）：可恢复的 HTTP 402（"can only afford N tokens"）被误判为终态计费，现已修复。
- **#133249**（CLOSED，2 评论）：Windows 多路复用主机网关创建 profile 时死锁（watchdog exit 75）。
- **#132034**（CLOSED，2 评论）：Desktop SSH 重连风暴导致远程 `hermes serve --isolated` 后端泄漏并 OOM（5.9 GB VPS 案例）。
- 另有 1 条关闭未在 Top 30 中展示。

**项目推进评估：**净进展有限。关闭的 Issues 多为已被 PR 替换的"孤儿工单"，实际推进需等待大批已就绪 PR 的合并。

---

## 4. 社区热点

### 4.1 🏆 头号焦点：跨网关 Bot 协作
- **#97681**「Let Bots collaborate across gateways」—— 评论 40 条，👍 4
  - 作者：dokterdok | 创建 2026-08-29
  - [链接](https://github.com/NousResearch/hermes-agent/issues/97681)
  - 核心诉求：让各用户的个人 Bot 能够在"不放弃控制权"的前提下跨机器、跨用户协作。这是一篇**奠基性 issue**，为后续"跨主人协作"铺路，社区反馈强烈，被认为是项目愿景级别的讨论。

### 4.2 🔥 更新与插件生态连环爆
- **#125437**「Pain cluster: a failed update leaves a half-applied install」—— 评论 10 条，👍 1（Pain miner 提炼）
  - [链接](https://github.com/NousResearch/hermes-agent/issues/125437)
  - 一周内 15 条 Discord 求助 + 5 种失败机制，每次修复都是"手抄配方"。说明**更新体验已成为头号用户痛点**。
- **#123926**「Plugins silently dropped at boot」—— 评论 18 条，👍 0
  - [链接](https://github.com/NousResearch/hermes-agent/issues/123926)
  - `_evict_modules` 在 `sys.modules` 迭代中修改字典，导致随机插件启动静默失败。
- **#132817**「Pain cluster: one transient 429 benches a credential for days」—— 评论 3 条，👍 2
  - [链接](https://github.com/NousResearch/hermes-agent/issues/132817)
  - 一周 13 起报告；与 #119163（凭据冷却逻辑绕过）形成同类问题簇。

### 4.3 长期诉求：工具粒度与可视性
- **#31375**「Per-tool enable/disable in config」—— 评论 6 条，👍 3
  - [链接](https://github.com/NousResearch/hermes-agent/issues/31375)
  - 当前只能按 toolset 粒度开关工具，无法单独启用 `web_search` 而禁用 `web_extract`，影响 MCP 替代场景。

---

## 5. Bug 与稳定性

### 🚨 P1 高危（生产环境可见）
| Issue | 标题 | 平台 | 是否有 Fix PR |
|---|---|---|---|
| [#125437](https://github.com/NousResearch/hermes-agent/issues/125437) | 更新失败导致半装状态 + 无恢复路径 | Windows/Desktop | ❌ 暂无 |
| [#133249](https://github.com/NousResearch/hermes-agent/issues/133249)（已 CLOSED） | Windows 网关创建 profile 死锁 | Windows | ✅ 已修 |
| [#132034](https://github.com/NousResearch/hermes-agent/issues/132034)（已 CLOSED） | SSH 重连泄漏 `serve --isolated` 致 OOM | SSH/Desktop | ✅ 已修 |

### ⚠️ P2 中危
| Issue | 标题 | 组件 | 是否有 Fix PR |
|---|---|---|---|
| [#119163](https://github.com/NousResearch/hermes-agent/issues/119163) | 订阅期 429 的绝对重置时间绕过冷却 | auth/agent | 🟡 [#119652](https://github.com/NousResearch/hermes-agent/pull/119652) Open，待决策 |
| [#88994](https://github.com/NousResearch/hermes-agent/issues/88994)（已 CLOSED） | SSH profile 名不匹配回归 | Desktop/SSH | ✅ |
| [#84672](https://github.com/NousResearch/hermes-agent/issues/84672) | 内容扫描器误判安全文档 | cron/skills | ❌ 暂无 |
| [#109749](https://github.com/NousResearch/hermes-agent/issues/109749) | Bot-Chat DM 同步代理永不解析（100% CPU） | agent/delegate | ❌ 暂无 |
| [#95074](https://github.com/NousResearch/hermes-agent/issues/95074) | `message_agent` 双重回复路径 | tools/desktop | ❌ 暂无 |
| [#134115](https://github.com/NousResearch/hermes-agent/issues/134115) | 更新后 `solstice` 插件缺 httpx | cli/tui | 🟡 [#134107](https://github.com/NousResearch/hermes-agent/issues/134107) 关联 |
| [#133992](https://github.com/NousResearch/hermes-agent/issues/133992) | macOS Desktop 更新握手失败 | cli/desktop | ❌ 暂无 |
| [#124451](https://github.com/NousResearch/hermes-agent/issues/124451) | MCP 结果双重送达（自 #116693） | tools/mcp | ❌ 暂无 |
| [#113294](https://github.com/NousResearch/hermes-agent/issues/113294) | macOS 更新后 'No module named encodings' | desktop | ❌ 暂无 |
| [#132876](https://github.com/NousResearch/hermes-agent/issues/132876) | computer_use 发送 element_index 给严格 CUA | tools | ❌ 暂无 |
| [#134257](https://github.com/NousResearch/hermes-agent/issues/134257) | `/reasoning --global` 无参数应打开选择器 | gateway/telegram | ❌ 暂无 |
| [#134168](https://github.com/NousResearch/hermes-agent/issues/134168) | Dashboard 启动 typecheck 含 `*.test.tsx` 致 crash loop | dashboard | ❌ 暂无 |

### 🟡 P3 低危（多为体验/一致性）
- [#134107](https://github.com/NousResearch/hermes-agent/issues/134107) `solstice` 插件在精简运行时 import 报错泄露到 TUI
- [#107068](https://github.com/NousResearch/hermes-agent/issues/107068) 单查询 clarify 自动决定可能自授权
- [#133946](https://github.com/NousResearch/hermes-agent/issues/133946) pre_tool_call 升级未到达审批 transport
- [#132167](https://github.com/NousResearch/hermes-agent/issues/132167) home_io_guard 自绊测试
- [#79836](https://github.com/NousResearch/hermes-agent/issues/79836) Desktop 侧边栏缺 raft 等平台图标

**稳定性诊断：** Bug 报告集中在 **更新流程**（5+ 条）和 **插件/凭据生命周期**（4+ 条），呈明显"集群"特征——单一根因被多条 issue 反复报告但缺乏合并修复。

---

## 6. 功能请求与路线图信号

### 🚦 高优先级（已有对应 PR 或讨论密度高）
- **#97681** 跨网关 Bot 协作（评论 40）→ **路线图旗舰**，奠定"个人 Bot 网络"愿景。
- **#134209** `feat(onboarding): first-run setup chat`（PR，Open）→ Desktop 新用户体验，预计并入下一版本。
- **#130234** `feat(desktop): configurable swimlanes on the Kanban board` → Kanban 板可配置泳道，提升任务管理。
- **#125904** `feat(desktop): theme typography knobs + Chat Text Size control` → 主题排版定制。

### 🧭 中优先级（用户体验提升）
- **#31375** Per-tool enable/disable → 工具细粒度开关（👍 3，社区高认可）。
- **#134275** `feat(cli): doctor/sessions health check for state.db` → 状态库健康检查（快照 + FTS 完整性）。
- **#134251** 允许 execution middleware 拒绝调用 → 防止 fail-open 绕过花费保护。
- **#87212** Desktop 显示 agent 间消息发送者头像。
- **#91781** Bot Mode 按触发源而非受众对回复分组。
- **#101124** Desktop 中 `message_agent` 不再伪装为后台进程。

### 📌 推断路线图
1. **跨代理协作基础设施**（#97681）
2. **更新流程鲁棒性**（多个 pain cluster）
3. **凭据/认证可观测性**（#132817、#119163、#118806）
4. **Desktop 一致性打磨**（多条 UI/UX 修复）

---

## 7. 用户反馈摘要

### 😣 主要痛点
- **更新即噩梦**：用户在 Discord 求助"每个 fix 都是手抄配方"，表达对失败后无恢复路径的强烈不满（#125437、#134115、#134107、#133992、#113294）。
- **凭据冷却"看不见"**：429 后凭据被搁置数小时至数天，无剩余冷却时间提示，无 `hermes auth reset` 入口提示（#132817、#119163）。
- **TUI/终端被警告刷屏**：`solstice` 插件错误每启动一次重复 6 次，打乱输出布局（#134107）。
- **Bot 协作消息被埋**：发送者头像缺失、回复被归入错误线程，多 agent 对话难以追踪（#87212、#91781、#101124、#95074）。

### 😊 正面信号
- 跨网关 Bot 协作提案（#97681）获 4 个 👍 与 40 条评论，体现**核心用户对未来形态的期待**。
- 工具细粒度控制（#31375）👍 3，说明进阶用户愿意深入配置。
- 已有 Pain-miner 工单机制（#125437、#132817）说明维护者建立了**结构化的用户反馈收集通道**。

### 🎯 使用场景
- 个人/团队 Bot 跨机器协同（#97681）
- 通过 MCP 替代内置 web 工具（#31375）
- Windows/macOS Desktop 用户大规模使用（#134115、#133992、#113294）
- 多账号 Codex/OpenAI 池（#134310 PR 直接回应此场景）

---

## 8. 待处理积压

### ⚠️ 维护者请关注

| 编号 | 标题 | 类别 | 创建距今 | 状态 |
|---|---|---|---|---|
| [#97681](https://github.com/NousResearch/hermes-agent/issues/97681) | Let Bots collaborate across gateways | 愿景 | ~40 天 | Open，旗舰议题，需方向性决策 |
| [#31375](https://github.com/NousResearch/hermes-agent/issues/31375) | Per-tool enable/disable in config | 功能 | ~136 天 | Open，3 👍 |
| [#84672](https://github.com/NousResearch/hermes-agent/issues/84672) | 内容扫描器误判安全文档 | Bug (P2) | ~56 天 | Open，无 Fix |
| [#119652](https://github.com/NousResearch/hermes-agent/pull/119652) | 凭据冷却逻辑绕过（Fix PR） | Bug (P2) | ~14 天 | **Open，需维护者决策**（intent 模糊） |
| [#109749](https://github.com/NousResearch/hermes-agent/issues/109749) | Bot-Chat DM 同步代理永不解析 100% CPU | Bug (P2) | ~24 天 | Open，🔴 影响生产 |
| [#95074](https://github.com/NousResearch/hermes-agent/issues/95074) | `message_agent` 双重回复路径 | Bug (P2) | ~43 天 | Open，🔴 用户可见错误 |
| [#87212](https://github.com/NousResearch/hermes-agent/issues/87212) | Desktop 显示 agent 头像 | 功能 | ~53 天 | Open |
| [#101124](https://github.com/NousResearch/hermes-agent/issues/101124) | `message_agent` 不应显示为后台终端 | 功能 (P3) | ~35 天 | Open |
| [#79836](https://github.com/NousResearch/hermes-agent/issues/79836) | Desktop 侧栏缺 raft 等图标 | Bug (P3) | ~62 天 | Open |
| [#91781](https://github.com/NousResearch/hermes-agent/issues/91781) | Bot Mode 按触发源分组 | 功能 (P3) | ~47 天 | Open |

### 🧊 PR 积压警示
今日 50 条 PR 全部为 Open 状态，**0 合并/0 关闭**。其中包括：
- [#134307](https://github.com/NousResearch/hermes-agent/pull/134307) Windows gateway 监督限制（fresh-main delta，supersede #115163）
- [#134310](https://github.com/NousResearch/hermes-agent/pull/134310) Codex 429 凭据轮换
- [#89008](https://github.com/NousResearch/hermes-agent/pull/89008) Gateway 更新失败快速失败
- [#89009](https://github.com/NousResearch/hermes-agent/pull/89009) 在独立 systemd transient unit 启动更新器
- [#92127](https://github.com/NousResearch/hermes-agent/pull/92127) 恢复陈旧 git lock
- [#109599](https://github.com/NousResearch/hermes-agent/pull/109599) 抑制 `**[SILENT]**` 字面送达
- [#110554](https://github.com/NousResearch/hermes-agent/pull/110554) 顺序工具提交防解释器关闭
- [#112553](https://github.com/NousResearch/hermes-agent/pull/112553) / [#112555](https://github.com/NousResearch/hermes-agent/pull/112555) / [#112556](https://github.com/NousResearch/hermes-agent/pull/112556) 文档补全（update/sessions/skills 子命令）

**风险提示：** 多位作者（尤其 33hodl）累积大量待审 PR，建议维护者按主题批量评审，避免贡献者疲劳流失。

---

## 📊 数据仪表盘

| 指标 | 数值 |
|---|---|
| 过去 24h Issues 更新 | 50（45 新/活，5 关） |
| 过去 24h PRs 更新 | 50（**50 待合并**，0 合/关） |
| 新版本 | 0 |
| 最高评论 Issue | #97681（40 条） |
| P1/P2 Bug 集中领域 | 更新流程、凭据冷却、SSH/Desktop |
| 健康度 | 🟡 中等（活跃度高、合并压力大） |

---

*报告基于 GitHub 公开数据自动生成。数据反映 2026-10-07 当日快照。*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目日报 · 2026-10-07

## 1. 今日速览

PicoClaw 主仓库在今日（2026-10-07）呈现出明显的"维护停滞"信号：过去 24 小时 Issues 仅 5 条更新、PR 高达 70 条更新但**待合并数持续为 0**，且全部 PR 均已关闭——这是非常态的活动曲线，提示仓库可能发生了一次集中清理动作。今日最显著的事件是社区用户 **afjcjsbx** 再次提交"活跃 Fork"通告（Issue #3417，与 #3398 内容雷同），明确指出主仓库"appears to be unmaintained"。整体活跃度：**低迷 + 社区分叉信号增强**。

---

## 2. 版本发布

**今日无新版本发布。** 最近一次可识别的版本相关提交集中在 PR #2818（Go 1.25.10 stdlib 漏洞修复）与 PR #3248（Go 1.25.12 stdlib 漏洞修复），但两者均已关闭，未合并入主线。

---

## 3. 项目进展

今日所有展示的 PR 状态均为 **CLOSED**，且**无任何 PR 进入合并队列**。从内容看，PR 仍覆盖了若干实质性改进方向，但全部"被关闭"的状态意味着这些工作**未对主线代码库产生推进**：

| 类别 | 代表 PR | 价值 |
|---|---|---|
| Agent 协作能力 | [#2937 feat/agent collaboration](https://github.com/sipeed/picoclaw/pull/2937) | 引入 Agent Collaboration Bus、邮箱、协作线程 |
| LLM 可靠性 | [#2983 fix: retry empty llm response](https://github.com/sipeed/picoclaw/pull/2983)、[#2768 retry transient LLM HTTP errors](https://github.com/sipeed/picoclaw/pull/2768) | 提升 provider 容错 |
| 工具链 | [#2857 show unified diff for edit_file](https://github.com/sipeed/picoclaw/pull/2857) | 增强文件编辑可观测性 |
| 运维/治理 | [#3418 ci: enforce shared devops gates](https://github.com/sipeed/picoclaw/pull/3418) | 今日最新 PR（hawkli-1994），建立 DevOps 规范 |
| MCP 集成 | [#2811 streamable HTTP alias](https://github.com/sipeed/picoclaw/pull/2811)、[#3048 reject unknown pre-positional flags](https://github.com/sipeed/picoclaw/pull/3048) | MCP 传输层增强 |
| 平台适配 | [#3008 larksuite oapi-sdk-go v3.9.4](https://github.com/sipeed/picoclaw/pull/3008) | 飞书 SDK 升级适配 |
| 安全 | [#3248 Go 1.25.12](https://github.com/sipeed/picoclaw/pull/3248)、[#2818 Go 1.25.10](https://github.com/sipeed/picoclaw/pull/2818) | 标准库漏洞修复（均已关闭、未合并） |
| 文档/技能 | [#2994](https://github.com/sipeed/picoclaw/pull/2994)、[#2993](https://github.com/sipeed/picoclaw/pull/2993) picoclaw-agent skill | 自描述 Agent 技能文档 |

**项目推进评估：今日主线代码净进展 ≈ 0**。所有 PR 关闭但未合并，对用户而言相当于"被搁置"。考虑到 Issue #440（替换硬迭代限制）等积压需求与多个安全修复 PR 均未落地，**项目主线处于事实停滞状态**。

---

## 4. 社区热点

今日热度最高的议题是**主仓库维护状态本身**，而非具体技术话题：

- 🔥 **Issue #3417** – [afjcjsbx 再次通告活跃 Fork](https://github.com/sipeed/picoclaw/issues/3417)（创建于 2026-10-06，今日更新）
- 🔍 **Issue #3398** – [afjcjsbx 首次通告活跃 Fork](https://github.com/sipeed/picoclaw/issues/3398)（已 CLOSED，可能是被仓库维护方关闭）
- 💬 **Issue #440** – [Replace hard iteration limit with context-window bounding](https://github.com/sipeed/picoclaw/issues/440)（8 条评论，最长讨论链）

**诉求背后的信号**：
1. 社区对**主仓库缺乏维护响应**感到不安，fork 作者需要反复宣告其分支为"active maintenance"以引导用户迁移。
2. Issue #440 显示有用户在 2026-02 即提出关键体验问题（"I've completed processing but have no response to give"），**至今 8 个月无实质推进**，是社区耐心消耗的典型案例。

---

## 5. Bug 与稳定性

按严重程度排列：

| 级别 | Issue / PR | 严重程度说明 | 是否有 Fix PR |
|---|---|---|---|
| 🔴 高 | [#3407 Web UI: ghost session](https://github.com/sipeed/picoclaw/issues/3407) | 用户在 Web UI 中创建会话后，会话在模型思考过程中从列表消失，无法找回——**直接的数据可见性 / 可恢复性 Bug | 今日未见对应修复 PR |
| 🟡 中 | [#3248 Go 1.25.12 stdlib CVE](https://github.com/sipeed/picoclaw/pull/3248) | `crypto/tls` 与 `os` 包存在已修复漏洞 | 有 PR，但已关闭未合并 |
| 🟡 中 | [#2818 Go 1.25.10 stdlib CVE](https://github.com/sipeed/picoclaw/pull/2818) | `net`、`net/http`、`httputil` 漏洞 | 有 PR，已关闭未合并 |
| 🟢 低 | [#2689 cron duplicate messages](https://github.com/sipeed/picoclaw/pull/2689)、[#2983 empty LLM response](https://github.com/sipeed/picoclaw/pull/2983)、[#2768 transient LLM HTTP errors](https://github.com/sipeed/picoclaw/pull/2768) | 流程性 / 重试类问题，影响体验但不致命 | 均有 PR 提案，未合并 |

**结论**：多个 Bug 已具备成熟修复方案，但因主仓库维护停滞，全部处于"已提案、已搁置"状态，安全类 CVE 修复尤其值得关注。

---

## 6. 功能请求与路线图信号

| 需求 | 来源 | 已存在 PR | 纳入主线可能性 |
|---|---|---|---|
| 替换 `max_tool_iterations` 硬限制为上下文窗口 + 循环检测 | [Issue #440](https://github.com/sipeed/picoclaw/issues/440) | 未见对应 PR | 低（主仓库停滞） |
| Web UI 工作指示更清晰、Manual/Channel 会话分离、Session 列表支持归档 | [Issue #3406](https://github.com/sipeed/picoclaw/issues/3406) | 未见 | 低 |
| 多 Agent 发现 prompt（Layer 1） | 隐含于 [#2158](https://github.com/sipeed/picoclaw/pull/2158) | ✅ 已有 | 中（功能已完成但 PR 关闭） |
| Agent Collaboration Bus（首类内部协作总线） | [#2937](https://github.com/sipeed/picoclaw/pull/2937) | ✅ 已有 | 中 |
| 入站图像多级压缩 | [#2964](https://github.com/sipeed/picoclaw/pull/2964) | ✅ 已有 | 中 |
| `/stop` 中断指令 | [#2762](https://github.com/sipeed/picoclaw/pull/2762) | ✅ 已有 | 中 |

**信号**：大量高质量功能 PR 已就绪，但能否落地取决于主仓库是否恢复活跃维护，否则这些能力可能只会出现在 [afjcjsbx 的 fork](https://github.com/afjcjsbx/picoclaw) 中。

---

## 7. 用户反馈摘要

从公开 Issue 评论提炼：

- **😤 痛点 1：Agent 任务在交付前被截断**（[Issue #440](https://github.com/sipeed/picoclaw/issues/440)）  
  > "I've completed processing but have no response to give"  
  用户认为 `max_tool_iterations: 20` 对复杂任务过紧。

- **😤 痛点 2：Web UI "幽灵会话"**（[Issue #3407](https://github.com/sipeed/picoclaw/issues/3407)）  
  会话在思考过程中从列表消失且无法恢复，造成重要上下文丢失。

- **😤 痛点 3：UI 反馈不明确**（[Issue #3406](https://github.com/sipeed/picoclaw/issues/3406)）  
  用户不知道"模型是否仍在思考"；manual 会话与 channel 会话混合、列表缺乏归档能力，长期使用混乱。

- **😐 痛点 4：仓库无维护响应**（[Issue #3398](https://github.com/sipeed/picoclaw/issues/3398)、[#3417](https://github.com/sipeed/picoclaw/issues/3417)）  
  社区主动 fork 并反复公告，反映用户对主仓库响应节奏的失望。

- **👍 满意点**：暂无活跃正向反馈流入（评论数普遍偏低），社区注意力集中在问题暴露而非称赞。

---

## 8. 待处理积压

以下条目需要维护者优先关注：

| 类型 | 编号 | 状态 | 积压时长 | 链接 |
|---|---|---|---|---|
| Issue | [#440](https://github.com/sipeed/picoclaw/issues/440) | OPEN / stale | ≈ 8 个月 | [查看](https://github.com/sipeed/picoclaw/issues/440) |
| Issue | [#3407](https://github.com/sipeed/picoclaw/issues/3407) | OPEN / stale | 8 天 | [查看](https://github.com/sipeed/picoclaw/issues/3407) |
| Issue | [#3406](https://github.com/sipeed/picoclaw/issues/3406) | OPEN / stale | 8 天 | [查看](https://github.com/sipeed/picoclaw/issues/3406) |
| 安全 PR | [#3248](https://github.com/sipeed/picoclaw/pull/3248) | CLOSED（未合并） | ≈ 3 个月 | [查看](https://github.com/sipeed/picoclaw/pull/3248) |
| 安全 PR | [#2818](https://github.com/sipeed/picoclaw/pull/2818) | CLOSED（未合并） | ≈ 5 个月 | [查看](https://github.com/sipeed/picoclaw/pull/2818) |
| 功能 PR | [#2937 Agent Collab Bus](https://github.com/sipeed/picoclaw/pull/2937) | CLOSED | ≈ 4.5 个月 | [查看](https://github.com/sipeed/picoclaw/pull/2937) |

**特别提醒**：两个 Go 标准库安全修复 PR 长期未合并，下游使用者若直接基于主仓库构建将持续暴露在已披露漏洞下，建议维护者即便不接收新功能，也应优先合并安全类补丁。

---

### 📊 项目健康度评估（综合）

| 维度 | 评分 | 说明 |
|---|---|---|
| 代码活跃度 | ⭐☆☆☆☆ | 0 个待合并 PR，70 个 PR 今日被关闭，主线无实质推进 |
| 社区响应 | ⭐⭐☆☆☆ | 社区 fork 反复公告，提示主仓库响应严重不足 |
| 安全态势 | ⭐☆☆☆☆ | 已知 CVE 修复未合并 |
| 需求储备 | ⭐⭐⭐☆☆ | 大量高质量 PR 与 Issue 已就绪，具备快速重启条件 |
| 用户信心 | ⭐⭐☆☆☆ | fork 公告频繁出现，用户正在流失到 afjcjsbx 分支 |

**结论**：PicoClaw 当前处于"代码就绪但治理停滞"的状态。建议：
1. 维护者明确公告仓库状态（活跃 / 移交 / 归档）；
2. 若继续维护，**优先合并安全类 PR（#3248、#2818）**与体验类 Issue（#440、#3407）；
3. 社区用户可短期评估迁移至 [afjcjsbx/picoclaw](https://github.com/afjcjsbx/picoclaw) 以获得持续维护。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报

**日期：2026-10-07** ｜ **仓库：qwibitai/nanoclaw**

---

## 1. 今日速览

NanoClaw 今日呈现**高活跃、强修复导向**的开发态势。24 小时内共有 **16 个 PR 流转**（其中 5 个已合并/关闭、11 个待合并），**3 个 Issue 被更新**（全部仍 OPEN），**无新版本发布**。当日合并密度（5/16 ≈ 31%）属健康区间，主题集中在 **出站消息投递链路（delivery）、Setup/安装脚本、Windows 兼容性** 三大方向——说明项目当前在巩固可靠性边界，而非追求新功能堆叠。维护者 `glifocat`、`jfu1`、`jsboige` 是今日主要贡献者。

---

## 2. 版本发布

**今日无新版本发布。** 当前可见的最新参考版本为社区 Issue #4050 中提及的 `v2026.10.0-rc.2`（commit `d7175d0d`），仍处于 RC 阶段。结合今日大量面向 setup、delivery、agent-runner 的修复合并，预期下一个 `v2026.10.x` 稳定版可能在本周内推出。

---

## 3. 项目进展

今日共 **5 个 PR 已合并/关闭**，项目在「消息投递确定性」与「跨平台安装体验」上取得实质性推进：

| PR | 类型 | 影响 |
|---|---|---|
| [#4051](https://github.com/qwibitai/nanoclaw/pull/4051) | fix(setup) | 解决首次安装后因本地 commit 丢失「升级标记」导致后续重启失败的回归问题，对接 #3997 的 skill apply 流程 |
| [#4041](https://github.com/qwibitai/nanoclaw/pull/4041) | fix(onecli) | 修正 OneCLI 升级指南中回滚步骤指向错误版本（误指旧版本而非 pin 版本）的指引性 bug |
| [#3963](https://github.com/qwibitai/nanoclaw/pull/3963) | fix(update) | 将 update e2e 套件从 `rmSync` 切换为 `unlinkSync` 处理数据符号链接，使 Node 24 早于 24.13.1 的版本能通过 `/update-nanoclaw` 校验 |
| [#2238](https://github.com/qwibitai/nanoclaw/pull/2238) | feat(setup) | 新增 macOS 上 **MacPorts** 作为 Homebrew 之外的 Node 与 signal-cli 安装源（贡献者：felipek） |
| [#4048](https://github.com/qwibitai/nanoclaw/pull/4048) | feat(router) | 为群组频道新增 **"new-thread engage" 互动模式**：无需 @ mention 也能响应每个新主题线程首条消息 |

**整体评估**：今日合并 PR 覆盖安装层、升级层、CLI 文档层、路由器行为层，**没有破坏性变更**。`#4048` 是本批中唯一的功能性新增，体现了 NanoClaw 在群组机器人场景下持续打磨的策略。

---

## 4. 社区热点

按评论数与影响面综合排序：

- **[Issue #2423](https://github.com/qwibitai/nanoclaw/issues/2423) — Outbound delivery failures are silently swallowed**（创建于 2026-05-12，1 评论）
  - **核心诉求**：当 Telegram API 返回非 2xx、被限流、被内容过滤或载荷超限时，宿主把行标记为 `failed` 但**不向 Agent 回传任何信号**，Agent 已 ack 任务却被悄然丢弃。
  - **热度判断**：尽管只有 1 条评论，但因其创建于 5 月至今 5 个月未解决，叠加今日同时出现 [#4053](https://github.com/qwibitai/nanoclaw/pull/4053)、[#4054](https://github.com/qwibitai/nanoclaw/pull/4054) 两个直接相关的修复 PR，说明维护者已经在「结构性」回应这一问题。**这是当前最具产品影响力的悬而未决痛点。**

- **[Issue #3791](https://github.com/qwibitai/nanoclaw/issues/3791) — Fresh Codex setup requires globally installed host CLI**（创建于 2026-09-13，今日更新，1 评论）
  - 用户在 commit `0399a6df…` 上跑新版 Codex picker 仍要求预装全局宿主 CLI；picker 本身已由 [#3790](https://github.com/qwibitai/nanoclaw/pull/3790) 恢复。
  - **热度判断**：代表用户对「开箱即用体验」的持续反馈，优先级中等。

- **[Issue #4050](https://github.com/qwibitai/nanoclaw/issues/4050) — "Cannot find matching keyid" with older Node corepack**（创建于 2026-10-06，0 评论）
  - 与今日合并的 [#4049](https://github.com/qwibitai/nanoclaw/pull/4049) **直接成对**，本质上属于「同问题一对：先报告、后修复」。

---

## 5. Bug 与稳定性

按严重程度由高到低排列：

### 🔴 高严重度（影响核心交付语义）

1. **[#2423](https://github.com/qwibitai/nanoclaw/issues/2423) — 消息投递失败对 Agent 不可见**（仍 OPEN）
   - **症状**：3 次重试后标记 `failed`，Agent 无感知；用户/Agent 误以为任务完成。
   - **Fix PR 进度**：[#4053](https://github.com/qwibitai/nanoclaw/pull/4053)（投递层记录失败并通知）+ [#4054](https://github.com/qwibitai/nanoclaw/pull/4054)（工具层对无聊天上下文直接拒绝返回成功）**两个 PR 均已提交但未合并**。
   - **风险**：若独立合并任一 PR 将造成另一层仍存在"假成功"，建议配套合并。

2. **[#3570](https://github.com/qwibitai/nanoclaw/pull/3570) — Telegram 因 MarkdownV2 转义符数量为奇数导致整条消息丢失**（修复 PR OPEN）
   - 修复 [#3569](https://github.com/qwibitai/nanoclaw/issues/3569)，最显眼症状是 **OneCLI connect 链接始终无法抵达 Telegram**。
   - **进度**：依赖 `@chat-adapter/telegram` 升级至 4.38.1，截至今日 PR 仍 OPEN。

### 🟡 中严重度（影响安装与启动）

3. **[#4050](https://github.com/qwibitai/nanoclaw/issues/4050) — 旧 Node corepack 导致 setup 在 `pnpm install` 阶段 fatal）
   - **Fix PR**：[#4049](https://github.com/qwibitai/nanoclaw/pull/4049) **已今日提交**（OPEN）。
   - 根因清晰：`install-node.sh` 未将 `corepack` 链接入 `~/.local/bin`。

4. **[#3791](https://github.com/qwibitai/nanoclaw/issues/3791) — Codex 新装仍依赖全局宿主 CLI**（OPEN）
   - 暂无直接 fix PR 关联今日活动。

### 🟢 低-中严重度（Windows 平台特殊场景）

6. **[#4045](https://github.com/qwibitai/nanoclaw/pull/4045) — ncl CLI 在 Windows 下因命名管道 `chmod` 失败导致循环重启**
7. **[#4046](https://github.com/qwibitai/nanoclaw/pull/4046) — Docker 探针在 Windows 重启瞬间导致启动熔断器 5–15min 退避**
8. **[#4044](https://github.com/qwibitai/nanoclaw/pull/4044) — `messageIdForAgent` 使用 `:` 在 NTFS 上作为目录名非法**

> 三者均由 `jsboige` 今日提交 OPEN，均为 Windows 服务账户 / NTFS 兼容性长期痛点的局部收敛。

### 🟢 数据层投递可靠性

- **[#4047](https://github.com/qwibitai/nanoclaw/pull/4047) — 出站轮询过程中 SQLITE_READONLY 被误报 fatal**（OPEN）
  - 实际为 `journal_mode=DELETE` 下热日志恢复的瞬时状态，建议吞掉而非视为致命错误。

---

## 6. 功能请求与路线图信号

今日未出现新的用户功能请求 Issue（3 条 Issue 全为 bug 报告）。但从已合并与待合并 PR 中可识别以下路线图信号：

| 方向 | 信号来源 | 预期纳入版本 |
|---|---|---|
| **群组机器人互动模式扩展** | [#4048](https://github.com/qwibitai/nanoclaw/pull/4048) 已合并（new-thread engage） | v2026.10.x |
| **macOS 包管理器扩展** | [#2238](https://github.com/qwibitai/nanoclaw/pull/2238) 已合并（MacPorts 支持） | v2026.10.x |
| **Telegram MarkdownV2 鲁棒性** | [#3570](https://github.com/qwibitai/nanoclaw/pull/3570) 待合并 | 取决于上游 `@chat-adapter/telegram` 发布节奏 |
| **Windows 服务账户兼容** | [#4045](https://github.com/qwibitai/nanoclaw/pull/4045) 待合并 | 暗示路线图中存在「Windows NSSM 服务部署」正式支持 |
| **OneCLI 升级路径加固** | [#4051](https://github.com/qwibitai/nanoclaw/pull/4051)、[#4052](https://github.com/qwibitai/nanoclaw/pull/4052)、[#4041](https://github.com/qwibitai/nanoclaw/pull/4041) | 与 OneCLI 1.42+ 绑定，将进入 v2026.10.x |

未观察到对 Agent 自主能力、可观测性、记忆系统或多模态输入相关的功能请求——**当前阶段明显是「可靠性沉淀期」**而非能力扩张期。

---

## 7. 用户反馈摘要

由于今日 Issue 评论数普遍较少（0–1 条），可提炼的真实用户痛点有限但指向集中：

- **「Agent 不知道消息丢了」**（[#2423](https://github.com/qwibitai/nanoclaw/issues/2423)）：
  用户 jmortreu 指出在 Telegram 出错、被限流、内容过滤或超大载荷时，Agent 完全失察。这是**「投递语义与执行语义不一致」** 的典型场景，对长跑任务尤其危险。

- **「Fresh setup 仍要求预装全局 CLI」**（[#3791](https://github.com/qwibitai/nanoclaw/issues/3791)）：
  用户 glifocat 反馈在已修复 picker 后，下游链路仍有依赖全局 host CLI 的隐式要求，反映出 **bootstrap 文档与代码不同步**。

- **「Bootstrap 卡在 `pnpm install`」**（[#4050](https://github.com/qwibitai/nanoclaw/issues/4050)）：
  EyalPoly 在 macOS 上从零安装遭遇 `Cannot find matching keyid`，说明对**全新机器开箱体验**仍有尖锐痛点。

> **总体满意度信号**：今日 0 个 Issue 被关闭、0 个 Issue 被标记「已解决」，但维护者主动为 2 个 Issue 提交了配套修复 PR（[#4053](https://github.com/qwibitai/nanoclaw/pull/4053)+[#4054] 对 [#2423]；[#4049](https://github.com/qwibitai/nanoclaw/pull/4049) 对 [#4050]）。这种「报告即修复」的节奏是社区健康度的正向信号。

---

## 8. 待处理积压

按悬置时长与影响面排序：

| 编号 | 标题 | 创建日期 | 已悬置 | 关联进展 |
|---|---|---|---|---|
| [#2423](https://github.com/qwibitai/nanoclaw/issues/2423) | Outbound delivery 沉默失败 | 2026-05-12 | **≈5 个月** | 已有 2 个相关 fix PR（OPEN）但 Issue 未关闭 |
| [#3791](https://github.com/qwibitai/nanoclaw/issues/3791) | Codex fresh setup 缺全局 CLI | 2026-09-13 | ≈24 天 | 无直接 fix PR，今日仅评论更新 |
| [#3918](https://github.com/qwibitai/nanoclaw/pull/3918) | fix(agent-runner): 防止 send_message 漏发/重发 | 2026-09-25 | ≈12 天 | 与 #2423 同样属于 agent-runner 消息语义，PR 仍 OPEN |
| [#3570](https://github.com/qwibitai/nanoclaw/pull/3570) | Telegram MarkdownV2 奇数转义符导致丢消息 | 2026-08-27 | ≈41 天 | 阻塞 OneCLI connect 链接送达，关键路径 |

### 给维护者的提醒

1. **#2423 已悬置 5 个月**，建议尽快关联 [#4053](https://github.com/qwibitai/nanoclaw/pull/4053) + [#4054](https://github.com/qwibitai/nanoclaw/pull/4054) 并推进 review；这是当前社区对「投递可观测性」最强烈的诉求。
2. **#3918（agent-runner 消息不丢不重）与 #3570（Telegram MarkdownV2）** 都已 OPEN 超 10 天，分别影响**消息语义正确性**与**关键交付链路**，建议优先分配 reviewer。
3. **Windows 兼容 PR 集群（#4044/#4045/#4046）** 由同一作者 (`jsboige`) 提交，相互独立，建议作为一组在 RC 周期合并，避免反复 backport。

---

**报告生成时间**：2026-10-07 ｜ **数据来源**：GitHub REST API ｜ **下次报告**：2026-10-08

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目日报

**报告日期**：2026-10-07
**数据来源**：GitHub (github.com/nullclaw/nullclaw)
**分析范围**：过去 24 小时动态

---

## 1. 今日速览

NullClaw 在过去 24 小时内呈现"**密集合并、多线推进**"的开发节奏：共 14 个 PR 发生状态变更，其中 4 个已合并/关闭，10 个仍待合并；无新 Issue、无新版本发布。所有活跃 PR 均来自单一维护者 `vernonstinebaker`，显示项目当前高度依赖核心作者的集中驱动。今日最显著的进展是 `#987`（Agent 循环卫生）经过评审后被拆分为三个聚焦修复（`#1044`、`#1045`、`#1046`）并同日全部合并，标志着长期工具密集型场景下的稳定性与并发安全问题得到系统性收口。整体活跃度**中偏高**，但社区参与度（评论/反应数均为 0）信号极弱，呈现典型的"维护者主导"治理模式。

---

## 2. 版本发布

本周期内**无新版本发布**。`local_loop`、记忆子系统、HTTP 传输、A2A 安全等多项底层修复与功能增强虽已落地，但尚未整合为可发布的版本标签。建议关注者在下一 release 前优先验证以下合并项在自身部署中的兼容表现。

---

## 3. 项目进展

今日合并/关闭的 PR 共 4 个，分为两条主线：

### 🔧 主线一：Agent 循环卫生（#987 的拆分落地）
`#987 feat(agent): loop hygiene for long local tool-heavy runs` 的评审结论落地为三个独立 fix，全部已合并：

- **[#1044](https://github.com/nullclaw/nullclaw/pull/1044) — `local_loop.enabled` 真实生效**（CLOSED）
  - 修复了一个影响所有用户的语义缺陷：`local_loop.enabled` 此前并未真正 gate 该功能，只是在两个上限之间二选一，导致压缩、`recall_limit` 等行为实际为默认开启。
- **[#1045](https://github.com/nullclaw/nullclaw/pull/1045) — 并行工具工作线程的退出路径安全**（CLOSED）
  - 修复并发与生命周期缺陷：解决 join 缺失时的 arena 数据竞争，以及 worker 提前退出引发的 use-after-free。三个 PR 已被作者明确说明"必须一起落地"——单独合并任一项都仍会残留缺陷。
- **[#1046](https://github.com/nullclaw/nullclaw/pull/1046) — 边界配置与死栈返回**（CLOSED）
  - 收口 `local_loop` 配置边界，修复 `stackLowerAscii` 将栈缓冲以 slice 形式返回（指向已失效栈帧）的典型 Zig 内存安全陷阱。

### 🧠 主线二：记忆子系统恢复
- **[#1001](https://github.com/nullclaw/nullclaw/pull/1001) — 可配置的自动 recall / `recall_limit` / `max_context_bytes`**（CLOSED）
  - 恢复自原 `#979`（因 head fork 被删除无法 reopen），新增 `memory.auto_recall`（默认 `true`，设为 `false` 时关闭自动注入）、`memory.recall_limit`（默认 `5`）、`memory.max_context_bytes`（默认 16 KiB）三项配置。属于被外部因素打断后的一次性完整恢复提交。

> **整体评估**：今日合并一次性收口了三个并发/生命周期级别的隐患 + 一个用户配置级别的隐性 Bug + 一个记忆子系统缺失的可控性，应被视为项目在 **生产可用性** 维度的一次实质性推进。

---

## 4. 社区热点

> ⚠️ 数据说明：所有 PR 的评论数与 👍 数在抓取中均为 0/未定义，无法从互动维度直接判定热点。以下按 **战略重要性 + 开放时长** 排序作为代理指标。

| 排名 | PR | 主题 | 重要性 | 开放时长 |
|---|---|---|---|---|
| 1 | [#971](https://github.com/nullclaw/nullclaw/pull/971) | 流式响应期间的原生工具调用解耦 | 高（能力层面） | 约 **100 天**（自 2026-06-29） |
| 2 | [#1012](https://github.com/nullclaw/nullclaw/pull/1012) | A2A 按 bearer principal 隔离 task/context | 高（安全层面） | 约 10 天 |
| 3 | [#1019](https://github.com/nullclaw/nullclaw/pull/1019) | curl 传输字节级精确往返测试 | 中（质量层面） | 约 3 天 |
| 4 | [#1005](https://github.com/nullclaw/nullclaw/pull/1005) | 归档分片不进入活跃上下文 | 中（语义质量） | 约 13 天 |
| 5 | [#1008](https://github.com/nullclaw/nullclaw/pull/1008) | 文档索引修复 + 子系统指南 | 中（用户引导） | 约 13 天 |

**背后诉求分析**：
- `#971` 是开放最久的能力型 PR，反映了用户在配置型组织（configurable agents）领域希望"流式输出 + 原生工具调用"能够同时启用，而非被迫回退到 prompt 注入方案；长期滞留可能源于评审标准或对边界条件的反复打磨。
- `#1012` 解决的是一个**多租户安全语义缺失**：在 `/a2a` 端点上，认证身份并未贯穿到 JSON-RPC 层，所有调用者共享 task id 命名空间——这是 Agent 多用户场景下的根本性信任问题。

---

## 5. Bug 与稳定性

按严重程度排序：

| 等级 | 问题 | 状态 | 链接 |
|---|---|---|---|
| 🔴 **严重** | A2A 未按调用方身份隔离 task / context 会话（多租户串扰） | **已有修复 PR 开放中**：[#1012](https://github.com/nullclaw/nullclaw/pull/1012) | [#1012](https://github.com/nullclaw/nullclaw/pull/1012) |
| 🟠 **高** | 并行工具 worker 在异常退出时存在 arena 数据竞争与 use-after-free | **已合并**：[#1045](https://github.com/nullclaw/nullclaw/pull/1045) | [#1045](https://github.com/nullclaw/nullclaw/pull/1045) |
| 🟠 **高** | `stackLowerAscii` 返回指向已死栈帧的 slice | **已合并**：[#1046](https://github.com/nullclaw/nullclaw/pull/1046) | [#1046](https://github.com/nullclaw/nullclaw/pull/1046) |
| 🟡 **中** | `local_loop.enabled` 实际未 gate 行为，影响所有用户 | **已合并**：[#1044](https://github.com/nullclaw/nullclaw/pull/1044) | [#1044](https://github.com/nullclaw/nullclaw/pull/1044) |
| 🟡 **中** | 归档对话分片被错误召回到当前轮上下文 | **已有修复 PR 开放中**：[#1005](https://github.com/nullclaw/nullclaw/pull/1005) | [#1005](https://github.com/nullclaw/nullclaw/pull/1005) |
| 🟢 **低** | `.githooks/pre-push` 在 worktree 环境下无法通过 | **已有修复 PR 开放中**：[#1021](https://github.com/nullclaw/nullclaw/pull/1021)（修复 [#1020](https://github.com/nullclaw/nullclaw/issues/1020)） | [#1021](https://github.com/nullclaw/nullclaw/pull/1021) |

> **回归风险提示**：`#1044 / #1045 / #1046` 三者协同修改了 agent loop 的核心路径，作者明确强调"任一项单独合并都不安全"。建议使用者在下一 release 后重点回归 **长任务、并行工具调用、`local_loop` 启用/禁用切换** 三类场景。

---

## 6. 功能请求与路线图信号

将拉出本周内仍处于 **OPEN** 状态、且具有明确产品形态的 PR 作为下一 release 的可能候选：

| 候选功能 | PR | 推测优先级 | 备注 |
|---|---|---|---|
| 流式响应期间的原生工具调用 | [#971](https://github.com/nullclaw/nullclaw/pull/971) | ★★★ | 开放时间最长，属于能力补全 |
| 记忆自动召回的可控性（已部分通过 #1001 合并） | [#1005](https://github.com/nullclaw/nullclaw/pull/1005) | ★★★ | 解决"模型把当前消息误读为历史"的语义缺陷 |
| 技能目录跟随符号链接 | [#1003](https://github.com/nullclaw/nullclaw/pull/1003) | ★★ | 仓库内同时新增中英文技能页面，是面向用户的功能 |
| 文档索引修复 + MCP / 子代理 / 声音 / 硬件子系统指南 | [#1008](https://github.com/nullclaw/nullclaw/pull/1008) | ★★ | 拉新成本相关 |
| CLAUDE.md 重构为指针文件 | [#1040](https://github.com/nullclaw/nullclaw/pull/1040) | ★ | 取代了已过时的 [#775](https://github.com/nullclaw/nullclaw/pull/775)（Zig 0.15.2 → 0.16.0） |
| 文档中陈旧的规模数据刷新 | [#1039](https://github.com/nullclaw/nullclaw/pull/1039) | ★ | 取代 [#774](https://github.com/nullclaw/nullclaw/pull/774) |
| curl 传输的字节级完整性测试 | [#1019](https://github.com/nullclaw/nullclaw/pull/1019) | ★ | 测试基线建设 |

**路线图信号解读**：
1. **Agent 体验精细化**：从 `#987 → #1044 / #1045 / #1046` 的拆分可见，维护者正在将"长任务下的资源/并发卫生"作为短期最高优先级。
2. **可配置性回归**：`#1001` 明确声称"恢复自 `#979`，因其 head fork 被删除无法 reopen"——这暗示历史上曾出现**配置回归**，社区在意 `auto_recall` / `recall_limit` 等可调参数。
3. **多语言文档**：多处 PR（`#1003`、`#1008`、`#1039`、`#1040`）同时维护中英文内容，方向已稳定。
4. **贡献治理者信息**：多个文档取代旧（supersede）的指向是清晰统一贡献者（如 `@telagod`）——这是正面信号，体现"重写而非 rebase"的质量文化。

---

## 7. 用户反馈摘要

由于本周期 Issues 数量为 0、所有 PR 评论数未定义，本节**反馈数据不足以绘制用户痛点画像**。可观察到的事实信号：

- ✅ 无 #974 已被 #1012 关闭——意味着"A2A 未做调用方隔离"是一类**已被用户/审计方识别**的安全诉求。
- ✅ 文档取代动作密集（`#775 → #1040`、`#774 → #1039`）说明社区对**过时文档与代码版本不一致**有明确不满（Zig 0.15.2 vs 0.16.0 的版本错配险些被合入）。
- ⚠️ `#979` 因 head fork 被删而无法 reopen，最终由 `#1001` 完整重做——暗示历史 PR 管理上曾有流程缺陷，可能影响其他 fork 贡献者。

> 建议维护者：在 README / Contributing 中加入 **PR 替代（supersede）流程说明**，并对长期滞留的开放 PR（尤其 #971）给出 review blocker 的明示。

---

## 8. 待处理积压

| 优先级 | PR | 主题 | 开放天数（截至 2026-10-07） | 行动建议 |
|---|---|---|---|---|
| 🔴 | [#971](https://github.com/nullclaw/nullclaw/pull/971) | 流式期间的原生工具调用 | **~100 天** | 评审阻塞已 3 个月，建议维护者公开说明 review blocker 或拆分为更小评审单元 |
| 🟠 | [#1005](https://github.com/nullclaw/nullclaw/pull/1005) | 归档分片不进入活跃上下文 | ~13 天 | 与 #1001 协同测试后再合并 |
| 🟠 | [#1008](https://github.com/nullclaw/nullclaw/pull/1008) | 文档索引 + 子系统指南 | ~13 天 | 与 #1003 / #1039 / #1040 文档批量合并，减少碎片化 |
| 🟠 | [#1003](https://github.com/nullclaw/nullclaw/pull/1003) | 技能符号链接 + 多语言技能页 | ~13 天 | 同上，文档批量 |
| 🟡 | [#1012](https://github.com/nullclaw/nullclaw/pull/1012) | A2A bearer principal 隔离 | ~10 天 | 安全相关，建议优先 |
| 🟡 | [#1019](https://github.com/nullclaw/nullclaw/pull/1019) | curl 字节级测试 | ~3 天 | 测试基线，建议快速合并 |
| 🟢 | [#1021](https://github.com/nullclaw/nullclaw/pull/1021) | worktree 下 GIT_DIR 清理 | ~3 天 | 维护流程类，影响 CI |
| 🟢 | [#1039](https://github.com/nullclaw/nullclaw/pull/1039) | 文档规模数据刷新 | ~2 天 | 文档批量 |
| 🟢 | [#1040](https://github.com/nullclaw/nullclaw/pull/1040) | CLAUDE.md 指针化 | ~2 天 | 文档批量 |

**核心提醒**：
- **`#971` 已开放约 100 天**，是当前最严重的积压项，且涉及能力层面，建议维护者优先处理（评审/拆分/关闭并迁移至新 PR 三选一）。
- **多个文档类 PR（`#1008` / `#1003` / `#1039` / `#1040`）相互引用**，合并顺序与冲突解决需协调进行，避免分头维护造成新的文档碎片。

---

### 📊 项目健康度总评

| 维度 | 评分 | 说明 |
|---|---|---|
| 代码活跃度 | ⭐⭐⭐⭐ | 14 个 PR 变更、4 个高质量合并，节奏良好 |
| 稳定性修复 | ⭐⭐⭐⭐⭐ | 并发/内存/配置三类隐患同日闭环 |
| 社区参与度 | ⭐ | 评论与反应均为 0/未定义，单一作者驱动明显 |
| 流程规范度 | ⭐⭐⭐ | 存在 head fork 被删导致 PR 不可 reopen 的事件 |
| 文档质量 | ⭐⭐⭐ | 正在批量刷新，多语言覆盖趋势正面 |

**综合判断**：项目处于 **"内部质量收敛期"**，安全与稳定性层面有实质推进，但社区交互信号偏弱、维护者单点风险显著。

---

**链接索引**：
[#971](https://github.com/nullclaw/nullclaw/pull/971) · [#987](https://github.com/nullclaw/nullclaw/pull/987) · [#1001](https://github.com/nullclaw/nullclaw/pull/1001) · [#1003](https://github.com/nullclaw/nullclaw/pull/1003) · [#1005](https://github.com/nullclaw/nullclaw/pull/1005) · [#1008](https://github.com/nullclaw/nullclaw/pull/1008) · [#1012](https://github.com/nullclaw/nullclaw/pull/1012) · [#1019](https://github.com/nullclaw/nullclaw/pull/1019) · [#1021](https://github.com/nullclaw/nullclaw/pull/1021) · [#1039](https://github.com/nullclaw/nullclaw/pull/1039) · [#1040](https://github.com/nullclaw/nullclaw/pull/1040) · [#1044](https://github.com/nullclaw/nullclaw/pull

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报

**报告日期：2026-10-07**
**项目：netease-youdao/LobsterAI**

---

## 1. 今日速览

过去 24 小时的项目动态呈现典型的"维护与清理日"特征：50 条 Issue 全部被关闭（0 新开/0 活跃），9 条 PR 中 6 条关闭、3 条仍开放。绝大多数关闭的 Issue 被标记为 `[stale]`、`[obsolete]` 或 `[duplicate]`，说明本次 Issue 关闭主要由 stale bot 批量清理触发，而非人工解决。代码侧由 `fisherdaddy`（疑似核心维护者）集中提交了 5 条 PR，涵盖 Mac 平台 Computer Use 支持、macOS 路径修复、coork UI 重构、IM 网关重构等多项实质性改进。无新版本发布。整体活跃度中等偏低，但工程方向（macOS 体验、代码瘦身、CI 治理）较为清晰。

---

## 2. 版本发布

无新版本发布。

---

## 3. 项目进展

今日合并/关闭的 6 条 PR 主要由同一位贡献者 `fisherdaddy` 推动，整体推进了以下方向：

| PR | 标题 | 意义 |
|---|---|---|
| [#2807](https://github.com/netease-youdao/LobsterAI/pull/2807) | fix(cowork): report proxy network failures and add screenshot scale | 修复 Computer Use 场景下大体积截图通过本地代理（Clash）上传导致的 502 错误，**显著提升代理环境稳定性** |
| [#2806](https://github.com/netease-youdao/LobsterAI/pull/2806) | feat(cowork): redesign the progress card above the composer | 重构 composer 上方进度卡片 UI，统一图标风格、替换平台原生进度条，**显著提升视觉完成度** |
| [#2805](https://github.com/netease-youdao/LobsterAI/pull/2805) | feat: computer use for Mac | **新增 macOS 平台 Computer Use 能力**，补齐 Win/Mac 全平台自动化支持 |
| [#2804](https://github.com/netease-youdao/LobsterAI/pull/2804) | fix(openclaw): stop symlinked profile paths from skipping plugin repairs | 修复 macOS 上 `/var -> /private/var` 符号链接导致 17 个 Vitest 测试失败及插件修复被跳过的问题 |
| [#2803](https://github.com/netease-youdao/LobsterAI/pull/2803) | fix(ci): limit stale bot to issues labeled needs-info | **关键治理修复**：将 stale bot 范围收窄至 `needs-info` 标签，避免静默关闭用户活跃 Issue |
| [#2802](https://github.com/netease-youdao/LobsterAI/pull/2802) | refactor(im): remove dead legacy NIM direct-SDK gateway | 移除自 2026-03 起已不再使用的旧版 NIM SDK 网关代码，**减少启动开销与潜在安全面** |

**推进评估**：项目在 macOS 体验、工程治理（CI/stale bot）、代码瘦身三个方向均取得实质进展，是一次有质量的"内功修炼"。

---

## 4. 社区热点

按评论数排序的活跃 Issue（注意：所有 Issue 评论数 ≥2 但 👍 均为 0，说明社区以提交反馈为主，缺乏点赞互动）：

- [#831](https://github.com/netease-youdao/LobsterAI/issues/831) — 最新版不支持自定义 Gemini 中转模型（5 条评论）
- [#144](https://github.com/netease-youdao/LobsterAI/issues/144) — Win11 报错用不了（5 条评论）
- [#188](https://github.com/netease-youdao/LobsterAI/issues/188) — skill 默认全开但无法调用（4 条评论）
- [#885](https://github.com/netease-youdao/LobsterAI/issues/885) — 微信链接不可用（3 条评论）
- [#884](https://github.com/netease-youdao/LobsterAI/issues/884) — 账户登录和付费加油包问题（3 条评论）
- [#405](https://github.com/netease-youdao/LobsterAI/issues/405) — 本地 ollama 只能聊天不能执行命令（3 条评论）
- [#366](https://github.com/netease-youdao/LobsterAI/issues/366) — gateway 端口/服务问题（3 条评论）
- [#197](https://github.com/netease-youdao/LobsterAI/issues/197) — 钉钉 IM 配额限制（3 条评论）
- [#52](https://github.com/netease-youdao/LobsterAI/issues/52) — 微信公众号文章无法访问（3 条评论）
- [#417](https://github.com/netease-youdao/LobsterAI/issues/417) — Win11 综合性 BUG 反馈（3 条评论）

**诉求分析**：热点集中在三类问题——①跨平台兼容性（Win11 报错、Mac 安装）；②国产 IM/微信生态对接；③本地模型（Ollama）的工具调用能力。这与"AI 智能体 + 个人助手"品类的用户期待高度一致。

---

## 5. Bug 与稳定性

按严重程度排列：

| 等级 | Issue/PR | 问题 | 当前状态 |
|---|---|---|---|
| 🔴 高 | [#543](https://github.com/netease-youdao/LobsterAI/issues/543) | `openclawMemoryFile.ts` 路径遍历漏洞，可读取任意文件 | 已关闭（[stale]），**无 fix PR**，需关注 |
| 🟠 中 | [#144](https://github.com/netease-youdao/LobsterAI/issues/144) | Win11 启动报错 404 Not found（Claude Agent SDK） | 已关闭（[obsolete]），需复测最新版本 |
| 🟠 中 | [#405](https://github.com/netease-youdao/LobsterAI/issues/405) | 本地 Ollama 仅能聊天，无法执行命令（线上模型正常） | 已关闭，需验证是否仍复现 |
| 🟠 中 | [#188](https://github.com/netease-youdao/LobsterAI/issues/188) | Skill 显示全开但无法调用（疑似依赖 cygpath） | 已关闭（[obsolete]） |
| 🟠 中 | [#366](https://github.com/netease-youdao/LobsterAI/issues/366) | `openclaw gateway status` 在 18789 端口失败 | 已关闭，需复测 |
| 🟡 低 | [#815](https://github.com/netease-youdao/LobsterAI/issues/815) | Win 下生成的 doc 文档无法打开 | 已关闭（[stale, obsolete]），**长期未修复** |
| 🟡 低 | [#898](https://github.com/netease-youdao/LobsterAI/issues/898) | Cherry Studio 更新导致网关断开 | 已关闭（[stale, obsolete]） |
| 🟢 已修 | [#2804](https://github.com/netease-youdao/LobsterAI/pull/2804) | macOS 符号链接导致插件修复失败 | 已通过 PR #2804 修复 |
| 🟢 已修 | [#2807](https://github.com/netease-youdao/LobsterAI/pull/2807) | 代理网络下大截图请求 502 | 已通过 PR #2807 修复 |

**关注重点**：路径遍历漏洞 #543 在 stale 关闭后未给出修复承诺，建议维护者持续跟进。

---

## 6. 功能请求与路线图信号

从近期被关闭的 Issue 中可识别以下明确功能请求：

| 请求 | Issue | 被纳入下一版本的可能性 |
|---|---|---|
| 增加 Codex 登录 | [#29](https://github.com/netease-youdao/LobsterAI/issues/29) | 中（OpenClaw 生态暂无对应 PR） |
| 增加国外 IM（Slack/Telegram 等） | [#417](https://github.com/netease-youdao/LobsterAI/issues/417) | 中（依赖 OpenClaw 插件） |
| 支持自定义 Gemini 中转模型 | [#831](https://github.com/netease-youdao/LobsterAI/issues/831) | 高（属于基础模型兼容问题） |
| Tavily 等 skill 的 API key 安全管理 | [#145](https://github.com/netease-youdao/LobsterAI/issues/145) | 中（用户体验痛点） |
| 节省 tokens 与请求数量 | [#38](https://github.com/netease-youdao/LobsterAI/issues/38) | 低（架构层面） |
| IM 启动新会话（而非延续同一会话） | [#179](https://github.com/netease-youdao/LobsterAI/issues/179) | 中（产品体验） |
| 引擎从 Claude Agent SDK 切换为 OpenClaw 的官方说明 | [#418](https://github.com/netease-youdao/LobsterAI/issues/418) | **需官方主动沟通** |

**信号判断**：今日合并的 PR #2802（清理旧 NIM SDK）、PR #2805（Mac Computer Use）、PR #2806（coork UI 重构）共同指向"LobsterAI + OpenClaw 引擎"为主线方向，与 Issue #418 的用户担忧一致。

---

## 7. 用户反馈摘要

从评论内容提炼的真实用户痛点：

1. **跨平台稳定性焦虑**：Win11 用户集中反馈 404/沙箱/无法执行命令等问题，Mac M1 用户反馈 ARM64 安装后无法打开——基础安装成功率仍待提升。
2. **技能市场"虚假繁荣"**：用户 #417 指出多个技能安装后无法使用、缺少 API Key 配置入口，怀疑官方未充分测试。
3. **本地模型工具调用受限**：多个用户反馈 Ollama（qwen2.5-coder、qwen3、deepseek-r1）只能聊天不能执行命令，而线上模型正常，**揭示本地推理的工具调用链路存在缺陷**。
4. **性能对比落败**：用户 #417 明确表示"LobsterAI 比阿里开源龙虾慢"，提示在响应速度上存在竞争劣势。
5. **安全顾虑**：#561 用户在 LobsterAI 中看到他人飞书对话，引发数据隔离质疑。
6. **文档缺失**：#200 反馈安装失败无明确指引，#578 询问升级与数据保留机制无文档说明。

**积极信号**：所有关闭 Issue 中未观察到严重功能需求被忽视的现象，多为版本迭代后已过时的问题。

---

## 8. 待处理积压

| 类型 | 编号 | 标题 | 创建时间 | 状态 |
|---|---|---|---|---|
| 长期 PR | [#2581](https://github.com/netease-youdao/LobsterAI/pull/2581) | ci: bump actions/stale from 9.1.0 to 11.0.0 | 2026-08-31 | 待合并（36 天） |
| 长期 PR | [#2580](https://github.com/netease-youdao/LobsterAI/pull/2580) | ci: bump actions/cache from 4 to 6 | 2026-08-31 | 待合并（36 天） |
| 长期 PR | [#2579](https://github.com/netease-youdao/LobsterAI/pull/2579) | ci: bump actions/checkout from 4 to 7 | 2026-08-31 | 待合并（36 天） |

**维护者提醒**：3 条 dependabot CI 依赖升级 PR 已搁置超过一个月，结合今日 PR #2803（治理 stale bot）的合并，说明 CI/工程治理是当前的待办重点。建议优先合并以降低供应链风险。

另外，路径遍历漏洞 [#543](https://github.com/netease-youdao/LobsterAI/issues/543) 虽被标记 stale 关闭，但因属高安全风险，建议在下一个版本中单独评估修复状态并向社区公开说明。

---

**报告生成时间**：2026-10-07
**数据范围**：2026-10-06 至 2026-10-07

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

# CoPaw 项目动态日报

**报告日期**：2026-10-07  
**数据范围**：过去 24 小时（基于 GitHub 公开数据）  
**说明**：本期数据中所涉及 Issue/PR 链接均指向 `agentscope-ai/QwenPaw` 仓库（应为 CoPaw 项目的同一 GitHub 仓库或同名衍生项目）。

---

## 1. 今日速览

CoPaw 项目今日活跃度处于**低位**水平。过去 24 小时内仅有 1 条 Issue 活跃更新、2 条 PR 仍处待合并状态，未合并/未关闭任何 PR，也无新版本发布。社区互动有限（Issue 评论数仅 1 条，PR 评论均为 0），但现有未合并 PR 内容质量较高——分别覆盖**控制台启动稳健性**与**自定义 Provider 能力模板**，表明维护者与贡献者仍持续投入。整体而言项目处于**平稳维护期**，无重大功能落地。

---

## 2. 版本发布

本期无新版本发布。  
最近一次发版时间未在本次提供的数据中体现，建议关注 [CoPaw Releases 页面](https://github.com/agentscope-ai/CoPaw/releases) 获取历史版本信息。

---

## 3. 项目进展

今日**无新合并或关闭的 PR**，项目代码层面无实质性落地进展。但有两条仍处于 OPEN 状态的 PR 内容值得关注：

| PR | 标题 | 作者 | 状态 |
|---|---|---|---|
| [#8102](https://github.com/agentscope-ai/CoPaw/pull/8102) | fix(console): recover boot from failed entry loads with watchdog error surface | wxhking | 待合并（更新于 10-06） |
| [#6823](https://github.com/agentscope-ai/CoPaw/pull/6823) | feat(providers): apply documented capability templates to custom providers | LUOSENGWA | 待合并（首次提交 10-26-08-08） |

- **PR #8102** 是控制台启动健壮性增强：当日志/资产加载失败（如旧版本升级后 hash 资源 404、网络抖动、CDN 故障）时，启动界面会展示错误态并提供"重新加载"按钮，配合一次自动重试，避免用户面对白屏/无限挂起。属于用户体验层的稳定性改进。
- **PR #6823** 是面向自定义 OpenAI 兼容 Provider 的功能增强，通过模型 ID 自动应用内置能力模板（如 `qwen3.6-plus` → `supports_image=True`），降低用户手动标注成本。

整体项目向前推进幅度：**小幅**。

---

## 4. 社区热点

**今日互动量最高的话题**是关于推理强度的功能请求：

- 🔥 **Issue #8114** – [希望能加上推理强度的设定功能](https://github.com/agentscope-ai/CoPaw/issues/8114)  
  作者：hjgsv85jxm-svg ｜ 创建：2026-10-06 ｜ 评论：1 ｜ 👍：0

用户明确反馈在使用 **3.8 系列模型**时"思考过多"，希望在 UI 或配置层增加 **reasoning_effort / reasoning intensity** 类参数，以限制模型的"过度思考"。该诉求反映出当前 CoPaw 在调用具备扩展推理（extended thinking / chain-of-thought）能力的模型时，缺乏对推理深度的细粒度控制能力。

> 标签 `[enhancement]`、`[Feature]` 已由作者标注，表明这是一个明确的、可被纳入路线图的请求。

---

## 5. Bug 与稳定性

今日未新增公开 Bug 报告，但以下待合并 PR 实质上属于**稳定性修复**类，应视为高度优先：

| 严重度 | 描述 | PR 状态 |
|---|---|---|
| 🟡 中 | **控制台启动白屏/无限挂起**：当入口资源因 hash 变更或网络问题加载失败时，用户无法恢复。 | [#8102](https://github.com/agentscope-ai/CoPaw/pull/8102) **OPEN**（10-04 创建，等待 review） |

**评估**：  
- 该问题虽不致核心功能失效，但会**完全阻断用户使用**，影响升级后或弱网环境的用户。  
- PR #8102 已存在 3 天仍未合并**，建议维护者优先 review。  
- 是否已有其他 fix PR：**否**。

---

## 6. 功能请求与路线图信号

### 6.1 推理强度控制（高信号）

- **Issue**：[#8114](https://github.com/agentscope-ai/CoPaw/issues/8114)  
- **诉求**：在 provider / 模型配置层支持 `reasoning_effort`（或类似）参数，控制模型"推理投入"。  
- **被纳入下一版本的可能性**：**较高**。  
  - 背景驱动：当前主流推理增强模型（如 Qwen3、Claude Sonnet/Opus、Grok、OpenAI o-series）均已开放该参数；OpenAI、Anthropic 官方 API 均已支持 reasoning_effort / thinking budget。  
  - 实现成本可控，主要变更集中在 provider 层和模型调用参数映射（不涉及核心架构）。  
- **建议纳入**：与 PR #6823（自定义 provider 能力模板）合并到下一版本，可形成"模型能力声明 + 推理参数控制"的完整能力面。

### 6.2 自定义 Provider 自动能力识别（已具 PR 实现）  
- [PR #6823](https://github.com/agentscope-ai/CoPaw/pull/6823) 已经在功能层面实现该诉求的相邻能力，建议合并。

---

## 7. 用户反馈摘要

从 Issue #8114 的 1 条评论中可以提炼的真实用户反馈如下：

- **痛点**：3.8 系列（或同类具备强推理能力的）模型"太爱思考"——即在没有复杂任务时仍进行冗长的内部推理，导致响应延迟增加、token 消耗放大、用户体验变差。  
- **使用场景**：用户在日常轻量任务（如快速问答、闲聊、简单转换）中被迫接受"重型推理"模型的不必要开销。  
- **满意/不满意**：  
  - ✅ 模型本身的思考质量获得隐性肯定（用户希望保留模型能力，但限制其调用深度）。  
  - ❌ 当前 CoPaw **缺少对推理强度的控制开关**，用户无法在不同场景下灵活调节。  
- **隐含期望**：  
  1. 全局级或模型级 `reasoning_effort` 设置；  
  2. UI 端暴露该参数（Console 或设置页面）；  
  3. 至少与 OpenAI / Anthropic / Qwen 等官方 reasoning API 兼容。

---

## 8. 待处理积压

以下为**响应延迟较长或需要维护者优先关注**的项：

| 类型 | 编号 | 标题 | 创建时间 | 状态时长 | 建议 |
|---|---|---|---|---|---|
| 🔴 长期待合并 PR | [#6823](https://github.com/agentscope-ai/CoPaw/pull/6823) | feat(providers): apply capability templates | 2026-08-08 | **约 60 天** | 由 first-time-contributor 提交，已更新至 10-06；建议维护者**优先 review 与合并**，并向贡献者反馈 |
| 🟡 中等优先级 PR | [#8102](https://github.com/agentscope-ai/CoPaw/pull/8102) | fix(console): boot watchdog | 2026-10-04 | 3 天 | 影响所有升级用户，应尽快合并 |
| 🟢 新功能请求 | [#8114](https://github.com/agentscope-ai/CoPaw/issues/8114) | reasoning intensity 控制 | 2026-10-06 | 1 天 | 建议 author 补充：受影响的 provider 列表、期望参数命名、可参考竞品（如 OpenAI/Anthropic）的 API 设计 |

**总体健康度判断**：  
- 🟢 维护层面：仍有活跃 PR 流入，无大规模 issue 积压；  
- 🟡 流程层面：PR #6823 等待 review 超 60 天，对社区贡献者体验不利，建议建立 PR SLA；  
- 🟢 社区层面：用户反馈聚焦且具备代表性，可转化为具体路线图项。

---

*报告由开源项目分析模型基于公开 GitHub 数据自动生成，所有链接指向 `agentscope-ai/CoPaw` 仓库。*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目日报 · 2026-10-07

> 数据来源：[github.com/zeroclaw-labs/zeroclaw](https://github.com/zeroclaw-labs/zeroclaw) 过去 24 小时窗口（2026-10-06 ~ 2026-10-07）

---

## 1. 今日速览

ZeroClaw 仓库今日维持高强度迭代节奏，过去 24 小时共 **40 条 Issues** 与 **50 条 PRs** 发生变动，**净关闭 11 条**（7 Issues + 4 PRs）。当日重点集中在三条主线：**(1) v0.8.6 / v0.9.0 阶段交付物推进**（Runtime / Gateway / SOP / Agent Loop），**(2) 安全沙箱与配置系统的稳定性修复**（macOS Seatbelt、Linux Firejail / Bubblewrap、密钥 ACL、配置写回），**(3) 通道（Channel）层与图像附件处理路径的多个 P0/P1 Bug 闭环**。Issues / PRs 比例（40:50）显示项目仍处于"问题集中暴露、修复同步跟上"的健康爬坡期。**当日无新版本发布**，距离 v0.8.6 GA 仍有 6 个 blocker 相关的活跃 Issue 等待收口。

---

## 2. 版本发布

**无新版本发布。**

当前发布管道可见的目标里程碑：
- **v0.8.6**（进行中）：跟踪 Issue [#7432](https://github.com/zeroclaw-labs/zeroclaw/issues/7432)、[#9824](https://github.com/zeroclaw-labs/zeroclaw/issues/9824)、[#11174](https://github.com/zeroclaw-labs/zeroclaw/pull/11174)、[#11534](https://github.com/zeroclaw-labs/zeroclaw/pull/11534)
- **v0.9.0**（Phase 3 Gateway 分离）：跟踪 Issue [#7432](https://github.com/zeroclaw-labs/zeroclaw/issues/7432)、PR [#11181](https://github.com/zeroclaw-labs/zeroclaw/pull/11181)

---

## 3. 项目进展（已合并 / 已关闭）

| PR | 标题 | 影响面 | 价值 |
|---|---|---|---|
| [#11509](https://github.com/zeroclaw-labs/zeroclaw/pull/11509) | feat(channels): prefer attachments for large generated artifacts | 通道 / Prompt | 关闭配套 Issue [#8527](https://github.com/zeroclaw-labs/zeroclaw/issues/8527)，引导模型把大段 HTML/脚本/电子表格落盘为附件，避免在消息中粘贴。 |
| [#11451](https://github.com/zeroclaw-labs/zeroclaw/pull/11451) | fix(secrets): protect Windows key files at creation | 安全 / Windows | 关闭 [#9460](https://github.com/zeroclaw-labs/zeroclaw/issues/9460)。在创建 `.secret_key` 时即应用受限 ACL，并用同一独占 handle 完成写盘 / 刷盘 / no-replace 发布与失败清理。 |

此外，Issues 层面 [#10495](https://github.com/zeroclaw-labs/zeroclaw/issues/10495)（`Config::save()` 可能把用户 109 KB 配置覆盖为 702 B 空壳）、[#10536](https://github.com/zeroclaw-labs/zeroclaw/issues/10536)（macOS Seatbelt 忽略 `allowed_roots`）、[#10908](https://github.com/zeroclaw-labs/zeroclaw/issues/10908)（图像标记无 provenance 被错误提升为附件）、[#7883](https://github.com/zeroclaw-labs/zeroclaw/issues/7883)（同族 provider fallback 提示）今日陆续关闭，**安全与配置稳定性持续抬升**。

---

## 4. 社区热点

按评论数排序，过去 24 小时讨论最密集的话题：

1. **[#8132](https://github.com/zeroclaw-labs/zeroclaw/issues/8132) — Evaluate Rust/WASM web UI prototype before React/Vite migration**（11 条评论）
   - 从 [#7674](https://github.com/zeroclaw-labs/zeroclaw/issues/7674) 拆出的 WebAssembly-first 路线讨论。社区希望先用 Dioxus / Leptos / Yew 做原型对比，再决定是否彻底替换 React SPA + Vite。**诉求**：消除 Node.js 运行时依赖、缩小 Web UI 体积、提升前端与 Rust 主代码的一致性。

2. **[#7432](https://github.com/zeroclaw-labs/zeroclaw/issues/7432) — Runtime & Gateway delivery tracker v0.8.6/v0.9.0**（6 条评论）
   - 整个 v0.8.6 Phase 2 与 v0.9.0 Phase 3 的源真值追踪（tracker）Issue。**诉求**：让贡献者与发布经理对剩余 gap 与排序有单一参考。

3. **[#11055](https://github.com/zeroclaw-labs/zeroclaw/issues/11055) — Standalone channel start SOP turns lack live channel tool handles**（6 条评论）
   - daemon 部署下，webhook / A2A / cron / SOP 入口无法拿到 `send_via`、`poll`、`channel_room`、`reaction`、`escalate` 等通道工具。**诉求**：统一 turn 入口的 channel-map 工厂（[#11595](https://github.com/zeroclaw-labs/zeroclaw/pull/11595) 已在路上）。

4. **[#10495](https://github.com/zeroclaw-labs/zeroclaw/issues/10495) — `Config::save()` 覆盖用户配置为 702 字节空壳**（6 条评论）
   - 已关闭但热度高：S0 数据丢失 / 安全风险。**诉求**：保存前必须做 round-trip 完整性校验。

5. **[#10926](https://github.com/zeroclaw-labs/zeroclaw/issues/10926) — Matrix `send_via` 把 peer user 当作 room destination**（4 条评论）
   - 通道路由的语义错误，影响跨账户私聊。

---

## 5. Bug 与稳定性

按严重度排列，过去 24 小时新增 / 活跃 Bug：

| 严重度 | Issue | 描述 | 修复 PR |
|---|---|---|---|
| **S0** | [#11540](https://github.com/zeroclaw-labs/zeroclaw/issues/11540) | bubblewrap 沙箱在 Linux 检测失败，回落到 application-layer（数据丢失/安全风险） | 无 |
| **S1** | [#11539](https://github.com/zeroclaw-labs/zeroclaw/issues/11539) | Firejail 调用失败：`invalid --nowheel command line option` | 无 |
| **S1** | [#11538](https://github.com/zeroclaw-labs/zeroclaw/issues/11538) | Firejail 调用失败：`invalid private directory`，日志不可见 | [#11594](https://github.com/zeroclaw-labs/zeroclaw/issues/11594) 已提出，且 PR [#11591](https://github.com/zeroclaw-labs/zeroclaw/pull/11591) 修正了文档中的选择器描述 |
| **S2** | [#11554](https://github.com/zeroclaw-labs/zeroclaw/issues/11554) | Signal/Telegram/Discord 的早期 `[IMAGE:<path>]` 标记每轮都被重发，模型看到幻影"新"图像 | 无 |
| **S2** | [#11515](https://github.com/zeroclaw-labs/zeroclaw/issues/11515) | cost ledger 因 torn-write 丢弃记录，仅 WARN，无隔离 | 无 |
| **S2** | [#11585](https://github.com/zeroclaw-labs/zeroclaw/issues/11585) | 触发 `cost.daily_limit_usd` 后只能重启 daemon 才能恢复，`cost.allow_override` 未生效 | 无 |
| **S2** | [#11481](https://github.com/zeroclaw-labs/zeroclaw/issues/11481) | ZeroCode 在终端断连后 100% CPU 占用 | 无 |
| **S2** | [#10923](https://github.com/zeroclaw-labs/zeroclaw/issues/10923) | sandbox discovery 忽略 TUI 提供的 PATH（blocked by #10381） | 无 |
| **S2** | [#11469](https://github.com/zeroclaw-labs/zeroclaw/pull/11469) | `/dev/null` 在 Unix 不可靠豁免 | **已修复**（PR 中） |
| **S2** | [#10926](https://github.com/zeroclaw-labs/zeroclaw/issues/10926) | Matrix `send_via` 路由错 | 无 |
| **S3** | [#11586](https://github.com/zeroclaw-labs/zeroclaw/issues/11586) | ZeroCode 重启后失败 session 状态变绿 | 无 |
| **S3** | [#11552](https://github.com/zeroclaw-labs/zeroclaw/issues/11552) | 插件 egress 仪式忽略 `websocket_client` / `socket_client` 声明 | 无 |

**总结**：当日 7 条关闭 Issue 中 5 条为 Bug，剩余活跃 P0/P1 Bug 多集中在 **Linux 沙箱发现机制** 与 **图像 / 附件附件路径**，与 `runtime/daemon` 的稳定性高度相关。

---

## 6. 功能请求与路线图信号

最有可能进入下个版本的功能请求：

| Issue / PR | 提议 | 状态信号 |
|---|---|---|
| [#9824](https://github.com/zeroclaw-labs/zeroclaw/issues/9824) — 默认 web 工具收敛为 `web_fetch + web_research + http_request` | 简化默认工具集，浏览器自动化改显式 opt-in | v0.8.6 候选，p1，tracker |
| [#9887](https://github.com/zeroclaw-labs/zeroclaw/issues/9887) — 大图降采样而非丢弃，`max_image_size_mb = 0` 表示禁用 | 改善多模态 UX | blocked，parking-lot，需 #11554 解决 |
| [#11166](https://github.com/zeroclaw-labs/zeroclaw/issues/11166) — 超出 `max_images` 时按批驱逐，刷新 prompt cache | 降低 Anthropic 兼容 provider 的成本波动 | p2，in-progress |
| [#10996](https://github.com/zeroclaw-labs/zeroclaw/issues/10996) — 插件安装时预置 channel 实例配置与 grants | 完成 #11098 后半段 channel-instance setup | v0.8.6 候选 |
| [#11547](https://github.com/zeroclaw-labs/zeroclaw/issues/11547) — SOP runs 绑定不可变工作流定义版本 | SOP 可重现性 | icebox，待更广讨论 |
| [#11553](https://github.com/zeroclaw-labs/zeroclaw/issues/11553) — 按通道去抖 + 附件保留的入站消息合并 | Signal 等多附件分片场景 | 提案阶段 |
| [#11583](https://github.com/zeroclaw-labs/zeroclaw/issues/11583) — 增加 Opper（EU-hosted OpenAI-兼容）provider 槽 | 欧洲合规与多模型聚合 | 提案阶段 |

**路线图判断**：v0.8.6 的最大概率收纳项为通道去抖、Schema V4 清理 [#8310](https://github.com/zeroclaw-labs/zeroclaw/issues/8310)、入站 SOP channel 工具 wiring。v0.9.0 的网关分离（[#11181](https://github.com/zeroclaw-labs/zeroclaw/pull/11181)、[#11530](https://github.com/zeroclaw-labs/zeroclaw/pull/11530)）正在堆叠式（stacked）推进。

---

## 7. 用户反馈摘要

从活跃 Issues 评论中提取的真实痛点：

- **沙箱发现不可靠（Linux 多名用户集中反馈）**：[#11538](https://github.com/zeroclaw-labs/zeroclaw/issues/11538)、[#11539](https://github.com/zeroclaw-labs/zeroclaw/issues/11539)、[#11540](https://github.com/zeroclaw-labs/zeroclaw/issues/11540) 三连报来自不同用户，集中在 Firejail / Bubblewrap 检测路径不返回有意义的失败信息，回落到 application-layer 时未给告警，运维排障成本高。**用户原话（#11540）**：`bwrap runs fine with the command: bwrap --ro-bind /usr /usr ...` — 检测逻辑比命令行本身更脆弱。

- **成本控制可用性差**：[#11585](https://github.com/zeroclaw-labs/zeroclaw/issues/11585) 与 [#11515](https://github.com/zeroclaw-labs/zeroclaw/issues/11515) 同时暴露：触发限额后必须重启 daemon、torn-write 静默丢弃、配置开关不生效。**用户诉求**：可观测、可恢复、配置与运行状态对齐。

- **多模态"鬼影"图像**：[#11554](https://github.com/zeroclaw-labs/zeroclaw/issues/11554) 中描述 `[IMAGE:...]` 标记每轮重发，模型误判为新图像，浪费 token 与上下文窗口。

- **配置写回数据丢失**：[#10495](https://github.com/zeroclaw-labs/zeroclaw/issues/10495) 用户场景：109 KB / 25 agents 的 `~/.zeroclaw/config.toml` 被覆盖为 702 B。**情绪**：高度紧张，已被标记为 S0。

- **正面信号**：[#9824](https://github.com/zeroclaw-labs/zeroclaw/issues/9824)、[#11509](https://github.com/zeroclaw-labs/zeroclaw/pull/11509) 等条目显示社区对"大产物走附件、默认工具收敛"的方向持积极态度，认为这是降低 prompt 噪声的关键改进。

---

## 8. 待处理积压（提醒维护者关注）

长期未合并且风险等级高的 PR，按更新时间倒序影响面排序：

| PR / Issue | 标题 | 风险 | 创建 | 备注 |
|---|---|---|---|---|
| [#11313](https://github.com/zeroclaw-labs/zeroclaw/pull/11313) | fix(cli): publish authorization edits from `config set` / `config patch` into the running daemon | high | 2026-10-01 | `needs-author-action, needs-maintainer-review`，p1 |
| [#11265](https://github.com/zeroclaw-labs/zeroclaw/pull/11265) | feat(cli): zeroclaw user commands for roster password lifecycle | high | 2026-09-30 | `

</details>

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*