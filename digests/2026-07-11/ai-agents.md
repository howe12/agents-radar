# OpenClaw 生态日报 2026-07-11

> Issues: 429 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-07-11 02:03 UTC

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

**日期**：2026-07-11
**数据来源**：[openclaw/openclaw](https://github.com/openclaw/openclaw)

---

## 1. 今日速览

OpenClaw 仓库过去 24 小时呈现**极高活跃度**：429 条 Issue 更新 + 500 条 PR 更新，合计 929 条动态，整体生态运转紧张但未出现发版。维护压力集中在三个方向——**长期 P0/P1 稳定性问题**（特别是 Gateway 内存泄漏在多平台反复重现）、**平台/渠道集成缺陷**（Discord/WhatsApp/Telegram/macOS/iOS），以及**大量积压的多 Agent / 安全 / 体验增强类 Feature Request**。值得注意的是，PR 合并/关闭数（190）显著低于待合并数（310），仓库维护者正面对**显著的 PR 审阅积压**，且今日无新版本发布，存在一定发版滞后风险。

---

## 2. 版本发布

**今日无新版本发布。**

过去 24 小时 0 个 Release tag 推送。结合目前仍有多个未修复的 P0 内存泄漏与平台 Bug 处于打开状态，社区短期内可能期待一个补丁版本（hotfix）以缓解网关 OOM 与 Discord/WhatsApp 会话中断问题。

---

## 3. 项目进展

### 3.1 已合并/关闭的重要 PR

虽然整体 PR 合并节奏不算快，以下变更已对项目稳定性产生实质影响：

- **#99681 [CLOSED] Discord 插件 1006 WS 断连后不自愈** → [#99681](https://github.com/openclaw/openclaw/issues/99681)
  Discord 插件在网关 WS 1006 异常关闭后不再自动重连，需重启整个 Gateway。关闭表示该问题已进入修复/接受流程，in-flight turn 不再被全网关重启打断。

- **#85714 [CLOSED] Agent 漏调 delivery tool 时 final message 丢失** → [#85714](https://github.com/openclaw/openclaw/issues/85714)
  当 agent 在最后一轮忘记调用 `tools.message` 而直接输出 `agent_message`（未使用 `NO_REPLY` 哨兵）时，回复会"搁浅"无人送达。该 Bug 关闭意味着 fallback 投递已落地。

- **#44749 [CLOSED] 并发 `allow-always` 审批静默丢失 allowlist 条目** → [#44749](https://github.com/openclaw/openclaw/issues/44749)
  `exec-approvals.json` 的 last-write-wins 竞态被修复，避免安全策略因并发批准而回退。

- **#91283 [CLOSED] `minSecurity` 排序反了（`full` 被当作最严）** → [#91283](https://github.com/openclaw/openclaw/issues/91283)
  `exec-approvals.js` 中 `full/allowlist/deny` 排名反向的回归被修复，安全权限语义恢复正常。

- **#78362 [CLOSED] Control UI CSP 拦截 Zod `Function()` 构造器** → [#78362](https://github.com/openclaw/openclaw/issues/78362)
  `script-src 'eval'` 违规 + 配置 401 抓取被修复，Chrome 控制台不再刷错误，UI 配置加载恢复。

- **#63829 [CLOSED] Per-agent memory-wiki vault 配置** → [#63829](https://github.com/openclaw/openclaw/issues/63829)
  多 Agent 场景下每个 agent 可维护独立知识库，10 个 👍，是过去 24 小时关闭的最高赞 enhancement 之一。

- **#68691 [CLOSED] 沙箱僵尸进程在 PID 1 下累积** → [#68691](https://github.com/openclaw/openclaw/issues/68691)
  沙箱内 PPID 已是 1 的僵尸不再累积到 `pids.max`，长期运行稳定性提升。

### 3.2 进入 Automerge 流程

- **#103331 [ClawSweeper automerge armed] Codex Computer Use 稳定性** → [#103331](https://github.com/openclaw/openclaw/pull/103331)
  Bot 正在为 #102264 做合并前自检、rebase、验证，将在不依赖人工的情况下推进 Computer Use 路径。

### 3.3 整体推进度

综合来看，过去 24 小时项目在 **平台稳定性（Discord/Discord/Slack）**、**安全/审批一致性（exec-approvals, minSecurity, CSP）**、**多 Agent 基础设施（per-agent memory-wiki）** 三个方向有实质推进，但**最严重的两个 P0（#91588 Gateway 内存泄漏 15.5GB、#101763 托管 Molty 模型 id 错误）仍为 OPEN**，整体健康度评分约 **6.5 / 10**。

---

## 4. 社区热点

### 4.1 评论数 Top 5 Issues

| 排名 | Issue | 评论 | 👍 | 主题 |
|---|---|---|---|---|
| 1 | [#99241](https://github.com/openclaw/openclaw/issues/99241) | 20 | 2 | 工具输出被压成图片占位，agent 失去 stdout/stderr 可读性 |
| 2 | [#102175](https://github.com/openclaw/openclaw/issues/102175) | 16 | 1 | 嵌入式 prompt cache 跨 room_event/政策/Responses 边界断裂（回归） |
| 3 | [#10659](https://github.com/openclaw/openclaw/issues/10659) | 15 | 4 | Feature：Masked Secrets——让 agent 使用 API key 而看不到明文 |
| 4 | [#91588](https://github.com/openclaw/openclaw/issues/91588) | 15 | 1 | **P0**：Gateway 内存泄漏 350MB→15.5GB，OOM 反复 kill |
| 5 | [#12602](https://github.com/openclaw/openclaw/issues/12602) | 14 | 0 | Slack Block Kit 支持（已被 #103583 关闭） |

### 4.2 最高赞 / 最具社区共识

- **#63829**（已关闭）：Per-agent memory-wiki vault，**10 👍**——是过去 24h 中最受拥护的 enhancement，已落地。
- **#8508** 可配置 ack reaction emoji，**6 👍**——社区长期呼吁"机器人感太重"，期望更自然的群聊反应。
- **#7524** `groupScope` 合并到主会话，**4 👍**——多用户群聊体验刚需。
- **#10659** Masked Secrets，**4 👍**——与近期的 API key 泄露事故相关，反响强烈。
- **#10659、#7722、#10659、#11665** 等都带 `needs-security-review`，反映社区对**凭证保护 + 多租户隔离**的强烈诉求。

### 4.3 热点背后的诉求

社区情绪集中在三件事：
1. **Agent 的可观测性**（prompt cache 跨边界、上下文溢出提示、最终消息送达）——开发者希望对 agent 的"思维链"有更清晰的诊断。
2. **凭证与执行边界**（masked secrets、filesystem sandbox、exec-approvals 竞态、minSecurity 排序）——指向"agent 自动化越大，安全护栏越要硬"。
3. **多 Agent 工作流**（per-agent vault、subagent 多 lane、queue_status 可见性）——OpenClaw 正在从"单 agent 玩具"过渡到"多 agent 平台"。

---

## 5. Bug 与稳定性

按严重程度排序（仅列出今日仍 OPEN 的关键 Bug；已关闭 Bug 参见 §3）：

### 🔴 P0（崩溃/数据丢失/不可用）

| Issue | 标题 | 平台 | 是否有修复 PR | 状态 |
|---|---|---|---|---|
| [#91588](https://github.com/openclaw/openclaw/issues/91588) | Gateway 内存泄漏 350MB→15.5GB | 通用 | ❌ | OPEN，长期未根治 |
| [#101763](https://github.com/openclaw/openclaw/issues/101763) | 托管 Molty 模型 id 错误 `claude-opus-4.8`→`4-8` | Hosted | ❌ | OPEN，标记 `ux-release-blocker` |

### 🟠 P1（影响核心功能）

| Issue | 标题 | 渠道/平台 | 是否有修复 PR |
|---|---|---|---|
| [#99241](https://github.com/openclaw/openclaw/issues/99241) | 工具输出被压成图片占位 | 通用 | ❌ |
| [#102175](https://github.com/openclaw/openclaw/issues/102175) | 嵌入式 prompt cache 跨边界断裂 | 通用 | ❌ |
| [#84569](https://github.com/openclaw/openclaw/issues/84569) | WhatsApp 长 model_call 后 session stalled、回复不送达 | WhatsApp | ✅ 已 linked PR（#103331 集群） |
| [#83959](https://github.com/openclaw/openclaw/issues/83959) | Codex app-server 启动重试在替换 server 就绪前耗尽 | Codex | ✅ linked-pr-open |
| [#87109](https://github.com/openclaw/openclaw/issues/87109) | macOS 网关 heap 增长到 1073MB+，cron 静默失败 | macOS | ❌ |
| [#40982](https://github.com/openclaw/openclaw/issues/40982) | CLI 3 分钟 watchdog 上限硬编码 | CLI | ✅ linked-pr-open |
| [#99681](https://github.com/openclaw/openclaw/issues/99681) | Discord 1006 不自愈（已 CLOSED） | Discord | ✅ |
| [#27984](https://github.com/openclaw/openclaw/issues/27984) | Telegram 5–20MB 文件静默死锁 | Telegram | ❌（已 CLOSED 待观察） |

### 🟡 回归与体验

- [#85714](https://github.com/openclaw/openclaw/issues/85714) 漏调 message tool 导致回复搁浅——**已关闭**。
- [#91283](https://github.com/openclaw/openclaw/issues/91283) `minSecurity` 反向——**已关闭**。
- [#44749](https://github.com/openclaw/openclaw/issues/44749) allowlist 并发丢失——**已关闭**。
- [#78362](https://github.com/openclaw/openclaw/issues/78362) Control UI CSP 阻塞 Zod——**已关闭**。

**总体 Bug 趋势**：底层安全/审批类回归已批量修复 ✅；**内存泄漏（#91588、#87109）与渠道连接可靠性（#84569、#101763）仍是最大未爆弹**。

---

## 6. 功能请求与路线图信号

下表列出今日社区呼声最高、且**已有对应 PR 推进**或**关闭路径清晰**的 Feature Request：

| Issue | 标题 | 现有 PR | 路线图概率 |
|---|---|---|---|
| [#12602](https://github.com/openclaw/openclaw/issues/12602) | Slack Block Kit | [#103583](https://github.com/openclaw/openclaw/pull/103583) | 🟢 **极高**（PR 已开启，steipete 主推） |
| [#63829](https://github.com/openclaw/openclaw/issues/63829) | Per-agent memory-wiki vault | （已 CLOSED） | 🟢 已交付 |
| [#11665](https://github.com/openclaw/openclaw/issues/11665) | Webhook 多轮 sessionKey 复用 | linked-pr-open | 🟢 高 |
| [#7524](https://github.com/openclaw/openclaw/issues/7524) | `groupScope` 合并到主会话 | linked-pr-open | 🟢 高 |
| [#40982](https://github.com/openclaw/openclaw/issues/40982) | 提升 CLI 3 分钟 watchdog 上限 | linked-pr-open | 🟢 高 |
| [#10142](https://github.com/openclaw/openclaw/issues/10142) | `session:end` 内部 hook | linked-pr-open | 🟡 中（Temporal/工作流场景刚需） |
| [#6792](https://github.com/openclaw/openclaw/issues/6792) | 插件 manifest `configPatch` | — | 🟡 中 |
| [#10467](https://github.com/openclaw/openclaw/issues/10467) | `sessions_spawn` 多 lane 并发 | — | 🟡 中（多 agent 平台演进关键） |
| [#9797](https://github.com/openclaw/openclaw/openclaw/issues/9797) | `queue_status` 工具 | — | 🟡 中 |
| [#10659](https://github.com/openclaw/openclaw/issues/10659) | Masked Secrets | — | 🟠 关注中（安全优先级高） |
| [#7722](https://github.com/openclaw/openclaw/issues/7722) | Filesystem sandbox (`tools.fileAccess`) | — | 🟠 关注中 |
| [#8355](https://github.com/openclaw/openclaw/issues/8355) | 流式 TTS（语音通话） | — | 🟠 关注中 |
| [#7403](https://github.com/openclaw/openclaw/issues/7403) | Private Mode（演示/内容） | — | 🟠 关注中 |
| [#7379](https://github.com/openclaw/openclaw/issues/7379) | /usage footer 高级请求 % | linked-pr-open | 🟢 高 |
| [#7359](https://github.com/openclaw/openclaw/issues/7359) | Slack DM session 看到自己频道消息 | — | 🟠 待产品决策 |

**路线图判断**：
- **下一版本（v2026.7.x）大概率包含**：Slack Block Kit (#103583)、CLI watchdog 上调 (#40982)、`groupScope` (#7524)、webhook 多轮复用 (#11665)——这些都有现成 PR 且 issue 长期高赞。
- **下下个版本候选**：Masked Secrets (#10659)、Filesystem sandbox (#7722)、Per-agent memory 已落地的扩展面（权限、检索）。
- **多 Agent 平台化**（#10467、#9797、#10142）是中期方向，但 PR 仍未到位。

---

## 7. 用户反馈摘要

提炼自今日高评论 Issue 的真实用户痛点：

- **"agent 看不到自己的输出"**（[#99241](https://github.com/openclaw/openclaw/issues/99241)、[#85714](https://github.com/openclaw/openclaw/issues/85714)）
  > 工具输出折叠成 `(see attached image)` 占位；或者 agent 漏调 message tool，最终回复被吞。多位用户希望对长 ANSI 输出、流式分块、有更明确的"我能看到/看不到什么"边界。

- **"网关跑几天就 OOM"**（[#91588](https://github.com/openclaw/openclaw/issues/91588)、[#87109](https://github.com/openclaw/openclaw/issues/87109)）
  > petercheng：RSS 2–3 天涨到 15.5GB，被 OOM killer 杀掉，触发 `launchd-handoff` 反复重启。Tanklive：macOS 上 heap 涨到 1073MB+ 时 cron 静默失败，没有错误日志，只能用户主动看 heap_threshold。**对自托管用户来说是"周五上线、周一发现全部挂掉"的痛苦**。

- **"渠道中断后会话卡死"**（[#84569](https://github.com/openclaw/openclaw/issues/84569)、[#83959](https://github.com/openclaw/openclaw/issues/83959)、[#27984](https://github.com/openclaw/openclaw/issues/27984)）
  > WhatsApp 120–240s 后 `stalled_agent_run`、`payloads=0`、回复不送达；Telegram 5–20MB 文件整个 chat 永久锁死；Codex app-server 重试在替代 server 就绪前就耗尽。**渠道可靠性是用户最大的信任壁垒**。

- **"多 agent 编排缺关键原语"**（[#10467](https://github.com/openclaw/openclaw/issues/10467)、[#9797](https://github.com/openclaw/openclaw/issues/9797)、[#10142](https://github.com/openclaw/openclaw/issues/10142)、[#7403](https://github.com/openclaw/openclaw/issues/7403)）
  > lexobe：所有 sub-agent 挤在 `subagent` 单 lane，无法看到队列深度；pahud：没有 `queue_status` agent 只能盲目 spawn；spk-alex：Temporal 集成缺 `session:end` hook。**Power user 已经在尝试把 OpenClaw 嵌进生产工作流，但缺基础设施**。

- **"演示场景需要隐私隔离"**（[#7403](https://github.com/openclaw/openclaw/issues/7403)）
  > jacob-creme：录 YouTube/做 demo 时不希望 agent 拿到我的真实工作区上下文——需要 Mission Control 一个 "Private Mode" 开关。

- **"机器人感太重"**（[#8508](https://github.com/openclaw/openclaw/issues/8508)、[#8299](https://github.com/openclaw/openclaw/issues/8299)）
  > 6 👍 推动可配置 ack reaction；jzOcb 抱怨 sub-agent 完成后必须靠模型说 `ANNOUNCE_SKIP` 才能不刷总结，模型经常不配合。

- **"凭证管理"**（[#10659](https://github.com/openclaw/openclaw/issues/10659)、[#7722](https://github.com/openclaw/openclaw/issues/7722)）
  > jmkritt：希望 agent 能"用"但"看不到" API key，防止 prompt injection 窃

---

## 横向生态对比

# 个人 AI 助手 / 自主智能体开源生态横向对比报告
**数据周期**：2026-07-11 ｜ **覆盖项目**：13 个

---

## 1. 生态全景

2026 年 7 月中旬，个人 AI 助手 / 自主智能体开源生态呈现**"金字塔分化"格局**：头部项目（OpenClaw、CoPaw、ZeroClaw、IronClaw、Hermes Agent）已迈入"平台化基建"阶段，单日 PR/Issue 流量普遍在 80–1000 之间，开始处理多 agent 协作、Provider 路由、Channel 可靠性等深层架构问题；中部项目（NanoBot、NanoClaw、PicoClaw、LobsterAI）处于"功能稳健 + 国际化扩展"窗口，单日合并 PR 显著多于新增 Issue，代码库健康度普遍较好；尾部项目（NullClaw、Moltis、TinyClaw、ZeptoClaw）则进入"维护观望期"，日均 Issue/PR 接近于零，部分项目已出现安全/可用性 Bug 长期无人响应。值得注意的是，**内存泄漏、渠道断连、OAuth/MCP 协议适配、安全护栏（masked secrets、IDOR）** 已成为跨项目的共性痛点，而 **per-agent memory-wiki、subagent lane、context compaction** 等多 agent 基础设施正在从"功能请求"快速收敛为"版本事实"。

---

## 2. 各项目活跃度对比

| 项目 | 24h Issue 更新 | 24h PR 更新 | 已合并/关闭 | 当日 Release | 健康度评估 |
|---|---|---|---|---|---|
| **OpenClaw** | 429 | 500 | 190 (PR) | ❌ 无 | 🟠 6.5/10（PR 审阅积压、P0 内存泄漏仍 OPEN） |
| **CoPaw (QwenPaw)** | 44 | 46 | ~26 | ✅ **v2.0.0 GA** + 2 beta | 🟡 7/10（GA 当天出现 P0 沙箱 Bug、版本切换震荡期） |
| **ZeroClaw** | 17 | 46 | 4 | ❌ 无 | 🟢 7.5/10（v0.8.3 tracker 推进、S1 级 Gemini Bug 待修） |
| **IronClaw** | 36 | 50 | 15 | ❌ 无（版本 bump PR 排队中） | 🟡 7/10（bug_bash 集中修复 + XL PR 涌入） |
| **Hermes Agent** | 50 | 50 | 3 | ❌ 无（连续 2 个零发版日） | 🟠 6/10（48 PR 待合并、Desktop 状态类 Bug 密度上升） |
| **LobsterAI** | 2 | 17 | 10 | ✅ **2026.7.10** | 🟢 8/10（节奏稳健，但 #2293 多 agent 隔离 Bug 未修） |
| **NanoBot** | 8 | 42 | 17 (40%) | ❌ 无 | 🟢 8/10（memory 重构 + 模型路由双线推进） |
| **NanoClaw** | 3 | 25 | 10 | ❌ 无 | 🟢 7.5/10（通道+时间戳重构 + Context Preview 工具） |
| **PicoClaw** | 3 | 18 | 2（均 stale） | ❌ 无（v0.2.9） | 🟠 6/10（积压 18 PR 中 8 stale、stale 机器人误关 Bug PR） |
| **NullClaw** | 2 | 0 | 0 | ❌ 无 | 🔴 4/10（出现高危 A2A IDOR 漏洞、零 PR 流入） |
| **Moltis** | 0 | 1（OPEN） | 0 | ❌ 无 | ⚪ 5/10（间歇期，仅 GPT-5.6 PR #1146 等待评审） |
| **TinyClaw** | 0 | 0 | 0 | ❌ 无 | ⚪ —（无活动） |
| **ZeptoClaw** | 0 | 0 | 0 | ❌ 无 | ⚪ —（无活动） |

**结构性观察**：13 个项目中仅 2 个（CoPaw、LobsterAI）在过去 24 小时有正式 Release；7 个项目 PR 流量超过 Issue 流量（典型"维护期"特征）；3 个项目（NullClaw、Moltis、TinyClaw/ZeptoClaw）已完全进入静默维护状态。

---

## 3. OpenClaw 在生态中的定位

### 3.1 体量层面：明确的第一梯队"基准项目"

OpenClaw 当日 Issue + PR 合计 **929 条**，是第二梯队（IronClaw/Hermes Agent 的 100 条）的 **9 倍以上**，CoPaw（90 条）的 **10 倍**，ZeroClaw（63 条）的 **14 倍**。这种量级优势使其在生态中承担两个角色：
- **基准参照系**：其他项目的 PR 描述（如 NanoBot #4622 引用"per-job model preset"概念、LobsterAI #2311 引用 OpenClaw `memory index --force`）已直接对标 OpenClaw 的接口语义。
- **生态风向标**：诸如 `minSecurity` 反向排序、`exec-approvals.json` last-write-wins 竞态、`agent_message` 漏调投递等"次要但高频"的细节 Bug，反映出 OpenClaw 已经深入到其他项目尚未触及的工程纵深。

### 3.2 技术路线差异

| 维度 | OpenClaw | 同类项目典型选择 |
|---|---|---|
| **多 Agent 模型** | per-agent memory-wiki vault、subagent lane、groupScope | Hermes Agent：两阶段上下文管理；CoPaw：ReMe v0.4；NanoClaw：Provider-agnostic memory |
| **安全护栏** | exec-approvals + minSecurity + masked secrets（提案中）+ filesystem sandbox（提案中） | IronClaw：RunFailureReason 漏斗；NanoBot：/restart 零授权（漏洞状态） |
| **Channel 策略** | 多平台并行（Discord/WhatsApp/Telegram/macOS/iOS），强调**自愈能力** | LobsterAI：聚焦 IM 群聊定时任务大小写；PicoClaw：WhatsApp typing presence |
| **Provider 路由** | 集中式（依托 Hosted Molty 模型 id 单一管理） | NanoBot：每会话/cron/spawn 独立覆盖；Hermes Agent：Per-subagent model override（提案） |
| **架构哲学** | "Gateway 为中心"（强调长跑可靠性、launchd-handoff） | CoPaw：Runtime 2.0 + Tauri 桌面；ZeroClaw：plugin/WASM 宿主 + 多架构镜像 |

### 3.3 社区规模对比

OpenClaw 的 929 条日活动 ≈ CoPaw + ZeroClaw + IronClaw + Hermes Agent + NanoBot + LobsterAI + NanoClaw + PicoClaw 之和（875 条），是 PicoClaw 等长尾项目的 **300+ 倍**。这种规模意味着 OpenClaw 在**功能发现速度**（社区自行衍生大量 enhancement）和**Bug 收敛速度**（同时被多平台用户复现）上拥有天然的网络效应，但也带来显著维护压力——当日 PR 合并/关闭 190 条 vs 待合并 310 条，审阅积压比为 **1:1.6**。

---

## 4. 共同关注的技术方向

下表归纳了**至少 3 个项目同时涌现**的共性诉求：

| 技术方向 | 涉及项目 | 共同诉求 |
|---|---|---|
| **持久化记忆 / per-agent vault** | OpenClaw（#63829 已交付）、NanoClaw（#3012/#3013 OPEN）、LobsterAI（#2311 FTS 迁移）、IronClaw（#5974 episodic memory PR） | 跨 provider 的记忆统一抽象、按 agent 隔离、过期索引自动迁移 |
| **多 Agent 编排原语** | OpenClaw（#10467/#9797/#10142）、Hermes Agent（#58731）、ZeroClaw（#8958 ACP `?agent=`）、NanoBot（#4623 spawn model override） | subagent lane 队列深度可见性、`queue_status` 工具、`session:end` hook、按 turn 临时覆盖模型 |
| **Channel 可靠性 / 长连接保活** | OpenClaw（#91588、#87109、#84569）、ZeroClaw（#5514、#8950）、LobsterAI（#2314、#2306）、NullClaw（#972）、PicoClaw（#3178） | 渠道空闲超时自愈、断连后无需重启、IM 群聊 ID 大小写保真 |
| **上下文压缩 / Compaction** | OpenClaw（#102175 跨边界回归）、Hermes Agent（#55677、#513 两阶段提案）、CoPaw（#5856 压缩 tool_call 丢失）、NanoBot（#4588 context pruning）、IronClaw（#5895 已修复 compaction 误杀） | 压缩不丢结构、两阶段（prune→summarize）、缓存前缀稳定 |
| **安全护栏 / 凭证保护** | OpenClaw（#10659 masked secrets、#91283 minSecurity）、Hermes Agent（#27284 injection scanner）、NullClaw（#974 A2A IDOR）、NanoBot（#4776 /restart DoS）、CoPaw（#5947 MCP 权限失效）、IronClaw（#5640 audit sink wiring） | agent 看不到明文 API key、调用方绑定的 context 隔离、命令授权边界 |
| **MCP 稳定性** | OpenClaw（#102264 Codex Computer Use）、Hermes Agent（#60385 stdio 泄漏、#61336 tool name prefix）、NanoBot（#4842/#4843 timeout+reconnect）、CoPaw（#5947/#5954 权限与路径）、IronClaw（#5916/#5970 per-user registration store） | stdio 进程回收、过期 streamable HTTP 会话、tool name 前缀一致性 |
| **Provider / OAuth 适配** | OpenClaw（#101763 Molty id 错误）、ZeroClaw（#8934 Gemini thought_signature）、LobsterAI（间接通过 OpenClaw OAuth）、PicoClaw（#3241 OAuth refresh + #3246 MQTT TLS）、Hermes Agent（#28156 Bedrock IAM、#52496 custom provider 覆盖） | 多 provider context window、region prefix、IAM vs Bearer、协议变更跟随 |
| **UI/CLI 体验打磨** | NanoBot（#4876/#4877/#4832）、Hermes Agent（#62092/#62399/#60973）、CoPaw（#5903/#5909）、LobsterAI（#1331/#1338/#2312/#2316）、ZeroClaw（#8944/#8945） | WebUI 多行审批、session 列表搜索、语法高亮、Esc 关闭、macOS 文本替换兼容 |
| **stale PR 治理** | PicoClaw（#3179/#2937/#3200/#1951）、LobsterAI（#1331/#1333/#1335/#1336/#1338）、ZeroClaw（#5514 3 个月未关） | stale 机器人误关 bug fix PR、社区贡献 PR 长期等待 review |

---

## 5. 差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 关键技术架构 |
|---|---|---|---|
| **OpenClaw** | 通用多平台 Gateway + 多 Agent 平台 | 自托管开发者、追求多端覆盖的中高级用户 | Gateway + Plugin + 沙箱；强调 7×24 长跑可靠性 |
| **CoPaw (QwenPaw)** | 全栈 Runtime + 桌面壳（Tauri）+ ReMe 记忆 | 终端用户、AgentScope 生态使用者 | AgentScope 2.0 内核 + Tauri 桌面 + ReMe v0.4 |
| **ZeroClaw** | gateway 协议层（OpenAI 兼容、ACP）+ 插件宿主（TCP/webhook）+ 多架构镜像 | API 集成方、嵌入式/边缘部署、创作者工具场景 | OpenAI Chat Completions 兼容 + WASM 插件宿主 + Alpine/musl |
| **IronClaw** | Reborn runtime + bug_bash 集中回归 + XL 级新功能 | 准生产用户、企业内部集成 | RunFailureReason 漏斗 + per-user MCP store + episodic memory |
| **Hermes Agent** | Desktop/TUI + 多 provider + 多客户端 | Desktop 重度用户、多平台部署 | Bedrock/OpenAI/Custom Provider + Desktop UI + Matrix/Telegram/Teams |
| **LobsterAI** | 网易有道出品的桌面 Agent，聚焦 Cowork + IM 群聊 + 定时任务 | 中文桌面用户、办公协同场景 | Electron 桌面壳 + IM 群聊定时任务 + Cowork 队列协调 |
| **NanoBot (HKUDS)** | 学术派轻量框架，强调**模型路由灵活性**与**memory 严格一致性** | 研究者、本地模型（Ollama/llamacpp）用户 | Per-session/per-cron/per-spawn model override + memory 子系统重构 |
| **NanoClaw (nanocoai)** | 通道声明式架构 + 时间戳规约统一 + Context Preview 调试工具 | 工程导向开发者、需多 Provider 记忆统一场景 | ChannelDefaults adapter 模式 + ISO 存储 + 调试可观测性 |
| **PicoClaw (sipeed)** | 嵌入式/边缘 + 多通道（WhatsApp/Simplex/DeltaChat）+ 边缘设备（ARMv7） | 树莓派等 SBC 用户、隐私敏感部署 | Go 1.25.x + MQTT/TLS + ARMv7 构建 + Czech 等小语种 i18n |
| **NullClaw** | 早期 A2A 路由实验 | 实验性用户、研究人员 | Bearer 鉴权 + 任务/contextId 路由（**存在 IDOR 漏洞**） |
| **Moltis** | Provider 模型跟进（GPT-5.6） | 模型尝鲜用户 | 简单的模型注册表 + OpenAI/Codex 后端 |

**关键差异化洞察**：
- **OpenClaw 是"全能型选手"，CoPaw 是"全栈桌面型"，ZeroClaw 是"协议网关型"，IronClaw 是"准生产平台型"，Hermes Agent 是"Desktop 多 provider 型"，LobsterAI 是"中文 IM 协同型"**——同一赛道（个人 AI 助手）的差异化正在按"用户场景"细分。
- **NanoBot 与 NanoClaw 都聚焦"模型路由灵活性"**，但 NanoBot 走"学术派最小可用抽象"，NanoClaw 走"工程派声明式架构"，是同一诉求的两种实现范式。
- **PicoClaw 是少数专注"边缘/嵌入式"的开源助手**，ARMv7 + Czech i18n 的组合明确指向欧洲嵌入式开发者社区。

---

## 6. 社区热度与成熟度分层

### 🔴 高强度迭代层（健康但压力较大）
- **OpenClaw、CoPaw、ZeroClaw、IronClaw、Hermes Agent**
- 特征：日活动 80–1000 条、新功能/新架构大量涌入、P0/P1 Bug 频繁出现
- 共同挑战：版本切换震荡、PR 审阅积压

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目日报
**日期：2026-07-11**

---

## 1. 今日速览

NanoBot 项目过去 24 小时呈现**高强度活跃**状态：8 条 Issues 更新、42 条 PR 更新，其中 17 条已完成合并/关闭，合并转化率约 40%，显示出维护团队对 PR 的快速响应与高效流转。当日无新版本发布，工作主要集中在 **memory 子系统重构**（6 条相关 PR）、**agent 工具行为修正**（edit_file / spawn / goal）、**WebUI/CLI 体验优化**以及 **MCP 稳定性修复**。多个长期悬而未决的功能请求（如 cron 模型预设、spawn 子代理模型覆盖）已在 24 小时内被对应 PR 关闭，路线图推进明显。

---

## 2. 版本发布

无新版本发布。

---

## 3. 项目进展（已合并/关闭的重要 PR）

| PR | 标题 | 影响 |
|---|---|---|
| [#4622](https://github.com/HKUDS/nanobot/pull/4622) | feat(cron): support job model presets | **闭合 #4378**，为 cron 任务引入 `model_preset`，可在不修改主代理模型的前提下按任务覆盖 provider/model/context-window。 |
| [#4623](https://github.com/HKUDS/nanobot/pull/4623) | feat(subagent): allow spawn model override | **呼应 #4231**，为 `spawn` 工具增加可选 `model` 参数，单次 subagent 运行可临时覆盖主代理模型。 |
| [#4635](https://github.com/HKUDS/nanobot/pull/4635) | fix(tools): enforce exact edit_file line hints | **闭合 #4634**，将 `line_hint` 由"近似匹配偏好"提升为"严格一致性守卫"，离线 edit 基准的主要失败模式得到处理。 |
| [#4876](https://github.com/HKUDS/nanobot/pull/4876) | feat(webui): guide queued prompt with second Enter | WebUI 体验优化：响应进行中的第二次 Enter 可引导刚排队的 prompt 立即发送，含失效保护。 |
| [#4877](https://github.com/HKUDS/nanobot/pull/4877) | feat(webui): highlight file previews and diffs | WebUI 文件 diff 与预览加入基于 Prism 的懒加载语法高亮，统一处理语言别名与 diff 语言推断。 |
| [#4832](https://github.com/HKUDS/nanobot/pull/4832) | fix(cli): handle CSI-u Shift+Enter | CLI 多行输入回归修复：在 CSI-u 类终端上正确处理 Shift+Enter，避免原始转义序列泄漏。 |

**整体评估**：今日完成了 1 项性能/工具可靠性改进（edit_file）、2 项长期呼声强烈的模型路由能力（cron + spawn）、3 项前端/CLI 体验提升。**项目在"模型灵活性"与"编辑工具精确性"两条主线上明显向前推进。**

---

## 4. 社区热点

按评论数排序：

- **[#4253](https://github.com/HKUDS/nanobot/issues/4253)** — support overriding model per conversation（6 条评论，0 👍）
  诉求核心：用户希望在同一会话中针对隐私 / 时效性切换 openrouter（快）与本地 llamacpp（私密）。属于 "per-conversation / per-turn model override" 路由能力的最高呼声。

- **[#4867](https://github.com/HKUDS/nanobot/issues/4867)** — Preserve exact prompt prefix to enable caching in Ollama（3 条评论）
  痛点极其具体：每次轮询 Ollama 本地模型都额外增加 ~60 秒延迟，**32GB VRAM 下完全不可用**。根源是前缀缓存被破坏，#2463 的后续讨论仍在发酵。

- **[#4231](https://github.com/HKUDS/nanobot/issues/4231)** — feat: Add model parameter to spawn tool for subagent model override（2 条评论）
  与 #4253 共同构成 "细粒度模型路由"诉求群，今日 #4623 PR 已关闭对应代码工作，但 issue 本身尚未标记为 resolved。

- **[#4776](https://github.com/HKUDS/nanobot/issues/4776)** — Security: /restart command has zero authorization（1 条评论）
  安全议题：任何通过 `is_allowed()` 验证的用户（含 DM 配对）都能重启整个 bot 进程，触发 DoS；`/restart` 在 session lock 之前被调度。

> **热点背后的诉求**：用户从"全局单一模型"迈向"按会话/任务/隐私级别动态切换"的精细化需求已成为主流呼声；与此同时，前端稳定性和安全边界（命令授权）问题开始进入社区视野。

---

## 5. Bug 与稳定性

按严重程度排列：

| 级别 | Issue/PR | 描述 | Fix 状态 |
|---|---|---|---|
| 🔴 P1 | [#4867](https://github.com/HKUDS/nanobot/issues/4867) | Ollama 本地模型每轮 +60s 延迟，前缀缓存被破坏 | **无 fix PR**，issue 仍 OPEN |
| 🔴 P1 (安全) | [#4776](https://github.com/HKUDS/nanobot/issues/4776) | `/restart` 零授权，任何 paired 用户可 DoS 整个 bot | **无 fix PR** |
| 🟠 P1 | [#4842](https://github.com/HKUDS/nanobot/pull/4842) | MCP stdio 子进程未在 `AsyncExitStack.aclose()` 超时内退出时，CancelledError 未被捕获 | **Fix PR OPEN（待合并）** |
| 🟠 P1 | [#4843](https://github.com/HKUDS/nanobot/pull/4843) | MCP reconnect 网关崩溃：过期 streamable HTTP 会话在重连路径上立即关闭 stale stack | **Fix PR OPEN（待合并）** |
| 🟡 P2 | [#4835](https://github.com/HKUDS/nanobot/issues/4835) | WebUI landing 首条消息在 chat 切换时可能错发到无关已有会话 | **已闭合** |
| 🟡 P2 | [#4832](https://github.com/HKUDS/nanobot/pull/4832) | CLI 在 CSI-u 类终端上 Shift+Enter 退化为转义序列 | **已闭合** |
| 🟢 工具 | [#4634](https://github.com/HKUDS/nanobot/issues/4634) | `edit_file` 在 exact replacement 成功时仍修改错误匹配行 | **已闭合 (#4635)** |

**安全提醒**：`#4776` 与 `#4867` 均无对应修复 PR 跟进，建议维护者优先关注。

---

## 6. 功能请求与路线图信号

| 需求 | Issue | 对应 PR 状态 | 入版本可能性 |
|---|---|---|---|
| 每个会话独立模型覆盖 | [#4253](https://github.com/HKUDS/nanobot/issues/4253) | 暂无 PR | **高**，#4623/#4622 已部分实现基础设施 |
| `spawn` 工具支持模型覆盖 | [#4231](https://github.com/HKUDS/nanobot/issues/4231) | [#4623](https://github.com/HKUDS/nanobot/pull/4623) 已闭合 | **已落地** |
| cron 任务级模型预设 | [#4378](https://github.com/HKUDS/nanobot/issues/4378) | [#4622](https://github.com/HKUDS/nanobot/pull/4622) 已闭合 | **已落地** |
| Dream 模块仅在有变更时提交 | [#4872](https://github.com/HKUDS/nanobot/issues/4872) | [#4873](https://github.com/HKUDS/nanobot/pull/4873) OPEN | **极高**，同日 issue+PR |
| 通道引导式配置（Feishu 等） | — | [#4855](https://github.com/HKUDS/nanobot/pull/4855) OPEN | 中，配置复杂度治理方向 |
| Agent hooks 自动发现 | — | [#4878](https://github.com/HKUDS/nanobot/pull/4878) OPEN | 中，扩展性信号 |
| Sustained-goal 默认关闭 | — | [#4879](https://github.com/HKUDS/nanobot/pull/4879) OPEN | 高，影响人机交互 |
| 工具输出压缩以降低上下文消耗 | — | [#4588](https://github.com/HKUDS/nanobot/pull/4588) OPEN（priority: p2） | 高，长上下文性能主线 |

> **路线图信号**：模型路由灵活性、memory 子系统稳健性、工具执行精确性、WebUI/CLI 体验是当前四条主线。`#4588`（context pruning）若合并将显著改善长任务经济性。

---

## 7. 用户反馈摘要

- **隐私 / 成本驱动的多模型切换**（#4253, #4231, #4378 三位作者）：用户希望根据任务敏感度在云端高能模型与本地 llamacpp 之间灵活切换，并指出当前只能通过全局设置或重启实现，体验不连贯。
- **本地模型实际不可用**（#4867）：32GB VRAM 跑 Ollama 每轮 +60s 延迟被描述为 "totally unusable"，凸显提示前缀稳定性的实际工程影响。
- **WebUI 体验细节**（#4835, #4876, #4877）：用户在 chat 切换、首条消息归属、Enter 行为、语法高亮上反馈集中，说明 WebUI 已成为日常重度使用入口。
- **Cron 自动化场景**（#4378）：用户希望为不同定时任务指派不同模型/预设，体现"自动化工作流多模型编排"的真实需求。

---

## 8. 待处理积压（提醒维护者关注）

| 编号 | 类型 | 创建日期 | 风险点 |
|---|---|---|---|
| [#4253](https://github.com/HKUDS/nanobot/issues/4253) | Feature | 2026-06-08 | 6 条评论，社区核心呼声，但无 PR；建议关闭 #4231 时同步标记或推进 |
| [#4588](https://github.com/HKUDS/nanobot/pull/4588) | Perf PR | 2026-06-29 | p2 priority，长上下文压缩，影响 token 经济性 |
| [#4776](https://github.com/HKUDS/nanobot/issues/4776) | **Security** | 2026-07-06 | `/restart` DoS，无 fix PR，**建议 P0 处理** |
| [#4867](https://github.com/HKUDS/nanobot/issues/4867) | Bug | 2026-07-10 | 本地 Ollama 用户基本不可用，无 fix PR |
| [#4862](https://github.com/HKUDS/nanobot/pull/4862) | Refactor PR | 2026-07-09 | exec session 隔离，影响多 agent 安全边界 |
| [#4842](https://github.com/HKUDS/nanobot/pull/4842), [#4843](https://github.com/HKUDS/nanobot/pull/4843) | Fix PR (p1) | 2026-07-07/08 | MCP 关闭与重连稳定性，建议合并前加充分回归测试 |

---

**总体健康度**：🟢 **良好偏高**。PR 吞吐与合并速率健康，memory / 模型路由 / 编辑工具 三条主线齐头并进；主要风险点是 **Ollama 缓存破坏（#4867）** 与 **/restart 零授权 DoS（#4776）** 暂无修复，建议在下一次发版前优先闭环。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目日报

**日期：2026-07-11**
**项目：[NousResearch/hermes-agent](https://github.com/nousresearch/hermes-agent)**

---

## 1. 今日速览

Hermes Agent 今日社区活跃度**显著偏高**：24 小时内共触发 100 条 Issue/PR 事件（50 Issues + 50 PRs），其中 Issues 端 47 条新开/活跃、3 条关闭，PR 端 48 条待合并、仅 2 条落地。今日**无新版本发布**。讨论热点高度集中于 **Desktop/TUI 会话状态稳定性**（多次出现 stale UI、busy state 卡死、session 切换残留）、**上下文压缩（compaction）链路**（Jinja 模板报错、两阶段压缩提案）、以及 **MCP/Browser 多 agent 并发隔离**。整体来看，项目仍处于快速迭代期，但**桌面端和会话状态相关的 P1/P2 Bug 密度在升高**，建议维护者优先关注 sweeper 标记为 `risk-session-state` / `risk-message-delivery` 的条目。

---

## 2. 版本发布

⚠️ **今日无新版本发布**。这是连续第二个"零发版日"，但 PR 池中有 48 条待合并提交，意味着下一版本（推测 v0.18.2 / v2026.7.x）一旦发布将是一次较大的功能合并。

---

## 3. 项目进展

今日**仅 3 条 Issue/PR 完成生命周期收尾**，推进幅度有限：

| 类型 | 编号 | 内容 | 链接 |
|------|------|------|------|
| Issue 关闭 | [#50295](https://github.com/nousresearch/hermes-agent/issues/50295) | Bedrock Claude `/usage` 缓存计费字段缺失 + 跨区域前缀归一化 | 闭合 |
| Issue 关闭 | [#55677](https://github.com/nousresearch/hermes-agent/issues/55677) | 上下文压缩 Jinja 模板报错导致会话损坏 | 闭合 |
| PR 关闭 | [#61336](https://github.com/nousresearch/hermes-agent/pull/61336) | 修复 MCP 工具名 `mcp__server__` 前缀丢失（GLM 模型回退路径） | 标记 `not-planned` 后关闭 |

值得注意的是，#61336 被关闭时标记为 **not-planned**，说明维护者倾向于不在 `_repair_tool_call` 管线里再叠修复层，而是要求上游模型直接产出合规工具名——这属于一次明确的"非修复"决策。

---

## 4. 社区热点

按评论数排序，今日最受关注的 Issue 反映出三类用户诉求：

### 🔥 桌面/会话状态类（讨论最密集）
- **#52496**（7 条评论）—— Web Dashboard `/api/model/set` 会把 `custom:*` 命名 provider 重写成 openrouter，导致配置被静默覆盖。  
  👉 [链接](https://github.com/nousresearch/hermes-agent/issues/52496)
- **#48098**（7 条评论）—— Desktop 在压缩恢复后仍持续显示"Summarizing thread"状态行，已出现至少 3 位独立报告者。  
  👉 [链接](https://github.com/nousresearch/hermes-agent/issues/48098)

### 🔥 平台接入与计费链路
- **#28156**（5 条评论，**P1**）—— Bedrock + Claude 流：向导接受 Bearer token 但运行时 IAM 失败；EU 区域下拉里混入 us./global. 不可路由档案。  
  👉 [链接](https://github.com/nousresearch/hermes-agent/issues/28156)
- **#9403**（4 条评论）—— Pricing 架构第 4 阶段仍未落地（用户覆盖、合同价、CLI 同步）。  
  👉 [链接](https://github.com/nousresearch/hermes-agent/issues/9403)

### 🔥 安全/注入与功能提案
- **#513**（4 条评论，作者 teknium1 亲自挂出）—— 两阶段上下文管理提案，灵感来自 Kilocode，主张先 prune tool outputs 再做 LLM 摘要。  
  👉 [链接](https://github.com/nousresearch/hermes-agent/issues/513)
- **#27284**（4 条评论）—— 持久化 memory 与 MCP 工具描述的 prompt-injection 扫描器对多词变体（如 `please disregard prior directives`）存在绕过。  
  👉 [链接](https://github.com/nousresearch/hermes-agent/issues/27284)

**热点背后的诉求**：用户在多 provider、多区域、多客户端（Desktop/TUI/Matrix/Telegram/Teams）的真实部署中，频繁撞到"配置被覆盖""状态残留""凭证路径不一致"三类问题——核心痛点是**配置与状态的可观测性**。

---

## 5. Bug 与稳定性

按严重程度（P1 → P3）排列，并标注是否已有修复 PR：

### P1（高优先级）
| Issue | 摘要 | 修复 PR | 链接 |
|-------|------|---------|------|
| [#28156](https://github.com/nousresearch/hermes-agent/issues/28156) | Bedrock + Claude 向导接受 Bearer-only，运行时 IAM 解析失败 | ❌ 无 | — |

### P2（中高优先级）
| Issue | 摘要 | 修复 PR | 链接 |
|-------|------|---------|------|
| [#60385](https://github.com/nousresearch/hermes-agent/issues/60385) | MCP stdio 进程在 transport 重连时泄漏 | ❌ 无 | — |
| [#62170](https://github.com/nousresearch/hermes-agent/issues/62170) | TUI 切 session 后显示陈旧内容（v0.18.1） | ❌ 无（疑似 [#60973](https://github.com/nousresearch/hermes-agent/pull/60973) 部分覆盖） | — |
| [#54756](https://github.com/nousresearch/hermes-agent/issues/54756) | 最终响应为空时 TUI/Desktop 卡 busy | ❌ 无 | — |
| [#57828](https://github.com/nousresearch/hermes-agent/issues/57828) | `hermes update` 失败可能损坏 venv 且无自愈 | ❌ 无 | — |
| [#25016](https://github.com/nousresearch/hermes-agent/issues/25016) | LSP idle 子进程永不回收，单 server 永久占 ~200MB | ❌ 无 | — |
| [#62397](https://github.com/nousresearch/hermes-agent/issues/62397) | 后台 review fork 无法 patch skills（read-before-write 不匹配） | ✅ [#62400](https://github.com/nousresearch/hermes-agent/pull/62400) | 已开 |
| [#62394](https://github.com/nousresearch/hermes-agent/issues/62394) | Teams typing indicator 动画泄漏（疑似 `_keep_typing` task） | ❌ 无（标记 duplicate） | — |
| [#62383](https://github.com/nousresearch/hermes-agent/issues/62383) | Weixin iLink cron 投递 `context_token` 过期被误判为 rate-limited | ❌ 无（标记 duplicate） | — |

### P3（中优先级）
| Issue | 摘要 | 修复 PR | 链接 |
|-------|------|---------|------|
| [#40077](https://github.com/nousresearch/hermes-agent/issues/40077) | Desktop 在 NVIDIA 580+ 驱动（Ubuntu 24.04）崩溃 | ❌ 无 | — |
| [#62324](https://github.com/nousresearch/hermes-agent/issues/62324) | `stage-native-deps.mjs` 去掉 node-pty `spawn-helper` 可执行位 | ❌ 无（标记 duplicate） | — |
| [#62375](https://github.com/nousresearch/hermes-agent/issues/62375) | Desktop 远程附件上传无大小限制与断点续传 | ❌ 无 | — |
| [#57104](https://github.com/nousresearch/hermes-agent/issues/57104) | Desktop 用户/助手气泡视觉难区分 | ❌ 无 | — |

**稳定性观察**：48 条待合并 PR 中有相当一部分（`#60973`、`#62092`、`#54785`、`#62398`、`#62395` 等）直接修补桌面端稳定性，但**仍有一批 P2 Issue 处于无 PR 状态**，特别是 MCP 进程泄漏和 LSP 子进程回收这两类资源管理型 Bug，长期累积会让 gateway 越来越重。

---

## 6. 功能请求与路线图信号

下表合并了"今日新增 feature request"与"已存在但热度上升的请求"，并匹配可能的实现 PR：

| 主题 | 需求 Issue | 已开 PR | 纳入下一版本概率 |
|------|-----------|---------|------------------|
| **可配置 mem0 注入门槛** | — | ✅ [#61129](https://github.com/nousresearch/hermes-agent/pull/61129) | 高 |
| **插件工具声明加入 core messaging toolsets** | — | ✅ [#61127](https://github.com/nousresearch/hermes-agent/pull/61127) | 高 |
| **平台级 outbound suppression patterns** | — | ✅ [#61151](https://github.com/nousresearch/hermes-agent/pull/61151) | 中高 |
| **Engine "give-up" 改为用户友好的 retry 提示** | — | ✅ [#61128](https://github.com/nousresearch/hermes-agent/pull/61128) | 高 |
| **Signal 长消息分块投递** | — | ✅ [#57929](https://github.com/nousresearch/hermes-agent/pull/57929) | 中 |
| **Desktop 多行审批描述** | [#61249](https://github.com/nousresearch/hermes-agent/issues/61249) | ✅ [#62092](https://github.com/nousresearch/hermes-agent/pull/62092) | 极高（PR 显式引用 Issue） |
| **Desktop session 列表按标题搜索** | — | ✅ [#62399](https://github.com/nousresearch/hermes-agent/pull/62399) | 高 |
| **可配置 `max_tail_message_floor`** | — | ✅ [#60662](https://github.com/nousresearch/hermes-agent/pull/60662) | 高（针对 340K 上下文用户） |
| **浏览器 per-tab CDP 路由 / Tab lease** | [#62338](https://github.com/nousresearch/hermes-agent/issues/62338) / [#62339](https://github.com/nousresearch/hermes-agent/issues/62339) | ❌（仅 Issue） | 中（设计讨论阶段） |
| **Per-subagent model override** | [#58731](https://github.com/nousresearch/hermes-agent/issues/58731) | ❌ | 中 |
| **Volatile skills（单轮载入）** | [#36656](https://github.com/nousresearch/hermes-agent/issues/36656)（👍2） | ❌ | 中低（与压缩策略耦合） |
| **两阶段上下文管理** | [#513](https://github.com/nousresearch/hermes-agent/issues/513) | ❌ | 低（架构级变更） |
| **Secret Phase 4（ephemeral/external vault/audit）** | [#3630](https://github.com/nousresearch/hermes-agent/issues/3630) | ❌ | 取决于 Phase 3 |
| **qwen3.7-plus 接入 alibaba-coding-plan** | [#44662](https://github.com/nousresearch/hermes-agent/issues/44662) | ❌ | 极高（纯枚举） |

**路线图信号**：今日 PR 池的最大特征是 **gateway 抽象层加固**（outbound suppression、retry message、mem0 score、plugin toolsets），其次是 **Desktop UX 修补**。两条主线方向稳定，**MCP/Browser 多 agent 隔离仍是设计期**。

---

## 7. 用户反馈摘要

从 Issues 评论和描述中提炼的真实用户痛点：

| 类别 | 用户原话/场景 | 情绪信号 |
|------|--------------|----------|
| **会话损坏** | "compaction crashes on the 2nd/3rd attempt… conversation continuity is lost, requiring a fresh session" —— [#55677](https://github.com/nousresearch/hermes-agent/issues/55677) | 😟 挫败（频繁重建 session） |
| **状态误导** | "Desktop can keep showing `Summarizing thread` after the model has resumed work" —— [#48098](https://github.com/nousresearch/hermes-agent/issues/48098) | 😟 误导（用户误判 agent 状态） |
| **配置静默覆盖** | "Dashboard rewrites named custom provider to openrouter" —— [#52496](https://github.com/nousresearch/hermes-agent/issues/52496) | 😡 愤怒（用户自定义配置被覆盖） |
| **Token 浪费** | "skill_view returns 39KB content that persists until context compression" —— [#36656](https://github.com/nousresearch/hermes-agent/issues/36656) | 💸 成本敏感 |
| **平台兼容** | "Weixin cron delivery fails with ret=-2 'rate limited' when context_token is stale" —— [#62383](https://github.com/nousresearch/hermes-agent/issues/62383) | 😟 业务连续性受损 |
| **资源累积** | "long-lived gateways accumulate ~200 MB per server forever" —— [#

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目日报
**日期：2026-07-11** ｜ **仓库：[sipeed/picoclaw](https://github.com/sipeed/picoclaw)**

---

## 1. 今日速览

PicoClaw 今日整体活跃度**中等偏高**：过去 24 小时共发生 3 条 Issue 更新与 18 条 PR 更新，呈现典型的"积压清理 + 新需求涌入"组合形态。社区活动以**安全加固与稳定性修复**为主线（Go 版本升级、OAuth 刷新逻辑重构、MQTT TLS 验证、WhatsApp WebSocket 重连），同时 greencabe 等贡献者持续推动 WhatsApp 体验增强（typing presence）。需要关注的是，**多数 PR 仍处于 open/stale 状态，无新版本发布**，项目似乎处于开发周期的中段，等待一批修复合入后才会进入新 Release。维护者应及时审阅依赖与安全相关 PR，避免长期积压。

---

## 2. 版本发布

⚠️ **今日无新版本发布**。当前公开版本仍为 v0.2.9（见已关闭 Issue #3178），而 PR #3247 的描述提及 "v0.3.1 中引入的 keys"，暗示 v0.3.x 已在内部分支或预发布轨道上推进，但尚未对外发布正式 tag。

---

## 3. 项目进展

### 已关闭条目（仅 2 条，均为 stale 自动化处理）

- **PR #3179** — `fix(whatsapp): reconnect after websocket drops` ([链接](https://github.com/sipeed/picoclaw/pull/3179))
  - 作者：Alix-007 ｜ 状态：❌ 已关闭（stale）
  - **重要信号**：与 Issue #3178（WhatsApp WebSocket Timeout）直接相关的修复 PR 被 stale 机器人关闭，但底层 bug 仍存在。该 PR 包含读超时、ping/pong 处理器、异步消息分发等核心改进，建议维护者**手动重启 review 流程**或合并替代方案。

- **Issue #3178** — `WhatsApp Websocket Timeout` ([链接](https://github.com/sipeed/picoclaw/issues/3178))
  - 状态：❌ 已关闭（stale）｜ 👍 0 ｜ 💬 2
  - **重要信号**：因无人回复而 stale 关闭，但用户实际仍受此问题影响（WebSocket 断连后无重连）。社区可能误以为问题已修复。

### 关键开放 PR（推进显著）

- **PR #3248** — `fix: bump Go to 1.25.12` ([链接](https://github.com/sipeed/picoclaw/pull/3248))
  - 修复 `govulncheck` 报告的两个标准库漏洞：`GO-2026-5856`（crypto/tls）与 `GO-2026-4970`（os）。**应优先合并**。

- **PR #3241** — `fix(auth): make OAuth refresh provider-correct` ([链接](https://github.com/sipeed/picoclaw/pull/3241))
  - 直接对应 Issue #3239：OpenAI 改 JSON 请求体、移除固定 scope、加 30 秒超时并加锁防并发竞争。是 OAuth 体系的**结构性修复**。

- **PR #3242** — `feat(whatsapp): add native typing presence` ([链接](https://github.com/sipeed/picoclaw/pull/3242))
  - 直接对应 Issue #3240：实现 `channels.TypingCapable` 接口，处理 composing/paused 状态。**与 PR #3179 的关闭形成矛盾**——WhatsApp 体验正在多线推进。

- **PR #3246** — `fix: security and robustness hardening` ([链接](https://github.com/sipeed/picoclaw/pull/3246))
  - 三项加固：MQTT 默认 `InsecureSkipVerify: true` 关闭、OAuth 超时、限定 search 读取次数。属于**安全审计产出**，建议快速合并。

- **PR #3205** — `fix: support 9router gateway + Linux ARMv7 build` ([链接](https://github.com/sipeed/picoclaw/pull/3205))
  - 扩展对树莓派 3 B+ 等 ARMv7 设备的支持，并修复 9router 网关响应解析。**对嵌入式/边缘部署用户重要**。

- **PR #3247** — `feat(i18n): add Czech translations` ([链接](https://github.com/sipeed/picoclaw/pull/3247))
  - 补齐 v0.3.1 缺失的捷克语翻译键，反映出**社区国际化参与度**。

---

## 4. 社区热点

| 排名 | 条目 | 类型 | 评论数 | 👍 | 关注焦点 |
|------|------|------|--------|-----|----------|
| 1 | [Issue #3178](https://github.com/sipeed/picoclaw/issues/3178) WhatsApp WebSocket Timeout | Bug | 2 | 0 | 已 stale 关闭但问题未真正解决 |
| 2 | [PR #3179](https://github.com/sipeed/picoclaw/pull/3179) WhatsApp reconnect | Fix | – | 0 | 被 stale 关闭，对应修复悬空 |
| 3 | [Issue #3240](https://github.com/sipeed/picoclaw/issues/3240) WhatsApp typing presence | Feature | 0 | 0 | 用户体验类需求，已配套 PR #3242 |
| 4 | [Issue #3239](https://github.com/sipeed/picoclaw/issues/3239) OAuth refresh semantics | Bug | 0 | 0 | 多 provider 兼容性问题，已配套 PR #3241 |

**热点诉求分析**：
WhatsApp 通道相关的 4 个条目（Issue #3178/#3240、PR #3179/#3242）合计占据 4/21 的今日活动量，反映 **WhatsApp 是 PicoClaw 当前用户最依赖的聊天通道**，其稳定性（WebSocket 重连）与体验（typing feedback）是社区最关注的两条主线。

OAuth 相关（Issue #3239 + PR #3241 + PR #3246 之一）形成第二条热点线，体现多 LLM provider 接入的**协议适配工作尚未收敛**。

---

## 5. Bug 与稳定性

### 🔴 高优先级

| 严重度 | 问题 | 是否已有 Fix PR | 状态 |
|--------|------|-----------------|------|
| 🔴 高 | [Issue #3178](https://github.com/sipeed/picoclaw/issues/3178) WhatsApp WebSocket 断连后无重连 | ⚠️ [PR #3179](https://github.com/sipeed/picoclaw/pull/3179) 已被 stale 关闭 | 实际未修复 |
| 🔴 高 | [Issue #3239](https://github.com/sipeed/picoclaw/issues/3239) OAuth refresh 协议不正确 + 竞态 | ✅ [PR #3241](https://github.com/sipeed/picoclaw/pull/3241) | 待 review |
| 🟠 中 | [PR #3246](https://github.com/sipeed/picoclaw/pull/3246) MQTT `InsecureSkipVerify: true` 默认开启 | ✅ 同一 PR 修复 | 待 review |

### 🟡 安全相关（应立即跟进）

- [PR #3248](https://github.com/sipeed/picoclaw/pull/3248)：Go 工具链 1.25.11 → 1.25.12，修复 `crypto/tls` 与 `os` 标准库 CVE。建议 24 小时内合并。
- [PR #3246](https://github.com/sipeed/picoclaw/pull/3246)：MQTT 证书验证默认关闭 → 默认开启，影响所有 MQTT broker 连接安全。

### 🟢 性能/重构

[PR #3243](https://github.com/sipeed/picoclaw/pull/3243) / [#3244](https://github.com/sipeed/picoclaw/pull/3244) / [#3245](https://github.com/sipeed/picoclaw/pull/3245) 由 corporatepiyush 提交，针对 `pkg/seahorse` 与 `pkg/skills` 的 `escapeXML` 多遍 `strings.ReplaceAll` 与 `+= Sprintf` 模式做单遍/Builder 优化，属于 O(n²) → O(n) 的内存分配改进。**对长上下文会话场景有显著收益**，可批量合并。

---

## 6. 功能请求与路线图信号

| 需求 | 来源 | 已有实现 | 路线图判断 |
|------|------|----------|-----------|
| WhatsApp typing 状态反馈 | [Issue #3240](https://github.com/sipeed/picoclaw/issues/3240) | ✅ [PR #3242](https://github.com/sipeed/picoclaw/pull/3242) | **极可能进入 v0.3.x** |
| Simplex 聊天通道 | [PR #3193](https://github.com/sipeed/picoclaw/pull/3193) | ✅ 内置实现 | 等待维护者 review，方向符合"多通道"战略 |
| Agent Collaboration Bus（per-agent mailbox、collaboration thread） | [PR #2937](https://github.com/sipeed/picoclaw/pull/2937) | ✅ 内置实现 | ⚠️ stale 状态（5 月起），需维护者表态 |
| 可配置默认 fallback 链（Web UI + API） | [PR #3200](https://github.com/sipeed/picoclaw/pull/3200) | ✅ 内置实现 | stale 状态（7 月 1 日起） |
| 安装脚本从 docs 仓库迁入主仓 | [PR #1951](https://github.com/sipeed/picoclaw/pull/1951) | ✅ | ⚠️ **已搁置 3.5 个月**，是当前积压最久的 PR |
| 9router 网关 + ARMv7 构建 | [PR #3205](https://github.com/sipeed/picoclaw/pull/3205) | ✅ | 边缘部署用户刚需，应优先 |
| DeltaChat 通道重构（-320 LOC） | [PR #3222](https://github.com/sipeed/picoclaw/pull/3222) | ✅ | stale 状态 |

**路线图信号总结**：v0.3.x 的潜在主题较为清晰——**WhatsApp 体验完善 + OAuth/Provider 适配收敛 + 边缘设备（ARM）支持 + 多通道（Simplex/DeltaChat）扩张**。

---

## 7. 用户反馈摘要

由于多数新开 Issue/PR 评论数为 0，可获取的真实反馈主要集中在已关闭的 [Issue #3178](https://github.com/sipeed/picoclaw/issues/3178)（2 条评论）：

- **痛点**：用户通过 Docker + launchpad 部署 PicoClaw v0.2.9 + deepseek-v4-pro，使用 WhatsApp WebSocket 连接时遇到超时；涉及调度功能（schedules）触发时尤为明显。
- **使用场景**：容器化部署 + 第三方 OAuth 模型 + 主流聊天通道的组合，是 PicoClaw 的典型用户画像。
- **满意度信号**：无明确正向反馈；社区更倾向于"沉默使用 → 撞到 bug → 提 issue"的模式，说明**缺少 issue-first 渠道引导或模板化提问**。

**隐含信号**：Issue #3178 的 stale 关闭引发的连锁反应——同一作者 / 关联贡献者（Alix-007）的修复 PR #3179 也被一并关闭，反映出 **stale 机器人策略对 bug 修复链路存在副作用**，维护者应在 stale 关闭前增加人工复核。

---

## 8. 待处理积压

以下 PR/Issue 已标记 `[stale]` 或长期未获响应，建议维护者优先处理：

| 条目 | 类型 | 创建时间 | 搁置天数 | 链接 |
|------|------|----------|----------|------|
| [PR #1951](https://github.com/sipeed/picoclaw/pull/1951) 移动安装脚本 | Chore | 2026-03-24 | **109 天** | 积压最久 |
| [PR #2937](https://github.com/sipeed/picoclaw/pull/2937) Agent Collaboration Bus | Feature | 2026-05-24 | 48 天 | 战略性功能 |
| [PR #3165](https://github.com/sipeed/picoclaw/pull/3165) Seed XML tool calls | Fix | 2026-06-24 | 17 天 | Volcengine Doubao 兼容 |
| [PR #3193](https://github.com/sipeed/picoclaw/pull/3193) Simplex channel | Feature | 2026-06-27 | 14 天 | 多通道扩展 |
| [PR #3200](https://github.com/sipeed/picoclaw/pull/3200) Configurable fallback chain | Feature | 2026-07-01 | 10 天 | Web UI 增强 |
| [PR #3205](https://github.com/sipeed/picoclaw/pull/3205) 9router + ARMv7 | Fix | 2026-07-02 | 9 天 | 边缘设备刚需 |
| [PR #3208](https://github.com/sipeed/picoclaw/pull/3208) mautrix 0.27→0.28 | Deps | 2026-07-02 | 9 天 | 依赖更新 |
| [PR #3211](https://github.com/sipeed/picoclaw/pull/3211) eslint 10.4→10.6 | Deps | 2026-07-02 | 9 天 | 依赖更新 |
| [PR #3222](https://github.com/sipeed/picoclaw/pull/3222) DeltaChat 重构 | Refactor | 2026-07-03 | 8 天 | -320 LOC 净瘦身 |
| [Issue #3178](https://github.com/sipeed/picoclaw/issues/3178) WhatsApp WS Timeout | Bug | 2026-06-26 | 15 天 | ⚠️ 已误关闭 |

**积压总览**：18 个开放 PR 中有 8 个标记 stale。考虑到 dependabot 自动 PR 通常无需深度 review，维护者只需批量合并依赖更新，即可释放 review 带宽给 #3241/#3242/#3246/#3248 等实质改动。

---

### 📌 维护者行动建议

1. **立即处理**：[PR #3248](https://github.com/sipeed/picoclaw/pull/3248)（Go 安全补丁）+ [PR #3246](https://github.com/sipeed/picoclaw/pull/3246)（MQTT TLS）+ [PR #3241](https://github.com/sipeed/picoclaw/pull/3241)（OAuth 正确性）
2. **重启 review**：[PR #3179](https://github.com/sipeed/picoclaw/pull/3179)（WhatsApp 重连，stale 误关）+ [Issue #3178](https://github.com/sipeed/picoclaw/issues/3178)
3. **批量合并**：dependabot 的 #3208/#3211 等依赖更新
4. **路线图决策**：对 [PR #2937](https://github.com/sipeed/picoclaw/pull/2937)（Agent Collaboration）与 [PR #1951](https://github.com/sipeed/picoclaw/pull/1951)（安装脚本）做出取舍表态
5. **流程改进**：建议对 `[stale]` 机器人增加"涉及 bug 的 PR/Issue 不自动关闭"的白名单规则

---

*报告生成时间：2026-07-11 ｜ 数据源：GitHub REST API*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报

**报告日期**: 2026-07-11
**数据周期**: 过去 24 小时
**数据源**: GitHub (nanocoai/nanoclaw)

---

## 1. 今日速览

NanoClaw 今日活跃度处于**中高水位**：24 小时内共产生 25 条 PR 更新（10 条已合并/关闭）和 3 条 Issue 更新（2 条关闭、1 条新增），但**无新版本发布**。项目核心团队（gavrielc、glifocat、amit-shafnir）持续推进两项重大重构——**通道默认值（ChannelDefaults）重构**与**全仓库时间戳规约统一（ISO 存储 + 本地时区显示）**，两条主线均已合入主干。同时，新功能 `feat(memory)` 落地了"Provider-agnostic 持久化记忆"基础设施，并配套引入 Codex 集成。今日整体节奏显示项目处于**"密集重构 + 新能力沉淀"**阶段，代码库健康度良好。

---

## 2. 版本发布

⚠️ **本周期无新版本发布**。鉴于已合入 10 条 PR（包含 ChannelDefaults、时间戳规约、Context Preview Tool 等较大改动），下一次发布很可能是一次**中等规模的 minor 版本**，建议关注项目 Release 页面。

---

## 3. 项目进展

### 3.1 已合并 / 已关闭的重要 PR（10 条）

#### 🔹 通道架构重构（gavrielc 主笔）
| PR | 标题 | 影响 |
|---|---|---|
| [#3010](https://github.com/nanocoai/nanoclaw/pull/3010) | feat: adapter-declared channel defaults | 核心机制——各通道自行声明默认行为（engage mode、线程策略、sender policy），替代 core 层的硬编码启发式 |
| [#3011](https://github.com/nanocoai/nanoclaw/pull/3011) | feat(channels): ChannelDefaults 声明 + WhatsApp 共享号修复 | 通道分支侧的实现，对每个 adapter 显式声明配置，并修复 WhatsApp 共享号场景 |
| [#3009](https://github.com/nanocoai/nanoclaw/pull/3009) | Move channel formatting skills from trunk to channels branch | 将 WhatsApp/Slack 格式化技能从主干迁至 channels 分支，避免对所有用户推送无关通道的格式化指南 |

**意义**：将"通道差异化逻辑"从 core 下沉到 adapter，提升了**可扩展性**——新增通道不再需要修改 core，新增格式化技能也不再"污染"未启用该通道的安装。

#### 🔹 时间戳规约统一（gavrielc 主笔）
| PR | 标题 | 影响 |
|---|---|---|
| [#3006](https://github.com/nanocoai/nanoclaw/pull/3006) | fix: ISO storage + local-time display for all timestamps | 全仓库**存储 ISO-Z UTC、显示本地时间**的统一规约（基于对所有 `datetime('now')` 站点的审计） |
| [#3005](https://github.com/nanocoai/nanoclaw/pull/3005) | fix: stamp task rows with ISO timestamps | 修复任务行时间戳被错误解析为本地时区的偏移问题 |
| [#3007](https://github.com/nanocoai/nanoclaw/pull/3007) | fix: exchange archives stamp local time | Codex/OpenCode 会话归档文件名与时间戳改用本地时区展示 |

**意义**：这是从"3 工作流审计"中识别出的**全仓库一致性修复**，让跨区域、跨时区的用户看到符合直觉的时间显示。

#### 🔹 其他
- [#3004](https://github.com/nanocoai/nanoclaw/pull/3004) — **Context Preview Tool**（`scripts/context-preview.ts`）：可模拟多种场景（首条消息、追问、累积、任务触发、唤醒、A2A、子代理）并精确打印 agent 上下文，是开发与调试**诊断能力**的关键工具。
- [#3003](https://github.com/nanocoai/nanoclaw/pull/3003) — `docs(agent-browser)`：要求自定义条件等待必须有界（bounded waits），避免 agent 陷入死循环。
- [#3000](https://github.com/nanocoai/nanoclaw/pull/3000) — 修复 Codex footer 显示**天文数字 token 数**（如 383M）的 bug：原因是 `turn.completed.usage` 返回的是整线程累计值，应改用 rollout 文件中的 `last_token_usage` 单轮真实值。

### 3.2 整体进展评估

📊 **代码库健康度：上升**。两项核心重构（通道 + 时间戳）一次性合入，避免了长期分支漂移；新增的 Context Preview Tool 显著提升了**可观测性**；Memory 子系统（详见 §6）的 PR #3012/#3013 已基本就绪待合并。

---

## 4. 社区热点

> ⚠️ **数据提示**：今日所有 PR/Issue 显示评论数与点赞数均接近 0 或为空（多数 PR `comments: undefined`），说明本周期内**社区讨论热度较低**，或数据抓取时评论尚未同步。以下按 PR 复杂度与潜在影响力排序：

### 4.1 高关注度议题

- **[Issue #3001](https://github.com/nanocoai/nanoclaw/issues/3001)** — shared-skills 重构前的旧分组静默持有过期 skill 副本
  - 由 glifocat（核心维护者）提报
  - 影响面：**所有在 2026-04-21（commit 8a12fa61）之前创建的旧分组**
  - 已配套修复 PR：[#3002](https://github.com/nanocoai/nanoclaw/pull/3002) — 检测并警告"真实目录阻塞了共享 skill symlink"的情况

- **[PR #3014](https://github.com/nanocoai/nanoclaw/pull/3014)** — `fix(agent-runner): bound hasIdenticalSend to the turn in flight`
  - 由 vishnujayvel 提交（贡献者首次亮相）
  - 涉及 agent-runner 的去重逻辑正确性

### 4.2 社区诉求分析

从今天开放/关闭的 Issues 主题看，社区核心诉求集中在三点：
1. **CLI 创建路径（`bin/ncl`）的完整性**：连续出现 #2415、`#2389` 两条"通过 CLI 创建后缺少配套数据行"的 Bug，反映 CLI 路径存在系统性的"半成品"风险；
2. **存量数据迁移**：#3001 揭示了重构后的"孤儿数据"问题——社区期望更平滑的 schema/skill 演进；
3. **跨通道体验一致性**：iMessage 整合（#2999）、Telegram 富渲染（#2877）体现用户对"多通道统一抽象"的期待。

---

## 5. Bug 与稳定性

### 5.1 按严重程度排序

| 严重度 | 编号 | 描述 | 状态 | 是否已有 fix PR |
|---|---|---|---|---|
| 🔴 **High** | [#3001](https://github.com/nanocoai/nanoclaw/issues/3001) | 重构前的旧分组持有过期 skill 副本，silently block symlink | 🟢 OPEN | ✅ [#3002](https://github.com/nanocoai/nanoclaw/pull/3002) |
| 🟠 **Medium** | [#2415](https://github.com/nanocoai/nanoclaw/issues/2415) | `ncl groups create` 跳过 `container_configs` 行，首次 spawn 失败 | ✅ CLOSED（2026-07-10） | 🔧 已修复 |
| 🟠 **Medium** | [#2389](https://github.com/nanocoai/nanoclaw/issues/2389) | `bin/ncl` 创建的 wirings 不自动创建 destinations，agent 响应被静默丢弃 | ✅ CLOSED（2026-07-10） | 🔧 已修复 |
| 🟡 **Medium-Low** | [#3008](https://github.com/nanocoai/nanoclaw/pull/3008) | WhatsApp Baileys 在 LID 模式下，因传入 `cachedGroupMetadata` 导致 SKDM 失败 | 🟢 PR OPEN | —（PR 即为修复） |
| 🟡 **Medium-Low** | [#3014](https://github.com/nanocoai/nanoclaw/pull/3014) | `hasIdenticalSend` 未限定到当前 turn，可能跨轮次误判 | 🟢 PR OPEN | —（PR 即为修复） |
| 🟢 **Low** | [#3000](https://github.com/nanocoai/nanoclaw/pull/3000) | Codex footer 显示累计 token 数（383M），严重误导 | ✅ CLOSED | 🔧 已修复 |

### 5.2 趋势观察

📉 **稳定性呈改善趋势**：今日 2 条历史 Bug（#2415、#2389）已关闭，均与 `bin/ncl groups create` 配套流程相关，表明维护者正系统性地**清理 CLI 创建路径的脏数据遗留**。新增的 #3001 与 #3002 是一对紧密的 issue-fix 组合，提示维护者已建立"重构 → 迁移 → 修复"的闭环。

---

## 6. 功能请求与路线图信号

### 6.1 已落地（合并中或合并完成）

| 能力 | PR | 状态 |
|---|---|---|
| **Provider-agnostic 持久化记忆**（`memory/index.md` + `memory/system/definition.md` 自动加载） | [#3012](https://github.com/nanocoai/nanoclaw/pull/3012) | 🟡 OPEN（待合并） |
| **Codex 加载共享记忆**（注册 `SessionStart` hook） | [#3013](https://github.com/nanocoai/nanoclaw/pull/3013) | 🟡 OPEN（待合并） |
| **iMessage 单通道 + 双后端**（Local Chat SDK / Hosted，统一通过 `/add-imessage` 安装） | [#2999](https://github.com/nanocoai/nanoclaw/pull/2999) | 🟡 OPEN |
| **Telegram 原生富渲染**（Bot API 10.1 `sendRichMessage`） | [#2877](https://github.com/nanocoai/nanoclaw/pull/2877) | 🟡 OPEN |
| **Tasks 一门式投递**（`send_message` 必须显式 `to`，无 fallback） | [#2988](https://github.com/nanocoai/nanoclaw/pull/2988) | 🟡 OPEN（Part 3/5） |
| **Context Preview 调试工具** | [#3004](https://github.com/nanocoai/nanoclaw/pull/3004) | ✅ MERGED |

### 6.2 路线图信号

🚧 **可识别的下一阶段重点**：
- **多 Provider 记忆统一**：#3012 + #3013 是面向未来的关键基础设施（Codex 已纳入，Claude 应已支持），预计将逐步覆盖更多 provider。
- **通道声明式架构**：ChannelDefaults 重构完成后（#3010/#3011/#3009 均已合并），下一波可能涌现"新增通道"的快速集成。
- **可观测性工具链**：Context Preview Tool (#3004) 标志着项目开始系统化投入**调试与诊断能力**，与 #2966（"errored batch ack 时打日志"）形成呼应。
- **计划任务系统**：Tasks 是分 5 个 PR 的连续重构（#2980/#2981 已合并、#2988 进行中、后续还有 2 个），暗示完整的任务调度重构正在路上。

---

## 7. 用户反馈摘要

> ⚠️ 本周期数据中，仅 **#2415** 有 1 条评论，其余 Issue/PR 评论数均为 0 或缺失，因此**真实用户反馈样本极少**。以下从可获取的 Issue 内容中提炼：

### 7.1 用户痛点（基于 Issue 描述推断）

1. **`bin/ncl` CLI 路径下的"半成品创建"**（#2415, #2389）
   - **痛点**：用户通过 CLI 优雅地创建 group + wiring 后，运行时却失败（container config not found / 消息被静默丢弃），**失败信号极其隐蔽**——没有任何 UI 提示需要补充配置。
   - **诉求**：CLI 应是"开箱即用"的 happy path，或至少在缺漏时给出明确报错。

2. **重构带来的"孤儿数据"**（#3001）
   - **痛点**：4 月 21 日 shared-skills 重构后，老分组被静默遗忘，**日志中无任何信号**。
   - **诉求**：期望在重构时提供自动迁移工具或运行时检测告警。

3. **Codex Footer Token 显示错乱**（#3000）
   - **痛点**：383M input tokens 这种数量级会让用户**质疑模型真实使用情况**，影响信任。
   - **诉求**：语义上正确的 token 计量展示。

### 7.2 满意信号

- **核心维护者 glifocat、gavrielc 在自己的 PR/Issue 中主动引用了具体行号、commit hash、文件路径**（如 `src/container-runner.ts:473`、`commit 8a12fa61`），说明**代码审查文化扎实、上下文引用严谨**——这对 OSS 项目的可维护性是积极信号。
- **新贡献者 vishnujaygel 提交 #3014**，说明项目仍在吸引新贡献者。

---

## 8. 待处理积压

### 8.1 较长时间未关闭的 PR（建议维护者关注）

| PR | 标题 | 提交日期 | 待处理时长 |
|---|---|---|---|
| [#2877](https://github.com/nanocoai/nanoclaw/pull/2877) | feat(telegram): native rich rendering via Bot API 10.1 | 2026-06-28 | **~13 天** |
| [#2966](https://github.com/nanocoai/nanoclaw/pull/2966) | fix(agent-runner): log when an errored batch is acked completed | 2026-07-06 | ~5 天 |

⚠️ **#2877 是周期内最老的开放 PR**（13 天），且涉及"渠道集成"，建议维护者尽快 review 或回复 author 反馈进度，避免贡献者流失。

### 8.2 待合并的较大 PR（代码量与影响力较大）

- [#3012](https://github.com/nanocoai/nanoclaw/pull/3012) — Memory Provider-agnostic 持久化（架构级）
- [#3013](https://github.com/nanocoai/nanoclaw/pull/3013) — Codex Memory 加载

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目动态日报

**报告日期：2026-07-11**
**数据来源：github.com/nullclaw/nullclaw**

---

## 1. 今日速览

NullClaw 今日活跃度较低，仓库在 24 小时内仅有 2 条 Issue 更新，PR 流入和版本发布均为零。项目整体处于**维护观望期**——无新功能推进，无代码合并。值得注意的是，今日新开 Issue #974 涉及 A2A 路由的鉴权绕过风险，属于**安全级别**问题，建议维护者优先响应；另一条 Issue #972（telegram channel 空闲后断连）持续有用户跟进，社区反馈面较广。整体来看，项目活跃度偏低，存在一定的安全与稳定性隐患待处理。

---

## 2. 版本发布

**无新版本发布。** 24 小时内仓库未推送任何 Release tag。建议维护者在修复关键 Bug 后发布补丁版本。

---

## 3. 项目进展

**无 PR 合并或关闭。** 今日仓库在 Pull Request 维度无任何动态，项目代码层面未发生实质性推进。

---

## 4. 社区热点

### 🔥 热点 1：Issue #972 — Telegram 频道空闲断连
- **链接**：https://github.com/nullclaw/nullclaw/issues/972
- **状态**：OPEN（已开 11 天）
- **评论数**：2
- **作者**：i11010520

**诉求分析**：用户部署在 EC2 上的 NullClaw 实例，Telegram channel 经过一晚或更长时间空闲后会出现"失联"，第二天早晨不再响应消息。但日志显示 `nullclaw agent -m "ping"` 后端正常工作，memory plan 等子模块亦无异常。这表明问题很可能集中在 Telegram channel adapter 的长连接保活（keepalive）/心跳机制上，并非后端 agent 故障。用户在评论中已附上 `memory plan resolved` 等日志，便于排查。

### 🔥 热点 2：Issue #974 — A2A 路由共享 Bearer 导致跨调用方任务复用
- **链接**：https://github.com/nullclaw/nullclaw/issues/974
- **状态**：OPEN（今日新开）
- **评论数**：0
- **作者**：N0zoM1z0

**诉求分析**：安全研究员报告 NullClaw 在 `/a2a` 路由上虽然使用 bearer token 鉴权，但在**任务与会话层面**却仅以裸 task id 与调用方传入的 `contextId` 决定权限归属。replay 演示显示 Bob 与 Alice 共享同一有效 bearer 时，Bob 可读取/列举 Alice 的任务历史，并能复用 Alice 的 `contextId` 接收其历史下游事件——属于典型的**横向越权（IDOR）漏洞**。

---

## 5. Bug 与稳定性

| 严重程度 | Issue | 标题 | 是否有 Fix PR |
|---|---|---|---|
| 🔴 **高（安全）** | [#974](https://github.com/nullclaw/nullclaw/issues/974) | A2A 路由允许跨调用方任务与上下文复用 | ❌ 无 |
| 🟡 **中（功能）** | [#972](https://github.com/nullclaw/nullclaw/issues/972) | Telegram channel 空闲超时后停止响应 | ❌ 无 |

**评估**：
- **#974** 涉及鉴权模型缺陷，影响多租户/多调用方场景下的数据隔离，存在泄露他方任务历史的风险，优先级最高。
- **#972** 影响 Telegram 接入可用性，但通过重启 channel 一般可恢复，属可用性级别 Bug；需排查长连接超时配置或 Telegram Bot API 的 polling 策略。

两条 Issue 均**无对应 Fix PR**，建议维护者尽快分配 Owner。

---

## 6. 功能请求与路线图信号

今日无明确的功能请求（feature request）类 Issue。当前两条活跃 Issue 均围绕**稳定性与安全**展开。从行业趋势看，AI Agent 框架对多租户隔离、Channel 长连接保活的需求日益突出，社区后续大概率会推动以下方向：
- A2A / MCP 类路由的细粒度权限模型（per-caller context binding）
- 各 Channel adapter 的连接健康检查与自动重连机制

维护者可在路线图中提前规划。

---

## 7. 用户反馈摘要

- **痛点 1（稳定性）**：用户 **i11010520** 反映 Telegram channel 在夜间空闲后失联，后端仍正常运转但消息无法触达。表明 channel adapter 与后端 agent 之间缺乏"自愈"或"心跳探测"机制，用户需要手动重启。
- **痛点 2（安全）**：研究员 **N0zoM1z0** 指出 bearer token 仅做"门禁级"鉴权，但任务与会话层缺少调用方绑定，存在跨用户数据可见/可复用风险。该 Issue 措辞专业、附有 replay 步骤，体现高质量安全反馈。
- **使用场景**：可见用户已在 EC2 等生产/准生产环境中长跑 NullClaw，并将其作为多通道（至少包含 Telegram）的对话 Agent 接入层。

---

## 8. 待处理积压

| 类型 | Issue | 已开时长 | 状态 | 备注 |
|---|---|---|---|---|
| 安全 Bug | [#974](https://github.com/nullclaw/nullclaw/issues/974) | 1 天 | OPEN | **建议立即响应**，今日新开但风险面广 |
| 功能 Bug | [#972](https://github.com/nullclaw/nullclaw/issues/972) | 11 天 | OPEN | 已 11 天无修复或 maintainer 回复，社区讨论度低 |
| PR | — | — | — | 0 个待合并 PR，无积压 |

**维护者提醒**：
1. **#974** 为安全报告，建议 24-48 小时内确认漏洞并发布 advisory；
2. **#972** 已挂起 11 天，建议在 triage 中确认是否为 channel adapter 共性问题，并给出 workaround；
3. 当前 0 PR 流入可能反映社区对贡献入口不清晰，建议在 README/CONTRIBUTING 中明示 good-first-issue。

---

### 健康度评分（主观，仅供参考）

| 维度 | 评分（5 分制） | 说明 |
|---|---|---|
| 代码活跃度 | ⭐⭐ | 无 PR、无 Release |
| 社区互动 | ⭐⭐ | Issue 反馈质量高，但响应慢 |
| 安全响应 | ⭐⭐ | 有安全报告但未启动修复 |
| 稳定性 | ⭐⭐⭐ | 存在可用性 Bug 但未影响核心 agent |

**总评**：项目处于**低速维护期**，建议维护者在本周内对 #974 与 #972 给出官方回应，以维持社区信任。

---

*报告生成时间：2026-07-11 | 数据范围：过去 24 小时*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目日报 · 2026-07-11

## 1. 今日速览

IronClaw 项目今日进入高强度迭代周期，单日 Issues 更新 36 条（新开/活跃 28、已关闭 8）、PR 更新 50 条（待合并 35、已合并/关闭 15），活跃度处于近一周峰值。当前主线仍聚焦 **Reborn 运行时稳定性**（loop 重试、compaction、MCP 注册存储）与 **bug_bash 三轮回归**（P1/P2/P3 缺陷集中修复），同时由 `tmartin2113` 等新贡献者提交的 XL 级功能 PR（MCP 超时、情景记忆、按需检索工具）已陆续进入 review。项目整体健康度评估：**中等偏紧**——缺陷面广但修复响应迅速，关键 P1（Slack DM 投递目标错乱）仍未关闭，需关注。

## 2. 版本发布

**今日无新版本发布**，但有一个 release 自动化 PR 仍在排队：
- [PR #5598](https://github.com/nearai/ironclaw/pull/5598) `chore: release` — 待合并的版本号变更：`ironclaw_common` 0.4.2 → 0.5.0（⚠ API breaking）、`ironclaw_safety` 0.2.2 → 0.2.3、`ironclaw_skills` 0.3.0 → 0.4.0（⚠ API breaking）、`ironclaw` 0.24.0 → 0.29.1。建议下游集成方在合并前核对 `ironclaw_common` / `ironclaw_skills` 的破坏性变更。

## 3. 项目进展

今日合并/关闭的 PR 中，多项直接推进了 Reborn 的鲁棒性与开发者体验：

| PR | 作者 | 影响 | 摘要 |
|---|---|---|---|
| [PR #5967](https://github.com/nearai/ironclaw/pull/5967) | henrypark133 | 修复 P0 级启动 crash-loop | 跳过无效 available-extension manifest 而非让整个 catalog 加载崩溃，关闭 [#5966](https://github.com/nearai/ironclaw/issues/5966) |
| [PR #5895](https://github.com/nearai/ironclaw/pull/5895) | henrypark133 | 修复 compaction 误杀 | 工具成功后不再因 compaction 失败而终结整个 run，关闭 [#5838](https://github.com/nearai/ironclaw/issues/5838) |
| [PR #5960](https://github.com/nearai/ironclaw/pull/5960) | pranavraja99 | 提升执行能力上限 | 默认 loop 迭代上限 32 → 256，让长工具链 turns 不再被 fail-close |
| [PR #5950](https://github.com/nearai/ironclaw/pull/5950) | henrypark133 | 测试基础设施 | 将生产 LocalDev capability-port 装配暴露给集成 harness（PR-A，后续 PR-B 跟进） |
| [PR #5954](https://github.com/nearai/ironclaw/pull/5954) | ilblackdragon | 错误分类底座 | `RunFailureReason` 漏斗 Phase 1/4 —— 为后续统一终端失败分类奠基 |
| [PR #5844](https://github.com/nearai/ironclaw/pull/5844) | pranavraja99 | 提示词优化 | 默认 system prompt 增加 Computation 段，让模型用工具计算而非"心算" |
| [PR #5817](https://github.com/nearai/ironclaw/pull/5817) | pranavraja99 | 修复误屏蔽 | 网关不再把形如 `1.5` 的小数当作 namespace.x capability 引用而拦截整轮工具调用 |
| [PR #5916](https://github.com/nearai/ironclaw/pull/5916) | henrypark133 | 已被取代 | per-user MCP registration store 旧版，由 [#5970](https://github.com/nearai/ironclaw/pull/5970) 取代后关闭 |

整体来看，**Reborn 错误处理漏斗（MCP 注册 / compaction / provider 5xx / RunFailureReason）四件套**今日均有推进，且与 `claw-swe-bench-lite` 评估（reborn 30% vs 同模型 hermes 65%）暴露的"丢工不丢算"问题对症。

## 4. 社区热点

按评论数排序，今日最活跃的话题集中在"扩展/集成的状态一致性"与"Reborn UI 缺陷"两条主线：

| 排名 | Issue | 评论 | 主题 |
|---|---|---|---|
| 1 | [#5948](https://github.com/nearai/ironclaw/issues/5948) | 5 | Assistant 把 GitHub 扩展误报为"已激活"（P3 bug_bash） |
| 2 | [#5747](https://github.com/nearai/ironclaw/issues/5747) | 3 | Slack 无解绑入口（已关闭） |
| 3 | [#5891](https://github.com/nearai/ironclaw/issues/5891) | 2 | "Last completed" 时间戳显示运行中而非上一次完成时间 |
| 4 | [#5741](https://github.com/nearai/ironclaw/issues/5741) | 2 | `builtin.http.save` 在大响应下直接 `OutputTooLarge` 而非落盘 |
| 5 | [#5836](https://github.com/nearai/ironclaw/issues/5836) | 2 | Routine 每次定时执行都"无附加 thread"，0% 成功率（P2） |
| 6 | [#5834](https://github.com/nearai/ironclaw/issues/5834) | 2 | Slack 解绑请求被 agent 拒绝（P2） |
| 7 | [#5640](https://github.com/nearai/ironclaw/issues/5640) | 2 | 集成 harness 永远不挂 `RecordingSecurityAuditSink`（wiring parity 缺口） |
| 8 | [#5889](https://github.com/nearai/ironclaw/issues/5889) | 2 | "Load older messages" 按钮完全无效 |
| 9 | [#5885](https://github.com/nearai/ironclaw/issues/5885) | 2 | 审批通知打开后 approval card 缺失（P2） |
| 10 | [#5707](https://github.com/nearai/ironclaw/issues/5707) | 2 | 创建 routine 的回应泄露内部 trigger/cron/命令细节（P2） |

**共同诉求**：用户在 P2/P3 集中报告了 **状态/UI 一致性缺陷**——"看起来激活但其实没激活"、"看起来点击了但无响应"、"提示已完成但实际未投递"。这反映出 Reborn WebUI 与 backend 状态同步缺少权威源，以及 chat 完成事件与副作用（Slack DM、Sheet 写入）的因果一致性还没有保证。

## 5. Bug 与稳定性

按严重程度整理今日报告与已修复项：

### 🔴 P1（功能不可用，需立即处理）
- [#5943](https://github.com/nearai/ironclaw/issues/5943) **Slack DM 投到当前频道而非用户私聊**——严重损害 trust，无 fix PR 关联。

### 🟠 P2（影响核心工作流）
- [#5836](https://github.com/nearai/ironclaw/issues/5836) Routine 定时执行 100% 失败（"No thread attached"）
- [#5834](https://github.com/nearai/ironclaw/issues/5834) Slack disconnect 被 agent 拒绝
- [#5885](https://github.com/nearai/ironclaw/issues/5885) 审批 card 缺失，用户无法 approve/deny
- [#5707](https://github.com/nearai/ironclaw/issues/5707) Routine 创建回应泄露内部实现
- [#5879](https://github.com/nearai/ironclaw/issues/5879) 错误 banner 在成功后残留
- [#5946](https://github.com/nearai/ironclaw/issues/5946) Agent 在确认 trigger 可用前就改 Google Sheet
- [#5945](https://github.com/nearai/ironclaw/issues/5945) 多工具长 run 后出现泛化"model provider unavailable"
- [#5944](https://github.com/nearai/ironclaw/issues/5944) Slack DM 投递假成功（run 报绿勾但实际未到达）
- [#5837](https://github.com/nearai/ironclaw/issues/5837) Routine 的 "Open run" / "Logs" 不可点击（**已关闭**，等待合并 PR 验证）

### 🟡 P3（体验/小修）
- [#5948](https://github.com/nearai/ironclaw/issues/5948) GitHub 扩展状态误报
- [#5891](https://github.com/nearai/ironclaw/issues/5891) "Last completed" 时间戳错误
- [#5889](https://github.com/nearai/ironclaw/issues/5889) "Load older messages" 无效
- [#5947](https://github.com/nearai/ironclaw/issues/5947) 删除 thread 后 UI 不更新
- [#5835](https://github.com/nearai/ironclaw/issues/5835) "Jump to latest" 按钮位置错（**已关闭**）

### 🟢 已修复（含 fix PR）
- [#5838](https://github.com/nearai/ironclaw/issues/5838) Context compaction 误杀 → [PR #5895](https://github.com/nearai/ironclaw/pull/5895) ✅
- [#5966](https://github.com/nearai/ironclaw/issues/5966) 启动 crash-loop → [PR #5967](https://github.com/nearai/ironclaw/pull/5967) ✅
- [#4640](https://github.com/nearai/ironclaw/issues/4640) Reborn gsuite calendar list_events 返回旧事件 → 已关闭
- [#5747](https://github.com/nearai/ironclaw/issues/5747) Slack 无解绑入口 → 已关闭
- [#5828](https://github.com/nearai/ironclaw/issues/5828) v1 coverage 残留引用 → 已关闭

**今日 bug fix 转化率**：8 条关闭中 5 条直接对应 PR，剩余为线下复现/无法重现类关闭。维护团队对 P2 的响应中位时间约 1-2 天。

## 6. 功能请求与路线图信号

新提的需求中，已有多条与正在 review 的功能 PR 形成强对应：

| 需求 Issue | 已有/在途 PR | 路线图判断 |
|---|---|---|
| [#5968](https://github.com/nearai/ironclaw/issues/5968) HTTP 工具对 Attio 等无 MCP 服务失败 | [PR #5973](https://github.com/nearai/ironclaw/pull/5973) MCP per-server timeout + background bridge | **高概率**纳入下版本 |
| [#5955](https://github.com/nearai/ironclaw/issues/5955) 多步骤 workflow 撞 tool-call 上限 | [PR #5960](https://github.com/nearai/ironclaw/pull/5960) iteration 32→256 已合并 | **部分解决**，仍需任务分解/记忆 |
| [#5953](https://github.com/nearai/ironclaw/issues/5953) 通用 ExternalChannel 卸载断连 bug | [PR #5970](https://github.com/nearai/ironclaw/pull/5970) per-user MCP store | 中等概率 |
| [#5958](https://github.com/nearai/ironclaw/issues/5958) 存储 I/O 无 wall-clock bound | 待评估 | 短期 follow-up |
| [#5969](https://github.com/nearai/ironclaw/issues/5969) opencode 默认模型列表不含 GLM-5.2 | 无 | 用户配置/文档层面 |
| [#5938](https://github.com/nearai/ironclaw/issues/5938) 统一 Reborn dropdown 与 SelectMenu | 无 | UI 一致性专题 |
| [#5935](https://github.com/nearai/ironclaw/issues/5935) 退役 v1 runtime | [PR #5828](https://github.com/nearai/ironclaw/pull/5828) 已合并同类清理 | 已列入路线图 |

由 `tmartin2113` 提交的三个 XL 级新功能（[#5973](https://github.com/nearai/ironclaw/pull/5973) MCP timeouts / [#5974](https://github.com/nearai/ironclaw/pull/5974) episodic memory / [#5972](https://github.com/nearai/ironclaw/pull/5972) per-turn tool retrieval）显著扩展 agent 能力边界——若全部合入，将构成下个 minor 版本的"AI 体验三件套"。

## 7. 用户反馈摘要

从今日 Issues 的对话与摘要提炼的真实用户痛点：

1. **状态不可信**（#5948、#5944、#5943、#5946）：用户反复报告"系统说做完了但实际没做"、"助手说扩展激活但其实没激活"、"在确认资源可用前就动用户数据"。**核心诉求**：建立强一致的"事实层"——UI 状态、agent 声明、副作用执行三者的真相来源必须唯一。

2. **错误信息颗粒度不足**（#5945、#5741）：长工具链 run 失败只报"model

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报

**报告日期：2026-07-11**
**数据周期：过去 24 小时**

---

## 一、今日速览

LobsterAI 项目在 2026-07-11 呈现**高强度迭代态势**。过去 24 小时内共处理 17 个 PR（其中 10 个已合并/关闭，7 个待合并），并发布了 `2026.7.10` 新版本，集成 2285、2296 等多项新特性。Issues 端活跃度较低，新开/活跃 Issue 仅 2 条，但其中 #2293（USER.md 被覆盖）反映出潜在的**数据丢失类 Bug**，需重点关注。整体而言，项目处于稳定的版本节奏推进期，工程质量相关修复（构建、内存迁移、定时任务）密集合并，社区贡献（功能请求类 PR）因长期 stale 累积形成积压。

---

## 二、版本发布

### 🚀 LobsterAI 2026.7.10 已发布

**Release PR**：[#2317](https://github.com/netease-youdao/LobsterAI/pull/2317)

本次版本亮点（来自 What's Changed）：

| 类别 | 变更内容 | PR |
|------|---------|-----|
| Agents | **支持子智能体委托协作（delegated subagent collaboration）** | [#2285](https://github.com/netease-youdao/LobsterAI/pull/2285) |
| Cowork | **权限提示弹窗支持最小化**（minimizable permission prompts） | [#2296](https://github.com/netease-youdao/LobsterAI/pull/2296) |

> ⚠️ **提示**：Release Notes 在数据中截断，建议直接查阅 [Release 页面](https://github.com/netease-youdao/LobsterAI/releases/tag/2026.7.10) 获取完整变更清单。

**迁移注意事项**：
- 子智能体协作功能若涉及 agent 配置格式变更，需关注已有工作流的兼容性
- 权限弹窗 UI 行为调整，可能影响自动化测试脚本

---

## 三、项目进展（已合并/关闭的重要 PR）

### 🎯 核心功能增强
- **#2310** [feat(cowork): add folder context attachments](https://github.com/netease-youdao/LobsterAI/pull/2310) — Cowork 提示输入支持粘贴/拖拽本地文件夹作为附件，并以文件夹路径上下文形式传递给 OpenClaw，无需上传目录内容。使用 Electron 原生路径解析与 stat 元数据确保目录识别可靠性。

### 🐛 关键 Bug 修复
- **#2314** [fix(scheduled-task): preserve WeCom and DingTalk group ID casing](https://github.com/netease-youdao/LobsterAI/pull/2314) — 修复企微、钉钉群聊定时任务中原生群 ID 大小写被 OpenClaw 转为小写导致投递失败的问题，并兼容已保存为全小写的历史任务。
- **#2311** [fix(memory): migrate fts-only indexes for all agents](https://github.com/netease-youdao/LobsterAI/pull/2311) — 检测所有 agent 的 FTS-only 内存索引元数据，发现过期索引时调用官方 `memory index --force` 一次性迁移，避免各 agent 索引不同步。
- **#2306** [fix(scheduled-task): repair IM group task routing](https://github.com/netease-youdao/LobsterAI/pull/2306) — IM 群聊定时任务路由修复：按所选 bot 绑定的 agent 过滤目标，迁移 legacy IM announce 任务，保留原生投递目标。
- **#2312** [fix: askuser minimize state loss](https://github.com/netease-youdao/LobsterAI/pull/2312) — 修复最小化状态下 askuser 状态丢失问题。
- **#2315** [fix(cowork): connect queued follow-up coordinator](https://github.com/netease-youdao/LobsterAI/pull/2315) — 跨会话及最小化期间处理队列中的 follow-up。
- **#2313** [fix(cowork): submit only the selected queued steer](https://github.com/netease-youdao/LobsterAI/pull/2313) — 保留 FIFO 处理逻辑，仅提交所选队列项，添加回归测试与诊断日志。
- **#2316** [fix(renderer): prevent Windows title bar logo compression](https://github.com/netease-youdao/LobsterAI/pull/2316) — 修复 Windows 平台侧边栏折叠时标题栏 logo 被压缩的视觉缺陷。

### 🔧 工程基建
- **#2309** [fix(build): keep null-byte stripping ES2020-compatible](https://github.com/netease-youdao/LobsterAI/pull/2309) — 用 ES2020 兼容的正则替换 `replaceAll`，并在共享 TS 变更时同时触发 renderer 与 main CI 构建。

**整体评价**：今日单日合并 10 个 PR，质量与功能并重——尤其在定时任务（IM 投递）、内存索引迁移、Cowork 队列协调等关键链路上形成集中加固，项目稳定性显著向前推进。

---

## 四、社区热点

| 排名 | 编号 | 类型 | 状态 | 评论数 | 关注点 |
|------|------|------|------|--------|--------|
| 🥇 | [#2293](https://github.com/netease-youdao/LobsterAI/issues/2293) | Issue | OPEN | 3 | 多 agent 下 USER.md 被覆盖 |
| 🥈 | [#1392](https://github.com/netease-youdao/LobsterAI/issues/1392) | Issue | CLOSED（stale） | 2 | 定时任务开关无反应 |
| 🥉 | [#1337](https://github.com/netease-youdao/LobsterAI/issues/1337) | Issue | OPEN（stale） | 1 | 会话列表按时间分组 |

**诉求分析**：
- **#2293** 是当前最活跃的真实用户反馈，触及**多 agent 隔离性**这一核心使用场景——用户希望为不同 agent 建立差异化需求，但当前实现存在 workspace 串扰。
- **#1337** 与对应 PR #1338 形成经典"功能请求 + 实现方案"配对，反映用户对 ChatGPT/Claude.ai 同款 UX 的诉求。
- **#1392** 因长期无更新被标记为 stale 后关闭，定时任务开关交互体验曾是个反复问题。

---

## 五、Bug 与稳定性

### 🔴 高严重度
| 编号 | 描述 | 状态 | 是否有 Fix |
|------|------|------|-----------|
| [#2293](https://github.com/netease-youdao/LobsterAI/issues/2293) | 重启后所有 agent 的 USER.md 被 main agent 的 USER.md 覆盖替换 | OPEN | ❌ 暂无 |

> **风险提示**：此 Bug 涉及用户配置数据丢失/覆盖，破坏多 agent 隔离语义。建议维护者优先响应并定位根因（疑似启动时未按 agent 区分读取 workspace）。

### 🟡 中严重度（已修复，今日合并）
- **#2306 / #2314**：IM 群聊定时任务投递失败 / 大小写丢失 → 已修复 ✅
- **#2311**：FTS-only 内存索引未迁移 → 已修复 ✅
- **#2312**：最小化状态下 askuser 状态丢失 → 已修复 ✅
- **#2315**：Cowork 队列 follow-up 跨会话/最小化时未处理 → 已修复 ✅

### 🟢 低严重度
- **#2316**：Windows 标题栏 logo 压缩 → 已修复 ✅
- **#2309**：构建脚本 ES2020 兼容性 → 已修复 ✅

---

## 六、功能请求与路线图信号

今日合并/活跃的功能类 PR 与 Issue 暗示下一版本可能包含：

| 候选功能 | 来源 | 路径 | 状态 |
|---------|------|------|------|
| MCP 自定义服务器 JSON 粘贴导入 | [#1336](https://github.com/netease-youdao/LobsterAI/pull/1336) | PR | OPEN (stale) |
| 会话列表按时间分组 | [#1338](https://github.com/netease-youdao/LobsterAI/pull/1338) / [#1337](https://github.com/netease-youdao/LobsterAI/issues/1337) | PR+Issue | OPEN (stale) |
| 错误状态会话红点徽标 | [#1331](https://github.com/netease-youdao/LobsterAI/pull/1331) | PR | OPEN (stale) |
| 定时任务 Workdays（周一至周五）选项 | [#1335](https://github.com/netease-youdao/LobsterAI/pull/1335) | PR | OPEN (stale) |
| i18n 附件标签 + Esc 关闭 + 删除保护 | [#1333](https://github.com/netease-youdao/LobsterAI/pull/1333) | PR | OPEN (stale) |

**分析**：这些 PR 均为社区贡献，方向明确（UX 优化 + 主流产品对齐），但因长期 stale 等待维护者 review。建议在下一版本规划时优先批量评估纳入。

---

## 七、用户反馈摘要

### 真实痛点
1. **多 agent 配置隔离失效**（#2293）：用户为不同业务场景建立多个 agent，但因 USER.md 覆盖导致无法维护差异化"用户画像/需求说明"，被迫放弃多 agent 用法。
2. **定时任务偶发失灵**（#1392）：部分定时任务开关点击无反应，关闭操作无法生效，影响自动化场景。
3. **长会话列表难以导航**（#1337）：用户希望参考 ChatGPT/Claude.ai 的"今天/昨天/本周"分组，结构性管理历史会话。

### 积极信号
- 用户主动提供 issue #2293 的复现路径（关闭软件后单独修改 workspace 下的 USER.md，重启后被 main agent 内容覆盖），便于维护者排查。
- 社区贡献者（@MaoQianTu, @Noodles006, @0xFLX 等）持续输出高质量 PR，体现生态活力。

---

## 八、待处理积压（提醒维护者关注）

### ⏰ 长期 Open 的社区 PR（stale 标记）
以下 PR 自 2026-04-02 创建以来超过 3 个月未获响应，建议批量评估：

| PR | 标题 | 创建时间 |
|----|------|---------|
| [#1331](https://github.com/netease-youdao/LobsterAI/pull/1331) | 会话列表错误状态红点徽标 | 2026-04-02 |
| [#1333](https://github.com/netease-youdao/LobsterAI/pull/1333) | i18n attachment label, Escape close, delete guard | 2026-04-02 |
| [#1335](https://github.com/netease-youdao/LobsterAI/pull/1335) | 定时任务 Workdays 选项 | 2026-04-02 |
| [#1336](https://github.com/netease-youdao/LobsterAI/pull/1336) | MCP 自定义服务器 JSON 粘贴导入 | 2026-04-02 |
| [#1338](https://github.com/netease-youdao/LobsterAI/pull/1338) | 会话列表按时间分组 | 2026-04-02 |
| [#1276](https://github.com/netease-youdao/LobsterAI/pull/1276) | dependabot: actions/first-interaction 升级 | 2026-04-02 |
| [#1275](https://github.com/netease-youdao/LobsterAI/pull/1275) | dependabot: actions/stale 9.1.0 → 10.2.0 | 2026-04-02 |

### 🔴 紧急关注
- **#2293**（多 agent USER.md 覆盖）—— **建议优先响应**，潜在数据丢失风险
- **#1337**（会话列表分组）—— 已有现成 PR #1338，可快速闭环

---

## 📊 项目健康度评分

| 维度 | 评分 | 说明 |
|------|------|------|
| 迭代节奏 | ⭐⭐⭐⭐⭐ | 单日合并 10 个 PR，节奏稳健 |
| 版本稳定性 | ⭐⭐⭐⭐ | 2026.7.10 顺利发布 |
| 社区响应度 | ⭐⭐ | 社区 PR 长期 stale，社区反馈渠道待优化 |
| Bug 修复效率 | ⭐⭐⭐⭐ | 多条核心 Bug 当日闭环 |
| 数据安全 | ⭐⭐⭐ | 存在多 agent 配置覆盖未解决 Bug |

---

*报告生成基于 2026-07-11 当日 GitHub 公开数据，所有链接均指向 netease-youdao/LobsterAI 仓库。*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报

**报告日期**：2026-07-11
**数据来源**：[github.com/moltis-org/moltis](https://github.com/moltis-org/moltis)

---

## 1. 今日速览

Moltis 项目今日整体活跃度处于**低位**。过去 24 小时内无新增 Issue、无已关闭 Issue、无新版本发布。社区仅有一条处于 Open 状态的 PR（[#1146](https://github.com/moltis-org/moltis/pull/1146)），由 PeterDaveHello 提交，旨在新增 GPT-5.6 系列模型支持，尚未进入评审/合并阶段。整体来看，项目处于功能迭代前的"间歇期"，没有显著的工作流入或流出。

---

## 2. 版本发布

**本节无更新**。过去 24 小时内无新版本发布。

---

## 3. 项目进展

今日**无 PR 被合并或关闭**，项目代码层面的主干没有发生可观察的变化。

唯一在追踪的 PR：

- **[#1146 Add GPT-5.6 model support](https://github.com/moltis-org/moltis/pull/1146)**（状态：OPEN）— 由 PeterDaveHello 于 2026-07-09 提交，最近更新于 2026-07-10，至今未获评审或合并。该 PR 旨在为 OpenAI 与 OpenAI Codex 后端目录注册 GPT-5.6 的三个变体（Sol、Terra、Luna），并修正配置示例中过时的 OpenAI 模型引用。**项目前进步数：0**，未推进任何主线功能。

---

## 4. 社区热点

由于今日 Issues 与 PRs 的交互量极低（0 条 Issue、1 条 PR 均无评论、无 Reactions），**社区热度处于静默状态**。

唯一可关注的入口仍为 [PR #1146](https://github.com/moltis-org/moltis/pull/1146)，其诉求反映的是：随着 OpenAI 推出 GPT-5.6 新模型（代号 Sol/Terra/Luna），社区用户希望 Moltis 第一时间将新模型纳入 provider 注册表，并同步更新不同后端的上下文窗口限制（OpenAI API 1.05M、ChatGPT/Codex 后端 372K）。这反映出模型跟进速度是 Moltis 用户的核心关注点之一。

---

## 5. Bug 与稳定性

今日**未收到任何 Bug、崩溃或回归问题报告**，Issues 流入量为 0。暂无需要标记严重程度或跟进修复的情况。

---

## 6. 功能请求与路线图信号

从仅有的信号来看，Moltis 社区当前阶段的路线图信号集中体现在 **OpenAI 生态模型覆盖**这一主线：

- **[PR #1146](https://github.com/moltis-org/moltis/pull/1146)** 已经具象化了"扩大 OpenAI 系列模型支持"这一需求，包含：
  - 注册 GPT-5.6 Sol / Terra / Luna 三个新模型；
  - 按官方文档对齐不同后端的 context window（API 端 1.05M、ChatGPT/Codex 后端 372K）；
  - 清理配置示例中的过期模型引用。

若该 PR 顺利合并，可视为下一版本（Moltis 下一个 release）的**候选 feature**。建议维护者尽快安排 review，以便在后续版本中体现对新模型的支持。

---

## 7. 用户反馈摘要

由于今日 Issues 区域为 0、PR #1146 尚无评论，**无法从社区讨论中提炼出具体用户痛点或场景**。仅有的一条 PR 间接反映了用户对"模型与官方同步"和"配置示例保持最新"的潜在期望。

---

## 8. 待处理积压

| 编号 | 类型 | 状态 | 距今 | 维护者建议 |
|------|------|------|------|-----------|
| [#1146](https://github.com/moltis-org/moltis/pull/1146) | PR | OPEN，0 评论、0 👍 | 已开 2 天（创建于 2026-07-09） | 建议尽快指派 reviewer；如变更无误，可考虑合并以配合模型发布节奏。 |

> 当前积压体量极小（仅 1 条），不存在长期未响应（>30 天）的重要 Issue 或 PR。**整体贡献者响应链路健康，但需关注主动 trigger review 的机制**。

---

## 附：项目健康度速评

| 维度 | 状态 |
|------|------|
| 提交活跃度 | ⚪ 低（24h 内 0 Issue、0 合并 PR） |
| 社区互动度 | ⚪ 低（PR #1146 无评论、无反应） |
| 维护响应 | ⚪ 待观察（尚无 review 记录） |
| 模型跟进 | 🟢 有信号（PR #1146 已就位） |
| Bug 风险 | 🟢 当日无新增 |

**总体判断**：项目处于"间歇期"。建议维护者在本周内对 [PR #1146](https://github.com/moltis-org/moltis/pull/1146) 进行评审决策，以保持对 OpenAI 新模型的跟进节奏，避免积压扩散。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目日报 · 2026-07-11

> 📌 **说明**：本期数据中 Issue/PR 链接均指向 `agentscope-ai/QwenPaw` 仓库（与 CoPaw 同一项目主线）。

---

## 1. 今日速览

CoPaw 在过去 24 小时内迎来里程碑式发布 **v2.0.0 正式版**，围绕 AgentScope 2.0 重构的 Runtime 2.0 全面上线，社区活跃度处于高位：44 条 Issue 更新、46 条 PR 更新、3 个新版本发布。整体节奏呈现"**重大发布 + 快速修复 + 反馈涌入**"的特征，多个 P0/P1 级 Bug 在发布当天即被定位并提交修复 PR（如 #5947 MCP 权限策略失效、#5951 桌面沙箱递归爆炸）。项目健康度：**活跃但处于版本切换震荡期**，需重点跟进桌面端沙箱、Auto Memory、MCP 三大新暴露的稳定性问题。

---

## 2. 版本发布

### 🚀 v2.0.0（Stable）— 重大里程碑版本

**核心变更（Runtime 2.0）**：
- **内核重构**：基于 AgentScope 2.0 重构 Runtime（[#5078](https://github.com/agentscope-ai/QwenPaw/pull/5078)、[#4846](https://github.com/agentscope-ai/QwenPaw/pull/4846)、[#5018](https://github.com/agentscope-ai/QwenPaw/pull/5018)），迁移 `agentscope==1.0.20 + agentscope-runtime==1.1.6` → AgentScope 2.0 新架构与 API。
- 这是破坏性变更版本（参见 [#4727](https://github.com/agentscope-ai/QwenPaw/issues/4727)）。

**⚠️ 破坏性变更与迁移注意事项**：
- 后端依赖 AgentScope 2.0，老的 AgentScope 1.x 配置/插件不兼容。
- 已有用户反馈"历史消息、日志、记忆是否兼容"（[#5948](https://github.com/agentscope-ai/QwenPaw/issues/5948)）——社区正在等待官方升级指南。
- 桌面端（Tauri）沙箱实现变更引发严重回归（见 [#5951](https://github.com/agentscope-ai/QwenPaw/issues/5951)），Windows 用户需谨慎升级。
- PR [#5936](https://github.com/agentscope-ai/QwenPaw/pull/5936) 在发布当天 revert 了"per-message 当前时间注入"功能（[#5923](https://github.com/agentscope-ai/QwenPaw/pull/5923)），因显示效果不佳——说明 v2.0.0 GA 仍存在体验性回退。

**附属预发布版本**：
- **v2.0.0-beta.7**：官网首页改版（[#5940](https://github.com/agentscope-ai/QwenPaw/pull/5940)）+ ReMe 内存任务 `session_id` 传递修复（[#5938](https://github.com/agentscope-ai/QwenPaw/pull/5938)）。
- **v2.0.0-beta.6**：频道模块单元测试（[#5812](https://github.com/agentscope-ai/QwenPaw/pull/5812)）+ 版本号 bump（[#5915](https://github.com/agentscope-ai/QwenPaw/pull/5915)）。

**Release Duty**：发布后 4 小时内需完成安装验证 ([#5944](https://github.com/agentscope-ai/QwenPaw/issues/5944))。

---

## 3. 项目进展

今日合并/关闭 PR 共 26 条，关键推进包括：

| PR | 影响 | 状态 |
|---|---|---|
| [#5942](https://github.com/agentscope-ai/QwenPaw/pull/5942) | 版本号 bump 至 v2.0.0，触发 GA 发布 | ✅ CLOSED |
| [#5940](https://github.com/agentscope-ai/QwenPaw/pull/5940) | 官网首页改版，对齐 QwenPaw 2.0 五项核心升级（Agent OS / Loop Engineering / Scroll Context / ReMe v0.4 / TUI） | ✅ CLOSED |
| [#5938](https://github.com/agentscope-ai/QwenPaw/pull/5938) | 修复 ReMe `add_summarize_task` 缺少 `session_id` 导致记忆归属错乱 | ✅ CLOSED |
| [#5937](https://github.com/agentscope-ai/QwenPaw/pull/5937) | 文档新闻格式细化 | ✅ CLOSED |
| [#5932](https://github.com/agentscope-ai/QwenPaw/pull/5932) | 2.0 版本文档更新 | ✅ CLOSED |
| [#5936](https://github.com/agentscope-ai/QwenPaw/pull/5936) | 回滚"per-message 当前时间注入"功能（显示效果差） | ✅ CLOSED |
| [#5812](https://github.com/agentscope-ai/QwenPaw/pull/5812) | 频道模块单元测试覆盖（PR-A3 回归计划） | ✅ CLOSED |
| [#5813](https://github.com/agentscope-ai/QwenPaw/pull/5813) | runtime/security/install 回归测试 43 项（PR-A4），并修复 `_extract_rm_targets` 重新打开 #5090 的回归 | 🟡 OPEN（即将合并） |

**整体进度评估**：v2.0.0 GA 已发布，文档/官网/版本号/单元测试基础设施到位；正式版本当天的 revert 操作（[#5936](https://github.com/agentscope-ai/QwenPaw/pull/5936)）说明 QA 仍有遗漏，需在 v2.0.1 快速迭代修复。

---

## 4. 社区热点

| 排名 | Issue/PR | 评论数 | 主题 |
|---|---|---|---|
| 1 | [#5401](https://github.com/agentscope-ai/QwenPaw/issues/5401) | 15 | Console 前端在大量 `tool_use` 历史下崩溃/白屏（已关闭） |
| 2 | [#4727](https://github.com/agentscope-ai/QwenPaw/issues/4727) | 12 | AgentScope 1.x → 2.0 迁移追踪（已关闭） |
| 3 | [#5273](https://github.com/agentscope-ai/QwenPaw/issues/5273) | 11 | v2.0.0 预发布问题集中跟踪（已关闭） |
| 4 | [#3549](https://github.com/agentscope-ai/QwenPaw/issues/3549) | 7 | Armbian RK3318 上 `FunctionCallOutput call_id` 校验错误（已关闭） |
| 5 | [#3437](https://github.com/agentscope-ai/QwenPaw/issues/3437) | 6 | 希望支持 Kimi Code API（已关闭） |
| 6 | [#5951](https://github.com/agentscope-ai/QwenPaw/issues/5951) | 5 🆕 | 桌面壳沙箱递归爆炸，内存 20GB（**OPEN，紧急**） |

**诉求分析**：
- **稳定性诉求强烈**：桌面端、Console 前端、Armbian 嵌入式三类环境均出现崩溃类问题，反映 v2.0 在跨平台兼容性上仍欠打磨。
- **迁移诉求集中**：v2.0.0 GA 当天即出现"求升级指南"（[#5948](https://github.com/agentscope-ai/QwenPaw/issues/5948)）与"v2.0 终于发布"庆祝帖（[#5945](https://github.com/agentscope-ai/QwenPaw/issues/5945)），社区处于观望与尝鲜并存的状态。
- **生态扩展需求**：Kimi Code API、LaTeX 渲染（[#5453](https://github.com/agentscope-ai/QwenPaw/issues/5453)）、会话分组导入导出（[#5903](https://github.com/agentscope-ai/QwenPaw/issues/5903)）等长尾需求持续累积。

---

## 5. Bug 与稳定性

按严重程度排列：

| 严重度 | Issue | 描述 | 是否有 Fix PR |
|---|---|---|---|
| 🔴 P0 | [#5951](https://github.com/agentscope-ai/QwenPaw/issues/5951) | 桌面壳沙箱 `icacls` 超时静默吞掉 → pwsh 递归爆炸 + 20GB 内存，无法关闭 | ⚠️ 暂无；建议关注 [#5931](https://github.com/agentscope-ai/QwenPaw/pull/5931)（受限 token 的 Windows 沙箱） |
| 🔴 P0 | [#5947](https://github.com/agentscope-ai/QwenPaw/issues/5947) | v2.0.0 MCP 子工具"允许/拒绝"策略失效，agent 仍可调用 | ✅ [#5949](https://github.com/agentscope-ai/QwenPaw/pull/5949) 已 OPEN |
| 🟠 P1 | [#5950](https://github.com/agentscope-ai/QwenPaw/issues/5950) | 中文记忆文件 embedding 报 400（按字符数截断而非 token 数） | ❌ 无 |
| 🟠 P1 | [#5952](https://github.com/agentscope-ai/QwenPaw/issues/5952) | Auto-memory 后台任务 `No module named 'agentscope.tool._builtin._scripts'` | ❌ 无 |
| 🟠 P1 | [#5946](https://github.com/agentscope-ai/QwenPaw/issues/5946) | 工具输出截断提示让 agent 误以为内容已被驱逐，触发无效 `recall_history` | ✅ [#5953](https://github.com/agentscope-ai/QwenPaw/pull/5953) 已 OPEN |
| 🟠 P1 | [#5856](https://github.com/agentscope-ai/QwenPaw/issues/5856) | 上下文压缩过程中 `tool_call` 结构丢失 → 400 错误/消息数错位 | ❌ 无 |
| 🟠 P1 | [#5910](https://github.com/agentscope-ai/QwenPaw/issues/5910) | Auto Memory Search 在 OpenAI Responses API 上生成畸形 function_call → Cloudflare 502（已关闭） | ❌ 无（已关闭但根因未明） |
| 🟡 P2 | [#5918](https://github.com/agentscope-ai/QwenPaw/issues/5918) | `/mission` 方式触发 `prd.json` 格式错误循环（缺少 `userStories`） | ❌ 无 |
| 🟡 P2 | [#5954](https://github.com/agentscope-ai/QwenPaw/issues/5954) | 升级 2.0 后 `Failed to get agent: [Errno 21] Is a directory: '.mcp'` | ❌ 无 |
| 🟡 P2 | [#5906](https://github.com/agentscope-ai/QwenPaw/issues/5906) | 防重复功能误触发 Doom loop（已关闭） | — |
| 🟡 P2 | [#5896](https://github.com/agentscope-ai/QwenPaw/issues/5896) | 迭代次数限制计次错位，新消息触顶（已关闭） | — |

**整体观察**：v2.0.0 GA 当天即新增 6+ 个 P0/P1 Issue，主要集中在 **MCP 权限、桌面沙箱、Auto Memory、上下文压缩** 四个新架构相关模块。建议维护者在 v2.0.1 立即跟进。

---

## 6. 功能请求与路线图信号

| 需求 | 关联 Issue | 已存在/可能实现 PR | 优先级判断 |
|---|---|---|---|
| 会话分组 + 导入/导出 | [#5903](https://github.com/agentscope-ai/QwenPaw/issues/5903) | 设计方案已立项 [#5943](https://github.com/agentscope-ai/QwenPaw/issues/5943)（nolanchic） | 🟢 高（设计已就绪） |
| 主题/皮肤模块 | [#2291](https://github.com/agentscope-ai/QwenPaw/issues/2291) → [#5909](https://github.com/agentscope-ai/QwenPaw/issues/5909) | 设计提案已立项（nolanchic，P0） | 🟢 高（设计已就绪） |
| LaTeX/KaTeX 渲染 | [#5453](https://github.com/agentscope-ai/QwenPaw/issues/5453) | 无 | 🟡 中 |
| Kimi Code API 支持 | [#3437](https://github.com/agentscope-ai/QwenPaw/issues/3437) | 无 | 🟡 中 |
| 多 agent 任务移交与会话反馈 | [#3623](https://github.com/agentscope-ai/QwenPaw/issues/3623) | 无 | 🟡 中 |
| 顶栏隐藏 | [#3571](https://github.com/agentscope-ai/QwenPaw/issues/3571) | 无 | 🟢 低（UI 小修） |
| 定时任务执行记录/参数编辑 | [#3569](https://github.com

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报
**日期：2026-07-11**

---

## 1. 今日速览

ZeroClaw 今日继续保持高强度迭代节奏：过去 24 小时内 Issues 净增 17 条、PR 净增 46 条，无新版本发布但有大量 v0.8.3 里程碑相关提交涌入。社区关注度集中在 **Telegram 通道稳定性**（多图消息、命令注册上限、文档错误）、**agent 运行时的稳定性回归**（`skill-review` fork 导致的 SIGSEGV、Gemini `thought_signature` 丢失、流式叙述重复）以及 **gateway 架构演进**（OpenAI Chat Completions 兼容、WebSocket/ACP 协议合并 RFC）。整体而言，项目处于 v0.8.3 release 周期，合并/关闭节奏（4 条/24h）与新提交流入基本匹配，**健康度良好但 P1 级稳定性问题需要在下一窗口优先消化**。

---

## 2. 版本发布

**今日无新版本发布。** 近期主要工作在 v0.8.3 tracker（#8073、#8363）中积累，等待关键 PR 合入后打 tag。

---

## 3. 项目进展

过去 24 小时共 4 条 PR 被合并或关闭（具体清单未在数据流中展开），但从同期关闭的两条 Issue 可以侧面印证进展：

- **#8397 [已关闭]** —— `cron` 任务 `uses_memory` 标志从 TOML 暴露到 CLI / `cron_add` / `cron_update` 工具的特性请求被关闭，伴随 [#8825](https://github.com/zeroclaw-labs/zeroclaw/pull/8825)（Telegram 文档扩展）等文档类合入，**v0.8.3 的 cron UX 改进基本落地**。
- **#8677 [已关闭]** —— Web gateway 添加 `uses_memory` 复选框的需求关闭，意味着 [#8905](https://github.com/zeroclaw-labs/zeroclaw/pull/8905)（per-agent in-flight prompt counter）所代表的 web dashboard 增强正在持续推进。

整体项目向前推进的方向集中在三块：**gateway 的 OpenAI 协议兼容**（[#8486](https://github.com/zeroclaw-labs/zeroclaw/pull/8486)，XL）、**插件/WASM 主机能力扩展**（[#8923](https://github.com/zeroclaw-labs/zeroclaw/pull/8923)、[#8949](https://github.com/zeroclaw-labs/zeroclaw/pull/8949)）以及 **多架构容器镜像**（[#8954](https://github.com/zeroclaw-labs/zeroclaw/pull/8954) Alpine/musl via cargo-zigbuild）。

---

## 4. 社区热点

按评论数排序的活跃讨论：

| 排名 | Issue / PR | 标题 | 评论 | 👍 |
|---|---|---|---|---|
| 1 | [#5514](https://github.com/zeroclaw-labs/zeroclaw/issues/5514) | Telegram 多图消息被作为多次请求处理 | 6 | 0 |
| 2 | [#8654](https://github.com/zeroclaw-labs/zeroclaw/issues/8654) | skill-review fork 在 `skills/review.rs:159` 越界切片导致 SIGSEGV | 3 | 0 |
| 3 | [#8798](https://github.com/zeroclaw-labs/zeroclaw/issues/8798) | RFC：将 `/ws/chat` 与 `/acp` 合并为单一协议 | 2 | 0 |
| 3 | [#6563](https://github.com/zeroclaw-labs/zeroclaw/issues/6563) | ComfyUI / Comfy Cloud 作为共享媒体 provider | 2 | 0 |
| 3 | [#8397](https://github.com/zeroclaw-labs/zeroclaw/issues/8397) | 在 CLI 和 cron 工具中暴露 `uses_memory` 标志 | 2 | 0 |

**诉求分析**：
- **#5514** 暴露了 Telegram 通道下多媒体消息处理与 agent turn 模型的语义鸿沟，是真实用户工作流（图像理解）受影响的可观察 Bug。
- **#8798** 是少有的、来自维护者视角的架构 RFC，意图将两条并行 WebSocket 收敛到统一协议，反映项目正在为外部客户端（[#8958](https://github.com/zeroclaw-labs/zeroclaw/issues/8958) 中提到的 Thunderbolt 等）做规范化准备。
- **#6563** 反映了创作者/营销场景对 **图像与视频生成 provider 抽象** 的真实需求，是 ZeroClaw 走向"工具型 agent"的明确信号。

---

## 5. Bug 与稳定性

按严重程度排序：

| 严重度 | Issue | 标题 | 状态 | 是否有修复 PR |
|---|---|---|---|---|
| **S1**（workflow blocked） | [#8934](https://github.com/zeroclaw-labs/zeroclaw/issues/8934) | Gemini function calls 失败，因 `thought_signature` 在 assistant history 中丢失 | OPEN | ❌ |
| **S3 → S2**（panic / SIGSEGV） | [#8654](https://github.com/zeroclaw-labs/zeroclaw/issues/8654) | `skill-review` fork 越界切片触发 SIGSEGV（139） | OPEN（in-progress） | ✅ [#8680](https://github.com/zeroclaw-labs/zeroclaw/pull/8680) |
| **S2**（degraded） | [#8810](https://github.com/zeroclaw-labs/zeroclaw/issues/8810) | Telegram 文档示例错误 | OPEN（in-progress） | ✅ [#8825](https://github.com/zeroclaw-labs/zeroclaw/pull/8825) |
| **S2** | [#8944](https://github.com/zeroclaw-labs/zeroclaw/issues/8944) | ZeroCode transcript 鼠标复制阻塞词级选择 | OPEN | ❌ |
| **S2** | [#8945](https://github.com/zeroclaw-labs/zeroclaw/issues/8945) | ZeroCode 输入框阻塞 macOS 文本替换 | OPEN | ❌ |
| **S2** | [#8936](https://github.com/zeroclaw-labs/zeroclaw/issues/8936) | `loop_detector::hash_value` 在每次 tool call 深拷贝整个 args JSON | OPEN | ❌ |
| **S2** | [#8929](https://github.com/zeroclaw-labs/zeroclaw/issues/8929) | 流式叙述在最终显示文本被 trim 时重复 | OPEN | ❌ |
| **S2** | [#8952](https://github.com/zeroclaw-labs/zeroclaw/issues/8952) | turn 文本首尾空白导致流式 pre-tool narration 重复 | OPEN | ❌ |
| **S3** | [#5514](https://github.com/zeroclaw-labs/zeroclaw/issues/5514) | Telegram 多图被当多次请求 | OPEN | ❌ |
| **S3** | [#8950](https://github.com/zeroclaw-labs/zeroclaw/issues/8950) | Telegram `setMyCommands` 因命令数 >100 被拒 | OPEN | ❌ |

**重点关注**：
- **#8934（Gemini thought_signature）** 是当日唯一 S1 级问题，会让启用 Gemini function calling 的工作流**完全无法进行**。需维护者优先 backport 到 v0.8.3。
- **#8654** 已有针对性 fix PR [#8680](https://github.com/zeroclaw-labs/zeroclaw/pull/8680)（P1、size:XS），路径清晰，预期可快速合入。

---

## 6. 功能请求与路线图信号

结合已有的 PR，判断下个版本大概率纳入的功能：

| Issue | 关联 PR | 状态 | 落入下一版本可能性 |
|---|---|---|---|
| [#6563](https://github.com/zeroclaw-labs/zeroclaw/issues/6563) ComfyUI / Comfy Cloud media provider | 暂无主实现 | 早期讨论 | ⏳ 0.8.x 之后 |
| [#8933](https://github.com/zeroclaw-labs/zeroclaw/issues/8933) OTel `gen_ai.conversation.id` 跨 turn 会话关联 | 暂无 | RFC 阶段 | ⏳ 0.9 |
| [#8958](https://github.com/zeroclaw-labs/zeroclaw/issues/8958) ACP `?agent=` query param（多 agent 端点） | 暂无 | 新提 | ⏳ 0.8.x |
| [#8798](https://github.com/zeroclaw-labs/zeroclaw/issues/8798) 合并 `/ws/chat` 与 `/acp` 协议 | 暂无（RFC 性质） | 架构级 | ⏳ 0.9+ |
| **#8486 (PR)** OpenAI Chat Completions endpoint | 自实现 | OPEN，size:XL | ✅ **v0.8.3 强候选** |
| **#8173 (PR)** Web dashboard 一键升级 + 自动重启 | 自实现 | OPEN，size:L | ✅ **v0.8.3 强候选** |
| **#8954 (PR)** Alpine/musl 多架构镜像 | 自实现 | OPEN | ✅ v0.8.3 候选 |
| **#8905 (PR)** Web dashboard per-agent in-flight 计数器 | 自实现 | OPEN | ✅ v0.8.3 候选 |
| **#8139 (PR)** channel session TTL | 自实现 | OPEN | ✅ v0.8.3 候选 |
| **#8923 / #8949 (PRs)** 插件宿主出站 TCP + webhook GET 验证 | 自实现 | OPEN | ✅ 近期 |

`v0.8.3` 两大 tracker（[#8073](https://github.com/zeroclaw-labs/zeroclaw/issues/8073)、[#8363](https://github.com/zeroclaw-labs/zeroclaw/issues/8363)）正在被多条 PR 喂养，预计 v0.8.3 将显著强化 gateway 与 web dashboard 体验。

---

## 7. 用户反馈摘要

从评论与上下文提炼：

- **真实痛点：Telegram 通道体验劣化**（[#5514](https://github.com/zeroclaw-labs/zeroclaw/issues/5514)、[#8950](https://github.com/zeroclaw-labs/zeroclaw/issues/8950)、[#8810](https://github.com/zeroclaw-labs/zeroclaw/issues/8810)）—— 用户既遇到多图消息触发多次 LLM 调用，又遇到 `setMyCommands` 在开启大量 tools/skills/builtins 后超出 BotFather 100 条上限，**文档示例还出现命令不存在的错误**。三条 Issue 形成完整负反馈链。
- **桌面端 UX 痛点**（[#8944](https://github.com/zeroclaw-labs/zeroclaw/issues/8944)、[#8945](https://github.com/zeroclaw-labs/zeroclaw/issues/8945)）—— macOS 用户在 ZeroCode TUI 中**既无法正常使用系统文本替换，也无法进行词级拖选复制**。这类问题对开发者工作流影响高频。
- **稳定性带来的信任损耗**（[#8654](https://github.com/zeroclaw-labs/zeroclaw/issues/8654)、[#8934](https://github.com/zeroclaw-labs/zeroclaw/issues/8934)）—— 后台 fork panic 让 daemon 整体 SIGSEGV 退出（`panic = abort`），对生产部署是严重事件；同时 Gemini function call 因 history 字段丢失而彻底失败，反映跨 provider 适配的脆弱性。
- **生态接入的正面信号**（[#8958](https://github.com/zeroclaw-labs/zeroclaw/issues/8958)）—— 社区已实际将 ZeroClaw ACP 与 **Mozilla Thunderbird 项目下的 Thunderbolt 客户端**联调，外部消费者正在形成。
- **创作者场景需求**（[#6563](https://github.com/zeroclaw-labs/zeroclaw/issues/6563)）—— 用户希望 ComfyUI 不只是 LinkedIn 图片生成器，而是为未来 `gen_video` 工具铺设统一 provider 抽象。

---

## 8. 待处理积压

以下 Issue 创建较早但仍 OPEN，且与当前活跃工作强相关，建议维护者重点跟进：

| Issue | 创建日期 | 标题 | 当前状态 |
|---|---|---|---|
| [#5514](https://github.com/zeroclaw-labs/zeroclaw/issues/5514) | 2026-04-08 | Telegram 多图请求被多次追加 | OPEN，p2，已 accepted，**3 个月未关闭** |
| [#6563](https://github.com/zeroclaw-labs/zeroclaw/issues/6563) | 2026-05-10 | ComfyUI / Comfy Cloud 共享媒体 provider | OPEN，p2，**近 2 个月无主实现** |
| [#8397](https://github.com/zeroclaw-labs/zeroclaw/issues/8397) | 2026-06-27 | cron `uses_memory` 暴露（已关闭，但相关 UI 工作 [#8677](https://github.com/zeroclaw-labs/zeroclaw/issues/8677) 才同日关闭） | — |
| [#5514](https://github.com/zeroclaw-labs/zeroclaw/issues/5514) 之外的长期无人回复 | 需进一步审计 | — | — |

**特别提醒**：
- **#5514** 是当日评论数最多（6 条）的 Issue，但 `status:accepted` 已挂 3 个月、无任何关联 PR，建议指派 owner。
- **#6563** 是当前最具产品想象力的功能请求（通向视频生成），但缺实现牵头人，存在被遗忘风险。
- 多条今日新开 Issue（#8929、#8934、#8944、#8945、#8950、#8952）尚无 `status:accepted` 或 `needs-maintainer-review` 标签，可能在 48h 内被自动 no-stale。

---

**整体结论**：ZeroClaw 处于 v0.8.3 release 前的"功能 + 修复并进"窗口，PR 流量充沛、tracker 运转正常；但 **S1 级的 Gemini 兼容性 Bug** 和 **跨多 Issue 的 Telegram 体验回归链** 是短期内需要维护者集中处理的两个最大风险点。

</details>

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*