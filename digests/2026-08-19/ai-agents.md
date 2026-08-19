# OpenClaw 生态日报 2026-08-19

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-08-19 00:52 UTC

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

# OpenClaw 项目日报 · 2026-08-19

> 数据来源：openclaw/openclaw GitHub 仓库近 24 小时活动

---

## 1. 今日速览

OpenClaw 今日处于 **高度活跃但保守收敛** 的状态：Issues 端 500 条更新（新开/活跃 468 条、关闭 32 条），PR 端 500 条更新（待合并 379、合并/关闭 121），但 **0 个新版本发布**，说明今天的工作重心集中在 review、修复与重构，而非版本推进。P0/P1 级稳定性问题（SQLite 损坏、Gateway 启动阻塞、Migration 失败、Crash Loop）持续占据讨论热度，不少已挂在主线超过 30 天未被关闭。社区提交方向高度集中在 **session/cron/健康度** 三大稳定性领域，与上一周期趋同。

---

## 2. 版本发布

🚫 **今日无新版本发布**。从 issue 与 PR 引用线索看，社区仍围绕 2026.7.1、2026.8.1-beta.2 等近期版本做修复；尚无 2026.8.1 正式版或下一次 beta 切出的迹象。

---

## 3. 项目进展

### 今日合并/关闭 PR

