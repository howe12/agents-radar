# OpenClaw 生态日报 2026-07-27

> Issues: 348 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-07-27 02:22 UTC

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

# OpenClaw 项目动态日报 · 2026-07-27

> 数据范围：2026-07-26 ~ 2026-07-27 · 数据源：GitHub Issues / Pull Requests · 报告自动生成

---

## 1. 今日速览

OpenClaw 仓库在过去 24 小时保持**高强度活跃**：348 条 Issue 更新（241 新开/活跃、107 已关闭）与 500 条 PR 更新（154 待合并、346 已合并/关闭），**已关闭与已合并总量达到 453 条**，意味着项目当日净流出工单多于净流入，处于"清理与重构并行"的窗口期。Issues 端 P1 级会话状态/消息丢失类缺陷仍是社区关注焦点（Telegram 通道与 Codex app-server 路径相关报告集中）；PR 端 `steipete` 与 `clawsweeper` 主导了 Web UI 实验面板补齐、OpenAI 兼容性统一、会话元数据扫描性能优化等关键提交。**没有新版本发布**，当前主干版本仍停留在 `2026.7.2-beta.4` 阶段。

---

## 2. 版本发布

无（最近一次公开发布见 Issues 中的 `2026.7.2-beta.4` 报告，本日没有正式 `release` 标记）。

---

## 3. 项目进展

### 3.1 已合并/已关闭 PR（按影响力筛选）

