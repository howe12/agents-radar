# OpenClaw 生态日报 2026-07-24

> Issues: 316 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-07-24 02:05 UTC

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

**日期：2026-07-24**
**数据来源：github.com/openclaw/openclaw**

---

## 1. 今日速览

OpenClaw 今日保持高强度开发节奏，过去 24 小时共发生 **316 条 Issue 更新**（其中新开/活跃 219 条，关闭 97 条）和 **500 条 PR 更新**（待合并 312 条，已合并/关闭 188 条），活跃度处于显著高位，但**无任何新版本发布**。社区聚焦于 2026.7.1 / 2026.7.2-beta 系列引发的多项回归问题（gateway 启动失败、cron 工具不兼容、Tool result 通道丢失等），同时 steipete 主导的大型重构 PR（embedded attempt 终态、Matrix 富文本渲染、Android Suggestion Queue 等）持续推进。项目当前处于"密集修复 + 架构演进"并行的关键期，但多个 P0/P1 Bug 仍标记为 `needs-maintainer-review`，版本发布节奏存在压力。

---

## 2. 版本发布

**无新版本发布。** 距上次正式版 2026.7.1（2026-07-15）已过 9 天，2026.7.2-beta.3 仍处于测试阶段；考虑到当前有多个 P0/P0-P1 回归 Bug（gateway 启动崩溃、cron SQLite 迁移、llama.cpp 工具调用不兼容），下一正式版可能需要等待这些修复合入。

---

## 3. 项目进展

今日有数个重要 PR 被关闭/推进：

