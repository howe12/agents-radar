# OpenClaw 生态日报 2026-08-29

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-08-29 05:09 UTC

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

# OpenClaw 项目日报 · 2026-08-29

---

## 1. 今日速览

OpenClaw 今日维持高强度协作节奏：**24 小时内 500 条 Issues 与 500 条 PRs 同时更新**，Issues 关闭率约 17%（85/500），PRs 关闭/合并率约 45.8%（229/500），处于"高吞吐、净增长"的活跃期。社区持续聚焦**稳定性与消息可靠性**两大主题，重复出现的症状包括：网关内存泄漏、子代理静默丢失、零载荷入站消息被丢弃、Codex 运行时响应截断等。当日发布 **v2026.9.1-beta.1**，重点改进 Gateway 重启恢复与配置写入可靠性。整体而言，项目处于"长期 P0/P1 故障仍在累积 + 大量修复 PR 在评审中"的胶着状态，**健康度评级：中等偏紧**，需要维护者尽快介入优先级最高的几条积压问题。

---

## 2. 版本发布

### v2026.9.1-beta.1（已发布）

**Highlights**：

- **Gateway 重启恢复**：跨多次 Gateway 重启时保留已接纳的 turn（admitted turns），使"restart-safe"运行能持续到每个 checkpoint 并交付最终响应。（[#130491]，感谢 @jalehman）
- **Gateway 配置写入可靠性**：保持已提交配置的写入一致性（完整说明在 release notes 中截断）。

**风险提示**：作为 beta.1 版本，引入新的 restart-safe 状态保留语义，建议生产环境在升级前完成以下事项：
1. 备份 `~/.openclaw` 目录及 SQLite 元数据；
2. 在 staging 环境验证 Gateway 重启场景下的 turn 完整性；
3. 关注后续 RC/GA 版本中是否涉及 config 写入格式的迁移。

---

## 3. 项目进展

今日合并/关闭了一批覆盖关键路径的 PR，向前推进了多个长期积压问题：

| PR | 主题 | 影响 |
|---|---|---|
| [#132185](https://github.com/openclaw/openclaw/pull/132185) | CLI 从规范存储读取会话历史（不再读取已弃用文件）| P1，会话状态 |
| [#128995](https://github.com/openclaw/openclaw/pull/128995) | Web UI：在聊天头部暴露完整会话操作（置顶/未读/图标/复制 ID/移组）| P2，UX |
| [#132200](https://github.com/openclaw/openclaw/pull/132200) | 重构：复用 approval-binding 测试的临时目录 helper（13 处）| P3，测试可维护性 |
| [#132353](https://github.com/openclaw/openclaw/pull/132353) | Web 表单：暴露 agent 模型设置（修复"Unsupported schema node"问题）| P1，可用性 |
| [#128223](https://github.com/openclaw/openclaw/pull/128223) | CLI：`models aliases add` 从 write snapshot 解析别名目标 | P2 |
| [#123535](https://github.com/openclaw/openclaw/pull/123535) | UI：避免 sidebar 会话目录的 refresh storm | P2 |
| [#20837](https://github.com/openclaw/openclaw/issues/20837)（已关闭）| 让 agent 感知通信渠道 | P2，增强 |
| [#116489](https://github.com/openclaw/openclaw/pull/116489)（已关闭）| 安全：安装策略警告需要显式确认 | P2，安全边界 |

**整体评估**：今日主要推进了"会话状态可靠性"（CLI 历史、refresh storm、Codex 截断）和"Web UI 完备性"两条主线。但更高优先级的 P1 修复（如 [#132179](https://github.com/openclaw/openclaw/pull/132179) 凭证恢复后聊天仍阻塞、[#131669](https://github.com/openclaw/openclaw/pull/131669) 云会话工具策略、[#132224](https://github.com/openclaw/openclaw/pull/132224) worker 失败清理时的 provisioning 重放）仍处于 OPEN 状态等待合并，**净推进评级：中等**。

---

## 4. 社区热点

按评论数排序的活跃 Issues（TOP 10）：

| 排名 | Issue | 评论数 | 关注点 |
|---|---|---|---|
| 1 | [#91588](https://github.com/openclaw/openclaw/issues/91588) | 23 | 🔥 **P0** Gateway RSS 从 350MB 泄漏至 15.5GB，触发 OOM + launchd-handoff 反复重启 |
| 2 | [#48788](https://github.com/openclaw/openclaw/issues/48788) | 20 | 跨渠道统一文件名编码工具（Shift-JIS / EUC-KR / GB18030 等）|
| 3 | [#68596](https://github.com/openclaw/openclaw/issues/68596) | 15 | 👍 8 ⭐ 可配置 streaming watchdog 超时阈值（kimi-k2.5、DeepSeek-R1 长思考场景）|
| 4 | [#96834](https://github.com/openclaw/openclaw/issues/96834) | 14 | WhatsApp 1:1 图片让主 lane 阻塞约 3 分钟 |
| 5 | [#84516](https://github.com/openclaw/openclaw/issues/84516) | 13 | Codex app-server 长回复在 ~1000-1100 字符处静默截断（`stop=null, aborted=false`）|
| 6 | [#41744](https://github.com/openclaw/openclaw/issues/41744) | 13 | Feishu：`read` 图片在最终出站载荷前丢失媒体 |
| 7 | [#51429](https://github.com/openclaw/openclaw/issues/51429) | 12 | 工作路径被硬编码为 `/Users/wangtao` 并随发布合并 |
| 8 | [#87756](https://github.com/openclaw/openclaw/openclaw/issues/87756) | 10 | 提示启动的 Lobster 工作流在嵌套 `/tools/invoke` 上挂起（curl 启动正常）|
| 9 | [#87711](https://github.com/openclaw/openclaw/issues/87711) ✅已关闭 | 10 | Telegram 主题 lane 首轮空响应（仅 footer）|
| 10 | [#50291](https://github.com/openclaw/openclaw/issues/50291) | 9 | Plugin Hooks 缺少追踪上下文（messageId、runId、parentSpanId）|

**诉求分析**：

- **稳定性 > 新功能**：TOP 3 中有两条 P0/P1 直接关系系统稳定性（OOM 泄漏、Codex 截断）；
- **跨渠道一致性**：用户期待 Feishu / WhatsApp / Telegram 等渠道在错误处理、媒体传递、消息可靠性上的统一行为；
- **可观测性诉求上升**：Plugin Hooks trace context（#50291）、Context Provenance 元数据（#54373）等诉求反映了项目正在从"功能可用"走向"可调试/可观测"的成熟阶段。

---

## 5. Bug 与稳定性

按严重程度排列（今日仍在 OPEN 状态的严重 Bug）：

### 🔴 P0 / Critical

- **[#91588](https://github.com/openclaw/openclaw/issues/91588) — Gateway Memory Leak（350MB → 15.5GB，2-3 天 OOM）**
  - 影响：session-state / message-loss / crash-loop
  - 状态：标签 `clawsweeper:no-new-fix-pr, needs-live-repro`，**目前无 fix PR**

### 🟠 P1 / High

- **[#96834](https://github.com/openclaw/openclaw/issues/96834) — WhatsApp 图片入站阻塞主 lane ~3 分钟**
  - 影响：session-state / message-loss
  - 状态：无 fix PR

- **[#84516](https://github.com/openclaw/openclaw/issues/84516) — Codex app-server 长回复静默截断 ~1000-1100 字符**
  - 影响：session-state / message-loss
  - 状态：`fix-shape-clear` 标签，无 fix PR

- **[#112259](https://github.com/openclaw/openclaw/issues/112259) — 可见入站通道 turn 被静默丢弃（零载荷、无重试、无死信）**
  - 影响：message-loss
  - 状态：无 fix PR

- **[#97616](https://github.com/openclaw/openclaw/issues/97616) — 钩子/工具子进程泄漏未回收（zombie 累积）**
  - 影响：message-loss / crash-loop
  - 状态：无 fix PR

- **[#126906](https://github.com/openclaw/openclaw/issues/126906) — 拒绝 write 工具会静默禁用内存持久化且 agent 仍报告成功**
  - 影响：session-state / data-loss
  - 状态：无 fix PR

- **[#124284](https://github.com/openclaw/openclaw/issues/124284) — v2026.8.1-beta.2 引入的 `wrapStreamFnWithProviderPromptState` 导致 vLLM qwen3 思维链子代理失败**
  - 影响：session-state
  - 状态：无 fix PR
  - **注意**：这是 v2026.9.1-beta.1 之前版本引入的回归，需评估 v2026.9.1-beta.1 是否同样受此影响。

- **[#55694](https://github.com/openclaw/openclaw/openclaw/issues/55694) — 工具调用失败死循环 + 重复消息刷屏（飞书）**
  - 影响：message-loss
  - 状态：无 fix PR

- **[#128967](https://github.com/openclaw/openclaw/issues/128967) — Session 层静默前置截断大工具结果至 64KiB，无头部标记**
  - 影响：session-state
  - 状态：刚报告（2026-08-25），有 source repro

- **[#54488](https://github.com/openclaw/openclaw/issues/54488) — Session lane 饥饿：followup drain 独占 20-30 分钟**
  - 影响：session-state / message-loss
  - 状态：`fix-shape-clear`，无 fix PR

- **[#85027](https://github.com/openclaw/openclaw/issues/85027) — 2026.5.6 → 2026.5.19 升级使 macOS LaunchAgent Gateway 不可恢复（需 Time Machine 回滚）**
  - 影响：session-state / auth-provider / crash-loop
  - 状态：无 fix PR — **升级路径上存在不可恢复风险，需在 release notes 中显式提醒**

- **[#105528](https://github.com/openclaw/openclaw/issues/105528) — Windows/WSL 下 `exec`/`read` 工具静默返回空输出（v2026.6.x 回归）**
  - 影响：other
  - 状态：无 fix PR

- **[#91892](https://github.com/openclaw/openclaw/issues/91892) — Cron 任务在 AI 模型调用中卡死（`model_call:stream_progress` 永不结束）**
  - 影响：ux-friction
  - 状态：无 fix PR

- **[#42803](https://github.com/openclaw/openclaw/issues/42803) — 飞书文本命令（`/stop` /`/new` /`/status`）在 active run 时不再绕过队列**
  - 影响：session-state
  - 状态：`linked-pr-open` 标签，**存在关联 PR 待合并**

### 🟡 P2 / Medium（节选）

- [#87756](https://github.com/openclaw/openclaw/issues/87756) Lobster workflow 在嵌套 `/tools/invoke` 上挂起（curl 启动正常）
- [#82662](https://github.com/openclaw/openclaw/issues/82662) 隔离 cron `agentTurn` 在 runner 启动前超时（6 个 fallback 模型全部失败）
- [#101554](https://github.com/openclaw/openclaw/issues/101554) `crypto.createHash` 阻塞事件循环（巨型 MCP schema）
- [#50291](https://github.com/openclaw/openclaw/issues/50291) Plugin Hooks 缺少 trace context
- [#102755](https://github.com/openclaw/openclaw/issues/102755) Windows / WSL 二次启动无清理时构建挂起

### ✅ 已关闭的高严重度问题（今日）

- [#87711](https://github.com/openclaw/openclaw/issues/87711) Telegram 首轮空响应
- [#87938](https://github.com/openclaw/openclaw/issues/87938) 飞书 DM 会话在 Gateway 重启后重建
- [#86342](https://github.com/openclaw/openclaw/issues/86342) `MissingAgentHarnessError` race
- [#80178](https://github.com/openclaw/openclaw/issues/80178) `resolveCliAuthEpoch` 在本地凭证源切换时过度失效
- [#89549](https://github.com/openclaw/openclaw/issues/89549) `sessions_spawn` 子代理接受后 HTTP 401
- [#88856](https://github.com/openclaw/openclaw/issues/88856) `tool_use` 无匹配 `tool_result`、子代理静默丢弃（~3.8%）
- [#88230](https://github.com/openclaw/openclaw/issues/88230) `openclaw message send` 投递成功后挂起
- [#89549](https://github.com/openclaw/openclaw/issues/89549) sessions_spawn HTTP 401

---

## 6. 功能请求与路线图信号

今日活跃的功能请求集中在三个方向：

### 6.1 渠道与企业集成扩展

- **[#71058](https://github.com/openclaw/openclaw/issues/71058)**：单一 OpenClaw Gateway 支持多个 Azure/Teams bot（`channels.msteams` 当前为单对象 + `additionalProperties: false`）。
- **[#88154](https://github.com/openclaw/openclaw/issues/88154)**：Slack Modal 原生支持，用 modals 收集结构化输入代替重复消息提示。
- **[#72504](https://github.com/openclaw/openclaw/issues/72504)**：飞书多 bot 群聊中 `normalizeMentions()` 误删自身 `<at>` 导致 NO_REPLY（**有 PR 链接**）。

### 6.2 可观测性 / Tracing

- **[#50291](https://github.com/openclaw/openclaw/issues/50291)**：Plugin Hooks 需要 `messageId` / `runId` / `parentSpanId` 用于分布式追踪。
- **[#54373](https://github.com/openclaw/openclaw/issues/54373)**：注入上下文添加 source/volatility 元数据（**有 PR 链接**）。

### 6.3 控制与可用性

- **[#9912](https://github.com/openclaw/openclaw/issues/9912)**：新增 `maxTurns` / `maxToolCalls` 配置以限制 LLM 无限迭代。
- **[#78865](https://github.com/openclaw/openclaw/issues/78865)**：工具调用熔断器（circuit breaker）以阻止 LLM 在错误上盲目重试。
- **[#51336](https://github.com/openclaw/openclaw/issues/51336)**：在错误/过载消息中暴露 API provider 名称（**有 PR 链接**）。
- **[#14438](https://github.com/openclaw/openclaw/openclaw/issues/14438)**：插件热重载（jiti 缓存失效），免容器重启。
- **[#51184](https://github.com/open

---

## 横向生态对比

# 个人 AI 助手 / 自主智能体开源生态横向对比报告

**日期**：2026-08-29 ｜ **样本**：13 个项目 ｜ **基线参考**：OpenClaw

---

## 1. 生态全景

2026-08-29 当日样本中的 13 个项目呈现明显的"三梯队分化"：**头部项目**（OpenClaw、CoPaw/QwenPaw、ZeroClaw、IronClaw）日均吞吐 30–500 条 Issue/PR，处于高强度迭代期；**中坚项目**（NanoBot、NanoClaw、LobsterAI）日均 8–50 条，以架构重构或发版冲刺为主线；**尾部项目**（PicoClaw、Moltis、NullClaw、TinyClaw、ZeptoClaw、Hermes Agent 局部）当日几乎静默或仅有个位数更新。整体生态正处于"MCP 协议栈成熟化、工具结果治理、Memory 子系统重构、安全沙箱精细化"四条主线并行的关键节点；多个项目在 RFC 与 PR 层面交叉印证同一类需求，表明行业共识正在形成。

---

## 2. 各项目活跃度对比

| 项目 | 24h Issues | 24h PRs | 关闭/合并率 | Release | 健康度 | 阶段定位 |
|---|---|---|---|---|---|---|
| **OpenClaw** | 500 更新 | 500 更新 | Issues 17% / PRs 45.8% | v2026.9.1-beta.1 | 🟠 中等偏紧 | 高吞吐 + P0 积压 |
| **CoPaw (QwenPaw)** | 45 更新（33 关） | 36 更新（16 合） | Issues 73% / PRs 44% | v2.2.0-beta.2 + beta.3 | 🟢 活跃冲刺 | 发版冲刺期 |
| **ZeroClaw** | 36 更新（7 关） | 50 更新（1 合） | Issues 19% / PRs ~2% | 无 | 🟠 高积压低产出 | RFC 沉淀期 |
| **IronClaw** | 13 更新（3 关） | 28 更新（15 合） | Issues 23% / PRs 53.6% | v1.4.0（08-27） | 🟢 良好 | 性能 + 通知收口 |
| **NanoClaw** | 3 更新（0 关） | 50 更新（5 合） | Issues 0% / PRs 10% | 无 | 🟠 高 PR 积压 | 协议重构期 |
| **LobsterAI** | 5 更新（3 关） | 10 更新（9 合） | Issues 60% / PRs 90% | Release 2026.8.28 | 🟢 良好 | 版本收口期 |
| **NanoBot** | 8 更新 | 20 更新（8 合） | PRs 40% | 无 | 🟢 内聚重构 | 底层抽象重塑 |
| **Hermes Agent** | 部分数据 | 部分数据 | — | — | 🟡 数据不完整 | — |
| **PicoClaw** | 1 更新 | 1 关闭（未合） | 0% | 无 | 🔴 低活跃 | 维护空窗期 |
| **Moltis** | 1（0 关） | 0 | 0% | 无 | 🔴 极低活跃 | 静默观察期 |
| **NullClaw** | 0 | 0 | — | 无 | ⚫ 无活动 | — |
| **TinyClaw** | 0 | 0 | — | 无 | ⚫ 无活动 | — |
| **ZeptoClaw** | 0 | 0 | — | 无 | ⚫ 无活动 | — |

> **观察**：活跃度与"是否发版"高度相关——发版冲刺日（CoPaw、IronClaw、LobsterAI）的关闭率显著高于纯重构/沉淀日（ZeroClaw、NanoClaw）。

---

## 3. OpenClaw 在生态中的定位

| 维度 | OpenClaw | 同类参照 | 差异化判断 |
|---|---|---|---|
| **绝对吞吐** | 24h 1000 条（I+P） | CoPaw 81、ZeroClaw 86、NanoClaw 53 | OpenClaw ≈ 第二名 10 倍级 |
| **核心定位** | 多渠道 IM Gateway + Agent 运行时 | CoPaw：MCP/桌面双轨；ZeroClaw：通用 agent + 强治理；IronClaw：性能优化 + NEAR AI | OpenClaw 是**渠道广度最深**的（Feishu/WhatsApp/Telegram/Slack/Teams 全谱系） |
| **当前痛点** | P0 OOM 泄漏、P1 Codex 截断、P1 静默丢消息 | CoPaw：OpenSSL DPI、MCP 握手；ZeroClaw：CRDT-style RFC 治理 | OpenClaw 的痛点集中在**消息可靠性**，与多渠道适配层直接相关 |
| **技术路线** | Beta 增量 + SQLite 元数据 + 强兼容旧版 | ZeroClaw：RFC-first；NanoBot：底层抽象重构 | OpenClaw 是**保守兼容性路线**，通过 beta 渐进引入 restart-safe 语义 |
| **社区规模** | TOP10 Issue 评论 9–23，50–100+ 历史 PR 关闭量 | CoPaw：单 Issue 最高 13 评论；ZeroClaw：单 RFC 最高 21 评论 | OpenClaw 社区**单点问题热度更高**，说明用户基数与曝光度领先 |
| **成熟度信号** | v2026.9.1-beta.1 仍带 known regression（[#124284](https://github.com/openclaw/openclaw/issues/124284)） | CoPaw beta.3；IronClaw 已 stable v1.4.0 | OpenClaw 处于"未达 stable 节奏"的开发态，但**功能面最完整** |

**结论**：OpenClaw 在生态中是"广度 + 用户基数 + 渠道兼容性"的领跑者，但当前以**稳定性收敛**为最关键任务；同类项目中 CoPaw 在 MCP 协议工程化上更靠前，ZeroClaw 在治理流程上更严谨，IronClaw 在成本/性能优化上更聚焦。

---

## 4. 共同关注的技术方向

以下需求在多项目并行出现，是 2026 年 Q3 智能体生态的共识性议题：

| 主题 | 涉及项目 | 具体诉求 |
|---|---|---|
| **MCP 协议栈深化** | CoPaw、ZeroClaw、NanoBot | CoPaw 上线 Streamable-HTTP 双协议客户端；ZeroClaw 提 RFC "Wire Protocol 一等公民"；NanoBot 社区要求 MCP Apps host 支持。说明 MCP 已从"能用"走向"协议治理"。 |
| **工具结果投影与裁剪** | OpenClaw、IronClaw、NanoBot、CoPaw | OpenClaw Session 层 64 KiB 静默截断；IronClaw Gmail 49KB MIME header 引发 14.3s 推理；NanoBot 1200 字符 JSON 截断丢字段；CoPaw 单行巨型结果落盘。共识：**默认必须投影/分块，不能全量灌入 prompt**。 |
| **Memory 子系统重构** | NanoBot、ZeroClaw | NanoBot 三 PR 联动（#5570/#5571/#5575）做"memory 2.0"；ZeroClaw RFC #6850 要求解耦 Memory 生命周期与存储后端。共识：**memory 应显式分块、可插拔、可审计**。 |
| **安全/沙箱边界精细化** | ZeroClaw、NanoClaw、OpenClaw | ZeroClaw RFC #6996（细粒度沙箱）+ RFC #6909（computer-use）；NanoClaw #216 修复 `/proc` 绕过密钥清理；OpenClaw 写工具拒绝后静默禁用持久化。共识：**纵深防御策略必须显式、可配置、可验证**。 |
| **OAuth / 凭证自动刷新** | NanoClaw、OpenClaw、Hermes Agent | NanoClaw #2363 主动刷新即将过期 token；OpenClaw 凭据恢复后聊天阻塞；Hermes Agent OAuth MCP 锁竞争家族。共识：**短 TTL token 必须有自动续期，不能让用户感知 401**。 |
| **多渠道流式可靠性** | OpenClaw、CoPaw、ZeroClaw | OpenClaw Feishu 媒体丢失 / WhatsApp 主 lane 阻塞；CoPaw DingTalk 切网/VPN 后流假活；ZeroClaw Telegram 长任务无进度反馈。共识：**渠道适配层是 P1 重灾区**。 |
| **Runtime Context 生命周期** | NanoBot、OpenClaw | NanoBot #5586 提 ephemeral runtime-context；#5584 限制 reasoning 回放窗口；OpenClaw Plugin Hooks 缺 trace context（#50291）。共识：**什么进 prompt、什么持久化、什么丢弃**需要更细粒度控制原语。 |
| **Steer / 中途纠偏模式** | OpenClaw、PicoClaw、QwenPaw | OpenClaw 飞书 `/stop` 不再绕过队列（#42803）；PicoClaw #3342 提案 after-turn 队列；QwenPaw #1775 求 codex-like steer mode。共识：**执行中追加信息的语义需要模型/产品/工程三层对齐**。 |
| **Fallback / Provider 路由** | NanoBot、CoPaw、ZeroClaw | NanoBot ProviderAttempt 显式化；CoPaw PR #7392 加独立 fallback 设置页；ZeroClaw RFC #8396 将 Wire Protocol 提升为一等公民。共识：**Provider 抽象应支持协议层解耦**，便于回退与多模型切换。 |
| **可观测性 / Trace Context** | OpenClaw、IronClaw、NanoBot | OpenClaw Plugin Hooks 缺 messageId/runId/parentSpanId；IronClaw 暴露 NEAR AI 模型能力元数据；NanoBot RetryWaitEvent 投递到 channels。共识：**从"功能可用"进入"可调试/可观测"阶段**。 |

---

## 5. 差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 关键架构差异 |
|---|---|---|---|
| **OpenClaw** | 多渠道 IM 网关 + Agent 运行时 | IM 重度用户、跨平台个人助手使用者 | 渠道适配层最深；SQLite 元数据；restart-safe turn 保留 |
| **CoPaw (QwenPaw)** | MCP 协议 + 桌面/API 双形态 + 团队化方向 | 阿里云生态、MCP 早期采用者、团队协作 | MCP 协议栈工程化最深；A-tier deferred startup；Hub 多租户演进中 |
| **ZeroClaw** | 通用 agent + RFC-first 治理 | 协议设计贡献者、企业安全敏感用户 | RFC 决策队列（#8692）；细粒度沙箱；Provider 凭证轮换 |
| **IronClaw** | 性能 + 成本优化 + NEAR AI 模型 | 成本/性能敏感用户、NEAR 生态 | 工具结果投影（result_read budget）；BM25 阈值收敛；持久化 Inbox |
| **NanoClaw** | 容器化 agent + 强边界纪律 | 自托管开发者、安全审计场景 | 容器 host 边界策略；credential-proxy；setup 驱动协议栈 |
| **NanoBot** | 学术/HKU 系底层抽象 + memory 子系统 | 研究型开发者、内存架构实验者 | ProviderAttempt 不可变；agent.tools.execution 拆分；memory 2.0 |
| **LobsterAI** | 消费级桌面 + 中文化体验 | 中文 C 端用户、网易生态 | 服务端 Banner 调度；手机号脱敏合规；Plan 模型目录 |
| **PicoClaw** | 轻量渠道适配 | 边缘/小内存场景（疑似 SiPeed 硬件） | 极简吞吐、QQ 频道增强 |
| **Moltis** | 沙箱环境 + 多节点 | 部署运维者 | 沙箱节点扩展（今日仅 1 Issue 反映功能阻断） |
| **Hermes Agent** | Claude Agent SDK + 跨平台审批 | 企业部署、订阅型 OAuth | Claude-agent-sdk provider；WeChat→Feishu 审批委派 |
| **NullClaw / TinyClaw / ZeptoClaw** | 暂无活跃信号 | — | — |

---

## 6. 社区热度与成熟度分层

### 🔴 快速迭代层（高吞吐、低关闭率）
- **OpenClaw**：24h 1000 条更新、PR 合并率 45.8%、但 P0 泄漏 4 天无 fix。健康度"中等偏紧"。
- **ZeroClaw**：36+

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目日报

**日期：2026-08-29** ｜ **仓库：[HKUDS/nanobot](https://github.com/HKUDS/nanobot)**

---

## 1. 今日速览

NanoBot 今日呈现出**高强度迭代态势**：24 小时内共处理 8 个 Issue 与 20 个 PR，其中 8 个 PR 已合并/关闭，12 个 PR 仍待合并，无新版本发布。当日合并动作主要集中在 **agent runner 架构重构**（工具执行边界、provider fallback 显式化）与 **记忆子系统简化**（移除 consolidation ratio）两大方向；新上报的 Issues 则集中在 **runtime-context 生命周期管理**、**Session 持久化稳定性** 与 **Cron/WebUI 集成** 等生产环境痛点，整体显示项目正进入"重构 + 收尾 P1/P2 缺陷"并行阶段。

---

## 2. 版本发布

⚠️ 今日无新版本发布。以下为最近可关注的版本动向：
- 多个 P1 级 PR（如 #5580、#5587、#5589）一旦合并到位，建议尽快发布补丁版本以收敛 Session 持久化与 Cron 元数据相关的崩溃问题。

---

## 3. 项目进展（今日已关闭的 PR）

| PR | 类型 | 关键价值 |
|---|---|---|
| [#5560](https://github.com/HKUDS/nanobot/pull/5560) | CLI UX | 让 `nanobot` 直接启动原生终端 agent，统一入口 |
| [#5569](https://github.com/HKUDS/nanobot/pull/5569) | agent 重构 | 将工具调用准备/执行/批处理/分类抽离到 `nanobot.agent.tools.execution`，降低 `AgentRunner` 复杂度 |
| [#5574](https://github.com/HKUDS/nanobot/pull/5574) | provider 重构 | 引入不可变 `ProviderAttempt` 与显式 async 路由，统一 fallback 决策链 |
| [#5575](https://github.com/HKUDS/nanobot/pull/5575) | memory 重构 | 移除 `consolidationRatio`，归档逻辑改为"向前回溯到 user turn"确定性策略 |
| [#5576](https://github.com/HKUDS/nanobot/pull/5576) / [#5577](https://github.com/HKUDS/nanobot/pull/5577) | TUI 修复 | 同一 Herdr pane 修复的两个 PR 均被关闭（重复合并/废弃） |
| [#5578](https://github.com/HKUDS/nanobot/pull/5578) | TUI 测试 | Windows 剪贴板测试避免等待瞬态状态行消息 |
| [#5579](https://github.com/HKUDS/nanobot/pull/5579) | session 修复 | 已被 [#5580](https://github.com/HKUDS/nanobot/pull/5580) 取代，作为过渡方案关闭 |

**整体推进评估**：项目在 agent runner、provider 路由、memory 系统三条主线上持续进行"内聚化重构"，每一项都提升了内部抽象质量。**对外可感知的进展相对有限**，更多是底层稳定性的积累，距离下一个用户可见的 milestone（MCP Apps、可插拔 memory）仍有距离。

---

## 4. 社区热点

| 排名 | 条目 | 评论数 | 简要分析 |
|---|---|---|---|
| 🥇 | [#5251](https://github.com/HKUDS/nanobot/issues/5251) MCP Apps host support | 2 | 社区对 MCP Apps（`io.modelcontextprotocol/ui`）扩展的支持呼声最高，反映出 nanobot 已具备 MCP client 能力，但缺 server→UI 的富交互通道 |
| 🥈 | [#4429](https://github.com/HKUDS/nanobot/issues/4429) Custom provider thinking style | 2 | 已关闭，反映非 OpenAI 系（VolcEngine/Doubao 等）用户对 thinking/reasoning 参数差异化的需求 |
| 其他 | 多数新 Issue 评论数为 0 | 0 | 多数提案仍处"刚提出"阶段，社区互动尚未发酵 |

**诉求洞察**：当前热点集中在 **协议兼容性扩展**（MCP Apps）与 **provider 兼容性**（非标准 thinking 参数）两类需求，前者关乎生态接入广度，后者关乎用户切换成本。

---

## 5. Bug 与稳定性

按严重程度排序：

| 级别 | 条目 | 问题 | Fix PR |
|---|---|---|---|
| 🔴 P1 | [#5582](https://github.com/HKUDS/nanobot/issues/5582) | WebUI 中含 quote/@mention 的回合调度 Cron 时，在 add 或 fire 阶段崩溃，导致提醒丢失 | ✅ [#5587](https://github.com/HKUDS/nanobot/pull/5587) |
| 🔴 P1 | [#5589](https://github.com/HKUDS/nanobot/pull/5589) | 已 discarded 的 session 在清理阶段仍可向全局 message bus 发布消息，造成"幽灵 session 复活" | ⏳ PR 自身 |
| 🔴 P1 | [#5580](https://github.com/HKUDS/nanobot/pull/5580) | `SessionManager` 缓存与持久化事务在 worker 线程中不安全；持久化占用 event loop | ⏳ PR 自身（取代 #5579） |
| 🟡 P2 | [#5592](https://github.com/HKUDS/nanobot/issues/5592) | `edit_file` 文档未说明 match 选择器互斥，用户易误用 | ❌ 待处理 |
| 🟡 P2 | [#5590](https://github.com/HKUDS/nanobot/pull/5590) | 大体积 JSON 工具结果被截断至 1200 字符，丢失 `ok`/`status`/`error` 等根级字段 | ⏳ PR 自身 |
| 🟡 P2 | [#5588](https://github.com/HKUDS/nanobot/pull/5588) | 工具抛出异常（而非返回 error-shaped result）时未附加"换种思路"提示 | ⏳ PR 自身 |
| 🟡 P2 | [#5587](https://github.com/HKUDS/nanobot/pull/5587) | Cron 持久化的 origin metadata 含 live runtime-context，存在信息泄漏与重放风险 | ⏳ PR 自身 |
| 🟡 P2 | [#5581](https://github.com/HKUDS/nanobot/pull/5581) | Windows 终端退出 `nanobot agent` 后光标回到历史终端位置 | ⏳ PR 自身 |
| 🟡 P2 | [#5504](https://github.com/HKUDS/nanobot/pull/5504) | 模型重试状态仅在 CLI 显示，WebUI/TUI 用户无感知（与 #5585 紧密关联） | ⏳ PR 自身（conflict 标记） |

**整体稳定性评估**：今日新报的 P1 Bug 均与 **session/Cron 持久化路径** 相关，集中在跨运行时（WebUI→Agent→Cron）的元数据序列化边界。建议优先合并 #5587、#5589、#5580。

---

## 6. 功能请求与路线图信号

| 提案 | 关联 PR | 纳入下版本的概率 |
|---|---|---|
| MCP Apps host 支持（[#5251](https://github.com/HKUDS/nanobot/issues/5251)） | 暂无 PR | ⭐⭐ 较高中：扩展 MCP 生态的关键能力 |
| Ephemeral runtime-context blocks（[#5586](https://github.com/HKUDS/nanobot/issues/5586)） | 暂无 | ⭐⭐⭐ 高：与 #5587 同源问题，社区诉求明确 |
| RetryWaitEvent 投递到 channels（[#5585](https://github.com/HKUDS/nanobot/issues/5585)） | [#5504](https://github.com/HKUDS/nanobot/pull/5504) 部分覆盖 | ⭐⭐⭐ 高：5504 已进入 PR 队列 |
| 限制 `reasoning_content`/`thinking_blocks` 回放窗口（[#5584](https://github.com/HKUDS/nanobot/issues/5584)） | 暂无 | ⭐⭐ 中：与 context compaction 重构相关，待 #5568 落地后可能联动 |
| 工具异常附加 hint（[#5583](https://github.com/HKUDS/nanobot/issues/5583)） | [#5588](https://github.com/HKUDS/nanobot/pull/5588) | ⭐⭐⭐⭐ 极高：PR 已就位 |
| 可插拔 memory 后端（[#5570](https://github.com/HKUDS/nanobot/pull/5570)） | [#5570](https://github.com/HKUDS/nanobot/pull/5570) + [#5571](https://github.com/HKUDS/nanobot/pull/5571) | ⭐⭐⭐⭐ 极高：双 PR 联动，重塑 memory 默认行为 |
| MCP schema 字节预算（[#5388](https://github.com/HKUDS/nanobot/pull/5388)） | 自身 | ⭐⭐ 中：conflict 标记，依赖 MCP Apps 讨论路径 |

**路线图信号**：memory 子系统正在经历一次明显的"内聚化 + 显式化"重构（#5570、#5571、#5575 三箭齐发），建议维护者给出统一的"memory architecture 2.0"说明文档以降低社区理解成本。

---

## 7. 用户反馈摘要

由于今日多数 Issue 评论数为 0，可直接提炼的反馈有限。综合可见线索：

- **🔧 真实痛点**：WebUI 用户使用 quote/@mention 时触发的 Cron 崩溃（[#5582](https://github.com/HKUDS/nanobot/issues/5582)）——说明 WebUI→Cron 的链路在元数据序列化为 JSON-safe 快照时存在盲点，用户在生产场景中容易踩坑。
- **🤔 隐性诉求**：多个提案都提到"运行时上下文应当更精细可控"（[#5584](https://github.com/HKUDS/nanobot/issues/5584)、[#5585](https://github.com/HKUDS/nanobot/issues/5585)、[#5586](https://github.com/HKUDS/nanobot/issues/5586)）——用户对"什么该进 prompt、什么该持久化、什么该丢弃"已有清晰的边界设想，期待 nanobot 提供更细粒度的控制原语。
- **🟢 满意面**：[#4429](https://github.com/HKUDS/nanobot/issues/4429) 已关闭，表明维护者对非主流 provider 的 thinking 参数差异需求响应及时。

---

## 8. 待处理积压（提醒维护者关注）

| 条目 | 状态 | 风险点 |
|---|---|---|
| [#5388](https://github.com/HKUDS/nanobot/pull/5388) MCP schema 字节预算 | OPEN，自 8 月 13 日起 conflict | 已 16 天无更新，与 MCP Apps 路线耦合，建议尽快 rebase 或合并决策 |
| [#5568](https://github.com/HKUDS/nanobot/pull/5568) agent runner 接管 context compaction | OPEN 3 天 | 架构级变更，是 #5584 限制回放窗口的前置依赖 |
| [#5251](https://github.com/HKUDS/nanobot/issues/5251) MCP Apps host support | OPEN 24 天，评论最多 | 长期社区诉求，需维护者明确表态是否纳入路线图 |
| [#5504](https://github.com/HKUDS/nanobot/pull/5504) UI 展示重试状态 | OPEN 5 天，conflict | 与 #5585 直接关联，建议合并前同步 issue 状态 |
| [#5570](https://github.com/HKUDS/nanobot/pull/5570) + [#5571](https://github.com/HKUDS/nanobot/pull/5571) memory 双 PR | OPEN，均 conflict | memory 2.0 入口，建议维护者指定统一审阅人推进 |
| [#4429](https://github.com/HKUDS/nanobot/issues/4429) closed | 已关 | 留意是否需补充 changelog 说明对 custom provider 的兼容字段变更 |

---

## 附录：关键链接索引

- 🟢 新增/活跃 Issues：[#5592](https://github.com/HKUDS/nanobot/issues/5592) · [#5586](https://github.com/HKUDS/nanobot/issues/5586) · [#5585](https://github.com/HKUDS/nanobot/issues/5585) · [#5584](https://github.com/HKUDS/nanobot/issues/5584) · [#5583](https://github.com/HKUDS/nanobot/issues/5583) · [#5582](https://github.com/HKUDS/nanobot/issues/5582) · [#5251](https://github.com/HKUDS/nanobot/issues/5251)
- 🔴 重点 PR：[#5580](https://github.com/HKUDS/nanobot/pull/5580) · [#5589](https://github.com/HKUDS/nanobot/pull/5589) · [#5587](https://github.com/HKUDS/nanobot/pull/5587) · [#5591](https://github.com/HKUDS/nanobot/pull/5591)
- 📦 memory 主线：[#5570](https://github.com/HKUDS/nanobot/pull/5570) · [#5571](https://github.com/HKUDS/nanobot/pull/5571)

> **维护者建议**：本周聚焦三件事 ——

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

` 等内部标记。**暂无 fix PR。**

- **#97635** Windows 原生 desktop 下 /background 结果未投递
  https://github.com/NousResearch/hermes-agent/issues/97635
  响应生成并持久化但静默不送达。**暂无 fix PR。**

- **#77369 / #91265 / #84132 / #93562 / #49543 / #81051 / #38193** OAuth MCP 锁竞争家族
  - 涉及 fresh-process mtime=0、auth-flow lock 跨任务释放、retry 后 parked 等多个变种，今日 5 条已关闭为重复（保留代表条目）。
  - 相关修复线索：PR #97675（make reconnect retries safe for write tools）
    https://github.com/NousResearch/hermes-agent/pull/97675
  - 仍属 P2 持续风险，但合并后预计显著降低该类故障发生率。

**P3 一般**
- **#97382** `int` 对象无 lstrip 属性的 streaming 崩溃
  https://github.com/NousResearch/hermes-agent/issues/97382
  OpenAI 兼容 provider 推送非字符串 token 时崩溃。
- **#77423** search_files 在非 glob 模式下静默返回 0 结果
  https://github.com/NousResearch/hermes-agent/issues/77423
- **#96153** Windows 创建 bot 按钮在 CJK 输入时禁用
  https://github.com/NousResearch/hermes-agent/issues/96153
- **#97596** BWS secret 注入白名单不覆盖自定义 provider 的 key_env
  https://github.com/NousResearch/hermes-agent/issues/97596
- **#97597** Feishu 适配器无条件传 extra_ua_tags 触发 TypeError
  https://github.com/NousResearch/hermes-agent/issues/97597
- **#86571** Windows Terminal/ConPTY 下 TUI 鼠标滚轮与选区失效
  https://github.com/NousResearch/hermes-agent/issues/86571

## 功能请求与路线图信号

候选纳入下一版本的提案：

- **#95489 Proposal: Desktop Debug MCP server**（feature / needs-decision）
  https://github.com/NousResearch/hermes-agent/issues/95489
  为 LLM 智能体提供原生 UI 调试工具集，提案附带对当前 ad-hoc `diag-*.mjs` 流程的整合思路，具备较强的产品契合度。

- **#76820 [Feature] Per-subagent model routing + API key pooling**（已关闭 sweeper:not-planned）
  https://github.com/NousResearch/hermes-agent/issues/76820
  虽被列入 not-planned，但社区已有 +1，关注度可作为下一周期再评估的信号。

- **PR #65982 feat(providers): claude-agent-sdk provider**
  https://github.com/NousResearch/hermes-agent/pull/65982
  Claude Agent SDK 作为一等 runtime，在 subscription OAuth 下以 fail-closed 模式接入 metered billing，是 P3 战略级特性。Issue 25167 仍处 OPEN 状态。

- **PR #47863 feat(approval): native cross-platform approval delegation**
  https://github.com/NousResearch/hermes-agent/pull/47863
  跨平台（WeChat/WeCom → Feishu）命令审批委派，被标记为 blast-moderate，若合并将影响企业部署安全模型。

- **PR #91289 feat(cron): defer monitor state commit until delivery succeeds**
  https://github.com/NousResearch/hermes-agent/pull/91289
  将 monitor 状态持久化推迟到投递成功之后，解决"看似成功但实际投递失败"的隐性数据漂移。

- **PR #97631 Route repository changes through Delegate Wave**
  https://github.com/NousResearch/hermes-agent/pull/97631
  为仓库变更引入 opt-in、fail-closed 的代理监督路径，是 AGENTS.md 工程化的关键拼图。

- **PR #93294 feat(email): sanitized rich HTML replies**
  https://github.com/NousResearch/hermes-agent/pull/93294
  邮件网关从纯文本升级为 multipart/alternative，向后兼容默认行为。

- **PR #88832 feat(plugins): expose gateway route context**
  https://github.com/NousResearch/hermes-agent/pull/88832
  暴露稳定的 gateway session key 与 source metadata 给插件中间件。

- **PR #89487 feat(desktop): ⌘⇧E 折叠/展开侧边栏**
  https://github.com/NousResearch/hermes-agent/pull/89487
  纯体验增强，阻力最小。

## 用户反馈
</think>

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目日报

**报告日期：2026-08-29**
**数据来源：[sipeed/picoclaw](https://github.com/sipeed/picoclaw)**

---

## 1. 今日速览

PicoClaw 项目今日活跃度处于**较低水平**，过去 24 小时内仅产生 1 条 Issue 更新和 1 条 PR 关闭记录，无新版本发布。值得注意的是，今日关闭的 PR #1349 是 5 个月前提交的 QQ 频道附件解析增强功能，最终**未合并**而关闭，反映出项目近期代码审阅节奏较慢或维护者关注点转移。同时，唯一活跃的 Issue #3342 已被标记为 [stale]（停滞状态），社区互动反馈有限（仅 1 条评论、0 个 👍）。整体来看，项目处于一个**维护性低活跃期**，建议关注者留意其长期趋势。

---

## 2. 版本发布

⚠️ **今日无新版本发布。**

---

## 3. 项目进展

### 已关闭 PR：#1349 — QQ 频道附件类型解析增强（未合并）

- **链接**：[PR #1349](https://github.com/sipeed/picoclaw/pull/1349)
- **作者**：aishannon
- **状态**：CLOSED（**未合并**）
- **提交时间**：2026-03-11（距今约 5.5 个月）
- **更新时间**：2026-08-29

**变更内容**：
1. 支持解析 QQ 频道 Emoji 结构；
2. 支持接收 QQ 频道的语音、图片、视频、文件消息；
3. 支持本地语音、图片、视频、文件附件回复（发送前上传）；
4. 优先使用 Markdown 回复，失败时降级处理。

**评估**：这是一个有实际价值的渠道功能增强，但经过 5 个多月的等待后被关闭（0 评论、0 👍），可能原因包括：
- PR 长期无人 review 或与主干存在合并冲突；
- 维护者优先级调整；
- 贡献者主动撤回。

**对项目的整体推进**：本次关闭并未带来实质性代码进展，社区贡献者提交的渠道增强功能未能落地，是一次**净流失**。建议维护者对长期未合并的外部 PR 建立定期清理机制，避免贡献者流失。

---

## 4. 社区热点

### 最活跃议题：#3342 — "after-turn" steering 模式功能请求

- **链接**：[Issue #3342](https://github.com/sipeed/picoclaw/issues/3342)
- **作者**：unedtamps
- **状态**：OPEN（已标记 [stale]）
- **创建时间**：2026-08-21（8 天前）
- **评论数**：1 | 👍：0

**核心诉求**：当前 steering 设计在 agent 处理消息时收到新消息，会**跳过当前任务剩余的 tool 调用**并注入新消息。提案希望增加 opt-in（可选启用）的 "after-turn" 模式——将新消息**排队**到当前 turn 完成后处理，避免打断进行中的任务。

**分析**：该请求揭示了 PicoClaw 在多轮对话/并发消息处理上的一个体验痛点：用户连续发送消息时，agent 的"中断-重定向"行为可能不符合用户预期（用户可能只想补充上下文而非改变方向）。这类**会话连续性**问题是 AI Agent 产品的常见难点，反映出社区用户开始关注更深层的交互体验而不仅是基础功能。然而 [stale] 标记和 0 👍 表明该议题尚未在社区引发广泛共鸣，可能是单人提议尚未扩散。

---

## 5. Bug 与稳定性

✅ **今日无 Bug、崩溃或回归问题报告。**

过去 24 小时唯一的 Issue 更新（#3342）属于功能请求而非缺陷报告。项目近期稳定性报告方面较为平静。

---

## 6. 功能请求与路线图信号

### 已识别的新功能需求

| 编号 | 需求 | 状态 | 进入下一版本的可能性 |
|------|------|------|---------------------|
| [#3342](https://github.com/sipeed/picoclaw/issues/3342) | after-turn 消息排队模式（避免打断正在运行的 turn） | OPEN / stale | ⚠️ 较低 — 缺少社区反响、维护者未响应 |

### 分析

- 当前**没有任何相关 PR** 在跟进该功能请求；
- PR #1349 关闭后，社区贡献的渠道增强能力出现倒退迹象；
- 若维护者希望保持路线图可见性，建议在仓库中开启 **Discussions** 或 Projects 看板，集中呈现待办优先级。

---

## 7. 用户反馈摘要

由于评论数据稀疏（仅 Issue #3342 含 1 条评论），可提炼的真实反馈信号有限：

- **🤔 痛点场景**：用户在 agent 处理长任务时补充消息，遭遇"被跳过工具调用"的体验，这与直觉不符——用户期待消息被**累积**而非**替换**。
- **👍 满意点**：无明确反馈。
- **👎 不满意点**：现有 steering 行为被认为"激进"（直接中断），缺乏可控的替代方案。

**说明**：受限于数据可得性（多数 Issue/PR 评论数 < 2），本节信号偏弱，建议后续通过 Discussions、Discord 等渠道收集更全面的用户声音。

---

## 8. 待处理积压

### ⚠️ 需维护者重点关注的停滞项

| 项目 | 类型 | 创建时间 | 停滞时长 | 风险 |
|------|------|---------|---------|------|
| [#3342](https://github.com/sipeed/picoclaw/issues/3342) | Feature Request | 2026-08-21 | 8 天 | 已被系统标记 [stale]，存在被自动关闭风险 |
| [#1349](https://github.com/sipeed/picoclaw/pull/1349) | Enhancement (已关闭) | 2026-03-11 | 5.5 个月 | 已关闭，贡献者未被及时反馈，社区贡献渠道健康度受损 |

### 维护者建议行动清单

1. **处理 Issue #3342**：即使是简短回复（"感谢提议，将纳入下个迭代评估"或"暂不计划"），也能避免 [stale] 标签进一步降低社区参与意愿；
2. **建立 PR SLA**：为外部 PR 设定最长 review 周期（如 30/60/90 天），及时关闭或合并，避免贡献者流失；
3. **公开路线图**：借助 GitHub Projects 看板公开优先级，提升贡献者投入回报预期。

---

## 📊 项目健康度总评

| 维度 | 评分 | 说明 |
|------|------|------|
| 代码合并活跃度 | ⭐⭐☆☆☆ | 24h 内 0 PR 合并，1 个长期 PR 被关闭 |
| 社区互动活跃度 | ⭐⭐☆☆☆ | Issue 评论稀少，0 点赞 |
| 版本发布节奏 | ⭐☆☆☆☆ | 今日无新版本 |
| 维护者响应速度 | ⭐⭐☆☆☆ | 长期 PR/Issue 缺乏反馈 |
| 整体健康度 | **2 / 5** | 处于维护性低活跃期，建议加强社区运营 |

---

*报告生成时间：2026-08-29 | 数据基于 GitHub 公开 API 抓取*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报
**日期：2026-08-29**

---

## 一、今日速览

NanoClaw 今日呈现**高强度、低收尾**的典型开发中期态势：过去 24 小时内 PR 更新量达 **50 条**（其中 45 条仍处于待合并状态，仅 5 条已关闭/合并），Issues 仅新增 3 条且均未关闭。无新版本发布，说明当前工作集中在**功能补全与协议重构**阶段，而非发版冲刺。值得关注的信号是，由 `amit-shafnir` 主导的 **setup 驱动协议重构栈**（约 38-39 个 PR 组成的系列）正在集中推进，本日报窗口内就贡献了 7 条相关 PR，显示项目正在为原生 macOS GUI 客户端铺路；同期已合并的 OAuth 自动刷新、Codex 契约收紧、密钥清理绕过修复则夯实了基础稳定性。整体而言，项目活跃度处于高位，但 PR 通过率（5/50 = 10%）偏低，社区维护者面对显著的合并积压压力。

---

## 二、版本发布

**今日无新版本发布。** 考虑到 setup 协议栈尚未合入主干、语音转写 V2（#2003）仍处重提交状态，近期（7 日内）出现正式发版的可能性较低。

---

## 三、项目进展

今日**已关闭/合并的 PR 共 5 条**，其中 4 条属于实际代码改动，质量较高：

| PR | 标题 | 影响范围 | 链接 |
|----|------|----------|------|
| **#2361** | [codex] 收紧 Codex provider 契约 | 用最新的 `codex app-server` JSON-RPC 契约替换过时的 SDK sketch；使 `CODEX_MODEL` 成为可选覆盖项；清理 40K/手动压缩的陈旧指导 | [🔗 PR](https://github.com/qwibitai/nanoclaw/pull/2361) |
| **#2363** | credential-proxy: 主动刷新即将过期的 Anthropic OAuth token（v2 移植自 #1102） | 修复 OAuth token 1 小时过期后容器代理出现 401 的"静默永久失败"问题；对 OneCLI 用户无影响 | [🔗 PR](https://github.com/qwibitai/nanoclaw/pull/2363) |
| **#1102** | credential-proxy: 自动刷新 OAuth token + keychain-only 鉴权 | 与 #2363 同一修复的原始 PR，已被 v2 版本取代关闭 | [🔗 PR](https://github.com/qwibitai/nanoclaw/pull/1102) |
| **#216** | 安全：修复通过 `/proc` 与 Read 工具绕过密钥清理 | 关闭 `PreToolUse` Bash hook 中 `unset ANTHROPIC_API_KEY` 的三条绕过向量（`/proc/self/environ` 不可变快照、Read 工具读取进程信息、`grep -r` 搜索） | [🔗 PR](https://github.com/qwibitai/nanoclaw/pull/216) |
| **#2326** | docs: 添加 issue 模板（bug / enhancement / skill） | 在 `.github/ISSUE_TEMPLATE/` 下新增三类表单，规范化社区反馈 | [🔗 PR](https://github.com/qwibitai/nanoclaw/pull/2326) |

**整体推进评估**：今日合并的 PR 集中在三个支柱——**鉴权可靠性**（OAuth 刷新）、**安全纵深防御**（密钥清理绕过）、**开发者契约现代化**（Codex）。这些都是被长期跟踪的痛点（#216 自 2026-02 起近 7 个月、#1102 自 2026-03 起近 5 个月才最终关闭），说明核心维护团队在积压清理上取得实质进展。但相对于 45 条待合并 PR 而言，今日净推进仍属个位数，维护通量是当前最大瓶颈。

---

## 四、社区热点

### 🔥 24h 内最受关注的 Issue

| 排名 | 编号 | 标题 | 评论数 | 链接 |
|------|------|------|--------|------|
| 1 | **#3645** | `bash nanoclaw.sh` 启动后无反馈、无日志地无限挂起 | **2** | [🔗 Issue](https://github.com/qwibitai/nanoclaw/issues/3645) |
| 2 | #3643 | 硬编码 30 分钟 ABSOLUTE_CEILING_MS 冷杀长周期本地模型回合 | 0 | [🔗 Issue](https://github.com/qwibitai/nanoclaw/issues/3643) |
| 3 | #3599 | feat: 持久化 rate_limit/quota 分类以支持失败任务自动重试 | 0 | [🔗 Issue](https://github.com/qwibitai/nanoclaw/issues/3599) |

**诉求分析**：
- **#3645** 已收获 2 条评论，发布当日即成为社区焦点，意味着多名用户在升级或首次安装后遭遇"哑挂起"，**首装成功率**正面临风险；
- **#3643** 与 **#3599** 均来自技术深度用户（`glifocat`、`DawoudIO`），前者要求暴露 host sweep 的硬上限配置面，后者要求区分"配额耗尽"与"任务故障"两类失败——这两条 Issue 本质上都是**让系统从"黑盒裁决"走向"可解释 + 可配置"**。

---

## 五、Bug 与稳定性

按严重程度排序：

### 🚨 P0 — 安装/启动阻塞
- **#3645** `bash nanoclaw.sh` 无限挂起，无任何反馈或日志
  - 作者：dagelf（外部用户首报）| 创建：2026-08-29
  - 状态：**[OPEN]**，已有 2 条讨论
  - 影响：用户**完全无法进入产品**，等价于一次"冷启动失败"
  - **尚未发现关联 fix PR**，是今日最需维护者即时响应的稳定问题
  - 🔗 [Issue #3645](https://github.com/qwibitai/nanoclaw/issues/3645)

### ⚠️ P1 — 静默中断且无配置面
- **#3643** 30 分钟 `ABSOLUTE_CEILING_MS` 硬编码冷杀本地模型长回合
  - 作者：glifocat（深度用户）| 创建：2026-08-28
  - 状态：**[OPEN]**，0 评论
  - 影响：使用 OpenCode provider 指向本地 OpenAI 兼容服务器的开发者会**意外丢失长周期智能体输出**，且无任何配置可调
  - **尚未发现关联 fix PR**
  - 🔗 [Issue #3643](https://github.com/qwibitai/nanoclaw/issues/3643)

> **稳定性信号**：今日两条新 Bug 均带有"硬编码/无配置面"的共同特征，叠加 #216 修复的"密钥清理可被绕过"，暴露出 NanoClaw 在**容器 host 边界策略**上存在系统性配置缺失。

---

## 六、功能请求与路线图信号

### 📌 强信号 — 已有对应 PR 跟进

| 请求 | 已存在/相关 PR | 评估 |
|------|----------------|------|
| Issue **#3599** 持久化 rate_limit/quota 分类以便自动重试 | 暂无直接对应 PR，但与 #216（密钥清理）和 credential-proxy 重构同属"可靠性与可解释性"主线 | **高纳入概率**——符合核心维护团队当前关注焦点 |
| Issue **#3643** 暴露 host sweep ceiling 配置 | 暂无 | **中纳入概率**——需架构决策，建议跟进 |

### 🚀 重大功能 PR 进展（仍 OPEN）

- **#2003** `feat(skill): voice transcription V2 — 容器侧、默认主权化**
  - 重提交版本 #1879，将语音转写从 host 迁入 agent container，符合 @gavrielcohen 提出的"把有趣的逻辑留在 agent 环境里"原则
  - 状态：**[OPEN]**，创建于 2026-04-25，已超过 4 个月未合并
  - 🔗 [PR #2003](https://github.com/qwibitai/nanoclaw/pull/2003)

- **#3633 - #3640, #3485** setup 驱动协议重构栈（amit-shafnir 主导）
  - 涵盖：Claude 鉴权驱动化、非结构化 provider 硬失败、机器入口守卫拒绝 argv/env 传入密钥、卸载 NDJSON 路径、首个 chat 驱动化与子进程字节上限、机器完成门控于已验证服务回执、渲染器奇偶校验测试、setup 协议文档化等
  - **共约 7-8 条 PR 集中在 24h 内提交**，是**路线图上的明确发力点**，目标是为原生 macOS GUI 提供机器可读的 setup 协议
  - 🔗 代表 PR：[#3633](https://github.com/qwibitai/nanoclaw/pull/3633)、[#3638](https://github.com/qwibitai/nanoclaw/pull/3638)、[#3639](https://github.com/qwibitai/nanoclaw/pull/3639)、[#3640](https://github.com/qwibitai/nanoclaw/pull/3640)、[#3485](https://github.com/qwibitai/nanoclaw/pull/3485)

- **#3644** `chore(github): add issue forms` —— 配套 #2326 已合并模板的工程化补全，落地概率极高
  - 🔗 [PR #3644](https://github.com/qwibitai/nanoclaw/pull/3644)

---

## 七、用户反馈摘要

> 来源：#3645 的 2 条公开评论 + 全部新 Issue 摘要

### 🔴 痛点

1. **"安装即挂起"造成的新用户流失风险**（#3645）
   - 真实场景：用户执行 `bash nanoclaw.sh` 后，终端只剩 ASCII art 动画，**无 stdout、无日志、无错误码**——既不知道是网络下载失败、权限问题，还是 UI 渲染崩溃
   - 情绪信号：因"完全无信息可循"，首发问题者**必须依靠截图求助**，对 CLI 类工具是严重的体验事故

2. **本地模型用户的"被系统背叛"感**（#3643）
   - 真实场景：开发者将 NanoClaw 桥接到本地 LLM（OpenCode → 自托管 OpenAI 兼容服务），期望长回合被支持；结果跑了 ~30 分钟被 host sweep 杀掉
   - 情绪信号：作者用 "cold-kills" 一词，暗示这是**未经协商的强制中断**——在本地推理场景下，"绝对上限"本就缺乏物理必要性

3. **运维盲区**（#3599）
   - 真实场景：定时任务失败时，`ncl tasks list` 只看到 `failed_runs` 计数，无法区分"Claude 用量耗尽"与"代码 bug"
   - 情绪信号：用户希望的不仅是重试，而是"**让我知道为什么失败**"——典型的可观测性诉求

### 🟢 满意/正反馈

- 通过已合并的 #2326（issue 模板），社区已可在标准化表单下提交反馈——这是项目**主动降低维护摩擦**的信号
- PR #2003 重提交时引用了 @gavrielcohen 的具体设计反馈并据此重构，说明维护者对社区 PR 的**技术对话是闭环的**

---

## 八、待处理积压 ⚠️

### 🕰️ 长期 OPEN 重要项（≥ 30 天未关闭）

| 类型 | 编号 | 标题 | 创建日期 | 等待天数 | 链接 |
|------|------|------|----------|----------|------|
| PR | **#2003** | voice transcription V2（主权化、容器侧） | 2026-04-25 | **~127 天** | [🔗 PR](https://github.com/qwibitai/nanoclaw/pull/2003) |
| PR | #3392 | fix(slack): 保持 1:1 DM 私属于配对用户 | 2026-08-20 | ~9 天 | [🔗 PR](https://github.com/qwibitai/nanoclaw/pull/3392) |
| PR | #3388 | fix(agent-runner): 默认任务升级到本 agent 频道 | 2026-08-20 | ~9 天 | [🔗 PR](https://github.com/qwibitai/nanoclaw/pull/3388) |
| PR | #3387 | fix(approvals): 保留 DM 的 adapter 实例 | 2026-08-20 | ~9 天 | [🔗 PR](https://github.com/qwibitai/nanoclaw/pull/3387) |
| PR | #3427 | fix(agent-runner): 告知 agent send_card 丢弃回调动作 | 2026-08-21 | ~8 天 | [🔗 PR](https://github.com/qwibitai/nanoclaw/pull/3427) |

### 📌 维护者建议关注

1. **#2003（语音转写 V2）** 已停留 4 个月以上——若协议/主权化设计已稳定，建议给出明确的"接受/拒绝"决定，避免 contributor 长期悬空；
2. **#3387 / #3388 / #3392 / #3427** 四个 agent-runner / approvals / slack 相关 fix 形成一个**小批量合入窗口**（9 天内），主题相近，建议作为下一批合并的候选；
3. **新发 #3645 哑挂起 Bug** 无 fix PR——若不尽快定位（疑似启动期日志/握手/UI 渲染中某一环卡住），首装体验将持续恶化；
4. **#3643 硬编码上限** 与 **#3599 失败分类** 揭示出 host 边界策略与任务可观测性的配置面缺失，建议纳入下一里程碑的"配置面扩展"主题。

---

### 📊 项目健康度快照

| 指标 | 数值 | 评估 |
|------|------|------|
| 24h PR 净通过率 | 5/50 = **10%** | ⚠️ 偏低，合并通量受限 |
| 24h 新 Issue 关闭率 | 0/3 = **0%** | ⚠️ 需即时响应 |
| 长期 OPEN 重要 PR（>30d） | 1 条 | 🟢 可控 |
| 安全/鉴权类合并 | 3 条 | 🟢 关键修复到位 |
| 路线图协议重构 | 进行中（setup driver stack） | 🟢 方向清晰 |
| 首装体验风险 | 1 条 P0（#3645） | 🔴 需立刻关注 |

---

*报告生成时间：2026-08-29 | 数据来源：NanoClaw GitHub Repository (qwibitai/nanoclaw)*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报
**报告日期：2026-08-29 | 数据周期：过去 24 小时**

---

## 1. 今日速览

IronClaw 今日维持高度活跃的开发节奏，过去 24 小时共产生 41 条记录更新（Issues 13 条 + PRs 28 条），其中 PR 合并/关闭 15 条，Issue 关闭 3 条，整体关闭率约 **43.9%**。今日工作重心明显集中在三个方向：**性能与成本治理**（工具结果未投影 / 过大提示词导致推理膨胀）、**通知基础设施补完**（Inbox 通知机制三条 PR 已全部落地）、以及**架构长期演进**（Agent 生命周期 Hooks 与持久化沙箱执行器 Spike）。项目健康度良好，技术债正在以小步快跑方式消化。

---

## 2. 版本发布

### 🚀 ironclaw-v1.4.0（2026-08-27 发布）

本版本为 `1.4.0-rc.1` 的稳定晋升，合并了自 v1.3.0 以来的 81 个提交。

**新增要点：**
- **持久化通知收件箱（Durable Notification Inbox）**：运行发布权威性结果与可操作的 Gate 至按用户隔离的 Inbox，由 WebUI 通知中心统一呈现。

**注意事项：**
- 本次为稳定版发布，无明确 Breaking Changes 描述，但本次日报观察到大量通知相关 PR（#7899、#7900、#7901）集中在 8 月 26–28 日合入，意味着 v1.4.0 是通知机制的"基底版本"，上层 UI 路由可能仍在演进。
- 升级前建议关注 Inbox 持久化层 schema 变更，以及外部通知渠道（auth provider、enrichment backend）失败时的回退行为。

🔗 Release 链接：nearai/ironclaw Release ironclaw-v1.4.0

---

## 3. 项目进展（今日已合入/关闭的重要 PR）

| PR | 标题 | 影响面 |
|---|---|---|
| [#7899](https://github.com/nearai/ironclaw/pull/7899) ✅ CLOSED | feat(notifications): publish automation pre-run failures | 通知体系：自动化预运行失败 Inbox 通知落地 |
| [#7901](https://github.com/nearai/ironclaw/pull/7901) ✅ CLOSED | fix(notifications): persist auth gates before enrichment | 通知可靠性：保证认证 Gate 在 enrichment 失败前已持久化 |
| [#7900](https://github.com/nearai/ironclaw/pull/7900) ✅ CLOSED | feat(notifications): publish durable resource blocks | 资源/策略阻塞通知接通 Inbox |
| [#7982](https://github.com/nearai/ironclaw/pull/7982) ✅ CLOSED | fix(tools): stop sending the model after a result_read budget it cannot reach | 工具调用：修复 result_read 预算回复错误引导模型陷入重试 |
| [#7965](https://github.com/nearai/ironclaw/pull/7965) ✅ CLOSED | perf(tool-search, github): stop offering tools that match one incidental query term | 工具发现：BM25 阈值收敛，避免"幻觉命中" |
| [#7979](https://github.com/nearai/ironclaw/pull/7979) ✅ CLOSED | test(extensions): enforce encoded output ownership | 架构门禁：编码/加密/二进制输出边界所有权强校验 |
| [#7980](https://github.com/nearai/ironclaw/pull/7980) ✅ CLOSED | ci: validate integration group topology | CI：集成测试分组目录校验前置 |
| [#5563](https://github.com/nearai/ironclaw/pull/5563) ✅ CLOSED | feat(webui): design system tokens + /playground | WebUI 设计系统落地（创建于 7-02，长达 58 天） |
| [#5084](https://github.com/nearai/ironclaw/pull/5084) ✅ CLOSED | Redesign the automations page | 自动化页面重设计（创建于 6-18，长达 72 天） |

**整体评估：** 本日累计 15 条 PR 合入/关闭，标志着 v1.4.0 后的"通知 + 工具质量"清扫轮次基本完成，**项目正向"性能 + 架构长期演进"阶段过渡**。尤其 #5563 与 #5084 这两条历史长期 PR 的关闭，说明设计系统与自动化 UI 的阻塞性设计债务得到解除。

---

## 4. 社区热点

### 🔥 Issue #7891（10 条评论，0 👍）—— 性能血案
**标题**：perf(extensions): unprojected capability payloads + blind 24 KiB head-slice cost 14.3s of inference on two emails
**核心诉求**：Gmail 工具调用返回 49,152 字节原始 MIME header，未经投影直接灌入 prompt，单次回合消耗 19.7 秒（19.2 秒为模型推理）。
🔗 [nearai/ironclaw Issue #7891](https://github.com/nearai/ironclaw/issues/7891)

### 🔥 Issue #7770（4 条评论）—— 架构方向性 Epic
**标题**：Epic: hook the agent lifecycle — after-turn, before-turn, compaction, and tool-result seams
**核心诉求**：把 `ironclaw_hooks` 扩展到完整的 agent 生命周期，让 "when X happens, do Y" 类型的特性从核心引擎侵入改为 Hook 注册。
🔗 [nearai/ironclaw Issue #7770](https://github.com/nearai/ironclaw/issues/7770)

### 🔥 Issue #7981（3 条评论）—— 工具结果投影缺失
**标题**：perf(github, tools): a raw list_repos payload plus an unhinted result_read schema cost 64 tool calls and 3m01s to list repos
**核心诉求**：GitHub list_repos 返回 519 KB 全量字段，模型被迫发出 61 次 result_read 才能拿到答案。
🔗 [nearai/ironclaw Issue #7981](https://github.com/nearai/ironclaw/issues/7981)

**诉求归纳**：三个高互动 Issue 共同指向**"工具输出未经投影导致模型认知/推理成本爆炸"**这一系统性问题。今日合入的 #7982、#7965 正是这一诉求链上的具体修复。

---

## 5. Bug 与稳定性

按严重程度排序（按 issue 标签 + 复现证据强度）：

| 严重度 | Issue / PR | 问题 | 已有 Fix？ |
|---|---|---|---|
| 🔴 High | [#7903](https://github.com/nearai/ironclaw/issues/7903) | Reborn 架构仍把完整 canonical agent loop 留在 trusted host，每新增 CLI 都需主机-沙箱命令管道改造 | Spike 阶段，PR #7908 已开启 |
| 🟠 Medium-High | [#7891](https://github.com/nearai/ironclaw/issues/7891) | Gmail tool 未投影返回 49KB MIME header，14.3s 推理时间 | 暂未指派 fix PR |
| 🟠 Medium | [#7981](https://github.com/nearai/ironclaw/issues/7981) | GitHub list_repos 519KB payload，64 次工具调用 | [#7982](https://github.com/nearai/ironclaw/pull/7982) ✅ 已合并（result_read 错误信息），但未触及 payload 投影 |
| 🟡 Medium | [#7986](https://github.com/nearai/ironclaw/issues/7986) | github 包自带投影接口未被使用，list_repos 仍返回 81 字段 | 暂无 fix PR |
| 🟡 Medium | [#7987](https://github.com/nearai/ironclaw/issues/7987) | `flatten_top_level` 用白名单重建 schema，丢弃非禁用约束且无诊断 | 暂无 fix PR |
| 🟢 Low-P1 | [#7930](https://github.com/nearai/ironclaw/issues/7930) | 工具参数无法引用前序结果，强制重发 payload | 暂无 fix PR |

**稳定性观察**：性能相关 bug 占今日新开 issue 的 60% 以上（#7891、#7981、#7986、#7987、#7930），且其中至少 3 条有具体生产日志佐证（run `13bad7f5` thread `bd6800cd`），**已具备 P1 修复素材**。

---

## 6. 功能请求与路线图信号

### NEAR AI 模型能力透传（#7969、#7970、#7971 三联）
形成完整需求链：后端发现 → 中台保持 → 前端渲染。当前均已立项但**暂无 PR**。
- [#7969](https://github.com/nearai/ironclaw/issues/7969) feat(llm): surface NEAR AI model capabilities across model-selection UI
- [#7970](https://github.com/nearai/ironclaw/issues/7970) feat(llm): preserve NEAR AI model modalities through model discovery
- [#7971](https://github.com/nearai/ironclaw/issues/7971) feat(webui): render model capability tags across Inference selectors

### Agent Lifecycle Hooks（#7770）
已有 Epic，明确分阶段计划，每个阶段交付给一个 agent 独立完成。今日 #7978（compaction 输入边界）与 #7975（oversized turn cuts）属于该 Epic 的 compaction 阶段候选。

### 沙箱执行器架构（#7903 + #7908）
- [#7903](https://github.com/nearai/ironclaw/issues/7903) 决策 Spike
- [#7908](https://github.com/nearai/ironclaw/pull/7908) feat(loop): spike canonical executor in persistent user sandbox（OPEN）

### 工具结果引用（#7930, P1）
强烈信号：**输出 token 浪费是用户感知最痛的成本问题**。无 PR，期望纳入近期 backlog。

### 学习/Review 路由（#7958 OPEN）
新增"post-run learning review path"，provider-neutral，绕过隐藏的 `IRONCLAW_SKILL_LEARNING_MODEL` 安装器，**是 1.4.x → 1.5 方向的功能增量信号**。
🔗 [#7958](https://github.com/nearai/ironclaw/pull/7958)

---

## 7. 用户反馈摘要

从 Issues 评论与 PR 摘要中提炼的真实痛点：

1. **"工具答案其实在第 1 次调用就有了"**（#7981）—— 用户期望系统能识别"答案已完整"，主动终止；今日 #7977（dominant repeated output 终止器）正在回应这一反馈。
3. **"原始 MIME header 不该出现在 prompt 里"**（#7891）—— 用户对工具"自报家门"行为敏感，要求投影/裁剪默认启用。
4. **"工具调用超时无明确错误"**（#7982 修复）—— 用户被 `result_read` 错误信息误导重试 5 次，反映**错误语义必须区分"输入错"与"资源不足"**。
5. **"通知 Inbox 必须先于 enrichment 持久化"**（#7901 修复）—— 用户场景中存在外部 enrichment 后端宕机，但本地 Inbox 不能因此丢失 Gate，反映**故障隔离优先级需显式编码**。
6. **"BM25 命中一个词就召回"**（#7965 修复）—— 用户反馈工具搜索"幻觉命中"导致模型误信；BM25 阈值应当收紧。

整体情绪：**对当前架构清晰度满意，但对工具投影、错误信息、调用预算透明度有持续要求**。

---

## 8. 待处理积压与维护者提醒

| 编号 | 类型 | 创建日期 | 待办天数 | 状态 |
|---|---|---|---|---|
| [#7891](https://github.com/nearai/ironclaw/issues/7891) | Bug (Medium) | 2026-08-25 | 4 天 | 高互动（10 评论）但无指派 |
| [#7986](https://github.com/nearai/ironclaw/issues/7986) | Bug (P2) | 2026-08-28 | 1 天 | 与 #7981 配对，无 fix PR |
| [#7987](https://github.com/nearai/ironclaw/issues/7987) | Bug | 2026-08-28 | 1 天 | 静默丢约束，无诊断 |
| [#7930](https://github.com/nearai/ironclaw/issues/7930) | P1 增强 | 2026-08-27 | 2 天 | 无 PR |
| [#7969](https://github.com/nearai/ironclaw/issues/7969) / [#7970](https://github.com/nearai/ironclaw/issues/7970) / [#7971](https://github.com/nearai/ironclaw/issues/7971) | Feature 三联 |

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目日报 · 2026-08-29

> 数据周期：过去 24 小时 | 项目：[netease-youdao/LobsterAI](https://github.com/netease-youdao/LobsterAI)

---

## 一、今日速览

LobsterAI 今日进入 2026.8.28 版本发布收尾期，整体活跃度较高。**Issues 5 条更新（关闭 3/活跃 2）**，**PRs 10 条更新（合并/关闭 9/待合并 1）**，并伴随 1 个正式 Release 落地。维护者 `liuzhq1986` 与 `Mind-Hand` 集中处理了 8.24/8.28 分支的电话号脱敏、登录引导、模型目录折叠与侧边栏 Banner 同步等收口工作；与此同时，多个带有 `[stale]` 标签的历史 Issue/PR 被自动归档（涉及会话搜索、安全/记忆模块单测、Gemini URL 修复），需要维护者主动复核以免遗漏关键修复。

---

## 二、版本发布

### 🚀 Release 2026.8.28

📦 [Release/2026.8.24 (#2572)](https://github.com/netease-youdao/LobsterAI/pull/2572) · 作者：@liuzhq1986 · 已关闭

主要更新内容（依据本次 Release 合并的 PR）：

| 类别 | 内容 | PR |
|---|---|---|
| 用户引导 | 登录流程引导页 | [#2525](https://github.com/netease-youdao/LobsterAI/pull/2525) |
| 设置 | 新增 Plan 模型目录（feat: plan model catalog） | [#2530](https://github.com/netease-youdao/LobsterAI/pull/2530) |
| 设置 | 模型列表分组折叠（More Models 默认收起） | [#2568](https://github.com/netease-youdao/LobsterAI/pull/2568) |
| 体验 | 侧边栏 Banner 服务端定时下发 + 客户端版本门控 + 本地过期与缓存处理 | [#2568](https://github.com/netease-youdao/LobsterAI/pull/2568) |
| 账户 | 手机号脱敏合并冲突修复（136\*\*\*\*7834 样式） | [#2570](https://github.com/netease-youdao/LobsterAI/pull/2570) |
| 账户 | 手机号昵称相关修复 | [#2569](https://github.com/netease-youdao/LobsterAI/pull/2569) · [#2571](https://github.com/netease-youdao/LobsterAI/pull/2571) |
| 收口 | 8.24 分支最终修复 | [#2567](https://github.com/netease-youdao/LobsterAI/pull/2567) |

**潜在破坏性变更**：

- `#2568` 引入了「服务端 Banner 调度 + 客户端版本门控」，升级后旧客户端可能被服务端主动限制显示，且本地缓存策略变化可能让之前手动关闭过的 Banner 在新版本重新出现。
- `#2530` 新增的 Plan 模型目录属于设置侧能力开关，文档/Demo 中若曾硬编码模型枚举需要复核。

**迁移建议**：升级前建议用户在 Settings 侧校验模型目录与 Banner 状态；如自定义了 baseURL 指向 Google Gemini 等 `/v1` 结尾的地址，请特别留意（见下文 Bug 段）。

---

## 三、项目进展

今日 9 条 PR 完成合并/关闭，其中 **5 条直接影响 2026.8.28 Release**，属于版本收口性质；其余为历史 backlog 的批量归档。

### ✅ 已合并进入 8.28 的关键 PR

1. **模型体验升级** — [#2568](https://github.com/netease-youdao/LobsterAI/pull/2568)（@Mind-Hand）
   - 将可选模型归入默认折叠的「More Models」分组，降低首屏信息密度；
   - 引入服务端 Banner 同步调度，含客户端版本门控、本地过期、刷新恢复三段逻辑，为后续运营位/公告推送打好基础设施。

2. **账户安全合规** — [#2570](https://github.com/netease-youdao/LobsterAI/pull/2570) · [#2569](https://github.com/netease-youdao/LobsterAI/pull/2569) · [#2571](https://github.com/netease-youdao/LobsterAI/pull/2571)（@liuzhq1986）
   - 收敛 8.24 分支上手机号脱敏（136\*\*\*\*7834）的合并冲突；
   - 用合成数据替换真实测试手机号，避免敏感数据进入测试集。

3. **登录引导与设置目录** — [#2525](https://github.com/netease-youdao/LobsterAI/pull/2525) · [#2530](https://github.com/netease-youdao/LobsterAI/pull/2530)（@liuzhq1986）
   - 补齐首次登录引导；新增 Plan 模型目录入口，方便后续按订阅计划筛选可用模型。

### 🗑 历史 backlog 归档（[stale] 自动关闭）

- [#1153](https://github.com/netease-youdao/LobsterAI/pull/1153) — 修复 Gemini `/v1` 路径 URL 拼接错误的 PR 被 stale-bot 关闭，但对应 Issue [#1151](https://github.com/netease-youdao/LobsterAI/issues/1151) 仍 OPEN；
- [#1155](https://github.com/netease-youdao/LobsterAI/pull/1155) — 会话内页内搜索（Ctrl+F）功能 PR 被归档；
- [#1156](https://github.com/netease-youdao/LobsterAI/pull/1156) — commandSafety / coworkMemoryJudge Vitest 单测 PR 被归档，对应 Issue [#1154](https://github.com/netease-youdao/LobsterAI/issues/1154) 已 CLOSED。

> ⚠️ 项目整体向前迈了一步，但「安全/记忆单测」与「Gemini URL 兼容」两条技术债被自动归档，需要维护者主动捞回，详见第八节。

---

## 四、社区热点

按评论数排序：

| 排名 | Issue/PR | 标题 | 评论数 | 状态 |
|---|---|---|---|---|
| 🥇 | [#2489](https://github.com/netease-youdao/LobsterAI/issues/2489) | 快更新v4pro！ | 3 | 已关闭 |
| 🥈 | [#2536](https://github.com/netease-youdao/LobsterAI/issues/2536) | 微信群已满人 | 2 | 已关闭 |
| 🥉 | [#1154](https://github.com/netease-youdao/LobsterAI/issues/1154) | 为 commandSafety / coworkMemoryJudge 补充 Vitest 单测 | 2 | 已关闭（stale） |

**诉求分析**：

- **#2489 「快更新 v4pro」**（@nimamasl114114）反映的是「模型时效焦虑」——用户希望尽快引入新版旗舰模型（疑似 v4 Pro 系列）。该 Issue 在 8.1 创建、8.28 才被关闭，期间仅有 3 条评论、0 👍，说明官方可能选择了更缓和的处理方式而非正面答复，社区情绪偏中性。
- **#2536 「WeChat 群已满人」**（@MurrayHubert）则是社区基础设施类诉求，作者期待官方开设第二个群。0 👍 + 仅 2 评论说明并非广泛痛点，但暴露了 LobsterAI 缺乏多群分发机制。

---

## 五、Bug 与稳定性

| 严重度 | Bug | 状态 | 是否有修复 PR |
|---|---|---|---|
| 🔴 高 | [#1151](https://github.com/netease-youdao/LobsterAI/issues/1151) — `buildOpenAIChatCompletionsURL` 处理 Google Gemini `/v1` 结尾 baseURL 时 `slice(0, -3)` 多切了一个字符，生成 `https://generativelanguage.googleapis.comv1beta/openai/chat/completions`（缺少 `/`） | **OPEN** | ❌ 曾有 [#1153](https://github.com/netease-youdao/LobsterAI/pull/1153)，但已被 stale-bot 关闭，**需要重新开启/重提** |
| 🟡 中 | [#1146](https://github.com/netease-youdao/LobsterAI/pull/1146) — 新建重名 Agent 后，当前 Agent 切到新建实例，但未拉取其任务记录；切走再切回才能恢复 | **PR OPEN** | ✅ PR [#1146](https://github.com/netease-youdao/LobsterAI/pull/1146)（@tzhouzhou）仍在评审中 |

**风险提示**：

- 🔴 Gemini URL bug 一旦被外部脚本或 SDK 拼接触发，会直接导致所有 Gemini 请求 404/405，影响整条「自定义模型 + Gemini」链路。Issue 仍 OPEN、修复 PR 被自动归档，**属于高优先级待维护者介入项**。

---

## 六、功能请求与路线图信号

| 类型 | 需求 | 来源 | 落地判断 |
|---|---|---|---|
| 模型时效 | 引入新版 v4 Pro 模型 | [#2489](https://github.com/netease-youdao/LobsterAI/issues/2489) | 🟡 中等概率 — 已合并的 [#2530](https://github.com/netease-youdao/LobsterAI/pull/2530)（Plan 模型目录）为后续引入新模型提供了结构化入口 |
| 编辑器体验 | 会话页内搜索（Ctrl+F / Cmd+F） | 曾在 [#1155](https://github.com/netease-youdao/LobsterAI/pull/1155) 实现，但被 stale-bot 归档 | 🟠 待重新提交 — 该 PR 已实现基于 TreeWalker + Range + CSS Custom Highlight 的精确高亮，技术方案成熟，建议重开 |
| 社区运营 | 增设第二个微信用户群 | [#2536](https://github.com/netease-youdao/LobsterAI/issues/2536) | 🔵 运营侧诉求，与代码无关 |
| 质量保障 | 安全/记忆/URL 模块的单测补齐 | [#1154](https://github.com/netease-youdao/LobsterAI/issues/1154) · [#1149](https://github.com/netease-youdao/LobsterAI/issues/1149) | 🟠 重要 — `commandSafety` 直接关联 `rm -rf`、`git push --force` 等危险命令的拦截，**任何回归都将影响线上安全基线**，建议列入下一迭代 |

---

## 七、用户反馈摘要

基于 Issue 评论提炼：

- **🔴 模型更新焦虑**：「快更新 v4pro」——用户关注旗舰模型版本号节奏，间接反映出 LobsterAI 在模型时效宣发上不够主动，社区缺少 release note / roadmap 透出渠道。
- **🟡 社区容量焦虑**：「微信群已满人」——侧面说明产品在一线用户群中有一定渗透率，但官方未提供第二群/Discord/飞书等替代方案。
- **🟢 工程化诉求被响应**：测试覆盖（[#1154](https://github.com/netease-youdao/LobsterAI/issues/1154) / [#1149](https://github.com/netease-youdao/LobsterAI/issues/1149)）类 Issue 由贡献者主动提单，并配套了实现 PR，说明开发者社区对代码质量有较高期待；只是 stale-bot 的归档策略可能误伤这类「长周期、PR 大」的工程化任务。
- **⚪ 总体情绪**：从评论数与 👍 数看，今日活跃 Issue 多为低互动，**未观察到强烈不满或重大舆情**。

---

## 八、待处理积压

> 维护者建议优先 review 的 4 条 stale/开放项：

| 优先级 | 项目 | 类型 | 风险 |
|---|---|---|---|
| 🔴 P0 | [#1151](https://github.com/netease-youdao/LobsterAI/issues/1151) — Gemini `/v1` URL 拼接 bug | Issue OPEN + 修复 PR 被 stale-bot 关闭 | 影响所有 Gemini 自定义 baseURL 用户；建议在下一个 patch 版本修复 |
| 🟠 P1 | [#1149](https://github.com/netease-youdao/LobsterAI/issues/1149) — `coworkMemoryExtractor` Vitest 单测（35 用例） | Issue OPEN，无对应 PR | 记忆正则改动风险敞口 |
| 🟠 P1 | [#1146](https://github.com/netease-youdao/LobsterAI/pull/1146) — 新建 Agent 后任务记录丢失 | PR OPEN，2026-03 创建至今 | 长期影响 Agent 切换体验 |
| 🟡 P2 | [#1155](https://github.com/netease-youdao/LobsterAI/pull/1155) — 会话内 Ctrl+F 搜索 | PR 被 stale-bot 关闭，方案完备 | 用户高频需求，技术方案成熟，仅需重开 |

---

### 📊 项目健康度速评

- **版本节奏**：🟢 8.28 Release 准时落地，含登录引导、模型目录、Banner 调度等能力补齐。
- **代码治理**：🟡 出现 stale-bot 误伤关键修复（Gemini URL、Ctrl+F、安全单测）的现象，建议配置更精准的 stale 规则（如带 `[security]` / `[bug]` 标签的 Issue 豁免自动关闭）。
- **社区氛围**：🟢 当日无负面舆情，主要诉求集中在「模型更新」与「群扩容」两类运营问题。
- **风险敞口**：🔴 Gemini 兼容性问题目前处于「Issue 仍 OPEN + PR 已归档」的空档期，建议本周内推动合入。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目日报

**日期**：2026-08-29
**数据来源**：[github.com/moltis-org/moltis](https://github.com/moltis-org/moltis)

---

## 1. 今日速览

Moltis 今日活跃度处于低位。**过去 24 小时内仅产生 1 条新 Issue，无任何 PR 活动，无新版本发布**。唯一动态为社区用户提交的一则 Bug 报告（#1246），反映在沙箱环境中添加节点后无法正常运行的问题。整体而言，项目今日处于静默期，无代码合入或发版动作，健康度信号偏弱，但单日数据不具备代表性，建议结合周/月趋势综合判断。

---

## 2. 版本发布

⚠️ **今日无新版本发布**。Release 频道静默，最近一次发版时间不在本次数据范围内。如需了解历史版本，请访问 [Releases 页面](https://github.com/moltis-org/moltis/releases)。

---

## 3. 项目进展

⚠️ **今日无 PR 合并或关闭记录**。代码层面零推进，仓库无代码变更提交至主干或被审核。

- 待合并 PR：0
- 已合并/关闭 PR：0

这意味着产品功能、文档、Bug 修复等任何代码层面的进展在今天均未发生。

---

## 4. 社区热点

今日社区热度集中在唯一一条新 Issue 上：

| 排名 | 编号 | 标题 | 作者 | 评论数 | 👍 |
|------|------|------|------|--------|-----|
| 1 | [#1246](https://github.com/moltis-org/moltis/issues/1246) | [Bug] can't run on sandbox after a node is added | maop | 0 | 0 |

**诉求分析**：该 Issue 反映的是一个真实使用场景中的障碍——用户在沙箱（sandbox）环境中为 Moltis 添加节点后，整个应用无法启动或运行失败。由于评论数与点赞数均为 0，目前尚未形成社区讨论热度，但该问题涉及**核心部署/扩展能力**，如果属实，将影响多节点协同这一关键功能的使用，潜在影响面可能较大，值得维护者优先排查。

---

## 5. Bug 与稳定性

### 🔴 优先级待定 · Issue [#1246](https://github.com/moltis-org/moltis/issues/1246)

- **标题**：[Bug] can't run on sandbox after a node is added
- **状态**：OPEN
- **严重程度**：待维护者评估（从描述看属于功能性阻断，非崩溃）
- **报告者**：[@maop](https://github.com/maop)
- **创建时间**：2026-08-28
- **是否有 Fix PR**：❌ 无
- **复现条件**：在沙箱环境中添加节点后，应用无法运行

**评估**：由于今日无 PR 提交，**该 Bug 尚无修复方案进入流程**。报告者已确认使用最新版 Moltis 并查阅了已有 Bug 列表（符合预检清单要求），提交质量较高。维护者应优先复现并标记影响范围。

> 📌 今日 Bug 报告数：1 | 已有 Fix PR：0 | Bug 修复率：0%

---

## 6. 功能请求与路线图信号

⚠️ **今日无新功能请求提交**。仅有的 1 条 Issue 为 Bug 报告，非功能增强。

由于缺乏 PR 数据，无法通过代码提交方向推测路线图优先级。如需获取近期路线图，建议参考仓库的 [Projects](https://github.com/moltis-org/moltis/projects) 面板或历史 Issue 中的 `enhancement` 标签。

---

## 7. 用户反馈摘要

今日 Issue 评论数为 0，**缺乏可量化的用户互动反馈**。

仅能从 Issue #1246 的描述中提取以下用户痛点信号：

- **场景**：用户在**沙箱环境**（推测为受限/隔离部署环境，如容器或受限主机）下部署 Moltis 并尝试扩展节点能力
- **痛点**：添加节点这一关键操作**导致整个应用不可运行**，说明添加节点的流程可能未充分考虑沙箱环境的权限/网络/资源约束
- **影响**：多节点能力作为 Moltis 的重要功能之一，若在沙箱场景下完全不可用，将限制项目的部署灵活性

**满意度信号**：无正面/负面反馈可提取。

---

## 8. 待处理积压

由于今日数据样本极小，无法对长期积压情况做出完整诊断。以下是基于现有数据的提醒：

| 编号 | 类型 | 标题 | 创建时间 | 状态 |
|------|------|------|----------|------|
| [#1246](https://github.com/moltis-org/moltis/issues/1246) | Bug | can't run on sandbox after a node is added | 2026-08-28 | OPEN（首日） |

⚠️ **维护者关注提醒**：

1. **Issue #1246** 虽为今日新建，但其反映的"沙箱 + 节点扩展"组合场景可能对运维侧用户有较高价值，建议在 48 小时内完成初步响应（至少请求复现步骤或确认能否复现）。
2. **整体 Issue/PR 流量偏低**：建议维护者主动排查是否存在通知/渠道配置问题，或在社区侧加大运营力度，避免问题沉积。

---

## 📊 健康度仪表盘

| 维度 | 今日数值 | 评估 |
|------|---------|------|
| 新 Issue | 1 | 🟡 正常偏低 |
| 关闭 Issue | 0 | 🔴 无响应动作 |
| 新 PR | 0 | 🔴 无提交 |
| 合并 PR | 0 |  无进展 |
| 新 Release | 0 |  无发版 |
| 社区互动 | 评论 0 / 👍 0 |  极低 |

**综合评级**：🟡 **低活跃日** —— 数据样本不足以判定项目健康度下滑，但单日所有核心指标归零需保持警惕。建议结合周维度趋势观察是否为周期性低谷。

---

*本报告由 AI 自动生成，基于 GitHub 公开数据整理。如需更全面的历史趋势分析，请提供更长周期的数据。*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# QwenPaw (CoPaw) 项目日报 — 2026-08-29

> 注：原 CoPaw 仓库近端已迁移/更名为 `agentscope-ai/QwenPaw`，PR/Issue 链接均使用 QwenPaw 命名空间。

---

## 1. 今日速览

过去 24 小时项目处于 **2.2.0 版本发布冲刺期**，节奏密集。Issues 侧 45 条更新（33 条关闭、12 条仍活跃），PR 侧 36 条更新（16 条合并/关闭、20 条仍待审）。一日之内连发 **v2.2.0-beta.2 与 v2.2.0-beta.3** 两个预发布版本，核心变更集中在 MCP 协议栈升级（Streamable-HTTP 双协议客户端、会话恢复）、启动性能改造（Defer 启动架构、A-tier 共享运行时）与 OpenAI 兼容 Provider 模型发现稳定性上。社区最热的议题是 2.2.0 即将推出的 **多租户版 Hub**（Issue #7318，13 条评论），整体健康度处于"功能交付 + Bug 收敛"双线并进的活跃态。

---

## 2. 版本发布

### 🔹 v2.2.0-beta.3 — MCP 协议栈重大升级

**What's Changed**
- `feat(mcp): add Streamable-HTTP dual-protocol client with legacy fallback` — [PR #7330](https://github.com/agentscope-ai/QwenPaw/pull/7330) by @yuanxs21
- `fix(mcp): abort hung session RPCs on teardown and recover stale list_tools` — [PR #7329](https://github.com/agentscope-ai/QwenPaw/pull/7329) by @yuanxs21

**亮点解读**
- `HttpAutoClient` 优先尝试 MCP `2026-07-28` 新协议，发现对端仅支持 2025-03-26 / 2025-06-18 / 2025-11-25 旧握手时自动回退一次，实现**双向兼容**。
- 修复 MCP 服务端重启后 `list_tools`/`call_tool` 永久悬挂的问题：在 teardown 阶段中断残余 RPC，并对陈旧 list_tools 自动恢复。

**破坏性风险**：未公开标记 Breaking。Streamable-HTTP 协议协商会触发 `server/discover` 探测，对极端受限网络环境可能引入额外一次往返。

---

### 🔹 v2.2.0-beta.2 — 启动安全 + 测试覆盖

**What's Changed**
- `fix(workspace): make startup failure cleanup cancellation-safe` — [PR #7194](https://github.com/agentscope-ai/QwenPaw/pull/7194) by @jinliyl
- `test(e2e): boost console coverage with 23 targeted cases + extended assertions` — [PR #7327](https://github.com/agentscope-ai/QwenPaw/pull/7327) by @yutai78786

**版本号**：伴随 [PR #7393](https://github.com/agentscope-ai/QwenPaw/pull/7393) `chore: bump the version to v2.2.0b3` 完成新一轮 bump。beta→stable 之间的升级路径建议用户保持关注 release notes。

**迁移注意事项**
1. 若自定义 MCP transport，需确认是否在 `2025-11-25` 协议降级清单内；
2. 启动失败的清理路径现已 cancel-safe，依赖"启动失败抛异常被忽略"行为的下游脚本需重新验证；
3. e2e 测试增强意味着部分 CI 时长上涨，移植到下游 fork 时需预留更长的 CI 预算。

---

## 3. 项目进展

### ✅ 今日合并/关闭的重要 PR

| PR | 标题 | 贡献者 | 影响 |
|---|---|---|---|
| [#7330](https://github.com/agentscope-ai/QwenPaw/pull/7330) | feat(mcp): Streamable-HTTP dual-protocol client | @yuanxs21 | MCP 兼容 MCP 2025-11-25 ~ 2026-07-28 全系列 |
| [#7329](https://github.com/agentscope-ai/QwenPaw/pull/7329) | fix(mcp): abort hung session RPCs | @yuanxs21 | 修复服务端重启后 list_tools 永久挂死 |
| [#7331](https://github.com/agentscope-ai/QwenPaw/pull/7331) | fix(context): bound oversized single-line tool results | @niceIrene | 单行巨型工具结果不再撑爆上下文，超限内容落盘为 workspace artifact |
| [#7320](https://github.com/agentscope-ai/QwenPaw/pull/7320) | fix(providers): restore reliable model discovery | @wangfei010313 | 自定义 OpenAI 兼容 Provider 自动发现模型闭环打通 |
| [#7386](https://github.com/agentscope-ai/QwenPaw/pull/7386) | fix(providers): migrate discovered model output limits | @zhijianma | 历史快照可继续加载，加密凭证不丢失 |
| [#7388](https://github.com/agentscope-ai/QwenPaw/pull/7388) | fix(acp): max_completion_tokens for explicit runtime | @rayrayraykk | 显式 token 上限在新 SDK 下使用正确参数名 |
| [#7381](https://github.com/agentscope-ai/QwenPaw/pull/7381) | fix(dingtalk): detect stale stream connections | @hongxicheng | DingTalk 睡眠/切网/VPN 切换后流不再"假活" |
| [#7384](https://github.com/agentscope-ai/QwenPaw/pull/7384) | perf(app): shared A-tier deferred startup architecture | @rayrayraykk | 桌面/API shell 与 Python 全量导入解耦 |
| [#7393](https://github.com/agentscope-ai/QwenPaw/pull/7393) | chore: bump to v2.2.0b3 | @cuiyuebing | 发布工程节奏正常 |
| [#7327](https://github.com/agentscope-ai/QwenPaw/pull/7327) | test(e2e): 23 targeted console cases + extended assertions | @yutai78786 | 回归保护网扩面 |

### 综合判断

今天项目在 **MCP 健壮性、Provider 发现、启动性能、Channel 稳定性** 四个方向同时取得实质推进，属于 2.2.0 版本"功能完整度 + 稳定性"双维度的明显跃迁。其中 MCP 协议栈的两条 PR 直接化解了 Issue #6524（`MCP 后端重启后客户端无法自动恢复`）所描述的痛点，可视为该长期 issue 的闭环修复。

---

## 4. 社区热点

### 🔥 最高互动 Issue

#### [#7318](https://github.com/agentscope-ai/QwenPaw/issues/7318) — QwenPaw Hub 多租户版路线图讨论（13 评论 / 1 👍）
- 作者：@rayrayraykk（核心维护者）
- 状态：**OPEN**
- 诉求：2.2.0 将推出多租户版 Hub，社区呼吁"团队化"能力 → 关联社区请求包括 [#2324](https://github.com/agentscope-ai/QwenPaw/issues/2324)（多用户接入与管理员托管 skills）等
- **信号**：这是迄今最明确的产品方向披露，意味着官方正把"个人助手 → 团队协作平台"作为 2.x 系列的战略主线。

#### [#7298](https://github.com/agentscope-ai/QwenPaw/issues/7298) — OpenSSL 3.0.x TLS 握手被运营商 DPI 重置（9 评论）
- 作者：@LUOSENGWA
- 状态：**OPEN**（重要稳定性议题）
- 痛点：桌面端与 Docker image 都带 Python 3.11 时代的 OpenSSL 3.0.x；某些运营商网络会主动 reset TLS 握手。

#### [#1775](https://github.com/agentscope-ai/QwenPaw/issues/1775) — 类似 codex 的 steer mode（2 评论，**仍 OPEN**）
- 诉求：执行中可追加信息纠偏行为，长期功能呼声。

#### [#7379](https://github.com/agentscope-ai/QwenPaw/issues/7379) — 中文长文件名 PDF 处理报错（2 评论，**新开 OPEN**）
- 错误：`No connection adapters were found for 'C:/Users/.../这是中文字符_标题五级_...`——典型的本地路径未 URL-encode 导致 urllib3 解析失败的 bug。

> 注：上述议题的评论数与今日"最热"实际数据均为该日状态；[#5757](https://github.com/agentscope-ai/QwenPaw/issues/5757) 与 [#6314](https://github.com/agentscope-ai/QwenPaw/issues/6314) 评论数高（15/9）但已被关闭。

---

## 5. Bug 与稳定性

按严重程度排序：

### 🔴 高严重度（影响核心路径）

| Issue | 描述 | 已有 fix？ |
|---|---|---|
| [#7298](https://github.com/agentscope-ai/QwenPaw/issues/7298) | 桌面 / Docker 携带 OpenSSL 3.0.x，运营商 DPI 重置 TLS 握手；桌面端无 workaround | ⚠️ 尚无 PR；建议评估 Python 3.12+ 运行时升级 |
| [#6124](https://github.com/agentscope-ai/QwenPaw/issues/6124) | 可编辑安装下 ReMe 后台循环内存泄漏（36 个 loop 占 48 GB+） | 已 CLOSED（关闭但未明示 fix commit） |

### 🟠 中严重度

| Issue | 描述 | 已有 fix？ |
|---|---|---|
| [#6427](https://github.com/agentscope-ai/QwenPaw/issues/6427) | v2.0.0+post.4 WebView2 渲染进程启动 7s 后崩溃（`msedge.dll+0x36c7f6d`） | 已 CLOSED |
| [#6314](https://github.com/agentscope-ai/QwenPaw/issues/6314) | `RemoteProtocolError: peer closed connection without sending complete message body`，QwenPaw 主动 FIN | 已 CLOSED |
| [#6524](https://github.com/agentscope-ai/QwenPaw/issues/6524) | streamable_http MCP 后端重启需手动 `list mcp` 重连 | ✅ 已被 [PR #7330](https://github.com/agentscope-ai/QwenPaw/pull/7330) + [#7329](https://github.com/agentscope-ai/QwenPaw/pull/7329) 实质性修复 |
| [#6512](https://github.com/agentscope-ai/QwenPaw/issues/6512) | `execute_shell_command` 大输出截断 / 触发 Internal Error | 已 CLOSED |
| [#2777](https://github.com/agentscope-ai/QwenPaw/issues/2777) | GPT-5.x 模型列表硬编码 + `max_tokens` 参数错误 | 已 CLOSED |
| [#4217](https://github.com/agentscope-ai/QwenPaw/issues/4217) | 同 cron 表达式 + `share_session=true` 并发任务返回空回复 | 已 CLOSED |
| [#5344](https://github.com/agentscope-ai/QwenPaw/issues/5344) | `/api/console/chat` 返回 200 但 agent busy 时静默丢消息 | 已 CLOSED |
| [#7296](https://github.com/agentscope-ai/QwenPaw/issues/7296) | OpenAI Responses 多轮 400 "Referenced reasoning item not found" | 已 CLOSED |
| [#7288](https://github.com/agentscope-ai/QwenPaw/issues/7288) | 大 MCP 结果在 active turn 中绕过滚动压缩溢出模型上下文 | 已 CLOSED |

### 🟡 低/体验级

| Issue | 描述 | 已有 fix？ |
|---|---|---|
| [#7379](https://github.com/agentscope-ai/QwenPaw/issues/7379) | 中文长文件名 PDF 路径未 URL-encode | ⚠️ OPEN（建议 media loader 加入 `quote()`） |
| [#7305](https://github.com/agentscope-ai/QwenPaw/issues/7305) | 2.1.1b3 自定义 OpenAI 兼容 Provider 模型未自动填充 | ✅ 已被 [PR #7320](https://github.com/agentscope-ai/QwenPaw/pull/7320) 修复 |
| [#6273](https://github.com/agentscope-ai/QwenPaw/issues/6273) | 任务跟踪与同会话并发语义不一致 | 已 CLOSED |
| [#2814](https://github.com/agentscope-ai/QwenPaw/issues/2814) | 多智能体聊天运行中被调用方历史为空 | 已 CLOSED |
| [#5030](https://github.com/agentscope-ai/QwenPaw/issues/5030) | 主动模式下微信频道同一问题双重回复 | 已 CLOSED |

---

## 6. 功能请求与路线图信号

### 高优先级信号（已有跟进 PR）

| 需求 Issue | 跟进 PR | 评估 |
|---|---|---|
| [#7335](https://github.com/agentscope-ai/QwenPaw/issues/7335) Prompt Cache 命中率观测（81% vs OpenCode 96%） | 暂无单独 PR，但已进入讨论 | **成本直接相关**，强烈建议路线图 |
| [#4011](https://github.com/agentscope-ai/QwenPaw/issues/4011) Fallback 模型选项 | [PR #7392](https://github.com/agentscope-ai/QwenPaw/pull/7392) `feat(console): add dedicated fallback model settings page`（OPEN） | **几乎确定随 2.2.0 / 2.3.0 落地** |
| [#5718](https://github.com/agentscope-ai/QwenPaw/issues/5718) 自动切换模型 | 同上（fallback 体系的一部分） | 同上 |
| [#1775](https://github.com/agentscope-ai/QwenPaw/issues/1775) Codex-like steer mode | 暂无 PR | 仍未排期 |
| [#4237](https://github.com/agentscope-ai/QwenPaw/issues/4237) 运行中 shell 命令面板（kill / 延长超时） | 暂无 PR | 体验类，未排期 |
| [#3751](https://github.com/agentscope-ai/QwenPaw/issues/3751) / [#5622](https://github.com/agentscope-ai/QwenPaw/issues/5622) Windows 系统托盘 | 暂无 PR | 已多次被开，新编号仍 0 PR |
| [#3883](https://github.com/agentscope-

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目日报

**报告日期：2026-08-29**

---

## 1. 今日速览

ZeroClaw 仓库今日呈现出"高活跃、高积压、低产出"的状态：过去 24 小时内共有 36 条 Issue 更新（29 条活跃 / 7 条关闭）与 50 条 PR 更新（49 条待合并 / 1 条关闭），**无新版本发布**。讨论焦点集中在 RFC 设计决议、安全策略加固与语音 / Telegram 通道缺陷修复三类议题；其中 P1 级安全与稳定性 Bug 已集中关闭 4 条，但同日又新增至少 5 条 P1/P2 问题。整体来看，项目治理节奏稳健但合流速度偏慢（PR 合入比仅约 1:49），维护者决策队列（#8692）正在持续膨胀。

---

## 2. 版本发布

**今日无新版本发布。** 建议关注下一个候选版本是否会整合已关闭的安全补丁（TTS API Key 标记、Git Shell 策略加固等）以及 Telegram / Deepgram 语言提示修复。

---

## 3. 项目进展

### 已关闭的 Issue（重要修复）

| # | 标题 | 优先级 | 影响 |
|---|------|--------|------|
| [#8654](https://github.com/zeroclaw-labs/zeroclaw/issues/8654) | skill-review fork 越界切片导致 SIGSEGV | P1 | 终结了工具密集型回合后整个 daemon 进程崩溃（exit 139）的严重稳定性缺陷 |
| [#9815](https://github.com/zeroclaw-labs/zeroclaw/issues/9815) | `forbidden_paths` 在 `allowed_roots` 范围内完全失效 | P1 | 修复了安全策略"短路"绕过，是近一个月最重要的纵深防御修复 |
| [#9425](https://github.com/zeroclaw-labs/zeroclaw/issues/9425) | Web 仪表板对运行中 SOP 作业缺少取消入口 | P1 | 补齐 S1 工作流阻塞场景的操作员控制能力 |
| [#10329](https://github.com/zeroclaw-labs/zeroclaw/issues/10329) | 弹性包装层截断"吞掉"循环级上下文溢出恢复 | P2 | 恢复 OpenAI 兼容提供者的正确错误恢复链路 |
| [#10175](https://github.com/zeroclaw-labs/zeroclaw/issues/10175) | Google TTS API Key Header 未标记 sensitive | P2 | 关闭了凭证泄露在请求日志中的高风险通道 |
| [#9711](https://github.com/zeroclaw-labs/zeroclaw/issues/9711) | Arduino 烧录临时目录未在异常路径清理 | P3 | 提升硬件外设路径的清理可靠性 |
| [#10180](https://github.com/zeroclaw-labs/zeroclaw/issues/10180) | ZeroCode 粘贴事件在编辑器空闲态被路由错 | P3 | 修复 TUI 输入所有权相关的小毛病 |

> **整体评估：** 今日在安全与稳定性上"迈了一大步"——两个 P1 安全 / 稳定性问题闭环。但 49 条 PR 仍待合并，合并率仅约 2%，说明项目当前处于**大量设计沉淀、少量代码合流**的阶段，短期内不会有大版本号变化。

---

## 4. 社区热点

按评论数排序，最受关注的 Issue 集中在 RFC 设计议题：

| # | 评论数 | 主题 | 类别 |
|---|--------|------|------|
| [#6850](https://github.com/zeroclaw-labs/zeroclaw/issues/6850) | 21 | **RFC：解耦 Memory 生命周期策略与存储后端** | 架构 |
| [#6954](https://github.com/zeroclaw-labs/zeroclaw/issues/6954) | 16 | **RFC：内部发起的 agent 轮的来源、绑定与回复契约（Rev 2）** | 运行时 |
| [#6996](https://github.com/zeroclaw-labs/zeroclaw/issues/6996) | 15 | **RFC：细粒度沙箱策略（文件系统 + 网络）** | 安全 |
| [#8396](https://github.com/zeroclaw-labs/zeroclaw/issues/8396) | 15 | **RFC：将 Wire Protocol 提升为 Provider 构建一等公民** | 架构 |
| [#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) | 14 | **Tracker：RFC 与设计议题的维护者决策队列** | 治理 |
| [#6909](https://github.com/zeroclaw-labs/zeroclaw/issues/6909) | 12 | **RFC：桌面电脑使用支持（屏幕交互 + 输入控制 Rev 2）** | 安全/工具 |

**诉求分析：** 排名前列的全部是 RFC 提案（不是 Bug），说明 ZeroClaw 社区当前**对架构方向性议题的关注度远高于具体 Bug**。最核心的三条主线是：

1. **安全边界清晰化**（Memory / Sandbox / Computer-use 三条 RFC 同时在讨论）
2. **协议与 Provider 关系重构**（Wire Protocol、Provider Router）
3. **治理流程标准化**（Maintainer Decision Queue 本身就是"RFC 太多无法及时裁决"的副产品）

---

## 5. Bug 与稳定性

按严重程度排列今日新增 / 活跃的 Bug：

### 🔴 P1（高严重性）

| # | 标题 | 状态 | 是否已有 Fix PR |
|---|------|------|------------------|
| [#10427](https://github.com/zeroclaw-labs/zeroclaw/issues/10427) | Advisory scan failed — `chacha20 0.10.0` 被 yanked | OPEN | 需 `cargo update -p chacha20`（无对应 PR 显示） |
| [#10429](https://github.com/zeroclaw-labs/zeroclaw/issues/10429) | Deepgram / OpenAI 转写提供者的 `language` 提示被静默丢弃 | OPEN | ✅ [#10431](https://github.com/zeroclaw-labs/zeroclaw/pull/10431) 已就绪 |
| [#10408](https://github.com/zeroclaw-labs/zeroclaw/issues/10408) | 同一会话并发回合导致重复执行与重复回复 | OPEN | ✅ [#10411](https://github.com/zeroclaw-labs/zeroclaw/pull/10411) 已在审 |

### 🟠 P2（中严重性）

| # | 标题 | 状态 | 是否已有 Fix PR |
|---|------|------|------------------|
| [#10432](https://github.com/zeroclaw-labs/zeroclaw/issues/10432) | ElevenLabs TTS API Key Header 未标记 sensitive | OPEN | 待跟进 |
| [#10438](https://github.com/zeroclaw-labs/zeroclaw/pull/10438) | WhatsApp 设备 key 畸形 SQLite 行触发 panic | OPEN（PR） | ✅ PR 即修复 |
| [#10329](https://github.com/zeroclaw-labs/zeroclaw/issues/10329) | 弹性包装层截断屏蔽 OpenAI 兼容提供者溢出恢复 | CLOSED | ✅ 已修复 |

**总结：** 今日关闭了 3 个 P1/P2 Bug，但同时又新增 3 条同类问题（语言提示、API Key 标记、并发回合），形成"边修边出"的局面。值得欣慰的是 **#10429 与 #10408 已分别有 Fix PR 在审**，预计 1-2 天内可闭环。

---

## 6. 功能请求与路线图信号

今日新增 / 仍开放的功能请求及关联 PR：

| # | 请求 | 关联 PR | 入选下一版本的概率 |
|---|------|---------|---------------------|
| [#10419](https://github.com/zeroclaw-labs/zeroclaw/issues/10419) | `POST /webhook` 支持 SSE 流式 token | 无 | **中高**——是 Hosted Path A 真实痛点，符合 RFC #9535 上下文压缩方向 |
| [#10426](https://github.com/zeroclaw-labs/zeroclaw/issues/10426) | Telegram 通道显示 agent 内部进度 | 无 | **中**——与 #8445 多消息模式互补 |
| [#8445](https://github.com/zeroclaw-labs/zeroclaw/issues/8445) | Telegram 多消息模式（每回合一条） | 无 | **中**——已有共识但实现空缺 |
| [#10336](https://github.com/zeroclaw-labs/zeroclaw/issues/10336) | 内置 AnySearch 作为 web_search 提供者 | 无 | **低**——属于第三方集成，需走 RFC |
| [#10406](https://github.com/zeroclaw-labs/zeroclaw/issues/10406) | 实现已通过的 Gemini 语音对语音 Broker 通道（#8780 子任务） | 多 PR 待合 | **高**——是已批准 RFC 的执行跟进 |
| [#8288](https://github.com/zeroclaw-labs/zeroclaw/issues/8288) | SOP 5/5 milestone：守护进程拥有 SOP 控制平面 | 多 PR 待合 | **高**——路线图级别 |

**路线图信号：** 短期（1-2 周）最可能落地的方向是 **SOP 控制平面收尾 + Telegram 体验增强 + Anthropic/Gemini 提供者加固**；中期（季度级）会围绕 **Memory 生命周期解耦、Computer-use 支持、Web bundle 兼容性** 三大 RFC 推进。

---

## 7. 用户反馈摘要

从 Issues 评论与摘要中提炼的真实用户痛点：

- **🗣️ "Telegram 长任务看起来像挂了"** —— [#10426](https://github.com/zeroclaw-labs/zeroclaw/issues/10426) 用户明确反馈：使用 Telegram 与 agent 交互时，长时间搜索与工具调用过程中对话完全沉默，给人"卡死"的错觉。这指向一个明确的 UX 改进方向：实时进度指示。

- **🎙️ "意大利语语音笔记永远丢失"** —— [#10429](https://github.com/zeroclaw-labs/zeroclaw/issues/10429) 暴露了非英语用户在 Telegram 语音通道上**完全无法使用**的核心缺陷（Deepgram 与 OpenAI 的语言参数被静默丢弃，且只以 INFO 日志记录，导致问题极难发现）。

- **🛑 "我没办法取消正在跑的 SOP"** —— [#9425](https://github.com/zeroclaw-labs/zeroclaw/issues/9425) 用户在 Web 仪表板看到运行中 SOP，但**没有任何 Stop/Cancel 入口**——这是 S1 级工作流阻塞，反映出当前操作员控制力不足。

- **🔐 "TTS 密钥泄漏到日志/Header"** —— [#10175](https://github.com/zeroclaw-labs/zeroclaw/issues/10175) 与 [#10432](https://github.com/zeroclaw-labs/zeroclaw/issues/10432) 揭示了 ElevenLabs 与 Google TTS 的 `xi-api-key` / `x-goog-api-key` 在请求格式化输出时**未标记为 sensitive**，对部署审计与企业合规场景是真实风险。

- **🧠 "策略写错导致我以为在保护的路径其实完全没保护"** —— [#9815](https://github.com/zeroclaw-labs/zeroclaw/issues/9815) 的高优先级来源于：`forbidden_paths` 与 `allowed_roots` 的优先级反转让用户以为生效的限制**完全失效**，是配置语义层面的"沉默失败"。

- **🤖 "Claude/Copilot 协助生成的 RFC 已被维护者接管"** —— 多条 RFC（[#6909](https://github.com/zeroclaw-labs/zeroclaw/issues/6909)、[#7822](https://github.com/zeroclaw-labs/zeroclaw/issues/7822)）显示社区开始接受 AI 辅助起草 RFC 的工作流，但维护者 review 仍是必要环节。

---

## 8. 待处理积压

### 维护者决策队列（#8692）中的高优先级 RFC

以下 RFC 均带 `needs-maintainer-review` 标签，正在等待裁决：

| # | RFC | 创建至今 | 评论 |
|---|-----|---------|------|
| [#6850](https://github.com/zeroclaw-labs/zeroclaw/issues/6850) | Memory 生命周期解耦 | ~3 个月 | 21（最高） |
| [#8396](https://github.com/zeroclaw-labs/zeroclaw/issues/8396) | Wire Protocol 一等公民 | ~2 个月 | 15 |
| [#6996](https://github.com/zeroclaw-labs/zeroclaw/issues/6996) | 细粒度沙箱策略 | ~3 个月 | 15 |
| [#9975](https://github.com/zeroclaw-labs/zeroclaw/issues/9975) | Web bundle/daemon 兼容性 | ~2 周 | 8 |
| [#7822](https://github.com/zeroclaw-labs/zeroclaw/issues/7822) | WASM 插件 Observer 能力 | ~2.5 个月 | 8 |
| [#9330](https://github.com/zeroclaw-labs/zeroclaw/issues/9330) | AI 辅助 PR 预审流水线 | ~1 个月 | 8 |
| [#6909](https://github.com/zeroclaw-labs/zeroclaw/issues/6909) | Computer-use 桌面支持 | ~3 个月 | 12 |

### 长期未合入的大体积 PR（size ≥ XL，创建 ≥ 1 周）

- [#9419](https://github.com/zeroclaw-labs/zeroclaw/pull/9419) — Provider 凭证轮换（XL，~1 个月，标 `do-not-merge`）
- [#9726](https://github.com/zeroclaw-labs/zeroclaw/pull/9726) — TaskRecord 单生命周期所有者（XL，~25 天）
- [#9535](https://github.com/zeroclaw-labs/zeroclaw/pull/9535) — 上下文压缩锚定模型窗口比例（XL，~1 个月）
- [#9678](https://github.com/

</details>

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*