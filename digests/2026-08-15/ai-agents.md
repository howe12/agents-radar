# OpenClaw 生态日报 2026-08-15

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-08-15 00:52 UTC

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

**日期：2026-08-15**
**仓库：** [github.com/openclaw/openclaw](https://github.com/openclaw/openclaw)

---

## 一、今日速览

OpenClaw 今日进入**高度活跃的稳定性修复期**：过去 24 小时共发生 988 条 Issues/PR 更新（500/500），但**仅 96 条 PR 合并/关闭**、12 条 Issue 关闭，**无新版本发布**。积压的待合并 PR 高达 404 条，平均每条 PR 仅获 0 评论互动，表明多数 PR 仍处于"等待维护者审核"状态。从 TOP Issue 内容看，OpenClaw 当前正集中处理 **Gateway 内存泄漏、消息丢失、Bug 回归**等生产环境稳定性问题，`clawsweeper:needs-maintainer-review`、`clawsweeper:needs-live-repro` 标签高频出现——说明社区已提交大量可信复现材料，但 **fix-PR 供给侧严重不足**，维护者审查节奏成为当前主要瓶颈。

---

## 二、版本发布

**今日无新版本发布。** 当前最新可见版本仍为社区 Issue 中频繁引用的 `2026.7.1` ~ `2026.7.2-beta.7`，多个 7 月报告的"内存泄漏""Cron 静默失败"等 P0/P1 Bug 尚未在本次日报覆盖的合并窗口中修复。

---

## 三、项目进展

今日 **96 条 PR 合并/关闭**中（占 PR 更新总量约 19%），以下为对项目健康度贡献最大的已关闭项：

| PR | 标题 | 影响 | 评级 |
|---|---|---|---|
| [#116489](https://github.com/openclaw/openclaw/pull/116489) | **feat(security): 安装策略警告需操作员确认** | 安全边界：外部 `security.installPolicy` 现可返回 `warn`，CLI/UI 安装可疑插件前需操作员对 target name 进行确认 | 🐚 platinum hermit，P2 |
| [#123826](https://github.com/openclaw/openclaw/pull/123826) | **fix(status): 多 Agent 诊断对 owner 保持只读** | 修复 `openclaw status` / `channels list` 在多 agent 名册下抛 `AgentSelectionRequiredError` 的体验阻塞 | 维护者级 |
| [#123869](https://github.com/openclaw/openclaw/pull/123869) | **fix(gateway): 高负载下 node worker 输出一致性** | 修复 paired node worker 在 launch capacity 抖动下误标 reconciliation 失败；同时修复排队聊天 turn 提前误报 `terminated` | 🧂 unranked krab，P1 |
| [#123813](https://github.com/openclaw/openclaw/pull/123813) | **fix(ui): 页面活动指示器与会话行一致** | 修正页面行状态点位置与会话行语义不一致问题 | 🦐 gold shrimp，P3 |

**整体进度评估：** 项目在"安全边界""Gateway 可用性""UI 一致性"三条线上有所推进，但 404 条待合并 PR、零版本发布的组合意味着修复速度仍明显落后于问题上报速度，预计维护者团队将在下一窗口集中通过 batch merge 释放积压。

---

## 四、社区热点

**TOP 3 今日讨论焦点（按评论数）：**

1. **[#121058](https://github.com/openclaw/openclaw/issues/121058) — 静默回复失败再次复发（94 评论，P0 候选）**
   *作者：sloptop-the-terrible*
   此前 #116277 关闭后，该故障模式的监控 cron 仍持续记录新发生案例。成为今日当之无愧的最热议题，体现用户对"消息丢失 → 无任何错误信号"这类 silent failure 的强烈不满。

2. **[#7707](https://github.com/openclaw/openclaw/issues/7707) — Memory Trust Tagging by Source（51 评论）**
   *作者：LumenLantern*
   自 2026-02 创建至今已逾半年，建议按来源（用户指令/网页抓取/三方技能）对 memory 打信任标签以防御 memory poisoning。已被 8 项 `clawsweeper` 标签标注，但**仍无 fix-PR**，是典型的"方向正确、长期未动"的 RFC 类讨论。

3. **[#42475](https://github.com/openclaw/openclaw/issues/42475) — Gateway 级每 Agent 成本预算（25 评论）**
   *作者：hkochar*
   用户希望在 Gateway 层强制执行 per-agent daily/monthly 上限，避免"失控烧钱"。

**热点背后的诉求：** 排名前三议题集中反映 OpenClaw 用户三大痛点——**消息可靠性**、**安全/可信上下文**、**成本可控性**。三者均与"生产可用"直接相关，远高于 UI 美化类反馈。

---

## 五、Bug 与稳定性

### 🔴 P0（严重，崩溃/数据丢失风险）

| Issue | 标题 | 是否有 fix-PR |
|---|---|---|
| [#91588](https://github.com/openclaw/openclaw/issues/91588) | **Gateway 内存泄漏：RSS 350MB → 15.5GB 触发 OOM** | ❌ 关联 PR 未明，今日未推进 |
| [#119270](https://github.com/openclaw/openclaw/issues/119270) | **file tools 剥离前导 `@` 致写入/删除错误文件** | ❌ 无 |
| [#48920](https://github.com/openclaw/openclaw/issues/48920) | **Live Docs 领先于 release 版本（`IsolatedSessions` 文档缺失）** | ❌ 无 |

### 🟠 P1（高，影响消息/会话状态）

| Issue | 标题 | 备注 |
|---|---|---|
| [#91009](https://github.com/openclaw/openclaw/issues/91009) | Codex PreToolUse 钩子衍生 CPU-bound 子进程阻塞 RPC | 已关联 `clawsweeper:linked-pr-open` |
| [#48003](https://github.com/openclaw/openclaw/issues/48003) | Steer 模式无法在主会话轮内注入消息 | 根因已定位到 commit `9889c6da5` |
| [#121953](https://github.com/openclaw/openclaw/issues/121953) | **Cron agent 在 DeepSeek 上卡死**（`[cron:...]` 前缀被降权） | 关联 PR open |
| [#120563](https://github.com/openclaw/openclaw/issues/120563) | Ollama/自定义 provider 不发送历史，每轮定长上下文 | 严重损害长会话体验 |
| [#87109](https://github.com/openclaw/openclaw/issues/87109) | Gateway heap 空闲状态增长至 1073MB+，cron 静默失败 | 与 #91588 同源 |
| [#86012](https://github.com/openclaw/openclaw/issues/86012) | LINE 频道 reply token 过期致消息**静默丢失** | 同类 silent failure |
| [#84662](https://github.com/openclaw/openclaw/issues/84662) | Codex app-server 每轮注入 runtime context，触发 `response.create` 输入膨胀 | 关联 PR open |
| [#86119](https://github.com/openclaw/openclaw/issues/86119) | 子 agent/cron embedded 运行后遗留 `node server.js` 孤儿进程 | 内存泄漏同源 |
| [#51049](https://github.com/openclaw/openclaw/issues/51049) | WhatsApp 入站消息在 k3s 嵌套容器中完全收不到 | 出站正常，路由可疑 |
| [#51049/#50093](https://github.com/openclaw/openclaw/issues/50093) | WhatsApp 重连后 missed-messages backfill 缺失 | P2 |
| [#123273](https://github.com/openclaw/openclaw/issues/123273) | 命名 agent 无法处理图片附件 | `failed to hydrate structured image attachment(s) for CLI input` |

**稳定性宏观观察：** 本周 P1 议题高频集中在 **(1)Gateway 内存**(2)channel reconnect 丢消息**(3)Provider 兼容（DeepSeek/Ollama/Codex）三条线**。其中**消息丢失 / silent failure** 占绝对多数，与用户对 OpenClaw 作为家庭/商业助手的可靠性预期形成显著落差。

---

## 六、功能请求与路线图信号

下表汇总了今日互动量最高、最有可能进入下一版本的 feature/enhancement 议题，并对照已有 PR 判断落地概率：

| Issue | 标题 | 呼声 | 路线图判断 |
|---|---|---|---|
| [#7707](https://github.com/openclaw/openclaw/issues/7707) | Memory Trust Tagging by Source | 51 评论 | 方向高度契合 SEC 战略，🟡 概率中等 |
| [#42475](https://github.com/openclaw/openclaw/issues/42475) | Per-agent 成本预算（网关级） | 25 评论，1 👍 | 已有对话链，🟢 较有希望 |
| [#6757](https://github.com/openclaw/openclaw/issues/6757) | Agent 自触发 context compaction（self-compact） | 8 评论 | 需求清晰，🟢 可能纳入 |
| [#115001](https://github.com/openclaw/openclaw/issues/115001) | Hybrid memory 搜索 FTS 回退 spurious 1.0 分 | 8 评论 | 关联 PR open，技术接近就绪，🟢 高概率随下个 patch 修复 |
| [#54373](https://github.com/openclaw/openclaw/issues/54373) | Context Provenance 元数据（RFC） | 8 评论 | 与 #7707 强协同，🟢 一同进入路线图可能性大 |
| [#13219](https://github.com/openclaw/openclaw/issues/13219) | Per-model 使用日志 | 8 评论 | 🟡 |
| [#73537](https://github.com/openclaw/openclaw/issues/73537) | 为 release 加 production-readiness 标签 | 8 评论，2 👍 | 治理类，🟢 易于一次性引入 |
| [#71142](https://github.com/openclaw/openclaw/issues/71142) | Control UI 上传大小可配置（当前硬编码 5MB） | 8 评论 | 简单 UX 痛点，🟢 高概率 |
| [#75947](https://github.com/openclaw/openclaw/issues/75947) | UI 可用性改造 | 8 评论，2 👍 | 但 [PR #123566/#123682/#123586 等](https://github.com/openclaw/openclaw/pulls?q=is%3Apr+author%3Avyctorbrzezowski) 已开工，🟢 |

**UI 集中式重写信号强烈：** vyctorbrzezowitz 在 8 月 14-15 日集中提交 [#123562](https://github.com/openclaw/openclaw/pull/123562)、[#123566](https://github.com/openclaw/openclaw/pull/123566)、[#123586](https://github.com/openclaw/openclaw/pull/123586)、[#123594](https://github.com/openclaw/openclaw/pull/123594)、[#123603](https://github.com/openclaw/openclaw/pull/123603)、[#123682](https://github.com/openclaw/openclaw/pull/123682)、[#123874](https://github.com/openclaw/openclaw/pull/123874) 共 7 个 XL 级 Sidebar/会话卡片统一化 PR，可视为本周期内 **UI 重构路线图的一次集中亮相**。

---

## 七、用户反馈摘要

从高评论 Issue 中提炼的真实用户原声切片：

- **可靠性创伤（占反馈主流）：**"messages were silently lost"、"no error thrown"、"成功完成但仅最后一条发出"等措辞反复出现于 #121058、#121953、#92186、#86012、#115001。**用户核心痛点不是功能缺失，而是 OpenClaw 在发生故障时"不告诉运营者"。**

- **企业/家庭依赖度加深：**#73537 中"OpenClaw 已经融入我们的家庭和工作流（家居控制、定时任务、Telegram 集成）"体现了产品已突破工具阶段进入生活基础设施；[#7707](https://github.com/openclaw/openclaw/issues/7707) 中"防御 memory poisoning 攻击"、[#56693](https://github.com/openclaw/openclaw/issues/56693) 中"ChatGPT 多 workspace 失效账户"反映出**安全/合规维度已被生产用户认真对待**。

- **模型生态压力：** DeepSeek、Ollama、Codex、Anthropic 各 provider 各自存在 P1 卡点（#121953、#120563、#91009、#84662、#88079），用户对**模型中立性**的期望较高，而 OpenClaw 当前对头部 provider 兼容性仍有显著缺口。

- **UI 用得起的用户：** #75947 评论中"The UI is hard to navigate"、侧栏分散、功能隐藏等描述集中化推进下预计下个 release 释出明显改进。

- **正向反馈：** #73537 开头"Thank you for OpenClaw"、[#123276](https://github.com/openclaw/openclaw/pull/123276) 等 PR 中"folder group defaults"等改进收到积极响应。社区整体态度**信任未失，但耐心正在快速消耗**。

---

## 八、待处理积压

下列高价值/高优先级议题在仓库中长期未被有效响应，建议维护者团队本周内重点 review：

| 编号 | 创建日期 | 标题 | 等待时长 | 风险 |
|---|---|---|---|---|
| [#7707](https://github.com/openclaw/openclaw/issues/7707) | 2026-02-03 | Memory Trust Tagging by Source | **6 个月** | 安全/记忆可信度，仍在积压 |
| [#6757](https://github.com/openclaw/openclaw/issues/6757) | 2026-02-02 | Agent 触发 self-compact | **6 个月** | 高频需求，长期 token 失控 |
| [#10687](https://github.com/openclaw/openclaw/issues/10687) | 2026-02-06 | OpenRouter 动态模型发现 | **6 个月** | 模型发现静态，新模型上市慢 |
| [#13219](https://github.com/openclaw/openclaw/issues/13219) | 2026-02-10 | Per-model 用量日志 | **6 个月** | 成本透明度 |
| [#54373](https://github.com/openclaw/openclaw/issues/54373) | 2026-03-25 | Context Provenance（RFC） | 近 5 个月 | 与 #7707 互锁 |
| [#50900](https://github.com/openclaw/openclaw/issues/50900) | 2026-03-20 | Per-pattern session 保留规则 | 近 5 个月 | 留存策略粗糙 |
| [#50900 ~ #115001](https://github.com/openclaw/openclaw/issues/115001) | — | 多达 **10+ 条 `clawsweeper:no-new-fix-pr` 标签** 项目 | — | 维护者

---

## 横向生态对比

# 个人 AI 助手与自主智能体开源生态横向对比分析报告
**报告日期：2026-08-15 | 数据范围：过去 24 小时**

---

## 一、生态全景

2026 年 8 月中旬，个人 AI 助手 / 自主智能体开源生态呈现**"高活跃、强分层、新版本窗口密"**的整体态势：13 个被监测项目中，**仅 LobsterAI 完成 1 个正式版本发布（2026.8.14）**，其余 12 个项目均处于"待发版"状态，提示**生态整体正处在 8 月末的发版前沉淀窗口**。从活跃度看，**OpenClaw、IronClaw、ZeroClaw、CoPaw** 处于头部梯队（日均 Issue/PR 更新 25 条以上），**NanoBot、Hermes Agent、LobsterAI** 处于次级活跃梯队，**Moltis、NullClaw、NanoClaw、PicoClaw** 则呈现"低活动但有持续 PR 提交"的中长尾状态，**TinyClaw、ZeptoClaw 完全静默**。共同关注点高度集中在 **silent failure 治理、Provider 多模型兼容、Memory 安全/可信、Windows 桌面端稳定性、MCP/Plugin 生态扩展、WebUI 体验打磨** 六条主线。

---

## 二、各项目活跃度对比

| 项目 | Issues（活跃/关闭） | PRs（活跃/合并） | 新版本 | 当日净增量 | 健康度评估 |
|------|------------------|----------------|--------|----------|----------|
| **OpenClaw**（核心参照） | 500 / 12 | 500 / 96 | ❌ | 108 项推进 | 🟡 **高活跃/高积压**（404 待合并 PR 积压、维护者审查瓶颈） |
| **IronClaw** | 25 / ~9 | 46 / 23 | ❌ | ~32 项推进 | 🟢 **健康大版本过渡期**（v1.2.0 刚闭环，v1.3.0 全力推进） |
| **ZeroClaw** | 30 / 1 | 50 / 2 | ❌ | 3 项推进 | 🟡 **RFC 收束期**（v0.8.5 冻结，合并率低但 RFC 矩阵完善） |
| **CoPaw** | 12 / 38 | 41 / 15 | ❌ | 53 项推进 | 🟢 **高强度冲刺**（76% Issue 关闭率） |
| **LobsterAI** | 2 / 0 | 27 / 22 | ✅ **2026.8.14** | 22 项推进 | 🟢 **唯一发版**（v4pro 主线已合入） |
| **Hermes Agent** | 50 / 2 | 50 / 16 | ❌ | 18 项推进 | 🟡 **架构治理推进中**（God-file 拆分史诗完结） |
| **NanoBot** | 3 / 0 | 22 / 6 | ❌ | 6 项推进 | 🟢 **功能完善期**（WebUI + 稳定性双线） |
| **PicoClaw** | 3 / 2 | 9 / 0（5 stale 关） | ❌ | 0 项实质推进 | 🟠 **积压风险**（stale 关闭而非合并） |
| **NanoClaw** | 2 / 0 | 11 / 3（皆草稿） | ❌ | ~0.5 项实质 | 🟠 **社区失声**（Issue 评论全 0） |
| **NullClaw** | 0 / 0 | 1 / 1 | ❌ | 1 项推进 | 🟡 **平稳偏静默** |
| **Moltis** | 0 / 0 | 2 / 0 | ❌ | 0 项推进 | 🟠 **审阅停滞**（2 PR 待 review） |
| **TinyClaw** | 0 / 0 | 0 / 0 | ❌ | 0 | 🔴 **无活动** |
| **ZeptoClaw** | 0 / 0 | 0 / 0 | ❌ | 0 | 🔴 **无活动** |

**数据小结：** 当日 13 项目共记录 **Issue/PR 更新 1542+ 条，合并/关闭 209 条**，整体合并率约 **13.6%**，反映"上报速度持续高于修复速度"是当前生态的系统性特征。

---

## 三、OpenClaw 在生态中的定位

### 优势对比

| 维度 | OpenClaw | 生态对标 |
|------|----------|---------|
| **社区规模** | 988 日更新（最大） | IronClaw ~71 / ZeroClaw ~80 / Hermes ~100 |
| **议题覆盖广度** | 涉及 Gateway、Channel、Provider、UI、Security 全栈 | NanoBot 偏 Python 体验、IronClaw 偏企业内嵌、LobsterAI 偏 cowork |
| **PR 流入** | 500/日，404 待合并 | ZeroClaw 50/日，Hermes 50/日 |
| **议题深度** | 半年以上未决议题（#7707、#6757、#10687）显示思考深度 | ZeroClaw 同级别 RFC 矩阵（#6971、#7141、#7155） |

### 与同类项目的差异

- **vs. IronClaw**：IronClaw 走"企业 SaaS + 严格治理"路径，已完成 v1.2.0 发版闭环，#6879 自动化大工程系统化推进；OpenClaw 仍是"产品/工程双轨+开源"模式，v1.x 节奏未明。
- **vs. ZeroClaw**：ZeroClaw 走"RFC 收敛 → 实施"重型工程治理路线（13 评论的决策队列 #8692），核心圈作者收敛度高（@NiuBlibing、@singlerider、@Audacity88），适合关注架构演化；OpenClaw 议题广度更宽但维护者瓶颈更明显。
- **vs. Hermes Agent**：Hermes 已完成"20/20 god-file 拆分"史诗级重构，架构治理收官；OpenClaw 当前以稳定性修复为主，尚未进入同等规模的重构治理。
- **vs. NanoBot**：NanoBot 规模小但 WebUI 与稳定性并进，Issue 关闭率 100%（当日报告的两条 P1 Bug 均当日修复），**单点响应速度优于 OpenClaw**。

**定位小结：** OpenClaw 仍是**生态中规模最大、覆盖面最广的"通用个人 AI 助手底座"**，但维护者审查节奏（404 待合并 / 0 评论互动）成为其相对**最大的可优化空间**。

---

## 四、共同关注的技术方向

### 1. Silent Failure / 消息可靠性（**最关键共性**）
- **OpenClaw** #91588（Gateway OOM）、#121058（静默回复 94 评论）、#86012（LINE token 过期丢消息）、#121953（Cron 卡死）
- **NanoBot** #5391（Anthropic 流空闲超时误作总超时）
- **Hermes Agent** #83683（Windows 桌面 reap 不重启）、#85825（CRLF 致 MEMORY.md 清空）
- **PicoClaw** #3269（MCP 失败 Agent 循环挂起）
- **ZeroClaw** #9421（不完整终止响应被报告为成功）

**共识诉求：** 在不阻断用户体验的前提下，让运营者**知道发生了故障**，而不仅仅是"成功完成但仅最后一条发出"。

### 2. Memory 安全 / Context Provenance
- **OpenClaw** #7707（Memory Trust Tagging by Source，51 评论，6 个月未动）
- **ZeroClaw** #6971（安全姿态与凭据边界 RFC）
- **LobsterAI** #1154（commandSafety 零测试覆盖）
- **ZeroClaw** #7155（高危 shell 命令 per-execution 确认层，20 评论）

**共识诉求：** 防御 memory poisoning 攻击 + shell 命令分级策略（allow/ask/deny 几成事实标准）。

### 3. Provider 多模型兼容
- **OpenClaw** DeepSeek（#121953）、Ollama（#120563）、Codex（#91009、#84662）
- **Hermes Agent** DeepSeek V4 思考链不进 SSE（#30449，85 天）
- **CoPaw** MiniMax Provider `check_connection()` 404（#2303）
- **LobsterAI** Gemini `/v1` URL 拼接错误（#1153，4.5 个月）
- **ZeroClaw** OpenAI 兼容层 (#8603，19 评论) 与 Anthropic OAuth 过渡（#9420）

**共识诉求：** **"模型中立性"是生态级硬需求**——从 OpenAI/Anthropic/DeepSeek/Gemini/Ollama/Codex 全栈覆盖。

### 4. Windows 桌面端稳定性（**最弱共性**）
- **Hermes Agent** 集中爆发：#83683、#86223、#85825、#85834、#79625、#68876（连续 2 次更新后 desktop 不可用）
- **NanoBot** #5382（Windows heartbeat 文件锁）
- **PicoClaw** #3269（多平台相关）
- **ZeroClaw** #7462（Windows 74 个测试失败，6 月 10 日至今无 fix PR）

**共识诉求：** **跨平台质量保障系统性欠账**，CI 普遍偏向 Linux，Windows 用户长期处于"二等公民"状态。

### 5. WebUI 体验集中式重写
- **OpenClaw** vyctorbrzezowski 8/14-15 集中提交 7 个 XL 级 Sidebar/会话卡片统一化 PR
- **NanoBot** #5367（本地化）、#5389（拖拽）、#5356（配置流程）、#5340（粒子动效）
- **LobsterAI** #2495（默认字号）、#2494/#2492（图标升级）
- **CoPaw** 多个 UI/UX PR

**共识诉求：** 侧栏统一、会话卡片语义一致、拖拽组织、协作提及。

### 6. MCP / Plugin 生态扩展
- **PicoClaw** MCP 失败循环（#3269 + #3337 修复 PR）
- **CoPaw** MCP 工具 "Tool not found" 升级 2.0 后回归（#6405、#6958）
- **ZeroClaw** Plugin egress 三件套（#9137/#9126/#9580）
- **IronClaw** Plugable memory over MCP（#7664/#7661）
- **LobsterAI** Skills 体验刷新（#2498）

**共识诉求：** MCP 已成**生态基础设施级协议**，但**容错契约、Provider 接入、向后兼容**仍是反复出现的摩擦点。

### 7. 成本/预算控制
- **OpenClaw** #42475（Per-agent 成本预算 25 评论）
- **ZeroClaw** #9996（action 预算原子化记账）
- **IronClaw** #7183（per-user LLM model selection）
- **LobsterAI** Team Edition 配额流程（#2498）

**共识诉求：** "AI 失控烧钱" 已从工程笑话变为生产事故源点，**网关级与用户级双重控制**成为标准期待。

---

## 五、差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 技术架构关键差异 |
|------|---------|---------|----------------|
| **OpenClaw** | 通用个人/家庭/商业助手底座 | 全场景，需自定义 | 高度模块化（Gateway/Channel/Provider 拆解清晰），多语言支持 |
| **IronClaw** | 企业内嵌 + dogfooding 重度 | 企业团队 / Champions | 结构化执行规约、unbound-turns 模型、ACP 循环、Reborn profile |
| **ZeroClaw** | 架构演化 + 安全边界收敛 | 架构师 / 高级开发者 | RFC 治理体系、Plugin egress 三件套、Action 预算原子化 |
| **CoPaw** | Provider 体系重构 + Computer Use | Provider 多样化需求者 | AgentScope 2.0 集成、Whisper、OneBot、动态技能加载 |
| **LobsterAI** | 多人协作 / cowork + v4pro 商业化 | 中文企业 / 团队 | Team Edition 账号 + 配额、Sidecar 集成、UI 精致打磨 |
| **Hermes Agent** | 多租户 + Skills 生态 + Discord Kanban | SaaS 化部署 / 多平台运营 | 多租户 Memory 隔离、106 项社媒技能、Discord 原生编排 |
| **NanoBot** | WebUI 体验精致化 + 跨平台 | 个人用户 / 体验敏感型 | TypeScript/OpenTUI 终端、Pyright 严格化、Anthropic 流修复 |
| **PicoClaw** | 极轻量化（<10MB RAM、$10 硬件） | 嵌入式 / IoT / 边缘 | Bun runtime 优化、SeaHorse 摘要、命名空间并发 |
| **NanoClaw** | 安装体验 + 供应链安全 | 关注 first-launch 体验者 | cosign 镜像签名、setup 闭环、Bun 预构建目标 |
| **NullClaw** | 部署灵活性 | 只读 workspace / 容器化 | 可配置 SQLite 路径、向后兼容硬编码默认 |
| **Moltis** | 跨平台凭证隔离 | Slack / Gmail / CalDAV 用户 | provider-scoped 信任、原子快照、channel-neutral 卡片 |

**关键差异点：**
- **轻量化**是 PicoClaw 的核心护城河（<10MB RAM、$10 硬件），其他项目暂无对标。
- **企业 SaaS 化**是 Hermes Agent（多租户）、LobsterAI（Team Edition）、IronClaw（per-user LLM selection）的共同方向。
- **架构治理**的成熟度从高

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目日报
**2026-08-15**

---

## 一、今日速览

NanoBot 今日呈现**高频迭代但无版本发布**的特征：过去 24 小时内共产生 3 条 Issue 更新与 22 条 PR 更新，其中 14 个 PR 仍待合并、8 个 PR 已关闭。社区讨论主要围绕 **WebUI 体验打磨**（侧边栏、拖拽、本地化、协作）以及 **Python 后端稳定性修复**（Anthropic 流超时、Session 持久化、Windows 文件锁）两大方向展开。两条关键 Bug（#5391、#5378）均已在当日通过对应 PR 闭环，修复响应速度快。整体而言，项目处于**活跃的功能完善期**，代码健康度维护与产品体验优化并行推进。

---

## 二、版本发布

无新版本发布。当前仓库在 8 月 14 日密集合并了多个 WebUI 与 Provider 相关变更，预计下一次发版将汇集上述修复与新功能。

---

## 三、项目进展

今日共 **6 个 PR 完成生命周期**（合并或关闭），主要推进方向如下：

| PR | 类型 | 说明 |
|---|---|---|
| [#5392](https://github.com/HKUDS/nanobot/pull/5392) | Bug Fix | 修复 Anthropic 流式空闲超时被错误地作为总超时的问题，使长任务不再被中断（修复 [#5391](https://github.com/HKUDS/nanobot/issues/5391)） |
| [#5393](https://github.com/HKUDS/nanobot/pull/5393) | WebUI Enhancement | 侧边栏层级与衔接线、Tab 平铺化、文件夹分组等 UI 改进（拆分自 #5358，仅保留 UI 相关文件） |
| [#5395](https://github.com/HKUDS/nanobot/pull/5395) | WebUI Enhancement | 统一分组术语与本地化、支持对话拖入分组、简化删除确认样式 |
| [#5018](https://github.com/HKUDS/nanobot/pull/5018) | Skills Feature | 支持显式 context 加载，使 `ContextBuilder.skill_names` 真正生效 |
| [#4689](https://github.com/HKUDS/nanobot/pull/4689) | Provider Feature（标记 invalid 关闭） | OAuth 状态可见性与过期预警 |
| [#5390](https://github.com/HKUDS/nanobot/pull/5390) | Chore/Feature | Agent/知识图谱相关提交（已关闭） |

**评估**：项目当日在「稳定性」与「WebUI 体验」两条战线均取得实质进展，#5392 是当日最关键的修复，直接影响生产环境中长任务执行的可靠性。

---

## 四、社区热点

按评论与互动密度看，最受关注的议题集中在以下方向：

1. **[#5161 refactor: narrow file-level Pyright suppressions](https://github.com/HKUDS/nanobot/issues/5161)** — 已开放约半月，关联前置 PR #5158 启用 BasedPyright `strict`，需要清理 31 处文件级 `pyright:` 抑制指令。今日 [#5396](https://github.com/HKUDS/nanobot/pull/5396) 提供了对应修复，待合并。
   - **诉求**：在严格类型检查背景下，逐步收敛散落的类型抑制，提升代码长期可维护性。

2. **[#5391 NANOBOT_STREAM_IDLE_TIMEOUT_S 误作总超时](https://github.com/HKUDS/nanobot/issues/5391)** — 当日报告、当日修复、当日关闭。
   - **诉求**：Anthropic Provider 的 90 秒流空闲超时不应同时充当总超时，导致长生成被强行切断。

3. **[#5358 feat(webui): add session collaboration via mentions](https://github.com/HKUDS/nanobot/pull/5358)** — 多人协作提及功能，社区关注度高，被标记 conflict，已拆分为 [#5393](https://github.com/HKUDS/nanobot/pull/5393) 等子 PR。
   - **诉求**：为持久化 WebUI Session 提供稳定的 `@name`，在编辑器中通过 @ 选择对等 Session。

---

## 五、Bug 与稳定性

按严重程度排列：

### 🔴 P0（最高严重）
- **[#5271 fix(session): prevent stale background task saves from overwriting session data](https://github.com/HKUDS/nanobot/pull/5271)** — 防止 `/new` 后过期后台任务覆盖新会话数据。涉及会话序列化、compaction 生命周期与失效会话拒绝保存。**已有修复 PR，待合并。**

### 🟠 P2（高严重）
- **[#5391 NANOBOT_STREAM_IDLE_TIMEOUT_S 误作总超时](https://github.com/HKUDS/nanobot/issues/5391)** — ✅ 已由 [#5392](https://github.com/HKUDS/nanobot/pull/5392) 修复并关闭。
- **[#5382 fix(session): retry os.replace() on transient Windows PermissionError](https://github.com/HKUDS/nanobot/pull/5382)** — Windows 平台 heartbeat 任务偶发 `[WinError 5]` 致整个 gateway 崩溃。**已有修复 PR，待合并。**
- **[#5309 fix(skills): allow marketplace skills to shadow builtins](https://github.com/HKUDS/nanobot/pull/5309)** — Marketplace 错误地将内置技能标记为已安装，导致安装按钮失效。**已有修复 PR，待合并。**
- **[#5371 fix(webui): hide assistant actions until turn end](https://github.com/HKUDS/nanobot/pull/5371)** — WebUI 在 turn 结束前过早暴露 copy/fork 操作，可能导致状态不一致。**已有修复 PR，待合并。**

### ✅ 已闭环
- **[#5378 file-cap archive failure mutates the session before persistence](https://github.com/HKUDS/nanobot/issues/5378)** — 已关闭，`Session.enforce_file_cap()` 的副作用顺序问题已得到处理。

---

## 六、功能请求与路线图信号

今日合并与新开的 PR 共同揭示了 NanoBot 的近期路线图走向：

| 方向 | 代表 PR | 成熟度 |
|---|---|---|
| **WebUI 体验升级** | [#5367 本地化](https://github.com/HKUDS/nanobot/pull/5367)、[#5389 拖拽组织](https://github.com/HKUDS/nanobot/pull/5389)、[#5356 配置流程](https://github.com/HKUDS/nanobot/pull/5356)、[#5340 粒子动效背景](https://github.com/HKUDS/nanobot/pull/5340) | 多 PR 并行，多数处于待合并 |
| **Session 协作模型** | [#5358 mentions 协作](https://github.com/HKUDS/nanobot/pull/5358) | 概念先行，已拆分 UI 子模块先行落地 |
| **Skills 体系完善** | [#5018 显式加载](https://github.com/HKUDS/nanobot/pull/5018) ✅、[#4145 Weather Skill 示例](https://github.com/HKUDS/nanobot/pull/4145) | 已合并 + 示例补全 |
| **CLI 终端 UI 重构** | [#4329 native TypeScript/OpenTUI 客户端](https://github.com/HKUDS/nanobot/pull/4329) | 大型重构，长期演进中 |
| **Provider 现代化** | [#5179 MCP SDK v2 迁移](https://github.com/HKUDS/nanobot/pull/5179) | 待合并，保持向后兼容 |
| **类型严格化** | [#5396 收敛 Pyright 抑制](https://github.com/HKUDS/nanobot/pull/5396) | 修复 #5161，待合并 |

**信号**：项目正从「功能可用」向「体验精致」过渡，WebUI 是当前投入最大的领域；同时后端稳定性（Session、流超时、跨平台兼容）也获得显著关注。

---

## 七、用户反馈摘要

从今日 Issues 与 PR 讨论中可提炼以下真实痛点：

- **🔴 长任务被异常中断**（[#5391](https://github.com/HKUDS/nanobot/issues/5391)）：用户在 Anthropic 流式生成场景下，发现空闲超时被错误复用为总超时，导致长时间但活跃的生成被强制切断，反映出对「流控制语义」清晰性的强烈需求。
- **🔴 WebUI 状态过早暴露**（[#5371](https://github.com/HKUDS/nanobot/pull/5371)）：在 Agent turn 尚未结束时，copy/fork 操作已经可见，容易触发不一致状态；用户期望 UI 与 Agent 生命周期严格同步。
- **🟠 Windows 平台稳定性**（[#5382](https://github.com/HKUDS/nanobot/pull/5382)）：heartbeat cron 在 Windows 上偶发文件锁问题直接拖垮 gateway，表明 Windows 兼容性仍是高优先级关注点。
- **🟡 内置技能被 Marketplace 误判**（[#5309](https://github.com/HKUDS/nanobot/pull/5309)）：内置 github 等技能让「安装」按钮失效，用户无法正确安装工作区同名副本，反映安装逻辑的边界判断需要更精细化。
- **🟢 协作能力诉求**（[#5358](https://github.com/HKUDS/nanobot/pull/5358)）：用户期望在 WebUI 中通过 @ 提及跨会话协作，stable server-owned session name 成为基础设施级需求。

---

## 八、待处理积压

以下 Issue/PR 已开放较长时间，建议维护者优先 review：

| 编号 | 类型 | 开放天数（约） | 说明 |
|---|---|---|---|
| [#4145](https://github.com/HKUDS/nanobot/pull/4145) | Feature (PR) | ~75 天 | Weather Skill 示例与测试，迟迟未合入，阻碍 skills 文档体系完善 |
| [#4329](https://github.com/HKUDS/nanobot/pull/4329) | Enhancement (PR) | ~63 天 | 原生 TypeScript/OpenTUI 终端 UI 重构，体量大，需维护者集中 review |
| [#5161](https://github.com/HKUDS/nanobot/issues/5161) | Refactor (Issue) | ~17 天 | 31 处 Pyright 文件级抑制需收敛，已有修复 PR [#5396](https://github.com/HKUDS/nanobot/pull/5396) 等待合并 |
| [#5152](https://github.com/HKUDS/nanobot/pull/5152) | Regression Fix (PR) | ~18 天 | subagent 部分完成结果标记，影响 WebUI 与外部通道历史渲染 |
| [#5179](https://github.com/HKUDS/nanobot/pull/5179) | Provider Refactor (PR) | ~16 天 | MCP SDK v2 迁移与向后兼容，影响 Provider 整体架构 |
| [#5309](https://github.com/HKUDS/nanobot/pull/5309) | Bug Fix (PR) | ~6 天 | Marketplace 安装逻辑回归，影响用户上手体验 |
| [#5367](https://github.com/HKUDS/nanobot/pull/5367)、[#5356](https://github.com/HKUDS/nanobot/pull/5356)、[#5358](https://github.com/HKUDS/nanobot/pull/5358)、[#5389](https://github.com/HKUDS/nanobot/pull/5389)、[#5340](https://github.com/HKUDS/nanobot/pull/5340) | WebUI (PRs) | 1–3 天 | 多个 WebUI 新功能互相存在 conflict 标记，建议维护者协调合并顺序 |

**维护者关注建议**：
1. 优先合并 **#5396** 与 **#5271**，前者是低风险类型清理，后者是 P0 会话数据保护；
2. 协调 **WebUI PR 集群**（#5356 / #5358 / #5367 / #5389 / #5340）的合并顺序，避免长期处于 conflict 状态；
3. 评估 **#4329**（TS 终端 UI）与 **#4145**（Weather 示例）的去留决策，避免长期挂起消耗 reviewer 注意力。

---

*报告生成时间：2026-08-15 | 数据来源：HKUDS/nanobot GitHub Issues & Pull Requests*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目日报
**日期：2026-08-15**
**数据周期：过去 24 小时**

---

## 1. 今日速览

Hermes Agent 今日继续保持高活跃度，过去 24 小时共触发 **50 条 Issue 更新**（48 新开/活跃、2 已关闭）和 **50 条 PR 更新**（34 待合并、16 已合并/关闭），无新版本发布。最显著的进展是 **`All Gods Must Die` 重构史诗（#78647）正式收官**，20/20 god-file 已全部完成拆分，标志项目架构治理告一段落。当日新报告问题主要集中在 **Windows 桌面端回归**（连续 2 次更新导致后端崩溃）、**多租户隔离** 与 **External Memory Provider 行为违反文档契约** 等方向；社区侧持续推进 **Discord Omniscience**（API v10 对齐）与 **Skills 生态**（数据工程/社媒 106 项技能）两条主线。整体健康度评估：**活跃度高、架构治理成果显著，但 Windows 桌面端 P1 回归风险需要立即关注。**

---

## 2. 版本发布

**今日无新版本发布。** 上一版本为 Hermes **v0.20.0**（2026-08-03 / 2026.8.3），目前仍在该版本下接收 Windows 端的多项 P1 级回归报告。

---

## 3. 项目进展

今日**已合并/关闭 16 个 PR**，多数为 macOS 测试平台适配与桌面端稳定性修复，主要进展如下：

### 🔒 安全加固
- **#71262**（OPEN，安全，comp/cli）— `fangliquanflq`：`hermes doctor` 拒绝 OpenSSH 目标选项走私（CWE-88），防止以 `-` 开头的 `ProxyCommand` 主机名在本地被执行。
- **#71735**（OPEN，security/dashboard）— Dashboard 自定义端点与 `OPENAI_BASE_URL` 校验新增 scheme/cloud-metadata floor，堵住 SSRF 探测 link-local 元数据接口的路径。

### 🐛 关键 Bug 修复
- **#86563**（OPEN，`PRATHAMESH75`）— Gateway 重启在外来 `XDG_RUNTIME_DIR` 下不再崩溃，闭环对应 #86558。
- 多个 **henrynguyeninfo1** 的 macOS/Windows 测试修复 PR（#67739 / #67710 / #67708 / #67703 / #67700）今日被关闭归档。
- **#65840 / #65839 / #65818 / #65803 / #65800 / #86329** 已关闭：覆盖桌面端大图复制、ESC 中断响应、ACP 流式丢包、后台 review 工具限流、Gateway `AGENTS.md` 加载回退、upstream 403 错误识别等。

### 🏗 架构里程碑
- **#78647 [CLOSED] — "All Gods Must Die: 20/20 killed"** 史诗正式 COMPLETE。所有 god-file 拆分完成，新政策明确："**all god files are sharded, never reverted**"。这是项目层面一次重大的可维护性胜利。

### 🚀 新功能 PR
- **#86560**（`glitchbunny0`）— 为 z.ai coding-plan 订阅者新增独立 `zai-coding-plan` provider profile，免去手动改 `GLM_BASE_URL`。
- **#86562**（`cafecky08957`）— Skills Phase 0+1.3：新增 data-engineering / cloud-native / security / social-media / mobile / meta 六个类别，106 项社媒技能 + SKILL.md 模板 + skill registry CI。
- **#86495**（`sushiHex`）— Discord-first Kanban 编排生命周期，per-platform toolsets 可配置。
- **#68248 / #86322 / #86369** — Skills curator 的 `needs_review` 信号、A2A per-peer headers、`SendStreamingMessage` 客户端实现。

---

## 4. 社区热点

| 排名 | Issue | 评论数 | 概要 |
|------|-------|-------|------|
| 🥇 | [#78647](https://github.com/NousResearch/hermes-agent/issues/78647) | **76** | God-file 拆分史诗 COMPLETE |
| 🥈 | [#34352](https://github.com/NousResearch/hermes-agent/issues/34352) | 31 | 多租户 Hermes：内存操作绕过 hook 系统 |
| 🥈 | [#66616](https://github.com/NousResearch/hermes-agent/issues/66616) | 31 | Skills 索引看门狗：`degraded`，超 26h 阈值（实为 29.8h） |
| 4 | [#83683](https://github.com/NousResearch/hermes-agent/issues/83683) | 27 | Windows 桌面重启 reap gateway 不重启（微信/QQ 失声） |
| 5 | [#67798](https://github.com/NousResearch/hermes-agent/issues/67798) | 10 | 生命周期 hook 提升为运行时共享契约 |
| 5 | [#85622](https://github.com/NousResearch/hermes-agent/issues/85622) | 10 | External Memory Provider（mode both）违反"附加不替换"契约 |

**诉求分析**：
- **多租户 / 多上下文治理**：#34352 由 NimbleCoAI 提交，反映"production 上跑多租户 agent 已是常态"，需求集中在 hook 系统的内核级支持。
- **元数据新鲜度**：#66616 自动化 probe 反复触发 Skills Hub 索引降级（cron 6/18 UTC），建议把 cron 间隔与 limit 解耦或加入补扫。
- **桌面回归**：#83683 与 #86223 形成明显"最近两次更新 Windows 桌面客户端不可用"的关联信号，#86223 进一步将根因定位到 `WinError 32` 文件锁链。

---

## 5. Bug 与稳定性

### 🔴 P1（建议立即修复）
| Issue | 描述 | Fix PR | 平台 |
|-------|------|--------|------|
| [#83683](https://github.com/NousResearch/hermes-agent/issues/83683) | 桌面重启 reap gateway 后不重启，WeChat/QQ/Telegram 全静默（回归） | ❌ 未指派 | Windows |
| [#86223](https://github.com/NousResearch/hermes-agent/issues/86223) | 连续 2 次更新后桌面端后端退出码 1 + `WinError 32` 锁链 | ❌ 未指派 | Windows |
| [#85825](https://github.com/NousResearch/hermes-agent/issues/85825) **[CLOSED]** | `memory replace/remove` 在 Windows 上因 CRLF 把整个 MEMORY.md 覆盖为单条 | ❌ 待补 | Windows |

### 🟠 P2（重要）
| Issue | 描述 | Fix PR |
|-------|------|--------|
| [#30449](https://github.com/NousResearch/hermes-agent/issues/30449) | DeepSeek V4 后端的 `reasoning_content` / `reasoning_effort` 不进 SSE 流 | ❌ |
| [#84969](https://github.com/NousResearch/hermes-agent/issues/84969) | 持久化 Docker 复用忽略不可变配置漂移 | ❌ |
| [#85834](https://github.com/NousResearch/hermes-agent/issues/85834) | Desktop per-profile SSH 远程 → resume 路径缺 profile 路由 | ❌ |
| [#79625](https://github.com/NousResearch/hermes-agent/issues/79625) | Desktop 会话忽略 `checkpoints.enabled` | ❌ |
| [#86558](https://github.com/NousResearch/hermes-agent/issues/86558) | `hermes gateway restart` 在外来 `XDG_RUNTIME_DIR` 下裸抛 `PermissionError` | ✅ #86563 |
| [#86482](https://github.com/NousResearch/hermes-agent/issues/86482) | cron `create_execution` 失败 → job 永久卡在 running 集合 | ❌ |
| [#86483](https://github.com/NousResearch/hermes-agent/issues/86483) | Telegram topic 迁移在 `BEGIN IMMEDIATE` 里跑 `executescript`，隐式 COMMIT 破坏原子性 | ❌ |
| [#86510](https://github.com/NousResearch/hermes-agent/issues/86510) | `read_file` `total_lines` off-by-one（无尾换行） | ❌ |
| [#86513](https://github.com/NousResearch/hermes-agent/issues/86513) | `file_tools` 在远程/容器 backend 上对 host fs 做 stat | ❌ |

### 🟡 P3（常规）
- [#68876](https://github.com/NousResearch/hermes-agent/issues/68876) — Desktop 切换 provider/model 后菜单、composer pill、live request 不同步。

**观察**：Windows 桌面端连续两版本问题集中爆发（#83683、#86223、#85825、#85834、#79625、#68876），建议维护者在下一窗口优先做 Windows desktop 端的端到端回归。

---

## 6. 功能请求与路线图信号

### 已落地（PR 已提交）
| PR | 概要 |
|----|------|
| [#86560](https://github.com/NousResearch/hermes-agent/pull/86560) | `zai-coding-plan` 独立 provider profile |
| [#86562](https://github.com/NousResearch/hermes-agent/pull/86562) | 106 项社媒技能 + 6 个新技能类别 |
| [#86495](https://github.com/NousResearch/hermes-agent/pull/86495) | Discord Kanban Orchestration |
| [#86369](https://github.com/NousResearch/hermes-agent/pull/86369) | A2A `SendStreamingMessage` 客户端 |
| [#86322](https://github.com/NousResearch/hermes-agent/pull/86322) | A2A per-peer headers + `Hermes-A2A/1.0` UA |

### 进入下一版本概率较高
- **Discord Omniscience** 多个子任务已具备测试证据（#86535/#86536/#86537/#86538/#86539/#86549/#86521/#86498/#86500 全部 `tests/.../test_discord_*.py` 全绿），且 #79564 元 issue 已开 ≥10 天，预计 v0.20.x 增量版本即可集成。
- **Lifecycle hooks 共享运行时契约**（#67798）：与 #34352 多租户需求同源，hook 系统从 gateway-owned 升格为 runtime-owned 是共识方向。

### 仍处提案阶段
- **#86561** — 把已存在会话迁入 Projects（duplicate，待合并判定）。
- **#86509** — `agent._budget_grace_call` 死代码清理（duplicate）。

---

## 7. 用户反馈摘要

> 以下要点从 Issue 评论与 PR 摘要中提炼，不代表项目方立场。

- **"我们已在生产环境跑了几个月的多租户 agent 修复"** — #34352，作者 NimbleCoAI 强调 Memory 操作完全绕过 hook 系统，"如果不动核心就只能 fork"。这是 Hermes 走向商业/SaaS 化的关键信号。
- **"v0.20.0 桌面端每次重启都会杀掉 WeChat gateway"** — #83683，作者 zuowen7 明确指出这是 **回归**（之前版本正常）。同一用户群体在 #86223 进一步报告连续两次更新后 desktop 完全无法自启。
- **"MEMORY.md 在 Windows 上被静默清空"** — #85825，CRLF 换行差异导致 `memory replace/remove` 写出空文件，作者描述为"破坏性数据丢失"，已加 P0 标签。
- **"skills-index 又 degraded 了"** — #66616 持续 31 条评论，社区在争论 26h 阈值是否过紧，cron 6/18 UTC 间隔是否需要补一次 0 UTC 重建。
- **"DeepSeek V4 的思考链不到 SSE"** — #30449，影响 Open WebUI 等 OpenAI 兼容前端用户，`reasoning_effort` 也被静默丢弃。
- **正反馈**：Discord Omniscience 系列 PR 全部以"测试 +N passed"作为 Evidence，反映社区在推动"先测后合"文化。

---

## 8. 待处理积压

> 长期未实质推进、值得维护者主动跟进的项：

| Issue / PR | 标题 | 状态天数 | 备注 |
|------------|------|----------|------|
| [#34352](https://github.com/NousResearch/hermes-agent/issues/34352) | 多租户 Hermes | ~78 天 | 已带生产 PR 描述，需要架构级回应 |
| [#67798](https://github.com/NousResearch/hermes-agent/issues/67798) | Lifecycle hooks 共享契约 | ~26 天 | 与多租户需求耦合 |
| [#30449](https://github.com/NousResearch/hermes-agent/issues/30449) | DeepSeek 思考链不进 SSE | ~85 天 | 影响 OpenAI 兼容生态用户 |
| [#68876](https://github.com/NousResearch/hermes-agent/issues/68876) | Desktop 切换 provider 不同步 | ~25 天 | UX 级 P3，但累计报告多 |
| [#79625](https://github.com/NousResearch/hermes-agent/issues/79625) | Desktop 忽略 checkpoints.enabled | ~10 天 | 与 #68876 / #85834 同源问题簇 |
| [#71262](https://github.com/NousResearch/hermes-agent/pull/71262) | SSH ProxyCommand 防注入 | ~21 天 | 安全 PR 长期 OPEN |

**建议**：将 Windows Desktop 端问题簇（#83683 / #86223 / #85825 / #85834 / #79625 / #68876）合并为 **meta-issue**，并在 v0.20.x 或 v0.21.0 设立专门的 Windows regression 测试目标。

---

*报告生成基于 GitHub 数据快照，所有链接指向 `NousResearch/hermes-agent` 仓库。*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报
**日期：2026-08-15**
**项目：sipeed/picoclaw**

---

## 1. 今日速览

PicoClaw 项目今日呈现典型的"问题修复 + 积压清理"双线推进态势。整体活跃度中等偏低（Issues 3 条 / PRs 9 条），无新版本发布。最值得关注的进展是针对 **MCP 服务器连接失败导致 Agent 循环挂起**这一严重可用性 Bug，已由社区贡献者 kuzmichus 提交了对应的修复 PR（#3337）。此外，仓库维护者集中清理了一批长期 stale 的 PR 与 Issue（5 个 PR 与 2 个 Issue 在今日被关闭），项目整体健康度良好，但长期未响应的开放 PR（#3200、#3222）仍需关注。

---

## 2. 版本发布

⚠️ **今日无新版本发布。** 项目当前仍处于 nightly 版本迭代节奏，最近活跃提交的修复尚未形成新的 Release tag。建议关注下个版本对 MCP 失败处理、exec 工具超时处理以及 DingTalk 图片消息支持的整合情况。

---

## 3. 项目进展

今日最重要的实质性进展来自以下方面：

### 🐛 关键 Bug 修复推进
- **[PR #3337](https://github.com/sipeed/picoclaw/pull/3337) Fix/mcp failure hangs agent loop**（今日新建，OPEN）
  - 作者：kuzmichus
  - 直接修复 Issue [#3269](https://github.com/sipeed/picoclaw/issues/3269) 描述的严重问题：当 `ensureMCPInitialized` 返回错误（例如 MCP 服务器不可达）时，`AgentLoop.Run` 直接传播错误并退出，导致聊天界面完全停止响应。
  - 这是今日**唯一具有实质性代码层面新增**的 PR，对项目稳定性提升显著。

### 🧹 积压清理（Stale 关闭）
维护者集中关闭了 5 个 stale 状态的 PR 与 2 个 stale 状态的 Issue，体现出良好的仓库治理节奏：

- [PR #3303](https://github.com/sipeed/picoclaw/pull/3303) build(deps): bump actions/stale from 10 to 11（依赖升级，由 dependabot 自动关闭）
- [PR #3283](https://github.com/sipeed/picoclaw/pull/3283) fix(dingtalk): support picture/image message inbound（DingTalk 图片消息支持）
- [PR #3279](https://github.com/sipeed/picoclaw/pull/3279) fix(seahorse): prevent tool-call format leakage into LLM summaries
- [PR #3271](https://github.com/sipeed/picoclaw/pull/3271) chore(providers): update default model names to 2026-07 latest（更新 OpenAI/Anthropic 等 9 家厂商的默认模型名）
- [PR #3270](https://github.com/sipeed/picoclaw/pull/3270) feat: add DashScope TTS provider and WeChat audio file sending（新增阿里云 DashScope TTS 与微信音频支持）

> ⚠️ **注意**：上述 5 个 PR 均被标记为 `[stale]` 后被关闭，而非合并。这意味着社区贡献的多项实质功能（如 DingTalk 图片、DashScope TTS、exec 工具超时修复）**暂时未进入主干**，维护者后续需要评估是否重新打开或重新提交。

---

## 4. 社区热点

### 🔥 最高讨论热度 Issues

| 排名 | Issue | 标题 | 评论数 | 状态 |
|------|------|------|--------|------|
| 1 | [#3269](https://github.com/sipeed/picoclaw/issues/3269) | MCP server connection failure hangs agent loop | 5 | OPEN |
| 2 | [#3308](https://github.com/sipeed/picoclaw/issues/3308) | Code Review: Concurrency hazards in SeaHorse/Channel/Hooks | 2 | CLOSED (stale) |
| 3 | [#3307](https://github.com/sipeed/picoclaw/issues/3307) | Feature: session list/switch for Telegram | 2 | CLOSED (stale) |

### 背后诉求分析

- **#3269**（持续热门）：真实生产环境痛点——MCP 是 Picoclaw 重要的工具扩展机制，任何 MCP 服务器异常都会导致整个对话中断而非优雅降级，已收到 1 个 👍。
- **#3308**（已关闭）：资深用户对 SeaHorse、Channel Manager、Hooks 模块提出的 **并发安全与 goroutine 泄漏** 深度代码审查，被关闭为 stale，可能反映了维护者更倾向于逐项针对性修复而非整体重构。
- **#3307**（已关闭）：用户希望将 Web UI 已有的会话管理能力下放到 Telegram 等聊天通道，体现 **跨渠道体验一致性** 的需求，但该诉求暂未被认可。

---

## 5. Bug 与稳定性

### 🚨 严重程度排序

#### 🔴 P0 — 严重（已提交修复 PR，待合并）
- **[Issue #3269](https://github.com/sipeed/picoclaw/issues/3269)** — MCP 服务器连接失败导致 Agent 循环挂起
  - 影响范围：所有使用 MCP 工具扩展的用户
  - 现象：聊天界面完全失声，需手动重启
  - **修复状态**：✅ 已有对应 PR [#3337](https://github.com/sipeed/picoclaw/pull/3337)（今日新建，待 review）

#### 🟡 P1 — 中等（已有 PR 但被关闭为 stale，需关注）
- **[PR #3319](https://github.com/sipeed/picoclaw/pull/3319)** — `exec` 工具未遵守 per-run `timeout`，且 `background`/`pty` 布尔参数 schema 错误
  - 状态：OPEN (stale)，未合并
  - 这是 **回归性 Bug**，影响所有使用代码执行工具的用户

#### 🟢 P2 — 一般（已关闭，需重新评估）
- **[PR #3279](https://github.com/sipeed/picoclaw/pull/3279)** — SeaHorse 摘要中工具调用格式泄漏（已关闭为 stale）
- **[PR #3283](https://github.com/sipeed/picoclaw/pull/3283)** — DingTalk 渠道图片消息解析问题（已关闭为 stale）

> 📊 **稳定性信号**：项目整体对 bug 响应速度尚可（#3269 在 25 天内即出现修复 PR），但 stale 清理策略可能导致有价值的小修复合并滞后。

---

## 6. 功能请求与路线图信号

### 活跃功能请求

| 请求 | 链接 | 是否已有 PR | 纳入下一版本的概率评估 |
|------|------|------------|----------------------|
| Telegram/聊天渠道的会话列表与切换 | [Issue #3307](https://github.com/sipeed/picoclaw/issues/3307) | ❌ 无 | ⭐⭐（已被关闭为 stale，社区需求明显但优先级低） |
| DashScope TTS 与微信音频支持 | [PR #3270](https://github.com/sipeed/picoclaw/pull/3270) | ✅ 已有 PR | ⭐⭐⭐⭐（功能完整，关闭原因待确认） |
| 可配置默认模型 fallback chain | [PR #3200](https://github.com/sipeed/picoclaw/pull/3200) | ✅ 已有 PR | ⭐⭐⭐（长期 stale，需维护者重新评估） |
| DeltaChat 渠道重构（-200 行） | [PR #3222](https://github.com/sipeed/picoclaw/pull/3222) | ✅ 已有 PR | ⭐⭐⭐（重构型 PR，长期 stale） |
| 更新默认模型名（2026-07 最新版） | [PR #3271](https://github.com/sipeed/picoclaw/pull/3271) | ✅ 已有 PR | ⭐⭐⭐⭐⭐（高价值运维 PR，被关闭为 stale 较可惜） |

### 路线图信号
- 社区对 **多渠道一致性**（Telegram/Web UI 功能对齐）和 **模型供应商新鲜度**（默认模型 ID 同步）呼声较高。
- 中文生态集成（钉钉、微信、阿里云 DashScope）是自然增长方向，但目前贡献与合并节奏不匹配。

---

## 7. 用户反馈摘要

从 Issue 评论中提炼的真实用户痛点：

- **🔴 痛点 1：MCP 容错缺失**（Issue #3269）
  > "Picoclaw chat interface stopped replying to users entirely"  
  用户期望：当 MCP 服务器异常时，应当降级而非整体瘫痪。建议增加 MCP 健康检查与重试机制。

- **🟡 痛点 2：跨渠道体验割裂**（Issue #3307）
  > "The Web UI has a full session management system… However, there is no equivalent capability from Telegram."  
  用户期望：希望在 Telegram 渠道也能像 Web UI 一样管理会话。

- **🟢 痛点 3：执行工具参数定义错误**（PR #3319）
  > "tool schema declared `background` and `pty` as strings even though they are boolean options"  
  用户期望：工具 schema 与实际行为保持一致，避免误导 LLM。

- **👍 满意度信号**：项目能在 **$10 硬件、<10MB RAM** 上运行仍获得用户高度赞誉（Issue #3308 评论中明确肯定），社区对 PicoClaw 的轻量化定位高度认可。

---

## 8. 待处理积压

以下重要 Issue/PR 已长期未响应，建议维护者重点关注：

| 编号 | 类型 | 创建日期 | 等待天数（约） | 备注 |
|------|------|---------|--------------|------|
| [#3200](https://github.com/sipeed/picoclaw/pull/3200) | PR（OPEN, stale） | 2026-07-01 | ~45 天 | 可配置默认 fallback chain，高价值功能 |
| [#3222](https://github.com/sipeed/picoclaw/pull/3222) | PR（OPEN） | 2026-07-03 | ~43 天 | DeltaChat 渠道重构 -200 行，作者 trufae 为活跃贡献者 |
| [#3319](https://github.com/sipeed/picoclaw/pull/3319) | PR（OPEN, stale） | 2026-08-07 | ~8 天 | exec 工具超时回归 Bug |
| [#3337](https://github.com/sipeed/picoclaw/pull/3337) | PR（OPEN） | 2026-08-14 | 1 天 | **今日新建**，P0 修复，建议优先 review |

### 给维护者的提醒

1. **优先合并 #3337** —— 这是当前唯一未解决的严重 Bug 的修复。
2. **重新评估被 stale 关闭的 PR #3270、#3271** —— 这些是实质性的功能增强与运维更新，直接关闭而非合并可能影响贡献者积极性。
3. **明确 stale 策略** —— 目前多个有价值的 PR 在 stale 后被直接关闭而非合并，建议在关闭前给作者一次明确通知或重新评审的机会。

---

## 📈 项目健康度评分

| 维度 | 评分（5 分制） | 说明 |
|------|--------------|------|
| 活跃度 | ⭐⭐⭐ | Issues/PR 数量正常，无明显停滞 |
| Bug 响应 | ⭐⭐⭐⭐ | P0 Bug 25 天内有修复 PR |
| PR 合并率 | ⭐⭐ | 今日关闭/合并比为 5:0（stale 关闭为主），实际推进有限 |
| 社区互动 | ⭐⭐⭐ | 评论数较少，但讨论质量高 |
| 路线清晰度 | ⭐⭐⭐ | 依赖 nightly 迭代，无明确 Release 节奏 |

---

*报告生成时间：2026-08-15 | 数据来源：GitHub REST API*
*分析对象：[sipeed/picoclaw](https://github.com/sipeed/picoclaw)*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目日报

**报告日期**：2026-08-15
**数据范围**：过去 24 小时（基于 2026-08-14 数据）

---

## 1. 今日速览

NanoClaw 在过去 24 小时保持中等偏高活跃度，共触发 **2 条新 Issue** 与 **11 条 PR 变更**，但**无任何正式版本发布**。新开的两条 Issue 均指向安装/部署链路的实际可用性问题（Node 版本检测与镜像 CPU 兼容性），说明近期用户体验报告正在集中于首次启动阶段。PR 端出现了一波"小而集中"的修复提交（setup、scheduling、container-runtime、skills 文档），但**今日关闭的 3 条 PR 全部为签名审批器的"实弹测试"草稿，并非真实功能合入**，因此项目今日实际净增量仍以"待合并积压"为主。

---

## 2. 版本发布

⚠️ **本周期无新版本发布**，无需迁移操作。建议持续关注 `main` 分支与 CI 镜像构建状态。

---

## 3. 项目进展

今日无功能 PR 合并到主干。但有两类工作值得关注：

### ✅ 已关闭 PR（非合并，仅作测试/清理）

| PR | 作者 | 说明 |
|---|---|---|
| [#3243](https://github.com/nanocoai/nanoclaw/pull/3243) | gavrielc | `verify-agent-image`：修复"启用 auto-merge 不等于通过验证"的判定逻辑（避免草稿 PR 被自动合并） |
| [#3242](https://github.com/nanocoai/nanoclaw/pull/3242) | gavrielc | 签名审批器 live-fire 测试（草稿，将不合并关闭） |
| [#3244](https://github.com/nanocoai/nanoclaw/pull/3244) | gavrielc | 签名审批器 live-fire 第二轮验证（同上） |

**关键信号**：[#3243](https://github.com/nanocoai/nanoclaw/pull/3243) 是真实修复，已合并。核心团队正在完善镜像签名→独立 cosign 验证→自动审批的闭环安全流程，这是项目供应链可信化的重要一步。

### 🔄 推进中的 PR

- [#3249](https://github.com/nanocoai/nanoclaw/pull/3249) 紧随 [#3248](https://github.com/nanocoai/nanoclaw/issues/3248) 同步提交，setup 修复链路已具备合入条件。
- [#3247](https://github.com/nanocoai/nanoclaw/pull/3247) 与 [#3246](https://github.com/nanocoai/nanoclaw/pull/3246) 修复调度器与容器运行时跨平台问题。

**进度评估**：项目今日整体向前推进约 **0.5 个功能点**（供应链安全基础设施），但用户面修复尚未合入。

---

## 4. 社区热点

⚠️ **本期所有 Issue 的评论数均为 0**，社区讨论密度较低，无法从评论中直接提炼情绪。建议关注点赞数与新增量。

热度排序（基于"问题严重性 + 是否引发配套 PR"）：

1. **[#3245 Prebuilt agent image Bun binary SIGILL](https://github.com/nanocoai/nanoclaw/issues/3245)** — 影响所有非 AVX2 CPU 用户（Intel Tremont/Elkhart Lake Atom、Celeron J6413/N5105 等），属于镜像构建 target 选错导致首次安装即崩溃。
2. **[#3248 setup.sh Node 版本检测 bug](https://github.com/nanocoai/nanoclaw/issues/3248)** — 旧版 Node（major < 20）无法被 install-node.sh 重装，setup 直接卡死。
3. **Dial 频道集成系列** ([#3041](https://github.com/nanocoai/nanoclaw/pull/3041)、[#3050](https://github.com/nanocoai/nanoclaw/pull/3050)) — 社区对新增 SMS + AI 语音通话通道有期待，但 PR 仍未被维护者评审。

**诉求分析**：今日新开问题集中在"**首次安装体验**"，说明新用户上手路径仍有显著摩擦。

---

## 5. Bug 与稳定性

按严重程度排序：

| 等级 | Issue/PR | 描述 | 是否有 Fix PR |
|---|---|---|---|
| 🔴 **严重** | [#3245](https://github.com/nanocoai/nanoclaw/issues/3245) | 预构建镜像 Bun 二进制要求 AVX2，旧 Atom 平台直接 SIGILL | ❌ 暂无 |
| 🟠 **中高** | [#3248](https://github.com/nanocoai/nanoclaw/issues/3248) | setup.sh 在 Node 过旧时无法自动升级 | ✅ [#3249](https://github.com/nanocoai/nanoclaw/pull/3249) |
| 🟡 **中** | [#3247](https://github.com/nanocoai/nanoclaw/pull/3247) | 调度器遇到畸形 cron 字符串（min>max 环绕）每 tick 重复报错 | ✅ PR 已就绪 |
| 🟡 **中** | [#3246](https://github.com/nanocoai/nanoclaw/pull/3246) | Windows 容器孤儿清理因 POSIX 引号被 cmd.exe 吃掉而静默失效 | ✅ PR 已就绪 |
| 🟢 **低** | [#3230](https://github.com/nanocoai/nanoclaw/pull/3230) | 技能卸载文档仍指向已退役的 data/env 镜像 | ✅ PR 已就绪 |
| 🟠 **中高（历史）** | [#2427](https://github.com/nanocoai/nanoclaw/pull/2427) | 附件传递通用问题（2026-05 起未合并） | ✅ PR 已就绪但搁置 |
| 🟠 **中高（历史）** | [#2752](https://github.com/nanocoai/nanoclaw/pull/2752) | Discord 入站附件 URL 未被落到磁盘（2026-06 起未合并） | ✅ PR 已就绪但搁置 |

**重点关注**：[#3245](https://github.com/nanocoai/nanoclaw/issues/3245) 是首个**没有对应修复 PR** 的高严重度问题，建议核心团队优先处理。

---

## 6. 功能请求与路线图信号

- **Dial 频道（SMS + AI 语音通话）**：[#3041](https://github.com/nanocoai/nanoclaw/pull/3041) 提交 Dial 适配器，[#3050](https://github.com/nanocoai/nanoclaw/pull/3050) 将其接入 setup 向导。两 PR 形成完整 feature skill 闭环，**有望成为下个 minor 版本的核心功能**。
- **Discord 附件支持**：[#2752](https://github.com/nanocoai/nanoclaw/pull/2752) 与 [#2427](https://github.com/nanocoai/nanoclaw/pull/2427) 共同指向"通用入站附件落盘"能力，是社区多次诉求方向。

---

## 7. 用户反馈摘要

由于本期 Issues **评论数均为 0**，无法从用户发言中提炼情绪与场景。但从 PR 描述可以推断的痛点：

- **新用户首次启动崩溃**：[#3245](https://github.com/nanocoai/nanoclaw/issues/3245) 描述了在企业老旧硬件（Intel Atom Celeron 系列）上无法启动 NanoClaw 智能体。
- **升级路径不闭环**：[#3248](https://github.com/nanocoai/nanoclaw/issues/3248) 揭示当本机已存在过时 Node 时，setup 脚本既不能跳过也不能升级，只能报错退出。
- **平台差异**：[#3246](https://github.com/nanocoai/nanoclaw/pull/3246) 说明 Windows 用户长期被"静默失败"问题困扰，但未在 Issues 区显式抱怨，说明 Windows 用户活跃度本身就偏低。

**建议**：核心团队可主动在以上 Issue 公开征集复现信息以促进讨论。

---

## 8. 待处理积压

⚠️ 维护者需要重点关注的"沉睡"项：

| 编号 | 类型 | 创建日期 | 等待天数 | 标题 | 链接 |
|---|---|---|---|---|---|
| #2427 | PR | 2026-05-12 | **~95 天** | fix: attachment issues | [🔗](https://github.com/nanocoai/nanoclaw/pull/2427) |
| #2752 | PR | 2026-06-12 | **~64 天** | fix: stage inbound attachments (Discord) | [🔗](https://github.com/nanocoai/nanoclaw/pull/2752) |
| #3041 | PR | 2026-07-14 | **~32 天** | feat(channels): add Dial channel adapter | [🔗](https://github.com/nanocoai/nanoclaw/pull/3041) |
| #3050 | PR | 2026-07-14 | **~32 天** | feat(setup): add Dial to channel picker | [🔗](https://github.com/nanocoai/nanoclaw/pull/3050) |

**提醒**：[#2427](https://github.com/nanocoai/nanoclaw/pull/2427) 与 [#2752](https://github.com/nanocoai/nanoclaw/pull/2752) 均已具备合并条件但搁置近 2–3 个月，建议维护者明确处置（合并 / 关闭 / 指派 reviewer），否则会显著降低外部贡献者参与意愿。

---

### 📊 项目健康度速评

| 维度 | 评估 |
|---|---|
| 代码提交活跃度 | 🟢 高（11 PR 当日变更） |
| 新功能推进 | 🟡 中（PR 已就绪但未合并） |
| Bug 响应速度 | 🟢 高（Issue 当天即配套 PR） |
| 社区讨论活跃度 | 🔴 低（评论数为 0） |
| 长期积压管理 | 🔴 偏低（存在 90 天+ 未处理 PR） |
| 供应链/安全建设 | 🟢 高（[#3243](https://github.com/nanocoai/nanoclaw/pull/3243) 等核心团队持续投入） |

---

*报告由 AI 项目分析师自动生成，数据源：GitHub REST API。所有链接指向 `nanocoai/nanoclaw` 仓库。*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目日报

**报告日期**：2026-08-15
**数据范围**：过去 24 小时（截至 2026-08-15）
**仓库地址**：[nullclaw/nullclaw](https://github.com/nullclaw/nullclaw)

---

## 1. 今日速览

NullClaw 今日处于**低活跃度**状态。社区层面，Issues 通道完全静默，过去 24 小时内无新开、无活跃、无关闭的 Issue。代码层面仅有一条 PR 活动，且已关闭合并，整体推进有限。项目当日无新版本发布，健康度评估为**平稳但偏静默**。维护团队和贡献者需要关注社区互动恢复情况，以避免长期低活跃带来的反馈链路延迟。

---

## 2. 版本发布

今日**无新版本发布**。本节省略。

---

## 3. 项目进展

今日唯一动态为已关闭的 PR [#986](https://github.com/nullclaw/nullclaw/pull/986)（标题：*GEN-548: make SQLite memory database path configurable*，作者：[gently-whitesnow](https://github.com/gently-whitesnow)），相关进展如下：

- **新增可配置项 `memory.database_path`**：为基于 SQLite 的主记忆引擎引入配置项，使数据库路径不再硬编码。
- **向后兼容策略**：当该配置项为空时，仍使用原有默认路径 `<workspace>/memory.db`，确保存量部署不受影响。
- **路径解析逻辑**：相对路径基于 workspace 解析；绝对路径被支持，适配**只读 workspace**的部署场景（例如容器化或受限环境的部署）。
- **文档同步**：在官方文档中补充该配置项说明。

**整体评价**：该 PR 推进了项目的**部署灵活性**与**生产可用性**，特别对只读环境部署具有实质意义。属于基础设施层的渐进式改进，单日贡献量适中，项目整体向前迈出稳健一步。

---

## 4. 社区热点

今日 Issues 通道无任何活动，**暂无社区热点议题**。PR 方面仅有 [#986](https://github.com/nullclaw/nullclaw/pull/986) 一条，但因无评论、零点赞（👍: 0），讨论热度也偏低。建议维护者关注：

- 贡献者 `gently-whitesnow` 的配置项 PR 是否触达了社区中关于「记忆持久化部署」的真实诉求；
- 是否有用户对 SQLite 路径配置存在疑问，可主动在 PR 评论或 Discord/Discussion 中发起讨论。

---

## 5. Bug 与稳定性

今日**无 Bug 报告、无崩溃或回归问题**。本节省略。

> 提示：Issues 通道 24 小时静默虽不必然代表项目无问题，但低反馈率可能掩盖稳定性隐患，建议维护者结合 CI 运行结果与下游用户反馈综合判断。

---

## 6. 功能请求与路线图信号

虽然今日无显式功能请求，但 PR [#986](https://github.com/nullclaw/nullclaw/pull/986) 释放了一个明确的路线图信号：

- **可配置性深化**：社区贡献者正在推动将更多硬编码路径、环境依赖项转为可配置项。
- **生产部署导向**：只读 workspace 路径的兼容性显示，项目的演进重心之一是**企业/生产级部署场景**。
- **后续可能方向**（推测）：
  - 记忆后端的可选引擎（如 SQLite ↔ 其他嵌入式 KV 库）；
  - 更多子系统的路径/资源可配置化；
  - 配置项的 schema 校验与启动期错误提示。

这些方向若与维护者路线图一致，可考虑在下个版本中整合为「Configuration Hardening」专题。

---

## 7. 用户反馈摘要

今日**无新 Issue 评论可提炼**。从历史维度结合 PR #986 的提交动机可推测：

- **潜在使用场景**：嵌入式部署、容器化运行、只读文件系统环境（如边缘节点或 CI sandbox）。
- **潜在痛点**：此前 `<workspace>/memory.db` 硬编码路径在上述场景中会造成写入失败或部署耦合。
- **满意度信号**：PR 顺利合并且无反对评论，说明社区与维护者对「渐进式配置化」策略接受度较高。

---

## 8. 待处理积压

基于今日数据：

- **Issues 积压**：今日无新增，但历史 Issues 是否得到响应需要维护者自查（数据未提供历史 Issue 列表）。
- **PR 积压**：今日合并后无明显待合并 PR 积压（待合并: 0）。
- **风险提示**：
  1. Issues 通道 24h 静默可能意味着**用户报告渠道不畅**或**问题未被发现**，建议主动巡检。
  2. PR [#986](https://github.com/nullclaw/nullclaw/pull/986) 虽已关闭，但零评论状态可能意味着**缺少代码审查反馈循环**，建议回顾该 PR 的 Review 记录。
  3. 无新版本发布的情况下，PR #986 的合并需确认是否已纳入主干并随下一次发布对外提供，否则用户无法受益。

---

## 附录：数据明细

| 指标 | 数值 |
|------|------|
| Issues 新开/活跃 | 0 |
| Issues 已关闭 | 0 |
| PR 待合并 | 0 |
| PR 已合并/关闭 | 1 |
| 新版本发布 | 0 |
| 最高评论数 | 0（PR #986 无评论） |
| 最高点赞数 | 0（PR #986 👍 0） |

---

**报告生成时间**：2026-08-15
**健康度评级**：🟡 平稳偏静默（无异常，但活跃度偏低）
**建议关注**：社区互动恢复、PR Review 流程质量、下次发布节奏

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报
**日期：2026-08-15**
**数据周期：过去 24 小时**
**项目仓库：github.com/nearai/ironclaw**

---

## 1. 今日速览

IronClaw 过去 24 小时呈现典型的"大版本过渡期"特征：v1.2.0 已正式发布并回合并入主线（#7657 已关闭），同时团队集中精力推进 **v1.3.0 自动化重做大工程（#6879）**——围绕"结构化执行规约"和"无人值守确定性"密集拆解出 4 个子 issue 和 2 个 XL 级 PR。整体活跃度高位运行：25 个 issue 更新、46 个 PR 更新，关闭率分别为 36%（issue）和 50%（PR），健康度良好。当日无新版本发布，QA bug bash 持续进行中（多个 P2 级别的 UI/集成缺陷被同步修复并合入）。

---

## 2. 版本发布

**今日无新版本发布。** 

背景：v1.2.0 发布线于昨日（#7657）通过 `release/2026-08-11` 分支回合并入 `main`，#7663 正在前向移植 1.2 修复（线程索引投影修复、Windows 文件系统稳定性、运行时 curl 健康检查等）到当前主线，标记 1.2.0 包版本与 changelog。

---

## 3. 项目进展（今日合并/关闭的重要 PR）

### 🚢 已合并/关闭的关键 PR

| PR | 标题 | 意义 |
|---|---|---|
| [#7657](https://github.com/nearai/ironclaw/pull/7657) | `chore: merge the 1.2.0 release line back into main` (XL) | **v1.2.0 正式发布闭环**，将已验证的 release 分支回并主线，前向移植 1.0/1.1→1.2 状态保留迁移与契约覆盖 |
| [#7652](https://github.com/nearai/ironclaw/pull/7652) | `perf(stress): measure production DB write workloads` (XL) | 建立生产级 DB 写压力基线测量（10 个能力调用、11 次模型尝试、心跳与观察者检查点），为 v1.3.0 写优化提供数据依据 |
| [#7665](https://github.com/nearai/ironclaw/pull/7665) | `fix(auth): support origin-scoped hosted MCP OAuth` (L) | 接纳 MKT1 风格的 hosted MCP OAuth 形状（裸 origin 的 RFC 9728 resource），完善 DCR/token 交换链路 |
| [#7666](https://github.com/nearai/ironclaw/pull/7666) | `fix(extensions): tell the truth on cards and install results` (L) | 修复 #7660 卡片错误显示问题，扩展安装引导回归到 Web UI 链接步骤，并加入 provider 契约追踪回放诊断 |
| [#7668](https://github.com/nearai/ironclaw/pull/7668) | `fix(extensions): surface provider auth diagnostics` (XL) | 保留 GitHub 提供方错误信息与稳定码，避免运行时 401 被折叠为通用重新认证上下文 |
| [#7658](https://github.com/nearai/ironclaw/pull/7658) | `fix(telegram): recognize the 2FA gate on migrated DCs` (M) | 修复迁移 DC 上 2FA 账号的 QR 扫描体验，并明确登录码投递位置 |
| [#7655](https://github.com/nearai/ironclaw/pull/7655) | `fix(ci): re-pin slack/telegram integration coverage floors` (XS) | 根据 main 实际门槛重新钉死 slack/telegram 集成覆盖率基线 |
| [#7565](https://github.com/nearai/ironclaw/pull/7565) | `fix: missing i18n coverage across exposed WebUI routes` | 修复 Admin→Configuration 等暴露路由的 i18n 遗漏 |
| [#7569](https://github.com/nearai/ironclaw/pull/7569) | `feat: shared SearchField for common list filtering` | 引入共享 SearchField 组件，消除 Settings/Extensions/Sidebar 的重复实现 |
| [#7414](https://github.com/nearai/ironclaw/pull/7414) | `Epic: Dogfooding & QA bug fixing 08/10–08/16` | 本周 QA 集中攻坚 epic 关闭 |
| [#7520](https://github.com/nearai/ironclaw/pull/7520) | `Epic: retire superseded and unreachable WebUI frontend surfaces` | 清理已退役 v1/engine-v2 前端代码 |
| [#7532](https://github.com/nearai/ironclaw/pull/7532) | `feat: structured execution specs for reliable scheduled automations` (XL) | **v1.3.0 自动化大工程核心 PR 关闭**：为定时触发引入结构化执行规约，保留原始 prompt 路径 |
| [#7592](https://github.com/nearai/ironclaw/pull/7592) | `Tier 0: per-turn DB write measurement harness` | 写压力 epic 的 0 号任务，提供回归测试基线 |
| [#7183](https://github.com/nearai/ironclaw/pull/7183) | `feat: per-user LLM model selection` | 重要用户功能落地：打破模型选择仅管理员可控的限制 |
| [#6869](https://github.com/nearai/ironclaw/pull/6869) | `fix: generated DOCX files unreadable by Word` | 修复用户反馈的 docx 损坏问题（来自 Champions 周会 Davin Basi 报告） |
| [#7656](https://github.com/nearai/ironclaw/pull/7656) | `enhancement: Slack-to-Console bridge with metadata` | Slack 回复关联回 IronClaw Console 线程，含深链与运行元数据 |

**进展评估**：v1.2.0 发布闭环完成，v1.3.0 在 5 个核心方向（自动化、内存 MCP、ACP 循环、Reborn profile-agnostic、unbound-turns）均处于积极推进状态，QA 反馈循环运转正常。

---

## 4. 社区热点（讨论/反应最集中）

> 注：数据集中除 #6879 拥有 1 条评论外，其余 issue/PR 评论数均为 0 或未披露。当前热度主要体现在 **issue 关联的工程粒度与 PR 规模**上。

### 🔥 核心热点 Top 5

1. **[#6879 v1.3.0 自动化重做 Epic](https://github.com/nearai/ironclaw/issues/6879)** — 创建 7/29，今日仍是 v1.3.0 顶级 epic
   - 已有 5 个子 issue（#7644/#7645/#7646/#7647 + 已关闭 #7532）和 2 个 XL 级 PR（#7651/#7650）排队
   - **诉求**：把无人值守自动化从"凭 prompt 提示"升级为"结构化执行规约 + 显式投递决策 + 预授权租约 + 模型钉死 + 装配前验证"

2. **[#7634 feat(unbound-turns) 完整切换到 prepared-context turns](https://github.com/nearai/ironclaw/pull/7634)** (XL) — 叠加在 #7562 之上
   - 71 条子句的合规审计对齐两份设计文档，所有分歧均已闭合
   - 代表着 unbounded turn 模型正式取代传统 turn 模型的关键节点

3. **[#7664 pluggable memory over MCP](https://github.com/nearai/ironclaw/issues/7664)** + **[#7661](https://github.com/nearai/ironclaw/pull/7661)** — 让 memory 可由配置绑定而非编译时工厂分支
   - 首个消费者为 Mnesis Core（neo-sky/mnesis-core）
   - 标志着 IronClaw 生态向"可插拔后端"方向演进

4. **[#7624 ACP harness executor — claude-code as the loop](https://github.com/nearai/ironclaw/issues/7624)** + **[#7648](https://github.com/nearai/ironclaw/pull/7648)** — 仅 v0：pluggable loops 唯一值得立即推进的工作
   - 引入中性 per-run-profile 路由器与可替换执行器注册；ACP-only harness executor 不含路由逻辑

5. **[#7456 fix(reborn): make durable storage profile-agnostic](https://github.com/nearai/ironclaw/pull/7456)** (XL) — Reborn profile 持久化根目录统一到 `IRONCLAW_REBORN_HOME`，附带类型化安全信封防越权

---

## 5. Bug 与稳定性

按严重程度排列：

| 等级 | Issue | 描述 | 修复状态 |
|---|---|---|---|
| **P2 (QA)** | [#7667](https://github.com/nearai/ironclaw/issues/7667) | Telegram phone-mode 登录码在 `PHONE_MIGRATE_1` 重发后既不在 Telegram 服务聊天也不在短信中收到；登录码提示未反映 `sentCode.type_` | 待修 |
| **P2 (QA)** | [#7662](https://github.com/nearai/ironclaw/issues/7662) | Telegram 发送 .mp4 附件失败：`invalid_value (attachments.mime_type)`，即便文件被识别为 `video/mp4` | 待修 |
| **P2 (QA)** | [#7660](https://github.com/nearai/ironclaw/issues/7660) | Slack 已激活连接，但 Messaging Channels UI 错误显示 "Finish Setup" 与 "Reconnect" | ✅ **#7666 已合入修复** |
| **P2 (QA)** | [#7659](https://github.com/nearai/ironclaw/issues/7659) | Extensions/Registry 页面泄露其他用户已安装的扩展，疑似多租户隔离缺陷 | 待修 |
| 中 | [#7638](https://github.com/nearai/ironclaw/issues/7638) | 线程删除失败仍使用阻塞式 `window.alert()`，与全局 toast 通知不一致 | 待修 |
| 中 | [#6869](https://github.com/nearai/ironclaw/issues/6869) | 生成的 .docx 文件因损坏无法被 Word 打开 | ✅ **已关闭修复**（来自 Champions 周会 Davin Basi 反馈） |

**稳定性评估**：所有 P2 bug 均集中在 **Railway QA 实例 `ironclaw-qa-testing-libsql.up.railway.app`**，提示这是与 Slack/Telegram 集成与多租户隔离相关的回归；社区影响面主要为内部 dogfooding 用户，未见生产环境投诉升级。

---

## 6. 功能请求与路线图信号

### 明确已纳入路线图

- **#7653 [structured Ask User cards in WebUI](https://github.com/nearai/ironclaw/issues/7653)** — 受 OMP 启发的 `ask` 工具，复用 `LoopCompletionKind::AskUserReply` 终端，**明确不做可恢复 loop gate**（run 完成后由答案进入现有回复链路）。PR 尚未开启。
- **#7664/#7661 [pluggable memory over MCP](https://github.com/nearai/ironclaw/issues/7664)** — Mnesis Core 首个消费者，**首版 provider crate 草案**已就绪。
- **#7624/#7648 [ACP harness executor v0](https://github.com/nearai/ironclaw/issues/7624)** — 已限定为 "v0 唯一值得立即推进的可插拔循环"，#7621/#7622/#7623 是延后阶梯。
- **#7255 [APDD governance kit 评估与整合](https://github.com/nearai/ironclaw/pull/7255)** (XL, docs) — 文档级 PR，评估 Agent Product Design & Development 治理框架，提议阶段化接入。

### 用户提出、待评估

- **#7183 per-user LLM model selection** — 已通过 PR 关闭（v1.3.0 包含），但**关闭当日**无新用户反馈验证，建议下个 sprint 收集真实使用数据。

### 文档基础设施

- **#7378 doc-fact contract tests** (L) — CLI/manifest/Responses 声明的事实契约测试
- **#7379 docs-live 分支发布** (L) — Mintlify 站点从 `docs-live` 而非 `main` 部署，避免与发布版本错位

---

## 7. 用户反馈摘要

由于多数 issue 评论区为空，可被结构化提取的真实用户声音有限：

| 来源 | 痛点/场景 | 态度 |
|---|---|---|
| Champions 周会 Jeremy Koch（市场）→ #7183 | "模型选择是 admin-only，个人用户无法切换" | 明确诉求 → **已合入修复** |
| Champions 周会 Davin Basi → #6869 | 试图让 agent 生成带标记的 NDA .docx，首次"协议违反停止"、二次生成 Word 无法读取 | 不满意 → **已合入修复**，但与 ChatGPT/Claude 对比的体验落差值得记录 |
| QA 团队 joe-rlo | 多用户 Extensions/Registry 页面互相可见已装扩展 | **潜在多租户隔离问题** → 待修 |
| QA 团队 joe-rlo | Slack/UI 状态显示与实际连接状态不一致 | 不一致会误导用户重新走已经完成的引导流程 → #7666 已修 |
| Telegram 链接 QA | 迁移 DC + 2FA 账号 QR 登录、phone-mode `PHONE_MIGRATE_1` 后登录码投递位置不明 | 安全/可观测性双重诉求 → #7658 已修 2FA 部分，#7667 待修投递提示 |

**总体用户情绪**：本周期大多数反馈来自 **内部 dogfooding + Champions 周会** 渠道，外部生产用户投诉未出现明显放大。设计良好的

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报

**日期：2026-08-15**
**项目：LobsterAI (netease-youdao/LobsterAI)**

---

## 1. 今日速览

LobsterAI 项目今日呈现**高强度集中交付**状态：过去 24 小时内共有 **27 个 PR 更新**，其中 **22 个已完成合并/关闭**，处理效率高达 **81.5%**；同时发布 **1 个新版本（2026.8.14）**，包含 2 个 PR 已并入。Issues 端相对平静，仅 2 条活跃（无关闭），其中 1 条为社区功能诉求、1 条为长期积压的测试覆盖率 Issue。综合来看，项目处于**活跃冲刺期**，重心在 v4pro/2026.7.30 主线发布的收尾与日常缺陷修复，开发节奏健康。

---

## 2. 版本发布

### 🚀 LobsterAI 2026.8.14（已发布）

- **链接**：[Release 2026.8.14](https://github.com/netease-youdao/LobsterAI/pull/2411) (PR #2411) / [#2418](https://github.com/netease-youdao/LobsterAI/pull/2418)
- **更新内容**：
  - `feat(sidebar)`：支持签到与横幅轮播（@btc69m979y-dotcom）
  - `feat(sidebar)`：新增多智能体任务活动筛选器（@liuzhq1986）
- **破坏性变更**：无明显破坏性变更记录
- **迁移注意事项**：版本号跨度较大（从 7.30 系列跳到 8.14），建议用户在升级前备份本地 session 与 skill 配置数据

---

## 3. 项目进展

今日合并/关闭的重要 PR 体现出多线并进的态势：

| PR | 类别 | 影响 |
|---|---|---|
| [#2498](https://github.com/netease-youdao/LobsterAI/pull/2498) **Release: 2026.7.30** | 发布主线 | 将 `release/2026.7.30` 分支合并进 main，**领先 67 个 commits、变更 264 文件（+24,736/-4,253 行）**，引入 Team Edition 账号与配额流程、刷新 Skills 与 Connectors 体验 |
| [#2499](https://github.com/netease-youdao/LobsterAI/pull/2499) | Bug 修复 | 修复 cowork turn 流程中"折叠条件过早"导致空 duration 行误显示为失败的 UX 问题 |
| [#2490](https://github.com/netease-youdao/LobsterAI/pull/2490) | 功能 | 在 artifact 面板中支持预览浏览器标注截图附件，并提供专门的 artifact 视图替代通用图片预览 |
| [#2495](https://github.com/netease-youdao/LobsterAI/pull/2495) | UI | 默认 UI/代码字号上调，提供一次性迁移 |
| [#2494](https://github.com/netease-youdao/LobsterAI/pull/2494) / [#2492](https://github.com/netease-youdao/LobsterAI/pull/2492) | UI | 账号 Credits 图标升级为堆叠点 SVG，统一明暗主题色 |
| [#2497](https://github.com/netease-youdao/LobsterAI/pull/2497) | i18n | 完善 cowork goal 与 steer 文案 |
| [#2496](https://github.com/netease-youdao/LobsterAI/pull/2496) | UI | 修复 cowork 徽章气泡在视口边界与后续消息下层显示异常 |
| [#2493](https://github.com/netease-youdao/LobsterAI/pull/2493) | UI | 修复会话导出图片与卡片切换显示问题 |
| [#2491](https://github.com/netease-youdao/LobsterAI/pull/2491) / [#2483](https://github.com/netease-youdao/LobsterAI/pull/2483) | Bug 修复 | OpenClaw `skills.entries` 键名改为 frontmatter `name`，修复 UI toggle 静默失效 |
| [#2422](https://github.com/netease-youdao/LobsterAI/pull/2422) / [#2423](https://github.com/netease-youdao/LobsterAI/pull/2423) | 修复+回滚 | btw tools 修复后回滚，提示该方向需要重新评估 |

**整体评估**：项目在 cowork 主线、账号体系、UI 排版、OpenClaw 集成四个方向上均取得实质性推进，主线版本（2026.7.30）的合并标志着 v4pro 系列的规模化落地。

---

## 4. 社区热点

### 📌 高讨论度议题

1. **[Issue #1154](https://github.com/netease-youdao/LobsterAI/issues/1154)** — 为 `commandSafety` 和 `coworkMemoryJudge` 补充 Vitest 单元测试（1 评论）
   - **诉求**：这两个核心安全/质量模块（危险命令检测 + 记忆质量评分）目前零测试覆盖，存在严重漏判风险（如误执行 `rm -rf`、`git push --force`）。

2. **[Issue #2489](https://github.com/netease-youdao/LobsterAI/issues/2489)** — "快更新v4pro！"（1 评论）
   - **诉求**：社区用户明确要求尽快发布 v4pro 版本，反映出对主线功能（如 Team Edition）的高期待。

3. **[PR #2374](https://github.com/netease-youdao/LobsterAI/pull/2374)** — 添加永久隐藏侧边栏广告横幅的设置（0 评论但 PR 体量大）
   - **诉求**：用户对侧边栏广告的强反馈，希望在「设置 → 通用」中提供永久关闭开关。

---

## 5. Bug 与稳定性

| 严重度 | 问题 | 链接 | 是否有 Fix |
|---|---|---|---|
| 🔴 **高** | `commandSafety.ts` 缺乏单元测试，危险命令漏判可导致 AI 静默执行破坏性命令 | [#1154](https://github.com/netease-youdao/LobsterAI/issues/1154) | ❌ 未提供 |
| 🟠 **中高** | OpenClaw UI toggle 静默失效（directory 与 frontmatter name 不匹配导致 skills.entries override 无效） | [#2491](https://github.com/netease-youdao/LobsterAI/pull/2491) | ✅ 已合并 |
| 🟠 **中** | `buildOpenAIChatCompletionsURL` 处理 Gemini `/v1` 路径时多切一个字符，导致 URL 拼接错误 | [#1153](https://github.com/netease-youdao/LobsterAI/pull/1153) | ⚠️ PR 仍 OPEN（stale）|
| 🟡 **中** | cowork turn 在 `sessions_yield` 之后过早折叠，误显示为"失败" | [#2499](https://github.com/netease-youdao/LobsterAI/pull/2499) | ✅ 已合并 |
| 🟡 **中** | 浏览器标注截图未在 artifact 面板独立呈现 | [#2490](https://github.com/netease-youdao/LobsterAI/pull/2490) | ✅ 已合并 |
| 🟢 **低** | 账号 Credits 图标样式与明暗主题不一致 | [#2494](https://github.com/netease-youdao/LobsterAI/pull/2494) / [#2492](https://github.com/netease-youdao/LobsterAI/pull/2492) | ✅ 已合并 |
| 🟢 **低** | 会话导出图片与卡片切换显示异常 | [#2493](https://github.com/netease-youdao/LobsterAI/pull/2493) | ✅ 已合并 |

---

## 6. 功能请求与路线图信号

| 请求 | 来源 | 当前状态 | 纳入下一版本可能性 |
|---|---|---|---|
| 永久隐藏侧边栏广告横幅 | [#2374](https://github.com/netease-youdao/LobsterAI/pull/2374) | OPEN（已开放 25 天） | 🔥 **高** — 已在 PR 阶段 |
| 会话内页内搜索（Ctrl+F） | [#1155](https://github.com/netease-youdao/LobsterAI/pull/1155) | OPEN（stale，自 2026-03-31） | 🟡 中 — 需要重新激活 |
| 会话"标记为未读" | [#1228](https://github.com/netease-youdao/LobsterAI/pull/1228) | CLOSED（stale） | ⚪ 低 — 已关闭，需另起 |
| AgentCreateModal Escape 关闭 + 表单重置 | [#1231](https://github.com/netease-youdao/LobsterAI/pull/1231) | CLOSED（stale） | ⚪ 低 |
| v4pro 正式版本 | [#2489](https://github.com/netease-youdao/LobsterAI/issues/2489) | OPEN | 🔥 **极高** — 2026.7.30 已合并入 main，临近发布 |

**信号解读**：侧边栏广告控制 与 v4pro 发布 是当前最强的用户共识需求，预计将进入近期迭代。

---

## 7. 用户反馈摘要

- **📢 对 v4pro 高度期待**：Issue #2489 反映用户急切等待主线功能落地，Team Edition 与配额流程的引入可能成为吸引付费用户的核心卖点。
- **🛡️ 安全顾虑**：Issue #1154 中开发者 MaoQianTu 指出 `commandSafety` 零测试覆盖的隐患，说明部分核心贡献者已开始关注 AI 自动化执行命令的安全边界问题。
- **😤 广告体验不满**：PR #2374 长期开放表明用户对侧边栏广告横幅有持续负面反馈，"暂时关闭" 不够，需要永久选项。
- **🤔 i18n 细节**：PR #2497 体现项目对中英文文案一致性的持续打磨，社区对文案质量敏感。

---

## 8. 待处理积压

> 以下条目均为 **长期未响应** 的重要 Issue/PR，建议维护者重点关注：

| 编号 | 类型 | 标题 | 停滞时间 | 链接 |
|---|---|---|---|---|
| **#1154** | Issue | 为 commandSafety/coworkMemoryJudge 补充 Vitest 单元测试 | ~4.5 个月（自 2026-03-31） | [链接](https://github.com/netease-youdao/LobsterAI/issues/1154) |
| **#1153** | PR | 修复 Gemini `/v1` URL 拼接错误 | ~4.5 个月（stale） | [链接](https://github.com/netease-youdao/LobsterAI/pull/1153) |
| **#1155** | PR | feat(cowork): 会话内页内搜索（Ctrl+F） | ~4.5 个月（stale） | [链接](https://github.com/netease-youdao/LobsterAI/pull/1155) |
| **#2374** | PR | 添加永久隐藏侧边栏广告横幅设置 | 25 天（OPEN） | [链接](https://github.com/netease-youdao/LobsterAI/pull/2374) |
| **#2460** | PR | bump rimraf 5.0.10 → 6.1.3（Dependabot） | 4 天 | [链接](https://github.com/netease-youdao/LobsterAI/pull/2460) |
| **#2465** | PR | bump vite 5.4.21 → 8.2.1（Dependabot） | 4 天 | [链接](https://github.com/netease-youdao/LobsterAI/pull/2465) |

**健康度提醒**：
- 两条 3 月份的 PR 已标记 `[stale]`，但内容质量（URL 修复、Ctrl+F 搜索）依然有价值，建议关闭或合并。
- Dependabot 提交的依赖升级 PR（涉及 rimraf、vite 主版本跳跃）需谨慎评估兼容性，建议在合并前跑通 CI。

---

## 📊 项目健康度评估

| 维度 | 评级 | 说明 |
|---|---|---|
| **开发活跃度** | ⭐⭐⭐⭐⭐ | 单日 27 PR、22 合并，吞吐极高 |
| **发布节奏** | ⭐⭐⭐⭐ | 8.14 版本顺利发布，主线 7.30 已合入 main |
| **社区响应** | ⭐⭐⭐ | Issues 端响应偏弱，stale 积压较多 |
| **代码质量** | ⭐⭐⭐⭐ | 多项 UX 与 bug 修复并入，但安全模块测试缺失 |
| **依赖维护** | ⭐⭐ | Dependabot PR 积压 4 天，主版本升级未处理 |

**结论**：LobsterAI 当前处于**版本冲刺 + 主线落地**的关键阶段，建议维护者同步推进 stale 积压清理与 v4pro 正式发布。

---

*报告生成时间：2026-08-15 | 数据来源：GitHub API*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目日报 · 2026-08-15

---

## 1. 今日速览

Moltis 今日社区活跃度处于**低位**——过去 24 小时内无新 Issue 开启、无 PR 合并、无新版本发布。值得注意的是，仍有 **2 个开放 PR** 处于待审阅状态，且均由同一贡献者 `penso` 提交，分别聚焦于 **Slack 原生任务卡片** 与 **耐用型日历/邮件连接器** 两个方向，显示出该贡献者近期在"外部生态集成"主线上的集中发力。整体而言，项目今日无明显推进，但 PR 队列中仍有实质性功能提案待维护者评审。

---

## 2. 版本发布

⚠️ **本节今日无新版本发布**，跳过。

---

## 3. 项目进展

📉 今日**无 PR 合并、无 PR 关闭、无新版本发布**，因此从"代码合入主分支"角度看，项目今日向前推进的幅度为零。

不过，仍有两条**实质性功能提案**位于待审阅队列中，值得关注：

- **PR [#1195](https://github.com/moltis-org/moltis/pull/1195) — Add Slack native live task cards**（今日新建）
  - 引入"通道中立（channel-neutral）的工具生命周期更新"框架
  - 在现有响应流中渲染为 Slack 原生的 plan/task 卡片
  - 使用 opaque run ID 保护卡片隐私，注册规范化工具名
  - 失败流支持终态错误清理
  
- **PR [#1190](https://github.com/moltis-org/moltis/pull/1190) — Add durable calendar, channel, and email connectors**（8/11 提交，今日仍有更新）
  - 提供 provider-neutral 的连接器持久化、原子快照、调度、投影和有限本地全文检索
  - 新增只读 CalDAV、Gmail、Himalaya v2 集成与可复用 channel-history 数据集
  - 引入 provider-scoped 信任机制，**不复制凭证**

> 🔎 共同点：两者都强调 "provider-neutral / channel-neutral" 架构与隐私/凭证安全，这是 Moltis 在多平台集成方向上一个明显的工程哲学。

---

## 4. 社区热点

由于今日**无 Issue、无评论数据、无点赞反应**，传统的"讨论热度"维度信息不足。以下基于 PR 自身维度提供观察：

| 维度 | 观察 |
|---|---|
| **最新热度** | PR [#1195](https://github.com/moltis-org/moltis/pull/1195) 为今日唯一新建 PR，主题直接挂钩 Slack 平台体验 |
| **持续热度** | PR [#1190](https://github.com/moltis-org/moltis/pull/1190) 在 8/11 提交后仍于 8/14 持续更新，说明作者仍在迭代 |
| **互动度** | 两个 PR 当前 `👍: 0`，**社区反应滞后**，维护者尚未表达倾向 |

**诉求分析**：两个 PR 都回应了同一类潜在用户痛点——在第三方平台（Slack / Gmail / CalDAV）中使用 AI Agent 时，如何让"工具调用进度"对人类可读、如何让凭证与数据隔离可靠。这与当下 Agent 走向生产化（多平台、多 Provider）的趋势一致。

---

## 5. Bug 与稳定性

🐛 **本节今日无新 Bug / 崩溃 / 回归报告**。

不过有两条与稳定性相关的设计变更值得维护者重点关注审阅（已在 PR 阶段承诺）：

- **PR [#1195](https://github.com/moltis-org/moltis/pull/1195)** 承诺 "terminal error cleanup on failed streams" —— 若实现到位，可减少流中断后遗留 UI 卡片的问题。
- **PR [#1190](https://github.com/moltis-org/moltis/pull/1190)** 承诺 "atomic snapshots" 和 "provider-scoped trust" —— 若实现到位，可降低连接器数据损坏与凭证泄漏风险。

> ⚠️ 二者均未合并，故目前**尚无 Fix 可用**。

---

## 6. 功能请求与路线图信号

由于今日无新 Issue，**用户显式提出的功能需求为零**。但通过两个待审 PR 可以反推项目当前的隐含路线图：

| 方向 | 信号强度 | 来源 |
|---|---|---|
| **Slack 原生 Agent 体验** | 🟢 强 | [PR #1195](https://github.com/moltis-org/moltis/pull/1195) 新建当日提交，是首个 Slack 原生卡片提案 |
| **耐用型连接器（Calendar / Email / IMAP）** | 🟢 强 | [PR #1190](https://github.com/moltis-org/moltis/pull/1190) 提出 CalDAV / Gmail / Himalaya v2 三套 Provider |
| **隐私保护 by design** | 🟡 中 | 两个 PR 都强调 ID opaqueness / 无凭证复制 / provider-scoped 信任 |
| **本地有限全文检索** | 🟡 中 | 仅由 PR #1190 提出，未必经路线图确认 |

✏️ **预测**：若维护者对此方向认可，下列短中期可能进入下一版本：
1. Slack 流式 plan/task 卡片（基于 PR #1195）
2. 持久化 CalDAV/Gmail 读取能力（基于 PR #1190）
3. 连接器原子快照与 provider-scoped 信任模型（基于 PR #1190）

---

## 7. 用户反馈摘要

📭 本日**无 Issue 评论数据可用**（Issues 总数为 0），无法从评论中提炼真实用户痛点。

可作为背景参考的**间接信号**：
- 两个 PR 均聚焦"第三方平台友好体验 + 凭证隔离"，可推断出**潜在用户群体**正在朝"将 AI Agent 嵌入既有工作平台（Slack / 邮件 / 日历）"迁移。
- 0 条 Issue 可能反映出：(a) 当前用户基础较小；(b) 缺少 Issue 模板引导；(c) 用户更倾向直接提 PR 或使用其他反馈渠道。**建议维护者关注是否存在 Issue 入口流失。**

---

## 8. 待处理积压

⏳ 提醒维护者关注的开放项：

| 类型 | 编号 | 标题 | 状态 | 最后更新 | 风险点 |
|---|---|---|---|---|---|
| 🟡 PR | [#1190](https://github.com/moltis-org/moltis/pull/1190) | Add durable calendar, channel, and email connectors | OPEN · 0👍 | 2026-08-14 | 涉及 4 个新 Provider（CalDAV / Gmail / Himalaya v2 / channel-history），集成面广，审阅负担较大 |
| 🟡 PR | [#1195](https://github.com/moltis-org/moltis/pull/1195) | Add Slack native live task cards | OPEN · 0👍 | 2026-08-15 | 引入跨通道卡片生命周期框架，需确认与既有响应流契约是否冲突 |

> 📌 **特别提示**：两条 PR 同属一名贡献者 `penso`，且都触及"集成层 + 隐私/凭证"高敏区，建议维护者安排**专项评审**而非简单合并。

---

### 📊 项目健康度速评（2026-08-15）

| 指标 | 评级 | 说明 |
|---|---|---|
| 贡献活跃度 | 🟡 中等偏低 | 有 PR 提交，无合并 |
| 社区参与度 | 🔴 待观察 | 0 新 Issue、0 评论、0 👍 |
| 代码推进速度 | 🔴 暂停 | 24h 内无合并 |
| 路线图清晰度 | 🟢 高 | 两个 PR 指向一致方向 |
| 审阅响应速度 | ⚠️ 待验证 | 历史模式需更多数据 |

---

*本报告基于 GitHub 公开数据自动生成，数据时间窗口为过去 24 小时（截至 2026-08-15）。*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目日报 · 2026-08-15

> 数据来源：github.com/agentscope-ai/CoPaw
> 统计周期：过去 24 小时

---

## 一、今日速览

过去 24 小时 CoPaw（社区提交中仍以 QwenPaw 命名）进入**高强度清理 + 集中冲刺**节奏：Issues 新开/活跃 12 条、已关闭 38 条（关闭率 **76%**），PRs 41 条更新但**新版本发布为 0**。活跃 PR 主要集中在 **Provider 体系重构、MCP/Skill 运行时管理、Computer Use 与桌面端体验** 四条主线，反映维护者正在为下一个版本做集成准备。整体活跃度高、关闭速度积极，但开放 PR 数（26 条）远高于合并数（15 条），建议关注积压。

---

## 二、版本发布

**无新版本发布。**

PR #6908（agentscope 升级到 2.0.6）仍处 OPEN 状态，版本尚未封板。多个关键功能 PR（如 #6302 Provider 统一、#5992 会话级模型覆盖）仍在评审中，下个版本窗口尚未形成稳定基线。

---

## 三、项目进展（已合并/关闭 PR）

| PR | 说明 | 状态 |
|---|---|---|
| [#2105](https://github.com/agentscope-ai/QwenPaw/pull/2105) | 新增 Whisper `--extras whisper` 安装文档（中英文） | 已关闭 |
| [#6715](https://github.com/agentscope-ai/QwenPaw/pull/6715) | OneBot 入站媒体本地化，与 AgentScope 2.0 `DataBlock` 对齐 | 已关闭 |
| [#6943](https://github.com/agentscope-ai/QwenPaw/pull/6943) | 恢复插件渠道 `get_configurator()` 交互式配置支持 | 已关闭 |
| [#7029](https://github.com/agentscope-ai/QwenPaw/pull/7029) / [#7031](https://github.com/agentscope-ai/QwenPaw/pull/7031) | 动态技能加载（中文版与英文版） | 已关闭（[#7033](https://github.com/agentscope-ai/QwenPaw/pull/7033) 为最新综合版，仍 OPEN） |
| [#7030](https://github.com/agentscope-ai/QwenPaw/pull/7030) | 聊天标题自动同步（[#7032](https://github.com/agentscope-ai/QwenPaw/pull/7032) 为最新综合版） | 已关闭 |

**推进评估**：本期"已关闭"中含多个 PR 重复/分支整合的关闭（如 #7029/#7030/#7031 被综合到 #7033/#7032），属于维护者**合并同类修改、收敛主线**的整理动作，并非实质性合并。真正落地到主干的能力增量仍较有限。下一步需观察 #6302、#5992、#7033 是否能在近期内合入。

---

## 四、社区热点

按评论数排序的 Top 5 议题：

1. **[#3045](https://github.com/agentscope-ai/QwenPaw/issues/3045)（8 条评论，已关闭）** — 自动获取模型配置不可用（v1.0.1 Windows 桌面端）。体现桌面端用户在"零配置"路径上反复踩坑。
2. **[#2418](https://github.com/agentscope-ai/QwenPaw/issues/2418)（7 条评论，已关闭）** — 希望增加 Skills Hub 管理页。社区诉求集中在"减少去第三方下载技能的链路"。
3. **[#2846](https://github.com/agentscope-ai/QwenPaw/issues/2846)（6 条评论，已关闭）** — 桌面端自动更新 + Windows 任务栏显示 Python 图标。连续多用户报告，反映桌面端品牌一致性缺失。
4. **[#2303](https://github.com/agentscope-ai/QwenPaw/issues/2303)（6 条评论，已关闭）** — MiniMax Provider `check_connection()` 调用 `/models` 返回 404。属于 Anthropic-compatible 厂商协议兼容性问题。
5. **[#7010](https://github.com/agentscope-ai/QwenPaw/issues/7010)（6 条评论，已关闭）** — `qwenpaw app` 缺少真正的 daemon 模式，SSH/脚本启动会卡住。**服务器场景的核心可用性问题**。

**诉求归纳**：
- **桌面端体验**：自动更新、品牌图标、配置可用性是社区反复出现的反馈三角；
- **Provider 兼容性**：MiniMax、Responses API 等"边缘"兼容厂商的握手逻辑需统一收口；
- **运维能力**：后台/守护模式是部署在服务器上的硬需求。

---

## 五、Bug 与稳定性

按严重程度排序（综合影响面、可复现性、是否已有 fix）：

| 严重度 | Issue | 描述 | 状态 / Fix |
|---|---|---|---|
| 🔴 高 | [#7011](https://github.com/agentscope-ai/QwenPaw/issues/7011) | Console Stop 会跨 session 取消正在进行的飞书会话（v2.1.0） | **OPEN**，**尚无 PR**，需立即关注 — 涉及多 UI 会话身份隔离的安全级 Bug |
| 🔴 高 | [#6405](https://github.com/agentscope-ai/QwenPaw/issues/6405) | 升级 2.0 后 MCP 工具一直 "Tool not found"（Docker 2.0.0post3） | 已关闭，疑似在 [#6958](https://github.com/agentscope-ai/QwenPaw/issues/6958) 修复中 |
| 🔴 高 | [#7016](https://github.com/agentscope-ai/QwenPaw/issues/7016) | 工具调用流式 offload 接口 404（v2.1.0） | **OPEN**，无 PR |
| 🟠 中 | [#6958](https://github.com/agentscope-ai/QwenPaw/issues/6958) | FastMCP 返回结构化内容时工具结果文件写入两份重复数据 | OPEN，但已有 [PR #6969](https://github.com/agentscope-ai/QwenPaw/pull/6969) 修复中 |
| 🟠 中 | [#6612](https://github.com/agentscope-ai/QwenPaw/issues/6612) | QwenPaw 2.0.1 与 agentscope 2.0.4.post1 不兼容（Msg.content 类型、工具权限死锁） | 已关闭，[PR #6908](https://github.com/agentscope-ai/QwenPaw/pull/6908) 升级 agentscope 到 2.0.6 中 |
| 🟠 中 | [#6197](https://github.com/agentscope-ai/QwenPaw/issues/6197) | 桌面端启动时 `nvidia-smi` 挂死导致整体挂起 | 已关闭 |
| 🟠 中 | [#6951](https://github.com/agentscope-ai/QwenPaw/issues/6951) | Scroll 压缩后重新进入会话，压缩前聊天记录仅显示内部索引 | 已关闭 |
| 🟡 低 | [#7040](https://github.com/agentscope-ai/QwenPaw/issues/7040) | UI 文案"Stop Running"误写为"Stopp Running" | 已关闭 |
| 🟡 低 | [#4832](https://github.com/agentscope-ai/QwenPaw/issues/4832) | Windows 下 shell 命令缺少 `CREATE_NO_WINDOW` 导致 cmd 闪窗 | 已关闭 |

**关键观察**：
- 🔴 **#7011** 与 **#7016** 是 v2.1.0 新引入的会话/工具调用链路问题，目前**没有对应 PR**，是本期最值得维护者立即处理的两条；
- 历史上持续累积的兼容性问题（#6612、#6405）已开始通过依赖升级（#6908）和 MCP 适配器修复（#6969）逐步收口。

---

## 六、功能请求与路线图信号

| 需求 | Issue | 是否已有对应 PR | 纳入概率 |
|---|---|---|---|
| Provider 统一目录、运行时发现、路由 | [#2763](https://github.com/agentscope-ai/QwenPaw/issues/2763) / [#2314](https://github.com/agentscope-ai/QwenPaw/issues/2314) | ✅ [PR #6302](https://github.com/agentscope-ai/QwenPaw/pull/6302) | **高** |
| 会话级模型覆盖（per-session override） | [#2763](https://github.com/agentscope-ai/QwenPaw/issues/2763) | ✅ [PR #5992](https://github.com/agentscope-ai/QwenPaw/pull/5992) | **高** |
| OpenAI Responses API / 仅响应 API 适配 | [#944](https://github.com/agentscope-ai/QwenPaw/issues/944) / [#2737](https://github.com/agentscope-ai/QwenPaw/issues/2737) / [#3002](https://github.com/agentscope-ai/QwenPaw/issues/3002) | ❌ 无 PR | 中（呼声持续） |
| Skills Hub 管理页 | [#2418](https://github.com/agentscope-ai/QwenPaw/issues/2418) | ❌ 无 PR | 中 |
| Computer Use | [#5551](https://github.com/agentscope-ai/QwenPaw/issues/5551) | ✅ [PR #7037](https://github.com/agentscope-ai/QwenPaw/pull/7037) 已在做 | **高** |
| 桌面端自动更新 | [#2846](https://github.com/agentscope-ai/QwenPaw/issues/2846) / [#3464](https://github.com/agentscope-ai/QwenPaw/issues/3464) | ❌ 无 PR | 中 |
| 单条消息删除 | [#4001](https://github.com/agentscope-ai/QwenPaw/issues/4001) | ❌ 无 PR | 中 |
| 会话拆分 | [#4436](https://github.com/agentscope-ai/QwenPaw/issues/4436) | ❌ 无 PR | 中 |
| 内置 GGUF / 零配置本地模型 | [#6433](https://github.com/agentscope-ai/QwenPaw/issues/6433) | ❌ 无 PR | 低（架构性变更） |
| 定时任务不投递 | [#2554](https://github.com/agentscope-ai/QwenPaw/issues/2554) | ❌ 无 PR | 中 |

**路线图信号**：下个版本窗口极有可能出现**Provider 体系重构（#6302）+ 会话级模型（#5992）+ Computer Use 增强（#7037）+ Skill 动态加载（#7033）** 的组合，桌面端自动更新与 Responses API 是更高优但尚未动工的方向。

---

## 七、用户反馈摘要

- **桌面端"卸载再装"循环**（#2846、#3464、#6197）已让多个 Windows 用户表达不满，是桌面渠道留存的主要摩擦点。
- **Provider 配置不可用**（#3045）反映"自动获取"路径在 v1.0.1 上对终端用户基本失效，被迫手动填写。
- **服务器部署场景**（#7010）暴露出产品形态仍偏桌面思维：`qwenpaw app` 没有 daemon 化让 SSH/脚本用户反复踩坑。
- **升级 2.0 后的 MCP

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目日报 · 2026-08-15

> 数据来源：github.com/zeroclaw-labs/zeroclaw · 统计窗口：过去 24 小时

---

## 一、今日速览

ZeroClaw 今日延续了 v0.8.5 稳定化阶段的密集节奏，单日触达 **83 条** Issue/PR 更新（30 条活跃 Issue + 50 条活跃 PR），但**无新版本发布**，所有变更仍处于评审与合并前的状态。议题重心高度集中在 **RFC 设计评审**（占活跃 Issue 60% 以上）与 **安全/网关架构落地**（`security`、`plugin`、`gateway`、`anthropic` 标签多次出现），社区讨论密度较高但合并产出克制——仅 3 条 PR/Issue 关闭（含 1 条 wontfix）。整体判断：**项目处于"高强度设计、低合并节奏"的 RFC 收束期**，v0.8.5 稳定线（#9459，截止 8 月 30 日）进入最后两周窗口，维护者需要在 RFC 决策队列（#8692）与代码合并之间做更明确取舍。

---

## 二、版本发布

**无新版本发布。** 距离上一个稳定切线仍在 v0.8.5 路线图（#9459）内推进，8 月 4 日已冻结新需求入站，本周不发布为预期行为。

---

## 三、项目进展

过去 24 小时仅 **3 条** Issue/PR 关闭，项目处于"代码冻结期"特征明显。具体如下：

| 编号 | 类型 | 标题 | 状态 | 链接 |
|---|---|---|---|---|
| [#9982](https://github.com/zeroclaw-labs/zeroclaw/issues/9982) | Issue | Hosted memory for ZeroClaw users（ViBo Cloud API 提案） | CLOSED · wontfix | 商业化提案，维护者不予纳入 |
| [#6663](https://github.com/zeroclaw-labs/zeroclaw/issues/6663) | Issue | feat(telegram): 在 partial 流式输出中展示工具调用进度 | CLOSED | 由其他 PR 路径覆盖 |
| （其他 PR 已合并/关闭条目） | PR | — | 3 条已合并/关闭，但当前 PR 列表中未见具体标题，需通过链接复核 | — |

**实质性推进方向（基于活跃 PR 状态）：**
- **插件安全边界成型**：[#9137](https://github.com/zeroclaw-labs/zeroclaw/pull/9137)（共享 egress policy 基础）、[#9126](https://github.com/zeroclaw-labs/zeroclaw/pull/9126)（typed 实例配置校验）、[#9580](https://github.com/zeroclaw-labs/zeroclaw/pull/9580)（共享 net_guard）形成相互依赖的三件套，由 `@JordanTheJet` 主导，被多份 RFC（#6971、#7141、#7142）作为实施载体。
- **Anthropic OAuth 原生支持**：[#9420](https://github.com/zeroclaw-labs/zeroclaw/pull/9420)（XL）正在落地"存储型 OAuth profile"，标志着 setup-token 时代向后兼容阶段的过渡。
- **OpenAI 兼容层补完**：[#9999](https://github.com/zeroclaw-labs/zeroclaw/pull/9999) 修复 `finish_reason: "length"` 未被识别为终止错误（与 #9421 联动的稳定性修复）。
- **可观测性与网关鲁棒性**：[#9002](https://github.com/zeroclaw-labs/zeroclaw/pull/9002)（WebSocket 断连不取消 turn）、[#9996](https://github.com/zeroclaw-labs/zeroclaw/pull/9996)（action 预算原子化记账）继续巩固 S1 类问题修复。

**整体评估：**项目"RFC 收敛 → 实施落地"的链路已建立，但**今日合并数明显偏低**（50 条 PR 中仅 3 条已合并/关闭）。维护者决策队列（#8692，13 评论）显示仍有较多 RFC 等待裁决，节奏偏慢。

---

## 四、社区热点

按评论数排序的今日高热度议题（均为 24 小时内有更新）：

| 排名 | 编号 | 评论 | 👍 | 主题 | 链接 |
|---|---|---|---|---|---|
| 1 | #8303 | 22 | 1 | **Goal mode v1** —— 有界前台 Matrix 工作的 RFC 收尾 | [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/8303) |
| 2 | #7155 | 20 | 0 | **高危 shell 命令的 per-execution 确认层 + Claude Code 风格命令模式策略**（Rev 3） | [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/7155) |
| 3 | #8603 | 19 | 0 | **ZeroClaw Chat Completions profile** —— 对外暴露 OpenAI 协议 | [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/8603) |
| 4 | #7141 | 16 | 0 | **可插拔入站认证与规范主体**（Rev 8） | [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/7141) |
| 5 | #7462 | 15 | 0 | **Bug：Windows 上 74 个测试失败** | [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/7462) |
| 6 | #9487 | 14 | 0 | **运行时持有的会话与传输适配器**（Rev 2） | [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/9487) |
| 7 | #9488 | 14 | 0 | **Web/Channel 统一附件架构** | [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/9488) |
| 8 | #8692 | 13 | 0 | **维护者 RFC 决策队列 Tracker** | [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) |
| 9 | #6971 | 11 | 0 | **安全姿态、凭据边界与全局入口策略** | [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/6971) |
| 10 | #6954 | 11 | 0 | **内部启动 turn 的来源/会话绑定/回复契约**（Rev 2） | [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/6954) |

**热点诉求分析：**
- **架构统一诉求集中**：会话管理（#9487）、附件（#9488）、包/能力目录（#9346）、运行时安全决策（#7142）构成一组"运行时主权"系列 RFC，作者多为 `@NiuBlibing`、`@singlerider`、`@Audacity88`，显示核心维护圈在主动收敛边界。
- **OpenAI 生态兼容性是用户最强外呼**（#8603 19 评论）—— 来自 Open WebUI / LobeChat / Continue.dev / Aider / LangChain 用户的接入需求。
- **Shell 安全策略是社区最高焦虑点**（#7155 20 评论、#9839）—— 借鉴 Claude Code 的 allow/ask/deny 模式几乎成为事实标准。

---

## 五、Bug 与稳定性

按严重程度排序的当前已知 Bug（按 issue 标签与描述整理）：

| 严重度 | 编号 | 标题 | 是否有在途 fix PR | 链接 |
|---|---|---|---|---|
| **S1（阻塞工作流）** | [#9421](https://github.com/zeroclaw-labs/zeroclaw/issues/9421) | 不完整终止响应被报告为成功 | ✅ 有（#9999 针对 OpenAI 兼容层分类；其他 provider 待补） | 链接 |
| **S2（降级行为）** | [#7462](https://github.com/zeroclaw-labs/zeroclaw/issues/7462) | Windows 上 74 个测试失败（Unix 专属命令、路径语义、控制台编码） | ❌ 无明确修复 PR（仅相关测试 PR #10001） | 链接 |
| **S2** | [#9486](https://github.com/zeroclaw-labs/zeroclaw/issues/9486) | 高熵检测器误将 Solana 钱包地址脱敏；`high_entropy_tokens=false` 在 channel 路径不生效 | ❌ 无在途 fix PR | 链接 |
| **S2** | [#9759](https://github.com/zeroclaw-labs/zeroclaw/issues/9759) | Quickstart 允许重复的 webhook port | ❌ 无明确 fix PR | 链接 |
| **S2** | [#9421](https://github.com/zeroclaw-labs/zeroclaw/issues/9421) | 工具调用结束 turn 但未给出可信最终答案 | 部分覆盖 | 链接 |
| **S3（次要）** | [#9983](https://github.com/zeroclaw-labs/zeroclaw/issues/9983) | 无视觉能力的 fallback 模型错误信息未说明真正原因 | ❌ 无在途 fix PR | 链接 |
| **测试/构建** | [#9965](https://github.com/zeroclaw-labs/zeroclaw/issues/9965) | cron 自定义 shell 测试在并行 runtime gate 触发 ETXTBSY | ❌ 仅为 task 标记 | 链接 |
| **测试/构建** | [#9919](https://github.com/zeroclaw-labs/zeroclaw/issues/9919) | Qdrant 在 builder-only 工厂下被静默回退到 MarkdownMemory | ❌ 无在途 fix PR | 链接 |

**稳定性观察：**
- **Windows 是最大的稳定性盲区**（#7462）：CI 仅在 Linux 跑测试，Windows 客户端用户的体验与主分支存在系统性偏差，且 #7462 自 6 月 10 日创建至今未有针对性修复 PR。
- **误脱敏（#9486）已影响生产场景**——Solana MCP 用户在 Telegram 上完全无法显示钱包地址，属于可见性 100% 损失。
- **跨 PR 的 S1 修复正在分批落地**：#9999（OpenAI compatible）已经针对 #9421 一部分，但 Anthropic / Reliable provider 路径仍未覆盖。

---

## 六、功能请求与路线图信号

今日活跃的"Feature/Enhancement"型 Issue/PR（按已存在的实现 PR 评估可达性）：

| 功能请求 | 编号 | 是否有实施 PR | 路线图信号 |
|---|---|---|---|
| Telegram `/model` 按 provider 分组的分页内联键盘 | [#9895](https://github.com/zeroclaw-labs/zeroclaw/issues/9895) | ❌ | 中（mobile UX 改进） |
| `zeroclaw eval` Agent 评估 harness（replay + live） | [#7065](https://github.com/zeroclaw-labs/zeroclaw/issues/7065) | ❌ | 高（已被 #9967 tracker 跟进） |
| Discord 角色级授权（`allowed_role_ids`） | [#9970](https://github.com/zeroclaw-labs/zeroclaw/issues/9970) | ❌ | 中（in-progress） |
| 系统提示中报告活跃 shell 方言 | [#9788](https://github.com/zeroclaw-labs/zeroclaw/issues/9788) | ❌ | 中（blocked） |
| Agent 可移植 bundle 导出 | [#9986](https://github.com/zeroclaw-labs/zeroclaw/pull/9986) | ✅ XL PR 进行中 | 高（XL 体量，可能滑入 v0.9） |
| Cron/Heartbeat 自动 turn 声明交付契约 | [#9842](https://github.com/zeroclaw-labs/zeroclaw/pull/9842) | ✅ S PR | 高（disclosure gap 修复） |
| ZeroCode transcript 复制上下文菜单 | [#9994](https://github.com/zeroclaw-labs/zeroclaw/pull/9994) | ✅ L PR | 中（体验改进） |
| Google Workspace 工具接受 camelCase 段名 | [#10002](https://github.com/zeroclaw-labs/zeroclaw/pull/10002) | ✅ XS PR | 高（与日历 API 用户直接相关） |

**路线图判断：**
- v0.8.5 稳定线（截止 8/30）已基本定型，**实质性功能合并概率低**；以上新功能多数滑入 **v0.9.0 或更后**。
- **Anthropic OAuth**（#9420）、**Action 预算原子化**（#9996）、**Plugin egress 三件套**（#9137/#9126/#9580）最有希望在 v0.8.5 末班车合并。
- **Eval harness**（#7065 + #9967）有独立 tracker 支撑，已建立路线图，但尚未进入实施阶段。

---

## 七、用户反馈摘要

从活跃议题的评论与摘要中提炼的社区真实声音：

1. **"接入门槛仍然偏高"** —— 多个 RFC（#8603、#9487、#9488）的核心动机都提到"现有 WebSocket / ACP / 通道 webhook 三套接入方式对 OpenAI 协议生态、LobeChat、Continue.dev 等用户不友好"。**结论：标准化对外接口是用户最强烈的无声诉求。**

2. **"在 Telegram 用 Solana MCP 的体验是断裂的"** —— #9486 评论中俄罗斯语用户描述了"询问钱包地址被 [REDACTED] 完全遮蔽"的痛点。**结论：高熵检测器对合法加密地址的误判已造成 100% 数据可见性损失，优先级被低估。**

3. **"shell 命令安全策略要向 Claude Code 看齐"** —— #7155（20 评论）的核心论点。维护者 `@Audacity88` 已多次回应，**结论：allow/ask/deny 几乎已确定为事实标准。**

4. **"Windows 是二等公民"** —— #7462 描述 74 个测试失败、CI 仅 Linux，是长期未被有效处理的结构性问题。**结论：跨平台质量保障仍欠账。**

5. **"商业化提案被快速 wontfix"** —— #9982（ViBo Cloud 托管内存）创建 1 天即被关闭。**结论：社区对项目独立性敏感度高，对外部商业化插件保持警惕。**

6. **"Discord 用户管理颗粒度太粗"** —— #9970 指出 `is_user_allowed` 仅比对 user ID，缺少 role 维度。**结论：企业/团队用户的授权需求开始浮现。**

---

## 八、待处理积压

下列条目**已创建超过 30 天**且仍在 OPEN 状态、未被合并/关闭，建议维护者重点关注：

| 编号 | 创建日期 | 标题 | 链接 |
|---|---|---|---|
| [#6663](https://github.com/zeroclaw-labs/zeroclaw/issues/6663) | 2026-05-14 | Telegram partial 流中显示工具调用进度 | 链接（**今日已关闭**，从积压移除） |
| [#6954](https://github.com/zeroclaw-labs/zeroclaw/issues/6954) | 2026-05-26 | 内部启动 turn 的来源/绑定/回复契约（Rev 2） | 链接 |
| [#6971](https://github.com/zeroclaw-labs/zeroclaw/issues/6971) | 2026-05-27 | 安全姿态与凭据边界 RFC | 链接 |
| [#7065](https://github.com/zeroclaw-labs/zeroclaw/issues/7065) | 2026-06-01 | Agent eval harness（in-progress 但进展慢） | 链接 |
| [#7141](https://github.com/zeroclaw-labs/zer

</details>

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*