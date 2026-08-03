# OpenClaw 生态日报 2026-08-03

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-08-03 02:10 UTC

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

**日期：2026-08-03**
**数据周期：过去 24 小时**

---

## 1. 今日速览

OpenClaw 仓库在 24 小时内继续保持高强度活跃状态，共产生 500 条 Issue 更新和 500 条 PR 更新，整体活跃度处于较高水位。Issue 侧新开/活跃占比 89%（446/500），PR 侧仍有 69%（345/500）处于待合并状态，反映出社区驱动的 issue 流量和需要维护者决策的 PR 数量同时居高。**v2026.7.2-beta.7** 同步发布，重点强化了"状态安全与恢复"——这是对近期频繁出现的 crash-loop、session 状态污染类 bug 的直接响应。整体健康度评估：**功能迭代与稳定性修复双线并行，但维护者瓶颈（needs-maintainer-review 标签大量出现）和长期未解决的 P1 长尾问题仍构成主要风险**。

---

## 2. 版本发布

### v2026.7.2-beta.7（已发布）

**更新主题：State safety and recovery（状态安全与恢复）**

主要变更：
- **Quarantine store**：在主数据库损坏时保护持久化数据
- **Crash-recoverable SQLite snapshots**：可从崩溃中恢复的 SQLite 快照
- **Crash-durable filesystem publication**：崩溃耐受的发布文件系统
- **Schema-upgrade data-loss rejection**：schema 升级时拒绝数据丢失式操作
- **Rollback-writer snapshot recovery**：回滚写入器快照恢复路径

**破坏性变更**：暂无明确迁移指南，但 schema 升级层引入"拒绝数据丢失"的策略，意味着在执行跨版本升级时若检测到潜在数据丢失，将需要管理员显式确认。

