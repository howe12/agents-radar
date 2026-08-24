# OpenClaw 生态日报 2026-08-24

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-08-24 00:54 UTC

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

# OpenClaw 项目日报 · 2026-08-24

## 📌 今日速览

OpenClaw 仓库过去 24 小时维持高强度活动：**500 条 Issue 更新（455 活跃 / 45 关闭）+ 500 条 PR 更新（404 待处理 / 96 关闭）**，但**未发布任何新版本**。当前主线工作围绕 v2026.8.1-beta.2 的发布验证展开（[Issue #125626](https://github.com/openclaw/openclaw/issues/125626)，18 条评论），同时社区关注的焦点集中在**跨渠道消息丢失（P1 message-loss）**、**会话状态/会话键一致性**、以及**Codex app-server 与多个 LLM 提供商的回归问题**。整体活跃度偏高，但版本节奏出现明显延后迹象。

---

## 🚀 版本发布

**今日无新版本发布。** 最近一个 Beta 为 `v2026.8.1-beta.2`，仍处于 release-validation 阶段，未进入正式发布通道。

---

## 📈 项目进展

### 已关闭 / 已合并的重要 PR（按影响面排序）

| PR | 说明 | 状态 |
|----|------|------|
| [#126501](https://github.com/openclaw/openclaw/pull/126501) | `/v1/responses` 调用方支持设置 delivery target，让 subagent completion 可投递 | CLOSED |
| [#125471](https://github.com/openclaw/openclaw/pull/125471) | Control UI 中保持 Claude CLI OAuth 可用（修复 Gateway 重启后 refresh 归属丢失） | CLOSED |
| [#123975](https://github.com/openclaw/openclaw/pull/123975) | `tsgo` 包装脚本在 timeout/signal 下清理子进程树 | CLOSED |
| [#111745](https://github.com/openclaw/openclaw/pull/111745) | `safe-package-install` 不再冗余拉取所有 6 个 `@openai/codex` 平台二进制 | CLOSED（已修复） |
| [#112246](https://github.com/openclaw/openclaw/pull/112246) | Codex app-server `session-key` 绑定 tombstone 缺少 TTL，导致 web/dashboard GPT 会话被永久"砖"掉 | CLOSED（已修复） |
| [#111969](https://github.com/openclaw/openclaw/pull/111969) | foreground reply fence 无超时停放 turn 的回复 | CLOSED（已修复） |
| [#119796](https://github.com/openclaw/openclaw/issues/119796) | Windows vitest teardown 因 EBUSY 失败（SQLite handle 未释放） | CLOSED（issue） |
| [#109490](https://github.com/openclaw/openclaw/issues/109490) | Codex app-server: client-delegated 工具后 turn 被中断 | CLOSED（重复 issue） |
| [#79451](https://github.com/openclaw/openclaw/issues/79451) | `tools.deny` 未对 claude-cli backend 的 MCP 强制生效 | CLOSED（stale） |

### 推进方向判断
- **消息投递链路**是当前合并密度最高的领域（投递目标、Telegram/Slack/Discord/Signal 各自的边界修复）。
- **Doctor / 配置自愈能力**在持续加固（legacy models 兼容、`openai` provider id 注册）。
- **CI 与工具链治理**有可见推进（tsgo 进程治理、dependabot 批量升级 [#127700](https://github.com/openclaw/openclaw/pull/127700)）。

---

## 🔥 社区热点

### 评论数 Top Issues

| # | 标题 | 评论 | 链接 |
|---|------|------|------|
| #125626 | **Release validation: v2026.8.1-beta.2** | 18 | [🔗](https://github.com/openclaw/openclaw/issues/125626) |
| #119796 | Windows: vitest teardown EBUSY unlink on agent state DB（已关闭） | 15 | [🔗](https://github.com/openclaw/openclaw/issues/119796) |
| #121953 | Cron agent turns stall on DeepSeek — `[cron:<jobId>]` 消息前缀被降级 | 13 | [🔗](https://github.com/openclaw/openclaw/issues/121953) |
| #109490 | Codex app-server: turn interrupted after client-delegated message tool result（已关闭/重复） | 12 | [🔗（dup→#115400 等）](https://github.com/openclaw/openclaw/issues/109490) |
| #39476 | A2A `sessions_send`: 目标 agent 反向调用造成重复消息 | 12 | [🔗](https://github.com/openclaw/openclaw/issues/39476) |
| #6599 | Feature: `/models test-fallback` 命令 | 11 | [🔗](https://github.com/openclaw/openclaw/issues/6599) |
| #89278 | Codex OAuth refresh 成功但 cron/heartbeat 因 10s 超时失败 | 10 | [🔗](https://github.com/openclaw/openclaw/pull/89278) |
| #97616 | 子进程未被回收，zombie 累积 | 9 | [🔗](https://github.com/openclaw/openclaw/issues/97616) |

### 讨论诉求分析
- **#125626** 揭示 OpenClaw 已建立 Beta 版的 "real gateway 升级 + 校验 worksheet" 流程，社区测试参与度较高。
- **#121953**（DeepSeek cron 降级）和 **#89278**（Codex OAuth refresh 10s 超时）共同表明：**多家 LLM 供应商的边界行为未被 OpenClaw 完全覆盖**——尤其是边缘路径上的延迟与优先级。
- **#39476 / #109490 / #115400** 形成 `sessions_send` 投递语义集群，反映出 A2A 跨 agent 调用的"反身性"问题尚未稳定。

---

## 🐞 Bug 与稳定性

### P0（最高优先级，建议立即修复）
- **[#126821](https://github.com/openclaw/openclaw/issues/126821)** —— SQLite corruption 在重建后的干净 DB 上 15–24h 内复发（2026.8.1-beta.2 / WSL2），出现 "paralyzed gateway" 模式（拒绝所有 service 但不退出）。回归问题，5 天内 5 起。

### P1（按子领域分组）

**会话/投递丢失（最严重一类）**
- [#126246](https://github.com/openclaw/openclaw/issues/126246) Telegram durable outbound 卡在 `send_attempt_started`，重启后丢失
- [#127948](https://github.com/openclaw/openclaw/issues/127948) WhatsApp 群回复引用过期后渲染为空白气泡
- [#111944](https://github.com/openclaw/openclaw/issues/111944) Codex commentary 未投递到 Telegram progress/block streaming
- [#112668](https://github.com/openclaw/openclaw/issues/112668) `sessions_yield` abort-settle 2000ms 超时丢 subagent announce（2026.7.1-2 SQLite 重构后）
- [#96692](https://github.com/openclaw/openclaw/issues/96692) Slack thread 回复生成后丢失（origin tuple 失效）
- [#111358](https://github.com/openclaw/openclaw/issues/111358) `sessions_send` 静默回退为 webchat 消息
- [#102380](https://github.com/openclaw/openclaw/issues/102380) Slack 按钮交互应触发 reply turn 而非 heartbeat wake
- [#86214](https://github.com/openclaw/openclaw/issues/86214) Codex app-server 在 image/tool 请求中途中断
- [#115400](https://github.com/openclaw/openclaw/issues/115400) `sessions_send` 无同步等待选项，导致重复投递

**崩溃/资源/回归**
- [#97616](https://github.com/openclaw/openclaw/issues/97616) hook/tool 子进程未被回收，zombie 累积导致运行时退化
- [#91144](https://github.com/openclaw/openclaw/issues/91144) Windows native CLI Scheduled Task 无法常驻
- [#125825](https://github.com/openclaw/openclaw/issues/125825) Codex extension Vitest shard 在 collection 阶段静默 kill（CI 基础设施）
- [#108520](https://github.com/openclaw/openclaw/issues/108520) iOS app 自动更新后 Talk Mode 与 chat 失能（URGENT）

**LLM 兼容 / Provider**
- [#121953](https://github.com/openclaw/openclaw/issues/121953) Cron 在 DeepSeek 上 stall
- [#89278](https://github.com/openclaw/openclaw/issues/89278) Codex OAuth 10s refresh 超时
- [#119772](https://github.com/openclaw/openclaw/issues/119772) Logbook vision 缺少 generic model runtime fallback
- [#101672](https://github.com/openclaw/openclaw/issues/101672) `doctor --fix --deep` 缺少 `openai` provider id 注册，binding drift 无法自愈

**会话状态 / 上下文**
- [#111857](https://github.com/openclaw/openclaw/issues/111857) CLI budget 重新打开全量 compacted JSONL
- [#108215](https://github.com/openclaw/openclaw/issues/108215) `/status` 上下文占比 57%→13% 但无 compaction（同一会话）
- [#90098](https://github.com/openclaw/openclaw/issues/90098) 大附件上传触发 `RangeError: Maximum call stack`
- [#118028](https://github.com/openclaw/openclaw/issues/118028) `AbortSignal.any()` 破坏基于身份的 `===`/Map key 比较

### 已有关联 PR 的 Bug（已有 fix 路径）
| Issue | 状态 | 关联 PR |
|-------|------|---------|
| [#39476](https://github.com/openclaw/openclaw/issues/39476) | OPEN | 无明确关联 |
| [#86214](https://github.com/openclaw/openclaw/issues/86214) | OPEN, `linked-pr-open` | 修复 PR 存在 |
| [#96692](https://github.com/openclaw/openclaw/issues/96696) | OPEN, `linked-pr-open` | 修复 PR 存在 |
| [#108215](https://github.com/openclaw/openclaw/issues/108215) | OPEN, source-repro | 等待 PR |
| [#112668](https://github.com/openclaw/openclaw/issues/112668) | OPEN, source-repro | 等待 PR（`clawsweeper-recovery-stuck`） |
| [#128009](https://github.com/openclaw/openclaw/issues/128009) | 关联 PR [#128093](https://github.com/openclaw/openclaw/pull/128093)（Signal 红交付保留） | PR ready |
| [#111346](https://github.com/openclaw/openclaw/issues/111346) | 关联 PR [#126762](https://github.com/openclaw/openclaw/pull/126762) | PR ready |

---

## 💡 功能请求与路线图信号

| 需求 | Issue | 现状 |
|------|-------|------|
| `/models test-fallback` 命令 | [#6599](https://github.com/openclaw/openclaw/issues/6599) | P3，2026-02-01 提出，长期未动 |
| Kubernetes 安装文档更新 | [#91455](https://github.com/openclaw/openclaw/issues/91455) | P3，无 PR |
| UI 可用性与无障碍重设计 | [#75947](https://github.com/openclaw/openclaw/issues/75947) | P3，社区支持度高 |
| Slash command i18n 描述 | [#79458](https://github.com/openclaw/openclaw/issues/79458) | P3，dedupe parent |
| Per-agent MCP server 隔离 | [#72591](https://github.com/openclaw/openclaw/issues/72591) | P2，dedupe parent，security 影响 |
| Logbook vision 通用 fallback | [#119772](https://github.com/openclaw/openclaw/issues/119772) | P1，bug 形态，需求更强烈 |
| Global pre-routing interception | [#109353](https://github.com/openclaw/openclaw/issues/109353) | P2，已 CLOSED（duplicate），plugin 生态需求 |
| `SecretRef provider: default` 文档化 | [#121083](https://github.com/openclaw/openclaw/issues/121083) | P2，docs 改进 |

### 路线图判断
- **下一版本最可能纳入**：`/models test-fallback`（成熟提案 + 已有接受度）、`SecretRef default` 文档化（低风险 docs 修复）、WhatsApp replyRate（[#124305](https://github.com/openclaw/openclaw/pull/124305) PR 已存在）。
- **值得评估**：per-agent MCP 隔离（[#72591](https://github.com/openclaw/openclaw/issues/72591)）与 Logbook 通用 fallback，涉及性能与可扩展性，可能在 8.x 后段讨论。
- **积压风险**：K8s 文档与 UI 重设计属于"低优先但持续发酵"的需求，建议设立专项。

---

## 💬 用户反馈摘要

从 Issues 评论与标题语义可提炼以下典型用户痛点：

1. **Windows 是高摩擦平台**
   - Scheduled Task 无法保活（[#91144](https://github.com/openclaw/openclaw/issues/91144)）
   - vitest teardown 因 SQLite handle 锁失败（[#119796](https://github

---

## 横向生态对比

# AI 智能体 / 个人 AI 助手开源生态横向对比分析
**采样日期：2026-08-24｜样本项目：13 个（含 2 个零活跃）**

---

## 一、生态全景

2026-08-24 的生态快照呈现"**头部高强度迭代、尾部自然收缩**"的两极分化：OpenClaw（500 Issue + 500 PR）、Hermes Agent（50 + 50）、ZeroClaw（50 + 50）三足鼎立，单日吞吐远超中位项目，反映出用户规模与生态外延已经形成壁垒；中位项目（NanoBot、CoPaw、IronClaw、Moltis、NanoClaw）维持在 **5–25 PR / 2–9 Issue** 的"健康 sprint 节奏"；而 PicoClaw / LobsterAI 等则进入 stale bot 自动清理的"维护冷却期"。技术主轴高度收敛于**跨渠道消息投递、LLM Provider 兼容边界、MCP/Skills 插件化、Sandbox 凭证代理、内存压缩**五大方向，**但没有任何一个项目在这些方向上完成完整闭环**——这是当前生态的最大结构性机会。

---

## 二、各项目活跃度对比

| 项目 | Issues 更新 | PR 更新 | 今日 Release | 活跃度评级 | 关键信号 |
|---|---|---|---|---|---|
| **OpenClaw** | 500（455 活 / 45 关） | 500（404 待 / 96 关） | ❌ 无（β2 验证中） | 🔴 **极高** | P0 SQLite 复发 + Beta 卡 release-validation |
| **Hermes Agent** | 50（19 / 31） | 50（21 / 29） | ❌ 无（v0.20.5 基线） | 🟠 **高** | 6 个长期挂起 PR 被 salvage 闭环 |
| **ZeroClaw** | 50（38 新 / 12 关） | 50（45 待 / 5 关） | ❌ 无 | 🟠 **高** | 前 5 热点全为 RFC（runtime/attachment/memory） |
| **NanoClaw** | 5 新 | 20 关 / 30 待 | ⚠️ v2.3.0 待打 tag | 🟡 **中高** | 栈式 PR #3490→#3491→#3492 + 补丁 #3496 |
| **IronClaw** | 9 新 / 活 | 23（18 待 / 5 关） | ❌ 无 | 🟡 **中高** | CI 重构 4 轨并行 + Slack triage 集中入站 |
| **NanoBot** | 2 | 19（14 待 / 5 关） | ❌ 无 | 🟡 **中** | 配置编辑统一化 + Docker OAuth 已闭环 |
| **CoPaw** | 5 新 / 活 | 15（7 待 / 8 关） | ❌ 无 | 🟡 **中** | P0 内存累积 20.7GB（#7222） |
| **Moltis** | 3 | 6（6 待 / 0 关） | ❌ 无 | 🟢 **中** | memory/skills/cron 全方位稳定性补丁 |
| **NullClaw** | 1 新 | 0 | ❌ 无 | 🟢 **低** | 单 P0：stdio MCP 锁竞争无限挂起 |
| **PicoClaw** | 0 新 | 1 新 / 5 stale 关 | ❌ 无 | 🔵 **冷却** | 5 个有价值 PR（含 SSRF 修复）被 stale 误杀 |
| **LobsterAI** | 0 新 | 0 新 / 3 stale 关 | ❌ 无 | 🔵 **冷却** | P0 API Key 泄漏 (#1202) 未修复 |
| TinyClaw | 0 | 0 | ❌ 无 | ⚫ **休眠** | 过去 24h 零活动 |
| ZeptoClaw | 0 | 0 | ❌ 无 | ⚫ **休眠** | 过去 24h 零活动 |

> 注："活跃度评级"综合了 PR/Issue 绝对量、关闭率、维护者响应密度三因素，**非单纯数量指标**。

---

## 三、OpenClaw 在生态中的定位

### 1. 规模优势
OpenClaw 的 **500 Issue + 500 PR / 日** 是 Hermes Agent / ZeroClaw 的 **10 倍**，是中位项目的 **20–100 倍**。这种绝对体量本身就是生态护城河——但同时也意味着：

- **关闭率最低**：96/500 = 19% PR 关闭率，显著低于 Hermes Agent 的 58%、ZeroClaw 的 10%（虽然后者 PR 池更小）；
- **噪音密度最高**：500 条事件中 P0 仅 1 条（#126821），社区注意力被严重稀释。

### 2. 与 ZeroClaw / Hermes Agent 的关键差异

| 维度 | OpenClaw | ZeroClaw | Hermes Agent |
|---|---|---|---|
| 当前主线 | β 版发布验证（#125626） | RFC 架构重构（10+ RFC 并行） | salvage 长期挂起 PR |
| 工作模式 | 事件驱动 / bug-driven | 契约驱动 / RFC-driven | 维护者主导 salvage |
| 渠道广度 | 多（5+ 平台并行修） | 极广（Mastodon/Zulip/Twilio/Gemini Live） | 中（聚焦 Desktop/i18n） |
| LLM 兼容 | 多 Provider 边界暴露（DeepSeek/Codex） | 供应商中立 | Nous 主线 + 视觉探测 |
| 风险点 | 版本节奏延后、SQLite 复发 | RFC 积压决策 | P1 #83529 升级器灾难无 PR |

### 3. 技术路线独特性
OpenClaw 的"**Beta 校验 worksheet + 多平台 upgrade gate**"流程（#125626）目前是生态内**最成熟的发布前验证机制**，但 v2026.8.1-beta.2 长期卡在 release-validation 暴露了流程效率问题——这与 ZeroClaw 的"Maintainer decision queue"（#8692）、Hermes 的"salvage backlog"是同一结构性问题的不同表现。

---

## 四、共同关注的技术方向

以下需求在**至少 3 个项目**中独立浮现，构成生态级共识：

| # | 技术方向 | 涉及项目 | 具体诉求 |
|---|---|---|---|
| 1 | **跨渠道消息投递语义** | OpenClaw（11 条 P1）、NanoClaw（#2404 双投递）、ZeroClaw（#9488 attachment 架构）、NanoBot（#5495 Linear） | "反身性 A2A"、"sessions_send 静默回退"、"双输出通道去重"——投递语义缺乏统一抽象 |
| 2 | **MCP 协议演进** | PicoClaw（#3302 OAuth 2.1）、NanoBot（#5386/#5388）、ZeroClaw、NullClaw（#991） | 从 stdio MCP 锁竞争 → OAuth 2.1 授权 → MCP Apps metadata 保留，**生态尚未稳定** |
| 3 | **macOS / Windows 平台兼容性** | OpenClaw（vitest EBUSY #119796 + iOS #108520）、NanoClaw（#3497 Node 22.14、#3498 realpath）、NullClaw（#991 Proxmox）、Hermes（#83529 Debian、#91115 macOS keychain） | 路径解析（realpath）、Node 版本下限、签名/safeStorage、容器内 stdio 是共同痛点 |
| 4 | **Skills / Plugin 标准化** | Hermes（#64392 重名三处分歧 + #93378 per-skill reasoning）、ZeroClaw（#9810 Agent Plugins 1.0 + #10076 WASM）、Moltis（#1234 sidecar 物化）、NanoBot（#5388 MCP schemas）、OpenClaw（#72591 per-agent MCP 隔离） | "plugin 一切" vs "skill 一切" 路径分裂，OpenClaw 在 per-agent 隔离上有可见优势 |
| 5 | **内存压缩 / 上下文管理** | OpenClaw（#108215 57%→13% 无 compaction + #112668 SQLite 重构）、Hermes（#87013/#93241 压缩有界化）、Moltis（#1236 GGUF 嵌入崩溃）、ZeroClaw（#6850 memory lifecycle RFC） | 各家"健康压缩"概念互不兼容，**长会话稳定性是隐性 P0** |
| 6 | **Sandbox / 凭证代理** | PicoClaw（SSRF 三连 #3322-#3324 全未合并）、ZeroClaw（#6996 granular sandbox + #8424 .zeroclawignore + #10250 插件 egress）、IronClaw（#7732 v1.4.0 epic 全栈）、OpenClaw（#9703 Goal mode v3） | IronClaw 的 iron-proxy sidecar 模式最完整，但生态标准尚未形成 |
| 7 | **移动伴生 / 手机配对通道** | PicoClaw（#3344 `gbr/1` 新增）、NanoClaw（#3494 同协议同步） | 同一协议族在两个项目同步出现，**可能是新生态标准** |

---

## 五、差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 技术架构特征 |
|---|---|---|---|
| **OpenClaw** | 多渠道 + 多 LLM gateway | 全栈开发者 / SaaS 集成方 | TypeScript 大单体 + Codex app-server 子系统 |
| **ZeroClaw** | 架构纯净 + WASM 插件 | 平台型开发者 / 长期主义者 | Rust 倾向，RFC-driven，契约严格 |
| **Hermes Agent** | SSH/桌面/视觉探测 | 个人重度用户 / Nous 生态 | Python + Electron Desktop + 安全护栏优先 |
| **NanoBot** | 配置 UX + 多通道 | Python 开发者 / 跨平台用户 | Python + Bun 子进程 + schema-driven 配置 |
| **NanoClaw** | Qwen 系 + 国产 IM | 国内企业 / QwenPaw 客户 | chat-sdk 4.32 锁定 + 全频道锁步 |
| **IronClaw** | Sandbox + 凭证代理 | 企业 / 合规要求高的团队 | Docker + iron-proxy sidecar，NEAR AI 品牌 |
| **CoPaw** | 多 agent 平台 | 平台构建者 / AgentScope 用户 | 多 agent runtime + Skill 动态化 |
| **Moltis** | 本地记忆 / cron / 技能 | 本地优先 / Rust 爱好者 | Rust + 本地 GGUF embed + skills sidecar |
| **PicoClaw** | SiPEED 硬件 + 移动伴生 | 嵌入式 / IoT + 移动用户 | 精简 runtime + gbr/1 协议 |
| **NullClaw** | 极简 / stdio MCP | Homelab / 最小依赖用户 | 最小化架构 + systemd 化 |
| **LobsterAI** | NIM / 网易生态 | 国内云信 IM 集成方 | Chromium 内嵌 + Agent 卡 |

---

## 六、社区热度与成熟度分层

### 🟢 快速迭代层（功能性 sprint）
- **OpenClaw**：Beta 验证 + P1 修复密度最高，**"边修边发"节奏**。
- **NanoBot**：19 PR / 日，配置层与通道层双轨推进。
- **CoPaw**：8 PR 关 / 日，但 **P0 内存泄漏未受关注**——是隐患。
- **NanoClaw**：v2.3.0 栈式 PR + 补丁 PR，**纪律性最强**。

### 🟡 质量巩固层（稳定性 + 架构层）
- **ZeroClaw**：几乎全部活动为 RFC，**已进入"协议重构期"**，开发速度被协议决策拖累。
- **IronCl

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目日报 · 2026-08-24

> 数据来源：[HKUDS/nanobot](https://github.com/HKUDS/nanobot) · 采样窗口：过去 24 小时

---

## 一、今日速览

NanoBot 过去 24 小时呈现出**高活跃度**态势：共产生 2 条 Issue 更新和 19 条 PR 更新，虽然没有新版本发布，但代码侧的提交非常密集。值得关注的趋势是社区聚焦于**配置编辑体验统一化**（#5497/#5498）、**Provider/TLS 健壮性**（#5480/#5500）以及**多通道生态扩展**（#5495 Linear、#5385 Matrix）三条主线。维护者 [chengyongru](https://github.com/chengyongru) 仍是绝对主力，贡献了今日 14 条 OPEN PR 中的 6 条，核心模块重构正在稳步推进。整体而言项目处于**活跃迭代期**，无 P0 级事故，但有多条 P2 级 backlog 需要消化。

---

## 二、版本发布

**无新版本发布。** 今日未触发任何 tag/release 事件。

---

## 三、项目进展（今日关闭/合并的 PR）

| PR | 标题 | 状态 | 影响 |
|---|---|---|---|
| [#5445](https://github.com/HKUDS/nanobot/pull/5445) | fix(docker): persist OAuth client data | CLOSED | ✅ **修复了 [#5444](https://github.com/HKUDS/nanobot/issues/5444) Docker 中 OAuth 登录失败的 Bug**，通过将 XDG 应用数据重定向到挂载目录，并保留 OAuth 凭证可写性（即使入口进程降权至非 root 用户） |
| [#5492](https://github.com/HKUDS/nanobot/pull/5492) | feat(cli): expose nanobot process identities | CLOSED | ✅ Python CLI 进程按角色命名（`nanobot-agent` / `nanobot-webui` / `nanobot-gateway`），Bun 子进程显式标识为 `nanobot-tui`，提升运维可观测性 |
| [#5491](https://github.com/HKUDS/nanobot/pull/5491) | fix(webui): keep answer text outside reasoning shell | CLOSED | ✅ 修复 WebUI 中多轮 answer → tool → answer 时答案文本被吞入 reasoning 面板的渲染问题 |
| [#5475](https://github.com/HKUDS/nanobot/pull/5475) | refactor: remove remaining dead code | CLOSED | ✅ 清理零消费者辅助代码、未使用的 `websocket-client` 依赖，收窄 WebUI/TUI 导出面，技术债显著下降 |
| [#5420](https://github.com/HKUDS/nanobot/pull/5420) | feat(runtime): add user-controlled turn recovery | CLOSED | ✅ 引入受控的 turn recovery（WebUI/TUI 显式 Continue/Dismiss），避免自动恢复带来的不可预期副作用 |

**进展评估**：今日 5 个关闭 PR 中 3 个属于用户面改进（OAuth、Turn 恢复、WebUI 渲染），2 个属于工程治理（进程命名、清理死代码）。整体推进了约 **5 个具体痛点**，项目在"生产可用性"维度有明显跃升。

---

## 四、社区热点

### 今日最高互动 Issue
- **[#5444 Failed to ogin OpenAI via OAuth in Docker](https://github.com/HKUDS/nanobot/issues/5444)** — 2 条评论，已闭环。Docker 部署场景下 OAuth 回调链路存在权限/目录双重问题，本次被 [#5445](https://github.com/HKUDS/nanobot/pull/5445) 完整修复，形成 Issue↔PR 的良性闭环。

### 今日新增 Issue
- **[#5493 增加 html，.txt .md 文档等预览](https://github.com/HKUDS/nanobot/issues/5493)** — 用户 [john00010](https://github.com/john00010) 提出在 channel（微信/飞书/Telegram）中预览 HTML/TXT/MD 文档的诉求，建议方案为原生 iframe + srcdoc 沙箱隔离。该需求直击"消息通道内容呈现"短板，与 [#5495 Linear Channel](https://github.com/HKUDS/nanobot/pull/5495) 的方向高度互补。

### 高 PR 互动
- **[#5480 refactor(providers): define typed LLM usage contract](https://github.com/HKUDS/nanobot/pull/5480)** — 涉及 OpenAI Chat/Responses、Anthropic、Bedrock 多个 wire 层的 token 与 cache 语义统一，是当前最核心的基础设施重构之一。

---

## 五、Bug 与稳定性

按严重程度排序：

| 严重度 | 标题 | 状态 | Fix PR |
|---|---|---|---|
| 🔴 **P2 / 用户流程阻断** | [Issue #5444 Docker 中 OAuth 登录失败](https://github.com/HKUDS/nanobot/issues/5444) | ✅ 已关闭 | [#5445](https://github.com/HKUDS/nanobot/pull/5445) 已合并 |
| 🟠 **P2 / 性能回归** | [PR #5500 Codex TLS 上下文重建导致请求卡顿](https://github.com/HKUDS/nanobot/pull/5500) | OPEN（含并发回归测试） | 自带 fix |
| 🟠 **P2 / WebUI 显示错位** | [PR #5491 WebUI 答案被吞入 reasoning](https://github.com/HKUDS/nanobot/pull/5491) | ✅ 已关闭 | — |
| 🟡 **P2 / 资源泄漏** | [PR #5430 AgentLoop `_active_tasks` 不释放](https://github.com/HKUDS/nanobot/pull/5430) | OPEN | 自带 fix |
| 🟡 **P2 / 资源浪费** | [PR #5499 TUI 打开空目录就持久化空 session](https://github.com/HKUDS/nanobot/pull/5499) | OPEN | 自带 fix |
| 🟡 **P2 / 渲染口径** | [PR #5490 WebUI 聚合 token 用量歧义](https://github.com/HKUDS/nanobot/pull/5490) | OPEN | 自带 fix |

**稳定性评估**：今日无 P0 级崩溃报告；之前发现的 OAuth Docker 关键路径已闭环；Codex TLS 性能问题（[#5500](https://github.com/HKUDS/nanobot/pull/5500)）通过 py-spy 抓取锁定根因，是后续版本的重要修复候选。

---

## 六、功能请求与路线图信号

### 新增需求
- **[#5493 HTML/TXT/MD 文档预览](https://github.com/HKUDS/nanobot/issues/5493)** — 单 channel 多媒体支持层面的空白点。

### 已在路上、可能合入下版本的 PR
| PR | 路线图位置 | 概率评估 |
|---|---|---|
| [#5498 unify onboarding in Agent TUI](https://github.com/HKUDS/nanobot/pull/5498) | 配置编辑 UX 统一 | ⭐⭐⭐⭐⭐（schema-driven 已就位） |
| [#5497 shared complete editor contract](https://github.com/HKUDS/nanobot/pull/5497) | 同上基础设施 | ⭐⭐⭐⭐⭐（#5498 的前置） |
| [#5495 native Linear Agent channel](https://github.com/HKUDS/nanobot/pull/5495) | 通道生态扩展 | ⭐⭐⭐⭐（feature 完整，含 OAuth+PKCE） |
| [#5496 no-tools model request timeout](https://github.com/HKUDS/nanobot/pull/5496) | Agent 健壮性 | ⭐⭐⭐⭐（覆盖三类 finalization 路径） |
| [#5388 budget model-visible MCP schemas](https://github.com/HKUDS/nanobot/pull/5388) | MCP 优化 | ⭐⭐⭐（默认关闭，影响可控） |
| [#5386 preserve MCP Apps result metadata](https://github.com/HKUDS/nanobot/pull/5386) | MCP 优化 | ⭐⭐⭐ |
| [#5385 Matrix Element SAS 完成](https://github.com/HKUDS/nanobot/pull/5385) | 通道生态 | ⭐⭐⭐（跨会话安全模型需要讨论） |

**信号解读**：维护者正同步推进**配置层重构**（#5497 + #5498）与**通道层扩展**（#5495 + #5385），形成"TUI/WebUI 双端体验 + 多平台通道接入"的下一阶段蓝图。#5493 的 HTML 预览需求尚未被任何 PR 覆盖，建议关注。

---

## 七、用户反馈摘要

从今日仅有的活跃 Issue 评论中提炼：

1. **痛点 — Docker OAuth 链路复杂**（[#5444](https://github.com/HKUDS/nanobot/issues/5444)）
   - 用户在容器中跳转回调 URL（`http://localhost:1455/auth/callback`）后，token 交换阶段直接失败。
   - 真实使用场景：**容器化部署 + OAuth 第三方登录**。
   - 用户期望：与本地安装一致的零配置体验。
   - 满意度：本次修复后从"无法登录"升级到"凭证可持久化跨容器重建"，满意度上升。

2. **诉求 — 多模态预览**（[#5493](https://github.com/HKUDS/nanobot/issues/5493)）
   - 用户动机：在飞书/微信/Telegram 中直接渲染 Markdown 报告与 HTML 富文本。
   - 真实场景：**机器人作为报告分发端**，而非仅对话端。
   - 用户已有方案：iframe + srcdoc 沙箱。
   - 满意度：当前未实现，潜在需求尚未被满足。

> 注：今日多数 PR 来自核心维护者自驱改进，用户侧的主动反馈样本较薄。

---

## 八、待处理积压（提醒维护者关注）

### 长期未合并的重要 PR
| PR | 标题 | 创建时间 | 等待天数 |
|---|---|---|---|
| [#5152](https://github.com/HKUDS/nanobot/pull/5152) | fix(subagent): mark partial completion results | 2026-07-28 | **27 天** ⚠️ |
| [#5385](https://github.com/HKUDS/nanobot/pull/5385) | fix(matrix): complete Element SAS request flow | 2026-08-13 | 11 天 |
| [#5388](https://github.com/HKUDS/nanobot/pull/5388) | feat(agent): budget model-visible MCP schemas | 2026-08-13 | 11 天 |
| [#5386](https://github.com/HKUDS/nanobot/pull/5386) | feat(mcp): preserve MCP Apps result metadata | 2026-08-13 | 11 天 |
| [#5430](https://github.com/HKUDS/nanobot/pull/5430) | fix(agent): release completed task groups | 2026-08-18 | 6 天 |
| [#5467](https://github.com/HKUDS/nanobot/pull/5467) | fix(tui): preserve launch context in resume commands | 2026-08-21 | 3 天（标记 conflict） |
| [#5480](https://github.com/HKUDS/nanobot/pull/5480) | refactor(providers): define typed LLM usage contract | 2026-08-21 | 3 天（标记 conflict） |

### 重点提醒
- **🚨 [#5152](https://github.com/HKUDS/nanobot/pull/5152)** 已停留近一个月，涉及 subagent partial completion 的语义修正，长期不响应会拖慢后续相关 PR 的合并节奏，建议维护者优先 review。
- **⚠️ [#5467](https://github.com/HKUDS/nanobot/pull/5467) 与 [#5480](https://github.com/HKUDS/nanobot/pull/5480) 标记 conflict**，说明主干近期合并活跃，贡献者需要 rebase。
- **Issue 端积压**：今日新开 [#5493](https://github.com/HKUDS/nanobot/issues/5493) 暂无维护者认领，建议在下次社区周会或路线图讨论中给出明确回应。

---

### 健康度总评

| 维度 | 评分 | 说明 |
|---|---|---|
| 活跃度 | ⭐⭐⭐⭐⭐ | 19 个 PR 更新，单日提交密度高 |
| 稳定性 | ⭐⭐⭐⭐ | P0 事故为零，关键 Docker OAuth 已闭环 |
| 社区反馈 | ⭐⭐ | 用户主动 Issue 较少，反馈回路待加强 |
| 路线图清晰度 | ⭐⭐⭐⭐ | 配置层 + 通道层两条主线明确 |
| PR 处理吞吐 | ⭐⭐⭐ | 5 个关闭 vs 14 个 OPEN，存在净积压趋势 |

> 📌 建议关注：[#5152](https://github.com/HKUDS/nanobot/pull/5152) 超期未审、[#5493](https://github.com/HKUDS/nanobot/issues/5493) HTML 预览认领、Codex TLS 修复 [#5500](https://github.com/HKUDS/nanobot/pull/5500) 进入 release 候选。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目日报
**日期：2026-08-24**
**仓库：[NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent)**

---

## 1. 今日速览

Hermes Agent 仓库在 2026-08-24 维持了**高强度的双周冲刺式维护节奏**：过去 24 小时共处理 50 条 Issue（19 条活跃、31 条关闭，**关闭率 62%**）和 50 条 PR（21 条待合并、29 条已合并/关闭，**合并/关闭率 58%**）。维护者团队（尤其 `@teknium1`）以"salvage"形式集中闭环了 6 个此前长期挂起或被错过的修复 PR，覆盖 SSH 配置写崩、压缩冷却、视觉探测、Gateway 守护、Checkpoint 原子化等关键路径。**当日无新版本发布**，所有变更均通过 PR 累积在 main 分支，等待下一次版本切割。

---

## 2. 版本发布

**今日无新版本发布。** 最近可参考的稳定版仍为 Hermes Agent **v0.20.5**（2026.8.19），多个 P1/P2 Bug 报告（如 #83529、`hermes update - destroys hermes`）发生在 v0.20.0–v0.20.5 之间，提示社区可能正在为 v0.20.6 或 v0.21.0 准备窗口。

---

## 3. 项目进展

今日多个长期挂起的回归与安全缺陷被一次性闭环，叠加若干新功能落地，整体推进显著：

| PR | 主题 | 意义 |
|---|---|---|
| [#93385](https://github.com/NousResearch/hermes-agent/pull/93385) | **修复 SSH 配置写入崩溃**（salvage #87735 + #93215） | 恢复 `~/.ssh/config` 的人机审批保护，不再因 `TypeError` 跳过审批 |
| [#93330](https://github.com/NousResearch/hermes-agent/pull/93330) | **修复 launchctl 标签绕过 Gateway 生命周期守护** | 防止 `label=${item%%:*}` 这类变量构造方式静默卸载 launchd 任务（#77083 事件曾导致 4 个 profile 的 launchd 任务被无审批清空） |
| [#93328](https://github.com/NousResearch/hermes-agent/pull/93328) | **修复含生命周期词的文件路径误触发守护** | 负向 lookbehind 让 `/docs/hermes gateway restart-notes.md` 之类合法路径不再被错拦 |
| [#93383](https://github.com/NousResearch/hermes-agent/pull/93383) | **视觉探测不再指纹扫描远端 endpoint**（fix #89863） | 修复 `openai-codex` 提供商 CLI 卡 banner、以及向带密钥的 sglang/vLLM 喷 401 的问题 |
| [#87013](https://github.com/NousResearch/hermes-agent/pull/87013) | **压缩健康超时不再阻塞活动压缩** | 让 hygiene 重试拥有独立冷却状态，避免长 prefill 被整体跳过 |
| [#93241](https://github.com/NousResearch/hermes-agent/pull/93241) | **大会话压缩有界化** | 区分 idle 超时 vs 总量耗尽，防止 fence 拥有的辅助压缩意外关闭共享客户端 |
| [#93376](https://github.com/NousResearch/hermes-agent/pull/93376) | **Checkpoint 原子激活（generation selector）** | 修复损坏 store 的离线修复路径，避免半激活态污染 |
| [#93386](https://github.com/NousResearch/hermes-agent/pull/93386) | **服务身份 root 限定** | 修复多 `HERMES_HOME` 时 launchd plist / systemd unit 名冲突（#93349） |
| [#81429](https://github.com/NousResearch/hermes-agent/pull/81429) | **IMAP FETCH 协议帧字节处理** | 不再假设 RFC822 总是 `data[0][1]`，畸形响应可重试 |
| [#93378](https://github.com/NousResearch/hermes-agent/pull/93378) | **新增：按 Skill 配置 reasoning effort** | 用户可按 skill 名字配置独立推理等级，opt-in、默认不变 |
| [#92479](https://github.com/NousResearch/hermes-agent/pull/92479) | **新增：Desktop "选中→聊天"** | 通用化"Add to chat"，支持聊天记录引用与图片裁剪 |
| [#93379](https://github.com/NousResearch/hermes-agent/pull/93379) | **移除从未执行的 kanban 压力套件** | 清理永远 no-op 的 `--run-stress` 与脚本 |
| [#92862](https://github.com/NousResearch/hermes-agent/pull/92862) | **CJK 强调走官方 @streamdown/cjk 插件** | 修复 `**"공개 문서는 점검한다"**는 원칙입니다.` 等 CJK 标点闭合失败 |
| [#92850](https://github.com/NousResearch/hermes-agent/pull/92850) | **Bot Mode 花名册右键菜单本地化** | 跟随 `display.language`，提供 `en`/`ja`/`zh` 插件化 i18n 资源 |
| [#89870](https://github.com/NousResearch/hermes-agent/pull/89870) / [#92892](https://github.com/NousResearch/hermes-agent/pull/92892) | **视觉探测带 API key + 失败判定缓存** | 修复带密钥本地 server（llama.cpp `--api-key`、认证后的 Ollama）探测 |
| [#93380](https://github.com/NousResearch/hermes-agent/pull/93380) | **最大迭代警告不再污染 -Q/oneshot stdout** | 严格模式下警告只进日志，机器可读输出保持干净 |

此外，多个 Desktop WebSocket / 会话恢复相关 Bug 被集中关掉（#75756、#85834、#90428、#89083、#79229、#91684、#82872、#83716、#79635、#85578 等），显示维护团队对 Desktop 长期会话稳定性做了系统性收尾。

**整体评估：本日仓库在"安全护栏（Gateway/SSH 守护） + 稳定性（WS/压缩/Checkpoint） + 可用性（i18n/CJK/Desktop UX）"三条线同步推进，节奏可视为一次小版本级别（minor release）的累积。**

---

## 4. 社区热点

按评论数排序的当日最热议题：

1. **[#66616](https://github.com/NousResearch/hermes-agent/issues/66616) — Skills Index 停滞/降级（84 评论，仍 OPEN）**
   自动探针显示统一索引已 **29.8 小时未刷新**（上限 26h），`/docs/api/skills-index.json` 是 `/docs/skills` 整个 Skills Hub 的依赖。重建依赖 `.github/workflows/skills-index.yml`（cron 6/18 UTC）和 `.github/workflows/deploy-site.yml`。84 条评论说明社区对 Skills Hub 文档与发现性高度依赖。

2. **[#93063](https://github.com/NousResearch/hermes-agent/issues/93063) — Fedora 44 安装失败（9 评论，OPEN）**
   用户 `i300220` 反馈 `curl … install.sh | bash` 在 Fedora 44 上失败，质疑安装脚本对非 Debian 系的兼容性。

3. **[#83529](https://github.com/NousResearch/hermes-agent/issues/83529) — `hermes update - destroys hermes`（9 评论，OPEN，P1）**
   `@eabase` 在 Debian Trixie / Hermes Agent v0.20.0 上 `hermes update` 后**灾难性失败**，昨日还能正常用。涉及更新器与 `python:uv` 通道的兼容性，**截至发稿尚无对应 fix PR 公开**。

4. **[#75756](https://github.com/NousResearch/hermes-agent/issues/75756) — Desktop 编辑早期消息失败（9 评论，已 CLOSED）**
   "Edit failed / session not found"，rewind 缺乏 resume+retry。标记为 P1。今日被同一根因的 #79229 重复 issue 一起收掉（duplicate），但用户 `@networthexplained` 的修复路径是否完全落地仍需追踪。

5. **[#91115](https://github.com/NousResearch/hermes-agent/issues/91115) — macOS 更新后 keychain 反复弹窗（8 评论，OPEN）**
   `@DavidMetcalfe` 指出 ad-hoc 重新签名导致 SafeStorage ACL 失效，每次启动都弹 keychain 授权；Python updater 无法在 Electron 侧持久化签名身份。提议**proof-carrying safeStorage rotation**。

6. **[#93091](https://github.com/NousResearch/hermes-agent/issues/93091) — Bot Mode 可靠性计划（7 评论，OPEN，needs-decision）**
   `@kshitijk4poor` 提出 4 个统一方向：**类型化失败原因、信封 TTL、attention 徽章、leader 路由的群房间 + 重试 session policy**。这是 Bot Mode 多智能体协调的**路线图级提案**，需要维护者决策。

7. **[#64392](https://github.com/NousResearch/hermes-agent/issues/64392) — Skill 重名三种行为不一致（6 评论，OPEN）**
   `skills list` 静默保留首名 / 系统提示重复声明 / `skill_view` 二次解析，三处行为分裂。

**诉求归纳：** 社区最焦虑的是 (a) 文档基础设施的可用性（Skills Index）、(b) Desktop/CLI 在长时间运行/弱网下的会话完整性、(c) 跨平台（Fedora、macOS）安装/更新流畅度、(d) Bot Mode 多智能体的可靠性语义统一。

---

## 5. Bug 与稳定性

按严重程度排序：

### P1（核心功能不可用）
- **[#83529 `hermes update - destroys hermes`](https://github.com/NousResearch/hermes-agent/issues/83529)** — Debian Trixie 上 v0.20.0 更新的灾难性失败。**OPEN，无对应 fix PR**，维护者需优先响应。
- **[#93251 Parallel tool batches of ≥4 calls lose ALL results](https://github.com/NousResearch/hermes-agent/issues/93251)** — 当一条助手消息携带 ≥4 个并行 tool call 时，运行时**整批丢失**结果（全部返回 `[Result unavailable]`）；1–3 个并行正常。**CLOSED**，但今日未列出明确对应的修复 PR，建议核对是否被 [#87013](https://github.com/NousResearch/hermes-agent/pull/87013) 或其他压缩相关 PR 涵盖。

### P2（功能受损 / 用户体验破坏）
- **[#93063 Fedora 44 安装失败](https://github.com/NousResearch/hermes-agent/issues/93063)** — OPEN。
- **[#91115 macOS keychain 反复弹窗](https://github.com/NousResearch/hermes-agent/issues/91115)** — OPEN，提议 proof-carrying rotation。
- **[#69940 Desktop WebSocket 每 ~17 分钟断连（1012）](https://github.com/NousResearch/hermes-agent/issues/69940)** — OPEN，孤儿会话被 `ghost_session_prune_v1` 收掉，聊天丢失。
- **[#93087 SQLite 畸形 schema 逃逸探针导致持久化失效](https://github.com/NousResearch/hermes-agent/issues/93087)** — CLOSED。
- **[#93044 Docker 沙箱会话 ID 含冒号触发 `invalid mode: /root`](https://github.com/NousResearch/hermes-agent/issues/93044)** — CLOSED（duplicate）。
- **[#93056 `session.list` exact-title 跳过 archived](https://github.com/NousResearch/hermes-agent/issues/93056)** — CLOSED（duplicate）。
- **[#92984 Langfuse 占位 API key 静默失败](https://github.com/NousResearch/hermes-agent/issues/92984)** — CLOSED（duplicate）。
- **[#93107 Mattermost 跨平台同步停滞（cursor drift）](https://github.com/NousResearch/hermes-agent/issues/93107)** — CLOSED（duplicate）。
- **[#92832 Desktop BOTS 面板空白（perpetual spinner）](https://github.com/NousResearch/hermes-agent/issues/92832)** — CLOSED，根因为 PR #90006 合并丢失 `activeBotRoute()`。
- **[#64392 Skill 重名三处分歧](https://github.com/NousResearch/hermes-agent/issues/64392)** — OPEN。
- **[#87025 doctor/npm audit 主干高危](https://github.com/NousResearch/hermes-agent/issues/87025)** — OPEN，最小修复为 nanoid 3.3.18 + vite 8.2.1 override。
- **[#77173 Gateway terminal 守护对全路径二进制误报](https://github.com/NousResearch/hermes-agent/issues/77173)** — CLOSED。

### P3（边角 / 文案 / 安全边界）
- **[#54634 macOS Desktop 文字下行字母裁剪](https://github.com/NousResearch/hermes-agent/issues/54634)** — CLOSED（duplicate）。
- **[#4251 `/review` 命令缺失](https://github.com/NousResearch/hermes-agent/issues/4251)** — CLOSED（长期 UX 呼声）。

**整体观察：** 今日 Bug 关闭/重复标记密度极高，但**仍有数个高优先级问题（尤其 #83529 P1 升级器问题）无对应 PR**，且 Desktop 在弱网/休眠场景下的会话生命周期反复暴露（#69940、#89083、#90428、#85578 等），提示 WebSocket 健康检查与孤儿会话回收机制仍是**结构化债务**。

---

## 6. 功能请求与路线图信号

- **[#93091 Bot Mode 可靠性计划](https://github.com/NousResearch/hermes-agent/issues/93091)** — 类型化失败原因 + 信封 TTL + attention 徽章 + leader 路由群房间 + 重试 session policy。已挂 `needs-decision`，是 Bot Mode 路线图的核心候选。
- **[#4251 `/review` 命令](https://github.com/NousResearch/hermes-agent/issues/4251)** — 每个竞品 CLI 都有的内置代码评审能力。CLOSE 状态意味着该需求已合并/转交实现，值得在 release notes 标注。
- **[#93378 Per-skill reasoning effort](https://github.com/NousResearch/hermes-agent/pull/93378)** — OPEN 新功能 PR：按 skill 名配置独立推理等级、opt-in、defaults 不动。具备**进入下个版本的高可能性**。
- **[#92479 Desktop 选中→聊天](https://github.com/NousResearch/hermes-agent/pull/92479)** — OPEN：聊天记录引用 (`@message:<id>`) + 图片裁剪到 composer。已被合并

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目日报 · 2026-08-24

## 1. 今日速览

过去 24 小时 PicoClaw 仓库活跃度**显著偏低**：无新版本发布，无新 Issue 提交，仅有 1 条全新 PR（#3344）。当日关闭的 2 条 Issue 与 5 条 PR 均带 **[stale]** 标签，属于 GitHub stale-bot 在长期无更新后执行的自动化清理，**并非维护者主动评审决定**。社区互动指标（评论数、👍 数）全面归零，项目整体处于"维护冷却期"。

---

## 2. 版本发布

无新版本发布。

---

## 3. 项目进展

⚠️ **重要说明**：今日关闭的 5 个 PR 均为 stale 自动关闭，未经过维护者评审与合并，**实际推进为零**。其中包含多个具备明确价值的安全与性能改进，需要维护者后续重新评估。

**被 stale 自动关闭（未合并）的 PR：**

| PR | 类型 | 实质内容 |
|---|---|---|
| [#3324](https://github.com/sipeed/picoclaw/pull/3324) | 安全 | Weixin CDN 媒体下载改用 `CreateSafeHTTPClient`，防重定向到 loopback/私网 |
| [#3323](https://github.com/sipeed/picoclaw/pull/3323) | 安全 | WeCom 媒体下载同源 SSRF 防护（#3324 兄弟 PR） |
| [#3322](https://github.com/sipeed/picoclaw/pull/3222) | 安全 | 为 QQ / Telegram / Discord / LINE / Slack 入站媒体下载启用 `BlockPrivateTargets` |
| [#3321](https://github.com/sipeed/picoclaw/pull/3321) | 性能 | 将 per-request 动态上下文（时间/运行时/会话/发送者）移至历史消息之后，保留 LLM prefix caching |
| [#3320](https://github.com/sipeed/picoclaw/pull/3320) | 依赖 | 升级 `whatsmeow` 修复 WhatsApp "client outdated (405)" |

**当前待合并 PR（2 条）：**

- [#3344](https://github.com/sipeed/picoclaw/pull/3344) — **新增**：Build Remote Agent (`gbr/1`) 手机配对通道，今日提交，等待首次 review
- [#3222](https://github.com/sipeed/picoclaw/pull/3222) — DeltaChat 通道重构（-200 LOC），已挂起约 52 天

---

## 4. 社区热点

今日无真实社区讨论。两条"活跃"Issue（#3302、#3325）的近期互动均来自 stale bot 的清理提醒，👍 数与有效评论数均为 0。

- [#3302](https://github.com/sipeed/picoclaw/issues/3302) — Support OAuth 2.1 for MCP servers（已 stale 关闭）
- [#3325](https://github.com/sipeed/picoclaw/issues/3325) — Render Telegram tables with rich messages（已 stale 关闭）

**健康度提示**：社区参与度进入低位，建议维护者主动发起 RFC 或投票以激活讨论。

---

## 5. Bug 与稳定性

今日无新 Bug 报告，但被 stale 关闭的存量 PR 暴露出值得立即关注的隐患：

| 严重程度 | 问题 | 关联 PR | 现状 |
|---|---|---|---|
| 🔴 **高** | 多通道（QQ/Telegram/Discord/LINE/Slack/Weixin/WeCom）入站媒体下载存在 SSRF 风险，可被构造 URL 引导至 loopback / RFC1918 | [#3322](https://github.com/sipeed/picoclaw/pull/3322) [#3323](https://github.com/sipeed/picoclaw/pull/3323) [#3324](https://github.com/sipeed/picoclaw/pull/3324) | fix PR 被 stale 关闭，**实际未合并**，漏洞仍存在 |
|  **中** | WhatsApp 原生通道因 `whatsmeow` 版本过旧被服务端拒绝（405 client outdated，~5s 后断开且无重连） | [#3320](https://github.com/sipeed/picoclaw/pull/3320) | fix PR 被 stale 关闭，**生产环境硬阻塞** |
|  **低** | 动态上下文位置不当导致 LLM prefix caching 频繁失效 | [#3321](https://github.com/sipeed/picoclaw/pull/3321) | 性能优化 PR 被 stale 关闭 |

---

## 6. 功能请求与路线图信号

- **MCP OAuth 2.1 授权**（[#3302](https://github.com/sipeed/picoclaw/issues/3302)）：作者 sunboy0523 提出，关联 issue #2546 表明这是**社区长期呼声**。MCP 生态正在向 OAuth 2.1 收敛，建议列入路线图。
- **Telegram 表格原生渲染**（[#3325](https://github.com/sipeed/picoclaw/issues/3325)）：基于 Bot API 10.1 的能力升级，是合理的中优先级体验增强。
- **手机配对通道**（[#3344](https://github.com/sipeed/picoclaw/pull/3344)）：新 PR 引入独立 `gbr/1` 协议（非已有 pair 协议族），将 PicoClaw 桌面 agent 接入移动设备旁路控制。需关注：① 新外部依赖 `gbr-agent v0.6.0+` 的治理；② 仅暴露 `127.0.0.1:8788` 的设计降低了攻击面但需评审确认；③ 与现有 OneBot/QQ/WeCom 等通道的定位区分。这是一个**值得关注的产品方向**——AI agent 移动伴生场景，但维护者需要明确该 PR 是否符合当前路线图。

---

## 7. 用户反馈摘要

过去 24 小时无新 Issue / 评论，因此无新增用户反馈。可从历史上下文提炼：

- **MCP 生态扩展性**：用户希望 PicoClaw 能跟上 MCP 协议演进（OAuth 2.1 授权），反映项目对开放协议生态的依赖加深。
- **Telegram 内容呈现**：用户对结构化内容（表格）的呈现质量不满，认为 MarkdownV2 fallback 体验降级。
- **WhatsApp 通道硬阻塞**：#3320 描述的现象（"socket connects and is dropped ~5s later, no reconnect attempted"）说明该通道在生产环境中**完全不可用**，对依赖 WhatsApp 的用户是关键痛点。

---

## 8. 待处理积压

| 优先级 | 项目 | 状态 | 建议 |
|---|---|---|---|
|  **紧急** | [#3322](https://github.com/sipeed/picoclaw/pull/3322) [#3323](https://github.com/sipeed/picoclaw/pull/3323) [#3324](https://github.com/sipeed/picoclaw/pull/3324) | SSRF 防护 PR 被 stale 关闭，**漏洞未修复** | 维护者立即评估并 reopen/合并 |
| 🟠 **高** | [#3320](https://github.com/sipeed/picoclaw/pull/3320) | WhatsApp 通道升级 PR 被 stale 关闭 | 评估并合并依赖升级 |
|  **中** | [#3344](https://github.com/sipeed/picoclaw/pull/3344) | 新 PR 等待首次 review | 启动评审流程 |
| 🟡 **中** | [#3321](https://github.com/sipeed/picoclaw/pull/3321) | Prefix caching 优化 PR 被 stale 关闭 | 评估并合并 |
| ⚪ **低** | [#3222](https://github.com/sipeed/picoclaw/pull/3222) | DeltaChat 重构挂起 52 天 | 维护者明确表态：合并 / 修改 / 关闭 |
| ⚪ **低** | [#3302](https://github.com/sipeed/picoclaw/issues/3302) [#3325](https://github.com/sipeed/picoclaw/issues/3325) | 功能请求已 stale 关闭 | 评估是否重新挂上路线图 |

---

### 📊 项目健康度评估

| 维度 | 状态 | 说明 |
|---|---|---|
| 版本节奏 | 🟡 停滞 | 无新发布 |
| Issue 响应 | 🔴 弱 | 存量 Issue 多以 stale 方式关闭，非主动闭环 |
| PR 处理 | 🔴 弱 | 5 个有价值 PR 被自动清理，维护者未介入 |
| 社区互动 | 🔴 弱 | 评论与 👍 均为 0 |
| 安全态势 | 🔴 风险 | SSRF 修复 PR 全部未合并 |

**总结**：今日数据反映出项目进入阶段性低活跃期，但更值得警惕的是**有价值的修复 PR 因 stale 机制被批量清理**——建议维护者尽快对 #3320–#3324 做出处置，避免安全漏洞与稳定性问题在主线中长期存在。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目日报 · 2026-08-24

> 数据范围：2026-08-23 ~ 2026-08-24｜仓库：`qwibitai/nanoclaw`（分析视图 `nanocoai/nanoclaw`）

---

## 1. 今日速览

NanoClaw 在过去 24 小时呈现出 **"发版冲刺 + 多线并行收尾"** 的活跃态势：单日关闭/合并 PR 共 20 条（其中包含 v2.3.0 的正式发版 PR #3495 与补丁回滚 PR #3496），但仍有 30 条 PR 处于待合并状态，Issues 端新增 5 条仍待处理的 Bug。整体看，项目正处于一次较为紧张的兼容性修复与版本切割周期——`chat-sdk` 4.32 升级、`minimumReleaseAge` 安全闸门、typing-indicator 生命周期解耦三条主线交织推进；与此同时 macOS 路径与 `better-sqlite3` 段错误等基础设施类问题也开始浮现。健康度评估：**中等偏紧，需关注跨 PR 栈合并顺序与 macOS 兼容性回归**。

---

## 2. 版本发布

⚠️ **本日无最终版本号落地**，但 PR #3495（`[core-team] chore(release): v2.3.0`）已经准备好 `package.json` bump 与 CHANGELOG 的 `[2.3.0] - 2026-08-24` 切割，预计今日/明日合并即触发正式发布。

**预发布要点：**
- 锁定 `chat-sdk` 至 **4.32.0**（PR #3490 / #3466），保持全部 Chat SDK 频道技能同步。
- 引入"按频道声明 typing-indicator 生命周期"（PR #3491 / #3467 / #3468），WhatsApp Cloud 侧声明 25 s。
- 打开 pnpm `minimumReleaseAge` 安全闸门（PR #3492 / #3469），并新增回归测试。
- 保留所有 `[BREAKING]` 条目的 inline migration 说明。

**配套补丁**：PR #3496 同步把容器镜像重新 pin 到 `hardened-2026-08-23`，以绕开自 2026-08-21 22:21 +0300（提交 `ea1dadd8`）起 `container/pull.sh` 因 lock sha256 比对失败导致新装 setup 失败的问题——属于**未发版前的临时运维止血**，后续正式发版后应可撤销。

迁移注意事项见各 PR 内联说明；建议升级前先合 PR #3496。

---

## 3. 项目进展（已合并/关闭 PR）

| PR | 主题 | 影响 |
|---|---|---|
| [#3495](https://github.com/qwibitai/nanoclaw/pull/3495) | **v2.3.0 发版准备** | 完成 CHANGELOG 切割与版本号 bump，下一步即打 tag |
| [#3496](https://github.com/qwibitai/nanoclaw/pull/3496) | 容器镜像重新 pin | 修复 8-21 起的 setup 失败，恢复新装可用性 |
| [#3490 / #3466](https://github.com/qwibitai/nanoclaw/pull/3490) | `chat-sdk` 4.29.0 → 4.32.0 全频道锁步升级 | 修复 Discord approval custom_id 损坏（Issue #3456 的根因） |
| [#3467 / #3491](https://github.com/qwibitai/nanoclaw/pull/3467) | typing-indicator 生命周期解耦 | 适配 WhatsApp Cloud 25 s 上限 |
| [#3469 / #3492](https://github.com/qwibitai/nanoclaw/pull/3469) | `minimumReleaseAge` 闸门打开 + 回归测试 | 供应链侧新增一层时间窗防护 |

**推进总结：** 单日合并的核心主线围绕"v2.3.0 兼容性闭环"展开——SDK 升级、typing 节流、安全闸门三件套已经齐备；同步用一条补丁 PR 把装环境拉回到可用态。**项目整体向前迈进了一个明确的小版本步**，且保持了"栈式 PR 由底向上"（#3490 → #3491 → #3492）这种可审计的合并秩序。

---

## 4. 社区热点

按互动量排序：

- **[Issue #2404](https://github.com/qwibitai/nanoclaw/issues/2404)** — *Double delivery when agent uses `send_message` MCP tool and `<message>` blocks in the same turn*  
  作者：`mshirel`，4 条评论，👍0（创建 5/10，仍 OPEN）。社区最持久的痛点之一：当 agent 在同一轮同时通过 MCP `send_message` 与 `<message to="...">` 块输出同一段文本时会出现双投递。根因被定位为 MCP `StdioServerTransport` 与 poll loop 分属两条独立输出通道。**诉求核心**：去重逻辑统一到"输出侧"或"消息总线侧"。

- **[Issue #3456](https://github.com/qwibitai/nanoclaw/issues/3456)** — *chat-sdk-bridge: redundant Button 'value' param corrupts Discord approval custom_id*  
  作者：`DawoudIO`，1 条评论（已 CLOSED）。Discord approval/ask_question 卡片完全不可用的 high-severity 问题。**已被 PR #3466 随 chat-sdk 4.32 升级一并修复**，属于"先合并后关联 issue"的典型案例。

- **[PR #3142](https://github.com/qwibitai/nanoclaw/pull/3142)** — *fix(signal): forward image/file attachments through the mounted inbox instead of a dead path*  
  作者：`ira-at-work`，OPEN 但已迭代近 1 个月。Signal 适配器把 `/workspace/extra/signal-attachments/<id>` 这种**容器内根本不存在的路径**塞进文本，PDF/文档类附件事实上读不到。社区反馈集中在"附件路径必须经过挂载点中转"这一最佳实践上。

- **[PR #2301](https://github.com/qwibitai/nanoclaw/pull/2301)** — *feat(add-github): polling mode + git access question + safe OneCLI secret merge*  
  作者：`ira-at-work`，OPEN 已 3 个多月。**反映出"在 NAT/防火墙环境下仍想接入 GitHub"的强烈诉求**——Mode B 轮询模式成为高呼声补丁。

---

## 5. Bug 与稳定性

按严重程度排列：

| 严重度 | Issue | 摘要 | 已有 fix PR |
|---|---|---|---|
| 🔴 High | [#3455](https://github.com/qwibitai/nanoclaw/issues/3455) | `host-sweep` claim-stuck 看门狗误杀 busy-but-not-stuck 的回合（`CLAIM_STUCK_MS = 60_000`），可能导致某会话**永久无法回复**，且重试只会重复失败 | ❌ 暂无 |
| 🔴 High | [#3456](https://github.com/qwibitai/nanoclaw/issues/3456) | Discord approval/ask_question 卡片 `value` 字段污染 `custom_id`，每次点击错位（已 CLOSED） | ✅ [#3466](https://github.com/qwibitai/nanoclaw/pull/3466) |
| 🔴 High | [#3497](https://github.com/qwibitai/nanoclaw/issues/3497) | `better-sqlite3@13.0.3` 在 Node < 22.14.0 的 macOS 上 `new Database()` 段错误；声明 `>=22` 即可装过，导致 host 无法启动、`pnpm test` 无法完成 | ❌ 暂无（建议：把 `engines.node` 提到 `>=22.14.0` 或锁住 `better-sqlite3` 至 12.x） |
| 🔴 High | [#3498](https://github.com/qwibitai/nanoclaw/issues/3498) | macOS 上 `update-nanoclaw` 直接退出 0（no-op），原因：`path.resolve()` 拿不到 `/var/folders/... → /private/var/...` 的真实路径，导致入口守卫与 `hasSafeStatePaths` 同时失效 | ❌ 暂无（建议：用 `fs.realpath` 替换 `path.resolve`） |
| 🟡 Medium | [#3457](https://github.com/qwibitai/nanoclaw/issues/3457) | `insertMessage()` 使用裸 `INSERT`，在消息重投且 id 相同时触发 UNIQUE 约束崩溃，表现为重复的 "Message delivery failed, will retry" 日志并加剧重复消息 | ❌ 暂无（建议：`INSERT OR IGNORE` 或 upsert） |
| 🟡 Medium | [#2404](https://github.com/qwibitai/nanoclaw/issues/2404) | 同轮内 `send_message` MCP 工具 + `<message>` 块双投递（已存续约 3.5 个月） | ❌ 暂无 |

**今日 Bug 关键词**：macOS 路径、Node 版本下限、SQLite 段错误、消息总线去重、watchdog 误杀——**macOS 与 Node 版本矩阵是当下最薄弱的两块**。

---

## 6. 功能请求与路线图信号

1. **Build Remote Agent 手机配对（`gbr/1`）** — [PR #3494](https://github.com/qwibitai/nanoclaw/pull/3494)  
   引入手机作为 spectator 的适配层（仅绑定 `127.0.0.1:8788` 或 stdio），使用 `gbr-agent pair` QR + 8 位码。若合入，将形成继 "channel / provider" 之外的**第三类适配面**（device adapter）。

2. **GitHub 轮询接入（无端口场景）** — [PR #2301](https://github.com/qwibitai/nanoclaw/pull/2301)  
   Mode B 30 s 轮询，附带 webhook 模式的安全警告 + OneCLI 密钥安全合并。**强烈建议纳入下个 minor**——它解决了一个明确的"NAT 后无法暴露端口"的真实用户场景。

3. **Cursor Agent SDK 接入** — [PR #3355](https://github.com/qwibitai/nanoclaw/pull/3355) + [PR #3356](https://github.com/qwibitai/nanoclaw/pull/3356)  
   `/add-cursor` 技能 + provider payload，扩展到 Cursor 用户群。

4. **Codex structured setup-driver auth** — [PR #3489](https://github.com/qwibitai/nanoclaw/pull/3489)  
   给 Codex provider 增加结构化的 setup 驱动认证，缩短首次配置路径。

5. **MindsHub provider 文档/技能** — [PR #3493](https://github.com/qwibitai/nanoclaw/pull/3493)  
   纯文档 + 技能，无源码变更，**最易合并**。

6. **CI pre-commit 钩子** — [PR #2537](https://github.com/qwibitai/nanoclaw/pull/2537)  
   prettier + eslint + typecheck + vitest 加入 pre-commit，**对贡献者体验有显著正面影响**，建议纳入下个 sprint。

7. **按频道 typing-indicator 节流** — 已部分合入（#3467 / #3491），WhatsApp Cloud 已声明 25 s（PR #3468）。

---

## 7. 用户反馈摘要

提炼自 Issues 与 PR 评论：

- **Discord 用户（#3456）**：approval/ask_question 卡片完全不可用——属于"功能上线即关键路径"的体验断点，**任何审批流产品都受致命影响**；社区欢迎通过 SDK 升级解决而非自写补丁。
- **macOS / 企业开发者（#3497、#3498）**：对"声明版本下限过松"的隐式风险表达不满——希望维护者把 `engines.node` 与路径处理用 realpath 形式**显式**化，而不仅仅靠"装过即可"的检查。
- **Signal 集成用户（#3142）**：附件功能长期"看起来支持，实际挂载错位"——属于**表面支持但静默失败**的反模式，社区希望提供端到端附件测试用例。
- **GitHub 集成运维（#2301）**：在 NAT/防火墙后无法暴露端口是普遍痛点，轮询模式是 **被多次请求的"低门槛入门路径"**。
- **通用观察**：当前 0 点赞现象（数据中所有 Issues/PR 👍=0）**不一定是冷清**，而是 GitHub API 字段抽取策略导致——分析维度上更应参考评论数与维护者响应延迟。

---

## 8. 待处理积压（需维护者重点跟进）

- **PR #2301（add-github 轮询模式）** — 开放 110 天，是所有未合 PR 中最老的需求型 PR，**建议维护者明确表态**（合并 / 关闭 / 重写）。
- **PR #2537（pre-commit 钩子）** — 开放 99 天，社区贡献者体验改进项，合并成本低、收益高。
- **Issue #2404（双投递）** — 开放 106 天，4 条评论，已有清晰的根因分析（双输出通道），但至今无 fix PR；建议在 v2.4.x 中作为去重总线重构的一部分处理。
- **Issue #3497 / #3498（macOS 双连发）** — 当日新开但严重度高，**务必在下一次 macOS CI matrix 中验证**，并尽快以 PR 形式给出 `engines.node >= 22.14.0` 或 `better-sqlite3` 锁版决策。
- **栈式 PR #3490 → #3491 → #3492** — 合并顺序敏感（栈底先行），维护者应在 #3496 补丁 PR 已合的基础上，按栈序继续推进，避免 CI 触发的 pull_request 检查只在 main 目标生效这一约束被绕过。

---

*本日报由开源项目分析视图自动生成，所有条目均附 GitHub 链接以便复核。*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目动态日报
**日期：2026-08-24**

---

## 1. 今日速览

NullClaw 过去 24 小时整体活跃度偏低：仅产生 1 条新增 Issue，PR 与版本发布均为零。从提交节奏看，项目目前处于一个相对静默的维护期，但社区仍持续暴露真实环境下的边界问题（Edge-case）。值得关注的是，新报告的 Issue 涉及 stdio MCP 在 Proxmox 容器环境下的锁竞争问题，性质偏严重，可能影响多进程/多服务部署场景下的可用性。

**活跃度评级**：🟡 中低活跃（单 Issue 提交、无 PR、无 Release）

---

## 2. 版本发布

**无新版本发布**。最新已知版本仍为用户在 Issue #991 中引用的 **NullClaw 2026.8.22**（来自用户复现环境）。

---

## 3. 项目进展

**今日无 PR 合并/关闭**，项目代码层面今日无明显推进。建议维护者关注积压的 Issue 与潜在未提交的 fix。

---

## 4. 社区热点

| 排名 | 议题 | 评论数 | 👍 | 状态 |
|---|---|---|---|---|
| 🥇 | [#991 MCP stdio calls can hang indefinitely behind the Proxmox launcher lock](https://github.com/nullclaw/nullclaw/issues/991) | 2 | 0 | OPEN |

**热点分析**：今日唯一活跃议题，但已引发 2 条讨论，说明问题并非孤立个案。议题核心诉求直指 **nullclaw-agent 与 nullclaw-gateway 在共享 stdio MCP 时缺少合理的锁/超时机制**，这关系到 NullClaw 在多进程编排架构（如 Proxmox CT、Kubernetes、systemd 单元化部署）下的可靠性——这是该项目向生产环境落地的关键瓶颈之一。

---

## 5. Bug 与稳定性

### 🔴 P0（严重 - 可导致进程永久挂起）

**[#991 MCP stdio calls can hang indefinitely behind the Proxmox launcher lock](https://github.com/nullclaw/nullclaw/issues/991)**
- **报告者**：@locke1979
- **环境**：Proxmox CT 151 / NullClaw 2026.8.22 / 只读 Proxmox MCP bridge（148 个工具）
- **现象**：`nullclaw agent` 单次调用在 stdio MCP server 已被长生命周期 gateway 持有的情况下**无限期挂起**
- **复现路径**：
  1. 启动 `nullclaw-gateway.service`（持锁）
  2. 再调用 `nullclaw agent` 触发 stdio MCP
  3. Agent 进程无超时退出
- **影响面**：所有采用"网关 + 短时 agent"混合调用模式的部署；在缺少 `--timeout` 兜底时表现为 DOS 自身
- **修复 PR**：❌ 暂无

**建议修复方向**：为 stdio MCP 调用增加默认超时与非阻塞锁探测（lock probe with non-blocking `flock`/`fcntl`），并在锁冲突时返回结构化错误而非挂起。

---

## 6. 功能请求与路线图信号

虽然今日 Issue #991 表面上是 Bug，但其讨论中已隐含若干**功能化诉求**：

1. **stdio MCP 调用的可配置超时**：要求项目暴露 `MCP_STDIO_TIMEOUT` 类参数。
2. **Gateway 与 Agent 间的锁竞争可观测性**：需要日志/事件输出哪个进程持有 MCP、等待时长等。
3. **只读 MCP bridge 的正式支持**：用户复现使用了"148 个工具的只读 bridge"，说明社区已存在此类封装需求，可能催生 `nullclaw mcp-bridge` 子命令。

由于今日无 PR 提交，这些信号短期内尚不会被纳入下一版本，但维护者可在 roadmap 中标记。

---

## 7. 用户反馈摘要

从 Issue #991 的讨论中提炼的真实用户声音：

- **痛点**："Infinity hang in production-grade container" —— 用户在 Proxmox LXC 容器中部署 NullClaw，期望它能像 systemd 服务一样优雅降级，但实际表现是子进程僵死。
- **使用场景**：Homelab / 自托管场景下使用 Proxmox MCP 作为只读 AI 网关，强调**确定性退出码**而非"看似卡住"。
- **隐含不满**：尽管 0 个 👍，但评论活跃度（2 条）表明用户已**绕过情绪直接追问复现细节**，属于技术型用户的高质量反馈，应被维护者优先响应。
- **无明显满意/推荐类反馈**，社区情绪偏中性偏谨慎。

---

## 8. 待处理积压

| 类型 | 编号 | 创建时间 | 待办建议 |
|---|---|---|---|
| 🔴 高优先级 Bug | [#991](https://github.com/nullclaw/nullclaw/issues/991) | 2026-08-23（仅 1 天）| 维护者应在 48 小时内确认复现并给出 workaround（建议临时方案：增加 `--mcp-stdio-timeout`） |

⚠️ **提醒**：本期数据范围内仅有 1 条活跃 Issue，但鉴于其**严重性（无限挂起）+ 已有讨论**的特征，建议作为本周期最高优先级处理。其余长期积压 Issue 因未在本次数据快照中体现，无法进一步评估，请关注历史 backlog 报告。

---

### 📌 总评

NullClaw 今日呈现"低活动量 + 单点高危信号"的状态。代码库表面平静，但社区已触及 stdio MCP 在网关化部署中的可靠性边界。**维护者建议在下一周期优先针对 Issue #991 给出回应或补丁**，即便不立即修复，也应提供超时降级方案或 status page 说明，以维持生产用户的信任。

---

*报告基于 GitHub 公开数据自动生成，链接均为 github.com/nullclaw/nullclaw 仓库对应页面。*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目日报
**日期：2026-08-24** | 数据周期：过去 24 小时

---

## 1. 今日速览

IronClaw 今日进入**多线并进的高强度治理期**：9 条新开/活跃 Issue、23 条 PR 更新（5 条已关闭），无新版本发布。整体活跃度显著高于日常水位，但关闭率偏低（约 22% PR 关闭率，无 Issue 关闭），呈现出"重投入、重开工"的工程风格。今日工作高度集中在三条主线：(1) **CI 流水线重构**（T1-T4 四轨并行推进），(2) **持久化 per-user sandbox 与凭证代理**（sandbox/proxy 主题），(3) **Slack 用户反馈批量 triage**（4 条 bug 报告源自同一轮反馈扫描）。**项目健康度评估：中等偏上**，工程纪律严明，但缺乏新版本节奏与 Issue 关闭速度需关注。

---

## 2. 版本发布

**无新版本发布。** 距离上一可识别版本节点较远，建议关注 v1.4.0 epic（#7732）落地后是否伴随标签发布。

---

## 3. 项目进展（今日合并/关闭的重要 PR）

| PR | 标题 | 影响 |
|---|---|---|
| [#7730](https://github.com/nearai/ironclaw/pull/7730) | chore(deps): bump everything-else group (6 updates) | 已关闭 |
| [#7406](https://github.com/nearai/ironclaw/pull/7406) | chore(deps): bump actions group (4 updates) | 已关闭 |
| [#7262](https://github.com/nearai/ironclaw/pull/7262) | chore(deps): bump wasm group (2 updates) | 已关闭 |

**今日合并/关闭的 5 条 PR 全部为 Dependabot 自动化依赖升级**，涉及 uuid/base64/toml、GitHub Actions（claude-code-action、setup-node、rust-cache、docker/login-action）、以及 wasmtime/wit 工具链。**实质功能进展 = 0**。

需要特别说明：今日 18 条开放 PR 中包含 **2 条 THROWAWAY 实验性分支**（[#7839](https://github.com/nearai/ironclaw/pull/7839)、[#7838](https://github.com/nearai/ironclaw/pull/7838)），专门用于跑 CI 验证 nextest 集成，预期关闭并删除，不计入真实代码变更。

---

## 4. 社区热点

### 🔥 讨论最活跃的 Issue

**[#7732 Epic: Persistent per-user sandbox with iron-proxy; defer loop executors](https://github.com/nearai/ironclaw/issues/7732)** — 9 条评论，0 👍
- 作者：serrrfirat | 创建 2026-08-18
- 标签：`epic`、`v1.4.0`
- 诉求核心：当前 `builtin.shell` 通过 Docker 路由每次都创建/销毁容器，未达"持久用户计算机"目标。需要支持 `(tenant, user)` 级别的 `/workspace` 持久化，并通过 `iron-proxy` sidecar 处理用户级出站与凭证。
- **战略意义**：该 epic 是 v1.4.0 路线图的支柱议题，已衍生 [#7825](https://github.com/nearai/ironclaw/issues/7825)（sandbox egress auth 重构）与 [#7810](https://github.com/nearai/ironclaw/pull/7810)（manifest-declared 凭证绑定）两条配套工作，是本周最重要的架构主线。

### 🔥 重要新开 Issue

- **[#7836 Tool advertisement: filter by availability](https://github.com/nearai/ironclaw/issues/7836)** — 模型可见工具面需过滤掉"安装但未激活"、"凭证未就绪"等不可执行的工具，避免模型发出注定失败的调用。PinchBench 实测驱动。
- **[#7825 Sandbox egress auth: native iron-proxy recipes](https://github.com/nearai/ironclaw/issues/7825)** — 提议弃用 GitHub 特定的临时方案，统一由 `iron-proxy` 与 host credential broker 承载所有原生 CLI 凭证协议。
- **[#7832 Triage from Slack #x-ai-product-feedback](https://github.com/nearai/ironclaw/issues/7832)** / **[#7827](https://github.com/nearai/ironclaw/issues/7827)** — 启动对 Slack 反馈通道的定期 triage 工作流，体现团队在系统化处理用户声音上的努力。

---

## 5. Bug 与稳定性

今日无崩溃级（severity: critical）报告，但通过 Slack triage 流入 **3 条用户可复现的安装/认证 Bug**，建议优先级从高到低排列：

| 严重度 | Issue | 标题 | 是否有 fix PR |
|---|---|---|---|
| 🟠 High | [#7829](https://github.com/nearai/ironclaw/issues/7829) | **Gmail 设置失败：WebUI 认证弹窗闪现 1 秒即消失** | ❌ 无 |
| 🟠 High | [#7830](https://github.com/nearai/ironclaw/issues/7830) | **Notion 扩展在 IronClaw 中安装失败** | ❌ 无 |
| 🟡 Medium | [#7828](https://github.com/nearai/ironclaw/issues/7828) | **Slack 在 NEAR Foundation 账号下无法设置** | ❌ 无 |

**观察**：三条 Bug 均与 OAuth/扩展安装流程相关，时间戳均指向 `2026-07-28` 用户反馈但于今日批量入 Issue，反映出**反馈入站管道存在显著延迟**（约 3-4 周），建议团队优化 triage 自动化（[#7827](https://github.com/nearai/ironclaw/issues/7827)、[#7832](https://github.com/nearai/ironclaw/issues/7832) 即是补救措施）。

---

## 6. 功能请求与路线图信号

| 信号源 | 需求 | 路线图可能性 |
|---|---|---|
| [#7812](https://github.com/nearai/ironclaw/issues/7812) Onboarding suggestions 用只读工具 | 让 onboarding 推荐基于用户真实数据 | ✅ **极高** — 已有 [PR #7833](https://github.com/nearai/ironclaw/pull/7833) 实现并 close 该 Issue |
| [#7836](https://github.com/nearai/ironclaw/issues/7836) 工具广告按可用性过滤 | 减少模型无效调用 | 🟢 高 — 与 sandbox/proxy 主线一致 |
| [#7732](https://github.com/nearai/ironclaw/issues/7732) 持久化 per-user sandbox + iron-proxy | 长期用户计算环境 | 🔵 **路线图已锁定 v1.4.0**，伴随 [#7810](https://github.com/nearai/ironclaw/pull/7810) 进行中 |
| [#7831](https://github.com/nearai/ironclaw/pull/7831) Design System Phase 3a + Chromatic | 视觉回归测试基建 + 设计 token 补全 | 🟢 进入代码评审 |
| [#7818](https://github.com/nearai/ironclaw/pull/7818) 后台子代理（receipt spawn + 投递 + 治愈） | 长任务后台执行能力 | 🟢 XL 规模 PR，slice 2b+2c 进行中 |

**CI 治理四轨**（[T1 #7821](https://github.com/nearai/ironclaw/pull/7821)、[T2 #7817](https://github.com/nearai/ironclaw/pull/7817)、[T3 #7819](https://github.com/nearai/ironclaw/pull/7819)、[T4 #7809](https://github.com/nearai/ironclaw/pull/7809)）显示团队正在系统性消除"本地绿 CI 红"的漂移问题，对开发者体验影响重大，预计将在 CI 重构全部合入后带来明显提效。

---

## 7. 用户反馈摘要

今日通过 Slack triage 集中涌入的真实用户痛点（均源自分布式反馈 → 集中入站）：

- **OAuth 弹窗闪烁即消失**（Gmail, [#7829](https://github.com/nearai/ironclaw/issues/7829)）：用户描述认证窗口"出现 1 秒就消失"，典型的浏览器弹窗拦截 / 重定向循环问题，可能影响多个 OAuth 集成。
- **扩展安装流程脆弱**（Notion, [#7830](https://github.com/nearai/ironclaw/issues/7830)）：用户原话"Notion tool doesn't want to install"，措辞暗示用户已多次尝试失败，可能引发挫败感。
- **特定账号体系连通性故障**（Slack, [#7828](https://github.com/nearai/ironclaw/issues/7828)）：NEAR Foundation 邮箱账号下无法配置 Slack，需排查是否与组织 SSO/域名策略冲突。

**共同模式**：所有问题均位于"扩展市场 → 认证 → 安装成功"的临界路径，反映出**第三方集成 onboarding 仍是当前用户体验瓶颈**。#7812 / #7833 提议的"基于用户真实数据的 onboarding suggestions"是缓解策略之一，但底层 OAuth/扩展安装流程的健壮性更需优先。

---

## 8. 待处理积压

下列高价值 Issue/PR 已开放超过合理 SLA，建议维护者优先关注：

| 编号 | 标题 | 开放时长 | 建议动作 |
|---|---|---|---|
| [#7020](https://github.com/nearai/ironclaw/pull/7020) | Deps: bump tokio-tungstenite 0.29→0.30 | ~22 天 | 单包升级，长期积压可能阻塞其他 tokio 升级 |
| [#7255](https://github.com/nearai/ironclaw/pull/7255) | docs(governance): evaluate APDD kit | ~19 天 | 评审类 PR，需核心维护者拍板 |
| [#7516](https://github.com/nearai/ironclaw/pull/7516) | WebUI: IronHub agent link operator surface | ~12 天 | XL 规模，需 WebUI owner 介入 |
| [#7732](https://github.com/nearai/ironclaw/issues/7732) | Epic v1.4.0 sandbox (9 条评论) | ~6 天 | 路线图支柱，建议每日推进 |

**整体观察**：今日开放 PR 中 XL 规模占比极高（>=40%），意味着评审吞吐将成为瓶颈。建议：(1) 拆分大 PR 为可独立合并的小切片；(2) 显式为 Dependabot 与 THROWAWAY 类 PR 设立快车道，避免淹没重要评审。

---

*日报由 GitHub 数据自动生成。下次更新：2026-08-25。*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目日报

**日期**：2026-08-24
**仓库**：netease-youdao/LobsterAI

---

## 1. 今日速览

LobsterAI 项目今日活跃度处于**显著低迷**状态：过去24小时内无新增 Issue、无新开 PR、无版本发布，全部 4 条 Issue 与 3 条 PR 均被 GitHub Stale Bot 自动标记为 `[stale]` 并关闭。值得注意的是，这批工单均创建于 2026-04-01，距今已停滞近 5 个月。综合判断，项目可能进入低维护周期或维护人手调整阶段，社区互动明显趋冷。

---

## 2. 版本发布

今日无新版本发布。📦

---

## 3. 项目进展

今日无新增合并记录。原待合并队列（0 条）为空，且 3 条 PR 均被自动关闭：

| PR | 标题 | 状态 | 性质 |
|---|---|---|---|
| [#1197](https://github.com/netease-youdao/LobsterAI/pull/1197) | Feature/Agent 管理页面交互优化 | 已关闭（stale） | UI 交互改进 |
| [#1199](https://github.com/netease-youdao/LobsterAI/pull/1199) | feat(model): add context window and token settings | 已关闭（stale） | 模型配置增强 |
| [#1201](https://github.com/netease-youdao/LobsterAI/pull/1201) | [Bug] NIM teamTypeNum 硬编码错误修复 | 已关闭（stale） | Bug 修复 |

⚠️ **警示**：PR #1201 是 Issue #1200 的修复方案，因长期未合并被自动关闭，意味着该 Bug **至今未在主线修复**，用户仍可能受到影响。

---

## 4. 社区热点

因全部工单已被关闭且评论数普遍为 2 条，今日社区热度整体偏低。可关注的"诉求型"议题包括：

- **[#1196](https://github.com/netease-youdao/LobsterAI/issues/1196) 不要强制在工作目录建立 6 个系统文件**（👍 0，💬 2）
  诉求：用户希望支持类似 Claude Code 的全局 `agents.md` 机制，或将配置文件放入隐藏目录，避免污染用户项目目录。

- **[#1199](https://github.com/netease-youdao/LobsterAI/pull/1199) 模型上下文窗口与 token 配置**
  诉求：用户希望按模型粒度设置 `contextWindow` 与 `maxTokens`，并将上下文元信息传递到 Cowork/OpenClaw 配置中——反映了**精细化模型调优**的真实需求。

---

## 5. Bug 与稳定性

按严重程度排序：

### 🔴 高严重度（安全 / 数据）
- **[#1202](https://github.com/netease-youdao/LobsterAI/issues/1202) Agent 泄漏 Model Key 敏感信息** — 已被 stale 关闭，无对应修复 PR。
  - **风险描述**：用户向 Agent 询问 key 配置信息时，Agent 会直接回复配置文件路径、环境变量名等信息，进一步追问可获取完整密钥。
  - **当前状态**：⚠️ **未修复**，可能仍影响线上所有用户的数据安全，建议维护者优先评估。

### 🟠 中严重度（功能失效）
- **[#1200](https://github.com/netease-youdao/LobsterAI/issues/1200) NIM 超大群 teamTypeNum 硬编码错误** — 有修复 PR (#1201) 但**未合并**。
  - **影响**：云信超大群 / 普通群中 @机器人时，群名显示为原始 `teamId` 而非真实群名。
  - **当前状态**：⚠️ **未修复**，修复方案已就绪但被 stale 关闭。

- **[#1198](https://github.com/netease-youdao/LobsterAI/issues/1198) 网关重启进度条消失 / 模型不可用** — 已被 stale 关闭，无修复 PR。
  - **影响**：Chrome 已打开但仍提示"浏览器服务不可用"；后续所有对话显示模型不可用，需手动重启才能恢复。
  - **当前状态**：⚠️ **未修复**。

### 🟡 低严重度（体验）
- **[#1196](https://github.com/netease-youdao/LobsterAI/issues/1196)** 强制在工作目录创建 6 个文件 — 更像 UX 改进需求，但已引发用户删除后又被重建的不满。

---

## 6. 功能请求与路线图信号

从已关闭的 PR 与 Issue 中可识别出以下需求方向：

| 需求方向 | 证据来源 | 进入下一版本的概率 |
|---|---|---|
| **Agent 管理 UI 交互优化**（如直接在卡片上删除） | PR #1197 | 中等——PR 内容相对完整，但项目活跃度低 |
| **按模型的上下文窗口 / Token 配置** | PR #1199 | 中等——属于核心能力扩展 |
| **全局 AGENTS.md 机制（跨工作目录复用）** | Issue #1196 | 较高——参考竞品（Claude Code）的成熟做法 |
| **敏感信息（API Key）防护** | Issue #1202 | **极高**——属于安全必修项，建议优先处理 |
| **NIM 网关重启状态可见性 / 浏览器服务状态准确性** | Issue #1198 | 中等——可靠性问题 |

---

## 7. 用户反馈摘要

通过对 4 条工单评论的提炼：

- **痛点 1：工作目录污染** — 用户明确表达"太乱了，而且删了还要重建！"，反映了对强制写入文件的强烈反感。
- **痛点 2：失败状态不可见** — 用户在网关注销场景下无法判断当前是否可用，只能猜测是否需要手动重启。
- **痛点 3：群消息中 @机器人显示原始 ID** — 影响实际协作可读性，属于 NIM 集成完整性问题。
- **痛点 4：Agent 不具备安全护栏** — 用户演示了如何通过追问套取敏感信息，期望 Agent 主动拒绝。
- **场景侧写**：用户群体明显包含 NIM（即网易云信）企业 IM 集成方、重度 Agent 使用者（关注多工作目录切换）、对模型参数精细化调优有需求的高级用户。

整体满意度信号：**负面偏多**，但因工单均已 stale 关闭，用户很可能已经转向其他方案或沉默流失。

---

## 8. 待处理积压

⚠️ **健康度提醒**：以下重要 Issue/PR 在被自动 stale 关闭前长期未被维护者响应，建议尽快 review 并决定是否 reopen：

| 编号 | 类型 | 重要性 | 链接 |
|---|---|---|---|
| #1202 | 安全 Bug | 🔴 P0 | [Issue](https://github.com/netease-youdao/LobsterAI/issues/1202) |
| #1200 + #1201 | Bug + 已就绪 Fix | 🟠 P1 | [Issue](https://github.com/netease-youdao/LobsterAI/issues/1200) / [PR](https://github.com/netease-youdao/LobsterAI/pull/1201) |
| #1198 | 可靠性 Bug | 🟠 P1 | [Issue](https://github.com/netease-youdao/LobsterAI/issues/1198) |
| #1199 | 核心功能增强 | 🟡 P2 | [PR](https://github.com/netease-youdao/LobsterAI/pull/1199) |
| #1196 | UX 改进 | 🟡 P2 | [Issue](https://github.com/netease-youdao/LobsterAI/issues/1196) |
| #1197 | UI 优化 | ⚪ P3 | [PR](https://github.com/netease-youdao/LobsterAI/pull/1197) |

**维护建议**：
1. 立即 reopen #1202 并评估安全风险——API Key 泄漏属于 CWE-200 类问题，可能引发合规风险；
2. 复核 #1201 的一行修复改动（已通过 PR 准备好），门槛极低；
3. 检查 Stale Bot 配置（默认通常为 60–90 天），考虑延长或对 Bug 类型豁免，避免有效修复被误关；
4. 公开一次维护声明，缓解社区对项目活跃度的疑虑。

---

*报告生成时间：2026-08-24｜数据源：GitHub REST API*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报 · 2026-08-24

> 数据来源：GitHub 仓库 `moltis-org/moltis` | 统计周期：过去 24 小时

---

## 1. 今日速览

过去 24 小时 Moltis 项目活跃度处于**中等偏高水平**，共产生 3 条 Issue 更新和 6 条新 PR，全部 PR 仍处于待合并状态，仓库未发布新版本。整体工作以**修复缺陷为主、零散特性增强为辅**：贡献者集中提交了 memory、skills、MCP、cron、消息网关等多个子模块的稳定性补丁，并有一条面向 WhatsApp 文档摄取的可选新功能。社区讨论度较低（Issues 平均评论数 < 1），但代码层提交密度健康，体现出项目处于稳定的迭代维护期。

---

## 2. 版本发布

**今日无新版本发布。** 仓库 `moltis-org/moltis` 当前没有新的 Release 标签。鉴于今日提交的多个 fix 涉及 memory 编码器、skills sidecar 物化、MCP 客户端重建等核心路径，建议维护者评估是否值得打包一个补丁级 Release。

---

## 3. 项目进展

今日**没有 PR 被合并或关闭**。待合并的 6 条 PR 涉及以下领域：

| PR | 主题 | 影响模块 | 价值 |
|---|---|---|---|
| [#1236](https://github.com/moltis-org/moltis/pull/1236) | 限制本地嵌入编码器的批大小 | memory | **关键修复** — 解决了 GGUF 嵌入模型在超 512 token 时崩溃、连带终止整个 Moltis 进程的问题 |
| [#1235](https://github.com/moltis-org/moltis/pull/1235) | 规范化内置后端配置值 | memory | 一致性改进 + 新增 Rust 往返测试与端到端回归 |
| [#1234](https://github.com/moltis-org/moltis/pull/1234) | 物化递归打包的 sidecar 文件 | skills | 修复预构建/Docker 镜像中 `scripts/quick_validate.py` 路径"列出但找不到"的诡异行为 |
| [#1226](https://github.com/moltis-org/moltis/pull/1226) | 将定时任务输出投递回原始聊天 | cron | 改善多渠道用户体验，保留 thread/topic 路由 |
| [#1233](https://github.com/moltis-org/moltis/pull/1233) | 新增 WhatsApp 文档摄取（可选） | gateway | **特性新增** — 让 agent 真正能"读到"文件 |
| [#1231](https://github.com/moltis-org/moltis/pull/1231) | 在服务器重启后解析当前 MCP 客户端 | mcp | 修复活动聊天回合仍通过已关闭客户端派发的潜在故障 |

**推进程度：** 项目整体在稳定性方向上稳步前进，尤其 memory 和 mcp 两个模块均有实质性的崩溃/状态修复，但因尚未合并，尚未计入"已完成"产出。

---

## 4. 社区热点

按关注度（点赞、评论、最近活跃度）排序：

1. **[#245 fix(tls): h2 in ALPN breaks WebSocket](https://github.com/moltis-org/moltis/issues/245)** — 作者 P2Chill，已开 176 天，今日再次更新，是当前仓库中**长期未解的代表性痛点**。该问题导致开启 TLS 后浏览器刷新或新标签页建立 WebSocket 失败（返回 405），但既有标签页因复用 h1.1 会话得以幸免，造成"看起来正常但部署即坏"的隐性故障。
   - 链接：https://github.com/moltis-org/moltis/issues/245
2. **[#1230 feat(hooks): add an opt-in fail-closed error policy for modifying security hooks](https://github.com/moltis-org/moltis/issues/1230)** — 作者 kantorcodes，今日提交当日关闭。社区已就 hook 作为安全边界时"失败降级为继续执行"这一缺口形成共识。
3. 其余 Issue/PR 评论数普遍为 0，讨论度较低。

**诉求分析：** 社区当前最关心的方向是**可靠性与安全性边界**：WebSocket 兼容（#245）、hook 失败默认策略（#1230）共同指向"部署生产环境时缺乏失败保护"这一隐忧。

---

## 5. Bug 与稳定性

按严重程度排列：

| 严重度 | Issue/PR | 描述 | 是否有 fix PR |
|---|---|---|---|
| 🔴 **高（进程崩溃）** | [PR #1236](https://github.com/moltis-org/moltis/pull/1236) | 本地 GGUF 嵌入在分块超过 512 token 时会使整个 Moltis 进程终止（非因果 llama.cpp 编码器要求完整输入放入上下文） | ✅ 已有 fix PR，待合并 |
| 🟠 **中（功能失效）** | [Issue #1224](https://github.com/moltis-org/moltis/issues/1224) | 共享 Slack 频道中工具失效，作者 affanshahid，0 评论 | ❌ 暂无关联 PR |
| 🟡 **中（部署兼容）** | [Issue #245](https://github.com/moltis-org/moltis/issues/245) | TLS + h2 ALPN 导致 WebSocket 在新连接上 405 | ❌ 长期未修复 |
| 🟢 **低（一致性）** | [PR #1235](https://github.com/moltis-org/moltis/pull/1235) | `memory.config.get` 中 `sqlite` 与 `builtin` 命名不一致 | ✅ 已有 fix PR |
| 🟢 **低（资产丢失）** | [PR #1234](https://github.com/moltis-org/moltis/pull/1234) | 预构建产物中 `skill-creator` 的 `scripts/quick_validate.py` sidecar 找不到 | ✅ 已有 fix PR |
| 🟢 **低（状态泄漏）** | [PR #1231](https://github.com/moltis-org/moltis/pull/1231) | MCP 服务器重启后，旧客户端仍被活动回合复用 | ✅ 已有 fix PR |

**总结：** 高危 bug（#1236 进程崩溃）已有 fix 在排队，其余中低优先级问题均已对应到修复或正在讨论中，整体稳定性态势可控。

---

## 6. 功能请求与路线图信号

| 提案 | 来源 | 状态 | 路线图可能性 |
|---|---|---|---|
| **WhatsApp 文档摄取** | [PR #1233](https://github.com/moltis-org/moltis/pull/1233) | 已有可合并 PR，按账户 opt-in | ⭐⭐⭐⭐ 即将落地 |
| **定时任务回投原始聊天** | [PR #1226](https://github.com/moltis-org/moltis/pull/1226) | 已有可合并 PR | ⭐⭐⭐⭐ 即将落地 |
| **Hook fail-closed 错误策略** | [Issue #1230](https://github.com/moltis-org/moltis/issues/1230) | 已关闭但无 PR 跟进 | ⭐⭐⭐ 视维护者优先级 |
| **TLS h2 ALPN 与 WS 兼容** | [Issue #245](https://github.com/moltis-org/moltis/issues/245) | 长期 Issue，无 PR | ⭐⭐ 阻塞性但需协议权衡 |

PR #1233 显著增强了 WhatsApp 网关从"只接收元数据"到"可处理真实文件"的跃迁，是近期最有用户感知价值的新特性。

---

## 7. 用户反馈摘要

- **Slack 集成用户（Issue #1224）**：在共享频道中工具突然失效，需要包含完整会话上下文才能复现，提示**多租户/共享场景下的会话隔离**可能存在缺陷。
- **WebSocket/TLS 部署者（Issue #245）**：现有用户能在旧标签页中无感运行，但任何刷新或新标签即破坏，体现了**生产部署的隐性陷阱**——既无错误日志，也无降级提示。
- **hooks 安全策略用户（Issue #1230）**：认为将"运行时 hook 失败"默认视为"通过"对安全边界类 hook 不可接受，呼吁 opt-in 的 fail-closed 语义。
- **WhatsApp 文档使用者（PR #1233）**：明确表达了对"agent 知道文件存在却无法读取"这种割裂体验的不满。

整体满意度难以精确评估（评论稀少），但**稳定性 vs. 部署复杂性**是被反复触及的矛盾。

---

## 8. 待处理积压

- **[#245 TLS h2 / WebSocket 不兼容](https://github.com/moltis-org/moltis/issues/245)**：自 2026-02-26 创建至今已 176 天，是仓库中最显著的"长期挂账"问题。维护者应明确表态：调整 ALPN 顺序、关闭 h2、还是仅在文档中警告。
- **[#1230 hooks fail-closed](https://github.com/moltis-org/moltis/issues/1230)**：已快速关闭但无对应 PR 实现，需求方可能需要重新 open 或提交 PoC PR 推动。
- **[#1224 Slack 共享频道工具失效](https://github.com/moltis-org/moltis/issues/1224)**：缺少维护者响应与复现指引，0 评论，存在成为下一个长期 Issue 的风险。
- **6 条待合并 PR 积压**：维护者需尽快走一轮 review，尤其是涉及进程崩溃修复的 [#1236](https://github.com/moltis-org/moltis/pull/1236)。

---

*报告基于 2026-08-24 过去 24 小时的 GitHub 数据自动生成。*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目日报 · 2026-08-24

> 数据源：`agentscope-ai/CoPaw`（GitHub Issues & PRs，过去 24 小时）

---

## 1. 今日速览

CoPaw 今日整体活跃度中等偏上：5 条新/活跃 Issue（全部 OPEN），15 条 PR 更新（7 待合并 / 8 已关闭），**无新版本发布**。工作重心集中在三类事项——**Skill 系统的动态化重构**（Ferrum360 一系列 PR 集中关闭）、**运行时稳定性修复**（Token 缓存、Windows tasklist、CLI 构造），以及**DeepSeek 模型目录与图像尺寸防护**。多个 `first-time-contributor` 标签显示社区贡献门槛健康，但 **#7222 报告的运行时 20GB+ 内存累积**仍是当前最严峻的可用性风险，尚未有对应 fix PR。

---

## 2. 版本发布

⚪ 今日无新版本发布。近期最近一次版本为 Issue 中提及的 **v2.1.0**，暂无打 tag 记录。

---

## 3. 项目进展（已合并/关闭 PR）

过去 24 小时共有 **8 个 PR 关闭**，推进内容可归纳为四块：

| 类别 | PR | 价值 |
|---|---|---|
| **Token / 持久化** | [#6220](https://github.com/agentscope-ai/QwenPaw/pull/6220) | 修复 `TokenUsageBuffer.stop()` 在未种子化磁盘缓存时仍写入空缓存导致的脏数据 |
| **跨平台** | [#6203](https://github.com/agentscope-ai/QwenPaw/pull/6203) | 给 Windows `tasklist` 探活补上 `timeout`，避免阻塞；并隐藏内部细节 |
| **CLI** | [#6616](https://github.com/agentscope-ai/QwenPaw/pull/6616) | 修复 `qwenpaw task` 子命令构造的 `Msg.content` 类型不匹配（`agentscope==2.0.4.post1` 下 `content` 必须是 `list[ContentBlock]`） |
| **Skill 系统 / Auto-title** | [#7033](https://github.com/agentscope-ai/QwenPaw/pull/7033)、[#7031](https://github.com/agentscope-ai/QwenPaw/pull/7031)、[#7027](https://github.com/agentscope-ai/QwenPaw/pull/7027)、[#7032](https://github.com/agentscope-ai/QwenPaw/pull/7032)、[#7030](https://github.com/agentscope-ai/QwenPaw/pull/7030) | 动态 Skill 加载/自动卸载、frontmatter/lazy-skill 路径修复、auto-title-sync 随 auto-memory 联动刷新、可观测化改造；并清理 `.backup/.bak*/.lock` 临时文件 |

**整体进度评估**：项目在「Skill 运行时生命周期」「会话标题智能化」「CLI/Windows 健壮性」方向明显向前推进了一步。值得注意的是 Ferrum360 的几个 PR 互为重复或变体（#7030/#7032 同主题、#7031/#7033 同主题），且都被关闭而非合并，说明很可能已被替代方案吸收或合并到主干——建议维护者发布 notes 明确归属，避免贡献者重复劳动。

---

## 4. 社区热点

按评论数与议题张力排序：

1. **🔥 [#7221](https://github.com/agentscope-ai/QwenPaw/issues/7221)（3 条评论）** — `MultiAgentManager.reload_agent()` 在零停机重载后丢失插件 workspace-scoped 注册（runtime hooks / modes / slash commands）。这是 zero-downtime 重载路径上的回归，影响所有自定义插件作者。
2. **🔥 [#7222](https://github.com/agentscope-ai/QwenPaw/issues/7222)（2 条评论）** — 长跑 2 天内存从几百 MB 涨到 **20.7 GB**，与历史 #9 启动泄漏无关，是运行时累积型问题，是当前最严重的生产稳定性话题。
3. **🆕 [#7224](https://github.com/agentscope-ai/QwenPaw/issues/7224)（1 条评论）** — 俄语用户希望将 Aider CLI 集成为受 QwenPaw 调度的 agent，体现「第三方 CLI agent 接入」的需求面开始扩散。

**诉求分析**：今日热点全部围绕 **可观测性 + 稳定性 + 可扩展性** —— 内存增长、重载丢失注册、CLI 接入规范，三者共同指向「生产级多 agent 平台」的成熟度诉求。

---

## 5. Bug 与稳定性

按严重程度排列：

| 严重度 | Issue | 描述 | 是否已有 Fix PR |
|---|---|---|---|
| 🔴 **P0 生产可用** | [#7222](https://github.com/agentscope-ai/QwenPaw/issues/7222) | qwenpaw-backend 运行时内存从 MB 级累积到 **20.7 GB**（2 天），单进程拖垮整机 | ❌ 无 |
| 🟠 **P1 功能正确** | [#7217](https://github.com/agentscope-ai/QwenPaw/issues/7217) | 中途停止任务/对话后，下一轮对话完全沿用上一次的「思考」与上下文，疑似状态未清理 | ❌ 无 |
| 🟠 **P1 通信稳定性** | [#7218](https://github.com/agentscope-ai/QwenPaw/issues/7218) | 长文本/长推理

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目日报 · 2026-08-24

> 数据周期：过去 24 小时（基于 2026-08-23 至 2026-08-24 的 GitHub 活动）

---

## 1. 今日速览

ZeroClaw 今日活跃度处于**高位但无发版**的状态：50 条 Issue 更新（38 新开/活跃，12 关闭）和 50 条 PR 更新（45 待合并，5 已关闭/合并），但**无新版本发布**。当日讨论高度集中在架构类 RFC 与协调类 Tracker 上，前 5 大热门议题全部与"运行时-通道（runtime/channel）边界"和"会话持久化契约所有权"相关，显示出项目正处于一次较大规模架构重构的中后期。多个核心修复 PR（cron、沙箱审批、配置兼容、令牌核销）已提交待审，整体呈"修边角 + 调架构"的双轨节奏。暂无 P0 级故障暴露，项目健康度评估为**良好**。

---

## 2. 版本发布

⚠️ **无新版本发布**。今日所有活动均为 Issue/PR 级别，无 tag 推送或 release notes 变更。若仍以 master 分支为跟踪基准，最新可整合的修复需关注下方 PR 一节。

---

## 3. 项目进展（今日合并/关闭的重要 PR 与 Issue）

### 已关闭的关键 Issue
- **[#2503](https://github.com/zeroclaw-labs/zeroclaw/issues/2503)** — *where is napcat channel*（10 评论）：用户长期反馈的 OneBot/NapCat 通道现状问题已正式关闭（status: accepted）。闭环但具体实现细节需关注 follow-up PR。
- **[#2467](https://github.com/zeroclaw-labs/zeroclaw/issues/2467)** — *Webhook transforms*（7 评论）：自定义 Webhook 路径与 payload 转换能力设计已被接受。
- **[#9666](https://github.com/zeroclaw-labs/zeroclaw/issues/9666)** — *fix(channels): filesystem listener cancellation-aware*（3 评论）：P1 阻塞性 Bug 关闭，对应修复 PR [#10217](https://github.com/zeroclaw-labs/zeroclaw/pull/10217) 同步关闭，标志该 Bug 已落地。
- **[#7099](https://github.com/zeroclaw-labs/zeroclaw/issues/7099)** — *Route zeroclaw status through CLI i18n*：完成 CLI 输出的国际化统一。
- **[#7314](https://github.com/zeroclaw-labs/zeroclaw/issues/7314)** — *WASM plugin program tracker*：WASM 插件大项目协调 tracker 收尾。
- **[#6441](https://github.com/zeroclaw-labs/zeroclaw/issues/6441)** — *Add Lemmy channel*：Lemmy 私有消息轮询 MVP 进入验收阶段（与 Mastodon/Rocket.Chat/Zulip 系列同源）。

### 已关闭 PR
- **[#10217](https://github.com/zeroclaw-labs/zeroclaw/pull/10217)** — `fix(channels): make the filesystem listener cancellation-aware`（风险 high，size S）：解决 v0.8.4 Alpine 下空闲 watcher 占满 Tokio worker 的挂死问题，已闭环。

**整体进度**：今日推动了 **6 个长期议题**和 **1 个 P1 修复**的正式闭环，并对 WASM 插件、CLI i18n、Webhook 自定义等方向完成阶段性收尾。项目在"通道扩展"和"沙箱审批链路"两条主线上各推进了一小步。

---

## 4. 社区热点（讨论最活跃的议题）

| 排名 | 议题 | 评论数 | 类型 | 一句话诉求 |
|---|---|---|---|---|
| 1 | [#9487](https://github.com/zeroclaw-labs/zeroclaw/issues/9487) RFC: Runtime-owned conversation sessions | 25 | RFC（p2, high risk） | 把对话会话所有权统一归于 runtime，所有迁移入口必须提交 `InboundAction` |
| 2 | [#9488](https://github.com/zeroclaw-labs/zeroclaw/issues/9488) RFC: Unified attachment architecture | 19 | RFC（p2, high risk） | 统一 Web chat 与各通道的附件（attachment）架构 |
| 3 | [#6850](https://github.com/zeroclaw-labs/zeroclaw/issues/6850) RFC: Decouple memory lifecycle policy | 17 | RFC（p2, high risk） | 把记忆存储与生命周期治理拆开，避免各 gateway/channel 各自重写 |
| 4 | [#8780](https://github.com/zeroclaw-labs/zeroclaw/issues/8780) RFC: Realtime speech-to-speech channel for Gemini Live | 17 | RFC（p2, high risk） | 通过 broker 契约新增 Gemini Live 实时语音通道 |
| 5 | [#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) Tracker: Maintainer decision queue | 13 | Tracker（p2, risk medium） | 维护者决策队列，加速 RFC 的接受/拒绝/拆分节奏 |
| 6 | [#8424](https://github.com/zeroclaw-labs/zeroclaw/issues/8424) RFC: Workspace-relative forbidden paths + .zeroclawignore | 12 | RFC（p2, high risk） | 保护 workspace 内部敏感文件，引入 `.zeroclawignore` |
| 7 | [#6996](https://github.com/zeroclaw-labs/zeroclaw/issues/6996) RFC: Granular sandbox policy | 11 | RFC（p2, in-progress） | 统一应用层与 OS 沙箱（Landlock/Bubblewrap/Seatbelt）的策略面 |
| 8 | [#10050](https://github.com/zeroclaw-labs/zeroclaw/issues/10050) RFC: Verbatim channel send over gateway | 5 | RFC（p2, high risk） | 在 gateway 提供"不经 agent turn"的直发通道 |
| 9 | [#9810](https://github.com/zeroclaw-labs/zeroclaw/issues/9810) RFC: Load Agent Plugins 1.0 | 4 | RFC（p2, high risk） | 加载供应商中立的 Agent Plugins 1.0.0 规范 |
| 10 | [#10076](https://github.com/zeroclaw-labs/zeroclaw/issues/10076) RFC: Comprehensive WASM plugin architecture | 2 | RFC（p2, high risk） | "一切皆插件"的 WASM 完整分层架构 |

**诉求分析**：热点高度集中暴露三个深层信号——
1. **架构契约混乱**：会话/附件/记忆三类核心契约同时被多个 workstream 修改，缺乏单一所有者（[#9600](https://github.com/zeroclaw-labs/zeroclaw/issues/9600) 即为此而设的 tracker，8 评论）。
2. **沙箱与权限精细化**：用户希望在工作区内部也能保护 `.env`、`config.toml`、`.cargo/config.toml` 等敏感路径，且希望应用层与 OS 沙箱策略面不再漂移。
3. **多通道/多供应商扩展**：Gemini Live、Mastodon、Zulip、Rocket.Chat、Twilio SMS、Slack Events API、gbr/1 phone pairing 等覆盖了从 IM、社交联邦到语音再到手机配对的完整图景，说明 ZeroClaw 正在被当作"嵌入式 AI agent gateway"使用。

---

## 5. Bug 与稳定性

| 严重度 | 议题 | 是否已有 fix PR | 状态 |
|---|---|---|---|
| **P1 / 高风险** | [#9666](https://github.com/zeroclaw-labs/zeroclaw/issues/9666) `fix(channels): make the filesystem listener cancellation-aware` | ✅ PR [#10217](https://github.com/zeroclaw-labs/zeroclaw/pull/10217) 已关闭合并 | **已解决** |
| **P2 / 高风险** | [#6105](https://github.com/zeroclaw-labs/zeroclaw/issues/6105) `[Bug]: Agent doesn't have context of the cron job it's run` | 🔄 受 [#10258](https://github.com/zeroclaw-labs/zeroclaw/pull/10258) 相关修复推进 | ⚠️ **仍 blocked** |
| **P2 / 高风险** | [#10272](https://github.com/zeroclaw-labs/zeroclaw/issues/10272) `correlate Hailo log assertions under parallel tests`（新） | ❌ 尚未关联 fix PR | ⚠️ **新报告，未处理**（由 [#9109](https://github.com/zeroclaw-labs/zeroclaw/pull/9109) 验证过程中暴露） |
| **P2 / 高风险** | [#6754](https://github.com/zeroclaw-labs/zeroclaw/issues/6754) ACP bridge auto-pairing 一次性码依赖 | 🟡 status: accepted，等待 PR | ⏳ 已接受未修复 |
| **P2 / 高风险** | [#9703](https://github.com/zeroclaw-labs/zeroclaw/issues/9703) `RFC: Goal mode v3 — asynchronous child supervision` | ❌ | ⛔ **blocked** |

**修复 PR 一览（未合并，待 review）**：
- [#10246](https://github.com/zeroclaw-labs/zeroclaw/pull/10246) `fix(rpc): expose configured channels to sessions`（XL, high risk）
- [#10241](https://github.com/zeroclaw-labs/zeroclaw/pull/10241) `fix(channels): restore supervised shell approval routing`（M, high risk）
- [#9999](https://github.com/zeroclaw-labs/zeroclaw/pull/9999) `fix(compatible): classify output-limited terminal responses`（XL, stacked on #9447）
- [#9447](https://github.com/zeroclaw-labs/zeroclaw/pull/9447) `fix(anthropic): classify incomplete terminal responses`（XL, in-progress）
- [#10258](https://github.com/zeroclaw-labs/zeroclaw/pull/10258) `fix(cron): map command patches onto agent job prompts`
- [#10253](https://github.com/zeroclaw-labs/zeroclaw/pull/10253) `fix(cron): preserve scheduler workspace policy`
- [#9707](https://github.com/zeroclaw-labs/zeroclaw/pull/9707) `fix(config): migrate bare vision_model_provider to dotted alias ref`（L）
- [#10250](https://github.com/zeroclaw-labs/zeroclaw/pull/10250) `fix(security): contain plugin private egress carveouts`
- [#10256](https://github.com/zeroclaw-labs/zeroclaw/pull/10256) `fix(gateway): redact duplicate idempotency keys from logs`
- [#10278](https://github.com/zeroclaw-labs/zeroclaw/pull/10278) `fix(zerocode): respect paste input ownership`
- [#10144](https://github.com/zeroclaw-labs/zeroclaw/pull/10144) `fix(providers): complete lifecycle provider accounting`（XL, in-progress）

> **稳定度信号**：今日报告的 Bug 数量为 1 个新议题（#10272），属于测试不确定性而非生产事故；已修复的 P1 阻塞性 Bug（#9666 → #10217）证明 PR-Issue 闭环通畅。但 cron 上下文与 Goal v3 仍处 blocked 状态，需维护者推进。

---

## 6. 功能请求与路线图信号

| 功能方向 | 关联 Issue / PR | 路线图预判 |
|---|---|---|
| **AI / Agent 行为改进** | [#9703](https://github.com/zeroclaw-labs/zeroclaw/issues/9703) Goal mode v3 异步子目标监督；[#9713](https://github.com/zeroclaw-labs/zeroclaw/pull/9713) 修剪事件令牌核销 | 高概率进入下一主版本，涉及 runtime/agent 并发模型升级 |
| **通道扩展** | [#6423](https://github.com/zeroclaw-labs/zeroclaw/issues/6423) Mastodon；[#6435](https://github.com/zeroclaw-labs/zeroclaw/issues/6435) Rocket.Chat；[#6437](https://github.com/zeroclaw-labs/zeroclaw/issues/6437) Zulip；[#6427](https://github.com/zeroclaw-labs/zeroclaw/issues/6427) Twilio SMS；[#9022](https://github.com/zeroclaw-labs/zeroclaw/issues/9022) Slack Events API；[#8780](https://github.com/zeroclaw-labs/zeroclaw/issues/8780) Gemini Live | 系列全部 status: accepted，建议作为 0.9 通道矩阵的批量合入目标 |
| **供应商 / 模型** | [#9109](https://github.com/zeroclaw-labs/zeroclaw/pull/9109) Hailo-Ollama；[#9575](https://github.com/zeroclaw-labs/zeroclaw/issues/9575) OpenAI-compatible 预热走 `/models` | 边缘推理供应商名单正在完善，Hailo PR 已挂起多月（needs-author-action）需关注 |
| **WASM / 插件体系** | [#9810](https://github.com/zeroclaw-labs/zeroclaw/issues/9810) Agent Plugins 1.0；[#10076](https://github.com/zeroclaw-labs/zeroclaw/issues/10076) "everything is a plugin"；[#10169](https://github.com/zeroclaw-labs/zeroclaw/pull/10169) ADR-014；[#10250](

</details>

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*