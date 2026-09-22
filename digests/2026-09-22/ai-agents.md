# OpenClaw 生态日报 2026-09-22

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-09-22 02:49 UTC

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

# OpenClaw 项目日报 · 2026-09-22

> 数据周期：过去 24 小时 | 数据源：openclaw/openclaw GitHub Repository
> 报告生成时间：2026-09-22

---

## 1. 今日速览

OpenClaw 今日继续保持**极高活跃度**：24 小时内 Issue 更新 500 条（仅 21 条关闭，关闭率 4.2%）、PR 更新 500 条（合并/关闭 127 条，待合并 373 条）。当日发布了 `v2026.7.35` gateway-only extended-stable 版本，更新节奏稳健。然而，**议题关闭率与 PR 合并率双低（Issue 4.2% / PR 25.4%）**，结合大量 P0/P1 议题长期携带 `clawsweeper:no-new-fix-pr` 与 `needs-maintainer-review` 标签，反映出当前**社区贡献与维护者审阅能力之间存在显著 backpressure**。项目健康度评估：**功能演进正常、稳定性问题积压待解**。

---

## 2. 版本发布

### 🚢 v2026.7.35 — Gateway-only Extended-Stable Release

- **类型**：extended-stable（项目当前 LTS 等价物）
- **定位**：基于 2026 年 7 月底 OpenClaw 主线 + 关键安全更新、可靠性与性能修复、新模型支持
- **发布说明原文**：描述该版本是 OpenClaw 7 月底版本叠加关键安全更新、可靠性与性能修复、以及新模型支持的产物。当前最新版本为 [2026.9.5](链接)
- **适用用户**：生产环境、追求稳定胜过新功能的用户
- **迁移注意**：
  - 这是 **gateway-only** 发布——CLI、控制 UI、原生应用等需要单独跟进 `2026.9.5` 等更新频道
  - 用户应确认自身部署形态与该扩展稳定分支对齐