**迁移注意事项**：
- 升级前建议备份 SQLite 数据库与持久化工作区状态
- 关注 beta 8 候选 lane 中的预发布验证修复 ([#118255](https://github.com/openclaw/openclaw/pull/118255))
- 如使用 `safe` 升级路径，请注意 schema 升级失败时的回退路径

---

## 3. 项目进展

今日合并/关闭的 PR 主要集中在**稳定性修复、测试基础设施、状态一致性**三个方向：

| PR | 标题 | 价值 |
|----|------|------|
| [#118255](https://github.com/openclaw/openclaw/pull/118255) | fix(qa): restore prerelease validation | 恢复 Beta 8 候选的预发布验证（WhatsApp inbox + Code Mode） |
| [#118339](https://github.com/openclaw/openclaw/pull/118339) | fix(heartbeat): preserve CLI side-question mode for commitments | 修复 due-commitment 心跳对原生 CLI 工具的支持 |
| [#118350](https://github.com/openclaw/openclaw/pull/118350) / [#118368](https://github.com/openclaw/openclaw/pull/118368) | fix(auto-reply): preserve pendingFinalDelivery on retryable no-send failure | 修复 WhatsApp/到达时间锁场景下出站传递失败的级联分类问题（[#117441](https://github.com/openclaw/openclaw/issues/117441)） |
| [#115881](https://github.com/openclaw/openclaw/pull/115881) | fix(xai): classify 'run out of credits' as billing | xAI 信用耗尽错误归类修复 |
| [#118064](https://github.com/openclaw/openclaw/pull/118064) | fix(line): skip invalid location messages before delivery | LINE 频道空白地址消息拦截（[#118029](https://github.com/openclaw/openclaw/issues/118029)） |
| [#117697](https://github.com/openclaw/openclaw/pull/117697) | fix(whatsapp): preserve source direction for automatic reactions | WhatsApp 自动反应源方向保留（[#117672](https://github.com/openclaw/openclaw/issues/117672)） |
| [#118309](https://github.com/openclaw/openclaw/pull/118309) | fix(claude-cli): deduplicate live and imported assistant turns | Claude Code CLI 历史去重（[#118185](https://github.com/openclaw/openclaw/issues/118185)） |
| [#118282](https://github.com/openclaw/openclaw/pull/118282) | fix(doctor): import legacy exec approvals with null metadata | 传统 `exec-approvals.json` 容错导入（[#118242](https://github.com/openclaw/openclaw/issues/118242)） |
| [#87206](https://github.com/openclaw/openclaw/pull/87206) | fix(memory-core): recover narrative text from trajectory when session archived early | 解决归档竞态导致的叙事文本丢失（[#87182](https://github.com/openclaw/openclaw/issues/87182)） |
| [#117843](https://github.com/openclaw/openclaw/pull/117843) | fix(agents): verify delegated writes before reporting success | 委派写入在报告成功前的字节级校验（[#67136](https://github.com/openclaw/openclaw/issues/67136)） |

**配套测试/基础设施改进**：[#118351](https://github.com/openclaw/openclaw/pull/118351) 精简 overflow-compaction 测试用例，[#118364](https://github.com/openclaw/openclaw/pull/118364) 改善网关并发基准可诊断性，[#118366](https://github.com/openclaw/openclaw/pull/118366) 统一扩展 Vitest 分片配置。社区向"测试可观测性 + 共享配置"演进明显。

**进展评估**：今日所体现的修复面广（覆盖 CLI、QA、Channel、Auth、MCP、Memory、Doctor 等多个子系统），但每个修复均针对具体 bug——尚未见跨多个 issue 的架构级重构。**整体推进：稳定向好（约 +0.3 个版本置信度）**。

---

## 4. 社区热点

### 讨论最活跃的 Issues

1. **[#116277](https://github.com/openclaw/openclaw/issues/116277) DeepSeek v4 Flash 静默回复失败（87 条评论，P1 🦞）**
   - Telegram 群组场景下模型完全失声，仅输出"N o reply was generated"通用 fallback
   - 反映 **模型集成质量参差** 与 **fallback 缺诊断信息** 的双重痛点

2. **[#116201](https://github.com/openclaw/openclaw/issues/116201) Realtime voice 无界状态保留（50 条评论，P1 🦞）**
   - 实时语音会话的资源限制以"项数量"+"取消信号"表达，缺乏硬所有权边界
   - 慢/卡顿/突发下会保留过时 consult、大 provider 帧、pre-ready 音频
   - 已有相关 PR 在评审 ([#118309](https://github.com/openclaw/openclaw/pull/118309))

3. **[#115326](https://github.com/openclaw/openclaw/issues/115326) Crash-loop breaker 永久抑制 Discord/WhatsApp（26 条评论，CLOSED）**
   - 网关启动后永久压制 Discord 与 WhatsApp
   - 文档化的 `channels.start` 恢复路径返回 WebSocket 1006
   - **今日已关闭**，标志维护者对该问题已采取行动

4. **[#115908](https://github.com/openclaw/openclaw/issues/115908) Session transcript projection livelock（12 条评论，P1 🦞）**
   - 持续写入下，会话投影进入非收敛重建循环
   - 由于重建路径全为同步，会阻塞 Node 主线程数秒至数十秒
   - 关联到 v2026.7.2 的状态恢复工作

### 讨论最活跃的 PRs

1. **[#118353](https://github.com/openclaw/openclaw/pull/118353) Control UI avatars + Tailscale identity auth** — steipete 主理
2. **[#76920](https://github.com/openclaw/openclaw/pull/76920) fix(telegram): preserve forum topic routing** — kesslerio，跨论坛话题路由修复
3. **[#114631](https://github.com/openclaw/openclaw/pull/114631) feat: enable rich setup controls in custodian chat** — jesse-merhi，仓库主持人对话的向导式控件
4. **[#117509](https://github.com/openclaw/openclaw/pull/117509) fix(agents): surface sessions_yield waiting status** — VACInc，父-子 yield 等待消息可见化

**诉求分析**：社区正集中关注 **subagent 行为可观测性**、**模型兼容深度**、**频道集成质量** 三个方向。与 `clawsweeper` 自动修复机器人覆盖大量 P1 的趋势一致，"修复传播速度"明显快于"修复根本原因速度"。

---

## 5. Bug 与稳定性

### 严重等级排列（P1，🦞 diamond lobster）

| Issue | 标题 | 状态 | 是否有 PR |
|-------|------|------|----------|
| [#116277](https://github.com/openclaw/openclaw/issues/116277) | DeepSeek v4 Flash 静默失败 | OPEN | 无 |
| [#116201](https://github.com/openclaw/openclaw/issues/116201) | Realtime voice 无界状态 | OPEN | 部分（[#118309](https://github.com/openclaw/openclaw/pull/118309)） |
| [#115908](https://github.com/openclaw/openclaw/issues/115908) | Transcript projection livelock | OPEN | 无 |
| [#67777](https://github.com/openclaw/openclaw/issues/67777) | Subagent 完成传递丢失 | OPEN | 无 |
| [#47975](https://github.com/openclaw/openclaw/issues/47975) | Subagent 会话残留、主会话无响应 | OPEN | 无 |
| [#106231](https://github.com/openclaw/openclaw/issues/106231) | 循环检测阻塞 exec 但不终止卡死 | OPEN | 有 linked-pr-open |
| [#115001](https://github.com/openclaw/openclaw/issues/115001) | Hybrid memory 搜索伪 1.0 相似度 | OPEN | 无 |
| [#47910](https://github.com/openclaw/openclaw/issues/47910) | 鉴权失败 provider 应按失败类隔离 | OPEN | 无 |
| [#114211](https://github.com/openclaw/openclaw/issues/114211) | Matrix 房间 agent 死循环 | OPEN | 无 |
| [#106760](https://github.com/openclaw/openclaw/issues/106760) | Telegram 多 block 间文本块被吞 | **CLOSED**（[#118350](https://github.com/openclaw/openclaw/pull/118350) 等相关） | 已修 |
| [#114234](https://github.com/openclaw/openclaw/issues/114234) | Usage-cost 刷新锁在容器中永不释放 | OPEN | linked-pr-open |
| [#53408](https://github.com/openclaw/openclaw/issues/53408) | 长对话后 write/exec 工具参数静默丢弃 | OPEN | 无 |
| [#52249](https://github.com/openclaw/openclaw/issues/52249) | ACP 父会话在子会话完成后卡死 | OPEN | 无 |
| [#115037](https://github.com/openclaw/openclaw/issues/115037) | Resume 时降级模型默默承接用户轮 | OPEN | linked-pr-open |
| [#116010](https://github.com/openclaw/openclaw/issues/116010) | 全部持久会话上下文被 128k 上限截断 | OPEN | linked-pr-open |
| [#118153](https://github.com/openclaw/openclaw/issues/118153) | @openclaw/codex 初始化崩溃 | **CLOSED** | 已修 |

### 今日已修复的重要回归

- **[#115326](https://github.com/openclaw/openclaw/issues/115326)** Discord/WhatsApp crash-loop breaker 永久抑制：已关闭，文档恢复路径同步修复
- **[#118153](https://github.com/openclaw/openclaw/issues/118153)** `@openclaw/codex` `openSyncKeyedStore` 未定义崩溃：已关闭
- **[#58498](https://github.com/openclaw/openclaw/issues/58498)** 状态卡片 OAuth 周用量归属错误：已关闭
- **[#106760](https://github.com/openclaw/openclaw/issues/106760)** Telegram 多 block 文本擦除：已关闭（伴随 [#118350](https://github.com/openclaw/openclaw/pull/118350) 一同修复）

### 新发现的 P1 风险

- **[#117956](https://github.com/openclaw/openclaw/issues/117956)**：`claude-cli` 后端在 `CLAUDE_CLI_CLEAR_ENV` 清楚 `ANTHROPIC_API_KEY` 的情况下仍产生计费 API 用量，单日 **约 1370 万 token**——这是一个潜在的**安全/账单双风险**，处于 needs-security-review 状态。

---

## 6. 功能请求与路线图信号

| Issue | 标题 | 评级 | 可能性 |
|-------|------|------|--------|
| [#74704](https://github.com/openclaw/openclaw/issues/74704) | SDK: 稳定 app-client agents/sessions/runs happy path | P2 🌊 | **较高**——已有 [#114631](https://github.com/openclaw/openclaw/pull/114631) 等相关 PR 推进 |
| [#52640](https://github.com/openclaw/openclaw/issues/52640) | 长会话任务持久状态面（Discord 优先） | P2 🌊 | **中高**——持久任务状态是当前多项 PR 的统一发力点 |
| [#71058](https://github.com/openclaw/openclaw/issues/71058) | 单 Gateway 多 Azure/Teams 机器人 | P2 🌊 | 中——schema 升级容忍路径正在讨论 |
| [#71142](https://github.com/openclaw/openclaw/issues/71142) | Control UI 可配置上传大小限制 | P2 🦞 | **高**——属于 UX 快速胜利，已长期积压 |
| [#71195](https://github.com/openclaw/openclaw/issues/71195) | Mac Talk 模式 OpenAI Realtime 通道 | P2 🌊 | 中——与 [#116201](https://github.com/openclaw/openclaw/issues/116201) 实时语音问题协同 |
| [#75947](https://github.com/openclaw/openclaw/issues/75947) | 基于 UX 评分的 UI 质量改进 | P2 🌊 | 中——[#75947](https://github.com/openclaw/openclaw/issues/75947) 已被讨论 #7 次 |
| [#51441](https://github.com/openclaw/openclaw/issues/51441) | 在 session_status 中暴露已解析后端模型 | P2 🐚 | 中高——可观测性诉求强烈 |
| [#51336](https://github.com/openclaw/openclaw/issues/51336) | API provider 名称出现在错误/过载信息中 | P2 🐚 | 高——配合 [#117956](https://github.com/openclaw/openclaw/issues/117956) 安全事件诉求增强 |
| [#51028](https://github.com/openclaw/openclaw/issues/51028) | Sessions 面板按"最后有意义的活动"排序 | P3 🌊 | 高——已有 linked-pr-open，列入下一版本 |
| [#50291](https://github.com/openclaw/openclaw/issues/50291) | Plugin Hooks: trace context（messageId/runId） | P2 🦞 | 高——分布式追踪对多智能体场景的强诉求 |

**路线图共识**：下一版本最有可能吸纳——**SDK 稳定性**、**UI 可配置上传/UX 改进**、**plugin hooks 可观测性增强**、**可解析 provider 模型暴露** 这四项。

---

## 7. 用户反馈摘要

### 主要痛点

1. **"静默失败"焦虑** ([#116277](https://github.com/openclaw/openclaw/issues/116277)、[#53408](https://github.com/openclaw/openclaw/issues/53408)、[#115037](https://github.com/openclaw/openclaw/issues/115037))
   - 多位用户反映 "工具调用失败但无任何错误提示" 或 "切到降级模型也无说明"，要求**前台透明化错误**

2. **"卡死/卡循环"恐慌** ([#67777](https://github.com/openclaw/openclaw/issues/67777)、[#47975](https://github.com/openclaw/openclaw/issues/47975)、[#55694](https://github.com/openclaw/openclaw/issues/55694)、[#106231](https://github.com/openclaw/openclaw/issues/106231))
   - Agent 在工具重试、subagent 完成、循环检测等场景下"刷屏 20+ 条相同消息"或"主会话无响应"
   - 飞书用户尤其受困于消息风暴

3. **"账单焦虑"**

---

## 横向生态对比

# 2026-08-03 个人 AI 助手/自主智能体开源生态横向对比分析

---

## 1. 生态全景

当前开源生态呈现 **"两极分化 + 治理重构期"** 的总体态势：以 OpenClaw（500+500）和 ZeroClaw（50+50，伴 v0.8.4 发布）为代表的头部项目维持高吞吐并向"安全契约 + 状态恢复"纵深推进；Hermes Agent、NanoBot、IronClaw 等中等规模项目普遍进入 **"高积压、低合并"** 的审阅瓶颈期；而 LobsterAI、Moltis、TinyClaw、NullClaw、ZeptoClaw 等项目则陷入 stale 静默或维护间歇。与此同时，**会话状态管理、跨平台上下文共享、Provider 兼容性、SSE/Streaming 协议稳定性** 已成为跨项目的共性痛点——多个独立项目同日暴露相同类别的回归，说明这些是 AI Agent 走向生产化的"行业级未解难题"。

---

## 2. 各项目活跃度对比

| 项目 | Issues 更新 | PR 更新 | Release | 当日合并/关闭 | 待合并 PR | 健康度评估 |
|------|--------:|--------:|---------|--------:|--------:|:----------|
| **OpenClaw** | 500 | 500 | ✅ v2026.7.2-beta.7 | 多笔 | 345 | 🟢 高活跃 / 维护者瓶颈 |
| **ZeroClaw** | 50 | 50 | ✅ **v0.8.4**（262 commits / 49 贡献者）| 8 | 42 | 🟢 高活跃 / 治理 RFC 演进中 |
| **Hermes Agent** | 50 | 50 | ❌ | 13 | 41 | 🟡 高吞吐 / 高积压 |
| **NanoBot** | 0 | 9 | ❌ | 2 | 7 | 🟡 数据缺失 / 单点贡献风险 |
| **IronClaw** | 7 | 26 | ❌（候选 #5598 积压 31 天）| 多笔 | ~20 | 🟢 重构收尾 / 发布阻塞 |
| **PicoClaw** | 3 | 9 | ❌ | 3（含机器人重复）| 6 | 🟡 中活跃 / 积压 stale |
| **NanoClaw** | 1 | 10 | ❌ | 3 | 7 | 🟡 中活跃 / 出现 P0 |
| **CoPaw** | 2 | 6 | ❌ | **0** | 6 | 🟡 响应快 / 审阅瓶颈 |
| **LobsterAI** | 3 | 6 | ❌ | 2（均为 Dependabot stale 关闭）| 4 | 🔴 维护间歇 / 4 月积压 |
| **Moltis** | 0 | 1 | ❌ | 0 | 1 | 🟡 静默期 / 待评审旗舰 PR |
| **NullClaw** | — | — | — | — | — | ⚪ 无活动 |
| **TinyClaw** | — | — | — | — | — | ⚪ 无活动 |
| **ZeptoClaw** | — | — | — | — | — | ⚪ 无活动 |

**关键观察**：当日 13 个项目中，**仅 2 个有版本发布**（OpenClaw beta、ZeroClaw v0.8.4），2 个处于完全静默（NullClaw/TinyClaw/ZeptoClaw），其余 8 个均在"修修补补"状态——这与 6-7 月版本密集发布的节奏形成对比，**生态正在进入消化期**。

---

## 3. OpenClaw 在生态中的定位

### 规模与活跃度

OpenClaw 以 **1000 条日互动（500 Issues + 500 PRs）** 稳居生态第一梯队，是 ZeroClaw（100）的 10 倍、Hermes Agent（100）的 10 倍，单日活跃度即超过 PicoClaw/NanoClaw/CoPaw 等项目的周累计。

### 与同类项目对比

| 维度 | OpenClaw | ZeroClaw | Hermes Agent | NanoBot |
|------|---------|----------|--------------|---------|
| 频道覆盖 | 多（Discord/WhatsApp/Telegram/LINE/Matrix/Teams） | Telegram/Discord 为主 | 多平台 | 主要 Telegram |
| 状态安全 | ✅ v2026.7.2-beta.7 重点 | 部分（OAuth/daemon 健壮性） | 部分（sweeper 风险标签） | 一般 |
| 治理 RFC | 无明显 RFC 流程 | ✅ 5+ 活跃 RFC | 中等 | 低 |
| 工具生态 | 多（Memory/Doctor/MCP/Skill） | 多 | 多 | 中等 |
| Subagent 能力 | 强（多 P1 围绕 subagent） | 强 | 中 | 中（部分完成标记在修） |
| 维护者集中度 | 中（多维护者） | 低（49 位贡献者） | 中 | **高（单点风险）** |

### 技术路线差异

- **OpenClaw** 走"全栈 + 跨频道 + 状态安全"路线，v2026.7.2-beta.7 引入 Quarantine store 与 SQLite 快照恢复，反映其向**生产级持久化**演进；
- **ZeroClaw** 走"协议开放 + 治理 RFC"路线，Chat Completions 兼容层是用户增长的关键杠杆；
- **Hermes Agent** 走"功能广度 + 跨平台"路线，但在跨平台会话共享这一最大诉求上反复出现重复 Issue，说明架构层面尚未达成共识；
- **NanoBot / PicoClaw** 走"轻量级 + 工具型"路线，社区体量小但 Bug 修复覆盖率高（NanoBot 6/6）。

---

## 4. 共同关注的技术方向

### 4.1 会话状态与跨平台上下文（**最高频共性痛点**）

涉及项目：**OpenClaw、ZeroClaw、Hermes Agent、IronClaw**

| 项目 | 具体诉求 |
|------|---------|
| OpenClaw | #116201 实时语音无界状态；#115908 transcript projection livelock；#67777/#47975 subagent 状态残留 |
| ZeroClaw | #9487 runtime-owned 会话/传输适配器；#9488 统一附件架构 |
| Hermes Agent | #4335 等 4 个重复 Issue 强烈要求跨平台会话共享；#77127 WS 断连 TOCTOU |
| IronClaw | #7025/#7017 出站投递单飞所有权与终态保护 |

→ **共识方向**：session 已从"功能"上升为"基础设施"，需要硬所有权边界、终态保护、跨进程恢复的统一抽象。

### 4.2 Provider 兼容性与深度集成（**次高频共性痛点**）

涉及项目：**OpenClaw、NanoBot、Hermes Agent、CoPaw、ZeroClaw**

- OpenClaw #116277 DeepSeek v4 Flash 静默失败（87 评论）
- NanoBot #5214 OpenAI Responses API serde 失败；#4021 Codex reasoning 重复（**跨 2 月才合入**）
- Hermes Agent #77217 DeepSeek 缓存特性在 OpenCode 触发 400
- CoPaw #6561 MCP 工具名兼容 Kimi/Moonshot
- ZeroClaw #9464 Anthropic OAuth 别名路径正式化；Chat Completions profile RFC

→ **共识方向**：第三方 Provider 适配已从"能跑通"演进到"长尾质量"，需要 SDK 级别的 schema 校验和降级路径。

### 4.3 安全 / 凭据 / Sandbox 边界（**架构级共识**）

涉及项目：**OpenClaw、ZeroClaw、IronClaw、CoPaw**

- OpenClaw #117956 `claude-cli` 凭据清理后仍产生 1370 万 token 计费（needs-security-review）
- ZeroClaw #7141 可插拔认证 RFC；#9621 阶段化遥测
- IronClaw #7016 `HTTPS_PROXY` 绕过 SSRF/DNS 重绑定防护；#7024 MCP OAuth 走 RFC 9728
- CoPaw（隐含） 列表端点过载与无压缩响应

→ **共识方向**：凭据脱敏、代理变量硬化、OAuth 规范化正成为安全基线，且多个项目同时出现"硬化层 vs 操作员预期"的一致性冲突。

### 4.4 大数据量响应与超时配置（**性能级共识**）

涉及项目：**CoPaw、Hermes Agent、NanoBot**

- CoPaw #6633/#6635 控制台/技能页面 MB 级未压缩响应被 30s 前端超时切断
- Hermes Agent Desktop 端 checkbox 渲染异常、长输出截断
- NanoBot #5194 JSONL 会话列表加载性能优化

→ **共识方向**：前端超时 + 后端压缩 + 列表/详情端点分离的三件套尚未在多数项目中落地。

### 4.5 会话管理与检索（**功能级共识**）

涉及项目：**NanoBot、OpenClaw、CoPaw**

- NanoBot #5211 `search_sessions` / `read_session` 跨会话工具
- OpenClaw #51028 Sessions 面板按"最后有意义的活动"排序
- CoPaw #6068 Scroll 历史迁移保留 session_id（**已积压 21 天**）

---

## 5. 差异化定位分析

| 项目 | 核心定位 | 目标用户 | 关键技术架构特征 |
|------|---------|---------|----------------|
| **OpenClaw** | 全栈跨频道生产级 AI 助手 | 中大型团队 / 多平台部署用户 | SQLite + Quarantine Store + Crash Snapshot；多频道适配层；subagent 系统 |
| **ZeroClaw** | 治理透明、协议开放的 Agent 平台 | 协议贡献者 / 集成方 / 长期主义用户 | Rust 实现；OpenAI 协议兼容层；RFC 治理流程；49 位协作贡献者 |
| **Hermes Agent** | 多平台 + 桌面端的轻量 Agent | 桌面端用户 / CLI 脚本化用户 | Desktop GUI + 跨频道；AIDE² 自进化探索中 |
| **IronClaw** | 系统级硬化 + 出站耐久性 | 企业部署 / 安全敏感场景 | Rust；OAuth RFC 9728；Wave 2 重构后的契约化架构 |
| **NanoBot** | 简洁高效的轻量 Agent | 个人开发者 / 单部署用户 | JSONL 会话存储；uv 友好安装；WebUI |
| **PicoClaw** | 极简 CLI + 安全执行边界 | 高级用户 / 命令行偏好者 | `customAllowPatterns` + guardCommand；Telegram 优先 |
| **NanoClaw** | 多通道扩展 + 远程 MCP | 分布式部署 / 通道集成方 | Dial 通道适配器；远程 Streamable HTTP MCP |
| **CoPaw** | 桌面端快捷体验 + Qwen 生态 | 桌面重度用户 | 仿豆包全局快捷键浮窗；Skills Pool |
| **Moltis** | MCP 生态应用商店式分发 | MCP 集成方 / 插件开发者 | 托管 Git 仓库包 + Vault + SSH 凭据 |
| **LobsterAI** | 国内 IM 集成（POPO/钉钉/飞书） | 网易系 / 国内 IM 用户 | Tailwind 3.x；IM 配置驱动 |

---

## 6. 社区热度与成熟度分层

### 🔥 第一梯队：快速迭代 + 版本驱动（健康度高）

- **OpenClaw**：日 1000 条互动、beta 节奏稳定；主要风险是维护者审阅瓶颈与 P1 长尾。
- **ZeroClaw**：v0.8.4 跨 262 commits、49 位贡献者，治理 RFC 进入成熟期。

### 🟡 第二梯队：高吞吐 / 高积压（审阅瓶颈）

- **Hermes Agent**：100 条日互动但仅 13 条关闭，跨平台会话共享等核心诉求被重复 Issue 拖入僵局。
- **IronClaw**：26 条 PR 互动 + 高质量 1:1 issue→PR 配套，但 #5598 发布 PR 积压 31 天阻塞版本输出。
- **NanoBot**：单点贡献者风险（arcdrake22 一人 3 PR），且 Issue 数据为 0 异常。

### 🟠 第三梯队：稳健修缮（功能推进缓慢）

- **PicoClaw**：lucapette 同源修复是亮点，但 stale PR 关闭（#3261）反映贡献者流失风险。
- **NanoClaw**：P0 数据库锁竞争（#3177）暴露 SQLite 在容器化下的架构局限。
- **CoPaw**：当日响应敏捷（Issue→PR 当日闭环）但审阅吞吐为 0，#6068 积压 21 天。

### 🔴 第四梯队：静默 / 维护间歇（需关注存活）

- **LobsterAI**：4 个月积压、依赖升级被 stale 关闭、无版本动作。
- **Moltis**：仅 1 条待审 PR，无社区反馈循环。
- **NullClaw / TinyClaw / ZeptoClaw**：24 小时无活动，处于事实上的停摆。

---

## 7. 值得关注的趋势信号

### 7.1 "静默失败"成为跨项目第一痛点

OpenClaw #116277、#53408；NanoBot #5214；IronClaw #7016；CoPaw #6633——**多个项目同时发现"工具调用/Provider 调用失败但用户收不到错误提示"**。这标志着 Agent 行业从"能跑"进入"可观测性"阶段，**统一的错误传播与降级路径**将是下一个核心基础设施方向。

### 7.2 "状态耐久性"成为新的架构话题

OpenClaw 引入 SQLite 快照 + Quarantine store；ZeroClaw v0.9.0 酝酿运行时架构 RFC；IronClaw 出站投递单飞 + 终态保护三件套——**分布式持久化**正从云原生数据库领域向 Agent 平台迁移，可能催生专门的 "Agent State Store" 中间件赛道。

### 7.3 "协议开放 = 用户增长"的拐点

ZeroClaw Chat Completions profile RFC（#8603，14 评论）是当前最具增长杠杆的提案；Hermes Agent ZAI 路由修复（#77240）、NanoBot OpenAI Responses 兼容——**OpenAI 兼容协议已成事实标准**，不做协议层暴露的项目将面临用户迁移壁垒。

### 7.4 治理流程成熟化

ZeroClaw 5+ 活跃 RFC、IronClaw Wave 2 重构以单一 PR 取代级联合并、OpenClaw needs-maintainer-review 标签普及——**头部项目正在建立"RFC 驱动 + PR 生命周期管理"的治理范式**，这与第二梯队项目"靠维护者个人意愿"的非正式流程形成鲜明对比。

### 7.5 MCP 成为新的协议层标准

Moltis #1183 仓库化 MCP 分发、NanoClaw #3092

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目日报

**日期：2026-08-03**
**数据周期：过去 24 小时**

---

## 1. 今日速览

NanoBot 仓库在 2026-08-03 保持中等强度的开发活跃度，过去 24 小时内共有 **9 条 PR 更新**（7 条待合并、2 条已关闭），**无 Issues 互动**，**无新版本发布**。当日活动呈现明显的 **Bug 修复主导** 特征：9 条 PR 中至少 5 条带有 `bug` 或 `fix` 标签，且其中 2 条被标注为 P1 优先级（来自同一作者 arcdrake22），说明维护团队正在集中精力解决稳定性问题。整体来看，项目处于 **"密集修缮、谨慎发布"** 的阶段，没有新的 release 反映对合并质量的较高把关。

---

## 2. 版本发布

🚫 **今日无新版本发布**。

尽管过去 24 小时有 2 条 PR 被关闭（#5194、#4021），但均为非发版性合入/关闭，未触发版本标签更新。建议关注者留意下一个 release note 的累积改动。

---

## 3. 项目进展

今日共 **2 条 PR 已关闭**：

| PR | 标题 | 作者 | 价值 |
|---|---|---|---|
| [#5194](https://github.com/HKUDS/nanobot/pull/5194) | perf(webui): 加速 JSONL 会话列表与线程加载 | chengyongru | WebUI 性能优化，复用活动目录、按请求缓存 workspace-scope 快照；保持 SessionStore 作为单一权威源 |
| [#4021](https://github.com/HKUDS/nanobot/pull/4021) | fix(codex): 发送前去重 reasoning items，遇到 duplicate-item 400 时重试 | eldar702 | **关闭 Issue #3633**，解决 OpenAI Codex provider 在多轮对话中重复发送已接受 reasoning 项的 400 错误 |

**推进评估：**
- **#5194** 提升了 WebUI 在大量 JSONL 会话下的加载性能与一致性，属于稳步的体验优化。
- **#4021** 是一个长期遗留（创建于 2026-05-27，跨越约 2 个月才关闭）的多轮对话稳定性修复，今日终于合入，对 Codex 用户具有直接价值。
- 总体看，**项目稳健前进**，但缺少新功能落地，所有功能型 PR（#5211、#5212）仍待评审。

---

## 4. 社区热点

⚠️ **数据说明：** 当前 GitHub 接口未返回 PR 评论数（`评论: undefined`），且 Issues 数据为 0，无法精确量化"讨论最活跃"。以下基于 PR 创建/更新时间与优先级进行综合排序，挑选当日关注度可能较高的条目：

| 热度候选 | PR | 依据 |
|---|---|---|
| 🔥 高 | [#5214](https://github.com/HKUDS/nanobot/pull/5214) | P1 优先级，针对 OpenAI Responses API 全局兼容性，影响所有使用 Responses API 的用户 |
| 🔥 高 | [#5215](https://github.com/HKUDS/nanobot/pull/5215) | P1 优先级，gateway 关闭资源泄漏类问题，关乎所有部署稳定性 |
| 🌡 中 | [#5216](https://github.com/HKUDS/nanobot/pull/5216) | P2，针对 Gemini Flash 图像模型用户，影响图像生成可用性 |
| 🌡 中 | [#5211](https://github.com/HKUDS/nanobot/pull/5211) | 新功能 PR，涉及 WebUI 跨会话搜索与 @ 提及，是当日少有的功能型改动 |

**诉求洞察：**
- arcdrake22 一人连续提交 3 条高质量修复（#5214、#5215、#5216），覆盖 OpenAI、Gemini、Gateway 三大方向，反映 **核心维护者对 provider 链路质量的高度关注**。
- WebUI 体验与跨会话能力正在被多个 PR 触及（#5194、#5211），说明用户对 **会话管理/检索** 的需求正在累积。

---

## 5. Bug 与稳定性

当日 PR 中带 `bug` 或 `fix` 标签的共 **6 条**，按严重程度排列：

### 🔴 P1（高优先级，需立即修复）
1. **[#5215](https://github.com/HKUDS/nanobot/pull/5215) `fix(gateway): close agent resources deterministically on stop`**
   - 现象：停止 gateway 时若 exec 会话或 MCP 子进程仍在运行，会产生 asyncio teardown 噪音（`RuntimeError: Event loop is closed`），并可能 stall 停止流程。
   - 影响：所有部署 nanobot gateway 的用户，重启时可能异常。
   - **已有 fix PR：✅ 是（#5215）**

2. **[#5214](https://github.com/HKUDS/nanobot/pull/5214) `fix(providers): fall back to chat completions on serde body rejections`**
   - 现象：OpenAI Responses API 因 serde 反序列化错误（如 input 类型不匹配）会终止整轮对话。
   - 影响：使用 OpenAI Responses 路由的用户。
   - **已有 fix PR：✅ 是（#5214）**

### 🟡 P2（中优先级）
3. **[#5216](https://github.com/HKUDS/nanobot/pull/5216) `fix(image): send Gemini Flash hints via generationConfig.imageConfig`**
   - 现象：`gemini-3.1-flash-lite-image` 等图像模型在传入 aspect ratio / size hint 时返回 `HTTP 400 INVALID_ARGUMENT`。
   - 影响：Gemini Flash 图像生成用户。
   - **已有 fix PR：✅ 是（#5216）**

4. **[#5213](https://github.com/HKUDS/nanobot/pull/5213) `fix(plugins): use uv when pip is unavailable`**
   - 现象：通过 `uv tool` 安装 nanobot 的环境下，`nanobot plugins enable` 等命令因 pip 缺失而失败。
   - 影响：使用 uv 官方安装方式的用户。
   - **已有 fix PR：✅ 是（#5213）**

5. **[#5152](https://github.com/HKUDS/nanobot/pull/5152) `fix(subagent): mark partial completion results`（回归类）**
   - 现象：subagent 公布结果时未统计仍在运行的兄弟任务，模型可能误判。
   - 影响：使用 subagent 工作流的高级用户。
   - **已有 fix PR：✅ 是（#5152）**

6. **[#5194](https://github.com/HKUDS/nanobot/pull/5194) `perf(webui): accelerate JSONL session list`（性能）**
   - 已关闭合并，**不再视为待修 Bug**。

**整体稳定性评估：当日 Bug 修复覆盖度良好（6/6 已有 fix PR），无未修复的裸露 Bug。** 维护者对响应速度有保障。

---

## 6. 功能请求与路线图信号

当日涉及 `feat` 标签的 PR 共 2 条，是判断路线图的关键信号：

| PR | 功能 | 可能进入下一版本？ |
|---|---|---|
| [#5211](https://github.com/HKUDS/nanobot/pull/5211) `feat(session): add cross-session search and mentions` | 新增 `search_sessions` / `read_session` 只读工具，WebUI 支持 @ 提及选择其他会话，会话引用持久化、标题自然化 | ⭐⭐⭐ 高 — 配套 #5194 的会话索引改造，技术路径清晰 |
| [#5212](https://github.com/HKUDS/nanobot/pull/5212) `feat: add MiniMax music guidance` | 在 music provider 工具消息契约与 skill guidance 中新增 MiniMax 音乐生成发现能力 | ⭐⭐ 中 — 属于文档/契约层增量，风险较低 |

**推断：** 下一版本更可能聚焦 **会话管理增强** 与 **多 provider 稳定性**，音乐 guidance 这样的轻量补丁也可能随批合入。

---

## 7. 用户反馈摘要

⚠️ **数据局限性说明：** 当日 Issues 数据为 0，PR 评论数亦未返回，因此无法从公开评论中提炼真实用户声音。以下从 PR 描述本身还原用户场景：

- **OpenAI Codex 用户（#4021 / Issue #3633）**：在多轮对话中触发 `400 Duplicate item found with id rs_…`，导致会话中断 — 这是一个**跨 2 个月才得到合入**的痛点，反映 provider 兼容性是用户高频踩坑点。
- **Gemini Flash 图像用户（#5216）**：尝试传入 aspect ratio / size hint 时整条请求失败，提示 Gemini 图像模型参数的 **下游文档/契约不一致** 问题。
- **使用 `uv tool` 安装的用户（#5213）**：`nanobot plugins enable feishu` 失败，说明官方安装路径下插件启用链路对环境假设过强。
- **Gateway 运维者（#5215）**：在重启时遭遇 teardown 噪音，**运维可观测性** 是隐含诉求。

**满意度侧面信号：** 多数 PR 直接给出"问题 → 修复 → 测试"的闭环，且 P1 Bug 自带测试用例，表明维护者对修复质量的把控严谨；社区对 arcdrake22 的连续贡献形成正向循环。

---

## 8. 待处理积压

| 类型 | 编号 | 标题 | 创建日 | 已等待 | 状态 |
|---|---|---|---|---|---|
| 🔴 P1 PR | [#5215](https://github.com/HKUDS/nanobot/pull/5215) | gateway 资源确定性关闭 | 2026-08-02 | 1 天 | OPEN |
| 🔴 P1 PR | [#5214](https://github.com/HKUDS/nanobot/pull/5214) | Responses API serde 失败回退 | 2026-08-02 | 1 天 | OPEN |
| 🟡 P2 PR | [#5216](https://github.com/HKUDS/nanobot/pull/5216) | Gemini Flash imageConfig | 2026-08-02 | 1 天 | OPEN |
| 🟡 P2 PR | [#5213](https://github.com/HKUDS/nanobot/pull/5213) | uv 回落启用插件 | 2026-08-02 | 1 天 | OPEN |
| 🟡 回归 PR | [#5152](https://github.com/HKUDS/nanobot/pull/5152) | subagent 部分完成标记 | 2026-07-28 | 6 天 | OPEN |
| ⭐ 功能 PR | [#5211](https://github.com/HKUDS/nanobot/pull/5211) | 跨会话搜索与提及 | 2026-08-01 | 2 天 | OPEN |
| ⭐ 功能 PR | [#5212](https://github.com/HKUDS/nanobot/pull/5212) | MiniMax music guidance | 2026-08-02 | 1 天 | OPEN |

**提醒维护者关注：**
- 2 条 **P1** PR 虽只等待 1 天，但涉及核心路径（gateway 关闭、OpenAI Responses），建议优先 review。
- **#5152** 已积压 6 天仍未合并，且涉及 subagent 语义准确性，建议本周内推进。
- 当日 **0 条 Issues** 是个异常信号，建议确认是否存在 Issues 被批量迁移至 Discussions 或外部渠道，避免漏失用户反馈。

---

## 附：项目健康度仪表盘

| 指标 | 当日数值 | 评估 |
|---|---|---|
| PR 活跃数 | 9 | 🟢 良好 |
| Bug 修复覆盖率（带 fix PR） | 6/6 | 🟢 优秀 |
| P1 待合并数 | 2 | 🟡 需关注 |
| 新版本发布 | 0 | 🟡 中性 |
| Issues 互动 | 0 | 🔴 数据缺失/异常 |
| 核心维护者贡献集中度 | 高（arcdrake22 单人 3 PR） | 🟡 注意单点风险 |

---

*报告生成时间：2026-08-03 | 数据源：GitHub HKUDS/nanobot*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目日报 · 2026-08-03

> 数据来源：[NousResearch/hermes-agent](https://github.com/nousresearch/hermes-agent) GitHub 仓库 · 统计窗口：过去 24 小时

---

## 1. 今日速览

Hermes Agent 仓库今日维持**高频活跃但零发布**的状态：24 小时内 Issues/PR 总计 **100 条更新**（Issues 50 条，PR 50 条），其中仅 **13 条被关闭/合并**，**41 条 PR 仍处待合并状态**，**4 条 Issue 关闭**——表明项目正处于"高吞吐-高积压"阶段。

从标签分布看，今日热点高度集中在三个领域：
- **会话状态管理**（`sweeper:risk-session-state`）：至少 12 条相关 Issue，反映跨平台会话连续性、断线重连 TOCTOU 竞争、`/resume` 副作用等仍是核心痛点；
- **安全/凭据保护**（`type/security`）：3 条 P3 级别 Issue 集中关注 `applied-secrets` 快照未接入 provider-egress 脱敏、子进程环境清理漏洞；
- **Desktop/GUI 体验**：Windows 睡眠后 WebSocket 断连丢上下文、复选框图标、checkbox glyph 修复、pin/unpin 状态被覆盖等问题密集出现。

**项目健康度评估：活跃度 8/10，但合并吞吐 4/10，维护者需关注 PR/Issue 积压。**

---

## 2. 版本发布

**今日无新版本发布。** 仓库处于纯开发/Review 阶段，未生成新的 Release。

---

## 3. 项目进展

今日合并/关闭的 9 条 PR 中，4 条具代表性：

| PR | 标题 | 状态 | 价值 |
|---|---|---|---|
| [#68121](https://github.com/nousresearch/hermes-agent/pull/68121) | fix(feishu): render markdown tables via post+md, remove force-text downgrade | CLOSED | 恢复飞书原生 Markdown 表格渲染，移除早期 `_MARKDOWN_TABLE_RE` 强制降级路径 |
| [#77240](https://github.com/nousresearch/hermes-agent/pull/77240) | fix(auxiliary): keep ZAI Coding Plan routing | CLOSED | 修正 Z.AI 辅助路由到 `/api/coding/paas/v4`，覆盖 `api.z.ai` 与 `open.bigmodel.cn` 双 host |
| [#74056](https://github.com/nousresearch/hermes-agent/pull/74056) | fix(desktop): correct checkbox state glyphs | CLOSED | 修复 Desktop 复选框 checked/indeterminate 状态 Codicon 渲染异常 |
| [#76661](https://github.com/nousresearch/hermes-agent/pull/76661) | feat(gateway): add P2P federation heartbeat for multi-device task relay | CLOSED | 新增联邦心跳，但作为功能 PR 被关闭，未纳入主线 |

**整体推进判断：** 项目在飞书/Z.AI Provider 兼容性、Desktop UI 细节上稳步修复；但重大功能 PR（如 P2P federation）的关闭反映**对架构性变更仍较谨慎**。

---

## 4. 社区热点

按评论数与互动量排序：

1. **[#4335](https://github.com/nousresearch/hermes-agent/issues/4335)** — Feature Request: Cross-platform session context sharing (CLI ↔ Telegram)｜**10 评论 / 👍 3**
   - 核心诉求：CLI、Telegram、Discord 等多平台会话相互隔离，agent 无法共享上下文。
   - 用户希望实现"同一个逻辑对话可在任意通道继续"。

2. **[#53374](https://github.com/nousresearch/hermes-agent/issues/53374)** — Desktop GUI 在 Windows 睡眠后创建新会话（WebSocket 断连丢上下文）｜**7 评论 / 👍 1**
   - Windows 笔记本睡眠唤醒后，Desktop 自动重连但丢失原 session。

3. **[#70647](https://github.com/nousresearch/hermes-agent/issues/70647)** — `-z/--oneshot` 静默丢弃管道 stdin｜**6 评论**
   - 文档承诺"Intended for scripts / pipes"，但 `hermes -z` 代码路径根本不读 `sys.stdin`。

4. **[#76269](https://github.com/nousresearch/hermes-agent/issues/76269)** — Desktop 添加"重启当前 backend"安全操作｜**5 评论**

5. **[#69161](https://github.com/nousresearch/hermes-agent/issues/69161)** — Desktop 默认折叠思考/推理块｜**5 评论 / 👍 2**

**洞察：** 跨平台会话连续性已成为社区最强烈的诉求——同一议题在仓库内有至少 4 个变体（#4335、#49730、#62780、#44846），其中 [#49730](https://github.com/nousresearch/hermes-agent/issues/49730) 已标记 duplicate。维护者应考虑整合提案，集中设计 canonical cross-platform session。

---

## 5. Bug 与稳定性

按严重程度排列：

### 🔴 P0 — 致命级

- **[#77217](https://github.com/nousresearch/hermes-agent/issues/77217)** — DeepSeek 缓存特性在 OpenCode Zen 触发 HTTP 400
  - 提交 6b6435a87 后，`deepseek-v4-flash` 等模型在 OpenCode Zen 上报 `Input should be a valid string, field: 'messages[0].content.str'`。
  - **修复 PR 已就位**：[#77243](https://github.com/nousresearch/hermes-agent/pull/77243) — 排除 DeepSeek 走 OpenCode 缓存路径（待合并）。

### 🟠 P1 — 高严重度

- **[#77184](https://github.com/nousresearch/hermes-agent/issues/77184)** — Gateway 重启 drain 把请求者自身 turn 纳入等待集，180s 后被 force-kill
  - 影响内部 restart 路径的活性；尚未见 fix PR。

### 🟡 P2 — 重要级（节选）

| Issue | 简述 | Fix PR |
|---|---|---|
| [#70647](https://github.com/nousresearch/hermes-agent/issues/70647) | `-z` 模式忽略管道输入 | ❌ |
| [#73381](https://github.com/nousresearch/hermes-agent/issues/73381) | Windows Desktop 更新失败（cryptography 缺失 + uv 文件锁） | ❌ |
| [#67851](https://github.com/nousresearch/hermes-agent/issues/67851) | DOCX 文本框内容被提取两次 | ❌ |
| [#62202](https://github.com/nousresearch/hermes-agent/issues/62202) | Gateway 不调用 `_post_turn_goal_continuation`，目标循环死锁 | ❌ |
| [#76767](https://github.com/nousresearch/hermes-agent/issues/76767) | Desktop 查看 Telegram 实时会话时回复不投递到 Telegram | ❌ |
| [#77127](https://github.com/nousresearch/hermes-agent/issues/77127) | WS 断连 teardown 与 `session.resume` 重连存在 TOCTOU 竞争 | ✅ [#77129](https://github.com/nousresearch/hermes-agent/pull/77129)（待合并）|
| [#76919](https://github.com/nousresearch/hermes-agent/issues/76919) | Desktop pin/unpin 被后到 list page 覆盖 | ❌ |
| [#64780](https://github.com/nousresearch/hermes-agent/issues/64780) | Gateway 模型切换守卫未 await AsyncSessionDB | ❌ |
| [#74741](https://github.com/nousresearch/hermes-agent/issues/74741) | Desktop 把代码块内 URL 改写为 @url 引用 | ❌ |

### 🟢 安全相关

- [#77162](https://github.com/nousresearch/hermes-agent/issues/77162)、[#77164](https://github.com/nousresearch/hermes-agent/issues/77164)、[#77165](https://github.com/nousresearch/hermes-agent/issues/77165) — 凭据脱敏与子进程环境清理漏洞（均为 P3）。三者由同一作者同日提交，指向 `_SECRET_SOURCE_VALUES_BY_HOME` 未接入多个 egress 通道。

---

## 6. 功能请求与路线图信号

### 高需求功能

| 功能 | 信号来源 | 现状 |
|---|---|---|
| **跨平台会话共享** | 4 个重复 Issue（#4335、#49730、#62780、#44846）| 重复但无主线 PR |
| **Desktop Windows 启动项** | [#76897](https://github.com/nousresearch/hermes-agent/issues/76897) | 仅 gateway 层有 `install --start-on-login`，Desktop 缺 UI |
| **折叠思考块** | [#69161](https://github.com/nousresearch/hermes-agent/issues/69161)（👍 2） | 无 PR |
| **OpenRouter Gemini 目录扩充** | [#76732](https://github.com/nousresearch/hermes-agent/issues/76732) | 无 PR |
| **重启 backend 安全操作** | [#76269](https://github.com/nousresearch/hermes-agent/issues/76269) | 无 PR |
| **签名的 root-action 审批中继** | [#77161](https://github.com/nousresearch/hermes-agent/issues/77161) ↔ PR [#77163](https://github.com/nousresearch/hermes-agent/pull/77163) | PR 已开启待合并 |

### 待合并的关键 PR（功能层面）

- **[#77236](https://github.com/nousresearch/hermes-agent/pull/77236)** — AIDE² 自进化：Experience Ledger / Eval Harness / Hermes² / Delegation Evo
  - 大型创新性 PR，引用 Weco AI 的 AIDE² Level-1 RSI 研究；标记 `innovation / needs-decision`，需核心维护者裁决。
- **[#77235](https://github.com/nousresearch/hermes-agent/pull/77235)** — 替换基于 memo CLI 的 Apple Notes skill 为原生 osascript 工作流
  - [#6480](https://github.com/nousresearch/hermes-agent/issues/6480) 重新提交。

**路线图预测：** 下一版本（若有 release）最有可能吸纳 ZAI 路由修复 [#54643](https://github.com/nousresearch/hermes-agent/pull/54643)、YOLO 持久化 [#77237](https://github.com/nousresearch/hermes-agent/pull/77237)、WS race 修复 [#77129](https://github.com/nousresearch/hermes-agent/pull/77129) 等低风险 PR。跨平台会话共享可能需更长时间才能落地。

---

## 7. 用户反馈摘要

从评论与措辞中提炼：

**真实痛点**
- **多平台上下文割裂**：用户希望"在 Telegram 的长对话在 Desktop 中无缝继续"——目前每个平台只能依赖持久记忆 + saved facts，无会话历史共享。
- **Windows 桌面端稳定性**：睡眠/锁屏、断连重连、更新失败（cryptography 缺失）是高频抱怨。
- **CLI 与脚本集成缺陷**：`hermes -z` 文档承诺支持 pipe，但实测丢弃 stdin，严重破坏脚本化使用场景。
- **Desktop UI 渲染问题**：代码块 URL 被改写、复选框图标错位、pin/unpin 状态被后端 list 覆盖、推理块流式滚动抖动。

**积极反馈信号**
- 👍 点赞集中在"折叠思考块默认收起"（2 赞）和跨平台会话（3 赞）—— 用户希望降低噪音、统一体验。
- 飞书 Markdown 表格修复 [#68121](https://github.com/nousresearch/hermes-agent/pull/68121) 关闭且无回归评论，说明该改动稳健。

**抱怨**
- "duplicate issues 没人合并"——4 条相似跨平台会话请求未整合。
- 安全类 Issue（#77162/#77164/#77165）由同一人集中提交，反映该用户对凭据暴露路径做了系统审计，但官方对这些问题的优先响应策略不清晰。

---

## 8. 待处理积压（提醒维护者）

按"创建时间最早 + 仍 OPEN + 评论较多"筛选：

| Issue/PR | 创建日 | 标题 | 建议 |
|---|---|---|---|
| [#4335](https://github.com/nousresearch/hermes-agent/issues/4335) | **2026-03-31** | Cross-platform session context sharing | ⏰ 已开放 **125 天**，需官方表态或合并为 RFC |
| [#44846](https://github.com/nousresearch/hermes-agent/issues/44846) | 2026-06-12 | Cross-channel session awareness | 与 #4335 主题相同，建议合并 |
| [#47863](https://github.com/nousresearch/hermes-agent/pull/47863) | 2026-06-17 | feat(approval): native cross-platform approval delegation | 大型 PR，OPEN 超 45 天 |
| [#54643](https://github.com/nousresearch/hermes-agent/pull/54643) | 2026-06-29 | fix(zai): rewrite /api/anthropic → /api/coding/paas/v4 | 与 #77240 相关，需统一路由逻辑 |
| [#71996](https://github.com/nousresearch/hermes-agent/pull/71996) | 2026-07-26 | fix(approval): stop absolute-path spellings bypassing hardline floor | 安全相关，长时间未评审 |
| [#75137](https://github.com/nousresearch/hermes-agent/pull/75137) | 2026-07-31 | fix(config): load .env with interpolate=False | 影响凭据完整性，需关注 |

**核心建议：**
1. 整合 4 个跨平台会话重复 Issue 为 1 个 tracking issue，并发布官方 RFC。
2. 优先评审 [#77129](https://github.com/nousresearch/hermes-agent/pull/77129)（WS race 修复）和 [#77243](https://github.com/nousresearch/hermes-agent/pull/77243)（DeepSeek OpenCode 修复），均解决已复现的高严重缺陷。
3. 对 #77236 AIDE² 自进化 PR 给出明确 `needs-decision` 结论，避免长期悬挂。

---

> 📌 **日报结论：** Hermes Agent 当前处于"高活跃、低发布、强积压"状态，会话管理与安全脱敏是下一阶段最值得投入的两大方向；建议维护者启动版本节奏（哪怕 minor/patch），将 13 条已关闭变更与若干待合并修复一起打包发布，缓解社区等待焦虑。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目日报
**日期：2026-08-03（数据截至过去 24 小时）**

---

## 1. 今日速览

PicoClaw 今日呈现**中等活跃度**：24 小时内共有 3 条 Issues 更新、9 条 PR 更新（其中 3 条已合并/关闭，6 条仍待处理），无新版本发布。整体工作重心集中在 **Agent 行为稳定性修复**与 **命令执行安全边界**两条主线，其中 `lucapette` 提交 Issue + PR 的"同源修复对"为今日最关键的进展。值得关注的是，已出现若干被标记为 `stale` 的长期未推进的 PR 和 Issue（涉及安全、i18n、provider 集成等），存在一定的维护积压。

---

## 2. 版本发布

无新版本发布。

---

## 3. 项目进展

今日已合并/关闭的 PR 共 3 条，其中两条为有效推进，一条为机器人重复提交：

| PR | 标题 | 作者 | 状态 | 影响 |
|---|---|---|---|---|
| [#3310](https://github.com/sipeed/picoclaw/pull/3310) | Feat/auto pr | j-v | 已关闭 | 标题与描述仅为"picoclanker did this"，疑似自动机器人提交的无效 PR，已被关闭 |
| [#3313](https://github.com/sipeed/picoclaw/pull/3313) | Fix: agent not able to execute shell command added to customAllowPatterns | j-v | 已关闭 | 与 #3314 内容高度相似，疑为重复提交，被关闭 |
| [#3261](https://github.com/sipeed/picoclaw/pull/3261) | Add zh-TW locale and Traditional Chinese translations | PeterDaveHello | 已关闭（stale）| 繁体中文本地化方案，未能成功合入即被关闭，资源有流失风险 |

**整体评估**：今日实质性合入较少，但**在途的高质量修复**较密集（详见第 5 节），预计在未来 1–2 天内会有 Bug 修复合入主分支。

---

## 4. 社区热点

按评论数、状态紧迫度与作者活跃度综合排序：

1. **[#3311](https://github.com/sipeed/picoclaw/issues/3311) - "Repeated identical tool failure loops silently to max_tool_iterations"**（lucapette）
   - 新开 + 0 评论，但因附带**生产环境实测反馈**且作者同步提交修复 PR (#3312)，社区关注度预期较高。

2. **[#3298](https://github.com/sipeed/picoclaw/issues/3298) - "Add AI Router as an OpenAI-compatible provider preset"**（airouter-dev）
   - 1 条评论。属于**生态合作型请求**，作者主动披露其为 AI Router 维护者并愿意贡献，反映出社区希望 PicoClaw 进一步开放 provider 接入标准。

3. **[#3294](https://github.com/sipeed/picoclaw/issues/3294) - "/list models only shows the current model"**（2suige-coder）
   - 1 条评论。属于**体验一致性问题**，用户预期与实际行为不符。

**诉求分析**：当前社区诉求集中在三个方向——**Agent 行为可预期性**（避免无限循环）、**Provider 生态开放**（第三方网关接入）、**CLI 行为与文档一致**（命令语义清晰）。

---

## 5. Bug 与稳定性

按严重程度排列：

### 🔴 高严重度（直接影响用户可用性）

| Issue/PR | 描述 | 是否有 fix PR |
|---|---|---|
| [#3311](https://github.com/sipeed/picoclaw/issues/3311) + [#3312](https://github.com/sipeed/picoclaw/pull/3312) | 当工具连续以**相同错误**失败时（如无凭证的 `git` 调用或被 shell 安全守卫拦截），Agent 会反复调用 LLM 与工具直至达到 `max_tool_iterations`，**用户最终收不到任何回复**。已在 Telegram 生产环境复现。 | ✅ 已有修复 PR（#3312，同作者 lucapette） |

### 🟠 中严重度（功能受限但有 workaround）

| Issue/PR | 描述 | 是否有 fix PR |
|---|---|---|
| [#3294](https://github.com/sipeed/picoclaw/issues/3294) | `/list models` 命令仅显示当前模型，未列出 `model_list` 中全部已配置模型，命令名与实际行为不符。 | ❌ 暂无 PR |
| [#3314](https://github.com/sipeed/picoclaw/pull/3314) | 即便用户将 `git push` 加入 exec allow list，Agent 仍无法执行；`customAllowPatterns` 未生效（默认 deny 规则在 `guardCommand` 中始终优先）。 | ✅ 已有 fix PR（#3314，待审查），但同作者的 #3313 已关闭，建议维护者直接合并 #3314 |

### 🟡 低严重度（边界情况 / 鲁棒性）

| PR | 描述 |
|---|---|
| [#3295](https://github.com/sipeed/picoclaw/pull/3295) | `SplitMessage` 在 fence info string 超过 `maxLen` 时可能挂起，修复后改为有界 raw split 兜底，保证进度推进。 |

---

## 6. 功能请求与路线图信号

### 已正式提出的 Feature 请求

| 编号 | 内容 | 配套 PR | 进入下一版本的概率 |
|---|---|---|---|
| [#3298](https://github.com/sipeed/picoclaw/issues/3298) | 将 AI Router 加入官方 OpenAI 兼容 provider 预设列表 | 暂无 | ⭐⭐⭐ 中等——降低第三方网关接入门槛，符合"openai-compatible"路线，但需确认维护者是否愿意在代码中维护第三方品牌预设 |
| [#3299](https://github.com/sipeed/picoclaw/pull/3299) | 新增原生 Exa web search provider（`tools.web` / `web_search`） | ✅ 已有完整 PR | ⭐⭐⭐⭐ 较高——补充搜索能力，符合 `web_search` 抽象层扩展方向 |

### 仍在等待的长期 PR（stale）

- [#3297](https://github.com/sipeed/picoclaw/pull/3297) - **远程 prompt 与 exec 边界硬化（安全相关）**：建议默认禁用远程 exec、迁移 schema v4。此为安全敏感项，建议维护者优先 review。
- [#3296](https://github.com/sipeed/picoclaw/pull/3296) - 捷克语 i18n 完成。
- [#3261](https://github.com/sipeed/picoclaw/pull/3261) - 繁体中文本地化（已 stale 后关闭）。

---

## 7. 用户反馈摘要

**真实痛点（来自 Issue 描述）：**

1. **"用户感受层面的静默失败"** — [#3311](https://github.com/sipeed/picoclaw/issues/3311) 反映出当 Agent 陷入工具错误死循环时，用户在 Telegram 等通道下完全感受不到任何进度或错误提示，"几分钟没回复"是体验灾难。这一问题对生产环境影响最大。

2. **"配置看起来生效，实际被覆盖"** — [#3314](https://github.com/sipeed/picoclaw/pull/3314) 揭示了 `customAllowPatterns` 默认被 deny 规则优先覆盖的隐性陷阱，给高级用户带来调试困扰。

3. **"命令命名与行为不匹配"** — [#3294](https://github.com/sipeed/picoclaw/issues/3294) 中 `/list models` 与实际"只显示当前模型"的不一致，降低了 CLI 的可预测性。

**使用场景**：从 Issue 内容可见，主要部署场景为 **Telegram + 本地 Agent**，用户在远程交互场景下对 Agent 鲁棒性与命令可预期性要求较高。

---

## 8. 待处理积压提醒

以下 Issue/PR 已标为 `stale`，建议维护者优先关注，避免长期搁置：

| 编号 | 类型 | 距创建已过天数 | 备注 |
|---|---|---|---|
| [#3297](https://github.com/sipeed/picoclaw/pull/3297) | 安全 PR | ~8 天 | **高优先级**：涉及远程 prompt/exec 边界硬化与 schema v4 迁移 |
| [#3298](https://github.com/sipeed/picoclaw/issues/3298) | Feature Issue | ~8 天 | 含作者主动贡献意向 |
| [#3296](https://github.com/sipeed/picoclaw/pull/3296) | i18n PR | ~8 天 | 捷克语本地化 |
| [#3295](https://github.com/sipeed/picoclaw/pull/3295) | Bug fix PR | ~8 天 | `SplitMessage` 边界修复 |
| [#3299](https://github.com/sipeed/picoclaw/pull/3299) | Feature PR | ~8 天 | Exa 搜索 provider |
| [#3261](https://github.com/sipeed/picoclaw/pull/3261) | i18n PR（已关闭）| ~18 天 | 繁体中文本地化已 stale 关闭，建议作者重新开 PR 并调整 base |

**健康度提示**：项目存在明显的"提交 → 等待 review → stale"模式，建议维护者建立周期性的 stale PR 清理与 review 排期机制，避免外部贡献者流失（今日已有 #3261 因此被关闭）。

---

*报告基于 GitHub Issues / Pull Requests 公开数据生成，数据时间窗口为 2026-08-02 至 2026-08-03。*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报

**报告日期**：2026-08-03
**数据范围**：过去 24 小时（2026-08-02 ~ 2026-08-03）

---

## 1. 今日速览

NanoClaw 今日整体活跃度处于**中等偏高**水平，过去 24 小时内共有 1 条新 Issue 与 10 条 PR 互动（其中 3 条已关闭，7 条仍待合并），无新版本发布。当日的活动呈现出鲜明的"**修复驱动 + 通道扩展并行**"特征：一方面集中在修复数据库写入路径、信号重启、发布回读等稳定性缺陷；另一方面持续推进 Dial 通道适配器、远程 Streamable HTTP MCP 服务器等新功能的集成。值得关注的是，Issue #3177 披露的 Docker 跨挂载文件系统下 SQLite 锁竞争问题（已累积 29,000+ 错误）属于**生产环境高优先级缺陷**，需维护团队尽快响应。

---

## 2. 版本发布

⚠️ 今日无新版本发布，跳过此章节。

---

## 3. 项目进展

今日共 **3 条 PR 完成生命周期**，具体推进情况如下：

### ✅ 已合并/关闭 PR

| PR | 标题 | 类型 | 贡献者 | 影响 |
|---|---|---|---|---|
| [#3176](https://github.com/nanocoai/nanoclaw/pull/3176) | fix(release): retry post-publish readback | 修复（核心团队） | glifocat | 增强发布流程健壮性 |
| [#301](https://github.com/nanocoai/nanoclaw/pull/301) | feat(skill): enhance add-telegram skill | 功能/技能 | kadaliao | 长期停滞后终关闭（状态：Pending Closure / Blocked） |
| [#2626](https://github.com/nanocoai/nanoclaw/pull/2626) | fix(signal): replace silent restartService failure with explicit error | 修复（核心团队） | eldar702 | 修复 Signal setup 中的静默失败问题，closes [#2583](https://github.com/nanocoai/nanoclaw/issues/2583) |

### 📊 进展评估

- **发布可靠性**：#3176 与 #2626 均属基础设施级修复，提升了发布与 setup 路径的可观测性。
- **积压清理**：#301 自 2026-02-18 起滞留近 5.5 个月，今日以 Pending Closure 状态关闭，说明维护者正在主动清理长期未响应的 PR。
- **整体推进度**：项目在通道适配器（Dial）、MCP 协议扩展（远程 Streamable HTTP）、文档模板（Markdown 上下文）三条主线持续演进，未出现停滞迹象。

---

## 4. 社区热点

今日所有 Issues 与 PRs 的评论数均为 0，点赞数均为 0，社区互动处于**静默期**。但从话题密度看，下列议题是当前最受关注的焦点：

| 话题 | 相关条目 | 关注度分析 |
|---|---|---|
| **数据库写入路径安全** | [#3177](https://github.com/nanocoai/nanoclaw/issues/3177)、[#3175](https://github.com/nanocoai/nanoclaw/pull/3175) | 同一日两条相关条目，指向 outbound.db 单写者规则被破坏的系统性风险 |
| **Dial 通道集成** | [#3050](https://github.com/nanocoai/nanoclaw/pull/3050)、[#3041](https://github.com/nanocoai/nanoclaw/pull/3041) | 单一贡献者 OmriBenShoham 同步提交 channel picker 集成与 adapter 实现 |
| **MCP 远程化** | [#3092](https://github.com/nanocoai/nanoclaw/pull/3092) | 远程 Streamable HTTP MCP 服务器支持，反映向分布式部署演进的趋势 |

> 📌 **诉求分析**：数据库锁竞争（#3177）与命令门控绕过 outbound.db（#3175）几乎同时出现，说明社区已开始系统性地反思 SQLite 在容器化场景下的局限性，未来可能推动 WAL 模式或独立 writer 架构改造。

---

## 5. Bug 与稳定性

按严重程度排序：

### 🔴 P0 - 生产环境严重缺陷

**[#3177](https://github.com/nanocoai/nanoclaw/issues/3177) — Session 数据库在 Docker 跨挂载文件系统上锁竞争**
- **报告者**：DawoudIO | **状态**：OPEN | **创建**：2026-08-02
- **影响**：在 macOS/Linux 的 Docker 挂载（VirtioFS）环境下，`inbound.db` / `outbound.db` 因 SQLite DELETE journal 模式无法跨挂载传播，导致 **29,000+ readonly errors** 与间歇性投递失败。
- **是否有 fix PR**：❌ 尚无关联 PR
- **建议**：维护者应优先 review，并在 PR #3175（#3175 已触及同一数据库写入路径）一并考虑 WAL 模式切换或文件锁降级策略。

### 🟠 P1 - 功能性缺陷（已有修复）

**[#3175](https://github.com/nanocoai/nanoclaw/pull/3175) — 命令门控拒绝通知绕过 outbound.db 单写者规则**
- **作者**：Joi | **状态**：OPEN（待合并）
- **风险**：`writeOutboundDirect()` 在容器内由 host 直接 INSERT 容器拥有的 `outbound.db`，违反 `docs/db.md` 单写者约束，存在数据损坏隐患。
- **进度**：修复方案已提出，建议与 #3177 协同 review。

**[#2626](https://github.com/nanocoai/nanoclaw/pull/2626) — Signal `restartService` 静默失败**
- **作者**：eldar702 | **状态**：✅ 已关闭（合并）
- **风险**：原 `launchctl kickstart -k` 在 plist 未加载时静默 no-op，导致 setup 向导误报成功。
- **进度**：已通过显式错误处理修复，closes #2583。

**[#2625](https://github.com/nanocoai/nanoclaw/pull/2625) — Teams manifest 硬编码 `supportsFiles: false`**
- **作者**：eldar702 | **状态**：OPEN
- **风险**：导致 Teams 个人聊天中文件上传 UI 不可用且 bot 端 `send_file` 被静默丢弃，closes #2461。
- **进度**：修复方案已就绪但仍未合并，建议优先处理。

### 🟡 P2 - 文档/发布类问题

**[#3176](https://github.com/nanocoai/nanoclaw/pull/3176) — 发布后回读重试**
- 状态：✅ 已关闭
- 影响：减少发布流程中的瞬态失败。

---

## 6. 功能请求与路线图信号

### 🆕 新功能（已落地为 PR）

1. **Dial 通道适配器**（[#3041](https://github.com/nanocoai/nanoclaw/pull/3041) + [#3050](https://github.com/nanocoai/nanoclaw/pull/3050)）
   - 新增 SMS 与 AI 语音呼叫集成，由 OmriBenShoham 同步推进 setup wizard 与 channel picker 集成。
   - 路线图信号：项目正持续扩张多通道矩阵，Dial 与 Telegram（#301 已关闭）、Signal（#2626 已修复）、Teams（#2625 待合并）并行，说明**多通道消息平台仍是下一阶段战略重点**。

2. **远程 Streamable HTTP MCP 服务器支持**（[#3092](https://github.com/nanocoai/nanoclaw/pull/3092)）
   - 由核心团队 amit-shafnir 推进，标志 NanoClaw 从本地 MCP 向分布式 MCP 部署演进。

### 🛠️ 内部优化

3. **模板 Markdown 上下文增强**（[#3090](https://github.com/nanocoai/nanoclaw/pull/3090)）——提升 LLM 提示可读性。
4. **qodo skills 移除**（[#3172](https://github.com/nanocoai/nanoclaw/pull/3172)）——核心团队 glifocat 主导的清理性重构。

### 📈 路线图研判

下一版本（假设近期发布）大概率包含：**Dial 通道适配器 + 远程 MCP 支持 + Teams 文件上传修复 + Signal 静默失败修复**。其中 #2625 等待时间最长（自 2026-05-27），建议下个版本一并纳入。

---

## 7. 用户反馈摘要

⚠️ **数据局限**：所有 Issues/PRs 的评论数与点赞数均为 0，未能从公开评论中提炼更多用户反馈。以下仅基于 Issue 描述推断的痛点：

| 痛点来源 | 场景 | 情绪信号 |
|---|---|---|
| #3177 | 开发者本地使用 macOS + Docker Desktop 时，AI agent 持续投递失败 | 高频错误累积（29k+），疑似已严重影响开发体验 |
| #3175 | 容器化部署时数据库损坏隐患 | 暴露了架构文档（`docs/db.md`）与代码实现的不一致 |
| #2583（#2626 引用） | Signal setup 向误导报成功 | 信任度受损 |
| #2461（#2625 引用） | Teams 开发者无法实现文件双向传输 | 功能缺失已阻碍集成场景 |

> 💡 综合判断：用户当前主要痛点集中在**容器化部署可靠性**与**通道功能完整性**，建议下一版本优先解决这两类问题。

---

## 8. 待处理积压

以下条目**开放时间显著偏长**，提醒维护者关注：

| 编号 | 标题 | 类型 | 创建日期 | 已开放天数 |
|---|---|---|---|---|
| [#301](https://github.com/nanocoai/nanoclaw/pull/301) | enhance add-telegram skill | PR | 2026-02-18 | 166 天（已关闭但曾长期 Blocked） |
| [#2625](https://github.com/nanocoai/nanoclaw/pull/2625) | fix(teams): set supportsFiles: true | PR | 2026-05-27 | ~67 天 |
| [#2626](https://github.com/nanocoai/nanoclaw/pull/2626) | fix(signal): silent restartService | PR | 2026-05-27 | ~67 天（已关闭 ✅） |
| [#3041](https://github.com/nanocoai/nanoclaw/pull/3041) | add Dial channel adapter | PR | 2026-07-14 | ~19 天 |
| [#3050](https://github.com/nanocoai/nanoclaw/pull/3050) | add Dial to channel picker | PR | 2026-07-14 | ~19 天 |
| [#3090](https://github.com/nanocoai/nanoclaw/pull/3090) | fix(templates): prepend Markdown | PR | 2026-07-19 | ~14 天 |
| [#3092](https://github.com/nanocoai/nanoclaw/pull/3092) | feat: remote Streamable HTTP MCP | PR | 2026-07-19 | ~14 天 |

### 🎯 优先建议

1. **#3177**（高严重度 + 无修复）：应作为下一 PR 周期 P0 任务。
2. **#2625**：已超过两个月且修复方案明确，应优先合并。
3. **Dial 双 PR（#3041 / #3050）**：作为同一功能闭环，建议同步 review、合并，避免代码漂移。

---

## 📊 项目健康度小结

| 维度 | 评估 |
|---|---|
| **维护响应度** | ⭐⭐⭐⭐ 中高 — 今日有 3 条 PR 完成关闭，含核心团队主导修复 |
| **代码流入** | ⭐⭐⭐⭐ 中高 — 7 条新 PR 待合并，主题分布合理 |
| **社区互动** | ⭐⭐ 偏低 — 评论与点赞均为 0，缺乏讨论氛围 |
| **稳定性信号** | ⭐⭐⭐ 中等 — 出现 P0 级别数据库锁竞争问题，需紧急关注 |
| **路线图清晰度** | ⭐⭐⭐⭐⭐ 高 — 通道扩展 + MCP 远程化主线明确 |

**总体评价**：项目处于**活跃迭代期**，但需警惕 #3177 暴露的 SQLite 在容器化场景下的系统性风险，建议下一个迭代周期设立专门的"数据库可靠性"主题。

---

*报告生成时间：2026-08-03 | 数据来源：GitHub REST API*
*项目仓库：[github.com/qwibitai/nanoclaw](https://github.com/qwibitai/nanoclaw)*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 · 2026-08-03

---

## 1. 今日速览

IronClaw 过去 24 小时活跃度较高：共 7 条 Issues 更新、26 条 PR 更新，但 **0 个新版本发布**。整体来看，项目处于 **"重构收尾 + 安全/稳定性修补并行推进"** 的阶段：Wave 2 端口反转重构系列（WS2.2 / WS2.4 / WS5）已通过 #7018 合并收尾；同时，社区贡献者 `theredspoon` 集中提交了 5 条高质量 QA 报告与对应修复 PR，集中在"出站投递原子性"与"代理变量绕过 DNS 防护"两条主线。需要注意的是，发布自动化 PR #5598 已积压超 30 天未合并。

---

## 2. 版本发布

**今日无新版本发布。** 待合并中的发布候选为 [PR #5598](https://github.com/nearai/ironclaw/pull/5598)（创建于 2026-07-03，迄今 31 天），将带来：
- `ironclaw_common`: 0.4.2 → 0.5.0（⚠ API 破坏性变更）
- `ironclaw_safety`: 0.2.2 → 0.2.3
- `ironclaw_skills`: 0.3.0 → 0.4.0（⚠ API 破坏性变更）

⚠️ 该 PR 仍 OPEN，建议维护者核查其与近两日重构（#7018 等）是否兼容后再合并。

---

## 3. 项目进展

### ✅ 已合并/关闭的关键 PR

| PR | 说明 | 影响 |
|---|---|---|
| [#7018](https://github.com/nearai/ironclaw/pull/7018) | **Wave 2 端口反转整合**：将 #7000/#7003/#7004/#7005 合并为单分支落地 | 终结 4 步级联合并带来的反复 rebase 成本，仓库契约层面进入稳定期 |
| [#7013](https://github.com/nearai/ironclaw/pull/7013) | 恢复变更行 90% 覆盖率门槛 | 收紧 CI 质量门禁 |
| [#6952](https://github.com/nearai/ironclaw/pull/6952) | Reborn PR 测试按受影响区域精准调度 | CI 提速，回归面收窄 |
| [#7007](https://github.com/nearai/ironclaw/pull/7007) | merge queue 失败自动告警到 live-canary Slack | 提升合并流水线可观测性 |

### 🔄 重点开放 PR

- [#7024](https://github.com/nearai/ironclaw/pull/7024)（XL, 低风险）：`Auto` 模式 MCP 注册遵循 RFC 9728 完成 OAuth 校验，**修复了宿主 MCP 鉴权启发式猜测**的隐患。
- [#5981](https://github.com/nearai/ironclaw/pull/5981)（XL）：Reborn 队列消息转向（queued-message steering）已前向移植到 current main 并修复了 turn-boundary race。
- [#7019](https://github.com/nearai/ironclaw/pull/7019)（M）：Reborn CI 桶内共享 `cargo llvm-cov` 依赖编译。
- [#7026](https://github.com/nearai/ironclaw/pull/7026)（S）：修复 `ironclaw serve` 启动时对遗留 loop checkpoint 的状态 token 拼接失败回归。

**整体评估**：项目在「质量门禁收紧」与「契约重构清理」两条战线取得实质推进，安全/投递一致性方面的修复即将进入合并窗口。

---

## 4. 社区热点

今日讨论密度集中在 QA 报告与对应修复上，单一贡献者 `theredspoon` 一日内贡献了 **3 条 Issue + 3 条对应 fix PR**（issue→PR 1:1 配套），显示高质量外部审计正在发生：

| 主题 | Issue | 对应 Fix PR |
|---|---|---|
| 出站投递单飞所有权 | [#7025](https://github.com/nearai/ironclaw/issues/7025) | [#7029](https://github.com/nearai/ironclaw/pull/7029) |
| 终态保护 | [#7017](https://github.com/nearai/ironclaw/issues/7017) | [#7028](https://github.com/nearai/ironclaw/pull/7028) |
| 环境代理绕过 DNS 防护 | [#7016](https://github.com/nearai/ironclaw/issues/7016) | [#7027](https://github.com/nearai/ironclaw/pull/7027) |

**诉求分析**：社区对"系统级代理变量被硬化网络层忽略"与"中断恢复可能覆写 Delivered 状态"两类安全/正确性问题高度敏感。#7012 关于"时间感知 + prompt-cache 不抖动"的 [设计讨论](https://github.com/nearai/ironclaw/issues/7012) 则揭示出更深层的运行时契约诉求：仅移动 cache 边界不够，需明确"哪些时间事实属于上下文、哪些不属于"。

---

## 5. Bug 与稳定性

按严重程度排序：

| 等级 | Issue | 描述 | 是否已有 Fix |
|---|---|---|---|
| 🔴 高 | [#7025](https://github.com/nearai/ironclaw/issues/7025) | 多个并发协调器可能对同一投递发起重复发送 | ✅ [#7029](https://github.com/nearai/ironclaw/pull/7029) 待合并 |
| 🔴 高 | [#7017](https://github.com/nearai/ironclaw/issues/7017) | 中断-恢复路径可覆写已确认的 Delivered 状态 | ✅ [#7028](https://github.com/nearai/ironclaw/pull/7028) 待合并 |
| 🔴 高 | [#7016](https://github.com/nearai/ironclaw/issues/7016) | `HTTPS_PROXY` 等环境变量绕过 SSRF / DNS 重绑定防护 | ✅ [#7027](https://github.com/nearai/ironclaw/pull/7027) 待合并 |
| 🟡 中 | [#7031](https://github.com/nearai/ironclaw/issues/7031) | 协调器生命周期内，失败的 lazy 投递恢复不会重试 | ❌ 暂未提供修复 PR |
| 🟡 中 | [#7030](https://github.com/nearai/ironclaw/issues/7030) | `doctor` 命令中 host-mediated egress 诊断忽略环境代理 | ❌ 暂未提供修复 PR |
| 🟢 低 | [#7015](https://github.com/nearai/ironclaw/issues/7015) | Staking 页面 UI bug（已 CLOSED） | ✅ 已关闭 |

**稳定性信号**：3 条高危 issue 均有对应 fix PR 进入评审窗口，预计 1-2 日内可落地；2 条中危 issue 当前无修复 PR，建议优先关注。

---

## 6. 功能请求与路线图信号

- **出站投递耐久性（durable delivery）**——通过 #7029/#7028/#7027 形成"单飞 + 终态保护 + 代理硬隔离"三件套，已成为近期路线图主线。
- **MCP 鉴权规范化**——[#7024](https://github.com/nearai/ironclaw/pull/7024) 将 Auto 模式升级到 RFC 9728 metadata-driven OAuth，预计将成为下一次发布说明的重点。
- **时间感知重构**——[#7012](https://github.com/nearai/ironclaw/issues/7012) 提出"追加式滚动上下文 + 时长证据"，是对 #6985 修复的延伸设计讨论，可能演进为新 RFC。
- **Reborn 队列消息转向**——[#5981](https://github.com/nearai/ironclaw/pull/5981) 已完成 forward-port 与 race fix，是中长期能力补齐项。

---

## 7. 用户反馈摘要

- **真实痛点**：用户 `sergeiest` 在 [#7015](https://github.com/nearai/ironclaw/issues/7015) 反馈 Staking 页面 UI bug，但因缺少截图与复现步骤，已被快速关闭——**提示社区：bug 报告需包含最小复现物料**。
- **高频场景**：开发者 `theredspoon` 在本地 clone 仓库上对 Reborn 出站投递与诊断面做了系统性 QA 测试，**揭示出硬化传输层与恢复路径在并发/代理场景下存在系统性缺口**。
- **隐含诉求**：环境代理一致性（操作员期望代理生效，但硬化层希望忽略），诊断面与执行面语义脱节——是 #7030 与 #7016 的共同根源。
- **满意度侧信号**：Wave 2 重构以一次性整合 PR 取代级联合并，反映出**维护者主动降低协作摩擦**，社区治理趋于成熟。

---

## 8. 待处理积压（维护者关注提醒）

| 编号 | 类型 | 积压天数 | 链接 |
|---|---|---|---|
| [#5598](https://github.com/nearai/ironclaw/pull/5598) | **发布 PR** | **31 天** | ⚠️ 含 2 个 API 破坏性变更，建议尽快评审/合并或拆分 |
| [#5981](https://github.com/nearai/ironclaw/pull/5981) | 功能 PR | 23 天 | 队列消息转向长期未推进 |
| [#7012](https://github.com/nearai/ironclaw/issues/7012) | 设计讨论 | 1 天 | 需核心维护者表态以收敛方向 |
| [#7031](https://github.com/nearai/ironclaw/issues/7031) | QA 中危 | 0 天 | 尚无修复 PR，建议指派 owner |
| [#7030](https://github.com/nearai/ironclaw/issues/7030) | QA 中危 | 0 天 | 尚无修复 PR，建议与 #7027 配套处理 |

---

### 项目健康度评分（本期）：⭐⭐⭐⭐ (4/5)

- ✅ 高质量外部 QA 与 1:1 修复 PR 配套，协作模式健康
- ✅ Wave 2 重构收束，契约面趋于稳定
- ⚠️ 发布流程长期阻塞（#5598 超 30 天）
- ⚠️ 两条中危 QA 暂无修复 owner
- ⚠️ 无版本发布，外部用户无法消费近两日修复

---

*数据来源：GitHub REST API · 报告生成时间：2026-08-03*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目日报
**报告日期：2026-08-03**

---

## 1. 今日速览

LobsterAI 项目今日活跃度较低，整体处于 **「陈旧清理 + 依赖收敛」** 阶段。过去 24 小时共 3 条 Issue 更新（2 条已关闭、1 条仍开放）和 6 条 PR 更新（4 条仍开放、2 条已关闭），且 **全部条目均带有 `[stale]` 标签**，说明今日的事件流主要来自 stale bot 的自动扫描清理，而非活跃的代码评审与新需求提出。**无新版本发布，无新代码合入主线**。社区互动指标普遍偏低（高 👍/评论数均为 0），项目热度整体偏冷，建议关注积压 PR 的处理节奏。

---

## 2. 版本发布

**今日无新版本发布。**

---

## 3. 项目进展

今日无任何功能性 PR 被合并。两个被关闭的 PR（#1285、#1286）均为 Dependabot 提出的开发依赖升级：

| PR | 内容 | 状态 |
|---|---|---|
| [#1285](https://github.com/netease-youdao/LobsterAI/pull/1285) | `concurrently` 8.2.2 → 9.2.1 | 已关闭（stale） |
| [#1286](https://github.com/netease-youdao/LobsterAI/pull/1286) | `tailwindcss` 3.4.19 → 4.2.2 | 已关闭（stale） |

需特别指出：**tailwindcss 主版本跨越（3.x → 4.x）属于潜在的破坏性变更**，其关闭意味着该项目短期内不会升级至 Tailwind 4 生态，可能影响依赖兼容性。另外，dependabot PR 被批量关闭为 stale，提示仓库 **缺少自动化的依赖维护工作流**（如 CI 中的 stale 检测与自动重开/rebase 机制）。

整体来看，项目 **今日未向前推进任何代码层面的功能/修复**。

---

## 4. 社区热点

由于所有条目均处于 stale 状态，今日 **无明显社区热点**。从静态内容观察，两个被关闭的 Issue 具有代表性：

- **[#1289 为长代码块添加折叠/展开功能](https://github.com/netease-youdao/LobsterAI/issues/1289)** —— 反映了 AI 对话产品中长期存在的一个 **可读性痛点**：当模型输出 15~200 行的代码块时，既达不到 `CODE_BLOCK_LINE_LIMIT=200` 的降级阈值，也完全展开，造成视图冗长。该需求是 AI Chat 类产品的通用体验诉求。
- **[#1287 POPO 机器人连通性测试校验过松](https://github.com/netease-youdao/LobsterAI/issues/1287)** —— 指出 IM 集成中的 **安全/校验缺失**：appkey、appsecret、aes key 全部填 `1` 仍能通过连通性测试，属于安全相关的功能性问题。

两者评论数均为 2，但 👍 数均为 0，说明关注度有限但议题本身具备推广价值。

---

## 5. Bug 与稳定性

| 严重程度 | Issue | 标题 | 状态 | 是否有 fix PR |
|---|---|---|---|---|
| 🔴 中-高 | [#1217](https://github.com/netease-youdao/LobsterAI/issues/1217) | 运行过程中偶发启动网关，影响正常使用 | **OPEN（stale）** | ❌ 无 |
| 🟡 中 | [#1287](https://github.com/netease-youdao/LobsterAI/issues/1287) | POPO 机器人连通性测试校验过松（填 `1` 也能通过） | 已关闭（stale） | ❌ 无 |

**重点说明**：
- **#1217** 描述了 LobsterAI 在 Win10 / 版本 2026.3.26 下 **一天内 3~5 次偶发的网关重启**，对正常使用造成严重影响，且附带 4 月 1 日的日志压缩包作为佐证。但该 Issue 自 4 月 1 日创建以来仅 1 条评论，处于 stale 状态，意味着 **维护团队尚未形成有效响应**。
- **#1287** 虽被关闭为 stale，但作为安全校验类问题，应在下次恢复关注时优先排查（API 调用前的字段非空/格式校验是否缺失）。

---

## 6. 功能请求与路线图信号

| 需求 | 关联 PR | 进入下一版本可能性 |
|---|---|---|
| 长代码块折叠/展开（Issue #1289） | ❌ 无对应 PR | **中**：该需求具备广泛的用户共鸣，但因 Issue 被关闭为 stale 且无 PR 跟进，短期进入路线图的概率较低 |
| 定时任务列表排序规则重构（按 `nextRunAtMs` + 创建时间排序，避免随机位置） | [#1218](https://github.com/netease-youdao/LobsterAI/pull/1218) | **中-高**：PR 根因分析清晰，针对 UUID v4 随机排序导致的体验问题给出了明确方案 |
| Cowork 会话列表/详情页性能优化（消除无效重渲染、N+1 查询） | [#1219](https://github.com/netease-youdao/LobsterAI/pull/1219)、[#1220](https://github.com/netease-youdao/LobsterAI/pull/1220) | **中**：两个 PR 均处于 stale 状态，未进入 review |
| IM 配置 setConfig 时强制重建 chat handler（修复钉钉/Telegram 凭据保存后 systemPrompt、skills 等不生效的问题） | [#1215](https://github.com/netease-youdao/LobsterAI/pull/1215) | **中**：问题定位明确（`updateChatHandler()` 仅在 payload 含 `settings` 时被调用），属于典型的 bug 修复型 PR |

**信号解读**：积压 PR 主要集中在 **「IM 集成一致性」** 与 **「Cowork 会话性能」** 两个方向，是项目当前最值得维护者主动拉起评审的领域。

---

## 7. 用户反馈摘要

由于评论数普遍较低（最高 2 条），可提炼的真实用户反馈有限：

- **使用场景**（#1217）：用户在 Windows 10 环境长期运行 LobsterAI（版本 2026.3.26）作为日常工具，期望其在后台稳定运行而不被频繁中断。该反馈反映出 **桌面端常驻进程的可靠性是用户基础期待**。
- **安全校验诉求**（#1287）：用户在配置 POPO 机器人时，期望系统对凭据字段进行最低限度的格式/长度校验，而非任意输入均通过连通性测试，提示 **IM 配置面板的健壮性需要加强**。
- **阅读体验诉求**（#1289）：用户希望 AI 输出的中等长度代码块（15~200 行）能默认折叠，这是 **AI 编程助手类产品的共性体验诉求**，与 Cursor、Claude.ai 等同类产品的代码块交互策略一致。

**满意度评估**：从社区情绪看，无显著投诉爆发点，但 **「偶发网关重启」与「依赖维护停滞」** 是潜在不满来源。

---

## 8. 待处理积压

以下 Issue/PR 已长时间未获得维护者响应，需重点关注：

| 类型 | 编号 | 标题 | 闲置时长（截至 2026-08-03） |
|---|---|---|---|
| 🐛 Bug | [#1217](https://github.com/netease-youdao/LobsterAI/issues/1217) | 运行过程中偶发启动网关 | ~4 个月（自 2026-04-01） |
| 🔧 PR | [#1215](https://github.com/netease-youdao/LobsterAI/pull/1215) | fix(im): 强制重建 chat handler | ~4 个月 |
| 🔧 PR | [#1218](https://github.com/netease-youdao/LobsterAI/pull/1218) | 定时任务列表排序重构 | ~4 个月 |
| 🔧 PR | [#1219](https://github.com/netease-youdao/LobsterAI/pull/1219) | 消除会话列表/详情页无效重渲染 | ~4 个月 |
| 🔧 PR | [#1220](https://github.com/netease-youdao/LobsterAI/pull/1220) | 消除 recentChats/conversationSearch N+1 查询 | ~4 个月 |

**提醒维护者**：
1. **#1217 是最关键的积压项** —— 偶发重启直接影响核心可用性，建议尽快确认根因（OpenClaw Gateway 的 watch/restart 策略？）并给出反馈。
2. 4 个 PR 均超过 4 个月未被 review，处于 stale 边缘，建议批量评估并明确接受/拒绝。
3. 建议为仓库配置 stale bot 的例外规则，避免 **已附日志/根因分析完整的高质量条目被自动关闭**。

---

### 附录：项目健康度速览

| 指标 | 数值 | 评估 |
|---|---|---|
| 24h Issue 活动 | 3（活跃 1 / 关闭 2） | 🟡 偏低 |
| 24h PR 活动 | 6（待合并 4 / 已合并 0 / 已关闭 2） | 🔴 0 合并，依赖类关闭为主 |
| 新版本 | 0 | 🔴 今日无版本动作 |
| 社区互动（👍/评论） | 普遍为 0 | 🔴 互动稀少 |
| 积压 PR | 4 个，> 4 个月未 review | 🔴 需关注 |

**总体判断**：LobsterAI 进入 **维护间歇期**，无新功能推进、无版本发布、stale 清理成为主要活动。建议维护团队主动 review 高质量 PR 并给出项目节奏信号（roadmap/状态更新），以恢复社区信心。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报
**日期：2026-08-03**

---

## 1. 今日速览

Moltis 项目今日整体活跃度处于**较低水平**。过去 24 小时内未产生新的 Issue、未关闭任何已存在的 Issue，也未发布新版本，仅有 1 条 PR（#1183）处于待合并状态且评论与反应数均为 0。整体来看，项目处于**静默开发周期**，社区参与度近乎为零，但有一条实质性的功能增强 PR 正在等待审查，表明核心开发工作仍在推进。

---

## 2. 版本发布

**无新版本发布。** 今日未检测到任何新的 Release 标签发布。

---

## 3. 项目进展

**今日无 PR 合并或关闭。** 处于 OPEN 状态的 PR：

### 🔵 #1183 — feat(mcp): add managed repository bundles
- **作者：** penso
- **状态：** OPEN（待合并）
- **链接：** [moltis-org/moltis PR #1183](https://github.com/moltis-org/moltis/pull/1183)
- **创建时间：** 2026-08-02
- **更新时间：** 2026-08-03
- **评论数：** 0 ｜ **👍：** 0

**内容摘要：**
- 为 MCP（Model Context Protocol）服务器引入**托管 Git 仓库包（managed repository bundles）** 机制，覆盖发现、预览、安装、更新、移除全生命周期。
- 支持 **HTTPS Git 凭据** 与 **SSH 传输协议**。
- 集成 **vault 生命周期**，支持导入基于仓库的 MCP 配置。
- 新增 **CLI / RPC / Web UI** 三端工作流，并附带数据库迁移。

**影响评估：**
此 PR 一旦合并，将显著降低用户在 Moltis 中集成第三方 MCP 服务器的门槛，使生态扩展从「手动配置」转向「仓库即分发」的现代化模式。但目前 **0 评论、0 👍**，缺少社区反馈与维护者审查信号，存在被搁置的风险。

---

## 4. 社区热点

**今日无活跃讨论。** Issues 板块 0 更新，PR #1183 评论区为空。社区今日处于静默状态，无明显的热点话题或争论焦点。

---

## 5. Bug 与稳定性

**今日无 Bug 报告。** Issues 中未出现任何崩溃、回归或缺陷反馈。

⚠️ **提示：** 这并不意味着项目无 Bug，更可能是用户尚未报告或报告渠道未被有效触达。建议关注者在升级到新版本后主动反馈稳定性问题。

---

## 6. 功能请求与路线图信号

虽然今日未单独开立功能请求 Issue，但 PR #1183 本身即是一个**重要的功能演进信号**：

| 信号维度 | 分析 |
|---------|------|
| **方向** | MCP 生态扩展 — 从单点配置升级为仓库化分发 |
| **能力** | 引入凭据管理、SSH 支持、Vault 集成 — 涉及安全敏感模块 |
| **覆盖面** | CLI + RPC + Web UI 全端覆盖 — 显示这是**旗舰级功能** |
| **数据层** | 伴随数据库迁移 — 说明项目正进入结构化演进阶段 |

**预测：** PR #1183 若通过审查，很可能成为下一个 minor 版本的核心卖点，并预示 Moltis 在 MCP 生态中正尝试扮演「应用商店式分发平台」的角色。

---

## 7. 用户反馈摘要

**今日无用户反馈可供提炼。** Issues 与 PR 评论区均为空，无法捕捉真实使用场景或痛点。

---

## 8. 待处理积压

| 类型 | 数量 | 关键项 | 风险 |
|------|------|--------|------|
| 待合并 PR | 1 | [#1183](https://github.com/moltis-org/moltis/pull/1183) feat(mcp): add managed repository bundles | 🟡 **中** — 0 评论、0 👍、创建 1 天未获审查，且涉及凭据/SSH 等安全敏感模块，需维护者优先响应 |
| 待响应 Issue | 0 | — | 🟢 低 |
| 待发布版本 | 0 | — | 🟢 低 |

**🔔 给维护者的建议：**
1. **优先审查 PR #1183** — 该 PR 涉及安全凭据处理与数据库迁移，合并前需重点评估 SSH/HTTPS 凭据存储的安全性以及迁移脚本的可逆性。
2. **主动邀请社区 review** — 当前 PR 点赞与讨论为零，建议在 Discord/Discord 或相关社群中定向征集 review。
3. **关注静默信号** — 当日 0 Issue 更新可能反映社区活跃度下滑，建议结合周/月度数据趋势判断。

---

## 📊 健康度总评

| 维度 | 评分 | 说明 |
|------|------|------|
| 开发活跃度 | ⭐⭐☆☆☆ | 仅 1 条待合并 PR，无新 Issue |
| 社区参与度 | ⭐☆☆☆☆ | 0 评论、0 点赞、0 Issue 活动 |
| 发布节奏 | ⭐⭐⭐☆☆ | 今日无版本，但近期应有节奏 |
| 代码演进质量 | ⭐⭐⭐⭐☆ | 在审 PR 内容丰富、覆盖面广 |
| **综合** | **⭐⭐½** | 内部开发有进展，但社区层静默，需激活外部反馈循环 |

---

*报告基于 2026-08-03 当日 GitHub 公开数据生成。*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目日报

**日期：2026-08-03**

> 注：本期日报数据源自仓库 `agentscope-ai/QwenPaw`（即 CoPaw 项目的实际 GitHub 仓库名，以下统一以"CoPaw"指代）。所有条目均附 GitHub 链接。

---

## 1. 今日速览

过去 24 小时内 CoPaw 仓库产生了 **2 条新 Issue 与 6 条处于待合并状态的 PR，但无任何合并、关闭或新版本发布**。当日活跃度的核心特征是"**集中式 Bug 报告 + 即时响应 PR**"：用户 Moonlit-Pages 在 8 月 2 日接连提交了两条与"前端 30 秒超时 vs 后端 MB 级非压缩响应"相关的 Bug（#6633、#6635），贡献者 BlackBox-Labs 当日即针对两条 Issue 分别提交了修复 PR（#6634、#6636），形成清晰的 issue → PR 闭环。整体而言，仓库健康度处于"积极响应但尚未落地"阶段，**活跃度中等偏上，但合并吞吐量为 0**，需要关注维护者审阅节奏。

---

## 2. 版本发布

无新版本发布。当日无任何 Release 事件。

---

## 3. 项目进展

⚠️ **过去 24 小时内无任何 PR 被合并或关闭**，项目代码层面的实际推进为零。

不过，从"待合并 PR 的内容分布"可以观察到的趋势：
- **性能与超时类修复**：4 条 PR（#6637、#6636、#6634、#6068）集中在大数据量场景下的渲染与传输优化
- **集成兼容性修复**：1 条 PR（#6561）针对 MCP 工具名兼容性问题
- **新功能**：1 条 PR（#6607）新增桌面端全局快捷键浮窗

这表明代码层面的改进已在 PR 队列中"就绪"，只待维护者审阅与合并。

---

## 4. 社区热点

按更新热度与关注度排序：

| 排名 | 条目 | 类型 | 关注度信号 |
|---|---|---|---|
| 1 | [#6635](https://github.com/agentscope-ai/QwenPaw/issues/6635) Console 页面在慢网络下加载失败 | Issue | 当日创建，1 条评论 |
| 2 | [#6633](https://github.com/agentscope-ai/QwenPaw/issues/6633) Skills / Skill Pool 页面加载失败 | Issue | 当日创建，1 条评论 |
| 3 | [#6607](https://github.com/agentscope-ai/QwenPaw/pull/6607) 全局快捷键浮窗 | PR | 持续讨论中（7 月 31 日创建，跨日多轮更新） |
| 4 | [#6068](https://github.com/agentscope-ai/QwenPaw/pull/6068) Scroll 历史迁移保留 session_id | PR | 长时间跨度（7 月 13 日至今）持续打磨 |

**诉求分析**：当前社区关注度高度集中于"**网络条件欠佳场景下的可用性**"。两条新 Issue 均由同一用户 Moonlit-Pages 在数小时内接连报告，问题模型高度同构（前端 30s 固定超时 vs 后端单次返回 MB 级未压缩数据），说明该项目对**前端超时配置、后端响应体大小、压缩策略**这一组系统性架构问题存在普遍缺口，并非个案。

---

## 5. Bug 与稳定性

按严重程度排列：

### 🔴 严重（影响核心功能可用性）

**① 控制台多个页面在慢网络下无法加载 — 根因为前端硬编码 30s 超时**
- Issue: [#6635](https://github.com/agentscope-ai/QwenPaw/issues/6635)
- 报告人：Moonlit-Pages | 时间：2026-08-02
- 严重性：**高**。涉及 skills 列表与 chat history 两个核心 API，单次响应达 MB 级别且未压缩，超出前端固定 30s 抓取超时即整页加载失败。
- ✅ **已有对应修复 PR**：[#6636](https://github.com/agentscope-ai/QwenPaw/pull/6636)（chat history 分页 + GZip 压缩）

**② Skills / Skill Pool 页面在慢网络下无法加载**
- Issue: [#6633](https://github.com/agentscope-ai/QwenPaw/issues/6633)
- 报告人：Moonlit-Pages | 时间：2026-08-02
- 严重性：**高**。`GET /api/skills` 与 `GET /api/skills/workspaces` 嵌入了完整的 SKILL.md 文本内容（MB 级未压缩），workspace 失败与否与载荷大小呈强相关。
- ✅ **已有对应修复 PR**：[#6634](https://github.com/agentscope-ai/QwenPaw/pull/6634)（list 端点排除完整 content）

### 🟡 中等（UI 性能 / 渲染）

**③ 大工具输出导致控制台 UI 卡死**
- 关联 Issue：#6589（未在今日数据中列出）
- PR: [#6637](https://github.com/agentscope-ai/QwenPaw/pull/6637)
- 提交人：zhaozhuang521 | 时间：2026-08-03
- 状态：✅ 已有修复 PR（超过 100KB 或 1000 行则跳过 Prism 高亮，仅显示首 200 行 + 末 300 行并显示截断指示器）

### 🟢 较低（兼容性问题）

**④ 部分 MCP 工具名不符合严格 OpenAI 兼容服务（如 Kimi/Moonshot）的命名规则**
- PR: [#6561](https://github.com/agentscope-ai/QwenPaw/pull/6561)
- 提交人：axelray-dev | 时间：2026-07-29
- 状态：✅ 已有修复 PR（保证暴露的 tool name 以字母开头）

---

## 6. 功能请求与路线图信号

唯一明确的新功能 PR：

- **#6607 桌面端全局快捷键浮窗** ([链接](https://github.com/agentscope-ai/QwenPaw/pull/6607))
  - 提交人：WilShi | 创建：2026-07-31
  - 功能：仿豆包风格的全局热键浮窗，默认 `alt+space`，无边框、置顶、居中显示的极简聊天输入面板
  - 路线图信号：实现 Issue #6568，说明项目团队已规划桌面端快捷输入体验增强，且 PR 仍在活跃讨论中（7 月 31 日至 8 月 3 日跨日更新）

从 Issue 报告的集中度推断，下一版本（若即将发布）很可能将**性能/超时相关修复**（#6634、#6636、#6637）打包收录，并配套**桌面端快捷键增强**（#6607）。

---

## 7. 用户反馈摘要

基于 Issue 评论与描述中可观察到的用户原声：

- **痛点 1：网络适应性差**
  用户 Moonlit-Pages 反馈"workspace 是否失败与载荷大小强相关"，意味着该问题不是偶发，而是可预测、可重现的系统性缺陷。用户的实际使用场景显然包含**带宽受限或跨国网络环境**。

- **痛点 2：API 设计违背最小载荷原则**
  Issue 描述指出"list 端点嵌入了完整内容"，表明当前 API 设计存在典型的"**列表接口过载**"反模式 — 列表接口本应只返回摘要，详细内容应通过独立 detail 端点获取。

- **痛点 3：前端超时不可配置**
  30 秒是"硬编码"前端超时，缺乏用户侧或环境侧的可调机制，对慢网络用户不友好。

- **正面信号**：用户提交的 Bug 描述清晰、提供版本号（2.0.1）、附带根因分析，说明项目已培养出一定水平的**高质量 Issue 贡献者**社区。

---

## 8. 待处理积压（提醒维护者关注）

以下条目**长期处于 OPEN 状态且当日仍未推进**，建议维护者本周内优先处理：

| 编号 | 类型 | 创建日期 | 待处理时长 | 备注 |
|---|---|---|---|---|
| [#6068](https://github.com/agentscope-ai/QwenPaw/pull/6068) | PR (fix) | 2026-07-13 | **21 天** | Scroll 历史迁移保留 session_id，多次更新仍未合并 |
| [#6561](https://github.com/agentscope-ai/QwenPaw/pull/6561) | PR (fix) | 2026-07-29 | 5 天 | MCP 工具名兼容性，修复面小，应可快速合并 |
| [#6607](https://github.com/agentscope-ai/QwenPaw/pull/6607) | PR (feat) | 2026-07-31 | 3 天 | 桌面端全局快捷键浮窗，活跃讨论中 |
| [#6634](https://github.com/agentscope-ai/QwenPaw/pull/6634) | PR (fix) | 2026-08-02 | 1 天 | 阻塞 #6633 的解决 |
| [#6636](https://github.com/agentscope-ai/QwenPaw/pull/6636) | PR (fix) | 2026-08-02 | 1 天 | 阻塞 #6635 的解决 |
| [#6637](https://github.com/agentscope-ai/QwenPaw/pull/6637) | PR (fix) | 2026-08-03 | 0 天 | 新提交，UI 卡死修复 |

**重点提醒**：自 7 月 13 日起已 21 天的 #6068 是当前积压最久的 PR，建议维护者确认其状态，避免因会话 ID 数据丢失造成用户数据迁移事故。

---

## 健康度评估

| 维度 | 评分 | 说明 |
|---|---|---|
| Issue 响应速度 | ⭐⭐⭐⭐⭐ | 当日报告 → 当日 PR 响应，闭环迅速 |
| PR 审阅吞吐量 | ⭐⭐ | 当日合并数为 0，存在审阅瓶颈 |
| 版本发布节奏 | ⭐⭐ | 当日无新版本发布 |
| 社区贡献活跃度 | ⭐⭐⭐⭐ | 多位外部贡献者（BlackBox-Labs、WilShi、niceIrene、axelray-dev、zhaozhuang521）持续提交 |
| 长期积压管理 | ⭐⭐ | 存在 21 天未合并的 PR |

**结论**：CoPaw 当前生态健康、贡献者活跃，但**审阅-合并吞吐**是当下最关键的瓶颈，建议维护者优先清理当日新提交的性能修复 PR 与长期积压的 #6068，以避免贡献者流失与用户数据风险。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报
**报告日期：2026-08-03**

---

## 一、今日速览

ZeroClaw 今日维持高活跃度，24 小时内 50 条 Issue 更新（38 条新开/活跃，12 条关闭）和 50 条 PR 更新（42 条待合并，8 条合并/关闭），并伴随 **v0.8.4** 维护版本的正式发布，整体进入"维护列车收尾 + v0.9.0 安全架构 RFC 酝酿"的关键过渡阶段。讨论热度集中在治理类 RFC（投票机制、工作流分轨）与安全/身份类 RFC（可插拔认证、运行时安全管线、OIDC 多租户），前 5 大热点议题平均评论数 11+ 条，反映社区在架构方向上的深度博弈。Bug 与稳定性层面出现两个 P1 级回归（CLI cron 帮助示例全部失效、StageX Docker 镜像 MSRV 不匹配），但均已有 fix PR 或已关闭，项目健康度评估为**良好偏紧张**。

---

## 二、版本发布

### 🚀 v0.8.4（已发布）
- **类型**：维护与硬化版本（maintenance & hardening）
- **规模**：跨 **262 个 commits**，由 **49 位贡献者**协作完成
- **核心改进方向**：
  - 扩展**内存（memory）与 SOP 控制平面**
  - 改善 **provider 与 channel 可靠性**（SSE/超时处理、命令策略、Telegram/WhatsApp 限制）
  - 强化 **sandbox 与凭证边界**（OAuth 重试统一、命令审计默认禁用、安全决策管线）
  - 改进 **desktop 与 release pipeline**

- ⚠️ **已知风险 / 升级注意**：
  - Issue [#9690](https://github.com/zeroclaw-labs/zeroclaw/issues/9690)：Containerfile 锁定的 StageX 镜像仍含 Rust 1.95.0，低于声明的 MSRV 1.96.1，导致 `all-features` Docker 变体自 2026-07-08 起无法构建。Issue [#9676](https://github.com/zeroclaw-labs/zeroclaw/issues/9676) 已尝试在 v0.8.4 流水线修复但尚未彻底解决，**生产环境使用 all-features 镜像的用户建议推迟升级**。
  - PR [#9420](https://github.com/zeroclaw-labs/zeroclaw/pull/9420) 引入的 Anthropic OAuth 别名路径已通过 RFC [#9464](https://github.com/zeroclaw-labs/zeroclaw/issues/9464) 记录契约，需要确认凭证配置是否需要调整。

---

## 三、项目进展

今日 8 条关闭的 Issue/PR 推动了以下方向的实质性进展：

| 类别 | 编号 | 推动事项 |
|------|------|----------|
| 维护列车收尾 | [#8357](https://github.com/zeroclaw-labs/zeroclaw/issues/8357) | v0.8.4 维护列车跟踪器关闭，标识版本正式落地 |
| 配置校验 | [#8997](https://github.com/zeroclaw-labs/zeroclaw/issues/8997) + PR [#9311](https://github.com/zeroclaw-labs/zeroclaw/pull/9311) | `peer_groups.*.channel` 悬空引用现在会作为结构化警告暴露，"一字符拼写错误导致静默授权失败"的体验问题已修复 |
| OAuth 重构 | [#9162](https://github.com/zeroclaw-labs/zeroclaw/issues/9162) | 提取共享的 OAuth 刷新重试循环到 `oauth_common`，消除 provider 间复制粘贴 |
| 运行时健壮性 | [#8578](https://github.com/zeroclaw-labs/zeroclaw/issues/8578) | 启动失败时不再"挂住"进程，daemon 状态正确返回 |
| CI/工具链 | [#8847](https://github.com/zeroclaw-labs/zeroclaw/issues/8847) + [#9676](https://github.com/zeroclaw-labs/zeroclaw/issues/9676) | Rustdoc default-theme flag 重复报错；Docker MSRV 不匹配问题已部分修复 |
| 文档集成 | [#9618](https://github.com/zeroclaw-labs/zeroclaw/pull/9618) | 新增 ZEGA AI 生产级 bridge 集成指南（针对 v0.8.3 daemon） |

**整体判断**：今日合并量偏保守（8 条），但**质量导向**——聚焦在安全契约、配置可观测性、daemon 启动健壮性等基础设施层。配合 v0.8.4 release，标识项目进入 v0.8.x 系列稳定期；下一阶段增长点将围绕 zerocode SOP 控制台（PR #9688/#9692/#9693/#9694 形成 4-PR 提交栈）与运行时架构 RFC 收敛展开。

---

## 四、社区热点

### 🔥 Top 讨论（按评论数）

1. **[#6808 RFC: Work Lanes, Board Automation, and Label Cleanup](https://github.com/zeroclaw-labs/zeroclaw/issues/6808)** — 17 评论  
   由 @Audacity88 主导的治理型 RFC，已进入 Rev. 23，聚焦在"工作流分轨 + Issue 板自动化 + Label 清理"，目的是让维护者**少在路由工作上消耗精力**。这是当前活跃度最高的 RFC，反映社区对治理工具的强烈诉求。

2. **[#8603 RFC: ZeroClaw Chat Completions profile](https://github.com/zeroclaw-labs/zeroclaw/issues/8603)** — 14 评论  
   由 @REL-mame 提出，目标是让 ZeroClaw 暴露 OpenAI Chat Completions 协议，以便对接 Open WebUI、LobeChat、Continue.dev、Aider、LangChain 等主流客户端。**这是生态接入的关键 RFC**，潜在影响用户群最大。

3. **[#6165 RFC: Prefer a lighter ZeroClaw core through external integrations](https://github.com/zeroclaw-labs/zeroclaw/issues/6165)** — 10 评论  
   主张将长尾集成迁出核心到 skills/MCP/CLI 包装，**维护者面临"功能广度 vs. 核心轻量"的核心权衡**。

4. **[#7141 RFC: Pluggable inbound authentication and canonical principals](https://github.com/zeroclaw-labs/zeroclaw/issues/7141)** — 9 评论  
   由 @singlerider 提出的 OIDC/可插拔认证方案，是 v0.9.0 身份与访问里程碑的核心契约，Rev. 6 持续演进。

5. **[#8303 RFC: Goal mode for bounded autonomous session work](https://github.com/zeroclaw-labs/zeroclaw/issues/8303)** — 9 评论，唯一带 1 个 👍  
   为长时自治任务（带预算/暂停/取消/失败边界）提供一等公民模式。

### 💡 热点背后的诉求

- **生态扩张**：Chat Completions profile RFC 是用户增长的最关键杠杆，能让现有 OpenAI 工具链用户零迁移成本接入。
- **架构现代化**：runtime-owned 会话/传输适配器（[#9487](https://github.com/zeroclaw-labs/zeroclaw/issues/9487)）、统一附件架构（[#9488](https://github.com/zeroclaw-labs/zeroclaw/issues/9488)）表明社区在为多通道统一抽象做准备。
- **治理透明**：投票窗口/阈值/仲裁 RFC（[#9496](https://github.com/zeroclaw-labs/zeroclaw/issues/9496)）和决策队列 tracker（[#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692)）显示社区对**RFC 决议流程本身**的成熟诉求。

---

## 五、Bug 与稳定性

按严重程度排列：

### 🔴 P1 严重

| 编号 | 描述 | 状态 | 是否有 fix |
|------|------|------|------------|
| [#9672](https://github.com/zeroclaw-labs/zeroclaw/issues/9672) | `zeroclaw cron add --help` 提供的 3 个 cron 示例**全部无法按字面运行**，且 `cron list` 空状态提示输出第 4 种同样损坏的格式 | OPEN | ❌ 暂无 PR |
| [#9690](https://github.com/zeroclaw-labs/zeroclaw/issues/9690) | `all-features` Docker 变体自 2026-07-08 起无法构建（Containerfile StageX 镜像含 rustc 1.95.0 < MSRV 1.96.1） | OPEN | ⚠️ [#9676](https://github.com/zeroclaw-labs/zeroclaw/issues/9676) 部分修复但未完全解决 |
| [#9519](https://github.com/zeroclaw-labs/zeroclaw/pull/9519) | Gateway HTTP handler 配置写入存在竞争：并发的 save 窗口可能导致一次写入被静默擦除 | OPEN (PR 待合并) | ✅ PR #9519 已就绪 |
| [#8838](https://github.com/zeroclaw-labs/zeroclaw/pull/8838) | SSE completion 与 idle timeout 硬化（OpenAI / Anthropic / 兼容 provider） | OPEN | ✅ PR #8838 由维护者已 rebase 并提交多个修复 commit |

### 🟡 P2 中等

| 编号 | 描述 | 状态 | 是否有 fix |
|------|------|------|------------|
| [#8578](https://github.com/zeroclaw-labs/zeroclaw/issues/8578) | zerocode/TUI 启动失败后进程未终止 | ✅ 已关闭 | ✅ |
| [#9536](https://github.com/zeroclaw-labs/zeroclaw/pull/9536) | ACP `session/new` 缺省 `cwd` 时回退到 daemon CWD 而非 agent workspace（安全风险） | OPEN | ✅ PR #9536 |
| [#9424](https://github.com/zeroclaw-labs/zeroclaw/pull/9424) | 拒绝"语义为空"的终端补全（`<think>` only 等），避免空白成功响应 | OPEN | ✅ PR #9424 |
| [#8963](https://github.com/zeroclaw-labs/zeroclaw/pull/8963) | Telegram `setMyCommands` 超过 100 命令时被 `BOT_COMMANDS_TOO_MUCH` 拒绝（修复截断 WARN） | OPEN | ✅ PR #8963 |

### 🟢 P3 轻微 / 已修复

- [#8847](https://github.com/zeroclaw-labs/zeroclaw/issues/8847) `cargo test --doc` 在 Rust 1.96 下因 default-theme flag 重复报错 — ✅ 已关闭
- [#9162](https://github.com/zeroclaw-labs/zeroclaw/issues/9162) Provider 间 OAuth 重试循环重复 — ✅ 已重构

**趋势分析**：P1 问题集中在**配置层可靠性**与**发布流水线**，Sprint 内修复链路完整，无悬空的高风险未修复 bug。

---

## 六、功能请求与路线图信号

### 📋 新提出的功能 / 增强请求

| 类别 | 编号 | 信号强度 |
|------|------|----------|
| Operator 自助上线 | [#9009](https://github.com/zeroclaw-labs/zeroclaw/issues/9009) | 🟢 已被 `Operator UX: Onboarding, Pairing & Self-Service` 里程碑纳入 |
| zerocode SOP 控制台 MVP | [#9682](https://github.com/zeroclaw-labs/zeroclaw/issues/9682) + [#9686](https://github.com/zeroclaw-labs/zeroclaw/issues/9686) | 🟢 已有 4-PR 提交栈（#9688 → #9692 → #9694 + #9693），即将进入代码评审 |
| Telegram 多消息流式模式 | [#8561](https://github.com/zeroclaw-labs/zeroclaw/pull/8561) | 🟡 XL 规模，needs-author-action，仍在 PR 阶段 |
| MCP resource blob 物化 + 预算预检 | [#9196](https://github.com/zeroclaw-labs/zeroclaw/pull/9196) | 🟡 L 规模，建立在已合并的 #9195 之上 |
| Eval grader 三件套（workspace/budget/json-field） | [#9219](https://github.com/zeroclaw-labs/zeroclaw/pull/9219) + [#9217](https://github.com/zeroclaw-labs/zeroclaw/pull/9217) | 🟡 XL 规模，async Grader trait 重构为先导 |
| 阶段化可选产品遥测 | [#9621](https://github.com/zeroclaw-labs/zeroclaw/issues/9621) | 🟢 维护者已提出 |
| Anthropic OAuth 路径正式化 | [#9464](https://github.com/zeroclaw-labs/zeroclaw/issues/9464) | 🟢 已配合 PR #9420 |

### 🎯 最有可能纳入下一版本（v0.8.5 或 v0.9.0）

1. **zerocode SOP 控制台** —— 提交栈完整、作者活跃度高（@IftekharUddin），预计作为 v0.8.x 增量快速合并。
2. **Gateway 配置写入序列化（#9519）** —— P1 安全相关，预计进入下一个 patch 版本。
3. **Telegram 流式多消息（#8561）** —— 与 Discord/Matrix 对齐，长期悬而未决，建议维护者尽快审阅。
4. **ACP session workspace 默认值（#9536）** —— 安全修复，likely v0.8.5 hotfix。

---

## 七、用户反馈摘要

从 Issue 评论与用户报告可提炼的真实痛点：

1. **CLI 可用性差**（[#9672](https://github.com/zeroclaw-labs/zeroclaw/issues/9672)）：用户按 `--help` 提供的 cron 示例运行报错，"文档即谎言"的体验严重侵蚀信任。**用户场景**：自动化脚本首次接入 cron。

2. **终端宽度溢出**（[#9399](https://github.com/zeroclaw-labs/zeroclaw/pull/9399)）：Quickstart checklist 在本地化环境下会"擦除"前几行。**用户场景**：非英语环境初次启动。

3. **配置静默丢失**（[#9519](https://github.com/zeroclaw-labs/zeroclaw/pull/9519)）：并发 API 调用导致配置变更被无声覆盖，对运维极不友好。**用户场景**：自动化 agent 编排管理面板。

4. **Telegram 命令注册失败**（[#8963](https://github.com/zeroclaw-labs/zeroclaw/pull/8963)）：内置命令 + skills + 工具超 100 条时整个 bot 注册失败。**用户场景**：重度 skills 用户。

5. **回复"看起来卡死"**（

</details>

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*