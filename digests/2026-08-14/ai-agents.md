# OpenClaw 生态日报 2026-08-14

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-08-14 01:21 UTC

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
**日期：2026-08-14**

---

## 1. 今日速览

OpenClaw 仓库过去 24 小时保持极高活跃度，**500 条 Issue 与 500 条 PR** 同时刷新，是典型的"质量冲刺"型工作日。社区关注度高度集中在**消息投递可靠性**（session-state / message-loss）与**多 Agent 编排稳定性**两条主线上，多个老 issue 的"沉默失败"模式（如 subagent 投递丢失、Telegram DM 错路由）仍是讨论焦点。无新版本发布，但有 **116 个 PR 已合并/关闭**，且多数由维护者 `steipete` 直接驱动核心修复（CI、网关、OpenAI 兼容层、医生命令等）。**项目健康度评估：良好但承压**——核心修复推进迅速，但开放积压量大、P1 安全/可用性问题占比高。

---

## 2. 版本发布

今日无新版本发布。

---

## 3. 项目进展

过去 24 小时合并/关闭 116 个 PR，覆盖范围非常广，体现多线并进的迭代节奏。**重点合并内容**：

| PR | 主题 | 意义 |
|---|---|---|
| [#123405](https://github.com/openclaw/openclaw/pull/123405) | fix(ci)：隔离 exact-main 测试 shard | 修复 CI 非确定性失败，提升发版门槛 |
| [#123253](https://github.com/openclaw/openclaw/pull/123253) | fix(gateway)：cron 变更绕过 sessions.list 缓存栅栏 | 修复自动化徽章不更新问题 |
| [#123376](https://github.com/openclaw/openclaw/pull/123376) | fix(doctor)：避免 Windows 审计迁移 fsync 失败 | 跨平台稳健性 |
| [#123398](https://github.com/openclaw/openclaw/pull/123398) | fix(ai)：OpenAI WebSocket 转弯在压缩拒绝后恢复 | 修复原生 OpenAI 用户转弯反复失败 |
| [#123189](https://github.com/openclaw/openclaw/pull/123189) | fix(gateway)：聊天启动投影中恢复嵌入式 channel 运行 | Control UI 可见性提升 |
| [#123411](https://github.com/openclaw/openclaw/pull/123411) | fix(agents)：resize 日志字节 delta 符号修正 | 可观察性微修复 |
| [#123250](https://github.com/openclaw/openclaw/pull/123250) | fix(ui)：避免 catalog session 重复渲染 | 侧边栏 UX |
| [#123386](https://github.com/openclaw/openclaw/pull/123386) | fix(ui)：选择器在视口边缘附近保持可见 | Control UI 交互细节 |
| [#123406](https://github.com/openclaw/openclaw/pull/123406) | improve(ci)：缩短 GitHub 全矩阵 wall time | 从 7.9 分钟压缩，节省 CI 预算 |
| [#123408](https://github.com/openclaw/openclaw/pull/123408) | fix(mobile)：embedded Control UI 跟随深色/浅色外观 | iOS/Android WebView 适配 |
| [#123098](https://github.com/openclaw/openclaw/pull/123098) | fix(discord)：将音频转录标记为不可信 | **安全**——缓解 Discord 语音提示词注入 |
| [#82950](https://github.com/openclaw/openclaw/pull/82950) | fix(security)：防止不安全 approval 模式挂起命令授权 | **安全**——拒绝灾难性回溯 regex |

**整体判断**：今天的合并动作集中于"硬骨头"——CI 稳定性、AI 兼容性、Web 端 UX、安全加固。**项目正在系统性地把 open issue 推到"可证明"状态**（多个 PR 标签从 "waiting on author" 进入 "ready for maintainer look"）。

---

## 4. 社区热点

按评论数与互动量排序，今日最热的议题几乎全部围绕**消息投递的"沉默失败"**：

| 排名 | Issue / PR | 评论 | 主题 | 链接 |
|---|---|---|---|---|
| 1 | [OPEN] Silent reply failures still recurring after #116277 closed | 92 | 老 issue 复发，沉默回复失败 | [#121058](https://github.com/openclaw/openclaw/issues/121058) |
| 2 | [OPEN] Memory Trust Tagging by Source (P2) | 48 | 内存投毒防护 | [#7707](https://github.com/openclaw/openclaw/issues/7707) |
| 3 | [OPEN] Text between tool calls leaks to messaging channels (P1) | 48 | 工具调用间文本泄漏到 Slack/iMessage | [#25592](https://github.com/openclaw/openclaw/issues/25592) |
| 4 | [OPEN] Subagent completion silently lost (P1) | 27 | 子代理结果丢失、无重试 | [#44925](https://github.com/openclaw/openclaw/issues/44925) |
| 5 | [OPEN] Cron agent turns stall on DeepSeek (P1) | 16 | `[cron:` 前缀在 DeepSeek 边缘被降权 | [#121953](https://github.com/openclaw/openclaw/issues/121953) |

**诉求分析**：
- **可靠性焦虑**：前 4 条全部是 P1/P2，且都有"silent failure"字样——用户最大的痛点不是功能缺失，而是**无法察觉的失败**（消息/会话悄悄丢失）。
- **跨链路信任**：#7707（Memory Trust Tagging）和 #25592（tool 间文本泄漏）共同指向"内容来源可信度"问题，用户希望系统能区分用户输入、网页抓取、第三方 skill 等来源的信任级别。
- **模型供应商特异性**：#121953 揭示 OpenClaw 与上游模型 API（DeepSeek edge）耦合的隐性假设，社区正成为上游行为变化的"前线传感器"。

---

## 5. Bug 与稳定性

按严重程度排序的近期报告（重点为 P1"diamond lobster"等级）：

### 🔴 Diamond Lobster 级（最严重）
- **[#25592](https://github.com/openclaw/openclaw/issues/25592)** 工具调用间文本泄漏到消息频道（P1，session-state + security 双重影响）
- **[#72015](https://github.com/openclaw/openclaw/issues/72015)** active-memory 阻塞回复 + QMD 启动压垮多 agent 网关（crash-loop 影响）
- **[#41165](https://github.com/openclaw/openclaw/issues/41165)** Telegram DM 仍误路由到 `agent:main:main`（P1，已有 linked-pr-open）
- **[#85714](https://github.com/openclaw/openclaw/issues/85714)** Agent 忘记调用 delivery tool 时消息丢弃（**已关闭** ✅）
- **[#40611](https://github.com/openclaw/openclaw/issues/40611)** Heartbeat 修复（#39182）导致 Telegram 在活跃会话期被阻塞
- **[#54488](https://github.com/openclaw/openclaw/issues/54488)** Session lane 饥饿，followup drain 独占 20-30 分钟
- **[#44502](https://github.com/openclaw/openclaw/issues/44502)** Discord 路由 / mention-gating 回归（P2 diamond lobster）
- **[#95553](https://github.com/openclaw/openclaw/issues/95553)** 预算触发 compaction 硬限 60s，忽略 `compaction.timeoutSeconds`
- **[#77733](https://github.com/openclaw/openclaw/issues/77733)** `/new` `/reset` 不再触发 persona 问候（5.x 回归）
- **[#78493](https://github.com/openclaw/openclaw/issues/78493)** `sudo openclaw update` 后混合所有权，doctor 覆盖 config
- **[#91456](https://github.com/openclaw/openclaw/issues/91456)** Telegram DM lane 发送超时后仍守卫（**已关闭** ✅）
- **[#42276](https://github.com/openclaw/openclaw/issues/42276)** Reasoning 流（"思考过程"展示缺失）
- **[#115421](https://github.com/openclaw/openclaw/issues/115421)** 模式降级恢复误清空 state DB（cron 任务丢失）
- **[#79165](https://github.com/openclaw/openclaw/issues/79165)** 网关崩溃循环缺少分级恢复阶梯
- **[#121605](https://github.com/openclaw/openclaw/issues/121605)** 模型回退后回复不投递（**已关闭** ✅）

### 🦪 Silver Shellfish 级
- **[#44925](https://github.com/openclaw/openclaw/issues/44925)** 子代理完成静默丢失（27 评论）
- **[#43367](https://github.com/openclaw/openclaw/issues/43367)** 多 agent 并发 add/config 覆盖、session-lock 失败
- **[#67777](https://github.com/openclaw/openclaw/issues/67777)** 子代理 announce 超时/排水/孤儿剪枝丢失
- **[#47975](https://github.com/openclaw/openclaw/issues/47975)** 子代理完成后会话残留，主会话失响应
- **[#91363](https://github.com/openclaw/openclaw/issues/91363)** 独立 cron 一律 "LLM request failed"
- **[#43374](https://github.com/openclaw/openclaw/issues/43374)** 多 agent 全部 LLM 调用同时超时
- **[#97983](https://github.com/openclaw/openclaw/issues/97983)** iOS/WebChat 消息附加到转录但不触发回复
- **[#92433](https://github.com/openclaw/openclaw/issues/92433)** 子代理 announce 转向到已结束的请求者 run

### 🦐 Gold Shrimp 级
- **[#111498](https://github.com/openclaw/openclaw/issues/111498)** Anthropic 认证恢复后主 agent 仍被工作区状态迁移阻塞
- **[#89278](https://github.com/openclaw/openclaw/issues/89278)** Codex OAuth 刷新成功但 cron/heartbeat 10s 超时
- **[#97616](https://github.com/openclaw/openclaw/issues/97616)** 钩子/工具子进程泄漏（僵尸积累）
- **[#114154](https://github.com/openclaw/openclaw/issues/114154)** bundle-mcp 通过 policy 但永不 bundle（零工具调用）
- **[#107814](https://github.com/openclaw/openclaw/issues/107814)** `gpt-5.3-codex-spark` 必填工具调用发出空 arguments

### 🐚 Platinum Hermit / 长期问题
- **[#43747](https://github.com/openclaw/openclaw/issues/43747)** 记忆管理"混乱"——多人/多 backend 行为不一致
- **[#95759](https://github.com/openclaw/openclaw/issues/95759)** ACP `sessions_spawn` opencode 转录 0 字节
- **[#44431](https://github.com/openclaw/openclaw/issues/44431)** 浏览器工具 7 项改进（**已关闭** ✅）

**修复 PR 已就位**：
- #25592、#41165、#89278、#121605、#40611、#107814 等已分别有 `linked-pr-open` 或已关闭
- 安全相关的 [#123098](https://github.com/openclaw/openclaw/pull/123098)（Discord 音频不信任标记）和 [#82950](https://github.com/openclaw/openclaw/pull/82950)（regex 灾难性回溯）今日提交

---

## 6. 功能请求与路线图信号

**已合并到分支或正在推进的需求**：

- **[#45758](https://github.com/openclaw/openclaw/issues/45758) YAML 配置格式支持** (P3, 8 评论) —— 长期呼声，但优先级低、近期无 PR。
- **[#16555](https://github.com/openclaw/openclaw/issues/16555) 投递队列 TTL/Expiry** (P1, 6 评论) —— 与今日合并的 [#123410](https://github.com/openclaw/openclaw/pull/123410)（"bound failed-row retention and recovery"）方向一致，**很可能纳入下一稳定版**。
- **[#45771](https://github.com/openclaw/openclaw/issues/45771) 内建感知速率的速率限制** (P2, 7 评论) —— 与 [#120491](https://github.com/openclaw/openclaw/pull/120491)（per-turn per-target send budget guard）方向一致，已有大规模 PR 在评审。
- **[#45508](https://github.com/openclaw/openclaw/issues/45508) 自托管 STT/TTS 支持** (P2, 7 评论) —— webchat 路线图相关。
- **[#7707](https://github.com/openclaw/openclaw/issues/7707) 内存按来源信任标签** (P2, 48 评论) —— 与 Discord 音频 PR（#123098）一脉相承，但全面落地的复杂度高。
- **[#9016](https://github.com/openclaw/openclaw/issues/9016) OpenRouter 用量成本暴露给 Agent** (P2, 7 评论) —— 增量改动，可能落地下次发布。
- **[#45501](https://github.com/openclaw/openclaw/issues/45501) `session.resetPrompt` 可配置启动消息** (P2, 6 评论) —— UX 改进，已有少量关注。
- **[#51028](https://github.com/openclaw/openclaw/issues/51028) 会话面板按"有意义活动"排序** (P3, 6 评论) —— sessions.list 缓存栅栏相关 PR 已在路上（#123253）。
- **[#46058](https://github.com/openclaw/openclaw/issues/46058) Android Chat-first 客户端** (P3, 6 评论) —— 上游讨论阶段。
- **[#41366](https://github.com/openclaw/openclaw/issues/41366) 持久化自然语言规则学习** (P3, 7 评论) —— 长期方向。

**判断**：与**消息投递可靠性 + 内存/信任模型**相关的需求，最有可能进入下一稳定版；UI/UX 类（YAML、resetPrompt、sessions 排序）在排队中。

---

## 7. 用户反馈摘要

从 Issues 摘要与社区讨论中提炼的真实痛点：

### 痛点集中点

1. **"沉默失败"是头号噩梦**
   - 用户反复报告"消息发出去了没收到"、"cron 静默卡住"、"子代理结果无回音"。#44925、#67777、#91363、#97983 等都是这个家族。
   - 用户明确希望 **failed delivery 至少有可观察信号**（重试/通知/UI 标记）。

2. **多 Agent 编排"几乎不可用"**
   - #43367、#43374、#54488 一致指出：当 ≥4 个 agent 并发时，会话锁、配置覆盖、API 全量超时等问题叠加。
   - 这是 OpenClaw 2026.x 系列的**结构性瓶颈**。

3. **升级/迁移路径令人担忧**
   - #78493（sudo update 后混合所有权）、#115421（schema 降级清空 DB）、#42273（4GB 安装 backup 卡死）显示：**升级风险高、回滚困难**。
   - #123073（dev-channel EUNSUPPORTEDPROTOCOL）反映 pnpm/npm workspace 协议差异带来的部署摩擦。

4. **跨通道一致性问题**
   - Discord 音频被注入不可信内容（#123098 在补）、Telegram DM 错路由（#41165）、iOS/WebChat 消息无回复（#97983）——不同通道的稳健度参差不齐。

5. **满意的方向**
   - 浏览器工具改进（#44431）已被关闭，9+ 邮件提供商自动化场景"反馈良好"。
   - 用户对 QR 配置（#114173、#119342、#119343 系统化推进）、Control UI 主题/选择器（#123386、#123408）等 UI 体验改进**表达明确期待**。
   - ACP / opencode / Codex 集成的子代理场景，用户表达**真实生产使用意愿**，但需要稳定性保障。

### 用户画像
**OpenClaw 用户画像**：开发者/小型团队自托管运营者，使用 Telegram/Discord/Slack/iMessage/iOS WebChat 多个通道进行 agent 编排；对可靠性、可观察性、跨平台一致性要求高；对模型供应商（OpenAI/Anthropic/Codex/DeepSeek）行为变化高度敏感；倾向主动提 bug 报告与重现步骤。

---

## 8. 待处理积压

**长期未响应或维护者关注标记（needs-maintainer-review / needs-product-decision）的高优先级 Issue**，需要维护者主动介入：

### 钻石级积压（needs-product-decision & needs-maintainer-review）
- **[#7707](https://github.com/openclaw/openclaw/issues/7707)** Memory Trust Tagging（48 评论，自 2026-02-03 持续讨论，需产品决策）
- **[#25592](https://github.com/openclaw/openclaw/issues/25592)** 工具调用间文本泄漏（48 评论，需产品+安全双审）
- **[#43747](https://github.com/openclaw/openclaw/issues/43747)** 记忆管理混乱（11 评论，回归问题）
- **[#44431](https://github.com/openclaw/openclaw/issues/44431)** ~~浏览器工具 7 项改进~~（**已关闭** ✅）
- **[#72015](https://github.com/openclaw/openclaw/issues/72015)** active-memory / QMD 启动重载网关
- **[#67777](https://github.com/openclaw/openclaw/issues/67777)** 子代理 announce 丢失
- **[#43367](https://github.com/openclaw/openclaw/issues/43367)** 多 agent 编排不稳定
- **[#43374](https://github.com/openclaw/openclaw/issues/43374)** 多 agent 全 LLM 同时超时

### 需"needs-info" 的等待用户反馈
- **[#

---

## 横向生态对比

# AI 智能体开源生态横向对比分析报告
**报告周期：2026-08-14 · 样本：13 个项目**

---

## 1. 生态全景

本期覆盖 13 个项目，呈现典型的**三梯队分层**态势：以 OpenClaw、ZeroClaw、Hermes Agent、CoPaw、IronClaw 为代表的**高活跃核心层**（单日 ≥50 Issue/PR 更新），以 NanoBot、NanoClaw、LobsterAI 为代表的**中等活跃修复层**，以及 PicoClaw、Moltis 与四个完全沉寂的项目（NullClaw、TinyClaw、ZeptoClaw）。**整体主线**从"功能堆叠"转向"可靠性与可观察性"：投递沉默失败、多 Agent 编排、内存信任模型、安全加固成为跨项目的共同焦虑；同时**两个新版本（CoPaw v2.1.0、IronClaw v1.2.0）**证明头部项目仍在按节奏稳定迭代，未出现整体性衰退迹象。

---

## 2. 各项目活跃度对比

| 项目 | Issues | PRs | 已合并/关闭 | 当日 Release | 健康度 | 当前阶段 |
|---|---|---|---|---|---|---|
| **OpenClaw**（参照） | ~500 | ~500 | 116 | 无 | 🟡 良好但承压 | 质量冲刺 / 多线并进 |
| **ZeroClaw** | ~50 | ~50 | 10（3 高优） | 无 | 🟢 活跃（v0.9.0 关键节点） | 安全硬化 + RFC 收口 |
| **Hermes Agent** | ~50 | ~50 | 1（49 待审） | **v0.20.1** | 🟡 高活跃但 review 拥堵 | 稳定消化 + 桌面端回归 |
| **CoPaw (QwenPaw)** | 42（25 新/活） | 50（19 关闭） | 19 | **v2.1.0 + beta.5** | 🟢 活跃健康 | 功能扩张 + 重大 Shell 落地 |
| **IronClaw** | ~50 | ~50 | 多项含 v1.2.0 | **v1.2.0** | 🟢 优秀 | 架构演进期（pluggable loops epic） |
| **NanoClaw** | 2 | 19 | 13 | **v2.2.0** | 🟢 优秀 | 主线推进 + 供应链安全 |
| **NanoBot** | 12 | 31 | 9 | 无 | 🟢 良好 | issue→fix 闭环高 |
| **LobsterAI** | 1 | 11 | 6 | 无 | 🟢 良好 | UI 重构窗口期 |
| **PicoClaw** | 3 | 9 | 3（全部 stale dependabot） | 无 | 🟠 维护停滞 | Bot 主导，实质推进为 0 |
| **Moltis** | 1 | 4 | 0 | 无 | 🟡 中等 | 评审尚未启动 |
| **NullClaw / TinyClaw / ZeptoClaw** | 0 | 0 | 0 | 无 | ⚫ 沉寂 | 无活动 |

> **数据观察**：活跃度与"是否进入版本节点"强相关；当日 release 项目（CoPaw、IronClaw、NanoClaw、Hermes）普遍处于 Issue/PR 高吞吐状态，说明版本冲刺驱动协作密度。

---

## 3. OpenClaw 在生态中的定位

OpenClaw 以 **500 Issue + 500 PR** 的单日吞吐量稳居生态头部，约等于第二梯队（ZeroClaw/Hermes/IronClaw/CoPaw）总和的 2.5 倍，是其他同类项目的 5–10 倍量级。其差异化定位体现在三个维度：

| 维度 | OpenClaw 优势 | 与同类差异 |
|---|---|---|
| **通道覆盖广度** | Telegram / Discord / Slack / iMessage / iOS WebChat / Mobile WebView 多端一致 | 比 Hermes（WeChat/QQ/Telegram）更国际化；比 CoPaw（OneBot/Telegram）更多通道 |
| **多 Agent 编排成熟度** | 已具备 subagent / cron / heartbeat / lane / session-lock 等完整原语，但稳定性承压 | IronClaw 走"kernel + 可插拔 harness"路线；CoPaw 的 MissionGate 偏服务端硬限制；OpenClaw 是客户端最重 |
| **生态规模与维护者密度** | 116 PR/日合并、`steipete` 单人驱动核心修复 | PicoClaw / Moltis 维护者密度接近 1 人；ZeroClaw 由 @Audacity88 串联 RFC 决策 |

**技术路线差异**：OpenClaw 是"**消息通道优先 + 多 Agent 编排**"路线（gateway-centric），IronClaw 走"**WASM 内核 + 能力模型**"路线，CoPaw 走"**OS Shell + 应用目录**"路线，NanoClaw 走"**插件工厂 + 供应链签名**"路线——四者代表四种对"个人 AI 助手"的根本性理解差异。

---

## 4. 共同关注的技术方向

### 4.1 投递与调度的"沉默失败"
- **OpenClaw**：`#44925`（subagent 静默丢失）、`#54488`（session lane 饥饿）、`#121953`（DeepSeek cron 降权）、`#25592`（工具间文本泄漏）
- **NanoBot**：`#5373`（cron 单次持久化失败永久死亡）、`#5377/#5378`（session 归档与整合数据丢失）
- **ZeroClaw**：`#9929`（无头 SOP 子轮次不持久化）
- **共性诉求**：失败可见性、错误冒泡、重试/通知/UI 标记机制

### 4.2 安全加固与供应链
- **OpenClaw**：`#123098`（Discord 音频不信任标记）、`#82950`（regex 灾难性回溯）
- **NanoBot**：`#5306`（`exec.allowPatterns` shell 链绕过）
- **NanoClaw**：`#3229`（Telegram pairing 改 CSPRNG）+ **`verify-agent-image` 全链路（#3158/#3238/#3240/#3241）**
- **IronClaw**：`#7581`（OAuth 后 MCP 状态刷新）
- **ZeroClaw**：`#9969`（网关 symlink/路径穿越）、`#9968`（provider 凭据完整性）
- **共性诉求**：执行类能力的最小授权、不可信输入隔离、容器/二进制签名验证

### 4.3 内存模型与信任源
- **OpenClaw**：`#7707`（按来源信任标签，48 评论）
- **ZeroClaw**：`#6850`（解耦 memory lifecycle 与 storage backends）
- **CoPaw**：ReMe 长期记忆仪表盘 + `dream` 文档与实现不一致修复
- **NanoBot**：Dream 周期性记忆整合的 `model_override`
- **共性诉求**：用户输入 vs 网页抓取 vs 第三方 skill 的可信度区分；memory trait 与策略层分离

### 4.4 MCP 生态扩展
- **NanoBot**：`#5251`（MCP Apps Host 元数据保留）、`#5298`（工具 schema 字节预算）
- **CoPaw**：内置 Channel 拆分为可选依赖（`#6387`）
- **IronClaw**：`#7581`（OAuth 流程后 MCP 工具仍显示 setup_needed）
- **ZeroClaw**：`#9945`（browser tool 暴露 16/100+ 命令）

### 4.5 跨平台稳健性
- **Hermes Agent**：Windows 桌面重启杀进程、ZIP 回退丢失、GBK 崩溃、venv PYTHONPATH 冲突——**P2 级别 5 条无 PR**
- **NanoBot**：`#5382`（Windows JsonlSessionStore `WinError 5`）
- **OpenClaw**：`#123376`（Windows 审计迁移 fsync 失败）
- **共性痛点**：Windows 是普遍短板，macOS 在 Moltis 也存在 bash 3.2 数组展开问题（`#1194`）

### 4.6 Web UI / UX 一致性
- **OpenClaw**：`#123386`（选择器视口边缘可见）、`#123408`（移动端深色/浅色外观）
- **NanoBot**：`#5384`（恢复 transcript-only 发现）、`#5358`（@mention 多会话协作）
- **LobsterAI**：三连 UI 重构（`#2486/#2487/#2488`）合并 Skills/MCP/Cowork 视觉规范
- **共性方向**：从"功能陈列"转向"内联交互一致性"

---

## 5. 差异化定位分析

| 项目 | 核心定位 | 目标用户 | 架构特征 |
|---|---|---|---|
| **OpenClaw** | 多通道消息智能体编排 | 自托管开发者 / 小型团队 | Gateway + Session Lane + Plugin |
| **Hermes Agent** | 桌面端多 provider AI 助手 | Windows/macOS 终端用户 | Desktop + 多 provider（WeChat/QQ/Telegram） |
| **CoPaw / QwenPaw** | 个人 AI OS + 应用市场 | 国内订阅用户 / 企业版 | QwenPaw OS Shell + App Center + ReMe |
| **IronClaw** | WASM 内核 + 可插拔 harness | 沙箱集成方 / 安全敏感用户 | `near:agent@0.4.0` 沙箱 + Capability Socket |
| **NanoClaw** | 插件式 agent 工厂 | 自托管运维 / DevOps | Agent Plugins 1.0.0 + 签名镜像分发 |
| **ZeroClaw** | 安全硬化型 Rust 网关 | 安全敏感自托管用户 | Rust + RAII + per-execution confirmation tier |
| **NanoBot** | 研究导向 / Dream 记忆整合 | 研究型开发者 | Session store + Dream 周期任务 |
| **LobsterAI** | 中文协作 + 企业版 | 国内企业团队 | Cowork + Evergreen 签到 |
| **PicoClaw** | 轻量 Web UI agent | 极简自托管用户 | Go + Web UI（性能欠优化） |
| **Moltis** | 数据连接器抽象 | 跨数据源集成方 | Provider-neutral 持久化层 + CalDAV |

> **关键差异点**：OpenClaw 与 Hermes 都做"通道智能体"，但 OpenClaw 重在**编排深度**，Hermes 重在**桌面整合**；CoPaw 与 OpenClaw 都做"个人助手"，但 CoPaw 选择 **OS Shell 抽象**而非**通道抽象**；IronClaw 与 ZeroClaw 都强调"安全"，但 IronClaw 走**WASM 沙箱内核**路线，ZeroClaw 走**网关层硬限制**路线。

---

## 6. 社区热度与成熟度分层

### 🚀 第一梯队 — 快速迭代 / 新版本冲刺
- **CoPaw**：v2.1.0 一次性纳入 Shell、PawPort、多项目目录、ReMe 仪表盘、Provider 模板五大特性
- **Iron

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目日报 · 2026-08-14

> 数据来源：[HKUDS/nanobot](https://github.com/HKUDS/nanobot) GitHub 仓库近 24 小时动态

---

## 1. 今日速览

NanoBot 今日保持**中高强度的开发活跃度**，过去 24 小时共触发 12 条 Issue 更新和 31 条 PR 更新，节奏明显高于常规维护日。最值得关注的是围绕**会话持久化、调度器稳定性、WebUI 协作体验**的多条 Bug 报告均已"报告即配套 PR"，呈现良好的 issue→fix 闭环；与此同时，**Telegram 贴纸、Matrix SAS 验证、MCP Apps、WebUI 本地化**等长期跟进的需求正在集中推进。唯一一条已关闭的 Issue 是与 `exec.allowPatterns` shell 链绕过相关的**安全公告**，社区与维护者响应及时。整体而言，项目健康度处于良好区间，建议关注 cron 调度器永久死亡的隐性故障类问题。

---

## 2. 版本发布

无新版本发布。

---

## 3. 项目进展

今日已合并/关闭的 PR 共 9 条（含 6 条显示在前列），主要推进方向：

### 已关闭的修复 PR（含合并或弃用）

- **[#5384](https://github.com/HKUDS/nanobot/pull/5384) `fix(webui): restore transcript-only session history`** — 恢复 WebUI 侧栏对纯 transcript 历史会话的发现能力，保持 canonical JSONL 的权威性。
- **[#5381](https://github.com/HKUDS/nanobot/pull/5381) `feat(webui): add native workspace folder picker`** — 为本地 WebUI 引入 macOS / Windows / Linux 原生文件夹选择器，仅在 loopback 绑定时暴露。注：该 PR 状态显示 CLOSED，可能被合并或弃用，需关注后续是否有替代实现。
- **[#5374](https://github.com/HKUDS/nanobot/pull/5374) / [#5375](https://github.com/HKUDS/nanobot/pull/5375) `fix(cron): keep scheduler alive when job-store persistence fails`** — 与 [#5376](https://github.com/HKUDS/nanobot/pull/5376) 同一问题的不同实现版本，三条同时活跃，**很可能在合并主版本前清理重复 PR**。
- **[#4556](https://github.com/HKUDS/nanobot/pull/4556) `feat(dream): wire up model_override for Dream consolidation`** — 修复 [#4029](https://github.com/HKUDS/nanobot/issues/4029)，在 Dream 周期性记忆整合时应用 `model_override`。
- **[#4550](https://github.com/HKUDS/nanobot/pull/4550) `fix(cron): use per-run session key to prevent context sharing across cron runs`** — 修复 [#4082](https://github.com/HKUDS/nanobot/issues/4082)，为每次 cron 运行附加 `run_id`，杜绝跨次执行时的上下文污染。

### 进展评估
- **稳定性维度**：cron 与 session 两类核心路径同时获得修复合并，项目整体可靠性向前迈进一大步。
- **特性维度**：heartbeat 的 `model_override` / `isolated_session`（[#4549](https://github.com/HKUDS/nanobot/pull/4549)、[#4551](https://github.com/HKUDS/nanobot/pull/4551)）虽尚未合并，但已是 P2 长期路线图上的成熟设计。
- **注意**：cron 修复出现了 3 条重复 PR（#5374 / #5375 / #5376），维护者可能需要协调合并主线，避免重复合并。

---

## 4. 社区热点

由于今日 Issues/PR 评论数普遍为 0–1，"热点"主要由**话题重要性和关联 PR 数**驱动，而非评论热度：

| 排名 | 主题 | 关联链接 | 关注理由 |
|---|---|---|---|
| 1 | **Cron 调度器永久死亡** | [#5373](https://github.com/HKUDS/nanobot/issues/5373) ↔ [#5376](https://github.com/HKUDS/nanobot/pull/5376) / [#5374](https://github.com/HKUDS/nanobot/pull/5374) / [#5375](https://github.com/HKUDS/nanobot/pull/5375) | 单次持久化失败导致定时任务静默瘫痪，影响所有依赖 cron 的场景；已有 3 个 PR 竞争修复。 |
| 2 | **`exec.allowPatterns` Shell 链绕过（已闭环）** | [#5306](https://github.com/HKUDS/nanobot/issues/5306) | **安全公告**，今日关闭，说明补丁已分发。属于 24 小时内最高优先级响应。 |
| 3 | **Telegram 贴纸 & Agent 主动表态** | [#5289](https://github.com/HKUDS/nanobot/issues/5289) ↔ [#5387](https://github.com/HKUDS/nanobot/pull/5387) | 长期缺失能力，PR 已就绪。 |
| 4 | **Matrix 设备 "Untrusted" + SAS 验证闭环** | [#4841](https://github.com/HKUDS/nanobot/issues/4841) ↔ [#5385](https://github.com/HKUDS/nanobot/pull/5385) | 跨签名缺失导致 Element 显示警告，PR 提供完整 SAS 流程。 |
| 5 | **MCP Apps Host + MCP 工具 schema 预算** | [#5251](https://github.com/HKUDS/nanobot/issues/5251) ↔ [#5386](https://github.com/HKUDS/nanobot/pull/5386)；[#5298](https://github.com/HKUDS/nanobot/issues/5298) ↔ [#5388](https://github.com/HKUDS/nanobot/pull/5388) | MCP 生态拓展的两条腿，前者面向富 UI 结果，后者控制大工具集的上下文成本。 |
| 6 | **WebUI 多会话协作（@mention）** | [#5358](https://github.com/HKUDS/nanobot/pull/5358) | 引入稳定 `@name` 与同侪会话提及，是 WebUI 协作模型的一次较大升级。 |

---

## 5. Bug 与稳定性

按严重程度排序：

### 🔴 P1 / 高严重度（隐性故障 / 数据一致性）

1. **[#5373](https://github.com/HKUDS/nanobot/issues/5373) Cron scheduler dies permanently after a single job-store persistence failure**
   - 现象：磁盘满 / 权限变更 / 文件锁等单次异常即可让 `_on_timer` 静默退出，且 `_arm_timer()` 位于 try/finally 之外，下次定时不再触发。
   - 影响：所有 cron 任务静默停止，无错误冒泡。
   - 修复：✅ 已有 PR（[#5374](https://github.com/HKUDS/nanobot/pull/5374) / [#5375](https://github.com/HKUDS/nanobot/pull/5375) / [#5376](https://github.com/HKUDS/nanobot/pull/5376)，3 选 1）。

2. **[#5378](https://github.com/HKUDS/nanobot/issues/5378) Bug: file-cap archive failure mutates the session before persistence**
   - 现象：`Session.enforce_file_cap()` 在归档前就修改了内存中的 Session，若归档回调抛错，溢出的消息已丢失，后续 save 无法恢复。
   - 修复：✅ 已有 PR [#5380](https://github.com/HKUDS/nanobot/pull/5380)（snapshot + restore 模式）。

3. **[#5377](https://github.com/HKUDS/nanobot/issues/5377) Bug: consolidation truncates archive input but advances past the full message batch**
   - 现象：被 token 预算截断的消息仍被标记为已整合，造成原始上下文不可逆丢失。
   - 修复：✅ 已有 PR [#5379](https://github.com/HKUDS/nanobot/pull/5379)（lossless 分块）。

### 🟠 P2 / 中严重度（运行崩溃 / 平台兼容）

4. **[#5382](https://github.com/HKUDS/nanobot/pull/5382) `JsonlSessionStore.save()` 在 Windows 上偶发 `[WinError 5]`**
   - 现象：`os.replace()` 在 Windows 上被临时占用导致整个 gateway 崩溃，已在 2026-08-11 一天内复现两次。
   - 修复：✅ PR [#5382](https://github.com/HKUDS/nanobot/pull/5382) 提出 retry 策略。

5. **[#4841](https://github.com/HKUDS/nanobot/issues/4841) Matrix bot device 显示为 "Untrusted"**
   - 现象：现代 Element 客户端使用 cross-signing，nanobot 缺少交叉签名路径。
   - 修复：✅ 已有 PR [#5385](https://github.com/HKUDS/nanobot/pull/5385) 补齐 SAS request 流程。

6. **[#5383](https://github.com/HKUDS/nanobot/pull/5383) / [#5357](https://github.com/HKUDS/nanobot/pull/5357)** 会话并发与删除竞态：分别通过 sessions 目录锁与"删除前 cancel turn"解决。

7. **[#5368](https://github.com/HKUDS/nanobot/issues/5368) WebUI: copy / fork actions 在 turn 仍在生成时显示**
   - 现象：与"Working for…"状态冲突，造成完成信号混乱。
   - 修复：⏳ 暂无 PR。

### 🟢 P3 / 体验问题

- **[#5366](https://github.com/HKUDS/nanobot/issues/5366) WebUI Agent 活动文案未本地化** — 待 PR。
- **[#5349](https://github.com/HKUDS/nanobot/pull/5349) 每日 5 小时窗口内确定性的设置测试失败（时区错配）** — PR 已开。

---

## 6. 功能请求与路线图信号

按"已有配套 PR、可能进入下一版本"的概率排序：

| 概率 | 需求 | Issue | 配套 PR |
|---|---|---|---|
| 🟢 高 | Telegram 贴纸双向支持 | [#5289](https://github.com/HKUDS/nanobot/issues/5289) | [#5387](https://github.com/HKUDS/nanobot/pull/5387) |
| 🟢 高 | MCP Apps 结果元数据保留 | [#5251](https://github.com/HKUDS/nanobot/issues/5251) | [#5386](https://github.com/HKUDS/nanobot/pull/5386) |
| 🟢 高 | MCP 工具 schema 字节预算（默认关闭，opt-in） | [#5298](https://github.com/HKUDS/nanobot/issues/5298) | [#5388](https://github.com/HKUDS/nanobot/pull/5388) |
| 🟢 高 | WebUI 会话 @mention 协作 | — | [#5358](https://github.com/HKUDS/nanobot/pull/5358) |
| 🟡 中 | WebUI 原生文件夹选择器 | — | [#5381](https://github.com/HKUDS/nanobot/pull/5381)（状态 CLOSED，需澄清） |
| 🟡 中 | heartbeat `model_override` | — | [#4549](https://github.com/HKUDS/nanobot/pull/4549) |
| 🟡 中 | heartbeat `isolated_session` | — | [#4551](https://github.com/HKUDS/nanobot/pull/4551) |
| 🟡 中 | QwenCloud provider 与 DashScope 并行 | [#5350](https://github.com/HKUDS/nanobot/issues/5350) | 待 PR |
| 🔴 低 / 商业推广 | **ViBo 持久记忆系统** | [#5372](https://github.com/HKUDS/nanobot/issues/5372) | 无；典型"免费 2 天试用"营销型 Issue，需维护者明确表态以减少未来同类噪声。 |

---

## 7. 用户反馈摘要

由于今日 Issues 评论普遍较少（多数为 0–1 条），可提取的真实用户痛点主要来自 Issue 正文与 PR 描述：

- **静默故障焦虑**：多名贡献者对 cron / session save 路径上的"无错误冒泡"表示担忧，希望引入失败可见性与回滚机制（[#5373](https://github.com/HKUDS/nanobot/issues/5373)、[#5378](https://github.com/HKUDS/nanobot/issues/5378)、[#5377](https://github.com/HKUDS/nanobot/issues/5377)）。
- **大工具集的上下文成本**：随着 MCP 工具集增长，用户对"模型可见的 schema 预算"提出明确诉求（[#5298](https://github.com/HKUDS/nanobot/issues/5298)）。
- **端到端加密信任度**：Matrix 用户在 Element 中看到"Untrusted"提示后，没有干净的清警告路径，影响生产化部署（[#4841](https://github.com/HKUDS/nanobot/issues/4841)）。
- **WebUI 国际化一致性**：用户已选择界面语言，但 Agent 活动文案仍为英文，体验不一致（[#5366](https://github.com/HKUDS/nanobot/issues/5366)）。
- **Windows 兼容性**：`heartbeat` cron 在 Windows 上连续触发 `[WinError 5]` 导致整个 gateway 崩溃（[#5382](https://github.com/HKUDS/nanobot/pull/5382)）。
- **正面信号**：现有 issue→fix 配套比例较高，开发者社区响应及时；多会话协作（[#5358](https://github.com/HKUDS/nanobot/pull/5358)）展示 WebUI 正从"单人工具"过渡到"协作工具"。
- **噪声关注**：商业化产品营销型 Issue（[#5372](https://github.com/HKUDS/nanobot/issues/5372)）可能挤压正常反馈带宽，建议维护者提前声明此类 Issue 的处理政策。

---

## 8. 待处理积压

以下 Issues / PRs 已存在较长时间、影响较大，建议维护者优先关注：

| 类型 | 编号 | 标题 | 创建时间 | 备注 |
|---|---|---|---|---|
| 长期 Issue | [#4841](https://github.com/HKUDS/nanobot/issues/4841) | Matrix bot device 显示 Untrusted | 2026-07-07 | 已有修复 PR [#5385](https://github.com/HKUDS/nanobot/pull/5385)，待 review 合并。 |
| 长期 PR | [#4549](https://github.com/HKUDS/nanobot/pull/4549) | heartbeat `model_override` | 2026-06-26 | P2，距今 ~7 周，标记 conflict。 |
| 长期 PR | [#4551](https://github.com/HKUDS/nanobot/pull/4551)

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目日报
**日期：2026-08-14**

---

## 1. 今日速览

Hermes Agent 在 v0.20.0 发布十天后于昨日推出 **v0.20.1 补丁版本**，一次性合并了过去 656 个 PR，标志着项目正在进入稳定消化阶段。今日社区活跃度极高：50 条 Issue 更新、50 条 PR 刷新、49 个待合并 PR，显示团队与贡献者处于密集的修复-合并循环中。从内容分布看，**Windows 桌面端的回归问题**集中爆发（P1/P2 级别共 5 条），是当前最值得维护团队关注的风险面；模型提供方适配（DeepSeek/Ollama-Kimi/OpenCode Go）与 TUI/会话状态稳健性也形成次要热点。整体而言，项目开发节奏健康，但短期需警惕 v0.20.x 系列在桌面端的稳定性债。

---

## 2. 版本发布

### v0.20.1 (2026.8.13) — Patch Release

这是 v0.20.0 发布后的首个补丁标签，将过去 656 个 PR 打包为稳定标签，主要面向 Docker 镜像、托管部署以及使用 `latest` tag 安装的下游用户。

**变更特征：**
- **类型**：补丁（Patch），无新增 API 表面
- **范围**：覆盖 v0.20.0 → v0.20.1 之间的全部 656 次合并
- **破坏性变更**：未在发布说明中标记
- **迁移注意事项**：从 v0.20.0 升级基本无感知；建议依赖 latest tag 的生产部署统一切换到此固定版本，避免再次随增量修复漂移

⚠️ **值得注意**：尽管今日仍有大量与 v0.20.0 相关的桌面端/TUI 回归报告（如 [Issue #83683](https://github.com/NousResearch/hermes-agent/issues/83683)、[#69592](https://github.com/NousResearch/hermes-agent/issues/69592)），说明 656 PR 的快速合入在带来功能密度的同时也引入了若干稳定性问题，建议 Windows 桌面端用户暂留 v0.19.x 待 v0.20.2 再升级。

---

## 3. 项目进展

今日合并的 PR 极少（50 条中仅 1 条已合并/关闭），但**待合并 PR 池处于历史高位**，反映出明显的 review 拥堵：

- **[PR #85737 (P0) — 修复 provider-identity 子串误匹配**（[链接](https://github.com/NousResearch/hermes-agent/pull/85737)）作者 teknium1：OpenRouter 等代理 URL 误路由凭据/缓存问题，今日热度最高的 P0 PR。
- **[PR #85714 (P2) — 后台 review 算用量归属父会话**（[链接](https://github.com/NousResearch/hermes-agent/pull/85714)）作者 kubesajan：解决后台 memory/skill 审查 fork 导致计费与用量不归属父会话的问题。
- **[PR #85739 — OpenCode Go RegionError 时自动轮换凭据池**（[链接](https://github.com/NousResearch/hermes-agent/pull/85739)）作者 Duskript：辅助凭据池新增 region_error 识别与轮换。
- **[PR #85735 — 识别微信 iLink `ret=-2` 为 stale-context_token**（[链接](https://github.com/NousResearch/hermes-agent/pull/85735)）作者 cnxhwy：解决 cron 静默投递失败（关闭 #82502）。
- **[PR #85732 — Ollama-cloud Kimi 模型固定 top_p=0.95**（[链接](https://github.com/NousResearch/hermes-agent/pull/85732)）作者 chadspersonalbot-design：跨 profile/legacy/auxiliary 路径统一覆盖。
- **[PR #85734 / #85736 — HUD 调整大小适配与合成器焦点保留**（[链接](https://github.com/NousResearch/hermes-agent/pull/85734)、[#85736](https://github.com/NousResearch/hermes-agent/pull/85736)）作者 LemonSchneid：修复 Windows HUD 的两个交互回归。
- **[PR #85733 — Photon iMessage 默认回退纯文本**（[链接](https://github.com/NousResearch/hermes-agent/pull/85733)）作者 coldcrippy：避免 Markdown 语法污染 iMessage。
- **[PR #85713 — 恢复提交 relay flush_async 与 title_generator 重试级联修复**（[链接](https://github.com/NousResearch/hermes-agent/pull/85713)）作者 moken627-hub：从 5ac crash-audit 中找回两个已 review 批准的提交（cherry-pick）。

**项目整体推进评估**：跨 8 个组件（gateway/agent/desktop/plugins/tools/providers/portal/cron）的并行修复说明项目活跃面广，但 49:1 的待合并:已合并比表明 review 流水线已是主要瓶颈。

---

## 4. 社区热点

按评论数排序的讨论焦点：

| 排名 | Issue / 主题 | 评论数 | 关注度 | 链接 |
|---|---|---|---|---|
| 1 | [Skills index watchdog 标记为 degraded（29.8h 过期）](https://github.com/NousResearch/hermes-agent/issues/66616) | 25 | 自动化巡检持续告警 | [#66616](https://github.com/NousResearch/hermes-agent/issues/66616) |
| 2 | [Windows 桌面重启杀掉 gateway 不重启](https://github.com/NousResearch/hermes-agent/issues/83683) | 20 | v0.20.0 回归，影响即时通讯通道 | [#83683](https://github.com/NousResearch/hermes-agent/issues/83683) |
| 3 | [Webhook Revolution 元议题（EPIC 5×2×3 修复运动）](https://github.com/NousResearch/hermes-agent/issues/84834) | 16 | 图形化门控的端到端 webhook 整顿 | [#84834](https://github.com/NousResearch/hermes-agent/issues/84834) |
| 4 | [TUI /sessions 与 /models 覆盖层在 ambient widget 下不可见](https://github.com/NousResearch/hermes-agent/issues/69592) | 12 | Day 13 仍未修复的核心工作流断裂 | [#69592](https://github.com/NousResearch/hermes-agent/issues/69592) |
| 5 | [DeepSeek 上 auxiliary title_generation HTTP 400](https://github.com/NousResearch/hermes-agent/issues/83390) | 9（👍2） | 提供方适配覆盖不足 | [#83390](https://github.com/NousResearch/hermes-agent/issues/83390) |
| 6 | [Signal 适配器补全原生 quote/reply/edit/撤回](https://github.com/NousResearch/hermes-agent/issues/39043) | 7（👍3） | 长期悬而未决的 feature | [#39043](https://github.com/NousResearch/hermes-agent/issues/39043) |
| 7 | [终端 update 后 macOS /Applications/Hermes.app 仍然陈旧](https://github.com/NousResearch/hermes-agent/issues/52339) | 6 | macOS 双脑状态 | [#52339](https://github.com/NousResearch/hermes-agent/issues/52339) |
| 8 | [browser_exec 因 pydantic_core ModuleNotFoundError 崩溃](https://github.com/NousResearch/hermes-agent/issues/83427) | 5 | Desktop 端 venv 路径冲突 | [#83427](https://github.com/NousResearch/hermes-agent/issues/83427) |

**诉求分析**：Windows 与 TUI 的回归问题贡献了将近一半的讨论热度，反映 v0.20.0 在桌面端的发布质量信号偏弱；Webhook Revolution 元议题代表一次集中、有结构的工程化整改倡议，而非单一 bug。

---

## 5. Bug 与稳定性

按严重程度排列：

### P1（影响核心功能，多为回归）

1. **[#83683](https://github.com/NousResearch/hermes-agent/issues/83683)** — Windows 桌面重启杀掉 WeChat/QQ/Telegram 网关且不再拉起（20 评论，回归）
2. **[#69592](https://github.com/NousResearch/hermes-agent/issues/69592)** — `/sessions` `/models` TUI 覆盖层在 ambient widget 场景下不可见（12 评论，第 13 天）
3. **[#62142](https://github.com/NousResearch/hermes-agent/issues/62142)** — verification-stop 会丢弃已流式输出的最终答案与 cron 报告（影响持久化与消息投递）

### P2（功能降级或可靠性问题）

4. **[#85215](https://github.com/NousResearch/hermes-agent/issues/85215)** — Cron 任务锁死到失效模型，无视 fallback_providers，连日 HTTP 402
5. **[#52339](https://github.com/NousResearch/hermes-agent/issues/52339)** — `hermes update` 后 macOS Hermes.app 与本地构建分裂
6. **[#83427](https://github.com/NousResearch/hermes-agent/issues/83427)** — `browser_exec` 因 venv PYTHONPATH 冲突崩溃
7. **[#83846](https://github.com/NousResearch/hermes-agent/issues/83846)** — Windows 更新 ZIP 回退删除已构建的桌面端，后续更新误报"已最新"
8. **[#76267](https://github.com/NousResearch/hermes-agent/issues/76267)** — Windows sync_back 静默丢失远端文件改动
9. **[#85406](https://github.com/NousResearch/hermes-agent/issues/85406)** — Windows + Docker terminal 模式下 vision_analyze 路径被错误转义
10. **[#83851](https://github.com/NousResearch/hermes-agent/issues/83851)** — 中文 Windows GBK 编码崩溃 gateway
11. **[#85614](https://github.com/NousResearch/hermes-agent/issues/85614)** — Slack bot 间授权两层身份不一致，存在安全/消息投递风险
12. **[#85693](https://github.com/NousResearch/hermes-agent/issues/85693)** — `computer_use` 工具仅声明在 CLI platform，Desktop 不可用
13. **[#85622](https://github.com/NousResearch/hermes-agent/issues/85622)** — 外部 memory provider（both 模式）抑制内置 MEMORY.md/USER.md 注入，违反文档"附加而非替换"契约
14. **[#83390](https://github.com/NousResearch/hermes-agent/issues/83390)** — DeepSeek auxiliary title_generation 失败
15. **[#84058](https://github.com/NousResearch/hermes-agent/issues/84058)** — Desktop composer caret 在工具调用开始时丢失（无声焦点重置）

### P3（边缘场景或低频）

- **[#85709](https://github.com/NousResearch/hermes-agent/issues/85709)** — session repointing 误改 updated_at，suspend_recently_active 误判为可恢复
- **[#85731](https://github.com/NousResearch/hermes-agent/issues/85731)** — Desktop profile rail 在切换远程后端时消失

### 已有 fix PR 的条目

- [#85614 Slack 双身份授权](https://github.com/NousResearch/hermes-agent/issues/85614) → 暂无对应 PR
- [#85215 cron 模型锁死](https://github.com/NousResearch/hermes-agent/issues/85215) → 暂无对应 PR
- [#83427 browser_exec](https://github.com/NousResearch/hermes-agent/issues/83427) → 暂无对应 PR
- [#85406 vision_analyze Windows](https://github.com/NousResearch/hermes-agent/issues/85406) → 暂无对应 PR
- [#83851 GBK 崩溃](https://github.com/NousResearch/hermes-agent/issues/83851) → 暂无对应 PR

**预警**：5 条 P2 级别 Windows/桌面端 bug 尚无对应修复 PR 关联，建议维护者尽快映射 owner。

---

## 6. 功能请求与路线图信号

1. **[#4438 Rich Spreadsheet Skill (xlsx/csv)](https://github.com/NousResearch/hermes-agent/issues/4438)**（8 评论）—— 自 2026-04 开启仍开放，反映社区对结构化数据处理能力有持续需求；很可能进入下一里程碑。
2. **[#39043 Signal 适配器补全](https://github.com/NousResearch/hermes-agent/issues/39043)**（7 评论，👍3）—— Signal 高级能力（quote/edit/撤回/已读回执）的呼声居高不下，且 `needs-decision` 标签表明已接近设计定型。
3. **[#33049 凭据池耗尽 TTL 可配置化](https://github.com/NousResearch/hermes-agent/issues/33043)** —— 从硬编码常量转为配置项的需求明确，社区已有 1 个 👍。
4. **[#85418 本地优先、零依赖 Memory Provider 提案](https://github.com/NousResearch/hermes-agent/issues/85418)** —— 第三方 2ndNatureAI 提交，欲与 Honcho 对标构建基于 Hermes 的记忆层，可能成为 plugins/memory 的新选项。
5. **[#84834 Webhook Revolution 元议题](https://github.com/NousResearch/hermes-agent/issues/84834)** —— 5×2×3 图门控修复运动的 EPIC，已有 [PR #80533 webhook completion scripts](https://github.com/NousResearch/hermes-agent/pull/80533) 跟进。
6. **[#84317 Telegram 冷启动关闭 drop_pending_updates](https://github.com/NousResearch/hermes-agent/issues/84317)** —— 丢弃队列的策略需要更细粒度开关。
7. **[#66163 Slack slash 命令命名空间前缀](https://github.com/NousResearch/hermes-agent/pull/66163)**（PR 待合并）—— 多 app 共存场景的关键能力。
8. **[#59168 每 profile kanban 指导覆盖](https://github.com/NousResearch/hermes-agent/pull/59168)**（PR 待合并）—— 与 prompt-cache 稳定性兼容的 profile 隔离设计。
9. **[#85051 HUD/terminal 动作新增 i18n 翻译](https://github.com/NousResearch/hermes-agent/pull/85051)**（PR 待合并）—— 国际化持续推进。
10. **[#82801 SOUL.md 与内置 personality 系统并存机制](https://github.com/NousResearch/hermes-agent/issues/82801)** —— 身份系统叠加的开放设计问题，需要团队决策。

---

## 7. 用户反馈摘要

**核心痛点：**

- **桌面端的脆弱性**：多位用户在 Windows/macOS 上反馈 v0.20.0 后的桌面体验倒退明显——重启杀进程、PATH 冲突、中文编码崩溃、ZIP 回退丢失应用——"split-brain 状态"成高频描述词（[#52339](https://github.com/NousResearch/hermes-agent/issues/52339)、[#83851](https://github.com/NousResearch/hermes-agent/issues/83851)、[#83846](https://github.com/NousResearch/hermes-agent/issues/83846)）。
- **TUI 关键工作流断裂**：13 天前就报告的 `/sessions` `/models` 不可见问题仍未修复，用户感到受困于"core TUI workflows are dead"（[#69592](https://github.com/NousResearch/her

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目日报

**日期：2026-08-14**
**数据周期：过去 24 小时**

---

## 1. 今日速览

PicoClaw 项目在过去 24 小时内整体活跃度处于**中低水位**，呈现典型的「依赖例行更新 + 零星社区反馈」状态。共发生 3 条新/活跃 Issue（全部仍处于 Open 状态，无关单关闭）与 9 条 PR 更新（其中 6 条待合并、3 条已关闭）。值得注意的是，今日关闭的 3 条 PR 全部为被新版覆盖的 **stale dependabot 依赖升级**，并非实质性的功能或修复进展。项目当日**无新版本发布**，社区贡献以 Bot 自动维护为主，人工功能推进近乎停滞。整体健康度评估：**常规维护状态**，无重大突破亦无风险事件。

---

## 2. 版本发布

⚠️ 今日**无新版本发布**，无需迁移说明。最新正式版本仍为此前发布的 0.3.1（参见 Issue #3281 中的环境信息）。

---

## 3. 项目进展

今日无实质性的功能合并或 Bug 修复被合入主线。**今日关闭的 3 条 PR 全部为「过期被取代」状态**：

| PR | 标题 | 关闭原因 |
|---|---|---|
| [#3304](https://github.com/sipeed/picoclaw/pull/3304) | build(deps): bump anthropic-sdk-go 1.55.1 → 1.61.0 | **stale**，已被 [#3334](https://github.com/sipeed/picoclaw/pull/3334) (1.55.1 → 1.62.0) 取代 |
| [#3305](https://github.com/sipeed/picoclaw/pull/3305) | build(deps): bump bedrockruntime 1.53.3 → 1.56.2 | **stale**，已被 [#3336](https://github.com/sipeed/picoclaw/pull/3336) (1.53.3 → 1.57.1) 取代 |
| [#3306](https://github.com/sipeed/picoclaw/pull/3306) | build(deps): bump aws-sdk-go-v2/config 1.32.25 → 1.32.33 | **stale**，已被 [#3335](https://github.com/sipeed/picoclaw/pull/3335) (1.32.25 → 1.32.35) 取代 |

**评估：项目今日在「实质代码进展」维度上推进为零**。所有被合并的工作都属于依赖地板管理，不涉及任何用户可见的功能增强或问题修复。建议维护者审阅 [#3318](https://github.com/sipeed/picoclaw/pull/3318)（手工修复 pnpm-lock.yaml），这是当日唯一具有实际意义的非依赖 PR，目前处于待合并且被标记 [stale] 的状态。

---

## 4. 社区热点

**今日唯一具有实质性讨论热度的话题是 Web UI 性能问题**：

🔥 **Issue #3281** —— [[BUG] Web UI chat input is very laggy when history has a little bit long](https://github.com/sipeed/picoclaw/issues/3281)
- 作者：xpader | 评论数：**5 条**（当日最高）| 👍：1
- 创建于 2026-07-21（已存在 ~3 周），最近活跃 2026-08-13
- 环境：PicoClaw 0.3.1 / Go 1.25.11 / PicoClaw Web

**诉求分析**：用户反映在 Web UI 会话中，一旦聊天历史稍长，输入框输入即出现明显卡顿。这是影响**日常使用体验**的硬伤，且发生在主交互界面上，对留存影响较大。在当日的低活跃背景下，这条 Issue 凭借 5 条评论成为社区反馈的「孤峰」。

其余 2 条新开 Issue（[#3330](https://github.com/sipeed/picoclaw/issues/3330)、[#3331](https://github.com/sipeed/picoclaw/issues/3331)）目前均为 0 评论、0 👍，尚未形成社区讨论。

---

## 5. Bug 与稳定性

**仅 1 条 Bug 报告**，按严重程度排列如下：

### 🟠 中等严重 — Web UI 输入卡顿
- **Issue**：[#3281](https://github.com/sipeed/picoclaw/issues/3281) — Web UI 输入框在历史较长时严重卡顿
- **影响范围**：使用 PicoClaw Web 通道的所有终端用户
- **状态**：**已 Open ~24 天**，尚未指派修复
- **是否有修复 PR**：❌ 无
- **复现路径明确**：用户给出了具体的三步复现步骤（打开会话 → 累积聊天历史 → 在输入框中持续输入），降低了排查难度
- **修复建议**：维护者应优先排查前端是否在每次 `onChange` 时同步重建整个历史列表组件，建议引入虚拟滚动或 `useMemo`/记忆化优化

> 今日无崩溃、安全或回归类 Bug 报告，整体稳定性问题较少。

---

## 6. 功能请求与路线图信号

**今日共收到 2 条新功能请求**，均处于早期阶段（0 评论、0 👍）：

### 📌 请求 1：动态模型覆盖（Delegate/Spawn/Subagent 工具）
- **Issue**：[#3330](https://github.com/sipeed/picoclaw/issues/3330) — Support dynamic model override in delegate/spawn/subagent tools
- 作者：v2up-32mb | 创建：2026-08-13
- **核心诉求**：当前 `delegate` / `spawn` / `subagent` 三个工具的模型是**静态决定**的（分别来自目标 agent 配置 / 主 agent 的 `defaultModel` / ...），用户无法在调用时按需指定模型。
- **路线图信号**：⭐⭐⭐⭐ — 这是一个面向**多 Agent 工作流高级用户**的能力增强，描述清晰、场景具体，且与当前 PicoClaw 强调的 Agent 编排方向高度一致，**有较高概率被纳入下个版本规划**。
- **建议维护者动作**：标记 `enhancement` label，转交 Agent/Runtime 模块负责人评估。

### 📌 请求 2：ASR 引擎灵活化
- **Issue**：[#3331](https://github.com/sipeed/picoclaw/issues/3331)
- 作者：stanislavvv | 创建：2026-08-13
- **核心诉求**：当前 `/audio/transcriptions` 端点仅支持 `*-whisper-*` 模型，作者认为该模型过旧且慢，希望通过新增 `whisper-transcription: true` 标志位，允许强制使用 whisper 路径或使用任意具备 ASR 能力的模型。
- **路线图信号**：⭐⭐⭐ — 这是一个**生态拓展型**的请求，目标是让 ASR 不再被锁定在 whisper 系列。需求合理性较高但方案细节（命名 `whisper-transcription` 是否准确）需要讨论。
- **建议维护者动作**：邀请作者参与方案设计讨论，评估对现有 ASR 抽象层的破坏性。

---

## 7. 用户反馈摘要

由于今日仅 #3281 存在活跃讨论，反馈样本有限：

### 来自 Issue [#3281](https://github.com/sipeed/picoclaw/issues/3281) 的真实痛点
- **场景**：用户在 Web UI 中进行多轮对话，随着消息历史增长，输入响应出现肉眼可感的延迟
- **用户情绪**：偏负面（已等待 ~3 周未见修复进展）
- **未表态项**：满意度、横向对比、其他场景表现 — 由于评论细节未在数据中暴露，无法进一步提炼

### 整体观察
- **样本稀少**：当日无新评论的 Issue 多达 2 条，说明社区反馈通路虽有但未激活
- **依赖噪音**：Bot PR 占当日 PR 总量的 **78%**（7/9），可能挤压维护者对实质 PR（#3318）的注意力
- **缺乏回应**：5 条 Open 的非依赖 PR（含 [#3318](https://github.com/sipeed/picoclaw/pull/3318)）和 3 条 Open 的 Issue 均无维护者明确回应信号

---

## 8. 待处理积压 ⚠️

以下条目需要维护者优先关注，避免进入更深的「无人响应区」：

| 类型 | 编号 | 标题 | 开放天数 | 风险信号 |
|---|---|---|---|---|
| 🐛 Bug | [#3281](https://github.com/sipeed/picoclaw/issues/3281) | Web UI chat input laggy | **~24 天** | 5 条评论无人回应，影响主交互体验 |
| 🔧 PR | [#3318](https://github.com/sipeed/picoclaw/pull/3318) | fix(web): repair unparseable pnpm-lock.yaml | **9 天** | 已被标记 [stale]，但属于阻塞前端构建的修复 |
| ✨ Feature | [#3330](https://github.com/sipeed/picoclaw/issues/3330) | Dynamic model override | 1 天 | 描述完整，建议尽快 label 化 |
| ✨ Feature | [#3331](https://github.com/sipeed/picoclaw/issues/3331) | 灵活化 ASR 引擎 | 1 天 | 需要方案讨论 |

### 维护者行动建议
1. **优先响应 #3281**：影响面最大、已积累 5 条评论，需要给出官方排查时间线
2. **尽快合并 #3318**：修复前端 lockfile 解析错误，长期停留在 Open+stale 状态不利于贡献者积极性
3. **审阅 dependabot PR 簇**：#3332/#3333/#3334/#3335/#3336 五个依赖升级 PR 同期出现，建议批量处理以减少 review 负担
4. **建立 Issue 应答 SLA**：建议对超过 14 天的 Open Issue 设置自动 ping，避免类似 #3281 的「长期无人响应」现象

---

## 📊 当日数据快照

```
Issues  新开: 2   活跃: 1   关闭: 0
PRs     新开: 6   待合并: 6   已关闭: 3   合并(实质): 0
Releases: 0
人工贡献 PR: 1（#3318，待合并）
Bot 贡献 PR: 8（占 PR 总数 89%）
```

---

*报告生成时间：2026-08-14 | 数据源：PicoClaw GitHub Repository (sipeed/picoclaw)*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目日报

**日期：2026-08-14 ｜ 数据来源：[qwibitai/nanoclaw](https://github.com/qwibitai/nanoclaw)**

---

## 1. 今日速览

NanoClaw 项目今日进入**集中治理+主线推进**双轨节奏：核心团队（gavrielc、amit-shafnir、glifocat）在同一天集中关闭了 13 个 PR，其中包括 v2.2.0 的正式发布（[#3237](https://github.com/qwibitai/nanoclaw/pull/3237)）和 **Agent Templates → Agent Plugins 1.0.0** 的架构迁移（[#3220](https://github.com/qwibitai/nanoclaw/pull/3220)）。与此同时，一条独立的 **agent image 供应链签名/验证管道**几乎从零被搭建完成（5 个 PR 在 24 小时内串行落地）。Issues 端仍有 2 条在进行中（1 新开、1 关闭），社区评论量较低，整体呈典型的"硬核 PR 推进周"模式。

---

## 2. 版本发布 v2.2.0

**链接：[#3237](https://github.com/qwibitai/nanoclaw/pull/3237)（commit: `chore(release): v2.2.0`）**

### 核心特性
- **Stamped plugins in-place update**：执行 `ncl groups create --template <ref>` 时，若目标 group 已携带同源 plugin，命令**就地更新**而非创建副本 agent；dry-run 模式可打印 plugin 自有面（plugin 文件、skills、MCP 配置等）的变更计划。([详情](https://github.com/qwibitai/nanoclaw/releases/tag/v2.2.0))
- **Agent Plugins 1.0.0 目录布局**：templates 升级为 plugins 引擎级抽象，统一 plugin 文件、skills、MCP 配置三件套的发布格式（[#3220](https://github.com/qwibitai/nanoclaw/pull/3220)）。

### 伴随修复 / 强化
- Setup wizard 的模板流程与 first-agent stamping（[#2909](https://github.com/qwibitai/nanoclaw/pull/2909)）
- Codex / OpenCode provider writer 支持 plugin MCP `cwd`（[#3231](https://github.com/qwibitai/nanoclaw/pull/3231)）
- 数据库迁移 021：回填现有 wirings 缺失的 channel destinations（[#3145](https://github.com/qwibitai/nanoclaw/pull/3145)）
- McpServerConfig 新增 `per-server disabledTools`（[#2624](https://github.com/qwibitai/nanoclaw/pull/2624)）

### ⚠️ 破坏性变更与迁移建议
| 项目 | 说明 |
|---|---|
| 模板目录结构变更 | `#3220` 是 `feat!`，模板已从旧 templates 模型迁移到 Agent Plugins 1.0.0；自定义模板需重新打包为 plugin 目录 |
| 内部 stamp hardening | symlink/cap/secrets 处理路径强化，已存 group 会被新流程覆盖式校验 |
| 数据库 schema | 引入 migration 021，升级前请确保 `ncl migrate` 在 pre-upgrade 钩子中跑通 |

> **建议**：`--template <ref>` 现已具备幂等性（in-place update），运维脚本可以放心多次执行；同时如果仍按旧 "create-as-new" 行为构建管线，需要按 dry-run 输出重新对账。

---

## 3. 项目进展

今日共 **19 条 PR 流转（6 OPEN / 13 CLOSED）**，主线推进集中度极高：

### 🟢 核心引擎 — Agent Plugins 1.0.0 体系
- [[CLOSED] #3220](https://github.com/qwibitai/nanoclaw/pull/3220) **feat!: agent templates become Agent Plugins 1.0.0 directories** — 引擎级格式迁移，stamp-time 的 symlink/caps/secret 硬化。
- [[CLOSED] #2909](https://github.com/qwibitai/nanoclaw/pull/2909) feat(setup): template setup flow in the wizard and first-agent stamping — 配套 setup 端落地。
- [[CLOSED] #3231](https://github.com/qwibitai/nanoclaw/pull/3231) feat(codex,opencode): honor plugin MCP cwd in both provider config writers — provider 层支持 plugin MCP working directory。
- [[OPEN] #3230](https://github.com/qwibitai/nanoclaw/pull/3230) fix(skills): stop removal docs pointing at retired data/env mirror — 文档清理（plugin 资源已不再指向已退役的镜像）。

> 整个 stack 意味着 NanoClaw 已具备"插件式 agent 工厂"框架，对标 Claude Code 插件生态的语言学路径，但走的是 dir-based 自描述。

### 🔐 供应链安全 — verify-agent-image 链路全线打通（gavrielc 单人贡献 5 个 PR）
- [[CLOSED] #3158](https://github.com/qwibitai/nanoclaw/pull/3158) verify-agent-image: pin publisher identity, check attestations per arch — 修复核心 bug：原配置读取了不存在的 env 变量，导致签名校验每轮都被跳过。
- [[CLOSED] #3238](https://github.com/qwibitai/nanoclaw/pull/3238) ci: let verify-agent-image run on every PR so it can gate — 移除 path-filter，使该 job 上升为 **required status check** 的候选。
- [[CLOSED] #3240](https://github.com/qwibitai/nanoclaw/pull/3240) ci: open the agent-image bump PR from a dispatch — AWS worker 在验签通过后通过 `repository_dispatch` 触发 versions.json PR。
- [[CLOSED] #3241](https://github.com/qwibitai/nanoclaw/pull/3241) ci: let a verified signature be the approving review — 默认关闭，开启需 `AGENT_IMAGE_AUTO_APPROVE=true`。
- [[OPEN] #3243](https://github.com/qwibitai/nanoclaw/pull/3243) verify-agent-image: arming auto-merge is not a verdict — 修 auto-merge 误把非判定结果（draft、API 抖动）当成失败。
- [[CLOSED] #3236](https://github.com/qwibitai/nanoclaw/pull/3236) versions: repin agent image to hardened-2026-08-13 — 重新钉到今日硬化构建。

> 这一波操作相当于把"打镜像 → 签名 → 验签 → 自动认账"四段链路一次性打通，是 v2.2.0 发布后**最值得追踪的安全基线升级**。

### 🩹 安全与稳定性修复
- [[CLOSED] #3229](https://github.com/qwibitai/nanoclaw/pull/3229) **fix(telegram): generate pairing codes with CSPRNG, not Math.random()** — 关键安全修复，pairing code 空间从 4 位拓展、熵源换成 `crypto.randomInt`。(*关联 #3235 风险面*)
- [[CLOSED] #3145](https://github.com/qwibitai/nanoclaw/pull/3145) fix(db): backfill destinations for existing wirings

---

## 4. 社区热点

| 排名 | 项 | 类型 | 评论 | 👍 |
|---|---|---|---|---|
| 1 | [#3234](https://github.com/qwibitai/nanoclaw/issues/3234) Template-stamped agent groups get bare UUID  | Issue | 1 | 0 |
| 2 | [#3235](https://github.com/qwibitai/nanoclaw/issues/3235) Unknown-sender approval 无限审批卡 | Issue | 0 | 0 |

> **观察**：今日 Issues/PR 评论量整体偏低（多数 PR 评论字段为空），讨论仍由 core-team 在 PR 内部驱动，外部社区反馈稀薄。**Issue #3234** 虽然关闭，但其揭示的 `ag-` 前缀一致性问题是高频踩坑点，仍值得在 contributor guide 中加一条规约。

---

## 5. Bug 与稳定性

| 严重度 | 编号 | 描述 | 状态 | 修复 PR |
|---|---|---|---|---|
| 🔴 高 | [#3235](https://github.com/qwibitai/nanoclaw/issues/3235) | `unknown_sender_policy=request_approval` 误把 webhook/bot 当作人类，每个入站消息都生成审批卡，**不可批准、拒绝不持久化**。循环 webhook 会无限刷卡。 | OPEN | — |
| 🟠 中 | [#3234](https://github.com/qwibitai/nanoclaw/issues/3234) | `--template` 路径产出的 agent group id 是裸 `randomUUID()`，而非 `--folder` 路径下的 `ag-<uuid>`；以数字开头会触发 OneCLI `ensureAgent` 拒绝。 | **CLOSED** | 修复方案应在 [#3220](https://github.com/qwibitai/nanoclaw/pull/3220) / [#2909](https://github.com/qwibitai/nanoclaw/pull/2909) 链路中落地 |
| 🟠 中 | [#3229 (已合)](https://github.com/qwibitai/nanoclaw/pull/3229) | Telegram pairing code 用 `Math.random()` 熵源不足 | CLOSED ✅ | 自带 |
| 🟡 低 | [#2346 (仍 OPEN)](https://github.com/qwibitai/nanoclaw/pull/2346) | 未知 slash command 被归类为 `passthrough`，结果被 SDK 静默丢掉 | OPEN（**3 月龄**） | 自带 |

---

## 6. 功能请求与路线图信号

| 候选 | 链接 | 状态 | 进入下个版本的概率 |
|---|---|---|---|
| `ncl` 通用 `--stdin-json` 输入模式（host + container 双形态） | [#3218](https://github.com/qwibitai/nanoclaw/pull/3218) | OPEN | 🟢 中高 — 边界明确、scope 受控 |
| `/add-hindsight` skill — Hindsight 长期记忆 MCP 封装 | [#2420](https://github.com/qwibitai/nanoclaw/pull/2420) | OPEN（**3 月龄**） | 🟡 中等 — 长期未动，但贡献意图清晰 |
| 未知 slash command → `category: 'none'`（修复送 Claude Code SDK 吞消息） | [#2346](https://github.com/qwibitai/nanoclaw/pull/2346) | OPEN（**3 月龄**） | 🟢 高 — bug 性质，merge 成本低 |
| 未审批 webhook sender 的策略分流（human / bot 区分） | [#3235](https://github.com/qwibitai/nanoclaw/issues/3235) | 需求阶段 | 🟡 中等 — 属安全/可用性问题，路径优先级较高 |

---

## 7. 用户反馈摘要

- **avital-nanoco（[#3234](https://github.com/qwibitai/nanoclaw/issues/3234)）**：直接指出 CLI 命名规范内部不一致（`--folder` 路径产出 `ag-` 前缀而 `--template` 产出裸 UUID）。**痛点**：CLI 内部语义对齐差，易踩 oneCLI 端校验。
- **pentar69（[#3235](https://github.com/qwibitai/nanoclaw/issues/3235)）**：用 unknown_sender_policy 想给 webhook 加一层审批闸，结果反过来被审批风暴击穿。**痛点**：缺乏 sender 类别

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目日报 · 2026-08-14

> 数据来源：[github.com/nearai/ironclaw](https://github.com/nearai/ironclaw) | 报告周期：过去 24 小时

---

## 1. 今日速览

IronClaw 今日整体处于**高活跃度 + 关键架构演进期**。最显著的事件是 **`ironclaw-v1.2.0` 正式稳定发布**，完成了从 RC1 起的完整功能集释放。Issue 与 PR 双双录得 50 条更新，是近期少有的高吞吐日。讨论焦点高度集中在 **Epic #7482「Pluggable agent loops」**——serrrfirat 在 24 小时内一次性创建了 14 个子 Issue(从 #7606 到 #7623)，将"将 IronClaw 定位为 kernel、agent loop 转为可插拔 harness"的架构重切拆解为可独立交付的工作流(Ingress Edge / HarnessDriver / 配置渲染 / 审计桥接 / 模型透传 / Capability Socket / 策略记录 / Docker 沙箱 Lane / Phase-0 适配器 / Conformance 套件 等)。同时，性能优化 Tier 3 集群（#7603–#7605）开始落地，文档真相门(doc-truth PR 1–5)进入合并阶段。

**健康度评级：🟢 优秀** ——版本发布稳定、架构演进有清晰的子任务切分、Bug 修复响应及时。

---

## 2. 版本发布

### 🚀 ironclaw-v1.2.0（2026-08-13 发布）

**类型**：RC3 → 稳定版晋升（PR #7625 实施）

**核心更新**：
- **修复 1.2.0-rc.3 验证问题**：运行时容器镜像新增 `curl` 安装，使容器内 HTTP 健康检查可执行，解决编排器对 worker 的探活问题。
- **完整继承 RC1–RC3 全部特性**（完整 changelog 见 [Release Notes](https://github.com/nearai/ironclaw)）。

**破坏性变更**：无明确说明；从 PR #7625 描述看，主要是包清单与 lockfile 同步更新。

**迁移注意事项**：
- 使用容器化部署的用户需重新拉取镜像以包含 `curl`。
- 建议运行 `cargo update` 与包清单同步。

---

## 3. 项目进展

### ✅ 已合并/关闭的重要 PR

| PR | 标题 | 影响 |
|---|---|---|
| [#7625](https://github.com/nearai/ironclaw/pull/7625) | **chore(release): promote 1.2.0-rc.3 to 1.2.0** | 1.2.0 稳定版发布 |
| [#7590](https://github.com/nearai/ironclaw/pull/7590) | **fix(live-canary): align the bundled-skill marker owner** | 修复首次 Live Canary 跑出的"marker failed verification"误报 |
| [#7581](https://github.com/nearai/ironclaw/pull/7581) | **fix(extensions): refresh bundled MCP state after auth** | 修复 OAuth 后 MCP 工具仍显示 `setup_needed` 的 bug |
| [#7579](https://github.com/nearai/ironclaw/pull/7579) | **fix(live-canary): widen the seeded slack grant + narrate scrub verdicts** | Slack 8 个新标准 ops 上线后首次 Live Canary 失败根因修复 |
| [#7531](https://github.com/nearai/ironclaw/pull/7531) | **fix(loop): make repeated-call detection advisory-only** | 重复调用检测从硬阻断改为建议性提示，避免误伤合法循环 |
| [#7376](https://github.com/nearai/ironclaw/pull/7376) | **ci(check-guidance): extend the reference gate to docs/ surface** | 文档路径引用门控覆盖至 `docs/` 公开树，杜绝文档链接漂移 |
| [#7163](https://github.com/nearai/ironclaw/pull/7163) | **feat(documents): edit docx/xlsx/pptx structurally, render PDF**, 修复 #7109 文本日志回归 | 关闭 #6898 延期项，补回被 #7109 误护的合法二进制文档编辑能力 |
| [#7506](https://github.com/nearai/ironclaw/pull/7506) | **chore(deps): 17 rust deps updates** | 依赖例行升级 |

### 📊 整体推进度

- **稳定性**：Live Canary 跑通首轮 "8 ops" 兼容性，Slack 集成质量提升。
- **可观测性**：性能基线工具 `db-write-measurement` 落地（PR #7630），可量化每轮 Postgres 写入次数。
- **文档治理**：doc-truth 1–5 系列进入收尾，公开发布物与代码事实将逐步达成机器可验证的一致性。
- **架构演进**：Epic #7482 的子任务树完成第一波"骨架铺设"——所有骨架门（issue）已关闭或开启，等候 M0 spike 验证。

---

## 4. 社区热点

### 🔥 讨论最活跃的 Issues

#### [#7482 — Epic: Pluggable agent loops](https://github.com/nearai/ironclaw/issues/7482)（6 条评论）
- **作者**：serrrfirat | 创建 2026-08-11 | 标记 `risk: high`、`reborn`、`epic`
- **核心论点**：IronClaw 转型为 **kernel**（调度/租户/能力膜/凭据中介/出口边界/审计），将 agent loop 与逐集成工具代码外移。可插拔 harness 包括 claude-code、pi、codex（明确排除 Gemini CLI）。
- **诉求**：让"集成一个第三方 vendor 工具"从手写 WASM 包变成 ~30 行配置。
- **为何重要**：这是近 30 天里推动体量最大、决策数最多（7 个 binding decision）的架构级 epic。

#### [#6257 — "Invalid value (attachments.mime_type)" PDF 错误](https://github.com/nearai/ironclaw/issues/6257)（4 条评论，已关闭）
- 用户在 Slack 反馈 PDF 发送/生成失败，怀疑是 tool 端问题。
- **关闭原因**：定位为上游 tool 问题，已修复。

#### [#2117 — ironclaw-bridge: 本地文件/MCP 桥接守护进程](https://github.com/nearai/ironclaw/issues/2117)（2 条评论，1 👍）
- 解决云端 IronClaw 访问本地笔记本资源（Obsidian vault、project dirs）的痛点。
- 现有 tunnel 方案 (`src/tunnel`) 不足。

#### [#7185 — 跨会话记忆不可靠](https://github.com/nearai/ironclaw/issues/7185)（2 条评论）
- 2026-07-23 Champions 周会上多名 Tester 独立反馈：上一轮对话建立的上下文信息下一轮无法稳定召回。
- Devon(法律场景) 体验尤为突出。

### 🔥 关键 PR 关注点

#### [#7633 — feat(unbound-turns): prepared-context accept door, unbound run lane](https://github.com/nearai/ironclaw/pull/7633)（XL，今日新开）
- 实施 [#7562](https://github.com/nearai/ironclaw) 设计终态：线程成为协调器的工作单元，会话=线程+产品侧绑定，kernel 不再承载 reply routing。
- **意义**：是 unbound-turns 设计的端态首落地的 PR。

#### [#7184 — Nostr host functions for WASM tools](https://github.com/nearai/ironclaw/pull/7184)（XL，活跃）
- 为 `near:agent@0.4.0` 沙箱新增三个 Nostr host 函数：`nostr-sign-event`(Schnorr/BIP-340)、签名验证、NIP-19 加密。
- **意义**：拓展 WASM 工具的加密能力面，且私钥不离开 host。

#### [#7548 — feat(automations): add structured execution contracts](https://github.com/nearai/ironclaw/pull/7548)（XL）
- 为定时 automations 增加版本化结构化执行合约（目标/成功标准/输出指令/允许能力/所需 skill）。
- **意义**：automations 上升到一等公民，模型面与运行时同步校验。

---

## 5. Bug 与稳定性

| 严重度 | Issue | 描述 | 状态 |
|---|---|---|---|
| 🟠 中 | [#7626](https://github.com/nearai/ironclaw/issues/7626) | 自定义 MCP 需浏览器/邮件验证时卡死（MKT1 等付费 MCP 场景） | 开放，**暂无 fix PR** |
| 🟠 中 | [#7627](https://github.com/nearai/ironclaw/issues/7627) | GitHub 扩展输入任意凭证（如"1"）即显示"已连接" | 开放，**暂无 fix PR** |
| 🟠 中 | [#7589](https://github.com/nearai/ironclaw/issues/7589) | NEAR AI Cloud Sonnet-5 连续 3 天返回 500 错误 | **已关闭**（关联 `nearai/cloud-api#920`） |
| 🟡 低 | [#7185](https://github.com/nearai/ironclaw/issues/7185) | 跨会话记忆不可靠 | 开放，影响 UX，**暂无 fix PR** |
| ✅ 已修 | [#6257](https://github.com/nearai/ironclaw/issues/6257) | PDF 附件 mime_type 错误 | 已关闭 |
| ✅ 已修 | [#7590](https://github.com/nearai/ironclaw/pull/7590) | Live Canary skill marker 验证误报 | 已合并 |
| ✅ 已修 | [#7581](https://github.com/nearai/ironclaw/pull/7581) | OAuth 后 MCP 状态未刷新 | 已合并 |
| ✅ 已修 | [#7579](https://github.com/nearai/ironclaw/pull/7579) | Slack 8 ops 首日 Live Canary 失败 | 已合并 |
| ✅ 已修 | [#7531](https://github.com/nearai/ironclaw/pull/7531) | 重复调用检测误伤 | 已合并 |

**关键风险**：#7626（自定义 MCP 鉴权卡死）的本质是 harness 缺少对交互式鉴权协议的等待/恢复机制；如果 MKT1 等付费 MCP 成为主流场景，修复优先级应上调。

---

## 6. 功能请求与路线图信号

### 已被纳入 Epic #7482 的子任务（**高进入下一版本概率**）

| Issue | 描述 | 概率 |
|---|---|---|
| [#7624](https://github.com/nearai/ironclaw/issues/7624) | v0: ACP harness executor（claude-code 作为 loop，dev-only） | 🟢 极高 — 唯一"立即构建"项 |
| [#7621](https://github.com/nearai/ironclaw/issues/7621) | Egress edge：iron-proxy 接入、sandbox wiring、配置渲染、审计桥接、模型透传、策略记录 | 🟢 高 |
| [#7622](https://github.com/nearai/ironclaw/issues/7622) | Foreign-harness execution：HarnessDriver contract、HarnessLoopExecutor、phase-0 适配器 | 🟢 高 |
| [#7623](https://github.com/nearai/ironclaw/issues/7623) | Capability access and rollout：sandbox socket、ic CLI、conformance | 🟢 高 |

### 文档真相门（doc-truth PR 1–5）已进入收尾

- [#7378](https://github.com/nearai/ironclaw/pull/7378) PR 3/5（CLI/manifest/Responses 文档事实契约测试）
- 与 #7376(2/5)、#7317 已合并/在审的 PR 1–5 共同构成 "docs can no longer drift" 的基础设施。

### 用户反馈暗示但尚未路线化的需求

- **Web UI 暴露 Reborn 版本号**（[#7580](https://github.com/nearai/ironclaw/issues/7580)）——低门槛 UX 修补，可快速随下个迭代。
- **本地文件/MCP 桥接**（[#2117](https://github.com/nearai/ironclaw/issues/2117)）——已 4 个月仍未合并，但场景需求(云端访问本机)长期存在，应给予明确里程碑。

### 性能路线图（Epic #7591 Tier 3）

- [#7603](https://github.com/nearai/ironclaw/issues/7603) BeforeModel 批量 checkpoint（预计省 14 行/turn）
- [#7604](https://github.com/nearai/ironclaw/issues/7604) 配对行写入合并（预计省 11 行/turn + 一半触发器语句）
- [#7605](https://github.com/nearai/ironclaw/issues/7605) 消息 lookup-index 折叠

**信号**：性能优化已成为下个迭代主线，配合 PR #7630（每轮 Postgres 写入基线测量）形成可量化闭环。

---

## 7. 用户反馈摘要

### 🔴 痛点

1. **跨会话记忆断层**（#7185）—— 法律行业用户(Devon)反馈尤为突出，agent 缺乏前情上下文导致重复输入信息。
2. **自定义 MCP 鉴权流程卡死**（#7626）—— 付费 MCP（如 MKT1）需邮件+浏览器双重验证，IronClaw 的 custom-MCP harness 无法完成。
3. **GitHub 扩展错误凭证假阳性**（#7627）—— 输入任意字符串即"已连接"，误导用户停止重新认证。
4. **云端访问本地文件无解**（#2117）—— Obsidian、本地项目目录仍是云托管部署的硬阻塞。

### 🟢 满意

- **#4 修复质量**——多个 bug 在 24 小时内由 PR 闭环。
- **#1.2.0 稳定晋升**——社区获得一致可依赖的 release 通道（含 RC 验证机制）。
- **#Live Canary 价值验证**——8 个新 Slack ops 上线当日即被 Canary 捕获潜在问题，证明自动化探针已生效。

### 🟡 中性

- 文档真相门（doc-truth）系列获得 PR review 但尚未全部合并，社区用户尚需等待 docs 同步收敛。

---

## 8. 待处理积压 ⚠️ 维护者关注提醒

| 排名 | Issue/PR | 积压时长 | 风险 |
|---|---|---|---|
| 1 | [#2117](https://github.com/nearai/ironclaw/issues/2117) ironclaw-bridge：本地文件/MCP 桥接 | **128 天**（4 月 7 日创建） | 影响云端部署用户核心场景（Obsidian 等），需明确里程碑 |
| 2 | [#7185](https://github.com/nearai/ironclaw/issues/7185) 跨会话记忆不可靠 | 10 天 | UX 一类问题，影响 Champions 群体 |
| 3 | [#7626](https://github.com/nearai/ironclaw/issues/7626) 自定义 MCP 鉴权卡死 | 1 天（新） | 付费 MCP 集成场景刚需 |
| 4 | [#7627](https://github.com/nearai/ironclaw/issues/7627) GitHub 扩展认证假阳性 | 1 天（新） | 易修复但影响信任 |
| 5 | [#7184](https://github.com/nearai/ironclaw/pull/7184) Nostr host functions for WASM tools | 10 天 开放 | XL PR 需核心 reviewer 充分评审 |
| 6 | [#7262](https://github.com/nearai/ironclaw/pull/7262) wasm 组依赖更新 | 9 天 | 累积技术债 |
| 7 | [#7020](https://github.com/nearai/ironclaw/pull/7020) tokio-tungstenite 0.29→0.30 | 12 天 | 累积技术债 |

**特别提醒**：
- **#2117 已超 4 个月无合并**，是本周期最大的"长尾未响应"。建议在下次 sprint planning 明确：要么排期、要么关闭并迁移到 Discussions。
- **#7184 Nostr host functions** 是新功能但开放 10 天未合，XL PR 常见阻塞点——核心 reviewer 介入可加速。

---

## 附录

- **报告生成时间**：2026-08-14
- **采样窗口**：2026-08-13 ~ 2026-08-14
- **完整 Issue 列表**：50 条
- **完整 PR 列表**：50 条
- **新版本**：1 个（ironclaw-v1.2.0）

> 本报告由 AI 分析生成，数据基于 GitHub 公开 API。建议维护者对"待处理积压"部分进行人工复核。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目日报 · 2026-08-14

---

## 1. 今日速览

过去 24 小时 LobsterAI 项目保持**高活跃度**：11 个 PR 流转（6 个已关闭、5 个仍开放），1 个测试相关的 Issue 持续推进，无新版本发布。从工作内容看，今日重点集中在 **UI 整合与重构**（Cowork、Skills/MCP、Enterprise Edition）、**功能补全**（常驻签到、定时任务反馈）、**测试覆盖补齐**（Vitest 单测），整体节奏显示出团队在 7.30 发布后的整理与重构窗口期。Issue 端信号偏弱（仅 1 条 stale 议题），社区反馈不明显，但多个 PR 已关闭表明代码评审与流水线运转顺畅。

---

## 2. 版本发布

⚠️ 无新版本发布。最近的发布动作需追溯至 `release/2026.7.30` 分支（参见 [PR #2485](https://github.com/netease-youdao/LobsterAI/pull/2485) 中对上一签到活动的说明），目前 main 分支处于功能整合与重构阶段。

---

## 3. 项目进展（今日合并/关闭 PR）

### 🔧 重大功能与重构（已关闭 PR）

| PR | 主题 | 关键内容 |
|---|---|---|
| [#2488](https://github.com/netease-youdao/LobsterAI/pull/2488) | Refactor: Cowork BTW 与管理 UI | 重构协作模式侧边栏与管理面板，提升内联交互一致性 |
| [#2487](https://github.com/netease-youdao/LobsterAI/pull/2487) | Refactor: 合并 Skills 与 MCP 视图 | 将分散的 Skills / MCP 入口整合为统一的 "skills-and-connectors" 视图，降低用户理解成本 |
| [#2486](https://github.com/netease-youdao/LobsterAI/pull/2486) | Refactor: 统一 MCP 卡片 / 详情样式 | 抽取 `CardOverflowMenu`、`managementTypography`，新增 `McpCard` / `McpDetailModal`，与 Kits/Skills 视觉规范对齐 |
| [#2485](https://github.com/netease-youdao/LobsterAI/pull/2485) | Feat: 常驻每日签到活动 | 将 PR #2408 的签到活动由"短期活动"调整为 evergreen 常驻形态；调整积分入口改为跳转网页详情；7/7 Vitest 通过、构建通过 |
| [#2484](https://github.com/netease-youdao/LobsterAI/pull/2484) | Feat: Enterprise Edition | 跨 renderer / docs / main / openclaw 多模块的企业版能力合入，模板化 PR 摘要待补充 |
| [#1232](https://github.com/netease-youdao/LobsterAI/pull/1232) | Fix: 定时任务首次执行结果未推送 | 修复 `cronJobService.pollOnce()` 中 `previousRunAtMs > 0` 条件导致的首次运行通知丢失问题 |

📌 **进展评估**：今日合并的 PR 集中在 **UI 一致性**（三连重构）与 **运营能力**（签到 evergreen、企业版）两条主线，项目在面对正式发版前的"清理日"特征明显；定时任务首次结果推送这一长期隐患被修复，对定时任务模块可信度有显著提升。

---

## 4. 社区热点

今日讨论最热的议题仍为 **测试覆盖补齐**，Issue [#1162](https://github.com/netease-youdao/LobsterAI/issues/1162) 关联了 PR [#1165](https://github.com/netease-youdao/LobsterAI/pull/1165)（同样的 OpenClaw 记忆/时间上下文模块 Vitest 单测，共 75 个用例）。该议题/组合虽只有 1 条评论、0 👍，但**诉求清晰且急迫** —— `openclawMemoryFile.ts` 是记忆同步与 SQLite 迁移核心，此前 0 覆盖，属于底层高风险模块。同时另一个同类 PR [#1156](https://github.com/netease-youdao/LobsterAI/pull/1156)（命令安全/记忆评分单测）也在排队，体现社区贡献者 **MaoQianTu** 在系统化补齐核心模块测试的努力。

另一隐性热点是 [PR #2485](https://github.com/netease-youdao/LobsterAI/pull/2485) 的运营功能调整 —— 把积分入口从端内展开改为跳转网页，背后反映了对**运营活动长期化、跨端统一**的诉求。

---

## 5. Bug 与稳定性

按严重程度排列：

🔴 **严重 - 功能不可用 / 关键路径**

1. **定时任务首次执行结果未推送到 UI**（[PR #1232](https://github.com/netease-youdao/LobsterAI/pull/1232) - 已关闭 ✅）
   - 根因：`cronJobService.pollOnce()` 中 `previousRunAtMs > 0` 的条件拦截，使得首次运行永远不触发 `runUpdate` 推送
   - 修复路径明确，影响范围：所有新建定时任务的首次执行可见性

2. **OpenClaw Skill 启用开关失效**（[PR #2483](https://github.com/netease-youdao/LobsterAI/pull/2483) - 仍开放）
   - 根因：`skills.entries` 用目录名而非 frontmatter `name`，OpenClaw 解析 override 时与目录名前端不一致
   - 修复建议：以解析后的 frontmatter `name` 作为 key
   - 影响范围：所有依赖 frontmatter name 的覆盖场景，**已关闭**但**仍开放**状态待复查

🟠 **中度 - 体验缺陷 / 数据质量**

3. **定时任务"立即运行"无交互反馈**（[PR #1163](https://github.com/netease-youdao/LobsterAI/pull/1163) - 仍开放）
   - 同步阻塞、`RunManually` handler 等待执行完成才返回、依赖 15 秒轮询
   - 同时提出右键菜单规范问题
   - 影响：用户重复点击、误判操作失败

4. **创建自定义 Agent 允许重名**（[PR #1166](https://github.com/netease-youdao/LobsterAI/pull/1166) - 仍开放）
   - 渲染层未做名称查重即提交创建流程
   - 影响：列表歧义、用户需手动比对

---

## 6. 功能请求与路线图信号

| 信号来源 | 诉求 | 落地可能性 |
|---|---|---|
| [PR #2485](https://github.com/netease-youdao/LobsterAI/pull/2485) 已合并 | 签到活动长期化、积分入口跨端统一 | ✅ 已合入下版本（evergreen） |
| [PR #2484](https://github.com/netease-youdao/LobsterAI/pull/2484) 已关闭 | Enterprise Edition 多模块能力 | 🟡 模板化摘要待补，预计纳入下一发布 |
| [PR #2483](https://github.com/netease-youdao/LobsterAI/pull/2483) | OpenClaw Skill 启用语义修正 | 🟢 修复直接，建议尽快合并 |
| [PR #1163](https://github.com/netease-youdao/LobsterAI/pull/1163) | "立即运行"乐观更新 + Gateway 状态同步 | 🟢 用例清晰，但涉及 IPC 异步改造，工作量中 |
| MaoQianTu 系列 PR #1156 / #1165 | Vitest 单测补齐（commandSafety / coworkMemoryJudge / OpenClaw 记忆 / 时间上下文） | 🟢 高优先级，下个质量门应纳入 |

📌 **路线图判断**：下一版本大概率包含 **Enterprise Edition + UI 重构收尾 + OpenClaw 与定时任务质量修复**四件套；测试补齐可能以合批形式合并。

---

## 7. 用户反馈摘要

由于 Issues 端本周交互较少（仅 [#1162](https://github.com/netease-youdao/LobsterAI/issues/1162) 1 条评论），可提炼的用户声音有限，但已能从 PR 描述中读出团队自检的痛点：

- **安全模块零覆盖带来的不安全感**：MaoQianTu 两次明确指出 `commandSafety` 误判会"让 AI 静默执行 `rm -rf`、`git push --force`"，反映内部对安全模块可验证性的强烈诉求。
- **定时任务"看不见的状态"**：#1232、#1163 共同指向同一类问题 —— 用户既要 *结果回显* 也要 *过程反馈*，是典型的运维类场景痛点。
- **UI 一致性长期债务**：#2486、#2487、#2488 三连重构显示团队已意识到 Skills / MCP / Kits 之间存在大量**重复视觉样板**，合并 UI 组件是强烈的内部共识。

---

## 8. 待处理积压（提醒维护者）

以下 PR/Issue 自 2026-03-31 创建以来长期未推进，建议维护者集中清理：

| 链接 | 类型 | 主题 | 距今 |
|---|---|---|---|
| [#1156](https://github.com/netease-youdao/LobsterAI/pull/1156) | OPEN / stale | commandSafety & coworkMemoryJudge 单测 | ~136 天 |
| [#1163](https://github.com/netease-youdao/LobsterAI/pull/1163) | OPEN / stale | 定时任务"立即运行"交互反馈 | ~136 天 |
| [#1165](https://github.com/netease-youdao/LobsterAI/pull/1165) | OPEN / stale | OpenClaw 记忆 / 时间上下文单测 | ~136 天 |
| [#1166](https://github.com/netease-youdao/LobsterAI/pull/1166) | OPEN / stale | 自定义 Agent 重名校验 | ~136 天 |
| [#1162](https://github.com/netease-youdao/LobsterAI/issues/1162) | OPEN / stale | 对应 #1165 的 Issue | ~136 天 |

📌 **建议**：将上述 4 个 PR 集中评审一次性合入（均为测试/防御性修复，零破坏性），既能闭环 MaoQianTu 的核心模块测试体系建设，也减少长期积压对维护者心智负担。

---

**整体健康度**：🟢 **良好** —— 高活跃、UI 重构有序推进、关键 Bug 有修复路径；需关注 *测试积压* 与 *OpenClaw skill 启用语义问题*，建议在下一次版本窗口前完成合并。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报

**日期**: 2026-08-14
**数据范围**: 过去 24 小时
**仓库**: [moltis-org/moltis](https://github.com/moltis-org/moltis)

---

## 1. 今日速览

过去 24 小时内 Moltis 仓库呈现**中等活跃度**：新增 4 个待合并 PR 和 1 个待处理 Issue，无版本发布，无 PR 合入或关闭。提交主题高度集中——一半围绕 **macOS/沙箱兼容性修复**（bash 3.2 数组展开、第三方工具模块路径迁移），另一半是 **CalDAV 与多平台消息历史连接器** 这一较大功能特性的雏形。整体而言项目处于"功能扩张 + 修复小颗粒问题"并行推进的阶段，但缺少合入动作意味着维护者尚未对新工作做出评审决策。

---

## 2. 版本发布

今日**无新版本发布**。本节省略。

---

## 3. 项目进展

⚠️ **今日无 PR 被合并或关闭**，所有 4 个新提交仍处于 OPEN 状态，需关注维护者何时启动评审。

按贡献维度梳理今日提交的工作：

| 维度 | 进展 |
|---|---|
| 跨平台兼容性 | 修复 `just local-validate-full` 在 macOS 默认 bash 3.2 下的 `unbound variable` 错误 ([#1194](https://github.com/moltis-org/moltis/pull/1194)) |
| 沙箱构建链 | 修正 Dockerfile 中 `gogcli` 模块路径至 `openclaw` 组织 ([#1191](https://github.com/moltis-org/moltis/pull/1191)) |
| 技能安装元数据 | 修正 `wacrawl` skill 安装回退路径指向 `openclaw/wacrawl` ([#1192](https://github.com/moltis-org/moltis/pull/1192)) |
| 数据集成 | 新增 provider-neutral 连接器持久化层、原子快照、调度、投影与本地全文搜索；新增只读 CalDAV 数据集，以及 Slack/Discord/Matrix/Teams 消息历史数据集 ([#1190](https://github.com/moltis-org/moltis/pull/1190)) |

净进度评估：**新增功能体量较大但尚未落地**，已合入价值为 0；维护者需要尽快响应以避免 PR 积压导致合并冲突。

---

## 4. 社区热点

今日所有 Issue 与 PR 的评论数均为 0、点赞数均为 0，**社区参与度处于低位**。尚无讨论焦点可提炼。建议关注以下高潜条目：

- [PR #1190 Add durable CalDAV and channel history connectors](https://github.com/moltis-org/moltis/pull/1190) — 体量最大、跨多产品线（连接器、搜索、提示语注入），最可能引发后续讨论。
- [Issue #1193 Flaky test: push fanout timeout](https://github.com/moltis-org/moltis/issues/1193) — 涉及测试稳定性，对 CI 信噪比有直接影响。

---

## 5. Bug 与稳定性

按严重程度排列：

| 严重度 | 条目 | 状态 | 说明 |
|---|---|---|---|
| 🟡 中 | [Issue #1193](https://github.com/moltis-org/moltis/issues/1193) Flaky test: push fanout timeout | OPEN（**暂无 fix PR**） | `push::tests::fanout_is_bounded_and_times_out_a_hung_endpoint` 在 10 核 macOS 上 3 次全量套件运行中失败 2 次；仅在 workspace 全量执行时出现。属 CI 噪声类问题，会掩盖真实回归。 |
| 🟡 中 | [PR #1191](https://github.com/moltis-org/moltis/pull/1191) sandbox: gogcli 模块路径 | OPEN（修复就绪） | `moltis sandbox build` 在所有预构建镜像上失败，根因是 GitHub redirect 后无法解析 `github.com/openclaw/gogcli`。 |
| 🟡 中 | [PR #1192](https://github.com/moltis-org/moltis/pull/1192) skills: wacrawl 安装元数据 | OPEN（修复就绪） | `wacrawl` skill 的 `requires.install` 仍指向旧仓库路径。 |
| 🟢 低 | [PR #1194](https://github.com/moltis-org/moltis/pull/1194) scripts: macOS bash 3.2 数组展开 | OPEN（修复就绪） | 影响本地验证脚本而非运行时，影响面较小但阻碍 macOS 贡献者。 |

注：Issue #1193 的修复尚未配套提交，建议维护者或作者尽快附上 fix PR 以保留问题上下文。

---

## 6. 功能请求与路线图信号

**[PR #1190 Add durable CalDAV and channel history connectors](https://github.com/moltis-org/moltis/pull/1190)** 是今日最强的路线图信号。摘要中明确的能力范围：

- **Provider-neutral 连接器持久化层**：原子快照、调度、投影、有界本地全文搜索 —— 这是一个基础设施级抽象，后续可承接更多数据源。
- **只读 CalDAV 数据集**：日历类集成的开端。
- **多平台消息历史数据集（read-only）**：Slack、Discord、Matrix、Microsoft Teams，**强调不复制频道凭据** —— 体现对安全模型的克制。
- **提示语注入路径**：将上述数据集接入到 prompt 流程。

判断：**纳入下一版本的可能性较高**，但因其触及持久化与检索核心，需要维护者仔细评审，预计会是多轮迭代 PR 而非一次性合入。

---

## 7. 用户反馈摘要

⚠️ 今日所有条目**评论数均为 0**，无法从对话中获取真实用户痛点或场景描述。仅能基于提交内容本身推断：

- **macOS 贡献者流程痛点**：[PR #1194](https://github.com/moltis-org/moltis/pull/1194) 揭示 `local-validate-full` 在 macOS 默认 bash 3.2 下不可用，意味着 macOS 开发者长期绕过本地验证或被噪音劝退。
- **上游品牌迁移遗留问题**：[PR #1191](https://github.com/moltis-org/moltis/pull/1191) 与 [PR #1192](https://github.com/moltis-org/moltis/pull/1192) 同时指向 `steipete/* → openclaw/*` 的迁移，说明上游在过去一段时间发生了组织重命名/迁移，项目侧的硬编码路径未同步更新。
- **测试可重复性需求**：[Issue #1193](https://github.com/moltis-org/moltis/issues/1193) 作者主动报告 10 核空闲机器上的复现数据，反映出用户对 CI 稳定性期望较高。

---

## 8. 待处理积压

截至 2026-08-14，所有今日条目均为 OPEN：

| 编号 | 类型 | 标题 | 创建时间 |
|---|---|---|---|
| [#1190](https://github.com/moltis-org/moltis/pull/1190) | PR | Add durable CalDAV and channel history connectors | 2026-08-11 |
| [#1191](https://github.com/moltis-org/moltis/pull/1191) | PR | fix(sandbox): point gogcli module path at the openclaw org | 2026-08-13 |
| [#1192](https://github.com/moltis-org/moltis/pull/1192) | PR | fix(skills): point wacrawl install metadata at the openclaw org | 2026-08-13 |
| [#1193](https://github.com/moltis-org/moltis/issues/1193) | Issue | Flaky test: push fanout timeout assertion races under full-suite load | 2026-08-13 |
| [#1194](https://github.com/moltis-org/moltis/pull/1194) | PR | fix(scripts): guard empty bash array expansions for macOS bash 3.2 | 2026-08-13 |

**维护者关注建议**：
- 3 个 fix 类 PR（#1191、#1192、#1194）改动局部、风险低，可快速合并以释放 macOS 贡献者摩擦。
- #1193（flaky test）建议在同一批合并前优先处理，避免后续合入被误判为回归。
- #1190 体量大、跨模块，应尽早指派 reviewer 并给出拆分/迭代计划，避免长期 OPEN。

---

*报告基于过去 24 小时的 GitHub 公开数据自动生成，所有链接指向 `moltis-org/moltis` 仓库。*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw (QwenPaw) 项目日报 · 2026-08-14

> 数据来源：`agentscope-ai/QwenPaw` GitHub 仓库
> 报告周期：2026-08-13 ~ 2026-08-14

---

## 一、今日速览

过去 24 小时内，QwenPaw 仓库呈现 **高活跃、高产出** 的开发态势：Issues 净更新 42 条（25 条新开/活跃，17 条关闭），PR 净更新 50 条（31 条待合并，19 条已合并/关闭），并接连发布了 **v2.1.0-beta.5** 与正式版 **v2.1.0** 两个版本。项目整体推进节奏稳健，正式版落地"QwenPaw OS Shell"等多项重大新特性。与此同时，社区围绕 **安全/权限模型**、**多步骤任务中断**、**多端会话一致性** 等议题展开集中讨论，2 条被标为 invalid 的端口暴露安全报告引发关注（疑似为重复或被认作无效），需警惕误判风险。

**健康度评估：🟢 活跃健康** — 新版本按期发布，PR 流转顺畅，关闭率约 38%（Issues）和 38%（PRs），社区参与度高。

---

## 二、版本发布

### 🚀 v2.1.0（正式版）

**新增内容**

- **QwenPaw OS Shell**：引入可移动、可缩放窗口系统，含启动器 (Launcher)、任务栏 (Taskbar)、通知中心与布局持久化 ([#6645](https://github.com/agentscope-ai/QwenPaw/pull/6645))
- **统一应用目录**：已安装应用与市场应用共享同一份 Catalog，App Center 体验一体化
- **PawPort 导入流程**（PR #6960）：支持从 Codex / Qoder 等外部 Agent 一键迁移 instructions、settings、skills、plugins、projects 与最近工作
- **会话级多项目目录**（PR #6976）：单个 Chat 可绑定有序的多个项目目录，首项为主目录，相对路径解析与默认 `cwd` 从其出发
- **ReMe 长期记忆仪表盘**（PR #6984）：在 Agent 内存设置页提供运行时健康度、后台记忆捕获、资源诊断与维护操作
- **Provider 能力模板**（PR #6823）：为自定义 OpenAI 兼容 Provider 自动应用内置能力模板（如 `qwen3.6-plus` 自动启用 image）

**已合并到 v2.1.0 的重要修复**

- `fix(chats)`: 处理类 dict 形式的模型响应 ([#6816](https://github.com/agentscope-ai/QwenPaw/pull/6816))
- `fix(memory)`: 简化长期记忆指引 ([#6942](https://github.com/agentscope-ai/QwenPaw/pull/6942))
- `docs(website)`: 优化 Files workspace 文档

**升级建议**：v2.0.x → v2.1.0 引入了 Shell 抽象与统一 Catalog，未明确标 Breaking change，但建议在升级前确认：
1. 自定义 Channel 适配是否仍兼容 SDK 路径变更
2. App Center 配置项的持久化位置
3. Provider 自定义模型能力声明是否会与新模板冲突

### 🧪 v2.1.0-beta.5（预发布）

对 chats、memory、website 等模块的预发布修复集，已被 v2.1.0 正式版吸收。

---

## 三、项目进展（今日重要合并/关闭 PR）

| PR | 标题 | 影响 |
|---|---|---|
| [#6652](https://github.com/agentscope-ai/QwenPaw/pull/6652) | `fix(mission)`: MissionGate 服务端强制 max_iterations | 修复任务模式无限派发子 Agent 导致余额耗尽/54+ 子会话的严重问题（fixes #6505） |
| [#6636](https://github.com/agentscope-ai/QwenPaw/pull/6636) | `fix(chats)`: 聊天历史接口分页 + GZip 压缩 | 解决长会话 1MB+ 返回导致 30s 超时的可用性问题（fixes #6635） |
| [#6387](https://github.com/agentscope-ai/QwenPaw/pull/6387) | `feat(channels)`: 可选依赖按需安装 | 内置 Channel 保留在配置/注册表，特定 SDK 移出默认依赖，缺失时 Console 灰显而非崩溃 |
| [#6715](https://github.com/agentscope-ai/QwenPaw/pull/6715) | `feat(onebot)`: 入站媒体本地化 | OneBot 入站图片/音频/视频/文件先下载到本地再交给 Agent，含流式下载上限 |
| [#6884](https://github.com/agentscope-ai/QwenPaw/pull/6884) | `fix`: Auto-Dream 集成韧性增强 | 单个空/非法结构化输出不再让整个 Auto-Dream 任务失败 |
| [#6998](https://github.com/agentscope-ai/QwenPaw/pull/6998) | `fix(providers)`: 防止未消费 LLM stream 信号量泄漏 | 解决流式调用被取消时 rate-limiter 许可泄漏（fixes #5411） |
| [#6975](https://github.com/agentscope-ai/QwenPaw/pull/6975) | `fix(console)`: 压缩后重置 context-usage 环形进度 | `/compact` 后 UI 用量指示不再卡住 |
| [#6996](https://github.com/agentscope-ai/QwenPaw/pull/6996) | `fix(plugins)`: 重载交换前恢复 workspace 状态 | 工作区插件重载原子化，避免 slash 命令/模式/钩子丢失 |

**整体评估**：今日合并的项目均为可观测的稳健性、可用性、安全性改进。MissionGate 服务端强制限制、信号量泄漏修复、聊天分页三项对生产环境价值较大。

---

## 四、社区热点

### 🔥 最高讨论度 Issues

1. **[#6921](https://github.com/agentscope-ai/QwenPaw/issues/6921)** — 多步骤任务输出 "Let me do all three" 后无提示停止（6 条评论，OPEN）
   用户反映 Agent 在多步骤规划后无任何视觉提示即停摆，需手动说"继续"。这与 [#6768](https://github.com/agentscope-ai/QwenPaw/issues/6768)（多步任务后无限循环数小时）形成对比，反映 **Agent 任务状态机在多步场景下的边界条件** 仍不稳定。

2. **[#6973](https://github.com/agentscope-ai/QwenPaw/issues/6973)** — QwenPaw Creator 是否支持阿里云百炼 token plan（5 条评论，OPEN）
   高频诉求点：国内用户希望按订阅 plan 而非 API 按量计费。

3. **[#6853](https://github.com/agentscope-ai/QwenPaw/issues/6853)** — `prompts.py` 谎言：Dream 实际写入 digest/ 而非 MEMORY.md（5 条评论，CLOSED）
   揭示 prompts 文档与 ReMe 真实管线的长期不一致，开发者承诺已修复。

4. **[#6811](https://github.com/agentscope-ai/QwenPaw/issues/6811)** — OpenAI Responses 续接摘要忽略 `disable_thinking` 并将 60s 取消误报为畸形输出（5 条评论，CLOSED）
   涉及 Scroll 压缩策略与 OpenAI Responses 提供商的兼容性问题。

5. **[#6847](https://github.com/agentscope-ai/QwenPaw/issues/6847)** — QwenPaw 频繁被杀软拦截（4 条评论，OPEN）
   对比 WorkBuddy 的对比体验，引发对 **进程行为/权限签名** 的讨论。

### ⚠️ 安全类集中关注

- [#6992](https://github.com/agentscope-ai/QwenPaw/issues/6992) / [#6993](https://github.com/agentscope-ai/QwenPaw/issues/6993)（重复，被标 invalid）：关于 0.0.0.0:8088 公网暴露 + 插件安装 API 无鉴权的"重大漏洞"报告
- [#6916](https://github.com/agentscope-ai/QwenPaw/issues/6916)（已关闭）：插件可静默创建 cron 任务并向会话注入消息
- [#7009](https://github.com/agentscope-ai/QwenPaw/issues/7009)：用户 Pod 被 Cloudflare Tunnel + 监控插件触发"反向代理/挖矿"误判，收到终止邮件

**信号**：权限模型 / 沙箱边界 / 平台风控是当前最受关注的安全三角形，**建议维护者主动发布官方声明**，避免误判传播。

---

## 五、Bug 与稳定性

### 🔴 高严重度

| Issue | 描述 | 状态 | Fix PR |
|---|---|---|---|
| [#6921](https://github.com/agentscope-ai/QwenPaw/issues/6921) | 多步任务停止无提示 | OPEN | ❌ 无 |
| [#6768](https://github.com/agentscope-ai/QwenPaw/issues/6768) | 多步任务后 Agent 死锁数小时 | CLOSED | ✅ [#6652](https://github.com/agentscope-ai/QwenPaw/pull/6652)（MissionGate 服务端限制）部分覆盖 |
| [#6955](https://github.com/agentscope-ai/QwenPaw/issues/6955) | v2.0.1 pip 安装概率性启动崩溃 | OPEN | ❌ 无 |

### 🟡 中严重度

| Issue | 描述 | 状态 | Fix PR |
|---|---|---|---|
| [#7008](https://github.com/agentscope-ai/QwenPaw/issues/7008) | Anthropic 误判历史图片敏感，长会话中断 | OPEN | ❌ 无 |
| [#7007](https://github.com/agentscope-ai/QwenPaw/issues/7007) | Windows Desktop TUI `transport: Connection closed` | OPEN | ❌ 无 |
| [#7005](https://github.com/agentscope-ai/QwenPaw/issues/7005) | 启用 Shabox 后 UV Run 失败（无法写入 `~/.cache/uv`） | OPEN | ❌ 无 |
| [#7006](https://github.com/agentscope-ai/QwenPaw/issues/7006) | 右上语言下拉与左下设置齿轮列表不一致 | OPEN | ❌ 无 |
| [#6951](https://github.com/agentscope-ai/QwenPaw/issues/6951) | Scroll 压缩后压缩前聊天记录不可见 | OPEN | ❌ 无 |
| [#6966](https://github.com/agentscope-ai/QwenPaw/issues/6966) | Telegram `/new` 不轮换 session ID | OPEN | ❌ 无 |

### 🟢 已关闭或已有 Fix

- [#6811](https://github.com/agentscope-ai/QwenPaw/issues/6811) OpenAI Responses 摘要 ✅
- [#6853](https://github.com/agentscope-ai/QwenPaw/issues/6853) prompts.py Dream 文档不一致 ✅
- [#6047](https://github.com/agentscope-ai/QwenPaw/issues/6047) 升级后新 chat 复用旧 session ✅
- [#6457](https://github.com/agentscope-ai/QwenPaw/issues/6457) 任务模式历史记录异常 ✅

---

## 六、功能请求与路线图信号

### 可能进入 v2.2 / v2.1.x 的强信号

| 需求 | Issue/PR | 强度 |
|---|---|---|
| 阿里云百炼 token plan 支持 | [#6973](https://github.com/agentscope-ai/QwenPaw/issues/6973) | 🟢 高（用户基数大） |
| Matrix 频道按发送者隔离会话/记忆 | [PR #7001](https://github.com/agentscope-ai/QwenPaw/pull/7001) | 🟢 高（已有 PR） |
| Console 子会话父子链路持久化 | [PR #7004](https://github.com/agentscope-ai/QwenPaw/pull/7004) | 🟢 高（已有 PR） |
| 多项目目录（会话级） | [PR #6976](https://github.com/agentscope-ai/QwenPaw/pull/6976) | 🟢 高（已有 PR） |
| 聊天框字符计数动态关闭 | [#6585](https://github.com/agentscope-ai/QwenPaw/issues/6585)（已 CLOSED） | 🟡 中 |
| 自动附加当前真实时间到上下文 | [#6283](https://github.com/agentscope-ai/QwenPaw/issues/6283)（已 CLOSED） | 🟡 中 |
| Embed 模式聊天窗口（url 携带 apikey）+ Session 列表高级筛选 | [#6970](https://github.com/agentscope-ai/QwenPaw/issues/6970) | 🟡 中 |
| 服务器端定制代理客户端版本 | [#7002](https://github.com/agentscope-ai/QwenPaw/issues/7002) | 🟡 中 |
| `QWENPAW_CHANNEL` 环境变量注入子进程 | [#6995](https://github.com/agentscope-ai/QwenPaw/issues/6995) | 🟢 低门槛（已有 ContextVar，落地简单） |
| Memory 系统外部方案（ViBo 提案，宣称节省 97.5% tokens） | [#7003](https://github.com/agentscope-ai/QwenPaw/issues/7003) | 🟠 待评估（第三方营销提案） |

### 跨端/生态

- **PawPort**（PR #6960）扩展 Codex / Qoder 导入路径 → 已登陆 v2.1.0
- **多架构 Docker**（PR #6999）发布流程优化 → CI 改进类

---

## 七、用户反馈摘要

### 😣 痛点

1. **多步任务可靠性**（#6921, #6768）：用户对"Agent 自己规划好就停"感到非常困惑，且不同模型触发频率不一，说明 **状态机对外暴露不足**，需要更明显的"思考中/等待执行"提示
2. **杀软误杀**（#6847）：Windows 用户的实际部署痛点，影响首次使用体验
3. **升级数据丢失**（#6047, #6100）：v1.x → v2.x 升级路径上 `agent.json` 被覆盖、chats.json 顺序错乱等问题，造成信任损耗
4. **Telegram /new 失效**（#6966）：在跨日跨设备使用场景下，会话无法真正"重新开始"，上下文无限累积
5. **多语言 UI 不一致**（#7006）：右上角语言下拉与设置齿轮不一致，体现国际化一致性尚需打磨

### 😊 满意

- 多个 issue 关闭记录中包含维护者的快速定位与 PR 跟单（#6811、#6853、#6457）
- v2.1.0 的 QwenPaw OS Shell 与统一 Catalog 被定位为"标志性"功能
-

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目日报 · 2026-08-14

---

## 1. 今日速览

ZeroClaw 仓库昨日继续保持高强度协作节奏：**50 个 Issue** 与 **50 个 PR** 在过去 24 小时内更新，新开/活跃 37 条 Issue、40 条 PR 待合并，13 个 Issue 与 10 个 PR 完成闭环。讨论焦点集中在 **v0.9.0 安全与网关硬化**（auth、SSRF、OAuth、JWT、路径穿越）、**会话持久化契约所有权**、**目标模式（Goal Mode）RFC** 以及 **Rust 工具链与 CI 基础设施升级**。社区反馈整体健康，但 `needs-maintainer-review` / `needs-author-action` 的高风险 RFC 与跟踪器积压明显，维护者审阅压力是当前最大的瓶颈。综合判断：**项目处于 v0.9.0 关键节点的密集合龙期，活跃度高位运行，安全态势因两枚关键修复落地而显著改善**。

---

## 2. 版本发布

**无新版本发布。** 仓库当前无 Releases 更新。

值得关注的发布流程相关进展：

- **#9712（已关闭）**：[Feature] 支持在同一编号发布线内进行周度带字母的版本（如 `v0.8.5-a`、`v0.8.5-b`）。[`release-stable-manual.yml`](../../zeroclaw-labs/zeroclaw/issues/9712) 当前拒绝后缀，需要改造。提议已被接受/关闭，下一步等待实现 PR 跟进。
- **#9527（待合并）**：将例行构建工具链升至 Rust **1.97.1**，源码下限保持在 **1.96.0**（与 StageX 一致），同步对齐 26 个嵌入式工具与 builder 镜像。([link](../../zeroclaw-labs/zeroclaw/pull/9527))

---

## 3. 项目进展

过去 24 小时共 **关闭/合并 10 个 PR**，其中 **3 枚属于高优先级安全或稳定性修复**，是昨日实质性的项目推进：

| # | 标题 | 风险 | 影响 |
|---|------|------|------|
| [#9969](../../zeroclaw-labs/zeroclaw/pull/9969) | **fix(gateway): contain filesystem dashboard assets** | 🔴 高 | 关闭网关侧仪表盘资产的 symlink 逃逸与路径穿越，在解析时校验根目录边界 |
| [#9968](../../zeroclaw-labs/zeroclaw/pull/9968) | **fix(providers): preserve compatible-provider integrity** | 🔴 高 | Zhipu 凭据失败时改为"安全失败"，不再透传裸凭据；JWT payload 改用结构化 JSON |
| [#9674](../../zeroclaw-labs/zeroclaw/pull/9674) | **fix(infra): preserve session queue serialization during eviction** | 🔴 高 / P1 | RAII guard 保证会话槽位注册期间不可被驱逐，防止 pending 计数丢失 |
| [#9966](../../zeroclaw-labs/zeroclaw/pull/9966) | fix(container): match nested fixture manifests by glob | 低 | 修复 `Dockerfile*` 中嵌套 `crates/<name>/Cargo.toml` 预取遗漏 |
| [#9709](../../zeroclaw-labs/zeroclaw/pull/9709) | fix(tts): clean up Edge TTS temp output on every error path | 中 | TTS 临时音频文件覆盖所有失败路径 |
| [#9705](../../zeroclaw-labs/zeroclaw/pull/9705) | fix(config): allow config set on hyphenated cron aliases | 中 | 允许连字符 cron 别名走 `config set` |
| [#9639](../../zeroclaw-labs/zeroclaw/pull/9639) | docs(architecture): document provider routing lifecycle | 低 | 沉淀 provider 路由生命周期文档 |
| [#9932](../../zeroclaw-labs/zeroclaw/pull/9932) | ci(codeql): drop rust/hard-coded-cryptographic-value | 高 (CI) | 移除 27 条全部为 FP 的 CodeQL 告警，提升信号比 |
| [#9984](../../zeroclaw-labs/zeroclaw/pull/9984) | *(仅作验证)* Blacksmith runner 验证 PR | — | 同仓库临时验证 PR，已关闭 |
| [#9942](../../zeroclaw-labs/zeroclaw/pull/9942) | fix(vi): report the withheld vi_verify tool through the config surface | 中 | 让 `vi_verify` 启用说明走配置面而非日志 trace |

**总体评估**：昨日的项目推进以"安全合规 + 工具链现代化"为主线，**[#9969](../../zeroclaw-labs/zeroclaw/pull/9969)** 与 **[#9968](../../zeroclaw-labs/zeroclaw/pull/9968)** 共同抬高了 v0.9.0 的攻击面抗性基线，**[#9674](../../zeroclaw-labs/zeroclaw/pull/9674)** 修正了会话调度的一类潜在计数竞争。CI 侧的 [#9932](../../zeroclaw-labs/zeroclaw/pull/9932) 与 [#9966](../../zeroclaw-labs/zeroclaw/pull/9966) 改善了构建反馈质量。

---

## 4. 社区热点

**讨论最活跃（按评论数）**：

1. **[#8303](../../zeroclaw-labs/zeroclaw/issues/8303)** · *RFC: Goal mode v1 — bounded foreground Matrix work* — **20 评论 / 👍1**
   - 作者：@vrurg · 标签：enhancement, agent, config, runtime, tool, type:rfc
   - 诉求：定义跨多轮 agent turn 持久推进受限用户目标的方式，剥离重启交接、异步子任务、Web 适配等过载范围，进入 **v1 收敛版本**。

2. **[#7155](../../zeroclaw-labs/zeroclaw/issues/7155)** · *RFC: per-execution confirmation tier + Claude Code-style command pattern policy (allow/ask/deny)* — **18 评论**
   - 作者：@NiuBlibing · 标签：P1, security, tool:shell, risk:high
   - 状态：已完成 Rev 3 范围收窄，主流在 Core 投票阶段。提出将 shell 策略与 #9978（DeepSeek Harness 借鉴）形成路线图衔接。

3. **[#8692](../../zeroclaw-labs/zeroclaw/issues/8692)** · *[Tracker]: Maintainer decision queue for RFCs and design issues* — **13 评论**
   - 作者：@Audacity88 · 标签：priority:p2, type:tracker
   - 诉求：作为 RFC / 设计 Issue 的活跃决策队列，承担接受、拒绝、延期、分拆前的代码所有者把关。

4. **[#6850](../../zeroclaw-labs/zeroclaw/issues/6850)** · *RFC: Decouple memory lifecycle policy from storage backends* — **12 评论**
   - 作者：@fanchanghu · 标签：priority:p2, needs-author-action, risk:high
   - 诉求：让 `Memory` trait 仅承担后端存储，治理与合并提升为生命周期策略层，避免被各 gateway/channel/后端调用方重复实现。

5. **[#9328](../../zeroclaw-labs/zeroclaw/issues/9328)** · *[Bug]: verifiable-intent evaluates constraints without verifying the credential chain* — **12 评论**
   - 作者：@AngryPacifist · 标签：bug, runtime, security, tool:security, status:in-progress, risk:high
   - 实质：`vi_verify` 在没有链上验证的前提下评估 L2 约束，违反 VI 参考实现中"先验证再约束"的契约。

**反应聚合**：
- 这些热点集中指向 **"如何在 v0.9.0 中同时守住安全边界、并清晰切分所有权"** 这条主线：
  - 安全策略：[#7155](../../zeroclaw-labs/zeroclaw/issues/7155) + [#9978](../../zeroclaw-labs/zeroclaw/issues/9978) + [#9328](../../zeroclaw-labs/zeroclaw/issues/9328)
  - 所有权边界：[#6850](../../zeroclaw-labs/zeroclaw/issues/6850)、[#9487](../../zeroclaw-labs/zeroclaw/issues/9487)、[#9600](../../zeroclaw-labs/zeroclaw/issues/9600)、[#8692](../../zeroclaw-labs/zeroclaw/issues/8692)
  - 持久目标：[#8303](../../zeroclaw-labs/zeroclaw/issues/8303)
- 维护者 **@Audacity88** 是枢纽节点，他牵头的 [#7432](../../zeroclaw-labs/zeroclaw/issues/7432)、[#8692](../../zeroclaw-labs/zeroclaw/issues/8692)、[#9598](../../zeroclaw-labs/zeroclaw/issues/9598)、[#8691](../../zeroclaw-labs/zeroclaw/issues/8691) 串联了 v0.9.0 几乎全部 RFC 的决策通路。

---

## 5. Bug 与稳定性

按严重程度排列：

| 严重度 | Issue / PR | 摘要 | 状态 | 已有 Fix？ |
|--------|------------|------|------|-----------|
| 🔴 P1 / 安全 | [#9389](../../zeroclaw-labs/zeroclaw/issues/9389) | 未鉴权 `POST /api/pair` 的锁定状态键基于攻击者可控制的头部（`crates/zeroclaw-gateway/src/api_pairing.rs:371-386`） | **已关闭** | 已纳入合并范围 |
| 🔴 P2 / 安全 | [#9328](../../zeroclaw-labs/zeroclaw/issues/9328) | `vi_verify` 未校验凭据链即评估 L2 约束 | OPEN · in-progress | [#9942](../../zeroclaw-labs/zeroclaw/pull/9942)（关联修复） |
| 🔴 P2 / 回归 | [#9366](../../zeroclaw-labs/zeroclaw/issues/9366) | WhatsApp Web 接受 `approval_timeout_secs` 但从不读取（自 #9348 分拆） | **已关闭** | 关联 PR 待跟进 |
| 🟠 P2 / 安全 | [#9328 相关路径** — 已合并的 provider 安全** | 见 #9968（Zhipu 凭据完整性） | **已合并** | ✅ |
| 🟠 P2 / 网关 | [#9945](../../zeroclaw-labs/zeroclaw/issues/9945) | browser tool 仅暴露 16/100+ agent-browser 命令，iframe/弹窗/Tab/表单控件不可达 | OPEN · blocked | 暂无 |
| 🟡 P1 / 运行时 | [#9929](../../zeroclaw-labs/zeroclaw/issues/9929) | 无头 SOP 子轮次分配了 session path 但永不持久化到 session store | OPEN · blocked | 暂无 |
| 🟡 P1 / P3 | [#9710](../../zeroclaw-labs/zeroclaw/issues/9710)、[#9706](../../zeroclaw-labs/zeroclaw/issues/9706) | macOS 截图与 Edge TTS 临时文件未在所有退出路径清理 | **已关闭** | [#9709](../../zeroclaw-labs/zeroclaw/pull/9709) ✅ |
| 🟢 P3 | [#9951](../../zeroclaw-labs/zeroclaw/issues/9951) | WeChat 渠道代码及其 51 个单元测试在 CI 中永不编译/执行（`channel-wechat` feature 未在 CI 中开启） | **已关闭** | 暂无 |
| 🟢 P1 / CI | [#9643](../../zeroclaw-labs/zeroclaw/issues/9643) | `wit/VERSIONING.md` 未分类"为现有枚举添加新变体"，导致既有插件无法实例化 | **已关闭** | 文档型，需补充 |

**稳定性观察**：昨日闭合 5 个 Bug，整体修复路径较为顺畅；但 **P2 阻断项（blocked）** 仍有 6 个以上（[#9880](../../zeroclaw-labs/zeroclaw/issues/9880)、[#9887](../../zeroclaw-labs/zeroclaw/issues/9887)、[#9945](../../zeroclaw-labs/zeroclaw/issues/9945)、[#9810](../../zeroclaw-labs/zeroclaw/issues/9810)、[#9598](../../zeroclaw-labs/zeroclaw/issues/9598)、[#9631](../../zeroclaw-labs/zeroclaw/issues/9631)、[#9929](../../zeroclaw-labs/zeroclaw/issues/9929)），提示 v0.9.0 路线图存在显著的依赖链阻塞。

---

## 6. 功能请求与路线图信号

**高潜力 / 已具备实现的 Feature**：

| 议题 | 关联实现 PR | 进入 v0.9.0 的概率 |
|------|------------|--------------------|
| [#9631](../../zeroclaw-labs/zeroclaw/issues/9631) · OpenRouter `session_id` 缓存亲和 | 暂无 | 高（节省 token 成本明确） |
| [#9895](../../zeroclaw-labs/zeroclaw/issues/9895) · Telegram `/model` 按 provider 分组 + 分页选择器 | 暂无 | 中高（移动端痛点清晰） |
| [#6998](../../zeroclaw-labs/zeroclaw/issues/6998) · Schema 校验的 memory consolidation + bounded fallback | 暂无 | 中（属 [memory] 风险面长期议题） |
| [#5907](../../

</details>

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*