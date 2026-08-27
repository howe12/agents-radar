# OpenClaw 生态日报 2026-08-27

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-08-27 06:39 UTC

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

**日期：2026-08-27** ｜ **数据范围：过去 24 小时**

---

## 1. 今日速览

OpenClaw 今天仍然处于高频迭代状态，单日 Issues 与 PRs 更新量均达到 500 条的下限截断值，其中 Issues 关闭 157 条（关闭率 ≈ 31%）、PRs 已合并/关闭 157 条（合并/关闭率 ≈ 31%），库存与吞吐大致平衡。当日无新版本发布，活跃主线仍是 `2026.8.1 beta` 反馈汇集（[#125626](https://github.com/openclaw/openclaw/issues/125626)）与多 Agent 编排、消息投递、SQLite 持久化这几条 P0/P1 稳定性线；维护者 steipete 与 clawsweeper 今日产出多份 XL 级 refactor / schema 迁移 PR，社区普遍在关注"投递黑盒"、"session 恢复路径"两个老问题。

---

## 2. 版本发布

今日 **无新版本发布**。仓库目前仍是 `v2026.8.1-beta.3`（commit `5831b807`）作为待 GA 候选，最新主线 commit `004b06b6a02f0aa5ddcee488caa9c51d38e6d017`，并未发布新的稳定版或补丁版。可结合 #125626 的 beta 反馈判断 GA 阻塞项。

---

## 3. 项目进展

今日合并/关闭的 PR 中，触及主线能力、安全与发布管线的代表性进展如下：

| PR | 主题 | 影响面 | 链接 |
|---|---|---|---|
| [#130466](https://github.com/openclaw/openclaw/pull/130466) | **refactor(state): schema v13 整合 wide rows / plugin index / workspace attestations**（steipete，XL） | 整库共享状态 DB，删除约 113 个冗余物理列，降低数据漂移隐患 | [PR](https://github.com/openclaw/openclaw/pull/130466) |
| [#130757](https://github.com/openclaw/openclaw/pull/130757) | **fix(ui): 滚动结束时补播跳过的行测量** | Web UI 聊天滚动重叠回归 | [PR](https://github.com/openclaw/openclaw/pull/130757) |
| [#116489](https://github.com/openclaw/openclaw/pull/116489) | **feat(security): 安装策略告警显式确认**（XL） | `security.installPolicy` 可返回 `warn`，交互安装流程需精确键入目标名 | [PR](https://github.com/openclaw/openclaw/pull/116489) |
| [#120900](https://github.com/openclaw/openclaw/pull/120900) | **feat(ui): 安装策略告警复审面板**（XL，与 #116489 配套） | Control UI 上管理员可对插件安装告警显式 `acknowledge` | [PR](https://github.com/openclaw/openclaw/pull/120900) |
| [#128371](https://github.com/openclaw/openclaw/pull/128371) | **fix(release): 授权聚焦 beta 证据**（vincentkoc，XL） | 解除 `2026.8.1-beta.3` 发布阻塞（canonical publisher 准入条件） | [PR](https://github.com/openclaw/openclaw/pull/128371) |
| [#126424](https://github.com/openclaw/openclaw/pull/126424) | **fix(gateway): 对话投递保持在 agent bindings 内**（joshavant） | 多 agent 场景下避免跨 binding 投递到错误的 Discord / Slack / Telegram / 飞书等通道 | [PR](https://github.com/openclaw/openclaw/pull/126424) |
| [#130688](https://github.com/openclaw/openclaw/pull/130688) | **fix(ci): 稳定 Control UI 启动 gzip ratchet**（vincentkoc） | 解决无关 PR 因几十字节抖动误触启动体积阈值 | [PR](https://github.com/openclaw/openclaw/pull/130688) |
| [#90361](https://github.com/openclaw/openclaw/issues/90361) | **[已关闭] memory_search "index metadata is missing" 间歇性回归** | 修复合本侧 hotfix 后被官方合入 | [Issue](https://github.com/openclaw/openclaw/issues/90361) |

**判断：** 今日主线向前推进的方向集中在 **shared state DB schema 收敛、安全策略显式确认、发布管线侧产能**。安全 PR #116489 / #120900 形成端到端能力（CLI + UI），意味着项目正在建立一个受控的"插件/技能可疑安装"流程，这对接下来可能开放的扩展生态是基础设施级打底。

---

## 4. 社区热点

按昨日新增/更新评论数排序，最受关注的 Issue 是 **beta 反馈主帖**，其次是多 agent 与 Gemini 回归：

| Issue / PR | 主题 | 评论 | 👍 | 链接 |
|---|---|---|---|---|
| [#125626](https://github.com/openclaw/openclaw/issues/125626) | **OpenClaw 2026.8.1 beta feedback**（主收集帖，维护者标记） | **20** | 0 | [Issue](https://github.com/openclaw/openclaw/issues/125626) |
| [#43367](https://github.com/openclaw/openclaw/issues/43367) | 多 agent 编排不稳定：并发 add/config 互相覆盖、session-lock 失效、子任务脱离 | 14 | 1 | [Issue](https://github.com/openclaw/openclaw/issues/43367) |
| [#38327](https://github.com/openclaw/openclaw/issues/38327) | `[Bug]` 2026.3.2 + `google-vertex/gemini-3.1-pro-preview` 触发 "Cannot convert undefined or null to object" | 14 | **3** | [Issue](https://github.com/openclaw/openclaw/issues/38327) |
| [#53628](https://github.com/openclaw/openclaw/issues/53628) | `[Bug]` 安装 skill 时未处理 `${XDG_CONFIG_HOME}` | 14 | 1 | [Issue](https://github.com/openclaw/openclaw/issues/53628) |
| [#87561](https://github.com/openclaw/openclaw/issues/87561) | 跨通道定义"终态投递"语义（投递黑洞议题） | 12 | 1 | [Issue](https://github.com/openclaw/openclaw/issues/87561) |
| [#113306](https://github.com/openclaw/openclaw/issues/113306) | SQLite 快照 restore 缺乏端到端崩溃与身份保证 | 12 | 0 | [Issue](https://github.com/openclaw/openclaw/issues/113306) |
| [#40786](https://github.com/openclaw/openclaw/issues/40786) | backup CLI 增加 `.gitignore`-like 排除规则（同时提及**敏感数据**问题） | 11 | 1 | [Issue](https://github.com/openclaw/openclaw/issues/40786) |
| [#83959](https://github.com/openclaw/openclaw/issues/83959) | Codex app-server 启动重试在新 server ready 前耗尽 | 11 | 1 | [Issue](https://github.com/openclaw/openclaw/issues/83959) |
| [#48920](https://github.com/openclaw/openclaw/issues/48920) | **[P0] Live Docs 跑在 release 前面** | 10 | **4** | [Issue](https://github.com/openclaw/openclaw/issues/48920) |
| [#106555](https://github.com/openclaw/openclaw/issues/106555) | **已关闭**：重构 `chat.send` 为显式生命周期阶段 | 9 | 1 | [Issue](https://github.com/openclaw/openclaw/issues/106555) |

**诉求归纳：**
- **"投递黑洞"成为跨 P0/P1 的共识话题**——#87561、#112259、#92241、#112259 一起勾勒出"用户看到沉默，系统内部进入 sanitized fallback"的相同根因；
- **多 agent / Codex 子进程链路**由 #43367、#83959、#118018、#80498 共同构成第二热点；
- **文档与版本不同步**（#48920，4 👍 是今日最高）属于用户侧最强烈的不满意信号，已被多次截图取证。

---

## 5. Bug 与稳定性

按严重程度分级（依据 Issue 自带 `impact:*` 与 `P0/P1` 标签），今日仍处于"未修复"或"已有 fix PR 但尚未合入"状态的代表条目：

### 🔴 P0 / 影响发布
- [#48920](https://github.com/openclaw/openclaw/issues/48920) — **[回归]** Live Docs 领先于 `2026.3.13` release（`Heartbeat.IsolatedSessions`）。**4 👍**。仍 OPEN，维护者未发布修复 PR。
- [#43367](https://github.com/openclaw/openclaw/issues/43367) — 多 agent 并发 `agents add/config` 互相覆盖 + session-lock 失效 + 子任务脱离。`clawsweeper:no-new-fix-pr`。**等待产品决策**。

### 🟥 P1 / 影响数据/消息丢失、崩溃循环
- [#113306](https://github.com/openclaw/openclaw/issues/113306) — SQLite snapshot restore 不持久化新父目录、目标/sidecar 身份校验缺失、`unlink` 走部分路径。**无 fix PR**。
- [#83959](https://github.com/openclaw/openclaw/issues/83959) — Codex app-server 启动重试在新 server 就绪前耗尽。**无 fix PR**。
- [#97616](https://github.com/openclaw/openclaw/issues/97616) — Hook/工具子进程未被回收，长期累积 zombie。
- [#114154](https://github.com/openclaw/openclaw/issues/114154) — bundle-mcp 通过 policy 与 probe，但 agent session 始终不 bundle，`ToolSearch` 找不到。
- [#92241](https://github.com/openclaw/openclaw/issues/92241) — **[回归]** 回滚后 gateway 持有 stale module import path，入站消息 `ERR_MODULE_NOT_FOUND` 静默丢弃。
- [#118839](https://github.com/openclaw/openclaw/issues/118839) — **[回归]** `2026.7.2-beta.7` 上 "restart recovery claim changed before agent adoption" 再次出现。
- [#118793](https://github.com/openclaw/openclaw/issues/118793) — Claude CLI session limit 未触发 model fallback，`surface_error` 直接挂掉。
- [#126429](https://github.com/openclaw/openclaw/issues/126429) — CLI-backend 模型列表崩溃、副 id 不识别、无手动切换。
- [#110771](https://github.com/openclaw/openclaw/issues/110771) — WebChat 持久化内部记录丢失 durable turn status。
- [#112259](https://github.com/openclaw/openclaw/issues/112259) — 入站通道零 payload 派发，无重试 / dead-letter / 可见失败。

### 🟧 P1，已有 fix PR 待合并
- [#118018](https://github.com/openclaw/openclaw/issues/118018) — 子 agent 完成事件可投递到错误生命周期（`clawsweeper:linked-pr-open`）。
- [#112248](https://github.com/openclaw/openclaw/issues/112248) — `@openclaw/codex` 插件启动注册失败，全部 `/codex` slash 命令静默无效。
- [#115001](https://github.com/openclaw/openclaw/issues/115001) — **[已关闭]** Hybrid memory search FTS LIKE-fallback 硬编码 1.0 相似度（**linked-pr-open** 已合入相关修复）。
- [#114234](https://github.com/openclaw/openclaw/issues/114234) — Usage-cost refresh 锁在容器中 PID 复用导致永久冻结。
- [#118482](https://github.com/openclaw/openclaw/issues/118482) — codex-supervisor 在 unix socket 下因 permessage-deflate 协商失败。
- [#118785](https://github.com/openclaw/openclaw/issues/118785) — 主 QA proof for 23 个 container ID + 31 个 external app SDK（属追踪类）。

### 🟨 P2 / UX 或行为差异
- [#53628](https://github.com/openclaw/openclaw/issues/53628) — Docker 内 `XDG_CONFIG_HOME` 未展开。
- [#56692](https://github.com/openclaw/openclaw/issues/56692) — 群聊上下文混淆目标 agent。
- [#

---

## 横向生态对比

# 个人 AI 助手 / 自主智能体开源生态横向对比分析报告

**数据日期**：2026-08-27 ｜ **覆盖项目**：12 个 ｜ **基准参照**：OpenClaw

---

## 1. 生态全景

个人 AI 助手与自主智能体生态正处在**"快速扩张 + 稳定性阵痛"的双重周期**：IronClaw 切出 v1.4.0-rc.1、CoPaw 发布 v2.2.0-beta.1、Moltis 释出 `20260826.01` 三个版本同步推进，证明头部项目已具备 RC 级质量门禁与版本节奏；但 Hermes Agent、OpenClaw 等同档项目却因 P0/P1 回归（mcp stdio、投递黑洞、Live Docs 漂移）被迫延期发布。与此同时，ZeroClaw 通过 RFC + Tracker 双轨机制推进架构治理、PicoClaw 因 stale 机器人误杀有效 PR 暴露流程缺陷，**生态分化正在从"功能比拼"过渡到"工程纪律比拼"**。从社区信号看，"投递确定性 / 缓存可观测 / MCP 协议兼容 / 多租户架构"是横跨多项目的共性阵痛。

---

## 2. 各项目活跃度对比

| 项目 | Issues (24h) | PRs (24h) | 合并率 | 版本发布 | 健康度 | 当前阶段 |
|---|---|---|---|---|---|---|
| **OpenClaw** | ~500 | ~500 | ~31% (157/500) | ❌ v2026.8.1-beta.3 阻塞 | ⭐⭐⭐⭐ | 高频迭代 / GA 卡点 |
| **IronClaw** | 42 (新开 22 / 关闭 20) | 50 (合并 47 / 待合 3) | **94%** | ✅ **v1.4.0-rc.1** | ⭐⭐⭐⭐⭐ | RC 收口期 |
| **CoPaw** | 31 (新开 16 / 关闭 15) | 43 (合并 27 / 待合 16) | 63% | ✅ **v2.2.0-beta.1** | ⭐⭐⭐⭐⭐ | Beta 测试冲刺 |
| **ZeroClaw** | 28 (活跃 22 / 关闭 6) | 50 (合并 6 / 待合 44) | 12% | ❌ v0.8.5 截稿 8/30 | ⭐⭐⭐⭐ | RFC 治理优先 |
| **Hermes Agent** | 50 | 50 (合并 7 / 待合 43) | 14% | ❌ v0.20.5 之后延 | ⭐⭐⭐ | 稳定性阻塞 |
| **NanoBot** | 1 | 34 (合并 19 / 待合 15) | 56% | ❌ | ⭐⭐⭐⭐ | 架构收敛期 |
| **LobsterAI** | 2 | 17 (合并 16) | 94% | ⚠️ Release/2026.8.26 分支待 tag | ⭐⭐⭐⭐ | 打磨待发版 |
| **PicoClaw** | 7 | 6 (3 stale 误关 / 2 OPEN) | 50% | ❌ v0.3.1 | ⭐⭐ | 流程治理缺陷 |
| **NanoClaw** | 2 | 15+ (Agi-Asi 单点) | 低 | ❌ | ⭐⭐⭐ | 单贡献者依赖 |
| **Moltis** | 1 (关闭) | 2 (合并 2) | 100% | ✅ **20260826.01** | ⭐⭐⭐⭐ | 零积压静默期 |
| **NullClaw** | 1 | 0 | — | ❌ 距上次 3 月 | ⭐⭐ | 维护间歇 |
| **TinyClaw** | 0 | 0 | — | — | ⭐ | 静默 |
| **ZeptoClaw** | 0 | 0 | — | — | ⭐ | 静默 |

**关键观察**：
- **真正具备发版能力的项目**：IronClaw、CoPaw、Moltis 三家；
- **合并率反差**：IronClaw/LobsterAI/NanoBot 高合并率 vs ZeroClaw/Hermes Agent 高积压率，反映"评审闸口"差异；
- **静默/低活跃项目**（NullClaw/TinyClaw/ZeptoClaw）合计占样本 25%，需要关注长期可持续性。

---

## 3. OpenClaw 在生态中的定位

### 优势
- **社区体量最大**：单日 500+ Issues/PRs，是 Hermes Agent（50）、CoPaw（43）、ZeroClaw（50）的 10 倍量级；
- **覆盖能力最广**：涵盖多 Agent 编排、SQLite 持久化、跨通道投递、安全安装策略、shared state DB schema v13；
- **安全意识领先**：#116489 + #120900（installPolicy `warn` + UI acknowledge）形成端到端受控安装流程，是扩展生态开放的"基础设施级打底"。

### 与同类对比
| 维度 | OpenClaw | IronClaw | CoPaw | NanoBot | ZeroClaw |
|---|---|---|---|---|---|
| 单日吞吐 | 500+ | 50 | 43 | 34 | 50 |
| 合并节奏 | 高产出 / 中合并 | 高合并 | 中合并 | 高合并 | 低合并 |
| 安全基建 | 显式确认 + UI 复审 | TOCTOU 修复 | NSIS 安装器 | 工具沙箱 | 鉴权门 + 时序比较 |
| 持久化 | SQLite schema v13 | 内存 envelope + durable inbox | 上下文压缩 | per-run hook | 会话契约 RFC |

**判断**——OpenClaw 在**功能广度与社区体量**上仍是事实基准（reference implementation），但在**版本节奏纪律**（vs IronClaw）和**测试基建**（vs CoPaw +5pp 覆盖率冲刺）上面临追赶压力。其"投递黑洞"与"多 agent session-lock 失效"两个老问题（#87561 / #43367）是当前 GA 的主要阻塞。

---

## 4. 共同关注的技术方向

### 🔴 "投递确定性"——横跨多项目的共性阵痛
| 项目 | 对应 Issue | 现象 |
|---|---|---|
| **OpenClaw** | #87561、#112259、#92241 | 跨通道"终态投递"语义缺失、stale module import 丢消息 |
| **ZeroClaw** | #10186 | 终端兜底绕过 live delivery，`run_tool_call_loop` 重试耗尽 |
| **CoPaw** | #7324 | 定时任务执行成功但推送丢失 1/3 消息 |
| **IronClaw** | #6096（已修） | 并发入站消息持久化乱序 |

**共识诉求**：从"尽力投递"升级为"可观测 + 可重试 + dead-letter"的三段式保证。

### 🟠 "MCP 协议稳定性"
- **Hermes Agent** — MCP stdio 全员崩溃（#94335 / #94637 / #95165 / #95150）
- **OpenClaw** — `bundle-mcp` 通过 policy 但 agent session 不 bundle（#114154）
- **ZeroClaw** — MCP envelope 重复载荷（#10397 已修）
- **Moltis** — Fastmail MCP OAuth scope 注册（#1244 已修）

**共识诉求**：MCP 作为扩展底座，需统一 stdio 活性检测 / OAuth scope 注册 / 工具注册发现三件套。

### 🟡 "缓存与性能可观测"
- **OpenClaw** — hybrid memory FTS 硬编码 1.0 相似度（#115001）
- **IronClaw** — OpenAI-family `prompt_cache_key` 丢失导致 82%→29% cache-hit 崩塌（#7921，**今日 P0**）；工具载荷未投影化（#7891）
- **NanoBot** — 统一 provider usage 后端（#5481）

**共识诉求**：把 prefix-cache、tool-churn、token 计数从"估算"推向"实测可观测"。

### 🟢 "安全收紧"
- **IronClaw** — TOCTOU 4 处逃逸（#6817 已修）
- **ZeroClaw** — webhook 鉴权门（#9587）、Lark `constant_time_eq`（#9110）、SECURITY.md 真实化（#10235）
- **OpenClaw** — installPolicy `warn` + UI acknowledge（#116489 + #120900）
- **NanoClaw** — 容器预装 `jq` 替代 `node -e`（#574）

**共识诉求**：从"功能便利"过渡到"边界明确 + 最小特权"。

### 🔵 "多租户 / 团队管理"
- **CoPaw** — QwenPaw Hub 多租户版（#7318 + 关联 #6335/#5780/#4702）— **唯一官方主动响应**；
- 其他项目尚未进入该议题。

---

## 5. 差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 关键技术架构差异 |
|---|---|---|---|
| **OpenClaw** | 全场景多 Agent 编排 + 跨通道 | 全能型个人/团队用户 | Shared state DB schema v13、agent bindings、SQLite 持久化 |
| **IronClaw** | 持久化沙箱 + MCP 框架 + 生产 memory | 云托管场景 / 企业 | 沙箱 egress proxy、TLS termination seam、untrusted-memory envelope |
| **CoPaw** | v2.2 测试加固 + QwenPaw Hub 多租户 | 中国 IM 生态 / 团队 | NSIS 安装器、PyPI runtime path、GAAP 数据栈（Neo4j+PostgreSQL） |
| **ZeroClaw** | RFC 治理 + 安全收口 + v0.8.5/v0.9.0 双轨 | 架构严谨型开发者 | RFC + Tracker 双轨、ZeroRelay mTLS、Bounded delegate 沙箱 |
| **NanoBot** | TUI/WebUI 打磨 + 原生推理栈 | 终端重度用户 | Provider-native 推理生命周期、per-run hook、统一 usage 后端 |
| **Hermes Agent** | 多平台 Desktop + Realtime Voice 探索 | 跨平台桌面用户 | Hermes Desktop 浏览器化（#93508）、RealtimeVoiceProvider ABC RFC |
| **LobsterAI** | 资料库管理 + 商业化前置 | 中文 C 端 / 教育 | 分享/部署埋点链、daily credit 入口、Provider 内置化 |
| **NanoClaw** | 低层基础设施健壮性 | 容器化 / Linux 自托管 | Signal-cli / launchd bootstrap / Codex MCP policy |
| **Moltis** | Provider 偏好 + MCP OAuth 兼容 | 邮件 / OAuth 重度用户 | RFC 7591 动态客户端注册、protected-resource scope 优先 |
| **PicoClaw** | 边缘部署 / RKLLM | 嵌入式 / IoT | 仍在 v0.3.1，多通道适配器扩展中 |

**架构路线分野**：
- **"广度优先"路线**（OpenClaw / Hermes Agent / IronClaw）：堆功能、铺渠道、修回归；
- **"深度优先"路线**（ZeroClaw / NanoBot）：RFC + Tracker + 架构定型；
- **"生态优先"路线**（CoPaw / LobsterAI）：商业化 + 多租户 + 国际化。

---

## 6. 社区热度与成熟度分层

### 🟢 第一梯队：高频迭代 + RC/Beta 节奏
- **IronClaw**（94% 合并率，v1.4.0-rc.1）+ **CoPaw**（v2.2.0-beta.1，测试覆盖率从 58% → 66%）
- **特征**：合并闸口严格 + 测试基建扎实 + 有明确里程碑；
- **风险**：RC 阶段可能藏回归，需观察 1-2 周窗口。

### 🟡 第二梯队：质量巩固 / 架构收敛
- **OpenClaw**（GA 卡点）、**NanoBot**（质量冲刺）、**ZeroClaw**（RFC 治理）、**LobsterAI**（打磨待 tag）、**Moltis**（零积压）
- **特征**：高 PR 流入 + 低/中合并率 + 关注长期债务；
- **共性瓶颈**：测试基建或评审 capacity 跟不上产出节奏。

### 🟠 第三梯队：稳定性阻塞 / 单点风险
- **Hermes Agent**（MCP stdio 全员崩溃阻塞下一版）
- **NanoClaw**（单一贡献者 Agi-Asi 集中提交，15+ PR 待 review）
- **PicoClaw**（stale 机器人误杀 3 个有效修复 PR）
- **特征**：流程缺陷 + 维护者人手不足 + 修复链路断裂。

### 🔴 第四梯队：维护间歇 / 静默
- **NullClaw**（3 个月未发版）、**TinyClaw**、**ZeptoClaw**
- **建议**：项目方需主动同步路线图，否则社区信心流失风险高。

---

## 7. 值得关注的趋势信号

### 📈 趋势一：从"功能扩张"到"工程纪律"
- **ZeroClaw RFC + Tracker 双轨** vs **IronClaw 94% 合并率** vs **PicoClaw stale 误杀** 形成鲜明对照；
- **对开发者启示**：建立 review SLA + 区分 stale 策略 + 引入 RFC 治理流程，是中型项目可持续的关键。

### 📈 趋势二："投递确定性"成为新一代质量分水岭
- 4+ 项目同时暴露同类问题（OpenClaw #87561、ZeroClaw #10186、CoPaw #7324、IronClaw #6096）；
- **对开发者启示**：在 Agent 系统中，**"沉默失败"比"明确失败"更具破坏性**——投入 dead-letter / retry / 进度可观测的基础设施回报率最高。

### 📈 趋势三：缓存可观测性从"加分项"变成"必修课"
- IronClaw #7921（OpenAI cache-hit 82%→29% 崩塌无告警）+ ZeroClaw #9453（本地 Provider token 计数空白）+ NanoBot #5481（统一 usage 后端）三方呼应；
- **对开发者启示**：把 prefix-cache 命中率、tool-churn、per-call token usage 纳入默认 observability 栈。

### 📈 趋势四：MCP 协议栈进入"标准化阵痛期"
- Hermes Agent stdio 全员崩溃、Moltis Fastmail OAuth、ZeroClaw envelope 重复载荷、OpenClaw bundle-mcp 路由失败；
- **对开发者启示**：MCP 作为扩展底座的稳定性短板正在暴露，**自研 MCP server 需要额外投入 1-2 周做 stdio 活性检测、OAuth scope、envelope 净化**。

### 📈 趋势五：安全从"修补漏洞"转向"基础设施级打底"
- IronClaw TOCTOU + ZeroClaw 鉴权门 + OpenClaw installPolicy 确认 + NanoClaw `jq` 替代 `node -e`；
- **对开发者启示**：当生态向"插件化"或"技能市场"开放时，**安装/执行的确认机制是不可绕过的基础设施**。

### 📈 趋势六：多租户 / 团队管理进入头部项目视野
- **CoPaw QwenPaw Hub（#7318）** 是当前唯一官方主动推动的多租户方案；
- **对开发者启示**：当 C 端

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目日报
**日期**：2026-08-27
**数据来源**：[HKUDS/nanobot](https://github.com/HKUDS/nanobot)

---

## 1. 今日速览

NanoBot 项目在过去 24 小时内展现出**高度活跃的工程化推进态势**，PR 更新量达到 34 条（合并/关闭 19 条，待合并 15 条），但 Issues 仅有 1 条更新且已被处理。这种"重开发、轻用户反馈"的结构表明项目当前处于**内部架构重构与功能收敛的关键阶段**——大量 PR 集中在 Agent 循环解耦、TUI/WebUI 体验优化、Bug 修复上，且绝大多数 PR 由核心维护者 `chengyongru` 主导提交，说明项目正在进行一次系统性质量提升，但尚未产出新的 Release 版本。

---

## 2. 版本发布

⚠️ **今日无新版本发布**。尽管有大量 PR 被合并，尚未触发新的 Release 标签。当前主分支正在累积"原生推理生命周期"、"统一用量后端"、"TUI 技能自动补全"等较大变更，建议用户继续使用现有稳定版本，等待下一次集中发版。

---

## 3. 项目进展（今日合并/关闭的重要 PR）

今日合并/关闭的 PR 中，多个推进了项目的核心架构与稳定性：

### 🏗️ 架构重构（Agent 核心）
- **[#5559 refactor(agent): decouple loop from message tool state](https://github.com/HKUDS/nanobot/pull/5559)** — 将 Agent 循环与 MessageTool 状态解耦，通过结构化工具结果回传成功交付，由 AgentLoop 在运行边界统一应用最终响应策略。
- **[#5556 fix(agent): complete native reasoning lifecycle](https://github.com/HKUDS/nanobot/pull/5556)** — 补全 provider-native 推理生命周期，确保推理段在回答、本地工具执行、流恢复等场景正确闭合。
- **[#5555 refactor(agent): remove duplicate progress streaming path](https://github.com/HKUDS/nanobot/pull/5555)** — 移除冗余的 progress 流路径，统一到 per-run hook 通道。
- **[#5546 refactor(agent): make run usage explicit](https://github.com/HKUDS/nanobot/pull/5546)** — 移除 `_last_usage` 进程级 side channel，改为 per-run hook 捕获。
- **[#5558 refactor(agent): load MyTool through tool loader](https://github.com/HKUDS/nanobot/pull/5558)** — 让 MyTool 通过标准 Tool.create() 注册流程加载。

### 🎨 TUI/WebUI 体验提升
- **[#5557 perf(tui): skip redundant dependency installs](https://github.com/HKUDS/nanobot/pull/5557)** — 通过 SHA-256 指纹缓存 OpenTUI 依赖安装，避免每次刷新重复执行 `bun install`。
- **[#5534 feat(tui): autocomplete skill references](https://github.com/HKUDS/nanobot/pull/5534)** — 输入 `$skill-name` 时显示过滤选择器，支持方向键、Tab/Enter 插入、Escape 取消。
- **[#5538 refactor(tui): clarify active composer actions](https://github.com/HKUDS/nanobot/pull/5538)** — 明确 `Enter` 立即发送 vs `Tab` 当前响应结束后发送，placeholder 改为 `Enter now · Tab next`。
- **[#5543 fix(tui): surface chat connection failures](https://github.com/HKUDS/nanobot/pull/5543)** — 区分"初始就绪"、"恢复中"、"持续不可用"、"不可恢复故障"四种状态。
- **[#5491 fix(webui): keep answer text outside reasoning shell](https://github.com/HKUDS/nanobot/pull/5491)** — 保留跨 answer→tool→answer 的所有回答片段，修复 WebUI 文本丢失。
- **[#5548 refactor(webui): isolate websocket application orchestration](https://github.com/HKUDS/nanobot/pull/5548)** — WebSocket 重连、消息投影逻辑下沉到专用 Projector。

### 📊 用量与可观测性
- **[#5481 feat(usage): add unified provider usage backend](https://github.com/HKUDS/nanobot/pull/5481)** — 为 gateway 管理的 WebUI/TUI 会话每次重试记录一条 usage 行，作为原生栈 #5482 的一部分。

### 🔧 Bug 修复
- **[#5533 fix(tools): keep find_files scans responsive](https://github.com/HKUDS/nanobot/pull/5533)** — find_files 移到 worker 线程，使用预算化的 os.scandir 遍历，支持取消传播。
- **[#5544 fix(gateway): recover degraded WebSocket listener](https://github.com/HKUDS/nanobot/pull/5544)** — WebSocket 监听器异常时本地监督 + 指数退避重绑。
- **[#5519 fix(webui): compact single-pane chat header](https://github.com/HKUDS/nanobot/pull/5519)** — 单面板聊天头紧凑化，新增模型设置入口。

**整体评估**：今日合并内容明显**偏重质量与稳定性**，而非新功能，标志项目进入"打磨收敛期"。多个 Agent 核心重构 PR 形成系列性变更（#5546/#5555/#5556/#5558/#5559），为后续原生栈集成铺路。

---

## 4. 社区热点

今日 Issues/PRs 的评论与点赞数据较少（多数为 0），反映出**用户互动主要集中在代码贡献层面而非讨论层**。以下几个 PR 值得社区关注：

- **[#5560 feat(cli): make nanobot the default agent command](https://github.com/HKUDS/nanobot/pull/5560)**（OPEN）— 让裸 `nanobot` 直接启动原生终端代理，与 `nanobot agent` 等价；接受根级选项。该变更将显著简化 CLI 用户体验。
- **[#5234 feat(agent): integrate mst-python as a metasearch provider](https://github.com/HKUDS/nanobot/pull/5234)**（OPEN，p1）— 集成 MST 多搜索引擎聚合（DDG/Google/Brave/Bing），通过 RRF 融合排名，提供比单一搜索引擎更丰富的结果。
- **[#5364 feat(webui): add temporary side conversations](https://github.com/HKUDS/nanobot/pull/5364)**（OPEN，p2）— WebUI 新增 `/side` 临时旁路对话，支持多 tab 切换、独立草稿/消息/流状态。

**诉求分析**：用户对**更智能的默认体验**（CLI 默认行为）、**更强大的信息检索能力**（多源搜索）、**更灵活的多任务对话界面**（侧边对话）有明确期待。

---

## 5. Bug 与稳定性

### 🔴 P1 严重（已修复或修复中）
| 编号 | 标题 | 状态 | Fix PR |
|------|------|------|--------|
| [#5553](https://github.com/HKUDS/nanobot/pull/5553) | fix(agent): hold goal continuation after a failed completion attempt | OPEN (conflict) | 自带修复 |
| [#5504](https://github.com/HKUDS/nanobot/pull/5504) | fix(ui): surface model retry status (NAN-34) | OPEN (conflict) | 自带修复 |
| [#5544](https://github.com/HKUDS/nanobot/pull/5544) | fix(gateway): recover degraded WebSocket listener | ✅ CLOSED | #5544 |
| [#5533](https://github.com/HKUDS/nanobot/pull/5533) | fix(tools): keep find_files scans responsive | ✅ CLOSED | #5533 |

### 🟡 P2 中等（已修复）
| 编号 | 标题 | 状态 | Fix PR |
|------|------|------|--------|
| [#5550 Issue](https://github.com/HKUDS/nanobot/issues/5550) | read_session tool returns empty history when models use wildcard queries | ✅ CLOSED | — |
| [#5556](https://github.com/HKUDS/nanobot/pull/5556) | fix(agent): complete native reasoning lifecycle | ✅ CLOSED | #5556 |
| [#5543](https://github.com/HKUDS/nanobot/pull/5543) | fix(tui): surface chat connection failures | ✅ CLOSED | #5543 |
| [#5491](https://github.com/HKUDS/nanobot/pull/5491) | fix(webui): keep answer text outside reasoning shell | ✅ CLOSED | #5491 |

**特别说明**：`#5550` Issue 报告了当用户引用其他会话（`@session`）时，模型使用通配符查询（`*`、`.*`、空白）调用 `read_session` 会返回空历史的 bug，该 Issue 已被关闭。`#5553` 与 `#5504` 标有 `conflict` 标记，提示可能与最新主分支存在冲突，需要维护者优先 rebase 处理。

---

## 6. 功能请求与路线图信号

基于今日活跃 PR 分析，**以下功能可能进入下一版本**：

### 高确定性（PR 已合并）
- ✅ TUI 技能自动补全（`$skill-name` 选择器）
- ✅ TUI 依赖安装指纹缓存
- ✅ find_files 性能优化
- ✅ WebSocket 监听器自动恢复
- ✅ 统一 provider 用量后端（#5481，#5482 原生栈基础）

### 中确定性（PR OPEN 待合并）
- 🔲 CLI 默认 `nanobot` 启动原生终端代理（[#5560](https://github.com/HKUDS/nanobot/pull/5560)）
- 🔲 模型重试状态在 UI 上展示倒计时与进度（[#5504](https://github.com/HKUDS/nanobot/pull/5504)，NAN-34）
- 🔲 WebUI 临时侧边对话 `/side`（[#5364](https://github.com/HKUDS/nanobot/pull/5364)）
- 🔲 Meta-Search 多引擎聚合（[#5234](https://github.com/HKUDS/nanobot/pull/5234)，p1）

### 路线图信号
- **`#5482` 原生栈系列**：今日合并的 `#5481` 明确标注 "Part of native stack #5482"，暗示项目正在进行一轮**原生架构集成**（含用量契约、provider 推理、本地运行时）。
- **CLI 一等公民化**：`#5560` 表明 CLI 命令表面即将统一收敛，减少用户认知负担。

---

## 7. 用户反馈摘要

由于今日 Issues 评论数均为 0，无法提炼直接的用户文本反馈。但从 PR 描述与 Issue 摘要可推断以下**用户痛点场景**：

### 🔍 检索与历史回溯
> 用户引用其他会话（`@session`）时，希望模型能自然地"检索全部消息"，但 `read_session` 对通配符的处理导致返回空结果（[#5550](https://github.com/HKUDS/nanobot/issues/5550)）。

### 🎨 交互体验
> 用户在 TUI 输入长 prompt 时希望有更明确的"何时发送"反馈（Enter vs Tab 的语义混淆），并期望 `$skill` 引用能像 IDE 一样自动补全（[#5534](https://github.com/HKUDS/nanobot/pull/5534)、[#5538](https://github.com/HKUDS/nanobot/pull/5538)）。

### ⚡ 性能与响应
> 用户执行大目录的 `find_files` 时遭遇 UI 卡顿（[#5533](https://github.com/HKUDS/nanobot/pull/5533)）；TUI 启动时反复 `bun install` 拖慢冷启动（[#5557](https://github.com/HKUDS/nanobot/pull/5557)）。

### 🛡️ 稳定性
> WebSocket 监听器异常后用户看不到任何反馈，被"静默挂起"（[#5544](https://github.com/HKUDS/nanobot/pull/5544)）；模型重试时 UI 无可见状态（[#5504](https://github.com/HKUDS/nanobot/pull/5504)）。

### 📊 资源透明度
> 用户希望了解每次 provider 调用背后的用量（[#5481](https://github.com/HKUDS/nanobot/pull/5481)）。

---

## 8. 待处理积压

以下 PR 标记为 **OPEN 且存在 conflict**，需要维护者优先处理：

| PR | 标题 | 优先级 | 问题 |
|----|------|--------|------|
| [#5553](https://github.com/HKUDS/nanobot/pull/5553) | fix(agent): hold goal continuation after a failed completion attempt | P1 | conflict，需 rebase |
| [#5504](https://github.com/HKUDS/nanobot/pull/5504) | fix(ui): surface model retry status (NAN-34) | P2 | conflict，需 rebase |
| [#5364](https://github.com/HKUDS/nanobot/pull/5364) | feat(webui): add temporary side conversations | P2 | conflict，需 rebase |
| [#5234](https://github.com/HKUDS/nanobot/pull/5234) | feat(agent): integrate mst-python as a metasearch provider | P1 | 长期开放（8-03 至今已 24 天），需要维护者 review |

### ⚠️ 维护者建议
1. **优先 rebase 三个 conflict PR**：避免冲突累积影响发布窗口。
2. **`#5234` 长期积压**：作为 P1 级别 feature 且已开放超过 3 周，建议尽快给与明确反馈（合并/拒绝/调整）。
3. **集中发版准备**：今日合并的 #5481、#5556、#5559 等核心变更建议合并入下一个 release candidate 进行集成验证。

---

## 📌 项目健康度总评

| 维度 | 评分 | 说明 |
|------|------|------|
| 开发活跃度 | ⭐⭐⭐⭐⭐ | 34 个 PR 更新，19 个合并，节奏强劲 |
| 用户参与度 | ⭐⭐ | Issues 评论与点赞均较少，用户反馈通道偏冷 |
| 代码质量 | ⭐⭐⭐⭐ | 大量 refactor + test，架构持续收敛 |
| 发布节奏 | ⭐⭐⭐ | 高变更但无新 Release，存在"合并积压未发版"风险 |
| 文档同步 | ⭐⭐⭐ | 多个 PR 标注 `documentation`，但未见专门文档站更新 |

**结论**：NanoBot 当前处于**"质量冲刺 + 架构定型"阶段**，技术债务清理与新功能并行推进；建议下一阶段重心转向 **集中发版** 与 **用户反馈通道激活**，避免开发节奏与用户认知脱节。

---

*报告生成时间：2026-08-27 | 数据窗口：过去 24 小时*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目日报
**日期：2026-08-27**

---

## 1. 今日速览

Hermes Agent 仓库过去 24 小时维持高强度开发节奏，Issues 与 PRs 各更新 50 条，但**没有任何新版本发布**——结合近期大量 P1 级回归 Bug，可以判断 v0.20.5 之后的下一版本正在被稳定性问题阻塞。社区最关注的焦点高度集中：**MCP stdio 传输层全员崩溃**（`#94335` 及其至少 3 个重复 Issue）、**Skills 索引陈旧化**（`#66616` 累计 104 条评论）和 **macOS arm64 网关 SIGSEGV**（`#94248`）构成了今日"三大火点"。整体来看，项目处于"功能多线并进、稳定性集中暴露"的典型 0.x 中后期阶段。

---

## 2. 版本发布

**今日无新版本发布。** 鉴于 v0.20.5 之后出现了多个高优先级回归（详见第 5 节），下一版本（推测为 v0.20.6 或 v0.21.0）很可能需要集中修复 MCP stdio、Desktop 端 Sessions/Profiles、Telegram 网关连接这三大问题簇后再行发布。

---

## 3. 项目进展

过去 24 小时共 7 条 PR 合并/关闭，相对 43 条待合并 PR 比例较低，反映出维护者正在谨慎处理质量关卡。今日值得记录的有：

- **[#96133](https://github.com/NousResearch/hermes-agent/pull/96133)** `fix(cli): normalize KeyPress.data for decoded modified keys` —— 修复了 Ghostty 终端按 K 输出原始 ANSI 转义序列的残余问题，是 `#87390` 的收尾。
- **[#96127](https://github.com/NousResearch/hermes-agent/pull/96127)** `fix(compression): suppress duplicate compaction-complete notices` —— 上下文压缩完成后不再向聊天平台重复推送"✓ Context compaction complete"通知，避免污染用户会话。
- **[#95663](https://github.com/NousResearch/hermes-agent/pull/95663)** `fix(agent): turn liveness watchdog surfaces silent turn stalls` —— P1 级修复，对应 `#95548`：增加回合活跃性看门狗，捕获"模型返回 tool_calls 与工具执行之间"的静默卡死。
- **[#96130](https://github.com/NousResearch/hermes-agent/pull/96130)** `fix(desktop): gate warm transcript paint on persisted provenance` —— 阻止未经验证的跨会话历史消息渲染，是 Desktop Sessions 稳定性补丁族的新增。
- **[#96131](https://github.com/NousResearch/hermes-agent/pull/96131)** `feat(homeassistant): make service-call timeouts configurable` —— Home Assistant 工具链的可用性增强（关闭了 `#96121`）。
- **已关闭重复项**：`#96123`（KeyPress.data 修复重复）、`#96122`（标题拒绝截断 JSON 围栏，重复）、`#79340`（hooks 暴露 chat_id 信息，CLOSED）。

值得欣慰的是，从今日关闭 Issue 看：`#94724` 显示 **"27 PRs merged across the campaign, 2 same-day regressions fixed"** —— Desktop 多网关连接战役已正式结项（campaign complete）。这是一个大型重构/稳定的正面信号。

---

## 4. 社区热点

**评论活跃度 Top 5：**

1. **[#66616](https://github.com/NousResearch/hermes-agent/issues/66616)** `Skills index is stale or degraded` —— **104 条评论**（项目今日最热）。Skills Hub 依赖的 `/docs/api/skills-index.json` 已陈旧 29.8 小时（阈值 26h），由 `.github/workflows/skills-index.yml` 的 6/18 UTC cron 触发重建失败。这是基础设施级别的"沉默腐烂"，直接影响所有访问文档站点的用户。
2. **[#94335](https://github.com/NousResearch/hermes-agent/issues/94335)** MCP stdio 子进程活性检测反向 —— 13 条评论，P1。
3. **[#51327](https://github.com/NousResearch/hermes-agent/issues/51327)** Hermes Desktop 在 Linux 下 `.desktop` 启动器静默失败 —— 12 条评论，P1，影响新用户体验。
4. **[#94637](https://github.com/NousResearch/hermes-agent/issues/94637)** MCP stdio 在 `#85125` 后全员 fast-fail —— 10 条评论，Windows 11 环境。
5. **[#94724](https://github.com/NousResearch/hermes-agent/issues/94724)** Desktop 多网关持久连接战役关闭 —— 8 条评论、1 个 👍（今日唯一点赞）。

**社区诉求分析：**

- **基础设施腐烂**（`#66616`）已是长期问题，但 104 条评论仍停留在自动巡检，缺乏人工修复 cron 的工作流，体现维护者在 CI/运维层面的资源紧张。
- **MCP stdio 灾难级回归**通过至少 4 条独立 Issue（`#94335` `#94637` `#95165` `#95150`）得到交叉验证，表明这并非个案而是系统性故障。
- **`#77111` RealtimeVoiceProvider ABC RFC**（5 评论）正在征集设计意见，4 个 duplex-voice PR 需要先抽象接口——这是社区主导架构决策的良性迹象。

---

## 5. Bug 与稳定性

### 🔴 P1 严重（已识别但未完全修复）

| Issue | 描述 | 平台/组件 | 已有 fix PR？ |
|-------|------|-----------|--------------|
| [#94335](https://github.com/NousResearch/hermes-agent/issues/94335) | `_stdio_children_dead()` 反向活性检查 | MCP stdio（oneshot `-z`） | ❌ |
| [#94637](https://github.com/NousResearch/hermes-agent/issues/94637) | MCP stdio 全部 fast-fail "subprocess has exited" | Windows 11, commit `786f37071` | ❌ |
| [#95165](https://github.com/NousResearch/hermes-agent/issues/95165) | 同 #94335 重复 | MCP stdio | ❌ |
| [#95150](https://github.com/NousResearch/hermes-agent/issues/95150) | 同 #94335 重复 | MCP stdio | ❌ |
| [#51327](https://github.com/NousResearch/hermes-agent/issues/51327) | Desktop Linux `.desktop` 启动器静默失败 | Electron chrome-sandbox setuid | ❌ |
| [#94248](https://github.com/NousResearch/hermes-agent/issues/94248) | macOS arm64 网关 SIGSEGV（17-72ms 后） | Gateway + delegate + Codex SSL | ❌ |
| [#95816](https://github.com/NousResearch/hermes-agent/issues/95816) | Telegram gateway 无限挂起在 "Connecting to Telegram" | v0.20.5 | ❌ |
| [#95294](https://github.com/NousResearch/hermes-agent/issues/95294) | `hermes update` 中断后永不复位 | CLI/gateway | ❌ |
| [#95663](https://github.com/NousResearch/hermes-agent/pull/95663) | 回合静默卡死 | Agent | ✅ PR 已开 |

### 🟡 P2 中等

- **[#96063](https://github.com/NousResearch/hermes-agent/issues/96063)** Desktop 模型 pill 隐藏 provider，导致错误请求路由。
- **[#96107](https://github.com/NousResearch/hermes-agent/issues/96107)** MCP OAuth 与 monday.com 授权服务器的 `iss` 不匹配。
- **[#96069](https://github.com/NousResearch/hermes-agent/issues/96069)** Slack Socket Mode 死锁在 "Session is closed" 重连循环。
- **[#96062](https://github.com/NousResearch/hermes-agent/issues/96062)** Desktop 点击 Bot Chat 偶发跳转到 Sessions 列表。
- **[#96129](https://github.com/NousResearch/hermes-agent/issues/96129)** Desktop SSH 远程 bootstrap 20s 超时后通道挂起。
- **[#94724](https://github.com/NousResearch/hermes-agent/issues/94724)** Desktop 多网关连接跟踪——**已结项关闭（27 PRs merged）**。
- **[#96066](https://github.com/NousResearch/hermes-agent/issues/96066)** opencode-go + deepseek-v4-flash-vision-exp 错误路由到 api.anthropic.com，已有 **[#96116](https://github.com/NousResearch/hermes-agent/pull/96116)** 进行修复。

### 🟢 已关闭（今日修复完成）

`#65351`（Desktop 远程模式历史会话列表）、`#95293`（模型切换静默丢弃）、`#92789`（zh-CN 右键菜单未本地化）、`#91223`（双击 Sessions 折叠）、`#89882`（Bot 群聊无法复制）、`#95327`（Windows 工具调用中途被杀）、`#95559`（Desktop 后端 executor 路由挂起）、`#92703`（Telegram/Kanban 通知污染会话）—— 这些 Issue 今日集中关闭，反映 v0.20.5 → 即将发布的补丁版本在 Desktop 与 Windows 兼容性上有明确清扫动作。

**健康度提示：** MCP stdio 全员崩溃是 **v0.20.5 最严重的回归**，必须在下一版本前修复，否则所有依赖 stdio MCP 的用户（ADO、chrome-devtools、GBrain 等）都无法工作。

---

## 6. 功能请求与路线图信号

今日明确的 feature 请求与设计信号：

- **[#77111](https://github.com/NousResearch/hermes-agent/issues/77111)** `[RFC] RealtimeVoiceProvider ABC` —— 提议为实时语音双工功能定义 ABC 接口。`AGENTS.md` 中"3+ 相同类别 PR 应先抽象接口"的 Footprint Ladder 规则已被触发。该 RFC 一旦通过，预计会重塑 TTS 插件架构。
- **[#96014](https://github.com/NousResearch/hermes-agent/issues/96014)** `delegate_task` 增加每 spawn 的 model/provider 参数 —— 解决 orchestrator agent 无法根据任务类型选择 worker tier 的痛点。已有 cron 任务覆盖参数的先例，实现成本低，**纳入下版本的概率较高**。
- **[#93508](https://github.com/NousResearch/hermes-agent/pull/93508)** `feat(webapp): serve Desktop renderer in browsers` —— 重大功能：让 Hermes Desktop 的渲染层可在浏览器中运行（通过 `window.hermesDesktop` 浏览器 shim）。这意味着用户可以从任意浏览器远程访问完整的 Desktop 工作区，可能改变产品形态（从原生应用到"瘦客户端 + 远程后端"）。
- **[#92729](https://github.com/NousResearch/hermes-agent/pull/92729)** `feat(gateway): expose platform-resolved callable tool catalog` —— 新增 `GET /v1/tools` 端点，暴露按平台解析的可调用工具清单。运维可观测性增强。
- **[#95278](https://github.com/NousResearch/hermes-agent/pull/95278)** `feat(telemetry): opt-in shared-metrics exporter` —— 遥测 Phase 2，向 `telemetry.nousresearch.com` 上报匿名指标，**opt-in 设计**值得肯定，但需关注用户对默认行为的反应。
- **[#96131](https://github.com/NousResearch/hermes-agent/pull/96131)** Home Assistant 服务调用超时可配置 —— 直接对应 `#96121`，**合并路径清晰**。
- **[#80758](https://github.com/NousResearch/hermes-agent/pull/80758)** `hashline-guard` 内容寻址补丁锚点 —— 在已有 `pre_tool_call` 基础上扩展为完整 patch anchor。

**路线图判断：** 0.20.6 应当是 **稳定补丁版**（修 MCP stdio + Desktop Sessions + Telegram），0.21.x 可能承载 `RealtimeVoiceProvider ABC` 和 Desktop Web 化这两条重大架构线路。

---

## 7. 用户反馈摘要

从 Issue 评论与摘要中提炼的真实用户场景与痛点：

**🔴 痛点集中区：MCP stdio 工具链全员失能**

> "all stdio MCP tool calls fail with 'subprocess has exited'" —— Windows 11 用户 `@ratanparai`  
> 影响 ADO、GBrain、chrome-devtools 等所有 stdio 传输的 MCP 服务器。这是开发者工作流的根本性破坏。

**🔴 macOS 网关稳定性**

> "12 Apple native crash reports between 2026-08-19 and 2026-08-24. Five occurred on 2026-08-24." —— 用户 `@jacques-commits`  
> SIGSEGV 出现在委托任务 600s deadline 时刻，伴 Codex SSL 读取。长跑用户场景受重创。

**🟡 Desktop 端"看似可用、实则脆弱"**

> "点击 Bot Chat 偶发跳转到 Sessions 列表" —— `@johnhuusa`  
> "窗口强制重载，模型选择器永远 spinning" —— `@phattytuna`  
> "Desktop 模型 pill 显示模型名但隐藏 provider，发送请求用错 provider" —— `@HexasNexus`  
> 多用户报告 Desktop 状态机存在静默 desync，跨会话行为不一致。

**🟢 体验改善信号**

> "On the Windows side... in-flight turn killed mid-tool-call by backend respawn / ws_orphan_reap — bare 'Operation interrupted.' placeholder" —— `@khoalx18` 报告虽然体验不佳，但配合今日 `#95663` PR 的修复，Windows 用户的耐心正在得到回应。

**🟢 多语言/i18n 关注**

> "Bot Mode 插件的右键上下文菜单在 display.language: zh-CN 设置下仍然完全显示英文" —— `@seraphoooo`（已关闭）  
> 体现中文用户群体的存在感，i18n 工作流仍有改进空间。

**🤝 战役结项后的用户信心**

`#94724` 描述的 27 PR 大型战役顺利结项，是社区可见的"维护者投入度"信号，配合 tek 的 high-trust 工作风格，有助于保留核心贡献者。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目日报 · 2026-08-27

## 今日速览
PicoClaw 在过去 24 小时呈现中等活跃度：7 个 Issues 更新、6 个 PR 流转、**无新版本发布**。当前主线版本仍停留在 v0.3.1。值得关注的是，多个长期未动的有效修复 PR 在被标记 `[stale]` 后自动关闭，**很可能并未真正合并到主干**，社区实际获得的有效修复有限。整体看，社区需求集中在多频道适配器（IRC/Slack/Line/Telegram）质量提升、Web UI 性能、以及 RKLLM 等边缘部署模型的稳定性。

## 版本发布
无新版本发布。最近的稳定版本仍为 [v0.3.1](#)，用户在 #3281、#3338、#3346 中均报告基于此版本。

## 项目进展
过去 24 小时有 4 个 PR 被关闭，但其中 **3 个被标记 `[stale]`**，疑似由机器人按 stale 策略自动关闭，**实际可能并未合并**。净进展偏慢：

- 🔴 **[#1549](https://github.com/sipeed/picoclaw/pull/1549)** 「fix: merge PR #1448 #1447 #1446 #1444」— 合并型 meta PR，自身无评论流，被自动流程关闭
- 🟡 **[#3316](https://github.com/sipeed/picoclaw/pull/3316)** 「fix: routed-agent context management」(stale-closed) — 修复 dispatch 路由代理上下文丢失与自动压缩未触发
- 🟡 **[#3315](https://github.com/sipeed/picoclaw/pull/3315)** 「Support topics in private bot chats」(stale-closed) — Telegram 私人聊天论坛话题支持
- 🟡 **[#3314](https://github.com/sipeed/picoclaw/pull/3314)** 「Fix: agent not able to execute shell command added to customAllowPatterns」(stale-closed) — 修复 `customAllowPatterns` 在默认拒绝规则下失效

**核心警示**：3 个高质量修复 PR 因 stale 策略被自动关闭，等于社区自投的修复被丢弃，维护者应立即介入复审是否复活。

仍保持开放的 2 个 PR：
- **[#3340](https://github.com/sipeed/picoclaw/pull/3340)** 「fix(slack): set FileSize on media upload params」— 配套 #3338，Slack 上传 100% 失败修复
- **[#3329](https://github.com/sipeed/picoclaw/pull/3329)** 「fix(line): warn on inert webhook_host / webhook_port」(stale) — 配套 #3328，Line 死代码提示

## 社区热点
按评论数与反应数排序：

1. 🥇 **[#3287](https://github.com/sipeed/picoclaw/issues/3287)**「Better support long messages in IRC」(8 条评论)
   用户 superuser-does 提议 IRCv3 应将超过 512 字节的自动拆分消息识别为同一消息，是当前最热的讨论线。

2. 🥈 **[#3281](https://github.com/sipeed/picoclaw/issues/3281)**「Web UI chat input is very laggy when history has a little bit long」(7 条评论 + 1 👍)
   Web UI 在历史消息稍多时输入卡顿，已获得正面反应。

3. 🥉 **[#3301](https://github.com/sipeed/p

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目日报
**日期：2026-08-27**
**仓库：qwibitai/nanoclaw（链接引用 nanocoai/nanoclaw）**

---

## 1. 今日速览

NanoClaw 今日呈现典型的"维护性大扫除"特征，单一贡献者 **Agi-Asi** 集中提交 15 个以上 PR，覆盖 PATH 修复、setup 安装器加固、容器能力调整与 CLI 文档等多处低层缺陷，整体活跃度偏高但单 PR 体量小、均为 Fix/Docs 类型。Issue 端动静不大（仅 2 条），但出现了 **一条阻塞性的回归 Bug #3568**（agent 在累积 system 行后静默无响应），需要维护者优先排查。**无版本发布**，所有 PR 均处于待合并或已关闭状态。

---

## 2. 版本发布

⚠️ 今日无新版本发布。过去 24 小时合并的均为单点修复，没有形成可发布的 Release 候选。

---

## 3. 项目进展

今日合并/关闭的 PR 共 6 条，其中 2 条可直接确认为「已关闭」。以下为重点进展：

| 类型 | PR | 标题 | 贡献者 | 意义 |
|---|---|---|---|---|
| ✅ Closed | [#3557](https://github.com/nanocoai/nanoclaw/pull/3557) | fix(mattermost): improve initial setup and SiteURL handling | glifocat | 改善 Mattermost 通道首次安装路径 |
| ✅ Closed | [#3556](https://github.com/nanocoai/nanoclaw/pull/3556) | fix(mattermost): recover card thread after restart | glifocat | 修复 host 重启后交互卡片线程路由丢失（[issue](#) 上下文未给出） |

> 数据备注：摘要中标注 [CLOSED] 的共 2 条，但日报概览提到 6 条已合并/关闭，其余 4 条可能为批量合并未列出摘要，建议核对 GitHub 状态面板。

**整体评价**：项目推进集中在「基础设施健壮性」层面，没有可见的功能新增；属于版本间质量补强，而非特性扩张。

---

## 4. 社区热点

按互动度排序：

1. **Issue #574 [CLOSED]** — [containers lack jq](https://github.com/nanocoai/nanoclaw/issues/574)
   - 👍1，💬3 条评论
   - 关闭时间 2026-08-26，距创建（2026-02-28）约 6 个月
   - **诉求**：用户希望在容器内预装 `jq`，避免使用 `node -e` 解析 API 响应（存在 eval 注入风险）
2. **Issue #3568 [OPEN]** — [Pending system rows starve the inbound queue; agent silently stops responding](https://github.com/nanocoai/nanoclaw/issues/3568)
   - 评论 0，但为新增关键 Bug

社区整体讨论偏冷清，多数 PR 评论数未披露（undefine）。当前最热话题仍是「**安全相关依赖（jq）缺位**」与「**agent 静默失效**」两类可靠性议题。

---

## 5. Bug 与稳定性

### 🔴 严重（Severity: Critical）
- **[Issue #3568](https://github.com/nanocoai/nanoclaw/issues/3568)** — Pending system rows starve the inbound queue; agent silently stops responding
  - 报告者：BuckG71（2026-08-26）
  - 现象：会话累积 ≥ `maxMessagesPerPrompt`（默认 10）的 `kind='system'` 待处理行（且 seq 小于真实流量）后，**agent 对所有入站消息停止响应，无错误**
  - 影响：用户体验为"沉默失败"，无日志告警
  - 是否有 fix PR：**尚无**
  - 建议维护者优先确认根因并加锁通知

### 🟡 中等（已 Closed/已修复）
- **[PR #3556](https://github.com/nanocoai/nanoclaw/pull/3556)** — mattermost 重启后卡片线程路由丢失（已关闭）
- **[PR #3557](https://github.com/nanocoai/nanoclaw/pull/3557)** — mattermost 初次安装与 SiteURL 处理（已关闭）

### 🟢 大量提交中的"低风险"Fix PR（全部 OPEN，待合并）

| PR | 修复主题 |
|---|---|
| [#3567](https://github.com/nanocoai/nanoclaw/pull/3567) | register-claude-token.sh 中 PATH 顺序 |
| [#3566](https://github.com/nanocoai/nanoclaw/pull/3566) | 容器唤醒失败时通知用户 |
| [#3565](https://github.com/nanocoai/nanoclaw/pull/3565) | forks 在 skill refresh 时保留本地 adapter |
| [#3564](https://github.com/nanocoai/nanoclaw/pull/3564) | task_log 写入 series id，保留 run log |
| [#3563](https://github.com/nanocoai/nanoclaw/pull/3563) | signal-cli 探测超时（daemon config lock 防死锁） |
| [#3562](https://github.com/nanocoai/nanoclaw/pull/3562) | Linux 安装器改用非交互 apt（避免 needrestart 卡死） |
| [#3561](https://github.com/nanocoai/nanoclaw/pull/3561) | launchd plist 引导缺失时自动 bootstrap |
| [#3560](https://github.com/nanocoai/nanoclaw/pull/3560) | cli/local 无 agent 时 fail-fast 并给出提示 |
| [#3558](https://github.com/nanocoai/nanoclaw/pull/3558) | Claude SDK 输出 token 上限对齐模型真实上限 |
| [#3555](https://github.com/nanocoai/nanoclaw/pull/3555) | Node 最低版本提至 22.14.0（better-sqlite3 13 在更低版本会 segfault） |
| [#3554](https://github.com/nanocoai/nanoclaw/pull/3554) | Node 25+ 下 stdin-json stderr 断言精确化 |
| [#3553](https://github.com/nanocoai/nanoclaw/pull/3553) | Chat SDK 桥跨平台规范化 reaction emoji |
| [#3552](https://github.com/nanocoai/nanoclaw/pull/3552) | Codex 在 OneCLI 之后强制 MCP-only policy |
| [#3551](https://github.com/nanocoai/nanoclaw/pull/3551) | 按组强制 MCP policy 与 OneCLI gateway 路由 |
| [#3550](https://github.com/nanocoai/nanoclaw/pull/3550) | 邮箱替换加引号 + 校验正则收紧（修 #3543） |
| [#3549](https://github.com/nanocoai/nanoclaw/pull/3549) | mailbox 投递重试用 INSERT OR IGNORE（修 #3457） |

**评估**：15+ 条同类 PR 短时间集中提交，建议维护者按模块分批 review，避免一次性合并引发回归风险。

---

## 6. 功能请求与路线图信号

| 需求 | 来源 | 当前状态 |
|---|---|---|
| 容器内预装 `jq` 工具 | [Issue #574](https://github.com/nanocoai/nanoclaw/issues/574) | 已 CLOSED，但 PR 摘要未明示是否实际打包；建议到镜像构建脚本中确认 |
| README 与 changelog 增补 Dial 通道说明 | [PR #3501](https://github.com/nanocoai/nanoclaw/pull/3501) | OPEN，已有核心团队标记（core-team），很可能随下一版本 changelog 一并合并 |
| CLI 文档修订（group-scope 自动填充描述） | [PR #3559](https://github.com/nanocoai/nanoclaw/pull/3559) | OPEN，属于文档优化 |
| 跨平台 reaction emoji 规范化 | [PR #3553](https://github.com/nanocoai/nanoclaw/pull/3553) | OPEN，间接扩展 Chat SDK 能力 |

**路线图判断**：下一个 Release 大概率会收录 "Dial 通道上线" 这一变化（[PR #3501](https://github.com/nanocoai/nanoclaw/pull/3501) 已标 core-team），并在 [Unreleased] 段落补齐；同时 #3555 的 Node 22.14.0 升版将作为安装前提同步变更。

---

## 7. 用户反馈摘要

提炼自 Issue #574 的 3 条评论（Issue #3568 尚无评论）：

- **安全担忧**："目前 swarm 倾向用 `node -e` 解析响应，可能导致 eval 攻击"——社区已从「便利性」诉求升级到「安全性」诉求，**期望以更专业的工具（jq）取代临时拼接**
- **使用场景**：用户在与外部 API 频繁交互，**容器内缺少标准 JSON 处理工具**是普遍痛点
- **期待被采纳程度**：6 个月内仅 👍1，关注度低，但作为安全相关 issue，被合并关闭已属正面回应

> 整体情绪中性偏正面。用户对容器依赖管理的"安全感"高于"功能丰富度"，建议运营上多展示安全改进以提升信任。

---

## 8. 待处理积压

| 编号 | 状态 | 待办建议 |
|---|---|---|
| [Issue #3568](https://github.com/nanocoai/nanoclaw/issues/3568) | 新建 OPEN，无响应 | 🔥 **最高优先级**：建议 triage 在 48h 内回复，并标 `bug` |
| [PR #3501](https://github.com/nanocoai/nanoclaw/pull/3501) | 8/24 提交、core-team、仍 OPEN | 已 3 天，建议维护者确认 diff 并合并 |
| 15+ 条 Agi-Asi 的 Fix PR | 同日批量 OPEN | 建议维护者按模块（setup / host / container / cli / tasks / channels）分组合并，避免回归 |

**积压规模本身并不严重**，但单日集中度极高，存在 review capacity 风险——若维护者人手有限，可在 1–2 个工作日内分批落地。

---

### 📌 健康度小结

| 维度 | 评分 | 说明 |
|---|---|---|
| 活跃度 | ⭐⭐⭐⭐ | 24 条 PR 流入，2 条 Issue 处理 |
| 风险 | ⭐⭐⭐（中） | 1 条 Critical Bug 待修；批量 PR 合并风险 |
| 社区反馈 | ⭐⭐（低） | 评论稀薄，依赖单一贡献者 Agi-Asi |
| 发布节奏 | ⭐⭐（偏低） | 当日无版本输出 |

**建议**：明日重点关注 [Issue #3568](https://github.com/nanocoai/nanoclaw/issues/3568) 的根因复现，并启动一次"基础设施 Release"批次合并 Agi-Asi 系列 PR。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目日报
**日期：2026-08-27**

---

## 1. 今日速览

NullClaw 今日社区活跃度处于**低位**。过去 24 小时内仅有 1 条 Issue 被创建/激活，无 PR 提交，无新版本发布。整体节奏趋缓，未观察到合并、关闭或版本迭代动作。从仅有的 #995 增强请求来看，社区仍有关注细节功能改进（如 Skills 符号链接支持）的意愿，但维护侧暂未作出响应，项目可能处于内部开发间歇期或维护者排期中。**项目健康度评估：中等偏低**，建议维护者主动同步路线图以维持社区信心。

---

## 2. 版本发布

无新版本发布。

最近一个版本为 `2026.5.29`（来自 #995 用户报告的当前版本号），距今约 3 个月未发布新版，存在一定的发布节奏放缓信号。

---

## 3. 项目进展

今日无合并或关闭的 PR，项目代码层面无可见推进。

无里程碑式进展可报告。

---

## 4. 社区热点

**#995 [Support Skills Symlinks](https://github.com/nullclaw/nullclaw/issues/995)** — 唯一活跃 Issue，0 评论、0 👍，热度尚处于初始阶段。

该 Issue 由社区用户 ivostoykov 提交，标题分类为 `enhancement`，反映的是一项**使用体验优化诉求**：当前 `nullclaw skills links` 命令忽略符号链接，用户希望在多设备/多环境同步 Skills 时能够识别并跟踪 symlink，从而：
- 减少不必要的 Skills 同步开销；
- 避免使用过时或失效的 Skill 副本。

虽然评论数为 0，但这一诉求触及了多设备工作流中的实际痛点，具有一定代表性。

---

## 5. Bug 与稳定性

今日无 Bug 报告、无崩溃或回归类 Issue 提交。

> 注：#995 虽属 enhancement 类别，但其描述中提到"使用 obsolate skill"（使用过时的 Skill）实际上也暗含一种潜在的稳定性风险——用户可能因 symlink 未被跟踪而误用过期技能，进而影响执行结果。建议维护者评估时将其视作兼具稳定性收益的改进项。

---

## 6. 功能请求与路线图信号

**#995 — Skills 符号链接支持**：

- **请求类型**：增强（enhancement）
- **影响面**：影响使用 `nullclaw skills` 子命令管理技能的所有用户，尤其是跨设备同步场景的用户。
- **实施成本预估**：从描述来看，可能涉及 `skills links` 命令的文件系统扫描逻辑与 symlink 解析判断，属于局部改动，技术风险可控。
- **纳入下一版本的可能性**：**较高**。该需求描述清晰、动机合理（同步开销、版本一致性），且不会破坏现有行为（属于纯增量增强）。在无其他更优先 PR 排队的情况下，可作为下一个 minor 版本的候选条目。

当前**无相关 PR 提交**，距离落地仍需维护者或贡献者主动接手。

---

## 7. 用户反馈摘要

今日 Issues 区域无评论，暂无结构化的多用户反馈。

可提取的信号仅来源于 #995 的一条 Issue 描述：

- **痛点**：`nullclaw skills links` 不识别 symlink，导致多设备环境下技能同步与管理体验不佳。
- **使用场景**：暗示用户具备多设备/多环境工作流，可能存在 dotfiles 仓库或统一 Skills 目录的实践。
- **满意度**：未直接表达满意度，但"it would be great to have this"的措辞反映出对当前方案**功能完整但细节不足**的中性偏正面评价。

---

## 8. 待处理积压

| 编号 | 类型 | 状态 | 创建时间 | 备注 |
|------|------|------|----------|------|
| [#995](https://github.com/nullclaw/nullclaw/issues/995) | Enhancement | OPEN | 2026-08-26 | 今日新建，等待维护者 triage |

**提醒事项**：
- 由于今日数据样本仅含 1 条新 Issue，无法判断仓库整体的长期积压情况。建议结合 GitHub 仓库的完整 Issues 列表筛选 `needs-triage` 或 `long-running` 标签项进行专项跟进。
- 当前距上次版本发布已约 3 个月，若有内部开发进度，建议维护者发布阶段性说明或预告，以维持社区信任。

---

## 附录：关键指标一览

| 指标 | 数值 |
|------|------|
| 过去 24h 新开/活跃 Issues | 1 |
| 过去 24h 已关闭 Issues | 0 |
| 过去 24h 待合并 PR | 0 |
| 过去 24h 已合并/关闭 PR | 0 |
| 新版本发布 | 0 |
| 距上次发布 | ~3 个月 |

---

*报告基于 2026-08-27 抓取的 GitHub 公开数据生成。如需更深入的对比分析（如周/月维度趋势），请提供更长周期的数据样本。*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目日报 · 2026-08-27

> 数据范围：2026-08-26 → 2026-08-27 · 数据源：GitHub REST API

---

## 1. 今日速览

IronClaw 在 24 小时内进入 **v1.4.0-rc.1 发布窗口**，仓库活跃度处于年内峰值：42 个 Issue 更新（22 新开 / 20 关闭）+ 50 个 PR 更新（3 待合并 / 47 已关闭），合并-关闭比高达 94%，说明绝大多数提交都是经过审核快速落地的功能性变更。**性能与缓存**成为今日最显著的讨论主题——围绕 Anthropic 之外的 OpenAI-family 后端丢失 `prompt_cache_key`、工具载荷未投影化等高优问题集中爆发。同时 **MCP 注册框架（注册→发现→出口）三阶段骨架** 全部合并，标志着 v1.4 在扩展性上的核心拼图完成。整体健康度评估：**良好**，推进节奏紧扣 rc 质量门禁，但仍有几条 P0/P1 性能工单在 24h 内刚开，需要维护者立即分流。

---

## 2. 版本发布

### 🚢 ironclaw-v1.4.0-rc.1（2026-08-26 发布）

首个 1.4.0 RC，覆盖自 `v1.3.0` 以来的 **81 个 commit**。

**Added（节选）**
- **Durable notification inbox**：runs publish 把权威结果与可操作的网关事件写入 per-user inbox，由 WebUI 通知中心统一呈现，审批与认证提示不再依赖轮询。

**PR**: <https://github.com/nearai/ironclaw/pull/7926>（cut commit）

⚠️ **RC 阶段提示**
- 这是 pre-release（`-rc.1`），建议生产部署暂缓，等待 `v1.4.0` 稳定版。
- 截至日报时间 RC 仍处于"刚刚 cut"状态，正式版预计在 1-2 周观察期后释出。
- 与 1.3.x 的兼容破坏点尚未在 release notes 全部列出，建议在升级前 review 自 1.3.0 起的全部 #5xxx/#6xxx Epic 标签变更。

---

## 3. 项目进展

### 🎯 今日已合并/关闭的高价值 PR（按影响排序）

| 类别 | PR | 标题 | 影响 |
|---|---|---|---|
| 🛡️ 安全 | [#6817](https://github.com/nearai/ironclaw/pull/6817) | close local-backend TOCTOU escapes with fd-rooted traversal | **关闭 4 处 TOCTOU 逃逸**，全部由"先 canonicalize 再独立 syscall"家族漏洞组成，是文件系统后端的关键安全收紧 |
| 🔌 扩展 | [#5970](https://github.com/nearai/ironclaw/pull/5970) / [#5918](https://github.com/nearai/ironclaw/pull/5918) / [#5917](https://github.com/nearai/ironclaw/pull/5917) | MCP registration framework（骨架→注册发现→出口锁定）三件套 | 整套 MCP 注册/发现/出口框架闭环，**T1+T2+T3 全部完成**，为后续 user-facing 注册 UI 铺路 |
| 🧱 沙箱 | [#6740](https://github.com/nearai/ironclaw/pull/6740) | TLS termination seam for the sandbox egress proxy | 把沙箱 TLS 拦截从实验分支移植到 main，沙箱出口代理的能力面正式展开 |
| ⚙️ Agent 循环 | [#6112](https://github.com/nearai/ironclaw/pull/6112) | decompose canonical.rs execute(), dedupe latency wrapping | 清理 canonical.rs 累积的 inline 决策逻辑，规范执行脊柱的扩展方式 |
| 🐛 正确性 | [#6096](https://github.com/nearai/ironclaw/pull/6096) | serialize concurrent inbound-message writes per thread | 修复 #6047：两条快连消息的持久化、显示、执行不再乱序 |
| 🧠 Memory | [#5742](https://github.com/nearai/ironclaw/pull/5742) | wire memory prompt-context source（PRODUCTION CHANGE） | **生产变更**：把 `ProductionMemoryPromptContextService` 真正接入 composition 层，并把 untrusted-memory envelope 钉死在 int tier |
| 🚀 部署 | [#6533](https://github.com/nearai/ironclaw/pull/6533) | container-supervised mode for hosted deployments | 云托管场景的容器监督模式（重启/apply 路径），部分缓解 #6534 |
| 🖥️ UX | [#6157](https://github.com/nearai/ironclaw/pull/6157) | terminal UI + service install for ironclaw-reborn | Reborn 终端 TUI 与服务安装（thin HTTP+SSE client of serve's WebChat v2 API） |
| 🧪 测试基础设施 | [#6131](https://github.com/nearai/ironclaw/pull/6131) / [#6132](https://github.com/nearai/ironclaw/pull/6132) / [#6133](https://github.com/nearai/ironclaw/pull/6133) / [#6134](https://github.com/nearai/ironclaw/pull/6134) | Reborn tier-2 集成 harness 4 车道 | 全部 4 条 lane 完成，tier-2 集成测试成熟度跃升 |
| 🧹 重构 | [#6366](https://github.com/nearai/ironclaw/pull/6366) | Esc at API-key prompt returns to provider menu | `ironclaw onboard` 的 API-key 提示不再是终端态 |
| 🏷️ 发布 | [#7926](https://github.com/nearai/ironclaw/pull/7926) | cut 1.4.0-rc.1 | 1.4.0 RC cut 提交 |

**总结**：v1.4.0 RC 的核心模块（持久化通知、MCP 框架、TLS 沙箱出口、agent 循环清理、生产 memory 接线）均已落定，RC 切出的物质条件充分。

---

## 4. 社区热点

### 🔥 评论数 Top 5（Issues）

1. **[#7732](https://github.com/nearai/ironclaw/issues/7732)（10 条评论）** — Epic: Persistent per-user sandbox with iron-proxy；defer loop executors
   - **诉求**：Reborn 现在用 Docker 给每个 shell 命令建/删容器，不是用户想要的"持久用户电脑"；目标是 per `(tenant, user)` 持久化 `/workspace`，并把 loop executors 推到后续版本。
   - **信号**：v1.4.0 roadmap 上的 P0 Epic，是 #6686（已关闭 retire DockerProcessSandboxBackend）之后的下一步。

2. **[#7891](https://github.com/nearai/ironclaw/issues/7891)（5 条评论）** — perf: unprojected capability payloads + 24 KiB MIME head-slice
   - **诉求**：两次 `gmail.get_message` 合计 564 ms，但模型推理却用掉 19.2 s——根因是 **49,152 字节未投影的 MIME 头**被无条件塞进 prompt。零锁竞争、零重试、零队列延迟。
   - **诉求背后**：扩展（extensions）必须做"按需投影"而不是"全量塞回"。

3. **[#2950](https://github.com/nearai/ironclaw/issues/2950)（3 条评论）** — llm: split provider-safe tool schema cleanup from strict optional-field rewriting
   - **诉求**：把 `normalize_schema_strict()` 里两件不相关的事（provider 400 规避 + strict optional-field 重写）拆开，降低认知负担。

4. **[#6986](https://github.com/nearai/ironclaw/issues/6986)（3 条评论）** — Cache: keep the advertised tool array byte-identical
   - **诉求**：渐进式披露中途 promote 工具会污染 prefix-cache；改用 `defer_loading`/`tool_reference`，让工具数组在一次 run 内字节一致。

5. **[#2117](https://github.com/nearai/ironclaw/issues/2117)（3 条评论 👍1）** — ironclaw-bridge：本地文件/MCP 网桥守护进程
   - **诉求**：云托管 IronClaw 无法访问用户本地的 Obsidian vault、project 目录，需要一个本地网桥守护进程。
   - **信号**：是少数获 👍 的 Issue，说明有真实用户使用场景在等。

### 💬 互动集中区
- **性能 4 件套（#7921、#7929、#7930、#6986）**：全部由 `henrypark133` 在 2026-08-27 当天新开/激活，针对 cache-hit 从 82%→29% 的崩塌、缺乏生产级 perf metric、工具调用需 verbatim 重发输出等。**这表明性能工作进入了一个新的、以"实测数据驱动"为主导的阶段**——每条 PR 都引用了具体的生产数据而非估算。

---

## 5. Bug 与稳定性

按严重程度排列：

| 等级 | Issue | 标题 | 状态 | 是否已有 fix |
|---|---|---|---|---|
| 🔴 P0（性能崩塌） | [#7921](https://github.com/nearai/ironclaw/issues/7921) | OpenAI-family backends send no `prompt_cache_key` — 82%→29% cache-hit collapse | OPEN | ❌ 无（今日新开） |
| 🟠 P1（性能） | [#7930](https://github.com/nearai/ironclaw/issues/7930) | 工具参数需 verbatim 重新发出前一个结果 | OPEN | ❌ 无（今日新开） |
| 🟠 P1（性能） | [#6986](https://github.com/nearai/ironclaw/issues/6986) | 工具数组中途 promote 破坏 cache | OPEN | ❌ 无 |
| 🟡 中风险（渠道） | [#7891](https://github.com/nearai/ironclaw/issues/7891) | Gmail MIME 头无投影化 | OPEN | ❌ 无 |
| 🟡 中风险（渠道） | [#7912](https://github.com/nearai/ironclaw/issues/7912) | Telegram 卸载在 WebChat 端返回 503 | OPEN | ❌ 无（今日新开） |
| 🟢 中（部署） | [#7918](https://github.com/nearai/ironclaw/issues/7918) | 下载 giant trajectory 返回 HTTP 413 | OPEN | ❌ 无（今日新开） |
| ✅ 已修复 | [#6096](https://github.com/nearai/ironclaw/pull/6096) | 并发入站消息顺序错乱 | MERGED（修 #6047） | ✅ PR 已合并 |
| ✅ 已修复 | [#6366](https://github.com/nearai/ironclaw/pull/6366) | `ironclaw onboard` API-key 提示 Esc 卡死 | MERGED | ✅ PR 已合并 |
| ✅ 已修复 | [#4425](https://github.com/nearai/ironclaw/issues/4425) | `builtin.http` 10MB context bomb | CLOSED（修后关闭） | ✅ 今日关闭 |
| ✅ 已修复 | [#6817](https://github.com/nearai/ironclaw/pull/6817) | 本地文件系统 4 处 TOCTOU 逃逸 | MERGED | ✅ 安全 PR 已合并 |

**值得维护者关注**：今日新开的 P0/P1 性能工单（#7921、#7929、#7930）由同一位提交者在数小时内集中抛出，**建议在 RC 窗口内优先给出诊断 PR 或临时缓解**，否则 v1.4.0 正式版将带着"OpenAI 用户看不到 cache 红利"的体验问题发布。

---

## 6. 功能请求与路线图信号

### 明确与下一版本绑定的请求
- **[#7922](https://github.com/nearai/ironclaw/issues/7922)** — `apply_patch` 改为 grammar-constrained freeform 工具，避免 JSON-escape diff（p3）
- **[#7920](https://github.com/nearai/ironclaw/issues/7920)** — Skill extraction 在 Inference 设置中可视化（用户当前只能通过 `IRONCLAW_SKILL_LEARNING_MODEL` 环境变量盲启用，文档缺位）

### 与 v1.4.0 Epic 关联
- **[#7781](https://github.com/nearai/ironclaw/issues/7781)** — Design System Phases 2–3（DESIGN.md governance + 主题 reskin），已合并自 #7038/7733，统一追踪
- **[#7732](https://github.com/nearai/ironclaw/issues/7732)** — Persistent per-user sandbox（v1.4.0 Epic）
- **[#7392](https://github.com/nearai/ironclaw/issues/7392)** — 用 `oh-my-pi` 工具面替换 first-party coding 工具（v1.4.0 Epic，今日已关闭）

### 路线图信号判断
| 请求 | 命中 v1.4.0 的概率 | 理由 |
|---|---|---|
| apply_patch grammar 模式 | 🟢 高 | p3、低风险、对用户体验直接受益，RC 周期内可纳入 |
| Skill extraction 设置 UI | 🟢 高 | 已存在功能，仅缺产品化，与 WebUI 设计系统 Phase 2 重叠 |
| Persistent sandbox | 🟡 中 | Epic 已声明 v1.4.0，但底层依赖较多，**可能推到 v1.4.x patch** |
| ironclaw-bridge 本地网桥 | 🟡 中 | 跨部署形态变更，**更可能 v1.5+** |
| Slack 通道路由个人/团队 agent (#4625) | 🟠 低 | 大型 Epic，依赖关系未解 |

---

## 7. 用户反馈摘要

### 🔴 用户痛点
1. **缓存命中率崩塌无可见告警**（#7921）—— OpenAI-family 用户实际感受到的是"为什么我同样的对话越来越慢"，但当前没有任何运行时 metric 解释；#7929 专门提出要把 per-run model-call / prefix-cache / tool-churn 指标做成可观测的，否则所有 perf 工作都在"凭估算"决策。
2. **大工具调用无引用机制**（#7930）—— 现在的做法是模型必须把上一次工具结果**逐字复制**到下一次调用的 JSON 参数里，输出 token 自回归生成、毫无缓存。这是真实用户的体验痛点。
3. **Gmail/Http 工具"上下文炸弹"**（#7891、#4425 已关闭）—— 49 KiB 未投影的 MIME 头、10 MB 的 HTML body 一次性注入 prompt，模型被迫消耗推理预算"消化不必要的数据"。**4425 的关闭意味着 builtin.http 上下文控制已有 fix，gmail

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报

**报告日期**：2026-08-27
**数据来源**：[netease-youdao/LobsterAI](https://github.com/netease-youdao/LobsterAI)

---

## 1. 今日速览

LobsterAI 在过去 24 小时内呈现**高强度迭代节奏**：17 条 PR 中 16 条已合入或关闭，仅 1 条仍待处理，活跃贡献者集中于 `liuzhq1986`、`fisherdaddy`、`liugang519` 三人。Issues 端新增 2 条，分别是服务商扩展（Synthorai）与波斯语 RTL 输入支持两类典型功能请求，均处于早期讨论阶段。今日合并内容覆盖**发布/部署分析链路完善**、**云端分享文件永久删除**、**侧边栏与设置页样式调整**等多个方向，但没有新版本（Release）落地。整体看，项目处于一个**密集打磨期**，主线功能快速收敛，UI/UX 与国际化需求开始浮现。

---

## 2. 版本发布

⚠️ 今日**无新版本发布**。但需关注：

- **PR [#2549](https://github.com/netease-youdao/LobsterAI/pull/2549)** `Release/2026.8.26` 已合并，标注为 2026.8.26 的发布分支合并动作，可能预示新版本即将 tag 出来，需关注后续 release 页面。

---

## 3. 项目进展（重要 PR 解读）

| 主题 | PR | 说明 |
|---|---|---|
| **发布与部署分析链路** | [#2555](https://github.com/netease-youdao/LobsterAI/pull/2555) | 新增分享、部署、复制链接及权限更新事件；引入耗时与错误分类、可靠上报队列；补充身份/订阅/环境信息；完善资料库刷新、收藏、发布弹窗埋点。**意义**：为产品决策提供更完整的遥测基础，是数据驱动迭代的基建工作。 |
| **云端分享文件永久删除** | [#2550](https://github.com/netease-youdao/LobsterAI/pull/2550) | 新增删除接口、IPC 与类型，仅允许删除已停止的分享；同步更新云端列表、计数与本地收藏；处理状态冲突与服务端不兼容；修复账号切换与弹窗关闭后的部署请求重复触发。**意义**：补齐资料库"硬删除"链路，闭环用户数据管理。 |
| **用户菜单每日积分赠送入口** | [#2539](https://github.com/netease-youdao/LobsterAI/pull/2539) | 在用户菜单中新增 daily credit gift 入口，配合 [#2552](https://github.com/netease-youdao/LobsterAI/pull/2552) 的引导/充值流程，构成付费转化链路的前置铺垫。 |
| **侧边栏登录引导优化** | [#2546](https://github.com/netease-youdao/LobsterAI/pull/2546) | 引擎启动遮罩未消失前暂停登录引导 5 秒倒计时，避免"还没看清就先弹"的不良节奏感；这是与 [#2545](https://github.com/netease-youdao/LobsterAI/pull/2545)、[#2547](https://github.com/netease-youdao/LobsterAI/pull/2547) 同主题的连续修缮。 |
| **Web 安装器时序诊断** | [#2543](https://github.com/netease-youdao/LobsterAI/pull/2543) | 增强 web installer 阶段耗时诊断，便于后续定位 Windows 端安装卡顿问题。 |
| **智谱图标暗色模式修复** | [#2553](https://github.com/netease-youdao/LobsterAI/pull/2553) | 修复 Windows 端智谱服务商图标在暗色模式下的显示问题。 |
| **侧边栏库图标重构** | [#2540](https://github.com/netease-youdao/LobsterAI/pull/2540)、[#2542](https://github.com/netease-youdao/LobsterAI/pull/2542)、[#2544](https://github.com/netease-youdao/LobsterAI/pull/2544)、[#2548](https://github.com/netease-youdao/LobsterAI/pull/2548) | 同一图标（library icon）在一天内经历了多次重构与样式打磨，反映出 UI 一致性仍在收尾。 |

**整体进度判断**：项目在**资料库管理、付费引导、安装诊断、UI 一致性**四条线上同步推进，主线功能持续逼近"可发布"状态，但缺少大型新特性 PR，呈现"质量打磨 > 功能扩张"特征。

---

## 4. 社区热点

| Issue / PR | 链接 | 关注点 |
|---|---|---|
| **[Feature] 新增 Synthorai 作为内置服务商** | [#2554](https://github.com/netease-youdao/LobsterAI/issues/2554) | 用户希望免去 Custom 配置成本，获得与 OpenRouter 同等的内置待遇。 |
| **Persian (Farsi) 文本支持：RTL 输入、混合双向渲染、ZWNJ 半角空格** | [#2541](https://github.com/netease-youdao/LobsterAI/issues/2541) | 桌面端聊天框对波斯语渲染存在系统性问题，作者明确给出复现与改进建议。 |

**诉求分析**：
- **服务商生态**：聚合类网关的"开箱即用"诉求强烈，反映用户对 Custom 槽位的体验落差；
- **国际化与 RTL**：单一 Issue 覆盖了 LTR/RTL 双向布局与 Unicode 特殊字符处理，体现非英语用户对生产级 i18n 的真实需求；
- **讨论热度**：两条 Issue 评论数均为 1、点赞为 0，处于早期阶段，需维护者主动介入。

---

## 5. Bug 与稳定性

| 等级 | 问题 | 链接 | 是否有 Fix PR |
|---|---|---|---|
| 🟡 中 | **应用更新后 ready 状态丢失** | [PR #2551](https://github.com/netease-youdao/LobsterAI/pull/2551) | ✅ 自身即为修复 PR（仍 OPEN） |
| 🟡 中 | 智谱服务商图标暗色模式异常（Windows） | [PR #2553](https://github.com/netease-youdao/LobsterAI/pull/2553) | ✅ 已合并 |
| 🟢 低 | 侧边栏登录引导在引擎启动阶段过早弹出 | [PR #2546](https://github.com/netease-youdao/LobsterAI/pull/2546) | ✅ 已合并 |
| 🟢 低 | 资料库图标样式不一致 | [PR #2540](https://github.com/netease-youdao/LobsterAI/pull/2540) | ✅ 已合并 |
| 🟢 低 | 账号切换/弹窗关闭导致本地部署请求重复触发 | [PR #2550](https://github.com/netease-youdao/LobsterAI/pull/2550) | ✅ 已合并 |
| ⚪ 观察 | Web 安装器阶段耗时诊断缺失 | [PR #2543](https://github.com/netease-youdao/LobsterAI/pull/2543) | ✅ 已合并（非 Bug，属可观测性补强） |

**特别关注**：[PR #2551](https://github.com/netease-youdao/LobsterAI/pull/2551) `fix: app update preserve ready state` 是今日**唯一仍 OPEN 的修复类 PR，涉及应用更新链路，建议维护者优先 review**，否则可能错过下次 Release。

---

## 6. 功能请求与路线图信号

| 需求 | Issue | 路线图可能性评估 |
|---|---|---|
| **Synthorai 作为内置聚合服务商** | [#2554](https://github.com/netease-youdao/LobsterAI/issues/2554) | ⭐⭐⭐⭐ 高 —— 与 OpenRouter 形态一致，社区已有明确诉求模板，技术实现可复用现有 `switchableBaseUrls` 模式，预计可在 1~2 个迭代内纳入。 |
| **波斯语 RTL / 双向渲染 / ZWNJ 处理** | [#2541](https://github.com/netease-youdao/LobsterAI/issues/2541) | ⭐⭐⭐ 中 —— 工作量主要在渲染层与输入框控件属性，依赖桌面端 Webview 行为测试；但属于"长尾国际化"诉求，优先级可能低于英语/主流语种打磨。 |
| **每日积分赠送入口** | [PR #2539](https://github.com/netease-youdao/LobsterAI/pull/2539) | ✅ 已落地，配合 [#2552](https://github.com/netease-youdao/LobsterAI/pull/2552) 形成完整商业化入口。 |
| **云端文件硬删除** | [PR #2550](https://github.com/netease-youdao/LobsterAI/pull/2550) | ✅ 已落地，补齐资料库最后一环。 |

---

## 7. 用户反馈摘要

- **聚合服务商的"开箱即用"体验落差**（[#2554](https://github.com/netease-youdao/LobsterAI/issues/2554)）：用户明确列举了 Custom 槽位相对内置条目的三点不足——**无默认模型列表**、**无协议切换**、**无默认 baseUrl 与图标**，体感"差一截"。说明内置服务商配置的"默认值"对降低新用户上手成本极为关键。
- **非英语用户的真实生产诉求**（[#2541](https://github.com/netease-youdao/LobsterAI/issues/2541)）：波斯语 Issue 同时指出了**输入框 LTR、Caret 起始位置错误、混合文本双向渲染、ZWNJ 半角空格缺失**四个具体子问题，并主动提供截图与技术描述，显示出非英语社区愿意深度参与共建。
- **目前尚无明显的"性能/稳定性"抱怨**集中在公开 Issue 中，更多反馈集中在 UI 细节与功能扩展侧。

---

## 8. 待处理积压与维护者建议

| 项 | 链接 | 建议 |
|---|---|---|
| 🔴 **唯一 OPEN 修复 PR** | [#2551](https://github.com/netease-youdao/LobsterAI/pull/2551) `fix: app update preserve ready state` | 涉及应用更新链路关键流程，建议**24h 内 review**，争取随下次 Release 一起落地。 |
| 🟠 **新 Issue 未获维护者回复** | [#2554](https://github.com/netease-youdao/LobsterAI/issues/2554) Synthorai 集成 | 建议由负责内置服务商列表的 maintainer 给出"是否纳入 + 排期"信号。 |
| 🟠 **新 Issue 未获维护者回复** | [#2541](https://github.com/netease-youdao/LobsterAI/issues/2541) Persian RTL | 建议至少给出"是否在国际化 backlog 中"的反馈，避免社区贡献者流失热情。 |
| 🟡 **Release 分支需 tag** | [#2549](https://github.com/netease-youdao/LobsterAI/pull/2549) `Release/2026.8.26` 已合并 | 建议尽快发布对应版本号，避免修复积压在分支中。 |

---

### 📊 项目健康度评估

| 维度 | 评估 |
|---|---|
| 迭代节奏 | ⭐⭐⭐⭐⭐ 极高（24h 内 17 PR） |
| 主线功能收敛 | ⭐⭐⭐⭐ 良好，但缺大型新特性 |
| 社区响应 | ⭐⭐ 较弱，新 Issue 均未获维护者回复 |
| 版本可发布性 | ⭐⭐⭐⭐ 接近（Release 分支已合） |
| 国际化覆盖 | ⭐⭐ 不足（仅今日即出现 Farsi 痛点） |

**一句话总结**：今日 LobsterAI 处于"高频修缮 + 待发版"状态，代码侧推进稳健，但社区侧新 Issue 缺乏维护者反馈，需警惕贡献者积极性流失。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目日报

**日期：2026-08-27**
**数据周期：2026-08-26 ~ 2026-08-27（UTC）**

---

## 1. 今日速览

Moltis 项目在过去 24 小时内整体活跃度偏低，处于一个"维护性小迭代"的窗口期。当日共有 1 个新版本发布（`20260826.01`），1 条 Issue 被关闭，2 条 PR 被合并/关闭，且无新增未处理的 Issue 或待合并 PR。值得注意的是，两个被关闭的 PR（#1104、#1244）均直接对应此前累积的 Bug 修复需求，说明维护者趁低活跃期集中清理了一批技术债。整体看，项目健康度良好，无积压风险。

---

## 2. 版本发布

**🚀 新版本：[20260826.01](https://github.com/moltis-org/moltis/releases/tag/20260826.01)** （发布于 2026-08-26）

从关联 PR 判断，本次小版本主要包含以下修复：
- **#1104**：修复 Provider 偏好模型无法正确替换的问题，支持清空所有偏好。
- **#1244**：修复 Fastmail MCP OAuth 在 scope 注册阶段的资源发现错误。

> ⚠️ 当前 Release Notes 详情未在数据中给出，建议查阅仓库 Release 页面确认完整 changelog。版本号采用日期式命名（`YYYYMMDD.NN`），表明 Moltis 倾向高频小版本发布节奏，破坏性变更概率较低，但仍需关注是否涉及 OAuth scope 处理逻辑变更。

---

## 3. 项目进展

**✅ 已合并/关闭的重要 PR：**

### PR #1104 — `fix(providers): allow replacing preferred models`
🔗 [moltis-org/moltis#1104](https://github.com/moltis-org/moltis/pull/1104)（作者：penso）

- 打开偏好模型对话框时，预选已保存的 Provider 模型偏好；
- 保存时替换 Provider 旧的偏好模型列表，并支持通过空选择清空全部偏好；
- 新增后端单元测试与 Playwright 端到端回归覆盖。

**意义**：这是一个直接面向用户体验的修复，让"取消偏好"操作终于可用。结合被同时关闭的 Issue #1094，这条 PR 解决了一个长期被用户反馈但未处理的痛点。

### PR #1244 — `Fix Fastmail MCP OAuth scope registration`
🔗 [moltis-org/moltis#1244](https://github.com/moltis-org/moltis/pull/1244)（作者：penso）

- 在 MCP OAuth 发现阶段，优先使用受保护资源（protected-resource）的 scope，而非授权服务器较宽泛的目录；
- 将用户选中的 scope 写入 RFC 7591 动态客户端注册请求；
- 新增针对 Fastmail 场景的回归测试，覆盖资源发现、注册、本地回跳 URI 校验全链路。

**意义**：MCP（Model Context Protocol）作为 Moltis 重要的扩展协议，OAuth 流程的可靠性直接影响第三方接入成功率。该修复补齐了与符合 RFC 8707 / 7591 规范的提供方（如 Fastmail）的兼容能力。

---

## 4. 社区热点

过去 24 小时内 Issue 与 PR 的评论数与反应数均偏低（多数为 0），反映社区反馈处于静默期。

| 条目 | 类型 | 评论 | 👍 | 链接 |
|---|---|---|---|---|
| #1094 | Issue (bug) | 0 | 0 | [链接](https://github.com/moltis-org/moltis/issues/1094) |
| #1104 | PR (fix) | - | 0 | [链接](https://github.com/moltis-org/moltis/pull/1104) |
| #1244 | PR (fix) | - | 0 | [链接](https://github.com/moltis-org/moltis/pull/1244) |

**诉求分析**：当日最值得关注的实际是"被关闭"的 Issue #1094（"De-Preferring Models"），这是用户对 UI/UX 缺失的明确呼声——用户希望在偏好模型管理中支持"取消"操作。该 Bug 的快速闭环反映出维护者对社区体验问题的响应是高效的。

---

## 5. Bug 与稳定性

| 严重程度 | Bug | 状态 | 关联 Fix |
|---|---|---|---|
| 🟡 中 | #1094 De-Preferring Models（偏好模型无法被取消/替换） | ✅ 已关闭 | [PR #1104](https://github.com/moltis-org/moltis/pull/1104) 已合并 |
| � 中 | Fastmail MCP OAuth scope 注册失败 | ✅ 已关闭 | [PR #1244](https://github.com/moltis-org/moltis/pull/1244) 已合并 |

**结论**：当日无新增、未解决的 Bug 报告，已知问题均已通过版本 `20260826.01` 闭环。稳定性指标健康。

---

## 6. 功能请求与路线图信号

由于过去 24 小时无新增 Issue 或功能类 PR 提交，路线图层面缺乏新的用户输入。但从已合并的 PR 中可观察到两个趋势信号：

1. **Provider 管理能力的精细化**（PR #1104）—— 维护者持续投入打磨多模型 Provider 的偏好管理 UX，未来或扩展为批量偏好、默认回退等高级设置。
2. **MCP 生态兼容扩展**（PR #1244）—— 重视与具体第三方服务（Fastmail）的接入质量，路线图可能逐步覆盖 Gmail、Outlook 等其他支持 RFC 7591 的邮件服务。

---

## 7. 用户反馈摘要

当日 Issues 评论数为 0，无法提炼现场用户反馈。但从已关闭 Issue #1094 的标题与摘要可知：

- **痛点**：用户在配置多模型 Provider 时，缺少"取消已选偏好"的入口，导致一旦设定就无法清理，需通过手动删除配置等绕行手段。
- **使用场景**：偏好模型管理是日常使用的高频操作，缺失"反悔"能力会让用户对配置产生"配置恐惧"。

> 由于评论缺失，建议维护者在后续类似修复中主动邀请报告者（@RokkuCode）补充使用反馈，以验证修复是否真正符合用户期望。

---

## 8. 待处理积压

**✅ 当前无新增待处理积压。**

所有在过去 24 小时内出现过的 Issue 与 PR 均已关闭，且 0 个处于 open 状态。项目处于一个干净的"零积压"窗口期。

**建议关注**：
- 距 Issue #1094 首次创建（2026-06-03）到关闭（2026-08-26），处理周期约 **84 天**，虽最终闭环，但响应较慢。维护者可考虑为"bug"标签设置 SLA，例如 30 天首响应、90 天内关闭，以提升社区信任度。
- 距 PR #1104 创建（2026-06-05）到合并同样耗时约 82 天，PR review 节奏有优化空间。

---

**📊 项目健康度总评：★★★★☆（4/5）**
- ✅ 无未解决问题、无未合并 PR
- ✅ 版本持续迭代
- �️ Issue / PR 平均处理周期偏长（80+ 天）
- ⚠️ 社区互动量偏低，需主动运营

*报告基于 GitHub 公开数据生成，所有链接均指向 moltis-org/moltis 仓库。*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目日报 · 2026-08-27

> 数据来源：github.com/agentscope-ai/CoPaw（内部记录为 QwenPaw 仓库路径）
> 报告周期：2026-08-26 至 2026-08-27

---

## 1. 今日速览

CoPaw 今日进入 **v2.2.0-beta.1 发布周期**，社区活跃度维持在高位。24 小时内共 **31 条 Issue 更新（16 新开/活跃 + 15 关闭）**、**43 条 PR 更新（16 待合并 + 27 已合并/关闭）**，并完成 1 个 beta 版本发布。开发者高度聚焦于**测试覆盖率冲刺**（多个 PR 累计提交超千条用例）与 **v2.2.0 发布准备**（版本号 bump、NSIS 安装器修复、Python 3.13 升级）。社区侧最显著信号是 **QwenPaw Hub 多租户版** 讨论热度升温，多个长期悬而未决的多用户/团队管理诉求正在被官方正式回应。整体健康度：**良好偏积极**——bug 修复与 CI 优化同步推进，技术债清理节奏稳健。

---

## 2. 版本发布

### v2.2.0-beta.1（已发布）

- 链接：[Release v2.2.0-beta.1](https://github.com/agentscope-ai/QwenPaw/pull/7300)
- **已知变更**（截断摘要）：
  - **Docs**: 更新 Scroll Context Manager 博客（[#7300](https://github.com/agentscope-ai/QwenPaw/pull/7300) by @niceIrene）
  - **fix(providers)**: 为严格模式模型清理 DashScope 工具 schema（[#7284](https://github.com/agentscope-ai/QwenPaw/pull/7284) by @XiuShenAl）
  - **test(integration)**: 针对性覆盖（PR 标题截断）
- **版本线信号**：PR #7338（[@cuiyuebing](https://github.com/agentscope-ai/QwenPaw/pull/7338)）已提交 `chore: bump the version to 2.2.0b2`，表明 beta 节奏按计划推进。
- **破坏性变更**：无明确公告，需关注 v2.2.0 Hub 多租户架构对单租户部署的影响。
- **迁移注意**：从 v2.1.x 升级到 v2.2.0-beta.1 的用户应留意 DashScope provider schema 调整、context 压缩策略默认值变化（参见 #7206）。

---

## 3. 项目进展

### 已合并/关闭的关键 PR（按影响面排序）

| PR | 主题 | 影响 |
|---|---|---|
| [#7293](https://github.com/agentscope-ai/QwenPaw/pull/7293) | CI: 将 `tests.yml` 集成测试拆分为 p0/p1/p2 三并行分片 | 加速 CI 反馈回路，提升开发效率 |
| [#7326](https://github.com/agentscope-ai/QwenPaw/pull/7326) | CI: nightly E2E 拆分为三个并行优先级分片 + fail-closed 摘要 | 杜绝 E2E 超时却误报成功的隐患（修复 #7229 报告的"假成功"问题） |
| [#7292](https://github.com/agentscope-ai/QwenPaw/pull/7292) | test(coverage): 新增 19 个单元测试文件（+5.02pp 覆盖率）+ 修复 `/root` 分类 bug | 后端单元覆盖率从 58.04% → 63.06% |
| [#7325](https://github.com/agentscope-ai/QwenPaw/pull/7325) | test(console): 扩展 Console 单元测试（+382 用例，+5.49pp） | 前端 Console 测试基线显著加强 |
| [#7250](https://github.com/agentscope-ai/QwenPaw/pull/7250) | fix(scripts): 修复本地测试 runner 跳套件 + 假成功问题 | 解决开发者本地预检盲区（修复 #7229） |
| [#7327](https://github.com/agentscope-ai/QwenPaw/pull/7327) | test(e2e): Console E2E 覆盖冲刺 23 用例 | Console E2E 覆盖率约 +6-7pp |
| [#7319](https://github.com/agentscope-ai/QwenPaw/pull/7319) | refactor(console): 跟踪后台 agent 任务运行 | 统一 TaskTracker 路由，为 #7280、#7321 的 UI 状态修复铺路 |
| [#7194](https://github.com/agentscope-ai/QwenPaw/pull/7194) | fix(workspace): 启动失败清理 cancellation-safe | 避免重载候选残留服务导致的状态泄漏 |
| [#7323](https://github.com/agentscope-ai/QwenPaw/pull/7323) | fix(installer): NSIS 调用进程排除 | Windows 安装器 #6810 系列修复的第一阶段 |
| [#7190](https://github.com/agentscope-ai/QwenPaw/pull/7190) | feat(qwenpaw-data): PyPI 运行时路径 + docker-compose 一键 Demo | 降低 GAAP 数据栈（Neo4j + PostgreSQL）接入门槛 |

### 进行中的关键 PR

- [#7341](https://github.com/agentscope-ai/QwenPaw/pull/7341) test(integration) coverage sprint batch 5：21 文件 / 495 用例
- [#7337](https://github.com/agentscope-ai/QwenPaw/pull/7337) fix(providers)：未列出的模型不再被默认限制为 8192 输出 token
- [#7320](https://github.com/agentscope-ai/QwenPaw/pull/7320) fix(provider)：恢复自定义 provider 的自动模型发现（修复 #7305）
- [#7328](https://github.com/agentscope-ai/QwenPaw/pull/7328) fix(ci)：桌面端与 Docker 镜像 Python 升至 3.13（OpenSSL 3.5.x，修复 #7298）
- [#7340](https://github.com/agentscope-ai/QwenPaw/pull/7340) feat(console)：聊天滚动锁定（呼应 #7339）
- [#7334](https://github.com/agentscope-ai/QwenPaw/pull/7334) fix(chat)：移动端编辑器控件优化（呼应 #7177、#7279）
- [#7331](https://github.com/agentscope-ai/QwenPaw/pull/7331) fix(context)：超大单行工具结果截断 + 工件保留（呼应 #7316 的诉求方向）

**整体进度**：项目处于 **v2.2.0 测试与稳定性加固阶段**。CI/CD 全面并行化、覆盖率从 ~58% 提升至 ~66%、安装器/打包/桌面/Docker 多端一致性问题被系统性处理——这是一次典型的"版本前最后一公里"质量冲刺。

---

## 4. 社区热点

### 讨论最热的 Issues

1. **[#6921 · 11 评论](https://github.com/agentscope-ai/QwenPaw/issues/6921)** —— 多步任务"规划即停"bug：模型输出"Let me do all three."后无实际执行，需手动发送"继续"。**这是 v2.1 反馈最集中的体验痛点**，长期未根本性修复。
2. **[#7318 · 6 评论](https://github.com/agentscope-ai/QwenPaw/issues/7318)** —— QwenPaw Hub 多租户版讨论，官方主动征集路线图输入。**这是 2.2.0 的标志性 feature**，关联三个长期 Issue（#6335、#5780、#4702）。
3. **[#7258 · 6 评论](https://github.com/agentscope-ai/QwenPaw/issues/7258)** —— 微信频道"显示思考过程"开关失效。
4. **[#6810 · 5 评论](https://github.com/agentscope-ai/QwenPaw/issues/6810)** —— Windows 安装/更新因浏览器扩展 NM host 锁文件失败。**有 fix PR 跟进**（#7323、#7336）。
5. **[#6490 · 5 评论](https://github.com/agentscope-ai/QwenPaw/issues/6490)** —— 内置 provider：火山引擎 Agent Plan + 小米 MiMo。

### 诉求分析

- **多租户/团队管理**：4 个高评论 Issue（#7318/#6335/#5780/#4702）形成统一诉求线，表明企业用户对 CoPaw 的关注度上升。
- **微信/IM 渠道可靠性**：#7258、#7158（钉钉群聊上下文模式）显示 IM 集成仍是高频使用场景，问题集中在"配置生效"与"会话边界"。
- **移动端 UX**：#7177、#7279、#7339 均针对桌面/移动端的可操作性与连续性，反映 v2.1 在 Web 端的真实使用渗透。

---

## 5. Bug 与稳定性

### 严重级（High）

| Issue | 描述 | 是否有 fix |
|---|---|---|
| [#6921](https://github.com/agentscope-ai/QwenPaw/issues/6921) | 多步任务规划后无提示中断，**核心交互链断裂** | ❌ 11 评论仍 OPEN |
| [#7298](https://github.com/agentscope-ai/QwenPaw/issues/7298) | 桌面端 & Docker 镜像 OpenSSL 3.0.x 被运营商 DPI 干扰，**桌面无 workaround** | ✅ [#7328](https://github.com/agentscope-ai/QwenPaw/pull/7328) Python 3.13 升级 |
| [#6810](https://github.com/agentscope-ai/QwenPaw/issues/6810) | Windows 安装/更新进程被锁，NSIS 弹错 | ✅ [#7323](https://github.com/agentscope-ai/QwenPaw/pull/7323) + [#7336](https://github.com/agentscope-ai/QwenPaw/pull/7336) |
| [#7310](https://github.com/agentscope-ai/QwenPaw/issues/7310) | 插件冲突导致软件崩溃，AI 自修复失败 | ❌ 仅临时禁用插件 |
| [#7312](https://github.com/agentscope-ai/QwenPaw/issues/7312) | Windows `execute_shell_command` 因继承 stdin pipe 卡死 | ❌ OPEN |
| [#7315 已合 PR #7337 修复](https://github.com/agentscope-ai/QwenPaw/pull/7337) | 模型默认 8192 输出 token 上限误注入 | ✅ #7337 |

### 中级（Medium）

| Issue | 描述 | 是否有 fix |
|---|---|---|
| [#7193](https://github.com/agentscope-ai/QwenPaw/issues/7193) | 2.1 网页版 agent 自动记忆搜索错乱（跨会话污染） | ❌ OPEN |
| [#7206](https://github.com/agentscope-ai/QwenPaw/issues/7206) | v2.1.1-beta.1 `/compact` 在 `compact_threshold_ratio=0.9` 时 pydantic 报错（v2.1.0 回滚后正常） | ❌ 已 CLOSED 但需确认根因 |
| [#7296](https://github.com/agentscope-ai/QwenPaw/issues/7296) | OpenAI Responses 多轮在无状态上游（OpenCode Zen / Muse Spark） 400 引用失败 | ❌ OPEN |
| [#7321](https://github.com/agentscope-ai/QwenPaw/issues/7321) | 工具调用结束后 UI 仍显示"执行中" | 部分由 #7319 改善 |
| [#7324](https://github.com/agentscope-ai/QwenPaw/issues/7324) | 定时任务执行成功但推送消息丢失（3 条仅收 2 条） | ❌ OPEN |
| [#7322](https://github.com/agentscope-ai/QwenPaw/issues/7322) | 知识库分类下上传文件未路由到对应目录 | ❌ OPEN |
| [#7212](https://github.com/agents

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目日报 · 2026-08-27

---

## 1. 今日速览

ZeroClaw 今日进入高频治理节奏，过去 24 小时共产生 **28 条 Issue 更新**（22 条活跃、6 条关闭）与 **50 条 PR 更新**（44 条待合并、6 条已合并/关闭），活跃度维持高位。议题重心明显偏向 **安全架构收口**、**RFC 决策流转** 与 **v0.8.5/v0.9.0 双轨里程碑治理**——当日即新开两条"实现批追踪器"（#10405、#10406），将已通过的 RFC #9998 与 #8780 转入落地阶段，体现"先决策后执行"的治理纪律。无新版本发布，但工程节奏稳健，整体项目健康度评估为 **良**：P0/P1 关键缺陷均有对应修复 PR 在排队，合入闸口（RFC #9990、#10366）正被积极讨论。

---

## 2. 版本发布

无（本周期内 0 个新 Release）。

---

## 3. 项目进展

当日合并/关闭的 6 条重要 PR/Issue 中，有 3 条直接推进了 **安全基线** 与 **运行时契约**：

| 编号 | 类型 | 关键贡献 | 链接 |
|---|---|---|---|
| #9587 | 重构（已关闭） | Gateway 重构：**强制 webhook 入口完成鉴权后再分派 Agent**，关闭了 #9565 暴露的三处未鉴权分派面 | [#9587](https://github.com/zeroclaw-labs/zeroclaw/issues/9587) |
| #9591 | 修复（已关闭） | Channels：reload 清空所有通道时同步清理 `CRON_CHANNEL_REGISTRY`，修复 S1 级工作流阻塞 | [#9591](https://github.com/zeroclaw-labs/zeroclaw/issues/9591) |
| #9110 | 修复（已关闭） | Lark：`verification_token` 改用 `constant_time_eq` 常量时间比较，关闭侧信道时序攻击面 | [#9110](https://github.com/zeroclaw-labs/zeroclaw/pull/9110) |
| #10235 | 文档（已关闭） | SECURITY.md：将 distroless 基础镜像由 `cc-debian12` 同步至实际构建产物 `Debian 13` | [#10235](https://github.com/zeroclaw-labs/zeroclaw/issues/10235) |
| #10396 | 修复（已关闭） | OpenAI Provider：不再为每条历史 assistant 消息回放 `reasoning_content`，显著降低重复 token 消耗 | [#10396](https://github.com/zeroclaw-labs/zeroclaw/issues/10396) |
| #10335 | 依赖（已关闭） | 依赖：`schemars` 在根 crate 改为按 `schema-export` feature 可选加载，避免污染默认构建 | [#10335](https://github.com/zeroclaw-labs/zeroclaw/pull/10335) |

**整体推进判断**：项目向 **"边界明确 + 最小特权"** 又迈进一步——本周连续完成 webhook 鉴权门、通道注册清理、Lark 时序比较、SECURITY.md 真实化四件安全向治理；运行时契约侧的 #10397（修 MCP envelope 重复载荷）、#10215（修同 turn 双发）也在同步推进。

---

## 4. 社区热点

按评论数排序的 Top 议题，均集中于 **架构决策与安全边界**：

| 排名 | 编号 | 评论 | 主题 | 链接 |
|---|---|---|---|---|
| 1 | #8780 | **21** | RFC: Gemini Live 实时语音到语音 broker 通道（v2 重写为 broker 契约） | [#8780](https://github.com/zeroclaw-labs/zeroclaw/issues/8780) |
| 2 | #8692 | **14** | Tracker: RFC/设计议题的 Maintainer 决策队列 | [#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) |
| 3 | #9600 | **13** | Tracker: 会话持久化契约所有权与分层顺序 | [#9600](https://github.com/zeroclaw-labs/zeroclaw/issues/9600) |
| 4 | #6996 | **12** | RFC: 细粒度沙箱策略（文件系统 + 网络限制） | [#6996](https://github.com/zeroclaw-labs/zeroclaw/issues/6996) |
| 5 | #9998 | **9** | RFC: 会话级持久化 Prompt 附件 | [#9998](https://github.com/zeroclaw-labs/zeroclaw/issues/9998) |
| 6 | #9990 | **8** | RFC: PR 风险分级与安全审批要求校准 | [#9990](https://github.com/zeroclaw-labs/zeroclaw/issues/9990) |
| 7 | #10230 | **5** | Bug: Daemon 启动/重载期间 Agent 初始化栈溢出（S1） | [#10230](https://github.com/zeroclaw-labs/zeroclaw/issues/10230) |
| 8 | #10346 | **3** | RFC: Gateway 与通道复用 heartbeat 工作者 MCP 缓存模式 | [#10346](https://github.com/zeroclaw-labs/zeroclaw/issues/10346) |

**诉求分析**：社区讨论正在从"功能请求"过渡到"治理与契约"层——最高热议题几乎全是 RFC 与 Tracker。这意味着 ZeroClaw 已度过早期功能铺开阶段，正以**架构治理 + 安全收口**为主旋律。同时，#8780 与 #9998 当日均派生出了实现追踪器（#10406、#10405），表明 RFC 流水线已落地为"决策 → 实现"两步闭环。

---

## 5. Bug 与稳定性

按严重程度分级。`★` 表示已有对应修复 PR 在排队或已落地。

### 🔴 S0 / S1 级（紧急）

| 编号 | 严重度 | 描述 | 修复状态 | 链接 |
|---|---|---|---|---|
| #10379 | **S0** 数据丢失/安全风险 | ZeroClaw Desktop 无法取消进行中的消息；输入框在 AI 处理中也无法排队新消息 | ❌ 无对应 PR | [#10379](https://github.com/zeroclaw-labs/zeroclaw/issues/10379) |
| #10230 | **S1** 工作流阻塞 | 在 daemon 运行期间从 ZeroCode 应用 Quickstart 配置，会因 `quickstart: apply` 路径触发 Tokio 栈溢出 | ⚠️ `r:needs-repro` | [#10230](https://github.com/zeroclaw-labs/zeroclaw/issues/10230) |

### 🟠 S2 级（行为降级）

| 编号 | 描述 | 修复状态 | 链接 |
|---|---|---|---|
| #10390 | 进入未激活的 Chat 面板会同步阻塞 ZeroCode 全局导航 | 🟡 进行中 | [#10390](https://github.com/zeroclaw-labs/zeroclaw/issues/10390) |
| #10349 | SOP 面板加载期间 ZeroCode 键盘与渲染冻结 | 🟡 进行中 | [#10349](https://github.com/zeroclaw-labs/zeroclaw/issues/10349) |
| #10186 | 终端兜底文本绕过 live delivery 边界，导致 `run_tool_call_loop` 重试耗尽时输出未走正式通道 | 🟡 进行中 | [#10186](https://github.com/zeroclaw-labs/zeroclaw/issues/10186) |

### 🟡 S3 级（次要 / 已修复）

| 编号 | 描述 | 修复状态 | 链接 |
|---|---|---|---|
| #10103 | ZeroCode Health 面板在法语/西班牙语下状态值对齐错位 | ✅ 已关闭 | [#10103](https://github.com/zeroclaw-labs/zeroclaw/issues/10103) |

**值得关注的修复 PR（已落地）**：
- **#10397** —— 修 MCP 工具结果存储：仅发送 `content[].text` 块而非整份 `CallToolResult` 信封，关闭 FastMCP 服务返回的载荷重复问题（[#10397](https://github.com/zeroclaw-labs/zeroclaw/pull/10397)）
- **#10262** —— `fix(rpc): close RPC connections on daemon reload and unstick zerocode quickstart`：就地 daemon reload 时关闭本地 socket 与 WSS RPC 连接，解除 ZeroCode Quickstart 卡死（[#10262](https://github.com/zeroclaw-labs/zeroclaw/pull/10262)）
- **#10215** —— 修运行时同 turn 双发：模型将相同文本同时放在 `content` 与 `send_via body` 时不再双向投递（[#10215](https://github.com/zeroclaw-labs/zeroclaw/pull/10215)）
- **#10391** —— 修 `Bounded` delegate 工具沙箱：当被委派方风险配置不同时，工具应在自身 workspace 运行（[#10391](https://github.com/zeroclaw-labs/zeroclaw/pull/10391)）

**稳定性建议**：#10379（S0）为用户可见的"卡死 + 数据丢失感"问题，建议维护者优先处理；#10230（S1 栈溢出）需尽快完成 repro。

---

## 6. 功能请求与路线图信号

### 已纳入活跃路线图并有对应 PR

| 需求 | RFC/Issue | 实现 PR | 状态 | 链接 |
|---|---|---|---|---|
| 会话级持久化 Prompt 附件 | #9998 | **#10407** | PR 当日新开 | [#10407](https://github.com/zeroclaw-labs/zeroclaw/pull/10407) |
| Gemini Live 实时语音 broker 通道 | #8780 | 待开（#10406 追踪器） | RFC v2 已通过，进入实施 | [#10406](https://github.com/zeroclaw-labs/zeroclaw/issues/10406) |
| ZeroRelay 安全传输（盲中继 + 原生 mTLS） | — | **#10142**（XL） | 待 Maintainer 审 | [#10142](https://github.com/zeroclaw-labs/zeroclaw/pull/10142) |
| Microsoft Teams 通道（Bot Framework） | — | **#9241**（XL） | 待作者更新 | [#9241](https://github.com/zeroclaw-labs/zeroclaw/pull/9241) |
| Git Channel 编入 `zeroclaw:debian` 镜像 | #10138 | — | ✅ 已关闭（需求已实现） | [#10138](https://github.com/zeroclaw-labs/zeroclaw/issues/10138) |
| ZeroCode 副本中 URL 可点击 | #10298 | — | 进行中 | [#10298](https://github.com/zeroclaw-labs/zeroclaw/issues/10298) |
| Telegram 未授权发送方可配置通知 | #10400 | — | 进行中 | [#10400](https://github.com/zeroclaw-labs/zeroclaw/issues/10400) |

### 路线图信号判断

- **v0.8.5 稳定线**（[#9459](https://github.com/zeroclaw-labs/zeroclaw/issues/9459)，截稿 8/30）：预期本周内收口，目前以"周切"节奏发布已就绪工作，不等待完整里程碑。
- **v0.9.0 队列**（[#7432](https://github.com/zeroclaw-labs/zeroclaw/issues/7432)）：鉴权、安全、网关、破坏性变更四大主线，#10142（ZeroRelay）、#9998（Prompt 附件）、#6996（细粒度沙箱）均为该版本候选。
- **ZeroCode 整合与硬化**（[#9010](https://github.com/zeroclaw-labs/zeroclaw/issues/9010)）：仍是独立里程碑，TUI 卡顿类问题（#10390、#10349）正在集中治理。

---

## 7. 用户反馈摘要

| 痛点 / 场景 | 来源 | 情绪倾向 |
|---|---|---|
| **桌面端无法取消消息、新输入无法排队**，严重拖慢日常对话节奏 | #10379 | 😡 强烈不满 |
| **ZeroCode TUI 在切换 Chat/SOP 面板时卡住**，键盘输入与渲染冻结 | #10349、#10390 | 😟 体验降级 |
| **Telegram 收到未授权发送者时通知文案不可定制**，且与实际鉴权路径不符 | #10400 | 😐 中性，建议改进 |
| **多语言下 UI 状态值对齐错位**（法/西） | #10103（已修） | 😊 修复后满意 |
| **本地 OpenAI 兼容 Provider（llama.cpp）下上下文用量条始终空白** | #9453 | 😐 数据缺失感 |
| **委派调用（Delegate）在工作空间隔离上存在漏洞** | #10391（已修） | 😌 修复中 |
| **SECURITY.md 与实际基础镜像版本不一致** | #10235（已修） | 😊 合规信任感提升 |

**主要用户画像**：以 **TUI/CLI 重度操作为主**，**桌面端用户**正在快速增长（#10379 反馈来自 ZeroClaw Desktop），**多语言**（法/西）与 **本地化 Provider**（llama.cpp）已成真实使用场景。

---

## 8. 待处理积压

按"重要 + 长期未响应"筛选，需维护者优先关注：

| 编号 | 类型 | 重要度 | 卡点 | 链接 |
|---|---|---|---|---|
| #10230 | Bug S1 | 🔴 | `r:needs-repro`，距首报已 6 天，仍需 maintainer 提供 repro 路径 | [#10230](https://github.com/zeroclaw-labs/zeroclaw/issues/10230) |
| #9453 | Bug | 🟠 | `status:blocked`，依赖 token 计数估算策略被阻塞超 1 个月 | [#9453](https://github.com/zeroclaw-labs/zeroclaw/pull/9453) |
| #10379 | Bug S0 | 🔴 | **无对应修复 PR**，桌面端取消与消息排队均不可用 | [#10379](https://github.com/zeroclaw-labs/zeroclaw/issues/10379) |
| #10366 | RFC | 🟡 | v2 修订后仍 `needs-maintainer-review`，PR 评审证据与时效性边界尚未决断 | [#10366](https://github.com/zeroclaw-labs/zeroclaw/issues/10366) |
| #10346 | RFC | 🟡 | `needs-maintainer-review`，网关与通道复用 heartbeat 缓存模式尚未拍板 | [#10346](https://github.com/zeroclaw-labs/zeroclaw/issues/10346) |
| #10142 | PR XL | 🟠 | `needs-maintainer-review`，ZeroRelay XL 大

</details>

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*