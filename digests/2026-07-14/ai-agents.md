# OpenClaw 生态日报 2026-07-14

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-07-14 01:54 UTC

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

# OpenClaw 项目日报 — 2026-07-14

## 1. 今日速览

OpenClaw 项目今日维持极高活跃度：过去 24 小时共有 500 条 Issues 与 500 条 PRs 更新，关闭率分别约 35%（173/500）与 47%（236/500），整体流量仍以"高流入 + 较高处理"为主。与此同时，项目发布了 **v2026.7.1** 新版本，重点引入 Sonnet 5 / Mythos 5 / Muse Spark 1.1 / ClawRouter 等新模型并将 GPT-5.6 设为新装默认值，但该版本上线后立即触发 **106914（models list 崩溃）** 与 GPT-5.6 Sol 在 Codex runtime 中要求升级（#103884）等两个已关闭的回归。健康度评估：**中高强度迭代、稳定性承压**，P0/P1 回归与跨通道消息丢失类问题集中暴露，需要维护者重点关注。

---

## 2. 版本发布

### 🚀 v2026.7.1 — openclaw 2026.7.1

**Highlights:**
- 新增模型 / 提供方：Featherless、Claude Sonnet 5、Mythos 5、Meta Muse Spark 1.1、ClawRouter
- 新装默认模型切换为 **GPT-5.6**
- 思考深度：Sol / Terra 支持 `/think ultra`，Luna 支持 `max`
- 兼容 Z.AI `max` 标识
- OAuth 后自动刷新模型可用性

