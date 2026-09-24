# OpenClaw 生态日报 2026-09-24

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-09-24 02:40 UTC

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

# OpenClaw 项目动态日报 · 2026-09-24

> 数据源：[github.com/openclaw/openclaw](https://github.com/openclaw/openclaw) ｜ 统计周期：过去 24 小时

---

## 1. 今日速览

OpenClaw 项目今日处于**高活跃、强波动**状态：24 小时内 Issues 互动 500 条（460 活跃 / 40 关闭）、PR 互动 500 条（375 待合并 / 125 已合并关闭），并发布了 **v2026.9.6** 版本。但该版本刚一上线即触发 macOS 全平台启动崩溃（[#156861](https://github.com/openclaw/openclaw/issues/156861)），已被官方紧急从 Sparkle 升级通道撤回，2026.9.7 Mac 紧急修复正在赶工。社区讨论焦点集中在 P0 级稳定性问题（内存泄漏、升级失败、网关卡顿），项目整体呈"修远多于进"的态势，但版本质量门尚未兜住关键回归。

---

## 2. 版本发布

### ⚠️ v2026.9.6 — 已撤回，请勿在 macOS 升级

- **状态**：发布后数小时内被官方从 Sparkle 升级通道撤回，2026.9.7 Mac 紧急修复进行中。
- **关键问题**：[#156861](https://github.com/openclaw/openclaw/issues/156861)（P0，ux-release-blocker）：macOS 应用每次启动即崩溃，已影响用户完全无法打开客户端。
- **迁移注意事项**：
  - **macOS 用户**：若应用已无法启动，请从官网下载并重装 **2026.9.5** 稳定版。
  - **Linux/Windows 容器用户**：注意 [#152935](https://github.com/openclaw/openclaw/issues/152935) 与 [#146887](https://github.com/openclaw/openclaw/issues/146887) 报告的 schema 19 / 四阶段升级失败问题，建议在生产环境升 2026.9.5 前先在 staging 验证。
- **修复 PR**：[#145169](https://github.com/openclaw/openclaw/pull/145169)（P0，"preserve newer data across failed update rollback"）已被拆分、等待补充证据 ([#144005](https://github.com/openclaw/openclaw/pull/144005))，可能是回滚链路修复的关键候选。

---

## 3. 项目进展

今日合并/关闭的 PR 中，以下几条对项目稳定性与发布工程具有结构性意义：

| PR | 主题 | 影响 |
|---|---|---|
| [#156923](https://github.com/openclaw/openclaw/pull/156923) | **fix(release): bypass the variables cache when clearing release priority** | 回移植到发布分支的修复（cherry-pick `b1fdd939c3c1 -x`），确保 `OPENCLAW_RELEASE_PRIORITY_RUN` 清除时不再读到缓存陈旧值。提升发布可重复性。 |
| [#156934](https://github.com/openclaw/openclaw/pull/156934) | **fix: require full stable validation before publication** | 移除"stable 快通道"绕过 beta 验证 + 发布浸泡 + 阻塞性能检查的运营豁免。**这是对 2026.9.6 翻车的直接制度性回应**——下一版本必须走完整验证才能发 stable。 |
| [#156860](https://github.com/openclaw/openclaw/pull/156860) | **fix(android): effort gauge follows Effort with Fast mode enabled** | Android 客户端体验修正：Fast 模式下 Effort 拨盘可正确跟随。 |
| [#156937](https://github.com/openclaw/openclaw/pull/156937) | **fix(usage): prevent refresh OOMs on large SQLite sessions** | 修复 usage-refresh worker 在 512 MiB 堆上反复 OOM 导致会话用量数据缺失/过期。 |
| [#154868](https://github.com/openclaw/openclaw/pull/154868) | **fix: faulty compaction probe wedges run steering and restart aborts** | 关闭 [#154700](https://github.com/openclaw/openclaw/issues/154700)：embedded agent run 的 `isCompacting()` 探测异常时不再抛出未捕获异常，避免 run steering 与 abort 死锁。 |
| [#154923](https://github.com/openclaw/openclaw/pull/154923) | **fix: continuation-skip injection never skips on a completed workspace** | 关闭 [#149867](https://github.com/openclaw/openclaw/issues/149867)：避免已完成 workspace 的 SOUL.md / AGENTS.md / IDENTITY.md / USER.md 每轮重复注入。 |

**整体判断**：今日合并的 PR 多为"打补丁"性质，没有重大新特性合入主线；项目治理层面（[#156934](https://github.com/openclaw/openclaw/pull/156934)）迈出了关键一步。

---

## 4. 社区热点

按评论数排序的当日最活跃话题，反映社区真实关切：

1. **[#91588](https://github.com/openclaw/openclaw/issues/91588) — Gateway 内存泄漏，RSS 从 350MB 涨到 15.5GB**（39 评论，3 个月未解）
   - 影响范围广，多用户长期被 OOM-killer 反复触发 `launchd-handoff` 重启循环。
   - 维护者响应缓慢，标签 `clawsweeper:no-new-fix-pr, clawsweeper:needs-maintainer-review`，社区已经不耐烦。

2. **[#126360](https://github.com/openclaw/openclaw/issues/126360) — `AgentSelectionRequiredError` 在多 Agent 显式所有权场景下刷屏日志**（19 评论）
   - 揭示"全局 RPC + 系统 Agent turn + 日志插件"三个路径都没有 `agentId` 目标——架构性问题，需要产品决策。

3. **[#80319](https://github.com/openclaw/openclaw/issues/80319) — QA 工具默认值把 Codex 原生工具与 OpenClaw 动态工具混为一谈**（17 评论）
   - 自我修正后的复现表明问题面比原报告窄，但暴露 QA harness 在多 provider 工具对等性上的根本性混淆。

4. **[#148707](https://github.com/openclaw/openclaw/issues/148707) — 同一会话被第二轮挤掉时，第一轮回复丢失**（16 评论，2026.9.4 回归）
   - "Reply operation has no active tool authority snapshot"——核心是并发控制缺陷。

5. **[#152981](https://github.com/openclaw/openclaw/issues/152981) — Gateway 启动在 sidecars.model-runtime 卡 17 分钟后超时失败**（15 评论）

6. **[#140010](https://github.com/openclaw/openclaw/issues/140010) — Windows 睡眠唤醒后 30–60s+ 内 UI/WebSocket 不可达**（12 评论）

7. **[#156712](https://github.com/openclaw/openclaw/issues/156712) — `openclaw triage` 修复子进程不退干净，锁住 gateway-lifecycle**（10 评论，新开 P0）

8. **[#146860](https://github.com/openclaw/openclaw/issues/146860) — Windows Scheduled Task `InteractiveToken` 下管理更新 handoff 无法获得进程启动身份**（10 评论）

**背后的诉求**：用户最关心的三件事是——(a) Gateway 不再神秘崩溃；(b) 升级路径可信赖（"别把生产搞挂"）；(c) 多 Agent 显式所有权下的 RPC 路径行为要可预测。

---

## 5. Bug 与稳定性

按严重程度排列，均为 P0/ux-release-blocker 级：

### 🔴 最高优先级（已纳入 release blocker）

| Issue | 标题 | 修复 PR |
|---|---|---|
| [#156861](https://github.com/openclaw/openclaw/issues/156861) | macOS 2026.9.6 升级后应用完全无法启动 | 待 2026.9.7 修复 |
| [#156712](https://github.com/openclaw/openclaw/issues/156712) | triage 修复子进程不退出，锁住 gateway-lifecycle | ❌ 无 |
| [#152981](https://github.com/openclaw/openclaw/issues/152981) | Gateway 启动卡 17 分钟失败 | ❌ 无 |
| [#152275](https://github.com/openclaw/openclaw/issues/152275) | 插件激活失败后模型目录/分发不可用 | ❌ 无 |
| [#152935](https://github.com/openclaw/openclaw/issues/152935) | 2026.9.4 → 2026.9.5 容器升级 schema 19 被拒 | ❌ 无（需离线 doctor） |
| [#148681](https://github.com/openclaw/openclaw/issues/148681) / [#147160](https://github.com/openclaw/openclaw/issues/147160) | Update failure: finalize:doctor（2026.9.4） | ❌ 无 |
| [#146887](https://github.com/openclaw/openclaw/issues/146887) | 2026.9.3 → 2026.9.4 四阶段升级失败 | ❌ 无 |
| [#146860](https://github.com/openclaw/openclaw/issues/146860) | Windows InteractiveToken 更新 handoff 卡死 | ❌ 无 |
| [#156674](https://github.com/openclaw/openclaw/issues/156674) | 2026.9.5 macOS 网关 CPU/内存压力 | ❌ 无 |

### 🟠 高优先级 P1（影响 session-state / message-loss）

| Issue | 标题 | 修复 PR |
|---|---|---|
| [#148707](https://github.com/openclaw/openclaw/issues/148707) | 并发挤掉回合时回复丢失 | ❌ 无 |
| [#138272](https://github.com/openclaw/openclaw/issues/138272) | Android Talk "no live response owner" | [#143220](https://github.com/openclaw/openclaw/pull/143220) 待合并（仅前端错误提示） |
| [#140010](https://github.com/openclaw/openclaw/issues/140010) | Windows 睡眠唤醒恢复期不可达 | ❌ 无 |
| [#148650](https://github.com/openclaw/openclaw/issues/148650) | Memory indexer 无法解析 SecretRef 凭证 | ❌ 无 |
| [#84662](https://github.com/openclaw/openclaw/issues/84662) | Codex app-server 把运行时上下文写入原生历史 | ❌ 无 |
| [#123354](https://github.com/openclaw/openclaw/issues/123354) | Matrix E2EE Megolm 轮换后停止解密 | ❌ 无 |
| [#128067](https://github.com/openclaw/openclaw/issues/128067) | beta.7 6 类可靠性缺陷 + 3 个次要问题 | 部分待合入 |

### 🟡 中等 P2（已合入或待合并的修复）

- [#146902](https://github.com/openclaw/openclaw/issues/146902) — 工具集 churn 导致 prompt-cache 失效 → 社区已分析根因，待修复
- [#140129](https://github.com/openclaw/openclaw/issues/140129) — Anthropic 缓存卡在 ~46k → 涉及 `session:sanitized` 重写历史指纹
- [#121617](https://github.com/openclaw/openclaw/issues/121617) — 后压缩 "Already compacted" 误判 → 源码已定位

**健康度判断**：P0 积压显著，**9 条 P0 中仅 [#156712](https://github.com/openclaw/openclaw/issues/156712)、[#156861](https://github.com/openclaw/openclaw/issues/156861)、[#156674](https://github.com/openclaw/openclaw/issues/156674) 为 24h 内新增**——版本质量门问题已经从"偶发"演变为"系统性"。

---

## 6. 功能请求与路线图信号

| 需求 | Issue | 已有/相关 PR | 进入下一版本的概率 |
|---|---|---|---|
| A2A 单向 dispatch（去 ping-pong） | [#44309](https://github.com/openclaw/openclaw/issues/44309) | ❌ | 中——`needs-product-decision` 标签说明产品侧在权衡 |
| Azure/Teams 多 Bot 支持 | [#71058](https://github.com/openclaw/openclaw/issues/71058) | ❌ | 低——5 个月未动 |
| session-memory hook 在 reset/prune 时也触发 | [#51572](https://github.com/openclaw/openclaw/issues/51572) | ❌ | 中 |
| Stream repetition safeguard（模型卡死输出同一句） | [#44965](https://github.com/openclaw/openclaw/issues/44965) | ❌ | 中 |
| 共享 Gateway 客人模型作用域 + 前台任务强制 | [#156453](https://github.com/openclaw/openclaw/pull/156453) PR（guest 模型隔离） | ✅ 已提 PR | **高**——回应 [#156269](https://github.com/openclaw/openclaw/issues/156269) |
| Cron 表达式编辑建议配置的 announce 收件人 | [#90467](https://github.com/openclaw/openclaw/issues/90467) → [#137411](https://github.com/openclaw/openclaw/pull/137411) PR | ✅ 已提 PR | **高** |
| Linux aarch64 配套客户端（deb+AppImage） | [#138279](https://github.com/openclaw/openclaw/issues/138279) | ❌ | 低——stale 标签 |
| Provider fallback 按失败类型分类隔离 | [#47910](https://github.com/openclaw/openclaw/issues/47910) | ❌（已关闭但无 PR） | 中 |
| `tools.exec.notifyOnExit` 增加 failure-only 模式 | [#141973](https://github.com/openclaw/openclaw/issues/141973) | ❌ | 中 |

---

## 7. 用户反馈摘要

从 Issues 评论中提炼的真实声音：

**痛点（强烈不满）**：
- **"升级即灾难"叙事已成型**：2026.9.4、2026.9.5、2026.9.6 连续三个版本报告升级失败/回归（[#146887](https://github.com/openclaw/openclaw/issues/146887)、[#152935](https://github.com/openclaw/openclaw/issues/152935)、[#156861](https://github.com/openclaw/openclaw/issues/156861)）。用户在 [#146887](https://github.com/openclaw/openclaw/issues/146887) 中直言升级路径"四个阶段全失败"。
- **长期内存泄漏无人认领**：[#91588](https://github.com/openclaw/openclaw/issues/91588) 39 条评论，3 个月"无新 fix PR"——社区明显失望。
- **Android Talk 三个版本连续翻车**：[#138272](https://github.com/openclaw/openclaw/issues/138272) 跨 2026.7.1-2 / 2026

---

## 横向生态对比

# 个人 AI 助手 / 自主智能体开源生态横向对比分析报告

**数据周期**：2026-09-24（过去 24 小时）｜**覆盖项目**：13 个｜**核心参照**：OpenClaw

---

## 1. 生态全景

2026-09-24 的开源个人 AI 助手生态呈现**"高产迭代与质量阵痛并行"的典型阶段特征**：13 个观测项目中，活跃项目多达 11 个、单日合并 PR 总量超过 290 条，但同时也暴露出**版本治理、升级可靠性、上下文治理、多 Agent 安全隔离**四大共性短板。OpenClaw 自身 v2026.9.6 因 macOS 启动崩溃被紧急撤回，触发项目将"必须走完整 stable 验证"写入 PR #156934 的制度性修正，标志着行业头部已进入**"主动收敛发版纪律"的成熟阶段**。与此同时，NanoClaw v2.4.0、ZeroClaw 与 QwenPaw 等围绕"Skill 化基础设施、可插拔网关、多租户 Hub"的架构级跃迁集中落地，预示 2026 Q4 生态主线将从"功能堆叠"转向"治理与隔离"。

---

## 2. 各项目活跃度对比

| 项目 | Issues（活跃/关闭） | PRs（已合/待合） | Release | 健康度评级 | 当日特征 |
|---|---|---|---|---|---|
| **OpenClaw**（参照） | 460 / 40 | 125 / 375 | ⚠️ v2026.9.6 撤回 | ⭐⭐☆☆☆ | 高活跃但 P0 积压 9 条，3 个版本连续回归 |
| **NanoBot** | 2 / 4 | 20 / 14 | — | ⭐⭐⭐⭐☆ | 高迭代、Context Compaction 收敛为主线 |
| **Hermes Agent** | 45 / 5 | 8 / 40+ | — | ⭐⭐⭐⭐☆ | 50/50 吞吐，OAuth/凭据治理 + 桌面 SDK 抢救 |
| **NanoClaw** | — / — | 17 / 10 | ✅ v2.4.0 | ⭐⭐⭐⭐☆ | 网关可插拔重大架构升级 |
| **NullClaw** | 17 / 0 | 8 / 13 | — | ⭐⭐⭐⭐ | 集中修复 P0 SIGSEGV + 调度器鉴权 |
| **QwenPaw**（原 CoPaw） | 17 / 26 | 12 / 17 | — | ⭐⭐⭐⭐ | 安全加固 + 许可证合规 + 测试覆盖 +3.28pp |
| **ZeroClaw** | 13 / 0 | 3 / 47 | — | ⭐⭐⭐☆☆ | RFC 治理 + 多 Agent 演进，并存大量 XL 长尾 PR |
| **PicoClaw** | 1 / 0 | 0 / 1 | — | ⭐☆☆☆☆ | **TLS 证书过期 14 天**，基础设施严重受损 |
| **IronClaw** | 0 / 0 | 0 / 2 | — | ⭐⭐⭐☆☆ | 1.4.1-rc.2 收尾期，进入静默维护窗口 |
| **LobsterAI** | 0 / 0 | 50 / 0 | ✅ 2026.9.23 | ⭐⭐⭐☆☆ | 静默收口 15 个历史版本回灌主干 |
| **Moltis** | 0 / 0 | 0 / 1 | — | ⭐⭐☆☆☆ | 8 天前 1 个 PR 待 Review，社区进入沉睡 |
| **TinyClaw** | 0 | 0 | — | ⭐☆☆☆☆ | 过去 24h 无活动 |
| **ZeptoClaw** | 0 | 0 | — | ⭐☆☆☆☆ | 过去 24h 无活动 |

> 注：LobsterAI 的 50 个合并 PR 全部为历史 release-merge 收尾，不代表真实功能迭代量。

---

## 3. OpenClaw 在生态中的定位

### 与同类项目的横向坐标

| 维度 | OpenClaw | NanoClaw | ZeroClaw | QwenPaw | LobsterAI |
|---|---|---|---|---|---|
| **覆盖广度** | 全平台 macOS/Win/Linux/Android | Linux/容器优先 | 跨平台 | 全平台 | Win/macOS |
| **渠道广度** | Slack/Teams/Telegram/Feishu/Matrix/iMessage/WeCom | Mattermost | WhatsApp 主力 | 飞书/钉钉/企微 | IM 集成 |
| **活跃规模** | 1000+ 日吞吐 | ~30 PR/日 | ~60 PR/日 | ~70 PR/日 | 内部高/外部静默 |
| **架构特性** | 单体 + 插件 | Skill 化网关 + 可插拔 provider | 多 Agent / RFC 治理 | Hub 多租户方向 | B 端闭环 |
| **当前阶段** | **质量危机 + 治理收紧** | 架构跃迁期 | 设计密集期 | 稳定维护 | 内部高速 |

### 三大差异化优势
1. **覆盖面与渠道完备性领先**：同时支持 Sparkle/容器/Android 多升级通道、5+ 即时通讯平台，是生态中唯一具备"端到端运维链"的项目；
2. **发版工程化能力最强**：v2026.9.6 翻车后 24 小时内就推动 PR #156934 制定"完整 stable 验证"硬性制度，这是其他项目尚未建立的工业化防线；
3. **生产级 P0 案例库**：9 条 P0 + 22 条 P1/P2 的存量 Bug 列表，本身就是其他中小项目避免重蹈覆辙的**反面教材库**。

### 主要短板与差距
- **长尾修复响应慢**：[#91588](https://github.com/openclaw/openclaw/issues/91588) Gateway 内存泄漏 3 个月、39 评论无 Fix PR，社区耐心被消耗；
- **多 Agent 显式所有权**未解决（[#126360](https://github.com/openclaw/openclaw/issues/126360)）—— ZeroClaw、QwenPaw 已在 RFC 层推进，OpenClaw 尚未形成应对；
- **会话/消息完整性**：并发挤掉回合时回复丢失（[#148707](https://github.com/openclaw/openclaw/issues/148707)）—— NullClaw 也已合并 #978/#980 同类修复，OpenClaw 应加速跟进。

---

## 4. 共同关注的技术方向

下表汇总跨项目共同涌现的关键诉求：

| 共性方向 | 涉及项目 | 代表 Issue/PR | 核心诉求 |
|---|---|---|---|
| **上下文压缩 / 滑动窗口治理** | OpenClaw、NanoBot、QwenPaw、NullClaw、ZeroClaw | NanoBot #5882-#5885；QwenPaw #7853/#7628；ZeroClaw #9368 | 大响应穿透压缩、Provider 预算超限、pruner 边界语义 |
| **多 Agent 安全隔离 / 沙箱** | ZeroClaw、QwenPaw、Hermes、OpenClaw、Moltis | ZeroClaw #10259/#7821；Moltis #1272；Hermes #102376；QwenPaw #2978/#4361 | unattended turn 审批、空闲 cron 守护、per-agent mount/run_as、文件守卫旁路防御 |
| **升级 / 自更新可靠性** | OpenClaw、NanoClaw、PicoClaw、NanoBot | OpenClaw v2026.9.6；NanoClaw #3873/#3828；NanoBot 0.3.5 #5881 | cutover drain、schema 19 拒升级、强制目录外置 |
| **通道长稳态（Telegram/Slack/Feishu/WhatsApp）** | OpenClaw、NullClaw、ZeroClaw、QwenPaw | NullClaw #972/#976；ZeroClaw #10922/#11050/#11055/#11059；QwenPaw 多飞书/钉钉 | 24h 长跑后 polling thread 死、消息静默丢、force_voice 等标志被忽略 |
| **OAuth / 长会话 Token 刷新** | Hermes Agent、OpenClaw | Hermes #82052（6 评论）；OpenClaw #146860 | 长寿命 worker 凭据代际隔离、Windows InteractiveToken handoff |
| **Provider 生态扩展 / 本地模型对接** | NanoBot、NullClaw、QwenPaw、Hermes | NanoBot #5875 IO Intelligence；NullClaw #981 grok-cli；QwenPaw Ollama；Hermes Ollama | 第三方 CLI 直连、本地模型 ergonomics |
| **工具 / 流式协议层重构** | NullClaw、NanoBot、ZeroClaw | NullClaw #965/#971 SSE 流式 tool-call；NanoBot #5878 日志；ZeroClaw #9819 多模态校验 | 流式 tool-call 规范化、可观测性、像素级图像验证 |
| **WebUI / 桌面体验完善** | NanoBot、Hermes、QwenPaw、ZeroClaw | NanoBot #5851/#5847；Hermes #120942/#58783；QwenPaw #7956；ZeroClaw #11041 | composer caret 跳变、设置页本地化、Web Dashboard 用户态 |
| **可观测性 / 状态报告** | ZeroClaw、NanoBot、OpenClaw | ZeroClaw #8692 RFC 决策队列；NanoBot #5878 注入日志；OpenClaw 历史指纹 | "agent 在做什么"透明化、决策溯源 |

---

## 5. 差异化定位分析

| 项目 | 核心定位 | 目标用户 | 关键技术架构差异 |
|---|---|---|---|
| **OpenClaw** | 全平台生产级个人 AI 桌面+网关 | 桌面重度用户 / 跨平台自托管者 | 单一仓库多客户端 + Sparkle/Tauri/容器升级链 + 插件 SDK |
| **NanoBot** | 多 Provider 通用 Agent 框架 | 模型消费者 / 集成商 | Provider-first + Context Compaction 一类收敛 + Skills 抽象 |
| **Hermes Agent** | 本地模型优先 + 安全策略严格 | 自托管 LLM 玩家 / 隐私敏感用户 | hardline 命令管控 + 凭据池代际隔离 + Desktop Plugin SDK |
| **NanoClaw** | 可插拔基础设施 + Skill 生态 | 重度自托管运维者 | **凭据网关契约集中化（OneCLI ↔ Iron Proxy）+ Skill 形式部署** |
| **NullClaw** | 低资源设备友好 | 嵌入式 / 低端设备 / Telegram 机器人 | Zig 实现 + 512MB 内存假设 + 行编辑 allocation-free |
| **IronClaw** | 企业多租户稳定发行版 | 企业 / 多租户部署 | scoped virtual skill roots + lockfile 严格治理 + RC 流程 |
| **LobsterAI** | 商业闭源式团队工作台 | B 端团队 / Windows/macOS 用户 | 内部高频发版 + 实验性功能先发 + 对外社区静默 |
| **QwenPaw** | Hub 多租户生态 + 安全沙箱 | 企业管理员 / 插件开发者 | Console/Hub 双轨 + **GPL→MIT 许可证合规迁移** + 单测覆盖率上升 |
| **ZeroClaw** | 多 Agent 主机级治理 | 多 Agent 运维 / 架构决策者 | RFC-driven + 主机级 admission control + 长尾大型 PR 文化 |
| **PicoClaw** | 极简轻量 CLI | 单文件部署极客 | （当前因 TLS 失修已停摆） |
| **Moltis** | Sandbox 精细化 | 安全敏感自托管者 | sandbox.run_as / sandbox.force / per-agent mount 设计 |

**架构差异速读**：
- **网关/Skill 抽象派**：NanoClaw、NanoBot、IronClaw——以可插拔为核心；
- **多 Agent 治理派**：ZeroClaw、OpenClaw（待进化）、QwenPaw——以隔离/治理为核心；
- **桌面/工作台派**：OpenClaw、LobsterAI、QwenPaw——以终端用户体验为核心；
- **低资源派**：NullClaw——以运行时资源假设为核心。

---

## 6. 社区热度与成熟度分层

### 🔥 第一梯队：高速迭代期
- **NanoBot**（34 PR/日，5 条 Context Compaction 合并）、**NanoClaw**（v2.4.0 发布 + 17 条 PR 合并）、**QwenPaw**（43 Issues + 29 PR、许可证与测试同步跃迁）—— 共同特征是"功能密度大、PR 合并率高、技术债主动消化"。
- **OpenClaw**虽吞吐量第一（500+500），但实质进入"修远多于进"——属于**超大规模下的质量巩固阶段**。

### 🛠️ 第二梯队：集中修复期
- **NullClaw**（P0 SIGSEGV / MCP stdio 挂死 / 调度器鉴权三大阻塞同步推进）、**Hermes Agent**（凭据代际 + Desktop SDK 抢救）—— 处于"打地基"阶段，特征是 P0/P1 批量清理。

### 📋 第三梯队：治理与发布收口期
- **ZeroClaw**（RFC 治理轮次推进到 Rev. 19）、**LobsterAI**（15 个历史版本一次性回灌主干）—— 进入"流程制度化、版本治理"阶段。

### 💤 第四梯队：静默 / 风险期
- **IronClaw**（1.4.1-rc.2 收尾期）、**Moltis**（单一 PR 8 天无 Review）—— 维护节奏放缓，需关注 contributor 流失。
- **PicoClaw**（TLS 失效 14 天）—— 已进入**项目形象受损**阶段，需紧急基础设施抢修。
- **TinyClaw / ZeptoClaw**—— 无任何活动，存在被边缘化风险。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目日报 · 2026-09-24

> 数据源：[HKUDS/nanobot](https://github.com/HKUDS/nanobot) · 报告期：过去 24 小时

---

## 一、今日速览

NanoBot 在过去 24 小时呈现**中高强度迭代态势**：Issues 侧以关闭为主（6 条更新中 4 条关闭、2 条新增/活跃），PR 侧吞吐极高（34 条更新，合并/关闭 20 条、待合并 14 条）。本轮工作主题高度收敛——**Context Compaction（上下文压缩）相关问题成为主线议题**，至少 5 条 PR 与之相关（#5882、#5883、#5884、#5885、#5780）；其次是 WebUI 与 Provider 生态完善。**未发布新版本**，但合并密度显示维护团队正在为下一版本窗口做准备。

---

## 二、版本发布

⚠️ **过去 24 小时无新版本发布。**

最近一次发版节奏建议关注 0.3.5（参见 Issue [#5881](https://github.com/HKUDS/nanobot/issues/5881)，用户反馈该版本引入了 `_nanobot` 目录必须放置在 workspace 外的强制校验，存在升级兼容性问题，维护团队可能需要快速补丁）。

---

## 三、项目进展

### 🔀 已合并/关闭的重要 PR（精选 10 条）

| PR | 标题 | 影响面 |
|---|---|---|
| [#5883](https://github.com/HKUDS/nanobot/pull/5883) | fix(agent): preserve state for required Codex compaction | 修复 Codex 重启会话压缩流程的状态丢失 |
| [#5875](https://github.com/HKUDS/nanobot/pull/5875) | feat(providers): add IO Intelligence (io.net) provider | **新增官方 Provider**：io.net 出品的 IO Intelligence |
| [#5882](https://github.com/HKUDS/nanobot/pull/5882) | docs: correct context compaction behavior | **修正用户文档**对压缩行为的描述偏差 |
| [#5886](https://github.com/HKUDS/nanobot/pull/5886) | fix(providers): preserve image inputs for deepseek-flash | 修复 deepseek-flash 多模态图像静默丢失 |
| [#5878](https://github.com/HKUDS/nanobot/pull/5878) | fix(agent): log mid-turn injected messages | 完善运行时可观测性 |
| [#5871](https://github.com/HKUDS/nanobot/pull/5871) | feat(linear): improve native agent UX | Linear 集成体验全面升级 |
| [#5813](https://github.com/HKUDS/nanobot/pull/5813) | fix(webui): clear stale restart prompt after reconnect | 修复 WebUI 重连后陈旧提示 |
| [#5851](https://github.com/HKUDS/nanobot/pull/5851) | feat(webui): add usage ranges, activity calendar and model breakdowns | WebUI 用量可视化能力扩展 |
| [#5290 对应代码重构](https://github.com/HKUDS/nanobot/issues/5290) | Deduplicate atomic JSONL write idiom | 代码健康度改进（Issue 关闭） |
| [#2152](https://github.com/HKUDS/nanobot/issues/2152) / [#2160](https://github.com/HKUDS/nanobot/issues/2160) | WhatsApp 语音/启动通知 社区技能收录 | 社区贡献纳入参考实现 |

**整体评估**：本轮合并在 **Provider 生态**（IO Intelligence 官方接入、DeepSeek 图像修复、Codex 状态保留）、**上下文压缩链路**（文档修正 + Codex 状态 + 日志增强）和 **WebUI 可用性**（重启提示、用量可视化）三条主线均取得显著推进。项目整体继续向**生产级稳定性 + 多模型/多渠道覆盖**方向稳步迈进。

---

## 四、社区热点

### 🔥 讨论最活跃 Issue

1. **[#5870](https://github.com/HKUDS/nanobot/issues/5870)** ⭐ p1 · 评论 3  
   *Telegram: context compaction completion notice is repeated multiple times*  
   用户报告 Telegram 通道下 `Context compacted.` 通知被重复发送（个人会话中观察到 6+ 次），与 Gateway 的自动压缩事件强相关。**已关闭**，但关联修复 [#5780](https://github.com/HKUDS/nanobot/pull/5780)（停止自动压缩通知）仍 OPEN——议题热度反映出"通知噪音"是用户真实痛点。

2. **[#2152](https://github.com/HKUDS/nanobot/issues/2152)** ⭐ · 评论 2 · 👍 2  
   *Native WhatsApp voice message support (STT + TTS)*  
   社区开发者 [@felixbk98](https://github.com/felixbk98) 基于 Fish Audio 构建 WhatsApp 语音消息全栈方案，希望纳入原生支持。

3. **[#5879](https://github.com/HKUDS/nanobot/issues/5879)** · 评论 2 · OPEN  
   *Large read_file results survive compaction as unsummarized delta and abort the turn*  
   揭示了上下文压缩中的一个**重要边界缺陷**：大文件读取结果即使在被摘要后仍可能突破输入预算并中止回合。

### 📌 隐性热点（PR 维度）

- **#5847 / #5851 / #5848 / #5854（WebUI 系列）** — 作者 [@Re-bin](https://github.com/Re-bin) 集中交付一组 WebUI 体验改进，部分被 [#5847](https://github.com/HKUDS/nanobot/pull/5847) 合并，未合并的 #5848/#5854 标注为 Draft/等待交互设计共识**——可观察出社区对 WebUI 形态尚处于"边做边收敛"阶段**。
- **#5885（p1）idle transcript token 阈值门控** — 与 #5280 行为约束形成精细化补充，反映维护团队对 memory pipeline 的**持续打磨**。

---

## 五、Bug 与稳定性

### 🚨 严重程度排序

| 严重度 | Issue/PR | 描述 | 状态 |
|---|---|---|---|
| 🔴 **P0** | [#5884](https://github.com/HKUDS/nanobot/pull/5884) | memory 历史压缩覆盖并发追加 | **OPEN**，已有 fix PR 待审 |
| 🟠 **P1** | [#5870](https://github.com/HKUDS/nanobot/issues/5870) | Telegram 压缩通知重复 | 已关闭，关联 PR [#5780](https://github.com/HKUDS/nanobot/pull/5780) OPEN |
| 🟠 **P1** | [#5861](https://github.com/HKUDS/nanobot/pull/5861) | fallback tokenizer 后台预热 | OPEN，有 fix PR |
| 🟠 **P1** | [#5885](https://github.com/HKUDS/nanobot/pull/5885) | idle 转写 token 阈值门控 | OPEN，有 fix PR |
| 🟡 **P2** | [#5879](https://github.com/HKUDS/nanobot/issues/5879) | read_file 大结果穿透压缩 | OPEN，关联 PR [#5824](https://github.com/HKUDS/nanobot/pull/5824) OPEN |
| 🟡 **P2** | [#5886](https://github.com/HKUDS/nanobot/pull/5886) | deepseek-flash 图像丢失 | 已有 PR，已关闭 |
| 🟡 **P2** | [#5881](https://github.com/HKUDS/nanobot/issues/5881) | 0.3.5 `_nanobot` 强制外置 | **OPEN，无 fix PR，用户中文反馈** |
| 🟡 **P2** | [#5780](https://github.com/HKUDS/nanobot/pull/5780) | 停止自动压缩通知 | OPEN |
| 🟢 **低** | [#5883](https://github.com/HKUDS/nanobot/pull/5883) | Codex 压缩状态保留 | 已关闭 |

### ⚠️ 风险点

- **#5881（中文 Issue）未得到 PR 层面的修复响应**，且涉及 0.3.5 的升级兼容性，可能在中文用户群中引发强烈反弹。
- **#5884（P0）memory 并发压缩覆盖** 是本轮最为严重的稳定性问题，PR 已就位但尚未合并。

---

## 七、功能请求与路线图信号

| 请求/信号 | 来源 | 落地可能性 |
|---|---|---|
| **WhatsApp 语音消息原生支持（STT + TTS）** | [#2152](https://github.com/HKUDS/nanobot/issues/2152) | 🟡 中：社区已有可用 skill，Fish Audio 集成方案成熟，但需对接 WhatsApp bridge |
| **WhatsApp 启动通知** | [#2160](https://github.com/HKUDS/nanobot/issues/2160) | 🟡 中：systemd drop-in 方案已 PoC |
| **Skills 仅手动调用（防误触发副作用）** | [#5405](https://github.com/HKUDS/nanobot/pull/5405) | 🟢 高：已有 OPEN PR，方案明确 |
| **Codex Langfuse Tracing** | [#5520](https://github.com/HKUDS/nanobot/pull/5520) | 🟡 中：PR OPEN，但已标记 conflict |
| **Heartbeat 共享会话** | [#4551](https://github.com/HKUDS/nanobot/pull/4551) | 🟡 中：OPEN 较久（2026-06 至今），需维护者拍板 |
| **WebUI 图片结果回复 / 任务面板** | [#5848](https://github.com/HKUDS/nanobot/pull/5848) / [#5854](https://github.com/HKUDS/nanobot/pull/5854) | 🟡 中：作者自标 Draft，等待交互设计共识 |
| **IO Intelligence Provider（官方）** | [#5875](https://github.com/HKUDS/nanobot/pull/5875) | ✅ 已合并 |

**路线图风向**：下一版本大概率会包含 **Memory 压缩加固（#5884 + #5885）**、**Provider 扩展（IO.NET/Codex 状态保留）**、**Skills 手动调用（#5405）** 等。

---

## 七、用户反馈摘要

来自 Issue 评论的真实声音：

- 💬 **重复通知令人困扰**（[#5870](https://github.com/HKUDS/nanobot/issues/5870)）：用户在 Telegram 个人会话中观察到 6 次以上 `Context compacted.` 重复消息，明确表达反感。PR [#5780](https://github.com/HKUDS/nanobot/pull/5780) 的提交者也写道 *"it's quite annoying"*——表明该行为可能并非设计意图。
- 💬 **Codex 用户遭遇上下文截断**（[#5883](https://github.com/HKUDS/nanobot/pull/5883)）：恢复 Codex 请求时输入预算超限的边缘场景需要被妥善处理，反映出**长会话场景**对生产可用性的要求。
- 💬 **中文用户对升级路径的困惑**（[#5881](https://github.com/HKUDS/nanobot/issues/5881)）：0.3.5 引入 `_nanobot` 必须在 workspace 外的强校验，用户质疑设计合理性并希望保留同实例内的灵活性。
- 💬 **WebUI 重连体验**（[#5813](https://github.com/HKUDS/nanobot/pull/5813)）：用户重启 gateway 后，WebUI 仍持有旧的 `requires_restart` 配置，导致重复提示。
- 👍 **社区贡献者活跃**：[@felixbk98](https://github.com/felixbk98) 一次性贡献了 WhatsApp 语音与启动通知两套完整 skill，体现良好的外部生态。

---

## 八、待处理积压 ⚠️

建议维护者重点关注以下长期未推进项：

| 编号 | 类型 | 标题 | 打开时长 | 风险 |
|---|---|---|---|---|
| [#4551](https://github.com/HKUDS/nanobot/pull/4551) | PR (p2) | heartbeat isolated_session config | **2026-06-26 起（约 90 天）** | 🔴 长期搁置，需维护者决策 |
| [#5520](https://github.com/HKUDS/nanobot/pull/5520) | PR (p2) | langfuse tracing for codex | 2026-08-24 起（~30 天），含 conflict | 🟡 需 rebase |
| [#5405](https://github.com/HKUDS/nanobot/pull/5405) | PR (p2) | manual-only skill invocation | 2026-08-16 起（~38 天） | 🟡 社区刚需，建议加速评审 |
| [#5664](https://github.com/HKUDS/nanobot/pull/5664) | PR (p2) | bound idle summary cache | 2026-09-04 起，含 conflict | 🟡 需 rebase |
| [#5881](https://github.com/HKUDS/nanobot/issues/5881) | Issue | 0.3.5 `_nanobot` 目录强制外置 | 2026-09-23 新开 | 🟠 中文社区反馈窗口期，需快速响应 |
| [#5879](https://github.com/HKUDS/nanobot/issues/5879) | Issue | read_file 大结果穿透压缩 | 2026-09-23 新开 | 🟠 关联 PR [#5824] 待推进 |

---

### 📊 项目健康度总评

| 维度 | 评级 | 说明 |
|---|---|---|
| 迭代活跃度 | ⭐⭐⭐⭐⭐ | 24h 内 34 条 PR 更新，社区参与度高 |
| 响应及时性 | ⭐⭐⭐⭐ | 大部分 p1/p2 Bug 有对应 PR，但仍存在 90 天+ 的搁置项 |
| 文档同步 | ⭐⭐⭐⭐ | #5882 主动修正文档与实现的脱节 |
| 社区生态 | ⭐⭐⭐⭐ | io.net 官方接入、外部 WhatsApp 技能贡献者活跃 |
| 稳定性风险 | ⭐⭐⭐ | memory 压缩并发问题（P0）尚未合并；0.3.5 升级兼容问题待响应 |

**结论**：项目处于**快速演进 + 主动修复**阶段，但**压缩管线**与**升级兼容性**两条主线需在下一版本窗口重点兜底。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目日报

**日期**: 2026-09-24
**项目**: NousResearch/hermes-agent
**监测周期**: 过去 24 小时

---

## 一、今日速览

Hermes Agent 今日维持高活跃度，**24 小时内共更新 50 条 Issues 与 50 条 PRs**，其中 45 个 Issues 与 40 个 PRs 仍处于待处理状态。Issues 关闭/合并 5 条，今日**无新版本发布**。从议题分布来看，社区关注集中在三个方向：(1) **本地模型/桌面端可用性**（Linux NVIDIA、macOS 双实例、Windows 管道死锁等）；(2) **会话状态与身份认证边界**（OAuth Token 刷新、凭据池代际隔离、长消息截断）；(3) **插件 SDK 与扩展机制重构**（#116305 系列抢救性 PR 集中合入）。项目整体处于活跃迭代期，**安全相关 P3 Issue 已出现直接修复 PR**，显示出良好的响应闭环。

---

## 二、版本发布

无新版本发布。最新公开版本仍为 **v0.21.4 (2026.9.21)**，多项当日新开/处理中的 Bug 系基于此版本复现。

---

## 三、项目进展

### 已合并/关闭的重要 PR（10 条）

- **[#102376](https://github.com/NousResearch/hermes-agent/pull/102376)** 修复 [#102371](https://github.com/NousResearch/hermes-agent/issues/102371)：将 `shred`、`wipefs`、`blkdiscard` 对裸块设备的破坏纳入 hardline 管控。**属项目安全短板的关键修补**，值得重点关注。

- **[#120941](https://github.com/NousResearch/hermes-agent/pull/120941)** 修复 [#120937](https://github.com/NousResearch/hermes-agent/issues/120937)：`/api/sessions/{id}/chat` 端不再对纯字符串 `message` 做 65,536 字符截断，确保 `/v1/runs` 与 chat 接口行为一致。

- **[#120943](https://github.com/NousResearch/hermes-agent/pull/120943)** 修复 [#120815](https://github.com/NousResearch/hermes-agent/issues/120815)：凭据池写入路径引入 token generation 绑定，**防止过期凭据将旧 token 投射到新一代**，直接加固认证会话安全。

- **[#120939](https://github.com/NousResearch/hermes-agent/pull/120939)** 修复 [#120813](https://github.com/NousResearch/hermes-agent/issues/120813)：配置迁移不再将"未盖章的版本字段"误判为 v0，避免一次性格式差异触发多次历史 migration。

- **[#120936](https://github.com/NousResearch/hermes-agent/pull/120936)** `approvals.deny` 现已覆盖带版本钉子与 runner flag 的包命令写法（`npx -y sketchy-tool@1.2.3`、`uvx evil-pkg==1.0` 等），**策略边界进一步收紧**。

- **[#120940](https://github.com/NousResearch/hermes-agent/pull/120940)** Blinkenbar 文档视觉重整，仅文档变更，运行时不变。

- **Plus 4 项其它合并/关闭 PR**（含 [#92804](https://github.com/NousResearch/hermes-agent/pull/92804) WeCom errcode 846609 重连逻辑等）。

### 已关闭 Issues（5 条）

- **[#112274](https://github.com/NousResearch/hermes-agent/issues/112274)** Webhook 会话上下文割裂 — 已关闭（需关注是否遗留实现）。
- **[#117487](https://github.com/NousResearch/hermes-agent/issues/117487)** Hindsight auto-recall 自动触发：项目方向调整，置于 **HOLD**（Teknium 提出核心向"leaner core"演进）。
- **[#120920](https://github.com/NousResearch/hermes-agent/issues/120920)** 错仓库提交 — 已关闭。
- **[#117544](https://github.com/NousResearch/hermes-agent/issues/117544)** `/review` UnscopedSecretError — 已关闭。
- **[#89980](https://github.com/NousResearch/hermes-agent/issues/89980)** Desktop 语言选择器缺 fr/de/es（duplicate）— 已关闭。

### 推进的整体进度

今日项目在**安全边界**、**会话/认证一致性**、**桌面扩展性**三个轴线均出现实质性 commit。`#106742`（"One gateway owns every local session"）等 P1 架构级 PR 仍处于评审中，尚未合并；插件 SDK 抢救性落地（#120912/#120916/#120917）正在将 #116305 计划分批推进。

---

## 四、社区热点

| 排名 | 编号 | 标题 | 评论数 | 关注度 |
|---|---|---|---|---|
| 1 | [#82052](https://github.com/NousResearch/hermes-agent/issues/82052) | xAI 403 OAuth 凭据被分类为不可重试，长会话不刷新 Token | 6 | ⭐ |
| 2 | [#76175](https://github.com/NousResearch/hermes-agent/issues/76175) | native iMessage 投票静默丢弃 | 5 | ⭐ |
| 3 | [#117750](https://github.com/NousResearch/hermes-agent/issues/117750) | 剪枝已转发 tool payload 导致显示历史重复 | 4 | |
| 3 | [#102371](https://github.com/NousResearch/hermes-agent/issues/102371) | shred/wipefs/blkdiscard 零硬线覆盖（悄无声息销毁磁盘） | 4 | ⭐ |
| 3 | [#112274](https://github.com/NousResearch/hermes-agent/issues/112274) | Webhook 会话上下文割裂 | 4 | |
| 6 | [#58783](https://github.com/NousResearch/hermes-agent/issues/58783) | Desktop 问题面板强行关闭抹掉用户输入 | 3 | |
| 6 | [#119681](https://github.com/NousResearch/hermes-agent/issues/119681) | 裸名 provider 的 `reasoning_effort` 被静默丢弃 | 3 | |
| 6 | [#101493](https://github.com/NousResearch/hermes-agent/issues/101493) | HUD 模式方向硬编码 | 3 | |
| 6 | [#120828](https://github.com/NousResearch/hermes-agent/issues/120828) | 自定义 Ollama provider 发送无 user 消息 payload | 3 | |

**热点背后的诉求**：用户对**身份认证连续性**（OAuth 长期运行）、**消息/事件完整性**（iMessage 投票、fence 切分、webhook 回灌）以及**桌面交互鲁棒性**的关注显著上升，且多个议题已具备跨平台/跨场景的复发特征，提示这是结构性而非偶发问题。

---

## 五、Bug 与稳定性

按严重程度排列（→ 表示已有对应修复 PR）：

### P1（最高优先级）

- **[#120174](https://github.com/NousResearch/hermes-agent/issues/120174)** Codex Responses lifecycle-only stream 跳过 TTFB 监视器与 progress-gated 闲置看门狗，导致官方 Codex 需 600/900s 后才重试。涉及流式响应核心路径，**当前尚无公开 PR**。

### P2

- **[#117750](https://github.com/NousResearch/hermes-agent/issues/117750)** 工具参数/结果剪枝引入显示态重复与顺序错乱。
- **[#119681](https://github.com/NousResearch/hermes-agent/issues/119681)** `opencodex` 等裸名 provider 静默丢失 reasoning 配置。
- **[#120828](https://github.com/NousResearch/hermes-agent/issues/120828)** 自定义 Ollama provider 发送无 `user` 消息 payload → 部分本地模型拒绝。
- **[#120691](https://github.com/NousResearch/hermes-agent/issues/120691)** 单次启动产生两个本地运行时管理器，各自加载 26 GB 模型（macOS）。
- **[#120640](https://github.com/NousResearch/hermes-agent/issues/120640)** Telegram QR Quick-setup 自动生成 Token 却被自身校验拒绝。
- **[#109769](https://github.com/NousResearch/hermes-agent/issues/109769)** Hermes Cloud agent 会话 cookie 过期后桌面启动失败、提示"未登录"，仅"Use gateway"按钮可触发静默重新登录。
- **[#120942](https://github.com/NousResearch/hermes-agent/issues/120942)** Desktop composer 在远端 gateway 重连后 caret 跳回草稿开头。
- **[#120904](https://github.com/NousResearch/hermes-agent/issues/120904)** `split_text_fence_aware` 在语言标签 >8 字符时输出超过限制长度。
- **[#120923](https://github.com/NousResearch/hermes-agent/issues/120923)** Meta Ads MCP 拒绝 Hermes 发送的空 `params._meta`（HTTP 400）。

### P3（已有修复 PR 的高优先级安全议题）

- **[#102371](https://github.com/NousResearch/hermes-agent/issues/102371)** → **[#102376](https://github.com/NousResearch/hermes-agent/pull/102376)**：裸块设备销毁指令零 hardline 覆盖。**已 PR，待合并**，强烈建议主分支优先纳入。
- **[#120937](https://github.com/NousResearch/hermes-agent/issues/120937)** → **[#120941](https://github.com/NousResearch/hermes-agent/pull/120941)**：长 string 消息静默截断。
- **[#120815](https://github.com/NousResearch/hermes-agent/issues/120815)** → **[#120943](https://github.com/NousResearch/hermes-agent/pull/120943)**：凭据池代际不一致。
- **[#120813](https://github.com/NousResearch/hermes-agent/issues/120813)** → **[#120939](https://github.com/NousResearch/hermes-agent/pull/120939)**：未盖章 config 被当作 v0 触发历史 migration。
- **[#120937](https://github.com/NousResearch/hermes-agent/issues/120937)** 已知：long string truncation。✅ 已有 PR。

### 同时出现的稳定性隐患

- **[#120931](https://github.com/NousResearch/hermes-agent/issues/120931)** `hermes approvals test` 因 REMAINDER 解析丢失 shell 引号，dry-run 与 runtime 判定可能不一致。
- **[#120873](https://github.com/NousResearch/hermes-agent/issues/120873)** memory provider 布尔字段畸形导致整页 500。
- **[#120870](https://github.com/NousResearch/hermes-agent/issues/120870)** Feishu/WeCom 凭据仅 env 注入时被 CLI 误判为未配置。

---

## 六、功能请求与路线图信号

### 高确定性入版候选（已有对应 PR 在评审）

- **统一网关拥有所有本地会话** ([#106742](https://github.com/NousResearch/hermes-agent/pull/106742)) — 由 `teknium1` 本人提出，P1、needs-decision，覆盖 CLI/TUI/Desktop/本地 API/ACP/Bot/Cron。属结构性 PR，**极有可能成为下一主版本核心特性**。
- **Bundles & 统一包管理器** ([#102765](https://github.com/NousResearch/hermes-agent/pull/102765)) — 受影响面包括 agent/cli/gateway/tools/docker/desktop/Windows installer，**长期演进方向**。
- **`approvals.deny` 覆盖版本钉包命令** ([#120936](https://github.com/NousResearch/hermes-agent/pull/120936)) — 受 Factory Droid v0.221 启发，**安全侧立即可合并**。
- **Desktop Plugin SDK 三件套** ([#120912](https://github.com/NousResearch/hermes-agent/pull/120912)/[#120916](https://github.com/NousResearch/hermes-agent/pull/120916)/[#120917](https://github.com/NousResearch/hermes-agent/pull/120917)) — 抢救 #116305 拆分；将 Capabilities/Appearance/Session 三个宿主面通过 typed bridge 暴露给插件。**已 ci-reviewed，最有望近期合并**。

### 高需求用户功能

- **[#101493](https://github.com/NousResearch/hermes-agent/issues/101493)** HUD 模式作曲器位置（top/bottom/edge）作为设置项 — 用户对桌面端可定型的呼声持续。
- **[#120880](https://github.com/NousResearch/hermes-agent/issues/120880)** Settings → Integrations 中展示模型同步状态 — 出自 `clpi`，**与 [#120881](https://github.com/NousResearch/hermes-agent/issues/120881)、[#120882](https://github.com/NousResearch/hermes-agent/issues/120882) 形成完整提案**：
  - [#120881](https://github.com/NousResearch/hermes-agent/issues/120881)：SDK 更新检查器（npm registry polling）
  - [#120882](https://github.com/NousResearch/hermes-agent/issues/120882)：模型更新流程与 SDK 版本管理文档
  - 三者打包后会显著降低"我用的是不是最新模型/最新 SDK"的咨询量。

### 中等概率入版候选

- **[#120911](https://github.com/NousResearch/hermes-agent/pull/120911)** Slack 处理中 emoji 可配置。
- **[#120915](https://github.com/NousResearch/hermes-agent/pull/120915)** Plugin clone timeout 可配置。
- **[#120913](https://github.com/NousResearch/hermes-agent/pull/120913)** Telegram DM topic binding tiebreaker（复活 #84121）。

---

## 七、用户反馈摘要

**真实使用场景与痛点**：

- **长会话 + VPS + 多 Provider 混合的真实压力**：用户 `Sora-bluesky` 在 243 条消息 / 182K tokens 的会话中频繁遭遇 xAI OAuth 凭据过期；[#82052](https://github.com/NousResearch/hermes-agent/issues/82052) 反映出"长寿命 worker"是产品核心使用模式，而非边缘场景。
- **本地模型用户感受到"被夹在中间"**：[#120872](https://github.com/NousResearch/hermes-agent/issues/120872) Linux + NVIDIA 自动后端解析到不存在的 CUDA 资源；[#120691](https://github.com/NousResearch/hermes-agent/issues/120691) macOS 启动自动加载 2×26 GB 模型并互相抢端口；[#120828](https://github.com/NousResearch/hermes-agent/issues/120828) Ollama Qwen 渲染器拒绝 payload。三件事均表明**自托管体验的健壮性是当前最大可感痛点**。
- **"已读感" vs "已生效"撕裂**：用户在 [#76175](https://github.com/NousResearch/hermes-agent/issues/76175) iMessage poll 与 [#58783](https://github.com/NousResearch/hermes-agent/issues/58783) Desktop 问题面板中，**主动反馈"看起来一切正常，但响应被静默吞掉"**——这是信任损伤最深的一类缺陷。
- **桌面端 OAuth Cookie 过期阻断**：[#109769](https://github.com/NousResearch/hermes-agent/issues/109769) 反映 Hermes Cloud 用户在每次启动时遭遇"未登录"误报，体验"挫败感"明显。
- **CLI 流式体验摩擦**：[#120

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报
**日期：2026-09-24**
**项目：sipeed/picoclaw**

---

## 1. 今日速览

PicoClaw 项目今日活跃度处于**低位**，过去 24 小时内仅产生 1 条新 Issue 讨论与 2 条 PR 更新，无新版本发布。当前最紧迫的事项并非代码层面的迭代，而是**项目官网 https://picoclaw.io 的 TLS 证书已于 2026-09-10 过期**，导致所有浏览器与 TLS 客户端拒绝连接，站点处于完全不可用状态。该问题已被标记为 `[CRITICAL]` 并持续 12 天仍未解决，对项目形象与用户引导造成实质性损害，亟需维护团队优先处置。代码侧 PR 活动偏冷清，仅有 1 个外部贡献者的功能提案仍在待审状态。

---

## 2. 版本发布

**今日无新版本发布。**

---

## 3. 项目进展

今日有 1 个 PR 被关闭（未合并），项目代码层面整体处于停滞状态：

| PR | 标题 | 状态 | 影响 |
|---|---|---|---|
| [#3344](https://github.com/sipeed/picoclaw/pull/3344) | Add Build Remote Agent phone pairing (gbr/1) | ❌ CLOSED（未合并） | 外部贡献者 LinespottingPrivate 提交的手机配对适配器提案已被关闭，未合入主干。该 PR 自 2026-08-23 开出，期间累计 31 天未获得维护者实质性反馈，最终以关闭收场，反映出维护团队对外部贡献的响应效率有待提升。 |

> **结论**：今日项目未向前推进任何新功能或修复，主要维护工作集中在响应外部 issue 上。

---

## 4. 社区热点

🔥 **今日唯一热点且影响范围最广的话题：picoclaw.io 官网证书过期导致站点宕机**

- **[Issue #3377](https://github.com/sipeed/picoclaw/issues/3377)** —— `[CRITICAL] TLS certificate for picoclaw.io expired on 2026-09-10`
  - 作者：dimonb ｜ 👍 1 ｜ 💬 2 条评论
  - 创建：2026-09-12 ｜ 最新更新：2026-09-23
  - **诉求分析**：用户访问项目首页链接时遭遇浏览器安全拦截，直观感受是"项目死了"，这不仅影响新用户认知，也对现有用户的文档访问、下载链路造成阻断。虽然属于运维事故而非代码缺陷，但因仓库 README 直接关联该域名，社区用户在遇到问题时会优先在此报告。

---

## 5. Bug 与稳定性

按严重程度排列：

| 等级 | 编号 | 描述 | 是否已有修复 |
|---|---|---|---|
| 🔴 **P0 - 严重** | [#3377](https://github.com/sipeed/picoclaw/issues/3377) | picoclaw.io TLS 证书 2026-09-10 过期，所有浏览器拒绝连接，官网宕机已 **14 天** | ❌ 无 PR 修复，证书续签属于基础设施层操作 |

**风险评估**：
- 直接影响：项目门面不可用，新用户 onboarding 链路断裂
- 间接影响：搜索引擎对失效站点的权重降权、社交媒体引用失效
- 推荐处置：维护者使用 `certbot renew` 或切换至自动续签（如 Let's Encrypt + cron），并在仓库 README 中考虑备份镜像链接

---

## 6. 功能请求与路线图信号

### 待合并功能提案

| PR | 功能 | 状态 | 路线图可能性评估 |
|---|---|---|---|
| [#3370](https://github.com/sipeed/picoclaw/pull/3370) | 新增 Keenable 作为 web_search provider | 🟡 OPEN 已 17 天 | 中等偏低。代码上声称无需 API key 即可开箱即用，降低了用户使用门槛，与 PicoClaw 主打的"轻量、易用"定位契合。但因维护团队近期响应缓慢，且 PR 暂无任何 reviewer 反馈，能否进入下一版本存疑。 |

### 推测的下版本可能包含的内容
- 当前无明确版本路线图信号
- 若 [#3370](https://github.com/sipeed/picoclaw/pull/3370) 在 1-2 周内获得维护者审阅，新搜索 provider 可能被纳入下个 minor 版本

---

## 7. 用户反馈摘要

从 Issue #3377 的 2 条评论中可提炼：

1. **痛点**：用户对项目官网访问受阻表示不解和失望，部分用户反馈"找不到官方文档"或"怀疑项目是否仍在维护"。
2. **使用场景**：外部开发者通过 README 链接跳转 picoclaw.io 获取文档、下载链接、二进制包，证书失效直接切断了这条用户旅程。
3. **满意度**：评论中未出现满意/正面反馈，普遍情绪为担忧与催促。
4. **隐含信号**：该 Issue 的存在说明**仓库与官网之间的运维责任边界不清晰**，可能缺乏站点监控与证书到期告警机制。

---

## 8. 待处理积压

| 编号 | 类型 | 标题 | 累计未响应天数 | 风险等级 |
|---|---|---|---|---|
| [#3370](https://github.com/sipeed/picoclaw/pull/3370) | PR | feat(tools): add Keenable web search provider | 17 天 | 🟡 中 |
| [#3377](https://github.com/sipeed/picoclaw/issues/3377) | Issue | TLS certificate for picoclaw.io expired | 12 天 | 🔴 高（关键基础设施） |

### 给维护者的提醒
- 🔴 **[#3377](https://github.com/sipeed/picoclaw/issues/3377) 优先级最高**：建议 24 小时内完成证书续签，并补充 README 中的备用文档镜像链接以避免再次发生
- 🟡 **[#3370](https://github.com/sipeed/picoclaw/pull/3370)**：17 天无 reviewer 反馈，建议至少给出 LGTM/needs-change 的初评，否则外部贡献者会流失
- 📊 建议建立 **PR/Issue SLA 机制**：例如 14 天内必须给出首次响应，避免 [#3344](https://github.com/sipeed/picoclaw/pull/3344) 这种 31 天无反馈后直接关闭的情况

---

## 📊 项目健康度总评

| 维度 | 评分 | 说明 |
|---|---|---|
| 代码迭代活跃度 | ⭐⭐☆☆☆ | 仅 1 个外部 PR 处于待审状态，无维护者主导的活跃开发 |
| 社区响应效率 | ⭐⭐☆☆☆ | 关键 Issue 12 天未解决，外部 PR 普遍超时 |
| 基础设施可用性 | ⭐☆☆☆☆ | 官网证书过期 14 天仍未修复 |
| 外部贡献友好度 | ⭐⭐☆☆☆ | 31 天 PR 被静默关闭，挫伤贡献者积极性 |
| **综合** | **⭐⭐☆☆☆** | **建议维护团队本周聚焦于：1) 修复证书 2) 清理积压 PR 反馈 3) 建立基础 SLA** |

---

*日报基于 2026-09-24 当日 GitHub 公开数据生成，所有链接均可直接访问 GitHub 仓库验证。*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目日报 · 2026-09-24

---

## 1. 今日速览

NanoClaw 项目今日进入 **v2.4.0 版本发布日**，整体活跃度处于高位。过去 24 小时共产生 4 条 Issue 更新和 27 条 PR 更新，PR 合并/关闭率达到约 **63%（17/27）**，显示出维护团队对积压变更的有效清理。本次发版涵盖了网关系统重构、OpenCode 提供商重写、Mattermost 通道接入以及安装/分组级别的模型与速率控制等多项重要能力升级。同时，更新路径（`/update-nanoclaw`）上的若干关键 Bug 在今日集中修复，提示项目在自我维护能力上取得了显著进步。

---

## 2. 版本发布

### 🚀 v2.4.0 已发布

**Release 链接**：nanocoai/nanoclaw Release v2.4.0（[PR #3877](https://github.com/qwibitai/nanoclaw/pull/3877)）

**核心更新内容**：

- **凭据网关（Credential Gateway）系统上线**：通过 Skills 安装的网关机制，原 OneCLI 仍是默认网关，新增 **Iron Proxy** 作为第二网关选择（[#3816](https://github.com/qwibitai/nanoclaw/pull/3816)、[#3815](https://github.com/qwibitai/nanoclaw/pull/3815)、[#3817](https://github.com/qwibitai/nanoclaw/pull/3817)、[#3818](https://github.com/qwibitai/nanoclaw/pull/3818)、[#3825](https://github.com/qwibitai/nanoclaw/pull/3825)）。
- **Echo 强化镜像 + 托管 Slack App 社区门户搭建**：降低新手部署门槛。
- **安装级与分组级模型及速率控制**：操作员可在不同粒度上调整推理模型与速度（[#3646](https://github.com/qwibitai/nanoclaw/pull/3646)）。
- **新增 Mattermost 通道适配**：扩展聊天平台支持。
- **OpenCode 提供商重写**：包括认证路径切换到 Iron Proxy 后端（[#3841](https://github.com/qwibitai/nanoclaw/pull/3841)）。

**破坏性变更与迁移注意事项**：

- ⚠️ 网关配置模型重构：OneCLI 从硬编码转为 Skill 形式部署，已迁移的安装将自动识别并保留原配置；如走简单安装则继续以 OneCLI 为默认。
- ⚠️ `ABSOLUTE_CEILING_MS` 与 `CLAIM_STUCK_MS` 现可通过环境变量全局覆盖，对慢速本地模型后端更友好（[PR #3646](https://github.com/qwibitai/nanoclaw/pull/3646)）。
- ⚠️ Claude Code 升级至 2.1.280，伴随 Agent SDK 0.3.280；含恢复会话兼容性补丁（[PR #3868](https://github.com/qwibitai/nanoclaw/pull/3868)）。
- ⚠️ `/update-nanoclaw` 流程经过多项修复：转交切换（cutover）现在能正确终止空闲容器而非被动轮询（[#3873](https://github.com/qwibitai/nanoclaw/pull/3873)）。

---

## 3. 项目进展（重要合并/关闭 PR）

### 3.1 网关系统重构（合并的"系列性"变更）

这是本次发版的核心架构动作。围绕"凭据网关契约"集中化，团队合并了 5 条 PR：

| PR | 主题 | 意义 |
|---|---|---|
| [#3815](https://github.com/qwibitai/nanoclaw/pull/3815) | 网关契约与人审生命周期集中化 | 为多网关生态奠定主机侧接口基础 |
| [#3816](https://github.com/qwibitai/nanoclaw/pull/3816) | OneCLI 提取为可安装 Skill | 默认网关解耦，便于替换 |
| [#3817](https://github.com/qwibitai/nanoclaw/pull/3817) | 新增 Iron Proxy 网关 Skill | 引入第二种网关实现 |
| [#3818](https://github.com/qwibitai/nanoclaw/pull/3818) | 安装期独立选择网关 vs 提供商登录 | 解耦部署流程 |
| [#3825](https://github.com/qwibitai/nanoclaw/pull/3825) | OpenCode 通过 Iron Proxy 认证 | 完整跑通"OpenCode + Iron"链路 |

> **评估**：这是 NanoClaw 朝着"可插拔基础设施"演进的关键一步，扩展性与供应商无关性显著增强。

### 3.2 通道层修复与适配

- [#3875](https://github.com/qwibitai/nanoclaw/pull/3875) **+** [#3876](https://github.com/qwibitai/nanoclaw/pull/3876)：当 `assistant_name` 未设置时，prompt 名称跟随机器人显示名（Slack/Teams）。修复了多机器人共享后端命名错乱问题。

### 3.3 更新流程鲁棒性

- [#3873](https://github.com/qwibitai/nanoclaw/pull/3873)：cutover 阶段主动停止本安装的容器而非被动等待（修复 [#3828](https://github.com/qwibitai/nanoclaw/issues/3828)）。
- [#3750](https://github.com/qwibitai/nanoclaw/pull/3750)：扩展 `git archive` 文件清单以包含 `scripts/provider-contract-verifier.ts`（修复 [#3869](https://github.com/qwibitai/nanoclaw/issues/3869)）。
- [#3879](https://github.com/qwibitai/nanoclaw/pull/3879)：rebuild-native.mjs 现在能检测"破损"（loaded 但不可用）的 better-sqlite3 而不仅是缺失情况。

### 3.4 容器与运行时

- [#3868](https://github.com/qwibitai/nanoclaw/pull/3868)：Claude Code 升级到 2.1.280，确保恢复会话不再因系统提示记录逻辑变更而断裂。
- [#3872](https://github.com/qwibitai/nanoclaw/pull/3872)：Iron Proxy 下 Codex 0.155.1 在 WebSocket 升级被拒后仍可继续工作。
- [#3878](https://github.com/qwibitai/nanoclaw/pull/3878)：setup 中删除 ping agent 文件夹前先停止其容器（待合并）。

### 3.5 集成实验

- [#3494](https://github.com/qwibitai/nanoclaw/pull/3494)（已关闭）：添加 **Build Remote Agent (gbr/1)** 手机配对适配器（社区贡献）。
- [#12](https://github.com/qwibitai/nanoclaw/pull/12)（已关闭，2026-02 创建）：仅在 `runAgent` 成功时更新 `lastAgentTimestamp`，修复失败重试丢消息的长期 Bug。

> **整体评估**：项目在"基础设施可插拔化"与"自我更新流程可靠性"两条线上取得实质性推进，向前迈进了清晰的一大步。

---

## 4. 社区热点

由于数据中 Issues/PR 的评论数与反应数普遍偏低（多数为 0），**热点主要表现为"被集中修复的问题"**，反映出维护团队的主动响应而非社区辩论热度：

- **🔧 [PR #3816](https://github.com/qwibitai/nanoclaw/pull/3816) - OneCLI 提取为 Skill**（refactor）：本轮最关键的合并之一，影响范围几乎覆盖所有 area 标签。
- **🔧 [PR #3815](https://github.com/qwibitai/nanoclaw/pull/3815) - 网关契约集中化**（refactor）：覆盖 14 个 area 标签，是本期架构级最大变更。
- **🔐 [Issue #3874](https://github.com/qwibitai/nanoclaw/issues/3874) - OneCLI 网关身份检查缺陷**（已提交，0 评论）：建议用"安装身份"而非"群组是否存在"做归属判断，体现出社区对凭据隔离的敏感度。
- **🪲 [Issue #3732](https://github.com/qwibitai/nanoclaw/issues/3732) - 长存活容器内 transcript 永不轮转**：自 9 月 7 日提出至今尚无 PR 修复，是当前最值得关注的开放 Bug。

**诉求分析**：社区关注点高度集中在 **更新流程可靠性**、**凭据/网关的可插拔性**、**多通道身份一致性** 三大主题。

---

## 5. Bug 与稳定性

按严重程度排列：

| 严重度 | Issue / PR | 描述 | 是否有 Fix PR |
|---|---|---|---|
| 🟠 **中-高** | [#3732](https://github.com/qwibitai/nanoclaw/issues/3732)（仍 OPEN） | `maybeRotateContinuation()` 仅在容器启动时调用，存活超过 30 分钟空闲上限的定时任务永远不轮转，会话文件可能无限增长 | ❌ 尚无 |
| 🟠 **中** | [#3874](https://github.com/qwibitai/nanoclaw/issues/3874)（仍 OPEN） | OneCLI 网关用"群组是否存在"判定所有权，可能造成凭据归属错配（作者自评非可利用漏洞） | ❌ 尚无 |
| 🟢 **已修复（高）** | [#3828](https://github.com/qwibitai/nanoclaw/issues/3828) | cutover drain 在空闲容器存活时永远无法完成 | ✅ [#3873](https://github.com/qwibitai/nanoclaw/pull/3873) |
| 🟢 **已修复（高）** | [#3869](https://github.com/qwibitai/nanoclaw/issues/3869) | `prepare` 因缺失传递依赖而崩溃 `MODULE_NOT_FOUND` | ✅ [#3750](https://github.com/qwibitai/nanoclaw/pull/3750) |
| 🟢 **已修复（中）** | better-sqlite3 原生模块损坏检测 | 原脚本仅检测缺失情况 | ✅ [#3879](https://github.com/qwibitai/nanoclaw/pull/3879) |
| 🟢 **已修复（中）** | Codex 在 Iron Proxy 拒绝 WS 升级后无法刷新令牌 | ✅ [#3872](https://github.com/qwibitai/nanoclaw/pull/3872) |
| 🟢 **已修复（低-中）** | 失败消息被误标记为已处理导致重试跳过 | ✅ [#12](https://github.com/qwibitai/nanoclaw/pull/12) |

**观察**：与更新流程（`/update-nanoclaw`）相关的两个最棘手的"阻塞类"Bug（#3828、#3869）都在 24 小时内关闭，展示出维护团队对运维链路的强关注；但 #3732 与 #3874 仍是开放的稳定性与安全债。

---

## 6. 功能请求与路线图信号

| 主题 | 来源 | 进入下一版本的概率 |
|---|---|---|
| **TypeSafe Jev 判定模型作为容器工具** | [PR #3848](https://github.com/qwibitai/nanoclaw/pull/3848)（OPEN） | 中-高：核心团队标签 + Skill 形式，符合 v2.4.0 已建立的"Skill 化集成"模式 |
| **macOS Apple Container 替代 Docker（每会话独立 microVM）** | [PR #3503](https://github.com/qwibitai/nanoclaw/pull/3503)（OPEN，自 8 月起） | 中：创意明确（社区贡献者 chiptoe-svg），但涉及沙箱安全模型变更，需核心团队审慎评估 |
| **ABSOLUTE_CEILING_MS / CLAIM_STUCK_MS 全局环境变量覆盖** | [PR #3646](https://github.com/qwibitai/nanoclaw/pull/3646)（OPEN，自 8 月底） | 高：v2.4.0 changelog 已隐含此能力（"per-group model and speed controls"），可推断已被部分纳入 |
| **Build Remote Agent (gbr/1) 手机配对适配器** | [PR #3494](https://github.com/qwibitai/nanoclaw/pull/3494)（已关闭，未合并） | 低：被关闭，未进入主线，可作为后续讨论起点 |
| **setup 后停止 ping agent 容器** | [PR #3878](https://github.com/qwibitai/nanoclaw/pull/3878)（OPEN） | 高：核心团队 + 明确修复路径 |
| **OpenCode 内存钩子异步 spawn** | [PR #3841](https://github.com/qwibitai/nanoclaw/pull/3841)（OPEN） | 高：解决 Bun 1.4.0 已知缺陷（oven-sh/bun#34069），是 OpenCode 提供商重写的一部分 |

> **信号**：路线图正向"Skill 驱动的插件生态"+"多沙箱后端"两个方向延展，Apple Container 与 TypeSafe 是值得在下一窗口期重点关注的功能动向。

---

## 7. 用户反馈摘要

由于评论数据稀疏，可提取的信号有限，但仍有以下可观察的真实痛点：

- **🔁 更新流程脆弱性**：在 #3828 与 #3869 中，操作员在执行 `update-nanoclaw` 时遇到崩溃与转交挂起；这表明**自更新可靠性是部署侧的第一痛点**。两条 issue 都得到快速响应，体现出团队对该诉求的重视。
- **🧹 长期会话资源管理缺失**（#3732）：社区成员 TO-maschenborn 指出定时任务容器可能存活数日乃至数周，但 transcript 轮转机制只在容器启动时触发一次。这一痛点反映了**长生命周期调度任务与资源回收之间的设计缺口**。
- **🪪 命名一致性问题**（#3875/#3876）：当 Slack/Teams 上 bot 显示名与 group 名不一致时，prompt 中的"你叫 X"出现错乱。社区通过两条 PR 同步修复，说明存在**多机器人共享后端**的真实部署形态。
- **🛡️ 凭据归属语义不清**（#3874）：作者 glifocat 主动提交（非漏洞），体现核心团队成员对**身份隔离最佳实践**的敏锐度，也提示安装侧凭据设计需更精细。

---

## 8. 待处理积压（提醒维护者关注）

| 类型 | 编号 | 创建日期 | 状态 | 说明 |
|---|---|---|---|---|
| 🐞 Bug | [#3732](https://github.com/qwibitai/nanoclaw/issues/3732) | 2026-09-07 | OPEN 17 天 | 长存活容器 transcript 永不轮转；**未指派、无 PR** |
| ✨ Feature | [#3503](https://github.com/qwibitai/nanoclaw/pull/3503) | 2026-08-24 | OPEN 31 天 | Apple Container 支持 PR；待核心团队评审 |
| ✨ Feature | [#3848](https://github.com/qwibitai/nanoclaw/pull/3848) | 2026-09-17 | OPEN 7 天 | TypeSafe Jev 容器工具；核心团队标签 |
| 🔐 Security | [#3874](https://github.com/qwibitai/nanoclaw/issues/3874) | 2026-09-23 | OPEN 1 天 | OneCLI 所有权语义；建议尽快响应 |
| 🛠️ Fix | [#3878](https://github.com/qwibitai/nanoclaw/pull/3878) | 2026-09-23 | OPEN 1 天 | setup 容器清理；PR 已就绪 |
| 🛠️ Fix | [#3841](https://github.com/qwibitai/nanoclaw/pull/3841) | 2026-09-16 | OPEN 8 天 | OpenCode 异步 spawn 修复；阻塞 CI |

> **优先级建议**：
> 1. **#3732** 已开放 17 天且无 PR，建议在下一个补丁版本（v2.4.1）中优先处理；
> 2. **#3841** 影响 CI 健康度，应优先合并；
> 3. **#3878** 与 **#3874** 都在维护者视野内，可在一周内闭环。

---

## 📊 项目健康度快照

|

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目动态日报

**报告日期：2026-09-24**
**数据来源：[github.com/nullclaw/nullclaw](https://github.com/nullclaw/nullclaw)**

---

## 1. 今日速览

NullClaw 今日延续了高频迭代节奏：过去 24 小时内 **17 条 Issue** 持续活跃（0 关闭）、**21 条 PR** 集中更新（13 待合并、8 已合并/关闭），无新版本发布。社区热度集中于**关键 Bug 修复与基础设施加固**——尤其是 Telegram 通道崩溃（#976）、MCP stdio 挂死（#991）、调度器鉴权（#839/#915）等长期遗留阻塞问题，本轮均出现对应的修复 PR。整体活跃度高，Issue 关闭率为 0 值得关注（多为多日/多月存量 issue 还在更新而非新建），但 PR 侧已闭合 8 条，维护者吞吐能力健康。

---

## 2. 版本发布

⚠️ **今日无新版本发布。** 最近一次发布请关注 [Releases 页面](https://github.com/nullclaw/nullclaw/releases)。

---

## 3. 项目进展

### ✅ 已合并/关闭的 PR（8 条）显著推进多项能力

| PR | 主题 | 影响 |
|---|---|---|
| [#996](https://github.com/nullclaw/nullclaw/pull/996) | **fix(mcp): 给 stdio 响应加超时边界**，失败时 kill 子进程 | 修复 #991，解决 Proxmox 启动器锁导致的 MCP 挂死 |
| [#978](https://github.com/nullclaw/nullclaw/pull/978) | **Discord 输入指示线程切换到重型运行时栈** | 解决 aarch64 上 512KB 栈被 TLS 大块 memcpy 撑爆的根因 |
| [#980](https://github.com/nullclaw/nullclaw/pull/980) | **fix(scheduler): /pair 时把 token 持久化到磁盘** | 关闭 #839，调度器鉴权链路打通 |
| [#969](https://github.com/nullclaw/nullclaw/pull/969) | **feat(agent): 结构化 approval_request/approval_response 流程** | 引入两轮工具审批机制，shell 工具默认行为更安全 |
| [#979](https://github.com/nullclaw/nullclaw/pull/979) | **feat(memory): 可配置 auto_recall / recall_limit / max_context_bytes** | 关闭 #919，记忆召回行为终于可调 |
| [#981](https://github.com/nullclaw/nullclaw/pull/981) | **feat(provider): 新增 grok-cli provider（xAI Grok）** | 第三方 CLI 调用模式又添一员（与 codex-cli/gemini-cli/claude-cli 并列） |
| [#986](https://github.com/nullclaw/nullclaw/pull/986) | **GEN-548: SQLite 内存数据库路径可配置** | 多工作区部署只读场景可用性提升 |
| [#965](https://github.com/nullclaw/nullclaw/pull/965) | **Proposal: SSE parser 结构化流式 tool-call 支持**（与根修复互补） | 流式协议层能力增强 |

**整体评估：** 24 小时内一次合并了横跨「通道稳定性」（#978/#980）、「MCP/工具」（#996/#969）、「内存/配置」（#979/#986）、「Provider 生态」（#981）的多类变更，属于典型的「集中修复周」节奏；项目健康度**良好向好**。

---

## 4. 社区热点

### 🔥 评论最活跃 Issues

- **[#871](https://github.com/nullclaw/nullclaw/issues/871)** — `[bug] web_search 在低端设备上不实用`（8 条评论，0 👍，已开 152 天）
  - 核心诉求：缺失直接对接 DuckDuckGo 的搜索路径，强迫使用 Brave API 增加成本与依赖
- **[#972](https://github.com/nullclaw/nullclaw/issues/972)** — `Telegram 通道空闲后停止响应`（5 条评论，1 👍）
- **[#915](https://github.com/nullclaw/nullclaw/issues/915)** — `[bug] 调度器 unauthorized`（5 条评论，1 👍）
- **[#865](https://github.com/nullclaw/nullclaw/issues/865)** — `CLI 上下左右显示 Ctrl 字符`（4 条评论）
- **[#976](https://github.com/nullclaw/nullclaw/issues/976)** — `SIGSEGV on every inbound Telegram message (aarch64)`（4 条评论，已 70 天）

**诉求剖析：** 头部热点 5 条中有 4 条与「**通道/调度器在 idle 之后行为异常**」相关，是 Telegram/Matrix/调度器后台长驻化的共性故障模式；社区反复出现「机器人早上就不能用了」「重启 gateway 才恢复」这类高频反馈，是本轮维护者必须正视的体验堵点。

---

## 5. Bug 与稳定性

### 🚨 严重（Crash / 进程崩溃）

| 严重度 | Issue | 现象 | 是否有 fix PR |
|---|---|---|---|
| 🔴 P0 | [#976](https://github.com/nullclaw/nullclaw/issues/976) | aarch64 上每条 Telegram 入站消息触发 SIGSEGV，gateway crash-loop，用户消息全部丢失 | ✅ **#985 OPEN**：`SESSION_TURN_STACK_SIZE` 从 2 MiB 提到 16 MiB，直接修复根因 |
| 🔴 P0 | [#870](https://github.com/nullclaw/nullclaw/issues/870) | `gateway accept4 busy loop` 在 WSL2 上 100% CPU 占用 | ❌ 暂无 PR |
| 🟠 P1 | [#972](https://github.com/nullclaw/nullclaw/issues/972) | Telegram 通道空闲后失活 | ✅ **#984 OPEN**：让 polling 失败时 supervisor 能识别死线程并老化 |
| 🟠 P1 | [#991](https://github.com/nullclaw/nullclaw/issues/991) | MCP stdio 在 Proxmox 启动器锁后无限挂起 | ✅ **#996 CLOSED**：已合并修复 |
| 🟠 P1 | [#839](https://github.com/nullclaw/nullclaw/issues/839) | 调度器无权限访问（paired token 未落盘） | ✅ **#980 CLOSED** + **#959 OPEN**（更完善的加密持久化版本仍待合并） |
| 🟡 P2 | [#865](https://github.com/nullclaw/nullclaw/issues/865) | CLI 上下左右键被识别为 Ctrl 字符 | ✅ **#970 OPEN**：自建 allocation-free 行编辑器 |
| 🟡 P2 | [#915](https://github.com/nullclaw/nullclaw/issues/915) | Scheduler 报 unauthorized | ✅ 同 #839 修复链路 |
| 🟢 P3 | [#932](https://github.com/nullclaw/nullclaw/issues/932) | 文档写错 Zig 版本（0.15.2 缺 `std.Io.Dir`） | ❌ 暂无 PR（文档修复） |

**结论：** Top 级稳定性问题（SIGSEGV、挂死、token 丢失）在本轮均有对应修复主线在路上或已合并，**仅 WSL2 busy loop（#870）**仍处于「有 Issue 无 PR」状态，建议下一版本优先补齐。

---

## 6. 功能请求与路线图信号

| Issue | 功能请求 | 路线图概率 |
|---|---|---|
| [#871](https://github.com/nullclaw/nullclaw/issues/871) | 给 `web_search` 加 `ddgs` 直接后端（[#623](https://github.com/nullclaw/nullclaw/issues/623)） | 🟢 高 — 与"低端设备"核心定位强相关，作者两次提交独立 issue |
| [#624](https://github.com/nullclaw/nullclaw/issues/624) | 视觉管线：自动 base64 图片投递用于多模态 LLM | 🟡 中 — 已有用户自写 skill 兜底，需协议层改造 |
| [#495](https://github.com/nullclaw/nullclaw/issues/495) | 通过 Cloudflare/Nginx 公网隧道暴露本地 Web UI | 🟡 中 — 安全审查需要 |
| [#631](https://github.com/nullclaw/nullclaw/issues/631) | `GET /status` 监控端点 | 🟢 高 — 1 👍 已在轻量 PR 范围 |
| [#190](https://github.com/nullclaw/nullclaw/issues/190) | Subagent 派生 + 不同 provider per agent | 🟠 中 — 涉及 agent 模型重构 |
| [#817](https://github.com/nullclaw/nullclaw/issues/817) | WeChat 二维码登录 | 🟢 高 — **#963 OPEN** 已开工 |
| [#767](https://github.com/nullclaw/nullclaw/issues/767) | 原生 Anthropic API key（非 Pro Plan） | 🟢 高 — **#962 OPEN** 已写完文档 |

**信号：** "原生 OAuth / API key 直连" 与 "微信生态接入" 是当前被文档/实现 PR 主动对接的两大方向，社区呼声得到快速响应。"多模态"虽只有 2 评论但作者自维护 skill 试用，长期可能进入 v2026.Q4。

---

## 7. 用户反馈摘要

- **🐢 性能与成本**："web_search 在低端设备不实用"（#871）——这与项目"低资源友好"的核心卖点直接冲突，是必须回应的品牌级反馈。
- **📱 Telegram 体验最痛**：#972 用户明确报告"早上起来机器人没响应"，代表大量自托管用户每天都要手动重启。这是高频复现的可用性 bug。
- **🔐 鉴权混乱**：#839 / #915 用户用截图佐证 scheduler 报 unauthorized，但配置侧无可排查线索 —— 是「pair token 落盘」缺失导致的隐蔽故障，社区感知为"玄学"。
- **🛠 CLI 体验**：#865 用户吐槽"按方向键看到 ^[A 这种字符，原生快捷键失效"，对日常开发体验是持续摩擦。
- **🤖 模型接入门槛**：#767 用户对"为什么原生 Anthropic key 不能直接用"表达困惑，文档缺位放大了挫败感（#962 PR 已着手补）。
- **❤️ 微信生态期待**：#817 用户询问 WeChat 二维码扫码登录，代表中文社区的强需求。

**总体用户情绪：** 不满意集中在「后台长驻稳定性」与「文档/配置可发现性」两个维度，对底层 agent 能力评价正面。

---

## 8. 待处理积压（提醒维护者关注）

### ⚠️ 长期 OPEN 但活跃的重要 Issue

| Issue | 标题 | 存在天数 | 维护者建议 |
|---|---|---|---|
| [#871](https://github.com/nullclaw/nullclaw/issues/871) | Critical: web_search 在低端设备不实用 | **152 天** | 与项目定位冲突，**建议标记为 P0 milestone** |
| [#190](https://github.com/nullclaw/nullclaw/issues/190) | Subagent spawn | **207 天** | 老牌功能请求，需要 roadmap 回应 |
| [#767](https://github.com/nullclaw/nullclaw/issues/767) | 是否支持原生 Anthropic keys | **173 天** | 文档 PR #962 待合并 |
| [#817](https://github.com/nullclaw/nullclaw/issues/817) | WeChat 二维码登录 | **163 天** | iLink QR PR #963 待合并 |
| [#870](https://github.com/nullclaw/nullclaw/issues/870) | WSL2 gateway 100% CPU | **152 天** | **无 PR**，需新建 |
| [#495](https://github.com/nullclaw/nullclaw/issues/495) | Cloudflare/Nginx 隧道 | **195 天** | 需安全方案讨论 |

### ⏳ 待合并 PR（Open 状态，13 条）重点跟进

- **[#985](https://github.com/nullclaw/nullclaw/pull/985)** — `fix(runtime): 16 MiB 栈给 agent turn`，直接根治 #976 SIGSEGV，强烈建议优先 merge
- **[#984](https://github.com/nullclaw/nullclaw/pull/984)** — `fix(channels): dead polling thread 老化`，恢复 Telegram/Matrix 通道稳定
- **[#959](https://github.com/nullclaw/nullclaw/pull/959)** — `fix(cron): encrypted paired token 持久化`，比已合并 #980 更完善
- **[#971](https://github.com/nullclaw/nullclaw/pull/971)** — `feat(streaming): SSE 流式原生 tool calls`，与 #965 配套，是流式协议关键一步
- **[#987](https://github.com/nullclaw/nullclaw/pull/987)** — `feat(agent): 长时本地工具运行循环卫生`（cache 友好前缀 + 输出压缩 + 重复调用拦截）
- **[#970](https://github.com/nullclaw/nullclaw/pull/970)** — `fix(cli): REPL 方向键处理`
- **[#966](https://github.com/nullclaw/nullclaw/pull/966)** — `fix(http): Android 上 curl fallback 安全加固`
- **[#963](https://github.com/nullclaw/nullclaw/pull/963)** / **[#962](https://github.com/nullclaw/nullclaw/pull/962)** — 微信 iLink QR + 原生 Anthropic 文档
- **[#777](https://github.com/nullclaw/nullclaw/pull/777)** — `docs: 结构化清理`

---

## 📊 项目健康度评分（24h）

| 维度 | 评分 | 备注 |
|---|---|---|
| 活跃度 | ⭐⭐⭐⭐⭐ | 38 条更新，21 条 PR |
| Bug 响应速度 | ⭐⭐⭐⭐ | Top 级别崩溃均有 fix 在路上 |
| 社区沟通 | ⭐⭐⭐ | Issue 关闭率 0%，老 issue 寿命偏长 |
| 路线图透明度 | ⭐⭐⭐ | 多个功能 PR 在开但缺少 milestone 公告 |
| 文档跟进 | ⭐⭐⭐⭐ | 关键文档缺口正在由 PR 填补 |

**结论：** NullClaw 当前处于「集中修复期」，核心稳定性问题正被批量清理，建议维护者：(1) 优先合并 #985/#984/#959 三个关键 PR 并打 patch 版本；(2) 对 200+ 天的存量 issue（#871/#190/#495）给出 roadmap 回应；(3) 文档 PR（#962/#963/#777）合并后顺势发布文档版本。

---

*本报告由开源项目动态分析自动生成，数据基于 2026-09-23 GitHub API 快照。*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目日报

**报告日期**：2026-09-24
**项目**：[nearai/ironclaw](https://github.com/nearai/ironclaw)
**报告周期**：过去 24 小时

---

## 1. 今日速览

IronClaw 项目在过去 24 小时呈现**低活跃度运营状态**：无新版本发布，无新 Issue 提交或关闭，仓库仅有 2 条 PR 更新且均处于待合并状态。整体活动以**预发布准备**和**文档澄清**为主，未见功能合并或重大 Bug 修复提交。项目当前处于 `1.4.1-rc.2` 发布候选的推进节奏中，依赖更新（wasmtime / rustls 安全补丁）正在进行中，文档层面也在对 skill 路径发现机制做规范化整理。综合评估：**仓库健康度稳定但推进缓慢**，属于典型的"RC 阶段收尾 + 文档维护"窗口期。

---

## 2. 版本发布

**今日无新版本发布。**

当前进展中：PR #8110 正在推进 `1.4.1-rc.2` 发布候选分支，目标范围与 RC1 一致（即 Google 扩展 OAuth 就绪性修复），并同步刷新 lockfile 至 `wasmtime 47.0.4` 与 `rustls 0.23.45` 两个补丁版本，以匹配最新的 advisory 数据库。

> 📎 [PR #8110](https://github.com/nearai/ironclaw/pull/8110)

预计在 RC2 验证通过后会进入 `1.4.1` 正式版发布流程。

---

## 3. 项目进展

今日**无 PR 合并或关闭**，以下两项 PR 处于待合并状态：

### 🚧 PR #8110 — `chore(release): cut 1.4.1-rc.2`
- **作者**：serrrfirat（core 贡献者）
- **风险等级**：低（low）
- **影响范围**：docs、dependencies
- **状态**：OPEN
- **要点**：
  - 将已存在的日期化发布分支从 `1.4.1-rc.1` 提升为 `1.4.1-rc.2`
  - RC2 的修复范围与 RC1 保持一致，专注于 Google 扩展 OAuth 就绪性
  - 升级 `wasmtime 47.0.4` 与 `rustls 0.23.45` 以匹配当前 advisory 数据库
- **意义**：这是常规的安全补丁收尾，体现维护节奏对供应链安全的及时响应。

### 🚧 PR #8109 — `docs(skills): clarify scoped virtual skill roots`
- **作者**：mmemcormier
- **风险等级**：低（low）
- **影响范围**：docs
- **状态**：OPEN
- **要点**：
  - 替换过时的宿主机目录发现指南，引入 scoped virtual skill roots（`/skills`、`/system/skills`、可选 `/tenant-shared/skills`）
  - 区分运行时发现与独立遗留磁盘导入行为
  - 澄清 trust assignment 语义，**不改变运行时行为**
- **意义**：纯文档改进，规范 skill 路径模型，有助于多租户和扩展生态的清晰约定。

> 📎 [PR #8109](https://github.com/nearai/ironclaw/pull/8109)

**整体推进度**：项目今日整体**未发生代码层面推进**，属于发布候选阶段典型的"小步快跑、风险最小化"操作。

---

## 4. 社区热点

今日 Issue 与 PR 评论区均无新增评论（评论数均为 `undefined` / 0），**社区互动处于静默期**。

从 PR 主题热度看：

- **#8110** 涉及发布工程与供应链安全依赖（wasmtime、rustls），属于下游用户普遍关心的运行时安全基础。
- **#8109** 聚焦 skill 路径约定，对依赖扩展机制或多租户部署的开发者具有直接参考价值。

> 📎 [PR #8110](https://github.com/nearai/ironclaw/pull/8110) | [PR #8109](https://github.com/nearai/ironclaw/pull/8109)

---

## 5. Bug 与稳定性

今日**无新 Bug 报告、无崩溃或回归问题提交**。

值得注意的是，PR #8110 隐含的依赖升级（wasmtime 47.0.4、rustls 0.23.45）通常与上游安全公告（advisory）相关，建议下游使用者关注本次 RC2 验证通过后的正式版发布，并检查自身部署中是否启用了相关 Google 扩展 OAuth 路径以确认修复覆盖。

> 📎 [PR #8110](https://github.com/nearai/ironclaw/pull/8110)

---

## 6. 功能请求与路线图信号

今日**无新功能请求 Issue**。

从 PR #8109 的方向看，项目正在**显式化"虚拟 skill 根"作为一等公民的路径模型**，并区分运行时发现与传统磁盘导入。这一信号表明路线图在向以下方向倾斜：

- **多租户隔离能力**：通过 `/tenant-shared/skills` 等可选根目录增强组织级共享
- **扩展生态规范化**：清晰化 trust assignment 语义，为安全引入第三方 skill 提供前置条件
- **向后兼容**：明确"legacy"边界，避免破坏现有导入行为

虽然本次仅为文档级变更，但语义层面的稳定有助于后续代码层加固。

---

## 7. 用户反馈摘要

今日 Issues 区域**无新评论**，无法提取真实用户痛点。

可观察到的**间接信号**（来自 PR 内容）：

- 文档层面存在**过时/误导性引导**：PR #8109 明确指出"Replace obsolete host-directory discovery guidance"，说明老用户可能已被旧文档路径带偏，存在认知偏差风险。
- **OAuth 集成稳定性诉求**：PR #8110 提到 Google 扩展 OAuth 就绪性持续优化，反映 OAuth/扩展链路是当前生态的关键集成点。

> 📎 [PR #8109](https://github.com/nearai/ironclaw/pull/8109) | [PR #8110](https://github.com/nearai/ironclaw/pull/8110)

---

## 8. 待处理积压

由于今日新增数据有限，以下为**当日未结案的关键待办**：

| 编号 | 标题 | 类型 | 状态 | 风险 | 关注理由 |
|------|------|------|------|------|---------|
| [#8110](https://github.com/nearai/ironclaw/pull/8110) | chore(release): cut 1.4.1-rc.2 | PR | OPEN | low | 阻塞 1.4.1 正式版发布；涉及 wasmtime/rustls 安全升级 |
| [#8109](https://github.com/nearai/ironclaw/pull/8109) | docs(skills): clarify scoped virtual skill roots | PR | OPEN | low | 影响后续 skill 模型代码实现的方向锚点**

**提醒维护者关注**：
- PR #8110 应作为**最高优先级**审阅，确保 RC2 范围与上游 advisory 严格匹配，并尽快推进至合并与正式发布。
- PR #8109 建议由文档 reviewer 快速过审合并，避免误导性文档持续存在。
- 当前 0 Issue 的局面建议核查：是否存在被 stale bot 误关或用户已转向 Discord/其他渠道的隐性问题。

---

*报告基于 GitHub 公开数据生成，数据时间窗口为 2026-09-23 至 2026-09-24。*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目日报
**日期：2026-09-24**
**仓库：netease-youdao/LobsterAI**

---

## 1. 今日速览

LobsterAI 今日整体处于**发版收尾与历史 PR 集中清理**的状态。过去 24 小时 Issues 区域无任何新动态（0 新开/0 活跃/0 已关闭），PR 端则一次性关闭/合并了 50 个 PR，其中绝大多数为旧版本的 release-merge 收尾 PR（最早可追溯至 2026-07），同时伴随 1 个正式版本 `2026.9.23` 的发布。社区互动数据（评论数、👍 反应数）显示为零，说明这些 PR 均为静默合并，缺乏外部讨论热度。整体来看，项目节奏稳定、迭代频繁（近三个月已发布十余个版本），但社区参与度和外部反馈渠道相对沉寂。

---

## 2. 版本发布

### 🦞 LobsterAI 2026.9.23 已发布

**主要更新内容（来自 Release Notes）：**

| 类别 | 变更 |
|------|------|
| ✨ 新功能 | `decision-model`：新增实验性 **Jev 决策模型工具**（PR #2753，@fisherdaddy） |
| ✨ 新功能 | `cowork`：实时流式输出每一步 turn 的进度与 diff 统计（PR #2749，@fisherdaddy） |

**关联 PR 链接：**
- PR #2753 — feat(decision-model): add experimental Jev decision model tool
- PR #2749 — feat(cowork): stream live per-step turn progress and diff stats

**⚠️ 风险提示：**
- `Jev 决策模型` 仍处于 **experimental（实验性）** 阶段，API 与行为可能在后续版本中调整，建议生产环境谨慎启用并做好配置隔离。
- 实时流式进度更新涉及前端渲染层改动，可能影响 Cowork 模式下大量日志输出的客户端性能，建议关注后续 issue。

**迁移注意事项：** 由于无 Issues/PR 反馈破坏性变更信息，暂无强制迁移动作；若启用 Jev 决策模型，请留意官方后续公告。

🔗 [Release 详情](https://github.com/netease-youdao/LobsterAI/pull/2753)

---

## 3. 项目进展

今日合并/关闭的 50 个 PR 中，可见的多为 **release 分支合入 main 的收尾操作**，体现项目稳定的发版流程。重要进展包括：

### 🚀 功能推进

- **决策模型工具扩展**：通过 PR #2753 引入实验性 Jev 决策模型，扩展了 LobsterAI 在多步决策场景下的工具链。
- **Cowork 可观测性提升**：通过 PR #2749 实现逐步实时流式输出和 diff 统计，使长任务执行过程对用户更加透明。

### 📦 版本回灌（release-merge 收尾）

下列 release 分支 PR 在今日统一关闭，意味着相关版本变更已正式合入主干：

| 版本 | PR | 作者 | 涉及模块 |
|------|------|------|------|
| 2026.9.16 | #2699 | liuzhq1986 | renderer / docs / main / openclaw / cowork |
| 2026.9.4  | #2618 | liuzhq1986 | renderer / build / docs / main / openclaw / cowork / windows / artifacts |
| 2026.8.31 | #2600 | fisherdaddy | renderer / docs / main / cowork / im / windows / artifacts |
| 2026.8.26 | #2549 | liuzhq1986 | renderer / build / docs / windows |
| 2026.8.24 | #2572 | liuzhq1986 | renderer / build / docs / main / openclaw / cowork / windows / artifacts |
| 2026.8.21 | #2519 | fisherdaddy | renderer / docs / main |
| 2026.8.20 | #2534 | liuzhq1986 | renderer / docs / main / cowork / im / artifacts |
| 2026.8.17 | #2510 | fisherdaddy | renderer / build / docs / main / cowork / macos |
| 2026.8.12 | #2480 | liuzhq1986 | renderer / main |
| 2026.8.10 | #2477 | fisherdaddy | renderer / build / docs / main / openclaw / cowork / im / windows / artifacts |
| 2026.8.5  | #2451 | liuzhq1986 | renderer / docs / main / openclaw / cowork / windows |
| 2026.8.3  | #2430 | fisherdaddy | renderer / main / cowork / windows |
| 2026.7.31 | #2416 | fisherdaddy | docs / main / openclaw |
| 2026.7.30 | #2498 | fisherdaddy | renderer / docs / main / openclaw / cowork / im / windows / artifacts |
| 2026.7.24 | #2407 | liuzhq1986 | renderer / build / docs / main / openclaw / skills / cowork / windows / artifacts |
| 2026.7.20 | #2379 | liuzhq1986 | renderer / build / docs / main / openclaw / cowork / windows / artifacts |
| 2026.7.8  | #2317 | liuzhq1986 | renderer / build / docs / main / openclaw / cowork / im / artifacts |

### 🔧 修复回退

- **PR #2403** (`revert(openclaw): remove run-safety-contract gate for no-progress token burn`) — 客户端 Run Safety 设计（来自 PR #2400）在评审中发现 release-blocking 问题（receipt identity keying、false-success followups、compaction runId 处理、byte-accounting 不一致等），已正式回退并恢复原行为，同步更新 DeepSeek cache probe 规范。
  🔗 [PR #2403](https://github.com/netease-youdao/LobsterAI/pull/2403)

### 🎨 UI 调整

- PR #2542 / #2540 — 重做侧边栏 Library 图标样式。

**整体评估**：项目主干在今日一次性吸收了近三个月约 15 个迭代版本的差异，提交密度较大但节奏受控；今日主要变化集中在收口而非新增功能，是典型的"发版集中治理日"。

---

## 4. 社区热点

⚠️ **数据观察**：今日 20 条展示的 PR 全部 `评论数: undefined`、`👍: 0`，**没有任何外部用户参与评论或点赞**。Issues 区域同样无任何新增或互动。

**结论**：LobsterAI 今日社区讨论热度为零，仓库处于"内部维护静默期"。可能的解释：
- 项目以 B 端/内部产品为主，外部开发者参与门槛高；
- 客户端问题反馈渠道可能在应用内（IM、客服）而非 GitHub Issues；
- 中文为主的用户群体可能尚未养成在 GitHub 上反馈的习惯。

**建议**：若希望提升社区活跃度，可考虑建立 issue 模板、添加 `good first issue` 标签、并在用户文档中加入 GitHub 反馈引导。

🔗 [仓库主页](https://github.com/netease-youdao/LobsterAI)

---

## 5. Bug 与稳定性

今日**无新增 Bug 报告**（Issues 为空），不过从近期合入的 PR 描述中可窥探以下历史稳定性问题与处置：

| 问题 | PR | 处置 | 严重程度 |
|------|------|------|----------|
| Run Safety 设计的 receipt identity keying、false-success followups、compaction runId 处理、byte-accounting 不一致 | #2403 | 已回退该 feature | 🔴 高（release-blocking） |
| Windows 安装/更新可靠性问题 | #2416, #2430, #2451 等多个 release | 持续改进 | 🟡 中 |
| 模型加载、定时任务历史记录、OpenClaw 配置与插件安装可靠性 | #2510 | 已修复 | 🟢 低 |
| 启动/运行时可靠性、设置页交互 | #2477 | 已修复 | 🟢 低 |

**结论**：当前无未处理的活跃崩溃或回归报告，但 Run Safety 模块历史上确实出现过需要紧急处置的缺陷，提示 OpenClaw 复杂功能的安全性设计仍是项目风险点。

🔗 [PR #2403](https://github.com/netease-youdao/LobsterAI/pull/2403)

---

## 6. 功能请求与路线图信号

由于今日 Issues/PR 评论区均为空，**无法直接从用户反馈中提炼功能请求**。但从近期合并的 PR 中可识别出项目主动推进的方向：

| 方向 | 信号 | 来源 |
|------|------|------|
| **多模型/决策工具扩展** | 新增实验性 Jev 决策模型工具 | PR #2753 |
| **长任务可观测性** | Cowork 流式逐步输出 + diff 统计 | PR #2749 |
| **DeepSeek Harness 集成** | DSH 运行时升级到 0.1.1-rc.1 | PR #2519（早期） |
| **企业/团队功能** | Team Edition 账号与配额流程 | PR #2498（已合入） |
| **隐私分析** | DSH 启用和工作台使用情况的隐私感知分析 | PR #2519 |
| **多平台可靠性** | Windows 安装/更新、macOS 兼容性持续改进 | 多版本 |

**下一版本（2026.9.30 或 2026.10.x）可能方向**：
1. Jev 决策模型从 experimental 转为正式特性（视用户反馈）；
2. Cowork 实时流式的稳定性进一步优化；
3. OpenClaw Run Safety 重新设计（修复 #2403 中暴露的设计缺陷后重新引入）；
4. 持续打磨 Windows 端的安装与更新链路。

🔗 [PR #2753](https://github.com/netease-youdao/LobsterAI/pull/2753)

---

## 7. 用户反馈摘要

今日 GitHub 渠道**无新增用户反馈**。

可供参考的近期用户/产品侧信号（来自已合并 PR 描述中的措辞推测）：
- **首次使用体验被持续关注**：多次版本提到"first-run login"、"guided first-run experience"，说明新用户上手转化是产品核心 KPI。
- **Windows 端用户量大**：多版本均出现 Windows installer/integration 改进，Windows 应是主要用户平台。
- **企业付费意愿**：Team Edition、配额管理、DSH 启用分析等表明项目向 B 端商业模式倾斜。
- **AI Agent 用户对透明度的需求**：Cowork 流式输出和 diff 统计的引入，反映用户希望"看见 AI 在做什么"。

🔗 [仓库主页](https://github.com/netease-youdao/LobsterAI)

---

## 8. 待处理积压

| 项目 | 状态 | 备注 |
|------|------|------|
| Issues 积压 | 0 条（今日无活跃） | 仓库 issue 区当前无在跟进问题 |
| PR 待合并 | 0 条（今日已全部关闭/合并） | 无阻塞中的 PR |
| Run Safety 功能重新设计 | 🔴 待跟进 | PR #2403 已回退原实现，缺陷修复/重新设计方案尚未提交 |
| DeepSeek Harness 0.1.1-rc.1 → stable | 🟡 跟踪中 | 实验性集成，依赖上游稳定 |
| Jev 决策模型文档与配置说明 | 🟡 跟踪中 | 新增实验性功能，缺少用户文档 |

**维护者建议**：尽管今日"无积压"，但建议主动：
1. 重新评估并提交修复版的 Run Safety 设计；
2. 为 Jev 决策模型补充 README 与配置示例；
3. 设立 issue 模板引导外部用户反馈。

---

## 📊 项目健康度仪表盘

| 指标 | 数值 | 评估 |
|------|------|------|
| Issues 活跃度 | 0 | ⚪ 无信号 |
| PR 合并速率 | 50 / 24h | 🟢 高（多为收口） |
| 发版频率 | ~3-4 次/月 | 🟢 稳定 |
| 外部社区参与 | 0 评论 / 0 👍 | 🔴 静默 |
| Bug 报告 | 0 | ⚪ 无信号 |
| 实验性功能推进 | Jev、DSH | 🟡 关注风险 |
| 平台覆盖 | Windows / macOS | 🟢 多平台 |

**总评**：项目工程节奏健康、内部迭代密集、版本治理规范；但**对外社区基本无交互**，长期可能影响项目透明度与生态扩展。

---

*报告生成时间：2026-09-24 · 数据源：GitHub REST API · 仅基于公开数据*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报

**日期：2026-09-24**
**项目地址：** [github.com/moltis-org/moltis](https://github.com/moltis-org/moltis)

---

## 1. 今日速览

今日 Moltis 项目仓库活跃度处于**低位**。过去 24 小时内 Issues 区域完全静默（0 新开 / 0 活跃 / 0 关闭），Pull Requests 方面有 1 条仍处于待合并状态，无新增关闭或合并记录，亦无新版本发布。值得关注的是，当前唯一的活跃 PR [#1272](https://github.com/moltis-org/moltis/pull/1272) 自 2026-09-16 创建以来已持续 8 天仍未合并，且评论与点赞数据为 0，提示项目维护节奏近期有所放缓，建议社区关注。

---

## 2. 版本发布

无新版本发布。近期如需了解版本变更，请查阅仓库的 [Releases 页面](https://github.com/moltis-org/moltis/releases)。

---

## 3. 项目进展

**今日无 PR 合并或关闭**，项目代码主干今日无实质性推进。

唯一在跟踪的 PR 为 [#1272](https://github.com/moltis-org/moltis/pull/1272) `feat(sandbox): per-agent mounts, run_as and a forced sandbox`，由贡献者 **Bergmann89** 提交，最新更新于 2026-09-23。该 PR 仍处于 `OPEN` 状态，尚未收到任何评论或 Review 反馈，处于等待维护者审议的阶段。

> 项目今日整体向前推进距离：**无进展**。

---

## 4. 社区热点

由于今日无新增 Issues，且唯一活跃的 PR 互动为零，**社区热点相对单薄**。

**当前唯一讨论焦点：**

- 📌 **[PR #1272](https://github.com/moltis-org/moltis/pull/1272)** —— *per-agent mounts, run_as and a forced sandbox*
  - 状态：OPEN（待合并）
  - 互动：0 评论 / 0 👍
  - 创建时间：2026-09-16 | 距今 8 天未合并

**热点诉求分析：** 该 PR 所提功能回应了多智能体（agent）场景下沙箱配置的差异化需求，即不同 agent 需要不同的文件系统挂载权限、运行用户身份以及强制沙箱策略。这一方向契合个人 AI 助手领域日益重要的**权限隔离与多 agent 协作**趋势，具有较高的合并价值。

---

## 5. Bug 与稳定性

**今日无新 Bug 报告**，Issues 区域 24 小时内零活动。

无崩溃、回归、严重缺陷记录。建议维护者借此时机复查未解决的稳定性 Issues，确保没有长期遗留的严重问题被忽视。

---

## 6. 功能请求与路线图信号

虽然今日 Issues 提交为零，但活跃 PR 透露出明确的路线图方向：

**🔧 已提出的新能力（PR #1272）：**

| 能力 | 说明 | 配置项 |
|------|------|--------|
| Per-agent 主机目录挂载 | 为每个 agent 的沙箱容器配置额外的 bind mount | `sandbox.mounts` |
| 自定义运行用户 | 指定容器运行的 `uid:gid` | `sandbox.run_as` |
| 强制沙箱策略 | 禁止该 agent 在沙箱外运行 | `sandbox.force` |

**纳入下一版本可能性评估：**
- 该 PR 已开放 8 天仍未进入 Review 流程，**合并节奏存在不确定性**；
- 功能本身针对性强、边界清晰，符合项目既有的 sandbox 配置扩展模式（`[sandbox]` 配置块），**技术落地难度不高**；
- 若维护者本周末前启动 Review，有望进入下一版本。

**信号解读：** 沙箱能力精细化（per-agent 维度的安全策略）可能成为 Moltis 后续版本的演进重点，社区可关注是否会出现配套的权限模型与审计机制相关讨论。

---

## 7. 用户反馈摘要

**今日无新增 Issues 评论可供提炼**。在缺乏一手用户反馈的情况下，无法归纳当前的痛点或满意度。但结合 PR #1272 的功能方向可侧面推测：

- **用户潜在痛点：** 在多 agent 场景下，统一沙箱策略无法满足不同 agent 的差异化安全/数据访问需求；
- **使用场景延伸：** 开发者/运维人员希望为高权限 agent 与只读 agent 配置不同的文件系统可见性与进程身份。

PR 合并并落地后，社区对该方向的真实反馈值得持续跟踪。

---

## 8. 待处理积压

⚠️ **建议维护者关注以下积压项：**

| 优先级 | 编号 | 标题 | 类型 | 待办时长 | 状态 |
|--------|------|------|------|----------|------|
| 🟡 中 | [#1272](https://github.com/moltis-org/moltis/pull/1272) | per-agent mounts, run_as and a forced sandbox | PR | 8 天 | OPEN，无评论 |

**风险提示：** 单一活跃 PR 已停留超过一周未获任何维护者反馈，存在以下风险：
1. 贡献者积极性受挫，影响后续开源贡献；
2. 沙箱安全增强功能迟迟无法落地，可能错失多 agent 场景的市场窗口；
3. 缺乏 Review 流程透明度，社区难以预判合并预期。

建议维护者在本周内分配时间对 [#1272](https://github.com/moltis-org/moltis/pull/1272) 做出初步 Review 回复，无论是 Approve、Request Changes，还是简单的进度说明，都有助于维持社区健康度。

---

**报告生成时间：** 2026-09-24
**数据来源：** GitHub REST API（Issues / Pull Requests / Releases）
**数据完整性提示：** 由于今日活跃度极低，部分章节（版本发布、Bug、用户反馈）为说明性占位，建议在数据更丰富的日期复核报告完整性。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# QwenPaw 项目日报

**报告日期**：2026-09-24
**项目仓库**：[agentscope-ai/QwenPaw](https://github.com/agentscope-ai/QwenPaw)
**注**：用户输入中项目名为 CoPaw，但根据 Issues/PR 数据，所有链接指向 `agentscope-ai/QwenPaw`，本文档以 **QwenPaw** 为准。

---

## 1. 今日速览

QwenPaw 今日维持**中高度活跃状态**：过去 24 小时共触发 43 条 Issue 更新（26 条已关闭、17 条活跃或新开）和 29 条 PR 更新（12 条合并/关闭、17 条待审）。**无新版本发布**，工程节奏集中在 Bug 修复、安全加固与 Console/Hub 产品迭代上。从关闭率（Issue 60%、PR 41%）看，社区维护响应良好，但仍有不少**上下文管理、安全沙箱、渠道稳定性**相关的 P0/P1 级 Bug 处于开放状态。整体而言项目处于**稳定维护 + 关键能力补齐**阶段，尚未进入新特性爆发期。

---

## 2. 版本发布

无新版本发布。最近可观察版本为 **v2.2.0 / 2.2.1-beta.2 / 2.2.2b2 / 2.2.2-beta.3**（见多份 Issue 中用户报告的版本号），2.2 主线仍在迭代中。

---

## 3. 项目进展（今日合并/关闭的重要 PR）

| PR | 标题 | 影响 |
|---|---|---|
| [#7409](https://github.com/agentscope-ai/QwenPaw/pull/7409) | fix(agents): drop empty assistant text blocks | 修复"空文本块导致 Ark Responses API 400"的历史污染问题，对应 #7402 |
| [#2978](https://github.com/agentscope-ai/QwenPaw/pull/2978) | Fix shell file-guard path detection for fallback commands | 强化 Windows/反斜杠路径下的 File Guard，闭合 #2967 旁路风险 |
| [#4361](https://github.com/agentscope-ai/QwenPaw/pull/4361) | fix(security): guard shell file access bypasses | 同方向安全加固，进一步降低 `execute_shell_command` 旁路 |
| [#5659](https://github.com/agentscope-ai/QwenPaw/pull/5659) | fix(chat): allow sending attachments without text | 回应 #5558,支持"仅附件发送" |
| [#6854](https://github.com/agentscope-ai/QwenPaw/pull/6854) | add localized approval purpose descriptions | 工具审批请求的本地化说明，提升可读性 |
| [#7927](https://github.com/agentscope-ai/QwenPaw/pull/7927) / [#7961](https://github.com/agentscope-ai/QwenPaw/pull/7961) | 用 `markdownify` 替换 GPL `html2text` | **许可证风险修复**，解除 web_fetch 的 GPL-3.0 传染问题 |
| [#7952](https://github.com/agentscope-ai/QwenPaw/pull/7952) | fix(hub): distinguish invitation redemption failure reasons | 区分 5 种邀请码兑换失败原因，便于运营/客服分流 |
| [#7955](https://github.com/agentscope-ai/QwenPaw/pull/7955) | docs(website): add download provenance and usage policy | 官网下载页明确 Apache-2.0 许可与使用条款 |
| [#7941](https://github.com/agentscope-ai/QwenPaw/pull/7941) | make the batch-3 lock and portability tests cross-platform | 单测覆盖率 **70.51% → 73.79%（+3.28pp）**，新增 47 文件 / 2720 用例 |

**整体评价**：今日主线推进集中在 **安全加固、Hub 体验、许可证合规**三块；许可证问题（GPL→MIT）的快速替换尤其值得肯定。`src/qwenpaw` 覆盖率单日提升 3.28pp，测试底座进一步加固。

---

## 4. 社区热点

### 🔥 头条：[#7318](https://github.com/agentscope-ai/QwenPaw/issues/7318) — QwenPaw Hub 多租户后续方向讨论
- 评论 **33 条**、👍 4，作者 [rayrayraykk](https://github.com/rayrayraykk)
- 自 2026-08-26 开启即长期高热，是当前**社区最强的产品路线信号**
- 核心诉求：多用户访问、管理员托管的 Skills、团队协作模式
- 该帖既是产品 Roadmap 的开放式投票，也是 Hub 模块对外的口径

### 高互动 Issue
- [#7571](https://github.com/agentscope-ai/QwenPaw/issues/7571)（8 评论）：插件运行时"总是记不住规则"——A/B/C 路径规范反复被违反，反映**多路径工作区下的记忆持久化**仍是用户痛点。
- [#7853](https://github.com/agentscope-ai/QwenPaw/issues/7853)（8 评论）：`view_image` 的 base64 永远不被剪裁，会话上下文必然爆炸。
- [#7628](https://github.com/agentscope-ai/QwenPaw/issues/7628)（7 评论）：Context compaction 仍可能超出 provider 请求预算，P0 隐患。
- [#7377](https://github.com/agentscope-ai/QwenPaw/issues/7377)（6 评论）：v2.1.0 Console 的 Agent Loop 模式不持久。

### 长期复活的旧 Issue
- [#2710](https://github.com/agentscope-ai/QwenPaw/issues/2710)、[#3037](https://github.com/agentscope-ai/QwenPaw/issues/3037)、[#2841](https://github.com/agentscope-ai/QwenPaw/issues/2841)、[#2414](https://github.com/agentscope-ai/QwenPaw/issues/2414)、[#2335](https://github.com/agentscope-ai/QwenPaw/issues/2335) — 大量**飞书/钉钉/企微渠道**的稳定性问题在 9 月被批量关闭/更新，社区渠道连通性成为高频痛点。

---

## 5. Bug 与稳定性

按严重程度排列：

### 🚨 P0（潜在数据丢失 / 静默失败 / 体积锁）

| Issue | 简述 | 状态 |
|---|---|---|
| [#7943](https://github.com/agentscope-ai/QwenPaw/issues/7943) | Windows 沙箱对盘符根工作区写入 ACL，可能锁死整个卷 | 开放，**无 PR** |
| [#7853](https://github.com/agentscope-ai/QwenPaw/issues/7853) | `ToolResultPruner` 跳过 `type="data"`，base64 无界累积 | 开放，**无 PR** |
| [#7628](https://github.com/agentscope-ai/QwenPaw/issues/7628) | Context compaction 后仍可能超 provider 预算 | 开放，**无 PR** |
| [#7534](https://github.com/agentscope-ai/QwenPaw/issues/7534) | 飞书 session queue consumer 卡死，整会话静默 | 开放，**无 PR** |
| [#7576](https://github.com/agentscope-ai/QwenPaw/issues/7576) | `RetryChatModel` 硬编码 32768 上下文，所有模型触发 CONTEXT_UNFIT（v2.1.0~v2.2.0 全版本受影响） | **已关闭** |

### ⚠️ P1（功能阻塞 / 跨平台差异 / 数据污染）

| Issue | 简述 | 状态 |
|---|---|---|
| [#7857](https://github.com/agentscope-ai/QwenPaw/issues/7857) | ACP shutdown 同步回退可能泄漏 event loop | 开放 |
| [#7836](https://github.com/agentscope-ai/QwenPaw/issues/7836) | Scroll 驱逐策略在 tool-heavy 区间误删 user turn | 开放；[#7872](https://github.com/agentscope-ai/QwenPaw/pull/7872) 进行中 |
| [#7715](https://github.com/agentscope-ai/QwenPaw/issues/7715) | arxiv 不可达时 Daily Paper 静默失败 | 开放 |
| [#7959](https://github.com/agentscope-ai/QwenPaw/issues/7959) | Moonshot kimi-k3 拒绝无 top-level type 的 anyOf MCP schema | 开放 |
| [#7947](https://github.com/agentscope-ai/QwenPaw/issues/7947) | `send_file_to_user` 在 Console 中不渲染文件卡片 | 已关闭（应有修复合并） |
| [#7767](https://github.com/agentscope-ai/QwenPaw/issues/7767) | 守卫插件构建中：附件陈旧 blob、一次性 cron 误丢、console tail-drop、`on_acting` 永不触发 | 开放 |
| [#7856](https://github.com/agentscope-ai/QwenPaw/issues/7856) | `qwenpaw-pet 0.1.1` 丢掉 `actor` 参数破坏 2.2.2b2 工具审批 | 已关闭 |
| [#7402](https://github.com/agentscope-ai/QwenPaw/issues/7402) | Ark Responses API 空 output_text 块污染后续请求 | 已关闭 → [#7409](https://github.com/agentscope-ai/QwenPaw/pull/7409) 已合并 |
| [#4244](https://github.com/agentscope-ai/QwenPaw/issues/4244) | `shell_evasion_checks.newlines=True` 静默拦截多行命令 | 已关闭 |
| [#4227](https://github.com/agentscope-ai/QwenPaw/issues/4227) | stream_http MCP 401/非 404 错误码会挂起到超时 | 已关闭 |

### 🟡 P2（行为偏差 / UX 缺陷）

- [#2967](https://github.com/agentscope-ai/QwenPaw/issues/2967) `execute_shell_command` 旁路 File Guard → [#4361](https://github.com/agentscope-ai/QwenPaw/pull/4361) / [#2978](https://github.com/agentscope-ai/QwenPaw/pull/2978) 已合并
- [#5558](https://github.com/agentscope-ai/QwenPaw/issues/5558) 企微上传附件后发送按钮仍置灰 → [#5659](https://github.com/agentscope-ai/QwenPaw/pull/5659) 已合并
- [#1452](https://github.com/agentscope-ai/QwenPaw/issues/1452) Docker 部署调用局域网 Ollama 联网能力咨询（已关闭，需文档侧补足）
- [#1010](https://github.com/agentscope-ai/QwenPaw/issues/1010) 多 LLM 路由长期诉求，已关闭（产品决策）

**总体观察**：Bug 主题高度集中于 ① **上下文/会话窗口管理**（#7853 / #7628 / #7576 / #7402）、② **渠道长稳态**（飞书/钉钉/企微）、③ **安全沙箱与文件守卫**（#7943 / #7857 / #4244 / #2967）。维护者对 #7402 / #7947 / #2967 等典型问题已通过今日合并的 PR 完成闭环，但 P0 列表中仍有 5 条以上**无对应 PR** 的开放 Bug。

---

## 6. 功能请求与路线图信号

| 需求 | Issue / PR | 纳入下版本的概率 |
|---|---|---|
| QwenPaw Hub 多租户后续方向 | [#7318](https://github.com/agentscope-ai/QwenPaw/issues/7318) | ★★★ 已是 Roadmap 核心议题 |
| A2A 协议支持 | [#7484](https://github.com/agentscope-ai/QwenPaw/issues/7484) | ★★ 已有 MCP/A2A/ACP 统一 Driver 架构铺垫 |
| Agent 自治的上下文管理 | [#7733](https://github.com/agentscope-ai/QwenPaw/issues/7733) | ★★★ 与 Scroll / Compaction 重构方向一致 |
| OpenViking 记忆后端插件 | [#7613](https://github.com/agentscope-ai/QwenPaw/pull/7613) | ★★★ PR 已在审 |
| 自定义 Console 浏览器 Tab 标题 | [#7914](https://github.com/agentscope-ai/QwenPaw/pull/7914) | ★★ 小改动，等待合并 |
| 多 Tab 鉴权聊天终端（xterm） | [#7861](https://github.com/agentscope-ai/QwenPaw/pull/7861) | ★★ |
| PawApp SDK & App 控制面重设计 | [#7874](https://github.com/agentscope-ai/QwenPaw/pull/7874) | ★★ 大型重构 |
| Console 设置页/侧边栏优化 | [#7956](https://github.com/agentscope-ai/QwenPaw/pull/7956) | ★★★ 已在 review，含多语言 |
| 多 LLM 路由（不同任务用不同模型） | [#1010](https://github.com/agentscope-ai/QwenPaw/issues/1010) | ★ 长期呼声，暂无 PR |
| 日报/记忆插件支持自定义代理 | [#7715](https://github.com/agentscope-ai/QwenPaw/issues/7715) | ★★ 伴随修复自然落地 |

**关键洞察**：Hub 多租户 + 上下文自治 + 记忆插件生态 是当前三大产品方向。

---

## 7. 用户反馈摘要

**真实痛点**：
- 🤯 **"AI 反复遗忘规则"**（[#7571](https://github.com/agentscope-ai/QwenPaw/issues/7571)）：插件开发者在多工作区路径下，模型仍频繁把代码写到 C 路径、自动部署覆盖 A 路径代码。说明 QwenPaw 的"工作区规范"在长会话中持久化能力不足。
- 🔌 **多通道接入稳定性的反复抱怨**（飞书 / 钉钉 / 企微 多条 Issue）：长跑 6–24 小时后连接静默断连、消息丢失、会话冲突，是企业用户首要障碍。
- 🧠 **多租户协作诉求强烈**（[#7318](https://github.com/agentscope-ai/QwenPaw/issues/7318)）：团队希望统一管理员托管

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目日报

**报告日期**：2026-09-24
**项目**：ZeroClaw (`zeroclaw-labs/zeroclaw`)
**数据范围**：过去 24 小时

---

## 1. 今日速览

ZeroClaw 项目今日保持高度活跃，过去 24 小时共有 **13 条 Issue 更新**和 **50 条 PR 更新**，其中 PR 待合并 47 条、已合并/关闭 3 条，新版本发布 0 个。当前讨论聚焦于三大主题：**安全/沙箱加固**（高风险变更集中）、**WhatsApp Web 通道缺陷修复**（多个相关 Bug 同时浮现）、以及**RFC/治理流程优化**。项目健康度整体良好，但存在显著的"长尾 PR 积压"问题，多个 XL 级别、高风险的 PR 等待 Maintainer 决策。

---

## 2. 版本发布

⚠️ 过去 24 小时无新版本发布。社区此前在 [#10814 Tracker](https://github.com/zeroclaw-labs/zeroclaw/issues/10814) 关注的"v0.8.5 之后发布效率改进"工作仍在持续推进中。

---

## 3. 项目进展

### 已关闭 PR（共 3 条）

| PR | 说明 | 状态 |
|---|---|---|
| [#9817](https://github.com/zeroclaw-labs/zeroclaw/pull/9817) | `docs(rfc): route by what the author knows and gate RFC intake on an explicit trigger` — 改写 RFC 路由规则和 intake 流程文档 | **CLOSED**（parking-lot） |

> 备注：另有 2 条 PR 在过去 24 小时关闭/合并，但未进入评论数 TOP20 列表，无法详尽展示。

### 重要进展中的 PR

- **[#11078](https://github.com/zeroclaw-labs/zeroclaw/pull/11078) `feat(intake): require alternatives on the RFC form`**（XS，risk:low）— RFC 表单的"Alternatives considered"字段改为必填，杜绝无替代方案的伪决策。
- **[#11079](https://github.com/zeroclaw-labs/zeroclaw/pull/11079) `docs(contributing): route ordinary work by what the author knows`**（XS，risk:low）— 贡献指南新增"知道做什么 + 怎么做 → 直接开 PR"的路由规则。
- **[#11072](https://github.com/zeroclaw-labs/zeroclaw/pull/11072) `fix(nix): set meta.mainProgram on flake packages`**（XS）— 修复 Nix flake 包 `meta.mainProgram` 缺失导致的 `evaluation warning`。
- **[#11041](https://github.com/zeroclaw-labs/zeroclaw/pull/11041) `feat(nix): build web UI as nix package`**（M）— 将 Web Dashboard 作为 flake 包暴露，方便 NixOS 部署。
- **[#11065](https://github.com/zeroclaw-labs/zeroclaw/pull/11065) `fix(deps): update matrix-sdk 0.19, rusqlite 0.40, otel 0.33`**（S）— 关键依赖升级，解决 `imbl` ABI 兼容问题。
- **[#10855](https://github.com/zeroclaw-labs/zeroclaw/pull/10855) `docs(governance): implement RFC vote simplification`**（XS）— 将 RFC 投票流程从 FND-003 Rev. 18 推进至 Rev. 19，去除强制预投票等待。

整体来看，今天在**治理/流程治理**和**Nix 生态集成**方向有明确进展；核心功能 PR 仍处于评审中。

---

## 4. 社区热点

### 🔥 讨论最活跃的 Issue

**[#8692 Maintainer decision queue for RFCs and design issues](https://github.com/zeroclaw-labs/zeroclaw/issues/8692)** — 15 条评论
- 作者：Audacity88，创建于 2026-07-04
- 这是当前最活跃的治理类 Tracker，承担 RFC、设计 Issue、Release Policy 等 maintainer 级决策的入站分流。该 Issue 持续获得关注反映社区对"决策透明度与速度"的诉求。

**[#10970 RFC: Host-scoped admission control and per-agent resource bounds](https://github.com/zeroclaw-labs/zeroclaw/issues/10970)** — 5 条评论
- 高风险 RFC，主题"agent-loop / operator-ux / domain:security / domain:architecture"
- 诉求：在多 Agent 共享一台主机场景下，按 host 维度施加并发 turn/工具/内存上限，宁可降级延迟也不丢失稳定性。

### 🔥 重点安全相关 PR（持续被评审）

- **[#10259](https://github.com/zeroclaw-labs/zeroclaw/pull/10259) `feat(security): enforce authenticated principals on RPC`**（XL，risk:high，stacked）— RPC 强制认证主体；这是 #8289 阶段 3 工作。
- **[#7821](https://github.com/zeroclaw-labs/zeroclaw/pull/7821) `feat(security): canonical sandbox_policy schema`**（XL，risk:high）— 已积压超 3 个月（创建于 2026-06-17）。
- **[#10746](https://github.com/zeroclaw-labs/zeroclaw/pull/10746) `feat(plugins): load-verify a plugin at install`**（L，risk:high）— WASM 插件安装时验证 host WIT ABI。

---

## 5. Bug 与稳定性

按严重程度排列：

### 🚨 P0 / 数据丢失或安全风险（S0）

**[#10968 Unattended agent turns run with no ApprovalManager](https://github.com/zeroclaw-labs/zeroclaw/issues/10968)** — 3 评论
- **Severity**：S0 - 数据丢失/安全风险
- **问题**：`agent::run` 仅当 `interactive=true` 时构建 `ApprovalManager`，意味着 cron、heartbeat、headless SOP、spawn_subagent 等无人值守 turn 中 risk-profile 的工具审批**形同虚设**。
- **状态**：needs-maintainer-review，目前无对应 fix PR。

### ⚠️ P1 / 通道与网关故障

**[#10985 Dashboard-started turns get freshly built channel instances](https://github.com/zeroclaw-labs/zeroclaw/issues/10985)** — 3 评论
- Web Dashboard 启动的 turn 无法通过 channel-backed 工具（`poll`/`reaction`/`channel_room`/`ask_user`/`escalate`）到达 session-bound 的 WhatsApp 通道。
- **状态**：in-progress，但今日无 PR 进展被列出。

**[#11055 Daemon never registers the channel-map factory](https://github.com/zeroclaw-labs/zeroclaw/issues/11055)** — 2 评论
- Daemon 未注册 channel-map 工厂，导致 webhook/cron/SOP turn 中**所有 channel-addressed 工具均不可用**。
- **状态**：与 #10985 共同构成 channel 工具可达性的两层 bug，目前都没有对应 fix PR。

### 🟡 P2 / 行为降级

| Issue | 描述 | 是否有 fix PR |
|---|---|---|
| [#10922 WhatsApp Web ignores suppress_voice](https://github.com/zeroclaw-labs/zeroclaw/issues/10922) | 自动 TTS 队列忽略 `suppress_voice` 标志 | ❌ 无 |
| [#11059 WhatsApp Web ignores force_voice](https://github.com/zeroclaw-labs/zeroclaw/issues/11059) | `SendMessage.force_voice` 被 WhatsApp Web 发送方忽略，`send_via` 无法路由到语音 | ❌ 无 |
| [#11055](https://github.com/zeroclaw-labs/zeroclaw/issues/11055) | Daemon 未注册 channel-map factory | ❌ 无 |

**观察**：WhatsApp Web 通道在 voice/poll/document 等多个能力上同时出现 spec 不一致问题，提示该模块近期可能缺少回归测试覆盖。

---

## 6. 功能请求与路线图信号

### 已提出的新需求

| Issue | 类型 | 可能的归属 |
|---|---|---|
| [#11075 `agy_cli` coding-CLI tool](https://github.com/zeroclaw-labs/zeroclaw/issues/11075) | 与 `codex_cli` / `claude_code` / `gemini_cli` / `opencode_cli` 对等的 Antigravity CLI 工具 | 短期可落地（同类已有模板） |
| [#11074 RFC: search_routes — hint-based provider routing](https://github.com/zeroclaw-labs/zeroclaw/issues/11074) | 模仿 `[[model_routes]]` 的 `[[search_routes]]` 提示路由 | 中期（需设计评审） |
| [#11052 Render thematic breaks and setext headings for WhatsApp](https://github.com/zeroclaw-labs/zeroclaw/issues/11052) | 扩展 PR #10475 的 Markdown→WhatsApp 转换 | 短期（#10980 类似 PR 已存在） |
| [#11050 Pace native polls with other outbound channel messages](https://github.com/zeroclaw-labs/zeroclaw/issues/11050) | `PacedChannel::send_poll` 接入每收件人节奏队列 | 短期（与 #10984 配套） |

### RFC 级信号（高影响、长周期）

- **[#10970 Host-scoped admission control](https://github.com/zeroclaw-labs/zeroclaw/issues/10970)** — 多 Agent 主机场景的资源边界，命中"新能力边界"触发条件。
- **[#11027 RFC: Agent-to-agent session messaging with receiver discretion](https://github.com/zeroclaw-labs/zeroclaw/issues/11027)** — Agent 间消息传递，接收方可裁量。同样命中"新能力边界"。

> 路线图推断：ZeroClaw 正从"单 agent 工具链"向"多 agent 协同 + 主机级治理"演进，安全/治理主题预计将在 v0.9.x 系列成为主线。

---

## 7. 用户反馈摘要

> 注：仅从 Issue/PR 公开摘要提炼，评论原文未公开。

**WhatsApp Web 通道用户**（#10922、#10959、#11050、#11052、#11052）：
- 对 TTS 路由、`suppress_voice`、`force_voice`、poll pacing、Markdown 转换的**期望与实现存在系统性 gap**。用户期望"声明即生效"，实际是逐字段缺失处理。
- 多媒体能力（PDF 预览 [#10980](https://github.com/zeroclaw-labs/zeroclaw/pull/10980)、poll pacing [#11050]）是高频需求。

**多 Agent 部署用户**（#10970、#11027、#10968）：
- 关心"主机/进程级的稳定性边界"，对单 agent 级别配置已不满足。
- 关注无人值守 turn 的安全审批（#10968）—— 这是潜在的安全盲点。

**Nix 生态用户**（#11072、#11041）：
- 期望 ZeroClaw 在 NixOS 上"开箱即用"，目前 flake 包仍有 ergonomics 缺陷（meta.mainProgram、web UI 缺失）。

**贡献者/治理**（#9817、#11078、#11079、#10855、#8692）：
- 持续推动"流程精简"，认为当前 RFC intake 与投票流程存在冗余。

---

## 8. 待处理积压

### ⚠️ 长期未合并的高影响 PR（创建 > 60 天）

| PR | 创建日期 | 风险/规模 | 备注 |
|---|---|---|---|
| [#7821 sandbox_policy canonical schema](https://github.com/zeroclaw-labs/zeroclaw/pull/7821) | 2026-06-17（**99 天**） | XL / high | 沙箱策略权威 schema，引用 #6996；一直处于 `needs-author-action` 状态 |
| [#9368 count and report retained history in whole turns](https://github.com/zeroclaw-labs/zeroclaw/pull/9368) | 2026-07-25（**61 天**） | XL / medium | 历史保留口径修正，影响所有 agent loop |
| [#9819 multimodal pixel-level image validation](https://github.com/zeroclaw-labs/zeroclaw/pull/9819) | 2026-08-07（**48 天**） | XL / high | 多模态图像校验 |
| [#9829 web-fetch spill large responses to workspace file](https://github.com/zeroclaw-labs/zeroclaw/pull/9829) | 2026-08-07（**48 天**） | XL / high | 大响应落盘替代截断 |
| [#9839 block direct spellings of irreversible destructive commands](https://github.com/zeroclaw-labs/zeroclaw/pull/9839) | 2026-08-07（**48 天**） | L / high | 安全高危命令拦截 |
| [#9977 confine filesystem mutations to workspace](https://github.com/zeroclaw-labs/zeroclaw/pull/9977) | 2026-08-13（**42 天**） | XL / high | 文件系统变更约束在 workspace 内 |
| [#10381 resolve host launchers before workspace cwd](https://github.com/zeroclaw-labs/zeroclaw/pull/10381) | 2026-08-26（**29 天**） | XL / high | 启动器路径解析 |

### 📌 提醒 Maintainer 关注的 Issue

- **[#8692 Maintainer decision queue](https://github.com/zeroclaw-labs/zeroclaw/issues/8692)** — 15 条评论、长期处于决策队列，是治理瓶颈所在。
- **[#10814 Release efficiency tracker](https://github.com/zeroclaw-labs/zeroclaw/issues/10814)** — P1/High，0 评论但属于发布效率"实施批次 tracker"，缺少推动记录。
- **[#10968 ApprovalManager for unattended turns](https://github.com/zeroclaw-labs/zeroclaw/issues/

</details>

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*