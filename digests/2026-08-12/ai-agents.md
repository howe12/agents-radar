# OpenClaw 生态日报 2026-08-12

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-08-12 01:20 UTC

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

# OpenClaw 项目日报
**日期：2026-08-12**

---

## 1. 今日速览

OpenClaw 项目今日维持高强度开发节奏：过去 24 小时内共发生 **500 条 Issue 更新**（392 条新开/活跃、108 条已关闭）与 **500 条 PR 更新**（282 条待合并、218 条已合并/关闭），无新版本发布。Issues 与 PRs 数量持平，但已关闭率约 21%（Issue）/43%（PR），表明社区 PR 流转效率显著高于 Issue 处置效率。讨论最热烈的 #121058（64 条评论）与 #116201（60 条评论）均涉及生产环境稳定性，反映当前痛点集中在**会话状态管理、流式响应可靠性、provider 状态泄漏**等领域。

---

## 2. 版本发布

⚠️ **今日无新版本发布**。需关注近期动态：

- **#121675**（已关闭，P0）：2026.8.1-beta.1 因未同步重发 `@openclaw/*` 配套插件，导致启动收敛守卫（convergence guard）将 gateway 推入不可恢复的启动循环。该问题已在主干修复并关闭，**后续 beta/RC 发布需严格保持 core 与插件的 lockstep 版本对齐**。
  → https://github.com/openclaw/openclaw/issues/121675

---

## 3. 项目进展

### 今日合并/关闭的重要 PR