**⚠️ 已知回归（已修复并关闭）:**
- [#106914](https://github.com/openclaw/openclaw/issues/106914) `models list` 在 `sonnet-5` 行无 cost 字段时崩溃（`applyAnthropicSonnet5Cost` TypeError）
- [#103884](https://github.com/openclaw/openclaw/issues/103884) GPT-5.6 Sol 在 OpenClaw Codex runtime 中被要求"升级 Codex"，但 standalone Codex 工作正常

**迁移注意事项:** 升级到 2026.7.1 后建议运行 `openclaw doctor --fix`，并对 `anthropic/sonnet-5` 与 `gpt-5.6-sol` 的配置做兼容性验证；OAuth 模型可用性刷新可能会改变默认 fallback 链。

---

## 3. 项目进展

今日合并 / 关闭的重要 PR 推进了若干结构性工作：

| PR | 主题 | 影响 |
|---|---|---|
| [#106979](https://github.com/openclaw/openclaw/pull/106979) | 修复 changed-gate checkout 残留导致的基线漂移（维护者 steipete） | 提升 CI 一致性 |
| [#106978](https://github.com/openclaw/openclaw/pull/106978) | webhooks 插件改用原生 Zod schema（`z.json()` + `z.strict()`） | 降低维护成本、统一校验链 |
| [#106967](https://github.com/openclaw/openclaw/pull/106967) | 清理 agent lint 与 browser dead export | 修复 CI `preserve-caught-error` 违规 |
| [#106977](https://github.com/openclaw/openclaw/pull/106977) | 私有化 `BrowserRouteHandler` 路由类型 | 修复 `check-dependencies` CI shard 失败 |
| [#106981](https://github.com/openclaw/openclaw/pull/106981) | 恢复 Control UI reload history 与 bundled 图标 | 修复两条浏览器回归 |
| [#106555](https://github.com/openclaw/openclaw/issues/106555)（已关闭） | 拆解 `chat.send` 4,015 行热点的 lifecycle phases 重构 | 推进 gateway 可维护性 |
| [#92057](https://github.com/openclaw/openclaw/issues/92057)（已关闭） | 多 session / 多 agent 负载下 gateway 慢 / 超时 | 性能问题收尾 |
| [#102400](https://github.com/openclaw/openclaw/issues/102400)（已关闭） | Slack / webchat / heartbeat 入站对 reply session init conflict 改为 retryable | 跨通道消息可靠性提升 |

整体看，项目在 **CI 清理、网关重构、跨通道可靠性**三条线上有明显推进；然而 release-blocking 的 P0（#104721、#101290、#103076）仍 OPEN，稳定性侧的天花板尚未突破。

---

## 4. 社区热点

按评论 / 👍 数排序的最高热度 Issue：

- 🥇 **[#75 Linux/Windows Clawdbot Apps](https://github.com/openclaw/openclaw/issues/75)** — 112 评论 / 81 👍，自 2026-01-01 起悬而未决，是项目最长青的平台诉求：补齐 Linux/Windows 桌面端，与 macOS/iOS/Android 矩阵对齐。维护者标记 `needs-product-decision`、`needs-security-review`，状态偏冷。
- 🥈 **[#7707 Memory Trust Tagging by Source](https://github.com/openclaw/openclaw/issues/7707)** — 18 评论，呼吁按来源给 memory 打信任级别以防 memory poisoning。
- 🥉 **[#104721 [Bug] 工具结果全部返回 "(see attached image)" 字面量](https://github.com/openclaw/openclaw/issues/104721)** — 16 评论 / P0 / ux-release-blocker，影响所有工具调用输出。
- **[#102020 跨通道会话第二条消息 "reply session initialization conflicted"](https://github.com/openclaw/openclaw/issues/102020)** — 13 评论，Signal + da（em）通道。
- **[#38327 gemini-3.1-pro-preview 抛 "Cannot convert undefined or null to object"](https://github.com/openclaw/openclaw/issues/38327)** — 11 评论 / P1 / regression。
- **[#101290 CLI startup preflight 可在 gateway 运行中损坏 SQLite](https://github.com/openclaw/openclaw/issues/101290)** — 11 评论 / P0 / 影响数据完整性。
- **[#10687 Fully dynamic model discovery（OpenRouter + beyond）](https://github.com/openclaw/openclaw/issues/10687)** — 10 评论 / 3 👍，与 2026.7.1 引入新模型直接相关。
- **[#7722 Filesystem Sandboxing Config (tools.fileAccess)](https://github.com/openclaw/openclaw/issues/7722)** — 10 评论 / 4 👍。
- **[#11665 Webhook hook sessions 多轮支持未实现](https://github.com/openclaw/openclaw/issues/11665)** — 9 评论，与 [#106978](https://github.com/openclaw/openclaw/pull/106978) webhooks 重构形成潜在联动。
- **[#6615 exec-approvals denylist](https://github.com/openclaw/openclaw/openclaw/issues/6615)** — 7 评论 / 7 👍，呼声高、与 [#69512](https://github.com/openclaw/openclaw/issues/69512) 把 allowlist 转发到 claude-cli 形成完整诉求链。

**诉求分析:** 长期 TOP 议题集中在三个方向 —— **平台覆盖广度**（Linux/Windows）、**模型与凭据可发现性**（动态模型 / OAuth 后刷新 / fallback）、**纵深防御**（memory trust、filesystem sandbox、exec denylist、allowlist 跨后端传递）。前三者与 v2026.7.1 的方向高度吻合，是项目下一阶段路线图的重要信号。

---

## 5. Bug 与稳定性

按严重程度排列：

### 🔴 P0 — 数据 / 启动阻断
| Issue | 现象 | 修复 PR | 状态 |
|---|---|---|---|
| [#104721](https://github.com/openclaw/openclaw/issues/104721) | 所有 tool 结果返回 `(see attached image)` 字面量 | 暂无（与 #100121 同源） | OPEN |
| [#101290](https://github.com/openclaw/openclaw/issues/101290) | CLI 启动预检可在 gateway 运行时损坏 `openclaw.sqlite`（"database disk image is malformed"） | 暂无 | OPEN |
| [#103076](https://github.com/openclaw/openclaw/issues/103076) | #102780 后仍有 5+ legacy-state 源阻塞 gateway 启动（Matrix / Memory Core / update-check / Codex sidecar） | 暂无 | OPEN |
| [#106436 PR](https://github.com/openclaw/openclaw/pull/106436) | npm 12 metadata 把 health plugin 误判 disable | **#106436 OPEN** | 待合并 |

### 🟠 P1 — 回归 / 消息丢失
| Issue | 现象 | 修复 PR |
|---|---|---|
| [#100121](https://github.com/openclaw/openclaw/issues/100121) | exec/tool 失败时 Discord 显示 `(see attached image)` 并抑制模型回复 | 暂无 |
| [#38327](https://github.com/openclaw/openclaw/issues/38327) | google-vertex/gemini-3.1-pro-preview 抛 "Cannot convert undefined or null to object"（2026.3.2 regression） | 暂无 |
| [#77012](https://github.com/openclaw/openclaw/issues/77012) | WebChat transcript 每个 turn 被覆盖（5.2 regression） | 暂无 |
| [#77443](https://github.com/openclaw/openclaw/issues/77443) | WhatsApp event loop 在第一条消息后阻塞（12s+，Windows） | 暂无 |
| [#92769](https://github.com/openclaw/openclaw/issues/92769) | MiniMax M3 via OpenRouter 丢失 reasoning / reasoning_details | **linked-pr-open** |
| [#77675](https://github.com/openclaw/openclaw/issues/77675) | request.headers SecretRefs 在 embedded agent 上下文抛 "unresolved SecretRef" | 暂无 |
| [#76665](https://github.com/openclaw/openclaw/issues/76665) | z.ai provider (GLM gateway) 会话上下文静默丢失 | 暂无 |
| [#86012](https://github.com/openclaw/openclaw/issues/86012) | LINE 消息因 reply token 过期 + 缺 push 兜底静默丢失 | **linked-pr-open** |
| [#77292](https://github.com/openclaw/openclaw/issues/77292) | Telegram 单 bot 跨 DM 用户间上下文污染（#62306 regression） | 暂无 |
| [#77720](https://github.com/openclaw/openclaw/issues/77720) | 子 agent 死亡时不向孙 session 发送终止信号 → 永久 stale_running | 暂无 |
| [#77307](https://github.com/openclaw/openclaw/issues/77307) | googlechat 2026-05-01 起 broken（unsupported_grant_type） | **linked-pr-open** |
| [#98790](https://github.com/openclaw/openclaw/issues/98790) | 并发 agent-to-agent turn 致 transcript 永久中毒 | 暂无 |

### 🟡 P2 — 行为 / 性能
- [#90213](https://github.com/openclaw/openclaw/issues/90213) 升级 2026.6.1 后 `doctor --fix` 后仍持续出现 legacy state 迁移警告
- [#77802](https://github.com/openclaw/openclaw/issues/77802) `doctor --fix` 多验证错误时全有 / 全无，atomic 失败致修复不持久化
- [#76584](https://github.com/openclaw/openclaw/issues/76584) Feishu 7 agent 全部初始化失败（TDZ 引用错误，Windows Server 2022）
- [#77625](https://github.com/openclaw/openclaw/issues/77625) `reasoningDefault=stream` 导致无限自递归
- [#77347](https://github.com/openclaw/openclaw/issues/77347) Plugin loader LRU cache key 误含 workspaceDir
- [#76275](https://github.com/openclaw/openclaw/issues/76275) Gateway restarting loop（4.23 → 4.24 regression）
- [#77610](https://github.com/openclaw/openclaw/issues/77610) / [#77750](https://github.com/openclaw/openclaw/issues/77750) macOS `spawn EBADF`（libuv kqueue slot leak / FD 耗尽）

**修复覆盖面评估:** 上述 P0/P1 中仅 **#104322 (Feishu 重试)**、**#106436 (npm 12 metadata)**、**#105025 (Twilio RCS)**、**#106927 (paired-node Codex 控制)** 等少数已有明确 PR；其余仍依赖 `needs-live-repro` / `needs-maintainer-review`。

---

## 6. 功能请求与路线图信号

按"已有 PR 支持 + 社区呼声"双维度评估最有可能进入下一版本的提案：

| 优先级 | 提案 | 信号 |
|---|---|---|
| 🔥 高 | **[#11665 Webhook 多轮会话复用 sessionKey](https://github.com/openclaw/openclaw/issues/11665)** | 文档已承诺未实现；[#106978](https://github.com/openclaw/openclaw/pull/106978) 已重构 webhooks Zod schema，是落地窗口 |
| 🔥 高 | **[#6615 exec-approvals denylist](https://github.com/openclaw/openclaw/issues/6615)** | 👍 7，与 [#69512](https://github.com/openclaw/openclaw/issues/69512) allowlist 转发到 claude-cli 互补，可打包为 exec-approvals 2.0 |
| 🔥 高 | **[#10687 Fully dynamic model discovery](https://github.com/openclaw/openclaw/issues/10687)** | v2026.7.1 已扩大模型目录但仍未"动态"，是 2026.7.x 路线图热门 |
| 🔥 中 | **[#75 Linux/Windows Clawdbot Apps](https://github.com/openclaw/openclaw/issues/75)** | 长尾热门但无 PR，需 product decision |
| 🔥 中 | **[#8892 TUI --agent flag](https://github.com/openclaw/openclaw/issues/8892)** | 👍 3，与 agent 体系升级配套 |
| 🔥 中 | **[#9016 Expose OpenRouter usage cost](https://github.com/openclaw/openclaw/issues/9016)** | 与 [#8724](https://github.com/openclaw/openclaw/issues/8724) per-model timeout 一起强化 provider 元信息 |
| 🔥 中 | **[#9986 Fallback on context length exceeded](https://

---

## 横向生态对比

# 个人 AI 助手与自主智能体开源生态横向对比分析

**报告日期**：2026-07-14 · **覆盖项目数**：13 · **数据口径**：GitHub Issues & PRs 当日快照

---

## 1. 生态全景

2026 年 7 月中旬，个人 AI 助手与自主智能体开源生态呈现 **"头部高密度迭代、腰部质量巩固、尾部静默分化"** 的三层结构：以 OpenClaw、CoPaw、IronClaw、ZeroClaw 为代表的头部项目日均 PR 流量已达 30–500 量级，正同时承受**新模型接入速度**与**v2.0/重大版本稳定性**的双重压力；以 NanoBot、Hermes Agent、LobsterAI 为代表的中部项目进入"高闭环率、低净增长"的质量打磨期；而 PicoClaw、NullClaw、Moltis 等长尾项目则陷入 PR 长期挂起、Issue 静默的"维护性冬眠"。与此同时，**MCP 安全审批、跨通道消息可靠性、工具调用配对完整性、Memory 系统深化**成为整个生态最高频的共性诉求，标志行业正从"功能广度竞赛"过渡到"基础设施鲁棒性"阶段。

---

## 2. 各项目活跃度对比

| 项目 | 语言/栈 | Issues (新/活跃) | PRs (待合并/合并关闭) | Release | 关闭率 | 健康度评估 |
|---|---|---|---|---|---|---|
| **OpenClaw** | 多栈 | 500 | 500 (236 closed) | **v2026.7.1** | 35% / 47% | 🟠 中高强度迭代、稳定性承压 |
| **CoPaw** | Python | 27 | 28 | **v2.0.0.post1** | ~50% | 🟠 v2 升级修复密集期 |
| **IronClaw** | Rust | 34 | 50 (16 closed) | 无 | ~32% | 🟡 Bug Bash 中、评审压力大 |
| **ZeroClaw** | Rust | 50 (16 closed) | 50 (3 closed) | 无 | 32% / 6% | 🟡 质量打磨期、维护带宽紧张 |
| **NanoClaw** | TypeScript | 3 (3 closed) | 33 (27 closed) | 无 | 100% / 82% | 🟢 修缮型迭代、闭环高效 |
| **NanoBot** | Python | 13 (11 closed) | 44 (17 closed) | 无 | 85% | 🟢 稳定迭代、本地化与质量修补 |
| **Hermes Agent** | 多栈 | 50 (28 closed) | 50 (0 merged) | 无 | 56% / 0% | 🟡 sweeper 批量收尾、Review 拥堵 |
| **LobsterAI** | Electron | 0 | 21 (19 closed) | 无 | 90% | 🟢 单日高产、内部冲刺 |
| **PicoClaw** | Go | 4 | 5 (1 closed) | 无 | 20% | 🔴 维护性冬眠、stale 积压 |
| **NullClaw** | Zig | 0 | 11 (0 closed) | 无 | 0% | 🔴 全 PR 挂起、无活跃反馈 |
| **Moltis** | Rust | 0 | 1 (0 closed) | 无 | 0% | 🔴 双零状态 |
| **TinyClaw** | — | 0 | 0 | 无 | — | ⚫ 无活动 |
| **ZeptoClaw** | — | 0 | 0 | 无 | — | ⚫ 无活动 |

**关键观察**：日 PR ≥ 30 的项目仅 5 个（OpenClaw/CoPaw/ZeroClaw/IronClaw/NanoClaw），但承担了当日生态 **75%** 以上的代码变更；Issue 端关闭率超过 80% 的项目仅 2 个（NanoClaw 100%、NanoBot 85%），说明"快速且干净地处理反馈"仍是少数项目的差异化能力。

---

## 3. OpenClaw 在生态中的定位

### 3.1 规模与影响力
OpenClaw 单日 1000 条 Issue+PR 流量，是当日**第二梯队头部项目（CoPaw、ZeroClaw、IronClaw）** 的 **10–30 倍量级**，已建立实质性的"参照系"地位。其 2026.7.1 单版本同时引入 Sonnet 5 / Mythos 5 / Muse Spark 1.1 / ClawRouter / GPT-5.6 默认值，反映其在**模型供应链**上的"枢纽"角色。

### 3.2 优势
1. **多通道矩阵最完整**：Slack / Discord / WhatsApp / Telegram / LINE / Signal / WebChat / Google Chat / Feishu 全覆盖；
2. **新模型接入速度最快**：v2026.7.1 单版本新增 4 个模型/提供方，OAuth 后自动刷新可用性；
3. **诉求维度最广**：从平台覆盖到纵深防御（memory trust、filesystem sandbox、exec denylist）一应俱全；
4. **生态辐射力强**：Hermes Agent、IronClaw、LobsterAI 的多通道修复方向与 OpenClaw 高度同步。

### 3.3 技术路线差异
- **vs CoPaw**：OpenClaw 走"全平台覆盖+模型广度"，CoPaw 走"Desktop 主战+工具执行层稳定"；
- **vs ZeroClaw**：OpenClaw 偏 Python/Node 多栈网关，ZeroClaw 偏 Rust 原生二进制 + i18n 全覆盖；
- **vs IronClaw**：OpenClaw 已有"统一扩展模型"成熟实践，IronClaw 正在通过 NEA-25 整合同类能力；
- **vs NanoClaw**：OpenClaw 解决跨通道消息可靠性问题（retryable session init），NanoClaw 解决"无 adapter 时不静默丢弃"的同类根因。

### 3.4 社区规模对比
OpenClaw 的 #75 Linux/Windows Desktop Apps 单 issue 累计 112 评论/81 👍，是 PicoClaw 总活跃度的 30 倍以上，证明其已经形成**多角色贡献者生态**（维护者 steipete、产品决策方、安全审阅方），而 PicoClaw、NullClaw、Moltis 仍为单维护者驱动。

---

## 4. 共同关注的技术方向

### 4.1 MCP 安全与工具治理（5/13 项目）
| 项目 | 具体诉求 |
|---|---|
| **OpenClaw** | filesystem sandbox（#7722）、exec-approvals denylist（#6615）、allowlist 跨后端传递（#69512） |
| **NanoClaw** | `add_mcp_server` 审批卡显示 args/env 防"审批走私"（#2998）；MCP 工具白名单（#3037） |
| **CoPaw** | MCP 子工具权限 allow/deny 失效（#5947）；policy 深度扫描热加载（#6063） |
| **IronClaw** | `SECURITY.md` 与私有漏洞披露缺失（#6000）；Slack OAuth 加固（#5957） |
| **Hermes Agent** | `mcp-protocol-version` 错误注入修复（#38938）；Streamable HTTP MCP ping 超时（#64073） |

### 4.2 跨通道消息可靠性（7/13 项目）
所有 IM 集成项目（OpenClaw、NanoBot、Hermes Agent、NanoClaw、CoPaw、ZeroClaw、IronClaw）均面临**消息静默丢失**类问题：
- OpenClaw #102020 Signal+da 通道 reply session init conflict
- NanoClaw #2995/#2996/#2226/#2743/#2938 deliveryAdapter 缺 adapter 时静默丢消息
- Hermes Agent #63911 Telegram DM topic 模式吞消息
- CoPaw #5962 WeChat 通道 orphan tool_result 挂会话

### 4.3 工具调用配对与上下文压缩（4/13 项目）
- **OpenClaw #104721** 工具结果全部返回 `(see attached image)` 字面量（P0）
- **CoPaw #5996/#5960/#5986** offload/scroll 裁剪破坏 tool_call 配对 → 400
- **OpenClaw #98790** 并发 agent-to-agent turn 致 transcript 永久中毒
- **CoPaw #5961** doom loop 检测过激

### 4.4 Memory 系统深化与跨 Provider 共享（5/13 项目）
- **OpenClaw #7707** Memory Trust Tagging by Source（防 poisoning）
- **NanoClaw #3012/#3013** provider-agnostic 持久记忆 + Codex hook
- **ZeroClaw #9048** RFC：会话历史与长期记忆彻底解耦
- **NanoBot #4320** tools.audit + AuditTool（操作可观测性）
- **NullClaw #961** `auto_recall` / `recall_limit` / `max_context_bytes` 三档可调

### 4.5 自更新/升级路径硬化（3/13 项目）
- **Hermes Agent #39431/#39444/#39411/#39549** `hermes update` 在 Windows/uv/Termux/macOS 变种半更新
- **OpenClaw #103076** 5+ legacy-state 源阻塞 gateway 启动
- **LobsterAI #2321** macOS `hdiutil` 更新失败修复（同类形态）

### 4.6 桌面端平台扩展（3/13 项目）
- **OpenClaw #75** Linux/Windows Clawdbot Apps（112 评论/81 👍）
- **LobsterAI #2323/#2326/#2327** Windows 签名+自愈解压+Web Installer
- **Hermes Agent** Desktop CJK IME + Windows 中文截断修复（#39534/#39538/#39231）

### 4.7 i18n / 本地化（4/13 项目）
- **NanoBot #4914** 新增 pt-BR
- **ZeroClaw #9049** agent-scope rejection 5 语言本地化
- **NullClaw #963/#962** Weixin iLink、Anthropic 中英双语文档
- **Hermes Agent** Desktop CJK 输入法支持

---

## 5. 差异化定位分析

| 维度 | OpenClaw | CoPaw | ZeroClaw | NanoClaw | Hermes Agent | LobsterAI | IronClaw | NanoBot |
|---|---|---|---|---|---|---|---|---|
| **核心场景** | 多通道网关 + 模型路由器 | Desktop 个人助手 | Rust CLI/Gateway | IM 通道适配 + 投递 | Desktop + Skills Marketplace | 桌面端 + 办公协作 | 扩展模型重构 | 通道 + Dream 记忆 |
| **目标用户** | 高级用户 / 自托管者 | 个人开发者 | 运维 + 多语言用户 | 团队 IM 集成者 | 桌面 AI 工具用户 | 桌面办公用户 | Rust 生态 + 企业 | Python 生态 + 研究者 |
| **技术架构** | 多栈网关 + 插件 | Python + Electron | Rust 原生 + i18n | TypeScript + adapter 模式 | 多栈 + MCP + Skills | Electron + Cowork | Rust + 扩展 lifecycle | Python + 通道抽象 |
| **发布节奏** | 月度 + 持续 patch | 重大版本 + post hotfix | 双周维护分支 | 滚动合并 | sweeper 批处理 | 内部冲刺 | Bug Bash 集中 | 滚动 |
| **核心壁垒** | 通道/模型广度 | 工具执行层稳定性 | 性能 + i18n + 本地化 | 投递可靠性 + 安全 | Skills 生态 + Desktop 体验 | 安装/更新链路可靠性 | 扩展模型统一化 | Dream 记忆 + 审计 |

**关键差异**：
- **OpenCl

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目日报 · 2026-07-14

> 数据来源：[HKUDS/nanobot](https://github.com/HKUDS/nanobot) · 统计周期：过去 24 小时

---

## 一、今日速览

过去 24 小时，NanoBot 项目整体保持**高活跃度、高闭环效率**的状态：共触发 13 条 Issues 更新（其中 11 条关闭，关闭率达 84.6%）、44 条 PRs 更新（17 条已合并/关闭，27 条待合并），但**无新版本发布**。Issue 端以清理历史问题（stale issue 批量关闭）与修复 Dream 内存/审计相关 bug 为主线；PR 端则集中于**通道架构重构、模型预设绑定、跨平台稳定性修复**，显示项目正处于 v0.3.x 后期打磨与功能深化阶段。维护团队对反馈响应迅速，无重大遗留事件。

---

## 二、版本发布

⚠️ 今日**无新版本发布**。可关注已合并但未发布的具体变更：审计模块（#4320）、Dream 行尾差异修复（#4909）、WebUI 巴西葡语本地化（#4914），上述变更可能打包进下一版本。

---

## 三、项目进展（已合并/关闭的重要 PR）

| PR | 主题 | 类型 | 影响 |
|---|---|---|---|
| [#4320](https://github.com/HKUDS/nanobot/pull/4320) | feat(audit): tools.audit 配置与 AuditTool | 功能 | **新增** agent 操作可观测性基础设施，默认关闭、零开销，为生产环境合规留出空间 |
| [#4909](https://github.com/HKUDS/nanobot/pull/4909) | fix(dream): 忽略仅换行差异 | Bug 修复 | 解决 CRLF/LF 平台差异导致的"假变更"误报，提升 Dream 内存 diff 稳定性 |
| [#4914](https://github.com/HKUDS/nanobot/pull/4914) | feat(webui): 新增巴西葡语（pt-BR） | 本地化 | WebUI 第 6 种语言支持，扩展拉美用户覆盖 |
| [#4913](https://github.com/HKUDS/nanobot/pull/4913) | docs: 更新 7 月 12 日前变更 | 文档 | README 五条最新更新 + 发布档案补齐 17 天内容 |
| [#4912](https://github.com/HKUDS/nanobot/pull/4912) | docs: 移除失效的 Star History | 文档 | 应对 GitHub 6/30 公告的 API 访问限制，避免主页出现破损图像 |

**项目健康度判断**：今日合并/关闭的 PR 主要集中在**质量修补、本地化、文档维护**，并非主功能扩展，反映项目处于稳定迭代期。

---

## 四、社区热点

按评论数与反应数排序：

1. **[#1011](https://github.com/HKUDS/nanobot/issues/1011) [stale] Mattermost Bot** — 👍 **4**（最高点赞），2 条评论。用户对 Discord/Telegram/Slack/WhatsApp 之外的开源 IM 渠道呼声强烈，但被标记 stale 后关闭。
2. **[#1304](https://github.com/HKUDS/nanobot/issues/1304) Can't use codex** — 4 条评论，反映 Codex CLI 用户集成障碍。
3. **[#4864](https://github.com/HKUDS/nanobot/issues/4864) [bug] Endless loop for complete_goal** — 3 条评论，**当前唯一未关闭且评论活跃**的 issue，疑为网关层 JSON 序列化回归引发。
4. **[#4897](https://github.com/HKUDS/nanobot/issues/4897) [bug] Discord bot integration** — 3 条评论，bot 在线但收不到消息，疑似 webhook/网关接入缺陷。
5. **[#1500](https://github.com/HKUDS/nanobot/issues/1500) 信息流强制输出** — 👍 1，2 条评论。用户期望引入日志分级（info/warn/error）+ LLM 控制输出开关。

**社区诉求归纳**：跨平台渠道扩展（微信/Mattermost/Codex）+ 输出可控性 + 网关稳定性 是三大主轴。

---

## 五、Bug 与稳定性

按严重程度排列：

### 🔴 严重（仍开放，需优先修复）
- **[#4864](https://github.com/HKUDS/nanobot/issues/4864)** Endless loop `<tool_call> complete_goal`
  - 影响：agent 任务无法正常结束、gateway 死循环
  - 根因：recap 参数被当作裸字符串而非 JSON 对象
  - 是否已有 fix PR：**未发现**，建议维护者优先排查

### 🟡 中等（已关闭，确认修复）
- **[#4897](https://github.com/HKUDS/nanobot/issues/4897)** Discord bot 集成 → 已关闭
- **[#2376](https://github.com/HKUDS/nanobot/issues/2376)** 末尾出现 2 条 assistant 消息（Hosted_vllmException 400） → 已关闭
- **[#4882](https://github.com/HKUDS/nanobot/issues/4882)** Dream 内容 diff 误报空文件变更 → 已关闭
- **[#4893](https://github.com/HKUDS/nanobot/issues/4893)** /dream-log 与 /dream-restore 显示非 Dream 提交 → 已关闭
- **[#4894](https://github.com/HKUDS/nanobot/issues/4894)** `prune_dream_sessions()` 无法匹配 base64 编码文件名 → 已关闭（cf2f5896 提交后引入的回归）
- **[#2352](https://github.com/HKUDS/nanobot/issues/2352)** 飞书文件无法被 bot 接收 → 已关闭
- **[#4887](https://github.com/HKUDS/nanobot/issues/4887)** dev 依赖缺 lark-oapi 致 Feishu 测试失败 → 已关闭

### 🟢 即将合并的 P1 级修复 PR
- **[#4915](https://github.com/HKUDS/nanobot/pull/4915)** fix(heartbeat): heartbeat 响应评估可配置化
- **[#4917](https://github.com/HKUDS/nanobot/pull/4917)** fix(shell): Windows UTF-16 子进程输出解码
- **[#4888](https://github.com/HKUDS/nanobot/pull/4888)** fix(filesystem): 工作区写入序列化（防止并发覆盖）
- **[#4816](https://github.com/HKUDS/nanobot/pull/4816)** fix(runner): `BaseException` 收窄为 `Exception`（保留 Ctrl+C 传播）
- **[#4839](https://github.com/HKUDS/nanobot/pull/4839)** fix(telegram): HTML parse_mode 流式溢出块

---

## 六、功能请求与路线图信号

| 请求 | 状态 | 是否已有对应 PR | 进入下版本的概率 |
|---|---|---|---|
| [Mattermost 渠道](https://github.com/HKUDS/nanobot/issues/1011) | 关闭（stale） | ❌ | 低（社区贡献才有望） |
| [微信功能](https://github.com/HKUDS/nanobot/issues/192) | 关闭（stale） | ❌ | 低 |
| [输出模式由 LLM 控制](https://github.com/HKUDS/nanobot/issues/1500) | 关闭 | ❌ | 中（需求合理，但需设计权衡） |
| [受保护的工具网关接口](https://github.com/HKUDS/nanobot/issues/4911) | **开放** | ✅ [#4908](https://github.com/HKUDS/nanobot/pull/4908) 通道重构铺垫 | **高** |
| [Telegram 流式 sendMessageDraft](https://github.com/HKUDS/nanobot/pull/1599) | 开放 | ✅ 自提案 | 中（长期未合） |
| [nano_timer 核心工具](https://github.com/HKUDS/nanobot/pull/4853) | 开放 | ✅ 自提案 | 高（零依赖、纯增量） |
| [WebUI 会话 Markdown 导出](https://github.com/HKUDS/nanobot/pull/4587) | 开放 | ✅ 自提案 | 中 |
| [agent hook 自动发现](https://github.com/HKUDS/nanobot/pull/4878) | 开放 | ✅ 自提案 | 高（沿用 channels/tools 既有模式） |

---

## 七、用户反馈摘要

- **多渠道整合诉求强烈** [#1011](https://github.com/HKUDS/nanobot/issues/1011) [#192](https://github.com/HKUDS/nanobot/issues/192)：用户对 Discord（游戏定位）、Telegram（俄罗斯隐私）、Slack（商业绑定）、WhatsApp（Meta 隐私）的现状不满，更倾向 Mattermost、微信等开源/本地化方案。
- **网关稳定性遭吐槽** [#4864](https://github.com/HKUDS/nanobot/issues/4864)：最近一次更新后 `complete_goal` 工具参数解析异常，导致任务无限循环。用户措辞为 "this is likely a nanobot gateway bug introduced in a recent update"。
- **输出噪声过大** [#1500](https://github.com/HKUDS/nanobot/issues/1500)：用户用一个幽默场景表达不满——cron 任务本无更新，bot 却原样输出完整执行流程，最终才说"无更新，不提示"。期望日志分级 + 静默模式。
- **飞书文件接收不友好** [#2352](https://github.com/HKUDS/nanobot/issues/2352)：即使授予全部权限，bot 仍尝试浏览器下载而非通过 MCP 接口直接存储，反映飞书集成 UX 待优化。
- **CodeX 集成受阻** [#1304](https://github.com/HKUDS/nanobot/issues/1304)：作为 OpenAI 系 CLI 工具代表用户遇到阻塞，可能影响该子用户群。

---

## 八、待处理积压

**长期开放的 Issue/PR，提醒维护者关注：**

| 编号 | 类型 | 创建时间 | 风险 |
|---|---|---|---|
| [#1599](https://github.com/HKUDS/nanobot/pull/1599) | PR — Telegram 流式 sendMessageDraft | 2026-03-06 | 已开 **4 个多月**，存在 conflict，Bot API 9.3 普及度需评估 |
| [#1011](https://github.com/HKUDS/nanobot/issues/1011) | Issue — Mattermost Bot | 2026-02-22 | 👍 4，社区呼声高但仍被 stale 关闭，建议 reopen 或转化为 RFC |
| [#192](https://github.com/HKUDS/nanobot/issues/192) | Issue — 微信功能 | 2026-02-06 | stale 关闭 |
| [#2376](https://github.com/HKUDS/nanobot/issues/2376) | Issue — 末尾双 assistant 消息 | 2026-03-23 | 已关闭但补丁与 `fix:set subagent result message role` 相关，需留意回归 |
| [#4313](https://github.com/HKUDS/nanobot/pull/4313) | PR — WebUI/config.json 配平 | 2026-06-12 | conflict 状态，P2，影响 WebUI 可用性 |
| [#4620](https://github.com/HKUDS/nanobot/pull/4620) | PR — heartbeat trigger 命令 | 2026-07-01 | 关联 #3437，P1 候选 |
| [#4587](https://github.com/HKUDS/nanobot/pull/4587) | PR — WebUI 会话 Markdown 导出 | 2026-06-29 | conflict，P2 |
| [#4878](https://github.com/HKUDS/nanobot/pull/4878) | PR — hook 自动发现 | 2026-07-10 | conflict，P2 |
| [#4853](https://github.com/HKUDS/nanobot/pull/4853) | PR — nano_timer 核心工具 | 2026-07-08 | conflict，P1 |

**维护者建议**：建议优先清理 3 个 conflict 状态的 P1 PR（#4888、#4915、#4816），尽快合入下一版本；并行排查 [#4864](https://github.com/HKUDS/nanobot/issues/4864) 网关死循环，避免影响更多用户。

---

*报告生成时间：2026-07-14 · 数据口径：GitHub Issues & Pull Requests API · 时区：UTC+8*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目日报 · 2026-07-14

---

## 1. 今日速览

Hermes Agent 仓库今日呈现"高活跃度、强收尾节奏"的特征:过去 24 小时内 50 条 Issues 中有 **28 条被关闭**(闭环率 56%),其中绝大多数已通过 `sweeper:implemented-on-main` 在主分支修复,反映出维护团队正批量清理 v0.15.x 时代积压的稳定性问题。**PR 端活跃 50 条但全部仍为 OPEN 状态**,说明提交量高但尚未进入合并阶段,Review 带宽可能成为短期瓶颈。今天没有新版本发布,主要工作仍以在 main 分支热修复(sweeper-bot 自动扫到的 issue)为主。([Issues 总览](https://github.com/NousResearch/hermes-agent/issues?q=is%3Aissue+updated%3A2026-07-13..2026-07-14))

---

## 2. 版本发布

无新版本发布。

上一可用版本为 v0.15.x 系列(Desktop、CLI、Python 包同版本号),今天被关闭的多个 Issue(如 [39503](https://github.com/NousResearch/hermes-agent/issues/39503)、[39549](https://github.com/NousResearch/hermes-agent/issues/39549)、[39444](https://github.com/NousResearch/hermes-agent/issues/39444))均标记 `sweeper:implemented-on-main`,意味着修复可能在 main 上,但尚未打 tag。**生产部署用户当前仍为 v0.15.1/v0.15.2,需关注下一个稳定 tag 的发布节奏。**

---

## 3. 项目进展

**今日没有 PR 被合并**(0/50),但仓库仍处于实质推进状态,主要进展体现在"已实现但未发版的修复"上:

- **`hermes update` 路径全面硬化** — 多条相关 Issue 被关闭:[39549](https://github.com/NousResearch/hermes-agent/issues/39549)(`_build_web_ui` ValueError 致半更新状态)、[39444](https://github.com/NousResearch/hermes-agent/issues/39444)(uv 环境下无 venv 报错)、[39431](https://github.com/NousResearch/hermes-agent/issues/39431)(Windows venv bootstrap 拒绝访问)、[39411](https://github.com/NousResearch/hermes-agent/issues/39411)(Termux 上 uv 编译失败)。同时 PR [#38900](https://github.com/NousResearch/hermes-agent/pull/38900) 进一步加固 quick_commands argv 模式与 plugin 路径安全,setup 在 uv.lock 缺失时 fail-closed。
- **Desktop CJK / Windows 体验修复** — 关闭 [39534](https://github.com/NousResearch/hermes-agent/issues/39534)(Windows 中文截断)、[39538](https://github.com/NousResearch/hermes-agent/issues/39538) / [39231](https://github.com/NousResearch/hermes-agent/issues/39231)(CJK IME + Enter 发送/按钮切换)、[39552](https://github.com/NousResearch/hermes-agent/issues/39552)(侧栏横向溢出)、[39473](https://github.com/NousResearch/hermes-agent/issues/39473)(typing truncation)。
- **macOS Dashboard 修复** — [39349](https://github.com/NousResearch/hermes-agent/issues/39349)(`.env` 覆盖 session token 致 `/api/ws` token_mismatch)、[39472](https://github.com/NousResearch/hermes-agent/issues/39472)(ASAR-internal `HERMES_WEB_DIST` 致前端 404)已实现。
- **MCP / Agent 关键修复** — PR [#38938](https://github.com/NousResearch/hermes-agent/pull/38938) 修正 `mcp-protocol-version` 在 `initialize` 请求上错误注入;[#38890](https://github.com/NousResearch/hermes-agent/pull/38890) 修并发路径上 nudge counter 重置时机。
- **Skills 生态扩张** — PR [#38912](https://github.com/NousResearch/hermes-agent/pull/38912) 新增 24 个社区技能(8 大类),[#38914](https://github.com/NousResearch/hermes-agent/pull/38914) / [#38913](https://github.com/NousResearch/hermes-agent/pull/38913) 为已有技能补充 WSL/Windows 文档,#47863 落地飞书平台原生跨平台审批授权。

整体看:工具链与跨平台体验是本周期的核心推进方向,**项目状态健康但合并队列拥堵**。

---

## 4. 社区热点

### 4.1 评论最多 / 反应最强的 Issue

| 排名 | Issue | 评论 | 👍 | 主题 |
|---|---|---|---|---|
| 1 | [#3956](https://github.com/NousResearch/hermes-agent/issues/3956) | 9 | 0 | `openai-codex` 空响应被重试 3 次(P1) |
| 2 | [#39534](https://github.com/NousResearch/hermes-agent/issues/39534) | 8 | 0 | Windows Desktop 中文 prompt 截断 |
| 3 | [#39538](https://github.com/NousResearch/hermes-agent/issues/39538) | 6 | **2** | CJK IME + Enter 发送失败 |
| 4 | [#39549](https://github.com/NousResearch/hermes-agent/issues/39549) | 3 | **5** | `hermes update` 半完成状态(P2) |
| 5 | [#63911](https://github.com/NousResearch/hermes-agent/issues/63911) | 3 | 0 | Telegram DM topic mode 吞消息(P3,OPEN) |
| 6 | [#54801](https://github.com/NousResearch/hermes-agent/issues/54801) | 3 | 0 | Dashboard 备份命令参数错误(OPEN) |
| 7 | [#54801](https://github.com/NousResearch/hermes-agent/issues/54801) | 3 | 0 | (同上) |

### 4.2 诉求分析

- **Telegram topic 模式吞消息(63911)** 反映出深层架构问题:根 lobby gate 在 `thread_id` 为空/"1" 时直接 early-return,导致 kanban 唤醒事件无人处理,completion 永远不被消费 —— 用户在生产 goroutine / systemd 守护进程场景下无法感知失败,需要主动监控日志([issue 链接](https://github.com/NousResearch/hermes-agent/issues/63911))。
- **`hermes update` 半完成状态(39549,5 个 👍)** 是呼声最高的修复 —— 用户表达的核心痛点是"升级中断后无法重启升级流程",影响 v0.15.1 → next 的迁移安全。
- **CJK 输入法群组问题**(39538 / 39534 / 39231 共 3 条,合计 17 评论) 表明 i18n 仍是 Desktop 用户的硬性需求。

---

## 5. Bug 与稳定性(按严重度排序)

### Critical / 高严重度(需优先关注)

| 严重度 | Issue | 主题 | 已关闭 | 关联 PR |
|---|---|---|---|---|
| **P1** | [#3956](https://github.com/NousResearch/hermes-agent/issues/3956) | Codex 空响应 → 重试 3 次 → 群聊刷屏 | ✅ CLOSED | — |
| **P2** | [#39549](https://github.com/NousResearch/hermes-agent/issues/39549) | `hermes update` 半更新 | ✅ CLOSED | — |
| **P2** | [#39503](https://github.com/NousResearch/hermes-agent/issues/39503) | Desktop 0.15.1 后端启动:unrecognized `--tui` | ✅ CLOSED | — |
| **P2** | [#39431](https://github.com/NousResearch/hermes-agent/issues/39431) | Windows auto-update 阶段 `speedups.pyd` 拒绝访问 | ✅ CLOSED | — |
| **P2** | [#39187](https://github.com/NousResearch/hermes-agent/issues/39187) | `execute_code` "Always" 永久授权不持久 | ✅ CLOSED | — |
| **P2** | [#39143](https://github.com/NousResearch/hermes-agent/issues/39143) | Docker Desktop WSL2 启动失败(invalid cwd) | ✅ CLOSED | — |
| **P2** | [#39411](https://github.com/NousResearch/hermes-agent/issues/39411) | Termux 上 uv build wheel 失败 | ✅ CLOSED | — |
| **P2** | [#64020](https://github.com/NousResearch/hermes-agent/issues/64020) | 订阅绑定时 card 被拒(`needs-repro`) | ❌ OPEN | — |

### 中等严重度

| 严重度 | Issue | 主题 | 状态 |
|---|---|---|---|
| P2 | [#39444](https://github.com/NousResearch/hermes-agent/issues/39444) | uv 环境下 `hermes update` 找不到 venv | ✅ CLOSED |
| P2 | [#63895](https://github.com/NousResearch/hermes-agent/issues/63895) | 终端自动滚动无法回看历史 | ❌ OPEN |
| P2 | [#64073](https://github.com/NousResearch/hermes-agent/issues/64073) | Streamable HTTP MCP `send_ping` ~600s 超时循环 | ❌ OPEN |
| P2 | [#63695](https://github.com/NousResearch/hermes-agent/issues/63695) | dan-blockers cron 投递/网络失败 | ❌ OPEN |
| P2 | [#63069](https://github.com/NousResearch/hermes-agent/issues/63069) | `read_file` SSE 断开时误报 "File not found" | ❌ OPEN |
| P2 | [#64055](https://github.com/NousResearch/hermes-agent/issues/64055) | Dashboard 不再尊重自托管 OIDC | ✅ CLOSED |
| P3 | [#63911](https://github.com/NousResearch/hermes-agent/issues/63911) | Telegram DM topic 根 lobby 吞事件 | ❌ OPEN |
| P3 | [#54801](https://github.com/NousResearch/hermes-agent/issues/54801) | Dashboard 备份按钮位置参数错 | ❌ OPEN |

**汇总**:今日 50 条 Issues 中 28 条关闭、22 条仍 OPEN;**OPEN 的高严重度(P2+)问题约 6 条**,主要集中在 MCP 连接保活、cron 投递、Dashboard auth、文件读取,这些尚未见到对应 PR,需要维护者追加 fix。

---

## 6. 功能请求与路线图信号

### 已落地的功能推进(PR 阶段)

- **[#47863](https://github.com/NousResearch/hermes-agent/pull/47863)** — 飞书平台原生跨平台审批授权(微信/企微 → 飞书),替代 [#37771](https://github.com/NousResearch/hermes-agent/pull/37771) monkey-patch。**已面向企业场景扩展多平台审批通路**,是飞书集成方面的重大进展。
- **[#38912](https://github.com/NousResearch/hermes-agent/pull/38912)** — 新增 24 个社区技能,涵盖 agent-personas、多 agent 委托(Claude Code/Codex/OpenCode)、browser automation、ASCII 艺术等。继续推 "Skills Marketplace" 战略。
- **[#38914](https://github.com/NousResearch/hermes-agent/pull/38914)** — 为 whatsapp-bridge / cron-automation-engine / github-auth 增加 WSL/Windows 文档,反映**对 Windows 用户的承诺**。
- **[#38882](https://github.com/NousResearch/hermes-agent/pull/38882)** — Rate-limit / retry 信息改"渐进式显示"而非"成批延迟刷新",**改善用户在限流场景下的可观测性**。
- **[#38864](https://github.com/NousResearch/hermes-agent/pull/38864)** — `github-code-review` skill 新增 "跨 PR 冲突检测"(Section 6 + Step 8b),**降低合入回归风险**。

### 用户诉求但尚未有对应 PR 的功能

- **[#64089](https://github.com/NousResearch/hermes-agent/issues/64089)** — `delegate_subagent` / `delegate_task` 600s 超时硬编码,无法调参(对大 codebase review 影响大)。**很可能在近期版本落地**,因为这是明确的 DX 痛点。
- **[#39479 / 39349 一类 OIDC 回归** — 自托管用户希望统一 OIDC 流程,目前 [64055](https://github.com/NousResearch/hermes-agent/issues/64055) 已闭合,需关注后续是否引入完整 SSO 测试矩阵。
- **Telegram topic mode 行为自定义** — [63911](https://github.com/NousResearch/hermes-agent/issues/63911) 反映用户对 topic 行为不可调的不满,**信号较强**。

---

## 7. 用户反馈摘要

### 真实痛点

1. **升级不可靠(回复数量最多、最一致的抱怨)**
   > `hermes update` 中断后,venv 处于半损坏状态,既无法重试也无法回滚 —— `@eno0000` 描述。
   - 影响范围:Windows / uv / Termux / macOS 多平台出现变种。

2. **CJK 输入体验断档**([39538](https://github.com/NousResearch/hermes-agent/issues/39538)/[39534](https://github.com/NousResearch/hermes-agent/issues/39534)/[39231](https://github.com/NousResearch/hermes-agent/issues/39231))
   > "IME 提交后按 Enter,消息既发不出;删一字再按才能发。" — `@iizus`
   > "中文 prompt 被截断,只显示前半句" — `@LiJT`
   - 东亚用户群占比明显上升。

3. **远程 gateway / 桌面集成脆弱**
   > "Desktop 拖拽本地图片,但发出去的是 `/home/xxx` 路径,gateway 找不到文件。" — `@OliverBokan`([39447](https://github.com/NousResearch/hermes-agent/issues/39447))
   - 涉及 Tailscale / Docker 部署场景的本地路径语义问题。

4. **看不见的失败**(MCP + cron)
   > "Streamable HTTP MCP 每 10 分钟断一次重连,gateway 日志里看不到原因。" — `@tobernguyen`([64073](https://github.com/NousResearch/hermes-agent/issues/64073))
   > "Telegram topic 模式下,kanban 事件被吞掉,completion 永远不来。" — `@agautam`([63911](https://github.com/NousResearch/hermes-agent/issues/63911))
   - 核心场景:生产守护进程 + 异步事件流。

5. **订阅绑定摩擦**([64020](https://github.com/NousResearch/hermes-agent/issues/64020))
   > "CLI 装好后引导到订阅页,选 free plan,卡被拒,无法启动 Agent。" — `@curiouscurrent`
   - 反映 onboarding 与 Portal 支付侧的耦合问题,**对新人留存影响较大**。

### 满意/正向反馈

- `sweeper:implemented-on-main` 标签覆盖绝大多数被关闭的 issue,说明社区报告 → 修复的**响应闭环速度良好**。
- [#39549](https://github.com/NousResearch/hermes-agent/issues/39549) 累计 5 个 👍,说明升级安全改进被社区期待。
- 重大功能(Skills、跨平台审批)持续接受社区贡献者 PR,贡献通道活跃。

---

## 8. 待处理积压(需维护者关注)

### 长期未关闭的高优先级 OPEN Issue

| Issue | 创建日 | 严重度 | 主要风险 | 建议行动 |
|---|---|---|---|---|
| [#63911](https://github.com/NousResearch/hermes-agent/issues/63911) | 2026-07-13 | P3 → 实际生产影响更大 | `risk-session-state` + `risk-message-delivery` | 短期绕过 + 长期改 gate 逻辑 |
| [#54801](https://github.com/NousResearch/hermes-agent/issues/54801) | 2026-06-29 | P3 | Dashboard 备份全失效 | 一行修复(参数替换),缺 PR |
| [#64073](https://github.com/NousResearch/hermes-agent/issues/64073) | 2026-07-14 | P2 | MCP 会话每 10 分钟抖动 | `needs-repro`,需复现 |
| [#63895](https://github.com/NousResearch/hermes-agent/issues/63895) | 2026-07-13 | P2 | 终端交互体验退化 | `needs-repro` |
| [#64020](https://github.com/NousResearch/hermes-agent/issues/64020) | 2026-07-13 | P2 | 新用户 onboarding 卡死 | `needs-repro`,商业影响 |
| [#63069](https://github.com/NousResearch/hermes-agent/issues/63069) | 2026-07-12 | P2 | `read_file` 误报致工作流中断 | 缺 PR |
| [#63695](https://github.com/NousResearch/hermes-agent/issues/63695) | 2026-07-13 | P2 | dan-blockers cron 投递失败 | 用户自助排查受阻 |

### 50 条 OPEN PR 待合并

| 类别 | 数量 | 备注 |
|---|---|---|
| Skills / Docs | ~12 | 多数含 WSL/Windows 兼容注解,blast-contained |
| Security 硬化 | ~3 | [#38900](https://github.com/NousResearch/hermes-agent/pull/38900)、[#38932](https://github.com/NousResearch

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目日报

**报告日期**：2026-07-14
**数据周期**：过去 24 小时（截至 2026-07-14）

---

## 1. 今日速览

PicoClaw 今日整体活跃度处于**中等偏低**水平：4 条新/活跃 Issues 与 5 条 PR 更新中，无版本发布，无合并事件。今日仅有一项 PR (#3253 Feat/gateway webhook) 被关闭（likely 未通过 review 或作者撤回），其余 PR 均仍处于待合并状态。值得关注的是，最热门的 Issue #3088（vodozemac 替换 libolm）已积累 8 条评论与 2 个 👍，并被标记为 `help wanted` 与 `priority: high`，但同时被标记为 `stale`，提示社区需要外部贡献者介入推进。整体而言，项目处于"持续打磨、缺乏推动力"的稳态阶段，建议关注高优先级 Issue 与核心 PR 的及时响应。

---

## 2. 版本发布

⚠️ 过去 24 小时内**无新版本发布**。当前 latest 标签请参考 GitHub Releases 页面。

---

## 3. 项目进展

今日**无 PR 被合并**，仅有 1 条 PR 被关闭：

| PR | 标题 | 状态 | 说明 |
|---|---|---|---|
| [#3253](https://github.com/sipeed/picoclaw/pull/3253) | Feat/gateway webhook | 🟥 已关闭 | 由 `tisoga` 提交的网关 Webhook 新功能，同日创建同日关闭，疑似作者主动撤回或 review 不通过，**功能未落地**。 |

**推进度评估**：⭐☆☆☆☆（无实质代码合并）

建议维护者关注以下**待合并 PR** 的审查进度：
- [#3254](https://github.com/sipeed/picoclaw/pull/3254) — 修复 agent 模型解析中"完全匹配 vs provider-alias split"的优先级 bug（fabdelgado）
- [#3228](https://github.com/sipeed/picoclaw/pull/3228) — 修复 Anthropic Messages provider 中 `SystemParts` 被压平、导致 prompt caching 失效的问题
- [#3192](https://github.com/sipeed/picoclaw/pull/3192) — 将 goreleaser 基础镜像由 alpine:3.21 升级到 3.23
- [#3191](https://github.com/sipeed/picoclaw/pull/3191) — 清理 .gitignore 中重复的 `build/` 条目

---

## 4. 社区热点

按评论数与点赞数排序：

### 🔥 #3088 [Feature] use vodozemac instead of libolm
- **作者**：pbsds | **创建**：2026-06-09 | **最新更新**：2026-07-13
- **互动**：💬 8 条评论 | 👍 2
- **标签**：`help wanted` `priority: high` `stale`
- **链接**：https://github.com/sipeed/picoclaw/issues/3088

**诉求分析**：libolm 已长期不维护且存在安全风险，用户希望替换为 vodozemac（Matrix 官方维护的替代库）。该 Issue 同时提出"将 libolm 设为编译期可选"的渐进式迁移方案。这一诉求触及**安全合规**与**依赖治理**两个维度，社区反响积极，但因被标记 `stale`，需要外部贡献者主动认领。考虑到 `priority: high` 标签，这应是**下个版本的安全必修项**。

### 次活跃 Issue
- [#3231](https://github.com/sipeed/picoclaw/issues/3231) — 为 searxng 搜索加入 basicauth 头部验证（1 条评论）
- [#3230](https://github.com/sipeed/picoclaw/issues/3230) — Gemini API 通过 OpenAI 兼容格式调用时缺失 `thought_signature`（1 条评论）
- [#3229](https://github.com/sipeed/picoclaw/issues/3229) — Anthropic Messages 提供商支持滚动对话缓存断点提案（1 条评论）

---

## 5. Bug 与稳定性

### 🐞 中优先级 BUG

**[#3230] Function call is missing thought_signature when calling Gemini API via OpenAI compat format**
- **报告者**：VictorSu000 | **环境**：PicoClaw 0.2.9 ~ 0.3.1 | **链接**：https://github.com/sipeed/picoclaw/issues/3230
- **影响范围**：通过 Cloudflare AI Gateway 等 OpenAI 兼容代理调用 Google Gemini API 的所有 tool-use 场景
- **复现路径**：发送带 tool use 的 LLM 请求 → Gemini 报错 `missing thought_signature`
- **严重程度**：🟡 中等（功能阻断特定集成路径，但不影响直接调用 Gemini 原生 API 的用户）
- **修复状态**：❌ **目前无对应 fix PR**

### 隐性 BUG（来自 PR 而非 Issue）

- **[#3254](https://github.com/sipeed/picoclaw/pull/3254)**：`lookupModelConfigByRef` 中模型引用解析顺序问题，可能导致错误的 `model_list` 条目被选中（特别是 provider-alias split 模式）。**该 PR 正在待合并，建议优先 review。**

---

## 6. 功能请求与路线图信号

| 需求 | Issue/PR | 落地概率评估 | 理由 |
|---|---|---|---|
| **替换 libolm 为 vodozemac** | [#3088](https://github.com/sipeed/picoclaw/issues/3088) | ⭐⭐⭐⭐⭐ 极高 | `priority: high` + `help wanted`，安全合规驱动，预计纳入下个 milestone |
| **searxng BasicAuth 头部支持** | [#3231](https://github.com/sipeed/picoclaw/issues/3231) | ⭐⭐⭐ 中等 | 实现简单（HTTP Header 注入），但需求较小众 |
| **Anthropic 滚动缓存断点** | [#3229](https://github.com/sipeed/picoclaw/issues/3229) | ⭐⭐⭐⭐ 高 | 已有配套 PR [#3228](https://github.com/sipeed/picoclaw/pull/3228) 落地部分能力，作者活跃 |
| **Agent 模型解析优先级修复** | [#3254](https://github.com/sipeed/picoclaw/pull/3254) | ⭐⭐⭐⭐⭐ 极高 | 已成 PR，质量高，无破坏性 |
| **Gateway Webhook** | [#3253](https://github.com/sipeed/picoclaw/pull/3253) | ⭐⭐ 待观察 | PR 已被关闭，需作者重新打磨后再次提交 |

---

## 7. 用户反馈摘要

从今日活跃的 Issue 评论中提炼的真实用户声音：

### 🔴 不满意 / 痛点
1. **依赖安全焦虑**：Issue #3088 显示用户对 libolm 的"unmaintained and insecure"状态明确表达了担忧，期望项目主动推进依赖替换。社区对**默认安全**的期望较高。
2. **Google Gemini 集成受阻**（Issue #3230）：当用户试图通过 Cloudflare AI Gateway 等代理服务统一访问 Gemini 时遭遇 tool-use 流程崩溃，影响多供应商架构的生产部署。
3. **私有 searxng 部署困难**（Issue #3231）：将凭据拼接到 URL 中存在安全风险且部分实例无法工作，用户期望标准 BasicAuth 头部支持。

### 🟢 满意 / 提议方向
1. **prompt caching 优化建议**（Issue #3229）：用户主动提案基于"滚动断点"的对话缓存策略，体现社区对**降低 token 成本**有强烈诉求；且用户已着手通过 [#3228](https://github.com/sipeed/picoclaw/pull/3228) 提交实现，是典型的高质量社区贡献循环。

---

## 8. 待处理积压 ⚠️

以下条目被标记为 `stale` 或长期未响应，**建议维护者优先处理**：

| 编号 | 类型 | 标题 | 创建至今 | 风险点 |
|---|---|---|---|---|
| [#3088](https://github.com/sipeed/picoclaw/issues/3088) | Issue | use vodozemac instead of libolm | ~35 天 | `priority: high` 但 stale，存在**安全合规风险敞口** |
| [#3228](https://github.com/sipeed/picoclaw/pull/3228) | PR | fix(anthropic-messages) send SystemParts as system blocks | ~8 天 | 涉及核心 provider 逻辑，stale 状态阻碍合并 |
| [#3192](https://github.com/sipeed/picoclaw/pull/3192) | PR | bump goreleaser base images alpine 3.21→3.23 | ~17 天 | 依赖更新类 PR，stale 但无技术分歧 |
| [#3191](https://github.com/sipeed/picoclaw/pull/3191) | PR | remove duplicate build/ in .gitignore | ~17 天 | 简单的 chore，stale 无必要 |
| [#3229](https://github.com/sipeed/picoclaw/issues/3229) | Issue | rolling conversation cache breakpoints | ~8 天 | 配套 PR 在 review 链上，stale 状态需打破 |
| [#3230](https://github.com/sipeed/picoclaw/issues/3230) | Issue | Gemini thought_signature missing | ~8 天 | 用户生产环境受阻，需 fix PR |
| [#3231](https://github.com/sipeed/picoclaw/issues/3231) | Issue | searxng basicauth header | ~8 天 | 影响自托管用户，影响面较小但修复成本低 |

**结论**：积压的 7 个条目中有 4 个涉及核心功能（provider 修复、安全依赖、缓存优化），**建议在下一次维护窗口集中清理**。

---

## 📊 项目健康度总评

| 维度 | 评分 | 说明 |
|---|---|---|
| 活跃度 | ⭐⭐☆☆☆ | 无版本、无合并，新 PR 仅 1 条 |
| 社区响应 | ⭐⭐⭐☆☆ | Issue/PR 有互动但 stale 较多 |
| 安全态势 | ⭐⭐☆☆☆ | libolm 替换诉求已 35 天未推进 |
| 代码质量 | ⭐⭐⭐⭐☆ | 待合并 PR 质量较高（#3228、#3254） |
| 路线清晰度 | ⭐⭐⭐☆☆ | 有明确的高优需求，但无明确发布节奏 |

**整体评级**：🟡 **需要关注** — 项目在功能演进层面处于静默期，建议维护者通过一次小版本（如 0.3.2）合并积压的 chore 与 fix PR，并重新激活 #3088 的社区讨论。

---

*本报告由 PicoClaw 自动化日报系统生成，数据来源：GitHub REST API。*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报

**报告日期**: 2026-07-14
**数据周期**: 过去 24 小时
**仓库**: [nanocoai/nanoclaw](https://github.com/qwibitai/nanoclaw)

---

## 1. 今日速览

NanoClaw 今日呈现**高强度维护节奏**，过去 24 小时共处理 **33 条 PR**（其中 27 条已关闭/合并）和 **3 条 Issue**（全部关闭），无新版本发布。当日工作的主线非常清晰：**安全加固 + 投递链路可靠性修复**。两篇安全公告（#2762、#2827）关于 `add_mcp_server` 审批流程隐藏参数的攻击面被同日关闭，并由 PR #2998 落地修复；围绕"channel adapter 缺失导致消息被错误标记为已投递"这一类问题，#2995、#2996、#2226、#2743、#2938 形成了完整的修复链路。整体上属于**稳定压倒新功能**的一天，项目健康度良好。

---

## 2. 版本发布

无新版本发布。

---

## 3. 项目进展

### 🔒 安全：MCP 审批流程加固（重要闭环）
- **PR #2998** — [`fix(self-mod): render full MCP server payload on the approval card`](https://github.com/qwibitai/nanoclaw/pull/2998) **已合并**，直接回应了 #2762 与 #2827 两篇安全公告。审批卡片现在会完整渲染 MCP 服务器的 `args`/`env`，杜绝"审批走私"。这是当日最具结构性意义的合并。
- **PR #2802** — [`fix(security): ncl socket hardening`](https://github.com/qwibitai/nanoclaw/pull/2802) **仍 OPEN**，补充客户端 timeout/buffer cap 与服务端 fail-closed 机制，建议优先 review。

### 📬 投递链路可靠性（系统性修复日）
围绕"消息丢失"的多个根因被一次性收口：

| PR | 主题 | 状态 |
|---|---|---|
| [#2226](https://github.com/qwibitai/nanoclaw/pull/2226) | `deliveryAdapter.deliver` 缺少 adapter 时**抛错而非静默丢弃**，使重试循环生效 | CLOSED |
| [#2996](https://github.com/qwibitai/nanoclaw/pull/2996) | 把缺失 adapter 的消息路由进重试路径 | CLOSED |
| [#2743](https://github.com/qwibitai/nanoclaw/pull/2743) | `ncl wirings create` 补齐 `agent_destinations` 副作用，避免新会话消息被吞 | CLOSED |
| [#2938](https://github.com/qwibitai/nanoclaw/pull/2938) | `ncl wirings create` 走 `createMessagingGroupAgent` 规范化路径，自动生成 ACL 行 | CLOSED |
| [#2966](https://github.com/qwibitai/nanoclaw/pull/2966) | agent-runner 在出错批次被 ack 为 completed 时记录日志，便于事后追溯 | CLOSED |

### 🛠 运维脚本与诊断
- **PR #1889** — [`fix(cleanup-sessions): sqlite3 缺失或查询错误时硬失败`](https://github.com/qwibitai/nanoclaw/pull/1889)，修复 #1825 中提到的静默数据丢失。
- **PR #1887** — [`fix(diagnostics): 尊重 DO_NOT_TRACK 并在 curl 缺失时跳过 ph_event`](https://github.com/qwibitai/nanoclaw/pull/1887)。

### 🆕 已被合并的新能力
- **PR #3032** + **#3033** — 集成 [Dial](https://getdial.ai)（SMS + AI 语音）原生通道适配器及 setup 选项。
- **PR #3035** — 通道安装 skill 统一为结构化格式，setup 向导直接 apply SKILL.md，去除逐通道的定制向导。
- **PR #2906** — 实例级默认 agent provider（`DEFAULT_AGENT_PROVIDER`）。
- **PR #2120** — provider 通用错误输出替换机制。
- **PR #3022** — 模板中支持预定义 `tasks/*.md` 计划任务。

### 评估
项目今天**净推进约 14 个独立子模块**，其中投递链路与安全两条线收口尤其值得关注；剩余 5–6 个 OPEN PR 多为功能型，待下一轮评审。

---

## 4. 社区热点

当日社区信号集中在三处（按 PR 评论密度与重要性排序）：

1. **MCP 审批走私漏洞** — [#2762](https://github.com/qwibitai/nanoclaw/issues/2762)、[#2827](https://github.com/qwibitai/nanoclaw/issues/2827)（同作者 YLChen-007）。这是同一类问题在不同时间的两次披露，背后诉求是：自修改流程（self-modification）应当把**全部可执行参数**对人类审批者透明。
2. **持久化记忆系统** — [PR #3012](https://github.com/qwibitai/nanoclaw/pull/3012) 与配套的 [PR #3013](https://github.com/qwibitai/nanoclaw/pull/3013)（Codex 端 hook）代表社区对**跨 provider 共享记忆**的强烈需求。
3. **MCP 工具白名单** — [PR #3037](https://github.com/qwibitai/nanoclaw/pull/3037) 的 `NANOCLAW_MCP_TOOL_ALLOWLIST` 建议体现用户希望在容器层做最小权限控制。

> 注：所有展示的 Issue 评论数均为 0，热度更多由安全等级与跨模块影响面决定，而非评论量。

---

## 5. Bug 与稳定性

| 严重度 | 问题 | Issue / PR | 修复状态 |
|---|---|---|---|
| 🔴 高 | `add_mcp_server` 审批卡片隐藏 `args`/`env`，可被攻击者利用 | [#2762](https://github.com/qwibitai/nanoclaw/issues/2762)、[#2827](https://github.com/qwibitai/nanoclaw/issues/2827) | ✅ 已修复（[#2998](https://github.com/qwibitai/nanoclaw/pull/2998)） |
| 🟠 中-高 | 离线 channel adapter 仍把消息标为 `delivered`，无实际发送 | [#2995](https://github.com/qwibitai/nanoclaw/issues/2995) | ✅ 已修复（[#2996](https://github.com/qwibitai/nanoclaw/pull/2996) + [#2226](https://github.com/qwibitai/nanoclaw/pull/2226)） |
| 🟠 中 | `ncl wirings create` 跳过 `agent_destinations` 行，新会话消息丢失 | [#2743](https://github.com/qwibitai/nanoclaw/pull/2743) | ✅ 已修复（[#2743](https://github.com/qwibitai/nanoclaw/pull/2743) + [#2938](https://github.com/qwibitai/nanoclaw/pull/2938)） |
| 🟠 中 | `cleanup-sessions` 在 sqlite3 缺失/出错时静默清空活跃会话 | [#1889](https://github.com/qwibitai/nanoclaw/pull/1889) | ✅ 已修复 |
| 🟡 中 | `ph_event` 不尊重通用 `DO_NOT_TRACK`，curl 缺失时报错 | [#1887](https://github.com/qwibitai/nanoclaw/pull/1887) | ✅ 已修复 |
| 🟡 中 | socket 传输无 timeout / buffer 上限，存在内存与挂起风险 | [#2802](https://github.com/qwibitai/nanoclaw/pull/2802) | ⏳ OPEN，待合入 |
| 🟢 低 | agent 误判星期/小时（scheduled-task 回合尤为明显） | [#3036](https://github.com/qwibitai/nanoclaw/pull/3036) | ⏳ OPEN |

**结论**：今日所有中-高严重度 bug 都有对应已合并的修复 PR，剩余两个 OPEN 集中在网络边界与 agent 时间上下文中，建议在下一版本前消化。

---

## 6. 功能请求与路线图信号

- **Provider-agnostic 持久记忆** — [PR #3012](https://github.com/qwibitai/nanoclaw/pull/3012) + [#3013](https://github.com/qwibitai/nanoclaw/pull/3013)。这是跨 Claude/Codex 的共享 memory tree，几乎确定进入下一里程碑。
- **MCP 工具白名单** — [PR #3037](https://github.com/qwibitai/nanoclaw/pull/3037)，与 #2762/#2822 修复互补；配合后 MCP 生态安全性大幅提升。
- **Agent 时间上下文增强** — [PR #3036](https://github.com/qwibitai/nanoclaw/pull/3036)，把 `current_time` 注入 context header 并在本地时间戳中包含星期。
- **Dial 通道** — [#3032](https://github.com/qwibitai/nanoclaw/pull/3032) + [#3033](https://github.com/qwibitai/nanoclaw/pull/3033) 已合并，标志社区通道生态从聊天 SDK 桥接逐步走向原生适配器。
- **模板计划任务** — [PR #3022](https://github.com/qwibitai/nanoclaw/pull/3022)，让模板分发者预先植入 cron 任务。

路线图特征：**安全 → 投递可靠性 → 记忆系统 → 新通道**，与 NanoClaw 一贯的"小步快跑、按模块迭代"节奏吻合。

---

## 7. 用户反馈摘要

由于今日展示样本的 Issue 评论数均为 0，定量反馈较稀疏，可从 PR 描述中提取以下真实场景与痛点：

- **运维/部署侧痛点**（PR #1889、#1887）：运维脚本对外部依赖（sqlite3、curl）缺失处理过于乐观，可能导致静默数据丢失；诊断信息上传未尊重通用 `DO_NOT_TRACK` 标准。
- **生产环境可靠性**（PR #2226、#2996、#2743、#2938）：用户场景中常见"凭据缺失导致 factory 返回 null"或"命名实例下线"，结果消息被静默丢弃，造成**业务侧的消息黑洞**。
- **MCP 生态安全**（Issue #2762/#2822）：自修改流（self-mod）是高风险点，攻击者可借审批卡显示不全实现"smuggle"；社区诉求是"凡是审批通过的，必须是审批者真正看到的"。
- **时间相关幻觉**（PR #3036）：scheduled-task 回合中 agent 频繁把星期/小时搞错，反映用户对周期性任务的可靠性已有切实期待。

---

## 8. 待处理积压

| 类型 | 编号 | 标题 | 建议 |
|---|---|---|---|
| 🔒 安全 PR | [#2802](https://github.com/qwibitai/nanoclaw/pull/2802) | ncl socket 加固（timeout / cap / fail-closed） | 高优，关联记忆/CLI 长连接稳定性 |
| 🧠 核心特性 | [#3012](https://github.com/qwibitai/nanoclaw/pull/3012) | provider-agnostic 持久记忆 | 需 core-team 评审，可能影响下个版本 |
| 🧠 核心特性 | [#3013](https://github.com/qwibitai/nanoclaw/pull/3013) | Codex 加载共享记忆 | 与 #3012 配套 |
| 🛡 安全特性 | [#3037](https://github.com/qwibitai/nanoclaw/pull/3037) | MCP 工具白名单（容器层） | 与 #2998 互补，建议同步合入 |
| 🐛 Bug fix | [#3036](https://github.com/qwibitai/nanoclaw/pull/3036) | 注入 `current_time` + 本地时间戳含星期 | 体量小，可快速合入 |

> 历史长尾（创建于 4–5 月）PR 已被批量 close（如 #1887、#1889、#2120），说明维护者正在系统性清理积压；上述 5 条 OPEN 是真正的"下一步"。

---

**总评**：NanoClaw 今日进入**修缮型迭代**，安全与投递两条主线均得到合入级闭环，新能力以小幅、可合并的形态持续供给。短期窗口内最值得维护者关注的是 [PR #2802](https://github.com/qwibitai/nanoclaw/pull/2802)（socket 安全）与 [PR #3012](https://github.com/qwibitai/nanoclaw/pull/3012)（记忆系统），二者合力有望推动下一个次版本发布。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目日报 — 2026-07-14

---

## 1. 今日速览

NullClaw 今日呈现典型的"低活跃"工作日状态：过去 24 小时内 **无新增/关闭 Issue、无版本发布、无 PR 合并**。仓库唯一可见的活动来自 11 条既有 PR 的更新（创建时间集中在 2026-06-15 ~ 2026-06-29，跨度近半个月），主要表现为分支同步或 CI 触发的轻量级更新。所有 PR 点赞数均为 0，评论数未提供（`undefined`），社区互动处于静默期。整体健康度评估：**功能开发节奏放缓，但积压有序、维护者仍在持续审阅**。

---

## 2. 版本发布

**无新版本发布。** 截至报告日，仓库未推送任何 release tag 或 GitHub Release。

---

## 3. 项目进展

今日**无 PR 合并/关闭**，项目净代码变更量为零。以下为今日有更新的 11 条 PR 按主题分类：

### 3.1 功能增强（3 条）
- **#969** `feat(agent): structured approval_request / approval_response flow`（[@valonmulolli](https://github.com/nullclaw/nullclaw/pull/969)）—— 为 shell 工具及所有返回 `error.ApprovalRequired` 的工具引入两轮式审批流，通过 SSE `---approval---` 事件驱动前端审批 UI。
- **#964** `Enable native API-level tool calls during streaming`（[@mtdphn](https://github.com/nullclaw/nullclaw/pull/964)）—— 修复 `StreamChatResult` 中结构化 tool-call delta 丢失的问题，使 Agent 可执行纯流式工具响应。
- **#961** `feat(memory): add configurable auto-recall, recall_limit, max_context_bytes`（[@valonmulolli](https://github.com/nullclaw/nullclaw/pull/961)）—— 内存模块新增 `auto_recall` / `recall_limit` / `max_context_bytes` 三个 JSON 配置键。

### 3.2 Bug 修复（5 条）
- **#970** `fix(cli): handle arrow keys in agent REPL`（[@vernonstinebaker](https://github.com/nullclaw/nullclaw/pull/970)）—— 为交互式 REPL 引入零分配的轻量行编辑器，支持方向键、历史导航、光标移动等。
- **#968** `fix(matrix): persist next_batch across restart + test env isolation`（[@addadi](https://github.com/nullclaw/nullclaw/pull/968)）—— 修复 Matrix 通道重启后 `next_batch` 丢失导致 homeserver 返回 initial sync 的问题。
- **#966** `fix(http): secure buffered curl fallback on Android`（[@vernonstinebaker](https://github.com/nullclaw/nullclaw/pull/966)）—— 修复 Termux (aarch64-linux-android) 上 Zig stdlib HTTP DNS 解析失败问题。
- **#959** `fix(cron): persist paired token for scheduler tool access`（[@vernonstinebaker](https://github.com/nullclaw/nullclaw/pull/959)）—— 修复 cron 调度器在 `/pair` 后丢失 bearer token 的问题（关联 #839）。
- **#958** `fix(teams): accept lowercase serviceurl JWT claim and raise JWKS fetch cap`（[@dtarandek](https://github.com/nullclaw/nullclaw/pull/958)）—— 修复 Bot Framework connector-token 校验因大小写不敏感问题返回 403 的问题。

### 3.3 文档完善（2 条）
- **#963** `fix(channels): document and harden Weixin iLink QR auth`（[@vernonstinebaker](https://github.com/nullclaw/nullclaw/pull/963)）—— 中英文双语文档补充 iLink Bot 二维码授权流程，关闭 #817。
- **#962** `docs(providers): document native Anthropic provider with API key and OAuth support`（[@vernonstinebaker](https://github.com/nullclaw/nullclaw/pull/962)）—— 中英文文档补充原生 Anthropic 提供方配置说明，关闭 #767。

### 3.4 依赖更新（1 条）
- **#956** `ci(deps): bump alpine from 3.23 to 3.24`（[@dependabot](https://github.com/nullclaw/nullclaw/pull/956)）—— Docker 镜像基线 Alpine 升级。

---

## 4. 社区热点

**今日社区讨论近乎归零。** 所有 11 条更新的 PR 点赞数均为 **0**，评论数无统计数据，且无任何 Issue 进入活跃状态。从存量数据看，**vernonstinebaker** 是过去一个月最活跃的贡献者，单独推进 4 条 PR（CLI 输入、Android HTTP 兼容、cron 持久化、文档），承担了主要维护工作。**valonmulolli** 与 **mtdphn** 各自贡献 1 条 Agent/Memory 核心功能 PR，体现多维护者分担态势。

---

## 5. Bug 与稳定性

按严重程度排列：

| 优先级 | Issue/PR | 描述 | 修复状态 |
|---|---|---|---|
| 🔴 高 | [#958](https://github.com/nullclaw/nullclaw/pull/958) | Teams 通道 403 鉴权失败，channel 完全不可用 | Fix PR 待合并 |
| 🟠 中-高 | [#968](https://github.com/nullclaw/nullclaw/pull/968) | Matrix 通道重启后 sync token 丢失，触发全量初始同步，性能与带宽风险 | Fix PR 待合并 |
| 🟠 中-高 | [#959](https://github.com/nullclaw/nullclaw/pull/959) | Cron 调度器 pair token 丢失，定时任务无法调用受控 API | Fix PR 待合并 |
| 🟡 中 | [#966](https://github.com/nullclaw/nullclaw/pull/966) | Android (Termux) 平台 HTTP 完全不可用 | Fix PR 待合并 |
| 🟡 中 | [#964](https://github.com/nullclaw/nullclaw/pull/964) | 流式响应中 API 级工具调用丢失，Agent 流式体验缺陷 | Fix PR 待合并 |
| 🟢 低 | [#970](https://github.com/nullclaw/nullclaw/pull/970) | REPL 方向键被打印为控制字符，UX 缺陷 | Fix PR 待合并 |

所有问题均已有对应的修复 PR 开放中，**无一 PR 被合并或合并后产生回归反馈**，存量风险可控。

---

## 6. 功能请求与路线图信号

虽然没有新增 Issue，但既有 PR 已透露下一阶段的产品方向：

- **Agent 治理能力增强**：#969 的结构化审批流、#964 的原生流式工具调用，表明团队正在补齐"Agent 安全 + Agent 流式体验"两大能力，与主流 AI Agent 框架（如 LangGraph、Claude Tool Use）的设计对齐。
- **内存层精细化控制**：#961 提供 `auto_recall`/`recall_limit`/`max_context_bytes` 三档开关，反映用户对内存成本与召回质量的精细调控需求。
- **平台覆盖扩张**：#966 (Android) 与 #958 (Teams) 显示团队在向移动端/企业协作场景延伸。

最有可能被纳入下一版本的 PR（按优先级）：**#958（修复 Teams 完全不可用）> #968（Matrix 重启回归）> #969（Agent 核心能力）**。

---

## 7. 用户反馈摘要

由于今日无 Issue 互动且 PR 评论数据为空（`undefined`），**无法从评论中提炼用户痛点**。可观察的间接信号：
- 多个修复 PR 显式引用了 Issue 编号（#817、#767、#839），表明用户已通过 Issue 反馈过 Weixin iLink 流程不清晰、Anthropic 原生支持缺失、Cron token 丢失等问题。
- 移动端平台（Termux/Android）相关 PR 提示项目存在非典型部署场景的用户。

---

## 8. 待处理积压

⚠️ **维护者需重点关注**：11 条 PR 全部 OPEN，**最早一条 (#956) 创建于 2026-06-15，距今已 29 天**。整体平均挂起时间约 20-25 天，无明确合并节奏。建议：

1. **优先合并 #958、#968、#959** —— 这三条均为关键通道功能性故障，影响生产可用性。
2. **推动 #956、#962、#963** —— 低风险依赖升级与文档更新，可快速清理积压、提升贡献者反馈速度。
3. **明确 #969、#964、#961 的设计评审状态** —— 三条核心功能 PR 涉及 API 形态变更，长期挂起可能造成 merge 冲突与贡献者流失。
4. 考虑为高优先级 PR 启用 review-assigner 或 label 流程，降低"全部堆在 reviewer inbox"造成的拖延。

---

*报告生成时间：2026-07-14 | 数据源：GitHub REST API*
*项目主页：[nullclaw/nullclaw](https://github.com/nullclaw/nullclaw)*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报
**报告日期：2026-07-14**
**数据来源：[nearai/ironclaw](https://github.com/nearai/ironclaw)**

---

## 1. 今日速览

IronClaw 仓库今日呈现**高活跃度异常状态**：过去 24 小时更新了 34 个 Issue 和 50 个 PR，且绝大多数 Issue 集中于 `bug_bash` 标签，表明团队正在开展系统性 Bug Bash 活动。PR 端以 NEA-25 扩展模型统一化的"Train A roll-up"为代表（#6061），叠加依赖升级、CI 静态检查、MCP 注册存储等多项重大变更进入评审流程。无新版本发布，但社区贡献者（含 dependabot、ironloopai 等机器人）持续产出，使待合并 PR（34 条）数量远超已合并/关闭（16 条），意味着代码评审压力显著上升。

---

## 2. 版本发布

⚠️ **今日无新版本发布。** 需注意 [PR #5598](https://github.com/nearai/ironclaw/pull/5598)（仍 OPEN）正在筹备一次包含**破坏性变更**的版本发布：`ironclaw_common` 从 0.4.2 → 0.5.0、`ironclaw_skills` 从 0.3.0 → 0.4.0，根 crate `ironclaw` 从 0.24.0 → 0.29.1。下游消费者需特别留意 `failure` crate 移除、`tokio` 主版本变化等迁移事项。

---

## 3. 项目进展

今日多项重要合并与关闭显著推进了项目状态：

- 🚂 **NEA-25 Train A 整合发布** — [PR #6061](https://github.com/nearai/ironclaw/pull/6061)（BenKurrek）将 #5833–#5850 的 8-PR 栈合并为单一原子化评审单元，标志着"统一扩展模型"的里程碑节点。**注意：该 PR 同时被 #6058 关闭式"已 supersede"状态需进一步核实上下文。**
- 🔐 **OAuth 与扩展生命周期加固** — [PR #5957](https://github.com/nearai/ironclaw/pull/5957)（BenKurrek）合并，结合 #5983 的扩展移除修复及所有权迁移脚本，强化了主机的声明式清理路径。
- 🛠️ **MCP 注册存储（per-user）** — [PR #5970](https://github.com/nearai/ironclaw/pull/5970)（henrypark133）作为 T1 层建立在 #5499 主干之上的 `InstallationOwner` 基础设施上，supersedes #5916。
- 🧪 **CI 静态检查三件套** — [PR #6022](https://github.com/nearai/ironclaw/pull/6022)（ilblackdragon）落地 `include_str!/Docker-COPY` 覆盖检查及 hermetic 环境校验，直接覆盖 main 分支确定性的 CI 失败类别。
- 🐛 **历史错误横幅清理** — [PR #6064](https://github.com/nearai/ironclaw/pull/6064)（ironloopai bot）修复 #6050 中描述的"陈旧会话历史加载错误"问题。
- 🗜️ **压缩任务错误溯源** — [PR #5971](https://github.com/nearai/ironclaw/pull/5971)（henrypark133）合并，确保 compaction summary 失败时携带底层 `SessionThreadError`，解决被禁止的 `| _ |` 吞错反模式。
- 🚢 **依赖批量升级** — dependabot 推送 [PR #6063](https://github.com/nearai/ironclaw/pull/6063)（24 项更新）与 [PR #6021](https://github.com/nearai/ironclaw/pull/6021)（22 项更新，后者已关闭），多为 patch/minor 级别。

整体而言，项目在**扩展模型重构、CI 稳定性、错误可观测性**三个维度均有明显推进。

---

## 4. 社区热点

按评论数与互动度排名（数据窗口 24h）：

| 排名 | Issue / PR | 评论 | 👍 | 摘要 | 链接 |
|------|------------|------|----|----|------|
| 1 | [#5948](https://github.com/nearai/ironclaw/issues/5948) | 5 | 0 | Assistant 错误地将 GitHub 扩展标记为"已激活" | [链接](https://github.com/nearai/ironclaw/issues/5948) |
| 2 | [#6050](https://github.com/nearai/ironclaw/issues/6050) | 2 | 0 | 陈旧"会话历史加载失败"横幅误显 | [链接](https://github.com/nearai/ironclaw/issues/6050) |
| 3 | [#5640](https://github.com/nearai/ironclaw/issues/5640) | 2 | 0 | Harness gap：`hook_security_audit_sink` 测试桩缺失 | [链接](https://github.com/nearai/ironclaw/issues/5640) |
| 4 | [#6029](https://github.com/nearai/ironclaw/issues/6029) | 1 | 0 | GitHub 扩展激活后无法停用/重新配置 | [链接](https://github.com/nearai/ironclaw/issues/6029) |
| 5 | [#6000](https://github.com/nearai/ironclaw/issues/6000) | 1 | 0 | 缺少 `SECURITY.md` 与私有漏洞披露通道 | [链接](https://github.com/nearai/ironclaw/issues/6000) |

**诉求分析**：用户最集中的抱怨在于**扩展状态展示的真实性**（#5948、#6029、#6043）以及**错误状态可观测性不足**（#6050、#5879、#5883）。#6000 提出的安全披露通道缺失属于治理层面问题，建议维护者优先响应以体现合规姿态。

---

## 5. Bug 与稳定性

按严重程度排序（标注是否有对应修复 PR）：

### 🔴 P1 严重
- **[#5943](https://github.com/nearai/ironclaw/issues/5943)** — Slack DM 动作将内容发到当前频道而非用户私信。**无对应修复 PR**，需立即关注。

### 🟠 P2 重要
- **[#5836](https://github.com/nearai/ironclaw/issues/5836)** — Routine 定时调度 100% 失败（"No thread attached"）。**无对应修复 PR。**
- **[#5885](https://github.com/nearai/ironclaw/issues/5885)** — 审批通知点击后审批卡片缺失，用户无法批准/拒绝。**无对应修复 PR。**
- **[#5879](https://github.com/nearai/ironclaw/issues/5879)** — 失败错误横幅在后续成功响应后仍残留。**无对应修复 PR。**
- **[#5707](https://github.com/nearai/ironclaw/issues/5707)** — Routine 创建响应泄露内部实现细节（cron 语法、命令引用）。**无对应修复 PR。**
- **[#5882](https://github.com/nearai/ironclaw/issues/5882)** — Slack 重复重连后认证流进入死锁状态。
- **[#6048](https://github.com/nearai/ironclaw/issues/6048)** — 多步任务中模型尝试调用不可用工具导致运行失败。
- **[#6047](https://github.com/nearai/ironclaw/issues/6047)** — 任务消息 UI 显示顺序颠倒。
- **[#6046](https://github.com/nearai/ironclaw/issues/6046)** — 简单的"邮件→表格"任务触发 124 次工具调用。
- **[#6045](https://github.com/nearai/ironclaw/issues/6045)** — Agent 仅诊断问题而不主动修复（如 GitHub API 缺 User-Agent）。
- **[#6044](https://github.com/nearai/ironclaw/issues/6044)** — Enter 键间歇性无法提交消息。
- **[#6043](https://github.com/nearai/ironclaw/issues/6043)** — GitHub 连接流程以通用能力错误中止而非启动 OAuth。
- **[#6050](https://github.com/nearai/ironclaw/issues/6050)** — 错误横幅误显。**已有修复 PR [#6064](https://github.com/nearai/ironclaw/pull/6064)。** ✅

### 🟡 P3 一般
- **[#5948](https://github.com/nearai/ironclaw/issues/5948)** — GitHub 扩展错误状态报告（评论最多 #1）。
- **[#5889](https://github.com/nearai/ironclaw/issues/5889)** — "加载更早消息"按钮无反应。
- **[#6052](https://github.com/nearai/ironclaw/issues/6052)** — Extensions Registry 加载慢达 10 秒。
- **[#6051](https://github.com/nearai/ironclaw/issues/6051)** — 大文档误用警告图标（应为信息图标）。
- **[#6049](https://github.com/nearai/ironclaw/issues/6049)** — Gmail 断开连接显示通用"Validation"错误。
- **[#6028](https://github.com/nearai/ironclaw/issues/6028)** — MCP tab 标题前残留字面 `$`（JSX 模板字符串渲染 bug）。
- **[#6037](https://github.com/nearai/ironclaw/issues/6037)** — `ConnectionStatus` 组件隐藏所有状态。
- **[#6039](https://github.com/nearai/ironclaw/issues/6039)** — Light 主题下 Outline/Danger 按钮对比度不足。

**总结**：P2 与 P3 普遍**缺少对应修复 PR**，仅 #6050 有机器人提交的修复。维护者在 Bug Bash 结束后应优先为 P1/P2 问题分配 owner。

---

## 6. 功能请求与路线图信号

虽然没有显式以 `[feature]` / `[request]` 标签的条目，但以下信号已嵌入当前 Issue/PR 流：

| 信号 | 载体 | 进入下一版本概率 |
|------|------|----------------|
| **MCP 服务器注册用户化** | [PR #5970](https://github.com/nearai/ironclaw/pull/5970)（T1，待合并） | 🟢 高，已在主线阻塞下游 T2/T3 |
| **Agent Loop 工具能力 completion nudge** | [PR #6013](https://github.com/nearai/ironclaw/pull/6013)（interactive coding 启用） | 🟢 高 |
| **Matrix 通道（Reborn WASM 骨架）** | [PR #6062](https://github.com/nearai/ironclaw/pull/6062)（已关闭，需看后续重提） | 🟡 中 |
| **Agent 应自动修复已知根因** | [Issue #6045](https://github.com/nearai/ironclaw/issues/6045) | 🟡 中，需 prompt 与工具契约联合改造 |
| **私有漏洞披露通道** | [Issue #6000](https://github.com/nearai/ironclaw/issues/6000) | 🟡 中，治理优先级 |
| **Light 主题全套 token 化** | [Issue #6039](https://github.com/nearai/ironclaw/issues/6039) | 🟡 中，UI 债务 |
| **Slack OAuth 流程加固** | [PR #5957](https://github.com/nearai/ironclaw/pull/5957)（已合） | ✅ 已纳入 |
| **Chat 连接状态显式呈现** | [Issue #6037](https://github.com/nearai/ironclaw/issues/6037) | 🟢 高（用户体验关键） |

---

## 7. 用户反馈摘要

从 Issue 描述与 PR 评审评论提炼的真实用户痛点：

1. **状态展示不可信** — 用户反映 Assistant 报告与 UI 实际状态不一致（[#5948](https://github.com/nearai/ironclaw/issues/5948)、[#6043](https://github.com/nearai/ironclaw/issues/6043)），破坏了用户对系统反馈的信任。

2. **错误恢复路径缺乏** — 多个 Issue（#5882 Slack 重连死锁、#6049 Gmail 断连失败、#6043 GitHub 连接）表明用户在遇到失败时**只能通过重装扩展恢复**，体验很差。

3. **Routine（自动化）功能整体可用性不足** — #5836 的定时任务完全失败（0% 成功率）、#5707 的实现细节泄露、#6060 的全局默认投递目标未隔离、#5891 已显示修复但 #5883 报错仍残留——说明 Routine 是当前最薄弱的功能面。

4. **Agent 的"主动 vs. 询问"边界模糊** — #6045 揭示了一个典型 UX 张力：用户期望 Agent 在识别已知问题后自动修复，但当前模型退化为解释并询问。

5. **视觉与连接态可观测性差** — Light 主题对比度（#6039）、连接状态隐藏（#6037）、陈旧横幅（#6050、#5879）共同构成"看不见的状态机"问题。

6. **安全治理信心不足** — #6000 维护者注意到 `SECURITY.md` 缺失与 GitHub 私有漏洞报告未启用，表明外部研究者**缺乏合适渠道**上报问题。

---

## 8. 待处理积压（维护者关注）

以下 Issue/PR 长期处于待响应状态，建议本周分诊：

| 类型 | 编号 | 标题 | 年龄 | 风险 | 链接 |
|------|------|------|------|------|------|
| 🧪 测试桩缺失 | [#5640](https://github.com/nearai/ironclaw/issues/5640) | `hook_security_audit_sink` 在集成 harness 中总为 None | 10 天 | 集成测试可信度 | [链接](https://github.com/nearai/ironclaw/issues/5640) |
| 🚀 发布待合并 | [#5598](https://github.com/nearai/ironclaw/pull/5598) | 包含破坏性变更的 release PR | 11 天 | 下游阻塞 | [链接](https://github.com/nearai/ironclaw/pull/5598) |
| 📡 迁移流程 | [#5936](https://github.com/nearai/ironclaw/pull/5936) | v1-to-Reborn 离线迁移工作流（XL、high risk） | 4 天 | 升级路径 | [链接](https://github.com/nearai/ironclaw/pull/5936) |
| 🧩 通道扩展 | [#5845](https://github.com/nearai/ironclaw/pull/5845) | NEA-25 栈 4/7：`one slack extension` | 6 天 | NEA-25 进度 | [链接](https://github.com/nearai/ironclaw/pull/5845) |
| ♻️ 架构重构 | [#5847](https://github.com/nearai/ironclaw/pull/5847) | NEA-25 栈 5/7：扩展 wire 重组 | 6 天 | NEA-25 进度 | [链接](https://github.com/nearai/ironclaw/pull/5847) |
| 🔌 WebUI 入口 | [#6042](https://github.com/nearai/ironclaw/pull/6042) | W3.6 WebUI ingress 所有权与操作员鉴权 | 1 天 | 安全相关 | [链接](https://github.com/nearai/ironclaw/pull/6042) |

**维护者建议**：
- 集中处理 Bug Bash 产出的 P1（Slack DM 路由错误）与核心 P2（Routine 全失败、审批卡片缺失）。
- 决定 #5598 的发布时机——破坏性变更持续驻留会放大下游消费者的不确定性。
- 显式回应 #6000 的安全披露通道缺失，至少先创建 `SECURITY.md`。

---

## 项目健康度评估

| 维度 | 评级 | 备注 |
|------|------|------|
| **活跃度** | 🟢 高 | 84 条更新/24h，机器人与多核心贡献者并行推动 |
| **代码评审负载** | 🟡 高 | 待合并 34 条 vs 已合并 16 条，评审压力偏大 |
| **Bug 响应** | 🟠 中 | 大量 P1/P2 缺修复 PR，社区已贴出 bug_bash 标签 |
| **安全治理** | 🔴 待加强 | SECURITY.md 与私有漏洞披露仍未启用 |
| **架构演进** | 🟢 正常 | NEA-25 统一扩展模型按计划推进 |
| **CI / 依赖卫生** | 🟢 良好 | 新增静态检查 + dependabot 持续升级 |

**核心结论**：项目处于"功能深化期"叠加"系统性 Bug 清理期"双重阶段，短期需集中资源处理 P1/P2 bug 与评审积压，中期需正视安全披露通道缺失带来的合规与研究者信任风险。

---

*报告由 AI 智能体开源项目分析师自动生成，基于 2026-07-14 当日 GitHub 数据快照。*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目日报 · 2026-07-14

> 数据范围：2026-07-13 ~ 2026-07-14（过去 24 小时）  
> 仓库：[netease-youdao/LobsterAI](https://github.com/netease-youdao/LobsterAI)

---

## 1. 今日速览

LobsterAI 今日呈现**高强度迭代+零外部反馈**的典型内部冲刺状态：过去 24 小时共有 **21 条 PR 更新（19 条已关闭/合并，2 条仍 OPEN）**，但 Issues 端完全静默（0 新开、0 活跃、0 关闭），社区互动信号缺失。维护者 **fisherdaddy** 单日贡献了 16 条 PR，覆盖 Windows 安装/签名链路修复、Cowork 体验优化、OpenClaw 调度逻辑等多个核心模块，项目健康度整体向好，但仍有 2 条历史依赖升级与错误分类 PR 长期挂起未合入，需关注积压问题。

---

## 2. 版本发布

**无新版本发布**。今日 21 条 PR 均为代码层迭代，未触发新 Release 标签。鉴于本周合并大量 build/安装链路修复（Windows 签名、hdiutil、NSIS 自愈、Web Installer），下一版本很可能是一个面向桌面端稳定性与安装可靠性的维护性发布。

---

## 3. 项目进展（今日合并/关闭的重要 PR）

### 3.1 Windows 安装/构建链路修复（重点方向）
维护者集中投入修复 Windows 安装流程的若干"卡死"问题：

- **[PR #2327](https://github.com/netease-youdao/LobsterAI/pull/2327)** `fix(build): sign Windows app binary through internal signing service`  
  解决 `electron-builder` 只签名 NSIS 外壳、未签名内部 `LobsterAI.exe` 导致的安全软件首次启动冻结问题，新增 `win-sign.cjs` 对 app exe、卸载器、安装器全部签名。

- **[PR #2326](https://github.com/netease-youdao/LobsterAI/pull/2326)** `fix(installer): self-heal interrupted win-resources.tar extraction`  
  NSIS 安装器优先调用系统 `tar.exe`，回退到 electron 自带解压工具并设置 10 分钟看门狗，避免被安全软件冻结后留下空 `cfmind` 目录无法恢复。

- **[PR #2323](https://github.com/netease-youdao/LobsterAI/pull/2323)** `feat(build): add opt-in Windows web installer target`  
  新增 `LOBSTERAI_WEB_INSTALLER` 门控的 nsis-web 目标，安装时从 CDN 拉取 app 包，附 `app-builder-lib` patch 支持 verbatim `appPackageUrl`。

- **[PR #2321](https://github.com/netease-youdao/LobsterAI/pull/2321)** `fix: mac update hdiutil failed`  
  修复 macOS 更新流程中的 `hdiutil` 失败问题。

### 3.2 浏览器稳定性与 OpenClaw 调度
- **[PR #2328](https://github.com/netease-youdao/LobsterAI/pull/2328)** `fix: serialize concurrent browser launch/search to stop Chrome leaks`  
  串行化并发浏览器启动/搜索，解决 Chrome 进程泄漏。

- **[PR #2320](https://github.com/netease-youdao/LobsterAI/pull/2320)** `fix(openclaw): fast-forward missed cron jobs instead of only skipping catch-up`  
  修复 `skipMissedJobs` 模式下过期 `nextRunAtMs` 未推进，导致首次 tick 重放过期任务绕过节流的缺陷。

### 3.3 Cowork 体验与通知体系升级
- **[PR #2318](https://github.com/netease-youdao/LobsterAI/pull/2318)** `feat(notifications): upgrade desktop notifications`  
  将 `TaskCompletionNotifier` 升级为 `DesktopNotificationManager`，新增权限请求/问题等待的前台通知模式与请求解决追踪。

- **[PR #2319](https://github.com/netease-youdao/LobsterAI/pull/2319)** `feat(cowork): revamp homepage quick-action scenarios`  
  用"文档写作 → docx 技能"替换不匹配的"教育学习"，刷新 pptx/website 提示文案。

- **[PR #2324](https://github.com/netease-youdao/LobsterAI/pull/2324)** `feat(cowork): stream ordered thinking blocks`  
  将 OpenClaw 思考流按 turn 顺序呈现，避免历史回放时重复 thinking 消息。

- **[PR #2325](https://github.com/netease-youdao/LobsterAI/pull/2325)** `fix(cowork): fix badge/title descender clipping`  
  修复徽章/标题下沿被裁剪问题并稳定模板。

- **[PR #2322](https://github.com/netease-youdao/LobsterAI/pull/2322)** `feat: optimize file card`  
  文件卡片优化。

- **[PR #2316](https://github.com/netease-youdao/LobsterAI/pull/2316)** `fix(renderer): prevent Windows title bar logo compression`  
  Windows 侧边栏折叠+更新徽章场景下保持 logo 不被压缩。

### 3.4 Cowork 排队/转向（Steer）机制
- **[PR #2315](https://github.com/netease-youdao/LobsterAI/pull/2315)** `fix(cowork): connect queued follow-up coordinator`  
  跨会话、应用最小化时仍能处理排队的 follow-up。

- **[PR #2292](https://github.com/netease-youdao/LobsterAI/pull/2292)** `fix(cowork): stabilize steer follow-up routing`  
  引入 Codex 风格 steer 队列，将临时 new-chat 会话替换为真实 started 会话，限制流式状态仅作用于活动会话。

- **[PR #2300](https://github.com/netease-youdao/LobsterAI/pull/2300)** `fix(cowork): support attachments in steer queue`  
  steer 队列支持文件附件、拖拽/粘贴文件、选中文本、图片 payload。

- **[PR #2289](https://github.com/netease-youdao/LobsterAI/pull/2289)** `fix(cowork): clear stalled compaction retry maintenance`  
  复用可恢复重试等待路径处理自动压缩补全，避免上下文维护悬挂。

**整体评估**：今日合并的 19 条 PR 显著推进了**桌面端安装可靠性**、**Cowork 通知与排队交互**、**OpenClaw 调度正确性**三条主线，项目在"上线可用性"维度跨出一大步。

---

## 4. 社区热点

今日 Issues 端 0 活跃、0 评论，**无讨论热点**。PR 端评论数普遍为 `undefined`（数据集未抓取评论详情），从点赞数看全部 PR 👍=0，**无法从社区反应侧评估热度**。

**潜在热点信号**（基于 PR 关闭密度与跨模块标签）：
- Windows 安装链路 4 条 PR 集中合并（#2321/#2323/#2326/#2327），暗示近期 Windows 用户遭遇过较多安装/启动失败。
- Cowork steer 机制 3 条 PR 形成闭环（#2289/#2292/#2300），是当前迭代的核心体验主题。

建议维护者关注：是否应在下次发布前开启 1~2 条"社区验证"Issues 收集外部回归反馈。

---

## 5. Bug 与稳定性

| 严重度 | 问题 | 状态 | 关联 PR |
|---|---|---|---|
| 🔴 高 | Chrome 进程泄漏（并发 launch/search） | ✅ 已修复 | [#2328](https://github.com/netease-youdao/LobsterAI/pull/2328) |
| 🔴 高 | Windows 安装首次启动被安全软件冻结 | ✅ 已修复 | [#2327](https://github.com/netease-youdao/LobsterAI/pull/2327) |
| 🔴 高 | Windows 安装中断留下空 cfmind 无法恢复 | ✅ 已修复 | [#2326](https://github.com/netease-youdao/LobsterAI/pull/2326) |
| 🟠 中 | macOS 更新 hdiutil 失败 | ✅ 已修复 | [#2321](https://github.com/netease-youdao/LobsterAI/pull/2321) |
| 🟠 中 | OpenClaw 跳过启动 catch-up 后仍重放过期 cron | ✅ 已修复 | [#2320](https://github.com/netease-youdao/LobsterAI/pull/2320) |
| 🟡 低 | Windows 标题栏 logo 折叠时压缩 | ✅ 已修复 | [#2316](https://github.com/netease-youdao/LobsterAI/pull/2316) |
| 🟡 低 | 徽章/标题 descender 裁剪 | ✅ 已修复 | [#2325](https://github.com/netease-youdao/LobsterAI/pull/2325) |
| 🟡 低 | Cowork 自动压缩重试维护悬挂 | ✅ 已修复 | [#2289](https://github.com/netease-youdao/LobsterAI/pull/2289) |
| 🟢 体验 | 首页快捷场景文案不匹配办公场景 | ✅ 已修复 | [#2319](https://github.com/netease-youdao/LobsterAI/pull/2319) |

**结论**：今日所有严重/中等 Bug 均已合入修复 PR，无未覆盖回归。

---

## 6. 功能请求与路线图信号

今日无外部 Issues 提交，但通过 PR 标题与描述可推断**内部路线图重点**：

1. **桌面端安装体验完整性**（强信号）  
   Windows 签名 + 自愈解压 + Web Installer + macOS hdiutil 修复，构成端到端安装可靠性闭环。下一版本很可能将"安装链路"作为发布说明重点章节。

2. **Cowork → OpenClaw 协同体验深化**（强信号）  
   思考流分块呈现（#2324）、steer 队列附件（#2300）、排队 follow-up 协调器（#2315）共同指向"长任务可观察、可干预、可排队"的交互目标。

3. **通知体系重构**（中信号）  
   `DesktopNotificationManager` 的引入（#2318）暗示后续会扩展到权限请求、问题等待等更多事件类型。

4. **依赖升级尚未落地**（待办信号）  
   **[PR #1277](https://github.com/netease-youdao/LobsterAI/pull/1277)** 提议将 electron 从 40.2.1 升级到 43.1.0（同时更新 electron-builder），仍 OPEN ——若不尽快合入，累积技术债将影响后续安全更新。

---

## 7. 用户反馈摘要

**Issues 端今日零信号**，无法从社区评论中提取痛点。仅可从两条 stale 标记 PR 的旧描述推测历史用户诉求：

- **[PR #1323](https://github.com/netease-youdao/LobsterAI/pull/1323) `fix(cowork): narrow input-too-long error classification`** —— 用户在短上下文时被错误提示"输入过长/上下文超限"，反映出**错误分类误伤**带来的体验困扰。
- **[PR #1488](https://github.com/netease-youdao/LobsterAI/pull/1488) `feat(scheduledTask): 定时任务模块 UI 升级`** —— 卡片网格 + 搜索/历史分组诉求来自旧版本表格布局难以管理大量任务的痛点。

**建议**：维护者考虑在 Release 前主动开启"用户反馈征集"Issues，弥补社区互动数据空缺。

---

## 8. 待处理积压

| 类型 | PR | 标题 | 创建时间 | 挂起时长 | 链接 |
|---|---|---|---|---|---|
| ⚠️ 依赖升级 | #1277 | `chore(deps-dev): bump the electron group` (40.2.1 → 43.1.0) | 2026-04-02 | ~103 天 | [查看](https://github.com/netease-youdao/LobsterAI/pull/1277) |
| ⚠️ 错误分类 | #1323 | `fix(cowork): narrow input-too-long error classification` | 2026-04-02 | ~103 天 | [查看](https://github.com/netease-youdao/LobsterAI/pull/1323) |

**提醒**：
- **#1277** 涉及大版本 Electron 升级（40→43），跨多个 minor 版本的安全与 API 变更，长期不评估可能造成 patch 难度递增。
- **#1323** 解决的是用户可见的误报错误信息，体验影响中等，但已标 stale，建议维护者主动 review 是否合入或关闭。

---

### 📊 项目健康度评分（主观）

| 维度 | 评分 | 说明 |
|---|---|---|
| 迭代活跃度 | ⭐⭐⭐⭐⭐ | 24h 21 PR，单日高产 |
| 稳定性修复 | ⭐⭐⭐⭐⭐ | 覆盖安装/启动/调度多个高严重度 Bug |
| 社区互动 | ⭐⭐ | Issues 端完全静默 |
| 积压管理 | ⭐⭐ | 2 条 ~100 天未决 PR 需清理 |
| 发布节奏 | ⭐⭐⭐ | 今日无 Release，但批量合入预示下一版 |

> 📌 **一句话总结**：LobsterAI 正处于"内部冲刺→即将发布"的窗口期，代码侧表现强劲，但社区侧数据完全空白，建议在下一个 Release 节点同步建立用户反馈通道，避免"闭门造车"。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目日报 · 2026-07-14

---

## 1. 今日速览

Moltis 项目今日处于**低活跃度**状态。过去 24 小时内仓库无新增 Issue、无版本发布，仅有 1 条 PR 处于待合并状态（#1147），且无任何 PR 被合并或关闭。从积极角度看，正在审查中的 PR 涉及一个影响 CalDAV 日历功能的实质 Bug 修复，提交者 `thoscut` 仍在持续推进；整体社区响应节奏平稳，但 issue 端沉默值得维护者关注是否需要主动 ping 社区或清理积压。

---

## 2. 版本发布

今日无新版本发布，跳过本节。

---

## 3. 项目进展

**今日无 PR 合并或关闭**，项目主分支今日无代码层面的实质推进。

唯一活跃的 PR #1147 仍处于 OPEN 状态，自 2026-07-11 创建后已于昨日（07-13）再次更新，提交者仍在打磨方案，等待维护者审查与合并。

🔗 [PR #1147](https://github.com/moltis-org/moltis/pull/1147)

---

## 4. 社区热点

由于过去 24 小时 Issues 更新为 0、PR 更新仅 1 条且评论数与反应数均为 0，**社区讨论几乎处于静默状态**，无明显热点议题可聚焦。

需要留意的信号：
- 0 评论 + 0 👍 的 PR #1147 虽然是实质性的 Bug 修复，但尚未获得社区审阅反馈；
- 建议维护者主动 review 这条 PR，或在社区频道（Discord/Matrix 等）喊话征集 reviewer，避免长期无人 review 导致合并窗口拉长。

---

## 5. Bug 与稳定性

### 🔴 CalDAV 日历查询未遵守时间范围（潜在功能完整性 Bug）

- **PR**: [#1147](https://github.com/moltis-org/moltis/pull/1147) — `fix(caldav): honor time range in list_events via server-side calendar-query`
- **作者**: thoscut
- **状态**: OPEN（有 fix PR 待合并）
- **严重程度**: 中等（不影响数据正确性，但导致工具能力与文档承诺不一致）
- **问题描述**:
  - `CalDavClient::list_events` 的 `range` 参数被绑定为未使用的 `_range` 变量（命名带下划线前缀，是 Rust 中典型的"故意忽略"标记）；
  - 这导致 `list_events` 工具的 `start`/`end` 参数在**任何服务器上都不生效**，工具始终返回日历中的全部事件；
  - 这与文档描述（应支持时间范围过滤）直接矛盾。
- **修复方案**: 改为使用符合 CalDAV RFC 4791 的 `calendar-query`（`REPORT` 请求）携带时间范围，由服务器端过滤后再返回，效率与语义同时改善。
- **影响范围**: 所有依赖 `list_events` 工具做按时间筛选日历事件的 AI agent 行为；尤其影响"今天有什么会""未来一周日程"这类典型 prompt。

> ✅ 已有 fix PR，处于待合并状态，建议维护者优先处理。

---

## 6. 功能请求与路线图信号

今日无新增 Issue，无法提取新的功能请求信号。

不过从 PR #1147 本身可以**反向推断一项路线图信号**：
- 项目在 CalDAV 集成方面仍在补齐基础能力，尚未达到"工具语义 ↔ 服务器语义完全对齐"的成熟阶段；
- 后续可能需要系统性审计其他工具（如 `create_event`、`update_event`、`delete_event`）是否存在类似的"参数被忽略"或"客户端过滤代替服务器过滤"的反模式。

---

## 7. 用户反馈摘要

今日 Issues 端无新增评论数据，无法提炼真实用户痛点。

仅可从 PR 描述中间接获取一条用户场景：
> 用户期望通过 `list_events` 工具配合 `start`/`end` 参数只取某时间段内的日历事件，但实际拿到的是**全量事件**，迫使 agent 层不得不自行在内存中做二次过滤——这既浪费 token，也不符合工具语义预期。

🔗 [PR #1147](https://github.com/moltis-org/moltis/pull/1147)

---

## 8. 待处理积压

| 类型 | 编号 | 标题 | 创建/更新 | 备注 |
|------|------|------|-----------|------|
| PR（待合并） | [#1147](https://github.com/moltis-org/moltis/pull/1147) | fix(caldav): honor time range in list_events via server-side calendar-query | 创建 2026-07-11 / 更新 2026-07-13 | 实质性 Bug 修复，已 3 天无 reviewer 反馈，建议优先处理 |
| Issues | — | 过去 24h 无更新 | — | 建议维护者巡检长期 open 的 issue，识别是否需要关闭/bot 标记/重新分类 |

**提醒**:
- PR #1147 是一个影响 CalDAV 工具正确性的修复，且 diff 相对聚焦（仅修改 `list_events` 路径），review 与合并成本低，建议尽快推进；
- 若项目配置了 CI bot 自动 ping reviewer，可检查其是否正常工作；
- 当前仓库 0 新 issue、0 新 PR 的"双零"状态，可能意味着：(a) 项目处于功能稳定期、(b) 推广引流放缓、或 (c) 外部贡献者入口不够友好——建议维护者结合前端流量与 issue 区长期 open 数综合判断。

---

### 📊 项目健康度评分（今日）

| 维度 | 评分 | 说明 |
|------|------|------|
| 活跃度 | ⭐⭐☆☆☆ | 仅 1 条 PR 更新，无 issue 互动 |
| 代码推进 | ⭐⭐☆☆☆ | 今日无合并 |
| Bug 响应 | ⭐⭐⭐☆☆ | 有 fix PR 但未合并 |
| 社区互动 | ⭐☆☆☆☆ | 无评论、无 reaction |
| 整体健康 | ⭐⭐☆☆☆ | 偏静默，但无异常信号 |

---

*报告生成时间：2026-07-14 ｜ 数据来源：moltis-org/moltis GitHub 公开数据*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目日报 · 2026-07-14

> 仓库：[agentscope-ai/CoPaw](https://github.com/agentscope-ai/CoPaw)｜数据周期：过去 24 小时

---

## 一、今日速览

CoPaw 在 v2.0.0 正式发布后进入 **高频修复合并期**：24 小时内合并/关闭 28 个 PR、新开/活跃 27 个 Issue，并紧随 v2.0.0 推出第一个补丁版本 **v2.0.0.post1**。从内容分布看，社区和开发团队当前的核心矛盾集中在 **"v2.0.0 升级后的稳定性回归"** —— 围绕 `tool_call/tool_result` 配对被上下文压缩/Scroll 淘汰逻辑拆散、消息队列失效、Desktop 打包缺包等链路问题密集出现 hotfix。整体活跃度处于 **极高水平**（日均 100 次 issue/PR 互动），但项目健康度因大量 v2 升级反馈处于 **承压修复期**。

---

## 二、版本发布

### 📦 v2.0.0.post1（补丁版本）

- 发布说明：[PR #6007](https://github.com/agentscope-ai/QwenPaw/pull/6007)
- 关联修复：
  - [#6011](https://github.com/agentscope-ai/QwenPaw/pull/6011) 修复 provider 搜索框浏览器自动填充
  - [#6007](https://github.com/agentscope-ai/QwenPaw/pull/6007) 修复 legacy session 相关问题

**性质**：post-release 紧急补丁，不含破坏性变更。  
**迁移注意**：v2.0.0 用户可直接升级，建议同步排查以下与 v2.0.0.post1 同期合并的 hotfix（多数未含进本次 post1）：

| Issue | 状态 | 对应修复 PR |
|---|---|---|
| [#5996](https://github.com/agentscope-ai/QwenPaw/issues/5996) orphan ToolResultBlock 导致 400 | 已关闭 | [#6052](https://github.com/agentscope-ai/QwenPaw/pull/6052) / [#6058](https://github.com/agentscope-ai/QwenPaw/pull/6058) |
| [#6006](https://github.com/agentscope-ai/QwenPaw/issues/6006) 消息队列功能丢失 | 已关闭 | [#6045](https://github.com/agentscope-ai/QwenPaw/pull/6045) |
| [#6024](https://github.com/agentscope-ai/QwenPaw/issues/6024) / [#6012](https://github.com/agentscope-ai/QwenPaw/issues/6012) / [#5965](https://github.com/agentscope-ai/QwenPaw/issues/5965) Desktop 缺 `agentscope.tool._builtin._scripts` 子模块 | 已关闭 | v2.0.0.post1 关联 fix |
| [#5986](https://github.com/agentscope-ai/QwenPaw/issues/5986) / [#5960](https://github.com/agentscope-ai/QwenPaw/issues/5960) 上下文压缩破坏 tool_call 配对 | 已关闭 | [#5935](https://github.com/agentscope-ai/QwenPaw/pull/5935) 重构 pruning |

---

## 三、项目进展（重要 PR 合并/关闭）

| PR | 主题 | 影响 |
|---|---|---|
| [#5935](https://github.com/agentscope-ai/QwenPaw/pull/5935) | 重构工具结果裁剪，统一 `ToolResultPruningMiddleware`（block-scoped metadata） | 解决了上下文压缩、Scroll 淘汰、offload hint 多套裁剪逻辑分裂的根因 |
| [#5953](https://github.com/agentscope-ai/QwenPaw/pull/5953) | 统一 scroll-mode 工具结果截断 hint | 关联修复 #5946、#5929、#6009 |
| [#6045](https://github.com/agentscope-ai/QwenPaw/pull/6045) | 删除会话时清理消息队列 | 修复 v2.0.0 升级后队列功能消失的回归 |
| [#6044](https://github.com/agentscope-ai/QwenPaw/pull/6044) | 桥接 `register_tool` 到运行时 ToolRegistry | 修复插件注册的工具"配置可见但 Agent 不可用"的严重缺陷 |
| [#6058](https://github.com/agentscope-ai/QwenPaw/pull/6058) | 拍平 offload hint + 临时禁用有缺陷的 offload 机制 | 临时止血 400 错误，承认 offload 机制需重做 |
| [#6054](https://github.com/agentscope-ai/QwenPaw/pull/6054) | 治理策略 fallback 放宽 + 全局沙箱开关 | 减少低价值审批弹窗，引入 Console 可切换的沙箱总开关 |
| [#6063](https://github.com/agentscope-ai/QwenPaw/pull/6063) | 前端 tool-guard 规则桥接 policy 深度扫描 | 治理/安全规则支持热加载，无需重启 |
| [#6041](https://github.com/agentscope-ai/QwenPaw/pull/6041) | 只读工具豁免 doom loop 检测 | 修复 #5906：避免 read 操作触发"末日循环"误杀 |
| [#6068](https://github.com/agentscope-ai/QwenPaw/pull/6068) | 历史迁移保留 session ID | 修复 Scroll 会话身份错乱 (#5964) |
| [#6062](https://github.com/agentscope-ai/QwenPaw/pull/6062) | 跳过冗余 manifest 协调，防止 FD 耗尽 | 性能与稳定性 (#3892) |
| [#6061](https://github.com/agentscope-ai/QwenPaw/pull/6061) | 新增 Ponytail Quality 插件后端测试 | 新插件质量门禁 |
| [#6053](https://github.com/agentscope-ai/QwenPaw/pull/6053) | `qwenpaw doctor` 切换至 `/api/healthz` 探活 | 修复 doctor 误报 404 |

**整体推进评估**：v2.0.0 暴露的 **tool_call/tool_result 配对破坏、消息队列丢失、Desktop 缺包、插件注册断链** 四大类核心回归，在 24 小时内基本全部完成或推进修复。开发节奏紧凑，但 #6058 中"临时禁用 offload"也透露出工具执行层的架构仍有遗留债务。

---

## 四、社区热点

按评论数排序，反映当前用户最关心的痛点：

1. **[#5996 (10评)](https://github.com/agentscope-ai/QwenPaw/issues/5996)** — *MODEL_EXECUTION_ERROR：hint 消息中 orphan ToolResultBlock 导致 OpenAI 400*
   - 讨论核心：`make_offload_hint_msg()` 把 `ToolResultBlock` 注入 assistant 消息却无 `tool_calls`，违反 OpenAI 协议
   - 代表了 v2.0.0 **最广泛的稳定性抱怨**

2. **[#5961 (7评)](https://github.com/agentscope-ai/QwenPaw/issues/5961)** — *Agent 反复写入/删除循环*
   - 配合 qwen3.7-plus 模型时，doom loop 检测过激，已由 [#6041](https://github.com/agentscope-ai/QwenPaw/pull/6041) 修复

3. **[#5947 (6评)](https://github.com/agentscope-ai/QwenPaw/issues/5947)** — *MCP 子工具允许/拒绝规则失效*
   - 严重安全问题：用户拒绝的子工具仍被调用

4. **[#6006 (6评)](https://github.com/agentscope-ai/QwenPaw/issues/6006)** — *消息队列功能丢失，标记"急急急"*
   - 用户语气强烈，反映 v2 回归打中核心生产力场景

5. **[#5980 (5评)](https://github.com/agentscope-ai/QwenPaw/issues/5980)** — *v2.0.0 缺失 SSH Offline / Profiles 等 v1.1.12 已有功能（404）*
   - 揭示 v2 升级中 **部分功能迁移遗漏**，影响工作流

6. **[#5872 (5评)](https://github.com/agentscope-ai/QwenPaw/issues/5872)** — *Docker 内 browser_use 因 dbus 失败*
   - 部署环境兼容性，影响容器化用户

7. **[#6013 (5评)](https://github.com/agentscope-ai/QwenPaw/issues/6013)** — *用户反馈 v2.0.0 稳定性不如 v1.x，并对比腾讯 workbuddy*
   - 体现 **社区情绪承压**，需要公开回应

**背后诉求归纳**：(1) v2.0.0 必须先回归到 v1.x 稳定基线；(2) offload / 上下文压缩 / 消息队列是用户最依赖的三条执行路径；(3) MCP 权限沙箱安全语义需重新校验。

---

## 五、Bug 与稳定性

按严重程度排列：

### 🔴 P0 — 阻断会话、影响核心功能

| Issue | 描述 | 状态 / 修复 |
|---|---|---|
| [#5996](https://github.com/agentscope-ai/QwenPaw/issues/5996) | 2.0 对话时 `MODEL_EXECUTION_ERROR` | ✅ 已关闭 ([#6058](https://github.com/agentscope-ai/QwenPaw/pull/6058)) |
| [#5961](https://github.com/agentscope-ai/QwenPaw/issues/5961) | Agent 反复写入/删除循环 | 🟡 OPEN，有 PR [#6041](https://github.com/agentscope-ai/QwenPaw/pull/6041) |
| [#6006](https://github.com/agentscope-ai/QwenPaw/issues/6006) | 消息队列功能消失 | ✅ 已关闭 ([#6045](https://github.com/agentscope-ai/QwenPaw/pull/6045)) |
| [#5986](https://github.com/agentscope-ai/QwenPaw/issues/5986) / [#5960](https://github.com/agentscope-ai/QwenPaw/issues/5960) | 上下文压缩破坏 tool_call 配对 → 400 | ✅ 已关闭 ([#5935](https://github.com/agentscope-ai/QwenPaw/pull/5935)) |
| [#5962](https://github.com/agentscope-ai/QwenPaw/issues/5962) | WeChat 渠道 orphan tool_result 导致会话挂掉 | ✅ 已关闭 |
| [#6034](https://github.com/agentscope-ai/QwenPaw/issues/6034) | 升级后多渠道 Internal error + 上下文乱写 | 🟡 OPEN |
| [#6049](https://github.com/agentscope-ai/QwenPaw/issues/6049) | 多轮对话后频繁 400 invalid params | 🟡 OPEN |
| [#6017](https://github.com/agentscope-ai/QwenPaw/issues/6017) | DeepSeek 400 直接杀会话（Feishu 渠道） | 🟡 OPEN |

### 🟠 P1 — 严重退化

| Issue | 描述 | 状态 / 修复 |
|---|---|---|
| [#5947](https://github.com/agentscope-ai/QwenPaw/issues/5947) | MCP 子工具权限 allow/deny 失效 | ✅ 已关闭 |
| [#6024](https://github.com/agentscope-ai/QwenPaw/issues/6024) / [#6012](https://github.com/agentscope-ai/QwenPaw/issues/6012) / [#5965](https://github.com/agentscope-ai/QwenPaw/issues/5965) | Desktop 缺 `agentscope.tool._builtin._scripts` 子模块 | ✅ 已关闭 (含 v2.0.0.post1) |
| [#5963](https://github.com/agentscope-ai/QwenPaw/issues/5963) | `execute_shell_command` 硬限 60s，LLM timeout 被忽略 | 🟡 OPEN |
| [#6056](https://github.com/agentscope-ai/QwenPaw/issues/6056) | 后台 offload 立即 kill 子进程 | 🟡 OPEN |
| [#6008](https://github.com/agentscope-ai/QwenPaw/issues/6008) | TUI 点击流式输出崩溃 | 🟡 OPEN ([#6069](https://github.com/agentscope-ai/QwenPaw/pull/6069) 修复中) |
| [#5977](https://github.com/agentscope-ai/QwenPaw/issues/5977) | workspace 热重载后插件 HTTP 路由丢失 | 🟡 OPEN |
| [#6020](https://github.com/agentscope-ai/QwenPaw/issues/6020) | 审批弹窗路由错 + `approval_level: OFF` 不生效 | 🟡 OPEN |
| [#5954](https://github.com/agentscope-ai/QwenPaw/issues/5954) | `.mcp` 被当目录导致 `Failed to get agent` | ✅ 已关闭 |
| [#5979](https://github.com/agentscope-ai/QwenPaw/issues/5979) | Linux 沙箱以 root 跑 electron 程序崩溃 | 🟡 OPEN |
| [#6055](https://github.com/agentscope-ai/QwenPaw/issues/6055) | Docker 环境变量不生效 + 前端配置不同步 | 🟡 OPEN |
| [#5872](https://github.com/agentscope-ai/QwenPaw/issues/5872) | Docker 内 browser_use dbus 错误 | 🟡 OPEN |

### 🟡 P2 — 体验性问题

- [#5788](https://github.com/agentscope-ai/QwenPaw/issues/5788) Skills 列表 20 项限制滚动失效（已关闭）
- [#5955](https://github.com/agentscope-ai/QwenPaw/issues/5955) WebUI 技能界面 20 项上限
- [#5984](https://github.com/agentscope-ai/QwenPaw/issues/5984) 无 Landlock 内核时无法关闭 Bash 审批

**修复覆盖率**：今日关闭的 23 个 Issue 中，绝大多数 P0/P1 已有对应 PR 跟进；剩余 14 个 OPEN 主要是环境/平台兼容性 (Linux ARM、Docker dbus)、安全治理细化问题。

---

## 六、功能请求与路线图信号

| Issue | 主题 | 进入下版本的概率 |
|---|---|---|
| [#5980](https://github.com/agentscope-ai/QwenPaw/issues/5980) | 恢复 v1.1.12 中 SSH Offline / Profiles 等缺失功能 | **高**（属于回归，必须补回） |
| [#6048](https://github.com/agentscope-ai/QwenPaw/issues/6048) | 免认证主机白名单支持 CIDR 段 | 中（安全特性，治理方向一致） |
| [#5958](https://github.com/agentscope-ai/QwenPaw/issues/5958) | 在 QwenPaw 中使用 AgentScope 权限控制 | 中（已与 #6054 全局沙箱开关方向呼应） |
| [#5069](https://github.com/agentscope-ai/QwenPaw/pull/5069) | 为纯文本主模型增加 visual 模型回退 | 中（已有 PR，长期 OPEN） |
| [#6067](https://github.com/agentscope-ai/QwenPaw/pull/

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目日报 · 2026-07-14

---

## 1. 今日速览

ZeroClaw 今日活跃度处于**中高水平**：24 小时内共有 50 条 Issue 更新（34 条新开/活跃、16 条关闭）与 50 条 PR 更新（47 条待合并、3 条合并/关闭），但**无新版本发布**。当前项目重心正从 v0.8.3 收尾过渡至 v0.8.4 维护分支，多个子追踪器（tracker）已陆续关闭，主题从"功能冻结"转向"内存系统深化 + RFC 治理 + 测试覆盖补全"。社区讨论集中在内存架构重构、Docker Compose 部署阻塞、Windows 平台兼容性等真实痛点，整体推进节奏健康但维护者响应压力较大。

---

## 2. 版本发布

**今日无新版本发布。**

- 当前开发主线：`master`
- 已完成的 v0.8.3 关闭动作（#8070、#8071、#8073、#8360、#8362、#8363、#7690、#7693、#7694、#7688）显示 milestone 正在收尾，但 #7320（v0.8.3 milestone index）仍 OPEN，最终发布前的验证与说明尚未完成。
- v0.8.4 维护分支目标日期为 2026-07-31，参见 [#8357](https://github.com/zeroclaw-labs/zeroclaw/issues/8357)。

---

## 3. 项目进展

今日合并/关闭的 PR 共 3 条，全部为 Bug 修复方向：

| PR | 类型 | 摘要 | 影响 |
|---|---|---|---|
| [#8777](https://github.com/zeroclaw-labs/zeroclaw/pull/8777) | fix(zerocode) | 移除代码块复制文本的 Markdown 围栏 | 提升 ZeroCode 用户复制粘贴体验 |
| [#8562](https://github.com/zeroclaw-labs/zeroclaw/pull/8562) | fix(cron) | 按 `job_id` 过滤 `recv_log_event`，避免并行测试交叉污染 | 修复 `remove_job_emits_structured_cron_delete_event` 的 flaky 测试 |
| （同上批次的 7690/7693/7694/7688 等子任务 Issue 均已关闭） |  | 对应测试覆盖补全已并入 master | 间接推进代码质量 |

此外，多个**高优先级 PR 已待合并**，预计将在近 1–2 日内落地：

- [#9029](https://github.com/zeroclaw-labs/zeroclaw/pull/9029) **fix(provider): OpenAI Responses vision capability**（P1，修复 #9019 的视觉能力 bug）
- [#9051](https://github.com/zeroclaw-labs/zeroclaw/pull/9051) **fix(release): restore lean prebuilt feature set**（M，恢复精简预编译特性）
- [#9049](https://github.com/zeroclaw-labs/zeroclaw/pull/9049) **fix(i18n): localize agent-scope rejection**（完成 5 语言本地化覆盖）
- [#9018](https://github.com/zeroclaw-labs/zeroclaw/pull/9018) **fix(cli): apply config-dir before locale detection**

整体来看，项目处于**质量打磨期**：功能新增放缓，bug 修复、i18n 覆盖、测试回填、文档精修成为主线。

---

## 4. 社区热点

按评论数排序，今日讨论最活跃的 Issues：

1. **[#6808](https://github.com/zeroclaw-labs/zeroclaw/issues/6808) — RFC: Work Lanes, Board Automation, and Label Cleanup**（14 评论）
   - 提议统一工作流看板/标签管理流程，文档已进入 Rev.16，状态 "Accepted / rollout in progress"。
   - 社区诉求：减少维护者手动分类负担。

2. **[#6165](https://github.com/zeroclaw-labs/zeroclaw/issues/6165) — RFC: Prefer a lighter ZeroClaw core through external integrations**（9 评论）
   - 核心争议：是否将长尾集成迁出核心，转向 MCP / 插件 / CLI 后端。风险评级 high。

3. **[#5287](https://github.com/zeroclaw-labs/zeroclaw/issues/5287) — Local-First Mode for Small Models**（5 评论，👍 2）
   - 用户希望：紧凑 prompt + 严格解析 + 防止 system 指令泄露。涉及 Ollama 等本地小模型场景。

4. **[#7694](https://github.com/zeroclaw-labs/zeroclaw/issues/7694) — feat(memory): cover storage-reader timestamp and ordering edge cases**（4 评论，已关闭）

5. **[#6548](https://github.com/zeroclaw-labs/zeroclaw/issues/6548) — [Bug]: Channel runtime command replies bypass Fluent localization**（3 评论）

6. **[#9035](https://github.com/zeroclaw-labs/zeroclaw/issues/9035) — [Bug]: Docker Compose gateway can remain loopback-bound**（3 评论，新开 S1 阻塞）

**新增热门讨论**（今日创建）：
- [#9048](https://github.com/zeroclaw-labs/zeroclaw/issues/9048) **RFC: Separate conversation history from agent-curated long-term memory** —— 提出将"会话历史"与"长期记忆"在实现层彻底解耦。

---

## 5. Bug 与稳定性

按严重程度排序：

| 严重度 | Issue | 描述 | 状态 | 修复 PR |
|---|---|---|---|---|
| **S1（阻塞）** | [#9035](https://github.com/zeroclaw-labs/zeroclaw/issues/9035) | Docker Compose 启动后 gateway 仍 loopback 绑定，发布端口无法访问 | OPEN，无 fix | — |
| **S2（降级）** | [#9046](https://github.com/zeroclaw-labs/zeroclaw/issues/9046) | `models_cache.json` 只读不写，`zeroclaw models refresh` 提示无法生效 | OPEN，无 fix | — |
| **S2** | [#9028](https://github.com/zeroclaw-labs/zeroclaw/issues/9028) | Windows 下 Ctrl+C 强退 agent（exit code 1073741510） | OPEN | 待补 |
| **S2（衍生）** | [#9019 → #9029](https://github.com/zeroclaw-labs/zeroclaw/pull/9029) | OpenAI Responses provider 视觉能力配置缺失 | OPEN | [#9029](https://github.com/zeroclaw-labs/zeroclaw/pull/9029) 待合并 |
| **S3** | [#6548](https://github.com/zeroclaw-labs/zeroclaw/issues/6548) | Channel runtime 命令回复绕过 Fluent i18n | OPEN | [#9049](https://github.com/zeroclaw-labs/zeroclaw/pull/9049) 待合并 |
| **S3** | [#8847](https://github.com/zeroclaw-labs/zeroclaw/issues/8847) | Rust 1.96 下 `cargo test --doc` 因 default-theme 重复失败 | OPEN | 待补 |
| **已关闭** | [#9044](https://github.com/zeroclaw-labs/zeroclaw/issues/9044) | `google_workspace` 工具拒绝 camelCase 方法 | CLOSED | 由 #9044 内附带修复 |

**稳定性观察**：今日报告的 Bug 中 80% 为配置/i18n/跨平台层问题，未出现核心 agent loop 崩溃类报告，整体稳定性良好。Docker Compose 端口绑定问题为 P0 级紧急，建议维护者优先响应。

---

## 6. 功能请求与路线图信号

**强信号（已有 PR 跟进）**：

- **本地小模型优化** —— [#5287](https://github.com/zeroclaw-labs/zeroclaw/issues/5287) 已与 Ollama 等本地 provider 路线图绑定，符合 v0.8.4 维护周期方向。
- **Pairing 配对码 GUI 面板** —— [#8998](https://github.com/zeroclaw-labs/zeroclaw/issues/8998)（Telegram/WeChat/Line）配合 dashboard 卡片，呼声来自真实部署用户。
- **Slack Events API（HTTP Request URL）** —— [#9022](https://github.com/zeroclaw-labs/zeroclaw/issues/9022) 适配 scale-to-zero 部署，与 serverless 化趋势吻合。
- **Matrix 单消息进度草稿** —— 巨型 PR [#8443](https://github.com/zeroclaw-labs/zeroclaw/pull/8443)（XL，已开 16 天）即将定型。
- **Telegram per-channel 去抖** —— [#8440](https://github.com/zeroclaw-labs/zeroclaw/pull/8440) 与 cron shell 输出格式 [#8438](https://github.com/zeroclaw-labs/zeroclaw/pull/8443) 等"小而实用"的功能 PR 簇。

**路线图信号（RFC 阶段）**：

- [#6165](https://github.com/zeroclaw-labs/zeroclaw/issues/6165) **核心瘦身**：长期方向，迁出长尾集成至 MCP/插件。若通过，将影响 v0.9.x+ 架构。
- [#9048](https://github.com/zeroclaw-labs/zeroclaw/issues/9048) **会话历史与长期记忆解耦**：与 #8891 持久内存追踪器联动，预期进入 v0.9 大版本。

**预期纳入版本**：v0.8.4 维护分支（2026-07-31）将主要吸纳 [#8357](https://github.com/zeroclaw-labs/zeroclaw/issues/8357) 下列的小型 fix 与依赖更新；上述 RFC 级别内容大概率推迟到 v0.9.x。

---

## 7. 用户反馈摘要

从活跃 Issue 评论中提炼的真实痛点：

- **部署摩擦**（#9035）：用户反映 `docker compose up -d` 看似成功但端口不可达，"Connection refused"。说明当前文档对 gateway 绑定语义说明不足。
- **小模型体验差**（#5287）：本地用户受 prompt 膨胀、宽松 fallback 解析、system 指令泄露之苦，期待"严肃"的紧凑模式。
- **跨平台一致性**（#9028）：Windows 下 Ctrl+C 直接强退 agent（exit code 0xC000013A），CLI 体验与 *nix 不一致。
- **配对流程不直观**（#8998）：telegram/wechat/line 等 pairing 渠道的一次性 bind code 仅在 Logs 中可见，对非技术操作者不友好。
- **内存模型困惑**（#8891、#9048）：用户反馈会话历史与长期记忆行为"看起来一样、实际不同"，需在文档与代码层一并澄清。
- **满意信号**：v0.8.3 的本地化、Slack polling 模式、ZeroCode 代码块等获得正面反馈（隐含于多个已关闭 tracker 的成功落地）。
- **本地化质量**（#6548）：zh-CN 等非英语用户的 channel runtime 回复仍是硬编码英文，影响生产可用性。

---

## 8. 待处理积压

以下重要 Issue/PR 长期处于 OPEN 状态，建议维护者关注：

| 编号 | 类型 | 标题 | 打开时长 | 风险评级 | 链接 |
|---|---|---|---|---|---|
| [#6808](https://github.com/zeroclaw-labs/zeroclaw/issues/6808) | RFC | Work Lanes / Board Automation / Label Cleanup | 约 55 天（5/20 起） | medium | 滚动中 |
| [#6165](https://github.com/zeroclaw-labs/zeroclaw/issues/6165) | RFC | Lighter ZeroClaw Core via External Integrations | 约 78 天（4/27 起） | **high** | 需决策 |
| [#5287](https://github.com/zeroclaw-labs/zeroclaw/issues/5287) | Feature | Local-First Mode for Small Models | 约 101 天（4/4 起） | **high** | 等待实现 |
| [#8288](https://github.com/zeroclaw-labs/zeroclaw/issues/8288) | Tracker | SOP milestone: daemon-owned SOP control plane to 5/5 | 20 天 | **high** | 0 评论 |
| [#8357](https://github.com/zeroclaw-labs/zeroclaw/issues/8357) | Tracker | v0.8.4 maintenance train | 18 天 | **high** | 0 评论，2026-07-31 deadline |
| [#8443](https://github.com/zeroclaw-labs/zeroclaw/pull/8443) | PR | feat(matrix): single-message progress drafts | 16 天 | **high / XL** | 待审 |
| [#8927](https://github.com/zeroclaw-labs/zeroclaw/pull/8927) | PR | fix(providers): remove unconditional strip_think_tags | 4 天 | medium | needs-maintainer-review |
| [#8656](https://github.com/zeroclaw-labs/zeroclaw/pull/8656) | PR | fix(wechat): remove markdown_to_plain_text conversion | 11 天 | **high** | needs-author-action |
| [#8900](https://github.com/zeroclaw-labs/zeroclaw/pull/8900) | PR | feat(memory): typed memory classification | 5 天 | **high / L** | needs-author-action |
| [#8898](https://github.com/zeroclaw-labs/zeroclaw/pull/8898) | PR | fix(memory): durable global memories cross-session | 5 天 | **high / M** | needs-author-action |

**关注建议**：
- 距 v0.8.4 deadline 仅 17 天，#8357 仍 0 评论，建议维护者立即明确 v0.8.4 入选标准。
- 多条 needs-author-action 状态的 PR 等待作者响应（如 #8656、#8900、#8898），如长期未动可考虑关闭或接管。
- 高风险 RFC（#6165、#6808、#5287）超过 1.5 个月仍在讨论，建议组织同步会议或开放投票，加速决策。

---

### 项目健康度评估

| 维度 | 评分 | 说明 |
|---|---|---|
| 代码活跃度 | ⭐⭐⭐⭐ | 50 PR/日，远高于中小型开源项目均值 |
| 版本节奏 | ⭐⭐⭐ | 无新发布但 v0.8.3 收尾进行中 |
| 社区参与 | ⭐⭐⭐⭐ | 多个高评论 RFC、跨生态 issue |
| Bug 响应 | ⭐⭐⭐ | S1 Docker Compose 阻塞问题尚未指派 |
| 文档/i18n | ⭐⭐⭐⭐ | 多语言覆盖加速，AGENTS.md 正在精简 |
| 维护者带宽 | ⭐⭐ | 47 个待合并 PR + 多 RFC 待决策，承压明显 |

**总评**：项目整体处于**稳定演进期**，功能冻结后的修缮阶段执行良好；建议维护者短期内聚焦于 #9035（S1 阻塞）+ #8357（v0.8.4 入选决策），并对 needs-author-action 的 PR 簇做一次集中清理。

---

*报告生成基于 2026-07-14 当日 GitHub 数据快照。*

</details>

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*