| PR | 主题 | 影响 |
|---|---|---|
| [#114237](https://github.com/openclaw/openclaw/pull/114237) | `perf(sessions)`：ACP meta 读取停止全量扫描，`sessions.list` 由 O(rows²) 降为线性 | **性能** — 大 session 库下 JSON 解析开销显著下降 |
| [#114236](https://github.com/openclaw/openclaw/pull/114236) | `refactor(ai)`：统一 OpenAI Chat Completions 兼容性矩阵 | **正确性** — 消除 provider-owned 矩阵与传输端点策略的分歧 |
| [#114235](https://github.com/openclaw/openclaw/pull/114235) | `refactor(irc)`：将出站发送统一委托给 message adapter | **可维护性** — 移除 IRC 双重实现 |
| [#114233](https://github.com/openclaw/openclaw/pull/114233) | `feat(ui)`：补齐 Labs 实验面板（Tool Search / lean local-model tools / message audit） | **功能** — 实验特性集中化入口 |
| [#114229](https://github.com/openclaw/openclaw/pull/114229) | `refactor(meetings)`：Google Meet / Teams / Zoom 的 talk-back 就绪判断集中化 | **可维护性** — 修复跨会议插件的 readiness 漂移 |
| [#114225](https://github.com/openclaw/openclaw/pull/114225) | `fix(scripts)`：Blacksmith 不可用时回落到本地执行 | **开发体验** — 减少 CI 失败误报 |
| [#114228](https://github.com/openclaw/openclaw/pull/114228) | `refactor(config)`：拆解 config writer 通用基元 | **架构** — 为后续 write-intent 重构铺路 |
| [#114230](https://github.com/openclaw/openclaw/pull/114230) | `test(ai)`：冻结 Responses 流处理器一致性差异 | **测试** — 后续合并前的安全网 |
| [#114231](https://github.com/openclaw/openclaw/pull/114231) | `refactor(agents)`：澄清 `hasModelExtraParams` 命名语义 | **可读性** |
| [#113834](https://github.com/openclaw/openclaw/pull/113834) | `fix(ui)`：新 worktree 会话创建期间停留在 Coding | **UI** — 关闭 [#113825](https://github.com/openclaw/openclaw/issues/113825) |
| [#87254](https://github.com/openclaw/openclaw/pull/87254) | `fix(plugin-state)`：行上限命中时仅淘汰当前 namespace；将 Telegram 持久消息缓存下调至 3000 | **稳定性** |
| [#87781](https://github.com/openclaw/openclaw/pull/87781) | `fix(codex)`：原生流期间避免误判 turn 完成 | **稳定性** — Codex 长时间运行卡死缓解 |
| [#98673](https://github.com/openclaw/openclaw/issues/98673) | 6.11 版本 `sanitizeContentBlocksImages` 把文本工具结果误转 image | **已关闭修复** |
| [#99263](https://github.com/openclaw/openclaw/issues/99263) | Node 26 下 `FileHandle closed during GC` 崩溃 | **已关闭修复** |
| [#87299](https://github.com/openclaw/openclaw/issues/87299) | Telegram 大会话中的 "Something went wrong" | **已关闭** |
| [#92760](https://github.com/openclaw/openclaw/issues/92760) | CLI `openclaw status` 误显 200K context window | **已关闭修复** |
| [#26370](https://github.com/openclaw/openclaw/issues/26370) | 多用户场景下 cron 每用户隔离 | **已关闭（per-agent jobs.json 已实现）** |

### 3.2 整体推进度

- **核心运行时**：OpenAI 兼容性矩阵统一、ACP 元数据扫描性能提升属于"地基级"改进，单点 PR 价值高。
- **UI/UX**：Web UI 在 24h 内集中修复 5+ 项交互细节（composer 自动扩展、新会话草稿持久化、worktree 标签页定位等）。
- **跨插件一致性**：IRC、Meeting、Config writer 三处统一化重构，体现维护团队在"消除实现重复"上的系统化投入。
- **生态补齐**：vCard 媒体（[#97166](https://github.com/openclaw/openclaw/pull/97166)）、持久 status_changed 事件（[#114167](https://github.com/openclaw/openclaw/pull/114167)）等小颗粒度 PR 显示社区贡献活跃。

---

## 4. 社区热点

### 4.1 讨论最活跃的 Issue

| 排名 | Issue | 评论数 | 👍 | 类别 | 链接 |
|---|---|---|---|---|---|
| 1 | Linux/Windows Clawdbot 客户端缺失 | **115** | 80 | 长期 enhancement | [#75](https://github.com/openclaw/openclaw/issues/75) |
| 2 | 工具输出在 ANSI/长会话中坍缩为 image 占位 | 24 | 2 | P1 数据完整性 | [#99241](https://github.com/openclaw/openclaw/issues/99241) |
| 3 | 会话第二句 "reply session initialization conflicted" | 15 | 1 | P1 跨通道 bug | [#102020](https://github.com/openclaw/openclaw/issues/102020) |
| 4 | Active Memory + Codex app-server 高延迟与卡死 | 13 | 2 | P1 性能/崩溃 | [#86996](https://github.com/openclaw/openclaw/issues/86996) |
| 5 | Telegram 升级到 5.20 后回复重复 2-10x | 12 | 1 | P1 回归 | [#86519](https://github.com/openclaw/openclaw/issues/86519) |
| 6 | 180s 单段 compaction 超时一刀切 | 12 | 3 | P1 资源 | [#92043](https://github.com/openclaw/openclaw/issues/92043) |
| 7 | Codex `notification:turn/started` 后静默 | 12 | 1 | P1 stuck session | [#85251](https://github.com/openclaw/openclaw/issues/85251) |

### 4.2 诉求解读

- **跨平台桌面端（#75）**：80 个 👍、115 条评论，已持续超过半年，是仓库历史上讨论度最高的增强请求之一。社区的真实需求是"macOS 之外的同等体验"，但官方至今未给出明确路线图承诺。
- **会话完整性系列**：评论数 Top10 中，#99241、#102020、#86519、#85251、#86963 共同指向"**消息丢失与会话状态污染**"这一系统性问题，反映用户在长会话/Telegram 高频场景下的核心痛点。
- **Codex 路径**：#86996、#85251、#86963、#95840 等集中在 Codex app-server 与 Active Memory 联动，反映 OpenAI 兼容 provider + 本地 Codex 组合下的稳定性挑战。

---

## 5. Bug 与稳定性（按严重度排序）

### 5.1 P1 — 严重（生产可能数据丢失/崩溃）

| Issue | 描述 | 是否已有 fix PR | 链接 |
|---|---|---|---|
| [#113434](https://github.com/openclaw/openclaw/issues/113434) | Codex `sessions.reset` 重用已退役 ID，`2026.7.2-beta.4` 目录扫描耗尽 Gateway RAM | ❌ 无 | — |
| [#113315](https://github.com/openclaw/openclaw/issues/113315) | Telegram 入站更新 offset 推进但无 ingress/spool，永久丢失 | ❌ 无 | — |
| [#112423](https://github.com/openclaw/openclaw/issues/112423) | 大 SQLite transcript 归档阻塞 gateway 事件循环 | ❌ 无 | — |
| [#112696](https://github.com/openclaw/openclaw/issues/112696) | Control UI 2026.7.1-2 多 agent 下头像/会话列表回归 | ❌ 无 | — |
| [#111519](https://github.com/openclaw/openclaw/issues/111519) | Telegram DM 回复在 stale DM-scope 清理后回落（2026.7.2-beta.3 回归） | ❌ 无 | — |
| [#106403](https://github.com/openclaw/openclaw/issues/106403) | Terminal-main 协调门在 mtime race 下静默重置健康主会话 | ❌ 无 | — |
| [#99241](https://github.com/openclaw/openclaw/issues/99241) | 工具输出坍缩为 image 占位，agent 不可读 | ❌ 无 | — |
| [#102020](https://github.com/openclaw/open

---

## 横向生态对比

# 个人 AI 助手 / 自主智能体开源生态 · 横向对比分析

**报告日期：2026-07-27 · 数据范围：过去 24 小时 GitHub 动态**

---

## 1. 生态全景

今天跟踪的 13 个项目共同呈现出一个明显的 **"沉淀期"信号**：**全部 13 个项目均无新版本发布**，但仓库内活跃度并未衰减——日均流转工单与 PR 总量保持在 700+ 量级。这表明整个生态正从"功能扩张"切换到 **"协议对齐、安全加固、可观测性补齐"** 的质量收敛阶段。命名上 `Claw` 系（OpenClaw / PicoClaw / NanoClaw / NullClaw / IronClaw / ZeroClaw / ZeptoClaw）占据绝对多数，社区已形成隐式的"基线仓库"共识。MCP 兼容、多 Profile/多租户、跨通道消息完整性、安全沙箱四条主线在多个项目里同步浮现。

---

## 2. 各项目活跃度对比

| 项目 | Issues 更新 | PR 更新 | 今日合并/关闭 | Release | 健康度 | 当前阶段 |
|---|---|---|---|---|---|---|
| **OpenClaw** ⭐ | 348 (241 活跃 / 107 关闭) | 500 (154 待合并 / 346 关闭) | 453 | 无 | ⭐⭐⭐⭐ | 高强度重构 |
| **ZeroClaw** | 50 | 50 (48 待合并 / 2 关闭) | 2 | 无（v0.8.4 准备） | ⭐⭐⭐⭐ | 发版前冲刺 |
| **Hermes Agent** | 50 (39 活跃 / 11 关闭) | 50 (37 待合并 / 13 关闭) | 24 | 无 | ⭐⭐⭐⭐ | 稳定性 sprint |
| **NanoBot** | 10 (7 关闭) | 29 (5 待合并 / 24 关闭) | 31 | 无 | ⭐⭐⭐⭐⭐ | 高产出清扫 |
| **IronClaw** | 5 | 18 (12 待合并 / 6 关闭) | 6 | 无（release PR 积压 24 天） | ⭐⭐⭐ | 工程密集 |
| **CoPaw / QwenPaw** | 17 (14 活跃 / 3 关闭) | 9 (全部 OPEN) | 0 | 无 | ⭐⭐⭐ | v2.0.x 修回归 |
| **PicoClaw** | 4 | 7 | 0 | 无 | ⭐⭐⭐ | 中等活跃 |
| **NanoClaw** | 2 (新开 P0) | 8 (2 关闭) | 2 | 无 | ⭐⭐⭐ | 修复密集 |
| **Moltis** | 0 | 8 (全部 OPEN) | 0 | 无 | ⭐⭐½ | 评审积压 |
| **LobsterAI** | 1+ | 8 (1 关闭 / 7 stale) | 1 | 无 | ⭐⭐ | 维护停滞 |
| **NullClaw** | 1 | 0 | 0 | 无 | ⭐ | 静默 + P0 崩溃 |
| **TinyClaw** | 0 | 0 | 0 | 无 | — | 完全静默 |
| **ZeptoClaw** | 0 | 0 | 0 | 无 | — | 完全静默 |

> 数据小计：当日 13 个项目合计 ≈ **546 条 Issue 更新 + 686 条 PR 更新**，其中 PR 已合并/关闭 ≈ 514 条。

---

## 3. OpenClaw 在生态中的定位

OpenClaw 是当之无愧的"基线仓库"——**单日 Issue + PR 总量（848 条）**接近第二梯队（ZeroClaw、Hermes Agent 各 100 条）的 8 倍以上，是 NanoBot 的 13 倍。其差异化优势主要体现在三方面：

1. **覆盖面最广**：同时承担 OpenAI 兼容性、ACP 元数据、Web UI Labs、IRC/Meeting/Config writer 多插件统一重构，单日触及 5+ 架构层。
2. **贡献者多元化**：`steipete`、`clawsweeper` 等高频维护者 + 社区 PR 并行；治理上呈现"清理 + 重构"双轨。
3. **基线版本化节奏**：主干停留在 `2026.7.2-beta.4`，已进入 patch 候选窗口。

**与同类对比的关键差距**：
- **vs. NanoBot（HKUDS）**：OpenClaw 更"基础设施化"，NanoBot 更"学术实验化"（P1 安全加固 + MCP 严格 Schema 兼容是 NanoBot 今日主线）。
- **vs. Hermes Agent**：OpenClaw 是"广度优先"，Hermes 是"profile 生命周期深度重构"（ralton 8 Issue RFC 一次性成型）。
- **vs. ZeroClaw**：ZeroClaw 在安全/可观测/可发布工程上节奏更快（v0.8.4 准备窗口），OpenClaw 在多通道整合上更深。
- **vs. IronClaw**：IronClaw 是 Rust 原生 + 错误恢复 epic（#6284），OpenClaw 则是多语言 polyglot + 通用架构。

**社区规模信号**：OpenClaw 单 Issue 最高互动（#75: 115 评论 / 80 👍）是 Hermes Agent 头部 Issue（#68871: 15 评论 / 13 👍）的近 10 倍——但同时 #75 已开 **超过 6 个月未给出明确路线图**，这也是"基线仓库"的隐忧：**用户期待高，路线图透明度低**。

---

## 4. 共同关注的技术方向

下表为多项目同步浮现的共性需求：

| 方向 | 涉及项目 | 共性诉求 |
|---|---|---|
| **MCP 协议兼容性** | NanoBot (#5057)、Hermes (#55081, #37501)、CoPaw (#6470, 6468, 6469)、ZeroClaw (#8642, #8731) | Provider 严格性差异（Kimi/Moonshot 拒绝非标准 `$ref`）、stdio 路由错乱、SSE 硬编码忽略 YAML 配置、schema 克隆 RSS 无界增长 |
| **Telegram / 多通道消息完整性** | OpenClaw (#87299, #86519, #111519)、ZeroClaw (#5514, #6350)、Hermes (#62936) | 重复回复 2-10×、>15MB 上传超时、allowed-numbers 对 LID 失效、媒体组合多模态回合缺失 |
| **安全沙箱与 SSRF** | NanoBot (#5095, #5101)、ZeroClaw (#9233, #9114, #8826)、PicoClaw (#3297)、Moltis (#1170) | Landlock 自锁、image_gen URL 服务端可控、`/sh` 在群聊越权、远程执行默认禁用 |
| **多 Profile / 多租户生命周期** | Hermes (#72376–72383 整组 RFC)、OpenClaw (#26370)、NanoBot (#4928) | 克隆 vs 备份语义歧义、unified session 心跳路由、per-agent jobs.json |
| **Cron / 调度可靠性** | Hermes (#70646, #70989)、CoPaw (#6471, #6481)、LobsterAI (#1256)、IronClaw (cron 相邻) | APScheduler AsyncIOScheduler 误触发、secondary-profile 静默不执行、workdir 污染、自然语言 cron |
| **i18n 与本地化** | Hermes (#23243, #72390)、PicoClaw (#3296)、CoPaw (#6478, #6484) | zh-TW、cs、繁中 + i18n 框架 PR 长期待合并 |
| **可观测性 / 状态语义** | NanoBot (#5102)、Hermes (#51184)、OpenClaw (多 Issue)、IronClaw (#6690) | `lastStatus: ok` 但实际未投递、耗尽 credits 无任何反馈、cron 假阳性 |
| **跨平台矩阵（Win/macOS/ARM）** | OpenClaw (#75)、LobsterAI (#273)、ZeroClaw (#7461, #7462, #7911)、NullClaw (#976) | Windows 74 测试失败、ARM aarch64 SIGSEGV、Termux 安装未知二进制 |
| **ACP 双向协议** | Moltis (#1169, #1171)、OpenClaw (隐含引用) | Moltis 自身作为 Agent 被外部 harness 调用；选择器并入聊天模型选择器 |

> **观察**：9 个共性方向中有 6 个与"可靠性 + 跨平台 + 安全"相关，**只有 1 个（MCP）属于协议层新挑战**。这说明生态已度过"协议设计期"，进入"协议适配期"。

---

## 5. 差异化定位分析

| 项目 | 语言/架构 | 目标用户 | 核心定位 | 差异化关键词 |
|---|---|---|---|---|
| **OpenClaw** | 多语言 polyglot | 通用个人 AI 助手用户 | **基线基础设施** | 多通道整合、OpenAI 兼容、ACP、Web UI Labs |
| **NanoBot** | Python（HKUDS） | 研究型 / 国内 provider 用户 | **学术实验 + 国内 Provider 严格性** | MCP $ref 修复、SSRF 加固、Heartbeat 路由 |
| **Hermes Agent** | Python | 多 Profile 部署者、Desktop 用户 | **企业级多租户生命周期** | Profile RFC、Desktop i18n、gateway/cron 矩阵 |
| **PicoClaw** | Go | 轻量部署、追求稳定 | **轻量 + Go 工具链治理** | SplitMessage 鲁棒性、Exa 搜索、捷克语 |
| **NanoClaw** | Python/Node | 跨区域 / 多时区运维 | **路由语义化 + 迁移体验** | explicit-destinations、per-group timezone |
| **NullClaw** | Rust | ARM 服务器用户 | **极简架构（当前陷入

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报

**报告日期：2026-07-27**
**项目：HKUDS/nanobot**

---

## 一、今日速览

NanoBot 在过去 24 小时呈现出**高强度、高产出**的开发节奏：29 个 PR 更新（24 个已合并/关闭，5 个待合并）远超 Issue 更新量（10 条），且 Issue 端实现"7 关闭 / 3 活跃"的净负增长，整体仓库健康度显著提升。**安全、Provider 适配与 WebUI 体验**是今日 PR 的三大主轴，包括图像 URL 下载加固（P1 安全修复）、MCP 严格 Schema 兼容、Heartbeat 在 unified session 下的路由修复等多项关键 Bug 被快速关闭。社区侧出现 1 条新 Bug 报告（#5102 WebUI cron 推送静默丢失），另有两个长期开放 Issue（#1012、#4792）仍未被合并的修复吸收，需维护者跟进。无新版本发布。

---

## 二、版本发布

**今日无新版本发布。**

过去 24 小时内没有 tag / release 动作。由于今日合并了多项 P1 级安全与稳定性修复（#5095、#5054、#5056、#5057 等），维护者可能在下个工作日打 patch 版本（推测为 v0.2.x → v0.2.x+1）。建议关注后续 release notes。

---

## 三、项目进展（今日合并/关闭的重要 PR）

### 3.1 安全与 Provider 兼容（核心进展）

| PR | 标题 | 影响 |
|---|---|---|
| [#5095](https://github.com/HKUDS/nanobot/pull/5095) | fix(security): 加固生成图片 URL 下载 | P1 安全修复：限制下载器、校验重定向、拒绝 loopback/私有/CGNAT/metadata/IPv6 unspecified 目标、32 MiB 流式上限、字节校验 |
| [#5101](https://github.com/HKUDS/nanobot/pull/5101) | fix(image): 遵守 provider proxy 用于 URL 下载 | P1：与 #5095 配套，区分"DNS-pinned 直连"与"通过 provider proxy"两条路径 |
| [#5057](https://github.com/HKUDS/nanobot/pull/5057) | fix(mcp): 归一化本地 schema $ref | P1：修复 #5040，将非 `#/$defs/` 的 JSON Pointer 重写为合规形式，避免 Kimi/Moonshot 等严格 provider 拒绝整次 chat |

> **意义**：图片下载安全 + MCP 严格 provider 兼容这两条线今日一次清零，显著降低用户在生产环境被 SSRF 探测或被国内 Provider 拒服务的风险。

### 3.2 Agent 运行时正确性

| PR | 标题 | 影响 |
|---|---|---|
| [#5056](https://github.com/HKUDS/nanobot/pull/5056) | fix(agent): 保留 length recovery 期间的输出 | P1：修复 #5051，将 `finish_reason="length"` 后多段连续恢复内容合并而非只保留末段 |
| [#5054](https://github.com/HKUDS/nanobot/pull/5054) | fix(memory): 推进 Dream 进度穿越 no-op 批次 | P1：修复 #5041，避免已完成但无 diff 的批次永远重选导致历史条目被饿死 |
| [#5084](https://github.com/HKUDS/nanobot/pull/5084) | fix(agent): 保留 pending 消息运行时上下文 | P1：修复 #4064，解析 `RuntimeContextProvider` 与受信 metadata，确保 mid-turn 注入消息携带 sender/channel/chat |
| [#4928](https://github.com/HKUDS/nanobot/pull/4928) | fix(heartbeat): unified session 路由到 last channel | P1：修复 #4924，统一会话下持久化最近 `channel:chat_id` 路由并用作心跳投递目标 |

### 3.3 渠道（Channel）层修复

| PR | 标题 |
|---|---|
| [#5069](https://github.com/HKUDS/nanobot/pull/5069) | fix(channels): 取消连接后忽略迟到的确认（P1，避免取消后被凭证劫持） |
| [#5088](https://github.com/HKUDS/nanobot/pull/5088) | fix(pairing): 容忍 `approved: null`/`pending: null` |
| [#5087](https://github.com/HKUDS/nanobot/pull/5087) | fix(triggers): 容忍 `runHistory: null` |
| [#5089](https://github.com/HKUDS/nanobot/pull/5089) | fix(feishu): 容忍卡片 `multi_url`/列表字段为 null |
| [#4446](https://github.com/HKUDS/nanobot/pull/4446) | feat(dingtalk): 增加 `disable_private_chat` + 群回复 @提及发送者 |

### 3.4 功能与体验

- [#4939](https://github.com/HKUDS/nanobot/pull/4939) — Quick Start 支持 Codex OAuth（无需 API Key），降低 OpenAI 接入门槛
- [#4625](https://github.com/HKUDS/nanobot/pull/4625) — 关闭 [#4107](https://github.com/HKUDS/nanobot/issues/4107)，允许为 bwrap sandbox 配置额外 bind roots（`~/.local/bin`、`~/.cargo/bin` 等）
- [#4656](https://github.com/HKUDS/nanobot/pull/4656) — Gemini Flash 图像模型透传 `aspect_ratio`/`image_size`
- [#5100](https://github.com/HKUDS/nanobot/pull/5100) — WebUI 移动端长消息不再撑开对话列（grid item shrink 约束）
- [#5036](https://github.com/HKUDS/nanobot/pull/5036) — 空闲 compaction 扫描间隔可配置，树莓派空闲 CPU 占用 30-40% 痛点缓解

**整体评价**：今日单日合并约 18-20 个 P1/P2 修复 + 增强，**项目稳定性向前迈出了一大步**，特别在"统一会话、消息队列、MCP 兼容"三条长期隐含缺陷线路上完成阶段性清扫。

---

## 四、社区热点

### 4.1 评论最活跃

| Issue | 评论数 | 关注度 | 链接 |
|---|---|---|---|
| [#4924](https://github.com/HKUDS/nanobot/issues/4924) unifiedSession heartbeat 失败 | 4 | 👍0 | 已通过 #4928 修复并关闭 |
| [#1012](https://github.com/HKUDS/nanobot/issues/1012) 子代理可配置 profile（stale） | 2 | 👍0 | **仍未解决**，详见第八节 |
| [#4107](https://github.com/HKUDS/nanobot/issues/4107) bwrap 额外挂载 | 2 | 👍1 | 已通过 #4625 关闭 |
| [#4603](https://github.com/HKUDS/nanobot/issues/4603) WebUI tool_call.id 突变 | 2 | 👍0 | 已关闭 |
| [#4792](https://github.com/HKUDS/nanobot/issues/4792) /stop 静默丢弃队列 | 2 | 👍0 | **仍开放**，无修复 PR |

### 4.2 诉求分析

- **#1012（Subagent profiles）**：社区希望 subagent 可按"研究型/编码型/审阅型"差异化配置工具与预加载 skills，目前所有 subagent 完全同质化。虽被标 stale（自 2 月起 5 个月），但社区需求持续有效。
- **#4792（/stop 队列丢失）**：与 #4064 形成对比——4064 的"上下文丢失"已修，但 **/stop 主动清空队列时未 re-publish** 这一永久消息丢失行为仍未修复。用户在意"主动取消"与"消息丢失"应解耦。
- **#5102（cron 推送静默丢失）**：今日新 Bug，反映 job state 与用户感知不一致（`lastStatus: ok` 但实际未投递），暴露了 cron/websocket 通道的错误传播缺口。

---

## 五、Bug 与稳定性

按严重程度排列（**严重 → 轻微**）：

| # | 严重度 | 描述 | Fix PR | 状态 |
|---|---|---|---|---|
| [Issue #4792](https://github.com/HKUDS/nanobot/issues/4792) | 🔴 High | `/stop` 永久丢弃 pending queue 消息 | ❌ 无 | OPEN |
| [Issue #5102](https://github.com/HKUDS/nanobot/issues/5102) | 🟠 High | webui cron 推送结果丢失，`lastStatus` 错误显示成功 | ❌ 无 | OPEN（新建） |
| [Issue #5051](https://github.com/HKUDS/nanobot/issues/5051) → [PR #5056](https://github.com/HKUDS/nanobot/pull/5056) | 🟠 High | length recovery 只保留最后一段，前段丢失 | ✅ #5056 | CLOSED |
| [Issue #5041](https://github.com/HKUDS/nanobot/issues/5041) → [PR #5054](https://github.com/HKUDS/nanobot/pull/5054) | 🟠 High | no-op Dream 批次饿死后续历史 | ✅ #5054 | CLOSED |
| [Issue #5040](https://github.com/HKUDS/nanobot/issues/5040) → [PR #5057](https://github.com/HKUDS/nanobot/pull/5057) | 🟡 Mid | MCP $ref 兼容性问题，整次 chat 被拒 | ✅ #5057 | CLOSED |
| [Issue #4064](https://github.com/HKUDS/nanobot/issues/4064) → [PR #5084](https://github.com/HKUDS/nanobot/pull/5084) | 🟡 Mid | mid-turn 消息丢失运行时上下文 | ✅ #5084 | CLOSED |
| [Issue #4924](https://github.com/HKUDS/nanobot/issues/4924) → [PR #4928](https://github.com/HKUDS/nanobot/pull/4928) | 🟡 Mid | unified session 下心跳投递失败 | ✅ #4928 | CLOSED |
| 配对/触发/飞书卡片 null 容忍（#5088/#5087/#5089） | 🟢 Low | JSON null 字段崩溃 | ✅ 三 PR 均已合并 | CLOSED |

**回归风险提示**：今日大量修改集中在 channel 与 agent loop，#5054（Dream cursor）与 #5099（待合并的 Dream 历史保留）存在功能重叠，建议维护者审阅两者交互，避免重复 PR 同时合入造成冲突。

---

## 六、功能请求与路线图信号

| 需求 | Issue | 信号强度 | 是否已有对应 PR |
|---|---|---|---|
| Subagent profiles（差异化工具/技能/模型） | [#1012](https://github.com/HKUDS/nanobot/issues/1012) | 中（社区持续呼声，但标 stale） | ❌ 无 |
| 统一扩展平台（first-class extensions） | — | 高（大型 feature） | ✅ [#5098](https://github.com/HKUDS/nanobot/pull/5098) OPEN |
| Skills 缓存（减少扫描/YAML 解析） | — | 中 | ✅ [#4301](https://github.com/HKUDS/nanobot/pull/4301) OPEN |
| Dream 内存守护（保护未处理历史） | — | 中 | ✅ [#5099](https://github.com/HKUDS/nanobot/pull/5099) OPEN |
| DingTalk 私聊控制 + @提及 | — | 中 | ✅ [#4446](https://github.com/HKUDS/nanobot/pull/4446) 已合并 |
| Idle compaction 可配置 | — | 中（RPi 用户痛点） | ✅ [#5036](https://github.com/HKUDS/nanobot/pull/5036) 已合并 |
| Codex OAuth Quick Start | — | 中 | ✅ [#4939](https://github.com/HKUDS/nanobot/pull/4939) 已合并 |

**路线图信号**：#5098「统一扩展平台」是一个**架构级**提案（transactional package lifecycle、scoped Pi/OpenClaw 兼容），如果合入将定义 nanobot 下一阶段的能力边界，值得社区重点 review。

---

## 七、用户反馈摘要

提炼自 Issues 与 PR 描述中的真实声音：

1. **RPi 资源敏感**（[#5036](https://github.com/HKUDS/nanobot/pull/5036)）："Running on Raspberry Pi, idle 30-40% of 1 CPU"——表明**轻量部署**是重要使用场景，需要可调 idle compaction。

2. **国内 Provider 兼容性痛点**（[#5040](https://github.com/HKUDS/nanobot/issues/5040)）：一个 MCP 工具的非标准 `$ref` 即可让 Kimi/Moonshot 拒绝整次请求——**Schema 严格性差异**是国内 LLM 集成常见摩擦点，#5057 是关键缓解。

3. **WebUI 移动端可用性**（[#5100](https://github.com/HKUDS/nanobot/pull/5100)）：长 Markdown 把聊天视口和 composer 同时撑宽——说明**有用户在手机端使用 WebUI**，并已影响体验。

4. **Cron/Channel 静默失败**（[#5102](https://github.com/HKUDS/nanobot/issues/5102)）：用户对 `lastStatus: ok` 但实际未送达感到困惑——**可观测性（observability）**是一类持续痛点，需要 status 字段语义更紧贴实际送达。

5. **取消/中断不应丢消息**（[#4792](https://github.com/HKUDS/nanobot/issues/4792)）：用户期望被丢弃的 pending 消息至少 re-publish 到总线上而不是永久消失——**中断语义清晰化**被反复诉求。

---

## 八、待处理积压（提醒维护者关注）

| ID | 类型 | 标题 | 开放时长（估算） | 风险 |
|---|---|---|---|---|
| [#1012](https://github.com/HKUDS/nanobot/issues/1012) | Issue | Subagent profiles with configurable tools and skills | ~5 个月（自 2026-02-22，已标 stale） | 社区需求明确但被搁置 |
| [#4792](https://github.com/HKUDS/nanobot/issues/4792) | Issue | `/stop` silently discards pending queue messages | ~3 周 | 🔴 用户消息永久丢失 |
| [#5102](https://github.com/HKUDS/nanobot/issues/5102) | Issue | webui cron 推送结果丢失 | <1 天（新） | 🟠 状态可观测性误导 |
| [#5098](https://github.com/HKUDS/nanobot/pull/5098) | PR | feat(extensions): unified extension platform | 1 天（OPEN，有 conflict 标记） | 大型架构变更需深度 review |
| [#4301](https://github.com/HKUDS/nanobot/pull/4301) | PR | cache skills loader entries and metadata | ~1.5 个月 | conflict 标记，可能与近期 skills 相关变更冲突 |
| [#5099](

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目日报 · 2026-07-27

## 一、今日速览

Hermes Agent 今日保持高强度的工程迭代节奏：**50 条 Issues 更新（39 活跃 / 11 已关闭）+ 50 条 PR 更新（37 待合并 / 13 已合并或关闭）**，整体活跃度处于"繁忙且有序"区间。讨论焦点高度集中于三类主题：①**配置文件与多 profile 生命周期重构**（ralton 一口气提交了 8 个关联 Issue 形成完整 RFC）；②**gateway / cron / 消息投递**相关 Bug 集中收尾（多条 P1/P2 PR 已合并）；③**i18n / Desktop 体验**类工单获得显著关注（中文翻译、Electron 升级、弹窗滚动）。值得关注的是**零新版本发布**，但合并的 PR 数量足以构成一次"隐性"补丁轮次。

---

## 二、版本发布

⚠️ 今日**无新版本发布**。但鉴于已合并 PR 的覆盖面（详见下文），社区预期下一次发版将是一次以"稳定性 + profile 重构"为重心的维护型 Release。

---

## 三、项目进展（今日合并/关闭的重要 PR）

### 3.1 P1/P2 关键修复已落地

| PR | 标题 | 影响范围 |
|---|---|---|
| [#70987](https://github.com/NousResearch/hermes-agent/pull/70987) | gateway 断网致命错误后不再"沉默失聪" | 防止重连监视器 wedge |
| [#70646](https://github.com/NousResearch/hermes-agent/pull/70646) | `multiplex_profiles` 下每个 profile 的 cron 都会被 tick | 修复 secondary-profile 任务静默不执行 |
| [#70989](https://github.com/NousResearch/hermes-agent/pull/70989) | cron 任务 workdir 隔离到 session，避免污染 gateway | 进程级 cwd 泄漏修复 |
| [#71782](https://github.com/NousResearch/hermes-agent/pull/71782) | OpenRouter 辅助调用携带 sticky routing key | 配套完成 #70820 |
| [#72170](https://github.com/NousResearch/hermes-agent/pull/72170) | `MEDIA:` 文件投递跨平台稳定化（Discord / Feishu 等 6 个修复合集） | 解决静默附件丢失 |
| [#72192](https://github.com/NousResearch/hermes-agent/pull/72192) | `hermes update` 后自动重启被托管的 backend | systemd 单元 + 手动启动进程都覆盖 |
| [#67192](https://github.com/NousResearch/hermes-agent/pull/67192) | `.env` 引号/UTF-16、aux key_env、profile-aware system prompt | P2 配置批次 |

### 3.2 Desktop / 安装侧修复

- [#67369](https://github.com/NousResearch/hermes-agent/pull/67369) GUI bootstrap 解析本地化 PowerShell 输出 + 刷新可变安装缓存（Windows 友好性）
- [#71104](https://github.com/NousResearch/hermes-agent/pull/71104) Desktop 启动握手改用轻量 `/api/health`，不再误杀正在 warm-up 的 backend
- [#65239](https://github.com/NousResearch/hermes-agent/pull/65239) Dashboard 新会话后正确重绘 TUI
- [#69796](https://github.com/NousResearch/hermes-agent/pull/69796) Desktop clarify 卡片脏数据清洗

### 3.3 项目整体推进度

今日一次性消化掉了 **gateway、cron、消息投递、配置加载、Desktop 启动握手**五条关键链路的 P0/P1/P2 缺陷，相当于一次中等规模的稳定性 sprint。代码量集中在 `gateway/run.py`、`cron/scheduler.py`、`hermes_cli/backup.py`、`hermes_cli/profiles.py` 等核心模块。

---

## 四、社区热点

### 4.1 🔥 焦点议题 Top 1 — Buzz 消息集成

- **[#68871](https://github.com/NousResearch/hermes-agent/issues/68871) [Feature]: Add messaging support for Buzz**（15 评论 / 13 👍）
- 作者：mwhuss | 创建 2026-07-21
- 诉求：Block 开源的本地协作平台 Buzz（自托管、人/Agent 共享房间）希望被 Hermes 原生集成。一旦落地，Hermes Agent 将获得"团队级 Agent 协作"的差异化能力。

### 4.2 配置文件/Profile 体系重构（ralton 系列 8 连发）

| Issue | 主题 |
|---|---|
| [#72376](https://github.com/NousResearch/hermes-agent/issues/72376) | RFC: 分离 profile 克隆与备份恢复契约 |
| [#72377](https://github.com/NousResearch/hermes-agent/issues/72377) | Refactor: profile 克隆变成显式 clone-domain 服务 |
| [#72378](https://github.com/NousResearch/hermes-agent/issues/72378) | Refactor: backup/snapshot/restore 独立为 recovery domain |
| [#72379](https://github.com/NousResearch/hermes-agent/issues/72379) | CLI 命令无歧义化 |
| [#72380](https://github.com/NousResearch/hermes-agent/issues/72380) | Dashboard/Desktop 同步新契约 |
| [#72381](https://github.com/NousResearch/hermes-agent/issues/72381) | 安全不变量 + E2E 测试矩阵 |
| [#72382](https://github.com/NousResearch/hermes-agent/issues/72382) | 文档统一 |
| [#72383](https://github.com/NousResearch/hermes-agent/issues/72383) | 主 Issue：分离克隆与备份恢复 |

➡ **诉求本质**：当前 `create_profile()` 与 `backup.py` 在 copy/exclusion policy 上存在重叠语义，CLI 用户在"克隆"和"备份"两种生命周期操作上存在歧义。ralton 通过 RFC + 重构 + 测试 + 文档四个维度一次性给出完整方案，**已全部 CLOSED**，意味着方案进入实施阶段。

### 4.3 其他高评论议题

- [#62936](https://github.com/NousResearch/hermes-agent/issues/62936) Telegram >15 MB 上传超时（7 评论，PTB `media_write_timeout` 未设置）
- [#12651](https://github.com/NousResearch/hermes-agent/issues/12651) `.env` 净化器未删除 `KEY=***` 占位符（5 评论）
- [#71576](https://github.com/NousResearch/hermes-agent/issues/71576) Nous Portal 不应用 Anthropic 粘性路由（已 CLOSED，缓存命中率 39% vs 100%）

---

## 五、Bug 与稳定性

按严重度排序：

### P0 / P1（今日已修复）

| 等级 | Issue/PR | 状态 |
|---|---|---|
| P1 | [#70987](https://github.com/NousResearch/hermes-agent/pull/70987) gateway 重连 wedge | ✅ Merged |
| P0 | [#71576](https://github.com/NousResearch/hermes-agent/issues/71576) Nous Portal 路由（成本 ~2.3x） | ✅ Closed |
| P0 | [#67369](https://github.com/NousResearch/hermes-agent/pull/67369) Windows GUI bootstrap 本地化编码 | ✅ Merged |
| P2 | [#70646](https://github.com/NousResearch/hermes-agent/pull/70646) 多 profile cron 未 tick | ✅ Merged |

### P2（仍 OPEN，**无对应 fix PR**）

| Issue | 描述 |
|---|---|
| [#62936](https://github.com/NousResearch/hermes-agent/issues/62936) | Telegram >15 MB 上传永远 TimedOut |
| [#12651](https://github.com/NousResearch/hermes-agent/issues/12651) | `.env` 净化器占位符泄漏 |
| [#51184](https://github.com/NousResearch/hermes-agent/issues/51184) | cron + LINE adapter 假阳性投递成功 |
| [#30626](https://github.com/NousResearch/hermes-agent/issues/30626) | `hermes gateway run` profile-blind，启动后忽略切换 |
| [#48689](https://github.com/NousResearch/hermes-agent/issues/48689) | `hermes doctor` 误报 ui-tui / gemini |
| [#37501](https://github.com/NousResearch/hermes-agent/issues/37501) | `hermes mcp add` 多个 `--env` 只保留最后一个 |
| [#61334](https://github.com/NousResearch/hermes-agent/issues/61334) | Anthropic-compatible 上 reasoning_effort minimal/max 静默退化为 medium |
| [#56802](https://github.com/NousResearch/hermes-agent/issues/56802) | 多 profile kanban notify/wake 错位 |
| [#55081](https://github.com/NousResearch/hermes-agent/issues/55081) | MCP schema 把 `definitions` 改写成 `$defs` |
| [#42727](https://github.com/NousResearch/hermes-agent/issues/42727) | agent 自配置会持久化红色 credential 占位符（安全类） |
| [#67165](https://github.com/NousResearch/hermes-agent/issues/67165) | cua-driver macOS ScreenCaptureKit display_count=0 |
| [#72391](https://github.com/NousResearch/hermes-agent/issues/72391) | Windows Desktop WebSocket ready race |

### 观察

P0/P1 缺陷修复闭环迅速，但 **P2 缺陷中近一半仍 OPEN 超过 1 个月**（如 #12651 已开 3 个月、#30626 已开 2 个月），存在**P2 缺陷积压风险**。特别是涉及**凭据处理**和**schema 标准化**的 Bug（#42727、#55081、#37501），具有较高的安全与兼容性影响。

---

## 六、功能请求与路线图信号

### 6.1 大概率进入下一版本

| 优先级 | 提案 | 理由 |
|---|---|---|
| 🟢 高 | **Profile 克隆 / 备份恢复分离重构**（ralton 8 Issue） | 全部 CLOSED，方案完整，已具备实施基础 |
| 🟢 高 | **Telegram 大文件上传修复**（#62936） | 用户高频痛点，已被多个 sweeper 标签追踪 |
| 🟢 高 | **Desktop 找一找 (Ctrl/Cmd+F)**（[#46169](https://github.com/NousResearch/hermes-agent/issues/46169)） | 已 CLOSED 但尚无对应 PR 合并 |
| 🟡 中 | **Buzz 消息集成**（#68871） | 社区关注度高（13 👍），但需 P3 决策 |
| 🟡 中 | **i18n 框架**（[#23243](https://github.com/NousResearch/hermes-agent/pull/23243)） | PR 已开，处于 OPEN |
| 🟡 中 | **Desktop 中文 slash 命令翻译**（[#72390](https://github.com/NousResearch/hermes-agent/pull/72390)） | 已提交完整 90 条翻译 |
| 🟡 中 | **delegate_task 模型覆盖**（[#72394](https://github.com/NousResearch/hermes-agent/issues/72394)） | 信任/审计角度新视角 |
| 🟢 高 | **GUI-only Desktop 安装**（[#50643](https://github.com/NousResearch/hermes-agent/issues/50643)） | 2 评论 + 3 👍，贴近远程部署场景 |

### 6.2 待决策/低概率

- **CLI `ACP / /model` 含冒号模型名解析**（[#70650](https://github.com/NousResearch/hermes-agent/issues/70650)） — 需要字符串解析层重构
- **Cron `no_agent` 抑制 header/footer**（[#72395](https://github.com/NousResearch/hermes-agent/issues/72395)） — 小优化，但有 1 评论
- **GUI-only Desktop**（#50643） — 标为 duplicate，需要确认主 Issue

---

## 七、用户反馈摘要

### 7.1 真实用户痛点

1. **多 profile 部署的隐式陷阱**（#56802、#30626、#51184、#72391）
   用户在多 Telegram bot + 共享 kanban 的生产部署中反复遭遇 *notifier 耦合到 dispatcher*、*profile 切换不生效*、*Windows WebSocket ready race* 等问题，**生产场景下稳定性仍是最大短板**。

2. **配置 / 凭据管理一致性**（#12651、#37501、#42727）
   `.env` 净化器、CLI flag 覆盖、agent 自配置误持久化三类问题表明 **配置层缺乏统一的不变量约束**，用户对"哪些会被持久化、哪些是占位符"缺乏可预期性。

3. **大模型 / 路由成本**（#71576）
   Nous Portal 与 OpenRouter 的缓存命中率差异（39% vs 100%）导致成本 2.3x 增加，**性能敏感型用户对此高度敏感**，该 Issue 虽已 CLOSED 但已被 sweeper 标记。

4. **桌面端体验细节**
   - 自动滚动让键盘选中的项保持可见（[#72398](https://github.com/NousResearch/hermes-agent/pull/72398)）
   - 中文本地化（[#72390](https://github.com/NousResearch/hermes-agent/pull/72390)）
   - Cmd+F 全文查找（#46169）
   - 反映 Desktop 用户规模正在增长，**i18n 与 UX 已是中期路线图方向**。

5. **MCP 生态兼容**（#37501、#55081、#70640）
   OAuth scope 未被强制 / schema 字段改写 / 多个 `--env` 被吞 — MCP 集成层的"边界完整性"亟需专项加固。

### 7.2 满意侧

- PR #67369、#71104、#69796 等 PR 标题里反复出现"salvage … preserve authorship"的措辞，**社区对"维护者抢救外部贡献 + 保留署名"的协作流程给予了正面反馈**。
- Buzz 集成 Issue 13 👍 反映出对 **Agent 团队协作场景**的强需求与期待。

---

## 八、待处理积压（提醒维护者关注）

> 以下 Issue/PR 已在系统中存在较长时间且未关闭，需重点关注：

| 链接 | 创建日期 | 已开天数（约） | 关注理由 |
|---|---|---|---|
| [#12651](https://github.com/NousResearch/hermes-agent/issues/12651) | 2026-04-19 | **~99 天** | `.env` 净化器长期不修，**安全相关** |
| [#30626](https://github.com/NousResearch/hermes-agent/issues/30626) | 2026-05-22 | ~66 天 | gateway profile-blind，影响所有多 profile 部署 |
| [#3506](https://github.com/NousResearch/hermes-agent/issues/3506) | 2026-03-28 | ~121 天 | 持久化反馈路由架构级提议，**仅 4 评论但 0 👍 仍 OPEN** |
| [#56802](https://github.com/NousResearch/hermes-agent/issues/56802) | 2026-07-02 | 25 天 | 多 profile kanban 复杂缺陷，无 fix PR |
| [#55081](https://github.com/NousResearch/hermes-agent/issues/55081) | 2026-06-29 | 28 天 | MCP schema 标准化，影响所有 MCP 工具 |
| [#48689](https://github.com/NousResearch/hermes-agent/issues/48689) | 2026-06-18 | 39 天 | `hermes doctor` 误报，影响升级信心 |
| [#61334](https://github.com/NousResearch/hermes-agent/issues/61334) | 2026-07-09 | 18 天 | reasoning_effort 静默退化，**模型行为不可预期** |
| [#42727](https://github.com/NousResearch/hermes-agent/issues/42727) | 2026-06-09 | 48 天 | agent 自配置会持久化红色占位符，**安全风险** |
| [#23243](https://github.com/NousResearch/hermes-agent/pull/23243) | 2026-05-10 | 79 天 | i18n 框架 PR 待合并，规模较大需评审 |
| [#71410](https://github.com/NousResearch/hermes-agent/pull/71410) | 2026-07-25 | 2 天 | `/model` 别称跨 host API key 泄漏，**安全边界** |

### 维护者行动建议

1. **优先 triage #12651、#42727** — 安全/凭据类 P2 应在下一版本前关闭；
2. **推进 #23243 i18n 框架评审** — 关系到中文 PR #72390 等下游工作的合并节奏；
3. **关注 #3506 长期搁置** — 122 天未关闭，建议维护者给出明确处置决定（拒绝 / 推迟 / 接受）；
4. **为 #56802、#55081 分配 owner** — 防止 P2 缺陷进一步滑向 P1。

---

📌 **总结**：Hermes Agent 今日项目健康度评分 **⭐⭐⭐⭐☆（4/5）**。稳定性 sprint 进展显著、Profile 重构蓝图清晰、社区讨论聚焦；但 P2 缺陷积压、i18n 框架评审滞后、个别安全相关 Issue 长期 OPEN 是当前主要风险点。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目日报 · 2026-07-27

> 数据来源：[sipeed/picoclaw](https://github.com/sipeed/picoclaw) GitHub 仓库 · 统计周期：过去 24 小时

---

## 1. 今日速览

PicoClaw 今日整体处于**中等活跃度**的工作状态。过去 24 小时内共发生 4 次 Issue 更新与 7 次 PR 更新，无新版本发布。社区活动呈现两条主线：一是**安全与稳定性修复**（涉及 Go 工具链升级、Token 刷新、SplitMessage 死循环、远程执行边界加固等多个高敏感问题）；二是**生态扩展**（新增 Exa 网页搜索提供商、AI Router 预设接入请求）。值得注意的是，PR #3248（Go 1.25.12 漏洞修复）已被关闭，需维护者确认是否被其他途径吸收；同期多个 Issue 被标记为 `[stale]`，提示项目响应积压值得关注。

---

## 2. 版本发布

**本周期无新版本发布。**

建议关注以下合并中的 PR，其完成可能驱动下一个 patch 版本：
- [#3295](https://github.com/sipeed/picoclaw/pull/3295) SplitMessage 死循环修复
- [#3297](https://github.com/sipeed/picoclaw/pull/3297) 远程提示与执行边界安全加固（涉及配置 schema v4 迁移）

---

## 3. 项目进展

### 已关闭的重要变更

- **[#3248](https://github.com/sipeed/picoclaw/pull/3248) bump Go to 1.25.12（已关闭）** — 作者 afjcjsbx 提出将 Go 工具链从 1.25.11 升级到 1.25.12，修复 `govulncheck` 报告的两项标准库漏洞：`GO-2026-5856`（crypto/tls）与 `GO-2026-4970`（os）。**该 PR 状态为 CLOSED 而非 MERGED**，建议维护者澄清：是否改走其他渠道完成升级，或 PR 被误关。

### 今日新提交的重要 PR（待合并）

| PR | 主题 | 推进内容 |
|---|---|---|
| [#3295](https://github.com/sipeed/picoclaw/pull/3295) | 防止 SplitMessage 在超大围栏头时挂起 | 修复消息分发的稳定性缺陷，含回归测试 |
| [#3297](https://github.com/sipeed/picoclaw/pull/3297) | 加固远程提示与执行边界 | 默认禁用远程执行；独立审批；强化来源策略；配置 schema v4 迁移 |
| [#3299](https://github.com/sipeed/picoclaw/pull/3299) | 新增原生 Exa 网页搜索提供商 | 工具生态扩展，支持 `d/w/m/y` 范围筛选 |
| [#3296](https://github.com/sipeed/picoclaw/pull/3296) | 完善捷克语（cs）代码包裹标签 | i18n 覆盖度提升 |

**整体评估**：项目在稳定性、安全性、国际化方面均有实质性推进，PR 平均待审时间较短，反映维护响应相对积极。

---

## 4. 社区热点

本周期 Issues/PRs 评论数普遍较低（多为 0–2 条），无明显高热度话题。从**主题关注度**与**作者活跃度**两个维度，热点如下：

- **🔥 安全合规话题**：[#3297](https://github.com/sipeed/picoclaw/pull/3297) — 远程执行加固涉及默认行为变更与 schema 迁移，预期将引发后续讨论，建议关注。
- **🔥 网关可用性话题**：[#3265](https://github.com/sipeed/picoclaw/issues/3265) — 未配置 deltachat 仍报错，阻塞用户启动 Gateway。
- **🔥 生态集成话题**：[#3298](https://github.com/sipeed/picoclaw/issues/3298) 与 [#3299](https://github.com/sipeed/picoclaw/pull/3299) — 同时出现 AI Router 预设接入与 Exa 提供商，反映社区对扩展工具/模型生态的强烈需求。

---

## 5. Bug 与稳定性

按严重程度排列：

### 🔴 高严重度

- **[#3264](https://github.com/sipeed/picoclaw/issues/3264) SplitMessage 在超大围栏代码头信息字符串时陷入死循环**  
  作者 floze-the-genius 报告 `channels.SplitMessage` 在围栏开启标记的 info string 跨越分割点时，回退逻辑会重复添加完整围栏头导致剩余输入永远无法消化，最终挂起。  
  ✅ **已有对应修复 PR**：[#3295](https://github.com/sipeed/picoclaw/pull/3295) by ErzerLP — 引入有界原始分割兜底，确保总能取得进展。

- **[#3265](https://github.com/sipeed/picoclaw/issues/3265) Gateway 启动失败：`channel deltachat has unknown type deltachat`**  
  作者 Cipher208 报告即便 config.json 中未配置 deltachat，Gateway 启动仍报该错误。  
  ⚠️ **尚无对应修复 PR**，且已被标记 `[stale]`，需维护者介入。

### 🟡 中严重度

- **[#3252](https://github.com/sipeed/picoclaw/issues/3252) splitKnownProviderModel 错误剥离 provider 前缀**（已关闭）  
  `pkg/providers/factory.go` 在 model ID 内含已知 provider 别名时错误剥离前缀。该 Issue 已被关闭，但**需确认是否已合并对应修复**，否则属于"关闭但未根治"风险。

- **[#3267](https://github.com/sipeed/picoclaw/pull/3267) 修复 antigravity token 刷新 scope 错误**（待合并）  
  导致 antigravity 通道鉴权后刷新失败，表现为 `PERMISSION_DENIED`。**已有 PR，等待审查。**

- **[#3202](https://github.com/sipeed/picoclaw/pull/3202) 修复 ID 规范化下划线处理**（待合并）  
  `NormalizeAgentID`/`NormalizeAccountID` 文档承诺输出匹配 `^[a-z0-9][a-z0-9_-]{0,63}$`，实际未正确剥离首尾下划线。**已有 PR，等待审查，已被标记 `[stale]`。**

---

## 6. 功能请求与路线图信号

| 请求 | 内容 | 落地可能性 |
|---|---|---|
| [#3298](https://github.com/sipeed/picoclaw/issues/3298) | 将 AI Router 加入 OpenAI 兼容 provider 预设（作者主动认领维护） | 🟢 高 — 作者声明愿意贡献，且实现成本较低 |
| [#3299](https://github.com/sipeed/picoclaw/pull/3299) | 新增 Exa 作为原生网页搜索提供商 | 🟢 高 — PR 已提交，实现完整（认证/筛选/配置均覆盖） |
| [#3296](https://github.com/sipeed/picoclaw/pull/3296) | 补齐捷克语 i18n 标签 | 🟢 高 — PR 已提交 |

**路线图信号**：社区对**工具/模型生态扩展**的需求明确（搜索、模型路由），同时**安全加固与配置演进**正在推进（schema v4 迁移）。

---

## 7. 用户反馈摘要

- **可用性痛点**：[#3265](https://github.com/sipeed/picoclaw/issues/3265) 用户期望"未配置某 channel 时不应报错"，反映出对**启动期容错**与**配置语义清晰度**的需求。
- **稳定性痛点**：[#3264](https://github.com/sipeed/picoclaw/issues/3264) SplitMessage 死循环属于**潜在拒绝服务**级别问题，反映用户对消息分发鲁棒性的担忧。
- **集成诉求**：[#3298](https://github.com/sipeed/picoclaw/issues/3298) 用户希望"通过命名路由选择模型"而非仅能配置 `api_base`，体现对**配置可读性**与**模型路由产品化**的期待。
- **i18n 投入**：[#3296](https://github.com/sipeed/picoclaw/pull/3296) 持续有贡献者补全本地化，覆盖度稳步提升。

---

## 8. 待处理积压

以下 Issue/PR 已被标记为 `[stale]`，**超过 7 天未获维护者响应**，建议优先 review：

| 编号 | 类型 | 标题 | 创建日期 |
|---|---|---|---|
| [#3265](https://github.com/sipeed/picoclaw/issues/3265) | Issue | Gateway 启动失败（deltachat） | 2026-07-19 |
| [#3264](https://github.com/sipeed/picoclaw/issues/3264) | Issue | SplitMessage 死循环（已有 fix PR #3295） | 2026-07-18 |
| [#3267](https://github.com/sipeed/picoclaw/pull/3267) | PR | 修复 antigravity token scope | 2026-07-19 |
| [#3202](https://github.com/sipeed/picoclaw/pull/3202) | PR | ID 规范化下划线处理 | 2026-07-01 |
| [#3252](https://github.com/sipeed/picoclaw/issues/3252) | Issue | provider 前缀剥离（已关闭，需确认修复落地） | 2026-07-12 |
| [#3248](https://github.com/sipeed/picoclaw/pull/3248) | PR | Go 1.25.12 升级（**已关闭，状态异常**） | 2026-07-10 |

**维护者建议**：
1. 优先审查 [#3295](https://github.com/sipeed/picoclaw/pull/3295) 与 [#3264](https://github.com/sipeed/picoclaw/issues/3264) 配对闭环，关闭高严重度死循环 bug；
2. 澄清 [#3248](https://github.com/sipeed/picoclaw/pull/3248) 关闭原因，确认 Go 漏洞修复是否已就位；
3. 对 [#3265](https://github.com/sipeed/picoclaw/issues/3265) 这类阻塞启动的问题给出明确反馈。

---

*报告生成时间：2026-07-27 · 数据基线：GitHub Issues/PRs 过去 24 小时活动*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目日报 · 2026-07-27

> 数据来源：GitHub 仓库 `qwibitai/nanoclaw`，统计窗口 2026-07-26 ~ 2026-07-27

---

## 1. 今日速览

NanoClaw 今日呈现出**"修复密集、迁移阵痛"**的典型中期迭代状态：过去 24 小时内共有 8 个 PR 流转（其中 2 个已关闭），2 个新 Issue 集中指向同一根因——**最近一次"explicit-destinations"破坏性变更引发的消息静默丢失回归**。无新版本发布，但合并/关闭动作（含去重回复修复 #3028、时区覆盖特性 #3125）说明主干在持续向前推进。整体活跃度处于**中高水位**，健康度良好，但需重点关注迁移路径的平滑性。

---

## 2. 版本发布

**无新版本发布。** 当前主干尚未发布新 Release，所有改动正在 PR 评审中累积，建议关注下一批合并节点。

---

## 3. 项目进展

今日有 **2 个 PR 关闭**，均带有具体推进意义：

| PR | 类型 | 关键价值 |
|---|---|---|
| [#3028](https://github.com/qwibitai/nanoclaw/pull/3028) ✅ CLOSED | Fix | 修复 `send_message` 之后触发"重包装"二次回复导致的**重复回复**问题。捕获本轮外发消息序列，从源头消除重发 nudge。 |
| [#3125](https://github.com/qwibitai/nanoclaw/pull/3125) ✅ CLOSED | Feature | 引入**每 agent-group 时区覆盖**（`container_configs` + migration 020），`ncl groups config update --timezone <IANA>` 可设置/清空，并设置 agent 调用方审批闸门。 |

**进度评估：** 完成度可圈可点——一个长期隐藏的 UX 体验 Bug（重复回复）得到根治；一个可观测性 / 多区域运维特性（per-group 时区）落地，反映项目向"可控、配置化"方向稳步推进。

---

## 4. 社区热点

虽然 24 小时评论数为 0（Issues 均无人接话），但**话题集中度极高**——两条新 Issue 与两条相关 PR 形成显著的"显式目的地（explicit-destinations）"议题簇：

- [#3140](https://github.com/qwibitai/nanoclaw/issues/3140) — 升级后所有 agent 回复被静默丢弃（grtwrn 提出）
- [#3136](https://github.com/qwibitai/nanoclaw/issues/3136) — `sendToDestination` 错误地继承外批次 `in_reply_to` 导致消息丢失（JoshuaJFogg 提出）
- [#3139](https://github.com/qwibitai/nanoclaw/pull/3139) — 修复 WhatsApp 共享号模式误吞 `fromMe`（grtwrn 同步提交）
- [#3137](https://github.com/qwibitai/nanoclaw/pull/3137) — 修复 engagement 一致性并暴露自服务 wiring 控制（Koshkoshinsk 提交）

**诉求分析：** 用户已不满足于"能跑通"，开始要求**消息路由可解释、迁移可回滚、配置可自服务**。这是成熟用户群与平台级抽象成熟期的典型信号。

---

## 5. Bug 与稳定性

| 严重度 | Issue/PR | 描述 | 是否已有 Fix PR |
|---|---|---|---|
| 🔴 P0 — 数据丢失 | [#3140](https://github.com/qwibitai/nanoclaw/issues/3140) | 升级后"显式目的地"破坏性变更使所有 agent 回复被静默丢弃 | ❌ 暂无直接修复 PR |
| 🔴 P0 — 数据丢失 | [#3136](https://github.com/qwibitai/nanoclaw/issues/3136) | `sendToDestination` 继承错误 `in_reply_to` 导致 a2a 回程路由失败 | ❌ 暂无直接修复 PR |
| 🟠 P1 — 体验性 | [#3028](https://github.com/qwibitai/nanoclaw/pull/3028) ✅ | `send_message` 后产生重复回复 | ✅ 已关闭 |
| 🟡 P2 — 通道 | [#3139](https://github.com/qwibitai/nanoclaw/pull/3139) | WhatsApp 共享号模式吞掉 owner 的 `fromMe` 消息 | 🟡 PR 待合并 |
| 🟡 P2 — SDK | [#3138](https://github.com/qwibitai/nanoclaw/pull/3138) | chat-sdk 附件无 `fetchData` 时未回退到 `fetch(url)` | 🟡 PR 待合并 |
| 🟢 P3 — 噪音 | [#3126](https://github.com/qwibitai/nanoclaw/pull/3126) | agent-runner 可能交付空白或 `<internal>` 思考内容 | 🟡 PR 待合并 |

**风险提示：** 两条 P0 集中在同一变更（explicit-destinations），强烈建议维护者**优先处理并加发 Patch Release**，否则将影响所有升级用户。

---

## 6. 功能请求与路线图信号

从今日开放 PR 的方向可推断近期路线图：

- **🧭 多区域 / 多时区运维** — [#3125](https://github.com/qwibitai/nanoclaw/pull/3125) ✅ 已落地时区覆盖，下一步预计看到"按组的语言/工作日历"等扩展。
- **🔌 通道生态扩展** — [#3050](https://github.com/qwibitai/nanoclaw/pull/3050) 新增 **Dial** 至 channel picker 及其 wizard/skills（`runChannelSkill` 模型）。这是首个落地的"feature skill"完整示例，可能成为后续通道集成的标准模板。
- **🛠️ OpenCode 兼容层** — [#3122](https://github.com/qwibitai/nanoclaw/pull/3122) 推进 main 分支兼容、自定义端点传输与记忆对齐，意味 OpenCode 将被进一步拉齐为主流后端之一。
- **🧩 代理自服务治理** — [#3137](https://github.com/qwibitai/nanoclaw/pull/3137) 让 group 级 agent 可自检 wiring 并申请 engagement 策略变更，标志产品向"代理可治理"演进。

---

## 7. 用户反馈摘要

- **痛点 ①：迁移不可见** — 用户升级后"毫无预警地丢消息"（#3140），缺乏迁移前的目的地自检/告警机制。
- **痛点 ②：路由语义不透明** — `in_reply_to` 被默默作为回程路由依据（#3136），说明内部协议字段对外部产生了隐式契约，文档/类型约束不足。
- **痛点 ③：通道行为差异** — WhatsApp 共享号场景下 owner 消息被静默丢弃（#3139），体现"小众部署模式"覆盖不足。
- **正向信号：** 已合并的时区覆盖特性（#3125）显示用户对**精细化管控**有强烈需求，对 CLI 工作流（`ncl groups config update`）接受度高。

> 备注：今日 Issues 全部为 0 评论，原始讨论需直接进入 Issue 跟踪。

---

## 8. 待处理积压提醒

按时间倒序，关注长期未关闭的活跃 PR：

- **⏳ [#3028](https://github.com/qwibitai/nanoclaw/pull/3028)** — 已关闭 ✅（提示闭环）
- **⏳ [#3050](https://github.com/qwibitai/nanoclaw/pull/3050)** — 创建于 2026-07-14，**已 12 天未合并**，涉及新通道集成模板，建议评审加速。
- **⏳ [#3122](https://github.com/qwibitai/nanoclaw/pull/3122)** — 创建于 2026-07-23，OpenCode 兼容层，影响主后端选项，优先级应高。
- **⏳ [#3125](https://github.com/qwibitai/nanoclaw/pull/3125)** — 创建于 2026-07-24，**已合并关闭** ✅。
- **⏳ [#3126](https://github.com/qwibitai/nanoclaw/pull/3126)** — 创建于 2026-07-24，涉及 agent 静默/思考泄露，**问题可观测但未上 release**，建议跟踪。
- **⏳ [#3137](https://github.com/qwibitai/nanoclaw/pull/3137)** / **[#3138](https://github.com/qwibitai/nanoclaw/pull/3138)** / **[#3139](https://github.com/qwibitai/nanoclaw/pull/3139)** — 均为今日提交，等待首次评审。

**维护者建议：** 建议在 48 小时内对 #3140 / #3136 形成明确修复 PR，并就 explicit-destinations 变更发布**迁移指南 + 兼容性补丁**，避免 P0 体验性事故扩散。

---

*报告由 GitHub 数据自动汇总生成，统计口径以仓库 Issue/PR 时间戳为准。*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目日报
**日期：2026-07-27**
**数据来源：[github.com/nullclaw/nullclaw](https://github.com/nullclaw/nullclaw)**

---

## 1. 今日速览

NullClaw 今日整体处于**低活跃静默期**。过去 24 小时内仅有 1 条 Issue 被更新，**无 PR 活动、无版本发布**。社区活跃度评级为 **⚪ 低活跃**。当前唯一的讨论焦点仍停留在一个高优先级的稳定性缺陷上（Issue #976），该 Issue 自 7 月 16 日创建至今已 **11 天仍未关闭**，且无对应的修复 PR 提交，提示项目维护响应存在滞后。

---

## 2. 版本发布

🚫 **今日无新版本发布。** 当前最新版仍为社区报告存在缺陷的 `v2026.5.29`。

---

## 3. 项目进展

🚫 **今日无 PR 合并或关闭记录**，项目代码主干今日**无任何可观测的推进**。

- 待合并 PR：0
- 已合并/关闭 PR：0
- 提交活动：未统计（无数据）

**评估**：项目推进度 = 0/7，连续多日缺乏代码层活动，建议关注维护者是否在处理关键 Issue 而暂未提交补丁。

---

## 4. 社区热点

### 🔥 唯一活跃话题：Telegram 入站消息导致 SIGSEGV（连续 11 天讨论中）

| 项目 | 内容 |
|---|---|
| **Issue** | [#976 SIGSEGV on every inbound Telegram message](https://github.com/nullclaw/nullclaw/issues/976) |
| **状态** | 🔴 OPEN |
| **作者** | @wonhotoss |
| **创建/最后更新** | 2026-07-16 / 2026-07-26 |
| **评论数** | 3 |
| **👍 反应** | 0 |

**诉求分析**：用户报告 aarch64 Linux 环境下使用 `nullclaw v2026.5.29` 作为 Telegram 网关时，每条入站消息都会导致 SIGSEGV。系统配置 `Restart=always`，形成 crash-loop，**消息被静默丢弃，用户得不到任何响应**。从评论数（3 条）可推断已有其他维护者或用户介入排查，进入了技术讨论阶段，但仍未形成修复方案。

---

## 5. Bug 与稳定性

### 🔴 P0 - 严重崩溃缺陷（影响生产可用性）

| 严重度 | Bug | 影响 | Fix PR |
|---|---|---|---|
| **P0 致命** | [#976 SIGSEGV on every inbound Telegram message](https://github.com/nullclaw/nullclaw/issues/976) | aarch64 Linux 下，每条入站 Telegram 消息均导致进程崩溃；以 systemd `Restart=always` 运行会形成 crash-loop，消息被静默丢失，用户完全无法使用 Telegram 通道 | ❌ 无 |

**技术根因（来自 Issue 描述）**：入站工作线程（inbound worker thread）创建时分配的栈空间仅约 ~512 KB，在 aarch64 架构下不足以容纳调用栈，导致栈溢出触发 SIGSEGV。

**风险评估**：
- 若该 Bug 真实存在且为 aarch64 架构特有，则**所有在 ARM 服务器（如 AWS Graviton、Oracle Ampere、树莓派集群等）部署 NullClaw 的 Telegram 用户均受影响**。
- 由于是静默丢消息 + 静默崩溃，可能有更多用户受影响但未报告。
- 建议尽快定位是特定调用深度导致，还是 `pthread_attr_setstacksize` 配置缺失。

---

## 6. 功能请求与路线图信号

🚫 **今日无新功能请求 Issue 被打开或讨论**。

考虑到仅有一个崩溃类 Issue 占据社区注意力，**功能层面的路线图信号当前被稳定性问题覆盖**。建议维护者在修复 P0 Bug 后，主动发布状态更新或路线图公告，以重振社区信心。

---

## 7. 用户反馈摘要

基于 Issue #976 的可见评论提炼：

**核心痛点**：
- 😡 **静默失败**：进程崩溃 → 自动重启 → 消息丢失 → 用户无任何反馈，严重损害产品可信度。
- 😡 **生产环境不可用**：Telegram 作为常用入口通道，崩溃导致整个机器人形同失效。
- 😟 **架构覆盖不全**：用户在 aarch64（ARM）环境部署遇阻，暗示项目可能在 x86_64 主导开发，缺乏 ARM CI 覆盖。

**使用场景**：
- 以 `nullclaw gateway` systemd 服务方式常驻部署在 ARM Linux 服务器上，作为 Telegram bot 接入 AI 网关。

**满意度**：🔴 **极低** — 用户在最基础的"收发消息"层面就遇到了崩溃，几乎所有功能均无法体验。

---

## 8. 待处理积压

| 类型 | 编号 | 标题 | 存在时间 | 风险 |
|---|---|---|---|---|
| 🐛 Bug | [#976](https://github.com/nullclaw/nullclaw/issues/976) | SIGSEGV on every inbound Telegram message | **11 天** | 🔴 阻断 Telegram 通道生产使用 |

**维护者提醒**：
1. ⚠️ **Issue #976 已开 11 天仍无修复 PR**，且为 P0 级崩溃问题，建议立即响应。
2. 建议同时排查：是否仅 aarch64 触发？是否有针对 ARM 架构的 CI 矩阵？
3. 建议在 `v2026.5.29` 之后发布 patch 版本（如 `v2026.5.30`）并附详细 changelog，恢复用户信任。

---

## 📊 项目健康度仪表盘

| 指标 | 数值 | 评估 |
|---|---|---|
| 今日活跃度 | 1 Issue 更新 / 0 PR | ⚪ 低 |
| 版本节奏 | 无新版本 | ⚪ 停滞 |
| 关键 Bug 响应 | 11 天未修复 P0 | 🔴 滞后 |
| PR 流转 | 无活动 | ⚪ 停滞 |
| 社区讨论 | 仅 1 个话题 | ⚪ 静默 |

**综合评级**：🟡 **需关注** — 项目当前处于稳定性危机窗口期，单一 P0 Bug 即足以抵消所有功能优势；维护响应速度需提升。

---

*报告基于 GitHub 公开数据自动生成，仅供参考。*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报

**报告日期：** 2026-07-27
**项目仓库：** [nearai/ironclaw](https://github.com/nearai/ironclaw)

---

## 1. 今日速览

IronClaw 今日继续保持高强度的工程迭代节奏，过去 24 小时共处理 5 条 Issue 与 18 条 PR，其中 6 条 PR 已合并/关闭，12 条仍待处理。**未发布新版本**，但有一个等待合并的 release PR（#5598）含 API 破坏性变更。核心推进集中在三个方向：错误恢复能力重构（epic #6284 持续推进）、托管 MCP 按用户发现机制（P2b）落地、以及依赖批量升级（dependabot 大量积压）。整体项目活跃度极高，但存在一定 PR 积压和依赖陈旧风险，**健康度评估：活跃但需关注依赖与发布节奏**。

---

## 2. 版本发布

⚠ **无新版本发布**，但有一个开放中的 release PR 待处理：

- **[#5598 chore: release](https://github.com/nearai/ironclaw/pull/5598)**（OPEN，创建于 2026-07-03，今日更新）
  - `ironclaw_common`: 0.4.2 → **0.5.0**（⚠ API 破坏性变更，含新增 `Copy` 实现等）
  - `ironclaw_safety`: 0.2.2 → 0.2.3（✓ API 兼容）
  - `ironclaw_skills`: 0.3.0 → **0.4.0**（⚠ API 破坏性变更）
  - **建议：** 维护者应优先评估该 release PR 的合并窗口，避免进一步累积破坏性变更。

---

## 3. 项目进展

今日共有 6 条 PR 关闭/合并，以下是关键技术推进：

### 已合并/关闭的重点 PR

| PR | 标题 | 影响 |
|---|---|---|
| **[#6679](https://github.com/nearai/ironclaw/pull/6679)** | Harden struct ratchet and remove dead Gemini API | 重构 struct ratchet，使用 `syn` 解析替代行式扫描器，修复多行 `cfg_attr` 与 `impl` 头检测缺陷；并**清理已死 Gemini API 代码**，扩展回归覆盖 |
| **[#5369](https://github.com/nearai/ironclaw/pull/5369)** | fix(reborn): suppress Cranelift debug log floods | 修复 Reborn 模式下 Cranelift/Wasmtime 调试日志洪水问题，保留 `IRONCLAW_REBORN_LOG=debug` 的可用性 |
| **[#6684](https://github.com/nearai/ironclaw/pull/6684)** | refactor(reborn): one failure vocabulary — collapse five failure-kind enums | 将 5 个重叠的 failure-kind enum 合并为单一 35 变体 `FailureKind`，修复 4 个 wrongful-terminal bug（**supersedes #6677**，推进 epic #6284） |
| **[#6683](https://github.com/nearai/ironclaw/pull/6683)** | P2b: per-user hosted-MCP discovery, rebased onto main | 在 post-#6116 主干上干净实现 P2b，按用户发现托管 MCP，per-thread hire-scoping（**supersedes #6365**） |
| **[#6687](https://github.com/nearai/ironclaw/pull/6687)** | build(deps): bump everything-else group (33 updates) | 依赖批量升级（async-trait, thiserror, uuid 等） |
| **[#6640](https://github.com/nearai/ironclaw/pull/6640)** | build(deps): bump everything-else (31 updates) | 已被 #6687 supersede 关闭 |

**整体评估：** 项目在**错误恢复能力基础设施**与**MCP 托管发现**两条主线持续向前推进，且完成了**死代码清理**（Gemini API、DockerProcessSandboxBackend 已识别待删），技术债务持续收敛。

---

## 4. 社区热点

### 🔥 最活跃 Issue

- **[#6284 [EPIC] error-recoverability endgame](https://github.com/nearai/ironclaw/issues/6284)**
  - **作者：** serrrfirat | **8 条评论** | 今日更新
  - 这是当前的旗舰 epic，目标是让模型从 100% 的 mid-run 错误中恢复。今日 #6684、#6677（已 supersede）都是其子任务推进，**该 epic 正在被密集执行**。
  - 诉求：定义恢复性合约（a-e 五要素），消灭"非成功被静默报告"现象。

### 📌 今日新建 Issue 重点

- **[#6690 Out of NEAR AI credits: chat hangs forever](https://github.com/nearai/ironclaw/issues/6690)** — 用户体验灾难性问题，标记 `v1-launch-checklist`，**v1 发布前必修**
- **[#6688 Unify model-visible safe text around a screened core](https://github.com/nearai/ironclaw/issues/6688)** — ilblackdragon 提出统一安全文本包装层，识别出 5 个重叠 wrapper
- **[#6686 Retire DockerProcessSandboxBackend](https://github.com/nearai/ironclaw/issues/6686)** — henrypark133 发现 sandbox shell-integration 实现过程中的死代码

---

## 5. Bug 与稳定性

### 🐛 P0 / 用户体验阻断

1. **[#6690 Out of NEAR AI credits: chat hangs on "thinking…" forever](https://github.com/nearai/ironclaw/issues/6690)** — 🔴 **严重**
   - **严重程度：** 高（P0）
   - **场景：** 用户用尽 NEAR AI credits 后，聊天卡在 "thinking…" 状态，**无任何通知**，必须登录后台才发现原因
   - **影响：** 渠道（web）、LLM 范围均受影响；列入 **v1-launch-checklist**
   - **修复 PR：** ❌ 暂无，需优先处理

### 🐛 P2 / 代码质量与稳定性

2. **[#6652 fix(reborn): stop quoting WorkingDirectory= in systemd unit](https://github.com/nearai/ironclaw/pull/6652)** — 修复 `systemctl --user status` 报告 `Loaded: bad-setting`（issue #6575）
   - **状态：** PR 已开放，待合并
3. **[#5369 Cranelift debug log floods](https://github.com/nearai/ironclaw/pull/5369)** — ✅ 今日已关闭（合并）

---

## 6. 功能请求与路线图信号

### 明确的功能方向

| 方向 | 关联 Issue/PR | 状态 |
|---|---|---|
| **错误恢复能力终局** | [#6284](https://github.com/nearai/ironclaw/issues/6284) + [#6684](https://github.com/nearai/ironclaw/pull/6684) | 🔥 密集推进中 |
| **托管 MCP 按用户发现（P2b）** | [#6683](https://github.com/nearai/ironclaw/pull/6683) | 🔥 rebased 重新提 PR |
| **沙箱凭证占位符注册表** | [#6689 feat(secrets)](https://github.com/nearai/ironclaw/pull/6689) | 🆕 今日新建，未对接（unwired） |
| **签名意图 + 每代理密钥生命周期（Ledger Phase B）** | [#6672](https://github.com/nearai/ironclaw/pull/6672) | ⏳ 开放中 |
| **统一模型可见安全文本** | [#6688](https://github.com/nearai/ironclaw/issues/6688) | 💡 新提议 |
| **变异测试实战化** | [#6681](https://github.com/nearai/ironclaw/pull/6681) | ⏳ 开放中（fix harness bug） |

### 路线图信号

- **v1 发布检查清单**已被引入（#6690 标签 `v1-launch-checklist`），说明项目正在为 v1 做最后冲刺。
- **安全/凭证**与**密码学签名**两条线（#6689 + #6672）并进，反映沙箱化与可信执行是中期路线图核心。
- **依赖管理**侧：dependabot 在 4 个分组（everything-else / serialization / wasm / tokio / actions）均有积压 PR，**建议合并窗口化管理**。

---

## 7. 用户反馈摘要

由于 Issues 普遍评论数较少（多为 0-8 条），且今日 Issue 多为内部工程任务，用户反馈集中在以下可识别点：

1. **💔 用户体验断裂（#6690）** — 用户耗尽 credits 时无任何提示，仅在"thinking…"卡死后被迫登录后台查证。**核心痛点：缺乏透明的失败反馈**。这与 epic #6284 的"模型必须看见错误"理念一致，应纳入修复优先级。
2. **📊 失败分类可观测性（#6682）** — `pranavraja99` 维护每日 failure taxonomy，clawbench 82 个 non-pass 主导为"模型质量型部分完成"。**用户视角期望：希望对失败模式有更精细的归因与可视化**。
3. **🔧 沙箱 on-boarding 体验（#6652 / #6575）** — Linux 用户 `ironclaw onboard` 后立即看到 `Loaded: bad-setting`，**新人首装体验受损**。

---

## 8. 待处理积压 ⚠

维护者建议优先关注的长期未响应/重要项：

| 编号 | 类型 | 标题 | 创建时间 | 备注 |
|---|---|---|---|---|
| **[#5598](https://github.com/nearai/ironclaw/pull/5598)** | PR | chore: release | 2026-07-03 | 含**两个 API 破坏性变更**的 release PR，待合并近 24 天，**风险累积** |
| **[#5664](https://github.com/nearai/ironclaw/pull/5664)** | PR | build(deps): bump actions group (16 updates) | 2026-07-05 | GitHub Actions 安全升级，**含 actions/checkout v4→v7 等重大版本跨越**，积压 22 天 |
| **[#6672](https://github.com/nearai/ironclaw/pull/6672)** | PR | feat(signing): signed intent + per-agent key lifecycle | 2026-07-25 | Ledger 复活 Phase B，战略重要性高 |
| **[#6690](https://github.com/nearai/ironclaw/issues/6690)** | Issue | Out of NEAR AI credits: chat hangs forever | 2026-07-27 | v1-launch-checklist，**必修** |
| **[#6284](https://github.com/nearai/ironclaw/issues/6284)** | Epic | error-recoverability endgame | 2026-07-19 | 旗舰 epic，需持续投入 |

---

## 📊 数据看板

| 指标 | 数值 | 趋势 |
|---|---|---|
| 24h Issue 新开/活跃 | 5 | 正常 |
| 24h Issue 关闭 | 0 | ⚠ 偏低 |
| 24h PR 待合并 | 12 | ⚠ 偏高 |
| 24h PR 关闭 | 6 | ✅ 良好 |
| 24h 新版本 | 0 | — |
| 积压 release PR | 1 (#5598, **含破坏性变更**) | ⚠ |

---

**报告生成时间：** 2026-07-27
**数据来源：** GitHub REST API（nearai/ironclaw）
**报告人：** AI 项目分析师

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目日报

**日期：2026-07-27**
**数据来源：** github.com/netease-youdao/LobsterAI

---

## 1. 今日速览

LobsterAI 过去 24 小时整体活跃度偏低，处于"低频维护"状态。无新版本发布，仓库内积压了较多被标记为 `[stale]` 的长期未合并 PR（7 条待合并 / 1 条已关闭），提示维护者侧可能存在审阅资源紧张的问题。Issues 端活跃度同样有限，仅 1 个新 Bug 浮出水面（#1243，关于 OpenClaw 网关频繁重启的稳定性问题），另有 1 个长期悬而未决的 Ubuntu Linux 版本支持请求（#273）被关闭，未见实质进展。整体而言，项目处于"零碎修复 + 积压待消化"阶段，未观察到面向用户的新能力交付或重大里程碑推进。

---

## 2. 版本发布

⚠️ **今日无新版本发布**。当前正式版本仍为 `2026.4.1`（基于 #1243 中用户反馈），距上次发版已超过 3 个月，期间积累的修复与功能（见下）尚未整合到正式 Release 中。

---

## 3. 项目进展

今日仅有 **1 个 PR 被关闭**：

| PR | 标题 | 状态 | 价值 |
|---|---|---|---|
| [#1325](https://github.com/netease-youdao/LobsterAI/pull/1325) | 为新建对话图标按钮添加悬停提示 | 已关闭（stale） | 小幅 UI 改进，统一了多个视图（`CoworkView`、`CoworkSessionDetail`、`AgentsView`、`McpView`）下折叠态"新建对话"按钮的 `title` 属性 tooltip。属于体验打磨型变更，未被合并但问题已通过关闭归档方式处理。 |

**整体推进评估：** 项目今日在"前进方向"上几乎为零。8 个 PR 中 7 个仍处于待合并状态，全部带有 `[stale]` 标签，表明维护者侧近期对这些提交缺乏反馈循环。

---

## 4. 社区热点

今日 Issues 与 PRs 的社区互动普遍冷清，**绝大多数条目的 👍 为 0，评论数 ≤ 1**。

- 🔥 **最高讨论度候选 —— Issue #273**：[Suggestion] 能否开发 Ubuntu Linux 版本？
  链接：https://github.com/netease-youdao/LobsterAI/issues/273
  虽然评论只有 2 条、👍 为 0，但代表了一类**长期跨平台诉求**。该 Issue 自 2026-03-05 创建至今 4 个月，最终以"关闭"收尾，未给出明确答复或路线图说明。这一处理方式可能在社区中引发负面情绪，值得官方后续主动声明 Linux 支持计划（即使是"暂不支持"也比静默关闭更友好）。

- 🔥 **PR #1256**（定时任务自然语言配置）与 **PR #1252/#1258**（未保存修改二次确认）代表了社区近期提交密度较高的功能方向，但因缺乏评论互动，热度主要靠提交频次而非讨论深度支撑。

---

## 5. Bug 与稳定性

### 🔴 高优先级

| Issue | 标题 | 严重度 | 是否已有 fix PR |
|---|---|---|---|
| [#1243](https://github.com/netease-youdao/LobsterAI/issues/1243) | [BUG] `qwen-portal-auth` 插件配置循环写入导致网关频繁重启 | **严重** | ❌ 无对应 PR |

**详情：** 用户反馈 `qwen-portal-auth` 插件的配置文件会被持续自动改写，进而触发 OpenClaw 网关每 **5-20 分钟重启一次**，并伴随"AI 引擎正在启动网关…"弹窗。问题影响范围包括**非 Qwen 模型用户**，表明插件影响面超出其命名预期。该 Bug 会直接打断用户长任务执行（定时任务、Cowork 会话等），是当前对生产环境最具杀伤力的稳定性问题。

**建议：** 维护者应优先评估是否需要在网关侧加入"配置变更去抖 / 防抖"机制，或在 `qwen-portal-auth` 写入路径上加入最小变更间隔检测。

### 🟢 中低优先级（已被 PR 覆盖）

| PR | 标题 | 关联问题 | 状态 |
|---|---|---|---|
| [#1247](https://github.com/netease-youdao/LobsterAI/pull/1247) | 修复 provider 限流后的模型切换恢复 | 隐含稳定性问题 | 待合并 |
| [#1249](https://github.com/netease-youdao/LobsterAI/pull/1249) | 修复 DiffView 不渲染（Claude SDK / OpenClaw 工具名匹配过窄） | 功能性缺陷 | 待合并 |
| [#1257](https://github.com/netease-youdao/LobsterAI/pull/1257) | 补齐缺失的 `edit` / `delete` i18n 键 | 国际化缺陷 | 待合并 |

### 🟢 小改进

| PR | 标题 | 状态 |
|---|---|---|
| [#1259](https://github.com/netease-youdao/LobsterAI/pull/1259) | OpenClaw 网关打包与依赖处理重构 | 待合并 |

---

## 6. 功能请求与路线图信号

**已收到但未排期的请求：**

- **跨平台支持（Linux）** —— Issue #273 已关闭但未给出替代方案，建议维护者在 README 或 Roadmap 中显式声明支持矩阵，避免用户反复提交同类请求。

**已通过 PR 提交、等待合并的功能方向（潜力候选）：**

| PR | 功能 | 进入下一版本可能性 |
|---|---|---|
| [#1256](https://github.com/netease-youdao/LobsterAI/pull/1256) | 定时任务支持自然语言输入（LLM 解析 cron） | ⭐⭐⭐⭐ 较高，与"AI 助手"定位契合，用户体验提升明显 |
| [#1252](https://github.com/netease-youdao/LobsterAI/pull/1252) / [#1258](https://github.com/netease-youdao/LobsterAI/pull/1258) | 定时任务表单未保存二次确认弹窗 | ⭐⭐⭐⭐ 较高，低风险、纯前端、易合并 |
| [#1247](https://github.com/netease-youdao/LobsterAI/pull/1247) | OpenClaw 模型切换恢复 | ⭐⭐⭐⭐ 较高，属于核心能力补全 |
| [#1259](https://github.com/netease-youdao/LobsterAI/pull/1259) | 网关打包与依赖处理重构 | ⭐⭐⭐ 中等，价值偏内部工程治理 |

**值得注意的是，PR #1252 与 #1258 似乎存在功能重叠**（均围绕"定时任务表单未保存修改二次确认"），建议维护者合并前进行去重协调，避免冲突。

---

## 7. 用户反馈摘要

从 Issues 与 PR 描述中可提炼以下真实用户痛点：

1. **稳定性焦虑** —— Issue #1243 用户明确表达"严重影响使用体验"，反映了企业 / 个人重度用户对网关可用性的高敏感度。频繁重启弹窗不仅打断工作流，也削弱用户对"AI 引擎"抽象层的信任。

2. **可观测性不足** —— 用户对"为什么网关在重启"缺乏任何系统级反馈（如日志入口、状态查询），LobsterAI 在错误暴露设计上仍有改进空间。

3. **Linux 用户被边缘化** —— Issue #273 的关闭方式（未明确答复即关闭）说明社区中确实存在 Linux 开发者用户群，但项目侧未将其纳入支持承诺。

4. **Cowork 编辑体验断裂** —— PR #1249 反映 Claude SDK 与 OpenClaw 引擎接入时 DiffView 不可用，用户在多模型场景下需面对不一致的 UI 表现。

5. **i18n 缺失** —— PR #1257 显示即使在 zh / en 两套语言下，仍有常用 UI 文本缺失键值，说明本地化流程未覆盖完整代码路径。

---

## 8. 待处理积压

🚨 **维护者重点关注清单**：

| 类型 | 编号 | 创建日期 | 滞留时长 | 风险 |
|---|---|---|---|---|
| Bug | [#1243](https://github.com/netease-youdao/LobsterAI/issues/1243) | 2026-04-01 | ~117 天 | 🔴 严重影响线上稳定性 |
| PR | [#1247](https://github.com/netease-youdao/LobsterAI/pull/1247) | 2026-04-01 | ~117 天 | 🟡 核心能力修复，积压将放大用户痛点 |
| PR | [#1249](https://github.com/netease-youdao/LobsterAI/pull/1249) | 2026-04-01 | ~117 天 | 🟡 跨引擎一致性 |
| PR | [#1252](https://github.com/netease-youdao/LobsterAI/pull/1252) | 2026-04-01 | ~117 天 | 🟢 低风险 UX 改进 |
| PR | [#1256](https://github.com/netease-youdao/LobsterAI/pull/1256) | 2026-04-01 | ~117 天 | 🟢 差异化功能 |
| PR | [#1257](https://github.com/netease-youdao/LobsterAI/pull/1257) | 2026-04-01 | ~117 天 | 🟢 i18n 补齐 |
| PR | [#1258](https://github.com/netease-youdao/LobsterAI/pull/1258) | 2026-04-01 | ~117 天 | 🟢 与 #1252 重复 |
| PR | [#1259](https://github.com/netease-youdao/LobsterAI/pull/1259) | 2026-04-01 | ~117 天 | 🟡 内部质量改进 |

**关键观察：** 几乎所有待处理 PR 均停留在 4 月 1 日创建、随后进入 stale 状态。结合官方版本号停留在 `2026.4.1`，强烈建议维护者：
1. 集中评审这批 PR，至少对低风险的 #1252/#1257/#1258 做出合并或关闭决策；
2. 对 #1243 高优先级 Bug 发布修复或给出 ETA；
3. 启动一轮"stale 清理"，对长期不活跃的 PR 给出明确 feedback（合并 / 重开 / 关闭），降低贡献者挫败感。

---

## 📊 项目健康度总评

| 维度 | 评分 | 说明 |
|---|---|---|
| 维护活跃度 | ⭐⭐☆☆☆ | 无 Release、PR 审阅停滞、Issue 关闭欠说明 |
| 稳定性 | ⭐⭐☆☆☆ | 存在未被处理的网关频繁重启严重 Bug |
| 社区互动 | ⭐⭐☆☆☆ | Issues/PRs 普遍 👍=0，互动稀疏 |
| 代码流入 | ⭐⭐⭐☆☆ | 仍有社区贡献者提交高质量 PR，趋势未断 |
| 路线图透明度 | ⭐☆☆☆☆ | 缺少公开发布的 Roadmap / Triage 节奏 |

**结论：** 项目当前处于"代码已堆积、维护已停滞"的临界状态。建议优先发布一个 hotfix 版本集中处理 #1243 + #1247 等稳定性问题，以恢复社区信心。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目日报 · 2026-07-27

> 数据周期：2026-07-26 ~ 2026-07-27（过去 24 小时）

---

## 1. 今日速览

过去 24 小时 Moltis 仓库呈现出 **"高开发强度、低合并流转"** 的典型中期冲刺特征：共 **8 个 PR 被更新**，全部处于 **OPEN 待合并状态**，无任何 PR 被合并或关闭，Issues 端也完全静默（0 条更新）。这种"All-Open"的分布意味着提交者集中活跃、但 Reviewer 侧尚未形成节奏，可能反映维护者正处在跨多个能力域并行铺量的阶段——尤其是 **ACP（Agent Client Protocol）双向能力**、**渠道集成（Slack / Nostr）** 与 **PWA 通知可靠性** 这三条主线。整体活跃度评估：**中高**；健康度信号：**中性偏观察**，建议关注 PR 积压与评审吞吐。

---

## 2. 版本发布

⏸ **今日无新版本发布。** 仓库目前处于 PR 集中提交阶段，未触发发版流程。建议下一窗口关注 `crates/acp`（PR #1169）等结构性变更合入后的版本节奏。

---

## 3. 项目进展

过去 24 小时 **没有任何 PR 被合并或关闭**，所有 8 条更新均停留在"待合并"状态。但从变更内容看，项目在多个维度同步推进：

| 方向 | PR | 影响 |
|---|---|---|
| **ACP 协议双向化** | [#1169](https://github.com/moltis-org/moltis/pull/1169) [#1171](https://github.com/moltis-org/moltis/pull/1171) | 标志性进展：Moltis 历史上仅作为 ACP **客户端**驱动 `codex-acp` / `claude-agent-acp` / `agent acp`；#1169 新增 `crates/acp` 让 Moltis 自身可作为 **Agent** 通过 stdio 被外部 harness（Zed、`buzz-acp`、自研 runner）调用，配套 #1171 将 ACP 选择并入聊天模型选择器。 |
| **PWA 通知可靠性** | [#1173](https://github.com/moltis-org/moltis/pull/1173) | 修复了 Service Worker 同会话通知"静默替换"的体验缺陷，并加入 `renotify`、session-scoped tag、可见性队列等机制。 |
| **Slack 集成增强** | [#1166](https://github.com/moltis-org/moltis/pull/1166) | 在已合并的 #1165 确认反应基础上，补齐每消息确认反应、阶段反馈、Block Kit 渲染、重连监管。 |
| **Nostr / Buzz 通道** | [#1168](https://github.com/moltis-org/moltis/pull/1168) | `moltis-nostr` 从仅支持 NIP-04 私聊扩展到 **NIP-29 群聊 + NIP-42 鉴权**，对接 Block 开源的 Buzz workspace。 |
| **记忆后端** | [#1158](https://github.com/moltis-org/moltis/pull/1158) | 新增基于 **Zvec + redb** 的向量数据库记忆后端，feature-gated，可与独立 llama-cpp embedding 服务组合。 |

> **整体判断**：项目在"协议对称性"（ACP 双向）、"多渠道承载"（Slack / Nostr）、"记忆可替换性"（Zvec）三个层面同时向前推进，属于一次比较显著的架构扩展窗口。但 0 合并意味着这些 PR 尚未被任何维护者 review 通过，建议下游使用者暂不基于 main 分支做 release 跟踪。

---

## 4. 社区热点

> **说明**：今日 8 条 PR 的 `comments` 字段均为 `undefined`，`👍` 均为 0，Issues 端 0 条更新——**没有真实的评论/反应热度可分析**。

从 PR 主题集中度看，最具结构性意义的"潜在热点"为：

- 🔥 **PR [#1169](https://github.com/moltis-org/moltis/pull/1169) — feat(acp): expose Moltis as an ACP agent over stdio**
  诉求分析：填补"Moltis 不能被 ACP harness 调用"的反向能力空白，是仓库首次出现的 **agent-side** ACP 实现，对生态接入（如 Zed、buzz-acp）有杠杆意义。
- 🔥 **PR [#1173](https://github.com/moltis-org/moltis/pull/1173) — feat(pwa): make push notifications reliable and non-disruptive**
  诉求分析：直击 PWA 用户最常见的痛点——聊天中后到的消息悄无声息地"覆盖"前一条通知（无铃声、无 alert）。这条 PR 解决的不是边缘问题，而是移动端 PWA 是否可作为"主力通知通道"的根本前提。

> 建议关注者：待维护者开启评审后，#1169 与 #1173 大概率会获得最早的非维护者评论。

---

## 5. Bug 与稳定性

| 严重度 | 问题 / PR | 是否已有 fix PR | 备注 |
|---|---|---|---|
| 🟠 **中高** | PWA 同会话通知被静默替换（[#1173](https://github.com/moltis-org/moltis/pull/1173)） | ✅ fix PR 已提 | 缺失 `renotify` + per-session tag 持续化，移动端用户体感等同于"通知丢消息" |
| 🟠 **高（安全）** | `/sh` 在群聊场景下对任何通过访问门控的用户开放（[#1170](https://github.com/moltis-org/moltis/pull/1170)） | ✅ fix PR 已提 | 在 Discord guild / 群聊中相当于任意 host 命令执行，PR 引入 per-account operators list 进行授权门控 |
| 🟡 **中** | Cron 页面默认展示已归档会话造成视觉噪声（[#1172](https://github.com/moltis-org/moltis/pull/1172)） | ✅ fix PR 已提 | 复用全局"已归档会话"偏好，并附带 Playwright 回归测试 |

> 今日 **未出现崩溃 / 数据丢失类 P0 报告**；最值得关注的是 #1170 的安全修复——它本质上是把"通道访问门控"与"特权命令授权"做了分离，避免过去过度耦合带来的越权风险。

---

## 6. 功能请求与路线图信号

虽然今日 Issues 端没有新增的功能请求，但通过 PR 集合可以反向读出项目的 **下一阶段路线图信号**：

1. **🧭 ACP 双向化（明确路线图）**
   - #1169（暴露 Moltis 为 ACP agent）+ #1171（合并 ACP 选择进聊天模型选择器）是一对组合拳：先补齐协议端，再统一 UX。
   - 这强烈暗示下一版本会正式声明 **Moltis 作为 ACP 兼容 Agent** 的对外契约，外部 harness 集成成本将显著下降。

2. **🧠 记忆后端可插拔化（探索性）**
   - #1158 是社区贡献者以 "vibe-coded experiment" 形式提交（作者 demyanrogozhin），说明官方正在试探 **Zvec + redb** 是否能成为默认 SQLite 之外的另一选项。该 PR 被 feature-gated，进默认发行版的概率较低，但会被纳入"可选后端矩阵"。

3. **📡 多渠道承载扩张**
   - Slack：#1166 将 Bot 的"反应 / 阶段反馈 / Block Kit / 重连监管"补齐，朝生产可用推进。
   - Nostr/Buzz：#1168 让 `moltis-nostr` 真正可作为 **群聊 worker** 部署，与 Block 生态打通。
   - 方向判断：Moltis 正从"AI 助手本体"向"AI 助手 + 跨平台 worker runtime"演化。

4. **🔐 渠道安全模型细化**
   - #1170 的 per-account operators list 暗示未来会有更系统的"角色 / 权限分层"，可能延伸到 channel-level ACL。

---

## 7. 用户反馈摘要

> **数据局限**：今日 Issues 评论字段为空，无新增 Issues，无 PR 内可见评论。

可从 PR 描述文本中提取的间接用户反馈信号：

- **PWA 用户痛点**（来自 #1173 描述）："second message in a chat silently replaced the first — no sound, no alert, earlier message gone" —— 这是非常具体的用户体感描述，提示 **移动端 PWA 通知体验** 是该用户群的核心痛点之一。
- **群聊运营者痛点**（来自 #1170 描述）："`/sh` was reachable by any sender who passed a channel's access gate" —— 反映出 Discord/Slack 群组部署者在 **特权命令授权模型** 上的真实担忧。
- **Cron 仪表盘噪声**（来自 #1172 描述）："archived cron sessions" 默认展示造成干扰 —— 体现运维用户对 **默认 UI 整洁度** 的偏好。

> 由于没有 Issue 评论文本，建议在下一份日报中跟踪上述 PR 的 review 进展，间接观察用户与维护者对话。

---

## 8. 待处理积压

| 编号 | 类型 | 标题 | 创建距今 | 状态 |
|---|---|---|---|---|
| [#1158](https://github.com/moltis-org/moltis/pull/1158) | PR | feat(memory): add zvec vector database memory backend | **10 天**（2026-07-17）| OPEN / 0 👍 / 评论 undefined |
| 全部 8 条今日更新 PR | PR | （详见第 3 节表格）| 1–10 天 | OPEN / 0 👍 / 评论 undefined |

**维护者关注建议**：

- 🟡 **#1158 已悬置 10 天**，是当前最长的"未响应"PR。虽然是社区 vibe-coded 实验性质，但作者投入了完整后端实现，长期不响应可能抑制后续贡献者。建议至少给出"保留 / 推迟 / 转 draft"的明确信号。
- 🟡 **整体评审吞吐偏低**：8 条 PR 全部 0 评论、0 反应，说明过去 24 小时没有进入实质性 review。考虑到这些 PR 涉及安全（#1170）、协议架构（#1169）、UI 体验（#1173）等重要变更，**评审排队已构成短期风险**。
- 🟢 **Issues 端无积压信号**：今日 0 条活跃 Issue，社区未出现未被回应的求助或崩溃报告。

---

### 📌 一句话总结

> Moltis 今日处于 **"多线铺量、等待评审"** 的状态：ACP 双向化、PWA 通知可靠性、渠道安全模型三条线同时推进，但 0 合并 / 0 评论的状态意味着下游使用者应保持观察，重点关注下一窗口的评审与合并节奏。

*日报生成时间：2026-07-27 · 数据源：moltis-org/moltis GitHub API*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw / QwenPaw 项目日报

**报告日期**：2026-07-27
**数据仓库**：agentscope-ai/QwenPaw
**报告周期**：过去 24 小时

> 说明：用户提供的仓库命名为 `CoPaw`，但本次抓取的 Issue/PR 数据全部指向 `agentscope-ai/QwenPaw` 仓库，下文统一以 **QwenPaw** 指代该项目。

---

## 1. 今日速览

过去 24 小时项目社区活跃度**中等偏高**：共 17 条 Issue 更新（14 条仍 OPEN，3 条已关闭）、9 条 PR 更新，但**无任何 PR 合并，也无新 Release 发版**。讨论焦点高度集中在 **MCP 传输层 bug**（#6470 获 4 条评论，另有 #6468 / #6469 两个重复 issue 被关闭），其次是 v2.0.1 版本的若干回归问题（PATH 处理、Kanban 插件、Edge+Wayland 高 CPU、Cron 误触发、`view_video` 静默丢失等）。多个 first-time-contributor PR 已就位（繁中 i18n、streamable HTTP 测试、Cron keepalive），显示出良好的新人参与度，但维护者侧尚未对今日任何 PR 做实质审查反馈。

---

## 2. 版本发布

**今日无新版本发布**。当前主线上活跃反馈集中在 v2.0.0 / v2.0.1，说明 v2.x 系列仍处于"修 bug、调回归"阶段，距下一个稳定小版本应已不远。

---

## 3. 项目进展

**今日无 PR 被合并**。在 9 条活跃 PR 中，值得关注的进展方向包括：

- **#6483** [test: cover streamable HTTP MCP transport](https://github.com/agentscope-ai/QwenPaw/pull/6483) — 锁定 Issue #6470 的修复路径，防止后续重构回退。
- **#6481** [fix(crons): add keepalive task so cron jobs fire when event loop is idle](https://github.com/agentscope-ai/QwenPaw/pull/6481) — 直面 #6471 的 AsyncIOScheduler 误触发问题，属于明确的目标性修复。
- **#6484** [feat(i18n): add Traditional Chinese (zh-TW) support](https://github.com/agentscope-ai/QwenPaw/pull/6484) — 关闭 #6478，繁中本地化已落地。
- **#6456** [feat(context): Visual Compact (PawFocus)](https://github.com/agentscope-ai/QwenPaw/pull/6456) — 长上下文视觉压缩能力，等待审查。
- **#6479** [fix(providers): sync MiniMax model baseline](https://github.com/agentscope-ai/QwenPaw/pull/6479) — 同步 MiniMax 当前模型基线。
- **#6477** [docs(faq): align zh sub-section headings with en](https://github.com/agentscope-ai/QwenPaw/pull/6477) — 文档小修。
- **#6387** [feat(channels): support on-demand installation and version repair](https://github.com/agentscope-ai/QwenPaw/pull/6387) — Channel 安装与版本修复能力（持续推进中）。
- **#6276** [feat(browser): unified browser — one SDK, any backend](https://github.com/agentscope-ai/QwenPaw/pull/6276) — 浏览器层统一 SDK。
- **#6284** [feat(apps): add qwenpaw-creator app](https://github.com/agentscope-ai/QwenPaw/pull/6284) — 创作型应用插件（剧本→资产→分镜→视频）。

> 整体而言，多个修复方向已具备 PR 形态，但维护者尚未在新窗口内做出任何合并决定，建议**关注维护者响应节奏**。

---

## 4. 社区热点

按评论数量排序，今日最具讨论张力的话题：

| 排名 | Issue/PR | 评论数 | 状态 | 主题 |
|------|----------|--------|------|------|
| 1 | [#6470](https://github.com/agentscope-ai/QwenPaw/issues/6470) | 4 | OPEN | MCP driver 硬编码 SSE client，忽略 YAML 中的 `streamable_http` 配置 |
| 2 | [#6342](https://github.com/agentscope-ai/QwenPaw/issues/6342) | 3 | CLOSED | ReMe 配 embedding 后如何验证是否生效 |
| 3 | [#6239](https://github.com/agentscope-ai/QwenPaw/issues/6239) | 3 | OPEN | Windows PATH 拼接丢 `;`，子进程丢失 npm 全局路径 |
| 4 | [#6473](https://github.com/agentscope-ai/QwenPaw/issues/6473) | 2 | OPEN | Agent Kanban 插件安装失败（缺 `qwenpaw.pawapp` 模块） |
| 5 | [#6460](https://github.com/agentscope-ai/QwenPaw/issues/6460) | 2 | OPEN | Edge + Wayland 下 QwenPaw 单标签 CPU 持续走高 |

**背后诉求分析**：
- **MCP 生态**成为当前最热痛点。一份核心问题（#6470）撬动了 4 条评论，并衍生出两份重复 Issue（#6468、#6469 均被关闭），反映出 v2.0.1 后 MCP 用户的配置兼容性问题正在集中爆发，对 MCP 用户的可用性影响明显。
- **操作系统级回归**（#6239、#6460）显示 v2.0.x 在 Windows / Wayland 等长尾环境上仍需打磨。
- **#6342** 虽已关闭，但其 3 条评论暴露了 ReMe 嵌入模型**缺乏可观测性**——用户不知道怎么验证"配置真的生效"，这是产品 UX 的系统性缺陷。

---

## 5. Bug 与稳定性

按严重程度排序（基于影响面 / 阻塞性 / 已累计评论）：

| 严重度 | Issue | 简述 | 是否已有 fix PR |
|--------|-------|------|-----------------|
| 🔴 高 | [#6470](https://github.com/agentscope-ai/QwenPaw/issues/6470) | MCP 驱动硬编码 SSE，streamable_http 服务器全部不可用 | ✅ 测试覆盖 PR #6483 已就位，但**框架修复 PR 尚未出现** |
| 🔴 高 | [#6471](https://github.com/agentscope-ai/QwenPaw/issues/6471) | Cron 任务在事件循环长时间空闲后 misfire（APScheduler AsyncIOScheduler 不触发） | ✅ [PR #6481](https://github.com/agentscope-ai/QwenPaw/pull/6481) 已提交 keepalive |
| 🔴 高 | [#6474](https://github.com/agentscope-ai/QwenPaw/issues/6474) | `view_video` 报成功但视频 DataBlock 在管线里被丢弃，模型根本收不到视频 | ❌ 尚无修复 PR |
| 🟠 中 | [#6473](https://github.com/agentscope-ai/QwenPaw/issues/6473) | 官方 Agent Kanban 插件无法安装（`No module named 'qwenpaw.pawapp'`） | ❌ 尚无修复 PR，但同模式可见 [#6284](https://github.com/agentscope-ai/QwenPaw/pull/6284) 正在引入 `PawApp` 模式 |
| 🟠 中 | [#6239](https://github.com/agentscope-ai/QwenPaw/issues/6239) | Windows PATH 拼接丢 `;` 分隔符，子进程丢失 npm 全局 | ❌ 尚无修复 PR |
| 🟠 中 | [#6460](https://github.com/agentscope-ai/QwenPaw/issues/6460) | Edge + Wayland 下首页/大会话长留后单标签 CPU 持续走高 | ❌ 尚无修复 PR |
| 🟡 中低 | [#6476](https://github.com/agentscope-ai/QwenPaw/issues/6476) | Matrix 端到端加密不可用，olm 安装链路失败 | ❌ 尚无修复 PR |
| 🟡 中低 | [#6472](https://github.com/agentscope-ai/QwenPaw/issues/6472) | 升级 2.0.1 后编程模式下 JSON 文件不显示行号 | ❌ 尚无修复 PR |
| 🟡 中低 | [#6482](https://github.com/agentscope-ai/QwenPaw/issues/6482) | Console 切换 chat/agent 时 UI 卡顿，并残留上一个会话内容 | ❌ 尚无修复 PR |
| 🟡 中低 | [#6480](https://github.com/agentscope-ai/QwenPaw/issues/6480) | `nohup` 或 `&` 后台 shell 进程永不回到 idle，agent 卡死 | ❌ 尚无修复 PR |
| ⚪ 低 | [#6457](https://github.com/agentscope-ai/QwenPaw/issues/6457) | 任务模式运行后历史对话异常增多 | ❌ 尚无修复 PR |
| ⚪ 低 | [#6342](https://github.com/agentscope-ai/QwenPaw/issues/6342) | ReMe 嵌入模型配置生效不可见（已关闭，倾向 UX 问题） | ❌ — |

> **风险评估**：今日 14 条 OPEN Issue 中，至少 5 条属于"影响核心链路可用性"的高严重度问题，但仅 2 条配套 PR 已就位，整体修复覆盖率约 15%。建议下一窗口重点冲刺 v2.0.x 的 hotfix 发布。

---

## 6. 功能请求与路线图信号

今日明确提出的需求包括：

- **[#6475](https://github.com/agentscope-ai/QwenPaw/issues/6475)** — `notice_after_complete` 工具：在 Agent 执行长任务期间允许回复用户其他问题，并主动推送完成通知。
  - **路线图可能性**：中高。属于长任务 UX 改善的明显缺口，逻辑上与现有 shell / 子 agent 工具对齐良好，可作为独立工具快速上线。
- **[#6478](https://github.com/agentscope-ai/QwenPaw/issues/6478)** — 繁体中文本地化。
  - **路线图可能性**：极高。[PR #6484](https://github.com/agentscope-ai/QwenPaw/pull/6484) 已同日提交，几乎确定合入下一个版本。
- **[#6458](https://github.com/agentscope-ai/QwenPaw/issues/6458)** — Cron 任务安全默认值（P2）与通知粒度（P3/P4）。
  - **路线图可能性**：中。涉及"Tool Execution Safety Check"默认开关与通知策略，需维护者层面表态。
- **[#6387 PR](https://github.com/agentscope-ai/QwenPaw/pull/6387)** — Channels 改为按需安装 + 启动期版本修复。
  - **路线图可能性**：极高（已被维护者讨论），可显著瘦身默认依赖。
- **[#6276 PR](https://github.com/agentscope-ai/QwenPaw/pull/6276)** — 统一浏览器 SDK（控制平面 / 执行平面拆分）。
  - **路线图可能性**：中。架构性变更，需较长 review 周期。
- **[#6284 PR](https://github.com/agentscope-ai/QwenPaw/pull/6284)** — 引入 `qwenpaw-creator` 创作类应用。
  - **路线图可能性**：中。可丰富应用中心，与 #6473（Kanban 安装失败）的修复形成联动。

---

## 7. 用户反馈摘要

从 Issue 文本与评论中提炼出的真实用户声音：

- **"MCP 配置形同虚设"**（#6470 / #6468 / #6469）：多名用户在 v2.0.1 上配置 `streamable_http` 传输协议后，**全部 MCP 服务器连接失败**，且无明显错误提示，体验失望。这是今日用户情绪最强烈的方向。
- **"升级反而更糟"**（#6472）：用户从 2.0.0 升到 2.0.1，发现编程模式下 JSON 文件**不再显示行号**，属于典型的升级回归损伤用户信任。
- **"配置生效了吗？"**（#6342）：ReMe 配置 embedding 模型后**没有任何可观测产出**，用户不知道到底启用没有——反映工具链需要"自带探针"。
- **"插件装不上"**（#6473）：官方 App Center 提供的 Agent Kanban 插件在桌面端 2.0.1 **无法安装**，直接影响"开箱即用"承诺。
- **"前台卡、后端 hang"**（#6482 / #6480）：Console 切换卡顿、`nohup`/`&` 后 agent 永不 idle——用户对**长时间运行的鲁棒性**感到焦虑。
- **"让它陪我聊"**（#6475）：期望 Agent 在执行长任务期间**仍能响应其它对话**，反映了"用户不再把 Agent 当工具，而当工作伙伴"的真实诉求。
- **"我想用繁体中文"**（#6478）：本地化需求被快速转译成 PR，体现社区自驱力。

> 整体用户情绪：**对功能丰富度满意，但对稳定性和"小细节"抱怨明显。** 在 2.0.x 的 polish 窗口期，质量信号比新增功能更重要。

---

## 8. 待处理积压

下列 Issue / PR 在较长一段时间内维持 OPEN、维护者侧响应较少，建议优先处理：

| 编号 | 类型 | 状态时长起点 | 标题（简） | 链接 |
|------|------|--------------|------------|------|
| #6239 | Issue | 2026-07-18（9 天） | Windows PATH 拼接丢 `;`，npm 全局丢失 | [#6239](https://github.com/agentscope-ai/QwenPaw/issues/6239) |
| #6276 | PR | 2026-07-20（7 天） | feat(browser): unified browser SDK | [#6276](https://github.com/agentscope-ai/QwenPaw/pull/6276) |
| #6284 | PR | 2026-07-20（7 天） | feat(apps): add qwenpaw-creator | [#6284](https://github.com/agentscope-ai/QwenPaw/pull/6284) |
| #6387 | PR | 2026-07-23（4 天） |

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报

**报告日期：2026-07-27**
**数据周期：过去 24 小时（2026-07-26 ~ 2026-07-27）**

---

## 1. 今日速览

ZeroClaw 仓库进入 **v0.8.4 发布前的高强度合并窗口**，过去 24 小时活跃度极高：50 条 Issue 更新、50 条 PR 更新，其中 48 条 PR 仍待合并、2 条已关闭/合并，覆盖 runtime/security、channels、providers、CI、observability 五大方向。**安全与稳定性是当前的主旋律**：Landlock 沙箱、MCP 内存泄漏、Gemini API Key 泄漏、WhatsApp Web 策略绕过等 P1 级风险同时被提上议程。CI 与发布工程同步推进，重点是精简冗余的签名/证明链路（#9101）、扩充平台测试矩阵（#7461）以及 Blacksmith 加速 Runner（#9115）。整体健康度评估：**活跃但承压，bug 密度高、修复节奏快，但仍有多个 S1 阻塞性 Issue 等待修复。**

---

## 2. 版本发布

**今日无新版本发布。**

但发布工程已经在为 **v0.8.4** 做实质性准备：

- [PR #9376 chore(release): cut v0.8.4](https://github.com/zeroclaw-labs/zeroclaw/pull/9376) — 自微内核拆分（#5811）以来首次让 workspace 可发布到 crates.io：根包名 `zeroclawlabs` → `zeroclaw`（对齐二进制名 `cargo install zeroclaw`），18 crate 发布、5 个保留、changelog 同步更新。
- [Issue #9101 Consolidate release attestation mechanisms](https://github.com/zeroclaw-labs/zeroclaw/issues/9101) — v0.8.3 出现了 cosign bundles、GitHub artifact attestations、slsa-github-generator 三套并行签名机制（53 个 release assets），目标收敛到"一套签名故事"约 20 个资产。
- [PR #9388 docs(governance): retire CONTRIBUTORS.md](https://github.com/zeroclaw-labs/zeroclaw/pull/9388) — 治理文档清理，FND-003 中两条互相冲突的成员记录路径之一被删除。

迁移注意：v0.8.4 之后 `zeroclawlabs` crate 名将被 `zeroclaw` 取代，现有依赖需要更新。

---

## 3. 项目进展

### 今日已合并/关闭的重要 PR（2 条）

| PR | 标题 | 意义 |
|---|---|---|
| [#9233](https://github.com/zeroclaw-labs/zeroclaw/pull/9233) | fix(runtime/security): Prevent landlock locks zeroclaw itself | **已关闭（合并）** — 修复 `LandlockSandbox::wrap_command()` 在父进程（daemon）中直接调用 `restrict_self()`，导致第一次沙箱化 shell 之后整个 ZeroClaw 自身被锁在 Landlock 规则内的严重安全/可用性问题。 |
| (另一条) | (详见 PR 列表) | 治理/小补丁类 |

### 重要推进中的 PR（48 条待合并中，节选）

- [PR #9114 fix(runtime/security): allow various devices and files on landlock sandbox](https://github.com/zeroclaw-labs/zeroclaw/pull/9114) — #9233 之后的策略硬化 follow-up，已具备独立 CI lane。
- [PR #9420 fix(anthropic): support stored OAuth profiles](https://github.com/zeroclaw-labs/zeroclaw/pull/9420) — Anthropic 显式 `auth_mode = "oauth"`，复用存储的 auth-profile 服务，保留旧 `api_key` 别名，**无协议变更、无配置迁移**。
- [PR #9419 fix(providers): rotate live credentials after rate limits](https://github.com/zeroclaw-labs/zeroclaw/pull/9419) — Reliable provider 每次尝试绑定具体凭据，只冷却真正返回 429 的那条；支持路由/别名/多凭据解析。
- [PR #9418 fix(mcp): multiplex stdio calls without replaying unknown outcomes](https://github.com/zeroclaw-labs/zeroclaw/pull/9418) — stdio JSON-RPC 按"子进程代次 + 数字请求 ID"精确路由，去掉"未知结果"的隐藏重试。
- [PR #9410 fix(security): default command audit logging to disabled](https://github.com/zeroclaw-labs/zeroclaw/pull/9410) — 按 [@Audacity88](https://github.com/Audacity88) v0.8.4 triage 方向，默认关闭命令审计，从发布样例中移除 `enabled` 设置并修正 YOLO 文档。
- [PR #9382 fix(channels): enforce WhatsApp Web chat policies under both modes](https://github.com/zeroclaw-labs/zeroclaw/pull/9382) — `dm_policy` / `group_policy` 在 personal 与 business 两种模式下都强制执行（此前仅 personal 读取）。
- [PR #9385 feat(channels): implement request_approval for WhatsApp Web](https://github.com/zeroclaw-labs/zeroclaw/pull/9385) — 关闭 #9366，让 `always_ask` 工具在 WhatsApp Web 上不再 fail-closed。
- [PR #9181 fix(channels): send Nextcloud Talk replies via the signed bot API](https://github.com/zeroclaw-labs/zeroclaw/pull/9181) — 修复 #6157，回复走 `POST .../bot/{token}/message` + `X-Nextcloud-Talk-Bot-Signature`。
- [PR #9197 fix(channels): connect CLI Ctrl+C to supervisor lifecycle token](https://github.com/zeroclaw-labs/zeroclaw/pull/9197) — 关闭 #9155，`zeroclaw channel start` 中 Ctrl+C 不再触发重启循环。
- [PR #9193 fix(providers): replace unsupported native env var guidance in missing-credential errors](https://github.com/zeroclaw-labs/zeroclaw/pull/9193) — 关闭 #9154，Anthropic/OpenRouter 缺凭据错误引导改用 `zeroclaw quickstart`。
- [PR #9234 fix(web): render reasoning-only turns instead of hanging silently](https://github.com/zeroclaw-labs/zeroclaw/pull/9234) — 网关 web chat 在仅 reasoning 输出的回合不再丢弃。
- [PR #9424 fix(runtime): reject empty terminal completions](https://github.com/zeroclaw-labs/zeroclaw/pull/9424) — Reliable provider 视"无最终文本 + 无原生 tool calls"为语义空响应（仅 reasoning 不完成 turn），重试耗尽后接入既有 fallback / 聚合错误处理。
- [PR #9423 fix(runtime): stop reporting an unanswerable approval as a user denial](https://github.com/zeroclaw-labs/zeroclaw/pull/9423) — 非交互运行时无可应答 channel 不再被错记为"用户拒绝"。
- [PR #8826 fix(tools): gate image_gen download URL against SSRF](https://github.com/zeroclaw-labs/zeroclaw/pull/8826) — 修复 `image_gen` 工具从 fal.ai 响应体拿到的 URL（服务端可控）直接下载造成的 SSRF 风险。
- [PR #8337 feat(observability): herdr agent reporting integration](https://github.com/zeroclaw-labs/zeroclaw/pull/8337) — CLI 交互模式原生输出 Herdr 侧栏所需的 idle/working/blocked/released 生命周期信号。
- [PR #9416 docs(tools): document that AllToolsResult.tools is the pre-filter registry](https://github.com/zeroclaw-labs/zeroclaw/pull/9416) — 文档修正，避免读者误以为 `tools` 字段是过滤后视图。

### CI / 工程基建进展

- [PR #9115 ci(runners): run compile-heavy jobs on optional Blacksmith runners](https://github.com/zeroclaw-labs/zeroclaw/pull/9115) — Quality Gate 中 7 个编译重活（lint、build、check、check-plugin-backends、check-32bit、bench、test）支持切换到 Blacksmith runner 加速。
- [Issue #7108 feat(ci): improve cached Rust builds and CI critical path](https://github.com/zeroclaw-labs/zeroclaw/issues/7108) — 当前 PR CI 仍普遍 15–20 分钟，缓存策略与关键路径调度优化在持续推进。
- [Issue #7461 Run the test suite on Windows and macOS in CI, not just Linux](https://github.com/zeroclaw-labs/zeroclaw/issues/7461) — Lint/Build 已经是三平台矩阵，测试仍仅 Linux；与 #7462 联合推进。

**项目整体评估：v0.8.4 的"安全 + 多平台 + 可发布"三条主线今日均有 PR 落地，项目整体向前推进约 1 个 minor 版本的工作量。**

---

## 4. 社区热点

按评论数排序的 TOP 活跃 Issue：

1. [#7462 — 74 test failures on Windows](https://github.com/zeroclaw-labs/zeroclaw/issues/7462) — 14 条评论。**最高热度。** Windows 11 (Simplified Chinese, code page 936) 上 master 有 74 个测试失败；CI 仅在 Linux 跑 Test job，所以漏检。属于"CI 盲区 + 跨平台兼容性"双重信号。
2. [#9101 — Consolidate release attestation mechanisms](https://github.com/zeroclaw-labs/zeroclaw/issues/9101) — 7 条评论。v0.8.3 三套并行签名机制带来的 CI 耗时、文档混乱、审计负担，是 v0.8.4 的 release-gate 议题。
3. [#5514 — batch Telegram media groups into one multimodal turn](https://github.com/zeroclaw-labs/zeroclaw/issues/5514) — 6 条评论。Telegram 多图应合并为一次多模态回合，避免 LLM 多次输出。
4. [#6157 — Nextcloud Talk use correct bot message API](https://github.com/zeroclaw-labs/zeroclaw/issues/6157) — 6 条评论。Nextcloud Talk 用了错误的 OCS chat API，导致回复失败；已有 #9181 待合并修复。
5. [#8654 — skill-review fork panics (SIGSEGV)](https://github.com/zeroclaw-labs/zeroclaw/issues/8654) — 5 条评论。`skills/review.rs:159` 越界切片 + `panic=abort` 拖垮整个 agent 进程；属于 S1 级稳定性问题。
6. [#7108 — feat(ci): improve cached Rust builds](https://github.com/zeroclaw-labs/zeroclaw/issues/7108) — 4 条评论。CI 慢的根因分析。
7. [#8559 — Agents stop when exiting chat window in web dashboard](https://github.com/zeroclaw-labs/zeroclaw/issues/8559) — 4 条评论。S1，关闭 web 后 agent loop 被误判为 user interrupt。
8. [#8973 — Landlock blocks shell on Fedora](https://github.com/zeroclaw-labs/zeroclaw/issues/8973) — 4 条评论。S2，与 #9233/#9114 同一问题域的 Fedora 表现。
9. [#7911 — install.sh picks generic Linux binary on Android/Termux](https://github.com/zeroclaw-labs/zeroclaw/issues/7911) — 3 条评论。Termux 安装一直装到 unknown linux aarch64。
10. [#8519 — Reconcile cargo-audit ignores and remediate wasmtime-wasi CVEs](https://github.com/zeroclaw-labs/zeroclaw/issues/8519) — 3 条评论。`audit.toml` / `deny.toml` 漂移，依赖安全债。
11. [#8560 — browser_open hangs agent turn](https://github.com/zeroclaw-labs/zeroclaw/issues/8560) — 3 条评论。S1，无界子进程等待，同问题也影响 robot-kit TTS 与 ffmpeg。
12. [#8720 — Disable cachePoint for Bedrock Nova 2 Lite](https://github.com/zeroclaw-labs/zeroclaw/issues/8720) — 3 条评论。provider 配置粒度不足。
13. [#9035 — Docker Compose gateway loopback-bound behind published port](https://github.com/zeroclaw-labs/zeroclaw/issues/9035) — 3 条评论。S1，端口可发布但内部仍绑 127.0.0.1。

**热点背后的诉求**：跨平台一致性（Windows/macOS/Termux）、安全/可观测（Landlock、SSRF、API key 泄漏、依赖 CVE）、用户对 agent 在 web/移动端"不打断"行为的期待。

---

## 5. Bug 与稳定性

按严重程度排序（数据来自 issue 自带 severity 标签）：

### S1 — workflow blocked

| Issue | 描述 | 是否有 fix PR |
|---|---|---|
| [#8559](https://github.com/zeroclaw-labs/zeroclaw/issues/8559) | Web dashboard 关闭聊天窗口后 agent loop 被误判为中断 | 无 |
| [#8560](https://github.com/zeroclaw-labs/zeroclaw/issues/8560) | `browser_open` 启动器失败时无限等待，agent turn 挂死 | 无 |
| [#8654](https://github.com/zeroclaw-labs/zeroclaw/issues/8654) | skill-review fork 越界切片 → SIGSEGV（exit 139, panic=abort） | 无 |
| [#9035](https://github.com/zeroclaw-labs/zeroclaw/issues/9035) | Docker Compose 端口可发布但 gateway 仍绑 loopback → "Connection refused" | 无 |
| [#9085](https://github.com/zeroclaw-labs/zeroclaw/issues/9085) | pgvector 启用时 `try_enable_pgvector` 嵌套 runtime panic | 无 |
| [#7527](https://github.com/zeroclaw-labs/zeroclaw/issues/7527) | macOS desktop 重开空白/无窗口（标签 `status:blocked, r:needs-repro`） | 无 |

### S2 — degraded behavior

| Issue | 描述 | 是否有 fix PR |
|---|---|---|
| [#7462](https://github.com/zeroclaw-labs/zeroclaw/issues/7462) | Windows 74 个测试失败 | 有（#7461 配套） |
| [#8973](https://github.com/zeroclaw-labs/zeroclaw/issues/8973) | Landlock 阻止 shell 访问 `/dev/null` 等系统文件 | 有（#9233 ✅、#9114 ⏳） |
| [#6350](https://github.com/zeroclaw-labs/zeroclaw/issues/6350) | WhatsApp Web allowed-numbers 对 LID 联系人失效，消息静默丢弃 | 部分（#9382、#9385 推进中） |
| [#8731](https://github.com/zeroclaw-labs/zeroclaw/issues/8731) | Stdio MCP 子进程在 daemon PID 下累积为僵尸 | 部分（#9418 处理 stdio 路由，reap 行为相关） |
| [#8642](https://github.com/zeroclaw-labs/zeroclaw/issues/8642) | MCP tool-schema 克隆导致 RSS 无界增长（从 #5542 拆出） | 无（独立跟踪） |
| [#9386](https://github.com/zeroclaw-labs/zeroclaw/issues/9386) | **Gemini API key 通过 `?key=` 出现在 URL 中，`sanitize_api_error` 未剥离，泄漏到用户聊天** | 无（🔴 安全敏感，2026-07-26 新开） |
| [#7808](https://github.com/zeroclaw-labs/zeroclaw/issues/780

</details>

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*