# OpenClaw 生态日报 2026-08-21

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-08-21 00:55 UTC

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
**日期：2026-08-21**

---

## 一、今日速览

OpenClaw 仓库过去 24 小时呈现**高强度、高负载的"维护期"特征**：Issues 更新 500 条（活跃 470 / 关闭 30），PR 更新 500 条（待合并 360 / 已合并或关闭 140），但**无新版本发布**。社区讨论主要围绕 v2026.8.1-beta.2 的稳定性回归、Gateway 启动/重启循环、SQLite 持久化语义、Windows 平台兼容性，以及 Telegram/Feishu 等 Channel 适配器的消息丢失问题。多个高优先级（P0/P1）Bug 至今仍处于"无修复 PR"或"等待作者回复"状态，叠加大量 `clawsweeper-recovery-stuck` 标签，提示维护团队当前存在明显的**积压压力**，需要重点跟进。

---

## 二、版本发布

⚠️ **今日无新版本发布**。

当前处于 **v2026.8.1-beta.2** 的发布验证阶段，验证任务见 Issue [#125626](https://github.com/openclaw/openclaw/issues/125626)（Patrick-Erichsen 创建，17 条评论）。考虑到 beta.2 引入的多个回归（如 vLLM openai-completions + thinking 模型在 subagent spawn 时 XML 工具调用畸形、Assistant turn 双渲染、Codex 受限工具策略静默禁用 AGENTS.md 等），建议用户在生产环境暂缓升级到 8.1-beta.2，等待稳定版或后续 beta。

---

## 三、项目进展（今日合并/关闭的重要 PR）

今日共 **140 个 PR 被合并或关闭**，以下为代表性进展：

| PR | 标题 | 状态 | 影响 |
|---|---|---|---|
| [#116489](https://github.com/openclaw/openclaw/pull/116489) | feat(security): require acknowledgement for install policy warnings | CLOSED | 安全策略改进：插件安装新增 `warn` 阶段，需运维确认后才能继续；影响 macOS/gateway/cli/security/agents 多端 |
| [#120900](https://github.com/openclaw/openclaw/pull/120900) | feat(ui): review install policy warnings | CLOSED | Control UI 配套改动：管理员可在 UI 中审核 install-policy 告警，含视频证据 |
| [#125471](https://github.com/openclaw/openclaw/pull/125471) | fix(models): keep Claude CLI OAuth available in Control UI | CLOSED | 修复 Gateway 重启后 `anthropic:claude-cli` OAuth 刷新失效、auth-profiles 错配导致主通道死锁的问题 |
| [#126877](https://github.com/openclaw/openclaw/pull/126877) | fix(onboard): honor secret-input-mode ref for the generated gateway token | CLOSED | 修复 `openclaw onboard --secret-input-mode ref` 仍以明文写入 token 的问题，强化密钥管理契约 |

**整体评估**：今日合并的 PR 集中在**安全与身份鉴权加固**（install policy、密钥引用、OAuth 刷新）以及**测试代码精简**，未触及核心 Agent 运行时的重大变更。说明团队当前**优先处理安全债与 beta 收口**，而功能性演进处于保守节奏。

---

## 四、社区热点（讨论最活跃的话题）

### 🔥 今日评论最多 Issues（按热度排序）

1. **[#42475](https://github.com/openclaw/openclaw/issues/42475)** — *Per-agent cost budget enforcement at the gateway level*（23 条评论）  
   提出在 Gateway 层面为每个 Agent 强制执行日/月费用上限，防止成本失控。代表了一类**运维侧"成本治理"诉求**。

2. **[#48788](https://github.com/openclaw/openclaw/issues/48788)** — *centralized filename encoding utility for multi-encoding Content-Disposition handling*（20 条评论）  
   围绕 Feishu 等多字节文件名编码的统一抽象（Shift-JIS、EUC-KR、GB18030），反映**多 Channel 适配器一致性的架构需求**。

3. **[#125626](https://github.com/openclaw/openclaw/issues/125626)** — *Release validation: v2026.8.1-beta.2*（17 条评论）  
   beta 验证任务，是当前版本的"质量关卡"。

4. **[#108435](https://github.com/openclaw/openclaw/issues/108435)** — *update to openclaw 2026.7.1: gateway fails to start w/ error*（14 条评论，👍 3）  
   升级到 2026.7.1 后 gateway 无法启动（systemd、ollama、手动启动均失败），是**升级路径上的严重阻塞**。

5. **[#38327](https://github.com/openclaw/openclaw/issues/38327)** — *"Cannot convert undefined or null to object" in 2026.3.2 with google-vertex/gemini-3.1-pro-preview*（14 条评论，👍 3）  
   2026.3.2 引入的回归，至今未修复。

### 🔥 今日讨论最热 PR（值得关注的进行中工作）

- **[#121576](https://github.com/openclaw/openclaw/pull/121576)** — `stripModelSpecialTokens` 在剥离控制 token 时只在 word 字符之间插入分隔符（XL，影响几乎所有 channel 与 extension）。
- **[#126424](https://github.com/openclaw/openclaw/pull/126424)** — Gateway 保持会话投递在 agent bindings 内（XL，P1，message-delivery 风险）。
- **[#126537](https://github.com/openclaw/openclaw/pull/126537)** — `sessions_yield` handoff 在 tool settlement 中保留 accepted 状态（L，P1）。
- **[#125068](https://github.com/openclaw/openclaw/pull/125068)** — Control UI 侧边栏新增 session hovercards（XL，UI 体验增强）。

**社区诉求归纳**：
- **可观测性增强**：希望 session/agent/runtime 暴露更多内部状态（resolved backend model、usage cost lock 等）；
- **跨平台一致性**：Windows + macOS + Docker + WSL 子系统下的运行差异巨大；
- **数据安全**：session/state/SQLite 的并发读写、快照恢复、文件路径处理等成为新焦点。

---

## 五、Bug 与稳定性（按严重程度排列）

### 🚨 P0（最高优先级，可能阻塞发布）

| Issue | 标题 | 是否已有 fix PR |
|---|---|---|
| [#108435](https://github.com/openclaw/openclaw/issues/108435) | 2026.7.1 升级后 gateway 启动失败（systemd/ollama/manual 全失败） | ❌ 无 |
| [#48920](https://github.com/openclaw/openclaw/issues/48920) | Live Docs 领先于 release：`Heartbeat IsolatedSessions` 文档有但 2026.3.13 未包含（👍 4） | ❌ 无 |
| [#119270](https://github.com/openclaw/openclaw/issues/119270) | 文件工具剥离目标路径前的 `@`，导致写入/删除错误文件（P0，data-loss 风险） | ❌ 无 |

### ⚠️ P1（高优先级，影响核心功能）

| Issue | 标题 | 是否已有 fix PR |
|---|---|---|
| [#38327](https://github.com/openclaw/openclaw/issues/38327) | google-vertex/gemini-3.1-pro-preview 嵌入式 agent "Cannot convert undefined or null to object" | ❌ 无 |
| [#113306](https://github.com/openclaw/openclaw/issues/113306) | SQLite snapshot restore 缺少端到端崩溃与身份保证（data-loss） | ❌ 无 |
| [#97616](https://github.com/openclaw/openclaw/issues/97616) | OpenClaw 泄漏未回收的 hook/tool 子进程，累积 zombie（crash-loop + 性能退化） | ❌ 无 |
| [#123073](https://github.com/openclaw/openclaw/issues/123073) | dev-channel update 失败：updater 用 npm 但仓库要求 pnpm（EUNSUPPORTEDPROTOCOL） | ❌ 无 |
| [#125431](https://github.com/openclaw/openclaw/issues/125431) | Codex 受限工具策略静默禁用 workspace AGENTS.md（安全 + 状态） | ❌ 无 |
| [#72015](https://github.com/openclaw/openclaw/issues/72015) | active-memory 阻塞回复 + QMD 启动压垮多 agent gateway（crash-loop） | ❌ 无 |
| [#86612](https://github.com/openclaw/openclaw/issues/86612) | Docker gateway 容器重启循环（OPENCLAW_SANDBOX=1 + Windows 挂载） | ❌ 无 |
| [#123273](https://github.com/openclaw/openclaw/issues/123273) | 命名 agent（非 default）图片附件水合失败（message-loss） | ❌ 无 |
| [#112259](https://github.com/openclaw/openclaw/issues/112259) | 可见入站 channel turn 可被静默丢弃（零 payload dispatch，无 retry/dead-letter） | ❌ 无 |
| [#114234](https://github.com/openclaw/openclaw/issues/114234) | Usage-cost refresh lock 在容器 PID 复用后永久冻结 | ❌ 无 |
| [#126246](https://github.com/openclaw/openclaw/issues/126246) | Telegram durable outbound 卡在 `send_attempt_started`，重启后丢失 | ❌ 无 |
| [#90361](https://github.com/openclaw/openclaw/issues/90361) | `memory_search` 间歇性 "index metadata is missing"（regression，👍 3） | ❌ 无 |
| [#83598](https://github.com/openclaw/openclaw/issues/83598) | anthropic:claude-cli OAuth refresh 在 2026.5.12 仍 dead-end（即便 #73682 已修） | ❌ 无 |
| [#124284](https://github.com/openclaw/openclaw/issues/124284) | vLLM + thinking 模型 subagent spawn 时 XML 工具调用畸形（2026.8.1-beta.2 引入） | ❌ 无 |
| [#92241](https://github.com/openclaw/openclaw/issues/92241) | 回滚后 gateway 持有陈旧模块导入路径，inbound 静默丢弃 | ❌ 无 |
| [#118839](https://github.com/openclaw/openclaw/issues/118839) | 2026.7.2-beta.7 重启恢复 "claim changed before agent adoption" 回归 | ❌ 无 |
| [#58957](https://github.com/openclaw/openclaw/issues/58957) | 模型切换/超长 session 上下文静默失败 | ❌ 无 |
| [#125626](https://github.com/openclaw/openclaw/issues/125626) | Release validation: v2026.8.1-beta.2（meta） | — |
| [#114234](https://github.com/openclaw/openclaw/issues/114234) | Usage-cost refresh lock 死锁 | ❌ 无 |
| [#123792](https://github.com/openclaw/openclaw/issues/123792) | CLI 后端 assistant turn 双渲染（webchat/Android） | ❌ 无 |
| [#43231](https://github.com/openclaw/openclaw/issues/43231) | Telegram forum 主题名 → topic_id 路由不可靠 | ❌ 无 |

### 📌 P2（中等优先级，影响体验）

| Issue | 标题 | 是否已有 fix PR |
|---|---|---|
| [#88657](https://github.com/openclaw/openclaw/issues/88657) | DeepSeek V4 Flash 不完整 turn（payloads=0, tools=2, replaySafe=no） | ❌ 无 |
| [#43747](https://github.com/openclaw/openclaw/issues/43747) | Memory management 一致性混乱（不同用户存储策略不一致） | ❌ 无 |
| [#119796](https://github.com/openclaw/openclaw/issues/119796) | Windows: vitest teardown EBUSY（agent state DB handle 未释放） | ❌ 无 |
| [#53628](https://github.com/openclaw/openclaw/issues/53628) | `${XDG_CONFIG_HOME}` 在安装 skill 时不被解析 | ❌ 无 |
| [#74378](https://github.com/openclaw/openclaw/issues/74378) | Windows 下 `node.exe openclaw <cmd>` 执行后仍驻留 | ❌ 无 |
| [#50490](https://github.com/openclaw/openclaw/issues/50490) | Feishu 群聊 `/activation mention` 切换无效 | ❌ 无 |
| [#90378](https://github.com/openclaw/openclaw/issues/90378) | 5.28→6.1 cron 静默迁移 SQLite，新 job 默认 `delivery.mode=announce` 致 channel 错误 | ❌ 无 |
| [#44134](https://github.com/openclaw/openclaw/issues/44134) | Google Antigravity 因 Tool Schema 频繁重载触发反滥用封号 | ❌ 无 |
| [#60612](https://github.com/openclaw/openclaw/issues/60612) | Doctor 警告 NVM node 但无法修复（launchd plist 覆盖） | ❌ 无 |
| [#71142](https://github.com/openclaw/openclaw/issues/71142) | Control UI 上传大小硬编码 5MB | ❌ 无 |
| [#51441](https://github.com/openclaw/openclaw/issues/51441) | `session_status` 不暴露 resolved backend model（代理盲区） | ❌ 无 |
| [#71689](https://github.com/openclaw/openclaw/issues/71689) | tasks registry restore 在 SQLite 损坏时失败 | ❌ 无 |
| [#43374](https://github.com/openclaw/openclaw/issues/43374) | 4 agent 并发时所有 LLM 调用同时超时（内部瓶颈） | ❌ 无 |

**稳定性总结**：上述 P0/P1 中，绝大多数**仍无对应修复 PR**，且多个被标记为 `clawsweeper-recovery-stuck`（恢复流程卡住）。**当前是社区风险敞口最大的窗口期之一**，建议维护团队针对 message-loss、data-loss、crash-loop 三类问题集中清理。

---

## 六、功能请求与路线图信号

| 需求 | Issue | 路线图判断 |
|---|---|---|
| Gateway 级别 per-agent 成本预算 | [#42475](https://github.com/openclaw/openclaw/issues/42475) | 与 [#44289 secretref 文档自动化](https://github.com/openclaw/openclaw/issues/44289) 形成"成本治理 + 凭据治理"组合，**强烈有望纳入 2026.9+** |
| 多编码 Content-Disposition 集中处理 | [#48788](https://github.com/openclaw/openclaw/issues/48788) | 与已有 [#48578](https://github.com/openclaw/openclaw/pull/48578) 互补，**Channel 抽象层演进** |
| Resolved backend model 暴露 | [#51441](https://github.com/openclaw/openclaw/issues/51441) | 与 [#119270](https://github.com/openclaw/openclaw/issues/119270) 等可观测性诉求一致，**可观测性主题** |
| Provider 按失败类别回退/隔离 | [#47910](https://github.com/openclaw/openclaw/issues/47910) | 与 [#58957 模型切换](https://github.com/openclaw/openclaw/issues/58957) 互补，**模型层鲁棒性** |
| Control UI 可配置上传大小 | [#71142](https://github.com/openclaw/openclaw/issues/71142) | 简单配置项，**快速胜利** |
| ACP thread-bound 代理消息 | [#50798](https://github.com/openclaw/openclaw/issues/50798) | ACP 协议深化 |
| Reasoning stream 实时流式 | [#42276](https://github.com/openclaw/openclaw/issues/42276) | UI 体验差异化 |
| `session.resetPrompt` 可配置 | [#45501](https://github.com/openclaw/openclaw/issues/45501) | 易实现 |
| `/new` `/reset` 二次确认 | [#45564](https://github.com/openclaw/openclaw/issues/45564) | 防误操作，UX 改进 |
| HTTP `/v1/chat/completions` 轻量模式（10–15s TTFB → ~400ms） | [#68920](https://github.com/openclaw/openclaw/issues/68920) | 与 [#126619 tools.profile=minimal](https://github.com/openclaw/openclaw/pull/126619)、[#126616 共享 session](https://github.com/openclaw/openclaw/pull/126616) 同主题，**HTTP API 实时的关键** |
| MEMORY.md 大小预警 | [#45415](https://github.com/openclaw/openclaw/issues/45415) | 与 [#43747 memory 混乱](https://github.com/openclaw/openclaw/issues/43747) 共因 |
| lane 等待阈值可配置 | [#14747](https://github.com/openclaw/openclaw/issues/14747) | 调度可调参数 |

**综合信号**：未来 1–2 个版本最可能落地的方向是 **(a) 可观测性 & 成本治理，(b) Channel/适配器抽象统一，(c) HTTP /v1 实时性能**。

---

## 七、用户反馈摘要

从 Issues 评论提炼的真实用户痛点：

- **😤 升级恐惧**：升级到 2026.7.1/2026.8.1-beta.2 后出现 Gateway 启动失败、模型调用 crash、OAuth 失效等大量回归，用户对版本稳定性信心下降（[#108435](https://github.com/openclaw/openclaw/issues/108435)、[#125431](https://github.com/openclaw/openclaw/issues/125431)）。
- **😤 静默失败最令人沮丧**：消息丢失（[#112259](https://github.com/openclaw/openclaw/issues/112259)、[#126246](https://github.com/openclaw/openclaw/issues/126246)、[#88657](https://github.com/openclaw/openclaw/issues/88657)）和模型调用零 payload 是最高频的吐槽点——用户"看到消息发出去了，却不知为何没回应"。
- **😤 Windows 体验长期欠佳**：CLI

---

## 横向生态对比

# 2026-08-21 AI 智能体开源生态横向对比分析

---

## 一、生态全景

2026-08-21 的开源 AI 智能体生态呈现**"两极分化加剧"**的特征：一端是以 OpenClaw、IronClaw、ZeroClaw、CoPaw/QwenPaw 为代表的高活跃头部项目，单日 PR/Issue 更新量在 28–500 条之间，专注于安全加固、Provider 扩展、Channel 抽象与可观测性等基础设施议题；另一端是 NullClaw、TinyClaw、ZeptoClaw 等完全沉寂的项目，反映出**生态进入"收敛期"——开发者注意力向头部集中**。当日仅 Moltis 与 CoPaw 各自发布一个版本（含 beta），其余项目处于 PR 积压或修复窗口期。**维护压力、文档与实现一致性、Windows 兼容性**已成为整个生态的系统性挑战，而非个别项目的问题。

---

## 二、各项目活跃度对比

| 项目 | Issues 更新 | PR 更新 | Release | 合并率 | 健康度 | 阶段特征 |
|---|---|---|---|---|---|---|
| **OpenClaw** | 500（活跃 470/关闭 30） | 500（待合并 360/处理 140） | ❌ 无 | 28% | 🟠 中等 | 高负载维护期，beta 验证 |
| **NanoBot** | 5 | 29（合并 12） | ❌ 无 | 41% | 🟢 良好 | 高强度迭代，Provider/Channel 扩张 |
| **Hermes Agent** | 50（关闭 8） | 50（合并 4） | ❌ 无 | 8% | 🟠 中等 | Windows/会话层风险高 |
| **PicoClaw** | 极少 | 8（关闭 3） | ❌ 无 | — | 🔴 偏弱 | 维护静默，stale 积压 |
| **NanoClaw** | 3 | 50（合并 15） | ❌ 无 | 30% | 🟠 中等 | 大规模重构期，单点依赖 |
| **NullClaw** | 0 | 0 | — | — | ⚫ 沉寂 | 24h 无活动 |
| **IronClaw** | 21（关闭 4） | 33（合并 14） | ❌ 无 | 42% | 🟢 良好 | 多 Epic 并行，CI 恢复 |
| **LobsterAI** | 2 | 7（关闭 6） | ❌ 无 | — | 🔴 偏弱 | 全量 stale，响应滞后 |
| **TinyClaw** | 0 | 0 | — | — | � 沉寂 | 24h 无活动 |
| **Moltis** | 1（关闭 1） | 8（合并 4） | ✅ **20260820.01** | 50% | 🟢 良好 | 安全加固 + WhatsApp 打磨 |
| **CoPaw/QwenPaw** | 28（关闭 13） | 50（合并 28） | ✅ **v2.1.1-beta.1** | 56% | 🟢 良好 | 高响应，Console 优化 |
| **ZeptoClaw** | 0 | 0 | — | — | ⚫ 沉寂 | 24h 无活动 |
| **ZeroClaw** | 50（关闭 5） | 50（合并 2） | ❌ 无 | 4% | 🟠 中等 | 重讨论轻合并，治理规范期 |

**关键观察**：
- **合并率分布**：CoPaw（56%）、Moltis（50%）、IronClaw（42%）、NanoBot（41%）领先；ZeroClaw（4%）、Hermes（8%）明显落后。
- **当日仅 2 个项目发布版本**，且 Moltis 为每日滚动构建，CoPaw 为 beta 验证——稳定版输出节奏整体放缓。
- **5 个项目 24h 无活动**（NullClaw、TinyClaw、ZeptoClaw 等），生态注意力进一步向头部集中。

---

## 三、OpenClaw 在生态中的定位

### 1. 规模与活跃度

OpenClaw 单日 500 条 Issue + 500 条 PR 更新，是当日**绝对活跃度第一**（约为第二梯队 Hermes/ZeroClaw 的 10 倍）。这反映出：
- **社区规模最大**：issue/PR 数量级远超其他项目，贡献者网络成熟；
- **维护压力也最大**：360 条待合并 PR + 大量 P0/P1 无 fix，是当日**风险敞口最大的项目**。

### 2. 阶段特征对比

| 维度 | OpenClaw | IronClaw | ZeroClaw | CoPaw/QwenPaw |
|---|---|---|---|---|
| 当前阶段 | beta 验证 + 维护 | 多 Epic 推进 | RFC 治理规范期 | Beta 体验优化 |
| Issue 关闭率（24h） | 6% | 19% | 10% | 46% |
| PR 合并率（24h） | 28% | 42% | 4% | 56% |
| 主要焦点 | 安全债 + Channel 抽象 | 持久沙箱 + Hook 框架 | 安全策略形式化 | Console + Skills |
| 用户痛点类型 | 升级回归 + 静默失败 | 文档可信度 + 隐形损坏 | 配置不生效 | 长会话卡顿 |

### 3. 技术路线差异

- **OpenClaw** 走"大而全"路线，覆盖 8+ Channel（Slack/Telegram/Feishu/Matrix/Discord 等）、多 Provider、多 Backend 抽象；当前瓶颈是**beta.2 引入的多个回归**未消化。
- **IronClaw**（Rust 实现）走"沙箱 + Hook 框架"路线，强调 per-user 持久化（#7732 iron-proxy）和代理生命周期钩子（#7770）。
- **ZeroClaw** 走"治理 + 形式化安全"路线，强调 Shell 策略契约（#7155）、WASM 插件架构（#10076）、Rust 反 slop 治理（#10118）。
- **CoPaw/QwenPaw** 走"产品化体验"路线，专注 Console 编辑器、Skills 工作区作用域、跨会话记忆。

### 4. 社区规模对比

OpenClaw 单 issue 评论可达 23 条（#42475 成本治理）、14 条（#108435 升级失败）；相比之下 NanoBot 单 issue 评论多为 0–1 条，PicoClaw/LobsterAI 完全 stale。OpenClaw 在"功能请求被讨论"维度上的社区响应深度仍领先。

**OpenClaw 的关键定位**：**生态基准与最大社区**——但当前最大的威胁是"维护强度 > 合并吞吐"导致的积压放大。

---

## 四、共同关注的技术方向

以下议题在多项目同步出现，反映生态共识性需求：

### 1. **可观测性 / 成本治理**（涉及 5 个项目）
- OpenClaw：#42475 Gateway 级别 per-agent 成本预算；#51441 resolved backend model 暴露
- NanoBot：#5420 WebUI turn observability + safe recovery
- Hermes Agent：#90866 可观察状态携带证明（架构级讨论）
- IronClaw：#7776 memory.write expected-version 模式（并发可见性）
- ZeroClaw：#6850 内存生命周期与存储后端解耦

### 2. **Channel 适配器抽象 / 多平台一致性**（涉及 7 个项目）
- OpenClaw：#48788 多编码 Content-Disposition 集中处理；Feishu/Telegram 消息丢失
- NanoBot：Matrix/Telegram/Slack/MCP channel 稳定性
- Hermes Agent：#91198 Discord `allow_bots` 配置一致性
- IronClaw：#7738 Slack 配置字段帮助文本（与 Telegram 对齐）
- Moltis：WhatsApp 三连击修复（#1217、#1218、#1219）
- NanoClaw：Slack/WhatsApp/Matrix/Cursor 多 channel 接入
- CoPaw/QwenPaw：钉钉/QQ 渠道扩展

### 3. **会话 / SQLite 持久化可靠性**（涉及 5 个项目）
- OpenClaw：#113306 SQLite snapshot restore data-loss
- Hermes Agent：#85079 WAL 并发追加；#89293 state.db 8 天 3 次损坏
- IronClaw：#7776 memory.write 并发覆盖
- ZeroClaw：#6850 存储后端解耦；#9715 JSONL 迁移事务化
- NanoBot：#5379 memory 合并保留完整输入

### 4. **Windows 兼容性**（涉及 4 个项目）
- OpenClaw：#119796 vitest teardown EBUSY；#74378 node.exe 驻留
- Hermes Agent：#86443 update 删除桌面可执行文件；#44225 Electron 重建失败；#90906 uv Python 升级；#90237 Win11 透明模式破坏 Snap；#90829/#90134/#91021 多个 Windows 问题；#91188/#91193/#91196 多条修复 PR
- ZeroClaw：#10111 TaskDialogIndirect 缺失；#7910 Windows 自更新 swap/rollback
- Moltis：#468 Windows shell hooks（已挂 5 个月）

### 5. **OAuth / 认证链路**（涉及 5 个项目）
- OpenClaw：#83598 Claude CLI OAuth refresh；#125471 OAuth 刷新失效
- NanoBot：#5444 Docker OAuth 失败；#5338 MCP OAuth 凭据保护
- Hermes Agent：#91199 OpenAI Codex OAuth 订阅代理；#65346 OAuth 2-3 天失效
- IronClaw：#7308 Attio MCP OAuth scope（已修）
- ZeroClaw：多 RFC 涉及凭据管理

### 6. **MCP 生态演进**（涉及 4 个项目）
- NanoBot：#5179 / #5180 MCP SDK v2 迁移（双路径决策悬而未决）
- NanoClaw：per-group MCP seam（#3408 系列）
- Hermes Agent：MCP 集成一致性
- OpenClaw：MCP 作为外部工具扩展点

### 7. **持久化沙箱 / 进程隔离

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目日报 | 2026-08-21

> 数据来源：github.com/HKUDS/nanobot | 报告生成时间窗口：过去 24 小时

---

## 1. 今日速览

NanoBot 今日维持高强度迭代节奏：**29 个 PR 更新**（其中 12 个已合并/关闭）+ **5 个 Issue 更新**（3 新开/活跃 + 2 关闭），但**无新版本发布**。活跃贡献集中在 **Provider 适配**（Codex 重试、SenseNova 新增、Vertex AI 需求）、**多渠道稳定性**（Matrix/Telegram/Slack/MCP 通道）、**Agent 后台任务生命周期**与 **WebUI 可观测性**四条主线，整体呈现出"补强与扩张并重"的开发姿态。值得关注的是仍有 **17 个 PR 待合并**，审稿积压需要维护者跟进。

---

## 2. 版本发布

**今日无新 Release。** 最近的功能改进通过主分支直接合入，尚未打 tag。

---

## 3. 项目进展

今日合入/关闭的 PR 共 12 个，覆盖 CLI 稳定性、TUI 易用性与 WebUI 体验：

- 🔧 **#1203 [CLOSED]** — 修复 Linux 下 Python 3.11 关闭时 `RuntimeError: Event loop is closed` 的 CLI 关闭路径异常。该问题在 issue #550 中已讨论较久，本次以 workaround 形式落地。 [🔗](https://github.com/HKUDS/nanobot/pull/1203)
- ✨ **#5452 [CLOSED]** — `feat(tui): print resume command on exit`：TUI 退出后自动打印可一键恢复的 `nanobot agent --session websocket:<id>` 命令，覆盖多平台终端烟雾测试。 [🔗](https://github.com/HKUDS/nanobot/pull/5452)
- 🎨 **#5240 [CLOSED]** — `refactor(webui): unify floating controls`：统一 WebUI 中浮层控件的样式与选中/销毁态语义，同时保留正确的 Menu/Popover/Combobox 角色。 [🔗](https://github.com/HKUDS/nanobot/pull/5240)
- 🐛 **#5425 [CLOSED]** — Issue 关闭：支持自定义 OpenAI 兼容 provider 时使用 `socks://` 代理 URL，配置与环境变量中的 `socks://` 别名已能正确解析。 [🔗](https://github.com/HKUDS/nanobot/issues/5425)
- 🚫 **#5447 [CLOSED]** — 关闭：商业 MCP/x402 安全扫描集成提案（ScanPay）。从处理结果推断为超出项目路线图范围或重复。 [🔗](https://github.com/HKUDS/nanobot/issues/5447)

> **进度判断**：合并方向主要是"打磨"型——CLI 崩溃、TUI 易用性、WebUI 一致性，无大规模架构变更，项目整体向前迈进了**一小步但稳健的一步**。

---

## 4. 社区热点

按可观察的讨论活跃度排序（Issues/PRs 列表中评论数与点赞数多者）：

| 排名 | 编号 | 类型 | 标题 | 评论 | 链接 |
|---|---|---|---|---|---|
| 1 | #5444 | Issue | Failed to login OpenAI via OAuth in Docker | 1 | [🔗](https://github.com/HKUDS/nanobot/issues/5444) |
| 2 | #5459 | Issue | Feature request: Add native Google Vertex AI provider for Claude | 0 | [🔗](https://github.com/HKUDS/nanobot/issues/5459) |
| 3 | #5420 | PR | feat(webui): add turn observability and safe recovery | — | [🔗](https://github.com/HKUDS/nanobot/pull/5420) |
| 4 | #5179 | PR | Migrate MCP integration to SDK v2 with legacy compatibility | — | [🔗](https://github.com/HKUDS/nanobot/pull/5179) |

**诉求分析**：
- **Docker 化部署 + OAuth 登录链路**（#5444）：反映社区在容器化使用 NanoBot 接入官方 OpenAI 账户时遇到阻碍，OAuth callback 在容器网络模型下需要更稳健的处理。
- **Vertex AI + Claude**（#5459）：企业级合规部署需求强烈，希望通过 GCP Vertex AI 接入 Anthropic Claude，避免直接使用 Anthropic 官方通道。
- **WebUI 可观测性 + 安全恢复**（#5420）：WebUI 用户希望看到完整的一次会话轨迹，包括推理、工具、文件编辑与中间助手活动，并能优雅处理中断。
- **MCP SDK v2 迁移**（#5179 / #5180）：两个并行的迁移评估 PR，反映社区对 MCP 生态升级有强烈诉求，但路线选择（最小迁移 vs. 完整迁移）存在分歧。

---

## 5. Bug 与稳定性

按严重程度（影响范围 × 触发概率）排序：

| 严重度 | 编号 | 描述 | 是否已有 Fix PR |
|---|---|---|---|
| 🟠 **中-高** | [#5454](https://github.com/HKUDS/nanobot/issues/5454) | 流式 provider 中，**已发出内容后**收到的 `server_error`（Codex `response.failed`）不会触发重试，仅在首个 delta 之前才会重试 | ✅ **#5455**（仅修复首 delta 前场景，作者：akinolur） |
| 🟠 **中** | [#5444](https://github.com/HKUDS/nanobot/issues/5444) | Docker 环境下 OpenAI OAuth 登录失败 | ❌ 暂无 |
| 🟡 **中-低** | [#5425](https://github.com/HKUDS/nanobot/issues/5425) | `socks://` 代理 URL 在 OpenAI 兼容 provider 下被错误拒绝 | ✅ 已随 Issue 关闭（修复已合并） |

**其他稳定性相关合并/在途 PR**（按主题分类）：
- **Channel 异常边界**：#5457 `fix(channels): scope dispatcher exception boundary` — 单条出站消息异常会拖垮整个 `ChannelManager._dispatch_outbound` 后台任务，需重启进程才能恢复。 [🔗](https://github.com/HKUDS/nanobot/pull/5457)
- **Agent 后台任务**：#5431 `fix(agent): report background task failures` + #5430 `fix(agent): release completed task groups` — `set.discard` 回调丢失异常、长会话 `_active_tasks` 空集合累积内存泄漏。 [🔗](https://github.com/HKUDS/nanobot/pull/5431) · [🔗](https://github.com/HKUDS/nanobot/pull/5430)
- **Provider 容错**：#5413 `fix(providers): apply fallback policy to raised errors` — provider 抛出异常时会绕过 fallback 循环直接逃逸。 [🔗](https://github.com/HKUDS/nanobot/pull/5413)
- **Slack 下载安全**：#5414 `fix(slack): validate file downloads across redirects` — 完整重定向链上的 SSRF 防护与 DNS pinning。 [🔗](https://github.com/HKUDS/nanobot/pull/5414)
- **MCP OAuth 凭据安全**：#5338 `fix(mcp): preserve credentials when OAuth store read fails` — 读失败被当作空存储，可能覆盖其他 server 的凭据。 [🔗](https://github.com/HKUDS/nanobot/pull/5338)
- **Gateway 子进程输出**：#5412 `fix(gateway): flush background child output to logs` — 块缓冲导致启动日志丢失。 [🔗](https://github.com/HKUDS/nanobot/pull/5412)
- **WebUI 临时消息**：#5339 `fix(webui): reject discarded temporary chat messages` — 用户丢弃聊天后请求可能恢复并持久化。 [🔗](https://github.com/HKUDS/nanobot/pull/5339)
- **Memory 合并**：[#5379](https://github.com/HKUDS/nanobot/pull/5379) — 保留完整 consolidation 输入（含原始 fallback 字符）。
- **Matrix 日志**：[#5458](https://github.com/HKUDS/nanobot/pull/5458) — `%s` 占位符未在 Loguru 中正确插值。

> **稳定性画像**：今日 Bug 报告集中在**流式响应错误恢复**与**OAuth/Docker 集成**两端，PR 修复数量充足，**多数已有对应修复在途**。

---

## 6. 功能请求与路线图信号

### 6.1 新提出的 Feature Request

- **[#5459](https://github.com/HKUDS/nanobot/issues/5459) Add native Google Vertex AI provider for Claude models**
  现有 provider 矩阵已覆盖 Anthropic 直连、OpenAI、Azure OpenAI、AWS Bedrock、GitHub Copilot、xAI 以及多种 OpenAI-兼容网关，但**缺少 Vertex AI 一等公民支持**。该需求反映出**企业合规部署**是社区下一步明确诉求。
  > **入版本概率**：⭐⭐⭐⭐（高）— Anthropic Claude 在 Vertex AI 上的可用性持续提升，且与现有 AWS Bedrock provider 架构可对称复用。

### 6.2 已提交且与路线图强相关的 PR

| PR | 模块 | 关联需求 | 入版本概率 |
|---|---|---|---|
| [#5453](https://github.com/HKUDS/nanobot/pull/5453) `feat(providers): add SenseNova (商汤日日新)` | 新 Provider | 国内模型接入 | ⭐⭐⭐⭐ |
| [#5455](https://github.com/HKUDS/nanobot/pull/5455) `fix(provider): retry Codex server_error` | Provider 重试 | 解决 #5454 | ⭐⭐⭐⭐⭐ |
| [#5420](https://github.com/HKUDS/nanobot/pull/5420) `feat(webui): add turn observability and safe recovery` | WebUI | 用户长期呼吁 | ⭐⭐⭐⭐ |
| [#5387](https://github.com/HKUDS/nanobot/pull/5387) `feat(telegram): support reusable sticker replies` | Telegram 渠道 | 消息体验 | ⭐⭐⭐ |
| [#5179](https://github.com/HKUDS/nanobot/pull/5179) / [#5180](https://github.com/HKUDS/nanobot/pull/5180) MCP SDK v2 迁移 | MCP 基础设施 | MCP 生态演进 | ⭐⭐⭐（需维护者决策） |

---

## 7. 用户反馈摘要

从可观察的 Issue 评论与内容中提炼：

### 🔴 痛点
1. **Docker + OAuth 流程割裂**（#5444）：用户反馈在容器中调用 OpenAI OAuth 登录时，`http://localhost:1455/auth/callback` 的回调无法在容器外浏览器接收，这是 Docker 网络模型与本地 OAuth 流程冲突的典型问题。**场景**：希望以单一容器形式快速体验 OpenAI 账户登录。**满意度**：低。

2. **流式错误恢复弱**（#5454）：用户反馈 Codex `server_error` 在流式过程中仅"前段"重试，**已开始 streaming content 后即放弃**，体验上等同于断流。**场景**：长任务调用 Codex 时的可靠性。**满意度**：低。

3. **自定义 provider 代理配置**（#5425，已关闭）：用户使用 `socks://`（业界常见写法）配置 OpenAI 兼容 provider 时失败。**满意度**：已修复，✅。

### 🟢 满意
- **TUI 退出后命令提示**（#5452）：降低用户恢复会话的心智负担。
- **`socks://` 代理**修复已落地（#5425）：用户拿到第一个 quick-win。

### 🟡 中性/提案
- **ScanPay MCP/x402 商业集成**（#5447，关闭）：用户希望将自家 Solana 安全扫描服务接入作为付费 MCP，反映出 NanoBot 生态正在**外部商业化**方向试探。

---

## 8. 待处理积压

> 以下 PR/Issue 已超过 7 天未合入或未响应，建议维护者优先 review。

| 编号 | 类型 | 创建日期 | 标题 | 关注理由 |
|---|---|---|---|---|
| [#5179](https://github.com/HKUDS/nanobot/pull/5179) | PR (p1) | 2026-07-30 | Migrate MCP integration to SDK v2 with legacy compatibility | **优先级 p1**，MCP 主线迁移 |
| [#5180](https://github.com/HKUDS/nanobot/pull/5180) | PR | 2026-07-30 | chore(mcp): evaluate minimal SDK v2 migration | 与 #5179 互为替代基线，需决策 |
| [#5338](https://github.com/HKUDS/nanobot/pull/5338) | PR (conflict) | 2026-08-11 | fix(mcp): preserve credentials when OAuth store read fails | **安全相关**，需尽快合并 |
| [#5339](https://github.com/HKUDS/nanobot/pull/5339) | PR | 2026-08-11 | fix(webui): reject discarded temporary chat messages | WebUI 安全 |
| [#5379](https://github.com/HKUDS/nanobot/pull/5379) | PR (p2) | 2026-08-13 | fix(memory): preserve full consolidation input | 数据完整性 |
| [#5387](https://github.com/HKUDS/nanobot/pull/5387) | PR | 2026-08-13 | feat(telegram): support reusable sticker replies | 功能增量 |

**审稿积压提示**：当前 **17 个开放 PR** 等待合并，覆盖 provider、channel、agent、webui、mcp 五大领域。鉴于 MCP SDK v2 迁移存在两条并行路径（#5179 vs #5180），建议维护者尽快做出路线决策，避免重复 review 工作。

---

## 📊 项目健康度评分（基于今日数据）

| 维度 | 评分 | 说明 |
|---|---|---|
| 提交活跃度 | ⭐⭐⭐⭐⭐ | 24h 内 29 个 PR 更新 |
| Issue 响应速度 | ⭐⭐⭐⭐ | 当日 Issue 当日处理/响应 |
| 版本输出 | ⭐⭐ | 当日无新 Release |
| 社区参与广度 | ⭐⭐⭐⭐ | 多领域、多贡献者 |
| 安全响应 | ⭐⭐⭐⭐ | 多个 SSRF/OAuth 安全 PR 在途 |
| 长期积压 | ⭐⭐⭐ | 17 个开放 PR 等待合并，#5179/#5180 决策悬而未决 |

**综合判断**：项目处于**高活跃、高产出但中等版本节奏**的状态。下一个 Release 节点很可能将集中整合当前在途的稳定性修复与新 provider 适配。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目日报
**日期：2026-08-21**

---

## 1. 今日速览

Hermes Agent 过去 24 小时维持**高强度开发节奏**：50 条 Issues 更新、50 条 PR 更新、零版本发布。Issues 中含 8 条关闭、PR 中 4 条已合并/关闭，整体净增活跃项约 88 条。项目当前最严峻的热点集中在 **Windows 安装/更新链路的可靠性** 与 **会话状态/SQLite 持久化层**，二者贡献了当日 P0/P1 级别核心风险。维护者（@andrexibiza、@fangliquanflq、@SiWarlock 等）正在以"supersede 旧 PR + 保留原作者实现"的协作模式推进 issue 关闭，仓库治理趋于成熟。

---

## 2. 版本发布

⚠️ **无新版本发布**。当前稳定通道仍为 v0.20.4（2026-08-18）。

---

## 3. 项目进展

当日 PR 合并/关闭清单（4 条）整体推动了**会话/部署一致性**与**Discord 插件一致性**两条主线：

| PR | 类型 | 推进内容 |
|---|---|---|
| [#91195](https://github.com/NousResearch/hermes-agent/pull/91195) (CLOSED → superseded) | bug/cli | 恢复会话 CWD 优先级一致性的首次尝试，被 #91197 取代 |
| [#91197](https://github.com/NousResearch/hermes-agent/pull/91197) | bug/cli | `cmd_resume` 显式 `--in` 覆盖 `TERMINAL_CWD`，同步运行时 CWD 载体，避免 dispatcher-owned resume 错误占用失效工作区 |
| [#91198](https://github.com/NousResearch/hermes-agent/pull/91198) | bug/plugins | Discord 适配器从 YAML `allow_bots` 读取 bot 接入策略（修复 Slack/Feishu 已有但 Discord 缺失的不一致） |
| [#91199](https://github.com/NousResearch/hermes-agent/pull/91199) | feature/auth | 新增 canonical `openai-codex` 订阅代理适配器，仅转发 Responses API/模型，复用现有 Codex 凭据池与 401/429 处理 |

此外，**架构层面**的 [#88683](https://github.com/NousResearch/hermes-agent/issues/88683)（统一事务性部署计划）与 [#90866](https://github.com/NousResearch/hermes-agent/issues/90866)（可观察状态携带证明）正在汇聚共识，预计将驱动下一阶段的结构性 PR。

---

## 4. 社区热点

| 排名 | Issue / PR | 评论 | 关注度来源 |
|---|---|---|---|
| 🥇 | [#66616](https://github.com/NousResearch/hermes-agent/issues/66616) — Skills 索引陈旧/降级（29.8h vs 26h 阈值） | **66** | 自动巡检机器人持续触发；指向 `skills-index.yml` 6/18 UTC cron 失效 |
| 🥈 | [#75801](https://github.com/NousResearch/hermes-agent/issues/75801) — Luna 流式响应被误判为"网络中断" | 7 | 影响 OpenCode Go + Hermes Desktop 全链路，desktop 端剥离流式回答 |
| 🥉 | [#86443](https://github.com/NousResearch/hermes-agent/issues/86443) — `hermes update` 删除桌面可执行文件且 exit 0 | 6 | Windows 上高破坏性，desktop 快捷方式成为死链 |
| 4 | [#73379](https://github.com/NousResearch/hermes-agent/issues/73379) — 非 systemd 监管的 dashboard 永久孤立 | 5 | 反映监管体系覆盖不全（tmux 用户被误杀） |
| 5 | [#44225](https://github.com/NousResearch/hermes-agent/issues/44225) — Electron 重建失败吞掉 Hermes.exe | 5 | Windows 上与 #86443 重复模式 |
| 7 | [#88683](https://github.com/NousResearch/hermes-agent/issues/88683)、[#90866](https://github.com/NousResearch/hermes-agent/issues/90866) | 4+4 | 维护者驱动的高层架构讨论 |

**诉求共性**：用户对 **"安装/更新器作为可信赖系统组件"** 的期望正在迅速超过其当前可靠性；自动化巡检（skills-index watchdog）暴露了 CI/部署链路缺乏主动恢复能力。

---

## 5. Bug 与稳定性

按严重程度排列（重点 P0/P1）：

### 🔴 P0 — 即时生产影响

- **[#90971](https://github.com/NousResearch/hermes-agent/issues/90971)** `apply_anthropic_cache_control` 在预装饰输入上**非幂等**，导致缓存装饰重复添加。作者 @JoaoMarcos44 在调研后**自我修正**：原描述的负切片/5 元素工具缓存溢出场景经 @jackulau、@andrexibiza 独立扫描被证实不可达，bug 真实成因仅限"预装饰输入"路径。
  - **Fix PR：暂无**
- **[#91164](https://github.com/NousResearch/hermes-agent/issues/91164)** `gpt-5.6` 系列 `prompt_cache_retention` 触发 `400 invalid_parameter`，被分类为**不可重试死轮次**。需迁移到 `prompt_cache_options.ttl`（OpenAI 已弃用旧参数）。
  - **Fix PR：暂无**

### 🟠 P1 — 高频次生产影响

- **[#85079](https://github.com/NousResearch/hermes-agent/issues/85079)** SQLite WAL 追加在并发子代理写入下"returned NULL without setting an exception"，被错误归类为 `session_persistence_failed:unknown`。作者 @AmigaPrime 已给出 patch 思路（contended WAL append 重试）。
  - **Fix PR：PR 路线待落地**
- **[#89293](https://github.com/NousResearch/hermes-agent/issues/89293)** 单主机生产环境 8 天内 **3 次** `state.db` 损坏，根因链为 lock storm + restart-in-window + 升级后 `journal_mode` 静默回退到 WAL。每次恢复需离线 `.recover` 重建并伴随数据丢失。
  - **Fix PR：暂无公开 PR**
- **[#86443](https://github.com/NousResearch/hermes-agent/issues/86443)** Windows 上 `hermes update` 在桌面重建失败时**先删后不重建**且退出码 0（已合并相关方向 PR [#91196](https://github.com/NousResearch/hermes-agent/pull/91196) 处理 PowerShell ConstrainedLanguage，[#91193](https://github.com/NousResearch/hermes-agent/pull/91193) 恢复被擦除的桌面构建）。

### 🟡 P2 — 体验层

- **[#75801](https://github.com/NousResearch/hermes-agent/issues/75801)** Luna 缺 `finish_reason` 误判；[#90477](https://github.com/NousResearch/hermes-agent/issues/90477) SSH 远程下切换 profile 误连本地后端；[#90906](https://github.com/NousResearch/hermes-agent/issues/90906) Windows uv Python 运行时未自动升级；[#90237](https://github.com/NousResearch/hermes-agent/issues/90237) Win11 22H2+ 上 `transparent: true` 破坏 Snap/FancyZones。
  - **Fix PR**：方向已有 PR（如 [#91188](https://github.com/NousResearch/hermes-agent/pull/91188) Windows 托管 Node 权威化），但功能完整修复尚未合并。

---

## 6. 功能请求与路线图信号

| 功能请求 | 链接 | 是否已有实现 PR |
|---|---|---|
| 统一事务性 install/update/bootstrap 部署计划 | [#88683](https://github.com/NousResearch/hermes-agent/issues/88683) | 架构讨论阶段，**无 PR** |
| 可观察状态从源头到副作用全程携带证明 | [#90866](https://github.com/NousResearch/hermes-agent/issues/90866) | 引用了 #89719 等已落地修复，**无统一 PR** |
| A2A 对等节点授权本地操作员任务 | [#91192](https://github.com/NousResearch/hermes-agent/pull/91192) | **已有**（config-only, fail-closed） |
| OpenAI Codex OAuth 回环订阅代理 | [#91199](https://github.com/NousResearch/hermes-agent/pull/91199) | **已有** |
| 会话压缩时携带持续目标并向用户提示 | [#91200](https://github.com/NousResearch/hermes-agent/pull/91200) | **已有** |
| 远程/SSH 后端时 preview 面板通过 harness 代理 localhost | [#91149](https://github.com/NousResearch/hermes-agent/issues/91149) | 标记为 **duplicate**，原始功能请求讨论中 |
| 启动 launchd 监管的 dashboard 而非 respawn | [#89793](https://github.com/NousResearch/hermes-agent/pull/89793) | **已有 PR**（与 systemd 路径对称） |

**预测**：下一版本（v0.20.5 或 v0.21.0）大概率引入 `openai-codex` 适配器（[#91199](https://github.com/NousResearch/hermes-agent/pull/91199)）+ A2A trusted-operator tier（[#91192](https://github.com/NousResearch/hermes-agent/pull/91192)）+ 至少 2 条 Windows 更新链路修复。

---

## 7. 用户反馈摘要

### 用户痛点

- **🪟 Windows 是当前最薄弱平台**（[#86443](https://github.com/NousResearch/hermes-agent/issues/86443)、[#44225](https://github.com/NousResearch/hermes-agent/issues/44225)、[#90906](https://github.com/NousResearch/hermes-agent/issues/90906)、[#90237](https://github.com/NousResearch/hermes-agent/issues/90237)、[#90829](https://github.com/NousResearch/hermes-agent/issues/90829)、[#90134](https://github.com/NousResearch/hermes-agent/issues/90134)、[#91021](https://github.com/NousResearch/hermes-agent/issues/91021)、[#91196](https://github.com/NousResearch/hermes-agent/pull/91196)、[#91193](https://github.com/NousResearch/hermes-agent/pull/91193)、[#91188](https://github.com/NousResearch/hermes-agent/pull/91188)）
  - 反馈集中在：update 静默损坏可执行文件、Electron 重建失败吞文件、PowerShell ConstrainedLanguage 模式崩溃、Node/npm PATH 解析污染。
- **🐢 缓存/限流/限速场景**（[#90971](https://github.com/NousResearch/hermes-agent/issues/90971)、[#91164](https://github.com/NousResearch/hermes-agent/issues/91164)、[#91176](https://github.com/NousResearch/hermes-agent/issues/91176)、[#65346](https://github.com/NousResearch/hermes-agent/issues/65346)）
  - 用户在 Anthropic 缓存装饰、OpenAI 提示缓存、Z.ai catalog、Codex OAuth 续期 4 条独立路径上同时遇到不可重试错误。
- **🧹 状态机/会话不透明**（[#90493](https://github.com/NousResearch/hermes-agent/issues/90493)、[#85079](https://github.com/NousResearch/hermes-agent/issues/85079)、[#89293](https://github.com/NousResearch/hermes-agent/issues/89293)、[#81114](https://github.com/NousResearch/hermes-agent/issues/81114)、[#91153](https://github.com/NousResearch/hermes-agent/issues/91153)）
  - 用户希望"错误根因可见、可重试、可见进程状态"，而不是被聚合成 3 桶枚举或一个泛化 spinner。

### 使用场景

- 高频次使用：在桌面（macOS/Win11）+ 远端 Linux + WSL2 + SSH 等多种混合拓扑下部署 Hermes。
- 多人协作：不同 Unix 用户共享同一远程主机（[#90477](https://github.com/NousResearch/hermes-agent/issues/90477)）。
- 长时间数据任务：用户在 6TB 数据迁移中遇到 update 触发环境崩溃（[#90929](https://github.com/NousResearch/hermes-agent/issues/90929) 已关闭——确认非 Hermes 责任但事件本身提示 **update 时机**仍需更友好的锁机制）。

### 正面信号

- [#66616](https://github.com/NousResearch/hermes-agent/issues/66616) 巡检体系本身被社区接受为有效反馈闭环；
- 维护者 "supersede 旧 PR + 保留原作者实现" 模式（[#91196](https://github.com/NousResearch/hermes-agent/pull/91196)、[#91193](https://github.com/NousResearch/hermes-agent/pull/91193)、[#91188](https://github.com/NousResearch/hermes-agent/pull/91188)）获得社区认可，降低 contributor 摩擦。

---

## 8. 待处理积压提醒

以下 Issues/PRs 已存在超过 30 天且**仍 OPEN**，需维护者优先关注：

| Issue / PR | 创建 | 类型 | 风险/状态 |
|---|---|---|---|
| [#32678](https://github.com/NousResearch/hermes-agent/issues/32678) | 2026-05-26 | GCP Vertex AI 404（curl 可直接通） | P2，存量用户长期受阻；provider 适配器配置层疑有 bug |
| [#35810](https://github.com/NousResearch/hermes-agent/pull/35810) | 2026-05-31 | Discord `allow_bots` YAML→env 桥接 | P2，今日 [#91198](https://github.com/NousResearch/hermes-agent/pull/91198) 与 [#91190](https://github.com/NousResearch/hermes-agent/pull/91190) 类似方向 PR 出现，建议协调合并 |
| [#44225](https://github.com/NousResearch/hermes-agent/issues/44225) | 2026-06-11 | Windows Electron 重建失败吞文件 | P2，与 #86443、#90829 重复模式；需统一 issue |
| [#65346](https://github.com/NousResearch/hermes-agent/issues/65346) | 2026-07-16 | OpenAI Codex OAuth 2-3 天失效 | P2，needs-repro 长期挂着；与 #91199 代理适配器相关 |
| [#66616](https://github.com/NousResearch/hermes-agent/issues/66616) | 2026-07-18 | Skills 索引自动降级 | 巡检触发 66 评论，但**根因修复仍未合并** |
| [#87879](https://github.com/NousResearch/hermes-agent/pull/87879) | 2026-08-16 | Windows 恢复被擦除的桌面构建 | P2，今日 [#91193](https://github.com/NousResearch/hermes-agent/pull/91193) 已 supersede 但 #87879 仍 OPEN，需关闭 |
| [#82355](https://github.com/NousResearch/hermes-agent/pull/82355) | 2026-08-09 | Windows 防止使用 stale 系统 Node | P2，今日 [#91188](https://github.com/NousResearch/hermes-agent/pull/91188) 已 supersede 但 #82355 仍 OPEN，需关闭 |

---

### 📊 项目健康度速判

| 维度 | 评分 | 说明 |
|---|---|---|
| 维护活跃度 | ⭐⭐⭐⭐⭐ | 24h 内 50/50 双轨更新

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报
**日期：2026-08-21**
**数据周期：过去 24 小时**

---

## 1. 今日速览

PicoClaw 今日整体活跃度偏低，处于**例行维护状态**。过去 24 小时内，仓库无新版本发布，Issue 与 PR 的更新主要集中在存量条目上，未见新增需求涌入。8 条 PR 中有 5 条为 Dependabot 自动发起的依赖升级（均仍处于 OPEN 状态），仅 3 条获得关闭处理。值得关注的动向是：两则社区功能提案（动态模型覆盖、音频转录多模型支持）已被标记为 [stale]，反映维护者当前对社区反馈的处理节奏较慢。项目整体处于"等待依赖合入 + 维护者审阅"阶段，**健康度评估：中等偏弱**。

---

## 2. 版本发布

今日 **无新版本发布**。跳过此节。

---

## 3. 项目进展

今日有 3 个 PR 被关闭，但需注意其中两条为 WIP/长期未跟进的项目，仅有 1 条属于有效合并：

| PR | 标题 | 状态 | 实际影响 |
|---|---|---|---|
| [#1158](https://github.com/sipeed/picoclaw/pull/1158) | feat: add anthropic-messages protocol | CLOSED | 🔴 **未合并** — 自 2026-03-06 开放，原计划支持 Anthropic 原生 `/v1/messages` API 端点。关闭原因不明，可能与 Issue #269 已被其他方案解决有关 |
| [#423](https://github.com/sipeed/picoclaw/pull/423) | WIP: 多智能体协作框架 & 共享上下文 | CLOSED | 🔴 **未合并** — 自 2026-02-18 起 WIP 状态，包含 Blackboard、Agent handoff、Discovery tools 等重量级特性。关闭意味着多智能体框架的短期推进受阻 |
| [#3318](https://github.com/sipeed/picoclaw/pull/3318) | fix(web): 修复 pnpm-lock.yaml 解析失败 | CLOSED | ⚠️ **状态待确认** — 修复 `web/frontend/pnpm-lock.yaml` 中 semver@7.8.5 重复键导致的 `ERR_PNPM_BROKEN_LOCKFILE`。若已合并，则 Web 前端的构建链路恢复 |

**整体评估：** 今日并未推进实质性功能落地，Web 端构建链路修复若成功合入是唯一可量化的进展；多智能体与 Anthropic 原生协议两项大特性均被搁置。

---

## 4. 社区热点

今日活跃度最高的条目集中在 **Issue #3281**，这也是仓库中近一周内唯一仍有真实讨论的条目：

- **[#3281 Web UI 输入框卡顿](https://github.com/sipeed/picoclaw/issues/3281)** — 作者 xpader，6 条评论、1 个 👍。用户反馈当 Web UI 会话历史略长时，输入框打字严重卡顿（v0.3.1 + Go 1.25.11）。这条是今日社区**唯一尚未被维护者放弃互动**的条目，但已被自动标记为 [stale]，说明维护者尚未给出回应。

**背后的诉求分析：**
- 用户对 **Web UI 长会话性能** 存在明确痛点，但缺乏维护者响应；
- 与之相关的 [#3318 PR 修复 pnpm-lock](https://github.com/sipeed/picoclaw/pull/3318) 表明 Web 前端基础设施尚不完善，可能间接影响前端渲染性能问题被定位的效率。

PR 方面无明显热点 — 所有依赖升级 PR（[#3332](https://github.com/sipeed/picoclaw/pull/3332)–[#3336](https://github.com/sipeed/picoclaw/pull/3336)）均无评论、无点赞，纯粹由 Dependabot 自动化驱动。

---

## 5. Bug 与稳定性

### 🔴 高优先级（用户活跃反馈，但无 PR）

- **[#3281 Web UI 长会话输入卡顿](https://github.com/sipeed/picoclaw/issues/3281)** — 影响 v0.3.1 所有使用 PicoClaw Web 通道的用户。属于**前端性能回归/未优化**问题。**暂无修复 PR**。该 Bug 直接影响核心交互体验，应优先关注。

### 🟡 中优先级（已被自动标记 stale）

- **[#3331 仅 whisper-* 模型可走 /audio/transcriptions 端点](https://github.com/sipeed/picoclaw/issues/3331)** — 作者 stanislavvv 提出：当前 ASR 路径强制要求模型名匹配 `*-whisper-*`，导致现代非 Whisper 音频转录模型无法使用。**暂无关联 PR**。
- **[#3330 delegate/spawn/subagent 不支持动态指定模型](https://github.com/sipeed/picoclaw/issues/3330)** — 作者 v2up-32mb 提出：三类子代理工具的模型选择是静态的（来自 config.json 或 defaultModel），缺乏运行时覆盖能力。**暂无关联 PR**。

### 修复链路总结

| Bug | 严重度 | 修复 PR |
|---|---|---|
| Web UI 输入卡顿 | 高 | ❌ 无 |
| pnpm-lock 解析失败 | 中 | ✅ [#3318](https://github.com/sipeed/picoclaw/pull/3318) (待确认合并状态) |
| ASR 模型路径硬编码 | 中 | ❌ 无 |
| 子代理模型动态覆盖 | 中 | ❌ 无 |

---

## 6. 功能请求与路线图信号

### 已被搁置或合并受阻的相关工作

| 方向 | 现有 Issue | 现有 PR | 路线图可能性 |
|---|---|---|---|
| **Anthropic 原生 API 兼容** | [#269](#) (已修复于 #1158) | [#1158](https://github.com/sipeed/picoclaw/pull/1158) 已关闭未合并 | ⭐ 仍有真实需求，可能需要新 PR 重提 |
| **多智能体协作框架** | — | [#423](https://github.com/sipeed/picoclaw/pull/423) WIP 已关闭 | ⭐ 基础组件（#213 provider protocol、#131 model fallback）已合并，框架层被搁置 |
| **动态子代理模型选择** | [#3330](https://github.com/sipeed/picoclaw/issues/3330) | 无 | ⚪ 社区意愿明确，但缺乏实现 |
| **多模型音频转录** | [#3331](https://github.com/sipeed/picoclaw/issues/3331) | 无 | ⚪ 提案清晰，实现门槛较低（增加配置 flag），适合纳入下个版本 |

### 路线图建议

短期最具落地价值的应为：
1. **Web UI 性能修复**（#3281）— 用户体验核心痛点；
2. **ASR 路径可配置化**（#3331）— 改动局部、影响面可控；
3. **子代理模型动态覆盖**（#3330）— 与多智能体方向高度契合，可作为 #423 的简化版先行合并。

---

## 7. 用户反馈摘要

从可获取的 Issue 评论数据中，提炼以下用户痛点：

### 🔥 痛点 1：Web UI 长会话不可用
> *"Make more chat history in one session. Keep try to input something in input box, it will be very laggy."*
> — [@xpader](https://github.com/sipeed/picoclaw/issues/3281)

**真实场景：** 用户尝试将 PicoClaw Web 用于多轮深度对话，但前端渲染/输入响应能力不足以支撑长会话。这反映出 PicoClaw 在"类 ChatGPT 长会话"场景下竞争力不足。

### 🔥 痛点 2：模型灵活性受限
- [#3331](https://github.com/sipeed/picoclaw/issues/3331)：希望 ASR 不被锁定在 Whisper 生态，反映用户已迁移到新一代音频转录模型；
- [#3330](https://github.com/sipeed/picoclaw/issues/3330)：希望子代理能按任务动态选模型，反映用户已构建**异构模型协作**的复杂场景。

### 📊 满意度信号
- 仅 [#3281](https://github.com/sipeed/picoclaw/issues/3281) 获得 1 个 👍，其他 Issue 互动为零；
- 三条活跃 Issue 均已被自动 [stale] 标记，**侧面反映维护者响应滞后，用户满意度承压**。

---

## 8. 待处理积压

以下条目维护者应优先关注，否则将进一步丧失社区信任：

### � 积压超过 30 天且仍 OPEN

| 条目 | 类型 | 创建日期 | 积压时长 | 备注 |
|---|---|---|---|---|
| [#423](https://github.com/sipeed/picoclaw/pull/423) | PR (WIP 多智能体) | 2026-02-18 | ~6 个月 | WIP 状态长期未推进，已被关闭，需明确后续走向 |
| [#1158](https://github.com/sipeed/picoclaw/pull/1158) | PR (anthropic-messages) | 2026-03-06 | ~5.5 个月 | 已关闭而非合并，需求未消解，可能需要重新提 PR |

### 🟧 积压 7–30 天且 OPEN

| 条目 | 类型 | 创建日期 | 积压时长 | 备注 |
|---|---|---|---|---|
| [#3281](https://github.com/sipeed/picoclaw/issues/3281) | Issue (Bug) | 2026-07-21 | ~31 天 | 用户活跃反馈中，但已被 stale |
| [#3318](https://github.com/sipeed/picoclaw/pull/3318) | PR (pnpm-lock fix) | 2026-08-05 | ~16 天 | 关闭状态需确认是否实际合入 |
| [#3330](https://github.com/sipeed/picoclaw/issues/3330) | Issue (Feature) | 2026-08-13 | ~8 天 | stale |
| [#3331](https://github.com/sipeed/picoclaw/issues/3331) | Issue (Feature) | 2026-08-13 | ~8 天 | stale |
| [#3332](https://github.com/sipeed/picoclaw/pull/3332) | PR (deps) | 2026-08-13 | ~8 天 | dependabot 等待审阅 |
| [#3333](https://github.com/sipeed/picoclaw/pull/3333) | PR (deps) | 2026-08-13 | ~8 天 | dependabot 等待审阅 |
| [#3334](https://github.com/sipeed/picoclaw/pull/3334) | PR (deps) | 2026-08-13 | ~8 天 | dependabot 等待审阅 |
| [#3335](https://github.com/sipeed/picoclaw/pull/3335) | PR (deps) | 2026-08-13 | ~8 天 | dependabot 等待审阅 |
| [#3336](https://github.com/sipeed/picoclaw/pull/3336) | PR (deps) | 2026-08-13 | ~8 天 | dependabot 等待审阅 |

### ⚠️ 维护者建议行动

1. **回复 #3281** — 至少给出排查方向或确认修复计划；
2. **批量合并 Dependabot PR #3332–#3336** — 一次扫除 5 条积压，恢复贡献者信心；
3. **明确 #423 / #1158 后续走向** — 是要重新提 PR 还是放弃，需向社区透明；
4. **审阅 #3330 / #3331** — 两个 Feature 请求技术复杂度可控，适合作为下个版本的候选。

---

## 📌 报告小结

| 维度 | 评估 |
|---|---|
| **活跃度** | 🟡 中等偏低 — 维护活动停滞，社区反馈停滞 |
| **代码进展** | 🔴 无实质功能合入 |
| **社区健康** | 🔴 多条 Issue 进入 stale，用户响应慢 |
| **风险信号** | 长期 WIP PR 被关闭、Web UI 性能问题悬而未决、依赖批量积压 |
| **机会信号** | 3 条新 Feature 请求技术成熟度高，可低成本纳入下一版 |

> **结论：** PicoClaw 今日未推进有意义的版本演进，处于**维护静默期**。建议维护者近期清理 Dependabot 积压、回复 Web UI 性能 Bug，并明确 #423 与 #1158 的最终走向，以恢复社区节奏。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 · 2026-08-21

> 数据范围：2026-08-20 ~ 2026-08-21 ｜ 项目：github.com/qwibitai/nanoclaw

---

## 1. 今日速览

NanoClaw 今日呈现出**典型的"大规模内部重构 + 新功能并行推进"形态**：过去 24 小时共有 **50 条 PR 更新**（远超日常均值），其中 **35 条仍处于待合并状态**（占比 70%），已合并/关闭 15 条；Issues 端仅 3 条更新。活跃度评分 **高**，但**合并吞吐量与提交流量之间出现明显失衡**，main 分支的合并节奏可能正成为短期瓶颈。整体项目方向集中在 `add-*` 技能栈的合规化重构、provider/channel 拓展（Cursor、WhatsApp、Matrix、Slack）以及路由器/调度器稳定性修复。

---

## 2. 版本发布

⚠️ **无新版本发布。** 尽管有 15 条 PR 已合并/关闭，但尚未触发 Release 标签动作。维护者需关注是否需要随一批 `fix/add-*` 重构发布 patch 版本（建议参考 #3408 系列）。

---

## 3. 项目进展

今日合并/关闭的 15 条 PR 体现出**两条清晰的推进线**：

### 3.1 文档与公告层
- **#3421** ([PR](https://github.com/qwibitai/nanoclaw/pull/3421)) — `core-team`：`docs+setup` 公告层。README 增加"Add Agent to Slack"横幅，并依赖 #3404 的默认开关。**推进了一键式 Slack 集成的用户触达路径。**

### 3.2 功能/历史清理
- **#1311** ([PR](https://github.com/qwibitai/nanoclaw/pull/1311)) — `wmalgadey` 的"Feature create new session"被关闭（关闭而非合并）。说明长期悬挂的功能提案被清理，**释放了 backlog**。

> ⚠️ **注意**：#3408 系列 PR（#3415–#3420、#3421 等）均**声明 stacked on #3408**，意味着它们尚未真正合并入 main；今日看到的"闭合"主要是文档与功能提案层，**核心重构仍在 PR 队列等待落地**。

---

## 4. 社区热点

由于今日 Issues/PR 评论数普遍为 0，热点主要从**主题聚类与修改范围**角度识别：

| 排名 | 主题 | 代表 PR/Issue | 关注点 |
|---|---|---|---|
| 🥇 | `add-*` 技能审计修复（12 个技能批量重构） | [#3414–#3420](https://github.com/qwibitai/nanoclaw/pulls?q=is%3Aopen+author%3Agavrielc) | 几乎覆盖全部内置技能的健康度问题 |
| 🥈 | Cursor Agent SDK 集成 | [#3356](https://github.com/qwibitai/nanoclaw/pull/3356) / [#3355](https://github.com/qwibitai/nanoclaw/pull/3355) | 新 provider 入栈，扩展 agent 生态 |
| 🥉 | Slack 一键接入能力 | [#3421](https://github.com/qwibitai/nanoclaw/pull/3421) / [#3423](https://github.com/qwibitai/nanoclaw/pull/3423) | 用户触达面扩大，但 #3423 暴露配置缺陷 |
| 4 | 路由器/Engage 逻辑 | [#3422](https://github.com/qwibitai/nanoclaw/pull/3422) / Issue [#3369](https://github.com/qwibitai/nanoclaw/issues/3369) | 关注行为正确性，issue 与 fix 同日出现 |

**背后诉求**：大量 PR 聚焦于"配置可移植性"（install-scope、per-group MCP seam）、"诚实测试"（honest smoke test、no-op 检测）—— 说明项目正在从"能跑通"转向"多实例可信赖部署"阶段。

---

## 5. Bug 与稳定性

按严重程度排列：

| 严重度 | Issue/PR | 描述 | 修复状态 |
|---|---|---|---|
| 🔴 高 | [#2606](https://github.com/qwibitai/nanoclaw/issues/2606) | `engage_mode='always'` 在 DB 中可存储但 `evaluateEngage()` 未处理，导致所有消息被静默丢弃（`no_agent_engaged`） | ✅ **今日已 CLOSED**（5 月 24 日提出，跨 88 天） |
| 🔴 高 | [#2715](https://github.com/qwibitai/nanoclaw/issues/2715) | WhatsApp 入站媒体（图片/文档/音频）下载到宿主 `DATA_DIR/attachments`，但该路径**未挂载进 agent 容器**，导致 agent 无法访问用户附件 | ❌ **仍 OPEN**（6 月 8 日提出，跨 73 天）⚠️ |
| 🟡 中 | [#3369](https://github.com/qwibitai/nanoclaw/issues/3369) | `engage_mode: 'mention-sticky'` + `ignored_message_policy: 'accumulate'` 组合下，Slack 线程中**未 mention 也开始回复**（accumulate 创建的 session 行成为订阅源） | 🟡 部分修复在路上：[#3422](https://github.com/qwibitai/nanoclaw/pull/3422) 同日提交但未合并 |
| 🟡 中 | [#3247](https://github.com/qwibitai/nanoclaw/pull/3247) | `handleRecurrence` 对畸形 cron 字符串每次 tick 重复报错却不清除 | 🟡 修复已提交，待合并 |

> ⚠️ **关键稳定性提示**：[#2715](https://github.com/qwibitai/nanoclaw/issues/2715) WhatsApp 媒体中断已**搁置 73 天**，是当前最严重的悬挂生产缺陷。

---

## 6. 功能请求与路线图信号

| 信号 | 依据 | 路线图可能性 |
|---|---|---|
| **Cursor 作为新 provider** | [#3356](https://github.com/qwibitai/nanoclaw/pull/3356) / [#3355](https://github.com/qwibitai/nanoclaw/pull/3355) 已成对提交（payload + setup skill），`core-team` 标签 | ⭐⭐⭐⭐ **极高** |
| **NCL token usage 计量** | [#3270](https://github.com/qwibitai/nanoclaw/pull/3270) `feat/ncl-token-usage`（8 月 16 日起） | ⭐⭐⭐ 高 |
| **新增 `add-why` 工具技能** | [#3189](https://github.com/qwibitai/nanoclaw/pull/3189) 解释单条消息发生了什么 | ⭐⭐ 中（utility skill 评审中） |
| **只读挂载强化** | [#3196](https://github.com/qwibitai/nanoclaw/pull/3196) `fix/add-mount-readonly` | ⭐⭐⭐⭐ 高（与安全加固同步） |
| **WhatsApp 入站附件可访问性** | [#2715](https://github.com/qwibitai/nanoclaw/issues/2715) 已开放 73 天无 fix PR | ⭐⭐ 用户诉求强烈但维护者未响应 |
| **Codex provider 文件投递** | [#3402](https://github.com/qwibitai/nanoclaw/pull/3402) `core-team` 已存在 | ⭐⭐⭐⭐ 高 |

---

## 7. 用户反馈摘要

由于 Issues 评论数极少（多为 0–1 条），可识别的真实反馈如下：

- **[@nikki-assistant（#2606）](https://github.com/qwibitai/nanoclaw/issues/2606)**：明确指出 `engage_mode='always'` 的 root cause 是 `evaluateEngage()` 的 switch 缺少 case。**反馈质量高、可直接定位代码**，代表用户已经从"报错求助"走向"PR 级别诊断"。
- **[@jon-ruth（#2715）](https://github.com/qwibitai/nanoclaw/issues/2715)**：抱怨 v2 中 WhatsApp 附件对 agent 不可见，路径契约与容器挂载不一致。**说明 v2 重构过程中产生了"文档与实现不一致"的回归**，且修复未跟上。
- **[@nilsborg（#3369）](https://github.com/qwibitai/nanoclaw/issues/3369)**：精确描述 `mention-sticky` + `accumulate` 组合的语义违反。**反映出用户对路由器行为契约有深入理解**，但产品文档未能事先避免这一陷阱。

> **痛点归纳**：① 文档与实际行为存在偏差（#2715）；② 多种 `engage_mode`/`ignored_message_policy` 组合的语义边界模糊（#2606、#3369）；③ v2 重构遗留了跨主机/多实例部署的可移植性问题（#3408 系列正在修复中）。

---

## 8. 待处理积压

| Issue/PR | 创建时间 | 状态 | 优先级建议 |
|---|---|---|---|
| [#2715](https://github.com/qwibitai/nanoclaw/issues/2715) WhatsApp 媒体不可达 | 2026-06-08（73 天） | OPEN，无 fix PR | 🔴 **紧急** — 直接影响 WhatsApp 用户核心场景 |
| [#3247](https://github.com/qwibitai/nanoclaw/pull/3247) cron 解析错误循环 | 2026-08-14（7 天） | OPEN，无 review 活动 | 🟡 高 |
| [#3270](https://github.com/qwibitai/nanoclaw/pull/3270) NCL token usage | 2026-08-16（5 天） | OPEN | 🟢 中 |
| [#3189](https://github.com/qwibitai/nanoclaw/pull/3189) add-why skill | 2026-08-05（16 天） | OPEN | 🟢 中 |
| [#3196](https://github.com/qwibitai/nanoclaw/pull/3196) mount readonly | 2026-08-07（14 天） | OPEN | 🟡 高（安全相关） |
| [#3408](https://github.com/qwibitai/nanoclaw/pull/3408) **基础 PR**（约 12 条 stacked 系列的总依赖） | 待查 | OPEN | 🔴 **瓶颈** — #3414–#3421、#3419–#3420 均依赖其合并 |

> 💡 **维护者提示**：建议优先关注 #3408 的评审进度。一旦该 PR 合并，可解锁约 8 条堆叠的 `core-team` 修复 PR，显著降低 review 队列压力。

---

### 📊 项目健康度一览

| 指标 | 当前值 | 评估 |
|---|---|---|
| PR 活跃度 | 50 / 24h | 🔥 极高 |
| PR 合并率 | 15/50 = 30% | ⚠️ 偏低 |
| Issue 关闭率（24h） | 1/3 = 33% | ✅ 中等 |
| 长期悬挂 Issue（>60 天） | 1（#2715） | ⚠️ 需关注 |
| 新版本发布 | 0 | ⚠️ 与重构规模不匹配 |
| 核心重构栈（#3408 系列） | 阻塞 8+ PR | 🔴 单点瓶颈 |

**整体判断**：项目处于**积极重构期**——开发者活跃度高、PR 质量普遍带 fix/audit 描述（`core-team` 标签占主导），但**合并吞吐与变更规模不匹配**，存在单点依赖（#3408）。建议短期内提高评审带宽，避免堆叠队列继续扩张。

---

*本日报由 AI 智能体与个人 AI 助手开源项目分析师自动生成 · 数据来源：GitHub REST API（2026-08-20 ~ 2026-08-21）*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目日报
**日期：2026-08-21**
**仓库：github.com/nearai/ironclaw**

---

## 1. 今日速览

IronClaw 今日维持高强度的多线推进节奏，过去 24 小时共有 21 条 Issue 更新（17 新开/活跃 + 4 关闭）和 33 条 PR 更新（19 待合并 + 14 已关闭），但 **未发布新版本**。工作重点集中在三个主线：(1) **WebUI 设计系统** 五阶段重构（#7038 / #7781 / #7782）持续推进；(2) **代理生命周期 Hook 框架**（#7770）从 Phase 1（#7765）落地到后续 follow-up 议题；(3) **基础设施稳定性修复**——Rust 1.98 clippy 升级导致的全分支 CI 红线（#7777 / #7778）已在当日处理完毕。整体来看项目活跃度处于高位，多个 Epic 正在并行展开，CI 链路一度受 lint 级联影响但已恢复。

---

## 2. 版本发布

⚠️ **今日无新版本发布**。v1.4.0 的 Epic（#7732 持久化沙箱、#7781 设计系统）仍在路上，建议关注下个迭代窗口的 release notes。

---

## 3. 项目进展（今日合并/关闭的重要 PR）

| PR | 标题 | 影响范围 | 链接 |
|---|---|---|---|
| [#7786](https://github.com/nearai/ironclaw/pull/7786) | fix(assistant): OpenAI 建议生成失效修复 | **修复 SEV 级问题** —— `schemas/suggestions.output.json` 中 `uniqueItems: true` 破坏了 OpenAI 严格结构化输出校验；同时清理已弃用的 allowlist IDs；建议卡片按已连接扩展门控 | [#7786](https://github.com/nearai/ironclaw/pull/7786) |
| [#7777](https://github.com/nearai/ironclaw/pull/7777) | fix(ci): 清除 clippy 1.98 lint 级联 | 解除 merge queue 阻塞（run 32397319267），恢复主干绿色 | [#7777](https://github.com/nearai/ironclaw/pull/7777) |
| [#7778](https://github.com/nearai/ironclaw/pull/7778) | fix(lints): Rust 1.98 clippy 迁移 | 全工作区在 `+1.98.0` 下 clippy 通过，覆盖 `chunks_exact_to_ceil` 等新 lint | [#7778](https://github.com/nearai/ironclaw/pull/7778) |
| [#7738](https://github.com/nearai/ironclaw/pull/7738) | Slack 配置卡片每字段帮助文本 | 每个 `[admin_configuration]` 字段都附带 `description`，沿用 #7550 的接缝规范（Telegram 已先落地） | [#7738](https://github.com/nearai/ironclaw/pull/7738) |
| [#7763](https://github.com/nearai/ironclaw/pull/7763) | 子代理文档整合 | 将 7 份设计文档、7,000+ 行整合为单一 `subagent-spawn/README.md`，净减 **-9,713 行** | [#7763](https://github.com/nearai/ironclaw/pull/7763) |
| [#7729](https://github.com/nearai/ironclaw/pull/7729) | feat(automations): 全链路 run-now | 触发域 + WebUI + 模型能力 + 产品服务一次性打通"按需触发" | [#7729](https://github.com/nearai/ironclaw/pull/7729) |
| [#7193](https://github.com/nearai/ironclaw/pull/7193) | 关联 Issue 关闭 | run-now 在 issue 端也正式闭合 | [#7193](https://github.com/nearai/ironclaw/issues/7193) |

**推进评估：** 项目在"开发者体验 + 用户感知 + CI 稳定性"三个层面均有实质推进。SEV 级别的 OpenAI 建议生成问题（影响生产可用性）和 CI 红色警报均已在当日修复；自动化能力的"run-now"语义层完成闭合；子代理文档混乱问题通过一次外科手术式清理解决。设计系统仍停留在 Phase 1（Storybook 集成 #7750）的合并窗口前，未进入主干。

---

## 4. 社区热点

按 Issue 评论数排序：

| 排名 | 议题 | 评论数 | 性质 | 分析 |
|---|---|---|---|---|
| 🥇 | [#7732](https://github.com/nearai/ironclaw/issues/7732) — 持久化每用户沙箱（iron-proxy，延迟循环执行器） | **8** | Epic, v1.4.0 | 反映"用户级持久沙箱"是 v1.4 的核心承诺之一；当前每条 shell 命令都启停容器的实现被视为不可接受的妥协，社区在压明确"持久用户计算环境"的语义边界（`/workspace` 持久化粒度、tenant+user 命名空间） |
| 🥈 | [#7770](https://github.com/nearai/ironclaw/issues/7770) — 代理生命周期 Hook（after-turn / before-turn / compaction / tool-result） | **3** | Epic | 强烈信号：扩展作者长期呼吁"when X happens, do Y"应成为一等公民，避免再继续打补丁式修改 core engine；分阶段交付策略降低单点风险 |
| 🥉 | [#7038](https://github.com/nearai/ironclaw/issues/7038) 设计系统 Phase 1 / [#7042](https://github.com/nearai/ironclaw/issues/7042) Phase 2 | **2 / 2** | UX, epic | 反映了 WebUI 设计债务已经被识别为系统性问题，五阶段方案获得共识 |
| 4 | [#7193](https://github.com/nearai/ironclaw/issues/7193) — 自动化 run-now（已关闭） | 2 | enhancement, L | 闭合即证明该诉求优先级高（List/Pause/Resume/Rename/Delete 之外必须有手动触发） |
| 5 | [#7783](https://github.com/nearai/ironclaw/issues/7783) — LLM 超时策略缺陷 | 1 | bug, medium | 见 §5 |

> **诉求归纳：** "持久化用户沙箱"+"扩展化代理生命周期 Hook"+"设计系统现代化"是当前三大共识性工程方向，反映项目从"功能可跑"向"稳定可扩展 + 用户体验一致"过渡。

---

## 5. Bug 与稳定性

| 严重度 | Issue / 标题 | 状态 | 是否有 fix PR |
|---|---|---|---|
| 🟠 **中-高** | [#7783](https://github.com/nearai/ironclaw/issues/7783) **LLM 超时策略：终化阶段无法测量 TTFT，重试预算塞不进截止时间** — 结构化输出终化在非流式客户端上，stuck 请求会一直拖延到 60s 总闸才被发现，而外层 75s 终化截止已先到，单次传输卡死即"摧毁整轮" | OPEN | ❌ 待提 PR |
| 🟡 **中** | [#7776](https://github.com/nearai/ironclaw/issues/7776) **`memory.write` 缺少 expected-version 模式** — `append: false` 的全文档重写在并发写入时会被静默覆盖；CAS 防的是撕裂写，但 read-modify-write 的 retry 仍可能丢失更新 | OPEN | ❌ 来自 #7765 的 review finding（H 级） |
| 🟡 **中** | [#7780](https://github.com/nearai/ironclaw/issues/7780) **AfterTurn Hook：调度侧失败终化绕过 Hook 触发点** — driver failure / exit-application failure 等路径上 `AfterTurn` 不会触发，hook "完整性"打折 | OPEN | ❌ 来自 #7765 的 PR approach audit |
| 🟢 **低** | [#7767](https://github.com/nearai/ironclaw/issues/7767) / [#7774](https://github.com/nearai/ironclaw/pull/7774) Automation presenter 日期断言时区不健壮（Asia/Shanghai 失败） | OPEN | ✅ [#7774](https://github.com/nearai/ironclaw/pull/7774) 已提 |
| 🟢 **低** | [#7768](https://github.com/nearai/ironclaw/issues/7768) / [#7773](https://github.com/nearai/ironclaw/pull/7773) 重复的 Settings / Extensions Tab 与路由元数据 | OPEN | ✅ [#7773](https://github.com/nearai/ironclaw/pull/7773) 已提 |
| 🟢 **低** | [#7769](https://github.com/nearai/ironclaw/issues/7769) 扩展安装的 `phase` 与 `blockers` 字段在 Configure 中被吞掉 | OPEN | ❌ 待提 |
| 🔵 **已关闭** | [#7308](https://github.com/nearai/ironclaw/issues/7308) Attio MCP OAuth scope 无效且无法修正 | CLOSED | ✅ |
| 🔵 **已关闭** | [#7755](https://github.com/nearai/ironclaw/issues/7755) 子代理/turn 词汇重复类型折叠 | CLOSED | ✅ |
| 🛠 **CI** | Rust 1.98 clippy 级联阻断全分支 | 已恢复 | ✅ [#7777](https://github.com/nearai/ironclaw/pull/7777) / [#7778](https://github.com/nearai/ironclaw/pull/7778) |

**稳定性总体观察：** 缺乏 SEV/CRITICAL 级事件，但 LLM 超时策略（#7783）和 memory.write 并发覆盖（#7776）属于"用户不可见但会损坏数据"型问题，建议优先排期。

---

## 6. 功能请求与路线图信号

| 候选功能 | 信号源 | 当前状态 | 路线图判断 |
|---|---|---|---|
| **每用户持久沙箱 + iron-proxy 代理** | [#7732](https://github.com/nearai/ironclaw/issues/7732)（v1.4.0 Epic） + [#7779](https://github.com/nearai/ironclaw/pull/7779)（Step 2 PR 已开） | 已进入实现阶段 | 🟢 **v1.4 几乎确定纳入** |
| **代理生命周期 Hook 全接缝**（after-turn / before-turn / compaction / tool-result） | [#7770](https://github.com/nearai/ironclaw/issues/7770) + [#7765](https://github.com/nearai/ironclaw/pull/7765)（Phase 1 PR）+ 2 个 follow-up（#7780/#7775/#7776） | 分阶段落地 | 🟢 **Phase 1 进入合并候选，后续阶段分多个版本交付** |
| **Unbound 运行的门控姿态**（后台工作跳过阻塞性能力而非中止） | [#7775](https://github.com/nearai/ironclaw/issues/7775) | 来自 #7770 Phase 1 遗留决策 | 🟡 **近期**，待 v1.4+ |
| **`memory.write` 的 expected-version 模式** | [#7776](https://github.com/nearai/ironclaw/issues/7776) | OPEN | 🟡 **下个迭代需修复**（并发安全债） |
| **WebUI 设计系统 Phase 4-5**（agentic 交互 / 组件 / 信息架构） | [#7782](https://github.com/nearai/ironclaw/issues/7782) | 已建 Epic 跟踪 | 🟢 **路线图已规划** |
| **Webhook 风格可执行运行门控通知**（Inbox） | [#7699](https://github.com/nearai/ironclaw/pull/7699) + [#7698](https://github.com/nearai/ironclaw/pull/7698) | XL 大 PR 待审 | 🟡 **设计已就绪，合并前需广泛评审** |
| **`omp` 编码核心工具契约**（read/write/edit/glob/grep/bash） | [#7491](https://github.com/nearai/ironclaw/pull/7491)（slice 1-4） | OPEN | 🟢 **编码体验统一化是高优** |
| **WASM 类型化工具响应 + 访客迁移** | [#7711](https://github.com/nearai/ironclaw/pull/7711)（叠加在 #7627 之上） | OPEN | 🟢 **终结能力响应归一化栈** |

---

## 7. 用户反馈摘要

提炼自今日活跃 Issue 的评论与描述：

- **"每个 shell 命令都启停容器让人无法接受"** —— 开发者对当前 sandbox 的"按需启停"语义表达了显著不满，期望 v1.4 的 `iron-proxy` 侧车 + 每 `(tenant, user)` 隔离网络能终结该痛点（#7732 评论）。
- **"OpenAI 后端的建议生成突然全坏"** —— 用户感知 SEV 级回归，schema 上一个 `uniqueItems: true` 就让所有 OpenAI 严格模式实例失灵，#7786 已被社区视为紧急修复样本。
- **"Settings 标签到底哪几个真在用？"** —— 配置 UI 出现明显漂移；duplicate 路由元数据已偏离实际暴露的路由（#7768），反映出迭代过程中前端清单缺乏 owner（#7773 已对接）。
- **"Automation 日期在 Asia/Shanghai 跑挂"** —— CI/测试矩阵在非 UTC 时区下不可移植（#7767/#7774），虽是边缘 case，但暴露了项目对国际部署的隐式时区假设。
- **"SLack 配置卡片的字段没人看得懂"** —— 管理员反映不知道每个 `admin_configuration` 字段意味着什么（#7738 已补 description）。
- **"子代理文档互相矛盾"** —— 7 份设计文档、3 代设计并存，扩展作者长期困惑（#7763 已一次性整合 −9,713 行）。

> **痛点图谱：** 用户最在意的不是"新功能再多"，而是 **稳定性 + 一致性 + 文档可信度**。这三个轴上的胜利对项目健康度的杠杆最大。

---

## 8. 待处理积压（提醒维护者关注）

| 项 | 类型 | 现状 | 关注原因 |
|---|---|---|---|
| [#7750](https://github.com/nearai/ironclaw/pull/7750) Storybook + 设计系统目录 Phase 1 | XL PR（重建自 #7039） | OPEN 已 2 天 | 设计系统五阶段计划的**起点**，阻塞后续 Phase 2-5 |
| [#7779](https://github.com/nearai/ironclaw/pull/7779) iron-proxy 沙箱出口路由（#7732 Step 2） | XL PR | OPEN 当日 | v1.4.0 的关键基础设施模块 |
| [#7765](https://github.com/nearai/ironclaw/pull/7765) AfterTurn Hook + memory curation | XL PR | OPEN 当日 | Phase 1 提交流程样板，但 review 已发现 3 个 follow-up（#7780/#7775/#7776），建议合并时附带修复或分批 |
| [#7698](https://github.com/nearai/ironclaw/pull/7698) + [#7699](https://github.com/nearai/ironclaw/pull/7699) 通知中心通用化 / 可执行门控 | 两个 XL PR | OPEN 4 天 | 通知中心是 WebUI 的"用户感知层"，延迟合并会拖慢 #7769 等依赖其 blocker 显示的 UX 工作 |
| [#7711](https://github.com/nearai/ironclaw/pull/7711) WASM 类型化工具响应终篇 | XL PR（终结 #7627 栈） | OPEN 4 天 | 终篇文档明确"supersedes #7703"，建议尽早上 master 避免分叉 |
| [#7491](https://github.com/nearai/ironclaw/pull/7491) `omp` 编码工具统一表面 | XL PR | OPEN 10 天 | 编码工具表面碎片化（`builtin__*` 历史拼写、文件工具分离、结果阅读器派生）属技术债，长期挂起会放大风险 |
| [#7783](https://github.com/nearai/ironclaw/issues/7783) LLM 超时策略缺陷 | Bug, medium | OPEN 当日，**尚无 PR** | 唯一无 fix PR 的较高严重度议题，建议本周内出方案 |
| [#7784](https://github.com/nearai/ironclaw/issues/7784) / [#7785](https://github.com/nearai/ironclaw/issues/7785) capability-port / executor 测试夹具拆分 | cleanup | OPEN 当日 | `support.rs` 已达 1,657 行，`capability_port.rs` 测试森林占 4202+ 行，长期看测试可维护性 |

---

## 附录：项目健康度速评

| 维度 | 评分 | 说明 |
|---|---|---|
| **活跃度** | ⭐⭐⭐⭐⭐ | 24h 内 54 条 issue/PR 活动，3+ 个并行 Epic |
| **稳定性** | ⭐⭐⭐ | CI 已恢复，但 LLM 超时 / 并发写入两类"隐形损坏"尚未修 |
| **设计债务治理** | ⭐⭐⭐⭐ | 设计系统 + 子代理文档同步推进，质量回正 |
| **响应时效** | ⭐⭐⭐⭐ | 当日新开议题多在当日即被关联到 fix PR |
| **路线图清晰度** | ⭐⭐⭐⭐ | v1.4.0 范围（#7732）明确，Hook 框架分阶段可执行 |
| **风险信号** | 🟡 | XL 大 PR 积压（#7750/#7779/#7765/#7698/#7699/#7711/#7491），合并队列压力大；建议维护者分组/分日合并以避免主干震荡 |

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报

**日期：2026-08-21**
**仓库：netease-youdao/LobsterAI**

---

## 1. 今日速览

LobsterAI 项目今日整体活跃度偏低。24 小时内共有 2 条 Issue 与 7 条 PR 更新，但**全部条目标记为 `[stale]`**，表明这些条目已长期未获维护者响应，仅由 Stale Bot 自动触动；Issue 均为 4 月初创建至今未解决的遗留问题，PR 中 6 条已关闭（含合并或拒绝）、仅 1 条仍处开放状态。**无新版本发布**。项目当前呈现出"低维护强度 + 长尾积压"的状态，建议维护者优先介入核心 Bug 与开放 PR，避免社区贡献者流失。

---

## 2. 版本发布

本周期无新版本发布。

---

## 3. 项目进展

过去 24 小时共有 **6 条 PR 被关闭**，推进了多项功能增强与 Bug 修复：

| PR | 标题 | 类型 | 链接 |
|----|------|------|------|
| #1553 | feat(cowork): Write 工具文件卡片及分屏预览面板 | 功能 | [#1553](https://github.com/netease-youdao/LobsterAI/pull/1553) |
| #1545 | fix(agent): sync activeSkillIds immediately when updating current agent's skills | Bug 修复 | [#1545](https://github.com/netease-youdao/LobsterAI/pull/1545) |
| #1546 | feat(engine-overlay): 引擎启动超时后显示取消启动和查看日志按钮 | 功能/UX | [#1546](https://github.com/netease-youdao/LobsterAI/pull/1546) |
| #1555 | fix: npm run dist:mac:x64 打包失败 | 构建修复 | [#1555](https://github.com/netease-youdao/LobsterAI/pull/1555) |
| #1557 | feat(settings): 设置面板侧栏支持搜索筛选分类 | 功能 | [#1557](https://github.com/netease-youdao/LobsterAI/pull/1557) |
| #1560 | fix: 修复 Agent 编辑后点击原 Agent 无法切换回聊天界面的问题 | Bug 修复 | [#1560](https://github.com/netease-youdao/LobsterAI/pull/1560) |

**项目整体推进评估**：方向上向前推进，涵盖写作协作、引擎启动 UX、设置面板、Agent 切换等多个产品面，但因全部标记 stale 且多数直接关闭（未合并），实际进入主干代码的贡献有限，建议核对这些关闭属于"合并落地"还是"无响应被自动关闭"，以避免误判项目活跃度。

---

## 4. 社区热点

今日热度最高的 3 个话题（按 Issue 评论数与 PR 关注点排序）：

1. **[#1552](https://github.com/netease-youdao/LobsterAI/issues/1552) feat: AI 产物 Markdown 预览及文件卡片支持**（1 条评论）
   作者 noransu 提出当 Agent 用 Write 工具创建文件后，用户无法在应用内直接预览 Markdown/HTML/代码等文本文件，只能让 Agent 重新读取或手动切换文件管理器，体验欠佳。配套 PR [#1553](https://github.com/netease-youdao/LobsterAI/pull/1553) 已提交并关闭。

2. **[#1556](https://github.com/netease-youdao/LobsterAI/issues/1556) doc bug: IM 机器人配置指南 404**（2 条评论）
   用户 darkSheep404 反馈官方 IM 配置文档链接失效。该问题直接影响新手入门路径，是相对高频的入门体验类痛点。

3. **PR #1557 设置面板侧栏搜索筛选** 与 **PR #1546 引擎启动取消按钮**
   两项分别面向"配置项过多难找定位"和"启动卡住无逃生口"两个真实场景，反映出社区对**可用性细节**和**错误恢复能力**的诉求集中。

---

## 5. Bug 与稳定性

按严重程度排列：

| 严重度 | 标题 | 是否已有 Fix | 链接 |
|--------|------|--------------|------|
| � 高 | **[#1560](https://github.com/netease-youdao/LobsterAI/pull/1560) Agent 编辑后点击原 Agent 无法切回聊天界面** | ✅ 已修复（PR 已关闭） | [#1560](https://github.com/netease-youdao/LobsterAI/pull/1560) |
| 🟠 中 | **[#1545](https://github.com/netease-youdao/LobsterAI/pull/1545) Agent 技能列表更新后徽章不立即刷新** | ✅ 已修复 | [#1545](https://github.com/netease-youdao/LobsterAI/pull/1545) |
| 🟠 中 | **[#1547](https://github.com/netease-youdao/LobsterAI/pull/1547) 定时任务通知渠道选择后无法改回"不通知"** | �️ PR 仍 OPEN，未合并 | [#1547](https://github.com/netease-youdao/LobsterAI/pull/1547) |
| 🟡 中 | **[#1555](https://github.com/netease-youdao/LobsterAI/pull/1555) macOS x64 打包失败（`sha256sum` 兼容）** | ✅ 已关闭（修复已提交） | [#1555](https://github.com/netease-youdao/LobsterAI/pull/1555) |
| 🟡 低 | **[#1556](https://github.com/netease-youdao/LobsterAI/issues/1556) IM 机器人配置指南 404** | ❌ 仅文档修复，无 PR | [#1556](https://github.com/netease-youdao/LobsterAI/issues/1556) |
| 🟢 UX | **[#1546](https://github.com/netease-youdao/LobsterAI/pull/1546) 引擎启动卡住无取消入口（硬等待 5 分钟）** | ✅ 已关闭 | [#1546](https://github.com/netease-youdao/LobsterAI/pull/1546) |

**稳定性信号**：核心 Bug 大多已有修复或对应 PR，但 **#1547 仍处 OPEN 状态**，且全部条目处于 stale 状态未被及时跟进，存在响应滞后风险。

---

## 6. 功能请求与路线图信号

| 需求 | 来源 | 状态 | 进入下版本概率 |
|------|------|------|----------------|
| **Write 工具文件卡片 + 分屏 Markdown 预览** | [#1552](https://github.com/netease-youdao/LobsterAI/issues/1552) / [#1553](https://github.com/netease-youdao/LobsterAI/pull/1553) | 配套 PR 已关闭 | ⭐⭐⭐⭐ 高（功能完整，需求真实） |
| **设置面板侧栏搜索筛选** | [#1557](https://github.com/netease-youdao/LobsterAI/pull/1557) | PR 已关闭 | ⭐⭐⭐⭐ 高 |
| **引擎启动超时增加取消/查看日志按钮** | [#1546](https://github.com/netease-youdao/LobsterAI/pull/1546) | PR 已关闭 | ⭐⭐⭐⭐ 高 |

**路线图观察**：协作写作场景的**文件预览能力**是当前最强的需求信号，配合 Markdown 渲染、HTML 沙箱、SVG、图片与代码高亮的端到端体验将显著提升 LobsterAI 作为"Agent + 内容产出"工具的竞争力。**设置面板可发现性**与**引擎启动逃逸口**两项改进属于成熟产品的典型演进路径，预计若维护者响应将快速落地。

---

## 7. 用户反馈摘要

从 Issues 评论中提炼的真实痛点：

- **📌 文件预览体验欠佳**（#1552）：用户反馈"让 Agent 用 Read 把全文贴回对话占用大量空间"、"切到文件管理器打开"操作链路过长，反映**写作场景下缺乏原生预览**是核心摩擦点。
- **📌 文档链接 404**（#1556）：IM 配置指南失效，影响新用户接入飞书/钉钉等 IM 渠道的**首次配置成功率**。
- **📌 引擎启动卡死无助**（PR #1546 描述）：5 分钟硬超时期间用户无法操作，**网络异常或缓存失效场景下用户体验断崖**。
- **📌 设置项过多难定位**（PR #1557 背景）：通用、引擎、模型、IM、邮件、记忆、Agent、快捷键、关于等近 10 个 Tab，**配置项密度高但缺少导航辅助**。
- **📌 Agent 切换与技能状态不一致**（#1545、#1560）：保存技能 / 编辑 Agent 后需要切换走再切回才能生效，**前端状态同步与 Redux 设计存在耦合问题**。

**总体情绪**：用户对产品能力认可，但反复提到**"细节不直观"、"状态不同步"、"缺乏逃生口"**——属于产品已具备功能雏形、亟需打磨体验的阶段。

---

## 8. 待处理积压

⚠️ **全部今日条目均标记 `[stale]`**，提示维护者已长时间未响应：

| 类别 | 条目 | 创建距今 | 状态 |
|------|------|----------|------|
| � 开放 PR | [PR #1547](https://github.com/netease-youdao/LobsterAI/pull/1547) 定时任务通知渠道无法改回"不通知" | ~4 个月 | OPEN |
| 🟧 开放 Issue | [#1556](https://github.com/netease-youdao/LobsterAI/issues/1556) IM 配置指南 404 | ~4 个月 | OPEN |
| 🟧 开放 Issue | [#1552](https://github.com/netease-youdao/LobsterAI/issues/1552) Markdown 预览及文件卡片 | ~4 个月 | OPEN（对应 PR #1553 已关闭，需确认是否已合并） |

**维护者建议**：
1. 优先 review [PR #1547](https://github.com/netease-youdao/LobsterAI/pull/1547)，属于明确 Bug 修复且变更面小（+2/-1 行）。
2. 修复 [Issue #1556](https://github.com/netease-youdao/LobsterAI/issues/1556) 的文档链接（成本极低、影响面大）。
3. 确认 [#1553](https://github.com/netease-youdao/LobsterAI/pull/1553) 是否已合并入主干，避免社区误以为需求未被采纳。
4. 评估 stale 政策是否过于激进，对仍活跃的 PR/Issue 调整豁免策略。

---

**总结**：LobsterAI 今日的"高 PR + 低响应"组合是典型的中型开源项目瓶颈期表现——社区贡献意愿仍然存在（7 个 PR / 24h），但维护链路出现延迟。建议维护者在下一工作日集中处理开放 PR #1547 与两条 OPEN Issue，恢复社区信任信号。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目日报 · 2026-08-21

> 数据来源：GitHub moltis-org/moltis 过去 24 小时动态

---

## 1. 今日速览

Moltis 项目今日呈现"安全加固 + 渠道打磨"的双线推进态势：合并 4 个 PR，关闭 1 个标记为 CWE-306 安全漏洞的 Issue，并发布 1 个新版本（20260820.01）。社区活跃度中等偏上，8 个 PR 中有一半聚焦 WhatsApp 渠道体验修复，另一半集中在认证/供应链/沙箱安全强化。当前仍有 4 个 PR 待合并，积压较低，整体项目健康度良好。

---

## 2. 版本发布

**🚀 新版本：20260820.01**

该版本于 2026-08-20 发布，按命名规范属于每日构建的滚动版本。鉴于本次发布与多个已合并的安全修复（PR #1216）和渠道稳定性修复（PR #1217、#1218、#1219）紧密相关，建议用户在升级后重点验证：

- ✅ Vault 解锁/恢复接口的认证保护是否生效（对应 [PR #1216](https://github.com/moltis-org/moltis/pull/1216)）
- ✅ WhatsApp 群组中回复机器人消息是否被正确识别（对应 [PR #1217](https://github.com/moltis-org/moltis/pull/1217)）
- ✅ WhatsApp push name 显示是否反映实际 bot 配置（对应 [PR #1218](https://github.com/moltis-org/moltis/pull/1218)）

> ⚠️ 破坏性变更与迁移注意：当前 Release Notes 详情未提供，如涉及配置文件格式调整或 API 变更，请查阅仓库 Release 页面确认。

---

## 3. 项目进展

今日有 **4 个 PR 合并/关闭**，项目在安全与消息渠道方向取得实质性进展：

| PR | 标题 | 影响 |
|---|---|---|
| [#1216](https://github.com/moltis-org/moltis/pull/1216) | fix(httpd): require authentication for vault unlock and recovery | **🔒 高优先级安全修复**——修复 CWE-306 漏洞，Vault 解锁与恢复接口此前无任何认证可被远程暴力破解 |
| [#1217](https://github.com/moltis-org/moltis/pull/1217) | fix(whatsapp): treat a reply to bot as addressing it | 修复 WhatsApp 群组中 `mention_mode=mention` 下"回复机器人消息被丢弃"的逻辑缺陷，使回复与 @mention 在语义上等价 |
| [#1218](https://github.com/moltis-org/moltis/pull/1218) | fix(whatsapp): stop hardcoding push name to "Moltis" | 解决配置为 "Ada" 的 bot 在群聊中仍显示为 "Moltis" 的展示错位问题 |
| [#1219](https://github.com/moltis-org/moltis/pull/1219) | fix(channels): make untrusted-turn tool ceiling configurable | 把 /sh 之外的硬编码 deny-all 策略变成可配置，恢复了"公共受众"3 个工具的可用性，使策略层 4、5 可达 |

**整体评估**：项目在 24 小时内同时完成了一次关键安全加固和三次渠道体验打磨，安全债务基本清零，WhatsApp 集成稳定性显著提升。

---

## 4. 社区热点

从交互数据看，今日热门程度最高的是 **#1177（Vault 认证漏洞）**，虽评论数为 0、点赞为 0，但其关闭伴随 PR #1216 的合并，表明维护者主动响应迅速，无须社区催促。

安全相关 PR 也获得一定关注：
- [#1222](https://github.com/moltis-org/moltis/pull/1222) fix(web): validate sandbox image requests — 限制包检查与镜像构建仅限操作员管理员
- [#1221](https://github.com/moltis-org/moltis/pull/1221) fix(gateway): pin Snyk Agent Scan — 钉死 Snyk Agent Scan 0.5.17 版本以避免供应链攻击

**社区诉求分析**：当日主题集中在"安全纵深防御"和"WhatsApp 用户体验正确性"两大方向，反映出用户对部署到生产环境的信任度关注与对多渠道场景的精细化需求。

---

## 5. Bug 与稳定性

| 严重度 | Issue/PR | 描述 | 状态 |
|---|---|---|---|
| 🔴 **严重（安全）** | [#1177](https://github.com/moltis-org/moltis/issues/1177) | Vault Unlock/Recovery 接口缺失认证（CWE-306），可被远程未授权暴力破解 | ✅ 已关闭，修复见 [#1216](https://github.com/moltis-org/moltis/pull/1216) |
| 🟡 **中等（功能）** | [#1218](https://github.com/moltis-org/moltis/pull/1218) | WhatsApp push name 硬编码导致群聊显示错位 | ✅ 已合并 |
| 🟡 **中等（功能）** | [#1217](https://github.com/moltis-org/moltis/pull/1217) | WhatsApp 群聊回复机器人消息被丢弃 | ✅ 已合并 |
| 🟢 **低（体验）** | [#1219](https://github.com/moltis-org/moltis/pull/1219) | 非 /sh 场景工具策略过严，公共受众工具不可用 | ✅ 已合并 |

**结论**：今日无新增未修复 Bug，全部历史安全/稳定性问题已纳入修复路径。

---

## 6. 功能请求与路线图信号

今日虽无明确以 "feature" 标记的 Issue，但以下 PR 反映出明显的功能演进方向：

- **Markdown → WhatsApp 原生标记的渲染管线**（[#1220](https://github.com/moltis-org/moltis/pull/1220)）  
  由 rubenssoto 提交，旨在消息发出前完成格式转换，但保留会话历史与 Web UI 的 Markdown 原文。该能力如纳入下一版本，将显著提升 Moltis 在 WhatsApp 上的表达力，是渠道差异化竞争的潜在亮点。

- **沙箱镜像请求校验**（[#1222](https://github.com/moltis-org/moltis/pull/1222)）  
  在容器与 Dockerfile 使用前校验镜像引用与包名，意味着 Moltis 正在向"操作员/普通用户权限分层"的精细化模型演进，未来可能衍生出更完整的 RBAC 系统。

- **可配置的工具策略层**（[#1219](https://github.com/moltis-org/moltis/pull/1219)）  
  暴露 untrusted-turn tool ceiling 配置项，预示着 Moltis 的策略引擎将从"硬编码"过渡到"分层 + 可调"，对企业用户尤其友好。

---

## 7. 用户反馈摘要

由于今日 Issue 区域活跃度较低（仅 1 条已关闭 Issue 且无评论），可提取的真实用户痛点有限。可识别的信号包括：

- **安全意识提升**：[#1177](https://github.com/moltis-org/moltis/issues/1177) 提交者在 Preflight Checklist 中确认已搜索历史 issues 并使用最新版本，说明 Moltis 用户群中已出现主动进行安全审计的贡献者。
- **WhatsApp 渠道痛点集中**：[#1217](https://github.com/moltis-org/moltis/pull/1217)、[#1218](https://github.com/moltis-org/moltis/pull/1218)、[#1220](https://github.com/moltis-org/moltis/pull/1220) 三连击说明 WhatsApp 是当前最被高频使用且问题反馈最集中的渠道，建议维护者在下次迭代时优先完成该渠道的回归测试。

> 📌 建议关注：当前缺少评论与点赞数据，无法量化用户满意度，建议在下一日报周期跟踪新开 Issue 的用户反馈模式。

---

## 8. 待处理积压

| 类型 | 编号 | 标题 | 等待时长 | 备注 |
|---|---|---|---|---|
| 🟠 **长期未合并 PR** | [#468](https://github.com/moltis-org/moltis/pull/468) | fix(plugins): use cmd.exe on Windows for shell hooks | **5 个月**（创建于 2026-03-23） | 已通过 Windows 10 实测与 CI，但今日仍处于 OPEN 状态且当日无新评论 |
| 🟡 **待合并 PR** | [#1222](https://github.com/moltis-org/moltis/pull/1222) | validate sandbox image requests | < 24 小时 | 缺少完整 cargo test 验证（仅完成 image_input 子集） |
| 🟡 **待合并 PR** | [#1221](https://github.com/moltis-org/moltis/pull/1221) | pin Snyk Agent Scan | < 24 小时 | snyk_agent_scan 模块测试尚未运行 |
| 🟡 **待合并 PR** | [#1220](https://github.com/moltis-org/moltis/pull/1220) | render Markdown in outbound messages | < 24 小时 | 测试矩阵尚未在 PR 描述中列出 |

**提醒维护者关注**：[#468](https://github.com/moltis-org/moltis/pull/468) 作为 Windows 平台兼容性修复，已挂起近 5 个月，建议明确是否纳入下一版本路线图，避免长尾积压。

---

### 📊 项目健康度指标

| 维度 | 评估 |
|---|---|
| 提交活跃度 | 🟢 高（24h 内 8 个 PR 变动） |
| 安全响应速度 | 🟢 极优（关键 CWE 漏洞从报告到修复 PR 合入 ≤ 24h） |
| 渠道稳定性 | 🟢 改善中（WhatsApp 三项缺陷同日修复） |
| 社区互动 | 🟡 偏低（Issue/PR 评论数普遍为 0） |
| 长期积压 | 🟡 需关注（#468 超 5 个月未合并） |
| 版本节奏 | 🟢 正常（每日构建版本持续产出） |

---

*日报生成时间：2026-08-21 · 数据基准：GitHub API 过去 24 小时动态*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目日报 · 2026-08-21

> 数据来源：github.com/agentscope-ai/CoPaw（实际仓库为 QwenPaw）｜统计窗口：过去 24 小时

---

## 1. 今日速览

CoPaw/QwenPaw 在过去 24 小时内保持了高强度的迭代节奏：**28 条 Issue 互动（15 新开/活跃、13 已关闭）、50 条 PR 互动（22 待合并、28 已合并/关闭），并发布 1 个新版本 v2.1.1-beta.1**。Issue 当日关闭率约 46%，PR 合并/关闭率约 56%，反映出维护团队响应积极、CI 与 Beta 验证流水线运转正常。讨论焦点集中在三类问题：**(1) Agent 多步骤任务中途静默停止**（#6921 评论数最高，达 10 条）、**(2) 网络中断/冻结等稳定性问题**、**(3) Console 长会话卡顿与 Skills/工具面板的扩展诉求**。总体健康度良好，但仍有数个高评论量但未修复的稳定性 Issue 需重点关注。

---

## 2. 版本发布

### v2.1.1-beta.1（Beta，发布日期 2026-08-20）

**更新内容：**
- **Console**：改进编辑器的标签页（tab）溢出导航（[#6983](https://github.com/agentscope-ai/QwenPaw/pull/6983)，贡献者 @rayrayraykk）
- **Providers**：降低速率限制器（rate limiter）初始化日志等级（[#6988](https://github.com/agentscope-ai/QwenPaw/pull/6988)）
- **Release notes**：更新发布说明

**破坏性变更**：未见明确 BREAKING CHANGE 说明，属于体验与日志层面的改善。

**迁移注意事项**：Beta 版不推荐生产环境使用。Beta 验证由 Release Duty Issue [#7180](https://github.com/agentscope-ai/QwenPaw/issues/7180) 跟踪，截止时间为 2026-08-20 14:43 UTC。

---

## 3. 项目进展（已合并/关闭的重要 PR）

| PR | 主题 | 影响 |
|---|---|---|
| [#7161](https://github.com/agentscope-ai/QwenPaw/pull/7161) | Console 助手响应卡片新增 artifacts | 提升产物可见性 |
| [#7174](https://github.com/agentscope-ai/QwenPaw/pull/7174) | 持久化 Driver 并发初始化 | 缩短工作区冷启动时间 |
| [#6880](https://github.com/agentscope-ai/QwenPaw/pull/6880) | 统一 App/Plugin/Skill Marketplace 为 `/market` | 前端架构整合 |
| [#6371](https://github.com/agentscope-ai/QwenPaw/pull/6371) | 下载器超时后继续 fallback 链 | 文件处理健壮性 |
| [#7166](https://github.com/agentscope-ai/QwenPaw/pull/7166) | qwenpawmail MCP 独立打包为 sidecar | 改善离线/受限网络分发 |
| [#7135](https://github.com/agentscope-ai/QwenPaw/pull/7135) | envs 文件原子写入并保留损坏副本 | **修复 #7118 数据丢失隐患** |

**整体推进评估**：今日合入的 PR 集中在 **Console 性能优化、MCP 打包重构、稳定性修复** 三个方向，与社区反馈高度吻合。其中并发 Driver 初始化（[#7174](https://github.com/agentscope-ai/QwenPaw/pull/7174)）和长会话响应性优化（[#7176](https://github.com/agentscope-ai/QwenPaw/pull/7176)）回应了 #7102 长时间冻结的用户痛点，是本周最重要的稳定性进展。

---

## 4. 社区热点

按评论数排序的活跃讨论：

| 排名 | Issue | 评论数 | 状态 | 摘要 |
|---|---|---|---|---|
| 1 | [#6921](https://github.com/agentscope-ai/QwenPaw/issues/6921) | 10 | OPEN | Agent 输完规划语句（如 "Now 2.1, 3.1, 3.2. Let me do all three."）后无提示停止，需用户输入"继续" |
| 2 | [#7102](https://github.com/agentscope-ai/QwenPaw/issues/7102) | 9 | CLOSED | 使用 glm 5.3 时冻结超 10 分钟，无 token 输出甚至思考也卡住 |
| 3 | [#6643](https://github.com/agentscope-ai/QwenPaw/issues/6643) | 6 | CLOSED | 任务产出物堆积在 media 目录，建议按任务分目录 |
| 4 | [#6436](https://github.com/agentscope-ai/QwenPaw/issues/6436) | 4 | OPEN | **Feature**：自动模型路由（按消息类型路由到合适模型） |
| 5 | [#6826](https://github.com/agentscope-ai/QwenPaw/issues/6826) | 4 | CLOSED | 对话结束时间显示异常（耗时显示不一致） |
| 6 | [#6932](https://github.com/agentscope-ai/QwenPaw/issues/6932) | 3 | OPEN | 网络短暂中断恢复后 QwenPaw 无法自动恢复，需手动重启服务 |
| 7 | [#7110](https://github.com/agentscope-ai/QwenPaw/issues/7110) | 3 | CLOSED | 会话中含无法访问的图片链接即整个会话不可用，需 /clear |
| 8 | [#7013](https://github.com/agentscope-ai/QwenPaw/issues/7013) | 3 | OPEN | **Feature**：Chat 增加统一工具面板、Web 服务预览、交互式终端 |

**诉求分析**：用户诉求呈现两个集中方向——**稳定性与透明性**（希望 Agent 在规划阶段可见、在网络异常时自愈）以及**专业化能力**（自动选模型、统一工具面板、跨会话记忆）。[#6436](https://github.com/agentscope-ai/QwenPaw/issues/6436) 的「自动模型路由」虽评论不多但已被 👍，代表长期方向性诉求。

---

## 5. Bug 与稳定性

按严重程度（用户影响面 × 数据风险）排序：

| 严重度 | Issue | 状态 | 是否有 Fix PR | 说明 |
|---|---|---|---|---|
| 🔴 高 | [#6921](https://github.com/agentscope-ai/QwenPaw/issues/6921) | OPEN | ❌ 无 | Agent 多步骤任务中途静默停止，破坏连续任务体验，影响所有多步工作流用户 |
| � 高 | [#7168](https://github.com/agentscope-ai/QwenPaw/issues/7168) | OPEN | ❌ 无 | **history.db 被 recall_history 撑爆到 7.6GB**，且同一区间重复落库，长期运行 agent 存在数据膨胀风险 |
| 🟠 中 | [#6932](https://github.com/agentscope-ai/QwenPaw/issues/6932) | OPEN | ❌ 无 | 网络中断恢复后不自动重连，必须重启服务进程 |
| 🟠 中 | [#7156](https://github.com/agentscope-ai/QwenPaw/issues/7156) | OPEN | 部分（[#7133](https://github.com/agentscope-ai/QwenPaw/pull/7133) 增加可配置 timeout） | Embedding health check 超时硬编码、warm 后仍 FAIL，导致向量召回降级 |
| 🟡 低 | [#7102](https://github.com/agentscope-ai/QwenPaw/issues/7102) | CLOSED | [#7176](https://github.com/agentscope-ai/QwenPaw/pull/7176) 间接改善 | 长时间冻结 |
| 🟡 低 | [#7110](https://github.com/agentscope-ai/QwenPaw/issues/7110) | CLOSED | 待确认 | 图片链接不可访问即会话失效 |
| 🟡 低 | [#7118](https://github.com/agentscope-ai/QwenPaw/issues/7118) | CLOSED | ✅ [#7135](https://github.com/agentscope-ai/QwenPaw/pull/7135) | envs.json 单字节损坏即丢全部环境变量（**严重数据丢失 Bug，已修复**） |
| 🟡 低 | [#7162](https://github.com/agentscope-ai/QwenPaw/issues/7162) | CLOSED | 待确认 | 流式中断时 httpx.ReadError 未进入自动重试 |

**重点警示**：[#7168](https://github.com/agentscope-ai/QwenPaw/issues/7168)（history.db 膨胀至 7.6GB）已暴露数据治理缺陷（重复落库、整段持久化），是当前最值得维护团队优先处理的稳定性隐患。

---

## 6. 功能请求与路线图信号

| 需求 | Issue | 对应或相关 PR | 落地可能性 |
|---|---|---|---|
| 自动模型路由（按消息类型） | [#6436](https://github.com/agentscope-ai/QwenPaw/issues/6436) | 暂无 | ⭐⭐ 中期（架构性变更，需 Provider 层支持） |
| Chat 工具面板 / Web 预览 / 交互终端 | [#7013](https://github.com/agentscope-ai/QwenPaw/issues/7013) | [#7167](https://github.com/agentscope-ai/QwenPaw/pull/7167)（Creator 含 Web 工具元素） | ⭐⭐⭐ 高（已有多 PR 在前） |
| 智能体切换 UX 优化（下拉精简） | [#7179](https://github.com/agentscope-ai/QwenPaw/issues/7179) | 暂无 | �⭐⭐ 高（纯前端） |
| Scroll 跨会话记忆开关 | [#7184](https://github.com/agentscope-ai/QwenPaw/issues/7184) | [#7080](https://github.com/agentscope-ai/QwenPaw/pull/7080)（PowerContext 记忆后端） | ⭐⭐⭐ 高 |
| Workspace-scoped always-on Skills | [#7182](https://github.com/agentscope-ai/QwenPaw/issues/7182) | ✅ [#7183](https://github.com/agentscope-ai/QwenPaw/pull/7183)（已开 PR，first-time-contributor） | ⭐⭐⭐⭐ 极高（PR 已就位） |
| Skills 导入页搜索/过滤 | [#7090](https://github.com/agentscope-ai/QwenPaw/issues/7090) | 暂无 | ⭐⭐⭐ 高 |
| 钉钉群上下文模式可配置 | [#7158](https://github.com/agentscope-ai/QwenPaw/issues/7158) | 暂无 | ⭐⭐ 中 |
| QQ 群定时推送 | [#7159](https://github.com/agentscope-ai/QwenPaw/issues/7159) | [#7169](https://github.com/agentscope-ai/QwenPaw/pull/7169)（QQ 会话隔离 PR） | ⭐⭐⭐ 高（基础设施 PR 已就位） |
| Qwen_Code 作为第三方 harness | [#7181](https://github.com/agentscope-ai/QwenPaw/issues/7181) | 暂无 | ⭐⭐ 中 |
| 远程 MCP 的 OAuth 2.1 文档 | [#7185](https://github.com/agentscope-ai/QwenPaw/issues/7185) | 暂无 | ⭐⭐⭐⭐ 极高（仅文档） |

**路线图信号**：Skills 系统的"always-on 工作区作用域"（[#7183](https://github.com/agentscope-ai/QwenPaw/pull/7183)）和"Scroll 跨会话记忆"两条线已由同作者 wuyak 在同一日提交 Issue + PR，**表明 Skills + Memory 是个清晰的中期演进方向**；QQ 频道的"会话隔离 + 定时推送"组合也显示出 Channels 矩阵在持续扩张。

---

## 7. 用户反馈摘要

从今日 Issue 评论中提炼的真实用户声音：

- **任务可观测性焦虑**（[#6921](https://github.com/agentscope-ai/QwenPaw/issues/6921)）：用户多次表达「模型说完就停，没有 UI 提示」的挫败感，担心 Agent 是否真正在工作，希望引入「计划 → 执行」过渡的可视化反馈。
- **多 Provider 体验不一致**（[#7102](https://github.com/agentscope-ai/QwenPaw/issues/7102)）：用户对 glm 5.3 长时间冻结感到无措，并主动尝试切换其他模型验证问题——说明用户**已经将 Provider 视为可替换组件**，对 Provider 的兼容性矩阵有较高期待。
- **网络边界场景**（

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目日报 · 2026-08-21

---

## 1. 今日速览

ZeroClaw 项目维持**高强度迭代节奏**，过去 24 小时共有 50 条 Issue 更新与 50 条 PR 更新，Issue 关闭率 10%、PR 合并/关闭率 4%，整体呈现"重讨论、轻合并"的特征。当日无任何 Release 发布，社区精力集中在**安全机制细化**（shell 策略、插件 egress、Git 子命令分类）、**WASM 插件架构落地**（激活逻辑实例、egress 授权仪式）和**运行时稳定性修复**（token 计量、上下文窗口、Provider 终态响应）三条主线。维护者决策队列（#8692）与反 slop 政策债务追踪（#10118）持续活跃，体现出项目正在从功能扩张期向治理规范期过渡。

---

## 2. 版本发布

⚠️ **本周期无新版本发布**。所有变更仍处于 PR 与 RFC 评审阶段。

---

## 3. 项目进展

### 已关闭 Issue（5 条）

| 编号 | 标题 | 性质 | 意义 |
|---|---|---|---|
| [#10194](https://github.com/zeroclaw-labs/zeroclaw/issues/10194) | PR reviewer 在合并后仍发布评审结果 | Bug (P1) | 暴露 AI 评审时序与 PR 合并竞态，修复后能避免误导性审计 |
| [#10111](https://github.com/zeroclaw-labs/zeroclaw/issues/10111) | Windows: TaskDialogIndirect 入口点缺失 | Support / Duplicate | 桌面端安装兼容问题的收口 |
| [#9016](https://github.com/zeroclaw-labs/zeroclaw/issues/9016) | OpenAI tool turns 在 Chat Completions 拒绝 reasoning effort 时失败 | Bug (P2) | 修复后让 s1/s2/s3 推理级别的工具调用更稳健 |

### 关键合并信号（PR 状态变更）

- **[#9016](https://github.com/zeroclaw-labs/zeroclaw/issues/9016)** 已关闭（属于已落地）：OpenAI 工具调用在 thinking effort 非 none 下的失败路径得到处理。
- **[#10198](https://github.com/zeroclaw-labs/zeroclaw/pull/10198)**、**[#10150](https://github.com/zeroclaw-labs/zeroclaw/pull/10150)** 等小颗粒 PR 当日活跃更新，趋向合并。

> 整体看，**P1 安全类 PR 虽多但仍处待合并状态**（见第 8 节），项目"功能推进"略快于"治理推进"。

---

## 4. 社区热点

按评论数 / 关注度排序：

| 排名 | 编号 | 主题 | 评论 | 核心诉求 |
|---|---|---|---|---|
| 🥇 | [#7155](https://github.com/zeroclaw-labs/zeroclaw/issues/7155) | 高风险 shell 命令的分级确认 + Claude Code 风格命令模式策略 | 23 | 将 `allow/ask/deny` 策略契约统一到所有 shell 入口点 |
| 🥈 | [#9487](https://github.com/zeroclaw-labs/zeroclaw/issues/9487) | Runtime 拥有的会话与传输适配器 | 22 | 明确 47 个 `/api/*` 边界，统一 `InboundAction` 入口 |
| 🥉 | [#10118](https://github.com/zeroclaw-labs/zeroclaw/issues/10118) | Rust 反 slop 策略债务追踪 | 16 | 清理 1,078 个 Rust 文件中的 307 处可疑模式（含 202 处生产 panic） |
| 4 | [#6850](https://github.com/zeroclaw-labs/zeroclaw/issues/6850) | 内存生命周期与存储后端解耦 | 14 | 终结每个 gateway/后端重复实现合并/治理逻辑的现状 |
| 5 | [#8780](https://github.com/zeroclaw-labs/zeroclaw/issues/8780) | Gemini Live 实时语音通道 | 14 | 引入可选、feature-gated 的 broker 风格语音通道 |
| 6 | [#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) | 维护者对 RFC/设计 Issue 的决策队列 | 13 | 解决 RFC 堆积、决策延迟的治理瓶颈 |
| 7 | [#6996](https://github.com/zeroclaw-labs/zeroclaw/issues/6996) | 细粒度沙箱：文件系统与网络限制 | 8 | 弥合应用层 path admission 与 OS sandbox（Bubblewrap/Landlock/Seatbelt）的漂移 |
| 8 | [#9990](https://github.com/zeroclaw-labs/zeroclaw/issues/9990) | 校准 PR 风险与安全审批要求 | 6 | 在 #9530 之后，进一步允许"高风险路径中的纯测试变更"降级为 `risk:medium` |

**分析**：社区诉求高度集中在 **"安全策略的形式化"** 与 **"架构边界澄清"** 两大方向。shell 命令策略、插件 egress、内存生命周期、会话边界这四个 RFC 多次修订（Revision 2/3），说明社区正在通过反复迭代逼近可落地的契约。

---

## 5. Bug 与稳定性

### 🔴 高优先级（P1 / S1）

| 编号 | 问题 | 状态 | 修复 PR |
|---|---|---|---|
| [#10194](https://github.com/zeroclaw-labs/zeroclaw/issues/10194) | AI PR 评审在合并后发布结果，造成误审 | ✅ 已关闭 | 待查找 |
| [#10118](https://github.com/zeroclaw-labs/zeroclaw/issues/10118) | Tracker: 307 处 Rust 反 slop 候选（含 202 处生产 panic） | 🟡 进行中 | 多个分支 PR |

### 🟠 中优先级（P2 / S2）

| 编号 | 问题 | 影响 | 修复 PR |
|---|---|---|---|
| [#10068](https://github.com/zeroclaw-labs/zeroclaw/issues/10068) | Interactive agent 上下文硬截 32k，忽略 `max_context_tokens=131072` | 长时间任务被过早压缩 | 待 PR |
| [#10074](https://github.com/zeroclaw-labs/zeroclaw/issues/10074) | `SECURITY.md` 描述了 4 月已删除的 CI job | 文档与实际 CI 行为不一致 | 待 PR |
| [#10106](https://github.com/zeroclaw-labs/zeroclaw/issues/10106) | 精确代理选择器拒绝受支持的转录服务（Groq/OpenAI/Deepgram/AssemblyAI/Google） | 转录子代理无法启用 | 待 PR |
| [#9016](https://github.com/zeroclaw-labs/zeroclaw/issues/9016) | OpenAI Chat Completions 拒绝 reasoning effort 时工具调用失败 | 高级推理模型工作流中断 | ✅ 已关闭（#9195 链路） |
| [#10069](https://github.com/zeroclaw-labs/zeroclaw/issues/10069) | Agent 可移植性（导出/共享）缺失 | 多部署复用成本高 | 待 PR |
| [#10073](https://github.com/zeroclaw-labs/zeroclaw/issues/10073) | `StoragePolicy::Rolling` 在持续事件流下出现严重性能回归 | 默认日志策略受影响 | 待 PR |

### 🟡 低优先级（P3 / S3）

| 编号 | 问题 | 影响 |
|---|---|---|
| [#10103](https://github.com/zeroclaw-labs/zeroclaw/issues/10103) | ZeroCode Health 状态在法语/西班牙语下对齐错位 | 终端宽度溢出，轻微 UI 缺陷 |

### 相关修复 PR（值得合并）

- [#10177](https://github.com/zeroclaw-labs/zeroclaw/pull/10177) — cron 内 agent 作用域变更改原子化（基于 #9948，size S）
- [#9748](https://github.com/zeroclaw-labs/zeroclaw/pull/9748) — 防止过期 provider refresh 修改替换会话（修复 #9719）
- [#9707](https://github.com/zeroclaw-labs/zeroclaw/pull/9707) — 将裸 `vision_model_provider` 迁移到点号 alias 引用
- [#9715](https://github.com/zeroclaw-labs/zeroclaw/pull/9715) — JSONL 会话迁移重试安全（合并/写锁内事务化）
- [#9635](https://github.com/zeroclaw-labs/zeroclaw/pull/9635) — Git 子命令分类绕过 `-C` 全局选项
- [#9678](https://github.com/zeroclaw-labs/zeroclaw/pull/9678) — 强化 Git shell 策略参数（统一 quote/escape 解析）
- [#9999](https://github.com/zeroclaw-labs/zeroclaw/pull/9999) — OpenAI-compatible `finish_reason=length` 归类为输出受限终态

---

## 6. 功能请求与路线图信号

### 已被标记 `status:accepted` 或 `in-progress` 的功能（高概率进入下一版本）

| 编号 | 功能 | 进展 |
|---|---|---|
| [#10168](https://github.com/zeroclaw-labs/zeroclaw/issues/10168) | 默认开启 stall watchdog（`stall_timeout_secs`） | accepted |
| [#10166](https://github.com/zeroclaw-labs/zeroclaw/issues/10166) | `stream_mode` 默认改为 `partial`，使回复默认流式 | accepted |
| [#10162](https://github.com/zeroclaw-labs/zeroclaw/issues/10162) | `plugin install` 与 config-entry seeding 原子化、可重试 | accepted |
| [#10086](https://github.com/zeroclaw-labs/zeroclaw/issues/10086) | ZeroCode Logs 文本可选可复制 | in-progress |
| [#10087](https://github.com/zeroclaw-labs/zeroclaw/issues/10087) | 必填 CI 中跑 `memory-postgres` 测试 | in-progress |
| [#7910](https://github.com/zeroclaw-labs/zeroclaw/issues/7910) | Windows 自更新 swap/rollback/sidecar 路径测试 | accepted（P3） |
| [#4668](https://github.com/zeroclaw-labs/zeroclaw/issues/4668) | MariaDB 内存后端 | accepted（P2） |

### 仍处 RFC 阶段、可能影响路线图的方向

| 编号 | 主题 | 触及方向 |
|---|---|---|
| [#7155](https://github.com/zeroclaw-labs/zeroclaw/issues/7155) | shell 命令分级确认 | Shell 安全 |
| [#9487](https://github.com/zeroclaw-labs/zeroclaw/issues/9487) | Runtime-owned 会话 + 传输适配器 | 架构边界 |
| [#6850](https://github.com/zeroclaw-labs/zeroclaw/issues/6850) | 内存生命周期与存储解耦 | 内存抽象 |
| [#8780](https://github.com/zeroclaw-labs/zeroclaw/issues/8780) | Gemini Live 实时语音 | 多模态 |
| [#8850](https://github.com/zeroclaw-labs/zeroclaw/issues/8850) | 可选 channel/tool 从编译期 feature flag 迁到运行时 WASM 插件 | 部署形态 |
| [#10076](https://github.com/zeroclaw-labs/zeroclaw/issues/10076) | 完整 WASM 插件架构（hook/backend/capability 三层） | "everything is a plugin" |
| [#10050](https://github.com/zeroclaw-labs/zeroclaw/issues/10050) | 网关逐字发送通道消息（不经 agent turn） | 控制面 |
| [#10025](https://github.com/zeroclaw-labs/zeroclaw/issues/10025) | `zeroclaw swarm` 临时 swarm + crush 风格 TUI | 多 agent 编排 |
| [#10069](https://github.com/zeroclaw-labs/zeroclaw/issues/10069) | Agent 可移植性（3 阶段） | 生态 |
| [#6996](https://github.com/zeroclaw-labs/zeroclaw/issues/6996) | 细粒度沙箱策略 | 沙箱 |

### 多模型/多 Provider 矩阵（XL 改动）

- [#9809](https://github.com/zeroclaw-labs/zeroclaw/pull/9809) — 单 provider profile 承载多 model alias（核心架构）
- [#9109](https://github.com/zeroclaw-labs/zeroclaw/pull/9109) — Hailo-Ollama 原生 `/api/tags` + `/api/chat`
- [#9713](https://github.com/zeroclaw-labs/zeroclaw/pull/9713) — history-trim 事件暴露 token 计量（修复 #9619 误判）

---

## 7. 用户反馈摘要

从 Issues 评论中提炼的真实用户痛点与场景：

### 🔥 主要痛点

1. **"我的 32k 上下文限制去了哪？"**（[#10068](https://github.com/zeroclaw-labs/zeroclaw/issues/10068)）
   用户配置 `max_context_tokens=131072`，但 interactive agent 会话硬截 32k。**反映缺乏对实际生效上限的可观测性**。

2. **"SECURITY.md 在骗我"**（[#10074](https://github.com/zeroclaw-labs/zeroclaw/issues/10074)）
   文档中描述的 `docker` CI job 在 4 月已被删除，container 检查实际上只剩约定而非强制。**反映文档与 CI 协同存在治理缺口**。

3. **"OpenAI gpt-5.6-sol 工具调用整体失败"**（[#9016](https://github.com/zeroclaw-labs/zeroclaw/issues/9016)）
   任何带 `function tools` 且非 `none` reasoning effort 的请求在 `/v1/chat/completions` 上都被拒绝。**反映 reasoning 模型适配进度滞后**。

4. **"PR reviewer 发疯：合并后还在评分"**（[#10194](https://github.com/zeroclaw-labs/zeroclaw/issues/10194)）
   评审结果在 PR 已合并后才到达，扰乱审计。**反映自动化 reviewer 的生命周期管理不严谨**。

5. **"Windows 桌面端装完就崩"**（[#10111](https://github.com/zeroclaw-labs/zeroclaw/issues/10111)）
   `TaskDialogIndirect` 入口点缺失，desktop 进程无法启动。**反映 Windows 安装路径的兼容性测试覆盖不足**。

### 🟢 满意/积极信号

- **CLI 配置/迁移类 PR**（[#9707](https://github.com/zeroclaw-labs/zeroclaw/pull/9707)、#9715）被多位 experienced/distinguished contributor 联合维护，**配置演进路径清晰**。
- **Status 标注规范**（accepted / in-progress / blocked）让社区对 RFC 命运有较强可预期性。
- **维护者主动给 P3 项目打标**（FR/feature label），**项目治理颗粒度较为成熟**。

### 🛠️ 使用场景线索

- **多部署场景**：agent 可移植性（#10069）说明大量用户将 ZeroClaw 作为团队/客户端基础设施工具复用。
- **多模态场景**：Gemini Live 实时语音（#8780）反映用户希望语音成为一等交互通道。
- **合规模型路由**：Hailo-Ollama（#9109）等边缘/本地 LLM 适配器出现，说明 ZeroClaw 正向"本地 + 远程"混合推理方向延伸。

---

## 8. 待处理积压

### 🚨 需维护者立即关注的 P1 / 高风险 PR

| 编号 | 主题 | 等待时长 | 风险 |
|---|---|---|---|
| [#9584](https://github.com/zeroclaw-labs/zeroclaw/pull/9584) | 插件 install/list 接入 egress grant ceremony | 21 天 | P1 / high |
| [#9582](https://github.com/zeroclaw-labs/zeroclaw/pull/9582) | 主机拥有 egress policy 强制于 `wasi:http` | 21 天 | P1 / high |
| [#9678](https://github.com/zeroclaw-labs/zeroclaw/pull/9678) | Git shell 策略参数加固 | 19 天 | P1 / high |
| [#9637](https://github.com/zeroclaw-labs/zeroclaw/pull/9637) | 临时 React Router RSC 异常告警 | 20 天 | P1 / high |
| [#9999](https://github.com/zeroclaw-labs/zeroclaw/pull/9999) | 兼容 OpenAI 输出受限终态分类 | 7 天 | blocked / P1 |
| [#9447](https://github.com/zeroclaw-labs/zeroclaw/pull/9447) | Anthropic 不完整终态响应分类 | 25 天 | P1 / in-progress |
| [#9753](https://github.com/zeroclaw-labs/zeroclaw/pull/9753) | 区分 absent vs empty `allowed_tools` | 17 天 | P1 / high |
| [#9635](https://github.com/zeroclaw-labs/zeroclaw/pull/9635) | Git risk classifier 解析全局选项 | 20 天 | P1 / high |
| [#10146](https://github.com/zeroclaw-labs/zeroclaw/pull/10146) | 激活逻辑 channel 实例 | 2 天

</details>

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*