| PR | 标题 | 影响 |
|---|---|---|
| [#113173](https://github.com/openclaw/openclaw/pull/113173) ⏹️ CLOSED | feat(sessions): suggestion queue + typing indicator (Android/Web) | 推动多用户协作会话的轻量化提案通道 |
| [#107890](https://github.com/openclaw/openclaw/pull/107890) ⏹️ CLOSED | fix: make outbound hooks consistent for streamed replies | 修复 Matrix/Mattermost/Telegram/Feishu 流式回复下出站钩子不一致问题 |
| [#113187](https://github.com/openclaw/openclaw/pull/113187) ⏹️ CLOSED | fix(ios): prevent release screenshots from stalling in Settings | 解决 iOS 截图 60-140s 卡顿 |
| [#113178](https://github.com/openclaw/openclaw/pull/113178) ⏹️ CLOSED | fix(whatsapp): restore reactions in current conversations | 恢复 WhatsApp DM/群聊中表情回应 |
| [#103532](https://github.com/openclaw/openclaw/pull/103532) ⏹️ CLOSED | Novita LLM provider does not retrieve the available AI model list | 解决 Novita provider 模型列表拉取（P0 修复）|
| [#112386](https://github.com/openclaw/openclaw/pull/112386) ⏹️ CLOSED | Allow gateway management without systemd on Linux | 支持非 systemd Linux 发行版管理 gateway |
| [#98672](https://github.com/openclaw/openclaw/pull/98672) ⏹️ CLOSED | Sessions breaking constantly (回归) | 修复 2026.6.11 起的会话中断 |
| [#110950](https://github.com/openclaw/openclaw/pull/110950) ⏹️ CLOSED | Feature: Everything is a cron — unify heartbeat, watchers, and scheduled automation | 推进核心架构统一（但需产品决策）|
| [#46748](https://github.com/openclaw/openclaw/pull/46748) ⏹️ CLOSED | OpenClaw logs display UTC time instead of local timezone | CLI 日志时区显示修复 |
| [#88362](https://github.com/openclaw/openclaw/pull/88362) ⏹️ CLOSED | WhatsApp Inbound Image Fails on Second Read | 媒体 UUID 重复保存修复 |

**整体评估：** 项目在 gateway、channels、cron、CLI 体验等多个方向并行推进，但当日没有大型新功能合入 master，主要以**收尾性修复**为主；steipete 的嵌入式 agent 终态重构 PR [#113201](https://github.com/openclaw/openclaw/pull/113201) 提交待审，是今日最值得关注的架构级变更。

---

## 4. 社区热点

**评论数最高的 Issue：**

- 🦞 **[#44925](https://github.com/openclaw/openclaw/issues/44925)**（22 评论，👍 2）  
  *Subagent completion silently lost — no retry, no notification, no auto-restart on timeout*  
  核心问题：子代理在 Telegram 论坛模式下的 5 种静默失败模式（E31/E42/E45/超时/取消），结果彻底丢失。这是 P1 钻石级问题，与 [#113190](https://github.com/openclaw/openclaw/pull/113190) PR（修复 sessions_yield 后 trailing assistant 死锁）直接相关。

- **[#102020](https://github.com/openclaw/openclaw/issues/102020)**（15 评论，👍 1）  
  *Second message in a session fails with "reply session initialization conflicted"* — Signal 和 dashboard 跨通道位置依赖性 bug，第二个消息必然失败。

- 🐚 **[#94228](https://github.com/openclaw/openclaw/issues/94228)**（14 评论，👍 2）  
  *Native Anthropic path: replaying historical `thinking` blocks bricks long tool-use threads* — Anthropic 原生路径上长会话"thinking"块签名失效导致永久砖化，铂金级问题但 `needs-live-repro`。

- 🦞 **[#92043](https://github.com/openclaw/openclaw/issues/92043)**（13 评论，👍 3）  
  *180s compaction timeout 是整段流水线的总时钟，合法长 compaction 必然每轮失败* — 与 PR #91361 直接相关，社区推动要求拆分为阶段超时或允许部分进度复用。

- 🦪 **[#108435](https://github.com/openclaw/openclaw/issues/108435)**（10 评论，👍 2）  
  *update to openclaw 2026.7.1: gateway fails to start* — P0 回归，影响 systemd/ollama/手动启动三种方式，UX release blocker。

**值得关注的 PR：**

- **[#112963](https://github.com/openclaw/openclaw/pull/112963)** steipete 大型依赖升级 + 重大契约迁移（Slack、security、agents 多个 module）
- **[#113199](https://github.com/openclaw/openclaw/pull/113199)** Matrix 原生支持 spoiler、下划线、表格渲染（XL size）
- **[#83933](https://github.com/openclaw/openclaw/pull/83933)** 修复 `cron run` 误删 `deleteAfterRun` 一次性任务（P1）

**背后诉求分析：** 社区最强烈的呼声集中在三个方向：① **会话可靠性**（subagent 死锁、session 静默丢失、thinking block 失效）；② **跨通道一致性**（Signal/Telegram/Discord/Feishu 行为差异）；③ **可观测性**（UTC 时区、doctor 误导状态、commitment delivery 状态不一致）。这与 steipete 推动的 "Everything is a cron" 统一自动化原语 RFC 形成呼应——社区期盼**更少特例、更强契约**。

---

## 5. Bug 与稳定性

按严重程度排列（仅列有 fix PR 联动或维护者关注的核心问题）：

### 🔴 P0（已修复或具备修复路径）
| Issue | 描述 | Fix PR | 状态 |
|---|---|---|---|
| [#108435](https://github.com/openclaw/openclaw/issues/108435) | 2026.7.1 gateway 启动失败 (systemd/ollama/手动) | — | 仍 OPEN，需 maintainer review |
| [#90378](https://github.com/openclaw/openclaw/issues/90378) | 5.28→6.1 cron 静默迁移 SQLite，新任务默认 announce 模式导致通道错误 | 标记 `linked-pr-open` | OPEN |
| [#103532](https://github.com/openclaw/openclaw/pull/103532) | Novita provider 模型列表拉取失败 | [#103532](https://github.com/openclaw/openclaw/pull/103532) | ✅ CLOSED |

### 🟠 P1（高优先级）
| Issue | 描述 | 关联 |
|---|---|---|
| [#44925](https://github.com/openclaw/openclaw/issues/44925) | Subagent 静默丢失 | [#113190](https://github.com/openclaw/openclaw/pull/113190) 修复部分场景 |
| [#92043](https://github.com/openclaw/openclaw/issues/92043) | 180s compaction 超时不合理 | 需产品决策 |
| [#108580](https://github.com/openclaw/openclaw/issues/108580) | 2026.7.1 cron schema 不兼容 llama.cpp GBNF 工具调用 | `linked-pr-open` |
| [#111519](https://github.com/openclaw/openclaw/issues/111519) | 2026.7.2-beta.3 Telegram DM 回复在 stale DM-scope 清理后回退 | `needs-info` |
| [#98435](https://github.com/openclaw/openclaw/issues/98435) | MCP loopback transport gateway 重启后不自动重连，recovered=1 误导 | 需 live repro |
| [#101814](https://github.com/openclaw/openclaw/issues/101814) | 2026.6.11 更新后所有通道进入 broken state，每会话仅 1 条消息 | 需 live repro |
| [#102081](https://github.com/openclaw/openclaw/issues/102081) | macOS darwin 上 exec allowlist 永不自动执行 | 需 live repro |
| [#42820](https://github.com/openclaw/openclaw/issues/42820) | Feishu `message` send 被 poll schema 污染 | 需 live repro |
| [#91941](https://github.com/openclaw/openclaw/issues/91941) | Feishu 流式卡片全量更新导致长回复延迟严重回归 | `linked-pr-open` |

### 🟡 P2（重要但优先级较低）
- [#43374](https://github.com/openclaw/openclaw/issues/43374) 多 agent 并发 LLM 调用同时超时（多 agent 死锁）
- [#48579](https://github.com/openclaw/openclaw/issues/48579) pruning mode 'off' 仍触发 compaction（~82 次/日）
- [#42273](https://github.com/openclaw/openclaw/issues/42273) backup create 在 4GB+ 安装目录 stall
- [#94536](https://github.com/openclaw/openclaw/issues/94536) PR #92231 修复不完整，commitment 标记 sent 但未投递
- [#91799](https://github.com/openclaw/openclaw/issues/91799) Discord 通道无法访问 MCP 工具
- [#99481](https://github.com/openclaw/openclaw/issues/99481) 2026.7.1-beta.1 tool result 通道多次调用后空
- [#112696](https://github.com/openclaw/openclaw/issues/112696) Control UI 2026.7.1-2 多 agent 头像 + session 列表回归

---

## 6. 功能请求与路线图信号

今日讨论较活跃且有 PR 跟进的需求：

| 需求 | Issue | 关联 PR | 纳入下版本可能性 |
|---|---|---|---|
| 统一 cron 原语（heartbeat/watchers/cron 合并） | [#110950](https://github.com/openclaw/openclaw/issues/110950) | steipete 主导架构方向 | 🟢 高（已进入 RFC 阶段） |
| 抑制 sub-agent announce 配置项 | [#8299](https://github.com/openclaw/openclaw/issues/8299) | — | 🟡 中（长期需求）|
| 注入 context window % 至 system prompt | [#38568](https://github.com/openclaw/openclaw/issues/38568) | — | 🟢 高（简单）|
| Skill 权限清单标准 (skill.yaml) | [#12219](https://github.com/openclaw/openclaw/issues/12219) | 需安全 review | 🟡 中（安全敏感）|
| 预压缩 agent 通知 + 结构化交接窗口 | [#38520](https://github.com/openclaw/openclaw/issues/38520) | 需产品决策 | 🟡 中 |
| 记忆系统 MVP CLI（remember/recall/review/edit/forget）| [#42651](https://github.com/openclaw/openclaw/issues/42651) / [#42648](https://github.com/openclaw/openclaw/issues/42648) | 路线图阶段 | 🟡 中 |
| 全局 `--dry-run` 拦截所有工具 | [#41418](https://github.com/openclaw/openclaw/issues/41418) | 需产品决策 | 🟢 高（与 #90219 文档化方向一致）|
| 组织/团队部署：scaffolding + RBAC + manifests | [#43673](https://github.com/openclaw/openclaw/issues/43673) | 企业级规划 | 🔴 低（长周期）|
| `groupScope` 合并 group session 到 main | [#7524](https://github.com/openclaw/openclaw/issues/7524) | `linked-pr-open` | 🟡 中 |
| Azure Foundry GPT Realtime Talk 网关中继 | [#87325](https://github.com/openclaw/openclaw/issues/87325) | 需安全 review | 🟡 中 |
| 本地化贡献者所有权指南 | [#111543](https://github.com/openclaw/openclaw/pull/111543) | PR 开放 | 🟢 高 |
| Feishu poll schema 净化 | [#42820](https://github.com/openclaw/openclaw/issues/42820) | 需 live repro | 🟢 高 |
| 控制 UI 隐藏"new messages"通知条 | [#9546](https://github.com/openclaw/openclaw/issues/9546) | — | 🟢 高（UX 微调）|
| `/models test-fallback` 命令 | [#6599](https://github.com/openclaw/openclaw/issues/6599) | — | 🟢 高（可观测性）|

**信号解读：** 维护者 steipete 个人提出的"Everything is a cron" RFC 是最大架构信号——它将影响 heartbeat、watchers、scheduled automation 三大子系统的统一抽象，可能进入 v2026.8.x 主线。同时 Memory MVP (#42648/#42651) 与 RBAC/Org (#43673) 表明项目向**长期记忆与企业级**两个方向延伸。

---

## 7. 用户反馈摘要

**真实使用场景与痛点（提炼自评论）：**

1. **自托管生产的脆弱性（[#41372](https://github.com/openclaw/openclaw/issues/41372)）** — 用户在 2GB VPS 上跑 Telegram + Discord + 多 cron 4 周，收集了 **25 项发现**：CLI 文档缺失、配置崩溃模式、cron 行为差异，反映自托管者需要更稳健的"踩坑手册"。

2. **macOS exec 审批痛点（[#102081](https://github.com/openclaw/openclaw/issues/102081)）** — darwin/arm64 上即使配置了 `security: "allowlist"`，matched 命令也永不自动执行，强制人工审批。**严重破坏以 macOS 为开发机的 agent 体验**。

3. **Bootstrap 文件 token 浪费（[#67419](https://github.com/openclaw/openclaw/issues/67419)）** — 每次新会话或 follow-up 都要重新注入 MEMORY.md/SOUL.md/USER.md/AGENTS.md 等 7 个文件，占 20-30% context。多轮对话下成本叠加。

4. **WhatsApp 双读取失败（[#88362](https://github.com/openclaw/openclaw/issues/88362)）** — 同一张图片第二次读取报 `media ID does not exist`，双保存导致 UUID 不一致。

5. **subagent 不可预测（[#81514](https://github.com/openclaw/openclaw/issues/81514)）** — 相同输入、相同工具错误恢复路径下，cron 状态字段返回值 `ok`/`error` 不确定。对自动化编排是致命缺陷。

6. **anthropic 长会话脆弱（[#94228](https://github.com/openclaw/openclaw/issues/94228)）** — 多轮工具调用 thinking block 签名永久失效，"每条 follow-up 必返 400"。

7. **积极反馈信号** — 关闭的 [#46748](https://github.com/openclaw/openclaw/issues/46748)（UTC 时区）、[#103532](https://github.com/openclaw/openclaw/pull/103532)（Novita）、[#98672](https://github.com/openclaw/openclaw/issues/98672)（会话中断）、[#112386](https://github.com/openclaw/openclaw/pull/112386)（非 systemd 支持）表明维护团队对社区报告响应迅速，**用户满意度主要受制于回归速度而非响应意愿**。

8. **Discord MCP 工具缺失（[#91799](https://github.com/openclaw/openclaw/issues/91799)）** — Discord 通道下自定义 MCP 工具无法调用，而 CLI/其他 MCP 正常，反映**多通道能力不对等**。

---

## 8. 待处理积压（提醒维护者关注）

### 长期 OPEN 但活跃度高的 P1/P0 Issue（带 `needs-maintainer-review` 标签 ≥ 1 个月）

| Issue | 标题 | 创建日期 | 严重度 | 状态信号 |
|---|---|---|---|---|
| [#44925](https://github.com/openclaw/openclaw/issues/44925) | Subagent completion silently lost | 2026-03-13 (133 天) | P1 🦞 | 22 评论，有 PR 但仍 OPEN |
| [#67419](https://github.com/openclaw/openclaw/issues/67419) | Bootstrap files re-injected every turn | 2026-04-15 (100 天) | P2 🦞 | 9 评论，token 浪费 20-30% |
| [#92043](https

---

## 横向生态对比

# 个人 AI 助手 / 自主智能体开源生态横向对比报告

**报告日期**：2026-07-24 | **覆盖项目**：13 个 | **数据窗口**：过去 24 小时

---

## 1. 生态全景

2026 年 7 月的个人 AI 助手 / Agent 开源生态呈现**"高密度迭代 + 多点分化"**的典型格局：13 个被监控项目中，**9 个有活跃动态、4 个（NullClaw / TinyClaw / OpenClaw 等）处于不同状态**；版本发布普遍放缓（仅 Moltis、CoPaw/QwenPaw 有版本释出），但 PR 流入与 Issue 上报保持高位，反映社区已从"功能扩张"切换至"稳定性与互操作收敛"。**会话可靠性、跨通道一致性、可观测性、安全边界、A2A 互操作**是当前全行业共同挤压的五个技术断面，而 steipete 的 "Everything is a cron" RFC、ZeroClaw 的 KeySource trait、IronClaw 的 Reborn 品牌退役则代表三个不同的架构演进方向。整个生态正从"单 Agent 工具"向"多 Agent 协作 + 强契约 + 企业级治理"演进。

---

## 2. 各项目活跃度对比

| 项目 | Issues | PRs | 今日 Release | 健康度 | 阶段特征 |
|------|--------|-----|--------------|--------|----------|
| **OpenClaw** | 316 (新/活 219, 关闭 97) | 500 (待合并 312, 已合并 188) | ❌ 无 | 🟡 中 | 密集修复 + 架构演进，多 P0/P1 积压 |
| **NanoBot** | 新开 3, 关闭 5 | 31 合并/关闭 | ❌ 无 | 🟢 良 | 健康活跃期，安全 + WebUI 双线 |
| **Hermes Agent** | 50 (关闭 16) | 50 (合并/关闭 16) | ❌ 无 | 🟡 中偏低 | Desktop/TUI 体验密集修复，修复覆盖率仅 17% |
| **PicoClaw** | 1 (关闭) | 15 (dependabot 占 11) | ❌ 无 | 🟡 6.5/10 | 自动化维护期，stale 流程误伤人工贡献 |
| **NanoClaw** | 1 | 10 (关闭 4) | ❌ 无 | 🟢 良 | 硬化 + 多平台收敛 |
| **NullClaw** | 0 | 0 | ❌ 无 | ⚪ 停滞 | 24h 无活动 |
| **IronClaw** | 31 (关闭 6) | 50 (合并/关闭 19) | ❌ 无（v1 发版 PR 在排） | 🟢 良 | v1 发布冲刺 + Reborn 品牌退役 |
| **LobsterAI** | 3 (均 stale) | 3 | ❌ 无（Release PR 已关但产物缺失） | 🔴 低 | 低活跃度，P0 存储隐患 |
| **TinyClaw** | 0 | 0 | ❌ 无 | ⚪ 停滞 | 24h 无活动 |
| **Moltis** | 1 (关闭) | 5 (全部合并) | ✅ 20260723.02 / .03 | 🟢 良 | Slack 安全加固 + WebUI 体验打磨 |
| **CoPaw / QwenPaw** | 38 (关闭 13) | 50 (合并/关闭 21) | ✅ v2.0.1-beta.2 | 🟡 中 | v2.0 升级回归争议 + 高强度迭代 |
| **ZeptoClaw** | 2 | 1 | ❌ 无 | 🟡 静态 | 单人维护的安全收紧日 |
| **ZeroClaw** | 50 (关闭 7) | 50 (合并/关闭 1) | ❌ 无（v0.9.0 在审） | 🟡 中 | 高压冲刺期，S0 数据丢失 Bug 积压 |

---

## 3. OpenClaw 在生态中的定位

**优势**
- **绝对活跃度领先**：单日 316 Issue / 500 PR 更新，是第二梯队（50 量级）的 5–10 倍，说明社区规模与提交活跃度均位居前列。
- **架构演进纵深**：steipete 的 "Everything is a cron" RFC（统一 heartbeat/watchers/cron）、嵌入式 agent 终态重构（PR #113201）、Android Suggestion Queue（#113173）体现架构级思考密度，是同类项目难以匹配的设计深度。
- **多通道覆盖最广**：Matrix/Slack/WhatsApp/Telegram/Feishu/Signal/iOS/Android/Web 全通道并行维护，跨通道一致性已成产品级差异化。

**技术路线差异**
- 与 **IronClaw**（v1-checklist 收敛 + Reborn 品牌中性化）相比，OpenClaw 选择**抽象统一原语**（cron 一统），而非配置表面统一；
- 与 **ZeroClaw**（PostgreSQL 后端 + A2A 协议互操作）相比，OpenClaw 仍以**会话子系统的深度优化**为核心，A2A/互操作尚未提上主线；
- 与 **CoPaw/QwenPaw**（桌面端 + 多模型聚合）相比，OpenClaw 更偏**多通道消息层 + gateway 治理**，桌面端只是触达形态之一；
- 与 **NanoBot / NanoClaw**（安全 + WebUI 打磨）相比，OpenClaw 的**复杂度上限更高**，也带来更多 P0/P1 回归风险。

**社区规模对比**：OpenClaw 处于**头部单极**位置，社区信号强度约为第二梯队的 5×，但**修复覆盖率与发版节奏**显示其增长曲线进入"沉淀期"——距上次发版（2026.7.1，2026-07-15）已 9 天，多个 P0 仍处 `needs-maintainer-review`，这是头部项目典型的"规模反噬"现象。

---

## 4. 共同关注的技术方向

| 技术方向 | 涉及项目 | 核心诉求 |
|----------|----------|----------|
| **会话可靠性 / 上下文压缩** | OpenClaw（#44925 subagent 静默丢失、#94228 thinking block 砖化、#92043 180s compaction）、Hermes Agent（#14694 抖动保护致 compression 死锁、#67762 成本重水化）、IronClaw（#6570 心跳调度）、ZeroClaw（#9092 ZeroCode 长会话延迟） | 防静默失败、可恢复、可观测 |
| **跨通道一致性与可靠性** | OpenClaw（Signal/Telegram/Discord/Feishu）、Hermes Agent（#66875 Desktop tab 切换、#69314 Telegram CLOSE_WAIT 风暴）、ZeroClaw（#9187/#9188 Telegram/WeChat 游标先于投递）、PicoClaw（#3195 NanoKVM+OpenAI 兼容性）、NanoClaw（#2892 Telegram 线程） | 通道行为可预期、不一致收敛 |
| **可观测性与时区/日志** | OpenClaw（UTC 时区、doctor 误导）、IronClaw（WebChat SSE 429）、Hermes Agent（成本估算）、ZeroClaw（#4721 stderr 污染）、CoPaw（#6342 embedding 不可见） | 调试摩擦最小化 |
| **A2A / 多 Agent 互操作** | ZeroClaw（A2A Tracker #3566 + PR #9324 Phase 1）、NanoClaw（#3122 OpenCode 主线兼容）、IronClaw（#6578 Admin-Managed Agents as UserId Subjects） | 跨 Agent 互通、统一身份 |
| **安全边界 / 凭据隔离** | NanoBot（#4594 shell 路径白名单绕过、#4889 破坏性指令授权、#4987 TOCTOU）、ZeptoClaw（#644/#645 子进程环境清理）、IronClaw（#6594 retire legacy extension sources）、ZeroClaw（#9127 KeySource trait、#3767 TOTP、#9204 Landlock 自缚） | 凭据不外泄、沙箱不自缚 |
| **多模型编排与 fallback** | NanoBot（#4253 按会话切模型、#5061 preset 重塑、#5017 fallback 可视化）、PicoClaw（#3200 fallback 链）、CoPaw（#6268 AIOnly 190+ 模型聚合） | 模型抽象一致、切换成本低 |
| **长期记忆 / RBAC / 组织级** | OpenClaw（#42648/#42651 Memory MVP、#43673 RBAC/Org）、Hermes Agent（#70459 组织级 skill 命名空间）、IronClaw（#6551 默认 IronClaw 配置） | 从单用户走向团队 |

---

## 5. 差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 关键架构差异 |
|------|----------|----------|--------------|
| **OpenClaw** | 多通道 + 多 agent + 多模型 + 大规模社区 | 中大型自托管团队、多通道集成商 | "Everything is a cron" 统一原语 + steipete 单核驱动 |
| **IronClaw** | 托管化 SaaS 体验 + 扩展生命周期治理 + Reborn 品牌收敛 | 企业 SLA 用户、托管部署 | 三态扩展模型（uninstalled/setup_needed/active）+ WIT 运行时 |
| **ZeroClaw** | 协议互操作 + 多后端（PG 优先）+ 安全基线 | 跨 Agent 互操作场景、Linux Foundation A2A 参与者 | 五后端收敛至 PostgreSQL + KeySource trait |
| **CoPaw / QwenPaw** | 桌面端 + 多模型聚合 + Creator（脚本→视频） | 个人桌面用户、内容创作者 | Tauri sidecar + v2 强架构变更（争议中） |
| **NanoBot** | 安全加固 + WebUI 体验 + 多模型 preset | 个人/小团队、混合部署（云端+本地） | shell guard + per-turn fallback 可视化 |
| **NanoClaw** | 容器编排稳定性 + 多平台适配（Matrix/Telegram）+ OneCLI 治理 | 容器化生产用户 | Matrix 原生 E2EE + `wakeContainer` 并发调和 |
| **Hermes Agent** | Desktop/TUI + 上下文压缩 + OAuth 重试 | Desktop 重度用户 | ContextEngine ABC verbs（fail-open） |
| **Moltis** | Slack 通道安全 + 会话时间显示 + Podman 部署 | Slack 重度团队 | Slack 允许列表 + OTP 自审批 |
| **PicoClaw** | 极简硬件适配 + 多供应商 fallback | 嵌入式 / NanoKVM 设备 | 远程 WebSocket agent 模式 |
| **ZeptoClaw** | 运行时安全 + 子进程环境清理 | 安全敏感自托管用户 | Rust `Command` 输出捕获 + 环境 scrubbing |
| **LobsterAI** | 桌面端 + AI 皮肤 + 多 Agent 协作 | 中文桌面用户 | sql.js (WASM) 存储引擎（高风险） |

**关键差异点**：OpenClaw 与 IronClaw 是**多通道 vs 托管**的对位选择；ZeroClaw 与 NanoClaw 是**协议 vs 容器**的差异化路线；CoPaw/QwenPaw 与 Hermes Agent 都在做桌面端，但前者押注 Tauri+多模型聚合，后者押注 TUI+上下文管理。

---

## 6. 社区热度与成熟度

**第一梯队（快速迭代期）**
- **OpenClaw**、**ZeroClaw**、**IronClaw**：日更新 ≥50 条 Issue/PR，处于 v1 / v0.9 / v1 发布冲刺阶段，**架构演进 + Bug 修复并行**，但普遍存在合并速率低于提交速率的 review 积压（OpenClaw 312 待合并 / 188 已合并；ZeroClaw 49 / 1）。
- **CoPaw/QwenPaw**：日更新 88 条，v2.0.1-beta.2 已发，但 v2.0 升级带来的回归争议（性能、MCP、图片识别、cron 历史）反映**快速扩张期的质量债**。

**第二梯队（功能硬化期）**
- **NanoBot**、**NanoClaw**、**Hermes Agent**：日更新 30–50 条，PR 合并节奏稳定，修复覆盖率较高（NanoBot、NanoClaw），但 Hermes Agent 修复覆盖率仅 17%，需关注 backlog。
- **Moltis**：日更新 <10，但凭借两版本连发与 Slack 安全加固保持**小幅快跑**节奏。

**第三梯队（沉淀 / 风险期）**
- **PicoClaw**、**ZeptoClaw**、**LobsterAI**：日更新 <5，**自动化维护依赖度高、人工贡献密度低**。PicoClaw 6.5/10 健康度评分主要受 stale 流程误伤人工 PR 拖累；LobsterAI 已存在 P0 存储隐患 3 个月未响应；ZeptoClaw 处于单人维护的安全收紧日。
- **NullClaw**、**TinyClaw**：连续 24h 无活动，**实质停滞**，需进一步排查是否处于维护暂停或归档前期。

---

## 7. 值得关注的趋势信号

**趋势 ①：A2A 互操作成为头部共识** — ZeroClaw Phase 1 PR（#9324）已落地，NanoClaw（#3122）启动 OpenCode 主线兼容，IronClaw（#6578）立项 Admin-Managed Agents。**对开发者的含义**：单 Agent 工具的差异化窗口正在收窄，下一波竞争点在跨 Agent 编排与共享 wire protocol，建议优先关注 A2A RFC（#9106）的稳定化路径。

**趋势 ②："会话可靠性"取代"模型能力"成为体验瓶颈** — OpenClaw #44925（subagent 静默丢失）、Hermes Agent #14694（compression 死锁）、ZeroClaw #9187/#9188（消息游标 TOCTOU）均显示，**用户从"能不能用"过渡到"长期稳不稳"**。对开发者的含义：失败恢复、可重入、可观测性基础设施（断路器、checkpoint、refly/replay）的优先级高于更多功能。

**趋势 ③：安全从"功能"升级为"架构基线"** — NanoBot 一日内两次安全修复（#4594、#4889），ZeptoClaw 全日聚焦子进程凭据清理（#644/#645），Zero

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目日报
**日期：2026-07-24**
**数据周期：过去 24 小时**

---

## 1. 今日速览

NanoBot 今日呈现**高强度迭代、低风险稳定**的典型维护期特征：单日关闭/合并 31 个 PR、新开 3 个活跃 Issue、关闭 5 个 Issue，未发布新版本。修复密度集中于**安全与执行边界（exec guard）**、**WebUI 体验打磨**、**Channel/Provider 健壮性**三大方向，PR 标签以 `p1` 为主，未观察到 `p0` 紧急阻断事件。综合评估项目处于**健康活跃期**，合并窗口顺畅，社区响应及时。

---

## 2. 版本发布

今日**无新版本发布**。从合并内容看，下次发版窗口预计将包含大量 bugfix 与 WebUI 视觉/交互改进，建议维护者评估是否滚动一个 patch 版本。

---

## 3. 项目进展（重要已合并/关闭 PR）

| PR | 标题 | 影响面 | 链接 |
|---|---|---|---|
| #4594 | `fix(exec): extract absolute paths after equals sign in shell guard` | 修复 shell 路径白名单正则绕过（如 `curl --output=/etc/passwd`），属于**安全补丁** | [#4594](https://github.com/HKUDS/nanobot/pull/4594) |
| #4889 | `fix(security): authorize destructive priority commands` | 为 `/restart`、`/stop` 等破坏性指令引入 `channels.admin_senders` 白名单 | [#4889](https://github.com/HKUDS/nanobot/pull/4889) |
| #5064 / #5063 | `test(agent): use python3 in ExecTool workspace scope tests` | 修复 Debian/Ubuntu 仅装 `python3` 场景下测试用例 `exit 127` 失败 | [#5064](https://github.com/HKUDS/nanobot/pull/5064) |
| #5065 | `fix(webui): allow media directory access when restrictToWorkspace is enabled` | 与 #5028 联动，WebUI 文件预览兼容 media 目录 | [#5065](https://github.com/HKUDS/nanobot/pull/5065) |
| #5066 | `fix(exec): retain stale sessions after cleanup failure` | 避免清理失败导致 exec session 永久丢失，可重试 | [#5066](https://github.com/HKUDS/nanobot/pull/5066) |
| #5068 | `fix(session): tolerate files removed during listing` | 修复 `SessionManager.list_sessions()` 的 `FileNotFoundError` 逃逸，影响 idle auto-compact | [#5068](https://github.com/HKUDS/nanobot/pull/5068) |
| #5067 | `fix(webui): keep composer model badge in sync` | 修复 WebUI 模型切换竞态导致的 badge 与实际模型不同步 | [#5067](https://github.com/HKUDS/nanobot/pull/5067) |
| #5055 | `fix(telegram): advance markdown split on long single-line fences` | 修复 Telegram 超长单行代码块导致发送路径卡死 | [#5055](https://github.com/HKUDS/nanobot/pull/5055) |
| #5039 | `fix(documents): preserve DOCX table content` | 文档处理支持表格+嵌套表格内容抽取 | [#5039](https://github.com/HKUDS/nanobot/pull/5039) |
| #4901 | `fix(webui): replace transcript JSON round-trip copies with deepcopy` | 性能与正确性改进，避免 JSON 深拷贝副作用 | [#4901](https://github.com/HKUDS/nanobot/pull/4901) |
| #5061 | `feat(webui): simplify model preset settings` | 模型配置重塑为"预设 + 显式调用顺序"，对齐 #4253 | [#5061](https://github.com/HKUDS/nanobot/pull/5061) |
| #5017 | `feat(webui): indicate per-turn model fallback` | 在 WebUI 暴露 FallbackProvider 实际承担当前回合的模型 | [#5017](https://github.com/HKUDS/nanobot/pull/5017) |
| #5060 | `fix(webui): polish responsive layouts and settings search` | WebUI 响应式布局与设置搜索润色 | [#5060](https://github.com/HKUDS/nanobot/pull/5060) |
| #5058 | `style(webui): unify settings and dark mode surfaces` | 统一设置面板与暗色模式视觉令牌 | [#5058](https://github.com/HKUDS/nanobot/pull/5058) |

**整体评估**：本日合并推进了 1 个安全修复线、1 个功能重塑（模型预设）、2 个体验打磨（WebUI）、1 个文档能力（DOCX 表格）。安全侧两连击（#4594、#4889）显著强化攻击面防护，模型预设重塑为下一阶段多模型编排铺垫。

---

## 4. 社区热点

今日更新/评论热度集中在以下议题：

- **#4253 [CLOSED]**：[support overriding model per conversation](https://github.com/HKUDS/nanobot/issues/4253) —— 评论 6 条，诉求为"按会话切换模型"（OpenRouter 快模型 vs 本地 llamacpp 隐私模型）。该 issue 已关闭，对应工作可能并入 #5061 的 preset 重塑方案中。
- **#5059 [CLOSED]**：[都支持各个浏览器的什么版本](https://github.com/HKUDS/nanobot/issues/5059) —— 评论 4 条，中文社区对 WebUI 浏览器兼容矩阵的明确诉求，已关闭（建议补充到 README 或文档站点）。
- **#5069 [OPEN]**：[fix(channels): ignore confirmations after connect cancellation](https://github.com/HKUDS/nanobot/pull/5069) —— Channel 安全相关，p1 优先级，仍在评审中。

**诉求信号**：用户普遍关注"按场景/按会话切换模型"与"WebUI 跨浏览器兼容"，前者已被产品演进吸收，后者需维护者在文档侧补齐说明。

---

## 5. Bug 与稳定性

| 严重度 | Issue / PR | 描述 | 是否有修复 PR |
|---|---|---|---|
| 🔴 P0（安全） | [#4987](https://github.com/HKUDS/nanobot/pull/4987) | `fix(filesystem): bind workspace checks to opened files` —— 通过 `O_NOFOLLOW` + fstat 校验防止 TOCTOU 绕过 workspace 限制 | ✅ PR 在 OPEN（conflict 状态） |
| 🟠 P1 | [#5051](https://github.com/HKUDS/nanobot/issues/5051) | AgentRunner 长度恢复时只保留最后一段，前面已输出片段丢失 | ✅ [#5056](https://github.com/HKUDS/nanobot/pull/5056) 待合并 |
| 🟠 P1 | [#5028](https://github.com/HKUDS/nanobot/issues/5028) | 飞书入口上传文件下载到 media 目录，与 `restrictToWorkspace` 冲突，无法回读 | ✅ [#5065](https://github.com/HKUDS/nanobot/pull/5065) 已合并 |
| 🟠 P1 | [#5042](https://github.com/HKUDS/nanobot/pull/5042) | cron 加载 `jobs.json` 中某条 `schedule=null` 会使整库被隔离 | 🔄 PR OPEN |
| 🟠 P1 | [#5057](https://github.com/HKUDS/nanobot/pull/5057) | MCP schema 中使用本地 JSON Pointer 引用的工具被 Kimi/Moonshot 等严格 provider 拒绝 | 🔄 PR OPEN（修复 #5040） |
| 🟡 P2 | [#4858](https://github.com/HKUDS/nanobot/issues/4858) | MCP 生命周期被硬编码进 `AgentLoop`，建议抽象为动态 tool provider | ❌ 暂无 PR |
| 🟡 P2 | [#5069](https://github.com/HKUDS/nanobot/pull/5069) | 用户取消连接后，仍有 in-flight QR 轮询返回确认，可能保存错误凭证 | 🔄 PR OPEN |

**回归观察**：过去 24 小时未报告"今日合并引发新故障"的回滚事件，合并节奏控制良好。

---

## 6. 功能请求与路线图信号

| 需求 | Issue | 关联 PR / 状态 | 路线图概率 |
|---|---|---|---|
| 按会话覆盖模型 | [#4253](https://github.com/HKUDS/nanobot/issues/4253) | [#5061](https://github.com/HKUDS/nanobot/pull/5061) 已合并 preset 重塑 | ★★★★★ 已落地 |
| 浏览器兼容性矩阵 | [#5059](https://github.com/HKUDS/nanobot/issues/5059) | 无关联 PR，需文档补齐 | ★★★☆☆ 中等 |
| MCP tool provider 抽象 | [#4858](https://github.com/HKUDS/nanobot/issues/4858) | 无 | ★★★☆☆ 中等 |
| Fallback 模型可视化 | — | [#5017](https://github.com/HKUDS/nanobot/pull/5017) 已合并 | ★★★★★ 已落地 |
| DOCX 表格读取 | — | [#5039](https://github.com/HKUDS/nanobot/pull/5039) 已合并 | ★★★★★ 已落地 |
| Composer 模型徽标同步 | — | [#5067](https://github.com/HKUDS/nanobot/pull/5067) 已合并 | ★★★★★ 已落地 |

**信号解读**：本轮路线图明显向"多模型编排体验"倾斜，preset → fallback 可视化 → composer 同步形成闭环；下一阶段可能进入 MCP 抽象层与 workspace TOCTOU 收敛。

---

## 7. 用户反馈摘要

- **#4253 用户 rombert**：典型双模型用户（OpenRouter + 本地 llamacpp），希望按隐私/时效在会话粒度切换，说明社区中存在大量混合部署场景。
- **#5028 用户 KuruZaphkiel**：飞书集成用户反馈上传文件回读困难，提示多渠道（Channel）用户的实际工作流是"上传 → 跨会话引用"，需在 workspace 边界设计中专门考虑。
- **#5059 用户 qteamo**：中文社区用户对浏览器兼容存在不确定性，期望官方明确或扩展适配范围。
- **#4592 用户 axelray-dev**：发现 shell guard 在 `--output=path` 形式下的边界缺陷，体现社区具备较高安全意识，愿意提报真实绕过路径。
- **#5062 用户 flyzstu**：在仅装 `python3` 的 Linux 发行版跑测试失败，提示 CI 矩阵需要覆盖 Debian/Ubuntu 默认环境。

---

## 8. 待处理积压

提醒维护者关注以下长期或高优先级未合并条目：

| 类型 | 条目 | 创建时间 | 状态 | 备注 |
|---|---|---|---|---|
| 安全 PR | [#4987](https://github.com/HKUDS/nanobot/pull/4987) | 2026-07-19 | OPEN / conflict | P0 workspace TOCTOU 修复，建议优先解决冲突 |
| 协议安全 | [#5069](https://github.com/HKUDS/nanobot/pull/5069) | 2026-07-23 | OPEN | P1，需评审 |
| 长度恢复 | [#5056](https://github.com/HKUDS/nanobot/pull/5056) | 2026-07-23 | OPEN | P1，修复 #5051 |
| MCP 兼容 | [#5057](https://github.com/HKUDS/nanobot/pull/5057) | 2026-07-23 | OPEN | P1，Kimi/Moonshot 严格 schema 校验 |
| Cron 健壮性 | [#5042](https://github.com/HKUDS/nanobot/pull/5042) | 2026-07-22 | OPEN / conflict | P1，null schedule 隔离 |
| 架构重构 | [#4858](https://github.com/HKUDS/nanobot/issues/4858) | 2026-07-09 | OPEN | P2，AgentLoop MCP 解耦，影响后续扩展性 |
| 功能遗留 | [#5051](https://github.com/HKUDS/nanobot/issues/5051) | 2026-07-23 | OPEN | P1，等待 #5056 合并 |

**维护者建议**：今日合并量较大，建议在下一窗口集中评审剩余 6 个 OPEN 高优先级条目，尤其 #4987（P0 安全）已带 conflict 状态 5 天，需优先解决合并冲突。

---

*报告基于 2026-07-23 ~ 2026-07-24 GitHub 数据自动生成。*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目日报 · 2026-07-24

## 1. 今日速览

Hermes Agent 今日继续保持高强度迭代节奏：24 小时内共有 **50 条 Issue 与 50 条 PR 更新**，其中 Issue 关闭 16 条、PR 关闭/合并 16 条，活跃开放项维持在 34 条左右。讨论热度集中在 **Desktop / WebUI 桌面端的会话与 UI 异常**、**Agent 上下文压缩与多模态 token 估算**、**OAuth / API 凭证重试风暴** 三类问题上。**没有任何新版本发布**，但多个 P1/P2 严重 Bug 与重要功能 PR 仍在排队待合并，反映出项目处于"密集修复 + 持续演进"的稳定期。

---

## 2. 版本发布

**今日无新版本发布。** 当前活跃版本仍为 **v0.19.0 (2026.7.20)**，上游 commit 76e17bc3；多个 PR 已基于该版本或更新分支提交，待下一窗口打包。

---

## 3. 项目进展

今日合并/关闭的重要 PR 推进了稳定性、安全边界和 CLI 资源管理三大方向：

| PR | 类型 | 进展说明 |
|---|---|---|
| [#67768](https://github.com/NousResearch/hermes-agent/pull/67768) | fix(cli): cleanup oneshot resources | 已关闭。修复 `hermes -z` 一次性任务在退出时未释放 MCP/aiohttp、SQLite、浏览器等进程级资源导致的"成功执行但残留资源"问题。 |
| [#70455](https://github.com/NousResearch/hermes-agent/pull/70455) | fmt(js): npm run fix auto-fix | 已关闭。由 CI 自动生成的 JS 格式化修复，验证了自动 lint 流水线运转正常。 |

值得注意的是，多个长期开放 PR 在今日获得更新但**尚未合并**：
- [#63671](https://github.com/NousResearch/hermes-agent/pull/63671) — 修复 TUI 后台委派完成时抢断前台 turn 的 UX 问题（开放 11 天）
- [#58743](https://github.com/NousResearch/hermes-agent/pull/58743) — Copilot stale token 400/401 自愈（开放 19 天）
- [#61260](https://github.com/NousResearch/hermes-agent/pull/61260) — Teams 主动消息回复上下文保留（开放 15 天）
- [#45460](https://github.com/NousResearch/hermes-agent/pull/45460) — Google Meet 实时字幕抓取加固（开放 41 天）

整体而言，今日对**项目向前推进的净贡献为中等**：解决了一类潜在资源泄漏，但 P0/P1 关键修复仍卡在 review 中。

---

## 4. 社区热点

**讨论最活跃的 Issue（按评论数）：**

| 排名 | Issue | 评论数 | 主题 |
|---|---|---|---|
| 1 | [#66875](https://github.com/NousResearch/hermes-agent/issues/66875) | 8 | Desktop 切换非 chat tab 后，最近会话点击无响应 |
| 2 | [#69314](https://github.com/NousResearch/hermes-agent/issues/69314) | 7 | Telegram 网关在 HTTP 代理后陷入 CLOSE_WAIT 风暴 |
| 3 | [#67762](https://github.com/NousResearch/hermes-agent/issues/67762) | 6 | `session_estimated_cost_usd` 网关重启后未恢复 → 静默少计费 |
| 4 | [#69551](https://github.com/NousResearch/hermes-agent/issues/69551) | 5 | 非默认 profile 下 Desktop SSH 远程模式 token 路径错位 |
| 5 | [#513](https://github.com/NousResearch/hermes-agent/issues/513) | 5 | 两阶段上下文管理（已关闭，被采纳为后续 RFC 基础） |
| 6 | [#14694](https://github.com/NousResearch/hermes-agent/issues/14694) | 4 | 防抖动保护导致 auto-compression 永久失效 |

**值得关注的 PR：**
- [#70467](https://github.com/NousResearch/hermes-agent/pull/70467) — 将 MCP 工具描述标注为"不可信元数据"，防御 prompt injection
- [#70459](https://github.com/NousResearch/hermes-agent/pull/70459) — 组织级 skill 命名空间（M2 隔离/归属工作）
- [#70458](https://github.com/NousResearch/hermes-agent/pull/70458) — `ContextEngine` 增加 `select_context()` / `on_turn_complete()` 两个 fail-open ABC verbs

**诉求分析：** 社区的焦点高度集中在 **Desktop / TUI UX 一致性**（会话切换、侧边栏、加载抖动）和**网关/会话状态可靠性**（重启后状态恢复、OAuth 重试死循环）。这表明用户群已从"能跑起来"过渡到"长时间生产可用"的阶段。

---

## 5. Bug 与稳定性

按严重程度排列的今日关注 Bug：

### 🔴 P1（高严重度）
- **[#14694](https://github.com/NousResearch/hermes-agent/issues/14694)** — 反抖动保护触发后 `should_compress()` 永久返回 `False`，auto-compression 永远失活，无超时/恢复机制。**目前无对应 fix PR**。
- **[#70401](https://github.com/NousResearch/hermes-agent/issues/70401)** — OAuth 凭证池在 Nous provider 下进入**无限、不可中断的 401 重试循环**，stop 信号被忽略，只能外部 kill。**目前无对应 fix PR**，属安全边界 + 平台稳定性双重问题。

### 🟠 P2（中高严重度）
- **[#67762](https://github.com/NousResearch/hermes-agent/issues/67762)** — 会话成本估算在网关重启后从 SQLite 未重水化，导致**运行中会话成本静默低估**，对计费展示功能是 BLOCKER。**无 fix PR**。
- **[#66875](https://github.com/NousResearch/hermes-agent/issues/66875)** — Desktop 会话切换状态在切换 tab 后丢失（最近一个会话点击无效）。**无 fix PR**。
- **[#69551](https://github.com/NousResearch/hermes-agent/issues/69551)** — 非默认 profile 下 Desktop SSH token 路径解析错位，远程模式完全不可用。**无 fix PR**。
- **[#69930](https://github.com/NousResearch/hermes-agent/issues/69930)** — Desktop WebSocket 与本地 gateway 出现 ~30-45s 周期的重连循环，渲染器卡顿、detached session 累积未被回收。**无 fix PR**。
- **[#69925](https://github.com/NousResearch/hermes-agent/issues/69925)** — Desktop 与 `hermes dashboard` CLI 同时运行时进入 boot loop（端口 9119 冲突）。**已有对应 fix PR [#70464](https://github.com/NousResearch/hermes-agent/pull/70464)**（今日新提，待合并）。
- **[#70424](https://github.com/NousResearch/hermes-agent/issues/70424)** — macOS Desktop 从 Kanban/Artifacts 点击侧栏会话无法切回 chat，被强制进 New session。**无 fix PR**。
- **[#70445](https://github.com/NousResearch/hermes-agent/issues/70445)** — 远程/VPS 后端下 Desktop 会话加载慢（~20s+）、切走即取消、可能无限 spin、闪烁内容后转圈。**无 fix PR**。

### 🟡 P3（中等）
- **[#69314](https://github.com/NousResearch/hermes-agent/issues/69314)** — Telegram HTTP 代理后 CLOSE_WAIT 套接字累积至数百，需重启 gateway。**无 fix PR**。
- **[#69825](https://github.com/NousResearch/hermes-agent/issues/69825)** — `serve` 命令从未调用 `register_from_config`，shell hooks 通过 list/doctor/test 但**实际从不触发**。**无 fix PR**。
- **[#60693](https://github.com/NousResearch/hermes-agent/issues/60693)** — Desktop GUI 缩放设置 110% 间歇性回弹到 100%。**无 fix PR**。
- **[#52669](https://github.com/NousResearch/hermes-agent/issues/52669)** — 系统提示硬编码 `~/.hermes` 路径而不尊重 `HERMES_HOME`。**无 fix PR**。
- **[#47359](https://github.com/NousResearch/hermes-agent/issues/47359)** — Desktop 远程模式下后端更新报告失败但实际成功。**无 fix PR**。
- **[#70346](https://github.com/NousResearch/hermes-agent/issues/70346)** — Dashboard `ChatSessionList` 不实时刷新。**无 fix PR**。
- **[#61003](https://github.com/NousResearch/hermes-agent/issues/61003)** — `shutdown_forensics` 在 system scope systemd 下误报 Stale unit。**无 fix PR**。
- **[#70400](https://github.com/NousResearch/hermes-agent/issues/70400)** — WSLg 上 Desktop 窗口缺少 min/max/close 按钮（root cause 已定位）。**无 fix PR**。

**今日已修复/关闭的 Bug：**
- [#69512](https://github.com/NousResearch/hermes-agent/issues/69512) — Anthropic 空文本块导致压缩后永久 400（已关闭）
- [#61452](https://github.com/NousResearch/hermes-agent/issues/61452) — MoA 参考模型虚构工具执行（已关闭，duplicate）
- [#65092](https://github.com/NousResearch/hermes-agent/issues/65092) — Gemini 缺少 thought_signature 导致 MoA 聚合失败（已关闭）

**修复覆盖率：** 今日新增/活跃 18 条 Bug Issue 中，仅 3 条已关闭（约 17%），存在显著修复积压。

---

## 6. 功能请求与路线图信号

| 功能请求 | Issue / PR | 状态信号 | 纳入下一版本可能性 |
|---|---|---|---|
| 当前会话消息导航侧边栏（DeepSeek 风格） | [#69532](https://github.com/NousResearch/hermes-agent/issues/69532) + [#70462](https://github.com/NousResearch/hermes-agent/pull/70462) | **PR 已就绪**（webtecnica，今日提交） | ⭐⭐⭐⭐⭐ 极高 |
| Cursor 模型计费路径（独立 SDK plugin） | [#70140](https://github.com/NousResearch/hermes-agent/issues/70140) | 仅 Issue，needs-decision | ⭐⭐⭐ 高 |
| Desktop 相对时间 hover 显示绝对时间 | [#70450](https://github.com/NousResearch/hermes-agent/issues/70450) | 仅 Issue | ⭐⭐⭐⭐ 高（低风险 UI 改进） |
| WhatsApp 接入文档改进 | [#70389](https://github.com/NousResearch/hermes-agent/issues/70389) | 已关闭（docs） | ✅ 本轮即合入 |
| Yuanbao 技能移至 optional-skills | [#70456](https://github.com/NousResearch/hermes-agent/pull/70456) | PR 已开 | ⭐⭐⭐⭐⭐ 高（teknium1 主维护） |
| heartmula + audiocraft 技能重构 | [#70453](https://github.com/NousResearch/hermes-agent/pull/70453) | PR 已开 | ⭐⭐⭐⭐⭐ 高 |
| ContextEngine ABC verbs（select_context / on_turn_complete） | [#70458](https://github.com/NousResearch/hermes-agent/pull/70458) | PR 已开（RFC #36765 实现） | ⭐⭐⭐⭐ 高（架构演进） |
| 压缩进度通知（compression.progress_notices） | [#70457](https://github.com/NousResearch/hermes-agent/pull/70457) | PR 已开，opt-in 默认关闭 | ⭐⭐⭐⭐ 高 |
| 组织级 skill 命名空间（M2） | [#70459](https://github.com/NousResearch/hermes-agent/pull/70459) | PR 已开（多方协同） | ⭐⭐⭐ 中（依赖上下游） |
| Codex 账户用量暴露 `GET /v1/account/usage` | [#70466](https://github.com/NousResearch/hermes-agent/pull/70466) | PR 已开 | ⭐⭐⭐⭐ 高 |
| ACP 长会话 OAuth stale 恢复 | [#70465](https://github.com/NousResearch/hermes-agent/pull/70465) | PR 已开 | ⭐⭐⭐⭐ 高 |

**路线图信号总结：** 下一版本（假设为 v0.19.1 或 v0.20）最可能合入的 5 项是：①WebUI 消息导航侧边栏 ②skill 重构（yuanbao/heartmula/audiocraft 下沉到 optional）③MCP 工具描述不可信标注 ④Desktop 端口冲突检测 ⑤上下文压缩进度通知。

---

## 7. 用户反馈摘要

从 Issues 评论中提炼的真实用户痛点与场景：

**😣 长期会话成本不透明**
- [#67762](https://github.com/NousResearch/hermes-agent/issues/67762) 用户反映"运行中会话成本在网关重启后归零"，影响计费功能的可信度，**BLOCKER 级别**。

**😣 Telegram + 代理部署的脆弱性**
- [#69314](https://github.com/NousResearch/hermes-agent/issues/69314) Docker + HTTP 代理环境下 Telegram adapter 在"代理健康"的状态下进入永久退化，CLOSE_WAIT 套接字积压至数百，体现企业代理场景下重连退避策略不足。

**😣 Desktop UX 一致性问题频发**
- [#66875](https://github.com/NousResearch/hermes-agent/issues/66875)、[#70424](https://github.com/NousResearch/hermes-agent/issues/70424)、[#70444](https://github.com/NousResearch/hermes-agent/issues/70444)、[#70445](https://github.com/NousResearch/hermes-agent/issues/70445) 显示用户在多 tab 切换、项目切换、远程后端加载上反复遭遇"操作无响应/被打回 New session/列表顺序错乱"等问题，**肌肉记忆被破坏**。

**😣 非默认安装路径 / 非默认 profile 兼容性差**
- [#52669](https://github.com/NousResearch/hermes-agent/issues/52669)（HERMES_HOME 硬编码）、[#69551](https://github.com/NousResearch/hermes-agent/issues/69551)（profile-scoped SSH token 错位）暴露**多 profile / 多环境运维场景的稳定性盲区**。

**😣 长会话上下文管理不可靠**
- [#14694](https://github.com/NousResearch/hermes

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目日报

**日期：2026-07-24** | **仓库：sipeed/picoclaw**

---

## 1. 今日速览

PicoClaw 过去 24 小时整体处于**低活跃度的自动化维护期**。Issues 端仅 1 条更新（已关闭），PR 端 15 条更新中有 11 条由 dependabot 触发的依赖升级组成，2 条为历史 stale 项清理。**没有人工驱动的代码合并**，也没有新版本发布。值得关注的实质性进展仅 1 项——`#3200` 可配置默认 fallback 链功能仍待评审，以及 `trufae` 提交的 DeltaChat 重构 PR (`#3222`)。项目健康度整体平稳，但人工贡献密度偏低，依赖治理流程运转正常。

---

## 2. 版本发布

⚠️ **无新版本发布**。本周期未触发任何 release tag，建议关注上游是否有临近发版计划。

---

## 3. 项目进展

**实际合并/关闭的重要 PR：**

| PR | 标题 | 性质 | 影响 |
|---|---|---|---|
| [#3286](https://github.com/sipeed/picoclaw/pull/3286) | fix: update Go and x/text for govulncheck | 修复 | 提升安全性，修复 govulncheck 告警 |
| [#3115](https://github.com/sipeed/picoclaw/pull/3115) | Fix inline data URL media extraction for generic tool output | 修复 | 修复 session-history 损坏 bug（已因 stale 关闭，但内容质量较高） |
| [#3118](https://github.com/sipeed/picoclaw/pull/3118) | Add remote Pico WebSocket mode to picoclaw agent | 功能 | 新增 `picoclaw agent --remote` 模式（已因 stale 关闭） |
| [#3235](https://github.com/sipeed/picoclaw/pull/3235), [#3236](https://github.com/sipeed/picoclaw/pull/3236), [#3237](https://github.com/sipeed/picoclaw/pull/3237), [#3238](https://github.com/sipeed/picoclaw/pull/3238) | 多个 dependabot 旧 PR 清理 | 维护 | 关闭被新版依赖更新覆盖的旧 PR |

**评估：** 实质性代码推进有限。`#3115` 和 `#3118` 两位作者（`jp39`）提交的质量较高 PR 因 stale 流程被关闭，建议维护者主动回收或重新评估，否则会形成"有价值的贡献被静默吞没"的恶性循环。

---

## 4. 社区热点

**讨论最活跃的条目：**

- 🥇 **[Issue #3195](https://github.com/sipeed/picoclaw/issues/3195)** —— "OpenAI GPT does not work on NanoKVM with default config"
  - 评论数：**4 条**（本周期唯一有用户讨论的 Issue）
  - 状态：已关闭（标为 stale）
  - 用户诉求：用户依据官方文档配置 GPT-5.4，但 PicoClaw 与 NanoKVM（2.4.0 新功能）的默认配置交互失败。

**背后诉求分析：** 这反映出 PicoClaw 在多供应商模型支持（NanoKVM 新硬件 + OpenAI 新模型）上**配置兼容性的缺位**。stale 关闭后并未在 PR 中体现 fix，存在体验断点。

---

## 5. Bug 与稳定性

| 严重度 | 问题 | 状态 | 是否有 Fix PR |
|---|---|---|---|
| 🟡 中 | [Issue #3195](https://github.com/sipeed/picoclaw/issues/3195) NanoKVM 上 OpenAI GPT 默认配置不可用 | 已关闭（stale，无明确修复说明） | ❌ 未发现对应 fix |
| 🟢 低 | 旧 PR [#3115](https://github.com/sipeed/picoclaw/pull/3115) data URL 被误判为媒体附件的 session-history 损坏 | PR 已 stale 关闭，但问题描述完整 | ⚠️ 需要重新开启或新 PR |
| 🟢 低 | [PR #3286](https://github.com/sipeed/picoclaw/pull/3286) govulncheck 告警 | 已合并 | ✅ 已修复 |

**稳定性信号：** 维护者对 stale 流程的依赖较重，导致部分真实 bug（如 NanoKVM + OpenAI 配置不兼容）被静默关闭，建议补充人工审核环节。

---

## 6. 功能请求与路线图信号

| 候选功能 | 现有 PR | 可能性评估 |
|---|---|---|
| 模型默认 fallback 链（web UI + backend 持久化） | [#3200](https://github.com/sipeed/picoclaw/pull/3200) 来自 lc6464 | 🟢 高 —— 切中多模型用户痛点，设计完整 |
| 远程 Pico WebSocket 模式（`picoclaw agent --remote`） | [#3118](https://github.com/sipeed/picoclaw/pull/3118) 来自 jp39 | 🟡 中 —— 设计合理但因 stale 关闭，需复活 |
| DeltaChat 实现清理（删除 200 行遗留代码，官方 relay 列表替代硬编码） | [#3222](https://github.com/sipeed/picoclaw/pull/3222) 来自 trufae | 🟢 高 —— 重构类，破坏性需评估，但瘦身明显 |
| 通用工具输出中 base64 媒体误判修复 | [#3115](https://github.com/sipeed/picoclaw/pull/3115) | 🟡 中 —— 真实 bug 修复 |

**路线图信号：** 模型层 fallback 编排（#3200）和多端 agent 通信（#3118）是当前社区最明确的两条演进方向。

---

## 7. 用户反馈摘要

来自 [Issue #3195](https://github.com/sipeed/picoclaw/issues/3195) 的 4 条评论提炼：

- 😟 **痛点 1（配置断裂）：** 官方文档 [supported-vendors-and-protocols](https://docs.picoclaw.io/docs/configuration/model-list/#supported-vendors-and-protocols) 推荐的配置在 NanoKVM 2.4.0 上失效。
- 😟 **痛点 2（新硬件兼容性）：** PicoClaw 集成到 NanoKVM 2.4.0 后，对话交互均失败，疑似默认配置与 KVM 设备适配存在冲突。
- 😐 **痛点 3（响应缺失）：** 该 Issue 自 6 月 30 日提出后于 7 月 23 日仅以 stale 关闭，无明确 fix 路径。

**整体满意度：** 用户对 PicoClaw 的多模型能力有期待，但对其在新硬件/新模型组合下的稳定性信心不足。

---

## 8. 待处理积压

**高优先级（stale 但有价值，建议维护者关注）：**

1. 🔴 [PR #3118](https://github.com/sipeed/picoclaw/pull/3118) — 远程 WebSocket agent 模式，设计完整可合并
2. 🔴 [PR #3115](https://github.com/sipeed/picoclaw/pull/3115) — session-history 损坏 bug 修复，影响数据完整性
3. 🟡 [PR #3200](https://github.com/sipeed/picoclaw/pull/3200) — 模型 fallback 链功能，等待评审超过 3 周
4. 🟡 [PR #3222](https://github.com/sipeed/picoclaw/pull/3222) — DeltaChat 重构 -200LOC，长达 3 周未得到 review
5. 🟠 [PR #3262](https://github.com/sipeed/picoclaw/pull/3262), [#3263](https://github.com/sipeed/picoclaw/pull/3263) — GitHub Actions 大版本升级（v6 → v7），可能存在 breaking 行为

**建议：** 维护者应优先 review 上述非 dependabot 的人工贡献，否则将打击社区积极性，并使 stale 流程沦为"善意但有害"的自动化机制。

---

> 📊 **健康度评分：6.5 / 10** — 自动化维护流程运转良好，但人工 PR 评审通道存在堵塞，stale 关闭可能误伤有效贡献。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目日报
**日期：2026-07-24**
**项目：qwibitai/nanoclaw**
**报告周期：过去 24 小时**

---

## 1. 今日速览

NanoClaw 过去 24 小时保持中等活跃度，共产生 1 条 Issue 更新与 10 条 PR 活动（6 开放 / 4 关闭），无新版本发布。PR 关闭率（4/10 = 40%）处于健康水平，主要工作集中在容器编排稳定性、多平台适配器（Telegram / Matrix）与 OneCLI 规则治理三方面。值得关注的信号是 #2466 容器重复派生的 race condition 已被 #3119 同步提交修复 PR，闭环速度较快；Matrix 原生 E2EE 适配器重大重构（#2844）正式关闭，标志着一个长期能力的落地。

---

## 2. 版本发布

**无新版本发布。** 当前处于功能迭代与硬化阶段，未触发新 tag。

---

## 3. 项目进展（今日合并/关闭的重要 PR）

| PR | 标题 | 影响面 | 链接 |
|----|------|--------|------|
| **#2844** | feat(matrix): native persistent E2EE adapter via matrix-bot-sdk | **重大** — 弃用基于 WASM 的 Chat SDK 桥接，改用 `matrix-bot-sdk` + Rust 绑定 `@matrix-org/matrix-sdk-crypto-nodejs` 重建原生 E2EE 适配器，端到端加密持久化与启动性能显著提升 | [PR #2844](https://github.com/qwibitai/nanoclaw/pull/2844) |
| **#2892** | fix(telegram): enable thread support | 翻启 `supportsThreads: true` 能力位，配合已存在的 `message_thread_id` 路由，Telegram forum/topic 线程现可被正确追踪 | [PR #2892](https://github.com/qwibitai/nanoclaw/pull/2892) |
| **#3120** | Keep typing indicator alive through a single long tool call | 修复长工具调用场景下 typing 指示器提前消失的 UX 缺陷 | [PR #3120](https://github.com/qwibitai/nanoclaw/pull/3120) |
| **#3115** | fix(onecli): block legacy Gmail API routes | 收敛 OneCLI 全局规则，覆盖 `www.googleapis.com` 上的标准 / 批处理 / 上传三类 Gmail 旧路径，并附安装后校验流程 | [PR #3115](https://github.com/qwibitai/nanoclaw/pull/3115) |

**整体评估**：今日合并/关闭的 4 个 PR 中，1 项为重大平台能力升级（Matrix E2EE），2 项为稳定性 / 体验硬化（typing、Telegram 线程），1 项为安全治理（Gmail 流量拦截）。项目正向"更安全、更原生、更稳定"的方向扎实推进。

---

## 4. 社区热点

- **#2466 Duplicate container spawn race on wakeContainer**（[Issue](https://github.com/qwibitai/nanoclaw/issues/2466)）— 2 条评论，0 👍，由 glifocat 提出。是今日唯一活跃的 Issue 话题。
  - 诉求焦点：脚本调用 `wakeContainer` 与 host 周期性 sweep 并发时，会派生两个同名容器重复处理同一 brief，造成算力浪费与状态污染。
  - 与 #3119（PR）形成讨论闭环，社区对"孤儿容器调和机制"关注度上升。
- **#2844 Matrix native E2EE**（[PR](https://github.com/qwibitai/nanoclaw/pull/2844)）— 评论 0 但重要性极高，长期能力升级，跨多轮 PR 迭代后正式关闭，是本周最实质性的进展。

---

## 5. Bug 与稳定性

| 严重度 | Issue | 描述 | 已有 Fix PR |
|--------|-------|------|-------------|
| 🟡 中（实际严重度高于标签） | [#2466](https://github.com/qwibitai/nanoclaw/issues/2466) | `wakeContainer` 与 host sweep 并发导致同名容器重复派生（间隔 ~10s），同一 brief 被处理两次 | ✅ [#3119](https://github.com/qwibitai/nanoclaw/pull/3119) **同步提交** |
| 🟢 低 | [#2346](https://github.com/qwibitai/nanoclaw/pull/2346) | 未知 slash command 被误判为 passthrough，导致 Agent SDK 静默丢弃响应 | ✅ PR 自带 fix，待合并 |
| 🟢 低 | [#3121](https://github.com/qwibitai/nanoclaw/pull/3121) | reaction 投递失败会中断主流程（非稳定性，但影响可用性） | ✅ fix PR 同日提交 |

**说明**：#2466 虽被标为 Low/Hardening，但实际生产环境（5 天稳定运行的主机）已观察到"3 个并发容器轮询同一 session DB"的极端现象，应在下次发布前优先合入 #3119。

---

## 6. 功能请求与路线图信号

| 方向 | 信号来源 | 推断 |
|------|----------|------|
| **OpenCode 主线兼容 + 自定义 endpoint 传输层** | [#3122](https://github.com/qwibitai/nanoclaw/pull/3122)（core-team 标签） | 显示项目正在适配 OpenCode 主流版本，伴随内存模型对齐；大概率纳入下一版本 |
| **ncc 运维 / 健康 CLI utility skill** | [#2971](https://github.com/qwibitai/nanoclaw/pull/2971)（2026-07-07 开） | 社区对"宿主自检工具"诉求明确，但已 17 天未审，建议维护者关注 |
| **Telegram 线程支持** | [#2892](https://github.com/qwibitai/nanoclaw/pull/2892) ✅ 已合 | 路线图落地 |
| **Matrix 原生 E2EE** | [#2844](https://github.com/qwibitai/nanoclaw/pull/2844) ✅ 已合 | 路线图落地 |
| **OneCLI 流量治理** | [#3115](https://github.com/qwibitai/nanoclaw/pull/3115) ✅ 已合 | 平台治理持续深化 |
| **反应投递 best-effort** | [#3121](https://github.com/qwibitai/nanoclaw/pull/3121) | 暗示当前实现仍为"硬失败"模式，下版本可能放宽 |

---

## 7. 用户反馈摘要

仅 #2466 有评论数据（2 条），可提炼的用户痛点如下：

- **并发冲突不可见** — 用户在脚本侧调用 `wakeContainer` 与 host 内部 sweep 并行时，缺乏互斥或幂等保护，导致**两次执行均视为合法**。反映"host 内部状态机对外部调用方不可见"的耦合问题。
- **生产环境可达"3 个并发容器轮询同 session DB"**（见 #3119 根因分析），5 天稳定运行的宿主机仍能触发，说明**长期运行下的状态漂移**是真实痛点。
- **缺乏孤儿容器调和机制** — 派生出的容器在 host 进程重启或网络抖动后会成为"孤儿"，下次相同 group_id 的任务会再次派生新实例，加剧资源泄漏。

**正向信号**：用户没有表达不满情绪，而是直接定位到根因并附 PR，说明社区贡献者成熟度高、配合维护者紧密。

---

## 8. 待处理积压

| 编号 | 类型 | 创建距今 | 状态 | 提醒 |
|------|------|----------|------|------|
| [#2346](https://github.com/qwibitai/nanoclaw/pull/2346) | PR / Fix | **~77 天**（2026-05-08） | OPEN | 修复方案清晰（fall-through to `category: 'none'`），长期未合并可能存在阻塞 review 的争议点，建议维护者明确反馈 |
| [#2971](https://github.com/qwibitai/nanoclaw/pull/2971) | PR / Skill | **~17 天**（2026-07-07） | OPEN | ncc 运维 CLI 工具尚未 review，作为 utility skill 风险可控，应能快速合入 |
| [#3090](https://github.com/qwibitai/nanoclaw/pull/3090) | PR / Fix | 5 天 | OPEN | templates 前置 context Markdown 修复，无评论，需审 |
| [#3122](https://github.com/qwibitai/nanoclaw/pull/3122) | PR / Fix | 1 天 | OPEN | OpenCode 主线兼容，core-team 标签，质量门槛较高，需资深 review |

**维护者建议优先级**：
1. 合入 #3119（孤儿容器调和），关闭 #2466 — 闭环生产隐患
2. 推进 #3122（OpenCode 兼容）review — 涉及核心集成
3. 回应 #2346 与 #2971 长期积压 PR，恢复社区贡献者信心

---

### 📊 项目健康度总评

| 维度 | 评分 | 备注 |
|------|------|------|
| 活跃度 | ⭐⭐⭐⭐ | PR 流入正常，关闭率 40% 健康 |
| 稳定性响应 | ⭐⭐⭐⭐⭐ | Bug 当日有 fix PR 提交，闭环迅速 |
| 长期 Issue 积压 | ⭐⭐⭐ | #2346 滞留 77 天，需关注 |
| 路线图清晰度 | ⭐⭐⭐⭐ | Matrix / Telegram / OpenCode 三线并行 |
| 社区贡献成熟度 | ⭐⭐⭐⭐⭐ | 贡献者直接定位根因并附 PR |

**一句话总结**：NanoClaw 处于"硬化 + 多平台收敛"阶段，重大能力按节奏落地，核心隐患已浮现并被快速响应；维护者应尽快清理两项长期积压 PR，以维持社区贡献动能。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报
**报告日期：2026-07-24**
**数据范围：过去 24 小时**

---

## 1. 今日速览

IronClaw 今日维持高强度迭代节奏，**24 小时内累计 81 条 Issues/PRs 更新**（31 Issues + 50 PRs），其中 **PR 合并/关闭 19 条、Issues 关闭 6 条**，活跃度显著高于近期均值。项目处于 **v1 发布冲刺阶段** —— 大量 Issue 带有 `[v1-launch-checklist]` 标签，集中处理 Slack/Telegram 集成、CLI 在托管环境的可用性、WebUI 重连等阻塞性问题；同时启动 **"Reborn" 品牌退役** 与 **心跳（Heartbeat）MVP** 双轨并行的架构演进。无新版本发布，代码变更主要通过持续集成验证。

---

## 2. 版本发布

⚠️ **本周期无新版本发布**。

下一版本信号：当前 PR #5598（`chore: release`）仍处于 OPEN 状态，待合并后将释放：
- `ironclaw_common`: 0.4.2 → **0.5.0**（⚠ API 破坏性变更，copy_impl 新增）
- `ironclaw_safety`: 0.2.2 → 0.2.3
- `ironclaw_skills`: 0.3.0 → **0.4.0**（⚠ API 破坏性变更）

迁移前建议关注 breaking change 详情。

---

## 3. 项目进展（已合并/关闭的重要 PR）

### 🚀 架构里程碑
- **[PR #6520](https://github.com/nearai/ironclaw/pull/6520)** `fix(reborn): make extension readiness and channel delivery generic`（XL，medium risk）— **已合并**
  将公开扩展生命周期收敛至 `uninstalled` / `setup_needed` / `active` 三态；安装即合入用户成员资格、激活无需独立 Action；并将租户管理员配置与个人成员资格、OAuth、频道标识完全解耦。这是本周影响面最大的架构调整。
- **[PR #6594](https://github.com/nearai/ironclaw/pull/6594)** `retire legacy extension sources`（XL，medium risk）— **已合并**
  删除遗留的 `tools-src/` 与 `channels-src/` 源码树，更新工作区排除、注册表 JSON、构建脚本与 CI 范围，WIT 运行时支持保持完整。
- **[PR #6598](https://github.com/nearai/ironclaw/pull/6598)** `Rename filesystem store types`（XL，medium risk）— **待合并**
  将 `Filesystem*Store` 重命名为干净的 `*Store`，冲突 trait 改名为 `*StorePort`，为品牌中性化铺路。

### 🔧 缺陷修复
- **[PR #6592](https://github.com/nearai/ironclaw/pull/6592)** `fix(webui): stop WebChat 'Disconnected' lockout` — **已关闭/合并**
  修复 #6581（WebChat 头部徽章卡死在"已断开"/"重新连接中"）。根因：后端速率限制预算对下游拒绝请求未被消耗 + 导航竞态导致 SSE 重连抖动。双重修复落地。
- **[PR #6601](https://github.com/nearai/ironclaw/pull/6601)** `ops: add admin-config-preserving extension reset`（L）— **已关闭/合并**
  新增 `scripts/reset-extension-state.sh`，在保留租户管理员配置的前提下重置用户级扩展状态，配套 #6520 体系使用。
- **[PR #6602](https://github.com/nearai/ironclaw/pull/6602)** `fix(live-qa): operator extension-configuration values as a sequence` — **已关闭**
  Canary run [30055666215](https://github.com/nearai/ironclaw/actions/runs/30055666215) 显示全部 8 个 Slack 依赖 shard 在 admin bootstrap 处因 `values: invalid type: map` 失败；改为 sequence 后修复 422 错误。
- **[PR #6603](https://github.com/nearai/ironclaw/pull/6603)** `test(playwright): reconcile suite to merged #6520 lifecycle` — **已关闭**
  修复 #6520 合并后三个 Playwright shard 转红的契约对齐问题，并修复暴露的两个产品侧缺陷。
- **[PR #6606](https://github.com/nearai/ironclaw/pull/6606)** `fix(live-qa): map setup values onto declared admin-group handles` — **已关闭**
  衔接 #6602：Slack admin-group 句柄从裸 source 名映射至声明值，消解 `HTTP 400 invalid_value`。
- **[PR #6607](https://github.com/nearai/ironclaw/pull/6607)** `fix(automations): inherit implicit source channel target` — **已关闭**
  自动化系统继承隐式源频道目标，通过活跃 channel binding 服务解析 `reply:<uuid>`。

### 🤖 依赖与基础设施
- **[PR #6579](https://github.com/nearai/ironclaw/pull/6579)** dependabot: 一次更新 28 个 `everything-else` 组包（async-trait、thiserror、uuid 等）
- **[PR #6361](https://github.com/nearai/ironclaw/pull/6361)** dependabot: serde/serde_json 序列化组更新
- **[PR #6428](https://github.com/nearai/ironclaw/pull/6428)** dependabot: tokio 生态组（tokio、tokio-postgres-rustls、tokio-util、tower-http）更新

> **整体评估**：今日在扩展生命周期重构、v1 发布阻塞项清理、品牌中性化三条主线均有实质推进，代码与测试同步收口，项目处于 **稳健冲刺状态**。

---

## 4. 社区热点

### 🔥 讨论最活跃的 Issues

| 排名 | Issue | 评论数 | 状态 | 摘要 |
|---|---|---|---|---|
| 1 | [#6389](https://github.com/nearai/ironclaw/issues/6389) | **11** | 已关闭 | §5.11 Phase 4：合并 `build_local_runtime` + `build_production_shaped` 为单一参数化的 `build_runtime(cfg)` |
| 2 | [#6274](https://github.com/nearai/ironclaw/issues/6274) | 5 | 已关闭 | 完成 `DeploymentConfig` 作为主组合配置（§4.4/§5.6/§5.11） |
| 3 | [#6524](https://github.com/nearai/ironclaw/issues/6524) | 3 | OPEN | Epic: 封闭式能力与用户旅程测试平台 |
| 4 | [#6544](https://github.com/nearai/ironclaw/issues/6544) | 2 | 已关闭 | v1-checklist: 无 UI/CLI 配置 `IRONCLAW_REBORN_SLACK_PERSONAL_OAUTH_REDIRECT_URI` |
| 4 | [#4548](https://github.com/nearai/ironclaw/issues/4548) | 2 | OPEN | Bug: 携带工具时 chat completion 序列化重复 `model` 字段（DeepSeek 400） |
| 4 | [#6522](https://github.com/nearai/ironclaw/issues/6522) | 2 | OPEN | v1-checklist: 无 Telegram 本地/agent.near.ai 安装指引 |
| 4 | [#6534](https://github.com/nearai/ironclaw/issues/6534) | 2 | OPEN | v1-checklist: 托管部署中 Google OAuth 配置无法应用 |

### 📌 讨论背后的诉求
- **架构收敛诉求**：#6389、#6274 两高评论 Issue 均关于消除"双轨运行时装配路径"，反映出项目对 **统一配置 + 统一入口** 的强烈呼声。
- **v1 阻塞的运营痛点**：#6544、#6522、#6534 集中暴露托管环境（`agent-stg.near.ai`）下 OAuth/Channel 配置 **缺乏运维界面** 的问题，直接影响 v1 准入。
- **测试体系空白**：#6524 提出的"是否能机械回答每个能力/用户旅程是否有确定性覆盖"反映 **测试覆盖度不透明** 是当前核心痛点。

---

## 5. Bug 与稳定性

### 🔴 高严重度（功能不可用 / 数据丢失风险）
| Issue | 描述 | 修复状态 |
|---|---|---|
| [#6605](https://github.com/nearai/ironclaw/issues/6605) | Reborn: Telegram 扩展重装后入站静默死锁（缺 `telegram_webhook_secret`） | ⚠ 暂无 PR |
| [#6590](https://github.com/nearai/ironclaw/issues/6590) | Windows 上 `serve` 失败（local-dev/local-dev-yolo 报错："workspace root must not overlap /skills"） | ⚠ 暂无 PR |
| [#6575](https://github.com/nearai/ironclaw/issues/6575) | Ubuntu `ironclaw onboard` 后 systemd 服务立即报错（v1.0.0-rc.1） | ⚠ 暂无 PR |

### 🟠 中严重度（功能受损但有 workaround）
| Issue | 描述 | 修复状态 |
|---|---|---|
| [#6581](https://github.com/nearai/ironclaw/issues/6581) | agent-stg 出现 429 Too Many Requests（WebChat v2 SSE） | ✅ [#6592](https://github.com/nearai/ironclaw/pull/6592) 已合并 |
| [#6541](https://github.com/nearai/ironclaw/issues/6541) | WebUI 持续"Reconnecting" | ⚠ 与 #6581 同源，待观察 |
| [#4548](https://github.com/nearai/ironclaw/issues/4548) | DeepSeek 400 错误（重复 `model` 字段） | ⚠ **已开放 46 天**，无 PR |
| [#6591](https://github.com/nearai/ironclaw/issues/6591) | 托管环境 `ironclaw service` 命令族不可用 | ⚠ workaround: 通过 UI 重启 |
| [#6521](https://github.com/nearai/ironclaw/issues/6521) | agent-stg 上无 `ironclaw` CLI | ⚠ workaround: 通过 UI 重启 |

### 🟡 已闭环
- [#6462](https://github.com/nearai/ironclaw/issues/6462) 侧边栏线程列表分页失效 — ✅ 已关闭
- [#6548](https://github.com/nearai/ironclaw/issues/6548) 托管 staging 预览认证墙阻断 webhook — ✅ 已关闭

> **稳定性提示**：Windows 与托管环境的运维体验仍是 v1 之前必须解决的主要短板；#4548（DeepSeek 兼容性）已悬置超 6 周，建议优先处理。

---

## 6. 功能请求与路线图信号

### 🌟 明确的新 Epic（已立项）
- **[#6524](https://github.com/nearai/ironclaw/issues/6524)** Hermetic capability and journey testing platform — 闭环测试覆盖度
- **[#6565](https://github.com/nearai/ironclaw/issues/6565)** Reliable Skill Discovery, Routing, and Activation — 技能发现鲁棒性
- **[#6578](https://github.com/nearai/ironclaw/issues/6578)** Admin-Managed Agents as UserId Subjects — 管理员代理身份（高风险）

### 💓 心跳（Heartbeat）功能 MVP 正在落地
按顺序三阶段推进，结构清晰：
1. [#6569](https://github.com/nearai/ironclaw/issues/6569) 定义心跳契约与调度语义
2. [#6570](https://github.com/nearai/ironclaw/issues/6570) 通过现有 trigger 流水线实现持久化心跳调度
3. [#6571](https://github.com/nearai/ironclaw/issues/6571) 心跳交付 / HEARTBEAT_OK 抑制 / 去重 / 全轮回归

> 该功能有望纳入 v1.x 后续版本。

### 🎨 品牌中性化（Reborn → IronClaw）
- [#6550](https://github.com/nearai/ironclaw/issues/6550) 从用户面 CLI/WebUI 移除"Reborn"
- [#6551](https://github.com/nearai/ironclaw/issues/6551) 引入默认 IronClaw 配置与运行时契约（保留 `IRONCLAW_REBORN_*` 兼容别名）
- [#6552](https://github.com/nearai/ironclaw/issues/6552) 重命名内部 Reborn crate/类型/测试/文档

配套 PR 正在路上：[#6556](https://github.com/nearai/ironclaw/pull/6556)（产品身份默认化）、[#6559](https://github.com/nearai/ironclaw/pull/6559)（配置契约规范化），均处于 OPEN 状态。

### 🛠 其它可纳入 v1.x 的功能
- [#6604](https://github.com/nearai/ironclaw/pull/6604) `fix(reborn): fall back to web-app delivery when a run's final-reply channel is removed mid-run` — 来自一次真实事件：用户在 Telegram 让 agent 卸载 Telegram，agent 卸载成功后尝试向刚卸载的频道发送告别语。OPEN，待合并。
- [#6597](https://github.com/nearai/ironclaw/pull/6597) `fix(skills): make model review available skills` — 改善模型对可用技能的扫描行为。

---

## 7. 用户反馈摘要

### 😣 痛点集中点
1. **托管环境运维能力缺失**：连续 6 条 v1-checklist Issue（#6521、#6541、#6544、#6548、#6581、#6591）来自同一用户 `sergeiest`，反映 **"agent-stg.near.ai 几乎是黑盒"**：CLI 缺失、OAuth 配置无持久化入口、webhook 被预览认证墙拦截、`ironclaw service` 命令族不可用、SSE 流触发 429。Workaround 仅为 UI 重启。**这是 v1 发布最严重的一类体验阻塞。**
2. **Google/Telegram/Slack 安装指引缺失**：#6522、#6534 指出无文档说明如何在本地或托管环境接入 Channel，Google 集成的 OAuth 配置在托管环境根本写不进去。
3. **桌面端/边缘平台兼容**：#6590（Windows）、#6575（Ubuntu systemd）显示项目在跨平台一键 onboarding 仍有显著差距。

### 😊 满意信号
- [#6520](https://github.com/nearai/ironclaw/pull/6520) 合并后触发的 Playwright 三个 shard 与 issue 中多个事件得到快速 follow-up（#6601–#6607 串联修复），显示团队 **响应速率与质量俱佳**。
- [#6592](https://github.com/nearai/ironclaw/pull/6592) 同时修复 WebChat "Disconnected" 卡死的两个独立 bug，体现工程深度。
- Canary run 流程（[run 30055666215](https://github.com/nearai/ironclaw/actions/runs/30055666215)、[30056093903](https://github.com/nearai/ironclaw/actions/runs/30056093903)、[30058129072](https://github.com/nearai/ironclaw/actions/runs/30058129072)）形成稳定的质量门禁。

---

## 8. 待处理积压

### ⚠️ 长期未响应的关键 Issue
| Issue | 标题 | 开放天数 | 备注 |
|---|---|---|---|
| [#4548](https://github.com/nearai/ironclaw/issues/4548)

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目日报
**日期：2026-07-24 | 数据来源：github.com/netease-youdao/LobsterAI**

---

## 1. 今日速览

LobsterAI 仓库今日整体活跃度**偏低**。过去 24 小时共有 3 条 Issue 活跃、3 条 PR 更新，但所有 Issue 均被自动标记为 **stale**（长期无响应），社区互动度极低（0 点赞、每个 Issue 仅 1 条评论）。PR 端出现 2 条当日关闭（其中 1 条为发版 PR），合并节奏呈现"轻量迭代"特征。**值得注意的是：发版 PR #2379 已关闭，但仓库今日并无新 Release 释出**，发版流程与版本发布之间存在脱节，需关注 CI/CD 链路是否正常。

---

## 2. 版本发布

🚫 **今日无新版本发布。**

尽管 PR #2379（Release/2026.7.20）已关闭，但 GitHub Releases 页面未同步产出对应发布物，建议维护者核实发版流水线状态。

---

## 3. 项目进展

今日关闭的 2 条 PR 中，包含 1 条发版 PR 与 1 条功能打磨 PR：

| PR | 标题 | 状态 | 影响范围 | 链接 |
|---|---|---|---|---|
| #2379 | Release/2026.7.20 | ✅ CLOSED | renderer / build / docs / main / openclaw / cowork / Windows artifacts | [查看](https://github.com/netease-youdao/LobsterAI/pull/2379) |
| #2378 | feat(skin): polish AI skin appearance behavior | ✅ CLOSED | renderer / main / cowork | [查看](https://github.com/netease-youdao/LobsterAI/pull/2378) |

**进展评估：**
- **PR #2378（AI 皮肤外观打磨）** 推进了用户界面的体验统一：① 统一 artifact 新增标签页与任务搜索界面的 AI 皮肤展示；② 选中应用已保存的皮肤并按"最新优先"排序；③ 实现标准主题与 AI 皮肤互斥，并为每个皮肤绑定精确主题；④ 简化 AI 皮肤设置流程。属于渐进式 UI 优化。
- **PR #2379（发版 PR）** 标志着一个版本迭代周期在代码层面完成，但未形成可下载的发布产物。

**整体判断**：项目处于**小步快跑阶段**，主线功能稳定，今日以 UI 打磨和内部发版流转为主，未见重大架构变更。

---

## 4. 社区热点

📊 **互动度普遍偏低**。今日 3 条活跃 Issue 与 3 条 PR 合计点赞数均为 **0**，评论数最高仅 1 条，表明社区反馈链路相对冷清。

最具代表性的活跃 Issue：

- **#1273 [Bug] sql.js (WASM) 高频操作导致 `memory access out of bounds` 崩溃**
  创建于 2026-04-02，今日被 stale 机器人标记。涉及存储引擎底层的可靠性问题，属于被低估的"准潜伏"严重 Bug。
  🔗 [查看 Issue](https://github.com/netease-youdao/LobsterAI/issues/1273)

- **#1265 [Feature] 基于 AGENT 绑定 IM 机器人和模型**
  用户陈述了多 Agent 场景下绑定 IM 机器人 + 模型统一带来的痛点，需要差异化配置能力。
  🔗 [查看 Issue](https://github.com/netease-youdao/LobsterAI/issues/1265)

- **#1263 [Bug] 定时任务在 UI 上重复显示两条**
  涉及 API rate limit 错误提示与 UI 状态同步问题。
  🔗 [查看 Issue](https://github.com/netease-youdao/LobsterAI/issues/1263)

---

## 5. Bug 与稳定性

按严重程度排序：

| 优先级 | Issue | 严重程度 | 描述 | 是否有 Fix PR |
|---|---|---|---|---|
| 🔴 P0 | [#1273](https://github.com/netease-youdao/LobsterAI/issues/1273) | **高危** | sql.js WASM 内存越界访问导致应用不可恢复崩溃，且 `save()` 使用非原子 `fs.writeFileSync` 存在数据库**永久损坏**风险 | ❌ 无 |
| 🟡 P2 | [#1263](https://github.com/netease-youdao/LobsterAI/issues/1263) | 中 | 定时任务 UI 重复渲染两条，并提示 API rate limit；可能源于限流后端重试导致重复入队 | ❌ 无 |

> **风险提示**：#1273 描述的存储引擎问题在"长时间 Cowork 会话 + 消息流密集推送"场景下必然触发，一旦发生将直接导致用户数据不可逆丢失。**强烈建议优先处理**。

---

## 6. 功能请求与路线图信号

**#1265 多 Agent 绑定差异化配置**（链接：[查看](https://github.com/netease-youdao/LobsterAI/issues/1265)）

用户诉求提炼：
1. **角色分工**：调度型 Agent vs. PPT 生成型 Agent，便于组建"Agent 团队"
2. **模型差异化**：根据任务特性选用擅长模型（编程模型 vs. 推理模型）

**入库可能性评估**：🟡 **中等**。该需求契合当前多 Agent 趋势，但需要架构层重构（IM 机器人配置 → Agent 维度映射），短期内进入路线的概率不高。**今日无相关 PR 提及**，建议维护者回应以明确方向。

---

## 7. 用户反馈摘要

从现有 Issue 中可提炼的真实痛点：

| 痛点类别 | 反馈来源 | 摘要 |
|---|---|---|
| **数据可靠性** | #1273 | 高频 Cowork 会话下数据库崩溃风险，数据可能永久损坏 |
| **多 Agent 灵活性** | #1265 | 当前所有 Agent 共享同一套 IM 机器人 + 模型，无法按角色配置 |
| **API 限流体验** | #1263 | 触发 rate limit 后 UI 出现重复任务项，状态显示混乱 |
| **用户体验细节** | PR #2378 | 用户希望 AI 皮肤与标准主题互斥，避免样式冲突 |

**整体满意度**：从有限样本看，用户主要集中在**功能缺陷反馈**而非使用体验赞美，项目口碑需通过 Bug 修复与多 Agent 能力落地来巩固。

---

## 8. 待处理积压

以下 Items 已标记 `[stale]` 或长期未响应，建议维护者本周内集中清理：

| 编号 | 类型 | 状态 | 停滞时长 | 备注 |
|---|---|---|---|---|
| [#1273](https://github.com/netease-youdao/LobsterAI/issues/1273) | Issue | ⚠️ Stale | ~3 个月 | 高危 Bug，无修复 PR |
| [#1265](https://github.com/netease-youdao/LobsterAI/issues/1265) | Issue | ⚠️ Stale | ~3 个月 | 重要 Feature Request，需维护者回复 |
| [#1263](https://github.com/netease-youdao/LobsterAI/issues/1263) | Issue | ⚠️ Stale | ~3 个月 | UI Bug，影响日常使用 |
| [#1277](https://github.com/netease-youdao/LobsterAI/pull/1277) | PR | 🟡 OPEN | dep 升级 | dependabot 提议 Electron 40.2.1 → **43.1.1**（跨多个大版本），风险较高，需人工 review |

> **特别提醒**：PR #1277 涉及 Electron 大版本升级（40 → 43），跨 3 个大版本可能引入破坏性变更，建议维护者评估后再合并，避免影响 PR #2379 (2026.7.20) 已发版的兼容性。

---

## 📌 维护者行动建议（按优先级）

1. **P0**：响应 #1273，确认是否在内部已修复，发布 hotfix 防止数据丢失事件扩大
2. **P0**：核实 #2379 发版 PR 与 Release 产物的同步状态
3. **P1**：评审 #1277 的大版本升级风险，制定 Electron 升级计划
4. **P2**：回复 #1265、#1263 的 stale 标记，归并或归档无关 issue
5. **P2**：建立 Issue 响应 SLA（如 7 天内首响应），降低 stale 比率

---

*报告生成时间：2026-07-24 | 数据周期：过去 24 小时 UTC*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报

**报告日期：** 2026-07-24
**项目：** [moltis-org/moltis](https://github.com/moltis-org/moltis)

---

## 1. 今日速览

Moltis 在过去 24 小时内保持中高度活跃：共合并/关闭 5 个 PR、关闭 1 个 Issue，并完成 2 个版本发布（`20260723.02`、`20260723.03`）。合并内容集中在 Slack 安全加固、会话时间显示优化、依赖升级三大方向，体现出"安全修复 + 用户体验打磨"的双线节奏。项目整体健康度良好，无待合并 PR 积压，主要 Bug 均有对应修复提交。

---

## 2. 版本发布

过去 24 小时发布 2 个版本（均标注 `20260723`，推测为昨日构建流水线的连续迭代）：

| 版本 | 链接 | 说明 |
|------|------|------|
| 20260723.02 | [Release](https://github.com/moltis-org/moltis/releases/tag/20260723.02) | 早期版本号（建议查阅 Release Notes 确认内容） |
| 20260723.03 | [Release](https://github.com/moltis-org/moltis/releases/tag/20260723.03) | 较新版本号（建议查阅 Release Notes 确认内容） |

⚠️ **提示：** 摘要中未提供 release notes 详情，建议升级前对照两个版本的 changelog 确认变更范围与潜在破坏性变更（特别是 Slack 相关的 `MOLTIS_SLACK_API_BASE_URL_ALLOWLIST` 环境变量为新增配置项）。

---

## 3. 项目进展

今日 5 个 PR 全部合并/关闭，主要推进内容如下：

| PR | 标题 | 关键价值 | 链接 |
|----|------|----------|------|
| [#1162](https://github.com/moltis-org/moltis/pull/1162) | fix(web): show dates for older sessions | 修复会话列表对昨日/本周/更早会话显示逻辑，附带四项浏览器测试 | 高 |
| [#1163](https://github.com/moltis-org/moltis/pull/1163) | fix(slack): challenge unknown allowlist DMs with OTP | 修复 Slack 允许列表"空即开放"语义漏洞，统一 OTP 自审批流程 | 高 |
| [#1164](https://github.com/moltis-org/moltis/pull/1164) | fix(slack): allow operator-approved api base hosts | 新增 `MOLTIS_SLACK_API_BASE_URL_ALLOWLIST`，允许内部代理但屏蔽云元数据端点 | 中 |
| [#1124](https://github.com/moltis-org/moltis/pull/1124) | Add context command support for chat turns | 引入 `chat.context_command` 配置项，每次聊天回合前注入运行时上下文 | 中 |
| [#1161](https://github.com/moltis-org/moltis/pull/1161) | chore(deps): bump astro 7.0.9→7.1.3 | 文档站依赖升级 | 低 |

**整体评估：** 项目在 Slack 多通道安全模型与前端会话体验两条线上完成了一轮较扎实的迭代，跨平台（Microsoft Teams / Signal / Matrix）的允许列表漏洞也得到同步修复，安全姿态整体向前迈进明显。

---

## 4. 社区热点

今日热度普遍偏低：

- **讨论最多 Issue：** [#1095](https://github.com/moltis-org/moltis/issues/1095)（Podman 不可用）—— 1 条评论，0 👍
- **其余条目** 互动均为 0 评论、0 👍

**诉求分析：** 社区反馈规模较小，可能受工作日/统计窗口影响。从内容看，开发者更关注实际部署可行性（容器化、PaaS 集成）而非功能扩展。建议维护者主动@相关 reporter 推动长期未回复的 Issue。

---

## 5. Bug 与稳定性

| 严重程度 | Issue | 状态 | 是否有修复 | 说明 |
|----------|-------|------|------------|------|
| 🟡 中 | [#1095 Podman is not working via moltis](https://github.com/moltis-org/moltis/issues/1095) | OPEN（创建于 2026-06-03，今日仍活跃） | ❌ 未发现对应 fix PR | 自首次报告已超 50 天未解决，影响使用 Podman 部署的用户 |
| 🟢 低 | [#1108 Session list lacks dates for past-day sessions](https://github.com/moltis-org/moltis/issues/1108) | 已 CLOSED | ✅ 已被 [#1162](https://github.com/moltis-org/moltis/pull/1162) 修复并合并 | UI 显示问题，影响可读性但不影响功能 |

**稳定性观察：** [#1095](https://github.com/moltis-org/moltis/issues/1095) 作为跨月未修复的 Bug，需要维护者优先关注；社区已出现"长期无响应"的迹象。

---

## 6. 功能请求与路线图信号

- **[#1124 `chat.context_command`](https://github.com/moltis-org/moltis/pull/1124)：** 该功能已合并，标志 Moltis 在"可编排运行时上下文"方向迈出第一步。预计后续可能扩展到定时/事件驱动的上下文注入。
- **安全白名单机制：** [#1164](https://github.com/moltis-org/moltis/pull/1164) 引入的 `MOLTIS_SLACK_API_BASE_URL_ALLOWLIST` 暗示项目正逐步把"通道层"的策略配置化，未来可能扩展到 Matrix、Teams 等通道的自定义 API 端点。
- **无明确新功能请求 Issue 出现在今日数据中**，路线图信号主要来自已合并的 PR 方向。

---

## 7. 用户反馈摘要

由于评论数据极少（仅 #1095 含 1 条评论，摘要未提供），可提炼的痛点有限：

- **容器化部署痛点：** 用户在 [#1095](https://github.com/moltis-org/moltis/issues/1095) 中报告 Podman 集成失败，反映 Moltis 在非 Docker 容器运行时下的兼容性验证尚不充分。
- **会话浏览体验：** [#1108](https://github.com/moltis-org/moltis/issues/1108) 显示用户希望 Web UI 能更直观地区分历史会话，已通过 [#1162](https://github.com/moltis-org/moltis/pull/1162) 解决，预期用户满意度将回升。
- **整体满意度信号不足：** 缺少对功能满意度的直接反馈，建议维护者在关闭 Issue 时主动征集用户验证。

---

## 8. 待处理积压

| 条目 | 类型 | 链接 | 已开 | 风险 |
|------|------|------|------|------|
| [#1095](https://github.com/moltis-org/moltis/issues/1095) | Bug（Podman） | Issue | ~51 天 | 🟡 中 — 影响非 Docker 用户的部署路径，且无 fix PR |
| [#1124](https://github.com/moltis-org/moltis/pull/1124) | 功能 PR | PR | ~39 天 | 🟢 低 — 今日已关闭，无需积压关注 |
| [#1108](https://github.com/moltis-org/moltis/issues/1108) | Bug（UI） | Issue | ~49 天 | 🟢 已关闭 |

**建议：** 维护者应优先处理 [#1095](https://github.com/moltis-org/moltis/issues/1095)，避免成为长期被遗忘的 issue；如近期无修复计划，建议添加 `help wanted` 或 `needs-info` 标签明确状态。

---

### 📊 项目健康度小结

| 维度 | 评级 | 说明 |
|------|------|------|
| 代码迭代速度 | ⭐⭐⭐⭐ | 5 个 PR 当日合并，节奏紧凑 |
| 社区互动 | ⭐⭐ | 评论与反应数普遍为 0 |
| 安全响应 | ⭐⭐⭐⭐⭐ | Slack 多通道安全漏洞集中修复，姿态积极 |
| Issue 响应 | ⭐⭐⭐ | 多数 Issue 及时关闭，但存在 50+ 天未解 Bug |
| 依赖治理 | ⭐⭐⭐⭐ | 自动依赖升级机制运转正常 |

*本报告基于 GitHub 公开数据自动生成，数据时间窗口为 2026-07-23 至 2026-07-24。*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw (QwenPaw) 项目动态日报

**日期**：2026-07-24  
**数据范围**：过去 24 小时 GitHub 活动

> ⚠️ **说明**：用户提交的仓库名为 `CoPaw`，但所有 issue/PR 链接均指向 `agentscope-ai/QwenPaw`。本报告以数据来源实际为准，按 "QwenPaw" 项目进行报道。

---

## 1. 今日速览

QwenPaw 过去 24 小时维持**高强度迭代节奏**：38 条 Issues 更新（25 新开/活跃、13 已关闭）、50 条 PR 更新（29 待合并、21 已合并/关闭），并发布 `v2.0.1-beta.2` 预发布版本。社区焦点集中在 **v2.0 升级带来的回归问题**（性能开销、MCP 工具兼容性、定时任务会话冲突、Windows shell 执行）和 **新功能诉求**（Docker 热更新、UI 模式简化、撤销重做）。整体活跃度高，但 v2.0.0.post3/post4 暴露的稳定性问题已引发用户密集反馈，发布前压力测试呼声强烈。

---

## 2. 版本发布

### 🚀 v2.0.1-beta.2（已发布）

**链接**：[PR #6329](https://github.com/agentscope-ai/QwenPaw/pull/6329) 等

**主要变更**：
- **CI/桌面端**：统一 Release Orchestrator，Web 端构建在桌面构建完成后才触发（@yutai78786，#6329）
- **Runtime**：新推理块出现时旋转 text message，避免显示错位（@zhaozhuang521，#6310）
- **Channels**：支持内置 Channel 依赖按需安装（@hongxicheng，#6387）
- **Console**：心跳秒数向上取整（修复 29s 舍入为 0 的问题）（@AaronZ345，#6411）
- **Providers**：清理 Gemini schema 中带 annotation 的 null 分支（@AaronZ345，#6410）
- **Local Models**：忽略非对象类型的 tool_call JSON（@AaronZ345，#6409）
- **Governance**：`audit_level=none` 时不再写入审计事件（@patrick-andstar，[#6368](https://github.com/agentscope-ai/QwenPaw/issues/6368)）
- **Inbox**：新审批到达时侧边栏 wobble 动画 + 彩色徽章（@lalaliat，[#6396](https://github.com/agentscope-ai/QwenPaw/pull/6396)）

**破坏性变更**：未明示（pre-release 标签）。  
**迁移注意**：从 v2.0.0.post3/post4 升级建议在开发环境先验证 Windows shell 执行与 MCP 工具调用两条路径。

---

## 3. 项目进展

今日 21 个 PR 已合并/关闭，主要推进项：

| 类别 | PR | 说明 |
|---|---|---|
| 桌面端稳定性 | [#6225](https://github.com/agentscope-ai/QwenPaw/pull/6225) | 优雅关闭 Tauri 后端 sidecar（替代 SIGKILL） |
| Console 性能 | [#6393](https://github.com/agentscope-ai/QwenPaw/pull/6393) | 稳定 `messageQueue` memo、减少 SSE 重复解析 |
| 治理策略 | [#6390](https://github.com/agentscope-ai/QwenPaw/pull/6390) | tool_guard 检测规则桥接至 governance policy Phase 1 |
| 内存恢复 | [#6351](https://github.com/agentscope-ai/QwenPaw/pull/6351) | MEMORY.md 编辑失败后改为重读+写文件，避免反复重试 |
| 版本号 | [#6404](https://github.com/agentscope-ai/QwenPaw/pull/6404) | 主分支版本号升至 v2.0.1 |
| 提供商 | [#6268](https://github.com/agentscope-ai/QwenPaw/issues/6268) | 新增 AIOnly（聚合 190+ 模型）为内置提供商 |
| 工具提示 | [#6294](https://github.com/agentscope-ai/QwenPaw/issues/6294) | 修复 Skill Market 安装后页面未刷新看不到技能的问题 |

**整体评估**：v2.0.1 收尾节奏明显，性能、稳定性、治理三方面同步推进；新功能 PR（reranker、Scroll 重设计、QwenPaw Creator、computer-use、Codex/Qoder backend）正处于密集评审阶段。

---

## 4. 社区热点

按评论数排序的热门话题：

1. **🔥 [Issue #6307](https://github.com/agentscope-ai/QwenPaw/issues/6307)（6 评论）** — v2.0 相比 v1.x 每条简单对话回复多出 ~2 秒固定开销。**这是当前社区最大的性能争议点**，反映用户对 v2.0 架构改动的直接质疑。
2. **🔥 [Issue #6344](https://github.com/agentscope-ai/QwenPaw/issues/6344)（3 评论）** — Docker 部署缺少 Web 端热更新，每次重建容器都会丢失 Agent 动态安装的 Node/ffmpeg/LibreOffice 工具环境。
3. **[Issue #6342](https://github.com/agentscope-ai/QwenPaw/issues/6342)（3 评论）** — ReMe embedding 模型配置后无法确认是否生效，无任何向量化数据文件生成。
4. **[Issue #6363](https://github.com/agentscope-ai/QwenPaw/issues/6363)（3 评论，已关闭）** — 部分模型（GLM-5-Turbo、DeepSeek-V3）将 tool_call JSON 包在 markdown 围栏/XML 标签里，导致全部工具执行失败。
5. **[Issue #6316](https://github.com/agentscope-ai/QwenPaw/issues/6316)（3 评论）** — 建议 agent 类型 cron 任务支持指定固定 model。
6. **[Issue #6392](https://github.com/agentscope-ai/QwenPaw/issues/6392)（2 评论）** — 期望按对话 / 按智能体的 token 统计。
7. **[Issue #2999](https://github.com/agentscope-ai/QwenPaw/issues/2999)（2 评论，跨期活跃）** — 每次请求重建 MCP client + `list_tools()`，响应慢时容易引发 CancelledError（自 4 月 6 日创建至今仍在 OPEN）。

**诉求分析**：性能开销、Docker 持久化、可观测性（token/embedding 状态）是三大主线痛点；用户越来越关注 **升级体验** 与 **长期部署可持续性**。

---

## 5. Bug 与稳定性

按严重程度排列：

| 等级 | Issue | 描述 | 是否有修复 |
|---|---|---|---|
| 🔴 P0 | [#6401](https://github.com/agentscope-ai/QwenPaw/issues/6401) | 定时任务复用已有会话时**整体覆盖丢失历史记录**——高破坏性数据问题 | ❌ |
| 🔴 P0 | [#6307](https://github.com/agentscope-ai/QwenPaw/issues/6307) | v2.0 每回复固定 ~2s 开销 | ❌ |
| 🔴 P0 | [#6407](https://github.com/agentscope-ai/QwenPaw/issues/6407) | ReAct Agent 恢复会话时 tool_result 与 assistant 消息错位，OpenAI 兼容 API 报 400 | ❌ |
| 🟠 P1 | [#6405](https://github.com/agentscope-ai/QwenPaw/issues/6405) | v2.0 后 MCP 工具一直提示 "Tool not found"（命名空间 `[mcp-key]__[tool_name]` 后无法命中） | ❌ |
| 🟠 P1 | [#6406](https://github.com/agentscope-ai/QwenPaw/issues/6406) | Windows `execute_shell_command` 把多行 PowerShell 命令合并成一行（含 PR #6412 正在修复） | ✅ [PR #6412](https://github.com/agentscope-ai/QwenPaw/pull/6412) |
| 🟠 P1 | [#6362](https://github.com/agentscope-ai/QwenPaw/issues/6362) | 内置 MiniMax 供应商（M3 模型）**完全无法识别图片**，返回乱编答案 | ❌ |
| 🟠 P1 | [#6386](https://github.com/agentscope-ai/QwenPaw/issues/6386) | 工具被重复无限调用（Qwen3.6-35B-A3B-APEX GGUF 模型） | ❌ |
| 🟠 P1 | [#6376](https://github.com/agentscope-ai/QwenPaw/issues/6376)（已关闭） | v2.0.0.post3/post4 新增 loop 功能导致主进程崩溃——发布前测试不足 | ⚠️ 关闭（待验证） |
| 🟡 P2 | [#6239](https://github.com/agentscope-ai/QwenPaw/issues/6239) | Windows PATH 拼接丢失 `;` 分隔符，子进程找不到 npm 全局命令 | ❌ |
| 🟡 P2 | [#3015](https://github.com/agentscope-ai/QwenPaw/issues/3015)（已关闭） | MEMORY.md 写入失败反复重试浪费 token | ✅ [PR #6351](https://github.com/agentscope-ai/QwenPaw/pull/6351) |
| 🟡 P2 | [#6379](https://github.com/agentscope-ai/QwenPaw/issues/6379)（已关闭） | GPT Image 2 Tool 插件被安全护栏拦截（governance policy 误杀） | ⚠️ |

**关注点**：P0 级问题全部尚未提供 PR；其中 **#6401 历史记录覆盖丢失** 与 **#6407 OpenAI 兼容 API 400 错误** 为最紧急，需立即干预。

---

## 6. 功能请求与路线图信号

按"被纳入下一版本可能性"评估：

| 优先级 | Issue / PR | 内容 | 评估依据 |
|---|---|---|---|
| 🟢 高 | [#6344](https://github.com/agentscope-ai/QwenPaw/issues/6344) | Docker Web 端热更新 | 用户体量最大；AstrBot 已有成熟参考实现 |
| 🟢 高 | [#6316](https://github.com/agentscope-ai/QwenPaw/issues/6316) | agent cron 任务可指定 model | 与 v2.0 多模型架构方向一致 |
| 🟢 高 | [#6408](https://github.com/agentscope-ai/QwenPaw/issues/6408) | 对话撤销/重编辑（/undo） | 已有 Cherry Studio 参照，实现成本可控 |
| 🟢 高 | [#6392](https://github.com/agentscope-ai/QwenPaw/issues/6392) | 智能体级 token 统计 | 计费/可观测性刚需 |
| 🟡 中 | [#6413](https://github.com/agentscope-ai/QwenPaw/issues/6413) / [#6414](https://github.com/agentscope-ai/QwenPaw/issues/6414) | UI 简化"完整模式"、自定义提供商改名 | 用户体验补丁，迭代成本低 |
| 🟡 中 | [#6377](https://github.com/agentscope-ai/QwenPaw/issues/6377) | 形成特定工作的 API（HTTP 服务化智能体） | 产品形态扩展 |
| 🟡 中 | [#6403](https://github.com/agentscope-ai/QwenPaw/issues/6403) | Coding Mode IDE 加入 RobotFramework 语法高亮 | 利基需求 |
| 🟢 高 | [PR #6398](https://github.com/agentscope-ai/QwenPaw/pull/6398) + [#6399](https://github.com/agentscope-ai/QwenPaw/pull/6399) | ReMe 检索 reranker 后端 + UI 面板 | 与 #6342 直接对应，强烈建议合入 |
| 🟢 高 | [PR #6323](https://github.com/agentscope-ai/QwenPaw/pull/6323) | Scroll 上下文管理：分段压缩 + 持久化任务连续性 | 解决长会话稳定性问题 |
| 🟢 高 | [PR #6397](https://github.com/agentscope-ai/QwenPaw/pull/6397) | 第三方 agent 后端架构 + Codex/Qoder 集成 | 拓展生态 |
| 🟢 高 | [PR #6276](https://github.com/agentscope-ai/QwenPaw/pull/6276) | Browser 控制面/执行面分离 + Socket Pair 传输 | 关键基础设施 |
| 🟡 中 | [PR #5187](https://github.com/agentscope-ai/QwenPaw/pull/5187) | Windows Computer-Use（UIA + Tauri Control Mode） | 大型功能，评审周期长 |
| 🟡 中 | [PR #6284](https://github.com/agentscope-ai/QwenPaw/pull/6284) | QwenPaw Creator（脚本→分镜→视频） | 应用型插件 |

---

## 7. 用户反馈摘要

**痛点**：

- **升级体验差**：v2.0 升级后 MCP 工具失效（[#6405](https://github.com/agentscope-ai/QwenPaw/issues/6405)）、图片识别失效（[#6362](https://github.com/agentscope-ai/QwenPaw/issues/6362)）、Cron 历史丢失（[#6401](https://github.com/agentscope-ai/QwenPaw/issues/6401)）、性能变慢（[#6307](https://github.com/agentscope-ai/QwenPaw/issues/6307)），导致用户对"快速小版本"产生抵触。
- **Docker 部署不可持续**：每次重建容器丢失 Agent 工具环境，重装耗时过长（NAS/HDD 用户达 1.5 小时，见 [#6380](https://github.com/agentscope-ai/QwenPaw/issues/6380)）。
- **v2.0 架构暴露**：loop 功能引发主进程崩溃（[#6376](https://github.com/agentscope-ai/QwenPaw/issues/6376)），社区明确呼吁**发布前增加压力测试**。
- **可观测性不足**：embedding/vector 存储无任何状态可见（[#6342](https://github.com/agentscope-ai/QwenPaw/issues/6342)）；token 统计粒度太粗（[#6392](https://github.com/agentscope-ai/QwenPaw/issues/6392)）。
- **UI 困惑**：v2.0 引入"完整模式/精简模式"被广泛吐槽多余（[#6413](https://github.com/agentscope-ai/QwenPaw/issues/6413)）。

**满意点**：

- 桌面端从 SIGKILL 改为优雅关闭（[#6225](https://github.com/agentscope-ai/QwenPaw/pull/6225)）——Tauri 后端重启体验改善。
- MEMORY.md 写入恢复策略更新（[#6351](https://github.com/agentscope-ai/QwenPaw/pull/6351)）——回应了早期反馈。
- Inbox wobble 动画 + 彩色徽章（[#6396](https://github.com/agentscope-ai/QwenPaw/pull/6396)）——侧边栏交互改进。
- Skill Market 安装后即时可见（[#6294](https://github.com/agentscope-ai/QwenPaw/issues/6294)）。

**使用场景**：

- 自托管 Docker 长跑用户（Agent 装 Node/ffmpeg/LibreOffice）——[#6344](https://github.com/agentscope-ai/QwenPaw/issues/6344)
- NAS + HDD 家庭实验室用户——[#6380](https://github.com/agentscope-ai/QwenPaw/issues/6380)
- Windows 桌面端用户——[#6239](https://github.com/agentscope-ai/QwenPaw/issues/6239), [#6406](https://github.com/agentscope-ai/QwenPaw/issues/6406), [#6219](https://github.com/agentscope-ai/QwenPaw/issues/6219)
- 多模型接入用户（GLM/DeepSeek/Gemini/MiniMax）——[#6363](https://github.com/agentscope-ai/QwenPaw/issues/6363), [#6362](https://github.com/agentscope-ai/QwenPaw/issues/6362), [#6410](https://github.com/agentscope-ai/QwenPaw/pull/6410)
- 本地 GGUF 模型用户——[#6386](https://github.com/agentscope-ai/QwenPaw/issues/6386)

---

## 8. 待处理积压

需要维护者关注的历史 Issue / 长期

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw 项目动态日报

**报告日期：2026-07-24**
**项目地址**：[github.com/qhkm/zeptoclaw](https://github.com/qhkm/zeptoclaw)
**数据周期**：过去 24 小时

---

## 1. 今日速览

ZeptoClaw 过去 24 小时活跃度处于**低位但聚焦**状态：仅有 1 条 PR 和 2 条 Issue，均由维护者 qhkm 亲自发起/响应，尚未有第三方社区参与。整体工作量围绕一条**安全主线**展开——运行时子进程会继承宿主进程的完整环境（含 Provider 密钥等敏感凭据），以及超时未能可靠终止并回收进程树，属于 P1-Critical 级别安全问题。今日所有动作均属于**安全修复链路**上的推进，无新版本发布。

---

## 2. 版本发布

无新版本发布。本日报不展开。

---

## 3. 项目进展

**今日无 PR 被合并或关闭**。今日唯一一条待合并 PR 为：

- **#645** [OPEN] fix(runtime): scrub subprocess secrets and reap timed-out process trees
  [链接](https://github.com/qhkm/zeptoclaw/pull/645)
  作者：qhkm ｜ 评论：未统计 ｜ 👍：0

该 PR 旨在解决：
1. 运行时 shell 命令会继承 ZeptoClaw 完整的进程环境，导致 Provider 密钥等敏感凭据可能泄露至模型生成的命令；
2. `Command::output()` 在超时场景下未持续、可靠地终止并回收子进程；
3. Docker 容器存在类似资源泄漏问题（摘要中提到，但具体细节未展开）。

推进评价：项目在**运行时安全隔离**这一关键路径上迈出了实质一步，但由于 PR 尚未通过审查、CI 也尚未跑通（见 #646），整体向前推进的实际进度仍属"在路上"。

---

## 4. 社区热点

由于所有 Issue/PR 的**评论数均为 0**、👍 数均为 0，今日不存在严格意义上的"社区讨论热点"。从议题关注度与重要度判断，本日最值得关注的仍是以下两条 P1-Critical 安全相关条目：

- **#646** chore(ci): restore Clippy and cargo-deny checks on current toolchain
  [链接](https://github.com/qhkm/zeptoclaw/issues/646)
  标签：`chore, area:safety, P1-critical, dependencies`
  诉求：Rust 1.97.1 工具链下出现 5 个新的 Clippy 警告（涉及 channel、provider、binary-plugin 模块），且 `cargo-deny` 拒绝了当前依赖中存在漏洞版本的 `quick-xml 0.39.2` 与 `lopdf 0.40.0`。

- **#644** bug(safety): scrub subprocess environments and terminate process trees on timeout
  [链接](https://github.com/qhkm/zeptoclaw/issues/644)
  标签：`bug, area:safety, P1-critical`
  诉求：明确指出上述 #645 所要解决的子进程环境隔离与超时进程树回收问题。

**诉求分析**：两项议题都直指"安全基线"——一条是**依赖与静态检查基线**（CI 红线），一条是**运行时安全语义基线**（凭据隔离、进程生命周期）。两者由同一作者在同一日开启，体现出维护者对项目安全姿态（security posture）的主动收紧。

---

## 5. Bug 与稳定性

| 严重程度 | 编号 | 标题 | 状态 | 是否有对应 fix PR |
|---|---|---|---|---|
| **P1-Critical** | [#644](https://github.com/qhkm/zeptoclaw/issues/644) | bug(safety): scrub subprocess environments and terminate process trees on timeout | OPEN，0 评论 | ✅ 已有 [#645](https://github.com/qhkm/zeptoclaw/pull/645) 正在尝试修复 |
| **P1-Critical**（安全/依赖维度） | [#646](https://github.com/qhkm/zeptoclaw/issues/646) | chore(ci): restore Clippy and cargo-deny checks on current toolchain | OPEN，0 评论 | ⏳ 当前无独立 PR，但预期修复会与 #645 一同处理或在 #645 合入后跟进 |

补充说明：
- `quick-xml 0.39.2` 与 `lopdf 0.40.0` 当前被 `cargo-deny` 拒绝，存在已知漏洞，建议优先升级到上游已修复版本。
- Rust 1.97.1 触发的 5 个新 Clippy 警告集中于 channel / provider / binary-plugin 三处模块，建议在升级工具链时同步修复以保持 CI 全绿。

---

## 6. 功能请求与路线图信号

今日**无新增功能请求（feature request）类 Issue**。从仅有的两条安全相关条目可推断以下路线图信号：

1. **运行时安全隔离将成为下一阶段重点**：#644 描述的问题（凭据泄露 + 进程孤儿）属于"必须尽快闭环"的 P1 项，几乎可以确定会进入下一个版本。
2. **CI 基线收紧**：#646 反映出项目对 Clippy 与 `cargo-deny` 的策略是"零容忍"，未来 PR 的合入门槛可能进一步抬升（必须工具链干净、依赖无已知漏洞）。
3. **Docker 容器资源管理**：#645 摘要中提到 Docker 容器存在类似进程/资源回收问题，暗示项目在容器化部署场景下也存在被纳入路线图的潜在议题。

---

## 7. 用户反馈摘要

由于今日所有 Issue/PR **评论数均为 0**，暂无可提炼的第三方用户评论、痛点或场景反馈。当前反馈信号 100% 来自维护者本人提交的安全自查结论，反映的是**主动质量保障动作**，而非社区驱动型反馈。

---

## 8. 待处理积压

虽然今日新开条目均无积压，但结合历史情况，以下事项需要维护者持续关注：

- **#645** [PR, OPEN]：尚无任何 review 评论与 CI 反馈，建议维护者在合入前自行确认：
  - 子进程环境清理是否覆盖所有 runtime（不仅限于 Rust `Command`）；
  - Docker 容器侧的进程树回收实现；
  - 是否引入回归测试覆盖凭据泄露与进程孤儿两个场景。
- **#646** [Issue, OPEN]：`quick-xml` 与 `lopdf` 的升级路径需要评估 API 兼容性，避免连带引入破坏性变更。
- 今日之前更早的 P1 / 安全相关 Issue（如有）尚未在本次数据中体现，建议回顾项目 Issue 列表确认是否存在长期未响应的 P1 积压。

---

### 项目健康度速判

| 维度 | 状态 |
|---|---|
| 版本节奏 | ➖ 无新版本 |
| 安全姿态 | 🟢 主动收紧（自报 P1 + 主动开 PR 修复） |
| 社区参与度 | 🔴 当日无第三方互动（评论/👍 均为 0） |
| CI / 依赖健康度 | 🟡 工具链与依赖存在基线红，需 #646 收尾 |
| 整体评价 | 🟡 **偏静态的维护日**，但安全方向正确推进，等待 #645/#646 闭环 |

> 建议：维护者在 #645 / #646 上保持高优先级推进，并在 PR 描述中补充回归测试与依赖升级兼容性说明，以便社区在零评论状态下也能基于文档完成 review。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报

**日期：2026-07-24** | 数据来源：GitHub Issues & Pull Requests

---

## 1. 今日速览

ZeroClaw 仓库今日保持**高强度开发节奏**：过去 24 小时共有 50 条 Issues 更新（43 条新开/活跃，7 条关闭）与 50 条 PRs 更新（49 条待合并，仅 1 条已合并/关闭），无新版本发布。从活跃度看，社区端信号强烈——多个 S0/S1 级数据丢失与流程阻塞 Bug 被集中上报（集中在 Telegram / WeChat 长轮询与 Cron 锁上），同时 A2A 协议互操作、PostgreSQL 会话后端等架构级工作正在快速推进。维护者侧的 PR 审核积压明显（49 待合并 vs 1 已合并），但提交质量较高，多个 PR 已带有详细 RFC 引用与基线证据。整体判断：**项目处于 v0.9.0 发布前的高压冲刺期**，稳定性债与架构演进并存。

---

## 2. 版本发布

⚠️ **无新版本发布**。从 Issue #9290（Windows 桌面安装器在 v0.8.3 上启动失败）判断，社区仍停留在 v0.8.3；v0.9.0 的工作通过 Tracker [#7432](https://github.com/zeroclaw-labs/zeroclaw/issues/7432) 进行协调，但尚未达到发版条件。

---

## 3. 项目进展

今日仅有 **1 条 PR 被合并/关闭**，合并速率偏低，可能反映维护者正在集中精力审核大型 PR：

| PR | 标题 | 影响 |
|---|---|---|
| [#9301](https://github.com/zeroclaw-labs/zeroclaw/pull/9301) | `chore(deps): bump stagex/core-filesystem` (Dependabot) | 容器构建依赖更新，常规维护 |

**实质性进展集中在未合并但已更新的 PR 上**，按主题分类：

- **A2A 协议互操作 Phase 1**：[#9324](https://github.com/zeroclaw-labs/zeroclaw/pull/9324) 实现了 RFC #9106 的第一阶段，提供四个 `a2a_*` 工具、共享 Serde wire model，以及默认关闭的 `[a2a.client]` 配置块，标志着 ZeroClaw 正式迈向跨 Agent 互操作。
- **PostgreSQL 会话后端**：[#9251](https://github.com/zeroclaw-labs/zeroclaw/pull/9251)（XL 级）将 PostgreSQL 定位为**首个正式支持的会话后端**，按 @Audacity88 的"先证明一条完整路径"方针收敛了原本的五后端矩阵。
- **流式对话修复**：[#9325](https://github.com/zeroclaw-labs/zeroclaw/pull/9325) 修复流式用户回合被小模型误读为日志负载的问题（Ollama llama3.2 重现），针对 Issue #8999。
- **Windows 原生 Shell 支持**：[#9182](https://github.com/zeroclaw-labs/zeroclaw/pull/9182) 将 `runtime.shell` 配置在 Windows 上实际生效，允许选择 PowerShell。
- **Cron 任务超时边界**：[#9320](https://github.com/zeroclaw-labs/zeroclaw/pull/9320) 为 agent cron 任务加上 wall-clock 超时与锁释放，对应 Issue #9191。
- **SOP 鉴权 HTTP 接入**：[#9203](https://github.com/zeroclaw-labs/zeroclaw/pull/9203) 增加 `POST /sop/{*rest}` 鉴权 fan-in，无匹配时返回 404 而非 LLM 回退。
- **Provider SSE 共享传输**：[#8838](https://github.com/zeroclaw-labs/zeroclaw/pull/8838) 统一 OpenAI/Anthropic/Compatible SSE 解析，引入 90 秒 per-read idle 守卫。
- **发布工作流修复**：[#9295](https://github.com/zeroclaw-labs/zeroclaw/pull/9295) 修复 Scoop manifest 校验、重复发布幂等性等问题。
- **目标自恢复循环终结**：[#8746](https://github.com/zeroclaw-labs/zeroclaw/pull/8746)（XL 级 trusted contributor）解决 active goal 自我恢复循环的稳定性问题。

整体看，项目在 **协议互操作（A2A）、存储后端（PostgreSQL）、流式可观测性、平台兼容性（Windows）、频道稳定性（Telegram/WeChat）** 五大方向同步推进，向 v0.9.0 迈进，但合并速率提示需要维护者加速审稿。

---

## 4. 社区热点

按评论数与反应数排序的活跃议题：

| 排名 | Issue/PR | 标题 | 评论 | 👍 | 类型 |
|---|---|---|---|---|---|
| 1 | [#3566](https://github.com/zeroclaw-labs/zeroclaw/issues/3566) | Tracker: A2A protocol interoperability | 9 | 7 | 架构 Tracker |
| 2 | [#6378](https://github.com/zeroclaw-labs/zeroclaw/issues/6378) | Discord Bot respond only in specific Discord channels | 8 | 0 | 频道功能 |
| 3 | [#9127](https://github.com/zeroclaw-labs/zeroclaw/issues/9127) | RFC: Abstract a `KeySource` trait | 7 | 0 | 安全 RFC |
| 4 | [#2767](https://github.com/zeroclaw-labs/zeroclaw/issues/2767) | Multi-Agent Routing | 7 | 9 | 核心架构 |
| 5 | [#4721](https://github.com/zeroclaw-labs/zeroclaw/issues/4721) | zeroclaw should log to stderr instead of stdout | 5 | 0 | 可观测性 |
| 6 | [#4832](https://github.com/zeroclaw-labs/zeroclaw/issues/4832) | Disable LeakDetector high-entropy token redaction | 5 | 0 | 安全策略 |
| 7 | [#3696](https://github.com/zeroclaw-labs/zeroclaw/issues/3696) | External commands for message lifecycle hooks | 4 | 0 | 运行时扩展 |
| 8 | [#3767](https://github.com/zeroclaw-labs/zeroclaw/issues/3767) | Require TOTP for cross-channel approval of critical tools | 4 | 0 | 安全策略 |
| 9 | [#4760](https://github.com/zeroclaw-labs/zeroclaw/issues/4760) | Schema-validated tool calls for memory consolidation | 4 | 0 | 内存/工具 |
| 10 | [#5145](https://github.com/zeroclaw-labs/zeroclaw/issues/5145) | `send_channel_message` tool | 4 | 1 | 频道工具 |

**诉求分析**：
- **#3566（A2A 互操作）+ #2767（多 Agent 路由）** 形成今日最强信号：用户希望 ZeroClaw 能与 NanoClaw、OpenClaw 等其他 Agent 实例自由互通，这是社区眼中"Agent 时代的基础设施级能力"。
- **#6378（Discord 频道白名单）+ #5145（直发频道消息工具）** 反映频道管理员的精细化权限诉求，"全局响应/全局静默"的两端模式已不能满足运维需要。
- **#9127（KeySource trait）+ #3767（TOTP 跨频道）+ #4832（关闭高熵 redaction）** 三个安全相关议题集中上榜，说明在 v0.9.0 引入 TOTP/key 抽象的时机成熟，社区期待更精细的安全边界。
- **#4721（日志走 stderr）** 看似微小但累计 5 条评论，反映 CLI 可用性的"最后一公里"长期被忽视。

---

## 5. Bug 与稳定性

按严重程度（S0 > S1 > S2 > S3）排序：

### 🔴 S0 — 数据丢失 / 安全风险

| Issue | 标题 | 组件 | Fix PR |
|---|---|---|---|
| [#9188](https://github.com/zeroclaw-labs/zeroclaw/issues/9188) | Telegram long-poll advances update offset before successful inbound delivery | `zeroclaw-channels/telegram` | ❌ 暂无 |
| [#9187](https://github.com/zeroclaw-labs/zeroclaw/issues/9187) | WeChat sync cursor persisted before message enqueue | `zeroclaw-channels/wechat` | ❌ 暂无 |

> 两个 S0 都属于"游标先于投递更新"导致的**消息丢失模式**，结构相似，Telegram 在 voice/attachment 解析前推 offset，WeChat 在 `save_sync_data()` 早于 `msgs` 处理。若维护者合并，需要协调同一 commit 防双修遗漏。

### 🟠 S1 — 流程阻塞

| Issue | 标题 | 组件 | Fix PR |
|---|---|---|---|
| [#9207](https://github.com/zeroclaw-labs/zeroclaw/issues/9207) | `web_fetch` 返回压缩响应乱码（gzip/brotli/deflate） | `tools/web` | ❌ 暂无 |
| [#9192](https://github.com/zeroclaw-labs/zeroclaw/issues/9192) | `shared_budget` TOCTOU 可回绕 `AtomicUsize`；`SopEngine::finish_run` mutex 下 unwrap panic | `runtime/agent` | ✅ [#9201](https://github.com/zeroclaw-labs/zeroclaw/pull/9201) |
| [#9191](https://github.com/zeroclaw-labs/zeroclaw/issues/9191) | Cron agent 任务无 wall-clock 超时；inflight 锁仅在进程启动时清理 | `runtime/cron` | ✅ [#9320](https://github.com/zeroclaw-labs/zeroclaw/pull/9320) |
| [#9204](https://github.com/zeroclaw-labs/zeroclaw/issues/9204) | Landlock 沙箱反向限制 ZeroClaw daemon 自身 | `security/sandbox` | ❌ 暂无（需重做 landlock 策略） |
| [#9290](https://github.com/zeroclaw-labs/zeroclaw/issues/9290) | Windows 桌面安装器启动失败（`TaskDialogIndirect` 缺失） | desktop/tauri | ❌ 暂无 |

### 🟡 S2 — 体验降级

| Issue | 标题 | Fix PR |
|---|---|---|
| [#9284](https://github.com/zeroclaw-labs/zeroclaw/issues/9284) | config flush 可覆盖并发写入 | ❌ 暂无 |
| [#9236](https://github.com/zeroclaw-labs/zeroclaw/issues/9236) | 新建 Telegram alias 在 config reload 后被静默丢弃 | ❌ 暂无 |
| [#8999](https://github.com/zeroclaw-labs/zeroclaw/issues/8999) | ZeroCode 流式回合被小模型误读为日志 | ✅ [#9325](https://github.com/zeroclaw-labs/zeroclaw/pull/9325) |
| [#9092](https://github.com/zeroclaw-labs/zeroclaw/issues/9092) | ZeroCode 长会话击键延迟（活动帧全量重渲染） | ❌ 暂无 |
| [#9119](https://github.com/zeroclaw-labs/zeroclaw/issues/9119) | ZeroCode session picker 滚动后选错行 | ❌ 暂无 |

### 🟢 S3 — 小问题

- [#9285](https://github.com/zeroclaw-labs/zeroclaw/issues/9285) nested `set_prop` 把非法值伪装为 unknown property → ✅ [#9310](https://github.com/zeroclaw-labs/zeroclaw/pull/9310)
- [#9202](https://github.com/zeroclaw-labs/zeroclaw/issues/9202) `zeroclaw desktop` 使用失效下载 URL 且无法检测已装 AppImage → ✅ [#9291](https://github.com/zeroclaw-labs/zeroclaw/pull/9291)
- [#9198](https://github.com/zeroclaw-labs/zeroclaw/issues/9198) Discord typing indicator 在 dashboard daemon reload 后卡住

**修复覆盖率**：今日新开/活跃的 14 条 Bug 中，**已有对应 Fix PR 的为 5 条（36%）**；S0 级数据丢失 Bug 仍无 fix，属于最高优先级未补缺口。

---

## 6. 功能请求与路线图信号

按 v0.9.0 接纳概率从高到低排序：

| 提案 | Issue | v0.9.0 纳入概率 | 依据 |
|---|---|---|---|
| **A2A 协议互操作（outbound client）** | [#3566](https://github.com/zeroclaw-labs/zeroclaw/issues/3566) | 🟢 **高** | Phase 1 PR [#9324](https://github.com/zeroclaw-labs/zeroclaw/pull/9324) 已开 |
| **跨频道 TOTP 关键工具审批** | [#3767](https://github.com/zeroclaw-labs/zeroclaw/issues/3767) | 🟢 **高** | 列入 Tracker [#7432](https://github.com/zeroclaw-labs/zeroclaw/issues/7432) 的安全主线 |
| **KeySource trait 抽象** | [#9127](https://github.com/zeroclaw-labs/zeroclaw/issues/9127) | 🟢 **高** | RFC 已起草，93 个 `#[secret]` 字段待统一 |
| **PostgreSQL 会话后端** | [#9251](https://github.com/zeroclaw-labs/zeroclaw/pull/9251) | 🟢 **高** | XL PR 已在审 |
| **Discord `allowed_channels` 白名单** | [#6378](https://github.com/zeroclaw-labs/zeroclaw/issues/6378) | 🟡 中 | 与 Matrix/Nextcloud 一致，模式已存在 |
| **`send_channel_message` 工具** | [#5145](https://github.com/zeroclaw-labs/zeroclaw/issues/5145) | 🟡 中 | CLOSED，但需确认是否合入 |
| **关闭 LeakDetector 高熵 redaction** | [#4832](https://github.com/zeroclaw-labs/zeroclaw/issues/4832) | 🟡 中 | CLOSED，已被合入或需要开关 |
| **消息生命周期外部命令 hooks** | [#3696](https://github.com/zeroclaw-labs/zeroclaw/issues/3696) | 🟡 中 | 已有 `[hooks]` 雏形，扩展成本可控 |
| **多 Agent 路由** | [#2767](https://github.com/zeroclaw-labs/zeroclaw/issues/2767) | 🟡 中 | 👍 9 反应强，但属更后期 |
| **schema 校验的 memory consolidation** | [#4760](https://github.com/zeroclaw-labs/zeroclaw/issues/4760) | 🔴 低 | 长期未动 |
| **Workspace 文件与 memory 变更历史** | [#3672](https://github.com/zeroclaw-labs/zeroclaw/issues/3672) | 🔴 低 | 涉及审计/快照子系统 |
| **eval 结果 dashboard 与趋势跟踪** | [#9228](https://github.com/zeroclaw-labs/zeroclaw/issues/9228) | 🔴 低 | 优先级 p3，从 #7065 推迟 |

---

## 7. 用户反馈摘要

从活跃 Issue 评论与摘要中提炼的真实诉求：

**✅ 满意信号**
- **A2A 方向**获得最多赞同（👍 7），社区明确希望 ZeroClaw 加入 Linux Foundation A2A 生态，与 NanoClaw/OpenClaw 互通。
- **多 Agent 路由**（👍 9，评论 7）显示用户已经在思考"一个 Gateway 同时跑多个隔离 Agent"的部署形态。

**❌ 痛点**
- **Discord 频道控制粒度不足**：用户明确表示希望与 Matrix `allowed_rooms` / Nextcloud Talk 一致的白名单机制（[#6378](https://github.com/zeroclaw-labs/zeroclaw/issues/6378)）。
- **CLI 日志污染 stdout**：`zeroclaw config schema 2>/dev/null | head` 仍然混入日志（[#4721](https://github.com/zeroclaw-labs/zeroclaw/issues/4721)），是开发者日常最常见的摩擦点。
- **小模型下 TUI 体验差**：Ollama llama3.2 把 `[timestamp] message` 流式输出当成日志/协议内容回复（[#8999](https://github.com/zeroclaw-labs/zeroclaw/issues/8999)），本地模型用户的首次体验被破坏。
- **崩溃后消息丢失**：Telegram/WeChat 长轮询都存在游标先于投递的 TOCTOU（[#9187](https://github.com/zeroclaw-labs/zeroclaw/issues/9187), [#9188](https://github.com/zeroclaw-labs/zeroclaw/issues/9188)），属于线上事故级别。
- **Landlock 自缚**：管理员启用沙箱后 daemon 自己被限制，连 SQLite 都访问不了（[#9204](https://github.com/zeroclaw-labs/zeroclaw/issues/9204)）。
- **Windows 桌面启动崩溃**：v0.8.3 安装包缺失 `TaskDialogIndirect`（[#9290](https://github.com/zeroclaw-labs/zeroclaw/issues/9290)），

</details>

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*