| 分支 | 标题 | 类别 | 状态 |
|---|---|---|---|
| [#120900](https://github.com/openclaw/openclaw/pull/120900) | feat(ui): review install policy warnings | 安全·UI | ✅ CLOSED |
| [#121906](https://github.com/openclaw/openclaw/pull/121906) | feat(ui): show domain favicons on chat links | UI 增强 | ✅ CLOSED |
| [#116489](https://github.com/openclaw/openclaw/pull/116489) | feat(security): require acknowledgement for install policy warnings | 安全策略 | ✅ CLOSED |
| [#125986](https://github.com/openclaw/openclaw/pull/125986) | refactor(telegram): remove forum cache test reset | 重构 | ✅ CLOSED |
| [#101290](https://github.com/openclaw/openclaw/issues/101290) | CLI startup preflight can corrupt the live state DB | P0 Bug | ✅ CLOSED |
| [#103231](https://github.com/openclaw/openclaw/issues/103231) | `claude-cli` backend `ownsNativeCompaction` 失效 | P1 Bug | ✅ CLOSED |
| [#79614](https://github.com/openclaw/openclaw/issues/79614) | agent: assistant draft can ignore newest user message | P1 Bug | ✅ CLOSED |

**方向总结：**
- **安全/治理**：连续关闭两个安装策略警告相关的 PR（#120900、#116489），说明 OpenClaw 正在把"插件安装二次确认"做成完整链路（CLI + Web UI）。
- **UI 增强**：favicon 渲染默认关闭、上传隐私默认本地化（#121906），是社区非常看重的"轻量友好"改动。
- **稳定性**：P0/P1 三个高危 bug（DB 损坏、claude-cli compaction 失败、stale-reply）当日关闭，意味着 2026.7.x 与 2026.8-beta 线上已确认修复点位。

### 重要待合并 PR（高分但仍 OPEN）

- [#126053](https://github.com/openclaw/openclaw/pull/126053) — `refactor: consolidate meeting and media provider families`（XL、维护者提交、Zoom/Teams/Vydra）。合并风险标注 compatibility，是大范围解耦重构。
- [#126096](https://github.com/openclaw/openclaw/pull/126096) — `fix(agents): keep guided auth atomic through creation`（P1、auth-provider）：修复 `openclaw agents add` 中途失败留下孤儿凭据的问题。
- [#125143](https://github.com/openclaw/openclaw/pull/125143) — `fix(cli): allow agent selection for direct inference`（P1、automerge armed）：补齐多 agent 下的直推命令。
- [#126094](https://github.com/openclaw/openclaw/pull/126094) — `fix(sessions): keep visible spawns in the parent group`：让子会话默认继承父会话分组（微但高频 UX 修复）。
- [#126095](https://github.com/openclaw/openclaw/pull/126095) — `fix(cron): prune terminal task history after seven days`：对齐 7 天保留文档与实际行为。
- [#126087](https://github.com/openclaw/openclaw/pull/126087) — `fix: restart-recovered turns no longer show fatal errors`：消除 Gateway 重启恢复期间对用户显示"use /new"误报。
- [#125904](https://github.com/openclaw/openclaw/pull/125904) — `fix(sessions): preserve committed results across reconnects`：防止 committed 操作被重连回执错误地拒绝。
- [#126102](https://github.com/openclaw/openclaw/pull/126102) — `fix(ui): dismiss completed progress cards`：补完控件显隐。
- [#126058](https://github.com/openclaw/openclaw/pull/126058) — `fix(ui): refresh Browser when sidebar tab activates`（#123874 回归修复）。

整体看，**主线推进保守但稳**：大重构（#126053、等价物）仍待 maintainer look，绝大多数 PR 状态停留在 `waiting on author` / `ready for maintainer look`，automerge armed 极少。

---

## 4. 社区热点

按评论数排序，今日讨论最活跃的话题集中在 **"观测 + 长期未解"** 两个方向：

| 排名 | Issue | 评论 | 主题 | 解读 |
|---|---|---|---|---|
| 1 | [#77598](https://github.com/openclaw/openclaw/issues/77598) | 23 | 直播观察 dev agent 行为与轨迹 | 维护者 **pashpashpash** 自 5 月起持续 24h 观察一个 dev agent；这条 issue 是观察日志的"载体"，体现 OpenClaw 团队正在用真实 agent 暴露缺陷。 |
| 2 | [#112423](https://github.com/openclaw/openclaw/issues/112423) | 16 | 大型 SQLite transcript 归档阻塞 gateway 事件循环 | 数据规模和线程模型之间的根本冲突。 |
| 3 | [#101290](https://github.com/openclaw/openclaw/issues/101290) | 15 | CLI startup preflight 损坏 live state DB 🟢 已 CLOSED | 验证性最强、最受关注的 P0 之一。 |
| 4 | [#38327](https://github.com/openclaw/openclaw/issues/38327) | 14 | google-vertex/gemini-3.1-pro-preview 触发 "Cannot convert undefined or null" 回归 | 自 2026.3.2 起的回归，至今未修复，影响所有 Vertex 用户。 |
| 5 | [#79902](https://github.com/openclaw/openclaw/issues/79902) | 14 | database-first runtime 之上给"伴侣型"消费者提供 SQLite transcript/session 缝隙 | 长期方向性建议，与 [#78595](https://github.com/openclaw/openclaw/issues/78595) 关联。 |
| 6 | [#113306](https://github.com/openclaw/openclaw/issues/113306) | 13 | SQLite snapshot restore 缺少端到端崩溃与身份保证 | 共识已经明确，但 fix PR 难产。 |
| 7 | [#111498](https://github.com/openclaw/openclaw/issues/111498) | 12 | Anthropic auth 恢复后 workspace-state migration 永久阻塞主 agent | 升级路径上的高摩擦点。 |

**诉求归纳：**
- "**让数据库看得见**"：SQLite 正在变成 runtime 真理来源，但归档、迁移、恢复、parent 目录管护都还是手工拼凑。
- "**不要再损坏我的 DB**"：P0/P1 仍有 5+ 条与 SQLite 写路径相关。
- "**长期观察 / 长期承诺**"：超过 90 天未关闭的 P1 不在少数，社区开始用 `clawsweeper-recovery-stuck` 标签统一打标记。

---

## 5. Bug 与稳定性

按严重程度排序（仅列今日仍在场或当日新进者）：

### 🔴 P0（生产可用性阻断）
- [#101290](https://github.com/openclaw/openclaw/issues/101290) — CLI startup preflight 损坏 live state DB（**当日 CLOSED**）：macOS 2026.6.6 上 4 次复现，vanilla SQLite 控制组不重现。
- [#112395](https://github.com/openclaw/openclaw/issues/112395) — 6.11 → 7.1 升级后 startup migration preflight 阻塞 gateway，迁移表与租约全空。**尚无 fix PR**。

### 🟠 P1（主要功能故障）
- [#112423](https://github.com/openclaw/openclaw/issues/112423) — 大 SQLite transcript 归档阻塞 gateway 事件循环。**无 fix PR**。
- [#38327](https://github.com/openclaw/openclaw/issues/38327) — google-vertex/gemini-3.1-pro-preview 自 2026.3.2 起回归。**无 fix PR**。
- [#113306](https://github.com/openclaw/openclaw/issues/113306) — SQLite snapshot restore 缺崩溃/身份保证。**无 fix PR**。
- [#111498](https://github.com/openclaw/openclaw/issues/111498) — Anthropic auth 恢复后 workspace-state migration 永久阻塞主 agent。**无 fix PR**。
- [#83959](https://github.com/openclaw/openclaw/issues/83959) — Codex app-server 启动 retries 可能在 replacement server 就绪前耗尽。**已有源码内复现标签，无 fix PR**。
- [#114154](https://github.com/openclaw/openclaw/issues/114154) — bundle-mcp 工具通过策略但 agent session 永不 bundle。**无 fix PR**。
- [#114211](https://github.com/openclaw/openclaw/issues/114211) — Matrix 房间 agent 触发 no-reply / 重启恢复 / stale session 自循环。**无 fix PR**。
- [#86612](https://github.com/openclaw/openclaw/issues/86612) — Docker gateway container restart loop（Windows + `OPENCLAW_SANDBOX=1` + `OPENCLAW_HOME=/mnt/...`）。**无 fix PR**。
- [#92186](https://github.com/openclaw/openclaw/issues/92186) — Foreground reply fence 取消 WhatsApp 早并发消息的投递。**无 fix PR**。
- [#94939](https://github.com/openclaw/openclaw/issues/94939) — 6.x state migration 留下 0 字节 channel conversation-store SQLite（MS Teams）。**无 fix PR**。
- [#90361](https://github.com/openclaw/openclaw/issues/90361) — memory_search "index metadata is missing" 间歇出现，作者已本地 hotfix 但未提交。**无 fix PR**。
- [#91144](https://github.com/openclaw/openclaw/issues/91144) — Windows native CLI gateway Scheduled Task 不持续运行。**无 fix PR**。
- [#90098](https://github.com/openclaw/openclaw/issues/90098) — Control UI / gateway 大附件触发 RangeError。**无 fix PR**。
- [#97680](https://github.com/openclaw/openclaw/issues/97680) — Beta tag 升级可能让官方外部插件停在 latest。**无 fix PR**。
- [#124788](https://github.com/openclaw/openclaw/issues/124788) — beta.2 gateway 事件循环每 ~10.9 分钟阻塞 ~100s，关闭所有 memory plugin 仍存在。**无 fix PR**。
- [#112248](https://github.com/openclaw/openclaw/issues/112248) — `@openclaw/codex` plugin 在 boot 时 `TypeError`，所有 `/codex` 命令静默 no-op。**无 fix PR**。
- [#114234](https://github.com/openclaw/openclaw/issues/114234) — usage-cost refresh lock 在容器（PID 重用）下永久冻结缓存。**无 fix PR**。
- [#84662](https://github.com/openclaw/openclaw/issues/84662) — Codex app-server 把每轮 OpenClaw runtime context 写入 native user history 导致 input 膨胀。**无 fix PR**。
- [#91941](https://github.com/openclaw/openclaw/issues/91941) — Feishu streaming card 切到 full-content 后长回复延迟剧增。**无 fix PR**。
- [#43374](https://github.com/openclaw/openclaw/issues/43374) — 4 个 agent 并发时所有 LLM API 同时 ~60–90s 超时（明确非上游问题）。**无 fix PR**。
- [#77467](https://github.com/openclaw/openclaw/issues/77467) — MiniMax Portal OAuth 自动刷新未实现。**无 fix PR**。

### 🟡 P2（功能性 Bug / 体验回归）
- [#88657](https://github.com/openclaw/openclaw/issues/88657) — DeepSeek V4 Flash 不完整 turn（OpenRouter 路径，2026.5.27 起）。
- [#75782](https://github.com/openclaw/openclaw/issues/75782) — Embedded-run `auth` 阶段无论状态都同步阻塞 10–15s。
- [#92241](https://github.com/openclaw/openclaw/issues/92241) — Gateway 升级/回滚后持 stale module import path，`ERR_MODULE_NOT_FOUND` 静默丢消息。
- [#90378](https://github.com/openclaw/openclaw/issues/90378) — 5.28 → 6.1 cron store 静默迁移 SQLite、新 job 默认 `delivery.mode=announce` 触发频道错误。
- [#117609](https://github.com/openclaw/openclaw/issues/117609) — 瞬时 LLM/socket 错误在 channel/one-shot 上重试但 embedded-assistant 阶段不重试 → 长 turn 整体死亡。
- [#102534](https://github

---

## 横向生态对比

# AI 智能体开源生态横向对比分析报告

**报告日期：** 2026-08-19
**覆盖项目：** OpenClaw、NanoBot、Hermes Agent、PicoClaw、NanoClaw、IronClaw、LobsterAI、Moltis、ZeroClaw（NullClaw / TinyClaw / ZeptoClaw / CoPaw 当日无数据）

---

## 1. 生态全景

2026-08-19 当日，个人 AI 助手与自主智能体开源生态呈现**"高活跃 + 高分化"**的成熟期特征：成熟项目（OpenClaw、Hermes Agent、ZeroClaw）单日 Issue+PR 流转量已达 50–500 级别，处于"边治理边积压"的稳态运营期；中型项目（NanoClaw、IronClaw、LobsterAI、Moltis、NanoBot）则集中推进架构级演进，发布节奏密集，**当日有 4 个项目触发版本动作**（Hermes v0.20.4、IronClaw 1.3.0-rc.2、LobsterAI 2026.8.18、Moltis 双 patch）。技术方向上，**SQLite-as-runtime、Profile 多路复用身份一致性、WebUI/TUI 一致性、安全默认基线、Windows 平台兼容性**是跨项目的共同议题。NullClaw / TinyClaw / ZeptoClaw / CoPaw 等长尾项目当日静默，提示生态注意力高度向头部集中。

---

## 2. 各项目活跃度对比

| 项目 | Issues 更新 | PR 更新 | 今日 Release | 合并/关闭率 | 健康度 |
|---|---|---|---|---|---|
| **OpenClaw** | 500 (468 活跃/32 关闭) | 500 (379 待/121 合) | 🚫 无 | PR 24.2% | 🟠 活跃但积压 |
| **Hermes Agent** | 50 | 50 | ✅ v0.20.4 (patch) | ~24% | 🟢 健康 |
| **ZeroClaw** | 50 (31/19) | 50 (47/3) | 🚫 无 | Issue 38% | 🟠 治理中 |
| **NanoClaw** | 3 | 38 (22/16) | 🚫 无 | PR 42.1% | 🟢 高强度迭代 |
| **IronClaw** | 22 | 39 | ✅ 1.3.0-rc.2 | 高 | 🟢 GA 冲刺期 |
| **NanoBot** | 10 (7/3) | 27 (21/6) | 🚫 无 | PR 22.2% | 🟢 稳健 |
| **LobsterAI** | 9 | 19 | ✅ 2026.8.18 | PR **84%** | 🟢 高效 |
| **Moltis** | 2 | 6 (1/5) | ✅ 20260818.06 + .08 | PR 83.3% | 🟢 优秀 |
| **PicoClaw** | 6 | 4 (2/2) | 🚫 无 | PR 50% | 🟢 良性 |
| **NullClaw** | 0 | 0 | 🚫 无 | — | ⚪ 静默 |
| **TinyClaw** | 0 | 0 | 🚫 无 | — | ⚪ 静默 |
| **ZeptoClaw** | 0 | 0 | 🚫 无 | — | ⚪ 静默 |
| **CoPaw** | N/A | N/A | N/A | — | ⚪ 无数据 |

**关键观察：**
- **绝对量维度**：OpenClaw 单日 1000 条流转量远超第二梯队，是生态事实上的"引力中心"
- **效率维度**：Moltis（83.3%）与 LobsterAI（84%）展现了"小步快跑 + 高合并率"的最佳实践
- **节奏维度**：Hermes、IronClaw、LobsterAI、Moltis 在 24h 内均有版本动作，**形成版本发布密集窗口**

---

## 3. OpenClaw 在生态中的定位

### 定位特征
OpenClaw 是生态中**唯一进入"治理型成熟期"**的项目：500/500 的 Issue+PR 流转量、长期 P0/P1 标签体系（`clawsweeper-recovery-stuck`）、30+ 天悬挂 issue 批量管理，反映其用户规模与代码规模均处于绝对头部。

### 与同类对比

| 维度 | OpenClaw | Hermes Agent | IronClaw | NanoClaw |
|---|---|---|---|---|
| **社区规模** | 头部（500+/日） | 中大型（50/日） | 中型（22/日） | 中型（38 PR/日） |
| **代码体量** | 巨型（多 XL PR） | 中大型（74 PR 聚合发版） | 中型（rc 冲刺） | 中大型（架构重构） |
| **路线** | 全栈多平台+多 provider | Desktop + Web | WebUI + Capability 归一化 | 可插拔驱动层 |
| **节奏** | 保守收敛 | 密集修复 | 版本冲刺 | 重构密集 |
| **风险面** | SQLite 数据一致性积压 | 多 Profile 身份晚绑定 | IronHub 自托管配置锁死 | [BREAKING] 数据库异步化 |

**技术路线差异：** OpenClaw 采用"全栈一体化 + 多通道"路线；Hermes Agent 倾向"Profile × Connection × Route 身份规范化"；IronClaw 强调"Capability 响应归一化 + WASM 工具契约"；NanoClaw 走"异步可移植 DB + 可插拔 SessionDriver"路线。

**社区规模：** OpenClaw 在 issue/PR 量级上是 Hermes/ZeroClaw 的 10 倍、NanoClaw/IronClaw 的 13–20 倍，是**事实上的生态主战场**。

---

## 4. 共同关注的技术方向

### 4.1 SQLite-as-Runtime 与数据库可观测性 🟢 强信号
- **OpenClaw**：`#112423`（大 transcript 归档阻塞事件循环）、`#113306`（snapshot restore 缺崩溃保证）、`#101290`（CLI preflight 损坏 live DB，已关闭）、`#111498`（migration 永久阻塞）
- **NanoClaw**：`#3334` [BREAKING] 数据库异步化、`#3333/#3332/#3335` 数据库驱动层重构
- **ZeroClaw**：依赖治理中 `audit.toml`/`deny.toml` drift
- **LobsterAI**：`#1597` SQLite 外键约束启用（孤儿数据）

**共识：** SQLite 已成为事实 runtime 真理来源，但归档、迁移、恢复、并发写入路径均未形成成熟抽象层。

### 4.2 多通道能力对称性 🟢 强信号
- **PicoClaw**：`#3287` IRC 长消息合并（6 评论）、`#3328` LINE webhook 配置幽灵化
- **NanoBot**：`#5149` WhatsApp "能听不能说"音频通道缺陷
- **OpenClaw**：`#114211` Matrix 房间 stale session 自循环
- **ZeroClaw**：`#8410` channel 任务需"无新邮件则静默"outcome、`#9609` WhatsApp Web 业务模式策略不读

**共识：** 通道（channel）抽象在 2026 年仍是"边缘拼凑"状态，发送/接收、长消息/短消息、个人/群组、Webhook/轮询能力矩阵不对称。

### 4.3 LLM Provider 适配与协议兼容 🟢 强信号
- **PicoClaw**：`#1158` Anthropic Messages 原生协议支持（已合并）、`#3339` Google Antigravity 429
- **OpenClaw**：`#38327` Gemini-3.1-pro-preview 自 2026.3.2 起回归、`#43374` 4 agent 并发超时
- **Hermes Agent**：`#89589` Anthropic 适配器 `response_format` 泄漏（最终合并版）
- **Moltis**：`#1198` OpenAI Responses API 路由
- **NanoBot**：`#5425` socks:// 代理别名、`#2493` LangSmith 集成回归
- **NanoClaw**：`#3337` codex 异步 DB await

**共识：** Provider 适配是**高频维护成本项**，每个新版本都要打补丁；Anthropic/OpenAI/Google 三大协议族（Messages / Chat Completions / Responses）正同时在生态中并行演进。

### 4.4 WebUI / TUI 一致性 🟢 强信号
- **PicoClaw**：`#806` Web UI 支持（8 👍、9 评论、`priority: high`，6 个月未响应）
- **NanoBot**：TUI 凭据刷新、composer 焦点、`#5358` WebUI 跨 session 消息总线
- **IronClaw**：`#7724` WebUI 语音转写、`#7728` Google Docs 语义编辑工具
- **OpenClaw**：`#126058` Browser refresh 回归、`#126102` progress card 显隐
- **ZeroClaw**：`#7929` 统一 slash-command 注册表
- **Moltis**：`#1206` Files 库 + Finder 风格浏览器
- **NanoClaw**：`#5421` 设计意图先于实现流程

**共识：** "终端可视化"已经从"TUI 够用"演进到"WebUI 必选"，但 TUI/WebUI 双轨漂移是普遍痛点。

### 4.5 安全默认基线与资源限制 🟠 中信号
- **NanoBot**：`#4797` `ExecTool._spawn()` 无 ulimit/cgroups/CPU/内存限制（LLM 可发 `yes > /dev/null`）、`#4880` `restrict_to_workspace` 默认值
- **OpenClaw**：连续两个 PR（`#120900`/`#116489`）收敛安装策略警告二次确认
- **NanoClaw**：`#3339` `fix(setup): fail closed when stored sign-in cannot be verified`
- **Moltis**：Podman 沙箱逃逸分支、fail closed 原则
- **ZeroClaw**：`#10107` Google STT API key 出现在 URL（应改用 header）

**共识：** "LLM 驱动的 shell 调用安全"是行业级开放问题，**默认安全基线尚未收敛**。

### 4.6 Profile / 多身份 / 多连接一致性 🟠 中信号
- **Hermes Agent**：`#88715` + `#89346` + `#89131` + `#88680` 多路复用 Profile 身份晚绑定（4 个同源问题）
- **OpenClaw**：`#126094` 子会话默认继承父会话分组、`#125904` 重连保留 committed 结果

**共识：** "用户/Profile/Connection/Route" 四元组的身份规范化正在酝酿一次结构性重构，Hermes Agent 与 OpenClaw 是该方向的两个并进尝试。

### 4.7 Windows 平台测试覆盖 🟠 中信号
- **ZeroClaw**：`#7462` Windows 74 个测试失败（Unix-only 命令、路径、控制台编码 936，17 评论）
- **NanoBot**：`#5433` exec truncation 输出等待、Windows CI 稳定性
- **OpenClaw**：`#86612` Docker gateway 在 Windows 重启循环、`#91144` Windows native CLI Scheduled Task
- **LobsterAI**：`#1587` macOS Intel 首次启动崩溃

**共识：** Linux-first CI 策略导致 Windows 用户频繁踩坑，跨平台兼容正在成为"质量债"。

---

## 5. 差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 技术架构特征 |
|---|---|---|---|
| **OpenClaw** | 全栈多平台、多 provider、多 channel | 重度集成的开发者 / 企业用户 | 巨型单体 + 多通道适配 + SQLite runtime |
| **Hermes Agent** | Desktop + Web + Nix 打包 | 桌面重度用户、Linux/Nix 部署者 | Profile × Connection 多路复用 + Electron |
| **IronClaw** | 自动化 + WebUI + Capability 归一化 | 企业 FDE、QA 团队 | WASM 工具契约 + libSQL + Resource Governor |
| **NanoClaw** | 可插拔运行时 + 异步 DB | 部署场景多元化的运维 | SessionDriver 接缝 + 异步 portable DB |
| **ZeroClaw** | Rust 性能 + 控制平面统一 | 性能敏感、追求安全治理 | 统一 turn engine + 严格供应链审计 |
| **Moltis** | 轻量 runtime + 容器化优先 | Linux 容器用户、追求轻量 | Files 库 + Connector 体系 + 多沙箱 |
| **LobsterAI** | macOS/Windows 原生客户端 + 多引擎 | 桌面消费级用户 | Electron + 多引擎抽象（OpenClaw / DSH / Hermes 候选） |
| **NanoBot** | TUI 优先 + WebUI 跟进 | 终端重度用户、研究者 | TUI/WebUI 双轨 + 多 provider |
| **PicoClaw** | 极简 TUI + 边缘场景 | 小型部署（Raspberry Pi 等） | 最小化 runtime + 多 provider 协议 |
| **NullClaw / TinyClaw / ZeptoClaw / CoPaw** | 不明确 / 已停止活跃 | — | — |

**架构关键差异：**
- **驱动层抽象**：NanoClaw（SessionDriver）、IronClaw（Capability

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报

**报告日期**：2026-08-19  
**数据来源**：[github.com/HKUDS/nanobot](https://github.com/HKUDS/nanobot)

---

## 1. 今日速览

NanoBot 项目今日呈现**中高强度开发活跃度**：过去 24 小时共产生 10 条 Issue 更新（其中 7 条新开、3 条关闭）与 27 条 PR 更新（21 条待合并、6 条已合并/关闭），无新版本发布。当日工作重心集中在 **TUI/WebUI 体验打磨**、**AgentLoop 异步任务生命周期修复**、**安全默认值收敛**以及 **provider/channel 兼容性扩展**四大方向，整体 Issue 关闭率 30%、PR 关闭/合并率 22%，社区修复响应效率良好。

---

## 2. 版本发布

**无新版本发布。** 今日所有改动仍在主分支与 PR 流程中，未触发新的 release tag。

---

## 3. 项目进展

今日共有 6 条 PR 关闭/合并，主要推进了以下方向：

| PR | 标题 | 贡献者 | 价值 |
|---|---|---|---|
| [#5432](https://github.com/HKUDS/nanobot/pull/5432) | `fix(tui): refresh expired API credentials` (已关闭) | [@chengyongru](https://github.com/chengyongru) | 修复 TUI 凭据过期后无法自动续期的体验断层，覆盖 session/history/context/commands/mentions/runtime 等高频路径 |
| [#5433](https://github.com/HKUDS/nanobot/pull/5433) | `test(exec): wait deterministically for truncation output` (已关闭) | [@chengyongru](https://github.com/chengyongru) | 替换固定 500ms 轮询为输出感知等待，改善 Windows 3.14 CI job 测试稳定性 |
| [#5427](https://github.com/HKUDS/nanobot/pull/5427) | `fix(tui): keep composer visible and focused` (已关闭) | [@chengyongru](https://github.com/chengyongru) | 修复 TUI 点击其他区域后输入框失焦问题，强化 composer 视觉对比 |
| [#5358](https://github.com/HKUDS/nanobot/pull/5358) | `feat(webui): add lightweight cross-session messaging` (已关闭) | [@chengyongru](https://github.com/chengyongru) | 引入 server-owned `@handle`、跨 session 文本消息总线、可滚动 source 速率限制，为多 agent 协同打底 |

**项目整体推进度**：今日合并节奏显示维护者在「TUI/WebUI 体验一致性」与「Windows/Linux 多平台测试稳定性」上明显加大投入，单日 PR 关闭数处于近 30 日均值偏上水平。

---

## 4. 社区热点

按评论数与交互权重排序：

1. **[Issue #2493](https://github.com/HKUDS/nanobot/issues/2493) — LANGSMITH is not working (anymore) after latest update**  
   作者：[@3L1AS](https://github.com/3L1AS) | 评论 7 | 👍 1 | 标签：`good first issue`  
   因移除 `litellm_provider.py` 导致 LangSmith 集成断裂，社区已等约 5 个月。今日已收到对应修复文档 [PR #5436](https://github.com/HKUDS/nanobot/pull/5436)，诉求即将闭环。

2. **[Issue #5149](https://github.com/HKUDS/nanobot/issues/5149) — no audio ?**  
   作者：[@mxnbf](https://github.com/mxnbf) | 评论 6  
   WhatsApp 通道无法发送音频但接收正常（疑似 ffmpeg 路径/duration 问题），属于**核心通信通道能力缺陷**，尚无对应修复 PR。

3. **[Issue #5428](https://github.com/HKUDS/nanobot/issues/5428) + [#5429](https://github.com/HKUDS/nanobot/issues/5429) — AgentLoop 异步任务双重 bug**  
   作者：[@yu-xin-c](https://github.com/yu-xin-c) | 同时报告两个高度关联的 `AgentLoop` 缺陷：空集合泄漏 + 后台任务异常被吞。同一作者已提交对应 [PR #5430](https://github.com/HKUDS/nanobot/pull/5430) 和 [PR #5431](https://github.com/HKUDS/nanobot/pull/5431)，构成「发现—修复」完整闭环。

**热点背后的诉求**：一是「regression tolerance」（升级后旧集成路径不能悄悄断裂），二是「底层异步生命周期可观测性」，三是「跨通道能力对称」（发/收能力需对齐）。

---

## 5. Bug 与稳定性

按严重程度排序：

| 等级 | 编号 | 问题 | 是否已有 fix PR |
|---|---|---|---|
| 🔴 高 | [#4797](https://github.com/HKUDS/nanobot/issues/4797) | `ExecTool._spawn()` 无 ulimit/cgroups/CPU/内存限制，LLM 可发 `yes > /dev/null` 或 fork bomb 耗尽资源 | ❌ 无 |
| 🟠 中-高 | [#5428](https://github.com/HKUDS/nanobot/issues/5428) | `AgentLoop._active_tasks` 长期保留空 set，内存随 session 数线性增长 | ✅ [PR #5430](https://github.com/HKUDS/nanobot/pull/5430) |
| 🟠 中-高 | [#5429](https://github.com/HKUDS/nanobot/issues/5429) | `AgentLoop.schedule_background()` 丢弃 task 时忽略异常，后台错误静默失败 | ✅ [PR #5431](https://github.com/HKUDS/nanobot/pull/5431) |
| 🟡 中 | [#5149](https://github.com/HKUDS/nanobot/issues/5149) | WhatsApp 通道无法发送音频消息 | ❌ 无 |
| 🟡 中 | [#5425](https://github.com/HKUDS/nanobot/issues/5425) | 自定义 OpenAI-compatible provider 不支持 `socks://` 代理别名 | ✅ [PR #5435](https://github.com/HKUDS/nanobot/pull/5435) |
| 🟡 中 | [#5434](https://github.com/HKUDS/nanobot/pull/5434)（fix PR） | Mattermost 系统消息（加入/离开通知）被当作用户消息处理 | ✅ 修复已提交 |
| 🟢 低（已关闭） | [#5417](https://github.com/HKUDS/nanobot/issues/5417) | Windows 下 WebUI 因 gateway 拒绝 venv PID 交接而退出 | 讨论已关闭，主体修复见 [#5415](https://github.com/HKUDS/nanobot/pull/5415) |

**回归风险重点**：[#4797](https://github.com/HKUDS/nanobot/issues/4797) 是当下最被忽视的高危项，建议维护者优先评估。

---

## 6. 功能请求与路线图信号

| 候选方向 | 支撑 PR / Issue | 评估 |
|---|---|---|
| **WebUI 回合可观测性 + 安全恢复** | [PR #5420](https://github.com/HKUDS/nanobot/pull/5420) | 将单回合投影到单一答案面并区分 context/累计 input、标记估算用量，重启即生命周期边界 |
| **WebUI follow-up 建议** | [PR #5408](https://github.com/HKUDS/nanobot/pull/5408) | 仿 DeerFlow 交互：空 composer 直接发送、有草稿则追加；provider 中立 + 严格行协议 |
| **MCP 工具 schema 字节预算** | [PR #5388](https://github.com/HKUDS/nanobot/pull/5388) | 默认关闭的 opt-in 字节预算，确定性选择 MCP 子集，失败开放；可大幅压低长会话 token |
| **mst-python 元搜索 provider** | [PR #5234](https://github.com/HKUDS/nanobot/pull/5234) | 融合 DuckDuckGo/Google/Brave/Bing 的 RRF 结果，丰富检索覆盖 |
| **MiniMax 音乐生成指引** | [PR #5212](https://github.com/HKUDS/nanobot/pull/5212) | music provider stack 的可发现性增强 |
| **LangSmith 集成回归修复** | [PR #5436](https://github.com/HKUDS/nanobot/pull/5436) | 仅文档变更，待合并即闭环 #2493 |
| **天网式持续目标收敛** | [PR #5257](https://github.com/HKUDS/nanobot/pull/5257) | 修复无终止条件目标被永久记录的 admission/retention 两端问题 |

**路线图信号总结**：今日 PR 显示维护者正同步推进「**可观测性 & 成本控制**」（#5420、#5388）、「**多平台一致性**」（TUI 凭据刷新、Windows PID handoff）和「**provider/channel 扩展**」（mst、MiniMax、Mattermost、proxy）三条主线。

---

## 7. 用户反馈摘要

从活跃 Issue 评论中提炼：

- **升级恐惧**（[Issue #2493](https://github.com/HKUDS/nanobot/issues/2493)）：用户在升级后才发现依赖链路已断裂，反映出项目在 **deprecation changelog** 与 **升级前提示** 上有待加强。
- **通道能力不对称**（[Issue #5149](https://github.com/HKUDS/nanobot/issues/5149)）：WhatsApp「能听不能说」是真实部署痛点，WhatsApp voice 类用例应该是 LLM agent 高频交互形态。
- **资源安全焦虑**（[Issue #4797](https://github.com/HKUDS/nanobot/issues/4797)）：LLM 驱动的 shell 调用被零成本地暴露系统资源，社区期待项目能提供**默认安全基线**而非纯靠 timeout 兜底。
- **第三方商业推广拒收**（[Issue #5372](https://github.com/HKUDS/nanobot/issues/5372)、[#5409](https://github.com/HKUDS/nanobot/issues/5409)）：两项「产品广告 + 收费试用」类 Issue 被社区快速关闭（均 0 评论即关闭），说明维护者对非技术商业化营销保持**严格过滤**。
- **设计意图先于实现**（[Issue #5421](https://github.com/HKUDS/nanobot/issues/5421)）：有贡献者主动按 ASK-FIRST 流程先提交设计问题再开 PR，反映社区**协作成熟度提升**。

---

## 8. 待处理积压

以下 Issue/PR 在过去 24 小时虽有活动迹象，但**总体处于长期等待维护者响应**的状态，建议关注：

| 类型 | 编号 | 标题 | 状态摘要 |
|---|---|---|---|
| Issue（高严重度） | [#4797](https://github.com/HKUDS/nanobot/issues/4797) | No resource limits on shell subprocesses | 创建 2026-07-06，至今**无 fix PR**，关联安全侧 PR [#4880](https://github.com/HKUDS/nanobot/pull/4880) 仍 OPEN |
| Issue（社区影响） | [#2493](https://github.com/HKUDS/nanobot/issues/2493) | LANGSMITH not working | 等待约 **5 个月**，已有 [#5436](https://github.com/HKUDS/nanobot/pull/5436) 修复 PR 在 review |
| Issue（通道能力） | [#5149](https://github.com/HKUDS/nanobot/issues/5149) | No audio (WhatsApp) | 创建 2026-07-28，**无对应 fix PR**，核心通信通道能力存缺口 |
| PR（安全关键 p1） | [#4880](https://github.com/HKUDS/nanobot/pull/4880) | `fix(security): default restrict_to_workspace to True` | 已 OPEN 超 1 个月，标签 `security` + `p1` + `conflict`，建议优先推动 |
| PR（p1 功能） | [#5234](https://github.com/HKUDS/nanobot/pull/5234) | integrate mst-python metasearch | 已 OPEN 16 天，p1 新 provider，等待 review |

**提醒维护者关注**：[#4880](https://github.com/HKUDS/nanobot/pull/4880) 将 `restrict_to_workspace` 默认为 `True` 是**对安全语义的默认强化**，与 [#4797](https://github.com/HKUDS/nanobot/issues/4797) 共同构成「默认安全基线」组合拳，建议在合并节奏上优先联动考虑。

---

*报告由 AI 智能体领域开源项目分析师生成。数据基线时间：2026-08-19。*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目日报 — 2026-08-19

---

## 1. 今日速览

Hermes Agent 今日维持高活跃度运营，**24 小时内共有 50 条 Issue 与 50 条 PR 更新**，并发布了一个补丁版本 v0.20.4。项目整体处于"密集修复 + 架构演进"双线并行的阶段：桌面端性能回归、Profile 多路复用身份一致性、Anthropic 适配器 `response_format` 泄漏等问题仍是当前主线；同时 `clarify` 多轮提问、XAI 1080p 视频生成、Desktop 皮肤持久化、Nix Home Manager 模块等多项增强功能持续推进。社区讨论集中在桌面渲染器 CPU 占用（macOS Intel）与多 Profile 身份晚绑定两个高频议题上，健康度评估为「活跃但存在多项待攻坚的稳定性债」。

---

## 2. 版本发布

### v0.20.4 (v2026.8.18) — 补丁版本

- **发布日期**：2026-08-18
- **性质**：Patch release，聚合 v0.20.3（v2026.8.1）以来合并的约 74 个 PR 的稳定标记版
- **目标用户**：Docker 镜像托管部署、Hermes 官网 Fresh Install 等下游消费者
- **破坏性变更**：无（纯 Patch 聚合）
- **迁移注意事项**：无强制迁移路径；running 生产实例无需立即升级，可随正常维护窗口滚动更新
- [Release 链接](https://github.com/NousResearch/hermes-agent/releases/tag/v2026.8.18)

---

## 3. 项目进展

今日共 12 条 PR 合并/关闭，以下为重点推进项：

| PR | 主题 | 说明 |
|---|---|---|
| [#89589](https://github.com/NousResearch/hermes-agent/pull/89589) | `fix(aux)`：翻译 Anthropic 适配器的 `response_format` 并在拒绝时重试 | **Anthropic 辅助任务 400 错误系列修复**的最终合并版，叠加在 [#83963](https://github.com/NousResearch/hermes-agent/pull/83963)、[#87987](https://github.com/NousResearch/hermes-agent/pull/87987)、[#85626](https://github.com/NousResearch/hermes-agent/pull/85626)、[#84948](https://github.com/NousResearch/hermes-agent/pull/84948) 等多轮重复尝试之上，标志着 `response_format` 泄漏问题正式收尾 |
| [#84178](https://github.com/NousResearch/hermes-agent/pull/84178) | `feat(nix)`：Home Manager 模块（与 NixOS 模块共享 `moduleCommon.nix`） | 回应 [#9056](https://github.com/NousResearch/hermes-agent/issues/9056) 的长期诉求（12 👍），为单用户 Linux 部署提供声明式用户级安装/凭证/记忆/cron 套件，且通过共享代码避免 NixOS 与 Home Manager 双模块漂移 |
| [#87005](https://github.com/NousResearch/hermes-agent/pull/87005) | `fix(gateway)`：在 `stderr_timestamp` 包装下保留 launchd supervisor 标记 | 修复 macOS launchd 仅标记直接子进程导致 `XPC_SERVICE_NAME` 失效的回归 |
| [#89585](https://github.com/NousResearch/hermes-agent/pull/89585) | `fix(cli)`：让弃用 `cwd` 提示在真实行而不是字面 `\n` 显示 | 修复 YAML 迁移提示字符串中双反斜杠被字面打印的小体验问题 |
| [#89175](https://github.com/NousResearch/hermes-agent/pull/89175) *（close）* | `goals`：CI 上 `test_goal_*` 因慢盘被静默丢弃首个 `/goal` 写入 | 解决磁盘 IO 慢的场景下首次 `/goal` 写操作被吞掉的 flakiness |

**整体判断**：项目今日在「Anthropic 适配器生态」「Nix 打包」「CLI 体验」三条线均有显著推进。其中 `response_format` 问题的多 PR 接力（→ 最终 [#89589](https://github.com/NousResearch/hermes-agent/pull/89589) 合并）是近一周最关键的稳定性修复闭环。

---

## 4. 社区热点

### 4.1 讨论最活跃

- **[#66616](https://github.com/NousResearch/hermes-agent/issues/66616) — [skills-index-watchdog] Skills 索引陈旧/降级（54 评论）**  
  自动化探针失败：索引 29.8h 超 26h 阈值。Skills Hub 强依赖 `/docs/api/skills-index.json`，由 `skills-index.yml` 与 `deploy-site.yml` cron 重建。社区反复追踪根因，属于基础设施侧长期风险。

- **[#88275](https://github.com/NousResearch/hermes-agent/issues/88275) — Desktop Renderer 闲置时 40-70% CPU（9 评论）**  
  macOS 13.3.1 + Intel Core i5-8279U + Hermes v0.20.2 + Electron 40.10.2，`Hermes Helper (Renderer)` 持续 40-73% CPU 占用，触发热降频。`disable_gpu=true` 部分缓解。

- **[#53902](https://github.com/NousResearch/hermes-agent/issues/53902) — v0.17.0 Renderer 困在 `fontations+temporal_rs` 循环（8 评论）**  
  自 v0.17.0（2026-06-27）起，Electron Renderer 在 `fontations` + `temporal_rs` 渲染循环中持续运行，GPU 激活率 ~98%，闲置功耗约 13W（约为正常 4 倍）。

### 4.2 反应最多

- **[#9056](https://github.com/NousResearch/hermes-agent/issues/9056) — Add a Nix Home Manager module（1 评论，12 👍）**  
  虽仅有 1 条评论，但 12 个赞显示社区对 Nix Home Manager 模块的需求强劲。已被今日合并的 [#84178](https://github.com/NousResearch/hermes-agent/pull/84178) 直接回应。

### 4.3 背景诉求分析

- **桌面端性能**（#88275 + #53902）反映出 Hermes Desktop 在 Intel macOS / 老旧硬件上的渲染管线仍有优化空间，可能涉及 `fontations`/`temporal_rs` 升级或 WebContents 渲染策略调整。
- **Skills 索引陈旧**（#66616）涉及发布流水线的定时器可靠性，是社区最关心的运营隐患之一。
- **多 Profile 身份一致性**（#88715、#89131、#88680、#89346）系列讨论显示"Profile + Connection + Route"三者之间的身份规范化正在酝酿一次结构性重构。

---

## 5. Bug 与稳定性

按严重程度排列：

### 🔴 P2 — 高优先级

| Issue | 描述 | 修复 PR 状态 |
|---|---|---|
| [#85624](https://github.com/NousResearch/hermes-agent/issues/85624) | Auto-title 100% 失败：OpenAI 专属 `response_format` 泄漏到 Anthropic Messages API | ✅ 已通过 [#89589](https://github.com/NousResearch/hermes-agent/pull/89589) / [#87987](https://github.com/NousResearch/hermes-agent/pull/87987) 等修复 |
| [#62202](https://github.com/NousResearch/hermes-agent/issues/62202) | Gateway 不在每回合后调用 `_post_turn_goal_continuation`，Goal 判定失效 | ✅ 已关闭 |
| [#17157](https://github.com/NousResearch/hermes-agent/issues/17157) | Discord slash command sync 因 diff 误判超时 | 🚧 仍 OPEN，未见对应 PR |
| [#18421](https://github.com/NousResearch/hermes-agent/issues/18421) | `/goal` judge 在 Agent 谎报文件写入时产生假阳性 | 🚧 仍 OPEN |
| [#88715](https://github.com/NousResearch/hermes-agent/issues/88715) | 多路复用：Profile 身份在 transport/session/storage/control 路径上晚绑定 | 🚧 仍 OPEN，伴随 [#89346](https://github.com/NousResearch/hermes-agent/issues/89346)、[#89131](https://github.com/NousResearch/hermes-agent/issues/89131) 同源问题 |
| [#82816](https://github.com/NousResearch/hermes-agent/issues/82816) | Auto-title 在 vLLM (xgrammar) 兼容端点上 100% 失败（HTTP 400） | ✅ 已关闭 |
| [#66118](https://github.com/NousResearch/hermes-agent/issues/66118) | 自定义 Ollama provider 下 `SOUL.md` / `AGENTS.md` 被忽略 | 🚧 仍 OPEN |
| [#89346](https://github.com/NousResearch/hermes-agent/issues/89346) | #88734 之后共享主 Profile 路由从 root store 重新加载会话历史 | 🚧 仍 OPEN |
| [#89111](https://github.com/NousResearch/hermes-agent/issues/89111) | Gateway 审批提示在远程 Windows 桌面上超时 | 🚧 仍 OPEN |
| [#89415](https://github.com/NousResearch/hermes-agent/issues/89415) | 凭证池缓存 provider cooldown，credit 充值后未重新探活 | 🚧 仍 OPEN |

### 🟡 P3 — 中优先级

| Issue | 描述 | 修复 PR 状态 |
|---|---|---|
| [#66616](https://github.com/NousResearch/hermes-agent/issues/66616) | Skills index 陈旧（54 评论） | 🚧 长期未解 |
| [#88275](https://github.com/NousResearch/hermes-agent/issues/88275) | Desktop Renderer 40-70% CPU（macOS Intel） | 🚧 仍 OPEN |
| [#53902](https://github.com/NousResearch/hermes-agent/issues/53902) | v0.17.0 渲染循环卡死 | 🚧 仍 OPEN |
| [#74933](https://github.com/NousResearch/hermes-agent/issues/74933) | Hindsight provider 拒绝 shared 观察 scope | 🚧 仍 OPEN |
| [#89546](https://github.com/NousResearch/hermes-agent/issues/89546) | Desktop 悬停关闭按钮误显示在持久导航 Tab | ✅ 已关闭 |
| [#89561](https://github.com/NousResearch/hermes-agent/issues/89561) | `hermes config set` 将列表/字典存为字符串 | 🚧 仍 OPEN |
| [#89576](https://github.com/NousResearch/hermes-agent/issues/89576) | Desktop MCP 健康探针在 Slack MCP 上抢占会话 | 🚧 仍 OPEN |
| [#89579](https://github.com/NousResearch/hermes-agent/issues/89579) | 异常重启后 Gateway 不发送启动通知到 home channel | 🚧 仍 OPEN |
| [#89516](https://github.com/NousResearch/hermes-agent/issues/89516) | `minimax-oauth` 缺 `api_key_env_vars` 致错误提示误导 | 🚧 仍 OPEN |
| [#88895](https://github.com/NousResearch/hermes-agent/issues/88895) | `gateway.error.log` 无轮转 + Slack Socket 重连 traceback 灌满 141MB | 🚧 仍 OPEN |

**整体观察**：今日合并的 12 条 PR 中约 5 条直接修复 P2 bug（集中在 Anthropic 适配器、launchd supervisor、CLI 弃用提示），但**多 Profile 身份一致性**主线（#88715、#89346、#89131、#88680）仍缺少独立修复 PR，预计需要一次集中性架构 PR 解决。

---

## 6. 功能请求与路线图信号

### 已合并 / 即将进入发布的功能

| Issue → PR | 功能 | 状态 |
|---|---|---|
| [#9056](https://github.com/NousResearch/hermes-agent/issues/9056) → [#84178](https://github.com/NousResearch/hermes-agent/pull/84178) | Nix Home Manager 模块 | ✅ 已合并 |
| [#89549](https://github.com/NousResearch/hermes-agent/issues/89549) → [#89595](https://github.com/NousResearch/hermes-agent/pull/89595) | xAI Grok Imagine 1080p（i2v/t2v） | 🚧 PR 处于 OPEN |
| [#89467](https://github.com/NousResearch/hermes-agent/pull/89467) | `clarify` 工具一次调用多问题 | 🚧 PR 处于 OPEN |
| [#89592](https://github.com/NousResearch/hermes-agent/pull/89592) | Desktop 后端皮肤持久化 | 🚧 PR 处于 OPEN |
| [#89596](https://github.com/NousResearch/hermes-agent/pull/89596) | Desktop 链接/Artifact 预览走 loopback reach | 🚧 PR 处于 OPEN |
| [#89590](https://github.com/NousResearch/hermes-agent/pull/89590) | Kanban 任务 `max_retries` 暴露到 Agent 工具 | 🚧 PR 处于 OPEN |
| [#89593](https://github.com/NousResearch/hermes-agent/pull/89593) | 密封 Image 下 Browser Use 解析加固 | 🚧 PR 处于 OPEN |
| [#89594](https://github.com/NousResearch/hermes-agent/pull/89594) | `nanoid` 依赖升级至 3.3.18（清零 GHSA-2v37-7h3g-55p8） | 🚧 PR 处于 OPEN |
| [#89304](https://github.com/NousResearch/hermes-agent/issues/89304) | Desktop profile alias 指向远端 gateway profile | 🚧 仅 Issue |
| [#18885](https://github.com/NousResearch/hermes-agent/issues/18885) | cron 任务允许使用 memory provider 工具 | 🚧 仅 Issue |
| [#82140](https://github.com/NousResearch/hermes-agent/issues/82140) | Desktop 连接模式暴露给 skills/MCP/plugins | ✅ 已关闭（含实现） |
| [#88307](https://github.com/NousResearch/hermes-agent/issues/88307) | 状态栏常驻连接切换器 | 🚧 仅 Issue |

### 路线图信号

- **桌面端**：Bot Mode、Profile 多路复用、远程 Gateway 联邦、Loopback reach 四大主题密集演进，预示未来 1-2 个版本将推出"统一 Profile × Connection 路由标识"重构（[#88715](https://github.com/NousResearch/hermes-agent/issues/88715) + [#88680](https://github.com/NousResearch/hermes-agent/issues/88680)）。
- **平台扩展**：Nix Home Manager 合入后，Home Manager / NixOS 双模块并行的可重复声明式部署路径成型。
- **能力增强**：`clarify` 多问题、xAI 1080p、Desktop 皮肤持久化等小颗粒度能力持续追加。

---

## 7. 用户反馈摘要

### 痛点

1. **桌面性能：Intel macOS 用户被创**  
  - [#88275](https://github.com/NousResearch/hermes-agent/issues/88275) 与 [#53902](https://github.com/NousResearch/hermes-agent/issues/53902) 的报告者（`yuhengliuleo`, `sergioperezcheco`）均使用 Intel MacBook Pro，闲置 40-70% CPU + 13W 功耗是非 ARM 用户最突出的挫败点。`disable_gpu=true` 仅能部分缓解，强烈呼吁上游 Electron/`fontations`/`temporal_rs` 维度排查。

2. **Profile/身份语义混乱**  
  - `

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报
**日期：2026-08-19** | 数据来源：github.com/sipeed/picoclaw

---

## 1. 今日速览

PicoClaw 今日保持中等活跃度，**24 小时内共有 10 条 Issues/PR 更新**（6 Issues + 4 PRs），无新版本发布。社区关注点集中在三个方向：**多渠道兼容性修复**（IRC、LINE）、**LLM 提供商接入**（Anthropic 原生协议、Google Antigravity）以及**Web UI 等长期路线图功能**。今日成功关闭 1 个 BUG（CPU 高占用）和 2 个 PR（Anthropic 协议、缓存 token 日志），但仍有 2 个 BUG 和 1 个高优先级 Enhancement（Web UI）处于开放状态待跟进。整体项目健康度良好，积压项逐步消化中。

---

## 2. 版本发布

⚠️ **今日无新版本发布。**

最近一次发布信息不在本次数据范围内，建议关注 [Releases 页面](https://github.com/sipeed/picoclaw/releases) 以获取最新版本动态。

---

## 3. 项目进展

今日有 **2 个 PR 被关闭/合并**，均为功能性增强：

### ✅ 已合并/关闭的 PR

**PR #1158 — `feat: add anthropic-messages` 协议支持** [🔗 链接](https://github.com/sipeed/picoclaw/pull/1158)
- 作者：hyperwd | 创建于 2026-03-06，今日关闭
- 解决了 Issue #269：只支持 Anthropic 原生 Messages API 格式（`/v1/messages`）的代理服务无法使用的问题
- **意义**：显著扩展了 PicoClaw 的 LLM 提供商兼容性，对使用自定义 Anthropic 兼容代理的用户是重要突破

**PR #3317 — `feat(providers): log prompt cache tokens`** [🔗 链接](https://github.com/sipeed/picoclaw/pull/3317)
- 作者：vmuliadi-astro | 创建于 2026-08-04，今日关闭
- 为 LLM 响应调试日志增加 prompt cache tokens 输出，便于诊断 DeepSeek（经 Cloudflare AI Gateway）等支持缓存的提供商
- **意义**：提升可观测性，对成本优化与调试具有实际价值

📌 **项目整体进展评估**：本日推进了协议兼容性与可观测性两条线，属于稳健迭代。Web UI 重构（Issue #806）等大型功能仍处于规划阶段，短期内无重大架构级变化。

---

## 4. 社区热点

### 🔥 讨论最活跃

**Issue #806 — [Feature] Add webUI support** [🔗 链接](https://github.com/sipeed/picoclaw/issues/806)
- 💬 **9 条评论** | 👍 **8 个点赞**（今日数据中最高）
- 作者：Zepan | 创建于 2026-02-26
- 标签：`enhancement`、`priority: high`、`roadmap`
- **诉求分析**：作者提出 PicoClaw 当前只有 TUI，对"非技术用户"门槛过高，需要浏览器端 Web UI 降低上手难度。该 Issue 已存在近 6 个月，今日仍有更新，说明社区对 Web UI 的需求持续强烈。鉴于被标记为 `roadmap` 与 `priority: high`，有望在 2026 下半年路线图中获得优先级。

**Issue #3287 — [Feature] Better support long messages in IRC** [🔗 链接](https://github.com/sipeed/picoclaw/issues/3287)
- 💬 **6 条评论**
- 作者：superuser-does | 创建于 2026-07-22
- **诉求分析**：IRC 协议默认限制 512 字节，长消息会被客户端自动拆分为多条；用户希望 PicoClaw 能智能识别并将这些片段还原为单条消息。这对在 IRC 渠道重度使用的用户来说是重要的"完整性"诉求。

---

## 5. Bug 与稳定性

今日报告/更新的 BUG 共 **5 条**，按严重程度排列：

| 严重程度 | Issue/标题 | 是否有 Fix PR | 状态 |
|---------|-----------|--------------|-----|
| 🟡 中 | **#3301** — `/clear` 与会话自动压缩在非默认 agent 的 dispatch 路由下失效 | ❌ 无 | OPEN（stale）|
| 🟡 中 | **#3328** — `line.settings.webhook_host/port` 字段从未被读取（无效配置） | ✅ 有 PR #3329 | OPEN |
| 🟢 低 | **#3339** — Google Antigravity 始终返回 429 RESOURCE_EXHAUSTED | ❌ 无 | OPEN |
| 🟢 低 | **#3292** — 聊天界面输入框聚焦时 CPU 占用过高 | ❌ 无 | CLOSED（stale） |

**关键 BUG 分析**：

- **Issue #3328（LINE webhook 配置无效）** [🔗 链接](https://github.com/sipeed/picoclaw/issues/3328) 是典型的"配置盲区"——配置项存在、有默认值、有文档，但代码无消费者。幸而 **PR #3329 已就位**（[🔗](https://github.com/sipeed/picoclaw/pull/3329)），提议改为发出告警而非默默生效，问题解决路径清晰。

- **Issue #3339（Google Antigravity 429）** [🔗 链接](https://github.com/sipeed/picoclaw/issues/3339) 较为隐蔽——认证与模型发现都正常，但生成请求始终返回 quota exhausted 错误，可能涉及 OAuth scope、计费或特定 endpoint 行为，需排查 Gemini API 实际调用路径。

- **Issue #3301（`/clear` 路由失效）** [🔗 链接](https://github.com/sipeed/picoclaw/issues/3301) 影响 Discord/Telegram 用户使用多 agent 场景，已被标记 `stale`，需维护者主动跟进。

---

## 6. 功能请求与路线图信号

### 高优先级
- **Web UI 支持**（Issue #806）：明确标记 `roadmap` + `priority: high`，社区反应强烈（8 👍）。若进入下一版本，将显著扩大用户群体（特别是 Raspberry Pi 等小型部署场景下的非技术用户）。

### 中优先级 / 待评估
- **IRC 长消息合并**（Issue #3287）：6 条评论表明有实际用户需求，但目前无对应 PR，可纳入下一迭代的功能 backlog。
- **Anthropic Messages 原生协议**（PR #1158 已合并）：✅ 今日已落地，证明社区推动力可快速转化为代码。

### 与已有 PR 的关联
- **PR #3314（修复 `customAllowPatterns` 不生效）** [🔗 链接](https://github.com/sipeed/picoclaw/pull/3314) 仍处于 OPEN 状态（stale），属于功能性 BUG 修复，建议维护者优先合并。

---

## 7. 用户反馈摘要

从今日活跃 Issues 的评论中提炼：

- **🔴 痛点 1：跨渠道"完整性"缺失**  
  IRC 用户（#3287）抱怨长消息被拆分后 PicoClaw 无法还原上下文，影响对话连贯性。

- **🔴 痛点 2：配置项"幽灵化"**  
  LINE 用户（#3328）反映按文档配置 `webhook_host`/`webhook_port` 后毫无效果，且系统无任何提示。社区用户期望配置要么真正生效，要么显式报错。

- **🟡 痛点 3：多 agent 路由下的会话管理失效**  
  #3301 反映通过 dispatch rules 路由到非默认 agent 后，`/clear` 与自动压缩功能均失效，说明多 agent 体系下会话状态管理存在隔离问题。

- **🟡 痛点 4：Google Antigravity 接入门槛**  
  #3339 用户已成功完成 OAuth 与模型发现，但在真正生成时遭遇 429 错误，体验断裂。

- **🟢 正面反馈**  
  Web UI 提案（#806）获 8 点赞，说明用户对 PicoClaw 整体方向认可，期望更好的使用体验。

---

## 8. 待处理积压 ⚠️

以下重要 Issue/PR 长期未响应，建议维护者关注：

| 类型 | 编号 | 标题 | 状态 | 关注点 |
|------|------|------|------|--------|
| 🐛 BUG | [#3301](https://github.com/sipeed/picoclaw/issues/3301) | `/clear` 在 dispatch 路由下失效 | OPEN (stale) | 影响多 agent 用户 |
| 🐛 BUG | [#3328](https://github.com/sipeed/picoclaw/issues/3328) | LINE webhook 配置无效 | OPEN | 已有 PR #3329 待合并 |
| ✨ 增强 | [#806](https://github.com/sipeed/picoclaw/issues/806) | Web UI 支持 | OPEN (high) | 路线图候选 |
| 🔧 PR | [#3329](https://github.com/sipeed/picoclaw/pull/3329) | LINE webhook 告警 | OPEN (stale) | 修复 #3328 |
| 🔧 PR | [#3314](https://github.com/sipeed/picoclaw/pull/3314) | 修复 `customAllowPatterns` | OPEN (stale) | 影响 shell agent 安全策略 |

**维护建议**：
1. 优先合并 **PR #3329**（低风险、解决 #3328），清理配置类积压；
2. 评估 **PR #3314** 的测试覆盖与安全性，影响 agent 执行边界；
3. 对 **Issue #806（Web UI）** 给出阶段性进展回应，缓解社区等待焦虑；
4. 重新激活 stale Issue，避免有效反馈沉没。

---

## 📊 数据小结

| 指标 | 数值 |
|-----|-----|
| 今日 Issues 更新 | 6（5 OPEN / 1 CLOSED） |
| 今日 PR 更新 | 4（2 OPEN / 2 CLOSED） |
| 新版本发布 | 0 |
| 累计评论最高的 Issue | #806（9 条，8 👍） |
| 已合并 PR 数（今日） | 2 |
| 待合并关键 PR | 2 |
| 报告 BUG 数（今日活跃） | 4 |

---

*本日报由 AI 助手基于公开 GitHub 数据自动生成，所有数据截止 2026-08-19。*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目日报
**日期：2026-08-19**

---

## 1. 今日速览

NanoClaw 项目今日呈现**高强度的内部重构与生态扩展并行**态势。过去 24 小时内共有 38 个 PR 流转（22 个待合并、16 个已关闭），活跃度显著高于近期平均水平。核心团队成员 `moshe-nanoco` 集中推进了**数据库异步化与驱动层重构**（连续 7 个相关 PR），`gavrielc` 则主导**会话运行时驱动层（SessionDriver）接缝设计**及多项 Slack/审批/安装相关的修复。无新版本发布，所有工作仍集中在 main 分支的演进中。社区端 Issue 更新较少（3 条），但已关闭的 2 条均为长期遗留的稳定性 Bug。

---

## 2. 版本发布

**无新版本发布。**

本期所有工作均为源码级重构与修复，未触发 tag/release 流程。建议关注 #3334（标注 [BREAKING] 的数据库异步化采用 PR）——该 PR 一旦合并，下个版本可能需要发布 minor 或 major 版本，并附带迁移说明。

---

## 3. 项目进展

### 3.1 数据库层深度重构（@moshe-nanoco）

这是今日最显著的进展方向，多个 PR 围绕"中央数据库异步化 + 可移植驱动"展开：

| PR | 标题 | 状态 |
|---|---|---|
| [#3333](https://github.com/qwibitai/nanoclaw/pull/3333) | refactor(db): add async central database seam | OPEN |
| [#3332](https://github.com/qwibitai/nanoclaw/pull/3332) | refactor(db): prepare the central database for portable drivers | OPEN |
| [#3335](https://github.com/qwibitai/nanoclaw/pull/3335) | refactor(db): add backend composition and portable tests | OPEN |
| [#3337](https://github.com/qwibitai/nanoclaw/pull/3337) | fix(codex): await central database operations | OPEN |
| [#3334](https://github.com/qwibitai/nanoclaw/pull/3334) | **[BREAKING] refactor(db): adopt async central database safely** | OPEN |

被关闭的同主题 PR（[#3321](https://github.com/qwibitai/nanoclaw/pull/3321)、[#3323](https://github.com/qwibitai/nanoclaw/pull/3323)、[#3324](https://github.com/qwibitai/nanoclaw/pull/3324)、[#3325](https://github.com/qwibitai/nanoclaw/pull/3325)、[#3326](https://github.com/qwibitai/nanoclaw/pull/3326)、[#3330](https://github.com/qwibitai/nanoclaw/pull/3330)）显示团队正在快速迭代该设计：通过 PR 提交 → 评审 → 重构 → 重新提交的循环打磨方案。**该项目层级的演进为后续支持非 SQLite 后端奠定了基础。**

### 3.2 会话运行时驱动层接缝（@gavrielc）

- [#3306](https://github.com/qwibitai/nanoclaw/pull/3306) **drivers: a session-runtime driver seam, with Docker as the built-in realization** — 引入 `src/drivers/`，将"会话是什么"与"会话如何运行"解耦，Docker 为内置实现。**纯加性变更**，全套 1672 测试通过，是重要的架构演进。
- [#3307](https://github.com/qwibitai/nanoclaw/pull/3307) **host: route session lifecycle through the driver seam** — host 层将生成、接管、监管、停止、重启全生命周期接入 `SessionDriver`。
- [#3308](https://github.com/qwibitai/nanoclaw/pull/3308) **groups: refuse to create a group over a folder that already exists undisposed** — 防止数据丢失形态。

### 3.3 生态功能扩展

- [#3343](https://github.com/qwibitai/nanoclaw/pull/3343) **feat(channels): add webex-poll REST polling adapter**（@sfakam）— 引入 Cisco Webex 通道适配器，针对企业网络下 Webhook 不可达场景采用 REST 轮询。**增强了企业部署兼容性。**
- [#3322](https://github.com/qwibitai/nanoclaw/pull/3322) **skills: add /add-youdotcom-tool for You.com MCP tools**（@itsakhilyou）— 新增 You.com MCP 工具 skill，丰富工具生态。

### 3.4 累计推进度

若 #3306 / #3333 系列成功合并，NanoClaw 将具备：
- **可插拔的会话运行时**（不再强绑 Docker）
- **异步、可移植的数据库层**（不再强绑 SQLite）
- 更稳健的安装/审批/凭证链路

这是面向**多后端、多运行时**形态的实质性架构升级。

---

## 4. 社区热点

| 热度排名 | Issue/PR | 链接 | 评论数 | 关注点 |
|---|---|---|---|---|
| 1 | Issue #3338 — Codex WebSocket idle retry hidden | [链接](https://github.com/qwibitai/nanoclaw/issues/3338) | 2 | Codex CLI 5 分钟空闲超时未被 `codex app-server` 上报给 NanoClaw，导致 Telegram 请求静默等待 10 分钟 |
| 2 | Issue #2868 — `/update-skills` 对已安装通道静默无效 | [链接](https://github.com/qwibitai/nanoclaw/issues/2868) | 1 | 长期 bug，破坏 CHANGELOG 中"重跑 /add-<channel>"的迁移指引（**今日已关闭**） |
| 3 | Issue #3194 — `/update-nanoclaw` 在无可恢复切换时仍报成功 | [链接](https://github.com/qwibitai/nanoclaw/issues/3194) | 0 | 升级路径对 SQLite 数据库、外部组件缺乏保护（**今日已关闭**） |

**诉求分析：** 今日热点集中于"**可见性（visibility）+ 可靠性（rollback safety）**"——用户期望系统在超时/失败时给出明确信号，升级/更新操作必须具备可恢复性。这与内部正在推进的驱动层重构方向一致：可见且可恢复的运行时/数据层是社区核心诉求。

---

## 5. Bug 与稳定性

### 🔴 严重（仍在 Open）

**[Issue #3338](https://github.com/qwibitai/nanoclaw/issues/3338)** — Codex WebSocket idle retry 未暴露
- **现象：** 简单 Telegram 请求可能静默等待 10 分钟
- **根因：** Codex CLI 内部 5 分钟 WebSocket 空闲超时重试未通过 `codex app-server` 上报
- **影响：** 用户体验停滞，无任何提示
- **Fix PR：** ❌ 暂无

### 🟢 中等（已修复/关闭）

| Issue | 严重程度 | 状态 | 备注 |
|---|---|---|---|
| [#2868](https://github.com/qwibitai/nanoclaw/issues/2868) `/update-skills` 静默无效 | 中 | ✅ CLOSED | 维护者 `glifocat` 自报告，已结案 |
| [#3194](https://github.com/qwibitai/nanoclaw/issues/3194) `/update-nanoclaw` 缺少可恢复切换 | 中高 | ✅ CLOSED | 维护者 `glifocat` 自报告，已结案 |
| [#3339](https://github.com/qwibitai/nanoclaw/pull/3339) **fix(setup): fail closed when a stored sign-in cannot be verified** | 中 | 🟡 PR OPEN | 修复凭证不可验证时被误判为通过的漏洞 |
| [#3341](https://github.com/qwibitai/nanoclaw/pull/3341) **fix(provisioning): derive the Slack service from the credential's issuer** | 中 | 🟡 PR OPEN | 修复安装 token 与托管 Slack 服务配对缺失问题 |

---

## 6. 功能请求与路线图信号

### 6.1 新集成请求
- **Webex 通道** — [#3343](https://github.com/qwibitai/nanoclaw/pull/3343) 已被纳入 PR 队列，反映企业用户对**无法暴露公网 Webhook** 的部署环境有明确需求。
- **You.com MCP 工具** — [#3322](https://github.com/qwibitai/nanoclaw/pull/3322) 体现工具生态扩展趋势。

### 6.2 架构演进信号
- **多后端数据库 + 多运行时会话** — 数据库异步化驱动层（[#3333](https://github.com/qwibitai/nanoclaw/pull/3333) 系列）和 SessionDriver 接缝（[#3306](https://github.com/qwibitai/nanoclaw/pull/3306) 系列）共同指向**NanoClaw 的可移植性战略**。下一个 minor 版本很可能包含这两组重构的稳定版本。

### 6.3 流程改进
- [#3340](https://github.com/qwibitai/nanoclaw/pull/3340) `pending_approvals` 增加 `instance` 列，确保 DM 与卡片投递来自同一 bot 实例 — 这是审批流稳定性补丁。

---

## 7. 用户反馈摘要

- **痛点 — 静默超时：** 来自 @ionescu77（[#3338](https://github.com/qwibitai/nanoclaw/issues/3338)）的反馈指出，Codex WebSocket 重试机制在 CLI 内部完成，但 NanoClaw 用户层完全无感知。这暴露了**CLI ↔ NanoClaw 错误传播协议**的薄弱。
- **痛点 — 升级破坏性：** @glifocat 报告的 [#2868](https://github.com/qwibitai/nanoclaw/issues/2868) 与 [#3194](https://github.com/qwibitai/nanoclaw/issues/3194) 显示，**升级体验**是当前最需要工程投入的领域之一：skills 更新静默无效、nanoclaw 自身升级无完整回滚保护。
- **正向信号：** 多个 [core-team] 标签的 PR 集中提交于 2026-08-18，说明核心维护团队投入度极高；外部贡献者（@sfakam、@itsakhilyou）持续提交新通道/工具，生态活跃度健康。

---

## 8. 待处理积压

| 类型 | 编号 | 标题 | 创建时间 | 风险提示 |
|---|---|---|---|---|
| 🐛 Bug | [#3338](https://github.com/qwibitai/nanoclaw/issues/3338) | Codex WebSocket idle retry hidden | 2026-08-18 | **影响线上用户体验，无 fix PR** |
| 🏗️ 架构 PR | [#3334](https://github.com/qwibitai/nanoclaw/pull/3334) | **[BREAKING] adopt async central database** | 2026-08-18 | 标记为 Breaking，需要充分的迁移说明 |
| 🔌 集成 PR | [#3343](https://github.com/qwibitai/nanoclaw/pull/3343) | webex-poll adapter | 2026-08-18 | 需评审通道合规性 |
| ⚙️ Skill PR | [#3322](https://github.com/qwibitai/nanoclaw/pull/3322) | /add-youdotcom-tool | 2026-08-18 | 等待 Skill 评审流程 |

**维护者建议关注：**
1. 给 [#3338](https://github.com/qwibitai/nanoclaw/issues/3338) 指派 owner，避免成为静默积压；
2. 为 #3334 数据库异步化准备好**迁移说明与降级路径**，避免下一版本因 Breaking 变更引发用户反弹。

---

### 📊 项目健康度评分

| 维度 | 评分 | 说明 |
|---|---|---|
| 维护活跃度 | ⭐⭐⭐⭐⭐ | 38 PR/日，核心团队高频提交 |
| 架构演进 | ⭐⭐⭐⭐⭐ | 驱动层接缝 + 数据库异步化并行推进 |
| 社区响应 | ⭐⭐⭐ | Issues 总量低，可能是流量较小或长期问题被有效消化 |
| 发布节奏 | ⭐⭐ | 24 小时内无新版本，重构尚未稳定 |
| 文档/迁移 | ⭐⭐ | [BREAKING] PR 缺少配套迁移文档预告 |

**整体评价：🟢 健康。** 项目处于深度架构升级期，内部重构密度高但方向清晰；社区端 Issue 数量减少与两个长期 bug 关闭形成正向信号。下个版本发布前需重点关注 Breaking 变更的迁移友好度。

---
*数据来源：GitHub REST API 抓取，截至 2026-08-19*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 · 2026-08-19

## 📌 今日速览

IronClaw 项目今日进入 **v1.3.0 候选发布冲刺期**——1.3.0-rc.2 紧急修复了从 1.2.x 升级时的启动崩溃问题（#7720），标志着发布流程的稳健性进一步提升。过去 24 小时共发生 **22 条 Issue 更新、39 条 PR 更新**，活跃度处于高位。社区焦点集中在 **自动化运行语义重构**（#7650）、**capability 响应归一化栈**（#7686/#7711/#7735）、**WebUI 语音转写**（#7724）以及 **设计系统治理文档化**（#7043/#7257）等几条并行主线上。整体健康度良好，多个历史遗留 epic（#6837、#7038、#7354、#7467、#7733）同步推进，但 libSQL 与 IronHub 配置层暴露出几个中低优先级 bug 需要关注。

---

## 🚀 版本发布

### ironclaw-v1.3.0-rc.2（2026-08-18）

**核心修复：**

1. **1.2 升级路径打通** — 修复了从 1.2.x 升级到 1.3.0 时因 v2 扩展安装行新增 `activation_state` 字段而启动崩溃的问题（对应 [Issue #7720](https://github.com/nearai/ironclaw/issues/7720)）。升级现在能保留已发布的扩展激活状态，不会再 crash-loop 至重启策略耗尽。
2. **Reborn 运行时 SSH 入口恢复** — 规范化的 Reborn 运行时镜像重新支持 opt-in、仅公钥认证的 worker SSH（端口 2222），便于 IronClaw 部署中的运维介入。

**迁移注意事项：**

- 从 1.2.x 升级后无需手动干预 `activation_state` 字段。
- 部署若使用非默认 SSH 配置，请确认端口 2222 与新认证策略兼容。
- rc.2 仍属候选版，正式 1.3.0 GA 前请持续关注后续 rc。

---

## 📈 项目进展

今日合并 / 关闭的关键 PR 体现了项目从"功能堆叠"向"语义化与可观测性"的转向：

| PR | 主题 | 影响 |
|---|---|---|
| [#7734](https://github.com/nearai/ironclaw/pull/7734)（已关闭，但作为 fold 进了 #7711） | 拆分两个 1.2 万行测试模块，迁移 317 个测试、0 行生产代码 | 测试可维护性大幅改善，零行为风险 |
| [#7713](https://github.com/nearai/ironclaw/pull/7713)（已关闭） | 在 qa-automation-preview 演练 /benchmark 路径 | 验证 10 任务企业套件基准流程 |
| [#7185](https://github.com/nearai/ironclaw/issues/7185)（已关闭） | Memory 跨对话不可靠召回 bug | 修复 Champions 反馈的核心可用性问题 |
| [#7714](https://github.com/nearai/ironclaw/issues/7714)（已关闭） | libSQL 写连接饿死 resource governor | PinchBench 147 任务下不再级联失效 |
| [#7638](https://github.com/nearai/ironclaw/issues/7638)（已关闭） | WebUI 删除线程改用全局 toast | 消除阻塞式 `window.alert()`，统一通知体验 |
| [#7639](https://github.com/nearai/ironclaw/issues/7639)（已关闭） | 引入共享 `InlineNotice` 组件 | Jobs / Projects / Workspace / Extensions 的内联提示统一化 |

**整体判断**：项目在 24 小时内既完成了多处稳定性修复（启动崩溃、libSQL 资源争抢、Memory 召回），又在结构层面推进了 capability 归一化（[PR #7686](https://github.com/nearai/ironclaw/pull/7686)、[#7711](https://github.com/nearai/ironclaw/pull/7711)）、自动化语义判断（[PR #7650](https://github.com/nearai/ironclaw/pull/7650)）与编码工具重塑（[PR #7491](https://github.com/nearai/ironclaw/pull/7491)）。每条主线都有对应的 issue 编号锚点，治理良好。

---

## 🔥 社区热点

由于 Issue/PR 的评论数据多为 `undefined`，本节以 **互动指标 + 重要性** 为依据筛选：

### 议题层

- **[Issue #7185（已关闭，2 条评论）](https://github.com/nearai/ironclaw/issues/7185)** — 跨会话 Memory 召回失败。来自 Champions 周报的多位测试者反馈，是社区可见度最高的"日常痛点"之一。
- **[Issue #6879（OPEN）](https://github.com/nearai/ironclaw/issues/6879)** — Automation 触发后变成普通聊天回合。关联 [PR #7650](https://github.com/nearai/ironclaw/pull/7650)，是当前最大的"自动化可信度"信号源。
- **[Issue #7447（OPEN）](https://github.com/nearai/ironclaw/issues/7447)** — Agent 因工具调用过多而失败，反映了 budget 与 turn 限制的边界问题。

### PR 层

- **[PR #7735](https://github.com/nearai/ironclaw/pull/7735)** — 在下载的 artifact 中加入运行时长证据。让 bug 报告自带 timing，根治"我感觉它很慢"的模糊反馈。
- **[PR #7697](https://github.com/nearai/ironclaw/pull/7697)** — 持久化用户收件箱与产品 API。把通知从出站传输状态提升为一等公民领域。
- **[PR #7491](https://github.com/nearai/ironclaw/pull/7491)** — omp 编码工具核心契约 + 引擎 + 基准（对应 #7392 实验）。将 6 个工具（`read/write/edit/glob/grep/bash`）确立为模型可见的稳定接口。
- **[PR #7724](https://github.com/nearai/ironclaw/pull/7724)** — WebUI 作曲区通过 NEAR AI Whisper 实现语音转文字。浏览器永不解锁推理凭证。
- **[PR #7728](https://github.com/nearai/ironclaw/pull/7728)** — Google Docs 增加 4 个语义编辑工具（结构检查、锚点批量编辑、表格填充、确定性验证），同时保留 11 个 legacy 工具。

**诉求解读**：社区当前最强的需求集中在 **(a) 可观测性**（timing、artifact、自动化语义证据）、**(b) 自动化可信度**（"触发即执行"必须产出可判定结果）、**(c) 交互自然化**（语音输入、Slack 私密连接提示）。

---

## 🐞 Bug 与稳定性

| 严重度 | Issue | 摘要 | 是否已有 fix |
|---|---|---|---|
| 🔴 高 | [#7720](https://github.com/nearai/ironclaw/issues/7720) | 1.3.0-rc.1 从 1.2.x 升级后 crash-loop（unknown field `activation_state`） | ✅ **1.3.0-rc.2 已修复** |
| � 中 | [#7714](https://github.com/nearai/ironclaw/issues/7714) | libSQL 共享写连接让 resource governor journal 饿死，触发级联失效 + 永久 reservation 泄漏 | ✅ 已关闭 |
| 🟠 中 | [#7727](https://github.com/nearai/ironclaw/issues/7727) | Catalog `capabilities` artifact 为强制字段但运行时从不读取（manifest v3 工具同样问题） | ❌ 待修 |
| 🟠 中 | [#7726](https://github.com/nearai/ironclaw/issues/7726) | `IRONHUB_MANIFEST_URL` 配置项被编译期允许列表强制锁回 `hub.ironclaw.com`，自托管不可用 | ❌ 待修 |
| 🟡 低 | [#7185](https://github.com/nearai/ironclaw/issues/7185) | Memory 跨会话不可靠召回 | ✅ 已关闭 |
| � 低 | [#7447](https://github.com/nearai/ironclaw/issues/7447) | 工具调用过多导致 Agent 任务失败（fetch-retry 循环耗尽预算） | ❌ 待修（Epic） |
| 🟢 文档 | [#7681](https://github.com/nearai/ironclaw/issues/7681) | Slack 未绑定用户连接提示公开可见且需手动往返 | ✅ 修复见 [PR #7682](https://github.com/nearai/ironclaw/pull/7682) |

**稳定性结论**：升级路径与高并发 libSQL 路径已分别获得修复；IronHub 工具元数据层的两个 bug（#7726、#7727）需要后续 PR，否则将影响自托管目录与 v3 manifest 工具的可信度。

---

## 💡 功能请求与路线图信号

下列新功能已通过 Epic 或 PR 明确进入路线图，可预见进入 v1.3.0 / v1.4.0 的范围：

### v1.3.0 候选范围

- **Extensions vNext 收尾** — [Issue #7354](https://github.com/nearai/ironclaw/issues/7354)：统一通道架构、规范的富消息操作、生产级 Signal 通道。
- **自动化语义判断** — [PR #7650](https://github.com/nearai/ironclaw/pull/7650)：用运行时证据取代答案式语义判定。
- **WASM 工具响应归一化** — [PR #7711](https://github.com/nearai/ironclaw/pull/7711)：定型化 tool response、guest 迁移、dispatch 错误清理（capability-response-normalization 栈的最后一环）。

### v1.4.0 候选范围

- **预算账本精细化** — [Issue #7673](https://github.com/nearai/ironclaw/issues/7673)：截断启动窗口双计费、charge durability。
- **Reborn 持久化与 profile 解耦** — [Issue #7467](https://github.com/nearai/ironclaw/issues/7467)（high risk epic）：让存储不再随部署 profile 漂移。
- **DESIGN.md 治理 + 主题重塑（第 2-3 阶段）** — [Issue #7733](https://github.com/nearai/ironclaw/issues/7733)，文档已在 [PR #7043](https://github.com/nearai/ironclaw/pull/7043)、[#7257](https://github.com/nearai/ironclaw/pull/7257)。
- **Mnesis 记忆提供者集成** — [Issue #7731](https://github.com/nearai/ironclaw/issues/7731)（Spike 阶段）。
- **CLI 端到端沙箱化** — [Issue #7732](https://github.com/nearai/ironclaw/issues/7732)。
- **WebUI 语音转写** — [PR #7724](https://github.com/nearai/ironclaw/pull/7724)：通过 NEAR AI Whisper 在 composer 实现录音转写，永不自动发送。
- **Google Docs 语义编辑工具** — [PR #7728](https://github.com/nearai/ironclaw/pull/7728)。
- **Slack 私密连接提示** — [PR #7682](https://github.com/nearai/ironclaw/pull/7682)（关联 [#7681](https://github.com/nearai/ironclaw/issues/7681)）。

### 早期信号

- **Growth / Usage 分析的 info-level 日志** — [Issue #6837](https://github.com/nearai/ironclaw/issues/6837)：52 条 `info!` 全是基础设施信号，0 条业务信号。

---

## 🗣️ 用户反馈摘要

从可见的 Issue 评论与摘要中可提炼：

- **法律场景用户（Devon，经 Tobias 转达）** — 期望 Agent 在跨会话中能复现之前已经确认的信息；这是 [Issue #7185](https://github.com/nearai/ironclaw/issues/7185) 修复的真实使用场景。
- **小模型 + 自动化使用者** — 在 DeepSeek V4 Flash 等小模型上，自动触发跑出来的结果不稳定，期望"触发即执行"是有保证的，而不是普通聊天回合（[Issue #6879](https://github.com/nearai/ironclaw/issues/6879)）。
- **企业用户 / FDE 角色** — Company Brain FDE（[Issue #7465](https://github.com/nearai/ironclaw/issues/7465)）已被关闭但未提供摘要，说明该方向已收敛或被吸收。
- **Slack 团队空间用户** — 抱怨未绑定账号的连接提示是公开的、且需要多次手工往返（[Issue #7681](https://github.com/nearai/ironclaw/issues/7681)），强调私密性与一键直达。
- **基准 / QA 团队** — 关心 enterprise 套件弱模型（Qwen/Qwen3.8-27B）反复失败的多步任务能否被自动分类（[Issue #7736](https://github.com/nearai/ironclaw/issues/7736)）。

整体满意度信号：1.3.0-rc.2 的紧急修复与 rc.1 的发布间隔仅一日，反映维护团队对用户升级路径中断的反应速度较快。

---

## ⏳ 待处理积压（值得维护者关注）

| 类型 | 编号 | 创建日期 | 关注理由 |
|---|---|---|---|
| 长期 PR | [#3676](https://github.com/nearai/ironclaw/pull/3676) | 2026-05-15 | 安全文档重构，原针对 v1 monolith，目前已重新基于 main 重建，阻塞 Security 章节评审 |
| 长期 Epic | [#7038](https://github.com/nearai/ironclaw/issues/7038) | 2026-08-03 | WebUI 设计系统 + Storybook，配套 PR #7257 仍是 OPEN |
| 长期 Epic | [#7354](https://github.com/nearai/ironclaw/issues/7354) | 2026-08-07 | Extensions vNext 收尾，包含 Signal 生产化 |
| 长期 Epic | [#6837](https://github.com/nearai/ironclaw/issues/6837) | 2026-07-29 | Growth/Usage 分析零业务日志，阻碍运营洞察 |
| 长期 Epic | [#7467](https://github.com/nearai/ironclaw/issues/7467) | 2026-08-10 | Reborn profile-agnostic 持久化（high risk），未分配明显 PR |
| 待修 Bug | [#7727](https://github.com/nearai/ironclaw/issues/7727)、[#7726](https://github.com/nearai/ironclaw/issues/7726) | 2026-08-18 | IronHub 自托管目录与 v3 manifest 工具可信度问题 |
| 待修 Epic | [#7447](https://github.com/nearai/ironclaw/issues/7447) | 2026-08-10 | 工具过多导致 Agent 失败，需要 budget 与 result_read 培训路径 |
| 长期 OPEN Epic | [#6879](https://github.com/nearai/ironclaw/issues/6879) | 2026-07-29 | Automation runs 语义判定（已有 [PR #7650](https://github.com/nearai/ironclaw/pull/7650) 推进） |

---

## 📊 项目健康度仪表盘

| 维度 | 评估 |
|---|---|
| **发布节奏** | 🟢 良好（24h 内出 rc.2 紧急修复） |
| **Bug 响应** | 🟢 良好（启动崩溃、libSQL 饥饿同日闭环） |
| **架构治理** | � 良好（capability 归一化栈、设计系统治理文档同步推进） |
| **测试覆盖** | 🟢 良好（[#7734](https://github.com/nearai/ironclaw/pull/7734) 一次性迁移 317 测试） |
| **社区沟通** | 🟡 中性（Issue 评论密度偏低，反馈多通过 Champions 周报汇总） |
| **路线图清晰度** | 🟢 良好（v1.3.0 / v1.4.0 边界明确） |
| **自托管完备性** | � 需关注（[Issue #7726](https://github.com/nearai/

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目日报 · 2026-08-19

> 数据来源：GitHub `netease-youdao/LobsterAI`（过去 24 小时）

---

## 📌 今日速览

LobsterAI 在 2026-08-18 发布了 **2026.8.18 版本**，核心变化是引入 **DSH（DeepSeek Harness）引擎集成** 的实验性支持，并配套完成了 dsh 版本升级到 rc.7 与进程启动器改造。过去 24 小时共发生 **9 条 Issue 更新与 19 条 PR 更新**，其中 **16 个 PR 已合并/关闭**，合并率高达 84%，是项目近期最集中的一次批量合入。社区活跃度处于高位，但同时有大量 4 月份积压的 stale issue/PR 在本日被批量清理或更新，提示维护者正在集中处理历史欠账。整体而言，项目处于"版本迭代 + 历史清理"双轨推进阶段，健康度良好。

---

## 🚀 版本发布

### 2026.8.18（2026-08-18 发布）

**核心变化：**
- **feat: dsh engine integration**（#2502）—— 引入 opt-in 实验性质的 DeepSeek Harness 集成
- **feat: update dsh to rc.7**（#2509）—— DSH 组件升级到 RC.7
- **feat: dsh process launcher**（PR 未完整列出）—— 新增 DSH 进程启动器

**配套合入（来自 release/2026.8.17 → main 的批量合并 PR #2510）：**
相比最新 `origin/main`，该分支领先 23 个 commit、修改 57 个文件（+7,004 / -39）。除 DSH 主线外还包括：
- 模型加载逻辑改进
- 定时任务历史记录加载优化
- 多处渲染层 UI 对齐

**破坏性变更：** 
- OpenClaw 网关配置中已移除的 `skipMissedJobs` 字段被强制校验（#1626 已修复）。升级用户需检查 `openclawConfigSync.ts` 相关配置。
- SQLite 外键约束启用（#1597），影响 `cowork_messages`、`user_memory_sources` 表的级联删除行为。

**迁移注意事项：**
1. 升级前建议清理自定义 OpenClaw 配置中残留的 `skipMissedJobs` 字段
2. 如长期积累 `cowork_sessions` / `user_memories` 的孤儿数据，建议升级后手动清理
3. DSH 引擎为 opt-in，需要在设置中主动启用

---

## 📈 项目进展

### 重大功能推进

| PR | 功能 | 影响范围 |
|---|---|---|
| #2502 / #2509 | DSH（DeepSeek Harness）引擎集成 | 全平台，渲染层 + 主进程 |
| #2481 | 任务搜索入口从侧边栏移至顶部操作区 | macOS / Windows 统一交互 |
| #2425 | 新增"工件自动预览"开关 | 设置项 |
| #2418 | 多 Agent 任务活动过滤器 | 侧边栏 |
| #1621 | 定时任务完成 → 系统原生通知（macOS/Windows/Linux） | 关闭 #1620 |
| #1583 | Skills 新增"最近使用"Tab + 使用频次统计 | 解决 auto-routing 不可见问题 |
| #1629 | 用户头像设置（6 款预置 SVG + 本地上传） | 个人设置 |
| #1631 | MCP "自定义"标签页新增快速添加模版（FS/SQLite/Brave Search） | MCP 管理 |

### 关键 Bug 修复

| PR | 修复内容 |
|---|---|
| #1626 | **P0 Blocker**：OpenClaw 网关因非法配置字段 `skipMissedJobs` 无法启动 + 启动弹窗闪烁 |
| #1597 | SQLite 未启用外键约束导致级联删除失效，产生孤儿数据 |
| #2507 | 定时任务 cron 历史加载超出 OpenClaw 网关上限的分页处理 |
| #2508 | 鉴权模块服务端模型拉取失败时的退避重试 |
| #2417 | Sites 页面复制操作缺少成功反馈 |

### 项目整体推进度评估
本日合入覆盖 **功能新增、UI 对齐、稳定性修复、数据一致性** 四大方向，单日推进幅度约相当于 1.5–2 个常规迭代周期，项目处于显著的加速期。

---

## 💬 社区热点

### 最受关注 Issue
- **#1620 定时任务执行完成后推送系统通知** （noransu 提出） —— 在同日被 PR #1621 完整实现并关闭，体现"需求→实现"的闭环效率。
- **#1617【BUG】技能删除后列表未同步更新**（STUPIDDDD0） —— 反馈前端 UI 与后端删除状态不同步，重启无效，反映"列表/详情双向同步"在 LobsterAI 中是个反复出现的痛点。
- **#1627 一个稍微复杂的任务，客户端就崩了**（godlike10） —— 附完整 OpenClaw stdout 日志，疑似多 Agent 并发场景下的稳定性问题，影响面广。

### 活跃 PR
- **#1628 优化模型选择器 UI**（gongzhi-netease） —— 重构 ModelSelector 组件、解决下拉面板裁剪问题，仍处 OPEN 状态，待进一步 review。
- **#1634 全局搜索修复与搜索体验升级**（gongzhi-netease） —— 修复搜索被当前 Agent 隐式限制的 Bug 并升级 UX，仍 OPEN。

### 诉求分析
用户关注点高度集中在三个方向：
1. **本地化与多语言一致性**（#1586 切换语言后条款/工具风格未切换）
2. **自定义能力的稳定性**（#1622 自定义模型测试失败、#1632 切换本地模型后 skill 失效）
3. **跨场景的体验细节**（定时任务通知、技能使用可见性、删除反馈）

---

## 🐛 Bug 与稳定性

| 严重程度 | Issue | 描述 | 修复 PR |
|---|---|---|---|
| 🔴 P0 | [#1587](https://github.com/netease-youdao/LobsterAI/issues/1587) | 更新最新版本首次启动崩溃（macOS 闪退） | ❌ 暂无 |
| 🔴 P0 | [#1589](https://github.com/netease-youdao/LobsterAI/issues/1589) | 会话功能、定时任务功能均无法正常进行 | ❌ 暂无 |
| 🔴 P0 | [#1627](https://github.com/netease-youdao/LobsterAI/issues/1627) | 复杂任务导致客户端崩溃（OpenClaw stdout 显示 ws 事件流异常） | ❌ 暂无 |
| 🟠 P1 | [#1622](https://github.com/netease-youdao/LobsterAI/issues/1622) | 无法添加自定义模型（测试连接失败） | ❌ 暂无 |
| 🟠 P1 | [#1617](https://github.com/netease-youdao/LobsterAI/issues/1617) | 技能删除后前端列表未同步，重启无效 | ❌ 暂无 |
| 🟡 P2 | [#1632](https://github.com/netease-youdao/LobsterAI/issues/1632) | 切换本地模型后原有 skill 失效，安装方式不明确 | ❌ 暂无 |
| 🟡 P2 | [#1586](https://github.com/netease-youdao/LobsterAI/issues/1586) | 切换语言后部分内容（条款、工具风格）未同步 | ❌ 暂无 |

> ⚠️ **重点关注**：三条 P0 级别 Issue 均无对应修复 PR，且都集中在 4 月初创建、已被标记 stale。建议维护者优先排查 #1587、#1589、#1627 这三个崩溃/不可用问题。

---

## 💡 功能请求与路线图信号

| Issue | 功能 | 落地可能性 |
|---|---|---|
| [#1614](https://github.com/netease-youdao/LobsterAI/issues/1614) | 将 hermes-agent 作为可选 AI 引擎 | 🟡 中 —— 参考已有的 openclaw 集成模式，技术可行但需要引擎适配 |
| [#1620](https://github.com/netease-youdao/LobsterAI/issues/1620) | 定时任务完成后系统通知 | ✅ 已合入（PR #1621） |

**路线图信号：**
- 多 Agent 协作场景下的稳定性、搜索、过滤能力是近期持续投入的方向（#2418、#2481、#1634）
- DSH 作为实验性新成员，与 openclaw 并存，预计 2026.9 系列版本将进一步打磨
- 个人信息/个性化设置（头像 #1629、语言切换 #1586）成为 UI 打磨重点

---

## 🗣️ 用户反馈摘要

从 Issue 评论与描述中提炼的真实痛点：

**痛点 1：自定义能力不稳定**
> "添加自定义模型后，测试失败" — #1622
> "切换成本地模型以后，原来的 skill 都不能用了" — #1632

用户期望自定义模型 / 本地模型 与云端模型享有同等能力（特别是 skill 兼容），当前实现存在能力降级。

**痛点 2：多任务/复杂场景的脆弱性**
> "一个稍微复杂的任务，客户端就崩了" — #1627
> "会话功能、定时任务功能均无法正常进行" — #1589

多 Agent / 长任务 / 高频定时是 LobsterAI 的核心使用场景，但当前稳定性欠佳，是用户流失风险点。

**痛点 3：更新后启动崩溃**
> "更新最新版本首次启动崩溃" — #1587（macOS Intel，附完整日志）

升级体验是产品口碑的关键环节，需要在 release 流程中加入更完善的兼容性测试。

**满意/正向信号：**
- 社区贡献者活跃度高，fisherdaddy、liuzhq1986、BucleLiu、xuzx-code、gongzhi-netease、kayo5994 等多位贡献者持续提交高质量 PR
- 批量合并 PR #2510 一次性合入 23 个 commit，体现维护者对 release branch 的高效管理

---

## 📦 待处理积压

### 长期 OPEN 的重要 Issue（均为 stale，自 4 月起未跟进）

| Issue | 创建时间 | 状态 |
|---|---|---|
| [#1614](https://github.com/netease-youdao/LobsterAI/issues/1614) hermes-agent 引擎支持 | 2026-04-10 | OPEN / stale |
| [#1622](https://github.com/netease-youdao/LobsterAI/issues/1622) 自定义模型测试失败 | 2026-04-10 | OPEN / stale |
| [#1627](https://github.com/netease-youdao/LobsterAI/issues/1627) 复杂任务崩溃 | 2026-04-10 | OPEN / stale |
| [#1632](https://github.com/netease-youdao/LobsterAI/issues/1632) 本地模型 skill 失效 | 2026-04-11 | OPEN / stale |
| [#1586](https://github.com/netease-youdao/LobsterAI/issues/1586) 语言切换未同步 | 2026-04-09 | OPEN / stale |
| [#1587](https://github.com/netease-youdao/LobsterAI/issues/1587) 首次启动崩溃 | 2026-04-09 | OPEN / stale |
| [#1589](https://github.com/netease-youdao/LobsterAI/issues/1589) 会话/定时任务失效 | 2026-04-09 | OPEN / stale |
| [#1617](https://github.com/netease-youdao/LobsterAI/issues/1617) 技能删除未同步 | 2026-04-10 | OPEN / stale |

### 长期 OPEN 的重要 PR

| PR | 创建时间 | 内容 |
|---|---|---|
| [#1277](https://github.com/netease-youdao/LobsterAI/pull/1277) | 2026-04-02 | dependabot：electron 40.2.1 → 43.4.0 升级（跨度较大，建议评估兼容性后合入） |
| [#1628](https://github.com/netease-youdao/LobsterAI/pull/1628) | 2026-04-10 | 模型选择器 UI 重构 + 下拉面板裁剪修复 |
| [#1634](https://github.com/netease-youdao/LobsterAI/pull/1634) | 2026-04-11 | 全局搜索修复 + 搜索体验升级 |

### 🔔 提醒维护者
- 4 月份积压的 8 条 stale Issue 中包含 **3 条 P0 崩溃类问题**，建议优先分配人力排查
- dependabot 提的 electron 大版本升级 PR（#1277）已停摆 4 个月，建议评估主版本升级的兼容成本
- gongzhi-netease 提交的 #1628、#1634 已超 4 个月未合入，建议 reviewer 给出反馈避免贡献者流失

---

*报告生成时间：2026-08-19 | 数据窗口：过去 24 小时 | 数据源：[netease-youdao/LobsterAI](https://github.com/netease-youdao/LobsterAI)*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目日报 · 2026-08-19

## 📌 今日速览

Moltis 今日呈现出**高活跃度且高产出的开发节奏**：6 个 PR 中 5 个已关闭，2 个连续版本号（`20260818.06`、`20260818.08`）同日发布，覆盖 Podman 沙箱兼容、心跳配置修复、OpenAI Responses API 路由、文件库等关键模块。Issue 处理效率极佳，两个挂起 Bug 都在 24 小时内通过对应 PR 闭环解决。唯一待合并项是新功能 PR #1210（Tesla 车队 API 连接器），整体项目健康度**优秀**。

---

## 🚀 版本发布

发布两个连续构建版本，节奏紧凑，验证了 CI/CD 流水线高效运转：

| 版本号 | 时间 | 性质 |
|---|---|---|
| [20260818.06](https://github.com/moltis-org/moltis) | 2026-08-18 | 补丁版本 |
| [20260818.08](https://github.com/moltis-org/moltis) | 2026-08-18 | 补丁版本 |

**本批次核心变更**（基于合并 PR 推断）：
- ✅ Podman 沙箱逃逸分支（rootless + 嵌套特权模式）
- ✅ 心跳配置 `heartbeat.update` 改为 PATCH 语义（防止字段静默重置）
- ✅ OpenAI 工具调用 + `reasoning_effort` 改走 Responses API
- ✅ 新增持久化 Files 库 + 设置中的 Finder 风格浏览器
- ✅ README star history 图表修复

**破坏性变更**：未观察到显式 breaking change。心跳配置的修复属于**行为修正**——若原代码依赖 `heartbeat.update` 全量覆盖（实际相当于默认重置），升级后需改为 PATCH 语义发送完整字段。

---

## 🛠 项目进展

今日 5 个 PR 完成合并/关闭，标志着项目在四大方向同步推进：

### 1. 沙箱兼容性大修复（Podman 用户福音）
- **[PR #1106](https://github.com/moltis-org/moltis/pull/1106)** `fix(sandbox): support Podman escape hatches` —— 关闭久悬 75 天的 Issue [#1095](https://github.com/moltis-org/moltis/issues/1095)。新增 Linux host-socket 直通与特权嵌套 Podman 两种互斥逃逸模式，沙箱在模式变更时自动重建，rootless 诊断信息更完善。**推进了容器化部署的真实可用性**。

### 2. 配置可靠性格提升
- **[PR #1209](https://github.com/moltis-org/moltis/pull/1209)** `fix(gateway): heartbeat.update 应作为 PATCH 而非整体替换` —— 修复 Issue [#1187](https://github.com/moltis-org/moltis/issues/1187)。原因是 `HeartbeatConfig` 使用 `#[serde(default)]`，全量赋值导致未传字段被默认值覆盖，UI 表现"静默回退"。**消除一个潜在的配置一致性陷阱**。

### 3. OpenAI 后端路由优化
- **[PR #1198](https://github.com/moltis-org/moltis/pull/1198)** `将 OpenAI reasoning 工具调用路由至 Responses API` —— 当请求同时包含 function 工具与 `reasoning_effort` 时自动切换到 Responses API，同时保留 Chat Completions 行为用于普通请求与兼容供应商，stream 与非 stream 共享同一构造路径。**提升推理模型 + 工具链组合的稳定性**。

### 4. 文档与开源展示
- **[PR #1211](https://github.com/moltis-org/moltis/pull/1211)** `修复 README star history 图表` —— 旧图表因 GitHub stargazer API 的 token 限制失效，现切换至使用替代数据源的渲染服务，并合并前后端托管。

### 5. 新能力：Files 库
- **[PR #1206](https://github.com/moltis-org/moltis/pull/1206)** `新增托管 Files 库 + Settings 浏览器` —— 数据目录持久化的文件库，提供鉴权流式列表/上传/下载/创建/移动/删除 API；Finder 风格的设置界面，并支持 `MOLTIS_FILES_DIR` 自动发现，默认以只读方式挂载 Docker / Podman / Apple Container 容器。**显著扩展了 Moltis 作为 AI Agent 的文件操作能力**。

---

## 💬 社区热点

今日 Issue/PR 数据整体偏"修复推进"而非"讨论"，社区最活跃的内容已通过 PR 闭环。**互动条目如下**：

| 条目 | 类型 | 评论数 | 状态 |
|---|---|---|---|
| [#1095 Podman 无法工作](https://github.com/moltis-org/moltis/issues/1095) | Bug | 2 | ✅ 已通过 PR #1106 关闭 |
| [#1187 Heartbeat UI 字段静默重置](https://github.com/moltis-org/moltis/issues/1187) | Bug | 0 | ✅ 已通过 PR #1209 关闭 |

**诉求分析**：两个今日闭环的 Bug 均代表**真实用户在生产场景中遇到的可用性问题**——Podman 阻断 Linux 用户使用 Moltis，心跳 UI 静默重置会误导用户认为配置已生效。这种"低评论、高优先级"的 Bug 说明用户更倾向于提交后等待修复，体现出项目维护者响应链条可靠。

---

## 🐛 Bug 与稳定性

| 严重度 | 条目 | 描述 | Fix 状态 |
|---|---|---|---|
| 🔴 High | [#1095 Podman 不可用](https://github.com/moltis-org/moltis/issues/1095) | 通过 moltis 调用 Podman 失败，影响 Linux rootless/特权两种部署模式 | ✅ 已修复（[PR #1106](https://github.com/moltis-org/moltis/pull/1106)） |
| 🟡 Medium | [#1187 心跳 UI 字段静默重置](https://github.com/moltis-org/moltis/issues/1187) | 表单未覆盖字段被默认值覆盖，配置看似保存实则丢失 | ✅ 已修复（[PR #1209](https://github.com/moltis-org/moltis/pull/1209)） |

**Bug 闭环率：100%** —— 24 小时内 2/2 报告 Bug 均获修复，且都通过针对性 PR 解决，未出现"修复引入回归"的二次震荡信号。

---

## 💡 功能请求与路线图信号

今日最大信号来自仍处于 **OPEN** 状态的 [PR #1210](https://github.com/moltis-org/moltis/pull/1210)：

> **Add Tesla Fleet API connector for vehicle data sync**
> - 新增 `moltis-connector-tesla`，只读适配器，**仅同步数据不发送车辆指令、不唤醒休眠车**
> - 包含两种数据集模式（推测对应 read-only snapshot 与 cache-on-update）
> - 由核心贡献者 penso 提交

**路线图信号解读**：
1. **连接器（Connector）体系正在成型** —— Files 库（PR #1206）与 Tesla 连接器（PR #1210）同日推进，提示 Moltis 正在演化为**通用 AI Agent Runtime**，通过统一快照存储对接任意外部系统。
2. **"只读 + 安全" 设计哲学明确** —— Tesla 连接器明确禁止命令下发，呼应 Podman 沙箱逃逸中的"fail closed"原则，体现**安全优先**。
3. **判断落版可能性**：高。该 PR 由活跃维护者 penso 主导，与 Files 库同属 connector 生态，下一 `20260819.x` 版本纳入概率大。

---

## 🗣 用户反馈摘要

从现有 Issue 评论中可提取的真实信号：

- **#1095 (Podman)** —— 提交者明确"已搜索存量 Issue 且为最新版本"，反馈富含复现细节，并提供版本上下文，**反映出 Linux 容器化用户群体的强诉求**。
- **#1187 (Heartbeat)** —— 评论为 0，但通过 PR 描述可还原用户痛点："用户以为保存成功，但实际只有表单中可见字段被持久化，其余字段被 `serde(default)` 还原"——这是典型的**隐式数据丢失 UX**，比显式报错更易失去信任。

整体反馈氛围：**用户主动提供高质量复现信息，维护者响应精准**，社区文化健康。

---

## 📋 待处理积压

仅 1 项待合并 PR：

| 条目 | 类型 | 创建时间 | 说明 |
|---|---|---|---|
| [#1210 Tesla Fleet API 连接器](https://github.com/moltis-org/moltis/pull/1210) | Feature | 2026-08-18 | 新增只读车辆数据连接器，同日为开放状态，建议维护者优先 review |

**长期未响应条目**：当前数据窗口内未发现超过 30 天未回复的 Issue。**建议维护者关注**：
1. PR #1210 的代码审查与 CI 验证（今日提交尚处于早期审查阶段）
2. 跟进 #1095 与 #1187 修复后的回归测试，确保下一版本中 Podman 与 Heartbeat 在真实用户环境下不再触发相同症状

---

### 📊 健康度评估

| 指标 | 状态 |
|---|---|
| Bug 闭环率 | 🟢 100% |
| PR 合并率 | 🟢 5/6 = 83.3% |
| 社区互动 | 🟡 偏低（评论数少） |
| 版本节奏 | 🟢 24h 内双版本 |
| 长期积压 | 🟢 无显著积压 |

**总结**：Moltis 当日交出了一份**高效、精准、面向生产稳定性的答卷**——修复了影响实际部署的 Podman 与配置丢失两个高优先级 Bug，同时通过 Files 库与 Tesla 连接器拓展了平台能力边界。项目活跃度可评价为 **High**。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>



</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报

**日期：** 2026-08-19
**数据来源：** [github.com/zeroclaw-labs/zeroclaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## 1. 今日速览

ZeroClaw 今日继续保持高强度迭代节奏，过去 24 小时 Issues 更新 50 条（31 活跃 / 19 关闭），PR 更新 50 条（47 待合并 / 3 已关闭），**未发布新版本**。社区讨论焦点集中在两大方向：一是面向 Agent 运行时的结构性 RFC（Goal mode、Turn engine 统一、Session 持久化 Prompt），二是与平台稳定性相关的具体缺陷修复（Windows 测试套件、Google STT 密钥泄露、Provider 凭据轮换）。关闭数（19）与新开活跃数（31）比例反映出**项目处于"边治理边积压"阶段**：一方面安全/治理类 Issue 集中收尾（cargo-audit、observability 默认值、Twitter/X 二进制等），另一方面大型 RFC 和重构 PR 因 `needs-maintainer-review` 状态长期滞留等待核心维护者决策。

---

## 2. 版本发布

**今日无新版本发布。**

依赖升级方面，仍有大量待合并 PR 围绕 rust 依赖组批量更新（[PR #9808](https://github.com/zeroclaw-labs/zeroclaw/pull/9808) 涉及 46 个包的 rust-all 升级），但尚未合入，下一 release 窗口可能一次性引入较大变更面。

---

## 3. 项目进展

今日有 **3 条 PR 进入已合并/关闭状态**，**19 条 Issue 关闭**，整体推进集中在治理、可观测性与小型 bug 修复上。

### 已关闭的关键 PR
- [PR #10009](https://github.com/zeroclaw-labs/zeroclaw/pull/10009) — `fix(memory): key conversation autosave suppression on turn origin`：修复 memory 自动保存跳过逻辑位置依赖问题，由 heartbeat worker 触发的工作流导致非预期持久化，已合入。

### 重要 Issue 关闭（功能落地信号）
- [#8563](https://github.com/zeroclaw-labs/zeroclaw/issues/8563) — SOPs 在 web dashboard 中对 Agent 不可见（workflow blocked 级）已关闭，意味着相关修复或 work-around 已落地。
- [#7415](https://github.com/zeroclaw-labs/zeroclaw/issues/7415) — RFC: 统一三大 Agent turn engine（`run_tool_call_loop` + `turn_streamed` + `Agent::turn`），已通过 [#7540](https://github.com/zeroclaw-labs/zeroclaw/pull/7540) 单 PR 整合落地，标志控制平面重大重构完成。
- [#8059](https://github.com/zeroclaw-labs/zeroclaw/issues/8059) — `deny.toml` / `audit.toml` 策略清理（wasmtime advisory ignore 追踪、多版本与通配依赖）已关闭，供应链治理进一步收紧。
- [#3542](https://github.com/zeroclaw-labs/zeroclaw/issues/3542) — Webhook 端点支持 agent mode 已关闭，社区请求落地。
- [#5833](https://github.com/zeroclaw-labs/zeroclaw/issues/5833) — Session ownership model for destructive operations 已关闭，破坏性操作的 session 隔离加固完成。
- [#6394](https://github.com/zeroclaw-labs/zeroclaw/issues/6394) — PR 标题格式 GitHub Action 检查已合并（`status:in-progress`）。
- [#7069](https://github.com/zeroclaw-labs/zeroclaw/issues/7069) — Twitter/X channel 在预编译二进制中不可用已关闭，预构建 feature 矩阵修复完成。
- [#5626](https://github.com/zeroclaw-labs/zeroclaw/issues/5626) — Observability 默认值决策（`observability-prometheus` 是否留在 default features）已关闭，v0.8.0 前阻塞项解除。
- [#5843](https://github.com/zeroclaw-labs/zeroclaw/issues/5843) — Model-wise reasoning configuration（按 provider/model 单独配置推理）已关闭。
- [#6679](https://github.com/zeroclaw-labs/zeroclaw/issues/6679) — CI 合并前要求 fresh check 已关闭，合并策略收紧。
- [#10097](https://github.com/zeroclaw-labs/zeroclaw/issues/10097) — 2026-08-18 公告扫描失败已关闭（fixture advisory）。

整体看，**安全治理、可观测性默认值、控制平面统一**三件大事在今日得到收口，项目健康度持续改善。

---

## 4. 社区热点

按评论数排序，今日社区关注度最高的议题如下：

| 排名 | Issue | 评论数 | 主题 | 链接 |
|---|---|---|---|---|
| 1 | [#8303](https://github.com/zeroclaw-labs/zeroclaw/issues/8303) | 22 | RFC: Goal mode v1 — bounded foreground Matrix work | [🔗](https://github.com/zeroclaw-labs/zeroclaw/issues/8303) |
| 2 | [#7462](https://github.com/zeroclaw-labs/zeroclaw/issues/7462) | 17 | Windows 74 个测试失败（Unix-only 命令、路径、控制台编码） | [🔗](https://github.com/zeroclaw-labs/zeroclaw/issues/7462) |
| 3 | [#7929](https://github.com/zeroclaw-labs/zeroclaw/issues/7929) | 8 | 统一 web UI / ZeroCode TUI / channel runtime 的 slash-command 注册表 | [🔗](https://github.com/zeroclaw-labs/zeroclaw/issues/7929) |
| 4 | [#8519](https://github.com/zeroclaw-labs/zeroclaw/issues/8519) | 6 | 调和 cargo-audit ignores 并修复 wasmtime-wasi CVE | [🔗](https://github.com/zeroclaw-labs/zeroclaw/issues/8519) |
| 5 | [#8563](https://github.com/zeroclaw-labs/zeroclaw/issues/8563) | 5 | SOPs 在 web dashboard 中对 Agent 不可见（已关闭） | [🔗](https://github.com/zeroclaw-labs/zeroclaw/issues/8563) |
| 5 | [#7415](https://github.com/zeroclaw-labs/zeroclaw/issues/7415) | 5 | RFC: 统一三大 turn engine（已关闭） | [🔗](https://github.com/zeroclaw-labs/zeroclaw/issues/7415) |
| 5 | [#8410](https://github.com/zeroclaw-labs/zeroclaw/issues/8410) | 5 | Channel 任务需要一阶 intentional no-reply outcome | [🔗](https://github.com/zeroclaw-labs/zeroclaw/issues/8410) |
| 5 | [#8134](https://github.com/zeroclaw-labs/zeroclaw/issues/8134) | 5 | 按 `session_ttl_hours` 重置陈旧 channel session | [🔗](https://github.com/zeroclaw-labs/zeroclaw/issues/8134) |
| 5 | [#8059](https://github.com/zeroclaw-labs/zeroclaw/issues/8059) | 5 | Policy cleanup: deny.toml（已关闭） | [🔗](https://github.com/zeroclaw-labs/zeroclaw/issues/8059) |
| 10 | [#8642](https://github.com/zeroclaw-labs/zeroclaw/issues/8642) | 4 | MCP/tool-schema 克隆导致 Agent 循环 RSS 无界增长 | [🔗](https://github.com/zeroclaw-labs/zeroclaw/issues/8642) |

**诉求分析：**
- **[#8303](https://github.com/zeroclaw-labs/zeroclaw/issues/8303) Goal mode v1** 是当前头号热点，社区希望 Agent 能在多轮之间维持一个有界用户目标，跨越重启交接、Web/异步子任务、channel 接纳等多重边界，是 Agent 控制平面的核心契约讨论。
- **Windows 平台痛点集中爆发**：[#7462](https://github.com/zeroclaw-labs/zeroclaw/issues/7462)、[#7910](https://github.com/zeroclaw-labs/zeroclaw/issues/7910)（Windows 自更新 swap/rollback/sidecar 测试覆盖）反映 Windows 用户在 CI 之外的"盲区"中频繁踩坑，CI 仅 Linux 跑测试导致问题潜伏。
- **Slash-command 一致性**：[#7929](https://github.com/zeroclaw-labs/zeroclaw/issues/7929) 揭示了 channel runtime、ZeroCode TUI、web client 各自维护命令清单带来的漂移问题，社区希望引入统一注册表。
- **Memory 治理**：[#8642](https://github.com/zeroclaw-labs/zeroclaw/issues/8642) 拆分自 [#5542](https://github.com/zeroclaw-labs/zeroclaw/issues/5542)（WSL2 连续 OOM），根因之一是 MCP/tool-schema 克隆导致 RSS 不可控增长，社区已识别为独立路径。
- **SOP 与 Session TTL 需求**：[#8563](https://github.com/zeroclaw-labs/zeroclaw/issues/8563)、[#8134](https://github.com/zeroclaw-labs/zeroclaw/issues/8134) 显示企业用户对持久化工作流（Standard Operating Procedures）和 channel session 生命周期管理有强诉求。

---

## 5. Bug 与稳定性

按严重程度排列：

### 🔴 S1 - Workflow blocked
- **[#8563](https://github.com/zeroclaw-labs/zeroclaw/issues/8563)** — SOPs 在 web dashboard chat session 中对 Agent 不可见。✅ **已关闭**，关联修复应在 web dashboard agent 路径中补齐 SOP 扫描。
- **[#8642](https://github.com/zeroclaw-labs/zeroclaw/issues/8642)** — MCP/tool-schema 克隆驱动 Agent loop 无界 RSS 增长（WSL2 OOM 独立根因）。⏳ **暂无 fix PR**，与 [#8633](https://github.com/zeroclaw-labs/zeroclaw/issues/8633) 解决的 restart-storm 路径分开跟踪。

### 🟠 S2 - Degraded behavior
- **[#7462](https://github.com/zeroclaw-labs/zeroclaw/issues/7462)** — Windows 74 个测试失败（Unix-only 命令、路径语义、控制台编码 936），CI 仅 Linux 跑导致逃逸。⏳ 暂未见统一修复 PR，但 [#7910](https://github.com/zeroclaw-labs/zeroclaw/issues/7910) 跟进 Windows 自更新测试覆盖。
- **[#8410](https://github.com/zeroclaw-labs/zeroclaw/issues/8410)** — 条件式 channel 任务（如"有新邮件告诉我，否则静默"）无新邮件时仍发送可见回复。⏳ 无 fix PR，需新增一阶 no-reply outcome 类型。
- **[#6679](https://github.com/zeroclaw-labs/zeroclaw/issues/6679)** — CI 允许 stale PR check 被合并。✅ **已关闭**，CI 合并策略收紧。

### 🟡 安全相关（high risk 标签）
- **[#10107](https://github.com/zeroclaw-labs/zeroclaw/pull/10107)** — Google STT API key 出现在请求 URL 中（会进入代理日志/监控）。📝 **修复 PR 已开**（priority:p1，distinguished contributor），改用 `x-goog-api-key` header，强烈建议优先合并。
- **[#8519](https://github.com/zeroclaw-labs/zeroclaw/issues/8519)** — `audit.toml` / `deny.toml` drift + wasmtime-wasi CVE 修复。⏳ 追踪中。
- **[#9203](https://github.com/zeroclaw-labs/zeroclaw/pull/9203)** — SOP 认证 HTTP fan-in：确保 webhook 走 daemon-owned SOP 引擎而非降级到 chat/model fallback。📝 **PR 待合**。
- **[#9609](https://github.com/zeroclaw-labs/zeroclaw/pull/9609)** — WhatsApp Web 在 `mode="business"` 下未读取 `dm_policy` / `group_policy`（仅 personal 读取，默认 allowlist 误导）。📝 **PR 待合**。

### 🟢 回归与小修复
- **[#10081](https://github.com/zeroclaw-labs/zeroclaw/pull/10081)** — Web Quickstart channel descriptor 默认值未展示（needs-author-action）。📝 PR 待合。

---

## 6. 功能请求与路线图信号

今日热门功能请求展现出明确的**"Agent 工作流持久化"+"多通道一致性"**双主线：

### 高确定性（已有关联 PR，大概率纳入下一 release）
| 方向 | Issue / PR | 状态 |
|---|---|---|
| Telegram 群聊共享 session | [#9772](https://github.com/zeroclaw-labs/zeroclaw/pull/9772) `feat(telegram): per_user_session toggle` | PR 待合，priority:p2 |
| Telegram 安全模型选择器 | [#9997](https://github.com/zeroclaw-labs/zeroclaw/pull/9997) `feat(channels/telegram): secure model picker` | PR 待合，priority:p2 |
| Anthropic OAuth profile | [#9420](https://github.com/zeroclaw-labs/zeroclaw/pull/9420) `fix(anthropic): stored OAuth profiles` | PR 待合，priority 较高 |
| Provider 凭据按 429 冷却 | [#9419](https://github.com/zeroclaw-labs/zeroclaw/pull/9419) `fix(providers): rotate live credentials after rate limits` | PR 待合，priority:p2 |
| Cron shell jobs 原始 stdout 输出 | [#8409](https://github.com/zeroclaw-labs/zeroclaw/issues/8409) | Issue open，无

</details>

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*