- **链接**：[Release v2026.7.35](https://github.com/openclaw/openclaw/releases/tag/v2026.7.35)

---

## 3. 项目进展（今日合并/关闭的重要 PR）

> 今日展示的 30 条 PR 中，仅有 **PR #155199** 明确显示已 CLOSED 状态（fix(ui): preserve message footer focus outlines）。其余 29 条仍为 OPEN，多条处于 `👀 ready for maintainer look`，但实际尚未合入。

| PR | 标题 | 模块 | 状态 |
|---|---|---|---|
| [#155199](https://github.com/openclaw/openclaw/pull/155199) | fix(ui): preserve message footer focus outlines | web-ui | ✅ CLOSED |
| [#155342](https://github.com/openclaw/openclaw/pull/155342) | fix(ui): show running updates ahead of queued campaigns | web-ui | 🟡 ready for maintainer |
| [#155370](https://github.com/openclaw/openclaw/pull/155370) | fix(ui): defer offscreen chat image requests | web-ui | 🟡 ready for maintainer |
| [#155368](https://github.com/openclaw/openclaw/pull/155368) | fix(ui): preserve saved worktrees when Git discovery fails | web-ui | 🟡 ready for maintainer |
| [#155378](https://github.com/openclaw/openclaw/pull/155378) | fix(webchat): retain failed-turn diagnostics for debugging | webchat | 🟢 新提交 |
| [#155377](https://github.com/openclaw/openclaw/pull/155377) | fix(acpx): adopt lifecycle repairs without blocking session migration | acpx | 🟢 新提交 |
| [#137895](https://github.com/openclaw/openclaw/pull/137895) | fix(voice-call): preserve farewell audio before hangup | voice-call | 🟡 ready for maintainer |
| [#136689](https://github.com/openclaw/openclaw/pull/136689) | fix(googlechat): keep automatic replies in their thread | googlechat | 🟡 ready for maintainer |
| [#153477](https://github.com/openclaw/openclaw/pull/153477) | fix(control-ui): name the browser-reachable origin in the one-time handoff | control-ui | 🟡 ready for maintainer |
| [#154839](https://github.com/openclaw/openclaw/pull/154839) | fix: respect role model restrictions in model pickers | web/macOS/iOS | 🟡 needs proof (security-sensitive) |

**进展评估**：
- **Web UI 修复集中提交**：4 条 UI 相关 PR 来自 vincentkoc，覆盖更新状态展示、Worktree 保留、图片懒加载等体验改进
- **安全敏感 PR 待审核**：#154839（角色模型权限）已标记 `security-sensitive-changed` 与 `security-review-required`
- **多平台联动**：iOS/macOS/Windows 在文件下载、Voice Call 告别音频等场景形成协作式修复

**整体判断**：今日 PR 提交量充足、覆盖范围广，但维护者评审吞吐成为瓶颈；项目代码层面的"前进距离"实际有限。

---

## 4. 社区热点

### 🔥 评论最多议题（Top 5）

| 排名 | Issue | 评论数 | 👍 | 主题 |
|---|---|---|---|---|
| 1 | [#143524](https://github.com/openclaw/openclaw/issues/143524) | **50** | 0 | Agent SQLite WAL 增长失控（P0 / Release blocker） |
| 2 | [#91588](https://github.com/openclaw/openclaw/issues/91588) | **31** | 1 | Gateway 内存泄漏：350MB → 15.5GB 触发 OOM（P1） |
| 3 | [#91009](https://github.com/openclaw/openclaw/issues/91009) | **26** | 2 | Codex hook relay 进程 CPU 100%+ 卡死 RPC（P0） |
| 4 | [#48003](https://github.com/openclaw/openclaw/issues/48003) | **20** | 4 | Steer 模式无法在 turn 中注入消息（P1） |
| 5 | [#87744](https://github.com/openclaw/openclaw/issues/87744) | **18** | 4 | Codex Telegram turn/completed 不达终态（P1 / Diamond lobster） |

### 📌 评论最多 PR（按关注度排序）

| PR | 标题 | 关注度信号 |
|---|---|---|
| [#155024](https://github.com/openclaw/openclaw/pull/155024) | fix: keep retained databases held when deletion history is lost | XL / maintainer / session-state 风险 / stacked on #154136 |
| [#153340](https://github.com/openclaw/openclaw/pull/153340) | feat(plugins): dynamic two-stage skill & tool pre-filtering | XL / 性能优化方向 |
| [#131772](https://github.com/openclaw/openclaw/pull/131772) | fix(agents): respect stop requests during final reply delivery | XL / test-first baseline |
| [#121195](https://github.com/openclaw/openclaw/pull/121195) | fix(agents): settle yielded requester completions exactly once | XL / Closes #121187 |
| [#149725](https://github.com/openclaw/openclaw/pull/149725) | feat(macos): shared Rust node runtime via sidecar | XL / macOS 架构演进 |

### 🎯 热点诉求分析

1. **资源泄漏与稳定性压倒性主导**：前 5 名高评论议题中，4 个与内存/进程/SQLite 资源管理直接相关
2. **Codex 集成是当前最大痛点源**：Top 5 中 3 个议题涉及 Codex OAuth/hooks/app-server
3. **多 Agent / 子代理编排语义**：#48003、#87744、#106704、#121187 等多条主线都在讨论 yield/sessions_send/requester-settle 协议缺陷
4. **维护者 review backlog 严重**：多个高价值 XL PR 处于 `⏳ waiting on author` 或 `waiting on maintainer`，标志双向沟通均存在延迟

---

## 5. Bug 与稳定性（按严重程度排序）

### 🔴 P0 / Release-blocker

| Issue | 标题 | 影响 | 是否有 Fix PR |
|---|---|---|---|
| [#143524](https://github.com/openclaw/openclaw/issues/143524) | Agent SQLite WAL 增长至 1.4–2.8 GB，阻塞 gateway 启动 | 启动崩溃、数据丢失风险（Windows） | ❌ `clawsweeper:no-new-fix-pr` |
| [#91009](https://github.com/openclaw/openclaw/issues/91009) | Codex PreToolUse hook relay spawn CPU-bound 子进程 | CPU 100%+、RPC stall | ❌ 无 |
| [#89278](https://github.com/openclaw/openclaw/issues/89278) | Codex OAuth refresh 成功但 cron/heartbeat 10s 超时 | Auth 实际不可用（P0 / Diamond lobster） | ❌ 无 |
| [#91931](https://github.com/openclaw/openclaw/issues/91931) | 预置 SOUL/IDENTITY/USER.md 导致 BOOTSTRAP.md 被删除 | 数据丢失 | ❌ 无 |

### 🟠 P1 严重

| Issue | 标题 | 备注 |
|---|---|---|
| [#91588](https://github.com/openclaw/openclaw/issues/91588) | Gateway RSS 350MB → 15.5GB OOM | OOM 杀手反复触发 |
| [#97616](https://github.com/openclaw/openclaw/issues/97616) | hook/tool 子进程泄漏致 zombie 累积 | 运行时性能下降 |
| [#137332](https://github.com/openclaw/openclaw/issues/137332) | requester-settle 批次永久重试 | Diamond lobster |
| [#104719](https://github.com/openclaw/openclaw/issues/104719) | memory-wiki supplement 忽略 tool deadline | Diamond lobster |
| [#39476](https://github.com/openclaw/openclaw/issues/39476) | A2A sessions_send 双向调用致消息重复 | Diamond lobster |
| [#84516](https://github.com/openclaw/openclaw/issues/84516) | Codex 长回复静默截断至 ~1000-1100 字符 | 模型未 abort 但内容丢失 |
| [#107244](https://github.com/openclaw/openclaw/issues/107244) | WhatsApp 群消息（LID groups）从不进入 inbound | DMs 工作，groups 完全失灵 |
| [#144809](https://github.com/openclaw/openclaw/issues/144809) | claude-cli 超长 turn 整段回复丢失 | 2026.9.4 latest/beta |
| [#109478](https://github.com/openclaw/openclaw/issues/109478) | 多行工具调用字符串参数被注入字面量 `\n` | Python SyntaxError、数据损坏 |
| [#108265](https://github.com/openclaw/openclaw/issues/108265) | Feishu 流式渲染极慢（v2026.7.1 回归） | Diamond lobster |
| [#94939](https://github.com/openclaw/openclaw/issues/94939) | 6.x 状态迁移致 channel conversation-store SQLite 0 bytes | Diamond lobster |
| [#101793](https://github.com/openclaw/openclaw/issues/101793) | Signal 频道工具调用前文本静默丢失 | Diamond lobster |
| [#96834](https://github.com/openclaw/openclaw/issues/96834) | WhatsApp 1:1 入站图片卡死主 lane ~3min | Diamond lobster |
| [#102534](https://github.com/openclaw/openclaw/issues/102534) | Cron 调度器在重超时后永久停摆 | 需手动重启 app |

### 🟡 P2 中等

| Issue | 标题 |
|---|---|
| [#43367](https://github.com/openclaw/openclaw/issues/43367) | 多 agent 并发 add/config 互相覆盖 |
| [#98435](https://github.com/openclaw/openclaw/issues/98435) | MCP loopback 传输 gateway 重启后不自动重连 |
| [#95610](https://github.com/openclaw/openclaw/issues/95610) | OpenAI prompt-cache prefix 抖动 |
| [#87756](https://github.com/openclaw/openclaw/issues/87756) | prompt 启动的 Lobster workflow 卡死 |
| [#90595](https://github.com/openclaw/openclaw/issues/90595) | Cron 失败通知在 hot reload 与重试时重复触发 |
| [#90378](https://github.com/openclaw/openclaw/issues/90378) | 5.28→6.1 cron 迁移静默丢配置 |
| [#105528](https://github.com/openclaw/openclaw/issues/105528) | Windows exec/read 工具静默返回空输出（v2026.6.x 回归） |
| [#108379](https://github.com/openclaw/openclaw/issues/108379) | MiMo 重复 assistant generation 触发 narrative 重复 |
| [#101656](https://github.com/openclaw/openclaw/issues/101656) | Telegram detached subagents 静默运行无 liveness |
| [#101929](https://github.com/openclaw/openclaw/issues/101929) | context-overflow-midturn-precheck 高估 2.3-2.6x |
| [#101445](https://github.com/openclaw/openclaw/issues/101445) | Ollama 嵌入式 agent 报 payloads=0 tools=0 |
| [#103804](https://github.com/openclaw/openclaw/issues/103804) | service-env 生成器双重引号破坏 AWS_REGION |
| [#97335](https://github.com/openclaw/openclaw/issues/97335) | Cron fallback 模型可正常但 cron 调用失败 |

**统计**：今日展示的 50 条 Issue 中，**已明确关联 fix PR 的不足 10 条**，且多数 PR 仍处于"待审"或"需补证明"状态。**稳定性问题存在大面积无修复真空**。

---

## 6. 功能请求与路线图信号

### 高潜力（已有相关 PR 或契合当前架构方向）

| Issue | 提案 | 关联 PR |
|---|---|---|
| [#28300](https://github.com/openclaw/openclaw/issues/28300) | 主题定制系统：6 套预设主题 + 自定义主题工作室 | —（👍 5，UI 方向） |
| [#96975](https://github.com/openclaw/openclaw/issues/96975) | 隔离 subagent 完成内容回传父 agent | 与 #153340（tool pre-filtering）方向一致 |
| [#88154](https://github.com/openclaw/openclaw/issues/88154) | Slack Modal 支持交互式工作流 | — |
| [#99583](https://github.com/openclaw/openclaw/issues/99583) | 智能会话自动标题（lazy、cheap 模型） | 代码库已有 `llm-slug-generator` 基础 |
| [#118885](https://github.com/openclaw/openclaw/issues/118885) | 启动期 SQLite 完整性检查去重 | 性能优化 |

### 架构级探索

- **[#149725](https://github.com/openclaw/openclaw/pull/149725)**：macOS 共享 Rust 节点运行时（sidecar 原型）— 标志着 macOS 应用的架构演进（设备身份、证书信任、原生工具的统一抽象层）
- **[#153340](https://github.com/openclaw/openclaw/pull/153340)**：动态两阶段 skill & tool pre-filtering（决策模型）— 直接对应 token 开销和延迟优化诉求

---

## 7. 用户反馈摘要

从高评论议题中提炼的真实痛点：

### 😣 主要不满

1. **"Gateway 跑两天就 OOM，每天都要重启"**（[#91588](https://github.com/openclaw/openclaw/issues/91588)）
   - 用户场景：生产 gateway + 多 channel + 长会话，OS OOM killer 触发 `launchd-handoff` 循环
   - 影响面：所有无人值守 / 7×24 部署
2. **"Codex 集成的稳定性赌博"**（[#91009](https://github.com/openclaw/openclaw/issues/91009)、[#87744](https://github.com/openclaw/openclaw/issues/87744)、[#89278](https://github.com/openclaw/openclaw/issues/89278)、[#84516](https://github.com/openclaw/openclaw/issues/84516)）
   - hook relay 风暴、Telegram 永不 complete、OAuth refresh 假阳性、长回复静默截断
   - 用户场景：Telegram/Feishu/Slack 用户 + Codex OAuth 后端
3. **"多 agent 编排基本不可用"**（[#43367](https://github.com/openclaw/openclaw/issues/43367)、[#137332](https://github.com/openclaw/openclaw/issues/137332)、[#106704](https://github.com/openclaw/openclaw/issues/106704)、[#121187](https://github.com/openclaw/openclaw/issues/121187)）
   - 并发配置覆盖、yield 协议歧义、requester-settle 死循环
   - 用户场景：CLI 批量编码任务 / 子代理调度
4. **"Windows 上跑 OpenClaw 是一场战斗"**（[#143524](https://github.com/openclaw/openclaw/issues/143524)、[#91144](https://github.com/openclaw/openclaw/issues/91144)、[#105528](https://github.com/openclaw/openclaw/issues/105528)）
   -

---

## 横向生态对比

# AI 智能体与个人 AI 助手开源生态 · 横向对比分析

**报告日期**：2026-09-22  
**覆盖项目**：10 个（OpenClaw 核心参照 + NanoBot、Hermes Agent、CoPaw、ZeroClaw、LobsterAI、NanoClaw、PicoClaw、Moltis、IronClaw，及 3 个 24h 无活跃项目）

---

## 1. 生态全景

整个生态已形成以 **OpenClaw 为事实标准**、四周分布"兼容/集成层""轻量化竞品""垂直应用封装""本地化栈探索者"的多层结构。**资源治理（OOM/WAL/上下文预算）成为普遍性痛点**，Codex 集成成为新的复杂度源；维护者 review 带宽是全行业的共同瓶颈，PR 合并率普遍低于 25%。一批使用 "Claw" 命名的衍生项目（PicoClaw / NanoClaw / IronClaw / NullClaw / ZeptoClaw / TinyClaw）多数仍处于早期或低活跃状态，与之相对，**CoPaw 和 ZeroClaw 已进入与 OpenClaw 同级别的第一梯队竞争位置**。LobsterAI 则代表"在 OpenClaw 之上构建应用层"的另一类形态。

---

## 2. 各项目活跃度对比

| 项目 | Issues (活跃/关闭) | PRs (活跃/关闭/合并) | Release | 合并率 | 健康度评估 |
|---|---|---|---|---|---|
| **OpenClaw** | 500 / 21 | 500 / 127 / 1 | ✅ v2026.7.35 | 25.4% | 功能演进强，review 严重积压 |
| **CoPaw** | 17 / 8 (47%) | 31 / 17 (55%) | ❌ | 55% | 高活跃 + 高响应，最健康 |
| **ZeroClaw** | 50 / 4 (8%) | 50 / 1 (2%) | ❌ | 2% | 议题爆发，评审滞后 |
| **Hermes Agent** | 50 / 9 (18%) | 50 / 2 (4%) | ✅ v0.21.4 | 4% | 多 Profile 安全修复聚焦 |
| **NanoBot** | 3 / 1 | 30 / 4 | ❌ | 13% | WebUI 单点高产，合并缓慢 |
| **LobsterAI** | 2 / 0 | 15 / 13 | ❌ | 87% | "质量修复日"，纯修不退 |
| **NanoClaw** | 1 / 0 | 6 / 1 | ❌ | 17% | 多 PR 30+ 天未 review |
| **PicoClaw** | 3 / 1 | 3 / 1 | ❌ | 33% | 维护者响应慢 |
| **Moltis** | 2 / 1 | 2 / 0 | ❌ | 0% | 低量但内容质量高 |
| **IronClaw** | 1 / 0 | 1 / 1 | ❌（仅 rc bump） | 100% | 仅运维动作 |
| **NullClaw / TinyClaw / ZeptoClaw** | 0 | 0 | ❌ | — | 24h 无活动 |

> **关键观察**：LobsterAI 与 CoPaw 的合并率远超同行，反映出"小而专注的修复批次" + "明确维护者分工"是当前最有效的运营模式。

---

## 3. OpenClaw 在生态中的定位

### 优势
- **规模绝对领先**：500/500 的日吞吐，是 CoPaw（17/31）的 15–20 倍、ZeroClaw 的同量级但分支更广
- **生态中心地位**：LobsterAI 直接绑定 OpenClaw gateway（PR #2737、#2734、#2735 全部围绕 OpenClaw 启动路径），是事实上的下游消费方
- **覆盖面最广**：Web UI / macOS / iOS / Windows / 6 个 IM 渠道 / Codex 集成 / Subagent 编排

### 技术路线差异
| 维度 | OpenClaw | CoPaw | ZeroClaw | Moltis |
|---|---|---|---|---|
| 语言栈 | TypeScript 主导 | TypeScript + AgentScope | **Rust** 主导 | Rust/混合 |
| 设计哲学 | 通用全栈 Gateway | Provider 协议鲁棒性优先 | 沙箱 + 安全债治理 | 本地化能力栈 |
| 沙箱 | 进程级隔离 | 进程级 | **macOS Seatbelt** + Git classifier | — |
| 部署形态 | Gateway + 多端 | Desktop + Gateway | Daemon + Desktop | 本地优先 |

### 社区规模对比
OpenClaw 的 PR 评论热度（如 #155024 XL、#153340 XL、#149725 XL）显著高于其他项目，单 PR 可吸引多个 maintainer 跨模块关注。**但其背压也是生态内最重的**：Issue 关闭率仅 4.2%，大量 P0/P1 议题带 `clawsweeper:no-new-fix-pr` 与 `needs-maintainer-review` 标签长期滞留。

---

## 4. 共同关注的技术方向

### 4.1 多 Provider 协议层（涉及最多项目）
- **OpenClaw**：Codex 集成（#91009 / #87744 / #89278 / #84516）已成最大痛点源
- **CoPaw**：Responses API strict 模式、OpenCode 强制 header、codex 空响应、DeepSeek PDF 400
- **ZeroClaw**：工具结果中 data-URI 标记、视觉能力 marker
- **PicoClaw**：用户强烈诉求 OpenAI 兼容 provider（#3366）
- **Moltis**：VoxCPM 本地 TTS + vLLM-Omni 兼容
- **NanoBot**：新增 Opper provider、JEV Client 基础设施

> **共识**：跨 provider 的"协议鲁棒性"已成为通用 agent 框架的**核心工程债**。

### 4.2 资源治理与上下文压缩
- **OpenClaw**：Agent SQLite WAL 失控（#143524）、Gateway OOM 15.5GB（#91588）
- **NanoBot**：自动上下文压缩无 token 预算保护 → 会话死锁（#5849）
- **CoPaw**：Context compaction 超 provider 预算（#7628）
- **ZeroClaw**：交互会话硬截断 32k（#10068）、引导文件静默截断 6000 字符（#10523）
- **Hermes Agent**：Curator ledger 无限增长（#118674 → #118690）

### 4.3 IM 渠道适配一致性
- **OpenClaw**：WhatsApp LID groups 完全失灵（#107244）、Signal 静默丢文本（#101793）
- **NanoClaw**：Signal DM 路由修复（#3837 整合版替代 #2689）
- **LobsterAI**：Feishu 定时任务派发、Weixin allowFrom 残留
- **ZeroClaw**：WhatsApp 入站图片变 `[Image]`（#10975）、Mention 双向解析失败（#10976）
- **Hermes Agent**：Discord watchdog 永久僵死（#118487）

### 4.4 Windows / Desktop 端稳定性
- **OpenClaw**：SQLite WAL 在 Windows 阻塞启动（#143524）
- **CoPaw**：Windows 子 Console Ctrl 终止宿主（#7908）、Console 启动竞态（#7841）
- **Hermes Agent**：`fcntl.F_RDLCK` 缺失（#118026，已修复）、Desktop 关闭中断（#118628）
- **LobsterAI**：nsp-clawguard ESM 下 Windows 路径崩溃（#2731）

### 4.5 多 Profile / 多租户凭据隔离
- **Hermes Agent**：命名 Profile 静默继承 root 凭据（#111724，已修复）、Desktop Models 跨 Profile 写入（#118431）
- **OpenClaw**：角色模型权限（#154839 security-sensitive）
- **ZeroClaw**：快照中代理凭据脱敏（#11026 待合并）

### 4.6 RFC 与治理透明度
- **ZeroClaw**：维护者决策队列（#8692，2.5 个月未维护）
- **OpenClaw**：XL PR 长期 `⏳ waiting on author/maintainer`
- **Hermes Agent**：PR 重启需 `project` 与 `category` 强制（#118553）

---

## 5. 差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 关键技术架构特征 |
|---|---|---|---|
| **OpenClaw** | 全功能通用 gateway | 7×24 生产部署 / 多渠道用户 | TS 主栈 + 多平台原生壳 + 6 渠道适配 + Codex hook |
| **CoPaw** | Provider 一致性 + 桌面体验 | 桌面深度用户 / 多 provider 切换者 | AgentScope 2.0.8 + 三路并行 E2E + DoomLoopGate |
| **ZeroClaw** | 安全沙箱 + 治理驱动 | 安全敏感企业 / Rust 偏好开发者 | Rust 主导 + macOS Seatbelt + 强 RFC 流程 |
| **Hermes Agent** | 多 Profile 凭据边界 | 多账户隔离需求 / 托管部署 | Desktop host-backend + curator ledger + TTS 网关 |
| **LobsterAI** | OpenClaw 应用层封装 | 不想自建 gateway 的终端用户 | OpenClaw 上层 + 网关启动稳定化 + macOS/Windows 路径适配 |
| **NanoBot** | 长会话 + WebUI 体验 | 重度 WebUI 用户 / 长上下文场景 | ManagedProcessRuntime + summarize_transcript + OpenRouter JEV |
| **NanoClaw** | 渠道适配 + 安装鲁棒性 | 自托管 IM 集成需求 | 多渠道抽象层 + 跨平台安装脚本 |
| **PicoClaw** | 极简 IM 集成 | 单一渠道轻量部署 | 小型架构 + IRC/QQ |
| **Moltis** | 本地化 AI 能力栈 | 本地优先 / 隐私敏感用户 | vLLM-Omni + VoxCPM 本地 TTS |
| **IronClaw** | 评测驱动 / 模型质量归因 | 模型评测 / 研究 | 自动 failure taxonomy + officeqa 套件 |

---

## 6. 社区热度与成熟度分层

### 🚀 快速迭代阶段（高活跃 + 持续产出新功能）
- **CoPaw**：净合并 +10 PR（含 Provider 重构、DoomLoop 双修复、测试覆盖 +3.28pp、E2E 并行化）
- **OpenClaw**：v2026.7.35 发布 + 多 PR 提交，但维护吞吐量成为瓶颈
- **LobsterAI**：13/15 PR 合并，单日修复面广
- **NanoBot**：30 PR 提交，WebUI 升级密集

### 🔧 质量巩固阶段（活跃度中等、聚焦稳定性）
- **ZeroClaw**：纯安全/沙箱/治理议题，无功能合并
- **Hermes Agent**：v0.21.4 patch + 配置/凭据/TTS 多线修复
- **NanoClaw**：渠道适配修复推进但合并缓慢
- **Moltis**：低量但 PR 内容完整（issue → 实现 PR 一体化）

### 🌱 早期 / 维护型阶段
- **PicoClaw**：Web UI 卡顿 60+ 天未解
- **IronClaw**：仅 release plumbing 动作

### 💤 休眠 / 几乎无活动
- **NullClaw / TinyClaw / ZeptoClaw**：24h 零动态

---

## 7. 值得关注的趋势信号

### 7.1 资源治理已上升为行业级第一工程债
从 OpenClaw（OOM 15.5GB）到 NanoBot（死锁）到 CoPaw（context compaction 超预算）到 ZeroClaw（32k 硬截断），**长会话资源管理不再是单点问题，而是普遍性挑战**。对开发者：context compaction、token 预算、WAL checkpoint、curator ledger 都需要"可见化"——沉默的失败比明确的失败更损伤信任。

### 7.2 Codex 集成成为新的复杂度高地
OpenClaw Top 5 高评论议题中 3 个涉及 Codex OAuth/hooks/app-server，且无一有 fix PR。CoPaw 也

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目日报

**日期：2026-09-22**
**项目：HKUDS/nanobot**

---

## 1. 今日速览

NanoBot 今日呈现出**典型的活跃开发期状态**：过去 24 小时共产生 30 个 PR 更新（其中 26 个待合并）与 3 个 Issue 动态，但无新版本发布。值得关注的是，**几乎所有 PR 都集中在 WebUI 功能增强（贡献者 Re-bin 单人贡献约 8 个 PR）与底层 bug 修复两个方向**，且关键 bug 均已"开箱即用"配套 fix PR（#5849 → #5857、#5843 → #5846），说明项目响应链路高效。整体活跃度处于中高水平，但合并节奏稍显落后，积压 26 个待审 PR 需维护者尽快处理。

---

## 2. 版本发布

**本节无内容**。过去 24 小时未发布任何新版本（Release），无更新说明、破坏性变更或迁移事项。

---

## 3. 项目进展

今日**已合并/关闭的 PR 共 4 个**，但根据数据展示，仅 Issues 端有 1 个关闭（#5770），PR 端数据未明确给出已合并的具体列表。以下为今日在 Issue 侧确认闭合的事项：

- **#5770 已关闭** [WebUI 移动端侧边栏搜索按钮焦点 Bug](https://github.com/HKUDS/nanobot/issues/5770)：作者 morandot 报告在手机端打开侧边栏会立即出现 `Search ⌘K` 的白色胶囊按钮（无 hover 状态下被误读为默认搜索框弹出），现已修复。

**功能侧的重要推进（待审但内容成熟）：**

- **#5845** [添加 Opper 为内置 provider](https://github.com/HKUDS/nanobot/pull/5845)：扩展网关能力，与现有 Eden AI / OrcaRouter 模式一致。
- **#5825** [新增可复用 OpenRouter JEV Client](https://github.com/HKUDS/nanobot/pull/5825)：为未来 heartbeat、shell policy、provider 选择等功能奠定基础设施。
- **#5857** [自动上下文压缩加 token 预算保护](https://github.com/HKUDS/nanobot/pull/5857)：直接修复今日提出的 #5849 死锁问题。
- **#5846** [追踪 BUILD 阶段子阶段延迟](https://github.com/HKUDS/nanobot/pull/5846)：配套修复 #5843 的可观测性增强。

**整体评估：** 项目在 WebUI 体验、底层稳定性、provider 生态三方面同步推进，是一次"面 + 点"都比较饱满的开发日。但合并率较低（4/30 ≈ 13%），意味着大量工作仍堆积在 PR 队列中。

---

## 4. 社区热点

按 PR 体量与话题密度计算，**Re-bin 是今日最活跃贡献者**，围绕 WebUI 单人贡献约 8 个 PR，构成今日最大话题簇：

| PR | 主题 | 链接 |
|----|------|------|
| #5856 | WebUI 检视与停止会话命令 | [查看](https://github.com/HKUDS/nanobot/pull/5856) |
| #5855 | 父作用域子任务输出展示 | [查看](https://github.com/HKUDS/nanobot/pull/5855) |
| #5854 | 作用域 Prompt 命令与管理 UI | [查看](https://github.com/HKUDS/nanobot/pull/5854) |
| #5853 | 类型化图片工件投递 | [查看](https://github.com/HKUDS/nanobot/pull/5853) |
| #5852 | 链接操作与隔离的网页预览 | [查看](https://github.com/HKUDS/nanobot/pull/5852) |
| #5851 | 用量范围/活跃日历/模型细分 | [查看](https://github.com/HKUDS/nanobot/pull/5851) |
| #5850 | 统一文件引用操作 | [查看](https://github.com/HKUDS/nanobot/pull/5850) |
| #5848 | 安全渲染 Mermaid 图表 | [查看](https://github.com/HKUDS/nanobot/pull/5848) |
| #5847 | 会话级文件预览恢复 | [查看](https://github.com/HKUDS/nanobot/pull/5847) |

**诉求分析：**
1. **WebUI 从"能用"走向"好用"**——Re-bin 一系列 PR 体现了对会话内子任务可观测性、外部内容（图片/链接/Mermaid）安全渲染、用量分析等"日常使用体感"的密集投入。
2. **基础设施与扩展性并重**——#5825（JEV Client）、#5845（Opper provider）说明贡献者同时在为长期可扩展性铺路。

---

## 5. Bug 与稳定性

按严重程度排序：

### 🔴 P0 — 系统可用性 Bug（已有 fix PR）

| 严重度 | Issue | 描述 | Fix PR |
|------|-------|------|--------|
| 🔴 高 | [#5849](https://github.com/HKUDS/nanobot/issues/5849) | 自动上下文压缩无 token 预算保护，会话历史超过输入预算后**永远无法恢复**（死锁） | [#5857](https://github.com/HKUDS/nanobot/pull/5857) ✅ |
| 🟠 中-高 | [#5843](https://github.com/HKUDS/nanobot/issues/5843) | 长会话在 BUILD 阶段等待 10s 至数十秒才发起 LLM 调用，原因不明 | [#5846](https://github.com/HKUDS/nanobot/pull/5846) ✅ |

### 🟢 已修复

- **#5770** [WebUI 移动端侧边栏焦点 Bug](https://github.com/HKUDS/nanobot/issues/5770) ✅ 已关闭

### 其他稳定相关 PR（待合并）

- **#4819** [合并锁强引用替换](https://github.com/HKUDS/nanobot/pull/4819)：将 `WeakValueDictionary` 改为普通 `dict`，防止 GC 破坏锁身份稳定性（**已挂起约 2.5 个月**）。
- **#5795 / #5796** [`edit_file` 缩进与空白保留](https://github.com/HKUDS/nanobot/pull/5795)：修复 fallback 编辑和内联替换中的空白丢失问题。
- **#4820** [拒绝非字符串 web fetch URL](https://github.com/HKUDS/nanobot/pull/4820)：类型校验硬化（**已挂起约 2.5 个月**）。

---

## 6. 功能请求与路线图信号

通过今日 PR 标题与摘要提炼出的**近期路线图信号**：

1. **WebUI 全面升级（高确定性）**：会话内子任务可观测、命令面板、图片/链接/Mermaid 渲染、用量分析——已通过 PR 形式落地，等待合并。
2. **Provider 生态扩张（明确）**：Opper (#5845) 与可复用 JEV Client (#5825) 表明项目正朝"网关型多 provider 平台"方向发展。
3. **可观测性增强（明确）**：#5846 引入结构化 DEBUG 时序事件，标志项目开始系统化构建诊断能力。
4. **内存与压缩子系统重构（明确）**：#5857 对自动上下文压缩加预算保护，意味着团队已经意识到 context compaction 是稳定性短板。
5. **Telegram 渠道打磨**：#5803（小幅改进）显示对 IM 渠道仍在持续优化，但优先级低于 WebUI。

**潜在可纳入下一版本：** 任意 PR 合并窗口开放，#5845、#5825、#5846、#5857 属于"基础设施级"修复，最有可能进入下个版本基线。

---

## 7. 用户反馈摘要

由于 Issues 评论数据为 0，今日**无显式用户评论反馈**。但从 Issue 标题与摘要可提炼出**用户痛点画像**：

1. **#5849（Krislu1221）** — 长期会话崩溃后无法自愈，反映出对 **AI Agent 长会话鲁棒性**的真实担忧，属于"AI 助手产品"的高级使用场景。
2. **#5843（Lucky314159）** — 长会话在 BUILD 阶段出现 10s+ 等待却无明显提示，反映出用户对**可观测性与响应预期管理**的需求。
3. **#5770（morandot）** — 移动端 UI 焦点逻辑缺陷，反映**触屏设备无 hover 状态**下的交互陷阱，属于移动端可用性问题。

**使用场景侧写：** 当前活跃用户群以"长会话开发者 + WebUI 重度用户"为主，技术深度较高，能直接定位到具体代码路径（`summarize_transcript`、`ManagedProcessRuntime` 等）。

---

## 8. 待处理积压

按挂起时间排序，**以下 PR/Issue 长期未获响应，建议维护者优先 review**：

| 编号 | 类型 | 标题 | 创建时间 | 挂起时长 | 链接 |
|-----|------|------|---------|---------|------|
| #5412 | PR | fix(gateway): flush background child output to logs | 2026-08-17 | ~36 天 | [#5412](https://github.com/HKUDS/nanobot/pull/5412) |
| #4819 | PR | fix(memory): replace WeakValueDictionary with plain dict | 2026-07-06 | ~78 天 | [#4819](https://github.com/HKUDS/nanobot/pull/4819) |
| #4820 | PR | fix(runtime): reject non-string web fetch URLs | 2026-07-06 | ~78 天 | [#4820](https://github.com/HKUDS/nanobot/pull/4820) |

**风险提示：**
- 26 个 PR 处于待合并状态（合并率仅 13%），存在明显的 review 瓶颈。
- #4819 与 #4820 同属安全/稳定性硬化类修复（GC 不稳定、URL 类型校验），挂起 78 天应优先处理。
- #5412 直接影响后台进程日志可用性，对调试与运维影响较大。

---

### 📊 今日健康度总评

| 维度 | 评分 | 说明 |
|------|------|------|
| Issue 响应速度 | ⭐⭐⭐⭐ | 关键 bug 24 小时内配对 fix PR |
| PR 吞吐量 | ⭐⭐⭐⭐ | 30 个 PR，体量充足 |
| 合并率 | ⭐⭐ | 13%，review 瓶颈明显 |
| 社区参与度 | ⭐⭐⭐ | 单日活跃作者约 8 人，但绝大多数工作量集中在 1-2 人 |
| 版本节奏 | ⭐⭐ | 当日无版本发布 |
| 代码质量信号 | ⭐⭐⭐⭐ | PR 摘要结构化（Summary/Root Cause/Changes），体现工程规范 |

**综合评估：** 项目处于**高产出但中度流通**的开发期，PR 输入旺盛、合并缓慢是当前最大瓶颈，建议维护者投入 review 资源以维持贡献者积极性。

---

*报告基于 GitHub 公开数据自动生成 · 项目地址：[github.com/HKUDS/nanobot](https://github.com/HKUDS/nanobot)*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目日报
**报告日期：2026-09-22**

---

## 1. 今日速览

Hermes Agent 项目今日维持**高强度迭代节奏**：24 小时内 Issues 活跃 50 条（41 新开/活跃，9 关闭），PR 更新 50 条（47 待合并，2 关闭），并发布 v0.21.4 补丁版本（聚合自 v0.21.3 以来约 1,800 个 PR）。修复主线集中在 **配置/加载兼容性**（yaml.safe_load、fast_safe_load）、**桌面端与多 Profile 数据隔离**、**认证/凭据回退** 与 **流式/TTS 网关** 四个方向；社区热点则集中在 **Profile 凭据继承漏洞**（已关闭）、**Windows fcntl 启动崩溃**（已关闭）与 **Discord 网关僵尸化**（P1，仍 OPEN）。整体健康度良好，但存在若干长期未关闭的 P2 兼容性问题需要关注。

---

## 2. 版本发布

### v2026.9.21 — Hermes Agent v0.21.4

**发布性质**：补丁版本（Patch release）  
**核心信息**：将自 v0.21.3 以来合并的约 **1,800 个 PR** 打包为稳定的标签版本，供下游消费者（Docker 镜像、Hermes Cloud、托管部署）使用。

**注意事项**：
- 该版本的"完整策展变更日志"被推迟（"Full curated notes for this window are deferred"），意味着本次标签主要面向发布管道与镜像拉取用户，并非功能大版本。
- 升级时建议与现有 v0.21.3 部署对比 `pin`/`lock` 文件；下游镜像 tag 已同步更新。
- ⚠️ 已知 v0.21.3 中存在的两个回归（已在今日被关闭的 Issue 中修复）值得关注：
  - **#118431** Desktop Settings→Models 改写作用于所有 Profile（v0.21.3 host-backend collapse 引入）
  - **#118432** Desktop Settings→Models 忽略所选 "Applies to" Profile
  
  若仍在 v0.21.3 上，建议同步应用上述修复。

🔗 [Release Tag](https://github.com/NousResearch/hermes-agent) · [Issue #62810](https://github.com/NousResearch/hermes-agent/issues/62810)

---

## 3. 项目进展

今日记录到 **2 个 PR 已关闭/合并**，均针对关键回归或合同违规：

### ✅ PR #118688（CLOSED）— fix: profiles.list 不再违反其 wire 契约
🔗 https://github.com/NousResearch/hermes-agent/pull/118688  
- 修复 `ProfileRow` 模型声明 `previous_names` 重命名历史，但处理器不返回该字段的契约违规问题。
- 修复关闭 Issue [#117696](https://github.com/NousResearch/hermes-agent/issues/117696)，并 salvages 早期失败的 PR [#117700](https://github.com/NousResearch/hermes-agent/pull/117700)（由 @Wenfengcheng 提交，已 cherry-pick 保留 authorship）。
- **意义**：每次 gateway/Desktop 后端启动都会产生 1 条 warning，在 `HERMES_TEST_ISOLATION=1` 下会抛 `ContractViolation`——本次修复消除了这一长期噪音源。

### ✅ PR #118553（CLOSED）— docs: Linear issues 要求 project 与 category
🔗 https://github.com/NousResearch/hermes-agent/pull/118553  
- 项目管理流程层面的小幅规范收紧。

### 重点项目推进（其他高优先级 OPEN PR）：

| PR | 作用 | 修复 Issue |
|---|---|---|
| [#118719](https://github.com/NousResearch/hermes-agent/pull/118719) | **fix(desktop)**: 当权威转写缩短时，将保留的失败回合重新置于正确位置而非绘制到末尾 | 修 #118002（消息排序回归） |
| [#118690](https://github.com/NousResearch/hermes-agent/pull/118690) | **fix(curator)**: 阻止 Profile 累积无限增长的审计账本（5 MiB → 4 MiB 窗口） | 修 #118674 |
| [#118718](https://github.com/NousResearch/hermes-agent/pull/118718) | **fix(delegate)**: 退还一次性 spawn 预算并在 build 失败时关闭部分子任务 | code review 发现，无关联 issue |
| [#118710](https://github.com/NousResearch/hermes-agent/pull/118710) | **fix(process)**: 恢复 checkpoint 化进程时重新挂载心跳 | 终端后台进程 |
| [#118711](https://github.com/NousResearch/hermes-agent/pull/118711) | **fix(gateway)**: 与外部 standalone owner 并存时使用 `--replace` | 多 Profile gateway 启动 |
| [#118713](https://github.com/NousResearch/hermes-agent/pull/118713) | **perf(config)**: 通过 fast_safe_load 路由配置加载（每次减少约 48.8 ms） | 修 #118712 |
| [#118715](https://github.com/NousResearch/hermes-agent/pull/118715) | **oauth**: 损坏的过期字段 fail-closed 不再崩溃凭据读取 | 修 #118714 |
| [#118716](https://github.com/NousResearch/hermes-agent/pull/118716) | **fix(gateway)**: 为 `/model` 选择器提供每平台模型短名单（Matrix） | 修 #89809 |
| [#118708](https://github.com/NousResearch/hermes-agent/pull/118708) | **fix**: 不完整的工具调用不再无限循环 | 关键稳定性 |
| [#118704](https://github.com/NousResearch/hermes-agent/pull/118704) | **fix(gateway)**: 在多路复用下保留启动环境凭据 | 与 #111724 相关 |
| [#118506](https://github.com/NousResearch/hermes-agent/pull/118506) | **fix(kanban)**: 限制 gc 保留天数，防止 `-N/0` 大规模删除（P1） | 修 #118505 |

**项目整体评估**：今日提交的修复 PR 覆盖了 **配置加载性能、Profile 隔离、凭据安全边界、TTS 流式、跨平台兼容性** 等多个高价值方向，已关闭的 Issue 多达 9 个。整体向前迈进了**显著一步**，尤其在"宿主环境注入凭据的保留"（#118704）和 "OAuth 损坏字段 fail-closed"（#118715）两点上夯实了安全边界。

---

## 4. 社区热点

按 24 小时内评论/关注度排名（节选前 5）：

### 🥇 Issue #62810 — CLI 退出状态兼容性（8 评论）
🔗 https://github.com/NousResearch/hermes-agent/issues/62810  
- 创建于 2026-07-11，最长 1.5 个月仍未关闭。  
- 已注册的 CLI handler 返回 `True` 会以状态 `1` 退出，因为分发器把布尔值当作整数处理。已有兼容性契约 PR [#62826](https://github.com/NousResearch/hermes-agent/pull/62826) 在跟踪，但根因修复尚未落地。  
- **诉求**：用户期望布尔成功/失败语义与契约保持一致，避免"看起来成功却退出非零"的 CI/脚本误判。

### 🥈 Issue #117869 — 403 with `server_error` 应被重试而非视为凭据拒绝（6 评论）
🔗 https://github.com/NousResearch/hermes-agent/issues/117869  
- OpenCode Go（OpenAI 兼容中转）将瞬时上游故障包装为 `HTTP 403 {"error": {"type": "server_error"}}`，当前逻辑将其视为凭据拒绝。  
- **诉求**：细化错误分类，让 `_retryable_status` 与 `_auth_refusal` 解耦——直接影响生产稳定性与计费/账单准确性。

### 🥉 Issue #118002 — Desktop 桌面端旧消息出现在最新位（4 评论）
🔗 https://github.com/NousResearch/hermes-agent/issues/118002  
- v0.21.3（commit `338b31226d`）虚拟化时间线排序回归，长会话中可见"消息跳到底部"。  
- 已有修复 PR [#118719](https://github.com/NousResearch/hermes-agent/pull/118719)，状态 OPEN。

### Issue #118487 — Discord liveness watchdog 首次 socket_closed 后永久僵死（4 评论，P1）
🔗 https://github.com/NousResearch/hermes-agent/issues/118487  
- WebSocket 探针触发 1 次 strike（`1/2`）后无任何后续动作：不再 strike、不触发 `forcing reconnect`、无 fatal 日志，进程健康但 socket 已死，必须手动重启。  
- **诉求**：补齐 watchdog 状态机与 reconciler 计时器。

### Issue #95916 — RFC：可复用能力在 Profile 间分配，无需复制配置（3 评论）
🔗 https://github.com/NousResearch/hermes-agent/issues/95916  
- 用户希望为"技能集、MCP 服务器、provider 凭据"等可复用能力建立**第一类语义**，在多个现有 Profile 间共享而不复制。  
- 已标注 `needs-decision`、P3，是 Roadmap 讨论的活跃 RFC。

---

## 5. Bug 与稳定性

按严重程度排列今日新增/活跃问题：

### 🔴 P0/P1（高严重度）
| Issue | 描述 | 状态 | 修复 PR |
|---|---|---|---|
| [#118505 / #118506](https://github.com/NousResearch/hermes-agent/issues/118505) | **kanban gc**: `--event-retention-days -1` 删光所有终止 task 的 `task_events` 行；`0` 几乎等同；聊天会话内 `/kanban gc` 同样危险 | OPEN | [#118506](https://github.com/NousResearch/hermes-agent/pull/118506) OPEN |
| [#118487](https://github.com/NousResearch/hermes-agent/issues/118487) | Discord watchdog 僵死（见上） | OPEN | ❌ 暂无 |

### 🟠 P2（重要）
| Issue | 主题 | 状态 | 修复 PR |
|---|---|---|---|
| [#62810](https://github.com/NousResearch/hermes-agent/issues/62810) | CLI exit-status boolean handler | OPEN（2.5 个月） | 待 [#62826](https://github.com/NousResearch/hermes-agent/pull/62826) |
| [#117869](https://github.com/NousResearch/hermes-agent/issues/117869) | 403 server_error 重试 | OPEN | ❌ 暂无 |
| [#118002](https://github.com/NousResearch/hermes-agent/issues/118002) | Desktop 消息排序回归 | OPEN | [#118719](https://github.com/NousResearch/hermes-agent/pull/118719) |
| [#118628](https://github.com/NousResearch/hermes-agent/issues/118628) | Desktop 关闭 session tile 强制中断 in-flight turn，中断回复未渲染 | OPEN | ❌ 暂无 |
| [#118643](https://github.com/NousResearch/hermes-agent/issues/118643) | Desktop "Update Hermes" + `--no-gateway-restart` 让外部 supervisor gateway 卡在旧 `sys.modules` | OPEN | ❌ 暂无 |
| [#118714](https://github.com/NousResearch/hermes-agent/issues/118714) | OAuth 损坏 `expires_at/expires_in` 崩溃凭据读取 | OPEN | [#118715](https://github.com/NousResearch/hermes-agent/pull/118715) |
| [#118690](https://github.com/NousResearch/hermes-agent/pull/118690) | Delegation spawn 预算永久消耗 | OPEN | [#118718](https://github.com/NousResearch/hermes-agent/pull/118718) |
| [#107559](https://github.com/NousResearch/hermes-agent/issues/107559) | Cron 手动 run 后僵内存 firing lock 阻塞再触发 | OPEN | ❌ 暂无 |
| [#61703](https://github.com/NousResearch/hermes-agent/issues/61703) | 实时 chrome-debug Profile 上完整备份卡住/不完整 | OPEN（2.5 个月） | ❌ 暂无 |
| [#118026](https://github.com/NousResearch/hermes-agent/issues/118026) | Windows `fcntl.F_RDLCK` 缺失导致后端启动失败 | **CLOSED** | 已修复 |
| [#111724](https://github.com/NousResearch/hermes-agent/issues/111724) | 命名 Profile 无凭据时静默继承 root 凭据并回写刷新 token | **CLOSED** | 已修复 |
| [#118432](https://github.com/NousResearch/hermes-agent/issues/118432) | Desktop Settings→Models 忽略 "Applies to" Profile | **CLOSED** | 已修复 |
| [#118431](https://github.com/NousResearch/hermes-agent/issues/118431) | Desktop 改默认 model 作用于所有 Profile（v0.21.3 回归） | **CLOSED** | 已修复 |

### 🟡 P3（次要/兼容性）
- [#118674](https://github.com/NousResearch/hermes-agent/issues/118674) Curator ledger 无限增长（5 周 5 MiB）→ PR [#118690](https://github.com/NousResearch/hermes-agent/pull/118690) ✅  
- [#118673](https://github.com/NousResearch/hermes-agent/issues/118673) zai GLM-5.x 直连：未闭合 `<think>` 泄漏到记忆内容（延续 #96735）  
- [#118672](https://github.com/NousResearch/hermes-agent/issues/118672) `mnemosyne_invalidate` 跨 session 静默 no-op  
- [#118658](https://github.com/NousResearch/hermes-agent/issues/118658) `streaming_tts_consumer`: 主分支 2 测试失败 + pending task teardown warning  
- [#118717](https://github.com/NousResearch/hermes-agent/issues/118717) `gateway_session_key` 未传给插件工具 hook  
- [#118712](https://github.com/NousResearch/hermes-agent/issues/118712) 配置加载未迁移至 `fast_safe_load`，每次多 48.8 ms → PR [#118713](https://github.com/NousResearch/hermes-agent/pull/118713) ✅  
- [#118699](https://github.com/NousResearch/hermes-agent/issues/118699) `skill_manage` 批量回滚将 symlink 目录转为真实目录  
- [#118702](https://github.com/NousResearch/hermes-agent/issues/118702) Feishu 多工具进度重复/拆分围栏代码块（gateway 进度/流式重构回归）  

**稳定性总评**：今日关闭 9 条 Issue 中包含 **2 个明确的安全/数据风险类**

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报
**日期：2026-09-22**

---

## 1. 今日速览

PicoClaw 今日整体活跃度处于**中等偏低**水平：过去 24 小时共有 3 条 Issue 更新与 3 条 PR 更新，但无新版本 tag 推出。值得关注的是，2 条 Issue 仍处于活跃状态但其中一条 #3281 自 7 月份开起后已逾两月仍未解决，社区对其较高的关注度（13 条评论、2 个 👍）反映出 Web UI 长对话输入卡顿问题对实际使用体验影响显著。PR 端，今日有 1 条提交到错误仓库的"误投"PR #3384 被快速关闭（这本身也反映了 AI agent 在开源协作流程上仍需规范化），其余两条实质性 PR 均处于待评审状态。

---

## 2. 版本发布

无新版本发布。

---

## 3. 项目进展

今日合入/关闭的实质性 PR 仅 1 条：

| PR | 标题 | 状态 | 影响 |
|----|------|------|------|
| [#3384](https://github.com/sipeed/picoclaw/pull/3384) | Misplaced PR, please ignore. | 已关闭 | 无功能变更，仅作为 AI agent 误投清理 |

其余两条实质性 PR 进展缓慢但仍在推进：
- **PR #3378**（[OAuth RefreshAccessToken 修复](https://github.com/sipeed/picoclaw/pull/3378)）自 9 月 12 日提交后 10 天仍未获得评审，可能阻塞涉及第三方 OAuth 集成的用户。
- **PR #3354**（[IRCv3 multiline 支持](https://github.com/sipeed/picoclaw/pull/3354)）提交已超过 3 周，处于待评审状态。

整体而言，**项目今日推进速度有限**，维护者响应度有待加强。

---

## 4. 社区热点

按互动量排序的热点条目：

1. **[Issue #3281](https://github.com/sipeed/picoclaw/issues/3281)** — Web UI chat input is very laggy when history has a little bit long
   - 评论数：13 👍：2 | 已开 60+ 天
   - **诉求核心**：Web UI 在对话历史较长时输入卡顿。13 条评论表明不少用户复现并讨论，可能涉及前端渲染性能（如虚拟滚动、长列表优化）问题。

2. **[Issue #3366](https://github.com/sipeed/picoclaw/issues/3366)** — Add support for OpenAI compatible providers
   - 评论数：4
   - **诉求核心**：希望支持自定义 OpenAI 兼容 provider，从而接入自托管路由（如 9Router）。该需求反映了用户希望 PicoClaw 不被单一 API 提供商锁定的诉求。

3. **[Issue #3365](https://github.com/sipeed/picoclaw/issues/3365)** — QQ channel 401 错误（已关闭）
   - 评论数：3 👍：1
   - **诉求核心**：QQ channel 因 botgo v0.2.1 与 resty >= v2.17 兼容性问题触发 401。被标记为 [stale] 后关闭，说明社区倾向于通过外部依赖升级解决。

**热点分析**：用户当前关注的两大方向是 **前端可用性**（Web UI 体验优化）与 **后端可扩展性**（多 provider 支持）。

---

## 5. Bug 与稳定性

| 严重程度 | Issue | 描述 | 状态 | 是否有 fix PR |
|---------|-------|------|------|-------------|
| 中 | [#3281](https://github.com/sipeed/picoclaw/issues/3281) | Web UI 长历史输入卡顿，影响日常可用性 | OPEN（60+ 天未解决） | ❌ 无关联 PR |
| 中 | [#3365](https://github.com/sipeed/picoclaw/issues/3365) | QQ channel 401 鉴权错误 | CLOSED（stale，依赖上游修复） | ❌ 等待 botgo 上游修复 |

**稳定性观察**：今日没有新报告的 P0/P1 级崩溃或回归，但 #3281 长期未修复，**对终端用户实际体验的影响在持续累积**，建议维护者重点关注。

---

## 6. 功能请求与路线图信号

| 请求 | 来源 | 评估 | 关联 PR |
|------|------|------|---------|
| OpenAI 兼容 provider 支持 | [#3366](https://github.com/sipeed/picoclaw/issues/3366) | 高可行性，社区有真实用例（自托管路由器 9Router）。若 PR #3366 描述的方案（复用 OpenAI provider 代码）落地，开发成本低，**有望纳入下一版本**。 | 无 |
| OAuth RefreshAccessToken scope 修复 | PR [#3378](https://github.com/sipeed/picoclaw/pull/3378) | 属于稳定性改进，优先级中等。 | #3378 待合并 |
| IRCv3 multiline 接收支持 | PR [#3354](https://github.com/sipeed/picoclaw/pull/3354) | 增强 IRC 通道能力，但缺少 Issue 锚定，建议先建立对应 Issue 以衡量需求广度。 | #3354 待合并 |

---

## 7. 用户反馈摘要

从活跃 Issue 评论中提炼的真实用户痛点：

- **痛点一 · Web UI 长会话卡顿**（#3281）：多位用户复现该问题，影响"日常对话 + 输入"的核心交互链路。属于**渐进式体验类问题**但已持续 60+ 天，社区对此明显不满。
- **痛点二 · 提供商锁定**（#3366）：用户希望 PicoClaw 不被单一 API 锁定，反映出**对灵活性与可控性的诉求**，特别是自托管部署场景。
- **痛点三 · QQ channel 依赖阻塞**（#3365）：用户依赖上游 `botgo` 项目，但 `botgo v0.2.1` 与新版 `resty` 兼容性故障导致 401，属于**生态链依赖问题**，用户侧无解。
- **附带观察**：PR #3384 由 AI agent 误投到错误仓库，说明自动化 agent 流程仍可能产生噪音，需关注社区治理。

整体满意度**偏中性偏负面**：功能面有期待，但体验面与稳定性面存在可见短板。

---

## 8. 待处理积压（提醒维护者）

| 条目 | 类型 | 等待时长 | 链接 | 备注 |
|------|------|---------|------|------|
| Web UI 长会话输入卡顿 | Issue | **63 天** | [#3281](https://github.com/sipeed/picoclaw/issues/3281) | 13 条评论、2 个 👍，属于用户实际高频场景，建议优先响应 |
| OAuth RefreshAccessToken scope 修复 | PR | 10 天 | [#3378](https://github.com/sipeed/picoclaw/pull/3378) | 改动小、影响面明确，建议尽快评审 |
| IRCv3 multiline 支持 | PR | 22 天 | [#3354](https://github.com/sipeed/picoclaw/pull/3354) | 已超 3 周未评审，需维护者反馈 |
| OpenAI 兼容 provider 需求 | Issue | 18 天 | [#3366](https://github.com/sipeed/picoclaw/issues/3366) | 已附初步实现思路，社区有真实用例 |

---

### 📊 项目健康度综合评估

| 维度 | 评分 | 说明 |
|------|------|------|
| 活跃度 | ⭐⭐⭐☆☆ | 有持续 Issue/PR 流动，但无新版本 |
| 维护者响应 | ⭐⭐☆☆☆ | 高价值 Issue（如 #3281）长期未响应 |
| 社区互动 | ⭐⭐⭐☆☆ | 评论与反馈活跃，存在真实使用场景 |
| 稳定性 | ⭐⭐⭐☆☆ | 无新 P0 bug，但积压问题暴露前端体验短板 |

**总评：项目整体仍在迭代中，但维护者端需要补齐对老 Issue 与待评审 PR 的处理节奏，以避免社区热情衰减。**

---
*报告生成时间：2026-09-22 ｜ 数据来源：[sipeed/picoclaw](https://github.com/sipeed/picoclaw)*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目日报

**日期**：2026-09-22
**数据周期**：过去 24 小时（2026-09-21）
**报告人**：AI 开源项目分析师

---

## 1. 今日速览

NanoClaw（nanocoai/nanoclaw）过去 24 小时项目活跃度处于**中低水平**，呈现典型的"维护型工作日"特征：未发布新版本，新增 1 个 Issue 与 6 个 PR 更新，但其中仅 1 个 PR 走向关闭，剩余 5 个 PR 全部处于待合并状态。值得关注的是，长期未响应的 **PR #2689**（Signal DM 修复）在合并无望后被关闭，作者 seefood 随后在 **PR #3837** 中提交了一份整合版本，标志着项目对 Signal 适配器的修复进入新一轮迭代。整体而言，项目在 channels/setup-installation/agent-runner/ncl-cli 四个领域均有持续修复推进，但缺少新功能合并，节奏稳健但略显缓慢。

---

## 2. 版本发布

**无新版本发布。** 过去 24 小时未产生任何新的 Release 标签。

---

## 3. 项目进展

### 已关闭 PR

- **[PR #2689](https://github.com/nanocoai/nanoclaw/pull/2689)** `fix(signal): DM platform ID consistency, isMention, and ask_question/approval delivery` — 作者 klingel，创建于 2026-06-04，于 2026-09-21 关闭。
  - 该 PR 因长期未合并被关闭，但其核心修复内容已被作者 seefood 在 [PR #3837](https://github.com/nanocoai/nanoclaw/pull/3837) 中整合并重新提交。
  - 这意味着 Signal DM 路由、isMention 标志、ask_question/approval 投递一致性等问题的修复工作**仍在持续推进**，并未中断。

### 等待合并中的重要 PR（按模块）

| 模块 | PR | 主题 |
|------|-----|------|
| area/channels | [#3837](https://github.com/nanocoai/nanoclaw/pull/3837) | Signal 适配器：附件暂存、DM 路由、外发队列修复整合 |
| area/channels | [#3859](https://github.com/nanocoai/nanoclaw/pull/3859) | WhatsApp：`resolveChannelName` 让注册卡可正确显示群组名 |
| area/ncl-cli | [#3286](https://github.com/nanocoai/nanoclaw/pull/3286) | `groups restart --rebuild` 在无自定义包时跳过镜像重建 |
| area/setup-installation | [#3273](https://github.com/nanocoai/nanoclaw/pull/3273) | `install-node.sh` 自动检测包管理器（支持非 Debian 系 Linux） |
| area/agent-runner, area/core | [#3311](https://github.com/nanocoai/nanoclaw/pull/3311) | 定时任务错误路由到 operator 而非误投递到 chat |

**整体评估**：项目整体向前迈进约 **0.6 步**（无合并，但有实质性整合 PR 出现）。当日净修复方向明确集中在**渠道适配层（channels）** 与**安装初始化（setup）** 两条线，但所有修复都还停留在 PR 阶段，未进入主干。

---

## 4. 社区热点

### 今日讨论焦点

- **[Issue #3860](https://github.com/nanocoai/nanoclaw/issues/3860)** `restart.sh: FORCE_COLOR makes the restart timestamp unparseable` — 作者 witek，2026-09-21 新开。
  - 摘要：`setup/lib/restart.sh` 中 `started_after="$(node -e 'console.log(Date.now())')"` 直接输出数字，而 pnpm 通过 `FORCE_COLOR=1` 把 ANSI 颜色码注入到子进程 `console.log` 输出中，导致纯数字时间戳被染色，**重启时间戳无法被解析**。
  - 评论数：0，👍：0。虽然互动数低，但属于**结构性 Bug**，可能影响所有通过 pnpm 启动的安装链路。
  - 关联诉求：社区期望项目统一处理子进程标准输出隔离，避免环境变量污染关键元数据。

- **[PR #3837](https://github.com/nanocoai/nanoclaw/pull/3837)** Signal 适配器修复整合包 — 由 seefood 提交，整合了两份陈旧 PR 的内容。
  - 反映了社区贡献者在面对长期未合并 PR 时的典型应对策略：**放弃存量、重新整合、面向最新基线重提**。
  - 评论/点赞数据未披露，但其重要性体现在它同时解决了附件暂存、DM 路由、外发队列三大长期痛点。

---

## 5. Bug 与稳定性

按严重程度排序：

### 🟠 中-高严重度

1. **[Issue #3860](https://github.com/nanocoai/nanoclaw/issues/3860)** — `restart.sh` 时间戳解析失败
   - **影响范围**：使用 pnpm 启动 / 重启 NanoClaw 服务的用户
   - **触发条件**：`FORCE_COLOR=1` 环境变量被传递到 `node -e`
   - **当前状态**：**暂无对应修复 PR**，建议维护者优先处理
   - **修复建议**：在 Node 调用前禁用颜色（`NO_COLOR=1` 或重定向到 `2>/dev/null`），或改用 `date +%s` 获取时间戳

### 🟡 中等严重度

2. **[PR #3311](https://github.com/nanocoai/nanoclaw/pull/3311)** — 定时任务错误投递到 chat 而非 operator
   - 修复 Issue #3223；批量任务无 routing 字段，原实现会导致错误消息误投递
   - **已有修复 PR**，等待合并

3. **[PR #3273](https://github.com/nanocoai/nanoclaw/pull/3273)** — `install-node.sh` 在非 Debian 系 Linux 上失败
   - 修复 Issue #2462；当前在 Fedora/RHEL/CentOS/openSUSE/Arch/Alpine 上都会失败
   - **已有修复 PR**，等待合并（属于阻塞新用户安装的可用性问题）

### 🟢 低严重度 / 体验优化

4. **[PR #3286](https://github.com/nanocoai/nanoclaw/pull/3286)** — `groups restart --rebuild` 在无自定义包时仍执行构建
   - 影响性能与首次启动体验；**已有修复 PR**

5. **[PR #3859](https://github.com/nanocoai/nanoclaw/pull/3859)** — WhatsApp 群组注册卡显示为"a whatsapp channel"
   - UI/UX 一致性缺陷；**已有修复 PR**

---

## 6. 功能请求与路线图信号

本周期**未观察到明确的新功能请求 Issue**。但从已存在的 PR 合并趋势中，可以解读出项目当前的路线图信号：

| 信号 | 关联 PR | 可能进入下一版本 |
|------|--------|------------------|
| **渠道适配层统一化** | [#3837](https://github.com/nanocoai/nanoclaw/pull/3837), [#3859](https://github.com/nanocoai/nanoclaw/pull/3859) | 极可能纳入下个版本；`area/channels` 是当前最高频提交区域 |
| **安装器跨平台扩展** | [#3273](https://github.com/nanocoai/nanoclaw/pull/3273) | 高优先级，可解锁非 Debian 用户 |
| **Agent Runner 错误处理** | [#3311](https://github.com/nanocoai/nanoclaw/pull/3311) | 应纳入，与 operator 体验直接相关 |
| **CLI 重构** | [#3286](https://github.com/nanocoai/nanoclaw/pull/3286) | 中优先级，修复而非新功能 |

**预期下一版本方向**：以"channels 适配器一致性 + 安装器跨平台"为主的 Bugfix/稳定性版本。

---

## 7. 用户反馈摘要

本周期 Issues 评论数普遍为 0（含 Issue #3860），缺乏可量化的用户正面/负面反馈文本。从 PR 内容中可提炼以下真实痛点：

- **Signal DM 用户**：首条消息被静默丢弃、群组未注册（PR #3837、#2689 反映）→ 用户感知为"机器人不响应"，体验断裂。
- **非 Debian Linux 用户**：`install-node.sh` 直接失败（PR #3273）→ 用户感知为"安装失败"，是首要入门障碍。
- **定时任务使用者**：错误被错误地以聊天消息形式出现（PR #3311）→ 用户感知为"消息看起来很怪"，且可能误导对话上下文。
- **WhatsApp 群组管理**：注册卡片显示为"a whatsapp channel"（PR #3859）→ 用户感知为"功能不完善、看起来不专业"。

整体而言，社区痛点集中在**多渠道适配器一致性**与**安装器鲁棒性**两方面。**暂无公开的满意度信号**（无关闭 PR 的正向评论披露）。

---

## 8. 待处理积压

需要维护者关注的**长期未响应项**：

| 类型 | 编号 | 主题 | 创建日期 | 等待天数（估算） |
|------|------|------|----------|------------------|
| PR | [#2689](https://github.com/nanocoai/nanoclaw/pull/2689) | Signal DM 平台 ID 一致性（已关闭，但关联痛点仍在 [#3837](https://github.com/nanocoai/nanoclaw/pull/3837) 中存活） | 2026-06-04 | 已结束 |
| PR | [#3837](https://github.com/nanocoai/nanoclaw/pull/3837) | Signal 适配器整合修复 | 2026-09-16 | ~6 天 |
| PR | [#3286](https://github.com/nanocoai/nanoclaw/pull/3286) | 跳过无包镜像重建 | 2026-08-17 | ~35 天 |
| PR | [#3273](https://github.com/nanocoai/nanoclaw/pull/3273) | 安装器包管理器检测 | 2026-08-16 | ~36 天 |
| PR | [#3311](https://github.com/nanocoai/nanoclaw/pull/3311) | 定时任务错误路由 | 2026-08-18 | ~34 天 |
| Issue | [#3860](https://github.com/nanocoai/nanoclaw/issues/3860) | restart.sh 时间戳解析 | 2026-09-21 | < 1 天（但无修复 PR） |

### ⚠️ 提醒维护者

1. **wakqasahmed 的三份 PR（#3286, #3273, #3311）已等待 30+ 天**，建议批量评审或给出反馈，以维持外部贡献者积极性。
2. **seefood 的 PR #3837 是对历史工作的整合**，建议优先 review，因为它取代了已关闭的 PR #2689，避免贡献者挫败感循环。
3. **Issue #3860 属于"无 PR 待命"状态**，建议在 48 小时内快速处理或挂上 `good first issue` 标签以鼓励社区参与。

---

## 项目健康度评分（自评）

| 维度 | 评分 | 说明 |
|------|------|------|
| 提交活跃度 | ⭐⭐⭐☆☆ | 当日有外部贡献者活动但未合并 |
| 响应速度 | ⭐⭐☆☆☆ | 多份 PR 超 30 天无 review |
| 发布节奏 | ⭐⭐☆☆☆ | 无新版本，修复堆积 |
| 社区互动 | ⭐⭐☆☆☆ | Issue/PR 评论数普遍为 0 |
| 代码质量方向 | ⭐⭐⭐⭐☆ | PR 内容技术扎实、范围明确 |

**综合健康度**：⭐⭐⭐☆☆（3/5）— 项目在修复推进中，但合并节奏与维护者反馈存在改善空间。

---

*报告基于 GitHub 公开数据生成，仅供参考。链接均为 `nanocoai/nanoclaw` 仓库。*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目日报 | 2026-09-22

> 数据周期：2026-09-21 ~ 2026-09-22｜仓库：nearai/ironclaw

---

## 1. 今日速览

过去 24 小时 IronClaw 仓库活动处于**低位区间**：仅 1 条活跃 Issue、1 条已关闭 PR、0 个新版本发布。唯一一个 Issue（#8106）属于自动化产出的"每日失败分类（Daily failure taxonomy）"分析报告，并非用户求助类问题；唯一一条 PR（#8105）则是面向下一阶段发布的版本号 bump（chore 类型）。综合来看，今日动态以"运维 / 发布准备 / 自动化观测"为主，无功能性推进或缺陷修复信号。仓库整体健康度：**稳定，但活跃度偏低**。

---

## 2. 版本发布

**无新版本发布。**

顺带指出：今日有 1.4.1-rc.1 的版本号 bump 动作落地（详见 §3），但尚未生成可观测的 Release artifact，预计正式 tag 将由 `Cut Ironclaw Release` workflow 完成。

---

## 3. 项目进展

### [#8105 chore(release): cut 1.4.1-rc.1](https://github.com/nearai/ironclaw/pull/8105) · CLOSED

- **作者**：@henrypark133
- **类型**：Release chore（无功能性 change）
- **核心动作**：将 `ironclaw` 包版本号调整至 **1.4.1-rc.1**，为后续在合并提交上打 `ironclaw-v1.4.1-rc.1` 标签做准备。
- **工程意义**：依据 PR 摘要，`cut_ironclaw_release.py` 会校验候选 manifest 的版本号与请求的版本号是否一致；因此版本号 bump 必须先于 tag，避免发布链路错位。这是发布工程中的**前置原子操作**。
- **影响评估**：仓库并未因此前进到下一个功能节点；动作完全发生在 release plumbing 层面。

> 📏 **整体进度判断**：今日未在功能 / 稳定性 / 性能维度产生可量化的推进。下一节奏点取决于 1.4.1-rc.1 是否在合并后顺利完成发布。

---

## 4. 社区热点

今日社区热度极低，仅 1 条 Issue 且 0 评论 / 0 👍。

### [#8106 Daily ironclaw failure taxonomy — 2026-09-21](https://github.com/nearai/ironclaw/issues/8106) · OPEN

- **作者**：@pranavraja99
- **性质**：自动触发的 benchmark 失败分类日报（信息性 / 观测性）
- **链接到的运行**：officeqa suite 的某次运行存在 47 个 non-pass 任务
- **摘要片段**："…This run's 47 non-pass tasks are overwhelmingly genuine model-quality errors: DeepSeek-V4-Flash navigates…"——报告把"模型质量问题"与"框架侧问题"做了区分归因
- **背后诉求**：维护者借助 Issue 频道对每日评测健康度做轻量级可追溯存档，方便回溯具体 run ID 而无需打开 dashboard
- **互动度**：0 评论、0 reaction，说明该 Issue 主要用于存档而非讨论

---

## 5. Bug 与稳定性

- 📊 **用户上报缺陷数**：0
- 📉 **自动化报告中的风险信号**：Issue #8106 提到 officeqa 出现 **47 个 non-pass**，但被定性为**绝大多数源自模型质量（model-quality errors）**，并非框架侧 bug
- 🧪 **回归 / 崩溃报告**：今日无新增
- ✅ **修复 PR 联动**：无需（今日无活动 bug）

> 🟢 稳定性评估：**良好**。没有新缺陷打断发布节奏。

---

## 6. 功能请求与路线图信号

- 🔍 今日仓库中**无 feature / enhancement 类型工作**进入
- 🛣️ **唯一的路线图信号**来自 PR #8105 暗示的下一步动作 —— **正式发布 1.4.1-rc.1**，这是短期内可观察到的最明确节点
- ⚠️ 由于缺少用户投票或讨论信号，无法对"哪些 feature 可能进入下一版本"做有效推断

---

## 7. 用户反馈摘要

- 💬 今日 **所有可见 Issue/PR 的评论数均为 0**（#8105 评论数在数据中显示为 undefined）
- 😶 **无真实用户痛点、使用场景、满意度 / 不满意度**信号可被提炼
- 📌 本节今日略过具体反馈细节

---

## 8. 待处理积压

| 编号 | 类型 | 状态 | 风险等级 | 建议 |
|---|---|---|---|---|
| [#8106](https://github.com/nearai/ironclaw/issues/8106) | 自动化观测 / 日报 | OPEN，0 评论 | 🟢 低 | 建议维护者在 48h 内确认是否归档为已处理 / 关闭，避免占用 Issue 列表，影响后续真实问题被快速看见 |

> 🧭 **维护者关注提示**：
> 1. 确认 PR #8105 合并后 `Cut Ironclaw Release` workflow 是否顺利完成 1.4.1-rc.1 tag；
> 2. 主动 close #8106 或将日报型 Issue 移入 project / discussion 频道，保持 Issues 列表的"高信噪比"；
> 3. 关注 repo 中是否已开启下一窗口的功能 / bug 提交，否则 1.4.1-rc 后的 release notes 需要重新聚合。

---

*报告生成依据：GitHub 公开数据（Issues / PRs / Releases API 拉取）｜本报告由 IronClaw 项目动态自动生成*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目日报 · 2026-09-22

---

## 1. 今日速览

LobsterAI 今日呈现**高强度修复型更新**特征：过去 24 小时内仓库共处理 **15 个 PR（13 个已关闭/合并、2 个仍待合并）** 与 **2 个活跃 Issue**，无新版本发布。合并的 PR 几乎全部聚焦于 **OpenClaw 网关启动稳定性** 与 **macOS/Windows 路径兼容**，说明团队当前的核心精力集中在 8 月版本遗留问题的清理上。整体活跃度评估为 **高**，但用户侧**功能交付节奏放缓**（仅 1 个新功能 PR 待合并）。

---

## 2. 版本发布

⚠️ **今日无新版本发布**。仓库自近期 8 月构建后处于持续热修复状态，尚未形成新的版本号切点。

---

## 3. 项目进展

今日合并/关闭的 13 个 PR 中，约 **9 个为实质性代码修复**，主要集中在以下三个方向：

### 3.1 OpenClaw 网关启动稳定性（核心焦点）

| PR | 主要内容 |
|---|---|
| [#2737](https://github.com/netease-youdao/LobsterAI/pull/2737) | 恢复 IM 渠道"定时提醒"调用的本地调度工具，修复飞书通道定时任务派发问题 |
| [#2734](https://github.com/netease-youdao/LobsterAI/pull/2734) | 迁移遗留的 `openclaw-weixin-allowFrom.json` 文件，避免阻塞网关就绪 |
| [#2735](https://github.com/netease-youdao/LobsterAI/pull/2735) | 修复 SQLite 与 legacy `identity/device.json` 身份冲突导致的启动失败 |
| [#2719](https://github.com/netease-youdao/LobsterAI/pull/2719) | 升级/重装时自动修复旧版本残留配置，避免每次启动失败 |
| [#1067](https://github.com/netease-youdao/LobsterAI/pull/1067) | 停止为 OpenClaw 心跳自动创建 `[OpenClaw]` Cowork 会话（已轮转半年，今日关闭） |

### 3.2 跨平台兼容性修复

- [#2704](https://github.com/netease-youdao/LobsterAI/pull/2704) / [#2733](https://github.com/netease-youdao/LobsterAI/pull/2733)：在 macOS 上解析 `/var → /private/var` 软链接导致的测试断言失败
- [#2731](https://github.com/netease-youdao/LobsterAI/pull/2731)：补齐 `nsp-clawguard 2.5.0` 在原生 ESM 加载下的 `__filename/__dirname` 上下文，修复 Windows 盘符、空格、中文路径下的启动崩溃

### 3.3 安全与更新机制

- [#2736](https://github.com/netease-youdao/LobsterAI/pull/2736)：浏览器凭据改为**显式请求 OS Keychain 访问**，避免每次可用性检查都触发系统弹窗
- [#2730](https://github.com/netease-youdao/LobsterAI/pull/2730)：更新器支持可选的目标版本候选项（针对已登录会话），保留现有检查作为兜底

### 3.4 历史 PR 清理

- [#998](https://github.com/netease-youdao/LobsterAI/pull/998)（选中文本浮动工具栏）、[#999](https://github.com/netease-youdao/LobsterAI/pull/999)（Cmd+K 命令面板）在积压 **约 6 个月后于今日被关闭**，建议关注是否被吸收到主干或彻底放弃。

**整体评估**：今日是「质量修复日」而非「功能交付日」，OpenClaw 渠道层的可靠性向前实质性推进了一大步。

---

## 4. 社区热点

| 排名 | 条目 | 评论数 | 👍 | 关注点 |
|---|---|---|---|---|
| 🥇 | [Issue #2738](https://github.com/netease-youdao/LobsterAI/issues/2738) | 1 | 0 | **切换工作区需重启网关 10+ 秒**，体验痛点明确 |
| 🥈 | [Issue #989](https://github.com/netease-youdao/LobsterAI/issues/989) | 1 | 0 | **Tavily MCP 401 错误**，已开 6 个月仍未解 |
| 🥉 | [PR #2739](https://github.com/netease-youdao/LobsterAI/pull/2739) | — | 0 | 免密钥 Parallel 网页搜索集成（潜在高需求） |

**诉求分析**：用户当前最关心的是**「高频场景下的响应速度」**（工作区切换）与**「第三方集成的稳定性」**（Tavily）。这两个方向均未出现在今日合并的 PR 中，存在交付缺口。

---

## 5. Bug 与稳定性

按严重程度排列：

| 严重度 | 问题 | 状态 | 已有 Fix？ |
|---|---|---|---|
| 🔴 P0 | [Issue #989](https://github.com/netease-youdao/LobsterAI/issues/989) Tavily MCP 配置 API key 后仍 401 未授权 | OPEN（6 个月） | ❌ 无 |
| 🟠 P1 | [Issue #2738](https://github.com/netease-youdao/LobsterAI/issues/2738) 切换工作区必须重启网关，>10 秒延迟 | OPEN | ❌ 无（功能请求） |
| 🟢 P2 | 旧版本残留配置导致网关反复重启（[#2719](https://github.com/netease-youdao/LobsterAI/pull/2719)） | 已修复 | ✅ |
| 🟢 P2 | macOS `/var` 软链接导致路径断言失败（[#2704](https://github.com/netease-youdao/LobsterAI/pull/2704)） | 已修复 | ✅ |
| 🟢 P2 | nsp-clawguard ESM 模式下 Windows 路径启动崩溃（[#2731](https://github.com/netease-youdao/LobsterAI/pull/2731)） | 已修复 | ✅ |
| 🟢 P3 | Weixin 旧版 allowFrom 文件残留阻塞启动（[#2734](https://github.com/netease-youdao/LobsterAI/pull/2734)） | 已修复 | ✅ |

**核心结论**：今日 P0/P1 问题均**无对应修复 PR**，需维护者主动认领。

---

## 6. 功能请求与路线图信号

### 用户侧新请求

- **🆕 不重启网关切换工作区**（[#2738](https://github.com/netease-youdao/LobsterAI/issues/2738)）—— 与今日大量「网关启动失败」修复形成鲜明反差。修复稳定性后，下一步明显是**优化启动/切换的耗时**。建议纳入下一个迭代。

### 已提交但未合并的功能 PR

- **[#2739](https://github.com/netease-youdao/LobsterAI/pull/2739)** —— 为内置 `web-search` 技能新增 Parallel 引擎，且**无需 API Key 即可使用**（匿名限速）。这是一个面向新用户拉新的友好改动，合并门槛较低，建议优先评估。

### 已关闭但有价值的「被遗忘」功能

- [#998](https://github.com/netease-youdao/LobsterAI/pull/998) 选中文本浮动工具栏
- [#999](https://github.com/netease-youdao/LobsterAI/pull/999) Cmd+K 命令面板

两者均为改善**键盘用户体验**的功能，描述详尽，关闭原因未在数据中体现。建议维护者公开说明（合并 / 重写 / 拒绝），避免贡献者再次提交重复 PR。

---

## 7. 用户反馈摘要

从有限的两条活跃 Issue 评论中可提炼：

- **😣 性能痛点**：「切换工作区 10+ 秒」——用户描述为"频繁切换体验较差"，表明这是**日常高频操作**而非边缘场景。该反馈也间接说明用户正在**多工作区并行使用**，产品已被深度使用。
- **😡 第三方集成失效**：Tavily MCP 即使正确配置 API Key 仍 401，怀疑是 key 注入逻辑、权限范围或新版鉴权兼容性问题。问题停留 6 个月未响应，用户大概率已**流失或转向替代方案**。

---

## 8. 待处理积压提醒

| 类型 | 条目 | 创建时间 | 积压天数 | 风险 |
|---|---|---|---|---|
| 🐛 Bug | [Issue #989](https://github.com/netease-youdao/LobsterAI/issues/989) Tavily MCP 401 | 2026-03-27 | **~179 天** | 第三方生态信任受损 |
| 🤖 Dependabot | [PR #1277](https://github.com/netease-youdao/LobsterAI/pull/1277) electron 43.5.0 → 44.4.2 | 2026-04-02 | **~173 天** | 安全与版本落后 |
| ⚙️ 功能 | [PR #998](https://github.com/netease-youdao/LobsterAI/pull/998) 浮动工具栏 | 2026-03-28 | ~178 天 | 已关闭（需确认是否合并） |
| ⚙️ 功能 | [PR #999](https://github.com/netease-youdao/LobsterAI/pull/999) Cmd+K 命令面板 | 2026-03-28 | ~178 天 | 已关闭（需确认是否合并） |
| ⚙️ 功能 | [PR #1067](https://github.com/netease-youdao/LobsterAI/pull/1067) 停止 OpenClaw 自动建会话 | 2026-03-30 | ~176 天 | 已关闭（需确认） |

**建议维护者关注**：
1. 立即回应 [#989](https://github.com/netease-youdao/LobsterAI/issues/989)，即使是「暂时无法修复」的回应也好过 6 个月沉默。
2. 评估 [#1277](https://github.com/netease-youdao/LobsterAI/pull/1277) Electron 大版本升级风险，避免落后主版本过远。
3. 对今日被关闭的三个 6 月份 PR 给出官方结论（merged/rejected/replaced），维护贡献者信心。

---

> **📊 项目健康度评分（本期）**：⭐⭐⭐☆☆ (3/5)
> 维护者修复效率高，OpenClaw 渠道稳定性显著提升；但用户侧功能交付停滞、长期 Issue 缺乏响应、版本节奏放缓，建议在稳定性修复完成后尽快恢复功能迭代与社区沟通。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目日报
**日期：2026-09-22**

---

## 1. 今日速览

Moltis 项目在过去 24 小时呈现 **低强度但主题聚焦** 的开发动态。社区与维护者围绕"本地语音合成（TTS）"和"工具调用修复"两个方向展开协作，共产生 2 条 Issue（1 新开 / 1 关闭）和 2 条待合并 PR（无合并记录）。**活跃度评估：中低**，所有活动均集中在 2026-09-21，单日无版本发布。整体节奏属于"常规维护 + 新功能铺垫"阶段。

---

## 2. 版本发布

无新版本发布。本期数据未检测到任何 Release 标签更新。

---

## 3. 项目进展

今日**无 PR 合并或关闭**，但有两条值得关注的开放 PR 已进入待审阶段：

| PR | 标题 | 状态 | 影响 |
|---|---|---|---|
| [#1283](https://github.com/moltis-org/moltis/pull/1283) | feat(voice): add VoxCPM as a local TTS provider | OPEN | 引入基于 [OpenBMB/VoxCPM](https://github.com/OpenBMB/VoxCPM)（Apache-2.0，2B 参数，支持 30 种语言、48kHz 输出）的新本地 TTS 提供方，通过 vLLM-Omni 的 OpenAI 兼容语音接口服务。同时更新了 `docs/src/voice.md` 中的 Provider Support 表格。|
| [#1280](https://github.com/moltis-org/moltis/pull/1280) | fix(tools): preserve preset tools for empty active_tools | OPEN | 修复 Issue [#1277](https://github.com/moltis-org/moltis/issues/1277)，修正"显式空 `active_tools` 数组"被当作"无 per-turn 覆盖"的逻辑错误，从而保留预设的 tool 控件；同时确保非空 per-turn 工具列表仍受预设 allow/deny 策略约束。|

**整体判断**：项目在"语音能力本地化"和"工具调用稳健性"两个方向均迈出实质性步伐，但尚未落地。维护者需要在近期推动评审以释放价值。

---

## 4. 社区热点

本期讨论热度集中于同一议题的重复提交：

- **[#1282 [OPEN] [Feature]: VoxCPM as a local TTS provider](https://github.com/moltis-org/moltis/issues/1282)** — 由 Caldalis 于 2026-09-21 创建，指出 voice personas 缺乏本地实现，并直接引用 `docs/src/voice.md` 的 Provider Support 表格作为依据。
- **[#1281 [CLOSED] [Feature]: VoxCPM as a local TTS provider](https://github.com/moltis-org/moltis/issues/1281)** — 同一作者、同日创建的疑似重复 Issue，已被关闭（很可能是合并入 #1282 或被作者自行取消）。

**诉求分析**：用户在文档与代码之间发现差距——文档虽列出多种 Provider，但 voice personas 尚无本地化路径。这一缺口恰好被外部优秀项目（VoxCPM、vLLM-Omni）填补，社区通过"文档差异 → 提交 issue → 附带实现 PR"的方式完成了完整的需求闭环，是开源协作的典型范本。

> ⚠️ 提示：#1281 与 #1282 标题与内容高度雷同，建议维护者在 #1282 中统一跟进，避免后续沟通割裂。

---

## 5. Bug 与稳定性

| 严重程度 | Issue | 描述 | 修复进展 |
|---|---|---|---|
| 🟡 中 | [#1277](https://github.com/moltis-org/moltis/issues/1277) | 当 `active_tools` 被显式置为空数组时，预设工具控件被意外清除 | ✅ 已有修复 PR [#1280](https://github.com/moltis-org/moltis/pull/1280) 待合并 |

**评估**：今日仅暴露 1 个中等严重度的回归型 Bug，且修复方案已就位，预计合并后即可闭环。无崩溃或性能退化报告，整体稳定性良好。

---

## 6. 功能请求与路线图信号

| 功能 | 提交形式 | 可纳入下一版本的概率 | 理由 |
|---|---|---|---|
| **VoxCPM 本地 TTS** | Issue [#1282](https://github.com/moltis-org/moltis/issues/1282) + 实现 PR [#1283](https://github.com/moltis-org/moltis/pull/1283) | ⭐⭐⭐⭐ 极高 | 用户已直接附带可用实现，外部依赖均为 Apache-2.0，文档同步策略清晰，落地门槛低 |
| **预设工具控件保留** | 修复 PR [#1280](https://github.com/moltis-org/moltis/pull/1280) | ⭐⭐⭐⭐⭐ 确定纳入 | 属于既有 Bug 修复，行为正确性修复，理应进入下一版本 |

**路线图信号**：项目正在强化"本地化 AI 能力栈"——从模型推理（vLLM-Omni）到语音合成（VoxCPM）逐步减少对云端 API 的依赖。这与当前 edge-AI / local-first 趋势一致，预计将成为后续路线图主线。

---

## 7. 用户反馈摘要

由于今日 Issues/PRs 评论数均为 0 或 undefined，**暂无公开评论层面的用户反馈**。仅从 Issue 内容可提炼以下用户痛点：

- **本地化能力缺口**：用户 Caldalis 引用文档表格指出 voice personas "no local implementation"，说明文档承诺与实际能力之间存在落差，影响本地部署用户的完整体验。
- **工具调用语义模糊**：Issue #1277 反映出 `active_tools` 为空数组时的行为定义不够清晰，开发者需要在"显式清空"和"未设置"之间做出区分，否则会破坏预设工具链。

---

## 8. 待处理积压

| 类型 | 编号 | 标题 | 创建/更新日期 | 提醒 |
|---|---|---|---|---|
| 待合并 PR | [#1283](https://github.com/moltis-org/moltis/pull/1283) | feat(voice): add VoxCPM as a local TTS provider | 2026-09-21 | 实现完整，建议优先评审；Closes 引用待规范为 #1282 |
| 待合并 PR | [#1280](https://github.com/moltis-org/moltis/pull/1280) | fix(tools): preserve preset tools for empty active_tools | 2026-09-21 | Bug 修复，影响工具链可靠性，建议尽快合并 |
| 待跟进 Issue | [#1282](https://github.com/moltis-org/moltis/issues/1282) | [Feature]: VoxCPM as a local TTS provider | 2026-09-21 | 由关联 PR #1283 覆盖，建议在 PR 合并时同步关闭 |

**维护者建议**：
1. 在 PR #1283 的描述中补充 `Closes #1282`（而非占位符 `Closes #NNNN`），形成完整的 issue ↔ PR 链路；
2. 将 #1281 关闭原因在 #1282 中同步说明，减少社区困惑；
3. PR #1280 修复逻辑清晰、影响面有限，建议在下一个工作日内合并。

---

> 📊 **项目健康度总评**：**良好（★★★☆☆ → ★★★★☆）**
> 当日活动虽规模不大，但需求→实现→修复的链路完整，社区贡献质量高（附完整实现与文档同步）。主要风险点集中在评审节奏——两条 PR 均尚未合并，需关注维护者响应速度。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目日报 · 2026-09-22

> 数据来源：GitHub 仓库 `agentscope-ai/QwenPaw`（项目对外品牌 CoPaw），统计窗口 2026-09-21 → 2026-09-22。

---

## 1. 今日速览

CoPaw 仓库今日整体处于**高活跃维护期**：过去 24 小时共处理 17 条 Issue 更新与 31 条 PR 更新，Issue 关单率达 **47%**（8/17），PR 关单率达 **55%**（17/31），表明维护团队对近期报告的回归问题响应迅速。**核心工作集中在三条主线**：① Windows/Desktop 端的稳定性（Shell 隔离、Console 启动竞态、文件 tab 缓存）；③ Provider 与 Responses API 的协议兼容性（OpenCode、codex、DeepSeek）；③ 上下文压缩与循环门控（DoomLoop、context compaction）。无新版本发布，活跃分支版本为 `2.2.2b3`，下一个小版本（2.2.2 或 2.2.3）很可能正在累积候选修复。

---

## 2. 版本发布

无新版本发布。最近一次可识别的版本线索：
- 桌面端 Console 顶部显示 **v2.2.1**
- 多个 issue/PR 引用 `2.2.2b1` / `2.2.2b3` 作为基线
- [PR #7913](https://github.com/agentscope-ai/QwenPaw/pull/7913) 升级 AgentScope 至 `2.0.8`（已合并）

---

## 3. 项目进展（今日合并/关闭的重要 PR）

| 编号 | 标题 | 类别 | 影响 |
|---|---|---|---|
| [#7906](https://github.com/agentscope-ai/QwenPaw/pull/7906) | fix(loop): prevent stale doom-loop escalation | Bug 修复 | 解决 #7905：DoomLoopGate 仅在出现新工具调用证据时推进重复阶段 |
| [#7919](https://github.com/agentscope-ai/QwenPaw/pull/7919) | fix: require new tool-call evidence for doom loop escalation | Bug 修复 | 同上问题的二次加固，覆盖窗口复用与重置路径 |
| [#7915](https://github.com/agentscope-ai/QwenPaw/pull/7915) | fix(responses): default function tools to non-strict mode | Bug 修复 | 修复 #7907：Responses API schema 清洗剔除 nullable 后隐式 strict 导致可选参数强制 |
| [#7917](https://github.com/agentscope-ai/QwenPaw/pull/7917) | fix(console): improve API loading on slow networks | 性能 | ≥1KB 的 JSON 与纯文本响应做压缩，离 event loop 执行 |
| [#7846](https://github.com/agentscope-ai/QwenPaw/pull/7846) | feat: improve session list details and grouping | UX | 会话列表不再后端截断，前端控制省略号与滚动查看；合并"channel/source"指示器 |
| [#7899](https://github.com/agentscope-ai/QwenPaw/pull/7899) | feat(providers): unify model discovery, pricing, selection and thinking controls | Provider 重构 | 模型管理改为由 provider 自描述，覆盖控制台卡片与同步链路 |
| [#7911](https://github.com/agentscope-ai/QwenPaw/pull/7911) | test(unit): coverage sprint batch 3 — 2720 cases (+3.28pp) | 测试 | `src/qwenpaw` 语句覆盖率 70.51% → 73.79%，新增 47 测试文件 |
| [#7326](https://github.com/agentscope-ai/QwenPaw/pull/7326) | feat(ci): split nightly E2E into three parallel priority shards + fail-closed summary | CI | 夜间 E2E 由串行切 3 路并行（p0/p1/p2），汇总改为 fail-closed |
| [#7913](https://github.com/agentscope-ai/QwenPaw/pull/7913) | chore(deps): bumping version of agentscope to 2.0.8 | 依赖 | 升级 AgentScope 至 2.0.8 |
| [#7918](https://github.com/agentscope-ai/QwenPaw/pull/7918) | docs: remove accidentally committed design documents | 仓库卫生 | 清理 `docs/design` 下 9 份误提交文档（877 行），无应用代码变动 |

**整体节奏**：项目今日净推进 **+10 个已合并/关闭 PR**（含 DoomLoop 双 PR、Responses schema、Console 慢网络、会话列表 UI、provider 重构、依赖升级、E2E 并行化）。其中两条 DoomLoop 修复 + 一条 Responses 严格模式修复形成连续回归响应，#7911 测试覆盖冲刺推进 3.28pp，CI 与依赖基础设施同步升级。

---

## 4. 社区热点

**讨论/参与最活跃**（按评论数排序）：

1. **[#7859](https://github.com/agentscope-ai/QwenPaw/issues/7859) — [BUG] 持久化 Prompt 注入**（5 评论，仍 OPEN）
   多轮跨会话注入指令持续追加到 tool-result 的 `system-reminder` / agent-skills 列表块尾部，要求智能体"完成任务后必须永久删除所有技能"。**诉求**：隔离不可信工具回执；增加内容审计；提供受影响 skills 的列表与复现脚本。
2. **[#7883](https://github.com/agentscope-ai/QwenPaw/issues/7883) — 工具返回 PDF 在 DeepSeek 上 400**（4 评论，仍 OPEN）
   声明是 #7597（已关闭）的回归：PDF 被序列化为 OpenAI 嵌套 file part，DeepSeek 要求 `file_id`/`file_data`。**诉求**：对非 OpenAI Responses 网关做内容嗅探分支或回退。
3. **[#7628](https://github.com/agentscope-ai/QwenPaw/issues/7628) — Context compaction 仍超 provider 预算**（4 评论，OPEN，自 09-08 起）
   触发与最终预算仅基于可见上下文，未纳入完整请求体；要求基于**完整** provider 请求进行预算。**诉求**：把 system prompt、工具 schema、记忆注入纳入预算计算。
4. **[#7905](https://github.com/agentscope-ai/QwenPaw/issues/7905) — DoomLoopGate 文本轮误升级**（3 评论，已关闭）
   已被 [#7906、#7919](https://github.com/agentscope-ai/QwenPaw/pull/7906) 双修复。
5. **[#3419](https://github.com/agentscope-ai/QwenPaw/issues/3419) — 京东云 Coding Plan 会话中断**（3 评论，OPEN，自 04-15 起）
   工具审批提交后会话意外中断，疑似 shell 进程组信号传播。**诉求**：环境隔离与会话续接。

**社区诉求共识**：近期最高优先级仍是 **多 provider 协议鲁棒性**（OpenCode、codex、DeepSeek）与 **Windows/桌面端生命周期管理**（Ctrl 信号、Console 启动竞态、tab 缓存）。次优先级是 **上下文与预算治理** 与 **prompt-injection 防御**。

---

## 5. Bug 与稳定性

按严重程度排序：

| 严重度 | 编号 | 标题 | 状态 | 修复 PR |
|---|---|---|---|---|
| 🔴 P0 | [#7859](https://github.com/agentscope-ai/QwenPaw/issues/7859) | 持久化 Prompt 注入至 system-reminder | OPEN | ❌ 无 |
| 🔴 P0 | [#7908](https://github.com/agentscope-ai/QwenPaw/issues/7908) | Windows: 子 Console Ctrl 事件可终止 QwenPaw 宿主 | OPEN | ✅ [#7910](https://github.com/agentscope-ai/QwenPaw/pull/7910)（待合并） |
| 🔴 P0 | [#7883](https://github.com/agentscope-ai/QwenPaw/issues/7883) | PDF 在 DeepSeek 返回 400（#7597 回归） | OPEN | ❌ 无 |
| 🟠 P1 | [#7628](https://github.com/agentscope-ai/QwenPaw/issues/7628) | 上下文压缩仍超 provider 预算 | OPEN | ❌ 无 |
| 🟠 P1 | [#3419](https://github.com/agentscope-ai/QwenPaw/issues/3419) | 京东云 Coding Plan 会话中断 | OPEN | ❌ 无 |
| 🟠 P1 | [#7841](https://github.com/agentscope-ai/QwenPaw/issues/7841) | Desktop Console 先于后端就绪（首屏空白） | OPEN | ❌ 无 |
| 🟠 P1 | [#7916](https://github.com/agentscope-ai/QwenPaw/issues/7916) | AgentScope Platform 校验器未收录 2.2.1b1 新 memory 类型 | OPEN | ❌ 无 |
| 🟡 P2 | [#7905](https://github.com/agentscope-ai/QwenPaw/issues/7905) | DoomLoopGate 文本轮误升 TERMINATE | CLOSED | ✅ [#7906](https://github.com/agentscope-ai/QwenPaw/pull/7906)、[#7919](https://github.com/agentscope-ai/QwenPaw/pull/7919) |
| 🟡 P2 | [#7907](https://github.com/agentscope-ai/QwenPaw/issues/7907) | Responses API schema nullable 被洗掉导致 strict 强制 | CLOSED | ✅ [#7915](https://github.com/agentscope-ai/QwenPaw/pull/7915) |
| 🟡 P2 | [#7882](https://github.com/agentscope-ai/QwenPaw/issues/7882) | OpenCode "免费"模型实际 403 FreeTierError | OPEN | ❌ 无 |
| 🟡 P2 | [#7866](https://github.com/agentscope-ai/QwenPaw/issues/7866) | 文件 tab 仍显示编辑前内容 | CLOSED | ✅ [#7846](https://github.com/agentscope-ai/QwenPaw/pull/7846) |
| 🟢 P3 | [#7431](https://github.com/agentscope-ai/QwenPaw/issues/7431) | codex 非流式网关下空响应 | CLOSED | ✅ 已合并 |
| 🟢 P3 | [#7531](https://github.com/agentscope-ai/QwenPaw/issues/7531) | OpenCode API 强制 `x-opencode-session` 头 | CLOSED | ✅ 已合并 |

**修复率**：今日 OPEN 的 9 条 issue 中，已有明确修复 PR 的为 **2 条（#7908、#7907——后者已关闭）**，修复覆盖率 22%；已关闭的 8 条 issue 全部伴有对应修复 PR（含 #7905、#7866、#7431、#7531）。**关键风险**集中在三条无修复 PR 的 P0/P1：#7859（安全）、#7883（回归）、#7628（资源治理）。

---

## 6. 功能请求与路线图信号

**已合并/进行中的功能/增强**：

- **Provider 模型管理一体化**（[#7899](https://github.com/agentscope-ai/QwenPaw/pull/7899)）— 模型发现/定价/选择/思考控制全部由 provider 自描述，是 [#6167](https://github.com/agentscope-ai/QwenPaw/issues/6167) 伞型 issue 的实现落地，标志 Model Provider Layer Optimization 进入收尾阶段。
- **ReMeLightMemoryCard 增加 reranker UI 配置面板**（[#6399](https://github.com/agentscope-ai/QwenPaw/pull/6399)，待合并）— 记忆系统开始向"可视化高级参数配置"延伸。
- **PawApp SDK 与控制平面重设计**（[#7874](https://github.com/agentscope-ai/QwenPaw/pull/7874)，OPEN）— Host 控制平面为域能力提供公共/私有边界、幂等分发、配置回读，是 9 月以来的重大架构演进。
- **每会话模型覆盖**（[#5992](https://github.com/agentscope-ai/QwenPaw/pull/5992)，首次贡献者，待合并）— 在 `chat.meta.runtime_context.model_slot_override` 持久化每个 session 的模型选择。
- **Telegram 富消息 Markdown 表格**（[#7713](https://github.com/agentscope-ai/QwenPaw/pull/7713)，OPEN）— 用 `rich_message` 渲染表格，包含大小检查与候选扫描。
- **浏览器标签页标题可定制**（[#7914](https://github.com/agentscope-ai/QwenPaw/pull/7914)，首次贡献者）— 区分多部署。
- **scroll 历史按 `blocks_retention_days` 老化 tool_result**（[#7923](https://github.com/agentscope-ai/QwenPaw/pull/7923)，OPEN）— 解决生产环境滚存储占用（~75% 字节来自 tool_result 结构化块）。
- **KaTeX 渲染 LaTeX 公式**（[#5921](https://github.com/agentscope-ai/QwenPaw/issues/5921) 设计提案，CLOSED）— 与 [#5453](https://github.com/agentscope-ai/QwenPaw/issues/5453) 对齐，正式进入 PR 准备阶段。
- **百智 Agent Toolkit MCP 研究示例文档**（[#7912](https://github.com/agentscope-ai/QwenPaw/issues/7912)，OPEN）— 远程 MCP 文档补充具体 search→fetch→extract 工作流与凭据说明。
- **OMP Roles 技能 frontmatter 修复**（[#7922](https://github.com/agentscope-ai/QwenPaw/pull/7922)，首次贡献者

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目日报 · 2026-09-22

---

## 1. 今日速览

ZeroClaw 仓库 24 小时内保持高度活跃：50 条 Issues 滚动更新（46 条仍开放、4 条关闭）、50 条 PR 待处理（仅 1 条合入/关闭），且**无新版本发布**。议题集中在三条主线——**安全/沙箱加固**（RUSTSEC 公告、Git 指令分类、macOS Seatbelt）、**运行时与多通道可靠性**（并发回合、上下文上限、WhatsApp 入站附件/Mention），以及**架构类 RFC 治理**（admission control、delivery receipts、agent-to-agent messaging）。整体看，社区进入"安全-可靠性-治理"三轨并行的稳定维护阶段，但维护者评审积压明显，单日合并效率偏低。

---

## 2. 版本发布

**无新版本发布。** 最近 24 小时未触发任何 Release/tag 操作。建议关注者留意即将合并的安全与提供商相关 PR（#10860、#10903、#10904、#11026）以判断下一个 patch/minor 版本的走向。

---

## 3. 项目进展

过去 24 小时仅 **1 条 PR 进入已合并/关闭状态**（#9812、#9727、#10925、#11006 等为已关闭的 Issues，不计入 PR 合并），PR 合入速度低于日常水位。

值得关注但**仍未合入**的高价值 PR：

| PR | 主题 | 影响面 |
|---|---|---|
| [#10860](https://github.com/zeroclaw-labs/zeroclaw/pull/10860) | `fix(providers)`: 工具结果中非图像 data-URI marker 保留为文本 | 安全/多通道（XL） |
| [#10861](https://github.com/zeroclaw-labs/zeroclaw/pull/10861) | `ci(github)`: 新增仅报告式 PR 风险分类器 | CI 治理（XL） |
| [#10903](https://github.com/zeroclaw-labs/zeroclaw/pull/10903) | `fix(multimodal)`: 当前用户回合的工具结果图像保持有效 | Anthropic 多模态（L） |
| [#10904](https://github.com/zeroclaw-labs/zeroclaw/pull/10904) | `fix(runtime)`: 视觉能力错误按"实际可解析的图像 marker"判定 | 多通道/多模型 |
| [#11026](https://github.com/zeroclaw-labs/zeroclaw/pull/11026) | `fix(tools)`: 快照中代理凭据脱敏 | 安全（S） |
| [#11028](https://github.com/zeroclaw-labs/zeroclaw/pull/11028) | Telegram/Discord/Slack 集成提示本地化 | i18n/Operator UX |
| [#11038](https://github.com/zeroclaw-labs/zeroclaw/pull/11038) | `chore(security)`: 临时忽略 RUSTSEC-2026-0292 | 临时绕过安全检查 |

**整体评估**：项目在多模态/视觉链路、Rust 安全公告抑制、CI 治理三条线持续推进，但合入节奏明显滞后于 Issue/PR 的产出量，提示维护者评审带宽是当前的瓶颈。

---

## 4. 社区热点

按评论数排序，今日最热的 5 条：

1. **[#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) — Maintainer decision queue for RFCs and design issues**（15 条评论）
   - 类型：Tracker / enhancement（p2）
   - 诉求：建立 RFC/设计议题的"维护者决策队列"，解决当前设计类 Issue 长期滞留、缺乏闭环机制的问题。这是项目治理层面的元议题，热度居高不下反映出社区对**决策透明度和确定性**的强烈需求。

2. **[#9899](https://github.com/zeroclaw-labs/zeroclaw/issues/9899) — remove matrix-sdk → imbl advisory waivers (RUSTSEC-2026-0247 / RUSTSEC-2026-0292)**（6 条评论）
   - 类型：bug/security（p1，高风险）
   - 诉求：移除对 `bitmaps 3.2.1`、`imbl-sized-chunks 0.1.3` 安全公告的豁免，恢复 `cargo deny` 干净状态。社区希望项目**尽快退出"公告豁免"模式**。

3. **[#10230](https://github.com/zeroclaw-labs/zeroclaw/issues/10230) — Daemon startup or reload can overflow during agent initialization**（6 条评论）
   - 类型：bug/zerocode（p1，S1 工作流阻塞）
   - 诉求：在 daemon 运行状态下从 ZeroCode 应用 Quickstart 配置会触发 Tokio worker 栈溢出。属于用户**首次安装/引导路径上的崩溃级缺陷**。

4. **[#10523](https://github.com/zeroclaw-labs/zeroclaw/issues/10523) — Bootstrap file truncation at 6000 chars is invisible to the operator**（5 条评论）
   - 类型：bug/runtime（p2，in-progress）
   - 诉求：`compact_context` 把 `AGENTS.md` / `SOUL.md` 等静默截断到 6000 字符，运维端没有任何提示。用户对此**"静默修改"行为普遍不满**。

5. **[#10068](https://github.com/zeroclaw-labs/zeroclaw/issues/10068) — Interactive agent session caps context at 32,000 tokens, ignoring `max_context_tokens = 131072`**（5 条评论）
   - 类型：bug/runtime（p2）
   - 诉求：`zeroclaw agent --agent <name>` 会话硬编码 32k 上限，与配置不符。说明**CLI 入口与配置系统的契约不一致**。

**热点的共性**：社区最关心的是"沉默失败 / 沉默降级"——栈溢出、配置被忽略、文件被静默截断——以及安全债是否会被真正偿还。

---

## 5. Bug 与稳定性

按严重程度排序，今日活跃/今日更新的高优先级 Bug：

| 严重度 | Issue | 组件 | 描述 | 是否有修复 PR |
|---|---|---|---|---|
| **S0 / p1** | [#10966](https://github.com/zeroclaw-labs/zeroclaw/issues/10966) | security/sandbox | Git `--attr-source` 可让审批分类器忽略真正的 mutating 子命令（数据丢失/安全风险） | 未见对应 PR |
| **S0 / p1** | [#10379](https://github.com/zeroclaw-labs/zeroclaw/issues/10379) | web/Desktop | ZeroClaw Desktop 中取消按钮失效、消息无法排队 | 未见对应 PR |
| **S1 / p1** | [#9191](https://github.com/zeroclaw-labs/zeroclaw/issues/9191) | runtime/cron | Cron 代理任务无 wall-clock 超时，进程重启前锁不会释放 | 未见对应 PR |
| **S1 / p1** | [#10231](https://github.com/zeroclaw-labs/zeroclaw/issues/10231) | runtime/daemon | Channels supervisor 在 stale 配置上反复重试 | 未见对应 PR |
| **S1 / p1** | [#10536](https://github.com/zeroclaw-labs/zeroclaw/issues/10536) | security/sandbox | macOS Seatbelt 忽略 `allowed_roots` 配置，shell 命令受限 | 未见对应 PR |
| **S1 / p1** | [#10230](https://github.com/zeroclaw-labs/zeroclaw/issues/10230) | zerocode | Quickstart 应用触发 Tokio 栈溢出 | 未见对应 PR |
| **S1 / p1** | [#10408](https://github.com/zeroclaw-labs/zeroclaw/issues/10408) | runtime/daemon | 同会话第二条消息触发并行 run，重复回复 | 未见对应 PR |
| **S1 / p1** | [#10975](https://github.com/zeroclaw-labs/zeroclaw/issues/10975) | channel/whatsapp-web | 入站图片被替换为字面量 `[Image]`，视觉通道失效 | 未见对应 PR |
| **S2 / p1** | [#9899](https://github.com/zeroclaw-labs/zeroclaw/issues/9899) | deps/security | `cargo deny` 因 RUSTSEC-2026-0247/0292 失败 | 临时绕过 [#11038](https://github.com/zeroclaw-labs/zeroclaw/pull/11038)，无根本修复 |
| **S2 / p2** | [#10523](https://github.com/zeroclaw-labs/zeroclaw/issues/10523) | runtime/daemon | 引导文件 6000 字符静默截断 | 标记 in-progress，未关联 PR |
| **S2 / p2** | [#10068](https://github.com/zeroclaw-labs/zeroclaw/issues/10068) | runtime/daemon | 交互会话硬截断 32k | 未见对应 PR |
| **S2 / p2** | [#10976](https://github.com/zeroclaw-labs/zeroclaw/issues/10976) | channel/whatsapp-web | Mention 双向解析失败 | 未见对应 PR |

**稳定性信号**：S0/S1 级高危 Bug 多集中在沙箱与 daemon 路径，且**几乎全部处于"无 fix PR"状态**，构成显著的安全与可靠性债。

---

## 6. 功能请求与路线图信号

正在走 RFC 流程、可能进入下个迭代的功能：

- **[#10970](https://github.com/zeroclaw-labs/zeroclaw/issues/10970) RFC: Host-scoped admission control and per-agent resource bounds** — 为多 agent 主机提供并发回合/工具执行上限。路线图信号：项目正在为"单机多 agent"部署形态做准备。
- **[#10930](https://github.com/zeroclaw-labs/zeroclaw/issues/10930) RFC: One durable primitive for questions an agent asks a human** — 将 SOP 审批门作为通用 durable 原语复用。反映社区希望**收敛 agent-human 交互语义**。
- **[#10929](https://github.com/zeroclaw-labs/zeroclaw/issues/10929) RFC: Delivery receipts for outbound messages** — 出站消息投递回执。直接对应#10408 重复回复问题，**很可能与该 Bug 一同落地**。
- **[#11027](https://github.com/zeroclaw-labs/zeroclaw/issues/11027) RFC: Agent-to-agent session messaging with receiver discretion** — 跨 session 的 agent 间消息收发。路线图信号：项目开始构建 agent 协作层。
- **[#10315](https://github.com/zeroclaw-labs/zeroclaw/issues/10315) Re-add the browser enrollment frontdoor** — 在不手写 TLS 的前提下恢复浏览器注册前门（ZeroRelay 子项目）。
- **[#11017](https://github.com/zeroclaw-labs/zeroclaw/issues/11017) RFC: Preserve applicable reviews and simplify expedited merge decisions** — 治理类 RFC，简化加速合并条件。
- **[#10956](https://github.com/zeroclaw-labs/zeroclaw/pull/10956) feat(runtime): detect platform default shell** — 跨平台原生 shell 探测，已提交 PR，处于 needs-maintainer-review。
- **[#10990](https://github.com/zeroclaw-labs/zeroclaw/pull/10990) feat(observability): fingerprint the system and tools prefix on llm_request events** — 观测性增强，4 个前缀指纹属性。

**综合判断**：下一版本最有可能吃下的功能集中在"出站消息可靠性（#10929）"、"agent-human 通用门（#10930）"、"观测性指纹（#10990）"与"安全合规（#11026/#10860）"。

---

## 7. 用户反馈摘要

从评论与议题描述中提炼的真实痛点：

- **"配置存在但不生效"是最常见的挫败感来源**：#10068（context 上限）、#10536（macOS allowed_roots）、#9390（emergency stop 写文件但运行时无人读取）、#9812（fallback 携带主模型 id）。用户明确表达"按文档配置却拿不到预期行为"的失望。
- **"静默失败"比"明确失败"更让人难以接受**：#10523 的 6000 字符截断无任何提示、#10231 的 supervisor 重试无错误信息、#10230 的栈溢出发生在"一键 Quickstart"这种**新手最依赖的路径上**。
- **多通道一致性是反复出现的诉求**：WhatsApp Web（#10975、#10976）图片/Mention 双向坏、Matrix（#10925）voice mirror 模式尚未实现——用户希望 Telegram/Discord/Slack/WhatsApp/Matrix 在能力矩阵上对齐。
- **Operator UX 仍有大量毛刺**：#10379 描述"取消按钮点了没反应"是非常典型的桌面端 UX 反馈；#9363 提到本地化后 Config 元数据仍是英文，说明 i18n 流程在 **config metadata 这一层有断点**。
- **对治理透明度的呼声**集中在 #8692：维护者决策队列长期不刷新，让外部贡献者难以判断"我的 RFC 走到哪一步"。

**用户满意度信号**：未在 24 小时数据中观察到针对近期交付的明确"满意/感谢"型评论，整体反馈偏负向，反映维护者响应速度与新缺陷产生速度之间存在剪刀差。

---

## 8. 待处理积压

长期未响应/状态停滞的重要条目：

| 编号 | 类型 | 状态 | 备注 |
|---|---|---|---|
| [#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) | Tracker | 开放，2026-07-04 创建，in-progress | 已 2 个多月，是治理层元议题，维护者决策队列本身未被维护 |
| [#9390](https://github.com/zeroclaw-labs/zeroclaw/issues/9390) | Bug (S0) | 开放，2026-07-26 创建 | emergency stop 是"CLI-only state file"，属于安全关键路径 |
| [#10230](https://github.com/zeroclaw-labs/zeroclaw/issues/10230) | Bug (S1) | 开放，2026-08-21 创建，needs-repro | Quickstart 路径崩溃，影响新用户体验 |
| [#10231](https://github.com/zeroclaw-labs/zeroclaw/issues/10231) | Bug (S1) | 开放，2026-08-21 创建，stale | stale 标记本身说明响应超时 |
| [#10379](https://github.com/zeroclaw-labs/zeroclaw/issues/10379) | Bug (S0) | 开放，2026-08-26 创建，stale | 桌面端核心 UX |
| [#10408](https://github.com/zeroclaw-labs/zeroclaw/issues/10408) | Bug (S1) | 开放，2026-08-27 创建 | 并行回合引发重复回复，无 PR |
| [#10536](https://github.com/zeroclaw-labs/zeroclaw/issues/10536) | Bug (S1) | 开放，2026-09-02 创建 | macOS 沙箱配置失效 |
| [#9784](https://github.com/zeroclaw-labs/zeroclaw/issues/9784) | Bug (p2) | 开放，2026-08-06 创建，stale | SOP 中途失败无审计事件 |
| [#10315](https://github.com/zeroclaw-labs/zeroclaw/issues/10315) | Enhancement | 开放，2026-08-24 创建，accepted | 浏览器注册前门有 acceptance 但未进入实现阶段 |
| [#11006](https://github.com/zeroclaw-labs/zeroclaw/issues/11006) | Task | 已关闭（2026-09-21） | #102

</details>

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*