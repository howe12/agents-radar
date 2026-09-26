# OpenClaw 生态日报 2026-09-26

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-09-26 03:00 UTC

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

**报告日期：2026-09-26**
**数据来源：github.com/openclaw/openclaw**
**项目领域：AI 智能体与个人 AI 助手**

---

## 1. 今日速览

OpenClaw 今日继续保持极高的社区活跃度，过去 24 小时共有 **500 条 Issues** 与 **500 条 PRs** 更新（其中 393 个待合并、107 个已合并/关闭）。当前项目处于 **2026.9.6 → 2026.9.7 紧急修复窗口期**：核心缺陷集中在 9.5/9.6 引入的 `prepared-model-catalog` Worker（导致 CPU 空转与内存泄漏），以及跨平台更新流程（Windows、npm global）的系统性失败。**仍未发布新版本**，但 P0 级 fix PR 已密集涌现，健康度总体可视为"高强度修复中、需关注交付节奏"。

---

## 2. 版本发布

**今日无新版本发布。**

最近的相关版本为 **2026.9.6**（被指引入 prepared-model-catalog Worker 并导致多项回归），社区维护者已开设 [Issue #157531 "2026.9.7 Fixes Tracker"](https://github.com/openclaw/openclaw/issues/157531) 作为新版本的修复追踪面板，已加入 18/21 个 P1 候选修复。

---

## 3. 项目进展

今日**已关闭的 Issues（2 条）** 和 **已合并/关闭的 PRs（107 个）** 中，与版本稳定化关联最大的进展包括：

- **[PR #157972](https://github.com/openclaw/openclaw/pull/157972)** *(已关闭, P1)* `fix(release): recover stalled updates and preserve retained session data` —— 修复 2026.9.6 冻结源码上，恢复卡死的更新与保留的会话数据。
- **[Issue #157107](https://github.com/openclaw/openclaw/issues/157107)** *(已关闭)* —— 2026.9.6 中 prepared-model-catalog Worker 每 6s 重建 plugin generation 的关键回归被关闭。
- **[PR #158584](https://github.com/openclaw/openclaw/pull/158584)** *(NEW, P0)* `fix(doctor): migrate every agent database before repairs open it` —— 修复 Doctor 在 2026.7.35 状态升级时打开尚未迁移的 agent 库并误判成功的 race condition。
- **[PR #158491](https://github.com/openclaw/openclaw/pull/158491)** *(NEW, P0)* `fix: preserve newer data across failed update rollback` —— 失败更新回滚时保留较新数据。
- **[PR #158251](https://github.com/openclaw/openclaw/pull/158251)** *(P1)* `fix: keep subagent registration responsive during database contention` —— 子代理注册在 SQLite coordinator 争用下不再阻塞。
- **[PR #157413](https://github.com/openclaw/openclaw/pull/157413)** *(P1)* `fix: prevent temporary-file exhaustion from SQLite coordination` —— 修复 inode 耗尽。

整体来看，项目在"Gateway 性能 / 更新可靠性 / Worker 内存管理"三条主线上都在明显向前推进，但 9.7 版本尚未发布 tag，**对外"项目进展"仍以 PR 堆叠为主，距离用户可感知的修复发布尚有一段时间**。

---

## 4. 社区热点

过去 24 小时 **评论数最高** 的 Issues 反映出三类强烈诉求：

### 🔥 升级稳定性（评论 14–35 条）
- **[Issue #153257 (35 评论)](https://github.com/openclaw/openclaw/issues/153257)** —— 用户 `abuegab1-spec` 详述将 OpenClaw 2026.9.5 将一个稳定环境变为 8 小时恢复战，得到 1 个 👍。
- **[Issue #157842 (15 评论)](https://github.com/openclaw/openclaw/issues/157842)** —— 2026.9.6 升级后 `prepared-model-catalog.worker.js` 每次 turn 残留 ~77 MB 堆内存。
- **[Issue #155753 (31 评论)](https://github.com/openclaw/openclaw/issues/155753)** —— `readFullModelCatalog()` 在每次读取时重新触发 `refreshExpiredCatalog()`，钉死一整颗 CPU。

### 🔥 升级/安装失败（评论 11–14 条）
- **[Issue #156112 (11 评论)](https://github.com/openclaw/openclaw/issues/156112)**、`#152804`、`#155094`、`#157812` —— npm global、minimax-portal、Windows 自动更新等多个失败模式。
- **[Issue #157812 (6 评论)](https://github.com/openclaw/openclaw/issues/157812)** —— Windows 自动更新三种不同失败模式（同机 2 天累计 5 次）。

### 🔥 长期未关闭的"积压型"诉求（评论 6–24 条，多数 6 个月以上）
- **[Issue #42475 (24 评论)](https://github.com/openclaw/openclaw/issues/42475)** Per-agent cost budget enforcement。
- **[Issue #22438 (20 评论)](https://github.com/openclaw/openclaw/issues/22438)** Tiered bootstrap file loading。
- **[Issue #69208 (17 评论)](https://github.com/openclaw/openclaw/issues/69208)** Umbrella：跨频道重复 transcript/replay。
- **[Issue #14785 (10 评论)](https://github.com/openclaw/openclaw/issues/14785)** Reduce tool schema token overhead (~3,500 tok/session)。

**诉求共性**：用户从"希望稳定升级"延伸至"希望有更细粒度的运维控制（成本/梦境/限额/上下文）"，社区期待已从"功能能用"转向"规模化运维可靠"。

---

## 5. Bug 与稳定性

按严重程度排列：

### 🔴 P0 / UX-Release-Blocker（存在 fix PR 或追踪器）
| Issue | 标题 | 是否有 fix |
|---|---|---|
| [#153257](https://github.com/openclaw/openclaw/issues/153257) | 9.5 升级导致 8 小时恢复战 | 关联 9.7 tracker |
| [#155753](https://github.com/openclaw/openclaw/issues/155753) | model catalog loop 钉死一核 CPU | — |
| [#157842](https://github.com/openclaw/openclaw/issues/157842) | prepared-model-catalog 每 turn +77 MB 堆 | — |
| [#157531](https://github.com/openclaw/openclaw/issues/157531) | **2026.9.7 Fixes Tracker**（含 18/21 P1 候选） | ✅ 在跟进 |
| [#156712](https://github.com/openclaw/openclaw/issues/156712) | `openclaw triage` 不退出，锁 lifecycle lock | — |
| [#137177](https://github.com/openclaw/openclaw/issues/137177) | `@wecom/wecom-openclaw-plugin@2026.7.2` 无法安装 | — |
| [#156112](https://github.com/openclaw/openclaw/issues/156112) | `openclaw update` 卡在 global install swap | — |
| [#152804](https://github.com/openclaw/openclaw/issues/152804) | minimax-portal 9.5 升级后丢失 model catalog | — |
| [#155859](https://github.com/openclaw/openclaw/issues/155859) | Gateway 启动 wall-time 随插件数量线性放大 | — |
| [#157812](https://github.com/openclaw/openclaw/issues/157812) | Windows 自动更新反复失败 | — |
| [#155094](https://github.com/openclaw/openclaw/issues/155094) | 9.4 更新出现 unexpected-error | — |

### 🟠 P1 回归 / 消息丢失
- [#137332](https://github.com/openclaw/openclaw/issues/137332) requester-settle 批处理挂起
- [#144809](https://github.com/openclaw/openclaw/issues/144809) claude-cli 超长 turn 整段回复丢失
- [#144291](https://github.com/openclaw/openclaw/issues/144291) config 热重载中止所有 in-flight turn
- [#50093](https://github.com/openclaw/openclaw/issues/50093) WhatsApp 重连后漏掉消息
- [#55792](https://github.com/openclaw/openclaw/issues/55792) Gateway 重启后无法补漏入站消息
- [#16555](https://github.com/openclaw/openclaw/issues/16555) 投递队列无 TTL（重启时泛滥）

### 🟡 P2 / 其他回归
- [#140129](https://github.com/openclaw/openclaw/issues/140129) Anthropic cache 长期会话卡在 ~46k
- [#154104](https://github.com/openclaw/openclaw/issues/154104) Matrix 4 账号空闲 ~50% CPU、写盘 52 MB/min
- [#69242](https://github.com/openclaw/openclaw/issues/69242) Linux `exec` 工具 SIGKILL find/grep
- [#155728](https://github.com/openclaw/openclaw/issues/155728) 插件 capture 大型二进制双缓冲
- [#53540](https://github.com/openclaw/openclaw/issues/53540) 大工具参数生成触发 "Network connection lost"

**整体判断**：P0 多与 9.5/9.6 引入的 prepared-model-catalog Worker 链相关，迁移至 9.7 期间务必重点回归；多平台更新失败模式值得建立一个 umbrella 跟进。

---

## 6. 功能请求与路线图信号

从评论量、P 评级、是否已关联 PR 综合判断，最有可能进入 9.7 或下一个 minor 版本的功能请求：

| Issue | 标题 | 评级 | 路线图信号 |
|---|---|---|---|
| [#42475](https://github.com/openclaw/openclaw/issues/42475) | Per-agent cost budget enforcement at gateway | 🐚 platinum hermit / P2 | 与 [#13219](https://github.com/openclaw/openclaw/issues/13219) per-model usage logging（已 `linked-pr-open`）形成天然组合 |
| [#22438](https://github.com/openclaw/openclaw/issues/22438) | Tiered bootstrap file loading | 🦞 diamond lobster / P2 | 已 `linked-pr-open`，上下文优化方向主力候选 |
| [#16555](https://github.com/openclaw/openclaw/issues/16555) | Delivery Queue TTL / Expiry | 🦞 diamond lobster / P1 | 与 [#55792](https://github.com/openclaw/openclaw/issues/55792) 重启补漏强相关，是消息可靠性拼图 |
| [#67413](https://github.com/openclaw/openclaw/issues/67413) | Per-agent dreaming configuration | 🦪 silver shellfish / P2 | 5 👍，社区呼声较高，OOM 风险已实证 |
| [#72591](https://github.com/openclaw/openclaw/issues/72591) | Per-agent MCP server scoping | 🦞 diamond lobster / P2 | 12 代理 × 10 MCP = 120 进程的现实痛点 |
| [#39305](https://github.com/openclaw/openclaw/issues/39305) | Escalating stall recovery (sub-agent nudge→kill) | 🌊 / P2 | 与 turn timeout / 内存压力共振 |
| [#45508](https://github.com/openclaw/openclaw/issues/45508) + [#66252](https://github.com/openclaw/openclaw/issues/662

---

## 横向生态对比

# AI 智能体与个人 AI 助手开源生态横向对比分析报告
**报告周期：2026-09-26**

---

## 1. 生态全景

个人 AI 助手与自主智能体开源生态在 2026-09-26 整体处于**"高强度修复与功能扩张并行"** 的成熟阶段。**OpenClaw、ZeroClaw、Hermes Agent** 三家头部项目当日的 Issue/PR 更新量均达 50–500 条级，反映生态已脱离早期"功能可用"诉求，进入**"规模化运维可靠"** 的中段——社区讨论重心从"能不能跑"转向"升级稳不稳、压缩会不会丢数据、计费对不对得上账"。与此同时，**NanoBot、CoPaw、LobsterAI** 处于活跃功能扩展期，主攻 WebUI 可观测性、MCP 协议完善与多 Provider 接入；**NanoClaw** 则因 v2.4.0 引入多处回归进入"补丁洪"模式，单一贡献者驱动叠加 review 瓶颈成为典型痛点；**NullClaw、IronClaw** 进入静默维护态，而 **TinyClaw、Moltis、ZeptoClaw** 当日零活动，呈现明显的两极分化。

---

## 2. 各项目活跃度对比

| 项目 | 24h Issues | 24h PRs | 合并/关闭 PR | 新 Release | 当日健康度 |
|---|---|---|---|---|---|
| **OpenClaw** | 500 | 500（393 待合并） | 107 | ❌ | 🟡 修复密集期，需关注交付节奏 |
| **ZeroClaw** | 50（13 关闭） | 50 | 8 合并 + 5 RFC 闭环 | ❌ | 🟢 RFC 治理 + 安全栈推进 |
| **Hermes Agent** | 50 | 50 | 1 合并 + 1 CVE 闭环 | ❌ | 🟢 P0/P1 修复 100% 覆盖 |
| **NanoClaw** | 5 新开 | 48 | 2 关闭（合并 ≤1） | ❌ | 🔴 合并率 4%，review 严重阻塞 |
| **CoPaw** | 11 | 13 | 0 | ❌ | 🟡 高产能/零合并，瓶颈明显 |
| **NanoBot** | 4 | 13 | 2 | ❌ | 🟢 测试重构 + 用户痛点双线推进 |
| **LobsterAI** | 0 | 10 | 1 | ❌ | 🟢 良好偏中 |
| **PicoClaw** | 2 | 4 | 0 | ❌ | 🟡 评分 3.4/5 |
| **NullClaw** | 0 | 1 | 0 | ❌ | ⚪ 静默期 |
| **IronClaw** | 0 | 2 | 0 | ❌ | ⚪ 静默偏维护 |
| TinyClaw / Moltis / ZeptoClaw | 0 | 0 | 0 | ❌ | ⚫ 无活动 |

**关键观察**：当日**零新版本发布**，但合并吞吐排名前三为 OpenClaw（107）、ZeroClaw（8）、Hermes Agent（1）——头部项目已具备工程化治理能力，而中下游项目普遍面临"提交即沉默"的 review 资源瓶颈。

---

## 3. OpenClaw 在生态中的定位

**OpenClaw 是当前生态的事实标准**，体现在三个维度：

| 维度 | OpenClaw | 生态均值 |
|---|---|---|
| 日吞吐（Issue+PR） | 1000 条 | < 100 条 |
| 集成广度 | 多 channel × 多 provider × 子代理 × 插件 | 通常 ≤ 3 个集成轴 |
| 社区评论密度 | 14–35 条/Issue | 0–7 条/Issue |

**优势**：
- **架构完整度最高**：channel、provider、plugin、gateway、worker、doctor 全栈自洽
- **企业级运维信号**：Delivery Queue TTL、Per-agent cost budget、MCP server scoping 等诉求已被结构化追踪
- **安全响应迅速**：js-yaml CVE（Hermes Agent）24h 内闭环、agent DB 迁移 race condition（PR #158584）当日修复

**技术路线差异**：
- vs **ZeroClaw**：OpenClaw 走"功能广度 + 多 channel 抽象"路线；ZeroClaw 押注 **WASM 插件化**（"Everything is a plugin"，对应 #6489/#8850）与 **SOP 控制平面**（#8288）
- vs **Hermes Agent**：OpenClaw 偏通用 CLI + Gateway；Hermes 强化 **Desktop 体验 + Project/Kanban 元数据**
- vs **CoPaw**：OpenClaw 协议封闭度高，CoPaw 强调 **Provider 能力透明化**（media inline caps、context window 真实声明）

**当前风险**：9.5/9.6 引入的 `prepared-model-catalog` Worker 导致 **P0 级回归**（每 turn +77 MB 堆、CPU 单核钉死、Windows/npm global 更新失败三联症），#153257 的"8 小时恢复战"反映社区对升级稳定性的焦虑已升至历史高位。

---

## 4. 共同关注的技术方向

下表汇总跨项目涌现的高频需求：

| 技术方向 | 涉及项目 | 核心诉求 |
|---|---|---|
| **多 Provider / 成本网关** | ZeroClaw(#11103)、PicoClaw(#3393)、NanoBot(#5915)、LobsterAI(#2766) | 统一 OpenAI 兼容接口，按 ID 计费，下行 15-60% 成本 |
| **MCP 协议完善** | NanoBot(#5916/#5386)、ZeroClaw(#10397) | 分页 `tools/list` 全量加载、`structuredContent` 无损保留、DSML marker 规范化 |
| **上下文压缩与会话完整性** | OpenClaw(#69208/#16555)、Hermes Agent(#122822/#90949)、CoPaw(#7628/#7884) | 压缩后技能索引保留、消息不丢失、滚动条历史可见 |
| **升级/安装跨平台可靠性** | OpenClaw(#156112/#157812)、Hermes Agent(#122495/#122593)、NanoClaw(#3906/#3907) | Windows/macOS/Linux 更新链不分流、嵌套 pnpm 检测、launchd 日志污染 |
| **安全审批工作流** | NullClaw(#1009)、ZeroClaw(#10259/#10263/#11082) | RPC 强制认证主体、OIDC + PKCE、审批工作流可中断可恢复 |
| **Provider 能力透明化** | CoPaw(#7201/#7979/#7986)、OpenClaw(#14785) | 真实上下文窗口声明、媒体 inline caps、schema token overhead 削减 |
| **会话成本/计费可信度** | OpenClaw(#42475/#13219)、Hermes Agent(#118379/#123352) | Per-agent budget、token/cost/state.db 与实际请求严格一致 |
| **子代理/多 Agent 治理** | OpenClaw(#72591)、ZeroClaw(#10970)、CoPaw(#7981) | host 级资源边界、子 agent 状态机语义、MCP server per-agent scoping |

**共性结论**：**"协议层深化 + 运维层精细化"** 是当前生态的两条主轴。任何 AI Agent 框架若想进入生产可用，都必须同时跨过这两道关。

---

## 5. 差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 架构关键差异 |
|---|---|---|---|
| **OpenClaw** | 全栈通用平台 | 中大型组织 / 高级个人用户 | 多 worker + gateway + plugin 三层抽象，集成面最广 |
| **ZeroClaw** | 安全优先的可嵌入式运行时 | 企业 / 安全敏感场景 | WASM 插件化、SOP 控制平面、OIDC 原生 |
| **Hermes Agent** | Desktop + CLI 双端体验 | 桌面用户 / 项目管理者 | Project/Kanban 元数据、Desktop Recents、Profile 网关路由 |
| **NanoBot** | WebUI 可观测性 + 多 Provider | 终端调试用户 | 流式 tokens/sec、本地存储草稿、Provider 广纳策略 |
| **NanoClaw** | CLI 命令族完整度 | CLI 重度用户 | spawnContainer TOCTOU 模型、setup 子系统独立维护 |
| **PicoClaw** | 轻量集成 + 文档友好 | 嵌入式 / IoT 场景 | 体积小、Delta Chat 集成深度优化 |
| **CoPaw** | Provider 透明 + Console UX | 自托管 / 本地模型用户 | Console 渲染层深度优化、Provider inline caps 暴露 |
| **LobsterAI** | OpenClaw 上层封装 | 中文 / 教育市场 | 锚定 OpenClaw v2026.8.1，做集成层稳定性治理 |
| **NullClaw** | 安全审批最小实现 | 安全研究者 / 极简主义者 | 高风险命令 `/approve` 暂停而非失败 |
| **IronClaw** | host-runtime 基础原语 | 平台开发者 | `builtin.time` shift、codebase knowledge graph |

**关键差异点**：
- **WASM 插件化**（ZeroClaw）是当前唯一明确走向"编译期 feature → 运行时插件"的项目，对其他框架构成架构压力
- **多 Agent 治理** 路径分叉明显：OpenClaw 走 per-agent MCP scoping、CoPaw 走子 agent 状态机澄清、ZeroClaw 走 host 级 admission
- **Provider 透明度** 已成为继功能完备后的下一竞争维度——CoPaw 与 OpenClaw 在此交锋

---

## 6. 社区热度与成熟度

按成熟度分层：

### 🟢 第一梯队：快速迭代 + 高强度修复
- **OpenClaw**：日吞吐 1000 条级，P0/P1 修复链路完整，处于"用工程化对抗回归"阶段
- **ZeroClaw**：日吞吐 100 条级，RFC 治理 + 安全栈推进，已进入"嵌入式运行时"成熟期
- **Hermes Agent**：日吞吐 100 条级，CVE 24h 闭环 + Desktop 多平台同步打磨

### 🟡 第二梯队：功能扩张 + 工程纪律
- **NanoBot**：测试重构（#5907，净减 703 行）+ 用户痛点修复（#5912），单维护者驱动但节奏稳健
- **CoPaw**：13 PR/11 Issue 当日提交，4 名首次贡献者加入，但合并吞吐为零是显著瓶颈
- **LobsterAI**：稳定跟进 OpenClaw 修复链（#2763/#2764/#2765），5 个 stale PR 被激活体现社区维护节奏加快

### 🟠 第三梯队：积压修复
- **NanoClaw**：48 PR 涌入但合并率 4%，单一贡献者 glifocat 撑起 60% 提交，review 资源严重不足
- **PicoClaw**：PR #3222 滞留 85 天，新版 OpenAI Responses API 迁移卡评审 9 天

### ⚪ 第四梯队：静默维护 / 无活动
- **NullClaw / IronClaw**：低频维护，但 NullClaw PR #1009（安全审批）属关键修复，不宜长期搁置
- **TinyClaw / Moltis / ZeptoClaw**：当日零活动，已脱离主流视野

**成熟度判读**：生态已从"百花齐放的功能竞赛"转向"工程纪律与运维可靠性的比拼"。能够同时跑通"高吞吐 + 高合并率 + 安全响应"的，仅有 OpenClaw、ZeroClaw、Hermes Agent 三家。

---

## 7. 值得关注的趋势信号

### 📈 信号 1：从"功能能用"到"规模化运维可靠"
OpenClaw #153257（35 评论）的"8 小时恢复战"、Hermes Agent #122822（system prompt 持久化错误）、CoPaw #7628（context compaction 超预算）是同一种焦虑的三种表达——**升级/压缩/重启三类

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目日报
**日期：2026-09-26**
**项目地址：[HKUDS/nanobot](https://github.com/HKUDS/nanobot)**

---

## 一、今日速览

NanoBot 今日处于**高活跃、多线并进**的开发状态。过去 24 小时内共处理 4 条 Issue 和 13 条 PR，整体节奏紧凑但无新版本发布。当日有 2 条 PR 完成合并/关闭，分别为 WebUI 草稿持久化修复 (#5912) 与测试套件整合 (#5907)。社区贡献方向清晰：**WebUI 体验打磨**、**MCP 工具发现机制完善**、**Email 渠道 OAuth 与过滤能力**以及**多模型 Provider 接入**。维护者 chengyongru 仍为最主要的核心维护者，新晋贡献者 Lesereingrape 与 tilladam 也展现出稳定产出。

---

## 二、版本发布

**今日无新版本发布。** 最近一次发布为 **v0.3.5**（[Issue #5788](https://github.com/HKUDS/nanobot/issues/5788) 已关闭并归档），该 Issue 作为发版通告已转为只读记录。

---

## 三、项目进展

今日合并/关闭的重要 PR 共 2 条，集中在体验稳定性与测试质量两个维度：

| PR | 类型 | 影响 | 链接 |
|---|---|---|---|
| [#5912](https://github.com/HKUDS/nanobot/pull/5912) | Bug Fix（WebUI） | 修复切换会话或刷新页面时草稿丢失的问题，会话草稿（含提及与引用上下文）现已持久化到 localStorage，附件保持内存态 | [#5912](https://github.com/HKUDS/nanobot/pull/5912) |
| [#5907](https://github.com/HKUDS/nanobot/pull/5907) | 测试重构 | 跨 34 个文件整合 Python 与 WebUI 测试，参数化 46 组用例并保留全部 171 个原始断言；净减少 703 行代码，生产代码不变 | [#5907](https://github.com/HKUDS/nanobot/pull/5907) |

两条 PR 一条直面用户可感知的"丢草稿"痛点，另一条在不改外部行为的前提下夯实了测试根基。**项目整体在"用户体感"与"工程纪律"两条线上各推进一步**，健康度持续上升。

---

## 四、社区热点

虽然今日 Issues 评论数整体不高（多为 0-2 条），但根据**讨论密度与社区关注度**，以下三个主题热度最高：

1. **WebUI 体验改进（双重呼声）**
   - [Issue #5908](https://github.com/HKUDS/nanobot/issues/5908)：流式输出时显示实时 tokens/sec
   - [Issue #5910](https://github.com/HKUDS/nanobot/issues/5910)：按会话持久化草稿（**已并入 #5912 解决**）
   - 背后诉求：**用户希望 WebUI 不仅是功能完备，更应是"可观察、可恢复"**——既能看到模型工作状态，也能在误操作后保留自己的输入。

2. **MCP 工具发现机制**
   - [PR #5916](https://github.com/HKUDS/nanobot/pull/5916)：修复分页 `tools/list` 仅加载首页的 bug
   - [PR #5386](https://github.com/HKUDS/nanobot/pull/5386)：保留 MCP Apps 结果元数据（标记 conflict，需协调）
   - 背后诉求：**MCP 作为核心扩展协议，正在从"能跑"走向"跑得全、跑得对"**，分页与元数据处理是该协议落地必须解决的工程细节。

3. **Email 渠道的现代化改造**
   - 三条由 tilladam 提交的 PR（[#5605](https://github.com/HKUDS/nanobot/pull/5605)、[#5606](https://github.com/HKUDS/nanobot/pull/5606)、[#5609](https://github.com/HKUDS/nanobot/pull/5609)）形成体系：基础认证弃用 → 引入 Microsoft OAuth → 邮件按收件人别名过滤 → 仅对真正投递的消息标记 `\Seen`
   - 背后诉求：**Office365/Outlook 全面转向 OAuth2**，旧密码方案不再可行，社区正在系统性跟进平台政策变化。

---

## 五、Bug 与稳定性

| 严重度 | Issue/PR | 描述 | 是否有 Fix PR |
|---|---|---|---|
| 🟠 中 | [#5903](https://github.com/HKUDS/nanobot/issues/5903) | Feishu 渠道在空闲自动压缩后，会话检查点标记消息 `"Continue the active task..."` 被当作普通消息发给用户 | 暂未关联具体 PR，但 #5780（停止发送压缩通知）方向相关 |
| 🟡 中 | [PR #5916](https://github.com/HKUDS/nanobot/pull/5916) | MCP `tools/list` 分页仅注册首页，启用 `enabledTools` 后分页工具不可用 | ✅ 已有 Fix PR |
| 🟡 中 | [PR #5914](https://github.com/HKUDS/nanobot/pull/5914) | Napcat 中声明 `file_size` 为非数值的图片被直接丢弃 | ✅ 已有 Fix PR |
| 🟢 低 | [PR #5913](https://github.com/HKUDS/nanobot/pull/5913) | 环境变量 `NANOBOT_MAX_CONCURRENT_REQUESTS` 不可解析时直接抛错而非回退默认值 | ✅ 已有 Fix PR |
| 🟢 低 | [PR #5605](https://github.com/HKUDS/nanobot/pull/5605) | IMAP 邮件被过滤掉后仍被标记 `\Seen`，导致邮件丢失 | ✅ 已有 Fix PR |
| 🟢 低 | [PR #5912](https://github.com/HKUDS/nanobot/pull/5912) | WebUI 切换会话或刷新后草稿丢失 | ✅ 已合并 |

**整体判断：** 当前开放的严重/回归级 Bug 极少，多数修复都已伴随 PR 提交，**项目稳定性处于上升通道**。最值得维护者优先关注的是 [#5903](https://github.com/HKUDS/nanobot/issues/5903)——它属于"内部状态泄漏到用户面前"的 UX 事故，需尽快闭环。

---

## 六、功能请求与路线图信号

| 需求 | 来源 | 状态 | 路线图判断 |
|---|---|---|---|
| 流式输出实时 tokens/sec 指示器 | [#5908](https://github.com/HKUDS/nanobot/issues/5908) | 待实现 | **大概率进入下一版本**，属于"低风险、高体感"功能，且与现有 WebUI 流式架构契合 |
| Cheaper Inference 作为命名 Gateway Provider | [PR #5915](https://github.com/HKUDS/nanobot/pull/5915) | 待合并 | **可能性高**，符合 NanoBot 一贯的"广纳 Provider"策略（OpenAI 兼容 + 按 ID 计费） |
| MCP Apps 结果元数据保留 | [PR #5386](https://github.com/HKUDS/nanobot/pull/5386) | Conflict，需协调 | **中期会合并**，MCP 协议生态扩张的必经一步 |
| 邮箱按收件人别名过滤 | [PR #5606](https://github.com/HKUDS/nanobot/pull/5606) | 待合并 | **较确定**，与 tilladam 提交的 #5605、#5609 组成完整邮件渠道升级包 |

**信号：** WebUI 的可观察性（MCP 流式速度指示）与邮件渠道现代化，正在成为社区驱动的主要路线图方向。

---

## 七、用户反馈摘要

从有限但精炼的 Issue 评论中可提炼以下真实痛点：

- **"工作被压缩后用户收到看不懂的提示"** — Feishu 用户 #5903 反馈自动压缩后收到了内部指令文本，说明**内部状态与对外展示的边界管理**仍是 NanoBot 多渠道适配的薄弱环节。
- **"切换会话丢草稿"** — 两位用户（coinwh）在 #5910 与 chengyongru 在 #5912 描述中均表达了对 WebUI 状态可靠性的失望，**典型场景：多会话工作被打断或误刷新**。
- **"看不到生成速度"** — coinwh 在 #5908 中提到需要 tokens/sec 才能判断模型是否卡死，**这是 AI 编程/调试场景下的核心可观测性需求**。
- **"MCP 工具明明选了却找不到"** — PR #5916 描述揭示了工具分页导致的能力"静默失效"，**开发者最担忧的不是报错，而是看似正常却没生效**。

正面反馈：**今日无明显投诉或回归抱怨**，合并的 #5912 与 #5907 获得合并本身即说明社区认可当前处理方向。

---

## 八、待处理积压

下列 PR 已开放较长时间但仍未合并，建议维护者优先 review：

| PR | 标题 | 创建日期 | 状态 | 链接 |
|---|---|---|---|---|
| [#5005](https://github.com/HKUDS/nanobot/pull/5005) | fix(exec): allow scoped tmp cleanup commands | 2026-07-20 | OPEN, conflict, p1 | 涉及执行安全的精确化 |
| [#5204](https://github.com/HKUDS/nanobot/pull/5204) | refactor(providers): declare Responses capabilities | 2026-08-01 | OPEN, p1 | 多 Provider 路由核心重构 |
| [#5386](https://github.com/HKUDS/nanobot/pull/5386) | feat(mcp): preserve MCP Apps result metadata | 2026-08-13 | OPEN, conflict | MCP 生态关键能力 |
| [#5605](https://github.com/HKUDS/nanobot/pull/5605)、[#5606](https://github.com/HKUDS/nanobot/pull/5606)、[#5609](https://github.com/HKUDS/nanobot/pull/5609) | Email 渠道三件套（`\Seen`、别名过滤、OAuth） | 2026-08-30 | OPEN, p2 | 整套邮件渠道升级，建议批量评审 |
| [#5780](https://github.com/HKUDS/nanobot/pull/5780) | fix: stop sending context compaction notifications | 2026-09-15 | OPEN, p2 | 与 #5903 高度相关，应一并考量 |
| [#5916](https://github.com/HKUDS/nanobot/pull/5916) | fix(mcp): load all pages of server tools | 2026-09-25 | OPEN, p2 | 新鲜但影响面广 |

**提醒：** p1 级别的 [#5005](https://github.com/HKUDS/nanobot/pull/5005) 与 [#5204](https://github.com/HKUDS/nanobot/pull/5204) 积压时间最长（>50 天），建议维护者评估是否需要额外 reviewer 或拆分降低合并阻力。

---

*报告生成时间：2026-09-26｜数据来源：GitHub Issues / Pull Requests*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目日报
**日期：2026-09-26**
**仓库：[NousResearch/hermes-agent](https://github.com/nousresearch/hermes-agent)**

---

## 1. 今日速览

Hermes Agent 今日保持高度活跃的修复与改进节奏，**24 小时内累计 50 条 Issue 更新 + 50 条 PR 更新**，未发布新版本。问题主要集中在 **安装/更新流水线（install-update）**、**会话状态与压缩（compression）**、**Windows / macOS 平台兼容性** 三大方向，反映出 PM（包管理器）切换与多平台支持的阵痛期仍在持续。已闭环条目集中在**安全 CVE 修复**与**已知 Windows gateway 重复报告**，项目整体处于"密集修 bug、稳步推进桌面/CLI 体验"的健康修复状态。

---

## 2. 版本发布

⚠️ 无新版本发布。最近一次发布未在今日数据中出现。

---

## 3. 项目进展

今日成功闭环的关键条目：

| 类型 | 编号 | 说明 |
|---|---|---|
| 🔒 Issue | [#122424](https://github.com/NousResearch/hermes-agent/issues/122424) | 修复 `js-yaml@4.3.1` / `yaml<2.9` CVE 漏洞（GHSA-2883-xcg3-v3hh、GHSA-48c2-rrv3-qjmp） |
| 🪟 Issue | [#122736](https://github.com/NousResearch/hermes-agent/issues/122736) | Windows gateway 在 PM store Python 下出现 pydantic ABI 不匹配的**重复报告**，已合并/关闭以避免重复跟踪 |
| 🛠 PR | [#62239](https://github.com/NousResearch/hermes-agent/pull/62239) | 统一本地 OpenAI 兼容 Provider 别名（vllm / llamacpp / llama.cpp）到 `custom`，消除"custom / local / custom:local"配置混淆 |

**整体进展判断：** 桌面端与 CLI 在 PM 切换后的回归问题形成密集修复链，多个 P0/P1 修复 PR 已就位等待合并；安全响应较快，CVE 报告 24h 内闭环。属于"集中解决历史技术债"的中段阶段。

---

## 4. 社区热点（按评论数排序）

| 排名 | 编号 | 评论 | 主题 |
|---|---|---|---|
| 🥇 | [#122495](https://github.com/NousResearch/hermes-agent/issues/122495) | 8 | Windows：`hermes update` 在 pause-gateways 步骤因 venv 重定向器 shim 形式被误判而中止 |
| 🥈 | [#122593](https://github.com/NousResearch/hermes-agent/issues/122593) | 7 | `pm` 工作区物化器剥离 `pm/uv.lock`，导致所有 `hermes pm` 命令失败 |
| 🥉 | [#122425](https://github.com/NousResearch/hermes-agent/issues/122425) | 4 | 受管环境工作区副本在更新中漂移，缺少 `vunknown` 安装元数据，且无 `pm sync` 命令 |
| 4 | [#90949](https://github.com/NousResearch/hermes-agent/issues/90949) | 3 | `read_file` 去重响应可在上下文压缩后存活，导致模型引用已消失内容 |
| 5 | [#123288](https://github.com/NousResearch/hermes-agent/issues/123288) | 3 | Kanban 看板无法声明默认 workspace kind，project-scoped 看板 dir 任务被 Git-root 守卫拒绝 |

**诉求分析：** 今日讨论热度最高的话题集中在 **"PM 重构后的回归"** 与 **"会话状态/压缩状态损坏"**。#122495 与 #122593 同属 PM 工作区物化链路上的副作用，社区已自发串联多个症状（uv.lock 缺失、profile 网关身份识别、版本元数据），说明用户希望 `hermes pm` 子命令体系稳定下来；#90949 与 #122822 都属于会话状态被压缩逻辑损坏的严重类问题，体现用户对**会话完整性**的强烈关注。

---

## 5. Bug 与稳定性（按严重程度排序）

### 🔴 P0（核心功能不可用）

| Issue | 标题 | 是否已有 Fix PR |
|---|---|---|
| [#122822](https://github.com/NousResearch/hermes-agent/issues/122822) | Gateway `/compress` 在 commit 边界持久化缩减版 system prompt（丢失 skills index） | ✅ [#123290](https://github.com/NousResearch/hermes-agent/pull/123290)（依赖 #122825） |

### 🟠 P1（安装/更新链路）

| Issue | 标题 | 是否已有 Fix PR |
|---|---|---|
| [#122495](https://github.com/NousResearch/hermes-agent/issues/122495) | Windows `hermes update` 在 profile gateway shim 形式下中止 | ❌ 暂无 |
| [#122593](https://github.com/NousResearch/hermes-agent/issues/122593) | pm 工作区物化器剥离 `pm/uv.lock`，所有 `hermes pm` 命令崩溃 | ❌ 暂无 |
| [#123340](https://github.com/NousResearch/hermes-agent/issues/123340) | systemd gateway 重启时反复执行 source-completion，environments 目录膨胀至数十 GB / ENOSPC | ✅ [#123364](https://github.com/NousResearch/hermes-agent/pull/123364) |

### 🟡 P2（功能降级）

| Issue | 标题 | 是否已有 Fix PR |
|---|---|---|
| [#122425](https://github.com/NousResearch/hermes-agent/issues/122425) | 受管 env 工作区副本漂移 + 缺少 `vunknown` 安装元数据 | ❌ 暂无 |
| [#90949](https://github.com/NousResearch/hermes-agent/issues/90949) | `read_file` 去重响应在压缩后存活 | ❌ 暂无 |
| [#123327](https://github.com/NousResearch/hermes-agent/issues/123327) | macOS Webhook 服务器 `setsockopt SO_KEEPALIVE: errno 22` | ❌ 暂无 |
| [#118379](https://github.com/NousResearch/hermes-agent/issues/118379) | Anthropic 池化凭据刷新被回退，2 个订阅合并计费 | ✅ [#123361](https://github.com/NousResearch/hermes-agent/pull/123361) |
| [#123324](https://github.com/NousResearch/hermes-agent/issues/123324) | macOS 源码更新在 Git partial-clone assertion 失败 | ❌ 暂无 |
| [#123357](https://github.com/NousResearch/hermes-agent/issues/123357) | Desktop Voice Chat 静默丢弃 barge-in 语音 | ✅ [#123371](https://github.com/NousResearch/hermes-agent/pull/123371) |
| [#123362](https://github.com/NousResearch/hermes-agent/issues/123362) | 压缩回退状态在辅助模型访问失败后无法恢复 | ❌ 暂无 |
| [#123337](https://github.com/NousResearch/hermes-agent/issues/123337) | Desktop 重命名后 project-scoped/forked session 行未刷新 | ❌ 暂无 |
| [#123350](https://github.com/NousResearch/hermes-agent/issues/123350) | fallback 恢复后主模型 context window 退回启动值 | ❌ 暂无 |
| [#123352](https://github.com/NousResearch/hermes-agent/issues/123352) | iteration-limit 摘要请求已计费但未入账 token/cost/state.db | ❌ 暂无 |
| [#123354](https://github.com/NousResearch/hermes-agent/issues/123354) | Remote sync-back 在 truncate 后 copy 失败导致主机文件损坏 | ❌ 暂无 |
| [#123339](https://github.com/NousResearch/hermes-agent/issues/123339) | Desktop Force Reload 在已配置 remote backend 上仍弹 provider 选择器 | ❌ 暂无 |
| [#123203](https://github.com/NousResearch/hermes-agent/issues/123203) | NVIDIA ≥580 SwiftShader 回退误伤未受影响驱动 | ❌ 暂无 |

### 🟢 P3 / 其他
[#123288](https://github.com/NousResearch/hermes-agent/issues/123288)、[#123292](https://github.com/NousResearch/hermes-agent/issues/123292)、[#123341](https://github.com/NousResearch/hermes-agent/issues/123341)、[#123368](https://github.com/NousResearch/hermes-agent/issues/123368)、[#123370](https://github.com/NousResearch/hermes-agent/issues/123370)、[#123372](https://github.com/NousResearch/hermes-agent/issues/123372)、[#123343](https://github.com/NousResearch/hermes-agent/issues/123343) 等多项 UI/依赖更新类问题。

**修复覆盖率：** P0 1/1 = 100% 已配 Fix PR；P1 3/3 = 100%（2 个仍在等待合并）；P2 已配 Fix PR 约 4/14，**整体覆盖率偏低**，表明下一波合并窗口会非常密集。

---

## 6. 功能请求与路线图信号

| Issue / PR | 主题 | 推进概率 |
|---|---|---|
| [#72942](https://github.com/NousResearch/hermes-agent/issues/72942) | `pre_gateway_dispatch` action：基于共享 token 的动态 profile 路由 | 🟡 等待 needs-decision，长期未响应（创建于 2026-07） |
| [#65914](https://github.com/NousResearch/hermes-agent/issues/65914) | Project 元数据更新 CLI/API（name、description、icon、color、board_slug） | 🟢 已有配套 [#123338](https://github.com/NousResearch/hermes-agent/issues/123338) Desktop 描述编辑需求，需求面明确 |
| [#123292](https://github.com/NousResearch/hermes-agent/issues/123292) | Desktop 让目标/标准/任务详情可选中并复制 | 🟡 小型 UX 改进 |
| [#123338](https://github.com/NousResearch/hermes-agent/issues/123338) | Desktop 创建后编辑 Project 描述/icon/color | 🟢 与 #65914 联动 |
| [PR #123359](https://github.com/NousResearch/hermes-agent/pull/123359) | Desktop 在 Recents 显示消息会话（默认关闭） | 🟢 已提交 |
| [PR #123275](https://github.com/NousResearch/hermes-agent/pull/123275) | Dashboard 移动端剪贴板粘贴支持 | 🟢 已提交 |

**信号：** 项目元数据编辑缺口（描述/icon/color）已是跨 Desktop、CLI、Plugin 三方的共同诉求，#65914 + #123338 合并推进可能性最高；动态 profile 路由（#72942）虽然呼声不大但属于网关能力扩展，仍待维护者决策。

---

## 7. 用户反馈摘要

从评论与摘要中提炼的真实痛点：

- **PM 切换后用户体验受损**：`hermes pm` 子命令全部失败（#122593），用户**只能部分回滚或手动补救**；update 流程在 macOS / Windows 上都会因基础设施问题中止（#123324, #122495）。社区情绪偏向**"PM 重构收益 vs 回归成本"的质疑**。
- **会话完整性焦虑**：#122822、#90949、#123362 等多个 P0/P2 问题都集中在"压缩/恢复后状态损坏"，用户特别担心 **skills index 丢失、引用不存在内容、压缩回退 latch** 等静默故障。
- **平台分裂明显**：macOS 用户主要报告 webhook / Git partial-clone 问题，Windows 用户报告 shim 形式与 Python ABI 不匹配问题；Linux 桌面用户报告 NVIDIA 驱动误判。三平台没有统一的稳定性预期。
- **计费可信度反馈**：#118379 / #123352 反映出**用户对"计了费但没计入账本"的零容忍**，社区明确要求 token/cost/state.db 与实际请求严格一致。
- **小型 UX 摩擦**：Desktop 中不可复制 goal / criterion（#123292）、重命名 session 状态不同步（#123337）等用户级细节被持续反映，说明桌面端 UX 仍处于打磨期。

---

## 8. 待处理积压（提醒维护者）

| 编号 | 创建日期 | 主题 | 风险 |
|---|---|---|---|
| [#22982](https://github.com/NousResearch/hermes-agent/pull/22982) | 2026-05-10 | gateway `/model <name>\n<prompt>` 内联命令仅消费首行 | 已 OPEN 4 个多月，影响 Slack/Matrix 网关编排 |
| [#72942](https://github.com/NousResearch/hermes-agent/issues/72942) | 2026-07-27 | `pre_gateway_dispatch` 动态 profile 路由 | needs-decision，长期未响应 |
| [#65914](https://github.com/NousResearch/hermes-agent/issues/65914) | 2026-07-16 | Project 元数据更新命令/API | needs-decision，与 #123338 联动推进 |
| [#73342](https://github.com/NousResearch/hermes-agent/pull/73342) | 2026-07-28 | Kimi K2.x/K3 加入 reasoning stale-timeout 白名单 | OPEN 超 60 天，PRATHAMESH75 持续维护 |
| [#90949](https://github.com/NousResearch/hermes-agent/issues/90949) | 2026-08-20 | `read_file` 去重跨压缩存活 | P2 但涉及会话完整性，1 个多月无 Fix PR |

---

## 📊 关键指标

| 指标 | 值 |
|---|---|
| 24h Issue 更新 | 50（48 OPEN / 2 CLOSED） |
| 24h PR 更新 | 50（49 OPEN / 1 CLOSED） |
| 24h 新发布 | 0 |
| P0/P1 配 Fix PR 率 | 4/4（100%） |
| P2 配 Fix PR 率 | ~4/14（28%） |
| 安全 CVE 闭环 | 1（#122424），1 待处理（#123343 httpx2） |

---

**总评：** 项目处于"密集修 bug、推进 PR 等待合并"的中段，P0/P1 修复链路基本完整，P2 修复覆盖偏低需要加速合并。下一波发版信号主要看 P0 PR #123290 与 P1 PR #123364 / #123361 是否能在合并窗口集中通过。维护者建议优先回复 60 天以上 OPEN 的 PR（#22982、#73342）和 needs-decision 决策类 Issue（#72942、#65914），避免积压继续扩大。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报
**日期：2026-09-26**

---

## 1. 今日速览

PicoClaw 今日整体处于**中等偏低活跃度**状态。过去 24 小时内 Issues 端有 2 条动态（1 新开 + 1 已关闭），PR 端有 4 条动态但**全部仍为待合并状态**，无 PR 被合入主干，亦无新版本发布。当日活跃工作集中在两件事：一位新贡献者（aiapienthusiast）提交了接入 **Cheaper Inference 网关**的 PR #3393，以及社区继续推进将 OpenAI provider 切换至 **Responses API** 的 PR #3381（已存在一周，仍在评审中）。项目仍处于稳定的迭代节奏，但 PR 评审吞吐较低，需要维护者加速 review 流程。

---

## 2. 版本发布

🚫 **无新版本发布**。建议关注 PR #3381 与 #3393 合并后的首个 nightly 构建。

---

## 3. 项目进展

📌 **今日无 PR 合入**。

以下为**仍处 Open 状态的 PR**（均需要维护者推动 review）：

| PR | 标题 | 提交时间 | 等待时长 | 影响 |
|---|---|---|---|---|
| [#3381](https://github.com/sipeed/picoclaw/pull/3381) | feat: Switch Openai to responses API | 2026-09-17 | 9 天 | 🔴 高（核心 provider 行为变更） |
| [#3368](https://github.com/sipeed/picoclaw/pull/3368) | docs: add Parallel Search MCP setup example | 2026-09-05 | 21 天（已 stale） | 🟡 中（文档） |
| [#3222](https://github.com/sipeed/picoclaw/pull/3222) | refactor(deltachat): cleanup implementation -200LOC | 2026-07-03 | 85 天 | 🔴 高（影响 Delta Chat 用户） |
| [#3393](https://github.com/sipeed/picoclaw/pull/3393) | feat(provider): add Cheaper Inference provider | 2026-09-25 | 1 天 | 🟢 中（增量增强） |

> ⚠️ **停滞风险**：PR #3222（Delta Chat 重构）已等待 85 天未合入，属于**长期积压 PR**，需要重点关注。

---

## 4. 社区热点

🔥 **本日无评论激增的话题**，但下列 Issues/PR 值得关注：

- **[#3392 CLAassistant 不识别签名](https://github.com/sipeed/picoclaw/issues/3392)** —— 新开 Issue，新贡献者提交 PR #3381 时被 CLA 机器人拦截，签名检测异常。这反映出**项目对新贡献者的入坑体验**存在摩擦，可能影响后续外部贡献。
- **[#3355 飞书 channel 配置报错](https://github.com/sipeed/picoclaw/issues/3355)** —— 已关闭，作者在 Issue 中附带了解决方案（`config.json` 中 `channel_list.feishu` 不识别 `app_id` 字段），这种**用户自提供 fix** 的行为值得维护者致谢，也是社区健康的信号。

---

## 5. Bug 与稳定性

| 严重度 | Issue | 描述 | 状态 | 是否有 Fix PR |
|---|---|---|---|---|
| 🟡 中 | [#3392](https://github.com/sipeed/picoclaw/issues/3392) | CLAassistant 不识别签署 | OPEN（今日新开） | ❌ 无 |
| 🟢 低（已自愈） | [#3355](https://github.com/sipeed/picoclaw/issues/3355) | 飞书 channel 配置字段未识别 | **CLOSED**（用户自查 + 文档修复） | ✅ 用户自提供 |

> 📝 整体稳定性**良好**。没有报告崩溃或回归性问题。今日唯一新 Bug（#3392）属于流程性问题而非运行时 Bug。

---

## 6. 功能请求与路线图信号

### 今日新功能 PR
- **[#3393 Cheaper Inference Provider](https://github.com/sipeed/picoclaw/pull/3393)** —— 集成一个 OpenAI 兼容的 LLM 网关，可统一访问多厂商模型并降低 15-60% 成本。**路线图信号**：项目正在走向**多 provider / 成本优化**方向，符合 AI Agent 生态主流趋势，**预计有较大概率被合并**。

### 已存在但未推进的功能
- **[#3381 OpenAI Responses API 迁移](https://github.com/sipeed/picoclaw/pull/3381)** —— 切换至新版 OpenAI Responses API（用于结构化输出、tool calling 增强）。**长期卡在评审环节**，需要维护者尽快决议。

---

## 7. 用户反馈摘要

由于今日 Issues 评论数普遍较低（最多 3 条），可提炼的反馈有限：

- **🟢 正面信号**：
  - 用户 **ttghub** 在 [#3355](https://github.com/sipeed/picoclaw/issues/3355) 中主动附上完整配置示例与根因分析，体现用户社区技术水平较高。
  - 用户 **georgeatparallel** 主动提交 [#3368](https://github.com/sipeed/picoclaw/pull/3368) 为 Parallel Search MCP 撰写文档，说明**生态合作伙伴正在主动贡献**。

- **🟡 摩擦点**：
  - 新贡献者 **XenonR** 在 PR #3381 提交后被 [#3392](https://github.com/sipeed/picoclaw/issues/3392) 揭示的 CLA 检测问题阻塞，可能影响其继续参与。
  - 飞书配置问题 [#3355](https://github.com/sipeed/picoclaw/issues/3355) 暴露**配置 schema 校验错误信息不够友好**，schema 字段变更未及时同步到错误提示。

---

## 8. 待处理积压

🚨 **建议维护者优先处理以下积压项**：

| 类型 | 编号 | 等待时长 | 紧急原因 |
|---|---|---|---|
| 🔴 PR 长期未审 | [#3222](https://github.com/sipeed/picoclaw/pull/3222) | 85 天 | Delta Chat 集成重构，影响真实用户 |
| 🟠 PR 中等积压 | [#3368](https://github.com/sipeed/picoclaw/pull/3368) | 21 天（stale） | 文档 stale bot 已触发 |
| 🟠 PR 中等积压 | [#3381](https://github.com/sipeed/picoclaw/pull/3381) | 9 天 | 核心 OpenAI provider 行为变更 |
| 🟡 Bug 待处理 | [#3392](https://github.com/sipeed/picoclaw/issues/3392) | 1 天 | 影响 CLA 流程，新贡献者入坑体验 |

---

### 📊 项目健康度评分（本日）

| 维度 | 评分 | 说明 |
|---|---|---|
| 提交活跃度 | ⭐⭐⭐☆☆ | 有新贡献但量少 |
| PR 评审吞吐 | ⭐⭐☆☆☆ | 4 个 PR 0 合入，积压明显 |
| 社区响应度 | ⭐⭐⭐⭐☆ | 用户自驱动修复飞书问题 |
| 稳定性 | ⭐⭐⭐⭐⭐ | 无新增崩溃/回归 |
| 文档与流程 | ⭐⭐⭐☆☆ | CLA 检测存问题，需打磨 |

**总评：3.4 / 5** —— 社区自驱动力良好，但**维护者 review 节奏放缓**，存在轻度积压风险，建议关注 PR #3222 与 #3381。

---

*报告基于 PicoClaw GitHub 公开数据生成。*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目日报 · 2026-09-26

> 数据周期：2026-09-25 ~ 2026-09-26 · 数据源：GitHub · 仓库：[qwibitai/nanoclaw](https://github.com/qwibitai/nanoclaw)

---

## 1. 今日速览

NanoClaw 仓库在 v2.4.0 发布后进入密集修复期，过去 24 小时内 **5 个新 Bug Issue 集中开立、48 个 PR 进入待合并状态**，呈现典型的"补丁洪"模式。绝大多数 PR（占比约 60%）来自同一贡献者 `glifocat`，且均严格遵循 v2 PR 模板、归属于 `core-team` 标签，强烈指向当前为 **官方核心维护者集中回填 setup/installation、Iron Proxy、OpenCode 等子系统的稳定性修复**。无新版本发布，所有 PR 仍处于"等审/待合并"积压中。整体活跃度极高，但合并率（2/50 = 4%）显著偏低，存在 review 资源不足的风险。

---

## 2. 版本发布

**无新版本发布**。当前主线为 v2.4.0（commit `c313d061`），多个新开 Issue 与 PR 均明确指向该版本的回归。

---

## 3. 项目进展

过去 24 小时仅有 **2 个 PR 进入关闭/合并状态**：

| PR | 标题 | 状态 | 影响 |
|---|---|---|---|
| [#3917](https://github.com/qwibitai/nanoclaw/pull/3917) | `fix: seed Claude's default output style, not Concise, which defeated prompt caching` | **CLOSED** | 修复 2.4 起 Claude agent 默认 `Concise` 输出风格导致 prompt cache 失效的问题——属于影响所有 Claude 用户的性能回归 |

值得注意的是，2 个被关闭的 PR 中实际合并数可能为 0（CLOSED 不等于 MERGED）。这意味着 **项目在 v2.4.0 后未对外发出任何合并提交**，仅完成了一次单 PR 关闭。项目整体向前推进的净增量非常有限。

---

## 4. 社区热点

由于所有 PR 的评论数均标记为 `undefined`（系统未返回），以下按 **Issue 评论活跃度** + **PR 创建时间** 排序热点：

### Issues 层
- 🔥 [#3906](https://github.com/qwibitai/nanoclaw/issues/3906) — **唯一有评论（1 条）的 Issue**：`/update-nanoclaw` 自 #3816 后 controller archive 无法加载，stage-rooted 命令在依赖存在前执行。属于**升级路径完全断裂**，优先级最高。

### PR 层（按更新时间）
- 高频维护者 `glifocat` 在 24 小时内**集中提交 17 个 PR**，覆盖：setup、Iron Proxy、OpenCode、agent-runner、CI 模板、labels 等多个子系统，属于"系统性还债"动作。

### 长期热点（积压超过 30 天）
- [#3185](https://github.com/qwibitai/nanoclaw/pull/3185) — Discord webhook interaction `custom_id` 含 `\n` 导致所有审批被误拒（自 2026-08-04 起已 53 天未合并）
- [#3302](https://github.com/qwibitai/nanoclaw/pull/3302) — OneCLI gateway 默认 bind 地址错误（自 2026-08-17 起已 40 天）
- [#3446](https://github.com/qwibitai/nanoclaw/pull/3446) — Bot/webhook 发送者应自动跳过 unknown-sender gate（自 2026-08-22 起已 35 天）

### 社区诉求分析
三个长积压 PR 反映的共同诉求：**渠道/平台适配层的稳定性严重欠打磨**。Discord 审批路径错误意味着即使功能正确，用户根本无法在 Discord 上完成正常的人机交互流程。

---

## 5. Bug 与稳定性

按严重程度排序：

### 🔴 P0 — 关键路径中断（v2.4.0 回归）
1. **[#3906](https://github.com/qwibitai/nanoclaw/issues/3906)** `/update-nanoclaw` 升级流程彻底失效
   - 根因：controller archive 自 #3816 后不再包含 `setup/`，stage-rooted 命令过早执行
   - **已有 Fix PR**：[#3913](https://github.com/qwibitai/nanoclaw/pull/3913)（同日提交）

### 🟠 P1 — 正确性/数据损坏
2. **[#3911](https://github.com/qwibitai/nanoclaw/issues/3911)** `ncl groups restart --id <other>` 误重启调用方
   - agent 在 `cli_scope: global` 下重启别的 group 时，错误地重启了自己
   - **暂无对应 Fix PR**，需关注后续响应

3. **[#3909](https://github.com/qwibitai/nanoclaw/issues/3909)** 已删除的 agent group 仍会被启动 session 容器
   - `spawnContainer` 中 `getAgentGroup` 调用与容器启动存在时间窗口，TOCTOU 竞态
   - **暂无对应 Fix PR**

### 🟡 P2 — 运维/可观测性
4. **[#3916](https://github.com/qwibitai/nanoclaw/issues/3916)** `nanoclaw.log` 与 `nanoclaw.error.log` 不轮转、不带日期
   - 报告案例：10 MB/29 MB 单文件横跨 4 个月（自 5 月起），造成"看似线上事故实则历史日志"的诊断误判
   - **暂无对应 Fix PR**

### 🟢 P3 — 安装体验
5. **[#3907](https://github.com/qwibitai/nanoclaw/issues/3907)** 嵌套 pnpm 在 stdout 输出 workspace warning 时，gateway 检测失败
   - 健康安装被误判为"未安装"
   - **已有 Fix PR**：[#3910](https://github.com/qwibitai/nanoclaw/pull/3910)

**整体稳定性评估**：v2.4.0 暴露了 setup 与 update 流程的多处回归，P0/P1 级别问题集中于升级路径、agent 调度正确性、容器生命周期一致性，建议维护者优先处理这三条链。

---

## 6. 功能请求与路线图信号

今日未观察到显式 feature request 类 Issue，但通过 PR 标题可推断项目短期路线图：

| 信号方向 | 对应 PR | 路线图含义 |
|---|---|---|
| **可配置扫荡超时** | [#3646](https://github.com/qwibitai/nanoclaw/pull/3646) `global env overrides for ABSOLUTE_CEILING_MS and CLAIM_STUCK_MS` | 官方承认本地模型后端需要更长超时，将开放运维旋钮 |
| **可插拔调度许可** | [#3903](https://github.com/qwibitai/nanoclaw/pull/3903) `pluggable admission for due-session wakes` | 引入调度扩展点（并发上限、静默时段、优先级）——为下一步多 agent 协作铺路 |
| **setup 安全收紧** | [#3920](https://github.com/qwibitai/nanoclaw/pull/3920) `restrict failure-assist agents on a live install` | 明确回应"setup 流程破坏现网"的痛点，将限制失败辅助 agent 的权限 |

判断：以上三个方向均**极可能被纳入 v2.4.1 补丁版或 v2.5**，体现"补齐运维旋钮 + 收紧安装期权限 + 扩展调度 API"的短期方向。

---

## 7. 用户反馈摘要

由于评论数据稀疏，提炼维度有限，可观测的真实痛点：

1. **升级体验崩塌**（[#3906](https://github.com/qwibitai/nanoclaw/issues/3906)）：`/update-nanoclaw` 自某次重构后实质性失效，迫使运维者回退或手动介入——这是 SaaS 化安装最致命的负面反馈。

2. **macOS launchd 用户长期受日志污染困扰**（[#3916](https://github.com/qwibitai/nanoclaw/issues/3916)）：报告者明确为"launchd install (macOS, v2.3.0 → 2.4.0)"用户，说明 macOS 路径在日志轮转上完全缺位。

3. **OpenCode / Iron Proxy 路径在新版本上"无法开局"**：
   - [#3907](https://github.com/qwibitai/nanoclaw/issues/3907) 健康安装被误判
   - [#3891](https://github.com/qwibitai/nanoclaw/pull/3891) Iron Control 在 arm64 上 `exec format error`
   - 反映新接入 provider 的兼容矩阵不全。

4. **跨渠道审批体验断裂**（[#3185](https://github.com/qwibitai/nanoclaw/pull/3185)）：Discord 用户长期反映"点 Approve 实际被 Reject"，严重影响人机交互信心——**这是至今最长的积压用户痛点**。

5. **隐含不满信号**：Issue 普遍 0 评论与 0 👍，且无新版本说明用户社区在 Discord/Slack 等渠道反馈居多，GitHub Issue 区已不能反映完整用户情绪。

---

## 8. 待处理积压

### 🔴 长期未响应（> 30 天）

| Issue/PR | 类型 | 滞留天数 | 风险 |
|---|---|---|---|
| [PR #3185](https://github.com/qwibitai/nanoclaw/pull/3185) Discord webhook `\n` 解析 | Bug | 53 | Discord 用户全部审批失效 |
| [PR #3302](https://github.com/qwibitai/nanoclaw/pull/3302) OneCLI gateway bind 默认值 | Bug | 40 | 容器无法连回 gateway |
| [PR #3446](https://github.com/qwibitai/nanoclaw/pull/3446) Bot sender 自动跳过 unknown-sender gate | Bug | 35 | bot 渠道被反复要求审批 |

### 🟡 24h 内新增但已具备 fix PR（建议快速合并）

| Issue | 对应 Fix PR |
|---|---|
| [#3906](https://github.com/qwibitai/nanoclaw/issues/3906) | [PR #3913](https://github.com/qwibitai/nanoclaw/pull/3913) |
| [#3907](https://github.com/qwibitai/nanoclaw/issues/3907) | [PR #3910](https://github.com/qwibitai/nanoclaw/pull/3910) |
| [#3916](https://github.com/qwibitai/nanoclaw/issues/3916) | **暂无 PR** ⚠️ |
| [#3911](https://github.com/qwibitai/nanoclaw/issues/3911) | **暂无 PR** ⚠️ |
| [#3909](https://github.com/qwibitai/nanoclaw/issues/3909) | **暂无 PR** ⚠️ |

### 🟢 维护者关注提醒

- **3 个 P0/P1 Bug 暂无对应 Fix PR**（#3911、#3909、#3916），其中 #3916 日志轮转问题对所有 macOS 用户持续产生影响。
- **48 个 Open PR 积压**，对单一贡献者驱动的项目而言，review 能力是当前最大瓶颈；建议至少按子系统（setup / provider / agent-runner / CI）分组评审。

---

## 健康度总结

| 维度 | 评级 | 说明 |
|---|---|---|
| 提交活跃度 | ⭐⭐⭐⭐⭐ | 极高，48 PR + 5 Issue/日 |
| 合并吞吐 | ⭐ | 极低（2/50），review 严重阻塞 |
| 缺陷可见性 | ⭐⭐⭐⭐ | 用户能稳定复现并上报 |
| 修复响应速度 | ⭐⭐⭐ | 5 个 Bug 中 2 个同日有 fix PR，但剩余 3 个 P0/P1 悬空 |
| 版本节奏 | ⭐⭐ | v2.4.0 出现密集回归后无补丁版本输出 |
| 长期积压治理 | ⭐ | 3 个 30+ 天 PR 未关闭，无明确淘汰机制 |

**结论**：NanoClaw 正处于"功能实现快、稳定性收尾慢"的典型快速迭代后期。**建议维护者在 72 小时内发布 v2.4.1 候选版**，至少包含 P0 升级路径修复（#3906）、日志轮转（#3916）、以及长期积压的 Discord 审批 bug（#3185），以重建社区对升级通道的信心。

---

*报告生成时间：2026-09-26 · 数据基线：GitHub REST API*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目日报

**日期**：2026-09-26
**仓库**：[nullclaw/nullclaw](https://github.com/nullclaw/nullclaw)

---

## 1. 今日速览

NullClaw 今日整体活跃度处于**低位**水平。过去 24 小时内仓库无新 Issue 提交、无 Issue 关闭、无新版本发布，仅有 1 条新 PR 处于待合并状态（#1009），表明项目正处于迭代间歇期或维护者集中处理已积累议题的阶段。该 PR 聚焦于「受监督自主性」(supervised autonomy) 的核心行为修复，属于安全相关的重要改动，值得维护者优先评审。

---

## 2. 版本发布

今日无新版本发布。近期版本动态请参考 GitHub Releases 页面：https://github.com/nullclaw/nullclaw/releases

---

## 3. 项目进展

**今日合并/关闭的重要 PR：0 条**

虽然今日没有 PR 落地，仍有以下值得关注的待合并变更：

- **[PR #1009](https://github.com/nullclaw/nullclaw/pull/1009)** — `fix(exec): pause for /approve on medium/high-risk commands instead of failing`
  - 作者：serhiy-bzhezytskyy
  - 状态：OPEN（待合并）
  - 该 PR 关闭了 Issue #900，修复了「受监督自主性」功能未按设计工作的缺陷。按设计意图，`/bash`、`/exec` 或 LLM 发出的中高风险 shell 命令本应暂停并等待 `/approve`，但实际行为始终直接失败，从未进入 `approval_request` 状态。
  - 影响范围：涉及核心执行层的安全审批链路，是面向用户可信度的重要修复。

项目整体进度评估：今日无净推进，但 #1009 若合并将解决一个关键安全语义缺陷，相当于补齐一块重要功能拼图。

---

## 4. 社区热点

今日热度主要集中在唯一的开放 PR 上：

- **[PR #1009](https://github.com/nullclaw/nullclaw/pull/1009)** — 0 评论 / 0 👍
  - 话题集中度：高（今日唯一讨论点）
  - 诉求分析：用户期望高风险命令的审批工作流真正可用，而非直接报错；这反映出社区对「AI 智能体安全护栏」实用性的强烈需求——审批机制如果只是形式上的存在而无实际触发，会严重削弱用户对系统自治边界的信任。

---

## 5. Bug 与稳定性

| 严重程度 | 问题 | 状态 | 修复 PR |
|---------|------|------|--------|
| 🔴 高 | 受监督自主性审批工作流失效：高风险命令未进入 `approval_request` 暂停状态，而是直接失败 | 已有 fix PR 待合并 | [PR #1009](https://github.com/nullclaw/nullclaw/pull/1009) |

该 Bug 影响 `/bash`、`/exec` 和 LLM 发起的 shell 命令三条路径，属于跨入口的系统性问题，可能导致用户在高风险场景下无法通过 `/approve` 恢复执行，或更糟的是对「自主执行失败」的根因产生误判。

---

## 6. 功能请求与路线图信号

今日未新增功能请求 Issue。但从 #1009 关闭的 Issue #900 可推断以下隐含需求：

- **可中断/可恢复的安全审批体验**：用户希望审批流程不仅存在，而且要工作流完整、易于介入。
- **统一的审批语义**：三条命令入口（`/bash`、`/exec`、LLM 自发）应共享一致的审批行为，而非各自实现差异。

这些信号暗示下一版本若整合 PR #1009，将在「安全一致性」上迈出重要一步，可能成为未来版本说明中的亮点。

---

## 7. 用户反馈摘要

今日 Issues 评论区无新增反馈。结合 PR #1009 的描述，可提炼以下用户痛点：

- **痛点**：当系统判定某条命令为中等或高风险时，用户预期是「提示我审批」，但实际收到的是「执行失败」错误信息，体验割裂。
- **使用场景**：开发者使用 NullClaw 作为 AI 智能体助手执行 shell 命令时，需要保留对危险操作的最终控制权，但又希望避免每次都因审批机制失灵而被迫切换到全手动模式。
- **满意度推断**：受此 Bug 影响的用户对当前「受监督自主性」功能的实际可用性应感到不满。

---

## 8. 待处理积压

- **[PR #1009](https://github.com/nullclaw/nullclaw/pull/1009)** — 创建于 2026-09-25，已满 1 天，仍为 OPEN 状态，无评论、无审查反馈。该 PR 涉及安全核心路径，建议维护者优先 review 并进行 CI 验证。
- 提示：今日无新 Issue 提交，但建议维护者排查是否有长期未响应的旧 Issue 积压（当前数据快照仅覆盖过去 24 小时，未呈现完整积压视图），可通过仓库 Issue 标签筛选 `needs-triage`、`stale` 等标记项进行清理。

---

## 附：健康度评估

| 指标 | 今日值 | 评估 |
|------|--------|------|
| Issue 流转 | 0 开 / 0 关 | ⚪ 中性（无新问题暴露） |
| PR 流转 | 0 合并 / 1 待合并 | 🟡 有进展但未落地 |
| 版本发布 | 0 | ⚪ 间歇期 |
| 社区互动 | 0 评论 / 0 反应 | 🔴 互动偏冷 |

**总体判断**：项目处于平静的维护与待评审阶段，无明显异常，但建议维护者尽快对 PR #1009 进行审查——安全相关 PR 不宜长期搁置。

---
*报告生成时间：2026-09-26 | 数据来源：GitHub API 快照*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报

**日期：2026-09-26**
**仓库：** [nearai/ironclaw](https://github.com/nearai/ironclaw)

---

## 1. 今日速览

IronClaw 今日处于**低活跃度的维护态**。过去 24 小时内 Issues 端无任何新开、活跃或关闭的工单，PR 端有 2 条保持 OPEN 状态但均无新增评论或反应。整体而言，项目当日无新版本发布、无合并事件、无社区互动增长迹象，节奏平稳但缺乏实质性推进。健康度评估：**稳定偏静默**，核心维护工作集中在基础设施自动更新与一处较大规模的运行时修复上。

---

## 2. 版本发布

无新版本发布。本节略。

---

## 3. 项目进展

今日无 PR 合并或关闭，**实质性代码进展为 0**。值得关注的 OPEN PR 状态如下：

- **PR #7988** — [`chore(agents): refresh codebase knowledge graph`](https://github.com/nearai/ironclaw/pull/7988)
  - 由 `ironclaw-ci[bot]` 自动生成的代码库知识图谱快照刷新（nightly `Codebase Graph Refresh` workflow 产出）。
  - 体积 XS、风险低、贡献者为 core 成员 bot。属于周期性 CI/基础设施维护。
  - 状态：2026-09-26 仍处于待合并状态，建议维护者按常规节奏 review 并合并。

- **PR #8108** — [`fix(host-runtime): add builtin.time shift and typed input issues`](https://github.com/nearai/ironclaw/pull/8108)
  - 新贡献者 **Bortlesboat** 提交，体积 XL、风险 low、scope 为 docs。
  - 为 `builtin.time` 增加 `operation: "shift"`，支持对秒/分/小时/天/周进行带符号偏移，并明确"天/周为固定时长"语义。
  - 引入宽累加器以表示有符号抵消；同时修正 typed input 相关问题。
  - 创建于 2026-09-22，最近更新于 2026-09-25，已停留 1 天未收到评审反馈。

**整体进度评估：** 项目今日向前迈进的步伐非常有限，自动化快照待合并、XL 级运行时增强待评审。

---

## 4. 社区热点

今日社区端**无显著热点**：

- 两条 PR 的评论数与 👍 均为 0（`undefined`）。
- Issues 侧无任何新增或被引用的讨论。

**信号解读：** 这通常出现在两种情形——(a) 项目处于稳定期，社区已形成低频交互节奏；(b) 提交者尚未在社交渠道（Discord/Slack）扩散待评审 PR。考虑到 PR #8108 来自新贡献者，建议维护者主动 ping 评审以增强新 contributor 留存。

---

## 5. Bug 与稳定性

| 严重程度 | 描述 | 状态 |
|---|---|---|
| — | 当日未报告新的 Bug / 崩溃 / 回归工单 | — |

**潜在稳定性信号：**
- PR #8108 涉及 host-runtime 中 `builtin.time` 的 typed input 修正，暗示该模块先前存在**类型解析或输入边界**的潜在 bug，但官方未单独开 Issue 跟踪。建议后续补充独立 Issue 以便回归测试归档。
- 无 CVE、Security Advisory 类公告。

---

## 6. 功能请求与路线图信号

直接的新功能需求 Issue：**0 条**。

可从 PR 中提炼的路线图信号：

- **时间运算能力增强**（PR [#8108](https://github.com/nearai/ironclaw/pull/8108)）— `builtin.time` 引入 `shift` 操作、带符号偏移、固定时长语义，体现项目正在**夯实 host-runtime 的基础语义原语**。如果合并，将显著改善 agent 在调度/规划场景下的时间表达力。
- **代码库 RAG / 知识图谱**（PR [#7988](https://github.com/nearai/ironclaw/pull/7988)）— 持续维护 codebase-memory bootstrap 快照，表明项目仍在**迭代"代码库即记忆"类 agent 能力**。

**下一版本纳入概率评估：**
- PR #8108（fix + 新操作）：中等偏高，但因体积 XL 且无评审反馈，可能延后至下个 minor 版本。
- PR #7988（CI snapshot）：几乎确定并入下次常规刷新窗口。

---

## 7. 用户反馈摘要

当日 Issues/PR 评论区**无新增用户反馈**。无满意度/痛点/使用场景的新增样本可提炼。

可观察的间接信号：PR #8108 由 new contributor 提交，且问题描述涵盖"typed input issues"，可推测**实际使用者在 host-runtime 时间/类型处理上遇到过痛点**，但缺少 Issue 一手反馈链条，建议维护者引导提交者补充使用场景描述。

---

## 8. 待处理积压

| 编号 | 类型 | 标题 | 创建/更新 | 关注建议 |
|---|---|---|---|---|
| [#7988](https://github.com/nearai/ironclaw/pull/7988) | PR (XS, low) | chore(agents): refresh codebase knowledge graph | 创建 2026-08-29 / 更新 2026-09-26 | **已停滞 28 天**，建议维护者尽快合并或关闭，避免过期快照污染 |
| [#8108](https://github.com/nearai/ironclaw/pull/8108) | PR (XL, low, docs) | fix(host-runtime): add builtin.time shift and typed input issues | 创建 2026-09-22 / 更新 2026-09-25 | **新 contributor 提交 4 天未获评审**，建议优先指派 reviewer，避免新贡献者流失 |

**风险提示：** PR #7988 作为 nightly bot 输出物长期未被合并，会导致 main 分支的代码库记忆快照与默认分支实际内容产生漂移，间接影响依赖该快照的 agent 行为准确性，建议作为最高优先级清理项。

---

### 附录：当日关键指标

| 指标 | 数值 |
|---|---|
| 新开/活跃 Issues | 0 |
| 已关闭 Issues | 0 |
| 新开/活跃 PR | 2 |
| 待合并 PR | 2 |
| 已合并/关闭 PR | 0 |
| 新 Releases | 0 |
| 总体活跃度 | **低（静默期）** |

*报告生成时间：2026-09-26 | 数据来源：nearai/ironclaw GitHub API*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目日报

**日期：2026-09-26**
**项目：[netease-youdao/LobsterAI](https://github.com/netease-youdao/LobsterAI)**

---

## 1. 今日速览

LobsterAI 项目今日处于**中等活跃的工程迭代状态**，仓库 24 小时内无新 Issue、无新 Release，PR 侧共 10 条变动（9 条仍 OPEN，1 条已 CLOSED）。工作高度集中在两条主线：① **OpenClaw 集成层稳定性增强**（重试恢复、网关热更新、Cowork 进度卡片），② **模型供应商与 UI/UX 体验扩展**（新增 Requesty 模型网关、模型选择器重构、定时任务通知修复）。整体看，仓库正在围绕 OpenClaw 做收口治理，同时把一批**5 个月前被标 stale 的 cowork/定时任务 PR 重新激活**，社区维护节奏在加快。健康度评估：**良好偏中**，无 Issue 噪音但有积压风险。

---

## 2. 版本发布

⚠️ 过去 24 小时 **无新版本发布**。OpenClaw 运行时仍锚定在 `v2026.8.1`（参见 [#2765](https://github.com/netease-youdao/LobsterAI/pull/2765)），本批 PR 主要为热修复与功能叠加，未触发 release 节点。

---

## 3. 项目进展

### ✅ 已关闭 / 合并（1 条）

- **[#2763](https://github.com/netease-youdao/LobsterAI/pull/2763) fix(openclaw): stop whole-turn replay after a model call started** — 作者：fisherdaddy
  - **核心修复**：当一次模型调用已开始提交了带 key 的用户消息后，整轮（whole-turn）重放会因为消息冲突而把真正的 provider 错误遮蔽为 `"LLM request failed."`。本 PR 在 `OverloadRetryState` 中新增 `modelCallStarted` 标志，并在 `agent-runner-error-handler.ts` 的两处外层重放入口上做 gating，避免重复提交。
  - **意义**：显著提升了 provider 错误的**可观测性与可调试性**，是 OpenClaw 错误恢复链路的一次精细化打磨。

### 🟢 新增 OPEN（4 条，2026-09-24/25 创建）

- **[#2766](https://github.com/netease-youdao/LobsterAI/pull/2766) feat(providers): add Requesty as a model provider** — 新增 [Requesty](https://requesty.ai) 作为内置模型网关，沿用 OpenRouter 的接入模式（共享注册表 + OpenClaw provider descriptor + 图标）。
- **[#2765](https://github.com/netease-youdao/LobsterAI/pull/2765) fix(openclaw): preserve accepted work through recovery and compaction** — 跨压缩与网关重启保留已接受的工作；隔离 model-catalog worker 契约；通过单连接读取并校验完整性检查点。
- **[#2764](https://github.com/netease-youdao/LobsterAI/pull/2764) fix(openclaw): reload live gateway policies without restarting** — 将 `gateway.tools`、`gateway.trustedProxies`、`gateway.allowRealIpFallback` 标记为可热重载，避免策略变更触发 Gateway 重启。
- **[#2758](https://github.com/netease-youdao/LobsterAI/pull/2758) feat(cowork): display and refresh native OpenClaw progress cards** — 在 Cowork 编辑器上方展示 OpenClaw 的持久化进度卡片，支持手动刷新且保留旧计划。

📈 **整体推进**：OpenClaw 集成层从"功能可用"走向"生产可用"，本次合入的 #2763 与进行中的 #2764/#2765 共同构成了**错误恢复 + 数据一致性 + 配置热更新**的稳定性三角。

---

## 4. 社区热点

由于过去 24 小时 **Issues 评论数为 0、所有 PR 👍 均为 0**，传统的"评论最多"维度不适用。从 PR 关注度（涉及范围标签 area 与创建活跃度）看，社区注意力集中在以下条目：

| 排名 | PR | 主题 | 关注信号 |
|---|---|---|---|
| 🥇 | [#2766](https://github.com/netease-youdao/LobsterAI/pull/2766) | 新增 Requesty 模型网关 | 跨 area（renderer/main/openclaw），是少数获得外部贡献者（Thibaultjaigu）的 PR |
| 🥈 | [#2765](https://github.com/netease-youdao/LobsterAI/pull/2765) | OpenClaw 数据一致性 + 启动开销优化 | 维护者 alison-xx 主推，对生产环境影响面广 |
| 🥉 | [#2764](https://github.com/netease-youdao/LobsterAI/pull/2764) | Gateway 策略热更新 | 直接关系到运维体验，配置无需重启即可生效 |

**诉求分析**：用户/贡献者最关心的还是 **OpenClaw 的稳定性、可运维性以及多模型灵活性**——前者是工程体验，后者是产品体验，两者同时被推动。

---

## 5. Bug 与稳定性

按严重程度排列（今日报告/活跃的 Bug 修复）：

| 严重度 | PR | 问题 | 状态 |
|---|---|---|---|
| 🔴 高 | [#2763](https://github.com/netease-youdao/LobsterAI/pull/2763) | 已开始的模型调用被整轮重放，导致真正的 provider 错误被遮蔽 | ✅ 已 CLOSED（fix PR 已合并） |
| 🟠 中高 | [#2765](https://github.com/netease-youdao/LobsterAI/pull/2765) | 压缩与重启过程中已接受的工作可能丢失 | 🟡 OPEN（fix 进行中） |
| 🟠 中 | [#2764](https://github.com/netease-youdao/LobsterAI/pull/2764) | 改 Gateway 策略会触发不必要的重启 | 🟡 OPEN（fix 进行中） |
| 🟡 中 | [#1550](https://github.com/netease-youdao/LobsterAI/pull/1550) | 通过会话/IM 创建的定时任务在投递模式="不通知"时网关报"Channel is required" | 🟡 OPEN（fix 已就绪，stale） |
| 🟡 中 | [#1547](https://github.com/netease-youdao/LobsterAI/pull/1547) | 定时任务编辑后通知渠道无法改回"不通知" | 🟡 OPEN（fix 已就绪，stale） |
| 🟢 低 | [#1634](https://github.com/netease-youdao/LobsterAI/pull/1634) | 全局搜索被隐式限制为当前 Agent 的任务 | 🟡 OPEN（fix 已就绪，stale） |

✅ **已有 fix PR 的 Bug：6 个 / 6 个（100% 覆盖）**——说明虽然 Issue 入口安静，但维护侧的修复链路完整。

---

## 6. 功能请求与路线图信号

虽然没有显式 Feature Request 类型 Issue，但以下 PR 直接反映出**用户/产品方向信号**：

- **[#2766](https://github.com/netease-youdao/LobsterAI/pull/2766) 新增 Requesty 模型网关** — 继 OpenRouter 之后继续引入 LLM 网关型供应商，说明项目**多模型灵活性**仍是高频需求，路线图很可能扩展到更多 gateway（LiteLLM、Portkey、OpenPipe 等具备类似模式）。
- **[#2758](https://github.com/netease-youdao/LobsterAI/pull/2758) OpenClaw 进度卡片在 Cowork 中显示** — 用户希望对长任务有"任务进度可见性"，这是 AI Agent 类产品 UX 的明确方向。
- **[#1628](https://github.com/netease-youdao/LobsterAI/pull/1628) 模型选择器重构 + 工具栏统一** — 反映 UI 一致性问题被长期重视。
- **[#1660](https://github.com/netease-youdao/LobsterAI/pull/1660) 非 main agent 首页显示 agent 名称和描述** — 体现**多 Agent 个性化体验**作为产品演进重点。

🛣️ **预测下一版本（参考）**: 若以 OpenClaw 稳定性 + 多模型扩展为节奏，下一个 release 大概率包含 #2764、#2765、#2766、#2758 之一或多项的合入。

---

## 7. 用户反馈摘要

⚠️ 由于 **Issues 区 24h 内零评论、PR 评论均为 undefined**，无法从直接评论中提炼用户痛点。但可从 PR 描述中**间接还原的真实场景**：

- **场景 A — 模型错误的"黑盒"体验**：用户在 LLM 失败时只能看到通用提示（#2763），希望看到真实 provider 错误以便排查 → 已修复。
- **场景 B — 改个配置就要重启 Gateway**（#2764）：运维同学在生产环境调整 `trustedProxies` 或 `tools` 时不希望中断服务 → 正在修复。
- **场景 C — 定时任务通知配置不直观**（#1547、#1550）：通过会话/IM 渠道创建的定时任务，"不通知"选项存在两种创建路径不一致的 bug → 已存在 fix 待合并。
- **场景 D — 全局搜索不是"全局"**（#1634）：用户期望顶部搜索入口是全局检索，实际却被当前 Agent 限制 → 已存在 fix 待合并。
- **场景 E — 多 Agent 缺少个性感**（#1660）：切换到非 main agent 后欢迎语千人一面，缺乏"我是谁"的代入感 → 已存在 fix 待合并。

📌 **用户满意度推断**：产品侧有清晰的功能期望但缺乏正式的反馈渠道；建议维护者考虑开放 Discussion 区或用户调研通道。

---

## 8. 待处理积压 ⚠️

以下 PR 标记 **[stale]**，创建于 **2026-04-07 ~ 2026-04-13**（约 **5~6 个月前**），今天（2026-09-25）才获得更新信号，请维护者重点关注：

| PR | 主题 | 创建时间 | 等待时长 |
|---|---|---|---|
| [#1547](https://github.com/netease-youdao/LobsterAI/pull/1547) | 定时任务通知渠道无法改回"不通知" | 2026-04-07 | ~5.5 个月 |
| [#1550](https://github.com/netease-youdao/LobsterAI/pull/1550) | 投递模式为"不通知"时网关校验失败 | 2026-04-07 | ~5.5 个月 |
| [#1628](https://github.com/netease-youdao/LobsterAI/pull/1628) | 模型选择器 UI + 工具栏样式统一 | 2026-04-10 | ~5.5 个月 |
| [#1634](https://github.com/netease-youdao/LobsterAI/pull/1634) | 全局搜索修复与体验升级 | 2026-04-11 | ~5.5 个月 |
| [#1660](https://github.com/netease-youdao/LobsterAI/pull/1660) | 非 main agent 首页显示 agent 信息 | 2026-04-13 | ~5.5 个月 |

🔔 **建议**：
1. 这批 PR 都是**小颗粒、低风险、有完整 fix** 的变更，建议在下一个迭代集中评审合并。
2. 建议仓库启用 [Stale bot 自动 unstale](https://github.com/apps/stale) 时的 `exempt-label` 或加速 review SLA，避免贡献者流失。
3. 同一位贡献者 `gongzhi-netease` 提交了其中 4 条 PR，体现持续投入，应优先反馈。

---

## 📊 今日数据卡

| 指标 | 数值 |
|---|---|
| 活跃 Issues | 0 |
| 活跃 PRs | 10 |
| 已合并/关闭 PRs | 1（[#2763](https://github.com/netease-youdao/LobsterAI/pull/2763)）|
| 新发布版本 | 0 |
| 外部贡献者 PR | 1（[#2766](https://github.com/netease-youdao/LobsterAI/pull/2766)）|
| Stale 重激活 PR | 5 |
| 综合健康度 | 🟢 **良好** |

---

*报告生成时间：2026-09-26 · 数据来源：GitHub REST API（issues/PRs/releases）*
*所有链接均指向 [netease-youdao/LobsterAI](https://github.com/netease-youdao/LobsterAI)*

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
**日期：2026-09-26 | 数据周期：过去 24 小时**

---

## 1. 今日速览

CoPaw 仓库在过去 24 小时内呈现**高活跃度的 issue–PR 协同修复模式**：11 条新开/活跃 Issues、13 条待合并 PR，且**多个 Issue 在被提出的同一天就触发了对应的修复 PR**，响应链路非常高效。社区层面迎来至少 4 位**首次贡献者（first-time-contributor）** 提交，涉及 Console、工具、浏览器、Provider 四个方向。值得注意的是，**今日无任何 Release、PR 合并或 Issue 关闭**，所有工作均处于"待合并"积压状态，建议维护者集中精力推进合并评审。

---

## 2. 版本发布

⚠️ **今日无新版本发布。**

当前 PyPI stable 版本仍为 `2.2.1`（见 Issue #7946），开发线为 `2.2.0b7`（见 Issue #7628）。鉴于多个 PR 涉及 Provider 上下文窗口、Browser SDK、Console 渲染等核心链路，下一个补丁版本（预计 2.2.2 或 2.2.0b8）值得尽快评估发布窗口。

---

## 3. 项目进展

### 🔁 今日 PR 整体状态
**13 条 PR 全部 OPEN，0 条合并。** 当日合并/关闭数 = 0，项目**净进展为零**——这是今日最值得维护者关注的风险点。

### 🧩 显著的"Issue → PR"修复对（已形成完整修复链路）

| Issue | PR | 修复内容 | 首次贡献者 |
|---|---|---|---|
| [#7980](https://github.com/agentscope-ai/CoPaw/issues/7980) grep_search 误读 binary 文件 | [#7988](https://github.com/agentscope-ai/CoPaw/pull/7988) | 关闭 grep_search 的二进制/internal 文件摄入路径 | ✅ |
| [#7984](https://github.com/agentscope-ai/CoPaw/issues/7984) Browser SDK `--disable-extensions` | [#7987](https://github.com/agentscope-ai/CoPaw/pull/7987) | 新增 `browser.ignore_default_args` 配置 | ✅ |
| [#7924](https://github.com/agentscope-ai/CoPaw/issues/7924) Markdown 表格超宽 | [#7989](https://github.com/agentscope-ai/CoPaw/pull/7989) | 表格限宽 + 滚动条贴近顶部 | ✅ |
| [#7946](https://github.com/agentscope-ai/CoPaw/issues/7946) QQ 网关重连事件重投 | [#7983](https://github.com/agentscope-ai/CoPaw/pull/7983) | 去重 replayed message_id | — |
| [#7979](https://github.com/agentscope-ai/CoPaw/issues/7979) llama.cpp 上下文窗口误用云端目录 | [#7986](https://github.com/agentscope-ai/CoPaw/pull/7986) | 自定义 endpoint 跳过静态模式表 | — |

### 🛠 独立修复与功能 PR
- [#7985](https://github.com/agentscope-ai/CoPaw/pull/7985) `fix(i18n)`：补齐 `chat.fileReference.codeSnippet` 的复数后缀（仅 `en.json` 已有，缺失其他语种）
- [#7982](https://github.com/agentscope-ai/CoPaw/pull/7982) `fix(providers)`：原生 Gemini Provider 透传 `thought_signature`（修复 Gemini 3.x + thinking + tool call 第二轮 400 错误）
- [#7923](https://github.com/agentscope-ai/CoPaw/pull/7923) `feat(scroll)`：按 `blocks_retention_days` 清理 `tool_result` 结构化块（约占历史存储 75%）
- [#7825](https://github.com/agentscope-ai/CoPaw/pull/7825) `fix(crons)`：数字 DOW 步骤/范围展开为 crontab weekday 名
- [#7542](https://github.com/agentscope-ai/CoPaw/pull/7542) `feat(chats)`：scroll-back 消息分页加载（解决 #7884 类历史不可见问题）

### 📊 整体推进度
今日 PR 数量（13）远超历史单日均值（≈3–5），**开发产能强劲但合并吞吐成为瓶颈**。建议维护者集中评审这 13 条 PR，可在 1–2 个工作日内完成一次小版本批量合并。

---

## 4. 社区热点

按 24 小时评论数排序：

| 排名 | Issue | 评论数 | 主题 | 链接 |
|---|---|---|---|---|
| 🥇 | #7628 Context compaction 超 provider 请求预算 | 7 | 上下文压缩核心机制缺陷 | [链接](https://github.com/agentscope-ai/CoPaw/issues/7628) |
| 🥈 | #7884 压缩后刷新前端历史信息无法加载 | 5 | 用户体验类高频痛点 | [链接](https://github.com/agentscope-ai/CoPaw/issues/7884) |
| 🥉 | #7957 手动停用预制模型/频道 | 3 | UI 配置灵活性诉求 | [链接](https://github.com/agentscope-ai/CoPaw/issues/7957) |
| 🥉 | #7948 Web 控制台破坏用户输入 | 3 | UI 交互回归 | [链接](https://github.com/agentscope-ai/CoPaw/issues/7948) |
| 🥉 | #7924 Markdown 表格超宽 | 3 | Console 渲染 UX（**已有 PR #7989**） | [链接](https://github.com/agentscope-ai/CoPaw/issues/7924) |

**热点背后的共性诉求：**
- **历史/上下文管理是用户最关注的能力**（#7628、#7884 占评论量近 50%）——压缩虽然省 token，但带来"信息丢失"的强烈不安全感
- **Console UX 类问题密度高**（#7924、#7948、#7884）——Web 控制台在表格、滚动、刷新三类交互上均有缺陷

---

## 5. Bug 与稳定性

按严重程度排列（已配套 PR 的标注 ✅）：

### 🔴 P0 — 核心会话/状态损坏
1. **[#7980](https://github.com/agentscope-ai/CoPaw/issues/7980) `grep_search` 吸入 `history.db-wal` 等二进制/internal 文件，导致 session state poisoning 与不可恢复 doom loop** — ✅ 修复 PR [#7988](https://github.com/agentscope-ai/CoPaw/pull/7988) 已提交
2. **[#7979](https://github.com/agentscope-ai/CoPaw/issues/7979) llama.cpp 本地 provider 被云端目录错误识别为 1M 上下文窗口，compaction 永不触发** — ✅ 修复 PR [#7986](https://github.com/agentscope-ai/CoPaw/pull/7986) 已提交
3. **[#7981](https://github.com/agentscope-ai/CoPaw/issues/7981) `chat_with_agent` 前台超时向调用方返回"用户中断"语义，父轮次无最终答复** — ⚠️ 无修复 PR
4. **[#7628](https://github.com/agentscope-ai/CoPaw/issues/7628) Context compaction 仅基于可见上下文，未考虑完整 provider 请求，活跃 turn 仍会失败** — ⚠️ 无修复 PR（评论 7 条，社区呼声最高）

### 🟠 P1 — 渠道/集成类
5. **[#7984](https://github.com/agentscope-ai/CoPaw/issues/7984) Browser SDK 持久 profile 模式下 Playwright 默认注入 `--disable-extensions`，profile 扩展（如 SwitchyOmega）无法加载** — ✅ 修复 PR [#7987](https://github.com/agentscope-ai/CoPaw/pull/7987) 已提交
6. **[#7946](https://github.com/agentscope-ai/CoPaw/issues/7946) QQ 官方 Bot 网关在 `session resumed` 时整体重投 INTUOP 事件，产生重复消息** — ✅ 修复 PR [#7983](https://github.com/agentscope-ai/CoPaw/pull/7983) 已提交

### 🟡 P2 — UI 渲染
7. **[#7948](https://github.com/agentscope-ai/CoPaw/issues/7948) Web 控制台设计破坏用户输入** — ⚠️ 无修复 PR
8. **[#7924](https://github.com/agentscope-ai/CoPaw/issues/7924) Console Markdown 表格超宽，横向滚动条沉底** — ✅ 修复 PR [#7989](https://github.com/agentscope-ai/CoPaw/pull/7989) 已提交

**统计：** 8 条 Bug 中 **5 条已有对应修复 PR（62.5%）**，修复响应率良好；但**仅 0 条被合并**，存在"提交后无人评审"的二级风险。

---

## 6. 功能请求与路线图信号

| 需求 | Issue | 已关联 PR | 路线图概率 |
|---|---|---|---|
| Console 思考模式/推理强度控件对 Aliyun Token Plan 模型可见 | [#7990](https://github.com/agentscope-ai/CoPaw/issues/7990) | ❌ | 🟢 高（仅需在 `model_catalog.json` 补声明） |
| 手动停用预制模型/频道 | [#7957](https://github.com/agentscope-ai/CoPaw/issues/7957) | ❌ | 🟡 中（涉及持久化与多端同步） |
| 工具调用卡片可隐藏 | — | ✅ [#7357](https://github.com/agentscope-ai/CoPaw/pull/7357) | 🟢 高（PR 已等 29 天） |
| Provider 级 image/video/audio inline caps | [#7201](https://github.com/agentscope-ai/CoPaw/issues/7201) | ✅ [#7359](https://github.com/agentscope-ai/CoPaw/pull/7359) | 🟢 高（PR 已等 29 天） |
| Scroll-back 消息分页 | [#7884](https://github.com/agentscope-ai/CoPaw/issues/7884) | ✅ [#7542](https://github.com/agentscope-ai/CoPaw/pull/7542) | 🟢 高（PR 已等 22 天） |
| 设置流优化 + 侧边栏交互 | — | ✅ [#7956](https://github.com/agentscope-ai/CoPaw/pull/7956) | 🟡 中 |

**关键信号：** [#7357](https://github.com/agentscope-ai/CoPaw/pull/7357)、[#7359](https://github.com/agentscope-ai/CoPaw/pull/7359) 两条功能 PR 自 2026-08-27 起悬而未决已 29 天，**显著拖累版本节奏**，建议优先合并。

---

## 7. 用户反馈摘要

- **😤 历史会话可见性差（#7884）**：用户原话"讨论过的问题，回头往上翻看不到了"，对压缩策略带来的"信息消失"表达强烈不满（"知道这个体验多差么？？？"），属于典型**功能信任损耗型反馈**。
- **🧹 强迫症型清理诉求（#7957）**：希望可手动停用不使用的预制模型/频道，反映用户对**默认配置清单过载**的抗拒。
- **🖱 控制台交互退化（#7948、#7924）**：表格滚动、输入框被破坏等 UX 问题是 Web 控制台的反复痛点，说明前端版本更新引入了未充分验证的回归。
- **🔌 自建/本地 Provider 用户群体增长（#7979、#7986）**：llama.cpp / vLLM / OpenAI 兼容自定义端点的诉求上升，框架对**云端目录硬编码**的反模式需要系统性治理（不仅是打补丁）。
- **🤖 多 Agent 调用语义混乱（#7981）**：前台超时被错误翻译为"用户中断"，子 Agent 与父 Agent 的状态机边界需要文档化澄清。

---

## 8. 待处理积压提醒 ⚠️

### 🔴 长期未响应/未合并的关键项

| 类型 | 编号 | 标题 | 等待天数 | 风险 |
|---|---|---|---|---|
| PR | [#7357](https://github.com/agentscope-ai/CoPaw/pull/7357) | feat(chat): 工具调用可见性切换 | **29 天** | 用户已形成预期 |
| PR | [#7359](https://github.com/agentscope-ai/CoPaw/pull/7359) | feat(providers): 暴露每类媒体 inline caps | **29 天** | 修复 #7201 但未落地 |
| PR | [#7542](https://github.com/agentscope-ai/CoPaw/pull/7542) | feat(chats): scroll-back 消息分页 | **22 天** | 直击 #7884 高频痛点 |
| PR | [#7923](https://github.com/agentscope-ai/CoPaw/pull/7923) | feat(scroll): tool_result 块按保留天数老化 | 5 天 | 缓解长期存储膨胀 |
| PR | [#7956](https://github.com/agentscope-ai/CoPaw/pull/7956) | feat(console): 设置流与侧边栏优化 | 3 天 | 改善 Console 体验 |
| PR | [#7825](https://github.com/agentscope-ai/CoPaw/pull/7825) | fix(crons): DOW 步骤/范围展开 | 9 天 | Cron 实际行为错误 |
| Issue | [#7628](https://github.com/agentscope-ai/CoPaw/issues/7628) | Context compaction 预算超限 | 18 天 | **社区评论最多，仍无 PR** |
| Issue | [#7201](https://github.com/agentscope-ai/CoPaw/issues/7201) | Provider 媒体 inline caps | 60+ 天（推测） | 有 PR 阻塞中 |

### 💡 给维护者的建议
1. **立即评审 13 条今日新增 PR**，尤其是 5 条已与 Issue 配对的修复，可考虑合并到下一个小版本
2. **优先合并 #7357 / #7359 / #7542**——它们填补了**用户已表达强烈诉求但等待近一个月的能力缺口**，每多等一天都会消耗社区信任
3. **为 #7628 制定方案**——它是评论最多、影响最广的稳定性议题，需要 maintainer 主导设计而非等待社区
4. **批量合并后立刻发版 2.2.2**，避免"提交即沉默"循环

---

> 📌 **项目健康度评估：🟡 亚健康**
> 社区活跃度与开发产能均处于高位（13 PR / 11 Issue / 多名首次贡献者），但**合并吞吐为零**导致所有进展停留在"提交"阶段。建议维护者集中 1 个工作日完成批量评审与版本发布，将当日产能转化为实际用户价值。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目日报

**日期**: 2026-09-26
**数据来源**: zeroclaw-labs/zeroclaw (master)

---

## 1. 今日速览

ZeroClaw 仓库在过去 24 小时呈现**高强度 RFC 治理 + 安全主线推进**的特征:50 条 Issue 更新中 13 条关闭,50 条 PR 更新中 8 条合并/关闭,新版本未发布。讨论热度集中在 RFC 阶段(至少 6 条 RFC 在窗口期被关闭),以及 `#8289` 安全栈(OIDC/RPC 认证/PKCE)的多 PR 协同推进。整体活跃度高、节奏受控,但仍有 42 条 PR 处于待合并状态,**评审与合并通道承压**。

---

## 2. 版本发布

无新版本发布。当前窗口以 RFC 收敛与安全栈合入为主,未触发 release 标记变更。建议关注里程碑 [v0.9.0](https://github.com/zeroclaw-labs/zeroclaw/milestone/11) 中的 ZeroRelay 节奏(见 [#8358](https://github.com/zeroclaw-labs/zeroclaw/issues/8358))。

---

## 3. 项目进展(今日合并/关闭要点)

### 3.1 安全主线 `#8289` 持续合入
- **#10259** `feat(security): enforce authenticated principals on RPC with native+peercred`(XL,CLOSED)— RPC 强制认证主体,关闭并部分替代 [#8672](https://github.com/zeroclaw-labs/zeroclaw/issues/8672)。[#10259](https://github.com/zeroclaw-labs/zeroclaw/pull/10259)
- **#10263** `feat(security): compose principal tool selectors into agent sessions`(XL,CLOSED)— 主体的工具选择器组合进入 agent 会话,叠在 #10259 之上。[#10263](https://github.com/zeroclaw-labs/zeroclaw/pull/10263)
- **#11082**(XL,OPEN, 9 月 24 日创建、26 日再活跃)`feat(security): OIDC principals, enrollment and the gateway auth surface` — 按 2026-09-23 贡献者会议决定,把 OIDC 栈**整段合并为一个 PR**,承载 #8289 全部 slices,顺序已锁定。[#11082](https://github.com/zeroclaw-labs/zeroclaw/pull/11082)

> 该栈的 stage 2(#10248)与 OIDC 验证 provider(#10255)已分别 squash-merge 至 master,**安全能力向“可嵌入式运行时”方向又近一步**。

### 3.2 运维/可观测与 MCP 修复
- **#11046**(S,CLOSED)`fix(tools): stop inlining base64 into screenshot results` — 截图工具不再把 PNG 作为 base64 data URI 追加到结果文本,避免冗余与潜在上下文膨胀。[#11046](https://github.com/zeroclaw-labs/zeroclaw/pull/11046)
- **#10397**(S,CLOSED)`fix(mcp): send tool result text blocks, not the whole CallToolResult envelope` — MCP 结果格式化收敛到 `content[].text`,在可证明无损时才丢弃 `structuredContent`。[#10397](https://github.com/zeroclaw-labs/zeroclaw/pull/10397)

### 3.3 Agent 可移植性
- **#9986**(XL,CLOSED)`feat(agents): export an agent to a portable bundle` — `zeroclaw agents export <alias> --out <dir>` 输出 manifest + 配置闭包 + 工作区树,为跨安装迁移做准备。[#9986](https://github.com/zeroclaw-labs/zeroclaw/pull/9986)

### 3.4 RFC 治理集中落地
以下 RFC 在窗口内关闭,体现团队“先收敛设计、再实施”的节奏:
- [#11027](https://github.com/zeroclaw-labs/zeroclaw/issues/11027) Agent-to-agent session messaging with receiver discretion(CLOSED)
- [#11017](https://github.com/zeroclaw-labs/zeroclaw/issues/11017) Preserve applicable reviews and simplify expedited merge decisions(CLOSED)
- [#11096](https://github.com/zeroclaw-labs/zeroclaw/issues/11096) Risk-based merge-result freshness(CLOSED)
- [#10930](https://github.com/zeroclaw-labs/zeroclaw/issues/10930) One durable primitive for questions an agent asks a human(CLOSED)
- [#10929](https://github.com/zeroclaw-labs/zeroclaw/issues/10929) Delivery receipts for outbound messages(CLOSED)

**整体评价**:安全栈向前推了一大步,可移植性引入新原语,RFC 治理同步收敛;但因新版本未发布,**用户尚未在生产形态上看到这些能力**。

---

## 4. 社区热点(高评论 Issues)

| Issue | 评论数 | 主题 | 链接 |
|---|---|---|---|
| #8692 Tracker: Maintainer decision queue for RFCs and design issues | 15 | 维护者决策队列 | [#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) |
| #8586 refactor(gateway): centralize webhook channel message dispatch | 10 | gateway webhook 集中化 | [#8586](https://github.com/zeroclaw-labs/zeroclaw/issues/8586) |
| #6489 Tracker: Unified capability catalog and plugin migration roadmap | 9 | “Everything is a plugin” | [#6489](https://github.com/zeroclaw-labs/zeroclaw/issues/6489) |
| #10970 RFC: Host-scoped admission control and per-agent resource bounds | 8 | 多 agent 主机的资源边界 | [#10970](https://github.com/zeroclaw-labs/zeroclaw/issues/10970) |
| #7108 feat(ci): improve cached Rust builds and CI critical path | 8 | CI 关键路径提速 | [#7108](https://github.com/zeroclaw-labs/zeroclaw/issues/7108) |
| #8519 Reconcile cargo-audit ignores and remediate wasmtime-wasi CVEs | 7 | 依赖安全审计对齐 | [#8519](https://github.com/zeroclaw-labs/zeroclaw/issues/8519) |

**诉求解读**:
- `#8692` 反映项目已进入“多 RFC 并行 + 维护者带宽不足”阶段,需要明确“决策队列”来减少悬而未决。
- `#6489` 与 `#8850` 共同指向产品北星 “Everything is a plugin”,把 channel/tool 从编译期 Cargo feature 转为运行时 WASM 插件(对应 [#8850](https://github.com/zeroclaw-labs/zeroclaw/issues/8850))。
- `#10970` 暴露了**单 agent 边界外的稳定性缺口**:同时跑多 agent 的主机会出现级联降级甚至崩溃,需要 host 级准入控制。
- `#7108` 与 `#8519` 反映**工程卫生问题**:PR CI 耗时 15-20 分钟、`cargo audit` 与 `cargo deny` 忽略列表存在结构性漂移。

---

## 5. Bug 与稳定性

按严重程度排序(仅列出窗口内仍 OPEN 或今日新建/更新的):

| Issue | 简述 | 严重度 | 修复 PR | 链接 |
|---|---|---|---|---|
| **#11110** | RPC 工作区沙箱保留可重定向 cwd 符号链接,授权后 turn 内可被改向 | **S0(数据丢失/安全)** | 无(OPEN,in-progress) | [#11110](https://github.com/zeroclaw-labs/zeroclaw/issues/11110) |
| **#11055** | daemon 未注册 channel-map factory,webhook/cron/SOP 拿到空 channels | **P1(中)** | 无(OPEN,needs-maintainer-review) | [#11055](https://github.com/zeroclaw-labs/zeroclaw/issues/11055) |
| **#8519** | `audit.toml`/`deny.toml` 忽略列表漂移,wasmtime-wasi CVE 未处理 | **P1** | 跟踪中 | [#8519](https://github.com/zeroclaw-labs/zeroclaw/issues/8519) |
| **#11108** | `map_tool_name_alias` 把 `browser_open`/`web_search` 重写为 `shell`,丢失原生工具语义 | **S2** | 无(OPEN,needs-maintainer-review) | [#11108](https://github.com/zeroclaw-labs/zeroclaw/issues/11108) |
| **#11059** | WhatsApp Web 忽略 `force_voice`,`send_via` 无法路由到语音 | **S2** | 无(OPEN,needs-maintainer-review) | [#11059](https://github.com/zeroclaw-labs/zeroclaw/issues/11059) |
| **#11097** | 插件 egress remedy 命令未转义现有 grant 中的单引号 | **S3** | 无(OPEN,in-progress) | [#11097](https://github.com/zeroclaw-labs/zeroclaw/issues/11097) |
| **#11093** | `promote-stable` 路径未同步根目录 `llms.txt` / `llms-full.txt` | **S2** | 无(OPEN,in-progress) | [#11093](https://github.com/zeroclaw-labs/zeroclaw/issues/11093) |

**今日新建/活跃 fix PR**:
- [#11135](https://github.com/zeroclaw-labs/zeroclaw/pull/11135) `fix(tool-call-parser): normalize DeepSeek DSML marker before parsing`(S)— 解析前规范化 DeepSeek DSML 包装,避免把 DSML 文本当成 tool_calls 泄漏。
- [#11133](https://github.com/zeroclaw-labs/zeroclaw/pull/11133) `fix(rpc): revalidate forwarded environment on session reuse`(L,high risk)— 复用会话时复核转发环境资格,**直接回应 `session ownership ≠ environment forwarding` 的安全模型缺口**。
- [#10417](https://github.com/zeroclaw-labs/zeroclaw/pull/10417) `fix(runtime): deliver terminal fallbacks live`(XL)— 把格式异常的 tool fallback 与 max-iteration 总结通过 live event 与 channel-draft 通路下发,客户端不再丢尾巴。

> ⚠️ **#11110 建议升级为优先处理**:它是 S0 级别的“数据丢失/安全风险”,且与 #11133 同属 RPC 会话复用边界,合并 #11133 不会完全覆盖符号链接改向,需独立 PR。

---

## 6. 功能请求与路线图信号

- **SOP 能力继续扩张**(闭环化)
  - [#8288](https://github.com/zeroclaw-labs/zeroclaw/issues/8288) SOP 5/5 路线图(5 评论)— daemon-owned SOP 控制平面仍在推进。
  - [#11134](https://github.com/zeroclaw-labs/zeroclaw/pull/11134) `feat(sop): conditional steps chosen by the decision model`(L)— 步骤可提出 yes/no 问题,由 SOP 决策模型(来自 #11085)在同一请求里一并回答,实现“一条 procedure 内分支”。
- **Provider 生态扩张**
  - [#11103](https://github.com/zeroclaw-labs/zeroclaw/issues/11103) `feat(providers): add Cheaper Inference as a typed OpenAI-compatible provider`(in-progress)— 给出 `cheapinference` 类型化槽位;若评审顺利,有望并入下一窗口版本。
- **运行时 / Agent 生命周期统一权威**
  - [#10621](https://github.com/zeroclaw-labs/zeroclaw/pull/10621) `feat(runtime): coordinate agent lifecycle mutations`(XL,high risk)— 为 daemon RPC、gateway、channels、ACP admission、CLI 的变更提供**单一活动配置权威**,降低多入口竞态;正在等待维护者评审。
- **可观测性收口**
  - [#11131](https://github.com/zeroclaw-labs/zeroclaw/pull/11131) `feat(runtime): own the observer event firehose in the daemon`(XL)— 把 `BroadcastObserver` 从 gateway 上移到 daemon,让 RPC `logs/subscribe`(zerocode、TUI)在 gateway 关闭时仍能拿到事件。
- **RPC turn 能力对齐**
  - [#11132](https://github.com/zeroclaw-labs/zeroclaw/pull/11132) `feat(runtime): turn parity over RPC for steering, totals, and session ops`(XL)— RPC 透传 `session/steer`、totals、session ops,与本地 turn 行为对齐。
- **CI 与流程卫生**
  - [#11096](https://github.com/zeroclaw-labs/zeroclaw/issues/11096) Risk-based merge-result freshness(RFC,CLOSED)— 按风险等级决定重跑必要性,呼应 #7108 的 CI 关键路径问题。

**最可能并入下版的候选(综合 PR 规模/就绪度/对路线图价值)**:[#10621](https://github.com/zeroclaw-labs/zeroclaw/pull/10621)、[#11131](https://github.com/zeroclaw-labs/zeroclaw/pull/11131)、[#11103](https://github.com/zeroclaw-labs/zeroclaw/issues/11103)。

---

## 7. 用户反馈摘要(从 Issue 评论中提炼)

- **多 agent 主机场景下的稳定性焦虑**(来源: [#10970](https://github.com/zeroclaw-labs/zeroclaw/issues/10970))
  > “Every concurrency limit in the runtime today is scoped to a single agent.” — 用户希望主机能以 host 维度对并发 turn、并发工具调用、每 agent 内存给出有界降级曲线,而

</details>

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*