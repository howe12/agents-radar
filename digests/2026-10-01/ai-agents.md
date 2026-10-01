# OpenClaw 生态日报 2026-10-01

> Issues: 485 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-10-01 03:34 UTC

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

# OpenClaw 项目动态日报 · 2026-10-01

---

## 1. 今日速览

OpenClaw 今日发布 **v2026.9.7** 大版本（518 直连 commit / 2,818 PR / 334 贡献者），社区活跃度维持在极高水平。过去 24 小时共有 308 条新开/活跃 Issue 与 338 条待合并 PR 同时涌入，问题/合并比约 1.9:1，**P0 级别占比突出**，反映出 2026.9.x 系列在 SQLite WAL、Gateway 内存、子代理交付、Windows 平台等方向仍存在未收敛的稳定性问题。当下项目处于"高频修复 + 大量长尾待办"并行的紧张阶段，建议维护者优先处理 crash-loop 与 release-blocker 标签。

---

## 2. 版本发布

### 🚢 v2026.9.7（openclaw 2026.9.7）

- **规模**：518 direct commits · 2,818 PR · 334 contributors
- **发布说明**：[docs.openclaw.ai/rel](https://docs.openclaw.ai/rel)（数据中链接被截断）

**更新要点（从今日合入与排队 PR 推断）：**
- 🛠 **Windows 平台关键修复**：恢复 Windows 上命名空间数据库路径下的 session 创建（[#162332](https://github.com/openclaw/openclaw/pull/162332)）、解决 Windows 升级因 rounded NTFS lease identity 触发的回滚（[#162245](https://github.com/openclaw/openclaw/pull/162245)）、修复 Docker 在老 Linux 内核上的 upgrade retry 死循环（[#162305](https://github.com/openclaw/openclaw/pull/162305)）。
- 🧹 **Doctor / Update 流水线**：性能优化通过共享快照读取更新历史（[#162232](https://github.com/openclaw/openclaw/pull/162232)）、修复保留被删 agent 数据库阻塞升级（[#162056](https://github.com/openclaw/openclaw/pull/162056)）、update 进度展示不再阻塞包准备（[#162345](https://github.com/openclaw/openclaw/pull/162345)）。
- 🔐 **发布工程**：要求签名 publication tag（[#162323](https://github.com/openclaw/openclaw/pull/162323)）。
- 🎨 **UI 修复**：macOS 加载骨架与窗口控件重叠（[#162350](https://github.com/openclaw/openclaw/pull/162350)）、侧边栏恢复草稿/附件发件箱徽章（[#162049](https://github.com/openclaw/openclaw/pull/162049)）。
- 🧪 **质量**：移除 11,483 行低价值测试（[#162349](https://github.com/openclaw/openclaw/pull/162349)）。

**⚠️ 已知回归/破坏性变更（升级前请评估）：**
- 2026.9.6 引入的"Gateway 持有 state-lifecycle lease 但 worker 报告其他进程持有"冲突（[#159094](https://github.com/openclaw/openclaw/issues/159094)）。
- Windows 升级到 2026.9.7 后，已知存在 SQLite WAL 无界增长（[#143524](https://github.com/openclaw/openclaw/issues/143524)）、plugin-doctor crash-loop（[#157160](https://github.com/openclaw/openclaw/issues/157160)）、`Session membership store changed before publication`（[#158239](https://github.com/openclaw/openclaw/issues/158239)）等兼容性问题，**建议 Windows/容器用户暂缓升级或在升级前做快照回滚预案**。

---

## 3. 项目进展

今日已合并/关闭的 PR 体现项目在 **release engineering** 与 **平台兼容** 两个方向有明显推进：

| PR | 主题 | 价值 |
|---|---|---|
| [#162305](https://github.com/openclaw/openclaw/pull/162305) | fix: stop Docker upgrade retry loops on older Linux hosts | 解决老内核 Docker 启动失败循环，P0 |
| [#162263](https://github.com/openclaw/openclaw/pull/162263) | fix: prompt snapshots fail with configured media credentials | 解锁带媒体凭证环境的快照生成 |
| [#162336](https://github.com/openclaw/openclaw/pull/162336) | refactor(doctor): share scalar config migration scaffolding | Doctor 内部重构，降低后续 rename 维护成本 |

此外，多个跨多个分类的 P0/P1 PR（#162332、#162056、#162323、#162245）已完成"ready for maintainer look"评审，**预计将在 24-48 小时内合并到 release-line**，标志着 2026.9.7 后续补丁已在路上。

整体看，项目处于"边发版边修回归"的节奏，单日合并/关闭量 162 条 PR 对应近 308 条活跃 Issue，吞吐健康，**但 P0 队列未明显缩短**。

---

## 4. 社区热点

### 🗣 最高讨论热度（按评论数）

1. **[Agent SQLite WAL grows to 1.4–2.8 GB](https://github.com/openclaw/openclaw/issues/143524)** — 100 条评论 · P0 · 仍 OPEN  
   单 agent 数据库 WAL 文件无界增长，`wal_autocheckpoint=1000` 配置无效，触发 gateway 启动失败。Windows 重灾区。

2. **[OpenClaw 2026.9.5 turned stable env into 8-Hour Failure Recovery](https://openclaw/openclaw/issues/153257)** — 40 条评论 · P0 · 仍 OPEN  
   用户真情实感的长文报告，从稳定环境被升级破坏后 8 小时恢复，"我真诚地后悔升级到 2026.9.5"，**舆论风险信号**。

3. **[Subagent completion silently lost](https://github.com/openclaw/openclaw/issues/44925)** — 30 条评论 · P1 · 已存在超 6 个月  
   子代理结果在 E31/E42/E45 等错误下静默丢失，无 retry/通知/重启。

4. **[main (1611ca6d): Gateway ready but never serves](https://github.com/openclaw/openclaw/issues/149538)** — 22 条评论 · P0 · 仍 OPEN  
   632 agent 规模舰队，事件循环饥饿，RSS 涨到 OOM。

5. **[Windows isolated cron setup uncloneable Proxy](https://github.com/openclaw/openclaw/issues/157067)** — 20 条评论 · P1 · 已 CLOSED  
   已关闭并有 linked PR，可作为 Windows Proxy 处理修复的参考。

6. **[AgentSelectionRequiredError floods logs](https://github.com/openclaw/openclaw/issues/126360)** — 19 条评论 · P1 · 仍 OPEN  
   `agents.ownership=explicit` 模式下日志被错误刷屏。

**背后共同诉求**：用户呼吁 **OpenClaw 加强对子代理、Gateway 生命周期、SQLite 存储与 Windows 平台**这四个最痛领域的稳定性回归保护，避免每次升级带来新故障。

---

## 5. Bug 与稳定性

按严重程度排列（仅列高优先级）：

| 等级 | Issue | 状态 | 关联 PR | 摘要 |
|---|---|---|---|---|
| 🦐 P0 | [#143524](https://github.com/openclaw/openclaw/issues/143524) | OPEN | ❌ 无 fix PR | Agent SQLite WAL 无界增长阻塞启动 |
| 🦐 P0 | [#153257](https://github.com/openclaw/openclaw/issues/153257) | OPEN | ❌ 无 fix PR | 2026.9.5 升级导致 8 小时故障恢复 |
| 🦐 P0 | [#149538](https://github.com/openclaw/openclaw/issues/149538) | OPEN | ❌ 无 fix PR | Gateway ready 后无法服务，事件循环饥饿 |
| 🦐 P0 | [#157325](https://github.com/openclaw/openclaw/issues/157325) | OPEN | ❌ 无 fix PR | 卡死的 agent-DB 导致全部 agent 回复失败 |
| 🦐 P0 | [#157160](https://github.com/openclaw/openclaw/issues/157160) | CLOSED | — | Gateway crash-loop on plugin-doctor（多已迁移标记） |
| 🦐 P0 | [#158126](https://github.com/openclaw/openclaw/issues/158126) | OPEN | ❌ 无 fix PR | Gateway 关机步骤 gateway-server-close 失败 |
| 🦐 P0 | [#158239](https://github.com/openclaw/openclaw/issues/158239) | OPEN | ❌ 无 fix PR | Linux kernel < 5.6 上 Session membership store 报错 |
| 🦐 P0 | [#159596](https://github.com/openclaw/openclaw/issues/159596) | OPEN | ❌ 无 fix PR | Gateway 内存锯齿状增长，约 200 次/天 critical |
| 🦐 P0 | [#159612](https://github.com/openclaw/openclaw/issues/159612) | OPEN | ❌ 无 fix PR | 子代理结算重试死循环 |
| 🦐 P0 | [#159662](https://github.com/openclaw/openclaw/issues/159662) | OPEN | ❌ 无 fix PR | prepared-model-catalog.worker.js ~4-5 GB/h 内存泄漏 |
| 🦐 P0 | [#160386](https://github.com/openclaw/openclaw/issues/160386) | OPEN | ❌ 无 fix PR | 2026.9.6 大会话存储 SQLite I/O 压力 |
| 🦐 P0 | [#160521](https://github.com/openclaw/openclaw/issues/160521) | OPEN | ❌ 无 fix PR | state DB read-admission seal → unhandled rejection |
| 🦞 P1 | [#44925](https://github.com/openclaw/openclaw/issues/44925) | OPEN（6月龄） | ❌ 无 fix PR | 子代理完成静默丢失 |
| 🦞 P1 | [#97616](https://github.com/openclaw/openclaw/issues/97616) | OPEN | ❌ 无 fix PR | 钩子/工具子进程未回收，僵尸累积 |
| 🦞 P1 | [#157126](https://github.com/openclaw/openclaw/issues/157126) | OPEN | ❌ 无 fix PR | claude-cli MCP bridge 继承请求 scope 越权 |
| 🦞 P1 | [#70903](https://github.com/openclaw/openclaw/issues/70903) | OPEN（5月龄） | ❌ 无 fix PR | 文件式 provider cooldown 在计费恢复后仍阻塞 |
| 🦞 P1 | [#114234](https://github.com/openclaw/openclaw/issues/114234) | OPEN | 🔗 linked-pr-open | 容器内 usage-cost 锁因 PID 复用永久冻结 |
| 🦞 P1 | [#161654](https://github.com/openclaw/openclaw/issues/161654) | OPEN | ❌ 无 fix PR（已标记回归） | Windows cron WorkerTaskError DataCloneError |
| 🦞 P1 | [#161379](https://github.com/openclaw/openclaw/issues/161379) | OPEN | 🔗 [#162226](https://github.com/openclaw/openclaw/pull/162226) | Gateway CPU 核心被 model-catalog refresh 永久占用 |

**重点观察**：13 个 P0 中仅 1 个（#161379 → #162226）有正在走流程的 fix PR，**fix 覆盖率约 7.7%**，与昨日发布 v2026.9.7 后"已修复"的体感形成落差。

---

## 6. 功能请求与路线图信号

### 已在路上的特性（PR 已开，等待合入）
- **🔌 Nodes 精确启动 Linux 应用**（[#159695](https://github.com/openclaw/openclaw/pull/159695)）— XL · P2 · `app_list` / `app_launch`，无需模型代写 shell。
- **🧬 迁移已存在的 agents 到 local Claws**（[#162329](https://github.com/openclaw/openclaw/pull/162329)）— XL · P2 · 解决"已配置 agent 一键加入本地 Claw"的痛点。
- **🌐 Agents API 原生 web search 设为可选**（[#162335](https://github.com/openclaw/openclaw/pull/162335)）— S · P2 · `plugins.entries.agentsapi.config.nativeTools: []`。
- **🧑‍🤝‍🧑 Visitor 邀请与撤销解耦**（[#162207](https://github.com/openclaw/openclaw/pull/162207)）— L · P2 · `visitor_revoke` 接受 `profileId` 或 `grantId`。
- **🧰 workboard 按归档状态拆分统计**（[#161198](https://github.com/openclaw/openclaw/pull/161198)）— S · P2 · 解决 "byStatus 计数含已归档" 的统计误差。
- **📞 voice-call 复用实时运行时**（[#159147](https://github.com/openclaw/openclaw/pull/159147)）— M · P1 · 解决进行中通话被 gateway 命令打断。

### 用户诉求强烈但尚无 PR 的方向
- **agent 每日消费上限（per-agent）**（[#121729](https://github.com/openclaw/openclaw/issues/121729)）— 已 CLOSED 但 8 条评论，**仍是被忽视的体验诉求**。
- **Provider cooldown 在订阅型 auth 上自动探测恢复 + 缩短窗口**（[#115642](https://github.com/openclaw/openclaw/issues/115642)）— P0 · 与 #70903 同源，建议合并推动。
- **动态 catalog 从配置的 `/v1/models` 拉取**（[#74481](https://github.com/openclaw/openclaw/issues/74481)）— 解决"内置 gpt-5.5 写死 baseUrl"问题。

---

## 7. 用户反馈摘要

**😡 主要痛点**

- **升级即故障**：多用户（[#153257](https://openclaw/openclaw/issues/153257) [#157160](https://github.com/openclaw/openclaw/issues/157160) [#160386](https://github.com/openclaw/openclaw/issues/160386)）反映从 2026.9.x 升级后 gateway crash-loop、SQLite 异常、channel 起不来，且需要 8+ 小时手动恢复。**维护者应明确标注哪些 release-line 已稳定、哪些需要回滚**。
- **子代理/SDK 黑盒失败**：`Subagent completion silently lost`（[#44925](https://github.com/openclaw/openclaw/issues/44925)）、`owner changed before settlement`（[#159612](https://github.com/openclaw/openclaw/issues/159612)）、`failed subagent delivery recurs in every turn's runtime context`（[#154834](https://github.com/openclaw/openclaw/issues/154834)）暴露子代理链路缺乏"已完成/未完成/失败"的可观测信号，**用户根本不知道子代理是否真的工作了**。
- **Windows 平台成为二等公民**：Proxy 不可 clone（[#157067](https://github.com/openclaw/openclaw/issues/157067)、[#161654](https://github.com/openclaw/openclaw/issues/161654)）、lease identity 不识别（[#162245](https://github.com/openclaw/openclaw/pull/162245)）、

---

## 横向生态对比

# 个人 AI 助手 / 自主智能体开源生态横向对比报告
**报告日期**：2026-10-01 ｜ **覆盖项目**：14 个

---

## 1. 生态全景

2026-10-01 截点的 AI 智能体开源生态呈现**"头部持续高强度迭代、长尾项目进入静默期、垂直方向加速分化"**的格局：OpenClaw 当日单日吞吐近 162 条 PR 合并与 308 条活跃 Issue，体量约为第二梯队项目的 5–10 倍；ZeroClaw、CoPaw、Hermes Agent、LobsterAI 处于密集集成期（v0.9.0 冲刺 / beta 验证 / sweeper 治理）；NanoBot 完成一轮 backlog 清理后转入基础设施重构（Session-SQLite、WebUI 远程化）。与此同时，NullClaw、IronClaw、TinyClaw、Moltis、ZeptoClaw 五个项目处于零活动静默期，反映出**生态正从"百舸争流"向"分层收敛"过渡**。整体技术重心已从"模型接入"转向"会话可观测、子代理治理、平台兼容性、安全边界"四大深水区。

---

## 2. 各项目活跃度对比

| 项目 | Issues (新/活/闭) | PRs (合并/待合) | Release | 健康度 | 当日特征 |
|---|---|---|---|---|---|
| **OpenClaw** | 308 / 308 / — | 162 / 338 | **v2026.9.7** | 🟠 高负载 | 13 个 P0 中 fix 覆盖率仅 7.7% |
| **ZeroClaw** | 50 / 45 / 5 | 5 / 47 | 无（v0.9.0 冲刺） | 🟡 高强度 / 积压 | 5 个 S0 OPEN，PR 堆叠依赖重 |
| **CoPaw** | 20 / — / 3 | 1 / 38 | **v2.2.2-beta.4** | 🟢 良好 | 17 Bug 中 4 闭环、5 待合并 |
| **Hermes Agent** | 50 / 40 / 10 | 1 / 49 | 无 | 🟡 治理型 | 2 P1 已闭环，sweeper 机制见效 |
| **LobsterAI** | 10 / 10 / 0 | 9 / — | 无（上次 9.23） | 🟡 中等偏高 | Issue 零关闭，响应回路偏慢 |
| **NanoBot** | 11 / 0 / 11 | 22 / 8 | 无 | 🟢 优秀 | 集中清账日，6 个旧 Issue（最久 6 个月）关闭 |
| **NanoClaw** | 1 / 0 / 1 | 2 / 13 | 无 | 🟡 中等 | 升级机制硬化、Telegram 修复集中 |
| **PicoClaw** | 0 / 0 / 0 | 3 / 3 | 无 | 🟡 中等 | 代码活跃，Issue 通道冷清 |
| **NullClaw** | 0 / 0 / 0 | 0 / 1 | 无 | 🔴 静默 | 1 条 PR 待 24h+ 仍无评审 |
| **IronClaw** | 0 / 0 / 0 | 0 / 1 | 无 | 🔴 静默 | 仅 CI 自动化刷新（待合并 33 天） |
| **TinyClaw** | 0 | 0 | 无 | ⚫ 休眠 | — |
| **Moltis** | 0 | 0 | 无 | ⚫ 休眠 | — |
| **ZeptoClaw** | 0 | 0 | 无 | ⚫ 休眠 | — |

> 注：OpenClaw 数据包含 v2026.9.7 发布带来的统计放大效应；"PR 待合"指仍处于 Open/Review 状态的累计数。

---

## 3. OpenClaw 在生态中的定位

**OpenClaw 是当前生态中体量最大、覆盖面最广、用户基数最厚的旗舰项目**，但同时也承受了规模带来的稳定性代价：

| 维度 | OpenClaw | 最接近的对照项目 |
|---|---|---|
| 单日合并/活跃 PR 量 | 162 / 338 | ZeroClaw 5/47、Hermes 1/49、CoPaw 1/38 |
| 单版本贡献者 | **334** | NanoBot 维护者集中于 chengyongru 一人为主 |
| 平台覆盖 | Windows / Linux / macOS / Docker 全平台 | Hermes、CoPaw 同样多平台但 Windows 重灾区 |
| 子代理 / Gateway / 多渠道 | 全面深入（agent-DB、WAL、Proxy、State lifecycle） | NanoBot 仅 Subagent，ZeroClaw 仅 delegate |
| 当前最大风险 | "升级即故障"舆论风险 + P0 fix 滞后 | 各项目集中在具体模块修复 |

**技术路线差异**：OpenClaw 走"一站式个人 AI 助手平台"路线，强调单机全功能覆盖（Gateway + SQLite WAL + 多渠道 + Windows 兼容）；ZeroClaw 选择**多租户 + 凭据绑定鉴权 + 网关/核心进程分离**的硬核安全架构；Hermes Agent 走**桌面端 + sweeper 治理机制**；NanoBot 押注**远程分布式 + SQLite 事务权威化**。

**社区规模**：OpenClaw 的当日 308 条活跃 Issue 数 ≈ ZeroClaw + Hermes + CoPaw 三家活跃 Issue 之和（≈115），处于**绝对头部位置**，但 P0 fix 覆盖率（7.7%）显著低于 CoPaw（24%）与 Hermes（33% 已闭环 P1）的"小而精"治理节奏。

---

## 4. 共同关注的技术方向

以下议题在 **3 个及以上项目**中同时浮现，是 2026 Q4 的明确行业焦点：

| 议题 | 涉及项目 | 共同诉求 |
|---|---|---|
| **子代理 / 委托可靠性** | OpenClaw（#44925、#159612）、NanoBot（#5985）、Hermes（#113222）、ZeroClaw（#10165、#11198） | 子任务结果"静默丢失"、delegation 绕过风险配置、principal scope 失效——**子代理链路的可观测性是普遍短板** |
| **会话 / 状态持久化重构** | OpenClaw（SQLite WAL 无界增长 #143524）、NanoBot（SQLite 化 #5943）、ZeroClaw（session ownership #9646）、CoPaw（memory embedding #8040） | JSONL/事件循环存储 → 事务性权威存储；per-agent 归属校验 |
| **多 Provider 适配 / LLM 网关** | NullClaw（Cheaper Inference #1016）、NanoClaw（Iron 本机/Copilot）、CoPaw（OpenAI Responses/Anthropic cache）、LobsterAI（plan routing） | 统一 OpenAI 兼容抽象；cache token 计费精度；prompt_cache_key 透传 |
| **Windows 平台兼容性** | OpenClaw（Proxy uncloneable #157067、WorkerTaskError #161654）、Hermes（#129531 desktop deep link、#129924 Feishu）、CoPaw（#8002 sandbox 突破、#7672 沙箱回归） | Windows 成为"二等公民"是共识——NTFS lease、DataCloneError、COM 治理、URL scheme |
| **安全 / 权限边界** | ZeroClaw（per-agent ownership 5 个 S0）、CoPaw（#7443 指令绕过、#8002 sandbox）、Hermes（#92441 ZWNJ i18n 注入误判）、LobsterAI（#2784 NIM P2P fail-open）、NanoBot（#5997、#5994） | 跨 agent 数据隔离、危险指令识别、本地化字符与注入标记的边界 |
| **WebUI 远程管理 / 多渠道统一视图** | NanoBot（#5941 远程实例连接）、PicoClaw（#3413 全渠道会话侧边栏） | Web UI 从"本地 CLI 配套"演化为"分布式管控面板" |
| **多 Agent 协作框架** | PicoClaw（#423 WIP Blackboard + Handoff）、LobsterAI（#964 多角色隔离）、CoPaw（Advisor Mode #7569） | 从"单 agent + 子代理"到"多角色协同"的架构演进 |

---

## 5. 差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 架构关键差异 |
|---|---|---|---|
| **OpenClaw** | 全平台个人 AI 助手一站式 | 跨平台单机 / 中小团队 | Gateway + SQLite WAL + 多渠道 + 子代理 + Windows 深度适配 |
| **ZeroClaw** | 多租户 / 安全优先 / 网关核心分离 | 企业级多租户部署 | 凭据绑定 RPC + Principal Ownership + 网关/核心进程边界 |
| **NanoBot** | 分布式 agent 网关 / 远程管控 | 运维 / 集群场景 | 事件规范化 + SQLite 事务权威 + WebUI 远程发现 |
| **Hermes Agent** | 桌面端体验 + 治理机制 | 桌面重度用户 / 国际化用户 | sweeper:risk-* 标签自动化治理 + desktop 深度集成 |
| **CoPaw** | 多 Provider 适配 + 会话治理 | 多模型生产部署 | ReMe memory + 多协议 Provider + Console/IM 双 UI 隔离 |
| **LobsterAI** | 企业 IM 场景（飞书/钉钉/微信） | 企业 IM 工作流用户 | IM channel-first + 任务生命周期管理 + 模型路由 |
| **PicoClaw** | 轻量多渠道（QQ/DeltaChat/Telegram） | 轻量部署 / 渠道探索 | 渠道扩展优先 + WIP 多 Agent 框架 |
| **NanoClaw** | 升级机制硬化 + Provider 生态 | Linux 部署运维 | update-nanoclaw 流水线 + 本机无 Key 模型 |
| **NullClaw** | LLM 厂商聚合网关 | 跨厂商成本敏感用户 | 纯 OpenAI 兼容网关策略（Eden AI / Cheaper Inference） |
| **IronClaw** | AI 自我理解 / 代码上下文检索 | Agent 内部索引场景 | 自动化知识图谱维护机制 |

**关键架构分野**：
- **"会话存储权威化"** 已成为 NanoBot、ZeroClaw、OpenClaw 共同的演进方向（JSONL → SQLite 事务）
- **"Provider 网关"** 与 **"Agent 治理"** 分化为两条路线：NullClaw / NanoClaw 走前者，ZeroClaw / CoPaw 走后者
- **"Windows 平台"** 成为几乎所有项目的共同短板，但 OpenClaw 投入最深（命名空间、NTFS、WorkerTaskError 等系列修复）

---

## 6. 社区热度与成熟度分层

### 🔥 第一梯队：高强度迭代（≥20 PR / Issue 更新）
- **OpenClaw**、**ZeroClaw**、**Hermes Agent**、**CoPaw**、**LobsterAI**、**NanoBot**
- 共同特征：每日 PR+Issue 总量 > 30，多线并进，存在明确的版本目标或治理节奏

### 🟡 第二梯队：稳定维护（5–20 PR / Issue）
- **PicoClaw**、**NanoClaw**
- 共同特征：代码提交活跃但 Issue 通道冷清，社区参与深度有限

### 🔴 第三梯队：静默观望（<5 PR，无 Issue）
- **NullClaw**、**IronClaw**、**TinyClaw**、**Moltis**、**ZeptoClaw**
- 共同特征：零或近零用户互动，可能处于版本间歇期或战略调整窗口

**成熟度观察**：
- **质量巩固阶段**：NanoBot（11 个旧 Issue 一次性清账，最久 6 个月）、Hermes Agent（sweeper 机制快速收敛 P1）—— **治理机制成熟的标志**
- **集成密集期**：ZeroClaw（v0.9.0 PR 堆叠）、CoPaw（v2.2.2-beta.4 多 Provider 适配）—— **版本冲刺前夜**
- **快速扩张期**：LobsterAI（用户反馈回暖但维护响应偏慢）—— **社区成长超过维护带宽**
- **静默期风险**：NullClaw / IronClaw —— **需警惕社区流失**

---

## 7. 值得关注的趋势信号

### 信号 1：**"升级税"成为生态系统级问题**
OpenClaw（#153257：稳定环境升级后 8 小时恢复）、LobsterAI（#962：升级触发 403）共同暴露——**版本升级的破坏性已成为

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目日报

**日期：2026-10-01** | **数据周期：过去 24 小时**

---

## 1. 今日速览

NanoBot 今日呈现典型的"集中清账日"特征：**11 个 Issues 全部关闭（无新增/活跃）**，**30 个 PR 中 22 个已合并或关闭、8 个仍待合并**，无新版本发布。维护者（以 chengyongru 为核心）对 TUI、WebUI、Provider、Subagent、Session 等多个模块进行了一轮系统性收尾，多个积压已久的旧 Issue（包括 #2084、#3106、#3626、#3718 等 3-6 个月前的反馈）今日集中关闭。整体活跃度评估：**高**，但偏向收尾而非新需求爆发，仓库健康度良好。

---

## 2. 版本发布

**无新版本发布。** 今日合入的 PR 多为 bug 修复、回归修复、文档重构，预计将在下一次常规发版时随变更日志一起发布。

---

## 3. 项目进展

今日合入/关闭的 22 个 PR 中，以下推进了核心能力：

### 🚀 重大改进
- **#5941 [OPEN]** *feat(webui): connect to existing remote nanobot instances (NAN-157)* — 实现从本地 WebUI 发现并连接远程服务器上已运行的 nanobot 实例，是 WebUI 走向"远程管理面板"的关键一步。[🔗](https://github.com/HKUDS/nanobot/pull/5941)
- **#5985 [OPEN]** *feat(subagent): add session-owned task messaging and cancellation* — 在 #5976 基础上为 subagent 增加会话级消息传递和定向取消，支持向子任务发送追问、检查结果、按需取消单个子任务而不影响父/兄弟任务。[🔗](https://github.com/HKUDS/nanobot/pull/5985)

### 🛠️ TUI 体验修复（多项合并）
- **#5950** *fix(tui): restore saved session history from canonical events* — 修复 `/sessions` 在 #5823 改用 canonical events 后历史显示为空的回归。
- **#5958** *fix(tui): keep unknown terminal themes readable* — 终端未响应 OSC 10/11 时回退到默认前景/背景色，避免浅色终端上文字近乎不可见。
- **#5966** *fix(tui): keep overflow picker choices reachable* — `PickerMenu` 过滤匹配项全部可访问，键盘滚动保持选择。
- **#5981** *fix(tui): accept goal requests during active turns* — `/goal <task>` 支持在活跃 turn 中立即发送。

### 🧹 工程质量提升
- **#5907** *test: consolidate redundant coverage across the test suite* — 跨 34 个测试文件整合冗余测试，**净减 703 行**，生产代码未改动。Python 与 WebUI 测试均参数化。
- **#5993** *refactor(agent): scope tool resources to session cancellation* — 用户停止会话时向其拥有的运行时资源广播取消，覆盖活跃工具、分离的子 agent、shell 进程树、待回复定时器。
- **#5996** *docs: streamline project instructions and engineering constraints* — 重写根 `AGENTS.md`，沉淀根因分析、必要的重构、可达性测试等工程约束。
- **#5943 [OPEN]** *refactor(session): centralize state ownership in SQLite* — **P1 优先级**。用 SQLite 事务替代 JSONL 作为权威存储，运行时状态操作统一走一个有界 worker，避免事件循环上的存储 I/O。

### 🔒 Provider / 安全修复
- **#5938** *fix(providers): preserve optional tool parameters in Responses requests* — **P1**。修复 Responses 工具转换丢弃显式 `strict` 字段导致 MCP 可选过滤器变必填的回归。
- **#5992 [OPEN]** *fix(providers): support scoped proxies across all backends* (NAN-212) — 把 Advanced → Network proxy 暴露给所有 provider，包括原生后端、OAuth、自定义和仅转写 provider。

> 综合判断：今日主要推进了 **TUI 可用性、WebUI 远程管理骨架、Session 持久化重构、Provider 一致性** 四大方向，项目整体向"生产可用"的成熟阶段迈进明显。

---

## 4. 社区热点

按评论数排序：

| 排名 | 编号 | 标题 | 评论数 | 状态 |
|------|------|------|--------|------|
| 1 | [#5903](https://github.com/HKUDS/nanobot/issues/5903) | Feishu: hidden session-checkpoint marker delivered to user after idle compaction | 5 | CLOSED |
| 2 | [#5987](https://github.com/HKUDS/nanobot/issues/5987) | Numbers-only cannot be recognized in TUI debug-mode | 4 | CLOSED |
| 2 | [#3626](https://github.com/HKUDS/nanobot/issues/3626) | Telegram long polling silently hangs | 4 | CLOSED |
| 4 | [#5956](https://github.com/HKUDS/nanobot/issues/5956) | Feishu 无 in-place edit 能力，compaction notice 应可关闭 | 3 | CLOSED |

**诉求分析：**
- **飞书（Feishu）渠道暴露了三连击问题**：checkpoint marker 泄露（#5903）+ 上下文压缩通知硬编码到源频道（#5956） + 无 in-place edit 能力。配合今日合入的 PR **#5780**（停止发送 compaction 通知），飞书用户体验问题正被系统性收尾。
- **TUI debug 模式纯数字无法识别**（#5987）是 VSCode launch 配置下的具体场景，反映 TUI 输入处理在某些调试钩子下存在分支。
- **Telegram 长轮询静默挂起**（#3626）是 5 月的老 issue，今日关闭——可能合入了相关修复或在 PR #5993 的进程取消重构成效中顺带解决。

---

## 5. Bug 与稳定性

### 🔴 P1（高优先级回归）
| 编号 | 描述 | 是否有 fix PR |
|------|------|--------------|
| [#5938](https://github.com/HKUDS/nanobot/pull/5938) | Responses 工具转换丢弃 `strict` 字段，MCP 可选过滤器被强制必填 | ✅ 已合并（#5938） |
| [#5943](https://github.com/HKUDS/nanobot/pull/5943) | Session 共享可变缓存，事件循环 I/O 风险 | 🔄 OPEN（重构中） |

### 🟠 P2（中优先级）
| 编号 | 描述 | 是否有 fix PR |
|------|------|--------------|
| [#5997](https://github.com/HKUDS/nanobot/pull/5997) | **安全**：Linear member access 更新在重授权后可被旧请求回滚 | 🔄 OPEN |
| [#5994](https://github.com/HKUDS/nanobot/pull/5994) | **安全**：`tools=ToolRegistry()` 被默认工具覆盖，可绕过禁用策略 | 🔄 OPEN |
| [#5995](https://github.com/HKUDS/nanobot/pull/5995) | **回归**：late follow-up 消息导致成功恢复被报为失败，可能吞掉最终 WebSocket 回复 | 🔄 OPEN |
| [#5991](https://github.com/HKUDS/nanobot/pull/5991) | WebUI 在迟到的 admission 事件中重开已完成 turn 的时钟 | ✅ 已合并 |
| [#5989](https://github.com/HKUDS/nanobot/pull/5989) | WebUI 完成的 Markdown 末尾残留 `_`（Remend 误判） | ✅ 已合并 |
| [#5907](https://github.com/HKUDS/nanobot/pull/5907) | 测试套件冗余整合 | ✅ 已合并 |
| [#5988](https://github.com/HKUDS/nanobot/pull/5988) | CLI `webui --config` 重复打印 `Using config:` | ✅ 已合并 |
| [#5780](https://github.com/HKUDS/nanobot/pull/5780) | 自动压缩通知刷屏频道 | ✅ 已合并 |

### 🟡 其他已关闭 bug
- [#5564](https://github.com/HKUDS/nanobot/issues/5564) Session 路径遍历（安全问题，已处理）
- [#5348](https://github.com/HKUDS/nanobot/issues/5348) token-usage 时区不一致（约每日 5 小时窗口失败）
- [#3718](https://github.com/HKUDS/nanobot/issues/3718) 流式 cron 提醒消息缺 streamid
- [#5421](https://github.com/HKUDS/nanobot/issues/5421) 闲时压缩是否保留并发 turn 创建的 provider 状态（设计问题已收敛）
- [#3106](https://github.com/HKUDS/nanobot/issues/3106) GPT 模型下定时任务出现"已完成步骤但无法产出最终答复"

> 安全相关 PR（#5997、#5994、#5564）建议维护者优先 review，避免 OPEN 状态停留过长。

---

## 6. 功能请求与路线图信号

| 需求 | 来源 Issue | 对应 PR / 状态 | 入版概率 |
|------|-----------|---------------|---------|
| 本地 WebUI 连接远程 nanobot 实例 | NAN-157 | [#5941](https://github.com/HKUDS/nanobot/pull/5941) OPEN | ⭐⭐⭐⭐⭐ 极高 |
| 使用本地 tokenizer 估算 prompt token（避免 tiktoken 网络等待） | [#3647](https://github.com/HKUDS/nanobot/issues/3647) | 暂无 PR | ⭐⭐⭐ 中等 |
| Subagent 任务消息与定向取消 | NAN-157 衍生 | [#5985](https://github.com/HKUDS/nanobot/pull/5985) OPEN | ⭐⭐⭐⭐⭐ 极高（已实现） |
| Provider 网络代理跨后端覆盖 | NAN-212 | [#5992](https://github.com/HKUDS/nanobot/pull/5992) OPEN | ⭐⭐⭐⭐ 高 |
| 防止同一配置多实例重复 | [#2084](https://github.com/HKUDS/nanobot/issues/2084) | 已关闭（修复已合入，未明示 PR） | — |

**信号解读：** 维护团队当前路线图明显聚焦于「远程化（#5941）+ 多实例一致性 + Provider 一致性 + Session 持久化重构（#5943）」，这与将 nanobot 从单机 CLI 推向"分布式 agent 网关"的战略一致。

---

## 7. 用户反馈摘要

### 痛点集中区
- **飞书用户体验**：飞书用户在多个 issue（#5903、#5956）中反映 checkpoint marker 与压缩通知被错误地以普通消息送达用户。`@shenchaovip-afk` 直接建议在 `NOTIFICATION_AUDIENCES` 增加配置开关。✅ 今日 #5780 已停止发送自动压缩通知。
- **流式输出与 cron 集成**：#3718 反映服务器流式输出 cron 提醒消息没有 streamid，影响 UI 端的状态追踪。
- **GPT 模型稳定性**：`@SamNotAltman`（#3106）反馈使用 gpt 设置定时任务频繁出现"已完成步骤但无法产出最终答复"，而切换到 gml-4.7 正常——可能是特定模型在工具调用边界处理上的兼容性问题。
- **TUI 调试不便**：#5987 反映 TUI debug 模式下纯数字输入无法识别，仅字母字符可用，影响断点/数值调试。

### 满意度信号
- 今日合入的 #5907 测试重构净减 703 行，体现了对开发体验的关注。
- #5996 文档重构将工程约束沉淀到 `.agent/`，降低新贡献者上手成本。
- chengyongru 一人今日贡献了 14+ 个 PR，体现核心维护者高度活跃。

### 设计层面的用户洞察
- `@er-s-an`（#5421）主动以 ASK-FIRST 形式发起设计问题，询问 `compact_idle_session()` 是否应保留并发 turn 创建的 provider 状态——这是高级用户对**会话连续性契约**的关注，值得维护者在重构 Session 层（#5943 SQLite 化）时正面回应。

---

## 8. 待处理积压

### 维护者需关注的 OPEN PR
| 编号 | 优先级 | 模块 | 关注点 |
|------|--------|------|--------|
| [#5943](https://github.com/HKUDS/nanobot/pull/5943) | **P1** | session | SQLite 持久化重构，影响数据一致性，建议优先合入 |
| [#5997](https://github.com/HKUDS/nanobot/pull/5997) | P2 | linear | 安全相关：stale member access 拒绝逻辑 |
| [#5994](https://github.com/HKUDS/nanobot/pull/5994) | P2 | agent | 安全相关：显式空工具注册表应被遵守 |
| [#5995](https://github.com/HKUDS/nanobot/pull/5995) | P2 | agent | 回归：late follow-up 误报失败 |
| [#5992](https://github.com/HKUDS/nanobot/pull/5992) | P2 | providers | 所有后端代理支持（NAN-212） |
| [#5990](https://github.com/HKUDS/nanobot/pull/5990) | — | webui | 流式 Markdown 中 TeX 公式边界（NAN-204） |
| [#5985](https://github.com/HKUDS/nanobot/pull/5985) | P2 | subagent | 子 agent 任务消息与取消 |
| [#5941](https://github.com/HKUDS/nanobot/pull/5941) | — | webui | 远程实例连接（NAN-157） |

> 8 个 OPEN PR 中，2 个为 **安全相关**（#5997、#5994），建议维护者本周内 review。P1 的 Session 重构（#5943）是基础设施级变更，需要较多测试覆盖，建议尽早拉取试验。

### 历史回顾
今日关闭的 11 个 Issue 中有 **6 个创建时间早于 2026-08**，最久远的 #2084 来自 2026-03（半年以上）。说明项目在过去一周内完成了一轮扎实的 backlog 清理，对仓库健康度是显著正面信号。

---

**报告生成时间：2026-10-01** | **数据来源：GitHub REST API** | **仓库：[HKUDS/nanobot](https://github.com/HKUDS/nanobot)**

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目日报
**报告日期：2026-10-01**

---

## 1. 今日速览

Hermes Agent 仓库过去 24 小时保持高度活跃，共产生 **100 条更新记录**（50 条 Issues + 50 条 PRs），新开/活跃 Issues 40 条、关闭 10 条，PR 端有 49 条待合并、1 条已关闭。**维护节奏偏"治理型"**：今日主要工作是清理历史积压问题（包括 2 个 P1 级严重 Bug 的关闭）和推进 Desktop/TUI 端的会话状态一致性（`sweeper:risk-session-state` 标签高频出现）。**无新版本发布**，所有 PRs 仍处于 review/open 阶段，但桌面端的渲染、会话生命周期、TUI 命令路由等多个细分方向均有并行修复 PR 提交，显示项目处在多线并进的稳定维护期。

---

## 2. 版本发布

**无新版本发布。** 当前 main 分支仍处于 v0.21.5+3934 迭代周期（依据 Issue #126524 环境信息推断），未触发新的 release tag。

---

## 3. 项目进展

今日合并/关闭的关键 Issues 中，有两项 **P1 级严重 Bug** 在 24 小时内被关闭，对项目稳定性贡献显著：

| 类型 | Issue | 影响 | 状态 |
|------|-------|------|------|
| 🟥 P1 性能 | [#129281](https://github.com/NousResearch/hermes-agent/issues/129281) | `cron/lifecycle_guard` 正则灾难性回溯导致整个 gateway 进程冻结 | ✅ 已关闭 |
| 🟥 P1 数据完整性 | [#128286](https://github.com/NousResearch/hermes-agent/issues/128286) | `#127760` 变更后压缩流程丢失 clarify 回答记录 | ✅ 已关闭 |
| 🟨 P3 兼容 | [#95529](https://github.com/NousResearch/hermes-agent/issues/95529) | 插件工具集误报 "Unknown toolsets" | ✅ 已关闭 |
| 🟨 P3 性能 | [#125683](https://github.com/NousResearch/hermes-agent/issues/125683) | `plugins.manage list` 在 tree:0 部分克隆下阻塞 40-80s | ✅ 已关闭 |
| 🟨 P3 平台 | [#129924](https://github.com/NousResearch/hermes-agent/issues/129924) | Feishu CardKit v2 入站卡片折叠为 `[Interactive message]` | ✅ 已关闭 |
| 🟨 P3 体验 | [#129813](https://github.com/NousResearch/hermes-agent/issues/129813) | Desktop URL scheme 黑名单（obsidian:// 等） | ✅ 已关闭 |
| 🟨 P2 体验 | [#107800](https://github.com/NousResearch/hermes-agent/issues/107800) | Desktop `/prompt` 被劫持、`/compose` 静默丢弃 | ✅ 已关闭 |
| ⬜ 测试 | [#129920](https://github.com/NousResearch/hermes-agent/issues/129920) | 无效测试 issue | ✅ 已关闭（invalid） |

**整体判断**：项目向前迈进稳健——尤其是 P1 灾难性回溯 Bug 的快速收敛，体现了 sweeper 机制（`sweeper:risk-session-state` / `risk-message-delivery`）在治理回归类问题上的有效性。

---

## 4. 社区热点

按评论数排序的 Top 5 Issues 显示，社区关注点高度集中在 **桌面端体验**、**TUI 设计语言** 和 **平台集成扩展** 三个方向：

| 排名 | Issue | 关注 | 社区诉求解读 |
|------|-------|------|--------------|
| 🥇 | [#126524](https://github.com/NousResearch/hermes-agent/issues/126524) — Desktop 助手回复渲染两次（**13 评论**） | 桌面端"幽灵渲染"现象，影响用户对系统可靠性的信心 | 这是社区最关心的可用性问题，叠加 #127665、#128286 形成连续讨论链 |
| 🥈 | [#99773](https://github.com/NousResearch/hermes-agent/issues/99773) — TUI attention budget（**10 评论**） | TUI 信息密度与视觉权重设计 | 作者主动重申：已不再是"模仿 OMP"，而是建立"最小注意力成本"的设计不变量 |
| 🥉 | [#45935](https://github.com/NousResearch/hermes-agent/issues/45935) — WhatsApp Cloud API 模板（**8 评论，8 👍**） | 24 小时窗口外的商业再触达能力 | 来自真实生产场景的"需求信号"：engine-machining 业务依赖 WhatsApp 模板营销 |
| 4 | [#126634](https://github.com/NousResearch/hermes-agent/issues/126634) — `check_computer_use_requirements` 长进程失败（**5 评论**） | 不可诊断的环境检查失败 | 暴露了 Hermes 在持久化进程中的环境快照陈旧问题 |
| 5 | [#97115](https://github.com/NousResearch/hermes-agent/issues/97115) — `tool_executor.py` 静默丢弃 schema 参数（**3 评论**） | 工具调用可靠性的设计缺陷 | 涉及 session_search/profile、memory/new_text、drive_preview/full 三个实际工具 |

---

## 5. Bug 与稳定性

按严重程度倒序排列今日报告的活跃 Bug：

### 🔴 P1（严重）
- **[#129281](https://github.com/NousResearch/hermes-agent/issues/129281)** `cron/lifecycle_guard` 正则灾难性回溯冻结 gateway
  - 状态：✅ 已关闭
  - 根因：`_PROFILE_FLAG_LIFECYCLE_PATTERN` 对每条 terminal 调用文本执行搜索，缺乏 ReDoS 防护
  - 影响：整个 gateway 进程冻结

- **[#128286](https://github.com/NousResearch/hermes-agent/issues/128286)** 压缩流程丢失 clarify 回答
  - 状态：✅ 已关闭
  - 根因：`#127760` 引入 `status` 字段，旧数据无 `status` 导致 `_sum_clarify` 摘要异常

### 🟧 P2（重要）
- **[#126524](https://github.com/NousResearch/hermes-agent/issues/126524)** Desktop 助手回复渲染两次（13 评论，🔥 持续热议）— 尚无 fix PR
- **[#127665](https://github.com/NousResearch/hermes-agent/issues/127665)** Desktop 单条回复渲染两次的另一种折叠路径 — 尚无 fix PR
- **[#126634](https://github.com/NousResearch/hermes-agent/issues/126634)** `check_computer_use_requirements` 长进程返回 False — 尚无 fix PR
- **[#113222](https://github.com/NousResearch/hermes-agent/issues/113222)** async `delegate_task` 批次子任务完成但永不报完成 — 尚无 fix PR
- **[#97115](https://github.com/NousResearch/hermes-agent/issues/97115)** `tool_executor.py` 三个工具的 schema 参数被静默丢弃 — 尚无 fix PR
- **[#87689](https://github.com/NousResearch/hermes-agent/issues/87689)** `hermes config set` 括号索引语法静默写入垃圾键 — 尚无 fix PR
- **[#127105](https://github.com/NousResearch/hermes-agent/issues/127105)** 后台进程通知可能以 user 消息形式投递（#52694 审计回归） — 关联 PR #127338 已关闭 unmerged
- **[#129531](https://github.com/NousResearch/hermes-agent/issues/129531)** Windows Desktop `hermes://` deep link 投递失败（`#128330` 回归） — 尚无 fix PR
- **[#126305](https://github.com/NousResearch/hermes-agent/issues/126305)** DeepSeek 压缩摘要被静默截断至 8192 tokens — 尚无 fix PR

### 🟨 P3（一般）
- **[#92441](https://github.com/NousResearch/hermes-agent/issues/92441)** **U+200C (ZWNJ) 被误判为注入标记，波及所有波斯语/阿拉伯语/希伯来语文件** ⚠️ 国际化严重缺陷 — 尚无 fix PR
- **[#112106](https://github.com/NousResearch/hermes-agent/issues/112106)** Honcho 客户端获取陈旧 bearer token，5 秒内 82/128 次 401 — 尚无 fix PR
- **[#129112](https://github.com/NousResearch/hermes-agent/issues/129112)** Windows Desktop 预览窗格 Tab 缺关闭控件（回归） — 尚无 fix PR
- **[#124076](https://github.com/NousResearch/hermes-agent/issues/124076)** "Stale systemd unit" 假阳性警告 — 尚无 fix PR（duplicate）

**统计**：今日新增/活跃 40 条 Issues 中，**P1×2、P2×约 10、P3×约 25+**。已关闭 10 条，但**仍有大量 P2 级回归问题处于"无 fix PR"状态**，特别是桌面端双重渲染问题（#126524 + #127665），需要维护者重点关注。

---

## 6. 功能请求与路线图信号

### 高信号（👍 数或实用性强）

- **[#45935](https://github.com/NousResearch/hermes-agent/issues/45935) WhatsApp Cloud API 模板支持**（👍 8）— 真实生产场景的需求信号（engine-machining 业务），且已有官方明确"等待需求信号"声明，**进入下一版本的概率高**。
- **[#99773](https://github.com/NousResearch/hermes-agent/issues/99773) TUI attention budget + first-paint cleanup** — 作者已自我收敛为"设计不变量"陈述，更可能是内部 roadmap 引用而非新功能请求。

### 中等信号

- **[#116452](https://github.com/NousResearch/hermes-agent/issues/116452) Kanban 预分派/预创建插件 hook** — 来自运行 unattended dispatcher 的运营方，已自带 9 个确定性守卫作为核心补丁，**整合到主干的诉求强烈**。
- **[#97474](https://github.com/NousResearch/hermes-agent/issues/97474) Google AI Studio 原生图像生成后端** — 减少对 FAL.ai / OpenRouter 的依赖。
- **[#106524](https://github.com/NousResearch/hermes-agent/issues/106524) 折叠前置执行轨迹为"Completed N steps in Xm Ys"统一节点** — 优化 agentic 工作流的可读性。
- **[#129827](https://github.com/NousResearch/hermes-agent/issues/129827) `hermes profile list` 输出格式改进** — 低风险高 ROI 的 CLI 体验改进。
- **[#126421](https://github.com/NousResearch/hermes-agent/issues/126421) Browser-vault 工具说明不应阻断用户自定义密码管理** — 互操作性问题。
- **[#129813](https://github.com/NousResearch/hermes-agent/issues/129813) Desktop URL scheme allowlist** — ✅ 已关闭，预计快速合并。

### 重构信号

- **[#9181](https://github.com/NousResearch/hermes-agent/issues/9181) 拆分 base vs effective context in overflow recovery**（👍 1）— 架构层面。
- **[#125186](https://github.com/NousResearch/hermes-agent/issues/125186) 拆解 `agent/auxiliary_client.py`（8,251 行）** — 8 个关注点混合的重构请求，需 `needs-decision`。

---

## 7. 用户反馈摘要

从 Issues 评论与上下文中提炼的真实用户痛点：

1. **桌面端"幽灵渲染"严重侵蚀信任** — #126524（13 评论）显示用户在 macOS 客户端上看到完全相同的助手回复连续出现两次，但数据库仅一行、会话列表也双重渲染。这不只是 UI bug，更是用户怀疑"AI 是不是真的说了两遍"的根本性问题。

2. **i18n 失败造成完整语言群体被屏蔽** — #92441 中波斯语/阿拉伯语/希伯来语用户报告任何含 ZWNJ (U+200C) 的文件被静默拦截。这是标准正字字符，却被当作注入标记，**严重程度高于普通 P3**。

3. **生产环境的工具集成失败** — #112106（Honcho OAuth 5 秒内 82/128 次 401）和 #126634（`check_computer_use_requirements` 不可诊断的失败）反映出长生命周期进程中的"环境快照陈旧"是 Hermes 当前的核心痛点之一。

4. **CLI 设计反直觉** — #87689（bracket index 写入垃圾键）和 #129827（`profile list` 表头未对齐）表明 CLI 的输入验证与输出格式化需要一致性打磨。

5. **WhatsApp 商业再触达是"明确的缺失功能"** — #45935 评论中运营方明确说明：没有模板支持就无法开展标准的 24h 窗口外营销。

6. **Patch-as-Workflow 现象** — #116452（Kanban 9 个守卫作为核心补丁）和 #125683（plugins.manage 性能补丁）反映出**用户在等不及主干合并时已自建补丁**，这是健康但需要警惕的信号。

---

## 8. 待处理积压提醒

以下 Issues/PRs 已开放较长时间但仍处于待处理状态，建议维护者优先关注：

| Issue/PR | 标题 | 创建日期 | 备注 |
|----------|------|---------|------|
| [#9181](https://github.com/NousResearch/hermes-agent/issues/9181) | 拆分 base vs effective context in overflow recovery | **2026-04-13** | 已有 **5 个多月**未推进，架构级重构 |
| [#53007](https://github.com/NousResearch/hermes-agent/pull/53007) | feat: live agent execution-trace waterfall | 2026-06-26 | 视觉化功能 PR，pending 状态 |
| [#125186](https://github.com/NousResearch/hermes-agent/issues/125186) | 拆解 `agent/auxiliary_client.py`（8,251 行） | 2026-09-27 | 标记 `needs-decision`，需架构决策 |
| [#125027](https://github.com/NousResearch/hermes-agent/pull/125027) | CLI Ownership Refactor

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目日报

**日期**：2026-10-01
**仓库**：github.com/sipeed/picoclaw

---

## 1. 今日速览

PicoClaw 过去 24 小时整体活跃度中等偏上，PR 流转 6 条但 Issues 端无更新，呈现"以代码提交为主、用户反馈通道冷清"的状态。当日 3 条 PR 关闭（含 2 项增强、1 项 Bug 修复），3 条 PR 待合并，分别覆盖 Web UI、Agent 容错、DeltaChat 重构三大方向。值得注意的是 2 条待合并 PR（#3413、#3412）同属一位作者 racso2609，且 #3413 显式标注为更大规划 #3406 的子任务，显示该贡献者正在主导 Web UI 与 Agent 用户体验的迭代线。无新版本发布。

---

## 2. 版本发布

无。

---

## 3. 项目进展

当日关闭/合并的 3 条 PR 推进了若干能力边界：

- **#1349 [已关闭]** —— QQ 渠道附件解析能力补齐 ([链接](https://github.com/sipeed/picoclaw/pull/1349))
  作者 aishannon 增强 QQ Channel：支持解析频道内置表情结构（emoji）、接收语音/图片/视频/文件消息、回复时上传本地附件，并实现 Markdown 回复优先、降级到普通消息的回退策略。该 PR 显著扩展了 PicoClaw 在 QQ 场景下的双向媒体交互能力。

- **#3313 [已关闭]** —— 修复 `customAllowPatterns` 被默认拒绝规则覆盖的 Bug ([链接](https://github.com/sipeed/picoclaw/pull/3313))
  作者 j-v 指出 `guardCommand` 中默认拒绝模式优先级错误，导致用户显式允许的 `git push` 等命令仍被拦截。该 PR 属于重要的安全语义修复，提升了 Agent 工具权限配置的可用性。

- **#423 [已关闭]** —— 多 Agent 协作框架（共享上下文池 / Handoff / 发现） ([链接](https://github.com/sipeed/picoclaw/pull/423))
  作者 Leeaandrob 的 WIP 提案，基于已合并的 #213（provider protocol 重构）与 #131（模型 fallback + 多 Agent 路由），新增 Blackboard 共享上下文、Agent handoff 与发现工具。尽管标为 WIP 关闭，但该方向明确为后续多 Agent 体系奠基。

整体来看，PicoClaw 当日在**渠道能力扩展**（QQ 附件）、**Agent 沙箱安全语义**、**多 Agent 架构储备**三方面均向前推进。

---

## 4. 社区热点

由于当日 Issues 数为 0，所有 PR 的评论与反应数均为 `undefined`/`0`，量化意义上的"讨论热点"缺位。从 PR 主题热度看，可关注的隐性热点：

- **Web UI 全局会话侧边栏 #3413** ([链接](https://github.com/sipeed/picoclaw/pull/3413)) —— 当前 Web UI 只能看到 `pico` 会话（来自 header 下拉），#3413 拟让后端发现所有渠道的会话并进行分类，是规划 #3406 的 Part 2-A，社区隐含诉求是"统一多渠道会话视图"。
- **Agent 失败回合可见性 #3412** ([链接](https://github.com/sipeed/picoclaw/pull/3412)) —— 失败回合产生的错误通知在 `message` 工具、流式通道、错误恢复路径三处被吞掉，用户只能面对"沉默"，是 Agent UX 上的硬伤。

---

## 5. Bug 与稳定性

| 严重度 | 标题 | 状态 | 修复 PR |
|---|---|---|---|
| 高 | Agent 失败回合无任何反馈给用户（错误被吞） | 已有 fix PR | [#3412](https://github.com/sipeed/picoclaw/pull/3412)（待合并） |
| 中 | `customAllowPatterns` 不生效，权限配置形同虚设 | 已修复（已关闭 PR） | [#3313](https://github.com/sipeed/picoclaw/pull/3313) |

#3412 描述的错误吞没链路（`message` 工具压制 / `PublishResp` 路径丢失 / 错误恢复期缺位）属于影响用户信任的可靠性问题，建议优先合并。#3313 的修复虽然定位为"权限配置 Bug"，但本质影响 Agent 在受限环境中的可执行命令范围，潜在影响面较大，关闭后建议尽快纳入补丁发布。

---

## 6. 功能请求与路线图信号

虽然没有显式的功能请求 Issue，但从 PR 主题可解读出清晰的路线图信号：

- **多渠道会话统一视图** —— #3413 明确为更大规划 #3406 的 Part 2-A，暗示后续还有 Part 2-B/2-C 等子任务，构成 Web UI 多渠道化路线图。
- **多 Agent 协作框架** —— #423 虽以 WIP 关闭，但作者明确把它定位为 #213 + #131 之上的下一层基础设施（Blackboard + Handoff + Discovery），是项目向"agent 群体智能"演进的明确信号。
- **DeltaChat 集成重构** —— #3222 删除遗留特性、移除密码邮箱配置、改用 jsonrpc 管理 secret，是安全最佳实践的体现，可能预示后续其他 channel 也会按相同模式改造。

下一版本若纳入 #3412、#3413、#3222，将形成"Agent 体验 + Web 多渠道 + DeltaChat 重构"的三角组合。

---

## 7. 用户反馈摘要

由于当日 Issues 端零更新，直接用户反馈缺失。可从 PR 描述中提取的隐含用户痛点：

- **#3313**：用户尝试让 Agent 执行 `git push`，按文档添加进允许列表却失败 —— 痛点是"配置按文档做了但不工作"，反映权限文档与实际行为存在偏差。
- **#3412**：用户面对 Agent 失败时"看着沉默"，没有任何错误提示 —— 痛点是"无法判断 Agent 是仍在思考还是已经失败"，影响调试与生产可用性。
- **#3413**：Web UI 仅暴露 `pico` 会话 —— 痛点是"其他渠道的会话无法在 Web 中查看"，限制了 Web UI 作为统一管控面板的潜力。

满意信号方面：QQ 渠道的多媒体支持（#1349）显示 QQ 生态用户在持续推动能力补齐，社区对该渠道的投入意愿较高。

---

## 8. 待处理积压

| 编号 | 类型 | 标题 | 创建时间 | 状态 | 链接 |
|---|---|---|---|---|---|
| #3222 | refactor | refactor(deltachat): cleanup implementation -200LOC | 2026-07-03 | 仍 OPEN（~3 个月） | [#3222](https://github.com/sipeed/picoclaw/pull/3222) |
| #423 | enhancement | WIP: 多 Agent 协作框架 | 2026-02-18 | 已 CLOSED，但 WIP 状态（基础架构级） | [#423](https://github.com/sipeed/picoclaw/pull/423) |

**提醒维护者**：
- **#3222** 作为 -200 LOC 级别的 DeltaChat 重构，自 2026-07-03 起长期 OPEN，建议维护者确认合并阻塞点（兼容性测试？依赖 PR？），避免在重构窗口期内与上游漂移过大。
- **#423** 虽已关闭，但承载了项目最重要的多 Agent 协作愿景，建议维护者明确后续承接路径（重开新 PR？还是拆分落地？），避免社区贡献者方向迷失。

---

**整体健康度评估**：🟡 中等
代码提交活跃，但 Issues 端沉寂、PR 反应与评论普遍为 0，社区参与深度有限。建议维护者主动在 #3412、#3413 等关键 UX 修复 PR 上发出 review 邀请，以提升合并速度与社区信号。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目日报
**日期：2026-10-01** | 数据来源：GitHub (nanocoai/nanoclaw)

---

## 1. 今日速览

NanoClaw 在过去 24 小时呈现"高活跃度、低交互量"的典型仓库工程节奏：共产生 15 条 PR 更新、1 条 Issue 关闭、0 个新版本发布。提交主要来自 4 位核心贡献者（glifocat、barnuri、antonio-antuan、foxsky），覆盖 4 大方向——**更新机制硬化（update-nanoclaw）**、**Telegram 渠道修复**、**Provider 扩展（Iron/OpenCode/Copilot）**、**Skill 与运行时扩展点**。无新版本发布意味着当前所有变更仍处于代码评审阶段，尚未对用户可见。整体项目健康度良好，但所有 PR 与 Issue 的点赞/评论数均为 0，社区交互密度偏低值得关注。

---

## 2. 版本发布

本周期无新版本发布。

---

## 3. 项目进展

今日 **2 条 PR 被关闭**（详见下方），均为 glifocat 提交，集中在 `/update-nanoclaw` 流程的可靠性硬化，属于同一系列变更：

| PR | 标题 | 影响 |
|---|---|---|
| [#3962](https://github.com/qwibitai/nanoclaw/pull/3962) | fix(update): refuse cutover when the service liveness probe itself fails | 修复了旧主机仍在运行却被误报为 `complete` 的关键缺陷，确保 liveness probe 自身失败时拒绝切换 |
| [#3974](https://github.com/qwibitai/nanoclaw/pull/3974) | fix(container): refresh agent-runner lockfile to clear transitive advisories | 清理 `agent-runner` 中 `@modelcontextprotocol/sdk 1.29.0` 引入的全部 `bun audit` 告警（hono、@hono 等传递依赖），保留版本范围内安全升级 |

**推进评估**：更新机制相关修复是本周期最显著的"实质推进"——#3962 与今日关闭的 [#3961 Issue](https://github.com/qwibitai/nanoclaw/issues/3961) 形成完整闭环，从"问题报告→代码修复→Issue 关闭"链路完整。除此之外，仓库还积压了 [#3956](https://github.com/qwibitai/nanoclaw/pull/3956)（rollback 停止 nohup 主机并排空容器），预示该方向仍在持续加固。

---

## 4. 社区热点

⚠️ **数据观察**：本期全部 15 条 PR 与 1 条 Issue 的评论数（comments）和点赞数（👍）均为 0。仓库目前处于"提交密集但讨论稀薄"的状态，尚未形成高互动热点。

按 **变更复杂度与潜在影响面** 排序的关注条目：

1. **[#3966](https://github.com/qwibitai/nanoclaw/pull/3966)** — `feat(iron): allow a keyless model on this machine over plain HTTP`
   让本机无 Key 模型可通过 `http://host.docker.internal:<port>/v1` 直接调用 Iron，是面向本地开发者的关键能力。
2. **[#3976](https://github.com/qwibitai/nanoclaw/pull/3976)** — `feat(skills): add /add-copilot GitHub Copilot SDK provider`
   新增 GitHub Copilot 作为上游可用的 provider skill，并把设备登录令牌保留在凭据网关，避免环境变量/容器状态泄露。
3. **[#3975](https://github.com/qwibitai/nanoclaw/pull/3975)** — `feat: add generic runner and host extension callbacks`
   引入 5 个"惰性"扩展回调钩子，为 provider 提供 skill 触达不到的接入点；无注册方时行为不变，向后兼容。

---

## 5. Bug 与稳定性

按严重程度排列：

### 🔴 高严重度（影响升级/部署核心路径）

- **[#3961 Issue](https://github.com/qwibitai/nanoclaw/issues/3961)** — `/update-nanoclaw` 在 `systemctl --user` 无法连接 bus 时报 `phase: complete` 但未真正重启主机
  - 影响 v2.4.0 (143db6c9) 及 main (63082563)，Linux 平台
  - 状态：✅ **已关闭**（由今日关闭的 [#3962](https://github.com/qwibitai/nanoclaw/pull/3962) 修复）

- **[#3956](https://github.com/qwibitai/nanoclaw/pull/3956)** — `fix(update): rollback stops the live nohup host and drains agent containers`
  - 影响 nohup 模式安装的升级流程，cutover 前未真正停止旧主机、未排空 agent 容器
  - 状态：🟡 **PR 待合并**

### 🟡 中严重度（渠道可用性）

Telegram 渠道一次性出现 **4 个相关修复**，全部来自 antonio-antuan：

- **[#3971](https://github.com/qwibitai/nanoclaw/pull/3971)** — 论坛主题（topics）应路由为独立线程，当前所有 topic 共享一个 session
- **[#3970](https://github.com/qwibitai/nanoclaw/pull/3970)** — 路由将入站消息 id 存储为 `<msg id>:<agent group id>`，导致 reaction/edit 用了错误的 id
- **[#3973](https://github.com/qwibitai/nanoclaw/pull/3973)** — Telegram 解析 MarkdownV2 实体失败时整条消息被丢弃，应降级为纯文本重发
- **[#3972](https://github.com/qwibitai/nanoclaw/pull/3972)** — Telegram 服务消息（topic hide/pin/member join 等）被转发为空消息，引发 agent 误回复

### 🟢 低严重度（依赖安全与代理场景）

- **[#3974](https://github.com/qwibitai/nanoclaw/pull/3974)** — agent-runner lockfile 传递依赖告警 ✅ 已关闭
- **[#3965](https://github.com/qwibitai/nanoclaw/pull/3965)** — OpenCode 在 Iron 下提示了无法访问的 URL，setup 应在 prompt 阶段校验
- **[#3969](https://github.com/qwibitai/nanoclaw/pull/3969)** — Iron Proxy 收到 git 请求时只回 407 未带 `Proxy-Authenticate`，导致 libcurl 不发凭据、永远失败

---

## 6. 功能请求与路线图信号

本期没有来自外部用户的"功能请求类 Issue"（唯一 Issue 为 bug 报告）。路线图信号需从 PR 标题与提交人活跃度推断：

| 信号方向 | 代表 PR | 解读 |
|---|---|---|
| **Provider 生态扩张** | [#3966](https://github.com/qwibitai/nanoclaw/pull/3966)、[#3964](https://github.com/qwibitai/nanoclaw/pull/3964)、[#3976](https://github.com/qwibitai/nanoclaw/pull/3976) | Iron 本机无 Key 模型、host:port 端点声明、GitHub Copilot SDK 三件套，构成"统一 Provider 网关"的明显路线图 |
| **Skill 系统成熟化** | [#3976](https://github.com/qwibitai/nanoclaw/pull/3976)、[#3928](https://github.com/qwibitai/nanoclaw/pull/3928) | `/add-copilot`、`/contribute-upstream` 表明 NanoClaw 正把"开箱即用的运维 skill"作为差异化能力建设 |
| **可扩展架构** | [#3975](https://github.com/qwibitai/nanoclaw/pull/3975) | 通用 runner + 5 个 host 扩展回调意味着核心正在从"硬编码生命周期"转向"插件化生命周期" |
| **网络环境兼容** | [#3901](https://github.com/qwibitai/nanoclaw/pull/3901)、[#3969](https://github.com/qwibitai/nanoclaw/pull/3969) | HTTPS 代理、Iron Proxy 凭据挑战，针对企业内网/受限网络用户 |

---

## 7. 用户反馈摘要

**数据局限性提示**：本期 1 条 Issue、15 条 PR 的评论数均为 0，无法从用户直接反馈中提炼观点。可从 Issue 内容侧面还原的真实痛点：

- **升级流程"假成功"是用户核心痛点**（[#3961](https://github.com/qwibitai/nanoclaw/issues/3961)）：用户期望 `/update-nanoclaw` 报 `complete` 时服务确实已切到新版本，但 `systemctl --user` 在某些 Linux 环境无法连接 bus，导致 liveness probe 误判、升级无感失败。该痛点已被 #3962 闭环解决。

**判断**：本周期缺乏外部用户声音，提示维护团队可能需要主动在 Issue/PR 模板或社区频道引导反馈。

---

## 8. 待处理积压

按"开放时长 + 影响面"标注需要维护者关注的长尾 PR：

| PR | 标题 | 创建日期 | 开放天数 | 备注 |
|---|---|---|---|---|
| [#3901](https://github.com/qwibitai/nanoclaw/pull/3901) | fix(setup): let the host service reach the internet through an HTTPS proxy | 2026-09-25 | **6 天** | 本期最老的开放 PR，企业内网用户刚需，建议核心团队优先 review |
| [#3928](https://github.com/qwibitai/nanoclaw/pull/3928) | feat(skills): add /contribute-upstream operational skill | 2026-09-26 | 5 天 | 与"用户贡献生态"战略相关，建议同期评审 |
| [#3956](https://github.com/qwibitai/nanoclaw/pull/3956) | fix(update): rollback stops the live nohup host | 2026-09-28 | 3 天 | 与已关闭的 #3962 互补，建议与 #3962 联动回归 |

**提醒**：当前 13 条开放 PR 中，4 条来自 antonio-antuan（Telegram 修复），呈"单作者批量提交"特征，建议维护者统一 review 以避免合并冲突。

---

*报告生成依据：GitHub Issues/PRs 公开数据，所有链接指向 nanocoai/nanoclaw 仓库。*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目日报
**日期：2026-10-01**

---

## 1. 今日速览

NullClaw 今日整体活跃度处于**低位**水平。过去 24 小时内社区活动极为有限：无新 Issue、无新 Release、无 PR 合并或关闭，唯一动态是 1 条新创建且仍处于 Open 状态的 Pull Request（#1016）。项目维护节奏呈现"静默期"特征，可能处于版本间歇期或开发者集中处理其他事务的阶段。整体健康度尚可，无紧急问题积压，但社区参与度有明显降温信号。

---

## 2. 版本发布

**无新版本发布。** 过去 24 小时未检测到任何 Release 标签更新。建议关注仓库的 [Releases 页面](https://github.com/nullclaw/nullclaw/releases) 获取最新版本动态。

---

## 3. 项目进展

今日**无 PR 合并或关闭**，项目主线未获得新的代码贡献合并。

**新增待合并 PR（1 条）：**
- [PR #1016](https://github.com/nullclaw/nullclaw/pull/1016) — `feat(providers): add Cheaper Inference as an OpenAI-compatible gateway`
  - 作者：@aiapienthusiast
  - 状态：Open，创建于 2026-09-30
  - 内容摘要：参照 PR #990（Eden AI）的集成模式，将 Cheaper Inference 接入为 OpenAI 兼容网关提供商。用户可通过单一 API Key 访问多家厂商模型。

**进展评估：** 项目今日在代码层面**无实质推进**，仅完成一项功能提案的提交。维持原有待审状态。

---

## 4. 社区热点

今日社区讨论几乎为零，仅有 1 条 PR 处于待关注状态：

- 🔥 [PR #1016](https://github.com/nullclaw/nullclaw/pull/1016) — Cheaper Inference 网关集成提案
  - 评论数：0 | 👍 反应数：0
  - 热度评分：⭐☆☆☆☆（1/10）

**诉求分析：** 该 PR 反映出社区贡献者希望扩展项目的 LLM 提供商生态，降低用户使用成本（"Cheaper Inference" 字面强调成本优势），并遵循现有 Eden AI 集成的标准化模式。这与项目此前建立的多提供商网关战略一脉相承，体现社区在持续完善模型接入层的能力矩阵。

---

## 5. Bug 与稳定性

**今日无 Bug 报告。** 过去 24 小时内：
- 未发现崩溃、回归或稳定性相关 Issue
- 未出现与 PR 相关的回归讨论
- 无新提交的修复性 PR

当前**无已知未修复的紧急缺陷**，项目稳定性维持稳定状态。建议保持对已有 Issue 列表的定期巡检，以防止漏检历史遗留问题。

---

## 6. 功能请求与路线图信号

**今日唯一信号来自 PR #1016：**

| 提案方向 | 提议内容 | 落地概率评估 |
|---------|---------|-------------|
| 多 LLM 厂商聚合网关 | 集成 Cheaper Inference，扩展 OpenAI 兼容网关 | **高** — 沿用 #990 Eden AI 的成熟模式，集成成本低、风险可控 |

**路线图推测：**
- 项目正在系统化建设 **LLM 网关/聚合层**，已先后纳入 Eden AI、Cheaper Inference 等多家第三方网关
- 未来可能继续沿"OpenAI 兼容网关"模式扩展，形成**厂商无关的统一接入抽象**
- 若 PR #1016 被合并，建议关注测试覆盖率与配置文档的同步更新

---

## 7. 用户反馈摘要

由于今日 Issues 互动为零，**暂无用户反馈可供提炼**。以下为历史可参考线索（非今日）：
- 此前 PR #990（Eden AI 集成）建立的成功模式正在被复用，说明社区对**统一多厂商接入**的体验反馈积极
- 缺乏互动数据意味着今日无法识别新出现的用户痛点或场景诉求

---

## 8. 待处理积压

| 类别 | 编号 | 标题 | 状态 | 风险提示 |
|------|------|------|------|---------|
| 待合并 PR | [#1016](https://github.com/nullclaw/nullclaw/pull/1016) | feat(providers): add Cheaper Inference as OpenAI-compatible gateway | Open（0 评论、0 反应） | ⚠️ **冷启动风险** — 新提交 24+ 小时无任何 reviewer 响应，建议维护者尽快分配 reviewer |

**提醒维护者：**
- PR #1016 已创建逾 24 小时仍无评审互动，建议安排 reviewer 介入，避免贡献者积极性受挫
- 建议在仓库 README 或 Contributing 指南中明确"新 LLM 网关接入"的评审 checklist，降低后续类似 PR 的沟通成本
- 当前积压量极低（仅 1 条），是**清理历史 PR 或启动新版本规划**的良好时机窗口

---

## 📊 数据总览

| 指标 | 数值 | 健康度 |
|------|------|--------|
| Issues 新增 | 0 | 🟢 |
| Issues 关闭 | 0 | ⚪ |
| PR 新增 | 1 | 🟡 |
| PR 合并 | 0 | ⚪ |
| Release 发布 | 0 | ⚪ |
| 社区互动总量 | 0 评论 / 0 反应 | 🔴 偏低 |

**整体评级：🟡 静默观望期** — 项目运转正常但社区活力不足，建议维护者主动 ping 待办事项或发布路线图更新以激活社区参与。

---

*报告生成基于 2026-10-01 当日 GitHub 数据快照，数据源：[nullclaw/nullclaw](https://github.com/nullclaw/nullclaw)*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目日报

**日期：2026-10-01**
**项目：nearai/ironclaw**
**数据周期：过去 24 小时**

---

## 1. 今日速览

IronClaw 项目今日活跃度极低，处于**维护静默期**。过去 24 小时内无任何 Issue 新开、活跃或关闭，PR 仅有 1 条且为 CI 自动化机器人提交的代码知识图谱刷新任务，无新版本发布。整体来看，项目处于常规自动化维护状态，无显著的功能迭代或社区互动信号。建议维护者关注积压的自动化 PR 是否需要清理。

---

## 2. 版本发布

⚠️ 今日无新版本发布，本节略。

---

## 3. 项目进展

**今日无 PR 被合并或关闭**，项目代码主干在功能层面无推进。

唯一在更新的 PR 仍处于 `OPEN` 状态：

- **[PR #7988](https://github.com/nearai/ironclaw/pull/7988)** `chore(agents): refresh codebase knowledge graph`
  - 类型：CI/Infrastructure
  - 贡献者：`ironclaw-ci[bot]`（自动化）
  - 大小：XS | 风险：低
  - 创建于 2026-08-29，更新于 2026-10-01
  - 状态：待合并
  - 内容：由夜间 `Codebase Graph Refresh` workflow 自动生成的代码库记忆快照刷新，常规合并即可

📊 **推进评估：** 功能层面进展为 0，仅基础设施层面的常规刷新。距上一次实质性的功能 PR 合并已有较长间隔，建议关注社区动能的恢复。

---

## 4. 社区热点

今日社区讨论接近停滞。**唯一活跃条目**：

- **[PR #7988](https://github.com/nearai/ironclaw/pull/7988)** – 评论数 0，👍 0
  - 该 PR 为纯自动化任务，无社区互动属正常现象。但其**更新于今日**而评论为零，意味着该项目近期缺乏用户参与技术评审的活跃度。

**诉求分析：** 暂无来自真实用户的讨论诉求。社区参与度的持续低位值得维护者关注——可能需要通过发布路线图、开启 Discussion 讨论或发布新功能来重新激活社区。

---

## 5. Bug 与稳定性

✅ **今日无 Bug 报告、无崩溃报告、无回归问题。**

由于 Issues 通道在过去 24 小时内完全沉默，无新增稳定性风险信号。但这也意味着任何潜在的稳定性问题可能尚未被社区发现或报告，建议关注未来 7 天内的 Issues 趋势以确认是否为静默期而非报告真空。

---

## 6. 功能请求与路线图信号

⚠️ **今日无新功能请求**。

由于缺失 Issue 数据，无法从用户侧捕捉路线图信号。从仓库治理信号看：
- `ironclaw-ci[bot]` 的"代码库知识图谱刷新"机制表明项目正在维护某种**智能体记忆 / 代码上下文索引**能力，间接印证 IronClaw 在 AI Agent 自我理解与检索方向上的持续投入。

---

## 7. 用户反馈摘要

⚠️ **今日无 Issue 评论数据**，无法提炼真实用户痛点与使用场景。

由于社区输入完全为零，本节暂留空。建议：
- 若长期（>7 天）保持此状态，维护者应在仓库发布状态更新或主动发起社区话题
- 回顾历史 Issue 中未解决的痛点，主动推进

---

## 8. 待处理积压

| 编号 | 类型 | 标题 | 创建时间 | 状态 | 优先级建议 |
|------|------|------|---------|------|-----------|
| [#7988](https://github.com/nearai/ironclaw/pull/7988) | PR | chore(agents): refresh codebase knowledge graph | 2026-08-29 | OPEN（等待合并） | 🟢 低 – 自动化基础设施 PR，风险极低，建议尽快合并以保持知识图谱同步 |

📌 **维护者关注提醒：**
- PR #7988 已开启 33 天仍待合并，虽为自动化任务，但持续的"待合并自动化 PR 堆积"可能掩盖其他真实的人为贡献。建议建立自动化 PR 的快速合并通道（如 auto-merge workflow）。
- 建议核查 Issue/PR 筛选器是否正常运行，确认零活跃状态确为真实数据而非数据采集异常。

---

## 📈 项目健康度总评

| 维度 | 评分 | 说明 |
|------|------|------|
| 代码活跃度 | ⭐☆☆☆☆ | 无功能 PR 合并，仅自动化维护 |
| 社区参与 | ⭐☆☆☆☆ | Issues/PRs 均无用户互动 |
| 稳定性 | ⭐⭐⭐⭐☆ | 无 Bug 报告，但需警惕静默期风险 |
| 发布节奏 | ⭐☆☆☆☆ | 今日无版本发布 |
| 待办管理 | ⭐⭐⭐☆☆ | 有 1 条长期待合并的自动化 PR |

**综合评估：** 🟡 项目处于**低活跃维护期**，暂无衰退迹象但需关注社区动能。建议维护者在后续周期主动释放进展信号（如发布计划、新功能预告）以维持社区活跃度。

---

*报告生成时间：2026-10-01 | 数据来源：GitHub API | 报告基于过去 24 小时窗口*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目日报 · 2026-10-01

> 数据周期：2026-09-30 滚动 24 小时 ｜ 数据源：GitHub Public API
> 仓库：[netease-youdao/LobsterAI](https://github.com/netease-youdao/LobsterAI)

---

## 1. 今日速览

LobsterAI 今日呈现"高 PR 流转、低 Issue 关闭"的典型维护日特征：过去 24 小时内共合并/关闭 **9 个 PR**（涉及 MCP 弹框、IM 处理、记忆校验、OpenClaw 模型路由等多个模块），但同期 **10 个新增/活跃 Issue 全部保持 OPEN 状态，零关闭**。值得关注的是，一条安全相关的 Issue **#2784**（NIM P2P 策略 fail-open）已同步附带修复 PR **#2785**，等待合并。多数 Issue 自 3 月以来长期处于 [stale] 状态，但昨日（9-30）出现集中活跃，提示社区反馈正在回暖，但维护端的响应回路仍偏慢。整体活跃度评估：**中等偏高**（以修复为主，无新版本发布）。

---

## 2. 版本发布

**无新版本发布。** 最近一次正式标签为 `2026.9.23`（commit `7863db4`，见 Issue #2784 引用），距今约 1 周。今日合并的修复可能将在下一迭代版本（候选 `2026.10.x`）中打包发布。

---

## 3. 项目进展

过去 24 小时合并/关闭 **9 个 PR**，其中 **7 个为 bug fix，2 个为功能/配置调整**。项目在稳定性、可用性、可观测性三个方向均有推进。

### 🛠 已合并/关闭的关键 PR

| PR | 模块 | 推进内容 |
|---|---|---|
| [#2787](https://github.com/netease-youdao/LobsterAI/pull/2787) | renderer / main / openclaw / cowork | **fix: custom model plan routing** —— 修复自定义模型在 plan 模式下的路由问题 |
| [#2786](https://github.com/netease-youdao/LobsterAI/pull/2786) | main / openclaw | **fix: 默认 LobsterAI server 模型输出上限设为 32K** —— 修复推理模型因 8K 默认值导致回答被截断的隐患；保留服务端 cap、上下文窗口与 Kimi K3 配置优先级 |
| [#965](https://github.com/netease-youdao/LobsterAI/pull/965) | codex | **feat: 内置 briefing-clip skill** —— 新增一键生成简报剪辑技能，默认启用 |
| [#959](https://github.com/netease-youdao/LobsterAI/pull/959) | memory | **fix: 记忆条目少于 2 字符时显示校验错误** —— 结束"静默丢弃"体验 |
| [#957](https://github.com/netease-youdao/LobsterAI/pull/957) | cowork | **fix: 流式输出时 session 菜单不再被强制关闭** |
| [#956](https://github.com/netease-youdao/LobsterAI/pull/956) | im | **fix: destroy() 中使用可选链调用 accumulator.reject**，修复后台 accumulator 缺少 reject 方法导致的 TypeError |
| [#954](https://github.com/netease-youdao/LobsterAI/pull/954) | cowork | **fix: continueSession 双重错误消息** —— 同一 session 不再连续 dispatch 两条系统错误 |
| [#951](https://github.com/netease-youdao/LobsterAI/pull/951) | mcp | **fix: 防止 MCP 弹框意外关闭导致数据丢失** —— 移除遮罩层 click 关闭，ESC 增加二次确认 |
| [#944](https://github.com/netease-youdao/LobsterAI/pull/944) | mcp | **fix: 弹框滚动条溢出圆角** —— 重构为三层结构（外层裁剪 + 中间滚动 + 底部固定） |

### 📌 综合评估

- **OpenClaw 推理体验显著提升**：#2786 与 #2787 一起将"模型被截断""plan 路由错误"两类隐性 bug 一并修复，是面向高级用户的重要改进。
- **IM/MCP 链路稳定性加固**：#956、#951、#944、#954 联合解决了一组在用户感知层极易引发"软件不可靠"印象的边界 bug。
- **产品力小幅扩展**：#965 内置 briefing-clip 技能，进一步强化"AI 助理 + 工作流"的定位。

**今日项目整体向前迈进了约一个稳定补丁版本的体量。**

---

## 4. 社区热点

按评论数与互动量排序：

### 🔥 讨论最活跃
- **[#953](https://github.com/netease-youdao/LobsterAI/issues/953)** — *3 评论 / 👍1* — 「2026.3.26 版本任务停止/删除未实际生效」  
  用户描述了"点击停止后浏览器仍在搜索""已停止任务被重新打开""模型调用失败提示 API 请求频繁""切换模型导致任务窜台"等连锁现象。**核心诉求**：任务生命周期管理需要做到"硬停止 + 状态可观测"。

- **[#961](https://github.com/netease-youdao/LobsterAI/issues/961)** — *2 评论* — 「LobsterAI MCP Daemon（53699/6947）未启动」  
  非技术用户反馈：自定义 MCP 服务全部失联，错误直陈 `mcp-bridge` 缺少 HTTP 服务端。**核心诉求**：MCP 工具链启动失败需要更友好的诊断引导（普通用户不懂 daemon/bridge）。

- **[#2784](https://github.com/netease-youdao/LobsterAI/issues/2784)** — *1 评论* — 「NIM P2P direct-message policy fails open」  
  安全/合规相关的 PR-ready 缺陷，影响最新 release `2026.9.23` 及 `main` 分支，已具备修复 PR #2785，是当日热度上升最快的非 stale Issue。

### 💡 用户功能诉求集中区（同一人 chinazhoumin 提交，构成分布式系列请求）
- [#947](https://github.com/netease-youdao/LobsterAI/issues/947) — 模型配置页需展示 IM 调用次序/优先级/次数/Token 用量
- [#948](https://github.com/netease-youdao/LobsterAI/issues/948) — 聊天模型与 IM 交互模型应解耦
- [#949](https://github.com/netease-youdao/LobsterAI/issues/949) — IM 端支持指定模型，未命中时返回可用模型列表与配额
- [#950](https://github.com/netease-youdao/LobsterAI/issues/950) — 模型调用失败提示优化（以钉钉为例截图）

**这 4 条合并形成完整的"模型治理"诉求链**，反映 IM 场景下多模型路由与配额可观测性是当前的明确短板。

---

## 5. Bug 与稳定性

按严重程度从高到低排列：

| 等级 | Issue | 描述 | 是否有修复 PR |
|---|---|---|---|
| 🔴 **高** | [#953](https://github.com/netease-youdao/LobsterAI/issues/953) | 任务停止/删除未生效，并发切换模型导致任务窜台、API 频次爆表 | ❌ 未见 fix PR |
| 🔴 **高** | [#961](https://github.com/netease-youdao/LobsterAI/issues/961) | MCP Daemon 未启动 → 整个 MCP 工具链不可用 | ❌ 未见 fix PR |
| 🟠 **中-安全** | [#2784](https://github.com/netease-youdao/LobsterAI/issues/2784) | NIM 网关 P2P 入站策略 fail-open，'disabled'/未配置等同允许 | ✅ [#2785](https://github.com/netease-youdao/LobsterAI/pull/2785)（待合并） |
| 🟡 **中** | [#962](https://github.com/netease-youdao/LobsterAI/issues/962) | 升级至最新版出现 `403 Your request was blocked`，回退旧版恢复正常 | ❌ 未见 fix PR |
| 🟡 **中** | [#960](https://github.com/netease-youdao/LobsterAI/issues/960) | 系统默认千问模型初次使用即报错（带截图） | ❌ 未见 fix PR |
| 🟢 **低** | [#950](https://github.com/netease-youdao/LobsterAI/issues/950) | 模型调用失败提示语不够明确（以钉钉为例） | ❌ 未见 fix PR |

**整体评估**：MCP / 任务调度 / 网关安全三条线存在长期未修的高优先级 Bug，建议维护者本周优先响应。

---

## 6. 功能请求与路线图信号

| Issue | 功能 | 与现有 PR 的关联 | 纳入下版本可能性 |
|---|---|---|---|
| [#964](https://github.com/netease-youdao/LobsterAI/issues/964) | **多 Agent 隔离架构** —— 单实例承载通用/健康/销售等多角色，各自独立的 IDENTITY/SOUL/知识库/IM 账号 | 暂无直接关联 PR；但 [#2785](https://github.com/netease-youdao/LobsterAI/pull/2785) 正在加固 IM 入站过滤，与多 Agent 的权限边界天然契合 | ⭐⭐⭐ 高（与行业多 Agent 趋势一致） |
| [#958](https://github.com/netease-youdao/LobsterAI/pull/958) | **临时会话** —— 侧边栏 ⚡ 按钮，不存档、不出现在历史、不可收藏 | **PR 已 OPEN 待合并**，并已附 v1 修复方案（新增 `is_temp` 字段、解决重启后残留问题） | ⭐⭐⭐ 极高（功能已成型） |
| [#947](https://github.com/netease-youdao/LobsterAI/issues/947) / [#948](https://github.com/netease-youdao/LobsterAI/issues/948) / [#949](https://github.com/netease-youdao/LobsterAI/issues/949) | **IM 端模型治理套件** —— 模型解耦、配额可视化、可用模型回退 | 今日合并的 [#2786](https://github.com/netease-youdao/LobsterAI/pull/2786)、[#2787](https://github.com/netease-youdao/LobsterAI/pull/2787) 显示维护者正在系统化打磨模型路由层 | ⭐⭐ 中（架构层面铺垫尚不充分） |
| [#965](https://github.com/netease-youdao/LobsterAI/pull/965) | **内置 briefing-clip skill** | 已合并 | ✅ 本次已纳入 |

---

## 7. 用户反馈摘要

提炼自过去 24 小时活跃 Issue 的真实用户声音：

- **😤 任务调度不可信**（#953）：用户对"停止按钮无效"极度不满——表面停止但后台仍消耗 API 配额甚至造成"任务窜台"。**该反馈同时暴露了三个层级的体验问题：状态一致性、资源回收、模型路由**。
- **😟 MCP 故障门槛过高**（#961）：非技术用户面对 daemon 缺失时几乎无法自助恢复，需更明确的引导式排错或自愈机制。
- **😕 升级反而更坏**（#962）：用户从旧版升级到新版遭遇 `403`，回退旧版即恢复——典型的"升级税"，对版本信心打击大。
- **🤔 IM 场景调试不便**（#948）：用户在 LobsterAI 主窗口调试新模型时，会连带影响 IM 通道的稳定性，期望调试与生产分离。
- **😶 模型失败反馈沉默**（#950 / #960）：千问模型首次使用即报错、错误提示仅一段晦涩字符串，用户无从判断是配额、key 还是服务侧问题。

**满意度信号**：当前合并的 9 个 PR 中有 7 个直接对应用户体验痛点（弹框数据丢失、滚动条错位、菜单被关闭、记忆静默丢弃等），说明维护团队对 UX 反馈敏感度较高，**修复节奏与社区抱怨方向高度对齐**。

---

## 8. 待处理积压

以下 Issue/PR 长期未被维护者正式响应，建议纳入下次 triage：

### 🟥 6 个月以上 stale Issue（昨日刚被重新激活但仍 OPEN）
- [Issue #953](https://github.com/netease-youdao/LobsterAI/issues/953) — 任务停止失效（高严重度，3 评论）
- [Issue #961](https://github.com/netease-youdao/LobsterAI/issues/961) — MCP Daemon 未启动（高严重度）
- [Issue #960](https://github.com/netease-youdao/LobsterAI/issues/960) — 默认千问模型首用报错
- [Issue #962](https://github.com/netease-youdao/LobsterAI/issues/962) — 升级后 403
- [Issue #947](https://github.com/netease-youdao/LobsterAI/issues/947) — 模型配置

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

# CoPaw 项目日报

**报告日期：2026-10-01**
**数据周期：过去 24 小时**
**仓库：agentscope-ai/CoPaw（数据中 Issues/PRs 链接实际指向 agentscope-ai/QwenPaw 仓库）**

---

## 一、今日速览

CoPaw 今日发布 **v2.2.2-beta.4** 预发布版本，社区活跃度处于较高水平，过去 24 小时共产生 **20 条 Issue 更新**和 **39 条 PR 更新**，整体呈现"高频 bug 反馈 + 高强度 bug 修复并行"的节奏。值得关注的信号有三点：（1）Issues 中 **bug 类占比约 75%**，反映出新版本在多 provider、多场景下的稳定性挑战；（2）**3 条 Issue 已关闭 + 多条 PR 与 Issue 形成 issue–PR 闭环**（如 #8057→#8060、#8058→#8061、#8040→#8062），说明维护团队响应速度较快；（3）**功能请求类 Issue** 涉及 Human-in-the-Loop、消息撤回、WebUI 能力补齐等中长期方向，反映社区正在向"生产可用 + 可治理"演进。

---

## 二、版本发布

### 🚀 v2.2.2-beta.4（Beta）

- **发布类型**：Beta 预发布版本，伴随 GitHub Actions 自动创建了安装验证 Issue [#8053](https://github.com/agentscope-ai/QwenPaw/issues/8053)，需在发布后 4 小时内完成多平台验证
- **主要变更（部分）**：
  - **feat**: 在 ReMeLightMemoryCard 中新增 reranker UI 配置面板（PR [#6399](https://github.com/agentscope-ai/QwenPaw/pull/6399) by @lecheng2018）
  - **chore**: 版本号升级至 2.2.2b4（PR [#7892](https://github.com/agentscope-ai/QwenPaw/pull/7892) by @cuiyuebing）
  - **perf(console)**: 拆分 chat 依赖（commit 信息被截断，需进一步核对）
- **破坏性变更**：未见明确声明
- **迁移注意事项**：
  - 仍为 beta 渠道，不建议生产环境直接升级
  - 新增 reranker 配置面板，建议同时确认 ReMe memory 后端的兼容版本
  - 因[#8058](https://github.com/agentscope-ai/QwenPaw/issues/8058)、[#8057](https://github.com/agentscope-ai/QwenPaw/issues/8057)、[#8059](https://github.com/agentscope-ai/QwenPaw/issues/8059)均报告于该 beta 版本下，使用 Anthropic、OpenAI Responses 协议以及后台任务的用户建议观望正式版

---

## 三、项目进展

### 今日已关闭/合并的重要 PR

| PR | 标题 | 影响 |
|----|------|------|
| [#8049](https://github.com/agentscope-ai/QwenPaw/pull/8049) | fix(chats): 时区按 timestamp 解析以兼容 DST | 修复跨夏令时切换的时间戳漂移问题（Issue [#8046](https://github.com/agentscope-ai/QwenPaw/issues/8046)），属首次贡献者提交的 small fix，已合并关闭 |

### 形成 Issue–PR 闭环的进展（仍待合并，但已具备解决方案）

- **Anthropic 缓存 token 计费**：[Issue #8057](https://github.com/agentscope-ai/QwenPaw/issues/8057) ↔ [PR #8060](https://github.com/agentscope-ai/QwenPaw/pull/8060)：在 context meter 中补齐 cache_read/cache_creation tokens 计数
- **OpenAI Responses `prompt_cache_key`**：[Issue #8058](https://github.com/agentscope-ai/QwenPaw/issues/8058) ↔ [PR #8061](https://github.com/agentscope-ai/QwenPaw/pull/8061)：自定义 OpenAI 网关声明 prompt cache 参数
- **ReMe embedding 重建失败**：[Issue #8040](https://github.com/agentscope-ai/QwenPaw/issues/8040) ↔ [PR #8062](https://github.com/agentscope-ai/QwenPaw/pull/8062)：在批处理失败时按 per-item 兜底，避免整批 CJK 超长块被静默丢弃
- **后台任务完成通知**：[Issue #8059](https://github.com/agentscope-ai/QwenPaw/issues/8059)（任务记录 404、最终响应为空）↔ [PR #8063](https://github.com/agentscope-ai/QwenPaw/pull/8063)：当后台任务完成时唤醒父 agent 会话

整体而言，今天的项目推进集中在 **provider 适配层 + memory 子系统 + Console 体验**三条线，每条线都有 Issue–PR 配对落地，**响应效率值得肯定**。

---

## 四、社区热点

### 评论数最多的 Issues

1. **[Issue #7011（已关闭，评论 8 条）](https://github.com/agentscope-ai/QwenPaw/issues/7011)** — Console stop 请求跨 session 误杀飞书会话。提交者 @djj532 提供了完整证据链，已被修复关闭，是典型的"session 标识串号"治理问题
2. **[Issue #7443（已关闭，评论 6 条）](https://github.com/agentscope-ai/QwenPaw/issues/7443)** — 危险指令绕过检测。涉及安全策略对 prompt 注入/越权指令的识别，关闭意味着已合并修复或转为私有修复
3. **[Issue #8022（评论 4 条）](https://github.com/agentscope-ai/QwenPaw/issues/8022)** — `send_file_to_user` 产生的 file/image 内容块污染会话上下文，导致后续请求持续 400。**尚未修复 PR**，是当前最值得关注的活跃话题之一

### 长期高关注度

- **[Issue #6274（👍 1，自 2026-07 起累积评论 3 条）](https://github.com/agentscope-ai/QwenPaw/issues/6274)** — Human-in-the-Loop 工具 `ask_user_question`：社区对 Agent 自治与人类监督的边界讨论持续进行

**背后诉求分析**：今日热点集中在**多会话隔离 / 内容块语义污染 / 安全治理**三大方向，均为生产部署中"多用户 + 多渠道 + 长上下文"场景下的共性痛点。

---

## 五、Bug 与稳定性

按严重程度排序（基于"是否影响核心功能链路"判定）：

### 🔴 P0 — 影响所有请求可用性

| 严重度 | Issue | 描述 | 修复状态 |
|--------|-------|------|----------|
| 🔴 P0 | [#8064](https://github.com/agentscope-ai/QwenPaw/issues/8064) | DeepSeek provider：`send_file_to_user` + PDF 永久破坏 session，所有后续请求 400 | ❌ 尚无 fix PR |
| 🔴 P0 | [#8022](https://github.com/agentscope-ai/QwenPaw/issues/8022) | `send_file_to_user` 的 file/image 内容块 + 空 assistant 消息污染上下文，全部模型 400 | ❌ 尚无 fix PR |

### 🟠 P1 — 重要路径失效/降级

| 严重度 | Issue | 描述 | 修复状态 |
|--------|-------|------|----------|
| 🟠 P1 | [#8059](https://github.com/agentscope-ai/QwenPaw/issues/8059) | 后台 agent task：完成后记录 404，且最终响应为空 | ✅ [PR #8063](https://github.com/agentscope-ai/QwenPaw/pull/8063) 待合并 |
| 🟠 P1 | [#8047](https://github.com/agentscope-ai/QwenPaw/issues/8047) | `server/discover` HTTP 422 文本响应未触发 legacy 协议识别，streamable_http 驱动不激活 | ❌ 尚无 fix PR |
| 🟠 P1 | [#8042](https://github.com/agentscope-ai/QwenPaw/issues/8042) | 工具输出文件自动回灌为模型输入，遇到不支持格式直接 Internal error | ❌ 尚无 fix PR |
| 🟠 P1 | [#8035](https://github.com/agentscope-ai/QwenPaw/issues/8035) | 转写设置页无法配置 `transcription_model`，切换 provider 静默失效 | ❌ 尚无 fix PR |

### 🟡 P2 — 体验退化/功能异常

| 严重度 | Issue | 描述 | 修复状态 |
|--------|-------|------|----------|
| 🟡 P2 | [#8040](https://github.com/agentscope-ai/QwenPaw/issues/8040) | embedding 重建失败（#5950 复发）：单条 CJK 超长块静默拖垮整批 | ✅ [PR #8062](https://github.com/agentscope-ai/QwenPaw/pull/8062) 待合并 |
| 🟡 P2 | [#8058](https://github.com/agentscope-ai/QwenPaw/issues/8058) | `prompt_cache_key` 在自定义 OpenAI Responses provider 被拒 | ✅ [PR #8061](https://github.com/agentscope-ai/QwenPaw/pull/8061) 待合并 |
| 🟡 P2 | [#8057](https://github.com/agentscope-ai/QwenPaw/issues/8057) | Anthropic Messages provider：context meter 不计 cache read/write tokens | ✅ [PR #8060](https://github.com/agentscope-ai/QwenPaw/pull/8060) 待合并 |
| 🟡 P2 | [#8013](https://github.com/agentscope-ai/QwenPaw/issues/8013) | 技能池大技能广播/下载被前端 30s 硬超时截断 | ❌ 尚无 fix PR |
| 🟡 P2 | [#8002](https://github.com/agentscope-ai/QwenPaw/issues/8002) | Windows auto + sandbox off：内联 Office COM `Quit()` 可关闭用户 PowerPoint（**安全风险**） | ❌ 尚无 fix PR |
| 🟡 P2 | [#7672](https://github.com/agentscope-ai/QwenPaw/issues/7672) | QwenPaw2 安全沙箱在 Windows 被突破（系列 bug 1/4） | ❌ 尚无 fix PR |

### 🟢 已修复

- [#8046](https://github.com/agentscope-ai/QwenPaw/issues/8046)（DST 时区漂移）→ [PR #8049](https://github.com/agentscope-ai/QwenPaw/pull/8049) ✅
- [#7011](https://github.com/agentscope-ai/QwenPaw/issues/7011)（多 UI 会话交叉取消）✅
- [#7443](https://github.com/agentscope-ai/QwenPaw/issues/7443)（危险指令绕过）✅
- [#7604](https://github.com/agentscope-ai/QwenPaw/issues/7604)（LLM stream idle 硬编码）✅

**今日 Bug 总数：17 条，其中 4 条已闭环，5 条已有 PR 待合并，8 条待修复。**

---

## 六、功能请求与路线图信号

### 已存在 PR 跟进（高概率进入下一版本）

| 需求 | Issue | PR |
|------|-------|-----|
| 后台任务完成自动唤醒父会话 | [#8059](https://github.com/agentscope-ai/QwenPaw/issues/8059) | [#8063](https://github.com/agentscope-ai/QwenPaw/pull/8063)（first-time-contributor） |
| Anthropic 缓存 token 计费精度 | [#8057](https://github.com/agentscope-ai/QwenPaw/issues/8057) | [#8060](https://github.com/agentscope-ai/QwenPaw/pull/8060) |
| 自定义 OpenAI 网关 prompt cache | [#8058](https://github.com/agentscope-ai/QwenPaw/issues/8058) | [#8061](https://github.com/agentscope-ai/QwenPaw/pull/8061) |
| embedding 重建按 per-item 兜底 | [#8040](https://github.com/agentscope-ai/QwenPaw/issues/8040) | [#8062](https://github.com/agentscope-ai/QwenPaw/pull/8062) |

### 尚无 PR 的中长线需求

| 需求 | Issue | 可能性评估 |
|------|-------|-----------|
| **Human-in-the-Loop 工具** `ask_user_question` | [#6274](https://github.com/agentscope-ai/QwenPaw/issues/6274) | 路线图高优，社区呼声持续近 2.5 个月 |
| **WebUI 消息撤回/编辑 + 工作区回滚** | [#7997](https://github.com/agentscope-ai/QwenPaw/issues/7997) | 涉及快照系统改造，复杂度中等 |
| **@ALL / @所有人过滤能力** | [#7945](https://github.com/agentscope-ai/QwenPaw/issues/7945) | 简单过滤规则，短期内可落地 |
| **Advisor Mode（双模型协作）** | — | [PR #7569](https://github.com/agentscope-ai/QwenPaw/pull/7569) 已 open 但规模为 XXXL，进入门槛高 |
| **PRD CRUD 内置工具 + 前端渲染** | — | [PR #4902](https://github.com/agentscope-ai/QwenPaw/pull/4902) 自 6 月起 pending，需维护者介入 |

**路线图信号**：可观察到一个明显趋势——**provider 适配与多协议兼容**正在成为 v2.2.x 的核心议题；下一个里程碑很可能会重点强化**会话治理（HITL、可观测、可回滚）**。

---

## 七、用户反馈摘要

### 真实用户痛点（提炼自 Issues 评论）

1. **多 UI 会话交叉干扰**（[#7011](https://github.com/agentscope-ai/QwenPaw/issues/7011)）：用户反映在 Console + 飞书双 UI 同时操作时，stop 请求会误杀飞书会话，说明 session identity 在跨 UI 抽象层存在泄漏
2. **PDF/file 内容污染 session**（[#8022](https://github.com/agentscope-ai/QwenPaw/issues/8022)、[#8064](https://github.com/agentscope-ai/QwenPaw/issues/8064)）：多个 provider（DeepSeek 等）出现"一次 send_file 永久破坏 session"，严重影响多模态生产可用性
3. **Windows 安全沙箱不足**（[#8002](https://github.com/agentscope-ai/QwenPaw/issues/8002)、[#7672](https://github.com/agentscope-ai/QwenPaw/issues/7672)）：auto 模式 + sandbox 关闭组合下可被 COM Quit 关闭用户应用，反映 Windows 治理粒度仍粗
4. **大型技能广播失败**（[#8013](https://github.com/agentscope-ai/QwenPaw/issues/8013)）：12,994 个文件 / 80MB 的大技能在前端 30s AbortController 硬超时下永远无法落地，**前端超时与后端真实耗时脱节**是工程化短板
5. **背景 IM 群 @ALL 噪音**（[#7945](https://github.com/agentscope-ai/QwenPaw/issues/7945)）：机器人对 @ALL 触发响应在生产群聊中带来严重噪音，反映 IM 渠道策略需要更细粒度的过滤
6. **Context meter 不可信**（[#8057](https://github.com/agentscope-ai/QwenPaw/issues/8057)）：在 Anthropic cache 启用时显示的上下文大小远小于真实值，影响用户对成本的判断

### 满意/正面信号

- [@djj532](https://github.com/djj532) 在多条 Issue 中提供完整的"现象 + 复现链 + 修复建议"，

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报

**报告日期：2026-10-01**
**数据范围：过去 24 小时**

---

## 1. 今日速览

ZeroClaw 今日继续保持**高强度、多线并进**的开发节奏：24 小时内 Issues 活动 50 条（5 条已关闭）、PR 活动 50 条（47 条仍待合并），无新版本发布。当前工作的核心主线明确围绕 **v0.9.0 版本冲刺**（Runtime/Gateway 拆分、OIDC 鉴权落地、Per-Agent 权限边界），多条 PR 已呈现明显的"堆叠（stacked）"依赖结构（典型如 #11346 → #11186 → #11165），反映出项目进入集成密集期。安全/身份访问（identity-access）领域仍是当日最热议题，多个 S0 级 Bug 同时在修，但合并率较低，**合并积压风险正在累积**，建议维护者尽快审阅 stack 链路上的基线 PR。

---

## 2. 版本发布

**无新版本发布。** 当日未观察到任何 release tag 推送。结合 PR 中大量 `release:v0.9.0` 标签判断，社区当前重点仍在 v0.9.0 集成收尾，未进入发版流程。

---

## 3. 项目进展

当日共关闭 5 个 Issue，其中 2 个为 RFC 决议、3 个为 Bug 修复，可视作"实质性推进"：

| 编号 | 类型 | 主题 | 意义 |
|---|---|---|---|
| [#10366](https://github.com/zeroclaw-labs/zeroclaw/issues/10366) | RFC（CLOSED） | PR 评审证据、时效警告与作者操作边界 | 评审规则正式落地，新增"快速合并通道（expedited merge lane）"，对干净 exact-head 评审证据给予更多权重 |
| [#10230](https://github.com/zeroclaw-labs/zeroclaw/issues/10230) | S1 Bug（CLOSED） | zerocode/tui 守护进程启动/重载栈溢出 | 修复 Quickstart 配置应用时的 Tokio 运行时 worker 崩溃，工作流恢复可用 |
| [#10165](https://github.com/zeroclaw-labs/zeroclaw/issues/10165) | S0 Bug（CLOSED） | 独立 delegate 绕过自身 risk_profile 的 `block_high_risk_commands` | 高危命令沙箱逃逸修复，delegate 子代理现在正确继承自身风险配置 |
| [#10975](https://github.com/zeroclaw-labs/zeroclaw/issues/10975) | S2 Bug（CLOSED） | WhatsApp Web 入站图片未被下载，agent 收到字面 `[Image]` | 视觉链路在 WhatsApp Web 通道恢复可用 |
| [#10249](https://github.com/zeroclaw-labs/zeroclaw/issues/10249) | S3 Bug（CLOSED） | 重复 webhook 处理日志回写原始幂等键 | 日志信息泄露漏洞修复，配合 #9203 改进 idempotency keys 处理 |

**整体判断**：今日合入/关闭量虽不算高（5 条），但涵盖 1 个 S0 安全修复、1 个 S1 稳定性修复、1 个 S2 通道功能修复与 1 个流程 RFC，质量较重。**项目稳定度向前推进一步**，但 PR 积压（待合并 47 条）仍是显著拖累。

---

## 4. 社区热点

按评论数排序的活跃议题反映当前社区关注焦点：

1. **[#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692)（15 评论）— Maintainer 决策队列追踪器**
   RFC/设计议题的维护者决策排队台账。反映社区对**长期决策透明度**的诉求——多个设计类 Issue 等待 Maintainer/code-owner 明确 accept/reject/defer。
   
2. **[#5982](https://github.com/zeroclaw-labs/zeroclaw/issues/5982)（11 评论，`release:v0.9.0`）— 多租户 Agent 部署的 Per-sender RBAC**
   多租户场景下，按发送方身份下发角色。issue 已收敛方向（在 agent/risk-profile 上扩展 sender roles，而非新建独立 crate），#11068 为开放草案。
   
3. **[#10366](https://github.com/zeroclaw-labs/zeroclaw/issues/10366)（10 评论，已关闭）— PR 评审证据与时效 RFC**
   评审规则改革，新增"加速合并通道"。是当日最重要的流程改进。
   
4. **[#10230](https://github.com/zeroclaw-labs/zeroclaw/issues/10230)（7 评论，已关闭）— 守护进程栈溢出**
   见第 3 节。
   
5. **[#10165](https://github.com/zeroclaw-labs/zeroclaw/issues/10165)（7 评论，已关闭）— Delegate 绕过风险配置**
   见第 3 节。

**趋势分析**：当日讨论热度集中在三个层面——**流程治理**（评审规则、维护者决策台账）、**安全模型**（RBAC、OIDC、principal ownership）、**运行时稳定性**。三者均为 v0.9.0 的关键交付项，社区共识度较高。

---

## 5. Bug 与稳定性

按严重程度排列的开放/新发 Bug：

### S0（数据丢失 / 安全风险）

| Issue | 主题 | 状态 | 关联 PR |
|---|---|---|---|
| [#9647](https://github.com/zeroclaw-labs/zeroclaw/issues/9647) | 知识图谱无 per-agent 归属，跨 agent 可读写 | OPEN，in-progress | — |
| [#9646](https://github.com/zeroclaw-labs/zeroclaw/issues/9646) | Session/channel 读写工具缺 per-agent ownership 校验 | OPEN，in-progress | — |
| [#11198](https://github.com/zeroclaw-labs/zeroclaw/issues/11198) | 委派 memory 工具丢失 principal scope | OPEN，accepted | — |
| [#11127](https://github.com/zeroclaw-labs/zeroclaw/issues/11127) | Session-data 工具绕过 principal ownership 检查 | OPEN | — |
| [#11123](https://github.com/zeroclaw-labs/zeroclaw/issues/11123) | SOP 执行接受通配符工具选择器但缺 `tools:execute` | OPEN | — |

### S1（工作流阻塞）

| Issue | 主题 | 状态 |
|---|---|---|
| [#11237](https://github.com/zeroclaw-labs/zeroclaw/issues/11237) | 配置编辑器无法写入声明式 cron 计划 | OPEN，in-progress |
| [#11294](https://github.com/zeroclaw-labs/zeroclaw/issues/11294) | `configure_refuses_an_incarnation_replaced_under_the_lock` 测试 150ms sleep 在并行运行门下竞态 | OPEN（Flaky） |
| [#10876](https://github.com/zeroclaw-labs/zeroclaw/issues/10876) | 网关 auth 区段配置写入"已保存"但未生效至 RPC 鉴权层 | OPEN（partial delivered） |
| [#11126](https://github.com/zeroclaw-labs/zeroclaw/issues/11126) | 队列中会话操作保留已撤销管理员所有权旁路 | OPEN，#10412 部分实现 |
| [#11255](https://github.com/zeroclaw-labs/zeroclaw/issues/11255) | WhatsApp Web 入站图片保存与标记功能 | OPEN，in-progress（功能/通道一致性） |

### S2（功能降级）

| Issue | 主题 |
|---|---|
| [#11233](https://github.com/zeroclaw-labs/zeroclaw/issues/11233) | 校验结果写入报告但未实际运行检查（含第三方 DefuzeX/KUMA 发现） |
| [#11215](https://github.com/zeroclaw-labs/zeroclaw/issues/11215) | OpenCode Go 工具调用失败（`name` 字段被拒），回归自 #7909 |

### S3（轻微）

| Issue | 主题 |
|---|---|
| [#11256](https://github.com/zeroclaw-labs/zeroclaw/issues/11256) | `initial_prompt` 文档声明但未发送给 Groq/OpenAI 转写 |

**稳定性评估**：当日关闭了 2 个高危 Bug（#10165、#10230），但仍有 **5 个 S0 持续 OPEN**，且部分 Issue 内的修复 PR（如 #10412）被作者本人明示"不足以视为 issue 关闭"，**安全收敛尚未到位**，建议维护者优先解决 principal ownership / delegation scope 类问题。

---

## 6. 功能请求与路线图信号

当日开放 PR 中具备明确"功能交付"性质、可识别为 v0.9.0 候选或后续路线图方向：

| PR | 主题 | 目标版本/方向 | 链路 |
|---|---|---|---|
| [#11346](https://github.com/zeroclaw-labs/zeroclaw/pull/11346) | 守护进程端点统一解析（稳定管道名 + 一次性旧版回退） | v0.9.0（决策 J7） | 堆叠于 #11186 → #11165 |
| [#11339](https://github.com/zeroclaw-labs/zeroclaw/pull/11339) | 网关插件 webhook 预留存储迁入守护进程 | v0.9.0 | 解决 #11003 |
| [#11334](https://github.com/zeroclaw-labs/zeroclaw/pull/11334) | 全部网关路由对核心 RPC 表面的分类 | v0.9.0 | 架构支撑 |
| [#11345](https://github.com/zeroclaw-labs/zeroclaw/pull/11345) | 桌面端 RPC 就绪与版本握手 | 桌面集成 | 堆叠于 #11274 / #11186 |
| [#11281](https://github.com/zeroclaw-labs/zeroclaw/pull/11281) | 桌面退出仅停止本实例进程（决策 J6a） | 桌面集成 | 待 Maintainer 决策 |
| [#11331](https://github.com/zeroclaw-labs/zeroclaw/pull/11331) | 网关 sessions REST 经由核心服务 | v0.9.0 | 堆叠于 #11277 / #11186 |
| [#11344](https://github.com/zeroclaw-labs/zeroclaw/pull/11344) | V4 阶段退役 `[gateway.pairing_dashboard]`（决策 J1 S0+） | v0.9.0 | 待 Maintainer 决策 |
| [#11280](https://github.com/zeroclaw-labs/zeroclaw/pull/11280) | 健康检查/TUI 列表/成本/事件历史经由核心服务 | v0.9.0 | 堆叠于 #11277 |
| [#11277](https://github.com/zeroclaw-labs/zeroclaw/pull/11277) | 每个核心连接绑定调用方凭据 | v0.9.0（鉴权基础） | 堆叠于 #11186 |
| [#11341](https://github.com/zeroclaw-labs/zeroclaw/pull/11341) | OpenRPC 合约描述每个方法的返回结构 | v0.9.0 | A9b |
| [#11342](https://github.com/zeroclaw-labs/zeroclaw/pull/11342) | zerocode 插件子页中切换插件通道实例 | zerocode | — |
| [#11262](https://github.com/zeroclaw-labs/zeroclaw/pull/11262) | `zeroclaw plugin update` 校验替换 | 插件系统 | 堆叠于 #11261 → #11236 |
| [#11261](https://github.com/zeroclaw-labs/zeroclaw/pull/11261) | 通过分阶段接纳替换已安装包 | 插件系统 | 堆叠于 #11236 |
| [#11315](https://github.com/zeroclaw-labs/zeroclaw/pull/11315) | 预览 `zeroclaw-gw` 二进制（gw-bin 开关） | 预览，非 v0.9.0 承诺 | 依赖 J2/J9/J10/J15 |

**路线图信号**：v0.9.0 的核心交付非常清晰——**网关/核心拆分（gateway/core split）** + **基于凭据的鉴权（credential-bound core connections）** + **OIDC 收尾**。#11315 显式标注"非 v0.9.0 承诺"，预示下一版本（v0.9.x 或 v0.10.0）将引入独立 `zeroclaw-gw` 二进制，**进程级网关分离**是明确的下一里程碑。插件系统（[#10995](https://github.com/zeroclaw-labs/zeroclaw/issues/10995)、[#11001](https://github.com/zeroclaw-labs/zeroclaw/issues/11001)、[#11003](https://github.com/zeroclaw-labs/zeroclaw/issues/11003)）是另一条并行推进线，#7432 是其追踪器。

---

## 7. 用户反馈摘要

从当日 Issue 评论与摘要中提取的真实用户痛点：

- **多租户授权诉求强烈**（[#5982](https://github.com/zeroclaw-labs/zeroclaw/issues/5982)）：社区希望按发送方身份下发角色，而当前的 agent/risk-profile 模型在多租户部署中粒度不足。
- **跨 agent 数据隔离缺失引发安全担忧**（[#9647](https://github.com/zeroclaw-labs/zeroclaw/issues/9647)、[#9646](https://github.com/zeroclaw-labs/zeroclaw/issues/9646)）：用户明确反映"任何 agent 能读写另一个 agent 的知识/会话"是不可接受的现状。
- **WhatsApp Web 视觉能力空白**（#10975 已修复；[#11255](https://github.com/zeroclaw-labs/zeroclaw/issues/11255) 待跟进）：用户期望与 Telegram 一致的图片附件体验。
- **配置写入静默失效**（[#10876](https://github.com/zeroclaw-labs/zeroclaw/issues/10876)）：网关认证配置"显示保存但未生效"是常见运维踩坑点，部分已通过 #11202 修复。
- **声明式 cron 无法配置**（[#11237](https://github.com/zeroclaw-labs/zeroclaw/issues/11237)）：Web 配置编辑器对声明式 cron 计划写入失败，S1 阻塞工作流。
- **第三方安全测试发现新问题**（[#11233](https://github.com/zeroclaw-labs/zeroclaw/issues/11233)）：DefuzeX/KUMA 工具发现"校验结果写入报告但未实际运行检查"——表明**外部红队测试正在介入**，是积极的社区信号。
- **决策透明度诉求**

</details>

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*