| PR | 主题 | 状态 | 意义 |
|---|---|---|---|
| [#106402](https://github.com/openclaw/openclaw/pull/106402) | 限制 JSON 字符串测量的内存占用 | 已关闭 | 修复 CJK 字符串在 25 MiB worker payload 阈值附近的冗余全量拷贝，platinum hermit 评级 |
| [#122366](https://github.com/openclaw/openclaw/pull/122366) | 首次渲染时保留动态 select 值 | 已关闭 | 修复 Activity/Debug/Channels 筛选器显示不一致 |
| [#122360](https://github.com/openclaw/openclaw/pull/122360) | 隔离 chat 测试 fixture 与 provider 发现 | 已关闭 | 解除 router 测试因 mock 初始化时机导致的瞬时故障 |

### 今日关闭的关键 Issue

- [#92201](https://github.com/openclaw/openclaw/issues/92201) Anthropic 流式 thinking 签名重放时偶发无效 → 错误文本被泛化导致恢复包装器未触发。
- [#92460](https://github.com/openclaw/openclaw/issues/92460) 隔离 cron 完成宣告器在最终 controller 返回时丢弃显式 `delivery.channel`。
- [#96827](https://github.com/openclaw/openclaw/issues/96827) `message_tool_only` 模式下 agent 完成 source reply 后未终止运行，导致同一 run 内自回复级联。
- [#89315](https://github.com/openclaw/openclaw/issues/89315) gateway 堆在 systemd --user 长跑部署中无界增长，被 cgroup OOM kill。
- [#121675](https://github.com/openclaw/openclaw/issues/121675) `2026.8.1-beta.1` 启动循环（见上）。
- [#119009](https://github.com/openclaw/openclaw/issues/119009) Discord 频道模型调用重试风暴：3h11m 内调用 1081 次，累计 $204.74 账单。

**推进评估**：今日合并/关闭量以测试基础设施和小型修复为主，核心架构变更仍在 review 中（#119950 安全修复、#120443 Codex 绑定修复、#121327 工具 profile 冻结均等待 maintainer look）。**项目整体处于稳定性修复密集期，未见重大新功能落地。**

---

## 4. 社区热点

### 评论数 TOP Issues（社区痛点集中）

| Issue | 评论数 | 👍 | 主题 |
|---|---|---|---|
| [#121058](https://github.com/openclaw/openclaw/issues/121058) | 64 | 0 | #116277 关闭后静默回复失败仍持续复发，监控 cron 已记录新发生案例 |
| [#116201](https://github.com/openclaw/openclaw/issues/116201) | 60 | 0 | Realtime 语音会话的 provider/consult 状态可能无界保留 |
| [#25592](https://github.com/openclaw/openclaw/issues/25592) | 42 | 1 | tool 调用之间的中间文本泄漏至 Slack/iMessage 频道 |
| [#7707](https://github.com/openclaw/openclaw/issues/7707) | 38 | 0 | 按来源标记 memory 信任等级以防御 memory poisoning 攻击 |
| [#68596](https://github.com/openclaw/openclaw/issues/68596) | 15 | **8** | 可配置 streaming watchdog 超时阈值 |

### 👍 反应数 TOP

- **#68596**（8 👍）：可配置 streaming watchdog 超时——用户希望针对长推理模型（kimi-k2.5、DeepSeek-R1）自定义 30s 默认阈值。
- **#42840**（10 👍，但未进 TOP 50 展示）：MathJax/LaTeX 支持——科学计算用户的强需求。
- **#87744**（3 👍）：Codex-backed Telegram 在 2026.5.27 后反复超时未达 `turn/completed`。

### 诉求分析

社区讨论集中于三类核心矛盾：
1. **生产稳定性 vs 快速迭代**：多个 P1 长期未根治（如 #121058 持续复发），用户对"issue 关闭≠问题消失"的模式明显不满。
2. **Memory 安全与可信度**：#7707（38 评论）与 #25592（42 评论）共同指向 memory 中毒攻击面，已构成显著的 feature request 势头。
3. **模型无关性缺位**：流式超时、provider 故障分类、会话上下文上限等均强耦合于特定 provider（Anthropic、DeepSeek、Codex），社区呼吁抽象层。

---

## 5. Bug 与稳定性

按优先级排列（均带原文链接）：

### 🔴 P0 - 紧急 / 影响系统启动

- **#121675**（已关闭）`2026.8.1-beta.1` 启动循环 → [链接](https://github.com/openclaw/openclaw/issues/121675)

### 🟠 P1 - 高优先级

| Issue | 标题 | 影响 | Fix PR? |
|---|---|---|---|
| [#121058](https://github.com/openclaw/openclaw/issues/121058) | 静默回复失败复发 | session-state, message-loss | ❌ 待修复 |
| [#116201](https://github.com/openclaw/openclaw/issues/116201) | Realtime 语音无界状态 | session-state | ❌ 待修复 |
| [#25592](https://github.com/openclaw/openclaw/issues/25592) | 工具调用间文本泄漏 | session-state, security | ❌ 待修复 |
| [#87744](https://github.com/openclaw/openclaw/issues/87744) | Codex Telegram `turn/completed` 永不终止 | message-loss | ❌ 待修复 |
| [#74586](https://github.com/openclaw/openclaw/issues/74586) | AM embedded run 误判 `memory_search` 超时 | session-state, auth-provider | ❌ 待修复 |
| [#39476](https://github.com/openclaw/openclaw/issues/39476) | A2A `sessions_send` 互发导致重复消息 | message-loss | ❌ 待修复 |
| [#84516](https://github.com/openclaw/openclaw/issues/84516) | Codex 长回复 ~1000 字符静默截断 | message-loss | ❌ 待修复 |
| [#47975](https://github.com/openclaw/openclaw/issues/47975) | Subagent 会话完成后未清理，main session 卡死 | session-state, message-loss | ❌ 待修复 |
| [#121953](https://github.com/openclaw/openclaw/issues/121953) | Cron agent 在 DeepSeek 因 `[cron:` 前缀被降级 | other | ✅ [#120443](https://github.com/openclaw/openclaw/pull/120443) 关联 |
| [#58957](https://github.com/openclaw/openclaw/issues/58957) | 长上下文模型切换静默失败 | session-state | ❌ 待修复 |
| [#80498](https://github.com/openclaw/openclaw/issues/80498) | Subagent 完成宣告过早/重复 | session-state, message-loss | ❌ 待修复 |
| [#71689](https://github.com/openclaw/openclaw/issues/71689) | SQLite 镜像损坏导致任务注册表启动失败 | session-state, data-loss | ❌ 待修复 |
| [#112668](https://github.com/openclaw/openclaw/issues/112668) | `sessions_yield` abort-settle 超时丢消息 | session-state, message-loss | ❌ 待修复 |
| [#83337](https://github.com/openclaw/openclaw/issues/83337) | 插件/核心版本漂移导致频道静默失效 | message-loss, auth-provider | ❌ 待修复 |
| [#106704](https://github.com/openclaw/openclaw/issues/106704) | `sessions_yield` 首 turn 误判为 `ok` 空结果 | session-state, message-loss | ❌ 待修复 |
| [#119009](https://github.com/openclaw/openclaw/issues/119009) | 模型调用重试风暴烧钱 $204 | session-state, message-loss | ❌ 已关闭未根治 |
| [#114020](https://github.com/openclaw/openclaw/issues/114020) | Feishu/Telegram 频道 dispatch 失败 | message-loss | ❌ 待修复 |
| [#40982](https://github.com/openclaw/openclaw/issues/40982) | 3 分钟无输出 watchdog 硬编码 | session-state | ❌ 待修复 |
| [#42820](https://github.com/openclaw/openclaw/issues/42820) | Feishu `message` send 被 poll schema 污染 | message-loss | ❌ 待修复 |
| [#97983](https://github.com/openclaw/openclaw/issues/97983) | iOS/WebChat 消息写入转写但不触发回复 | session-state, message-loss | ❌ 待修复 |

### 🟡 P2 / P3

- [#97616](https://github.com/openclaw/openclaw/issues/97616) P1: hook/tool 子进程未回收 → 僵尸进程累积（实际优先级 P1，标记于 gold shrimp）
- [#57256](https://github.com/openclaw/openclaw/issues/57256) `openclaw status` 误报 mem0 不可用
- [#65538](https://github.com/openclaw/openclaw/issues/65538) 屏幕阅读器逐 token 朗读流式响应（无障碍问题）

**Bug 总数统计**：今日活跃 Issue 中约 60% 为 P1 级，**仅约 15% 有明确关联 fix PR**，积压风险较高。

---

## 6. 功能请求与路线图信号

### 强信号（高评论 / 高 👍）

| Feature | 链接 | 评论 | 👍 | 落地概率 |
|---|---|---|---|---|
| Memory Trust Tagging by Source | [#7707](https://github.com/openclaw/openclaw/issues/7707) | 38 | 0 | 🟢 高（与 #25592 互补，security 标签） |
| 可配置 streaming watchdog 阈值 | [#68596](https://github.com/openclaw/openclaw/issues/68596) | 15 | 8 | 🟢 高（已有 PR 候选 #40982 推动） |
| Per-Agent 成本预算网关强制 | [#42475](https://github.com/openclaw/openclaw/issues/42475) | 21 | 1 | 🟡 中（运营侧需求，需产品决策） |
| MathJax/LaTeX 渲染 | [#42840](https://github.com/openclaw/openclaw/issues/42840) | 8 | 10 | 🟡 中（UI 层独立组件） |
| Session 快照 (`/session save|load`) | [#13700](https://github.com/openclaw/openclaw/issues/13700) | 6 | 0 | 🟡 中 |
| 会话标签/昵称 | [#55249](https://github.com/openclaw/openclaw/issues/55249) | 5 | 0 | 🟡 中 |
| Provider 故障分类 fallback | [#47910](https://github.com/openclaw/openclaw/issues/47910) | 8 | 0 | 🟢 高（与 #83337 协同） |
| 多 Azure/Teams 机器人支持 | [#71058](https://github.com/openclaw/openclaw/issues/71058) | 8 | 1 | 🟡 中 |
| SDK app-client happy path 稳定化 | [#74704](https://github.com/openclaw/openclaw/issues/74704) | 8 | 1 | 🟢 高（[#118977](https://github.com/openclaw/openclaw/pull/118977) 已在 PR） |

### 已进入 PR 阶段的功能

- **One-paste device pairing**：[#120768](https://github.com/openclaw/openclaw/pull/120768)（XL size、waiting on author）— 计划里程碑 3。
- **Realtime transcription WebSocket subprotocol**：[#118977](https://github.com/openclaw/openclaw/pull/118977) — 支持 FunASR 等上游子协议协商。
- **Subagent completionTarget parent-only routing**：[#101248](https://github.com/openclaw/openclaw/pull/101248) — 替代原 announceTarget 方案。
- **Perplexity `search_context_size`**：[#96937](https://github.com/openclaw/openclaw/pull/96937) — 关闭 #84872。
- **Onboarding 加入 memory/embedding 必选步骤**：[#16670](https://github.com/openclaw/openclaw/issues/16670)（feature request 阶段）。

### 路线图信号总结

短期 1-2 个版本内**最可能落地**：
1. 设备配对 UX 改进（#120768）
2. WebSocket 子协议扩展（#118977）
3. Provider failover 智能分类（#47910 + #83337 合并方向）
4. Memory trust 标签（安全性优先级）

中期 3-6 个月：成本预算、多 Teams 机器人、Per-agent TTS/STT（[#66252](https://github.com/openclaw/openclaw/issues/66252)）、session 快照。

---

## 7. 用户反馈摘要

### 真实痛点

**A. 静默失败引发信任危机**
> #121058：用户在 #116277 关闭后仍观察到 silent reply 失败，监控 cron 持续记录新发生案例。用户对"issue 关闭 ≠ 问题解决"的处理流程表达不满，建议将回归监测纳入标准流程。

**B. 计费与失控重试**
> #119009：单一 Discord 频道在 3 小时内触发 1081 次模型调用，烧掉 $204。retry 循环的 progress clock 重置机制使"stalled"判定永不触发。这是 **生产环境直接经济损失**。

**C. Provider-specific 行为碎片化**
> #87744 / #121953 / #106704 等多条 issue 显示 OpenClaw 的可靠性严重依赖具体 provider

---

## 横向生态对比

# 2026-08-12 AI 智能体开源生态横向对比分析

---

## 1. 生态全景

今日生态呈现**"质量巩固 vs 架构转型"双轨分化**：OpenClaw、IronClaw、CoPaw、LobsterAI 等成熟项目进入"修 Bug + 体验对齐"的小步快跑阶段；NanoBot、Hermes、ZeroClaw 则同步背负"修 Bug + 推 RFC"两条轨道，合并率显著走低，RFC 决策队列已出现可观察的积压。横跨多项目的**共性痛点**集中在四个方向——会话状态管理失稳、Provider 故障域不隔离、Agent 循环失控、内存/凭据安全；而**演进共性方向**则指向 MCP 协议标准化、Chat Completions 客户端兼容、工具 Schema 按需加载、本地优先数据架构。当日**仅 LobsterAI（2026.8.11）与 CoPaw（v2.1.0-beta.3）有版本产出**，其余项目均处于评审/合并窗口期。

---

## 2. 各项目活跃度对比

| 项目 | Issues 更新 | PR 更新 | Issue 关闭率 | PR 合并/关闭率 | 版本发布 | 健康度 |
|---|---|---|---|---|---|---|
| **OpenClaw** | 500 (新/活 392, 闭 108) | 500 (待 282, 合 218) | ~21.6% | ~43.6% | ❌ | 🟠 承压 — P1 长期未根治 |
| **NanoBot** | 6 (活 2, 闭 4) | 140 (待 21, 合/关 119) | ~67% | ~85% | ❌ | 🟢 高吞吐 — 历史 PR 批量清理 |
| **Hermes Agent** | 48 (净 +46) | 45 (待 40, 合 5) | ~4% | ~11% | ❌ | 🟠 高活跃低落地 — Windows 回归潮 |
| **PicoClaw** | 3 (新 1, 闭 1, 活 1) | 6 (6 OPEN, 4 stale) | ~33% | 0% | ❌ | 🔴 维护放缓 — 16 天 PR 无响应 |
| **NanoClaw** | 1 (活 1) | 8 (待 5, 合 3) | 0% | ~37.5% | ❌ | 🟡 中等 — 有 P0 静默丢失 Bug |
| **NullClaw** | 0 | 0 | — | — | ❌ | ⚫ 静默 |
| **IronClaw** | 23 | 50 (待 25, 合 25) | 较高（P0/P1 全闭环） | 50% | ❌ | 🟢 高吞吐稳态化 |
| **LobsterAI** | 3 (闭 3) | 7 (待 1, 合 6) | 100% | ~85% | ✅ **2026.8.11** | 🟢 发布冲刺 |
| **TinyClaw** | 0 | 0 | — | — | ❌ | ⚫ 静默 |
| **Moltis** | 0 | 1 (OPEN) | — | 0% | ❌ | 🟡 静默中酝酿（CalDAV） |
| **CoPaw / QwenPaw** | 23 (新/活 9, 闭 14) | 49 (待 24, 合 25) | ~61% | ~51% | ✅ **v2.1.0-beta.3** | 🟠 活跃但承压 — beta 期多 P0 |
| **ZeptoClaw** | 0 | 0 | — | — | ❌ | ⚫ 静默 |
| **ZeroClaw** | 50 | 50 (待 49, 合 1) | ~20% | ~2% | ❌ | 🟠 架构演进 — RFC 决策积压 |

> **注**：表格中"新/活"指新增或活跃条目，"待"指仍 OPEN 的待合并，"合"指已合并/已关闭。

---

## 3. OpenClaw 在生态中的定位

| 维度 | OpenClaw | 同类对照 |
|---|---|---|
| **Issue 体量** | 500 条/日 — 远超第二梯队（ZeroClaw、CoPaw 各 50；IronClaw 23） | 反映最大的用户基础与最广的功能面 |
| **P1 积压** | 19 条 P1 中**仅 3 条有关联 PR** | 高于 NanoBot、IronClaw，低于 ZeroClaw |
| **平台覆盖** | Discord / Feishu / iMessage / Telegram / iOS / WebChat / Codex 等 | 与 LobsterAI、CoPaw 同属"全渠道" |
| **当前阶段** | 稳定性修复密集期 | NanoBot/Hermes 处于"安全 + 重构"期；IronClaw 处于"内核化"期 |
| **核心痛点** | 会话状态泄漏 + 静默失败 + Provider 特定行为碎片化 | 与 LobsterAI 痛点（provider 限流扩散）相似但更严重 |
| **优势** | 文档化最完整、Issue 摘要最详尽、**生产环境反馈最深**（$204 计费事故代表） | 拥有真实经济损失案例 → 反向推动项目优先级重排 |
| **劣势** | "Issue 关闭 ≠ 问题消失"的模式被社区诟病；Provider 抽象层缺位 | 相对 Hermes/ZeroClaw 的架构现代化节奏偏慢 |

**定位判断**：OpenClaw 是生态中的**"功能最广、用户最深、稳定性最承压"的全渠道个人助手代表**。它不是架构最前沿的（那是 IronClaw 的 kernel+ACP、Hermes 的 god-file 分片），也不是最精简的（NanoBot 更轻、LobsterAI 更聚焦 UI），但它是**最能代表"个人 AI 助手在生产环境里真实问题图谱"的项目**。

---

## 4. 共同关注的技术方向

| 技术方向 | 涉及项目 | 共性诉求 |
|---|---|---|
| **会话状态治理** | OpenClaw（#121058/#116201/#47975）、NanoBot（#5256/#5327）、PicoClaw（#3301）、Hermes（#83213） | 子 agent 完成后未清理、Idle 触发重复输出、流式语音状态无界保留 |
| **Provider 故障隔离** | OpenClaw（#83337/#47910）、LobsterAI（#1240 — 单 provider 限流致全站瘫痪）、NanoBot（#4784 — key 串号）、ZeroClaw（#9580/#9900） | 单点 provider 异常扩散到全局，缺乏故障分类与 fallback 抽象 |
| **MCP 协议标准化** | NanoClaw（#3092/#3221 已合并）、CoPaw（#6732/#6874 timeout）、ZeroClaw（#8603 兼容） | 远程 MCP 一等公民化、tool-call 超时、跨 provider 行为统一 |
| **内存/Memory 安全** | OpenClaw（#7707/#25592 — memory trust tagging）、IronClaw（#7505 — mem0 target-alias）、NanoBot

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目日报 — 2026-08-12

## 1. 今日速览

NanoBot 今日呈现**高强度治理与推进**状态。在 24 小时内共处理 140 条 PR 流转（21 条仍待合并，119 条被合并或关闭），同时完成 6 条 Issue 的处理（4 关闭、2 仍活跃），且无新版本发布。值得注意的是，大量标记为 `[conflict]` 的历史 PR（最早可追溯至 2026 年 2 月）被集中清理关闭，表明仓库正经历一次较大幅度的**主线冲突调和与历史积压清理**。与此同时，Agent 循环失控、凭据隔离、Shell 注入等多个影响可用性与安全性的核心问题集中浮现，维护团队响应迅速，整体项目健康度处于**承压但可控**的状态。

---

## 2. 版本发布

本周无新版本发布。鉴于 PR #5342（WebUI 重构）、PR #5283（沙箱隔离）、PR #5344（循环检测）等重要变更仍处于 OPEN 状态，预计下一次发布将具有较多功能密度。

---

## 3. 项目进展

今日最大的进展信号是**大规模历史 PR 清理**与**新一轮稳定性/安全加固并进**：

**主线方向上的关键前进：**
- **PR #5342**：[OPEN] `feat(webui): redesign apps discovery` —— 重构 Apps 页面为 Discover / Installed / All Apps + 自定义 MCP 四区，引入基于 nanobot.wiki 注册表的 Featured 精选集合与离线缓存回退。WebUI 体验层面的一次结构性升级。🔗 [#5342](https://github.com/HKUDS/nanobot/pull/5342)
- **PR #5344**：[OPEN] `fix(agent): warn instead of silently spiraling on repeated identical tool calls` —— 直接针对 Issue #5327 的根因修复，agent 工具调用循环将被显式告警而非默默消耗 `max_iterations`。🔗 [#5344](https://github.com/HKUDS/nanobot/pull/5344)
- **PR #5257**：[OPEN] `fix(agent): bound sustained-goal continuation when the turn goes idle` —— 修复 Issue #5256 中“/goal 触发数十条重复回复”的持续目标失控问题，分别从进入准入和收尾两个方面约束。🔗 [#5257](https://github.com/HKUDS/nanobot/pull/5257)
- **PR #5283**：[OPEN] `feat(workspace): per-session sandbox isolation for non-WebUI channels` —— 为非 WebUI 渠道引入按会话隔离的文件系统沙箱（opt-in），并使用 restricted 模式保证 agent 文件操作不会越界。🔗 [#5283](https://github.com/HKUDS/nanobot/pull/5283)
- **PR #5345**：[OPEN] `[Security] exec.allowPatterns shell-chain bypass` —— 修复 Issue #5306 所披露的 Shell 链式调用绕过 `tools.exec.allowPatterns` 白名单的漏洞。🔗 [#5345](https://github.com/HKUDS/nanobot/pull/5345)
- **PR #5314**：[OPEN] `fix: decode nested JSON tool arguments by schema` —— 修复 Issue #5311，部分 OpenAI 兼容厂商将嵌套对象/数组编码为 JSON 字符串导致 MCP 工具调用校验失败的问题。🔗 [#5314](https://github.com/HKUDS/nanobot/pull/5314)

**历史积压清理（批量关闭冲突 PR）：**
119 条被关闭的 PR 中，绝大多数是历史遗留的 `[conflict]` 状态 PR，建议维护者借此机会发布统一的冲突解决指南。涉及范围包括：
- Xiaomi MiMo Provider 支持 (#2181)
- Kimi-coding 模型映射 (#1367)
- Tavily 搜索工具 (#1321)
- LLM 故障回退模型 (#1199)
- Cron 热重载 (#1114)
- OpenCode Zen Provider (#1094)
- 模型超时环境变量 (#1031)
- Telegram 内联键盘 (#1020)
- Cron 渠道元数据 (#1002)
- 贡献指南文档 (#1383)

这些关闭意味着项目团队尚未接受这些独立贡献（或将其重构为内部实现），但仍代表项目生态活跃度高。今日的整体推进**以稳定性/安全优先为主，功能改进被有意搁置待对齐**。

---

## 4. 社区热点

**最活跃讨论：**
- **Issue #5327**（9 评论，已关闭）— “Nanobot repeats multiple times the same message while reasoning”，作者 fablau 指出 reasoning 阶段会随机重复相同短语（如 “Good points, let me investigate the issue”）。🔗 [#5327](https://github.com/HKUDS/nanobot/issues/5327)
- **Issue #4784**（2 评论，已关闭）— hamb1y 报告 `OpenAICompatProvider._setup_env()` 通过 `os.environ` 全局可变字典写入 provider API key，gateway 模式下覆盖、setdefault 语义存在跨 provider 串号风险。🔗 [#4784](https://github.com/HKUDS/nanobot/issues/4784)
- **Issue #5256**（2 评论，仍 OPEN）— shakewingo 报告 `/goal` 触发情况下等待用户回答期间产生大量重复回复，被系统识别为循环后才终止。🔗 [#5256](https://github.com/HKUDS/nanobot/issues/5256)

**诉求分析：**
背后集中体现了三类用户诉求：（1）对**长任务下 Agent 行为可预测性**的强烈需求；（2）对**凭据生命周期与进程隔离**的基础安全预期；（3）对**交互式命令（如 /goal）的回退与终止语义**清晰化。结合 PR #5344 / PR #5257 / PR #5283 的快速跟进，可以认为维护团队对这些诉求有清晰认知。

---

## 5. Bug 与稳定性

按严重程度排列：

| 级别 | Issue | 描述 | 已关联 Fix | 状态 |
|------|-------|------|------------|------|
| 🔴 高 | [#5306](https://github.com/HKUDS/nanobot/issues/5306) | `exec.allowPatterns` Shell 链式绕过（安全） | ✅ [#5345](https://github.com/HKUDS/nanobot/pull/5345) | 修复 PR OPEN |
| 🟠 中 | [#5256](https://github.com/HKUDS/nanobot/issues/5256) | `/goal` 触发数十条重复回复 | ✅ [#5257](https://github.com/HKUDS/nanobot/pull/5257) | 修复 PR OPEN |
| 🟠 中 | [#4784](https://github.com/HKUDS/nanobot/issues/4784) | Provider API key 经 `os.environ` 全局串号 | ⚠️ 暂无定向 PR（建议在 #5283 沙箱方案中一并考量） | 已关闭 |
| 🟠 中 | [#4783](https://github.com/HKUDS/nanobot/issues/4783) | 安装的 CLI app 子进程继承完整 `os.environ`，凭据泄露 | ⚠️ 暂无定向 PR | 已关闭 |
| 🟡 中 | [#5327](https://github.com/HKUDS/nanobot/issues/5327) | 推理阶段随机重复相同消息 | ✅ [#5344](https://github.com/HKUDS/nanobot/pull/5344) | 已关闭 + 修复 PR OPEN |
| 🟡 中 | [#5341](https://github.com/HKUDS/nanobot/pull/5341) | Windows PowerShell 下 weather workflow 误用 `Invoke-WebRequest` | ✅ PR 自身为修复 | OPEN |
| 🟡 中 | [#5311](https://github.com/HKUDS/nanobot/issues/5311)（已被 PR #5314 引用） | 嵌套 JSON 工具参数被编码为字符串导致校验失败 | ✅ [#5314](https://github.com/HKUDS/nanobot/pull/5314) | 修复 PR OPEN |

**值得提醒**：Issue #4783 与 #4784 已关闭但**未见关联 PR**，需留意“关闭”究竟是修复还是因 PR #5283 的沙箱隔离在另一路径上覆盖。这两条 issue 的真实问题（凭据跨进程/跨 provider 泄漏）在生产环境中影响面广，建议维护者显式说明关闭原因与回归验证方式。

---

## 6. 功能请求与路线图信号

| 需求 | Issue / PR | 候选纳入下一版本的可能性 |
|------|------------|---------------------------|
| OpenRouter Server Tools 支持（Web Search / Web Fetch / Fusion）| [#5333](https://github.com/HKUDS/nanobot/issues/5333)（已关闭） | 🟢 高 — 已关闭通常意味着已通过直接提交或文档解决 |
| Subagent 可配置模型 preset | [#4291](https://github.com/HKUDS/nanobot/pull/4291) | 🟡 中 — 涉及 spawn 工具调用语义，需设计边界 |
| OrcaRouter 作为命名 gateway provider | [#5328](https://github.com/HKUDS/nanobot/pull/5328) | 🟢 高 — Provider 增量扩展对项目路线干扰小 |
| Apps 发现页重构 | [#5342](https://github.com/HKUDS/nanobot/pull/5342) | 🟢 高 — 用户体验明显、视觉驱动 |

整体路线图信号显示：**WebUI / Provider 生态 / Agent 健壮性**是当前三个并行主线，且对 Agent 健壮性的投入（循环检测、目标终止）密度异常高，说明项目方对“Agent 在真实使用中长时间运行稳定性”已经形成明确的产品优先级判断。

---

## 7. 用户反馈摘要

从 Issues 评论中可提炼以下真实用户痛点：

- **Agent “假死”体验令人沮丧**：多位用户在 #5327、#5256 中表达同一类情绪 —— 模型看起来在思考，但实际产出的是对同一句话的微改写重复。这种“看似在工作却没有进展”的现象是用户第一时间最容易感知到的信任损耗点。
- **凭据流向用户难以审计**：#4783、#4784 反映出“用户设置 API key 时假设它是隔离的，结果子进程全拿到了”，这种**信任模型与实现不一致**的体验对开发者用户来说尤其敏感。
- **路由型 vs 非路由型 Provider 的行为差异未被显式说明**：用户对 `setdefault` 与赋值覆盖之间的差异有疑惑，提示项目在 Provider 配置文档上需要更明确的契约化说明。
- **OOSS 用户对配置灵活度的隐性诉求**：#4784 / #5306 的出现暗示用户会把 nanobot 部署到多 Provider、多 subprocess 的复杂生产环境中，因此对**默认安全姿态**提出更高要求。

满意度的正反馈主要来自 Provider 生态与 Examples/技能样例贡献者，说明社区仍处于建设期，对主动贡献者友好。

---

## 8. 待处理积压

**今日仍 OPEN 的 21 条 PR，按优先级与领域归并提示：**

**Agent 稳定性（P2）：**
- [#5344](https://github.com/HKUDS/nanobot/pull/5344) — 重复工具调用告警
- [#5257](https://github.com/HKUDS/nanobot/pull/5257) — Sustained goal 收尾
- [#5314](https://github.com/HKUDS/nanobot/pull/5314) — 嵌套 JSON 解码
- [#5345](https://github.com/HKUDS/nanobot/pull/5345) — `exec.allowPatterns` 绕过修复

**安全 / 隔离：**
- [#5283](https://github.com/HKUDS/nanobot/pull/5283) — Per-session 沙箱隔离

**Provider 生态：**
- [#5328](https://github.com/HKUDS/nanobot/pull/5328) — OrcaRouter gateway
- [#4291](https://github.com/HKUDS/nanobot/pull/4291) — Subagent 模型预设

**WebUI / DX：**
- [#5342](https://github.com/HKUDS/nanobot/pull/5342) — Apps 重设计
- [#5341](https://github.com/HKUDS/nanobot/pull/5341) — Windows 兼容
- [#4145](https://github.com/HKUDS/nanobot/pull/4145) — Weather Skill (#3958)

**OPEN Issue 提醒：**
- [#5256](https://github.com/HKUDS/nanobot/issues/5256)
- [#5306](https://github.com/HKUDS/nanobot/issues/5306)

**维护者关注建议：**
1. **批量验证关闭冲突 PR 的影响面**：今日关闭的 119 条 PR 多为 `[conflict]`，建议核对这些功能在主线是否已通过其他方式实现，避免用户文档误导。
2. **Issue #4783 / #4784 的修复证据公开化**：凭据隔离问题应补充回归测试与变更说明，以恢复社区信任。
3. **统一 PR 标签语义**：今日大量并发 `[conflict]` 关闭事件表明项目需要一个明确的“冲突 vs 不需要 vs 已合入其它分支”区分机制，便于贡献者判断优先级。

---

*报告基于 2026-08-12 当日 GitHub 数据自动汇总，数据来源：HKUDS/nanobot Issues & Pull Requests API。*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目日报 · 2026-08-12

> 数据来源：[NousResearch/hermes-agent](https://github.com/nousresearch/hermes-agent) GitHub Issues & Pull Requests
> 统计窗口：过去 24 小时

---

## 1. 今日速览

Hermes Agent 今日处于**高强度问题响应与多线重构并行期**：24 小时内 Issues 净增 48 条、PR 新开 45 条，但仅关闭 2 条 Issue 与 5 条 PR，**合并率仅约 10%**，说明大量工作集中于提交与讨论阶段，尚未进入评审落定。讨论度最高的议题延续上一周的"god-file 分片"重构战略（#78647 累计 67 评论），同时 Windows Desktop 安装/更新链路在今日出现集中性 P1 故障报告，整体稳定性出现一定回归信号。无新版本发布。

---

## 2. 版本发布

**无新版本发布**。Hermes 桌面端、Windows 安装路径相关问题（见下文）显示上一版（v0.20.0 / 2026.8.3）尚有未消化缺陷，建议关注下一补丁版本动向。

---

## 3. 项目进展

今日合并/关闭记录较少，但相关 PR 反映出三个明确的推进方向：

| PR | 标题 | 状态 | 推进方向 |
|---|---|---|---|
| [#84187](https://github.com/nousresearch/hermes-agent/pull/84187) | `feat(matrix): add text-only approval controls` | **CLOSED** | Matrix 通道增加纯文本审批控制，保留 `!approve` / `!approve session` / `!approve always` / `!deny` 完整路径 |
| [#83720](https://github.com/nousresearch/hermes-agent/pull/83720) | `fix(gateway): never reap supervised gateway + relaunch on desktop (re)start` | OPEN（P1） | 修复 Desktop 重启导致 WeChat/QQ/Telegram 失声的回归（对应 #83683） |
| [#84125](https://github.com/nousresearch/hermes-agent/pull/84125) | `fix(approval): enforce explicit timeout on smart-approval guardian call` | OPEN | 与 #72500 watchdog 配合，给 smart-approval 加硬超时与可观测性 |
| [#84181](https://github.com/nousresearch/hermes-agent/pull/84181) | `fix(tts): force Opus for local Ogg output` | OPEN | 统一 NeuTTS/Piper/KittenTTS 转码路径，Ogg 容器强制 libopus（修复 #84102） |
| [#84190](https://github.com/nousresearch/hermes-agent/pull/84190) | `refactor(mcp_tool): extract pagination slice R1-2 into tools/mcp_pagination.py` | OPEN | god-file 分片首批字节级迁移落地 |

**整体进度评估**：在"god-file 分片"与"Windows 可靠性"两条主线上，今天迈出了**结构性进展的早期步骤**（R1-2 切片、approval 超时、TTS 转码统一），但绝大多数 PR 仍处于 OPEN 评审阶段，距合并落地尚有距离。

---

## 4. 社区热点

按 24h 内评论数与活跃度排序：

| 排名 | 议题 | 链接 | 评论数 / 👍 | 焦点 |
|---|---|---|---|---|
| 1 | **Epic: Shard all 20 god files** (P3, refactor) | [#78647](https://github.com/nousresearch/hermes-agent/issues/78647) | 67 / 0 | 全仓库 20 个 god-file 分片战略 |
| 2 | **Feature: Lazy Tool Schema Loading** (P3, feature) | [#6839](https://github.com/nousresearch/hermes-agent/issues/6839) | 33 / **18**👍 | 每次 API 调用 ~3500–5000 tokens 的工具 schema 开销 |
| 3 | **Solving the Multi-Tenant Hermes Problem** (P3) | [#34352](https://github.com/nousresearch/hermes-agent/issues/34352) | 25 / 3👍 | 多租户隔离需绕过 hook 系统的内存操作 |
| 4 | **Cross-process turn serialization** (P3) | [#67442](https://github.com/nousresearch/hermes-agent/issues/67442) | 14 | CLI-continuity 跨进程 session 需 DB 级别租约 |
| 5 | **Skills index stale (degraded)** | [#66616](https://github.com/nousresearch/hermes-agent/issues/66616) | 13 | 索引 29.8h 超 26h 阈值，自动化巡检告警 |
| 6 | **Generalize Kanban notifications** (P3) | [#49190](https://github.com/nousresearch/hermes-agent/issues/49190) | 8 | 任务事件流订阅 + 投递适配器注册 |

**诉求解读**：社区最强烈的呼声集中在两个方向——
- **成本与性能**：Lazy Tool Schema Loading 获得最高 👍（18），反映本地模型用户对 token 浪费的强烈不满。
- **架构现代化**：god-file 分片与多租户/跨进程 session 是"先解决地基再谈增长"的代表性诉求。

---

## 5. Bug 与稳定性

按严重程度排列（P1 > P2 > P3）：

### 🔴 P1（紧急）

| Issue | 标题 | 平台 | 是否已有 fix PR |
|---|---|---|---|
| [#83683](https://github.com/nousresearch/hermes-agent/issues/83683) | Desktop 重启后吞掉 gateway，WeChat/QQ/Telegram 失声 | Windows Desktop | ✅ [#83720](https://github.com/nousresearch/hermes-agent/pull/83720) |
| [#83562](https://github.com/nousresearch/hermes-agent/issues/83562) | Desktop 更新后 `Hermes backend exited (0)` | Windows Desktop | ❌ 关联 #62792，PR 待合 |
| [#63717](https://github.com/nousresearch/hermes-agent/issues/63717) | Windows Desktop 更新失败的 7 项根因综合诊断 | Windows Desktop | ❌ |
| [#62792](https://github.com/nousresearch/hermes-agent/issues/62792) | Desktop 后端走 venv Python，.pyd 锁阻塞更新 | Windows Desktop | ❌ |
| [#81410](https://github.com/nousresearch/hermes-agent/issues/81410) | 单进程 Nous OAuth 刷新偶发 `invalid_grant` | Desktop（auth） | ❌ |

**关键观察**：今日 P1 中有 **4/5 与 Windows Desktop 安装/更新路径相关**，构成明显的"Windows 安装链路回归潮"。已有 fix 提案但尚未合并。

### 🟠 P2（高）

| Issue | 标题 | 平台 |
|---|---|---|
| [#83213](https://github.com/nousresearch/hermes-agent/issues/83213) | `/new` 后后台进程完成通知路由错乱 | gateway / sessions |
| [#73779](https://github.com/nousresearch/hermes-agent/issues/73779) | Feishu 多路复用 WS 跨 loop 崩溃 | gateway / plugins |
| [#68760](https://github.com/nousresearch/hermes-agent/issues/68760)（duplicate） | `hermes.exe` 更新期间被锁 WinError 32 | Windows |
| [#82186](https://github.com/nousresearch/hermes-agent/issues/82186)（duplicate） | Desktop 更新按钮 WinError 5 | Windows |
| [#84169](https://github.com/nousresearch/hermes-agent/issues/84169) | 空 `tool_calls` 数组让严格 provider 400 | provider/deepseek |
| [#84171](https://github.com/nousresearch/hermes-agent/issues/84171) | webhook `--deliver telegram/all` 静默失败 | gateway / webhook |
| [#84172](https://github.com/nousresearch/hermes-agent/issues/84172) | `platform_toolsets.webhook` 配置被忽略 | gateway / webhook |
| [#80222](https://github.com/nousresearch/hermes-agent/issues/80222) | delegate_task 缺少每调用模型/推理覆盖 | agent / config |

### 🟢 P3 / 其他

- [#83427](https://github.com/nousresearch/hermes-agent/issues/83427) browser_exec PYTHONPATH 指向 venv 时 `pydantic_core` 缺失
- [#80016](https://github.com/nousresearch/hermes-agent/issues/80016) Email adapter IMAP 失败被静默吞掉 → ✅ [#80032](https://github.com/nousresearch/hermes-agent/pull/80032) fix PR 已在评审
- [#84102](https://github.com/nousresearch/hermes-agent/issues/84102) 本地 TTS Ogg 容器被 ffmpeg 默认成 Vorbis → ✅ [#84181](https://github.com/nousresearch/hermes-agent/pull/84181)
- [#29590](https://github.com/nousresearch/hermes-agent/issues/29590) vision_tools.py 硬编码 max_tokens+冗长 prompt 对推理模型高延迟

---

## 6. 功能请求与路线图信号

按"已有 PR 跟进"优先级排列：

| 优先级 | 功能请求 | 现有 PR | 落地可能性 |
|---|---|---|---|
| 🟢 高 | **Lazy Tool Schema Loading**（#6839） | 暂无直接 PR，但 PR [#82243](https://github.com/nousresearch/hermes-agent/pull/82243) 在 `execute_code` 内组合 deferred tools，思路相通 | 高（高 👍 + 已拆解） |
| 🟢 高 | **Webhook 投递目标校验**（#84171/#84172） | ✅ [#84184](https://github.com/nousresearch/hermes-agent/pull/84184) | 极高 |
| 🟢 高 | **Kanban 事件底座通用化**（#49190） | 暂无 | 中（架构改动） |
| 🟡 中 | **per-call model/reasoning override on delegate_task**（#80222） | 暂无 | 中（影响 schema） |
| 🟡 中 | **Slack 多消息分节投递**（cron） | ✅ [#84182](https://github.com/nousresearch/hermes-agent/pull/84182)（默认关闭） | 高 |
| 🟡 中 | **Antigravity（Google）作为一等 OAuth provider**（#83244） | 暂无 | 中（生态合作） |
| 🟡 中 | **多租户 Hermes**（#34352） | 暂无直接 PR | 低（需绕过 hook 系统重构） |
| 🟢 高 | **Desktop 标签页关闭控件 + 焦点恢复** | ✅ [#83051](https://github.com/nousresearch/hermes-agent/pull/83051) | 高 |
| 🟡 中 | **execute_code 组合 deferred MCP/plugin 工具** | ✅ [#82243](https://github.com/nousresearch/hermes-agent/pull/82243) | 高 |

**信号判断**：路线图在向"**工具/会话精细化控制** + **Desktop/Windows 稳定性**"倾斜，Lazy Tool Schema 与 multi-tenant 是中长期方向，短期版本大概率先合入 webhook 校验、TTS 转码、approval 超时等小而确定的修复。

---

## 7. 用户反馈摘要

从 Issue 评论与描述中提炼的真实用户痛点：

- **💸 Token 浪费是本地模型用户的第一痛点**："每次 API 调用注入全部 50+ 工具 schema，3.5k–5k tokens 浪费"（#6839）。本地推理用户对成本敏感度极高。
- **🪟 Windows 安装链路集中失声**：4 条 P1 Issue 反映"Desktop 升级即破坏 gateway"、"update 按钮按不动"、"backend exited 0"，用户描述为"regression"——上次升级能用，这次升级反而不能用。
- **📨 网关静默失败令人沮丧**：WeChat/QQ/Telegram "go completely silent"，Email IMAP 失败被空异常吞掉——用户报告"看不出哪里坏了"。
- **🔒 OAuth 中途失效**："invalid_grant" 单进程场景下让用户被迫重连，触发安全边界焦虑（#81410，关联 `risk-security-boundary`）。
- **🌍 多语言小问题**：PT-BR 写法的 `R$ 15.4M` 被 remark-math 误解析为行内数学（#57540 → [#84183](https://github.com/nousresearch/hermes-agent/pull/84183) fix）。
- **🔌 插件信任链缺失**：tampered `__init__.py` 在被拒之前可执行 top-level 后门代码（#83724 修复），安全边界获社区认可。
- **🤝 协作满意度**：god-file 分片 Epic（#78647）由维护者 andrexibiza 系统化推进，长期讨论热度说明社区认同"分片是正确方向，无人想回滚"。

---

## 8. 待处理积压

**长期未关闭的高优先级项**（按创建时间倒序优先列出仍处于 OPEN

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报

**日期**：2026-08-12
**项目**：[sipeed/picoclaw](https://github.com/sipeed/picoclaw)
**当前版本**：v0.3.1（2cf030d2）

---

## 1. 今日速览

PicoClaw 今日整体活跃度处于**中等偏低**水平。Issues 端有 3 条更新（新开 1 条、活跃 1 条、关闭 1 条），PR 端有 6 条更新但**全部仍处于 OPEN 状态，无任何合并或关闭**。值得注意的是，6 条 PR 中有 4 条已被标记为 `[stale]`，其中 3 条更新集中在 8 月 3 日，至今未见维护者响应或合并动作，提示项目维护节奏可能放缓，存在 PR 积压与社区反馈响应不及时的风险。

---

## 2. 版本发布

⚠️ 今日无新版本发布。当前正式版本仍为 [v0.3.1](https://github.com/sipeed/picoclaw) （commit `2cf030d2`）。

---

## 3. 项目进展

⚠️ **今日无 PR 合并或关闭**，项目主线代码无实质推进。

虽然 PR 提交活跃（共 6 条），但维护者尚未对任何一条 PR 进行评审或合并动作。当日动作仅限于：
- 关闭 1 条被标记为 stale 的 Issue（[#3294](https://github.com/sipeed/picoclaw/issues/3294)）。
- 新开 1 条 Bug 报告（[#3328](https://github.com/sipeed/picoclaw/issues/3328)）并由同一作者当天提交修复 PR（[#3329](https://github.com/sipeed/picoclaw/pull/3329)）。

**健康度提示**：建议维护者优先评审 [#3329](https://github.com/sipeed/picoclaw/pull/3329)（快速修复）+ [#3314](https://github.com/sipeed/picoclaw/pull/3314)（功能性 Bug 修复），以恢复 PR 流转节奏。

---

## 4. 社区热点

| 排名 | 条目 | 类型 | 评论数 | 链接 |
|------|------|------|--------|------|
| 🥇 | /clear 与 session auto-compression 在路由 agent 中失效 | Issue | 3 | [#3301](https://github.com/sipeed/picoclaw/issues/3301) |
| 🥈 | /list models 仅显示当前模型 | Issue（已关闭 stale） | 3 | [#3294](https://github.com/sipeed/picoclaw/issues/3294) |
| 🥉 | routed-agent 上下文管理修复 PR | PR | — | [#3316](https://github.com/sipeed/picoclaw/pull/3316) |

**热点分析**：
- **多 agent 路由场景下的会话状态管理** 是当前社区最关心的议题，[Issue #3301](https://github.com/sipeed/picoclaw/issues/3301) 与 [PR #3316](https://github.com/sipeed/picoclaw/pull/3316) 直接呼应，揭示了用户在使用 dispatch rules 路由不同 Discord/Telegram channel 到不同 agent 时，对**会话记忆、压缩、上下文隔离**的强诉求。
- 用户 [@j-v](https://github.com/sipeed/picoclaw) 在该议题上既报 Bug 又提 PR，体现了较高的社区参与度。
- 关于 `/list models` 命令行为与文档不符的吐槽（[#3294](https://github.com/sipeed/picoclaw/issues/3294)）虽已关闭，但用户的核心诉求——**配置可见性与文档一致性**——并未真正解决。

---

## 5. Bug 与稳定性

按严重程度排序：

### 🔴 P0 - 功能失效类

**1. /clear 与 session auto-compression 在路由 agent 中不工作**
- 编号：[#3301](https://github.com/sipeed/picoclaw/issues/3301)
- 报告者：j-v
- 影响：使用 dispatch rules 路由到非默认 agent 的会话，无法清除历史、不会自动压缩，**直接破坏核心功能**
- 环境：v0.3.1 / Raspberry Pi / Discord + Telegram / DeepSeek via OpenCode Go
- ✅ **已有 Fix PR**：[#3316](https://github.com/sipeed/picoclaw/pull/3316)（仍 OPEN，已标 stale）

**2. customAllowPatterns 实际不生效（默认拒绝规则覆盖自定义允许列表）**
- 编号：[PR #3314](https://github.com/sipeed/picoclaw/pull/3314)
- 报告者：j-v
- 影响：用户在自定义允许列表中加了 `git push` 等命令但 agent 仍无法执行，**安全策略与用户预期严重不符**
- ✅ **已提交修复 PR**，待评审

### 🟡 P1 - 配置无效类

**3. LINE webhook_host / webhook_port 配置项无人读取**
- 编号：[Issue #3328](https://github.com/sipeed/picoclaw/issues/3328)
- 报告者：qing-wang
- 影响：配置文件存在但毫无作用，**文档误导 + 沉默失败**，对 LINE 集成用户极不友好
- ✅ **当日即由同一作者 ex-takashima 提交修复 PR**：[#3329](https://github.com/sipeed/picoclaw/pull/3329)，改为 warn-on-inert，建议优先合并

### 🟢 P2 - 信息显示类

**4. /list models 命令仅显示当前模型**
- 编号：[Issue #3294](https://github.com/sipeed/picoclaw/issues/3294)
- 状态：❌ **已作为 stale 关闭，未修复**

---

## 6. 功能请求与路线图信号

今日虽无显式 feature request 类型 Issue，但通过 PR 可推断用户关注的演进方向：

| 方向 | PR | 信号强度 |
|------|-----|----------|
| 🔍 **多搜索 provider 支持**（Exa 集成） | [#3299](https://github.com/sipeed/picoclaw/pull/3299) | ⭐⭐⭐ 高 |
| 📱 **Telegram Topic 场景扩展**（私人 bot 聊天支持） | [#3315](https://github.com/sipeed/picoclaw/pull/3315) | ⭐⭐⭐ 高 |
| 📊 **LLM 调试可观测性增强**（prompt cache tokens 日志） | [#3317](https://github.com/sipeed/picoclaw/pull/3317) | ⭐⭐ 中 |
| 🤖 **多 agent 路由的会话状态正确性** | [#3316](https://github.com/sipeed/picoclaw/pull/3316) | ⭐⭐⭐ 高（伴随强烈 Bug 报告） |

**路线图预判**：若下个版本希望显著提升用户体验，**多 agent 会话状态修复（#3316）** 和 **Exa 搜索 provider（#3299）** 最有可能被纳入，二者分别解决稳定性与功能丰富度两个核心维度。

---

## 7. 用户反馈摘要

从 Issues 评论中提炼的真实用户痛点：

**😟 不满意 / 痛点**
- **「配置了等于没配置」**：LINE 用户的 webhook_host/webhook_port 完全静默失效（[#3328](https://github.com/sipeed/picoclaw/issues/3328)），反映文档与实现脱节。
- **「文档说能做的功能实际上做不到」**：customAllowPatterns 测试通过但实际不生效（[#3314](https://github.com/sipeed/picoclaw/pull/3314)），挫败感强。
- **「多 agent 场景下基础会话能力缺失」**：无法清空、无法自动压缩、无法记住历史（[#3301](https://github.com/sipeed/picoclaw/issues/3301)），让用户对 v0.3.1 的多 agent 能力产生质疑。

**😊 满意 / 积极信号**
- 用户 j-v 在发现 Bug 后主动提交对应 Fix PR（[#3314](https://github.com/sipeed/picoclaw/pull/3314)、[#3316](https://github.com/sipeed/picoclaw/pull/3316)），说明**核心用户对项目有较强归属感**，愿意贡献代码。
- 用户 ex-takashima 在发现 LINE 配置 Bug 当日即报 Issue 当日即提 PR（[#3328](https://github.com/sipeed/picoclaw/issues/3328) + [#3329](https://github.com/sipeed/picoclaw/pull/3329)），社区响应速度良好。

---

## 8. 待处理积压 ⚠️

**健康度告警**：以下 PR 已提交 ≥8 天但仍 OPEN 且被标记 `[stale]`，维护者长时间未响应：

| PR | 提交日期 | 等待天数 | 类别 | 链接 |
|----|----------|----------|------|------|
| #3299 | 2026-07-26 | **16 天** | 功能：Exa 搜索 provider | [#3299](https://github.com/sipeed/picoclaw/pull/3299) |
| #3314 | 2026-08-03 | **8 天** | Bug 修复：customAllowPatterns | [#3314](https://github.com/sipeed/picoclaw/pull/3314) |
| #3315 | 2026-08-03 | **8 天** | 功能：Telegram private chat topics | [#3315](https://github.com/sipeed/picoclaw/pull/3315) |
| #3316 | 2026-08-03 | **8 天** | Bug 修复：routed-agent 上下文 | [#3316](https://github.com/sipeed/picoclaw/pull/3316) |
| #3317 | 2026-08-04 | **7 天** | 功能：cache tokens 日志 | [#3317](https://github.com/sipeed/picoclaw/pull/3317) |

**🔔 维护者建议行动**：
1. 立即评审 [#3329](https://github.com/sipeed/picoclaw/pull/3329) + [#3314](https://github.com/sipeed/picoclaw/pull/3314) + [#3316](https://github.com/sipeed/picoclaw/pull/3316) —— 三条均为低风险、高价值的 Bug 修复。
2. 重新评估 [#3299](https://github.com/sipeed/picoclaw/pull/3299)（Exa provider）是否纳入下一版本，给作者明确反馈。
3. 关注 [#3294](https://github.com/sipeed/picoclaw/issues/3294) 关闭后留下的 UX 债：/list models 命令行为应与文档对齐。

---

## 📊 项目健康度速览

| 指标 | 状态 | 备注 |
|------|------|------|
| 版本节奏 | 🟡 一般 | 仍停在 v0.3.1 |
| Issue 响应 | 🟢 良好 | 新 Bug 当日即有 PR 对应 |
| PR 评审节奏 | 🔴 需关注 | 4 条 PR 已 stale，最长 16 天未动 |
| 社区活跃度 | 🟢 良好 | 用户主动提交高质量修复 PR |
| 文档一致性 | 🟡 待提升 | 配置项定义与实现存在脱节 |

**总体评价**：社区侧热度不减、贡献质量较高，但**维护侧响应出现放缓迹象**，建议项目维护者介入以恢复 PR 流转节奏，避免贡献者流失。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目日报 | 2026-08-12

---

## 📌 今日速览

NanoClaw 在过去 24 小时整体处于**中等活跃度**的开发维护期，共触达 1 条 Issue 与 8 条 PR，但**无新版本发布**。PR 流转节奏明显高于日常，3 条 PR 完成合并/关闭（含 MCP 远程服务器支持两条核心 PR），同时模板插件化、升级事务化、消息去重等核心议题同步推进。社区侧报出 1 条与"消息静默丢失"相关的潜在严重 Bug，已开始引发关注。项目处于"内部重构收尾 + 新能力交付"的并行节奏中。

---

## 🚀 版本发布

今日**无新版本发布**。最近一轮发布窗口尚未开启，建议关注 master 分支合并窗口与下个 tag 节奏。

---

## 📈 项目进展

今日有 3 条 PR 完成合并/关闭，对项目能力推进具有实质意义：

### 1. 远程 Streamable HTTP MCP 服务支持（Claude 引擎端）— ✅ #3092 已关闭
- **链接**：https://github.com/qwibitai/nanoclaw/pull/3092
- **贡献者**：amit-shafnir
- **意义**：为 NanoClaw 引擎与 Claude provider 引入 `{ type: 'http', url }` 形式的 MCP 配置项，使远程 MCP 服务成为一等公民，扩展了 Agent 的工具接入能力。

### 2. 远程 MCP 支持延伸至 codex / opencode 适配器 — ✅ #3221 已关闭
- **链接**：https://github.com/qwibitai/nanoclaw/pull/3221
- **贡献者**：amit-shafnir
- **意义**：补齐 codex 与 opencode provider 对 HTTP 类型 MCP 的支持，避免配置写入时崩溃，统一了多 provider 下的 MCP 行为模型。

### 3. Tavily MCP 工具技能合并 — ✅ #3190 已关闭
- **链接**：https://github.com/qwibitai/nanoclaw/pull/3190
- **贡献者**：manisrinivasan2k1
- **意义**：以 Utility Skill 形式新增 Tavily MCP 搜索工具，为 Agent 接入实时网页检索能力，对个人助手/研究类场景是直接增益。

**整体评估**：今日的合并动作集中在**远程 MCP 服务标准化**与**工具技能扩展**两条主线，NanoClaw 在"Agent 工具生态"的广度上明显向前推进了一步；同时 #3092 → #3221 的合并序列反映出 MCP 远程化在多 provider 间的协同收敛，是该项目工具接入层成熟度的重要里程碑。

---

## 💬 社区热点

今日**评论/互动数最高的线程**集中在一条新报出的 Issue 上：

### 🔥 Issue #3226 — 同一会话内消息 ID 复用导致消息静默丢失
- **链接**：https://github.com/qwibitai/nanoclaw/issues/3226
- **作者**：dweekly
- **评论数**：1
- **状态**：OPEN
- **诉求分析**：报告者指出当上游平台在同一会话中复用历史消息 ID 时，inbound 消息会被去重逻辑悄悄丢弃，用户侧完全没有感知。该问题直击 AI Agent 系统的核心可靠性维度——**消息是否到达**，对任何把 NanoClaw 用作个人 AI 助手的用户来说都属于"不可接受的失明"。这是少有的高优先级功能性 Bug，建议维护者优先响应。

> ⚠️ 其余 PR 均为代码/工程变更类，暂无显著社区讨论热度。

---

## 🐛 Bug 与稳定性

### 🔴 P0 — Inbound 消息静默丢失（去重逻辑缺陷）
- **Issue**：[#3226](https://github.com/qwibitai/nanoclaw/issues/3226)
- **描述**：上游平台复用历史消息 ID 时，消息被内部去重机制丢弃，agent 完全无感知。
- **严重程度**：**高**——直接影响用户与 Agent 的基本交互可靠性，且失败完全静默。
- **是否已有修复 PR**：❌ **无**，目前仅 1 条评论讨论中，建议尽快认领并复现。
- **建议**：维护者应优先评估是否需要引入"基于 (session, msg_id) 的去重窗口 + 用户可见告警"的双重策略，避免静默失败。

### 🟢 其他与稳定性相关的活跃 PR
- **PR #3195** [OPEN]：升级流程事务化（https://github.com/qwibitai/nanoclaw/pull/3195）— 直接提升升级路径的可靠性，避免半升级状态。
- **PR #3145** [OPEN]：迁移脚本 021，为存量 wiring 补齐 channel destination（https://github.com/qwibitai/nanoclaw/pull/3145）— 防止旧实例升级后路由缺失。
- **PR #2134** [OPEN]：在 launchd plist 中携带 Apple Silicon + Colima 环境变量（https://github.com/qwibitai/nanoclaw/pull/2134）— 修复 macOS 自启动场景下的运行时崩溃。

---

## 💡 功能请求与路线图信号

结合当前活跃 PR，可读出以下清晰的产品方向信号：

| 方向 | 信号 PR | 状态 | 预期归属版本 |
|------|---------|------|--------------|
| **Agent 模板插件化（目录即插件）** | [#3220](https://github.com/qwibitai/nanoclaw/pull/3220), [#2909](https://github.com/qwibitai/nanoclaw/pull/2909) | OPEN（两段式） | 下一大版本（破坏性变更） |
| **远程 MCP 服务多 provider 支持** | [#3092](https://github.com/qwibitai/nanoclaw/pull/3092), [#3221](https://github.com/qwibitai/nanoclaw/pull/3221) | ✅ 已合并 | 即将发布的小版本 |
| **工具生态扩展（Tavily 搜索）** | [#3190](https://github.com/qwibitai/nanoclaw/pull/3190) | ✅ 已合并 | 即将发布的小版本 |
| **升级事务化** | [#3195](https://github.com/qwibitai/nanoclaw/pull/3195) | OPEN | 下一小版本 |
| **历史 wiring 兼容性** | [#3145](https://github.com/qwibitai/nanoclaw/pull/3145) | OPEN | 下一小版本（迁移脚本） |

**判断**：
- 下一**小版本**预计会以"MCP 远程化 + Tavily 搜索技能 + 升级事务化 + 数据库迁移修复"为主线。
- 下一**大版本**将围绕"Agent 模板 → Agent Plugins 1.0.0"破坏性升级展开，使用者需关注目录结构与 SKILL.md 规范的变更。

---

## 🗣️ 用户反馈摘要

今日 Issue 评论量较少（仅 #3226 共 1 条），但可提炼出以下核心痛点：

- **静默失败体验**：用户希望系统对"消息未到达"这一类故障有可见信号（哪怕是错误日志），而不是毫无反馈地吞掉请求。
- **使用场景隐含信息**：报告者将问题描述为"等同于 agent 忽略了我"，说明其使用场景是**多轮、持续性会话交互**，对消息送达率高度敏感。
- **复现条件**：依赖上游平台对历史 message id 的复用行为，提示维护者在跨平台适配层需要更稳健的 ID 处理策略。

---

## ⏳ 待处理积压提醒

以下 PR 虽不在今日 24 小时热点内，但**长期未合并/未关闭**，需维护者关注以避免维护者疲劳：

| 编号 | 标题 | 创建日期 | 状态 | 链接 |
|------|------|----------|------|------|
| #2134 | fix(setup): Apple Silicon + Colima env vars in launchd plist | 2026-04-29 | OPEN（超 3 个月） | https://github.com/qwibitai/nanoclaw/pull/2134 |
| #2909 | feat(setup): template setup flow in wizard + first-agent stamping | 2026-07-02 | OPEN（1 个月+） | https://github.com/qwibitai/nanoclaw/pull/2909 |
| #3145 | fix(db): backfill destinations for existing wirings | 2026-07-28 | OPEN | https://github.com/qwibitai/nanoclaw/pull/3145 |

**建议**：#2134 涉及 macOS 用户关键启动路径，已停留超 100 天，建议维护者排期 review；#2909 与 #3220 形成模板插件化的"两步走"，合并 #3220 前应先确认 #2909 的依赖关系。

---

## 📊 项目健康度速评

| 维度 | 评分 | 说明 |
|------|------|------|
| 提交活跃度 | ⭐⭐⭐⭐ | PR 流转密集，方向集中 |
| 版本节奏 | ⭐⭐ | 24h 无新版本，可能处于合并窗口期 |
| 社区响应 | ⭐⭐ | 评论互动偏低，Issue #3226 急需响应 |
| 文档/迁移支持 | ⭐⭐⭐⭐ | 多条 PR 配套迁移脚本 |
| 关键 Bug 暴露 | ⚠️ | 出现一条静默消息丢失 Bug，建议优先修复 |

---

*报告生成时间：2026-08-12 ｜ 数据源：NanoClaw GitHub Repository*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目日报 · 2026-08-12

## 一、今日速览

IronClaw 今日保持高活跃度，过去 24 小时共产生 23 条 Issue 更新与 50 条 PR 更新（合并/关闭与待合并各 25 条），形成稳定的"高吞吐"节奏。技术主题集中在**内核架构重构**（Pluggable Agent Loops）、**上下文窗口与令牌估算**、**通道统一（Web/Telegram/Slack）**、**持久化内存**以及**Anthropic prompt cache** 五个主线。Issue 与 PR 几乎全部带详尽的技术摘要与代码定位，体现项目治理向"代码即文档"演进。当日无新版本发布，所有变更仍处于评审或集成阶段。

---

## 二、版本发布

⚠️ **今日无版本发布**。变更通过 PR 持续合入主干，建议关注下一次 release 时的 changelog 聚合。

---

## 三、项目进展（已合并/关闭的重要 PR）

| PR | 标题 | 贡献者 | 影响 |
|---|---|---|---|
| [#6997](https://github.com/nearai/ironclaw/pull/6997) | feat(llm): explicit Anthropic cache_control breakpoints on both transports | ilblackdragon | 关闭 [Issue #6984](https://github.com/nearai/ironclaw/issues/6984)。rig 适配器与 OAuth 通道均放置显式缓存断点，配合原生 deferred loading，可显著降低 Anthropic 长会话 token 成本。属于 pi-harness 采纳计划 P0 #1。 |
| [#7471](https://github.com/nearai/ironclaw/pull/7471) | fix(processes): lease expiry recovers safe runs instead of failing them; isolate journal heartbeat pool | serrrfirat | 进程监管核心修复：隔离 PostgreSQL 流量池；过期租约仅在 replay-safe checkpoint 恢复。显著降低运行被错误终止的概率。 |
| [#7503](https://github.com/nearai/ironclaw/pull/7503) | fix(loop): retain accepted task across context eviction | serrrfirat | 上下文裁剪时保留用户任务语义，超额任务以 `BudgetExceeded` 显式失败，避免静默丢失。 |
| [#7480](https://github.com/nearai/ironclaw/pull/7480) | fix(webui): reveal long conversation titles on hover | italic-jinxin | 关闭 [Issue #7481](https://github.com/nearai/ironclaw/issues/7481)。引入 `MarqueeText` 组件，长会话标题 hover 显示。 |
| [#7470](https://github.com/nearai/ironclaw/pull/7470) | fix(threads): restore listability for unprojected thread index rows | henrypark133 | 修复 `thread_index` 持久化但投影缺失导致的列表"幽灵丢失"。 |
| [#7514](https://github.com/nearai/ironclaw/pull/7514) | fix: enable Railway shell for hosted volume profile | henrypark133 | 为 Railway `hosted-single-tenant-volume` 配置提供 release-only 的 shell 入口。 |

📊 **整体评估**：今日 25 条合并/关闭 PR 中以"loop"、"memory"、"processes"、"llm"、"webui" 五大领域为主干，标志着项目从"功能扩张"向"内核稳态化"过渡。

---

## 四、社区热点

| 排名 | Issue / PR | 标题 | 评论 | 👍 | 分析 |
|---|---|---|---|---|---|
| 1 | [Issue #7482](https://github.com/nearai/ironclaw/issues/7482) | Epic: Pluggable agent loops — ACP executor / kernel architecture | 3 | 0 | 项目愿景级 Epic，提出将 IronClaw 重塑为 **kernel**（调度/租户/能力膜/审计），将 agent loop 卸载给 ACP 标准代理，反映出强烈的"标准化、可替换"诉求。 |
| 2 | [Issue #7405](https://github.com/nearai/ironclaw/issues/7405) | Improve deferred tool discovery with complete signatures | 2 | 0 | 针对 `tool_search` / `tool_describe` 的元数据缺口——提高工具发现完备性，减少模型往返。 |
| 3 | [Issue #7505](https://github.com/nearai/ironclaw/issues/7505) | Memory: target-alias resolution is contract | 1 | 0 | 指向核心契约漏洞：mem0 provider 不解析 `target` 别名，导致 `MEMORY.md` 召回失败。 |
| 4 | [PR #7477](https://github.com/nearai/ironclaw/pull/7477) | Unified channel model — one ChannelAdapter for inbound, replies, notifications | — | — | 实施统一通道模型设计文档 §12（11 项）+ §13 执行规则。多人协作级别的架构落地。 |
| 5 | [PR #7456](https://github.com/nearai/ironclaw/pull/7456) | fix(reborn): make durable storage profile-agnostic | — | — | 配套 Epic [#7467](https://github.com/nearai/ironclaw/issues/7467)，重构 Reborn 持久化为 profile-agnostic，避免租户/工作区残留。 |

📌 **诉求剖析**：当前社区讨论围绕三条主线展开——**架构解耦**（Kernel + ACP）、**契约一致性**（memory、token estimator、context window）、**通道与扩展能力**（统一 adapter、IdentyClaw、IronHub）。

---

## 五、Bug 与稳定性（按严重度排序）

### 🔴 P0 / 高严重度
- [Issue #6984](https://github.com/nearai/ironclaw/issues/6984) — Anthropic 自动缓存失效（性能 P0）。✅ 已有修复 [PR #6997](https://github.com/nearai/ironclaw/pull/6997)，今日关闭。

### 🟠 P1 / 主要功能受损
- [Issue #7294](https://github.com/nearai/ironclaw/issues/7294) — Agent 错误"记住"其他 scope 的 Telegram routine（QA bug_bash_P1）。✅ 已关闭。
- [Issue #7247](https://github.com/nearai/ironclaw/issues/7247) — Agent 虚假声明 GitHub 已连接（QA bug_bash_P1）。✅ 已关闭。
- [Issue #7246](https://github.com/nearai/ironclaw/issues/7246) — Agent 凭空捏造 automation 状态（QA bug_bash_P1）。✅ 已关闭。
- [Issue #7488](https://github.com/nearai/ironclaw/issues/7488) — Disclosure 桥接工具硬编码 `ConcurrencyHint::Exclusive` 致批处理尾巴丢失。✅ 已关闭。
- [Issue #7487](https://github.com/nearai/ironclaw/issues/7487) — `tool_search` 标记 disclosed 但不返回 schema，导致 oneOf required 折叠为空。✅ 已关闭。

### 🟡 P2 / 中等
- [Issue #7484](https://github.com/nearai/ironclaw/issues/7484) — 上下文窗口 128 消息硬裁剪，悄悄丢弃任务。🟢 已有 [PR #7504](https://github.com/nearai/ironclaw/pull/7504) 提交修复。
- [Issue #7485](https://github.com/nearai/ironclaw/issues/7485) — token 估算器对 ASCII 双重计数，有效上下文窗口减半。
- [Issue #7486](https://github.com/nearai/ironclaw/issues/7486) — 类型化 no-progress 退出对幂等读/轮询误判。
- [Issue #7490](https://github.com/nearai/ironclaw/issues/7490) — `retry_disposition()` 静默重驱表死代码。
- [Issue #7508](https://github.com/nearai/ironclaw/issues/7508) — GitHub MCP 启动 endpoint 校验提示混乱（QA bug_bash_P2）。
- [Issue #7476](https://github.com/nearai/ironclaw/issues/7476) — `classify_delivery_outcome` 忽略失败时的 `vendor_message_refs`，隐藏部分投递证据。

### ✅ 已闭环的稳定性改进
- PR #7471：进程租约过期→安全恢复
- PR #7503：上下文裁剪任务语义保留
- PR #7470：线程索引幽灵行恢复
- Issue #7483：NEAR AI 默认连接 / 模型探测使用认证 session ✅

📊 **健康度**：当前没有任何开放型"系统不可用"级 Bug；P0/P1 修复率极高，P2 多数已有对应 PR 进行中。

---

## 六、功能请求与路线图信号

| 信号 | Issue / PR | 路线图可能性 |
|---|---|---|
| **Pluggable Agent Loops + ACP** | [Issue #7482](https://github.com/nearai/ironclaw/issues/7482) | 强烈方向性信号，[PR #7513](https://github.com/nearai/ironclaw/pull/7513) 已开始落地 CLI `acp` 子命令 → 下个版本主干。 |
| **Reborn profile-agnostic 持久化** | [Issue #7467](https://github.com/nearai/ironclaw/issues/7467) + [PR #7456](https://github.com/nearai/ironclaw/pull/7456) | 已 XL 规模评审中，配套 Epic。 |
| **Storybook + AI-first Design System** | [Issue #7038](https://github.com/nearai/ironclaw/issues/7038) + [PR #7498](https://github.com/nearai/ironclaw/pull/7498) | v1.3.0 路线图，已配套自动化建议卡片后端。 |
| **Cloud.near.ai Google/GitHub 登录支持 staking** | [Issue #7517](https://github.com/nearai/ironclaw/issues/7517) | 用户场景驱动，连接 Stripe 与 NEAR 钱包登录路径。 |
| **IdentyClaw Passport 主机代理** | [Issue #7496](https://github.com/nearai/ironclaw/issues/7496) | 与安全默认 profile 兼容性提升相关。 |
| **Telegram linked-device** | [PR #7464](https://github.com/nearai/ironclaw/pull/7464) | 实现设计文档 [#7443](https://github.com/nearai/ironclaw/pull/7443)，以 MTProto linked device 形式接入。 |
| **Slack 剩余 8 个标准消息操作** | [PR #7515](https://github.com/nearai/ironclaw/pull/7515) | 在统一通道模型框架下的快速跟进。 |
| **IronHub agent link WebUI 操作面** | [PR #7516](https://github.com/nearai/ironclaw/pull/7516) | 完善部署链路最后一公里。 |
| **Automation runs 鲁棒性** | [Issue #6879](https://github.com/nearai/ironclaw/issues/6879) | v1.3.0 路线图，但截至今日仍未合并 fix，需关注。 |

📈 **路线图信号研判**：v1.3.0 候选包几乎全部来自 Storybook Epic（#7038）周边；中期方向已锁定 kernel + ACP + profile-agnostic Reborn 三件套。

---

## 七、用户反馈摘要

提炼自 Issue 评论与社区报告：

1. **"Agent 记错 routine / 捏造状态"（QA bug_bash_P1 群体）**——用户体验层面非常负面：
   > 用户问 BTC 新闻 routine，agent 立刻答"已经设置过了"，随后才发现没有触发器。
   
   这类问题暴露出 **memory scoping 与自动化注册真实性验证** 之间的契约缺口，是 P1 优先级反复出现的根源。

2. **NEAR AI 默认连接失败**（[Issue #7483](https://github.com/nearai/ironclaw/issues/7483)）——空 API Key 时模型列表与连通性探测同时失败，开发者需要手动填入 key 才能继续。✅ 已在 PR 修复并关闭。

3. **Cloud.near.ai staking 路径缺失**（[Issue #7517](https://github.com/nearai/ironclaw/issues/7517)）——Google/GitHub 登录用户无法以现有凭据直接质押获取推理额度，只能再开 NEAR 钱包。

4. **MCP 启动体验混乱**（[Issue #7508](https://github.com/nearai/ironclaw/issues/7508)）——GitHub MCP 扩展启动时混合"已注册"与"endpoint 校验"提示，对部署者造成误导。

5. **左侧导航长标题截断**（[Issue #7481](https://github.com/nearai/ironclaw/issues/7481)）——已通过 `MarqueeText` 解决，体现 WebUI 对细节的关注。

📊 **总体满意度**：技术深度满意度高（issue 摘要详细、定位精确），但**端到端首启体验**（MCP / 默认连接 / 自动化触发）仍是反复吐槽的痛点。

---

## 八、待处理积压

| 项目 | 链接 | 创建日 | 状态 |
|---|---|---|---|
| Automation runs hit-or-miss Epic | [Issue #6879](https://github.com/nearai/ironclaw/issues/6879) | 2026-07-29 | v1.3.0 路线图 Epic，**已 14 天无进展**，建议优先立项。 |
| Approval gates subscription projection | [PR #5910](https://github.com/nearai/ironclaw/pull/5910) | 2026-07-10 | 阻塞性 UX 问题，**已 1 月+ 未合并**，建议维护者审视。 |
| Anthropic prompt cache across tool promotion | [PR #7274](https://github.com/nearai/ironclaw/pull/7274) | 2026-08-06 | 与 #6997 同属 cache 主题，建议配套评审。 |
| Memory save guidance + MEMORY.md lane | [PR #7365](https://github.com/nearai/ironclaw/pull/7365) | 2026-08-07 | 与 #7505 / #7512 共同构成 memory 修复簇。 |

⏰ **维护者建议**：Automation runs Epic（#6879）已逾两周无明显推动，且其性质直接影响 v1.3.0 体验核心；建议在下次 sprint 计划中显式分配 owner，避免其滑向"长尾 Epic"。

---

### 📌 总结

- 🟢 **稳定性**：今日 P0/P1 Bug 全部闭环，质量曲线继续上行。
- 🟢 **架构演进**：kernel + ACP、unified channel、profile-agnostic 三条主线同步推进。
- 🟡 **风险点**：Automation runs Epic（#6879）积压、若干 token estimator / no-progress 退出机制尚未合并。
- 🟢 **社区**：技术讨论密度高、契约级 issue 占比上升，反映项目成熟度提升。

> 报告生成时间：2026-08-12 · 数据范围：过去 24 小时 GitHub 活动

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目日报 · 2026-08-12

> 数据来源：[netease-youdao/LobsterAI](https://github.com/netease-youdao/LobsterAI) · 统计窗口：过去 24 小时

---

## 1. 今日速览

LobsterAI 过去 24 小时进入"发布冲刺"节奏：Release/2026.8.10 分支（[PR #2477](https://github.com/netease-youdao/LobsterAI/pull/2477)）合并入 `main`，并紧随其后发布 **2026.8.11 版本**。代码侧有 6 个 PR 在当窗口内合并/关闭，覆盖 UI 交互、可思考强度（thinking level）、本地文件菜单等多项能力；同期关闭 3 条历史 Issue（含 1 条 API Key 配置静默丢失 Bug，已由 [PR #1241](https://github.com/netease-youdao/LobsterAI/pull/1241) 修复）。仍需关注的开放项包括 [#1183](https://github.com/netease-youdao/LobsterAI/issues/1183)（网关启动遮罩循环）以及 [PR #2475](https://github.com/netease-youdao/LobsterAI/pull/2475)（思考深度互斥修复）。整体活跃度：**中高**，主要动能来自 8.11 版本收尾。

---

## 2. 版本发布

**LobsterAI 2026.8.11** 已发布。

- **重点改动**：
  - **可配置思考强度（thinking level）**：[PR #2457](https://github.com/netease-youdao/LobsterAI/pull/2457) 为支持的模型引入服务器端驱动的思考强度档位与默认值，并将 `max` 在产品层映射到运行时的 `xhigh`，选择会按会话/Agent 粒度持久化（涉及 `agents.thinking_level` / `cowork_sessions.thinking_level`）。
  - **Cowork 体验增强**：会话列表标记定时任务会话（liuzhq1986 在 release notes 中提及）；为本地文件链接增加右键菜单（含打开方式/另存为/复制路径/复制内容/复制图片/在文件夹中显示），由 [PR #2473](https://github.com/netease-youdao/LobsterAI/pull/2473) 引入 `LocalFileContextMenu` 组件，替代旧的 inline reveal-in-folder 操作，并新增 `dialog:saveFileCopy` IPC。
  - **键盘与 UI 细节**：新增折叠 Agent 任务快捷键，并允许在键入时使用组合键（[PR #2469](https://github.com/netease-youdao/LobsterAI/pull/2469)）；按 ESC 仅关闭最顶层弹窗，避免内层对话框与背后面板同时响应（[PR #2476](https://github.com/netease-youdao/LobsterAI/pull/2476)）；侧边栏 sites 图标描边粗细统一（[PR #2474](https://github.com/netease-youdao/LobsterAI/pull/2474)）。
- **破坏性变更 / 迁移注意**：
  - 思考强度选项从"全局一份"升级为按模型/会话持久化，旧的全局字段可能不再适用；旧 `openclaw.json` 在 [#1240](https://github.com/netease-youdao/LobsterAI/issues/1240) 案例中也被证实可能导致启动失败，用户升级后如遇启动异常可参考"还原 1 小时前的 openclaw.json"作为应急手段。
  - MarkdownContent 渲染链路中 `reveal-in-folder` 被替换为新的 `LocalFileContextMenu`，依赖前者的自定义扩展可能需要适配。
- **关联链接**：[Release 2026.8.11](https://github.com/netease-youdao/LobsterAI/releases/tag/2026.8.11)（基于 [PR #2477](https://github.com/netease-youdao/LobsterAI/pull/2477) 的合并）

---

## 3. 项目进展

今日合并/关闭 7 个 PR，方向集中于"模型能力 + 交互细节"两条主线：

| 类别 | PR | 说明 |
|---|---|---|
| 模型能力 | [#2457](https://github.com/netease-youdao/LobsterAI/pull/2457) | 服务端驱动 + 按会话/Agent 持久化的思考强度，OpenClaw 别名支持 `max → xhigh` |
| 模型能力 | [#2475](https://github.com/netease-youdao/LobsterAI/pull/2475) *（仍 OPEN）* | 修复思考深度在模型之间互斥的回归 |
| 交互细节 | [#2469](https://github.com/netease-youdao/LobsterAI/pull/2469) | Agent 任务折叠快捷键 + 输入态组合键 |
| 交互细节 | [#2476](https://github.com/netease-youdao/LobsterAI/pull/2476) | ESC 仅关闭顶层 Modal，修复 IME 组合问题 |
| 交互细节 | [#2474](https://github.com/netease-youdao/LobsterAI/pull/2474) | 侧边栏 sites 图标视觉对齐 |
| 功能补全 | [#2473](https://github.com/netease-youdao/LobsterAI/pull/2473) | 本地文件链接右键菜单 + save-as IPC |
| 发布工程 | [#2477](https://github.com/netease-youdao/LobsterAI/pull/2477) | `release/2026.8.10 → main` 合并发布 |
| 历史回填 | [#1241](https://github.com/netease-youdao/LobsterAI/pull/1241) | Settings 未保存修改确认（关闭 [#1237](https://github.com/netease-youdao/LobsterAI/issues/1237)） |
| 历史回填 | [#1239](https://github.com/netease-youdao/LobsterAI/pull/1239) | 任务完成/出错时任务栏/Dock 图标提醒（Win/macOS） |

整体而言，2026.8.11 把"模型可控性 + Cowork 使用体感"又往前推了一步，发布工程流程完整（release 分支 → 合 main → 出 tag），迭代节奏健康。

---

## 4. 社区热点

过去 24 小时评论/讨论更新最显著的条目集中在"配置安全"和"模型受限后整站不可用"两类痛点：

- **[Issue #1237 Settings 关闭无确认导致 API Key 静默丢失](https://github.com/netease-youdao/LobsterAI/issues/1237)**（评论 2 · 👍 0 · 已关闭）— 用户对"破坏性操作无确认"的强烈不满；本次由 [PR #1241](https://github.com/netease-youdao/LobsterAI/pull/1241) 实现脏检查 + 三条关闭路径拦截（背景/X/Cancel），是近期 UX 改进的代表案例。
- **[Issue #1240 大模型被限流后整个应用瘫痪](https://github.com/netease-youdao/LobsterAI/issues/1240)**（评论 2 · 👍 0 · 已关闭）— 用户反映单 provider 限流（volcano engine coding plan）后，即便切换到 Gemini 3 Flash / 3.1 Pro Preview 仍报"API 受限"，且伴随 `openclaw.json` 损坏导致应用无法启动，只能回滚到 1 小时前的配置。该 Issue 反映的不是单一限流问题，而是"provider 故障域隔离 + 配置持久化的稳健性"两个交叉缺陷。
- **[Issue #2062 任务超过最大时长被自动停止](https://github.com/netease-youdao/LobsterAI/issues/2062)**（评论 2 · 👍 0 · 已关闭）— 用户尝试搭建"24 小时连续运行"任务时遇到 `Task timed out`，且不清楚任务是否仍在后台；属于长任务可用性议题。

分析：三条 Issue 的共同诉求是 **"对用户操作的反馈要明确、对系统状态的可观测性要充分"**——关闭前要确认、限流后要隔离、停止后要可见。

---

## 5. Bug 与稳定性

按严重程度排列：

1. **🔴 高 — [Issue #1183 网关启动遮罩循环跳出（仍 OPEN）](https://github.com/netease-youdao/LobsterAI/issues/1183)**  
   现象：关闭某个模型开关保存后，回到首页持续弹出"openClaw 网关未能在规定时间内启动成功"的遮罩。版本：2026.3.31（Windows）。目前无对应修复 PR，状态 stale，建议优先跟进。

2. **🟠 中高 — [Issue #1240 限流导致全站瘫痪](https://github.com/netease-youdao/LobsterAI/issues/1240)**  
   单 provider 限流扩散到全局切换路径，且伴随 `openclaw.json` 损坏使应用无法启动，需要回滚恢复。Issue 已关闭，但根本问题（provider 故障隔离、配置写入原子性）尚未在描述中出现明确修复 PR。

3. **🟡 中 — [Issue #2062 长任务超时无后状态](https://github.com/netease-youdao/LobsterAI/issues/2062)**  
   `Task timed out` 后用户无法判断任务是否仍在运行，缺少"仍在后台运行 / 已停止 / 可恢复"的明确反馈。已关闭但未提及对应 PR。

4. **🟢 已修复 — [Issue #1237](https://github.com/netease-youdao/LobsterAI/issues/1237) ↔ [PR #1241](https://github.com/netease-youdao/LobsterAI/pull/1241)**  
   Settings 关闭无确认导致 API Key 静默丢失，已通过脏检查 + 三路径拦截解决，随 2026.8.11 发布。

5. **🟢 已修复 — [PR #2475 思考深度跨模型互斥（仍 OPEN，等待合并）](https://github.com/netease-youdao/LobsterAI/pull/2475)**  
   同一选择器中给模型 A 设"最大"后给模型 B 设"最大"会把 A 打回"高"。属于 2026.8.11 引入的回归，建议尽快合入。

---

## 6. 功能请求与路线图信号

可被纳入下一版本的候选信号：

- **可配置 thinking level（已落地）** — [#2457](https://github.com/netease-youdao/LobsterAI/pull/2457) 提供基础能力，#2475 补齐"按模型独立记忆"的 UX 闭环。
- **任务完成提醒（已落地）** — [#1239](https://github.com/netease-youdao/LobsterAI/pull/1239) 任务栏闪烁 / Dock 弹跳，预期进入 2026.8.12 或更近版本。
- **隐藏 OpenClaw 内部心跳会话** — [PR #1181](https://github.com/netease-youdao/LobsterAI/pull/1181)（仍 OPEN，stale）通过 `cowork_sessions.hidden` 列标记 OpenClaw 主 Agent 会话，长期被用户反馈为"列表噪音"，具备合入价值。
- **本地文件右键菜单（已落地）** — [#2473](https://github.com/netease-youdao/LobsterAI/pull/2473) 已经是 2026.8.11 的一部分。
- **Electron 大版本升级（待处理）** — [PR #1277](https://github.com/netease-youdao/LobsterAI/pull/1277) dependabot 提议将 `electron` 从 40.2.1 升至 43.3.0，同时升级 `electron-builder`，仍未合并，建议在 8.12 路线图中评估。
- **隐性诉求（来自 Issue）**：
  - Provider 限流后的"故障域隔离"（[#1240](https://github.com/netease-youdao/LobsterAI/issues/1240)）；
  - 长任务的运行状态可观测性（[#2062](https://github.com/netease-youdao/LobsterAI/issues/2062)）；
  - 网关启动失败的兜底/退避（[#1183](https://github.com/netease-youdao/LobsterAI/issues/1183)）。

---

## 7. 用户反馈摘要

- **痛点 1 — "无反馈即丢失"**：用户在 Settings 改完 API Key 后被静默丢弃，反映出 AI 类工具用户对配置丢失的容忍度极低（[#1237](https://github.com/netease-youdao/LobsterAI/issues/1237)）。
- **痛点 2 — "单 provider 故障 = 全站瘫痪"**：zolufly-web 反馈即便切到 Gemini 模型仍报限流，并出现 `openclaw.json` 损坏导致无法启动，只能回滚 1 小时前配置。问题暴露了"provider 状态共享 / 配置写入原子性"两个工程隐患（[#1240](https://github.com/netease-youdao/LobsterAI/issues/1240)）。
- **痛点 3 — "长任务边界不清"**：24 小时连续任务被自动 stop，用户无法确认是否仍在后台，提示信息不闭环（[#2062](https://github.com/netease-youdao/LobsterAI/issues/2062)）。
- **痛点 4 — "网关启动遮罩卡死"**：关闭模型开关保存后陷入持续网关启动失败遮罩，UX 上属于"系统报错却无法取消/重试"的负反馈（[#1183](https://github.com/netease-youdao/LobsterAI/issues/1183)）。
- **满意点**：本次 2026.8.11 的新功能（思考强度、本地文件右键菜单、ESC 行为、Settings 脏检查、任务完成提醒）覆盖了用户近期提出的多项诉求，整体迭代方向与社区期待一致。

---

## 8. 待处理积压

提醒维护者关注的 stale / 未响应项：

| 类型 | 编号 | 标题 | 风险点 |
|---|---|---|---|
| Issue | [#1183](https://github.com/netease-youdao/LobsterAI/issues/1183) | 一直循环跳出遮罩启动网关 | 仅 OPEN 问题，且 stale，2026.3.31 版本仍复现 |
| PR | [#1277](https://github.com/netease-youdao/LobsterAI/pull/1277) | electron 40.2.1 → 43.3.0 + electron-builder 升级 | 依赖类升级长期搁置，存在安全/兼容性风险 |
| PR | [#2475](https://github.com/netease-youdao/LobsterAI/pull/2475) | fix(model-selector): give each model its own thinking level | 与 2026.8.11 同一窗口的功能回归修复，建议尽快合入 |
| PR | [#1181](https://github.com/netease-youdao/LobsterAI/pull/1181) | hide OpenClaw main agent sessions from session list | 列表噪音问题已存在 4 个月，stale |

**健康度提示**：活跃度良好，但仍有 1 个高严重度 Issue 与 1 个功能回归 PR 处于 OPEN 且未响应；建议在下一次发布前对齐 [#1183](https://github.com/netease-youdao/LobsterAI/issues/1183) 的修复路径，并评估 [PR #1277](https://github.com/netease-youdao/LobsterAI/pull/1277) 的 Electron 升级窗口。

---

*报告基于 2026-08-11 至 2026-08-12 的 GitHub 事件流生成；Stale 标记与具体关闭原因以 GitHub 为准。*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目日报
**日期：2026-08-12**

---

## 1. 今日速览

Moltis 今日整体活跃度处于**较低水平**，过去24小时内仅有 1 个 PR 处于活跃状态，无新 Issue 创建或关闭，无新版本发布。唯一活跃的 PR #1190 聚焦于本地 CalDAV 连接器的持久化与可搜索能力，属于重要的功能扩展方向。整体来看，项目处于"稳步推进单一功能模块"的静默开发阶段，社区讨论热度有限。

- Issues 变化：0
- PR 变化：1（待合并 1，已合并 0）
- 新版本：0
- 健康度评估：⭐⭐☆☆☆（活跃度偏低，但功能开发有序推进）

---

## 2. 版本发布

⚠️ 今日无新版本发布，本节略。

---

## 3. 项目进展

### 🔧 PR #1190：[Add durable local CalDAV connectors](https://github.com/moltis-org/moltis/pull/1190)
- **作者**：[penso](https://github.com/penso)
- **状态**：OPEN（待合并）
- **创建/更新时间**：2026-08-11

**核心进展**：
该 PR 为 Moltis 引入了一套**持久化的本地 CalDAV 连接器架构**，关键内容包括：

1. **Provider-neutral 连接器持久化层**：抽象出与具体日历服务无关的存储模型。
2. **原子化 CalDAV 快照机制**：保证本地数据快照的一致性，避免部分写入导致的数据损坏。
3. **调度与投影（Projection）支持**：为本地数据集提供定期同步与派生视图。
4. **有界本地全文检索**：在本地对连接器数据进行范围可控的全文搜索。
5. **Prompt-compiled 数据集计划**：使 LLM 能以结构化方式访问本地数据集。
6. **只读 `connectors` agent 工具**：为 Agent 提供可信的、只读的数据集访问入口。
7. **Settings > Connectors UI**：新增账户与数据集管理界面。

**推进意义**：这是 Moltis 在"本地优先（local-first）"数据架构上的重要一步，标志着项目从单纯的 AI 助手逐步演化为**可连接外部数据源的智能代理平台**。该 PR 一旦合并，将显著增强 Moltis 在个人日历数据管理场景下的实用性。

---

## 4. 社区热点

📊 今日社区讨论热度极低：
- **最活跃 PR**：#1190（0 评论、0 👍）
- **热门 Issues**：无

**分析**：
由于 PR #1190 刚刚创建（昨日提交，今日无互动），暂无社区反馈可分析。点赞和评论数为 0 表明该项目仍处于早期评审阶段，尚未吸引社区参与。建议维护者主动在相关社交渠道（Discord、Reddit 等）推广此功能以收集早期反馈。

---

## 5. Bug 与稳定性

✅ 今日**未报告任何 Bug、崩溃或回归问题**。

⚠️ **注意**：由于 Issues 区域完全静默，需结合以下情况判断：
- 若用户在实际使用中遇到问题但未及时反馈，存在隐性风险。
- 维护者应关注 PR #1190 引入的新代码路径是否会带来潜在稳定性问题（特别是 CalDAV 同步与全文检索的边界情况）。

---

## 6. 功能请求与路线图信号

### 📌 来自 PR #1190 的强信号

PR #1190 本身即代表了一个清晰的路线图方向：

| 路线图方向 | 信号强度 | 落地形式 |
|---|---|---|
| 本地优先数据架构 | ⭐⭐⭐⭐⭐ | PR #1190 中持久化、快照、检索机制 |
| Agent 与外部数据源对接 | ⭐⭐⭐⭐⭐ | `connectors` agent 工具 |
| 多 Provider 抽象 | ⭐⭐⭐⭐ | Provider-neutral 设计 |
| AI 友好的数据访问层 | ⭐⭐⭐⭐ | Prompt-compiled 数据集计划 |

**预测**：考虑到 PR #1190 的功能广度与架构深度，预计它将分多个 PR 拆分合并，或作为单一里程碑式合入下一主版本（如 v0.x 或 v1.0 候选版本）。

---

## 7. 用户反馈摘要

⚠️ 今日无 Issues 评论可供提炼。

**已知方向性需求**（基于 PR 内容推断）：
- 用户希望 Moltis 能**本地化存储和管理外部数据**（如 CalDAV 日历），减少对云服务的依赖。
- 用户期望 AI 助手能**主动访问结构化个人数据**（日历、联系人等）以提供更精准的服务。
- 用户重视**数据隐私与可控性**，"trusted read-only" 的设计反映了这一诉求。

---

## 8. 待处理积压

### 📋 当前待处理项清单

| 编号 | 类型 | 标题 | 创建时间 | 状态 |
|---|---|---|---|---|
| [#1190](https://github.com/moltis-org/moltis/pull/1190) | PR | Add durable local CalDAV connectors | 2026-08-11 | OPEN |

### 🚨 维护者提醒

1. **PR #1190 急需代码评审**：作为一项涉及持久化、同步调度、搜索、Agent 工具、UI 的**综合性功能变更**，建议维护者优先安排核心贡献者进行架构评审，并考虑拆分合并以降低风险。
2. **Issues 入口静默**：连续无 Issue 活动可能意味着：(a) 产品稳定无新问题，或 (b) 用户报告渠道不畅通。建议维护者主动发起社区互动（如 RFC、AMA）以激活反馈循环。
3. **版本发布节奏**：近期无新版本发布，若 PR #1190 进入合并阶段，应提前规划发布说明与迁移指南。

---

## 📌 总结

Molttis 项目今日处于**低活跃但有方向感**的阶段。唯一的活跃 PR #1190 揭示了项目向"本地优先 + Agent 数据连接"演进的明确意图。短期内建议维护者聚焦于：(1) 推进 PR #1190 的评审与拆分；(2) 激活社区反馈渠道；(3) 规划下一版本发布节奏。

---
*报告生成时间：2026-08-12 | 数据来源：GitHub API*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw / QwenPaw 项目日报 · 2026-08-12

> 数据来源：[agentscope-ai/QwenPaw](https://github.com/agentscope-ai/QwenPaw) 仓库过去 24 小时动态
>
> ⚠️ **命名说明**：用户提供的仓库路径为 `CoPaw`，但实际 Issue/PR 链接均指向 `agentscope-ai/QwenPaw`。本报告以仓库实际名称 **QwenPaw** 为准。

---

## 1. 今日速览

QwenPaw 项目今日处于 **v2.1.0 发布冲刺期**，活跃度极高：过去 24 小时共处理 **23 个 Issue**（新开/活跃 9、关闭 14）和 **49 个 PR**（待合并 24、已合并/关闭 25），并发布 **v2.1.0-beta.3** 候选版本。社区反馈密集集中在 **Desktop (Tauri) 平台兼容性**（Windows 子进程崩溃、macOS 元素激活）、**Console 前端 UX 细节**（时区、IME 输入、CSS 动画耗 CPU）以及 **MCP 工具稳定性** 三类问题。同时，一条 **插件安全权限模型漏洞**（#6916）值得维护者高度关注。整体健康度评估：**活跃但承压** —— 合并节奏快，beta 窗口期内暴露出多个需修复点。

---

## 2. 版本发布

### 🚀 v2.1.0-beta.3 已发布

- **Release**: [v2.1.0-beta.3](https://github.com/agentscope-ai/QwenPaw/releases/tag/v2.1.0-beta.3)
- **本期变更**（部分）：
  - `Feat/files workspace blog`（PR #6783）
  - `fix(provider): expire stale capability cache entries and clear on model switch`（PR #6723）
  - 版本号 bump
- **Beta 安装验证工单**: [#6914](https://github.com/agentscope-ai/QwenPaw/issues/6914) — 由 GitHub Actions 自动开启，截止 2026-08-11 15:45 UTC，需通过 4 项平台检查。

**迁移注意事项**：
- v2.1.0b1 曾出现 Windows Tauri Desktop 将 `PYTHONHOME` 注入子进程导致 `encodings ModuleNotFoundError` 的问题（#6697，已关闭）；
- v2.1.0b2 出现中文 IME 组合输入期间队列崩溃（#6885，**仍 OPEN**），中文用户升级前需留意。
- 建议参考 [PR #6875](https://github.com/agentscope-ai/QwenPaw/pull/6875)（v2.1.0 release notes 已关闭）查阅完整变更。

---

## 3. 项目进展 — 今日合并/关闭的重要 PR

| PR | 标题 | 意义 |
|---|---|---|
| [#6911](https://github.com/agentscope-ai/QwenPaw/pull/6911) | **feat(console): unify renderable code block experience** | 合并后 LaTeX / Mermaid 代码块新增 Preview / Source 切换标签，统一明暗主题 — 直接回应 #4756、#5453、#6893 的长期诉求 |
| [#6912](https://github.com/agentscope-ai/QwenPaw/pull/6912) | **fix(config): return 422 for invalid channel payloads** | 修复 #6910，将配置校验失败从 HTTP 500 降级为 422，提升 API 错误语义清晰度 |
| [#6915](https://github.com/agentscope-ai/QwenPaw/pull/6915) | **fix(files): repair previews and dark mode styling** | 修复 Unicode PDF / SVG 文件预览及暗色模式适配，使用 RFC 5987 编码 |
| [#6913](https://github.com/agentscope-ai/QwenPaw/pull/6913) | **fix(computer-use): improve macOS element activation** | 修复 macOS 瞬态菜单激活问题，避免因窗口前置导致菜单消失 |
| [#6909](https://github.com/agentscope-ai/QwenPaw/pull/6909) | **feat(channels): warn when a bot is already used by another agent** | 增加 Bot 身份冲突检测，防止多 agent 共享同一 Bot 时的隐性互踩 |
| [#6898](https://github.com/agentscope-ai/QwenPaw/pull/6898) | **fix(tools): correct read_file tool description** | 修正 `read_file` 工具描述，避免模型误用于二进制文件 |
| [#6891](https://github.com/agentscope-ai/QwenPaw/pull/6891) | **feat(computer-use): improve native input workflows** | 增强 desktop 原生输入流的稳定性与节流控制 |
| [#6564](https://github.com/agentscope-ai/QwenPaw/pull/6564) | **fix(memory): flush pending turns before compression** | 解决 #6555 — Scroll 压缩前会丢失待提交 Auto-Memory turn |
| [#6875](https://github.com/agentscope-ai/QwenPaw/pull/6875) | **chore: update release notes for v2.1.0** | 同步 v2.1.0 中英文 release notes 与多语言 README |

**整体进展评估**：v2.1.0 的代码层核心改动（统一代码块体验、MCP 修复、内存生命周期、Computer Use 改进、release notes）已在 24 小时内集中落地，说明项目进入 **RC 阶段倒计时**。

---

## 4. 社区热点

### 🔥 高讨论度 Issue / PR

| 排名 | Issue / PR | 评论数 | 关注点 |
|---|---|---|---|
| 1 | [#6732](https://github.com/agentscope-ai/QwenPaw/issues/6732) MCP 工具规律性失效 | 10 | 用户痛点极高：Docker 容器运行一夜后 MCP 工具集体失活，重启才恢复，**已关闭**但需关注根因是否被 PR #6874 解决 |
| 2 | [#6893](https://github.com/agentscope-ai/QwenPaw/issues/6893) 公式渲染/会话分组/背景 | 7 | 同时反映三类 UX 缺陷，已合并 #6911 覆盖公式渲染部分 |
| 3 | [#6882](https://github.com/agentscope-ai/QwenPaw/issues/6882) 怎么集成 CopilotKit | 3 | 社区探索第三方前端接入方案 |
| 4 | [#6900](https://github.com/agentscope-ai/QwenPaw/issues/6900) isolate chat project dirs from agent workspace | 3 | 安全/隔离诉求，影响多租户场景 |
| 5 | [#5790](https://github.com/agentscope-ai/QwenPaw/issues/5790) Loading animation 不消失 | 4 | 老问题终于关闭，长期 UI 体验缺陷 |

### 诉求分析

- **"体验对齐"型诉求**密集：LaTeX 渲染（#4756、#5453、#6893）、字体调节（#4154）、暗色主题（#6915）反复出现，说明社区期待 QwenPaw 接近 Cherry Studio 等同类工具的精致度。
- **第三方集成与渠道扩展**成为新热点：CopilotKit、QQ bot 限流、微信群需求（#6895）反映用户希望 QwenPaw 进入更广义的对话生态。

---

## 5. Bug 与稳定性（按严重程度排序）

### 🔴 P0 — 崩溃/不可用

| Issue | 描述 | Fix 状态 |
|---|---|---|
| [#6919](https://github.com/agentscope-ai/QwenPaw/issues/6919) | **v2.0.1 频繁崩溃**：`console process/reply failed`，Web 端偶发不可用 | ⚠️ OPEN，需关注 |
| [#6885](https://github.com/agentscope-ai/QwenPaw/issues/6885) | **v2.1.0b2 中文 IME compositionEnd 崩溃**：消息队列完全不可用 | ⚠️ OPEN，**严重影响中文用户** |
| [#6918](https://github.com/agentscope-ai/QwenPaw/issues/6918) | **Inter-agent messages spawn new session per message**：并发影子实例导致重复 | ⚠️ OPEN，由 agent 代笔的深度 bug |

### 🟠 P1 — 显著功能缺陷

| Issue | 描述 | Fix 状态 |
|---|---|---|
| [#6910](https://github.com/agentscope-ai/QwenPaw/issues/6910) | 无效 channel payload 返回 HTTP 500 | ✅ 已通过 PR [#6912](https://github.com/agentscope-ai/QwenPaw/pull/6912) 修复 |
| [#6883](https://github.com/agentscope-ai/QwenPaw/issues/6883) | 日记页面子文件夹笔记分组到错误日期 | ⚠️ OPEN |
| [#6732](https://github.com/agentscope-ai/QwenPaw/issues/6732) | MCP 工具规律性失效 | 🟡 已关闭；根因可能与 PR [#6874](https://github.com/agentscope-ai/QwenPaw/pull/6874)（MCP tool-call timeout，默认 120s）相关，待确认 |
| [#6697](https://github.com/agentscope-ai/QwenPaw/issues/6697) | v2.1.0b1 Desktop 注入 PYTHONHOME 致 python 子进程崩溃 | ✅ 已关闭 |
| [#6828](https://github.com/agentscope-ai/QwenPaw/issues/6828) | Idle 时前端 CSS 动画耗 20% CPU | ✅ 已关闭 |
| [#6871](https://github.com/agentscope-ai/QwenPaw/issues/6871) | 历史消息时间戳 +8h 时区偏移 | ✅ 已关闭 |
| [#6722](https://github.com/agentscope-ai/QwenPaw/issues/6722) | Background forked subagent 在 worktree 失败时误报 completed | ✅ 已关闭 |
| [#5790](https://github.com/agentscope-ai/QwenPaw/issues/5790) | Loading spinner Agent 完成后不消失 | ✅ 已关闭（issue 历时近 2 个月） |

### 🟡 P2 — 体验小问题

- [#6901](https://github.com/agentscope-ai/QwenPaw/issues/6901) Repeated GitHub links（已关闭）
- [#4756](https://github.com/agentscope-ai/QwenPaw/issues/4756) LaTeX 渲染弱（已关闭，由 #6911 修复）

### 🔒 安全提示

- **[#6916](https://github.com/agentscope-ai/QwenPaw/issues/6916) 插件可静默创建 cron 并注入消息（无用户审批）** — 严重度中高，**OPEN**，需在 v2.1.0 正式版前回应。

---

## 6. 功能请求与路线图信号

| 需求 | Issue / PR | 路线图概率 |
|---|---|---|
| 任意报告主动投递 Inbox | [#6917](https://github.com/agentscope-ai/QwenPaw/issues/6917) | 🟢 高，与现有 Inbox / cron / heartbeat 体系契合 |
| 隔离 Chat 项目目录与 Agent workspace | [#6900](https://github.com/agentscope-ai/QwenPaw/issues/6900) | 🟢 高，安全最佳实践，已被社区多次提 |
| 统一 Marketplace（apps/plugins/skills） | [#6880](https://github.com/agentscope-ai/QwenPaw/pull/6880) | 🟢 极高，PR 已 OPEN |
| MCP tool-call timeout | [#6874](https://github.com/agentscope-ai/QwenPaw/pull/6874) | 🟢 极高，关联 #6724 / #3997 |
| Desktop 记忆窗口位置/大小 | [#6877](https://github.com/agentscope-ai/QwenPaw/pull/6877) | 🟢 高，Tauri 标准插件 |
| 系统命令在 slash autocomplete 中暴露 | [#5869](https://github.com/agentscope-ai/QwenPaw/pull/5869) | 🟡 中等，已审 1 月 |
| AnySearch 集成（替换 Tavily） | [#6817](https://github.com/agentscope-ai/QwenPaw/pull/6817) | 🟡 中等 |
| 统一 Provider 发现 / 模型元数据 / 路由 | [#6302](https://github.com/agentscope-ai/QwenPaw/pull/6302) | 🟢 关联 #6167，重要架构改动 |
| QQ bot 工作流信息压缩 | [#6897](https://github.com/agentscope-ai/QwenPaw/issues/6897) | 🟡 中等（已关闭为 Question，但实际是 feature 诉求） |

---

## 7. 用户反馈摘要

从今日 Issue 评论中提炼的真实用户声音：

- 😫 **MCP 稳定性焦虑**（#6732）："每隔一个晚上或几小时 mcp 工具就无效，重启 Docker 才能恢复" — 这是企业用户难以接受的不可预测性。
- 😤 **LaTeX 渲染落后同类**（#6893 / #4756）："cherry studio 都能渲染，qwenpaw 显示成乱码就尴尬" — 反映用户横向对比后对体验落差的不满。
- 😩 **Windows Desktop 崩溃**（#6697 / #6919）：PyInstaller onedir + PYTHONHOME 注入、console 频繁抛错让桌面端用户几乎无法生产使用。
- 😡 **中文输入法破坏队列**（#6885）：agent 运行时 compositionEnd 直接让消息队列不可用 — 这是面向中文市场的硬伤。
- 🤔 **QQ / 微信生态缺口**（#6897 / #6895）：用户希望 QwenPaw 主动降低 QQ 信息流噪音，并要求建微信交流群 — 反映**国内 C 端扩散需求**。
- 😕 **CopilotKit 集成指引缺失**（#6882）：开发者希望有前端嵌入式集成的官方示例。
- 😐 **插件权限黑盒**（#6916）：用户发现第三方插件可无审批注入 cron 和消息，对权限模型透明度不满。
- 👍 **正向信号**：#6911（代码块统一体验）和 #6915（文件预览 + 暗色模式）合并后，预示着 v2.1.0 的可视化层会有可见提升。

---

## 8.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报 · 2026-08-12

## 1. 今日速览

ZeroClaw 今日整体处于 **高强度架构演进期**，过去 24 小时共产生 50 条 Issue 更新与 50 条 PR 更新，但合并/关闭率均偏低（Issue 关闭率 20%，PR 仅 1 条合并/关闭，0 个版本发布）。议题分布显著集中于 **v0.9.0 安全/架构里程碑**：超过 60% 的活跃 Issue 仍为 RFC（征求意见稿）与 tracker（跟踪器）类，主要围绕 OIDC 入站认证、运行时安全决策管线、SOP 权限契约、统一包/能力目录等展开；同时 p1 级 Bug 修复 PR 持续涌入（WebP 解码越界、Session Key 双前缀、Daemon reload 信号错误等），显示安全与稳定性仍是当前优先轴。社区活跃度高，评审节奏紧，但维护者决策队列（#8692）已出现积压迹象，建议关注。

---

## 2. 版本发布

**今日无新版本发布。** 上一版本节奏需结合 RFC #9496（精简 RFC 流程）落地后再观察。

---

## 3. 项目进展

今日合并/关闭的重要 PR 与 Issue（部分 Issue 已关闭、PR 池中仅 1 条已落地，但已完成评审准备合并的较多）：

| ID | 类型 | 标题 | 影响 |
|---|---|---|---|
| [#9768](https://github.com/zeroclaw-labs/zeroclaw/issues/9768) | Bug (CLOSED) | daemon reload is not on SIGUSR1 — degraded-security warning suggests a signal that kills the daemon | S2 级别，修复文档与实际信号不一致导致的运维误操作风险 |
| [#9035](https://github.com/zeroclaw-labs/zeroclaw/issues/9035) | Bug (CLOSED) | Docker Compose gateway 保持 loopback 绑定，发布端口无法访问 | S1 级别 Docker 部署链路修复，提升容器化用户体验 |
| [#9545](https://github.com/zeroclaw-labs/zeroclaw/issues/9545) | Task (CLOSED) | gate rustdoc warnings in required PR CI | CI 防御性硬化，防止 zero-rustdoc-warning 状态静默回退 |
| [#2269](https://github.com/zeroclaw-labs/zeroclaw/issues/2269) | RFI (CLOSED) | Token consumption and cost management for productized agent workloads | 收集社区对产品化代理成本控制的意见 |
| [#7232](https://github.com/zeroclaw-labs/zeroclaw/issues/7232) | RFC (CLOSED) | Structured Observability Enhancement — Rich Events, OTel Trace Correlation | 完成可观测性扩展 RFC 讨论 |

**整体推进评估：** 项目处于"修 Bug 与定 RFC"双轨并行阶段，单日净代码合入量较少，但安全面、容器化部署、CI 防线三个维度均有关键里程碑落地，**健康度评分：中等偏好**。

---

## 4. 社区热点

按评论数与讨论深度排序的今日焦点议题：

- **[#8303](https://github.com/zeroclaw-labs/zeroclaw/issues/8303) RFC: Goal mode v1 — bounded foreground Matrix work（19 条评论）**  
  诉求：让 ZeroClaw 能在多个 agent turn 中持续追求一个有边界的用户目标。本提案是对早期版本的范围收窄，将"重启交接、广泛通道接入、Web、异步子工作"解耦。 👍 1 — 社区对可控的"长任务代理"模式兴趣浓厚。

- **[#8603](https://github.com/zeroclaw-labs/zeroclaw/issues/8603) RFC: ZeroClaw Chat Completions profile（18 条评论）**  
  诉求：让 ZeroClaw 兼容 OpenAI Chat Completions 协议，对接 Open WebUI、LobeChat、Continue.dev、Aider、LangChain 等客户端。表明生态兼容是当务之急。

- **[#7155](https://github.com/zeroclaw-labs/zeroclaw/issues/7155) RFC: per-execution confirmation tier + Claude Code-style 模式策略（17 条评论）**  
  诉求：为高危 shell 命令引入"每次执行确认档位"与命令模式 allow/ask/deny 策略，借鉴 Claude Code 设计。Revision 3 已由维护者确认范围。

- **[#7141](https://github.com/zeroclaw-labs/zeroclaw/issues/7141) RFC: Pluggable inbound authentication and canonical principals（14 条评论，Rev 8）**  
  诉求：统一入站认证与权威主体模型，是 v0.9.0 身份与访问里程碑的基石性 RFC。

- **[#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) [Tracker] Maintainer decision queue for RFCs and design issues（13 条评论，accepted）**  
  这是"管理瓶颈的镜像"——RFC 排队等待决策，本身已是社区关注热点。

- **[#9487](https://github.com/zeroclaw-labs/zeroclaw/issues/9487) RFC: Runtime-owned conversation sessions and transport surface adapters（10 条评论，Rev 2）**  
  诉求：把会话与传输适配器都收归运行时所有，配套 #9488/#9600 边界已定型。

---

## 5. Bug 与稳定性

### P1 严重级（已开放）

| Issue | 描述 | 是否有对应 Fix PR |
|---|---|---|
| [#9883](https://github.com/zeroclaw-labs/zeroclaw/issues/9883) | 入站 WebP 转换在共享图像验证器之前无界解码（潜在 DoS / 内存放大） | 无 |
| [#9872](https://github.com/zeroclaw-labs/zeroclaw/issues/9872) | Bounded delegate 模式下，被委派代理的文件系统操作落到委派者工作区（**安全沙箱逃逸类**） | 无 |

### P1 严重级（已有 Fix PR，待合并）

| PR | 修复内容 |
|---|---|
| [#9918](https://github.com/zeroclaw-labs/zeroclaw/pull/9918) | 网关 abort/rename/state/message_post 接口接受完整 session_key，避免 `gw_gw_<id>` 双前缀 200 假成功 |
| [#9885](https://github.com/zeroclaw-labs/zeroclaw/pull/9885) | SOP `sops_dir` 守护进程端默认路径生效 |
| [#9862](https://github.com/zeroclaw-labs/zeroclaw/pull/9862) | 流式处理 `http_request` 响应体，fal.ai 客户端禁用自动重定向防止凭据外泄 |
| [#9841](https://github.com/zeroclaw-labs/zeroclaw/pull/9841) | 驱动 headless SOP 运行并闭环 #9494 评审中发现的 5 项缺陷 |
| [#9612](https://github.com/zeroclaw-labs/zeroclaw/pull/9612) | WhatsApp Cloud approval token 用 guard 绑定，避免提前退出遗留凭据 |
| [#9580](https://github.com/zeroclaw-labs/zeroclaw/pull/9580) | 内置 HTTP 出站在共享网络守卫上加固（拒绝非全局 IPv4/IPv6、共享 net_guard 原语） |
| [#9900](https://github.com/zeroclaw-labs/zeroclaw/pull/9900) | OpenAI Codex 端点失败时不带流式重试，避免 400 |
| [#9609](https://github.com/zeroclaw-labs/zeroclaw/pull/9609) | WhatsApp Web `dm_policy`/`group_policy` 在 business 模式下也生效 |
| [#9350](https://github.com/zeroclaw-labs/zeroclaw/pull/9350) | `zeroclaw cron add` 添加 delivery 标志，避免交付目标被硬编码为 None |

### P2 严重级（值得注意）

- [#9748](https://github.com/zeroclaw-labs/zeroclaw/pull/9748) 防止过期 provider 刷新变更替换会话（修复 #9719）
- [#9561](https://github.com/zeroclaw-labs/zeroclaw/pull/9561) 从渲染的人格 prompt 中移除冗余的 `### FILENAME.md` 标签，节省 token
- [#9709](https://github.com/zeroclaw-labs/zeroclaw/pull/9709) 修复 Edge TTS 临时输出文件在错误路径上的残留
- [#9707](https://github.com/zeroclaw-labs/zeroclaw/pull/9707) 配置中裸 `vision_model_provider` 迁移到点号别名引用

**评估：** P1 安全相关 Bug 修复占今日 PR 池的近 40%，显示安全为本轮迭代硬约束；无崩溃/数据丢失类报告。

---

## 6. 功能请求与路线图信号

### 进入实施阶段的强信号

- **WhatsApp Web `request_approval`** —— [#9385](https://github.com/zeroclaw-labs/zeroclaw/pull/9385)（XL 级）已开放 17 天，被列入高优先审批。
- **Windows 原生 PowerShell 运行时支持** —— [#9182](https://github.com/zeroclaw-labs/zeroclaw/pull/9182)（XL 级），扩展 `runtime.shell`，对 Windows 用户体验显著。
- **插件 typed instance config 校验** —— [#9126](https://github.com/zeroclaw-labs/zeroclaw/pull/9126)（XL 级），要求 `config_read` manifest 声明 Draft 2020-12 schema。
- **可观测性 Herdr 集成** —— [#8337](https://github.com/zeroclaw-labs/zeroclaw/pull/8337)（XL 级），CLI 交互模式自动上报 agent 生命周期。

### 处于讨论/共识阶段

- Chat Completions 兼容（#8603）—— 生态接入窗口期
- Goal mode v1（#8303）—— 长任务代理的"前台 bounded 工作"模型
- Pluggable inbound auth（#7141 Rev 8）—— v0.9.0 身份基石
- 平台无关 LSP 支持（#5907）—— 让本地模型受益
- 响应缓存策略（#8321）—— 多缓存面界限

### 仍属 RFI / 待决策

- **Lucid memory 连接器退役**（#9644）：上游项目停滞，建议 v0.9.0 移除。
- **派生能力就绪度**（#8367，blocked）：agent 区分"不支持"vs"禁用"的能力。

---

## 7. 用户反馈摘要

从 Issues 评论中提炼的真实用户痛点：

1. **"代理成本不可控"** —— [#2269](https://github.com/zeroclaw-labs/zeroclaw/issues/2269) 用户在邮件/ticket/IM 等长时间运行工作流上，单一高端模型代价令终端用户难以承受；社区倾向多模型分层与缓存策略（呼应 #8321）。
2. **"Chat Completions 协议是入场券"** —— [#8603](https://github.com/zeroclaw-labs/zeroclaw/issues/8603) 用户希望无需定制客户端就能用 Open WebUI / Aider / LangChain 等现成工具链接入。
3. **"Shell 命令太黑盒"** —— [#7155](https://github.com/zeroclaw-labs/zeroclaw/issues/7155) 用户希望引入类似 Claude Code 的命令模式策略（allow/ask/deny），以避免 agent 误删文件或越权操作。
4. **"Docker 发布端口不可达"** —— [#9035](https://github.com/zeroclaw-labs/zeroclaw/issues/9035) `docker compose up` 成功但端口 refused，影响容器化部署体验。
5. **"运维误触发 reload 信号"** —— [#9768](https://github.com/zeroclaw-labs/zeroclaw/issues/9768) Daemon 降级警告推荐 SIGUSR1，实际却杀死进程，文档与实现不一致。
6. **"Bounded delegate 工作区错位"** —— [#9872](https://github.com/zeroclaw-labs/zeroclaw/issues/9872) Executive Assistant 委派给 Researcher 时，文件操作落到错误工作区，是具名的安全沙箱越权场景。
7. **"WebP 入站转换无界"** —— [#9883](https://github.com/zeroclaw-labs/zeroclaw/issues/9883) 在共享图像验证器之前解码，可能造成 DoS / 内存放大。

整体满意度：技术贡献者活跃、参与 RFC 评审积极；但也反映出"运维文档准确性、容器化默认配置、agent 边界责任"等运营层痛点。

---

## 8. 待处理积压（提醒维护者关注）

| ID | 标题 | 创建距今 | 关注点 |
|---|---|---|---|
| [#6653](https://github.com/zeroclaw-labs/zeroclaw/issues/6653) | RFC: Define host-architecture policy for emulated installs | ~89 天 | needs-author-action，p3 推进 |
| [#5907](https://github.com/zeroclaw-labs/zeroclaw/issues/5907) | RFC: Opt-in LSP support for ZeroCode coding workflows | ~115 天 | needs-author-action，p2 |
| [#5907 / #7141 / #7142](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) | 维护者决策队列 #8692 已列出 13+ 项 RFC 待决 | 持续 | 安全/架构决策瓶颈 |
| [#8337](https

</details>

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*